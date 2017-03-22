$( document ).ready(function() {
    

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});


function overlay() {
 el = document.getElementById("overlay");
 el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

var elem = document.querySelector('.main-gallery');
var flkty = new Flickity( elem, {
 cellAlign: 'center',
 contain: true,
 wrapAround: true,
 pageDots: false,
});




	/* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	

});