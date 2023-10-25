
const cardActive = new Swiper('.project-card-swiper-active', {
    speed: 500,
    effect: 'fade',
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    navigation: {
      nextEl: '.active-card-controls .card-next',
      prevEl: '.active-card-controls .card-prev',
    },
    });

  const card = new Swiper('.project-card-swiper', {
    slidesPerView: 3.15,
    spaceBetween: 10,
    navigation: {
      nextEl: '.card-controls .card-next',
      prevEl: '.card-controls .card-prev',
    },
    loop: true,
    slideToClickedSlide: true,
  });

  cardActive.controller.control = card;
  card.controller.control = cardActive;