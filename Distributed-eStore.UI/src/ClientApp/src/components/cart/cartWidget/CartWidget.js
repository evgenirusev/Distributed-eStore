"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartWidget = void 0;
var React = require("react");
var CartWidget = function (_a) {
    var numberOfItems = _a.numberOfItems;
    return React.createElement("div", { className: "cart-badge badge-icons pull-right" },
        React.createElement("i", { className: "fa fa-shopping-cart" }),
        React.createElement("span", { className: "badge badge-danger rounded-x" }, numberOfItems),
        React.createElement("div", { className: "badge-open" }));
};
exports.CartWidget = CartWidget;
//# sourceMappingURL=CartWidget.js.map