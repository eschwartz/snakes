///<reference path="GameLocationInterface.ts"/>
import Direction = require('./Direction');

class GameLocation implements GameLocationInterface {
  x:number = 0;
  y:number = 0;

  public FromDirection(direction:Direction):GameLocationInterface {
    var xyChange:GameLocationInterface = {x:0, y:0};

    if (direction = Direction.UP) {
      xyChange.y = 1;
    }
    if (direction = Direction.DOWN) {
      xyChange.y = -1;
    }
    if (direction = Direction.RIGHT) {
      xyChange.x = 1;
    }
    if (direction = Direction.LEFT) {
      xyChange.x = -1;
    }

    return xyChange;
  }
}

export = GameLocation;