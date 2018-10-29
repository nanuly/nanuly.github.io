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

    $(".snb > i").click(function(){
        $(".snb_box").css("display" , "block")
    })

    $(".snb_btn_box").click(function(){
        $(".snb_box").css("display" , "none")
    })


    $(".snb_list_box > li").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active")
        }else{
            $(".snb_list_box > li").removeClass("active")
            $(this).stop().addClass("active") 
        }
        
    })


    // $(".snb > i").click(function(){
    //     if ($(this).hasClass("active")) {
    //             $(this).removeClass("active")
    //             $(".snb .snb_box").stop().fadeOut(500).removeClass("active , off")
    //             $(".snb .sub_list").stop().fadeOut(500).removeClass("active")
    //     }else{
    //             $(this).addClass("active")
    //             $(".snb .snb_box").stop().fadeIn(500).addClass("active")
    //     }



    //     // $(this).addClass("active")
    //     // $(".snb .snb_box").stop().fadeToggle(500).toggleClass("active")
    // })

    

    // $(".snb .snb_box a").click(function(){
    //     li = $(this).attr("data-li")
    //     $(".snb .snb_box").stop().fadeOut(500).addClass("off")
    //     $(".snb .sub_list"+li).stop().fadeIn(500).addClass("active")
    // })

    // $(".snb .sub_list .back").click(function(){
    //     $(".snb .snb_box").stop().fadeIn(500).removeClass("off")
    //     $(".snb .sub_list").stop().fadeOut(500).removeClass("active")
    // })



 




    
    var subPage = new Array;
    subPage[0] = "index";
    subPage[1] = "history";
    subPage[2] = "incruit";
    subPage[3] = "location";
    subPage[4] = "product_cards";
    subPage[5] = "board";
    subPage[6] = "pages";
    subPage[7] = "geeks";
    subPage[8] = "service_cards";
    subPage[9] = "contact";
    subPage[10] = "consulting";


    var url = location.href;
    var getAr0 = url.indexOf(subPage[0]); //home
    var getAr1 = url.indexOf(subPage[1]); //history
    var getAr2 = url.indexOf(subPage[2]); //incruit
    var getAr3 = url.indexOf(subPage[3]); //location
    var getAr4 = url.indexOf(subPage[4]); //cards
    var getAr5 = url.indexOf(subPage[5]); //board
    var getAr6 = url.indexOf(subPage[6]); //pages
    var getAr7 = url.indexOf(subPage[7]); //geeks
    var getAr8 = url.indexOf(subPage[8]); //service_cards
    var getAr9 = url.indexOf(subPage[9]); //contact
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
        $(".breadcrumbs_ul > li > a").eq(2).text("나누리카드").attr("href" , "product_cards.html")
    };

    if(getAr5 != -1){
        $(".gnb > ul > li:eq(2) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(2) > ul > li:eq(1) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("NanulyBoards")
        $(".breadcrumbs_ul > li > a").eq(1).text("제품").attr("href" , "product_cards.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("나누리보드").attr("href" , "product_boards.html")
    };

    if(getAr6 != -1){
        $(".gnb > ul > li:eq(2) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(2) > ul > li:eq(2) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("NanulyBoards")
        $(".breadcrumbs_ul > li > a").eq(1).text("제품").attr("href" , "product_cards.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("나누리페이지").attr("href" , "product_pages.html")
    };

    if(getAr7 != -1){
        $(".gnb > ul > li:eq(3) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(3) > ul > li:eq(0) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("NanulyGeeks")
        $(".breadcrumbs_ul > li > a").eq(1).text("서비스").attr("href" , "service_geeks.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("나누리재능인").attr("href" , "service_geeks.html")
    };

    if(getAr8 != -1){
        $(".gnb > ul > li:eq(3) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(3) > ul > li:eq(1) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("NanulyCards")
        $(".breadcrumbs_ul > li > a").eq(1).text("서비스").attr("href" , "service_geeks.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("나누리카드").attr("href" , "service_cards.html")
    };


    if(getAr9 != -1){
        $(".gnb > ul > li:eq(4) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(4) > ul > li:eq(0) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("Contact")
        $(".breadcrumbs_ul > li > a").eq(1).text("고객지원").attr("href" , "contact.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("일대일 문의").attr("href" , "contact.html")
    };

    if(getAr10 != -1){
        $(".gnb > ul > li:eq(4) > a").parent().addClass("active")
        $(".gnb > ul > li:eq(4) > ul > li:eq(1) > a").parent().addClass("active")
        $(".breadcrumbs h1").text("Consulting")
        $(".breadcrumbs_ul > li > a").eq(1).text("고객지원").attr("href" , "contact.html")
        $(".breadcrumbs_ul > li > a").eq(2).text("웹 컨설팅").attr("href" , "consulting.html")
    };

    




   

});