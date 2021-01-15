"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var userActions_1 = require("../../state/user/userActions");
var LogoutComponent = function (_a) {
    var logout = _a.logout;
    var history = react_router_dom_1.useHistory();
    logout();
    history.push("/");
    // technical debt
    return React.createElement(React.Fragment, null);
};
var Logout = react_redux_1.connect(null, userActions_1.userActionCreators)(LogoutComponent);
exports.default = Logout;
//# sourceMappingURL=Logout.js.map