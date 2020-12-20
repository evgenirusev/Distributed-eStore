"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwitcher = void 0;
var React = require("react");
var __1 = require("../");
var ColorSwitcher = function (_a) {
    var colors = _a.colors, selectProductColor = _a.selectProductColor;
    return React.createElement("div", { className: "switcher" }, colors.map(function (c) {
        return React.createElement(__1.ColorBox, { color: c, isSelected: colors.indexOf(c) === 0 });
    }));
};
exports.ColorSwitcher = ColorSwitcher;
//# sourceMappingURL=ColorSwitcher.js.map