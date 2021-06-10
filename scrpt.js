$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrolly > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");

		}



	});

	//owl carousel script

	$('carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			0:{
				items: 3,
				nav: false
			}
		}

	});



});