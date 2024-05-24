/*global self, fetch, caches, navigator*/
/*
Resources we generate with hash
which allows us to be sure
that new version of site requests different files from ones that are in cache
so if we need old file it goes from cache
if we need new one it's just new one
 */
const cacheWhiteList = [
    /\/css\/.*embed_view/gi,
    /\/js\/dist\/.*embed_view-.*\.js/gi,
    /\/js\/dist\/.*embed_viewer-.*\.js/gi,
    /\/js\/dist\/.*bundle_vendor-.*\.js/gi,
    /\/js\/dist\/.*infogram-charts\/.*\.js/gi, //everything under `infogram-charts` directory
];

/*
Resource files for which we do not have reliable way to tell if they changed
We do not put them to cache but we still share fetch requests that cleanup themselves after 5 seconds
 */
const reuseFetchWhitelist = [
    /\/i\/fonts\/igticons\.woff/gi,
    /\/i\/fonts\/infoticons\.woff/gi,
    /fonts\.gstatic\.com.*\.woff/gi,
    /fonts\.googleapis\.com\/css/gi,
    /\/api\/maps/gi,
    /\/css\/.*\.css/gi,
    /\/i\/templates\//gi,
];

const currentCache = caches.open('embed-cache');

const fetches = {};

self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function () {
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    const pattern = cacheWhiteList.find((pattern) => event.request.url.match(pattern));
    if (pattern) {
        fromCacheFirst(event, pattern);
    } else if (reuseFetchWhitelist.find((pattern) => event.request.url.match(pattern))) {
        shareFetch(event);
    }
});

function clearFetchLater(id) {
    setTimeout(function () {
        delete fetches[id];
    }, 5000);
}

function removeAlternativeVersion(pattern, url, cache) {
    cache.keys().then((requests) => {
        requests.forEach((request) => {
            if (url !== request.url && request.url.match(pattern)) {
                cache.delete(request);
            }
        });
    });
}

function respondFromCache(event, pattern) {
    return currentCache.then((cache) => {
        return cache
            .match(event.request)
            .then(function (response) {
                const request = event.request.clone();
                return (
                    response ||
                    getFetchFor(event).then((response) => {
                        if (response.status < 400) {
                            cache.put(request, response.clone());
                            removeAlternativeVersion(pattern, request.url, cache);
                        }
                        return response.clone();
                    })
                );
            })
            .catch(() => {
                navigator.serviceWorker.getRegistration().then((r) => r.unregister());
                return getFetchFor(event).then((response) => {
                    return response.clone();
                });
            });
    });
}

function fromCacheFirst(event, pattern) {
    event.respondWith(respondFromCache(event, pattern));
}

function getFetchFor(event) {
    const requestID = [event.request.url, event.request.method].join(':::');
    if (!fetches[requestID]) {
        fetches[requestID] = fetch(event.request);
        clearFetchLater(requestID);
    }
    return fetches[requestID];
}

function shareFetch(event) {
    event.respondWith(getFetchFor(event).then((response) => response.clone()));
}
fr-menu-list-search-container"),s=t.one("ul");let a="menuitem",r="menu";o&&(a="option",r="listbox"),i.size()>0&&(s.setAttribute(n,r),i.set(n,a)),e.attr({"aria-haspopup":!0}),e.hasClass("input-localized-trigger")||s.setAttribute("aria-labelledby",e.guid())}},N.handleFocus=function(t){const n=e.one(t);n&&(n.delegate("mouseenter",e.rbind(N._targetLink,n,"focus"),T),n.delegate("mouseleave",e.rbind(N._targetLink,n,"blur"),T))};const S=[];N.register=function(e){const t=document.getElementById(e);t&&(N._INSTANCE||new N,S.push(t),N._registerTask())},N._registerTask=e.debounce((()=>{if(S.length){e.all(S).on([d,u],e.bind("_registerMenu",N)),S.length=0}}),100),N._targetLink=function(e,t){const n=e.currentTarget.one("a");n&&n[t]()},Liferay.provide(N,"_getFocusManager",(()=>{const t=N._INSTANCE;let n=t._focusManager;if(!n){const i=t._overlay.bodyNode;i.plug(e.Plugin.NodeFocusManager,{circular:!0,descendants:"li:not(.hide) a,input",focusClass:"focus",keys:{next:"down:40",previous:"down:38"}}),i.on("key",(()=>{const e=t._activeTrigger;e&&(t._closeActiveMenu(),e.focus())}),"down:27,9"),n=i.focusManager,i.delegate("mouseenter",(e=>{n.get("focused")&&n.focus(e.currentTarget.one("a"))}),T),n.after("activeDescendantChange",(e=>{const t=n.get("descendants").item(e.newVal);if(t){const e=i.one("ul");e&&e.setAttribute("aria-activedescendant",t.guid())}})),t._focusManager=n,Liferay.once("beforeScreenFlip",(()=>{t._focusManager=null}))}n.refresh()}),["node-focusmanager"],!0),Liferay.provide(N,"_getLiveSearch",((e,t)=>{const n=t.guid();let i=A[n];if(!i){const e=t.one("ul"),o=[];e.all("li").each((e=>{o.push({name:e.one(".taglib-text-icon").text().trim(),node:e})})),i=new Liferay.MenuFilter({content:e,menu:N._INSTANCE,minQueryLength:0,queryDelay:0,resultFilters:"phraseMatch",resultTextLocator:"name",source:o}),i.get("inputNode").swallowEvent("click"),A[n]=i}}),["liferay-menu-filter"],!0),Liferay.provide(N,"_registerMenu",(t=>{const n=t.key||t.keyCode;if(t.type===u&&n!==e.Event.KeyMap.SPACE)return;const i=N._INSTANCE,o=i._handles,a=t.currentTarget,c=i._activeTrigger;if(c){if(c===a)return void i._closeActiveMenu();{c.removeClass(s),c.get(g).removeClass(r);const e=c.ancestor(l);e&&e.removeClass(r)}}if(!a.hasClass("disabled")){const n=i._getMenu(a);if(i._activeMenu=n,i._activeTrigger=a,a.attr({"aria-expanded":!0}),!o.length){const t=a.getData("menuListContainer");e.Event.defineOutside("touchend"),o.push(e.getWin().on("resize",e.debounce(i._positionActiveMenu,200,i)),e.getDoc().on(d,i._closeActiveMenu,i),t.on("touchendoutside",(e=>{e.preventDefault(),i._closeActiveMenu()}),i),Liferay.on("dropdownShow",(e=>{"LiferayMenu"!==e.src&&i._closeActiveMenu()})));const n=e.DD&&e.DD.DDM;n&&o.push(n.on("ddm:start",i._closeActiveMenu,i))}i._positionActiveMenu(),Liferay.fire("dropdownShow",{src:"LiferayMenu"}),t.halt()}}),["aui-widget-cssclass","event-outside","event-touch","widget","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod"]),Liferay.Menu=N}),"",{requires:["array-invoke","aui-debounce","aui-node"]});

