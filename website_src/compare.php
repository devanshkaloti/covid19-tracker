<?php include("includes/initialize.inc.php"); ?>

<?php
//$data2 = json_decode(file_get_contents("https://corona.lmao.ninja/v2/countries/canada"));
?>

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

    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
    <script defer src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>

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
            <div class="row text-center">
                <h4 class="offset-md-5 text-center">Select two locations to begin comparing</h4>
            </div>
            <div class="row">
                <div class="col-md-3 offset-md-3"><br>
                    <div class="card">
                        <select class="" id="location1" >
                            <option value="Canada">Canada</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Ontario" selected>Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec">Quebec</option>
                            <option value="Saskatchewan">Saskatchewan</option>
                            <option value="Northwest Territories">Northwest Territories</option>
                            <option value="Nunavut">Nunavut</option>
                            <option value="Yukon">Yukon</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3"><br>
                    <div class="card">
                        <select class="" id="location2" >
                            <option value="Canada">Canada</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec" selected>Quebec</option>
                            <option value="Saskatchewan">Saskatchewan</option>
                            <option value="Northwest Territories">Northwest Territories</option>
                            <option value="Nunavut">Nunavut</option>
                            <option value="Yukon">Yukon</option>

                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <button type="button" style="margin-top:18px; " class="btn btn-primary" onclick="
                    query(
                       $('#location1').val(), $('#location2').val())">Compare! </button>
                </div>
            </div>


            <div class="row">

                <div class="col-xs-4 col-lg-4">
                    <div class="world-widget">
                        <div class="icon gradient-1">
                            <i class="fas fa-users"></i>
                        </div>
                        <div>
                            <h5>Total Cases in <span class="location1_text text-primary"></span> </h5>
                            <h2 id="total_cases"><span id="text_total_cases_location1"></span> (+<span id="text_new_cases_location1"></span> ) </h2>
                        </div>
                    </div>
                </div>


                <div class="col-xs-4 col-lg-4">
                    <div class="world-widget">
                        <div class="icon gradient-9">
                            <i class="fas fa-procedures"></i>
                        </div>
                        <div>
                            <h5>Total Deaths in <span class="location1_text text-primary"></span></h5>
                            <h2 id="total_deaths"><span id="text_total_deaths_location1"></span> (+<span id="text_new_deaths_location1"></span>)</h2>
                        </div>
                    </div>
                </div>


                <div class="col-xs-4 col-lg-4">
                    <div class="world-widget">
                        <div class="icon gradient-4">
                            <i class="fas fa-child"></i>
                        </div>
                        <div>
                            <h5>Total Recovered in <span class="location1_text text-primary"></span></h5>
                            <h2 id="total_recovered"><span id="text_total_recovered_location1"></span> (+<span id="text_new_recovered_location1"></span>)</h2>
                        </div>
                    </div>
                </div>

                <div class="col-xs-4 col-lg-4">
                    <div class="world-widget">
                        <div class="icon gradient-1">
                            <i class="fas fa-users"></i>
                        </div>
                        <div>
                            <h5>Total Cases in <span class="location2_text text-primary"></span></h5>
                            <h2 id="total_cases"><span id="text_total_cases_location2"></span> (+<span id="text_new_cases_location2"></span> ) </h2>
                        </div>
                    </div>
                </div>


                <div class="col-xs-4 col-lg-4">
                    <div class="world-widget">
                        <div class="icon gradient-9">
                            <i class="fas fa-procedures"></i>
                        </div>
                        <div>
                            <h5>Total Deaths in <span class="location2_text text-primary"></span></h5>
                            <h2 id="total_deaths"><span id="text_total_deaths_location2"></span> (+<span id="text_new_deaths_location2"></span>)</h2>
                        </div>
                    </div>
                </div>


                <div class="col-xs-4 col-lg-4">
                    <div class="world-widget">
                        <div class="icon gradient-4">
                            <i class="fas fa-child"></i>
                        </div>
                        <div>
                            <h5>Total Recovered <span class="location2_text text-primary"></span></h5>
                            <h2 id="total_recovered"><span id="text_total_recovered_location2"></span> (+<span id="text_new_recovered_location2"></span>)</h2>
                        </div>
                    </div>
                </div>

            </div>


            <div class="row">
                <div class="col-md-6 ">
                    <div class="card" style="min-height:500px;">
                        <div class="card-header">
                            <h4 class="card-title">Active Cases Comparison</h4>
                        </div>
                        <div class="card-body" id="active_cases_compare_canvas">
                            <canvas id="active_cases_compare"></canvas>
                        </div>
                        <div class="card-footer"> Verified Source: Government of Canada </div>

                    </div>


                    <div class="card" style="min-height:500px;">
                        <div class="card-header">
                            <h4 class="card-title">Total Cases Comparison</h4>
                        </div>
                        <div class="card-body" id="total_cases_compare_canvas">
                            <canvas id="total_cases_compare"></canvas>
                        </div>
                        <div class="card-footer"> Verified Source: Government of Canada </div>
                    </div>
                </div>

                <div class="col-md-6 ">
                    <div class="card" style="min-height:500px;">
                        <div class="card-header">
                            <h4 class="card-title">Daily New Cases Comparison</h4>
                        </div>
                        <div class="card-body" id="dailynew_cases_compare_canvas">
                            <canvas id="dailynew_cases_compare"></canvas>
                        </div>
                        <div class="card-footer"> Verified Source: Government of Canada </div>

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
                        Copyright © 2020 covid19-tracker.ca.ca. All Rights Reserved. | <a class="nav-link" href="privacypolicy.php"> Link To Privacy Policy </a>
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


<!--<script src="./vendor/vectormap/jquery.vmap.min.js"></script>-->
<!--<script src="./vendor/vectormap/jquery.vmap.world.js"></script>-->

<!--<script src="./js/world/vectormap-world.js"></script>-->

<script src="./vendor/datatable/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>

<script src="./js/world/datatable.js"></script>

<!--<script src="./js/world/dashboard.js"></script>-->
<script src="./js/world/chart.js"></script>

<script src="./js/scripts.js"></script>

<script src="./js/settings.js"></script>
<script src="./js/quixnav-init.js"></script>
<script src="./js/styleSwitcher.js"></script>

<!--<script src="./js/custom/summariesdataextracts.js"></script>-->
<!--<script src="./js/custom/timeseriesdataextract.js"></script>-->
<script src="./js/custom/compare/comparedata.js"></script>
<script src="./js/custom/compare/comparedatasummary.js"></script>


<!-- Go to www.addthis.com/dashboard to customize your tools -->
<!--<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5eb10e1397e0d8d9"></script>-->

<script type="text/javascript" id="cookieinfo"
        src="//cookieinfoscript.com/js/cookieinfo.min.js">
</script>


</body>

</html>