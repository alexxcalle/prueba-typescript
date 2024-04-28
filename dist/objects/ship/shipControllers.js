"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrix = exports.alien = exports.halo = exports.Ship = void 0;
class Ship {
    constructor(name, hp, speed, fuel) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.fuel = fuel;
    }
    getAtributes() {
        console.log(`${this.name}: tiene ${this.hp} de hp, cuenta con una carga de ${this.fuel} de combustible y tiene una velocidad de ${this.speed}`);
    }
}
exports.Ship = Ship;
exports.halo = new Ship("Halo", 50, 100, 100);
exports.alien = new Ship("Alien", 100, 75, 100);
exports.matrix = new Ship("Matrix", 200, 50, 100);
//# sourceMappingURL=shipControllers.js.map