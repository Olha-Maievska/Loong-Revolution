document.addEventListener('DOMContentLoaded', () => {
    class Download {
        constructor(triggers) {
            this.btns = document.querySelectorAll(triggers);
            this.path = './img/intro-bg.jpg';
        }
    
        downloadItem(path) {
            const elem = document.createElement('a');
            elem.setAttribute('href', path);
            elem.setAttribute('download', 'nice-picture');
    
            elem.style.display = 'none';
            document.body.appendChild(elem);
    
            elem.click();
            document.body.removeChild (elem);
        }
    
        init() {
            this.btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.downloadItem(this.path);
                });
            });
        }
    }
    
    new Download('#download').init()
})