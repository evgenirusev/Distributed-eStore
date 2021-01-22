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
var BottomBanner_1 = require("../../components/BottomBanner/BottomBanner");
var ProductList_1 = require("../../components/ProductList/ProductList");
var products_1 = require("../../state/products");
var ProductFilter_1 = require("../ProductFilter/ProductFilter");
require("./HomePage.css");
var HomePage = function (_a) {
    var productIDsToProductsMap = _a.productIDsToProductsMap, currentCategory = _a.currentCategory;
    return React.createElement("div", { className: "home-page" },
        React.createElement("div", { className: "home-page__top-image-container" },
            React.createElement("a", { href: "#", className: "home-page__link" },
                React.createElement("h1", { className: "home-page__text" },
                    "Just Launched ",
                    React.createElement("br", null),
                    " Summer Products"),
                React.createElement("h3", { className: "home-page__shop-now" }, "SHOP NOW"))),
        React.createElement(ProductFilter_1.ProductFilter, null),
        productIDsToProductsMap && React.createElement(ProductList_1.ProductList, { products: Object.values(productIDsToProductsMap)
                .filter(function (product) { return product.category === currentCategory; }) }),
        React.createElement(BottomBanner_1.BottomBanner, null));
};
var mapStateToProps = function (state) {
    return __assign({}, state.products);
};
exports.default = react_redux_1.connect(mapStateToProps, products_1.actionCreators)(HomePage);
//# sourceMappingURL=HomePage.js.map