"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var cartActions_1 = require("../../state/cart/cartActions");
var react_redux_1 = require("react-redux");
var CartProducts_1 = require("../../components/cart/CartProducts");
var Cart = function (_a) {
    var removeProductFromCart = _a.removeProductFromCart, placeOrder = _a.placeOrder, cart = _a.cart, changeQuantity = _a.changeQuantity;
    var isCartEmpty = function (cart) { return Object.keys(cart.productIdToCartProductMap).length < 1; };
    return (React.createElement("section", { className: 'cart' }, !isCartEmpty(cart)
        ? React.createElement(CartProducts_1.CartProducts, { cart: cart, changeQuantity: changeQuantity, placeOrder: placeOrder })
        : React.createElement("div", { className: "cart__message" }, "Your cart is empty")));
};
exports.default = react_redux_1.connect(function (state) { return state; }, cartActions_1.actionCreators)(Cart);
//# sourceMappingURL=Cart.js.map