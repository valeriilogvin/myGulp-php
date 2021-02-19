let $wrapper = document.querySelector('.js_wrapper'),
    $parallaxL331 = document.querySelector('.js_parallax_l331'),
    $parallaxGg = document.querySelector('.js_parallax_gg'),
    $parallaxTtp = document.querySelector('.js_parallax_ttp'),
    $parallaxCircle = document.querySelector('.js_parallax_circle'),
    $fixedHeader = document.querySelector('.js_fixed_header'),
    $sect2 = document.querySelector('.js_sect2'),
    anchors = document.querySelectorAll('a[href*="#"]'),
    offsetFixedHeader = $sect2.offsetTop;


if (window.matchMedia('(min-width: 769px)').matches) {
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;

        $parallaxL331.style.transform = `translateX(${-100 - x * -10}%) translateY(${-50 + y * -5}%)`;
        $parallaxTtp.style.transform = `translateX(${x * 20}px) translateY(${y * 20}px)`;
        $parallaxCircle.style.transform = `translateX(${x * -20}px) translateY(${y * 20}px)`;
        $parallaxGg.style.transform = `translateX(${x * -10}px) translateY(${y * -10}px)`;
    });
}


/*
* noise
* */
function noiseTumbler() {
    $wrapper.classList.toggle('play');
}


/*
* fixed-header
* */
window.onscroll = function () {
    if (window.scrollY >= offsetFixedHeader) {
        if (!$fixedHeader.classList.contains('visible')) {
            $fixedHeader.classList.add('visible');
        }
    } else {
        if ($fixedHeader.classList.contains('visible')) {
            $fixedHeader.classList.remove('visible');
        }
    }
};


/*
* anchor-scroll
* */
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);
        const element = document.getElementById(blockID);
        const y = element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: y - 30,
            behavior: 'smooth'
        });
    })
}


/*
* scroll to top
* */
function scrollToTop() {
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, ((top + 100) / -10));
        t = setTimeout('scrollToTop()', 20);
    } else clearTimeout(t);
    return false;
}


/*
* characteristics
* */
// tabs
$('.js_sect7_tab').on('click', function () {
    if(!$(this).hasClass('active')){
        let thisIndex = +$(this).attr('data-index');
        console.log(thisIndex);
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');

        $(`.js_sect7_tab_container[data-index=${thisIndex}]`)
            .addClass('active')
            .siblings()
            .removeClass('active')
    }
});

// line-hovers
function characteristicsHover(parent) {
    let $parent = document.querySelector(parent),
        $colNames = $parent.querySelector('ul.col-titles'),
        $colPro = $parent.querySelector('ul.col-pro'),
        $colVip = $parent.querySelector('.col-vip'),
        $colSuperVip = $parent.querySelector('.col-super-vip'),
        $colPriceLuxeRoom = $parent.querySelector('.col-price-luxe-room'),
        $ulNotLuxe = $parent.querySelectorAll('ul:not(.col-luxe-room)');

    $ulNotLuxe.forEach(ul => {
        let li = ul.querySelectorAll('li:not(.title)');

        li.forEach(el => {
            let thisIndex = el.dataset.index;

            el.onmouseover = function () {
                $colNames.querySelector(`li[data-index='${thisIndex}']`).classList.add('hover');
                $colPro.querySelector(`li[data-index='${thisIndex}']`).classList.add('hover');
                $colVip.querySelector(`li[data-index='${thisIndex}']`).classList.add('hover');
                $colSuperVip.querySelector(`li[data-index='${thisIndex}']`).classList.add('hover');
                if ($colPriceLuxeRoom) $colPriceLuxeRoom.querySelector(`li[data-index='${thisIndex}']`).classList.add('hover');
            };
            el.onmouseout = function () {
                $colNames.querySelector(`li[data-index='${thisIndex}']`).classList.remove('hover');
                $colPro.querySelector(`li[data-index='${thisIndex}']`).classList.remove('hover');
                $colVip.querySelector(`li[data-index='${thisIndex}']`).classList.remove('hover');
                $colSuperVip.querySelector(`li[data-index='${thisIndex}']`).classList.remove('hover');
                if ($colPriceLuxeRoom) $colPriceLuxeRoom.querySelector(`li[data-index='${thisIndex}']`).classList.remove('hover');
            };
        })

    })
}


$(function () {
    let header = $('.js_mob_info_header');

    header.on('click', function () {
        let thisParent = $(this).parent(),
            thisSubMenu = thisParent.find('.sub-menu'),
            thisSiblingsSubMenu = thisParent.siblings().find('.sub-menu');

        if(!thisParent.hasClass('active')) {
            thisParent
                .addClass('active')
                .siblings()
                .removeClass('active');

            thisSubMenu.slideDown();
            thisSiblingsSubMenu.slideUp();
        } else {
            thisParent
                .removeClass('active')
                .siblings()
                .removeClass('active');

            thisSubMenu.slideUp();
        }
    })
}());

function endlessScrollInit(){
    $("#a-slider-text").endlessScroll({
        width: "100%", // Ширина строки
        height: "19px", // Высота строки
        steps: -1, // Шаг анимации в пикселях. Если число отрицательное - движение влево, положительное - вправо
        speed: 20, // Скорость анимации (0 - максимальная)
        mousestop: false // Останавливать ли полосу при наведении мыши (да - true, нет - false)
    });
    $("#a-slider-icon").endlessScroll({
        width: "100%", // Ширина строки
        height: "33px", // Высота строки
        steps: -1, // Шаг анимации в пикселях. Если число отрицательное - движение влево, положительное - вправо
        speed: 20, // Скорость анимации (0 - максимальная)
        mousestop: false // Останавливать ли полосу при наведении мыши (да - true, нет - false)
    });
    $("#a-slider-icon-mob").endlessScroll({
        width: "100%", // Ширина строки
        height: "33px", // Высота строки
        steps: 1, // Шаг анимации в пикселях. Если число отрицательное - движение влево, положительное - вправо
        speed: 20, // Скорость анимации (0 - максимальная)
        mousestop: false // Останавливать ли полосу при наведении мыши (да - true, нет - false)
    });
}

setTimeout(() => {

},100);

// Todo!
characteristicsHover('.js_characteristic');
characteristicsHover('.js_price');
setTimeout(() => {
    // autoSlider()
    endlessScrollInit()
}, 100);
