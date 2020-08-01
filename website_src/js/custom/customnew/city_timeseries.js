function get_timeseries_data(city) {
    $.ajax({
        type: 'GET',
        url: 'https://apis.dksources.com/COVID19july/apiv1.php/records/city_stats_timeseries' + '?filter=city,eq,' + city,
        dataType: "json",
        success: function (data) {

            generate_city_all_timeseries(data);
            generate_city_newcases(data);
        }
    })
}


// city_all_timeseries
function generate_city_all_timeseries(data) {

    var myData = [];
    for (var i = 0; i < data['records'].length; i++) {

        // if (data[i]['prname'] === "Ontario") {
            myData.push(data['records'][i]);
        // }
    }

    // var dt =  JSON.parse(data['records'])

    // alert(dt[0].city);

    var cnfr = myData.slice(Math.max(myData.length - 30, 1)).map(x => x['total']);
    var deth = myData.slice(Math.max(myData.length - 30, 1)).map(x => x['fatal']);
    var reco = myData.slice(Math.max(myData.length - 30, 1)).map(x => x['resolved']);
    var labl = myData.slice(Math.max(myData.length - 30, 1)).map(function (x) {

        const d = new Date(x['date'])
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
        const [{ value: mo }, , { value: da }] = dtf.formatToParts(d)
        return `${da}-${mo}`
    });


    //line chart
    var ctx = document.getElementById("city_all_timeseries");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labl,
            datasets: [
                {
                    label: "Confirmed",
                    borderColor: "#6456FF",
                    borderWidth: "2",
                    backgroundColor: "transparent",
                    pointBackgroundColor: "#6456FF",
                    data: cnfr
                },
                {
                    label: "Death",
                    borderColor: "#F5385A",
                    borderWidth: "2",
                    backgroundColor: "transparent",
                    pointBackgroundColor: "#F5385A",
                    data: deth
                },
                {
                    label: "Recovered",
                    borderColor: "#2DCE99",
                    borderWidth: "2",
                    backgroundColor: "transparent",
                    pointBackgroundColor: "#2DCE99",
                    data: reco
                }
            ]
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



function generate_city_newcases(data) {

    // var myData = data.slice(data.count()-31)

    // var myData = data;

    var dates = [];
    var myData = [];
    var processedData = [];
    // * Offset of 8 rows...
    for (var i = data['records'].length-31; i < data['records'].length; i++) {
        processedData[data['records'][i]['date']] = data['records'][i]['new'];
    }

    console.log(processedData);

    generate_bar_graph("Daily New Cases", "city_newcases_timeseries", processedData)
}
