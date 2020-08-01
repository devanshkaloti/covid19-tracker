<?php //include("includes/initialize.inc.php"); ?>

<!DOCTYPE html>
<html lang="en">

<head>
<!--    <base href="/CoronaWeb2/" />-->


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta https-equiv="X-UA-Compatible" content="ie=edge">
    <title>COVID-19 Tracker For Canada | Understand the Data | Latest Case Count</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon.png">
    <!-- Custom Stylesheet -->
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/addtohomescreen.css">

    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

    <script data-ad-client="ca-pub-9247786410682061" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-102739676-8"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-102739676-8');
    </script>

    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="COVID19 Tracker">

    <script data-ad-client="ca-pub-9247786410682061" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>


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
                <div class="col">
                    <span class="stats-taken mr-2">
<!--                            Last Refresh: <b><span id="">--><?php //echo DB::query("SELECT * FROM `update_timestamps` WHERE `mykey`='server_refresh'")[0]['value']; ?><!--</span></b> | Website Status: <b>--><?php //echo DB::query("SELECT * FROM `update_timestamps` WHERE `mykey`='Website_Status'")[0]['value']; ?><!--<br></b>-->
                        </span>
                </div>
            </div>

            <div class="row">
             <div class="col-md-4">
<!--                 <div class="col-sm-6 col-lg-4">-->
                     <div class="world-widget">
                         <div class="icon gradient-1">
                             <i class="fas fa-users"></i>
                         </div>
                         <div>
                             <h5>Total Cases</h5>
                             <!--                                        <h2 id="total_cases">--><?php //echo $data2->cases; ?><!-- </h2>-->
                             <h2 id="total_cases"><span id="text_total_cases"></span> (+<span id="text_new_cases"></span> ) </h2>
                             <!--                                        <h2 id="total_cases">--><?php //echo $dashboardData[0][0]; ?><!-- (+--><?php //echo $dashboardData[4][0]; ?><!--) </h2>-->
                         </div>
                     </div>
<!--                 </div>-->


<!--                 <div class="col-sm-6 col-lg-4">-->
                     <div class="world-widget">
                         <div class="icon gradient-9">
                             <i class="fas fa-procedures"></i>
                         </div>
                         <div>
                             <h5>Total Death</h5>
                             <!--                                        <h2 id="total_deaths">--><?php //echo $data2->deaths; ?><!--</h2>-->
                             <h2 id="total_deaths"><span id="text_total_deaths"></span> (+<span id="text_new_deaths"></span>)</h2>
                             <!--                                        <h2 id="total_deaths">--><?php //echo $dashboardData[1][0]; ?><!-- (+--><?php //echo $dashboardData[5][0]; ?><!--)</h2>-->
                         </div>
                     </div>
<!--                 </div>-->


<!--                 <div class="col-sm-6 col-lg-4">-->
                     <div class="world-widget">
                         <div class="icon gradient-4">
                             <i class="fas fa-child"></i>
                         </div>
                         <div>
                             <h5>Total Recovered</h5>
                             <!--                                        <h2 id="total_recovered">--><?php //echo $data2->recovered; ?><!--</h2>-->
                             <h2 id="total_recovered"><span id="text_total_recovered"></span> (+<span id="text_new_recovered"></span>)</h2>
                             <!--                                            <h2 id="total_recovered">--><?php //echo $dashboardData[2][0]; ?><!-- (+--><?php //echo $dashboardData[6][0]; ?><!--)</h2>-->
                         </div>
                     </div>

                 <div class="links">
                     <a class="btn btn-outline-primary" href="compare.php">Click Here To Compare Data Between Provinces</a>
                     <a class="btn btn-outline-success" target="_blank" href="regional.php">Click Here To View Data per CITY</a>
                 </div>
                 <br>
                 <div class="card text-center">

<!--                     --><?php
//                     if (!isset($_COOKIE['myregion'])) {
//                         echo "<script> document.cookie = \"myregion=Toronto\"; </script>";
//                         $cookieMyRegion = "Toronto";
//                     } else {
//                         $cookieMyRegion = $_COOKIE['myregion'];
//                     }
//                     ?>
<!--                     --><?php //$digestdata = DB::query("SELECT * FROM Processed_Regional_Data WHERE `Region` = '{$cookieMyRegion}'")[0]; ?>
<!---->

