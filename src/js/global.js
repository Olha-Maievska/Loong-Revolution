// modal

const btnRegistration = document.querySelector('#btn__registration')
const modalRegistr = document.querySelector('#modal-registration')
btnRegistration.addEventListener('click', (e) => {
    e.preventDefault()
    modalRegistr.style.display = 'block'
})
const btnAuth = document.querySelector('#btn__auth')
const modalAuth = document.querySelector('#modal-auth')
btnAuth.addEventListener('click', (e) => {
    e.preventDefault()
    modalAuth.style.display = 'block'
})