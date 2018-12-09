// JavaScript source code
$(window).on('load', function () {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
$(document).ready(function () {
    $('.menu-activator').on('click', function () {
        $('.menu-wrapper').slideToggle(500);
        $(this).toggleClass('is-active');
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
        pauseOnHover: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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
    $('.go_to').click(function () { // ëîâèì êëèê ïî ññûëêå ñ êëàññîì go_to
        var scroll_el = $(this).attr('href'); // âîçüìåì ñîäåðæèìîå àòðèáóòà href, äîëæåí áûòü ñåëåêòîðîì, ò.å. íàïðèìåð íà÷èíàòüñÿ ñ # èëè .
        if ($(scroll_el).length != 0) { // ïðîâåðèì ñóùåñòâîâàíèå ýëåìåíòà ÷òîáû èçáåæàòü îøèáêè
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // àíèìèðóåì ñêðîîëèíã ê ýëåìåíòó scroll_el
        }
        return false; // âûêëþ÷àåì ñòàíäàðòíîå äåéñòâèå
    });
});
/**
         * Ïðîâåðÿåò ýëåìåíò íà ïîïàäàíèå â âèäèìóþ ÷àñòü ýêðàíà.
         * Äëÿ ïîïàäàíèÿ äîñòàòî÷íî, ÷òîáû âåðõíÿÿ èëè íèæíÿÿ ãðàíèöû ýëåìåíòà áûëè âèäíû.
         */
function isVisible(elem) {

    var coords = elem.getBoundingClientRect();

    var windowHeight = document.documentElement.clientHeight;

    // âåðõíÿÿ ãðàíèöà elem â ïðåäåëàõ âèäèìîñòè ÈËÈ íèæíÿÿ ãðàíèöà âèäèìà
    var topVisible = coords.top > 0 && coords.top < windowHeight;
    var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
}
function showVisible() {
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {

        var img = imgs[i];

        var realsrc = img.getAttribute('realsrc');
        if (!realsrc) continue;

        if (isVisible(img)) {
            img.src = realsrc;
            img.setAttribute('realsrc', '');
        }
    }

}

window.onscroll = showVisible;
showVisible();
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

