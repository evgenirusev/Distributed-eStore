"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var cartActions_1 = require("../../state/cart/cartActions");
var react_redux_1 = require("react-redux");
var CartProducts_1 = require("../../components/cart/cartProducts/CartProducts");
var react_router_dom_1 = require("react-router-dom");
require("./Cart.css");
var isCartEmpty = function (shoppingCart) { return Object.keys(shoppingCart.productIdToCartProductMap).length < 1; };
var buildOrder = function (shoppingCart, user) {
    var orderItems = Object.values(shoppingCart.productIdToCartProductMap)
        .reduce(function (orderItems, _a) {
        var id = _a.id, quantity = _a.quantity, size = _a.size;
        return orderItems.concat({
            productId: id,
            size: size,
            quantity: quantity
        });
    }, []);
    return {
        customerId: user.user.id,
        orderItems: orderItems
    };
};
var Cart = function (_a) {
    var removeProductFromCart = _a.removeProductFromCart, placeOrder = _a.placeOrder, cart = _a.cart, changeQuantity = _a.changeQuantity, user = _a.user, removeAllProductsFromCart = _a.removeAllProductsFromCart;
    var history = react_router_dom_1.useHistory();
    var onPlaceOrder = function () {
        if (user.isLoggedIn) {
            placeOrder(buildOrder(cart, user));
            removeAllProductsFromCart();
            history.push("/orders/success");
        }
        else {
            history.push("/login");
        }
    };
    var onChangeQuantity = function (productId, quantity) {
        if (quantity <= 0) {
            removeProductFromCart(productId);
        }
        else {
            changeQuantity(productId, quantity);
        }
    };
    return (React.createElement("section", { className: 'cart' }, !isCartEmpty(cart)
        ? React.createElement(CartProducts_1.CartProducts, { cart: cart, changeQuantity: onChangeQuantity, onPlaceOrder: onPlaceOrder })
        : React.createElement(React.Fragment, null,
            React.createElement("h1", { className: "cart__message" }, "Your cart is empty"),
            React.createElement("hr", null))));
};
var mapStateToProps = function (state) {
    return { user: state.user, cart: state.cart };
};
exports.default = react_redux_1.connect(mapStateToProps, cartActions_1.actionCreators)(Cart);
//# sourceMappingURL=Cart.js.map