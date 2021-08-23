function times(selector, time){
    let target = document.querySelector(selector);
    setTimeout(function(){
        target.style.display = "block";


    },time);
}

module.exports = (times);