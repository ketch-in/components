import MomentComponent, { MomentComponentProps } from "@/core/MomentComponent";

export interface ToastComponentProps extends MomentComponentProps {
  text: string;
  onClick?: (item: ToastComponent) => void;
  onClose?: (item: ToastComponent, action: boolean) => number | void;
}

export default class ToastComponent extends MomentComponent {
  private text: string;

  private onClick: (item: ToastComponent) => void;
  private onClose: (action: boolean) => number | void;

  constructor({
    text,
    data = {},
    removeDelay = 2000,
    momentDelay = 2000,
    onClick = () => {},
    onClose = () => {},
  }: ToastComponentProps) {
    super({ removeDelay, momentDelay, data, defaultClassName: "toast" });

    this.text = text;

    this.onClick = onClick;
    this.onClose = (action) => onClose(this, action);
  }

  mount(target: HTMLElement) {
    const element = this.getElement();

    const textEl = this.createElement("p");
    const closeEl = this.createElement("span");

    textEl.innerText = this.text;
    /** TODO : 닫기 아이콘으로 변경 예정 */
    closeEl.innerText = "닫기";

    textEl.classList.add("text");
    closeEl.classList.add("close");

    element.appendChild(textEl);
    element.appendChild(closeEl);

    element.onclick = (e: MouseEvent) => {
      element.onclick = () => {};
      if (e.composedPath().some((target) => target === closeEl)) {
        return;
      }
      this.unmount(true).then(this.onClick);
    };

    closeEl.onclick = () => {
      closeEl.onclick = () => {};
      this.unmount(true);
    };

    return super.mount(target);
  }

  unmount(action: boolean = false) {
    if (this.isMount()) {
      const customDelay = this.onClose(action);
      const delay = (
        !!customDelay || customDelay === 0 ? customDelay : this.getRemoveDelay()
      ) as number;
      this.setRemoveDelay(delay);
    }

    return super.unmount();
  }
}
