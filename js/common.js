$(document).ready(function(){
$(".top_head").animated("zoomInUp", "zoomOutDown");
$(".section_header").animated("fadeInDown", "fadeOutDown");
$(".animation_1").animated("fadeInLeft", "fadeOutLeft");
$(".vk , .tw").animated("fadeInLeft", "fadeOutLeft");
$(".fc , .gh").animated("fadeInRight", "fadeOutRight");
//$(".contact_block").animated("rollIn", "rollOut");

function heightDetect() {
	$(".main_head").css("height", $(window).height());
}
heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
});









