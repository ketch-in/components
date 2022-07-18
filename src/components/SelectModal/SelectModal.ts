import PureComponent, { PureComponentProps } from "@/core/PureComponent";

interface SelectModalButtonsInterface {
  [id: string]: string;
}

export interface SelectModalComponentProps extends PureComponentProps {
  children: HTMLElement;
  buttons: SelectModalButtonsInterface;
  onClick?: (item: SelectModalComponent, id: string, label: string) => void;
  onClose?: (item: SelectModalComponent) => number | void;
}

export default class SelectModalComponent extends PureComponent {
  private children: HTMLElement;
  private buttons: SelectModalButtonsInterface;

  private onClose: () => number | void;

  private onClick: (
    item: SelectModalComponent,
    id: string,
    label: string
  ) => SelectModalComponent;

  constructor({
    children,
    buttons,
    removeDelay,
    data = {},
    onClick = () => {},
    onClose = () => {},
  }: SelectModalComponentProps) {
    super({ data, removeDelay, defaultClassName: "select-modal" });

    this.children = children;
    this.buttons = buttons;

    this.onClick = (item, id, label) => {
      onClick(item, id, label);
      return this;
    };

    this.onClose = () => onClose(this);
  }

  private click(id: string) {
    return super.unmount().then(() => this.onClick(this, id, this.buttons[id]));
  }

  mount(target: HTMLElement) {
    const element = this.getElement();

    const bodyEl = this.createElement("div");
    bodyEl.append(this.children);
    bodyEl.classList.add("body");
    element.appendChild(bodyEl);

    const closeEl = this.createElement("span");
    /** TODO : 닫기 아이콘으로 변경 예정 */
    closeEl.innerText = "닫기";
    closeEl.classList.add("close");
    closeEl.onclick = () => {
      closeEl.onclick = () => {};
      this.unmount().then(this.onClose);
    };
    element.appendChild(closeEl);

    const btnsEl = this.createElement("div");
    btnsEl.classList.add("btns");
    element.appendChild(btnsEl);

    Object.keys(this.buttons).map((id) => {
      const btn = this.createElement("button");
      btn.classList.add(id);
      btn.classList.add("btn");
      btn.innerText = this.buttons[id];
      btn.onclick = () => {
        btn.onclick = () => {};
        this.click(id);
      };
      btnsEl.append(btn);
    });

    return super.mount(target);
  }
}
