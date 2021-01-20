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
var ProductList_1 = require("../../components/ProductList/ProductList");
var products_1 = require("../../state/products");
var ProductFilter_1 = require("../ProductFilter/ProductFilter");
require("./HomePage.css");
var HomePage = function (_a) {
    var productIDsToProductsMap = _a.productIDsToProductsMap, currentCategory = _a.currentCategory;
    return React.createElement("div", { className: "home-page" },
        React.createElement("div", { className: "top-image-container" },
            React.createElement("a", { href: "#", className: "home-page__link" },
                React.createElement("h1", { className: "home-page__text" },
                    "Just Launched ",
                    React.createElement("br", null),
                    " Summer Products"),
                React.createElement("h3", { className: "home-page__shop-now" }, "SHOP NOW"))),
        React.createElement(ProductFilter_1.ProductFilter, null),
        productIDsToProductsMap && React.createElement(ProductList_1.ProductList, { products: Object.values(productIDsToProductsMap).filter(function (product) { return product.category === currentCategory; }) }),
        React.createElement("div", { className: "bottom-image-container" },
            React.createElement("a", { href: "#", className: "home-page__link" },
                React.createElement("div", { className: "tide-text-container" },
                    React.createElement("h5", { className: "tide-text-container__text" },
                        "Every day, 38,356,164 pounds of trash are dumped into our oceans.",
                        React.createElement("br", null),
                        "Let's turn the tide."),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("span", { className: "tide-text-container__title" }, "We Quit"),
                            React.createElement("br", null),
                            React.createElement("span", null, "Our plan to remove all single-use plastics from our supply chain.")),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("span", { className: "tide-text-container__title" }, "Get Dirty & Do Good"),
                            React.createElement("br", null),
                            React.createElement("span", null, "Join us at an upcoming cleanup")),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("span", { className: "tide-text-container__title" }, "Let's turn the tide"),
                            React.createElement("br", null),
                            React.createElement("span", null, "Our DIY Cleanup Kit includes all the tools you need to organize your own cleanup anytime.")))))));
};
var mapStateToProps = function (state) {
    return __assign({}, state.products);
};
exports.default = react_redux_1.connect(mapStateToProps, products_1.actionCreators)(HomePage);
//# sourceMappingURL=HomePage.js.map