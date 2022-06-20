document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form')

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })

        return await res.json()
    };

    const message = {
        loading: 'Loading...',
        success: 'Thanks! Data sent!',
        failure: 'Something was wrong...'
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const statusMessage = document.createElement('div')
            statusMessage.textContent = message.loading

            statusMessage.style.cssText = `
                    text-align: center;
                    margin-top: 15px;
                    color: #000;
                `

            if (form.parentNode.classList.contains('donations__form-content')) {
                form.insertAdjacentElement('beforeend', statusMessage)
            } else {
                form.insertAdjacentElement('afterend', statusMessage)
            }
            const formData = new FormData(form)
            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data)
                    statusMessage.textContent = message.success
                })
                .catch(() => {
                    statusMessage.textContent = message.failure
                })
                .finally(() => {
                    form.reset()
                    setTimeout(() => statusMessage.remove(), 2000)
                })
        })
    })
})