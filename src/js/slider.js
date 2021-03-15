import "slick-slider"


// SLIDER


$(document).ready(function () {
	$('.bakery__slider').slick({
		infinite: true,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><svg class="bakery__arrow"><use xlink:href="#slider-arrow"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="bakery__arrow bakery__arrow--next"><use xlink:href="#slider-arrow"></use></svg></button>',
	});
});
