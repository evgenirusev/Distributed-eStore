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
var cartTypes_1 = require("./cartTypes");
var initialState = {
    productIdToCartProductMap: {}
};
var reducer = function (state, incomingAction) {
    var _a, _b;
    if (state === void 0) { state = initialState; }
    var action = incomingAction;
    switch (action.type) {
        case cartTypes_1.CartActionTypes.ADD_TO_CART:
            {
                var cartProduct = action.cartProduct;
                var productId = cartProduct.id;
                if (!state.productIdToCartProductMap[productId]) {
                    return {
                        productIdToCartProductMap: __assign(__assign({}, state.productIdToCartProductMap), (_a = {}, _a[productId] = __assign({}, cartProduct), _a))
                    };
                }
            }
        case cartTypes_1.CartActionTypes.REMOVE_FROM_CART:
            {
                var productId_1 = action.productId;
                Object.assign({}, state, {
                    productIdToCartProductMap: Object.keys(state.productIdToCartProductMap).reduce(function (result, key) {
                        if (key !== productId_1) {
                            result[key] = state.productIdToCartProductMap[key];
                        }
                        return result;
                    }, {})
                });
            }
        case cartTypes_1.CartActionTypes.CHANGE_QUANTITY:
            {
                var productId = action.productId, quantity = action.quantity;
                var product = state.productIdToCartProductMap[productId];
                if (product && quantity >= 0) {
                    return {
                        productIdToCartProductMap: __assign(__assign({}, state.productIdToCartProductMap), (_b = {}, _b[productId] = __assign(__assign({}, state.productIdToCartProductMap[productId]), { quantity: quantity }), _b))
                    };
                }
            }
        case cartTypes_1.CartActionTypes.PLACE_ORDER:
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=cartReducers.js.map