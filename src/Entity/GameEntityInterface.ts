///<reference path="../GameLocationInterface.ts"/>
import Direction = require('./../Direction');

interface GameEntityInterface {
  location:GameLocationInterface;

  move(direction:Direction, units:number);
}

export = GameEntityInterface;