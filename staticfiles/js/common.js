"use strict";
/*Global variables*/

/*===> Is mobile function <===*/
function isMobileDeviceUsed() {
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
    return isMobile;
}

/*===> Lazy load image script <===*/
function lazyLoader() {
    $(function() {
        $('.lazy').Lazy({
            combined: true,
            delay: 50
        });
    });
}

/*===> Parallax script <===*/
function parallax() {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
}

/*===> Mobile menu scripts <===*/
function mobileMenu() {
    $('.hamburger').on('click', function(){
        $('.main-nav').addClass('active');
        $('body').addClass('active');
    })

    $('.close-nav').on('click', function(){
        $('.main-nav').removeClass('active');
        $('body').removeClass('active');
    })
}

/*===> Mobile navigation scripts <===*/
function mobileNav() {
    $('.main-nav-list a i').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            parent = $this.closest('li'),
            dropDown = parent.find('.tt-dropdown-menu'),
            innerDropDown = parent.find('.inner-dropdown-menu');

        parent.toggleClass('active');

        if (dropDown.length > 0) {
            dropDown.slideToggle();
        } else if (innerDropDown.length > 0) {
            innerDropDown.slideToggle();
        }
    })

    $(document).on('mouseup', function(e) {
        var div = $(".main-nav"); // ID or CLASS f elemen click
        if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass('active')) {
            $('.main-nav').removeClass('active');
            $('body').removeClass('active');
        }
    })
}

/*===> Mobile header scripts <===*/
function mobileHeader() {
    var winWidth, mainMenu;
    $(window).on('load resize', function() {
        winWidth = $(this).width();

        if (winWidth >= 1200 && mainMenu !== undefined) {
            mainMenu = $('.main-nav').detach();
            mainMenu.insertAfter('.top-line .logo');
        } else if (winWidth < 1200) {
            mainMenu = $('header .main-nav').detach();
            mainMenu.insertAfter('header');
            // $('.main-header nav').prepend(mainMenu);
        }
    })
}

/*===> First latter <===*/
function firstLettet() {
    $('.f-letter').html(function (i, html) {
        return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<span class="f-letter-wrap">$1</span>');
    });
}

/*===> Sticky header <===*/
function stickyHeder() {
    if ($('header') !== undefined) {
        var headToStick = $('header'),
            scroll = $(window).scrollTop(),
            headToStickScroll = headToStick.offset().top;

        if ($(window).width()<=992 || $(window).height() <= 570) {
            headToStickScroll = 500;
        } else {
            headToStickScroll = 199;
        }

        var navHeight = headToStick.outerHeight(true);
        $('<div class="clone-nav"></div>').insertAfter('header').css('height', navHeight).hide();

        refresh(scroll);

        $(window).on('scroll', function(){
            scroll = $(window).scrollTop();
            refresh(scroll);
        })

        $(window).on('resize', function() {
            refreshVar();
        })

        function refresh(scroll) {
            if (scroll > headToStickScroll) {
                headToStick.addClass('is-scroll');
                $('.clone-nav').show();
            } else {
                headToStick.removeClass('is-scroll');
                $('.clone-nav').hide();
            }

            if(scroll > 0) {
                $('.quickLinks-wrap').addClass('scroll');
            } else {
                $('.quickLinks-wrap').removeClass('scroll');
            }
        }

        function refreshVar() {
            headToStick = $('header');
            // headToStickScroll = 199;
            scroll = $(window).scrollTop();
            navHeight = headToStick.outerHeight(true);
            $('.clone-nav').css('height', navHeight);

            if ($(window).width()<=992 || $(window).height() <= 570) {
                headToStickScroll = 500;
            } else {
                headToStickScroll = 199;
            }

            refresh(scroll, headToStickScroll);
        }
    }
}

