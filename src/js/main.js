$(document).ready(function() {
    
     var carousel = $(".carousel").waterwheelCarousel({
         flankingItems: 3,
         imageNav: true,
         separation: 100,
         startingItem: 2,
         horizonOffset: 1,
         horizonOffsetMultiplier: 0,
        //  sizeMultiplier: 0.7, // размер изображений по краям
        //  opacityMultiplier: 0.7
        horizon: 2

     });
     $('#prev').bind('click', function() {
         carousel.prev();
         return false;
     }); 
     $('#next').bind('click', function() {
        carousel.next();
        return false;
    });
      
    // $("#carousel").waterwheelCarousel({});
  });