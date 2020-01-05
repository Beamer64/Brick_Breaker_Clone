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
    voided.play();
    destroyBrick(brick);
    setScore();
}

function ballHitPaddle(ball, paddle) {
    ball.animations.play("wobble");
    bounce.play();
    ball.body.velocity.x = -1 * 5 * (paddle.x - ball.x);
}