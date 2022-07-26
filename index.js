console.log("index.js");

$(document).ready(function(){

    
    $(".hamburger").click(function() {
        $(".nav-links").toggleClass("open-navlinks");
    });

   
});


// owl starts


$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: true
    });
  });
  


// owl ends