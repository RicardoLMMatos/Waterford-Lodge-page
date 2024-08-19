// js code for slick carrousel

$(document).ready(function () {

  let $reviewsSlick = $('.function-photos-slick');
  if ($reviewsSlick.length > 0) {
    $reviewsSlick.slick({
      'infinite': true,
      'arrows': false,
      'dots': false,
      'autoplay': true,
      'autoplaySpeed': 3000,
      'adaptiveHeight': false
    });
  }

});

// js code for nav bar colour change on scroll

let headerEl = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    headerEl.classList.add("header-scroll")
  } else if (window.scrollY <= 50) {
    headerEl.classList.remove("header-scroll")
  }


});

// Javascript for the burger menu 

function myFunction() {
  var x = document.getElementById("burger-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}