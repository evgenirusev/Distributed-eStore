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
    return (React.createElement("section", { className: 'section' },
        React.createElement("div", { className: 'container' },
            React.createElement("h3", { className: 'title is-3' }, "Fetch Data"),
            React.createElement("div", { className: 'box container-box' },
                React.createElement("h3", { className: 'title is-4' }, "Weather forecast"),
                React.createElement("h5", { className: 'subtitle is-5' }, "This component demonstrates fetching data from the server and working with URL parameters.")))));
};
exports.default = react_redux_1.connect(function (state) { return state.products; }, products_1.actionCreators)(ProductList);
//# sourceMappingURL=ProductList.js.map