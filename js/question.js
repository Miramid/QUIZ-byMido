
class Question {

    constructor(question, answerArr, rightAnswer) {
        this.question = question;
        this.answerArr = answerArr;
        this.rightAnswer = rightAnswer;

    }

    static indexOfQues = 0;

    static rightAnsCount = 0;
    static wrongAnsCount = 0;

    static fiftyHelp = false;

    static checkAns(userAns) {
        if (userAns == quesArr[this.indexOfQues].rightAnswer) {
            this.rightAnsCount++
        }
        else {
            this.wrongAnsCount++
        }
    }

    static shakeArr(parArr) {
        let shakenArr = [];

        let tempLenght = parArr.length;

        for (let i = 0; i < tempLenght; i++) {

            let a = Math.floor(Math.random() * parArr.length);

            shakenArr.push(parArr[a])

            parArr.splice(a, 1);
        }
        return shakenArr;
    }



}



let q1 = new Question('XX əsrdə Azərbaycanda müstəqillik hərəkatının şüarı olmuş "Bir kərə yüksələn bayraq, bir daha enməz!" ifadəsi kimə məxsusdur ?', Question.shakeArr(['Məhəmməd Əmin Rəsulzadə', 'Fətəli xan Xoyski', 'Nəsib bəy Yusifbəyli', ' Mir Hidayət bəy Seyidov']), 'Məhəmməd Əmin Rəsulzadə');
let q2 = new Question('Azərbaycandakı ən yüksək dağ zirvəsi olan Bazardüzünün hündürlüyü neçə metrdir ?', Question.shakeArr(['4301', '4243', '4565', '4466']), '4466');
let q3 = new Question('Avstraliyanın paytaxtı haradır ?', Question.shakeArr(['Sidney', 'Melburn', 'Kanberra', 'Brisben']), 'Kanberra');
let q4 = new Question('Azərbaycan Respublikasında İkinci Qarabağ müharibəsində qələbə şərəfinə qeyd edilən "Zəfər Günü" hansı tarixdədir ?', Question.shakeArr(['27 sentyabr', '8 noyabr', '10 noyabr', '28 may']), '8 noyabr');
let q5 = new Question('Dünyada qazılmış ən dərin quyu hansıdıır ?', Question.shakeArr(['Saatlı quyusu (Azərbaycan)', 'KTB –Oberpfalts (Almaniya)', 'Kola yarımadasında qazılmış quyu (Rusiya)', 'Berta Rocers (ABŞ)']), 'Kola yarımadasında qazılmış quyu (Rusiya)');

let quesArr = Question.shakeArr([q1, q2, q3, q4, q5]);