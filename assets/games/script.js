let currentQuestionIndex = 0;
let score = 0;
let lives = 3; // Start with 3 lives
let isGameActive = false;
let selectedQuestions = [];
let selectedDifficulty = null;

let timeLeft; // Time per question in seconds
let timerInterval; // To store the interval ID

// Audio elements (using WAV files)
const startAudio = new Audio('assets/games/start.mp3');
const endAudio = new Audio('assets/games/end.wav');
const correctAudio = new Audio('assets/games/correct.wav');
const wrongAudio = new Audio('assets/games/wrong.wav');

const questionElement = document.getElementById("question");
const logoBody = document.querySelector(".logo-body");
const choiceButtons = document.querySelectorAll(".choice-btn");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const finalScoreElement = document.getElementById("final-score");
const livesElement = document.getElementById("lives"); // New element for lives
const headerContainer = document.getElementById("header-container");

const TIME_EASY = 10; // Time for easy questions
const TIME_MEDIUM = 20; // Time for medium questions
const TIME_HARD = 30; // Time for hard questions

let isAudioInitialized = false;
let isStartAudioPlaying = false; // New flag to track if start audio is playing

// Start audio function
function playStartAudio() {
    if (!isAudioInitialized) {
        startAudio.loop = true; // Loop the start audio
        startAudio.play().catch(() => {
            // Audio play failed (most likely due to autoplay policy)
        });
        isAudioInitialized = true;
        isStartAudioPlaying = true; // Start audio is playing
    }
}

// Listen for a user interaction to play the start audio
window.addEventListener('click', playStartAudio);
window.addEventListener('keypress', playStartAudio);

// Disable the start button initially
startButton.disabled = true;
startButton.classList.add("disabled"); // Add a CSS class to visually indicate the button is disabled

startButton.addEventListener("click", function () {
    if (selectedDifficulty) {
        stopStartAudio(); // Ensure the start audio is stopped when the game starts
        startGame();
        // Hide the difficulty buttons and start button
        startButton.classList.add("hidden");
        difficultyButtons.forEach(btn => btn.classList.add("hidden"));
        // Show the header container
        headerContainer.style.display = "flex";
    }
});

// Function to stop the start audio
function stopStartAudio() {
    startAudio.pause();
    startAudio.currentTime = 0;
    isStartAudioPlaying = false; // Update flag when start audio is stopped
}

// Difficulty Selection
difficultyButtons.forEach(button => {
    button.addEventListener("click", function () {
        difficultyButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");

        selectedDifficulty = button.id;

        startButton.disabled = false; // Enable the start button when a difficulty is selected
        startButton.classList.remove("disabled"); // Remove the CSS class for disabled state

        if (selectedDifficulty === "easy-btn") {
            selectedQuestions = [...easyQuestions];
        } else if (selectedDifficulty === "medium-btn") {
            selectedQuestions = [...mediumQuestions];
        } else if (selectedDifficulty === "hard-btn") {
            selectedQuestions = [...hardQuestions];
        }
    });
});

function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
}

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    lives = 3; // Reset lives for new game
    scoreElement.textContent = "Score: " + score;
    livesElement.textContent = "Lives: " + lives; // Display initial lives

    // Shuffle the selected questions
    selectedQuestions = shuffleQuestions(selectedQuestions);

    nextQuestion();
    isGameActive = true;

    // Show the game-related elements
    questionContainer.style.display = "block";
    choicesContainer.style.display = "block";
    resultContainer.style.display = "none"; // Hide the result container at the start

    // Hide the difficulty buttons and start button
    startButton.style.display = "none";
    difficultyButtons.forEach(btn => btn.style.display = "none");

    // Hide the logo-body when the game starts
    logoBody.style.display = "none";

    // Show the header container
    headerContainer.style.display = "flex";
}

function startTimer() {
    const currentQuestion = selectedQuestions[currentQuestionIndex - 1];

    // Set time based on the difficulty if the question is not of type 'sound'
    if (!currentQuestion.type.includes("sound")) {
        if (selectedDifficulty === "easy-btn") {
            timeLeft = TIME_EASY;
        } else if (selectedDifficulty === "medium-btn") {
            timeLeft = TIME_MEDIUM;
        } else if (selectedDifficulty === "hard-btn") {
            timeLeft = TIME_HARD;
        }

        timerElement.textContent = "Time left: " + timeLeft;

        // Clear any previous intervals
        clearInterval(timerInterval);

        // Set up a new interval to count down only if the question is not 'sound'
        timerInterval = setInterval(function () {
            timeLeft--;
            timerElement.textContent = "Time left: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                lives--; // Deduct a life for timeout
                livesElement.textContent = `Lives: ${lives}`; // Update lives display
                if (lives === 0) {
                    endGame();
                    return;
                }
                nextQuestion(); // Proceed to the next question
            }
        }, 1000);
    } else {
        timerElement.textContent = "Listening...";
    }
}

function nextQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length || currentQuestionIndex >= 100) {
        endGame(); // End game if 100 questions answered
        return;
    }

    const currentQuestion = selectedQuestions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    const questionImage = document.getElementById("question-image");
    if (currentQuestion.type.includes("image") && currentQuestion.image) {
        questionImage.src = currentQuestion.image;
        questionImage.style.display = "block";
    } else {
        questionImage.style.display = "none";
    }

    const questionSound = document.getElementById("question-sound");
    if (currentQuestion.type.includes("sound") && currentQuestion.sound) {
        questionSound.src = currentQuestion.sound;
        questionSound.style.display = "block";
        questionSound.play();
        clearInterval(timerInterval); // Pause the timer
    } else {
        questionSound.style.display = "none";
        questionSound.pause();
        questionSound.currentTime = 0;
    }

    choiceButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.onclick = () => checkAnswer(button.textContent);
    });

    currentQuestionIndex++;
    startTimer(); // Start the timer when a new question is displayed
}

function checkAnswer(selectedAnswer) {
    if (!isGameActive) return;

    const correctAnswer = selectedQuestions[currentQuestionIndex - 1].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
        scoreElement.textContent = "Score: " + score;
        correctAudio.play();
    } else {
        lives--; // Deduct a life for incorrect answer
        livesElement.textContent = `Lives: ${lives}`;
        wrongAudio.play();
        if (lives === 0) {
            endGame();
            return;
        }
    }

    clearInterval(timerInterval); // Stop the timer when an answer is chosen
    nextQuestion();
}

function endGame() {
    isGameActive = false;

    questionContainer.style.display = "none";
    choicesContainer.style.display = "none";
    headerContainer.style.display = "none";

    endAudio.play();

    logoBody.style.display = "block";
    finalScoreElement.textContent = "Your final score is: " + score;
    resultContainer.style.display = "block";

    startButton.textContent = "New Game";
    startButton.style.display = "block";

    startButton.disabled = true;
    startButton.classList.add("disabled");

    difficultyButtons.forEach(btn => {
        btn.style.display = "block";
        btn.disabled = false;
    });

    clearInterval(timerInterval);

    endAudio.onended = function () {
        setTimeout(() => {
            if (!isStartAudioPlaying) {
                startAudio.currentTime = 0;
                startAudio.play();
                isStartAudioPlaying = true;
            }
        }, 3000);
    };

    selectedDifficulty = null;
    difficultyButtons.forEach(btn => btn.classList.remove("selected"));
}

startButton.addEventListener("click", function () {
    if (selectedDifficulty) {
        stopStartAudio();
        startGame();
    }
});
