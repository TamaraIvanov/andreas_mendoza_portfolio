(function($) {

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

        /********  RESPONSIVE CHANGES  ********/

        var windowSize = $(window).width();

        $(window).resize(function() {
            workflowFadeEffect(windowTop, windowBottom);
        });

        $window.scroll(function() {
            scrollingEffect();
        });

        testimonialSlider();


        /********** FUNCTIONS ON SCROLL  ************/


        var windowTop = $window.scrollTop();
        var windowBottom = windowTop + $window.outerHeight();

        scrollingEffect();

        function scrollingEffect() {

            var windowTop = $window.scrollTop();
            var windowBottom = windowTop + $window.outerHeight();

            skillsEffect(windowTop, windowBottom);
            skillsFadeEffect(windowTop, windowBottom);
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

        function workflowFadeEffect(windowTop, windowBottom) {

            $('.work_process_content').each(function () {
                var $this = $(this);
                var contentTop = $this.offset().top;
                var contentBottom = contentTop + $this.height() + $window.outerHeight()/4;

                if (contentBottom  <= windowBottom && contentTop >= windowTop-300) {

                    var data = $this.data("type");

                    if(data === "left"){
                        $this.find(".process_title").css({"left": 0});
                        $this.find(".process_description").css({"right": 0});
                    } else {
                        $this.find(".process_title").css({"right": 0});
                        $this.find(".process_description").css({"left": 0});
                    }


                    setTimeout(function(){
                        $this.find(".line_vertical_upper").css({"visibility": "visible"});
                    }, 10);

                    setTimeout(function(){
                        if (windowSize <= 576) {
                            $this.find(".line_horizontal").addClass("line_horizontal100");
                        }
                        if (windowSize <= 770) {
                            $this.find(".line_horizontal").addClass("line_horizontal50");
                        }

                        $this.find(".line_horizontal").addClass("line_horizontal90");

                    }, 200);

                    setTimeout(function(){
                        $this.find(".line_vertical_bottom").css({"visibility": "visible"});
                    }, 2800);
                }

            });
        }
    });




    function testimonialSlider() {

        $("#testimonial_slider").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            speed: 1000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 965,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }

                }

            ]
        });

        $("#services_slider").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            speed: 1000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 800,
                    speed: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }

                }

            ]
        });
    }


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