<!--                     <div class="card-header">-->
<!--                         <h4 class="card-title ">Regional Digest for --><?php //echo $digestdata['Region']; ?><!--</h4>-->
<!--                     </div>-->
<!--                     <div class="card-body">-->
<!--                         <div class="row text-center">-->
<!---->
<!---->
<!--                             <div class="col-6">-->
<!--                                 <p style="font-size:1.4em;">-->
<!--                                     <b class="text-primary">Yesterday's Summary: </b> <br> +--><?php //echo $digestdata['New_Cases']; ?><!-- Cases <br> +--><?php //echo $digestdata['New_Deaths']; ?><!-- Deaths<br><br>-->
<!--                                 </p>-->
<!--                             </div>-->
<!--                             <div class="col-6">-->
<!--                                 <p style="font-size:1.4em;">-->
<!--                                     <b class="text-primary">Total Summary: </b> <br> --><?php //echo $digestdata['Cases']; ?><!-- Cases <br> --><?php //echo $digestdata['Deaths']; ?><!-- Deaths <br><br>-->
<!--                                 </p>-->
<!--                             </div>-->
<!--                         </div>-->
<!--                         <p class="card-subtitle" style="text-align: center">Note: The "Yesterday Summary" is updated once daily at about 8:30PM to show that day's summary. </p><br>-->
<!---->
<!---->
<!--                         <div class="text-center" >-->
<!--                             <select class="select-region" name="state" style="width:50%">-->
<!--                                 --><?php //foreach (DB::query("SELECT * FROM Processed_Regional_Data ") as $item) {
//                                     $selected = ($item['Region'] == $cookieMyRegion)  ? "selected" : "";
//                                     echo "<option {$selected} value=\"{$item['Region']}\">{$item['Region']}</option>";
//                                 } ?>
<!--                             </select> <button class="btn btn-outline-success" onclick="saveRegion();">Save My Region</button>-->
<!--                         </div>-->
<!--                     </div>-->
<!--                     <div class="card-footer" style="padding-left:0px !important">-->
<!---->
<!---->
<!--                     </div>-->

                 </div>
<!--                 </div>-->
             </div>


                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Cases by Province</h4>
<!--                            <span>Data Last Updated: --><?php //echo DB::query("SELECT * FROM update_timestamps WHERE `mykey`='Processed_Data_Exports_Provincal'")[0]['value']; ?><!--</span>-->
                        </div>
                        <div class="card-body">
                            <div class="all-country table-responsive">
                                <table id="province_table_data" class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <!--                                        <th style="max-width:5px !important;">Serial</th>-->
                                        <!--                                        <th>Flag</th>-->
                                        <th>Province</th>
                                        <th>Cases</th>
                                        <th>Deaths</th>
                                        <th>Recovered</th>
                                        <!--                                        <th>Active</th>-->
                                        <!--                                        <th>Critical</th>-->
                                    </tr>
                                    </thead>

                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            Verified Source: Center for Systems Science and Engineering (CSSE) at Johns Hopkins University <br>
                            Verified Source (Recoveries Data): Government of Canada
                            <p class="card-subtitle">Note: Case Recovery data may be delayed by about 6 hours.</p>
                        </div>
                    </div>
                </div>



            </div>



            <div class="row">

                <div class="col-xs-12 col-md-6">
                    <div class="card" style="min-height: 500px !important;">
                        <div class="card-header">
                            <h4 class="card-title">Canada</h4>
<!--                            <span>Last 30 Days. | Data Last Updated: --><?php //echo DB::query("SELECT * FROM update_timestamps WHERE `mykey`='Imported_Data_Canada'")[0]['value']; ?><!--</span>-->
                        </div>
                        <div class="card-body">
                            <canvas id="canada_timeseries2"></canvas>
                        </div>
                        <div class="card-footer"> Verified Source: Government of Canada </div>

                    </div>

                </div>

                <div class="col-xs-12 col-md-6">
                    <div class="card" style="min-height: 500px !important;">
                        <div class="card-header">
                            <h4 class="card-title">Daily New Cases in Canada</h4>
<!--                            <span>Data Last Updated: --><?php //echo DB::query("SELECT * FROM update_timestamps WHERE `mykey`='Imported_Data_Canada'")[0]['value']; ?><!--</span>-->

                        </div>
                        <div class="card-body">
                            <canvas id="canada_timeseries_newcases"></canvas>
                        </div>
                        <div class="card-footer"> Verified Source: Government of Canada </div>

                    </div>
                </div>



                <div class="col-xs-12 col-md-6">
                    <div class="card" style="min-height: 500px !important;">
                        <div class="card-header">
                            <h4 class="card-title">Active Cases in Canada</h4>
