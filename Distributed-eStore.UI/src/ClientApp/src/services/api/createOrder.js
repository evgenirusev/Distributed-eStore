"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
var constants_1 = require("../../constants");
var axios_1 = require("axios");
var createOrder = function (order) {
    return axios_1.default.post(constants_1.CREATE_ORDER_URL, order);
};
exports.createOrder = createOrder;
//# sourceMappingURL=createOrder.js.map