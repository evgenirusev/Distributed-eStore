"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorBox = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
require("./ColorBox.css");
var productsActions_1 = require("../../../state/products/productsActions");
var ColorBox = function (_a) {
    var color = _a.color, isSelected = _a.isSelected;
    var defaultClass = "color-box";
    var isSelectedClass = defaultClass + "--isSelected";
    return React.createElement("div", { className: defaultClass + " " + (isSelected !== null && isSelected !== void 0 ? isSelected : isSelectedClass) },
        React.createElement("span", { className: "color-box__color", style: { backgroundColor: color } }));
};
exports.ColorBox = ColorBox;
var mapStateToProps = function (state) { return state.products; };
exports.default = react_redux_1.connect(mapStateToProps, productsActions_1.actionCreators.selectProductColor)(exports.ColorBox);
//# sourceMappingURL=ColorBox.js.map