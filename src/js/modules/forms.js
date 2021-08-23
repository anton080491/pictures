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