$(document).ready(function(){
	
	$(".scroll-down").click(function() {
	     $('html, body').animate({
	         scrollTop: $(".footer").offset().top
	     }, 1500);
	 });

	$('.button-toggle').click(function() {
		$('.main-menu').toggleClass('menu-toggle');
	})
});