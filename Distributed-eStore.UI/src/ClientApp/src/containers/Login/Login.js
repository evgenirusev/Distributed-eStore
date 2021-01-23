"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var userActions_1 = require("../../state/user/userActions");
require("./Login.css");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            email: '',
            password: '',
            submitted: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    LoginPage.prototype.handleChange = function (event) {
        var _a;
        var _b = event.target, name = _b.name, value = _b.value;
        this.setState(__assign(__assign({}, this.state), (_a = {}, _a[name] = value, _a)));
    };
    LoginPage.prototype.handleSubmit = function (event) {
        event.preventDefault();
        this.setState({ submitted: true });
        var _a = this.state, email = _a.email, password = _a.password;
        if (email && password) {
            this.props.login(email, password);
        }
    };
    LoginPage.prototype.render = function () {
        var _a = this.state, email = _a.email, password = _a.password, submitted = _a.submitted;
        return this.props.userState.isLoggedIn
            ? (React.createElement(react_router_dom_1.Redirect, { to: "/" }))
            : (React.createElement("div", { className: "container login" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-8 login__container" },
                        React.createElement("h2", null, "Login"),
                        React.createElement("form", { name: "form", onSubmit: this.handleSubmit },
                            React.createElement("div", { className: 'form-group' + (submitted && !email ? ' has-error' : '') },
                                React.createElement("label", { htmlFor: "email" }, "Email"),
                                React.createElement("input", { type: "text", className: "form-control", name: "email", value: email, onChange: this.handleChange }),
                                submitted && !email &&
                                    React.createElement("div", { className: "help-block" }, "Email is required")),
                            React.createElement("div", { className: 'form-group' + (submitted && !password ? ' has-error' : '') },
                                React.createElement("label", { htmlFor: "password" }, "Password"),
                                React.createElement("input", { type: "password", className: "form-control", name: "password", value: password, onChange: this.handleChange }),
                                submitted && !password &&
                                    React.createElement("div", { className: "help-block" }, "Password is required")),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("button", { className: "btn btn-primary" }, "Login"),
                                React.createElement(react_router_dom_1.Link, { to: "/register", className: "btn btn-link" }, "Register")))))));
    };
    return LoginPage;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return { userState: state.user }; }, userActions_1.userActionCreators)(LoginPage);
//# sourceMappingURL=Login.js.map