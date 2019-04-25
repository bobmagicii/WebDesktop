
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

	return;
};

Desktop.Mouse.RegisterForMove = function(Element){

	let Index = jQuery.inArray(Element,Desktop.Mouse.Elements);

	if(Index == -1) {
		(Desktop.Mouse.Elements)
		.push(Element);
	}

	return;
};

Desktop.Mouse.UnregisterForMove = function(Element){

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

