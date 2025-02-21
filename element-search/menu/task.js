//Домашнее задание к лекции «СПОСОБЫ ПОИСКА НУЖНОГО HTML‑ЭЛЕМЕНТА». //Домашнее задание к лекции «СПОСОБЫ ПОИСКА НУЖНОГО HTML‑ЭЛЕМЕНТА». Всплывающие окна
'use strict';

const menuLinks = document.querySelectorAll(".menu__link");
menuLinks.forEach(itemLink => {
    itemLink.onclick = () => {
        let menuActive = document.querySelectorAll(".menu_active");
        if (itemLink.closest(".menu__item").querySelector(".menu_sub") != null) {
            itemLink.closest(".menu__item").querySelector(".menu_sub").classList.toggle("menu_active");
            if (menuActive.length > 0) {
                menuActive[0].classList.remove("menu_active");
            }
            return false;
        }
    }
});

