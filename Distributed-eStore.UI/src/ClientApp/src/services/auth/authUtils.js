"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.logout = exports.login = void 0;
var axios_1 = require("axios");
var constants_1 = require("../../constants");
var login = function (email, password) {
    return axios_1.default.post(constants_1.loginUrl, { email: email, password: password })
        .then(function (response) {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};
exports.login = login;
var logout = function () {
    localStorage.removeItem("user");
};
exports.logout = logout;
var register = function (firstName, lastName, email, password) {
    return axios_1.default.post(constants_1.registerUrl, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
};
exports.register = register;
//# sourceMappingURL=authUtils.js.map