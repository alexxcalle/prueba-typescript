import { ShipInterface } from "./shipInterfaces";

export class Ship implements ShipInterface {
  constructor(
    public name: string,
    public hp: number,
    public speed: number,
    public fuel: number
  ) {}

  getAtributes(): void {
    console.log(
      `${this.name}: tiene ${this.hp} de hp, cuenta con una carga de ${this.fuel} de combustible y tiene una velocidad de ${this.speed}`
    );
  }
}

export const halo = new Ship("Halo", 50, 100, 100);
export const alien = new Ship("Alien", 100, 75, 100);
export const matrix = new Ship("Matrix", 200, 50, 100);
