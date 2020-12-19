"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwitcher = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var ColorSwitcher = function (_a) {
    var allProducts = _a.allProducts, switcherProductId = _a.switcherProductId;
    return React.createElement("div", { className: "switcher" });
};
exports.ColorSwitcher = ColorSwitcher;
exports.default = react_redux_1.connect(function (state) { return state.products.products; })(exports.ColorSwitcher);
//# sourceMappingURL=ColorSwitcher.js.map