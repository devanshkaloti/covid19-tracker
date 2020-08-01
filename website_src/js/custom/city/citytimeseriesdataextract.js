$(function () {

    $.ajax({
        type: 'GET',
        url: 'https://www.covid19-tracker.ca/mysql_bridge/get.mysqldata.php?range=Imported_Data_Canada',
        // url: 'http://localhost/CoronaWeb2/includes/mysql_bridge/get.mysqldata.php?range=Imported_Data_Canada',
        // url: 'https://apis.covid19-tracker.ca/CoronaDataPHP/data.php?range=Imported_Data_Canada!A1:J',
        dataType: "json",
        success: function (data) {



            // Canada_Cases_Bar(data);
            ontario_timeseries(data);
            ontario_timeseries_newcases(data)
        }
    })


})


// function Canada_Cases_Bar(data) {
//
//     var myData = [];
//     for (var i = 0; i < data.length; i++) {
//
//         if (data[i][1] === "Canada") {
//             myData.push(data[i]);
//         }
//     }
//
//
//
//     var cnfr = myData.map(x => x[4]);
//     var labl = myData.map(function (x) {
//
//         const d = new Date(x[3]);
//         const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
//         const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);
//         return `${da}-${mo}`
//     });
//
//
//     //line chart
//     var ctx = document.getElementById("Canada-Cases-Bar");
//
//     new Chart(ctx, {
//         type: 'line',
//         responsive: true,
//
//         data: {
//             labels: labl,
//             datasets: [{
//                 data: cnfr,
//                 backgroundColor: "rgba(54, 162, 235, 0.4)",
//                 pointBackgrondColor: "rgba(54, 162, 235, 1)",
//                 borderColor: "rgba(54, 162, 235, 1)",
//                 borderWidth: 1
//             }]
//
//
//         },
//         options: {
//             legend: {
//                 display: false
//             },
//
//
//             scales: {
//                 xAxes: [{
//                     gridLines: {
//                         color: "rgba(0, 0, 0, 0)",
//                     }
//                 }],
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true,
//                         callback: function(value, index, values) {
//                             if (value >= 0 && value < 1000) return value;
//                             if (value >= 1000 && value < 1000000) return (value / 1000) + "k";
//                             if (value >= 1000000 && value < 1000000000) return (value / 1000000) + "m";
//                             return value;
//                         }
//                     }
//                 }
//                 ]}
//
//         }
//     });
// }


function ontario_timeseries(data) {

    var myData = [];
    for (var i = 0; i < data.length; i++) {

        if (data[i]['prname'] === "Ontario") {
            myData.push(data[i]);
        }
    }

        var cnfr = myData.slice(Math.max(myData.length - 30, 1)).map(x => x['numtotal']);
        var deth = myData.slice(Math.max(myData.length - 30, 1)).map(x => x['numdeaths']);
        var reco = myData.slice(Math.max(myData.length - 30, 1)).map(x => x['numrecover']);
        var labl = myData.slice(Math.max(myData.length - 30, 1)).map(function (x) {

            const d = new Date(x['date'])
            const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
            const [{ value: mo }, , { value: da }] = dtf.formatToParts(d)
            return `${da}-${mo}`
        });

        //line chart
        var ctx = document.getElementById("ontario_timeseries");
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





