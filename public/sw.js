const CACHE_NAME = "h5-game-cache-v1";
const CACHE_ASSETS = [
  "/",
  // "/index.html",
  // "/game.css",
  // "/game.js",
  "/manifest.json",
];

// 安装 Service Worker 并缓存资源
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_ASSETS);
    })
  );
  self.skipWaiting(); // 立即激活新的 Service Worker
});

// 监听 fetch 事件，拦截网络请求，返回缓存资源
self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith("chrome-extension://")) {
    return;
  }

  // 检查是否为视频文件请求
  if (event.request.url.includes("/video/")) {
    // 对视频文件直接使用网络请求，不进行缓存
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        return (
          cachedResponse ||
          fetch(event.request).then((response) => {
            // 只缓存成功的响应
            if (response.ok) {
              return caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, response.clone());
                return response;
              });
            }
            return response;
          })
        );
      })
      .catch(() => {
        // 兜底策略：如果请求失败且缓存中没有，则返回默认的离线页面（可选）
        return caches.match("/index.html");
      })
  );
});

// 清除旧缓存
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim(); // 立即让 Service Worker 接管所有页面
});

self.addEventListener("push", function (event) {
  console.log("push", event.data);
  const data = event.data.json();

  const promiseChain = self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
  });
  event.waitUntil(promiseChain);
});
