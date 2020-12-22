"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorBox = void 0;
var React = require("react");
require("./ColorBox.css");
var ColorBox = function (_a) {
    var color = _a.color, cssClass = _a.cssClass, selectProductColor = _a.selectProductColor;
    return React.createElement("div", { onClick: selectProductColor, className: cssClass },
        React.createElement("span", { className: "color-box__color", style: { backgroundColor: color } }));
};
exports.ColorBox = ColorBox;
//# sourceMappingURL=ColorBox.js.map