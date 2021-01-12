"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var cartActions_1 = require("../../state/cart/cartActions");
var react_redux_1 = require("react-redux");
var CartProducts_1 = require("./CartProducts");
var Cart = function (_a) {
    var removeProductFromCart = _a.removeProductFromCart, placeOrder = _a.placeOrder, cart = _a.cart, changeQuantity = _a.changeQuantity;
    console.log(cart);
    var isCartEmpty = function (cart) { return Object.keys(cart.productIdToCartProductMap).length < 1; };
    var onCheckout = function (event) {
        event.preventDefault();
    };
    var onQuantityChange = function (productId, value) {
        changeQuantity(productId, value);
    };
    return (React.createElement("section", { className: 'cart' },
        Object.values(cart.productIdToCartProductMap)[0].quantity,
        !isCartEmpty(cart)
            ? React.createElement(CartProducts_1.CartProducts, { cart: cart, onQuantityChange: onQuantityChange })
            : React.createElement("div", { className: "cart__message" }, "your cart is empty")));
};
exports.default = react_redux_1.connect(function (state) { return state.cart; }, cartActions_1.actionCreators)(Cart);
//# sourceMappingURL=Cart.js.map