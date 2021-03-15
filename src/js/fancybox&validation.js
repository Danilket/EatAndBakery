import "@fancyapps/fancybox"
import Inputmask from "inputmask";
import 'jquery-validation'

// FANCYBOX & VALIDATION & INPUTMASK

$('[data-fancybox="images"]').fancybox({
	afterLoad: function (instance, current) {
		var pixelRatio = window.devicePixelRatio || 1;

		if (pixelRatio > 1.5) {
			current.width = current.width / pixelRatio;
			current.height = current.height / pixelRatio;
		}
	}
});

$('[data-fancybox]').fancybox({
	autoFocus: false,
});


$("#number").inputmask({
	mask: '+7 (999) 999-99-99',
	showMaskOnHover: false,
});


$("#number-footer").inputmask({
	mask: '+7 (999) 999-99-99',
	showMaskOnHover: false,
});

$('.modal__content').validate({
	groups: {
		username: "tel name checkbox"
	},
	rules: {
		tel: {
			required: true
		},
		name: {
			required: true,
			minlength: 2
		},
		checkbox: {
			required: true
		}
	},
	messages: {
		tel: {
			required: false
		},
		name: {
			required: false,
			minlength: false,
		},
		checkbox: {
			required: false
		}
	},
	submitHandler: function () {
		$.fancybox.close();
		$.fancybox.open($('#modal-thanks'));
	}
})



$('.display-content').validate({
	groups: {
		username: "tel-footer name-footer checkbox-footer"
	},
	rules: {
		'tel-footer': {
			required: true
		},
		'name-footer': {
			required: true,
			minlength: 2
		},
		'checkbox-footer': {
			required: true
		}
	},
	messages: {
		'tel-footer': {
			required: false
		},
		'name-footer': {
			required: false,
			minlength: false,
		},
		'checkbox-footer': {
			required: false
		}
	},
	submitHandler: function () {
		$.fancybox.close();
		$.fancybox.open($('#modal-thanks'));
	}
})




$('.modal-return').click(function () {
	$.fancybox.close();
})