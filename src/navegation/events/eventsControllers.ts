enum Difficulty {
  Hard = 40,
  Medium = 30,
  Easy = 20,
}

abstract class Events {
  constructor(
    public name: String,
    public description: String,
    public difficulty: Difficulty
  ) {}

  showDescription(): void {
    console.log(this.name);
    console.log(this.description);
    console.log(this.difficulty);
  }
}
