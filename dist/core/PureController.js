const DEFAULT_PURE_CONTROLLER_OPTIONS = {
    removeDelay: 2000,
    modalWidth: 200,
};
export default class PureController {
    constructor(targetEl, options, keepContent = false) {
        this.target = targetEl;
        this.options = options || {};
        !keepContent && this.clear();
    }
    getOption(key) {
        return this.options[key] || DEFAULT_PURE_CONTROLLER_OPTIONS[key];
    }
    clear() {
        this.target.innerText = "";
    }
}
//# sourceMappingURL=PureController.js.map