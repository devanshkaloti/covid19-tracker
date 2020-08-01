function d() {
    $.ajax({
        type: 'GET',
        url: 'https://apis.dksources.com/COVID19july/apiv1.php/records/cities?',
        dataType: "json",
        success: function (data) {
            console.log(data)
        }
    })

}