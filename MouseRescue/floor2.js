class floor2 extends Phaser.Scene {

    constructor() {
        super({
            key: 'floor2'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here

        // Preload any images here

        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');

        this.load.spritesheet('main', 'assets/MainC full.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('enemy1', 'assets/Enemy full.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('enemy2', 'assets/Enemy full.png', { frameWidth: 64, frameHeight: 64 });



        this.load.tilemapTiledJSON("floor2", "assets/Floor2.tmj");

        this.load.image("pipoyaIMG", "assets/pipoya.png");
        this.load.image("Castle2IMG", "assets/Castle2.png");

        this.load.audio("damage","assets/damage.mp3");
        this.load.audio("collect","assets/collect.mp3");
    }



    create() {

        this.collectSnd= this.sound.add("collect")
        this.damageSnd= this.sound.add("damage")

        // Call to update inventory
 this.time.addEvent({
    delay: 100,
    callback: updateInventory,
    callbackScope: this,
    loop: false,
    });

        console.log('*** floor2 scene');

        var map = this.make.tilemap({ key: 'floor2' });

        let pipoyaTiles = map.addTilesetImage("pipoya", "pipoyaIMG");
        let castle2Tiles = map.addTilesetImage("Castle2", "Castle2IMG");


        let tilesArray = [pipoyaTiles, castle2Tiles]

        this.floor = map.createLayer("floor", tilesArray, 0, 0);
        this.walls = map.createLayer("walls", tilesArray, 0, 0);
        this.obsticals = map.createLayer("obsticals", tilesArray, 0, 0);

        this.cheese1 = this.physics.add.sprite (700,200,'cheese').setScale(0.5);
        this.cheese2 = this.physics.add.sprite (860,1090,'cheese').setScale(0.5);
        this.cheese3 = this.physics.add.sprite (70,200,'cheese').setScale(0.5);
        this.plant = this.physics.add.sprite (350,680,'plant').setScale(0.5);

        let start = map.findObject("objectLayer", obj => obj.name === "start");
        console.log(start.x, start.y)
        
        let enemy1 = map.findObject("objectLayer", obj => obj.name === "enemy1");
        let enemy2 = map.findObject("objectLayer", obj => obj.name === "enemy2");

        this.player = this.physics.add.sprite(start.x, start.y, "main").setScale(1).play("up")
        this.player.body.setSize(this.player.width * 0.7, this.player .height * 0.8)
        window.player =this.player
        this.cursors = this.input.keyboard.createCursorKeys();

        this.enemy1 = this.physics.add.sprite(enemy1.x, enemy1.y, "enemy1").setScale(1).play("enemy1-right")
        this.enemy2 = this.physics.add.sprite(enemy2.x, enemy2.y, "enemy2").setScale(1).play("enemy2-left")

        this.tweens.add({
            targets: this.enemy1,
            x: 280,
            flipX: true,
            yoyo: true,
            duration: 1800,
            repeat: -1
        })
        this.tweens.add({
            targets: this.enemy2,
            x: 320,
            flipX: true,
            yoyo: true,
            duration: 2700,
            repeat: -1
        })

        this.physics.add.overlap(
            this.player,
            [this.cheese1,this.cheese2,this.cheese3],
            this.collectCheese,
            null,
            this
          );
          this.physics.add.overlap(
            this.player,
            [this.plant],
            health,
            null,
            this
          );
          this.physics.add.overlap(
            this.player,
            [this.enemy1,this.enemy2],
            takeDamage,
            null,
            this
          );

        this.walls.setCollisionByExclusion(-1, true)
        this.physics.add.collider(this.player, this.walls);
        this.obsticals.setCollisionByExclusion(-1, true)
        this.physics.add.collider(this.player, this.obsticals);

        this.cameras.main.startFollow(this.player);

        this.cheeseCollected = this.add
         .text(20, 46, "Cheese collected " + window.cheese,{
          fontSize: "20px",
          fill: "#f5f607",
         })
         .setScrollFactor(0);

         console.log("showInventory");

    // start another scene in parallel
    this.scene.launch("showInventory");
    }



    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-400)
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(400)
            this.player.anims.play('right', true);
        }
        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-400)
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityY(400)
            this.player.anims.play('down', true);
        } else {
            this.player.setVelocity(0);
            this.player.anims.stop()
        }
        if (this.player.x > 830 && this.player.x < 862 &&
            this.player.y < 193 && this.player.y > 161){
              console.log("jump to floor three")
              this.floor3();
            }
    }

    collectCheese (player,cheese1) {
        console.log("collectCheese")
        this.collectSnd.play();

        window.cheese++

        cheese1.disableBody(true, true);
        this.cheeseCollected.setText("Cheese collected " + window.cheese );
    }
    health (player,plant) {
        console.log("health")

        window.plant++

        plant.disableBody(true, true);
    }


    floor3(player, tile) {
        console.log("floor3 function");
        this.scene.start("floor3")
      }
    }