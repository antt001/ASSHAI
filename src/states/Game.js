import Phaser from 'phaser'
import SpawnManager from '../objects/SpawnManager'
import Lifeform from '../objects/Lifeform'
import Grid from '../objects/Grid'

export default class extends Phaser.State {
  init () {
      this.cellSize = 25
      this.gridSize = Math.ceil(Math.min(this.game.width, this.game.height) / this.cellSize)
  }
  preload () {}

  create () {
    let tilesprite = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'bgTile')
    this.spawnManager = new SpawnManager(this, this.gridSize, this.cellSize)
    this.grid = new Grid(this.gridSize, this.spawnManager)
    this.grid.init()
    
    let banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'Gmae of Life [Phaser]')
    banner.font = 'Nunito'
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.anchor.setTo(0.5)
    banner.alpha = 0.6
    banner.bringToTop()
    this.time.events.repeat(Phaser.Timer.SECOND, 100, this.grid.nextGeneration, this.grid);
  }

}
