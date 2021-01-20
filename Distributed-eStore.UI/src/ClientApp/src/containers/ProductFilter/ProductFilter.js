"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFilter = exports.ProductFilterComponent = void 0;
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var products_1 = require("../../state/products");
require("./ProductFilter.css");
var ProductFilterComponent = function (_a) {
    var requestProductsFemale = _a.requestProductsFemale, requestProductsMale = _a.requestProductsMale, requestProductsAccessories = _a.requestProductsAccessories;
    react_1.useEffect(function () {
        requestProductsFemale();
    }, []);
    return React.createElement("div", { className: "product-filter d-flex justify-content-center" },
        React.createElement("button", { className: "product-filter__button", onClick: requestProductsFemale }, "Women's Sale"),
        React.createElement("button", { className: "product-filter__button", onClick: requestProductsMale }, "Men's Sale"),
        React.createElement("button", { className: "product-filter__button", onClick: requestProductsAccessories }, "Bags & Accessories Sale"));
};
exports.ProductFilterComponent = ProductFilterComponent;
var mapStateToProps = function (state) {
    return { products: state.products.productIDsToProductsMap };
};
exports.ProductFilter = react_redux_1.connect(mapStateToProps, products_1.actionCreators)(exports.ProductFilterComponent);
//# sourceMappingURL=ProductFilter.js.map