import PureComponent from "../../core/PureComponent";
import { COLOR_LIST } from "./constants";
export default class ColorPaletteLayer extends PureComponent {
    constructor({ removeDelay, onColorSelect = () => { }, }) {
        super({ removeDelay, defaultClassName: 'toolbar__color-palette' });
        this.onColorSelect = onColorSelect;
    }
    mount(target) {
        var _a;
        const targetEl = this.getElement();
        const wrapperList = this.createElement('ul');
        COLOR_LIST.map(color => {
            const item = this.createElement('li');
            const colorBtn = this.createElement('label');
            colorBtn.style.width = '27px';
            colorBtn.style.height = '27px';
            colorBtn.style.display = 'inline-block';
            colorBtn.classList.add('color-unit');
            colorBtn.dataset.color = color;
            colorBtn.style.backgroundColor = color;
            item.classList.add(`btn-${color}`);
            item.appendChild(colorBtn);
            wrapperList.appendChild(item);
        });
        wrapperList.classList.add('wrapper');
        targetEl.appendChild(wrapperList);
        wrapperList.onclick = (event) => {
            const eTarget = event.target;
            if (eTarget.closest('li')) {
                const curColor = eTarget.dataset.color;
                if (curColor)
                    this.onColorSelect(curColor);
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
    unMount() {
        this.unmount();
    }
    onClose() {
        document.body.onclick = null;
    }
}
//# sourceMappingURL=ColorPalette.js.map