"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCartToLocalStorage = exports.loadCartState = void 0;
var loadCartState = function () {
    try {
        var serializedCartState = localStorage.getItem('cartState');
        if (serializedCartState === null) {
            return undefined;
        }
        return JSON.parse(serializedCartState);
    }
    catch (err) {
        return undefined;
    }
};
exports.loadCartState = loadCartState;
var saveCartToLocalStorage = function (cart) {
    try {
        var serializedCart = JSON.stringify(cart);
        localStorage.setItem('cartState', serializedCart);
    }
    catch (_a) {
        // handle
    }
};
exports.saveCartToLocalStorage = saveCartToLocalStorage;
//# sourceMappingURL=localStorageHelpers.js.map