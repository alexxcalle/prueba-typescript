import { Planets } from "../planets/planetsController";

export function gathering<T>(planet: Planets, resources: T): void {
  console.log(`Recolectando ${resources} de ${planet.name} `);
}
