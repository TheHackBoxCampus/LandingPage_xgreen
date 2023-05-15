export default {
    changeProperties(currentTarget, method, className) {currentTarget.classList[method](className);},

    observerScrollPlay(div) {
        window.addEventListener('scroll', () => {
            let scrollPosition = document.documentElement.scrollTop;
            if(scrollPosition >= 144.15000915527344) this.changeProperties(div, 'add', 'no_visible');
            else this.changeProperties(div, 'remove', 'no_visible');
        })    
    }
    
}


