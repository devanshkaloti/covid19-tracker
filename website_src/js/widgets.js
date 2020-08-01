$(function () {

    const $usa_flag = $('#usa_flag');
    const $usa_cases = $('#usa_cases');
    const $usa_deaths = $('#usa_deaths');
    const $usa_total_recovered = $('#usa_total_recovered');
    const $usa_new_deaths = $('#usa_new_deaths');
    const $usa_new_cases = $('#usa_new_cases');
    const $usa_serious_critical = $('#usa_serious_critical');
    const $usa_active_cases = $('#usa_active_cases');


    // Spain
    const $spain_flag = $('#spain_flag');
    const $spain_cases = $('#spain_cases');
    const $spain_deaths = $('#spain_deaths');
    const $spain_total_recovered = $('#spain_total_recovered');
    const $spain_new_deaths = $('#spain_new_deaths');
    const $spain_new_cases = $('#spain_new_cases');
    const $spain_serious_critical = $('#spain_serious_critical');
    const $spain_active_cases = $('#spain_active_cases');

    // Italy
    const $italy_flag = $('#italy_flag');
    const $italy_cases = $('#italy_cases');
    const $italy_deaths = $('#italy_deaths');
    const $italy_total_recovered = $('#italy_total_recovered');
    const $italy_new_deaths = $('#italy_new_deaths');
    const $italy_new_cases = $('#italy_new_cases');
    const $italy_serious_critical = $('#italy_serious_critical');
    const $italy_active_cases = $('#italy_active_cases');

    // Italy
    const $germany_flag = $('#germany_flag');
    const $germany_cases = $('#germany_cases');
    const $germany_deaths = $('#germany_deaths');
    const $germany_total_recovered = $('#germany_total_recovered');
    const $germany_new_deaths = $('#germany_new_deaths');
    const $germany_new_cases = $('#germany_new_cases');
    const $germany_serious_critical = $('#germany_serious_critical');
    const $germany_active_cases = $('#germany_active_cases');


    // France
    const $france_flag = $('#france_flag');
    const $france_cases = $('#france_cases');
    const $france_deaths = $('#france_deaths');
    const $france_total_recovered = $('#france_total_recovered');
    const $france_new_deaths = $('#france_new_deaths');
    const $france_new_cases = $('#france_new_cases');
    const $france_serious_critical = $('#france_serious_critical');
    const $france_active_cases = $('#france_active_cases');


    // France
    const $china_flag = $('#china_flag');
    const $china_cases = $('#china_cases');
    const $china_deaths = $('#china_deaths');
    const $china_total_recovered = $('#china_total_recovered');
    const $china_new_deaths = $('#china_new_deaths');
    const $china_new_cases = $('#china_new_cases');
    const $china_serious_critical = $('#china_serious_critical');
    const $china_active_cases = $('#china_active_cases');

    // France
    const $iran_flag = $('#iran_flag');
    const $iran_cases = $('#iran_cases');
    const $iran_deaths = $('#iran_deaths');
    const $iran_total_recovered = $('#iran_total_recovered');
    const $iran_new_deaths = $('#iran_new_deaths');
    const $iran_new_cases = $('#iran_new_cases');
    const $iran_serious_critical = $('#iran_serious_critical');
    const $iran_active_cases = $('#iran_active_cases');

    // France
    const $uk_flag = $('#uk_flag');
    const $uk_cases = $('#uk_cases');
    const $uk_deaths = $('#uk_deaths');
    const $uk_total_recovered = $('#uk_total_recovered');
    const $uk_new_deaths = $('#uk_new_deaths');
    const $uk_new_cases = $('#uk_new_cases');
    const $uk_serious_critical = $('#uk_serious_critical');
    const $uk_active_cases = $('#uk_active_cases');



    $.ajax({
        type: 'GET',
        url: 'https://corona.lmao.ninja/v2/countries',
        dataType: "json",
        success: function (data) {
            console.log(data);


            $.each(data, function (i, aaa) {
                if (aaa.country === "USA") {

                    $usa_flag.append('<img src="' + aaa.countryInfo.flag + '" width="50" />')
                    $usa_cases.append(aaa.cases)
                    $usa_deaths.append(aaa.deaths)
                    $usa_total_recovered.append(aaa.recovered)
                    $usa_new_deaths.append(aaa.todayDeaths)
                    $usa_new_cases.append(aaa.todayCases)
                    $usa_serious_critical.append(aaa.critical)
                    $usa_active_cases.append(aaa.active)
                }

            });


            $.each(data, function (i, aaa) {
                if (aaa.country === "Spain") {
                    $spain_flag.append('<img src="' + aaa.countryInfo.flag + '" width="50" />')
                    $spain_cases.append(aaa.cases)
                    $spain_deaths.append(aaa.deaths)
                    $spain_total_recovered.append(aaa.recovered)
                    $spain_new_deaths.append(aaa.todayDeaths)
                    $spain_new_cases.append(aaa.todayCases)
                    $spain_serious_critical.append(aaa.critical)
                    $spain_active_cases.append(aaa.active)
                }

            });

            $.each(data, function (i, aaa) {
                if (aaa.country === "Italy") {
                    $italy_flag.append('<img src="' + aaa.countryInfo.flag + '" width="50" />')
                    $italy_cases.append(aaa.cases)
                    $italy_deaths.append(aaa.deaths)
                    $italy_total_recovered.append(aaa.recovered)
                    $italy_new_deaths.append(aaa.todayDeaths)
                    $italy_new_cases.append(aaa.todayCases)
                    $italy_serious_critical.append(aaa.critical)
                    $italy_active_cases.append(aaa.active)
                }

            });

            $.each(data, function (i, aaa) {
                if (aaa.country === "Germany") {
                    $germany_flag.append('<img src="' + aaa.countryInfo.flag + '" width="50" />')
                    $germany_cases.append(aaa.cases)
                    $germany_deaths.append(aaa.deaths)
                    $germany_total_recovered.append(aaa.recovered)
                    $germany_new_deaths.append(aaa.todayDeaths)
                    $germany_new_cases.append(aaa.todayCases)
                    $germany_serious_critical.append(aaa.critical)
                    $germany_active_cases.append(aaa.active)
                }

            });


            $.each(data, function (i, aaa) {
                if (aaa.country === "France") {
                    $france_flag.append('<img src="' + aaa.countryInfo.flag + '" width="50" />')
                    $france_cases.append(aaa.cases)
                    $france_deaths.append(aaa.deaths)
                    $france_total_recovered.append(aaa.recovered)
                    $france_new_deaths.append(aaa.todayDeaths)
                    $france_new_cases.append(aaa.todayCases)
                    $france_serious_critical.append(aaa.critical)
                    $france_active_cases.append(aaa.active)
                }

            });

            $.each(data, function (i, aaa) {
                if (aaa.country === "China") {
                    $china_flag.append('<img src="' + aaa.countryInfo.flag + '" width="50" />')
                    $china_cases.append(aaa.cases)
                    $china_deaths.append(aaa.deaths)
                    $china_total_recovered.append(aaa.recovered)
                    $china_new_deaths.append(aaa.todayDeaths)
                    $china_new_cases.append(aaa.todayCases)
                    $china_serious_critical.append(aaa.critical)
                    $china_active_cases.append(aaa.active)
                }

            });

            $.each(data, function (i, aaa) {
                if (aaa.country === "Iran") {
                    $iran_flag.append('<img src="' + aaa.countryInfo.flag + '" width="50" />')
                    $iran_cases.append(aaa.cases)
                    $iran_deaths.append(aaa.deaths)
                    $iran_total_recovered.append(aaa.recovered)
                    $iran_new_deaths.append(aaa.todayDeaths)
                    $iran_new_cases.append(aaa.todayCases)
                    $iran_serious_critical.append(aaa.critical)
                    $iran_active_cases.append(aaa.active)
                }

            });

            $.each(data, function (i, aaa) {
                if (aaa.country === "UK") {
                    $uk_flag.append('<img src="' + aaa.countryInfo.flag + '" width="50" />')
                    $uk_cases.append(aaa.cases)
                    $uk_deaths.append(aaa.deaths)
                    $uk_total_recovered.append(aaa.recovered)
                    $uk_new_deaths.append(aaa.todayDeaths)
                    $uk_new_cases.append(aaa.todayCases)
                    $uk_serious_critical.append(aaa.critical)
                    $uk_active_cases.append(aaa.active)
                }

            });
        }
    });

})

