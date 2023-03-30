<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AdminAuthController extends Controller
{
    public function login(Request $request){
        $this->validate($request, [
            'email' => ['required','email','exists:users,email'],
            'password' => ['required'],
        ]);
        if (Auth::attempt([
            'email' => $request->email, 
            'password' => $request->password,
            'user_type' => 'super_admin',
        ])) {
            // Authentication passed...
            return redirect()->intended('admin/dashboard');
        }
    }
}
