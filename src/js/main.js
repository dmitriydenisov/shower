// Уже активированные карусели
const initedList = []

// Активируем карточку с каруселью
function showCard(selector) {
  // Скрываем все карусели
  document.querySelectorAll('[data-card]').forEach(x => x.classList.add('hidden'))

  // Находим публикуемую карточку
  const card = document.querySelector(selector)

  // Убираем у нее класс hidden, чтобы карточку было видно
  card.classList.remove('hidden')

  // Проверка уже активированной карусели
  if (initedList.includes(selector)) {
    return
  }

  initedList.push(selector)

  // Находим карусель внутри карточки, и кнопки вперед назад
  let carousel = card.querySelector('.carousel')
  const next = card.querySelector('.next')
  const prev = card.querySelector('.prev')

  // Инициализа карусели
  carousel = $(carousel).waterwheelCarousel({
    flankingItems: 3,
    imageNav: true,
    autoPlay: 4000,
  });

  // Инициалируем кнопки
  prev.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()

    carousel.prev();
  })

  next.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()

    carousel.next();
  })
}

function showOwl(variant) {
  const sliders = document.querySelectorAll(`.slider-big__slider`)
  sliders.forEach(x => x.classList.add('hidden'))

  const carousel = document.querySelector(`.slider-big__slider[data-variant="${variant}"] > .owl-carousel`)
  const slider = carousel.closest('.slider-big__slider')
  slider.classList.remove('hidden')

  const owlCarousel = $(carousel).owlCarousel({
    loop: true,
    dots: false
  });

  $('.prev').click(function () {
    event.preventDefault()
    owlCarousel.trigger('prev.owl.carousel');
  })

  $('.next').click(function () {
    event.preventDefault()
    owlCarousel.trigger('next.owl.carousel');
  })
}

$(document).ready(function () {
  const variantButtons = document.querySelectorAll('button[data-variant]')
  variantButtons.forEach(vb => vb.addEventListener('click', () => showOwl(vb.dataset.variant)))
  showOwl(variantButtons[0].dataset.variant)



  // let slider = $(".owl-carousel");
  // slider.owlCarousel({
  //   loop: true,
  //   dots: false
  // });

  // $('.prev').click(function () {
  //   event.preventDefault()
  //   slider.trigger('prev.owl.carousel');
  // })
  // $('.next').click(function () {
  //   event.preventDefault()
  //   slider.trigger('next.owl.carousel');
  // })

  //переключение слайдов по кнопке
  const cards = document.querySelectorAll('.viev__slider-big')

  // document
  //   .querySelectorAll('.viev__slider--item')
  //   .forEach(x =>
  //     x.classList.add('viev__slider-item--active')
  //   )

  document.querySelectorAll('[data-showCard]').forEach(btn => {
    btn.addEventListener("click", () =>
      showCard(`[data-card="${btn.dataset.showcard}"]`)
    )
  })

  showCard('[data-card="1"]')

  //управление модальными окнами 
  function modalOpen() {
    document.querySelector('.gager-form').classList.add('gager-form--active')
    document.body.style.overflow = 'hidden'
  }

  function modalClose() {
    document.querySelector('.gager-form').classList.remove('gager-form--active')
    document.body.style.overflow = 'auto'
  }

  function openFormOption() {
    document.querySelector('.form-option').classList.add('form-option--active')
  }

  function closeFormOption() {
    document.querySelector('.form-option').classList.remove('form-option--active')
  }

  function toggleFormOption() {
    document.querySelector('.form-option').classList.toggle('form-option--active')
  }

  document.querySelectorAll('[data-grapper]').forEach(
    x => x.addEventListener('click', () => modalOpen())
  )

  document.getElementById('gager-form').addEventListener('click', function (event) {
    if (event.target === this) {
      modalClose()
    }
  })

  // function optionTrigger() {
  //   document.querySelector('.form-option').classList.toggle('form-option--active')
  // }

  // document.querySelectorAll('[data-hidden]').onclick = () => optionTrigger()

  document.querySelector('.gager-form__button-option').addEventListener('click', () => {
    toggleFormOption()
  })
  
});