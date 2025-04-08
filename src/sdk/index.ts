import type { PWASDKOptions } from './core'
import { PWASDK } from './core'
import { SDK_NAME } from './interface'

(function (global: any, sdkName: string, options: PWASDKOptions) {
  const sdk = new PWASDK(options)
  global[sdkName] = sdk
  // sdk.init()
})(window, SDK_NAME, {
  swPath: '/sw.js',
  pushOptions: {
    userVisibleOnly: true,
    applicationServerKey: 'BLbC9j6ilTHIktE0uqbuV_YcgutH1QJULiwgSkucioMnxmGhB6ZYoGsskwVFzPa1uuDbe48lIXD1gass1r8RV0I',
  },
  appId: 'com.qlj.pwa-game-demo',
})
