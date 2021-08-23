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