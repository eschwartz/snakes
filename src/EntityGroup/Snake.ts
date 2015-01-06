import GameEntityGroup = require('./GameEntityGroup');
import SnakeSegment = require('../Entity/SnakeSegment');

class Snake extends GameEntityGroup {
  entities:SnakeSegment[];
}

export = Snake;