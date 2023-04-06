class Component {
    constructor(element) {
        this.rootElement = document.createElement(element);
    }

    querySelector(classname) {
        return this.rootElement.querySelector(`.${classname}`);
    }
    querySelectorAll(classname) {
        return this.rootElement.querySelectorAll(`.${classname}`);
    }

    initView() {
        this.rootElement.innerHTML = '<span> NOT IMPLEMENTED YET </span>'
    }

    getView() {
        return this.rootElement;
    }
}