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

    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col col-sm-12">
                    <h1>About</h1>
                    <br><br>
                    <h4>Covid19-Tracker.ca</h4>
                    <p>This website brings data from various verified sources to present up to date graphical analysis tools. We are collaborating with medical experts to ensure that the data being presented on this site is accurate and helpful.  </p>
                    <p>We are looking for more volunteers who are established as a doctor, nurse, or related field. Please contact us if you are interested in helping. Thanks!  </p>
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