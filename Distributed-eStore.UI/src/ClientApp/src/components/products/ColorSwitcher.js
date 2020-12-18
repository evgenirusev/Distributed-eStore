"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwitcher = void 0;
var React = require("react");
var ColorBox_1 = require("./ColorBox");
var ColorSwitcher = function (_a) {
    var colors = _a.colors;
    return React.createElement("div", { className: "switcher" }, colors.map(function (c) {
        return React.createElement(ColorBox_1.ColorBox, { color: c, isSelected: colors.indexOf(c) === 0 });
    }));
};
exports.ColorSwitcher = ColorSwitcher;
//# sourceMappingURL=ColorSwitcher.js.map