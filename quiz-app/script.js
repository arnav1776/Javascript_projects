const quizData = [
    {
        question: 'What is the capital of India?',
        a: 'Mumbai',
        b: 'New Delhi',
        c: 'Kolkata',
        d: 'Chennai',
        correct: 'b'
    },
    {
        question: 'Who was the first woman Prime Minister of India?',
        a: 'Sarojini Naidu',
        b: 'Parthibha Patil',
        c: 'Indira Gandhi',
        d: 'Sonia Gandhi',
        correct: 'c'
    },
    {
        question: 'What is the National Animal of India?',
        a: 'Tiger',
        b: 'Lion',
        c: 'Elephant',
        d: 'Cow',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            alert("You have finished the quiz");
        }
    }
});