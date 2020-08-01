
var isSetup = false;
var dates = [];



$(function () {

    $('.js-example-basic-single').select2();

    queryCityData("Toronto");

})



function queryCityData(city) {
    $.ajax({
        type: 'GET',
        url: 'https://www.covid19-tracker.ca/includes/mysql_bridge/get.mysqldata.php?range=JSON_Data_Ontario_Full',
        // url: 'http://localhost/CoronaWeb2/includes/mysql_bridge/get.mysqldata.php?range=JSON_Data_Ontario_Full',
        // url: 'https://apis.covid19-tracker.ca/CoronaDataPHP/data.php?range=JSON_Data_Ontario_Full!A1:M',
        dataType: "json",
        success: function (data) {

            if (!isSetup) {
                for (let i = 0; i < data.length; i++) {
                    if (!data[i]['Accurate_Episode_Date'] in dates)
                        dates.push(data[i]['Accurate_Episode_Date']);
                }

                isSetup = true;
            }


            var mydata = [];

            for (var dt in data) {
                if (dt['Reporting_PHU_City'] !== city) {
                    mydata.push(dt);
                }
            }






            ontario_agegroup_graph(mydata);
            ontario_gender_graph(mydata);
            ontario_agegroup_deaths_graph(mydata);
            ontario_agegroup_recoveries_graph(mydata);
            ontario_timeseries_newcases(mydata, city);
            // console.log(data);

        }
    })

}


function ontario_agegroup_graph(data) {
    var ageGroupData = {
        '90s': 0,
        '80s': 0,
        '70s': 0,
        '60s': 0,
        '50s': 0,
        '40s': 0,
        '30s': 0,
        '20s': 0,
        '<20': 0,
        'Unknown': 0,
    };


    var labels = [];
    var myData = [];
    // * Offset of 8 rows...
    for (var i = 1; i < data.length; i++) {
        ageGroupData[data[i]['Age_Group']] += 1;
    }

    for (let ageGroupDataKey in ageGroupData) {
        labels.push(ageGroupDataKey);
        myData.push(ageGroupData[ageGroupDataKey]);
    }



    //line chart
    var ctx = document.getElementById("ontario_agegroup_graph");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: "Age Groups",
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

function ontario_gender_graph(data) {
    var ageGroupData = {
        'MALE': 0,
        'FEMALE': 0,
        'TRANSGENDER': 0,
        'OTHER': 0,
        'UNKNOWN': 0,

    };


    var labels = [];
    var myData = [];
    // * Offset of 8 rows...
    for (var i = 1; i < data.length; i++) {
        ageGroupData[data[i]['Client_Gender']] += 1;
    }

    for (let ageGroupDataKey in ageGroupData) {
        labels.push(ageGroupDataKey);
        myData.push(ageGroupData[ageGroupDataKey]);
    }



    //line chart
    var ctx = document.getElementById("ontario_gender_graph");
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

function ontario_agegroup_deaths_graph(data) {
    var ageGroupData = {
        '90s': 0,
        '80s': 0,
        '70s': 0,
        '60s': 0,
        '50s': 0,
        '40s': 0,
        '30s': 0,
        '20s': 0,
        '<20': 0,
        'Unknown': 0,
    };


    var labels = [];
    var myData = [];
    // * Offset of 8 rows...
    for (var i = 1; i < data.length; i++) {
        if (data[i]['Outcome1'] == "Fatal") {
            ageGroupData[data[i]['Age_Group']] += 1;

        }
    }

    for (let ageGroupDataKey in ageGroupData) {
        labels.push(ageGroupDataKey);
        myData.push(ageGroupData[ageGroupDataKey]);
    }



    //line chart
    var ctx = document.getElementById("ontario_agegroup_deaths_graph");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: "Age Groups",
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

function ontario_agegroup_recoveries_graph(data) {

    var ageGroupData = {
        '90s': 0,
        '80s': 0,
        '70s': 0,
        '60s': 0,
        '50s': 0,
        '40s': 0,
        '30s': 0,
        '20s': 0,
        '<20': 0,
        'Unknown': 0,
    };


    var labels = [];
    var myData = [];
    // * Offset of 8 rows...
    for (var i = 1; i < data.length; i++) {
        if (data[i]['Outcome1'] == "Resolved") {
            ageGroupData[data[i]['Age_Group']] += 1;

        }
    }

    for (let ageGroupDataKey in ageGroupData) {
        labels.push(ageGroupDataKey);
        myData.push(ageGroupData[ageGroupDataKey]);
    }



    //line chart
    var ctx = document.getElementById("ontario_agegroup_recoveries_graph");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: "Age Groups",
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







// Timeseries
function ontario_timeseries_newcases(data, city) {
    var activeDates = dates;
    activeDates.sort();
    var l1Keys = [];
    var l1Data = [];

    for (let i = 0; i < data.length; i++)  {


        if (l1Keys.push(data[i]['Accurate_Episode_Date']) in l1Keys) {
            var index = l1Keys.indexOf(data[i]['Accurate_Episode_Date']);
            l1Data[index] = l1Data[index] + 1;
        } else {
            l1Keys.push(data[i]['Accurate_Episode_Date']);
            l1Data.push(0);

        }


    }


    //line chart
    var ctx = document.getElementById("ontario_timeseries_newcases");
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: activeDates,
            datasets: [{
                label: "Daily New Cases",
                data: l1Data,
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



