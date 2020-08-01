

$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://corona.lmao.ninja/v2/countries',
        dataType: "json",
        success: function (data) {

            sample_data = {};

            $.each(data, function (i, bbb) {
                var objName = bbb.countryInfo.iso2;               
                var objValue = bbb.cases;
                sample_data[objName] = objValue;

            });

            const countryData = {};

            for (const [key, value] of Object.entries(sample_data)) {
                countryData[key.toLowerCase()] = value;
            }

            $('#vmap').vectorMap({
                backgroundColor: null,
                // color: '#ffffff',
                hoverOpacity: 0.7,
                selectedColor: '#7B6FFF',
                values: countryData,
                scaleColors: ['#f00000', '#000000'],
                normalizeFunction: 'polynomial',

                onLabelShow: function (event, label, geography) {
                    vfv = geography.toUpperCase();
                    $.each(data, function (i, m) {
                        vgg = m.countryInfo.iso2;

                        if (vfv == vgg) {
                            label.html('<img src="' + m.countryInfo.flag + '" width="25" class="mr-2 mb-1 " />' + m.country + '<br/> Cases: ' + m.cases + '<br/> Death: ' + m.deaths + '<br/> Active: ' + m.active + '<br/> Recovered ' + m.recovered);
                        }
                    })
                },

            });
        }
    })
})




