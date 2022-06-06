//Countdown Timer 
let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let time = `${days} : ${hours} : ${minutes} : ${seconds}`;
    document.getElementById('countdownTimer').innerText = time;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownTimer").innerHTML = "EXPIRED";
    }
}, 1000);