import { isString } from '../utils'

interface ModalConfig {
  logo: string
  title: string
  content: string | Element
  footer: (string | Element)[]
  mounted: Element
}

interface ShowParams {
  content: string | Element
  footer: (string | Element)[]
}

// interface Modal {
//   config: ModalConfig
//   build: (cfg: Partial<ModalConfig>) => void
//   show: (args: Partial<ShowParams>) => void
//   close: () => void
// }

const defaultConfig: ModalConfig = {
  logo: '',
  title: '',
  content: document.createElement('div'),
  footer: [],
  mounted: document.body,
}

export class Modal {
  constructor() {
    if (new.target === Modal) {
      throw new Error('Cannot call `new Modal()`')
    }
  }

  public static config = defaultConfig

  private static root: HTMLDivElement | null

  private static generateHash() {
    return Math.random().toString(36).substring(2, 8)
  }

  private static createClassName(base: string) {
    return `${base}-${this.generateHash()}`
  }

  private static classes = {
    modal: this.createClassName('modal'),
    content: this.createClassName('content'),
    header: this.createClassName('header'),
    headerLeft: this.createClassName('header-left'),
    headerRight: this.createClassName('header-right'),
    logo: this.createClassName('logo'),
    title: this.createClassName('title'),
    main: this.createClassName('main'),
    footer: this.createClassName('footer'),
  }

  private static injectStyles() {
    const styles = `
      .${this.classes.modal} {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
      }

      .${this.classes.modal}.show {
        opacity: 1;
      }

      .${this.classes.content} {
        background: #fff;
        border-radius: 12px;
        width: 90%;
        max-width: 420px;
        padding: 20px;
        transform: translateY(20px);
        transition: transform 0.3s;
      }

      .${this.classes.modal}.show .${this.classes.content} {
        transform: translateY(0);
      }

      .${this.classes.header} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }

      .${this.classes.headerLeft} {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .${this.classes.logo} {
        width: 48px;
        height: 48px;
        border-radius: 8px;
      }

      .${this.classes.title} {
        font-size: 18px;
        font-weight: bold;
      }

      .${this.classes.headerRight} {
        cursor: pointer;
      }

      .${this.classes.main} {
        margin-bottom: 16px;
      }

      .${this.classes.footer} {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
      }
    `

    const styleElement = document.createElement('style')
    styleElement.textContent = styles
    document.head.appendChild(styleElement)
  }

  private static template = `
    <div class="${this.classes.modal}">
      <div class="${this.classes.content}">
        <div class="${this.classes.header}">
          <div class="${this.classes.headerLeft}">
            <img class="${this.classes.logo}" />
            <b class="${this.classes.title}"></b>
          </div>
          <div class="${this.classes.headerRight}">
  X
          </div>
        </div>
        <div class="${this.classes.main}"></div>
        <div class="${this.classes.footer}"></div>
      </div>
    </div>
  `

  private static get rendered() {
    return Modal.config.mounted.contains(Modal.root)
  }

  private static query(className: string) {
    return Modal.root?.querySelector(`.${className}`) as HTMLElement
  }

  public static build(cfg: Partial<ModalConfig>) {
    // 首次构建时注入样式
    if (!Modal.root) {
      Modal.injectStyles()
    }
    Modal.config = { ...Modal.config, ...cfg }
    if (!Modal.root) {
      Modal.root = new DOMParser()
        .parseFromString(Modal.template, 'text/html')
        .querySelector(`.${Modal.classes.modal}`) as HTMLDivElement

      // mask
      Modal.root.addEventListener('click', (e) => {
        e.stopPropagation()
        Modal.close()
      })

      // content
      Modal.query(Modal.classes.content).addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()
      })

      // close
      Modal.query(Modal.classes.headerRight).addEventListener('click', () => {
        Modal.close()
      })

      // logo
      Modal.query(Modal.classes.logo).setAttribute('src', Modal.config.logo)

      // title
      Modal.query(Modal.classes.title).textContent = Modal.config.title
    }
  }

  public static show(args?: Partial<ShowParams>) {
    if (!Modal.root) {
      console.info('Modal has not been ready.')
      return
    }

    const { content, footer, mounted } = Modal.config
    const main = args?.content ?? content
    const footerBtns = args?.footer ?? footer

    const mainEl = Modal.query(Modal.classes.main)
    const footerEl = Modal.query(Modal.classes.footer)

    mainEl.innerHTML = ''
    if (isString(main)) {
      mainEl.insertAdjacentHTML('afterbegin', main)
    }
    else {
      mainEl.appendChild(main)
    }

    footerEl.innerHTML = ''
    footerBtns.forEach((b) => {
      if (isString(b)) {
        footerEl.insertAdjacentHTML('beforeend', b)
      }
      else {
        footerEl.insertAdjacentElement('beforeend', b)
      }
    })

    if (!Modal.rendered) {
      mounted.appendChild(Modal.root)
    }
    // Modal.root.classList.add(Modal.classes)
  }

  public static close() {
    if (!Modal.root || !Modal.rendered)
      return

    Modal.root.classList.add(Modal.classes.show)
    setTimeout(() => {
      Modal.root?.classList.remove(Modal.classes.leaving)
    }, 300)
  }

  public static reset() {
    Modal.config = defaultConfig
    Modal.root = null
  }
}
