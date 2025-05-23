var topMentSlider = new Swiper(".topMentSlider", {
  lazy: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "vertical",
  autoplay: {
    delay: 3000,
  },
});

var mainSwiper = new Swiper(".topBannerSlider", {
  lazy: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
    disableOnlnteraction: true,
  },
  navigation: {
    nextEl: ".topBannerSlider .swiper-button-next",
    prevEl: ".topBannerSlider .swiper-button-prev",
  },
  pagination: {
    el: ".bottom-swiper-pagination",
    type: "fraction",
  },
});

var pagingSwiper = new Swiper(".topBannerSlider", {
  lazy: true,
  loop: true,
  slidesPerView: 3,
  pagination: {
    el: ".topBannerSlider .swiper-pagination",
    type: "progressbar",
  },
});

mainSwiper.controller.control = pagingSwiper;
pagingSwiper.controller.control = mainSwiper;
