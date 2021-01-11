"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var CartWidgetComponent = function (_a) {
    var numberOfItems = _a.numberOfItems;
    return React.createElement("div", { className: "cart-badge badge-icons pull-right" },
        React.createElement("i", { className: "fa fa-shopping-cart" }),
        React.createElement("span", { className: "badge badge-danger rounded-x" }, numberOfItems),
        React.createElement("div", { className: "badge-open" }));
};
var CartWidget = (react_redux_1.connect(function (state) {
    return { numberOfItems: Object.keys(state.cart.productIdToCartProductMap).length };
}, null)(CartWidgetComponent));
exports.default = CartWidget;
//# sourceMappingURL=CartWidget.js.map