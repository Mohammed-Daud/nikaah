(function($) {
    'use strict';
    $(document).on("change", '.country_trigger', event => {
        let country = $(event.currentTarget).val();
        country = country.replace(/ /g, '%20');
        $.get(eleObj.ajax_url, {
            'action': 'wpee_get_state_options',
            'country': country,
            'lang': eleObj.lang
        }, response => {
            response = JSON.parse(response);
            $(event.currentTarget).parents('form').find('.state_trigger').html(response.content)
        });
        $.get(eleObj.ajax_url, {
            'action': 'wpee_get_city_options',
            'country': country,
            'lang': eleObj.lang
        }, response => {
            response = JSON.parse(response);
            $(event.currentTarget).parents('form').find('.city_trigger').html(response.content)
        })
    });
    $(document).on("change", '.state_trigger', event => {
        let state = $(event.currentTarget).val();
        state = state.replace(/ /g, '%20');
        let country = $(event.currentTarget).parents('form').find('.country_trigger').val();
        country = country.replace(/ /g, '%20');
        $.get(eleObj.ajax_url, {
            'action': 'wpee_get_city_options',
            'country': country,
            'state': state,
            'lang': eleObj.lang
        }, response => {
            response = JSON.parse(response);
            $(event.currentTarget).parents('form').find('.city_trigger').html(response.content)
        })
    });
    $(document).ready(function() {
        $('.login-tab-trigger').on('click', function(e) {
            var tab_id = $(this).attr('data-id');
            $('.wpee-lr-tab-title').removeClass('active');
            if (tab_id == 'lr-forget' || tab_id == 'lr-login') {
                $(this).parents('.wpee-register-form-wrap').find('.wpee-lr-tab .wpee-lr-tab-title:first-child').addClass('active')
            } else {
                $(this).addClass('active')
            }
            $('.login-tab-content').removeClass('active');
            $('.login-tab-content.login').addClass('active');
            $(this).parents('.wpee-register-form-wrap').find('.wpee-lr-tab-content-wrap').attr('data-tab', tab_id);
            $(this).parents('.wpee-register-form-wrap').find('.wpee-lr-content-tab').removeClass('active');
            $(this).parents('.wpee-register-form-wrap').find('.wpee-lr-content-tab.' + tab_id).addClass('active')
        });
        $('.login-wrap').on('click', '.header-login-btn', function(e) {
            e.preventDefault();
            $('.wpee-register-form').addClass('is-open');
            $(document).on('mousedown', 'body', function(e) {
                var container = $(".wpee-register-form-wrap");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    container.parents('.wpee-register-form').removeClass('is-open')
                }
            })
        });
        $('body').on('click', '.login-form-trigger', function(e) {
            e.preventDefault();
            const notice = $(e.currentTarget).data('notice');
            if (notice !== undefined && !confirm(notice)) {
                return !1
            }
            $('.wpee-register-form').addClass('is-open');
            $(document).on('mouseup', 'body', function(e) {
                var container = $(".wpee-register-form-wrap");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    container.parents('.wpee-register-form').removeClass('is-open')
                }
            })
        });

        $('.wpee-register-form.popup .wpee-register-form-wrap').prepend('<span class="close-trigger"><i class="fa fa-times"></i></span>');
        $('.wpee-register-form-wrap .close-trigger').on('click', function() {
            $('.wpee-register-form.popup').removeClass('is-open')
        });
        $('.site-info-popup-main-wrapper .close-trigger').on('click', function() {
            $('.site-info-popup-main-wrapper').removeClass('is-open')
        });
        $('.member-list-tab-wrap').imagesLoaded(function() {
            var $grid = $('.member-list-tab-content').isotope({
                itemSelector: '.member-detail-wrap',
                resize: !0,
                layoutMode: 'fitRows',
            });
            $('.filters-button-group').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                })
            });
            $('.button-group').each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'li', function() {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked')
                })
            })
        });
        if ($('.wpee-delete-list').length) {
            $('.wpee-delete-list').on('click', '.wpee-friend-delete', function(e) {
                e.preventDefault();
                var nonce = $(this).attr('data-nonce');
                var friend = $(this).attr('data-friend-uid');
                var msg = $(this).attr('data-confirm-msg');
                var confirmation = confirm(msg);
                var par = $(this).parents('.friends-section');
                if (confirmation) {
                    $.ajax({
                        type: 'POST',
                        url: eleObj.ajax_url,
                        data: {
                            'action': 'wpee_delete_friend',
                            'nonce': nonce,
                            'friend': friend
                        },
                        cache: !1,
                        success: function(response) {
                            response = JSON.parse(response);
                            if (response.status == 'success') {
                                toastr.success(response.msg);
                                $('#friend' + response.friend_uid).remove();
                                if (par.find('.wpee-delete-list').length < 1) {
                                    par.append('<span class="dsp_span_pointer" style="text-align: center; display: block;">No result found !</span>')
                                }
                            } else {
                                toastr.error(response.msg)
                            }
                        }
                    })
                }
            })
        }
        if ($('.wpee-add-fav-btn').length) {
            $('.wpee-add-fav-btn').on('click', function(e) {
                e.preventDefault();
                var nonce = $(this).attr('data-nonce');
                var fav = $(this).attr('data-fav-uid');
                var par = $(this).parents('.wpee-add-fav-section');
                $.ajax({
                    type: 'POST',
                    url: eleObj.ajax_url,
                    data: {
                        'action': 'wpee_add_favourites',
                        'nonce': nonce,
                        'fav': fav
                    },
                    cache: !1,
                    success: function(response) {
                        response = JSON.parse(response);
                        toastr.success(response.msg)
                    }
                })
            })
        }
        if ($('#send-wink-popup-form').length) {
            $('.wink-popup-wrapper #send-wink-popup-form').on('click', '.save-button', event => {
                event.preventDefault();
                $('.send-wink-popup-form-error-message').html();
                const sendWinkBtn = $(event.currentTarget);
                const winkForm = $('#send-wink-popup-form');
                const formData = winkForm.serialize();
                $.ajax({
                    type: 'POST',
                    url: eleObj.ajax_url,
                    data: formData,
                    beforeSend: () => {
                        sendWinkBtn.parent().parent().block({
                            overlayCSS: {
                                backgroundColor: '#fff',
                                opacity: 0.6
                            },
                            message: `<h1>${eleObj.strings.please_wait}...</h1>`
                        })
                    },
                    success: response => {
                        response = JSON.parse(response);
                        if (response.status === 'success') {
                            $('.popup-main-wrapper').removeClass('is-open');
                            if (response.feature_access_message) {
                                setTimeout(msg => {
                                    const noAccessContent = `<div class="wpee-error-message wpee-wink-error-message"><p>${msg}</p></div>`;
                                    $('.wink-popup-wrapper').html(noAccessContent).fadeIn()
                                }, 500, response.feature_access_message)
                            }
                            toastr.success(response.message)
                        } else if (response.status === 'no_feature_access') {
                            $('.popup-main-wrapper').removeClass('is-open');
                            setTimeout(msg => {
                                const noAccessContent = `<div class="wpee-error-message wpee-wink-error-message"><p>${msg}</p></div>`;
                                $('.wink-popup-wrapper').html(noAccessContent).fadeIn()
                            }, 500, response.message);
                            toastr.error(response.message)
                        } else {
                            if (response.toast) {
                                toastr.error(response.message)
                            } else {
                                $('.send-wink-popup-form-error-message').html(response.message).fadeIn()
                            }
                        }
                    },
                    error: err => {
                        toastr.error(eleObj.strings.failure);
                        console.warn(err)
                    },
                    complete: () => {
                        sendWinkBtn.parent().parent().unblock()
                    }
                })
            })
        }
        $('.gift-action').on('click', '.gift-action-trigger', function() {
            var gift_action = $(this).attr('data-action');
            var gift_id = $(this).data('gift-id');
            if (gift_action == 'delete') {
                var msg = $(this).attr('data-confirm-msg');
                var confirmation = confirm(msg);
                if (!confirm) {
                    return !1
                }
            }
            if ((gift_action == 'delete' && confirmation) || gift_action == 'approve') {
                $.ajax({
                    type: 'POST',
                    url: eleObj.ajax_url,
                    data: {
                        'action': 'wpee_gift_action',
                        'gift_action': gift_action,
                        'gift_id': gift_id
                    },
                    cache: !1,
                    success: function(response) {
                        response = JSON.parse(response);
                        if (response.status == 'deleted' || response.status == 'approved') {
                            if (response.status == 'deleted' && $('#wpee-gift-' + gift_id).length) {
                                $('#wpee-gift-' + gift_id).remove();
                                if ($('.wpee-gifts-received-content').length < 1) {
                                    $('.wpee-gifts-received-wrapper').append(response.empty)
                                }
                            }
                            toastr.success(response.msg)
                        } else {
                            toastr.error(response.msg)
                        }
                    }
                })
            }
        });
        $('.wpee_gift_popup').on('click', function(e) {
            e.preventDefault();
            var nonce = $(this).attr('data-nonce');
            var profile_id = $(this).attr('data-profile-id');
            $('#wpee-popup-container').remove();
            var ele = $(this);
            $.ajax({
                type: 'POST',
                url: eleObj.ajax_url,
                data: {
                    'action': 'wpee_gift_popup',
                    'nonce': nonce,
                    'profile_id': profile_id,
                },
                beforeSend: function() {
                    ele.addClass('loading')
                },
                cache: !1,
                success: function(response) {
                    response = JSON.parse(response);
                    if (response.status == 'success') {
                        $('body').append(response.content)
                    }
                },
                complete: function() {
                    ele.removeClass('loading')
                }
            })
        });
        $('body').on('click', '.wpee-gift-submit', function(e) {
            e.preventDefault();
            var nonce = $(this).siblings('input[name=wpee-gift-option]').val();
            var gifts = document.querySelectorAll('input[name="wpee-gift"]');
            for (var i = 0; i < gifts.length; i++) {
                if (gifts[i].checked) {
                    var gift = gifts[i].value
                }
            }
            var profile_id = $(this).siblings('input[name=profile-id]').val();
            var ele = $(this).parent();
            $.ajax({
                type: 'POST',
                url: eleObj.ajax_url,
                data: {
                    'action': 'wpee_gift_form_action',
                    'nonce': nonce,
                    'gift': gift,
                    'profile_id': profile_id,
                },
                beforeSend: function() {
                    ele.addClass('loading')
                },
                success: function(response) {
                    response = JSON.parse(response);
                    if (response.status == 'success') {
                        toastr.success(response.msg)
                    } else {
                        toastr.error(response.msg)
                    }
                },
                complete: function() {
                    ele.removeClass('loading')
                }
            })
        });
        const saveMeetMeSwipeDetails = (meetAction, currentUserID, profileID, memberMeetMeStatus) => {
            return new Promise((resolve, reject) => {
                $.ajax({
                    type: 'POST',
                    url: eleObj.ajax_url,
                    data: {
                        'action': 'wpee_save_meet_me_swipe_details',
                        'meet_action': meetAction,
                        'current_user_id': currentUserID,
                        'user_id': profileID,
                        'member_meet_me_status': memberMeetMeStatus,
                        'lang': wpee_elementor_js_object.lang
                    },
                    success: response => {
                        resolve(response)
                    },
                    error: error => {
                        reject(error)
                    }
                })
            })
        }
        const getNewMemberMeetMeBox = (currentUserID, filterOptions) => {
            return new Promise((resolve, reject) => {
                $.ajax({
                    type: 'GET',
                    url: eleObj.ajax_url,
                    data: {
                        'action': 'wpee_get_member_meet_me_box',
                        'current_user_id': currentUserID,
                        'filter_options': filterOptions,
                        'lang': wpee_elementor_js_object.lang
                    },
                    success: response => {
                        resolve(response)
                    },
                    error: error => {
                        reject(error)
                    }
                })
            })
        }
        $(document).on('click', '.wpee-meet-me-trigger', async function(e) {
            e.preventDefault();
            const meetAction = $(this).data('action');
            const profileID = $(this).parent().data('profile-id');
            const currentUserID = $(this).parent().data('current-user-id');
            const memberMeetMeStatus = $(this).parent().data('member-meet-me-status');
            $('.meet-to-info').addClass('dsp-meet-to-info-loading');
            try {
                let response = await saveMeetMeSwipeDetails(meetAction, currentUserID, profileID, memberMeetMeStatus);
                response = JSON.parse(response);
                if (response.status === 'success') {
                    if (response.date_message) {
                        $('.site-info-popup-main-wrapper .wpee-message').html(`${response.date_message}`);
                        $('.site-info-popup-main-wrapper').addClass('is-open')
                    }
                    let filterOptions = null;
                    if ($('#meet_me_filter_active').length) {
                        filterOptions = $('#meet_me_filter_form').serialize()
                    }
                    response = await getNewMemberMeetMeBox(currentUserID, filterOptions);
                    response = JSON.parse(response);
                    if (response.status === 'success') {
                        $('.meet-to-info').html(response.content)
                    } else {
                        console.warn(response);
                        toastr.error('Something went wrong')
                    }
                } else {
                    $('.site-info-popup-main-wrapper .wpee-message').html(`${response.message}`);
                    $('.site-info-popup-main-wrapper').addClass('is-open')
                }
            } catch (error) {
                console.warn(error);
                toastr.error('Something went wrong')
            }
            $('.meet-to-info').removeClass('dsp-meet-to-info-loading')
        });
        $(document).on('click', '.wpee-add-friend-trigger', function(e) {
            e.preventDefault();
            var friend_id = $(this).attr('data-friend-id');
            var wpee_action = $(this).attr('data-action');
            var AddEle = $(this);
            $.ajax({
                type: 'POST',
                url: eleObj.ajax_url,
                data: {
                    'action': 'wpee_add_friend_action',
                    'friend_id': friend_id,
                    'wpee_action': wpee_action
                },
                beforeSend: function() {},
                success: function(response) {
                    response = JSON.parse(response);
                    if ($('.wpee-friend-' + response.profile_id).length) {
                        $('.wpee-friend-' + response.profile_id).attr({
                            "data-action": response.action
                        });
                        $('.wpee-friend-' + response.profile_id).text(response.text)
                    }
                    toastr.success(response.msg);
                    if (response.btntext != undefined) {
                        AddEle.text(response.btntext)
                    }
                }
            })
        });
        $('.panel-title-toggle').on('click', function() {
            $(this).parents('.panel-heading').siblings('.panel-collapse').toggleClass('in')
        });
        $('#wpee-status-form').on('submit', function(e) {
            e.preventDefault();
            const status = $(this).find('textarea[name=profile_status]').val();
            const user_id = $(this).find('input[name=user-id]').val();
            const nonce = $(this).find('input[name=profile-status-nonce]').val();
            const submitBtn = $(this).find('input[type=submit]');
            if (status !== '' && status != null) {
                $.ajax({
                    type: 'POST',
                    url: eleObj.ajax_url,
                    data: {
                        'action': 'wpee_post_status',
                        'status': status,
                        'user_id': user_id,
                        'nonce': nonce
                    },
                    beforeSend: () => {
                        submitBtn.val(eleObj.strings.feed.posting + '...');
                        submitBtn.attr('disabled', !0)
                    },
                    success: response => {
                        response = JSON.parse(response);
                        if (response.status === 'success') {
                            if (response.instant_update === !0) {
                                const data = response.data;
                                const content = `
												<li class='wpee-feed-list'>
													<div class='feed-header d-flex align-center'>
														<div class="feed-profile-img">
															<a href='` + data.profile_link + `'>
																<img src='` + data.user_image + `' alt='` + data.user_display_name + `'/>
															</a>
														</div>
														<div class="feed-title-wrap">
															<div class="feed-title">
																<strong><a href='` + data.profile_link + `'>` + data.user_display_name + `</a> </strong>
																` + eleObj.strings.feed.just_added_new + `
																<strong>` + eleObj.strings.feed.status_update + ` </strong>
															</div>
															<div data-time='` + data.date_time + `'>
																` + data.display_date_time + `
															</div>
														</div>
													</div>
													<div class='feed-content feed-status-content'>
														<div class='status-box'>
															<span class='status-wrap'>` + data.new_status + `</span>
														</div>
													</div>
												</li>`;
                                if ($('#news-feed .feeds-content').hasClass('no-feeds')) {
                                    $('#news-feed .feeds-content').html(`<ul>${content}</ul>`).fadeIn();
                                    $('#news-feed .feeds-content').removeClass('no-feeds')
                                } else {
                                    if ($('#news-feed .feeds-content').find('.feed-status-content').length !== 0) {
                                        $('.feed-status-content').parent().fadeOut(999, () => {
                                            $('.feed-status-content').parent().remove();
                                            $('#news-feed .feeds-content ul').prepend(content).fadeIn(999)
                                        })
                                    } else {
                                        $('#news-feed .feeds-content ul').prepend(content).fadeIn(999)
                                    }
                                }
                            }
                            $('.profile-status-text').val('');
                            toastr.success(response.message)
                        } else {
                            toastr.error(response.message)
                        }
                    },
                    complete: () => {
                        submitBtn.val(eleObj.strings.feed.post);
                        submitBtn.removeAttr('disabled')
                    }
                })
            } else {
                alert('Your status is empty')
            }
            return !1
        });
        $('#wpee_edit_location').click(function(e) {
            e.preventDefault();
            wpee_getLocation()
        });
        if ($('.wpee-report-user-btn').length) {
            $('.wpee-report-user-btn').on('click', function(e) {
                $('.wpee-report-user-form-wrap').addClass('is-open');
                $(document).on('mouseup', 'body', function(e) {
                    var container = $(".wpee-inner-msg");
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        $(".wpee-inner-msg").parent().removeClass('is-open')
                    }
                })
            })
        }
        if ($('#wpee-report-user').length) {
            $('#wpee-report-user').on('submit', function(e) {
                e.preventDefault();
                $('.wpee-report-user-form-wrap').addClass('is-open');
                var reportData = $(this).serializeArray();
                var reportEle = $(this);
                reportData.push({
                    'name': 'action',
                    'value': 'wpee_report_user_action'
                });
                $.ajax({
                    type: 'POST',
                    url: eleObj.ajax_url,
                    data: reportData,
                    cache: !1,
                    success: function(response) {
                        response = JSON.parse(response);
                        toastr.success(response.msg);
                        reportEle.find('textarea').val('')
                    }
                });
                return !1
            })
        }
        $('.profile-header-menu .profile-menu-wrapper').prepend('<div class="ham-icon"><span></span></div>');
        $('.profile-menu-wrapper .ham-icon').on('click', function(e) {
            $(this).toggleClass('is-triggred');
            $('.profile-menu-tab').toggleClass('is-open');
            e.stopPropagation()
        });
        $('.wpee-create-button,.wpee-edit-button').on('click', function(e) {
            e.preventDefault();
            $('.create-popup-wrapper').addClass('is-open')
        });
        $('.pop-up-bg').on('click', function() {
            $('.popup-main-wrapper').removeClass('is-open')
        });
        $('body').on('click', '.no-profile-trigger', event => {
            event.preventDefault();
            const confirmText = $(event.currentTarget).data('confirm-text');
            if (confirm(confirmText)) {
                window.location.href = $(event.currentTarget).attr('href')
            }
            return !1
        });
        $('body').on('click', '.wpee-custom-tooltip', event => {
            event.preventDefault()
        })
    })
})(jQuery);

function wpee_getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(wpee_showPosition)
    } else {
        x.innerHTML = "Geolocation is not supported by this browser."
    }
}

function wpee_showPosition(position) {
    userLat = position.coords.latitude;
    userLng = position.coords.longitude;
    var element = document.getElementById('wpee_edit_location');
    var site_url = element.getAttribute("data-siteurl");
    var redirect_url = site_url + "?lat=" + userLat + "&lng=" + userLng;
    window.location.href = redirect_url
}