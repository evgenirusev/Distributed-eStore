"use strict";
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