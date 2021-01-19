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
exports.reducer = void 0;
var constants_1 = require("../../constants");
var productsTypes_1 = require("./productsTypes");
var initialState = {
    categoryToProductMaps: {},
    currentCategory: constants_1.ProductCategories.FEMALE
};
var shouldUpdateColor = function (product, colorIndex) { return product && product.selectedColorIndex !== colorIndex && typeof product.colors[colorIndex] !== "undefined"; };
var composeProducts = function (state, currentCategory, action) {
    var _a;
    var products = action.products;
    return __assign(__assign({}, state), { currentCategory: currentCategory, categoryToProductMaps: __assign(__assign({}, state.categoryToProductMaps), (_a = {}, _a[currentCategory] = products, _a)) });
};
var reducer = function (state, incomingAction) {
    var _a, _b, _c, _d;
    if (state === void 0) { state = initialState; }
    var action = incomingAction;
    switch (action.type) {
        case productsTypes_1.ProductsActionTypes.REQUEST_PRODUCTS_FEMALE:
            {
                return composeProducts(state, constants_1.ProductCategories.FEMALE, action);
            }
        case productsTypes_1.ProductsActionTypes.REQUEST_PRODUCTS_MALE:
            {
                return composeProducts(state, constants_1.ProductCategories.MALE, action);
            }
        case productsTypes_1.ProductsActionTypes.REQUEST_PRODUCTS_ACCESSORIES:
            {
                return composeProducts(state, constants_1.ProductCategories.ACCESSORIES, action);
            }
        case productsTypes_1.ProductsActionTypes.SELECT_PRODUCT_COLOR:
            {
                var productId = action.productId, colorIndex = action.colorIndex, productCategory = action.productCategory;
                var product = state.categoryToProductMaps[productCategory][productId];
                if (shouldUpdateColor(product, colorIndex)) {
                    return __assign(__assign({}, state), { categoryToProductMaps: __assign(__assign({}, state.categoryToProductMaps), (_a = {}, _a[productCategory] = __assign(__assign({}, state.categoryToProductMaps[productCategory]), (_b = {}, _b[productId] = __assign(__assign({}, state.categoryToProductMaps[productId]), { selectedColorIndex: colorIndex }), _b)), _a)) });
                }
            }
        case productsTypes_1.ProductsActionTypes.REQUEST_BY_ID_ARRIVAL:
            {
                var product = action.product;
                if (product) {
                    return __assign(__assign({}, state), { categoryToProductMaps: __assign(__assign({}, state.categoryToProductMaps), (_c = {}, _c[product.category] = __assign(__assign({}, state.categoryToProductMaps[product.category]), (_d = {}, _d[product.id] = product, _d)), _c)) });
                }
            }
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=productsReducers.js.map