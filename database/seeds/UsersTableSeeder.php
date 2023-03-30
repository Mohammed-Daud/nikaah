<?php

use Illuminate\Database\Seeder;
use App\User;
use App\UserDetail;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $exist = User::where('email', 'super_admin@test.com')->count();
        if(!$exist){

            $user = User::create([
                'first_name' => 'Super',
                'last_name' => 'Admin',
                'email' => 'super_admin@test.com',
                'user_type' => 'super_admin',
                'password' => Hash::make('123456'),
            ]);
    
            UserDetail::create([
                'user_id' => $user->id,
            ]);
            
        }
    }
}
