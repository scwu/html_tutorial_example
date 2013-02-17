$(document).ready(function(){
	$("#icons img").hover(function(){
		$(this).stop().animate({opacity: 0.75, marginTop: -10}, 400);
	},function(){
		$(this).stop().animate({opacity: 1.0, marginTop: 0}, 400);
	});
});
