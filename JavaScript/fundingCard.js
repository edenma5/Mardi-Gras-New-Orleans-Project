//Swiper Cards
let swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 1700,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    breakpoints: {
        481: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,

        },
        769: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 35,
            slidesPerGroup: 3,
        },
        1281: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
        },
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});