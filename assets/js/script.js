$(function () {
  $(".hamburger button").on("click", function () {
    $(this).toggleClass("show");
  });

  $(".hamburger button").on("click", function () {
    $(".header .center").slideToggle(500);
  });
});
