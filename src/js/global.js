document.addEventListener('DOMContentLoaded', () => {

    // modal
    class Modal {
        constructor(modal, btnOpen, btnClose) {
            this.modal = document.querySelector(modal)
            this.btnOpen = document.querySelectorAll(btnOpen)
            this.btnClose = document.querySelectorAll(btnClose)
        }

        show() {
            this.btnOpen.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.modal.style.display = 'block'
                    document.body.style.overflow = 'hidden'
                })
                this.hide()
            })
        }

        hide() {
            this.btnClose.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.modal.style.display = 'none'
                    document.body.style.overflow = ''
                })
            })
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.modal.style.display = 'none'
                    document.body.style.overflow = ''
                }
            })
        }
    }

    new Modal('#modal-registration', '#openModalReg', '#modalClose').show()
    new Modal('#modal-auth', '#openModalAuth', '#modalClose').show

    // items

    const items = document.querySelectorAll('.subjects__item')

    items.forEach(item => {
        item.addEventListener('click', (event) => {
            const e = event.target.parentNode
            if (e.classList.contains('active')) {
                e.classList.remove('active')
            }
            e.classList.add('active')
        })
    })

    // click sidebar

    function addActiveClass(selector) {
        const items = document.querySelectorAll(selector)
        items.forEach((item, index) => {
            items[index].classList.add('active')
            item.classList.remove('active')
            item.addEventListener('click', (e) => {
                if (e.target.parentNode === item) {
                    item.classList.remove('active')
                    items[index].classList.add('active')
                } else {
                    item.classList.remove('active')
                }
            })
        })
    }
    addActiveClass('.sidebar__characters-link')
    addActiveClass('.menu__item')
    addActiveClass('.media__box-content')

    // menu
})