function generate_bar_graph(title, elementid, groupedData) {

    // var ageGroupData = {
    //     '90s': [0]['age_90s'],
    //     '80s': data[0]['age_80s'],
    //     '70s': data[0]['age_70s'],
    //     '60s': data[0]['age_60s'],
    //     '50s': data[0]['age_50s'],
    //     '40s': data[0]['age_40s'],
    //     '30s': data[0]['age_30s'],
    //     '20s': data[0]['age_20s'],
    //     '<20': data[0]['age_lessthan20'],
    //     'Unknown': data[0]['age_nknown'],
    // };


    var labels = [];
    var myData = [];
    // * Offset of 8 rows...
    // for (var i = 1; i < data.length; i++) {
    //     ageGroupData[data[i]['Age_Group']] += 1;
    // }

    for (let dataKey in groupedData) {
        labels.push(dataKey);
        myData.push(groupedData[dataKey]);
    }


    //line chart
    var ctx = document.getElementById(elementid);
    ctx.height = 100;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: title,
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

