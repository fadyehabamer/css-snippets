$(function() {
  // "use strict";
  // var windowheight =$(window).height();
  // var upperbar1     =$(".upperbar").innerHeight();
  // var navbar1      =$(".navbar").innerHeight();
  // $(".slider ").height(windowheight-( upperbar1 + navbar1 ) );

  $(".featured ul li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");

    if ($(this).data("class") === "all") {
      $(".shuffle-imgs .col-sm").css("opacity", "1");
    } else {
      $(".shuffle-imgs .col-sm").css("opacity", "0.7");
      $($(this).data("class"))
        .parent()
        .css("opacity", "1");
    }
  });
});
