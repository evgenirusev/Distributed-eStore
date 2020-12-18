"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var React = require("react");
var ColorSwitcher_1 = require("./ColorSwitcher");
var Product = function (_a) {
    var name = _a.name, price = _a.price, colors = _a.colors, imageURLs = _a.imageURLs;
    return React.createElement("div", { className: "product" },
        React.createElement("a", { href: "route to /product?id" },
            React.createElement("img", { sizes: "100vw", src: "https://i.ibb.co/Bj9gQ40/F20-Accessories-173-800x.jpg", className: "product__image" }),
            React.createElement("p", { className: "product__name" },
                " ",
                name,
                " "),
            React.createElement("p", { className: "product__price" },
                " ",
                price,
                " ")),
        React.createElement("div", { className: "product__color-switcher" },
            React.createElement(ColorSwitcher_1.ColorSwitcher, { colors: colors })));
};
exports.Product = Product;
//# sourceMappingURL=Product.js.map