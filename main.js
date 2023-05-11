

//  prev/next function

let picArry = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg']
const currentImage = document.getElementById('current-image')
const prevbtn = document.getElementById('prevbtn')
const nextbtn = document.getElementById('nextbtn')
let i = 0; //current picArry index //nasa labas dapat toh


nextbtn.addEventListener('click', () =>{
    if (i >= picArry.length -1) { // if i = 3(or the last one) let i = -1 para if clicked balik sa 0(una)
        i = -1
    }

    i++

    currentImage.src=picArry[i];
})

prevbtn.addEventListener('click', () =>{
    if (i <= 0) {
        i = picArry.length
    }

    i--

    currentImage.src=picArry[i];
})

// thumbnail preview

const thumbContainer = document.querySelector('.thumbnail-container');
const thumbnail = document.querySelectorAll('.thumbnail');

function removeActive(){
    thumbnail.forEach((element)=>{ // better than the for loop/same lang sila actually
        if(element.classList.contains('image-active')){  //check all the class if active is present, then remove
            element.classList.remove('image-active')
        }
    })
}


thumbContainer.addEventListener('click', (e) =>{ //thumbnail to mainPic
    if(e.target.classList.contains('thumbnail-container')){
        return false;
    } else if(e.target.getAttribute('src') === "./images/image-product-1-thumbnail.jpg"){
        removeActive()
        e.target.parentNode.classList.add('image-active')
        currentImage.src= picArry[0]
    } else if(e.target.getAttribute('src') === "./images/image-product-2-thumbnail.jpg"){
        removeActive()
        e.target.parentNode.classList.add('image-active')
        currentImage.src= picArry[1]
    } else if(e.target.getAttribute('src') === "./images/image-product-3-thumbnail.jpg"){
        removeActive()
        e.target.parentNode.classList.add('image-active')
        currentImage.src= picArry[2]
    } else if(e.target.getAttribute('src') === "./images/image-product-4-thumbnail.jpg"){
        removeActive()
        e.target.parentNode.classList.add('image-active')
        currentImage.src= picArry[3]
    }
});

// lightbox preview

let lightboxCurrentImage = document.getElementById('lightbox-current-image')
const lightboxPrevbtn = document.getElementById('lightbox-prevbtn')
const lightboxNextbtn = document.getElementById('lightbox-nextbtn')

function updateIndex() {                                    //change i depending on the current image
    if(currentImage.src.indexOf('1') !== -1){                  // for the next and prev
        i = 0
    } else if(currentImage.src.indexOf('2') !== -1) {
        i = 1
    } else if(currentImage.src.indexOf('3') !== -1) {
        i = 2
    } else {
        i = 3
    }
}

// lightbox popUp

currentImage.addEventListener('click', () =>{
    let wrapperMain = currentImage.parentNode.parentNode.parentNode;

    updateIndex()
    removeActiveLightbox()
    goActive()
    lightboxCurrentImage.src = currentImage.src

    wrapperMain.classList.add('lightbox-show');
})

// close lightbox

const lightboxCover = document.getElementById('lightbox-black-cover')

lightboxCover.addEventListener('click', () =>{
    let wrapperMain = currentImage.parentNode.parentNode.parentNode;

    wrapperMain.classList.remove('lightbox-show');
})



//lightbox functionality

const lb1 = document.getElementById('lb1'),
lb2 = document.getElementById('lb2'),
lb3 = document.getElementById('lb3'),
lb4 = document.getElementById('lb4');


function goActive() {
    if(i === 0) {
        lb1.classList.add('lightbox-image-active')
    } else if(i === 1) {
        lb2.classList.add('lightbox-image-active')
    } else if(i === 2) {
        lb3.classList.add('lightbox-image-active')
    } else if(i === 3) {
        lb4.classList.add('lightbox-image-active')
    }
}


lightboxNextbtn.addEventListener('click', () =>{
    if (i >= picArry.length -1) {
        i = -1
    }
    i++
    lightboxCurrentImage.src=picArry[i];
    removeActiveLightbox()
    goActive()
})

lightboxPrevbtn.addEventListener('click', () =>{
    if (i <= 0) {
        i = picArry.length
    }

    i--

    lightboxCurrentImage.src=picArry[i];
    removeActiveLightbox()
    goActive()
})

