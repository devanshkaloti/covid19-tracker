// // https://builtbymax.de
// // Maximilian Kobus | KØBY
//
// const Corona = {
//     init: () => {
//         Corona.getLocationData();
//     },
//
//     getLocationData: () => {
//         let url = "https://corona.lmao.ninja/v2/all";
//         fetch(url, {
//             method: "GET",
//         }).
//         then(data => data.json()).
//         then(data => {
//             Corona.showChart(data);
//             // console.log(data);
//
//         }).
//         catch(err => {
//             console.error(err);
//             conf.errMsg();
//         });
//     },
//
//     showChart: data => {
//         let dataPoint = data;
//         let ctx = document.getElementById("coronaChart");
//
//         const coronaChart = new Chart(ctx, {
//             type: "pie",
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 legend: {
//                     display: true,
//                     position: 'bottom',
//                     labels: {
//                         usePointStyle: true,
//                         padding: 20,
//                     },
//                 },
//
//                 tooltips: {
//                     enabled: true
//                 },
//
//                 hover: {
//                     mode: null
//                 },
//                 cutoutPercentage: 70
//             },
//
//
//             data: {
//                 labels: ['Cases', 'Deaths', 'Recovered'],
//                 datasets: [
//                     {
//                         data: [dataPoint.cases, dataPoint.deaths, dataPoint.recovered],
//                         backgroundColor: ["#7B6FFF", "#F5385A", "#2DCE99"],
//
//                         borderWidth: 0
//                     }]
//             }
//         });
//
//
//     }
// };
//
// Corona.init();
//
//
//
