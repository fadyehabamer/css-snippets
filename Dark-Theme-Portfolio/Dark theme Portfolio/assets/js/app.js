$(document).ready(function(){
  // slick is not loaded on this page and there is no .slider-container, so the
  // unguarded call threw "slick is not a function" on every load
  if ($.fn.slick) {
    $('.slider-container').slick();
  }
});