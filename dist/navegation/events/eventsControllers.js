"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meteorites = exports.Difficulty = void 0;
var Difficulty;
(function (Difficulty) {
    Difficulty["Hard"] = "hard";
    Difficulty["Medium"] = "medium";
    Difficulty["Easy"] = "easy";
})(Difficulty || (exports.Difficulty = Difficulty = {}));
class Events {
    constructor(name, description, difficulty) {
        this.name = name;
        this.description = description;
        this.difficulty = difficulty;
    }
}
class Meteorites extends Events {
    constructor(name = "Lluvia de Meteoritos", description = "Se acerca una lluvia de meteoritos y estas perdiendo mucha vida", difficulty = Difficulty.Medium) {
        super(name, description, difficulty);
        this.name = name;
        this.description = description;
        this.difficulty = difficulty;
    }
    showDescription() {
        console.log(this.name);
        console.log(this.description);
        console.log(`La dificultad de esta mision es ${this.difficulty}`);
    }
}
exports.Meteorites = Meteorites;
//# sourceMappingURL=eventsControllers.js.map