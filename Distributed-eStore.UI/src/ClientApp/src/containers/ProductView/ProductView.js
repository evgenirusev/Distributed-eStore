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
var react_redux_1 = require("react-redux");
var react_1 = require("react");
require("./ProductView.css");
var productsActions_1 = require("../../state/products/productsActions");
var cartActions_1 = require("../../state/cart/cartActions");
var react_router_dom_1 = require("react-router-dom");
var products_1 = require("../../components/products");
var react_router_dom_2 = require("react-router-dom");
var ProductView = function (_a) {
    var requestProductById = _a.requestProductById, addProductToCart = _a.addProductToCart, products = _a.products;
    var history = react_router_dom_2.useHistory();
    var productId = react_router_dom_1.useParams().productId;
    var sizesList = ["6", "7", "8", "9", "10"];
    var _b = react_1.useState(sizesList[0]), selectedSize = _b[0], selectSizeIndex = _b[1];
    react_1.useEffect(function () {
        requestProductById(productId);
    }, [requestProductById, productId]);
    var product = products.productIDsToProductsMap[productId];
    if (product) {
        var imageURLs_1 = product.imageURLs, colors_1 = product.colors, description = product.description, name_1 = product.name, price_1 = product.price, selectedColorIndex_1 = product.selectedColorIndex;
        var onAddToCart = function () {
            addProductToCart({
                id: productId,
                name: name_1,
                price: price_1,
                color: colors_1[selectedColorIndex_1],
                imageURL: imageURLs_1[selectedColorIndex_1],
                quantity: 1,
                size: selectedSize
            });
            history.push("/cart");
        };
        return (React.createElement("section", { className: 'product-view row' },
            React.createElement("div", { className: "product-view__image-container col-sm-6 col-lg-7" },
                React.createElement("img", { sizes: "100vw", src: imageURLs_1[selectedColorIndex_1], className: "product-view__image w-100" })),
            React.createElement("div", { className: "product-view__description product-info col-sm-6 col-lg-5" },
                React.createElement("h1", { className: "product-view__name" }, name_1),
                React.createElement("div", null,
                    "$",
                    price_1),
                React.createElement("hr", null),
                React.createElement("div", { className: "color-switcher" },
                    React.createElement("p", null, "Color:"),
                    React.createElement(products_1.ColorSwitcher, { colors: colors_1, selectedColorIndex: selectedColorIndex_1, productId: productId, selectProductColorAction: productsActions_1.actionCreators.selectProductColor })),
                React.createElement("div", { className: "product-view__size-selector" },
                    React.createElement("p", null,
                        "Size",
                        React.createElement("span", { className: "product-view__size-tag" }, "Just a few left")),
                    sizesList.map(function (size, index) {
                        return React.createElement("button", { type: "button", className: "product-view__value-selector " + (size === selectedSize && 'product-view__value-selector--selected'), onClick: function () { selectSizeIndex(size); }, key: "size-" + index }, size);
                    })),
                React.createElement("button", { className: "product-view__add-to-cart-button", onClick: onAddToCart }, "ADD TO CART"),
                React.createElement("div", { className: "product-view__details" },
                    React.createElement("p", null, "Details"),
                    React.createElement("p", null, description)))));
    }
    return React.createElement(React.Fragment, null);
};
var mapStateToProps = function (state) {
    return { products: state.products };
};
exports.default = react_redux_1.connect(mapStateToProps, __assign(__assign({}, productsActions_1.actionCreators), cartActions_1.actionCreators))(ProductView);
//# sourceMappingURL=ProductView.js.map