export function uuid() {
  const s = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 32; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr(((s[19] as any) & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23]
  const uuid = s.join('')
  return uuid
}

export function urlB64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export function intentChrome(url: string) {
  const urlData = new URL(url)
  urlData.searchParams.set('is_open_chrome', '1')
  try {
    location.href = `intent://${urlData.href.replace(
      /(https|http):\/\//,
      '',
    )}#Intent;scheme=https;action=android.intent.action.VIEW;component=com.android.chrome;package=com.android.chrome;end`
  }
  catch (err) {
    console.error(err)
  }
}

export function getUrlParam(key: string) {
  const params = new URLSearchParams(window.location.search)
  return params.get(key)
}

/**
 * 锁定竖屏方向
 */
function lockPortraitOrientation() {
  const s: any = screen
  if (s.lockOrientation) {
    s.lockOrientation('portrait-primary')
  }
  else if (s.mozLockOrientation) {
    s.mozLockOrientation('portrait-primary')
  }
  else if (s.msLockOrientation) {
    s.msLockOrientation('portrait-primary')
  }
  else if (s.orientation && s.orientation.lock) {
    s.orientation.lock('portrait-primary')
  }
}

export function openFullscreen() {
  const el: any = document.documentElement
  if (el.requestFullscreen) {
    el.requestFullscreen()
  }
  else if (el?.webkitRequestFullscreen) {
    /* Safari */
    el?.webkitRequestFullscreen?.()
  }
  else if (el?.msRequestFullscreen) {
    /* IE11 */
    el?.msRequestFullscreen?.()
  }
  lockPortraitOrientation()
}

export function isString(value: any) {
  return typeof value === 'string'
}
