$(document).ready(() => {
  /* -----------------------------------------------------
                    Events slider
----------------------------------------------------- */
  var $events_slider = $(".events-slider");
  $events_slider.slick({
    slidesToShow: 3,
    dots: false,
    slidesToScroll: 1,
    speed: 400,
    loop: true,
    autoplay: false,
    prevArrow:
      '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
    appendArrows: $(".events-slider-controls .slider-nav"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px"
        }
      }
    ]
  });
  //active progress
  var $progressBar = $(".e-list-progress");
  var $progressBarLabel = $(".slider__label");
  $events_slider.on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;
    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);
    $progressBarLabel.text(calc + "% completed");
  });
  //active count list
  $(".events-slider").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var firstNumber = check_number(++nextSlide);
    $(".events-slider-controls .slider-extra .text .first").text(firstNumber);
  });
  var smSlider = $(".events-slider").slick("getSlick");
  var smSliderCount = smSlider.slideCount;
  $(".events-slider-controls .slider-extra .text .last").text(
    check_number(smSliderCount)
  );
  function check_number(num) {
    var IsInteger = /^[0-9]+$/.test(num);
    return IsInteger ? "0" + num : null;
  }

  /* -----------------------------------------------------
                    Showcase/hall of fame slider
----------------------------------------------------- */
  $(".hall-of-fame-slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
    autoplay: true,

    prevArrow:
      '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });

  /* -----------------------------------------------------
                    Team slider
----------------------------------------------------- */
  $(".team-slider").slick({
    slidesToShow: 4,
    autoplay: true,

    prevArrow:
      '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  /*------------------------------------------------------
        back to top
-------------------------------------------------------*/
  $(document).on("click", ".back-to-top", function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  /* -------------------------------------------------------------
        inner linking js
    ------------------------------------------------------------- */
  if ($('.scroll-down a[href^="#"]').length) {
    $('.scroll-down a[href^="#"]')
      .not("#scrollUp")
      .on("click", function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top
            },
            900,
            "swing"
          );
      });
  }

  $("header nav .nav-item").click(function(e) {
    $("header nav .nav-item.active").removeClass("active");

    var $parent = $(this);
    $parent.addClass("active");
    e.preventDefault();
  });
});
