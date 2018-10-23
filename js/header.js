$(function(){

	$(".gnb > ul > li").mouseenter(function(){
		$(this).children("ul").stop().fadeIn(200);
	})

	$(".gnb > ul > li").mouseleave(function(){
		$(this).children("ul").stop().fadeOut(200);
	})


    $(window).scroll(function(){
    	if (st > 0) {
    		$("header").addClass("active")
    	}else{
    		$("header").removeClass("active")
    	}
    })



    var gnbNav = new Array;
    gnbNav[0] = "/";
    var gnburl = location.pathname.substring(1) ;
    var getList0 = gnburl.indexOf(gnbNav[0]);

    if(getList0 != -1){
        $(".gnb > ul > li:eq(0) > a").attr("href", "index.html")
        $(".gnb > ul > li:eq(1) > a").attr("href", "history.html")
        $(".gnb > ul > li:eq(1) > ul > li:eq(0) > a").attr("href", "history.html")
    };
    




    
    var subPage = new Array;
    subPage[0] = "index";
    subPage[1] = "history";
    subPage[2] = "";
    var url = location.href;
    var getAr0 = url.indexOf(subPage[0]);
    var getAr1 = url.indexOf(subPage[1]);
    var getAr2 = url.indexOf(subPage[2]);

    if(getAr0 != -1){
        $(".gnb > ul > li:eq(0) > a").parent().addClass("active")
    };

    if(getAr1 != -1){
        $(".gnb > ul > li:eq(1) > a").parent().addClass("active")
        $(".gnb > ul > li > ul > li:eq(0) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("History")
        $(".breadcrumbs_ul > li > a").eq(1).text("회사소개")
        $(".breadcrumbs_ul > li > a").eq(2).text("연혁")
    };

    // if(getAr2 != -1){
    //     $("li:eq(3) a").addClass("on")
    // };



   

});