$( document ).ready(function() {
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.side-nav > li > a').on('click', () => $('.button-collapse').sideNav('hide'))
})
