"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var productsReducers_1 = require("./products/productsReducers");
var Cart = require("./cart/");
var User = require("./user/");
exports.reducers = {
    products: productsReducers_1.reducer,
    user: User.reducer,
    cart: Cart.reducer
};
//# sourceMappingURL=index.js.map