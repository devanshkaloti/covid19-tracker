<?php //include("includes/initialize.inc.php"); ?>
<?php
$city = "Toronto";

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


    <script data-ad-client="ca-pub-9247786410682061" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-102739676-8"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-102739676-8');
    </script>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">



</head>

<style>
    /* Always set the map height explicitly to define the size of the div
     * element that contains the map. */
    #map {
        height: 100%;
    }
    /* Optional: Makes the sample page fill the window. */
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    #floating-panel {
        position: absolute;
        top: 10px;
        left: 25%;
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        border: 1px solid #999;
        text-align: center;
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
    }
    #floating-panel {
        background-color: #fff;
        border: 1px solid #999;
        left: 25%;
        padding: 5px;
        position: absolute;
        top: 10px;
        z-index: 5;
    }
</style>




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
                <div class="col-10">

                    <div class="mb-3 update-time"><br>

                        <span class="stats-taken mr-2">
<!--                                                    <script type='text/javascript' src='https://ko-fi.com/widgets/widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Buy Me A Coffee', '#29abe0', 'I3I11OKWZ');kofiwidget2.draw();</script>-->
<!--                            <br><br>-->
<!--                            Last Server Refresh: <strong id="stat-taken" class="text-primary">--><?php //echo DB::query("SELECT * FROM update_timestamps WHERE `mykey`='server_refresh'")[0]['value']; ?><!--</strong></span>-->
<!--                            Last Data Update: <strong id="stat-taken" class="text-primary">--><?php //echo DB::query("SELECT * FROM update_timestamps WHERE `mykey`='JSON_Data_Ontario_Full'")[0]['value']; ?><!--</strong></span>-->
                    </div>
                </div>

            </div>


            <div class="row text">
                <div class="col-xs-12 col-lg-8">
                    <div class="world-statistics">
                        <div class="row align-items-center"><br>
                            <div class="col-xs-6 col">
                                <div class="world-widget">
                                    <div class="icon gradient-1">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <div>
                                        <h5>Cases in Ontario</h5>
                                        <h2 id="total_cases"><span id="text_total_cases_city"></span> <!--(+<span id="text_new_cases_ontario"></span> )--> </h2>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-6 col">

                                <div class="world-widget">
                                    <div class="icon gradient-9">
                                        <i class="fas fa-procedures"></i>
                                    </div>
                                    <div>
                                        <h5>Deaths in Ontario</h5>
                                        <h2 id="total_deaths"><span id="text_total_deaths_city"></span> <!--(+<span id="text_new_deaths_ontario"></span>)--></h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col">
                                <div class="world-widget">
                                    <div class="icon gradient-4">
                                        <i class="fas fa-child"></i>
                                    </div>
                                    <div>
                                        <h5>Recovered in Ontario</h5>
                                        <h2 id="total_recovered"><span id="text_total_recovered_city"></span> <!--(+<span id="text_new_recovered_ontario"></span>)--></h2>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>


            <div class="row">
                <div class="col-md-6">

                    <div class="card" style="min-height: 500px !important;">
                        <div class="card-header">
                            <h4 class="card-title">Summary of CITY</h4>
                            <span>Last 30 Days</span>
                        </div>
                        <div class="card-body">
                            <canvas id="city_all_timeseries"></canvas>
                        </div>
                        <div class="card-footer">
                            Verified Source: Government of Canada
                        </div>
                    </div>

                    <div class="card" style="min-height: 500px !important;">
                        <div class="card-header">

                            <h4 class="card-title">Cases by Age Groups</h4>
