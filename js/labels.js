/**
 * This JavaScript file handles all the labels and buttons
 * for the game. Style, postion, color etc.. can be 
 * easily adjusted from here.
 * */

function createLabels() {
    labelStyle();
    createScoreLabel(); 
    createLivesLabel(); 
    createLivesLostLabel(); 
    createVelocityLabel();
}

function labelStyle() {
    textStyle = { font: "18px Arial", fill: "#BD0900" };
}

function createScoreLabel() {
    scoreText = game.add.text(5, 5, "Points: 0", textStyle);
}

function createLivesLabel() {
    livesText = game.add.text(game.world.width - 5, 5, "Lives: " + lives, textStyle);
    livesText.anchor.set(1, 0);
}

function createLivesLostLabel() {
    lifeLostText = game.add.text(game.world.width * 0.5, game.world.height * 0.5, "Life lost, click to continue", textStyle);
    lifeLostText.anchor.set(0.5);
    lifeLostText.visible = false;
}

function createStartButton() {
    startButton = game.add.button(game.world.width * 0.5, game.world.height * 0.5, "button", startGame, this, 1, 0, 2);
    startButton.anchor.set(0.5);
}

function createVelocityLabel() {
    velocty = game.add.text(game.world.width / 2, 5, "Velocity: ", textStyle);
    velocty.anchor.set(0.5, 0);
}

function setVelocityLabel() {
    velocty.setText("Velocity x: " + ball.body.velocity.x + " y: " + ball.body.velocity.y);
}