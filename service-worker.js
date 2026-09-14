const CACHE='el-cid-handicap-app-v3'; const APP_FILES=['./','./index.html','./manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP_FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.pathname.endsWith('/El_Cid_Handicaps.pdf'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))) });
