$(function () {

    $.ajax({

        type: "GET",
        url: 'http://apis.dksources.com/CoronaDataPHP/quickstart.php?range=Processed_Data_Provincial!A2:G14',
        dataType: 'json',
        success: function (obj) {

            var t = $('#world_table_2').DataTable({
                data: obj,
                order: [[3, "desc"]],
                columns: [
                    { data: null },
                    {
                        data: null,
                        render: function (data) {
                            return '<img src="' + data.countryInfo.flag + '" width="30"/>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="font-weight-bold">' + data.country + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-primary">' + data.cases + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-primary">' + data.todayCases + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-danger">' + data.deaths + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-danger">' + data.todayDeaths + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-success">' + data.recovered + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-warning">' + data.active + '</span>';
                        }
                    },

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
                t.column(-0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();


        }
    });








    $.ajax({

        type: "GET",
        url: 'https://corona.lmao.ninja/v2/countries',
        dataType: 'json',
        success: function (obj) {


            var t = $('#world_table_main').DataTable({
                data: obj,
                order: [[3, "desc"]],
                columns: [
                    { data: null },
                    {
                        data: null,
                        render: function (data) {
                            return '<img src="' + data.countryInfo.flag + '" width="30"/>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="font-weight-bold">' + data.country + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-primary">' + data.cases + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-primary">' + data.todayCases + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-danger">' + data.deaths + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-danger">' + data.todayDeaths + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-success">' + data.recovered + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-warning">' + data.active + '</span>';
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            return '<span class="text-warning">' + data.critical + '</span>';
                        }
                    },
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
                t.column(-0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();


        }
    });


})


