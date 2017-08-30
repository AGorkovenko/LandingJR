jQuery(document).ready(function ($) {

    // Internet Explorer 10 in Windows Phone 8
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode(
                "@-ms-viewport{width:auto!important}"
            )
        );
        document.head.appendChild(msViewportStyle);
    }

    // Android stock browser
    $(function () {
        var nua       = navigator.userAgent;
        var isAndroid = (nua.indexOf("Mozilla/5.0") > -1 && nua.indexOf("Android ") > -1 && nua.indexOf("AppleWebKit") > -1 && nua.indexOf("Chrome") === -1);
        if (isAndroid) {
            $("select.form-control").removeClass("form-control").css("width", "100%");
        }
    });

    // calling function after resize window
    $(window).resize(function() {
        setSizeBanner();
    });

    // init function
    $('.parallax').parallax({
        speed: 0.1,
        bleed: 100
    });

    setSizeBanner = function (){
        $('#banner').height( $(window).height() > 670 ? 670 : $(window).height() );
    }
    setSizeBanner();

});