<!--                            <span>Last 30 Days | Data Last Updated: --><?php //echo DB::query("SELECT * FROM update_timestamps WHERE `mykey`='Imported_Data_Canada'")[0]['value']; ?><!--</span>-->
                        </div>
                        <div class="card-body">
                            <canvas id="Active_timeseries"></canvas>
                        </div>
                        <div class="card-footer"> Verified Source: Government of Canada </div>

                    </div>

                </div>
<!--                <div class="col-xs-12 col-md-6">-->
<!--                    <div class="card" style="min-height: 500px !important;">-->
<!--                        <div class="card-header">-->
<!--                            <h4 class="card-title">Cases per Million People</h4>-->
<!--                            <span>Last 30 Days</span>-->
<!--                        </div>-->
<!--                        <div class="card-body">-->
<!--                            <canvas id="Canada_Bar1"></canvas>-->
<!--                        </div>-->
<!--                        <div class="card-footer"> Verified Source: Government of Canada </div>-->
<!---->
<!--                    </div>-->
<!---->
<!--                </div>-->

<!--                <div class="col-xs-12 col-md-6">-->
<!--                    <div class="card" style="min-height: 500px !important;">-->
<!--                        <div class="card-header">-->
<!--                            <h4 class="card-title">Tests in Canada</h4>-->
<!--<!--                            <span>Last 30 Days | Data Last Updated: -->--><?php ////echo DB::query("SELECT * FROM update_timestamps WHERE `mykey`='Processed_Regional_Data'")[0]['value']; ?><!--<!--</span>-->-->
<!--                        </div>-->
<!--                        <div class="card-body">-->
<!--                            <canvas id="Tests_timeseries"></canvas>-->
<!--                        </div>-->
<!--                        <div class="card-footer"> Verified Source: Government of Canada </div>-->
<!---->
<!--                    </div>-->
<!---->
<!--                </div>-->
                <div class="col-xs-12 col-md-6">
                    <div class="card" style="min-height: 500px !important;">
                        <div class="card-header">
                            <h4 class="card-title">Total Cases in Canada (Linear)</h4>
                            <!--                                    <span>Last 30 Days</span>-->
                        </div>
                        <div class="card-body">
                            <canvas id="Canada-Cases-Bar"></canvas>
                        </div>
                        <div class="card-footer"> Verified Source: Government of Canada </div>

                    </div>

                </div>
            </div>


<!--            <div class="row justify-content-center text-center">-->
<!--                <div class="col">-->
<!--                    <div class="google-ads-leaderboard">-->
<!--                        <img src="./images/ads/ads1.jpg" alt="" class="img-fluid">-->
<!--                        <p>Add you ads here</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="row justify-content-center text-center">-->
<!--                <div class="col">-->
<!--                    <div class="google-ads-leaderboard">-->
<!--                        <img src="./images/ads/ads2.jpg" alt="" class="img-fluid">-->
<!--                        <p>Add you ads here</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="row">-->
<!--                <div class="col-xl-3">-->
<!--                    <div class="row">-->
<!--                        <div class="col-xl-12 col-lg-6">-->
<!--                            <div class="card">-->
<!--                                <div class="card-header">-->
<!--                                    <h4 class="card-title">WHO Latest News</h4>-->
<!--                                </div>-->
<!--                                <div class="card-body">-->
<!--                                    <ul id="news"></ul>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-xl-12 col-lg-6">-->
<!--                            <div class="card">-->
<!--                                <div class="card-header">-->
<!--                                    <h4 class="card-title">WHO Latest Situation</h4>-->
<!--                                </div>-->
<!--                                <div class="card-body">-->
<!--                                    <ul id="situation"></ul>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!---->
<!---->
<!--            </div>-->



