
$(document).ready(function() {
    setInterval ('cursorAnimation()', 800);
    $(document).on("scroll", onScroll);
    $(".owl-carousel").owlCarousel();

    //Scroll annimation
    $('a[href^="#"]').on('click',function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
          'scrollTop': $target.offset().top
        }, 500,'swing');
    });
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  stagePadding: 50,
  //nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }

})

function cursorAnimation() {
  $('#cursor').animate({
      opacity: 0
  }, 'fast', 'swing').animate({
      opacity: 1
  }, 'fast', 'swing');
}

$('.nav.navbar-nav > li').on('click', function(e) {
    $('.nav.navbar-nav > li').removeClass('active');
    $(this).addClass('active');
});

// Active navbar section
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#navbarResponsive a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos + 50) {
      $('#navbarResponsive ul li a').removeClass("active");
      currLink.addClass("active");
    } else{
      currLink.removeClass("active");
    }
  });
}

// Scrolling effect
$(window).on("scroll", function() {
  if($(window).scrollTop() > 20) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
})

/*
// Menu-toggle automatically sets black background
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
