"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProduct = void 0;
var React = require("react");
var CartProduct = function (_a) {
    var id = _a.id, name = _a.name, price = _a.price, color = _a.color, imageURL = _a.imageURL;
    return React.createElement("div", { className: "cart-product" },
        React.createElement("a", { href: "/products/" + id },
            React.createElement("div", { className: "d-flex justify-content-between" },
                React.createElement("div", { className: "" },
                    React.createElement("img", { sizes: "100vw", src: imageURL, className: "product__image" })),
                React.createElement("div", { className: "" },
                    React.createElement("p", { className: "cart-product__name" },
                        " ",
                        name,
                        " ")),
                React.createElement("div", { className: "" },
                    React.createElement("p", { className: "cart-product__color" },
                        " ",
                        color,
                        " ")),
                React.createElement("div", { className: "" },
                    React.createElement("p", { className: "cart-product__price" },
                        " ",
                        price,
                        " ")))));
};
exports.CartProduct = CartProduct;
//# sourceMappingURL=CartProduct.js.map