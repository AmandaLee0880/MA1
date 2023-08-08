class win extends Phaser.Scene {
    constructor() {
      super({
        key: "win",
      });
  
      // Put global variable here
    }
  
    preload() {
  
      this.load.image("win","assets/win.png");
  
    }
  
    create() {
      console.log("*** win scene");
  
      window.music.stop();
      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'win').setOrigin(0, 0);
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("ENTER");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to mainpage scene");
          this.scene.start( "mainpage");
        },
        this
      );
  
      }}
  
