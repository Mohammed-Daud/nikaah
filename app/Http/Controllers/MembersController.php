<?php

namespace App\Http\Controllers;

use Image;
use App\UserDetail;
use Illuminate\Http\Request;

class MembersController extends Controller
{
    public function index(){
        return view('members.index');
    }

    public function editProfile(){
        return view('members.profile_edit');
    }

    public function profileImageUpload(Request $request){
        
        $image = $request->file('image');
        $image_name = time() . '.' . $image->getClientOriginalExtension();
        $destinationPath = public_path('/profile_images');
        $resize_image = Image::make($image->getRealPath());
        $resize_image->resize(265, 265, function($constraint){
            $constraint->aspectRatio();
        })->save($destinationPath . '/' . $image_name);
        $image->move($destinationPath, $image_name);

        UserDetail::where('user_id', auth()->user()->id)->update([
            'profile_photo' => $destinationPath . '/' . $image_name
        ]);

        return response()->json([
            'success' => true,
            'image_path'  => url('/').'/'.$destinationPath . '/' . $image_name
        ], 200);
        
    }

    public function coverPhotoUpload(Request $request){
        $image = $request->file('file');
        $image_name = time() . '.' . $image->getClientOriginalExtension();
        $destinationPath = public_path('/cover_photos');
        $resize_image = Image::make($image->getRealPath());
        $resize_image->resize(3264, 816, function($constraint){
            $constraint->aspectRatio();
        })->save($destinationPath . '/' . $image_name);
        $image->move($destinationPath, $image_name);

        UserDetail::where('user_id', auth()->user()->id)->update([
            'profile_photo' => $destinationPath . '/' . $image_name
        ]);

        return response()->json([
            'success' => true,
            'image_path'  => url('/').'/'.$destinationPath . '/' . $image_name
        ], 200);
    }
}
