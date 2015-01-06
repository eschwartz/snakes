class GameEntity implements GameEntityInterface{

  location:GameLocationInterface;

  constructor(options:GameEntityOptions) {
    this.location = options.location;
  }

}

export = GameEntity;