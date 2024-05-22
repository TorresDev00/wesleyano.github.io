$(document).ready(function() { 

	function cambioLight(){
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
		$(".dropdown").hover(function() {
	       $('.navbar .dropdown:hover>ul').css('background', '#000');
	    });


      $('#header').css('background', '#101010');
		$('.mobile-nav-toggle').click(function(event) {
			$('.navbar').css('background', '#000');
			$('.navbar-mobile ul').css('background-color', '#000');
			$('.navbar-mobile').css('background', '#323233');
		});
	}



$('#buttonStyle').change(function() {
  if ($(this).is(':checked')) {
  	$('body').css('background', '#ffe600');
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
    $('.breadcrumbs').css('background-color', '#fff');
    $('.breadcrumbs h2').css('color', '#000');
    $('.breadcrumbs ol li+li').css('color', '#000');
    $('.sobreNosotros').css('background-color', '#ffe600');
    $('.sobreNosotros h2').css('color', '#000');
    $('.sobreNosotros h3').css('color', '#000');
    $('.sobreNosotros p').css('color', '#000');
    $('.sobreNosotros .p-1').css('color', '#fff');
    cambioLight();
    $('.footer').css('background', '#fff');
    $('.footer').css('color', '#000');
    $('#footer .footer-top h4').css('color', '#000');
    $('#footer .footer-top .footer-links ul a').css('color', '#000');
    $('#footer .footer-top .footer-links ul i').css('color', '#000');
    $('.footer .footer-top h4').css('color', '#000');
    $('.footer .footer-top .footer-links ul a').css('color', '#000');
    $('.footer .footer-top .footer-links ul i').css('color', '000f');
    $('.footer .copyright').css('border-top', '1px solid #000');

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

    $('body').css('background', '#101010');
    $('body').css('transition', 'background 0.5s ease');
    $('a').css('color', '#2196F3');
    $('.section-bg').css('background-color', '#000');
    $('#header').css('background', '#101010');
    $('.navbar navbar-mobile').css('background', 'rgb(0 0 0)');
    $('.navbar a').css('color', '#ffffffdb');
    $('.navbar .active, .navbar .active:focus, .navbar li:hover>a').css('background', '#ffffff4f');
    $('.navbar .dropdown:hover>ul').css('background', '#000');
    $('.navbar .dropdown ul a').css('color', '#fff');
    $('.mobile-nav-toggle').css('color', '#fff');
    $('.navbar-mobile ul').css('background-color', '#000');
    $('.navbar-mobile').css('background', '#323233');
    $('.logo img').css('transition', 'opacity 0.5s ease');
    $('.breadcrumbs').css('background-color', '#101010');
    $('.breadcrumbs h2').css('color', '#fff');
    $('.breadcrumbs ol li+li').css('color', '#fff');
    $('.sobreNosotros').css('background-color', '#101010');
    $('.sobreNosotros h2').css('color', '#fff');
    $('.sobreNosotros h3').css('color', '#fff');
    $('.sobreNosotros p').css('color', '#fff');
    cambioDark();
    $('.footer').css('background', '#101010');
    $('.footer').css('color', '#fff');
    $('#footer .footer-top h4').css('color', '#fff');
    $('#footer .footer-top .footer-links ul a').css('color', '#fff');
    $('#footer .footer-top .footer-links ul i').css('color', '#fff');
    $('.footer .footer-top h4').css('color', '#fff');
    $('.footer .footer-top .footer-links ul a').css('color', '#fff');
    $('.footer .footer-top .footer-links ul i').css('color', '#fff');
    $('.footer .copyright').css('border-top', '1px solid #fff');

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