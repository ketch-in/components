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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
define("core/PureController", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFAULT_PURE_CONTROLLER_OPTIONS = {
        removeDelay: 2000,
        modalWidth: 200,
    };
    var PureController = (function () {
        function PureController(targetEl, options, keepContent) {
            if (keepContent === void 0) { keepContent = false; }
            this.target = targetEl;
            this.options = options || {};
            !keepContent && this.clear();
        }
        PureController.prototype.getOption = function (key) {
            return this.options[key] || DEFAULT_PURE_CONTROLLER_OPTIONS[key];
        };
        PureController.prototype.clear = function () {
            this.target.innerText = "";
        };
        return PureController;
    }());
    exports.default = PureController;
});
define("utils/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createElement = void 0;
    var BASE_CLASSNAME = "ketch-in-components";
    function createElement(tagName, options) {
        var el = document.createElement(tagName, options);
        el.className = BASE_CLASSNAME;
        return el;
    }
    exports.createElement = createElement;
});
define("core/PureComponent", ["require", "exports", "utils/index"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PureComponent = (function () {
        function PureComponent(_a) {
            var data = _a.data, defaultClassName = _a.defaultClassName, _b = _a.modalWidth, modalWidth = _b === void 0 ? 200 : _b;
            this.data = data;
            this.state = "unmount";
            this.defaultClassName = defaultClassName || "";
            this.modalWidth = modalWidth;
            this.element = this.createElement("div");
            this.element.classList.add("container");
        }
        PureComponent.prototype.createElement = function (tagName, options) {
            var el = (0, utils_1.createElement)(tagName, options);
            el.classList.add(this.defaultClassName);
            return el;
        };
        PureComponent.prototype.createSVGElement = function (width, height) {
            var xmlns = "http://www.w3.org/2000/svg";
            var el = document.createElementNS(xmlns, 'svg');
            el.setAttribute('width', width.toString());
            el.setAttribute('height', height.toString());
            el.classList.add(this.defaultClassName);
            return el;
        };
        PureComponent.prototype.getData = function () {
            return this.data;
        };
        PureComponent.prototype.setState = function (state) {
            this.state = state;
            if (this.isUnmounting()) {
                this.element.classList.add("unmount");
            }
            else {
                this.element.classList.remove("unmount");
            }
            return this;
        };
        PureComponent.prototype.getState = function () {
            return this.state;
        };
        PureComponent.prototype.getElement = function () {
            return this.element;
        };
        PureComponent.prototype.getWidth = function () {
            return this.modalWidth;
        };
        PureComponent.prototype.isMount = function () {
            return this.getState() === "mount";
        };
        PureComponent.prototype.isUnmount = function () {
            return this.getState() === "unmount";
        };
        PureComponent.prototype.isUnmounting = function () {
            return this.getState() === "unmounting";
        };
        PureComponent.prototype.clear = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.isUnmount()) return [3, 2];
                            return [4, this.unmount()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2, this];
                    }
                });
            });
        };
        PureComponent.prototype.mount = function (target) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    target.append(this.element);
                    return [2, this.setState("mount")];
                });
            });
        };
        PureComponent.prototype.unmounting = function () {
            this.setState("unmounting");
        };
        PureComponent.prototype.unmount = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.element.remove();
                            this.setState("unmount");
                            return [4, this.clear()];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        return PureComponent;
    }());
    exports.default = PureComponent;
});
define("core/OverlayComponent", ["require", "exports", "core/PureComponent"], function (require, exports, PureComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OverlayComponent = (function (_super) {
        __extends(OverlayComponent, _super);
        function OverlayComponent(_a) {
            var data = _a.data, defaultClassName = _a.defaultClassName;
            var _this = _super.call(this, { data: data, defaultClassName: defaultClassName, removeDelay: 0 }) || this;
            var overlay = _this.getOverlay();
            _this.overlay = overlay;
            return _this;
        }
        OverlayComponent.prototype.getOverlay = function () {
            var overlay = document.body.querySelector(".ketch-in-overlay");
            return overlay;
        };
        OverlayComponent.prototype.existModal = function () {
            var modal = document.body.querySelector(".ketch-in-components.select-modal,.ketch-in-components.modal");
            return !!modal;
        };
        OverlayComponent.prototype.createOverlay = function () {
            var overlayEl = document.createElement("div");
            overlayEl.classList.add("ketch-in-overlay");
            return overlayEl;
        };
        OverlayComponent.prototype.mount = function (target) {
            return __awaiter(this, void 0, void 0, function () {
                var element;
                return __generator(this, function (_a) {
                    if (!this.overlay) {
                        this.overlay = this.createOverlay();
                        document.body.appendChild(this.overlay);
                    }
                    element = this.getElement();
                    element.style.width = "".concat(this.getWidth(), "px");
                    return [2, _super.prototype.mount.call(this, target)];
                });
            });
        };
        OverlayComponent.prototype.unmount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, _super.prototype.unmount.call(this)];
                        case 1:
                            res = _a.sent();
                            if (!this.existModal()) {
                                this.overlay.remove();
                            }
                            return [2, res];
                    }
                });
            });
        };
        return OverlayComponent;
    }(PureComponent_1.default));
    exports.default = OverlayComponent;
});
define("components/Modal/Modal", ["require", "exports", "core/OverlayComponent"], function (require, exports, OverlayComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModalComponent = (function (_super) {
        __extends(ModalComponent, _super);
        function ModalComponent(_a) {
            var children = _a.children, modalWidth = _a.modalWidth, _b = _a.data, data = _b === void 0 ? {} : _b, _c = _a.onClose, onClose = _c === void 0 ? function () { } : _c;
            var _this = _super.call(this, { data: data, modalWidth: modalWidth, defaultClassName: "modal" }) || this;
            _this.children = children;
            _this.onClose = function () { return onClose(_this); };
            return _this;
        }
        ModalComponent.prototype.mount = function (target) {
            var _this = this;
            var element = this.getElement();
            var bodyEl = this.createElement("div");
            bodyEl.append(this.children);
            bodyEl.classList.add("body");
            element.appendChild(bodyEl);
            var closeEl = this.createElement("span");
            closeEl.innerText = "닫기";
            closeEl.classList.add("close");
            closeEl.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.unmount()];
                        case 1:
                            _a.sent();
                            this.onClose();
                            return [2];
                    }
                });
            }); };
            element.appendChild(closeEl);
            return _super.prototype.mount.call(this, target);
        };
        return ModalComponent;
    }(OverlayComponent_1.default));
    exports.default = ModalComponent;
});
define("components/Modal/index", ["require", "exports", "core/PureController", "components/Modal/Modal"], function (require, exports, PureController_1, Modal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModalController = (function (_super) {
        __extends(ModalController, _super);
        function ModalController(targetEl, options) {
            return _super.call(this, targetEl, options) || this;
        }
        ModalController.prototype.add = function (props) {
            return new Modal_1.default(__assign(__assign({}, props), { modalWidth: this.getOption("modalWidth"), removeDelay: this.getOption("removeDelay") })).mount(this.target);
        };
        return ModalController;
    }(PureController_1.default));
    exports.default = ModalController;
});
define("components/SelectModal/SelectModal", ["require", "exports", "core/OverlayComponent"], function (require, exports, OverlayComponent_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectModalComponent = (function (_super) {
        __extends(SelectModalComponent, _super);
        function SelectModalComponent(_a) {
            var children = _a.children, buttons = _a.buttons, modalWidth = _a.modalWidth, _b = _a.data, data = _b === void 0 ? {} : _b, _c = _a.onClick, onClick = _c === void 0 ? function () { } : _c, _d = _a.onClose, onClose = _d === void 0 ? function () { } : _d;
            var _this = _super.call(this, { data: data, modalWidth: modalWidth, defaultClassName: "select-modal" }) || this;
            _this.children = children;
            _this.buttons = buttons;
            _this.onClick = function (item, id, label) {
                onClick(item, id, label);
                return _this;
            };
            _this.onClose = function () { return onClose(_this); };
            return _this;
        }
        SelectModalComponent.prototype.click = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, _super.prototype.unmount.call(this)];
                        case 1:
                            _a.sent();
                            this.onClick(this, id, this.buttons[id]);
                            return [2];
                    }
                });
            });
        };
        SelectModalComponent.prototype.mount = function (target) {
            var _this = this;
            var element = this.getElement();
            var bodyEl = this.createElement("div");
            bodyEl.append(this.children);
            bodyEl.classList.add("body");
            element.style.width = "".concat(this.getWidth(), "px");
            element.appendChild(bodyEl);
            var closeEl = this.createElement("span");
            closeEl.innerText = "닫기";
            closeEl.classList.add("close");
            closeEl.onclick = function () {
                closeEl.onclick = function () { };
                _this.unmount().then(_this.onClose);
            };
            element.appendChild(closeEl);
            var btnsEl = this.createElement("div");
            btnsEl.classList.add("btns");
            element.appendChild(btnsEl);
            Object.keys(this.buttons).map(function (id) {
                var btn = _this.createElement("button");
                btn.classList.add(id);
                btn.classList.add("btn");
                btn.innerText = _this.buttons[id];
                btn.onclick = function () { return _this.click(id); };
                btnsEl.append(btn);
            });
            return _super.prototype.mount.call(this, target);
        };
        return SelectModalComponent;
    }(OverlayComponent_2.default));
    exports.default = SelectModalComponent;
});
define("components/SelectModal/index", ["require", "exports", "core/PureController", "components/SelectModal/SelectModal"], function (require, exports, PureController_2, SelectModal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectModalController = (function (_super) {
        __extends(SelectModalController, _super);
        function SelectModalController(targetEl, options) {
            return _super.call(this, targetEl, options) || this;
        }
        SelectModalController.prototype.add = function (props) {
            return new SelectModal_1.default(__assign(__assign({}, props), { modalWidth: this.getOption("modalWidth"), removeDelay: this.getOption("removeDelay") })).mount(this.target);
        };
        return SelectModalController;
    }(PureController_2.default));
    exports.default = SelectModalController;
});
define("core/MomentComponent", ["require", "exports", "core/PureComponent"], function (require, exports, PureComponent_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MomentComponent = (function (_super) {
        __extends(MomentComponent, _super);
        function MomentComponent(_a) {
            var data = _a.data, removeDelay = _a.removeDelay, defaultClassName = _a.defaultClassName, _b = _a.momentDelay, momentDelay = _b === void 0 ? 2000 : _b;
            var _this = _super.call(this, { data: data, removeDelay: removeDelay, defaultClassName: defaultClassName }) || this;
            _this.momentDelay = momentDelay;
            _this.momentTimeout = null;
            return _this;
        }
        MomentComponent.prototype.setMomentTimeout = function (momentTimeout) {
            this.momentTimeout = momentTimeout;
            return this;
        };
        MomentComponent.prototype.mount = function (target) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, _super.prototype.mount.call(this, target)
                            .then(function () {
                            return _this.setMomentTimeout(window.setTimeout(function () { return _this.unmount(); }, _this.momentDelay));
                        })];
                });
            });
        };
        MomentComponent.prototype.unmount = function () {
            if (this.momentTimeout) {
                clearTimeout(this.momentTimeout);
                this.setMomentTimeout(null);
            }
            return _super.prototype.unmount.call(this);
        };
        return MomentComponent;
    }(PureComponent_2.default));
    exports.default = MomentComponent;
});
define("components/Toast/Toast", ["require", "exports", "core/MomentComponent"], function (require, exports, MomentComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToastComponent = (function (_super) {
        __extends(ToastComponent, _super);
        function ToastComponent(_a) {
            var children = _a.children, _b = _a.data, data = _b === void 0 ? {} : _b, _c = _a.removeDelay, removeDelay = _c === void 0 ? 2000 : _c, _d = _a.momentDelay, momentDelay = _d === void 0 ? 2000 : _d, _e = _a.onClick, onClick = _e === void 0 ? function () { } : _e, _f = _a.onClose, onClose = _f === void 0 ? function () { } : _f;
            var _this = _super.call(this, { momentDelay: momentDelay, data: data, defaultClassName: "toast" }) || this;
            _this.children = children;
            _this.removeDelay = removeDelay;
            _this.onClick = onClick;
            _this.onClose = function (action) { return onClose(_this, action); };
            return _this;
        }
        ToastComponent.prototype.setRemoveDelay = function (removeDelay) {
            this.removeDelay = removeDelay;
            return this;
        };
        ToastComponent.prototype.getRemoveDelay = function () {
            return this.removeDelay;
        };
        ToastComponent.prototype.mount = function (target) {
            var _this = this;
            var element = this.getElement();
            var bodyEl = this.createElement("div");
            var closeEl = this.createElement("span");
            bodyEl.append(this.children);
            closeEl.innerText = "닫기";
            bodyEl.classList.add("text");
            closeEl.classList.add("close");
            element.appendChild(bodyEl);
            element.appendChild(closeEl);
            element.onclick = function (e) {
                element.onclick = function () { };
                if (e.composedPath().some(function (target) { return target === closeEl; })) {
                    return;
                }
                _this.unmount(true).then(_this.onClick);
            };
            closeEl.onclick = function () {
                closeEl.onclick = function () { };
                _this.unmount(true);
            };
            return _super.prototype.mount.call(this, target);
        };
        ToastComponent.prototype.unmount = function (action) {
            var _this = this;
            if (action === void 0) { action = false; }
            return new Promise(function (resolve) {
                if (_this.isMount()) {
                    var customDelay = _this.onClose(action);
                    var delay = (!!customDelay || customDelay === 0 ? customDelay : _this.getRemoveDelay());
                    _this.setRemoveDelay(delay);
                }
                else {
                    var interval_1 = setInterval(function () {
                        if (_this.isUnmount()) {
                            clearInterval(interval_1);
                            return resolve(_this);
                        }
                    }, 1000);
                }
                _this.unmounting();
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, _super.prototype.unmount.call(this)];
                        case 1: return [2, _a.sent()];
                    }
                }); }); }, _this.getRemoveDelay());
            });
        };
        return ToastComponent;
    }(MomentComponent_1.default));
    exports.default = ToastComponent;
});
define("components/Toast/index", ["require", "exports", "core/PureController", "components/Toast/Toast"], function (require, exports, PureController_3, Toast_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToastController = (function (_super) {
        __extends(ToastController, _super);
        function ToastController(targetEl, options) {
            return _super.call(this, targetEl, options) || this;
        }
        ToastController.prototype.add = function (props) {
            return new Toast_1.default(__assign(__assign({}, props), { removeDelay: this.getOption("removeDelay") })).mount(this.target);
        };
        return ToastController;
    }(PureController_3.default));
    exports.default = ToastController;
});
define("layers/color-palette/constants", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.COLOR_LIST = exports.WHITE_CODE = exports.BLACK_CODE = void 0;
    exports.BLACK_CODE = '#000000';
    exports.WHITE_CODE = '#FFFFFF';
    exports.COLOR_LIST = [
        exports.BLACK_CODE,
        '#262626',
        '#363636',
        '#555555',
        '#737373',
        '#999999',
        '#B2B2B2',
        '#C7C7C7',
        '#DBDBDB',
        '#EFEFEF',
        exports.WHITE_CODE,
        '#EF848C',
        '#FFDEDE',
        '#FFE3C7',
        '#FFC47B',
        '#CEF3FB',
        '#A3DED0',
        '#EE4753',
        '#FF8C1C',
        '#FFCC51',
        '#70C050',
        '#174A28',
        '#3897F0',
        '#1AA39C',
        '#89C4F4',
        '#1C8BC3',
        '#004E82',
        '#684172',
        '#9B6336',
        '#003960',
        '#1E3993',
        '#5300D2',
        '#740060',
        '#4F0041',
        '#432223',
    ];
});
define("layers/color-palette/ColorPalette", ["require", "exports", "core/PureComponent", "layers/color-palette/constants"], function (require, exports, PureComponent_3, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ColorPaletteLayer = (function (_super) {
        __extends(ColorPaletteLayer, _super);
        function ColorPaletteLayer(_a) {
            var removeDelay = _a.removeDelay, _b = _a.onColorSelect, onColorSelect = _b === void 0 ? function () { } : _b;
            var _this = _super.call(this, { removeDelay: removeDelay, defaultClassName: 'toolbar__color-palette' }) || this;
            _this.onColorSelect = onColorSelect;
            return _this;
        }
        ColorPaletteLayer.prototype.mount = function (target) {
            var _this = this;
            var _a;
            var targetEl = this.getElement();
            var wrapperList = this.createElement('ul');
            constants_1.COLOR_LIST.map(function (color) {
                var item = _this.createElement('li');
                var colorBtn = _this.createElement('label');
                colorBtn.style.width = '27px';
                colorBtn.style.height = '27px';
                colorBtn.style.display = 'inline-block';
                colorBtn.classList.add('color-unit');
                colorBtn.dataset.color = color;
                colorBtn.style.backgroundColor = color;
                item.classList.add("btn-".concat(color));
                item.appendChild(colorBtn);
                wrapperList.appendChild(item);
            });
            wrapperList.classList.add('wrapper');
            targetEl.appendChild(wrapperList);
            wrapperList.onclick = function (event) {
                var eTarget = event.target;
                if (eTarget.closest('li')) {
                    var curColor = eTarget.dataset.color;
                    if (curColor)
                        _this.onColorSelect(curColor);
                }
            };
            (_a = document.querySelector('.toolbar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
                var eTarget = e.target;
                if (!eTarget.contains(targetEl)) {
                    _this.unmount().then(_this.onClose);
                }
            });
            return _super.prototype.mount.call(this, target);
        };
        ColorPaletteLayer.prototype.unMount = function () {
            this.unmount();
        };
        ColorPaletteLayer.prototype.onClose = function () {
            document.body.onclick = null;
        };
        return ColorPaletteLayer;
    }(PureComponent_3.default));
    exports.default = ColorPaletteLayer;
});
define("layers/color-palette/index", ["require", "exports", "core/PureController", "layers/color-palette/ColorPalette"], function (require, exports, PureController_4, ColorPalette_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ColorPaletteController = (function (_super) {
        __extends(ColorPaletteController, _super);
        function ColorPaletteController(targetEl, options) {
            return _super.call(this, targetEl, options, true) || this;
        }
        ColorPaletteController.prototype.open = function (props) {
            this.layer = new ColorPalette_1.default(__assign(__assign({}, props), { removeDelay: 0 }));
            if (this.layer instanceof ColorPalette_1.default) {
                return this.layer.mount(this.target);
            }
            return;
        };
        ColorPaletteController.prototype.close = function () {
            if (this.layer instanceof ColorPalette_1.default) {
                return this.layer.unMount();
            }
        };
        return ColorPaletteController;
    }(PureController_4.default));
    exports.default = ColorPaletteController;
});
define("layers/shape-list/constants", ["require", "exports"], function (require, exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SHAPE_SVG_CODES = exports.SHAPE_LABEL = void 0;
    var SHAPE_LABEL;
    (function (SHAPE_LABEL) {
        SHAPE_LABEL["RECT"] = "rect";
        SHAPE_LABEL["ROUNDED_RECT"] = "rounded-rect";
        SHAPE_LABEL["CIRCLE"] = "circle";
        SHAPE_LABEL["ELLIPSE"] = "triangle";
    })(SHAPE_LABEL = exports.SHAPE_LABEL || (exports.SHAPE_LABEL = {}));
    exports.SHAPE_SVG_CODES = (_a = {},
        _a[SHAPE_LABEL.RECT] = "<rect x='5' y='5' width='20' height='20' fill='none' stroke='grey' />",
        _a[SHAPE_LABEL.ROUNDED_RECT] = "<rect x='5' y='5' rx='4' width='20' height='20' fill='none' stroke='grey' />",
        _a[SHAPE_LABEL.CIRCLE] = "<circle cx='15' cy='15' r='10' fill='none' stroke='grey' />",
        _a[SHAPE_LABEL.ELLIPSE] = "<ellipse cx='15' cy='16' rx='12' ry='8' fill='none' stroke='grey' />",
        _a);
});
define("layers/shape-list/ShapeList", ["require", "exports", "core/PureComponent", "layers/shape-list/constants"], function (require, exports, PureComponent_4, constants_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ShapeListLayer = (function (_super) {
        __extends(ShapeListLayer, _super);
        function ShapeListLayer(_a) {
            var removeDelay = _a.removeDelay, _b = _a.onShapeSelect, onShapeSelect = _b === void 0 ? function () { } : _b;
            var _this = _super.call(this, { removeDelay: removeDelay, defaultClassName: 'toolbar__shape-list' }) || this;
            _this.onShapeSelect = onShapeSelect;
            return _this;
        }
        ShapeListLayer.prototype.mount = function (target) {
            var _this = this;
            var _a;
            var targetEl = this.getElement();
            var wrapperList = this.createElement('ul');
            Object.entries(constants_2.SHAPE_SVG_CODES).map(function (_a) {
                var type = _a[0], svg = _a[1];
                var item = _this.createElement('li');
                var shapeBtn = _this.createSVGElement(40, 40);
                shapeBtn.style.borderRadius = '4px';
                shapeBtn.innerHTML = svg;
                shapeBtn.dataset.shape = type;
                item.classList.add("btn-".concat(type));
                item.appendChild(shapeBtn);
                wrapperList.appendChild(item);
            });
            wrapperList.classList.add('wrapper');
            targetEl.appendChild(wrapperList);
            wrapperList.onclick = function (event) {
                event.stopPropagation();
                var eTarget = event.target;
                if (eTarget.closest('li')) {
                    var curShape = eTarget.dataset.shape;
                    if (curShape)
                        _this.onShapeSelect({ type: curShape, svg: constants_2.SHAPE_SVG_CODES[curShape] });
                    _this.unmount();
                }
            };
            (_a = document.querySelector('.toolbar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
                var eTarget = e.target;
                if (!eTarget.contains(targetEl)) {
                    _this.unmount().then(_this.onClose);
                }
            });
            return _super.prototype.mount.call(this, target);
        };
        ShapeListLayer.prototype.unmount = function () {
            return _super.prototype.unmount.call(this);
        };
        ShapeListLayer.prototype.onClose = function () {
        };
        return ShapeListLayer;
    }(PureComponent_4.default));
    exports.default = ShapeListLayer;
});
define("layers/shape-list/index", ["require", "exports", "core/PureController", "layers/shape-list/ShapeList"], function (require, exports, PureController_5, ShapeList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ShapeListController = (function (_super) {
        __extends(ShapeListController, _super);
        function ShapeListController(targetEl, options) {
            return _super.call(this, targetEl, options, true) || this;
        }
        ShapeListController.prototype.open = function (props) {
            this.layer = new ShapeList_1.default(__assign(__assign({}, props), { removeDelay: 0 }));
            if (this.layer instanceof ShapeList_1.default) {
                this.layer.mount(this.target);
            }
        };
        ShapeListController.prototype.close = function () {
            if (this.layer instanceof ShapeList_1.default) {
                this.layer.unmount();
            }
        };
        return ShapeListController;
    }(PureController_5.default));
    exports.default = ShapeListController;
});
define("components/Toolbar/Toolbar", ["require", "exports", "core/PureComponent", "layers/color-palette/index", "layers/shape-list/index"], function (require, exports, PureComponent_5, color_palette_1, shape_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToolbarComponent = (function (_super) {
        __extends(ToolbarComponent, _super);
        function ToolbarComponent(_a) {
            var _b = _a.data, data = _b === void 0 ? {} : _b, _c = _a.status, status = _c === void 0 ? 'KetchIn' : _c, _d = _a.handlePen, handlePen = _d === void 0 ? function () { } : _d, _e = _a.handleShape, handleShape = _e === void 0 ? function () { } : _e, _f = _a.handleColor, handleColor = _f === void 0 ? function () { } : _f, _g = _a.onClear, onClear = _g === void 0 ? function () { } : _g;
            var _this = _super.call(this, { data: data, defaultClassName: 'toolbar' }) || this;
            _this.status = status;
            _this.handlePen = handlePen;
            _this.handleShape = handleShape;
            _this.handleColor = handleColor;
            _this.onClear = onClear;
            return _this;
        }
        ToolbarComponent.prototype.createTools = function (targetEl) {
            var _this = this;
            var pen = this.createElement('button');
            var shape = this.createElement('span');
            var palette = this.createElement('span');
            var clear = this.createElement('button');
            var shapeListController = new shape_list_1.default(shape, {});
            var colorPaletteController = new color_palette_1.default(palette, {});
            pen.classList.add('btn_pen');
            pen.innerHTML = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 220.001 220.001\">\n        <path d=\"M132.018,34.787l53.197,53.197L69.568,203.631L16.37,150.434L132.018,34.787z M212.696,60.502   c9.738-9.738,9.742-25.527,0-35.268l-17.93-17.93c-9.738-9.74-25.529-9.738-35.268,0l-17.346,17.347l53.199,53.196L212.696,60.502z   \"/>\n        <polygon points=\"0,220 59.34,213.86 6.143,160.661  \"/>\n      </svg>";
            palette.classList.add('btn_palette');
            palette.innerHTML = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n        <rect width=\"24\" height=\"24\" opacity=\"0\"/>\n      </svg>";
            shape.classList.add('btn_shape');
            shape.innerHTML = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n        <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n        <path d=\"M5 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM5 22a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4h6v2H9V4zm0 14h6v2H9v-2zM4 9h2v6H4V9zm14 0h2v6h-2V9z\"/>\n      </svg>";
            clear.classList.add('btn_clear');
            clear.innerHTML = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n        <path xmlns=\"http://www.w3.org/2000/svg\" d=\"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z\"/>\n      </svg>";
            var toggle = function (activeEl, forceActive) {
                if (activeEl !== palette) {
                    [pen, shape, palette, clear].filter(function (el) { return el !== activeEl; }).forEach(function (el) { return el.classList.remove('active'); });
                }
                var isActive = activeEl.classList.contains('active');
                if (forceActive === true || !isActive) {
                    activeEl.classList.add('active');
                }
                if (forceActive === false || isActive) {
                    activeEl.classList.remove('active');
                }
                return activeEl.classList.contains('active');
            };
            pen.onclick = function (event) {
                event.stopPropagation();
                toggle(pen);
                _this.handlePen();
            };
            palette.onclick = function (event) {
                event.stopPropagation();
                shapeListController.close();
                var isActive = toggle(palette);
                if (palette.children.length === 1 && isActive) {
                    colorPaletteController.open({
                        onColorSelect: function (selectedColor) {
                            palette.style.backgroundColor = selectedColor;
                            _this.handleColor(selectedColor);
                        },
                    });
                }
                else {
                    colorPaletteController.close();
                }
            };
            shape.onclick = function (event) {
                event.stopPropagation();
                colorPaletteController.close();
                var isActive = toggle(shape, true);
                if (shape.children.length === 1 && isActive) {
                    shapeListController.open({
                        onShapeSelect: function (selectedShape) {
                            _this.handleShape(selectedShape);
                        },
                    });
                }
                else {
                    shapeListController.close();
                }
            };
            clear.onclick = function (event) {
                event.stopPropagation();
                _this.onClear();
            };
            document.body.addEventListener('click', function () {
                if (palette.classList.contains('active')) {
                    toggle(palette, false);
                }
                shapeListController.close();
                colorPaletteController.close();
            });
            targetEl.appendChild(palette);
            targetEl.appendChild(pen);
            targetEl.appendChild(shape);
            targetEl.appendChild(clear);
        };
        ToolbarComponent.prototype.createHeader = function (targetEl) {
            var status = this.createElement('span');
            status.innerHTML = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n        <rect width=\"24\" height=\"24\" opacity=\"0\"/>\n        <path d=\"M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.58 2.58 0 0 0 2.53-1.89 2.52 2.52 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zM15.88 15h-1.65a2.49 2.49 0 0 0-1.87 4.15.49.49 0 0 1 .12.49c-.05.21-.28.34-.59.36a8 8 0 0 1-7.82-9.11A8.1 8.1 0 0 1 11.92 4H12a8.47 8.47 0 0 1 6.1 2.48 6.5 6.5 0 0 1 1.9 4.77A4.17 4.17 0 0 1 15.88 15z\"/>\n        <circle cx=\"12\" cy=\"6.5\" r=\"1.5\"/>\n        <path d=\"M15.25 7.2a1.5 1.5 0 1 0 2.05.55 1.5 1.5 0 0 0-2.05-.55z\"/>\n        <path d=\"M8.75 7.2a1.5 1.5 0 1 0 .55 2.05 1.5 1.5 0 0 0-.55-2.05z\"/>\n        <path d=\"M6.16 11.26a1.5 1.5 0 1 0 2.08.4 1.49 1.49 0 0 0-2.08-.4z\"/>\n      </svg>\n      <span>".concat(this.status, "</span>");
            status.classList.add('status');
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            var moveHandlers = function (event) {
                event.preventDefault();
                pos1 = pos3 - event.clientX;
                pos2 = pos4 - event.clientY;
                pos3 = event.clientX;
                pos4 = event.clientY;
                targetEl.style.top = (targetEl.offsetTop - pos2) + "px";
                targetEl.style.left = (targetEl.offsetLeft - pos1) + "px";
            };
            var removeHandlers = function () {
                document.onmouseup = null;
                document.onmousemove = null;
            };
            status.onmousedown = function (event) {
                event.preventDefault();
                pos3 = event.clientX;
                pos4 = event.clientY;
                document.onmouseup = removeHandlers;
                document.onmousemove = moveHandlers;
            };
            targetEl.appendChild(status);
        };
        ToolbarComponent.prototype.mount = function (target) {
            var targetEl = this.getElement();
            this.createHeader(targetEl);
            this.createTools(targetEl);
            return _super.prototype.mount.call(this, target);
        };
        return ToolbarComponent;
    }(PureComponent_5.default));
    exports.default = ToolbarComponent;
});
define("components/Toolbar/index", ["require", "exports", "core/PureController", "components/Toolbar/Toolbar"], function (require, exports, PureController_6, Toolbar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToolbarController = (function (_super) {
        __extends(ToolbarController, _super);
        function ToolbarController(targetEl, options) {
            return _super.call(this, targetEl, options) || this;
        }
        ToolbarController.prototype.add = function (props) {
            return new Toolbar_1.default(props).mount(this.target);
        };
        return ToolbarController;
    }(PureController_6.default));
    exports.default = ToolbarController;
});
define("index", ["require", "exports", "components/Modal/index", "components/SelectModal/index", "components/Toast/index", "components/Toolbar/index", "./assets/styles/index.css"], function (require, exports, Modal_2, SelectModal_2, Toast_2, Toolbar_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToolbarController = exports.ToastController = exports.SelectModalController = exports.ModalController = void 0;
    Object.defineProperty(exports, "ModalController", { enumerable: true, get: function () { return Modal_2.default; } });
    Object.defineProperty(exports, "SelectModalController", { enumerable: true, get: function () { return SelectModal_2.default; } });
    Object.defineProperty(exports, "ToastController", { enumerable: true, get: function () { return Toast_2.default; } });
    Object.defineProperty(exports, "ToolbarController", { enumerable: true, get: function () { return Toolbar_2.default; } });
});
//# sourceMappingURL=index.js.map