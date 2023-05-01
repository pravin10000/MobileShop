
// Response top menu bar click event 
var menuBtn = document.querySelector('.mobile-nav-toggle');
menuBtn.addEventListener('click', function () {
    document.querySelector('#navbar').classList.toggle('menu')
    document.querySelector('.bi-list').classList.toggle('active');
})
//  Easy selector helper function
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}
// Easy on scroll event listener 

const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

// navbar active state on scroll 

var navbarlinks = document.querySelectorAll('#navbar .scrollto');

const navbarlinksActive = () => {
    var position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        var section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
            document.querySelector('#navbar').classList.remove('menu');
            document.querySelector('.bi-list').classList.remove('active');

        }
    })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

// Scrolls to an element with header offset

const scrollto = (el) => {
    let header = document.querySelector('#header');
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
        offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
    })
}

// Toggle .header-scrolled class to #header when page is scrolled 

var selectHeader = document.querySelector('#header');
if (selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
        } else {
            selectHeader.classList.remove('header-scrolled')
        }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
}


// Products swiper

var swiper = new Swiper('.products-slider', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 3000,
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
            slidesPerView: 2,
            spaceBetween: 40
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 80
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 120
        }
    }
});


//   Product filter 

$(document).ready(function () {
    $('.product .list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');  // active product filter list
        const productName = $(this).attr('data-filter');

        if (productName == 'all') {
            $('.product-item').show('2000');
        } else {
            $('.product-item').not('.' + productName).hide('2000');
            $('.product-item').filter('.' + productName).show('2000');
        }
    });

});

// Back To Top 

let backtotop = document.querySelector('.back-to-top');
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

// Animate on Scroll Library

AOS.init();
