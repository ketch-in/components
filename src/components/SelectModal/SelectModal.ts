import PureComponent, { PureComponentProps } from "@/core/PureComponent";

interface SelectModalButtonsInterface {
  [id: string]: string;
}

export interface SelectModalComponentProps extends PureComponentProps {
  children: HTMLElement;
  buttons: SelectModalButtonsInterface;
  onClick?: (item: SelectModalComponent, id: string, label: string) => void;
}

export default class SelectModalComponent extends PureComponent {
  private children: HTMLElement;
  private buttons: SelectModalButtonsInterface;

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
  }: SelectModalComponentProps) {
    super({ data, removeDelay, defaultClassName: "select-modal" });

    this.children = children;
    this.buttons = buttons;

    this.onClick = (item, id, label) => {
      onClick(item, id, label);
      return this;
    };
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

    Object.keys(this.buttons).map((id) => {
      const btn = this.createElement("button");
      btn.classList.add("btn");
      btn.innerText = this.buttons[id];
      btn.onclick = () => {
        btn.onclick = () => {};
        this.click(id);
      };
      element.append(btn);
    });

    return super.mount(target);
  }
}
