(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 24
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
   let selectHeader = document.querySelector('#header');
   let selectNavItems = document.querySelectorAll('#navbar ul li');
   let selectImg = document.querySelector('#header .logo img');

   if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
        selectImg.src = 'assets/img/Wesleyano/logo_4.png'
        selectNavItems.forEach(item => {
          item.classList.remove('colorLi');
        });
      } else {
        selectHeader.classList.remove('header-scrolled');
        selectImg.src = 'assets/img/Wesleyano/logo_7.png'
        selectNavItems.forEach(item => {
          item.classList.add('colorLi');
        });
      }
    };

    window.addEventListener('load', headerScrolled);
    window.addEventListener('scroll', headerScrolled);
  }


    // Animacion cambio fondo

    let showingDivTitle = false;

  document.getElementById("excelencia").addEventListener("click", function() {
  const excelencia = document.querySelector('#excelencia');

  if (excelencia) {
    let divTitle = `<div class="icon-box-white h-100">
    <h4 class="title mt-2 py-5 fs-3"><a>Excelencia</a></h4>
    </div>`;

    let divInfo = `<div class="icon-box-yellow h-100">
    <div class="icon text-center mt-3"><i class="bi bi-award"></i></div>
    <p class="description">Búsqueda constante de calidad y alto rendimiento en todas las áreas.</p>
    </div>`;

    excelencia.classList.add('transition');

    excelencia.style.opacity = 0;

    setTimeout(() => {
      if (showingDivTitle) {
        excelencia.innerHTML = divInfo;
      } else {
        excelencia.innerHTML = divTitle;
      }
      excelencia.style.opacity = 1;
    }, 500); // Ajusta el tiempo de retraso según tus necesidades

    showingDivTitle = !showingDivTitle; // Alternar el estado
  } else {
    console.error('No se encontró ningún elemento con el ID "excelencia"');
  }
});




      document.getElementById("excelencia_1").addEventListener("click", function() {
        var div = document.getElementById("excelencia_1");
        div.style.display = "none";
        var div_1 = document.getElementById("excelencia");
        div_1.style.display = "block";
      });

        document.getElementById("santidad").addEventListener("click", function() {
        var div = document.getElementById("santidad");
        div.style.display = "none";
        var div = document.getElementById("santidad_1");
        div.style.display = "block";
        setTimeout(function() {
          div.classList.add("visible");
        }, 50); // Pequeño retraso para permitir que el navegador reconozca el cambio de display antes de iniciar la transición de opacidad
      });

      document.getElementById("santidad_1").addEventListener("click", function() {
        var div = document.getElementById("santidad_1");
        div.style.display = "none";
        var div = document.getElementById("santidad");
        div.style.display = "block";
        setTimeout(function() {
          div.classList.add("visible");
        }, 50); // Pequeño retraso para permitir que el navegador reconozca el cambio de display antes de iniciar la transición de opacidad
      });

      document.getElementById("vidaEspiritu").addEventListener("click", function() {
        var div = document.getElementById("vidaEspiritu");
        div.style.display = "none";
        var div = document.getElementById("vidaEspiritu_1");
        div.style.display = "block";
        setTimeout(function() {
          div.classList.add("visible");
        }, 50); // Pequeño retraso para permitir que el navegador reconozca el cambio de display antes de iniciar la transición de opacidad
      });

      document.getElementById("vidaEspiritu_1").addEventListener("click", function() {
        var div = document.getElementById("vidaEspiritu_1");
        div.style.display = "none";
        var div = document.getElementById("vidaEspiritu");
        div.style.display = "block";
        setTimeout(function() {
          div.classList.add("visible");
        }, 50); // Pequeño retraso para permitir que el navegador reconozca el cambio de display antes de iniciar la transición de opacidad
      });





  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });


new Swiper('.swiper_1', {
  direction: 'horizontal', // Desplazamiento hacia la derecha
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

new Swiper('.swiper_2', {
  direction: 'horizontal', // Desplazamiento hacia la izquierda
  rtl: true, // Dirección de derecha a izquierda
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

new Swiper('.swiper_3', {
  direction: 'horizontal', // Desplazamiento hacia la derecha
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()