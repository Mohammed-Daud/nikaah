const displayBlock = (selector, option) => {
    if (option === 'show') {
        jQuery(selector).block({
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.6
            },
            message: '<h1>Please Wait...</h1>'
        });
    } else {
        jQuery(selector).unblock();
    }
}



jQuery('#wpee-registration-form .register-first-name-group #first-name').focusin(event => {
    jQuery('#wpee-registration-form .register-first-name-group').removeClass('form-group-error');
    jQuery('#wpee-registration-form .register-first-name-group .input-error').remove();
});

jQuery('#wpee-registration-form .register-last-name-group #last-name').focusin(event => {
    jQuery('#wpee-registration-form .register-last-name-group').removeClass('form-group-error');
    jQuery('#wpee-registration-form .register-last-name-group .input-error').remove();
});

jQuery('.register-password-group #password').focusin(event => {
    jQuery('.register-password-group').removeClass('form-group-error');
    jQuery('.register-password-group .input-error').remove();
});

jQuery('.register-re-password-group #re-password').focusin(event => {
    jQuery('.register-re-password-group').removeClass('form-group-error');
    jQuery('.register-re-password-group .input-error').remove();
});



jQuery('.register-username-group #username').focusin(event => {
    jQuery('#wpee-registration-form .register-username-group').removeClass('form-group-error');
    jQuery('#wpee-registration-form .register-username-group .input-error').remove();
});

jQuery('.register-email-group #email').focusin(event => {
    jQuery('.register-email-group').removeClass('form-group-error');
    jQuery('.register-email-group .input-error').remove();
});

jQuery('.register-confirm-email-group #confirm-email').focusin(event => {
    jQuery('.register-confirm-email-group').removeClass('form-group-error');
    jQuery('.register-confirm-email-group .input-error').remove();
});

let registerFormData;
let registerForm;
jQuery("#wpee-registration-form").on('submit', event => {
    event.preventDefault();

    registerForm = event.currentTarget;

    displayBlock(registerForm, 'show');

    jQuery('#wpee-registration-form .form-group').removeClass('form-group-error');
    jQuery('#wpee-registration-form .form-group .input-error').remove();

    let error = [];


    // const username = jQuery('input[name="username"]', registerForm).val().trim();
    // const usernameFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // if ( username.length === 0 ){
    //     jQuery('.register-username-group').addClass('form-group-error');
    //     jQuery('.register-username-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Enter username.'  + '</span>');
    //     error['username'] = true;
    // } else if ( username.includes(" ") ){
    //     jQuery('.register-username-group').addClass('form-group-error');
    //     jQuery('.register-username-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Username can not have spaces.'  + '</span>');
    //     error['username'] = true;
    // } else if ( usernameFormat.test( username ) ) {
    // jQuery('.register-username-group').addClass('form-group-error');
    //         jQuery('.register-username-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Username can not have special characters.'  + '</span>');
    //         error['username'] = true;
    // }

    const email = jQuery('input[name="email"]', registerForm).val().trim();
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,10})?$/;
    if (email.length === 0) {
        jQuery('.register-email-group').addClass('form-group-error');
        jQuery('.register-email-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Enter email.' + '</span>');
        error['email'] = true;
    } else if (!emailReg.test(email)) {
        jQuery('.register-email-group').addClass('form-group-error');
        jQuery('.register-email-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Please enter a valid email address.' + '</span>');
        error['email'] = true;
    }

    const confirmEmail = jQuery('input[name="confirm_email"]', registerForm).val().trim();
    if (confirmEmail.length === 0) {
        jQuery('.register-confirm-email-group').addClass('form-group-error');
        jQuery('.register-confirm-email-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Confirm email.' + '</span>');
        error['confirm-email'] = true;
    } else if (confirmEmail !== email) {
        jQuery('.register-confirm-email-group').addClass('form-group-error');
        jQuery('.register-confirm-email-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Provided emails are not same. Please fill again.' + '</span>');
        error['confirm-email'] = true;
    }

    const first_name = jQuery('input[name="first_name"]', registerForm).val().trim();
    if (first_name.length === 0) {
        jQuery('.register-first-name-group').addClass('form-group-error');
        jQuery('.register-first-name-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Enter first name.' + '</span>');
        error['first-name'] = true;
    }

    const last_name = jQuery('input[name="last_name"]', registerForm).val().trim();
    if (last_name.length === 0) {
        jQuery('.register-last-name-group').addClass('form-group-error');
        jQuery('.register-last-name-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Enter last name.' + '</span>');
        error['last-name'] = true;
    }

    const password = jQuery('input[name="password"]', registerForm).val().trim();
    if (password.length === 0) {
        jQuery('.register-password-group').addClass('form-group-error');
        jQuery('.register-password-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Enter password.' + '</span>');
        error['password'] = true;

        const rePassword = jQuery('input[name="re_password"]', registerForm).val().trim();
        if (rePassword.length === 0) {
            jQuery('.register-re-password-group').addClass('form-group-error');
            jQuery('.register-re-password-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Confirm password.' + '</span>');
            error['re-password'] = true;
        } else if (rePassword !== password) {
            jQuery('.register-re-password-group').addClass('form-group-error');
            jQuery('.register-re-password-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Please enter the same password in the two password fields.' + '</span>');
            error['re-password'] = true;
        }
    }


    if (Object.keys(error).length > 0) {
        displayBlock(registerForm, 'hide');
        let [first] = Object.keys(error);
        document.querySelector('.register-' + first + '-group').scrollIntoView({ behavior: 'smooth' })
        return false;
    }

    let registerValidationFormData = new FormData(registerForm);
    //registerValidationFormData.append('action', 'wpee_validate_register_form');


    jQuery.ajax({
        url: 'member-registration',
        type: 'POST',
        data: registerValidationFormData,
        contentType: false,
        processData: false,
        success: response => {
            displayBlock(registerForm, 'hide');
            // response = JSON.parse(response);
            console.log(response);
            console.log(response.status);
            console.log(response.errors);
            if (response.status === false) {
                displayBlock(registerForm, 'hide');
                jQuery.each(response.errors, (index, value) => {
                    if (index === 'toastr') {
                        toastr.error(value);
                    } else {
                        jQuery('.register-' + index + '-group').addClass('form-group-error');
                        jQuery('.register-' + index + '-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + value + '</span>');
                    }
                });
                let [first] = Object.keys(response.errors);
                document.querySelector('.register-' + first + '-group').scrollIntoView({ behavior: 'smooth' });
                return false;
            } else {
                if (response.status === true) {
                    if (response.auto_login === true) {
                        window.location.href = response.redirect_url;
                    } else {
                        jQuery(parentTarget).hide();
                        jQuery('.success-message-info span').html(response.message);
                    }
                    return true;
                } else {
                    jQuery.each(response.errors, (index, value) => {
                        jQuery('.register-' + index + '-group').addClass('form-group-error');
                        jQuery('.register-' + index + '-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + value + '</span>');
                    });
                    let [first] = Object.keys(response.errors);
                    document.querySelector('.register-' + first + '-group').scrollIntoView({ behavior: 'smooth' });
                    return false;
                }
                //registerFormData = new FormData( registerForm);
                //registerFormData.append('action', 'wpee_wpee_form_registration');
                //registerFormData.append('lang', '');


                // submitRegisterFormAjaxRequest(registerForm);
            }
        },
        error: (request, status, error) => {
            displayBlock(registerForm, 'hide');
            toastr.error('Something went wrong. Please try again later!');
            console.warn('Something went wrong');
            return false;
        }
    });

});


