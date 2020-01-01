﻿/**
 * This javaScript file holds the various aspects and mechanics related to the ball.
 * Resetting the ball, ball collisions and ball properties can
 * be edited from this file.
 * */

function createBall() {
    ball = game.add.sprite(game.world.width * 0.5, game.world.height - 25, "ball");
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
    ball.reset(paddle.x, paddle.y - 20);
        game.input.onDown.addOnce(function () {
            lifeLostText.visible = false;
            ball.animations.play("wobble");
            setBallVelocity();
        }, this);
    }

//sets ball velocity with x and y to random values
//between world parameters but will always shoot up
function setBallVelocity() {
    return ball.body.velocity.set(randValues(-(game.world.width / 2),
        game.world.width), randValues(-150, -game.world.height));
}