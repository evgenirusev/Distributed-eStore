"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var __1 = require("../");
require("./Product.css");
var productsActions_1 = require("../../../state/products/productsActions");
var Product = function (_a) {
    var id = _a.id, name = _a.name, price = _a.price, colors = _a.colors, imageURLs = _a.imageURLs, selectedColorIndex = _a.selectedColorIndex;
    return React.createElement("div", { className: "product" },
        React.createElement(react_router_dom_1.Link, { className: "product__link", to: "/products/" + id },
            React.createElement("img", { sizes: "100vw", src: imageURLs[selectedColorIndex], className: "product__image w-100" }),
            React.createElement("div", { className: "product__description" },
                React.createElement("p", { className: "product__name" },
                    " ",
                    name,
                    " "),
                React.createElement("p", { className: "product__price" },
                    " ",
                    price,
                    " "))),
        React.createElement("div", { className: "color-switcher" },
            React.createElement(__1.ColorSwitcher, { colors: colors, selectedColorIndex: selectedColorIndex, productId: id, selectProductColorAction: productsActions_1.actionCreators.selectProductColor })));
};
exports.Product = Product;
//# sourceMappingURL=Product.js.map