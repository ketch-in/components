export interface PureControllerOptions {
  removeDelay?: number;
}

const DEFALT_PURE_CONTROLLER_OPTIONS: PureControllerOptions = {
  removeDelay: 2000,
};

export default class PureController {
  protected target: HTMLElement;
  private options: PureControllerOptions;

  constructor(targetEl: Element, options?: PureControllerOptions) {
    this.target = targetEl as HTMLElement;
    this.options = options || {};
    this.clear();
  }
  protected getOption(key: keyof PureControllerOptions) {
    return this.options[key] || DEFALT_PURE_CONTROLLER_OPTIONS[key];
  }

  clear() {
    this.target.innerText = "";
  }
}
