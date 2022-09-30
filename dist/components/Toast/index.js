import PureController from "../../core/PureController";
import ToastComponent from "./Toast";
export default class ToastController extends PureController {
    constructor(targetEl, options) {
        super(targetEl, options);
    }
    add(props) {
        return new ToastComponent(Object.assign(Object.assign({}, props), { removeDelay: this.getOption("removeDelay") })).mount(this.target);
    }
}
//# sourceMappingURL=index.js.map