const backToTop = () => {
  $('html, body').animate({
    scrollTop: 0
  }, 800) }

$( document ).ready(function() {
  $(".button-collapse").sideNav()
  $('.parallax').parallax()
  $('.scrollspy').scrollSpy()
  $('.side-nav > li > a').on('click', () => $('.button-collapse').sideNav('hide'))

  $(window).scroll(() => {
    // declare variable
    const top = $(this).scrollTop();
    const backToTop = $('.back-to-top')

    // if user scrolls down - show scroll to top button
    if (top > 900) {
      backToTop.css("opacity", "1")

    } else {
      backToTop.css("opacity", "0")
    }
})

  $('.back-to-top').on('click', backToTop)
  $('.back-to-top').on('click', backToTop)
  $('.brand-logo').on('click', backToTop)


})
