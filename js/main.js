(function($) {

    $(window).on('load', function() {
        $(".loader_wrapper").fadeOut(700);
    });

    $(document).ready(function() {

        /*******  SCROLLING BUTTONS  *******/




        var scrollBtn = $(".scrolling").find("button");

        var data_id;

        scrollBtn.click(function() {

            data_id = $(this).data('id');

            $('html, body').animate({
                scrollTop: $( '#' + data_id).offset().top
            }, 2000);

        });

        /*******  SCROLL ON TOP  *******/

        $("#js-button_on_top").click(function () {
            $('html, body').animate({
                scrollTop: $('#header').offset().top
            }, 2500);
        });

        var nav_menu = $("#nav_menu").find("li");

        nav_menu.click(function () {

             data_id = $(this).data('id');
            $('html, body').animate({
                scrollTop: $( '#' + data_id).offset().top
            }, 2000);
        });

        $(".here_me").click(function () {
            $('html, body').animate({
                scrollTop: $('#footer').offset().top
            }, 2500);
        });


    });

})(jQuery);