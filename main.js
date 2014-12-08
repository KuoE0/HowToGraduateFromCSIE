/*
 * main.js
 * Copyright (C) 2014 KuoE0 <kuoe0.tw@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */


$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['#012B36'], //, '#DC322F', '#CB4B16', '#B58901', '#859901', '#2AA198', '#268BD2', '#6C71C4', '#D33682'],
		anchors: ['home'], //, 'oral-applying', 'before-oral', 'on-oral', 'paper-examine', 'leave', 'appendix', 'congrat'],

		menu: '#menu',
		scrollingSpeed: 200,
		verticalCentered: false
	});
});


