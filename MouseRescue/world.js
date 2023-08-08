class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });

    // Put global variable here
  }

  // incoming data from scene below
  init(data) {
    this.cheese = data.cheese;
    this.health = data.health;
  }

  preload() {

    // this is the exported JSON map file
    this.load.tilemapTiledJSON("world", "assets/cityMap.json");

    
    this.load.image("building", "assets/Buildings32x32.png");
    this.load.image("street", "assets/Street32x32.png");
    this.load.image("pipoya", "assets/pipoya.png");


  }

  create() {
    console.log("*** world scene");
  
    // Create the map from main
    let map = this.make.tilemap({
      key: "world",
    });

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    let streetTiles = map.addTilesetImage("Street32x32", "street");
    let pipoyaTiles = map.addTilesetImage("pipoya", "pipoya");

    // Load in layers by layers
    let groundLayer = map.createLayer(
      "groundLayer",
      [buildingTiles, streetTiles, pipoyaTiles],
      0,
      0
    );

    let streetLayer = map.createLayer(
      "streetLayer",
      [buildingTiles, streetTiles, pipoyaTiles],
      0,
      0
    );

    let treeLayer = map.createLayer(
      "treeLayer",
      [buildingTiles, streetTiles, pipoyaTiles],
      0,
      0
    );

    let buildingLayer = map.createLayer(
      "buildingLayer",
      [buildingTiles, streetTiles, pipoyaTiles],
      0,
      0
    );

    // Add any text to the game
    this.add.text(10, 10, "Add any text here", {
      font: "30px Courier",
      fill: "#00FFFF",
    });
  } /////////////////// end of create //////////////////////////////

  update() {} /////////////////// end of update //////////////////////////////

  // Function to jump to room1
  room1(player, tile) {
    console.log("room1 function");
    this.scene.start("room1", {
      player: player,
      inventory: this.inventory,
    });
  }
} //////////// end of class world ////////////////////////
