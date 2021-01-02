"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var React = require("react");
var __1 = require("../");
require("./Product.css");
var Product = function (_a) {
    var id = _a.id, name = _a.name, price = _a.price, colors = _a.colors, imageURLs = _a.imageURLs, selectedColorIndex = _a.selectedColorIndex;
    return React.createElement("div", { className: "product" },
        React.createElement("a", { className: "product__link", href: "#" },
            React.createElement("img", { sizes: "100vw", src: imageURLs[selectedColorIndex], className: "product__image" }),
            React.createElement("div", { className: "product__description" },
                React.createElement("p", { className: "product__name" },
                    " ",
                    name,
                    " "),
                React.createElement("p", { className: "product__price" },
                    " ",
                    price,
                    " "))),
        React.createElement("div", { className: "product__color-switcher" },
            React.createElement(__1.ColorSwitcher, { colors: colors, selectedColorIndex: selectedColorIndex, productId: id })));
};
exports.Product = Product;
//# sourceMappingURL=Product.js.map