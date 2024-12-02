const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Who is the father of Computers?",
        answers: [
            { text: "James Gosling", correct: false },
            { text: "Dennis Ritchie", correct: false },
            { text: "Bjarne Stroustrup", correct: false },
            { text: "Charles Babbage", correct: true },
        ]
    },
    {
        question: " Which of the following language does the computer understand?",
        answers: [
            { text: " Computer understands only C Language", correct: false },
            { text: "Computer understands only Assembly Language", correct: false },
            { text: "Computer understands only Binary Language", correct: true },
            { text: "Computer understands only BASIC", correct: false },
        ]
    },
    {
        question: "Which of the following is not a characteristic of a computer?",
        answers: [
            { text: "Versatility", correct: false },
            { text: "Accuracy", correct: false },
            { text: "Diligence", correct: false },
            { text: "I.Q.", correct: true },
        ]
    },
    {
        question: "What is an object in c++?",
        answers: [
            { text: "It is a function of class", correct: false },
            { text: "It is an instance of a class", correct: true },
            { text: "It is the data type of class", correct: false },
            { text: "It is part of syntax of the class", correct: false },
        ]
    },
    {
        question: "Which of the following is not a characteristic of a computer?",
        answers: [
            { text: "Kotlin", correct: false },
            { text: "SmallTalk", correct: true },
            { text: "Java", correct: false },
            { text: "C++", correct: false },
        ]
    },
    {
        question: "Which feature of OOP indicates code reusability?",
        answers: [
            { text: "Abstraction", correct: false },
            { text: "Polymorphism", correct: false },
            { text: "Encapsulation", correct: false },
            { text: "Inheritance", correct: true },
        ]
    },
    {
        question: "Which among the following doesn't come under OOP concept?",
        answers: [
            { text: "Data hiding", correct: false },
            { text: "Message passing", correct: false },
            { text: "Data binding", correct: true },
            { text: "Platform independent", correct: false },
        ]
    },
    {
        question: " In multilevel inheritance, which is the most significant feature of OOP used?",
        answers: [
            { text: "Code reusability", correct: true },
            { text: "Code efficiency", correct: false },
            { text: "Code readability", correct: false },
            { text: "Flexibility", correct: false },

        ]
    },
    {
        question: "Which of the following is not true about polymorphism?",
        answers: [
            { text: "Increases overhead of function definition always", correct: false },
            { text: "Helps in redefining the same functionality", correct: false },
            { text: "It is feature of OOP", correct: false },
            { text: "Ease in readability of program", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();;
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();