<!--            <div class="row">-->
<!---->
<!--                <div class="col-xl-7">-->
<!--                    <div class="card">-->
<!--                        <div class="card-header">-->
<!--                            <h4 class="card-title">World Data</h4>-->
<!--                        </div>-->
<!--                        <div class="card-body">-->
<!--                            <div class="all-country table-responsive">-->
<!--                                <table id="world_table_main" class="table table-striped table-bordered">-->
<!--                                    <thead>-->
<!--                                    <tr>-->
<!--                                        <th style="width:30px">Serial</th>-->
<!--                                        <th>Flag</th>-->
<!--                                        <th style="width:200px">Country</th>-->
<!--                                        <th>Cases</th>-->
<!--                                        <th>New Cases</th>-->
<!--                                        <th>Deaths</th>-->
<!--                                        <th>New Deaths</th>-->
<!--                                        <th>Recovered</th>-->
<!--                                        <th>Active</th>-->
<!--                                        <th>Critical</th>-->
<!--                                    </tr>-->
<!--                                    </thead>-->
<!--                                </table>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="card-footer"> Verified Source: https://corona.lmao.ninja/ </div>-->
<!--                    </div>-->
<!--                </div>-->
<!---->
<!--                <div class="col-xl-5 col-lg-12">-->
<!--                    <div class="card">-->
<!--                        <div class="card-body">-->
<!--                            <div id='map' style='width: 400px; height: 300px;'></div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!---->
<!---->
<!--                <div class="col-xl-5 col-lg-12">-->
<!--                    <div class="world-map">-->
<!--                        <div class="card">-->
<!--                            <div class="card-body">-->
<!--                                <div id="vmap"></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<div class="row">


    <div class="col-lg-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Ways to Assist the Canadian Government</h4>
                <span>From: https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/make-a-difference.html</span>
            </div>
            <div class="card-body">
                <h4>Stay Informed</h4>
                <p> - Get the <a href="https://ca.thrive.health/" target="_blank">Canada COVID-19 application</a> to receive updates and resources from trusted resources. This app enables you to track your daily symptoms (optional), check overall stats, provides resources, among many other features</p>
                <br>
                <h4>Data Collection Initiative by Statistics Canada</h4>
                <p>You can help Statistics Canada in identifying and supporting the needs of Canadians by participating in a 5 minute data collection on the impact of COVID-19. <a href="https://surveys-enquetes.statcan.gc.ca/form-formulaire/q/en/eqgs8e122927571e4a31a4884e2fd5890f1a/p0" target="_blank">Link Here</a> </p>


            </div>
        </div>
    </div>



    <div class="col-lg-12">



        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Notes to Visitors</h4>
                <span>Notes to Visitors</span>
            </div>
            <div class="card-body">
                <ul>
                    <li>This website is updated 3 times a day.</li>
<!--                    <li>All of the "Totals" are presented up till --><?php //echo $dashboardData[7][0]; ?><!-- </li>-->
<!--                    <li>All of the "New" stats (i.e "New Cases") is the monitored change between --><?php //echo $dashboardData[7][0]; ?><!-- and 12:00AM EDT/EST</li>-->
                    <!--                                <li>As this site uses multiple sources, you may notice a variation of +/- 1500 cases between sources (out of the 60,000+)</li>-->
                    <li>All of the data with the exception of "regional data" is from verified government websites. "Regional Data" is a reference to city-wise data.</li>
                    <li>Thank you for visiting covid19-tracker.ca.ca. Stay Informed, Stay Healthy. </li>
                </ul>
            </div>
        </div>




    </div>
</div>
            <div class="row">

                <div class="col-lg-6">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Disclaimer</h4>
                            </div>
                            <div class="card-body">
<!--                                <b id="#dataSource1">Data Source 1: </b> University of Toronto Working Group<br>-->
<!--                                <p class="">Berry I, Soucy J-PR, Tuite A, Fisman D. Open access epidemiologic data and an interactive dashboard to monitor the COVID-19 outbreak in Canada. CMAJ. 2020 Apr 14;192(15):E420. doi: https://doi.org/10.1503/cmaj.75262</p>-->
<!--                                <hr>-->
<!--                                <b id="#dataSource2">Data Source 2: </b> <a href="https://www.ontario.ca/page/open-government-licence-ontario">Government of Ontario, Canada</a>-->
<!--                                <br><hr>-->
<!--                                <b id="#dataSource3">Data Source 3: </b> <a href="https://www.ontario.ca/page/open-government-licence-ontario">Statistics Canada</a>-->
<!--                                <br>-->
<!--                                <b>Data Source 4: </b> <a href="https://github.com/novelCOVID/API">novelCOVID</a>-->
<!--                                <hr>-->
                                Although the data found here on this site has been produced and processed by third part sources believed to be reliable, no warranty expressed or
                                implied is made regarding the accuracy, adequacy, completeness, legality, reliability, or usefulness of any information.
                            </div>
                        </div>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Contact Us</h4>
                        </div>
                        <div class="card-body">
                            If you have any questions, concerns or queries, please contact us via <a href="https://forms.gle/SKQFKEQ42pBprc428" target="_blank">our contact form by clicking here</a>
                        </div>
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
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
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
<script src="./js/addtohomescreen.js"></script>

<script src="./js/settings.js"></script>
<script src="./js/quixnav-init.js"></script>
<script src="./js/styleSwitcher.js"></script>

<!--<script src="./js/custom/summariesdataextracts.js"></script>-->
<!--<script src="./js/custom/timeseriesdataextract.js"></script>-->

<script src="js/custom/customdashboard/dashboard_summaries.js"></script>
<script src="js/custom/customdashboard/dashboard_timeseries.js"></script>