/*===> quickLinks <===*/
function quickLinks() {
    var winHeight, winWidth, quickLinks, quickLinksDesc, quickItem, backItem;
    $(window).on('load resize', function() {
        winHeight = $(this).height();
        winWidth = $(this).width();
        buildQuickLink(winHeight, winWidth);
    })

    // quickLinkTab(winHeight, winWidth);

    function buildQuickLink(winHeight, winWidth) {
        if (winHeight <= 570 || winWidth <=992) {
            $('.quickLinks-wrap').addClass('mobile');
            /*quickLinks = $('.quickLinks-wrap').detach();
            quickLinks.insertBefore('header');
            quickLinksDesc = $('.quickLinks-desc').detach();
            $('.quickLinks-wrap').append(quickLinksDesc);*/
        } else {
            $('.quickLinks-wrap').removeClass('mobile');
            /*backItem = $('.quickLinks-desc');
            quickItem = $('.quickLinks-item');
            for (var i = quickItem.length - 1; i >= 0; i--) {
                for (var j = backItem.length - 1; j >= 0; j--) {
                    if (j == i) {
                        quickItem[i].append(backItem[j]);
                    }
                }
            }*/
        }
        return;
    }
}

function quickLinkTab() {
    var winHeight = $(window).height(),
        winWidth = $(window).width();

    if (winHeight > 570 || winWidth > 992) {
        $('.quickLinks-item').each(function(index) {
            var $this = $(this),
                obj = $('.quickLinks-item');
            var dataFor = $this.attr('data-for-quick');
            var thisTop = $this.position().top;
            var elem = $this.closest('.quickLinks-wrap').find('[data-to-quick = '+dataFor+']');
            elem.css({
                'top':thisTop+25+'px'
            });
        })
    }

    $('.quickLinks-item').on('mouseover', function() {
        var winHeight = $(window).height(),
            winWidth = $(window).width();
        var $this = $(this),
            obj = $('.quickLinks-item');

        if (winHeight > 570 || winWidth > 992) {
            var dataFor = $this.attr('data-for-quick');
            var thisTop = $this.position().top;
            $('[data-to-quick]').removeClass('hover');
            var elem = $this.closest('.quickLinks-wrap').find('[data-to-quick = '+dataFor+']');
            elem.addClass('hover').css({
                'top':thisTop+'px'
            });
        }
    })

    $('.quickLinks-wrap').on('mouseleave', function() {
        var $this = $(this),
            obj = $('.quickLinks-item');

        var dataFor = $this.attr('data-for-quick');
        var thisTop = $this.position().top;
        $('[data-to-quick]').removeClass('hover');
        var elem = $this.closest('.quickLinks-wrap').find('[data-to-quick = '+dataFor+']');
        elem.removeClass('hover').css({
            'top':thisTop+25+'px'
        });
    })

    $('.quickLinks-item').on('click', function() {
        var winHeight = $(window).height(),
        winWidth = $(window).width();
        var $this = $(this),
            obj = $('.quickLinks-item');
        if (winHeight <= 570 || winWidth <=992) {
            if ($this.hasClass('active')) {
                $this.removeClass('active');
                // $('[data-to-quick]').removeClass('show');
                $('[data-to-quick]').slideUp();
            } else {
                obj.removeClass('active');
                $this.addClass('active');
                var dataFor = $this.attr('data-for-quick');
                // $('[data-to-quick]').removeClass('show');
                // $this.closest('.quickLinks-wrap').find('[data-to-quick = '+dataFor+']').addClass('show');
                $('[data-to-quick]').slideUp();
                $this.closest('.quickLinks-wrap').find('[data-to-quick = '+dataFor+']').slideDown();
            }
        }
    })
}
$('body').on('mouseup touchend',function(e){
            var div = $(".quickLinks-item, .quickLinks-desc");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                /**/
                var $this = $('.quickLinks-wrap'),
                    obj = $('.quickLinks-item');

                var dataFor = $this.attr('data-for-quick');
                var thisTop = $this.position().top;
                $('[data-to-quick]').removeClass('hover');
                var elem = $this.closest('.quickLinks-wrap').find('[data-to-quick = '+dataFor+']');
                elem.removeClass('hover').css({
                    'top':thisTop+25+'px'
                });
                /**/

            }
        });

