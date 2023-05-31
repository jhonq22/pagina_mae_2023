'use strict';

/*global
 jQuery
 */

/**
 * File main.js
 *
 * Theme enhancements for a better user experience.
 */

(function ($) {

    $(document).ready(function () {

        /**
         * Bootstrap tooltip init.
         */
		$( '[data-toggle="tooltip"]' ).tooltip({
			trigger: 'hover',
			delay: { "show": 0, "hide": 0 },
		});

        // Remove tooltip
		$('.profile-header__body #item-buttons a').tooltip('disable');


        /**
         * Prevent to scroll when hamburger navigation is open.
         */
        var $navigationCollapse = $('#navigation-collapse');

        $navigationCollapse.on('show.bs.collapse', function () {
            $('body').addClass('ov-h navbar-collapse-show').removeClass('navbar-collapse-hide');
        });

        $navigationCollapse.on('hide.bs.collapse', function () {
            $('body').removeClass('ov-h navbar-collapse-show').addClass('navbar-collapse-hide');
        });


        /**
         * Scroll to href anchor.
         */
        $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href*="#tab-"]').not('[data-slide]').not('[href*="tab"]').not('[href*="link"]').not('[role="tab"]').not('[data-toggle="collapse"]').not('#cancel-comment-reply-link').on('click', function(event) {
            if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname && location.search === this.search ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(':focus')) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        }
                    });
                }
            }
        });


        /**
         * Open comment collapse on scroll anchor.
         */
        $('.post-comment .comments-link').on('click', function(event){
            $('#collapseComments').collapse('show');
        });


        /**
         * Posts format gallery > Carousel Options.
         */
        $('.carousel').carousel({
            interval: false,
            keyboard: false
        });

    });

})(jQuery);