<script>
    $(function() {
        get_dashboard_timeseries_data('Canada');
        get_dashboard_stats_data('Canada');
    });

</script>


<script>



    // $(function () {
    //     $.ajax({
    //         type: 'GET',
    //         url: 'https://apis.covid19-tracker.ca/CoronaDataPHP/timeseries_testing.php',
    //         dataType: "json",
    //         success: function (data) {
    //             console.log(data);
    //             var cnfr = data.Canada.slice(Math.max(data.Canada.length - 30, 1)).map(x => x.tests);
    //             var labl = data.Canada.slice(Math.max(data.Canada.length - 30, 1)).map(function (x) {
    //
    //                 const d = new Date(x.date);
    //                 const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
    //                 const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);
    //                 return `${da}-${mo}`
    //             });
    //
    //             //line chart
    //             var ctx = document.getElementById("Tests_timeseries");
    //             ctx.height = 100;
    //             new Chart(ctx, {
    //                 type: 'line',
    //                 data: {
    //                     labels: labl,
    //                     datasets: [
    //                         {
    //                             label: "Tests",
    //                             borderColor: "#6456FF",
    //                             borderWidth: "2",
    //                             backgroundColor: "transparent",
    //                             pointBackgroundColor: "#6456FF",
    //                             data: cnfr
    //                         },
    //                     ]
    //                 },
    //                 options: {
    //                     responsive: true,
    //                     maintainAspectRatio: false,
    //                     legend: {
    //                         display: true,
    //                         position: 'top',
    //                         labels: {
    //                             usePointStyle: true,
    //                             // padding: 50,
    //                         },
    //                     },
    //                     tooltips: {
    //                         mode: 'index',
    //                         intersect: false
    //                     },
    //                     hover: {
    //                         mode: 'nearest',
    //                         intersect: true
    //                     },
    //                     scales: {
    //                         xAxes: [{
    //                             display: true,
    //                             gridLines: {
    //                                 display: true,
    //                                 drawBorder: false,
    //                                 color: '#F7F8FC'
    //                             },
    //                             scaleLabel: {
    //                                 display: false,
    //                                 labelString: 'Month'
    //                             }
    //                         }],
    //                         yAxes: [{
    //                             display: true,
    //                             gridLines: {
    //                                 display: true,
    //                                 drawBorder: false,
    //                                 color: '#F7F8FC'
    //                             },
    //                             scaleLabel: {
    //                                 display: true,
    //                                 labelString: ''
    //                             }
    //                         }]
    //                     },
    //
    //                 }
    //             });
    //
    //         }
    //     })
    //
    // })









//    ----- Case Donought Chart
    $(function () {
        $('#quickFacts a').on('click', function (e) {
            e.preventDefault()
            $(this).tab('show')
        })

    })


    $(function () {


    })





</script>


<!-- Go to www.addthis.com/dashboard to customize your tools -->
<!--<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5eb10e1397e0d8d9"></script>-->

<script type="text/javascript" id="cookieinfo"
        src="//cookieinfoscript.com/js/cookieinfo.min.js">
</script>


<script>



    $(document).ready(function () {
        function showAddToHome() {
            if (
                (("standalone" in window.navigator) && !window.navigator.standalone) // ios
                ||
                ( !window.matchMedia('(display-mode: standalone)').matches) // android
            ) {
                addToHomescreen();
            }
        }

        setTimeout(showAddToHome(), 10000)


    })


    function saveRegion() {
        var val = $('.select-region').val();
        document.cookie = "myregion=" + val;

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Your region saved successfully'
        })


    }

    $(document).ready(function() {
        $('.select-region').select2();
    });

    <?php if (!isset($_COOKIE['showpopup'])) { ?>

    $(document).ready(function() {
        document.cookie = "showpopup=done"

        var ua = window.navigator.userAgent;
        var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
        var webkit = !!ua.match(/WebKit/i);
        var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

        if (iOSSafari) {
            setTimeout(
                function() {
                    $('#createShortcut').modal('show')
                }, 15000);
        }
    });

    <?php } ?>



</script>


</body>

</html>




<!-- Modal -->
<div class="modal fade" id="createShortcut" tabindex="-1" role="dialog" aria-labelledby="createShortcut" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header text-center">
                <h5 class="modal-title text-center" id="exampleModalLongTitle">COVID19-Tracker.ca App</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Add this app to your home screen for easy access and a better experience. <br>
                <b>Tap <i class="far fa-share-square"></i> then 'Add to Home Screen'</b>
            </div>
<!--            <div class="modal-footer">-->
<!--                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
<!--            </div>-->
        </div>
    </div>
</div>