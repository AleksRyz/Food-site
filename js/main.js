$(document).ready(function () {
   $('#menu-burger').click(function () {

      $(this).toggleClass('fa-times');  // смена значка бургера на значек X
      $('.header__menu').toggleClass('_active-menu'); // вызываем меню бургер
   });

   //действия при скролле
   $(window).on('scroll load', function () {

      // убираем меню при скролле
      $('#menu-burger').removeClass('fa-times');
      $('.header__menu').removeClass('_active-menu');

      // выделение желтым элементов меню header при прокрутке (скролле)
      $('section').each(function () {
         let top = $(window).scrollTop(); //Получает значение отступа прокрутки сверху.
         let height = $(this).height();
         let id = $(this).attr('id'); //Получает значение id .
         let offset = $(this).offset().top - 200; // координаты относительно начала страницы

         if (top > offset && top < offset + height) {
            $('.header__item a').removeClass('active'); // стираю класс active - убираем желтый цвет выделения
            $('.header__menu').find(`[href="#${id}"]`).addClass('active'); // ищет элементы внутри .header__menu у которых href="#${id}" и добавляет к нему active - желтый цвет выделения
         }
      });

   });



   //оставляь заливку кнопки при нажатии
   $('.menu__item').click(function () {
      $(this).addClass('active').siblings().removeClass('active');


      // меняем картинку при нажатии на пункт меню
      let src = $(this).attr('data-src');
      $('#menu-img').attr('src', src);

   });

});

// AOS initializing библиотека анимации - движения элементов
AOS.init({
   delay: 400,
   duration: 1000
})