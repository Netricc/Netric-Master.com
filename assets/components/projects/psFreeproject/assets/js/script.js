
let valueDisplays = document.querySelectorAll(".num");
let interval = 3500;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration);
})

// header sticky


// document.addEventListener("DOMContentLoaded", function () {
//     window.onscroll = function () { myFunction() };
//     var header = document.querySelector("#header");
//     var sticky = header.offsetTop;

//     function myFunction() {
//         if (window.scrollY > sticky) {
//             header.classList.add("sticky");
//         } else {
//             header.classList.remove("sticky");
//         }
//     }
// });


document.querySelector('.news-card1').onclick = function () {
    window.location.pathname = './assets/section/newsCard.html'

}

document.querySelector('.news-card2').onclick = function () {
    window.location.pathname = './assets/section/newsCard.html'

}

document.querySelector('.news-card3').onclick = function () {
    window.location.pathname = './assets/section/newsCard.html'

}









