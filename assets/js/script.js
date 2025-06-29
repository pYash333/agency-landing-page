$(function () {
  // Hamburger button toggle js
  $(".hamburger button").on("click", function () {
    $(this).toggleClass("show");
  });

  //   Header menu toggle js
  $(".hamburger button").on("click", function () {
    $(".header .center").slideToggle(500);
  });
  //   Hero sldier js
  new Splide(".hero-slider", {
    type: "loop",
    perPage: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
  }).mount();


});
