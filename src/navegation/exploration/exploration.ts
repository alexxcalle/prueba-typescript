import { Planets } from "../../objects/planets/planetsController";
import { PlanetSource } from "../../objects/resources/resourcesController";
import { getInput } from "../prompts/propmtsServices";
import { gathering } from "../../objects/resources/resourcesServices";
import { Difficulty, Meteorites } from "../events/eventsControllers";

type Direction = "North" | "South" | "East" | "West";

export function exploration(direction: Direction) {
  console.log(`Explorando hacia el ${direction}`);
}

export async function simulationTravel(): Promise<void> {
  const earth = new Planets("Tierra", "", PlanetSource.water, Difficulty.Hard);
  const marte = new Planets("Marte", "", PlanetSource.ore, Difficulty.Easy);
  const jupiter = new Planets(
    "Jupiter",
    "",
    PlanetSource.gas,
    Difficulty.Medium
  );

  let direction: Direction | null;
  let planet: Planets | null;
  while (true) {
    console.log("\nElige el numero de opción (1-3):\n");
    console.log("1. Explorar");
    console.log("2. Recolectar recursos");
    console.log("3. Manejar evento aleatorio");

    const opcion = await getInput("> ");

    switch (opcion) {
      case "1":
        direction = (await getInput(
          "Ingresa la dirección (norte, sur, este, oeste): "
        )) as Direction;
        exploration(direction);
        break;
      case "2":
        const planetStr = await getInput(
          "Ingresa el numero del planeta (1.Tierra, 2.Marte, 3.Júpiter): "
        );
        planet =
          planetStr === "1" ? earth : planetStr === "2" ? marte : jupiter;

        const recurso = await getInput(
          `Ingresa el recurso a recolectar (${
            PlanetSource[planet.resources]
          }): `
        );

        gathering(planet, recurso);
        break;
      case "3":
        const evento = new Meteorites();
        evento.showDescription();
        break;
      default:
        console.log("\nOpción inválida\n");
    }
  }
}
