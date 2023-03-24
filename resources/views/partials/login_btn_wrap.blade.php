<div class="login-wrap"> 
    @guest 
    <div class="btn-wrap primary outline outline-primary-hover has-icon">
        <a href="javascript:void(0);" class="header-login-btn">
            <i class="fa fa-user"></i> Login/Register 
        </a>
    </div> 
    @else 
    <div class="user-login">
        <ul class="wpee-notification-links d-flex align-center">
            <li class="wpee-menu ">
                <a href="profile/test/gifts">
                    <i class="fa fa-gift"></i>Gifts </a>
                </li>
            <li class="wpee-menu ">
                <a href="profile/test/message">
                <i class="fa fa-envelope"></i>Message </a>
            </li>
            <li class="wpee-menu ">
                <a href="profile/test/friend-request">
                <i class="fa fa-users"></i>Friend Request </a>
            </li>
            <li class="wpee-menu notification-profile-img">
                <a class="r-circle overflow-h" href="profile/test/">
                <img src="images/default-profile-img.jpg" class="header-profile-image" alt="test">
                <span class="wpee-tooltip">test</span>
                </a>
                <ul class="wpee-sub-menu no-list">
                    <li class="wpee-menu">
                        <a href="profile/test/">
                        <i class="fa fa-user"></i> My Profile </a>
                    </li>
                    <li class="wpee-menu ">
                        <a href="profile/test/settings">
                        <i class="fa fa-cog"></i>Settings </a>
                    </li>
                    <li class="wpee-menu ">
                        <a href="profile/test/settings/upgrade-account">
                        <i class="fa fa-level-up"></i> Upgrade Account </a>
                    </li>
                    <li class="wpee-sub-menu ">
                        <a href="profile/test/viewed">
                        <i class="fa fa-eye"></i>
                        <span>I Viewed / Viewed Me</span>
                        </a>
                    </li>
                    <li class="wpee-menu ">
                        <a href="profile/test/edit-profile/">
                            <i class="fa fa-pencil-square-o"></i>
                            <span>Edit Profile</span>
                        </a>
                    </li>
                    <li class="wpee-menu">
                        <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            <i class="fa fa-power-off"></i>
                            <span>Logout <span></span>
                            </span>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div> 
    @endguest 
</div>