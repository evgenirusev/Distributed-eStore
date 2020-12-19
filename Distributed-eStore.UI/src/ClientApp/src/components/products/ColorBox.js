"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorBox = void 0;
var React = require("react");
var ColorBox = function (_a) {
    var color = _a.color, isSelected = _a.isSelected;
    return React.createElement("div", { className: "color-box" },
        React.createElement("span", { className: "color-box__color", style: { backgroundColor: color } }));
};
exports.ColorBox = ColorBox;
//# sourceMappingURL=ColorBox.js.map