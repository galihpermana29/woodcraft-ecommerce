import '../styles/style.css';
import './loader.js';
import '../styles/login.css'

const modal = document.querySelector('.modal');
const modalImgEl = document.querySelector('.modal-header img');
const overlay = document.querySelector('#overlay');
const cards = document.querySelector('.cards');
const cross = document.querySelector('.fa-times');
const cartPage = document.querySelector('.cart-page');
const cartIcon = document.querySelector('.fa-shopping-cart');
const chevronDown = document.querySelector('.fa-chevron-down');

let sum = 0;
let cartList = [];

function stickyNav() {
	const nav = document.querySelector('nav');
	if (window.scrollY > 0) {
		nav.classList.add('sticky');
	} else {
		nav.classList.remove('sticky');
	}
}

function closeModal() {
	modal.classList.remove('active');
	overlay.classList.remove('active');
	setTimeout(() => {
		if (modalImgEl.classList.value == 'card-img1')
			modalImgEl.classList.remove('card-img1');
		if (modalImgEl.classList.value == 'card-img2')
			modalImgEl.classList.remove('card-img2');
		if (modalImgEl.classList.value == 'card-img3')
			modalImgEl.classList.remove('card-img3');
	}, 500);
}

function showModal(e) {
	modal.classList.add('active');
	overlay.classList.add('active');
	let src = e.target.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute(
		'src'
	);
	let price = e.target.previousElementSibling.textContent;
	let name =
      e.target.previousElementSibling.previousElementSibling.textContent;

	if (src === '../image/1.png') modalImgEl.classList.add('card-img1');
	if (src === '../image/2.png') modalImgEl.classList.add('card-img2');
	if (src === '../image/3.png') modalImgEl.classList.add('card-img3');
	modalImgEl.setAttribute(`src`, `${src}`);

	const priceEl = document.querySelector('.title-prod h3');
	const nameEl = document.querySelector('.title-prod h2');
	priceEl.innerHTML = `${price}`;
	nameEl.innerHTML = `${name}`;
	overlay.addEventListener('click', closeModal);
}

function showNotification(name) {
	const notification = document.querySelector('.notification');
	notification.classList.add('active');
	closeModal();

	const nameBrand = document.querySelector('p.name-brand');
	nameBrand.innerHTML = `${name}`;
	message();
	setTimeout(() => {
		notification.classList.remove('active');
	}, 2500);
}

function message(message) {
	const messageEl = document.querySelector('p.message');
	messageEl.innerHTML = `${message}`;
}

function addToCart(e) {
	let name =
		e.target.parentElement.previousElementSibling.previousElementSibling
			.children[1].textContent;
	let price =
		e.target.parentElement.previousElementSibling.previousElementSibling
			.children[0].textContent;
	let imageSrc = e.target.parentElement.previousElementSibling.previousElementSibling.parentElement.previousElementSibling.children[1].getAttribute(
		'src'
	);
	let quantity = e.target.previousElementSibling.value;

	const cartPageBody = document.querySelector('.cart-page-body');
	if (cartList.includes(name)) {
		showNotification(name);
		message('Already in your cart');
	} else {
		cartList.push(name);
		cartPageBody.innerHTML += `
         <div class="cart-1">
            <div class="check">
               <input type="checkbox" name="cart-check" id="cart-check" checked >
            </div>
            <div class="item">
               <img src="${imageSrc}" alt="" width="70px">
            </div>
            <div class="item-detail">
               <p>${name}</p>
               <p>${price}</p>
               <input type="number" name="quantity" id="quantity" autofocus value="${quantity}" min="1" max="10">
            </div>
         </div> `;
		cartCount();
		showNotification(name);
		message('Successfully added to your cart');
		showAddtoCartDeleteButton();
	}
}

function cartCount() {
	sum += 1;
	let cartNum = document.querySelector('.circle');
	cartNum.classList.add('num');

	setTimeout(() => {
		cartNum.classList.remove('num');
	}, 1000);
	cartNum.innerHTML = `${sum}`;
}

function showAddtoCartDeleteButton() {
	const checkoutButtonEl = document.querySelector('.checkout-button');
	const deleteButtonEl = document.querySelector('.delete-button');
	const cartStatusEl = document.querySelector('.cart-status');

	cartStatusEl.classList.add('active');
	checkoutButtonEl.classList.add('active');
	deleteButtonEl.classList.add('active');
}

function closeCartPage() {
	cartPage.classList.remove('active');
	overlay.classList.remove('active');
}

function showCartPage() {
	cartPage.classList.add('active');
	overlay.classList.add('active');
}

function testiCarousel() {
	const testimonials = document.querySelectorAll('.testi');
	let t = 0;
	setInterval(() => {
		if (t === 4) t = 0;
		testimonials[t].classList.add('active');
		setTimeout(() => {
			testimonials[t].classList.remove('active');
			t += 1;
		}, 5900);
	}, 3000);
}

testiCarousel();
cartIcon.addEventListener('click', showCartPage);

overlay.addEventListener('click', closeCartPage);
chevronDown.addEventListener('click', closeCartPage);

modal.addEventListener('click', (e) => {
	if (e.target.className == 'cart') addToCart(e);
});

cross.addEventListener('click', closeModal);

window.addEventListener('scroll', stickyNav);

cards.addEventListener('click', (e) => {
	if (e.target.className == 'card-button det1') showModal(e);
	if (e.target.className == 'card-button det2') showModal(e);
	if (e.target.className == 'card-button det3') showModal(e);
});
