var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 640,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [mainpage,storyline,howtoplay,beware,tutorial,floor1,floor2,floor3,gameover,win,showInventory]
};

var game = new Phaser.Game(config);
window.cheese = 0
window.heart = 3
window.plant = 0