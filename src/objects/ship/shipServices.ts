import { halo, matrix, alien } from "./shipControllers";

export function showAtributes(): void {
  halo.getAtributes();
  matrix.getAtributes();
  alien.getAtributes();
}
