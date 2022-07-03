import PureComponent, { PureComponentProps } from "@/core/PureComponent";
import { COLOR_LIST } from "./constants";

export interface ColorPaletteLayerProps extends PureComponentProps {
  onColorSelect: (selectedColor: string) => void;
}
export default class ColorPaletteLayer extends PureComponent {
  private onColorSelect: (selectedColor: string) => void;

  constructor({
    removeDelay,
    onColorSelect = () => {},
  }: ColorPaletteLayerProps) {
    super({removeDelay, defaultClassName: 'toolbar__color-palette'})
    this.onColorSelect = onColorSelect;
  }

  mount(target: HTMLElement) {
    const targetEl = this.getElement();
    const wrapper = this.createElement('div');
    const list = this.createElement('ul');

    COLOR_LIST.map(color => {
      const item = this.createElement('li');
      const colorBtn = this.createElement('div');

      colorBtn.innerText = `[${color}]`;
      colorBtn.dataset.color = color;

      item.classList.add(`btn-${color}`);
      item.appendChild(colorBtn);
      
      list.appendChild(item);
    });

    wrapper.classList.add('wrapper');

    wrapper.appendChild(list);
    targetEl.appendChild(wrapper);

    list.onclick = (e: MouseEvent) => {
      const eTarget = e.target as HTMLElement;
      if (eTarget.closest('li')) {
        const curColor = eTarget.dataset.color;
        curColor && this.onColorSelect(curColor);
      }
    }

    document.querySelector('.toolbar')?.addEventListener('click', 
    e => {
      const eTarget = e.target as HTMLElement;
      if (!eTarget.contains(targetEl)) {
        this.unmount().then(this.closeLayer);
      }
    });

    return super.mount(target);
  }

  unMount() {
    this.unmount();
  }
  
  closeLayer() {
    document.body.onclick = null;
  }
}
