import PureController from "../../core/PureController";
import ColorPaletteLayer from "./ColorPalette";
export default class ColorPaletteController extends PureController {
    constructor(targetEl, options) {
        super(targetEl, options, true);
    }
    open(props) {
        this.layer = new ColorPaletteLayer(Object.assign(Object.assign({}, props), { removeDelay: 0 }));
        if (this.layer instanceof ColorPaletteLayer) {
            return this.layer.mount(this.target);
        }
        return;
    }
    close() {
        if (this.layer instanceof ColorPaletteLayer) {
            return this.layer.unMount();
        }
    }
}
//# sourceMappingURL=index.js.map