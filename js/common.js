$(function(){
	$(document).ready(function(){
        $("#header").load("nav.html")
    })

	
    init()
	
	function init(){ 
		st = $(window).scrollTop() 
		w = $(window).width() 
        h = $(window).height()
	}
	
	$(window).resize(function(){ 
		init()
	})
	
	$(window).scroll(function(){ 
		init()
    })


})