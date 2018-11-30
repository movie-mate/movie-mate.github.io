// JavaScript source code
$(window).on('load', function () {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
$(document).ready(function () {
    $('.menu-activator').on('click', function () {
        $('.menu-wrapper').toggle();
    });
});
$(document).ready(function () {
    $('.images').slick({
        accessibility: true,
        slidesToShow: 1,
        arrows: true,
        cssEase: 'ease',
        dots: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2700,
        infinite: true,
        speed: 500,
        ctnterMode: true,
        variableWigth: true,
        pauseOnHover: true
    });
});
$(document).ready(function () {
    $('.frames').slick({
        accessibility: true,
        slidesToShow: 1,
        arrows: true,
        cssEase: 'ease',
        dots: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2700,
        infinite: true,
        speed: 500,
        ctnterMode: true,
        variableWigth: true,
        adaptiveHeight: true,
        pauseOnHover: true
    });
});
function updateMenuButton() {
    $('.js-menu-button').find('.menu-icon').toggleClass('is-active');
}

$(document).ready(function () {
    $('.js-menu-button').click(function (e) {
        e.preventDefault();
        updateMenuButton();
    });
});

$(document).ready(function () {
    var IMG = document.querySelectorAll('#trailer img'),
        IFRAME = document.querySelector('#trailer iframe');
    for (var i = 0; i < IMG.length; i++) {
        IMG[i].onclick = function () {
            var idIMG = this.src.replace(/http...img.youtube.com.vi.([\s\S]*?).1.jpg/g, '$1');
            IFRAME.src = 'http://www.youtube.com/embed/' + idIMG + '?rel=0&autoplay=1';
            if (this.dataset.end) IFRAME.src = IFRAME.src.replace(/([\s\S]*)/g, '$1&end=' + this.dataset.end);
            if (this.dataset.start) IFRAME.src = IFRAME.src.replace(/([\s\S]*)/g, '$1&start=' + this.dataset.start);
            this.style.backgroundColor = '#555';
        }
    }
});

$(document).ready(function () {
    $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});
//$(document).ready(function () {
//    $('.slider').mouseover(function () {
//        $('.image-description').css("display", "block");
//    });
//});
//$(document).ready(function () {
//    $('.slider').mouseout(function () {
//        $('.image-description').css("display", "none");
//    });
//});

