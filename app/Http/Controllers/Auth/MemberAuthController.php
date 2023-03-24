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
            'user_type' => 'customer',
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
}
