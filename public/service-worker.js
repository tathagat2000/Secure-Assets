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
    const domain_name_1 = "localhost:4000";

    if (url.host === domain_name_1 && url.pathname.startsWith('/imgs')) {

        const new_url = `/api/signed-asset-url?assetUrl=${encodeURIComponent(url)}`;
        const newRequest = new Request(new_url, event.request);
        
        event.respondWith(
            (async () => {
                const response = await fetch(newRequest);
                console.log('Original Request URL:', event.request);
                console.log('New Request URL:', newRequest);
                return response;
            })(),
        );
    }

});


