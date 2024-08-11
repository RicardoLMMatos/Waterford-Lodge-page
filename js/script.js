$(document).ready(function () {

  let $reviewsSlick = $('.function-photos-slick');
  if ($reviewsSlick.length > 0) {
    $reviewsSlick.slick({
      'infinite' : true,
      'arrows': false,
      'dots': false,
      'autoplay': true,
      'autoplaySpeed': 3000,
      'adaptiveHeight': false
    });
  }
 
});

let headerEl = document.querySelector(".header");
window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
  headerEl.classList.add("header-scroll")
}
else if (window.scrollY <=50 ) {
  headerEl.classList.remove("header-scroll")
}
});
