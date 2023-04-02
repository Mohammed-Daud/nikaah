<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class UserDetail extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'user_id', 
        'gender', 
        'birth_date',
        'account_level',
        'cover_photo',
        'profile_photo',
        'seeking',
        'seeking_for',
        'country',
        'state',
        'city',
        'zip',
        'profile_for',
        'eye_color',
        'ethnicity',
        'marital_status',
        'children',
        'income',
        'body_type',
        'blood_type',
        'hair_color',
        'employment',
        'education',
        'my_match',
        'complexion',
        'about_me',
        'my_interests',
        'profile_question_status',
        'profile_picture_status',
    ];
    /**
     * Get the user that owns the phone.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
