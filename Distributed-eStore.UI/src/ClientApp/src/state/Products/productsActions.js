"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionCreators = void 0;
var api_1 = require("../../api");
var productsTypes_1 = require("./productsTypes");
exports.actionCreators = {
    requestAllProducts: function () { return function (dispatch, getState) {
        if (getState()) {
            api_1.getAllPosts()
                .then(function (products) {
                dispatch({
                    type: productsTypes_1.ProductsActionTypes.REQUEST_ALL_ARRIVAL,
                    products: products
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }; }
};
//# sourceMappingURL=productsActions.js.map