const ui = new UI();

let timer;
let timeLimit = 15;

function startTimer() {
    timer = setInterval(() => {

        timerDiv.innerHTML = timeLimit - 1
        timeLimit--

        if (timerDiv.innerHTML == '0') {

            /****************** */
            nextQuestion();
            /****************** */

        }
    }, 1000)
}
startTimer();

function nextQuestion() {
    if (Question.fiftyHelp) {
        ui.clearDnone();
    }

    Question.indexOfQues++

    if (Question.indexOfQues == quesArr.length) {
        ui.showGameOverMenu();
        fiftyFifty.classList.add('d-none');
        clearInterval(timer);
    }
    else {
        ui.showQues(Question.indexOfQues);
        clearInterval(timer);
        timeLimit = 15;
        timerDiv.innerHTML = 15;
        startTimer();
    }
}



window.addEventListener('DOMContentLoaded', () => {
    ui.showQues(0);
});



ansDiv.addEventListener('click', (e) => {

    if (e.target.classList.contains('cvb')) {
        clearInterval(timer);

        Question.checkAns(e.target.textContent);

        /****************** */
        nextQuestion();
        /****************** */
    }

});

fiftyFifty.addEventListener('click', (e) => {
    Question.fiftyHelp = true;
    ui.deleteTwoWrongAns();
    fiftyFifty.classList.add('d-none');
});

