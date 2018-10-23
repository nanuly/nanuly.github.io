$(function(){


  n = 1

  ClearID = setInterval(function(){ 
    n++
    next() 
  },4000)


  setTimeout(function(){ $(".slide_img1").addClass("active")  },100)

  function next(){
    if( n== 4){ n = 1}
    $(".slide_box li").stop().fadeOut()
    $(".slide_img"+n).stop().fadeIn()

    $(".slide_box li").removeClass("active")
    $(".slide_img"+n).addClass("active")
  }


  

  $(".slide_ani_btn").mouseenter(function(){
    clearInterval(ClearID)
  }).mouseleave(function(){
    ClearID = setInterval(function(){ 
      n++
      next() 
    },4000)
  })


  clickble = true

  $(".slide_left_bnt").click(function(){
    if ( clickble == true) {
      n--
      if ( n < 1){ n = 3}
      $(".slide_box li").stop().fadeOut()
      $(".slide_img"+n).stop().fadeIn()
      clickble = false
      setTimeout(function(){ clickble = true },1000)
    };
  })



  $(".slide_right_bnt").click(function(){
    if ( clickble == true ){
      n++
      next()
      clickble = false
      setTimeout(function(){ clickble = true },1000)
    }
    
  })


  $(".home_about_li").click(function(){
    $(this).stop().toggleClass("active")
    $(this).next().stop().slideToggle()
  })



















   // n = 1

   // function slider_next(){
   // 		$(".home_slide1").stop().animate({"left":(n-1)*-100+"%"});
   //    $(".slide_btn1_txt").removeClass("active");
   //    $(".slide_btn1_txt"+n).addClass("active");
   // }

   // ClearID = setInterval(function(){ 
   //      n++
   //      if(n > 2){ n = 1 }
   //      slider_next()
   //  },5000)

   // $(".slide_btn1 button").mouseenter(function(){
   //    clearInterval(ClearID)
   // }).mouseleave(function(){
   //    ClearID = setInterval(function(){ 
   //      n++
   //      if(n > 2){ n = 1 }
   //      slider_next()
   //    },5000) 
   // })


   // clickble = true

   // $(".btn_next").click(function(){
   //    if (clickble == true) {
   //      n++
   //      if(n > 2){ n = 1 }
   //      slider_next()
   //      clickble = false
   //      setTimeout(function(){ clickble = true },1000)
   //    }
   		
   // })

   // $(".btn_prve").click(function(){
   //    if (clickble == true) {
   //      n--
   //      if(n < 1){ n = 2 }
   //      slider_next()
   //      clickble = false
   //      setTimeout(function(){ clickble = true },1000)
   //    }
   // })


})