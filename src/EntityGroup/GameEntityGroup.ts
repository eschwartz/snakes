import GameEntity = require('../Entity/GameEntity');

class GameEntityGroup implements GameEntityGroupInterface{
  protected entities:GameEntity[];

  constructor(entities:GameEntity[]) {
    this.entities = entities;
  }

  forEach(cb:(GameEntity, index:number)=>void, thisArg?) {
    this.entities.forEach(cb, thisArg);
  }
}

export = GameEntityGroup;