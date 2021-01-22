"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProduct = void 0;
var React = require("react");
require("./CartProduct.css");
var CartProduct = function (_a) {
    var cart = _a.cart, onQuantityChange = _a.onQuantityChange;
    var id = cart.id, name = cart.name, price = cart.price, color = cart.color, imageURL = cart.imageURL, size = cart.size, quantity = cart.quantity;
    var onChange = function (event) {
        var value = event.target.value;
        onQuantityChange(id, value);
    };
    return React.createElement("div", { className: "cart-product" },
        React.createElement("div", { className: "d-flex justify-content-between" },
            React.createElement("div", null,
                React.createElement("a", { href: "/products/" + id },
                    React.createElement("img", { src: imageURL, className: "cart-product__image" }))),
            React.createElement("div", null,
                React.createElement("p", null, "Item"),
                React.createElement("i", { className: "cart-product__name text-danger" },
                    " ",
                    name,
                    " "),
                React.createElement("strong", { className: "cart-product__price d-block" },
                    " $",
                    price,
                    " "),
                React.createElement("strong", { className: "d-block" },
                    "Color - ",
                    color,
                    " "),
                React.createElement("strong", { className: "d-block" },
                    "Size - ",
                    size,
                    " ")),
            React.createElement("div", { className: "" },
                React.createElement("p", null, "Quantity:"),
                React.createElement("input", { type: "number", className: "cart-product__input", onChange: onChange, value: quantity }))));
};
exports.CartProduct = CartProduct;
//# sourceMappingURL=CartProduct.js.map