/*===> form element <===*/
function inputMask() {
    $('input[type="tel"]').mask("+0-000-000-00-00");

    if ($('.datetimepicker').length) {
        $('.datetimepicker').datetimepicker({
            format: 'DD/MM/YYYY',
            ignoreReadonly: true,
            // debug: true,
            icons: {
                time: 'far fa-clock',
                date: 'far fa-calendar-alt',
                up: 'fas fa-angle-up',
                down: 'fas fa-angle-down',
                previous: 'fas fa-angle-left',
                next: 'fas fa-angle-right',
                today: 'far fa-calendar-alt',
                clear: 'fas fa-times',
                close: 'fas fa-times'
            }
        });
    }
    if ($('.timepicker').length) {
        $('.timepicker').datetimepicker({
            format: 'LT',
            ignoreReadonly: true,
            icons: {
                time: 'far fa-clock',
                up: 'fas fa-angle-up',
                down: 'fas fa-angle-down',
                previous: 'fas fa-angle-left',
                next: 'fas fa-angle-right'
            }
        });
    }
}

/*===> Init sliders <===*/
function sliderInit() {
    if ($('.main-slider').length>0) {
        $('.main-slider').each(function() {
            var slideSpeed = $(this).attr('data-slick-speed') * 1;
            var slideAutoplay = $.parseJSON($(this).attr('data-slick-autoplay'));

            $('.main-slider').slick({
                arrows: false,
                dots: true,
                fade: true,
                speed: 700,
                autoplay: slideAutoplay,
                autoplaySpeed: slideSpeed,
            });
        })
    }

    if ($('.education-slier').length>0) {
        $('.education-slier').each(function() {
            var slideShow = $(this).attr('data-show-count') * 1;
            var slideShowMd = $(this).attr('data-show-count-md') * 1;
            var slideShowMob = $(this).attr('data-show-count-mob') * 1;
            var slideSpeed = $(this).attr('data-slick-speed') * 1;
            var slideAutoplay = $.parseJSON($(this).attr('data-slick-autoplay'));

            $(this).slick({
                arrows: false,
                dots: true,
                infinite: true,
                adaptiveHeight: true,
                slidesToShow: slideShow,
                autoplay: slideAutoplay,
                autoplaySpeed: slideSpeed,
                slidesToScroll: 1,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: slideShowMd,
                      }
                    },
                    {
                      breakpoint: 765,
                      settings: {
                        slidesToShow: slideShowMob,
                      }
                    }
                ]
            })
        })
    }

    if ($('.news-slider').length>0) {
        $('.news-slider').each(function() {
            var slideShow = $(this).attr('data-show-count') * 1;
            var slideShowMd = $(this).attr('data-show-count-md') * 1;
            var slideShowMob = $(this).attr('data-show-count-mob') * 1;
            var slideSpeed = $(this).attr('data-slick-speed') * 1;
            var slideAutoplay = $.parseJSON($(this).attr('data-slick-autoplay'));

            $(this).slick({
                arrows: false,
                dots: true,
                infinite: true,
                adaptiveHeight: true,
                slidesToShow: slideShow,
                slidesToScroll: 1,
                swipeToSlide: true,
                autoplay: slideAutoplay,
                autoplaySpeed: slideSpeed,
                adaptiveHeight: true,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: slideShowMd,
                      }
                    },
                    {
                      breakpoint: 705,
                      settings: {
                        slidesToShow: slideShowMob,
                      }
                    }
                ]
            })
        })
    }

    if ($('.pricing-packages-slider').length>0) {
        $('.pricing-packages-slider').each(function() {
            var slideShow = $(this).attr('data-show-count') * 1;
            var slideShowMd = $(this).attr('data-show-count-md') * 1;
            var slideShowMob = $(this).attr('data-show-count-mob') * 1;
            var slideSpeed = $(this).attr('data-slick-speed') * 1;
            var slideAutoplay = $.parseJSON($(this).attr('data-slick-autoplay'));

            $(this).slick({
                arrows: false,
                dots: true,
                infinite: false,
                adaptiveHeight: true,
                slidesToShow: slideShow,
                slidesToScroll: 1,
                swipeToSlide: true,
                autoplay: slideAutoplay,
                autoplaySpeed: slideSpeed,
                adaptiveHeight: true,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: slideShowMd,
                      }
                    },
                    {
                      breakpoint: 705,
                      settings: {
                        slidesToShow: slideShowMob,
                      }
                    }
                ]
            })
        })
    }

    if ($('.testimonial-slider').length>0) {
        $('.testimonial-slider').each(function() {
            var slideShow = $(this).attr('data-show-count') * 1;
            var slideShowMd = $(this).attr('data-show-count-md') * 1;
            var slideShowMob = $(this).attr('data-show-count-mob') * 1;
            var slideSpeed = $(this).attr('data-slick-speed') * 1;
            var slideAutoplay = $.parseJSON($(this).attr('data-slick-autoplay'));

            $(this).slick({
                arrows: false,
                dots: true,
                infinite: false,
                adaptiveHeight: true,
                slidesToShow: slideShow,
                slidesToScroll: 1,
                swipeToSlide: true,
                autoplay: slideAutoplay,
                autoplaySpeed: slideSpeed,
                adaptiveHeight: true,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: slideShowMd,
                      }
                    },
                    {
                      breakpoint: 705,
                      settings: {
                        slidesToShow: slideShowMob,
                      }
                    }
                ]
            })
        })
    }

    if ($('.statement-slider').length>0) {
        $('.statement-slider').each(function() {
            var slideShow = $(this).attr('data-show-count') * 1;
            var slideShowMd = $(this).attr('data-show-count-md') * 1;
            var slideShowMob = $(this).attr('data-show-count-mob') * 1;
            var slideSpeed = $(this).attr('data-slick-speed') * 1;
            var slideAutoplay = $.parseJSON($(this).attr('data-slick-autoplay'));

            $(this).slick({
                arrows: false,
                dots: true,
                infinite: false,
                adaptiveHeight: true,
                slidesToShow: slideShow,
                slidesToScroll: 1,
                swipeToSlide: true,
                autoplay: slideAutoplay,
                autoplaySpeed: slideSpeed,
                adaptiveHeight: true,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: slideShowMd,
                      }
                    },
                    {
                      breakpoint: 705,
                      settings: {
                        slidesToShow: slideShowMob,
                      }
                    }
                ]
            })
        })
    }

    if ($('.adventage-slider').length>0) {
        $('.adventage-slider').each(function() {
            var slideShow = $(this).attr('data-show-count') * 1;
            var slideShowMd = $(this).attr('data-show-count-md') * 1;
            var slideShowMob = $(this).attr('data-show-count-mob') * 1;
            var slideSpeed = $(this).attr('data-slick-speed') * 1;
            var slideAutoplay = $.parseJSON($(this).attr('data-slick-autoplay'));

            $(this).slick({
                arrows: false,
                dots: true,
                infinite: false,
                adaptiveHeight: true,
                slidesToShow: slideShow,
                slidesToScroll: 1,
                swipeToSlide: true,
                autoplay: slideAutoplay,
                autoplaySpeed: slideSpeed,
                adaptiveHeight: true,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: slideShowMd,
                      }
                    },
                    {
                      breakpoint: 705,
                      settings: {
                        slidesToShow: slideShowMob,
                      }
                    }
                ]
            })
        })
    }

    if ($('.program-big-slider').length>0) {
        $('.program-big-slider').each(function() {
            var slideShow = $(this).attr('data-show-count') * 1;
            var slideShowMd = $(this).attr('data-show-count-md') * 1;
            var slideShowMob = $(this).attr('data-show-count-mob') * 1;
            var slideArrow = $.parseJSON($(this).attr('data-slick-arrow'));
            var slideNav = $(this).attr('data-nav');
            // var slideArrow = $(this).attr('data-slick-arrow');

            $(this).slick({
                arrows: slideArrow,
                infinite: false,
                adaptiveHeight: true,
                slidesToShow: slideShow,
                slidesToScroll: 1,
                asNavFor: slideNav,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: slideShowMd,
                      }
                    },
                    {
                      breakpoint: 705,
                      settings: {
                        slidesToShow: slideShowMob,
                      }
                    }
                ]
            })
        })
    }

    if ($('.program-nav-slider').length>0) {
        $('.program-nav-slider').each(function() {
            var slideShow = $(this).attr('data-show-count') * 1;
            var slideShowMd = $(this).attr('data-show-count-md') * 1;
            var slideShowMob = $(this).attr('data-show-count-mob') * 1;
            var slideArrow = $.parseJSON($(this).attr('data-slick-arrow'));
            var slideNav = $(this).attr('data-nav');
            var slideSpeed = $(this).attr('data-slick-speed') * 1;
            var slideAutoplay = $.parseJSON($(this).attr('data-slick-autoplay'));

            // var slideArrow = $(this).attr('data-slick-arrow');

            $(this).slick({
                arrows: slideArrow,
                infinite: false,
                adaptiveHeight: true,
                slidesToShow: slideShow,
                slidesToScroll: 1,
                asNavFor: slideNav,
                focusOnSelect: true,
                autoplay: slideAutoplay,
                autoplaySpeed: slideSpeed,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: slideShowMd,
                      }
                    },
                    {
                      breakpoint: 705,
                      settings: {
                        slidesToShow: slideShowMob,
                      }
                    }
                ]
            })
        })
    }

    if ($('.blog-post-slider').length>0) {
        $('.blog-post-slider').each(function() {
            var slideShow = $(this).attr('data-show-count') * 1;
            var slideShowMd = $(this).attr('data-show-count-md') * 1;
            var slideShowMob = $(this).attr('data-show-count-mob') * 1;
            var slideArrow = $.parseJSON($(this).attr('data-slick-arrow'));
            var slideSpeed = $(this).attr('data-slick-speed') * 1;
            var slideAutoplay = $.parseJSON($(this).attr('data-slick-autoplay'));
            // var slideArrow = $(this).attr('data-slick-arrow');

            $(this).slick({
                arrows: slideArrow,
                infinite: false,
                adaptiveHeight: true,
                slidesToShow: slideShow,
                autoplay: slideAutoplay,
                autoplaySpeed: slideSpeed,
                slidesToScroll: 1,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: slideShowMd,
                      }
                    },
                    {
                      breakpoint: 705,
                      settings: {
                        slidesToShow: slideShowMob,
                      }
                    }
                ]
            })
        })
    }

    if ($('.teacher-slider').length>0) {
        $('.teacher-slider').each(function() {
            var slideShow = $(this).attr('data-show-count') * 1;
            var slideShowMd = $(this).attr('data-show-count-md') * 1;
            var slideShowSm = $(this).attr('data-show-count-sm') * 1;
            var slideShowMob = $(this).attr('data-show-count-mob') * 1;
            var slideSpeed = $(this).attr('data-slick-speed') * 1;
            var slideAutoplay = $.parseJSON($(this).attr('data-slick-autoplay'));

            $(this).slick({
                arrows: false,
                dots: true,
                infinite: true,
                adaptiveHeight: true,
                slidesToShow: slideShow,
                slidesToScroll: 1,
                autoplay: slideAutoplay,
                autoplaySpeed: slideSpeed,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: slideShowMd,
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: slideShowSm,
                      }
                    },
                    {
                      breakpoint: 705,
                      settings: {
                        slidesToShow: slideShowMob,
                      }
                    }
                ]
            })
        })
    };
    setSlickArrow();
}

