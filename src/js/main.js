window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let modals = require('./modules/modal'),
        times = require('./modules/timeInterval'),
        slider = require('./modules/slider'),
        forms = require('./modules/forms'),
        showMoreStyles = require('./modules/showMoreStyles'),
        calc = require('./modules/calc-form'),
        filterFoto = require('./modules/filterFoto'),
        changePictures = require('./modules/changePictures'),
        accordion = require('./modules/accordion'),
        gamburger = require('./modules/gamburger'),
        drop = require('./modules/drop');


    modals();

    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');

    forms();

    showMoreStyles();

    calc();

    filterFoto();

    changePictures();

    accordion();

    gamburger();

    drop();

    $('input[name=phone]').mask("+7 (999) 999-99-99");


    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });





    // times('.popup-consultation', 2000);





});