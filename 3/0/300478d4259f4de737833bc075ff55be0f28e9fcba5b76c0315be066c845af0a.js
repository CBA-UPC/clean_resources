(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1183:function(t,e,i){"use strict";i.r(e),i.d(e,"snippet",(function(){return s}));const s=t=>{!function(e,i){if(!e.groove){var s=function(t,e){return Array.prototype.slice.call(t,e)},a={widget:null,loadedWidgets:{},classes:{Shim:null,Embeddable:function(){this._beforeLoadCallQueue=[],this.shim=null,this.finalized=!1;var t=function(t){var e=s(arguments,1);if(this.finalized){if(!this[t])throw new TypeError(t+"() is not a valid widget method");this[t].apply(this,e)}else this._beforeLoadCallQueue.push([t,e])};this.initializeShim=function(){a.classes.Shim&&(this.shim=new a.classes.Shim(this))},this.exec=t,this.init=function(){t.apply(this,["init"].concat(s(arguments,0))),this.initializeShim()},this.onShimScriptLoad=this.initializeShim.bind(this),this.onload=void 0}},scriptLoader:{callbacks:{},states:{},load:function(t,e){if("pending"!==this.states[t]){this.states[t]="pending";var s=i.createElement("script");s.id=t,s.type="text/javascript",s.async=!0,s.src=e;var a=this;s.addEventListener("load",(function(){a.states[t]="completed",(a.callbacks[t]||[]).forEach((function(t){t()}))}),!1);var n=i.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n)}},addListener:function(t,e){"completed"!==this.states[t]?(this.callbacks[t]||(this.callbacks[t]=[]),this.callbacks[t].push(e)):e()}},createEmbeddable:function(){var t=new a.classes.Embeddable;return e.Proxy?new Proxy(t,{get:function(t,e){return t instanceof a.classes.Embeddable?Object.prototype.hasOwnProperty.call(t,e)||"onload"===e?t[e]:function(){t.exec.apply(t,[e].concat(s(arguments,0)))}:t[e]}}):t},createWidget:function(){var e=a.createEmbeddable();return a.scriptLoader.load("groove-script","https://".concat(t,".widget.cluster.groovehq.com/api/loader")),a.scriptLoader.addListener("groove-iframe-shim-loader",e.onShimScriptLoad),e}};e.groove=a}}(window,document)}}}]);ificationsPermissionModal:p}}}),b=Object(u.a)(f,(function(){var e=this,t=e._self._c,o=e._self._setupProxy;return o.isActive?t(o.PushNotificationsPermissionModal,{attrs:{"active-sync":o.isActive,width:"780"},on:{close:o.handleSubscribeVisitorToPush,reject:o.handleReject}}):e._e()}),[],!1,null,null,null);t.default=b.exports},539:function(e,t,o){"use strict";var s=o(5),a=o(523),n=o(551);const l={center:n.e,bottomSheet:n.b,bottomCenter:n.c,bottomRight:n.d,fullscreen:n.f,absolute:n.a},i=Object(s.defineComponent)({name:"BaseModal"});var r=Object(s.defineComponent)(Object.assign({},i,{props:{layout:{type:[String,Object],default:"center",validator:e=>"string"!=typeof e||e in l},backdrop:{type:Boolean,default:!0},mobileSheet:{type:Boolean,default:!0},contentRepos:{type:Boolean,default:!1},scrollRepos:{type:Boolean,default:!1}},setup(e,t){let{expose:o}=t;const n=e,i=Object(s.computed)((()=>{const e="string"==typeof n.layout?l[n.layout]:n.layout;return[Object.assign({},e,{backdrop:n.backdrop})]})),r=Object(s.ref)(),c=()=>r.value.close();return Object(s.onMounted)((()=>r.value.activate(i))),Object(s.watch)(i,(()=>r.value.updateLayouts(i))),o({close:c}),{__sfc:!0,layoutPresets:l,props:n,popoverLayouts:i,popover:r,close:c,BasePopover:a.a}}})),c=o(45),u=Object(c.a)(r,(function(){var e=this,t=e._self._c,o=e._self._setupProxy;return t(o.BasePopover,e._g(e._b({ref:"popover",attrs:{"scroll-repos":e.scrollRepos,"content-repos":e.contentRepos,"mobile-sheet":e.mobileSheet&&"fullscreen"!==e.layout},scopedSlots:e._u([{key:"default",fn:function({}){return[e._t("default",null,{close:o.close})]}}],null,!0)},"BasePopover",e.$attrs,!1),e.$listeners))}),[],!1,null,null,null);t.a=u.exports}}]);