import GameEntity = require('../Entity/GameEntity');

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