window._bannerflow.registerModule("7053d7ed4c748b03bc83",(()=>{var t;return(()=>{"use strict";var i,e,n={820465681065956:801887793239557:(t,i,e)=>{e.d(i,{BE:()=>s,CH:()=>o,cL:()=>r,xE:()=>h});var n=e(820465681065956);unction r(t=window){try{return t.self!==window.top}catch(i){return!0}}697304967748793:272217704499249:269526719726432:(t,i,e)=>{e.d(i,{L:()=>l});var n=e(672562019417818),s=e(514190235127405),r=e(59420090704915),o=e(589566015866475),h=e(965511500706342),a=e(299878361094175),c=e(0xf7949f940831);let l=class extends a.v{onstructor(t,i,e){super(),this.creative=t,this.b=i,this.F=e,this.time=0,this.isPlaying=!1,this.loop=1,this.C=!1,this.A=0,this.E=0,this.O=0,this.D=1,this.$=new Map,this.B=[],this.k=t=>{if(this.T&&t-this.A<this.T)return void(this.R=requestAnimationFrame(this.k));if(this.A=t,this.C||!this.isPlaying)return void this.z();this.E||(this.E=t);const i=this.P(),e=this.creative.loops,n=(t-this.E)*this.D,r=(this.O+n)/1e3;if(!this.H()&&this.loop>=e&&r>=i&&this.F.MODE!==s.y.VideoGenerator)this.stop();else{if(this.F.MODE===s.y.VideoGenerator&&r>=this.duration)return this.V(this.duration),void this.pause();for(r<this.duration?this.V(r):r>=this.duration&&(this.V(this.duration),this.next());this.B.length;){const t=this.B.pop();t.fn(...t.value)}this.emit("tick",this.time),this.R=requestAnimationFrame(this.k)}}}play(){return!this.isPlaying&&this.creative.elements.length>0&&(this.F.MODE===s.y.ManageView&&1===this.loop&&(this.time=this.U()),this.O=1e3*this.time,this.R=requestAnimationFrame(this.k),this.isPlaying=!0,this.b.W(!0),this.emit("play",this.time)),this}ause(){return this.isPlaying&&(this.z(),this.isPlaying=!1,this.b.W(!1),this.emit("pause",this.time)),this}stop(){if(this.F.MODE!==s.y.VideoGenerator){const t=this.P();this.pause(),this.V(t)}this.emit("stop",this.time)}seek(t){return t=Math.max(t,0)||0,this.time!==t&&(this.O=1e3*t,this.E=0,this.V(t),this.emit("seek",this.time)),this}lay(){return this.seek(0),this.emit("replay",this.loop),this}restart(){return this.F.MODE===s.y.VideoGenerator||(this.b.feedStore&&(this.b.feedStore.resetIndexState(),this.b.feedStore.skipNextIndexUpdate()),this.setLoop(1),this.play(),this.emit("restart",this.loop)),this}(t){this.creative=t}etLoop(t,i=!0,e=!0){this.b.feedStore&&(e&&this.b.feedStore.setFeedLoop(this.b.feedStore.loop<0?this.b.feedStore.loop:t),this.b.feedStore.updateElementsCurrentIndex()),i?(this.O=0,this.E=0,this.V(0,!0)):this.Y(this.time,!0),this.loop=Math.max(1,t),1===this.loop&&(this.time=this.U()),this.F.MODE!==s.y.VideoGenerator&&this.emit("loop",this.loop)}pdateCustomFPSInterval(t){this.T=t}(){if(this.isPlaying)for(let t=0;t<this.creative.elements.length;t++){const i=this.creative.elements[t],e=i.animations;this.$.has(i.id)||this.$.set(i.id,{visible:!1});const n=this.$.get(i.id);let s="none";const r=(0,c.q$)(e),h=(0,c.qF)(e);if(r&&(this.time>i.time&&this.time<r+i.time?s="inTransitionIn":"inTransitionIn"===n.animationState&&(this.time<=i.time||this.time>=r+i.time)&&(s="inTransitionOut")),h){const t=i.time+i.duration-h;this.time>t&&this.time<i.time+i.duration?s="outTransitionIn":"outTransitionIn"===n.animationState&&(this.time<t||this.time>=i.duration+i.time)&&(s="outTransitionOut")}(0,o.ZP)(i,this.time)?this.$.set(i.id,{visible:!0,animationState:s}):this.$.set(i.id,{visible:!1,animationState:s});const a=0===this.time&&0===i.time,l=this.time===i.duration+i.time,u=this.$.get(i.id);if((n.visible!==u.visible||a||l)&&((u.visible&&!l||a)&&"animationStarted"!==n.animationState?(u.animationState="animationStarted",this.emit("animation_start",i)):(u.visible||a)&&!l||"animationEnded"===n.animationState||"none"===n.animationState&&0!==h||(u.animationState="animationEnded",this.emit("animation_end",i))),n.animationState!==this.$.get(i.id).animationState)switch(this.$.get(i.id).animationState){case"inTransitionOut":this.emit("in_transition_end",i);break;case"outTransitionIn":this.emit("out_transition_start",i)}}}0,n.gn)([(0,n.fM)(0,(0,h.f3)(1)),(0,n.fM)(1,(0,h.f3)(3)),(0,n.fM)(2,(0,h.f3)(2)),(0,n.w6)("design:paramtypes",[r.EG,Object,Object])],l),(0,h.GY)(1,{},l,"creative",0),(0,h.GY)(3,{},l,"_renderer",1),(0,h.GY)(2,{},l,"_env",2)},344986060448415:10163214101291:61326109834648:213662401277885:896583711158915:,662414620722391,514190235127405,849960424048606,59420090704915,589566015866475:(t,i,e)=>{e.d(i,{kG:()=>g,oK:()=>$,qL:()=>F,sL:()=>x,Ul:()=>O,DL:()=>D,YC:()=>m,AA:()=>d,xj:()=>S,$Q:()=>u,ZP:()=>v,BM:()=>c,iN:()=>l,xs:()=>p,mO:()=>f,LY:()=>_,gu:()=>A,zX:()=>E});var n=e(0x892d76eeaae7);n.OH.Rectangle,n.OH.Text,n.OH.Image,n.OH.Video,n.OH.Ellipse,n.OH.Button,n.OH.Widget;var s;!function(t){t.list="list",t.grid="grid",t.preview="preview"}(s||(s={}));var r=e(705589328877347),o=e(0xf7949f940831)onst c=a(n.OH.Button,n.OH.Text),l=(a(n.OH.Ellipse),a(n.OH.Rectangle),a(n.OH.Creative),a(n.OH.Video)),u=a(n.OH.Image);a(n.OH.Image,n.OH.Video)const f=a(n.OH.Widget,n.OH.BannerflowLibraryWidget,n.OH.BannerflowLibraryWidgetInstance)function v(t,i){return!S(t)&&function(t,i){return i>=t.time&&i<=t.time+t.duration}(t,i)onst w=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];let b=1unction x(t,i,e,n){C(t,i,e,n)on $(t){if(d(t))throw new Error("View elements can not be created from a group node.");const i={kind:t.kind,__data:t};return i.elementCid=y(),i.cidIndex=b,i.id=t.id,i.name=t.name,i.ratio=t.ratio,i.time=t.time,i.duration=t.duration,c(i)&&c(t)?(i.font=t.font,i.content=t.content):u(t)&&u(i)?i.feed=t.feed:f(i)&&f(t)&&(i.customProperties=t.customProperties),i}},261477052252761,422248828880857,150828361886439,705589328877347,726722705000482,417211624016302,965511500706342,827955858103892,423946036116194,299878361094175:(t,i,e)=>{e.d(i,{v:()=>n});class non(t,i){return this.xt[t]||(this.xt[t]=[]),-1===this.xt[t].indexOf(i)&&this.xt[t].push(i),this}once(t,i){const e=n=>{"function"==typeof i&&i(n),this.off(t,e)};return this.on(t,e),this}off(t,i){if(void 0===t)return this.clearEvents(),this;if(!i)return delete this.xt[t],this;const e=this.xt[t];if(null==e?void 0:e.length){let t=e.length;for(;t-->0;)e[t]===i&&e.splice(t,1)}return this}emit(t,i){var e;if(this.skipEmission)return this;const n=null===(e=this.xt[t])||void 0===e?void 0:e.slice();if(n)for(const r of n)try{r(i)}catch(s){console.error("CallbackError: ",s)}return this}},973446529555485,819799928313609,326793288102976,495799138022148,461204004294138})}},67256201941ror}},rts}r.m=n]})},r.f={}[]))js")t,i),i={},e="LIB:"h)}}0})},r.p="scripte))})();var o={};(()=>{r.r(o),r.d(o,{AnimatedCrea=>fi,C_t.I});clab=i}play(){this.Ft.play()}pause(){this.Ft.paup()}seek(t){this.Ft.see(t)}}vata"}(i||(i={}));var e=r(801887793239557),n=r(697304967748793),s=r(514190235127405),h=r(0x93e4ec42b2b),a=r(896583711158915),c=r(589566015866ar m=r(827955858103892),g=r(495799138022148);function w(t,i){if(!t)return!1;if(t===i)return!0;if(!i||!("parentNode"in i))return!1;let e=i.parentNode;for(;e;){if(e===t)return!0;e=e.parentNode}return!1}const b=new Map,y=new}new Map;var A=r(819799928313)}}var O=r(461204004294138);let D,$;const B={sin:Math.sin,cos:Math.cos,pi:Math.PI,PI:Math.PI,abs:Math.abs,round:Math.round,ceil:Math.ceil,floor:Math.floor,pow:Math.pow,sqrt:Math.sqrt,random:Math.random};let j=!1;const M=new Function("code","\n    try {\n        context.eval = eval;\n        context.code = code;\n    } catch(e) {\n        var context = window.context || {};\n        context.eval = eval;\n        context.code = code;\n    }\n    const scopeProxy = new Proxy(context, {\n        has(prop) { return !(prop in context) },\n        get(target, prop) {\n            if (prop in target) {\n                return target[prop];\n            }\n            if (!(typeof prop === 'symbol')) {\n                throw new Error(`Unexpected token '${prop.toString()}'.`);\n            }\n        }\n    });\n    with (scopeProxy) {\n        return eval(code);\n   0)}}var I=r(0xf7949f940831),T=r(0xf52214630re}}var L,z,P=r(672562019417818),N=r(820465681065956),H=r(0xc2532787afbd),V=r(705589328877347),U=r(726722705000482),W=r(417211624016302),Y=r(965511500706342),X=r(423946036116194),Z=r(2998783610941RL"}(L||(L=el"}(z||(z=unc}const Q={linear:{name:"Linear",type:"none",t=>t},easeInExpo:{name:"InExpo",type:"in",-1))},easeOutExpo:{name:"OutExpo",type:"in",0*t)},easeInOutExpo:{name:"InOutExpo",type:"inout",-t))},easeInQuad:{name:"InQuad",type:"in",>t*t},easeOutQuad:{name:"OutQuad",type:"out",2-t)},easeInOutQuad:{name:"InOutQuad",type:"inout",*t-1},easeInCubic:{name:"InCubic",type:"in",*t*t},easeOutCubic:{name:"OutCubic",type:"out",*t+1},easeInOutCubic:{name:"InOutCubic",type:"inout",2)+1},easeInQuart:{name:"InQuart",type:"in",*t*t},easeOutQuart:{name:"OutQuart",type:"out",*t*t},easeInOutQuart:{name:"InOutQuart",type:"inout",*t*t},easeInQuint:{name:"InQuint",type:"in",*t*t},easeOutQuint:{name:"OutQuint",type:"out",*t*t},easeInOutQuint:{name:"InOutQuint",type:"inout",*t*t},easeInElastic:{name:"InElastic",type:"in",5*t)},easeOutElastic:{name:"OutElastic",type:"out",t)+1},easeInOutElastic:{name:"InOutElastic",type:"inout",t)+1},easeInBack:{name:"InBack",type:"in",-i)}},easeOutBack:{name:"OutBack",type:"out",)+1}},easeInOutBack:{name:"InOutBack",type:"inout",+2)}},easeInBounce:{name:"InBounce",type:"in",1-t)},easeOutBounce:{name:"OutBounce",type:"out",G(t)},easeInOutBounce:{name:"InOutBounce",type:"inout",)+375}it("0651\n0652\n0670\n0640\n0627\n064C-065F");const J=it("0041-005A\n0061-007A\n00AA\n00B5\n00BA\n00C0-00D6\n00D8-00F6\n00F8-0220\n0222-0233\n0250-02AD\n02B0-02B8\n02BB-02C1\n02D0-02D1\n02E0-02E4\n02EE\n037A\n0386\n0388-038A\n038C\n038E-03A1\n03A3-03CE\n03D0-03F5\n0400-0482\n048A-04CE\n04D0-04F5\n04F8-04F9\n0500-050F\n0531-0556\n0559-055F\n0561-0587\n0589\n0903\n0905-0939\n093D-0940\n0949-094C\n0950\n0958-0961\n0964-0970\n0982-0983\n0985-098C\n098F-0990\n0993-09A8\n09AA-09B0\n09B2\n09B6-09B9\n09BE-09C0\n09C7-09C8\n09CB-09CC\n09D7\n09DC-09DD\n09DF-09E1\n09E6-09F1\n09F4-09FA\n0A05-0A0A\n0A0F-0A10\n0A13-0A28\n0A2A-0A30\n0A32-0A33\n0A35-0A36\n0A38-0A39\n0A3E-0A40\n0A59-0A5C\n0A5E\n0A66-0A6F\n0A72-0A74\n0A83\n0A85-0A8B\n0A8D\n0A8F-0A91\n0A93-0AA8\n0AAA-0AB0\n0AB2-0AB3\n0AB5-0AB9\n0ABD-0AC0\n0AC9\n0ACB-0ACC\n0AD0\n0AE0\n0AE6-0AEF\n0B02-0B03\n0B05-0B0C\n0B0F-0B10\n0B13-0B28\n0B2A-0B30\n0B32-0B33\n0B36-0B39\n0B3D-0B3E\n0B40\n0B47-0B48\n0B4B-0B4C\n0B57\n0B5C-0B5D\n0B5F-0B61\n0B66-0B70\n0B83\n0B85-0B8A\n0B8E-0B90\n0B92-0B95\n0B99-0B9A\n0B9C\n0B9E-0B9F\n0BA3-0BA4\n0BA8-0BAA\n0BAE-0BB5\n0BB7-0BB9\n0BBE-0BBF\n0BC1-0BC2\n0BC6-0BC8\n0BCA-0BCC\n0BD7\n0BE7-0BF2\n0C01-0C03\n0C05-0C0C\n0C0E-0C10\n0C12-0C28\n0C2A-0C33\n0C35-0C39\n0C41-0C44\n0C60-0C61\n0C66-0C6F\n0C82-0C83\n0C85-0C8C\n0C8E-0C90\n0C92-0CA8\n0CAA-0CB3\n0CB5-0CB9\n0CBE\n0CC0-0CC4\n0CC7-0CC8\n0CCA-0CCB\n0CD5-0CD6\n0CDE\n0CE0-0CE1\n0CE6-0CEF\n0D02-0D03\n0D05-0D0C\n0D0E-0D10\n0D12-0D28\n0D2A-0D39\n0D3E-0D40\n0D46-0D48\n0D4A-0D4C\n0D57\n0D60-0D61\n0D66-0D6F\n0D82-0D83\n0D85-0D96\n0D9A-0DB1\n0DB3-0DBB\n0DBD\n0DC0-0DC6\n0DCF-0DD1\n0DD8-0DDF\n0DF2-0DF4\n0E01-0E30\n0E32-0E33\n0E40-0E46\n0E4F-0E5B\n0E81-0E82\n0E84\n0E87-0E88\n0E8A\n0E8D\n0E94-0E97\n0E99-0E9F\n0EA1-0EA3\n0EA5\n0EA7\n0EAA-0EAB\n0EAD-0EB0\n0EB2-0EB3\n0EBD\n0EC0-0EC4\n0EC6\n0ED0-0ED9\n0EDC-0EDD\n0F00-0F17\n0F1A-0F34\n0F36\n0F38\n0F3E-0F47\n0F49-0F6A\n0F7F\n0F85\n0F88-0F8B\n0FBE-0FC5\n0FC7-0FCC\n0FCF\n1000-1021\n1023-1027\n1029-102A\n102C\n1031\n1038\n1040-1057\n10A0-10C5\n10D0-10F8\n10FB\n1100-1159\n115F-11A2\n11A8-11F9\n1200-1206\n1208-1246\n1248\n124A-124D\n1250-1256\n1258\n125A-125D\n1260-1286\n1288\n128A-128D\n1290-12AE\n12B0\n12B2-12B5\n12B8-12BE\n12C0\n12C2-12C5\n12C8-12CE\n12D0-12D6\n12D8-12EE\n12F0-130E\n1310\n1312-1315\n1318-131E\n1320-1346\n1348-135A\n1361-137C\n13A0-13F4\n1401-1676\n1681-169A\n16A0-16F0\n1700-170C\n170E-1711\n1720-1731\n1735-1736\n1740-1751\n1760-176C\n176E-1770\n1780-17B6\n17BE-17C5\n17C7-17C8\n17D4-17DA\n17DC\n17E0-17E9\n1810-1819\n1820-1877\n1880-18A8\n1E00-1E9B\n1EA0-1EF9\n1F00-1F15\n1F18-1F1D\n1F20-1F45\n1F48-1F4D\n1F50-1F57\n1F59\n1F5B\n1F5D\n1F5F-1F7D\n1F80-1FB4\n1FB6-1FBC\n1FBE\n1FC2-1FC4\n1FC6-1FCC\n1FD0-1FD3\n1FD6-1FDB\n1FE0-1FEC\n1FF2-1FF4\n1FF6-1FFC\n200E\n2071\n207F\n2102\n2107\n210A-2113\n2115\n2119-211D\n2124\n2126\n2128\n212A-212D\n212F-2131\n2133-2139\n213D-213F\n2145-2149\n2160-2183\n2336-237A\n2395\n249C-24E9\n3005-3007\n3021-3029\n3031-3035\n3038-303C\n3041-3096\n309D-309F\n30A1-30FA\n30FC-30FF\n3105-312C\n3131-318E\n3190-31B7\n31F0-321C\n3220-3243\n3260-327B\n327F-32B0\n32C0-32CB\n32D0-32FE\n3300-3376\n337B-33DD\n33E0-33FE\n3400-4DB5\n4E00-9FA5\nA000-A48C\nAC00-D7A3\nD800-FA2D\nFA30-FA6A\nFB00-FB06\nFB13-FB17\nFF21-FF3A\nFF41-FF5A\nFF66-FFBE\nFFC2-FFC7\nFFCA-FFCF\nFFD2-FFD7\nFFDA-FFDC\n10300-1031E\n10320-10323\n10330-1034A\n10400-10425\n10428-1044D\n1D000-1D0F5\n1D100-1D126\n1D12A-1D166\n1D16A-1D172\n1D183-1D184\n1D18C-1D1A9\n1D1AE-1D1DD\n1D400-1D454\n1D456-1D49C\n1D49E-1D49F\n1D4A2\n1D4A5-1D4A6\n1D4A9-1D4AC\n1D4AE-1D4B9\n1D4BB\n1D4BD-1D4C0\n1D4C2-1D4C3\n1D4C5-1D505\n1D507-1D50A\n1D50D-1D514\n1D516-1D51C\n1D51E-1D539\n1D53B-1D53E\n1D540-1D544\n1D546"),K=it("200F"),tt=it("05BE\n05C0\n05C3\n05D0-05EA\n05F0-05F4\n061B\n061F\n0621-063A\n0640-064A\n066D-066F\n0671-06D5\n06DD\n06E5-06E6\n06FA-06FE\n0700-070D\n0710\n0712-072C\n0780-07A5\n07B1\n200F\nFB1D\nFB1F-FB28\nFB2A-FB36\nFB38-FB3C\nFB3E\nFB40-FB41\nFB43-FB44\nFB46-FBB1\nFBD3-FD3D\nFD50-FD8F\nFD92-FDC7\nFDF0-FDFC\nFE70-FE74\nFE76-FEn i}var et;const nt='Helvetica, Arial, Tahoma, "Microsoft Yahei", 微软雅黑, STXihei, 华文细黑, sans-serif';let st=ent=void 0}setText(t,i,e,n){this.Ot=t,this.Lt=t.spans,e?this.Nt=new Map:this.Bi(),n||(this.style=t.style),this.mi(),this.Oi(!e),this.emitght":"left"}}Hi(){(0,e.cL)()&&(0,g.$q)(window.self.location.origin)?this.Wt=this.Vi.getBoundingClientRect().height/10||1:this.Wt=this.Vi.getBoundingClck",this.ci)}))}))}Wi(){var t;this.xi&&(null===(t=this.jt)||void 0===t?void 0:t.inEditMode)&&this.jt.selection.storeSelectionkedreturn et.Tn(e,K)}};st=et=(0,P.gn)([(0,P.fM)(3,(0,Y.f3)(2)),(0,P.fM)(4,(0,Y.f3)(28,{optional:!0})),(0,P.fM)(5,(0,Y.f3)(16,{optional:!0})),(0,P.fM)(6,(0,Y.f3)(31,{optional:!0})),(0,P.w6)("design:paramtypes",[Object,HTMLDivElement,Object,Object,Object,Object,Array])],st),(0,Y.GY)(2,{},st,"_env",3),(0,Y.GY)(28,{optional:!0},st,"editorState",4),(0,Y.GY)(16,{optional:!0},st,"editor",5);var rt,ot,ht,at=r(0x892d76eeaae7);!function(t){t.Joint="joint",t.Separatsaturate",t.Sgth="px",t.Percentage="%"}(ht||(ht={}));const ct={[ot.Blur]:{name:"Blur",icon:"filter-blur",unit:ht.Length,min:0,max:100},[ot.Contrast]:{name:"Contrast",icon:"filter-contrast",unit:ht.Percentage,min:0,max:200,default:100},[ot.Invert]:{name:"Invert",icon:"filter-invert",unit:ht.Percentage,min:0,max:100},[ot.Grayscale]:{name:"Grayscale",icon:"filter-grayscale",unit:ht.Percentage,min:0,max:100},[ot.Saturation]:{name:"Saturation",icon:"filter-saturate",unit:ht.Percentage,min:0,max:200,default:100},[ot.Sepia]:{name:"Sepia",icon:"filter-sepia",unit:ht.Percentage,min:0,max:100}},lt=(t,Object.assign({id:i},e)]),[]),[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),ut=Math.cos,dt=Math.sin,ft=Math.tatypeof n&&(i[e]=n)})),i}}var wt=r(662414620722391),bt=r(59420090704915);const yt=(0,O.MN)(["x","y","originX","originY","rotationX","rotationY","rotationZ","opacity","scaleX","scaleY","fill","radius","shadows","filters","textColor","border"]);var _t=r(344986060448ypeof t||isNaN(+t)?t:+t}}ct,i){return`${t.id}:${i}`}const Ot=["x","y","rotationX","rotationY","rotationZ"ndexOf(t)>-1}vao} ${o} 0 0 1 0 ${i-o} Z`}!function(t){t.ImageRemovedDuringLoad="Image was removed while loading",t.ImageLoadingFailed="Could not load image",t.ResizeObservableLoopLimit="ResizeObserver loop limit exceeded",t.ResizeObservableLoopCompleted="ResizeObserver loop completed with undelivered notifications"}(Vt||(Vt={}));const Yt={fit:"xMidYMid meet",crop:"xMidYMid slice",stretch:"none"},Xt="http://www.w3.org/2000/svg",Zt="http://www.w3.org/1999/xlink";var qt,Qt,Gt;!function(t){t.Shape="-shape",t.Group="-group",t.LinearGradient="-linear-gradient",t.Border="-border",t.Clip="-clip",t.Shadhadow=3]="SvgShadow"}(Qt||(Qt={}));let si=0,ri=Gt=class extends Z.v{get Yr(){return{width:this.viewTree.width,hew.bfstudio.inPreviewMode}get creativeDocument(){return this.Xr}constructor(t,i,e={},n,s,r,o){super(),this.container=t,this.Zr=n,this.feedStore=s,this.WidgetRenderer=r,this.ad=o,this.muted=!0,this.qr=new Map,this.Qr=0,this.loop=1,this.storedViewElements=new Map,this.Gr=!1,this.Kr=new Map,this.io=new Map,this.eo=!1,this.preloadingElements=new Map,this.logger=window.logger&&"bannerflow"===window.app?new window.logger("Renderer"+si++arget)||n.event(t,!0)}}))},this.ci=(t,i,e)=>{var n,s;if(this.isEditorMode)return;if(this.eo)return t.stopPropagation(),void(this.eo=!1);if(e){if(this.ro(t,e))return}this.Zr.STUDIO_JS||t.stopPropagation();const r=null!==(n=t.x)&&void 0!==n?n:0,o=null!==(s=t.y)&&void 0!==s?s:0;this.emit("click",{event:{x:r,y:o},deepLinkUrl:i})},thlues=()=>{this.Z(this.Qr)},this.setCreativeDocument(i),this.oo=e.versions,this.ho=e.inDesignView||!1,this.Ss=e.contentWindow||window,this.ao=this.Ss.document,this.co=this.ao.createElement("style"),this.ao.head.appendChild(this.co),this.lo=this.co.sheet,this.uo=this.ao.createDocumentFragment(),this.do(),this.fo=this.Zr.STUDIO_JS?new Map:void 0,this.Zr.STUDIO_JS&&this.feedStore&&this.feedStore.on("dataChanged",thindIndex((i=>i.id===t.id))}setCret.addEventListener("mousemove",this.no)}zrt){const i=this.xo(t);rause()})),i&&this.To(t))}Eo(t){var i,e;let n=t.__richTextRenderer;const s=t.__data;if(n)return void n.rerender();const r={feedStore:this.feedStore,element:s,viewElement:t,skipFontLoad:this.Ro,document:this.creativeDocument,inDesignView:this.ho},o={spans:(null===(i=s.__dirtyContent)||void 0===i?void 0:i.spans)||s.content.spans,style:(0,O.ei)(Object.assign(t,(null===(e=s.__dirtyContent)||void 0===e?void 0:e.style)||{}),"width","height",...V.Gc)},h=this.container.resolve(22);n=t.__richTextRenderer=h(o,t.__rootElement,r),n.n();const c=()=>{this.eisns=(argetUrl;break}}}catch(s){}this.ci(i,n,t)};t.__rootElement.addEootElement.removeEventListener("click",f)})),n.off("interactionsStarted",c),n.off("interactionsEnded",l),n.off("destroyed",u),n.off("spanClicked",d),n.on("interactionsStarted",c),n.on("interactionsEnded",l)s.Ho(s,t,n,e)}else s.opacity=0,this.Vo(s)}Ho(t,i,e,n=!0){var s,r,o,h,a,l,u,d;null===(s=this.logger)||void 0===s||s.debug(`_setViewElementValuesWithState[${i.name}]`);const f=(0,c.mO)(i);if(t.x=It("x",i,e,this.Wt),t.y=It("y",i,e,this.Wt),t.width=It("width",i,e,f?void 0:this.Wt),t.height=It("height",i,e,f?void 0:this.Wt),t.originX=It("originX",i,e),t.originY=It("originY",i,e),t.scaleX=It("scaleX",i,e,f?this.Wt:void 0),t.scaleY=It("scaleY",i,e,f?this.Wt:void 0),t.rotationX=It("rotationX",i,e),t.rotationY=It("rotationY",i,e),t.rotationZ=It("rotationZ",i,e),t.mirrorX=It("mirrorX",i,e),t.mirrorY=It("mirrorY",i,e),t.opacity=It("opacity",i,e),t.border=It("border",i,e,this.Wt),t.fill=It("fill",i,e),t.shadows=It("shadows",i,e,this.Wt),t.radius=It("radius",i,e,this.Wt),t.filters=It("filters",i,e),t.perspective=this.Uo(i),f&&1!==this.Wt&&(t.x-=t.width*(1-this.Wt)/2,t.y-=t.height*(1-this.Wt)/2),(0,c.$Q)(t)){const n=i;n.feed?(t.feed=It("feed",n,e),n.imageAsset=void 0):n.imageAsset&&(t.feed=n.feed=void 0),t.imageUrl=this.Oo(t.__data)}const p={};if((0,c.BM)(t)){const n={},s=["textColor"];for(consts.map((t=>Tt("TextShadow[]",t,this.Wt))))})),t.textColor=It("textColor",i,e),t.textShadows=It("textShadows",i,e,this.Wt),t.underline=It("underline",i,e),t.strikethrough=It("strikethrough",i,e),t.uppercase=It("uppercase",i,e),t.textOverflow=It("textOverflow",i,e),t.lineHeight=It("lineHeight",i,e),t.fontSize=It("fontSize",i,e,this.Wt),t.maxRows=It("maxRows",i,e),t.padding=It("padding",i,e,this.Wt),t.characterSpacing=It("characterSpacing",i,e),t.horizontalAlignment=It("horizontalAlignment",i,e),t.verticalAlignment=It("verticalAlignment",i,e);const c=i.__dirtyContent,d=null!==(r=null==c?void 0:c.style.fontSize)&&void 0!==r?r:t.fontSize,f=null!==(o=null==c?void 0:c.style.textShadows)&&void 0!==o?o:t.textShadows,v=null!==(h=null==c?void 0:c.style.padding)&&void 0!==h?h:t.padding;null===(a=t.__richTextRenderer)||void 0===a||a.ye("textShadows",f,t.__richTextRenderer.style),null===(l=t.__richTextRenderer)||void 0===l||l.ye("fontSize",d,t.__richTextRenderer.style),null===(u=t.__richTextRenderer)||void 0===u||u.ye("padding",v,t.__richTextRenderer.style);for(const i of s)p[i]=!(0,O.vZ)(t[i],n[i])}(0,c.iN)(t)&&t.__videoRenderer&&t.__videoRenderer.updateVideo(),f&&(0,c.mO)(t)&&(null===(d=i.__widget)||void 0===d||d.emit(wt.zu.ViewNots.some((({time:t})=>(0,I.wU)(i,t,.001)))}Vo(t,i){var e,n,s,r,o;const h=this.qr.get(t.elementCid);if(!h)throw new Error("Could not get stylerule for element. "+(this.Zr.STUDIO_JS?"This is most likely caused by the element no longer existing from an undo/redo.":""));const{current:a,previous:l}=h;a.rawStyleValue=this.Ao(t);const u=(0,O.xF)(l.rawStyleValue,a.rawStyleValue),d=["pointerEvents","transform","width","height","opacity","filter","visibility"];for(const c of d)c in u&&(t.__rootElement.style[c]=u[c]);if(u.backfaceVisibility&&(l.styleRule.style.backfaceVisibility=u.backfaceVisibility),(0,c.BM)(t)){const h=void 0!==u.width||void 0!==u.height;let a=!1;const c=null===(e=t.__richTextRenderer)||void 0===e?void 0:e.St;if(h||this.Wo&&c){const i=this.Mo(t.id);a=!!(null==c?void 0:c.elements.get(t.id))||!!(null===(n=t.__richTextRenderer)||void 0===n?void 0:n.Ot.spans.find((t=>"variable"===t.type)))||!!(null===(s=i.__dirtyContent)||void 0===s?void 0:s.spans.find((t=>"variable"===t.type)))}if(null==i?void 0:i.textColor){const i=t.textColor;null===(r=t.__richTextRenderer)||void 0===r||r.Bn({textColor:i})}(a||h)&&(null===(o=t.__richTextRenderer)||void 0===o||o.rerender(!1,t))}l.rawStyleValrror:i}})}}Mo(t){coreativeDocument.elements.find((i=>i.id===t));if(!i)throw new Error("Tried toiewElements.get(t.id)||ii(t,this)}Ct(t){this.muted=null!=t?t:>(t.gt(1,i),t.gt(0,n),new R(e,t)))),i}ri.go=0,ri=Gt=(0,P.gn)([(0,P.fM)(0,(0,Y.hL)()),(0,P.fM)(1,(0,Y.f3)(1)),(0,P.fM)(3,(0,Y.f3)(2)),(0,P.fM)(4,(0,Y.f3)(6)),(0,P.fM)(5,(0,Y.f3)(4)),(0,P.fM)(6,(0,Y.f3)(0)),(0,P.w6)("design:paramtypes",[m.W2,bt.EG,Object,Object,Object,Object,Object])],ri);var ui=r(6132 new Error("No document found");return i}constructor(t,i,r,o,h){this.ad=t,this.preloadAssets=r,this.xh=h,this.Fh=new Set,this.yh=!1,this.destroyed=!1,this.init=async()=>{var t;C("ac:init:start");const i=this.Ss;if(!i)throw new Error("Ad container is not visible");if(this.destroyed)return;this.Ch(),this.Ah=this.Eh();const e=new m.W2;e.gt(0,this.ad),e.gt(1,this.creativeDataNode),e.gt(2,this.env);const r=li(this.env);r.parent=e;const o=r.resolve(12);C("ac:init:load:features:start"),await Promise.all([oi(this.ad.selectedCreative.animated.files,this.ad.getOrigin(),r),n.b3.n((null===(t=this.env)||void 0===t?void 0:t.IMAGE_OPTIMIZER_ORIGIN)||"",this.ad.selectedCreative.animated.defaultOrigin),k.init(this.yh)]),C("ac:init:load:features:end");const h=o(this.creativeDataNode,{contentWindow:i,brandId:this.ad.data.brand.id},this.ad);let a=this.U();this.env.MODE===s.y.ImageGenerator&&(this.creativeDataNode.startTime=a),this.renderer=h.At,this.renderer.on("click",this.ci),h.St&&(C("ac:init:load:feeds:start"),this.feedStore=h.St,this.renderer.feedStore=this.feedStore,await this.Sh(),C("ac:init:load:feeds:end")),this.animator=h.Et,this.Oh(),this.Dh(),C("ac:init:render:start"),this.renderer.render(this.Ah,a,!0),C("ac:init:render:end");try{await this.Ae()}catch(c){console.error("Failed to preload fonts",c)}finally{C("ac:init:rerender:start"),this.renderer.qo(this.creativeDataNode),C("ac:init:rerender:end")}try{C("ac:init:load:elements:start");const t=[...this.renderer.preloadingElements.values()];if(Promise.allSettl>{if("rejected"===t.status)throw t.reason}))}else await Promise.all(t);C("ac:init:load:elements:end")}catch(l){const t=l;t.message?this.$h(t.message,{level:"error",contexts:{image:t.url?{url:t.url}:void 0,originalError:l}}):console.error(l)}if(this.Bh(),this.renderer.WidgetRenderer)try{C("ac:init:load:widgets:start"),await Promise.all(this.renderer.WidgetRenderer.widgetInitializingPromises),await Promise.all(this.renderer.WidgetRenderer.widgetLoadingPromises)}catch(l){let t,i="Unknown error.";l instanceof Error&&(i=l.message,t=l.contexts),"string"==typeof l&&(i=l),this.$h(i,{level:"error",contexts:t})}finally{C("ac:init:load:widgets:end")}C("ac:init:visibility:check"),this.jh()?(this.M,T.L&&this.kh(),i.clearInterval(this.Ih))}),10),"function"==typeof this.xh&&this.xh(this),C("ac:init:end")},this.ci=t=>{let i,e="";t instanceof MouseEvent?i=t:(i=t.event,e=t.deepLinkUrl);this.Th()&&(e?this.ad.tracking.click({x:i.x,y:i.y,deepLinkUrl:e}):this.ad.tracking.click(i))};try{const t=this.Rh(i);this.creativeDataNode=new bt.EG(t)}catch(a){throw new Error(`Could not prepare creative data: ${null==a?void 0:a.message}`)}try{this.Lh(Object.assign(Object.assign({},o),{MODE:s.y.AnimatedCreative}));const t=this.zh(),i=t.contentWindow;if(this.yh=!t.contentDocument||!!(0,g.qd)(this.ad.parameters.iframeless),this.yh)t.remove(),this.init();else{if(!i)return void console.warn("Did not initialize the creative, due to container element is not visible:\n",this.ad.container);(0,e.xE)(t),this._h=t,this.Ph(i,this.init)}}catch(a){throw new Error(`Could not initializ)(t)){this.hasWidgetElements=!0;break}}kh(){if(C("ac:animator:start"),!this.animator)return;const t=this.ad.shouldAutoplay();this.animator.seek(this.U());const e=(0,I.ot)(this.ad.parameters.fps);e&&this.animator.updateCustomFPSInterval(e),this.env.MODE===s.y.VideoGenerator&&(this.creativeDataNode.loops=1),this.ad.viewability.pauseOutsideView()?this.addOutOfViewEvents(t):t&&this.animator.play(),this.ad.on(i.Stop,(()=>{var t;null===(t=this.animator)||void 0===t||t.pause()})),C("ac:animator:end")}addOutOfViewEvents(t){var e;this.ad.on(i.ViewEnter,(()=>{var t;null===(t=this.animator)||void =(t=this.animator)||void 0===t||t.pause()})),this.ad.viewability.visible&&t&&(null===(e=this.animator)||void 0===e||e.play())}U(){var t,i;const e=parseFloat((null===(t=this.ad.parameters)||void 0===t?void 0:t.seek)||"");if(!isNaN(e))return Math.max(0,e);if(this.Nh()){const t=(null===(i=this.creativeDataNode.preloadImage)||void 0===i?void 0:i.frames)&&this.creativeDataNode.preloadImage.frames[0];return"number"==typeof t?t:1",e)};t.addEventListener("load",e)}}Oh(){const{animator:t,ad:e,renderer:n}=this;if(!(t&&e&&n))throw new Error("Failed to init event bubbling. Animator Ad or Renderer is missing");t.on("loop",(()=>e.emit(i.Loop,this.Hh()))),t.on("pause",(()=>e.emit(i.Pause,this.Hh()))),t.on("play",(()=>e.emit(i.Play,this.Hh()))),t.on("stop",(()=>e.emit(i.Stop,this.Hh()))),t.on("seek",((s.Hh()))),n.on("mute",(t=>e.emittime)||0,loop:(null==t?void 0:t.loop)||0}}Dh(){this.animator&&this.renderer&&(this.ad.adTagreturn this.ad.isDocumentJSVersion()}}})(),t=o})(),t}));