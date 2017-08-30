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
	$(window).resize(function () {
		setSizeBanner();
	});

	// init functions
	new WOW().init();

	$('.parallax').parallax({
		speed: 0.1,
		bleed: 100
	});

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 72) $('header').addClass('fixed');
		else $('header').removeClass('fixed');
	});

	setSizeBanner = function () {
		var h      = 0;
		var height = $(window).height();
		if (height > 670) {
			h = 670;
		}
		else {
			h = height;
		}
		$('#banner').height(h);
	}
	setSizeBanner();

});