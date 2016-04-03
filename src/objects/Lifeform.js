import Phaser from 'phaser'

export default class extends Phaser.Sprite {

  constructor({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.scale.set(0.8)
    this.game.add.existing(this)
    this.spawn()
  }
  
  spawn() {
       this.animation = this.game.add.tween(this.scale, this.game, this.game.tweens).
            to({
                x: 1.1,
                y: 1.1
            }, 200, Phaser.Easing.Elastic.In, true).onComplete.addOnce(function (sprite, tween) {
                tween.to({
                    x: 1.00,
                    y: 1.00
                }, 100, Phaser.Easing.Elastic.Out, true);
            }, this)
  }
}
