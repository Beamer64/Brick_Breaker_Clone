/**
 * This JavaScript file handles the bricks for the game. Properties such as
 * size, color, position etc can be easily adjusted here. Level difficulty
 * will also be handled in this file.*/

function initBricks() {
    brickInfo = {
        width: 50,
        height: 20,
        count: {
            row: 17,
            col: 4
        },
        offset: {
            top: 120,
            left: 100
        },
        padding: 12
    };

    bricks = game.add.group();
    for (c = 0; c < brickInfo.count.col; c++) {
        for (r = 0; r < brickInfo.count.row; r++) {
            randBrickLayout();
        }
    }
}

function randBrickLayout() {
    var brickX =
        r * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
    var brickY =
        c * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
    newBrick = game.add.sprite(brickX, brickY, "bricktable");
    newBrick.width = brickInfo.width;
    newBrick.height = brickInfo.height;
    newBrick.frame = randValues(1, 25);
    game.physics.enable(newBrick, Phaser.Physics.ARCADE);
    newBrick.body.immovable = true;
    newBrick.anchor.set(0.5);
    bricks.add(newBrick);
}