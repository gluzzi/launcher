$("#beSmart").click(beSmart);
function beSmart() {
    const button = $("#beSmart");
    const sway =$("#sway");
    const launcher = $(".container");
    const ver = $(".launcher-ver");
    const dot = $(".dot");
    const dots = $(".dots");
    const dlinks = $(".ln-app-d");
    const links = $(".ln-app-l");

    if ($(launcher).css("max-width") === "540px")
    {
        launcher.css("max-width", "1140px");
        button.text("MOBILE");
        dot.removeClass("smart");
        dots.removeClass("smart");
        dlinks.removeClass("smart");
        links.removeClass("smart");
        sway.removeClass("hide")
    }
    else
    {
        launcher.css("max-width", "540px");
        button.text("PC");
        dot.addClass("smart");
        dots.addClass("smart");
        dlinks.addClass("smart");
        links.addClass("smart");
        sway.addClass("hide");
    }
}