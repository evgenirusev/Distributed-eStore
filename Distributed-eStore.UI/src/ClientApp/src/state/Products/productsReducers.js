"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
var productsTypes_1 = require("./productsTypes");
var initialState = {
    productIDsToProductsMap: {}
};
var reducer = function (state, incomingAction) {
    if (state === void 0) { state = initialState; }
    var action = incomingAction;
    switch (action.type) {
        case productsTypes_1.ProductsActionTypes.REQUEST_ALL_ARRIVAL:
            var products = action.products;
            return {
                productIDsToProductsMap: products.reduce(function (acc, product) {
                    acc[product.id] = product;
                    return acc;
                }, {})
            };
        case productsTypes_1.ProductsActionTypes.SELECT_PRODUCT_COLOR:
            var productId = action.productId, colorIndex = action.colorIndex;
            var product = state.productIDsToProductsMap[productId];
            if (product && product.selectedColorIndex !== colorIndex && typeof product.colors[colorIndex] !== "undefined") {
                var modifiedState = Object.assign({}, state);
                console.log(modifiedState);
                modifiedState.productIDsToProductsMap[product.id].selectedColorIndex = colorIndex;
                return modifiedState;
            }
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=productsReducers.js.map