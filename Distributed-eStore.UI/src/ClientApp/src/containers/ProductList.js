"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var products_1 = require("../state/products/");
// destructure is optional { currentProducts, requestAllProducts, actionToUse }
var ProductList = function (props) {
    react_1.useEffect(function () {
        // todo: handle API call
    }, []);
    return (React.createElement("section", { className: 'productlist' }, props.currentProducts.map(function (product) {
        return "<div>" + product.id + "</div>";
    })));
};
var mapStateToProps = function (state) { var _a; return (_a = state.products) === null || _a === void 0 ? void 0 : _a.currentProducts; };
exports.default = react_redux_1.connect(mapStateToProps, products_1.actionCreators)(ProductList);
//# sourceMappingURL=ProductList.js.map