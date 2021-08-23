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