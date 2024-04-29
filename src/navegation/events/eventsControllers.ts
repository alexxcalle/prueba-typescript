export enum Difficulty {
  Hard = "hard",
  Medium = "medium",
  Easy = "easy",
}

abstract class Events {
  constructor(
    public name: String,
    public description: String,
    public difficulty: Difficulty
  ) {}
}

export class Meteorites extends Events {
  constructor(
    public name = "\nLluvia de Meteoritos",
    public description = "Se acerca una lluvia de meteoritos y estas perdiendo mucha vida",
    public difficulty = Difficulty.Medium
  ) {
    super(name, description, difficulty);
  }

  showDescription(): void {
    console.log(this.name);
    console.log(this.description);
    console.log(`La dificultad de esta mision es ${this.difficulty}`);
  }
}
