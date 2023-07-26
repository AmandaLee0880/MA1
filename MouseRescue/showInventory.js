class showInventory extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'showInventory',
        active: false });
    }

    init(data) {
        this.player = data.player;
        this.inventory = data.inventory;
    }

    preload(){
        //Load heart image
        this.load.image('heart', 'assets/heart.png');
    }
 
   create () {

        //Place hearts at the top screen
        console.log("***showInventory");
        this.scene.bringToTop("showInventory");

       // Setup heart but visible to false
       this.heart1 = this.add.image (30,20,'heart').setScrollFactor(0).setVisible(false).setScale(0.5);
        this.heart2 = this.add.image (70,20,'heart').setScrollFactor(0).setVisible(false).setScale(0.5);
        this.heart3 = this.add.image (110,20,'heart').setScrollFactor(0).setVisible(false).setScale(0.5);


               
       // Recv an event, call the method
       this.events.on('inventory', this.updateScreen, this)
        
    } //end of create

    updateScreen(data){
        console.log('Received event inventory', data);

        switch ( data.heart ) {

            case 3: 
                this.heart1.setVisible(true)
                this.heart2.setVisible(true)
                this.heart3.setVisible(true)
                break;
    
            case 2:
                this.heart1.setVisible(true)
                this.heart2.setVisible(true)
                this.heart3.setVisible(false)
                break;
    
            case 1:
                this.heart1.setVisible(true)
                this.heart2.setVisible(false)
                this.heart3.setVisible(false)
                break;
             
            case 0:
                this.heart1.setVisible(false)
                this.heart2.setVisible(false)
                this.heart3.setVisible(false)
    
                break;    
    
            default:
            break;
        }
    
    }

} // end of class
