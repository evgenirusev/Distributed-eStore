"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var products_1 = require("../state/products/");
var ProductList = function (_a) {
    var allProducts = _a.allProducts, currentProducts = _a.currentProducts, requestAllProducts = _a.requestAllProducts;
    react_1.useEffect(function () {
        requestAllProducts();
    }, [requestAllProducts]);
    return (React.createElement("section", { className: 'product-list' }, allProducts.map(function (product) { return product.name; })));
};
exports.default = react_redux_1.connect(function (state) { return state.products; }, products_1.actionCreators)(ProductList);
//# sourceMappingURL=ProductList.js.map