'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e487093ef36080dcf644cf49e1f899b0",
".git/config": "9fa7be59d28fc8537b11cc5022f1c604",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "00d2dfc30e2c1504853b8e4077d1855d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b719cd9cac43040fce7621bfc9a009c",
".git/logs/refs/heads/master": "4b719cd9cac43040fce7621bfc9a009c",
".git/logs/refs/remotes/origin/master": "9dcfb53241921548be17d0f49829e03b",
".git/objects/02/27bec75a68b31b2de6cba846eabfec7c035b47": "12e1d209c1ccbac781968f12104a9e31",
".git/objects/03/36b73a0c2da36bbf3f95382c2384ab78a6d5da": "b6972f12c0085e0b2c85a901f6e99ae3",
".git/objects/04/5998018c8e2830fdfac24af1b07cec37c1cf6d": "e1e1ef794550011b1848ce29557fc57c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/25/3e3f3e6840fbac5c759a116cd63619d4298174": "a7d32359d059b44c288dbc4e8adb1658",
".git/objects/27/52d903c04ed41bbaf64fb582777baa8fda75a1": "f70f670a69e4f476fb3d76a6cb883c40",
".git/objects/29/8ff6ab48d977926940a85028071843ba255030": "b0ac695491800b1946c36e66c46f4bed",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/30/5db1c63678d66d7b58b78af6ec64cafb0c5db8": "a7859b0773ebcb0b7ce34cedb78cbfc8",
".git/objects/31/e0945b1e71df4aad1a184d52a758f45de3c77b": "3c69536475c560d3b81f85c8765a599c",
".git/objects/33/5613b2fd9846f5a0dc9928ff0188172de9fd46": "c1daf6a84273561368bcf0d347033047",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/328ef56b9143f63571eb670a4578593ff87aed": "ca68b4b010384af107d97ef012e386f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/00f252cf2f4ceb1b94889e7514b7c91d766148": "a52a8c2f48b254d3a2b35ce6a02a7f5c",
".git/objects/4f/dec4bc9566ccbc85687f211969444dbbe768ac": "1a0a83e206a324488a30589a5e7065c1",
".git/objects/52/e774ed3839b3c18ae99e3b19833ebe67249ddb": "b1b4937b9a6bf35341287f65df86b2ba",
".git/objects/62/72ce7519ed4d8137ecc139380408f27348e5b9": "5d301b5900655c2074e1aeec5aba98aa",
".git/objects/6c/6a4f9bbdc8ab78c0afafc643751f9a0f19e19c": "9431c7f0c2e04e7f5594aa0382e91448",
".git/objects/6e/a247691697acd26f8aa8dcad53eba951dcd483": "63b078e2c524b1c8b54f92ebf0e11fa9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/788b69f52b3b0b2bc71f01ba24916c97066867": "e4b5e02b84135d0f61b0df2bc4edb4d7",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/4752bfc5a7d4fd0d4880db4387e5a89aedb15d": "55026525a86881cd9683306d1945c3f0",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/74e5ba7f02ccfd0888e8aa9992b58015b4177d": "a0fb4c32a8a6616a801c036673cf081d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/21dce06ea9c5cabcd1b3c7b18e9e3afd423f3c": "0ecbe8cf8c91d97a8ee1f96feb8b7653",
".git/objects/b4/499f2d16809704196a2311a26d83762a9fafa3": "947684c66de91b84b29ef9bf02afda9e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/8fab39935f9253f9e2f5b242af792ca4e5b55d": "c5230dd63b17978220af3555dd01838b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a2790909208974cf14b0f95186e3ef7d148f89": "ad60faaab2188fb32ac3198378183ce9",
".git/objects/c9/0b30d8b237a44bc9eebf78d38063406ea6500f": "513f22bf9c96960d2582b527293c7f32",
".git/objects/c9/12d9c3d9f86ce7188bcdccc5be73ab51093ad6": "9126f1144f0baefe7a3874c401fe99c3",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d5/641c9d6c84697c2f05d4f570e0f11f315ad4e0": "4dec7ccf8158dc8a78f5a094cde4f14e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/6573d58758e4cd5daf3f73654b85c33a2396a7": "7941d1604d4bc156902ace0a5af36680",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/65506ce2e3ec2a9cfb96e273ef4a7a58d60a97": "3de8b69a9d791f68b1087ffed900dc31",
".git/objects/e3/fecab91f0e5d5d0ddf9d37ef26f8893b3bceff": "23e94003fc0a2792034a2a4e4a9f2c9d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/c641bbc61098f0617172be93680924508315c3": "310f6c375fd103d1c2b30d9dda32eb1b",
".git/objects/e6/f938f21cb852407cc5972943d3f0057b566f3b": "770c13ec3c9edb3f42a4d94d17b08aef",
".git/objects/e7/414695cc09097c55290ffd14ab1f26f663f8e3": "03390105123b52dee52bf62f37099f65",
".git/objects/e7/f2cea4a57a4b16a8cd2ff2ad96c5c992430b62": "5bee9d1316f742483471f267b75281e3",
".git/objects/e9/78187a6546c528b90a7a5d6133dbbfd220683f": "374518e3d5243e5993388f381809ec4a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/738aa56ec0548e79d8a5553584e1347a68d173": "0c67ae96e60928b9d57420064969d1d0",
".git/objects/f3/f87b3f86996d29a50b858c52d6c93f645360e6": "d6468f16088f02f1adc2f6badfe70914",
".git/objects/f5/64b9b62cd784a2d847bcb81955272d0c0f61a5": "08052c50021e830327766ae4e1a7c466",
".git/objects/fa/0db44bcae8897c48ea49c9007e07ff06ae9771": "f28f81793d885f43628631a182cff360",
".git/objects/fb/ed6f5216fd69860da4b453a3ea3ed84d90151d": "382408f61d878b1d1a4308abf7580957",
".git/objects/fe/22118c05f9584b108df9111135e6371670f77d": "4b3dce8edbccb0d8e10ea348dde8aa30",
".git/refs/heads/master": "c95ff985863ec16808001ff4c9cc299f",
".git/refs/remotes/origin/master": "c95ff985863ec16808001ff4c9cc299f",
"assets/AssetManifest.json": "4cc43ebeda45431ea65fa2ad66141494",
"assets/assets/bigscreen/apexlegend.jpg": "c71896a22674856879f851d82d5c5455",
"assets/assets/bigscreen/asphalt.jpg": "a56ecbb878fbb6fca9e31afc598a6d22",
"assets/assets/bigscreen/assassincreed.jfif": "dc8e84da3e2c9a3351736fae39b9989f",
"assets/assets/bigscreen/creed.jpg": "eab78ec992886a5671d092d87e2cd1b8",
"assets/assets/bigscreen/ghost.jpg": "35b192c0f5f77b5103a2339865650342",
"assets/assets/bigscreen/ghost.png": "be85a62be1a15973417e0d876afb9671",
"assets/assets/bigscreen/ghostreckon.jpg": "6403feb1880df59323d1aabfd57cebbe",
"assets/assets/bigscreen/nba2k22.jpg": "723a097613d20c321bcfcfc629dc5446",
"assets/assets/bigscreen/rocketleague.jpg": "69c06c20ba1a9ca17ea1c04db7573e99",
"assets/assets/bigscreen/spiderman.png": "1ab6145ac25ab8cd52aa93b562cdc5bd",
"assets/assets/bigscreen/tsushima.jpg": "920aaf52907d629e185b48804497f64a",
"assets/assets/bigscreen/warzone.png": "805281171b42d38a495b174b55b95c17",
"assets/assets/bigscreen/wwe2k22.jpg": "d7d8e369060dbffcd76c2b00e0f3b511",
"assets/assets/gameicon/2k22.png": "9a3861bda9a9b0bde036825f31529c71",
"assets/assets/gameicon/APEX.png": "a62647cb199f0cba1fc5af6e6df7018c",
"assets/assets/gameicon/asphalt.jpg": "75aa9657d1323526702bd2c521494737",
"assets/assets/gameicon/assasincreed.png": "89dcb11e0b6ff90a345904ee3de78931",
"assets/assets/gameicon/ghost.jpg": "38a291bd6fe29ee91b37b6c9945e8f65",
"assets/assets/gameicon/reckon.png": "5a74b3731a02428b56d051469985ed2f",
"assets/assets/gameicon/rocketleague.jpg": "32b399b0661c61ab549ff3f9b524d178",
"assets/assets/gameicon/spiderman.png": "fc42de72be8a1250da6b2d569b849acc",
"assets/assets/gameicon/tsushima.jpg": "6c9e6dd37ae8e692b086fac3049f1119",
"assets/assets/gameicon/warzone.png": "805281171b42d38a495b174b55b95c17",
"assets/assets/gameicon/wwe2k.png": "2177aa0947f09b306415d0d4417037cd",
"assets/assets/gameicon/wwecover.jpg": "eb340daf6b6537565bf70cbd049465df",
"assets/assets/psbag.png": "94dfdffacddbe470d98824f5ee4a47d4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8f2b7ab052dfcf4ace9901a3769cab3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "53bfed47592315f66f0b6a76b2e06af4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d5e3e36fde7cad25c73cb354c664004f",
"/": "d5e3e36fde7cad25c73cb354c664004f",
"main.dart.js": "767e76cd43f740906c1191662a03bff5",
"manifest.json": "86feb562f191494a87cca53f12c54bcb",
"version.json": "c7ba2e69afc66b874ab272d49da1c46d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
