/**
 * This JavaScript file is where aspects of the game it'self can be found,
 * Preloading assets that will be used will be found in the loadAssets function.
 * Various other mechanics for the game will also be located in this file.
 * */

function loadAssets() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = "#eee";

    game.load.image("paddle", "img/paddle.png");

    game.load.spritesheet("bricktable", "img/BB6.png", 32, 16);

    game.load.spritesheet("ball", "img/wobble.png", 20, 20);

    game.load.spritesheet("button", "img/button.png", 120, 40);
}

function gamePhysics() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;
}

function startGame() {
    startButton.destroy();
    ball.animations.play("wobble");
    setBallVelocity();
    playing = true;
}

function randValues(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
} 