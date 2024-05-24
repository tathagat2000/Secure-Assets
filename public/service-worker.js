let tags = [];


self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    self.skipWaiting()
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
});


self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);
    if (event.request.method !== "GET") return;
    const host = "localhost:4000";
    if (url.host === host && tags.some(tag => url.pathname.includes(tag))) {
        const new_url = `/api/signed-asset-url?assetUrl=${encodeURIComponent(url)}`;
        const newRequest = new Request(new_url, event.request);
        event.respondWith(fetch(newRequest));
    }
});

self.addEventListener("message", (event) => {
    if (Array.isArray(event.data)) {
        tags = event.data;
    }
});

