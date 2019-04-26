Desktop.Window = {
	Entity: null,
	Header: null,
	Content: null,
	Footer: null
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

Desktop.Window.Entity = function(Opt){
	let that = this;
	let Methods = {};

	////////

	let Config = {
		'Title': 'Dialog',
		'Icon': 'fa-asterisk',
		'Screen': '#Screen0'
	};

	Desktop.Util.MergeProperties(Opt,Config);

	////////

	let Element = null;
	let Header = null;
	let Content = null;
	let Footer = null;

	////////

	Methods.Construct = function(){

		Element = jQuery('<div />');
		Header = new Desktop.Window.Header(that);
		Content = jQuery('<section>This is a popup box.</section>');
		Footer = jQuery('<footer />');

		Element
		.addClass('Dialog')
		.addClass('AnimateScale')
		.addClass('ScaleZero');

		Header
		.SetIcon(Config.Icon)
		.SetTitle(Config.Title);

		Element
		.append(Header.GetElement())
		.append(Content)
		.append(Footer);

		////////

		// add to the desktop.

		jQuery(Config.Screen)
		.append(Element);

		////////

		Methods.Show();
		return;
	};

	Methods.GetElement = function(){

		return Element;
	};

	////////

	Methods.Destroy = function(){
		Methods.Hide();
		Element.empty();
		return;
	};

	Methods.Hide = function(){

		Desktop.Util.CenterInParent(Element);

		Element
		.addClass('ScaleZero')
		.removeClass('ScaleNormal');

		return;
	};

	Methods.Show = function(){

		Desktop.Util.CenterInParent(Element);

		Element
		.addClass('ScaleNormal')
		.removeClass('ScaleZero');

		return;
	};

	Methods.Maximise = function(){

		if(Element.hasClass('Maximise')) {
			Element
			.removeClass('Maximise');

			Desktop.Util.CenterInParent(Element);
		}

		else {
			Element
			.css('top','')
			.css('left','')
			.addClass('Maximise');
		}

		return;
	};

	Methods.Minimise = function(){

		let TrayIcon;

		if(Element.hasClass('Minimise')) {
			Element
			.removeClass('Minimise');
		}

		else {
			Element
			.addClass('Minimise');

			TrayIcon = jQuery('<div />');

			TrayIcon
			.addClass('Item')
			.append('<i class="fa fa-fw ' + Config.Icon + '"></i>')
			.on('click',function(){
				TrayIcon.remove();
				Methods.Minimise();
			});

			jQuery(Config.Screen)
			.find('.Taskbar')
			.append(TrayIcon);
		}

		return;
	};

	////////

	this.GetElement = Methods.GetElement;
	this.Destroy = Methods.Destroy;
	this.Hide = Methods.Hide;
	this.Show = Methods.Show;
	this.Maximise = Methods.Maximise;
	this.Minimise = Methods.Minimise;

	////////

	Methods.Construct();
	return this;
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

Desktop.Window.Header = function(Window){
	let that = this;
	let Methods = {};

	////////

	let State = {
		'Icon': null,
		'Title': null,
		'Window': Window
	};

	let Element = null;
	let ElIcon = null;
	let ElTitle = null;
	let ElMinimise = null;
	let ElMaximise = null;
	let ElClose = null;

	////////

	Methods.Construct = function(){
		(Element = jQuery('<header />'))
		.append(ElIcon = jQuery('<span />'))
		.append(ElTitle = jQuery('<em />'))
		.append(ElMinimise = jQuery('<strong><i class="fa fa-fw fa-window-minimize"></i></strong>'))
		.append(ElMaximise = jQuery('<strong><i class="fa fa-fw fa-window-maximize"></i></strong>'))
		.append(ElClose = jQuery('<strong><i class="fa fa-fw fa-times"></i></strong>'));

		ElClose
		.on('click',function(){ State.Window.Destroy(); });

		ElMaximise
		.on('click',function(){ State.Window.Maximise(); });

		ElMinimise
		.on('click',function(){ State.Window.Minimise(); });

		Element
		.on('mousedown',Methods.OnMoveStart)
		.on('mouseup',Methods.OnMoveStop);

		return;
	};

	Methods.OnMoveStart = function(){
		Desktop.Mouse.RegisterForMove(State.Window.GetElement());
		return;
	};

	Methods.OnMoveStop = function(){
		Desktop.Mouse.UnregisterForMove(State.Window.GetElement());
		return;
	};

	////////

	Methods.GetElement = function(){

		return Element;
	};

	Methods.GetIcon = function() {

		return State.Icon;
	};

	Methods.SetIcon = function(Input){

		(Element.find('span'))
		.empty()
		.append(
			jQuery('<i />')
			.addClass('fa fa-fw')
			.addClass(Input)
		);

		State.Icon = Input;

		return that;
	};

	Methods.GetTitle = function() {

		return State.Title;
	};

	Methods.SetTitle = function(Input){

		(Element.find('em'))
		.text(Input);

		State.Title = Input;

		return that;
	};

	Methods.GetWindow = function(){

		return State.Window;
	};

	Methods.SetWindow = function(Input){

		State.Window = Input;

		return this;
	};

	////////

	this.GetElement = Methods.GetElement;
	this.GetIcon = Methods.GetIcon;
	this.SetIcon = Methods.SetIcon;
	this.GetTitle = Methods.GetTitle;
	this.SetTitle = Methods.SetTitle;
	this.GetWindow = Methods.GetWindow;
	this.SetWindow = Methods.SetWindow;

	Methods.Construct();
	return this;
};

