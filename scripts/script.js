$( document ).ready(function() {
    

	$('.main-carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true
	});

	$("[data-fancybox]").fancybox({
		slideShow : true
	});

});