const lightboxtThumbContainer = document.querySelector('.lightbox-thumbnail-container');

function removeActiveLightbox(){
    thumbnail.forEach((element)=>{
        if(element.classList.contains('lightbox-image-active')){
            element.classList.remove('lightbox-image-active')
        }
    })
}

lightboxtThumbContainer.addEventListener('click', (e) =>{
    if(e.target.classList.contains('lightbox-thumbnail-container')){
        return false;
    } else if(e.target.src.indexOf('1') !== -1){ //check the e.target innertext/innerHTML if it has the '(word)'
        removeActiveLightbox()
        e.target.parentNode.classList.add('lightbox-image-active')
        lightboxCurrentImage.src=`${picArry[0]}`
    } else if(e.target.src.indexOf('2') !== -1){
        removeActiveLightbox()
        e.target.parentNode.classList.add('lightbox-image-active')
        lightboxCurrentImage.src=`${picArry[1]}`
    } else if(e.target.src.indexOf('3') !== -1){
        removeActiveLightbox()
        e.target.parentNode.classList.add('lightbox-image-active')
        lightboxCurrentImage.src=`${picArry[2]}`
    } else if(e.target.src.indexOf('4') !== -1){
        removeActiveLightbox()
        e.target.parentNode.classList.add('lightbox-image-active')
        lightboxCurrentImage.src=`${picArry[3]}`
    }
})

// count update

const itemCount =document.getElementById('item-count')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

let count = parseInt(itemCount.value);


plus.addEventListener('click', () =>{
    return itemCount.value = 1 + count++
})


minus.addEventListener('click', () =>{
    if (count === 0){
        return false        // no negatives
    }
    return itemCount.value = count-- - 1
})

// count of items in cart



// add to cart

let imgCart = picArry[0];
let productName = document.getElementById('product-name').innerText;
let price = parseInt(document.getElementById('price').innerText);

const CartBtn = document.getElementById('add-cart-btn');
const cart =document.getElementById('cart')


CartBtn.addEventListener('click', () =>{

    if(cart.innerHTML.indexOf('empty') !== -1){
        cart.innerHTML=''
    }

    if(count <= 0){   // no 0price on cart
        document.getElementById('shop-cart-counter').innerText = '',
        document.getElementById('shop-cart-counter').style.padding = '0'
        cart.innerHTML='<h6>Your cart is empty.</h6>'
        return false;
    } else if(cart.innerHTML.indexOf(`${productName}`) !== -1){ // updates the product
        document.getElementById('shop-cart-counter').innerText = count              //update the item inside the cart counter
        document.getElementById('shop-cart-counter').style.padding = '0.1em 0.7em'
        cart.innerHTML = 
        `<div class="cart-product-container">
            <img src="${imgCart}" alt="">
            <div class="cart-product-name-price-container">
                <p>Fall Limited Edition Sneakers</p>
                <p>$${price}.00 x ${count} <span id="total">$${price * count}.00</span></p>
            </div>
            <img src="./images/icon-delete.svg" alt="" id="delete-cart" class="delete">
        </div>`                                                                                         
    } else { // prevents from multiple of the same product
        document.getElementById('shop-cart-counter').innerText = count
        document.getElementById('shop-cart-counter').style.padding = '0.1em 0.7em'
        cart.innerHTML += 
        `<div class="cart-product-container">
            <img src="${imgCart}" alt="">
            <div class="cart-product-name-price-container">
                <p>Fall Limited Edition Sneakers</p>
                <p>$${price}.00 x ${count} <span id="total">$${price * count}.00</span></p>
            </div>
            <img src="./images/icon-delete.svg" alt="" id="delete-cart" class="delete">
        </div>`
    }

    if(cart.innerHTML.indexOf('Checkout') !== -1){// add the checkout btn when the cart has an item
        return false
    } else {
        cart.innerHTML +='<button id="checkout-btn">Checkout</button>'
    }

})

// remove from cart

cart.addEventListener('click', (e) =>{

    if(e.target.classList.contains('delete')) {
        e.target.parentNode.remove()
    }

    if(cart.innerHTML.length === 43) {//checked the innerHTML length
        document.getElementById('shop-cart-counter').innerText = ''
        document.getElementById('shop-cart-counter').style.padding = '0'
        cart.innerHTML='<h6>Your cart is empty.</h6>'
    }

})