function mobileSlider() {
    if ($('.mobile-slider').length > 0) {
        var winWidth;

        $(window).on('load resize', function() {
            winWidth = $(this).width();

            $('.mobile-slider:not(.slick-initialized)').each(function() {
                var $this = $(this),
                    intSl = $this.attr('data-init-resolution');

                if (winWidth <= intSl) {
                    $this.slick({
                        arrows: false,
                        dots: false
                    });
                }
            })
        })
    }
}

function setSlickArrow() {
    $('.slick-prev').html('<i class="fas fa-angle-left"></i>');
    $('.slick-next').html('<i class="fas fa-angle-right"></i>');
}

/*===> Bootstrap Lightbox <===*/
function initLightbox() {
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
       event.preventDefault();
       $(this).ekkoLightbox({
        // alwaysShowClose: true,
       });
   });

     $(document).on('click', '[data-gallery]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
         // alwaysShowClose: true,
         // wrapping: false
        });
    });
}

function viewMore() {
    $('[data-view-more]').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            showClass = $this.attr('data-view-more');
        $(showClass).show();
        $this.hide();

    })
}

/*===> Centre tabs <===*/
function centreTabs() {
    if ($('[data-tab-group]').length>0) {
        $('[data-tab-group]').each(function() {
            var $this              = $( this ),
                head               = $this.find("[data-tab-head]"),
                headLinks          = head.find("a"),
                activeHead         = head.find(".active"),
                activeHeadIndex    = headLinks.index(activeHead),
                tabContentWrap     = $this.find("[data-tab-content]"),
                tabContentBlock    = tabContentWrap.find(".tab-content"),
                activeContentClass = 'active';


            function setActive(activeHeadIndex) {
                tabContentBlock.removeClass(activeContentClass);
                tabContentBlock.eq(activeHeadIndex).addClass(activeContentClass);
                return;
            }

            setActive(activeHeadIndex);

            headLinks.on('click' , function(e) {
                e.preventDefault();
                headLinks.removeClass('active');
                $(this).addClass('active');
                activeHead = head.find(".active");
                activeHeadIndex = headLinks.index(activeHead);
                setActive(activeHeadIndex);
            })
        })
    }
}

