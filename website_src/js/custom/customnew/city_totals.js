

function get_total_data(city) {
    $.ajax({
        type: 'GET',
        url: 'https://apis.dksources.com/COVID19july/apiv1.php/records/city_total_cases' + '?filter=city,eq,' + city,
        dataType: "json",
        success: function (data) {

            generate_city_agegroup_graph(data['records']);
            generate_city_gender_graph(data['records']);
        }
    })
}

// city_agegroup_graph
function generate_city_agegroup_graph(data) {
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

    generate_bar_graph("Age Groups", "city_agegroup_graph", processedData);
}


function generate_city_gender_graph(data) {
    var ageGroupData = {
        'MALE': data[0]['gender_male'],
        'FEMALE': data[0]['gender_female'],
        'TRANSGENDER': data[0]['gender_transgender'],
        'OTHER': data[0]['gender_other'],
        'UNKNOWN': data[0]['gender_unknown']

    };


    var labels = [];
    var myData = [];

    for (let ageGroupDataKey in ageGroupData) {
        labels.push(ageGroupDataKey);
        myData.push(ageGroupData[ageGroupDataKey]);
    }



    //line chart
    var ctx = document.getElementById("city_gender_graph");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                // label: "Gender",
                data: myData,
                backgroundColor: ["#6456FF", "#2DCE99"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    // padding: 50,
                },
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        color: '#F7F8FC'
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        color: '#F7F8FC'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: ''
                    }
                }]
            },

        }
    });

}
