function get_dashboard_newcases_data(province) {
    var today = moment().format('YYYY-MM-DD');
    today = '2020-07-31';


    $.ajax({
        type: 'GET',
        url: 'https://apis.dksources.com/COVID19july/apiv1.php/records/city_stats_timeseries' + "?filter=date,eq," + today,
        dataType: "json",
        success: function (data) {

            stats_province(data['records']);
            stats_bar(data['records'])
            province_table_data(data['records'])
        }
    })
}


function stats_province(data) {

    // $('#text_lastupdate_ontario').text(data[1][0]);
    // $('#text_status').text([2][0]);

    var row = [];
    for (var i = 0; i < data.length; i++) {

        if (data[i]['city'] == "Canada") {
            row = data[i];
        }

    }





    $('#text_total_cases').text(row['total']).digits();
    $('#text_new_cases').text(row['new']).digits();
    $('#text_total_deaths').text(row['fatal']).digits();
    $('#text_new_deaths').text(row['deathsToday']).digits();
    $('#text_total_recovered').text(row['resolved']).digits();
    $('#text_new_recovered').text(row['recoveredToday']).digits();

}


function stats_bar(data) {


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
        labels.push(data.key)
        provinces[data[i]['city']] = data[i]['total'] / 1000000;
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
                    return '<span class="font-weight-bold" style="font-size: 1.3em;">' + data['city'] + '</span>';
                }
            },
            {
                data: null,
                render: function (data) {
                    return '<span class="text-primary" style="font-size: 1.6em;">' + Number(data['total']).toLocaleString() + '</span>' + ', <span class="text-primary" style="font-size: 1.2em;">+' + Number(data['new']).toLocaleString() + '</span>'
                }
            },
            // {
            //     data: null,
            //     render: function (data) {
            //         return
            //     }
            // },
            {
                data: null,
                render: function (data) {
                    return '<span class="text-danger" style="font-size: 1.6em;">' + Number(data['fatal']).toLocaleString() + '</span>' + ', <span class="text-danger" style="font-size: 1.2em;">+' + Number(data['deathsToday']).toLocaleString() + '</span>'
                }
            },
            // {
            //     data: null,
            //     render: function (data) {
            //         return
            //     }
            // },
            {
                data: null,
                render: function (data) {
                    return '<span class="text-success" style="font-size: 1.6em;">' + Number(data['resolved']).toLocaleString() + '</span>' + ', <span class="text-warning" style="font-size: 1.2em;">+' + Number(data['recoveredToday']).toLocaleString() + '</span>'
                }
            },
            // {
            //     data: null,
            //     render: function (data) {
            //         return
            //     }
            // },

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