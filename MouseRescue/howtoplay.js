class howtoplay extends Phaser.Scene {
    constructor() {
      super({
        key: "howtoplay",
      });
  
      // Put global variable here
    }
  
    preload() {
  
      this.load.image("howtoplay","assets/howtoplay.png");
  
    }
  
    create() {
      console.log("*** howtoplay scene");
  
      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'howtoplay').setOrigin(0, 0);
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("ENTER");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to beware scene");
          this.scene.start( "beware");
        },
        this
      );
    //   this.sealsound = this.sound.add("seal");
    //     this.sealsound.play();
  
      }}
  
