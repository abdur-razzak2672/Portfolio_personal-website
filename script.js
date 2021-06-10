$(document).ready(function(){
	$(window).scroll(function(){
		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");

		}



	});

	//toggle menu/navigation bar

	$('.icon').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.icon i').toggleClass("active");
	});




	//owl carousel script


	$(".carousel").owlCarousel({
    	navigation : true,
    	margin: 20,
    	autoplayTimeOut: 2000,
    	autoplayHoverPause: true,
    	responsive: {
    		0:{
    			items:1,
    			nav: false,
    		},
    		600:{
    			items:2,
    			nav: false,
    		},
    		1000:{
    			items:3,
    			nav: false,
    		}
    	}
  });



});