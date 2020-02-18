$("#menu").click(beSmart);
function beSmart() {
    const container = $(".container");
    const menu = $(".menu");

    if ($(container).css("max-width") === "540px")
    {
        container.css("max-width", "1140px");
        button.text("MOBILE");
        dot.removeClass("smart");
        dots.removeClass("smart");
        dlinks.removeClass("smart");
        links.removeClass("smart");
        sway.removeClass("hide")
    }
    else
    {
        container.css("max-width", "540px");
        button.text("PC");
        dot.addClass("smart");
        dots.addClass("smart");
        dlinks.addClass("smart");
        links.addClass("smart");
        sway.addClass("hide");
    }
}
$("#open").click(sway);
function sway() {
    var timer;
    const menu = $(".menu");
    const red = $("#red");
    const orange = $("#orange");
    const green= $("#green");

    clearTimeout(timer);
    red.addClass("red");
    timer = setTimeout(function () {
    red.removeClass("red");
        orange.addClass("orange");
        timer = setTimeout(function () {
        orange.removeClass("orange");
                green.addClass("green");
                timer = setTimeout( function () {
                green.removeClass("green");
                    green.addClass("green");
                    timer = setTimeout( function () {
                    green.removeClass("green");
                }, 250);
            }, 250);
        }, 250);
    }, 250);
}
