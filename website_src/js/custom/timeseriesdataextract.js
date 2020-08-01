$(function () {

    $.ajax({
        type: 'GET',
        // url: 'https://apis.covid19-tracker.ca/CoronaDataPHP/data.php?range=!A1:J',
        // url: 'http://localhost/CoronaWeb2/includes/mysql_bridge/get.mysqldata.php?range=Imported_Data_Canada',
        // url: urlPart1() + 'covid19-tracker.ca/includes/mysql_bridge/get.mysqldata.php?range=Imported_Data_Canada',
        url: 'http://localhost:8888/CoronaWeb2New/includes/mysql_bridge/get.mysqldata.php?range=Imported_Data_Canada',
        dataType: "json",
        success: function (data) {

            var canadaData = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i]['prname'] === "Canada")
                    canadaData.push(data[i]);
            }


            Canada_Cases_Bar(canadaData);
            canada_timeseries2(canadaData);
            canada_testing_timeseries(canadaData);
            Active_timeseries_canada(canadaData);
            canada_timeseries_newcases(canadaData);


        }
    })


})





function Canada_Cases_Bar(data) {


    var cnfr = data.map(x => x['numtotal']);
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


        var cnfr = data.slice(Math.max(data.length - 30, 1)).map(x => x['numconf']);
        var deth = data.slice(Math.max(data.length - 30, 1)).map(x => x['numdeaths']);
        var reco = data.slice(Math.max(data.length - 30, 1)).map(x => x['numrecover']);
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


function canada_testing_timeseries(data) {

    var cnfr = data.slice(Math.max(data.length - 30, 1)).map(x => x['numtested']);
    var labl = data.slice(Math.max(data.length - 30, 1)).map(function (x) {

        const d = new Date(x['date']);
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
        const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);
        return `${da}-${mo}`
    });

    //line chart
    var ctx = document.getElementById("Tests_timeseries");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labl,
            datasets: [
                {
                    label: "Tests",
                    borderColor: "#6456FF",
                    borderWidth: "2",
                    backgroundColor: "transparent",
                    pointBackgroundColor: "#6456FF",
                    data: cnfr
                },
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

    var cnfr = data.slice(Math.max(data.length - 30, 1)).map(x => (x['numactive_custom']));
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
    data = data.reverse();
    // * Offset of 8 rows...
    for (var i = 0; i < 31; i++) {
        dates.push(data[i]['date']);
        if (data[i]['numtoday'] == -1) {
            myData.push(0);
        } else {
            myData.push(data[i]['numtoday']);
        }
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



