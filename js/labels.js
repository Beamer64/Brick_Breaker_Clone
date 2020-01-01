/**
 * This JavaScript file handles all the labels and buttons
 * for the game. Style, postion, color etc.. can be 
 * easily adjusted from here.
 * */

function labelStyle() {
    textStyle = { font: "18px Arial", fill: "#0095DD" };
}

function createScoreLabel() {
    scoreText = game.add.text(5, 5, "Points: 0", textStyle);
}

function createLivesLabel() {
    livesText = game.add.text(game.world.width - 5, 5, "Lives: " + lives, textStyle);
    livesText.anchor.set(1, 0);
}

function createLivesLostLabel() {
    lifeLostText = game.add.text(game.world.width * 0.5, game.world.height * 0.5, "Life lost, tap to continue", textStyle);
    lifeLostText.anchor.set(0.5);
    lifeLostText.visible = false;
}

function createStartButton() {
    startButton = game.add.button(game.world.width * 0.5, game.world.height * 0.5, "button", startGame, this, 1, 0, 2);
    startButton.anchor.set(0.5);
}