<?php //include("includes/initialize.inc.php"); ?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta https-equiv="X-UA-Compatible" content="ie=edge">
    <title>COVID-19 Tracker </title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon.png">
    <!-- Custom Stylesheet -->
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css">
    <link rel="stylesheet" href="./css/style.css">


    <script data-ad-client="ca-pub-9247786410682061" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-102739676-8"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-102739676-8');
    </script>



</head>

<body>

<div id="preloader">
    <div class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
    </div>
</div>

<div id="main-wrapper">

    <?php include_once ("inc.header.php"); ?>

    <style>
        p, li {
            font-size: 16px;
        }
    </style>

    <div class="content-body">
        <div class="container-fluid">
            <div class="row">

                <div class="col col-sm-12">
                       <h1>Safely Get Groceries via. Online!</h1>
                       <br><br>

                    <div class="card card-body">
                        <h4>Quick Links to Online Grocery Services</h4>
                        <ol>
                            <li><a href="https://www.walmart.ca/en/grocery/N-117" target="_blank"> Pickup Only: <b>Walmart Online Grocery:</b> https://www.walmart.ca/en/grocery</a></li>
                            <li><a href="https://www.metro.ca/en/online-grocery/aisles/" target="_blank"> Pickup/Delivery: <b>Metro:</b> https://www.metro.ca/en/online-grocery/aisles/</a></li>
                            <li><a href="https://www.instacart.ca/" target="_blank"> Pickup/Delivery: <b>Instacart:</b> https://www.instacart.ca/</a></li>
                        </ol>
                    </div>

                    <div class="card card-body">
                        <h4>1. Walmart Groceries</h4>

                       <p>
                           Walmart's online groceries initiative enables you to shop for food, cleaning supplies, pet supplies, diapers and more, and have a Walmart associate deliver it right to your car (in a designated Walmart parking space).

                       </p>
                        <h5>Steps to Order</h5>
                        <ol>
                            <li> 1. Go to <a href="https://www.walmart.ca/en/grocery/N-117" target="_blank"><b>https://www.walmart.ca/en/grocery/N-117</b></a> </li>
                            <li> <i>While signing in is recommended, it is not required</i></li>
                            <li>2. Click on "Book a Slot" in the top right corner.</li>
                            <li>3. Enter your postal code and choose a Walmart near you by clicking "Use this location"</li>
                            <li>4. Book a time slot as per your convenience</li>
                            <li><i>While there are usually plenty of open slots, sometimes the slots are all booked. In this case, the slots either open 1 by 1 every hour, or a day of slots will open at 12:00 AM. Make sure to refresh the page exactly at 12:00AM, and book the slot for the 7th day after.</i></li>
                            <li>5. Go back to the home page by clicking on the Walmart Groceries Logo (top left)</li>
                            <li>- You can visit the aisles and sub-categories by hovering on the "aisles" button (top left). </li>
                            <li>- You can add products to cart by clicking the "+" button or otherwise by clicking on a product and clicking the "Add to Cart" button</li>
                            <li>6. When you are reading to checkout, scroll down and look for the "Checkout" button in the bottom right corner. Follow further steps on screen</li>
                        </ol>

                        <h5>On the day of the order</h5>
                        <ol>
                            <li>1. Go to your selected Walmart within the 1 hour time slot. </li>
                            <li>2. Park in a designated "Walmart Groceries Pickup" Parking space. Usually, these spots are marked by an organge square in the spot and a sign</li>
                            <li>- Usually, these parking spots are on the side of the building, or near the front. </li>
                            <li>3. Look for the phone number on the sign, call it, and tell them your spot number as it says on the signboard</li>
                        </ol>
                    </div>



<!--                    <br><hr><br>-->

                    <div class="card card-body">
                        <h4>2. Metro Pick Up or Delivery</h4>

                        <p>
                            Metro also offers a service to order groceries pickup in store or deliver at home.
                        </p>

                        <h5>To shop online</h5>
                        <ol>
                            <li>
                                Go to <a href="https://www.metro.ca/en/online-grocery/aisles/" target="_blank">https://www.metro.ca/en/online-grocery/aisles/</a>
                            </li>
                            <li>
                                Start shopping, and a popup asking you to choose a pickup/delivery slot will show. Choose accordingly, and follow steps on screen.
                            </li>

                        </ol>
                    </div>
                    <div class="card card-body">

                        <p>
                            We are not affiliated with any of the above services/companies, and as such, we cannot assure or guarantee the quality or anything in regards to the services.<br>
                            Please use the above services at your own risk. Each service is applicable to its own privacy policy and terms of conditions.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-xl-6 col-md-6">
                    <div class="copy_right">
                        Copyright © 2020 covid19-tracker.ca.ca. All Rights Reserved.
                    </div>
                </div>
                <div class="col-xl-6 col-md-6 text-lg-right text-center">
                    <div class="social">
