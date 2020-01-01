/**
 * This JavaScript file handles the bricks for the game. Properties such as
 * size, color, position etc can be easily adjusted here. Level difficulty
 * will also be handled in this file.*/

function initBricks() {
    brickInfo = {
        width: 50,
        height: 20,
        count: {
            row: randValues(1, 14),
            col: randValues(1, 7)
        },
        offset: {
            top: 50,
            left: 60
        },
        padding: 10
    };

    bricks = game.add.group();
    for (c = 0; c < brickInfo.count.col; c++) {
        for (r = 0; r < brickInfo.count.row; r++) {
            var brickX =
                r * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
            var brickY =
                c * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
            newBrick = game.add.sprite(brickX, brickY, randBrickColor());
            game.physics.enable(newBrick, Phaser.Physics.ARCADE);
            newBrick.body.immovable = true;
            newBrick.anchor.set(0.5);
            bricks.add(newBrick);
        }
    }
}

function randBrickColor() {
    var brickColors = [
        "brick_blue",
        "brick_green",
        "brick_orange",
        "brick_purple",
        "brick_red",
        "brick_yellow",
        "brick_pink"
    ];
    var newColor = brickColors[Math.floor(Math.random() * brickColors.length)];
    return newColor;
}