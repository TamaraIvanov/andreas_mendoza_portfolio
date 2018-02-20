(function($) {

    $(window).on('load', function() {
        $(".loader_wrapper").fadeOut(700);
    });

    $(document).ready(function() {


        var $window = $(window);

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

        $window.scroll(function() {

            scrollingEffect();

        });


        var windowTop = $window.scrollTop();
        var windowBottom = windowTop + $window.outerHeight();


        var execute = true;

        function scrollingEffect() {

            var windowTop = $window.scrollTop();
            var windowBottom = windowTop + $window.outerHeight();

            skillsEffect(windowTop, windowBottom);
            skillsFadeEffect(windowTop, windowBottom);
            contactFadeEffect(windowTop, windowBottom);
            workflowFadeEffect(windowTop, windowBottom);

        }


        /************  SKILLS EFFECTS **************/

        function skillsEffect(windowTop, windowBottom) {
            var $skills = $('#js-skills');
            var skillsTop = $skills.offset().top;
            var skillsBottom = skillsTop + $skills.height() + $window.outerHeight()/15;

            if (skillsBottom <= windowBottom && skillsTop >= windowTop) {
                skillsIncreasing($skills.find('[data-type="graphic"]'), 75);
                skillsIncreasing($skills.find('[data-type="developing"]'), 70);
                skillsIncreasing($skills.find('[data-type="branding"]'), 80);
                skillsIncreasing($skills.find('[data-type="marketing"]'), 95);
            }
        }

        /************  EFFECTS IN ABOUT ME SECTION **************/

        function skillsFadeEffect(windowTop, windowBottom) {
            var $aboutSkills = $('.about_me_container');
            var aboutSkillsTop = $aboutSkills.offset().top;
            var aboutSkillsBottom = aboutSkillsTop + $aboutSkills.height() + $window.outerHeight()/15;

            if (aboutSkillsBottom  <= windowBottom && aboutSkillsTop >= windowTop) {
                $aboutSkills.find(".about_me_description").css({"left": 0});
            }
        }

        /************  EFFECTS IN FOOTER **************/

        function contactFadeEffect(windowTop, windowBottom) {
            var $contactForm = $(".contact_container");
            var contactFormTop = $contactForm.offset().top;
            var contactFormBottom = contactFormTop + $contactForm.height() + $window.outerHeight()/4;

            if (contactFormBottom  <= windowBottom && contactFormTop >= windowTop) {
                $contactForm.find("#find_me").css({"top": 0});
                $contactForm.find("input").css({"left": 0});
                $contactForm.find(".contact_content h4").css({"left": 0});
                $contactForm.find("button").css({"right": 0});
            }
        }

        /********  RESPONSIVE CHANGES  ********/

        var windowSize = $(window).width();

        $(window).resize(function() {
            workflowFadeEffect(windowTop, windowBottom, windowSize);


        });



        function workflowFadeEffect(windowTop, windowBottom, width) {


            $('.work_process_content').each(function () {

                var $this = $(this);

                var contentTop = $this.offset().top;
                var contentBottom = contentTop + $this.height() + $window.outerHeight()/4;

                if (contentBottom  <= windowBottom && contentTop >= windowTop) {

                   var data = $this.data("type");

                   if(data === "left"){
                       $this.find(".process_title").css({"left": 0});
                       $this.find(".process_description").css({"right": 0});
                   } else {
                       $this.find(".process_title").css({"right": 0});
                       $this.find(".process_description").css({"left": 0});
                   }

                    setInterval(function(){
                        $this.find(".line_vertical_upper").css({"visibility": "visible"});
                        if (width <= 770) {
                            $this.find(".line_horizontal").css({"width": "50%"});
                        } else {
                            $this.find(".line_horizontal").css({"width": "90.2%"});
                        }
                    }, 1000);

                    setInterval(function(){
                        $this.find(".line_vertical_bottom").css({"visibility": "visible"});
                    }, 4000);
                }
            });
        }












    });








    function skillsIncreasing(element, value) {
        element.find('.scale_value').animate({width: value+"%"}, 1500);

        var number = 0;
        var interval = setInterval(function(){
            number++;
            if(number === value) {
                clearInterval(interval);
            }
            element.find('strong').text(number);
        }, 15);
    }



})(jQuery);