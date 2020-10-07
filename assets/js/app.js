//Smooth scroll
$("[data-scroll]").on("click", function(event){
  event.preventDefault();
  var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;
  // $("#nav a").removeClass("active");
  // $this.addClass("active");

  $("html , body").animate({
    scrollTop:blockOffset
  }, 500);
});


//Slick Carousel
$(".testimonial__carousel").slick({
  arrows:false,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true
});

//Pricing period
$(".pricing__button").on("click", function(event){
  $(".pricing__button").removeClass("pricing__button--active");
  $(this).addClass("pricing__button--active");
});

//Burger Menu
$(".nav-burger").on("click", function(event){
  $(this).toggleClass("active")
  $(".header__navigation").toggleClass("header__navigation--burger");
  if($(this).hasClass("active")){
      $(".header__navigation").css("display", "flex");}
      else{
        $(".header__navigation").css("display", "none");
      }

});

//Scroll Down
$(window).on("scroll", function(){
  if($(this).scrollTop()>=$(window).innerHeight()) {
    $(".scroll__down").removeClass("scroll__down--active");
    $(".scroll__up").addClass("scroll__up--active");
  }
  else{
    $(".scroll__down").addClass("scroll__down--active");
    $(".scroll__up").removeClass("scroll__up--active");
}
});

$(".scroll__down").on("click", function(event){
  $(this).removeClass("scroll__down--active");
});