/**
 * Send ajax request for register form submit to server
 *
 */
function submitRegisterFormAjaxRequest(parentTarget) {
    jQuery.ajax({
        url: 'https://nikaah.wpdating.com/wp-admin/admin-ajax.php',
        type: 'POST',
        data: registerFormData,
        contentType: false,
        processData: false,
        success: response => {
            if (response) {
                response = JSON.parse(response);
                if (response.success === true) {
                    if (response.auto_login === true) {
                        window.location.href = response.redirect_url;
                    } else {
                        jQuery(parentTarget).hide();
                        jQuery('.success-message-info span').html(response.message);
                    }
                    return true;
                } else {
                    jQuery.each(response.errors, (index, value) => {
                        jQuery('.register-' + index + '-group').addClass('form-group-error');
                        jQuery('.register-' + index + '-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + value + '</span>');
                    });
                    let [first] = Object.keys(response.errors);
                    document.querySelector('.register-' + first + '-group').scrollIntoView({ behavior: 'smooth' });
                    return false;
                }
            } else {
                toastr.error('Something went wrong. Please try again later!');
                console.warn('Something went wrong');
                return false;
            }
        },
        error: (request, status, error) => {
            toastr.error('Something went wrong. Please try again later!');
            console.warn('Something went wrong');
            return false;
        },
        complete: () => {
            displayBlock(parentTarget, 'hide');
        }
    });
}




jQuery('#login-form').on('submit', async(event) => {
    event.preventDefault();

    jQuery("#login-form .form-group").removeClass('form-group-error');
    jQuery('#login-form .form-group .input-error').remove();
    jQuery('.wpee-login-error').hide(420);
    jQuery('.wpee-login-error').html('');

    const loginForm = event.currentTarget;

    const userLogin = jQuery('input[name="email"]', loginForm).val().trim();
    const password = jQuery('input[name="password"]', loginForm).val().trim();

    if (userLogin.length === 0 || password.length === 0) {
        jQuery('.login-error-message').html('All fields required.');
        return false;
    }

    const data = {
        action: 'wpee_login_process',
        security: jQuery('input[name="wpee-login-nonce"]', loginForm).val().trim(),
        email: userLogin,
        password: password,
        remember: jQuery('input[name="remember"]', loginForm).val().trim(),
        redirect_to: jQuery('input[name="redirect_to"]', loginForm).val().trim()
    };

    await jQuery.ajax({
        url: 'login',
        data: data,
        type: 'POST',
        dataType: 'json',
        beforeSend: () => {
            jQuery('.login_error').remove();
            jQuery(loginForm).block({
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.6,
                },
                message: '<h1>Please Wait...</h1>'
            });
        },
        success: result => {
            window.location.href = 'home';
            if (result.success === 1) {
                // window.location = result.redirect;
                window.location = '/';
                return true;
            } else {
                if (result.error === 'invalid_email') {
                    jQuery('.user-login-group').addClass('form-group-error');
                    jQuery('.user-login-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Invalid Email' + '</span>');
                } else if (result.error === 'invalid_username') {
                    jQuery('.user-login-group').addClass('form-group-error');
                    jQuery('.user-login-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Invalid Username' + '</span>');
                } else if (result.error === 'incorrect_password') {
                    jQuery('.user-password-group').addClass('form-group-error');
                    jQuery('.user-password-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Invalid Password' + '</span>');
                } else if (result.error === 'denied') {
                    jQuery('.wpee-login-error').html('You need to activate your account.');
                    jQuery('.wpee-login-error').show(500);
                }
                return false;
            }
        },
        error: () => {
            console.warn('Something went wrong');
            return false;
        },
        complete: () => {
            jQuery(loginForm).unblock();
            window.location = '/';
        }
    });
});

