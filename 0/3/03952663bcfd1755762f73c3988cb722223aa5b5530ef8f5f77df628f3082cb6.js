import{k as ns,_ as ft,l as ae,m as at,b as ne,n./entry.a7cea746.js";import{l as q,r as w,c as i,q as ie,G as l,P as f,Y as a,a6 as C,z as e,x as d,I as P,a7 as V,_ as ds,an as xe,ao as ze,X as oe,H as E,Q as T,F as D,$ as O,R as x,W as pt,S as se,n as Fe,a1 as us,a3 as gt,N as j,O as Y,w as me,a4 as nt,bd as ot,b6 as ms,y as hs,a as vs,be as it}from"./graphql.5cf3693b.js";import{by as Ae,N as ve,ai as le,aa as _t,b5 as yt,aD as he,aA as z,as as L,a6 as bt,bk as fs,aC as ps,K as kt,aZ as gs,l as Ct,aw as St,q as _s,b6 as lt,b4 as wt,bd as ys,b8 as bs,bi as ks,bj as Cs,cm as rt,cn as Ss,co as ws,cp as Is,g as Ps,b0 as $s,aE as Ts,br as It,ay as De,u as Rs,ab as Es,a5 as Bs,bE as Ms,G as Ds,a1 as Hs,bg as ct,cq as xs,az as dt,cr as ut,cs as zs,ct as Fs,c2 as As}from"./itinerary-entities.5f897bcd.js";import{T as Ls,u as Ns,M as Os}from"./TripCard.62c89143.js";import{u as Vs}from"./useReload.488398cb.js";import{u as qs,d as Us}from"./index.308ba4bd.js";import{L as Ws,I as mt,S as js}from"./HotelCard.98b8f282.js";import{u as Ys,S as Zs}from"./useBillEntries.d5887e2b.js";import{M as ht,F as Ks}from"./MrBill.789931c4.js";import{F as Js}from"./FaqList.f0c8de76.js";import{R as Qs}from"./ReserveError.1a4bdf27.js";import{H as Gs}from"./HotelCardCarousel.9d8634a7.js";import{R as Ce,P as Xs}from"./itinerary-modules.2ea32123.js";import"./service-client.4862e840.js";import"./types.d8af116f.js";import"./RouteView.94d5f105.js";import"./SegmentView.f9955577.js";import"./pagination.83ca29fa.js";const ea=t=>(xe("data-v-a94b17c2"),t=t(),ze(),t),ta={class:"header"},sa=ea(()=>a("div",{class:"icon"},null,-1)),aa={class:"title"},na={class:"datepicker-body datepicker-wrapper"},oa=q({__name:"InventoryCalendar",props:{roomId:{}},emits:["close"],setup(t,{emit:s}){const o=Ae(),r=ve(),c=le(),m=w("jalali"),h=w({}),_=w(!1),u=i(()=>{switch(m.value){case"jalali":return 0;case"gregorian":return 1;default:return 0}}),p=i(()=>new Date(r.selectedPackages[0].fromDate||"")),v=i(()=>new Date(r.selectedPackages[0].toDate||"")),b=i(()=>{const R={configs:{}};return Object.keys(h.value).forEach(B=>{const F=h.value[B];R.configs[B]={label:F.isFull?c.t("RoomCard.full"):F.price?`${_t(F.price,{includeUnit:!1,unit:"KToman"})} ت`:"-",color:F.isFull?{main:"var(--red-400)"}:{},labelColor:F.isFull?{main:"var(--red-400)"}:{},background:F.isFull?{selected:"var(--red-400)",hover:"var(--red-300)"}:{}}}),R}),H=async()=>{_.value=!0,h.value=await o.getInventoryPriceList(t.roomId),_.value=!1},k=()=>{s("close")};return ie(()=>{H()}),(R,B)=>{const F=ft;return l(),f("div",{class:"datepicker-container",onClick:B[0]||(B[0]=ds(()=>{},["stop"]))},[a("div",ta,[sa,a("h4",aa,C(e(c).t("RoomCard.inventoryCalendar")),1),a("div",{class:"icon close",onClick:k},[d(he,{icon:e(yt),size:"large",color:"var(--gray-600)"},null,8,["icon"])])]),a("div",na,[d(F,null,{default:P(()=>[d(ns,{class:"inventory-calendar","model-value":{start:e(p),end:e(v)},"read-only":"",range:"","day-config":e(b).configs,"month-count":1,min:new Date,"current-calendar":e(u),loading:e(_),"disable-mobile-month-list":""},null,8,["model-value","day-config","min","current-calendar","loading"])]),_:1})]),d(z,{class:"close-button","full-width":"",onClick:k},{default:P(()=>[V(C(e(c).t("RoomCard.close")),1)]),_:1})])}}});const ia=L(oa,[["__scopeId","data-v-a94b17c2"]]),la=t=>(xe("data-v-9398fe71"),t=t(),ze(),t),ra={class:"title"},ca={key:0,class:"reserve-container"},da={class:"price-container"},ua={class:"price"},ma={class:"price-info-icon"},ha={class:"info-wrapper"},va={class:"date"},fa={class:"info-price"},pa={key:0,class:"off"},ga={class:"price"},_a={key:1,class:"full-capacity"},ya={class:"full"},ba={key:0,class:"choose-extra-bed-container"},ka=la(()=>a("div",{class:"extra-bed-title"},"مجموع تخت اضافه",-1)),Ca=q({__name:"PriceCard",props:{item:{},nights:{},hideReserve:{type:Boolean}},setup(t){const s=bt(),o=ve(),{day:r}=Ct(),c=w(null),m=fs(c),{open:h}=ps({component:ia,attrs:{roomId:t.item.id??"room"}}),_=St(),u=le(),p=i(()=>{const y=t.item.roomServiceTitle.filter(Boolean);return y.reduce((Q,M,W)=>`${Q}${M}${W+1<y.length?` ${u.t("RoomCard.and")} `:""}`,"")}),v=i(()=>{var Q;const y=o.selectedPackages[0];return(Q=y.selectedPrices)!=null&&Q.length?y.selectedPrices.filter(W=>W.id===t.item.id).length:0}),b=i(()=>t.item.hasExtraBed&&v.value>0&&!t.hideReserve),H=i(()=>v.value*t.item.extraBedCapacity),k=i(()=>o.getExtraPersonCounts(t.item)),R=i(()=>t.item.breakDownRoomPrices.map(y=>({payable:N(y.salePrice||0),undiscounted:t.item.discountedPrice&&y.boardPrice&&y.boardPrice>(y.salePrice||0)?N(y.boardPrice):void 0,date:fe(y.date)}))),B=y=>{o.changeExtraPerson({count:y,price:t.item}),s.loadPreInvoice(o.selectedPackages[0])},F=y=>{o.selectPriceClassForPackageIndex({priceClass:t.item,count:y,packageIndex:0}),s.loadPreInvoice(o.selectedPackages[0])},fe=y=>r.js(y).format(kt({format:"long"})),N=y=>_t(y,{includeUnit:!1}),pe=async()=>{_==null||_.trackEvent({event:"show-hotel-inventory-calendar"}),m.value=!0,await h(),m.value=!1};return(y,Q)=>(l(),f("div",{ref_key:"scrollLockContainer",ref:c,class:"price-card-wrapper"},[a("div",{class:x(["price-card-container",{full:!y.item.capacity}])},[a("span",ra,C(e(p)),1),y.hideReserve?T("",!0):oe(y.$slots,"reserve",{key:0},()=>[y.item.capacity>0?(l(),f("div",ca,[a("div",da,[y.item.discountedPrice?(l(),E(ae,{key:0,type:"discount",price:y.item.discountedPrice,percent:y.item.percent},null,8,["price","percent"])):T("",!0),a("div",ua,[d(ae,{type:"medium",prefix:`${y.nights} شب`,price:y.item.singlePayable},null,8,["prefix","price"]),a("div",ma,[y.item.breakDownRoomPrices.length?(l(),E(he,{key:0,icon:e(gs),color:"var(--blue-400)"},null,8,["icon"])):T("",!0),a("div",ha,[(l(!0),f(D,null,O(e(R),M=>(l(),f("div",{key:M.date,class:"info"},[a("p",va,C(M.date),1),a("div",fa,[M.undiscounted?(l(),f("del",pa,C(M.undiscounted),1)):T("",!0),a("span",ga,C(M.payable),1)])]))),128))])])])]),d(at,{"model-value":e(v),unit:"اتاق",max:y.item.capacity,class:"counter","start-button":"",size:{mobile:"medium",desktop:"big"},"onUpdate:modelValue":F},null,8,["model-value","max"])])):(l(),f("div",_a,[a("div",ya,C(e(u).t("RoomCard.fullCapacity")),1),d(z,{id:"click room calender-hdp",class:"counter",type:"bordered",size:"big",disabled:!y.item.id,onClick:pe},{default:P(()=>[V(C(e(u).t("RoomCard.inventoryCalendar")),1)]),_:1},8,["disabled"])]))],!0)],2),d(pt,null,{default:P(()=>[e(b)?(l(),f("div",ba,[ka,d(ae,{price:y.item.extraBedPrice,type:"small","mobile-type":"medium",prefix:"هر تخت",class:"bed-price"},null,8,["price"]),d(at,{"model-value":e(k),unit:"تخت اضافه",max:e(H),class:"counter",size:{mobile:"medium",desktop:"big"},"onUpdate:modelValue":B},null,8,["model-value","max"])])):T("",!0)]),_:1})],512))}});const vt=L(Ca,[["__scopeId","data-v-9398fe71"]]),Sa={class:"room-card-container"},wa={class:"header"},Ia={class:"title"},Pa={class:"options-list"},$a={class:"body"},Ta={class:"prices"},Ra={class:"amenity"},Ea=q({__name:"RoomCard",props:{item:{},nights:{},hideReserve:{type:Boolean}},setup(t){const s=le(),o=w(null),r=w(!1),c=w(!1),m=i(()=>t.item.title||""),h=i(()=>{var p;const u=(p=t.item.roomConfigs[0])==null?void 0:p.doubleBedCount;return[{id:"capacity",title:`${t.item.capacity} ${s.t("RoomCard.individual")}`},{id:"double-bed",title:`${u} ${s.t("RoomCard.doubleBed")}`,condition:!!u},{id:"extra-bed",title:s.t("RoomCard.extraBed"),condition:t.item.hasExtraBed}].filter(v=>v.condition!==!1)}),_=i(()=>new _s({availableRoomCount:0,totalPrice:0},{hasExtraBed:t.item.hasExtraBed,extraBedCapacity:0,checkoutHour:"",checkinHour:"",uniqueId:""}));return ie(()=>{var u,p;r.value=((u=o.value)==null?void 0:u.clientHeight)!==((p=o.value)==null?void 0:p.scrollHeight)}),(u,p)=>(l(),f("div",Sa,[u.item.image?(l(),E(lt,{key:0,src:u.item.image.original||u.item.image.large||u.item.image.small||void 0,hash:u.item.image.blurhash,height:120,"border-radius":"8px",class:"room-image-mobile","image-fit":"cover"},null,8,["src","hash"])):T("",!0),a("div",wa,[oe(u.$slots,"header-start",{},void 0,!0),a("h3",Ia,C(e(m)),1),a("div",Pa,[(l(!0),f(D,null,O(e(h),v=>(l(),f("span",{key:v.id,class:"option"},C(v.title),1))),128))])]),u.hideReserve?T("",!0):(l(),E(ne,{key:1,thickness:"1px",margin:"8px",class:"mobile-divider"})),a("div",$a,[u.item.image?(l(),E(lt,{key:0,src:u.item.image.original||u.item.image.large||u.item.image.small||void 0,hash:u.item.image.blurhash,width:160,height:100,"border-radius":"8px",class:"room-image-desktop","image-fit":"cover"},null,8,["src","hash"])):T("",!0),a("div",Ta,[u.item.classes.length?(l(!0),f(D,{key:0},O(u.item.classes,v=>(l(),E(vt,{key:v.id??void 0,item:v,nights:u.nights,class:"price","hide-reserve":u.hideReserve},{reserve:P(()=>[oe(u.$slots,"reserve",{},void 0,!0)]),_:2},1032,["item","nights","hide-reserve"]))),128)):(l(),E(vt,{key:1,item:e(_),nights:u.nights},null,8,["item","nights"])),u.item.roomAmenities.length?(l(),f(D,{key:2},[d(ne,{margin:"4px",thickness:"1px",class:"amenities-divider"}),a("div",{ref_key:"container",ref:o,class:x(["amenities-container",{expanded:e(c)}])},[(l(!0),f(D,null,O(u.item.roomAmenities,(v,b)=>(l(),f(D,{key:v+b},[a("span",Ra,C(v),1),b!==u.item.roomAmenities.length-1?(l(),E(ne,{key:0,margin:"0",thickness:"1px",vertical:"",class:"amenity-divider"})):T("",!0)],64))),128)),e(r)?(l(),E(z,{key:0,size:"small",type:"transparent",class:x(["expand",{expanded:e(c)}]),onClick:p[0]||(p[0]=v=>c.value=!e(c))},{default:P(()=>[V(C(e(c)?"کمتر":"بیشتر"),1)]),_:1},8,["class"])):T("",!0)],2)],64)):T("",!0)])])]))}});const Pt=L(Ea,[["__scopeId","data-v-8147915b"]]),Ba={class:"packaged-rooms-card"},Ma={class:"rooms-list"},Da={class:"pricing"},Ha=q({__name:"PackagedRoomsCard",props:{roomsPackage:{},defaultRoomsPackage:{default:null},nights:{default:1},isSelected:{type:Boolean}},emits:["select"],setup(t,{emit:s}){const{isMobileSize:o}=wt(),r=i(()=>{var c;return t.roomsPackage.payablePrice-(((c=t.defaultRoomsPackage)==null?void 0:c.payablePrice)||0)});return(c,m)=>(l(),f("div",Ba,[a("div",Ma,[(l(!0),f(D,null,O(c.roomsPackage.roomsList,(h,_)=>(l(),f(D,{key:h.room.id},[_>0?(l(),E(ne,{key:0,margin:0})):T("",!0),d(Pt,{class:"room-card",item:h.room,nights:c.nights,"hide-reserve":""},{"header-start":P(()=>[d(Ws,{label:{title:`${h.count} اتاق`,backgroundColor:"var(--cool-gray-100)",color:"var(--cool-gray-600)"}},null,8,["label"])]),_:2},1032,["item","nights"])],64))),128))]),d(ne,{vertical:!e(o),margin:0},null,8,["vertical"]),a("div",Da,[d(ys,{class:"mobile-radio","model-value":c.isSelected,label:"انتخاب اتاق‌ها","is-radio":"",onClick:m[0]||(m[0]=h=>s("select"))},null,8,["model-value"]),d(ae,{price:e(r),prefix:`${c.nights} شب`,sign:"+"},null,8,["price","prefix"]),d(z,{class:"desktop-button","full-width":"",type:c.isSelected?"bordered":"filled","right-icon":c.isSelected?e(bs):void 0,onClick:m[1]||(m[1]=h=>s("select"))},{default:P(()=>[V(C(c.isSelected?"انتخاب شده ":"انتخاب اتاق‌ها"),1)]),_:1},8,["type","right-icon"])])]))}});const xa=L(Ha,[["__scopeId","data-v-6746f572"]]),za={class:"map-container"},Fa={class:"map-section-container"},Aa={class:"map-zoom"},La=q({__name:"MapView",props:{isLoading:{type:Boolean},center:{}},emits:["close"],setup(t,{emit:s}){const o=w(16);function r(){o.value<32&&o.value++}function c(){o.value>1&&o.value--}return(m,h)=>(l(),f("div",za,[a("section",Fa,[d(e(is),{class:"google-map",center:m.center,zoom:m.isLoading?6:e(o),options:{zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUI:!1,gestureHandling:"greedy",clickableIcons:!1}},{default:P(()=>[d(e(os),{position:m.center},null,8,["position"])]),_:1},8,["center","zoom"]),d(z,{class:"close-fullscreen-button","right-icon":e(yt),size:"small",onClick:h[0]||(h[0]=_=>s("close"))},{default:P(()=>[V(" بستن تمام صفحه ")]),_:1},8,["right-icon"]),a("div",Aa,[d(z,{class:"inc-zoom","icon-button":e(ks),size:"big",onClick:r},null,8,["icon-button"]),d(z,{class:"dec-zoom","icon-button":e(Cs),size:"big",onClick:c},null,8,["icon-button"])])])]))}});const Na=L(La,[["__scopeId","data-v-9308bc2c"]]),Oa={class:"bundle-trips-card"},Va={class:"trip-card-pricing"},qa=q({__name:"BundleTripsCard",setup(t){const s=le(),o=ve(),{day:r}=Ct(),c=w(null),m=i(()=>o.selectedPackages.filter(_=>_.isTripPackage()).map((_,u)=>({pkg:_,label:h(u,_)}))),h=(_,u)=>{var b;const p=r.js((b=u.firstTrip)==null?void 0:b.departureDateTime).format(kt({format:"long"}));let v="";switch(_){case 0:v=s.t("SelectedCards.departure");break;case 1:v=s.t("SelectedCards.return");break;default:v=s.t("SelectedCards.path",{index:_});break}return v+=` (${p})`,v};return(_,u)=>(l(),f("div",Oa,[(l(!0),f(D,null,O(e(m),({pkg:p,label:v},b)=>(l(),E(Ls,{key:b,class:"trip-card","trip-package":p,"is-open-details":e(c)===b,"hide-invoice":"","hide-capacity":"","custom-label":v,onShowDetails:()=>c.value=b,onHideDetails:u[0]||(u[0]=()=>c.value=null)},{pricing:P(()=>[a("div",Va,[d(ae,{price:0,sign:"+"})])]),_:2},1032,["trip-package","is-open-details","custom-label","onShowDetails"]))),128))]))}});const Ua=L(qa,[["__scopeId","data-v-007613df"]]),Wa={class:"point"},ja=q({__name:"Points",props:{value:{},size:{default:"medium"}},setup(t){const s=i(()=>t.value<=3.5?"var(--yellow-500)":t.value<=7?"var(--gray-600)":"var(--green-500)"),o=i(()=>t.value?t.value<=3.5?Ss:t.value<=6.1?rt:t.value<=7?ws:Is:rt);return(r,c)=>(l(),f("div",{class:x(["points-container",[{hide:!r.value},r.size]]),style:se({"--color":e(s)})},[d(he,{icon:e(o),color:e(s),size:r.size},null,8,["icon","color","size"]),a("div",Wa,C(r.value),1)],6))}});const He=L(ja,[["__scopeId","data-v-db69227a"]]),Ya={class:"header"},Za={class:"customer"},Ka=q({__name:"CommentView",props:{item:{}},setup(t){const s=w(null),o=w(!1),r=w(!0),c=w(!1);ie(()=>{Fe(()=>{var h;o.value=(((h=s.value)==null?void 0:h.offsetHeight)||0)>60,r.value=!1})});function m(){c.value=!0}return(h,_)=>(l(),f("div",{class:x(["comment-container",{"loading-skeleton":e(r)}])},[a("div",Ya,[a("span",Za,C(h.item.customer||""),1),h.item.rating?(l(),E(He,{key:0,value:h.item.rating,size:"medium"},null,8,["value"])):T("",!0)]),a("div",{ref_key:"content",ref:s,class:x(["content",{collapsed:!e(c)}])},[V(C(h.item.comment||"")+" ",1),e(o)&&!e(c)?(l(),E(z,{key:0,size:"small",type:"transparent",class:"expand",onClick:m},{default:P(()=>[V(" ادامه... ")]),_:1})):T("",!0)],2)],2))}});const Ja=L(Ka,[["__scopeId","data-v-4860346c"]]);var Qa=4,Ga=.001,Xa=1e-7,en=10,ue=11,Se=1/(ue-1),tn=typeof Float32Array=="function";function $t(t,s){return 1-3*s+3*t}function Tt(t,s){return 3*s-6*t}function Rt(t){return 3*t}function we(t,s,o){return(($t(s,o)*t+Tt(s,o))*t+Rt(s))*t}function Et(t,s,o){return 3*$t(s,o)*t*t+2*Tt(s,o)*t+Rt(s)}function sn(t,s,o,r,c){var m,h,_=0;do h=s+(o-s)/2,m=we(h,r,c)-t,m>0?o=h:s=h;while(Math.abs(m)>Xa&&++_<en);return h}function an(t,s,o,r){for(var c=0;c<Qa;++c){var m=Et(s,o,r);if(m===0)return s;var h=we(s,o,r)-t;s-=h/m}return s}function nn(t){return t}var on=function(s,o,r,c){if(!(0<=s&&s<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(s===o&&r===c)return nn;for(var m=tn?new Float32Array(ue):new Array(ue),h=0;h<ue;++h)m[h]=we(h*Se,s,r);function _(u){for(var p=0,v=1,b=ue-1;v!==b&&m[v]<=u;++v)p+=Se;--v;var H=(u-m[v])/(m[v+1]-m[v]),k=p+H*Se,R=Et(k,s,r);return R>=Ga?an(u,k,s,r):R===0?k:sn(u,p,p+Se,s,r)}return function(p){return p===0?0:p===1?1:we(_(p),o,c)}};const ln=Ps(on),rn={name:"NavSpa",props:{activeClass:{type:String,default:"active"},alwaysTrack:{type:Boolean,default:!1},bezierEasingValue:{type:String,default:".5,0,.35,1"},duration:{type:Number,default:500},enabled:{type:Boolean,default:!0},enabledSmoothScroll:{type:Boolean,default:!0},highlightFirstItem:{type:Boolean,default:!0},link:{type:String,default:'a[href^="#"]'},offset:{type:Number,default:0},scrollContainer:{type:String,default:null},pushMethod:{type:String,default:"pushState",validator:t=>["pushState","replaceState"].includes(t)},tag:{type:String,default:"nav"},updateHash:{type:Boolean,default:!0}},emits:["itemChanged"],data(){return{observer:null,items:[],currentItem:null,lastItem:null,scrollAnimationFrame:null,bezierEasing:ln}},computed:{cubicBezierArray(){return this.bezierEasingValue.split(",")},getScrollContainer(){let t=window;return this.scrollContainer&&(t=document.querySelector(this.scrollContainer)||window),t}},mounted(){this.initObserver(),this.initItems(),this.removeActiveClass(),this.currentItem=this.getItemInsideWindow(),this.currentItem&&this.currentItem.classList.add(this.activeClass),this.scrollToHashElement(),this.scrollToHashElement(),this.getScrollContainer.addEventListener("scroll",this.onScroll),this.getScrollContainer.addEventListener("popstate",this.onPopState)},updated(){this.initItems()},beforeUnmount(){this.getScrollContainer.removeEventListener("scroll",this.onScroll),window.cancelAnimationFrame(this.scrollAnimationFrame)},methods:{getItemInsideWindow(){let t;return[].forEach.call(this.items,s=>{const o=s===this.items[0],r=document.getElementById(decodeURI(s.hash.substr(1)));if(!r)return;const c=this.getScrollContainer.scrollTop||window.pageYOffset,m=c>=this.getOffsetTop(r)-this.offset,h=c<this.getOffsetTop(r)-this.offset+r.offsetHeight;o&&this.highlightFirstItem&&h&&(t=s),this.exact&&m&&h&&(t=s),!this.exact&&m&&(t=s)}),t},getOffsetTop(t){let s=0,o=t;for(;o;)s+=o.offsetTop,o=o.offsetParent;return this.getScrollContainer.offsetTop&&(s-=this.getScrollContainer.offsetTop),s},handleClick(t){const{hash:s}=t.currentTarget,o=document.getElementById(decodeURI(s.substr(1)));o&&(this.enabledSmoothScroll&&t.preventDefault(),this.alwaysTrack||(this.getScrollContainer.removeEventListener("scroll",this.onScroll),window.cancelAnimationFrame(this.scrollAnimationFrame),this.removeActiveClass(),t.currentTarget.classList.add(this.activeClass)),this.scrollTo(o).then(()=>{if(!this.alwaysTrack){this.getScrollContainer.addEventListener("scroll",this.onScroll);const r=c=>decodeURI(c.hash.substr(1))===o.id;this.currentItem=[].find.call(this.items,r),this.currentItem!==this.lastActiveItem&&(this.$emit("itemChanged",null,this.currentItem,this.lastActiveItem),this.lastActiveItem=this.currentItem)}this.updateHash&&this.pushHashToUrl(s)}))},initObserver(){const t=window.MutationObserver||window.WebKitMutationObserver;this.observer||(this.observer=new t(this.initItems),this.observer.observe(this.$el,{childList:!0,subtree:!0}))},initItems(){if(this.items=document.body.querySelectorAll(this.link),this.enabled){[].forEach.call(this.items,t=>{t.addEventListener("click",this.handleClick)});return}[].forEach.call(this.items,t=>{t.removeEventListener("click",this.handleClick)})},onPopState(){const{hash:t}=window.location;if((!t||t==="")&&!this.highlightFirstItem)return;if(!t&&this.highlightFirstItem){this.scrollTo(document.getElementsByTagName("body")[0]);return}const s=document.querySelector(decodeURI(t));s&&this.scrollTo(s)},onScroll(t){this.currentItem=this.getItemInsideWindow(),this.currentItem!==this.lastActiveItem&&(this.removeActiveClass(),this.$emit("itemChanged",t,this.currentItem,this.lastActiveItem),this.lastActiveItem=this.currentItem),this.currentItem&&this.currentItem.classList.add(this.activeClass)},pushHashToUrl(t){if(window.history.pushState||window.history.replaceState){this.pushMethod==="pushState"?window.history.pushState(null,null,t):window.history.replaceState(null,null,t);return}window.location.hash=t},removeActiveClass(){[].forEach.call(this.items,t=>{t.classList.remove(this.activeClass)})},scrollTo(t){return new Promise(s=>{this.enabledSmoothScroll||s();const o=this.getOffsetTop(t),r=this.getScrollContainer.scrollTop||window.pageYOffset,c=o-r,m=this.bezierEasing(...this.cubicBezierArray);let h=null;const _=u=>{h||(h=u);let p=u-h,v=p/this.duration;p>=this.duration&&(p=this.duration),v>=1&&(v=1);const b=this.scrollOffset||this.offset,H=r+m(v)*(c-b);this.getScrollContainer.scrollTo(0,H),p<this.duration?this.scrollAnimationFrame=window.requestAnimationFrame(_):s()};window.requestAnimationFrame(_)})},scrollToHashElement(){const{hash:t}=window.location;if(!t)return;const s=document.querySelector(decodeURI(t));s&&(window.location.hash="",setTimeout(()=>{const o=s.offsetTop-this.offset;this.getScrollContainer.scrollTo(0,o),this.pushHashToUrl(t)},0))}}};function cn(t,s,o,r,c,m){return l(),E(us(o.tag),{class:"nav-spa"},{default:P(()=>[oe(t.$slots,"default")]),_:3})}const dn=L(rn,[["render",cn]]),un={class:"content-navigation-root"},mn=["href"],hn=q({__name:"ContentNavigation",props:{tabs:{default:()=>[]},stopElementId:{default:""},itemsMinWidth:{default:600},offsetWidth:{default:350}},setup(t,{expose:s}){const o=gt(),r=w(null),c=w(null),m=w(!1),h=w(!1),_=w(0),u=w(5e4),p=w(null);s({scrollTo:k=>{o.replace(k)}});const b=()=>{window.addEventListener("scroll",()=>{var R,B;m.value?m.value=(((B=r.value)==null?void 0:B.getBoundingClientRect().top)||0)<=0:m.value=(((R=c.value)==null?void 0:R.getBoundingClientRect().top)||0)<=0;const k=document.getElementById(t.stopElementId);h.value=!!(k!=null&&k.offsetTop&&k.offsetTop-160<=window.pageYOffset)})},H=(k,R)=>{p.value&&(window.clearTimeout(p.value),p.value=null),p.value=window.setTimeout(()=>{R==null||R.scrollIntoView({behavior:"smooth",inline:"nearest"})},500)};return ie(()=>{Fe(()=>{var k,R,B;_.value=((k=c.value)==null?void 0:k.offsetHeight)||0,u.value=((R=r.value)==null?void 0:R.offsetWidth)||((B=c.value)==null?void 0:B.offsetWidth)||0}),b()}),(k,R)=>(l(),f("div",un,[a("div",{ref_key:"navigationContainer",ref:c,class:x(["navigation-wrapper",{sticky:e(m),"hide-header":e(h)}]),style:se({"--min-width":`${k.itemsMinWidth}px`,"--offset-width":`${k.offsetWidth}px`})},[a("div",{class:"navigation-container main",style:se({width:`${e(u)}px`})},[d(dn,{style:se({"max-width":`${e(u)}px`}),"active-class":"is-active",offset:150,duration:800,"bezier-easing-value":".5,0,.35,1",class:"my-nav","push-method":"replaceState",onItemChanged:H},{default:P(()=>[(l(!0),f(D,null,O(k.tabs,B=>(l(),f("a",{key:B.href,class:"scroll-active-item",href:B.href},[a("span",null,C(B.title),1)],8,mn))),128))]),_:1},8,["style"])],4)],6),j(a("div",{ref_key:"empty",ref:r,style:se({height:`${e(_)}px`})},null,4),[[Y,e(m)]])]))}});const vn=L(hn,[["__scopeId","data-v-3c735c39"]]),fn={key:0},pn={key:0,class:"expanding-container"},gn=q({__name:"ExpandableCard",props:{title:{default:""},defaultHeight:{default:218},expandButtonId:{},defaultOpen:{type:Boolean},moreTitle:{default:"مطالعه بیشتر"},paddingMobile:{default:20},dataValue:{},disabled:{type:Boolean}},emits:["toggle"],setup(t,{emit:s}){const o=w(null),r=w(t.defaultOpen),c=w(100),m=w(!0),h=i(()=>m.value?`${r.value?c.value:t.defaultHeight}px`:null),_=i(()=>r.value?$s:Ts),u=()=>{r.value=!r.value,s("toggle")},p=()=>{Fe(()=>{var H;const b=((H=o.value)==null?void 0:H.clientHeight)||0;c.value=b+200,b&&(m.value=t.defaultHeight<b)})};me(()=>t.dataValue,()=>{p()},{immediate:!0}),me(()=>t.disabled,b=>{b&&(m.value=!1)},{immediate:!0}),ie(()=>{p()});const v=le();return(b,H)=>(l(),f("div",{class:x(["expandable-card-container",{expanded:e(r)}]),style:se({"max-height":e(h)??"unset","--padding-mobile":`${b.paddingMobile}px`})},[oe(b.$slots,"header",{},()=>[b.title?(l(),f("h4",fn,C(b.title),1)):T("",!0)],!0),a("div",{ref_key:"content",ref:o,class:"content-container"},[oe(b.$slots,"default",{},void 0,!0)],512),e(m)?(l(),f("div",pn,[d(z,{id:b.expandButtonId,class:"expand-button",type:"transparent","left-icon":e(_),size:"medium",onClick:u},{default:P(()=>[V(C(e(r)?e(v).t("ExpandableCard.close"):b.moreTitle),1)]),_:1},8,["id","left-icon"])])):T("",!0)],6))}});const te=L(gn,[["__scopeId","data-v-dc748160"]]),_n={id:"similar",class:"root"},yn={class:"title"},bn=q({__name:"HotelNearby",setup(t){const s=Ae(),{isLoadingNearbyHotels:o,nearbyHotels:r}=It(s),c=ve(),{selectedPackages:m}=De(c),h=i(()=>m.value.length?m.value[0]:s.getEmptyHotelPackage());return(_,u)=>j((l(),f("div",_n,[a("h2",yn,"هتل‌های مشابه "+C(e(h).title),1),d(Gs,{items:e(r),"hide-buttons":"","no-margin":"","is-loading":e(o),"have-loading":"","reserve-event-name":"nearby-hotel-click","mobile-offset-around":12,"mobile-disable-swiper":""},null,8,["items","is-loading"])],512)),[[Y,e(o)||e(r).length]])}});const kn=L(bn,[["__scopeId","data-v-02e875ed"]]),J=t=>(xe("data-v-b773b6b7"),t=t(),ze(),t),Cn={class:"hotel-page-container"},Sn={class:"hotel-page-header-wrapper"},wn={class:"hotel-page-header"},In={class:"header-breadcrumb-wrapper"},Pn={class:"page-root"},$n={class:"right-container"},Tn={key:0,id:"select-trips"},Rn=J(()=>a("div",{class:"select-trips-title"},"پرواز شما اضافه شد!",-1)),En={class:"title"},Bn=J(()=>a("div",{class:"rooms-loading loading-skeleton"},null,-1)),Mn=J(()=>a("div",{class:"rooms-loading loading-skeleton"},null,-1)),Dn=J(()=>a("div",{class:"rooms-loading loading-skeleton"},null,-1)),Hn={key:3},xn={id:"attractions",class:"section-container"},zn=J(()=>a("h2",{class:"title"},"فاصله تا نقاط مهم",-1)),Fn={class:"attractions-content"},An={class:"attraction-list"},Ln={class:"title"},Nn={class:"distance"},On=["src"],Vn={key:1,id:"comments",class:"section-container"},qn={class:"title"},Un={class:"comments-content"},Wn={key:2,id:"amenities",class:"section-container"},jn=J(()=>a("h2",{class:"title"},"امکانات و ویژگی‌ها",-1)),Yn={class:"amenities-content"},Zn={class:"title"},Kn={id:"intro",class:"section-container"},Jn={class:"title"},Qn=["innerHTML"],Gn={id:"rules",class:"section-container"},Xn={class:"title"},eo={class:"rules-content"},to={class:"times"},so={class:"content"},ao={class:"left-container"},no={class:"section-container details-content"},oo={class:"ratings"},io={class:"address-container"},lo={class:"address"},ro={class:"section-container date-invoice"},co=J(()=>a("div",{id:"stop"},null,-1)),uo={key:1,id:"faq",class:"faq-section"},mo=J(()=>a("span",{class:"title"},"سؤالات متداول",-1)),ho={class:"ma-0"},vo=q({__name:"hotelPage",props:{reserveType:{}},async setup(t){let s,o;const r=nt(),c=gt(),m=Rs(),h=Es(),{searchResultFaqs:_,searchResultDescription:u}=De(h),p=Bs(),v=bt(),{preInvoiceTotalPrice:b}=De(v),H=Ae(),k=ve(),R=Ms(),{selectedBundlePackage:B}=It(R),F=w(null),fe=w(null),N=St(),{preBillDiscounts:pe,preBillEntries:y,preBillLoading:Q}=Ys(),{isMobileSize:M}=wt(),W=w(!1),Ie=w(!1),Bt=le(),Mt=Ds(),Dt=Hs();Ns();const G=w({start:new Date,end:new Date}),Le=i(()=>{const n=nt();return t.reserveType?t.reserveType:n.path.includes("tour/residence")?Ce.Bundle:Ce.Hotel}),Z=i(()=>Le.value===Ce.Bundle),ge=i(()=>Le.value===Ce.Hotel),$=i(()=>Z.value?R.getHotelStore():H),g=i(()=>k.selectedPackages.length?k.selectedPackages[0]:$.value.getEmptyHotelPackage()),Ht=i(()=>g.value.cityTitle),K=i(()=>{var n,I;return ge.value?((n=g.value)==null?void 0:n.title)||"":`${((I=g.value)==null?void 0:I.title)||""} و هواپیما`}),xt=i(()=>{var n;return((n=B.value)==null?void 0:n.defaultRoomsPackage)||null}),zt=i(()=>$.value.currentSelectedPackageId),Ft=i(()=>[{href:"#select-trips",title:`انتخاب ${R.bundleVehicleTypeTitle}`,condition:Z},{href:"#rooms",title:"انتخاب اتاق"},{href:"#attractions",title:"فاصله تا نقاط مهم"},{title:"نظرات کاربران",href:"#comments",condition:!!ke.value.length},{href:"#amenities",title:"امکانات و ویژگی‌ها",condition:!!ye.value.length},{title:"معرفی هتل",href:"#intro"},{title:"قوانین و مقررات",href:"#rules",condition:!1},{title:"سؤالات متداول",href:"#faq",condition:!!Re.value[0].items.length&&!1},{href:"#similar",title:"هتل‌های مشابه",condition:!1}].filter(n=>n.condition!==!1)),X=i(()=>$.value.isLoadingHotelInfo),re=i(()=>X.value?"loading-skeleton":""),At=i(()=>({lat:qt.value,lng:Ut.value})),_e=i(()=>({start:new Date(g.value.fromDate||""),end:new Date(g.value.toDate||"")})),Lt=i(()=>new Date),Nt=i(()=>ge?`رزرو ${g.value.title||""}`:`${g.value.title||""} و هواپیما`),Ne=i(()=>g.value.percentStar),Pe=i(()=>g.value.points10||0),Oe=i(()=>g.value.address),ye=i(()=>g.value.amenities.filter(n=>n.title.length<30)),be=i(()=>g.value.photos),$e=i(()=>g.value.description),ce=i(()=>g.value.popularPlaces||[]),Ve=i(()=>g.value.message),ee=i(()=>g.value.prices),qe=i(()=>g.value.roomsPackageList),Te=i(()=>g.value.nights),Ue=i(()=>g.value.termsAndConditions),Ot=i(()=>g.value.checkinHour),Vt=i(()=>g.value.checkoutHour),ke=i(()=>g.value.hotelName==="jamali-mashhad"?g.value.comments.filter(n=>n.rating&&n.rating>4):g.value.comments),qt=i(()=>g.value.latitude),Ut=i(()=>g.value.longitude),Re=i(()=>[{title:"",items:[...g.value.faqs.map(n=>({title:n.question||"",value:n.answer||"",noSchema:!0}))||[],..._.value.map(n=>({title:n.question||"",value:n.answer||""}))]}]),de=i(()=>X.value||$.value.isLoadingRooms!==!1),Ee=i(()=>g.value.selectedPricesWithPriceClass||[]),We=i(()=>W.value||Ee.value.length?"ادامه فرایند رزرو":"مشاهده اتاق‌ها"),je=i(()=>W.value&&!Be.value),Be=i(()=>!!Ee.value.length),Wt=i(()=>W.value||Be.value),jt=i(()=>[{link:"/hotel",title:"رزرو هتل"},{link:`/hotel/${g.value.cityName}`,title:`هتل های شهر ${g.value.cityTitle}`},{link:r.path,title:K.value}]),Ye=i(()=>{var n,I;return Z?((n=B.value)==null?void 0:n.singlePayable)??0:((I=Ze.value)==null?void 0:I.price)||0}),Yt=i(()=>Z?"قیمت برای یک بزرگسال از":`${Te.value} شب اتاق ${Zt.value} تخته، قیمت از`),Zt=i(()=>{var n;return((n=Ze.value)==null?void 0:n.rooms)||0}),Ze=i(()=>{if(ee.value.length)return ee.value.filter(n=>n.cheapestPriceClass).map(n=>({price:n.cheapestPriceClass.singlePayable,rooms:n.capacity})).reduce((n,I)=>n===void 0?I:n.price<I.price?n:I,void 0)}),Ke=i(()=>g.value.mapImage),Je=i(()=>({...r.params,...r.query})),Qe=()=>{var I;const n=F;if((I=n.value)!=null&&I.clientHeight){const A=window.pageYOffset+window.innerHeight+48;W.value=A>n.value.offsetTop&&A<n.value.offsetTop+n.value.clientHeight+window.innerHeight}else W.value=!1},Ge=()=>{c.push("/hotel")},Kt=()=>{var n;(n=fe.value)==null||n.$el.scrollIntoView({behavior:"smooth"})},Xe=()=>{As({id:"rooms"})},Me=()=>{if(!Be.value){Xe();return}N==null||N.trackEvent({event:"add_to_cart"}),p.itineraryPackages=k.selectedPackages,$.value.setPaxTypeCount({type:Xs.Adult,count:Ee.value.length}),N==null||N.trackEvent({event:"click reserve button-hdp"}),Z&&k.hasRaisePage?c.push("/reserve/raise"):c.push("/reserve/form")},Jt=()=>{Wt.value?Me():Xe()},Qt=n=>{var A,S;if(!n||!n.start||!n.end||n.start.getTime()===((A=_e.value.start)==null?void 0:A.getTime())&&n.end.getTime()===((S=_e.value.end)==null?void 0:S.getTime()))return;const I=$.value.parsePath(Je.value);I&&n.start&&n.end&&(v.clearAllEntries(),$.value.changeCurrentSelectedPackageInfo({fromDate:n.start.toISOString(),toDate:n.end.toISOString()}),$.value.loadCurrentSelectedPackageRooms(),c.replace({path:$.value.generateViewUrl({cityName:I.cityName,hotelName:I.hotelName,fromDate:n.start.toISOString(),toDate:n.end.toISOString(),adultCount:I.adultCount.toString(),childCount:I.childCount.toString(),roomCount:(I.roomCount||1).toString()}),query:{changeDate:"true"}}),$.value.fromDate=n.start||new Date,$.value.toDate=n.end||new Date)},et=()=>{Ie.value=!0},Gt=()=>{Ie.value=!1},Xt=()=>{G.value.end||(G.value.end=_e.value.end)},es=n=>{$.value.selectRoomsPackage(n),k.loadPreInvoiceForCurrentPackages()},{start:ts,stop:ss}=Vs({onTimeout:()=>$.value.loadCurrentSelectedPackageRooms()});me(de,n=>{if(!n){const{websiteLink:I}=r.query;if(I){const A=ee.value.map(S=>S.classes).flat().find(S=>S.uniqueId===I);A&&(k.selectPriceClassForPackageIndex({priceClass:A,count:1,packageIndex:0}),v.loadPreInvoice(k.selectedPackages[0]),Me())}}}),me(_e,n=>{G.value={...n}},{immediate:!0}),me(G,n=>{n.start&&n.end&&Qt(n)}),[s,o]=ot(async()=>it(async n=>{},"$CyhsmS4Fvn")),await s,o(),[s,o]=ot(async()=>it(async()=>{var n,I,A,S;if(v.clearAllEntries(),ge){const U=g;Mt.trackAll("select_hotel",{isDiscounted:`${(n=U.value.selectedPrices)==null?void 0:n.some(as=>as.isDiscounted)}`,isFeatured:"false",isSameService:`${U.value.reserveType===m.firstReserveType}`,isMasir:"false",creationSource:Dt.siteSourceId,whiteLabel:"mrbilit"}),$.value.initSm(r.fullPath),k.selectedPackages.length?U.value.isCreatedSSR&&$.value.reviveHotelPackages():await $.value.initPackageFromPath($.value.parsePath(Je.value)),$.value.setUserDestinationFromPackage(U.value),localStorage.viewUrl=$.value.generateViewUrl({cityName:U.value.cityName,fromDate:(I=$.value.fromDate)==null?void 0:I.toISOString(),toDate:(A=$.value.toDate)==null?void 0:A.toISOString(),adultCount:$.value.adultCount.toString(),childCount:$.value.childCount.toString(),roomCount:$.value.roomCount.toString()}),$.value.loadNearbyHotels({hotelId:g.value.id,from:g.value.fromDate,to:g.value.toDate}),(S=k.selectedPackages[0])!=null&&S.prices.length?v.loadPreInvoice(g.value):$.value.loadCurrentSelectedPackageRooms()}p.setCounts({adultCount:m.adultCount,childCount:m.childCount,infantCount:m.infantCount})},{server:!1,lazy:!0},"$E0wZyGpz9W")),await s,o();const tt=i(()=>`رزرو آنلاین ${K.value} ${Ht.value} با تخفیف ویژه | مستر بلیط`),st=i(()=>u.value||`رزرو آنی و با تخفیف هتل ${K.value} با آفرهای ويژه و امکان کنسلی آنلاین و پشتیبانی ۲۴ ساعته واقعی فقط در مستر بلیط`);return ms({title:tt,description:st,ogTitle:tt,ogDescription:st}),qs([Us({"@context":"https://schema.org","@type":"Hotel",name:K.value,description:$e.value,address:{"@type":"PostalAddress",addressCountry:"iran",streetAddress:Oe.value},telephone:"+982161169000",image:be.value.slice(0,10).map(n=>n==null?void 0:n.large)[0]??"",photo:be.value.slice(0,10).map(n=>n==null?void 0:n.large)[0]??"",starRating:{"@type":"Rating",ratingValue:g.value.hotelStar},priceRange:`${Math.round(Math.random()*1e3)*1e4} - ${Math.round(Math.random()*1e3)*1e5}`})]),ie(()=>{Z&&k.loadPreInvoiceForCurrentPackages(),N==null||N.trackEvent({event:"view_item"}),window.addEventListener("scroll",Qe),ts()}),hs(()=>{window.removeEventListener("scroll",Qe),ss()}),(n,I)=>{const A=ft;return l(),f("div",Cn,[a("div",Sn,[a("header",wn,[a("div",In,[a("h1",{class:x(["header-title",e(re)])},C(e(Nt)),3),d(Os,{class:"breadcrumb",theme:"light",items:e(jt)},null,8,["items"])]),d(z,{class:"desktop",type:"filled","right-icon":e(ct),onClick:Ge},{default:P(()=>[V(C(e(Bt).t("HotelPage.searchAgain")),1)]),_:1},8,["right-icon"]),d(z,{class:"mobile",type:"filled","icon-button":e(ct),onClick:Ge},null,8,["icon-button"])])]),a("div",Pn,[a("div",$n,[a("section",{class:x(["slider-section",[e(re)]])},[!e(X)&&!e(M)?(l(),E(mt,{key:0,images:e(be),"pre-mount-swiper":"","button-size":"big","mobile-button-size":"small",pagination:e(M),"no-slider":e(M),"no-border-radius":e(M)},null,8,["images","pagination","no-slider","no-border-radius"])):T("",!0)],2),d(vn,{tabs:e(Ft),"items-min-width":167.6,"offset-width":0,"max-width":"auto","stop-element-id":"__footer",class:"content-navigation"},null,8,["tabs"]),e(Z)?(l(),f("div",Tn,[Rn,d(Ua)])):T("",!0),a("div",{id:"rooms",ref_key:"roomsRef",ref:F,class:"section-container rooms"},[a("h2",En,"اتاق‌های موجود در "+C(e(K)),1),e(de)?(l(),f(D,{key:0},[Bn,Mn,Dn],64)):e(qe).length?(l(!0),f(D,{key:1},O(e(qe),S=>(l(),E(xa,{key:S.id,"rooms-package":S,nights:e(Te),"default-rooms-package":e(xt),"is-selected":e(zt)===S.id,onSelect:U=>es(S)},null,8,["rooms-package","nights","default-rooms-package","is-selected","onSelect"]))),128)):e(ee).length?(l(!0),f(D,{key:2},O(e(ee),S=>(l(),E(Pt,{key:S.id,item:S,nights:e(Te)},null,8,["item","nights"]))),128)):(l(),f("div",Hn,[j(a("div",null,[d(Qs,{error:"در بازه زمانی انتخابی شما، ظرفیت اتاق‌های این هتل تکمیل است!","research-title":"مشاهده هتل‌های مشابه","wrapper-id":"no-room-find",onResearch:Kt})],512),[[Y,!e(de)&&!e(ee).length]])]))],512),a("div",xn,[zn,d(te,{"default-height":e(M)?432:272,"more-title":"مکان‌های بیشتر","padding-mobile":0,"data-value":e(ce).length,disabled:!e(ce).length},{default:P(()=>[a("div",Fn,[j(a("div",An,[(l(!0),f(D,null,O(e(ce),(S,U)=>(l(),f("div",{key:S.title||U,class:"attraction-item"},[a("span",Ln,C(S.title),1),a("span",Nn,C(S.distance)+" کیلومتر ",1)]))),128))],512),[[Y,e(ce).length]]),a("div",{class:x(["map-image-wrapper",[{full:!e(ce).length},e(re)]]),onClick:et},[!e(X)&&e(Ke)?(l(),f("img",{key:0,class:"map-image",alt:"hotel-map",src:e(Ke)},null,8,On)):T("",!0),d(z,{class:"fullscreen-button",size:"medium","icon-button":e(xs)},null,8,["icon-button"])],2)])]),_:1},8,["default-height","data-value","disabled"])]),e(ke).length?(l(),f("div",Vn,[a("h2",qn,[V(" نظرات کاربران "),d(He,{value:e(Pe),size:"large"},null,8,["value"])]),d(te,{"default-height":e(M)?336:360,"more-title":"نظرات بیشتر","data-value":e(ke).length},{default:P(()=>[a("div",Un,[(l(!0),f(D,null,O(e(ke),(S,U)=>(l(),E(Ja,{key:U,item:S,class:"comment-item"},null,8,["item"]))),128))])]),_:1},8,["default-height","data-value"])])):T("",!0),e(ye).length?(l(),f("div",Wn,[jn,d(te,{"default-height":e(M)?224:168,"more-title":"امکانات بیشتر","data-value":e(ye).length},{default:P(()=>[a("div",Yn,[(l(!0),f(D,null,O(e(ye),S=>(l(),f("div",{key:S.title,class:"amenity-item"},[d(he,{icon:S.icon,color:"black",size:"small"},null,8,["icon"]),a("span",Zn,C(S.title),1)]))),128))])]),_:1},8,["default-height","data-value"])])):T("",!0),a("div",Kn,[a("h2",Jn,"معرفی "+C(e(K)),1),d(te,{"default-height":e(M)?171:188,"data-value":e($e)},{default:P(()=>[a("div",{class:"intro-content",innerHTML:e($e)},null,8,Qn)]),_:1},8,["default-height","data-value"])]),a("div",Gn,[a("h2",Xn,"قوانین و مقررات "+C(e(K)),1),d(te,{"data-value":e(Ue),"default-height":e(M)?252:185},{default:P(()=>[a("div",eo,[a("div",to,[d(dt,{"model-value":e(Ot),label:"ساعت ورود",readonly:"",class:"time",icon:e(ut),"hide-description":"",required:""},null,8,["model-value","icon"]),d(dt,{"model-value":e(Vt),label:"ساعت خروج",readonly:"",class:"time",icon:e(ut),"hide-description":"",required:""},null,8,["model-value","icon"])]),a("span",so,C(e(Ue)),1)])]),_:1},8,["data-value","default-height"])])]),a("div",ao,[d(Zs),a("section",{class:x(["slider-section",[e(re)]])},[d(A,null,{default:P(()=>[!e(X)&&e(M)?(l(),E(mt,{key:0,images:e(be),"pre-mount-swiper":"","button-size":"big","mobile-button-size":"small",pagination:"","no-slider":"","no-border-radius":""},null,8,["images"])):T("",!0)]),_:1})],2),a("div",no,[a("div",oo,[j(d(js,{"number-of-stars":5,percent:e(Ne),size:"medium"},null,8,["percent"]),[[Y,e(Ne)]]),j(d(He,{value:e(Pe),size:"small"},null,8,["value"]),[[Y,e(Pe)]])]),a("span",{class:x(["title",[e(re)]])},C(`${e(K)}`),3),j(d(ae,{class:x({"loading-skeleton":e(de)}),type:"medium",price:e(Ye),prefix:e(Yt)},null,8,["class","price","prefix"]),[[Y,e(Ye)||e(de)]]),d(ne,{margin:"0",thickness:"1px"}),a("div",io,[d(he,{size:"small",icon:e(zs),color:"var(--cool-gray-600)"},null,8,["icon"]),a("span",lo,C(e(Oe)),1)]),d(z,{type:"bordered","right-icon":e(Fs),onClick:et},{default:P(()=>[V(" مشاهده روی نقشه ")]),_:1},8,["right-icon"])]),d(rs,{"offset-top":20,"offset-stop":8,"stop-element":"#stop",disabled:e(M)},{default:P(()=>[a("div",ro,[d(ls,{modelValue:e(G),"onUpdate:modelValue":I[0]||(I[0]=S=>vs(G)?G.value=S:null),"hide-description":"",class:"date-picker","include-day-name":"","start-day-title":"ورود","end-day-title":"خروج",format:"long","min-date":e(Lt),range:"","count-nights":"","unequal-range":"","range-enabled":"","modal-z-index":2147483647,readonly:e(Z),onClose:Xt},null,8,["modelValue","min-date","readonly"]),d(pt,null,{default:P(()=>[j(d(ht,{class:"desktop-only",items:e(y),discounts:e(pe),"hide-credit":""},null,8,["items","discounts"]),[[Y,e(b)]])]),_:1}),d(z,{"full-width":"",disabled:e(je),onClick:Me},{default:P(()=>[V(C(e(We)),1)]),_:1},8,["disabled"])])]),_:1},8,["disabled"])])]),e(Ve)?(l(),E(cs,{key:0,items:[{message:e(Ve)}],type:"warning",style:{margin:"16px 0"}},null,8,["items"])):T("",!0),co,j(d(kn,{ref_key:"nearby",ref:fe},null,512),[[Y,e(ge)]]),e(Re)[0].items.length?(l(),f("div",uo,[mo,d(te,{"default-height":449,"data-value":e(g).faqs.length},{default:P(()=>[a("blockquote",ho,[d(Js,{items:e(Re)},null,8,["items"])])]),_:1},8,["data-value"])])):T("",!0),d(Ks,{"mobile-only":"",fixed:"",class:"fixed-proceed","proceed-button-name":e(We),"proceed-button-disabled":e(je),"onClick:proceed":Jt},{prepend:P(()=>[d(ht,{items:e(y),discounts:e(pe),loading:e(Q),"hide-credit":"","initial-state":"closed"},null,8,["items","discounts","loading"])]),_:1},8,["proceed-button-name","proceed-button-disabled"]),e(Ie)?(l(),E(Na,{key:2,"is-loading":e(X),center:e(At),onClose:Gt},null,8,["is-loading","center"])):T("",!0)])}}});const Do=L(vo,[["__scopeId","data-v-b773b6b7"]]);export{Do as default};
               </li>
                            <li class="">
                                <a href="/service/video/film-provinces">استان ها</a>
                            </li>
                    </ul>
                </li>
                    <li class=" has-child">
                    <a href="/service/magazine">مجله مهر</a>
                    <ul class="submenu">
                            <li class="">
                                <a href="/archive?tp=384">عناوین اخبار</a>
                            </li>
                            <li class="">
                                <a href="/service/magazine">مجله مهر</a>
                            </li>
                            <li class="">
                                <a href="/service/magazine/infographic">اینفو مهر</a>
                            </li>
                            <li class="">
                                <a href="/service/magazine/NewspaperKiosks">دکه روزنامه</a>
                            </li>
                            <li class="">
                                <a href="/service/magazine/OtherMagazine">دیگر رسانه‌ها</a>
                            </li>
                    </ul>
                </li>
                    <li class="">
                    <a href="/archive">عناوین اخبار</a>
                    <ul class="submenu">
                    </ul>
                </li>
        </ul>
    </nav>
    </div>
</header>
    <main class="mainbody">
            <div class="container">
                <div class="row">
    <div class="col-12 main-content">
        <div class="row">
            <div class="col-12 col-lg-9">
    <article id="item" class="box item full-img">
        <div class="print-header" style="display: none;">
            <div class="logo">
                <img src="/resources/theme/mehrnews/img/logo_invert.png" alt="خبرگزاری مهر | اخبار ایران و جهان | Mehr News Agency" />
            </div>
            <div class="meta">
                <div class="barcode">
                    <img src="/barcode?text=https%3A%2F%2Fmehrnews.com%2Fx349DP&amp;c=1da13d7962bf7c8997a7709204ace04fb2be07266da5b002075b3426e569cac2613f0de9909b1b20924cfd14e623eaf9" alt="https://mehrnews.com/x349DP" />
                    <ul>
                        <li class="url">https://mehrnews.com/x349DP</li>
                        
                        <li class="date">۱۹ بهمن ۱۴۰۲، ۱۲:۰۸</li>
                        <li class="id">کد خبر <span>6018415</span></li>
                        <li>
                            <ol class="breadcrumb">
                                <li><a target="_blank" rel="index" href="/service/video">فیلم</a></li>
                                    <li><a href="/service/video/film-Politic" rel="index" target="_blank">سیاست</a>
                                    </li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="item-header">
                <div class="item-nav row">
                    <div class="col-6 col-sm-4">
                        <ol class="breadcrumb">
                            <li><a target="_blank" rel="index" href="/service/video">فیلم</a></li>
                                <li><a href="/service/video/film-Politic" rel="index" target="_blank">سیاست</a>
                                </li>
                        </ol>
                    </div>
                    <div class="col-6 col-sm-4 item-date">
                        <span>۱۹ بهمن ۱۴۰۲، ۱۲:۰۸</span>
                        
                    </div>
                    <div class="d-none d-sm-block col-4">
                        <ul class="header-sharing">
                            <li><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fmehrnews.com%2Fx349DP"><i class="icon-facebook"></i></a></li>
                            <li><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmehrnews.com%2Fx349DP"><i class="icon-twitter"></i></a></li>
                            <li><a href="tg://msg_url?url=https%3A%2F%2Fmehrnews.com%2Fx349DP"><i class="icon-telegram"></i></a></li>
                            <li class="wa"><a href="whatsapp://send?text=https%3A%2F%2Fmehrnews.com%2Fx349DP" target="_blank"><i class="icon-whatsapp"></i></a></li>
                            
                            <li class="d-none">
                                <a href="#" onclick="window.print(); return false;"><i class="icon-print"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            <div class="item-title">
                
                <h4 class="subtitle kicker"></h4>
                
                <h1 class="title">رهبر انقلاب: دعوت بعثت همچنان ادامه دارد</h1>
            </div>
        </div><div class="item-summary">
                <figure class="item-img d-none">
                    <img src="https://media.mehrnews.com/d/2024/02/08/3/4849965.jpg?ts=1707379529995" alt="رهبر انقلاب: دعوت بعثت همچنان ادامه دارد" itemprop="image" class="" title="رهبر انقلاب: دعوت بعثت همچنان ادامه دارد" width="100%" height="400" />
                </figure>
            <p class="summary introtext" itemprop="description"> رهبر انقلاب صبح امروز در دیدار مسؤولان نظام و سفرای کشورهای اسلامی به مناسبت عید مبعث فرمودند: رشد و پیشرفت دنیا و سعادت آخرت در گرو اجابت به این دعوت است.</p></div>
        <div class="item-body">
            <div itemprop="articleBody" class="item-text"><div class="itemPlayer0">
                            <video id="divPlayer0" width="100%" controls="controls" poster="https://media.mehrnews.com/d/2024/02/08/3/4849965.jpg?ts=1707379529995" data-source="[{&quot;file&quot;: &quot;https://media.mehrnews.com/d/2024/02/08/1/4849966_180p.mp4?ts=1707380068438&quot;, &quot;label&quot;: &quot;180p&quot;}, {&quot;file&quot;: &quot;https://media.mehrnews.com/d/2024/02/08/2/4849966_360p.mp4?ts=1707380068438&quot;, &quot;label&quot;: &quot;360p&quot;}, {&quot;file&quot;: &quot;https://media.mehrnews.com/d/2024/02/08/3/4849966_480p.mp4?ts=1707380068438&quot;, &quot;label&quot;: &quot;480p&quot;}, {&quot;file&quot;: &quot;https://media.mehrnews.com/d/2024/02/08/4/4849966_720p.mp4?ts=1707380068438&quot;, &quot;label&quot;: &quot;720p&quot;, &quot;default&quot;: &quot;true&quot;}]" data-autoplay="true">
                                <source src="https://media.mehrnews.com/d/2024/02/08/4/4849966_720p.mp4?ts=1707380068438" type="video/mp4"></source>
                            </video>
                        <div class="video-download">
                            <a href="https://media.mehrnews.com/d/2024/02/08/0/4849966.mp4?ts=1707380068438" target="_blank" class="btn">
                                <span class="icon-download text-success"></span>
                                دریافت
                                <span style="direction: ltr">16 MB</span>
                            </a>
                        </div></div>
            </div><div class="item-code">
                کد خبر <span>6018415</span></div>
        </div>
        <div class="item-footer row">
            <div class="col-12 col-sm-5">
                <div class="item-sharing">
                    <ul>
                        <li class="fb"><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fmehrnews.com%2Fx349DP"><i class="icon-facebook"></i></a></li>
                        <li class="tw"><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmehrnews.com%2Fx349DP"><i class="icon-twitter"></i></a></li>
                        
                        <li class="tg"><a href="tg://msg_url?url=https%3A%2F%2Fmehrnews.com%2Fx349DP"><i class="icon-telegram"></i></a></li>
                        <li class="wa"><a href="whatsapp://send?text=https%3A%2F%2Fmehrnews.com%2Fx349DP" target="_blank"><i class="icon-whatsapp"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-sm-4">
                
            </div>
            <div class="col-12 col-sm-3">
                <div class="short-link-container">
                    <div class="form-group">
                        <i class="icon-link"></i>
                        <input type="text" class="clean" value="mehrnews.com/x349DP" readonly="readonly" />
                    </div>
                </div>
                <div class="col-12">
                    <div id="tooltip-link">
                        <p class="short-link-tooltip">کپی شد</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-boxes2">
            <section id="box519" class="box related-items list list-bullets hidden-time" style="" data-conf="{&quot;id&quot;:519}">
                <header>
                    <h2 style=""><span>مطالب مرتبط</span>
                    </h2>
                </header>
                <div>
                    <ul>
                                <li class="talk" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6018414/%D8%A8%D8%B9%D8%AB%D8%AA-%D9%BE%DB%8C%D8%A7%D9%85%D8%A8%D8%B1-%D9%86%D9%85%D9%88%D9%86%D9%87-%D8%A8%D8%A7%D8%B1%D8%B2-%D8%B4%D8%A7%DB%8C%D8%B3%D8%AA%D9%87-%D8%B3%D8%A7%D9%84%D8%A7%D8%B1%DB%8C-%D8%AF%D8%B1-%D9%85%DA%A9%D8%AA%D8%A8-%D8%A7%D8%B3%D9%84%D8%A7%D9%85-%D8%A7%D8%B3%D8%AA" target="_blank" title="۲ ساعت قبل">بعثت پیامبر نمونه بارز شایسته سالاری در مکتب اسلام است</a>
        
    </h3>
</div>
                                </li>
                                <li class="op-ed" data-conf="{}">
<div class="desc">
    <h3><a href="/news/6012804/%D8%AD%D9%82%DB%8C%D9%82%D8%AA-%D8%A7%D8%B3%D9%84%D8%A7%D9%85-%D8%A7%D8%B2-%D8%AC%D9%86%D8%B3-%D8%A8%D8%B9%D8%AB%D8%AA-%D8%A7%D8%B3%D8%AA" target="_blank" title="۲ ساعت قبل">حقیقت اسلام از جنس بعثت است/حجاب زن مسلمان هویت او در مقابل تمدن مشرکانه غرب است</a>
        
    </h3>
</div>
                                </li>
                    </ul>
                </div>
                
            </section>
        </div>
            <section class="box tags">
                <header>
                    <h2>برچسب‌ها</h2>
                </header>
                <div>
                    <ul>
                                <li><a href="/tag/%D9%85%D9%82%D8%A7%D9%85+%D9%85%D8%B9%D8%B8%D9%85+%D8%B1%D9%87%D8%A8%D8%B1%DB%8C" rel="tag">مقام معظم رهبری</a></li>
                                <li><a href="/tag/%D8%B1%D9%87%D8%A8%D8%B1%DB%8C" rel="tag">رهبری</a></li>
                                <li><a href="/tag/%D8%AF%DB%8C%D8%AF%D8%A7%D8%B1+%D9%85%D8%B1%D8%AF%D9%85%DB%8C+%D8%B1%D9%87%D8%A8%D8%B1%DB%8C" rel="tag">دیدار مردمی رهبری</a></li>
                                <li><a href="/tag/%D9%85%D8%A8%D8%B9%D8%AB" rel="tag">مبعث</a></li>
                                <li><a href="/tag/%D9%BE%DB%8C%D8%A7%D9%85%D8%A8%D8%B1+%D8%A7%DA%A9%D8%B1%D9%85+%28%D8%B5%29" rel="tag">پیامبر اکرم (ص)</a></li>
                    </ul>
                </div>
            </section>
        <div class="item-boxes">
        </div>
    </article>
        <section id="news-comment"></section>
        <section class="box header-outside comment-form">
            <header><h2>نظر شما</h2></header>
            <div>
                <form enctype="application/x-www-form-urlencoded" data-url="/rest/postcomment" role="form" data-toggle="validator" method="post" name="frmNewsComment" id="frmNewsComment" data-success="نظر شما با موفقیت ارسال شد." class="form-comment" data-error="اشکالی در ارسال نظر شما رخ داده‌است!" data-captcha-error="کد امنیتی اشتباه وارد شده است">
                     <div class="comment-info">
                        <div class="alert alert-info">شما در حال پاسخ به نظر «<span></span>» هستید.
                            <button type="button" class="close">× <span>لغو پاسخ</span></button>
                            <blockquote></blockquote>
                        </div>
                        <div class="comment-policies"><li><span>نظرات حاوی توهین و هرگونه نسبت ناروا به اشخاص حقیقی و حقوقی منتشر نمی‌شود.</span></li><li><span>نظراتی که غیر از زبان فارسی یا غیر مرتبط با خبر باشد منتشر نمی‌شود.</span></li>
                        </div>
                    </div> 
                    <input type="hidden" value="frmNewsComment" name="frmNewsComment" />
                    <input type="hidden" value="6018415" name="newsId" id="newsId" />
                    <input type="hidden" value="0" name="reply" />
                    <input type="hidden" value="" name="parentId" />
                    <fieldset>
                        <div class="form-group name-group">
                            <label for="userName">نام</label>
                            <input type="text" id="userName" name="userName" placeholder="نام" maxlength="50" class="form-control" data-minlength="3" data-required-msg="لطفا نام خود را وارد کنید." />
                        </div>
                        <div class="form-group email-group">
                            <label for="userEmail">ایمیل</label>
                            <input type="email" placeholder="ایمیل" class="form-control ltr" id="userEmail" name="userEmail" maxlength="80" />
                        </div>
                        <div class="form-group text-group">
                            <label for="body">نظر شما *</label>
                            <textarea maxlength="300" placeholder="نظر شما" data-required-msg="لطفاً نظر خود را وارد کنید." class="form-control" required="true" id="body" name="body" rows="5"></textarea>
                        </div><div class="form-group captcha-group">
                            <div class="captcha">
                                <input id="captchaKey" name="captchaKey" value="105e7f78a660b7526f5a28a1188bfae9e256ace1ca27a9a866211e25d99c4d9e7eafeb120cbb5815cccd2da7edc4595ee46bcb7629e72da0fc3b2aacbe55d2c3ccaacf4088e64badf435f770489c2408f9077ab6b07e2c5d06be2abf7d5f8b39" type="hidden" />
                                <div class="captcha-image">
                                    <img id="captchaImg" src="/sncaptcha.jpg?key=105e7f78a660b7526f5a28a1188bfae9e256ace1ca27a9a866211e25d99c4d9e7eafeb120cbb5815cccd2da7edc4595ee46bcb7629e72da0fc3b2aacbe55d2c3ccaacf4088e64badf435f770489c2408f9077ab6b07e2c5d06be2abf7d5f8b39" alt="captcha" />
                                </div>
                                <label for="captchaText"><i class="req">*</i> لطفا عدد مقابل را در جعبه متن وارد کنید</label>
                                <div class="captcha-input">
                                    <input type="number" name="captchaText" id="captchaText" required="required" data-required-msg="حاصل عبارت را وارد کنید." />
                                </div>
                            </div></div>
                        <div class="form-group submit-group">
                            <button class="btn btn-default" id="btnSave">ارسال</button>
                            <div class="msg"></div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
            </div>
            <div class="col-12 col-lg-3">
            <section id="box526" class="box " style="" data-conf="{&quot;id&quot;:526}">
                <div><table style="width:100%">
<tr>
<td style="width:50%">
<a target="_blank"  href="https://ble.ir/Mehrnews"  > 
<img width="100%" src="https://media.mehrnews.com/d/2018/07/01/4/2821628.jpg" tag="" />
</a>
</td>
<td  style="width:50%">
<a target="_blank"  href="https://twitter.com/mehrnews_ir"  > 
 <img  width="100%" src="https://media.mehrnews.com/d/2020/05/11/4/3448346.jpg" tag="" />
</a>
</td>
</tr>
<tr>
<td style="width:50%">
<a target="_blank"  href="https://rubika.ir/mehrnews"  > 
<img width="100%" src="https://media.mehrnews.com/d/2018/11/17/4/2958126.jpg" tag="" />
</a>
</td>
<td  style="width:50%">
<a target="_blank"  href="https://www.mehrnews.com/"  > 
 <img  width="100%" src="https://media.mehrnews.com/d/2018/07/01/4/2821629.jpg" tag="" />
</a>
</td>
</tr>
</table>
                </div>
                
            </section>
            <section id="box432" class="box list list-bordered list-thumbs thumbs-md highlights hidden-summary header-bg-primary" style="" data-conf="{&quot;id&quot;:432}">
                <header>
                    <h2 style=""><span>فیلم‌های پربازدید</span>
                    </h2>
                </header>
                <div>
                    <ul>
                                <li class="video" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018140/فیلم-درگیری-شدید-بین-بازیکنان-ایران-و-قطر-پس-از-پایان-بازی" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/07/1/4849520.jpg" alt="فیلم درگیری شدید بین بازیکنان ایران و قطر پس از پایان بازی" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018140/%D9%81%DB%8C%D9%84%D9%85-%D8%AF%D8%B1%DA%AF%DB%8C%D8%B1%DB%8C-%D8%B4%D8%AF%DB%8C%D8%AF-%D8%A8%DB%8C%D9%86-%D8%A8%D8%A7%D8%B2%DB%8C%DA%A9%D9%86%D8%A7%D9%86-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D9%88-%D9%82%D8%B7%D8%B1-%D9%BE%D8%B3-%D8%A7%D8%B2-%D9%BE%D8%A7%DB%8C%D8%A7%D9%86-%D8%A8%D8%A7%D8%B2%DB%8C" target="_blank">فیلم درگیری شدید بین بازیکنان ایران و قطر پس از پایان بازی</a>
        
    </h3>
</div>
                                </li>
                                <li class="video" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6017407/ساخت-۳۶-کیلومتر-آزادراه-در-مازندران" title="">
                                                <img src="https://media.mehrnews.com/d/2023/11/22/1/4747909.jpg" alt="ساخت ۳۶ کیلومتر آزادراه در مازندران" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6017407/%D8%B3%D8%A7%D8%AE%D8%AA-%DB%B3%DB%B6-%DA%A9%DB%8C%D9%84%D9%88%D9%85%D8%AA%D8%B1-%D8%A2%D8%B2%D8%A7%D8%AF%D8%B1%D8%A7%D9%87-%D8%AF%D8%B1-%D9%85%D8%A7%D8%B2%D9%86%D8%AF%D8%B1%D8%A7%D9%86" target="_blank">ساخت ۳۶ کیلومتر آزادراه در مازندران</a>
        
    </h3>
</div>
                                </li>
                                <li class="video" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018164/شادی-امیر-قطر-پس-از-پیروزی-برابر-تیم-ملی-ایران" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/07/1/4849586.jpg" alt="شادی امیر قطر پس از پیروزی برابر تیم ملی ایران" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018164/%D8%B4%D8%A7%D8%AF%DB%8C-%D8%A7%D9%85%DB%8C%D8%B1-%D9%82%D8%B7%D8%B1-%D9%BE%D8%B3-%D8%A7%D8%B2-%D9%BE%DB%8C%D8%B1%D9%88%D8%B2%DB%8C-%D8%A8%D8%B1%D8%A7%D8%A8%D8%B1-%D8%AA%DB%8C%D9%85-%D9%85%D9%84%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86" target="_blank">شادی امیر قطر پس از پیروزی برابر تیم ملی ایران</a>
        
    </h3>
</div>
                                </li>
                                <li class="video" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6018156/خلاصه-بازی-حساس-ایران-و-قطر-در-نیمه-نهایی-جام-ملتهای-آسیا" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/07/1/4849572.jpg" alt="خلاصه بازی حساس ایران و قطر در نیمه نهایی جام ملتهای آسیا" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6018156/%D8%AE%D9%84%D8%A7%D8%B5%D9%87-%D8%A8%D8%A7%D8%B2%DB%8C-%D8%AD%D8%B3%D8%A7%D8%B3-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D9%88-%D9%82%D8%B7%D8%B1-%D8%AF%D8%B1-%D9%86%DB%8C%D9%85%D9%87-%D9%86%D9%87%D8%A7%DB%8C%DB%8C-%D8%AC%D8%A7%D9%85-%D9%85%D9%84%D8%AA%D9%87%D8%A7%DB%8C-%D8%A2%D8%B3%DB%8C%D8%A7" target="_blank">خلاصه بازی حساس ایران و قطر در نیمه نهایی جام ملتهای آسیا</a>
        
    </h3>
</div>
                                </li>
                                <li class="video" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6017403/آخرین-وضعیت-تایید-صلاحیت-کاندیداها-در-استان-بوشهر" title="">
                                                <img src="https://media.mehrnews.com/d/2024/01/06/1/4806938.jpg" alt="آخرین وضعیت تایید صلاحیت کاندیداها در استان بوشهر" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6017403/%D8%A2%D8%AE%D8%B1%DB%8C%D9%86-%D9%88%D8%B6%D8%B9%DB%8C%D8%AA-%D8%AA%D8%A7%DB%8C%DB%8C%D8%AF-%D8%B5%D9%84%D8%A7%D8%AD%DB%8C%D8%AA-%DA%A9%D8%A7%D9%86%D8%AF%DB%8C%D8%AF%D8%A7%D9%87%D8%A7-%D8%AF%D8%B1-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D8%A8%D9%88%D8%B4%D9%87%D8%B1" target="_blank">آخرین وضعیت تایید صلاحیت کاندیداها در استان بوشهر</a>
        
    </h3>
</div>
                                </li>
                                <li class="video" data-conf="{}">
                                        <figure><a target="_blank" rel="" href="/news/6017960/پیش-بینی-هواداران-فوتبال-از-نتیجه-دیدار-ایران-و-قطر" title="">
                                                <img src="https://media.mehrnews.com/d/2024/02/07/1/4848991.jpg" alt="پیش بینی هواداران فوتبال از نتیجه دیدار ایران و قطر" loading="lazy" />
                                        </a></figure>
<div class="desc">
    <h3><a href="/news/6017960/%D9%BE%DB%8C%D8%B4-%D8%A8%DB%8C%D9%86%DB%8C-%D9%87%D9%88%D8%A7%D8%AF%D8%A7%D8%B1%D8%A7%D9%86-%D9%81%D9%88%D8%AA%D8%A8%D8%A7%D9%84-%D8%A7%D8%B2-%D9%86%D8%AA%DB%8C%D8%AC%D9%87-%D8%AF%DB%8C%D8%AF%D8%A7%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D9%88-%D9%82%D8%B7%D8%B1" target="_blank">پیش بینی هواداران فوتبال از نتیجه دیدار ایران و قطر</a>
        
    </h3>
</div>
                                </li>
                    </ul>
                </div>
                
            </section>
            </div>

        </div>
    </div>
    <aside id="ads-container" class="col-lg-3 col-md-6">
            <section id="box851" class="box ads" style="" data-conf="{&quot;id&quot;:851}">
                <div><div id="tavoos_video_native-5107"></div>
                </div>
                
            </section>
    </aside>
                </div>
            </div>
        
    </main>
    <footer id="footer">
        <div class="container">
            <div id="footer-items" class="row justify-content-between">
                <div class="col-12 col-sm-7">
    <div class="box chart-box trending-tags">
        <header class="box-title">
            <h2>
                <a>موضوعات داغ: فیلم</a>
            </h2>
        </header>
        <section class="box-content">
            <ul>
                    <li>
                        <h3 class="tcItem tcItem10">
                            <a href="/tag/%D8%AA%DB%8C%D9%85+%D9%85%D9%84%DB%8C+%D9%81%D9%88%D8%AA%D8%A8%D8%A7%D9%84+%D8%A7%DB%8C%D8%B1%D8%A7%D9%86" title="39 مطلب جدید">تیم ملی فوتبال ایران</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem9">
                            <a href="/tag/%D8%AC%D8%B4%D9%86%D9%88%D8%A7%D8%B1%D9%87+%D9%81%DB%8C%D9%84%D9%85+%D9%81%D8%AC%D8%B1" title="35 مطلب جدید">جشنواره فیلم فجر</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem9">
                            <a href="/tag/%D8%AC%D8%A7%D9%85+%D9%85%D9%84%D8%AA%D9%87%D8%A7%DB%8C+%D8%A2%D8%B3%DB%8C%D8%A7" title="27 مطلب جدید">جام ملتهای آسیا</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem9">
                            <a href="/tag/%D8%AC%D8%A7%D9%85+%D9%85%D9%84%D8%AA+%D9%87%D8%A7%DB%8C+2023+%D8%A2%D8%B3%DB%8C%D8%A7+-+%D9%82%D8%B7%D8%B1" title="27 مطلب جدید">جام ملت های 2023 آسیا - قطر</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem9">
                            <a href="/tag/%DA%86%D9%87%D9%84%E2%80%8C+%D9%88+%D8%AF%D9%88%D9%85%DB%8C%D9%86+%D8%AC%D8%B4%D9%86%D9%88%D8%A7%D8%B1%D9%87+%D9%81%DB%8C%D9%84%D9%85+%D9%81%D8%AC%D8%B1" title="26 مطلب جدید">چهل‌ و دومین جشنواره فیلم فجر</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem8">
                            <a href="/tag/%D8%AC%D8%A7%D9%85+%D9%85%D9%84%D8%AA+%D9%87%D8%A7%DB%8C+%D8%A2%D8%B3%DB%8C%D8%A7+2023+-+%D9%82%D8%B7%D8%B1" title="23 مطلب جدید">جام ملت های آسیا 2023 - قطر</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem6">
                            <a href="/tag/%D9%81%DB%8C%D9%84%D9%85+%D8%B3%DB%8C%D9%86%D9%85%D8%A7%DB%8C%DB%8C" title="11 مطلب جدید">فیلم سینمایی</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem6">
                            <a href="/tag/%D9%85%D9%82%D8%A7%D9%85+%D9%85%D8%B9%D8%B8%D9%85+%D8%B1%D9%87%D8%A8%D8%B1%DB%8C" title="10 مطلب جدید">مقام معظم رهبری</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem6">
                            <a href="/tag/%D8%A7%D9%85%DB%8C%D8%B1+%D9%82%D9%84%D8%B9%D9%87+%D9%86%D9%88%DB%8C%DB%8C" title="9 مطلب جدید">امیر قلعه نویی</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem5">
                            <a href="/tag/%D8%B3%D8%AE%D9%86%DA%AF%D9%88%DB%8C+%D8%AF%D9%88%D9%84%D8%AA" title="7 مطلب جدید">سخنگوی دولت</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem5">
                            <a href="/tag/%D9%81%DB%8C%D9%84%D9%85+%D9%85%D8%AC%D9%86%D9%88%D9%86" title="7 مطلب جدید">فیلم مجنون</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem5">
                            <a href="/tag/%D9%81%DB%8C%D9%84%D9%85+%D8%A8%DB%8C+%D8%A8%D8%AF%D9%86" title="7 مطلب جدید">فیلم بی بدن</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem5">
                            <a href="/tag/%D8%AA%DB%8C%D9%85+%D9%85%D9%84%DB%8C+%D9%81%D9%88%D8%AA%D8%A8%D8%A7%D9%84+%D9%82%D8%B7%D8%B1" title="6 مطلب جدید">تیم ملی فوتبال قطر</a>
                        </h3>
                    </li>
                    <li>
                        <h3 class="tcItem tcItem5">
                            <a href="/tag/%D9%85%D9%87%D8%AF%DB%8C+%D8%B7%D8%A7%D8%B1%D9%85%DB%8C" title="6 مطلب جدید">مهدی طارمی</a>
                        </h3>
                    </li>
            </ul>
            <div class="clearfix"></div>
        </section>
    </div>
                </div>
                <div class="col-12 col-sm-5 col-lg-3">
                    <div class="footer-icons">
                        <ul>
                            <li>
                                <a title="تلگرام" target="_blank" href="https://t.me/mehrnews"><i class="icon-telegram"></i>
                                </a>
                            </li>
                            <li>
                                <a title="بله" target="_blank" href="https://ble.ir/mehrnews"><i class="icon-bale"></i>
                                </a>
                            </li>
                            <li>
                                <a title="اینستاگرام" target="_blank" href="https://www.instagram.com/mehr_agency/"><i class="icon-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a title="توییتر" target="_blank" href="https://twitter.com/mehrnews_ir"><i class="icon-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a title="روبیکا" target="_blank" href="http://rubika.ir/mehrnews"><i class="icon-rubika6"></i>
                                </a>
                            </li>
                            <li>
                                <a title="فید RSS" target="_blank" href="/rss-help"><i class="icon-rss"></i>
                                </a>
                            </li>
                            <li>
                                <a title="آرشیو اخبار" target="_blank" href="/archive"><i class="icon-list"></i>
                                </a>
                            </li>
                            <li>
                                <a title="ایتا" target="_blank" href="http://eitaa.com/mehrnews"><i class="icon-eitaa"></i>
                                </a>
                            </li>
                        </ul>

                            
                        <div class="clearfix"></div>
                    </div>
                    <div class="search">
                        <form role="form" action="/search" method="get">
                            <div class="input-group">
                                <input type="text" name="q" value="" placeholder="جستجو..." />
                                <button type="submit"><i class="icon-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="responsive-tools row">
                <div class="col-12">
                    <div class="toggle-versions">
                        <a id="desktop-version" href="#" class="btn btn-info d-inline-block d-md-none">نسخه دسکتاپ</a>
                        <a id="mobile-version" href="#" class="btn btn-info d-none d-md-inline-block">نسخه موبایل</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div id="footer-logo">
                            <a href="/">
                                <img src="/resources/theme/mehrnews/img/footer-logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div id="footer-menu">
                        <ul>
                                <li><a target="_blank" href="/news/2408725/">درباره ما</a></li>
                                <li><a target="_blank" href="/news/2408727/">تماس با ما</a></li>
                                <li><a target="_blank" href="/news/2409272/">بازرگانی</a></li>
                            
                        </ul>
                        </div>
                        
                        <p class="copyright-text">All Content by Mehr News Agency is licensed under a Creative Commons Attribution 4.0 International License.</p>
                    </div>
                </div>
                <div id="mastfoot">
                    <div class="poweredby">
                        <a title="Nastooh Saba Newsroom" target="_blank" href="http://www.nastooh.ir">
                            <img src="/resources/theme/mehrnews/img/nastooh-logo.png" width="36" height="18" alt="Nastooh Saba Newsroom" />طراحی و تولید: نستوه
                        </a>
                        <a title="Pixel Studio" target="_blank" href="http://www.pixelstudio.ir">
                            <img src="/resources/theme/mehrnews/img/pixelstudio-logo.png" width="18" height="18" alt="Pixel Studio" />گرافیک: استودیو پیکسل
                        </a>
                    </div>
                    <div class="url-holder"></div>
                </div>
            </div>
        </div>
    </footer>
    <script src="/resources/theme/global/js/vendor/owl.carousel/2.3.1-modified/owl.carousel.js"></script>
    <script src="/resources/theme/global/js/global-2.1.min.js?_=20240206"></script>
    <script src="/resources/theme/mehrnews/js/main.min.js?_=20240205"></script><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-E32N3ZY0X8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E32N3ZY0X8');
</script>

<!--<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "9qr99kb52k");
</script>-->
<script type="text/javascript">
(function () {
var now = new Date();
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.async = true;
var script_address = 'https://player.tavoos.net/jwplayer-nastooh.js';
script.charset = "utf-8";
script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() ;
script.id = "jwplayer_player_js";
script.setAttribute("meta-vast", "nastooh:vasturl");
head.appendChild(script);
})();
</script>
<script type="text/javascript">
    (function(){
        var now = new Date();
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async=true;
        script.setAttribute('TavoosToken','b3shPsUX-kUEf-WTTX-kX7G-gUstZHCwoGlY');
        script.id = 'tavoos_native_video_script';
        var script_address = 'https://cdn.tavoos.net/services/smoothie/loader.js';
        script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
        head.appendChild(script);
    })();
</script>
    </body>
</html>