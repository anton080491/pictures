/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((module) => {

function accordion() {

    let btns = document.querySelectorAll('.accordion-heading'),
        blocks = document.querySelectorAll('.accordion-block');

    blocks.forEach(function (block) {
        block.style.display = 'none';
    });




    btns.forEach(function (btn, i) {
        btn.classList.remove('active-style');
        btn.addEventListener('click',function(){
            btn.classList.toggle('active-style');
            if (btn.classList.contains('active-style')) {
                blocks[i].style.display = 'block';
                blocks[i].classList.add('animated', 'fadeInDown');
            } else{
                blocks[i].style.display = 'none';
                blocks[i].classList.remove('animated', 'fadeInDown');
            }
        });
        
        
    });


}

module.exports = (accordion);

/***/ }),

/***/ "./src/js/modules/calc-form.js":
/*!*************************************!*\
  !*** ./src/js/modules/calc-form.js ***!
  \*************************************/
/***/ ((module) => {

function calc() {

    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        calcPrice = document.querySelector('.calc-price'),
        sum = 0;



    function calkFunc() {
        sum = Math.round((+size.value) * (+material.value) + (+options.value));

        if (size.value == '' || material.value == "") {
            calcPrice.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocode.value === 'IWANTPOPART') {
            calcPrice.textContent = Math.round(sum * 0.7);
        } else {
            calcPrice.textContent = sum;
        }
    }
    size.addEventListener('change', calkFunc);
    material.addEventListener('change', calkFunc);
    options.addEventListener('change', calkFunc);
    promocode.addEventListener('input', calkFunc);


}







module.exports = (calc);

/***/ }),

/***/ "./src/js/modules/changePictures.js":
/*!******************************************!*\
  !*** ./src/js/modules/changePictures.js ***!
  \******************************************/
/***/ ((module) => {

function changePictures() {

    let sizesBlock = document.querySelectorAll('.sizes-block');

    sizesBlock.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            let img = item.querySelector('img');
            // something.png => something-1.png
            img.src = img.src.slice(0, -4) + '-1.png';
            item.querySelectorAll('p:not(.sizes-hit)').forEach(function (p) {
                p.style.display = 'none';
            });

        });
        item.addEventListener('mouseout', function () {
            let img = item.querySelector('img');
            // something.png => something-1.png
            img.src = img.src.slice(0, -6) + '.png';
            item.querySelectorAll('p').forEach(function (p) {
                p.style.display = 'block';
            });
        });
    });




}

module.exports = (changePictures);

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/***/ ((module) => {

function drop() {

    let fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(function (eventName) {
        fileInputs.forEach(function (input) {
            input.addEventListener(eventName, preventDefaults);
        });
    });

    function preventDefaults(e) {
        e.preventDefaults();
    }





    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, function () {
                input.closest('.file_upload').style.border = "5px solid yellow";
                input.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
            });
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, function () {
                input.closest('.file_upload').style.border = "none";
                if (input.closest('.calc_form')) {
                    input.closest('.file_upload').style.backgroundColor = "#fff";
                } else {
                    input.closest('.file_upload').style.backgroundColor = "#ededed";
                }
            });
        });
    });

    fileInputs.forEach(function (input) {
        input.addEventListener('drop', function (e) {
            input.files = e.dataTransfer.files;
            let dots;
            let arr = input.files[0].name.split('.');
            if (arr[0].length > 6) {
                dots = "...";
            } else {
                dots = ".";
            }
            let name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });

}


module.exports = (drop);

/***/ }),

/***/ "./src/js/modules/filterFoto.js":
/*!**************************************!*\
  !*** ./src/js/modules/filterFoto.js ***!
  \**************************************/
