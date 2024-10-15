let currentQuestionIndex = 0;
let score = 0;
let lives = 3; // Start with 3 lives
let isGameActive = false;
let selectedQuestions = [];
let selectedDifficulty = null;

let timeLeft; // Time per question in seconds
let timerInterval; // To store the interval ID

// Audio elements (using WAV files)
const startAudio = new Audio('start.mp3');
const endAudio = new Audio('end.wav');
const correctAudio = new Audio('correct.wav');
const wrongAudio = new Audio('wrong.wav');

const questionElement = document.getElementById("question");
const choiceButtons = document.querySelectorAll(".choice-btn");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const infoContainer = document.getElementById("info");
const resultContainer = document.getElementById("result-container");
const finalScoreElement = document.getElementById("final-score");
const livesElement = document.getElementById("lives"); // New element for lives

const TIME_EASY = 10; // Time for easy questions
const TIME_MEDIUM = 20; // Time for medium questions
const TIME_HARD = 30; // Time for hard questions

// Play the start audio when the page loads with user interaction
let isAudioInitialized = false;

// Start audio function
function playStartAudio() {
    if (!isAudioInitialized) {
        startAudio.loop = true; // Loop the start audio
        startAudio.play().catch(() => {
            // Audio play failed (most likely due to autoplay policy)
            // User interaction is needed to play sound
        });
        isAudioInitialized = true;
    }
}

// Listen for a user interaction to play the start audio
window.addEventListener('click', playStartAudio);
window.addEventListener('keypress', playStartAudio);

// Disable the start button initially
startButton.disabled = true;
startButton.classList.add("disabled"); // Add a CSS class to visually indicate the button is disabled

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

startButton.addEventListener("click", function () {
    if (selectedDifficulty) {
        startAudio.pause(); // Stop the start audio when the game starts
        startAudio.currentTime = 0; // Reset the audio to the beginning
        startGame();
        startButton.classList.add("hidden");
        difficultyButtons.forEach(btn => btn.classList.add("hidden"));
    }
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
    infoContainer.style.display = "block";
    resultContainer.style.display = "none"; // Hide the result container at the start
}

function startTimer() {
    // Set time based on the difficulty
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

    // Set up a new interval to count down
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
}

function nextQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length || currentQuestionIndex >= 100) {
        endGame(); // End game if 100 questions answered
        return;
    }

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

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
        correctAudio.play(); // Play correct answer sound
    } else {
        lives--; // Deduct a life for incorrect answer
        livesElement.textContent = `Lives: ${lives}`; // Update lives display
        wrongAudio.play(); // Play wrong answer sound
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

    // Hide the game elements
    questionContainer.style.display = "none";
    choicesContainer.style.display = "none";
    infoContainer.style.display = "none";

    // Play end audio
    endAudio.play();

    // Show the result
    finalScoreElement.textContent = "Your final score is: " + score;
    resultContainer.style.display = "block";

    // Change the start button to 'New Game' and show it
    startButton.textContent = "New Game";
    startButton.classList.remove("hidden");

    // Disable the start button until a difficulty is selected again
    startButton.disabled = true;
    startButton.classList.add("disabled");

    // Show the difficulty buttons and reset selected difficulty
    difficultyButtons.forEach(btn => {
        btn.classList.remove("hidden"); // Make difficulty buttons visible again
        btn.disabled = false; // Enable difficulty buttons if needed
    });

    // Stop the timer
    clearInterval(timerInterval);

    // Wait for the end audio to finish before restarting the start audio
    endAudio.onended = function() {
        setTimeout(() => {
            startAudio.currentTime = 0; // Reset the audio to the beginning
            startAudio.play(); // Play the start audio again
        }, 7000); // 3-second gap
    };

    selectedDifficulty = null; // Reset difficulty for a new game
    difficultyButtons.forEach(btn => btn.classList.remove("selected")); // Clear any selected difficulty
}



