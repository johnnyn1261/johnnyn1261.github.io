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

/*
// Menu-toggle button
$(document).ready(function() {
  $(".navbar-toggler").on("click", function() {

    if ( $('#navbar').is(':visible') ) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}

    $('nav').addClass('black');
  });
});

// collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
*/

// Scrolling Effect
$(window).on("scroll", function() {
  if($(window).scrollTop() > 100) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
})