/*===> Accordions <===*/
function accordion() {
    if ($("[data-accordion-colection]").length > 0) {
        $("[data-accordion-colection]").each(function() {
            var $this                = $( this ),
                block                = $this.find(".accordion-block"),
                headLinks            = $this.find(".accordion-header"),
                activeBlock          = $this.find(".active"),
                accordionContentWrap = $this.find(".accordion-content"),
                activeContentClass   = 'active';

            function setActive(activeBlock) {
                accordionContentWrap.slideUp();
                activeBlock.find('.accordion-content').slideDown();
                return;
            }

            setActive(activeBlock);

            headLinks.on('click', function() {
                if ($(this).closest(block).hasClass('active')) {
                    $(this).closest(block).removeClass('active');
                    accordionContentWrap.slideUp();
                    return;
                }
                block.removeClass('active');
                $(this).closest(block).addClass('active');
                activeBlock = $this.find(".active");
                setActive(activeBlock);
            })
        })
    }
}


/*===> Mansory <===*/
function mansoryInit() {
    $('.grid').imagesLoaded( function() {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            isAnimated: true,
        });
    });
}

/*===> Grid filter <===*/
function gridFilter() {
    $('.grid-filter a').on('click', function(e) {
        e.preventDefault();
        var toShow = $(this).attr('data-filter');
        var gridBlock = $(this).closest('.grid-wrap').find('.grid');
        var gridItem = gridBlock.find('.grid-item');

        $('.grid-filter a').removeClass('active');
        $(this).addClass('active');

        $('.grid').isotope({
            filter: toShow
        });
    })
}


