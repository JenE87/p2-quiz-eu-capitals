//getters
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const score = document.getElementById("score");
const scoreContainer = document.getElementById("score-container");
const endMessage = document.getElementById("end-message");
const quizEndText = document.getElementById("quiz-end-text");
const restartBtn = document.getElementById("restart-btn");

const answerButtons = [answer0, answer1, answer2, answer3];

answerButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => checkAnswer(index));
});

const originalQuestions = [
    {
        "question": "What is the capital of Austria?",
        "answers": ["Salzburg", "Vienna", "Innsbruck", "Graz"],
        "correct": 1
    },
    {
        "question": "What is the capital of Belgium?",
        "answers": ["Brussels", "Ghent", "Antwerp", "Bruges"],
        "correct": 0
    },
    {
        "question": "What is the capital of Bulgaria?",
        "answers": ["Varna", "Pleven", "Burgas", "Sofia"],
        "correct": 3
    },
    {
        "question": "What is the capital of Croatia?",
        "answers": ["Split", "Zagreb", "Pula", "Zadar"],
        "correct": 1
    },
        {
        "question": "What is the capital of Cyprus?",
        "answers": ["Larnaca", "Limassol", "Nicosia", "Paphos"],
        "correct": 2
    },
    {
        "question": "What is the capital of Czechia?",
        "answers": ["Liberec", "Ostrava", "Prague", "Brno"],
        "correct": 2
    },
    {
        "question": "What is the capital of Denmark?",
        "answers": ["Copenhagen", "Aarhus", "Odense", "Aalborg"],
        "correct": 0
    },
    {
        "question": "What is the capital of Estonia?",
        "answers": ["Paernu", "Narva", "Tartu", "Tallinn"],
        "correct": 3
    },
    {
        "question": "What is the capital of Finland?",
        "answers": ["Oulu", "Turku", "Helsinki", "Rovaniemi"],
        "correct": 2
    },
    {
        "question": "What is the capital of France?",
        "answers": ["Paris", "Lyon", "Nice", "Bordeaux"],
        "correct": 0
    },
    {
        "question": "What is the capital of Germany?",
        "answers": ["Munich", "Hamburg", "Cologne", "Berlin"],
        "correct": 3
    },
    {
        "question": "What is the capital of Greece?",
        "answers": ["Heraklion", "Athens", "Thessaloniki", "Patras"],
        "correct": 1
    },
    {
        "question": "What is the capital of Hungary?",
        "answers": ["Szeged", "Miskolc", "Debrecen", "Budapest"],
        "correct": 3
    },
    {
        "question": "What is the capital of Ireland?",
        "answers": ["Kilkenny", "Galway", "Dublin", "Cork"],
        "correct": 2
    },
    {
        "question": "What is the capital of Italy?",
        "answers": ["Venice", "Milan", "Naples", "Rome"],
        "correct": 3
    },
    {
        "question": "What is the capital of Latvia?",
        "answers": ["Riga", "Jelgava", "Daugavpils", "Ventspils"],
        "correct": 0
    },
    {
        "question": "What is the capital of Lithuania?",
        "answers": ["Alytus", "Klaipeda", "Vilnius", "Kaunas"],
        "correct": 2
    },
    {
        "question": "What is the capital of Luxembourg?",
        "answers": ["Dudelange", "Luxembourg", "Differdange", "Wiltz"],
        "correct": 1
    },
    {
        "question": "What is the capital of Malta?",
        "answers": ["Victoria", "Bormla", "Valetta", "Zejtun"],
        "correct": 2
    },
    {
        "question": "What is the capital of Netherlands?",
        "answers": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
        "correct": 0
    },
    {
        "question": "What is the capital of Poland?",
        "answers": ["Poznan", "Krakow", "Wroclaw", "Warsaw"],
        "correct": 3
    },
    {
        "question": "What is the capital of Portugal?",
        "answers": ["Braga", "Funchal", "Porto", "Lisbon"],
        "correct": 3
    },
    {
        "question": "What is the capital of Romania?",
        "answers": ["Cluj-Napoca", "Bucharest", "Constanta", "Sibiu"],
        "correct": 1
    },
    {
        "question": "What is the capital of Slovakia?",
        "answers": ["Košice", "Poprad", "Bratislava", "Trnava"],
        "correct": 2
    },
    {
        "question": "What is the capital of Slovenia?",
        "answers": ["Maribor", "Ljubljana", "Ptuj", "Celje"],
        "correct": 1
    },
    {
        "question": "What is the capital of Spain?",
        "answers": ["Madrid", "Barcelona", "Valencia", "Seville"],
        "correct": 0
    },
    {
        "question": "What is the capital of Sweden?",
        "answers": ["Malmö", "Gothenburg", "Uppsala", "Stockholm"],
        "correct": 3
    },
];

let questionIndex = 0;
let scoreTotal = 0;

function loadQuestion() {
    question.textContent = questions[questionIndex].question;
}

function loadAnswers() {
    for (let i = 0; i< 4; i++) {
        document.getElementById(`answer${i}`).textContent = questions[questionIndex].answers[i];
    }
}

function resumeQuiz() {
    if (questionIndex < questions.length) {
        loadQuestion();
        loadAnswers();
    } else {
        quizEndText.textContent = `Congratulations! You finished the quiz with a score of ${scoreTotal}/${questions.length}.`
        endMessage.classList.remove("hidden");
        questionContainer.classList.add("hidden");
        scoreContainer.classList.add("hidden");
    }
}

function checkAnswer(answerSelected) {
    const correctAnswer = questions[questionIndex].correct;
    const selectedButton = document.getElementById(`answer${answerSelected}`);

    if (answerSelected === correctAnswer) {
        scoreTotal++;
        score.innerText = scoreTotal;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }

    // Disable buttons temporarily
    for (let i = 0; i < 4; i++) {
        document.getElementById(`answer${i}`).disabled = true;
    }

    // Pause the quiz before going to the next question
    setTimeout(() => {
        // Give visual feedback
        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`answer${i}`);
            btn.classList.remove("correct", "incorrect");
            btn.disabled = false;
        }
        questionIndex++;
        resumeQuiz();
    }, 500);
}

// Randomize Questions
const questions = originalQuestions.sort(() => Math.random() - 0.5);

resumeQuiz();

// Restart of the quiz by clicking the restart the quiz button
restartBtn.addEventListener("click", () => {
    // Shuffle questions again
    questions.sort(() => Math.random() -0.5);

    // Reset values
    questionIndex = 0;
    scoreTotal = 0;
    score.textContent = 0;

    // Hide end of quiz message, show quiz and score again
    endMessage.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    scoreContainer.classList.remove("hidden");

    resumeQuiz();
});

resumeQuiz();