/***/ ((module) => {

function filterFoto() {

    let portfolioMenu = document.querySelector('.portfolio-menu'),
        items = portfolioMenu.querySelectorAll('li'),
        allBtn = portfolioMenu.querySelector('.all'),
        loversBtn = portfolioMenu.querySelector('.lovers'),
        chefBtn = portfolioMenu.querySelector('.chef'),
        girlBtn = portfolioMenu.querySelector('.girl'),
        guyBtn = portfolioMenu.querySelector('.guy'),
        grandmotherBtn = portfolioMenu.querySelector('.grandmother'),
        granddadBtn = portfolioMenu.querySelector('.granddad'),
        portfolioWrapper = document.querySelector('.portfolio-wrapper'),
        allBlocks = portfolioWrapper.querySelectorAll('.all'),
        girlBlock = portfolioWrapper.querySelectorAll('.girl'),
        loversBlock = portfolioWrapper.querySelectorAll('.lovers'),
        guyBlock = portfolioWrapper.querySelectorAll('.guy'),
        chefBlock = portfolioWrapper.querySelectorAll('.chef'),
        no = document.querySelector('.portfolio-no');

    function zero() {
        items.forEach(function (item) {
            item.classList.remove('active');
        });

        allBlocks.forEach(function (item) {
            item.style.display = "none";
            item.classList.remove('animated', 'fadeIn');
        });
        no.style.display = "none";
    }



    portfolioMenu.addEventListener('click', function (e) {
        console.log('111');
        let target = e.target;
        if (target && target.classList.contains('all')) {
            zero();
            allBtn.classList.add('active');
            allBlocks.forEach(function (item) {
                item.classList.add('animated', 'fadeIn');
                item.style.display = "block";
            });
        }
        if (target && target.classList.contains('lovers')) {
            zero();
            loversBtn.classList.add('active');
            loversBlock.forEach(function (item) {
                item.classList.add('animated', 'fadeIn');
                item.style.display = "block";
            });
        }
        if (target && target.classList.contains('chef')) {
            zero();
            chefBtn.classList.add('active');
            chefBlock.forEach(function (item) {
                item.classList.add('animated', 'fadeIn');
                item.style.display = "block";
            });
        }
        if (target && target.classList.contains('girl')) {
            zero();
            girlBtn.classList.add('active');
            girlBlock.forEach(function (item) {
                item.classList.add('animated', 'fadeIn');
                item.style.display = "block";
            });
        }
        if (target && target.classList.contains('guy')) {
            zero();
            guyBtn.classList.add('active');
            guyBlock.forEach(function (item) {
                item.classList.add('animated', 'fadeIn');
                item.style.display = "block";
            });
        }
        if (target && target.classList.contains('grandmother')) {
            zero();
            grandmotherBtn.classList.add('active');
            no.style.display = "block";
        }
        if (target && target.classList.contains('granddad')) {
            zero();
            granddadBtn.classList.add('active');
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }

    });






}

module.exports = (filterFoto);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((module) => {

function forms() {
    // FORMS    

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    let form = document.querySelectorAll('form'), // находим наши формы и инпуты
        inputs = document.querySelectorAll('input'),
        statusMessage = document.createElement('div'), //Создаем div для выода сообщений
        statusImg = document.createElement('img'),
        textMessage = document.createElement('div'),
        upload = document.querySelectorAll('[name="upload"]'),
        api;

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    upload.forEach(function (item) {
        item.addEventListener('input', function () {
            console.log(item.files[0]);
            let dots;
            let arr = item.files[0].name.split('.');
            // 'qwertyuiop.jpeg' => ['qwertyuiop','jpeg']
            if (arr[0].lenght > 6) {
                dots = '...';
            } else {
                dots = '.';
            }
            let name = arr[0].substring(0,6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });



    form.forEach(function (item) {
        item.addEventListener('submit', function (event) { //отпраавляем что то с формы
            event.preventDefault();

            if (item.closest('.popup-design') || item.classList.contains('calc_form')) {
                api = path.designer;
            } else {
                api = path.question;
            }
            console.log(api);

            let request = new XMLHttpRequest();

            request.open('POST', api);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            let formData = new FormData(item); // оглашаем переменную и помещаем туда все данные которые чел заполнил и отправил с формы
            request.send(formData);

            request.addEventListener('readystatechange', function () { // пишем условия для вывода определенных сообщений
                if (request.readyState < 4) {
                    statusMessage.classList.add('status');
                    item.parentNode.appendChild(statusMessage);

                    item.classList.add('animated', 'fadeOutUp');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400);

                    statusImg.setAttribute('src', message.spinner);
                    statusImg.classList.add('animated', 'fadeInUp');
                    statusMessage.appendChild(statusImg);
                    textMessage.textContent = message.loading;
                    statusMessage.appendChild(textMessage);



                } else if (request.readyState === 4 && request.status == 200) {
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                } else {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                }
            });

            inputs.forEach(function (item) {
                item.value = '';
            });

            upload.forEach(function(item){
                item.previousElementSibling.textContent = 'Файл не выбран';
            });

            setTimeout(function () {
                statusMessage.remove();
                item.style.display = 'block';
                item.classList.remove('fadeOutUp');
                item.classList.add('animated', 'fadeInUp');

            }, 3000);


        });
    });

}

module.exports = (forms);

/***/ }),

/***/ "./src/js/modules/gamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/gamburger.js ***!
  \*************************************/
/***/ ((module) => {

function gamburger() {

    let burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu');


    burgerMenu.style.display = 'none';

    burger.addEventListener('click', function () {
        if (burgerMenu.style.display == 'none' && window.screen.availWidth < 993) {
            burgerMenu.style.display = 'block';
        } else {
            burgerMenu.style.display = 'none';
        }


        window.addEventListener('resize', function () {
            if (window.screen.availWidth > 993) {
                burgerMenu.style.display = 'none';
            }
        });
    });





}

module.exports = (gamburger);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((module) => {

function modals() {

    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }


    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');

}

module.exports = (modals);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ ((module) => {

function showMoreStyles() {
    let btn = document.querySelector('.button-styles'),
        cards = document.querySelectorAll('.styles-2');


    btn.addEventListener('click', function () {
        cards.forEach(function (item) {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            item.classList.add('animated', 'fadeInUp');
        });
        btn.remove();
    });



    // btn.addEventListener('click', function() {
    //     let request = new XMLHttpRequest();
    //     request.open('GET', '/src/assets/styles.json');
    //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    //     request.send();


    //     request.addEventListener('readystatechange', function () { // пишем условия для вывода определенных сообщений

    //         if (request.readyState === 4 && request.status == 200) {

    //             response =  $.parseJSON(request.response);
    //             $.each(response.styles, function(i, item) {
    //                 let card = document.createElement('div');

    //                 card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

    //                 card.innerHTML = `
    //                     <div class="styles-block">
    //                         <img src=${item.src} alt="style">
    //                         <h4>${item.title}</h4>
    //                         <a href=${item.link}>Подробнее</a>
    //                     </div>
    //                 `;

    //                 document.querySelector('#styles .row').appendChild(card);
    //             });
    //         }
    //     });
    // btn.remove();
    // });



}
module.exports = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((module) => {

function slider(slides, dir, prev, next) {
    let slideIndex = 1,
        paused = false;

    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch (e) {}

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function () {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function () {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

}

module.exports = (slider);

/***/ }),

/***/ "./src/js/modules/timeInterval.js":
/*!****************************************!*\
  !*** ./src/js/modules/timeInterval.js ***!
  \****************************************/
/***/ ((module) => {

function times(selector, time){
    let target = document.querySelector(selector);
    setTimeout(function(){
        target.style.display = "block";


    },time);
}

module.exports = (times);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let modals = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js"),
        times = __webpack_require__(/*! ./modules/timeInterval */ "./src/js/modules/timeInterval.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js"),
        forms = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js"),
        showMoreStyles = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js"),
        calc = __webpack_require__(/*! ./modules/calc-form */ "./src/js/modules/calc-form.js"),
        filterFoto = __webpack_require__(/*! ./modules/filterFoto */ "./src/js/modules/filterFoto.js"),
        changePictures = __webpack_require__(/*! ./modules/changePictures */ "./src/js/modules/changePictures.js"),
        accordion = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js"),
        gamburger = __webpack_require__(/*! ./modules/gamburger */ "./src/js/modules/gamburger.js"),
        drop = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");


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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map