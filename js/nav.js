$(function() {
	$(window).scroll(function () { 
	if ($(this).scrollTop() > 50) { 
		$('.nav__liner').addClass("nav__liner-fixed"); 
		} else { 
		$('.nav__liner').removeClass("nav__liner-fixed"); 
		} 
	});
});
