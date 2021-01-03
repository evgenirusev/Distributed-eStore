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
    cartProductIDs: []
};
var reducer = function (state, incomingAction) {
    if (state === void 0) { state = initialState; }
    var action = incomingAction;
    switch (action.type) {
        case cartTypes_1.CartActionTypes.ADD_TO_CART:
            return __assign({}, state);
        case cartTypes_1.CartActionTypes.REMOVE_FROM_CART:
        case cartTypes_1.CartActionTypes.INCREMENT_PRODUCT_QUANTITY:
        case cartTypes_1.CartActionTypes.DECREMENT_PRODUCT_QUANTITY:
        case cartTypes_1.CartActionTypes.PLACE_ORDER:
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=cartReducers.js.map