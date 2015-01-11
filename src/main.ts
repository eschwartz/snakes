import SnakeGame = require('./Game/SnakeGame');
import SnakeSegment = require('./Entity/SnakeSegment');
import Snake = require('./EntityGroup/Snake');
import Food = require('./Entity/Food');
import SnakeRenderer = require('./Renderer/SnakeRenderer');
import FoodRenderer = require('./Renderer/FoodRenderer');

var game = new SnakeGame();

var snake = new Snake([
  new SnakeSegment({
    location: { x: 50, y: 50 }
  })
]);

var foodItems = new FoodItems([
  new Food({
    location: { x: 10, y: 80 }
  })
]);

game.addEntityGroup(snake, SnakeRenderer, {});
game.addEntityGroup(foodItems, FoodRenderer, {});


game.addGroupCollisionEvent(snake, foodItems, function(evt:CollisionEventInterface) {
  var growEvent:SnakeGrowEventInterface = { location: evt.location };
  game.broadcast('snake:grow', growEvent);
});