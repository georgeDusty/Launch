const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
const newGame = document.querySelector(".new-game");
let totalScore = 0;
let playing = true;

const rollDiceFunction = function () {
  if (playing) {
    dice.className = "dice";
    let number = Math.ceil(Math.random() * 6);
    let activePlayer = document.querySelector(".active");
    let passivePlayer = document.querySelector(".passive");

    if (number === 1) {
      document.querySelector(".active .current-score").textContent = 0;
      totalScore = 0;
      activePlayer.classList.add("passive");
      activePlayer.classList.remove("active");
      passivePlayer.classList.add("active");
      passivePlayer.classList.remove("passive");
    } else if (number === 2) {
      dice.classList.add("dice-two");
    } else if (number === 3) {
      dice.classList.add("dice-three");
    } else if (number === 4) {
      dice.classList.add("dice-four");
    } else if (number === 5) {
      dice.classList.add("dice-five");
    } else if (number === 6) {
      dice.classList.add("dice-six");
    }

    if (number != 1) {
      totalScore += number;
    }

    if (
      Number(document.querySelector(".active .total-score").textContent) +
        totalScore >=
      50
    ) {
      document.querySelector(".active").classList.add("winner");
      document.querySelector(".active .player").classList.add("winner");
      const currentTotalScore = Number(
        document.querySelector(".active .total-score").textContent
      );
      document.querySelector(".active .total-score").textContent =
        currentTotalScore + totalScore;
      playing = false;
    }
    document.querySelector(".active .current-score").textContent = totalScore;
  }
};

const holdFunction = function () {
  if (playing) {
    const currentTotalScore = Number(
      document.querySelector(".active .total-score").textContent
    );
    document.querySelector(".active .total-score").textContent =
      currentTotalScore + totalScore;
    document.querySelector(".active .current-score").textContent = 0;
    totalScore = 0;
    let activePlayer = document.querySelector(".active");
    let passivePlayer = document.querySelector(".passive");
    activePlayer.classList.add("passive");
    activePlayer.classList.remove("active");
    passivePlayer.classList.add("active");
    passivePlayer.classList.remove("passive");
  }
};

const playAgain = function () {
  document.querySelectorAll(".card")[0].classList.add("active");
  document.querySelectorAll(".card")[0].classList.remove("passive");
  document.querySelectorAll(".card")[1].classList.add("passive");
  document.querySelectorAll(".card")[1].classList.remove("active");
  document.querySelector(".active").classList.remove("winner");
  document.querySelector(".active .player").classList.remove("winner");
  document.querySelector(".passive").classList.remove("winner");
  document.querySelector(".passive .player").classList.remove("winner");
  document.querySelector(".active .total-score").textContent = 0;
  document.querySelector(".active .current-score").textContent = 0;
  document.querySelector(".passive .total-score").textContent = 0;
  document.querySelector(".passive .current-score").textContent = 0;
  dice.className = "dice";
  totalScore = 0;
  playing = true;
};

hold.addEventListener("click", holdFunction);
rollDice.addEventListener("click", rollDiceFunction);
newGame.addEventListener("click", playAgain);
