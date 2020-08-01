$(function () {
    const $stat_taken = $('#stat-taken');
    const $total_cases = $('#total_cases');
    const $total_deaths = $('#total_deaths');
    const $total_recovered = $('#total_recovered');
    const $new_cases = $('#new_cases');
    const $new_deaths = $('#new_deaths');

    $.ajax({
        type: 'GET',
        url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',
        headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "843f2e269cmsha6c265d8c3b1917p1d4cccjsn6cb5c486bdbc"
        },
        dataType: "json",
        success: function (data) {
            // console.log(data);

            $total_cases.append(data.total_cases)
            $total_deaths.append(data.total_deaths)
            $total_recovered.append(data.total_recovered)
            $new_cases.append(data.new_cases)
            $new_deaths.append(data.new_deaths)
            $stat_taken.append(data.statistic_taken_at)
        }
    })



    const $country_cases = $('#country_cases');
    const $country_todayCases = $('#country_todayCases');
    const $cotbody = $('#cotbody');
    const $country_recovered = $('#country_recovered');
    const $country_deaths = $('#country_deaths');
    const $country_todayDeath = $('#country_todayDeath');
    const $country_active = $('#country_active');
    $.ajax({
        type: 'GET',
        url: 'https://corona.lmao.ninja/v2/countries',
        dataType: "json",
        success: function (data) {

            // console.log(data);

            $.each(data
                .sort(function (a, b) {
                    return (b.cases) - (a.cases);
                }).slice(0, 10), function (i, bbb) {
                    $country_cases.append('<li> <span> <img src="' + bbb.countryInfo.flag + '" width="30" /> ' + bbb.country + '</span> <span> ' + bbb.cases + ' </span> </li>')

                });

            $.each(data
                .sort(function (a, b) {
                    return (b.todayCases) - (a.todayCases);
                }).slice(0, 10), function (i, bbb) {
                    $country_todayCases.append('<li> <span> <img src="' + bbb.countryInfo.flag + '" width="30" /> ' + bbb.country + '</span> <span> ' + bbb.todayCases + ' </span> </li>')

                });



            $.each(data
                .sort(function (a, b) {
                    return (b.recovered) - (a.recovered);
                }).slice(0, 10), function (i, bbb) {
                    $country_recovered.append('<li> <span> <img src="' + bbb.countryInfo.flag + '" width="30" /> ' + bbb.country + '</span> <span> ' + bbb.recovered + ' </span> </li>')

                });


            $.each(data
                .sort(function (a, b) {
                    return (b.deaths) - (a.deaths);
                }).slice(0, 10), function (i, bbb) {
                    $country_deaths.append('<li> <span> <img src="' + bbb.countryInfo.flag + '" width="30" /> ' + bbb.country + '</span> <span> ' + bbb.deaths + ' </span> </li>')

                });
            $.each(data
                .sort(function (a, b) {
                    return (b.todayDeaths) - (a.todayDeaths);
                }).slice(0, 10), function (i, bbb) {
                    $country_todayDeath.append('<li> <span> <img src="' + bbb.countryInfo.flag + '" width="30" /> ' + bbb.country + '</span> <span> ' + bbb.todayDeaths + ' </span> </li>')

                });

            $.each(data
                .sort(function (a, b) {
                    return (b.active) - (a.active);
                }).slice(0, 10), function (i, bbb) {
                    $country_active.append('<li> <span> <img src="' + bbb.countryInfo.flag + '" width="30" /> ' + bbb.country + '</span> <span> ' + bbb.active + ' </span> </li>')

                });

            $.each(data
                .sort(function (g, h) {
                    var aName = g.country.toLowerCase();
                    var bName = h.country.toLowerCase();
                    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
                }), function (i, ddd) {
                    $cotbody.append(' <tr> <td><img src="' + ddd.countryInfo.flag + '" width="30" /></td> <td style="width:150px">' + ddd.country + '</td> <td><span class="badge badge-primary">' + ddd.cases + ' </span></td><td>' + ddd.todayCases + ' </td> <td> <span class="badge badge-danger"> ' + ddd.deaths + '</span> </td><td>' + ddd.todayDeaths + ' </td> <td>  <span class="badge badge-success text-white"> ' + ddd.recovered + ' </span></td> <td>' + ddd.active + ' </td> <td>' + ddd.critical + ' </td>  </tr>')

                })

        }
    })

    var $news = $('#news');
    $.ajax({
        type: 'GET',
        url: 'https://covid19-news.herokuapp.com/api/covid19/news',
        dataType: "json",
        success: function (data) {
            $.each(data.data.slice(0, 3), function (i, aaa) {
                $news.append('<li> <a href="' + aaa.link + '" target="_blank"> ' + aaa.title + '</a></li>')

            })

        }
    })
    var $situation = $('#situation');
    $.ajax({
        type: 'GET',
        url: 'https://covid19-news.herokuapp.com/api/covid19/latest-situations',
        dataType: "json",
        success: function (data) {
            // console.log(data);
            $.each(data.data.slice(0, 3), function (i, aaa) {
                $situation.append('<li> <a href="' + aaa.link + '" target="_blank"> ' + aaa.case + '</a></li>')

            })

        }
    })

})


$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#cotbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});