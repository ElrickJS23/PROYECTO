var mygame = new Phaser.Game(1400, 110, Phaser.CANVAS, 'game-container');

var fondojuego;
var fondojuego2;
var zombie;


var gamestate = {
	preload : function(){
		var me = this;
		me.load.image('bg', 'assets/img/ecuacionesfondo.jpg');
		me.load.image('plt1', 'assets/img/plataforma.png');
		me.load.spritesheet('zombie', 'assets/img/finalcabeza.png', 91, 110);
	},

	create : function(){
		var me = this;
		
		fondojuego=		me.add.tileSprite(0,0, 616, 350,'bg');
		fondojuego2=	me.add.tileSprite(0,600, 616, 450,'plt1');
		
		zombie= me.add.sprite(170,0, 'zombie');
		zombie.frame = 1;
		zombie.animations.add('caminata', [0,1,2,3,4], 2, true);
	},

	update : function(){
		var me = this;

		fondojuego.tilePosition.x -= 1;
		fondojuego.scale.setTo(2.3)


		fondojuego2.tilePosition.x -= 1;
		fondojuego2.scale.setTo(2.3)

		zombie.animations.play('caminata');
		zombie.x += 2;
		if (zombie.x>= me.game.world.width) {
			zombie.x = -100;
		}
	},
}

mygame.state.add('game', gamestate);
mygame.state.start('game');
