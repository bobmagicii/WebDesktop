var Desktop = {};


setTimeout(function(){

	let Iter = 0;

	new Desktop.Icon.Entity({
		'Screen': '#Screen0',
		'Label': 'Open Dialog'
	});

	for(Iter = 0; Iter < 16; Iter++)
	new Desktop.Icon.Entity({
		'Screen': '#Screen0',
		'Label': 'Icon ' + Iter
	});

	//jQuery('#Screen0 .Desktop').addClass('OpacityHalf');

	new Desktop.Dialog.Window({
		'Title': 'Yolo Swag',
		'Screen': '#Screen0'
	});

},500);
