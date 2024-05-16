$(document).ready(function() { 

	function cambioLight(){
		$('.nav-link').click(function(event) {
			$('.features .nav-link').css('background', '#ffffff');
			$('.features .nav-link').css('color', '#000000');
			$('.features .nav-link h4').css('color', '#000');
			$('.features .nav-link:hover').css('color', '#170c66');
			if ($(this).hasClass('active')) {
				$('.features .nav-link.active').css({
					'transition': '0.3s',
					'background': '#170c66 linear-gradient(rgb(32 48 187), rgb(25 18 97)',
					'border-color': '#000000'
				});
				$('.features .nav-link.active h4').css('color', '#FFFFFF');
				$('.features .nav-link.active i').css('color', '#FFFFFF !important');
			}
		});

		$('.accordion-button').click(function(event) {
			$('.accordion-button').css('background-color', '#fff');
			$('.accordion-button').css('color', '#000');
			$('.accordion-button i').css('color', '#000');
			if (!$(this).hasClass('collapsed')){
				$('.accordion-button:not(.collapsed)').css('background-color', '#170c66');
				$('.accordion-button:not(.collapsed)').css('color', '#fff');
				$('.accordion-button:not(.collapsed) i').css('color', '#fff');
				$('.accordion-button:focus').css('outline', 'none');
				$('.accordion-button:focus').css('border', 'none !important');
				$('.accordion-button:focus').css('box-shadow', 'none !important');
				$('.accordion-body').css('background-color', '#fff');
				$('.accordion-body').css('border', '1px solid #ccc');
			}
		});

		$(".dropdown").hover(function() {
	       $('.navbar .dropdown:hover>ul').css('background', '#fff');
	    });

        $('#header').css('background', '#ffff');
		$('.mobile-nav-toggle').click(function(event) {
			$('.navbar').css('background', '#ffff');
			$('.navbar-mobile ul').css('background-color', '#fff');
			$('.navbar-mobile').css('background', '#323233');
		});
	}

	function cambioDark(){
		$('.nav-link').click(function(event) {
			$('.features .nav-link').css('background', '#211f2d');
			$('.features .nav-link').css('color', '#afafaf');
			$('.features .nav-link h4').css('color', '#afafaf');
			$('.features .nav-link:hover').css('color', '#fff');
			if ($(this).hasClass('active')) {
				$('.features .nav-link.active').css({
					'transition': '0.3s',
					'background': '#170c66 linear-gradient(rgb(32 48 187), rgb(25 18 97)',
					'border-color': '#000000'
				});
				$('.features .nav-link.active h4').css('color', '#FFFFFF');
				$('.features .nav-link.active i').css('color', '#FFFFFF !important');
			}
		});
		$('.accordion-button').click(function(event) {			
			$('.accordion-button').css('background-color', '#000');
			$('.accordion-button').css('color', '#fff');
			$('.accordion-button i').css('color', '#fff');
			if (!$(this).hasClass('collapsed')){
				console.log('hola')
				$('.accordion-button:not(.collapsed)').css('background-color', '#170c66');
				$('.accordion-button:not(.collapsed) i').css('color', '#fff');
				$('.accordion-button:focus').css('outline', 'none');
				$('.accordion-button:focus').css('border', 'none !important');
				$('.accordion-button:focus').css('box-shadow', 'none !important');
				$('.accordion-body').css('background-color', '#fff');
				$('.accordion-body').css('border', '1px solid #ccc');
			}
		});

		$(".dropdown").hover(function() {
	       $('.navbar .dropdown:hover>ul').css('background', '#000');
	    });


        $('#header').css('background', '#000');
		$('.mobile-nav-toggle').click(function(event) {
			$('.navbar').css('background', '#000');
			$('.navbar-mobile ul').css('background-color', '#000');
			$('.navbar-mobile').css('background', '#323233');
		});
	}



$('#buttonStyle').change(function() {
  if ($(this).is(':checked')) {
  	$('body').css('background', '#fff');
    $('body').css('transition', 'background 0.5s ease');
    $('a').css('color', '#2196F3');
    $('.section-bg').css('background-color', '#ffffff');
    $('#header').css('background', 'rgb(255 255 255)');
    $('.navbar navbar-mobile').css('background', 'rgb(255 255 255)');
    $('.navbar a').css('color', '#000000db');
    $('.navbar .active, .navbar .active:focus, .navbar li:hover>a').css('background', '#ffffff4f');
    $('.navbar .dropdown:hover>ul').css('background', '#fff');
    $('.navbar .dropdown ul a').css('color', '#000');
    $('.mobile-nav-toggle').css('color', '#000');
    $('.navbar-mobile ul').css('background-color', '#fff');
    $('.navbar-mobile').css('background', '#fff');
    $('.logo img').css('transition', 'opacity 0.5s ease');
    $('.breadcrumbs').css('background-color', '#ababab08');
    $('.breadcrumbs h2').css('color', '#000');
    $('.breadcrumbs ol li+li').css('color', '#000');
    $('.features p, .features h3').css('color', '#000');
    $('.features .nav-link h4').css('color', '#000');
    $('.features .nav-link').css('background', '#ffffff');
    $('.features .nav-link').css('color', '#000000');
    $('.features .nav-link:hover').css('color', '#fff');
    $('.features .nav-link.active').css('transition', '0.3s');
    $('.features .nav-link.active').css('background', '#170c66 linear-gradient(rgb(32 48 187), rgb(25 18 97))');
    $('.features .nav-link.active').css('border-color', '#000000');
    cambioLight();
    $('.features .nav-link.active h4').css('color', '#FFFFFF');
    $('.features .nav-link.active i').css('color', '#FFFFFF !important');
    $('#historia').css('background', '#efefef');
    $('.historia h2').css('color', '#000');
    $('.historia .our-story').css('background-color', '#ffffff');
    $('.historia .our-story').css('color', '#000');
    $('.historia .our-story h4').css('color', '#838893');
    $('.historia .our-story h3').css('color', '#000');
    $('.historia ul i').css('color', '#000');
    $('.historia .watch-video a').css('color', '#000');
    $('.historia .watch-video i').css('color', '#000');
    $('.accordion-button').css('background-color', '#fff');
    $('.accordion-button').css('color', '#000');
    $('.accordion-button i').css('color', '#000');
    $('.accordion-item').css('border', '1px solid #fff !important');
    $('.accordion-button:not(.collapsed)').css('background-color', '#170c66');
    $('.accordion-button:not(.collapsed) i').css('color', '#fff');
    $('.accordion-button:focus').css('outline', 'none');
    $('.accordion-button:focus').css('border', 'none !important');
    $('.accordion-button:focus').css('box-shadow', 'none !important');
    $('.accordion-body').css('background-color', '#fff');
    $('.accordion-body').css('border', '1px solid #ccc');
    $('.accordion-body').css('box-shadow', '0 2px 4px rgba(0, 0, 0, 0.1)');
    $('.preguntas').css('color', '#000');
    $('.footer').css('background', '#e29505 linear-gradient(rgb(225 152 3), rgb(249 181 22), rgb(217 142 6))');
    $('.footer').css('color', '#fff');
    $('#footer .footer-top h4').css('color', '#fff');
    $('#footer .footer-top .footer-links ul a').css('color', '#fff');
    $('#footer .footer-top .footer-links ul i').css('color', '#fff');
    $('.footer .footer-top h4').css('color', '#fff');
    $('.footer .footer-top .footer-links ul a').css('color', '#fff');
    $('.footer .footer-top .footer-links ul i').css('color', '#fff');
    $('.footer .copyright').css('border-top', '1px solid #fff');

    $(this).next('label').find('.bi-moon-fill').addClass('d-none');
    $(this).next('label').find('.bi-sun-fill').removeClass('d-none');
    var selectImg = $('.logo img');
    selectImg.css('transition', 'opacity 0.5s'); // Agregar transición de 0.5 segundos
    selectImg.css('opacity', '0');
    setTimeout(function() {
      selectImg.attr('src', 'assets/img/Wesleyano/logo_4.png');
      selectImg.css('opacity', '1');
    }, 200);
  }else{

    $('body').css('background', '#000');
    $('body').css('transition', 'background 0.5s ease');
    $('a').css('color', '#2196F3');
    $('.section-bg').css('background-color', '#090a21');
    $('#header').css('background', 'rgb(0 0 0)');
    $('.navbar navbar-mobile').css('background', 'rgb(0 0 0)');
    $('.navbar a').css('color', '#ffffffdb');
    $('.navbar .active, .navbar .active:focus, .navbar li:hover>a').css('background', '#ffffff4f');
    $('.navbar .dropdown:hover>ul').css('background', '#000');
    $('.navbar .dropdown ul a').css('color', '#fff');
    $('.mobile-nav-toggle').css('color', '#fff');
    $('.navbar-mobile ul').css('background-color', '#000');
    $('.navbar-mobile').css('background', '#323233');
    $('.logo img').css('transition', 'opacity 0.5s ease');
    $('.breadcrumbs').css('background-color', '#000000');
    $('.breadcrumbs h2').css('color', '#fff');
    $('.breadcrumbs ol li+li').css('color', '#fff');
    $('.features p, .features h3').css('color', '#fff');
    $('.features .nav-link h4').css('color', '#afafaf');
	$('.features .nav-link').css('background', '#211f2d');
	$('.features .nav-link').css('color', '#afafaf');
    $('.features .nav-link:hover').css('color', '#fff');
    $('.features .nav-link.active').css('transition', '0.3s');
    $('.features .nav-link.active').css('background', '#170c66 linear-gradient(rgb(32 48 187), rgb(25 18 97))');
    $('.features .nav-link.active').css('border-color', '#000000');
    cambioDark();
    $('.features .nav-link.active h4').css('color', '#FFFFFF');
    $('.features .nav-link.active i').css('color', '#FFFFFF !important');
    $('#historia').css('background', '#000');
    $('.historia h2').css('color', '#fff');
    $('.historia .our-story').css('background-color', '#0b0c23');
    $('.historia .our-story').css('color', '#fff');
    $('.historia .our-story h4').css('color', '#838893');
    $('.historia .our-story h3').css('color', '#fff');
    $('.historia ul i').css('color', '#fff');
    $('.historia .watch-video a').css('color', '#fff');
    $('.historia .watch-video i').css('color', '#fff');
    $('.accordion-button').css('background-color', '#000');
    $('.accordion-button').css('color', '#fff');
    $('.accordion-button i').css('color', '#fff');
    $('.accordion-item').css('border', '1px solid #000 !important');
    $('.accordion-button:not(.collapsed)').css('background-color', '#170c66');
    $('.accordion-button:not(.collapsed) i').css('color', '#fff');
    $('.accordion-button:focus').css('outline', 'none');
    $('.accordion-button:focus').css('border', 'none !important');
    $('.accordion-button:focus').css('box-shadow', 'none !important');
    $('.accordion-body').css('background-color', '#fff');
    $('.accordion-body').css('border', '1px solid #ccc');
    $('.accordion-body').css('box-shadow', '0 2px 4px rgba(0, 0, 0, 0.1)');
    $('.preguntas').css('color', '#fff');
    $('.footer').css('background', '#fff');
    $('.footer').css('color', '#000');
    $('#footer .footer-top h4').css('color', '#000');
    $('#footer .footer-top .footer-links ul a').css('color', '#000');
    $('#footer .footer-top .footer-links ul i').css('color', '#000');
    $('.footer .footer-top h4').css('color', '#000');
    $('.footer .footer-top .footer-links ul a').css('color', '#000');
    $('.footer .footer-top .footer-links ul i').css('color', '#000');
    $('.footer .copyright').css('border-top', '1px solid #000000');

    $(this).next('label').find('.bi-sun-fill').addClass('d-none');
    $(this).next('label').find('.bi-moon-fill').removeClass('d-none');
    var selectImg = $('.logo img');
    selectImg.css('transition', 'opacity 0.5s'); // Agregar transición de 0.5 segundos
    selectImg.css('opacity', '0');
    setTimeout(function() {
      selectImg.attr('src', 'assets/img/Wesleyano/logo_7.png');
      selectImg.css('opacity', '1');
    }, 200);
  }
})



})