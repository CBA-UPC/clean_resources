import{I as h,q as l,a1 as y,d as m,j as o,aE as T,aF as I,$ as C,a0 as _,aG as x,aH as $,aI as L,aJ as i,aK as P,aL as k,aM as j,aN as A,aO as H,aP as F,aQ as g,aR as S,aS as c,aT as Z,aU as Q,aV as R,aW as N,aX as r,aY as b,ay as D,aZ as G,aA as O,U,a_ as q,k as E,a$ as M,n as B}from"./index-172e3f67.js";const W=h({name:"ListDefaultUnifiedSmallImageText",fragment(){return l`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${y.name}
      }
      ${y.fragment()}
    `}}),Y=({contents:t=[],hideDescription:e,...n})=>o.jsx(T,{headlineIsA:"h1",...n,children:o.jsx(I,{children:t.map(s=>o.jsx(C,{content:s,imageFormatConfig:_(),titleIsA:"h2",hideDescription:e},s.id))})}),V=`
  ${x}
  ${$}
`,v=m(Y)``,d=W,w=({contents:t,headlineTranslation:e,...n})=>L(t)&&o.jsx(v,{contents:t,headlineTranslation:e,hideDescription:!0,...n}),z=V,J=m(w)``,K=[i.Article,i.Video,i.Audio,i.ImageGallery],X=({__typename:t})=>K.includes(t),tt=t=>A(t)?H:F,et=({className:t})=>{const{leadingContent:e}=k();return!e||!X(e)?null:o.jsx(j,{className:t,slotConfig:tt(e)})},ot=P,p=h({name:"TopStoryZoneNoQueryFragment",fragment(){return l`fragment ${this.name} on Navigation {
      ...${g.name}
      contentComposition {
        informationSpaces {
          name
          top_story: compositionComponents(type: TOP_STORY) {
            id
            type
            contents {
              ...${S.name}
            }
          }
          high_priority_stories: compositionComponents(type: HIGH_PRIORITY_STORIES) {
            id
            type
            cocoContents {
              ...${c.name}
            }
          }
          high_priority_stories_list: compositionComponents(type: HIGH_PRIORITY_STORIES_LIST) {
            id
            type
            contents {
              ...${d.name}
            }
          }
        }
      }
    }
    ${g.fragment()}
    ${S.fragment()}
    ${c.fragment()}
    ${d.fragment()}
    `}}),nt=t=>{if(!(t!=null&&t.contentComposition))return{topStory:null,highPriorityStories:null,highPriorityStoriesList:null};const{top_story:e=[],high_priority_stories:n=[],high_priority_stories_list:s=[]}=t.contentComposition.informationSpaces.find(G)||{},[a=null]=e,[u=null]=n,[f=null]=s;return{topStory:a,highPriorityStories:u,highPriorityStoriesList:f}},st=({topStoriesNavigation:t,className:e})=>{const{topStory:n,highPriorityStories:s,highPriorityStoriesList:a}=nt(t);return o.jsxs("div",{className:e,children:[n&&o.jsx(N,{contents:n.contents,pageSectionId:r(n)}),s&&o.jsx(b,{headlineTranslation:"content_block_detail.home_high_priority_stories.headline",contents:s.cocoContents,pageSectionId:r(s)}),!s&&a&&o.jsx(J,{headlineTranslation:"content_block_detail.home_high_priority_stories.headline",contents:a.contents,pageSectionId:r(a)}),o.jsx(D,{content:t}),o.jsx(et,{className:"bottom-slot"})]})},at=`
  ${Z}
  ${Q}
  ${z}
  ${R}
  ${ot}
`,it=m(st)`
  display: grid;
  .bottom-slot {
    padding-top: 20px;
    padding-bottom: 50px;
  }
`,rt=l`
 query topStoryZone($id: Int, $lang: Language!) {
  topStoriesNavigation(lang: $lang) {
    ...${p.name}
  }
}
${p.fragment()}
`,lt=()=>{const{langCode:t,contentId:e}=E();return M(rt,{variables:{lang:B(t)||"ENGLISH",id:+e}})},mt=O(it)(at),gt=()=>{const{data:t,error:e,loading:n}=lt();return e?(U.console.error("Could not fetch top story zone.",e),null):n?o.jsx(q,{}):t!=null&&t.topStoriesNavigation?o.jsx(mt,{topStoriesNavigation:t.topStoriesNavigation}):null};export{gt as TopStoryZone,rt as topStoryZoneQuery};
//# sourceMappingURL=TopStoryZone-d773bab6.js.map
,o.prototype.prependListener=function(e,t){return d(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,u(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,u(this,e,t)),this},o.prototype.removeListener=function(e,t){var r,i,n,a,f;if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(i=this._events))return this;if(void 0===(r=i[e]))return this;if(r===t||r.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!==typeof r){for(n=-1,a=r.length-1;a>=0;a--)if(r[a]===t||r[a].listener===t){f=r[a].listener,n=a;break}if(n<0)return this;0===n?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,n),1===r.length&&(i[e]=r[0]),void 0!==i.removeListener&&this.emit("removeListener",e,f||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,r,i;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var n,a=Object.keys(r);for(i=0;i<a.length;++i)"removeListener"!==(n=a[i])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},o.prototype.listeners=function(e){return l(this,e,!0)},o.prototype.rawListeners=function(e){return l(this,e,!1)},o.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},"/ab2":function(e,t,r){var i=r("iUdu"),n=r("QihY"),a=r("6F8h");t.createCipher=t.Cipher=i.createCipher,t.createCipheriv=t.Cipheriv=i.createCipheriv,t.createDecipher=t.Decipher=n.createDecipher,t.createDecipheriv=t.Decipheriv=n.createDecipheriv,t.listCiphers=t.getCiphers=function(){return Object.keys(a)}},"/ayr":function(e,t,r){var i;function n(e){this.rand=e}if(e.exports=function(e){return i||(i=new n(null)),i.generate(e)},e.exports.Rand=n,n.prototype.generate=function(e){return this._rand(e)},n.prototype._rand=function(e){if(this.rand.getBytes)return this.rand.getBytes(e);for(var t=new Uint8Array(e),r=0;r<t.length;r++)t[r]=this.rand.getByte();return t},"object"===typeof self)self.crypto&&self.crypto.getRandomValues?n.prototype._rand=function(e){var t=new Uint8Array(e);return self.crypto.getRandomValues(t),t}:self.msCrypto&&self.msCrypto.getRandomValues?n.prototype._rand=function(e){var t=new Uint8Array(e);return self.msCrypto.getRandomValues(t),t}:"object"===typeof window&&(n.prototype._rand=function(){throw new Error("Not implemented yet")});else try{var a=r(5);if("function"!==typeof a.randomBytes)throw new Error("Not supported");n.prototype._rand=function(e){return a.randomBytes(e)}}catch(f){}},"0XuU":function(e,t,r){e.exports=r("43KI").Transform},"0cit":function(e,t,r){var i=r("P7XM");function n(e){this._reporterState={obj:null,path:[],options:e||{},errors:[]}}function a(e,t){this.path=e,this.rethrow(t)}t.Reporter=n,n.prototype.isError=function(e){return e instanceof a},n.prototype.save=function(){var e=this._reporterState;return{obj:e.obj,pathLen:e.path.length}},n.prototype.restore=function(e){var t=this._reporterState;t.obj=e.obj,t.path=t.path.slice(0,e.pathLen)},n.prototype.enterKey=function(e){return this._reporterState.path.push(e)},n.prototype.exitKey=function(e){var t=this._reporterState;t.path=t.path.slice(0,e-1)},n.prototype.leaveKey=function(e,t,r){var i=this._reporterState;this.exitKey(e),null!==i.obj&&(i.obj[t]=r)},n.prototype.path=function(){return this._reporterState.path.join("/")},n.prototype.enterObject=function(){var e=this._reporterState,t=e.obj;return e.obj={},t},n.prototype.leaveObject=function(e){var t=this._reporterState,r=t.obj;return t.obj=e,r},n.prototype.error=function(e){var t,r=this._reporterState,i=e instanceof a;if(t=i?e:new a(r.path.map((function(e){return"["+JSON.stringify(e)+"]"})).join(""),e.message||e,e.stack),!r.options.partial)throw t;return i||r.errors.push(t),t},n.prototype.wrapResult=function(e){var t=this._reporterState;return t.options.partial?{result:this.isError(e)?null:e,errors:t.errors}:e},i(a,Error),a.prototype.rethrow=function(e){if(this.message=e+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,a),!this.stack)try{throw new Error(this.message)}catch(t){this.stack=t.stack}return this}},"1CSz":function(e,t,r){"use strict";var i=r("P7XM"),n=r("hwdV").Buffer,a=r("ZDAU"),f=n.alloc(128);function o(e,t){a.call(this,"digest"),"string"===typeof t&&(t=n.from(t)),this._alg=e,this._key=t,t.length>64?t=e(t):t.length<64&&(t=n.concat([t,f],64));for(var r=this._ipad=n.allocUnsafe(64),i=this._opad=n.allocUnsafe(64),o=0;o<64;o++)r[o]=54^t[o],i[o]=92^t[o];this._hash=[r]}i(o,a),o.prototype._update=function(e){this._hash.push(e)},o.prototype._final=function(){var e=this._alg(n.concat(this._hash));return this._alg(n.concat([this._opad,e]))},e.exports=o},"1w4i":function(e){e.exports=JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}')},2:function(e,t){},"2j6C":function(e,t){function r(e,t){if(!e)throw new Error(t||"Assertion failed")}e.exports=r,r.equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)}},3:function(e,t){},"3BRs":function(e,t,r){"use strict";(function(t){var i=r("lm0R");function n(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,r){var i=e.entry;e.entry=null;for(;i;){var n=i.callback;t.pendingcb--,n(r),i=i.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}(t,e)}}e.exports=y;var a,f=i.nextTick;y.WritableState=b;var o=Object.create(r("Onz0"));o.inherits=r("P7XM");var s={deprecate:r("t9FE")},c=r("QpuX"),d=r("qPBE").Buffer,h=t.Uint8Array||function(){};var u,l=r("RoFp");function p(){}function b(e,t){a=a||r("sZro"),e=e||{};var o=t instanceof a;this.objectMode=!!e.objectMode,o&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var s=e.highWaterMark,c=e.writableHighWaterMark,d=this.objectMode?16:16384;this.highWaterMark=s||0===s?s:o&&(c||0===c)?c:d,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var h=!1===e.decodeStrings;this.decodeStrings=!h,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var r=e._writableState,n=r.sync,a=r.writecb;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(r),t)!function(e,t,r,n,a){--t.pendingcb,r?(i.nextTick(a,n),i.nextTick(S,e,t),e._writableState.errorEmitted=!0,e.emit("error",n)):(a(n),e._writableState.errorEmitted=!0,e.emit("error",n),S(e,t))}(e,r,n,t,a);else{var o=_(r);o||r.corked||r.bufferProcessing||!r.bufferedRequest||g(e,r),n?f(m,e,r,o,a):m(e,r,o,a)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new n(this)}function y(e){if(a=a||r("sZro"),!u.call(y,this)&&!(this instanceof a))return new y(e);this._writableState=new b(e,this),this.writable=!0,e&&("function"===typeof e.write&&(this._write=e.write),"function"===typeof e.writev&&(this._writev=e.writev),"function"===typeof e.destroy&&(this._destroy=e.destroy),"function"===typeof e.final&&(this._final=e.final)),c.call(this)}function v(e,t,r,i,n,a,f){t.writelen=i,t.writecb=f,t.writing=!0,t.sync=!0,r?e._writev(n,t.onwrite):e._write(n,a,t.onwrite),t.sync=!1}function m(e,t,r,i){r||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,i(),S(e,t)}function g(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var i=t.bufferedRequestCount,a=new Array(i),f=t.corkedRequestsFree;f.entry=r;for(var o=0,s=!0;r;)a[o]=r,r.isBuf||(s=!1),r=r.next,o+=1;a.allBuffers=s,