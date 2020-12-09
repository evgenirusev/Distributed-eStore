"use strict";
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
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
it('renders without crashing', function () {
    var storeFake = function (state) { return ({
        default: function () { },
        subscribe: function () { },
        dispatch: function () { },
        getState: function () { return (__assign({}, state)); }
    }); };
    var store = storeFake({});
    ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.MemoryRouter, null,
            React.createElement(App_1.default, null))), document.createElement('div'));
});
//# sourceMappingURL=App.test.js.map