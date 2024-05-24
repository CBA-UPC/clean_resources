|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,xt=Array.isArray;function q(t,e){for(var n in e)t[n]=e[n];return t}function Le(t){var e=t.parentNode;e&&e.removeChild(t)}function O(t,e,n){var r,o,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?dt.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return ht(t,a,r,o,null)}function ht(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Ne};return o==null&&g.vnode!=null&&g.vnode(i),i}function U(t){return t.children}function j(t,e){this.props=t,this.context=e}function pt(t,e){if(e==null)return t.__?pt(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__d||n.__e;return typeof t.type=="function"?pt(t):null}function $e(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return $e(t)}}function Gt(t){(!t.__d&&(t.__d=!0)&&Z.push(t)&&!wt.__r++||Fe!==g.debounceRendering)&&((Fe=g.debounceRendering)||De)(wt)}function wt(){var t,e,n,r,o,i,a,l,c;for(Z.sort(Kt);t=Z.shift();)t.__d&&(e=Z.length,r=void 0,o=void 0,i=void 0,l=(a=(n=t).__v).__e,(c=n.__P)&&(r=[],o=[],(i=q({},a)).__v=a.__v+1,Yt(c,a,i,n.__n,c.ownerSVGElement!==void 0,a.__h!=null?[l]:null,r,l??pt(a),a.__h,o),We(r,a,o),a.__e!=l&&$e(a)),Z.length>e&&Z.sort(Kt));wt.__r=0}function Me(t,e,n,r,o,i,a,l,c,f,p){var s,m,d,h,_,y,b,x,C,k=0,v=r&&r.__k||Pe,R=v.length,V=R,K=e.length;for(n.__k=[],s=0;s<K;s++)(h=n.__k[s]=(h=e[s])==null||typeof h=="boolean"||typeof h=="function"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?ht(null,h,null,null,h):xt(h)?ht(U,{children:h},null,null,null):h.__b>0?ht(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)!=null?(h.__=n,h.__b=n.__b+1,(x=cr(h,v,b=s+k,V))===-1?d=rt:(d=v[x]||rt,v[x]=void 0,V--),Yt(t,h,d,o,i,a,l,c,f,p),_=h.__e,(m=h.ref)&&d.ref!=m&&(d.ref&&Zt(d.ref,null,h),p.push(m,h.__c||_,h)),_!=null&&(y==null&&(y=_),(C=d===rt||d.__v===null)?x==-1&&k--:x!==b&&(x===b+1?k++:x>b?V>K-b?k+=x-b:k--:k=x<b&&x==b-1?x-b:0),b=s+k,typeof h.type!="function"||x===b&&d.__k!==h.__k?typeof h.type=="function"||x===b&&!C?h.__d!==void 0?(c=h.__d,h.__d=void 0):c=_.nextSibling:c=Ie(t,_,c):c=Ue(h,c,t),typeof n.type=="function"&&(n.__d=c))):(d=v[s])&&d.key==null&&d.__e&&(d.__e==c&&(d.__=r,c=pt(d)),Qt(d,d,!1),v[s]=null);for(n.__e=y,s=R;s--;)v[s]!=null&&(typeof n.type=="function"&&v[s].__e!=null&&v[s].__e==n.__d&&(n.__d=v[s].__e.nextSibling),Qt(v[s],v[s]))}function Ue(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e=typeof r.type=="function"?Ue(r,e,n):Ie(n,r.__e,e));return e}function B(t,e){return e=e||[],t==null||typeof t=="boolean"||(xt(t)?t.some(function(n){B(n,e)}):e.push(t)),e}function Ie(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function cr(t,e,n,r){var o=t.key,i=t.type,a=n-1,l=n+1,c=e[n];if(c===null||c&&o==c.key&&i===c.type)return n;if(r>(c!=null?1:0))for(;a>=0||l<e.length;){if(a>=0){if((c=e[a])&&o==c.key&&i===c.type)return a;a--}if(l<e.length){if((c=e[l])&&o==c.key&&i===c.type)return l;l++}}return-1}function Ve(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||ur.test(e)?n:n+"px"}function kt(t,e,n,r,o){var i;t:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Ve(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Ve(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=Date.now(),t.addEventListener(e,i?Be:je,i)):t.removeEventListener(e,i?Be:je,i);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function je(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(g.event?g.event(t):t)}function Be(t){return this.l[t.type+!0](g.event?g.event(t):t)}function Yt(t,e,n,r,o,i,a,l,c,f){var p,s,m,d,h,_,y,b,x,C,k,v,R,V,K,H=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,l=e.__e=n.__e,e.__h=null,i=[l]),(p=g.__b)&&p(e);t:if(typeof H=="function")try{if(b=e.props,x=(p=H.contextType)&&r[p.__c],C=p?x?x.props.value:p.__:r,n.__c?y=(s=e.__c=n.__c).__=s.__E:("prototype"in H&&H.prototype.render?e.__c=s=new H(b,C):(e.__c=s=new j(b,C),s.constructor=H,s.render=hr),x&&x.sub(s),s.props=b,s.state||(s.state={}),s.context=C,s.__n=r,m=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),H.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=q({},s.__s)),q(s.__s,H.getDerivedStateFromProps(b,s.__s))),d=s.props,h=s.state,s.__v=e,m)H.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(H.getDerivedStateFromProps==null&&b!==d&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(b,C),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(b,s.__s,C)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(s.props=b,s.state=s.__s,s.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(st){st&&(st.__=e)}),k=0;k<s._sb.length;k++)s.__h.push(s._sb[k]);s._sb=[],s.__h.length&&a.push(s);break t}s.componentWillUpdate!=null&&s.componentWillUpdate(b,s.__s,C),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(d,h,_)})}if(s.context=C,s.props=b,s.__P=t,s.__e=!1,v=g.__r,R=0,"prototype"in H&&H.prototype.render){for(s.state=s.__s,s.__d=!1,v&&v(e),p=s.render(s.props,s.state,s.context),V=0;V<s._sb.length;V++)s.__h.push(s._sb[V]);s._sb=[]}else do s.__d=!1,v&&v(e),p=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++R<25);s.state=s.__s,s.getChildContext!=null&&(r=q(q({},r),s.getChildContext())),m||s.getSnapshotBeforeUpdate==null||(_=s.getSnapshotBeforeUpdate(d,h)),Me(t,xt(K=p!=null&&p.type===U&&p.key==null?p.props.children:p)?K:[K],e,n,r,o,i,a,l,c,f),s.base=e.__e,e.__h=null,s.__h.length&&a.push(s),y&&(s.__E=s.__=null)}catch(st){e.__v=null,(c||i!=null)&&(e.__e=l,e.__h=!!c,i[i.indexOf(l)]=null),g.__e(st,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=dr(n.__e,e,n,r,o,i,a,c,f);(p=g.diffed)&&p(e)}function We(t,e,n){for(var r=0;r<n.length;r++)Zt(n[r],n[++r],n[++r]);g.__c&&g.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){g.__e(i,o.__v)}})}function dr(t,e,n,r,o,i,a,l,c){var f,p,s,m=n.props,d=e.props,h=e.type,_=0;if(h==="svg"&&(o=!0),i!=null){for(;_<i.length;_++)if((f=i[_])&&"setAttribute"in f==!!h&&(h?f.localName===h:f.nodeType===3)){t=f,i[_]=null;break}}if(t==null){if(h===null)return document.createTextNode(d);t=o?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,d.is&&d),i=null,l=!1}if(h===null)m===d||l&&t.data===d||(t.data=d);else{if(i=i&&dt.call(t.childNodes),p=(m=n.props||rt).dangerouslySetInnerHTML,s=d.dangerouslySetInnerHTML,!l){if(i!=null)for(m={},_=0;_<t.attributes.length;_++)m[t.attributes[_].name]=t.attributes[_].value;(s||p)&&(s&&(p&&s.__html==p.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(function(y,b,x,C,k){var v;for(v in x)v==="children"||v==="key"||v in b||kt(y,v,null,x[v],C);for(v in b)k&&typeof b[v]!="function"||v==="children"||v==="key"||v==="value"||v==="checked"||x[v]===b[v]||kt(y,v,b[v],x[v],C)}(t,d,m,o,l),s)e.__k=[];else if(Me(t,xt(_=e.props.children)?_:[_],e,n,r,o&&h!=="foreignObject",i,a,i?i[0]:n.__k&&pt(n,0),l,c),i!=null)for(_=i.length;_--;)i[_]!=null&&Le(i[_]);l||("value"in d&&(_=d.value)!==void 0&&(_!==t.value||h==="progress"&&!_||h==="option"&&_!==m.value)&&kt(t,"value",_,m.value,!1),"checked"in d&&(_=d.checked)!==void 0&&_!==t.checked&&kt(t,"checked",_,m.checked,!1))}return t}function Zt(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){g.__e(r,n)}}function Qt(t,e,n){var r,o;if(g.unmount&&g.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Zt(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Qt(r[o],e,n||typeof t.type!="function");n||t.__e==null||Le(t.__e),t.__=t.__e=t.__d=void 0}function hr(t,e,n){return this.constructor(t,n)}function z(t,e,n){var r,o,i,a;g.__&&g.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],a=[],Yt(e,t=(!r&&n||e).__k=O(U,null,[t]),o||rt,rt,e.ownerSVGElement!==void 0,!r&&n?[n]:o?null:e.firstChild?dt.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r,a),We(i,t,a)}function Xt(t,e){z(t,e,Xt)}function Et(t,e,n){var r,o,i,a,l=q({},t.props);for(i in t.type&&t.type.defaultProps&&(a=t.type.defaultProps),e)i=="key"?r=e[i]:i=="ref"?o=e[i]:l[i]=e[i]===void 0&&a!==void 0?a[i]:e[i];return arguments.length>2&&(l.children=arguments.length>3?dt.call(arguments,2):n),ht(t.type,l,r||t.key,o||t.ref,null)}function ft(t,e){var n={__c:e="__cC"+He++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&o.some(function(l){l.__e=!0,Gt(l)})},this.sub=function(a){o.push(a);var l=a.componentWillUnmount;a.componentWillUnmount=function(){o.splice(o.indexOf(a),1),l&&l.call(a)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}dt=Pe.slice,g={__e:function(t,e,n,r){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),a=o.__d),a)return o.__E=o}catch(l){t=l}throw t}},Ne=0,j.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=q({},this.state),typeof t=="function"&&(t=t(q({},n),this.props)),t&&q(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Gt(this))},j.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Gt(this))},j.prototype.render=U,Z=[],De=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Kt=function(t,e){return t.__v.__b-e.__v.__b},wt.__r=0,He=0;var J,A,te,qe,ot=0,ze=[],Ct=[],Je=g.__b,Ke=g.__r,Ge=g.diffed,Ye=g.__c,Ze=g.unmount;function it(t,e){g.__h&&g.__h(A,t,ot||e),ot=0;var n=A.__H||(A.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:Ct}),n.__[t]}function E(t){return ot=1,Qe(tn,t)}function Qe(t,e,n){var r=it(J++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):tn(void 0,e),function(l){var c=r.__N?r.__N[0]:r.__[0],f=r.t(c,l);c!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=A,!A.u)){var o=function(l,c,f){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(m){return m.__c});if(p.every(function(m){return!m.__N}))return!i||i.call(this,l,c,f);var s=!1;return p.forEach(function(m){if(m.__N){var d=m.__[0];m.__=m.__N,m.__N=void 0,d!==m.__[0]&&(s=!0)}}),!(!s&&r.__c.props===l)&&(!i||i.call(this,l,c,f))};A.u=!0;var i=A.shouldComponentUpdate,a=A.componentWillUpdate;A.componentWillUpdate=function(l,c,f){if(this.__e){var p=i;i=void 0,o(l,c,f),i=p}a&&a.call(this,l,c,f)},A.shouldComponentUpdate=o}return r.__N||r.__}function S(t,e){var n=it(J++,3);!g.__s&&oe(n.__H,e)&&(n.__=t,n.i=e,A.__H.__h.push(n))}function At(t,e){var n=it(J++,4);!g.__s&&oe(n.__H,e)&&(n.__=t,n.i=e,A.__h.push(n))}function L(t){return ot=5,ee(function(){return{current:t}},[])}function ee(t,e){var n=it(J++,7);return oe(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function St(t,e){return ot=8,ee(function(){return t},e)}function ne(t){var e=A.context[t.__c],n=it(J++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(A)),e.props.value):t.__}function pr(){for(var t;t=ze.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Ot),t.__H.__h.forEach(re),t.__H.__h=[]}catch(e){t.__H.__h=[],g.__e(e,t.__v)}}g.__b=function(t){A=null,Je&&Je(t)},g.__r=function(t){Ke&&Ke(t),J=0;var e=(A=t.__c).__H;e&&(te===A?(e.__h=[],A.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Ct,n.__N=n.i=void 0})):(e.__h.forEach(Ot),e.__h.forEach(re),e.__h=[],J=0)),te=A},g.diffed=function(t){Ge&&Ge(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ze.push(e)!==1&&qe===g.requestAnimationFrame||((qe=g.requestAnimationFrame)||fr)(pr)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Ct&&(n.__=n.__V),n.i=void 0,n.__V=Ct})),te=A=null},g.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Ot),n.__h=n.__h.filter(function(r){return!r.__||re(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],g.__e(r,n.__v)}}),Ye&&Ye(t,e)},g.unmount=function(t){Ze&&Ze(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Ot(r)}catch(o){e=o}}),n.__H=void 0,e&&g.__e(e,n.__v))};var Xe=typeof requestAnimationFrame=="function";function fr(t){var e,n=function(){clearTimeout(r),Xe&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Xe&&(e=requestAnimationFrame(n))}function Ot(t){var e=A,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),A=e}function re(t){var e=A;t.__c=t.__(),A=e}function oe(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function tn(t,e){return typeof e=="function"?e(t):e}function en(t,e){for(var n in e)t[n]=e[n];return t}function ie(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function ae(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function se(t){this.props=t}(se.prototype=new j).isPureReactComponent=!0,se.prototype.shouldComponentUpdate=function(t,e){return ie(this.props,t)||ie(this.state,e)};var nn=g.__b;g.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),nn&&nn(t)};var _r=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911,rn=function(t,e){return t==null?null:B(B(t).map(e))},mr={map:rn,forEach:rn,count:function(t){return t?B(t).length:0},only:function(t){var e=B(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:B},gr=g.__e;g.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}gr(t,e,n,r)};var on=g.unmount;function an(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=en({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return an(r,e,n)})),t}function sn(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return sn(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function Tt(){this.__u=0,this.t=null,this.__b=null}function ln(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function _t(){this.u=null,this.o=null}g.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),on&&on(t)},(Tt.prototype=new j).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=ln(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=a;var l=function(){if(!--r.__u){if(r.state.__a){var f=r.state.__a;r.__v.__k[0]=sn(f,f.__c.__P,f.__c.__O)}var p;for(r.setState({__a:r.__b=null});p=r.t.pop();)p.forceUpdate()}},c=e.__h===!0;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(a,a)},Tt.prototype.componentWillUnmount=function(){this.t=[]},Tt.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=an(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&O(U,null,t.fallback);return o&&(o.__h=null),[O(U,null,e.__a?null:t.children),o]};var un=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function vr(t){return this.getChildContext=function(){return t.context},t.children}function br(t){var e=this,n=t.i;e.componentWillUnmount=function(){z(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),z(O(vr,{context:e.context},t.__v),e.l)}function le(t,e){var n=O(br,{__v:t,i:e});return n.containerInfo=e,n}(_t.prototype=new j).__a=function(t){var e=this,n=ln(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),un(e,t,r)):o()};n?n(i):i()}},_t.prototype.render=function(t){this.u=null,this.o=new Map;var e=B(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},_t.prototype.componentDidUpdate=_t.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){un(t,n,e)})};var cn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,yr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,xr=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,wr=/[A-Z0-9]/g,kr=typeof document<"u",Er=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};j.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(j.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var dn=g.event;function Cr(){}function Ar(){return this.cancelBubble}function Sr(){return this.defaultPrevented}g.event=function(t){return dn&&(t=dn(t)),t.persist=Cr,t.isPropagationStopped=Ar,t.isDefaultPrevented=Sr,t.nativeEvent=t};var ue,Or={enumerable:!1,configurable:!0,get:function(){return this.class}},hn=g.vnode;g.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={};for(var i in n){var a=n[i];if(!(i==="value"&&"defaultValue"in n&&a==null||kr&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var l=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&a===!0?a="":l==="ondoubleclick"?i="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||Er(n.type)?l==="onfocus"?i="onfocusin":l==="onblur"?i="onfocusout":xr.test(i)?i=l:r.indexOf("-")===-1&&yr.test(i)?i=i.replace(wr,"-$&").toLowerCase():a===null&&(a=void 0):l=i="oninput",l==="oninput"&&o[i=l]&&(i="oninputCapture"),o[i]=a}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=B(n.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=B(n.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Or)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=cn,hn&&hn(t)};var pn=g.__r;g.__r=function(t){pn&&pn(t),ue=t.__c};var fn=g.diffed;g.diffed=function(t){fn&&fn(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),ue=null};var Tr={ReactCurrentDispatcher:{current:{readContext:function(t){return ue.__n[t.__c].props.value}}}};function Rt(t){return!!t&&t.$$typeof===cn}function _n(t){t()}var ce={useState:E,useId:function(){var t=it(J++,11);if(!t.__){for(var e=A.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__},useReducer:Qe,useEffect:S,useLayoutEffect:At,useInsertionEffect:At,useTransition:function(){return[!1,_n]},useDeferredValue:function(t){return t},useSyncExternalStore:function(t,e){var n=e(),r=E({h:{__:n,v:e}}),o=r[0].h,i=r[1];return At(function(){o.__=n,o.v=e,ae(o.__,e())||i({h:o})},[t,n,e]),S(function(){return ae(o.__,o.v())||i({h:o}),t(function(){ae(o.__,o.v())||i({h:o})})},[t]),n},startTransition:_n,useRef:L,useImperativeHandle:function(t,e,n){ot=6,At(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))},useMemo:ee,useC:null,r)):a&&a(t,s.childNodes,n,o)}:null}function I(t,e,n){return function(r,i,o,a,s){return r||((r=t.$new(!1,s)).$$transcluded=!0),e(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})}}function R(t,e,n,r,i){var o,a=n.$attr;switch(t.nodeType){case Jn:_(e,Rt(V(t)),"E",r,i);for(var s,l,f,h=t.attributes,p=0,$=h&&h.length;p<$;p++){var d=!1,m=!1;o=(s=h[p]).name,l=Bn(s.value),s=Rt(o),(f=ct.test(s))&&(o=o.replace(Cr,"").substr(8).replace(/_(.)/g,function(t,e){return e.toUpperCase()}));var v=s.replace(/(Start|End)$/,"");H(v)&&s===v+"Start"&&(d=o,m=o.substr(0,o.length-5)+"end",o=o.substr(0,o.length-6)),a[s=Rt(o.toLowerCase())]=o,!f&&n.hasOwnProperty(s)||(n[s]=l,Ct(t,s)&&(n[s]=!0)),Z(t,e,l,s,f),_(e,s,"A",r,i,d,m)}if(b(t=t.className)&&(t=t.animVal),x(t)&&""!==t)for(;o=c.exec(t);)_(e,s=Rt(o[2]),"C",r,i)&&(n[s]=Bn(o[3])),t=t.substr(o.index+o[0].length);break;case Yn:if(11===xn)for(;t.parentNode&&t.nextSibling&&t.nextSibling.nodeType===Yn;)t.nodeValue+=t.nextSibling.nodeValue,t.parentNode.removeChild(t.nextSibling);Y(e,t.nodeValue);break;case 8:try{(o=u.exec(t.nodeValue))&&(_(e,s=Rt(o[1]),"M",r,i)&&(n[s]=Bn(o[2])))}catch(t){}}return e.sort(G),e}function q(t,e,n){var r=[],i=0;if(e&&t.hasAttribute&&t.hasAttribute(e))do{if(!t)throw Sr("uterdir",e,n);t.nodeType==Jn&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(0<i);else r.push(t);return Sn(r)}function U(t,e,n){return function(r,i,o,a,s){return i=q(i[0],e,n),t(r,i,o,a,s)}}function F(t,r,o,a,s,u,c,l,f){function p(t,e,n,r){t&&(n&&(t=U(t,n,r)),t.require=v.require,t.directiveName=g,(M===v||v.$$isolateScope)&&(t=et(t,{isolateScope:!0})),c.push(t)),e&&(n&&(e=U(e,n,r)),e.require=v.require,e.directiveName=g,(M===v||v.$$isolateScope)&&(e=et(e,{isolateScope:!0})),l.push(e))}function $(t,e,n,r){var i;if(x(e)){var o=e.match(h);e=e.substring(o[0].length);var a=o[1]||o[3];o="?"===o[2];if("^^"===a?n=n.parent():i=(i=r&&r[e])&&i.instance,i||(r="$"+e+"Controller",i=a?n.inheritedData(r):n.data(r)),!i&&!o)throw Sr("ctreq",e,t)}else if(Un(e))for(i=[],a=0,o=e.length;a<o;a++)i[a]=$(t,e[a],n,r);return i||null}function d(t,e,n,r,i,o){var a,s=ot();for(a in r){var u=r[a],c={$scope:u===M||u.$$isolateScope?i:o,$element:t,$attrs:e,$transclude:n},l=u.controller;"@"==l&&(l=e[u.name]),c=y(l,c,!0,u.controllerAs),s[u.name]=c,D||t.data("$"+u.name+"Controller",c.instance)}return s}function m(t,e,i,a,s,u){var f,h,p,m,v,g,y;if(r===i?(a=o,y=o.$$element):(y=Sn(i),a=new it(y,o)),M&&(m=e.$new(!0)),s&&((g=function(t,e,r){var i;return O(t)||(r=e,e=t,t=n),D&&(i=v),r||(r=D?y.parent():y),s(t,e,i,r,S)}).$$boundTransclude=s),A&&(v=d(y,a,g,A,m,e)),M&&(j.$$addScopeInfo(y,m,!0,!(T&&(T===M||T===M.$$originalDirective))),j.$$addScopeClass(y,!0),m.$$isolateBindings=M.$$isolateBindings,rt(e,a,m,m.$$isolateBindings,M,m)),v){var b,w=M||k;for(f in w&&v[w.name]&&(h=w.$$bindings.bindToController,(p=v[w.name])&&p.identifier&&h&&(b=p,u.$$destroyBindings=rt(e,a,p.instance,h,w))),v){var x=(p=v[f])();x!==p.instance&&(p.instance=x,y.data("$"+f+"Controller",x),p===b&&(u.$$destroyBindings(),u.$$destroyBindings=rt(e,a,x,h,w)))}}for(f=0,u=c.length;f<u;f++)nt(h=c[f],h.isolateScope?m:e,y,a,h.require&&$(h.directiveName,h.require,y,v),g);var S=e;for(M&&(M.template||null===M.templateUrl)&&(S=m),t&&t(S,i.childNodes,n,s),f=l.length-1;0<=f;f--)nt(h=l[f],h.isolateScope?m:e,y,a,h.require&&$(h.directiveName,h.require,y,v),g)}f=f||{};for(var v,g,w,S,C=-Number.MAX_VALUE,k=f.newScopeDirective,A=f.controllerDirectives,M=f.newIsolateScopeDirective,T=f.templateDirective,V=f.nonTlbTranscludeDirective,N=!1,P=!1,D=f.hasElementTranscludeDirective,I=o.$$element=Sn(r),F=a,_=0,H=t.length;_<H;_++){var G=(v=t[_]).$$start,Y=v.$$end;if(G&&(I=q(r,G,Y)),w=n,C>v.priority)break;if((w=v.scope)&&(v.templateUrl||(b(w)?(J("new/isolated scope",M||k,v,I),M=v):J("new/isolated scope",M,v,I)),k=k||v),g=v.name,!v.templateUrl&&v.controller&&(w=v.controller,A=A||ot(),J("'"+g+"' controller",A[g],v,I),A[g]=v),(w=v.transclude)&&(N=!0,v.$$tlb||(J("transclusion",V,v,I),V=v),"element"==w?(D=!0,C=v.priority,w=I,I=o.$$element=Sn(e.createComment(" "+g+": "+o[g]+" ")),r=I[0],X(s,Tn.call(w,0),r),F=j(w,a,C,u&&u.name,{nonTlbTranscludeDirective:V})):(w=Sn(lt(r)).contents(),I.empty(),F=j(w,a))),v.template)if(P=!0,J("template",T,v,I),T=v,w=E(v.template)?v.template(I,o):v.template,w=ut(w),v.replace){if(u=v,w=ir.test(w)?Ut(K(v.templateNamespace,Bn(w))):[],r=w[0],1!=w.length||r.nodeType!==Jn)throw Sr("tplrt",g,"");X(s,I,r),w=R(r,[],H={$attr:{}});var Z=t.splice(_+1,t.length-(_+1));M&&B(w),t=t.concat(w).concat(Z),z(o,H),H=t.length}else I.html(w);if(v.templateUrl)P=!0,J("template",T,v,I),T=v,v.replace&&(u=v),m=W(t.splice(_,t.length-_),I,o,s,N&&F,c,l,{controllerDirectives:A,newScopeDirective:k!==v&&k,newIsolateScopeDirective:M,templateDirective:T,nonTlbTranscludeDirective:V}),H=t.length;else if(v.compile)try{E(S=v.compile(I,o,F))?p(null,S,G,Y):S&&p(S.pre,S.post,G,Y)}catch(t){i(t,L(I))}v.terminal&&(m.terminal=!0,C=Math.max(C,v.priority))}return m.scope=k&&!0===k.scope,m.transcludeOnThisElement=N,m.templateOnThisElement=P,m.transclude=F,f.hasElementTranscludeDirective=D,m}function B(t){for(var e=0,n=t.length;e<n;e++)t[e]=p(t[e],{$$isolateScope:!0})}function _(e,r,o,s,u,c,l){if(r===u)return null;if(u=null,a.hasOwnProperty(r))for(var f,h=0,$=(r=t.get(r+"Directive")).length;h<$;h++)try{f=r[h],(s===n||s>f.priority)&&-1!=f.restrict.indexOf(o)&&(c&&(f=p(f,{$$start:c,$$end:l})),e.push(f),u=f)}catch(t){i(t)}return u}function H(e){if(a.hasOwnProperty(e))for(var n=t.get(e+"Directive"),r=0,i=n.length;r<i;r++)if((e=n[r]).multiElement)return!0;return!1}function z(t,e){var n=e.$attr,r=t.$attr,i=t.$$element;o(t,function(r,i){"$"!=i.charAt(0)&&(e[i]&&e[i]!==r&&(r+=("style"===i?";":" ")+e[i]),t.$set(i,r,!0,n[i]))}),o(e,function(e,o){"class"==o?(T(i,e),t.class=(t.class?t.class+" ":"")+e):"style"==o?(i.attr("style",i.attr("style")+";"+e),t.style=(t.style?t.style+";":"")+e):"$"==o.charAt(0)||t.hasOwnProperty(o)||(t[o]=e,r[o]=n[o])})}function W(t,e,n,r,i,a,u,c){var l,f,h=[],$=e[0],d=t.shift(),m=p(d,{templateUrl:null,transclude:null,replace:null,$$originalDirective:d}),v=E(d.templateUrl)?d.templateUrl(e,n):d.templateUrl,g=d.templateNamespace;return e.empty(),s(v).then(function(s){var p,y;if(s=ut(s),d.replace){if(s=ir.test(s)?Ut(K(g,Bn(s))):[],p=s[0],1!=s.length||p.nodeType!==Jn)throw Sr("tplrt",d.name,v);s={$attr:{}},X(r,e,p);var w=R(p,[],s);b(d.scope)&&B(w),t=w.concat(t),z(n,s)}else p=$,e.html(s);for(t.unshift(m),l=F(t,p,n,i,e,d,a,u,c),o(r,function(t,n){t==p&&(r[n]=e[0])}),f=P(e[0].childNodes,i);h.length;){s=h.shift(),y=h.shift();var x=h.shift(),S=h.shift();w=e[0];if(!s.$$destroyed){if(y!==$){var C=y.className;c.hasElementTranscludeDirective&&d.replace||(w=lt(p)),X(x,Sn(y),w),T(Sn(w),C)}y=l.transcludeOnThisElement?I(s,l.transclude,S):S,l(f,s,w,r,y,l)}}h=null}),function(t,e,n,r,i){t=i,e.$$destroyed||(h?h.push(e,n,r,t):(l.transcludeOnThisElement&&(t=I(e,l.transclude,i)),l(f,e,n,r,t,l)))}}function G(t,e){var n=e.priority-t.priority;return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function J(t,e,n,r){function i(t){return t?" (module: "+t+")":""}if(e)throw Sr("multidir",e.name,i(e.$$moduleName),n.name,i(n.$$moduleName),t,L(r))}function Y(t,e){var n=r(e,!0);n&&t.push({priority:0,compile:function(t){var e=!!(t=t.parent()).length;return e&&j.$$addBindingClass(t),function(t,r){var i=r.parent();e||j.$$addBindingClass(i),j.$$addBindingInfo(i,n.expressions),t.$watch(n,function(t){r[0].nodeValue=t})}}})}function K(t,n){switch(t=An(t||"html")){case"svg":case"math":var r=e.createElement("div");return r.innerHTML="<"+t+">"+n+"</"+t+">",r.childNodes[0].childNodes;default:return n}}function Z(t,e,n,i,o){var a=function(t,e){if("srcdoc"==e)return k.HTML;var n=V(t);return"xlinkHref"==e||"form"==n&&"action"==e||"img"!=n&&("src"==e||"ngSrc"==e)?k.RESOURCE_URL:void 0}(t,i);o=f[i]||o;var s=r(n,!0,a,o);if(s){if("multiple"===i&&"select"===V(t))throw Sr("selmulti",L(t));e.push({priority:100,compile:function(){return{pre:function(t,e,u){if(e=u.$$observers||(u.$$observers={}),v.test(i))throw Sr("nodomevents");var c=u[i];c!==n&&(s=c&&r(c,!0,a,o),n=c),s&&(u[i]=s(t),(e[i]||(e[i]=[])).$$inter=!0,(u.$$observers&&u.$$observers[i].$$scope||t).$watch(s,function(t,e){"class"===i&&t!=e?u.$updateClass(t,e):u.$set(i,t)}))}}}})}}function X(t,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode;if(t)for(i=0,o=t.length;i<o;i++)if(t[i]==a){t[i++]=r,o=i+s-1;for(var c=t.length;i<c;i++,o++)o<c?t[i]=t[o]:delete t[i];t.length-=s-1,t.context===a&&(t.context=r);break}for(u&&u.replaceChild(r,a),(t=e.createDocumentFragment()).appendChild(a),Sn.hasData(a)&&(Sn(r).data(Sn(a).data()),Cn?(qn=!0,Cn.cleanData([a])):delete Sn.cache[a[Sn.expando]]),a=1,s=n.length;a<s;a++)u=n[a],Sn(u).remove(),t.appendChild(u),delete n[a];n[0]=r,n.length=1}function et(t,e){return l(function(){return t.apply(null,arguments)},t,e)}function nt(t,e,n,r,o,a){try{t(e,n,r,o,a)}catch(t){i(t,L(n))}}function rt(t,e,n,i,a,s){var u;return o(i,function(i,o){var s,c,l,f,h=i.attrName,p=i.optional;switch(i.mode){case"@":p||On.call(e,h)||(n[o]=e[h]=void 0),e.$observe(h,function(t){x(t)&&(n[o]=t)}),e.$$observers[h].$$scope=t,x(e[h])&&(n[o]=r(e[h])(t));break;case"=":if(!On.call(e,h)){if(p)break;e[h]=void 0}if(p&&!e[h])break;c=m(e[h]),f=c.literal?D:function(t,e){return t===e||t!=t&&e!=e},l=c.assign||function(){throw s=n[o]=c(t),Sr("nonassign",e[h],a.name)},s=n[o]=c(t),(p=function(e){return f(e,n[o])||(f(e,s)?l(t,e=n[o]):n[o]=e),s=e}).$stateful=!0,p=i.collection?t.$watchCollection(e[h],p):t.$watch(m(e[h],p),null,c.literal),(u=u||[]).push(p);break;case"&":if((c=e.hasOwnProperty(h)?m(e[h]):$)===$&&p)break;n[o]=function(e){return c(t,e)}}}),i=u?function(){for(var t=0,e=u.length;t<e;++t)u[t]()}:$,s&&i!==$?(s.$on("$destroy",i),$):i}var it=function(t,e){if(e){var n,r,i,o=Object.keys(e);for(n=0,r=o.length;n<r;n++)this[i=o[n]]=e[i]}else this.$attr={};this.$$element=t};it.prototype={$normalize:Rt,$addClass:function(t){t&&0<t.length&&A.addClass(this.$$element,t)},$removeClass:function(t){t&&0<t.length&&A.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=qt(t,e);n&&n.length&&A.addClass(this.$$element,n),(n=qt(e,t))&&n.length&&A.removeClass(this.$$element,n)},$set:function(t,e,r,a){var s=Ct(c=this.$$element[0],t),u=function(t,e){var n=t.nodeName;return("INPUT"===n||"TEXTAREA"===n)&&fr[e]}(c,t),c=t;if(s?(this.$$element.prop(t,e),a=s):u&&(this[u]=e,c=u),this[t]=e,a?this.$attr[t]=a:(a=this.$attr[t])||(this.$attr[t]=a=Q(t,"-")),"a"===(s=V(this.$$element))&&"href"===t||"img"===s&&"src"===t)this[t]=e=M(e,"src"===t);else if("img"===s&&"srcset"===t){s="",u=Bn(e);for(var l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,f=(l=/\s/.test(u)?l:/(,)/,u=u.split(l),l=Math.floor(u.length/2),0);f<l;f++){var h=2*f;s=(s=s+M(Bn(u[h]),!0))+" "+Bn(u[h+1])}u=Bn(u[2*f]).split(/\s/),s+=M(Bn(u[0]),!0),2===u.length&&(s+=" "+Bn(u[1])),this[t]=e=s}!1!==r&&(null===e||e===n?this.$$element.removeAttr(a):this.$$element.attr(a,e)),(t=this.$$observers)&&o(t[c],function(t){try{t(e)}catch(t){i(t)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers=ot()),i=r[t]||(r[t]=[]);return i.push(e),S.$evalAsync(function(){i.$$inter||!n.hasOwnProperty(t)||g(n[t])||e(n[t])}),function(){N(i,e)}}};var at=r.startSymbol(),st=r.endSymbol(),ut="{{"==at||"}}"==st?d:function(t){return t.replace(/\{\{/g,at).replace(/}}/g,st)},ct=/^ngAttr[A-Z]/;return j.$$addBindingInfo=w?function(t,e){var n=t.data("$binding")||[];Un(e)?n=n.concat(e):n.push(e),t.data("$binding",n)}:$,j.$$addBindingClass=w?function(t){T(t,"ng-binding")}:$,j.$$addScopeInfo=w?function(t,e,n,r){t.data(n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope",e)}:$,j.$$addScopeClass=w?function(t,e){T(t,e?"ng-isolate-scope":"ng-scope")}:$,j}]}function Rt(t){return at(t.replace(Cr,""))}function qt(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/),o=0;t:for(;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a==i[s])continue t;n+=(0<n.length?" ":"")+a}return n}function Ut(t){var e=(t=Sn(t)).length;if(1>=e)return t;for(;e--;)8===t[e].nodeType&&Vn.call(t,e,1);return t}function Ft(){var t={},e=!1;this.register=function(e,n){nt(e,"controller"),b(e)?l(t,e):t[e]=n},this.allowGlobals=function(){e=!0},this.$get=["$injector","$window",function(i,o){function a(t,e,n,i){if(!t||!b(t.$scope))throw r("$controller")("noscp",i,e);t.$scope[e]=n}return function(r,s,u,c){var f,h,p;if(u=!0===u,c&&x(c)&&(p=c),x(r)){if(!(c=r.match(kr)))throw Er("ctrlfmt",r);h=c[1],p=p||c[3],et(r=t.hasOwnProperty(h)?t[h]:rt(s.$scope,h,!0)||(e?rt(o,h,!0):n),h,!0)}return u?(u=(Un(r)?r[r.length-1]:r).prototype,f=Object.create(u||null),p&&a(s,p,f,h||r.name),l(function(){var t=i.invoke(r,f,s,h);return t!==f&&(b(t)||E(t))&&(f=t,p&&a(s,p,f,h||r.name)),f},{instance:f,identifier:p})):(f=i.instantiate(r,s,h),p&&a(s,p,f,h||r.name),f)}}]}function Bt(){this.$get=["$window",function(t){return Sn(t.document)}]}function _t(){this.$get=["$log",function(t){return function(e,n){t.error.apply(t,arguments)}}]}function Lt(t){return b(t)?C(t)?t.toISOString():U(t):t}function Ht(){this.$get=function(){return function(t){if(!t)return"";var e=[];return a(t,function(t,n){null===t||g(t)||(Un(t)?o(t,function(t,r){e.push(J(n)+"="+J(Lt(t)))}):e.push(J(n)+"="+J(Lt(t))))}),e.join("&")}}}function zt(){this.$get=function(){return function(t){if(!t)return"";var e=[];return function t(n,r,i){null===n||g(n)||(Un(n)?o(n,function(e,n){t(e,r+"["+(b(e)?n:"")+"]")}):b(n)&&!C(n)?a(n,function(e,n){t(e,r+(i?"":"[")+n+(i?"":"]"))}):e.push(J(r)+"="+J(Lt(n))))}(t,"",!0),e.join("&")}}}function Wt(t,e){if(x(t)){var n=t.replace(Nr,"").trim();if(n){var r=e("Content-Type");(r=r&&0===r.indexOf(Or))||(r=(r=n.match(Tr))&&Vr[r[0]].test(n)),r&&(t=F(n))}}return t}function Gt(t){var e,n=ot();return x(t)?o(t.split("\n"),function(t){e=t.indexOf(":");var r=An(Bn(t.substr(0,e)));t=Bn(t.substr(e+1)),r&&(n[r]=n[r]?n[r]+", "+t:t)}):b(t)&&o(t,function(t,e){var r=An(e),i=Bn(t);r&&(n[r]=n[r]?n[r]+", "+i:i)}),n}function Jt(t){var e;return function(n){return e||(e=Gt(t)),n?(void 0===(n=e[An(n)])&&(n=null),n):e}}function Yt(t,e,n,r){return E(r)?r(t,e,n):(o(r,function(r){t=r(t,e,n)}),t)}function Kt(){var t=this.defaults={transformResponse:[Wt],transformRequest:[function(t){return b(t)&&"[object File]"!==jn.call(t)&&"[object Blob]"!==jn.call(t)&&"[object FormData]"!==jn.call(t)?U(t):t}],headers:{common:{Accept:"application/json, text/plain, */*"},post:P(Mr),put:P(Mr),patch:P(Mr)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},e=!1;this.useApplyAsync=function(t){return y(t)?(e=!!t,this):e};var i=!0;this.useLegacyPromiseExtensions=function(t){return y(t)?(i=!!t,this):i};var a=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(s,u,c,f,h,p){function $(e){function a(t){var e=l({},t);return e.data=t.data?Yt(t.data,t.headers,t.status,s.transformResponse):t.data,200<=(t=t.status)&&300>t?e:h.reject(e)}if(!In.isObject(e))throw r("$http")("badreq",e);var s=l({method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse,paramSerializer:t.paramSerializer},e);s.headers=function(e){var n,r,i,a=t.headers,s=l({},e.headers);a=l({},a.common,a[An(e.method)]);t:for(n in a){for(i in r=An(n),s)if(An(i)===r)continue t;s[n]=a[n]}return function(t,e){var n,r={};return o(t,function(t,i){E(t)?null!=(n=t(e))&&(r[i]=n):r[i]=t}),r}(s,P(e))}(e),s.method=Mn(s.method),s.paramSerializer=x(s.paramSerializer)?p.get(s.paramSerializer):s.paramSerializer;var u=[function(e){var r=e.headers,i=Yt(e.data,Jt(r),n,e.transformRequest);return g(i)&&o(r,function(t,e){"content-type"===An(e)&&delete r[e]}),g(e.withCredentials)&&!g(t.withCredentials)&&(e.withCredentials=t.withCredentials),d(e,i).then(a,a)},n],c=h.when(s);for(o(v,function(t){(t.request||t.requestError)&&u.unshift(t.request,t.requestError),(t.response||t.responseError)&&u.push(t.response,t.responseError)});u.length;){e=u.shift();var f=u.shift();c=c.then(e,f)}return i?(c.success=function(t){return et(t,"fn"),c.then(function(e){t(e.data,e.status,e.headers,s)}),c},c.error=function(t){return et(t,"fn"),c.then(null,function(e){t(e.data,e.status,e.headers,s)}),c}):(c.success=Pr("success"),c.error=Pr("error")),c}function d(r,i){function o(t,e,n,i){(200<=(e=Math.max(e,0))&&300>e?d.resolve:d.reject)({data:t,status:e,headers:Jt(n),config:r,statusText:i})}function a(t){o(t.data,t.status,P(t.headers()),t.statusText)}function c(){var t=$.pendingRequests.indexOf(r);-1!==t&&$.pendingRequests.splice(t,1)}var l,p,d=h.defer(),v=d.promise,w=r.headers,x=function(t,e){return 0<e.length&&(t+=(-1==t.indexOf("?")?"?":"&")+e),t}(r.url,r.paramSerializer(r.params));return $.pendingRequests.push(r),v.then(c,c),!r.cache&&!t.cache||!1===r.cache||"GET"!==r.method&&"JSONP"!==r.method||(l=b(r.cache)?r.cache:b(t.cache)?t.cache:m),l&&(y(p=l.get(x))?p&&E(p.then)?p.then(a,a):Un(p)?o(p[1],p[0],P(p[2]),p[3]):o(p,200,{},"OK"):l.put(x,v)),g(p)&&((p=Le(r.url)?u()[r.xsrfCookieName||t.xsrfCookieName]:n)&&(w[r.xsrfHeaderName||t.xsrfHeaderName]=p),s(r.method,x,i,function(t,n,r,i){function a(){o(n,t,r,i)}l&&(200<=t&&300>t?l.put(x,[t,n,Gt(r),i]):l.remove(x)),e?f.$applyAsync(a):(a(),f.$$phase||f.$apply())},w,r.timeout,r.withCredentials,r.responseType)),v}var m=c("$http");t.paramSerializer=x(t.paramSerializer)?p.get(t.paramSerializer):t.paramSerializer;var v=[];return o(a,function(t){v.unshift(x(t)?p.get(t):p.invoke(t))}),$.pendingRequests=[],function(t){o(arguments,function(t){$[t]=function(e,n){return $(l({},n||{},{method:t,url:e}))}})}("get","delete","head","jsonp"),function(t){o(arguments,function(t){$[t]=function(e,n,r){return $(l({},r||{},{method:t,url:e,data:n}))}})}("post","put","patch"),$.defaults=t,$}]}function Zt(){return new t.XMLHttpRequest}function Xt(){this.$get=["$browser","$window","$document",function(t,e,r){return function(t,e,r,i,a){function s(t,e,n){var r=a.createElement("script"),o=null;return r.type="text/javascript",r.src=t,r.async=!0,o=function(t){r.removeEventListener("load",o,!1),r.removeEventListener("error",o,!1),a.body.removeChild(r),r=null;var s=-1,u="unknown";t&&("load"!==t.type||i[e].called||(t={type:"error"}),u=t.type,s="error"===t.type?404:200),n&&n(s,u)},r.addEventListener("load",o,!1),r.addEventListener("error",o,!1),a.body.appendChild(r),o}return function(a,u,c,l,f,h,p,d){function m(){b&&b(),w&&w.abort()}function v(e,i,o,a,s){x!==n&&r.cancel(x),b=w=null,e(i,o,a,s),t.$$completeOutstandingRequest($)}if(t.$$incOutstandingRequestCount(),u=u||t.url(),"jsonp"==An(a)){var g="_"+(i.counter++).toString(36);i[g]=function(t){i[g].data=t,i[g].called=!0};var b=s(u.replace("JSON_CALLBACK","angular.callbacks."+g),g,function(t,e){v(l,t,i[g].data,"",e),i[g]=$})}else{var w=e();if(w.open(a,u,!0),o(f,function(t,e){y(t)&&w.setRequestHeader(e,t)}),w.onload=function(){var t=w.statusText||"",e="response"in w?w.response:w.responseText,n=1223===w.status?204:w.status;0===n&&(n=e?200:"file"==_e(u).protocol?404:0),v(l,n,e,w.getAllResponseHeaders(),t)},a=function(){v(l,-1,null,null,"")},w.onerror=a,w.onabort=a,p&&(w.withCredentials=!0),d)try{w.responseType=d}catch(t){if("json"!==d)throw t}w.send(c)}if(0<h)var x=r(m,h);else h&&E(h.then)&&h.then(m)}}(t,Zt,t.defer,e.angular.callbacks,r[0])}]}function Qt(){var t="{{",e="}}";this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(t){return"\\\\\\"+t}function a(n){return n.replace(f,t).replace(h,e)}function s(o,s,f,h){function p(t){try{var e,n=t;if(t=f?i.getTrusted(f,n):i.valueOf(n),h&&!y(t))e=t;else if(null==t)e="";else{switch(typeof t){case"string":break;case"number":t=""+t;break;default:t=U(t)}e=t}return e}catch(t){r(Dr.interr(o,t))}}h=!!h;for(var $,d,m=0,v=[],b=[],w=o.length,x=[],S=[];m<w;){if(-1==($=o.indexOf(t,m))||-1==(d=o.indexOf(e,$+u))){m!==w&&x.push(a(o.substring(m)));break}m!==$&&x.push(a(o.substring(m,$))),m=o.substring($+u,d),v.push(m),b.push(n(m,p)),m=d+c,S.push(x.length),x.push("")}if(f&&1<x.length&&Dr.throwNoconcat(o),!s||v.length){var C=function(t){for(var e=0,n=v.length;e<n;e++){if(h&&g(t[e]))return;x[S[e]]=t[e]}return x.join("")};return l(function(t){var e=0,n=v.length,i=Array(n);try{for(;e<n;e++)i[e]=b[e](t);return C(i)}catch(t){r(Dr.interr(o,t))}},{exp:o,expressions:v,$$watchDelegate:function(t,e){var n;return t.$watchGroup(b,function(r,i){var o=C(r);E(e)&&e.call(this,o,r!==i?n:o,t),n=o})}})}}var u=t.length,c=e.length,f=new RegExp(t.replace(/./g,o),"g"),h=new RegExp(e.replace(/./g,o),"g");return s.startSymbol=function(){return t},s.endSymbol=function(){return e},s}]}function te(){this.$get=["$rootScope","$window","$q","$$q",function(t,e,n,r){function i(i,a,s,u){var c=4<arguments.length,l=c?Tn.call(arguments,4):[],f=e.setInterval,h=e.clearInterval,p=0,$=y(u)&&!u,d=($?r:n).defer(),m=d.promise;return s=y(s)?s:0,m.then(null,null,c?function(){i.apply(null,l)}:i),m.$$intervalId=f(function(){d.notify(p++),0<s&&p>=s&&(d.resolve(p),h(m.$$intervalId),delete o[m.$$intervalId]),$||t.$apply()},a),o[m.$$intervalId]=d,m}var o={};return i.cancel=function(t){return!!(t&&t.$$intervalId in o)&&(o[t.$$intervalId].reject("canceled"),e.clearInterval(t.$$intervalId),delete o[t.$$intervalId],!0)},i}]}function ee(t){for(var e=(t=t.split("/")).length;e--;)t[e]=G(t[e]);return t.join("/")}function ne(t,e){var n=_e(t);e.$$protocol=n.protocol,e.$$host=n.hostname,e.$$port=h(n.port)||Rr[n.protocol]||null}function re(t,e){var n="/"!==t.charAt(0);n&&(t="/"+t);var r=_e(t);e.$$path=decodeURIComponent(n&&"/"===r.pathname.charAt(0)?r.pathname.substring(1):r.pathname),e.$$search=z(r.search),e.$$hash=decodeURIComponent(r.hash),e.$$path&&"/"!=e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function ie(t,e){if(0===e.indexOf(t))return e.substr(t.length)}function oe(t){var e=t.indexOf("#");return-1==e?t:t.substr(0,e)}function ae(t){return t.replace(/(#.+)|#$/,"$1")}function se(t,e,r){this.$$html5=!0,r=r||"",ne(t,this),this.$$parse=function(t){var n=ie(e,t);if(!x(n))throw qr("ipthprfx",t,e);re(n,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var t=W(this.$$search),n=this.$$hash?"#"+G(this.$$hash):"";this.$$url=ee(this.$$path)+(t?"?"+t:"")+n,this.$$absUrl=e+this.$$url.substr(1)},this.$$parseLinkUrl=function(i,o){return o&&"#"===o[0]?(this.hash(o.slice(1)),!0):((a=ie(t,i))!==n?(s=a,s=(a=ie(r,a))!==n?e+(ie("/",a)||a):t+s):(a=ie(e,i))!==n?s=e+a:e==i+"/"&&(s=e),s&&this.$$parse(s),!!s);var a,s}}function ue(t,e,n){ne(t,this),this.$$parse=function(r){var i;g(o=ie(t,r)||ie(e,r))||"#"!==o.charAt(0)?this.$$html5?i=o:(i="",g(o)&&(t=r,this.replace())):g(i=ie(n,o))&&(i=o),re(i,this),r=this.$$path;var o=t,a=/^\/[A-Z]:(\/.*)/;0===i.indexOf(o)&&(i=i.replace(o,"")),a.exec(i)||(r=(i=a.exec(r))?i[1]:r),this.$$path=r,this.$$compose()},this.$$compose=function(){var e=W(this.$$search),r=this.$$hash?"#"+G(this.$$hash):"";this.$$url=ee(this.$$path)+(e?"?"+e:"")+r,this.$$absUrl=t+(this.$$url?n+this.$$url:"")},this.$$parseLinkUrl=function(e,n){return oe(t)==oe(e)&&(this.$$parse(e),!0)}}function ce(t,e,n){this.$$html5=!0,ue.apply(this,arguments),this.$$parseLinkUrl=function(r,i){return i&&"#"===i[0]?(this.hash(i.slice(1)),!0):(t==oe(r)?o=r:(a=ie(e,r))?o=t+n+a:e===r+"/"&&(o=e),o&&this.$$parse(o),!!o);var o,a},this.$$compose=function(){var e=W(this.$$search),r=this.$$hash?"#"+G(this.$$hash):"";this.$$url=ee(this.$$path)+(e?"?"+e:"")+r,this.$$absUrl=t+n+this.$$url}}function le(t){return function(){return this[t]}}function fe(t,e){return function(n){return g(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function he(){var t="",e={enabled:!1,requireBase:!0,re" height="29" loading="lazy" class="produt-icon"></div>
                <h5 class="title-submenu">Google Ads</h5>
                <p>Uma equipe do UOL para divulgar seu negócio nas buscas do Google.</p>
                <p class="menu-hover_link">Anuncie no Google</p>
                </a>
              </div>
              <div class="col-sm-6 menu-hover">
                <a href="https://uolhost.uol.com.br/facebook-ads" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Marketing Digital Host', action: 'Clique', label: 'Instagram e Facebook Ads', value: 1});" title="Veja mais em: Anuncie agora">
                <div class="icon-wrap"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-facebookads.png?v=1.0.32" alt="Ícone Instagram e Facebook Ads" width="32" height="30" loading="lazy" class="produt-icon"></div>
                <h5 class="title-submenu">Instagram e Facebook Ads</h5>
                <p>Conte com nossos especialistas para divulgar no Facebook e Instagram.</p>
                <p class="menu-hover_link">Anuncie agora</p>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li class="link-item">
          <a onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Superior Host', action: 'Clique', label: 'Soluções Empresariais', value: 1});">Soluções Empresariais</a>
          <div class="sub-menu-wrap">
            <div class="container">
              <div class="col-sm-6">
              <div class="menu-hover--company">
                <a href="https://uolhost.uol.com.br/e-mail/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais Host', action: 'Clique', label: 'E-mail profissional', value: 1});" title="Veja mais em: Crie o seu e-mail">
                  <div class="icon-wrap"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-emailprof.png?v=1.0.32" alt="Ícone E-mail profissional" width="32" height="23" loading="lazy" class="produt-icon"></div>
                    <h5 class="title-submenu">E-mail profissional</h5>
                    <p>Seu e-mail com @suaempresa e deixe sua marca mais profissional.</p>
                    <p class="menu-hover--company_link">Crie o seu e-mail</p>
                  </a>
                </div>
                <div class="menu-hover--company">
                  <a href="https://uolhost.uol.com.br/microsoft-office-365" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais Host', action: 'Clique', label: 'Microsoft Office 365', value: 1});" title="Veja mais em: Comece a usar agora">
                    <div class="icon-wrap"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-microsoft.png?v=1.0.32" alt="Ícone Microsoft Office 365" width="25" height="30" loading="lazy" class="produt-icon"></div>
                    <h5 class="title-submenu">Microsoft Office 365</h5>
                    <p>Trabalhe de forma colaborativa no Word, Excel, PowerPoint e demais.</p>
                    <p class="menu-hover--company_link">Comece a usar agora</p>
                  </a>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="menu-hover--company">
                  <a href="https://uolhost.uol.com.br/uol-pro-suite" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais UMN', action: 'Clique', label: 'UOL Pro Suite', value: 1});" title="Veja mais em: Comece a usar agora">
                    <div class="icon-wrap"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/icon-pro-suite.svg?v=1.0.32" alt="Ícone UOL Pro Suite" width="24" height="24" loading="lazy" class="produt-icon"></div>
                    <h5 class="title-submenu">UOL Pro Suite</h5>
                    <p>A nova geração do e-mail profissional com ferramentas de gestão e produtividade.</p>
                    <p class="menu-hover--company_link">Comece a usar agora</p>
                  </a>
                </div>
                <div class="menu-hover--company">
                  <a href="https://uolhost.uol.com.br/google-workspace" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais UMN', action: 'Clique', label: 'Google Workspace', value: 1});" title="Veja mais em: Comece a usar agora">
                    <div class="icon-wrap"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-workspace.png?v=1.0.32" alt="Ícone Google Workspace" width="34" height="20" loading="lazy" class="produt-icon"></div>
                    <h5 class="title-submenu">Google Workspace</h5>
                    <p>Mais interação e produtividade para você ou sua empresa.</p>
                    <p class="menu-hover--company_link">Comece a usar agora</p>
                  </a>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="menu-hover--company">
                  <a href="https://meunegocio.uol.com.br/microsoft-office-365/exchange/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais UMN', action: 'Clique', label: 'Microsoft Exchange', value: 1});" title="Veja mais em: Saiba mais">
                    <div class="icon-wrap"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-exchenge.png?v=1.0.32" alt="Ícone Microsoft Exchange" width="29" height="28" loading="lazy" class="produt-icon"></div>
                    <h5 class="title-submenu">Microsoft Exchange</h5>
                    <p>Serviço de e-mail executivo com a infra-estrutura da Microsoft.</p>
                    <p class="menu-hover--company_link">Saiba mais</p>
                  </a>
                </div>
              </div>
              <div class="col-sm-6">
                <a href="https://uolhost.uol.com.br/google-workspace#plans" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais Host', action: 'Clique', label: 'banner soluções empresariais', value: 1});" title="Conheça os planos do Google Workspace" class="banner-link"><img src="//cdn.imguol.com.br/p/pp/common/menu/banners/banner-google-workspace.png?v=1.0.32" alt="Banner Conheça os planos do Google Workspace" width="259" height="295" loading="lazy"></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="menu-v4 menu-v4-mobile menu-host">
  <div class="menu-top">
    <div class="menu-button-wrap">
      <button type="button" class="menu-button" id="menu-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="overlay close-menu"></div>
      <div class="menu-wrap">
        <ul class="menu-list">
          <li class="menu-item">
            <button class="mobile-submenu-link">Todos os produtos</button>
            <div class="sub-menu-wrap">
              <div class="title-wrap">
                <button type="button" class="btn-back mobile-submenu-back"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-arrow-left.png?v=1.0.32" alt="Ícone seta para esquerda" width="10" height="18" loading="lazy"></button>
                <h5 class="title-product">Todos os produtos</h5>
              </div>
              <ul class="links-list">
                <li>
                  <h5 class="title-submenu">Hospede seus Sites</h5>
                  <nav>
                    <a href="https://uolhost.uol.com.br/hospedagem-de-sites" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Hospedagem de Sites', value: 1});" title="Acesse: Hospedagem de sites">Hospedagem de sites</a>
                    <a href="https://uolhost.uol.com.br/revenda-de-hospedagem" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Revenda de Hospedagem', value: 1});" title="Acesse: Revenda de Hospedagem">Revenda de Hospedagem</a>
                    <a href="https://uolhost.uol.com.br/uol-cloud-computing" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Cloud Computing', value: 1});" title="Acesse: Cloud Computing">Cloud Computing</a>
                    <a href="https://uolhost.uol.com.br/banco-de-dados" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Banco de Dados', value: 1});" title="Acesse: Banco de dados">Banco de dados</a>
                  </nav>
                </li>
                <li>
                  <h5 class="title-submenu">Compre seus domínios</h5>
                  <nav>
                                          <a href="https://uolhost.uol.com.br/registro-de-dominio" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Registro de Domínios', value: 1});" title="Acesse: Registro de domínios">Registro de domínios</a>
                                        <a href="https://uolhost.uol.com.br/transferencia-de-dominio.html" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Transferência de Domínios', value: 1});" title="Acesse: Transferência de domínios">Transferência de domínios</a>
                    <a href="https://uolhost.uol.com.br/certificado-ssl" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Certificado SSL', value: 1});" title="Acesse: Certificado SSL">Certificado SSL</a>
                    <a href="https://uolhost.uol.com.br/consulta-whois" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Consulta Whois', value: 1});" title="Acesse: Consulta Whois">Consulta Whois</a>
                  </nav>
                </li>
                <li>
                  <h5 class="title-submenu">Crie sua Loja Virtual</h5>
                  <nav>
                    <a href="https://uolhost.uol.com.br/loja-virtual" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Loja Virtual', value: 1});" title="Acesse: Loja VirtUOL">Loja VirtUOL</a>
                  </nav>
                </li>
                <li>
                  <h5 class="title-submenu">Crie seu site online</h5>
                  <nav>
                    <a href="https://uolhost.uol.com.br/criador-de-sites/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Criador de Sites', value: 1});" title="Acesse: Criador de Sites">Criador de Sites</a>
                    <a href="https://uolhost.uol.com.br/crie-seu-blog" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Criador de Blog', value: 1});" title="Acesse: Criador de Blog">Criador de Blog</a>
                    <a href="https://meunegocio.uol.com.br/conecte" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Conecte', value: 1});" title="Acesse: Conecte">Conecte</a>
                  </nav>
                </li>
                <li>
                  <h5 class="title-submenu">Marketing Digital</h5>
                  <nav>
                    <a href="https://uolhost.uol.com.br/e-mail-marketing/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Email Marketing', value: 1});" title="Acesse: E-mail marketing">E-mail marketing</a>
                    <a href="https://uolhost.uol.com.br/uol-anuncios/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'UOL Anúncios', value: 1});" title="Acesse: UOL Anúncios">UOL Anúncios</a>
                    <a href="https://uolhost.uol.com.br/google-ads/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Google Ads', value: 1});" title="Acesse: Google Ads">Google Ads</a>
                    <a href="https://uolhost.uol.com.br/facebook-ads" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Facebook e Instagram Ads', value: 1});" title="Acesse: Instagram e Facebook Ads">Instagram e Facebook Ads</a>
                  </nav>
                </li>
                <li>
                  <h5 class="title-submenu">Soluções Empresariais</h5>
                  <nav>
                    <a href="https://uolhost.uol.com.br/e-mail/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Email Profissional', value: 1});" title="Acesse: E-mail profissional">E-mail profissional</a>
                    <a href="https://uolhost.uol.com.br/uol-pro-suite/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'UOL Pro Suite', value: 1});" title="Acesse: UOL Pro Suite">UOL Pro Suite</a>
                                        <a href="https://uolhost.uol.com.br/google-workspace" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Google Workspace', value: 1});" title="Acesse: Google Workspace">Google Workspace</a>
                    <a href="https://uolhost.uol.com.br/microsoft-office-365" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Microsoft Office 365', value: 1});" title="Acesse: Microsoft Office 365">Microsoft Office 365</a>
                    <a href="https://meunegocio.uol.com.br/microsoft-office-365/exchange/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Microsoft Exchange', value: 1});" title="Acesse: Microsoft Exchange">Microsoft Exchange</a>
                                      </nav>
                </li>
                <li class="others-wrap">
                  <h5 class="title-submenu">Veja também:</h5>
                  <nav>
                    <a href="https://meunegocio.uol.com.br/blog" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Blog do UOL Meu Negócio', value: 1});" title="Acesse: Blog do UOL Meu Negócio">Blog do UOL Meu Negócio</a>
                    <a href="https://uolhost.uol.com.br/parceiros-uol-host" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Produtos Host', action: 'Clique', label: 'Seja Parceiro UOL Host', value: 1});" title="Acesse: Seja parceiro UOL HOST">Seja parceiro UOL HOST</a>
                  </nav>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <button class="mobile-submenu-link">Hospedagem</button>
            <div class="sub-menu-wrap">
              <div class="title-wrap">
                <button type="button" class="btn-back mobile-submenu-back"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-arrow-left.png?v=1.0.32" alt="Ícone seta para esquerda" width="10" height="18" loading="lazy"></button>
                <h5 class="title-product">Hospedagem</h5>
              </div>
              <ul class="links-list">
                <li>
                  <h5 class="title-submenu">Hospedagem de Sites</h5>
                  <p>Hospede seu site com a qualidade e estabilidade do UOL</p>
                  <p><a href="https://uolhost.uol.com.br/hospedagem-de-sites" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Hospedagem Host', action: 'Clique', label: 'Hospede agora', value: 1});" title="Veja mais em: Hospede agora">Hospede agora</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Revenda de hospedagem</h5>
                  <p>Seu próprio negócio de hospedagem com revenda ilimitada de sites</p>
                  <p><a href="https://uolhost.uol.com.br/revenda-de-hospedagem" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Hospedagem Host', action: 'Clique', label: 'Revenda de Hospedagem', value: 1});" title="Veja mais em: Saiba mais">Saiba mais</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Cloud Computing</h5>
                  <p>Transferência ilimitada com a qualidade da infraestrutura UOL</p>
                  <p><a href="https://uolhost.uol.com.br/uol-cloud-computing" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Hospedagem Host', action: 'Clique', label: 'Cloud Computing', value: 1});" title="Veja mais em: Contrate">Contrate</a></p>
                </li>
                <li>
                  <h5 class="title-submenu"><a href="https://uolhost.uol.com.br/banco-de-dados" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Hospedagem Host', action: 'Clique', label: 'Banco de Dados', value: 1});" title="Banco de dados">Banco de dados <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-feather-external-link.png?v=1.0.32" alt="Ícone de link" width="13" height="13" loading="lazy" class="link-icon"></a></h5>
                  <p>Robustez e tecnologia para armazenar suas informações</p>
                  <p><a href="https://uolhost.uol.com.br/banco-de-dados/mysql" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Hospedagem Host', action: 'Clique', label: 'Banco de Dados - MySQL', value: 1});" title="Veja mais em: MySQL">MySQL</a> <a href="https://uolhost.uol.com.br/banco-de-dados/mongodb" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Hospedagem Host', action: 'Clique', label: 'Banco de Dados - MongoDB', value: 1});" title="Veja mais em: MongoDB">MongoDB</a> <a href="https://uolhost.uol.com.br/banco-de-dados/postgresql" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Hospedagem Host', action: 'Clique', label: 'Banco de Dados - PostgreSQL', value: 1});" title="Veja mais em: PostgreSQL">PostgreSQL</a></p>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <button class="mobile-submenu-link">Domínios</button>
            <div class="sub-menu-wrap">
              <div class="title-wrap">
                <button type="button" class="btn-back mobile-submenu-back"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-arrow-left.png?v=1.0.32" alt="Ícone seta para esquerda" width="10" height="18" loading="lazy"></button>
                <h5 class="title-product">Domínios</h5>
              </div>
              <ul class="links-list">
                <li>
                  <h5 class="title-submenu">Registro de domínios</h5>
                  <p>Registre um domínio, será o endereço do seu site na internet.</p>
                                      <p><a href="https://uolhost.uol.com.br/registro-de-dominio" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Domínios Host', action: 'Clique', label: 'Registre de domínios', value: 1});" title="Veja mais em: Registre o seu domínio aqui">Registre o seu domínio aqui</a></p>
                                  </li>
                <li>
                  <h5 class="title-submenu">Transferencia de domínios</h5>
                  <p>Transfira seu domínio (.br) para o UOL, é simples, rápido e gratuito.</p>
                  <p><a href="https://uolhost.uol.com.br/transferencia-de-dominio.html" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Domínios Host', action: 'Clique', label: 'Transfêrencia de domínios', value: 1});" title="Veja mais em: Saiba mais">Saiba mais</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Certificado SSL</h5>
                  <p>Mostre aos clientes que seu site é de alta confiabilidade.</p>
                  <p><a href="https://uolhost.uol.com.br/certificado-ssl" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Domínios Host', action: 'Clique', label: 'Certificado SSL', value: 1});" title="Veja mais em: Conheça os planos">Conheça os planos</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Consulta Whois</h5>
                  <p>Pesquise informações sobre domínios já registrados.</p>
                  <p><a href="https://uolhost.uol.com.br/consulta-whois" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Domínios Host', action: 'Clique', label: 'Consulta Whois', value: 1});" title="Veja mais em: Pesquisar agora">Pesquisar agora</a></p>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <button class="mobile-submenu-link">Loja Virtual</button>
            <div class="sub-menu-wrap">
              <div class="title-wrap">
                <button type="button" class="btn-back mobile-submenu-back"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-arrow-left.png?v=1.0.32" alt="Ícone seta para esquerda" width="10" height="18" loading="lazy"></button>
                <h5 class="title-product">Loja Virtual</h5>
              </div>
              <ul class="links-list">
                <li>
                  <h5 class="title-submenu">Loja VirtUOL</h5>
                  <p>Venda seus produtos e serviços diretamente pela internet.</p>
                  <p><a href="https://uolhost.uol.com.br/loja-virtual" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Loja Virtual Host', action: 'Clique', label: 'Loja VirtUOL', value: 1});" title="Veja mais em: Crie sua loja virtual">Crie sua loja virtual</a></p>
                </li>
                <li>
                  <a href="https://uolhost.uol.com.br/loja-virtual#plans" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Loja Virtual Host', action: 'Clique', label: 'banner Loja virtual ', value: 1});" title="Conheça os planos da Loja Virtuol"><img src="//cdn.imguol.com.br/p/pp/common/menu/banners/banner-loja-virtuol.png?v=1.0.32" alt="Banner Conheça os planos da Loja Virtuol" width="268" height="145" loading="lazy"></a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <button class="mobile-submenu-link">Criador de Sites</button>
            <div class="sub-menu-wrap">
              <div class="title-wrap">
                <button type="button" class="btn-back mobile-submenu-back"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-arrow-left.png?v=1.0.32" alt="Ícone seta para esquerda" width="10" height="18" loading="lazy"></button>
                <h5 class="title-product">Criador de Sites</h5>
              </div>
              <ul class="links-list">
                <li>
                  <h5 class="title-submenu">Criador de Sites</h5>
                  <p>Tenha um site para apresentar sua marca e seus serviços.</p>
                  <p><a href="https://uolhost.uol.com.br/criador-de-sites/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Criador de Sites Host', action: 'Clique', label: 'Criador de Sites', value: 1});" title="Veja mais em: Crie seu site">Crie seu site</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Criador de Blog</h5>
                  <p>Divulgue seu conteúdo com uma ferramenta profissional.</p>
                  <p><a href="https://uolhost.uol.com.br/crie-seu-blog" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Criador de Sites Host', action: 'Clique', label: 'Criador de blog', value: 1});" title="Veja mais em: Crie seu blog pelo Wordpress">Crie seu blog pelo Wordpress</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Conecte</h5>
                  <p>Marque presença na internet gratuitamente</p>
                  <p><a href="https://meunegocio.uol.com.br/conecte" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Criador de Sites Host', action: 'Clique', label: 'Conecte', value: 1});" title="Veja mais em: Crie sua página">Crie sua página</a></p>
                </li>
                <li>
                  <a href="https://uolhost.uol.com.br/criador-de-sites#plans" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Criador de Sites Host', action: 'Clique', label: 'banner Criador de Sites', value: 1});" title="Conheça os planos de Criador de sites"><img src="//cdn.imguol.com.br/p/pp/common/menu/banners/banner-criador-de-sites.png?v=1.0.32" alt="Banner Conheça os planos de Criador de sites" width="268" height="145" loading="lazy"></a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <button class="mobile-submenu-link">Marketing Digital</button>
            <div class="sub-menu-wrap">
              <div class="title-wrap">
                <button type="button" class="btn-back mobile-submenu-back"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-arrow-left.png?v=1.0.32" alt="Ícone seta para esquerda" width="10" height="18" loading="lazy"></button>
                <h5 class="title-product">Marketing Digital</h5>
              </div>
              <ul class="links-list">
                <li>
                  <h5 class="title-submenu">E-mail marketing</h5>
                  <p>Envie novidades e ofertas por e-mail para a sua base de clientes.</p>
                  <p><a href="https://uolhost.uol.com.br/e-mail-marketing/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Marketing Digital Host', action: 'Clique', label: 'E-mail marketing', value: 1});" title="Veja mais em: Crie sua campanha de e-mail">Crie sua campanha de e-mail</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">UOL Anúncios</h5>
                  <p>Crie os seus anúncios e divulgue o seu negócio no UOL.</p>
                  <p><a href="https://uolhost.uol.com.br/uol-anuncios/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Marketing Digital Host', action: 'Clique', label: 'UOL Anúncios', value: 1});" title="Veja mais em: Anuncie no UOL">Anuncie no UOL</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Google Ads</h5>
                  <p>Uma equipe do UOL para divulgar seu negócio nas buscas do Google.</p>
                  <p><a href="https://uolhost.uol.com.br/google-ads/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Marketing Digital Host', action: 'Clique', label: 'Google ads', value: 1});" title="Veja mais em: Anuncie no Google">Anuncie no Google</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Instagram e Facebook Ads</h5>
                  <p>Conte com nossos especialistas para divulgar no Facebook e Instagram.</p>
                  <p><a href="https://uolhost.uol.com.br/facebook-ads" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Marketing Digital Host', action: 'Clique', label: 'Instagram e Facebook Ads', value: 1});" title="Veja mais em: Anuncie agora">Anuncie agora</a></p>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <button class="mobile-submenu-link">Soluções Empresariais</button>
            <div class="sub-menu-wrap">
              <div class="title-wrap">
                <button type="button" class="btn-back mobile-submenu-back"><img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-arrow-left.png?v=1.0.32" alt="Ícone seta para esquerda" width="10" height="18" loading="lazy"></button>
                <h5 class="title-product">Soluções Empresariais</h5>
              </div>
              <ul class="links-list">
                <li>
                  <h5 class="title-submenu">E-mail profissional</h5>
                  <p>Seu e-mail com @suaempresa e deixe sua marca mais profissional.</p>
                  <p><a href="https://uolhost.uol.com.br/e-mail/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais Host', action: 'Clique', label: 'E-mail profissional', value: 1});" title="Veja mais em: Crie o seu e-mail">Crie o seu e-mail</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">UOL Pro Suite</h5>
                  <p>A nova geração do e-mail profissional com ferramentas de gestão e produtividade.</p>
                  <p><a href="https://uolhost.uol.com.br/uol-pro-suite/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais Host', action: 'Clique', label: 'UOL Pro Suite', value: 1});" title="Veja mais em: Crie o seu e-mail">Comece a usar agora</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Google Workspace</h5>
                  <p>Mais interação e produtividade para você ou sua empresa.</p>
                  <p><a href="https://uolhost.uol.com.br/google-workspace" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais Host', action: 'Clique', label: 'Google Workspace', value: 1});" title="Veja mais em: Comece a usar agora">Comece a usar agora</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Microsoft Office 365</h5>
                  <p>Trabalhe de forma colaborativa no Word, Excel, PowerPoint e demais.</p>
                  <p><a href="https://uolhost.uol.com.br/microsoft-office-365" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais Host', action: 'Clique', label: 'Microsoft Office 365', value: 1});" title="Veja mais em: Comece a usar agora">Comece a usar agora</a></p>
                </li>
                <li>
                  <h5 class="title-submenu">Microsoft Exchange</h5>
                  <p>Serviço de e-mail executivo com a infra-estrutura da Microsoft.</p>
                  <p><a href="https://meunegocio.uol.com.br/microsoft-office-365/exchange/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais Host', action: 'Clique', label: 'Microsoft Exchange', value: 1});" title="Veja mais em: Saiba mais">Saiba mais</a></p>
                </li>
                <li>
                  <a href="https://uolhost.uol.com.br/google-workspace#plans" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Soluções Empresariais Host', action: 'Clique', label: 'banner soluções empresariais', value: 1});" title="Conheça os planos do Google Workspace"><img src="//cdn.imguol.com.br/p/pp/common/menu/banners/banner-google-workspace.png?v=1.0.32" alt="Banner Conheça os planos do Google Workspace" width="259" height="295" loading="lazy"></a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <a href="https://meupainelhost.uol.com.br" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Mobile Host', action: 'Clique', label: 'Já Sou Cliente', value: 1}); gtag('event', 'header mobile > já sou cliente > clique');" title="Já sou cliente" class="ctm-button">Já sou cliente</a>
          </li>
        </ul>
        <ul class="menu-bottom-list">
          <li><a href="https://email.uolhost.com.br/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Mobile Host', action: 'Clique', label: 'Email', value: 1});" title="Acesse o e-mail">E-mail</a></li>
          <li><a href="https://sac.uol.com.br/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Mobile Host', action: 'Clique', label: 'SAC', value: 1});" title="Acesse o SAC">SAC</a></li>
                      <li><a href="https://meunegocio.uol.com.br/?utm_term=barrauol-meunegocio&utm_campaign=linkfixo-barrauol-meunegocio&utm_medium=barrauol&utm_content=barrauol-meunegocio&utm_source=host-umn" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Barra UOL', action: 'Clique', label: 'UOL Meu Negócio', value: 1});" title="Acesse também o UOL meu negócio">UOL meu negócio</a></li>
            <li><a href="https://uolhost.uol.com.br/registro-de-dominio" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Barra UOL', action: 'Clique', label: 'Registro de Domínios', value: 1});" title="Acesse também o Registro de Domínios">Domínios</a></li>
                    <li><a href="https://uolhost.uol.com.br/loja-virtual" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Barra UOL', action: 'Clique', label: 'Loja Virtual', value: 1});" title="Acesse também o Loja Virtual">Loja Virtual</a></li>
          <li><a href="https://uolhost.uol.com.br/criador-de-sites" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Barra UOL', action: 'Clique', label: 'Criador de Sites', value: 1});" title="Acesse também o Criador de Sites">Criador de Sites</a></li>
        </ul>
      </div>
    </div>
    <div class="logo-wrap">
              <a href="https://uolhost.uol.com.br/" onclick="uolAnalytics('umnhost.event', {category: 'Menu Integrado Mobile Host', action: 'Clique', label: 'Logo Animada', value: 1});" title="UOL host" class="home-link"><img src="//cdn.imguol.com.br/p/pp/common/menu/logo-animado-branco.gif?v=1.0.32" alt="Logo UOL Animado" width="203" height="31" loading="lazy"></a>
          </div>
    <ul class="right-links">
      <li>
        <button class="top-menu-button">
                      <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-atendimento-host.png?v=1.0.32" alt="Ícone Central de vendas" width="28" height="28" loading="lazy" class="default-icon">
                    <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-atendimento-hover.png?v=1.0.32" alt="Ícone Central de vendas" width="28" height="28" loading="lazy" class="hover-icon">
        </button>
        <div class="sub-menu-wrap">
          <dl class="menu-accordion-list">
            <dt><span>Central de vendas</span></dt>
            <dd>
              <p>
                <a href="tel:40035973">4003-5973</a>
                <small>Capitais e Regiões Metropolitanas</small>
              </p>
              <p>
                <a href="tel:08007282173">0800 728 2173</a>
                <small>Demais localidades</small>
              </p>
              <p>
                <a href="https://wa.me/551140035973" target="_blank" rel="noopener" title="Converse pelo WhatsApp" class="whatsapp-btn">
                  <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-whats-v2.png?v=1.0.32" alt="Ícone WhatsApp" width="20" height="20" loading="lazy">
                    <span><strong>WhatsApp</strong> <br/>(11) 97405-3450<br/>(11) 4003-5973</span>
                </a>
              </p>
              <p>
                <a href="javascript:void(0);" onclick="window.open('//uolhost.uol.com.br/iniciar-chat-com.html?produto=20', 'Pagina', 'STATUS=NO, TOOLBAR=NO, LOCATION=NO, DIRECTORIES=NO, RESISABLE=NO, SCROLLBARS=YES, TOP=10, LEFT=10, WIDTH=800, HEIGHT=600');" title="Converse pelo Chat">
                                      <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-chat-host.png?v=1.0.32" alt="Ícone Chat" width="20" height="20" loading="lazy">
                                    <span>Chat</span>
                </a>
              </p>
            </dd>
            <dt><span>Suporte e Cobrança</span></dt>
            <dd>
              <p>
                <a href="tel:40039011">4003-9011</a>
                <small>Capitais e Regiões Metropolitanas</small>
              </p>
              <p>
                <a href="tel:08008819011">0800 881 9011</a>
                <small>Demais localidades</small>
              </p>
              <p>
                <a href="https://painel.uol.com.br/callCenter.html?status=opened" title="Converse pelo Chat">
                                      <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-chat-host.png?v=1.0.32" alt="Ícone Chat" width="20" height="20" loading="lazy">
                                    <span>Chat</span>
                </a>
              </p>
              <p>
                <a href="https://api.whatsapp.com/send?phone=551140039011" title="Atendimento via WhatsApp">
                  <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-whats.png?v=1.0.32" alt="Ícone WhatsApp" width="20" height="20" loading="lazy">
                  <span>WhatsApp</span>
                </a>
              </p>
              <p>
                                  <a href="https://faq.uolhost.uol.com.br" title="Acesse: Perguntas Frequentes">
                    <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-question-circle-host.png?v=1.0.32" alt="Ícone FAQ" width="17" height="17" loading="lazy">
                    <span>Perguntas Frequentes</span>
                  </a>
                              </p>
              <p>
                <a href="https://uolhost.uol.com.br/boleto" title="Acesse: 2ª via de boletos">
                                      <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-barcode-host.png?v=1.0.32" alt="Ícone WhatsApp" width="18" height="14" loading="lazy">
                                    <span>2ª via de boletos</span>
                </a>
              </p>
            </dd>
          </dl>
        </div>
      </li>
      <li>
        <button class="top-menu-button">
                      <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-user-host.png?v=1.0.32" alt="Ícone Cliente" width="28" height="28" loading="lazy" class="default-icon">
                    <img src="//cdn.imguol.com.br/p/pp/common/menu/icons/ico-user-hover.png?v=1.0.32" alt="Ícone Cliente" width="28" height="28" loading="lazy" class="hover-icon">
        </button>
        <div class="sub-menu-wrap">
          <p><a href="https://meupainelhost.uol.com.br" title="Acesse: Já sou cliente">Já sou cliente</a></p>
          <p><a href="https://meunegocio.uol.com.br/blog" title="Acesse: Blog UOL Meu Negócio">Blog UOL Meu Negócio</a></p>
        </div>
      </li>
    </ul>
  </div>
