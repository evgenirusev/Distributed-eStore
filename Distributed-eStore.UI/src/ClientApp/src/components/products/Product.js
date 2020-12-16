"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Product = function (_a) {
    var name = _a.name, description = _a.description, price = _a.price, colors = _a.colors, imageURLs = _a.imageURLs;
    return React.createElement("div", { className: "product" },
        React.createElement("a", { href: "route to /product?id" },
            React.createElement("img", { sizes: "100vw", src: imageURLs[0], className: "product__image" }),
            React.createElement("p", { className: "product__name" }),
            React.createElement("p", { className: "product__price" },
                React.createElement("span", { className: "price" }, "$88"))),
        React.createElement("div", { className: "product__color-switcher" }));
};
//# sourceMappingURL=Product.js.map