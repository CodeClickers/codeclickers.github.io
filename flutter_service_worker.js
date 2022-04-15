'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7f75536ae849a506c18c89dc5e0db986",
"assets/assets/home_tiles/icons/Angle.png": "aea691b85b2ebfe2a148039bd478ca93",
"assets/assets/home_tiles/icons/Area.png": "f86277d326c9a0ae572323876a1c8d00",
"assets/assets/home_tiles/icons/DataTranferRate.png": "8c132c87fa3774576d1f546c3a373cc5",
"assets/assets/home_tiles/icons/DigitalStorage.png": "c372f61dde709603ac97c43f83a8475b",
"assets/assets/home_tiles/icons/Energy.png": "b641a7d288e9d36b007d9cf73b9d90b8",
"assets/assets/home_tiles/icons/Force.png": "84ad3ce964a8dc3cff86db0885f33785",
"assets/assets/home_tiles/icons/Frequency.png": "7903f0ce0c3a00f86f8767026e2859fb",
"assets/assets/home_tiles/icons/FuelEconomy.png": "ba4f2b1743444c088628c2c17617f913",
"assets/assets/home_tiles/icons/Length.png": "3bb68db3f802113f07ac4f02e0bac42f",
"assets/assets/home_tiles/icons/Mass.png": "f498a0dc3079b85b697363807c583cb4",
"assets/assets/home_tiles/icons/Pressure.png": "1edd9592c693a18578929bb76f8a047a",
"assets/assets/home_tiles/icons/Speed.png": "fcb2858c1ee85efcf3ee2ac897acf740",
"assets/assets/home_tiles/icons/Temperature.png": "7b14499a76940ed865af6dddb1cdf59e",
"assets/assets/home_tiles/icons/Time.png": "b9061e90fbf65400917c02354a9e7352",
"assets/assets/home_tiles/icons/Volume.png": "88bfa46c3549160fabaeea8e85a9a4a8",
"assets/assets/logo/Animated-Logo.gif": "519354f9e92aea5306670de63e607017",
"assets/assets/logo/Icon.ico": "133b4f480cdbf8c20470322e990d87af",
"assets/assets/logo/Icon.png": "d64bca305e2cc0f2f34bc4f982af9544",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/home_tiles/icons/Angle.png": "aea691b85b2ebfe2a148039bd478ca93",
"assets/home_tiles/icons/Area.png": "f86277d326c9a0ae572323876a1c8d00",
"assets/home_tiles/icons/Data%20Transfer%20Rate.png": "8c132c87fa3774576d1f546c3a373cc5",
"assets/home_tiles/icons/Digital%20Storage.png": "c372f61dde709603ac97c43f83a8475b",
"assets/home_tiles/icons/Energy.png": "b641a7d288e9d36b007d9cf73b9d90b8",
"assets/home_tiles/icons/Force.png": "84ad3ce964a8dc3cff86db0885f33785",
"assets/home_tiles/icons/Frequency.png": "7903f0ce0c3a00f86f8767026e2859fb",
"assets/home_tiles/icons/Fuel%20Economy.png": "ba4f2b1743444c088628c2c17617f913",
"assets/home_tiles/icons/Length.png": "3bb68db3f802113f07ac4f02e0bac42f",
"assets/home_tiles/icons/Mass.png": "f498a0dc3079b85b697363807c583cb4",
"assets/home_tiles/icons/Pressure.png": "1edd9592c693a18578929bb76f8a047a",
"assets/home_tiles/icons/Speed.png": "fcb2858c1ee85efcf3ee2ac897acf740",
"assets/home_tiles/icons/Temperature.png": "7b14499a76940ed865af6dddb1cdf59e",
"assets/home_tiles/icons/Time.png": "b9061e90fbf65400917c02354a9e7352",
"assets/home_tiles/icons/Volume.png": "88bfa46c3549160fabaeea8e85a9a4a8",
"assets/logo/Animated-Logo.gif": "519354f9e92aea5306670de63e607017",
"assets/logo/Icon.png": "d64bca305e2cc0f2f34bc4f982af9544",
"assets/NOTICES": "fff6c46161dd7f7611c030306c2a622b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd8bbd0ab63a044545887801f3a1027b",
"/": "cd8bbd0ab63a044545887801f3a1027b",
"main.dart.js": "41645c0260fbd6a02cd8c4b79ce77d1d",
"manifest.json": "b1cf10c076a2492acbe5a463bf9a8b4f",
"splash/img/dark-1x.png": "1d119b2f323cff0c20aeddcbd794458e",
"splash/img/dark-2x.png": "032b3b8b871f5c2e74c1f98fa8606a65",
"splash/img/dark-3x.png": "37ade81f15abe808925fd78632bd5054",
"splash/img/dark-4x.png": "c895ad016820ca19aa015b6554cf57ca",
"splash/img/light-1x.png": "1d119b2f323cff0c20aeddcbd794458e",
"splash/img/light-2x.png": "032b3b8b871f5c2e74c1f98fa8606a65",
"splash/img/light-3x.png": "37ade81f15abe808925fd78632bd5054",
"splash/img/light-4x.png": "c895ad016820ca19aa015b6554cf57ca",
"splash/splash.js": "f6ee10f0a11f96089a97623ece9a1367",
"splash/style.css": "86c7608ad714e32ce1ebfe277ca6ecff",
"version.json": "136289cb1109634e01f64c63ac83e20c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
