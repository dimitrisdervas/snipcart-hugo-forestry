import Swiper from "swiper";
import Alpine from "alpinejs";
import Lazysizes from "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import fuse from "fuse.js/dist/fuse.basic.min.js";

{{/*  https://github.com/nolimits4web/swiper/blob/master/demos/320-multiple-swipers.html  */}}
        var swiper = new Swiper('.heroslideshow', {
            loop: 'true',
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
                dynamicBullets: true,
            },
        });


        var swiper = new Swiper('.productspromoted', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: 'true',
            pagination: {
                el: '.swiper-pagination'
              },
            breakpoints: {
                320: {
                slidesPerView: 1,
                spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                slidesPerView: 2,
                spaceBetween: 30
                },
                640: {
                slidesPerView: 3,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 4,
                spaceBetween: 10,
                }
            },
        });

    if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', (user) => {
        if (!user) {
        window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
        });
        }
    });
    }
