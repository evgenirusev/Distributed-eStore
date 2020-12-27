"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = void 0;
var constants_1 = require("../../constants");
var axios_1 = require("axios");
var getAllPosts = function () {
    return axios_1.default.get(constants_1.getAllPostsUrl);
};
exports.getAllPosts = getAllPosts;
//# sourceMappingURL=getAllPosts.js.map