$(document).ready(function () {
	setInterval (function() {
	var label = $('.click'),
		select = $('.select'),
		link = $('.link'),
		select1 = $('.select1'),
		select2 = $('.select2')

		label.click (function(e) {
			select.css("display" , "flex");
		});
		select.click (function(e) {
			$(this).removeClass("select");
			$(this).removeClass("active");
			$(this).addClass("click");
			label.not($(this)).addClass("select");
			label.not($(this)).removeClass("click");
			label.not($(this)).css("display" , "none");
		});
		select1.click (function(e) {
			 link.attr("href", "https://primearea.biz/buy/100683/");
		});
		select2.click (function(e) {
			 link.attr("href", "https://primearea.biz/buy/102350/");
		});

}, 500);
});