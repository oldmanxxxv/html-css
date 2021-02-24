/*var redplanet = document.getElementById("redplanet");*/

function check() {
    var redplanet1 = document.querySelector("#redplanet");
    redplanet.innerText = 'Aliens landed on Mars';
    redplanet.classList.add('alert', 'alert-danger');
}

var button = document.querySelector("input[type='button']");
button.addEventListener('click', check);