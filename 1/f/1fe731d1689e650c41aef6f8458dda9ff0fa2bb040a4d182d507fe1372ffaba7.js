(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5837],{66379:function(a,R,O){"use strict";O.d(R,{YF:function(){return useFloating}});var k=O(87862),N=O(2784),z=O(28316),j="undefined"!=typeof document?N.useLayoutEffect:N.useEffect;function deepEqual(a,R){let O,k,N;if(a===R)return!0;if(typeof a!=typeof R)return!1;if("function"==typeof a&&a.toString()===R.toString())return!0;if(a&&R&&"object"==typeof a){if(Array.isArray(a)){if((O=a.length)!=R.length)return!1;for(k=O;0!=k--;)if(!deepEqual(a[k],R[k]))return!1;return!0}if((O=(N=Object.keys(a)).length)!==Object.keys(R).length)return!1;for(k=O;0!=k--;)if(!({}).hasOwnProperty.call(R,N[k]))return!1;for(k=O;0!=k--;){let O=N[k];if(("_owner"!==O||!a.$$typeof)&&!deepEqual(a[O],R[O]))return!1}return!0}return a!=a&&R!=R}function getDPR(a){if("undefined"==typeof window)return 1;let R=a.ownerDocument.defaultView||window;return R.devicePixelRatio||1}function roundByDPR(a,R){let O=getDPR(a);return Math.round(R*O)/O}function useLatestRef(a){let R=N.useRef(a);return j(()=>{R.current=a}),R}function useFloating(a){void 0===a&&(a={});let{placement:R="bottom",strategy:O="absolute",middleware:V=[],platform:G,elements:{reference:W,floating:K}={},transform:q=!0,whileElementsMounted:J,open:Z}=a,[X,ee]=N.useState({x:0,y:0,strategy:O,placement:R,middlewareData:{},isPositioned:!1}),[et,en]=N.useState(V);deepEqual(et,V)||en(V);let[er,eo]=N.useState(null),[ei,el]=N.useState(null),ea=N.useCallback(a=>{a!=ed.current&&(ed.current=a,eo(a))},[eo]),eu=N.useCallback(a=>{a!==ef.current&&(ef.current=a,el(a))},[el]),es=W||er,ec=K||ei,ed=N.useRef(null),ef=N.useRef(null),ep=N.useRef(X),ev=useLatestRef(J),eh=useLatestRef(G),eg=N.useCallback(()=>{if(!ed.current||!ef.current)return;let a={placement:R,strategy:O,middleware:et};eh.current&&(a.platform=eh.current),(0,k.oo)(ed.current,ef.current,a).then(a=>{let R={...a,isPositioned:!0};em.current&&!deepEqual(ep.current,R)&&(ep.current=R,z.flushSync(()=>{ee(R)}))})},[et,R,O,eh]);j(()=>{!1===Z&&ep.current.isPositioned&&(ep.current.isPositioned=!1,ee(a=>({...a,isPositioned:!1})))},[Z]);let em=N.useRef(!1);j(()=>(em.current=!0,()=>{em.current=!1}),[]),j(()=>{if(es&&(ed.current=es),ec&&(ef.current=ec),es&&ec){if(ev.current)return ev.current(es,ec,eg);eg()}},[es,ec,eg,ev]);let eb=N.useMemo(()=>({reference:ed,floating:ef,setReference:ea,setFloating:eu}),[ea,eu]),ex=N.useMemo(()=>({reference:es,floating:ec}),[es,ec]),ey=N.useMemo(()=>{let a={position:O,left:0,top:0};if(!ex.floating)return a;let R=roundByDPR(ex.floating,X.x),k=roundByDPR(ex.floating,X.y);return q?{...a,transform:"translate("+R+"px, "+k+"px)",...getDPR(ex.floating)>=1.5&&{willChange:"transform"}}:{position:O,left:R,top:k}},[O,q,ex.floating,X.x,X.y]);return N.useMemo(()=>({...X,update:eg,refs:eb,elements:ex,floatingStyles:ey}),[X,eg,eb,ex,ey])}},95965:function(a,R,O){"use strict";var k=O(25001);O(16607),R.ZP=k.useLocalStorage},74479:function(a,R){"use strict";Object.defineProperty(R,"__esModule",{value:!0}),R.isBrowser=void 0,R.isBrowser=function(){return"undefined"!=typeof window&&void 0!==window.document}},16607:function(a,R,O){"use strict";Object.defineProperty(R,"__esModule",{value:!0}),R.deleteFromStorage=R.writeStorage=R.isTypeOfLocalStorageChanged=R.LOCAL_STORAGE_CHANGE_EVENT_NAME=void 0;var k=O(94677),N=O(74479);R.LOCAL_STORAGE_CHANGE_EVENT_NAME="onLocalStorageChange",N.isBrowser()&&"function"!=typeof O.g.window.CustomEvent&&(window.CustomEvent=function(a,R){void 0===R&&(R={bubbles:!1,cancelable:!1});var O,k,N=document.createEvent("CustomEvent");return N.initCustomEvent(a,null!==(O=null==R?void 0:R.bubbles)&&void 0!==O&&O,null!==(k=null==R?void 0:R.cancelable)&&void 0!==k&&k,null==R?void 0:R.detail),N}),R.isTypeOfLocalStorageChanged=function(a){return!!a&&a.type===R.LOCAL_STORAGE_CHANGE_EVENT_NAME},R.writeStorage=function(a,O){if(N.isBrowser())try{k.storage.setItem(a,"object"==typeof O?JSON.stringify(O):""+O),window.dispatchEvent(new CustomEvent(R.LOCAL_STORAGE_CHANGE_EVENT_NAME,{detail:{key:a,value:O}}))}catch(a){if(a instanceof TypeError&&a.message.includes("circular structure"))throw TypeError("The object that was given to the writeStorage function has circular references.\nFor more information, check here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value");throw a}},R.deleteFromStorage=function(a){N.isBrowser()&&(k.storage.removeItem(a),window.dispatchEvent(new CustomEvent(R.LOCAL_STORAGE_CHANGE_EVENT_NAME,{detail:{key:a,value:null}})))}},94677:function(a,R,O){"use strict";Object.defineProperty(R,"__esModule",{value:!0}),R.storage=R.MemoryStorageProxy=R.LocalStorageProxy=R.localStorageAvailable=void 0;var k=O(74479);function localStorageAvailable(){try{var a="@rehooks/local-storage:"+new Date().toISOString();return localStorage.setItem(a,a),localStorage.removeItem(a),!0}catch(a){return k.isBrowser()&&a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&localStorage&&0!==localStorage.length}}R.localStorageAvailable=localStorageAvailable;var N=function(){function LocalStorageProxy(){}return LocalStorageProxy.prototype.getItem=function(a){return localStorage.getItem(a)},LocalStorageProxy.prototype.setItem=function(a,R){localStorage.setItem(a,R)},LocalStorageProxy.prototype.removeItem=function(a){localStorage.removeItem(a)},LocalStorageProxy}();R.LocalStorageProxy=N;var z=function(){function MemoryStorageProxy(){this._memoryStorage=new Map}return MemoryStorageProxy.prototype.getItem=function(a){var R;return null!==(R=this._memoryStorage.get(a))&&void 0!==R?R:null},MemoryStorageProxy.prototype.setItem=function(a,R){this._memoryStorage.set(a,R)},MemoryStorageProxy.prototype.removeItem=function(a){this._memoryStorage.delete(a)},MemoryStorageProxy}();R.MemoryStorageProxy=z,R.storage=localStorageAvailable()?new N:new z},25001:function(a,R,O){"use strict";Object.defineProperty(R,"__esModule",{value:!0}),R.useLocalStorage=void 0;var k=O(16607),N=O(74479),z=O(94677),j=O(2784);function tryParse(a){try{return JSON.parse(a)}catch(R){return a}}R.useLocalStorage=function(a,R){void 0===R&&(R=null);var O=j.useState(null===z.storage.getItem(a)?R:tryParse(z.storage.getItem(a))),V=O[0],G=O[1],W=j.useCallback(function(R){k.isTypeOfLocalStorageChanged(R)?R.detail.key===a&&G(R.detail.value):R.key===a&&G(null===R.newValue?null:tryParse(R.newValue))},[G,a]);j.useEffect(function(){if(N.isBrowser()){var listener=function(a){W(a)};return window.addEventListener(k.LOCAL_STORAGE_CHANGE_EVENT_NAME,listener),window.addEventListener("storage",listener),null===z.storage.getItem(a)&&null!==R&&k.writeStorage(a,R),function(){window.removeEventListener(k.LOCAL_STORAGE_CHANGE_EVENT_NAME,listener),window.removeEventListener("storage",listener)}}},[a,R,W]);var K=j.useCallback(function(R){return k.writeStorage(a,R)},[a]),q=j.useCallback(function(){return k.deleteFromStorage(a)},[a]);return[null!=V?V:R,K,q]}},71659:function(a,R,O){"use strict";function isArray(a){return Array.isArray?Array.isArray(a):"[object Array]"===getTag(a)}O.d(R,{Z:function(){return Fuse}});let k=1/0;function isString(a){return"string"==typeof a}function isNumber(a){return"number"==typeof a}function isObject(a){return"object"==typeof a}function isDefined(a){return null!=a}function isBlank(a){return!a.trim().length}function getTag(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":Object.prototype.toString.call(a)}let LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY=a=>`Invalid value for key ${a}`,PATTERN_LENGTH_TOO_LARGE=a=>`Pattern length exceeds max of ${a}.`,MISSING_KEY_PROPERTY=a=>`Missing ${a} property in key`,INVALID_KEY_WEIGHT_VALUE=a=>`Property 'weight' in key '${a}' must be a positive integer`,N=Object.prototype.hasOwnProperty;let KeyStore=class KeyStore{constructor(a){this._keys=[],this._keyMap={};let R=0;a.forEach(a=>{let O=createKey(a);R+=O.weight,this._keys.push(O),this._keyMap[O.id]=O,R+=O.weight}),this._keys.forEach(a=>{a.weight/=R})}get(a){return this._keyMap[a]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function createKey(a){let R=null,O=null,k=null,z=1,j=null;if(isString(a)||isArray(a))k=a,R=createKeyPath(a),O=createKeyId(a);else{if(!N.call(a,"name"))throw Error(MISSING_KEY_PROPERTY("name"));let V=a.name;if(k=V,N.call(a,"weight")&&(z=a.weight)<=0)throw Error(INVALID_KEY_WEIGHT_VALUE(V));R=createKeyPath(V),O=createKeyId(V),j=a.getFn}return{path:R,id:O,weight:z,src:k,getFn:j}}function createKeyPath(a){return isArray(a)?a:a.split(".")}function createKeyId(a){return isArray(a)?a.join("."):a}var z={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(a,R)=>a.score===R.score?a.idx<R.idx?-1:1:a.score<R.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(a,R){let O=[],N=!1,deepGet=(a,R,z)=>{if(isDefined(a)){if(R[z]){var j,V;let G=R[z],W=a[G];if(isDefined(W)){if(z===R.length-1&&(isString(W)||isNumber(W)||!0===(j=W)||!1===j||isObject(V=j)&&null!==V&&"[object Boolean]"==getTag(j)))O.push(null==W?"":function(a){if("string"==typeof a)return a;let R=a+"";return"0"==R&&1/a==-k?"-0":R}(W));else if(isArray(W)){N=!0;for(let a=0,O=W.length;a<O;a+=1)deepGet(W[a],R,z+1)}else R.length&&deepGet(W,R,z+1)}}else O.push(a)}};return deepGet(a,isString(R)?R.split("."):R,0),N?O:O[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};let j=/[^ ]+/g;let FuseIndex=class FuseIndex{constructor({getFn:a=z.getFn,fieldNormWeight:R=z.fieldNormWeight}={}){this.norm=function(a=1,R=3){let O=new Map,k=Math.pow(10,R);return{get(R){let N=R.match(j).length;if(O.has(N))return O.get(N);let z=1/Math.pow(N,.5*a),V=parseFloat(Math.round(z*k)/k);return O.set(N,V),V},clear(){O.clear()}}}(R,3),this.getFn=a,this.isCreated=!1,this.setIndexRecords()}setSources(a=[]){this.docs=a}setIndexRecords(a=[]){this.records=a}setKeys(a=[]){this.keys=a,this._keysMap={},a.forEach((a,R)=>{this._keysMap[a.id]=R})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,isString(this.docs[0])?this.docs.forEach((a,R)=>{this._addString(a,R)}):this.docs.forEach((a,R)=>{this._addObject(a,R)}),this.norm.clear())}add(a){let R=this.size();isString(a)?this._addString(a,R):this._addObject(a,R)}removeAt(a){this.records.splice(a,1);for(let R=a,O=this.size();R<O;R+=1)this.records[R].i-=1}getValueForItemAtKeyId(a,R){return a[this._keysMap[R]]}size(){return this.records.length}_addString(a,R){if(!isDefined(a)||isBlank(a))return;let O={v:a,i:R,n:this.norm.get(a)};this.records.push(O)}_addObject(a,R){let O={i:R,$:{}};this.keys.forEach((R,k)=>{let N=R.getFn?R.getFn(a):this.getFn(a,R.path);if(isDefined(N)){if(isArray(N)){let a=[],R=[{nestedArrIndex:-1,value:N}];for(;R.length;){let{nestedArrIndex:O,value:k}=R.pop();if(isDefined(k)){if(isString(k)&&!isBlank(k)){let R={v:k,i:O,n:this.norm.get(k)};a.push(R)}else isArray(k)&&k.forEach((a,O)=>{R.push({nestedArrIndex:O,value:a})})}}O.$[k]=a}else if(isString(N)&&!isBlank(N)){let a={v:N,n:this.norm.get(N)};O.$[k]=a}}}),this.records.push(O)}toJSON(){return{keys:this.keys,records:this.records}}};function createIndex(a,R,{getFn:O=z.getFn,fieldNormWeight:k=z.fieldNormWeight}={}){let N=new FuseIndex({getFn:O,fieldNormWeight:k});return N.setKeys(a.map(createKey)),N.setSources(R),N.create(),N}function computeScore$1(a,{errors:R=0,currentLocation:O=0,expectedLocation:k=0,distance:N=z.distance,ignoreLocation:j=z.ignoreLocation}={}){let V=R/a.length;if(j)return V;let G=Math.abs(k-O);return N?V+G/N:G?1:V}let BitapSearch=class BitapSearch{constructor(a,{location:R=z.location,threshold:O=z.threshold,distance:k=z.distance,includeMatches:N=z.includeMatches,findAllMatches:j=z.findAllMatches,minMatchCharLength:V=z.minMatchCharLength,isCaseSensitive:G=z.isCaseSensitive,ignoreLocation:W=z.ignoreLocation}={}){if(this.options={location:R,threshold:O,distance:k,includeMatches:N,findAllMatches:j,minMatchCharLength:V,isCaseSensitive:G,ignoreLocation:W},this.pattern=G?a:a.toLowerCase(),this.chunks=[],!this.pattern.length)return;let addChunk=(a,R)=>{this.chunks.push({pattern:a,alphabet:function(a){let R={};for(let O=0,k=a.length;O<k;O+=1){let N=a.charAt(O);R[N]=(R[N]||0)|1<<k-O-1}return R}(a),startIndex:R})},K=this.pattern.length;if(K>32){let a=0,R=K%32,O=K-R;for(;a<O;)addChunk(this.pattern.substr(a,32),a),a+=32;if(R){let a=K-32;addChunk(this.pattern.substr(a),a)}}else addChunk(this.pattern,0)}searchIn(a){let{isCaseSensitive:R,includeMatches:O}=this.options;if(R||(a=a.toLowerCase()),this.pattern===a){let R={isMatch:!0,score:0};return O&&(R.indices=[[0,a.length-1]]),R}let{location:k,distance:N,threshold:j,findAllMatches:V,minMatchCharLength:G,ignoreLocation:W}=this.options,K=[],q=0,J=!1;this.chunks.forEach(({pattern:R,alphabet:Z,startIndex:X})=>{let{isMatch:ee,score:et,indices:en}=function(a,R,O,{location:k=z.location,distance:N=z.distance,threshold:j=z.threshold,findAllMatches:V=z.findAllMatches,minMatchCharLength:G=z.minMatchCharLength,includeMatches:W=z.includeMatches,ignoreLocation:K=z.ignoreLocation}={}){let q;if(R.length>32)throw Error(PATTERN_LENGTH_TOO_LARGE(32));let J=R.length,Z=a.length,X=Math.max(0,Math.min(k,Z)),ee=j,et=X,en=G>1||W,er=en?Array(Z):[];for(;(q=a.indexOf(R,et))>-1;)if(ee=Math.min(computeScore$1(R,{currentLocation:q,expectedLocation:X,distance:N,ignoreLocation:K}),ee),et=q+J,en){let a=0;for(;a<J;)er[q+a]=1,a+=1}et=-1;let eo=[],ei=1,el=J+Z,ea=1<<J-1;for(let k=0;k<J;k+=1){let z=0,j=el;for(;z<j;){let a=computeScore$1(R,{errors:k,currentLocation:X+j,expectedLocation:X,distance:N,ignoreLocation:K});a<=ee?z=j:el=j,j=Math.floor((el-z)/2+z)}el=j;let G=Math.max(1,X-j+1),W=V?Z:Math.min(X+j,Z)+J,q=Array(W+2);q[W+1]=(1<<k)-1;for(let z=W;z>=G;z-=1){let j=z-1,V=O[a.charAt(j)];if(en&&(er[j]=+!!V),q[z]=(q[z+1]<<1|1)&V,k&&(q[z]|=(eo[z+1]|eo[z])<<1|1|eo[z+1]),q[z]&ea&&(ei=computeScore$1(R,{errors:k,currentLocation:j,expectedLocation:X,distance:N,ignoreLocation:K}))<=ee){if(ee=ei,(et=j)<=X)break;G=Math.max(1,2*X-et)}}let eu=computeScore$1(R,{errors:k+1,currentLocation:X,expectedLocation:X,distance:N,ignoreLocation:K});if(eu>ee)break;eo=q}let eu={isMatch:et>=0,score:Math.max(.001,ei)};if(en){let a=function(a=[],R=z.minMatchCharLength){let O=[],k=-1,N=-1,j=0;for(let z=a.length;j<z;j+=1){let z=a[j];z&&-1===k?k=j:z||-1===k||((N=j-1)-k+1>=R&&O.push([k,N]),k=-1)}return a[j-1]&&j-k>=R&&O.push([k,j-1]),O}(er,G);a.length?W&&(eu.indices=a):eu.isMatch=!1}return eu}(a,R,Z,{location:k+X,distance:N,threshold:j,findAllMatches:V,minMatchCharLength:G,includeMatches:O,ignoreLocation:W});ee&&(J=!0),q+=et,ee&&en&&(K=[...K,...en])});let Z={isMatch:J,score:J?q/this.chunks.length:1};return J&&O&&(Z.indices=K),Z}};let BaseMatch=class BaseMatch{constructor(a){this.pattern=a}static isMultiMatch(a){return getMatch(a,this.multiRegex)}static isSingleMatch(a){return getMatch(a,this.singleRegex)}search(){}};function getMatch(a,R){let O=a.match(R);return O?O[1]:null}let FuzzyMatch=class FuzzyMatch extends BaseMatch{constructor(a,{location:R=z.location,threshold:O=z.threshold,distance:k=z.distance,includeMatches:N=z.includeMatches,findAllMatches:j=z.findAllMatches,minMatchCharLength:V=z.minMatchCharLength,isCaseSensitive:G=z.isCaseSensitive,ignoreLocation:W=z.ignoreLocation}={}){super(a),this._bitapSearch=new BitapSearch(a,{location:R,threshold:O,distance:k,includeMatches:N,findAllMatches:j,minMatchCharLength:V,isCaseSensitive:G,ignoreLocation:W})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(a){return this._bitapSearch.searchIn(a)}};let IncludeMatch=class IncludeMatch extends BaseMatch{constructor(a){super(a)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(a){let R,O=0,k=[],N=this.pattern.length;for(;(R=a.indexOf(this.pattern,O))>-1;)O=R+N,k.push([R,O-1]);let z=!!k.length;return{isMatch:z,score:z?0:1,indices:k}}};let V=[class extends BaseMatch{constructor(a){super(a)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(a){let R=a===this.pattern;return{isMatch:R,score:R?0:1,indices:[0,this.pattern.length-1]}}},IncludeMatch,class extends BaseMatch{constructor(a){super(a)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(a){let R=a.startsWith(this.pattern);return{isMatch:R,score:R?0:1,indices:[0,this.pattern.length-1]}}},class extends BaseMatch{constructor(a){super(a)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(a){let R=!a.startsWith(this.pattern);return{isMatch:R,score:R?0:1,indices:[0,a.length-1]}}},class extends BaseMatch{constructor(a){super(a)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(a){let R=!a.endsWith(this.pattern);return{isMatch:R,score:R?0:1,indices:[0,a.length-1]}}},class extends BaseMatch{constructor(a){super(a)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(a){let R=a.endsWith(this.pattern);return{isMatch:R,score:R?0:1,indices:[a.length-this.pattern.length,a.length-1]}}},class extends BaseMatch{constructor(a){super(a)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(a){let R=a.indexOf(this.pattern),O=-1===R;return{isMatch:O,score:O?0:1,indices:[0,a.length-1]}}},FuzzyMatch],G=V.length,W=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,K=new Set([FuzzyMatch.type,IncludeMatch.type]),q=[];function createSearcher(a,R){for(let O=0,k=q.length;O<k;O+=1){let k=q[O];if(k.condition(a,R))return new k(a,R)}return new BitapSearch(a,R)}let J={AND:"$and",OR:"$or"},Z={PATH:"$path",PATTERN:"$val"},isExpression=a=>!!(a[J.AND]||a[J.OR]),isPath=a=>!!a[Z.PATH],isLeaf=a=>!isArray(a)&&isObject(a)&&!isExpression(a),convertToExplicit=a=>({[J.AND]:Object.keys(a).map(R=>({[R]:a[R]}))});function parse(a,R,{auto:O=!0}={}){let next=a=>{let k=Object.keys(a),N=isPath(a);if(!N&&k.length>1&&!isExpression(a))return next(convertToExplicit(a));if(isLeaf(a)){let z=N?a[Z.PATH]:k[0],j=N?a[Z.PATTERN]:a[z];if(!isString(j))throw Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(z));let V={keyId:createKeyId(z),pattern:j};return O&&(V.searcher=createSearcher(j,R)),V}let z={children:[],operator:k[0]};return k.forEach(R=>{let O=a[R];isArray(O)&&O.forEach(a=>{z.children.push(next(a))})}),z};return isExpression(a)||(a=convertToExplicit(a)),next(a)}function transformMatches(a,R){let O=a.matches;R.matches=[],isDefined(O)&&O.forEach(a=>{if(!isDefined(a.indices)||!a.indices.length)return;let{indices:O,value:k}=a,N={indices:O,value:k};a.key&&(N.key=a.key.src),a.idx>-1&&(N.refIndex=a.idx),R.matches.push(N)})}function transformScore(a,R){R.score=a.score}let Fuse=class Fuse{constructor(a,R={},O){this.options={...z,...R},this.options.useExtendedSearch,this._keyStore=new KeyStore(this.options.keys),this.setCollection(a,O)}setCollection(a,R){if(this._docs=a,R&&!(R instanceof FuseIndex))throw Error("Incorrect 'index' type");this._myIndex=R||createIndex(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(a){isDefined(a)&&(this._docs.push(a),this._myIndex.add(a))}remove(a=()=>!1){let R=[];for(let O=0,k=this._docs.length;O<k;O+=1){let N=this._docs[O];a(N,O)&&(this.removeAt(O),O-=1,k-=1,R.push(N))}return R}removeAt(a){this._docs.splice(a,1),this._myIndex.removeAt(a)}getIndex(){return this._myIndex}search(a,{limit:R=-1}={}){let{includeMatches:O,includeScore:k,shouldSort:N,sortFn:j,ignoreFieldNorm:V}=this.options,G=isString(a)?isString(this._docs[0])?this._searchStringList(a):this._searchObjectList(a):this._searchLogical(a);return!function(a,{ignoreFieldNorm:R=z.ignoreFieldNorm}){a.forEach(a=>{let O=1;a.matches.forEach(({key:a,norm:k,score:N})=>{let z=a?a.weight:null;O*=Math.pow(0===N&&z?Number.EPSILON:N,(z||1)*(R?1:k))}),a.score=O})}(G,{ignoreFieldNorm:V}),N&&G.sort(j),isNumber(R)&&R>-1&&(G=G.slice(0,R)),function(a,R,{includeMatches:O=z.includeMatches,includeScore:k=z.includeScore}={}){let N=[];return O&&N.push(transformMatches),k&&N.push(transformScore),a.map(a=>{let{idx:O}=a,k={item:R[O],refIndex:O};return N.length&&N.forEach(R=>{R(a,k)}),k})}(G,this._docs,{includeMatches:O,includeScore:k})}_searchStringList(a){let R=createSearcher(a,this.options),{records:O}=this._myIndex,k=[];return O.forEach(({v:a,i:O,n:N})=>{if(!isDefined(a))return;let{isMatch:z,score:j,indices:V}=R.searchIn(a);z&&k.push({item:a,idx:O,matches:[{score:j,value:a,norm:N,indices:V}]})}),k}_searchLogical(a){let R=parse(a,this.options),evaluate=(a,R,O)=>{if(!a.children){let{keyId:k,searcher:N}=a,z=this._findMatches({key:this._keyStore.get(k),value:this._myIndex.getValueForItemAtKeyId(R,k),searcher:N});return z&&z.length?[{idx:O,item:R,matches:z}]:[]}let k=[];for(let N=0,z=a.children.length;N<z;N+=1){let z=a.children[N],j=evaluate(z,R,O);if(j.length)k.push(...j);else if(a.operator===J.AND)return[]}return k},O=this._myIndex.records,k={},N=[];return O.forEach(({$:a,i:O})=>{if(isDefined(a)){let z=evaluate(R,a,O);z.length&&(k[O]||(k[O]={idx:O,item:a,matches:[]},N.push(k[O])),z.forEach(({matches:a})=>{k[O].matches.push(...a)}))}}),N}_searchObjectList(a){let R=createSearcher(a,this.options),{keys:O,records:k}=this._myIndex,N=[];return k.forEach(({$:a,i:k})=>{if(!isDefined(a))return;let z=[];O.forEach((O,k)=>{z.push(...this._findMatches({key:O,value:a[k],searcher:R}))}),z.length&&N.push({idx:k,item:a,matches:z})}),N}_findMatches({key:a,value:R,searcher:O}){if(!isDefined(R))return[];let k=[];if(isArray(R))R.forEach(({v:R,i:N,n:z})=>{if(!isDefined(R))return;let{isMatch:j,score:V,indices:G}=O.searchIn(R);j&&k.push({score:V,key:a,value:R,idx:N,norm:z,indices:G})});else{let{v:N,n:z}=R,{isMatch:j,score:V,indices:G}=O.searchIn(N);j&&k.push({score:V,key:a,value:N,norm:z,indices:G})}return k}};Fuse.version="6.6.2",Fuse.createIndex=createIndex,Fuse.parseIndex=function(a,{getFn:R=z.getFn,fieldNormWeight:O=z.fieldNormWeight}={}){let{keys:k,records:N}=a,j=new FuseIndex({getFn:R,fieldNormWeight:O});return j.setKeys(k),j.setIndexRecords(N),j},Fuse.config=z,Fuse.parseQuery=parse,function(...a){q.push(...a)}(class{constructor(a,{isCaseSensitive:R=z.isCaseSensitive,includeMatches:O=z.includeMatches,minMatchCharLength:k=z.minMatchCharLength,ignoreLocation:N=z.ignoreLocation,findAllMatches:j=z.findAllMatches,location:K=z.location,threshold:q=z.threshold,distance:J=z.distance}={}){this.query=null,this.options={isCaseSensitive:R,includeMatches:O,minMatchCharLength:k,findAllMatches:j,ignoreLocation:N,location:K,threshold:q,distance:J},this.pattern=R?a:a.toLowerCase(),this.query=function(a,R={}){return a.split("|").map(a=>{let O=a.trim().split(W).filter(a=>a&&!!a.trim()),k=[];for(let a=0,N=O.length;a<N;a+=1){let N=O[a],z=!1,j=-1;for(;!z&&++j<G;){let a=V[j],O=a.isMultiMatch(N);O&&(k.push(new a(O,R)),z=!0)}if(!z)for(j=-1;++j<G;){let a=V[j],O=a.isSingleMatch(N);if(O){k.push(new a(O,R));break}}}return k})}(this.pattern,this.options)}static condition(a,R){return R.useExtendedSearch}searchIn(a){let R=this.query;if(!R)return{isMatch:!1,score:1};let{includeMatches:O,isCaseSensitive:k}=this.options;a=k?a:a.toLowerCase();let N=0,z=[],j=0;for(let k=0,V=R.length;k<V;k+=1){let V=R[k];z.length=0,N=0;for(let R=0,k=V.length;R<k;R+=1){let k=V[R],{isMatch:G,indices:W,score:q}=k.search(a);if(G){if(N+=1,j+=q,O){let a=k.constructor.type;K.has(a)?z=[...z,...W]:z.push(W)}}else{j=0,N=0,z.length=0;break}}if(N){let a={isMatch:!0,score:j/N};return O&&(a.indices=z),a}}return{isMatch:!1,score:1}}})},7006:function(a,R,O){"use strict";Object.defineProperty(R,"__esModule",{value:!0}),Object.defineProperty(R,"Image",{enumerable:!0,get:function(){return ee}});let k=O(43219),N=O(16794),z=N._(O(2784)),j=k._(O(28316)),V=k._(O(35487)),G=O(3476),W=O(66845),K=O(26020);O(69737);let q=O(89994),J=k._(O(33459)),Z={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(a,R,O,k,N,z){let j=null==a?void 0:a.src;if(!a||a["data-loaded-src"]===j)return;a["data-loaded-src"]=j;let V="decode"in a?a.decode():Promise.resolve();V.catch(()=>{}).then(()=>{if(a.parentElement&&a.isConnected){if("empty"!==R&&N(!0),null==O?void 0:O.current){let R=new Event("load");Object.defineProperty(R,"target",{writable:!1,value:a});let k=!1,N=!1;O.current({...R,nativeEvent:R,currentTarget:a,target:a,isDefaultPrevented:()=>k,isPropagationStopped:()=>N,persist:()=>{},preventDefault:()=>{k=!0,R.preventDefault()},stopPropagation:()=>{N=!0,R.stopPropagation()}})}(null==k?void 0:k.current)&&k.current(a)}})}function getDynamicProps(a){let[R,O]=z.version.split("."),k=parseInt(R,10),N=parseInt(O,10);return k>18||18===k&&N>=3?{fetchPriority:a}:{fetchpriority:a}}let X=(0,z.forwardRef)((a,R)=>{let{src:O,srcSet:k,sizes:N,height:j,width:V,decoding:G,className:W,style:K,fetchPriority:q,placeholder:J,loading:Z,unoptimized:X,fill:ee,onLoadRef:et,onLoadingCompleteRef:en,setBlurComplete:er,setShowAltText:eo,onLoad:ei,onError:el,...ea}=a;return z.default.createElement("img",{...ea,...getDynamicProps(q),loading:Z,width:V,height:j,decoding:G,"data-nimg":ee?"fill":"1",className:W,style:K,sizes:N,srcSet:k,src:O,ref:(0,z.useCallback)(a=>{R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a)),a&&(el&&(a.src=a.src),a.complete&&handleLoading(a,J,et,en,er,X))},[O,J,et,en,er,el,X,R]),onLoad:a=>{let R=a.currentTarget;handleLoading(R,J,et,en,er,X)},onError:a=>{eo(!0),"empty"!==J&&er(!0),el&&el(a)}})});function ImagePreload(a){let{isAppRouter:R,imgAttributes:O}=a,k={as:"image",imageSrcSet:O.srcSet,imageSizes:O.sizes,crossOrigin:O.crossOrigin,referrerPolicy:O.referrerPolicy,...getDynamicProps(O.fetchPriority)};return R&&j.default.preload?(j.default.preload(O.src,k),null):z.default.createElement(V.default,null,z.default.createElement("link",{key:"__nimg-"+O.src+O.srcSet+O.sizes,rel:"preload",href:O.srcSet?void 0:O.src,...k}))}let ee=(0,z.forwardRef)((a,R)=>{let O=(0,z.useContext)(q.RouterContext),k=(0,z.useContext)(K.ImageConfigContext),N=(0,z.useMemo)(()=>{let a=Z||k||W.imageConfigDefault,R=[...a.deviceSizes,...a.imageSizes].sort((a,R)=>a-R),O=a.deviceSizes.sort((a,R)=>a-R);return{...a,allSizes:R,deviceSizes:O}},[k]),{onLoad:j,onLoadingComplete:V}=a,ee=(0,z.useRef)(j);(0,z.useEffect)(()=>{ee.current=j},[j]);let et=(0,z.useRef)(V);(0,z.useEffect)(()=>{et.current=V},[V]);let[en,er]=(0,z.useState)(!1),[eo,ei]=(0,z.useState)(!1),{props:el,meta:ea}=(0,G.getImgProps)(a,{defaultLoader:J.default,imgConf:N,blurComplete:en,showAltText:eo});return z.default.createElement(z.default.Fragment,null,z.default.createElement(X,{...el,unoptimized:ea.unoptimized,placeholder:ea.placeholder,fill:ea.fill,onLoadRef:ee,onLoadingCompleteRef:et,setBlurComplete:er,setShowAltText:ei,ref:R}),ea.priority?z.default.createElement(ImagePreload,{isAppRouter:!O,imgAttributes:el}):null)});("function"==typeof R.default||"object"==typeof R.default&&null!==R.default)&&void 0===R.default.__esModule&&(Object.defineProperty(R.default,"__esModule",{value:!0}),Object.assign(R.default,R),a.exports=R.default)},3476:function(a,R,O){"use strict";Object.defineProperty(R,"__esModule",{value:!0}),Object.defineProperty(R,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),O(69737);let k=O(90042),N=O(66845);function isStaticRequire(a){return void 0!==a.default}function getInt(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function getImgProps(a,R){var O;let z,j,V,{src:G,sizes:W,unoptimized:K=!1,priority:q=!1,loading:J,className:Z,quality:X,width:ee,height:et,fill:en=!1,style:er,onLoad:eo,onLoadingComplete:ei,placeholder:el="empty",blurDataURL:ea,fetchPriority:eu,layout:es,objectFit:ec,objectPosition:ed,lazyBoundary:ef,lazyRoot:ep,...ev}=a,{imgConf:eh,showAltText:eg,blurComplete:em,defaultLoader:eb}=R,ex=eh||N.imageConfigDefault;if("allSizes"in ex)z=ex;else{let a=[...ex.deviceSizes,...ex.imageSizes].sort((a,R)=>a-R),R=ex.deviceSizes.sort((a,R)=>a-R);z={...ex,allSizes:a,deviceSizes:R}}let ey=ev.loader||eb;delete ev.loader,delete ev.srcSet;let eE="__next_img_default"in ey;if(eE){if("custom"===z.loader)throw Error('Image with src "'+G+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let a=ey;ey=R=>{let{config:O,...k}=R;return a(k)}}if(es){"fill"===es&&(en=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[es];a&&(er={...er,...a});let R={responsive:"100vw",fill:"100vw"}[es];R&&!W&&(W=R)}let eS="",eR=getInt(ee),eO=getInt(et);if("object"==typeof(O=G)&&(isStaticRequire(O)||void 0!==O.src)){let a=isStaticRequire(G)?G.default:G;if(!a.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(a));if(!a.height||!a.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(a));if(j=a.blurWidth,V=a.blurHeight,ea=ea||a.blurDataURL,eS=a.src,!en){if(eR||eO){if(eR&&!eO){let R=eR/a.width;eO=Math.round(a.height*R)}else if(!eR&&eO){let R=eO/a.height;eR=Math.round(a.width*R)}}else eR=a.width,eO=a.height}}let ew=!q&&("lazy"===J||void 0===J);(!(G="string"==typeof G?G:eS)||G.startsWith("data:")||G.startsWith("blob:"))&&(K=!0,ew=!1),z.unoptimized&&(K=!0),eE&&G.endsWith(".svg")&&!z.dangerouslyAllowSVG&&(K=!0),q&&(eu="high");let eP=getInt(X),eT=Object.assign(en?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:ec,objectPosition:ed}:{},eg?{}:{color:"transparent"},er),eI=em||"empty"===el?null:"blur"===el?'url("data:image/svg+xml;charset=utf-8,'+(0,k.getImageBlurSvg)({widthInt:eR,heightInt:eO,blurWidth:j,blurHeight:V,blurDataURL:ea||"",objectFit:eT.objectFit})+'")':'url("'+el+'")',eC=eI?{backgroundSize:eT.objectFit||"cover",backgroundPosition:eT.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:eI}:{},eM=function(a){let{config:R,src:O,unoptimized:k,width:N,quality:z,sizes:j,loader:V}=a;if(k)return{src:O,srcSet:void 0,sizes:void 0};let{widths:G,kind:W}=function(a,R,O){let{deviceSizes:k,allSizes:N}=a;if(O){let a=/(^|\s)(1?\d?\d)vw/g,R=[];for(let k;k=a.exec(O);k)R.push(parseInt(k[2]));if(R.length){let a=.01*Math.min(...R);return{widths:N.filter(R=>R>=k[0]*a),kind:"w"}}return{widths:N,kind:"w"}}if("number"!=typeof R)return{widths:k,kind:"w"};let z=[...new Set([R,2*R].map(a=>N.find(R=>R>=a)||N[N.length-1]))];return{widths:z,kind:"x"}}(R,N,j),K=G.length-1;return{sizes:j||"w"!==W?j:"100vw",srcSet:G.map((a,k)=>V({config:R,src:O,quality:z,width:a})+" "+("w"===W?a:k+1)+W).join(", "),src:V({config:R,src:O,quality:z,width:G[K]})}}({config:z,src:G,unoptimized:K,width:eR,quality:eP,sizes:W,loader:ey}),eA={...ev,loading:ew?"lazy":J,fetchPriority:eu,width:eR,height:eO,decoding:"async",className:Z,style:{...eT,...eC},sizes:eM.sizes,srcSet:eM.srcSet,src:eM.src},eL={unoptimized:K,priority:q,placeholder:el,fill:en};return{props:eA,meta:eL}}},90042:function(a,R){"use strict";function getImageBlurSvg(a){let{widthInt:R,heightInt:O,blurWidth:k,blurHeight:N,blurDataURL:z,objectFit:j}=a,V=k?40*k:R,G=N?40*N:O,W=V&&G?"viewBox='0 0 "+V+" "+G+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+W+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(W?"none":"contain"===j?"xMidYMid":"cover"===j?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+z+"'/%3E%3C/svg%3E"}Object.defineProperty(R,"__esModule",{value:!0}),Object.defineProperty(R,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},16099:function(a,R,O){"use strict";Object.defineProperty(R,"__esModule",{value:!0}),function(a,R){for(var O in R)Object.defineProperty(a,O,{enumerable:!0,get:R[O]})}(R,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return G}});let k=O(43219),N=O(3476),z=O(69737),j=O(7006),V=k._(O(33459)),unstable_getImgProps=a=>{(0,z.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:R}=(0,N.getImgProps)(a,{defaultLoader:V.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,O]of Object.entries(R))void 0===O&&delete R[a];return{props:R}},G=j.Image},33459:function(a,R){"use strict";function defaultLoader(a){let{config:R,src:O,width:k,quality:N}=a;return R.path+"?url="+encodeURIComponent(O)+"&w="+k+"&q="+(N||75)}Object.defineProperty(R,"__esModule",{value:!0}),Object.defineProperty(R,"default",{enumerable:!0,get:function(){return O}}),defaultLoader.__next_img_default=!0;let O=defaultLoader},96577:function(a,R,O){a.exports=O(16099)},76854:function(a){var R;R=function(){var a=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),R=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","∑":"soma","\xa3":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}');function replace(O,k){if("string"!=typeof O)throw Error("slugify: string argument expected");var N=R[(k="string"==typeof k?{replacement:k}:k||{}).locale]||{},z=void 0===k.replacement?"-":k.replacement,j=void 0===k.trim||k.trim,V=O.normalize().split("").reduce(function(R,O){var j=N[O]||a[O]||O;return j===z&&(j=" "),R+j.replace(k.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return k.strict&&(V=V.replace(/[^A-Za-z0-9\s]/g,"")),j&&(V=V.trim()),V=V.replace(/\s+/g,z),k.lower&&(V=V.toLowerCase()),V}return replace.extend=function(R){Object.assign(a,R)},replace},a.exports=R(),a.exports.default=R()},87862:function(a,R,O){"use strict";O.d(R,{Me:function(){return autoUpdate},oo:function(){return computePosition}});var k=O(4029),N=O(84061),z=O(47372);function getCssDimensions(a){let R=(0,z.Dx)(a),O=parseFloat(R.width)||0,N=parseFloat(R.height)||0,j=(0,z.Re)(a),V=j?a.offsetWidth:O,G=j?a.offsetHeight:N,W=(0,k.NM)(O)!==V||(0,k.NM)(N)!==G;return W&&(O=V,N=G),{width:O,height:N,$:W}}function unwrapElement(a){return(0,z.kK)(a)?a:a.contextElement}function getScale(a){let R=unwrapElement(a);if(!(0,z.Re)(R))return(0,k.ze)(1);let O=R.getBoundingClientRect(),{width:N,height:j,$:V}=getCssDimensions(R),G=(V?(0,k.NM)(O.width):O.width)/N,W=(V?(0,k.NM)(O.height):O.height)/j;return G&&Number.isFinite(G)||(G=1),W&&Number.isFinite(W)||(W=1),{x:G,y:W}}let j=(0,k.ze)(0);function getVisualOffsets(a){let R=(0,z.Jj)(a);return(0,z.Pf)()&&R.visualViewport?{x:R.visualViewport.offsetLeft,y:R.visualViewport.offsetTop}:j}function getBoundingClientRect(a,R,O,N){var j;void 0===R&&(R=!1),void 0===O&&(O=!1);let V=a.getBoundingClientRect(),G=unwrapElement(a),W=(0,k.ze)(1);R&&(N?(0,z.kK)(N)&&(W=getScale(N)):W=getScale(a));let K=(void 0===(j=O)&&(j=!1),N&&(!j||N===(0,z.Jj)(G))&&j)?getVisualOffsets(G):(0,k.ze)(0),q=(V.left+K.x)/W.x,J=(V.top+K.y)/W.y,Z=V.width/W.x,X=V.height/W.y;if(G){let a=(0,z.Jj)(G),R=N&&(0,z.kK)(N)?(0,z.Jj)(N):N,O=a.frameElement;for(;O&&N&&R!==a;){let a=getScale(O),R=O.getBoundingClientRect(),k=(0,z.Dx)(O),N=R.left+(O.clientLeft+parseFloat(k.paddingLeft))*a.x,j=R.top+(O.clientTop+parseFloat(k.paddingTop))*a.y;q*=a.x,J*=a.y,Z*=a.x,X*=a.y,q+=N,J+=j,O=(0,z.Jj)(O).frameElement}}return(0,k.JB)({width:Z,height:X,x:q,y:J})}function getWindowScrollBarX(a){return getBoundingClientRect((0,z.tF)(a)).left+(0,z.Lw)(a).scrollLeft}function getClientRectFromClippingAncestor(a,R,O){let N;if("viewport"===R)N=function(a,R){let O=(0,z.Jj)(a),k=(0,z.tF)(a),N=O.visualViewport,j=k.clientWidth,V=k.clientHeight,G=0,W=0;if(N){j=N.width,V=N.height;let a=(0,z.Pf)();(!a||a&&"fixed"===R)&&(G=N.offsetLeft,W=N.offsetTop)}return{width:j,height:V,x:G,y:W}}(a,O);else if("document"===R)N=function(a){let R=(0,z.tF)(a),O=(0,z.Lw)(a),N=a.ownerDocument.body,j=(0,k.Fp)(R.scrollWidth,R.clientWidth,N.scrollWidth,N.clientWidth),V=(0,k.Fp)(R.scrollHeight,R.clientHeight,N.scrollHeight,N.clientHeight),G=-O.scrollLeft+getWindowScrollBarX(a),W=-O.scrollTop;return"rtl"===(0,z.Dx)(N).direction&&(G+=(0,k.Fp)(R.clientWidth,N.clientWidth)-j),{width:j,height:V,x:G,y:W}}((0,z.tF)(a));else if((0,z.kK)(R))N=function(a,R){let O=getBoundingClientRect(a,!0,"fixed"===R),N=O.top+a.clientTop,j=O.left+a.clientLeft,V=(0,z.Re)(a)?getScale(a):(0,k.ze)(1),G=a.clientWidth*V.x,W=a.clientHeight*V.y,K=j*V.x,q=N*V.y;return{width:G,height:W,x:K,y:q}}(R,O);else{let O=getVisualOffsets(a);N={...R,x:R.x-O.x,y:R.y-O.y}}return(0,k.JB)(N)}function getTrueOffsetParent(a,R){return(0,z.Re)(a)&&"fixed"!==(0,z.Dx)(a).position?R?R(a):a.offsetParent:null}function getOffsetParent(a,R){let O=(0,z.Jj)(a);if(!(0,z.Re)(a))return O;let k=getTrueOffsetParent(a,R);for(;k&&(0,z.Ze)(k)&&"static"===(0,z.Dx)(k).position;)k=getTrueOffsetParent(k,R);return k&&("html"===(0,z.wk)(k)||"body"===(0,z.wk)(k)&&"static"===(0,z.Dx)(k).position&&!(0,z.hT)(k))?O:k||(0,z.gQ)(a)||O}let getElementRects=async function(a){let{reference:R,floating:O,strategy:N}=a,j=this.getOffsetParent||getOffsetParent,V=this.getDimensions;return{reference:function(a,R,O){let N=(0,z.Re)(R),j=(0,z.tF)(R),V="fixed"===O,G=getBoundingClientRect(a,!0,V,R),W={scrollLeft:0,scrollTop:0},K=(0,k.ze)(0);if(N||!N&&!V){if(("body"!==(0,z.wk)(R)||(0,z.ao)(j))&&(W=(0,z.Lw)(R)),N){let a=getBoundingClientRect(R,!0,V,R);K.x=a.x+R.clientLeft,K.y=a.y+R.clientTop}else j&&(K.x=getWindowScrollBarX(j))}return{x:G.left+W.scrollLeft-K.x,y:G.top+W.scrollTop-K.y,width:G.width,height:G.height}}(R,await j(O),N),floating:{x:0,y:0,...await V(O)}}},V={convertOffsetParentRelativeRectToViewportRelativeRect:function(a){let{rect:R,offsetParent:O,strategy:N}=a,j=(0,z.Re)(O),V=(0,z.tF)(O);if(O===V)return R;let G={scrollLeft:0,scrollTop:0},W=(0,k.ze)(1),K=(0,k.ze)(0);if((j||!j&&"fixed"!==N)&&(("body"!==(0,z.wk)(O)||(0,z.ao)(V))&&(G=(0,z.Lw)(O)),(0,z.Re)(O))){let a=getBoundingClientRect(O);W=getScale(O),K.x=a.x+O.clientLeft,K.y=a.y+O.clientTop}return{width:R.width*W.x,height:R.height*W.y,x:R.x*W.x-G.scrollLeft*W.x+K.x,y:R.y*W.y-G.scrollTop*W.y+K.y}},getDocumentElement:z.tF,getClippingRect:function(a){let{element:R,boundary:O,rootBoundary:N,strategy:j}=a,V="clippingAncestors"===O?function(a,R){let O=R.get(a);if(O)return O;let k=(0,z.Kx)(a,[],!1).filter(a=>(0,z.kK)(a)&&"body"!==(0,z.wk)(a)),N=null,j="fixed"===(0,z.Dx)(a).position,V=j?(0,z.Ow)(a):a;for(;(0,z.kK)(V)&&!(0,z.Py)(V);){let R=(0,z.Dx)(V),O=(0,z.hT)(V);O||"fixed"!==R.position||(N=null);let G=j?!O&&!N:!O&&"static"===R.position&&!!N&&["absolute","fixed"].includes(N.position)||(0,z.ao)(V)&&!O&&function hasFixedPositionAncestor(a,R){let O=(0,z.Ow)(a);return!(O===R||!(0,z.kK)(O)||(0,z.Py)(O))&&("fixed"===(0,z.Dx)(O).position||hasFixedPositionAncestor(O,R))}(a,V);G?k=k.filter(a=>a!==V):N=R,V=(0,z.Ow)(V)}return R.set(a,k),k}(R,this._c):[].concat(O),G=[...V,N],W=G[0],K=G.reduce((a,O)=>{let N=getClientRectFromClippingAncestor(R,O,j);return a.top=(0,k.Fp)(N.top,a.top),a.right=(0,k.VV)(N.right,a.right),a.bottom=(0,k.VV)(N.bottom,a.bottom),a.left=(0,k.Fp)(N.left,a.left),a},getClientRectFromClippingAncestor(R,W,j));return{width:K.right-K.left,height:K.bottom-K.top,x:K.left,y:K.top}},getOffsetParent,getElementRects,getClientRects:function(a){return Array.from(a.getClientRects())},getDimensions:function(a){return getCssDimensions(a)},getScale,isElement:z.kK,isRTL:function(a){return"rtl"===(0,z.Dx)(a).direction}};function autoUpdate(a,R,O,N){let j;void 0===N&&(N={});let{ancestorScroll:V=!0,ancestorResize:G=!0,elementResize:W="function"==typeof ResizeObserver,layoutShift:K="function"==typeof IntersectionObserver,animationFrame:q=!1}=N,J=unwrapElement(a),Z=V||G?[...J?(0,z.Kx)(J):[],...(0,z.Kx)(R)]:[];Z.forEach(a=>{V&&a.addEventListener("scroll",O,{passive:!0}),G&&a.addEventListener("resize",O)});let X=J&&K?function(a,R){let O,N=null,j=(0,z.tF)(a);function cleanup(){clearTimeout(O),N&&N.disconnect(),N=null}return!function refresh(z,V){void 0===z&&(z=!1),void 0===V&&(V=1),cleanup();let{left:G,top:W,width:K,height:q}=a.getBoundingClientRect();if(z||R(),!K||!q)return;let J=(0,k.GW)(W),Z=(0,k.GW)(j.clientWidth-(G+K)),X=(0,k.GW)(j.clientHeight-(W+q)),ee=(0,k.GW)(G),et={rootMargin:-J+"px "+-Z+"px "+-X+"px "+-ee+"px",threshold:(0,k.Fp)(0,(0,k.VV)(1,V))||1},en=!0;function handleObserve(a){let R=a[0].intersectionRatio;if(R!==V){if(!en)return refresh();R?refresh(!1,R):O=setTimeout(()=>{refresh(!1,1e-7)},100)}en=!1}try{N=new IntersectionObserver(handleObserve,{...et,root:j.ownerDocument})}catch(a){N=new IntersectionObserver(handleObserve,et)}N.observe(a)}(!0),cleanup}(J,O):null,ee=-1,et=null;W&&(et=new ResizeObserver(a=>{let[k]=a;k&&k.target===J&&et&&(et.unobserve(R),cancelAnimationFrame(ee),ee=requestAnimationFrame(()=>{et&&et.observe(R)})),O()}),J&&!q&&et.observe(J),et.observe(R));let en=q?getBoundingClientRect(a):null;return q&&function frameLoop(){let R=getBoundingClientRect(a);en&&(R.x!==en.x||R.y!==en.y||R.width!==en.width||R.height!==en.height)&&O(),en=R,j=requestAnimationFrame(frameLoop)}(),O(),()=>{Z.forEach(a=>{V&&a.removeEventListener("scroll",O),G&&a.removeEventListener("resize",O)}),X&&X(),et&&et.disconnect(),et=null,q&&cancelAnimationFrame(j)}}let computePosition=(a,R,O)=>{let k=new Map,z={platform:V,...O},j={...z.platform,_c:k};return(0,N.oo)(a,R,{...z,platform:j})}},68377:function(a,R,O){"use strict";O.d(R,{h:function(){return eI}});var k,N,z,j,V=O(2784),G=O(70778),W=O(58314),K=O(55559),q=O(80586),J=O(88064),Z=O(61742),X=O(32994),ee=O(37352),et=O(33401),en=O(68685),er=O(13199),eo=O(6173),ei=O(90544),el=O(15426),ea=O(3703),eu=O(60567),es=O(52929),ec=O(36799),ed=O(47215),ef=O(99108),ep=O(84407),ev=O(63575),eh=O(82121),eg=O(25371),em=((k=em||{})[k.Open=0]="Open",k[k.Closed=1]="Closed",k),eb=((N=eb||{})[N.Single=0]="Single",N[N.Multi=1]="Multi",N),ex=((z=ex||{})[z.Pointer=0]="Pointer",z[z.Other=1]="Other",z),ey=((j=ey||{})[j.OpenCombobox=0]="OpenCombobox",j[j.CloseCombobox=1]="CloseCombobox",j[j.GoToOption=2]="GoToOption",j[j.RegisterOption=3]="RegisterOption",j[j.UnregisterOption=4]="UnregisterOption",j[j.RegisterLabel=5]="RegisterLabel",j);function re(a,R=a=>a){let O=null!==a.activeOptionIndex?a.options[a.activeOptionIndex]:null,k=(0,es.z2)(R(a.options.slice()),a=>a.dataRef.current.domRef.current),N=O?k.indexOf(O):null;return -1===N&&(N=null),{options:k,activeOptionIndex:N}}let eE={1(a){var R;return null!=(R=a.dataRef.current)&&R.disabled||1===a.comboboxState?a:{...a,activeOptionIndex:null,comboboxState:1}},0(a){var R;if(null!=(R=a.dataRef.current)&&R.disabled||0===a.comboboxState)return a;let O=a.activeOptionIndex;if(a.dataRef.current){let{isSelected:R}=a.dataRef.current,k=a.options.findIndex(a=>R(a.dataRef.current.value));-1!==k&&(O=k)}return{...a,comboboxState:0,activeOptionIndex:O}},2(a,R){var O,k,N,z;if(null!=(O=a.dataRef.current)&&O.disabled||null!=(k=a.dataRef.current)&&k.optionsRef.current&&!(null!=(N=a.dataRef.current)&&N.optionsPropsRef.current.static)&&1===a.comboboxState)return a;let j=re(a);if(null===j.activeOptionIndex){let a=j.options.findIndex(a=>!a.dataRef.current.disabled);-1!==a&&(j.activeOptionIndex=a)}let V=(0,er.d)(R,{resolveItems:()=>j.options,resolveActiveIndex:()=>j.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...a,...j,activeOptionIndex:V,activationTrigger:null!=(z=R.trigger)?z:1}},3:(a,R)=>{var O,k;let N={id:R.id,dataRef:R.dataRef},z=re(a,a=>[...a,N]);null===a.activeOptionIndex&&null!=(O=a.dataRef.current)&&O.isSelected(R.dataRef.current.value)&&(z.activeOptionIndex=z.options.indexOf(N));let j={...a,...z,activationTrigger:1};return null!=(k=a.dataRef.current)&&k.__demoMode&&void 0===a.dataRef.current.value&&(j.activeOptionIndex=0),j},4:(a,R)=>{let O=re(a,a=>{let O=a.findIndex(a=>a.id===R.id);return -1!==O&&a.splice(O,1),a});return{...a,...O,activationTrigger:1}},5:(a,R)=>({...a,labelId:R.id})},eS=(0,V.createContext)(null);function $(a){let R=(0,V.useContext)(eS);if(null===R){let R=Error(`<${a} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,$),R}return R}eS.displayName="ComboboxActionsContext";let eR=(0,V.createContext)(null);function H(a){let R=(0,V.useContext)(eR);if(null===R){let R=Error(`<${a} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,H),R}return R}function Ne(a,R){return(0,ea.E)(R.type,eE,a,R)}eR.displayName="ComboboxDataContext";let eO=V.Fragment,ew=ei.AN.RenderStrategy|ei.AN.Static,eP=(0,ei.yV)(function(a,R){let{value:O,defaultValue:k,onChange:N,name:z,by:j=(a,R)=>a===R,disabled:G=!1,__demoMode:q=!1,nullable:Z=!1,multiple:ee=!1,...et}=a,[en=ee?[]:void 0,eo]=(0,ep.q)(O,N,k),[el,es]=(0,V.useReducer)(Ne,{dataRef:(0,V.createRef)(),comboboxState:q?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),ef=(0,V.useRef)(!1),ev=(0,V.useRef)({static:!1,hold:!1}),eh=(0,V.useRef)(null),eg=(0,V.useRef)(null),em=(0,V.useRef)(null),eb=(0,V.useRef)(null),ex=(0,K.z)("string"==typeof j?(a,R)=>(null==a?void 0:a[j])===(null==R?void 0:R[j]):j),ey=(0,V.useCallback)(a=>(0,ea.E)(eE.mode,{1:()=>en.some(R=>ex(R,a)),0:()=>ex(en,a)}),[en]),eE=(0,V.useMemo)(()=>({...el,optionsPropsRef:ev,labelRef:eh,inputRef:eg,buttonRef:em,optionsRef:eb,value:en,defaultValue:k,disabled:G,mode:ee?1:0,get activeOptionIndex(){if(ef.current&&null===el.activeOptionIndex&&el.options.length>0){let a=el.options.findIndex(a=>!a.dataRef.current.disabled);if(-1!==a)return a}return el.activeOptionIndex},compare:ex,isSelected:ey,nullable:Z,__demoMode:q}),[en,k,G,ee,Z,q,el]),ew=(0,V.useRef)(null!==eE.activeOptionIndex?eE.options[eE.activeOptionIndex]:null);(0,V.useEffect)(()=>{let a=null!==eE.activeOptionIndex?eE.options[eE.activeOptionIndex]:null;ew.current!==a&&(ew.current=a)}),(0,J.e)(()=>{el.dataRef.current=eE},[eE]),(0,X.O)([eE.buttonRef,eE.inputRef,eE.optionsRef],()=>eD.closeCombobox(),0===eE.comboboxState);let eP=(0,V.useMemo)(()=>({open:0===eE.comboboxState,disabled:G,activeIndex:eE.activeOptionIndex,activeOption:null===eE.activeOptionIndex?null:eE.options[eE.activeOptionIndex].dataRef.current.value,value:en}),[eE,G,en]),eT=(0,K.z)(a=>{let R=eE.options.find(R=>R.id===a);R&&eF(R.dataRef.current.value)}),eI=(0,K.z)(()=>{if(null!==eE.activeOptionIndex){let{dataRef:a,id:R}=eE.options[eE.activeOptionIndex];eF(a.current.value),eD.goToOption(er.T.Specific,R)}}),eC=(0,K.z)(()=>{es({type:0}),ef.current=!0}),eM=(0,K.z)(()=>{es({type:1}),ef.current=!1}),eA=(0,K.z)((a,R,O)=>(ef.current=!1,a===er.T.Specific?es({type:2,focus:er.T.Specific,id:R,trigger:O}):es({type:2,focus:a,trigger:O}))),eL=(0,K.z)((a,R)=>(es({type:3,id:a,dataRef:R}),()=>{var R;(null==(R=ew.current)?void 0:R.id)===a&&(ef.current=!0),es({type:4,id:a})})),ek=(0,K.z)(a=>(es({type:5,id:a}),()=>es({type:5,id:null}))),eF=(0,K.z)(a=>(0,ea.E)(eE.mode,{0:()=>null==eo?void 0:eo(a),1(){let R=eE.value.slice(),O=R.findIndex(R=>ex(R,a));return -1===O?R.push(a):R.splice(O,1),null==eo?void 0:eo(R)}})),eD=(0,V.useMemo)(()=>({onChange:eF,registerOption:eL,registerLabel:ek,goToOption:eA,closeCombobox:eM,openCombobox:eC,selectActiveOption:eI,selectOption:eT}),[]),e_=(0,V.useRef)(null),eN=(0,W.G)();return(0,V.useEffect)(()=>{e_.current&&void 0!==k&&eN.addEventListener(e_.current,"reset",()=>{eF(k)})},[e_,eF]),V.createElement(eS.Provider,{value:eD},V.createElement(eR.Provider,{value:eE},V.createElement(ed.up,{value:(0,ea.E)(eE.comboboxState,{0:ed.ZM.Open,1:ed.ZM.Closed})},null!=z&&null!=en&&(0,eu.t)({[z]:en}).map(([a,R],O)=>V.createElement(ec._,{features:ec.A.Hidden,ref:0===O?a=>{var R;e_.current=null!=(R=null==a?void 0:a.closest("form"))?R:null}:void 0,...(0,ei.oA)({key:a,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:a,value:R})})),(0,ei.sY)({ourProps:null===R?{}:{ref:R},theirProps:et,slot:eP,defaultTag:eO,name:"Combobox"}))))}),eT=(0,ei.yV)(function(a,R){var O;let k=H("Combobox.Button"),N=$("Combobox.Button"),z=(0,et.T)(k.buttonRef,R),j=(0,q.M)(),{id:J=`headlessui-combobox-button-${j}`,...Z}=a,X=(0,W.G)(),en=(0,K.z)(a=>{switch(a.key){case ef.R.ArrowDown:return a.preventDefault(),a.stopPropagation(),1===k.comboboxState&&N.openCombobox(),X.nextFrame(()=>{var a;return null==(a=k.inputRef.current)?void 0:a.focus({preventScroll:!0})});case ef.R.ArrowUp:return a.preventDefault(),a.stopPropagation(),1===k.comboboxState&&(N.openCombobox(),X.nextFrame(()=>{k.value||N.goToOption(er.T.Last)})),X.nextFrame(()=>{var a;return null==(a=k.inputRef.current)?void 0:a.focus({preventScroll:!0})});case ef.R.Escape:return 0!==k.comboboxState?void 0:(a.preventDefault(),k.optionsRef.current&&!k.optionsPropsRef.current.static&&a.stopPropagation(),N.closeCombobox(),X.nextFrame(()=>{var a;return null==(a=k.inputRef.current)?void 0:a.focus({preventScroll:!0})}));default:return}}),eo=(0,K.z)(a=>{if((0,el.P)(a.currentTarget))return a.preventDefault();0===k.comboboxState?N.closeCombobox():(a.preventDefault(),N.openCombobox()),X.nextFrame(()=>{var a;return null==(a=k.inputRef.current)?void 0:a.focus({preventScroll:!0})})}),ea=(0,G.v)(()=>{if(k.labelId)return[k.labelId,J].join(" ")},[k.labelId,J]),eu=(0,V.useMemo)(()=>({open:0===k.comboboxState,disabled:k.disabled,value:k.value}),[k]),es={ref:z,id:J,type:(0,ee.f)(a,k.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":null==(O=k.optionsRef.current)?void 0:O.id,"aria-expanded":k.disabled?void 0:0===k.comboboxState,"aria-labelledby":ea,disabled:k.disabled,onClick:eo,onKeyDown:en};return(0,ei.sY)({ourProps:es,theirProps:Z,slot:eu,defaultTag:"button",name:"Combobox.Button"})}),eI=Object.assign(eP,{Input:(0,ei.yV)(function(a,R){var O,k,N,z,j;let J=(0,q.M)(),{id:Z=`headlessui-combobox-input-${J}`,onChange:X,displayValue:ee,type:en="text",...eo}=a,el=H("Combobox.Input"),eu=$("Combobox.Input"),es=(0,et.T)(el.inputRef,R),ec=(0,V.useRef)(!1),ed=(0,W.G)(),ep="function"==typeof ee&&void 0!==el.value?null!=(j=ee(el.value))?j:"":"string"==typeof el.value?el.value:"";(0,ev.q)(([a,R],[O,k])=>{ec.current||el.inputRef.current&&(0===k&&1===R||a!==O)&&(el.inputRef.current.value=a)},[ep,el.comboboxState]),(0,ev.q)(([a],[R])=>{if(0===a&&1===R){let a=el.inputRef.current;if(!a)return;let R=a.value,{selectionStart:O,selectionEnd:k,selectionDirection:N}=a;a.value="",a.value=R,null!==N?a.setSelectionRange(O,k,N):a.setSelectionRange(O,k)}},[el.comboboxState]);let eh=(0,V.useRef)(!1),eg=(0,K.z)(()=>{eh.current=!0}),em=(0,K.z)(()=>{setTimeout(()=>{eh.current=!1})}),eb=(0,K.z)(a=>{switch(ec.current=!0,a.key){case ef.R.Backspace:case ef.R.Delete:if(0!==el.mode||!el.nullable)return;let R=a.currentTarget;ed.requestAnimationFrame(()=>{""===R.value&&(eu.onChange(null),el.optionsRef.current&&(el.optionsRef.current.scrollTop=0),eu.goToOption(er.T.Nothing))});break;case ef.R.Enter:if(ec.current=!1,0!==el.comboboxState||eh.current)return;if(a.preventDefault(),a.stopPropagation(),null===el.activeOptionIndex){eu.closeCombobox();return}eu.selectActiveOption(),0===el.mode&&eu.closeCombobox();break;case ef.R.ArrowDown:return ec.current=!1,a.preventDefault(),a.stopPropagation(),(0,ea.E)(el.comboboxState,{0:()=>{eu.goToOption(er.T.Next)},1:()=>{eu.openCombobox()}});case ef.R.ArrowUp:return ec.current=!1,a.preventDefault(),a.stopPropagation(),(0,ea.E)(el.comboboxState,{0:()=>{eu.goToOption(er.T.Previous)},1:()=>{eu.openCombobox(),ed.nextFrame(()=>{el.value||eu.goToOption(er.T.Last)})}});case ef.R.Home:if(a.shiftKey)break;return ec.current=!1,a.preventDefault(),a.stopPropagation(),eu.goToOption(er.T.First);case ef.R.PageUp:return ec.current=!1,a.preventDefault(),a.stopPropagation(),eu.goToOption(er.T.First);case ef.R.End:if(a.shiftKey)break;return ec.current=!1,a.preventDefault(),a.stopPropagation(),eu.goToOption(er.T.Last);case ef.R.PageDown:return ec.current=!1,a.preventDefault(),a.stopPropagation(),eu.goToOption(er.T.Last);case ef.R.Escape:return ec.current=!1,0!==el.comboboxState?void 0:(a.preventDefault(),el.optionsRef.current&&!el.optionsPropsRef.current.static&&a.stopPropagation(),eu.closeCombobox());case ef.R.Tab:if(ec.current=!1,0!==el.comboboxState)return;0===el.mode&&eu.selectActiveOption(),eu.closeCombobox()}}),ex=(0,K.z)(a=>{eu.openCombobox(),null==X||X(a)}),ey=(0,K.z)(()=>{ec.current=!1}),eE=(0,G.v)(()=>{if(el.labelId)return[el.labelId].join(" ")},[el.labelId]),eS=(0,V.useMemo)(()=>({open:0===el.comboboxState,disabled:el.disabled}),[el]),eR={ref:es,id:Z,role:"combobox",type:en,"aria-controls":null==(O=el.optionsRef.current)?void 0:O.id,"aria-expanded":el.disabled?void 0:0===el.comboboxState,"aria-activedescendant":null===el.activeOptionIndex||null==(k=el.options[el.activeOptionIndex])?void 0:k.id,"aria-labelledby":eE,"aria-autocomplete":"list",defaultValue:null!=(z=null!=(N=a.defaultValue)?N:void 0!==el.defaultValue?null==ee?void 0:ee(el.defaultValue):null)?z:el.defaultValue,disabled:el.disabled,onCompositionStart:eg,onCompositionEnd:em,onKeyDown:eb,onChange:ex,onBlur:ey};return(0,ei.sY)({ourProps:eR,theirProps:eo,slot:eS,defaultTag:"input",name:"Combobox.Input"})}),Button:eT,Label:(0,ei.yV)(function(a,R){let O=(0,q.M)(),{id:k=`headlessui-combobox-label-${O}`,...N}=a,z=H("Combobox.Label"),j=$("Combobox.Label"),G=(0,et.T)(z.labelRef,R);(0,J.e)(()=>j.registerLabel(k),[k]);let W=(0,K.z)(()=>{var a;return null==(a=z.inputRef.current)?void 0:a.focus({preventScroll:!0})}),Z=(0,V.useMemo)(()=>({open:0===z.comboboxState,disabled:z.disabled}),[z]);return(0,ei.sY)({ourProps:{ref:G,id:k,onClick:W},theirProps:N,slot:Z,defaultTag:"label",name:"Combobox.Label"})}),Options:(0,ei.yV)(function(a,R){let O=(0,q.M)(),{id:k=`headlessui-combobox-options-${O}`,hold:N=!1,...z}=a,j=H("Combobox.Options"),W=(0,et.T)(j.optionsRef,R),K=(0,ed.oJ)(),Z=null!==K?(K&ed.ZM.Open)===ed.ZM.Open:0===j.comboboxState;(0,J.e)(()=>{var R;j.optionsPropsRef.current.static=null!=(R=a.static)&&R},[j.optionsPropsRef,a.static]),(0,J.e)(()=>{j.optionsPropsRef.current.hold=N},[j.optionsPropsRef,N]),(0,en.B)({container:j.optionsRef.current,enabled:0===j.comboboxState,accept:a=>"option"===a.getAttribute("role")?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(a){a.setAttribute("role","none")}});let X=(0,G.v)(()=>{var a,R;return null!=(R=j.labelId)?R:null==(a=j.buttonRef.current)?void 0:a.id},[j.labelId,j.buttonRef.current]),ee=(0,V.useMemo)(()=>({open:0===j.comboboxState}),[j]),er={"aria-labelledby":X,role:"listbox","aria-multiselectable":1===j.mode||void 0,id:k,ref:W};return(0,ei.sY)({ourProps:er,theirProps:z,slot:ee,defaultTag:"ul",features:ew,visible:Z,name:"Combobox.Options"})}),Option:(0,ei.yV)(function(a,R){var O,k;let N=(0,q.M)(),{id:z=`headlessui-combobox-option-${N}`,disabled:j=!1,value:G,...W}=a,X=H("Combobox.Option"),ee=$("Combobox.Option"),en=null!==X.activeOptionIndex&&X.options[X.activeOptionIndex].id===z,el=X.isSelected(G),ea=(0,V.useRef)(null),eu=(0,Z.E)({disabled:j,value:G,domRef:ea,textValue:null==(k=null==(O=ea.current)?void 0:O.textContent)?void 0:k.toLowerCase()}),es=(0,et.T)(R,ea),ec=(0,K.z)(()=>ee.selectOption(z));(0,J.e)(()=>ee.registerOption(z,eu),[eu,z]);let ed=(0,V.useRef)(!X.__demoMode);(0,J.e)(()=>{if(!X.__demoMode)return;let a=(0,eo.k)();return a.requestAnimationFrame(()=>{ed.current=!0}),a.dispose},[]),(0,J.e)(()=>{if(0!==X.comboboxState||!en||!ed.current||0===X.activationTrigger)return;let a=(0,eo.k)();return a.requestAnimationFrame(()=>{var a,R;null==(R=null==(a=ea.current)?void 0:a.scrollIntoView)||R.call(a,{block:"nearest"})}),a.dispose},[ea,en,X.comboboxState,X.activationTrigger,X.activeOptionIndex]);let ef=(0,K.z)(a=>{if(j)return a.preventDefault();ec(),0===X.mode&&ee.closeCombobox(),(0,eg.tq)()||requestAnimationFrame(()=>{var a;return null==(a=X.inputRef.current)?void 0:a.focus()})}),ep=(0,K.z)(()=>{if(j)return ee.goToOption(er.T.Nothing);ee.goToOption(er.T.Specific,z)}),ev=(0,eh.g)(),em=(0,K.z)(a=>ev.update(a)),eb=(0,K.z)(a=>{ev.wasMoved(a)&&(j||en||ee.goToOption(er.T.Specific,z,0))}),ex=(0,K.z)(a=>{ev.wasMoved(a)&&(j||en&&(X.optionsPropsRef.current.hold||ee.goToOption(er.T.Nothing)))}),ey=(0,V.useMemo)(()=>({active:en,selected:el,disabled:j}),[en,el,j]);return(0,ei.sY)({ourProps:{id:z,ref:es,role:"option",tabIndex:!0===j?void 0:-1,"aria-disabled":!0===j||void 0,"aria-selected":el,disabled:void 0,onClick:ef,onFocus:ep,onPointerEnter:em,onMouseEnter:em,onPointerMove:eb,onMouseMove:eb,onPointerLeave:ex,onMouseLeave:ex},theirProps:W,slot:ey,defaultTag:"li",name:"Combobox.Option"})})})},46465:function(a,R,O){"use strict";O.d(R,{d:function(){return K},f:function(){return M}});var k=O(2784),N=O(80586),z=O(90544),j=O(88064),V=O(33401),G=O(55559);let W=(0,k.createContext)(null);function M(){let[a,R]=(0,k.useState)([]);return[a.length>0?a.join(" "):void 0,(0,k.useMemo)(()=>function(a){let O=(0,G.z)(a=>(R(R=>[...R,a]),()=>R(R=>{let O=R.slice(),k=O.indexOf(a);return -1!==k&&O.splice(k,1),O}))),N=(0,k.useMemo)(()=>({register:O,slot:a.slot,name:a.name,props:a.props}),[O,a.slot,a.name,a.props]);return k.createElement(W.Provider,{value:N},a.children)},[R])]}let K=Object.assign((0,z.yV)(function(a,R){let O=(0,N.M)(),{id:G=`headlessui-description-${O}`,...K}=a,q=function f(){let a=(0,k.useContext)(W);if(null===a){let a=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,f),a}return a}(),J=(0,V.T)(R);(0,j.e)(()=>q.register(G),[G,q.register]);let Z={ref:J,...q.props,id:G};return(0,z.sY)({ourProps:Z,theirProps:K,slot:q.slot||{},defaultTag:"p",name:q.name||"Description"})}),{})},64529:function(a,R,O){"use strict";let k,N;O.d(R,{V:function(){return eG}});var z,j,V,G,W,K=O(2784),q=O.t(K,2),J=O(3703),Z=O(90544),X=O(33401),ee=O(99108),et=O(15426),en=O(80586),er=O(76460),eo=O(36799),ei=O(52929),el=O(55559),ea=O(41558),eu=O(81061),es=O(70592),ec=O(79410),ed=O(91554),ef=O(63575),ep=O(58314);function P(a){if(!a)return new Set;if("function"==typeof a)return new Set(a());let R=new Set;for(let O of a.current)O.current instanceof HTMLElement&&R.add(O.current);return R}var ev=((z=ev||{})[z.None=1]="None",z[z.InitialFocus=2]="InitialFocus",z[z.TabLock=4]="TabLock",z[z.FocusLock=8]="FocusLock",z[z.RestoreFocus=16]="RestoreFocus",z[z.All=30]="All",z);let eh=Object.assign((0,Z.yV)(function(a,R){let O=(0,K.useRef)(null),k=(0,X.T)(O,R),{initialFocus:N,containers:z,features:j=30,...V}=a;(0,er.H)()||(j=1);let G=(0,es.i)(O);!function({ownerDocument:a},R){let O=function(a=!0){let R=(0,K.useRef)(eg.slice());return(0,ef.q)(([a],[O])=>{!0===O&&!1===a&&(0,ed.Y)(()=>{R.current.splice(0)}),!1===O&&!0===a&&(R.current=eg.slice())},[a,eg,R]),(0,el.z)(()=>{var a;return null!=(a=R.current.find(a=>null!=a&&a.isConnected))?a:null})}(R);(0,ef.q)(()=>{R||(null==a?void 0:a.activeElement)===(null==a?void 0:a.body)&&(0,ei.C5)(O())},[R]);let k=(0,K.useRef)(!1);(0,K.useEffect)(()=>(k.current=!1,()=>{k.current=!0,(0,ed.Y)(()=>{k.current&&(0,ei.C5)(O())})}),[])}({ownerDocument:G},!!(16&j));let W=function({ownerDocument:a,container:R,initialFocus:O},k){let N=(0,K.useRef)(null),z=(0,eu.t)();return(0,ef.q)(()=>{if(!k)return;let j=R.current;j&&(0,ed.Y)(()=>{if(!z.current)return;let R=null==a?void 0:a.activeElement;if(null!=O&&O.current){if((null==O?void 0:O.current)===R){N.current=R;return}}else if(j.contains(R)){N.current=R;return}null!=O&&O.current?(0,ei.C5)(O.current):(0,ei.jA)(j,ei.TO.First)===ei.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),N.current=null==a?void 0:a.activeElement})},[k]),N}({ownerDocument:G,container:O,initialFocus:N},!!(2&j));!function({ownerDocument:a,container:R,containers:O,previousActiveElement:k},N){let z=(0,eu.t)();(0,ec.O)(null==a?void 0:a.defaultView,"focus",a=>{if(!N||!z.current)return;let j=P(O);R.current instanceof HTMLElement&&j.add(R.current);let V=k.current;if(!V)return;let G=a.target;G&&G instanceof HTMLElement?S(j,G)?(k.current=G,(0,ei.C5)(G)):(a.preventDefault(),a.stopPropagation(),(0,ei.C5)(V)):(0,ei.C5)(k.current)},!0)}({ownerDocument:G,container:O,containers:z,previousActiveElement:W},!!(8&j));let q=(0,ea.l)(),ee=(0,el.z)(a=>{let R=O.current;R&&(0,J.E)(q.current,{[ea.N.Forwards]:()=>{(0,ei.jA)(R,ei.TO.First,{skipElements:[a.relatedTarget]})},[ea.N.Backwards]:()=>{(0,ei.jA)(R,ei.TO.Last,{skipElements:[a.relatedTarget]})}})}),et=(0,ep.G)(),en=(0,K.useRef)(!1);return K.createElement(K.Fragment,null,!!(4&j)&&K.createElement(eo._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:ee,features:eo.A.Focusable}),(0,Z.sY)({ourProps:{ref:k,onKeyDown(a){"Tab"==a.key&&(en.current=!0,et.requestAnimationFrame(()=>{en.current=!1}))},onBlur(a){let R=P(z);O.current instanceof HTMLElement&&R.add(O.current);let k=a.relatedTarget;k instanceof HTMLElement&&"true"!==k.dataset.headlessuiFocusGuard&&(S(R,k)||(en.current?(0,ei.jA)(O.current,(0,J.E)(q.current,{[ea.N.Forwards]:()=>ei.TO.Next,[ea.N.Backwards]:()=>ei.TO.Previous})|ei.TO.WrapAround,{relativeTo:a.target}):a.target instanceof HTMLElement&&(0,ei.C5)(a.target)))}},theirProps:V,defaultTag:"div",name:"FocusTrap"}),!!(4&j)&&K.createElement(eo._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:ee,features:eo.A.Focusable}))}),{features:ev}),eg=[];if("undefined"!=typeof window&&"undefined"!=typeof document){let t=function(a){a.target instanceof HTMLElement&&a.target!==document.body&&eg[0]!==a.target&&(eg.unshift(a.target),(eg=eg.filter(a=>null!=a&&a.isConnected)).splice(10))};window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})}function S(a,R){for(let O of a)if(O.contains(R))return!0;return!1}var em=O(28316),eb=O(88064);let ex=(0,K.createContext)(!1);function portal_force_root_P(a){return K.createElement(ex.Provider,{value:a.force},a.children)}var ey=O(64727);let eE=K.Fragment,eS=K.Fragment,eR=(0,K.createContext)(null),eO=Object.assign((0,Z.yV)(function(a,R){let O=(0,K.useRef)(null),k=(0,X.T)((0,X.h)(a=>{O.current=a}),R),N=(0,es.i)(O),z=function(a){let R=(0,K.useContext)(ex),O=(0,K.useContext)(eR),k=(0,es.i)(a),[N,z]=(0,K.useState)(()=>{if(!R&&null!==O||ey.O.isServer)return null;let a=null==k?void 0:k.getElementById("headlessui-portal-root");if(a)return a;if(null===k)return null;let N=k.createElement("div");return N.setAttribute("id","headlessui-portal-root"),k.body.appendChild(N)});return(0,K.useEffect)(()=>{null!==N&&(null!=k&&k.body.contains(N)||null==k||k.body.appendChild(N))},[N,k]),(0,K.useEffect)(()=>{R||null!==O&&z(O.current)},[O,z,R]),N}(O),[j]=(0,K.useState)(()=>{var a;return ey.O.isServer?null:null!=(a=null==N?void 0:N.createElement("div"))?a:null}),V=(0,er.H)(),G=(0,K.useRef)(!1);return(0,eb.e)(()=>{if(G.current=!1,!(!z||!j))return z.contains(j)||(j.setAttribute("data-headlessui-portal",""),z.appendChild(j)),()=>{G.current=!0,(0,ed.Y)(()=>{var a;G.current&&z&&j&&(j instanceof Node&&z.contains(j)&&z.removeChild(j),z.childNodes.length<=0&&(null==(a=z.parentElement)||a.removeChild(z)))})}},[z,j]),V&&z&&j?(0,em.createPortal)((0,Z.sY)({ourProps:{ref:k},theirProps:a,defaultTag:eE,name:"Portal"}),j):null}),{Group:(0,Z.yV)(function(a,R){let{target:O,...k}=a,N={ref:(0,X.T)(R)};return K.createElement(eR.Provider,{value:O},(0,Z.sY)({ourProps:N,theirProps:k,defaultTag:eS,name:"Popover.Group"}))})});var ew=O(46465),eP=O(47215);let eT=(0,K.createContext)(()=>{});eT.displayName="StackContext";var eI=((j=eI||{})[j.Add=0]="Add",j[j.Remove=1]="Remove",j);function M({children:a,onUpdate:R,type:O,element:k,enabled:N}){let z=(0,K.useContext)(eT),j=(0,el.z)((...a)=>{null==R||R(...a),z(...a)});return(0,eb.e)(()=>{let a=void 0===N||!0===N;return a&&j(0,O,k),()=>{a&&j(1,O,k)}},[j,O,k,N]),K.createElement(eT.Provider,{value:j},a)}var eC=O(32994);let{useState:eM,useEffect:eA,useLayoutEffect:eL,useDebugValue:ek}=q;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let eF=q.useSyncExternalStore;var eD=O(6173),e_=O(25371);let eN=(V={PUSH(a,R){var O;let k=null!=(O=this.get(a))?O:{doc:a,count:0,d:(0,eD.k)(),meta:new Set};return k.count++,k.meta.add(R),this.set(a,k),this},POP(a,R){let O=this.get(a);return O&&(O.count--,O.meta.delete(R)),this},SCROLL_PREVENT({doc:a,d:R,meta:O}){let k,N;let z={doc:a,d:R,meta:function(a){let R={};for(let O of a)Object.assign(R,O(R));return R}(O)},j=[(0,e_.gn)()?{before(){k=window.pageYOffset},after({doc:a,d:R,meta:O}){function i(a){return O.containers.flatMap(a=>a()).some(R=>R.contains(a))}R.style(a.body,"marginTop",`-${k}px`),window.scrollTo(0,0);let N=null;R.addEventListener(a,"click",R=>{if(R.target instanceof HTMLElement)try{let O=R.target.closest("a");if(!O)return;let{hash:k}=new URL(O.href),z=a.querySelector(k);z&&!i(z)&&(N=z)}catch{}},!0),R.addEventListener(a,"touchmove",a=>{a.target instanceof HTMLElement&&!i(a.target)&&a.preventDefault()},{passive:!1}),R.add(()=>{window.scrollTo(0,window.pageYOffset+k),N&&N.isConnected&&(N.scrollIntoView({block:"nearest"}),N=null)})}}:{},{before({doc:a}){var R;let O=a.documentElement;N=(null!=(R=a.defaultView)?R:window).innerWidth-O.clientWidth},after({doc:a,d:R}){let O=a.documentElement,k=O.clientWidth-O.offsetWidth,z=N-k;R.style(O,"paddingRight",`${z}px`)}},{before({doc:a,d:R}){R.style(a.documentElement,"overflow","hidden")}}];j.forEach(({before:a})=>null==a?void 0:a(z)),j.forEach(({after:a})=>null==a?void 0:a(z))},SCROLL_ALLOW({d:a}){a.dispose()},TEARDOWN({doc:a}){this.delete(a)}},k=new Map,N=new Set,{getSnapshot:()=>k,subscribe:a=>(N.add(a),()=>N.delete(a)),dispatch(a,...R){let O=V[a].call(k,...R);O&&(k=O,N.forEach(a=>a()))}});eN.subscribe(()=>{let a=eN.getSnapshot(),R=new Map;for(let[O]of a)R.set(O,O.documentElement.style.overflow);for(let O of a.values()){let a="hidden"===R.get(O.doc),k=0!==O.count;(k&&!a||!k&&a)&&eN.dispatch(O.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",O),0===O.count&&eN.dispatch("TEARDOWN",O)}});let ez=new Map,ej=new Map;function use_inert_h(a,R=!0){(0,eb.e)(()=>{var O;if(!R)return;let k="function"==typeof a?a():a.current;if(!k)return;let N=null!=(O=ej.get(k))?O:0;return ej.set(k,N+1),0!==N||(ez.set(k,{"aria-hidden":k.getAttribute("aria-hidden"),inert:k.inert}),k.setAttribute("aria-hidden","true"),k.inert=!0),function(){var a;if(!k)return;let R=null!=(a=ej.get(k))?a:1;if(1===R?ej.delete(k):ej.set(k,R-1),1!==R)return;let O=ez.get(k);O&&(null===O["aria-hidden"]?k.removeAttribute("aria-hidden"):k.setAttribute("aria-hidden",O["aria-hidden"]),k.inert=O.inert,ez.delete(k))}},[a,R])}var eB=((G=eB||{})[G.Open=0]="Open",G[G.Closed=1]="Closed",G),eV=((W=eV||{})[W.SetTitleId=0]="SetTitleId",W);let e$={0:(a,R)=>a.titleId===R.id?a:{...a,titleId:R.id}},eH=(0,K.createContext)(null);function dialog_S(a){let R=(0,K.useContext)(eH);if(null===R){let R=Error(`<${a} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,dialog_S),R}return R}function _e(a,R){return(0,J.E)(R.type,e$,a,R)}eH.displayName="DialogContext";let eY=Z.AN.RenderStrategy|Z.AN.Static,eG=Object.assign((0,Z.yV)(function(a,R){let O=(0,en.M)(),{id:k=`headlessui-dialog-${O}`,open:N,onClose:z,initialFocus:j,__demoMode:V=!1,...G}=a,[W,q]=(0,K.useState)(0),et=(0,eP.oJ)();void 0===N&&null!==et&&(N=(et&eP.ZM.Open)===eP.ZM.Open);let ei=(0,K.useRef)(null),ea=(0,X.T)(ei,R),eu=(0,K.useRef)(null),ed=(0,es.i)(ei),ef=a.hasOwnProperty("open")||null!==et,ep=a.hasOwnProperty("onClose");if(!ef&&!ep)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!ef)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ep)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof N)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${N}`);if("function"!=typeof z)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${z}`);let ev=N?0:1,[eg,em]=(0,K.useReducer)(_e,{titleId:null,descriptionId:null,panelRef:(0,K.createRef)()}),ex=(0,el.z)(()=>z(!1)),ey=(0,el.z)(a=>em({type:0,id:a})),eE=!!(0,er.H)()&&!V&&0===ev,eS=W>1,eR=null!==(0,K.useContext)(eH),eT=eS?"parent":"leaf",eM=null!==et&&(et&eP.ZM.Closing)===eP.ZM.Closing,eA=!eR&&!eM&&eE;use_inert_h((0,K.useCallback)(()=>{var a,R;return null!=(R=Array.from(null!=(a=null==ed?void 0:ed.querySelectorAll("body > *"))?a:[]).find(a=>"headlessui-portal-root"!==a.id&&a.contains(eu.current)&&a instanceof HTMLElement))?R:null},[eu]),eA);let eL=!!eS||eE;use_inert_h((0,K.useCallback)(()=>{var a,R;return null!=(R=Array.from(null!=(a=null==ed?void 0:ed.querySelectorAll("[data-headlessui-portal]"))?a:[]).find(a=>a.contains(eu.current)&&a instanceof HTMLElement))?R:null},[eu]),eL);let ek=(0,el.z)(()=>{var a,R;return[...Array.from(null!=(a=null==ed?void 0:ed.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))?a:[]).filter(a=>!(a===document.body||a===document.head||!(a instanceof HTMLElement)||a.contains(eu.current)||eg.panelRef.current&&a.contains(eg.panelRef.current))),null!=(R=eg.panelRef.current)?R:ei.current]}),eD=!(!eE||eS);(0,eC.O)(()=>ek(),ex,eD);let e_=!(eS||0!==ev);(0,ec.O)(null==ed?void 0:ed.defaultView,"keydown",a=>{e_&&(a.defaultPrevented||a.key===ee.R.Escape&&(a.preventDefault(),a.stopPropagation(),ex()))}),function(a,R,O=()=>[document.body]){var k;let N,z;k=a=>{var R;return{containers:[...null!=(R=a.containers)?R:[],O]}},N=eF(eN.subscribe,eN.getSnapshot,eN.getSnapshot),(z=a?N.get(a):void 0)&&z.count,(0,eb.e)(()=>{if(!(!a||!R))return eN.dispatch("PUSH",a,k),()=>eN.dispatch("POP",a,k)},[R,a])}(ed,!(eM||0!==ev||eR),ek),(0,K.useEffect)(()=>{if(0!==ev||!ei.current)return;let a=new ResizeObserver(a=>{for(let R of a){let a=R.target.getBoundingClientRect();0===a.x&&0===a.y&&0===a.width&&0===a.height&&ex()}});return a.observe(ei.current),()=>a.disconnect()},[ev,ei,ex]);let[ez,ej]=(0,ew.f)(),eB=(0,K.useMemo)(()=>[{dialogState:ev,close:ex,setTitleId:ey},eg],[ev,eg,ex,ey]),eV=(0,K.useMemo)(()=>({open:0===ev}),[ev]),e$={ref:ea,id:k,role:"dialog","aria-modal":0===ev||void 0,"aria-labelledby":eg.titleId,"aria-describedby":ez};return K.createElement(M,{type:"Dialog",enabled:0===ev,element:ei,onUpdate:(0,el.z)((a,R)=>{"Dialog"===R&&(0,J.E)(a,{[eI.Add]:()=>q(a=>a+1),[eI.Remove]:()=>q(a=>a-1)})})},K.createElement(portal_force_root_P,{force:!0},K.createElement(eO,null,K.createElement(eH.Provider,{value:eB},K.createElement(eO.Group,{target:ei},K.createElement(portal_force_root_P,{force:!1},K.createElement(ej,{slot:eV,name:"Dialog.Description"},K.createElement(eh,{initialFocus:j,containers:ek,features:eE?(0,J.E)(eT,{parent:eh.features.RestoreFocus,leaf:eh.features.All&~eh.features.FocusLock}):eh.features.None},(0,Z.sY)({ourProps:e$,theirProps:G,slot:eV,defaultTag:"div",features:eY,visible:0===ev,name:"Dialog"})))))))),K.createElement(eo._,{features:eo.A.Hidden,ref:eu}))}),{Backdrop:(0,Z.yV)(function(a,R){let O=(0,en.M)(),{id:k=`headlessui-dialog-backdrop-${O}`,...N}=a,[{dialogState:z},j]=dialog_S("Dialog.Backdrop"),V=(0,X.T)(R);(0,K.useEffect)(()=>{if(null===j.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[j.panelRef]);let G=(0,K.useMemo)(()=>({open:0===z}),[z]);return K.createElement(portal_force_root_P,{force:!0},K.createElement(eO,null,(0,Z.sY)({ourProps:{ref:V,id:k,"aria-hidden":!0},theirProps:N,slot:G,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,Z.yV)(function(a,R){let O=(0,en.M)(),{id:k=`headlessui-dialog-panel-${O}`,...N}=a,[{dialogState:z},j]=dialog_S("Dialog.Panel"),V=(0,X.T)(R,j.panelRef),G=(0,K.useMemo)(()=>({open:0===z}),[z]),W=(0,el.z)(a=>{a.stopPropagation()});return(0,Z.sY)({ourProps:{ref:V,id:k,onClick:W},theirProps:N,slot:G,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:(0,Z.yV)(function(a,R){let O=(0,en.M)(),{id:k=`headlessui-dialog-overlay-${O}`,...N}=a,[{dialogState:z,close:j}]=dialog_S("Dialog.Overlay"),V=(0,X.T)(R),G=(0,el.z)(a=>{if(a.target===a.currentTarget){if((0,et.P)(a.currentTarget))return a.preventDefault();a.preventDefault(),a.stopPropagation(),j()}}),W=(0,K.useMemo)(()=>({open:0===z}),[z]);return(0,Z.sY)({ourProps:{ref:V,id:k,"aria-hidden":!0,onClick:G},theirProps:N,slot:W,defaultTag:"div",name:"Dialog.Overlay"})}),Title:(0,Z.yV)(function(a,R){let O=(0,en.M)(),{id:k=`headlessui-dialog-title-${O}`,...N}=a,[{dialogState:z,setTitleId:j}]=dialog_S("Dialog.Title"),V=(0,X.T)(R);(0,K.useEffect)(()=>(j(k),()=>j(null)),[k,j]);let G=(0,K.useMemo)(()=>({open:0===z}),[z]);return(0,Z.sY)({ourProps:{ref:V,id:k},theirProps:N,slot:G,defaultTag:"h2",name:"Dialog.Title"})}),Description:ew.d})},46319:function(a,R,O){"use strict";O.d(R,{p:function(){return ed}});var k,N,z,j=O(2784),V=O(3703),G=O(90544),W=O(33401),K=O(80586),q=O(99108),J=O(15426),Z=O(47215),X=O(37352),ee=O(29833),et=O(55559);let en=null!=(z=j.startTransition)?z:function(a){a()};var er=((k=er||{})[k.Open=0]="Open",k[k.Closed=1]="Closed",k),eo=((N=eo||{})[N.ToggleDisclosure=0]="ToggleDisclosure",N[N.CloseDisclosure=1]="CloseDisclosure",N[N.SetButtonId=2]="SetButtonId",N[N.SetPanelId=3]="SetPanelId",N[N.LinkPanel=4]="LinkPanel",N[N.UnlinkPanel=5]="UnlinkPanel",N);let ei={0:a=>({...a,disclosureState:(0,V.E)(a.disclosureState,{0:1,1:0})}),1:a=>1===a.disclosureState?a:{...a,disclosureState:1},4:a=>!0===a.linkedPanel?a:{...a,linkedPanel:!0},5:a=>!1===a.linkedPanel?a:{...a,linkedPanel:!1},2:(a,R)=>a.buttonId===R.buttonId?a:{...a,buttonId:R.buttonId},3:(a,R)=>a.panelId===R.panelId?a:{...a,panelId:R.panelId}},el=(0,j.createContext)(null);function M(a){let R=(0,j.useContext)(el);if(null===R){let R=Error(`<${a} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,M),R}return R}el.displayName="DisclosureContext";let ea=(0,j.createContext)(null);ea.displayName="DisclosureAPIContext";let eu=(0,j.createContext)(null);function Y(a,R){return(0,V.E)(R.type,ei,a,R)}eu.displayName="DisclosurePanelContext";let es=j.Fragment,ec=G.AN.RenderStrategy|G.AN.Static,ed=Object.assign((0,G.yV)(function(a,R){let{defaultOpen:O=!1,...k}=a,N=(0,j.useRef)(null),z=(0,W.T)(R,(0,W.h)(a=>{N.current=a},void 0===a.as||a.as===j.Fragment)),K=(0,j.useRef)(null),q=(0,j.useRef)(null),J=(0,j.useReducer)(Y,{disclosureState:O?0:1,linkedPanel:!1,buttonRef:q,panelRef:K,buttonId:null,panelId:null}),[{disclosureState:X,buttonId:en},er]=J,eo=(0,et.z)(a=>{er({type:1});let R=(0,ee.r)(N);if(!R||!en)return;let O=a?a instanceof HTMLElement?a:a.current instanceof HTMLElement?a.current:R.getElementById(en):R.getElementById(en);null==O||O.focus()}),ei=(0,j.useMemo)(()=>({close:eo}),[eo]),eu=(0,j.useMemo)(()=>({open:0===X,close:eo}),[X,eo]);return j.createElement(el.Provider,{value:J},j.createElement(ea.Provider,{value:ei},j.createElement(Z.up,{value:(0,V.E)(X,{0:Z.ZM.Open,1:Z.ZM.Closed})},(0,G.sY)({ourProps:{ref:z},theirProps:k,slot:eu,defaultTag:es,name:"Disclosure"}))))}),{Button:(0,G.yV)(function(a,R){let O=(0,K.M)(),{id:k=`headlessui-disclosure-button-${O}`,...N}=a,[z,V]=M("Disclosure.Button"),Z=(0,j.useContext)(eu),ee=null!==Z&&Z===z.panelId,en=(0,j.useRef)(null),er=(0,W.T)(en,R,ee?null:z.buttonRef);(0,j.useEffect)(()=>{if(!ee)return V({type:2,buttonId:k}),()=>{V({type:2,buttonId:null})}},[k,V,ee]);let eo=(0,et.z)(a=>{var R;if(ee){if(1===z.disclosureState)return;switch(a.key){case q.R.Space:case q.R.Enter:a.preventDefault(),a.stopPropagation(),V({type:0}),null==(R=z.buttonRef.current)||R.focus()}}else switch(a.key){case q.R.Space:case q.R.Enter:a.preventDefault(),a.stopPropagation(),V({type:0})}}),ei=(0,et.z)(a=>{a.key===q.R.Space&&a.preventDefault()}),el=(0,et.z)(R=>{var O;(0,J.P)(R.currentTarget)||a.disabled||(ee?(V({type:0}),null==(O=z.buttonRef.current)||O.focus()):V({type:0}))}),ea=(0,j.useMemo)(()=>({open:0===z.disclosureState}),[z]),es=(0,X.f)(a,en),ec=ee?{ref:er,type:es,onKeyDown:eo,onClick:el}:{ref:er,id:k,type:es,"aria-expanded":a.disabled?void 0:0===z.disclosureState,"aria-controls":z.linkedPanel?z.panelId:void 0,onKeyDown:eo,onKeyUp:ei,onClick:el};return(0,G.sY)({ourProps:ec,theirProps:N,slot:ea,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,G.yV)(function(a,R){let O=(0,K.M)(),{id:k=`headlessui-disclosure-panel-${O}`,...N}=a,[z,V]=M("Disclosure.Panel"),{close:q}=function w(a){let R=(0,j.useContext)(ea);if(null===R){let R=Error(`<${a} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,w),R}return R}("Disclosure.Panel"),J=(0,W.T)(R,z.panelRef,a=>{en(()=>V({type:a?4:5}))});(0,j.useEffect)(()=>(V({type:3,panelId:k}),()=>{V({type:3,panelId:null})}),[k,V]);let X=(0,Z.oJ)(),ee=null!==X?(X&Z.ZM.Open)===Z.ZM.Open:0===z.disclosureState,et=(0,j.useMemo)(()=>({open:0===z.disclosureState,close:q}),[z,q]);return j.createElement(eu.Provider,{value:z.panelId},(0,G.sY)({ourProps:{ref:J,id:k},theirProps:N,slot:et,defaultTag:"div",features:ec,visible:ee,name:"Disclosure.Panel"}))})})},99108:function(a,R,O){"use strict";O.d(R,{R:function(){return N}});var k,N=((k=N||{}).Space=" ",k.Enter="Enter",k.Escape="Escape",k.Backspace="Backspace",k.Delete="Delete",k.ArrowLeft="ArrowLeft",k.ArrowUp="ArrowUp",k.ArrowRight="ArrowRight",k.ArrowDown="ArrowDown",k.Home="Home",k.End="End",k.PageUp="PageUp",k.PageDown="PageDown",k.Tab="Tab",k)},23150:function(a,R,O){"use strict";O.d(R,{R:function(){return eO}});var k,N,z,j,V=O(2784),G=O(58314),W=O(80586),K=O(88064),q=O(70778),J=O(33401),Z=O(90544),X=O(3703),ee=O(6173),et=O(99108),en=O(13199),er=O(15426),eo=O(52929),ei=O(47215),el=O(37352),ea=O(32994),eu=O(36799),es=O(60567),ec=O(29833),ed=O(55559),ef=O(84407),ep=O(61742),ev=O(82121),eh=((k=eh||{})[k.Open=0]="Open",k[k.Closed=1]="Closed",k),eg=((N=eg||{})[N.Single=0]="Single",N[N.Multi=1]="Multi",N),em=((z=em||{})[z.Pointer=0]="Pointer",z[z.Other=1]="Other",z),eb=((j=eb||{})[j.OpenListbox=0]="OpenListbox",j[j.CloseListbox=1]="CloseListbox",j[j.GoToOption=2]="GoToOption",j[j.Search=3]="Search",j[j.ClearSearch=4]="ClearSearch",j[j.RegisterOption=5]="RegisterOption",j[j.UnregisterOption=6]="UnregisterOption",j[j.RegisterLabel=7]="RegisterLabel",j);function $(a,R=a=>a){let O=null!==a.activeOptionIndex?a.options[a.activeOptionIndex]:null,k=(0,eo.z2)(R(a.options.slice()),a=>a.dataRef.current.domRef.current),N=O?k.indexOf(O):null;return -1===N&&(N=null),{options:k,activeOptionIndex:N}}let ex={1:a=>a.dataRef.current.disabled||1===a.listboxState?a:{...a,activeOptionIndex:null,listboxState:1},0(a){if(a.dataRef.current.disabled||0===a.listboxState)return a;let R=a.activeOptionIndex,{isSelected:O}=a.dataRef.current,k=a.options.findIndex(a=>O(a.dataRef.current.value));return -1!==k&&(R=k),{...a,listboxState:0,activeOptionIndex:R}},2(a,R){var O;if(a.dataRef.current.disabled||1===a.listboxState)return a;let k=$(a),N=(0,en.d)(R,{resolveItems:()=>k.options,resolveActiveIndex:()=>k.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...a,...k,searchQuery:"",activeOptionIndex:N,activationTrigger:null!=(O=R.trigger)?O:1}},3:(a,R)=>{if(a.dataRef.current.disabled||1===a.listboxState)return a;let O=""!==a.searchQuery?0:1,k=a.searchQuery+R.value.toLowerCase(),N=(null!==a.activeOptionIndex?a.options.slice(a.activeOptionIndex+O).concat(a.options.slice(0,a.activeOptionIndex+O)):a.options).find(a=>{var R;return!a.dataRef.current.disabled&&(null==(R=a.dataRef.current.textValue)?void 0:R.startsWith(k))}),z=N?a.options.indexOf(N):-1;return -1===z||z===a.activeOptionIndex?{...a,searchQuery:k}:{...a,searchQuery:k,activeOptionIndex:z,activationTrigger:1}},4:a=>a.dataRef.current.disabled||1===a.listboxState||""===a.searchQuery?a:{...a,searchQuery:""},5:(a,R)=>{let O={id:R.id,dataRef:R.dataRef},k=$(a,a=>[...a,O]);return null===a.activeOptionIndex&&a.dataRef.current.isSelected(R.dataRef.current.value)&&(k.activeOptionIndex=k.options.indexOf(O)),{...a,...k}},6:(a,R)=>{let O=$(a,a=>{let O=a.findIndex(a=>a.id===R.id);return -1!==O&&a.splice(O,1),a});return{...a,...O,activationTrigger:1}},7:(a,R)=>({...a,labelId:R.id})},ey=(0,V.createContext)(null);function U(a){let R=(0,V.useContext)(ey);if(null===R){let R=Error(`<${a} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,U),R}return R}ey.displayName="ListboxActionsContext";let eE=(0,V.createContext)(null);function B(a){let R=(0,V.useContext)(eE);if(null===R){let R=Error(`<${a} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,B),R}return R}function Ne(a,R){return(0,X.E)(R.type,ex,a,R)}eE.displayName="ListboxDataContext";let eS=V.Fragment,eR=Z.AN.RenderStrategy|Z.AN.Static,eO=Object.assign((0,Z.yV)(function(a,R){let{value:O,defaultValue:k,name:N,onChange:z,by:j=(a,R)=>a===R,disabled:W=!1,horizontal:q=!1,multiple:ee=!1,...et}=a,er=q?"horizontal":"vertical",el=(0,J.T)(R),[ec=ee?[]:void 0,ep]=(0,ef.q)(O,z,k),[ev,eh]=(0,V.useReducer)(Ne,{dataRef:(0,V.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),eg=(0,V.useRef)({static:!1,hold:!1}),em=(0,V.useRef)(null),eb=(0,V.useRef)(null),ex=(0,V.useRef)(null),eR=(0,ed.z)("string"==typeof j?(a,R)=>(null==a?void 0:a[j])===(null==R?void 0:R[j]):j),eO=(0,V.useCallback)(a=>(0,X.E)(ew.mode,{1:()=>ec.some(R=>eR(R,a)),0:()=>eR(ec,a)}),[ec]),ew=(0,V.useMemo)(()=>({...ev,value:ec,disabled:W,mode:ee?1:0,orientation:er,compare:eR,isSelected:eO,optionsPropsRef:eg,labelRef:em,buttonRef:eb,optionsRef:ex}),[ec,W,ee,ev]);(0,K.e)(()=>{ev.dataRef.current=ew},[ew]),(0,ea.O)([ew.buttonRef,ew.optionsRef],(a,R)=>{var O;eh({type:1}),(0,eo.sP)(R,eo.tJ.Loose)||(a.preventDefault(),null==(O=ew.buttonRef.current)||O.focus())},0===ew.listboxState);let eP=(0,V.useMemo)(()=>({open:0===ew.listboxState,disabled:W,value:ec}),[ew,W,ec]),eT=(0,ed.z)(a=>{let R=ew.options.find(R=>R.id===a);R&&eF(R.dataRef.current.value)}),eI=(0,ed.z)(()=>{if(null!==ew.activeOptionIndex){let{dataRef:a,id:R}=ew.options[ew.activeOptionIndex];eF(a.current.value),eh({type:2,focus:en.T.Specific,id:R})}}),eC=(0,ed.z)(()=>eh({type:0})),eM=(0,ed.z)(()=>eh({type:1})),eA=(0,ed.z)((a,R,O)=>a===en.T.Specific?eh({type:2,focus:en.T.Specific,id:R,trigger:O}):eh({type:2,focus:a,trigger:O})),eL=(0,ed.z)((a,R)=>(eh({type:5,id:a,dataRef:R}),()=>eh({type:6,id:a}))),ek=(0,ed.z)(a=>(eh({type:7,id:a}),()=>eh({type:7,id:null}))),eF=(0,ed.z)(a=>(0,X.E)(ew.mode,{0:()=>null==ep?void 0:ep(a),1(){let R=ew.value.slice(),O=R.findIndex(R=>eR(R,a));return -1===O?R.push(a):R.splice(O,1),null==ep?void 0:ep(R)}})),eD=(0,ed.z)(a=>eh({type:3,value:a})),e_=(0,ed.z)(()=>eh({type:4})),eN=(0,V.useMemo)(()=>({onChange:eF,registerOption:eL,registerLabel:ek,goToOption:eA,closeListbox:eM,openListbox:eC,selectActiveOption:eI,selectOption:eT,search:eD,clearSearch:e_}),[]),ez=(0,V.useRef)(null),ej=(0,G.G)();return(0,V.useEffect)(()=>{ez.current&&void 0!==k&&ej.addEventListener(ez.current,"reset",()=>{eF(k)})},[ez,eF]),V.createElement(ey.Provider,{value:eN},V.createElement(eE.Provider,{value:ew},V.createElement(ei.up,{value:(0,X.E)(ew.listboxState,{0:ei.ZM.Open,1:ei.ZM.Closed})},null!=N&&null!=ec&&(0,es.t)({[N]:ec}).map(([a,R],O)=>V.createElement(eu._,{features:eu.A.Hidden,ref:0===O?a=>{var R;ez.current=null!=(R=null==a?void 0:a.closest("form"))?R:null}:void 0,...(0,Z.oA)({key:a,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:a,value:R})})),(0,Z.sY)({ourProps:{ref:el},theirProps:et,slot:eP,defaultTag:eS,name:"Listbox"}))))}),{Button:(0,Z.yV)(function(a,R){var O;let k=(0,W.M)(),{id:N=`headlessui-listbox-button-${k}`,...z}=a,j=B("Listbox.Button"),K=U("Listbox.Button"),X=(0,J.T)(j.buttonRef,R),ee=(0,G.G)(),eo=(0,ed.z)(a=>{switch(a.key){case et.R.Space:case et.R.Enter:case et.R.ArrowDown:a.preventDefault(),K.openListbox(),ee.nextFrame(()=>{j.value||K.goToOption(en.T.First)});break;case et.R.ArrowUp:a.preventDefault(),K.openListbox(),ee.nextFrame(()=>{j.value||K.goToOption(en.T.Last)})}}),ei=(0,ed.z)(a=>{a.key===et.R.Space&&a.preventDefault()}),ea=(0,ed.z)(a=>{if((0,er.P)(a.currentTarget))return a.preventDefault();0===j.listboxState?(K.closeListbox(),ee.nextFrame(()=>{var a;return null==(a=j.buttonRef.current)?void 0:a.focus({preventScroll:!0})})):(a.preventDefault(),K.openListbox())}),eu=(0,q.v)(()=>{if(j.labelId)return[j.labelId,N].join(" ")},[j.labelId,N]),es=(0,V.useMemo)(()=>({open:0===j.listboxState,disabled:j.disabled,value:j.value}),[j]),ec={ref:X,id:N,type:(0,el.f)(a,j.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(O=j.optionsRef.current)?void 0:O.id,"aria-expanded":j.disabled?void 0:0===j.listboxState,"aria-labelledby":eu,disabled:j.disabled,onKeyDown:eo,onKeyUp:ei,onClick:ea};return(0,Z.sY)({ourProps:ec,theirProps:z,slot:es,defaultTag:"button",name:"Listbox.Button"})}),Label:(0,Z.yV)(function(a,R){let O=(0,W.M)(),{id:k=`headlessui-listbox-label-${O}`,...N}=a,z=B("Listbox.Label"),j=U("Listbox.Label"),G=(0,J.T)(z.labelRef,R);(0,K.e)(()=>j.registerLabel(k),[k]);let q=(0,ed.z)(()=>{var a;return null==(a=z.buttonRef.current)?void 0:a.focus({preventScroll:!0})}),X=(0,V.useMemo)(()=>({open:0===z.listboxState,disabled:z.disabled}),[z]);return(0,Z.sY)({ourProps:{ref:G,id:k,onClick:q},theirProps:N,slot:X,defaultTag:"label",name:"Listbox.Label"})}),Options:(0,Z.yV)(function(a,R){var O;let k=(0,W.M)(),{id:N=`headlessui-listbox-options-${k}`,...z}=a,j=B("Listbox.Options"),K=U("Listbox.Options"),er=(0,J.T)(j.optionsRef,R),eo=(0,G.G)(),el=(0,G.G)(),ea=(0,ei.oJ)(),eu=null!==ea?(ea&ei.ZM.Open)===ei.ZM.Open:0===j.listboxState;(0,V.useEffect)(()=>{var a;let R=j.optionsRef.current;R&&0===j.listboxState&&R!==(null==(a=(0,ec.r)(R))?void 0:a.activeElement)&&R.focus({preventScroll:!0})},[j.listboxState,j.optionsRef]);let es=(0,ed.z)(a=>{switch(el.dispose(),a.key){case et.R.Space:if(""!==j.searchQuery)return a.preventDefault(),a.stopPropagation(),K.search(a.key);case et.R.Enter:if(a.preventDefault(),a.stopPropagation(),null!==j.activeOptionIndex){let{dataRef:a}=j.options[j.activeOptionIndex];K.onChange(a.current.value)}0===j.mode&&(K.closeListbox(),(0,ee.k)().nextFrame(()=>{var a;return null==(a=j.buttonRef.current)?void 0:a.focus({preventScroll:!0})}));break;case(0,X.E)(j.orientation,{vertical:et.R.ArrowDown,horizontal:et.R.ArrowRight}):return a.preventDefault(),a.stopPropagation(),K.goToOption(en.T.Next);case(0,X.E)(j.orientation,{vertical:et.R.ArrowUp,horizontal:et.R.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),K.goToOption(en.T.Previous);case et.R.Home:case et.R.PageUp:return a.preventDefault(),a.stopPropagation(),K.goToOption(en.T.First);case et.R.End:case et.R.PageDown:return a.preventDefault(),a.stopPropagation(),K.goToOption(en.T.Last);case et.R.Escape:return a.preventDefault(),a.stopPropagation(),K.closeListbox(),eo.nextFrame(()=>{var a;return null==(a=j.buttonRef.current)?void 0:a.focus({preventScroll:!0})});case et.R.Tab:a.preventDefault(),a.stopPropagation();break;default:1===a.key.length&&(K.search(a.key),el.setTimeout(()=>K.clearSearch(),350))}}),ef=(0,q.v)(()=>{var a,R,O;return null!=(O=null==(a=j.labelRef.current)?void 0:a.id)?O:null==(R=j.buttonRef.current)?void 0:R.id},[j.labelRef.current,j.buttonRef.current]),ep=(0,V.useMemo)(()=>({open:0===j.listboxState}),[j]),ev={"aria-activedescendant":null===j.activeOptionIndex||null==(O=j.options[j.activeOptionIndex])?void 0:O.id,"aria-multiselectable":1===j.mode||void 0,"aria-labelledby":ef,"aria-orientation":j.orientation,id:N,onKeyDown:es,role:"listbox",tabIndex:0,ref:er};return(0,Z.sY)({ourProps:ev,theirProps:z,slot:ep,defaultTag:"ul",features:eR,visible:eu,name:"Listbox.Options"})}),Option:(0,Z.yV)(function(a,R){let O=(0,W.M)(),{id:k=`headlessui-listbox-option-${O}`,disabled:N=!1,value:z,...j}=a,G=B("Listbox.Option"),q=U("Listbox.Option"),X=null!==G.activeOptionIndex&&G.options[G.activeOptionIndex].id===k,et=G.isSelected(z),er=(0,V.useRef)(null),eo=(0,ep.E)({disabled:N,value:z,domRef:er,get textValue(){var ei,el;return null==(el=null==(ei=er.current)?void 0:ei.textContent)?void 0:el.toLowerCase()}}),ea=(0,J.T)(R,er);(0,K.e)(()=>{if(0!==G.listboxState||!X||0===G.activationTrigger)return;let a=(0,ee.k)();return a.requestAnimationFrame(()=>{var a,R;null==(R=null==(a=er.current)?void 0:a.scrollIntoView)||R.call(a,{block:"nearest"})}),a.dispose},[er,X,G.listboxState,G.activationTrigger,G.activeOptionIndex]),(0,K.e)(()=>q.registerOption(k,eo),[eo,k]);let eu=(0,ed.z)(a=>{if(N)return a.preventDefault();q.onChange(z),0===G.mode&&(q.closeListbox(),(0,ee.k)().nextFrame(()=>{var a;return null==(a=G.buttonRef.current)?void 0:a.focus({preventScroll:!0})}))}),es=(0,ed.z)(()=>{if(N)return q.goToOption(en.T.Nothing);q.goToOption(en.T.Specific,k)}),ec=(0,ev.g)(),ef=(0,ed.z)(a=>ec.update(a)),eh=(0,ed.z)(a=>{ec.wasMoved(a)&&(N||X||q.goToOption(en.T.Specific,k,0))}),eg=(0,ed.z)(a=>{ec.wasMoved(a)&&(N||X&&q.goToOption(en.T.Nothing))}),em=(0,V.useMemo)(()=>({active:X,selected:et,disabled:N}),[X,et,N]);return(0,Z.sY)({ourProps:{id:k,ref:ea,role:"option",tabIndex:!0===N?void 0:-1,"aria-disabled":!0===N||void 0,"aria-selected":et,disabled:void 0,onClick:eu,onFocus:es,onPointerEnter:ef,onMouseEnter:ef,onPointerMove:eh,onMouseMove:eh,onPointerLeave:eg,onMouseLeave:eg},theirProps:j,slot:em,defaultTag:"li",name:"Listbox.Option"})})})},39708:function(a,R,O){"use strict";O.d(R,{v:function(){return eb}});var k,N,z,j=O(2784),V=O(3703),G=O(90544),W=O(6173),K=O(58314),q=O(88064),J=O(33401),Z=O(80586),X=O(99108),ee=O(13199),et=O(15426),en=O(52929),er=O(32994),eo=O(68685),ei=O(47215),el=O(37352),ea=O(70592),eu=O(55559),es=O(82121),ec=((k=ec||{})[k.Open=0]="Open",k[k.Closed=1]="Closed",k),ed=((N=ed||{})[N.Pointer=0]="Pointer",N[N.Other=1]="Other",N),ef=((z=ef||{})[z.OpenMenu=0]="OpenMenu",z[z.CloseMenu=1]="CloseMenu",z[z.GoToItem=2]="GoToItem",z[z.Search=3]="Search",z[z.ClearSearch=4]="ClearSearch",z[z.RegisterItem=5]="RegisterItem",z[z.UnregisterItem=6]="UnregisterItem",z);function w(a,R=a=>a){let O=null!==a.activeItemIndex?a.items[a.activeItemIndex]:null,k=(0,en.z2)(R(a.items.slice()),a=>a.dataRef.current.domRef.current),N=O?k.indexOf(O):null;return -1===N&&(N=null),{items:k,activeItemIndex:N}}let ep={1:a=>1===a.menuState?a:{...a,activeItemIndex:null,menuState:1},0:a=>0===a.menuState?a:{...a,menuState:0},2:(a,R)=>{var O;let k=w(a),N=(0,ee.d)(R,{resolveItems:()=>k.items,resolveActiveIndex:()=>k.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...a,...k,searchQuery:"",activeItemIndex:N,activationTrigger:null!=(O=R.trigger)?O:1}},3:(a,R)=>{let O=""!==a.searchQuery?0:1,k=a.searchQuery+R.value.toLowerCase(),N=(null!==a.activeItemIndex?a.items.slice(a.activeItemIndex+O).concat(a.items.slice(0,a.activeItemIndex+O)):a.items).find(a=>{var R;return(null==(R=a.dataRef.current.textValue)?void 0:R.startsWith(k))&&!a.dataRef.current.disabled}),z=N?a.items.indexOf(N):-1;return -1===z||z===a.activeItemIndex?{...a,searchQuery:k}:{...a,searchQuery:k,activeItemIndex:z,activationTrigger:1}},4:a=>""===a.searchQuery?a:{...a,searchQuery:"",searchActiveItemIndex:null},5:(a,R)=>{let O=w(a,a=>[...a,{id:R.id,dataRef:R.dataRef}]);return{...a,...O}},6:(a,R)=>{let O=w(a,a=>{let O=a.findIndex(a=>a.id===R.id);return -1!==O&&a.splice(O,1),a});return{...a,...O,activationTrigger:1}}},ev=(0,j.createContext)(null);function F(a){let R=(0,j.useContext)(ev);if(null===R){let R=Error(`<${a} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,F),R}return R}function fe(a,R){return(0,V.E)(R.type,ep,a,R)}ev.displayName="MenuContext";let eh=j.Fragment,eg=G.AN.RenderStrategy|G.AN.Static,em=j.Fragment,eb=Object.assign((0,G.yV)(function(a,R){let O=(0,j.useReducer)(fe,{menuState:1,buttonRef:(0,j.createRef)(),itemsRef:(0,j.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:k,itemsRef:N,buttonRef:z},W]=O,K=(0,J.T)(R);(0,er.O)([z,N],(a,R)=>{var O;W({type:1}),(0,en.sP)(R,en.tJ.Loose)||(a.preventDefault(),null==(O=z.current)||O.focus())},0===k);let q=(0,eu.z)(()=>{W({type:1})}),Z=(0,j.useMemo)(()=>({open:0===k,close:q}),[k,q]);return j.createElement(ev.Provider,{value:O},j.createElement(ei.up,{value:(0,V.E)(k,{0:ei.ZM.Open,1:ei.ZM.Closed})},(0,G.sY)({ourProps:{ref:K},theirProps:a,slot:Z,defaultTag:eh,name:"Menu"})))}),{Button:(0,G.yV)(function(a,R){var O;let k=(0,Z.M)(),{id:N=`headlessui-menu-button-${k}`,...z}=a,[V,W]=F("Menu.Button"),q=(0,J.T)(V.buttonRef,R),en=(0,K.G)(),er=(0,eu.z)(a=>{switch(a.key){case X.R.Space:case X.R.Enter:case X.R.ArrowDown:a.preventDefault(),a.stopPropagation(),W({type:0}),en.nextFrame(()=>W({type:2,focus:ee.T.First}));break;case X.R.ArrowUp:a.preventDefault(),a.stopPropagation(),W({type:0}),en.nextFrame(()=>W({type:2,focus:ee.T.Last}))}}),eo=(0,eu.z)(a=>{a.key===X.R.Space&&a.preventDefault()}),ei=(0,eu.z)(R=>{if((0,et.P)(R.currentTarget))return R.preventDefault();a.disabled||(0===V.menuState?(W({type:1}),en.nextFrame(()=>{var a;return null==(a=V.buttonRef.current)?void 0:a.focus({preventScroll:!0})})):(R.preventDefault(),W({type:0})))}),ea=(0,j.useMemo)(()=>({open:0===V.menuState}),[V]),es={ref:q,id:N,type:(0,el.f)(a,V.buttonRef),"aria-haspopup":"menu","aria-controls":null==(O=V.itemsRef.current)?void 0:O.id,"aria-expanded":a.disabled?void 0:0===V.menuState,onKeyDown:er,onKeyUp:eo,onClick:ei};return(0,G.sY)({ourProps:es,theirProps:z,slot:ea,defaultTag:"button",name:"Menu.Button"})}),Items:(0,G.yV)(function(a,R){var O,k;let N=(0,Z.M)(),{id:z=`headlessui-menu-items-${N}`,...V}=a,[q,et]=F("Menu.Items"),er=(0,J.T)(q.itemsRef,R),el=(0,ea.i)(q.itemsRef),es=(0,K.G)(),ec=(0,ei.oJ)(),ed=null!==ec?(ec&ei.ZM.Open)===ei.ZM.Open:0===q.menuState;(0,j.useEffect)(()=>{let a=q.itemsRef.current;a&&0===q.menuState&&a!==(null==el?void 0:el.activeElement)&&a.focus({preventScroll:!0})},[q.menuState,q.itemsRef,el]),(0,eo.B)({container:q.itemsRef.current,enabled:0===q.menuState,accept:a=>"menuitem"===a.getAttribute("role")?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(a){a.setAttribute("role","none")}});let ef=(0,eu.z)(a=>{var R,O;switch(es.dispose(),a.key){case X.R.Space:if(""!==q.searchQuery)return a.preventDefault(),a.stopPropagation(),et({type:3,value:a.key});case X.R.Enter:if(a.preventDefault(),a.stopPropagation(),et({type:1}),null!==q.activeItemIndex){let{dataRef:a}=q.items[q.activeItemIndex];null==(O=null==(R=a.current)?void 0:R.domRef.current)||O.click()}(0,en.wI)(q.buttonRef.current);break;case X.R.ArrowDown:return a.preventDefault(),a.stopPropagation(),et({type:2,focus:ee.T.Next});case X.R.ArrowUp:return a.preventDefault(),a.stopPropagation(),et({type:2,focus:ee.T.Previous});case X.R.Home:case X.R.PageUp:return a.preventDefault(),a.stopPropagation(),et({type:2,focus:ee.T.First});case X.R.End:case X.R.PageDown:return a.preventDefault(),a.stopPropagation(),et({type:2,focus:ee.T.Last});case X.R.Escape:a.preventDefault(),a.stopPropagation(),et({type:1}),(0,W.k)().nextFrame(()=>{var a;return null==(a=q.buttonRef.current)?void 0:a.focus({preventScroll:!0})});break;case X.R.Tab:a.preventDefault(),a.stopPropagation(),et({type:1}),(0,W.k)().nextFrame(()=>{(0,en.EO)(q.buttonRef.current,a.shiftKey?en.TO.Previous:en.TO.Next)});break;default:1===a.key.length&&(et({type:3,value:a.key}),es.setTimeout(()=>et({type:4}),350))}}),ep=(0,eu.z)(a=>{a.key===X.R.Space&&a.preventDefault()}),ev=(0,j.useMemo)(()=>({open:0===q.menuState}),[q]),eh={"aria-activedescendant":null===q.activeItemIndex||null==(O=q.items[q.activeItemIndex])?void 0:O.id,"aria-labelledby":null==(k=q.buttonRef.current)?void 0:k.id,id:z,onKeyDown:ef,onKeyUp:ep,role:"menu",tabIndex:0,ref:er};return(0,G.sY)({ourProps:eh,theirProps:V,slot:ev,defaultTag:"div",features:eg,visible:ed,name:"Menu.Items"})}),Item:(0,G.yV)(function(a,R){let O=(0,Z.M)(),{id:k=`headlessui-menu-item-${O}`,disabled:N=!1,...z}=a,[V,K]=F("Menu.Item"),X=null!==V.activeItemIndex&&V.items[V.activeItemIndex].id===k,et=(0,j.useRef)(null),er=(0,J.T)(R,et);(0,q.e)(()=>{if(0!==V.menuState||!X||0===V.activationTrigger)return;let a=(0,W.k)();return a.requestAnimationFrame(()=>{var a,R;null==(R=null==(a=et.current)?void 0:a.scrollIntoView)||R.call(a,{block:"nearest"})}),a.dispose},[et,X,V.menuState,V.activationTrigger,V.activeItemIndex]);let eo=(0,j.useRef)({disabled:N,domRef:et});(0,q.e)(()=>{eo.current.disabled=N},[eo,N]),(0,q.e)(()=>{var a,R;eo.current.textValue=null==(R=null==(a=et.current)?void 0:a.textContent)?void 0:R.toLowerCase()},[eo,et]),(0,q.e)(()=>(K({type:5,id:k,dataRef:eo}),()=>K({type:6,id:k})),[eo,k]);let ei=(0,eu.z)(()=>{K({type:1})}),el=(0,eu.z)(a=>{if(N)return a.preventDefault();K({type:1}),(0,en.wI)(V.buttonRef.current)}),ea=(0,eu.z)(()=>{if(N)return K({type:2,focus:ee.T.Nothing});K({type:2,focus:ee.T.Specific,id:k})}),ec=(0,es.g)(),ed=(0,eu.z)(a=>ec.update(a)),ef=(0,eu.z)(a=>{ec.wasMoved(a)&&(N||X||K({type:2,focus:ee.T.Specific,id:k,trigger:0}))}),ep=(0,eu.z)(a=>{ec.wasMoved(a)&&(N||X&&K({type:2,focus:ee.T.Nothing}))}),ev=(0,j.useMemo)(()=>({active:X,disabled:N,close:ei}),[X,N,ei]);return(0,G.sY)({ourProps:{id:k,ref:er,role:"menuitem",tabIndex:!0===N?void 0:-1,"aria-disabled":!0===N||void 0,disabled:void 0,onClick:el,onFocus:ea,onPointerEnter:ed,onMouseEnter:ed,onPointerMove:ef,onMouseMove:ef,onPointerLeave:ep,onMouseLeave:ep},theirProps:z,slot:ev,defaultTag:em,name:"Menu.Item"})})})},43913:function(a,R,O){"use strict";O.d(R,{J:function(){return eb}});var k,N,z=O(2784),j=O(3703),V=O(90544),G=O(33401),W=O(80586),K=O(99108),q=O(15426),J=O(52929),Z=O(47215),X=O(37352),ee=O(32994),et=O(29833),en=O(70592),er=O(79410),eo=O(36799),ei=O(55559),el=O(41558),ea=O(61742),eu=O(88064),es=((k=es||{})[k.Open=0]="Open",k[k.Closed=1]="Closed",k),ec=((N=ec||{})[N.TogglePopover=0]="TogglePopover",N[N.ClosePopover=1]="ClosePopover",N[N.SetButton=2]="SetButton",N[N.SetButtonId=3]="SetButtonId",N[N.SetPanel=4]="SetPanel",N[N.SetPanelId=5]="SetPanelId",N);let ed={0:a=>({...a,popoverState:(0,j.E)(a.popoverState,{0:1,1:0})}),1:a=>1===a.popoverState?a:{...a,popoverState:1},2:(a,R)=>a.button===R.button?a:{...a,button:R.button},3:(a,R)=>a.buttonId===R.buttonId?a:{...a,buttonId:R.buttonId},4:(a,R)=>a.panel===R.panel?a:{...a,panel:R.panel},5:(a,R)=>a.panelId===R.panelId?a:{...a,panelId:R.panelId}},ef=(0,z.createContext)(null);function Q(a){let R=(0,z.useContext)(ef);if(null===R){let R=Error(`<${a} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,Q),R}return R}ef.displayName="PopoverContext";let ep=(0,z.createContext)(null);function pe(a){let R=(0,z.useContext)(ep);if(null===R){let R=Error(`<${a} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(R,pe),R}return R}ep.displayName="PopoverAPIContext";let ev=(0,z.createContext)(null);function ve(){return(0,z.useContext)(ev)}ev.displayName="PopoverGroupContext";let eh=(0,z.createContext)(null);function Me(a,R){return(0,j.E)(R.type,ed,a,R)}eh.displayName="PopoverPanelContext";let eg=V.AN.RenderStrategy|V.AN.Static,em=V.AN.RenderStrategy|V.AN.Static,eb=Object.assign((0,V.yV)(function(a,R){var O;let k=(0,z.useRef)(null),N=(0,G.T)(R,(0,G.h)(a=>{k.current=a})),W=(0,z.useRef)([]),K=(0,z.useReducer)(Me,{popoverState:1,buttons:W,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,z.createRef)(),afterPanelSentinel:(0,z.createRef)()}),[{popoverState:q,button:X,buttonId:et,panel:eo,panelId:el,beforePanelSentinel:eu,afterPanelSentinel:es},ec]=K,ed=(0,en.i)(null!=(O=k.current)?O:X),ev=(0,z.useMemo)(()=>{if(!X||!eo)return!1;for(let a of document.querySelectorAll("body > *"))if(Number(null==a?void 0:a.contains(X))^Number(null==a?void 0:a.contains(eo)))return!0;let a=(0,J.GO)(),R=a.indexOf(X),O=(R+a.length-1)%a.length,k=(R+1)%a.length,N=a[O],z=a[k];return!eo.contains(N)&&!eo.contains(z)},[X,eo]),eg=(0,ea.E)(et),em=(0,ea.E)(el),eb=(0,z.useMemo)(()=>({buttonId:eg,panelId:em,close:()=>ec({type:1})}),[eg,em,ec]),ex=ve(),ey=null==ex?void 0:ex.registerPopover,eE=(0,ei.z)(()=>{var a;return null!=(a=null==ex?void 0:ex.isFocusWithinPopoverGroup())?a:(null==ed?void 0:ed.activeElement)&&((null==X?void 0:X.contains(ed.activeElement))||(null==eo?void 0:eo.contains(ed.activeElement)))});(0,z.useEffect)(()=>null==ey?void 0:ey(eb),[ey,eb]),(0,er.O)(null==ed?void 0:ed.defaultView,"focus",a=>{var R,O,k,N;0===q&&(eE()||X&&eo&&a.target!==window&&(null!=(O=null==(R=eu.current)?void 0:R.contains)&&O.call(R,a.target)||null!=(N=null==(k=es.current)?void 0:k.contains)&&N.call(k,a.target)||ec({type:1})))},!0),(0,ee.O)([X,eo],(a,R)=>{ec({type:1}),(0,J.sP)(R,J.tJ.Loose)||(a.preventDefault(),null==X||X.focus())},0===q);let eS=(0,ei.z)(a=>{ec({type:1});let R=a?a instanceof HTMLElement?a:"current"in a&&a.current instanceof HTMLElement?a.current:X:X;null==R||R.focus()}),eR=(0,z.useMemo)(()=>({close:eS,isPortalled:ev}),[eS,ev]),eO=(0,z.useMemo)(()=>({open:0===q,close:eS}),[q,eS]);return z.createElement(eh.Provider,{value:null},z.createElement(ef.Provider,{value:K},z.createElement(ep.Provider,{value:eR},z.createElement(Z.up,{value:(0,j.E)(q,{0:Z.ZM.Open,1:Z.ZM.Closed})},(0,V.sY)({ourProps:{ref:N},theirProps:a,slot:eO,defaultTag:"div",name:"Popover"})))))}),{Button:(0,V.yV)(function(a,R){let O=(0,W.M)(),{id:k=`headlessui-popover-button-${O}`,...N}=a,[Z,ee]=Q("Popover.Button"),{isPortalled:et}=pe("Popover.Button"),er=(0,z.useRef)(null),ea=`headlessui-focus-sentinel-${(0,W.M)()}`,eu=ve(),es=null==eu?void 0:eu.closeOthers,ec=null!==(0,z.useContext)(eh);(0,z.useEffect)(()=>{if(!ec)return ee({type:3,buttonId:k}),()=>{ee({type:3,buttonId:null})}},[ec,k,ee]);let[ed]=(0,z.useState)(()=>Symbol()),ef=(0,G.T)(er,R,ec?null:a=>{if(a)Z.buttons.current.push(ed);else{let a=Z.buttons.current.indexOf(ed);-1!==a&&Z.buttons.current.splice(a,1)}Z.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),a&&ee({type:2,button:a})}),ep=(0,G.T)(er,R),ev=(0,en.i)(er),eg=(0,ei.z)(a=>{var R,O,k;if(ec){if(1===Z.popoverState)return;switch(a.key){case K.R.Space:case K.R.Enter:a.preventDefault(),null==(O=(R=a.target).click)||O.call(R),ee({type:1}),null==(k=Z.button)||k.focus()}}else switch(a.key){case K.R.Space:case K.R.Enter:a.preventDefault(),a.stopPropagation(),1===Z.popoverState&&(null==es||es(Z.buttonId)),ee({type:0});break;case K.R.Escape:if(0!==Z.popoverState)return null==es?void 0:es(Z.buttonId);if(!er.current||null!=ev&&ev.activeElement&&!er.current.contains(ev.activeElement))return;a.preventDefault(),a.stopPropagation(),ee({type:1})}}),em=(0,ei.z)(a=>{ec||a.key===K.R.Space&&a.preventDefault()}),eb=(0,ei.z)(R=>{var O,k;(0,q.P)(R.currentTarget)||a.disabled||(ec?(ee({type:1}),null==(O=Z.button)||O.focus()):(R.preventDefault(),R.stopPropagation(),1===Z.popoverState&&(null==es||es(Z.buttonId)),ee({type:0}),null==(k=Z.button)||k.focus()))}),ex=(0,ei.z)(a=>{a.preventDefault(),a.stopPropagation()}),ey=0===Z.popoverState,eE=(0,z.useMemo)(()=>({open:ey}),[ey]),eS=(0,X.f)(a,er),eR=ec?{ref:ep,type:eS,onKeyDown:eg,onClick:eb}:{ref:ef,id:Z.buttonId,type:eS,"aria-expanded":a.disabled?void 0:0===Z.popoverState,"aria-controls":Z.panel?Z.panelId:void 0,onKeyDown:eg,onKeyUp:em,onClick:eb,onMouseDown:ex},eO=(0,el.l)(),ew=(0,ei.z)(()=>{let a=Z.panel;a&&(0,j.E)(eO.current,{[el.N.Forwards]:()=>(0,J.jA)(a,J.TO.First),[el.N.Backwards]:()=>(0,J.jA)(a,J.TO.Last)})===J.fE.Error&&(0,J.jA)((0,J.GO)().filter(a=>"true"!==a.dataset.headlessuiFocusGuard),(0,j.E)(eO.current,{[el.N.Forwards]:J.TO.Next,[el.N.Backwards]:J.TO.Previous}),{relativeTo:Z.button})});return z.createElement(z.Fragment,null,(0,V.sY)({ourProps:eR,theirProps:N,slot:eE,defaultTag:"button",name:"Popover.Button"}),ey&&!ec&&et&&z.createElement(eo._,{id:ea,features:eo.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:ew}))}),Overlay:(0,V.yV)(function(a,R){let O=(0,W.M)(),{id:k=`headlessui-popover-overlay-${O}`,...N}=a,[{popoverState:j},K]=Q("Popover.Overlay"),J=(0,G.T)(R),X=(0,Z.oJ)(),ee=null!==X?(X&Z.ZM.Open)===Z.ZM.Open:0===j,et=(0,ei.z)(a=>{if((0,q.P)(a.currentTarget))return a.preventDefault();K({type:1})}),en=(0,z.useMemo)(()=>({open:0===j}),[j]);return(0,V.sY)({ourProps:{ref:J,id:k,"aria-hidden":!0,onClick:et},theirProps:N,slot:en,defaultTag:"div",features:eg,visible:ee,name:"Popover.Overlay"})}),Panel:(0,V.yV)(function(a,R){let O=(0,W.M)(),{id:k=`headlessui-popover-panel-${O}`,focus:N=!1,...q}=a,[X,ee]=Q("Popover.Panel"),{close:et,isPortalled:er}=pe("Popover.Panel"),ea=`headlessui-focus-sentinel-before-${(0,W.M)()}`,es=`headlessui-focus-sentinel-after-${(0,W.M)()}`,ec=(0,z.useRef)(null),ed=(0,G.T)(ec,R,a=>{ee({type:4,panel:a})}),ef=(0,en.i)(ec);(0,eu.e)(()=>(ee({type:5,panelId:k}),()=>{ee({type:5,panelId:null})}),[k,ee]);let ep=(0,Z.oJ)(),ev=null!==ep?(ep&Z.ZM.Open)===Z.ZM.Open:0===X.popoverState,eg=(0,ei.z)(a=>{var R;if(a.key===K.R.Escape){if(0!==X.popoverState||!ec.current||null!=ef&&ef.activeElement&&!ec.current.contains(ef.activeElement))return;a.preventDefault(),a.stopPropagation(),ee({type:1}),null==(R=X.button)||R.focus()}});(0,z.useEffect)(()=>{var R;a.static||1===X.popoverState&&(null==(R=a.unmount)||R)&&ee({type:4,panel:null})},[X.popoverState,a.unmount,a.static,ee]),(0,z.useEffect)(()=>{if(!N||0!==X.popoverState||!ec.current)return;let a=null==ef?void 0:ef.activeElement;ec.current.contains(a)||(0,J.jA)(ec.current,J.TO.First)},[N,ec,X.popoverState]);let eb=(0,z.useMemo)(()=>({open:0===X.popoverState,close:et}),[X,et]),ex={ref:ed,id:k,onKeyDown:eg,onBlur:N&&0===X.popoverState?a=>{var R,O,k,N,z;let j=a.relatedTarget;j&&ec.current&&(null!=(R=ec.current)&&R.contains(j)||(ee({type:1}),(null!=(k=null==(O=X.beforePanelSentinel.current)?void 0:O.contains)&&k.call(O,j)||null!=(z=null==(N=X.afterPanelSentinel.current)?void 0:N.contains)&&z.call(N,j))&&j.focus({preventScroll:!0})))}:void 0,tabIndex:-1},ey=(0,el.l)(),eE=(0,ei.z)(()=>{let a=ec.current;a&&(0,j.E)(ey.current,{[el.N.Forwards]:()=>{var R;(0,J.jA)(a,J.TO.First)===J.fE.Error&&(null==(R=X.afterPanelSentinel.current)||R.focus())},[el.N.Backwards]:()=>{var a;null==(a=X.button)||a.focus({preventScroll:!0})}})}),eS=(0,ei.z)(()=>{let a=ec.current;a&&(0,j.E)(ey.current,{[el.N.Forwards]:()=>{var a;if(!X.button)return;let R=(0,J.GO)(),O=R.indexOf(X.button),k=R.slice(0,O+1),N=[...R.slice(O+1),...k];for(let R of N.slice())if("true"===R.dataset.headlessuiFocusGuard||null!=(a=X.panel)&&a.contains(R)){let a=N.indexOf(R);-1!==a&&N.splice(a,1)}(0,J.jA)(N,J.TO.First,{sorted:!1})},[el.N.Backwards]:()=>{var R;(0,J.jA)(a,J.TO.Previous)===J.fE.Error&&(null==(R=X.button)||R.focus())}})});return z.createElement(eh.Provider,{value:k},ev&&er&&z.createElement(eo._,{id:ea,ref:X.beforePanelSentinel,features:eo.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:eE}),(0,V.sY)({ourProps:ex,theirProps:q,slot:eb,defaultTag:"div",features:em,visible:ev,name:"Popover.Panel"}),ev&&er&&z.createElement(eo._,{id:es,ref:X.afterPanelSentinel,features:eo.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:eS}))}),Group:(0,V.yV)(function(a,R){let O=(0,z.useRef)(null),k=(0,G.T)(O,R),[N,j]=(0,z.useState)([]),W=(0,ei.z)(a=>{j(R=>{let O=R.indexOf(a);if(-1!==O){let a=R.slice();return a.splice(O,1),a}return R})}),K=(0,ei.z)(a=>(j(R=>[...R,a]),()=>W(a))),q=(0,ei.z)(()=>{var a;let R=(0,et.r)(O);if(!R)return!1;let k=R.activeElement;return!!(null!=(a=O.current)&&a.contains(k))||N.some(a=>{var O,N;return(null==(O=R.getElementById(a.buttonId.current))?void 0:O.contains(k))||(null==(N=R.getElementById(a.panelId.current))?void 0:N.contains(k))})}),J=(0,ei.z)(a=>{for(let R of N)R.buttonId.current!==a&&R.close()}),Z=(0,z.useMemo)(()=>({registerPopover:K,unregisterPopover:W,isFocusWithinPopoverGroup:q,closeOthers:J}),[K,W,q,J]),X=(0,z.useMemo)(()=>({}),[]);return z.createElement(ev.Provider,{value:Z},(0,V.sY)({ourProps:{ref:k},theirProps:a,slot:X,defaultTag:"div",name:"Popover.Group"}))})})},68810:function(a,R,O){"use strict";O.d(R,{u:function(){return ef}});var k,N=O(2784),z=O(90544),j=O(47215),V=O(3703),G=O(81061),W=O(88064),K=O(61742),q=O(76460),J=O(33401),Z=O(6173);function d(a,...R){a&&R.length>0&&a.classList.add(...R)}function v(a,...R){a&&R.length>0&&a.classList.remove(...R)}var X=O(58314),ee=O(55559),et=O(94020),en=O(64727),er=O(57870);function S(a=""){return a.split(" ").filter(a=>a.trim().length>1)}let eo=(0,N.createContext)(null);eo.displayName="TransitionContext";var ei=((k=ei||{}).Visible="visible",k.Hidden="hidden",k);let el=(0,N.createContext)(null);function _(a){return"children"in a?_(a.children):a.current.filter(({el:a})=>null!==a.current).filter(({state:a})=>"visible"===a).length>0}function ne(a,R){let O=(0,K.E)(a),k=(0,N.useRef)([]),j=(0,G.t)(),W=(0,X.G)(),q=(0,ee.z)((a,R=z.l4.Hidden)=>{let N=k.current.findIndex(({el:R})=>R===a);-1!==N&&((0,V.E)(R,{[z.l4.Unmount](){k.current.splice(N,1)},[z.l4.Hidden](){k.current[N].state="hidden"}}),W.microTask(()=>{var a;!_(k)&&j.current&&(null==(a=O.current)||a.call(O))}))}),J=(0,ee.z)(a=>{let R=k.current.find(({el:R})=>R===a);return R?"visible"!==R.state&&(R.state="visible"):k.current.push({el:a,state:"visible"}),()=>q(a,z.l4.Unmount)}),Z=(0,N.useRef)([]),et=(0,N.useRef)(Promise.resolve()),en=(0,N.useRef)({enter:[],leave:[],idle:[]}),er=(0,ee.z)((a,O,k)=>{Z.current.splice(0),R&&(R.chains.current[O]=R.chains.current[O].filter(([R])=>R!==a)),null==R||R.chains.current[O].push([a,new Promise(a=>{Z.current.push(a)})]),null==R||R.chains.current[O].push([a,new Promise(a=>{Promise.all(en.current[O].map(([a,R])=>R)).then(()=>a())})]),"enter"===O?et.current=et.current.then(()=>null==R?void 0:R.wait.current).then(()=>k(O)):k(O)}),eo=(0,ee.z)((a,R,O)=>{Promise.all(en.current[R].splice(0).map(([a,R])=>R)).then(()=>{var a;null==(a=Z.current.shift())||a()}).then(()=>O(R))});return(0,N.useMemo)(()=>({children:k,register:J,unregister:q,onStart:er,onStop:eo,wait:et,chains:en}),[J,q,k,er,eo,en,et])}function xe(){}el.displayName="NestingContext";let ea=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function re(a){var R;let O={};for(let k of ea)O[k]=null!=(R=a[k])?R:xe;return O}let eu=z.AN.RenderStrategy,es=(0,z.yV)(function(a,R){let{show:O,appear:k=!1,unmount:V,...G}=a,K=(0,N.useRef)(null),Z=(0,J.T)(K,R);(0,q.H)();let X=(0,j.oJ)();if(void 0===O&&null!==X&&(O=(X&j.ZM.Open)===j.ZM.Open),![!0,!1].includes(O))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[ee,et]=(0,N.useState)(O?"visible":"hidden"),en=ne(()=>{et("hidden")}),[er,ei]=(0,N.useState)(!0),ea=(0,N.useRef)([O]);(0,W.e)(()=>{!1!==er&&ea.current[ea.current.length-1]!==O&&(ea.current.push(O),ei(!1))},[ea,O]);let es=(0,N.useMemo)(()=>({show:O,appear:k,initial:er}),[O,k,er]);(0,N.useEffect)(()=>{if(O)et("visible");else if(_(en)){let a=K.current;if(!a)return;let R=a.getBoundingClientRect();0===R.x&&0===R.y&&0===R.width&&0===R.height&&et("hidden")}else et("hidden")},[O,en]);let ed={unmount:V};return N.createElement(el.Provider,{value:en},N.createElement(eo.Provider,{value:es},(0,z.sY)({ourProps:{...ed,as:N.Fragment,children:N.createElement(ec,{ref:Z,...ed,...G})},theirProps:{},defaultTag:N.Fragment,features:eu,visible:"visible"===ee,name:"Transition"})))}),ec=(0,z.yV)(function(a,R){var O;let k,{beforeEnter:ei,afterEnter:ea,beforeLeave:es,afterLeave:ec,enter:ed,enterFrom:ef,enterTo:ep,entered:ev,leave:eh,leaveFrom:eg,leaveTo:em,...eb}=a,ex=(0,N.useRef)(null),ey=(0,J.T)(ex,R),eE=eb.unmount?z.l4.Unmount:z.l4.Hidden,{show:eS,appear:eR,initial:eO}=function(){let a=(0,N.useContext)(eo);if(null===a)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return a}(),[ew,eP]=(0,N.useState)(eS?"visible":"hidden"),eT=function(){let a=(0,N.useContext)(el);if(null===a)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return a}(),{register:eI,unregister:eC}=eT,eM=(0,N.useRef)(null);(0,N.useEffect)(()=>eI(ex),[eI,ex]),(0,N.useEffect)(()=>{if(eE===z.l4.Hidden&&ex.current){if(eS&&"visible"!==ew){eP("visible");return}return(0,V.E)(ew,{hidden:()=>eC(ex),visible:()=>eI(ex)})}},[ew,ex,eI,eC,eS,eE]);let eA=(0,K.E)({enter:S(ed),enterFrom:S(ef),enterTo:S(ep),entered:S(ev),leave:S(eh),leaveFrom:S(eg),leaveTo:S(em)}),eL=(O={beforeEnter:ei,afterEnter:ea,beforeLeave:es,afterLeave:ec},k=(0,N.useRef)(re(O)),(0,N.useEffect)(()=>{k.current=re(O)},[O]),k),ek=(0,q.H)();(0,N.useEffect)(()=>{if(ek&&"visible"===ew&&null===ex.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[ex,ew,ek]);let eF=eO&&!eR,eD=!ek||eF||eM.current===eS?"idle":eS?"enter":"leave",e_=(0,er.V)(0),eN=(0,ee.z)(a=>(0,V.E)(a,{enter:()=>{e_.addFlag(j.ZM.Opening),eL.current.beforeEnter()},leave:()=>{e_.addFlag(j.ZM.Closing),eL.current.beforeLeave()},idle:()=>{}})),ez=(0,ee.z)(a=>(0,V.E)(a,{enter:()=>{e_.removeFlag(j.ZM.Opening),eL.current.afterEnter()},leave:()=>{e_.removeFlag(j.ZM.Closing),eL.current.afterLeave()},idle:()=>{}})),ej=ne(()=>{eP("hidden"),eC(ex)},eT);(function({container:a,direction:R,classes:O,onStart:k,onStop:N}){let z=(0,G.t)(),j=(0,X.G)(),q=(0,K.E)(R);(0,W.e)(()=>{let R=(0,Z.k)();j.add(R.dispose);let G=a.current;if(G&&"idle"!==q.current&&z.current){var W,K,J;let a,z,j,X,ee,et,en;return R.dispose(),k.current(q.current),R.add((W=O.current,K="enter"===q.current,J=()=>{R.dispose(),N.current(q.current)},z=K?"enter":"leave",j=(0,Z.k)(),X=void 0!==J?(a={called:!1},(...R)=>{if(!a.called)return a.called=!0,J(...R)}):()=>{},"enter"===z&&(G.removeAttribute("hidden"),G.style.display=""),ee=(0,V.E)(z,{enter:()=>W.enter,leave:()=>W.leave}),et=(0,V.E)(z,{enter:()=>W.enterTo,leave:()=>W.leaveTo}),en=(0,V.E)(z,{enter:()=>W.enterFrom,leave:()=>W.leaveFrom}),v(G,...W.enter,...W.enterTo,...W.enterFrom,...W.leave,...W.leaveFrom,...W.leaveTo,...W.entered),d(G,...ee,...en),j.nextFrame(()=>{v(G,...en),d(G,...et),function(a,R){let O=(0,Z.k)();if(!a)return O.dispose;let{transitionDuration:k,transitionDelay:N}=getComputedStyle(a),[z,j]=[k,N].map(a=>{let[R=0]=a.split(",").filter(Boolean).map(a=>a.includes("ms")?parseFloat(a):1e3*parseFloat(a)).sort((a,R)=>R-a);return R}),V=z+j;if(0!==V){O.group(O=>{O.setTimeout(()=>{R(),O.dispose()},V),O.addEventListener(a,"transitionrun",a=>{a.target===a.currentTarget&&O.dispose()})});let k=O.addEventListener(a,"transitionend",a=>{a.target===a.currentTarget&&(R(),k())})}else R();O.add(()=>R()),O.dispose}(G,()=>(v(G,...ee),d(G,...W.entered),X()))}),j.dispose)),R.dispose}},[R])})({container:ex,classes:eA,direction:eD,onStart:(0,K.E)(a=>{ej.onStart(ex,a,eN)}),onStop:(0,K.E)(a=>{ej.onStop(ex,a,ez),"leave"!==a||_(ej)||(eP("hidden"),eC(ex))})}),(0,N.useEffect)(()=>{eF&&(eE===z.l4.Hidden?eM.current=null:eM.current=eS)},[eS,eF,ew]);let eB=eb;return eR&&eS&&en.O.isServer&&(eB={...eB,className:(0,et.A)(eb.className,...eA.current.enter,...eA.current.enterFrom)}),N.createElement(el.Provider,{value:ej},N.createElement(j.up,{value:(0,V.E)(ew,{visible:j.ZM.Open,hidden:j.ZM.Closed})|e_.flags},(0,z.sY)({ourProps:{ref:ey},theirProps:eB,defaultTag:"div",features:eu,visible:"visible"===ew,name:"Transition.Child"})))}),ed=(0,z.yV)(function(a,R){let O=null!==(0,N.useContext)(eo),k=null!==(0,j.oJ)();return N.createElement(N.Fragment,null,!O&&k?N.createElement(es,{ref:R,...a}):N.createElement(ec,{ref:R,...a}))}),ef=Object.assign(es,{Child:ed,Root:es})},70778:function(a,R,O){"use strict";O.d(R,{v:function(){return i}});var k=O(2784),N=O(88064),z=O(61742);function i(a,R){let[O,j]=(0,k.useState)(a),V=(0,z.E)(a);return(0,N.e)(()=>j(V.current),[V,j,...R]),O}},84407:function(a,R,O){"use strict";O.d(R,{q:function(){return T}});var k=O(2784),N=O(55559);function T(a,R,O){let[z,j]=(0,k.useState)(O),V=void 0!==a,G=(0,k.useRef)(V),W=(0,k.useRef)(!1),K=(0,k.useRef)(!1);return!V||G.current||W.current?V||!G.current||K.current||(K.current=!0,G.current=V,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(W.current=!0,G.current=V,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[V?a:z,(0,N.z)(a=>(V||j(a),null==R?void 0:R(a)))]}},58314:function(a,R,O){"use strict";O.d(R,{G:function(){return p}});var k=O(2784),N=O(6173);function p(){let[a]=(0,k.useState)(N.k);return(0,k.useEffect)(()=>()=>a.dispose(),[a]),a}},79410:function(a,R,O){"use strict";O.d(R,{O:function(){return E}});var k=O(2784),N=O(61742);function E(a,R,O,z){let j=(0,N.E)(O);(0,k.useEffect)(()=>{function r(a){j.current(a)}return(a=null!=a?a:window).addEventListener(R,r,z),()=>a.removeEventListener(R,r,z)},[a,R,z])}},55559:function(a,R,O){"use strict";O.d(R,{z:function(){return o}});var k=O(2784),N=O(61742);let o=function(a){let R=(0,N.E)(a);return k.useCallback((...a)=>R.current(...a),[R])}},57870:function(a,R,O){"use strict";O.d(R,{V:function(){return b}});var k=O(2784);function b(a=0){let[R,O]=(0,k.useState)(a),N=(0,k.useCallback)(a=>O(R=>R|a),[R]),z=(0,k.useCallback)(a=>!!(R&a),[R]);return{flags:R,addFlag:N,hasFlag:z,removeFlag:(0,k.useCallback)(a=>O(R=>R&~a),[O]),toggleFlag:(0,k.useCallback)(a=>O(R=>R^a),[O])}}},80586:function(a,R,O){"use strict";O.d(R,{M:function(){return G}});var k,N=O(2784),z=O(88064),j=O(76460),V=O(64727);let G=null!=(k=N.useId)?k:function(){let a=(0,j.H)(),[R,O]=N.useState(a?()=>V.O.nextId():null);return(0,z.e)(()=>{null===R&&O(V.O.nextId())},[R]),null!=R?""+R:void 0}},81061:function(a,R,O){"use strict";O.d(R,{t:function(){return f}});var k=O(2784),N=O(88064);function f(){let a=(0,k.useRef)(!1);return(0,N.e)(()=>(a.current=!0,()=>{a.current=!1}),[]),a}},88064:function(a,R,O){"use strict";O.d(R,{e:function(){return l}});var k=O(2784),N=O(64727);let l=(a,R)=>{N.O.isServer?(0,k.useEffect)(a,R):(0,k.useLayoutEffect)(a,R)}},61742:function(a,R,O){"use strict";O.d(R,{E:function(){return s}});var k=O(2784),N=O(88064);function s(a){let R=(0,k.useRef)(a);return(0,N.e)(()=>{R.current=a},[a]),R}},32994:function(a,R,O){"use strict";O.d(R,{O:function(){return L}});var k=O(2784),N=O(52929),z=O(61742);function d(a,R,O){let N=(0,z.E)(R);(0,k.useEffect)(()=>{function t(a){N.current(a)}return document.addEventListener(a,t,O),()=>document.removeEventListener(a,t,O)},[a,O])}function L(a,R,O=!0){let z=(0,k.useRef)(!1);function f(O,k){if(!z.current||O.defaultPrevented)return;let j=function r(a){return"function"==typeof a?r(a()):Array.isArray(a)||a instanceof Set?a:[a]}(a),V=k(O);if(null!==V&&V.getRootNode().contains(V)){for(let a of j){if(null===a)continue;let R=a instanceof HTMLElement?a:a.current;if(null!=R&&R.contains(V)||O.composed&&O.composedPath().includes(R))return}return(0,N.sP)(V,N.tJ.Loose)||-1===V.tabIndex||O.preventDefault(),R(O,V)}}(0,k.useEffect)(()=>{requestAnimationFrame(()=>{z.current=O})},[O]);let j=(0,k.useRef)(null);d("mousedown",a=>{var R,O;z.current&&(j.current=(null==(O=null==(R=a.composedPath)?void 0:R.call(a))?void 0:O[0])||a.target)},!0),d("click",a=>{j.current&&(f(a,()=>j.current),j.current=null)},!0),d("blur",a=>f(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}},70592:function(a,R,O){"use strict";O.d(R,{i:function(){return n}});var k=O(2784),N=O(29833);function n(...a){return(0,k.useMemo)(()=>(0,N.r)(...a),[...a])}},37352:function(a,R,O){"use strict";O.d(R,{f:function(){return s}});var k=O(2784),N=O(88064);function i(a){var R;if(a.type)return a.type;let O=null!=(R=a.as)?R:"button";if("string"==typeof O&&"button"===O.toLowerCase())return"button"}function s(a,R){let[O,z]=(0,k.useState)(()=>i(a));return(0,N.e)(()=>{z(i(a))},[a.type,a.as]),(0,N.e)(()=>{O||R.current&&R.current instanceof HTMLButtonElement&&!R.current.hasAttribute("type")&&z("button")},[O,R]),O}},76460:function(a,R,O){"use strict";O.d(R,{H:function(){return l}});var k=O(2784),N=O(64727);function l(){let[a,R]=(0,k.useState)(N.O.isHandoffComplete);return a&&!1===N.O.isHandoffComplete&&R(!1),(0,k.useEffect)(()=>{!0!==a&&R(!0)},[a]),(0,k.useEffect)(()=>N.O.handoff(),[]),a}},33401:function(a,R,O){"use strict";O.d(R,{T:function(){return y},h:function(){return T}});var k=O(2784),N=O(55559);let z=Symbol();function T(a,R=!0){return Object.assign(a,{[z]:R})}function y(...a){let R=(0,k.useRef)(a);(0,k.useEffect)(()=>{R.current=a},[a]);let O=(0,N.z)(a=>{for(let O of R.current)null!=O&&("function"==typeof O?O(a):O.current=a)});return a.every(a=>null==a||(null==a?void 0:a[z]))?void 0:O}},41558:function(a,R,O){"use strict";O.d(R,{N:function(){return j},l:function(){return n}});var k,N=O(2784),z=O(61742),j=((k=j||{})[k.Forwards=0]="Forwards",k[k.Backwards=1]="Backwards",k);function n(){var a;let R,O=(0,N.useRef)(0);return a="keydown",R=(0,z.E)(a=>{"Tab"===a.key&&(O.current=a.shiftKey?1:0)}),(0,N.useEffect)(()=>{function t(a){R.current(a)}return window.addEventListener(a,t,!0),()=>window.removeEventListener(a,t,!0)},[a,!0]),O}},82121:function(a,R,O){"use strict";O.d(R,{g:function(){return u}});var k=O(2784);function t(a){return[a.screenX,a.screenY]}function u(){let a=(0,k.useRef)([-1,-1]);return{wasMoved(R){let O=t(R);return(a.current[0]!==O[0]||a.current[1]!==O[1])&&(a.current=O,!0)},update(R){a.current=t(R)}}}},68685:function(a,R,O){"use strict";O.d(R,{B:function(){return F}});var k=O(2784),N=O(88064),z=O(29833);function F({container:a,accept:R,walk:O,enabled:j=!0}){let V=(0,k.useRef)(R),G=(0,k.useRef)(O);(0,k.useEffect)(()=>{V.current=R,G.current=O},[R,O]),(0,N.e)(()=>{if(!a||!j)return;let R=(0,z.r)(a);if(!R)return;let O=V.current,k=G.current,N=Object.assign(a=>O(a),{acceptNode:O}),W=R.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,N,!1);for(;W.nextNode();)k(W.currentNode)},[a,j,V,G])}},63575:function(a,R,O){"use strict";O.d(R,{q:function(){return m}});var k=O(2784),N=O(55559);function m(a,R){let O=(0,k.useRef)([]),z=(0,N.z)(a);(0,k.useEffect)(()=>{let a=[...O.current];for(let[k,N]of R.entries())if(O.current[k]!==N){let k=z(R,a);return O.current=R,k}},[z,...R])}},36799:function(a,R,O){"use strict";O.d(R,{A:function(){return z},_:function(){return j}});var k,N=O(90544),z=((k=z||{})[k.None=1]="None",k[k.Focusable=2]="Focusable",k[k.Hidden=4]="Hidden",k);let j=(0,N.yV)(function(a,R){let{features:O=1,...k}=a,z={ref:R,"aria-hidden":(2&O)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&O)==4&&(2&O)!=2&&{display:"none"}}};return(0,N.sY)({ourProps:z,theirProps:k,slot:{},defaultTag:"div",name:"Hidden"})})},47215:function(a,R,O){"use strict";O.d(R,{ZM:function(){return j},oJ:function(){return C},up:function(){return c}});var k,N=O(2784);let z=(0,N.createContext)(null);z.displayName="OpenClosedContext";var j=((k=j||{})[k.Open=1]="Open",k[k.Closed=2]="Closed",k[k.Closing=4]="Closing",k[k.Opening=8]="Opening",k);function C(){return(0,N.useContext)(z)}function c({value:a,children:R}){return N.createElement(z.Provider,{value:a},R)}},15426:function(a,R,O){"use strict";function r(a){let R=a.parentElement,O=null;for(;R&&!(R instanceof HTMLFieldSetElement);)R instanceof HTMLLegendElement&&(O=R),R=R.parentElement;let k=(null==R?void 0:R.getAttribute("disabled"))==="";return!(k&&function(a){if(!a)return!1;let R=a.previousElementSibling;for(;null!==R;){if(R instanceof HTMLLegendElement)return!1;R=R.previousElementSibling}return!0}(O))&&k}O.d(R,{P:function(){return r}})},13199:function(a,R,O){"use strict";O.d(R,{T:function(){return N},d:function(){return x}});var k,N=((k=N||{})[k.First=0]="First",k[k.Previous=1]="Previous",k[k.Next=2]="Next",k[k.Last=3]="Last",k[k.Specific=4]="Specific",k[k.Nothing=5]="Nothing",k);function x(a,R){let O=R.resolveItems();if(O.length<=0)return null;let k=R.resolveActiveIndex(),N=null!=k?k:-1,z=(()=>{switch(a.focus){case 0:return O.findIndex(a=>!R.resolveDisabled(a));case 1:{let a=O.slice().reverse().findIndex((a,O,k)=>(-1===N||!(k.length-O-1>=N))&&!R.resolveDisabled(a));return -1===a?a:O.length-1-a}case 2:return O.findIndex((a,O)=>!(O<=N)&&!R.resolveDisabled(a));case 3:{let a=O.slice().reverse().findIndex(a=>!R.resolveDisabled(a));return -1===a?a:O.length-1-a}case 4:return O.findIndex(O=>R.resolveId(O)===a.id);case 5:return null;default:!function(a){throw Error("Unexpected object: "+a)}(a)}})();return -1===z?k:z}},94020:function(a,R,O){"use strict";function e(...a){return a.filter(Boolean).join(" ")}O.d(R,{A:function(){return e}})},6173:function(a,R,O){"use strict";O.d(R,{k:function(){return function o(){let a=[],R={addEventListener:(a,O,k,N)=>(a.addEventListener(O,k,N),R.add(()=>a.removeEventListener(O,k,N))),requestAnimationFrame(...a){let O=requestAnimationFrame(...a);return R.add(()=>cancelAnimationFrame(O))},nextFrame:(...a)=>R.requestAnimationFrame(()=>R.requestAnimationFrame(...a)),setTimeout(...a){let O=setTimeout(...a);return R.add(()=>clearTimeout(O))},microTask(...a){let O={current:!0};return(0,k.Y)(()=>{O.current&&a[0]()}),R.add(()=>{O.current=!1})},style(a,R,O){let k=a.style.getPropertyValue(R);return Object.assign(a.style,{[R]:O}),this.add(()=>{Object.assign(a.style,{[R]:k})})},group(a){let R=o();return a(R),this.add(()=>R.dispose())},add:R=>(a.push(R),()=>{let O=a.indexOf(R);if(O>=0)for(let R of a.splice(O,1))R()}),dispose(){for(let R of a.splice(0))R()}};return R}}});var k=O(91554)},64727:function(a,R,O){"use strict";O.d(R,{O:function(){return N}});var k=Object.defineProperty,d=(a,R,O)=>R in a?k(a,R,{enumerable:!0,configurable:!0,writable:!0,value:O}):a[R]=O,r=(a,R,O)=>(d(a,"symbol"!=typeof R?R+"":R,O),O);let N=new class{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(a){this.current!==a&&(this.handoffState="pending",this.currentId=0,this.current=a)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},52929:function(a,R,O){"use strict";O.d(R,{C5:function(){return S},EO:function(){return v},GO:function(){return E},TO:function(){return q},fE:function(){return J},jA:function(){return I},sP:function(){return h},tJ:function(){return X},wI:function(){return g},z2:function(){return A}});var k,N,z,j,V=O(6173),G=O(3703),W=O(29833);let K=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(a=>`${a}:not([tabindex='-1'])`).join(",");var q=((k=q||{})[k.First=1]="First",k[k.Previous=2]="Previous",k[k.Next=4]="Next",k[k.Last=8]="Last",k[k.WrapAround=16]="WrapAround",k[k.NoScroll=32]="NoScroll",k),J=((N=J||{})[N.Error=0]="Error",N[N.Overflow=1]="Overflow",N[N.Success=2]="Success",N[N.Underflow=3]="Underflow",N),Z=((z=Z||{})[z.Previous=-1]="Previous",z[z.Next=1]="Next",z);function E(a=document.body){return null==a?[]:Array.from(a.querySelectorAll(K)).sort((a,R)=>Math.sign((a.tabIndex||Number.MAX_SAFE_INTEGER)-(R.tabIndex||Number.MAX_SAFE_INTEGER)))}var X=((j=X||{})[j.Strict=0]="Strict",j[j.Loose=1]="Loose",j);function h(a,R=0){var O;return a!==(null==(O=(0,W.r)(a))?void 0:O.body)&&(0,G.E)(R,{0:()=>a.matches(K),1(){let R=a;for(;null!==R;){if(R.matches(K))return!0;R=R.parentElement}return!1}})}function g(a){let R=(0,W.r)(a);(0,V.k)().nextFrame(()=>{R&&!h(R.activeElement,0)&&S(a)})}function S(a){null==a||a.focus({preventScroll:!0})}function A(a,R=a=>a){return a.slice().sort((a,O)=>{let k=R(a),N=R(O);if(null===k||null===N)return 0;let z=k.compareDocumentPosition(N);return z&Node.DOCUMENT_POSITION_FOLLOWING?-1:z&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function v(a,R){return I(E(),R,{relativeTo:a})}function I(a,R,{sorted:O=!0,relativeTo:k=null,skipElements:N=[]}={}){var z,j,V;let G=Array.isArray(a)?a.length>0?a[0].ownerDocument:document:a.ownerDocument,W=Array.isArray(a)?O?A(a):a:E(a);N.length>0&&W.length>1&&(W=W.filter(a=>!N.includes(a))),k=null!=k?k:G.activeElement;let K=(()=>{if(5&R)return 1;if(10&R)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),q=(()=>{if(1&R)return 0;if(2&R)return Math.max(0,W.indexOf(k))-1;if(4&R)return Math.max(0,W.indexOf(k))+1;if(8&R)return W.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),J=32&R?{preventScroll:!0}:{},Z=0,X=W.length,ee;do{if(Z>=X||Z+X<=0)return 0;let a=q+Z;if(16&R)a=(a+X)%X;else{if(a<0)return 3;if(a>=X)return 1}null==(ee=W[a])||ee.focus(J),Z+=K}while(ee!==G.activeElement);return 6&R&&null!=(V=null==(j=null==(z=ee)?void 0:z.matches)?void 0:j.call(z,"textarea,input"))&&V&&ee.select(),ee.hasAttribute("tabindex")||ee.setAttribute("tabindex","0"),2}},60567:function(a,R,O){"use strict";function s(a,R){return a?a+"["+R+"]":R}function p(a){var R;let O=null!=(R=null==a?void 0:a.form)?R:a.closest("form");if(O){for(let a of O.elements)if("INPUT"===a.tagName&&"submit"===a.type||"BUTTON"===a.tagName&&"submit"===a.type||"INPUT"===a.nodeName&&"image"===a.type){a.click();return}}}O.d(R,{g:function(){return p},t:function(){return function e(a={},R=null,O=[]){for(let[k,N]of Object.entries(a))!function f(a,R,O){if(Array.isArray(O))for(let[k,N]of O.entries())f(a,s(R,k.toString()),N);else O instanceof Date?a.push([R,O.toISOString()]):"boolean"==typeof O?a.push([R,O?"1":"0"]):"string"==typeof O?a.push([R,O]):"number"==typeof O?a.push([R,`${O}`]):null==O?a.push([R,""]):e(O,R,a)}(O,s(R,k),N);return O}}})},3703:function(a,R,O){"use strict";function u(a,R,...O){if(a in R){let k=R[a];return"function"==typeof k?k(...O):k}let k=Error(`Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(R).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(k,u),k}O.d(R,{E:function(){return u}})},91554:function(a,R,O){"use strict";function t(a){"function"==typeof queueMicrotask?queueMicrotask(a):Promise.resolve().then(a).catch(a=>setTimeout(()=>{throw a}))}O.d(R,{Y:function(){return t}})},29833:function(a,R,O){"use strict";O.d(R,{r:function(){return e}});var k=O(64727);function e(a){return k.O.isServer?null:a instanceof Node?a.ownerDocument:null!=a&&a.hasOwnProperty("current")&&a.current instanceof Node?a.current.ownerDocument:document}},25371:function(a,R,O){"use strict";function t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function n(){return t()||/Android/gi.test(window.navigator.userAgent)}O.d(R,{gn:function(){return t},tq:function(){return n}})},90544:function(a,R,O){"use strict";O.d(R,{AN:function(){return G},l4:function(){return W},oA:function(){return P},sY:function(){return D},yV:function(){return L}});var k,N,z=O(2784),j=O(94020),V=O(3703),G=((k=G||{})[k.None=0]="None",k[k.RenderStrategy=1]="RenderStrategy",k[k.Static=2]="Static",k),W=((N=W||{})[N.Unmount=0]="Unmount",N[N.Hidden=1]="Hidden",N);function D({ourProps:a,theirProps:R,slot:O,defaultTag:k,features:N,visible:z=!0,name:j}){let G=h(R,a);if(z)return m(G,O,k,j);let W=null!=N?N:0;if(2&W){let{static:a=!1,...R}=G;if(a)return m(R,O,k,j)}if(1&W){let{unmount:a=!0,...R}=G;return(0,V.E)(a?0:1,{0:()=>null,1:()=>m({...R,hidden:!0,style:{display:"none"}},O,k,j)})}return m(G,O,k,j)}function m(a,R={},O,k){var N;let{as:V=O,children:G,refName:W="ref",...K}=g(a,["unmount","static"]),q=void 0!==a.ref?{[W]:a.ref}:{},J="function"==typeof G?G(R):G;"className"in K&&K.className&&"function"==typeof K.className&&(K.className=K.className(R));let Z={};if(R){let a=!1,O=[];for(let[k,N]of Object.entries(R))"boolean"==typeof N&&(a=!0),!0===N&&O.push(k);a&&(Z["data-headlessui-state"]=O.join(" "))}if(V===z.Fragment&&Object.keys(P(K)).length>0){if(!(0,z.isValidElement)(J)||Array.isArray(J)&&J.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${k} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(K).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let a=(0,j.A)(null==(N=J.props)?void 0:N.className,K.className),R=a?{className:a}:{};return(0,z.cloneElement)(J,Object.assign({},h(J.props,P(g(K,["ref"]))),Z,q,function(...a){return{ref:a.every(a=>null==a)?void 0:R=>{for(let O of a)null!=O&&("function"==typeof O?O(R):O.current=R)}}}(J.ref,q.ref),R))}return(0,z.createElement)(V,Object.assign({},g(K,["ref"]),V!==z.Fragment&&q,V!==z.Fragment&&Z),J)}function h(...a){if(0===a.length)return{};if(1===a.length)return a[0];let R={},O={};for(let k of a)for(let a in k)a.startsWith("on")&&"function"==typeof k[a]?(null!=O[a]||(O[a]=[]),O[a].push(k[a])):R[a]=k[a];if(R.disabled||R["aria-disabled"])return Object.assign(R,Object.fromEntries(Object.keys(O).map(a=>[a,void 0])));for(let a in O)Object.assign(R,{[a](R,...k){for(let N of O[a]){if((R instanceof Event||(null==R?void 0:R.nativeEvent)instanceof Event)&&R.defaultPrevented)return;N(R,...k)}}});return R}function L(a){var R;return Object.assign((0,z.forwardRef)(a),{displayName:null!=(R=a.displayName)?R:a.name})}function P(a){let R=Object.assign({},a);for(let a in R)void 0===R[a]&&delete R[a];return R}function g(a,R=[]){let O=Object.assign({},a);for(let a of R)a in O&&delete O[a];return O}}}]);
//# sourceMappingURL=5837-31daf63655f388c1.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      , see: <a href="/products/app-platform/how-to/upgrade-buildpacks/">How to Upgrade Buildpacks in App Platform</a>.
<ul>
<li>Python buildpack v1:
<ul>
<li>Python 3.7.16, 3.8.16, 3.9.16, 3.10.9, and 3.11.1 are now available</li>
<li>The default Python version for new apps is now 3.10.9 (previously 3.10.8)</li>
<li>Add support for Python 3.11</li>
</ul>
</li>
</ul>
</li>
<li><a href="/products/app-platform/reference/buildpacks/php/">PHP buildpack</a>: Updates to the PHP v1 buildpack are below. If you have an existing PHP app that is on v0, please upgrade to v1, see: <a href="/products/app-platform/how-to/upgrade-buildpacks/">How to Upgrade Buildpacks in App Platform</a>.
<ul>
<li>PHP buildpack v1:
<ul>
<li>Add PHP/7.4.33</li>
<li>Add PHP/8.0.25</li>
<li>Add PHP/8.1.12</li>
</ul>
</li>
</ul>
</li>
</ul>
</p>
            </li></ul><h3 id="2022-01-26">January 26</h3>
<ul><li>
                <p>All new signups on DigitalOcean can now <a href="/products/teams/">invite teammates</a> immediately upon creating their account.</p>
            </li></ul><h3 id="2022-01-25">January 25</h3>
<ul><li>
                <p>Online migration is now available for the <a href="/products/databases/mysql/how-to/migrate/">MySQL</a>, <a href="/products/databases/postgresql/how-to/migrate/">PostgreSQL</a>, and <a href="/products/databases/redis/how-to/migrate/">Redis</a> database engines. Online migration allows you to migrate databases from external servers or cloud providers to databases in your DigitalOcean account.</p>
            </li></ul><h3 id="2022-01-21">January 21</h3>
<ul><li>
                <p>Tax collection for Puerto Rico has begun. <a href="/products/billing/taxes/usa/">Learn more about Puerto Rico taxes</a>.</p>
            </li></ul><h3 id="2022-01-19">January 19</h3>
<ul><li>
                <p><p>Managed Let&rsquo;s Encrypt certificates will begin using Elliptic Curve Digital Signature Algorithm (ECDSA) instead of RSA. ECDSA is equally secure and more computationally efficient than RSA. ECDSA certificates follow the shorter root chain and aren&rsquo;t rooted using the <a href="https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/#:~:text=DST%20Root%20CA%20X3%20will,that%20use%20Let's%20Encrypt%20certificates.">DST Root CA X3 cross-sign which expired on 30 September 2021</a>.</p>
<p>As we roll out this change, new Let&rsquo;s Encrypt certificates provisioned for DigitalOcean <a href="/products/networking/load-balancers/how-to/ssl-termination/">Load Balancers</a> and <a href="/products/spaces/how-to/customize-cdn-endpoint/">Spaces</a> will increasingly use ECDSA and existing certificiates secured with RSA will be secured with ECDSA upon auto-renewal. This change doesn&rsquo;t require any action from DigitalOcean customers.</p>
</p>
            </li></ul><h3 id="2022-01-18">January 18</h3>
<ul><li>
                <p>FreeBSD 11.4 (zfs and ufs), Fedora 33, CentOS 8, and Ubuntu 21.04 have reached end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, these images are now only available via the API. We will remove these images from our platform in 30 days.</p>
            </li></ul><h3 id="2022-01-14">January 14</h3>
<ul><li>
                <p><p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.17.0">v2.17.0</a> of the DigitalOcean Terraform Provider is now available. This release adds support for:</p>
<ul>
<li>Fetching load balancer resources by ID in a datasource.</li>
<li>Updating the name and description for default VPC networks.</li>
</ul>
<p>It also includes bug fixes.</p>
</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.69.0">v1.69.0 of doctl</a>, the official DigitalOcean CLI. This release contains a number of bug fixes and adds support to the <code>kubernetes cluster kubeconfig save</code> sub-command for setting an alias for a cluster&rsquo;s context name.</p>
            </li></ul><h3 id="2022-01-10">January 10</h3>
<ul><li>
                <p>You can now <a href="/products/networking/load-balancers/how-to/scale/">resize load balancers</a> once per minute, instead of once per hour. The cost is prorated based on how long the load balancer operates at each size, with a minimum charge of $0.01.</p>
            </li></ul><h3 id="2022-01-06">January 6</h3>
<ul><li>
                <p>All DigitalOcean databases now support <a href="/products/app-platform/how-to/manage-databases/">App Platform apps as trusted sources</a>,  including <a href="/products/databases/mongodb/">MongoDB</a>.</p>
            </li></ul><h3 id="2022-01-01">January 1</h3>
<ul><li>
                <p>Tax collection for several states and cities in the United States of America has begun. Charges will appear on the February invoice. <a href="/products/billing/taxes/usa/">Learn more about USA taxes.</a></p>
            </li></ul><h2 id="december-2021">December 2021</h2>
<h3 id="2021-12-08">December 8</h3>
<ul><li>
                <p>We now support adding Google Pay as a stored payment method for Chromium-based browsers (Chrome, Brave, Microsoft Edge).</p>
            </li><li>
                <p><a href="https://docs.rockylinux.org/release_notes/8.5/">Rocky Linux 8.5 x64</a> (<code>rockylinux-8-x64</code>) base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2021-12-07">December 7</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.68.0">v1.68.0 of doctl</a>, the official DigitalOcean CLI. This release contains improvements to the <code>registry</code> subcommands including: revoking credentials on <code>logout</code> and a new <code>list-manifests</code> subcommand.</p>
            </li></ul><h3 id="2021-12-03">December 3</h3>
<ul><li>
                <p>App Platform now supports <a href="/products/app-platform/how-to/manage-deployments/#roll-back-to-a-previous-deployment">rolling back an app to a previous deployment</a> for Basic and Professional tier apps.</p>
            </li></ul><h2 id="november-2021">November 2021</h2>
<h3 id="2021-11-30">November 30</h3>
<ul><li>
                <p>To improve collaboration on our platform, a percentage of new signups on DigitalOcean will begin with a <a href="/products/teams/">team account</a>.</p>
            </li><li>
                <p>You can now optimize your storage space in Container Registry with <a href="/products/container-registry/how-to/clean-up-container-registry/">garbage collection</a> and <a href="/products/container-registry/getting-started/quickstart/#manage-images">more management options for images and tags</a>.</p>
            </li></ul><h3 id="2021-11-15">November 15</h3>
<ul><li>
                <p>The <a href="/products/droplets/how-to/connect-with-console/">Droplet Console</a> now supports running the SSH daemon, <code>sshd</code>, on a custom port. Previously, it required <code>sshd</code> to listen on port 22.</p>
            </li></ul><h3 id="2021-11-10">November 10</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.67.0">v1.67.0 of doctl</a>, the official DigitalOcean CLI. This release updates <a href="https://github.com/digitalocean/godo/releases">godo</a> to support new App Platform features.</p>
            </li></ul><h3 id="2021-11-09">November 9</h3>
<ul><li>
                <p><p>You can now <a href="/products/networking/load-balancers/how-to/scale/">scale load balancers</a> with more granularity by adding or removing nodes. The number of nodes a load balancer contains determines how many simultaneous connections and requests per second it can manage.</p>
<p>Each additional node increases the load balancer&rsquo;s maximum:</p>
<ul>
<li>Requests per second by 10,000</li>
<li>Simultaneous connections by 10,000</li>
<li>New SSL connections per second by 250</li>
</ul>
<p>You can add up to 100 nodes to a load balancer.</p>
</p>
            </li><li>
                <p>General Purpose Droplets are now <a href="/products/platform/availability-matrix/">available in BLR1</a>.</p>
            </li><li>
                <p><a href="https://docs.fedoraproject.org/en-US/fedora/f35/release-notes/">Fedora 35</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2021-11-08">November 8</h3>
<ul><li>
                <p><p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.16.0">v2.16.0</a> of the DigitalOcean Terraform Provider is now available. This release adds support for:</p>
<ul>
<li>Scaling load balancers using the <code>size_unit</code> field.</li>
<li><code>source_kubernetes_ids</code> and <code>destination_kubernetes_ids</code> attributes for Kubernetes firewall rules.</li>
</ul>
<p>It also includes bug fixes.</p>
</p>
            </li></ul><h3 id="2021-11-01">November 1</h3>
<ul><li>
                <p><p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.15.0">v2.15.0</a> of the DigitalOcean Terraform Provider is now available. This release adds support for:</p>
<ul>
<li>Disabling automatic DNS record creation when using Let&rsquo;s Encrypting certificates.</li>
<li>Revoking OAuth tokens when credentials are destroyed.</li>
</ul>
<p>It also includes bug fixes.</p>
</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.66.0">v1.66.0 of doctl</a>, the official DigitalOcean CLI. This release includes a number of new features including support for PowerShell completion and a new <code>--upsert</code> flag for the <code>doctl apps create</code> command that updates the app in the given app spec if it already exists.</p>
            </li></ul><h2 id="october-2021">October 2021</h2>
<h3 id="2021-10-28">October 28</h3>
<ul><li>
                <p>App Platform now supports <a href="/products/app-platform/how-to/forward-logs/">forwarding application runtime logs</a> to <a href="https://logtail.com/">Logtail</a>.</p>
            </li></ul><h3 id="2021-10-27">October 27</h3>
<ul><li>
                <p>We have deprecated TLS DHE ciphers for all load balancers.</p>
            </li><li>
                <p>We now support Google Pay for <a href="https://cloud.digitalocean.com/pay-now">one-time payments</a>.</p>
            </li></ul><h3 id="2021-10-25">October 25</h3>
<ul><li>
                <p><a href="https://discourse.ubuntu.com/t/impish-indri-release-notes/21951">Ubuntu 21.10</a> base image is now available in the control panel and via the API.</p>
            </li><li>
                <p>Ubuntu 20.10 has reached its end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, you can now only deploy the Ubuntu 20.10 image via the API. We will remove the Ubuntu 20.10 image from the platform on 25 November 2021.</p>
            </li></ul><h3 id="2021-10-12">October 12</h3>
<ul><li>
                <p>You can now opt out of DigitalOcean automatically creating DNS records for Let&rsquo;s Encrypt certificates during <a href="/products/teams/how-to/manage-certificates/">SSL certificate creation</a>, <a href="/products/networking/load-balancers/how-to/create/">load balancer creation</a>, and <a href="/products/networking/load-balancers/how-to/ssl-termination/">SSL forwarding rule management</a>.</p>
            </li><li>
                <p><p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.65.0">v1.65.0 of doctl</a>, the official DigitalOcean CLI. This release includes a number of new features:</p>
<ul>
<li>The <code>--ha</code> flag was added to the <code>kubernetes cluster create</code> sub-command to optionally create a cluster configured with a highly-available control plane. This feature is in early availability</li>
<li>The <code>kubernetes cluster</code> sub-commands now include a &ldquo;Support Features&rdquo; field when displaying version options</li>
<li>The <code>--disable-lets-encrypt-dns-records</code> flag was added to the <code>compute load-balancer create</code> sub-command to optionally disable automatic DNS record creation for Let&rsquo;s Encrypt certificates that are added to the load balancer</li>
</ul>
</p>
            </li><li>
                <p><a href="/products/kubernetes/details/managed/">High-availability control plane</a> is now in early availability in the following regions: ams3, nyc1, sfo3, and sgp1.</p>
            </li></ul><h3 id="2021-10-07">October 7</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.14.0">v2.14.0</a> of the DigitalOcean Terraform Provider is now available. This release adds support for the high availability (<code>ha</code>) attribute when creating Kubernetes clusters.</p>
            </li></ul><h3 id="2021-10-05">October 5</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.13.0">v2.13.0</a> of the DigitalOcean Terraform Provider is now available. This release adds support for retrieving the CA certificate for database clusters. It also includes bug fixes.</p>
            </li></ul><h3 id="2021-10-01">October 1</h3>
<ul><li>
                <p>Tax collection for Georgia has begun. Charges will appear on the November invoice. <a href="/products/billing/taxes/geo/">Learn more about tax for Georgia.</a></p>
            </li><li>
                <p><a href="/products/billing/taxes/jp/">Tax collection for Japan has begun</a>. Charges will appear on the November invoice.</p>
            </li></ul><h2 id="september-2021">September 2021</h2>
<h3 id="2021-09-30">September 30</h3>
<ul><li>
                <p><a href="/products/app-platform/">App Platform</a> now supports <a href="/products/app-platform/how-to/forward-logs/">forwarding application runtime logs</a> to external log management providers. Currently, we only support <a href="https://www.papertrail.com/">Papertrail</a> and <a href="https://www.datadoghq.com/">Datadog</a>.</p>
            </li></ul><h3 id="2021-09-28">September 28</h3>
<ul><li>
                <p>Team members with the biller role no longer have view-only access to a team&rsquo;s shared resources. Billers have full access to billing information only and no access to shared resources or team settings.</p>
            </li></ul><h3 id="2021-09-27">September 27</h3>
<ul><li>
                <p><a href="https://www.debian.org/News/2021/20210814">Debian 11.0</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2021-09-24">September 24</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.12.0">v2.12.1</a> of the DigitalOcean Terraform Provider is now available. This release adds CORS support for apps on App Platform and the ability to create monitoring alerts.</p>
            </li></ul><h3 id="2021-09-22">September 22</h3>
<ul><li>
                <p>App Platform is now available in TOR1 and LON1.</p>
            </li></ul><h3 id="2021-09-21">September 21</h3>
<ul><li>
                <p>The <a href="/products/networking/load-balancers/how-to/ssl-termination/#add-an-ssl-certificate">load balancer</a> and <a href="/products/spaces/how-to/customize-cdn-endpoint/#add-a-custom-subdomain">Spaces</a> services now support <a href="/products/teams/how-to/manage-certificates/">wildcard Let&rsquo;s Encrypt certificates</a>.</p>
            </li></ul><h3 id="2021-09-20">September 20</h3>
<ul><li>
                <p><p>The <a href="/products/app-platform/reference/buildpacks/go/">Go</a> buildpack for App Platform received some updates:</p>
<p>We added support for GO v1.17.1 and v1.16.8</p>
<p>See our <a href="/products/app-platform/reference/buildpacks/go/#usage">sample Go app</a> for more information on how to implement Go applications on App Platform.</p>
</p>
            </li></ul><h3 id="2021-09-01">September 1</h3>
<ul><li>
                <p>We have begun charging a 7% Value Added Tax (VAT) to customers in Thailand. This VAT rate is temporarily reduced until 30 September 2021. Unless the TRD extends the temporary reduction, the rate will increase back to the standard VAT rate of 10% on 1 October 2021.</p>
            </li></ul><h2 id="august-2021">August 2021</h2>
<h3 id="2021-08-31">August 31</h3>
<ul><li>
                <p>You can now assign <a href="/products/networking/reserved-ips/">floating IP addresses</a> to Droplets that use <a href="/products/images/custom-images/">custom images</a>.</p>
            </li></ul><h3 id="2021-08-20">August 20</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.64.0">v1.64.0 of doctl</a>, the official DigitalOcean CLI. This release includes support for managing App Platform alerts.</p>
            </li></ul><h3 id="2021-08-18">August 18</h3>
<ul><li>
                <p>You can <a href="/products/app-platform/how-to/create-alerts/">monitor and set up alerts</a> for events for your app and its components using <a href="/products/app-platform/">App Platform</a>.</p>
            </li></ul><h3 id="2021-08-09">August 9</h3>
<ul><li>
                <p><p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.63.0">v1.63.0 of doctl</a>, the official DigitalOcean CLI. This release includes a number of new features:</p>
<ul>
<li>The <code>database firewall</code> sub-commands now support apps as trusted sources</li>
<li>New <code>monitoring alert</code> sub-commands for creating and managing alert policies</li>
<li>The <code>--droplet-agent</code> flag was added to the <code>compute droplet create</code> sub-command to optionally disable installing the agent for the Droplet web console</li>
</ul>
</p>
            </li><li>
                <p><a href="/products/databases/mongodb/">MongoDB</a> is now available as a managed database engine in the AMS3, BLR1, FRA1, LON1, NYC1, NYC3, SFO3, SGP1, and TOR1 regions.</p>
            </li><li>
                <p>The <a href="/products/droplets/how-to/connect-with-console/">Droplet Console</a> is now in General Availability.</p>
            </li></ul><h3 id="2021-08-05">August 5</h3>
<ul><li>
                <p><a href="/products/app-platform/">App Platform</a> now supports <a href="/products/app-platform/how-to/manage-databases/">apps as trusted sources for databases</a>. We support <a href="/products/databases/postgresql/">PostgreSQL</a>, <a href="/products/databases/mysql/">MySQL</a>, and <a href="/products/databases/redis/">Redis</a> clusters.</p>
            </li></ul><h3 id="2021-08-03">August 3</h3>
<ul><li>
                <p>You can now add Kubernetes clusters as <a href="/products/networking/firewalls/how-to/configure-rules/#custom-rules">sources or destinations in Cloud Firewall rules</a>.</p>
            </li></ul><h3 id="2021-08-02">August 2</h3>
<ul><li>
                <p>When <a href="/reference/api/api-reference/">updating an SSH key&rsquo;s name using the API</a>, if the request body does not contain a new name, the SSH key&rsquo;s name will now retain its previous value. Previously, if the request body did not contain a new name, the SSH key&rsquo;s name would update to a default value of either the comment field or the first 23 characters from the public key.</p>
            </li><li>
                <p><a href="https://blog.centos.org/2020/12/future-is-centos-stream/">CentOS Linux is reaching end of life</a>; CentOS Linux 8 reaches EOL at the end of 2021 and there will be no CentOS Linux 9. As potential replacements, we have released two new Linux distributions for Droplets: <a href="https://www.centos.org/centos-stream/">CentOS Stream 8</a> (<code>centos-stream-8-x64</code>) and <a href="https://rockylinux.org/">Rocky Linux 8.4 x64</a> (<code>rockylinux-8-x64</code>).</p>
            </li></ul><h2 id="july-2021">July 2021</h2>
<h3 id="2021-07-09">July 9</h3>
<ul><li>
                <p><p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.62.0">v1.62.0 of doctl</a>, the official DigitalOcean CLI. This release fixes a handful of bugs and introduces new flags on existing commands:</p>
<ul>
<li>The <code>apps logs</code> command now supports tailing live logs with the <code>--tail</code> flag. This lets application owners select the most recent logs from their applications</li>
<li>The <code>--wait</code> flag was added to <code>apps create</code> and <code>apps update</code> to block these commands until an application is fully created or updated</li>
</ul>
</p>
            </li></ul><h2 id="june-2021">June 2021</h2>
<h3 id="2021-06-29">June 29</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.10.0">v2.10.0</a> of the DigitalOcean Terraform Provider is now available. This release adds support for Kubernetes maintenance policies.</p>
            </li><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.10.1">v2.10.1</a> of the DigitalOcean Terraform Provider is now available. This release adds bug fixes and other improvements.</p>
            </li></ul><h3 id="2021-06-28">June 28</h3>
<ul><li>
                <p>The <a href="/products/databases/mongodb/">MongoDB database engine</a> is now in general availability.</p>
            </li></ul><h3 id="2021-06-25">June 25</h3>
<ul><li>
                <p><a href="/products/app-platform/">App Platform</a> can now <a href="/products/app-platform/how-to/deploy-from-monorepo/">deploy apps from a monorepo</a>.</p>
            </li></ul><h3 id="2021-06-10">June 10</h3>
<ul><li>
                <p>The new Droplet Console is now in private beta. The Droplet Console gives you one-click SSH access to your Droplet from within a web browser, so you don’t need a password or SSH keys to connect.</p>
            </li></ul><h3 id="2021-06-02">June 2</h3>
<ul><li>
                <p>We&rsquo;ve separated your user information from personal account settings. User information is now accessible from within your personal account or your teams on the <a href="https://cloud.digitalocean.com/account/profile"><strong>My Account</strong> page</a>, which is accessible in the profile icon menu in the top right of the control panel, under <strong>Manage Account</strong>.</p>
            </li><li>
                <p>A new <a href="/products/app-platform/reference/buildpacks/python/">Python + NodeJS</a> group buildpack was added. Python apps can now use NodeJS to render assets during build or as a dependency at runtime.</p>
            </li></ul><h2 id="may-2021">May 2021</h2>
<h3 id="2021-05-27">May 27</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.8.0">v2.7.0</a> of the DigitalOcean Terraform Provider is now available. This release adds support for distributing images to multiple regions.</p>
            </li><li>
                <p>PostgreSQL 13 is <a href="/products/databases/postgresql/how-to/create/#choose-a-database-engine">now available for database clusters</a>. You can also now <a href="/products/databases/postgresql/how-to/upgrade-version/">perform in-place upgrades</a> for PostgreSQL clusters to newer versions without any downtime. We currently support PostgreSQL 10, 11, 12, and 13.</p>
            </li></ul><h3 id="2021-05-26">May 26</h3>
<ul><li>
                <p>Fedora 32 has reached end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, this image is now only available via the API. We will remove the Fedora 32 image from our platform in 30 days.</p>
            </li><li>
                <p>Ubuntu 16.04 has reached end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, this image is now only available via the API. We will remove the Ubuntu 16.04 image from our platform in 30 days.</p>
            </li></ul><h3 id="2021-05-17">May 17</h3>
<ul><li>
                <p>Storage-Optimized Droplets are now available in SGP1.</p>
            </li></ul><h3 id="2021-05-06">May 6</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.60.0">v1.60.0 of doctl</a>, the official DigitalOcean CLI. This release introduces an <code>auth remove</code> sub-command to simplify removing an auth context when managing multiple accounts. The <code>databases user reset</code> sub-command now supports resetting the user password for all database engine types.</p>
            </li></ul><h3 id="2021-05-05">May 5</h3>
<ul><li>
                <p><p>We have updated the <a href="/reference/api/api-reference/#tag/Floating-IPs">Floating IP API</a> responses to better align with our newer API models. The <code>droplet</code> and <code>region</code> fields now use the same response models used in the <code>/v2/droplets</code> and <code>/v2/regions</code> endpoints. Specifically:</p>
<ul>
<li>The <code>private_networking</code> feature is now displayed under the <code>features</code> field under <code>droplet</code> instead of the <code>features</code> field under <code>region</code>.</li>
<li>The <code>vpc_uuid</code> field now populates with the correct values.</li>
<li>The Droplet&rsquo;s <code>type</code> displays <code>base</code> when the Droplet uses a base image (i.e. Ubuntu, CentOS).</li>
<li>The Droplet&rsquo;s <code>networks</code> field now includes private and floating IP addresses, if applicable.</li>
</ul>
</p>
            </li></ul><h2 id="april-2021">April 2021</h2>
<h3 id="2021-04-27">April 27</h3>
<ul><li>
                <p>Premium AMD Droplets are now available in NYC1, SGP1, AMS3, BLR1, LON1, and TOR1. You can view the availability of all of our products by datacenter in the <a href="/products/platform/availability-matrix/">regional availability matrix</a>.</p>
            </li><li>
                <p><a href="https://docs.fedoraproject.org/en-US/fedora/f34/release-notes/">Fedora 34</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2021-04-26">April 26</h3>
<ul><li>
                <p><a href="https://discourse.ubuntu.com/t/hirsute-hippo-release-notes/19221">Ubuntu 21.04</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2021-04-13">April 13</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.59.0">v1.59.0 of doctl</a>, the official DigitalOcean CLI. This release includes a new <code>apps propose</code> sub-command and improvements to the <code>apps spec validate</code> sub-command.</p>
            </li></ul><h3 id="2021-04-09">April 9</h3>
<ul><li>
                <p>With the completion of datacenter work, we have re-enabled resizing between regular and premium Intel Droplets in NYC3 and SGP1.</p>
            </li></ul><h3 id="2021-04-01">April 1</h3>
<ul><li>
                <p>To comply with new provincial requirements in Canada, we are now collecting Provincial Sales Tax (PST) at a rate of 7% for customers in British Columbia and 6% in Saskatchewan. For more details, see <a href="/products/billing/taxes/can/">Canada tax information</a>.</p>
            </li><li>
                <p><a href="/products/billing/taxes/ken/">Tax collection for Kenya has begun</a>. Charges will appear on the May invoice.</p>
            </li></ul><h2 id="march-2021">March 2021</h2>
<h3 id="2021-03-30">March 30</h3>
<ul><li>
                <p>You can now deploy managed databases on Droplets with dedicated CPUs for the <a href="/products/databases/postgresql/#machine-type">PostgreSQL</a>, <a href="/products/databases/mysql/#machine-type">MySQL</a>, and <a href="/products/databases/redis/#machine-type">Redis</a> engines.</p>
            </li></ul><h3 id="2021-03-29">March 29</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.7.0">v2.7.0</a> of the DigitalOcean Terraform Provider is now available. This release adds support for Kubernetes node pool taints and resizing load balancers.</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.58.0">v1.58.0 of doctl</a>, the official DigitalOcean CLI. This release adds a <code>--wait</code> flag to the <code>apps create-deployment</code> command which blocks until the deployment is complete. By default, the <code>registry kubernetes-manifest</code> now generates a manifest that applies the secret to all the namespaces in the Kubernetes cluster using the DOSecret operator.</p>
            </li></ul><h3 id="2021-03-18">March 18</h3>
<ul><li>
                <p><p>You can now do the following on Kubernetes clusters:</p>
<ul>
<li>
<p>Use <a href="/products/kubernetes/how-to/upgrade-cluster/#surge-upgrades">surge upgrade</a> when upgrading an existing cluster. Surge upgrade is enabled by default when you create a new cluster.</p>
</li>
<li>
<p>Move a Kubernetes cluster and its associated resources, such as Droplets, load balancers and volumes, to a <a href="/products/projects/">project</a> using the <a href="https://cloud.digitalocean.com/kubernetes/clusters">DigitalOcean Control Panel</a> or <a href="/reference/doctl/reference/projects/resources/assign/"><code>doctl</code></a> command-line tool. You can also assign a project when you create a new cluster. If you do not specify a project, it gets assigned to the default project.</p>
</li>
<li>
<p>Delete resources, such as load balancers and volumes, associated with a Kubernetes cluster using the <a href="https://cloud.digitalocean.com/kubernetes/clusters">DigitalOcean Control Panel</a>, <a href="https://developers.digitalocean.com/documentation/v2/#delete-a-kubernetes-cluster">API</a> or the <a href="/reference/doctl/reference/kubernetes/cluster/delete/"><code>doctl</code></a> command-line tool.</p>
</li>
</ul>
</p>
            </li></ul><h3 id="2021-03-16">March 16</h3>
<ul><li>
                <p>You can now <a href="/products/networking/load-balancers/how-to/scale/">resize load balancers</a> to better match their performance to their workload.</p>
            </li></ul><h3 id="2021-03-10">March 10</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.6.0">v2.6.0</a> of the DigitalOcean Terraform Provider is now available. This release enables surge upgrades for Kubernetes clusters by default and adds a <code>digitalocean_firewall</code> data source.</p>
            </li></ul><h3 id="2021-03-09">March 9</h3>
<ul><li>
                <p>Storage Optimized Droplets are now available in TOR1 and BLR1.</p>
            </li></ul><h3 id="2021-03-03">March 3</h3>
<ul><li>
                <p>Online migration for PostgreSQL and Redis databases has been released in Beta. Select users can now migrate <a href="/products/databases/redis/how-to/migrate/">Redis</a> and <a href="/products/databases/postgresql/how-to/migrate/">PostgreSQL</a> databases that reside inside and outside of DigitalOcean to existing database clusters in their DigitalOcean account. Redis migrations from AWS ElasticCache are not currently supported.</p>
            </li><li>
                <p>With the completion of the SGP1 capacity augmentation, we have re-enabled the creation of new Spaces in SGP1.</p>
            </li></ul><h3 id="2021-03-01">March 1</h3>
<ul><li>
                <p>Fixed a bug with DigitalOcean Load Balancers that prevented outbound data transfer from Droplets from being added to bandwidth usage totals. Any inconsistencies will be updated on the April invoice.</p>
            </li></ul><h2 id="february-2021">February 2021</h2>
<h3 id="2021-02-25">February 25</h3>
<ul><li>
                <p><p>The <a href="/products/app-platform/reference/buildpacks/php/">PHP</a> buildpack received some updates:</p>
<ul>
<li>Support for PHP 8.x was added in addition to PHP 7.x. By default, App Platform will use PHP 7.x unless the app specifies a version requirement via Composer.</li>
<li>Support for Composer 2.x was added in addition to Composer 1.x. App Platform will use the same version of Composer that generated the app&rsquo;s <code>composer.lock</code> file.</li>
</ul>
<p>For more information and configuration options, see <a href="/products/app-platform/reference/buildpacks/php/#usage">the buildpack&rsquo;s documentation page</a>.</p>
</p>
            </li></ul><h3 id="2021-02-22">February 22</h3>
<ul><li>
                <p><p>Our <a href="/products/droplets/#plans-and-pricing">Basic Droplet plans</a> now include Premium Intel and AMD Droplets, which have faster Intel and AMD CPUs and NVMe SSDs. Premium Intel plans are availabile in all regions, and Premium AMD plans are available in NYC3, SFO3, and FRA1.</p>
<p>All users can create Premium Droplets, resize from Regular Intel Droplets to Premium Intel Droplets, and create Premium Droplets as worker nodes in Kubernetes clusters. Resizing between Regular Intel Droplets to Premium Intel Droplets is disabled in NYC3 and SGP1 until the end of March 2021.</p>
</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.57.0">v1.57.0 of doctl</a>, the official DigitalOcean CLI. This release enables surge upgrades by default for newly created Kubernetes clusters and important bugfixes for App Platform logs and Kubernetes cascading deletes.</p>
            </li></ul><h3 id="2021-02-11">February 11</h3>
<ul><li>
                <p>App Platform is now available in SGP1 and BLR1.</p>
            </li><li>
                <p>FreeBSD 12.1 has reached end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, this image is now only available via the API. We will remove the FreeBSD 12.1 image from our platform in 30 days.</p>
            </li></ul><h3 id="2021-02-10">February 10</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.56.0">v1.56.0 of doctl</a>, the official DigitalOcean CLI. This release includes support for database firewalls management, Kubernetes cascading deletes, and installing Kubernetes 1-Clicks to existing clusters.</p>
            </li></ul><h3 id="2021-02-03">February 3</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.5.0">v2.5.0</a> of the DigitalOcean Terraform Provider is now available. This release adds a number of improvements to the <code>digitalocean_app</code> resource including: support for images as a component source, support for job components, support for <code>internal_ports</code> for services, and support for wildcard domains.</p>
            </li></ul><h3 id="2021-02-01">February 1</h3>
<ul><li>
                <p>Spaces are now available in SFO3.</p>
            </li></ul><h2 id="january-2021">January 2021</h2>
<h3 id="2021-01-31">January 31</h3>
<ul><li>
                <p>Due to capacity limits in the region, we have disabled the creation of new resources in SFO2 for new customers. Existing customers with resources in SFO2 are unaffected and can still create and destroy resources in SFO2.</p>
            </li></ul><h3 id="2021-01-28">January 28</h3>
<ul><li>
                <p>We&rsquo;ve improved the account deactivation experience to more clearly guide users through the actions necessary to deactivate an account.</p>
            </li></ul><h3 id="2021-01-21">January 21</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.55.0">v1.55.0 of doctl</a>, the official DigitalOcean CLI. This release adds Docker Hub and GitLab support to App Platform&rsquo;s create and update commands.</p>
            </li><li>
                <p>App Platform now supports launching components from public DockerHub image sources.</p>
            </li></ul><h3 id="2021-01-19">January 19</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.4.0">v2.4.0</a> of the DigitalOcean Terraform Provider is now available. This release includes support for deployments from GitLab and app-wide environment variables for the <code>digitalocean_app</code> resource, bug fixes, and other improvements.</p>
            </li></ul><h3 id="2021-01-05">January 5</h3>
<ul><li>
                <p><p>You can now do the following on <a href="/products/app-platform/">App Platform</a>:</p>
<ul>
<li>
<p><a href="/products/app-platform/how-to/deploy-from-container-images/">Deploy apps from a registry that has been uploaded to a DigitalOcean Container Registry</a>.</p>
</li>
<li>
<p>Deploy apps from source code contained in a GitLab repository.</p>
</li>
<li>
<p><a href="/products/app-platform/how-to/configure-cors-policies/">Edit CORS policies</a> for your app.</p>
</li>
</ul>
</p>
            </li></ul><h3 id="2021-01-01">January 1</h3>
<ul><li>
                <p>In response to the United Kingdom departing as a member state of the European Union, DigitalOcean has obtained a standalone UK VAT ID and continued charging and collecting VAT at a rate of 20% on its business-to-consumer sales in the UK. Business customers with a valid UK VAT ID are subject to the reverse charge mechanism.</p>
            </li></ul><h2 id="december-2020">December 2020</h2>
<h3 id="2020-12-07">December 7</h3>
<ul><li>
                <p>Load balancers now come in <a href="/products/networking/load-balancers/#plans-and-pricing">small, medium, and large sizes</a>. The larger the load balancer, the more simultaneous connections and requests per second it can manage. Existing load balancers are now considered &ldquo;small&rdquo; load balancers and are unaffected by this change.</p>
            </li><li>
                <p>CentOS 6 has reached end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, this image is now only available via the API. We will remove the CentOS 6 image from our platform in 30 days.</p>
            </li><li>
                <p><p>Load balancers now come in <a href="/products/networking/load-balancers/#plans-and-pricing">small, medium, and large sizes</a>. The larger the load balancer, the more simultaneous connections and requests per second it can manage. Existing load balancers are now considered &ldquo;small&rdquo; load balancers and are unaffected by this change.</p>
<p>You can specify the size of a load balancer during its creation using the <code>size</code> field. The available size values are <code>lb-small</code>, <code>lb-medium</code>, or <code>lb-large</code>.</p>
<p>Example request body:</p>
<pre tabindex="0"><code>{
  &#34;name&#34;: &#34;example-lb-01&#34;,
  &#34;region&#34;: &#34;nyc3&#34;,
  &#34;size&#34;: &#34;lb-small&#34;,
  &#34;forwarding_rules&#34;: [
    {
      &#34;entry_protocol&#34;: &#34;https&#34;,
      &#34;entry_port&#34;: 444,
      &#34;target_protocol&#34;: &#34;https&#34;,
      &#34;target_port&#34;: 443,
      &#34;tls_passthrough&#34;: true
    }
  ],
  &#34;health_check&#34;: {
    &#34;protocol&#34;: &#34;http&#34;,
    &#34;port&#34;: 80,
    &#34;path&#34;: &#34;/&#34;,
    &#34;check_interval_seconds&#34;: 10,
    &#34;response_timeout_seconds&#34;: 5,
    &#34;healthy_threshold&#34;: 5,
    &#34;unhealthy_threshold&#34;: 3
  },
  &#34;sticky_sessions&#34;: {
    &#34;type&#34;: &#34;none&#34;
  }
  ]
}
</code></pre><p>Once you have created a load balancer, you can&rsquo;t change its size.</p>
</p>
            </li></ul><h3 id="2020-12-04">December 4</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.54.0">v1.54.0 of doctl</a>, the official DigitalOcean CLI. This release user confirmation before container registry garbage collection is started.</p>
            </li></ul><h3 id="2020-12-03">December 3</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.3.0">v2.3.0</a> of the DigitalOcean Terraform Provider is now available. This release includes support for configuring the <code>size</code> of a <code>digitalocean_loadbalancer</code> resource. OpenBSD binaries are now built and available for download.</p>
            </li></ul><h3 id="2020-12-01">December 1</h3>
<ul><li>
                <p>Fixed a bug that intermittently caused blank control panel pages in certain GeoIP regions.</p>
            </li><li>
                <p><p>We recently replaced Standard Droplet plans with Basic Droplet plans. Today, we have deprecated Standard Droplet plans from the API for new users. Existing customers will retain access to these plans.</p>
<div class="expandable-content">
    <div class="summary">
        <div class="svg-wrap"><svg alt="" class="svg-Icon" aria-hidden="true"><use xlink:href="#_sprite-plus"></use></svg></div>
        <span class="expand-link-text">Click here to view the complete list of deprecated plans.</span>
    </div>
    <div class="expand-content "><table>
<thead>
<tr>
<th>Class</th>
<th>Slug</th>
<th>vCPUs</th>
<th>RAM</th>
<th>Disk</th>
<th>Transfer</th>
<th>Monthly Price</th>
</tr>
</thead>
<tbody>
<tr>
<td>Standard</td>
<td><code>512mb</code></td>
<td>1</td>
<td>512 MB</td>
<td>20 GB</td>
<td>1 TB</td>
<td>$5</td>
</tr>
<tr>
<td>Standard</td>
<td><code>1gb</code></td>
<td>1</td>
<td>1 GB</td>
<td>30 GB</td>
<td>2 TB</td>
<td>$10</td>
</tr>
<tr>
<td>Standard</td>
<td><code>2gb</code></td>
<td>2</td>
<td>2 GB</td>
<td>40 GB</td>
<td>3 TB</td>
<td>$20</td>
</tr>
<tr>
<td>Standard</td>
<td><code>4gb</code></td>
<td>2</td>
<td>3 GB</td>
<td>60 GB</td>
<td>4 TB</td>
<td>$40</td>
</tr>
<tr>
<td>Standard</td>
<td><code>8gb</code></td>
<td>4</td>
<td>4 GB</td>
<td>80 GB</td>
<td>5 TB</td>
<td>$80</td>
</tr>
<tr>
<td>Standard</td>
<td><code>16gb</code></td>
<td>8</td>
<td>16 GB</td>
<td>160 GB</td>
<td>6 TB</td>
<td>$160</td>
</tr>
<tr>
<td>Standard</td>
<td><code>32gb</code></td>
<td>12</td>
<td>32 GB</td>
<td>320 GB</td>
<td>7 TB</td>
<td>$320</td>
</tr>
<tr>
<td>Standard</td>
<td><code>48gb</code></td>
<td>16</td>
<td>48 GB</td>
<td>480 GB</td>
<td>8 TB</td>
<td>$480</td>
</tr>
<tr>
<td>Standard</td>
<td><code>64gb</code></td>
<td>20</td>
<td>64 GB</td>
<td>640 GB</td>
<td>9 TB</td>
<td>$640</td>
</tr>
<tr>
<td>Standard</td>
<td><code>96gb</code></td>
<td>24</td>
<td>96 GB</td>
<td>960 GB</td>
<td>10 TB</td>
<td>$960</td>
</tr>
<tr>
<td>Standard</td>
<td><code>s-1vcpu-3gb</code></td>
<td>1</td>
<td>3 GB</td>
<td>60 GB</td>
<td>3 TB</td>
<td>$15</td>
</tr>
<tr>
<td>Standard</td>
<td><code>s-3vcpu-1gb</code></td>
<td>3</td>
<td>1 GB</td>
<td>60 GB</td>
<td>3 TB</td>
<td>$15</td>
</tr>
<tr>
<td>Standard</td>
<td><code>s-6vcpu-16gb</code></td>
<td>6</td>
<td>16 GB</td>
<td>320 GB</td>
<td>6 TB</td>
<td>$80</td>
</tr>
<tr>
<td>Standard</td>
<td><code>s-8vcpu-32gb</code></td>
<td>8</td>
<td>32 GB</td>
<td>640 GB</td>
<td>7 TB</td>
<td>$160</td>
</tr>
<tr>
<td>Standard</td>
<td><code>s-12vcpu-48gb</code></td>
<td>12</td>
<td>48 GB</td>
<td>960 GB</td>
<td>8 TB</td>
<td>$240</td>
</tr>
<tr>
<td>Standard</td>
<td><code>s-16vcpu-64gb</code></td>
<td>16</td>
<td>16 GB</td>
<td>1280 GB</td>
<td>9 TB</td>
<td>$320</td>
</tr>
<tr>
<td>Standard</td>
<td><code>s-20vcpu-96gb</code></td>
<td>20</td>
<td>20 GB</td>
<td>1920 GB</td>
<td>10 TB</td>
<td>$480</td>
</tr>
<tr>
<td>Standard</td>
<td><code>s-24vcpu-128gb</code></td>
<td>24</td>
<td>24 GB</td>
<td>2560 GB</td>
<td>11 TB</td>
<td>$640</td>
</tr>
<tr>
<td>Standard</td>
<td><code>s-32vcpu-192gb</code></td>
<td>32</td>
<td>32 GB</td>
<td>3840 GB</td>
<td>12 TB</td>
<td>$960</td>
</tr>
<tr>
<td>High Memory</td>
<td><code>m-16gb</code></td>
<td>2</td>
<td>16 GB</td>
<td>60 GB</td>
<td>5 TB</td>
<td>$75</td>
</tr>
<tr>
<td>High Memory</td>
<td><code>m-32gb</code></td>
<td>4</td>
<td>32 GB</td>
<td>90 GB</td>
<td>5 TB</td>
<td>$150</td>
</tr>
<tr>
<td>High Memory</td>
<td><code>m-64gb</code></td>
<td>8</td>
<td>64 GB</td>
<td>200 GB</td>
<td>5 TB</td>
<td>$300</td>
</tr>
<tr>
<td>High Memory</td>
<td><code>m-128gb</code></td>
<td>16</td>
<td>128 GB</td>
<td>340 GB</td>
<td>5 TB</td>
<td>$600</td>
</tr>
<tr>
<td>High Memory</td>
<td><code>m-224gb</code></td>
<td>32</td>
<td>224 GB</td>
<td>500 GB</td>
<td>5 TB</td>
<td>$1100</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>You can view Droplet plans, the resources they provide, and the size slug used to identify them programmatically by querying the <a href="/reference/api/api-reference/#operation/sizes_list"><code>/v2/sizes</code> endpoint</a>.</p>
</p>
            </li></ul><h2 id="november-2020">November 2020</h2>
<h3 id="2020-11-24">November 24</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.53.0">v1.53.0 of doctl</a>, the official DigitalOcean CLI. This release adds support for container registry garbage collection of untagged manifests.</p>
            </li><li>
                <p>Fedora 31 has reached end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, this image is now only available via the API. We will remove the Fedora 31 image from our platform in 30 days.</p>
            </li></ul><h3 id="2020-11-18">November 18</h3>
<ul><li>
                <p><a href="https://redislabs.com/blog/diving-into-redis-6/">Redis 6</a> Managed Databases are <a href="/products/databases/redis/how-to/create/">now available</a>. Redis 6 includes enhanced security features and client-side caching. You can no longer create Redis 5 clusters, but Redis 6 clusters are fully backwards compatible.</p>
            </li><li>
                <p>Droplet-related error messages now display on the Droplet&rsquo;s <strong>History</strong> page in the control panel.</p>
            </li></ul><h3 id="2020-11-12">November 12</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.2.0">v2.2.0</a> of the DigitalOcean Terraform Provider is now available. This release adds a new <code>digitalocean_ssh_keys</code> data source and a <code>digitalocean_custom_image</code> resource.</p>
            </li></ul><h3 id="2020-11-10">November 10</h3>
<ul><li>
                <p>We have reduced the prices of Memory-Optimized Droplets by about 11%. Existing Memory-Optimized Droplets will be charged at the lowered price from the month of November on, reflected in the December invoice.</p>
            </li><li>
                <p><p>We have released Storage-Optimized Droplet plans. Storage-Optimized Droplets have NVMe SSD storage and are best for extra-large databases, caches, and analytics workloads.</p>
<p>All users can now create Storage-Optimized Droplets in AMS3, FRA1, LON1, NYC1, and SFO3 using the control panel, API, or CLI. The slugs for the new plans are <code>so-2vcpu-16gb</code>, <code>so-4vcpu-32gb</code>, <code>so-16vcpu-64gb</code>, <code>so-24vcpu-128gb</code>, and <code>so-32vcpu-256gb</code>.</p>
</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.52.0">v1.52.0 of doctl</a>, the official DigitalOcean CLI. This release adds a <code>--force-rebuild</code> flag to <code>doctl apps create-deployment</code>.</p>
            </li><li>
                <p><p>Improved build caching for all App Platform build environments. Dependencies and other data are now cached and reused between builds to improve performance. Dockerfile builds continue to make use of Docker layer caching.</p>
<p>The <a href="/products/app-platform/reference/buildpacks/hugo/">Hugo</a> buildpack received some updates:</p>
<ul>
<li>The default version has been upgraded to <code>0.78.0</code>.</li>
<li>Added support for running Hugo as a Service component. The default and recommended behavior is to deploy it as a Static Site.</li>
<li>Removed the implicit build command—a build command is now required. Existing apps have had their specs automatically updated.</li>
</ul>
</p>
            </li></ul><h3 id="2020-11-06">November 6</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.1.0">v2.1.0</a> of the DigitalOcean Terraform Provider is now available. DigitalOcean Container Registry is now in general availability and requires a subscription plan. As a result, the <code>digitalocean_container_registry</code> resource now requires setting a <code>subscription_tier_slug</code> which is supported with this release.</p>
            </li><li>
                <p><p>We have released a <a href="/products/app-platform/how-to/add-deploy-do-button/">&ldquo;Deploy to DigitalOcean&rdquo; button for App Platform</a>. You can now embed a button into your GitHub repo or website that allows users to deploy your app directly to DigitalOcean.</p>
<p>We have also released a <a href="/products/app-platform/how-to/manage-jobs/">jobs feature for App Platform</a>. The job feature allows you to run application code at a scheduled time.</p>
</p>
            </li></ul><h3 id="2020-11-04">November 4</h3>
<ul><li>
                <p><a href="https://www.freebsd.org/releases/12.2R/announce.html">FreeBSD 12.2</a> UFS and ZFS base images are now available in the control panel and via the API. The image slug for the UFS FreeBSD image <code>freebsd-12-x64</code> has been replaced with <code>freebsd-12-x64-ufs</code>. We will support 12.1 for three months after the release date of 12.2, which is currently scheduled for January 31, 2021.</p>
            </li></ul><h3 id="2020-11-03">November 3</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.51.0">v1.51.0 of doctl</a>, the official DigitalOcean CLI. This release add support for managing DigitalOcean Container Registry subscriptions.</p>
            </li></ul><h3 id="2020-11-02">November 2</h3>
<ul><li>
                <p><p>DigitalOcean Container Registry is now in <a href="/products/platform/product-lifecycle/#general-availability">General Availability</a>. Highlights include:</p>
<ul>
<li>Three <a href="/products/container-registry/#plans-and-pricing">subscription plans</a> that offer different allowances for repositories, storage, and bandwidth</li>
<li>1-click method to <a href="/products/container-registry/how-to/use-registry-docker-kubernetes/#add-secret-control-panel">configure DigitalOcean Kubernetes Cluster to use the registry</a></li>
<li><a href="/products/container-registry/how-to/clean-up-container-registry/">Garbage collection</a> using the command line or the API</li>
<li>Ability to see the current storage usage in the control panel</li>
</ul>
</p>
            </li><li>
                <p><p><a href="/reference/api/api-reference/#operation/kubernetes_add_registry">You can now integrate your DOCR registry with a Kubernetes cluster</a>. When a registry is integrated with a Kubernetes cluster, we create docker registry type secrets in all the namespaces in the cluster. These secrets can be used with the workloads or added to the default service account in the namespace.</p>
<p>Additionally, we&rsquo;ve added DOCR integration support for our official clients, <a href="https://github.com/digitalocean/godo">godo</a> and <a href="/reference/doctl/">doctl</a>. Only versions of doctl 1.49.0 and godo 1.48.0 and above support docr integration for clusters.</p>
</p>
            </li></ul><h2 id="october-2020">October 2020</h2>
<h3 id="2020-10-30">October 30</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.50.0">v1.50.0 of doctl</a>, the official DigitalOcean CLI. This release incudes a number for new features and improvements. It includes new <code>doctl apps</code> sub-commands to retrieve information about App Platform pricing plan tiers, instance sizes, and regions. The <code>doctl registry</code> sub-command now supports managing garbage collection for container registries.</p>
            </li></ul><h3 id="2020-10-28">October 28</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.49.0">v1.49.0 of doctl</a>, the official DigitalOcean CLI. This release incudes the ability to update the default VPC for a region, the ability to set an expiration time when downloading kubeconfig files, and more.</p>
            </li></ul><h3 id="2020-10-27">October 27</h3>
<ul><li>
                <p>On Kubernetes 1.19 and later we now provision <a href="/products/kubernetes/details/managed/#worker-node-firewalls">two fully-managed firewalls for each new Kubernetes cluster</a>. One firewall manages the connection between worker nodes and control plane, and the other manages connections between worker nodes and the public internet.</p>
            </li><li>
                <p><a href="https://fedoramagazine.org/announcing-fedora-33/">Fedora 33</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2020-10-26">October 26</h3>
<ul><li>
                <p>You can now <a href="/products/networking/vpc/how-to/set-default-vpc/">change the default VPC network for a region</a>. When you change the default VPC network for a region, the new default network will be automatically selected during applicable resource set ups unless otherwise specified.</p>
            </li><li>
                <p>Added support to App Platform for configuring internal <a href="https://www.digitalocean.com/products/app-platform/concepts/glossary/service/">service</a> ports, as well as internal-only services that are not internet-accessible.</p>
            </li><li>
                <p>Added support to App Platform for configuring a catch-all document that can be used by static sites to rewrite all requests to pages that are not found, to the configured document. The <code>catchall_document</code> field is similar to <code>error_document</code> in that they both rewrite all requests to the specified document, and so they are mutually exclusive, only 1 can be set. Using <code>catchall_document</code> will result in 200 HTTP response codes for the rewritten requests, while <code>error_document</code> will result in 404 HTTP response codes.</p>
            </li></ul><h3 id="2020-10-22">October 22</h3>
<ul><li>
                <p><a href="https://discourse.ubuntu.com/t/groovy-gorilla-release-notes/15533">Ubuntu 20.10</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2020-10-20">October 20</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.0.0">v2.0.0</a> of the DigitalOcean Terraform Provider is now available. This release uses v2.0.3 of the Terraform Plugin SDK and now only supports Terraform v0.12 and higher. It also includes a new <code>digitalocean_records</code> data source.</p>
            </li></ul><h3 id="2020-10-19">October 19</h3>
<ul><li>
                <p><p>You can now <a href="/products/networking/vpc/how-to/set-default-vpc/">update a VPC network to be the default VPC network</a> for a region using the <code>PUT /v2/vpcs/$VPC_ID</code> and <code>PATCH /v2/vpcs/$VPC_ID</code> endpoints.</p>
<p>For example:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;renamed-new-vpc&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;description&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;A new description&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;default&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;true&#34;</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>When you change the default VPC network for a region, all applicable resources are placed into the default VPC network unless otherwise specified during their creation.</p>
</p>
            </li></ul><h3 id="2020-10-15">October 15</h3>
<ul><li>
                <p>Added support to App Platform services and static sites for configuring an ingress CORS policy.</p>
            </li><li>
                <p>Added support to App Platform for configuring custom wildcard domains.</p>
            </li></ul><h3 id="2020-10-14">October 14</h3>
<ul><li>
                <p>Added an App Platform <a href="https://www.digitalocean.com/products/app-platform/how-to/use-environment-variables/#using-bindable-variables-within-environment-variables">environment variable binding</a> with the CA certificate for managed databases in the users account.</p>
            </li></ul><h3 id="2020-10-13">October 13</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v1.23.0">v1.23.0</a> of the DigitalOcean Terraform Provider is now available. This release introduces a new <code>digitalocean_app</code> resource with support for DigitalOcean App Platform.</p>
            </li></ul><h3 id="2020-10-12">October 12</h3>
<ul><li>
                <p>Added an App Platform the <a href="https://www.digitalocean.com/products/app-platform/how-to/use-environment-variables/#using-bindable-variables-within-environment-variables">environment variable binding</a> prefix <code>_self</code> that can be used to reference the current component without directly referencing it by component name.</p>
            </li></ul><h3 id="2020-10-09">October 9</h3>
<ul><li>
                <p>Launched the App Platform <a href="https://www.digitalocean.com/products/app-platform/concepts/glossary/job/">jobs</a> component type, with support for running containerized operations before, after, and on failure of deploys.</p>
            </li></ul><h3 id="2020-10-06">October 6</h3>
<ul><li>
                <p>You can now <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-kubernetes-cluster">apply taints to Kubernetes node pools using the DigitalOcean API</a>. When you configure taints for a node pool, the taint automatically applies to all current nodes and any subsequently created nodes in the pool. For more information, see <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/">Kubernetes&rsquo; documentation on taints and tolerations</a>.</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.48.0">v1.48.0 of doctl</a>, the official DigitalOcean CLI. This release promotes <code>doctl apps</code> commands with support for DigitalOcean <a href="https://www.digitalocean.com/products/app-platform/">App Platform</a> to General Availability.</p>
            </li><li>
                <p><p><a href="/reference/api/api-reference/#operation/kubernetes_create_cluster">You can now apply taints to Kubernetes node pools</a>. When you configure taints for a node pool, the taint automatically applies to all current nodes in the pool and any node you add to the pool thereafter. For more information about taints and tolerations, see <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/">Kubernetes&rsquo; documentation</a>.</p>
<p>Additionally, we&rsquo;ve added node taint support for our official clients, <a href="https://github.com/digitalocean/godo">godo</a> and <a href="/reference/doctl/">doctl</a>. Only versions of doctl 1.47.0 and godo 1.45.0 and above support persistent node pool taints.</p>
<p>You can define taints during a pool&rsquo;s creation by submitting a <code>POST</code> request to the <code>/v2/kubernetes/clusters/&lt;cluster-id&gt;/node_pools</code> and the <code>/v2/kubernetes/clusters</code> endpoints, or you can update existing pools by submitting a <code>PUT</code> request to the <code>/v2/kubernetes/clusters/&lt;cluster-id&gt;/node_pools/&lt;node-pool-id&gt;</code> endpoint. For example, this request body defines two taints for a node pool.</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;frontend&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;size&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">10</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#960050;background-color:#1e0010">[...]</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;taints&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;key&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;priority&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;value&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;high&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;effect&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;NoSchedule&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;key&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;workloadKind&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;value&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;database&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;effect&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;NoExecute&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span>  <span style="color:#111">]</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div></p>
            </li><li>
                <p><a href="/products/app-platform/">App Platform</a>, our new platform as a service (PaaS) offering, is now in General Availability. Hook a GitHub repo to DigitalOcean and let App Platform automatically build and deploy your commits live to the cloud. <a href="/products/app-platform/getting-started/quickstart/">Read the quickstart</a> or <a href="https://cloud.digitalocean.com/apps/new">try it now</a>.</p>
            </li></ul><h3 id="2020-10-05">October 5</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.47.0">v1.47.0 of doctl</a>, the official DigitalOcean CLI. This release adds support for setting Kubernetes node pool taints.</p>
            </li></ul><h3 id="2020-10-01">October 1</h3>
<ul><li>
                <p>All Droplets created after 1 October 2020 are <a href="/products/networking/vpc/">placed into a VPC network by default</a>. You can no longer manually enable VPC networking on existing Droplets. You can <a href="/products/networking/vpc/how-to/migrate-resources/">migrate existing Droplets into VPC networks using Snapshots</a>.</p>
            </li><li>
                <p><p>All Droplets created after 1 October 2020 are <a href="/products/networking/vpc/">placed into a VPC network by default</a>. The <code>enable_private_networking</code> action and <code>private_network</code> parameter have been deprecated. Use the <code>vpc_uuid</code> parameter to specify the VPC network for your Droplets.</p>
<p>You can <a href="/products/networking/vpc/how-to/migrate-resources/">migrate existing Droplets into VPC networks using Snapshots</a>.</p>
</p>
            </li></ul><h2 id="september-2020">September 2020</h2>
<h3 id="2020-09-30">September 30</h3>
<ul><li>
                <p>We have updated capacity in FRA1 and have resumed the <a href="/products/spaces/how-to/create/">creation of Spaces</a> in that region.</p>
            </li></ul><h3 id="2020-09-25">September 25</h3>
<ul><li>
                <p>We have temporarily disabled the creation of new Spaces in SGP1 while we update capacity in this region.</p>
            </li></ul><h3 id="2020-09-16">September 16</h3>
<ul><li>
                <p><a href="/products/droplets/concepts/choosing-a-plan/#shared-vs-dedicated">Dedicated CPU Droplet plans</a> now offer more SSD size options. Each plan contains SSD size variants that you can choose upon <a href="/products/droplets/how-to/create/">creation</a> or when <a href="/products/droplets/how-to/resize/">resizing a dedicated CPU Droplet</a>.</p>
            </li></ul><h3 id="2020-09-08">September 8</h3>
<ul><li>
                <p>Fedora 30 has reached end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, this image is now only available via the API. We will remove the Fedora 30 image from our platform in 30 days.</p>
            </li></ul><h3 id="2020-09-02">September 2</h3>
<ul><li>
                <p><p>Standard Droplet plans have been replaced with Basic Droplet plans. We have added one new plan, <code>s-8vcpu-16gb</code>, and deprecated the following plans:</p>
<ul>
<li><code>s-1vcpu-3gb</code></li>
<li><code>s-3vcpu-1gb</code></li>
<li><code>s-6vcpu-16gb </code></li>
<li><code>s-8vcpu-32gb</code></li>
<li><code>s-12vcpu-48gb</code></li>
<li><code>s-16vcpu-64gb</code></li>
<li><code>s-20vcpu-96gb</code></li>
<li><code>s-24vcpu-128gb</code></li>
<li><code>s-32vcpu-192gb</code></li>
</ul>
<p>These deprecated plans are now unavailable in the control panel, but you can still create Droplets with those plans using the API or <code>doctl</code>.</p>
</p>
            </li></ul><h2 id="august-2020">August 2020</h2>
<h3 id="2020-08-20">August 20</h3>
<ul><li>
                <p>Account security history now only displays events after 17 August 2019. If you need data from an earlier date, open a support ticket.</p>
            </li></ul><h3 id="2020-08-04">August 4</h3>
<ul><li>
                <p>We have released a Droplet <a href="/products/droplets/how-to/retrieve-droplet-metadata/">metadata endpoint</a> which returns whether or not a Droplet is scheduled for a <a href="/products/droplets/details/live-migration/#how-to-check-for-scheduled-live-migrations">live migration</a>. The impact of live migrations on Droplets is minimal, so users now only receive direct notifications for migrations that require us to power down a Droplet, which (except in emergencies) we send 7 days in advance.</p>
            </li></ul><h3 id="2020-08-01">August 1</h3>
<ul><li>
                <p>Ubuntu 19.10 has reached end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, this image is now only available via the API. We will remove the Ubuntu 19.10 image from our platform in 30 days.</p>
            </li></ul><h2 id="july-2020">July 2020</h2>
<h3 id="2020-07-31">July 31</h3>
<ul><li>
                <p>Memory-Optimized Droplets are <a href="/products/platform/availability-matrix/#droplet-plan-availability">now available for the BLR1 datacenter region</a>.</p>
            </li></ul><h3 id="2020-07-28">July 28</h3>
<ul><li>
                <p><a href="/products/app-platform/">App Platform</a> is now in beta.</p>
            </li></ul><h3 id="2020-07-23">July 23</h3>
<ul><li>
                <p><a href="https://www.freebsd.org/releases/11.4R/announce.html">FreeBSD 11.4</a> UFS and ZFS base images are now available in the control panel and via the API.</p>
            </li></ul><h3 id="2020-07-22">July 22</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1220-july-22-2020">v1.22.0</a> of the DigitalOcean Terraform Provider is now available. This release includes <code>auto_upgrade</code> and <code>surge_upgrade</code> support for the <code>digitalocean_kubernetes_cluster</code> resource.</p>
            </li><li>
                <p>Memory-Optimized Droplets are now in <a href="/products/platform/availability-matrix/">general availability</a> and are available in the SFO3 and TOR1 datacenter regions.</p>
            </li><li>
                <p>We have <a href="/release-notes/upcoming/spaces-fra1-nyc3/">reenabled the creation of Spaces in NYC3</a> now that the datacenter&rsquo;s capacity upgrade is complete. The ability to create new Spaces in FRA1 remains disabled while we finish that datacenter capacity upgrade.</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.46.0">v1.46.0 of doctl</a>, the official DigitalOcean CLI. This release includes support for install Kubernetes 1-Click Apps when creating a cluster, surge upgrade support for Kubernetes clusters, and more.</p>
            </li></ul><h3 id="2020-07-20">July 20</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1210-july-20-2020">v1.21.0</a> of the DigitalOcean Terraform Provider is now available. This release includes the addition of <code>https</code> to the list of acceptable healthcheck protocols for the <code>digitalocean_loadbalancer</code> resource.</p>
            </li></ul><h3 id="2020-07-08">July 8</h3>
<ul><li>
                <p>Load balancer health checks <a href="/products/networking/load-balancers/how-to/manage/#health-checks">now support the HTTPS protocol</a>. You can now configure load balancers to verify the health of your Droplets&rsquo; HTTPS endpoints.</p>
            </li></ul><h3 id="2020-07-07">July 7</h3>
<ul><li>
                <p>PostgreSQL 12 is <a href="/products/databases/postgresql/how-to/create/#choose-a-database-engine">now available for database clusters</a>. You can also now <a href="/products/databases/postgresql/how-to/upgrade-version/">perform in-place upgrades</a> for PostgreSQL clusters to newer versions without any downtime. We currently support PostgreSQL 10, 11, and 12.</p>
            </li></ul><h3 id="2020-07-06">July 6</h3>
<ul><li>
                <p>Load balancer health checks <a href="/products/networking/load-balancers/how-to/manage/#health-checks">now support the HTTPS protocol</a>. You can now configure load balancers to verify the health of your Droplets&rsquo; HTTPS endpoints.</p>
            </li></ul><h3 id="2020-07-01">July 1</h3>
<ul><li>
                <p><a href="/products/billing/taxes/sau/">Tax collection for Saudi Arabia</a> has begun. Charges will appear on the August invoice.</p>
            </li><li>
                <p>State tax collection for Arizona, Hawaii, New York, Pennsylvania, Washington, and West Virginia has begun. Charges will appear on the August invoice. <a href="/products/billing/taxes/usa/">Learn more about tax for the United States of America</a>.</p>
            </li></ul><h2 id="june-2020">June 2020</h2>
<h3 id="2020-06-16">June 16</h3>
<ul><li>
                <p>You can now <a href="/products/databases/mysql/how-to/set-sql-mode/">remove all global SQL modes from MySQL database clusters</a>. Global SQL modes affect the SQL syntax MySQL supports and the data validation checks it performs.</p>
            </li></ul><h3 id="2020-06-15">June 15</h3>
<ul><li>
                <p><a href="https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1200-june-15-2020">v1.20.0</a> of the DigitalOcean Terraform Provider is now available. This release includes the addition of a <code>digitalocean_tags</code> data source and improvements to other tag-related resources.</p>
            </li></ul><h3 id="2020-06-10">June 10</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.45.1">v1.45.1 of doctl</a>, the official DigitalOcean CLI. This release updates doctl&rsquo;s Snap packaging that allow Snap users to log in to DigitalOcean Container Registry using the <code>doctl registry login</code> command. To grant access doctl access to your Docker configuration, run <code>snap connect doctl:dot-docker</code>.</p>
            </li></ul><h3 id="2020-06-09">June 9</h3>
<ul><li>
                <p>We have temporarily disabled the creation of new Spaces in FRA1 and NYC3 while we update capacity in these regions. <a href="/release-notes/upcoming/spaces-fra1-nyc3/">Learn more about Spaces in FRA1 and NYC3</a>.</p>
            </li><li>
                <p><a href="/reference/api/api-reference/#operation/domains_list_records">Listing records for a domain</a> now supports filtering by both <code>name</code> and <code>type</code> using query parameters. For example, to only include A records for a domain, send a GET request to <code>/v2/domains/$DOMAIN_NAME/records?type=A</code>To only include records matching <code>sub.example.com</code>, send a GET request to <code>/v2/domains/$DOMAIN_NAME/records?name=sub.example.com</code>. <code>name</code> must be a fully qualified record name. Both <code>name</code> and <code>type</code> may be used together to further filter the records returned.</p>
            </li><li>
                <p><p>The response body to <code>POST</code> requests <a href="/reference/api/api-reference/#operation/droplets_create">creating multiple Droplets</a> has been extended to include an <code>actions</code> link for each Droplet created. For example:</p>
<pre tabindex="0"><code>    &#34;links&#34;: {
      &#34;actions&#34;: [
        {
          &#34;id&#34;: 24404896,
          &#34;rel&#34;: &#34;create&#34;,
          &#34;href&#34;: &#34;https://api.digitalocean.com/v2/actions/24404896&#34;
        },
        {
          &#34;id&#34;: 24404897,
          &#34;rel&#34;: &#34;create&#34;,
          &#34;href&#34;: &#34;https://api.digitalocean.com/v2/actions/24404897&#34;
        }
      ]
    }
</code></pre><p>These can be used to <a href="/reference/api/api-reference/#operation/dropletActions_get">check the status</a> of each individual Droplet create event rather than polling each Droplet.</p>
</p>
            </li></ul><h3 id="2020-06-05">June 5</h3>
<ul><li>
                <p>Beginning 4 June 2020, you are <a href="/products/databases/mysql/how-to/create-primary-keys/">required to create a primary key</a> for each new table in any DigitalOcean Managed MySQL Database to improve cluster performance.</p>
            </li></ul><h3 id="2020-06-03">June 3</h3>
<ul><li>
                <p><a href="https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1190-may-05-2020">v1.19.0</a> of the DigitalOcean Terraform Provider is now available. This release includes initial support the DigitalOcean Container Registry.</p>
            </li></ul><h3 id="2020-06-02">June 2</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.44.0">v1.44.0 of doctl</a>, the official DigitalOcean CLI. This release includes support for specifying a non-default VPC when creating Droplets, load balancers, and Kubernetes clusters. It also adds the ability to set an expiration time for container registry credentials. This can be useful when calling <code>doctl registry login</code> as part of a CI/CD process. A new <code>doctl 1-click list</code> subcommand is now also available.</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.45.0">v1.45.0 of doctl</a>, the official DigitalOcean CLI. This release includes new <code>doctl kubernetes 1-click list</code> and <code>doctl compute droplet 1-click list</code> subcommands.</p>
            </li></ul><h3 id="2020-06-01">June 1</h3>
<ul><li>
                <p>Tax collection for Chile has begun. Charges will appear on the July invoice. <a href="/products/billing/taxes/chl/">Learn more about tax for Chile</a>.</p>
            </li></ul><h2 id="may-2020">May 2020</h2>
<h3 id="2020-05-26">May 26</h3>
<ul><li>
                <p>CoreOS Container Linux has reached end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, this image is now only available via the API. We will remove the CoreOS image from our platform in 30 days.</p>
            </li></ul><h3 id="2020-05-15">May 15</h3>
<ul><li>
                <p>The retention period for <a href="/products/droplets/how-to/graphs/">Droplet performance metrics</a> has been decreased from 30 days to 14 days.</p>
            </li><li>
                <p><a href="/products/networking/reserved-ips/#plans-and-pricing">Unassigned floating IP</a> charges will now appear on invoices. The first charge will appear on July 2020 invoices for all floating IPs that were not assigned to Droplets during the month of June.</p>
            </li><li>
                <p>Users can now search for Marketplace apps directly from the Droplet Create page.</p>
            </li></ul><h3 id="2020-05-12">May 12</h3>
<ul><li>
                <p>The <a href="/products/platform/availability-matrix/">SFO3 datacenter region</a> is now available.</p>
            </li><li>
                <p>The ability to choose a <a href="/products/droplets/how-to/create/#authentication">root password during Droplet creation</a> has been reinstated.</p>
            </li></ul><h3 id="2020-05-06">May 6</h3>
<ul><li>
                <p><p>It is now possible to adjust the behavior of the <a href="/reference/api/oauth-api/">OAuth authorization flow</a> by specifying a <code>prompt</code> and/or <code>max_auth_age</code> query parameter:</p>
<ul>
<li>The <a href="/reference/api/oauth-api/#prompt-parameter"><code>prompt</code></a> query parameter can be used to specify how the authorizing user should be authenticated.</li>
<li>The <a href="/reference/api/oauth-api/#1-request-user-authorization"><code>max_auth_age</code></a> query parameter can be used to determine a deadline (in seconds) after which a user must re-authenticate on the control panel.</li>
</ul>
<p>For more details, consult the <a href="/reference/api/oauth-api/">OAuth documentation</a>.</p>
</p>
            </li></ul><h3 id="2020-05-05">May 5</h3>
<ul><li>
                <p><a href="https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1180-may-05-2020">v1.18.0</a> of the DigitalOcean Terraform Provider is now available. This release includes support for the backend keepalive option for the load balancer resource and data source.</p>
            </li></ul><h2 id="april-2020">April 2020</h2>
<h3 id="2020-04-29">April 29</h3>
<ul><li>
                <p>Users can now <a href="/reference/api/api-reference/#operation/droplets_destroy_withAssociatedResourcesSelective">use the API to destroy select resources associated with a Droplet</a> when destroying a Droplet. You can destroy snapshots, volumes, or volume snapshots associated with a Droplet.</p>
            </li><li>
                <p><p>It is now possible to destroy snapshots, volumes, and volume snapshots associated with a Droplet while destroying the Droplet itself in a single request. A number of new related endpoints are now available:</p>
<ul>
<li>To <a href="/reference/api/api-reference/#operation/droplets_list_associatedResources">list the resources</a> that can be destroyed along with the Droplet, send a GET request to the <code>/v2/droplets/$DROPLET_ID/destroy_with_associated_resources</code> endpoint.</li>
<li>To <a href="/reference/api/api-reference/#operation/droplets_destroy_withAssociatedResourcesSelective">destroy a Droplet along and a sub-set of its associated resources</a>, send a DELETE request to the <code>/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective</code> endpoint.</li>
<li>To <a href="/reference/api/api-reference/#operation/droplets_destroy_withAssociatedResourcesDangerous">destroy a Droplet along with all of its associated resources</a>, send a DELETE request to the <code>/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous</code> endpoint.</li>
<li>To <a href="/reference/api/api-reference/#operation/droplets_get_DestroyAssociatedResourcesStatus">check on the status</a> of a request to destroy a Droplet with its associated resources, send a GET request to the <code>/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status</code> endpoint.</li>
<li>If the status reported any errors, the <a href="/reference/api/api-reference/#operation/droplets_destroy_retryWithAssociatedResources">destroy request can be retried</a> by sending a POST request to the <code>/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry</code> endpoint.</li>
</ul>
</p>
            </li></ul><h3 id="2020-04-28">April 28</h3>
<ul><li>
                <p>The DigitalOcean <a href="/products/networking/vpc/">Virtual Private Cloud (VPC)</a> service is now available for all customers. VPC replaces the private networking service. Existing private networks will continue to function as normal but with the enhanced security and features of the VPC service. See the description of <a href="/products/networking/vpc/#features">VPC features</a> for more information.</p>
            </li><li>
                <p><a href="https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1170-april-28-2020">v1.17.0</a> of the DigitalOcean Terraform Provider is now available. This release includes bug fixes and new Spaces data sources.</p>
            </li><li>
                <p>Load balancers now allow you to set a <a href="/products/networking/load-balancers/how-to/manage/#backend-keepalive">keepalive option</a> for target Droplets.</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.43.0">v1.43.0 of doctl</a>, the official DigitalOcean CLI. This release updates container registry features from beta to early access.</p>
            </li><li>
                <p><a href="https://fedoramagazine.org/announcing-fedora-32/">Fedora 32</a> base image is now available in the control panel and via the API.</p>
            </li><li>
                <p>DigitalOcean Load balancers now allow you to set a <a href="/products/networking/load-balancers/how-to/manage/#backend-keepalive">keepalive option</a> for forwarding rules. Enabling this option allows the load balancer to use fewer active TCP connections to send and receive HTTP requests between the load balancer and your target Droplets.</p>
            </li></ul><h3 id="2020-04-23">April 23</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.42.0">v1.42.0 of doctl</a>, the official DigitalOcean CLI. This release includes a number of small UI improvements and support for additional container registry beta features.</p>
            </li><li>
                <p><a href="https://wiki.ubuntu.com/FocalFossa/ReleaseNotes">Ubuntu 20.04 LTS</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2020-04-22">April 22</h3>
<ul><li>
                <p>The option to set your own root password during Droplet creation has been temporarily removed. You can still choose to connect to your Droplet using an <a href="/products/droplets/how-to/create/#authentication">SSH key or an automatically-generated password via email</a>.</p>
            </li></ul><h3 id="2020-04-21">April 21</h3>
<ul><li>
                <p>You can now <a href="/products/droplets/how-to/create/#authentication">choose a root password</a> during Droplet creation rather than receiving an automatically-generated password via email.</p>
            </li></ul><h3 id="2020-04-14">April 14</h3>
<ul><li>
                <p><a href="https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1160-april-14-2020">v1.16.0</a> of the DigitalOcean Terraform Provider is now available. This release includes VPC support and expanded Spaces support.</p>
            </li><li>
                <p><a href="https://cloud.digitalocean.com/login">The login page</a> now provides quick access to your last-used login method.</p>
            </li></ul><h3 id="2020-04-10">April 10</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.41.0">v1.41.0 of doctl</a>, the official DigitalOcean CLI. This release fixes the link to create a new API token when running <code>doctl auth init</code>.</p>
            </li></ul><h3 id="2020-04-07">April 7</h3>
<ul><li>
                <p>We began the incremental release of the <a href="/products/networking/vpc/">DigitalOcean Virtual Private Cloud (VPC)</a> service. It will be available for all customers soon. VPC replaces the private networking service.</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.40.0">v1.40.0 of doctl</a>, the official DigitalOcean CLI. This release includes a support for VPCs and viewing billing history for an account.</p>
            </li><li>
                <p><p>Starting today, we have begun the incremental release of <a href="/products/networking/vpc/">DigitalOcean VPC</a>, including its API. VPCs (virtual private clouds) allow you to create virtual networks containing resources that can communicate with each other in full isolation using private IP addresses. The VPC service will be available for all customers soon. It replaces the existing private networking service.</p>
<p>When enabled on your account, you will be able to create, configure, list, and delete custom VPCs as well as retrieve information about the resources assigned to them. For example, to <a href="/reference/api/api-reference/#operation/vpcs_create">create a new VPC</a>, make a <code>POST</code> to the <code>/v2/vpcs</code> endpoint with a JSON body like:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;staging-vpc&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;description&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;VPC for the staging environment&#34;</span>
</span></span><span style="display:flex;"><span>  <span style="color:#d88200">&#34;region&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;nyc1&#34;</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>For the more details, see the <a href="/reference/api/api-reference/#tag/VPCs">full API reference documentation</a> for DigitalOcean VPCs.</p>
<h1 id="related-changes">Related Changes</h1>
<p>This release contains related functionality for a number of other DigitalOcean resources.</p>
<p>When VPC is enabled on your account, the <code>private_networking</code> attribute previously used to enable private networking while creating a Droplet will now provision the Droplet inside of your account&rsquo;s default VPC for the region. Use the new <code>vpc_uuid</code> attribute to specify a different VPC.</p>
<p>Kubernetes clusters, load balancers, and database clusters will also be provisioned inside of your account&rsquo;s default VPC for the region when enabled. To specify a non-default VPC, set the appropriate attribute in the JSON body of the create request:</p>
<table>
<thead>
<tr>
<th>Resource</th>
<th>Attribute</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/documentation/v2/#create-a-new-droplet">Droplet</a></td>
<td><code>vpc_uuid</code></td>
</tr>
<tr>
<td><a href="/documentation/v2/#create-a-new-kubernetes-cluster">Kubernetes cluster</a></td>
<td><code>vpc_uuid</code></td>
</tr>
<tr>
<td><a href="/documentation/v2/#create-a-new-load-balancer">Load balancer</a></td>
<td><code>vpc_uuid</code></td>
</tr>
<tr>
<td><a href="/documentation/v2/#create-a-new-database-cluster">Database cluster</a></td>
<td><code>private_networking_uuid</code></td>
</tr>
</tbody>
</table>
</p>
            </li></ul><h2 id="march-2020">March 2020</h2>
<h3 id="2020-03-21">March 21</h3>
<ul><li>
                <p>Business customers in Iceland can now enter their VAT IDs on the billing page. This removes tax charges on future invoices. <a href="/products/billing/taxes/isl/">Learn more about Iceland taxes</a>.</p>
            </li></ul><h3 id="2020-03-19">March 19</h3>
<ul><li>
                <p>The Spaces CDN now has <a href="/products/spaces/how-to/manage-cdn-cache/">separate caches for unique URLs, including query strings</a>.</p>
            </li></ul><h3 id="2020-03-18">March 18</h3>
<ul><li>
                <p><a href="https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1150-march-18-2020">v1.15.0</a> of the DigitalOcean Terraform Provider is now available. This release includes new data sources for accessing information about DigitalOcean regions, images, and projects, a new resource for adding resources to projects not created via Terraform, and a number of other improvements.</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.39.0">v1.39.0 of doctl</a>, the official DigitalOcean CLI. This release includes support for listing and retrieving invoices as well as expanded help output for all commands.</p>
            </li></ul><h3 id="2020-03-16">March 16</h3>
<ul><li>
                <p>Updated the Droplet-based <a href="https://marketplace.digitalocean.com/apps/wordpress">Marketplace WordPress 1-Click application</a> to now use PHP 7.4 and MySQL server 8.0.19.</p>
            </li></ul><h3 id="2020-03-13">March 13</h3>
<ul><li>
                <p>The sign-in experience has been redesigned to help streamline two-factor authentication workflows and enable special announcements.</p>
            </li><li>
                <p>Users who create a 1-Click application can now access the instructions for their app by clicking the <strong>Get Started</strong> link next to their Droplet on the project homepage.</p>
            </li></ul><h3 id="2020-03-12">March 12</h3>
<ul><li>
                <p>You can now only <a href="/products/droplets/how-to/rebuild/">rebuild Droplets from images</a> that use an OS that resides in the same OS family as the Droplet being rebuilt. For example, a Droplet running Ubuntu 16 can be rebuilt from an image running Ubuntu 18, but it cannot be built from an image running Debian.</p>
            </li></ul><h3 id="2020-03-11">March 11</h3>
<ul><li>
                <p>Users can now <a href="/products/images/custom-images/how-to/upload/">upload custom images</a> using FTP URLs.</p>
            </li><li>
                <p>We have finished expanding the AMS3 datacenter to address capacity and load issues with Spaces in that region. As a result, we have reenabled the creation of new Spaces in AMS3. The allowance and rate limits on uploads to Spaces in AMS3 will stay in place to ensure high performance.</p>
            </li><li>
                <p>Debian <a href="https://www.debian.org/News/2020/20200208">10.3</a> and <a href="https://www.debian.org/News/2020/2020020802">9.12</a> base images are now available in the control panel and via the API.</p>
            </li></ul><h3 id="2020-03-09">March 9</h3>
<ul><li>
                <p>Users can now <a href="/products/droplets/how-to/destroy/#destroy-droplet-and-its-associated-resources">destroy select resources associated with a Droplet</a> when destroying a Droplet.</p>
            </li></ul><h3 id="2020-03-04">March 4</h3>
<ul><li>
                <p>Users can now <a href="/products/databases/mysql/how-to/manage-users-and-databases/#password-encryption">set legacy MySQL 5x password encryption</a> for MySQL 8+ Managed Databases from the control panel and API.</p>
            </li><li>
                <p><p>The DigitalOcean managed databases API now supports configuring the user
authentication plug-in for both new and existing MySQL users. This is useful
when needing to connect to a MySQL 8.0 cluster using an application or older
MySQL client that does not support the default <code>caching_sha2_password</code>
authentication plug-in.</p>
<p>For example, to <a href="/reference/api/api-reference/#operation/databases_add_user">create a new MySQL user</a>
using the <code>mysql_native_password</code> authentication plug-in, send a POST request
to <code>/v2/databases/$DATABASE_ID/users</code> with a JSON body like:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;php-app-01&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;mysql_settings&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>    <span style="color:#f92672">&#34;auth_plugin&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;mysql_native_password&#34;</span>
</span></span><span style="display:flex;"><span>  <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>For more details, see the <a href="/reference/api/api-reference/#tag/Databases">full reference documentation for the managed databases API</a>.</p>
</p>
            </li></ul><h3 id="2020-03-01">March 1</h3>
<ul><li>
                <p>Tax collection for <a href="/products/billing/taxes/isl/">Iceland</a> has begun. Charges will appear on the April invoice.</p>
            </li></ul><h2 id="february-2020">February 2020</h2>
<h3 id="2020-02-24">February 24</h3>
<ul><li>
                <p>We began the incremental release of a feature that allows users to destroy select resources associated with a Droplet when they destroy the Droplet.</p>
            </li></ul><h3 id="2020-02-12">February 12</h3>
<ul><li>
                <p>We have renamed the Limited Availability (LA) <a href="/products/platform/product-lifecycle/">product lifecycle stage</a> to Early Availability (EA) to better represent the status of products in that stage. Products in <a href="/products/platform/product-lifecycle/#early-availability">Early Availability</a> are fully functional but not yet production-ready, and may be enabled only for specific user groups as part of an incremental roll-out strategy.</p>
            </li></ul><h3 id="2020-02-06">February 6</h3>
<ul><li>
                <p>To provide a better service for all customers we are introducing burst request rate limits to our public API. Now clients will be rate limited if they consume more than 5% of their total requests for an hour over a 1 minute period (going over 250 requests in a minute). This only affects clients making their requests in large bursts, clients that spread their requests over time will not be affected. Check the <a href="/reference/api/intro/#rate-limit">rate limits documentation</a> for more information about it.</p>
            </li></ul><h3 id="2020-02-05">February 5</h3>
<ul><li>
                <p><a href="https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1140-february-05-2020">v1.14.0</a> of the DigitalOcean Terraform Provider is now available. This release includes a bug fix for projects containing many resources and exposes the Droplet IDs for individual nodes in Kubernetes clusters.</p>
            </li></ul><h3 id="2020-02-04">February 4</h3>
<ul><li>
                <p>Released several improvements for seeking support, including a new <a href="/support/">support starting page</a> that allows you to search DigitalOcean&rsquo;s product documentation, Marketplace, and community tutorials from a single location.</p>
            </li><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.38.0">v1.38.0 of doctl</a>, the official DigitalOcean CLI. This release adds the ability to set Kubernetes node pool labels as well as support for deleting multiple Kubernetes clusters with a single command.</p>
            </li><li>
                <p><p>Our managed DigitalOcean Kubernetes product DOKS now supports setting Kubernetes labels on node pools. Once assigned, they will propagate to the associated pool nodes, both existing and new ones. This way, customers may reliably reference groups of nodes through <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/">label selectors</a> that Kubernetes provides.</p>
<p>Labels can be set on node pool API objects that are accessible on multiple endpoints. For instance, updating an existing node pool by the labels <code>service=web</code> and <code>priority=high</code> is done by submitting a <code>PUT</code> request to the <code>/v2/kubernetes/clusters/&lt;cluster ID&gt;/node_pools/&lt;node ID&gt;</code> endpoint with the following JSON body:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;web&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;count&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">10</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;labels&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>    <span style="color:#f92672">&#34;service&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;web&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>    <span style="color:#f92672">&#34;priority&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;high&#34;</span>
</span></span><span style="display:flex;"><span>  <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>For details, see the <a href="/reference/api/api-reference/#tag/Kubernetes">available operations on the Kubernetes API</a>.</p>
</p>
            </li></ul><h2 id="january-2020">January 2020</h2>
<h3 id="2020-01-30">January 30</h3>
<ul><li>
                <p>Ubuntu 19.04, FreeBSD 12.0, Fedora 28, Fedora 28 Atomic, and Feodra 29 have reached end of life. Per our <a href="/products/droplets/details/image-deprecation/">image deprecation policy</a>, these images are now only available via the API. We will remove the these images from our platform in 30 days.</p>
            </li></ul><h3 id="2020-01-27">January 27</h3>
<ul><li>
                <p><a href="https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1130-january-27-2020">v1.13.0</a> of the DigitalOcean Terraform Provider is now available. This release adds support for tagging Managed Databases clusters.</p>
            </li></ul><h3 id="2020-01-24">January 24</h3>
<ul><li>
                <p><a href="https://github.com/rancher/os/releases/tag/v1.5.5">RancherOS 1.5.5</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2020-01-22">January 22</h3>
<ul><li>
                <p><a href="https://wiki.centos.org/Manuals/ReleaseNotes/CentOS8.1911">CentOS 8.1</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2020-01-14">January 14</h3>
<ul><li>
                <p>Released <a href="https://github.com/digitalocean/doctl/releases/tag/v1.37.0">v1.37.0 of doctl</a>, the official DigitalOcean CLI. This release adds the ability to retrieve account balances.</p>
            </li></ul><h3 id="2020-01-13">January 13</h3>
<ul><li>
                <p>Our API has been extended with <a href="https://developers.digitalocean.com/documentation/changelog/api-v2/new-endpoint-for-retrieving-balance-information/">a new endpoint enabling you to retrieve your account balance</a>. For more information, see the <a href="https://developers.digitalocean.com/documentation/v2/#balance">balance endpoint</a> in the API reference documentation.</p>
            </li><li>
                <p><p>Our API has been extended with a new endpoint enabling you to retrieve balance
information for an account. To do so, make a <code>GET</code> request to <code>/v2/customers/my/balance</code>.
The response will be a JSON body including your balance details. For example:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;month_to_date_balance&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;23.44&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;account_balance&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;12.23&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;month_to_date_usage&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;11.21&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;generated_at&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;2019-07-09T15:01:12Z&#34;</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>For all the details, see the <a href="/reference/api/api-reference/#tag/Balance">balance endpoint</a>
in the full API reference documentation.</p>
</p>
            </li></ul><h3 id="2020-01-01">January 1</h3>
<ul><li>
                <p>Tax collection for <a href="/products/billing/taxes/mys/">Malaysia</a> has begun.</p>
            </li><li>
                <p>Tax collection for <a href="/products/billing/taxes/sgp/">Singapore</a> has begun.</p>
            </li></ul><h2 id="december-2019">December 2019</h2>
<h3 id="2019-12-19">December 19</h3>
<ul><li>
                <p>Released v1.12.0 of the DigitalOcean Terraform Provider. This release contains improvements to Managed Database support including a new resource for configuring trusted sources and the ability to set the global SQL mode or Redis eviction policy on a cluster. There is also a new data source for finding supported Kubernetes versions. Learn more on the <a href="https://do.co/terraform-changelog">Terraform Changelog</a>.</p>
            </li><li>
                <p>Users can now specify the payment method and amount when making payments <a href="https://cloud.digitalocean.com/account/billing">on the billing page</a>.</p>
            </li></ul><h3 id="2019-12-18">December 18</h3>
<ul><li>
                <p><a href="https://fedoramagazine.org/announcing-fedora-31/">Fedora 31</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2019-12-17">December 17</h3>
<ul><li>
                <p>Bandwidth billing for Managed Databases, originally slated to begin in January 2020, has been postponed to 2021. Egress bandwidth for Managed Databases clusters will continue to be waived until then.</p>
            </li><li>
                <p><a href="https://www.debian.org/News/2019/20191116">Debian 10.2</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2019-12-12">December 12</h3>
<ul><li>
                <p>Our <a href="/products/teams/how-to/refer-others/">referral program</a> offer has changed from $50 for 30 days to $100 for 60 days. This change applies only to new referrals. Existing users with referral credits will retain their current balance and credit expiration dates.</p>
            </li><li>
                <p><a href="https://www.freebsd.org/releases/12.1R/relnotes.html">FreeBSD 12.1 (ufs &amp; zfs)</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2019-12-02">December 2</h3>
<ul><li>
                <p><p>The DigitalOcean API currently offers the ability to retrieve a report of all
Droplets co-located on the same physical hardware by sending a GET request to
the <code>/v2/reports/droplet_neighbors</code> endpoint. This endpoint has been deprecated
and will begin responding with an HTTP status of 410 (Gone) on December 17th, 2019.</p>
<p>Today, in its place, a new endpoint is now available: <code>/v2/reports/droplet_neighbors_ids</code>.
Rather than listing the full Droplet object, responses from this endpoint only
contain sets of Droplet IDs co-located on the same physical hardware. For example:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;neighbor_ids&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">[</span><span style="color:#ae81ff">168671828</span><span style="color:#111">,</span><span style="color:#ae81ff">168663509</span><span style="color:#111">,</span><span style="color:#ae81ff">168671815</span><span style="color:#111">],</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">[</span><span style="color:#ae81ff">168671883</span><span style="color:#111">,</span><span style="color:#ae81ff">168671750</span><span style="color:#111">]</span>
</span></span><span style="display:flex;"><span>  <span style="color:#111">]</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>This implementation is more performant and better able to scale for users with
many Droplets. For all the information, find the <a href="/reference/api/api-reference/#tag/Droplets">full API reference documentation here</a>.</p>
<p>The API also continues to offer the ability to list &ldquo;neighbors&rdquo; for a specific
Droplet by sending a GET request to <code>/v2/droplets/$DROPLET_ID/neighbors</code>. This
endpoint will continue to function without change.</p>
<p>We apologize for the inconvenience. If you need guidance on this transition, reach out to the team by <a href="https://www.digitalocean.com/company/contact/#support">opening a support ticket</a>.</p>
</p>
            </li></ul><h3 id="2019-12-01">December 1</h3>
<ul><li>
                <p>Tax collection for <a href="/products/billing/taxes/blr/">Belarus</a> has begun. Charges will appear on the January invoice.</p>
            </li></ul><h2 id="november-2019">November 2019</h2>
<h3 id="2019-11-21">November 21</h3>
<ul><li>
                <p>MySQL managed database clusters now support setting the global SQL mode via the <a href="https://cloud.digitalocean.com/databases">control panel</a> and the <a href="/reference/api/api-reference/#tag/databases">API</a>. See <a href="/products/databases/mysql/how-to/set-sql-mode/">How to Set Global SQL Mode on MySQL Clusters</a> for more information.</p>
            </li><li>
                <p>Users can now <a href="/reference/api/api-reference/#operation/databases_update_firewall_rules">use the DigitalOcean API to set and modify trusted sources for managed databases</a> to restrict incoming connections.</p>
            </li></ul><h3 id="2019-11-20">November 20</h3>
<ul><li>
                <p><p>DigitalOcean&rsquo;s API now supports <a href="/reference/api/api-reference/#operation/firewalls_update">managing a database cluster&rsquo;s firewall rules</a> (known as &ldquo;trusted sources&rdquo; in the control panel) as well as the ability to <a href="/reference/api/api-reference/#operation/databases_get_sql_mode">configure the SQL mode used by MySQL clusters</a>.</p>
<p>Using the <code>/v2/databases/$DATABASE_ID/firewall</code> endpoint, you can specify which resources should be able to open connections to your database. You may limit connections to specific Droplets, Kubernetes clusters, or external IP addresses. When a tag is provided, any Droplet or Kubernetes node with that tag applied to it will have access. For example, the body a <code>PUT</code> request might look like:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;rules&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">{</span><span style="color:#f92672">&#34;type&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;ip_addr&#34;</span><span style="color:#111">,</span> <span style="color:#f92672">&#34;value&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;192.168.1.1&#34;</span><span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">{</span><span style="color:#f92672">&#34;type&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;droplet&#34;</span><span style="color:#111">,</span> <span style="color:#f92672">&#34;value&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;163973392&#34;</span><span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">{</span><span style="color:#f92672">&#34;type&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;k8s&#34;</span><span style="color:#111">,</span> <span style="color:#f92672">&#34;value&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;ff2a6c52-5a44-4b63-b99c-0e98e7a63d61&#34;</span><span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">{</span><span style="color:#f92672">&#34;type&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;tag&#34;</span><span style="color:#111">,</span> <span style="color:#f92672">&#34;value&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;backend&#34;</span><span style="color:#111">}</span>
</span></span><span style="display:flex;"><span>  <span style="color:#111">]</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>To configure the SQL modes for a MySQL cluster, use the <code>/v2/databases/$DATABASE_ID/sql_mode</code> endpoint. For example, the body a <code>PUT</code> request might look like:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;sql_mode&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;ANSI,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION,NO_ZERO_DATE,NO_ZERO_IN_DATE&#34;</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>For more information, see the full API reference documentation for <a href="/reference/api/api-reference/#tag/Databases">managed databases</a>.</p>
</p>
            </li></ul><h3 id="2019-11-19">November 19</h3>
<ul><li>
                <p>DigitalOcean Container Registry has been released in Beta. To request early access, visit <a href="https://www.digitalocean.com/products/container-registry/">the homepage for Container Registry</a>.</p>
            </li><li>
                <p>DigitalOcean Kubernetes users can run <a href="https://github.com/digitalocean/clusterlint">our cluster linter</a> before <a href="/products/kubernetes/how-to/upgrade-cluster/#new-minor-version">upgrading their cluster to a new minor version</a>. The linter automatically finds issues with your cluster and links to recommended fixes.</p>
            </li><li>
                <p>DigitalOcean Kubernetes has added native <a href="/products/kubernetes/getting-started/quickstart/#kubernetes-dashboard">support for the Kubernetes Dashboard for all DOKS clusters</a>.</p>
            </li></ul><h3 id="2019-11-14">November 14</h3>
<ul><li>
                <p>Team owners can now <a href="/products/teams/how-to/require-secure-sign-in/">require secure sign-in for teams</a>.</p>
            </li></ul><h3 id="2019-11-13">November 13</h3>
<ul><li>
                <p>Released v1.11.0 of the DigitalOcean Terraform Provider. Learn more in the <a href="https://do.co/terraform-changelog">Terraform Changelog</a>.</p>
            </li></ul><h3 id="2019-11-08">November 8</h3>
<ul><li>
                <p>Memory-Optimized Droplets are now available in the SGP1 datacenter region. See <a href="/products/droplets/concepts/choosing-a-plan/#dedicated-cpu-memory-optimized-droplet">Choosing the Right Droplet Plan</a> for more information.</p>
            </li></ul><h3 id="2019-11-04">November 4</h3>
<ul><li>
                <p>General Purpose Droplets are now available in the LON1 datacenter region. See <a href="/products/droplets/concepts/choosing-a-plan/#dedicated-cpu-general-purpose-droplet">Choosing the Right Droplet Plan</a> for more information.</p>
            </li></ul><h3 id="2019-11-01">November 1</h3>
<ul><li>
                <p>State tax collection for the <a href="/products/billing/taxes/usa/">United States of America</a> has begun. Charges will appear on the December invoice.</p>
            </li></ul><h2 id="october-2019">October 2019</h2>
<h3 id="2019-10-31">October 31</h3>
<ul><li>
                <p>Released v1.10.0 of the DigitalOcean Terraform Provider. Learn more in the <a href="https://do.co/terraform-changelog">Terraform Changelog</a>.</p>
            </li><li>
                <p>Memory-Optimized Droplets are now in <a href="/products/platform/availability-matrix/">general availability</a> and are available in the NYC1 and SFO2 datacenter regions.</p>
            </li></ul><h3 id="2019-10-23">October 23</h3>
<ul><li>
                <p><a href="/products/networking/load-balancers/">DigitalOcean Load Balancers</a> no longer support downgrading TLS connections to TLS 1.1.</p>
            </li></ul><h3 id="2019-10-21">October 21</h3>
<ul><li>
                <p><a href="https://wiki.ubuntu.com/EoanErmine/ReleaseNotes">Ubuntu 19.10</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2019-10-11">October 11</h3>
<ul><li>
                <p>Users can now see the sign-in method (email, email + 2FA, Google, or GitHub) for team members on the <a href="https://cloud.digitalocean.com/account/team">team account page</a> in the control panel.</p>
            </li></ul><h3 id="2019-10-03">October 3</h3>
<ul><li>
                <p><p>The <a href="https://blog.digitalocean.com/new-on-digitalocean-kubernetes/">DigitalOcean Kubernetes (DOKS) October release is now available</a>, and contains the following new features:</p>
<ul>
<li>
<p><a href="/products/kubernetes/how-to/autoscale/">Cluster autoscaling</a>.</p>
</li>
<li>
<p><a href="/products/kubernetes/how-to/connect-to-cluster/">Connecting to clusters with OAuth tokens</a>.</p>
</li>
<li>
<p><a href="/products/kubernetes/how-to/upgrade-cluster/">Support for minor version upgrades</a>.</p>
</li>
</ul>
</p>
            </li></ul><h2 id="september-2019">September 2019</h2>
<h3 id="2019-09-30">September 30</h3>
<ul><li>
                <p>Released v1.8.0 of the DigitalOcean Terraform Provider. Learn more in the <a href="https://do.co/terraform-changelog">Terraform Changelog</a>.</p>
            </li></ul><h3 id="2019-09-24">September 24</h3>
<ul><li>
                <p>Redis Managed Databases are now in <a href="/products/platform/product-lifecycle/#general-availability">General Availability</a> with the addition of <a href="/products/databases/redis/how-to/monitor-clusters/">monitoring insights</a>.</p>
            </li></ul><h3 id="2019-09-23">September 23</h3>
<ul><li>
                <p>DigitalOcean now supports 3-D Secure (3DS) second-factor payment authentication, allowing us to accept payment from banks that require it.</p>
            </li></ul><h3 id="2019-09-20">September 20</h3>
<ul><li>
                <p>The <a href="https://cloud.digitalocean.com/account/billing">Billing page</a> in the control panel now splits the costs displayed between payment due and the amount not yet billed for the active billing cycle.</p>
            </li></ul><h3 id="2019-09-10">September 10</h3>
<ul><li>
                <p><a href="/products/droplets/concepts/choosing-a-plan/#dedicated-cpu-memory-optimized-droplet">Memory-Optimized Droplets</a> are now in Limited Availability in the NYC3 and AMS3 regions. See <a href="https://blog.digitalocean.com/introducing-memory-optimized-droplets/">Introducing Memory-Optimized Droplets with 8 GB RAM for Each Dedicated vCPU</a> to learn more.</p>
            </li></ul><h3 id="2019-09-06">September 6</h3>
<ul><li>
                <p>The <a href="https://marketplace.digitalocean.com/apps/openebs-1">OpenEBS</a> (Kubernetes) <a href="/products/marketplace/">One-Click Application</a> has been released.</p>
            </li></ul><h3 id="2019-09-04">September 4</h3>
<ul><li>
                <p>Managed Databases for MySQL and Redis are now available in SGP1, BLR1, and TOR1, and MySQL is now in <a href="/products/platform/product-lifecycle/#general-availability">General Availability</a>. Learn more in the <a href="https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases">MySQL and Redis announcement blog post</a>.</p>
            </li><li>
                <p>The <a href="https://marketplace.digitalocean.com/apps/chamilo">Chamilo</a> <a href="/products/marketplace/">One-Click Application</a> has been released.</p>
            </li></ul><h3 id="2019-09-01">September 1</h3>
<ul><li>
                <p>Value Added Tax (VAT) collection for <a href="/products/billing/taxes/kor/">South Korea</a> and Quebec Sales Tax (QST) collection for <a href="/products/billing/taxes/can/">Quebec, Canada</a> have begun. Charges will appear on the October invoice.</p>
            </li></ul><h2 id="august-2019">August 2019</h2>
<h3 id="2019-08-27">August 27</h3>
<ul><li>
                <p>Released <a href="https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#170-august-27-2019">Version 1.7.0</a> of the DigitalOcean Terraform provider.</p>
            </li><li>
                <p>Managed Databases for MySQL and Redis in Limited Availability are now available in the AMS3, LON1, and NYC3 datacenter regions. Learn more in the <a href="https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases">MySQL and Redis announcement blog post</a>.</p>
            </li></ul><h3 id="2019-08-26">August 26</h3>
<ul><li>
                <p>Volume limits for verified accounts have been raised from 10 volumes per account/500 GB of volume data per region to 100 volumes per account/16 TB per region. Unverified accounts are still limited to 10 volumes/500 GB. Learn more about <a href="/products/accounts/#verification">account verification</a>.</p>
            </li></ul><h3 id="2019-08-23">August 23</h3>
<ul><li>
                <p>Users can now specify an account address within their <strong><a href="https://cloud.digitalocean.com/account/billing">Billing Settings</a></strong>. This address will be reflected on invoices and will also be used to determine tax location. <a href="/products/billing/taxes/">Learn more about tax locations</a>.</p>
            </li></ul><h3 id="2019-08-22">August 22</h3>
<ul><li>
                <p>The <code>/v2/volumes?name=$VOLUME_NAME</code> endpoint now lists all volumes that match the specified name as a query parameter. For more information, see the API v2 reference documentation on <a href="/reference/api/api-reference/#operation/volumes_list">list volumes filtered by name</a>.</p>
            </li></ul><h3 id="2019-08-20">August 20</h3>
<ul><li>
                <p>Managed Databases for MySQL and Redis have been released in early availability in the NYC1, FRA1, and SFO2 datacenter regions. Learn more in the <a href="https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases">MySQL and Redis announcement blog post</a>.</p>
            </li><li>
                <p><a href="/products/networking/load-balancers/">DigitalOcean Load Balancers</a> no longer support downgrading TLS connections to TLS 1.0. We will stop supporting TLS 1.1 later this year.</p>
            </li><li>
                <p><p>Today DigitalOcean&rsquo;s Managed Database service launched support for two new database engines, MySQL and Redis. Both are currently in <a href="/products/platform/product-lifecycle/">Limited Availability</a> and can initially be used in the NYC1, FRA1, and SFO2 regions.</p>
<p>When creating a new database cluster using the API, you must specify the <code>engine</code> attribute to select which type of database to use (<code>mysql</code> for MySQL or <code>redis</code> for Redis). For example, to <a href="/reference/api/api-reference/#operation/databases_create_cluster">create a new Redis cluster</a>, make a <code>POST</code> to the <code>/v2/databases</code> endpoint with a JSON body like:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;cache-01&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;engine&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;redis&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;version&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;5&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;region&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;nyc1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;size&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;db-s-1vcpu-2gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;num_nodes&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">2</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>See the <a href="/reference/api/api-reference/#tag/Databases">full API reference documentation</a> for all the details. For more information about DigitalOcean Managed Databases including the roll-out plan for additional regions, check out the <a href="https://blog.digitalocean.com/take-the-worry-out-of-managing-your-mysql-redis-databases">blog post announcing the release</a>.</p>
</p>
            </li></ul><h3 id="2019-08-19">August 19</h3>
<ul><li>
                <p>You can now create a maximum of one snapshot of a volume every 10 minutes. See <a href="/products/images/snapshots/">the snapshots overview</a> for more details.</p>
            </li><li>
                <p>Floating IP Address rate limit information was added to the <a href="https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet">DigitalOcean API Documentation</a>.</p>
            </li><li>
                <p>Began the incremental release of new <a href="/products/volumes/">block storage volume</a> limits. By the end of the release, all verified accounts will be able to create up to 100 volumes or use a total of 16 TB of volume data per region. Unverified accounts will be allowed 10 volumes or to use a total of 500 GB per region.</p>
            </li></ul><h3 id="2019-08-14">August 14</h3>
<ul><li>
                <p>The default Ubuntu x64 base image has been updated from 18.04.1 to 18.04.3. For details about 18.04.3, see the <a href="https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes">Ubuntu release notes</a>.</p>
            </li></ul><h3 id="2019-08-13">August 13</h3>
<ul><li>
                <p>The credit card input form on the <a href="https://cloud.digitalocean.com/billing">billing page</a> in the control panel has been modified to simplify billing address entry.</p>
            </li></ul><h3 id="2019-08-05">August 5</h3>
<ul><li>
                <p>Released version <a href="https://do.co/terraform-changelog#160-august-05-2019">1.6.0</a> of the DigitalOcean Terraform provider.</p>
            </li></ul><h2 id="july-2019">July 2019</h2>
<h3 id="2019-07-29">July 29</h3>
<ul><li>
                <p>Released <code>doctl</code> <a href="https://github.com/digitalocean/doctl/releases/tag/v1.24.1">version 1.24.1</a>, which is also now available in Docker Hub. You can download it with <code>docker pull digitalocean/doctl</code>.</p>
            </li></ul><h3 id="2019-07-19">July 19</h3>
<ul><li>
                <p>We&rsquo;ve disabled creating new Spaces in AMS3 until we complete maintenance on the datacenter as part of addressing Spaces performance concerns. <a href="/release-notes/upcoming/spaces-ams3/">Learn more about Spaces AMS3 availability</a>.</p>
            </li></ul><h3 id="2019-07-18">July 18</h3>
<ul><li>
                <p><a href="https://github.com/digitalocean/doctl/releases/tag/v1.22.0"><code>doctl</code> version 1.22</a> was released.</p>
            </li></ul><h3 id="2019-07-12">July 12</h3>
<ul><li>
                <p><a href="https://www.freebsd.org/releases/11.3R/relnotes.html">FreeBSD 11.3</a> base image is now available in the control panel and via the API.</p>
            </li><li>
                <p><a href="https://www.digitalocean.com/products/linux-distribution/freebsd/">FreeBSD 12 (ufs &amp; zfs)</a> images have been updated to fix a bug related to private networking and SSH keys.</p>
            </li></ul><h3 id="2019-07-11">July 11</h3>
<ul><li>
                <p>DigitalOcean users can now sign up and sign in to DigitalOcean with <a href="https://cloud.digitalocean.com/account/profile">GitHub OAuth</a>. Users can switch their login type between password-based, Google OAuth, and GitHub OAuth.</p>
            </li></ul><h3 id="2019-07-09">July 9</h3>
<ul><li>
                <p>Downloadable CSV invoices available on the control panel <a href="https://cloud.digitalocean.com/account/billing">billing page</a> have been updated to include project names for each Droplet.</p>
            </li></ul><h3 id="2019-07-08">July 8</h3>
<ul><li>
                <p><a href="https://www.debian.org/releases/buster/amd64/release-notes/index.en.html">Debian 10 (buster)</a> base image is now available in the control panel and via the API.</p>
            </li></ul><h3 id="2019-07-03">July 3</h3>
<ul><li>
                <p>The installation repo for the <a href="/products/monitoring/how-to/install-agent/">metrics agent</a> has been moved to DigitalOcean Spaces.</p>
            </li><li>
                <p>Kubernetes Monitoring Stack (Beta), FASTPANEL, SolidInvoice, and OpenCart third-party <a href="/products/marketplace/">One-Click applications</a> were released.</p>
            </li></ul><h3 id="2019-07-02">July 2</h3>
<ul><li>
                <p>The Prometheus 2.9.2, RethinkDB 2.4.0, Mattermost 5.12.0, and Buddy third-party <a href="/products/marketplace/">One-Click applications</a> were released.</p>
            </li></ul><h2 id="june-2019">June 2019</h2>
<h3 id="2019-06-25">June 25</h3>
<ul><li>
                <p>The ttl of a domain record now has a minimum value of 30 seconds, and if not set, the default value has changed from 1800 to the ttl of the SOA record.</p>
            </li></ul><h3 id="2019-06-17">June 17</h3>
<ul><li>
                <p>6-hour and 1-day <a href="/products/monitoring/how-to/set-up-alerts/">alert policies</a> for Droplets and Kubernetes worker nodes have been deprecated. No new alert policies with these intervals can be created. Existing alert policies using these intervals will remain in place until 1 August 2019, at which point they will be modified to reflect a 1-hour interval.</p>
            </li></ul><h3 id="2019-06-03">June 3</h3>
<ul><li>
                <p><a href="https://github.com/rancher/os/releases">RancherOS v1.5.2</a> base images have replaced RancherOS v1.5.1 base images in the control panel and API.</p>
            </li></ul><h2 id="may-2019">May 2019</h2>
<h3 id="2019-05-30">May 30</h3>
<ul><li>
                <p><p>DigitalOcean Managed Databases now provide support for private networking. All new database clusters will be provisioned with private networking enabled. Existing clusters will require an update to connect over the private network. This can be triggered in the <a href="https://cloud.digitalocean.com/databases">control panel</a>.</p>
<p>Databases, read-only replicas, and connection pools will now contain a new <code>private_connection</code> object holding the information needed to access the resource via the private network. Its attributes are identical to the existing <code>connection</code> object, but the values for <code>private_connection.uri</code> and <code>private_connection.host</code> will contain FQDNs only accessible from resources (e.g. Droplets or Kubernetes clusters) within your account and in the same region.</p>
<p>For more information, see the full <a href="/reference/api/api-reference/#tag/Databases">Managed Databases API documentation</a>.</p>
</p>
            </li></ul><h3 id="2019-05-29">May 29</h3>
<ul><li>
                <p><a href="/products/databases/">DigitalOcean Managed Databases</a> now support <a href="/products/networking/vpc/">private networking</a>. New database clusters will provision with private networking enabled. Existing clusters will require an update to connect over the private network.</p>
            </li></ul><h3 id="2019-05-22">May 22</h3>
<ul><li>
                <p><a href="https://www.freebsd.org/releases/">FreeBSD 12.0</a> (ufs &amp; zfs) base images are now available in the control panel and via the API.</p>
            </li><li>
                <p><a href="https://www.freebsd.org/releases/">FreeBSD 10.4</a> (ufs &amp; zfs) reached end of life and was removed from the control panel.</p>
            </li><li>
                <p><a href="https://fedoraproject.org/wiki/Releases">Fedora 27</a> reached end of life and was removed from the control panel.</p>
            </li></ul><h3 id="2019-05-21">May 21</h3>
<ul><li>
                <p><p><a href="/products/kubernetes/">DigitalOcean Kubernetes</a> is now <a href="/products/platform/product-lifecycle/#general-availability">Generally Available</a>. Highlights include:</p>
<ul>
<li>
<p><a href="/products/platform/availability-matrix/">Availability</a> in SGP1 and TOR1.</p>
</li>
<li>
<p>Support for <a href="/products/kubernetes/how-to/upgrade-cluster/">patch version upgrades</a>.</p>
</li>
<li>
<p>Configurable maintenance window and automatic upgrade options.</p>
</li>
<li>
<p>Delete node feature, which removes a specific node from a worker pool.</p>
</li>
<li>
<p><a href="/products/kubernetes/how-to/monitor-basic/">Basic</a> and <a href="/products/kubernetes/how-to/monitor-advanced/">advanced monitoring</a> insights for resource utilization and deployment status metrics.</p>
</li>
</ul>
</p>
            </li><li>
                <p>SOA records are now returned in record results, and you can update the TTL on a SOA record as you would with other records. This allows you to control the negative caching of your domain. SOA records cannot be manually deleted or created on a domain, they are created when the domain is created, and cleaned up on the domain deletion.</p>
            </li><li>
                <p><p>Today, we are promoting the Kubernetes API to General Availability. As part of this release, we have also extended the API with additional functionality:</p>
<ul>
<li>
<p>When creating or updating a cluster, you may now configure a maintenance window policy specifying the day of the week and time of day that updates should take place for the cluster. Additionally, setting a cluster&rsquo;s <code>auto_upgrade</code> attribute to <code>true</code> will specify that the cluster can be automatically upgraded to new Kubernetes patch releases (e.g.  1.13.1 to 1.13.2) during its maintenance window.</p>
</li>
<li>
<p>An <code>upgrade</code> endpoint is now available to imminently <a href="/reference/api/api-reference/#operation/kubernetes_upgrade_cluster">trigger an upgrade</a> to a newer patch release of Kubernetes at your own convienience. You may list available upgrades for your cluster using <a href="/reference/api/api-reference/#operation/kubernetes_get_availableUpgrades">the <code>upgrades</code> endpoint</a>.</p>
</li>
<li>
<p>In order to give users finer control over individual nodes, the <code>recycle</code> endpoint has been deprecated. Instead, we now offer the ability to <a href="/reference/api/api-reference/#operation/kubernetes_delete_node">delete or replace specific nodes</a> in a node pool. By default, workloads will be drained from the node before deletion. Appending the <code>skip_drain=1</code> query parameter to the request will cause the node to be imminently deleted. Appending the <code>replace=1</code> query parameter to the request will cause the node to be replaced by a new one after it has been deleted.</p>
</li>
</ul>
<p>For the full details, see the API reference documentation for <a href="/reference/api/api-reference/#tag/Kubernetes">Kubernetes</a>.</p>
<p>Thank you to everyone who took the time to provide us with feedback.</p>
</p>
            </li></ul><h3 id="2019-05-16">May 16</h3>
<ul><li>
                <p>Our <a href="/products/teams/how-to/refer-others/">referral program</a> offer has changed from $100 for 60 days to $50 for 30 days. This change applies only to new referrals. Existing users with referral credits will retain their current balance and credit expiration dates.</p>
            </li></ul><h3 id="2019-05-09">May 9</h3>
<ul><li>
                <p><a href="/products/databases/">Managed Databases</a> are now in <a href="/products/platform/product-lifecycle/#general-availability">General Availability</a>. New features include enhanced monitoring insights, support for projects and tags, and availability in the Singapore (SGP1) region.</p>
            </li><li>
                <p>Released v1.3.0 of the DigitalOcean Terraform Provider. Learn more on the Terraform Changelog.</p>
            </li><li>
                <p><a href="/products/spaces/">Spaces</a> are now available in the Frankfurt (FRA1) region.</p>
            </li></ul><h3 id="2019-05-07">May 7</h3>
<ul><li>
                <p>Creating Spaces in NYC3 is now re-enabled.</p>
            </li></ul><h3 id="2019-05-03">May 3</h3>
<ul><li>
                <p><a href="https://kubernetes.io/blog/2019/03/25/kubernetes-1-14-release-announcement/">Kubernetes version 1.14.1</a> is now available for cluster creation in <a href="https://cloud.digitalocean.com/kubernetes/clusters">DOKS</a>.</p>
            </li></ul><h3 id="2019-05-01">May 1</h3>
<ul><li>
                <p><a href="https://docs.fedoraproject.org/en-US/fedora/rawhide/release-notes/">Fedora 30</a> base images are now available in the control panel and via the API using the slug <code>fedora-30-x64</code>.</p>
            </li><li>
                <p>Value Added Tax (VAT) collection for <a href="/products/billing/taxes/nor/">Norway</a>, <a href="/products/billing/taxes/zaf/">South Africa</a>, and <a href="/products/billing/taxes/are/">the United Arab Emirates</a> and Good and Services Tax (GST) collection for <a href="/products/billing/taxes/nzl/">New Zealand</a> have begun. Charges will appear on the June invoice.</p>
            </li></ul><h2 id="april-2019">April 2019</h2>
<h3 id="2019-04-30">April 30</h3>
<ul><li>
                <p><a href="https://wiki.ubuntu.com/Releases">Ubuntu 14.04</a> reached end of life and was removed from the control panel.</p>
            </li></ul><h3 id="2019-04-24">April 24</h3>
<ul><li>
                <p><a href="https://cloud.digitalocean.com/kubernetes/clusters">DOKS</a> node pools can now be named at creation time.</p>
            </li><li>
                <p><a href="https://cloud.digitalocean.com/kubernetes/clusters">DOKS</a> master nodes now automatically rotate logs to avoid disk space issues.</p>
            </li></ul><h3 id="2019-04-23">April 23</h3>
<ul><li>
                <p>Released v1.2.0 of the DigitalOcean Terraform Provider. Learn more: <a href="https://do.co/terraform-changelog">https://do.co/terraform-changelog</a></p>
            </li><li>
                <p>The control panel <a href="https://cloud.digitalocean.com/account/billing">billing page</a> now includes a breakdown of your spending and a downloadable PDF of your invoice.</p>
            </li></ul><h3 id="2019-04-18">April 18</h3>
<ul><li>
                <p><a href="https://wiki.ubuntu.com/DiscoDingo/ReleaseNotes">Ubuntu 19.04</a> base images are now available in the <a href="https://cloud.digitalocean.com/droplets/new">control panel</a> and via <a href="/reference/">the API</a> using the slug <code>ubuntu-19-04-x64</code>.</p>
            </li></ul><h3 id="2019-04-16">April 16</h3>
<ul><li>
                <p>The <code>/v2/volumes/$volume_id/snapshots</code> endpoint now accepts tags at creation time, and these are reflected on the <code>/v2/snapshots</code> endpoint. Volume snapshot tags may now be managed with the <code>/v2/tags</code> endpoint as well. For more information, see the API reference documentation for both <a href="/reference/api/api-reference/#tag/Block-Storage">volumes</a> and <a href="/reference/api/api-reference/#tag/Tags">tags</a>.</p>
            </li></ul><h3 id="2019-04-10">April 10</h3>
<ul><li>
                <p>The ONLYOFFICE third-party <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li></ul><h3 id="2019-04-09">April 9</h3>
<ul><li>
                <p><p>The new <a href="/products/monitoring/">metrics agent</a> is fully released into production. Highlights include:</p>
<ul>
<li>
<p>A simpler way to contribute custom metrics</p>
</li>
<li>
<p>A new <a href="/products/droplets/how-to/graphs/">load average plot</a></p>
</li>
<li>
<p>Fedora 27 support</p>
</li>
<li>
<p><a href="/products/monitoring/how-to/opt-out-process-name-collection/">Process name collection opt-out</a></p>
</li>
</ul>
<p>This will be the default agent used by our <a href="/products/databases/">managed databases</a> and <a href="/products/kubernetes/">Kubernetes</a> products. All agent installations on or after this date will receive the new agent by default. On 8 July 2019, the legacy metrics agent will be deprecated, meaning users will no longer be able to view metrics from Droplets running the legacy agent. You can <a href="/products/monitoring/how-to/upgrade-legacy-agent/">upgrade to the new agent</a> at any time.</p>
</p>
            </li><li>
                <p><p>Spaces, DigitalOcean&rsquo;s object storage solution, includes a built-in CDN. <a href="https://blog.digitalocean.com/custom-subdomains-for-spaces-cdn-endpoints">Today we&rsquo;ve added the ability</a> to use custom subdomains with your CDN endpoints. When configuring your CDN via the API, you can now set the <code>custom_domain</code> attribute to use a subdomain with the endpoint. When a custom subdomain is in use, the <code>certificate_id</code> attribute is also required. Its value must be the ID of a <a href="/reference/api/api-reference/#tag/Certificates">DigitalOcean managed SSL certificate</a>. For example, the body of your request to enable a CDN might look like:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;origin&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;static-images.nyc3.digitaloceanspaces.com&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;certificate_id&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;892071a0-bb95-49bc-8021-3afd67a210bf&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;custom_domain&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;static.example.com&#34;</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>See <a href="/reference/api/api-reference/#tag/CDN-Endpoints">here for more information</a> about using the API to configure Spaces CDN endpoints.</p>
</p>
            </li></ul><h3 id="2019-04-05">April 5</h3>
<ul><li>
                <p>The OpenVPN and GrandNode third-party <a href="/products/marketplace/">One-Click applications</a> were released.</p>
            </li></ul><h3 id="2019-04-02">April 2</h3>
<ul><li>
                <p>General Purpose Performance Droplet plans are now in <a href="/products/platform/product-lifecycle/#general-availability">General Availability</a> with the addition of <a href="/products/platform/availability-matrix/">SFO2, AMS3, and SGP1</a>.</p>
            </li></ul><h3 id="2019-04-01">April 1</h3>
<ul><li>
                <p>To help customers track their credits, beginning in April we will send <a href="/products/billing/invoices/">invoice emails</a> when customers use any resources during a billing period, regardless of an account&rsquo;s outstanding balance. Previously, invoices were sent only when the outstanding balance exceeded the threshold for automatic payments.</p>
            </li><li>
                <p>The Zabbix and Mastodon third-party <a href="/products/marketplace/">One-Click applications</a> were released.</p>
            </li></ul><h2 id="march-2019">March 2019</h2>
<h3 id="2019-03-30">March 30</h3>
<ul><li>
                <p><a href="https://lists.debian.org/debian-cloud/2018/10/msg00045.html">Debian 8 has reached end of life</a> and has been removed from the control panel and API.</p>
            </li></ul><h3 id="2019-03-27">March 27</h3>
<ul><li>
                <p>The Acra, Gladius Accelerator, and Selenoid third-party <a href="/products/marketplace/">One-Click applications</a> were released.</p>
            </li></ul><h3 id="2019-03-20">March 20</h3>
<ul><li>
                <p>DOKS customers will now be able to see the cost of their Kubernetes nodes and load balancers aggregated by cluster name within a Kubernetes clusters group on their <a href="/products/billing/invoices/">invoice</a>. Volumes and volume snapshots used in a DOKS cluster are not yet included in the cluster aggregation.</p>
            </li></ul><h3 id="2019-03-19">March 19</h3>
<ul><li>
                <p><a href="/products/networking/load-balancers/">DigitalOcean Load Balancers</a> now support PROXY protocol version 1.</p>
            </li><li>
                <p><p>DigitalOcean Load Balancers <a href="https://blog.digitalocean.com/load-balancers-now-support-proxy-protocol">now support</a> using PROXY Protocol to pass information like origin IP addresses and port numbers from connecting client requests along to the backend service. This can be configured <a href="/reference/api/api-reference/#operation/loadBalancers_create">using the API</a> by setting the new <code>enable_proxy_protocol</code> attribute to <code>true</code> when creating a new Load Balancer or updating an existing one.</p>
<p>See <a href="/products/networking/load-balancers/#proxy-protocol">here for more information</a> about using PROXY Protocol with DigitalOcean Load Balancers.</p>
</p>
            </li></ul><h3 id="2019-03-14">March 14</h3>
<ul><li>
                <p>The Akaunting and Caprover third-party <a href="/products/marketplace/">One-Click applications</a> were released.</p>
            </li></ul><h3 id="2019-03-05">March 5</h3>
<ul><li>
                <p>The <a href="/products/marketplace/">DigitalOcean Marketplace</a> is now in General Availability.</p>
            </li></ul><h3 id="2019-03-04">March 4</h3>
<ul><li>
                <p>The Microweber third-party <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li></ul><h3 id="2019-03-01">March 1</h3>
<ul><li>
                <p>The following third-party <a href="/products/marketplace/">One-Click applications</a> were released: CloudBees, Jenkins, cPanel, Passbolt, Directus, and Nimbella.</p>
            </li></ul><h2 id="february-2019">February 2019</h2>
<h3 id="2019-02-28">February 28</h3>
<ul><li>
                <p>The Bitwarden and Redash third-party <a href="/products/marketplace/">One-Click applications</a> were released.</p>
            </li></ul><h3 id="2019-02-27">February 27</h3>
<ul><li>
                <p>Public beta was opened for the new metrics agent. <a href="/products/monitoring/how-to/upgrade-legacy-agent/">See how to update your metrics agent here</a>.</p>
            </li></ul><h3 id="2019-02-26">February 26</h3>
<ul><li>
                <p>The third-party InfluxDB <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li><li>
                <p>The GitLab <a href="/products/marketplace/">One-Click application</a> maintained by DigitalOcean was replaced in the control panel by a GitLab Enterprise Edition maintained by GitLab. The corresponding API slug, <code>gitlab-18-04</code>, is deprecated and will be removed in 90 days. The new slug, <code>gitlab-ee-18-04</code> is available now.</p>
            </li><li>
                <p><a href="/products/droplets/#plans-and-pricing">General Purpose Performance Droplet plans</a> were released.</p>
            </li></ul><h3 id="2019-02-15">February 15</h3>
<ul><li>
                <p><p>As <a href="/release-notes#September-5">announced on September 5, 2018</a>, the <code>last_tagged</code> attribute returned in response to GET requests to the <code>/v2/tags</code> or <code>/v2/tags/$TAG_NAME</code> endpoints has been deprecated. Beginning <strong>March 1st, 2019</strong>, <code>last_tagged</code> will no longer be populated in favor of the <code>last_tagged_uri</code> attribute.</p>
<p>For example, a GET request to <code>/v2/tags/frontend</code> currently might return:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;tag&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>    <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;frontend&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>    <span style="color:#f92672">&#34;resources&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;count&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">3</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;last_tagged_uri&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;https://api.digitalocean.com/v2/droplets/132000916&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;droplets&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;count&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">3</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;last_tagged&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;id&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">132000916</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;suspicious-bhabha-u8zq&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;memory&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">2048</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;vcpus&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">2</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;disk&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">60</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;locked&#34;</span><span style="color:#111">:</span> <span style="color:#00a8c8">false</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;status&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;active&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;kernel&#34;</span><span style="color:#111">:</span> <span style="color:#00a8c8">null</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;created_at&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;2019-02-13T05:29:52Z&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;features&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>            <span style="color:#d88200">&#34;private_networking&#34;</span>
</span></span><span style="display:flex;"><span>          <span style="color:#111">],</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;backup_ids&#34;</span><span style="color:#111">:</span> <span style="color:#111">[],</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;next_backup_window&#34;</span><span style="color:#111">:</span> <span style="color:#00a8c8">null</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;snapshot_ids&#34;</span><span style="color:#111">:</span> <span style="color:#111">[],</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;image&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;id&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">43509743</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;do-kube-1.12.3&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;distribution&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;Debian&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;slug&#34;</span><span style="color:#111">:</span> <span style="color:#00a8c8">null</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;public&#34;</span><span style="color:#111">:</span> <span style="color:#00a8c8">false</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;regions&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;ams2&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;ams3&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;blr1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;fra1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;lon1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;nyc1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;nyc2&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;nyc3&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;sfo1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;sfo2&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;sgp1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;tor1&#34;</span>
</span></span><span style="display:flex;"><span>            <span style="color:#111">],</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;created_at&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;2019-02-11T20:38:04Z&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;min_disk_size&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">20</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;type&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;snapshot&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;size_gigabytes&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">2.99</span>
</span></span><span style="display:flex;"><span>          <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;volume_ids&#34;</span><span style="color:#111">:</span> <span style="color:#111">[],</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;size&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;slug&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;s-2vcpu-2gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;memory&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">2048</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;vcpus&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">2</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;disk&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">60</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;transfer&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">3</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;price_monthly&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">15</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;price_hourly&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">0.02232</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;regions&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;ams2&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;ams3&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;blr1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;fra1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;lon1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;nyc1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;nyc2&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;nyc3&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;sfo1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;sfo2&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;sgp1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;tor1&#34;</span>
</span></span><span style="display:flex;"><span>            <span style="color:#111">],</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;available&#34;</span><span style="color:#111">:</span> <span style="color:#00a8c8">true</span>
</span></span><span style="display:flex;"><span>          <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;size_slug&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;s-2vcpu-2gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;networks&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;v4&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>              <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>                <span style="color:#f92672">&#34;ip_address&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;192.0.2.255&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>                <span style="color:#f92672">&#34;netmask&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;255.255.240.0&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>                <span style="color:#f92672">&#34;gateway&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;192.0.2.1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>                <span style="color:#f92672">&#34;type&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;public&#34;</span>
</span></span><span style="display:flex;"><span>              <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>              <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>                <span style="color:#f92672">&#34;ip_address&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;10.136.121.81&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>                <span style="color:#f92672">&#34;netmask&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;255.255.0.0&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>                <span style="color:#f92672">&#34;gateway&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;10.136.0.1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>                <span style="color:#f92672">&#34;type&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;private&#34;</span>
</span></span><span style="display:flex;"><span>              <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span>            <span style="color:#111">],</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;v6&#34;</span><span style="color:#111">:</span> <span style="color:#111">[]</span>
</span></span><span style="display:flex;"><span>          <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;region&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;New York 1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;slug&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;nyc1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;sizes&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-1vcpu-3gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-1vcpu-1gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-3vcpu-1gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-1vcpu-2gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-2vcpu-2gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-2vcpu-4gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-4vcpu-8gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-16vcpu-64gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-6vcpu-16gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-8vcpu-32gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-12vcpu-48gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-20vcpu-96gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-24vcpu-128gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;s-32vcpu-192gb&#34;</span>
</span></span><span style="display:flex;"><span>            <span style="color:#111">],</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;features&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;private_networking&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;backups&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;ipv6&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;metadata&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;install_agent&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;server_id&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>              <span style="color:#d88200">&#34;management_networking&#34;</span>
</span></span><span style="display:flex;"><span>            <span style="color:#111">],</span>
</span></span><span style="display:flex;"><span>            <span style="color:#f92672">&#34;available&#34;</span><span style="color:#111">:</span> <span style="color:#00a8c8">true</span>
</span></span><span style="display:flex;"><span>          <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>          <span style="color:#f92672">&#34;tags&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>            <span style="color:#d88200">&#34;frontend&#34;</span>
</span></span><span style="display:flex;"><span>          <span style="color:#111">]</span>
</span></span><span style="display:flex;"><span>        <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;last_tagged_uri&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;https://api.digitalocean.com/v2/droplets/132000916&#34;</span>
</span></span><span style="display:flex;"><span>      <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;images&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;count&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">1</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;last_tagged_uri&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;https://api.digitalocean.com/v2/images/42991114&#34;</span>
</span></span><span style="display:flex;"><span>      <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;volumes&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;count&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">0</span>
</span></span><span style="display:flex;"><span>      <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span>  <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>Following this change, the new response would look like:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;tag&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>    <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;frontend&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>    <span style="color:#f92672">&#34;resources&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;count&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">3</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;last_tagged_uri&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;https://api.digitalocean.com/v2/droplets/132000916&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;droplets&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;count&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">3</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;last_tagged_uri&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;https://api.digitalocean.com/v2/droplets/132000916&#34;</span>
</span></span><span style="display:flex;"><span>      <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;images&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;count&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">1</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;last_tagged_uri&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;https://api.digitalocean.com/v2/images/42991114&#34;</span>
</span></span><span style="display:flex;"><span>      <span style="color:#111">},</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;volumes&#34;</span><span style="color:#111">:</span> <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>        <span style="color:#f92672">&#34;count&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">0</span>
</span></span><span style="display:flex;"><span>      <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span>  <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>For additional information, see the full API reference documentation for <a href="/reference/api/api-reference/#tag/Tags">tags</a>.</p>
</p>
            </li></ul><h3 id="2019-02-14">February 14</h3>
<ul><li>
                <p><a href="/products/databases/">DigitalOcean Managed Databases</a> were released with support for PostgreSQL v10 and v11.</p>
            </li><li>
                <p><p>Today <a href="https://blog.digitalocean.com/announcing-managed-databases-for-postgresql">DigitalOcean&rsquo;s Managed Database service</a>, including its API, has entered Limited Availability. In order to access these new endpoints, you must first enable Managed Databases on your account by opting-in via the <a href="https://cloud.digitalocean.com/databases">cloud control panel</a>. Once enabled, you will be able to create, scale, and manage your database clusters via the API. For example, to <a href="/reference/api/api-reference/#operation/databases_create_cluster">create a new database cluster</a>, make a <code>POST</code> to the <code>/v2/databases</code> endpoint with a JSON body like:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;backend&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;engine&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;pg&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;version&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;10&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;region&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;nyc3&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;size&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;db-s-1vcpu-2gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;num_nodes&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">2</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>The response will include a full JSON representation of the database cluster. The initial value of the cluster&rsquo;s <code>status</code> attribute will be &ldquo;creating.&rdquo; When the cluster is ready for use, this will transition to &ldquo;online.&rdquo;</p>
<p>For the all the details, see the <a href="/reference/api/api-reference/#tag/Databases">full API reference documentation</a> for DigitalOcean Managed Databases.</p>
</p>
            </li></ul><h3 id="2019-02-13">February 13</h3>
<ul><li>
                <p>The third-party Helpy <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li></ul><h3 id="2019-02-06">February 6</h3>
<ul><li>
                <p>The third-party Cloudron <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li></ul><h3 id="2019-02-05">February 5</h3>
<ul><li>
                <p>Users with <a href="/products/billing/promo-codes/">credits</a> will automatically receive an email notification when account usage exceeds their promo code credit and any prepay balance.</p>
            </li><li>
                <p>The <code>/v2/volumes</code> endpoint now displays tags and supports adding them to volumes at creation time. Volume tags may now be managed with the <code>/v2/tags</code> endpoint as well. For more information, see the API reference documentation for both <a href="/reference/api/api-reference/#tag/Block-Storage">volumes</a> and <a href="/reference/api/api-reference/#tag/Tags">tags</a>.</p>
            </li></ul><h3 id="2019-02-04">February 4</h3>
<ul><li>
                <p>Added the Droplet name to the subject line in <a href="/products/monitoring/how-to/set-up-alerts/#email-notifications">metrics alert email notifications</a>.</p>
            </li></ul><h2 id="january-2019">January 2019</h2>
<h3 id="2019-01-31">January 31</h3>
<ul><li>
                <p>The third-party Grafana <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li><li>
                <p>The third-party NKN Full Node <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li><li>
                <p>The third-party Fathom Analytics <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li></ul><h3 id="2019-01-30">January 30</h3>
<ul><li>
                <p>The third-party OpenFaaS <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li></ul><h3 id="2019-01-29">January 29</h3>
<ul><li>
                <p>To ensure the accuracy of reported metrics, the top processes graphs were removed from <a href="/products/monitoring/">Monitoring</a>. Instead, you can <a href="https://www.digitalocean.com/community/tutorials/how-to-use-top-netstat-du-other-tools-to-monitor-server-resources">monitor resource-consuming processes with tools like <code>top</code></a>.</p>
            </li></ul><h3 id="2019-01-16">January 16</h3>
<ul><li>
                <p>The deprecated 16.04 One-Click LAMP slug, <code>lamp-16-04</code>, was removed from the <a href="/reference/api/api-reference/">API</a>.</p>
            </li></ul><h3 id="2019-01-14">January 14</h3>
<ul><li>
                <p>The third-party OpenLiteSpeed Django <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li></ul><h3 id="2019-01-07">January 7</h3>
<ul><li>
                <p>The third-party OpenLiteSpeed NodeJS <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li></ul><h3 id="2019-01-01">January 1</h3>
<ul><li>
                <p>Monthly billing emails now include a PDF invoice attachment.</p>
            </li><li>
                <p><a href="/products/billing/taxes/rus/">Value Added Tax (VAT) collection for Russia</a> has begun. Charges will appear on the February 1 invoice.</p>
            </li></ul><h2 id="december-2018">December 2018</h2>
<h3 id="2018-12-20">December 20</h3>
<ul><li>
                <p>The third-party OpenLiteSpeed CyberPanel and Countly Analytics <a href="/products/marketplace/">One-Click applications</a> were released.</p>
            </li></ul><h3 id="2018-12-12">December 12</h3>
<ul><li>
                <p>Released v1.1.0 of the DigitalOcean Terraform Provider. Learn more on the <a href="https://do.co/terraform-changelog">Terraform Changelog</a>.</p>
            </li><li>
                <p>The third-party Open Source Social Network <a href="/products/marketplace/">One-Click application</a> was released.</p>
            </li></ul><h3 id="2018-12-11">December 11</h3>
<ul><li>
                <p><p>The following updates were released for <a href="https://do.co/k8s">DigitalOcean Kubernetes</a>:</p>
<ul>
<li>Any user can opt into Kubernetes during early availability via the <a href="https://cloud.digitalocean.com/kubernetes/clusters">control panel</a>.</li>
<li>Users can rename clusters.</li>
<li>Users can edit tags associated with clusters and worker pool.</li>
<li>A guided walkthrough helps users set up their kubectl and kubeconfig properly and provides example manifests to make it easier to get started.</li>
<li>The node pool settings to add, remove, and scale node pools has been moved to the ‘Nodes’ tab for a more streamlined experience.</li>
<li>The cluster provisioning status bar more accurately reflects the cluster creation progress.</li>
<li>Users can view the estimated monthly cost for their clusters.</li>
<li>Users can view a breakdown of total cluster capacity including CPU, Memory, Disk cluster wide.</li>
<li>Users can create and manage Kubernetes clusters, worker pools, and configuration using <a href="https://github.com/digitalocean/doctl#doctl---">doctl</a>.</li>
</ul>
</p>
            </li><li>
                <p><p>Today we <a href="https://blog.digitalocean.com/digitalocean-releases-k8s-as-a-service">opened up access to the DigitalOcean Kubernetes</a> service for all users. As part of this release, the API is now also available to all. While still in <a href="/products/platform/product-lifecycle/">Limited Availability</a>, you must first enable Kubernetes on your account by opting-in via the <a href="https://cloud.digitalocean.com/kubernetes/clusters">cloud control panel</a> to access these endpoints.</p>
<p>Once enabled, you will be able to list, create, or delete clusters as well as scale node pools up and down, recycle individual nodes, and retrieve the kubeconfig file for use with a cluster via the API. For example, to <a href="/reference/api/api-reference/#operation/kubernetes_create_cluster">create a new cluster</a> with a node pool using three <code>s-2vcpu-2gb</code> Droplets, make a <code>POST</code> to the <code>/v2/kubernetes/clusters</code> endpoint with a JSON body like:</p>
<div class="highlight"><pre tabindex="0" style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-json" data-lang="json"><span style="display:flex;"><span><span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;prod-cluster-01&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;region&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;nyc1&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;version&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;1.12.1-do.2&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;tags&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span><span style="color:#d88200">&#34;production&#34;</span><span style="color:#111">],</span>
</span></span><span style="display:flex;"><span>  <span style="color:#f92672">&#34;node_pools&#34;</span><span style="color:#111">:</span> <span style="color:#111">[</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">{</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;size&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;s-2vcpu-2gb&#34;</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;count&#34;</span><span style="color:#111">:</span> <span style="color:#ae81ff">3</span><span style="color:#111">,</span>
</span></span><span style="display:flex;"><span>      <span style="color:#f92672">&#34;name&#34;</span><span style="color:#111">:</span> <span style="color:#d88200">&#34;woker-pool&#34;</span>
</span></span><span style="display:flex;"><span>    <span style="color:#111">}</span>
</span></span><span style="display:flex;"><span>  <span style="color:#111">]</span>
</span></span><span style="display:flex;"><span><span style="color:#111">}</span>
</span></span></code></pre></div><p>The response will include a full JSON representation of the cluster. The initial value of the cluster&rsquo;s <code>status.state</code> attribute will be &ldquo;provisioning.&rdquo; When the cluster is ready for use, this will transition to &ldquo;running.&rdquo; You can use the <a href="/reference/api/api-reference/#operation/kubernetes_list_options"><code>/v2/kubernetes/options</code> endpoint</a> to find the available versions of Kubernetes as well as the supported regions and Droplet sizes.</p>
<p>Once ready, you can retrieve the credentials for use with the cluster by sending a GET request to <code>/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig</code>. The response will be a kubeconfig file in yaml format. This file can be used to connect to and administer the cluster using the Kubernetes command line tool, kubectl. For more information, see &ldquo;<a href="/products/kubernetes/how-to/connect-to-cluster/#connect-to-the-cluster">How to Connect to a DigitalOcean Kubernetes Cluster with kubectl</a>.&rdquo;</p>
<p>For the all the details, see the <a href="/reference/api/api-reference/#tag/Kubernetes">full API reference documentation</a> for DigitalOcean Kubernetes.</p>
</p>
            </li></ul><h3 id="2018-12-07">December 7</h3>
<ul><li>
                <p>The minimum size for a <a href="https://www.digitalocean.com/products/kubernetes/">Kubernetes node</a> was changed to the 2 GB Memory / 1 vCPU plan.</p>
            </li></ul><h3 id="2018-12-01">December 1</h3>
<ul><li>
                <p>The first version of <a href="https://ideas.digitalocean.com/ideas/DO-I-2030">monthly billing emails with attached PDF invoices</a> was released to a small group of beta customers.</p>
            </li></ul><h2 id="november-2018">November 2018</h2>
<h3 id="2018-11-26">November 26</h3>
<ul><li>
                <p>The <a href="/reference/api/api-reference/#tag/Projects">Projects API</a> was released to <a href="/products/platform/product-lifecycle/#general-availability">general availability</a>.</p>
            </li><li>
                <p><p>Today, we are promoting the Projects API to General Availability. For the full details, see the API reference documentation for both <a href="/reference/api/api-reference/#tag/Projects">Projects</a> and <a href="/reference/api/api-reference/#tag/Project-Resources">Project Resources</a>.</p>
<p>Thank you to everyone who took the time to provide us with feedback.</p>
</p>
            </li></ul><h3 id="2018-11-19">November 19</h3>
<ul><li>
                <p>The third-party OpenLiteSpeed WordPress <a href="/products/marketplace/">One-Click application</a> is now available in the <a href="https://cloud.digitalocean.com">control panel</a>.</p>
            </li></ul><h3 id="2018-11-13">November 13</h3>
<ul><li>
                <p>Ubuntu 16.04 <a href="/products/marketplace/">One-Click application</a> images were removed from the API.</p>
            </li></ul><h3 id="2018-11-01">November 1</h3>
<ul><li>
                <p>Value Added Tax (VAT) collection for <a href="/products/billing/taxes/che/">Switzerland</a> and <a href="/products/billing/taxes/tur/">Turkey</a> has begun. Charges will appear on the December invoice.</p>
            </li></ul><h2 id="october-2018">October 2018</h2>
<h3 id="2018-10-26">October 26</h3>
<ul><li>
                <p>The third-party Hasura <a href="/products/marketplace/">One-Click application</a> is now available in the <a href="https://cloud.digitalocean.com">control panel</a>.</p>
            </li></ul><h3 id="2018-10-24">October 24</h3>
<ul><li>
                <p>The third-party Plesk <a href="/products/marketplace/">One-Click application</a> is now available in the <a href="https://cloud.digitalocean.com">control panel</a>.</p>
            </li></ul><h3 id="2018-10-23">October 23</h3>
<ul><li>
                <p>Droplets created from <a href="/products/images/custom-images/">custom images</a> now support snapshots and backups.</p>
            </li></ul><h3 id="2018-10-19">October 19</h3>
<ul><li>
                <p>The third-party Sourcegraph <a href="/products/marketplace/">One-Click application</a> is now available in the <a href="https://cloud.digitalocean.com">control panel</a>.</p>
            </li></ul><h3 id="2018-10-18">October 18</h3>
<ul><li>
                <p><a href="https://wiki.ubuntu.com/CosmicCuttlefish/ReleaseNotes">Ubuntu 18.10</a> base images are now available in the <a href="https://cloud.digitalocean.com">control panel</a> and via the API using the slug <code>ubuntu-18-10-x64</code>.</p>
            </li></ul><h3 id="2018-10-16">October 16</h3>
<ul><li>
                <p><p>Today, we are launching a beta of our new Projects API. Projects enable you to group your resources in ways that align with the applications you host on DigitalOcean, and now you can do so via our API as well. This initial release includes the ability to:</p>
<ul>
<li>Create, list, retrieve, update, and delete Projects</li>
<li>Assign existing resources to a Project</li>
<li>List resources in a Project</li>
</ul>
<p>Additionally, we&rsquo;ve added beta support for Projects to our official clients (Droplet Kit, godo, and doctl).</p>
<p>You can create a new project by sending a POST request to the <code>/v2/projects</code> endpoint including a body like:</p>
<pre><code>{
  &quot;name&quot;: &quot;my-web-api&quot;,
  &quot;description&quot;: &quot;My website API&quot;,
  &quot;purpose&quot;: &quot;Service or API&quot;,
  &quot;environment&quot;: &quot;Production&quot;
}
</code></pre>
<p>To assign resources to a project, send a POST request to <code>/v2/projects/$PROJECT_ID/resources</code> including a list of those resources in the body:</p>
<pre><code>{
  &quot;resources&quot;: [
    &quot;do:droplet:123456&quot;,
    &quot;do:floatingip:192.168.99.100&quot;,
    &quot;do:space:static-assets&quot;,
    &quot;do:volume:0e250b2a-8a01-11e8-96ae-0242ad114410&quot;
   ]
}
</code></pre>
<p>Resources are identified by uniform resource names or URNs, a string consisting of the type of resource and its unique identifier. A valid URN has the following format: <code>do:resource_type:resource_id</code>. For the full details, see the API reference documentation for both <a href="/reference/api/api-reference/#tag/Projects">Projects</a> and <a href="/reference/api/api-reference/#tag/Project-Resources">Project Resources</a>.</p>
<p>Note that as this is a beta release, we may make additional changes based on your feedback. So <a href="https://ideas.digitalocean.com/documentation">let us know</a> how you’re using projects, and follow along with the API changelog for updates.</p>
</p>
            </li></ul><h3 id="2018-10-05">October 5</h3>
<ul><li>
                <p>The DigitalOcean feature request portal has been migrated to <a href="https://ideas.digitalocean.com">https://ideas.digitalocean.com</a>.</p>
            </li><li>
                <p>Released v1.0.2 of the DigitalOcean Terraform Provider. Learn more on the <a href="https://do.co/terraform-changelog">Terraform Changelog</a>.</p>
            </li></ul><h3 id="2018-10-02">October 2</h3>
<ul><li>
                <p>Released v1.0.1 of the DigitalOcean Terraform Provider. Learn more on the <a href="https://do.co/terraform-changelog">Terraform Changelog</a>.</p>
            </li></ul><h3 id="2018-10-01">October 1</h3>
<ul><li>
                <p><a href="/products/networking/load-balancers/#plans-and-pricing">Pricing for load balancers</a> has decreased from $20/month to $10/month.</p>
            </li><li>
                <p><a href="/products/kubernetes/">DigitalOcean Kubernetes</a> is now in early availability. <a href="https://www.digitalocean.com/products/kubernetes/">Learn more</a>.</p>
            </li></ul><h2 id="september-2018">September 2018</h2>
<h3 id="2018-09-27">September 27</h3>
<ul><li>
                <p>Released v1.0.0 of the DigitalOcean Terraform Provider, including new attachment resources for volumes and floating IPs, support for Let’s Encrypt certificates, auto-formatting for volumes, and CAA domain records, and more. Learn more: <a href="https://do.co/terraform-changelog">https://do.co/terraform-changelog</a></p>
            </li><li>
                <p>Released the <a href="/products/spaces/how-to/enable-cdn/">Spaces content delivery network (CDN)</a>.</p>
            </li><li>
                <p>Deprecated the Spaces free trial.</p>
            </li><li>
                <p><p>Today&rsquo;s release brings Content Delivery Network (CDN) support to Spaces, DigitalOcean&rsquo;s object storage solution. This can be configured and managed using our API. By sending requests to <code>/v2/cdn/endpoints</code>, you can list, create, or delete CDN endpoints as well as purge cached content.</p>
<p>To enable the CDN for your Space, send a POST request to <code>/v2/cdn/endpoints</code>. In the JSON body of your request, specify the origin of your content and the desired TTL. For example:</p>
<pre><code>{
  &quot;origin&quot;: &quot;static-images.nyc3.digitaloceanspaces.com&quot;,
  &quot;ttl&quot;: 3600
}
</code></pre>
<p>Currently, the origin must be a DigitalOcean Space.</p>
<p>To purge cached content from a CDN endpoint, send a <code>DELETE</code> request to <code>/v2/cdn/endpoints/$ENDPOINT_ID/cache</code>. The body of the request should include a <code>files</code> attribute containing a list of cached file paths to be purged. A path may be for a single file or may contain a wildcard (<code>*</code>) to recursively purge all files under a directory. When only a wildcard is provided, all cached files will be purged. For example, the body of your request might look like:</p>
<pre><code>{
  &quot;files&quot;: [
    &quot;assets/img/hero.png&quot;,
    &quot;assets/css/*&quot;
  ]
}
</code></pre>
<p>For additional details, see the API reference documentation for managing <a href="/reference/api/api-reference/#tag/CDN-Endpoints">CDN endpoints</a>.</p>
</p>
            </li></ul><h3 id="2018-09-25">September 25</h3>
<ul><li>
                <p>Released <a href="/products/images/custom-images/">custom image support</a> which allows customers to upload their Linux and Unix-like images to their DigitalOcean account and use them to create Droplets.</p>
            </li><li>
                <p><p>Today DigitalOcean released support for uploading custom images, enabling you to create Droplets based on your own Linux virtual machine images. Our <a href="https://developers.digitalocean.com/documentation/v2/#images">image management API</a> has been extended with support as well. By sending a <code>POST</code> to the <code>/v2/images</code> endpoint, you can create a new custom image. The request must contain a <code>url</code> attribute pointing to where the image can be downloaded. The image itself may be in the raw, qcow2, vhdx, vdi, or vmdk format. It can be compressed using gzip or bzip2 but must be smaller that 100 GB after being decompressed. For example, the body of you request might look like:</p>
<pre><code>{
  &quot;name&quot;: &quot;ubuntu-18.04-minimal&quot;,
  &quot;url&quot;: &quot;http://cloud-images.ubuntu.com/minimal/releases/bionic/release/ubuntu-18.04-minimal-cloudimg-amd64.img&quot;,
  &quot;distribution&quot;: &quot;Ubuntu&quot;,
  &quot;region&quot;: &quot;nyc3&quot;,
  &quot;description&quot;: &quot;Cloud-optimized image w/ small footprint&quot;,
  &quot;tags&quot;: [
    &quot;base-image&quot;,
    &quot;prod&quot;
  ]
}
</code></pre>
<p>To make organizing your images easier, we&rsquo;ve also extended tagging support to custom images as well as Droplet snapshots. For additional details, see the API reference documentation for <a href="/reference/api/api-reference/#operation/images_create_custom">creating custom images</a> and <a href="/reference/api/api-reference/#operation/tags_assign_resources">tagging resources</a>.</p>
</p>
            </li></ul><h3 id="2018-09-13">September 13</h3>
<ul><li>
                <p>Removed deprecated Machine Learning/Artificial Intelligence and MEAN One-Clicks from the control panel.</p>
            </li><li>
                <p>New <a href="/products/marketplace/">One-Click Application Droplets</a> that you create with the <a href="https://cloud.digitalocean.com/droplets/new?appId=38148615&amp;type=applications">control panel</a> will be based on Ubuntu 18.04 LTS. For the next 60 days (through November 12, 2018 11:59pm EST), Ubuntu 16.04 LTS-based One-Clicks will continue to be available alongside the 18.04 version through the API.</p>
            </li></ul><h3 id="2018-09-11">September 11</h3>
<ul><li>
                <p>Removed the list of environments (Production, Staging, Development) from the list of project purposes when creating projects. Added them as a separate dropdown on the Project Settings page.</p>
            </li><li>
                <p>Fixed a bug where a project containing only domains displayed an empty state that required users to scroll to access their domains.</p>
            </li><li>
                <p>Fixed a bug where domains with capital letters were not displaying the project on the Domain page.</p>
            </li><li>
                <p>Began incremental release of invoice aggregation for users with more than 3000 invoice line items.</p>
            </li></ul><h3 id="2018-09-10">September 10</h3>
<ul><li>
                <p><a href="/products/spaces/#regional-availability">Spaces</a> are now available in the SFO2 region.</p>
            </li><li>
                <p><a href="https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes/ChangeSummary/18.04.1">Ubuntu 18.04</a> is now the default image when <a href="https://cloud.digitalocean.com/droplets/new">creating new Droplets</a> from the control panel.</p>
            </li></ul><h3 id="2018-09-05">September 5</h3>
<ul><li>
                <p><p>When listing or getting <a href="/reference/api/api-reference/#tag/Tags">tags</a> by sending a GET request to <code>/v2/tags</code> or <code>/v2/tags/$TAG_NAME</code>, the response payload currently includes a <code>last_tagged</code> value inside the tag&rsquo;s <code>resources.droplets</code> containing a full representation of the resource. This payload is considerably nested and adds additional overhead to the request. In order to improve performance as well as lay the groundwork for bring tagging support to additional resources, this attribute is being deprecated. Beginning <strong>March 1st, 2019</strong> <code>last_tagged</code> will no longer be populated in favor of the new <code>last_tagged_uri</code> attribute introduced today.</p>
<p>For all resources (and each resource type supported), the <code>last_tagged_uri</code> attribute contains a string indicating the URI which can be used to retrieve details about that specific resource. If you need information about the last tagged resource specifically, issuing another call to that URI will provide you with all the data for that resource.</p>
<p>Additionally, a <code>count</code> attribute describing how many resources overall have been tagged with the tag in question has been added. Each individual resource type will continue providing a <code>count</code> attribute.</p>
<p>If you need guidance on transitioning from using <code>last_tagged</code> to using of the new <code>last_tagged_uri</code> attribute, reach out to the team by <a href="https://cloud.digitalocean.com/support/tickets/new">opening a support ticket</a>.</p>
</p>
            </li></ul><h2 id="august-2018">August 2018</h2>
<h3 id="2018-08-14">August 14</h3>
<ul><li>
                <p>Customers with multiple credit cards on file can now choose which one is billed by default <a href="https://cloud.digitalocean.com/account/billing">on the billing page</a>.</p>
            </li><li>
                <p>Discontinued the <a href="/products/droplets/">CPU-optimized Droplet 2 GB/1vCPU plan</a>.</p>
            </li><li>
                <p>The <a href="/products/droplets/how-to/recovery/recovery-console/">Recovery Console</a> now supports pasting information into the console.</p>
            </li></ul><h3 id="2018-08-09">August 9</h3>
<ul><li>
                <p><p>The <a href="https://www.digitalocean.com/community/tutorials/how-to-use-the-gitlab-one-click-install-image-to-manage-git-repositories">GitLab One-Click application</a> has been updated with the following changes:</p>
<table>
<thead>
<tr>
<th>Updated</th>
<th>From</th>
<th>To</th>
</tr>
</thead>
<tbody>
<tr>
<td>GitLab Community Edition</td>
<td>11.0.0</td>
<td><a href="https://gitlab.com/gitlab-org/gitlab-foss/blob/master/CHANGELOG.md#1114-2018-07-30">11.1.4</a></td>
</tr>
</tbody>
</table>
</p>
            </li></ul><h3 id="2018-08-01">August 1</h3>
<ul><li>
                <p>Updated all product documentation to reflect the <a href="https://blog.digitalocean.com/organizing-your-infrastructure-with-projects/">release of DigitalOcean Projects</a>, control panel side navigation, and the restructuring of the Accounts section.</p>
            </li><li>
                <p>The <a href="/products/droplets/#plans-and-pricing">192 GB Standard Droplet plan</a> has been enabled in AMS3, BLR1, FRA1, LON1, NYC3, NYC1, SGP1, SFO2, and TOR1.</p>
            </li></ul><h2 id="july-2018">July 2018</h2>
<h3 id="2018-07-27">July 27</h3>
<ul><li>
                <p>The default Ubuntu x64 base image has been updated from 16.04.4 to 18.04.1. For details about 18.04.1, see the <a href="https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes">Ubuntu release notes</a>.</p>
            </li></ul><h3 id="2018-07-25">July 25</h3>
<ul><li>
                <p><p>Released the following control panel updates:</p>
<ul>
<li>Users can organize their resources into <a href="/products/projects/">projects</a> to fit the way they work. Projects allow users to group their Droplets, Spaces, Load Balancers, domains, and Floating IPs to align with the applications, environments, clients, and projects that they host on DigitalOcean</li>
<li>The main navigation of the control panel moved from top navigation to left navigation with updated styles.</li>
</ul>
<p>The changes are scheduled to reach all users by July 28.</p>
</p>
            </li></ul><h3 id="2018-07-24">July 24</h3>
<ul><li>
                <p>You can now edit the card holder name, expiration date, CVC code, and billing address for existing credit card on the Account <a href="https://cloud.digitalocean.com/account/billing">Billing</a> page.</p>
            </li></ul><h3 id="2018-07-19">July 19</h3>
<ul><li>
                <p><p>The <a href="https://www.digitalocean.com/community/tutorials/how-to-use-the-wordpress-one-click-install-on-digitalocean">WordPress One-Click application</a> has been updated:</p>
<table>
<thead>
<tr>
<th>Updated</th>
<th>From</th>
<th>To</th>
</tr>
</thead>
<tbody>
<tr>
<td>Wordpress</td>
<td>4.9.1</td>
<td>4.9.7</td>
</tr>
<tr>
<td>MySQL</td>
<td>5.7.2</td>
<td>5.7.22</td>
</tr>
</tbody>
</table>
</p>
            </li><li>
                <p><p>The <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-the-digitalocean-ghost-one-click-application-for-ubuntu-16-04">Ghost One-Click application</a> has been updated:</p>
<table>
<thead>
<tr>
<th>Updated</th>
<th>From</th>
<th>To</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ghost</td>
<td>1.21.1</td>
<td>1.24.9</td>
</tr>
<tr>
<td>Ghost-CLI</td>
<td>1.5.2</td>
<td>1.8.1</td>
</tr>
</tbody>
</table>
</p>
            </li><li>
                <p><a href="https://wiki.ubuntu.com/Releases">Ubuntu 17.10</a> reached end of life today and was removed from the control panel and API.</p>
            </li></ul><h3 id="2018-07-18">July 18</h3>
<ul><li>
                <p>With the release of <a href="/release-notes/upcoming/private-networking-isolation/">private networking isolation</a> in NYC3, private networks are restricted to each user account in all regions.</p>
            </li></ul><h3 id="2018-07-17">July 17</h3>
<ul><li>
                <p><a href="/release-notes/upcoming/private-networking-isolation/">Private networking isolation</a> was released in the NYC2 datacenter.</p>
            </li></ul><h3 id="2018-07-16">July 16</h3>
<ul><li>
                <p><a href="/release-notes/upcoming/private-networking-isolation/">Private networking isolation</a> was released in the NYC1 datacenter.</p>
            </li><li>
                <p><a href="https://www.debian.org/News/2018/20180714">The Debian 9 base image</a> was updated from 9.4 to 9.5. The image is available in the <a href="https://cloud.digitalocean.com/droplets/new?4&amp;distro=debian&amp;distroImage=debian-9-x64&amp;size=s-2vcpu-4gb&amp;region=sfo2">control panel</a> and via the API using the slug <code>debian-9-x64</code>.</p>
            </li></ul><h3 id="2018-07-12">July 12</h3>
<ul><li>
                <p><a href="/release-notes/upcoming/private-networking-isolation/">Private networking isolation</a> was released in the SFO1 and SGP1 datacenters.</p>
            </li></ul><h3 id="2018-07-11">July 11</h3>
<ul><li>
                <p><a href="/release-notes/upcoming/private-networking-isolation/">Private networking isolation</a> continued with releases in the LON1, AMS3, FRA1, and SFO2 datacenters.</p>
            </li><li>
                <p>Local disk size for the <a href="/products/droplets/">1vCPU-Optimized Droplet plan (c-1vcpu-2gb)</a> increased from 20 GB to 25 GB.</p>
            </li></ul><h3 id="2018-07-10">July 10</h3>
<ul><li>
                <p><a href="/release-notes/upcoming/private-networking-isolation/">Private networking isolation</a> was released in the AMS2, BLR1, and TOR1 datacenters. Communication over the private network in those datacenters is now restricted to other resources within an account or team.</p>
            </li></ul><h3 id="2018-07-03">July 3</h3>
<ul><li>
                <p><a href="https://www.freebsd.org/releases/11.2R/relnotes.html">FreeBSD 11.2</a> is now available through the <a href="https://cloud.digitalocean.com/droplets/new?size=s-2vcpu-4gb&amp;region=sfo2&amp;distro=freebsd&amp;distroImage=freebsd-11-2-x64-zfs">control panel</a> and through the API using the slug <code>freebsd-11-2-x64-zfs</code>.</p>
            </li></ul><h3 id="2018-07-01">July 1</h3>
<ul><li>
                <p>The <a href="/release-notes/upcoming/droplet-bandwidth-billing-faq/">changes to Droplet bandwidth billing</a> announced on April 24 were put into effect.</p>
            </li></ul><h2 id="june-2018">June 2018</h2>
<h3 id="2018-06-25">June 25</h3>
<ul><li>
                <p>Released <a href="https://www.digitalocean.com/docs">new documentation site</a> for the DigitalOcean Control Panel with updated content and product-specific navigation and search to help readers more readily learn how to use DigitalOcean.</p>
            </li></ul><h3 id="2018-06-22">June 22</h3>
<ul><li>
                <p><a href="/products/spaces/">Spaces</a> will send billing data for active users within 2 hours of usage, down from a 4-5 day processing time. Previously, some users who were not billed for overages because of the processing delay may see their bill go up based on their actual usage.</p>
            </li><li>
                <p><p><a href="https://www.digitalocean.com/community/tutorials/how-to-use-the-gitlab-one-click-install-image-to-manage-git-repositories">GitLab One-Click application</a> has been updated with the following changes:</p>
<table>
<thead>
<tr>
<th>Updated</th>
<th>From</th>
<th>To</th>
</tr>
</thead>
<tbody>
<tr>
<td>Kernel</td>
<td>4.4.0-119-generic</td>
<td>4.4.0-128-generic</td>
</tr>
<tr>
<td>GitLab Community Edition</td>
<td>10.6.4 dee2c87</td>
<td>11.0.0 b84bfb5</td>
</tr>
</tbody>
</table>
</p>
            </li><li>
                <p><p>New Domain resources can now be created via the DigitalOcean v2 API without providing an IP address. The previous behavior, which would automatically create an A record pointing to the apex domain, will be retained for backwards-compatibility when an IP address is provided.</p>
<p>This example demonstrates how to create a new domain without providing an IP address:</p>
<pre tabindex="0"><code>curl -X POST -H &#34;Content-Type: application/json&#34; \
    -H &#34;Authorization: Bearer $DIGITALOCEAN_API_TOKEN&#34; \
    -d &#39;{&#34;name&#34;:&#34;example.com&#34;}&#39; \
    &#34;https://api.digitalocean.com/v2/domains&#34;
</code></pre><p>For more information, see the full <a href="/reference/api/api-reference/#tag/Domains">Domains API documentation</a>.</p>
</p>
            </li></ul><h3 id="2018-06-19">June 19</h3>
<ul><li>
                <p><p><a href="https://www.digitalocean.com/community/tutorials/how-to-use-the-ruby-on-rails-one-click-application-on-digitalocean">Ruby on Rails One-Click application</a> has been updated with the following changes:</p>
<table>
<thead>
<tr>
<th>Updated</th>
<th>From</th>
<th>To</th>
</tr>
</thead>
<tbody>
<tr>
<td>Kernel</td>
<td>4.4.0-72-generic</td>
<td>4.4.0-128-generic</td>
</tr>
<tr>
<td>Ruby</td>
<td>2.4.0</td>
<td>2.4.1</td>
</tr>
<tr>
<td>Rails</td>
<td>5.0.2</td>
<td>5.2.0</td>
</tr>
<tr>
<td>Nginx</td>
<td>1.10.0</td>
<td>1.10.3</td>
</tr>
</tbody>
</table>
</p>
            </li><li>
                <p><a href="https://wiki.debian.org/LTS">Debian 7 reached end of life</a> and has been removed from the control panel.</p>
            </li></ul><h3 id="2018-06-13">June 13</h3>
<ul><li>
                <p>Updated RancherOS container image from 12.0 to 14.0. Customers can learn more about the new version on <a href="https://github.com/rancher/os/releases/tag/v1.4.0">Rancher&rsquo;s release page</a>.</p>
            </li></ul><h3 id="2018-06-11">June 11</h3>
<ul><li>
                <p>Expanded Droplet View allows customers using the Dashboard to click on a Droplet and quickly view additional information about the Droplet without having to go to the Droplet Page. It also updates the list of Droplets to display at a glance whether Backups are on/off and if a Floating IP is attached.</p>
            </li></ul><h3 id="2018-06-05">June 5</h3>
<ul><li>
                <p>Released new Droplet feature to allow customers to boot Droplets from a Recovery ISO.  Learn more in <a href="/products/droplets/how-to/recovery/recovery-iso/">How To Recover from File System Corruption Using Fsck and a Recovery ISO</a>.</p>
            </li></ul><h2 id="may-2018">May 2018</h2>
<h3 id="2018-05-22">May 22</h3>
<ul><li>
                <p>Volumes for Ubuntu, Fedora, Debian 8+, CentOS, and Fedora Atomic can be <a href="/products/volumes/how-to/create/#format-and-mount-volumes">automatically formatted and mounted</a> when they are created.</p>
            </li><li>
                <p><p>The <code>/v2/volumes</code> endpoint has been updated to support automatically formatting the filesystem of newly created volumes. Volume resources now expose two new attributes: <code>filesystem_type</code> and <code>filesystem_label</code>. They can be used to specify the filesystem and the label to be applied. Currently, the available filesytem types are <code>ext4</code> and <code>xfs</code>.</p>
<p>For example, here is a request creating a new volume formatted with an EXT4 filesystem:</p>
<pre tabindex="0"><code>  curl -X POST \
  -d &#39;{&#34;name&#34;:&#34;volume-nyc3-01&#34;,&#34;region&#34;:&#34;nyc3&#34;,&#34;filesystem_type&#34;:&#34;ext4&#34;,&#34;filesystem_label&#34;:&#34;example&#34;,&#34;size_gigabytes&#34;: 100}&#39; \
  -H &#34;Content-Type: application/json&#34; \
  -H &#34;Authorization: Bearer $DIGITALOCEAN_TOKEN&#34; \
  https://api.digitalocean.com/v2/volumes
</code></pre><p>Additionally, Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018 will now automatically mount volumes with pre-formatted filesystems when attached. Attaching pre-formatted volumes to other Droplets is not recommended. When the <code>filesystem_type</code> attribute is not provided, volumes will continue to be presented as raw block devices and require <a href="https://www.digitalocean.com/community/tutorials/how-to-partition-and-format-digitalocean-block-storage-volumes-in-linux#mounting-the-filesystems">additional configuration</a>.</p>
<p>When retrieving an existing volume, <code>filesystem_type</code> and <code>filesystem_label</code> will reflect the current filesystem and label used on the volume even if these were applied manually.</p>
<p>For more information, see the full API documentation for <a href="/reference/api/api-reference/#tag/Block-Storage">Volumes</a>.</p>
</p>
            </li></ul><h3 id="2018-05-17">May 17</h3>
<ul><li>
                <p>Turned on Droplet Search in the top navigation for all users. Allows users to quickly search for Droplets by name or IP address and go directly to the Droplet Page.</p>
            </li></ul><h3 id="2018-05-16">May 16</h3>
<ul><li>
                <p>Enabled users to <a href="https://www.digitalocean.com/community/questions/can-i-use-my-google-account-to-authenticate-to-digitalocean">sign up and sign in with their Google accounts</a>. DigitalOcean users can switch their accounts back and forth between password-based and Google-based authentication.</p>
            </li></ul><h3 id="2018-05-11">May 11</h3>
<ul><li>
                <p>Fixed issue with <a href="/products/accounts/2fa/">2FA</a> QR code generation for authenticator applications. Users with usernames over 26 characters were unable to generate a QR code. We now render up to 65 characters of a user&rsquo;s entire email address and truncate if it is longer. This prevents errors for users with long email addresses, and renders more information in authenticator applications to help users with multiple accounts have more context.</p>
            </li></ul><h3 id="2018-05-08">May 8</h3>
<ul><li>
                <p>Load Balancers v1.5 is <a href="https://blog.digitalocean.com/introducing-load-balancer-upgrades/">released to general availability</a> in all regions, including backend upgrades, Let&rsquo;s Encrypt Integration, and HTTP/2 Support.</p>
            </li><li>
                <p><p>Today, DigitalOcean released a number of <a href="https://blog.digitalocean.com/introducing-load-balancer-upgrades">Load Balancer improvements</a> including support for using SSL/TLS certificates automatically generated by Let&rsquo;s Encrypt. Our <a href="/reference/api/api-reference/#tag/Certificates">Certificate management API</a> has been updated to support automatically generating Let&rsquo;s Encrypt certificates in addition to uploading custom, user-generated certificates.</p>
<p>A request to generate a new SSL/TLS certificate using Let&rsquo;s Encrypt would look like:</p>
<pre tabindex="0"><code>    curl -X POST \
    -H &#34;Content-Type: application/json&#34; \
    -H &#34;Authorization: Bearer $DO_TOKEN&#34; \
    -d &#39;{&#34;name&#34;: &#34;le-cert-01&#34;, &#34;type&#34;: &#34;lets_encrypt&#34;, &#34;dns_names&#34;: [&#34;www.example.com&#34;,&#34;example.com&#34;]}&#39; \
    &#34;https://api.digitalocean.com/v2/certificates&#34;```
</code></pre><p>The new <code>type</code> attribute must be set to <code>lets_encrypt</code> when using Let&rsquo;s Encrypt. If omitted, it will default to <code>custom</code> in order to maintain backwards compatibility. For additional details, see the Certificate management <a href="/reference/api/api-reference/#tag/Certificates">API reference documentation</a>.</p>
<p>For more information on how to use Let&rsquo;s Encrypt with DigitalOcean Load Balancers, see <a href="https://www.digitalocean.com/community/tutorials/how-to-use-let-s-encrypt-with-digitalocean-load-balancers">this tutorial on our community site</a>.</p>
</p>
            </li></ul><h3 id="2018-05-01">May 1</h3>
<ul><li>
                <p><a href="https://docs.fedoraproject.org/en-US/fedora/f28/release-notes/">Fedora 28</a> base image has been released using the slug <code>fedora-28-x64</code> and <code>fedora-28-x64-atomic</code>. The images are <a href="https://cloud.digitalocean.com/droplets/new?distro=fedora&amp;distroImage=fedora-28-x64&amp;size=s-2vcpu-4gb&amp;region=nyc3">now public</a> to all users.</p>
            </li></ul><h2 id="april-2018">April 2018</h2>
<h3 id="2018-04-30">April 30</h3>
<ul><li>
                <p><p>Burst support rolled out to all nine <a href="/products/volumes/">block storage</a> regions.</p>
<p><strong>Performance Expectations</strong></p>
<table>
<thead>
<tr>
<th>Droplet Type</th>
<th>IOPS</th>
<th>Throughput</th>
</tr>
</thead>
<tbody>
<tr>
<td>Standard</td>
<td>5K</td>
<td>200 MB/s</td>
</tr>
<tr>
<td>Std (Burst)</td>
<td>7.5K</td>
<td>300 MB/s</td>
</tr>
<tr>
<td>Optimized</td>
<td>7.5K</td>
<td>300 MB/s</td>
</tr>
<tr>
<td>Optimized (Burst)</td>
<td>10K</td>
<td>350 MB/s</td>
</tr>
</tbody>
</table>
</p>
            </li></ul><h3 id="2018-04-27">April 27</h3>
<ul><li>
                <p><a href="https://www.digitalocean.com/community/tutorials/what-s-new-in-ubuntu-18-04">Ubuntu 18.04</a> is now available through the <a href="https://cloud.digitalocean.com/droplets/new?distro=ubuntu&amp;distroImage=ubuntu-18-04-x64&amp;size=s-2vcpu-4gb&amp;region=nyc3">control panel</a> and via our API using the slug <code>ubuntu-18-04-x64</code></p>
            </li></ul><h3 id="2018-04-24">April 24</h3>
<ul><li>
                <p>Changes to <a href="https://www.digitalocean.com/community/tutorials/digitalocean-bandwidth-billing-faq">Droplet Bandwidth Billing announced</a>. The new billing plan goes into effect June 1. Charges for June, if any, will appear on the July 1 bill.  Customers can view usage and billing information on <a href="https://cloud.digitalocean.com/settings/billing">their billing page</a>.</p>
            </li></ul><h3 id="2018-04-20">April 20</h3>
<ul><li>
                <p>Debit cards from any country can be used for payment once a temporary pre-authorization charge of $1 is successful.</p>
            </li></ul><h3 id="2018-04-17">April 17</h3>
<ul><li>
                <p><a href="/products/spaces/">Spaces</a> users no longer need to cancel their Spaces subscription via the Spaces UI when they want to stop using Spaces. Now, any time a Spaces user destroys their last Space, their pro-rated $5/month billing (if not in the free trial period) stops. Overage charges still apply if they were incurred before deletion of the last Space.</p>
            </li><li>
                <p><a href="/products/droplets/#cpu-optimized-droplets">1vCPU-Optimized Droplet</a> launched.</p>
            </li></ul><h2 id="march-2018">March 2018</h2>
<h3 id="2018-03-30">March 30</h3>
<ul><li>
                <p>Released the <a href="https://www.digitalocean.com/community/tutorials/how-to-use-the-mean-one-click-install-image">MEAN One-Click application</a> on Ubuntu 16.04,