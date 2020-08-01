//  Preloader
jQuery(window).on("load", function () {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');
});


(function ($) {

    "use strict"

    // to keep the current page active
    $(function () {
        for (var nk = window.location,
            o = $(".navbar-nav a").filter(function () {
                return this.href == nk;
            })
                .addClass("active")
                .parent()
                .addClass("active"); ;) {
            // console.log(o)
            if (!o.is("li")) break;
            o = o.parent()
                .addClass("show")
                .parent()
                .addClass("active");
        }

    });

    // $('[data-toggle="tooltip"]').tooltip();

    $('.sidebar-right-trigger').on('click', function () {
        $('.sidebar-right').toggleClass('show');
    });

    // setTimeout(function () {
    //     location.reload();
    // }, 30000);

})(jQuery);


$.fn.digits = function(){
    return this.each(function(){
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
    })
}


function urlPart1() {
    var url = window.location;
    if (url.toString().split("/")[2] === "covid19-tracker.ca") {
        return "https://";
    } else {
        return "https://www.";
    }
}



// const ac = new PerfectScrollbar('.all-country');










