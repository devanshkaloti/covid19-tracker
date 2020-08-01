var isSetup = false;
var dates = [];


$(function () {

    $('.js-example-basic-single').select2();

    query("Ontario", "Quebec");
    queryCompareStats("Ontario", "Quebec");


});


function query(location1, location2) {

    queryCompareStats(location1, location2);


    $.ajax({
        type: 'GET',
        url: urlPart1() + 'covid19-tracker.ca/includes/mysql_bridge/get.mysqldata.php?range=Imported_Data_Canada&query=true&l1=' + encodeURI(location1) + '&l2=' + encodeURI(location2),
        // url: 'http://localhost/CoronaWeb2/includes/mysql_bridge/get.mysqldata.php?range=Imported_Data_Canada&query=true&l1=' + encodeURI(location1) + '&l2=' + encodeURI(location2),
        dataType: "json",
        success: function (data) {

            if (!isSetup) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i]['prname'] === "Canada")
                        dates.push(data[i]['date']);
                }

                isSetup = true;
            }

            let l1Keys = [];
            let l2Keys = [];

            let l1Data = [];
            let l2Data = [];


            // Loop thru rows, collecting date & row
            for (let i = 0; i < data.length; i++)  {

                if (data[i]['prname'] === location1) {
                    l1Keys.push(data[i]['date']);
                    l1Data.push(data[i]);
                }

                if (data[i]['prname'] === location2) {
                    l2Keys.push(data[i]['date']);
                    l2Data.push(data[i]);
                }
            }


            let l1GraphData = [];
            let l2GraphData = [];

            let l1GraphActiveCases = [];
            let l2GraphActiveCases = [];

            let l1GraphDailyNewCases = [];
            let l2GraphDailyNewCases = [];

            for (let ii = 0; ii < dates.length; ii++) {
                // console.log(dates[ii]);
                // console.log(l1Data[4]);
                if (l1Keys.includes(dates[ii])) {
                    l1GraphData.push(l1Data[l1Keys.indexOf(dates[ii])]['numtotal']);
                    l1GraphActiveCases.push(l1Data[l1Keys.indexOf(dates[ii])]['numactive_custom']);
                    l1GraphDailyNewCases.push(l1Data[l1Keys.indexOf(dates[ii])]['numtoday']);

                }  else {
                    l1GraphData.push(0);
                    l1GraphActiveCases.push(0);
                    l1GraphDailyNewCases.push(0);
                }

                if (l2Keys.includes(dates[ii])) {
                    l2GraphData.push(l2Data[l2Keys.indexOf(dates[ii])]['numconf']);
                    l2GraphActiveCases.push(l2Data[l2Keys.indexOf(dates[ii])]['numactive_custom']);
                    l2GraphDailyNewCases.push(l2Data[l2Keys.indexOf(dates[ii])]['numtoday']);

                }  else {
                    l2GraphData.push(0);
                    l2GraphActiveCases.push(0);
                    l2GraphDailyNewCases.push(0);
                }

            }

            dailynew_cases_compare(location1, l1GraphDailyNewCases, location2, l2GraphDailyNewCases);
            active_cases_compare(location1, l1GraphActiveCases, location2, l2GraphActiveCases);
            total_cases_compare(location1, l1GraphData, location2, l2GraphData);
        }
    })



}


function active_cases_compare(location1, location1Data, location2, location2Data) {

    var activeDates = dates;

    let i =0;
    for (let dt in dates) {
        if (dates[i] === "2020-04-18") {
            break;
        }
        i++;
    }

    activeDates = activeDates.slice(i, activeDates.length);
    location1Data = location1Data.slice(i, location1Data.length);
    location2Data = location2Data.slice(i, location2Data.length);



    // Destroy old:
    $("canvas#active_cases_compare").remove();
    $("div#active_cases_compare_canvas").append('<canvas id="active_cases_compare"></canvas>');


    //line chart
    var ctx = document.getElementById("active_cases_compare");

    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: activeDates,
            datasets: [
                {
                    label: location1,
                    borderColor: "#6456FF",
                    borderWidth: "2",
                    backgroundColor: "transparent",
                    pointBackgroundColor: "#6456FF",
                    data: location1Data
                },
                {
                    label: location2,
                    borderColor: "#F5385A",
                    borderWidth: "2",
                    backgroundColor: "transparent",
                    pointBackgroundColor: "#F5385A",
                    data: location2Data
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



function dailynew_cases_compare(location1, location1Data, location2, location2Data) {

    var activeDates = dates;

    activeDates = activeDates.slice(activeDates.length-30, activeDates.length);
    location1Data = location1Data.slice(location1Data.length-30, location1Data.length);
    location2Data = location2Data.slice(location2Data.length-30, location2Data.length);


    // Destroy old:
    $("canvas#dailynew_cases_compare").remove();
    $("div#dailynew_cases_compare_canvas").append('<canvas id="dailynew_cases_compare"></canvas>');


    //line chart
    var ctx = document.getElementById("dailynew_cases_compare");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: activeDates,
            datasets: [
                {
                label: location1,
                data: location1Data,
                    backgroundColor: "#6456FF",

                },
                {
                label: location2,
                data: location2Data,
                    backgroundColor: "#F5385A",

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







function total_cases_compare(location1, location1Data, location2, location2Data) {

    // console.log(dates);


    // var l1 = data.slice(Math.max(data.length - 30, 1)).map(x => x['numtotal']);
    // var l2 = data.slice(Math.max(data.length - 30, 1)).map(x => x['numdeaths']);

    // var labl = data.slice(Math.max(data.length - 30, 1)).map(function (x) {
    //
    //     const d = new Date(x['date'])
    //     const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
    //     const [{ value: mo }, , { value: da }] = dtf.formatToParts(d)
    //     return `${da}-${mo}`
    // });


    // Destroy old:
    $("canvas#total_cases_compare").remove();
    $("div#total_cases_compare_canvas").append('<canvas id="total_cases_compare"></canvas>');


    //line chart
    var ctx = document.getElementById("total_cases_compare");

    ctx.height = 100;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: location1,
                    borderColor: "#6456FF",
                    borderWidth: "2",
                    backgroundColor: "transparent",
                    pointBackgroundColor: "#6456FF",
                    data: location1Data
                },
                {
                    label: location2,
                    borderColor: "#F5385A",
                    borderWidth: "2",
                    backgroundColor: "transparent",
                    pointBackgroundColor: "#F5385A",
                    data: location2Data
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
