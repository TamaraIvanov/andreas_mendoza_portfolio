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

        /************  EFFECTS IN ABOT ME SECTION **************/

        function skillsFadeEffect(windowTop, windowBottom) {
            var $aboutSkills = $('.about_me_container');
            var aboutSkillsTop = $aboutSkills.offset().top;
            var aboutSkillsBottom = aboutSkillsTop + $aboutSkills.height() + $window.outerHeight()/12;

            console.log($aboutSkills.height());
            if (aboutSkillsBottom  <= windowBottom && aboutSkillsTop >= windowTop) {
                $aboutSkills.find(".about_me_description").css({"left": 0});
            }
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