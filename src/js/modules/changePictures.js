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