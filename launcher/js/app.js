$(".dots").click(sway);
function sway() {
    var timer;
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
            }, 250);
        }, 250);
    }, 250);
}
