document.addEventListener(
    "DOMContentLoaded", () => {
        let navbar = document.querySelector('.menu__navbar');
        window.addEventListener(
            'scroll', () => {
                let scroll = window.scrollY;
                console.log(scroll);
                if (scroll > 120) {
                    console.log(scroll);
                    navbar.classList.add('menu__navbar--fixed')
                } else {
                    navbar.classList.remove('menu__navbar--fixed')
                }
            })
    })