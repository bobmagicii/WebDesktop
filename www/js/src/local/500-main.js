
jQuery(document)
.ready(function(){

	// <div id="Screen0" class="Screen">
	//	<div class="Desktop AnimateOpacity"></div>
	//	<div class="Taskbar"></div>
	// </div>

	let Screen = (
		jQuery('<div />')
		.attr('id',('Screen' + Desktop.Screens.length))
		.addClass('Screen')
		.append(
			jQuery('<div />')
			.addClass('Desktop')
		)
		.append(
			jQuery('<div />')
			.addClass('Taskbar')
		)
	);

	////////

	jQuery('body')
	.prepend(Screen);

	////////

	jQuery(document)
	.trigger('Desktop:Ready');

	return;
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

jQuery(document)
.on('Desktop:Ready',function(){

	new Desktop.Icon.Entity({
		'Label': 'Open Dialog',
		'OnClick': function(){

			new Desktop.Window.Entity({
				'Title': 'Yolo Swag',
				'Screen': '#Screen0'
			});

			return;
		}
	});

	return;
});
