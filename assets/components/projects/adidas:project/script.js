

// function of About Sevices start

function functio(small) {

    var full = document.getElementById('imagebox');
    full.src = small.src;

}

// function of About Sevices end


//header function start
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');



menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
})

document.querySelectorAll('.mobile-nav').forEach(item => {
    item.addEventListener('click', event => {
        menu_btn.classList.toggle('is-active')
        mobile_menu.classList.toggle('is-active')
    })
})


//header function responsive end



// header function animation

window.addEventListener('scroll', () => {
    let header = document.getElementById('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})