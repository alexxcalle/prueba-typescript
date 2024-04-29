import { PlanetSource } from "../resources/resourcesController";
import { Difficulty } from "../../navegation/events/eventsControllers";

export class Planets {
  constructor(
    public name: String,
    public description: String,
    public resources: PlanetSource,
    public dangers: Difficulty
  ) {}
}
