document.addEventListener('DOMContentLoaded', () => {
    const donations = () => {
        const donationsValue = document.querySelector('#donations__sum'),
            donationsItems = document.querySelectorAll('.donations__counts-item'),
            donationsSum = document.querySelector('.donations__sum'),
            donationsPercent = document.querySelector('.donations__percent'),
            donationsRadio = document.querySelectorAll('#radio-item');
        
        try {
            donationsValue.addEventListener('input', () => {
                if (donationsValue.value < 0) donationsValue.value = 50
                if (donationsValue.value > 20000) donationsValue.value = 20000
                showValue(donationsValue.value)
            })
    
            donationsItems.forEach((item) => {
                item.classList.remove('active')
                item.addEventListener('click', (e) => {
                    donationsItems.forEach(el => {
                        el.classList.remove('active')
                        item.classList.add('active')
                    })
                    donationsSum.textContent = item.getAttribute('data-value')
                    donationsPercent.textContent = item.getAttribute('data-percent')
                    donationsValue.value = item.getAttribute('data-value')
                })
            })
    
            function showValue(value) {
                donationsSum.textContent = value;
                donationsPercent.textContent = getPercent(value)
                donationsItems.forEach((item, i) => {
                    item.classList.remove('active')
                    if (item.getAttribute('data-percent') == getPercent(value)) {
                        donationsItems[i].classList.add('active')
                    }
                })
            }
    
            function getPercent(value) {
                value =+ value
                let percent = 0
                if (value < 500) percent = 0
                if (value >= 500 && value < 1000) percent = 5
                if (value >= 1000 && value < 2000) percent = 10
                if (value >= 2000 && value < 3500) percent = 15
                if (value >= 3500 && value < 5000) percent = 20
                if (value >= 5000 && value < 7500) percent = 25
                if (value >= 7500 && value < 10000) percent = 30
                if (value >= 10000 && value < 12500) percent = 35
                if (value >= 12500 && value < 15000) percent = 40
                if (value >= 15000 && value < 20000) percent = 45
                if (value >= 20000) percent = 50
                return percent
            }

            donationsRadio.forEach((elem, i) => {
                elem.addEventListener('input', () => {
                    donationsRadio.forEach((el, j) => {
                        el.checked = false
                        if (i == j) {
                            el.checked = true
                        }
                    })
                })
            })
        } catch (e) { }
    }
    
    donations()
})