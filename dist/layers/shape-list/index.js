import PureController from "../../core/PureController";
import ShapeListLayer from "./ShapeList";
export default class ShapeListController extends PureController {
    constructor(targetEl, options) {
        super(targetEl, options, true);
    }
    open(props) {
        this.layer = new ShapeListLayer(Object.assign(Object.assign({}, props), { removeDelay: 0 }));
        if (this.layer instanceof ShapeListLayer) {
            this.layer.mount(this.target);
        }
    }
    close() {
        if (this.layer instanceof ShapeListLayer) {
            this.layer.unmount();
        }
    }
}
//# sourceMappingURL=index.js.map