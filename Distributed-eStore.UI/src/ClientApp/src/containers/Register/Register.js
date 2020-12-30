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
var RegisterPage = /** @class */ (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                role: 'admin'
            },
            submitted: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    RegisterPage.prototype.handleChange = function (event) {
        var _a;
        var _b = event.target, name = _b.name, value = _b.value;
        var user = this.state.user;
        this.setState({
            user: __assign(__assign({}, user), (_a = {}, _a[name] = value, _a))
        });
    };
    RegisterPage.prototype.handleSubmit = function (event) {
        event.preventDefault();
        this.setState({ submitted: true });
        var user = this.state.user;
        if (user.firstName && user.lastName && user.email && user.password) {
            this.props.register(user);
        }
    };
    RegisterPage.prototype.render = function () {
        var _a = this.state, user = _a.user, submitted = _a.submitted;
        return (React.createElement("div", { className: "col-md-6 col-md-offset-3" },
            React.createElement("h2", null, "Register"),
            React.createElement("form", { name: "form", onSubmit: this.handleSubmit },
                React.createElement("div", { className: 'form-group' + (submitted && !user.firstName ? ' has-error' : '') },
                    React.createElement("label", { htmlFor: "firstName" }, "First Name"),
                    React.createElement("input", { type: "text", className: "form-control", name: "firstName", value: user.firstName, onChange: this.handleChange }),
                    submitted && !user.firstName &&
                        React.createElement("div", { className: "help-block" }, "First Name is required")),
                React.createElement("div", { className: 'form-group' + (submitted && !user.lastName ? ' has-error' : '') },
                    React.createElement("label", { htmlFor: "lastName" }, "Last Name"),
                    React.createElement("input", { type: "text", className: "form-control", name: "lastName", value: user.lastName, onChange: this.handleChange }),
                    submitted && !user.lastName &&
                        React.createElement("div", { className: "help-block" }, "Last Name is required")),
                React.createElement("div", { className: 'form-group' + (submitted && !user.email ? ' has-error' : '') },
                    React.createElement("label", { htmlFor: "email" }, "Email"),
                    React.createElement("input", { type: "text", className: "form-control", name: "email", value: user.email, onChange: this.handleChange }),
                    submitted && !user.email &&
                        React.createElement("div", { className: "help-block" }, "Email is required")),
                React.createElement("div", { className: 'form-group' + (submitted && !user.password ? ' has-error' : '') },
                    React.createElement("label", { htmlFor: "password" }, "Password"),
                    React.createElement("input", { type: "password", className: "form-control", name: "password", value: user.password, onChange: this.handleChange }),
                    submitted && !user.password &&
                        React.createElement("div", { className: "help-block" }, "Password is required")),
                React.createElement("div", { className: "form-group" },
                    React.createElement("button", { className: "btn btn-primary" }, "Register"),
                    React.createElement(react_router_dom_1.Link, { to: "/login", className: "btn btn-link" }, "Cancel")))));
    };
    return RegisterPage;
}(React.Component));
exports.default = react_redux_1.connect(null, userActions_1.userActionCreators)(RegisterPage);
//# sourceMappingURL=Register.js.map