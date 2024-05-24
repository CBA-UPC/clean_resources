;/*FB_PKG_DELIM*/

__d("SkywalkerHelpers",[],(,66);
__d("SkywalkerManager",["Bootloader","Promise","SkywalkerHelpers","TransportSelectingClientSingleton","TransportSelectingClientUtils","gkx","nullthrows","promiseDone","regeneratorRuntime","requireDeferred"],(,98);
__d("PluginLWIReload",["Cookie","CurrentUser","SkywalkerManager"],(function(a,b,c,d,e,f,g){"use strict";var h=12e4;function a(a){var b=0;Event.listen(a,"mousemove",function(){!c("CurrentUser").isLoggedInNow()&&c("Cookie").get("c_user")!=null&&Date.now()-b>h&&(b=Date.now(),window.location.reload())})}function b(a,b,d){var e=0;b="lwi_everywhere_plugin/"+b+","+d;d=c("SkywalkerManager").subscribe(b,function(a){a=JSON.parse(a.payload);(a==null?void 0:a.ebc_proxy_id)!==null&&Date.now()-e>h&&(e=Date.now(),window.location.reload())});a&&d.unsubscribe()}g.attachPluginReload=a;g.attachFBECreationPluginReload=b}),98);
/**
 * License: https://www.facebook.com/legal/license/KtedQ-9_l2p/
 */
__d("stream-helpers",["ManagedError","Promise"],(,null);
/**
 * License: https://www.facebook.com/legal/license/KtedQ-9_l2p/
 */
__d("stream-queue-with-sizes",["stream-helpers"],(,null);
/**
 * License: https://www.facebook.com/legal/license/5AQLfddX66n/
 */
__d("stream-utils",["stream-helpers"],(,null);
/**
 * License: https://www.facebook.com/legal/license/boriBhOe8AA/
 */
__d("WritableStreamPolyfill",["MaybeNativePromise","stream-helpers","stream-queue-with-sizes","stream-utils"],(,null);
/**
 * License: https://www.facebook.com/legal/license/boriBhOe8AA/
 */
__d("ReadableStreamPolyfill",["MaybeNativePromise","WritableStreamPolyfill","stream-helpers","stream-queue-with-sizes","stream-utils"],(,null);