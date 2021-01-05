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
var productsActions_1 = require("../../state/products/productsActions");
var react_redux_1 = require("react-redux");
var CartProduct_1 = require("../../components/cart/cartProduct/CartProduct");
var react_1 = require("react");
var Cart = function (_a) {
    var addProductToCart = _a.addProductToCart, removeProductFromCart = _a.removeProductFromCart, incrementProductQuantity = _a.incrementProductQuantity, decrementProductQuantity = _a.decrementProductQuantity, placeOrder = _a.placeOrder, products = _a.products, cart = _a.cart, requestProducts = _a.requestProducts;
    // technical debt - reuse this hook 
    react_1.useEffect(function () {
        requestProducts();
    }, [requestProducts]);
    return (React.createElement("section", { className: 'cart' },
        React.createElement("div", null, cart.cartProductIDs.length > 0 ? cart.cartProductIDs.map(function (id, index) {
            var product = products.productIDsToProductsMap[id];
            var props = {
                key: index,
                id: product.id,
                name: product.name,
                color: product.imageURLs[product.selectedColorIndex],
                price: product.price,
                imageURL: product.imageURLs[product.selectedColorIndex]
            };
            return React.createElement(CartProduct_1.CartProduct, __assign({}, props));
        }) : React.createElement("div", { className: "cart__message" }, "your cart is empty"))));
};
exports.default = react_redux_1.connect(function (state) { return state; }, __assign(__assign({}, cartActions_1.actionCreators), productsActions_1.actionCreators))(Cart);
//# sourceMappingURL=Cart.js.map