class storyline extends Phaser.Scene {
    constructor() {
      super({
        key: "storyline",
      });
  
      // Put global variable here
    }
  
    preload() {
  
      this.load.image("storyline","assets/storyline.png");
  
    }
  
    create() {
      console.log("*** storyline scene");
  
      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'storyline').setOrigin(0, 0);
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("ENTER");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to howtoplay scene");
          this.scene.start( "howtoplay");
        },
        this
      );
    //   this.sealsound = this.sound.add("seal");
    //     this.sealsound.play();
  
      }}
  
