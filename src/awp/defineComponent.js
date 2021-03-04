import * as f from 'f'
import cookie from 'cookie'
import lazyLoad from 'lazyload'
import appendStyle from './appendStyle'
import createWorker from './createWorker'
import dispatchEvent from './dispatchEvent'
import reflow from '@/reflow'
import render from '@/render'
import start from './start'

export default (schema) =>
  customElements.define(schema.tag, class extends HTMLElement {
    #script
    #style
    #worker

    static get observedAttributes () {
      return []
    }

    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.#script = `https://${schema.host}/script.js`
      this.#style = `https://${schema.host}/style.css`
      this.#worker = createWorker(this.#script)
      this.#worker.addEventListener('message', f.chain(render(this.shadowRoot), reflow))
      this.shadowRoot.addEventListener('awp:event', dispatchEvent(this.#worker))

      // TODO: refatorar esta implementacao
      this.#worker.addEventListener('message', (e) => {
        f.equal(e.data.type, 'cookie:get') && this.#worker.postMessage({ type: 'cookie:get', key: e.data.payload.key, value: cookie.getItem(e.data.payload.key) })
        f.equal(e.data.type, 'cookie:set') && cookie.setItem(e.data.payload.key, e.data.payload.value)
        f.equal(e.data.type, 'location:reload') && location.reload()
        f.equal(e.data.type, 'location:assign') && location.assign(e.data.payload.value)
      })
    }

    attributeChangedCallback () {
      return this
    }

    connectedCallback () {
      appendStyle(this.shadowRoot, this.#style)
      lazyLoad(this, () => start(this.#worker, this.dataset))
      return this
    }

    disconnectedCallback () {
      this.#worker.terminate()
      return this
    }
  })
