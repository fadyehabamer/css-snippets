$(document).ready(function () {
  $(".theme_icon").on("click", function () {
    $(".theme_icon").toggleClass("flip");
    $(".theme_icon").toggleClass("fa-sun");
    $(".theme_icon").toggleClass("fa-moon");

    let current_theme = $("html").attr("data-theme");

    if (current_theme == "dark") {
      $("html").attr("data-theme", "light");
    } else if (current_theme == "light") {
      $("html").attr("data-theme", "dark");
    }
  });

  // the theme icon is an <i role="button">: let Enter/Space toggle it too
  $(".theme_icon").on("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      $(this).trigger("click");
    }
  });
});