function learnTab() {
    if ($('[data-learn-tab]').length>0) {
        $('[data-learn-tab]').on('mouseover', function() {
            var $this = $(this),
                idTab = $this.attr('data-learn-tab'),
                tab = $(idTab),
                tabParent = tab.closest('.tab-element-content'),
                tabHeadParent = $this.closest('.circle-container');

            tabParent.find('.for-tab').removeClass('active');
            tabHeadParent.find('[data-learn-tab]').removeClass('active');
            $this.addClass('active');
            tab.addClass('active');
            tabParent.find('.for-tab.start').hide();
        })

        $('[data-learn-tab]').on('mouseleave', function() {
            var $this = $(this),
                idTab = $this.attr('data-learn-tab'),
                tab = $(idTab),
                tabParent = tab.closest('.tab-element-content'),
                tabHeadParent = $this.closest('.circle-container');

            $this.removeClass('active');
            tab.removeClass('active');
            tabParent.find('.for-tab.start').show();
        })
    }
}



// *****
/*===> Draw circle for tab <===*/
function drawCircleMy() {
    if ($('.learning-elements-wrap').length>0) {
        $('.learning-elements-wrap').each(function() {
            var widthLearn = $(this).width();
            $(this).css('height', widthLearn);
            updateLayout(widthLearn);
        })
    }
}

