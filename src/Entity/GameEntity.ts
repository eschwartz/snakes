///<reference path="Options/GameEntityOptions.ts"/>
import GameEntityInterface = require('./GameEntityInterface');
import Direction = require('../Direction');
import GameLocation = require('../GameLocation');

class GameEntity implements GameEntityInterface {

  location:GameLocationInterface;

  constructor(options:GameEntityOptions) {
    this.location = options.location;
  }

  move(direction:Direction, units:number) {
    var xyChange = GameLocation.FromDirection(direction);

  }

}

export = GameEntity;