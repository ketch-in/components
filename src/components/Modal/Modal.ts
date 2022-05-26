import PureComponent, { PureComponentProps } from "@/core/PureComponent";

export interface ModalComponentProps extends PureComponentProps {
  children: HTMLElement;
  onClose?: (item: ModalComponent) => number | void;
}

export default class ModalComponent extends PureComponent {
  private children: HTMLElement;

  private onClose: () => number | void;

  constructor({
    children,
    removeDelay,
    data = {},
    onClose = () => {},
  }: ModalComponentProps) {
    super({ data, removeDelay, defaultClassName: "modal" });
    this.children = children;

    this.onClose = () => onClose(this);
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

    return super.mount(target);
  }
}