<!--                        <a href="https://www.youtube.com/channel/UChN1goECpg64jlUxSzySiNg?view_as=subscriber"><i-->
<!--                                    class="fab fa-youtube"></i></a>-->
<!--                        <a href="https://twitter.com/quixlab"><i class="fab fa-twitter"></i></a>-->
<!--                        <a href="https://www.facebook.com/qxlab"><i class="fab fa-facebook"></i></a>-->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--removeIf(production)-->
    <!--**********************************
        Right sidebar start
    ***********************************-->
    <div class="sidebar-right">
        <a class="sidebar-right-trigger" href="javascript:void(0)">
            <span><i class="fa fa-cog fa-spin"></i></span>
        </a>
        <div class="sidebar-right-inner">
            <div class="admin-settings">
                <div class="opt-header-color">
                    <p>Background Color</p>
                    <div>
                            <span>
                                <input type="radio" name="header_bg" value="color_1" class="filled-in chk-col-primary"
                                       id="header_color_1">
                                <label for="header_color_1"></label>
                            </span>
                        <span>
                                <input type="radio" name="header_bg" value="color_2" class="filled-in chk-col-primary"
                                       id="header_color_2">
                                <label for="header_color_2"></label>
                            </span>
                        <span>
                                <input type="radio" name="header_bg" value="color_3" class="filled-in chk-col-primary"
                                       id="header_color_3">
                                <label for="header_color_3"></label>
                            </span>
                        <span>
                                <input type="radio" name="header_bg" value="color_4" class="filled-in chk-col-primary"
                                       id="header_color_4">
                                <label for="header_color_4"></label>
                            </span>
                        <span>
                                <input type="radio" name="header_bg" value="color_5" class="filled-in chk-col-primary"
                                       id="header_color_5">
                                <label for="header_color_5"></label>
                            </span>
                        <span>
                                <input type="radio" name="header_bg" value="color_6" class="filled-in chk-col-primary"
                                       id="header_color_6">
                                <label for="header_color_6"></label>
                            </span>
                    </div>
                </div>
<!--                <div>-->
<!--                    <p>Direction</p>-->
<!--                    <select class="form-control" name="theme_direction" id="theme_direction">-->
<!--                        <option value="ltr">LTR</option>-->
<!--                        <option value="rtl">RTL</option>-->
<!--                    </select>-->
<!--                </div>-->
            </div>
        </div>
    </div>
    <!--**********************************
        Right sidebar end
    ***********************************-->
    <!--endRemoveIf(production)-->


</div>





<script src="./vendor/jquery/jquery.min.js"></script>
<script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="./vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>

<script src='./vendor/fixed-header-table/jquery.fixedheadertable.min.js'></script>
<script src="./js/plugins/fixedheadertable-init.js"></script>
<script src='./vendor/chartjs/Chart.bundle.min.js'></script>
<script src="./js/america/custom-canada.js"></script>
<!--<script src="./js/america/bar-custom-canada.js"></script>-->


<script src="./vendor/vectormap/jquery.vmap.min.js"></script>
<script src="./vendor/vectormap/jquery.vmap.world.js"></script>

<script src="./js/world/vectormap-world.js"></script>

<script src="./vendor/datatable/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>

<script src="./js/world/datatable.js"></script>

<!--<script src="./js/world/dashboard.js"></script>-->
<script src="./js/world/chart.js"></script>
<script src="./js/scripts.js"></script>

<script src="./js/settings.js"></script>
<script src="./js/quixnav-init.js"></script>
<script src="./js/styleSwitcher.js"></script>


<!-- Go to www.addthis.com/dashboard to customize your tools -->
<!--<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5eb10e1397e0d8d9"></script>-->

<script type="text/javascript" id="cookieinfo"
        src="//cookieinfoscript.com/js/cookieinfo.min.js">
</script>


</body>

</html>