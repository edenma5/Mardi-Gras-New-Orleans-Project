let qwizPopUpBTN = document.getElementById('qwizPopUpBTN');
let qwizContainer = document.getElementById('qwizContainer');
let close = document.getElementById('close');
let btn1 = document.querySelectorAll('.btn1');
let skip = document.getElementById('skip');
let score = document.getElementById('score');
let countdown = document.getElementById('countdown');
let totalScore = document.getElementById('totalScore');
let count = 0;
let scoreCount = 0;
let duration = 0;
let qaSet = document.querySelectorAll('.qa_set');
let qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

qwizPopUpBTN.addEventListener('click', () => {
    start();
});

function start() {
    qwizContainer.style.display = 'flex';
    skip.addEventListener('click', function () {
        step();
        duration = 12;
    });

    qaAnsRow.forEach(function (qaAnsRowSingle) {
        qaAnsRowSingle.addEventListener('click', function () {
            setTimeout(function () {
                step();
                duration = 12;
            }, 500)

            let valid = this.getAttribute('valid');
            if (valid == 'valid') {
                scoreCount += 10;
                score.innerHTML = scoreCount;
                totalScore.innerHTML = scoreCount;
            } else {
                score.innerHTML = scoreCount;
                totalScore.innerHTML = scoreCount;
            }
        })
    })

    function step() {
        count += 1;
        for (let i = 0; i < qaSet.length; i++) {
            qaSet[i].className = 'qa_set';
        }
        qaSet[count].className = 'qa_set active';
        if (count == 10) {
            skip.style.display = "none";
            duration = 0;
            clearInterval(durationTime);
        }
    }

    let durationTime = setInterval(function () {
        if (duration == 12) {
            duration = 0;
        }
        duration += 1;
        countdown.innerHTML = `${duration} of 12s`;
        if (duration == 12) {
            step()
        }
        close.addEventListener('click', () => {
            clearInterval(durationTime);
        })
    }, 1000);

};

close.addEventListener('click', () => {
    qwizContainer.style.display = 'none';
});