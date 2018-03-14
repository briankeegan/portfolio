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
    const top = $(this).scrollTop()
    const backToTop = $('.back-to-top')

    // if user scrolls down - show scroll to top button
    if (top > 900) {
      backToTop.css("opacity", "1")

    } else {
      backToTop.css("opacity", "0")
    }
  })

  const addClickArray = [
    'about',
    'technologies',
    'portfolio',
    'contact'
  ]

  const scrollOnClick = name => {
    $(`.${name}-click`).click(function () {

      const navHeight = $('nav').height() - 1

      $('html, body').animate({
        scrollTop: $(`#${name}`).offset().top - navHeight
      }, 1000)
    })
  }

  addClickArray.forEach(name => {
    scrollOnClick(name)
  })

  $('.back-to-top').on('click', backToTop)
  $('.back-to-top').on('click', backToTop)
  $('.brand-logo').on('click', backToTop)


})
