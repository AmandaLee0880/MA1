class tutorial extends Phaser.Scene {

    constructor() {
        super({
            key: 'tutorial'
        });

        // Put global variable here
        this.cheese = 0
        this.health = 3
        this.heart1;
        this.heart2;
        this.heart3;
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



        this.load.tilemapTiledJSON("tutorial", "assets/Tutorial.tmj");

        this.load.image("pipoyaIMG", "assets/pipoya.png");
        this.load.image("Castle2IMG", "assets/Castle2.png");
        this.load.image('heart', 'assets/heart.png');
        this.load.image('cheese', 'assets/cheese.png');
        this.load.image('plant', 'assets/plant.png');
    }



    create() {

 // Call to update inventory
 this.time.addEvent({
    delay: 100,
    callback: updateInventory,
    callbackScope: this,
    loop: false,
    });

        console.log('*** tutorial scene');
        console.log ("this.cheese",this.cheese)
        console.log ("this.heath",this.health)

        var map = this.make.tilemap({ key: 'tutorial' });

        let pipoyaTiles = map.addTilesetImage("pipoya", "pipoyaIMG");
        let castle2Tiles = map.addTilesetImage("Castle2", "Castle2IMG");


        let tilesArray = [pipoyaTiles, castle2Tiles]

        this.floor = map.createLayer("floor", tilesArray, 0, 0);
        this.walls = map.createLayer("walls", tilesArray, 0, 0);
        this.obsticals = map.createLayer("obsticals", tilesArray, 0, 0);

        // this.heart1 = this.add.image (30,20,'heart').setScrollFactor(0).setScale(0.5);
        // this.heart2 = this.add.image (70,20,'heart').setScrollFactor(0).setScale(0.5);
        // this.heart3 = this.add.image (110,20,'heart').setScrollFactor(0).setScale(0.5);
        this.cheese1 = this.physics.add.sprite (800,250,'cheese').setScale(0.5);
        this.cheese2 = this.physics.add.sprite (130,620,'cheese').setScale(0.5);
        this.cheese3 = this.physics.add.sprite (800,1050,'cheese').setScale(0.5);
        this.plant = this.physics.add.sprite (700,620,'plant').setScale(0.5);
       
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('main',
                { start: 105, end: 112 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('main',
                { start: 131, end: 138 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('main',
                { start: 118, end: 125 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('main',
                { start: 144, end: 151 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'enemy1-up',
            frames: this.anims.generateFrameNumbers('enemy1',
                { start: 105, end: 112 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'enemy1-down',
            frames: this.anims.generateFrameNumbers('enemy1',
                { start: 131, end: 138 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'enemy1-left',
            frames: this.anims.generateFrameNumbers('enemy1',
                { start: 118, end: 125 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'enemy1-right',
            frames: this.anims.generateFrameNumbers('enemy1',
                { start: 144, end: 151 }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'enemy2-up',
            frames: this.anims.generateFrameNumbers('enemy2',
                { start: 105, end: 112 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'enemy2-down',
            frames: this.anims.generateFrameNumbers('enemy2',
                { start: 131, end: 138 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'enemy2-left',
            frames: this.anims.generateFrameNumbers('enemy2',
                { start: 118, end: 125 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'enemy2-right',
            frames: this.anims.generateFrameNumbers('enemy2',
                { start: 144, end: 151 }),
            frameRate: 6,
            repeat: -1
        });

        let start = map.findObject("objectLayer", obj => obj.name === "start");
        let enemy1 = map.findObject("objectLayer", obj => obj.name === "enemy1");
        let enemy2 = map.findObject("objectLayer", obj => obj.name === "enemy2");
        console.log(start.x, start.y)

        

        this.player = this.physics.add.sprite(start.x, start.y, "main").setScale(1).play("up")
        this.player.body.setSize(this.player.width * 0.7, this.player .height * 0.8)
        window.player =this.player
        this.cursors = this.input.keyboard.createCursorKeys();

        this.enemy1 = this.physics.add.sprite(enemy1.x, enemy1.y, "enemy1").setScale(1).play("enemy1-left")
        this.enemy2 = this.physics.add.sprite(enemy2.x, enemy2.y, "enemy2").setScale(1).play("enemy2-right")
        
        this.tweens.add({
            targets: this.enemy1,
            x: 200,
            flipX: true,
            yoyo: true,
            duration: 4000,
            repeat: -1
        })
        this.tweens.add({
            targets: this.enemy2,
            x: 700,
            flipX: true,
            yoyo: true,
            duration: 4000,
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
         .text(20, 46, "Cheese collected 0",{
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
        if (this.player.x > 464 && this.player.x < 476 &&
            this.player.y < 280 && this.player.y > 220){
              console.log("jump to floor one")
              this.floor1();
            }

if(this.enemyCollision >= 3) {
    this.scene.start("gameover");
}
    }

    collectCheese (player,cheese1) {
        console.log("collectCheese")

        window.cheese++

        cheese1.disableBody(true, true);
        this.cheeseCollected.setText("Cheese collected " + window.cheese );
    }
    health (player,plant) {
        console.log("health")

        window.plant++

        plant.disableBody(true, true);
    }


    floor1(player, tile) {
        console.log("floor1 function");
        this.scene.start("floor1",{
            cheese : this.cheese,
            health : this.health
        });
      }
}