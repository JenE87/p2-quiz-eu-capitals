//getters
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const score = document.getElementById("score");

const questions = [
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
        "answers": ["Paernu", "Narva", "Tartu", "Tallin"],
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
    question.innerText = questions[questionIndex].question;
}

function loadAnswers() {
    answer0.innerText = questions[questionIndex].answers[0];
    answer1.innerText = questions[questionIndex].answers[1];
    answer2.innerText = questions[questionIndex].answers[2];
    answer3.innerText = questions[questionIndex].answers[3];
}

// STILL TO FIX: innerHTML does NOT show scoreTotal value correctly
function resumeQuiz() {
    let quizLength = questions.length;
    if (questionIndex < quizLength) {
        loadQuestion();
        loadAnswers();
    } else {
        questionContainer.innerHTML = "<h2>Congratulations! You finished the quiz and knew ${scoreTotal} of the 27 capitals of the EU.</h2>"
    }
}

function checkAnswer(answerSelected) {
    console.log("You selected: ", answerSelected);
    correctAnswer = questions[questionIndex].correct;
    if (answerSelected === correctAnswer) {
        console.log("Yes, your answer is correct");
        scoreTotal++;
        score.innerText = scoreTotal;
    }
    questionIndex++;
    resumeQuiz();
}

resumeQuiz();