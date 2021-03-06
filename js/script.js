$(document).ready(function() {
    setInterval ('cursorAnimation()', 800);
    $(document).on("scroll", onScroll);
    $(".owl-carousel").owlCarousel();

    //Scroll annimation
    $('a[href^="#"]').on('click',function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        // console.log($target.offset() != null);
        if ($target.offset() != null) {
          $('html, body').animate({
            'scrollTop': $target.offset().top
          }, 500,'swing');
        }
    });
});

new WOW().init();

function play(){
  var audio = document.getElementById("easter-egg");

  if (audio.duration > 0 && !audio.paused) {
    audio.pause();
    audio.load();
  } else {
    audio.play();
  }
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoHeight: false,
  stagePadding:25,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      900:{
        items:3
      },
      1300:{
        items:4
      }
  }
})

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
$(document).ready(function() {
  if($(window).scrollTop() > 1) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});

$(window).on("scroll", function() {
  if($(window).scrollTop() > 1) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});

// Typed effect
var typed = new Typed(".type", {
  strings: [
    "Van-Nhan Nguyen^5000", " ^150", "John Nguyen^5000", " ^150"
  ],
  typeSpeed: 80,
  backSpeed: 100,
  loop: true,
  showCursor: false
});

//Cursor animation
function cursorAnimation() {
  $('.cursor').animate({
      opacity: 0
  }, 'fast', 'swing').animate({
      opacity: 1
  }, 'fast', 'swing');
}
