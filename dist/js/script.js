$(document).ready(function(){
    $('.slider-1').owlCarousel({
        loop:true,
        dots:false,
        autoHeight: true,
        animateOut: 'fadeOut',
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            1920:{
                items:1,
            }
        }
    });

    var owl=$(".slider-1");
	owl.owlCarousel();
	//$(".next") - находим нашу кнопку
	$(".promo__next").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".promo__prev").click(function(){
		owl.trigger("prev.owl.carousel");
	});

  });