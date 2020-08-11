$(document).ready(function () {

  //главная карусель на первом слайде

  //карусель 1
  var carousel1 = $("#carousel-1").waterwheelCarousel({
    flankingItems: 4,
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

  //карусель 2
  var carousel2 = $("#carousel-2").waterwheelCarousel({
    flankingItems: 4,
    imageNav: true,
    autoPlay: 4000
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
//карусель 3
  var carousel3 = $("#carousel-3").waterwheelCarousel({
    flankingItems: 4,
    imageNav: true,
    autoPlay: 4000
  });
  $('#prev3').bind('click', function () {
    carousel3.prev();
    return false
  });

  $('#next3').bind('click', function () {
    carousel3.next();
    return false;
  });

  $('#reload').bind('click', function () {
    newOptions = eval("(" + $('#newoptions').val() + ")");
    carousel4.reload(newOptions);
    return false;
  });
//карусель 4
var carousel4 = $("#carousel-4").waterwheelCarousel({
  flankingItems: 4,
  imageNav: true,
  autoPlay: 4000
});
$('#prev4').bind('click', function () {
  carousel4.prev();
  return false
});

$('#next4').bind('click', function () {
  carousel4.next();
  return false;
});

$('#reload').bind('click', function () {
  newOptions = eval("(" + $('#newoptions').val() + ")");
  carousel4.reload(newOptions);
  return false;
});
//карусель 5
var carousel5 = $("#carousel-5").waterwheelCarousel({
  flankingItems: 4,
  imageNav: true,
  autoPlay: 4000
});
$('#prev5').bind('click', function () {
  carousel5.prev();
  return false
});

$('#next5').bind('click', function () {
  carousel5.next();
  return false;
});

$('#reload').bind('click', function () {
  newOptions = eval("(" + $('#newoptions').val() + ")");
  carousel4.reload(newOptions);
  return false;
});
//карусель 6
var carousel6 = $("#carousel-6").waterwheelCarousel({
  flankingItems: 4,
  imageNav: true,
  autoPlay: 4000
});
$('#prev6').bind('click', function () {
  carousel6.prev();
  return false
});

$('#next6').bind('click', function () {
  carousel6.next();
  return false;
});

$('#reload').bind('click', function () {
  newOptions = eval("(" + $('#newoptions').val() + ")");
  carousel4.reload(newOptions);
  return false;
});
//карусель 7
var carousel7 = $("#carousel-7").waterwheelCarousel({
  flankingItems: 4,
  imageNav: true,
  autoPlay: 4000
});
$('#prev7').bind('click', function () {
  carousel7.prev();
  return false
});

$('#next7').bind('click', function () {
  carousel7.next();
  return false;
});

$('#reload').bind('click', function () {
  newOptions = eval("(" + $('#newoptions').val() + ")");
  carousel4.reload(newOptions);
  return false;
});
//карусель 8
var carousel8 = $("#carousel-8").waterwheelCarousel({
  flankingItems: 4,
  imageNav: true,
  autoPlay: 4000
});
$('#prev8').bind('click', function () {
  carousel8.prev();
  return false
});

$('#next8').bind('click', function () {
  carousel8.next();
  return false;
});

$('#reload').bind('click', function () {
  newOptions = eval("(" + $('#newoptions').val() + ")");
  carousel4.reload(newOptions);
  return false;
});
//карусель 9
var carousel9 = $("#carousel-9").waterwheelCarousel({
  flankingItems: 4,
  imageNav: true,
  autoPlay: 4000
});
$('#prev9').bind('click', function () {
  carousel9.prev();
  return false
});

$('#next9').bind('click', function () {
  carousel9.next();
  return false;
});

$('#reload').bind('click', function () {
  newOptions = eval("(" + $('#newoptions').val() + ")");
  carousel4.reload(newOptions);
  return false;
});

  //слайдер в блоке фурнитуры


  let slider = $(".owl-carousel");
  slider.owlCarousel({
    loop: true,
    dots: false
  });

  $('.prev').click(function () {
    event.preventDefault()
    slider.trigger('prev.owl.carousel');
  })
  $('.next').click(function () {
    event.preventDefault()
    slider.trigger('next.owl.carousel');
  })

  //переключение слайдов по кнопке
  const cards = document.querySelectorAll('.viev__slider-big')
  const items = document.querySelectorAll('.viev__slider--item')

  document.querySelectorAll('[data-showCard]').forEach(btn => {
    btn.addEventListener("click", () => {
      cards.forEach(x => x.classList.add('hidden'))
      items.forEach(x => x.classList.add('viev__slider-item--active'))

      const showCard = document.querySelector(`[data-card="${btn.dataset.showcard}"]`)
      showCard.classList.remove('hidden')
    })
  })

  document.querySelectorAll('[data-card]').forEach(x => x.classList.add('hidden'))
  document.querySelector('[data-card="1"]').classList.remove('hidden')

  //управление модальными окнами 
  function modalOpen () {
    document.querySelector('.gager-form').classList.add('gager-form--active')  
    document.body.style.overflow='hidden'
  }
  function modalClose ()  {
    document.querySelector('.gager-form').classList.remove('gager-form--active')  
    document.body.style.overflow='auto'
  }
  
  document.querySelectorAll('[data-grapper]').forEach(
    x => x.addEventListener('click', () =>modalOpen()
    )
  )  
 document.getElementById('gager-form').onclick = () =>modalClose() 

  function optionTrigger ()  {
    document.querySelector('.form-option').classList.toggle('form-option--active')  
  }
  document.querySelectorAll('[data-hidden]').onclick= () => optionTrigger() 
});