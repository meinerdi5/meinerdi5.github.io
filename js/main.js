var $container = $('.masonry');
// Инициализация
$container.masonry({
  columnWidth: '.item',
  itemSelector: '.item'
});

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true
    });
});