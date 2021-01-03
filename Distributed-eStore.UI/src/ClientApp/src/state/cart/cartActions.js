"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionCreators = void 0;
var _1 = require(".");
exports.actionCreators = {
    addProductToCart: function (productId) { return function (dispatch, getState) {
        dispatch({
            type: _1.CartActionTypes.ADD_TO_CART,
            productId: productId
        });
    }; },
    removeProductFromCart: function (productId) { return function (dispatch, getState) {
        dispatch({
            type: _1.CartActionTypes.REMOVE_FROM_CART,
            productId: productId
        });
    }; },
    incrementProductQuantity: function (productId) { return function (dispatch, getState) {
        dispatch({
            type: _1.CartActionTypes.INCREMENT_PRODUCT_QUANTITY,
            productId: productId
        });
    }; },
    decrementProductQuantity: function (productId) { return function (dispatch, getState) {
        dispatch({
            type: _1.CartActionTypes.DECREMENT_PRODUCT_QUANTITY,
            productId: productId
        });
    }; },
    placeOrder: function () { return function (dispatch, getState) {
        dispatch({
            type: _1.CartActionTypes.PLACE_ORDER
        });
    }; }
};
//# sourceMappingURL=cartActions.js.map