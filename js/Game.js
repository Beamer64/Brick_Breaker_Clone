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

    game.load.image("brick_blue", "img/brick_blue.png");
    game.load.image("brick_green", "img/brick_green.png");
    game.load.image("brick_orange", "img/brick_orange.png");
    game.load.image("brick_purple", "img/brick_purple.png");
    game.load.image("brick_red", "img/brick_red.png");
    game.load.image("brick_yellow", "img/brick_yellow.png");
    game.load.image("brick_pink", "img/brick_pink.png");

    game.load.spritesheet("ball", "img/wobble.png", 20, 20);

    game.load.spritesheet("button", "img/button.png", 120, 40);
}

function gamePhysics() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;
}

function startGame() {
    startButton.destroy();
    ball.body.velocity.set(randValues(1, game.world.width), randValues(-1, -game.world.height));
    playing = true;
}

function randValues(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

function collisionHandle() {
    game.physics.arcade.collide(ball, paddle, ballHitPaddle);
    game.physics.arcade.collide(ball, bricks, ballHitBrick);
}