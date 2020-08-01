


function queryCompareStats(location1, location2) {

    $.ajax({
        type: 'GET',
        url: urlPart1() + 'covid19-tracker.ca/includes/mysql_bridge/get.mysqldata.php?range=Processed_Data_Exports_Provincal',
        // url: 'http://localhost/CoronaWeb2/includes/mysql_bridge/get.mysqldata.php?range=Processed_Data_Exports_Provincal',
        dataType: "json",
        success: function (data) {

            compare_dashboardStats(data, location1, location2)

        }
    })



}


function compare_dashboardStats(data, location1, location2) {
    var location1Data = [];
    var location2Data = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i]['Province'] === location1)
            location1Data = data[i];

        if (data[i]['Province'] === location2)
            location2Data = data[i];

    }


    // $('#text_lastupdate').text("Updated but exact Date Coming Soon");
    // $('#text_status').text("Coming Soon");
    // $('#text_lastupdate').text(data[1][1]);
    // $('#text_status').text([2][1]);


    $('.location1_text').text(location1);
    $('.location2_text').text(location2);


    $('#text_total_cases_location1').text(location1Data['Cases']);
    $('#text_new_cases_location1').text(location1Data['New_Cases']);
    $('#text_total_deaths_location1').text(location1Data['Deaths']);
    $('#text_new_deaths_location1').text(location1Data['New_Deaths']);
    $('#text_total_recovered_location1').text(location1Data['Recovered']);
    $('#text_new_recovered_location1').text(location1Data['New_Recovered']);


    $('#text_total_cases_location2').text(location2Data['Cases']);
    $('#text_new_cases_location2').text(location2Data['New_Cases']);
    $('#text_total_deaths_location2').text(location2Data['Deaths']);
    $('#text_new_deaths_location2').text(location2Data['New_Deaths']);
    $('#text_total_recovered_location2').text(location2Data['Recovered']);
    $('#text_new_recovered_location2').text(location2Data['New_Recovered']);

}