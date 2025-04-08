import { UAParser } from 'ua-parser-js'

export class PlatformDetector {
  private browserName: string = ''

  private uaParser = new UAParser()

  constructor() {
    this.browserName = this.uaParser.getBrowser().name ?? ''
  }

  isChrome() {
    return this.browserName.toLowerCase().endsWith('chrome')
  }

  isAndroid() {
    return this.uaParser.getOS().is('Android')
  }

  isIOS() {
    return this.uaParser.getOS().is('iOS')
  }

  isInStandaloneMode() {
    return window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any)?.standalone || document
      .referrer.includes('android-app://')
  }
}
