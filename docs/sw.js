if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const o=e=>c(e,a),f={module:{uri:a},exports:n,require:o};s[a]=Promise.all(i.map((e=>f[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"AppStore.css",revision:"f101c8a3b76acba4f116a01060110e03"},{url:"AppStore.js",revision:"fe3da5711c20476ff1e16c4ab947513a"},{url:"Calculator.css",revision:"8a82fa0557b54f4a4f7c39ce4af7d00c"},{url:"Calculator.js",revision:"140a06c734d81555c9e06c32f69faef0"},{url:"Calendar.css",revision:"fa99c17d8085d8da65704b9d536c081d"},{url:"Calendar.js",revision:"b87d4c29c7c2a1760bf3ec72861356c4"},{url:"index.css",revision:"b33f472cce4b0f90c57f706511a4d3ad"},{url:"index.html",revision:"010f79491d62862e642957f6f8a5f1b9"},{url:"index.js",revision:"32c229456a4b6d330a614356e81697bd"},{url:"PurusProfile.css",revision:"1c75f6616a268196478a9ceb165fecc6"},{url:"PurusProfile.js",revision:"78080ed6b3f8bcb09a6f295c6d315ce2"},{url:"VSCode.css",revision:"0b6c6c3513ac1846c080634e70c2770e"},{url:"VSCode.js",revision:"2142f15f499c63ba7acce41b57d7e436"},{url:"WallpaperSelectorApp.css",revision:"e05da87fe91cab0e0b880de2d2e45e16"},{url:"WallpaperSelectorApp.js",revision:"4b205b108a80ea59b8e9976efc76c05b"},{url:"Window.css",revision:"bc4af0815dc84271fc3d07cb5b59a418"},{url:"Window.js",revision:"81cb3b051f8aa18214f6e913e96d2c3c"},{url:"manifest.webmanifest",revision:"c3786e5214b6f075f4392d92afd82ea5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));