class gameover extends Phaser.Scene {
  constructor() {
    super({
      key: "gameover",
    });

    // Put global variable here
  }

  preload() {
    this.load.image('gameover','assets/gameover.png');
    // this.load.audio('gameoverMusic','assets/gameover.mp3');
  }

  create() {
    console.log("*** gameover scene");

    window.music.stop();

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'gameover').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("ENTER");

    // On spacebar event, call the world scene
    spaceDown.on("down", function () {
    console.log("Jump to tutorial scene");
    window.heart = 3;
    window.cheese = 0;
    
    this.scene.start("tutorial");
      },
      this
    );
  }
}
  
