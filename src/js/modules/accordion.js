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