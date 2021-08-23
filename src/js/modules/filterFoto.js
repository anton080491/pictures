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