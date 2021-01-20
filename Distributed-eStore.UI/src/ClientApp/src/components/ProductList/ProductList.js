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
exports.ProductList = void 0;
var React = require("react");
var Product_1 = require("../../components/products/Product/Product");
require("./ProductList.css");
var ProductList = function (_a) {
    var products = _a.products;
    return (React.createElement("section", { className: 'product-list' }, products.map(function (product, index) {
        return (React.createElement(Product_1.Product, __assign({ key: "product-" + index }, product)));
    })));
};
exports.ProductList = ProductList;
//# sourceMappingURL=ProductList.js.map