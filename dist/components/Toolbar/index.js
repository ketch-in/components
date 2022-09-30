import PureController from "../../core/PureController";
import ToolbarComponent from "./Toolbar";
export default class ToolbarController extends PureController {
    constructor(targetEl, options) {
        super(targetEl, options);
    }
    add(props) {
        return new ToolbarComponent(props).mount(this.target);
    }
}
//# sourceMappingURL=index.js.map