var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import OverlayComponent from "../../core/OverlayComponent";
export default class ModalComponent extends OverlayComponent {
    constructor({ children, modalWidth, data = {}, onClose = () => { }, }) {
        super({ data, modalWidth, defaultClassName: "modal" });
        this.children = children;
        this.onClose = () => onClose(this);
    }
    mount(target) {
        const element = this.getElement();
        const bodyEl = this.createElement("div");
        bodyEl.append(this.children);
        bodyEl.classList.add("body");
        element.appendChild(bodyEl);
        const closeEl = this.createElement("span");
        closeEl.innerText = "닫기";
        closeEl.classList.add("close");
        closeEl.onclick = () => __awaiter(this, void 0, void 0, function* () {
            yield this.unmount();
            this.onClose();
        });
        element.appendChild(closeEl);
        return super.mount(target);
    }
}
//# sourceMappingURL=Modal.js.map