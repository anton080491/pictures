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