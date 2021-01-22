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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var ProductList_1 = require("../../components/ProductList/ProductList");
var products_1 = require("../../state/products");
require("./FemaleProductsPage.css");
var FemaleProductsPage = function (_a) {
    var productIDsToProductsMap = _a.productIDsToProductsMap, currentCategory = _a.currentCategory, requestProductsFemale = _a.requestProductsFemale;
    react_1.useEffect(function () {
        requestProductsFemale();
    }, [requestProductsFemale]);
    return React.createElement("div", { className: "female-products-page" },
        React.createElement("div", { className: "female-products-page__top-image-container" }),
        productIDsToProductsMap && React.createElement(ProductList_1.ProductList, { products: Object.values(productIDsToProductsMap)
                .filter(function (product) { return product.category === currentCategory; }) }));
};
var mapStateToProps = function (state) {
    return __assign({}, state.products);
};
exports.default = react_redux_1.connect(mapStateToProps, products_1.actionCreators)(FemaleProductsPage);
//# sourceMappingURL=FemaleProductsPage.js.map