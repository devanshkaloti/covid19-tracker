

function get_deaths_data(city) {
    $.ajax({
        type: 'GET',
        url: 'https://apis.dksources.com/COVID19july/apiv1.php/records/city_fatal_cases' + '?filter=city,eq,' + city,
        dataType: "json",
        success: function (data) {

            generate_city_agegroup_deaths_graph(data['records']);
        }
    })
}

// city_agegroup_graph
function generate_city_agegroup_deaths_graph(data) {
    var processedData = {
        '90s': data[0]['age_90s'],
        '80s': data[0]['age_80s'],
        '70s': data[0]['age_70s'],
        '60s': data[0]['age_60s'],
        '50s': data[0]['age_50s'],
        '40s': data[0]['age_40s'],
        '30s': data[0]['age_30s'],
        '20s': data[0]['age_20s'],
        '<20': data[0]['age_lessthan20s'],
        'Unknown': data[0]['age_unknown'],
    };

    generate_bar_graph("Age Groups", "city_agegroup_deaths_graph", processedData);
}
