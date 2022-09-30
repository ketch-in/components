import PureComponent from "../../core/PureComponent";
import { SHAPE_SVG_CODES } from "./constants";
export default class ShapeListLayer extends PureComponent {
    constructor({ removeDelay, onShapeSelect = () => { }, }) {
        super({ removeDelay, defaultClassName: 'toolbar__shape-list' });
        this.onShapeSelect = onShapeSelect;
    }
    mount(target) {
        var _a;
        const targetEl = this.getElement();
        const wrapperList = this.createElement('ul');
        Object.entries(SHAPE_SVG_CODES).map(([type, svg]) => {
            const item = this.createElement('li');
            const shapeBtn = this.createSVGElement(40, 40);
            shapeBtn.style.borderRadius = '4px';
            shapeBtn.innerHTML = svg;
            shapeBtn.dataset.shape = type;
            item.classList.add(`btn-${type}`);
            item.appendChild(shapeBtn);
            wrapperList.appendChild(item);
        });
        wrapperList.classList.add('wrapper');
        targetEl.appendChild(wrapperList);
        wrapperList.onclick = (event) => {
            event.stopPropagation();
            const eTarget = event.target;
            if (eTarget.closest('li')) {
                const curShape = eTarget.dataset.shape;
                if (curShape)
                    this.onShapeSelect({ type: curShape, svg: SHAPE_SVG_CODES[curShape] });
                this.unmount();
            }
        };
        (_a = document.querySelector('.toolbar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', e => {
            const eTarget = e.target;
            if (!eTarget.contains(targetEl)) {
                this.unmount().then(this.onClose);
            }
        });
        return super.mount(target);
    }
    unmount() {
        return super.unmount();
    }
    onClose() {
    }
}
//# sourceMappingURL=ShapeList.js.map