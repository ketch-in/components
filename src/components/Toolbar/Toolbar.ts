import PureComponent, { PureComponentProps } from "@/core/PureComponent";
import ColorPaletteController from "@/layers/color-palette";
import ShapeListController from "@/layers/shape-list";
import { Shape } from "@/layers/shape-list/ShapeList";

export interface ToolbarComponentProps extends PureComponentProps {
  status: string; // TODO: status type 설정
  handlePen: () => void;
  handleShape: (selectedShape: Shape) => void;
  handleColor: (selectedColor: string) => void;
  onClear: () => void;
}

export default class ToolbarComponent extends PureComponent {
  private status: string;
  private handlePen: () => void;
  private handleShape: (selectedShape: Shape) => void;
  private handleColor: (selectedColor: string) => void;
  private onClear: () => void;

  constructor({
    data = {},
    status = '',
    handlePen = () => {},
    handleShape = () => {},
    handleColor = () => {},
    onClear = () => {},
  }: ToolbarComponentProps) {
    super({data, defaultClassName: 'toolbar'})
    this.status = status;
    this.handlePen = handlePen;
    this.handleShape = handleShape;
    this.handleColor = handleColor;
    this.onClear = onClear;
  }

  mount(target: HTMLElement) {
    const targetEl = this.getElement();
    const wrapper = this.createElement('div');
    const status = this.createElement('span');
    const pen = this.createElement('button');
    const shape = this.createElement('span');
    const palette = this.createElement('span');
    const clear = this.createElement('button');

    const shapeListController = new ShapeListController(shape, {});
    const colorPaletteController = new ColorPaletteController(palette, {});

    /* TODO: 
    - status socket에서 받은 값 연결
    - pen, clear, shape: 아이콘 적용
    - shape, palette: custom component로 변경
    */

    wrapper.classList.add('wrapper');

    status.innerText = `[${this.status}]`;
    status.classList.add('status');

    pen.innerText = 'PEN';
    pen.classList.add('btn_pen');
    
    shape.innerText = '[SHAPE_LIST]';
    shape.classList.add('select_shape');
    
    palette.classList.add('palette');
    palette.innerText = '[PALETTE]';
    
    clear.innerText = 'CLEAR_ALL';
    clear.classList.add('btn_clear')

    wrapper.appendChild(status);
    wrapper.appendChild(pen);
    wrapper.appendChild(shape);
    wrapper.appendChild(palette);
    wrapper.appendChild(clear);
    targetEl.appendChild(wrapper);

    pen.onclick = this.handlePen;
    
    shape.onclick = () => {
      if (!shape.children.length) {
        shapeListController.open({
          onShapeSelect: (selectedShape: Shape) => this.handleShape(selectedShape),
        });
      } else {
        shapeListController.close();
      }
    }

    palette.onclick = () => {
      if (!palette.children.length) {
        colorPaletteController.open({
          onColorSelect: (selectedColor: string) => this.handleColor(selectedColor),
        });
      } else {
        colorPaletteController.close();
      }
    };
    clear.onclick = this.onClear;

    return super.mount(target);
  }  
}
