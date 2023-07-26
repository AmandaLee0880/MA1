function updateInventory() {
    console.log("*** updateInventory()")
    // Emit events showInventory
    this.inventory = {}
    this.inventory.heart = window.heart
    this.inventory.cheese = window.cheese
     
    console.log('*** updateInventory() Emit event', this.inventory)
    this.invEvent = (event, data) =>  { this.scene.get('showInventory').events.emit(event, data); }
    this.invEvent("inventory", this.inventory);
}
function takeDamage(player,enemy) {
    console.log("*** enemy overlap main");
   
    // Shake screen
   this.cameras.main.shake(100);

    window.heart--;
    enemy.disableBody(true, true);
    //this.updateInventory()
    updateInventory.call(this)

  if (window.heart == 0){
    this.scene.start("gameover");
  }
}
function health(player,plant) {
    console.log("*** enemy overlap main");

    window.heart++;
    plant.disableBody(true, true);
    //this.updateInventory()
    updateInventory.call(this)
}