const cardButton = Array.from(document.querySelectorAll('.card-button'));
const modal = document.querySelector('.modal');
const overlay = document.querySelector('#overlay');
const cards = document.querySelector('.cards');
const cross = document.querySelector('.fa-times');

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
	const modalImg = document.querySelector('.modal-image');
	modalImg.setAttribute(`src`, `${src}`);

	const priceEl = document.querySelector('.title-prod h3');
	const nameEl = document.querySelector('.title-prod h2');
	priceEl.innerHTML = `${price}`;
	nameEl.innerHTML = `${name}`;
}

let sum = 0;

function showNotification(e) {
	const notification = document.querySelector('.notification');
	notification.classList.add('active');
	modal.classList.remove('active');
	overlay.classList.remove('active');
	let name =
		e.target.parentElement.previousElementSibling.previousElementSibling
			.children[1].textContent;

	const nameBrand = document.querySelector('p.name-brand');
	const message = document.querySelector('p.message');
	nameBrand.innerHTML = `${name}`;
	message.innerHTML = `Successfully added to cart`;
	setTimeout(() => {
		notification.classList.remove('active');
	}, 2000);

	sum += 1;

   let cartNum = document.querySelector('.circle');
   cartNum.classList.add('num')
   setTimeout(()=> {
      cartNum.classList.remove('num')
   },1000)
	cartNum.innerHTML = `${sum}`;
}

modal.addEventListener('click', (e) => {
	if (e.target.className == 'cart') showNotification(e);
});

cross.addEventListener('click', closeModal);

window.addEventListener('scroll', stickyNav);

cards.addEventListener('click', (e) => {
	if (e.target.className == 'card-button det1') showModal(e);
	if (e.target.className == 'card-button det2') showModal(e);
	if (e.target.className == 'card-button det3') showModal(e);
});
