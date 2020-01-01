/**
 * This JavaScript file will handle all the collisions of the game.
 * Events made from collisions will also be placed here.
 * */

function collisionManager() {
    game.physics.arcade.collide(ball, paddle, ballHitPaddle);
    game.physics.arcade.collide(ball, bricks, ballHitBrick);
}

function ballHitBrick(ball, brick) {
    ball.animations.play("wobble");
    var killTween = game.add.tween(brick.scale);
    killTween.to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None);
    killTween.onComplete.addOnce(function () {
        brick.kill();
    }, this);
    killTween.start();
    score += 10;
    scoreText.setText("Points: " + score);
    if (score === brickInfo.count.row * brickInfo.count.col * 10) {
        alert("You won, cool.");
        location.reload();
    }
}

function ballHitPaddle(ball, paddle) {
    ball.animations.play("wobble");
    ball.body.velocity.x = -1 * 5 * (paddle.x - ball.x);
}