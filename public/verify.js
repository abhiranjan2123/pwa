self.addEventListener("install", (e) => {
  console.log("installed");

  var assest = [
    "drycleaning_application\public\images",
"drycleaning_application\public\images\icons",
"drycleaning_application\public\images\icons\icon-72x72.png",
"drycleaning_application\public\images\icons\icon-128x128.png",
"drycleaning_application\public\images\icons\icon-96x96.png",
"drycleaning_application\public\images\icons\icon-144x144.png",
"drycleaning_application\public\images\icons\icon-152x152.png",
"drycleaning_application\public\images\icons\icon-192x192.png",
"drycleaning_application\public\images\icons\icon-384x384.png",
"drycleaning_application\public\images\icons\icon-512x512.png",
    "/images",
    "/index.html",
    "/manifest.json",
    "/sw.js",
    "/verify.js",
  ];

  caches.open("mycache").then((cache) => {
    cache.addAll(assest);
  });
});

self.addEventListener("activate", (e) => {
  console.log("activated");
});

self.addEventListener("fetch", async (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
  console.log("inside fetched func", fetch);
});
