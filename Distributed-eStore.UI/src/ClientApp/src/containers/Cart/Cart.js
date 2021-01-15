"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var cartActions_1 = require("../../state/cart/cartActions");
var react_redux_1 = require("react-redux");
var CartProducts_1 = require("../../components/cart/CartProducts");
var authUtils_1 = require("../../services/auth/authUtils");
var react_router_dom_1 = require("react-router-dom");
var Cart = function (_a) {
    var removeProductFromCart = _a.removeProductFromCart, placeOrder = _a.placeOrder, cart = _a.cart, changeQuantity = _a.changeQuantity, user = _a.user;
    console.log(cart);
    var isCartEmpty = function (shoppingCart) { return Object.keys(shoppingCart.productIdToCartProductMap).length < 1; };
    var history = react_router_dom_1.useHistory();
    var buildOrder = function () {
        var orderItems = Object.values(cart.productIdToCartProductMap)
            .reduce(function (orderItems, _a) {
            var id = _a.id, quantity = _a.quantity, size = _a.size;
            return orderItems.concat({
                productId: id,
                size: size,
                quantity: quantity
            });
        }, []);
        return {
            customerId: authUtils_1.getCurrentUserId(),
            orderItems: orderItems
        };
    };
    var onPlaceOrder = function () {
        if (user.isLoggedIn) {
            placeOrder(buildOrder());
        }
        else {
            history.push("/login");
        }
    };
    return (React.createElement("section", { className: 'cart' }, !isCartEmpty(cart)
        ? React.createElement(CartProducts_1.CartProducts, { cart: cart, changeQuantity: changeQuantity, onPlaceOrder: onPlaceOrder })
        : React.createElement("div", { className: "cart__message" }, "Your cart is empty")));
};
var mapStateToProps = function (state) {
    return { userState: state.user, cart: state.cart };
};
exports.default = react_redux_1.connect(mapStateToProps, cartActions_1.actionCreators)(Cart);
//# sourceMappingURL=Cart.js.map