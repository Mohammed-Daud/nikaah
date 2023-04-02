<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('gender')->nullable();
            $table->date('birth_date')->nullable();
            $table->integer('account_level')->default(1)->comment('1 is free member,2 is paid member,');
            $table->string('cover_photo')->nullable();
            $table->string('profile_photo')->nullable();
            $table->string('seeking')->nullable();
            $table->string('seeking_for')->nullable();
            $table->string('country')->nullable();
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->string('zip')->nullable();
            $table->string('profile_for')->nullable();
            $table->string('eye_color')->nullable();
            $table->string('ethnicity')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('children')->nullable();
            $table->string('income')->nullable();
            $table->string('body_type')->nullable();
            $table->string('blood_type')->nullable();
            $table->string('hair_color')->nullable();
            $table->string('employment')->nullable();
            $table->string('education')->nullable();
            $table->string('my_match')->nullable();
            $table->string('complexion')->nullable();
            $table->longText('about_me')->nullable();
            $table->longText('my_interests')->nullable();
            $table->integer('profile_question_status')->default(1)->comment('1 is public, 2 is private');
            $table->integer('profile_picture_status')->default(1)->comment('1 is public, 2 is private');
            $table->integer('credits')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_details');
    }
}
