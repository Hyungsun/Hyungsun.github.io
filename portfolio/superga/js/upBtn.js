$(function() {
  var    win = $(window),
            winWidth = win.width();
  
  win.scroll(function() {
    if ($(this).scrollTop() > 30) {
      $('.scroll-up-button').fadeIn();
    } else {
      $('.scroll-up-button').fadeOut();
    }
  });

  var scrollerButton = $('<a class="scroll-up-button" href="#"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>');
  scrollerButton.click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $(".upBox").append(scrollerButton);
});