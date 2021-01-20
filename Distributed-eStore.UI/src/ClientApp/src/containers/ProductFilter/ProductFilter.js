"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFilter = exports.ProductFilterComponent = void 0;
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var products_1 = require("../../state/products");
require("./HomePage.css");
var ProductFilterComponent = function (_a) {
    var requestProductsMale = _a.requestProductsMale, requestProductsFemale = _a.requestProductsFemale, requestProductsAccessories = _a.requestProductsAccessories;
    react_1.useEffect(function () {
        requestProductsFemale();
    }, []);
    return React.createElement("div", { className: "product-filter row" },
        React.createElement("button", null, "Women's Sale"),
        React.createElement("button", null, "Men's Sale"),
        React.createElement("button", null, "Bags & Accessories Sale"));
};
exports.ProductFilterComponent = ProductFilterComponent;
var mapStateToProps = function (state) {
    return { products: state.products };
};
exports.ProductFilter = react_redux_1.connect(mapStateToProps, products_1.actionCreators)(exports.ProductFilterComponent);
//# sourceMappingURL=ProductFilter.js.map