</div>
<!-- Modal RECLAME AQUI -->
<div class="modal fade" id="modalRA" tabindex="-1" role="dialog"  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
      </button>
      <div class="modal-body">
      </div>
    </div>
  </div>
</div>
  </header>
  <div class="pop-up-online" onclick="closePopUp()">
    <p>OFERTA IMPERDÍVEL! <span>X</span></p>
    <p class="text">Domínio <strong>.online</strong> por <strong>R$ 6,99</strong> no primeiro ano e no segundo ano R$
      49,99.</p>
    <a href="//uolhost.uol.com.br/novas-extensoes/registro-online.html">Registre agora</a>
  </div>
  <script>function closePopUp() { document.querySelector('.pop-up-online').style.display = "none"; }</script>
<link
  rel="stylesheet"
  href="https://cdn.jsuol.com.br/g/uol/new-top/css/style.css?v=1.0.0"
  type="text/css"
  media="screen,print"
/>
<div class="top" id="version2">
  <img
    src="https://imguol.com/p/pp/meunegocio/elem-flutuante-cinza.svg"
    alt="Elemento flutuante"
    width="531px"
    height="416px"
    class="top__floating left"
  />
  <img
    src="https://imguol.com/p/pp/meunegocio/elem-flutuante-cinza.svg"
    alt="Elemento flutuante"
    width="531px"
    height="416px"
    class="top__floating right"
  />
  <div class="container">
    <form
      action="https://meunegocio.uol.com.br/registro-de-dominio/busca"
      class="top__domain"
    >
      <div class="top__extensions-container">
        <div class="top__input-container">
          <input
            type="text"
            class="top__input"
            id="domain"
            placeholder="&nbsp;"
            name="domain"
          />
          <input type="hidden" name="extension" value=".com.br" />
          <input
            type="hidden"
            name="campaign"
            value="Xg98r6IQTM14RE2cbE84V3DtX11Y6RSVIsjgndl6"
          />
          <label for="domain" class="top__input--label">
            Digite aqui o nome do domínio desejado
          </label>
          <label for="domain" class="top__input--label">
            Digite o domínio desejado
          </label>
        </div>
        <div class="top__extensions">
          <span class="top__extensions--item">.com.br</span>
          <span class="top__extensions--item">.com</span
          ><span class="top__extensions--item">.org</span
          ><span class="top__extensions--item">.net</span
          ><span class="top__extensions--item">.online</span
          ><span class="top__extensions--item">.store</span>
        </div>
      </div>
      <button class="top__domain-button">
        <span class="top__domain-button--text">Pesquisar domínio</span>
        <img
          src="https://imguol.com.br/p/pp/meunegocio/lupa_icon.png?v=1.0.0"
          alt="Pesquisar"
          width="45px"
          height="45px"
          class="top__domain-button--icon"
        />
      </button>
    </form>
    <ul class="top__card-container">
      <a
        class="top__card criador"
        href="https://uolhost.uol.com.br/criador-de-sites"
      >
        <div class="top__card--icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.697"
            height="22.673"
            viewBox="0 0 22.697 22.673"
          >
            <g
              id="Icos-Host-80px_ico_Criador_de_sites"
              transform="translate(0.707 0.707)"
            >
              <path
                id="Caminho_1983"
                data-name="Caminho 1983"
                d="M11.53,18.362l4.714,4.71a4.309,4.309,0,0,0,5.778.357,4.217,4.217,0,0,0,.277-6.215L17.484,12.4"
                transform="translate(-11.53 -12.4)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              />
              <path
                id="Caminho_1984"
                data-name="Caminho 1984"
                d="M30.034,34.843A7.013,7.013,0,0,0,32.842,42.5c2.439,1.757,4.895,1.525,7.066,1.6,1,.036,3.559.193,3.559.193s-.156-2.564-.193-3.559c-.084-2.171.148-4.63-1.6-7.07a7.009,7.009,0,0,0-7.651-2.788"
                transform="translate(-22.543 -23.397)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              />
              <path
                id="Caminho_1985"
                data-name="Caminho 1985"
                d="M46.384,36.12a4.655,4.655,0,0,0-.875.7c-1.749,1.749-.686,3.655-1.946,4.919s-2.973,0-4.458,1.489a3.743,3.743,0,0,0-.983,3.045"
                transform="translate(-27.52 -26.688)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              />
              <line
                id="Linha_27"
                data-name="Linha 27"
                y1="3.627"
                x2="3.483"
                transform="translate(4.312 6.636)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>
        <h2 class="top__card--title">
          CRIADOR<br />
          DE SITES
        </h2>
        <p class="top__card--desc">
          O sonho de criar seu site profissional em alguns cliques
        </p>
        <div class="top__card--content">
          <p class="top__card--disclaimer">PLANOS A PARTIR DE</p>
          <p class="top__card--price">
            R$ <strong class="top__card--price-big">9,90</strong>/mês
          </p>
        </div>
        <button class="top__card--button">Conheça os planos</button>
      </a>
      <a
        class="top__card cloud"
        href="https://uolhost.uol.com.br/uol-cloud-computing"
      >
        <div class="top__card--icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            widton:t.on,off:t.off,pin:t.pin,enabled:t.enabled,cancel:function(t){t.end&&t.end()},enter:function(n,r,i,o){return r=r&&Sn(r),i=i&&Sn(i),e(n,r=r||i.parent(),i),t.push(n,"enter",Vt(o))},move:function(n,r,i,o){return r=r&&Sn(r),i=i&&Sn(i),e(n,r=r||i.parent(),i),t.push(n,"move",Vt(o))},leave:function(e,n){return t.push(e,"leave",Vt(n),function(){e.remove()})},addClass:function(e,n,r){return(r=Vt(r)).addClass=Tt(r.addclass,n),t.push(e,"addClass",r)},removeClass:function(e,n,r){return(r=Vt(r)).removeClass=Tt(r.removeClass,n),t.push(e,"removeClass",r)},setClass:function(e,n,r,i){return(i=Vt(i)).addClass=Tt(i.addClass,n),i.removeClass=Tt(i.removeClass,r),t.push(e,"setClass",i)},animate:function(e,n,r,i,o){return(o=Vt(o)).from=o.from?l(o.from,n):n,o.to=o.to?l(o.to,r):r,o.tempClasses=Tt(o.tempClasses,i||"ng-inline-animate"),t.push(e,"animate",o)}}}]}],xr=function(){this.$get=["$$rAF","$q",function(t,e){var n=function(){};return n.prototype={done:function(t){this.defer&&this.defer[!0===t?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){return this.defer||(this.defer=e.defer()),this.defer.promise},then:function(t,e){return this.getPromise().then(t,e)},catch:function(t){return this.getPromise().catch(t)},finally:function(t){return this.getPromise().finally(t)}},function(e,r){function i(){return t(function(){r.addClass&&(e.addClass(r.addClass),r.addClass=null),r.removeClass&&(e.removeClass(r.removeClass),r.removeClass=null),r.to&&(e.css(r.to),r.to=null),o||a.done(),o=!0}),a}r.from&&(e.css(r.from),r.from=null);var o,a=new n;return{start:i,end:i}}}]},Sr=r("$compile");It.$inject=["$provide","$$sanitizeUriProvider"];var Cr=/^((?:x|data)[\:\-_])/i,Er=r("$controller"),kr=/^(\S+)(\s+as\s+(\w+))?$/,Ar=function(){this.$get=["$document",function(t){return function(e){return e?!e.nodeType&&e instanceof Sn&&(e=e[0]):e=t[0].body,e.offsetWidth+1}}]},Or="application/json",Mr={"Content-Type":Or+";charset=utf-8"},Tr=/^\[|^\{(?!\{)/,Vr={"[":/]$/,"{":/}$/},Nr=/^\)\]\}',?\n/,jr=r("$http"),Pr=function(t){return function(){throw jr("legacy",t)}},Dr=In.$interpolateMinErr=r("$interpolate");Dr.throwNoconcat=function(t){throw Dr("noconcat",t)},Dr.interr=function(t,e){return Dr("interr",t,e.toString())};var Ir=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Rr={http:80,https:443,ftp:21},qr=r("$location"),Ur={$$html5:!1,$$replace:!1,absUrl:le("$$absUrl"),url:function(t){if(g(t))return this.$$url;var e=Ir.exec(t);return(e[1]||""===t)&&this.path(decodeURIComponent(e[1])),(e[2]||e[1]||""===t)&&this.search(e[3]||""),this.hash(e[5]||""),this},protocol:le("$$protocol"),host:le("$$host"),port:le("$$port"),path:fe("$$path",function(t){return"/"==(t=null!==t?t.toString():"").charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search;case 1:if(x(t)||S(t))t=t.toString(),this.$$search=z(t);else{if(!b(t))throw qr("isrcharg");o(t=j(t,{}),function(e,n){null==e&&delete t[n]}),this.$$search=t}break;default:g(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:fe("$$hash",function(t){return null!==t?t.toString():""}),replace:function(){return this.$$replace=!0,this}};o([ce,ue,se],function(t){t.prototype=Object.create(Ur),t.prototype.state=function(e){if(!arguments.length)return this.$$state;if(t!==se||!this.$$html5)throw qr("nostate");return this.$$state=g(e)?null:e,this}});var Fr=r("$parse"),Br=Function.prototype.call,_r=Function.prototype.apply,Lr=Function.prototype.bind,Hr=ot();o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(t){Hr[t]=!0});var zr={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Wr=function(t){this.options=t};Wr.prototype={constructor:Wr,lex:function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;)if('"'===(t=this.text.charAt(this.index))||"'"===t)this.readString(t);else if(this.isNumber(t)||"."===t&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(t))this.readIdent();else if(this.is(t,"(){}[].,;:?"))this.tokens.push({index:this.index,text:t}),this.index++;else if(this.isWhitespace(t))this.index++;else{var e=t+this.peek(),n=e+this.peek(2),r=Hr[e],i=Hr[n];Hr[t]||r||i?(t=i?n:r?e:t,this.tokens.push({index:this.index,text:t,operator:!0}),this.index+=t.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(t,e){return-1!==e.indexOf(t)},peek:function(t){return t=t||1,this.index+t<this.text.length&&this.text.charAt(this.index+t)},isNumber:function(t){return"0"<=t&&"9">=t&&"string"==typeof t},isWhitespace:function(t){return" "===t||"\r"===t||"\t"===t||"\n"===t||"\v"===t||" "===t},isIdent:function(t){return"a"<=t&&"z">=t||"A"<=t&&"Z">=t||"_"===t||"$"===t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){throw n=n||this.index,e=y(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n,Fr("lexerr",t,e,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=An(this.text.charAt(this.index));if("."==n||this.isNumber(n))t+=n;else{var r=this.peek();if("e"==n&&this.isExpOperator(r))t+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==t.charAt(t.length-1))t+=n;else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=t.charAt(t.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:e,text:t,constant:!0,value:Number(t)})},readIdent:function(){for(var t=this.index;this.index<this.text.length;){var e=this.text.charAt(this.index);if(!this.isIdent(e)&&!this.isNumber(e))break;this.index++}this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(t){var e=this.index;this.index++;for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index);r=r+o;if(i)"u"===o?((i=this.text.substring(this.index+1,this.index+5)).match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+i+"]"),this.index+=4,n+=String.fromCharCode(parseInt(i,16))):n+=zr[o]||o,i=!1;else if("\\"===o)i=!0;else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,constant:!0,value:n});n+=o}this.index++}this.throwError("Unterminated quote",e)}};var Gr=function(t,e){this.lexer=t,this.options=e};Gr.Program="Program",Gr.ExpressionStatement="ExpressionStatement",Gr.AssignmentExpression="AssignmentExpression",Gr.ConditionalExpression="ConditionalExpression",Gr.LogicalExpression="LogicalExpression",Gr.BinaryExpression="BinaryExpression",Gr.UnaryExpression="UnaryExpression",Gr.CallExpression="CallExpression",Gr.MemberExpression="MemberExpression",Gr.Identifier="Identifier",Gr.Literal="Literal",Gr.ArrayExpression="ArrayExpression",Gr.Property="Property",Gr.ObjectExpression="ObjectExpression",Gr.ThisExpression="ThisExpression",Gr.NGValueParameter="NGValueParameter",Gr.prototype={ast:function(t){return this.text=t,this.tokens=this.lexer.lex(t),t=this.program(),0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),t},program:function(){for(var t=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&t.push(this.expressionStatement()),!this.expect(";"))return{type:Gr.Program,body:t}},expressionStatement:function(){return{type:Gr.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var t=this.expression();this.expect("|");)t=this.filter(t);return t},expression:function(){return this.assignment()},assignment:function(){var t=this.ternary();return this.expect("=")&&(t={type:Gr.AssignmentExpression,left:t,right:this.assignment(),operator:"="}),t},ternary:function(){var t,e,n=this.logicalOR();return this.expect("?")&&(t=this.expression(),this.consume(":"))?(e=this.expression(),{type:Gr.ConditionalExpression,test:n,alternate:t,consequent:e}):n},logicalOR:function(){for(var t=this.logicalAND();this.expect("||");)t={type:Gr.LogicalExpression,operator:"||",left:t,right:this.logicalAND()};return t},logicalAND:function(){for(var t=this.equality();this.expect("&&");)t={type:Gr.LogicalExpression,operator:"&&",left:t,right:this.equality()};return t},equality:function(){for(var t,e=this.relational();t=this.expect("==","!=","===","!==");)e={type:Gr.BinaryExpression,operator:t.text,left:e,right:this.relational()};return e},relational:function(){for(var t,e=this.additive();t=this.expect("<",">","<=",">=");)e={type:Gr.BinaryExpression,operator:t.text,left:e,right:this.additive()};return e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e={type:Gr.BinaryExpression,operator:t.text,left:e,right:this.multiplicative()};return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e={type:Gr.BinaryExpression,operator:t.text,left:e,right:this.unary()};return e},unary:function(){var t;return(t=this.expect("+","-","!"))?{type:Gr.UnaryExpression,operator:t.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var t,e;for(this.expect("(")?(t=this.filterChain(),this.consume(")")):this.expect("[")?t=this.arrayDeclaration():this.expect("{")?t=this.object():this.constants.hasOwnProperty(this.peek().text)?t=j(this.constants[this.consume().text]):this.peek().identifier?t=this.identifier():this.peek().constant?t=this.constant():this.throwError("not a primary expression",this.peek());e=this.expect("(","[",".");)"("===e.text?(t={type:Gr.CallExpression,callee:t,arguments:this.parseArguments()},this.consume(")")):"["===e.text?(t={type:Gr.MemberExpression,object:t,property:this.expression(),computed:!0},this.consume("]")):"."===e.text?t={type:Gr.MemberExpression,object:t,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return t},filter:function(t){t=[t];for(var e={type:Gr.CallExpression,callee:this.identifier(),arguments:t,filter:!0};this.expect(":");)t.push(this.expression());return e},parseArguments:function(){var t=[];if(")"!==this.peekToken().text)do{t.push(this.expression())}while(this.expect(","));return t},identifier:function(){var t=this.consume();return t.identifier||this.throwError("is not a valid identifier",t),{type:Gr.Identifier,name:t.text}},constant:function(){return{type:Gr.Literal,value:this.consume().value}},arrayDeclaration:function(){var t=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;t.push(this.expression())}while(this.expect(","));return this.consume("]"),{type:Gr.ArrayExpression,elements:t}},object:function(){var t,e=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))break;t={type:Gr.Property,kind:"init"},this.peek().constant?t.key=this.constant():this.peek().identifier?t.key=this.identifier():this.throwError("invalid key",this.peek()),this.consume(":"),t.value=this.expression(),e.push(t)}while(this.expect(","));return this.consume("}"),{type:Gr.ObjectExpression,properties:e}},throwError:function(t,e){throw Fr("syntax",e.text,t,e.index+1,this.text,this.text.substring(e.index))},consume:function(t){if(0===this.tokens.length)throw Fr("ueoe",this.text);var e=this.expect(t);return e||this.throwError("is unexpected, expecting ["+t+"]",this.peek()),e},peekToken:function(){if(0===this.tokens.length)throw Fr("ueoe",this.text);return this.tokens[0]},peek:function(t,e,n,r){return this.peekAhead(0,t,e,n,r)},peekAhead:function(t,e,n,r,i){if(this.tokens.length>t){var o=(t=this.tokens[t]).text;if(o===e||o===n||o===r||o===i||!(e||n||r||i))return t}return!1},expect:function(t,e,n,r){return!!(t=this.peek(t,e,n,r))&&(this.tokens.shift(),t)},constants:{true:{type:Gr.Literal,value:!0},false:{type:Gr.Literal,value:!1},null:{type:Gr.Literal,value:null},undefined:{type:Gr.Literal,value:n},this:{type:Gr.ThisExpression}}},Ce.prototype={compile:function(t,e){var r=this,i=this.astBuilder.ast(t);this.state={nextId:0,filters:{},expensiveChecks:e,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},ye(i,r.$filter);var a,s="";return this.stage="assign",(a=xe(i))&&(this.state.computing="assign",s=this.nextId(),this.recurse(a,s),s="fn.assign="+this.generateFunction("assign","s,v,l")),a=be(i.body),r.stage="inputs",o(a,function(t,e){var n="fn"+e;r.state[n]={vars:[],body:[],own:{}},r.state.computing=n;var i=r.nextId();r.recurse(t,i),r.return_(i),r.state.inputs.push(n),t.watchId=e}),this.state.computing="fn",this.stage="main",this.recurse(i),s='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+s+this.watchFns()+"return fn;",s=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",s)(this.$filter,$e,de,me,ve,ge,t),this.state=this.stage=n,s.literal=Se(i),s.constant=i.constant,s},USE:"use",STRICT:"strict",watchFns:function(){var t=[],e=this.state.inputs,n=this;return o(e,function(e){t.push("var "+e+"="+n.generateFunction(e,"s"))}),e.length&&t.push("fn.inputs=["+e.join(",")+"];"),t.join("")},generateFunction:function(t,e){return"function("+e+"){"+this.varsPrefix(t)+this.body(t)+"};"},filterPrefix:function(){var t=[],e=this;return o(this.state.filters,function(n,r){t.push(n+"=$filter("+e.escape(r)+")")}),t.length?"var "+t.join(",")+";":""},varsPrefix:function(t){return this.state[t].vars.length?"var "+this.state[t].vars.join(",")+";":""},body:function(t){return this.state[t].body.join("")},recurse:function(t,e,r,i,a,s){var u,c,l,f,h=this;if(i=i||$,!s&&y(t.watchId))e=e||this.nextId(),this.if_("i",this.lazyAssign(e,this.computedMember("i",t.watchId)),this.lazyRecurse(t,e,r,i,a,!0));else switch(t.type){case Gr.Program:o(t.body,function(e,r){h.recurse(e.expression,n,n,function(t){c=t}),r!==t.body.length-1?h.current().body.push(c,";"):h.return_(c)});break;case Gr.Literal:f=this.escape(t.value),this.assign(e,f),i(f);break;case Gr.UnaryExpression:this.recurse(t.argument,n,n,function(t){c=t}),f=t.operator+"("+this.ifDefined(c,0)+")",this.assign(e,f),i(f);break;case Gr.BinaryExpression:this.recurse(t.left,n,n,function(t){u=t}),this.recurse(t.right,n,n,function(t){c=t}),f="+"===t.operator?this.plus(u,c):"-"===t.operator?this.ifDefined(u,0)+t.operator+this.ifDefined(c,0):"("+u+")"+t.operator+"("+c+")",this.assign(e,f),i(f);break;case Gr.LogicalExpression:e=e||this.nextId(),h.recurse(t.left,e),h.if_("&&"===t.operator?e:h.not(e),h.lazyRecurse(t.right,e)),i(e);break;case Gr.ConditionalExpression:e=e||this.nextId(),h.recurse(t.test,e),h.if_(e,h.lazyRecurse(t.alternate,e),h.lazyRecurse(t.consequent,e)),i(e);break;case Gr.Identifier:e=e||this.nextId(),r&&(r.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",t.name)+"?l:s"),r.computed=!1,r.name=t.name),$e(t.name),h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",t.name)),function(){h.if_("inputs"===h.stage||"s",function(){a&&1!==a&&h.if_(h.not(h.nonComputedMember("s",t.name)),h.lazyAssign(h.nonComputedMember("s",t.name),"{}")),h.assign(e,h.nonComputedMember("s",t.name))})},e&&h.lazyAssign(e,h.nonComputedMember("l",t.name))),(h.state.expensiveChecks||ke(t.name))&&h.addEnsureSafeObject(e),i(e);break;case Gr.MemberExpression:u=r&&(r.context=this.nextId())||this.nextId(),e=e||this.nextId(),h.recurse(t.object,u,n,function(){h.if_(h.notNull(u),function(){t.computed?(c=h.nextId(),h.recurse(t.property,c),h.addEnsureSafeMemberName(c),a&&1!==a&&h.if_(h.not(h.computedMember(u,c)),h.lazyAssign(h.computedMember(u,c),"{}")),f=h.ensureSafeObject(h.computedMember(u,c)),h.assign(e,f),r&&(r.computed=!0,r.name=c)):($e(t.property.name),a&&1!==a&&h.if_(h.not(h.nonComputedMember(u,t.property.name)),h.lazyAssign(h.nonComputedMember(u,t.property.name),"{}")),f=h.nonComputedMember(u,t.property.name),(h.state.expensiveChecks||ke(t.property.name))&&(f=h.ensureSafeObject(f)),h.assign(e,f),r&&(r.computed=!1,r.name=t.property.name))},function(){h.assign(e,"undefined")}),i(e)},!!a);break;case Gr.CallExpression:e=e||this.nextId(),t.filter?(c=h.filter(t.callee.name),l=[],o(t.arguments,function(t){var e=h.nextId();h.recurse(t,e),l.push(e)}),f=c+"("+l.join(",")+")",h.assign(e,f),i(e)):(c=h.nextId(),u={},l=[],h.recurse(t.callee,c,u,function(){h.if_(h.notNull(c),function(){h.addEnsureSafeFunction(c),o(t.arguments,function(t){h.recurse(t,h.nextId(),n,function(t){l.push(h.ensureSafeObject(t))})}),u.name?(h.state.expensiveChecks||h.addEnsureSafeObject(u.context),f=h.member(u.context,u.name,u.computed)+"("+l.join(",")+")"):f=c+"("+l.join(",")+")",f=h.ensureSafeObject(f),h.assign(e,f)},function(){h.assign(e,"undefined")}),i(e)}));break;case Gr.AssignmentExpression:if(c=this.nextId(),u={},!we(t.left))throw Fr("lval");this.recurse(t.left,n,u,function(){h.if_(h.notNull(u.context),function(){h.recurse(t.right,c),h.addEnsureSafeObject(h.member(u.context,u.name,u.computed)),f=h.member(u.context,u.name,u.computed)+t.operator+c,h.assign(e,f),i(e||f)})},1);break;case Gr.ArrayExpression:l=[],o(t.elements,function(t){h.recurse(t,h.nextId(),n,function(t){l.push(t)})}),f="["+l.join(",")+"]",this.assign(e,f),i(f);break;case Gr.ObjectExpression:l=[],o(t.properties,function(t){h.recurse(t.value,h.nextId(),n,function(e){l.push(h.escape(t.key.type===Gr.Identifier?t.key.name:""+t.key.value)+":"+e)})}),f="{"+l.join(",")+"}",this.assign(e,f),i(f);break;case Gr.ThisExpression:this.assign(e,"s"),i("s");break;case Gr.NGValueParameter:this.assign(e,"v"),i("v")}},getHasOwnProperty:function(t,e){var n=t+"."+e,r=this.current().own;return r.hasOwnProperty(n)||(r[n]=this.nextId(!1,t+"&&("+this.escape(e)+" in "+t+")")),r[n]},assign:function(t,e){if(t)return this.current().body.push(t,"=",e,";"),t},filter:function(t){return this.state.filters.hasOwnProperty(t)||(this.state.filters[t]=this.nextId(!0)),this.state.filters[t]},ifDefined:function(t,e){return"ifDefined("+t+","+this.escape(e)+")"},plus:function(t,e){return"plus("+t+","+e+")"},return_:function(t){this.current().body.push("return ",t,";")},if_:function(t,e,n){if(!0===t)e();else{var r=this.current().body;r.push("if(",t,"){"),e(),r.push("}"),n&&(r.push("else{"),n(),r.push("}"))}},not:function(t){return"!("+t+")"},notNull:function(t){return t+"!=null"},nonComputedMember:function(t,e){return t+"."+e},computedMember:function(t,e){return t+"["+e+"]"},member:function(t,e,n){return n?this.computedMember(t,e):this.nonComputedMember(t,e)},addEnsureSafeObject:function(t){this.current().body.push(this.ensureSafeObject(t),";")},addEnsureSafeMemberName:function(t){this.current().body.push(this.ensureSafeMemberName(t),";")},addEnsureSafeFunction:function(t){this.current().body.push(this.ensureSafeFunction(t),";")},ensureSafeObject:function(t){return"ensureSafeObject("+t+",text)"},ensureSafeMemberName:function(t){return"ensureSafeMemberName("+t+",text)"},ensureSafeFunction:function(t){return"ensureSafeFunction("+t+",text)"},lazyRecurse:function(t,e,n,r,i,o){var a=this;return function(){a.recurse(t,e,n,r,i,o)}},lazyAssign:function(t,e){var n=this;return function(){n.assign(t,e)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)},escape:function(t){if(x(t))return"'"+t.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(S(t))return t.toString();if(!0===t)return"true";if(!1===t)return"false";if(null===t)return"null";if(void 0===t)return"undefined";throw Fr("esc")},nextId:function(t,e){var n="v"+this.state.nextId++;return t||this.current().vars.push(n+(e?"="+e:"")),n},current:function(){return this.state[this.state.computing]}},Ee.prototype={compile:function(t,e){var n,r,i,a=this,s=this.astBuilder.ast(t);this.expression=t,this.expensiveChecks=e,ye(s,a.$filter),(n=xe(s))&&(r=this.recurse(n)),(n=be(s.body))&&(i=[],o(n,function(t,e){var n=a.recurse(t);t.input=n,i.push(n),t.watchId=e}));var u=[];return o(s.body,function(t){u.push(a.recurse(t.expression))}),n=0===s.body.length?function(){}:1===s.body.length?u[0]:function(t,e){var n;return o(u,function(r){n=r(t,e)}),n},r&&(n.assign=function(t,e,n){return r(t,n,e)}),i&&(n.inputs=i),n.literal=Se(s),n.constant=s.constant,n},recurse:function(t,e,r){var i,a,s,u=this;if(t.input)return this.inputs(t.input,t.watchId);switch(t.type){case Gr.Literal:return this.value(t.value,e);case Gr.UnaryExpression:return a=this.recurse(t.argument),this["unary"+t.operator](a,e);case Gr.BinaryExpression:case Gr.LogicalExpression:return i=this.recurse(t.left),a=this.recurse(t.right),this["binary"+t.operator](i,a,e);case Gr.ConditionalExpression:return this["ternary?:"](this.recurse(t.test),this.recurse(t.alternate),this.recurse(t.consequent),e);case Gr.Identifier:return $e(t.name,u.expression),u.identifier(t.name,u.expensiveChecks||ke(t.name),e,r,u.expression);case Gr.MemberExpression:return i=this.recurse(t.object,!1,!!r),t.computed||($e(t.property.name,u.expression),a=t.property.name),t.computed&&(a=this.recurse(t.property)),t.computed?this.computedMember(i,a,e,r,u.expression):this.nonComputedMember(i,a,u.expensiveChecks,e,r,u.expression);case Gr.CallExpression:return s=[],o(t.arguments,function(t){s.push(u.recurse(t))}),t.filter&&(a=this.$filter(t.callee.name)),t.filter||(a=this.recurse(t.callee,!0)),t.filter?function(t,r,i,o){for(var u=[],c=0;c<s.length;++c)u.push(s[c](t,r,i,o));return t=a.apply(n,u,o),e?{context:n,name:n,value:t}:t}:function(t,n,r,i){var o,c=a(t,n,r,i);if(null!=c.value){de(c.context,u.expression),me(c.value,u.expression),o=[];for(var l=0;l<s.length;++l)o.push(de(s[l](t,n,r,i),u.expression));o=de(c.value.apply(c.context,o),u.expression)}return e?{value:o}:o};case Gr.AssignmentExpression:return i=this.recurse(t.left,!0,1),a=this.recurse(t.right),function(t,n,r,o){var s=i(t,n,r,o);return t=a(t,n,r,o),de(s.value,u.expression),s.context[s.name]=t,e?{value:t}:t};case Gr.ArrayExpression:return s=[],o(t.elements,function(t){s.push(u.recurse(t))}),function(t,n,r,i){for(var o=[],a=0;a<s.length;++a)o.push(s[a](t,n,r,i));return e?{value:o}:o};case Gr.ObjectExpression:return s=[],o(t.properties,function(t){s.push({key:t.key.type===Gr.Identifier?t.key.name:""+t.key.value,value:u.recurse(t.value)})}),function(t,n,r,i){for(var o={},a=0;a<s.length;++a)o[s[a].key]=s[a].value(t,n,r,i);return e?{value:o}:o};case Gr.ThisExpression:return function(t){return e?{value:t}:t};case Gr.NGValueParameter:return function(t,n,r,i){return e?{value:r}:r}}},"unary+":function(t,e){return function(n,r,i,o){return n=y(n=t(n,r,i,o))?+n:0,e?{value:n}:n}},"unary-":function(t,e){return function(n,r,i,o){return n=y(n=t(n,r,i,o))?-n:0,e?{value:n}:n}},"unary!":function(t,e){return function(n,r,i,o){return n=!t(n,r,i,o),e?{value:n}:n}},"binary+":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a);return s=ge(s,r=e(r,i,o,a)),n?{value:s}:s}},"binary-":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a);return r=e(r,i,o,a),s=(y(s)?s:0)-(y(r)?r:0),n?{value:s}:s}},"binary*":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)*e(r,i,o,a),n?{value:r}:r}},"binary/":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)/e(r,i,o,a),n?{value:r}:r}},"binary%":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)%e(r,i,o,a),n?{value:r}:r}},"binary===":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)===e(r,i,o,a),n?{value:r}:r}},"binary!==":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)!==e(r,i,o,a),n?{value:r}:r}},"binary==":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)==e(r,i,o,a),n?{value:r}:r}},"binary!=":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)!=e(r,i,o,a),n?{value:r}:r}},"binary<":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)<e(r,i,o,a),n?{value:r}:r}},"binary>":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)>e(r,i,o,a),n?{value:r}:r}},"binary<=":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)<=e(r,i,o,a),n?{value:r}:r}},"binary>=":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)>=e(r,i,o,a),n?{value:r}:r}},"binary&&":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)&&e(r,i,o,a),n?{value:r}:r}},"binary||":function(t,e,n){return function(r,i,o,a){return r=t(r,i,o,a)||e(r,i,o,a),n?{value:r}:r}},"ternary?:":function(t,e,n,r){return function(i,o,a,s){return i=t(i,o,a,s)?e(i,o,a,s):n(i,o,a,s),r?{value:i}:i}},value:function(t,e){return function(){return e?{context:n,name:n,value:t}:t}},identifier:function(t,e,r,i,o){return function(a,s,u,c){return a=s&&t in s?s:a,i&&1!==i&&a&&!a[t]&&(a[t]={}),s=a?a[t]:n,e&&de(s,o),r?{context:a,name:t,value:s}:s}},computedMember:function(t,e,n,r,i){return function(o,a,s,u){var c,l,f=t(o,a,s,u);return null!=f&&($e(c=e(o,a,s,u),i),r&&1!==r&&f&&!f[c]&&(f[c]={}),de(l=f[c],i)),n?{context:f,name:c,value:l}:l}},nonComputedMember:function(t,e,r,i,o,a){return function(s,u,c,l){return s=t(s,u,c,l),o&&1!==o&&s&&!s[e]&&(s[e]={}),u=null!=s?s[e]:n,(r||ke(e))&&de(u,a),i?{context:s,name:e,value:u}:u}},inputs:function(t,e){return function(n,r,i,o){return o?o[e]:t(n,r,i)}}};var Jr=function(t,e,n){this.lexer=t,this.$filter=e,this.options=n,this.ast=new Gr(this.lexer),this.astCompiler=n.csp?new Ee(this.ast,e):new Ce(this.ast,e)};Jr.prototype={constructor:Jr,parse:function(t){return this.astCompiler.compile(t,this.options.expensiveChecks)}},ot(),ot();var Yr=Object.prototype.valueOf,Kr=r("$sce"),Zr={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Xr=(Sr=r("$compile"),e.createElement("a")),Qr=_e(t.location.href);ze.$inject=["$document"],Ge.$inject=["$provide"],Ze.$inject=["$locale"],Xe.$inject=["$locale"];var ti=".",ei={yyyy:en("FullYear",4),yy:en("FullYear",2,0,!0),y:en("FullYear",1),MMMM:nn("Month"),MMM:nn("Month",!0),MM:en("Month",2,1),M:en("Month",1,1),dd:en("Date",2),d:en("Date",1),HH:en("Hours",2),H:en("Hours",1),hh:en("Hours",2,-12),h:en("Hours",1,-12),mm:en("Minutes",2),m:en("Minutes",1),ss:en("Seconds",2),s:en("Seconds",1),sss:en("Milliseconds",3),EEEE:nn("Day"),EEE:nn("Day",!0),a:function(t,e){return 12>t.getHours()?e.AMPMS[0]:e.AMPMS[1]},Z:function(t,e,n){return(0<=(t=-1*n)?"+":"")+(tn(Math[0<t?"floor":"ceil"](t/60),2)+tn(Math.abs(t%60),2))},ww:on(2),w:on(1),G:an,GG:an,GGG:an,GGGG:function(t,e){return 0>=t.getFullYear()?e.ERANAMES[0]:e.ERANAMES[1]}},ni=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,ri=/^\-?\d+$/;sn.$inject=["$locale"];var ii=m(An),oi=m(Mn);ln.$inject=["$parse"];var ai=m({restrict:"E",compile:function(t,e){if(!e.href&&!e.xlinkHref)return function(t,e){if("a"===e[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===jn.call(e.prop("href"))?"xlink:href":"href";e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}}),si={};o(cr,function(t,e){function n(t,n,i){t.$watch(i[r],function(t){i.$set(e,!!t)})}if("multiple"!=t){var r=Rt("ng-"+e),i=n;"checked"===t&&(i=function(t,e,i){i.ngModel!==i[r]&&n(t,0,i)}),si[r]=function(){return{restrict:"A",priority:100,link:i}}}}),o(fr,function(t,e){si[e]=function(){return{priority:100,link:function(t,n,r){"ngPattern"===e&&"/"==r.ngPattern.charAt(0)&&(n=r.ngPattern.match(kn))?r.$set("ngPattern",new RegExp(n[1],n[2])):t.$watch(r[e],function(t){r.$set(e,t)})}}}}),o(["src","srcset","href"],function(t){var e=Rt("ng-"+t);si[e]=function(){return{priority:99,link:function(n,r,i){var o=t,a=t;"href"===t&&"[object SVGAnimatedString]"===jn.call(r.prop("href"))&&(a="xlinkHref",i.$attr[a]="xlink:href",o=null),i.$observe(e,function(e){e?(i.$set(a,e),xn&&o&&r.prop(o,i[a])):"href"===t&&i.$set(a,null)})}}}});var ui={$addControl:$,$$renameControl:function(t,e){t.$name=e},$removeControl:$,$setValidity:$,$setDirty:$,$setPristine:$,$setSubmitted:$};hn.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var ci=function(t){return["$timeout","$parse",function(e,r){function i(t){return""===t?r('this[""]').assign:r(t).assign||$}return{name:"form",restrict:t?"EAC":"E",controller:hn,compile:function(r,o){r.addClass(Li).addClass(Bi);var a=o.name?"name":!(!t||!o.ngForm)&&"ngForm";return{pre:function(t,r,o,s){if(!("action"in o)){var u=function(e){t.$apply(function(){s.$commitViewValue(),s.$setSubmitted()}),e.preventDefault()};r[0].addEventListener("submit",u,!1),r.on("$destroy",function(){e(function(){r[0].removeEventListener("submit",u,!1)},0,!1)})}var c=s.$$parentForm,f=a?i(s.$name):$;a&&(f(t,s),o.$observe(a,function(e){s.$name!==e&&(f(t,n),c.$$renameControl(s,e),(f=i(s.$name))(t,s))})),r.on("$destroy",function(){c.$removeControl(s),f(t,n),l(s,ui)})}}}}}]},li=ci(),fi=ci(!0),hi=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,pi=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,$i=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,di=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,mi=/^(\d{4})-(\d{2})-(\d{2})$/,vi=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,gi=/^(\d{4})-W(\d\d)$/,yi=/^(\d{4})-(\d\d)$/,bi=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,wi={text:function(t,e,n,r,i,o){$n(0,e,n,r,i,o),pn(r)},date:mn("date",mi,dn(mi,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mn("datetimelocal",vi,dn(vi,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mn("time",bi,dn(bi,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mn("week",gi,function(t,e){if(C(t))return t;if(x(t)){gi.lastIndex=0;var n=gi.exec(t);if(n){var r=+n[1],i=+n[2],o=n=0,a=0,s=0,u=rn(r);i=7*(i-1);return e&&(n=e.getHours(),o=e.getMinutes(),a=e.getSeconds(),s=e.getMilliseconds()),new Date(r,0,u.getDate()+i,n,o,a,s)}}return NaN},"yyyy-Www"),month:mn("month",yi,dn(yi,["yyyy","MM"]),"yyyy-MM"),number:function(t,e,r,i,o,a){var s,u;(vn(0,e,0,i),$n(0,e,r,i,o,a),i.$$parserName="number",i.$parsers.push(function(t){return i.$isEmpty(t)?null:di.test(t)?parseFloat(t):n}),i.$formatters.push(function(t){if(!i.$isEmpty(t)){if(!S(t))throw Wi("numfmt",t);t=t.toString()}return t}),y(r.min)||r.ngMin)&&(i.$validators.min=function(t){return i.$isEmpty(t)||g(s)||t>=s},r.$observe("min",function(t){y(t)&&!S(t)&&(t=parseFloat(t,10)),s=S(t)&&!isNaN(t)?t:n,i.$validate()}));(y(r.max)||r.ngMax)&&(i.$validators.max=function(t){return i.$isEmpty(t)||g(u)||t<=u},r.$observe("max",function(t){y(t)&&!S(t)&&(t=parseFloat(t,10)),u=S(t)&&!isNaN(t)?t:n,i.$validate()}))},url:function(t,e,n,r,i,o){$n(0,e,n,r,i,o),pn(r),r.$$parserName="url",r.$validators.url=function(t,e){var n=t||e;return r.$isEmpty(n)||pi.test(n)}},email:function(t,e,n,r,i,o){$n(0,e,n,r,i,o),pn(r),r.$$parserName="email",r.$validators.email=function(t,e){var n=t||e;return r.$isEmpty(n)||$i.test(n)}},radio:function(t,e,n,r){g(n.name)&&e.attr("name",++Rn),e.on("click",function(t){e[0].checked&&r.$setViewValue(n.value,t&&t.type)}),r.$render=function(){e[0].checked=n.value==r.$viewValue},n.$observe("value",r.$render)},checkbox:function(t,e,n,r,i,o,a,s){var u=gn(s,t,"ngTrueValue",n.ngTrueValue,!0),c=gn(s,t,"ngFalseValue",n.ngFalseValue,!1);e.on("click",function(t){r.$setViewValue(e[0].checked,t&&t.type)}),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return!1===t},r.$formatters.push(function(t){return D(t,u)}),r.$parsers.push(function(t){return t?u:c})},hidden:$,button:$,submit:$,reset:$,file:$},xi=["$browser","$sniffer","$filter","$parse",function(t,e,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(wi[An(a.type)]||wi.text)(i,o,a,s[0],e,t,n,r)}}}}],Si=/^(true|false|\d+)$/,Ci=function(){return{restrict:"A",priority:100,compile:function(t,e){return Si.test(e.ngValue)?function(t,e,n){n.$set("value",t.$eval(n.ngValue))}:function(t,e,n){t.$watch(n.ngValue,function(t){n.$set("value",t)})}}}},Ei=["$compile",function(t){return{restrict:"AC",compile:function(e){return t.$$addBindingClass(e),function(e,r,i){t.$$addBindingInfo(r,i.ngBind),r=r[0],e.$watch(i.ngBind,function(t){r.textContent=t===n?"":t})}}}}],ki=["$interpolate","$compile",function(t,e){return{compile:function(r){return e.$$addBindingClass(r),function(r,i,o){r=t(i.attr(o.$attr.ngBindTemplate)),e.$$addBindingInfo(i,r.expressions),i=i[0],o.$observe("ngBindTemplate",function(t){i.textContent=t===n?"":t})}}}}],Ai=["$sce","$parse","$compile",function(t,e,n){return{restrict:"A",compile:function(r,i){var o=e(i.ngBindHtml),a=e(i.ngBindHtml,function(t){return(t||"").toString()});return n.$$addBindingClass(r),function(e,r,i){n.$$addBindingInfo(r,i.ngBindHtml),e.$watch(a,function(){r.html(t.getTrustedHtml(o(e))||"")})}}}}],Oi=m({restrict:"A",require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),Mi=yn("",!0),Ti=yn("Odd",0),Vi=yn("Even",1),Ni=fn({compile:function(t,e){e.$set("ngCloak",n),t.removeClass("ng-cloak")}}),ji=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Pi={},Di={blur:!0,focus:!0};o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=Rt("ng-"+t);Pi[e]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,o){var a=n(o[e],null,!0);return function(e,n){n.on(t,function(n){var i=function(){a(e,{$event:n})};Di[t]&&r.$$phase?e.$evalAsync(i):e.$apply(i)})}}}}]});var Ii=["$animate",function(t){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,c;n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=e.createComment(" end ngIf: "+i.ngIf+" "),s={clone:n},t.enter(n,r.parent(),r)}):(c&&(c.remove(),c=null),u&&(u.$destroy(),u=null),s&&(c=it(s.clone),t.leave(c).then(function(){c=null}),s=null))})}}}],Ri=["$templateRequest","$anchorScroll","$animate",function(t,e,n){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:In.noop,compile:function(r,i){var o=i.ngInclude||i.src,a=i.onload||"",s=i.autoscroll;return function(r,i,u,c,l){var f,h,p,$=0,d=function(){h&&(h.remove(),h=null),f&&(f.$destroy(),f=null),p&&(n.leave(p).then(function(){h=null}),h=p,p=null)};r.$watch(o,function(o){var u=function(){!y(s)||s&&!r.$eval(s)||e()},h=++$;o?(t(o,!0).then(function(t){if(h===$){var e=r.$new();c.template=t,t=l(e,function(t){d(),n.enter(t,null,i).then(u)}),p=t,(f=e).$emit("$includeContentLoaded",o),r.$eval(a)}},function(){h===$&&(d(),r.$emit("$includeContentError",o))}),r.$emit("$includeContentRequested",o)):(d(),c.template=null)})}}}}],qi=["$compile",function(t){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,o){/SVG/.test(r[0].toString())?(r.empty(),t(ut(o.template,e).childNodes)(n,function(t){r.append(t)},{futureParentElement:r})):(r.html(o.template),t(r.contents())(n))}}}],Ui=fn({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),Fi=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(t,e,r,i){var a=e.attr(r.$attr.ngList)||", ",s="false"!==r.ngTrim,u=s?Bn(a):a;i.$parsers.push(function(t){if(!g(t)){var e=[];return t&&o(t.split(u),function(t){t&&e.push(s?Bn(t):t)}),e}}),i.$formatters.push(function(t){return Un(t)?t.join(a):n}),i.$isEmpty=function(t){return!t||!t.length}}}},Bi="ng-valid",_i="ng-invalid",Li="ng-pristine",Hi="ng-dirty",zi="ng-pending",Wi=r("ngModel"),Gi=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(t,e,r,i,a,s,u,c,l,f){this.$modelValue=this.$viewValue=Number.NaN,this.$$rawModelValue=n,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=n,this.$name=f(r.name||"",!1)(t);var h,p=a(r.ngModel),d=p.assign,m=p,v=d,b=null,w=this;this.$$setOptions=function(t){if((w.$options=t)&&t.getterSetter){var e=a(r.ngModel+"()"),n=a(r.ngModel+"($$$p)");m=function(t){var n=p(t);return E(n)&&(n=e(t)),n},v=function(t,e){E(p(t))?n(t,{$$$p:w.$modelValue}):d(t,w.$modelValue)}}else if(!p.assign)throw Wi("nonassign",r.ngModel,L(i))},this.$render=$,this.$isEmpty=function(t){return g(t)||""===t||null===t||t!=t};var x=i.inheritedData("$formController")||ui,C=0;bn({ctrl:this,$element:i,set:function(t,e){t[e]=!0},unset:function(t,e){delete t[e]},parentForm:x,$animate:s}),this.$setPristine=function(){w.$dirty=!1,w.$pristine=!0,s.removeClass(i,Hi),s.addClass(i,Li)},this.$setDirty=function(){w.$dirty=!0,w.$pristine=!1,s.removeClass(i,Li),s.addClass(i,Hi),x.$setDirty()},this.$setUntouched=function(){w.$touched=!1,w.$untouched=!0,s.setClass(i,"ng-untouched","ng-touched")},this.$setTouched=function(){w.$touched=!0,w.$untouched=!1,s.setClass(i,"ng-touched","ng-untouched")},this.$rollbackViewValue=function(){u.cancel(b),w.$viewValue=w.$$lastCommittedViewValue,w.$render()},this.$validate=function(){if(!S(w.$modelValue)||!isNaN(w.$modelValue)){var t=w.$$rawModelValue,e=w.$valid,r=w.$modelValue,i=w.$options&&w.$options.allowInvalid;w.$$runValidators(t,w.$$lastCommittedViewValue,function(o){i||e===o||(w.$modelValue=o?t:n,w.$modelValue!==r&&w.$$writeModelToScope())})}},this.$$runValidators=function(t,e,r){function i(t,e){s===C&&w.$setValidity(t,e)}function a(t){s===C&&r(t)}var s=++C;!function(){var t=w.$$parserName||"parse";return h!==n?(h||(o(w.$validators,function(t,e){i(e,null)}),o(w.$asyncValidators,function(t,e){i(e,null)})),i(t,h),h):(i(t,null),!0)}()?a(!1):function(){var n=!0;return o(w.$validators,function(r,o){var a=r(t,e);n=n&&a,i(o,a)}),!!n||(o(w.$asyncValidators,function(t,e){i(e,null)}),!1)}()?function(){var r=[],s=!0;o(w.$asyncValidators,function(o,a){var u=o(t,e);if(!u||!E(u.then))throw Wi("$asyncValidators",u);i(a,n),r.push(u.then(function(){i(a,!0)},function(t){s=!1,i(a,!1)}))}),r.length?l.all(r).then(function(){a(s)},$):a(!0)}():a(!1)},this.$commitViewValue=function(){var t=w.$viewValue;u.cancel(b),(w.$$lastCommittedViewValue!==t||""===t&&w.$$hasNativeValidators)&&(w.$$lastCommittedViewValue=t,w.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){var e=w.$$lastCommittedViewValue;if(h=!g(e)||n)for(var r=0;r<w.$parsers.length;r++)if(g(e=w.$parsers[r](e))){h=!1;break}S(w.$modelValue)&&isNaN(w.$modelValue)&&(w.$modelValue=m(t));var i=w.$modelValue,o=w.$options&&w.$options.allowInvalid;w.$$rawModelValue=e,o&&(w.$modelValue=e,w.$modelValue!==i&&w.$$writeModelToScope()),w.$$runValidators(e,w.$$lastCommittedViewValue,function(t){o||(w.$modelValue=t?e:n,w.$modelValue!==i&&w.$$writeModelToScope())})},this.$$writeModelToScope=function(){v(t,w.$modelValue),o(w.$viewChangeListeners,function(t){try{t()}catch(t){e(t)}})},this.$setViewValue=function(t,e){w.$viewValue=t,w.$options&&!w.$options.updateOnDefault||w.$$debounceViewValueCommit(e)},this.$$debounceViewValueCommit=function(e){var n=0,r=w.$options;r&&y(r.debounce)&&(S(r=r.debounce)?n=r:S(r[e])?n=r[e]:S(r.default)&&(n=r.default)),u.cancel(b),n?b=u(function(){w.$commitViewValue()},n):c.$$phase?w.$commitViewValue():t.$apply(function(){w.$commitViewValue()})},t.$watch(function(){var e=m(t);if(e!==w.$modelValue&&(w.$modelValue==w.$modelValue||e==e)){w.$modelValue=w.$$rawModelValue=e,h=n;for(var r=w.$formatters,i=r.length,o=e;i--;)o=r[i](o);w.$viewValue!==o&&(w.$viewValue=w.$$lastCommittedViewValue=o,w.$render(),w.$$runValidators(e,o,$))}return e})}],Ji=["$rootScope",function(t){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Gi,priority:1,compile:function(e){return e.addClass(Li).addClass("ng-untouched").addClass(Bi),{pre:function(t,e,n,r){var i=r[0],o=r[1]||ui;i.$$setOptions(r[2]&&r[2].$options),o.$addControl(i),n.$observe("name",function(t){i.$name!==t&&o.$$renameControl(i,t)}),t.$on("$destroy",function(){o.$removeControl(i)})},post:function(e,n,r,i){var o=i[0];o.$options&&o.$options.updateOn&&n.on(o.$options.updateOn,function(t){o.$$debounceViewValueCommit(t&&t.type)}),n.on("blur",function(n){o.$touched||(t.$$phase?e.$evalAsync(o.$setTouched):e.$apply(o.$setTouched))})}}}}}],Yi=/(\s+|^)default(\s+|$)/,Ki=function(){return{restrict:"A",controller:["$scope","$attrs",function(t,e){var r=this;this.$options=j(t.$eval(e.ngModelOptions)),this.$options.updateOn!==n?(this.$options.updateOnDefault=!1,this.$options.updateOn=Bn(this.$options.updateOn.replace(Yi,function(){return r.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},Zi=fn({terminal:!0,priority:1e3}),Xi=r("ngOptions"),Qi=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,to=["$compile","$parse",function(t,n){function r(t,e,r){function o(t,e,n,r,i){this.selectValue=t,this.viewValue=e,this.label=n,this.group=r,this.disabled=i}function a(t){var e;if(!c&&i(t))e=t;else for(var n in e=[],t)t.hasOwnProperty(n)&&"$"!==n.charAt(0)&&e.push(n);return e}var s=t.match(Qi);if(!s)throw Xi("iexp",t,L(e));var u=s[5]||s[7],c=s[6];t=/ as /.test(s[0])&&s[1];var l=s[9];e=n(s[2]?s[1]:u);var f=t&&n(t)||e,h=l&&n(l),p=l?function(t,e){return h(r,e)}:function(t){return kt(t)},$=function(t,e){return p(t,b(t,e))},d=n(s[2]||s[1]),m=n(s[3]||""),v=n(s[4]||""),g=n(s[8]),y={},b=c?function(t,e){return y[c]=e,y[u]=t,y}:function(t){return y[u]=t,y};return{trackBy:l,getTrackByValue:$,getWatchables:n(g,function(t){for(var e=[],n=a(t=t||[]),i=n.length,o=0;o<i;o++){var u=t===n?o:n[o],c=b(t[u],u);u=p(t[u],c);e.push(u),(s[2]||s[1])&&(u=d(r,c),e.push(u)),s[4]&&(c=v(r,c),e.push(c))}return e}),getOptions:function(){for(var t=[],e={},n=g(r)||[],i=a(n),s=i.length,u=0;u<s;u++){var c=n===i?u:i[u],h=b(n[c],c),y=f(r,h);y=new o(c=p(y,h),y,d(r,h),m(r,h),h=v(r,h));t.push(y),e[c]=y}return{items:t,selectValueMap:e,getOptionFromViewValue:function(t){return e[$(t)]},getViewValueFromOption:function(t){return l?In.copy(t.viewValue):t.viewValue}}}}}var a=e.createElement("option"),s=e.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(e,n,i,u){function c(t,e){t.element=e,e.disabled=t.disabled,t.value!==e.value&&(e.value=t.selectValue),t.label!==e.label&&(e.label=t.label,e.textContent=t.label)}function l(t,e,n,r){return e&&An(e.nodeName)===n?n=e:(n=r.cloneNode(!1),e?t.insertBefore(n,e):t.appendChild(n)),n}function f(t){for(var e;t;)e=t.nextSibling,St(t),t=e}function h(){var t=w&&$.readValue();w=x.getOptions();var e={},r=n[0].firstChild;if(y&&n.prepend(d),r=function(t){var e=d&&d[0],n=b&&b[0];if(e||n)for(;t&&(t===e||t===n);)t=t.nextSibling;return t}(r),w.items.forEach(function(t){var i,o;t.group?((i=e[t.group])||(i=l(n[0],r,"optgroup",s),r=i.nextSibling,i.label=t.group,i=e[t.group]={groupElement:i,currentOptionElement:i.firstChild}),c(t,o=l(i.groupElement,i.currentOptionElement,"option",a)),i.currentOptionElement=o.nextSibling):(c(t,o=l(n[0],r,"option",a)),r=o.nextSibling)}),Object.keys(e).forEach(function(t){f(e[t].currentOptionElement)}),f(r),p.$render(),!p.$isEmpty(t)){var i=$.readValue();(x.trackBy?D(t,i):t===i)||(p.$setViewValue(i),p.$render())}}var p=u[1];if(p){var $=u[0];u=i.multiple;for(var d,m=0,v=n.children(),g=v.length;m<g;m++)if(""===v[m].value){d=v.eq(m);break}var y=!!d,b=Sn(a.cloneNode(!1));b.val("?");var w,x=r(i.ngOptions,n,e);u?(p.$isEmpty=function(t){return!t||0===t.length},$.writeValue=function(t){w.items.forEach(function(t){t.element.selected=!1}),t&&t.forEach(function(t){(t=w.getOptionFromViewValue(t))&&!t.disabled&&(t.element.selected=!0)})},$.readValue=function(){var t=n.val()||[],e=[];return o(t,function(t){(t=w.selectValueMap[t])&&!t.disabled&&e.push(w.getViewValueFromOption(t))}),e},x.trackBy&&e.$watchCollection(function(){if(Un(p.$viewValue))return p.$viewValue.map(function(t){return x.getTrackByValue(t)})},function(){p.$render()})):($.writeValue=function(t){var e=w.getOptionFromViewValue(t);e&&!e.disabled?n[0].value!==e.selectValue&&(b.remove(),y||d.remove(),n[0].value=e.selectValue,e.element.selected=!0,e.element.setAttribute("selected","selected")):null===t||y?(b.remove(),y||n.prepend(d),n.val(""),d.prop("selected",!0),d.attr("selected",!0)):(y||d.remove(),n.prepend(b),n.val("?"),b.prop("selected",!0),b.attr("selected",!0))},$.readValue=function(){var t=w.selectValueMap[n.val()];return t&&!t.disabled?(y||d.remove(),b.remove(),w.getViewValueFromOption(t)):null},x.trackBy&&e.$watch(function(){return x.getTrackByValue(p.$viewValue)},function(){p.$render()})),y?(d.remove(),t(d)(e),d.removeClass("ng-scope")):d=Sn(a.cloneNode(!1)),h(),e.$watchCollection(x.getWatchables,h)}}}}],eo=["$locale","$interpolate","$log",function(t,e,n){var r=/{}/g,i=/^when(Minus)?(.+)$/;return{link:function(a,s,u){function c(t){s.text(t||"")}var l,f=u.count,h=u.$attr.when&&s.attr(u.$attr.when),p=u.offset||0,d=a.$eval(h)||{},m={},v=e.startSymbol(),y=e.endSymbol(),b=v+f+"-"+p+y,w=In.noop;o(u,function(t,e){var n=i.exec(e);n&&(n=(n[1]?"-":"")+An(n[2]),d[n]=s.attr(u.$attr[e]))}),o(d,function(t,n){m[n]=e(t.replace(r,b))}),a.$watch(f,function(e){var r=parseFloat(e),i=isNaN(r);i||r in d||(r=t.pluralCat(r-p)),r===l||i&&S(l)&&isNaN(l)||(w(),g(i=m[r])?(null!=e&&n.debug("ngPluralize: no rule defined for '"+r+"' in "+h),w=$,c()):w=a.$watch(i,c),l=r)})}}}],no=["$parse","$animate",function(t,a){var s=r("ngRepeat"),u=function(t,e,n,r,i,o,a){t[n]=r,i&&(t[i]=o),t.$index=e,t.$first=0===e,t.$last=e===a-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0==(1&e))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(r,c){var l=c.ngRepeat,f=e.createComment(" end ngRepeat: "+l+" ");if(!(h=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/)))throw s("iexp",l);var h,p=h[1],$=h[2],d=h[3],m=h[4];if(!(h=p.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/)))throw s("iidexp",p);var v=h[3]||h[1],g=h[2];if(d&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(d)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(d)))throw s("badident",d);var y,b,w,x,S={$id:kt};return m?y=t(m):(w=function(t,e){return kt(e)},x=function(t){return t}),function(t,e,r,c,h){y&&(b=function(e,n,r){return g&&(S[g]=e),S[v]=n,S.$index=r,y(t,S)});var p=ot();t.$watchCollection($,function(r){var c,$,m,y,S,C,E,k,A,O,M=e[0],T=ot();if(d&&(t[d]=r),i(r))k=r,$=b||w;else for(O in $=b||x,k=[],r)r.hasOwnProperty(O)&&"$"!==O.charAt(0)&&k.push(O);for(y=k.length,O=Array(y),c=0;c<y;c++)if(S=r===k?c:k[c],C=r[S],E=$(S,C,c),p[E])A=p[E],delete p[E],T[E]=A,O[c]=A;else{if(T[E])throw o(O,function(t){t&&t.scope&&(p[t.id]=t)}),s("dupes",l,E,C);O[c]={id:E,scope:n,clone:n},T[E]=!0}for(m in p){if(E=it((A=p[m]).clone),a.leave(E),E[0].parentNode)for(c=0,$=E.length;c<$;c++)E[c].$$NG_REMOVED=!0;A.scope.$destroy()}for(c=0;c<y;c++)if(S=r===k?c:k[c],C=r[S],(A=O[c]).scope){m=M;do{m=m.nextSibling}while(m&&m.$$NG_REMOVED);A.clone[0]!=m&&a.move(it(A.clone),null,Sn(M)),M=A.clone[A.clone.length-1],u(A.scope,c,v,C,g,S,y)}else h(function(t,e){A.scope=e;var n=f.cloneNode(!1);t[t.length++]=n,a.enter(t,null,Sn(M)),M=n,A.clone=t,T[A.id]=A,u(A.scope,c,v,C,g,S,y)});p=T})}}}}],ro=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngShow,function(e){t[e?"removeClass":"addClass"](n,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],io=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngHide,function(e){t[e?"addClass":"removeClass"](n,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],oo=fn(function(t,e,n){t.$watch(n.ngStyle,function(t,n){n&&t!==n&&o(n,function(t,n){e.css(n,"")}),t&&e.css(t)},!0)}),ao=["$animate",function(t){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,r,i,a){var s=[],u=[],c=[],l=[],f=function(t,e){return function(){t.splice(e,1)}};n.$watch(i.ngSwitch||i.on,function(n){var r,i;for(r=0,i=c.length;r<i;++r)t.cancel(c[r]);for(r=c.length=0,i=l.length;r<i;++r){var h=it(u[r].clone);l[r].$destroy(),(c[r]=t.leave(h)).then(f(c,r))}u.length=0,l.length=0,(s=a.cases["!"+n]||a.cases["?"])&&o(s,function(n){n.transclude(function(r,i){l.push(i);var o=n.element;r[r.length++]=e.createComment(" end ngSwitchWhen: "),u.push({clone:r}),t.enter(r,o.parent(),o)})})})}}}],so=fn({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:e})}}),uo=fn({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),co=fn({restrict:"EAC",link:function(t,e,n,i,o){if(!o)throw r("ngTransclude")("orphan",L(e));o(function(t){e.empty(),e.append(t)})}}),lo=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){"text/ng-template"==n.type&&t.put(n.id,e[0].text)}}}],fo={$setViewValue:$,$render:$},ho=["$element","$scope","$attrs",function(t,r,i){var o=this,a=new At;o.ngModelCtrl=fo,o.unknownOption=Sn(e.createElement("option")),o.renderUnknownOption=function(e){e="? "+kt(e)+" ?",o.unknownOption.val(e),t.prepend(o.unknownOption),t.val(e)},r.$on("$destroy",function(){o.renderUnknownOption=$}),o.removeUnknownOption=function(){o.unknownOption.parent()&&o.unknownOption.remove()},o.readValue=function(){return o.removeUnknownOption(),t.val()},o.writeValue=function(e){o.hasOption(e)?(o.removeUnknownOption(),t.val(e),""===e&&o.emptyOption.prop("selected",!0)):null==e&&o.emptyOption?(o.removeUnknownOption(),t.val("")):o.renderUnknownOption(e)},o.addOption=function(t,e){nt(t,'"option value"'),""===t&&(o.emptyOption=e);var n=a.get(t)||0;a.put(t,n+1)},o.removeOption=function(t){var e=a.get(t);e&&(1===e?(a.remove(t),""===t&&(o.emptyOption=n)):a.put(t,e-1))},o.hasOption=function(t){return!!a.get(t)}}],po=function(){return{restrict:"E",require:["select","?ngModel"],controller:ho,link:function(t,e,n,r){var i=r[1];if(i){var a=r[0];if(a.ngModelCtrl=i,i.$render=function(){a.writeValue(i.$viewValue)},e.on("change",function(){t.$apply(function(){i.$setViewValue(a.readValue())})}),n.multiple){a.readValue=function(){var t=[];return o(e.find("option"),function(e){e.selected&&t.push(e.value)}),t},a.writeValue=function(t){var n=new At(t);o(e.find("option"),function(t){t.selected=y(n.get(t.value))})};var s,u=NaN;t.$watch(function(){u!==i.$viewValue||D(s,i.$viewValue)||(s=P(i.$viewValue),i.$render()),u=i.$viewValue}),i.$isEmpty=function(t){return!t||0===t.length}}}}}},$o=["$interpolate",function(t){function e(t){t[0].hasAttribute("selected")&&(t[0].selected=!0)}return{restrict:"E",priority:100,compile:function(n,r){if(g(r.value)){var i=t(n.text(),!0);i||r.$set("value",n.text())}return function(t,n,r){var o=n.parent(),a=o.data("$selectController")||o.parent().data("$selectController");a&&a.ngModelCtrl&&(i?t.$watch(i,function(t,i){r.$set("value",t),i!==t&&a.removeOption(i),a.addOption(t,n),a.ngModelCtrl.$render(),e(n)}):(a.addOption(r.value,n),a.ngModelCtrl.$render(),e(n)),n.on("$destroy",function(){a.removeOption(r.value),a.ngModelCtrl.$render()}))}}}}],mo=m({restrict:"E",terminal:!1}),vo=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){r&&(n.required=!0,r.$validators.required=function(t,e){return!n.required||!r.$isEmpty(e)},n.$observe("required",function(){r.$validate()}))}}},go=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,i,o){if(o){var a,s=i.ngPattern||i.pattern;i.$observe("pattern",function(t){if(x(t)&&0<t.length&&(t=new RegExp("^"+t+"$")),t&&!t.test)throw r("ngPattern")("noregexp",s,t,L(e));a=t||n,o.$validate()}),o.$validators.pattern=function(t,e){return o.$isEmpty(e)||g(a)||a.test(e)}}}}},yo=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=-1;n.$observe("maxlength",function(t){t=h(t),i=isNaN(t)?-1:t,r.$validate()}),r.$validators.maxlength=function(t,e){return 0>i||r.$isEmpty(e)||e.length<=i}}}}},bo=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=0;n.$observe("minlength",function(t){i=h(t)||0,r.$validate()}),r.$validators.minlength=function(t,e){return r.$isEmpty(e)||e.length>=i}}}}};t.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(function(){var e;if(!Gn){var r=Hn();Cn=t.jQuery,y(r)&&(Cn=null===r?n:t[r]),Cn&&Cn.fn.on?(Sn=Cn,l(Cn.fn,{scope:ur.scope,isolateScope:ur.isolateScope,controller:ur.controller,injector:ur.injector,inheritedData:ur.inheritedData}),e=Cn.cleanData,Cn.cleanData=function(t){var n;if(qn)qn=!1;else for(var r,i=0;null!=(r=t[i]);i++)(n=Cn._data(r,"events"))&&n.$destroy&&Cn(r).triggerHandler("$destroy");e(t)}):Sn=ct,In.element=Sn,Gn=!0}}(),l(In,{bootstrap:K,copy:j,extend:l,merge:f,equals:D,element:Sn,forEach:o,injector:Ot,noop:$,bind:R,toJson:U,fromJson:F,identity:d,isUndefined:g,isDefined:y,isString:x,isFunction:E,isObject:b,isNumber:S,isElement:T,isArray:Un,version:Kn,isDate:C,lowercase:An,uppercase:Mn,callbacks:{counter:0},getTestability:X,$$minErr:r,$$csp:Ln,reloadWithDebugInfo:Z}),(En=function(t){function e(t,e,n){return t[e]||(t[e]=n())}var n=r("$injector"),i=r("ng");return(t=e(t,"angular",Object)).$$minErr=t.$$minErr||r,e(t,"module",function(){var t={};return function(r,o,a){if("hasOwnProperty"===r)throw i("badname","module");return o&&t.hasOwnProperty(r)&&(t[r]=null),e(t,r,function(){function t(t,e,n,r){return r||(r=i),function(){return r[n||"push"]([t,e,arguments]),l}}function e(t,e){return function(n,o){return o&&E(o)&&(o.$$moduleName=r),i.push([t,e,arguments]),l}}if(!o)throw n("nomod",r);var i=[],s=[],u=[],c=t("$injector","invoke","push",s),l={_invokeQueue:i,_configBlocks:s,_runBlocks:u,requires:o,name:r,provider:e("$provide","provider"),factory:e("$provide","factory"),service:e("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),decorator:e("$provide","decorator"),animation:e("$animateProvider","register"),filter:e("$filterProvider","register"),controller:e("$controllerProvider","register"),directive:e("$compileProvider","directive"),config:c,run:function(t){return u.push(t),this}};return a&&c(a),l})}})}(t))("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:Pe}),t.provider("$compile",It).directive({a:ai,input:xi,textarea:xi,form:li,script:lo,select:po,style:mo,option:$o,ngBind:Ei,ngBindHtml:Ai,ngBindTemplate:ki,ngClass:Mi,ngClassEven:Vi,ngClassOdd:Ti,ngCloak:Ni,ngController:ji,ngForm:fi,ngHide:io,ngIf:Ii,ngInclude:Ri,ngInit:Ui,ngNonBindable:Zi,ngPluralize:eo,ngRepeat:no,ngShow:ro,ngStyle:oo,ngSwitch:ao,ngSwitchWhen:so,ngSwitchDefault:uo,ngOptions:to,ngTransclude:co,ngModel:Ji,ngList:Fi,ngChange:Oi,pattern:go,ngPattern:go,required:vo,ngRequired:vo,minlength:bo,ngMinlength:bo,maxlength:yo,ngMaxlength:yo,ngValue:Ci,ngModelOptions:Ki}).directive({ngInclude:qi}).directive(si).directive(Pi),t.provider({$anchorScroll:Mt,$animate:wr,$animateCss:xr,$$animateQueue:br,$$AnimateRunner:yr,$browser:jt,$cacheFactory:Pt,$controller:Ft,$document:Bt,$exceptionHandler:_t,$filter:Ge,$$forceReflow:Ar,$interpolate:Qt,$interval:te,$http:Kt,$httpParamSerializer:Ht,$httpParamSerializerJQLike:zt,$httpBackend:Xt,$location:he,$log:pe,$parse:Oe,$rootScope:je,$q:Me,$$q:Te,$sce:Re,$sceDelegate:Ie,$sniffer:qe,$templateCache:Dt,$templateRequest:Ue,$$testability:Fe,$timeout:Be,$window:He,$$rAF:Ne,$$jqLite:Et,$$HashMap:hr,$$cookieReader:We})}]),In.module("ngLocale",[],["$provide",function(t){t.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",short:"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",pluralCat:function(t,e){var r=0|t,i=e;return n===i&&(i=Math.min(function(t){var e=(t+="").indexOf(".");return-1==e?0:t.length-e-1}(t),3)),Math.pow(10,i),1==r&&0==i?"one":"other"}})}]),Sn(e).ready(function(){Y(e,K)}))}(window,document),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');   ">
        <strong>Suporte 24/7</strong>
        <p>Uma equipe<br /> sempre pronta<br /> para te ajudar no<br /> que você precisar.</p>
      </div>
    </li>
    <li>
      <div class="img-wrap">
        <img src="//cdn.imguol.com.br/p/pp/meunegocio/loja-virtuol/moda/icon_clubeuol.svg" loading="lazy"/>
      </div>
      <div class="text">
        <strong>Clube UOL <span>&rarr;</span></strong>
        <p>Ofertas exclusivas em<br /> lojas online, restaurantes<br /> e muito mais. <br /><a href="https://clube.uol.com.br/?utm_source=UMN_loja-moda&utm_medium=UMN-credibilidade_clube_uol&utm_campaign=UMN-credibilidade_clube_uol&utm_content=clube_uol" target="_blank" rel="noopener" title="Conheça o Clube UOL">Ver mais</a> </p>
      </div>
    </li>
    <li>
      <div class="img-wrap">
        <img src="//cdn.imguol.com.br/p/pp/meunegocio/loja-virtuol/moda/icon_hospedagem.svg" loading="lazy"/>
      </div>
      <div class="text">
        <strong>Hospedagem inclusa</strong>
        <p>Conte com<br /> hospedagem grátis<br /> no maior Data Center<br /> da América Latina.</p>
      </div>
    </li>
        <li>
      <div class="img-wrap">
        <img src="https://cdn.imguol.com.br/p/pp/common/skeelo/skeelo_icon.png" width="62" height="68" alt="Ícone Skeelo" loading="lazy"/>
      </div>
      <div class="text">
        <strong>Skeelo</strong>
        <p>Milhares de livros digitais<br /> para você ler pelo celular.<br /> Para ganhar um e&#8209;book<br /> todo mês, baixe o app</p>
      </div>
    </li>
      </ul>
</section>
<footer class="hidden-lg hidden-md hidden-sm">
   <ul class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
      <li>
         <div data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" class="panel-heading collapsed" role="tab" id="headingOne">
            <h4 class="panel-title">Produtos</h4>
         </div>
         <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
            <h5>Hospedagem</h5>
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/hospedagem-de-sites">Hospedagem de Sites </a></li>
                  <li>
                     <a href="https://uolhost.uol.com.br/hospedagem-de-sites/linguagem-programacao">Hospedagem por linguagem de programação</a>
                     <ul>
                        <li><a href="https://uolhost.uol.com.br/hospedagem-de-sites/linguagem-programacao/php-asp-net">&bull; PHP/ASP</a></li>
                     </ul>
                  </li>
                  <li><a href="https://uolhost.uol.com.br/revenda-de-hospedagem">Revenda de Hospedagem</a></li>
                  <li>
                     <a href="https://uolhost.uol.com.br/banco-de-dados">Banco de Dados</a>
                     <ul>
                        <li><a href="https://uolhost.uol.com.br/banco-de-dados/mysql">&bull; MySQL</a></li>
                        <li><a href="https://uolhost.uol.com.br/banco-de-dados/mongodb">&bull; MongoDB</a></li>
                                                <li><a href="https://uolhost.uol.com.br/banco-de-dados/postgresql">&bull; PostgreSQL</a></li>
                     </ul>
                  </li>
               </ul>
            </nav>
            <h5>Registre seu domínio</h5>
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/registro-de-dominio">Registro de Dominios</a></li>
                  <li><a href="https://uolhost.uol.com.br/transferencia-de-dominio.html">Transferência de domínios</a></li>
                  <li><a href="https://uolhost.uol.com.br/certificado-ssl">Certificado SSL</a></li>
                  <li><a href="https://uolhost.uol.com.br/consulta-whois">Consulta Whois</a></li>
               </ul>
            </nav>
            <h5>Crie seu site</h5>
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/criador-de-sites/">Criador de Sites</a></li>
                  <li><a href="https://uolhost.uol.com.br/crie-seu-blog">Blog</a></li>
               </ul>
            </nav>
            <h5>Crie sua loja virtual</h5>
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/loja-virtual">Loja Virtual</a></li>
               </ul>
            </nav>
            <h5>Divulgue seu negócio</h5>
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/e-mail-marketing/">E-mail Marketing</a></li>
                  <li><a href="https://uolhost.uol.com.br/google-ads/">Google Ads</a></li>
                  <li><a href="https://uolhost.uol.com.br/uol-anuncios/">UOL Anúncios</a></li>
                  <li><a href="https://uolhost.uol.com.br/facebook-ads">Facebook Ads</a></li>
               </ul>
            </nav>
            <h5>E-mail</h5>
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/e-mail/">E-mail Profissional </a></li>
                  <!--<li><a href="https://uolhost.uol.com.br/g-suite/">Gmail para seu negócio</a></li>-->
                  <li><a href="https://uolhost.uol.com.br/google-workspace">Gmail para seu negócio</a></li>
                  <li><a href="https://meunegocio.uol.com.br/microsoft-office-365/exchange/">E-mail Microsoft Exchange</a></li>
               </ul>
            </nav>
            <h5>Cloud Computing</h5>
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/uol-cloud-computing">Cloud Computing</a></li>
                                 </ul>
            </nav>
            <h5>Soluções Empresariais</h5>
            <nav class="panel-body">
               <ul>
                                    <!--<li><a href="https://uolhost.uol.com.br/g-suite/">Workspace</a></li>-->
                  <li><a href="https://uolhost.uol.com.br/google-workspace">Google Workspace</a></li>
                  <!--<li><a href="https://uolhost.uol.com.br/microsoft-onedrive/">Microsoft Office OneDrive</a></li>-->
                  <li><a href="https://uolhost.uol.com.br/microsoft-office-365/">Microsoft Office OneDrive</a></li>
                  <!--<li><a href="https://uolhost.uol.com.br/microsoft-office-365">Microsoft Office 365</a></li>-->
                  <li><a href="https://uolhost.uol.com.br/microsoft-office-365/">Microsoft Office 365</a></li>
                  <li><a href="https://uolhost.uol.com.br/vouclicar/">Softwares de Gestão</a></li>
               </ul>
            </nav>
         </div>
      </li>
      <li>
         <div data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" class="panel-heading collapsed" role="tab" id="headingTwo">
            <h4 class="panel-title">Ganhe dinheiro com UOLHOST</h4>
         </div>
         <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <h5>Programa de Parcerias</h5>
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/parceiros/">Benefícios e prêmios para desenvolvedores</a></li>
               </ul>
            </nav>
            <h5>Programa de Afiliados</h5>
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/afiliados/">Insira anúncios do UOLHOST em seu site e receba por venda</a></li>
               </ul>
            </nav>
         </div>
      </li>
      <li>
         <div data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" class="panel-heading collapsed" role="tab" id="headingThree">
            <h4 class="panel-title">Ajuda para o seu negócio</h4>
         </div>
         <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <h5>Guia de Parceiros</h5>
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/parceiros/parceiros-uolhost.html">Encontre empresas para auxiliar em seus projetos de negócios</a></li>
               </ul>
            </nav>
         </div>
      </li>
      <li>
         <div data-toggle="collapse" data-target="#collapseFor" aria-expanded="false" aria-controls="collapseFor" class="panel-heading collapsed" role="tab" id="headingFor">
            <h4 class="panel-title">Perguntas mais frequentes</h4>
         </div>
         <div id="collapseFor" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFor">
            <nav class="panel-body">
               <ul>
                  <li><a href="https://uolhost.uol.com.br/ajuda/">Ver todas as perguntas</a></li>
               </ul>
            </nav>
         </div>
      </li>
      <li>
         <div data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" class="panel-heading collapsed" role="tab" id="headingFive">
            <h4 class="panel-title">Central de Vendas</h4>
         </div>
         <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
            <nav class="panel-body">
               <ul>
                  <li><a target="_blank" href="https://wa.me/551140035973">Vendas via WhatsApp</a></li>
                  <li><a href="javascript:;" class="chat" onclick="window.open('https://uolhost.uol.com.br/iniciar-chat-com.html?produto=20');">Atendimento via chat</a></li>
               </ul>
            </nav>
            <div class="panel-body">
               <p class="capitais">
                  Capitais e Regiões Metropolitanas<br>
                  <strong>4003-5973</strong><br>
                  <br>
                  Demais localidades<br>
                  <strong>0800 881 9011</strong><br>
               </p>
            </div>
         </div>
      </li>
      <li>
         <div data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" class="panel-heading collapsed" role="tab" id="headingSix">
            <h4 class="panel-title">Suporte e atendimento</h4>
         </div>
         <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
            <nav class="panel-body">
               <ul>
                  <li><a href="#">Abertura de chamado</a></li>
                  <li><a href="https://painel.uol.com.br/myProducts.html?ouvidoria=true">Ouvidoria</a></li>
                  <li><a href="" data-toggle="modal" data-target="#modal_enviar_denuncia" class="modal-denuncie-gb">Denuncie</a><br></li>
                  <li><a href="https://api.whatsapp.com/send?phone=551140039011">Atendimento via WhatsApp</a></li>
               </ul>
            </nav>
            <div class="panel-body">
               <p class="capitais">Capitais e RegiõesMetropolitanas<br>
                  <strong>4003 9011</strong>
               </p>
               <p class="demais">Demais localidades<br />
                  <strong>0800 881 9011</strong><br>
                  <span>
                  Atendimento 24 horas por<br>
                  dia, 7 dias por semana
                  </span>
               </p>
            </div>
         </div>
      </li>
   </ul>
   <div class="social-media">
      <h5>Acompanhe o UOL HOST</h5>
      <a href="https://twitter.com/uolhost" class="twitter" target="_blank"></a>
      <a href="https://www.facebook.com/uolhost" class="facebook" target="_blank"></a>
            <a href="https://www.youtube.com/user/uolhost" class="youtube" target="_blank"></a>
      <a href="https://www.linkedin.com/company/uol-host" class="linkedin" target="_blank"></a>
   </div>
   <div>
      <div class="ft_selo_consumidor_moderno">
         <p>Vencedor do Prêmio Consumidor Moderno de Excelência em Serviços ao Cliente 2015, 2016 e 2018</p>
      </div>
      <div class="ft_abrahosting clearfix">
         <hr/>
         <img src="//imguol.com.br/p/uolhost/academia/v2/selo-abrahosting.png">
      </div>
      <div class="disclaimer">
         <p>
            Todos os sites do UOL são hospedados no <a href="//uolhost.uol.com.br/">UOL HOST</a><br>
            © 1996 - 2024 - UOL - O melhor conteúdo. <br>Todos os direitos reservados.<br><br>
            UNIVERSO ONLINE S/A - CNPJ/MF 01.109.184/0001-95 - Av. Brigadeiro Faria Lima, 1.384, São Paulo/SP - CEP 01452-002<br>
         </p>
      </div>
   </div>
</footer>
<footer class="hidden-xs">
   <div id="footer-bg" class="container-fluid">
      <div class="container">
         <nav>
            <div class="row">
               <div class="col-sm-15 col-md-10">
                  <p>PRODUTOS</p>
                  <div class="row">
                     <div class="col-sm-12 col-md-12">
                        <dl>
                           <dt>Hospede seu site</dt>
                           <dd><a href="https://uolhost.uol.com.br/hospedagem-de-sites">Hospedagem de Sites </a></a></dd>
                           <dd>
                              <dl>
                                 <dt>
                                    <a href="https://uolhost.uol.com.br/hospedagem-de-sites/linguagem-programacao/php-asp-net">
                                       Hospedagem por linguagem de programação
                                 </dt>
                                 <dd><a href="https://uolhost.uol.com.br/hospedagem-de-sites/linguagem-programacao/php-asp-net">&bull; PHP/ASP</a></dd>
                              </dl>
                           </dd>
                           <dd><a href="https://uolhost.uol.com.br/revenda-de-hospedagem">Revenda de Hospedagem</a></dd>
                           <dd>
                              <dl>
                                 <dt><a href="https://uolhost.uol.com.br/banco-de-dados">Banco de Dados</a></dt>
                                 <dd><a href="https://uolhost.uol.com.br/banco-de-dados/mysql">&bull; MySQL</a></dd>
                                 <dd><a href="https://uolhost.uol.com.br/banco-de-dados/mongodb">&bull; MongoDB</a></dd>
                                                                  <dd><a href="https://uolhost.uol.com.br/banco-de-dados/postgresql">&bull; PostgreSQL</a></dd>
                              </dl>
                           </dd>
                        </dl>
                        <dl>
                           <dt>Registre seu domínio</dt>
                           <dd><a href="https://uolhost.uol.com.br/registro-de-dominio">Registro de domínios</a></dd>
                           <dd><a href="https://uolhost.uol.com.br/transferencia-de-dominio.html">Transferência de domínios</a></dd>
                           <dd><a href="https://uolhost.uol.com.br/certificado-ssl">Certificado SSL</a></dd>
                           <dd><a href="https://uolhost.uol.com.br/consulta-whois">Consulta Whois</a></dd>
                        </dl>
                        <dl>
                           <dt>Crie seu site</dt>
                           <dd><a href="https://uolhost.uol.com.br/criador-de-sites/">Criador de Sites</a></dd>
                           <dd><a href="https://uolhost.uol.com.br/crie-seu-blog">Blog</a></dd>
                        </dl>
                     </div>
                     <div class="col-sm-12 col-md-12">
                        <dl>
                           <dt>Crie sua Loja Virtual</dt>
                           <dd><a href="https://uolhost.uol.com.br/loja-virtual">Loja Virtual UOL HOST</a></dd>
                           <dd><a href="https://meunegocio.uol.com.br/lp/lojinha-virtual">Lojinha VirtUOL</a></dd>
                        </dl>
                        <dl>
                           <dt>Divulgue o seu negócio</dt>
                           <dd><a href="https://uolhost.uol.com.br/e-mail-marketing/">E-mail Marketing</a></dd>
                           <dd><a href="https://uolhost.uol.com.br/google-ads/">Google Ads</a></dd>
                           <dd><a href="https://uolhost.uol.com.br/lp/2016/publicidade-uol-anuncios/">UOL Anúncios</a></dd>
                           <dd><a href="https://uolhost.uol.com.br/facebook-ads">Facebook Ads</a></dd>
                        </dl>
                        <dl>
                           <dt>E-mail</dt>
                           <dd><a href="https://uolhost.uol.com.br/e-mail/">E-mail Profissional </a></dd>
                           <!--<dd><a href="https://uolhost.uol.com.br/google-apps/">Gmail para seu negócio</a></dd>-->
                           <dd><a href="https://uolhost.uol.com.br/google-workspace">Gmail para seu negócio</a></dd>
                           <dd><a href="https://meunegocio.uol.com.br/microsoft-office-365/exchange/">Microsoft Exchange</a></dd>
                        </dl>
                        <dl>
                           <dt>Cloud Computing</dt>
                           <dd><a href="https://uolhost.uol.com.br/uol-cloud-computing">Cloud Computing</a></dd>
                                                                              </dl>
                        <dl>
                           <dt>Soluções Empresariais</dt>
                                                      <!--<dd><a href="https://uolhost.uol.com.br/g-suite/">Workspace</a></dd>-->
                           <dd><a href="https://uolhost.uol.com.br/google-workspace">Google Workspace</a></dd>
                           <dd><a href="https://uolhost.uol.com.br/microsoft-office-365/">Microsoft OneDrive</a></dd>
                           <!--<dd><a href="https://uolhost.uol.com.br/microsoft-onedrive/">Microsoft OneDrive</a></dd>-->
                           <dd><a href="https://uolhost.uol.com.br/microsoft-office-365/">Microsoft Office 365</a></dd>
                           <!--<dd><a href="https://uolhost.uol.com.br/microsoft-office-365">Microsoft Office 365</a></dd>-->
                           <dd><a href="https://uolhost.uol.com.br/vouclicar/">Software de Gestão</a></dd>
                        </dl>
                     </div>
                  </div>
               </div>
               <div class="col-sm-1 col-md-1"></div>
               <div class="col-sm-7 col-md-7 hidden-sm">
                  <p>GANHE DINHEIRO COM UOL HOST</p>
                  <dl>
                     <dt>Programa de Parcerias</dt>
                     <dd><a href="https://uolhost.uol.com.br/parceiros/">Benefícios e prêmios para desenvolvedores</a></dd>
                  </dl>
                  <dl>
                     <dt>Programa de Afiliados</dt>
                     <dd><a href="https://uolhost.uol.com.br/afiliados/">Insira anúncios do UOL HOST em seu site e<br>receba por venda</a></dd>
                  </dl>
                  <p>AJUDA PARA O SEU NEGÓCIO</p>
                  <dl>
                     <dt>Guia de Parceiros</dt>
                     <dd><a href="https://uolhost.uol.com.br/parceiros/parceiros-uolhost.html">Encontre empresas para auxiliar em seus<br>projetos de negócios</a></dd>
                  </dl>
                  <p>PERGUNTAS MAIS FREQUENTES</p>
                  <ul id="faq-footer">
                     <li><a href="https://uolhost.uol.com.br/ajuda/">Ver todas as perguntas</a></li>
                  </ul>
               </div>
               <div class="col-sm-0 col-md-1"></div>
               <div class="col-sm-8 col-md-5">
                  <p>CENTRAL DE VENDAS</p>
                  <li><a target="_blank" href="https://wa.me/551140035973">Vendas via WhatsApp</a></li>
                  <a href="javascript:;" onclick="window.open('https://uolhost.uol.com.br/iniciar-chat-com.html?produto=produto-$item.id', 'Pagina', 'STATUS=NO, TOOLBAR=NO, LOCATION=NO, DIRECTORIES=NO, RESISABLE=NO, SCROLLBARS=YES, TOP=10, LEFT=10, WIDTH=800, HEIGHT=600');">Atendimento via chat</a><br>
                  <dl class="capitais">
                     Capitais e Regiões<br>Metropolitanas<br>
                     <strong>4003 5973</strong>
                  </dl>
                  <dl class="demais">
                     Demais localidades<br />
                     <strong>0800 728 2173</strong><br>
                     <span>
                     Atendimento 24 horas por<br>
                     dia, 7 dias por semana
                     </span>
                  </dl>
                  <p>SUPORTE E ATENDIMENTO</p>
                  <a href="https://painelhost.uol.com.br/callCenter.html#/Chamados">Abertura de chamado</a><br>
                  <a href="https://painel.uol.com.br/myProducts.html?ouvidoria=true">Ouvidoria</a><br>
                  <a href="" class="modal-denuncie-gb" data-toggle="modal" data-target="#modal_enviar_denuncia">Denuncie</a><br>
                  <a href="https://api.whatsapp.com/send?phone=551140039011">Atendimento via WhatsApp</a><br><br>
                  <dl class="capitais">
                     Capitais e Regiões<br>Metropolitanas<br>
                     <strong>4003 9011</strong>
                  </dl>
                  <dl class="demais">
                     Demais localidades<br />
                     <strong>0800 881 9011</strong><br>
                     <span>
                     Atendimento 24 horas por<br>
                     dia, 7 dias por semana
                     </span>
                  </dl>
                  <p>ACOMPANHE O UOL HOST</p>
                  <a href="https://twitter.com/uolhost " id="twitter" class="social" target="_blank"></a>
                  <a href="https://www.facebook.com/uolhost " id="facebook" class="social" target="_blank"></a>
                                    <a href="https://www.youtube.com/user/uolhost " id="youtube" class="social" target="_blank"></a>
                  <a href="https://www.linkedin.com/company/uol-host " id="linkedin" class="social" target="_blank"></a>
               </div>
            </div>
         </nav>
      </div>
      <!-- container -->
      <div class="row selos" >
         <div class="container">
            <div class="col-sm-12 col-md-12">
               <img alt="Vencedor do Prêmio Consumidor Moderno de Excelência em Serviços ao Cliente 2015, 2016 e 2018" src="//host.imguol.com/site/uolhost/images/home/selo_premio_consumidor_moderno.png" />
               <p>Vencedor do Prêmio Consumidor Moderno de Excelência em Serviços ao Cliente 2015, 2016 e 2018.</p>
            </div>
            <div class="col-sm-12 col-md-12">
               <img alt="Associado fundador da Abrahosting, entidade sem fins lucrativos de apoio ao mercado de hosting" src="//host.imguol.com/site/uolhost/images/home/selo_abrahosting.png" />
               <p>Associado fundador da Abrahosting, entidade sem fins lucrativos de apoio ao mercado de hosting.</p>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="disclaimer">
            <p>Todos os sites do UOL são hospedados no <a href="https://uolhost.uol.com.br/">UOL HOST</a></p>
         </div>
         <div class="disclaimer">
            © 1996 - 2024 - UOL - O melhor conteúdo. Todos os direitos reservados.
            <p>UNIVERSO ONLINE S/A - CNPJ/MF 01.109.184/0001-95 - Av. Brigadeiro Faria Lima, 1.384, São Paulo/SP - CEP 01452-002</p>
         </div>
      </div>
   </div>
   <!-- container fluis-->
</footer>
<!-- MODAL BS -->
<div id="modalDefault" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalDefault">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-header">
         </div>
         <div class="modal-body">
         </div>
         <div class="modal-footer">
         </div>
      </div>
   </div>
</div>
<!-- /MODAL BS -->
<div id="modal_enviar_email" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_enviar_email">
    <div class="modal-dialog modal-xs" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title">Envie sua dúvida</h4>
        </div>
        <div class="modal-body">
          <iframe class="eloquaForm" src="//jsuol.com.br/p/g/eloqua/contact/host.html?v4" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    </div>
  </div>
  <div id="modal_enviar_denuncia" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_enviar_denuncia">
    <div class="modal-dialog modal-xs" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title">Faça sua denúncia</h4>
        </div>
        <div class="modal-body">
          <iframe class="eloquaForm" src="//jsuol.com.br/p/g/eloqua/contact/host.html?form=denuncie" width="100%" height="550" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    </div>
  </div>
<!-- jQuery (necessário para os plugins do bootstrap) -->
<script src="//jsuol.com.br/g/jquery/2.1.3/jquery-2.1.3.min.js"></script>
<script src="//jsuol.com.br/g/uolfw/1.7.3/js/UOLfw.min.js"></script>
<!-- Eloqua -->
<script src="//jsuol.com.br/p/g/eloqua/contact.js?v=9.0"></script>
<script src="//jsuol.com.br/p/uolhost/HOST/p/default/v3/js/uh-default.js?v=9.0"></script>
<!-- Notifications -->
<script async src="//jsuol.com.br/p/pp/webalerts/notifications.min.js?v=9.0"></script>
<script>
   window.universal_variable = {
   	"page" : {
   		"type": "index",
   		"breadcrumb": [ "home"  ],
   		"category": "home",
   		"url":"http://uolhost.uol.com.br/",
   		   		"idPage": "20"
   		   	},
   	"listing": {
   		"items": [
   			   			{
   				"product": {
   					"id": "",
   					"name": "",
   					"url":"",
   					"category": "",
   					"unit_price": 0,
   					"unit_sale_price": 0,
   					"description": "",
   					"sku_code": 0,
   					"periodicity":0
   				},
   				"quantity": 0,
   				"subtotal": 0
   			}
   		]
   	},
   	   	"device" : "desktop"
   	   };
</script>
<script src="//jsuol.com.br/p/uolhost/HOST/g/slick/slick.js"></script>
<script>
   (function () {
     var newwindowsize = $(window).width();
      var dotMobile = $('.slider-mobile');
      var isMobileLandscape = window.matchMedia("(orientation: landscape)").matches && (window.orientation === 90 || window.orientation === -90) && newwindowsize <= 1024;
      var viewportWidth = window.innerWidth;
      var customSlider = $('.custom-slider');
      var sliderOptions = {
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: true,
         arrows: false,
         centerMode: true,
         variableWidth: true,
         adaptiveHeight: false
      };
      if (viewportWidth <= 1024) {
         customSlider.slick(sliderOptions);
      }
      var disableSlick = function () {
         if (dotMobile.hasClass('slick-initialized')) {
            dotMobile.slick('unslick');
         }
      };
      var enableSlick = function () {
         if (newwindowsize <= 767) {
            if (!dotMobile.hasClass('slick-initialized')) {
               dotMobile.slick({
                  infinite: false,
                  arrows: true,
                  dots: true,
                  variableWidth: true,
                  centerMode: true
               });
            }
         }
      }
      enableSlick();
      var id;
      $(window).resize(function () {
         clearTimeout(id);
         id = setTimeout(function () {
            newwindowsize = $(window).width();
            isMobileLandscape = window.matchMedia("(orientation: landscape)").matches && (window.orientation === 90 || window.orientation === -90) && newwindowsize <= 1024;
            if (newwindowsize > 768) {
               disableSlick();
            }
            if (newwindowsize <= 768) {
               enableSlick();
            }
            viewportWidth = window.innerWidth;
            if (viewportWidth > 1024 && customSlider.hasClass('slick-initialized')) {
               customSlider.slick('unslick');
            }
            if (viewportWidth <= 1024 && !customSlider.hasClass('slick-initialized')) {
               customSlider.slick(sliderOptions);
            }
         }, 30);
      });
   })();
</script>  <script src="//jsuol.com.br/p/pp/meunegocio/lab/LAB.js?v=9.0"></script>
  <script>
    $LAB
      .script("//jsuol.com.br/p/uolhost/HOST/p/dominios/2017/js/common/js/modernizr/2.0.6/modernizr.js")
      .script("//jsuol.com.br/p/uolhost/HOST/p/dominios/monaco/js/Core.js?v=0.1&debug=true")
      .script("//jsuol.com.br/p/uolhost/HOST/p/dominios/monaco/js/get-campaign.js?callback=uh.domainsCampaign&campaign=4b8f02d28d55aa4c4ae0685fbfa3151b3d8612ad")
      .script("//jsuol.com.br/p/pp/meunegocio/registro-de-dominios/js/busca-dominio.js?v=3.3.0")
  </script>
  <script src="//jsuol.com.br/p/uolhost/HOST/g/dotdotdot/jquery.dotdotdot.min.js"></script>
  <script src="//jsuol.com.br/p/uolhost/HOST/g/slick/slick.js"></script>
  <script src="//jsuol.com.br/p/uolhost/HOST/p/home/js/home.js?v=12.0.0"></script>
  <script src="//jsuol.com.br/p/uolhost/HOST/p/home/v3/js/main.js?v=3.3.0"></script>
<script>
	function audience(label, actionAd){
		console.log("UOLPD.Audience >>> " + actionAd + " >>> " +label );
		UOLPD.Audience.countClick({
			category:"navegacao", 
			action:actionAd, 
			label:label
		});
		hj('tagRecording', ['menu_click']);
	}
</script>
<script>
	window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
	$("#uh-menu-abas" ).one('mouseover', function() {	
			hj('trigger', 'menu_interaction');
			hj('tagRecording', ['menu_open']);
	});
</script>	
	<script>
		jQuery(document).ready(function(){
			window.triggerUOLTM('pgResponsivasUH');
		})
	</script>
<!-- UOL TM Code -->
<script type="text/javascript" src="//tm.jsuol.com.br/uoltm.js?id=ldgo9j"></script>
<!-- End UOL TM Code -->
<script>
      window.universal_variable = {
      "page": {
        "type": "index",
        "breadcrumb": [ "home" ],
        "category": "home",
        "url":"http://uolhost.uol.com.br/"
      },
      "product":{
        "line_items":[{
          'product':{
            'name': '',
            'sku_code': ''
          }
        }]
      },
      "device": " desktop "
    };
    </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tldjs/2.3.1/tld.min.js"></script>
  <script type="text/javascript">
    $("#fullDomain").change(function () {
      var fullDomain = document.getElementById('fullDomain'),
        narmalizaDominio = $('#fullDomain').val()
          .toLowerCase()
          .replace(/[´`^~]/g, '')
          .replace(/[áàâã]/g, 'a')
          .replace(/[íìîĩ]/g, 'i')
          .replace(/[éèêẽ]/g, 'e')
          .replace(/[óòôõ]/g, 'o')
          .replace(/[úùûũ]/g, 'u')
          .replace(/[ç]/g, 'c')
      fullDomain.value = narmalizaDominio;
    });
  </script>
    <script>
    $('.box-search [name="central-ajuda"], .box-search .btn-search').click(function (e) {
      e.preventDefault();
      window.location.href = 'https://meunegocio.uol.com.br/ajuda';
    });
  </script>
</body>
</html>
