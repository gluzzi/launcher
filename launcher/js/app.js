$("#beSmart").click(beSmart);
function beSmart() {
    const launcher = $(".container");
    const button = $("#beSmart")
    const ver = $(".launcher-ver");
    const dlinks = $(".ln-app-d");
    const links = $(".ln-app-l");

    if ($(launcher).css("max-width") === "540px")
    {
        launcher.css("max-width", "1140px");
        button.text("MOBILE")
        ver.addClass("centered")
    }
    else
    {
        launcher.css("max-width", "540px");
        button.text("PC")
    }
}