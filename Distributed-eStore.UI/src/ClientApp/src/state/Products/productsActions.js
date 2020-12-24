"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionCreators = void 0;
var productsTypes_1 = require("./productsTypes");
var defaultColorIndex = 0;
exports.actionCreators = {
    requestProducts: function (firstName, lastName, email, password) { return function (dispatch, getState) {
    }; },
    selectProductColor: function (productId, colorIndex) { return function (dispatch, getState) {
        dispatch({
            state: getState(),
            type: productsTypes_1.ProductsActionTypes.SELECT_PRODUCT_COLOR,
            productId: productId,
            colorIndex: colorIndex
        });
    }; }
};
//# sourceMappingURL=productsActions.js.map