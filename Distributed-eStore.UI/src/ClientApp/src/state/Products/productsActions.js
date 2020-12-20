"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionCreators = void 0;
var api_1 = require("../../api");
var productsTypes_1 = require("./productsTypes");
var defaultColorIndex = 0;
exports.actionCreators = {
    requestProducts: function () { return function (dispatch, getState) {
        if (getState()) {
            api_1.getAllPosts()
                .then(function (products) {
                products.forEach(function (p) { return p.selectedColorIndex = defaultColorIndex; });
                dispatch({
                    products: products,
                    type: productsTypes_1.ProductsActionTypes.REQUEST_ALL_ARRIVAL
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }; }
};
//# sourceMappingURL=productsActions.js.map