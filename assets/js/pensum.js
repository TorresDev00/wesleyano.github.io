  document.addEventListener("DOMContentLoaded", function() {

    const swiper = new Swiper('.pensum', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      centeredSlides: true, // Centrar los cuadros
      keyboard: {
      enabled: true,
      onlyInViewport: true
      },
      grabCursor: true,
      mousewheel: true, // Habilita el desplazamiento con la rueda del ratón
      touchRatio: 0.5, // Controla la sensibilidad del desplazamiento táctil
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2, // Mostrar 2 cuadros en pantallas de 768px o menos
          spaceBetween: 30 // Espacio entre los cuadros
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

    document.querySelector('.prev').addEventListener('click', function() {
      swiper.slidePrev();
    });

    document.querySelector('.next').addEventListener('click', function() {
      swiper.slideNext();
    });

    
  });
