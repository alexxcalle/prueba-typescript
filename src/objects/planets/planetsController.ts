enum Dangers {
  Hight = 40,
  Medium = 30,
  Low = 20,
}

abstract class Planets {
  constructor(
    public name: String,
    public description: String,
    public resources: undefined,
    public dangers: Dangers
  ) {}
}

export class Tierra extends Planets {
  constructor(
    name: string,
    description: string,
    resources: undefined,
    dangers: Dangers
  ) {
    super(name, description, resources, dangers);
  }
}

export class Marte extends Planets {
  constructor(
    name: string,
    description: string,
    resources: undefined,
    dangers: Dangers
  ) {
    super(name, description, resources, dangers);
  }
}

export class Saturno extends Planets {
  constructor(
    name: string,
    description: string,
    resources: undefined,
    dangers: Dangers
  ) {
    super(name, description, resources, dangers);
  }
}

export class Urano extends Planets {
  constructor(
    name: string,
    description: string,
    resources: undefined,
    dangers: Dangers
  ) {
    super(name, description, resources, dangers);
  }
}
