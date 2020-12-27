"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionCreators = void 0;
var api_1 = require("../../services/api/");
var productsTypes_1 = require("./productsTypes");
var defaultColorIndex = 0;
exports.actionCreators = {
    requestProducts: function () { return function (dispatch, getState) {
        if (getState()) {
            try {
                api_1.getAllPosts().then(function (response) {
                    var products = response.data;
                    products.forEach(function (p) { return p.selectedColorIndex = defaultColorIndex; });
                    dispatch({
                        products: products,
                        type: productsTypes_1.ProductsActionTypes.REQUEST_ALL_ARRIVAL
                    });
                });
            }
            catch (error) {
                console.error(error);
            }
        }
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