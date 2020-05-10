'use strict';

let cart = [];
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {

        const productDOM = addToCartButtonDOM.parentNode;
        const product = {
            image: productDOM.querySelector('.product__image').getAttribute('src'),
            name: productDOM.querySelector('.product__name').innerText,
            price: productDOM.querySelector('.product__price').innerText,

        }

        console.log(cart.filter(cartItem => cartItem.name === product.name).length);

        cartDOM.insertAdjacentHTML('beforeend', `
        <div class='cart__item'>
            <img class='cart__item__image' src=${product.image}>
            <h1 class='cart__item__name'>${product.name}</h1>
            <h3 class='cart__item__price'>${product.price}<h3>
        </div>
        `);

        cart.push(product);
        addToCartButtonDOM.innerText = 'In Cart';


    })
    
})
