$(function(){

   n = 1

   function slider_next(){
   		$(".home_slide1").stop().animate({"left":(n-1)*-100+"%"});
      $(".slide_btn1_txt").removeClass("active");
      $(".slide_btn1_txt"+n).addClass("active");
   }

   ClearID = setInterval(function(){ 
        n++
        if(n > 2){ n = 1 }
        slider_next()
    },5000)

   $(".slide_btn1 button").mouseenter(function(){
      clearInterval(ClearID)
   }).mouseleave(function(){
      ClearID = setInterval(function(){ 
        n++
        if(n > 2){ n = 1 }
        slider_next()
      },5000) 
   })


   clickble = true

   $(".btn_next").click(function(){
      if (clickble == true) {
        n++
        if(n > 2){ n = 1 }
        slider_next()
        clickble = false
        setTimeout(function(){ clickble = true },1000)
      }
   		
   })

   $(".btn_prve").click(function(){
      if (clickble == true) {
        n--
        if(n < 1){ n = 2 }
        slider_next()
        clickble = false
        setTimeout(function(){ clickble = true },1000)
      }
   })


})