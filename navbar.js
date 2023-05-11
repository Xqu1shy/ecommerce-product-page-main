


// cart open/close

document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('cart-icon').parentNode.classList.toggle('show-cart')
})


// nav open/close

const burger = document.getElementById('burger')
const burgerIcon = document.getElementById('burger-icon')

burger.addEventListener('click', () => {
    if(!burger.parentNode.parentNode.classList.contains('show-nav')){
        burgerIcon.src="./images/icon-close.svg"
        burger.parentNode.parentNode.classList.add('show-nav')
    } else {
        burgerIcon.src="./images/icon-menu.svg"
        burger.parentNode.parentNode.classList.remove('show-nav')
    }
})