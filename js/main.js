/* ===================================================================
 * Count - Main JS
 *
 * ------------------------------------------------------------------- */

(function ($) {

    "use strict";

    var cfg = {
            scrollDuration: 800, // smoothscroll duration
            mailChimpURL: ''   // mailchimp url
        },

        $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    // svg fallback
    if (!Modernizr.svg) {
        $(".home-logo img").attr("src", "images/logo.webp");
    }


    /* Preloader
     * -------------------------------------------------- */
    var ssPreloader = function () {

        $("html").addClass('ss-preload');

        $WIN.on('load', function () {

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');

        });
    };


    /* info toggle
     * ------------------------------------------------------ */
    var ssInfoToggle = function () {

        //open/close lateral navigation
        $('.info-toggle').on('click', function (event) {

            event.preventDefault();
            $('body').toggleClass('info-is-visible');

        });

    };


    /* slick slider
     * ------------------------------------------------------ */
    var ssSlickSlider = function () {

        $('.home-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });

    };


    /* placeholder plugin settings
     * ------------------------------------------------------ */
    var ssPlaceholder = function () {
        $('input, textarea, select').placeholder();
    };


    /* Redirect
     * ------------------------------------------------------ */
    var ssRedirect = function () {

        // Add event listener for form submission
        $('#mc-form').on('submit', function (e) {
            e.preventDefault();  // Prevent default form submission
            window.location.href = 'https://store.vibeluv.com/';  // Redirect to the specified URL
        });
    };


    /* LoadingVideos
     * ------------------------------------------------------ */
    var ssLoading = function () {

        // Add event listener for form submission
        var player1 = videojs('favourite-toys-video');
        var player2 = videojs('sex-toys-video');


    };


    /* initialize
     * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssInfoToggle();
        ssSlickSlider();
        ssPlaceholder();
        ssRedirect();
        ssLoading();

    })();


})(jQuery);
