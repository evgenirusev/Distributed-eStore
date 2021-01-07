"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwitcher = void 0;
var React = require("react");
var __1 = require("../");
var index_1 = require("../../../index");
var ColorSwitcher = function (_a) {
    var colors = _a.colors, selectedColorIndex = _a.selectedColorIndex, productId = _a.productId, selectProductColorAction = _a.selectProductColorAction;
    var defaultBorderClass = "color-box__border";
    return React.createElement("div", { className: "switcher" }, colors.map(function (color, index) {
        var isSelectedBorderClass = index === selectedColorIndex
            ? defaultBorderClass + "--isSelected"
            : "";
        var borderCssClass = defaultBorderClass + " " + isSelectedBorderClass;
        return React.createElement(__1.ColorBox, { key: productId + "-" + index, color: color, borderClass: borderCssClass, selectProductColor: function () { return selectProductColorAction(productId, index)(index_1.store.dispatch, index_1.store.getState); } });
    }));
};
exports.ColorSwitcher = ColorSwitcher;
//# sourceMappingURL=ColorSwitcher.js.map