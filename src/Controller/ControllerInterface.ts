import GameEntityGroupInterface = require('../EntityGroup/GameEntityGroupInterface');
/**
 * Controls the state of the entity.
 * Responds to game events, including user input.
 */
interface ControllerInterface {
  bootstrap():void;
  onTick():void;
}

export = ControllerInterface;