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