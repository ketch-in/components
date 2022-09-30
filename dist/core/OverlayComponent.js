var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PureComponent from "./PureComponent";
export default class OverlayComponent extends PureComponent {
    constructor({ data, defaultClassName, }) {
        super({ data, defaultClassName, removeDelay: 0 });
        const overlay = this.getOverlay();
        this.overlay = overlay;
    }
    getOverlay() {
        const overlay = document.body.querySelector(".ketch-in-overlay");
        return overlay;
    }
    existModal() {
        const modal = document.body.querySelector(".ketch-in-components.select-modal,.ketch-in-components.modal");
        return !!modal;
    }
    createOverlay() {
        const overlayEl = document.createElement("div");
        overlayEl.classList.add("ketch-in-overlay");
        return overlayEl;
    }
    mount(target) {
        const _super = Object.create(null, {
            mount: { get: () => super.mount }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.overlay) {
                this.overlay = this.createOverlay();
                document.body.appendChild(this.overlay);
            }
            const element = this.getElement();
            element.style.width = `${this.getWidth()}px`;
            return _super.mount.call(this, target);
        });
    }
    unmount() {
        const _super = Object.create(null, {
            unmount: { get: () => super.unmount }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield _super.unmount.call(this);
            if (!this.existModal()) {
                this.overlay.remove();
            }
            return res;
        });
    }
}
//# sourceMappingURL=OverlayComponent.js.map