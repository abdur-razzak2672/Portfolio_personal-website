$(document).ready(function(){
	$(window).scroll(function(){
		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");

		}


		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 500) {
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");

		}



	});

	//typing animation script


	//slide up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0})
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
    			items:1,
    			nav: false,
    		},
    		800:{
    			items:2,
    			nav: false,
    		},
    		1000:{
    			items:3,
    			nav: false,
    		}
    	}
  });






	var typed = new Typed(".typing",{
		strings: ["Programmer","Web Designer","Web Developer"],
		typeSpeed:100,
		backSpeed: 60,
		loop: true

	});


	var typed = new Typed(".typing2",{
		strings: ["Programmer","Web Designer","Web Developer"],
		typeSpeed:100,
		backSpeed: 60,
		loop: true

	});



});