var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import MomentComponent from "../../core/MomentComponent";
export default class ToastComponent extends MomentComponent {
    constructor({ children, data = {}, removeDelay = 2000, momentDelay = 2000, onClick = () => { }, onClose = () => { }, }) {
        super({ momentDelay, data, defaultClassName: "toast" });
        this.children = children;
        this.removeDelay = removeDelay;
        this.onClick = onClick;
        this.onClose = (action) => onClose(this, action);
    }
    setRemoveDelay(removeDelay) {
        this.removeDelay = removeDelay;
        return this;
    }
    getRemoveDelay() {
        return this.removeDelay;
    }
    mount(target) {
        const element = this.getElement();
        const bodyEl = this.createElement("div");
        const closeEl = this.createElement("span");
        bodyEl.append(this.children);
        closeEl.innerText = "닫기";
        bodyEl.classList.add("text");
        closeEl.classList.add("close");
        element.appendChild(bodyEl);
        element.appendChild(closeEl);
        element.onclick = (e) => {
            element.onclick = () => { };
            if (e.composedPath().some((target) => target === closeEl)) {
                return;
            }
            this.unmount(true).then(this.onClick);
        };
        closeEl.onclick = () => {
            closeEl.onclick = () => { };
            this.unmount(true);
        };
        return super.mount(target);
    }
    unmount(action = false) {
        return new Promise((resolve) => {
            if (this.isMount()) {
                const customDelay = this.onClose(action);
                const delay = (!!customDelay || customDelay === 0 ? customDelay : this.getRemoveDelay());
                this.setRemoveDelay(delay);
            }
            else {
                const interval = setInterval(() => {
                    if (this.isUnmount()) {
                        clearInterval(interval);
                        return resolve(this);
                    }
                }, 1000);
            }
            this.unmounting();
            setTimeout(() => __awaiter(this, void 0, void 0, function* () { return yield super.unmount(); }), this.getRemoveDelay());
        });
    }
}
//# sourceMappingURL=Toast.js.map