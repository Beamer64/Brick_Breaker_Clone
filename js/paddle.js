﻿/**
 * This JavaScript file handles the different aspects of the player (paddle).
 * Properties such as the player sprite and movement can be found here.
 * Possible future properties could be paddle upgrades or even downgrades.
 * */

function createPaddle() {
    paddle = game.add.sprite(game.world.width * 0.5, game.world.height - 5, paddleSize());
    paddle.anchor.set(0.5, 1);
    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    paddle.body.immovable = true;
}

function paddleControls() {
    //press 1 on keyboard resets the ball to the paddle
    resetKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    resetKey.onDown.add(resetBall, this);

    //sets controls to match the mouse cursor
    if (playing) {
        paddle.x = game.input.x || game.world.width * 0.5;
        if (paddle.x + (paddle.body.width / 2) > game.world.width) {
            paddle.x = game.world.width - (paddle.body.width / 2);
        }
        //keep paddle on screen
        else if (paddle.x - (paddle.body.width / 2) < 0) {
            paddle.x = paddle.body.width / 2;
        }

        if (ballOnPaddle) {
            ballRotation = false;
            ball.x = paddle.x;
        }
        if (ballRotation) {
            ball.body.rotation += randValues(-20, 20);
        }
    }
}

//increase paddle size to larger sprite on life loss
function paddleSize() {
    switch (lives) {
        case 3:
            return "paddleSmall";
            break;
        case 2:
            return "paddleMedium";
            break;
        case 1:
            return "paddleLarge";
            break;
    }
}