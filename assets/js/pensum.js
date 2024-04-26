  document.addEventListener("DOMContentLoaded", function() {

    new Swiper('.pensum', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      centeredSlides: true, // Centrar los cuadros
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
       keyboard: {
      enabled: true,
      onlyInViewport: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2, // Mostrar 2 cuadros en pantallas de 768px o menos
          centeredSlides: true // Centrar los cuadros en pantallas de 768px o menos
        },
        1024: {
          slidesPerView: 3, // Mostrar 3 cuadros en pantallas de 1200px o más
          centeredSlides: true, // Centrar los cuadros en pantallas de 1200px o más
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3, // Mostrar 3 cuadros en pantallas de 1200px o más
          centeredSlides: true, // Centrar los cuadros en pantallas de 1200px o más
          spaceBetween: 30
        }
      }
    })

    
  });
