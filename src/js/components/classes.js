document.addEventListener("DOMContentLoaded", () => {
    const classes = () => {
        const paramsBlock = document.querySelector('.classes__params'),
            tabs = document.querySelectorAll('.classes__item'),
            squareParent = document.querySelector('.classes__params-square')

        const classesContent = [
            {
                id: 1,
                name: 'Мастер меча',
                imgPath: './img/classesPerson/classesChar1.png',
                complexity: 3,
                damage: 9,
                survival: 3,
                control: 5,
                mobility: 10,
                pve: 10,
                pvp: 5
            },
            {
                id: 2,
                name: 'Мастер клинка',
                imgPath: './img/classesPerson/classesChar2.png',
                complexity: 6,
                damage: 8,
                survival: 5,
                control: 8,
                mobility: 7,
                pve: 5,
                pvp: 9
            },
            {
                id: 3,
                name: 'Мастер посоха',
                imgPath: './img/classesPerson/classesChar3.png',
                complexity: 5,
                damage: 4,
                survival: 9,
                control: 7,
                mobility: 4,
                pve: 8,
                pvp: 6
            },
            {
                id: 4,
                name: 'Лучник',
                imgPath: './img/classesPerson/classesChar4.png',
                complexity: 5,
                damage: 5,
                survival: 4,
                control: 6,
                mobility: 5,
                pve: 3,
                pvp: 10
            },
            {
                id: 5,
                name: 'Воин солнца',
                imgPath: './img/classesPerson/classesChar5.png',
                complexity: 6,
                damage: 10,
                survival: 5,
                control: 6,
                mobility: 2,
                pve: 6,
                pvp: 7
            },
            {
                id: 6,
                name: 'Воин луны',
                imgPath: './img/classesPerson/classesChar6.png',
                complexity: 7,
                damage: 6,
                survival: 9,
                control: 7,
                mobility: 6,
                pve: 5,
                pvp: 8
            },
            {
                id: 7,
                name: 'Лекарь',
                imgPath: './img/classesPerson/classesChar7.png',
                complexity: 8,
                damage: 3,
                survival: 8,
                control: 5,
                mobility: 3,
                pve: 8,
                pvp: 6
            },
            {
                id: 8,
                name: 'Музыкант',
                imgPath: './img/classesPerson/classesChar8.png',
                complexity: 9,
                damage: 7,
                survival: 3,
                control: 10,
                mobility: 2,
                pve: 6,
                pvp: 8
            }
        ]

        classesContent.forEach(item => {
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(el => el.classList.remove('active'))
                    tab.classList.add('active')

                    if (tab.getAttribute('data-id') == item.id) {
                        paramsBlock.innerHTML = `
                            <img class="classes__params-img" src=${item.imgPath} alt=${item.name}>
                            <div class="classes__params-content">
                                <h5 class="classes__params-title">${item.name}</h5>
                                <div class="classes__params-item">
                                    <div class="classes__params-char">
                                        Сложность
                                    </div>
                                    <div class="classes__params-square">
                                    </div>
                                </div>
        
                                <div class="classes__params-item">
                                    <div class="classes__params-char">
                                        Урон
                                    </div>
                                    <div class="classes__params-square">
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square"></span>
                                    </div>
                                </div>
        
                                <div class="classes__params-item">
                                    <div class="classes__params-char">
                                        Выживаемость
                                    </div>
                                    <div class="classes__params-square">
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                    </div>
                                </div>
        
                                <div class="classes__params-item">
                                    <div class="classes__params-char">
                                        Контроль
                                    </div>
                                    <div class="classes__params-square">
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                    </div>
                                </div>
        
                                <div class="classes__params-item">
                                    <div class="classes__params-char">
                                        Мобильность
                                    </div>
                                    <div class="classes__params-square">
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                    </div>
                                </div>
        
                                <div class="classes__params-item">
                                    <div class="classes__params-char">
                                        PvE
                                    </div>
                                    <div class="classes__params-square">
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                    </div>
                                </div>
        
                                <div class="classes__params-item">
                                    <div class="classes__params-char">
                                        PvP
                                    </div>
                                    <div class="classes__params-square">
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square active"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                        <span class="square"></span>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                })
            })
        })

        // function addSquare(num) {
        //     let n = 10

        //     if (n > num) {
        //         const square = document.createElement('span')
        //         square.classList.add('square', 'active')
        //         squareParent.appendChild(squ)
        //     }

        // }
    }

    classes()
})