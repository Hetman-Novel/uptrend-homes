const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Get all images with the loading="lazy" attribute
function addLoadedClass(image) { // Function to add class to image parent after it is loaded
   const parentElement = image.parentElement;
   if (image.complete) { // Check if the image is loaded
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Add a load event to add the class after the image has loaded
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Loop through all the images and call the addLoadedClass function for each one

/* === */

/* Gallery slider -> */
let gallerySlider = document.getElementById('gallery-slider');
if (gallerySlider) {
   new Swiper(gallerySlider, {
      loop: false,
      slidesPerView: 2,
      slidesPerGroup: 1,
      effect: 'slide',
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      spaceBetween: 32,
      navigation: {
         prevEl: '#gallery-button-prev',
         nextEl: '#gallery-button-next',
      },
      pagination: {
         el: '#gallery-pagination',
         clickable: true,
      },
      breakpoints: {
         0: {
            slidesPerView: 1.18,
         },
         576: {
            slidesPerView: 2.1,
         },
         1025: {
            slidesPerView: 2,
            slidesPerGroup: 1,
         },
      },
   });
}
/* <- Gallery slider */

/* Apartament page slider -> */
let apartamentWrapSlider = document.querySelector('.apartament__wrap-slider');
if (apartamentWrapSlider) {
   let apartamentGallerySlider = new Swiper("#apartament-gallery-slider", {
      loop: true,
      slidesPerGroup: 1,
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      //freeMode: true,
      //watchSlidesProgress: true,
      breakpoints: {
         0: {
            spaceBetween: 9,
            slidesPerView: 'auto',
         },
         576: {
            spaceBetween: 20,
            slidesPerView: 'auto',
         },
         768: {
            direction: 'vertical',
            spaceBetween: 20,
            slidesPerView: 3,
         },
      },
   });
   new Swiper("#apartament-big-slider", {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      spaceBetween: 10,
      navigation: {
         prevEl: '#apartament-button-prev',
         nextEl: '#apartament-button-next',
      },
      thumbs: {
         swiper: apartamentGallerySlider,
      },
   });
}
/* <- Apartament page slider */

/* Managers slider -> */
let managersSlider = document.getElementById('managers-slider');
if (managersSlider) { 
   new Swiper(managersSlider, {
      navigation: {
         prevEl: '#managers-button-prev',
         nextEl: '#managers-button-next',
      },
      autoHeight: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 40,
      loop: true,
      /*autoplay: {
         delay: 6000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },*/
      speed: 600,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
   });

   if (document.querySelector('#managers-slider .swiper-slide').length < 1) {
      document.querySelector('.managers-wrap-slider .slider-buttons').remove();
   }
}
/* <- Managers slider */

/* Most Popular Objects slider -> */
let mostPopularObjectsSlider = document.getElementById('most-popular-objects-slider');
if (mostPopularObjectsSlider) { 
   new Swiper(mostPopularObjectsSlider, {
      pagination: {
         el: '#most-popular-objects-pagination',
         clickable: true,
      },
      autoHeight: false,
      slidesPerView: 3,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 93,
      loop: false,
      /*autoplay: {
         delay: 6000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },*/
      speed: 600,
      effect: 'slide',
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      breakpoints: {
         0: {
            slidesPerView: 1.13,
            spaceBetween: 22,
            centeredSlides: true,
            //loop: true,
            loopedSlides: 1,
            initialSlide: 1,
         },
         721: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,
            //loop: false,
            initialSlide: 0,
         },
         961: {
            slidesPerView: 3,
            spaceBetween: 50,
            centeredSlides: false,
            //loop: false,
            initialSlide: 0,
         },
         1201: {
            slidesPerView: 3,
            spaceBetween: 93,
            centeredSlides: false,
            //loop: false,
            initialSlide: 0,
         }
      },
   });
}
/* <- Most Popular Objects slider */

/* Objects slider -> */
function initializeSlider(sliderId, paginationId) {
   const slider = document.getElementById(sliderId);
   if (slider) {
      new Swiper(slider, {
         pagination: {
            el: `#${paginationId}`,
            clickable: true,
         },
         autoHeight: false,
         slidesPerView: 4,
         slidesPerGroup: 1,
         watchOverflow: true,
         spaceBetween: 45,
         loop: false,
         /*autoplay: {
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
         },*/
         speed: 600,
         effect: 'slide',
         preloadImages: false,
         lazy: {
            loadOnTransitionStart: false,
            loadPrewNext: false,
         },
         watchSlidesProgress: true,
         watchSlidesVisibility: true,
         breakpoints: {
            0: {
               slidesPerView: 1.27,
               spaceBetween: 41,
               centeredSlides: true,
               loop: true,
               initialSlide: 1,
            },
            961: {
               slidesPerView: 2.4,
               spaceBetween: 41,
               centeredSlides: true,
               loop: true,
               initialSlide: 1,
            },
            1201: {
               slidesPerView: 4,
               spaceBetween: 45,
               centeredSlides: false,
               loop: false,
               initialSlide: 0,
            }
         },
      });
   }
}
/* <- Objects slider */

/* Testimonials slider -> */
let testimonialsSlider = document.getElementById('testimonials-slider');
if (testimonialsSlider) {
   new Swiper(testimonialsSlider, {
      navigation: {
         prevEl: '#testimonials-button-prev',
         nextEl: '#testimonials-button-next',
      },
      autoHeight: false,
      slidesPerView: 3.5,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 20,
      loop: false,
      /*autoplay: {
         delay: 6000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },*/
      speed: 600,
      effect: 'slide',
      /*
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      */
      breakpoints: {
         0: {
            slidesPerView: 1.27,
            spaceBetween: 9,
         },
         576: {
            slidesPerView: 2.06,
            spaceBetween: 20,
         },
         861: {
            slidesPerView: 3.41,
            spaceBetween: 20,
         }
      },
   });
}
/* <- Testimonials slider */

/* Newest Objects slider -> */
let newestObjectsSlider = document.getElementById('newest-objects-slider');
if (newestObjectsSlider) {
   new Swiper(newestObjectsSlider, {
      pagination: {
         el: '#newest-objects-pagination',
         clickable: true,
      },
      autoHeight: false,
      slidesPerView: 4,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 45,
      loop: false,
      /*autoplay: {
         delay: 6000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },*/
      speed: 600,
      effect: 'slide',
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      breakpoints: {
         0: {
            slidesPerView: 1.27,
            spaceBetween: 41,
            centeredSlides: true,
            loop: true,
            initialSlide: 1,
         },
         961: {
            slidesPerView: 2.4,
            spaceBetween: 41,
            centeredSlides: true,
            loop: true,
            initialSlide: 1,
         },
         1201: {
            slidesPerView: 4,
            spaceBetween: 45,
            centeredSlides: false,
            loop: false,
            initialSlide: 0,
         }
      },
   });
}
/* <- Newest Objects slider */