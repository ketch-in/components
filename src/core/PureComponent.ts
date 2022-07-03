import { createElement } from "@/utils";

type State = "mount" | "unmount" | "unmounting";

export interface PureComponentProps {
  data?: unknown;
  removeDelay?: number;
  defaultClassName?: string;
}

export default class PureComponent {
  private data?: unknown;
  private state: State;
  private element: HTMLElement;
  private defaultClassName: string;
  private removeDelay: number;

  constructor({
    data,
    defaultClassName,
    removeDelay = 2000,
  }: PureComponentProps) {
    this.data = data;
    this.state = "unmount";
    this.defaultClassName = defaultClassName || "";
    this.removeDelay = removeDelay;

    this.element = this.createElement("div");
  }

  protected setRemoveDelay(removeDelay: number) {
    this.removeDelay = removeDelay;
    return this;
  }

  protected getRemoveDelay() {
    return this.removeDelay;
  }

  protected createElement(tagName: string, options?: ElementCreationOptions) {
    const el = createElement(tagName, options);
    el.classList.add(this.defaultClassName);
    return el;
  }

  protected createSVGElement(width: number, height: number) {
    const xmlns = "http://www.w3.org/2000/svg";
    const el = document.createElementNS(xmlns, 'svg');
    el.setAttribute('width', width.toString());
    el.setAttribute('height', height.toString());
    el.classList.add(this.defaultClassName);
    return el;
  }

  getData() {
    return this.data;
  }

  private setState(state: State) {
    this.state = state;
    if (this.isUnmounting()) {
      this.element.classList.add("unmount");
    } else {
      this.element.classList.remove("unmount");
    }

    return this;
  }

  protected getState() {
    return this.state;
  }

  protected getElement() {
    return this.element;
  }

  protected isMount() {
    return this.getState() === "mount";
  }

  protected isUnmount() {
    return this.getState() === "unmount";
  }

  protected isUnmounting() {
    return this.getState() === "unmounting";
  }

  protected async clear() {
    if (!this.isUnmount()) {
      await this.unmount();
    }

    this.element = this.createElement("div");
    return this;
  }

  protected async mount(target: HTMLElement) {
    if (this.isMount()) {
      await this.unmount();
    }
    target.append(this.element);
    return this.setState("mount");
  }

  protected unmount() {
    return new Promise<this>((resolve) => {
      if (!this.isMount()) {
        const interval = setInterval(() => {
          if (this.isUnmount()) {
            clearInterval(interval);
            return resolve(this);
          }
        }, 1000);
      }

      this.setState("unmounting");

      setTimeout(() => {
        if (this.element.parentElement) {
          const parentElement = this.element.parentElement;
          parentElement.removeChild(this.element);
        }
        this.setState("unmount")
          .clear()
          .then(() => resolve(this));
      }, this.getRemoveDelay());
    });
  }
}
