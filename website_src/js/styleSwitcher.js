
(function ($) {
    "use strict"

    const body = $('body');
    const html = $('html');

    //get the DOM elements from right sidebar
    const themeDirectionSelect = $('#theme_direction');

    //change the theme typography controller
    themeDirectionSelect.on('change', function() {
        $('html').attr('dir', this.value);
        $('html').attr('class', '');
        $('html').addClass(this.value);
        $('body').attr('direction', this.value);
    });


    //change the header background controller
    $('input[name="header_bg"]').on('click', function () {
        body.attr('data-bodybg', this.value);
    });

    //change the nav-header background controller
    $('input[name="navigation_header"]').on('click', function () {
        body.attr('data-primary-color', this.value);
    });


})(jQuery);



