import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBg.anchor.setTo(0.5)
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    this.loaderBar.anchor.setTo(0.5)
    
    this.load.setPreloadSprite(this.loaderBar)

    // load assets
    this.load.image('bgTile', 'assets/images/dirt.png')
    this.load.image('lifeform', 'assets/images/lifeform_small.png')
  }

  create () {
    this.state.start('Game')
  }

}
