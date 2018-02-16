<html xmlns="http://www.w3.org/1999/html">
<?php include "../includes/head.php";?>

<body>

<div id="main_container" class="">

    <?php include "../includes/header.php";?>

    <?php include "../includes/about_me.php";?>

    <?php include "../includes/my_work.php";?>

    <?php include "../includes/workflow.php";?>

    <?php include "../includes/testimonial.php";?>

    <?php include "../includes/services.php";?>

    <?php include "../includes/footer.php";?>

    <div class="loader_wrapper position-fixed no-display">
        <div class="loader absolute text-center">
            <img src="../img/loader/loader.gif">
            <span>Loading...</span>
        </div>
    </div>


    <div class="scrolling position-fixed">
        <ul class="">
            <li class="m-1">
                <button type="button" data-id="header"></button>
            </li>
            <li class="m-1">
                <button type="button" data-id="about_me"></button>
            </li>
            <li class="m-1">
                <button type="button" data-id="my_work"></button>
            </li>
            <li class="m-1">
                <button type="button" data-id="workflow"></button>
            </li>
            <li class="m-1">
                <button type="button" data-id="testimonial"></button>
            </li>
            <li class="m-1">
                <button type="button" data-id="services"></button>
            </li>
            <li class="m-1">
                <button type="button" data-id="footer"></button>
            </li>
        </ul>
    </div>
</div>

<script src="../js/jquery-3.1.1.js"></script>
<script src="../js/main.js"></script>

</body>
</html>

