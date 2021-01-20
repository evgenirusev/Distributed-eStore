"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProductsAccessories = exports.getProductsMale = exports.getProductsFemale = exports.requestProducts = void 0;
var constants_1 = require("../../constants");
var axios_1 = require("axios");
var requestProducts = function (queryParams) {
    var url = constants_1.PRODUCTS_URL + "?";
    if (queryParams) {
        Object.keys(queryParams).forEach(function (key) {
            url = url.concat(key + "=" + queryParams[key]);
        });
    }
    return axios_1.default.get(url);
};
exports.requestProducts = requestProducts;
var getProductsFemale = function () {
    return exports.requestProducts({ 'category': 'female' });
};
exports.getProductsFemale = getProductsFemale;
var getProductsMale = function () {
    return exports.requestProducts({ 'category': 'male' });
};
exports.getProductsMale = getProductsMale;
var getProductsAccessories = function () {
    return exports.requestProducts({ 'category': 'accessories' });
};
exports.getProductsAccessories = getProductsAccessories;
var getProductById = function (productId) {
    return axios_1.default.get(constants_1.PRODUCTS_URL + "/" + productId);
};
exports.getProductById = getProductById;
//# sourceMappingURL=products.js.map