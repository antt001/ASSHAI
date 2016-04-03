import Phaser from 'phaser'
import SpawnManager from './SpawnManager'

export default class {
    constructor(gridSize, spawnManager) {
        this.gridSize = gridSize
        this.cells = new Array(gridSize)
        this.spawnManager = spawnManager
    }
    
    init() {
        for(let x = 0; x < this.gridSize; x++) {
            this.cells[x] = new Array(this.gridSize)
            for(let y = 0; y < this.gridSize; y++) {
                if(Math.random() > 0.8) {
                    this.cells[x][y] = true
                    this.spawnManager.spawnAt(x, y)
                } else {
                    this.cells[x][y] = false
                }
            }
        }
    }
    
    countNeighbours(x, y) {
        let count = 0
        for(let xOffset = x-1; xOffset <= x+1; xOffset++) {
            if(xOffset < 0 || xOffset >= this.gridSize)  continue //we're of the grid
            for(let yOffset = y-1; yOffset <= y+1; yOffset++) {
                if(yOffset < 0 || yOffset >= this.gridSize) continue //we're of the grid
                if(xOffset == x && yOffset == y) continue //this is not a neighbour
                if(this.cells[xOffset][yOffset]) count++
            }
        }
        return count
    }
    
    nextGeneration() {
        let newCells = new Array(this.gridSize)
        for(let x = 0; x < this.gridSize; x++) {
            newCells[x] = new Array(this.gridSize)
            for(let y = 0; y < this.gridSize; y++) {
                let neighbourCount = this.countNeighbours(x, y)
                newCells[x][y] = this.cells[x][y]
                if(this.cells[x][y]) { //It's alive!
                    //die if over or under populated 
                    if(neighbourCount != 2 && neighbourCount != 3) {
                        newCells[x][y] = false
                        this.spawnManager.dieAt(x, y)
                    }
                } else{ //Nothing here
                    //spawn if has 3 neighbours 
                    if(neighbourCount == 3) {
                        newCells[x][y] = true
                        this.spawnManager.spawnAt(x, y)
                    }
                }
            }
        }
        this.cells = newCells
    }

}