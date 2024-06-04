$(document).ready(function () {
  // mobile menu toggle
  $(".mobileMenuToggle button").on("click", function () {
    $("#mobileMenuContent").toggleClass("toggle");
  });
  $(".menuClose").on("click", function () {
    $("#mobileMenuContent").toggleClass("toggle");
  });

  // brand slider active
  $(".brand__area").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
  });

  // testmonial slider active
  $(".testmonial__slider__active").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".testmonial__slider__active_new").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    navText: [
      `<i class="fa-solid fa-arrow-left"></i>`,
      `<i class="fa-solid fa-arrow-right"></i>`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // calencer js active
  // script link https://www.jqueryscript.net/demo/powerful-calendar/
  function selectDate(date) {
    $(".calendar-container").updateCalendarOptions({
      date: date,
    });
  }
  $(".calendar-container").calendar({
    weekDayLength: 1,
    date: new Date(),
    onClickDate: selectDate,
    showYearDropdown: true,
    showTodayButton: false,
  });
});
