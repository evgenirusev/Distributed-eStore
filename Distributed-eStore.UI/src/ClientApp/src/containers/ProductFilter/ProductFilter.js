"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFilter = exports.ProductFilterComponent = void 0;
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var constants_1 = require("../../constants");
var products_1 = require("../../state/products");
require("./ProductFilter.css");
var ProductFilterComponent = function (_a) {
    var _b;
    var requestProductsFemale = _a.requestProductsFemale, requestProductsMale = _a.requestProductsMale, requestProductsAccessories = _a.requestProductsAccessories, currentCategory = _a.currentCategory;
    react_1.useEffect(function () {
        requestProductsFemale();
    }, [requestProductsFemale]);
    var categoriesMap = (_b = {},
        _b[constants_1.ProductCategories.FEMALE] = { requestProducts: requestProductsFemale, text: "Women's Sale" },
        _b[constants_1.ProductCategories.MALE] = { requestProducts: requestProductsMale, text: "Men's Sale" },
        _b[constants_1.ProductCategories.ACCESSORIES] = { requestProducts: requestProductsAccessories, text: "Bags & Accessories Sale" },
        _b);
    return React.createElement("div", { className: "product-filter d-flex justify-content-center" }, Object.keys(categoriesMap).map(function (category, index) {
        var text = categoriesMap[category].text;
        var requestProducts = categoriesMap[category].requestProducts;
        var cssClass = "product-filter__button " + (category === currentCategory ? "product-filter__button--isSelected" : "");
        return React.createElement("button", { key: category + "-" + index, className: cssClass, onClick: requestProducts }, text);
    }));
};
exports.ProductFilterComponent = ProductFilterComponent;
var mapStateToProps = function (state) {
    return { products: state.products.productIDsToProductsMap, currentCategory: state.products.currentCategory };
};
exports.ProductFilter = react_redux_1.connect(mapStateToProps, products_1.actionCreators)(exports.ProductFilterComponent);
//# sourceMappingURL=ProductFilter.js.map