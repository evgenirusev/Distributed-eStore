"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionCreators = void 0;
var api_1 = require("../../services/api/");
var productsTypes_1 = require("./productsTypes");
var constants_1 = require("../../constants");
exports.actionCreators = {
    requestProducts: function () { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
        var products, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!getState()) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_1.getAllProducts()];
                case 2:
                    products = (_a.sent()).data;
                    products.forEach(function (p) { return p.selectedColorIndex = constants_1.DEFAULT_COLOR_INDEX; });
                    dispatch({
                        products: products,
                        type: productsTypes_1.ProductsActionTypes.REQUEST_ALL_ARRIVAL
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    // technical debt - handle this on client side
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }; },
    selectProductColor: function (productId, colorIndex) { return function (dispatch, getState) {
        dispatch({
            state: getState(),
            type: productsTypes_1.ProductsActionTypes.SELECT_PRODUCT_COLOR,
            productId: productId,
            colorIndex: colorIndex
        });
    }; },
    requestProductById: function (productId) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
        var product, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!getState()) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_1.getProductById(productId)];
                case 2:
                    product = (_a.sent()).data;
                    product.selectedColorIndex = constants_1.DEFAULT_COLOR_INDEX;
                    dispatch({
                        product: product,
                        type: productsTypes_1.ProductsActionTypes.REQUEST_BY_ID_ARRIVAL
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    // technical debt - handle this on client side
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }; }
};
//# sourceMappingURL=productsActions.js.map