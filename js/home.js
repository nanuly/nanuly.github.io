$(function(){


  n = 1

  ClearID = setInterval(function(){ 
    n++
    next() 
  },4000)

  $(window).load(function(){
    setTimeout(function(){ $(".slide_img1").addClass("active")  },100)
  })

  

  function next(){
    if( n== 3){ n = 1}
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
      if ( n < 1){ n = 2}
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



  $(".incruit_ul1 > li").mouseenter(function(){
    $(".incruit_ul1 > li").removeClass("active")
    $(".incruit_ul1 > li").not($(this)).addClass("active")
    
  
  });

  $(".incruit_ul1 > li").mouseleave(function(){
    $(".incruit_ul1 > li").removeClass("active")
  });

  $(".incruit_ul2 > li").mouseenter(function(){
    $(".incruit_ul2 > li").removeClass("active")
    $(".incruit_ul2 > li").not($(this)).addClass("active")
    
  
  });

  $(".incruit_ul2 > li").mouseleave(function(){
    $(".incruit_ul2 > li").removeClass("active")
  });

 















})