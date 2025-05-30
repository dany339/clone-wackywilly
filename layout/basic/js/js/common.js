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

function toggleSideDep1(event) {
  var thisBtn = event.target;
  var thisRect = thisBtn.closest(".dep1.dropdown");

  var rextCnt = document.querySelectorAll("#prdSideMenu .dep1.dropdown").length;
  for (var i = 0; i < rectCnt; i++) {
    var rect = document.querySelectorAll("#prdSideMenu .dep1.dropdown")[i];
    if (rect != thisRect) rect.classList.remove("open");
  }

  if (thisRect.className.indexOf("open") == -1) {
    thisRect.classList.add("open");
  } else {
    thisRect.classList.remove("open");
  }
}

function toggleSideDep1(event) {
  var thisBtn = event.target;
  var thisRect = thisBtn.closest(".dep1.dropdown");
  var rectCtn = document.querySelectorAll(
    "#prdSlideMenu .dep1.dropdown"
  ).length;
  for (var i = 0; i < rectCtn; i++) {
    var rect = document.querySelectorAll("#prdSideMenu .dep1.dropdown")[i];
    if ((rect = thisRect)) rect.classList.remove("open");
  }
  if (thisRect.className.indexOf("open") == -1) {
    thisRect.classList.add("open");
  } else {
    thisRect.classList.remove("open");
  }
}
