$("#beSmart").click(beSmart);
function beSmart() {
    const launcher = $(".container");
    const button = $("#beSmart");
    const ver = $(".launcher-ver");
    const dot = $(".dot");
    const dlinks = $(".ln-app-d");
    const links = $(".ln-app-l");

    if ($(launcher).css("max-width") === "540px")
    {
        launcher.css("max-width", "1140px");
        button.text("MOBILE");
        dot.removeClass("smart");
    }
    else
    {
        launcher.css("max-width", "540px");
        button.text("PC");
        dot.addClass("smart");
    }
}