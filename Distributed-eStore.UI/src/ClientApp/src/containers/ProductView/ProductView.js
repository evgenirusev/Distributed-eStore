"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var react_1 = require("react");
require("./ProductView.css");
var productsActions_1 = require("../../state/products/productsActions");
var react_router_dom_1 = require("react-router-dom");
var ProductView = function (_a) {
    var requestProductById = _a.requestProductById, selectedProduct = _a.selectedProduct;
    var productId = react_router_dom_1.useParams().productId;
    react_1.useEffect(function () {
        requestProductById(productId);
    }, [requestProductById, productId]);
    return (React.createElement("section", { className: 'product-view' }));
};
var mapStateToProps = function (state) {
    return { selectedProduct: state.products.selectedProduct };
};
exports.default = react_redux_1.connect(mapStateToProps, productsActions_1.actionCreators)(ProductView);
//# sourceMappingURL=ProductView.js.map