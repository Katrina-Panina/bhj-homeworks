//Домашнее задание к лекции «Асинхронные запросы». Опрос с выбором результатов
'use strict';
const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText);
        pollTitle.innerText = response.data.title;
        response.data.answers.forEach(answer => {
            const button = document.createElement('button');
            button.classList.add("poll__answer");
            button.innerText = `${answer}`;
            button.addEventListener("click", function () {alert("Спасибо, ваш голос засчитан!")});
            pollAnswers.appendChild(button);
        });
    }
};