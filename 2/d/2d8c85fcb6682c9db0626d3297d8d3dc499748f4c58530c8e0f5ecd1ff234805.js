(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[750],{43522:51328:98910:93546:56768:88294:27573:function(t,e,r){"use strict";t.exports=r(88294)},32859:84948:66881:39848:function(t,e,r){"use strict";r.d(e,{j:function(){return s}});var n=r(98005),i=r(9163);class o extends n.l{nSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){let e=this.focused!==t;e&&(this.focused=t,this.onFocus())}onFocus(){this.listeners.forEach(({listener:t})=>{t()})}let s=new o},96094:44502:function(t,e,r){"use strict";r.d(e,{N:function(){return u}});var n=r(98005),i=r(9163);let o=["online","offline"];class s extends n.l{new s},31644:function(t,e,r){"use strict";r.d(e,{z:function(){return a}});var n=r(9163),i=r(96094),o=r(39848),s=r(98005),u=r(5339);class a extends s.l{ldFetchOnReconnect(){return f(this.currentQuery,this.options,this.options.refetchOnReconnect)}urrentResult(){return this.currentResult}imeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}nction(t,e,r){"use strict";r.d(e,{DV:function(){return c},Kw:function(){return u},Mz:function(){return f}});var n=r(39848),i=r(44502),o=r(9163);05:9163:function(t,e,r){"use strict";r.d(e,{A4:function(){return C},G9:function(){return U},Gh:function(){return A},I6:function(){return l},Kp:function(){return c},PN:function(){return s},Rc:function(){return a},Rm:function(){return v},SE:function(){return o},VS:function(){return w},X7:function(){return y},ZT:function(){return i},_v:function(){return f},_x:function(){return d},cb:function(){return p},e5:function(){return u},lV:function(){return h},oE:function(){return B},sk:function(){return n},to:function(){return b},yF:function(){return g}});let n="undefined"==typeof window||"Deno"in window; l(t,e,r){return O(t)?[{...e,queryKey:t},r]:[t||{},e]}(t,e,r){"use strict";r.r(e),r.d(e,{QueryClientProvider:function(){return a},defaultContext:function(){return i},useQueryClient:function(){return u}});var n=r(7653);let i=n.createContext(void 0),o=n.createContext(!1);et u=a=,98848:function(t,e,r){"use strict";r.r(e),r.d(e,{QueryErrorResetBoundary:function(){return u},useQueryErrorResetBoundary:function(){return s}});var n=r(7653);et o=n.createContext(i()),s=()=>n.useContext(o),u=,26843:function(t,e,r){"use strict";r.d(e,{JN:function(){return s},KJ:function(){return u},pf:function(){return o}});var n=r(7653),i=r(94037);let o=s=u=,46213:function(t,e,r){"use strict";r.r(e),r.d(e,{IsRestoringProvider:function(){return s},useIsRestoring:function(){return o}});var n=r(7653);let i=n.createContext(!1),o=s=i.Provider},567:function(t,e,r){"use strict";r.d(e,{Fb:function(){return n},SB:function(){return o},Z$:function(){return i},j8:function(){return s}});let n=i=o=s=,68497:function(t,e,r){"use strict";r.d(e,{r:function(){return h}});var n=r(7653),i=r(96094),o=r(82162),s=r(98848),u=r(10040),a=r(46213),c=r(26843),f=r(567);function h(t,e){let r=(0,u.useQueryClient)({context:t.context}),h=(0,a.useIsRestoring)(),l=(0,s.useQueryErrorResetBoundary)(),p=r.defaultQueryOptions(t);p._optimisticResults=h?"isRestoring":"optimistic",p.onError&&(p.onError=i.V.batchCalls(p.onError)),p.onSuccess&&(p.onSuccess=i.V.batchCalls(p.onSuccess)),p.onSettled&&(p.onSettled=i.V.batchCalls(p.onSettled)),(0,f.Fb)(p),(0,c.pf)(p,l),(0,c.JN)(l);let[d]=n.useState(,y=d.getOptimisticResult(p);if((0,o.$)(n.useCallback([d,h]),()=>d.getCurrentResult(),,n.useEffect([p,d]),(0,f.SB)(p,y,h))throw(0,f.j8)(p,d,l);if((0,c.KJ)({result:y,errorResetBoundary:l,useErrorBoundary:p.useErrorBoundary,query:d.getCurrentQuery()}))throw y.error;return p.notifyOnChangeProps?y:d.trackResult(y)}},61501:function(t,e,r){"use strict";r.r(e),r.d(e,{useQuery:function(){return s}});var n=r(9163),i=r(31644),o=r(68497);,82162:94037:]);