var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var loc = {
    x: 1,
    y: 2
};
var GameEntity = (function () {
    function GameEntity(options) {
        this.location = options.location;
    }
    return GameEntity;
})();
var SnakeBody = (function (_super) {
    __extends(SnakeBody, _super);
    function SnakeBody() {
        _super.apply(this, arguments);
    }
    return SnakeBody;
})(GameEntity);
var Food = (function (_super) {
    __extends(Food, _super);
    function Food() {
        _super.apply(this, arguments);
    }
    return Food;
})(GameEntity);
var GameEntityGroup = (function () {
    function GameEntityGroup(entities) {
        this.entities = entities;
    }
    return GameEntityGroup;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        _super.apply(this, arguments);
    }
    return Snake;
})(GameEntityGroup);
var FoodItems = (function (_super) {
    __extends(FoodItems, _super);
    function FoodItems() {
        _super.apply(this, arguments);
    }
    return FoodItems;
})(GameEntityGroup);
var Game = (function () {
    function Game() {
    }
    Game.prototype.onTick = function () {
    };
    Game.prototype.addEntityGroup = function (entityGroup, renderer) {
    };
    Game.prototype.addGroupCollisionEvent = function (groupA, groupB, cb) {
        this.collisionManager.addGroupEvent(groupA, groupB, cb);
    };
    Game.prototype.broadcast = function (topic, event) {
    };
    return Game;
})();
var CollisionManager = (function () {
    function CollisionManager() {
    }
    CollisionManager.prototype.addGroupEvent = function (groupA, groupB, cb) {
    };
    return CollisionManager;
})();
var SnakeGame = (function (_super) {
    __extends(SnakeGame, _super);
    function SnakeGame() {
        _super.apply(this, arguments);
    }
    return SnakeGame;
})(Game);
var game = new SnakeGame();
var snake = new Snake([
    new SnakeBody({
        location: { x: 50, y: 50 }
    })
]);
var foodItems = new FoodItems([
    new Food({
        location: { x: 10, y: 80 }
    })
]);
var snakeRenderer = {
    render: function (snake, ctx) {
    }
};
var foodRenderer = {
    render: function (food, ctx) {
    }
};
game.addEntityGroup(snake, snakeRenderer);
game.addEntityGroup(foodItems, foodRenderer);
game.addGroupCollisionEvent(snake, foodItems, function (snake, food) {
    game.broadcast('snake:grow', { location: food.location });
});
