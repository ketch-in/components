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
export default class SelectModalComponent extends OverlayComponent {
    constructor({ children, buttons, modalWidth, data = {}, onClick = () => { }, onClose = () => { }, }) {
        super({ data, modalWidth, defaultClassName: "select-modal" });
        this.children = children;
        this.buttons = buttons;
        this.onClick = (item, id, label) => {
            onClick(item, id, label);
            return this;
        };
        this.onClose = () => onClose(this);
    }
    click(id) {
        const _super = Object.create(null, {
            unmount: { get: () => super.unmount }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.unmount.call(this);
            this.onClick(this, id, this.buttons[id]);
        });
    }
    mount(target) {
        const element = this.getElement();
        const bodyEl = this.createElement("div");
        bodyEl.append(this.children);
        bodyEl.classList.add("body");
        element.style.width = `${this.getWidth()}px`;
        element.appendChild(bodyEl);
        const closeEl = this.createElement("span");
        closeEl.innerText = "닫기";
        closeEl.classList.add("close");
        closeEl.onclick = () => {
            closeEl.onclick = () => { };
            this.unmount().then(this.onClose);
        };
        element.appendChild(closeEl);
        const btnsEl = this.createElement("div");
        btnsEl.classList.add("btns");
        element.appendChild(btnsEl);
        Object.keys(this.buttons).map((id) => {
            const btn = this.createElement("button");
            btn.classList.add(id);
            btn.classList.add("btn");
            btn.innerText = this.buttons[id];
            btn.onclick = () => this.click(id);
            btnsEl.append(btn);
        });
        return super.mount(target);
    }
}
//# sourceMappingURL=SelectModal.js.map