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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
require("./NavMenu.css");
var auth_1 = require("../services/auth");
var index_1 = require("../index");
var user_1 = require("../state/user");
var CartWidget_1 = require("./cart/cartWidget/CartWidget");
var NavMenu = /** @class */ (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false
        };
        _this.toggle = function () {
            _this.setState({
                isOpen: !_this.state.isOpen
            });
        };
        return _this;
    }
    NavMenu.prototype.onLogout = function () {
        { /* technical debt - consider connecting NavMenu to Redux */ }
        index_1.store.dispatch({
            type: user_1.UserActionTypes.LOGOUT
        });
    };
    NavMenu.prototype.render = function () {
        return (React.createElement("header", null,
            React.createElement(reactstrap_1.Navbar, { className: "navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3", light: true },
                React.createElement(reactstrap_1.Container, null,
                    React.createElement(reactstrap_1.NavbarBrand, { tag: react_router_dom_1.Link, to: "/" }, "DistributedEStore.UI"),
                    React.createElement(reactstrap_1.NavbarToggler, { onClick: this.toggle, className: "mr-2" }),
                    React.createElement(reactstrap_1.Collapse, { className: "d-sm-inline-flex flex-sm-row-reverse", isOpen: this.state.isOpen, navbar: true },
                        React.createElement("ul", { className: "navbar-nav flex-grow" },
                            !auth_1.isUserLoggedIn() &&
                                React.createElement(React.Fragment, null,
                                    React.createElement(reactstrap_1.NavItem, null,
                                        React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/login" }, "Login")),
                                    React.createElement(reactstrap_1.NavItem, null,
                                        React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/register" }, "Register"))),
                            auth_1.isUserLoggedIn() && React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { onClick: this.onLogout, className: "text-dark" }, "Logout")),
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/cart" },
                                    React.createElement(CartWidget_1.default, null)))))))));
    };
    return NavMenu;
}(React.PureComponent));
exports.default = NavMenu;
//# sourceMappingURL=NavMenu.js.map