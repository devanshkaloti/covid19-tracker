
var body = $('body');
var html = $('html');

function quixSettings({ bodybg,direction }) {
    this.bodybg = bodybg || "color_1";
    this.direction = direction || "ltr";

    this.manageBodyBg();
    this.manageRtlLayout();

}

quixSettings.prototype.manageRtlLayout = function() {
    switch(this.direction) {
        case "rtl":
            html.attr("dir", "rtl");
            html.addClass('rtl');
            body.attr("direction", "rtl");
            break;
        case "ltr": 
            html.attr("dir", "ltr");
            html.removeClass('rtl');
            body.attr("direction", "ltr");
            break;
        default: 
            html.attr("dir", "ltr");
            body.attr("direction", "ltr");
    }
}

quixSettings.prototype.manageBodyBg = function () {
    switch (this.bodybg) {
        case "color_1":
            body.attr("data-bodybg", "color_1");
            break;
        case "color_2":
            body.attr("data-bodybg", "color_2");
            break;
        case "color_3":
            body.attr("data-bodybg", "color_3");
            break;
        case "color_4":
            body.attr("data-bodybg", "color_4");
            break;
        case "color_5":
            body.attr("data-bodybg", "color_5");
            break;
        case "color_6":
            body.attr("data-bodybg", "color_6");
            break;
        default:
            body.attr("data-bodybg", "color_1");
    }
}




