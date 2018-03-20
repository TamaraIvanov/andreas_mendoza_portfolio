<html xmlns="http://www.w3.org/1999/html">
<?php include "../includes/head.php";?>
<body>

<div id="main_container" class="">

    <header id="header" class="py-5 position-relative">
        <div id="person" class="w-1170 px-30 clearfix ">

            <div class="nav_menu_wrapper clearfix relative">

                <div class="logo py-20 float-left"><img src="../img/Logo.png"></div>

                <button type="button" class="js_filter_btn js-drop-btn float-right absolute no-display"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></button>

                <nav id="nav_menu" class="js-drop-list js-main-drop-list py-20 float-right">
                    <ul class="float-right">
                        <li class="float-left text-uppercase font-weight-bold mx-2 px-2"><a href="../pages/index.php">home</a></li>
                        <li class="float-left text-uppercase font-weight-bold mx-2 px-2" data-id="about_me">about me</li>
                        <li class="float-left text-uppercase font-weight-bold mx-2 px-2" data-id="my_work">my work</li>
                        <li class="float-left text-uppercase font-weight-bold mx-2 px-2" data-id="services">services</li>
                        <li class="float-left text-uppercase font-weight-bold mx-2 px-2"><a href="../pages/blog.php">blog</a></li>
                        <li class="float-left text-uppercase font-weight-bold mx-2 px-2" data-id="footer">contact</li>
                    </ul>
                </nav>
            </div>

            <div id="person_name" class="float-left w-100 mt-200 pt-5">
                <h2 class="text-uppercase mt-5 pt-5">andreas</h2>
                <h1 class="text-uppercase font-weight-bold mb-4">mendoza</h1>
                <span>Creative web design</span>
            </div>

            <div class="float-left w-100 my-100">
                <button class="here_me text-uppercase font-weight-bold px-4 py-1">hire me</button>
            </div>


        </div>

        <div class="social float-right absolute">
            <div class="fb_wrapper social_icons_wrapper my-1 d-flex">
                <div class="fb_icon social_icons float-left px-2"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></div>
                <span class="follow_me float-left p-1">Following me</span>
            </div>

            <div class="fb_wrapper social_icons_wrapper my-1 d-flex">
                <div class="twitter_icon social_icons float-left px-2"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></div>
                <span class="follow_me float-left p-1">Following me</span>
            </div>

            <div class="fb_wrapper social_icons_wrapper my-1 d-flex">
                <div class="linkedin social_icons float-left px-2"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></div>
                <span class="follow_me float-left p-1">Following me</span>
            </div>

            <div class="fb_wrapper social_icons_wrapper my-1 d-flex">
                <div class="instagram social_icons float-left px-2"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></div>
                <span class="follow_me float-left p-1">Following me</span>
            </div>
        </div>

        <div class="corner corner_left"></div>
        <div class="corner corner_right"></div>
    </header>



    <?php include "../includes/about_me.php";?>

    <?php include "../includes/my_work.php";?>

    <?php include "../includes/workflow.php";?>

    <?php include "../includes/testimonial.php";?>

    <?php include "../includes/services.php";?>



    <div class="loader_wrapper position-fixed no-display">
        <div class="loader absolute text-center">
            <img src="../img/loader/loader.gif">
            <span>Loading...</span>
        </div>
    </div>


    <div class="scrolling position-fixed">
        <ul class="">
            <li class="m-1 clearfix">
                <button class="float-right my-1" type="button" data-id="header"></button>
                <span class="float-right mr-2 py-1 px-2">My name</span>
            </li>
            <li class="m-1 clearfix">
                <button class="float-right my-1" type="button" data-id="about_me"></button>
                <span class="float-right mr-2 py-1 px-2">About me</span>
            </li>
            <li class="m-1 clearfix">
                <button class="float-right my-1" type="button" data-id="my_work"></button>
                <span class="float-right mr-2 py-1 px-2">My work</span>
            </li>
            <li class="m-1 clearfix">
                <button class="float-right my-1" type="button" data-id="workflow"></button>
                <span class="float-right mr-2 py-1 px-2">Workflow</span>
            </li>
            <li class="m-1 clearfix">
                <button class="float-right my-1" type="button" data-id="testimonial"></button>
                <span class="float-right mr-2 py-1 px-2">Testimonial</span>
            </li>
            <li class="m-1 clearfix">
                <button class="float-right my-1" type="button" data-id="services"></button>
                <span class="float-right mr-2 py-1 px-2">Services</span>
            </li>
            <li class="m-1 clearfix">
                <button class="float-right my-1" type="button" data-id="footer"></button>
                <span class="float-right mr-2 py-1 px-2">Contact</span>
            </li>
        </ul>
    </div>
</div>

<?php include "../includes/footer.php";?>

<script src="../js/jquery-3.1.1.js"></script>
<script src="../js/slick/slick.min.js"></script>
<script src="../js/jquery.validate.js"></script>
<script src="../js/main.js"></script>
<script>
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
                        }, 100);

                        setInterval(function(){
                            if (windowSize <= 576) {
                                $this.find(".line_horizontal").addClass("line_horizontal100");
                            }
                            if (windowSize <= 770) {
                                $this.find(".line_horizontal").addClass("line_horizontal50");
                            } else {
                                $this.find(".line_horizontal").addClass("line_horizontal90");
                            }
                        }, 600);

                        setInterval(function(){
                            $this.find(".line_vertical_bottom").css({"visibility": "visible"});
                        }, 1800);
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
</script>

</body>
</html>

