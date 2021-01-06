"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var react_1 = require("react");
require("./ProductList.css");
var productsActions_1 = require("../../state/products/productsActions");
var ProductView = function (_a) {
    var requestProductById = _a.requestProductById, selectedProductId = _a.selectedProductId, selectedProduct = _a.selectedProduct;
    react_1.useEffect(function () {
        requestProductById(selectedProductId);
    }, [requestProductById, selectedProductId]);
    return (React.createElement("section", { className: 'product-view' }, selectedProduct.id));
};
exports.default = react_redux_1.connect(function (state) { return state.products.selectedProduct; }, productsActions_1.actionCreators)(ProductView);
//# sourceMappingURL=ProductView.js.map