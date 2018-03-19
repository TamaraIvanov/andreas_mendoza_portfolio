<footer id="footer" class="clearfix position-relative">
    <div class="corner corner_left corner_upper"></div>
    <div class="corner corner_right corner_upper"></div>

    <div class="px-30 w-1170">

        <div class="w-100">
            <h3 class="text-uppercase font-weight-bold text-center">get in touch</h3>
        </div>

        <div class="contact_container row py-150">

            <div class="contact_wrapper clearfix">

                <div class="contact_content col-md-5 float-left mt-5 left-150 position-relative">
                    <h4 class=" ">Contact Me</h4>

                    <form id="js_contact_form" class="py-60 clearfix">
                        <input id="name" class="name w-100 my-4" name="name" type="text" placeholder="Name"
                               data-rule-required="true" data-rule-lettersonly="true" data-msg-lettersonly="Only letters please !" data-msg-required="This field is required !"/>

                        <input id="email" class="email w-100 my-4" name="email" type="text" placeholder="Email"
                               data-rule-required="true" data-msg-required="This field is required !"
                               data-rule-email="true" data-email-required="Please enter a valid email address !" />

                        <textarea id="message" class="message w-100 my-4" name="message" type="text" placeholder="Message"
                                  data-rule-required="true" data-rule-lettersonly="true" data-msg-required="This field is required !"></textarea>

                        <button class="js-send_msg text-uppercase float-right py-1 px-4" type="submit">submit</button>
                    </form>
                </div>

                <div id="find_me" class="col-md-5 float-right mt-5 position-relative">
                    <h4>Find Me</h4>

                    <address id="address" class="pt-100 m-0">
                        <span class="street d-block my-3">1313 Brickell Ave, Miami, FL</span>
                        <a class="mail d-block my-4" href="mailto:mendoza@gmail.com">mendoza@gmail.com</a>
                        <a class="tel d-block my-5" href="tel:+3 123-123-1234">+3 123-123-1234</a>
                    </address>

                    <div class="social_network mt-3">
                        <ul class="clearfix">
                            <li class="float-left mr-3"><i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i></li>
                            <li class="float-left mr-3"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></li>
                            <li class="float-left mr-3"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></li>
                            <li class="float-left mr-3"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <p class="copyrights text-center w-100 float-left d-block mb-5">Copyrights © 2017 All Rights Reserved</p>

        <div id="js-button_on_top" class="relative float-left" title="On top">
            <div class="triangle_wrapper absolute">
                <div class="triangle absolute">
                    <div class="triangle_inner absolute"></div>
                </div>
            </div>
        </div>
    </div>
</footer>

