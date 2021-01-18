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
var CartWidget_1 = require("../../components/cart/cartWidget/CartWidget");
var react_redux_1 = require("react-redux");
var userActions_1 = require("../../state/user/userActions");
var NavMenuComponent = /** @class */ (function (_super) {
    __extends(NavMenuComponent, _super);
    function NavMenuComponent() {
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
    NavMenuComponent.prototype.render = function () {
        return (React.createElement("header", null,
            React.createElement(reactstrap_1.Navbar, { className: "navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow", light: true },
                React.createElement(reactstrap_1.Container, null,
                    React.createElement(reactstrap_1.NavbarBrand, { tag: react_router_dom_1.Link, to: "/" }, "DistributedEStore.UI"),
                    React.createElement(reactstrap_1.NavbarToggler, { onClick: this.toggle, className: "mr-2" }),
                    React.createElement(reactstrap_1.Collapse, { className: "d-sm-inline-flex flex-sm-row-reverse", isOpen: this.state.isOpen, navbar: true },
                        React.createElement("ul", { className: "navbar-nav flex-grow" },
                            !this.props.user.isLoggedIn &&
                                React.createElement(React.Fragment, null,
                                    React.createElement(reactstrap_1.NavItem, null,
                                        React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/login" }, "Login")),
                                    React.createElement(reactstrap_1.NavItem, null,
                                        React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/register" }, "Register"))),
                            this.props.user.isLoggedIn && React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/logout" }, "Logout")),
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/cart" },
                                    React.createElement(CartWidget_1.CartWidget, { numberOfItems: Object.keys(this.props.cart.productIdToCartProductMap).length })))))))));
    };
    return NavMenuComponent;
}(React.PureComponent));
var NavMenu = react_redux_1.connect(function (state) { return state; }, userActions_1.userActionCreators)(NavMenuComponent);
exports.default = NavMenu;
//# sourceMappingURL=NavMenu.js.map