var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
import * as f from 'f';
import cookie from 'cookie';
import lazyLoad from 'lazyload';
import appendStyle from "./appendStyle";
import createWorker from "./createWorker";
import dispatchEvent from "./dispatchEvent";
import reflow from "../reflow/index";
import render from "../render/index";
import start from "./start";
export default (schema) => {
    var _script, _style, _worker, _a;
    return customElements.define(schema.tag, (_a = class extends HTMLElement {
            constructor() {
                super();
                _script.set(this, void 0);
                _style.set(this, void 0);
                _worker.set(this, void 0);
                this.attachShadow({ mode: 'open' });
                __classPrivateFieldSet(this, _script, `https://${schema.host}/script.js`);
                __classPrivateFieldSet(this, _style, `https://${schema.host}/style.css`);
                __classPrivateFieldSet(this, _worker, createWorker(__classPrivateFieldGet(this, _script)));
                __classPrivateFieldGet(this, _worker).addEventListener('message', f.chain(render(this.shadowRoot), reflow));
                this.shadowRoot.addEventListener('awp:event', dispatchEvent(__classPrivateFieldGet(this, _worker)));
                // TODO: refatorar esta implementacao
                __classPrivateFieldGet(this, _worker).addEventListener('message', (e) => {
                    f.equal(e.data.type, 'cookie:get') && __classPrivateFieldGet(this, _worker).postMessage({ type: 'cookie:get', key: e.data.payload.key, value: cookie.getItem(e.data.payload.key) });
                    f.equal(e.data.type, 'cookie:set') && cookie.setItem(e.data.payload.key, e.data.payload.value);
                    f.equal(e.data.type, 'location:reload') && location.reload();
                    f.equal(e.data.type, 'location:assign') && location.assign(e.data.payload.value);
                });
            }
            static get observedAttributes() {
                return [];
            }
            attributeChangedCallback() {
                return this;
            }
            connectedCallback() {
                appendStyle(this.shadowRoot, __classPrivateFieldGet(this, _style));
                lazyLoad(this, () => start(__classPrivateFieldGet(this, _worker), this.dataset));
                return this;
            }
            disconnectedCallback() {
                __classPrivateFieldGet(this, _worker).terminate();
                return this;
            }
        },
        _script = new WeakMap(),
        _style = new WeakMap(),
        _worker = new WeakMap(),
        _a));
};
