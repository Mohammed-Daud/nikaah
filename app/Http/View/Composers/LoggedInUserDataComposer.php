<?php
 
namespace App\Http\View\Composers;
 
use Illuminate\View\View;
 
class LoggedInUserDataComposer
{
    
    protected $users;
 
    
    public function __construct()
    {
        $this->users = auth()->user();
    }
 
    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('user', $this->users);
    }
}