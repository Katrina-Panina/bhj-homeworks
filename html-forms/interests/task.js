//Домашнее задание к лекции «Работа с HTML-формами». Дерево интересов
'use strict';

const checkboxes = Array.from(document.getElementsByClassName("interest__check"));
checkboxes.forEach(checkbox => checkbox.addEventListener("change", function (event) {
    const target = event.target;
    const children = Array.from(target.closest(".interest").querySelectorAll(".interest__check"));

    children.forEach(item => {
        if (item !== target) {
            item.checked = target.checked
        }
    });
}));