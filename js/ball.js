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
        alert("You won the game, congratulations!");
        location.reload();
    }
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

function ballHitPaddle(ball, paddle) {
    ball.animations.play("wobble");
    ball.body.velocity.x = -1 * 5 * (paddle.x - ball.x);
}

function resetBall() {
    ball.reset(game.world.width * 0.5, game.world.height - 25);
    paddle.reset(game.world.width * 0.5, game.world.height - 5);
    if (lives <= 3) {
        game.input.onDown.addOnce(function () {
            lifeLostText.visible = false;
            ball.body.velocity.set(randValues(1, game.world.width), randValues(-1, -game.world.height));
        }, this);
    }
    else {
        ball.body.velocity.set(randValues(1, game.world.width), randValues(-1, -game.world.height));
    }
}