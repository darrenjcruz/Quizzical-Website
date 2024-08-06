/*
Question Objects and Quiz Objects Defined with methods for the purpose of calculating scores. A default function for
dynamically displaying the quiz contents. Could not get it to work.
*/

class Question {
    constructor(question, a, b, c, d) {
        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.selection = "";
    }

    select(answer) {
        if (answer == a[1]) {
            this.selection = a[0];
        } else if (answer == b[1]) {
            this.selection = b[0];
        } else if (answer == c[1]) {
            this.selection = c[0];
        } else {
            this.selection = d[0];
        }
    }

    correctAnswer() {
        if (a[1] == true) {
            return a[0];
        } else if (b[1] == true) {
            return b[0];
        } else if (c[1] == true) {
            return c[0];
        } else {
            return d[0];
        }
    }
}

class Quiz {
    constructor(title, subtitle, questions) {
        this.title = title;
        this.subtitle = subtitle;
        this.questions = questions;
    }

    calculate() {
        let total = this.questions.length;
        let correct = 0;
        for (let i = 0; i < total; i++) {
            if (this.questions[i].selection == this.questions[i].correctAnswer()){
                correct += 1;
            }
        }
        return correct / total;
    }
}

//Function to dynamically display quiz contents.
const Quiz_Module = (quiz) => {
    var quizDiv = document.createElement("div");
    var jumbotron = document.createElement("div");
    jumbotron.setAttribute("class", "jumbotron text-center");
    var jumbotronTitle = document.createElement("h1");
    jumbotronTitle.textContent = quiz.title;
    var jumbotronSubtitle = document.createElement("p");
    jumbotronSubtitle = quiz.subtitle;
    jumbotron.appendChild(jumbotronTitle);
    jumbotron.appendChild(jumbotronSubtitle);
    quizDiv.appendChild(jumbotron);

    return quizDiv;
};

export default Quiz_Module;