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