import PureController from "../../core/PureController";
import SelectModalComponent from "./SelectModal";
export default class SelectModalController extends PureController {
    constructor(targetEl, options) {
        super(targetEl, options);
    }
    add(props) {
        return new SelectModalComponent(Object.assign(Object.assign({}, props), { modalWidth: this.getOption("modalWidth"), removeDelay: this.getOption("removeDelay") })).mount(this.target);
    }
}
//# sourceMappingURL=index.js.map