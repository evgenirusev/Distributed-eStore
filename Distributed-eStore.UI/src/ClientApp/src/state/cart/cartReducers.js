"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
var cartTypes_1 = require("./cartTypes");
var initialState = {
    cartProductIDs: []
};
var reducer = function (state, incomingAction) {
    if (state === void 0) { state = initialState; }
    var action = incomingAction;
    switch (action.type) {
        case cartTypes_1.CartActionTypes.ADD_TO_CART:
            {
                var productId = action.productId;
                return {
                    cartProductIDs: __spreadArrays(state.cartProductIDs, [productId])
                };
            }
        case cartTypes_1.CartActionTypes.REMOVE_FROM_CART:
            {
                var productId = action.productId;
                if (!state.cartProductIDs.includes(productId)) {
                    var productIdIndex = state.cartProductIDs.indexOf(productId);
                    if (productIdIndex > -1) {
                        return {
                            cartProductIDs: __spreadArrays(state.cartProductIDs.slice(0, productIdIndex), state.cartProductIDs.slice(productIdIndex))
                        };
                    }
                }
            }
        case cartTypes_1.CartActionTypes.INCREMENT_PRODUCT_QUANTITY:
        case cartTypes_1.CartActionTypes.DECREMENT_PRODUCT_QUANTITY:
        case cartTypes_1.CartActionTypes.PLACE_ORDER:
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=cartReducers.js.map