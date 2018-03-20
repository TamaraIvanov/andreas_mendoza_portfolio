(function($) {

    $(window).on('load', function() {
        $(".loader_wrapper").fadeOut(700);
    });

    $(document).ready(function() {


        var $window = $(window);



        /********  RESPONSIVE CHANGES  ********/

        var windowSize = $(window).width();


        /*******  SCROLL ON TOP  *******/

        $("#js-button_on_top").click(function () {
            $('html, body').animate({
                scrollTop: $('#header').offset().top
            }, 2500);
        });

        var nav_menu = $("#nav_menu").find("li");

        nav_menu.click(function () {

            var data_id = $(this).data('id');
            $('html, body').animate({
                scrollTop: $( '#' + data_id).offset().top
            }, 2000);
        });

        $(".here_me").click(function () {
            $('html, body').animate({
                scrollTop: $('#footer').offset().top
            }, 2500);
        });


        /************  DROP LIST  *************/

        var dropList = $(".js-drop-list");
        var mainDropList = $(".js-main-drop-list");
        var dropBtn =  $(".js-drop-btn");

        dropBtn.click(function () {

            if(windowSize <= 576) {
                dropList.slideUp(400);
            }

            $(this).next(".js-drop-list").slideToggle(500);
        });

        dropBtn.click(function(e) {
            e.stopPropagation();
        });

        $('body').click(function () {
            if(windowSize <= 750) {
                mainDropList.slideUp(400);
            }
            if(windowSize <= 576) {
                dropList.slideUp(400);
            }
        });

        /************  SOCIAL ICONS EFFECTS IN HEADER  *************/

        $(".social_icons_wrapper").hover(function () {
            $(this).addClass("social-visible");
            $(this).siblings().removeClass("social-visible");

        }, function(){
            $(this).removeClass("social-visible");
        });


        $window.scroll(function() {
            scrollingFooter();
        });


        /********** FUNCTIONS ON SCROLL  ************/


        scrollingFooter();

        function scrollingFooter() {

            var windowTop = $window.scrollTop();
            var windowBottom = windowTop + $window.outerHeight();

            contactFadeEffect(windowTop, windowBottom);

        }




        /************  EFFECTS IN FOOTER **************/

        function contactFadeEffect(windowTop, windowBottom) {
            var contactForm = $("#footer").find(".contact_container");
            var contactFormTop = contactForm.offset().top;
            var contactFormBottom = contactFormTop + contactForm.height() + $window.outerHeight()/100;

            if (contactFormBottom  <= windowBottom && contactFormTop >= windowTop-100) {
                contactForm.find(".contact_content").css({"left": 0});
                contactForm.find("#find_me").css({"top": 0});
            }
        }




        /************  VALIDATION IN CONTACT FORM **************/


        $("#js_contact_form").validate({
            messages: {
                email: {
                    email: "Your email address must be in the format of name@domain.com"
                }
            }
        });



    });

})(jQuery);