/**
 * This JavaScript file handles the different aspects of the player (paddle).
 * Properties such as the player sprite and movement can be found here.
 * Possible future properties could be paddle upgrades or even downgrades.
 * */

function createPaddle() {
    paddle = game.add.sprite(game.world.width * 0.5, game.world.height - 5, "paddle");
    paddle.anchor.set(0.5, 1);
    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    paddle.body.immovable = true;
}

function paddleControls() {
    resetKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    resetKey.onDown.add(resetBall, this);

    //sets controls to match the mouse cursor
    if (playing) {
        paddle.x = game.input.x || game.world.width * 0.5;
    }
}