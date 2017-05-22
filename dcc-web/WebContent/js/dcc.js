$(function () {
    $("body").addClass("js-enabled");
    // show cookie message
    if (!sessionStorage.seenCookieMessage || sessionStorage.seenCookieMessage == "no") {
        $("#global-cookie-message").css("display", "block");
    }
    else {
        $("#global-cookie-message").css("display", "none");
    }
    // cookie message closed
    $("#closeCookieButton").click(function () {
        $("#global-cookie-message").css("display", "none");
        sessionStorage.seenCookieMessage = "yes";
    });
})