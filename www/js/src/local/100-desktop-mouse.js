
Desktop.Mouse = {
	X: 0,
	Y: 0,
	Elements: [],
	OnMouseMove: null,
	RegisterForMove: null,
	UnregisterForMove: null
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

Desktop.Mouse.OnMouseMove = function(Ev){

	Desktop.Mouse.X = Ev.clientX;
	Desktop.Mouse.Y = Ev.clientY;

	jQuery(Desktop.Mouse.Elements)
	.each(function(){

		let X = this.attr('data-mouse-offset-x');
		let Y = this.attr('data-mouse-offset-y');

		this.css({
			'left': (Desktop.Mouse.X - X) + 'px',
			'top': (Desktop.Mouse.Y - Y) + 'px'
		});

		return;
	});

	return;
};

Desktop.Mouse.RegisterForMove = function(Element){

	let Index = jQuery.inArray(Element,Desktop.Mouse.Elements);

	if(Index == -1) {
		Element
		.attr({
			'data-mouse-offset-x': (Desktop.Mouse.X - parseInt(Element.css('left'))),
			'data-mouse-offset-y': (Desktop.Mouse.Y - parseInt(Element.css('top')))
		});

		(Desktop.Mouse.Elements)
		.push(Element);
	}

	//console.log("Mouse Tracked Elements: " + Desktop.Mouse.Elements.length);
	return;
};

Desktop.Mouse.UnregisterForMove = function(Element){

	let Index = jQuery.inArray(Element,Desktop.Mouse.Elements);

	if(Index != -1) {
		(Desktop.Mouse.Elements)
		.splice(Index,1);

		Element
		.removeAttr('data-mouse-offset-x')
		.removeAttr('data-mouse-offset-y');
	}

	//console.log("Mouse Tracked Elements: " + Desktop.Mouse.Elements.length);
	return;
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

jQuery(document)
.ready(function(){

	jQuery(document)
	.on('mousemove',Desktop.Mouse.OnMouseMove);

	return;
});

