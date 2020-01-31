/* -----------------------------------------------------
            destination list slider
----------------------------------------------------- */
var $d_list_slider = $(".destinations-list-slider");
$d_list_slider.slick({
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
  appendArrows: $(".destinations-slider-controls .slider-nav"),
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
var $progressBar = $(".d-list-progress");
var $progressBarLabel = $(".slider__label");
$d_list_slider.on("beforeChange", function(
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
$(".destinations-list-slider").on("beforeChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var firstNumber = check_number(++nextSlide);
  $(".destinations-slider-controls .slider-extra .text .first").text(
    firstNumber
  );
});
var smSlider = $(".destinations-list-slider").slick("getSlick");
var smSliderCount = smSlider.slideCount;
$(".destinations-slider-controls .slider-extra .text .last").text(
  check_number(smSliderCount)
);
function check_number(num) {
  var IsInteger = /^[0-9]+$/.test(num);
  return IsInteger ? "0" + num : null;
}
