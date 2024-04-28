"use strict";
var Dangers;
(function (Dangers) {
    Dangers[Dangers["Hight"] = 40] = "Hight";
    Dangers[Dangers["Medium"] = 30] = "Medium";
    Dangers[Dangers["Low"] = 20] = "Low";
})(Dangers || (Dangers = {}));
class Planets {
    constructor(name, description, resources, dangers) {
        this.name = name;
        this.description = description;
        this.resources = resources;
        this.dangers = dangers;
    }
}
//# sourceMappingURL=planetsController.js.map