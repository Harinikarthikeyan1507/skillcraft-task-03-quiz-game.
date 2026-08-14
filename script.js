const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used to style web pages?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correct: 1
    },
    {
        question: "Which language makes a webpage interactive?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correct: 2
    },
    {
        question: "Which symbol is used for an ID selector in CSS?",
        answers: [
            ".",
            "#",
            "@",
            "*"
        ],
        correct: 1
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionNumber = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function showQuestion() {
    selectedAnswer = null;

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionElement.textContent = current.question;

    answersElement.innerHTML = "";

    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer-btn");

        button.addEventListener("click", () => selectAnswer(index, button));

        answersElement.appendChild(button);
    });

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question";
}

function selectAnswer(index, button) {
    selectedAnswer = index;

    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
}

nextButton.addEventListener("click", () => {
    if (selectedAnswer === null) {
        alert("Please select an answer first!");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizElement.classList.add("hidden");
    resultElement.classList.remove("hidden");

    scoreElement.textContent =
        `You scored ${score} out of ${questions.length}!`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    resultElement.classList.add("hidden");
    quizElement.classList.remove("hidden");

    showQuestion();
}

showQuestion();
    
