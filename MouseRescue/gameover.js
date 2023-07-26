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

    // Add any sound and music here
    // ( 0 = mute to 1 is loudest )
    //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume
    // window.music.stop();
    
    // this.bgmSnd = this.sound.add('gameoverMusic').setVolume(0.1);
    // this.bgmSnd.play();
    // this.bgmSnd.loop = true;

    //this.music.play()
    //window.music = this.music

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
  
