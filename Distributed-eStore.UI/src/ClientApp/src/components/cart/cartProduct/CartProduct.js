"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProduct = void 0;
var React = require("react");
var CartProduct = function (_a) {
    var name = _a.name, price = _a.price, color = _a.color, imageURL = _a.imageURL;
    return React.createElement("div", { className: "cart-product" },
        React.createElement("a", { className: "cart-product__link", href: "#" },
            React.createElement("img", { sizes: "100vw", src: imageURL, className: "product__image" }),
            React.createElement("p", { className: "w-25 cart-product__name" },
                " ",
                name,
                " "),
            React.createElement("p", { className: "w-25 cart-product__color" },
                " ",
                color,
                " "),
            React.createElement("p", { className: "w-25 cart-product__price" },
                " ",
                price,
                " ")));
};
exports.CartProduct = CartProduct;
//# sourceMappingURL=CartProduct.js.map