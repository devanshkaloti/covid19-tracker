function get_stats_data(city) {
    $.ajax({
        type: 'GET',
        url: 'https://apis.dksources.com/COVID19july/apiv1.php/records/city_stats' + '?filter=city,eq,' + city,
        dataType: "json",
        success: function (data) {

            stats_city(data['records']);
        }
    })
}



function stats_city(data) {

    // $('#text_lastupdate_ontario').text(data[1][0]);
    // $('#text_status').text([2][0]);


    $('#text_total_cases_city').text(data[0]['total']).digits();
    // $('#text_new_cases_city').text(data[0]['New_Cases']).digits();
    $('#text_total_deaths_city').text(data[0]['fatal']).digits();
    // $('#text_new_deaths_city').text(data[0]['New_Deaths']).digits();
    $('#text_total_recovered_city').text(data[0]['resolved']).digits();
    // $('#text_new_recovered_city').text(data[0]['New_Recovered']).digits();





}
