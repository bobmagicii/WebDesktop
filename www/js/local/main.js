var Desktop = {};


setTimeout(function(){

	let Iter = 0;

	new Desktop.Icon.Entity({
		'Screen': '#Screen0',
		'Label': 'Open Dialog',
		'OnClick': function(){

			new Desktop.Window.Entity({
				'Title': 'Yolo Swag',
				'Screen': '#Screen0'
			});

			return;
		}
	});

},500);
