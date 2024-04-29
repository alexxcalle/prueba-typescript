import { ShipInterface } from "./shipInterfaces";

export class Ship implements ShipInterface {
  constructor(
    public hp: number = 100,
    public speed: number = 100,
    public fuel: number = 100
  ) {}
}
