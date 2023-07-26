class beware extends Phaser.Scene {
    constructor() {
      super({
        key: "beware",
      });
  
      // Put global variable here
    }
  
    preload() {
  
      this.load.image("beware","assets/beware.png");
  
    }
  
    create() {
      console.log("*** beware scene");
  
      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'beware').setOrigin(0, 0);
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("ENTER");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to tutorial scene");
          this.scene.start( "tutorial");
        },
        this
      );
    //   this.sealsound = this.sound.add("seal");
    //     this.sealsound.play();
  
      }}
  
