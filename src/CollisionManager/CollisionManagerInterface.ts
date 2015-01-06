interface CollisionManagerInterface {

  /**
   * Check whether any collisions have been made.
   * Invokes any callbacks bound to collision events.
   */
  check();

  /**
   * Bind a callback to a collision event between
   * any two entities belonging to groupA and groupB.
   */
  addGroupEvent(groupA:GameEntityGroup, groupB:GameEntityGroup, cb:(evt:CollisionEventInterface)=>void);
}