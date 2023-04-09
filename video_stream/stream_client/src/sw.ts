// const staticCacheName = 'site-static';
// const dynamicCache = 'site-dynamic';

// const assets = [
//     '/',
//     '/index.html',
//     '/index.css',
//     '/pages/Fallback.html',
//     '/index.js',
//     '/notifications/index.js',
//     '/firebase/index.js',
//     '/db/index.js',
//     '/auth/index.js',
//     '/types/types.js',
//     '/manifest.json',
//     '/img/anubis.jpg',
//     '/img/comp.jpg',
//     '/img/comp2.jpg',
//     '/img/desk_top.jpg',
//     '/img/mail.png',
//     '/img/medical.png',
//     '/img/server.jpg',
//     '/img/type.jpeg',
//     'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
// ]

// //installing service worker
// self.addEventListener('install', (evt: any) => {
//     evt.waitUntil(
//         caches.open(staticCacheName).then(cache => {
//             console.log('assests been added')
//             cache.addAll(assets);
//         })
//     )
// });

// //cache limit function
// const limitCacheSize = (name: string, size: number) => {
//     caches.open(name).then((cache: any) => {
//         cache.keys().then((keys: any) => {
//             if (keys.length > size) {
//                 cache.delete(keys[0]
//                     .then(limitCacheSize(name, size)))
//             }
//         })
//     })
// }

// //activate service worker.
// self.addEventListener('activate', (evt: any) => {
//     evt.waitUntil(
//         caches.keys().then(keys => {
//             return Promise.all(keys.filter(key => key !== staticCacheName && key !== dynamicCache)
//                 .map(key => caches.delete(key))
//             )
//         })
//     )
// });

// //fetch event
// self.addEventListener('fetch', (evt: any) => {
//     evt.respondWith(
//         caches.match(evt.request).then(cacheRes => {
//             return cacheRes || fetch(evt.request).then(async fetchRes => {
//                 const cache = await caches.open(dynamicCache);
//                 cache.put(evt.request.url, fetchRes.clone());
//                 return fetchRes;
//             })
//         }).catch(() => {
//             if (evt.request.url.indexOf('.html') > -1) {
//                 return caches.match('/pages/Fallback.html');
//             }
//         })
//     )
// });
