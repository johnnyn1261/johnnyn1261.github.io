//
$(document).ready(function() {
    setInterval ('cursorAnimation()', 800);
});

function cursorAnimation() {
  $('#cursor').animate({
      opacity: 0
  }, 'fast', 'swing').animate({
      opacity: 1
  }, 'fast', 'swing');
}

// Menu-toggle button
/*$(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });
});*/

// Scrolling Effect
$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('nav').addClass('black');
      }

      else {
            $('nav').removeClass('black');
      }
})
