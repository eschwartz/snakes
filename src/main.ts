import SnakeGame = require('./Game/SnakeGame');
import SnakeSegment = require('./Entity/SnakeSegment');
import Snake = require('./EntityGroup/Snake');
import Food = require('./Entity/Food');

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

var snakeRenderer:RendererInterface = {
  render: function(snake:SnakeSegment, ctx:CanvasRenderingContext2D) {

  }
};

var foodRenderer:RendererInterface = {
  render: function(food:Food, ctx:CanvasRenderingContext2D) {

  }
};

game.addEntityGroup(snake, snakeRenderer, {});
game.addEntityGroup(foodItems, foodRenderer, {});


game.addGroupCollisionEvent(snake, foodItems, function(evt:CollisionEventInterface) {
  var growEvent:SnakeGrowEventInterface = { location: evt.location };
  game.broadcast('snake:grow', growEvent);
});