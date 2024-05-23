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
    if (url.host === host && url.pathname.startsWith('/imgs')) {

        const new_url = `/api/signed-asset-url?assetUrl=${encodeURIComponent(url)}`;
        const newRequest = new Request(new_url, event.request);
        event.respondWith(
            (async () => {
                const response = await fetch(newRequest);
                return response;
            })(),
        );
    }

});