var updateLayout = function(widthLearn){
    var listItems = $('.learning-elements-wrap .learning-item');

    if ($(window).width()>991) {
        for(var i = 0; i < listItems.length; i ++){
            var offsetAngle = 360 / listItems.length;
            var rotateAngle = offsetAngle * i;
            $(listItems[i]).css("transform", "rotate(" + rotateAngle + "deg) translate(0, -"+(widthLearn/2 - 40)+"px) rotate(-" + rotateAngle + "deg)")
        };
    } else {
        for(var i = 0; i < listItems.length; i ++){
            var offsetAngle = 360 / listItems.length;
            var rotateAngle = offsetAngle * i;
            $(listItems[i]).css("transform", "rotate(" + rotateAngle + "deg) translate(0, -"+(widthLearn/2 - 15)+"px) rotate(-" + rotateAngle + "deg)")
        };
    }
};

/*===> Show header search <===*/
function headSearch() {
    $('.header-search').on('click', function() {
        $(this).find('.search-form').addClass('active');
    })

    $(document).on('mouseup', function(e) {
        var div = $(".header-search .search-form"); // ID or CLASS f elemen click
        if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass('active')) {
            $('.header-search .search-form').removeClass('active');
        }
    })
}


/*===> Begin main scroll animate <===*/
function mainScrollAnimate() {
    var flag = true;
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    if ($('.on-scroll').length>0) {
        $(window).on('scroll load', function(){
            var winScroll = $(window).scrollTop();
            var winHeight = $(window).height();
            $('.on-scroll').each(function(){
                var flag2 = true;
                var $this = $(this);
                var ofsetShow = $this.attr('data-scroll-offset');
                var ofsetBlock = $(this).offset().top;
                var coefficient = ofsetShow !== undefined ? ofsetShow : 0.95;
                if (winScroll > ofsetBlock - winHeight * coefficient && flag){
                    $this.addClass('show-scroll');
                }
            })
        })
    }
}

function addDelay() {
    var block = $('[data-delay]'), classDel, $this, arrayLength, countDown;
    block.each(function(i, elem) {
        countDown = 0;
        $this = $(this);
        classDel = $this.attr('data-delay');
        arrayLength = $this.find(classDel).length;
        for (var i = countDown; i <= arrayLength; i++) {
            $this.find(classDel).eq(i).css({
                'transition-delay' : i*0.2+'s'
            });
        }
    })
}

/*====> Begin my-paroller <====*/
function myParoller() {
    $('.my-paroller').paroller();
}

/*====> Begin toTop <====*/
function toTop() {
    if ($('.up-btn').length>0) {
        var scroll;
        $(window).on('scroll', function(){
            scroll = $(window).scrollTop();
            if (scroll>101) {
                $('.up-btn').addClass('show-up');
            } else {
                $('.up-btn').removeClass('show-up');
            }
        })


        $('.up-btn').on('click', function(){
            $('html, body').animate({
                scrollTop: 0
            }, 600);
        });
    }
}

function cutWords() {
    var winWidth, mainMenu;
    $(window).on('load resize', function() {
        winWidth = $(this).width();

        if (winWidth < 481) {
            $('.for-tab p').each(function() {
                var size = 120,
                    newsContent= $(this),
                    newsText = newsContent.text();

                if(newsText.length > size){
                    newsContent.text(newsText.slice(0, size) + ' ...');
                }
            })
        }
    })
}


// *****
function initEvents() {

    /*Actions on 'DOM ready' event*/
    $(function() {
        lazyLoader();
        mobileMenu();
        mobileNav();
        firstLettet();
        stickyHeder();
        mobileHeader();
        quickLinks();
        viewMore();
        quickLinkTab();
        inputMask();
        sliderInit();
        mobileSlider();
        initLightbox();
        centreTabs();
        accordion();
        mansoryInit();
        gridFilter();
        drawCircleMy();
        learnTab();
        headSearch();
        mainScrollAnimate();
        myParoller();
        toTop();
        cutWords();
    });

    /*Actions on 'Window load' event*/
    $(window).on("load", function() {
        if ($('.preloader').length>0) {
            $('.preloader').fadeOut();
        }
    });
    $(window).on("resize", function() {
        setTimeout(setSlickArrow, 400);
        setTimeout(drawCircleMy, 400);
    });
};

/*Start all functions and actions*/
initEvents();