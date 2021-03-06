self.addEventListener("install", (event) => {
    console.log("install");
    event.waitUntil(
        caches.open("static").then( (cache) => {
            return cache.addAll( ["./","./Styling/Core.css"] );
        })
    );
});

self.addEventListener("fetch", (event) => {
    console.log(`req for: ${event.request.url}`)
})