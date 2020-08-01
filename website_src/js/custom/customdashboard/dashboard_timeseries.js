function get_dashboard_timeseries_data(province) {
    var today = moment().format('YYYY-MM-DD');
    today = '2020-07-31';
    let endTimestamp = moment().unix(today)
    let startTimestamp = moment(today, "YYYY-MM-DD").subtract(31, 'days');

    // alert('https://apis.dksources.com/COVID19july/apiv1.php/records/city_stats_timeseries' + "?filter=city,eq," + province);

    $.ajax({
        type: 'GET',
        url: 'https://apis.dksources.com/COVID19july/apiv1.php/records/city_stats_timeseries' + "?filter=city,eq," + province,
        dataType: "json",
        success: function (data) {

            data = data['records'];

            // var filtered = [];
            // for (var i = 0; i < data.length; i++) {
            //     if (moment(data[i]['date'], "YYYY-MM-DD").unix() > startTimestamp.unix()) {
            //         filtered.push(data[i]);
            //     }
            // }


            // console.log(filtered);

            // http://localhost:8888/CoronaWeb2New/
            // var sorted = [];











            // filtered.sort((a,b) => (moment(a['date']).unix).localeCompare((moment(b['date']).unix)));


            //
            // var dt = moment.unix(endTimestamp).subtract(1, 'days');
            // for (var z = 0; z < filtered.length; z++) {
            //     for (var iii = 0; iii < filtered.length; iii++) {
            //         console.log(dt.format('YYYY-MM-DD'));
            //         if (filtered[iii]['date'] == dt.format('YYYY-MM-DD')) {
            //
            //             sorted.push(filtered[iii]);
            //             dt = moment.unix(dt).subtract(1, 'days');
            //
            //             break;
            //         }
            //     }
            // }

            // for (var ii = 0; dt !== m; ii++) {
            //
            //
            // }
            // console.log(filtered);



            cases_bar(data);
            canada_timeseries2(data);
            Active_timeseries_canada(data);
            canada_timeseries_newcases(data);
        }
    })
}



function cases_bar(data) {


    var cnfr = data.map(x => x['total']);
    var labl = data.map(function (x) {

        const d = new Date(x['date']);
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
        const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);
        return `${da}-${mo}`
    });


    //line chart
    var ctx = document.getElementById("Canada-Cases-Bar");

    new Chart(ctx, {
        type: 'line',
        responsive: true,

        data: {
            labels: labl,
            datasets: [{
                data: cnfr,
                backgroundColor: "rgba(54, 162, 235, 0.4)",
                pointBackgrondColor: "rgba(54, 162, 235, 1)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }]


        },
        options: {
            legend: {
                display: false
            },


            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            if (value >= 0 && value < 1000) return value;
                            if (value >= 1000 && value < 1000000) return (value / 1000) + "k";
                            if (value >= 1000000 && value < 1000000000) return (value / 1000000) + "m";
                            return value;
                        }
                    }
                }
                ]}

        }
    });
}



function canada_timeseries2(data) {

    var cnfr = data.slice(Math.max(data.length - 30, 1)).map(x => x['total']);
    var deth = data.slice(Math.max(data.length - 30, 1)).map(x => x['fatal']);
    var reco = data.slice(Math.max(data.length - 30, 1)).map(x => x['resolved']);
    var labl = data.slice(Math.max(data.length - 30, 1)).map(function (x) {

        const d = new Date(x['date'])
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
        const [{ value: mo }, , { value: da }] = dtf.formatToParts(d)
        return `${da}-${mo}`
    });

    //line chart
    var ctx = document.getElementById("canada_timeseries2");
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



function Active_timeseries_canada(data) {

    var cnfr = data.slice(Math.max(data.length - 30, 1)).map(x => (x['active']));
    // var reco = data.slice(Math.max(data.length - 30, 1)).map(x => (x['numrecover']));
    var labl = data.slice(Math.max(data.length - 30, 1)).map(function (x) {

        const d = new Date(x['date']);
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
        const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);
        return `${da}-${mo}`
    });

    //line chart
    var ctx = document.getElementById("Active_timeseries");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labl,
            datasets: [
                {
                    label: "Active Cases",
                    borderColor: "#6456FF",
                    borderWidth: "2",
                    backgroundColor: "transparent",
                    pointBackgroundColor: "#6456FF",
                    data: cnfr
                },
                // {
                //     label: "Recovered",
                //     borderColor: "#2DCE99",
                //     borderWidth: "2",
                //     backgroundColor: "transparent",
                //     pointBackgroundColor: "#2DCE99",
                //     data: reco
                // }
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



function canada_timeseries_newcases(data) {

    var dates = [];
    var myData = [];


    // * Offset of 8 rows...
    for (var i = 0; i < 31; i++) {
        console.log(data[i]['date']);
        dates.push(data[i]['date']);
        myData.push(data[i]['new']);
    }

    dates.reverse();
    myData.reverse();

    //line chart
    var ctx = document.getElementById("canada_timeseries_newcases");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dates,
            datasets: [{
                label: "Daily New Cases",
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



