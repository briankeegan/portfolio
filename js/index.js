const backToTop = () => {
  $('html, body').animate({
    scrollTop: 0
  }, 800) }

$( document ).ready(function() {
  $(".button-collapse").sideNav()
  $('.parallax').parallax()
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

  $('.about-click').click(function () {
    $('html, body').animate({
      scrollTop: $('#about').offset().top - 64
    }, 1000)
  })

  $('.technologies-click').click(function () {
    $('html, body').animate({
      scrollTop: $('#technologies').offset().top - 64
    }, 1000)
  })

  $('.portfolio-click').click(function () {
    $('html, body').animate({
      scrollTop: $('#portfolio').offset().top - 64
    }, 1000)
  })

  $('.contact-click').click(function () {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top - 64
    }, 1000)
  })

  $('.back-to-top').on('click', backToTop)
  $('.back-to-top').on('click', backToTop)
  $('.brand-logo').on('click', backToTop)


})
