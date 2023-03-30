<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\UserDetail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class MemberAuthController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    public function register(Request $request)
    {
        $existingMember = User::where([
            'email' => $request->email,
        ])->count();

        if($existingMember != 0){
            return response()->json([
                'status' => false,
                'errors' => [
                    'toastr' => 'Email is already registered.'
                ]
            ]);
            return response()->json(['success' => 'User created successfully!']);
        }

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'user_type' => 'member',
            'password' => Hash::make($request->password),
        ]);

        UserDetail::create([
            'user_id' => $user->id,
            'gender' => $request->gender,
            'birth_date' => $request->dsp_year.'-'.$request->dsp_mon.'-'.$request->dsp_day,//2023-02-01 Y-m-d
        ]);


        if (Auth::attempt(['email' => $user->email, 'password' => $request->password])) {
            // Authentication passed...
            return response()->json([
                'status' => true,
                'auto_login' => true,
                'redirect_url' => 'members'
            ],200);
        }
        
        return response()->json([
            'status' => false,
        ],500);
        
        // $this->validator($request->all())->validate();

        
    }

    public function passwordResetRequest(Request $request){
        
        $existingMember = User::where([
            'email' => $request->email,
        ])->first();

        if(!$existingMember){
            return response()->json([
                'status' => false,
                'errors' => [
                    'toastr' => 'Email is not registered.'
                ]
            ]);
        }

        $newPassword = $this->generatePassport();
        $user = User::find($existingMember->id);
        $user->password = Hash::make($newPassword);
        $user->save();

        $data = [
            'newPassword' => $newPassword
        ];
        Mail::send('mails.reset_pass_link', $data, function($message) use ($existingMember) {
            $message->to($existingMember->email, $existingMember->first_name)
                    ->subject('Reset Password');
            $message->from('xyz@gmail.com','Admin');
        });

        

        return response()->json([
            'status' => true
        ],200);
    }

    private function generatePassport() {
        $passport = '';
        $passport .= chr(rand(65, 90));
        $passport .= chr(rand(65, 90));
        $passport .= rand(1000000, 9999999);
        $passport .= chr(rand(65, 90));
        return $passport;
    }
}
