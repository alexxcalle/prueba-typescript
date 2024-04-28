"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAtributes = void 0;
const shipControllers_1 = require("./shipControllers");
function showAtributes() {
    shipControllers_1.halo.getAtributes();
    shipControllers_1.matrix.getAtributes();
    shipControllers_1.alien.getAtributes();
}
exports.showAtributes = showAtributes;
//# sourceMappingURL=shipServices.js.map