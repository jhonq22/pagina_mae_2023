'use strict';

/*global
 jQuery
 */

/*eslint
 yoda: [2, "always"]
 */

/**
 * main.js
 *
 * BuddyPress enhancements.
 */

jQuery(function ($) {

    /**
     * Add Tooltip to BP action button.
     */

    $( function() {

        var $tooltipGamiPressElements = $( '.bbp-list-author-info .gamipress-bbpress-achievement [class*="thumbnail"], .bbp-list-author-info .gamipress-bbpress-rank [class*="thumbnail"], .gamipress-buddypress-ranks [class*="thumbnail"], .gamipress-buddypress-achievements [class*="thumbnail"]');

        $tooltipGamiPressElements.tooltip({
            title: function() {
                return $(this).text();
            },
            offset: '0, 5',
            trigger: 'hover',
			placement: 'top',
            delay: { "show": 0, "hide": 0 },
        });

        $tooltipGamiPressElements.on( 'click', function() {
            $tooltipGamiPressElements.tooltip('hide');
        });

    } );


});
