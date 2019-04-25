Desktop.Icon = {
	'Entity': null
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

Desktop.Icon.Entity = function(Opt) {
	let that = this;
	let Methods = {};

	////////

	let Config = {
		'Screen': '#Screen0',
		'Label': 'Icon'
	};

	Desktop.Util.MergeProperties(Opt,Config);

	let Element = null;
	let Label = null;
	let Img = null;

	////////

	Methods.Construct = function(){

		Element = jQuery('<div />');
		Label = jQuery('<div />').addClass('Label');
		Img = jQuery('<div />').addClass('Img');

		Element
		.addClass('Icon');

		Label
		.text(Config.Label);

		////////

		Element
		.append(Img)
		.append(Label);

		jQuery(Config.Screen)
		.find('.Desktop')
		.append(Element);

		return;
	};

	////////

	Methods.Construct();
	return this;
};