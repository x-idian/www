$(window).on('scroll', function () {
  var windscroll = $(window).scrollTop();
  if (windscroll > 0) {
    $('.site-navigation').addClass('nav-bg');
  } else {
    $('.site-navigation').removeClass('nav-bg');
  }
});
