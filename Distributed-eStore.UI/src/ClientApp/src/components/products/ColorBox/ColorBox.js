"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorBox = void 0;
var React = require("react");
require("./ColorBox.css");
var ColorBox = function (_a) {
    var color = _a.color, isSelected = _a.isSelected;
    var defaultClass = "color-box";
    var isSelectedClass = defaultClass + "--isSelected";
    return React.createElement("div", { className: defaultClass + " " + (isSelected !== null && isSelected !== void 0 ? isSelected : isSelectedClass) },
        React.createElement("span", { className: "color-box__color", style: { backgroundColor: color } }));
};
exports.ColorBox = ColorBox;
//# sourceMappingURL=ColorBox.js.map