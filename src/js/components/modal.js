const modals = () => {
    const regContent = `
        <input class="modal__input" type="text" name="login" placeholder="Введите логин">
        <input class="modal__input" type="email" name="email" placeholder="Введите email">
        <input class="modal__input" type="password" name="password" placeholder="Введите пароль">
        <input class="modal__input" type="password" name="confirmPassword" placeholder="Подтвердите пароль">
        <input class="modal__input" type="text" name="code" placeholder="Реферальный код">
        <div class="modal__checkbox-bg">
            <input class="modal__checkbox" name="checkbox" type="checkbox">
        </div>
        <button class="modal__btn btn-purple" type="submit" >
            Зарегистрироваться
        </button>
    `

    const authContent = `
        <input class="modal__input" type="text" name="login" placeholder="Введите логин">
        <input class="modal__input" type="email" name="email" placeholder="Введите email">
        <button class="modal__btn btn-purple" type="submit">Войти</button>
    `
    function bindModal(triggerSelector, title, content) {
        const trigger = document.querySelectorAll(triggerSelector),
        scroll = calcScroll()

        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.innerHTML = `
            <div class="modal__wrapper">
                <h2 class="modal__title title">${title}</h2>
                <div class="modal__close">&#10006</div>
                <form class="modal__form">${content}</form>
            </div>
        `
        document.body.appendChild(modal)

        trigger.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block'
                modal.classList.add('animated', 'fadeIn')
                document.body.style.overflow = 'hidden'
            })
        })

        document.querySelectorAll('.modal__close').forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'none'
                modal.classList.remove('fadeIn')
                document.body.style.overflow = ''
            })
        })

        modal.addEventListener('click', (event) => {
            if (event.target.classList.contains('modal')) {
                modal.style.display = 'none'
                modal.classList.remove('fadeIn')
                document.body.style.overflow = ''
            }
        })
    }

    function calcScroll() {
        let div = document.createElement('div')
        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflowY = 'scroll'
        div.style.visibility = 'visibility'

        document.body.appendChild(div)
        let scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()

        return scrollWidth
    }

    bindModal('[data-btn="registration"]', 'Регистрация', regContent)
    bindModal('[data-btn="authorization"]', 'Авторизация', authContent)
}

modals()