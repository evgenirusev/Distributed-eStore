"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwitcher = void 0;
var React = require("react");
var __1 = require("../");
var index_1 = require("../../../index");
var productsActions_1 = require("../../../state/products/productsActions");
var ColorSwitcher = function (_a) {
    var colors = _a.colors, selectedColorIndex = _a.selectedColorIndex, productId = _a.productId;
    var defaultColorBoxClass = "color-box__color";
    return React.createElement("div", { className: "switcher" }, colors.map(function (color, index) {
        var isSelectedClass = index === selectedColorIndex
            ? defaultColorBoxClass + "--isSelected"
            : "";
        var colorBoxCssClass = defaultColorBoxClass + " " + isSelectedClass;
        return React.createElement(__1.ColorBox, { color: color, cssClass: colorBoxCssClass, selectProductColor: function () { return productsActions_1.actionCreators.selectProductColor(productId, index)(index_1.store.dispatch, index_1.store.getState); } });
    }));
};
exports.ColorSwitcher = ColorSwitcher;
//# sourceMappingURL=ColorSwitcher.js.map