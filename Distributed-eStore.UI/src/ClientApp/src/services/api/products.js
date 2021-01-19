"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllProducts = void 0;
var constants_1 = require("../../constants");
var axios_1 = require("axios");
var getAllProducts = function () {
    return axios_1.default.get(constants_1.PRODUCTS_URL);
};
exports.getAllProducts = getAllProducts;
var getProductById = function (productId) {
    return axios_1.default.get(constants_1.PRODUCTS_URL + "/" + productId);
};
exports.getProductById = getProductById;
//# sourceMappingURL=getAllPosts.js.map