<!--                            <span>Last 30 Days</span>-->
                        </div>
                        <div class="card-body">
                            <canvas id="city_agegroup_graph"></canvas>
                        </div>
                        <div class="card-footer">
                            Verified Source: Government of Ontario
                        </div>
                    </div>
                    <div class="card" style="min-height: 500px !important;">
                        <div class="card-header">
                            <h4 class="card-title">Deaths by Age Groups</h4>
                            <!--                            <span>Last 30 Days</span>-->
                        </div>
                        <div class="card-body">
                            <canvas id="city_agegroup_deaths_graph"></canvas>
                        </div>
                        <div class="card-footer">
                            Verified Source: Government of Ontario
                        </div>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="card" style="min-height: 500px !important;">
                        <div class="card-header">
                            <h4 class="card-title">Daily New Cases in Ontario</h4>
                            <span>Last 30 Days.</span>
                        </div>
                        <div class="card-body">
                            <canvas id="city_newcases_timeseries"></canvas>
                        </div>
                        <div class="card-footer"> Verified Source: Government of Canada </div>
                    </div>

                    <div class="card" style="min-height: 500px !important;">
                        <div class="card-header">

                            <h4 class="card-title">Cases by Gender</h4>
                            <!--                            <span>Last 30 Days</span>-->
                        </div>
                        <div class="card-body">
                            <canvas id="city_gender_graph"></canvas>
                        </div>
                        <div class="card-footer">
                            Verified Source: Government of Ontario
                        </div>
                    </div>


                    <div class="card" style="min-height: 500px !important;">
                        <div class="card-header">
                            <h4 class="card-title">Recovered by Age Group</h4>
                            <!--                            <span></span>-->
                        </div>
                        <div class="card-body">
                            <canvas id="city_agegroup_recovered_graph"></canvas>
                        </div>
                        <div class="card-footer">
                            Verified Source: Government of Ontario
                        </div>
                    </div>
                </div>


            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Cases By Region in Ontario</h4>
                        </div>
                        <div class="card-body">
                            <div class="all-country table-responsive">
                                <table id="region_table_data_ontario" class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <!--                                        <th style="width:30px">Serial</th>-->
                                        <!--                                        <th>Flag</th>-->
                                        <th style="width:200px">City/Region</th>
                                        <!--                                        <th style="width:200px">Province</th>-->
                                        <th style="width:80px">Cases</th>
                                        <th style="width:80px">New Cases</th>
                                        <th style="width:80px">Deaths</th>
                                        <th style="width:80px">New Deaths</th>
                                    </tr>
                                    </thead>

                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            Verified Source: Berry I, Soucy J-PR, Tuite A, Fisman D. Open access epidemiologic data and an interactive dashboard to monitor the COVID-19 outbreak in Canada. CMAJ. 2020 Apr 14;192(15):E420. doi: https://doi.org/10.1503/cmaj.75262
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
<!--<script src="./js/america/custom-canada.js"></script>-->
<!--<script src="./js/america/bar-custom-canada.js"></script>-->

<!---->
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


<!-- Go to www.addthis.com/dashboard to customize your tools -->
<!--<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5eb10e1397e0d8d9"></script>-->

<!--<script type="text/javascript" id="cookieinfo"-->
<!--        src="//cookieinfoscript.com/js/cookieinfo.min.js">-->
<!--</script>-->


<!--<script src="./js/custom/ontarioheatmapinit.js"></script>-->
<!--<script src="./js/custom/ontariodataextract.js"></script>-->
<!--<script src="./js/custom/ontariotimeseriesdataextract.js"></script>-->
<script src="js/custom/customnew/bargraph.js"></script>
<script src="js/custom/customnew/city_summaries.js"></script>
<script src="js/custom/customnew/city_timeseries.js"></script>
<script src="js/custom/customnew/city_totals.js"></script>
<script src="js/custom/customnew/city_deaths.js"></script>
<script src="js/custom/customnew/city_recovered.js"></script>


<!--<script src="./js/custom/ontariogovernmentfulldataextract.js"></script>-->
<script>
    $(function() {
        get_stats_data('<?php echo $city;?>');
        get_timeseries_data('<?php echo $city;?>');
        get_total_data('<?php echo $city;?>');
        get_deaths_data('<?php echo $city;?>');
        get_recovered_data('<?php echo $city;?>');
    });


    // $(function () {
    //
    //
    //     $.ajax({
    //
    //         type: "GET",
    //         url: 'https://apis.covid19-tracker.ca/CoronaDataPHP/data.php?range=Processed_Regional_Data!A1:F',
    //         dataType: 'json',
    //         success: function (data) {
    //
    //             var myRows = [];
    //
    //             for (var i = 1; i < data.length; i++) {
    //                 if (data[i][1] == "Ontario") {
    //                     myRows.push(data[i]);
    //                 }
    //             }
    //
    //
    //
    //             var t = $('#region_table_data_ontario').DataTable({
    //                 responsive: true,
    //                 pageLength: 40,
    //                 data: myRows,
    //                 order: [[3, "desc"]],
    //                 columns: [
    //                     // { data: null },
    //                     {
    //                         data: null,
    //                         render: function (data) {
    //                             return '<span class="font-weight-bold" style="font-size:1.5em;">' + data[0] + '</span>';
    //                         }
    //                     },
    //                     // {
    //                     //     data: null,
    //                     //     render: function (data) {
    //                     //         return '<span class="text-primary">' + data[1] + '</span>';
    //                     //     }
    //                     // },
    //                     {
    //                         data: null,
    //                         render: function (data) {
    //                             return '<span class="text-warning" style="font-size:1.5em;">' + data[2] + '</span>';
    //                         }
    //                     },
    //                     {
    //                         data: null,
    //                         render: function (data) {
    //                             return '<span class="text-warning" style="font-size:1.2em;">+' + data[3] + '</span>';
    //                         }
    //                     },
    //                     {
    //                         data: null,
    //                         render: function (data) {
    //                             return '<span class="text-danger" style="font-size:1.5em;">' + data[4] + '</span>';
    //                         }
    //                     },
    //                     {
    //                         data: null,
    //                         render: function (data) {
    //                             return '<span class="text-danger" style="font-size:1.2em;">+' + data[5] + '</span>';
    //                         }
    //                     },
    //
    //                 ]
    //             });
    //
    //             t.on('order.dt search.dt', function () {
    //
    //             }).draw();
    //
    //
    //         }
    //     });
    //
    //
    // })
</script>

</body>

</html>