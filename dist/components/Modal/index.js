import PureController from "../../core/PureController";
import ModalComponent from "./Modal";
export default class ModalController extends PureController {
    constructor(targetEl, options) {
        super(targetEl, options);
    }
    add(props) {
        return new ModalComponent(Object.assign(Object.assign({}, props), { modalWidth: this.getOption("modalWidth"), removeDelay: this.getOption("removeDelay") })).mount(this.target);
    }
}
//# sourceMappingURL=index.js.map