import { PWASDK } from "./core"

export interface InstallChoiceResult {
  outcome: 'accepted' | 'dismissed'
  platform: string
}

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt: () => Promise<void>
}

export type SDKEvent =
  'install-available'
  | 'installed'
  | 'sw-registered'
  | 'sw-error'
  | 'notification-error'
  | 'notification-trigger'
  | 'notification-subscribed'
  | 'notification-unsubscribed'
  | 'install-prompt'
  | 'install-cancel'

export type EventCallback = (data?: any) => void

export interface PWASDKType {
  init: () => void
  on: (event: SDKEvent, callback: EventCallback) => void
  off: (event: SDKEvent, callback: EventCallback) => void
  promptInstall: () => Promise<InstallChoiceResult | null>
  isInstalled: () => boolean | string
  [key: string]: any
}

export const SDK_NAME = 'RB_SDK'

declare global {
  interface Window {
    [SDK_NAME]: PWASDK
  }
}
