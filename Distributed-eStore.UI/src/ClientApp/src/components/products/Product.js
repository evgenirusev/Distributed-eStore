"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Product = function (_a) {
    var id = _a.id, name = _a.name, description = _a.description, price = _a.price, colors = _a.colors, imageURLs = _a.imageURLs;
    return React.createElement("div", { className: "product" },
        React.createElement("a", { href: "route to /product?id" },
            React.createElement("img", { sizes: "100vw", alt: "", src: "insert cnd url here", className: "product__image" }),
            React.createElement("p", { className: "product__name" }),
            React.createElement("p", { className: "product__price" },
                React.createElement("span", { className: "price" }, "$88"))));
    // note - create colors switcher here later
};
//# sourceMappingURL=Product.js.map