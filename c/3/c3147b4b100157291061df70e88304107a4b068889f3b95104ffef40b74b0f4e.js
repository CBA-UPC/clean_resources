const n=()=>{var n;return null===(n=navigator)||void 0===n?void 0:n.language},t=e=(n="")=>{const t=n.endsWith("..")?n.substring(0,n.length-2):n;return e=t,decodeURIComponent(globalThis.atob(e).split("").map(().join(""));var e},r=/^[\w.-]+$/,l="*",o=(n,t,e,r)=>{const o=((n,t)=>[n,(new Date).getTimezoneOffset(),t].join(l))(e,r),i=t||0;return(n=>{const t=(()=>{const n=[];let t;for(let e=0;e<256;e++){t=e;for(let n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;n[e]=t}return n})();let e=-1;for(let r=0;r<n.length;r++)e=e>>>8^t[255&(e^n.charCodeAt(r))];return(-1^e)>>>0})([o,Math.floor(Date.now()/6e4)-i,n].join(l)).toString(36)},i=i=>{const s=(n=>{const t=n.split(l),e=t.length%2==0;if(t.length<4||!e)return null;if(1!==Number(t.shift()))return null;const r=t.shift();return{checksum:null!=r?r:"",serializedIds:t.join(l)}})(i);if(!s)return null;const{checksum:u,serializedIds:a}=s;return a&&u&&((e,r)=>{const l=t(),i=n();for(let n=0;n<=1;n+=1)if(o(e,n,l,i)===r)return!0;return!1})(a,u)?(n=>{if(!n)return{};const t={},o=n.split(l);for(let n=0;n<o.length;n+=2){const l=o[n];r.test(l)&&(t[l]=e(o[n+1]))}return t})(a):null},s="GoogleLinker",u=()=>({name:s,initialize:n=>{n.plugins.loadedPlugins.value=[...n.plugins.loadedPlugins.value,s]},userSession:{anonymousIdGoogleLinker(n){if(!n)return null;const t=n?i(n):null;return t?t.rs_amp_id:null}}});export{u as GoogleLinker,u as default};
//# sourceMappingURL=rsa-plugins-remote-GoogleLinker.min.js.map