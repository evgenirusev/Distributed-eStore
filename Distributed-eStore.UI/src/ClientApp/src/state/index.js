"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var Products = require("./products/");
var Cart = require("./cart/");
var User = require("./user/");
exports.reducers = {
    products: Products.reducer,
    user: User.reducer,
    cart: Cart.reducer
};
//# sourceMappingURL=index.js.map