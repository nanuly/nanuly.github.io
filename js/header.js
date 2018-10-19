$(function(){

	$(".gnb > ul > li").mouseenter(function(){
		$(".gnb_curtain").stop().slideDown()
		$(".gnb_ul_box > li > ul").stop().slideDown()
	})

	$(".gnb > ul > li").mouseleave(function(){
		$(".gnb_curtain").stop().slideUp()
		$(".gnb_ul_box > li > ul").stop().slideUp()
	})

    $(".menu_btn_box").click(function(){ 
        $(this).toggleClass("active") 
        $(".snb").toggleClass("active")
    })


    $(".snb > ul > li").click(function(){
    	$(".snb_box_ul").stop().slideUp();
    	$(this).children().stop().slideDown();

    })

    

});