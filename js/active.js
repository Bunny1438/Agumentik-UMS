/* =====================================
Template Name: TravelTrek
Author Name: iThemer
Author URI: http://ithemer.com/
Description: TravelTrek is a Travel Agency & Tour Booking HTML5 Template.
Version:	1.0
========================================*/
/*=======================================
[Start Activation Code]
=========================================
	01. Mobile Menu JS
	02. Mobile Menu JS
	03. Nice Select JS
	04. Circle Progress JS
	05. Trips Slider JS
	06. Testimonial Slider JS
	07. Testimonial Slider Two JS
	08. Client Carousel JS
	09. Home Slider JS
	10. Counter JS
	11. Youtube Player JS
	12. Trip Single Slider JS
	13. Wow JS
	14. Parallax JS
	15. Video Popup JS
	16. Date Picker JS
	17. Scroll UP JS
	18. Others JS
=========================================
[End Activation Code]
=========================================*/ 
(function($) {
    "use strict";
     $(document).on('ready', function() {	
		
		/*====================================
		01. Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 150) {
				$('.site-header').addClass("sticky");
			} else {
				$('.site-header').removeClass("sticky");
			}
		});
		
		/*====================================
		02. Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration: 600,
			closeOnClick:true,
		});

		/*====================================
			03. Onepage Nav JS
		======================================*/ 
		$('.menu').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 1500,
			scrollThreshold: 0.1,
			filter: '',
			easing: 'easeInOutExpo',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function($currentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});
		
		
		/*===============================
		08.	Clients Carousel JS
		=================================*/ 
		$(".clients-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:2000,
			singleItem: true,
			autoplayHoverPause:true,
			center:false,
			margin:30,
			nav:false,
			dots:false,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:5,
				},
			}
		});	

		// Screenshot carousel
		$('.screenshots-carousel').owlCarousel({
			items: 1,
			autoplay: 2500,
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots: false
		});
		
		/*=======================
		  Extra Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 0
				}, 900);
			e.preventDefault();
		});
		
		/*===============================
		06.	Testimonial Slider JS
		=================================*/ 
		$(".testimonial-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 500,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			items:1,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});	
 
		
		
		/*===============================
		09.	Pricing switcher button JS
		=================================*/ 
		$(".switcher__button").on('click', function(e) { 
			$(".switcher__button").toggleClass('switcher__button--enabled');
			$(".pricing__value").removeClass('pricing__value--hidden');
			$(".pricing__value").toggleClass('pricing__value--show pricing__value--hide');	
		});
			
		/*===============================
		09.	Home Slider JS
		=================================*/ 
		$(".slider-active").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 700,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			center:false,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			items:1,
		});		
		
		/*===============================
		10. Checkbox JS
		=================================*/  
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*===============================
		10. Counter JS
		=================================*/  
		$('.number').counterUp({
			time: 1000
		});
		
		/*====================================
		11. Youtube Player JS
		======================================*/
		$('.player').mb_YTPlayer();		
		
		/*====================================
		13.	Wow JS
		======================================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
		
		/*======================================
		14.	Parallax JS
		======================================*/ 
		$(window).stellar({
            responsive: true,
            positionProperty: 'position',
			horizontalOffset: 0,
			verticalOffset: 0,
            horizontalScrolling: false
        });
		
		
		/*=====================================
		15.  Video Popup
		======================================*/ 
		$('.video-popup').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		/*====================================
			14. Scroll Up JS
		======================================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		});  
		
	});
		/*=====================================
		18. Others JS
		======================================*/ 	
		$( function() {
			$( "#slider-range" ).slider({
			  range: true,
			  min: 0,
			  max: 500,
			  values: [ 0, 500 ],
			  slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			  }
			});
			$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
		} );
		
		/*====================================
			16. Preloader JS
		======================================*/
		
		$(window).on('load', function() {
			var preloaderFadeOutTime = 500;
			function hidePreloader() {
				var preloader = $('.spinner-wrapper');
				setTimeout(function() {
					preloader.fadeOut(preloaderFadeOutTime);
				}, 500);
			}
			hidePreloader();
		});
	 
})(jQuery);
