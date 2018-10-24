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
            $("body").addClass("active")
    	}else{
            $("header").removeClass("active")
    		$("body").removeClass("active")
    	}
    })



    
    $(".gnb > ul > li:eq(0) > a").attr("href", "index.html")
    $(".gnb > ul > li:eq(1) > a").attr("href", "history.html")
    $(".gnb > ul > li:eq(1) > ul > li:eq(0) > a").attr("href", "history.html")
    $(".gnb > ul > li:eq(1) > ul > li:eq(1) > a").attr("href", "incruit.html")
    $(".gnb > ul > li:eq(1) > ul > li:eq(2) > a").attr("href", "location.html")

    $(".gnb > ul > li:eq(2) > a").attr("href", "product_cards.html")
    $(".gnb > ul > li:eq(2) > ul > li:eq(0) > a").attr("href", "product_cards.html")


    $(".gnb > ul > li:eq(4) > a").attr("href", "contact.html")
    $(".gnb > ul > li:eq(4) > ul > li:eq(0) > a").attr("href", "contact.html")
   
    




    
    var subPage = new Array;
    subPage[0] = "index";
    subPage[1] = "history";
    subPage[2] = "incruit";
    subPage[3] = "location";
    subPage[4] = "cards";
    subPage[10] = "contact";
    var url = location.href;
    var getAr0 = url.indexOf(subPage[0]); //home
    var getAr1 = url.indexOf(subPage[1]); //history
    var getAr2 = url.indexOf(subPage[2]); //incruit
    var getAr3 = url.indexOf(subPage[3]); //location
    var getAr4 = url.indexOf(subPage[4]); //cards
    var getAr10 = url.indexOf(subPage[10]); //contact

    if(getAr0 != -1){
        $(".gnb > ul > li:eq(0) > a").parent().addClass("active")
    };

    if(getAr1 != -1){
        $(".gnb > ul > li:eq(1) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(1) > ul > li:eq(0) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("History")
        $(".breadcrumbs_ul > li > a").eq(1).text("회사소개").attr("href" , "history.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("연혁").attr("href" , "history.html")
    };

    if(getAr2 != -1){
        $(".gnb > ul > li:eq(1) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(1) > ul > li:eq(1) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("Incruit")
        $(".breadcrumbs_ul > li > a").eq(1).text("회사소개").attr("href" , "history.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("채용").attr("href" , "location.html")
    };

    if(getAr3 != -1){
        $(".gnb > ul > li:eq(1) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(1) > ul > li:eq(2) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("Location")
        $(".breadcrumbs_ul > li > a").eq(1).text("회사소개").attr("href" , "history.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("오시는길").attr("href" , "location.html")
    };

    if(getAr4 != -1){
        $(".gnb > ul > li:eq(2) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(2) > ul > li:eq(0) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("NanulyCard")
        $(".breadcrumbs_ul > li > a").eq(1).text("제품").attr("href" , "product_cards.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("오시는길").attr("href" , "product_cards.html")
    };


    if(getAr10 != -1){
        $(".gnb > ul > li:eq(4) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(4) > ul > li:eq(0) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("Contact")
        $(".breadcrumbs_ul > li > a").eq(1).text("고객지원").attr("href" , "contact.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("일대일 문의").attr("href" , "contact.html")
    };

    // if(getAr2 != -1){
    //     $("li:eq(3) a").addClass("on")
    // };



   

});