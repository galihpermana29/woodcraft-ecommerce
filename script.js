const cardButton = document.querySelectorAll('.card-button')
Array.from(cardButton)

const name = ['Original Phone Holder', 'Horse Phone Holder', 'Deer Phone Holder']
const price = ['$15', '$10', '$15']

for(let i = 0; i < cardButton.length; i++) {
   cardButton[i].addEventListener('click', () => {
      const modal = document.querySelector('.modal')
      const overlay = document.querySelector('#overlay')
      modal.classList.add('active')
      overlay.classList.add('active')

      const modalImg = document.querySelector('.modal-image')
      modalImg.setAttribute(`src`, `image/${i+1}.png`)

      const priceEl = document.querySelector('.title-prod h3')
      const nameEl = document.querySelector('.title-prod h2')
      priceEl.innerHTML = `${price[i]}`;
      nameEl.innerHTML = `${name[i]}`;

      const addToCart = document.querySelectorAll('.cart')
      for(let j = 0; j < addToCart.length; j++) {
         addToCart[j].addEventListener('click', ()=> {
            const notification = document.querySelector('.notification')
            notification.classList.add('active')
            modal.classList.remove('active')
            overlay.classList.remove('active')

            const nameBrand = document.querySelector('p.name-brand')
            const message = document.querySelector('p.message')
            nameBrand.innerHTML = `${name[i]}`;
            message.innerHTML = `Successfully added to cart`
            setTimeout(() => {
               notification.classList.remove('active')
            },2000)
         })
      }

      const cross = document.querySelector('.fa-times')
      cross.addEventListener('click', () => {
         modal.classList.remove('active')
         overlay.classList.remove('active')
      })
   })
}