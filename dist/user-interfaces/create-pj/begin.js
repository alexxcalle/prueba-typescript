"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.begin = void 0;
const shipServices_1 = require("../../objects/ship/shipServices");
function begin() {
    console.log("----------------------Welcome!!!-----------------------\n");
    console.log("Bienvenido a este juego de consola interactivo donde tendras que escoger una nave espacial para poder viajar por planetas, completar misiones y adquirir recursos");
    console.log("--------------------");
    console.log("Elige una de las siguientes naves:\n");
    (0, shipServices_1.showAtributes)();
}
exports.begin = begin;
//# sourceMappingURL=begin.js.map