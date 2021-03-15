// BURGER

function burgerMenu(selector) {
	let menu = $(selector);
	let button = $('.header__burger');
	let buttonClose = $('.menu-burger--close');
	let list = $('.menu-burger');
	let overlay = $('.menu-overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu()
	})

	buttonClose.on('click', (e) => {
		e.preventDefault();
		toggleMenu()
	})

	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		list.toggleClass('burger-active');
		overlay.toggleClass('overlay-active');

		if (list.hasClass('burger-active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.menu-burger')