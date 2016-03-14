$(document).ready(function() {

	//animation
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

	// $(".animation_left").animated("fadeInLeft", "fadeOutLeft");
	// $(".animation_right").animated("fadeInRight", "fadeOutRight");
	// $(".animation_center").animated("flipInY", "flipOutY");

	// $(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	// $(".right .resume_item").animated("fadeInRight", "fadeOutRight");

	//popup for foto
	$(".popup").magnificPopup({type:"image"});

	//portfolio
	$("#portfolio_grid").mixItUp();  //mixitup plugin

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup_content").magnificPopup({type: "inline", midClick: true});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i);

	});

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation(); //validtion form plugin

	//scroll
	$(".top_menu li a").mPageScroll2id();

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_menu ul a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_text").removeClass("h_opacity");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("h_opacity");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		};
	});

});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});