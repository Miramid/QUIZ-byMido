
const quesDiv = document.querySelector('#quesDiv');
const ansDiv = document.querySelector('#ansDiv');
const quesNo = document.querySelector('#quesNo');
const cardFooter = document.querySelector('#cardFooter');
const fiftyFifty = document.querySelector('#fiftyFifty');
const timerDiv = document.querySelector('#timerDiv');



class UI {

    showQues(indexOfQues) {

        quesNo.innerHTML = `Question ${indexOfQues + 1}`
        quesDiv.innerHTML = quesArr[indexOfQues].question;


        for (let i = 0; i < ansDiv.children.length; i++) {
            ansDiv.children[i].firstElementChild.innerHTML = quesArr[indexOfQues].answerArr[i];
        }

        cardFooter.innerHTML = `<i class="fas fa-thumbs-up">&#160;${Question.rightAnsCount}</i>  <br><br> <i class="fas fa-thumbs-down">&#160;${Question.wrongAnsCount}</i>`
    }

    showGameOverMenu() {
        quesNo.classList.add('d-none');
        quesDiv.classList.add('d-none');
        ansDiv.innerHTML = '<h4 class="card-title text-center"> Suallar bitdi... &#160 &#160 <a href="./index.html"> yenidən başla</a></h4> '
        cardFooter.innerHTML = `<i class="fas fa-thumbs-up">&#160;${Question.rightAnsCount}</i>  <br><br> <i class="fas fa-thumbs-down">&#160;${Question.wrongAnsCount}</i>`

        timerDiv.classList.add('d-none');
    }

    deleteTwoWrongAns() {
        let hiddenElements = 0;
        for (let i = 0; i < ansDiv.children.length - 1; i++) {
            if (ansDiv.children[i].firstElementChild.textContent != quesArr[Question.indexOfQues].rightAnswer && hiddenElements < 2) {
                //ansDiv.removeChild(ansDiv.children[i]);
                ansDiv.children[i].classList.remove('d-flex')
                ansDiv.children[i].classList.remove('justify-content-center')
                ansDiv.children[i].classList.add('d-none');
                hiddenElements++
            }

        }
    }

    clearDnone() {
        for (let i = 0; i < ansDiv.children.length; i++) {
            ansDiv.children[i].classList.add('d-flex')
            ansDiv.children[i].classList.add('justify-content-center')
            ansDiv.children[i].classList.remove('d-none');
        }
    }

    

}
