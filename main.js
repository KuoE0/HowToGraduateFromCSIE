/*
 * main.js
 * Copyright (C) 2014 KuoE0 <kuoe0.tw@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */


$(document).ready(function() {
    $('#fullpage').fullpage({
		anchors: ['home', 'oral-applying', 'before-oral', 'on-oral', 'after-oral', 'paper', 'leave', 'appendix', 'congrat'],

		menu: '#menu',
		scrollingSpeed: 100,
		verticalCentered: false,
		slidesNavigation: true,

		easingcss3: 'linear'

	});
});


