
const rollDice = document.getElementById("roll-dice");
const editNames = document.getElementById("edit-name");
const gamePlayer1 = document.getElementById("player1");
const gamePlayer2 = document.getElementById("player2");
const diceGame1 = document.getElementById("dice1");
const diceGame2 = document.getElementById("dice2");
const letsPlay = document.getElementById("lets-play");
const scoreCount1 = document.getElementById("score-count1");
const scoreCount2 = document.getElementById("score-count2");


let player1;
let player2;

editNames.addEventListener("click", () => {
    player1 = prompt("player1");
    player2 = prompt("player2");

    if (gamePlayer1 && gamePlayer2) {
        gamePlayer1.innerText = player1;
        gamePlayer2.innerText = player2;
    }
});

rollDice.addEventListener("click", () => {
    if (gamePlayer1.innerText === "Player 1" && gamePlayer2.innerText === "Player 2") {
        alert("Input can not be empty");
    } else {
        let random1 = Math.ceil(Math.random() * 6);
        let random2 = Math.ceil(Math.random() * 6);

        diceGame1.src = "Images/dice" + random1 + ".png";
        diceGame2.src = "Images/dice" + random2 + ".png";

        // if (random1 > random2) {
        //     letsPlay.innerText = player1 + " wins!";
        // } else {
        //     letsPlay.innerText = player2 + " wins!";
        // }

        if (random1 > random2) {
            scoreCount1.innerText++;
        } else {
            scoreCount2.innerText++;
        }

        if (scoreCount1.innerText == 10) {
            letsPlay.innerText = player1 + " Wins The Game";
            scoreCount1.innerText = 0
            scoreCount2.innerText = 0
        } else if (scoreCount2.innerText == 10) {
            letsPlay.innerText = player2 + " Wins The Game";
            scoreCount1.innerText = 0
            scoreCount2.innerText = 0
        }
    }
});