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
var cartActions_1 = require("../../state/cart/cartActions");
var react_redux_1 = require("react-redux");
var CartProduct_1 = require("../../components/cart/cartProduct/CartProduct");
var CartProducts = function (_a) {
    var productIdToCartProductMap = _a.productIdToCartProductMap;
    var totalCost = Object.values(productIdToCartProductMap).reduce(function (total, product) {
        return total + product.price;
    }, 0);
    return (React.createElement(React.Fragment, null,
        Object.values(productIdToCartProductMap).map(function (cartProduct, index) {
            return React.createElement(React.Fragment, { key: "cart-product-" + index },
                React.createElement(CartProduct_1.CartProduct, __assign({}, cartProduct)),
                React.createElement("hr", null));
        }),
        React.createElement("div", null,
            React.createElement("strong", { className: "d-block" },
                "Sub-total (inc. VAT) = $",
                totalCost),
            React.createElement("strong", null, "NB: VAT will be removed at checkout for Yearbook 5 purchases."),
            React.createElement("p", null, "Free Returns. Free Repairs For Life.")),
        React.createElement("hr", null),
        React.createElement("div", null,
            React.createElement("button", null, "Checkout"))));
};
var Cart = function (_a) {
    var addProductToCart = _a.addProductToCart, removeProductFromCart = _a.removeProductFromCart, placeOrder = _a.placeOrder, products = _a.products, cart = _a.cart;
    var isCartEmpty = function (cart) { return Object.keys(cart.productIdToCartProductMap).length < 1; };
    return (React.createElement("section", { className: 'cart' }, !isCartEmpty(cart)
        ? React.createElement(CartProducts, { productIdToCartProductMap: cart.productIdToCartProductMap })
        : React.createElement("div", { className: "cart__message" }, "your cart is empty")));
};
exports.default = react_redux_1.connect(function (state) { return state; }, cartActions_1.actionCreators)(Cart);
//# sourceMappingURL=Cart.js.map