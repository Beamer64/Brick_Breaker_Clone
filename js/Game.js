/**
 * This JavaScript file is where aspects of the game it'self can be found,
 * Preloading assets that will be used will be found in the loadAssets function.
 * Various other mechanics for the game will also be located in this file.
 * */

function loadAssets() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = "#515151";

    game.load.image("black_paddle", "res/img/paddle.png");

    game.load.spritesheet("bricktable", "res/img/BB1.png", 32, 16);
    game.load.spritesheet("ball", "res/img/wobble.png", 20, 20);
    game.load.spritesheet("button", "res/img/button.png", 120, 40);

    game.load.audio("voided", "res/sounds/void.wav");
    game.load.audio("bounce", "res/sounds/padBounce.wav");
    game.load.audio("bgmusic", "res/sounds/BGmusic.mp3");
}

function gamePhysics() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;
}

function startGame() {
    startButton.destroy();
    ballOnPaddle = false;
    ball.animations.play("wobble");
    setBallVelocity();
    playing = true;
}

function loadAudio() {
    bgmusic = game.add.audio("bgmusic");
    bgmusic.volume = 0.2;
    bgmusic.loop = true;
    bgmusic.play();

    voided = game.add.audio("voided");
    voided.volume = 0.4;

    bounce = game.add.audio("bounce");
    bounce.volume = 0.4;
}

function randValues(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}