import Phaser from 'phaser'
import Lifeform from './Lifeform'

export default class {
    constructor(game, gridSize, cellSize) {
        this.game = game
        this.gridSize = gridSize
        this.cellSize = cellSize
        this.centerOffset = cellSize / 2
        this.spawns = {}
    }
    
    spawnAt(x, y) {
        this.spawns[x * this.gridSize + y] = new Lifeform({
        game: this.game,
        x: x * this.cellSize + this.centerOffset,
        y: y * this.cellSize + this.centerOffset,
        asset: 'lifeform'
        })
        
    }
    
    dieAt(x, y) {
        if(this.spawns[x * this.gridSize + y] != undefined) {
            this.spawns[x * this.gridSize + y].destroy()
        }  
    }
}