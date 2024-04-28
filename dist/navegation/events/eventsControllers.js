"use strict";
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Hard"] = 40] = "Hard";
    Difficulty[Difficulty["Medium"] = 30] = "Medium";
    Difficulty[Difficulty["Easy"] = 20] = "Easy";
})(Difficulty || (Difficulty = {}));
class Events {
    constructor(name, description, difficulty) {
        this.name = name;
        this.description = description;
        this.difficulty = difficulty;
    }
    showDescription() {
        console.log(this.name);
        console.log(this.description);
        console.log(this.difficulty);
    }
}
//# sourceMappingURL=eventsControllers.js.map