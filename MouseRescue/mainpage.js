class mainpage extends Phaser.Scene {
    constructor() {
      super({
        key: "mainpage",
      });
  
      // Put global variable here
    }
  
    preload() {
  
      this.load.image("mainpage","assets/mainpage.png");
      this.load.audio("bgmusic","assets/bgmusic.mp3");
      this.load.audio("damage","assets/damage.mp3");
      this.load.audio("collect","assets/collect.mp3");
    }
  
    create() {
      console.log("*** mainpage scene");

      window.music = this.sound.add("bgmusic",{loop: true}).setVolume(0.2);
      window.music.play();
  
      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'mainpage').setOrigin(0, 0);
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("ENTER");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to storyline scene");
          this.scene.start( "storyline");
        },
        this
      );
    //   this.sealsound = this.sound.add("seal");
    //     this.sealsound.play();
  
      }}
  
