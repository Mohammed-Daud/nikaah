<!--Start of Auto User Login Detail Fill up Script-->
<script type="text/javascript" src="" data-rocket-status="executed">
    jQuery( document ).ready( () => {
    
    const loginForm = jQuery('.login-form');
    if ( loginForm.length ){
        jQuery('input[name="user_login"]', loginForm).val('userdemo');
            jQuery('input[name="user_password"]', loginForm).val('password');
    }
    });
</script>
<!--End of Auto User Login Detail Fill up Script-->
<div class="wpee-register-form popup">
    <div class="wpee-register-form-wrap">
        <span class="close-trigger"><i class="fa fa-times"></i></span>               
        <div class="wpee-lr-tab">
            <h4 data-id="lr-login" class="wpee-lr-tab-title login-tab-trigger active">Login</h4>
            <h4 data-id="lr-register" class="wpee-lr-tab-title login-tab-trigger">Register</h4>
        </div>
        <div class="wpee-lr-tab-content-wrap" data-tab="lr-login">
            <div class="wpee-lr-content-tab lr-forget">
                <div class="lost-password-page">
                    <p class="dspdp-font-2x">
                        <strong>
                            Please enter your username or email address. You will receive a link to create a new password via email. 
                        </strong>
                    </p>
                    <div class="box-email-datails">
                        <form method="post" id="forgot-pass-form" class="dspdp-form-inline">
                            <div class="wpee-login-error"></div>
                            <div class="form-group">
                                <label for="user_n_email">Email</label>
                                <input type="text" id="user_n_email" class="form-control">
                                <input type="submit" class="dspdp-btn dspdp-btn-default" id="get-password" value="Get Password">
                                <img width="32" height="32" id="loading_reset" src="data:image/svg+xml,%3Csvg%20xmlns=&#39;http://www.w3.org/2000/svg&#39;%20viewBox=&#39;0%200%2032%2032&#39;%3E%3C/svg%3E" alt="Loading" data-lazy-src="https://nikaah.wpdating.com/wp-content/plugins/dsp_dating//images/loading.gif">
                                <noscript><img width="32" height="32" id="loading_reset" src="https://nikaah.wpdating.com/wp-content/plugins/dsp_dating//images/loading.gif" alt="Loading" /></noscript>
                                <a class="fpw-link bttn login-tab-trigger" data-id="lr-login" rel="nofollow" data-tab-content="login">Back to login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="wpee-lr-content-tab lr-login active">
                <div class="wpee-login-tab">
                    <form name="login-form" id="login-form" class="login-form" method="post">
                        <div class="wpee-login-error"></div>
                        <input type="hidden" id="wpee-login-nonce" name="wpee-login-nonce" value="d91f32c439">
                        <input type="hidden" name="_wp_http_referer" value="/">            
                        <div class="form-group user-login-group">
                            <label for="login-user-login">Email</label>
                            <input type="email" name="email" class="form-control" id="login-user-login" placeholder="Email" required="">
                        </div>
                        <div class="form-group user-password-group">
                            <label for="login-user-password">Password</label>
                            <input type="password" name="password" id="login-user-password" class="dsp-form-control" placeholder="Password" required="">
                        </div>
                        <div class="form-inline remember-me-group">
                            <div class="form-group">
                                <input name="remember" class="checkbox" id="remember-me" value="forever" type="checkbox">
                                <label for="remember-me">Remember Me</label>
                            </div>
                            <div class="form-group">
                                <a class="fpw-link bttn login-tab-trigger" data-id="lr-forget" href="javascript:void(0);" data-tab-content="forget" rel="nofollow">Forgot Password</a>
                            </div>
                        </div>
                        <input type="hidden" name="redirect_to" class="redirect_to" value="members">
                        <input type="submit" name="login_button" class="btn btn-primary" value="Login">
                        <div class="wpdating-theme-fb">
                            <div class="block">
                                <div class="btn-fb-login">
                                    <a id="fb-btn">
                                    <span class="icon icon-fb"></span>
                                    <span class="title"> Facebook Login </span>
                                    <span class="facebook-login-loader">
                                    <i class="fa fa-spinner fa-pulse fa-fw"></i>
                                    <span class="sr-only">Loading...</span>
                                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            <div class="wpee-lr-content-tab lr-register">
                <div class="box-page">
                    <div class="success-message-info">
                    <span></span>
                    </div>
                </div>
                <form id="wpee-registration-form" method="post" class="dspdp-form-horizontal">
                    <input type="hidden" id="wpee-register-nonce" name="wpee-register-nonce" value="1efe6df7ef">
                    <input type="hidden" name="_wp_http_referer" value="/">            
                    <div class="dsp_reg_main dsp-form-group">
                    
                        <div class="form-group">
                            <label for="first-name">First Name</label>
                            <input type="text" id="first-name" name="first_name" class="text dsp-form-control dspdp-form-control validate-empty " required="">
                        </div>
                        <div class="form-group">
                            <label for="last-name">Last Name</label>
                            <input type="text" id="last_name" name="last_name" class="text dsp-form-control dspdp-form-control validate-empty " required="">
                        </div>
                        <div class="form-group register-password-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" class="text form-control " data-parsley-trigger="change" data-parsley-minlength="4" required="">
                        </div>
                        <div class="form-group register-re-password-group">
                            <label for="re-password">Confirm Password</label>
                            <input type="password" id="re-password" name="re_password" class="text form-control " data-parsley-equalto="#dsp-password" data-parsley-trigger="change" data-parsley-minlength="4" required="">
                        </div>
                        <div class="form-group register-email-group">
                            <label for="email">Email</label>
                            <input type="text" id="email" data-parsley-type="email" name="email" class="text dsp-form-control dspdp-form-control validate-empty" value="" data-parsley-trigger="change" required="">
                        </div>
                        <div class="form-group register-confirm-email-group">
                            <label for="confirm-email">Confirm Email</label>
                            <input type="text" id="confirm-email" name="confirm_email" data-parsley-type="email" class="text dsp-form-control dspdp-form-control validate-empty" value="" data-parsley-equalto="#dsp-email" data-parsley-trigger="change" required="">
                        </div>
                        <div class="form-group register-gender-group">
                            <label for="gender">Gender</label>
                            <select name="gender" id="gender" class="dsp-form-control dspdp-form-control">
                                <option value="M">Man</option>
                                <option value="F">Woman</option>
                                <option value="C">Couple</option>
                            </select>
                        </div>
                        <!-- Upload profile picture -->
                        <div class="form-inline dob-wrap register-birth-date-group">
                            <label>
                                Birth Date
                            </label>
                            <select name="dsp_year" class="dsp-form-control  dspdp-form-control dspdp-xs-form-group">
                                @for($i = 1961; $i <= date('Y'); $i++)
                                <option value="{{ $i }}">{{ $i }}</option>
                                @endfor
                            </select>
                            <select name="dsp_mon" class="dsp-form-control dspdp-form-control  dspdp-xs-form-group">
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <select name="dsp_day" class="dsp-form-control dspdp-form-control dspdp-xs-form-group">
                                @for($i = 01; $i <= 31; $i++)
                                <option value="{{ $i }}">{{ $i }}</option>
                                @endfor
                            </select>
                        </div>
                        <div class="form-group register-terms-group">
                            <input id="terms" class="check validate-empty" name="terms" type="checkbox" value="1" required="">
                            <label for="terms">
                            I agree to the <a href="#" target="_blank">Terms and Conditions</a>.
                            </label>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="dspdp-btn dspdp-btn-default" name="submit" value="Register">
                        </div>
                    </div>
                </form>
            </div>
            <script type="text/javascript" src="{{ asset('js/toastr.min.js') }}" data-rocket-status="executed"></script>
            <script type="text/javascript" src="{{ asset('js/customform.js') }}" data-rocket-status="executed"></script>
        </div>
    </div>
</div>