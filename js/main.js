$(window).load(function() {
  $('.before-after').twentytwenty({
    before_label: 'Без скинали',
    after_label: 'Со скинали'
  });

  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });

  $('.menu-button').on('click', function() {
   $('.menu').toggleClass('menu_active');
  });

  // Настройка select
  $('.select').on('click', function() {
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $('.select__option').on('click', function() {
    let value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select_checked').text(value);
  });

  $("a[href^='#']").click(function() {
    let _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top - 130 + "px"});
    return false;
  });

  $('input[type="tel"]').mask("+7 (999) 999-99-99");

  // Отложенная загрузка карты.
  // Подгрузим когда пользователь долистает до Отзывы
  let reviews = $('.reviews');
  let reviewsTop = reviews.offset().top;
  // $(window).scroll(function() {
  $(window).bind('scroll', function() {
    let windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A534e28a61a82b4c80620f69959b1d9d428474b966e9d91b5d479a7fe52562eac&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>');

      $(window).unbind('scroll');
    }
  });
});