// Service worker: aplikacja działa bez internetu.
// Najpierw sieć, żeby nowe pytania pojawiały się od razu; bez sieci kopia zapisana wcześniej.
// no-cache: pytamy serwer o nowszą wersję, zamiast brać kopię z pamięci przeglądarki (GitHub Pages trzyma ją 10 min).
const CACHE = "ai-quiz";
const SHELL = ["./", "index.html", "manifest.json", "favicon.svg", "apple-touch-icon.png", "icon-192.png", "icon-512.png"];
const FONTS = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;
const WAIT = 4000; // przy słabej sieci po tylu ms bierzemy kopię

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (FONTS.test(req.url)) return e.respondWith(cacheFirst(req)); // pliki czcionek się nie zmieniają
  if (new URL(req.url).origin !== location.origin) return;
  e.respondWith(networkFirst(req));
});

async function cacheFirst(req) {
  const hit = await caches.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) (await caches.open(CACHE)).put(req, res.clone());
  return res;
}

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  const net = fetch(req.url, { cache: "no-cache" }).then(res => { if (res.ok) cache.put(req, res.clone()); return res; });
  try {
    const res = await Promise.race([net, new Promise(r => setTimeout(r, WAIT))]);
    if (res) return res; // sieć zdążyła (także 404 brakującego wykładu)
  } catch {} // brak sieci
  const hit = await cache.match(req, { ignoreSearch: true }) || (req.mode === "navigate" ? await cache.match("./") : undefined);
  return hit || net.catch(() => Response.error());
}
