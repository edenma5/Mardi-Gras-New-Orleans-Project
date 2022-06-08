//Countdown Timer 
let countDownDate = new Date("Feb 21, 2023 08:00:00").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.days').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownTimer").innerHTML = "EXPIRED";
    }
}, 1000);