<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/members', 'MembersController@index');

\Illuminate\Support\Facades\Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/member-registration', 'Auth\MemberAuthController@register')->name('member.registration');
Route::post('/member-password-reset', 'Auth\MemberAuthController@passwordResetRequest');


Route::get('profile/{id}/edit-profile', 'MembersController@editProfile');

//ADMIN 
Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function(){

    // Route::get('/', function(){
    //     dd('asd');
    //     response()->redirect('admin/login');
    // });
    Route::get('login', function(){
        return view('admin.login');
    })->middleware('guest');

    Route::post('login', 'AdminAuthController@login');

    Route::group(['middleware' => ['auth']],function(){
        
        Route::get('dashboard', 'AdminDashboardController@dashboard');

    });

});

//Dummy Pages
Route::get('blank', function () {
    return view('dummy.blank');
});
Route::get('table', function () {
    return view('dummy.table');
});
Route::get('charts', function () {
    return view('dummy.charts');
});