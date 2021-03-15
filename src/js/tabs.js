// TABS


$(document).ready(function () {
	$(".tabs__item-inner").on('click', function (ev) {
		ev.preventDefault()

		$('.tabs__item-inner').removeClass("tabs__item-inner--active")
		$('.assortment__list').removeClass("assortment__list--active")

		$(this).addClass("tabs__item-inner--active")
		$($(this).attr('href')).addClass("assortment__list--active")
	});

	$('.tabs__item-inner:first').click();
})
