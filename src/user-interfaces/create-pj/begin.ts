import { showAtributes } from "../../objects/ship/shipServices";

export function begin(): void {
  console.log("----------------------Welcome!!!-----------------------\n");

  console.log(
    "Bienvenido a este juego de consola interactivo donde tendras que escoger una nave espacial para poder viajar por planetas, completar misiones y adquirir recursos"
  );

  console.log("--------------------");
  console.log("Elige una de las siguientes naves:\n");
  showAtributes();
}
