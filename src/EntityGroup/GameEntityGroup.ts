import GameEntityGroupInterface = require('../EntityGroup/GameEntityGroupInterface');
import GameEntityInterface = require('../Entity/GameEntityInterface');

class GameEntityGroup implements GameEntityGroupInterface {
  entities:GameEntityInterface[];

  constructor(entities:GameEntityInterface[]) {
    this.entities = entities;
  }

  forEach(cb:(GameEntityInterface, index:number)=>void, thisArg?) {
    this.entities.forEach(cb, thisArg);
  }
}

export = GameEntityGroup;