import GameEntity = require('../Entity/GameEntity');

interface CollisionEventInterface extends GameEventInterface {
  entities:GameEntity[];
}