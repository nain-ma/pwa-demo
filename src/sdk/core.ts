 
import type { BeforeInstallPromptEvent, EventCallback, PWASDKType, SDKEvent } from './interface'
import { PlatformDetector } from './platform'
import { getUrlParam, openFullscreen, urlB64ToUint8Array, uuid } from './utils'

export interface PWASDKOptions {
  appId: string
  swPath: string
  pushOptions?: {
    userVisibleOnly?: boolean
    applicationServerKey?: string
  }
  promptInstallWhenReady?: boolean
}

const defaultOptions: PWASDKOptions = {
  appId: 'pwa-app',
  swPath: '/sw.js',
  pushOptions: {
    userVisibleOnly: true,
    applicationServerKey: '',
  },
  promptInstallWhenReady: false,
}

export class PWASDK implements PWASDKType {
  private listeners: Map<SDKEvent, EventCallback[]> = new Map()

  private platformDetector = new PlatformDetector()

  private deferredPrompt: BeforeInstallPromptEvent | null = null

  private pushSubscription: PushSubscription | null = null

  private isUserInteraction = false

  get appId() {
    return this.options.appId
  }

  constructor(private options: PWASDKOptions) {
    this.options = { ...defaultOptions, ...options }
  }

  init() {
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault()
      this.deferredPrompt = e as BeforeInstallPromptEvent
      this.setUnInstalled()
      this.trigger('install-available', true)
    })

    document.addEventListener('click', this.handleUserInteraction.bind(this))

    this.registerServiceWorker()

    // const handleSubcrib = () => {
    //   setTimeout(() => {
    //     // 订阅后 弹出启动弹窗
    //     this.doSubscribe()
    //   }, 2000)
    // }

    // 调试逻辑
    // 触发安装后 2s 后触发订阅
    // this.on('install-prompt', handleSubcrib)
    // this.on('install-cancel', handleSubcrib)

    // // 触发订阅后 弹出启动弹窗
    // this.on('notification-trigger', () => {
    //   this.popoverLaunch()
    // })

    if (
      // 带有启动参数
      getUrlParam('launch_flag')
      // 已经安装
      && this.isInstalled()
      // 是 Chrome 浏览器
      && this.isChrome()
      // 没有进入 PWA 模式
      && !this.platformDetector.isInStandaloneMode()
    ) {
      this.launchFullScreen()
    }
  }

  on(event: SDKEvent, callback: EventCallback) {
    this.listeners.set(event, [...(this.listeners.get(event) || []), callback])
  }

  off(event: SDKEvent, callback: EventCallback) {
    this.listeners.set(event, this.listeners.get(event)?.filter(cb => cb !== callback) || [])
  }

  trigger(event: SDKEvent, data?: any) {
    this.listeners.get(event)?.forEach(cb => cb(data))
  }

  async request(url: string, data: any) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch((err) => {
        console.error(err)
      })
  }

  async doSubscribe() {
    if (this.isChrome()) {
      navigator.serviceWorker.ready.then(() => {
        return this.requestNotificationPermission()
      }).then(() => {
        const subscription = this.subscribeAndDistribute()
        this.trigger('notification-subscribed', subscription)
      }).catch((err) => {
        console.log(err)
        this.trigger('notification-error', err)
      }).finally(() => {
        this.trigger('notification-trigger', true)
      })
    }
  }

  // fetchIsInstall() {
  //   return this.request('/event/install', {
  //     uuid: this.getUuid(),
  //     project_id: this.appId,
  //   })
  // }

  /**
   * 检查浏览器是否支持 Service Worker
   */
  isServiceWorkerSupported() {
    return 'serviceWorker' in navigator
  }

  registerServiceWorker() {
    if (this.isServiceWorkerSupported()) {
      navigator.serviceWorker.register(this.options.swPath)
        .then((reg) => {
          console.log('Successfully registered service worker', reg)
        })
        .catch((err) => {
          console.warn('Error whilst registering service worker', err)
        })
    }
  }

  setUuid(v: string) {
    if (!v || v === undefined || v === 'undefined') {
      return
    }
    const t = `${this.appId}_pwa_uuid`
    localStorage.setItem(t, v)
  }

  getUuid() {
    const t = `${this.appId}_pwa_uuid`
    let uid = localStorage.getItem(t)
    if (uid === null || uid === '') {
      uid = getUrlParam('pwaUuid')
      if (uid === null || uid === '') {
        uid = uuid()
      }
      this.setUuid(uid)
    }
    return uid
  }

  setInstalled() {
    const t = `${this.appId}_pwa_install_flag`
    localStorage.setItem(t, 'true')
  }

  setUnInstalled() {
    const t = `${this.appId}_pwa_install_flag`
    localStorage.setItem(t, 'false')
  }

  isInstalled() {
    const t = `${this.appId}_pwa_install_flag`
    const v = localStorage.getItem(t)
    return v && v !== 'false' ? v : false
  }

  popoverVideoLaunch() {
    if (document.getElementById('app-launch-video-popover')) {
      return
    }

    const template = `
      <div class="pwa-launch-popover" style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 -2px 12px rgba(0,0,0,0.15);
        padding: 16px;
        font-family: sans-serif;
        z-index: 9999;
        width: 500px;
        height: 300px;
      ">
        <div class="pwa-launch-content" style="display: flex; align-items: center; gap: 12px;">
          <img class="pwa-launch-icon" src="/icon.png" style="width: 48px; height: 48px; border-radius: 8px;" />
        </div>
    
        <button class="pwa-launch-btn" style="
          width: 100%;
          margin-top: 16px;
          padding: 12px 0;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: #007bff;
          border: none;
          border-radius: 8px;
        ">
          打开 App, 高清观看
        </button>
    
        <div class="pwa-launch-close" style="
          position: absolute;
          top: 8px;
          right: 12px;
          font-size: 20px;
          color: #999;
          cursor: pointer;
        ">&times;</div>
      </div>
    `

    const popover = new DOMParser()
      .parseFromString(template, 'text/html')
      .querySelector('.pwa-launch-popover') as HTMLElement

    if (!popover)
      return

    // 设置唯一ID
    popover.id = 'app-launch-video-popover'

    // 绑定启动按钮事件
    popover.querySelector('.pwa-launch-btn')?.addEventListener('click', () => {
      if (this.isInstalled()) {
        const ul = new URL(location.href)
        ul.searchParams.set('launch_flag', 'true')
        window.open(ul.toString(), '_blank')
      }
      else {
        this.launchFullScreen()
      }
    })

    // 绑定关闭按钮事件
    popover.querySelector('.pwa-launch-close')?.addEventListener('click', () => {
      this.closePopover(popover)
    })

    document.body.appendChild(popover)
  }

  popoverLaunch() {
    if (document.getElementById('app-launch-popover')) {
      return
    }

    const template = `
      <div class="pwa-launch-video-popover" style="
        position: fixed;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 -2px 12px rgba(0,0,0,0.15);
        padding: 16px;
        font-family: sans-serif;
        z-index: 9999;
      ">
        <div class="pwa-launch-content" style="margin-top: 12px; display: flex; align-items: center; gap: 12px;">
          <img class="pwa-launch-icon" src="/icon.png" style="width: 64px; height: 64px; border-radius: 12px;" />
          <div class="pwa-launch-info">
            <div class="pwa-launch-title" style="font-weight: bold; font-size: 16px;">H5 Game</div>
            <div class="pwa-launch-desc" style="font-size: 12px; color: #999;">卡牌策略 · 4.5★ · 1.1M</div>
          </div>
        </div>
    
        <button class="pwa-launch-btn" style="
          width: 100%;
          margin-top: 16px;
          padding: 12px 0;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: #007bff;
          border: none;
          border-radius: 8px;
        ">
          Continue in App
        </button>
    
        <div class="pwa-launch-close" style="
          position: absolute;
          top: 8px;
          right: 12px;
          font-size: 20px;
          color: #999;
          cursor: pointer;
        ">&times;</div>
      </div>
    `

    const popover = new DOMParser()
      .parseFromString(template, 'text/html')
      .querySelector('.pwa-launch-popover') as HTMLElement

    if (!popover)
      return

    // 设置唯一ID
    popover.id = 'app-launch-popover'

    // 绑定启动按钮事件
    popover.querySelector('.pwa-launch-btn')?.addEventListener('click', () => {
      if (this.isInstalled()) {
        const ul = new URL(location.href)
        ul.searchParams.set('launch_flag', 'true')
        window.open(ul.toString(), '_blank')
      }
      else {
        this.launchFullScreen()
      }
    })

    // 绑定关闭按钮事件
    popover.querySelector('.pwa-launch-close')?.addEventListener('click', () => {
      this.closePopover(popover)
    })

    document.body.appendChild(popover)
  }

  private closePopover(popover: HTMLElement) {
    popover.classList.add('leaving')
    setTimeout(() => {
      popover.remove()
    }, 300)
  }

  async requestNotificationPermission() {
    if (!window.Notification) {
      return Promise.reject('The system does not support desktop notifications')
    }
    return Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        return Promise.resolve()
      }
      return Promise.reject('User has disabled notification permissions')
    })
  }

  async handleUserInteraction() {
    this.isUserInteraction = true

    if (this.isInstalled()) {
      document.removeEventListener('click', this.handleUserInteraction)
      return
    }

    if (this.options.promptInstallWhenReady) {
      await this.promptInstallWaitForReady()
    }
  }

  async promptInstall() {
    if (this.deferredPrompt && this.isUserInteraction) {
      this.deferredPrompt.prompt()
      const choice = await this.deferredPrompt.userChoice
      this.deferredPrompt = null
      if (choice.outcome === 'accepted') {
        this.trigger('install-prompt', choice)
        this.setInstalled()
      }
      else {
        this.trigger('install-cancel', choice)
      }
      return choice
    }
    return null
  }

  async promptInstallWaitForReady() {
    let count = 0
    const maxCount = 10

    do {
      await new Promise(resolve => setTimeout(resolve, 300))

      // If the user has already installed the app, we can prompt the install
      if (this.deferredPrompt) {
        return this.promptInstall()
      }

      count++
    } while (count < maxCount)

    throw new Error('Failed to prompt install')
  }

  // 将订阅信息传给后端服务器
  // 为了方便之后的推送，为每个客户端简单生成一个标识
  distributePushResource(subscription: PushSubscription) {
    this.pushSubscription = subscription

    // const body = {
    //   subscription,
    //   subscriptionText: JSON.stringify(subscription),
    //   uuid: this.getUuid(),
    //   lang: window.navigator.language,
    //   timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    //   timezoneOffset: new Date().getTimezoneOffset() / 60,
    // }
    // console.log('subscription=', JSON.stringify(subscription))
    // const u = pwaPath.endsWith('/') ? (`${pwaPath}subscription`) : (`${pwaPath}/subscription`)
    // this.request(u, body).catch((err) => {
    //   console.log(err)
    // })
  }

  /**
   * 订阅推送并将订阅结果发送给后端
   */
  async subscribeAndDistribute() {
    if (!window.PushManager) {
      return Promise.reject('The system does not support message push')
    }

    // 检查是否已经订阅过
    return navigator.serviceWorker.ready.then(async (registration) => {
      return registration.pushManager
        .getSubscription()
        .then((subscription) => {
          // 如果已经订阅过，就不重新订阅了
          if (subscription) {
            this.distributePushResource(subscription)
          }
          else {
            return (
            // 订阅
              registration.pushManager
                .subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: urlB64ToUint8Array(this.options.pushOptions?.applicationServerKey ?? ''),
                })
                .then((subscription2) => {
                  this.distributePushResource(subscription2)
                })
            )
          }
        })
    })
  }

  // async subscribePushNotification() {
  //   if (!this.isServiceWorkerSupported()) {
  //     throw new Error('Push notifications are not supported')
  //   }

  //   try {
  //     const registration = await navigator.serviceWorker.ready
  //     const subscription = await registration.pushManager.subscribe({
  //       userVisibleOnly: this.options.pushOptions?.userVisibleOnly ?? true,
  //       applicationServerKey: urlB64ToUint8Array(this.options.pushOptions?.applicationServerKey ?? ''),
  //     }).finally(() => {
  //       this.popoverLaunch()
  //     })
  //     this.pushSubscription = subscription
  //     this.trigger('push-subscribed', subscription)
  //     return subscription
  //   }
  //   catch (error) {
  //     this.trigger('push-error', error)
  //     throw error
  //   }
  // }

  async unsubscribePushNotification() {
    if (this.pushSubscription) {
      await this.pushSubscription.unsubscribe()
      this.pushSubscription = null
      this.trigger('notification-unsubscribed', true)
      return true
    }
    return false
  }

  isChrome() {
    return this.platformDetector.isChrome()
  }

  toChrome(url = location.href) {
    const ul = new URL(url)
    const uid = getUrlParam('pwaUuid')
    if (uid == null || uid === '') {
      ul.searchParams.set('pwaUuid', this.getUuid())
      window.history.pushState('', '', ul)
    }
    ul.searchParams.set('browser_flag', 'external')// 设置打开了外部浏览器
    const ulS = ul.toString()
    const href = `intent://${ulS.replace(/(https|http):\/\//, '')}`

    const u = `${href}#Intent;scheme=https;action=android.intent.action.VIEW;component=com.android.chrome;package=com.android.chrome;end`

    const a = document.createElement('a')
    a.href = u
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  recordPwaInstallUser(name: string, ul: string) {
    const h = !ul ? location.href : `${location.href}####${ul}`
    this.request('', {
      name,
      uuid: this.getUuid(),
      href: h,
      userAgent: navigator.userAgent,
    }).then((res) => {
      if (res.code !== 200) {
        console.log(res)
      }
    }).catch(() => {})
  }

  launchFullScreen() {
    openFullscreen()
  }
}
