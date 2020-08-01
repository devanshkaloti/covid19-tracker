// Sheet: "Processed_Data_Exports"
// General offset of 7ish

$(function () {

    $.ajax({
        type: 'GET',
        // url: 'https://apis.covid19-tracker.ca/CoronaDataPHP/data.php?range=Processed_Data_Exports!A1:I21',
        url: urlPart1() + 'covid19-tracker.ca/includes/mysql_bridge/get.mysqldata.php?range=Processed_Data_Exports_Provincal',
        // url: 'http://localhost/CoronaWeb2/includes/mysql_bridge/get.mysqldata.php?range=Processed_Data_Exports_Provincal',

        dataType: "json",
        success: function (data) {

            dashboardStatsOntario(data);


            // console.log(data);

        }
    })



})



function dashboardStatsOntario(data) {
    var ontarioData = [];

    // $('#text_lastupdate_ontario').text(data[1][0]);
    // $('#text_status').text([2][0]);

    for (var i = 0; i < data.length; i++) {
        if (data[i]['Province'] === "Ontario") {
            ontarioData = data[i];
            break;
        }
    }

    $('#text_total_cases_ontario').text(ontarioData['Cases']).digits();
    $('#text_new_cases_ontario').text(ontarioData['New_Cases']).digits();
    $('#text_total_deaths_ontario').text(ontarioData['Deaths']).digits();
    $('#text_new_deaths_ontario').text(ontarioData['New_Deaths']).digits();
    $('#text_total_recovered_ontario').text(ontarioData['Recovered']).digits();
    $('#text_new_recovered_ontario').text(ontarioData['New_Recovered']).digits();





}
