(function(window){function f(a,b){var c=new window.XMLHttpRequest;c.withCredentials=!0;c.open("GET",a);c.onload=b;c.onerror=b;c.send()}function g(a,b){return function(c){for(var e=[],d=0;d<arguments.length;++d)e[d-0]=arguments[d];e.unshift(a);return b.apply(null,e)}}function k(){};var l=window.Adform=window.Adform||{},m={host:"track.adform.net",protocol:"https://",path:"/opt/adform/"},n={},p=window.console||{error:k};l.Opt=l.Opt||{InitClientOpt:q,GetStatus:r,OptOut:t,OptIn:v,getStatus:q,optIn:w,optOut:x,disableRedirect:k};function q(a,b){y(a,"status",b)}function r(a){a=void 0===a?1:a;return n[a]&&n[a].status}function t(a,b){b=void 0===b?k:b;x(void 0===a?1:a,b)}function x(a,b){y(a,"opt-out",b)}function v(a,b){b=void 0===b?k:b;w(void 0===a?1:a,b)}
function w(a,b){y(a,"opt-in",b)}function y(a,b,c){"function"===typeof a&&(c=a,a=1);n[a]||(n[a]={clientID:a});z(n[a],""+m.protocol+m.host+m.path+b+"/",c)}function z(a,b,c){function e(d){d=d.target;var h=JSON.parse(d.responseText),u=h.ErrorMessage,A=h.Status;(h=h.Redir)?f(h,e):(a.status=A,a.errorMessage=u,200!==d.status?p.error("Adform Opt-Out: ",u):(a.optIn=g(a.clientID,w),a.optOut=g(a.clientID,x)),c(a))}c=void 0===c?k:c;f(b,e)};})(window);
ypeof t&&t.constructor===this)return t;var e=new this(j);return M(e,t),e}f?m=function(){return process.nextTick(v)}:a?(d=0,y=new a(v),b=document.createTextNode(""),y.observe(b,{characterData:!0}),m=function(){b.data=d=++d%2}):l?((_=new MessageChannel).port1.onmessage=v,m=function(){return _.port2.postMessage(0)}):m=void 0===u?function(){try{var t=r("PEqM");return o=t.runOnLoop||t.runOnContext,function(){o(v)}}catch(t){return h()}}():h();var A=Math.random().toString(36).substring(16);function j(){}var E=void 0,S=new Y;function k(t){try{return t.then}catch(t){return S.error=t,S}}function C(e,r,n){r.constructor===e.constructor&&n===w&&r.constructor.resolve===g?function(t,e){1===e._state?T(t,e._result):2===e._state?O(t,e._result):x(e,void 0,(function(e){return M(t,e)}),(function(e){return O(t,e)}))}(e,r):n===S?O(e,S.error):void 0===n?T(e,r):t(n)?function(t,e,r){s((function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,(function(r){n||(n=!0,e!==r?M(t,r):T(t,r))}),(function(e){n||(n=!0,O(t,e))}),t._label);!n&&o&&(n=!0,O(t,o))}),t)}(e,r,n):T(e,r)}function M(t,e){var r;t===e?O(t,new TypeError("You cannot resolve a promise with itself")):"function"==typeof(r=e)||"object"==typeof r&&null!==r?C(t,e,k(e)):T(t,e)}function P(t){t._onerror&&t._onerror(t._result),q(t)}function T(t,e){t._state===E&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(q,t))}function O(t,e){t._state===E&&(t._state=2,t._result=e,s(P,t))}function x(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=r,o[i+2]=n,0===i&&t._state&&s(q,t)}function q(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?V(r,n,o,i):o(i);t._subscribers.length=0}}function Y(){this.error=null}var F=new Y;function V(e,r,n,o){var i=t(n),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=function(t,e){try{return t(e)}catch(t){return F.error=t,F}}(n,o),s===F?(a=!0,u=s.error,s=null):c=!0,r===s)return void O(r,new TypeError("A promises callback cannot return that same promise."))}else s=o,c=!0;r._state!==E||(i&&c?M(r,s):a?O(r,u):1===e?T(r,s):2===e&&O(r,s))}var D=0;function K(t){t[A]=D++,t._state=void 0,t._result=void 0,t._subscribers=[]}function L(t,r){this._instanceConstructor=t,this.promise=new t(j),this.promise[A]||K(this.promise),e(r)?(this._input=r,this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&T(this.promise,this._result))):O(this.promise,new Error("Array Methods must be provided an Array"))}function N(t){this[A]=D++,this._result=this._state=void 0,this._subscribers=[],j!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof N?function(t,e){try{e((function(e){M(t,e)}),(function(e){O(t,e)}))}catch(e){O(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}function U(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=N}return L.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===E&&r<t;r++)this._eachEntry(e[r],r)},L.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===g){var o=k(t);if(o===w&&t._state!==E)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===N){var i=new r(j);C(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r((function(e){return e(t)})),e)}else this._willSettleAt(n(t),e)},L.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===E&&(this._remaining--,2===t?O(n,r):this._result[e]=r),0===this._remaining&&T(n,this._result)},L.prototype._willSettleAt=function(t,e){var r=this;x(t,void 0,(function(t){return r._settledAt(1,e,t)}),(function(t){return r._settledAt(2,e,t)}))},N.all=function(t){return new L(this,t).promise},N.race=function(t){var r=this;return e(t)?new r((function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)})):new r((function(t,e){return e(new TypeError("You must pass an array to race."))}))},N.resolve=g,N.reject=function(t){var e=new this(j);return O(e,t),e},N._setScheduler=function(t){i=t},N._setAsap=function(t){s=t},N._asap=s,N.prototype={constructor:N,then:w,catch:function(t){return this.then(null,t)}},U(),N.polyfill=U,N.Promise=N,N},t.exports=n()}}]);