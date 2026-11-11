// 앱 설치용 최소 서비스 워커. 화면은 항상 최신 버전을 받도록 캐시하지 않음.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => new Response(
      '<meta charset="utf-8"><meta name="viewport" content="width=device-width"><p style="font-family:sans-serif;padding:40px;text-align:center">인터넷 연결을 확인해 주세요.</p>',
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
  }
});
