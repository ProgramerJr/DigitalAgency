document.addEventListener("DOMContentLoaded", (event) => {
    // Seleccionar elementos
    var mobile_btn = document.querySelector(".navbar__mobile-btn");
    var menu_mobile = document.querySelector(".menu-mobile");
    var btn_close = document.querySelector(".menu-mobile__close");

    const mostrarMenu = () => {
        let show = document.querySelector(".menu-mobile--show");
        if (show) {
            menu_mobile.classList.remove("menu-mobile--show");
        } else {
            menu_mobile.classList.add("menu-mobile--show");
        }
    };
    mobile_btn.addEventListener("click", mostrarMenu);
    btn_close.addEventListener("click", mostrarMenu);
    window.addEventListener("resize", () => {
        var window_width = parseInt(document.body.clientWidth);
        if (window_width >= 1000) {
            menu_mobile.classList.remove("menu-mobile--show");
            mobile_btn.style.visibility = "hidden";
            menu_mobile.style.visibility = "hidden";
        } else {
            mobile_btn.style.visibility = "visible";
            menu_mobile.style.visibility = "visible";
        }
    });

    // Desplegar submenus
    let menu_items = document.querySelectorAll(".menu-mobile__link");

    menu_items.forEach((item) => {
        // Inicialmente, el icono no está rotado.
        // Usamos una propiedad personalizada para controlar el estado.
        item.dataset.rotated = "false";

        item.addEventListener("click", () => {
            let item_arrow = item.querySelector(".menu-mobile__icon");

            if (item_arrow) {
                if (item.dataset.rotated === "false") {
                    // Si el icono no está rotado, lo rotamos a 90 grados.
                    item_arrow.style.cssText = "transform: rotate(0deg);";
                    // Actualizamos el estado a rotado.
                    item.dataset.rotated = "true";
                } else {
                    // Si el icono ya está rotado, volvemos a la posición original.
                    item_arrow.style.cssText = "transform: rotate(-90deg);";
                    // Actualizamos el estado a no rotado.
                    item.dataset.rotated = "false";
                }
            }
        });
    });

    // DESPLEGAR SUBMENU
    let menu_item = document.querySelectorAll('.menu-mobile__item');
    menu_item.forEach(item => {
        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;

            if (submenu.className === "menu-mobile__submenu-mobile") {
                if (submenu.style.display === "block") {
                    submenu.style.display = "none";
                } else {
                    submenu.style.display = "block";

                }
            }
        })
    })
});