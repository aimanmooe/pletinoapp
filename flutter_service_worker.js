'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dceb484a6e2285fd004cabcf83c24443",
"assets/AssetManifest.bin.json": "cb019c096d89de62d638dfb33666c4c0",
"assets/AssetManifest.json": "189f4ba5da98386f32dae3878e780ca1",
"assets/assets/images/bg_category.png": "f9de9b31fe3f929ff1bfdd0e5cfc50bf",
"assets/assets/images/coupon/cart-discount-alt.png": "c8603bf71cb39d4431ae6af25a5f597e",
"assets/assets/images/coupon/cart-discount.png": "c9e872ca8ac91cc4ac030cc9c0b34fbe",
"assets/assets/images/coupon/delivery-motorcyle.png": "749900b28069250d7d2074facfd3817f",
"assets/assets/images/coupon/discount-coupon.png": "4c54b6f2e1302e98d45367746476abf9",
"assets/assets/images/coupon/gift-card-alt.png": "25112dcff331e95ec94aba761deabbf7",
"assets/assets/images/coupon/gift-voucher-credit-alt.png": "b422ddf742529c86cd3d54ad3c3beb39",
"assets/assets/images/coupon/giftbox-color.png": "670681efd2f45fbc49b4b97f53011e7e",
"assets/assets/images/coupon/megaphone-announce-color-alt.png": "19e4cf2b2923020886c2c09d5d18d635",
"assets/assets/images/coupon/product-discount-alt.png": "6054fcb9451d1a9aa45bbb24f09b8d96",
"assets/assets/images/coupon/product-package-box.png": "5f5ac782cb53b01531025d424c5c7e4b",
"assets/assets/images/coupon/sale-splash-tag.png": "32c160cd6d0a6fc2f46a1ae2225e7393",
"assets/assets/images/coupon/subs-calendar-discount.png": "da37f8ad506904162d4ba91d08e3e127",
"assets/assets/images/coupon/subs-discount-voucher.png": "c0186b4118502f1449adcffd3e3b5f7e",
"assets/assets/images/face_id.png": "bfeebeff0ad801844cda2d3639d3e537",
"assets/assets/images/global_refresh.png": "e66794337cee5d8fe1d1a6e992945028",
"assets/assets/images/icon.png": "3919d50508945ac0a1420906b6637a93",
"assets/assets/images/icon_android.png": "3919d50508945ac0a1420906b6637a93",
"assets/assets/images/internet.png": "af930a3a9fd9a93105a1cafa1ec1c1a7",
"assets/assets/images/logo.png": "6c9e4d3aacd48f6c28929d61e3c19116",
"assets/assets/images/marker.png": "d387d4ec5bfa18ba4e3ad8f76ae37e4c",
"assets/assets/images/no_avatar.png": "cca0ea7e144566ae800adf6e240a3e82",
"assets/assets/images/no_image.png": "8380890f67f86c86c386324be7cbbfed",
"assets/assets/images/payment/bacs.png": "9f7814d5e742b10daceb51ce19e4bb9b",
"assets/assets/images/payment/bacs@2x.png": "1fb885d1d8884358f90e6e436826f97f",
"assets/assets/images/payment/bacs@3x.png": "3cc5de43c1680b174a41dd1b37cb1c9c",
"assets/assets/images/payment/cheque.png": "9fa861f4344895f5ea7d2eb9a706b379",
"assets/assets/images/payment/cheque@2x.png": "86b9f8d796d7dd433273700c58602320",
"assets/assets/images/payment/cheque@3x.png": "70e894d289f49a52bcd070bda748b3e1",
"assets/assets/images/payment/cod.png": "03bd70c06e580c01b8f309154a3c576e",
"assets/assets/images/payment/cod@2x.png": "94d3a9bc2267471d2a2fea6ae735d5d0",
"assets/assets/images/payment/cod@3x.png": "8d3b5ad67c726333190f51a58dd376ee",
"assets/assets/images/splash.png": "fa23d9e9546f873753825ed731a12ab8",
"assets/assets/lang/ar.json": "6a1ee39ba5a368a485cf67cd6ded1653",
"assets/assets/lang/en.json": "ee80da5d38ebda0f52e458190d7cfc0b",
"assets/assets/lang/id.json": "f578364351e9af400bf56c13e1a62a27",
"assets/assets/lang/tr.json": "6d83028b9062eecaef313210f70d1030",
"assets/assets/lang/zh.json": "d6e047524c4c81ed3bf33efa051d2d0b",
"assets/FontManifest.json": "e67bce09c056088d67726b32a8d6dac5",
"assets/fonts/MaterialIcons-Regular.otf": "eeb700e0d5d3a755517bc9e79bd49428",
"assets/google_fonts/OFL.txt": "481fed197dac47775fb62cefafa2555e",
"assets/google_fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/google_fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/google_fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/google_fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "d53d33cb010879c36116bdbd3c912184",
"assets/packages/awesome_icons/fonts/Brands-Regular-400.otf": "db3d580df1a0e4b58fb0f82036c32e57",
"assets/packages/awesome_icons/fonts/Free-Regular-400.otf": "57ee9fd792b814626c2331619b1feabd",
"assets/packages/awesome_icons/fonts/Free-Solid-900.otf": "51671249768d3db22a8f9bea6a85b6a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e5478f9b321e54ca0597da6f5b5548f3",
"firebase-messaging-sw.js": "cfbf600de6919f94faa7eade5d9718e4",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d4ec88b1225bc5a64831a3d20e04f9fa",
"flutter_facebook_auth.js": "907649ab35a69b99e94f8dd75bece03b",
"icons/Icon-192.png": "b364debf52217df94cd5affa86d5a550",
"icons/Icon-512.png": "efeb75de76631a92877ec6f7d43175f5",
"index.html": "6d4299e790be0dd7b56fb456758632dc",
"/": "6d4299e790be0dd7b56fb456758632dc",
"main.dart.js": "778600b836c28a09813a4b0add6f628c",
"manifest.json": "ba87885c3938c828cd0be98d0022e1cf",
"version.json": "29c626bc273840c8fed74362edae90b3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
