//переключение слайдов по кнопке
const cards = document.querySelectorAll('.viev__slider-big')
const items = document.querySelectorAll('.viev__slider--item')

document.querySelectorAll('[data-showCard]').forEach(btn => {
	btn.addEventListener("click", () => {
		cards.forEach(x => x.classList.add('hidden'))
		items.forEach(x => x.classList.add('viev__slider-item--active'))
		
		const showCard = document.querySelector(`[data-card="${btn.dataset.showcard}"]`)
		setTimeout(
      showCard.classList.remove('hidden'), 1000)
    
	})
})


$(document).ready(function () {  

  //главная карусель на первом слайде
    var carousel1 = $("#carousel-1").waterwheelCarousel({
      flankingItems: 3,
      imageNav: true,
      autoPlay: 4000,
      movingToCenter: function ($item) {
        $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
      },
      movedToCenter: function ($item) {
        $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
      },
      movingFromCenter: function ($item) {
        $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
      },
      movedFromCenter: function ($item) {
        $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
      },
      clickedCenter: function ($item) {
        $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
      }
    });

    $('#prev1').bind('click', function () {
      carousel1.prev();
      return false
    });

    $('#next1').bind('click', function () {
      carousel1.next();
      return false;
    });

    $('#reload').bind('click', function () {
      newOptions = eval("(" + $('#newoptions').val() + ")");
      carousel.reload(newOptions);
      return false;
    });

    var carousel2 = $("#carousel-2").waterwheelCarousel({
      flankingItems: 3,      
      // movingToCenter: function ($item) {
      //   $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
      // },
      // movedToCenter: function ($item) {
      //   $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
      // },
      // movingFromCenter: function ($item) {
      //   $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
      // },
      // movedFromCenter: function ($item) {
      //   $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
      // },
      // clickedCenter: function ($item) {
      //   $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
      // }
    });

    

    $('#prev2').bind('click', function () {
      carousel2.prev();
      return false
    });

    $('#next2').bind('click', function () {
      carousel2.next();
      return false;
    });

    $('#reload').bind('click', function () {
      newOptions = eval("(" + $('#newoptions').val() + ")");
      carousel3.reload(newOptions);
      return false;
    });

    

    
    //слайдер в блоке фурнитуры
    

    let slider = $(".owl-carousel"); 
    slider.owlCarousel({
      loop:true,
      dots:false
    });
    
    $('.prev').click(function() {
      event.preventDefault()      
      slider.trigger('prev.owl.carousel');
  })
    $('.next').click(function() {
      event.preventDefault()
      slider.trigger('next.owl.carousel');
    })

  });



