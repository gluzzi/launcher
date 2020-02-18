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
    const red = $("#red");
    const orange = $("#orange");
    const green= $("#green");

    if ($(red).hasClass("red"))
    {
        red.removeClass("red")
    }
    else
    {
        red.addClass("red")
    }
}
