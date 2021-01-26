"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
var constants_1 = require("../../constants");
var axios_1 = require("axios");
var createOrder = function (order) {
    var userData = localStorage.getItem("user");
    if (userData) {
        var parsedUserData = JSON.parse(userData);
        if (parsedUserData["accessToken"]) {
            return axios_1.default.post(constants_1.CREATE_ORDER_URL, order, {
                headers: { Authorization: "Bearer " + parsedUserData["accessToken"] }
            });
        }
    }
    throw "user is not logged in!";
};
exports.createOrder = createOrder;
//# sourceMappingURL=createOrder.js.map