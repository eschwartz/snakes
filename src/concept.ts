/// <reference path="../typings/underscore/underscore.d.ts" />

interface GameLocation {
  x: number;
  y: number;
}

interface GameEntityOptions {
  location:GameLocation;
}


class GameEntity {

  location:GameLocation;

  constructor(options:GameEntityOptions) {
    this.location = options.location;
  }

}

class SnakeSegment extends GameEntity {
}

class Food extends GameEntity{
  location:GameLocation;
}

class GameEntityGroup {
  protected entities:GameEntity[];

  constructor(entities:GameEntity[]) {
    this.entities = entities;
  }

  forEach(cb:(GameEntity, index:number)=>void, thisArg?) {
    this.entities.forEach(cb, thisArg);
  }
}

class Snake extends GameEntityGroup {
  entities:SnakeSegment[];
}

class FoodItems extends GameEntityGroup {
  entities:Food[];
}

/**
 * Descriptive information about a game entity group
 */
interface GameEntityGroupMeta {
  entityGroup:GameEntityGroup;
  renderer: RendererInterface;
  controller:ControllerInterface;
}

class Game {
  protected canvas:HTMLCanvasElement;
  protected collisionManager:CollisionManager;
  /** Describes the entity groups of which the game is aware. */
  protected groupsMeta:GameEntityGroupMeta[] = [];

  protected onTick() {
    this.collisionManager.check();

    _.each(this.groupsMeta, (meta:GameEntityGroupMeta) => {
      this.renderEntityGroup(meta.entityGroup, meta.renderer);
      meta.entityGroup.forEach(entity => entity.onTick());
    });
  }

  protected renderEntityGroup(entityGroup:GameEntityGroup, renderer:RendererInterface) {
    entityGroup.forEach(entity => {
      renderer.render(entity, this.getContext());
    });
  }

  protected getContext() {
    return this.canvas.getContext('2d');
  }

  addEntityGroup(entityGroup:GameEntityGroup, renderer:RendererInterface, controller:ControllerInterface) {
    this.bootstrapEntityGroup({
      entityGroup: entityGroup,
      renderer: renderer,
      controller: controller
    });
  }

  protected bootstrapEntityGroup(entityGroupMeta:GameEntityGroupMeta) {
    this.groupsMeta.push(entityGroupMeta);

    // setup whatever controller event handling we need,
    // like subscribing to input/game events, etc.
  }

  addGroupCollisionEvent(groupA:GameEntityGroup, groupB:GameEntityGroup, cb:(CollisionEvent)=>void) {
    this.collisionManager.addGroupEvent(groupA, groupB, cb);
  }

  broadcast(topic, event:GameEvent) {

  }

  subscribe(topic, cb:(event:GameEvent)=>void) {

  }


}

/**
 * Controls the state of the entity.
 * Responds to game events, including user input.
 */
interface ControllerInterface {

}

interface RendererInterface {
  /**
   * Renders the current state of an entity
   * onto the canvas context.
   *
   * @param entity
   * @param ctx
   */
  render(entity:GameEntity, ctx:CanvasRenderingContext2D);
}

interface GameEvent {
  location:GameLocation;
}

interface CollisionEvent extends GameEvent {
  entities:GameEntity[];
}

interface SnakeGrowEvent extends GameEvent {

}

class CollisionManager {

  /**
   * Check whether any collisions have been made.
   * Invokes any callbacks bound to collision events.
   */
  check() {

  }

  /**
   * Bind a callback to a collision event between
   * any two entities belonging to groupA and groupB.
   */
  addGroupEvent(groupA:GameEntityGroup, groupB:GameEntityGroup, cb:(evt:CollisionEvent)=>void) {

  }
}


class SnakeGame extends Game {

}

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


game.addGroupCollisionEvent(snake, foodItems, function(evt:CollisionEvent) {
  game.broadcast('snake:grow', { location: evt.location });
});

