"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var products_1 = require("../../state/products/");
var products_2 = require("../../components/products/");
var react_1 = require("react");
require("./ProductList.css");
var ProductList = function (_a) {
    var products = _a.products, requestProducts = _a.requestProducts;
    react_1.useEffect(function () {
        requestProducts();
    }, [requestProducts]);
    return (React.createElement("section", { className: 'product-list' }, products.map(function (product) { return (React.createElement(products_2.Product, __assign({}, product))); })));
};
exports.default = react_redux_1.connect(function (state) { return state.products; }, products_1.actionCreators)(ProductList);
//# sourceMappingURL=ProductList.js.map