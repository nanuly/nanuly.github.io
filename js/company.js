$(function(){
	$(".lnb > ul > li").mouseenter(function(){
		$(this).children("ul").stop().slideDown()
	})


	$(".lnb > ul > li").mouseleave(function(){
		$(this).children("ul").stop().slideUp()
	})
})