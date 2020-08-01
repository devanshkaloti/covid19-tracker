

$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://pomber.github.io/covid19/timeseries.json',
        dataType: "json",
        success: function (data) {
            // console.log(data);
            var cnfr = data.France.slice(Math.max(data.France.length - 30, 1)).map(x => x.confirmed);
            var deth = data.France.slice(Math.max(data.France.length - 30, 1)).map(x => x.deaths);
            var reco = data.France.slice(Math.max(data.France.length - 30, 1)).map(x => x.recovered);
            var labl = data.France.slice(Math.max(data.France.length - 30, 1)).map(function (x) {

                const d = new Date(x.date)
                const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
                const [{ value: mo }, , { value: da }] = dtf.formatToParts(d)
                return `${da}-${mo}`
            });


            var options = {
                series:
                    [
                        {
                            name: "Confirmed",
                            data: cnfr
                        },
                        {
                            name: "Death",
                            data: deth
                        },
                        {
                            name: "Recovered",
                            data: reco
                        },
                    ],
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Product Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: labl
                }
            };

            var chart = new ApexCharts(document.querySelector("#apexChart"), options);
            chart.render();



            //line chart
            // var ctx = document.getElementById("france_timeseries");
            // ctx.height = 100;
            // new Chart(ctx, {
            //     type: 'line',
            //     data: {
            //         labels: labl,
            //         datasets: [
            //             {
            //                 label: "Confirmed",
            //                 borderColor: "#6456FF",
            //                 borderWidth: "2",
            //                 backgroundColor: "transparent",
            //                 pointBackgroundColor: "#6456FF",
            //                 data: cnfr
            //             },
            //             {
            //                 label: "Death",
            //                 borderColor: "#F5385A",
            //                 borderWidth: "2",
            //                 backgroundColor: "transparent",
            //                 pointBackgroundColor: "#F5385A",
            //                 data: deth
            //             },
            //             {
            //                 label: "Recovered",
            //                 borderColor: "#2DCE99",
            //                 borderWidth: "2",
            //                 backgroundColor: "transparent",
            //                 pointBackgroundColor: "#2DCE99",
            //                 data: reco
            //             }
            //         ]
            //     },
            //     options: {
            //         responsive: true,
            //         maintainAspectRatio: false,
            //         legend: {
            //             display: true,
            //             position: 'top',
            //             labels: {
            //                 usePointStyle: true,
            //                 // padding: 50,
            //             },
            //         },
            //         tooltips: {
            //             mode: 'index',
            //             intersect: false
            //         },
            //         hover: {
            //             mode: 'nearest',
            //             intersect: true
            //         },
            //         scales: {
            //             xAxes: [{
            //                 display: true,
            //                 gridLines: {
            //                     display: true,
            //                     drawBorder: false,
            //                     color: '#F7F8FC'
            //                 },
            //                 scaleLabel: {
            //                     display: false,
            //                     labelString: 'Month'
            //                 }
            //             }],
            //             yAxes: [{
            //                 display: true,
            //                 gridLines: {
            //                     display: true,
            //                     drawBorder: false,
            //                     color: '#F7F8FC'
            //                 },
            //                 scaleLabel: {
            //                     display: true,
            //                     labelString: 'Value'
            //                 }
            //             }]
            //         },

            //     }
            // });

        }
    })

})














