<header class="site-header" id="masthead">
    <div class="content-wrap d-flex space-bet align-center">
        <div class="left-content">
            <div class="logo-wrap">
                <a class="navbar-brand" href="#">
                <img width="143" height="47" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%20143%2047&#39;%3E%3C/svg%3E" alt="Nikaah" data-lazy-src="images/logo.png">
                <noscript>
                    <img width="143" height="47" src="{{ asset('images/logo.png') }}" alt="Nikaah">
                </noscript>
                </a>
                <a class="navbar-brand high-res" href="{{ url('/') }}">
                    <img width="143" height="47" src="{{ asset('images/logo.png') }}" alt="Nikaah" data-lazy-src="{{ asset('images/logo.png') }}" data-ll-status="loaded" class="entered lazyloaded">
                    <noscript><img width="143" height="47" src="{{ asset('images/logo.png') }}" alt="Nikaah"></noscript>
                </a>
            </div>
            <div class="ham-icon">
                <span></span>
            </div>
        </div>
        <div class="right-content d-flex align-center">
            @include('partials/header_nav')
            @include('partials/login_btn_wrap')
            <div class="lang-wrap"></div>
        </div>
    </div>
</header>