jQuery('.user-login-group').focusin(event => {
    jQuery(event.currentTarget).removeClass('form-group-error');
    jQuery('.user-login-group .input-error').remove();
});

jQuery('.user-password-group').on('focusin', event => {
    jQuery(event.currentTarget).removeClass('form-group-error');
    jQuery('.user-password-group .input-error').remove();
});

// jQuery('#forgot-pass-form').on('submit', event => {
// alert('asd');
// event.preventDefault();



// const loginForm = event.currentTarget;

// const userLogin = jQuery('input[name="email"]', loginForm).val().trim();

// if (userLogin.length === 0) {
//     jQuery('.wpee-login-error', loginForm).show().html('All fields required.');
//     return false;
// }

// const data = {
//     email: userLogin,
// };

// await jQuery.ajax({
//     url: 'login',
//     data: data,
//     type: 'POST',
//     dataType: 'json',
//     beforeSend: () => {
//         jQuery('.login_error').remove();
//         jQuery(loginForm).block({
//             overlayCSS: {
//                 backgroundColor: '#fff',
//                 opacity: 0.6,
//             },
//             message: '<h1>Please Wait...</h1>'
//         });
//     },
//     success: result => {
//         window.location.href = 'home';
//         if (result.success === 1) {
//             // window.location = result.redirect;
//             window.location = '/';
//             return true;
//         } else {
//             if (result.error === 'invalid_email') {
//                 jQuery('.user-login-group').addClass('form-group-error');
//                 jQuery('.user-login-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Invalid Email' + '</span>');
//             } else if (result.error === 'invalid_username') {
//                 jQuery('.user-login-group').addClass('form-group-error');
//                 jQuery('.user-login-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Invalid Username' + '</span>');
//             } else if (result.error === 'incorrect_password') {
//                 jQuery('.user-password-group').addClass('form-group-error');
//                 jQuery('.user-password-group').append('<span class="input-error"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'Invalid Password' + '</span>');
//             } else if (result.error === 'denied') {
//                 jQuery('.wpee-login-error').html('You need to activate your account.');
//                 jQuery('.wpee-login-error').show(500);
//             }
//             return false;
//         }
//     },
//     error: () => {
//         console.warn('Something went wrong');
//         return false;
//     },
//     complete: () => {
//         jQuery(loginForm).unblock();
//         window.location = '/';
//     }
// });
// });

jQuery('#forgot-pass-form').on('submit', async(event) => {
    event.preventDefault();
    const loginForm = event.currentTarget;
    const user_n_email = jQuery('#user_n_email', loginForm).val().trim();
    if (user_n_email.length === 0) {
        jQuery('.wpee-login-error', loginForm).show().html('All fields required.');
        return false;
    }
    jQuery("#loading_reset").show();
    jQuery(".notification,.error").slideUp(function() {
        jQuery(".notification,.error").remove()
    });
    alert(user_n_email);
    jQuery.ajax({
        type: "POST",
        url: 'member-password-reset',
        data: {
            email: user_n_email
        },
        dataType: 'json',
        success: function(response) {
            // response = JSON.parse(response); // invallild json format error
            console.log("🚀 ~ file: customform.js:439 ~ jQuery ~ response:", response)
            if (response.status == true) {
                jQuery("#get-password").after('<p style="color:green" class="notification">Please check your e-mail for the password</p>');
                jQuery("#get-password .notification").slideDown();
                jQuery("#user_n_email").val('')
            } else {
                jQuery("#get-password").after('<p style="color:green" class="error">Invalid e-mail</p>');
                jQuery("#get-password .error").slideDown()
            }
            jQuery("#loading_reset").hide()
        }
    });
    return !1
});