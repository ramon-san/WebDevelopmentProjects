/* Object for player one. */
const p1 = {
    score: 0,
    button: document.querySelector("#counter-player-1"),
    display: document.querySelector("#result-player-1")
}

/* Object for player two. */
const p2 = {
    score: 0,
    button: document.querySelector("#counter-player-2"),
    display: document.querySelector("#result-player-2")
}

let currentScore = 2;
const scoreMax = document.querySelector("#score-select");
const resetScore = document.querySelector("#reset-score");

/* Goals needed to win the match. */
scoreMax.addEventListener("change", () => {
    currentScore = scoreMax.value;
    console.log("Playing to: " + currentScore);
    resetScores(p1, p2);
});

/* Player 1 button Event Listner */
p1.button.addEventListener("click", () => (
    updateScore(p1, p2)
));

/* Player 2 button Event Listner */
p2.button.addEventListener("click", () => (
    updateScore(p2, p1)
));

/* Reset button Event Listner */
resetScore.addEventListener("click", () => (
    resetScores(p1, p2)
));

/* Update score function. */
function updateScore(player, opponent) {
    player.score++;
    player.display.innerText = player.score;
    if (player.score === Number(currentScore)) {
        endOfGame(player, opponent);
    }
}

/* End of game function. */
function endOfGame(winner, loser) {
    console.log("El ganador del partido es " + winner.button.id);
    winner.display.classList.add("winner");
    loser.display.classList.add("loser");
    winner.button.disabled = true;
    loser.button.disabled = true;
}

/* Reset score function. */
function resetScores(p1, p2) {
    for (let p of [p1, p2]) {
        p.button.disabled = false;
        p.score = 0;
        p.display.classList.remove("winner", "loser");
        p.display.innerText = p.score;
    }
}