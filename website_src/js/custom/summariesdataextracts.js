// Sheet: "Processed_Data_Exports"
// General offset of 7ish

$(function () {

    $.ajax({
        type: 'GET',
        // url: urlPart1() + 'covid19-tracker.ca/includes/mysql_bridge/get.mysqldata.php?range=Processed_Data_Exports_Provincal',
        url: 'http://localhost:8888/CoronaWeb2New/includes/mysql_bridge/get.mysqldata.php?range=Processed_Data_Exports_Provincal',
        dataType: "json",
        success: function (data) {

            dashboardStats(data);
            Canada_Bar1(data);
            province_table_data(data);
        }
    })



})

function dashboardStats(data) {
    var canadaData = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i]['Province'] === "Canada") {
            canadaData = data[i];
            break;
        }
    }


    $('#text_total_cases').text(canadaData['Cases']).digits();
    $('#text_new_cases').text(canadaData['New_Cases']).digits();
    $('#text_total_deaths').text(canadaData['Deaths']).digits();
    $('#text_new_deaths').text(canadaData['New_Deaths']).digits();
    $('#text_total_recovered').text(canadaData['Recovered']).digits();
    $('#text_new_recovered').text(canadaData['New_Recovered']).digits();

}


function Canada_Bar1(data) {


    var provinces = {
        'Canada': 0,
        'Alberta': 0,
        'British Columbia': 0,
        'Manitoba': 0,
        'New Brunswick': 0,
        'Newfoundland and Labrador': 0,
        'Nova Scotia': 0,
        'Ontario': 0,
        'Prince Edward Island': 0,
        'Quebec': 0,
        'Saskatchewan': 0,
        'Northwest Territories': 0,
        'Nunavut': 0,
        'Yukon': 0,
    };
    var labels = [];
    var myData = [];
    // * Offset of 8 rows...
    for (var i = 0; i < data.length; i++) {
        provinces[data[i]['Province']] = data[i]['Cases/Million'];
    }

    for (let pr in provinces) {
        labels.push(pr);
        myData.push(provinces[pr]);
    }

    //line chart
    var ctx = document.getElementById("Canada_Bar1");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [{
                label: "Cases Per Million People",
                data: myData,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
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


function province_table_data(data) {
    // offset of 7

    // var newData = data.slice();

    var t = $('#province_table_data').DataTable({
        responsive: true,
        paging: false,
        data: data,
        order: [[3, "desc"]],
        columns: [
            // { data: null },

            {
                data: null,
                render: function (data) {
                    return '<span class="font-weight-bold" style="font-size: 1.3em;">' + data['Province'] + '</span>';
                }
            },
            {
                data: null,
                render: function (data) {
                    return '<span class="text-primary" style="font-size: 1.6em;">' + Number(data['Cases']).toLocaleString() + '</span>'
                }
            },
            {
                data: null,
                render: function (data) {
                    return '<span class="text-primary" style="font-size: 1.2em;">+' + Number(data['New_Cases']).toLocaleString() + '</span>'
                }
            },
            {
                data: null,
                render: function (data) {
                    return '<span class="text-danger" style="font-size: 1.6em;">' + Number(data['Deaths']).toLocaleString() + '</span>'
                }
            },
            {
                data: null,
                render: function (data) {
                    return '<span class="text-danger" style="font-size: 1.2em;">+' + Number(data['New_Deaths']).toLocaleString() + '</span>'
                }
            },
            {
                data: null,
                render: function (data) {
                    return '<span class="text-success" style="font-size: 1.6em;">' + Number(data['Recovered']).toLocaleString() + '</span>'
                }
            },
            {
                data: null,
                render: function (data) {
                    return '<span class="text-warning" style="font-size: 1.2em;">+' + Number(data['New_Recovered']).toLocaleString() + '</span>'
                }
            },

            // { data: 'country' },
            // { data: 'cases' },
            // { data: 'todayCases' },
            // { data: 'deaths' },
            // { data: 'todayDeaths' },
            // { data: 'recovered' },
            // { data: 'active' },
            // { data: 'critical' }
        ]
    });

    t.on('order.dt search.dt', function () {
        // t.column(-0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
        //     cell.innerHTML = i + 1;
        // });
    }).draw();
}


// function coronaChart(data) {
//     let ctx = document.getElementById("coronaChart");
//     new Chart(ctx, {
//         type: "pie",
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             legend: {
//                 display: true,
//                 position: 'bottom',
//                 labels: {
//                     usePointStyle: true,
//                     padding: 20,
//                 },
//             },
//
//             tooltips: {
//                 enabled: true
//             },
//
//             hover: {
//                 mode: null
//             },
//             cutoutPercentage: 70
//         },
//
//
//         data: {
//             labels: ['Total Cases', 'Deaths', 'Recovered'],
//             datasets: [
//                 {
//                     data: [data[data[7][1], data[7][3], data[7][5]]],
//                     backgroundColor: ["#7B6FFF", "#F5385A", "#2DCE99"],
//                     borderWidth: 0
// }]
// }
// });
// }

var provinces = [
    ['Alberta', 'AB'],
    ['British Columbia', 'BC'],
    ['Manitoba', 'MB'],
    ['New Brunswick', 'NB'],
    ['Newfoundland', 'NF'],
    ['Northwest Territory', 'NT'],
    ['Nova Scotia', 'NS'],
    ['Nunavut', 'NU'],
    ['Ontario', 'ON'],
    ['Prince Edward Island', 'PE'],
    ['Quebec', 'QC'],
    ['Saskatchewan', 'SK'],
    ['Yukon', 'YT'],
];



