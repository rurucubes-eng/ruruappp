/* Service worker minimal : rend l'appli installable sur Android.
   Il ne met rien en cache : chaque mise à jour publiée est visible tout de suite. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
