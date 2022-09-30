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
export default class MomentComponent extends PureComponent {
    constructor({ data, removeDelay, defaultClassName, momentDelay = 2000, }) {
        super({ data, removeDelay, defaultClassName });
        this.momentDelay = momentDelay;
        this.momentTimeout = null;
    }
    setMomentTimeout(momentTimeout) {
        this.momentTimeout = momentTimeout;
        return this;
    }
    mount(target) {
        const _super = Object.create(null, {
            mount: { get: () => super.mount }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.mount.call(this, target)
                .then(() => this.setMomentTimeout(window.setTimeout(() => this.unmount(), this.momentDelay)));
        });
    }
    unmount() {
        if (this.momentTimeout) {
            clearTimeout(this.momentTimeout);
            this.setMomentTimeout(null);
        }
        return super.unmount();
    }
}
//# sourceMappingURL=MomentComponent.js.map