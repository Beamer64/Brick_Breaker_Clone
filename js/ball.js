﻿/**
 * This javaScript file holds the various aspects and mechanics related to the ball.
 * Resetting the ball, ball collisions and ball properties can
 * be edited from this file.
 * */

function createBall() {
    ball = game.add.sprite(paddle.x, paddle.y - 27, "ball");
    ball.animations.add("wobble", [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
    ball.anchor.set(0.5);
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);
    ball.checkWorldBounds = true;
    ball.events.onOutOfBounds.add(ballLeaveScreen, this);
}

function ballLeaveScreen() {
    lives--;
    paddle.destroy();
    createPaddle(); //updates to a larger paddle after life loss
    if (lives) {
        livesText.setText("Lives: " + lives);
        lifeLostText.visible = true;
        resetBall();
    } else {
        alert("You lost, game over!");
        location.reload();
    }
}

function resetBall() {
    ballOnPaddle = true;
    ball.reset(paddle.x, paddle.y - 27);
    game.input.onDown.addOnce(function () {
        ballOnPaddle = false;
        ballRotation = true;
        lifeLostText.visible = false;
        ball.animations.play("wobble");
        setBallVelocity();
    }, this);
}

//sets ball velocity with x and y to random values
//between world parameters but will always shoot up
function setBallVelocity() {
    return ball.body.velocity.set(randValues(-600,
        600), randValues(-300, -game.world.height));
}