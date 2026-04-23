// =========================
// Quiz Settings
// =========================
const settings = {
    shuffle_questions: true,
    shuffle_options: true,
    time_limit_minutes: 60
};

// =========================
// Example Questions
// Replace with your JSON
// =========================
let questions = [
    {
        id: 1,
        question: "What is 2 + 2?",
        options: ["1", "2", "4", "5"],
        answer: "4"
    },
    {
        id: 2,
        question: "Capital of France?",
        options: ["Berlin", "Paris", "London", "Madrid"],
        answer: "Paris"
    }
];

// =========================
// Utility: Shuffle Array
// =========================
function shuffle(arr) {
    return arr
        .map(x => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(obj => obj.x);
}

// =========================
// Apply Settings
// =========================
if (settings.shuffle_questions) {
    questions = shuffle(questions);
}

let index = 0;
let score = 0;

// =========================
// Timer
// =========================
let timeLeft = settings.time_limit_minutes * 60;

function startTimer() {
    const timerDiv = document.getElementById("timer");

    const interval = setInterval(() => {
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;

        timerDiv.textContent = `Time Left: ${m}m ${s}s`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            endQuiz();
        }

        timeLeft--;
    }, 1000);
}

// =========================
// Load Question
// =========================
function loadQuestion() {
    const q = questions[index];

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    document.getElementById("question").textContent = q.question;

    let opts = q.options.slice();
    if (settings.shuffle_options) {
        opts = shuffle(opts);
    }

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    opts.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline-secondary w-100 text-start mb-2";
        btn.textContent = opt;

        btn.onclick = () => checkAnswer(opt);

        optionsDiv.appendChild(btn);
    });
}

// =========================
// Check Answer
// =========================
function checkAnswer(selected) {
    const q = questions[index];
    const feedback = document.getElementById("feedback");

    if (selected === q.answer) {
        score++;
        feedback.textContent = "Correct!";
        feedback.className = "text-success fw-bold";
    } else {
        feedback.textContent = `Wrong! Correct answer: ${q.answer}`;
        feedback.className = "text-danger fw-bold";
    }
}

// =========================
// Next Question
// =========================
document.getElementById("nextBtn").onclick = () => {
    document.getElementById("feedback").textContent = "";

    index++;

    if (index >= questions.length) {
        endQuiz();
    } else {
        loadQuestion();
    }
};

// =========================
// End Quiz
// =========================
function endQuiz() {
    document.body.innerHTML = `
        <div class="container mt-5">
            <div class="card shadow p-4 text-center">
                <h2>Quiz Finished</h2>
                <p>Your Score: ${score} / ${questions.length}</p>
            </div>
        </div>
    `;
}

// =========================
// Start Quiz
// =========================
startTimer();
loadQuestion();
