(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1086:function(t,e,n){"use strict";n(482)},1087:function(t,e,n){"use strict";var r=n(390),o=n.n(r);e.default=o.a},1181:function(t,e,n){"use strict";n.r(e);n(12);var r=n(2),o=n(317),c=n(310),l={components:{Post:o.a},mounted:function(){this.$store.dispatch("configuratorN2cr/setTitleFromConfig",!1)},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.store,o={pl:"6740160368741280",en:"6740161030998944"},e.next=4,r.dispatch("articlesN2cr/getArticle",o[n.i18n.locale]);case 4:return e.next=6,r.dispatch("dynamicConfig/updateConfig",{page:{info:{pl:{title:"Akcje WPL",subtitle:"Notowania Wirtualna Polska Holding S.A. (WPL)"},en:{title:"WPL Shares",subtitle:"Listings of Wirtualna Polska Holding S.A. (WPL)"}},imgUrl:"https://holding.wpcdn.pl/backgrounds/20.jpg"}});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return Object(c.a)(this.$route.path,this.$t("seo.title"),this.$t("seo.desc"))},nuxtI18n:{paths:{en:"/investor/wpl-shares"}}},f=(n(1086),n(4)),d=n(1087),component=Object(f.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("post",{attrs:{size:10,"format-classes":"first-arrow second-disc third-disc"}})}),[],!1,null,"8929c68a",null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports},310:function(t,e,n){"use strict";e.a=function(path,title,t){return{title:title,link:[{rel:"canonical",href:"https://holding.wp.pl"+path}],meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t}]}}},312:function(t,e,n){},313:function(t,e,n){"use strict";var r=n(9),o=n(40),c=n(48),l=n(147),f=n(100),d=n(18),h=n(77).f,m=n(102).f,N=n(20).f,v=n(314).trim,I=r.Number,_=I,A=I.prototype,P="Number"==c(n(101)(A)),w="trim"in String.prototype,C=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=w?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!I(" 0o1")||!I("0b1")||I("+0x1")){I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(P?d((function(){A.valueOf.call(n)})):"Number"!=c(n))?l(new _(C(e)),n,I):C(e)};for(var E,S=n(17)?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;S.length>L;L++)o(_,E=S[L])&&!o(I,E)&&N(I,E,m(_,E));I.prototype=A,A.constructor=I,n(21)(r,"Number",I)}},314:function(t,e,n){var r=n(6),o=n(53),c=n(18),l=n(315),f="["+l+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),m=function(t,e,n){var o={},f=c((function(){return!!l[t]()||"​"!="​"[t]()})),d=o[t]=f?e(N):l[t];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},N=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},315:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},316:function(t,e,n){"use strict";n(312)},317:function(t,e,n){"use strict";n(313);var r={computed:{htmlContent:function(){return this.$store.state.articlesN2cr.article.htmlContent}},props:{size:{type:Number,default:function(){return 8}},formatClasses:{type:String,default:function(){return""}}}},o=(n(316),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content center",class:"col-lg-"+this.size},[e("article",{staticClass:"single-post",attrs:{id:"blog"}},[e("div",{staticClass:"post-content",class:this.formatClasses,domProps:{innerHTML:this._s(this.htmlContent)}})])])}),[],!1,null,"7c134cbe",null);e.a=component.exports},390:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"pl":{"seo":{"title":"Akcje WPL","desc":"Notowania Wirtualna Polska Holding S.A. (WPL)"}},"en":{"seo":{"title":"WPL Shares","desc":"Listings of Wirtualna Polska Holding S.A. (WPL)"}}}'),delete t.options._Ctor}},482:function(t,e,n){}}]);x){.K7b th{font-size:16px}}@media screen and (max-width:420px){.K7b th{font-size:13px}}.K7b th:empty{padding:0}.K7b td{color:var(--d);font-size:calc(11.53488px + .34884vw);hanging-punctuation:first;letter-spacing:-.001em;line-height:calc(14.5814px + .81395vw);outline:none;overflow-wrap:break-word;padding:.25em .5em;text-indent:0}@media screen and (min-width:1280px){.K7b td{line-height:25px}}@media screen and (max-width:420px){.K7b td{line-height:18px}}@media screen and (min-width:1280px){.K7b td{font-size:16px}}@media screen and (max-width:420px){.K7b td{font-size:13px}}.K7b td:empty{padding:0}.OXb{display:flex;flex-direction:column;margin:var(--2h) 0}.OXb:last-child{margin-bottom:0}.OXakn{height:auto;overflow:visible}.OXakp{overflow:hidden}.JRab-,.OXw-{width:100%}.JRab-{align-items:flex-start;background-color:var(--36);display:flex;flex-direction:column;margin:var(--2h) 0;position:relative}.JRab-:last-child{margin-bottom:0}@media screen and (min-width:1366px){@media screen and (min-width:1366px){.JRacb{margin-left:calc((var(--24) + var(--21))/-1);width:calc(100% + var(--24) + var(--21))}}}.JRu9{max-height:var(--2q);object-fit:contain}.JRacd{object-fit:cover}.MXnt{margin-top:var(--2b);width:100%}.MXahp{color:var(--1u);margin-right:var(--2a)}.MXahr{height:12px;width:16px}.glightbox-open{height:auto}.gslider .gslide{pointer-events:none;width:auto}.gslider .gslide.current{pointer-events:auto}.gslider .gslide .gslide-description{bottom:0}.gslider .gslide .gslide-description .gdesc-inner{background-color:var(--p);border-radius:var(--27);bottom:var(--2c);color:var(--36);font-size:14px;line-height:21px;padding:var(--2a) 6px;position:absolute}@media screen and (min-width:630px){.gslider .gslide .gslide-description .gdesc-inner{margin:0 var(--2c)}}.gslider .gslide .gslide-description .gslide-desc{color:var(--36)}.gslider .lightboxSidebar{display:none}@media screen and (min-width:1140px){.gslider .lightboxSidebar{align-items:center;background:var(--3j);display:flex;height:600px;justify-content:center;margin-left:70px;max-width:300px;min-width:300px}}.gslider .zoomed~.lightboxSidebar{display:none}@media screen and (min-width:1140px){.gslider{padding:0 100px}}.J-act{align-content:center;display:flex;flex-direction:column;margin:var(--2h) 0;width:100%}.J-act:last-child{margin-bottom:0}.J-act+.J-act{margin-top:0}.J-acv{min-width:100%;z-index:3}.J-acx{display:flex;flex-wrap:wrap;justify-content:center}@media screen and (min-width:1366px){.J-acx{justify-content:flex-start}}.KFg1{cursor:pointer;margin:2px}.KFacz[data-hidden-elements]{position:relative}.KFacz[data-hidden-elements]:after,.KFacz[data-hidden-elements]:before{height:100%;left:0;position:absolute;top:0;width:100%}.KFacz[data-hidden-elements]:before{background:var(--1k);content:"";cursor:pointer;opacity:.6}.KFacz[data-hidden-elements]:after{align-items:center;color:var(--o);content:"+" attr(data-hidden-elements);display:flex;font-family:var(--k);font-size:calc(var(--l)*3);justify-content:center}:root{--c6:16px}.J5acn{align-items:center;display:flex;flex-direction:column;margin:var(--2h) 0;position:relative;width:100%}.J5acn:last-child{margin-bottom:0}.J5acp{width:100%;z-index:3}.J5iv{color:var(--36);height:100%}.J5acr{height:100%;object-fit:cover;width:100%}:root{--bs:1;--bt:50px;--bu:50px;--bv:50px;--bw:50px;--bx:0;--by:0;--bz:0;--c0:0;--c1:12px;--c2:2;--c3:1;--c4:1;--c5:1}.multiItemsSlider{width:100%}.multiItemsSlider .splide{cursor:grab;visibility:visible!important}.multiItemsSlider .splide:active{cursor:grabbing}.multiItemsSlider .splide:after{background:linear-gradient(90deg,#0000 90%,currentColor);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.multiItemsSlider .splide button{fill:var(--3j);height:36px;width:36px}.multiItemsSlider .splide button svg{height:12px;width:12px}.multiItemsSlider .splide__arrow:disabled{display:none}.multiItemsSlider .splide__slide{border-radius:var(--27);display:block!important;overflow:hidden}.multiItemsSlider .splide__slide>img{height:100%;object-fit:cover;pointer-events:none;width:100%}.multiItemsSlider .splide__slide [id^=player-]{height:100%}.multiItemsSlider .splide__slide .wp-player{height:100%!important}.multiItemsSlider .splide__slide .wp-player .npp-container{border-radius:var(--27)}.multiItemsSlider .splide__slide:focus{outline:none}.multiItemsSlider .ssrContainerDefault{display:flex;transform:translateX(0);width:calc(100% - 38px);width:calc(((100% + var(--c1) - (var(--by) + var(--bu))*1)/var(--c3))*var(--bs))}@media screen and (min-width:630px){.multiItemsSlider .ssrContainerDefault{width:calc(100% - 38px);width:calc(((100% + var(--c1) - (var(--bz) + var(--bv))*1)/var(--c4))*var(--bs))}}@media screen and (min-width:1140px){.multiItemsSlider .ssrContainerDefault{width:calc(100% - 38px);width:calc(((100% + var(--c1) - (var(--c0) + var(--bw))*1)/var(--c5))*var(--bs))}}@media screen and (min-width:1366px){.multiItemsSlider .ssrContainerDefault{width:calc(50% - 19px);width:calc(((100% + var(--c1) - (var(--bx) + var(--bt))*1)/var(--c2))*var(--bs))}}.multiItemsSlider .ssrSlideDefault{margin-right:12px;margin-right:var(--c1);width:calc(100% - 50px);width:calc((100% + var(--c1) - (var(--bz) + var(--bv))*1)/var(--bs) - var(--c1))}.N7aj3,.parentHeight{height:100%}.SRb{margin:var(--2h) 0;position:relative}.SRb:last-child{margin-bottom:0}.SRbr{background-color:var(--p);bottom:0;color:var(--36);font-size:14px;font-size:12px;line-height:21px;line-height:18px;line-height:1.2;max-width:50%;padding:var(--2a) 6px;position:absolute;text-align:left}.SRaqx{left:0;max-width:unset;right:0}.SRaqz{left:0}.SRaq1{right:0}.SRaq3{bottom:unset;top:0}.SRmh{margin-top:var(--2a)}.STb{margin:var(--2h) 0}.STb:last-child{margin-bottom:0}.STaq5{position:relative}.STaq7{background:rgba(var(--1l),.5);height:100%;position:absolute;width:100%;z-index:1}.STmh{margin-top:var(--2a)}.THasl{right:80%}.THasn{left:80%}.THasp{bottom:100%}.THasr{top:100%}.S-jr{background:rgba(var(--1l),.5);border:2px solid var(--o);border-radius:50%;cursor:pointer;display:grid;height:24px;place-items:center;transition:transform var(--t),background var(--t);width:24px}.S-jr:after,.S-jr:before{background:var(--o);content:"";height:12px;position:absolute;width:2px}.S-jr:after{transform:rotate(90deg)}.S-jr:hover{background:rgba(var(--1l),.65)}@media screen and (min-width:630px){.S-jr{height:40px;width:40px}.S-jr:after,.S-jr:before{height:20px}}.S-ard{transform:rotate(45deg)}.S-arn{display:none}.S-arf{z-index:2}.S-arf,.S-arj{position:absolute}.S-arj{background:var(--o);border-radius:var(--27);box-shadow:rgba(var(--1l),.2) 0 0 6px 2px;width:150px}@media screen and (min-width:630px){.S-arj{width:195px}}.S-arp{border-radius:var(--27) var(--27) 0 0}.S-arl{color:var(--1k);display:block;padding:6px}@media screen and (min-width:630px){.S-arl{padding:var(--2b)}}.SXael{margin:var(--2h) 0;margin-left:var(--2o);margin-right:var(--2o)}.SXael:last-child{margin-bottom:0}@media screen and (min-width:1140px){.SXael{margin-left:var(--2t);margin-right:var(--2t)}}.SXnt{padding:0 var(--2c)}@media screen and (min-width:1140px){.SXnt{padding:0}}.KBf9{margin:var(--2h) 0;width:100%}.KBf9:last-child{margin-bottom:0}.SNap9{background-color:var(--3j);border-radius:var(--27);padding:var(--2b)}.SNl9{display:flex;flex-direction:column;margin-bottom:var(--2a)}@media screen and (min-width:1140px){.SNl9{margin-bottom:var(--2b)}}.SNjn{font-size:14px;line-height:21px;margin:0}@media screen and (min-width:1140px){.SNjn{font-size:18px;line-height:27px}}.SNak7{color:var(--1u);text-transform:uppercase}.SNqh{border-radius:var(--27);height:100%;overflow:hidden}@media screen and (min-width:1140px){.SNqh{border-radius:unset}}.LRf9{max-width:100%;overflow:hidden;position:relative;z-index:1}.LRf9 .LRed{display:none;z-index:10}.LRad-{border-bottom:var(--2a) solid var(--2);height:320px}.LRad- .LRed{background-color:var(--2);border:none;border-radius:var(--27) var(--27) 0 0;bottom:0;color:var(--36);cursor:pointer;display:block;font-size:12px;font-weight:var(--s);left:50%;letter-spacing:1px;line-height:1;padding:var(--2b) var(--2c);position:absolute;transform:translateX(-50%)}.LRad- .LRed:hover{text-decoration:underline}.LRad- .LRed:after{border-bottom:1px solid var(--36);border-right:1px solid var(--36);content:"";display:inline-block;height:6px;margin:0 0 var(--2a) var(--2b);position:relative;transform:rotate(45deg);width:6px}.KZb{display:flex;justify-content:center;margin:var(--2h) 0}.KZb:last-child{margin-bottom:0}.KZb iframe{min-width:290px!important}.KZadd{width:700px}twitter-widget{margin-left:auto;margin-right:auto}.J1b{margin:var(--2h) 0}.J1b:last-child{margin-bottom:0}.JTb{margin:var(--2h) 0;text-align:center}.JTb:last-child{margin-bottom:0}.JTpl{overflow-x:scroll}.JNab7{height:0;position:relative}.JNab7,.JNab9{left:0;width:100%}.JNab9{border:0;height:100%;position:absolute;top:0}.KJb{text-align:center}@media screen and (min-width:1366px){.R3ao7{margin:0 auto;max-width:var(--2z)}}:root{--ii:#c7c7c7}.TDg1{background-color:var(--3j);border:1px solid var(--1v);border-radius:var(--27);display:grid;grid-template-columns:1fr;margin:var(--2h) 0;padding:var(--2c);text-decoration:none}.TDg1:last-child{margin-bottom:0}.TDg1:hover{filter:brightness(110%)}@media screen and (min-width:630px){.TDg1{align-items:center;grid-template-columns:100px 1fr}}.TDjn{text-align:center}@media screen and (min-width:630px){.TDjn{text-align:unset}}.TDar5{display:flex;justify-content:center;width:100%}@media screen and (min-width:630px){.TDar5{justify-content:unset;width:auto}}.TDar7{display:flex;flex-direction:column;height:100%;justify-content:center;margin-left:0;padding-top:var(--2c)}@media screen and (min-width:630px){.TDar7{padding-left:var(--2e);padding-top:0}}.TDar9{align-items:center;display:flex;flex-direction:row;justify-content:center;padding-top:var(--2c);text-align:center}@media screen and (min-width:630px){.TDar9{justify-content:unset;padding-top:var(--2b)}}.TDar-{display:flex;flex-direction:column}.TDasb{height:100px;width:100px}.TDasb,.TDtt{color:#c7c7c7;color:var(--ii)}.TDtt{height:25px;width:25px}.TDasd{margin-right:var(--2b)}.TBg1{background-color:var(--3j);border-radius:var(--27);display:grid;grid-template-columns:100px 1fr;margin:var(--2h) 0;text-decoration:none}.TBg1:last-child{margin-bottom:0}@media screen and (min-width:630px){.TBg1{align-items:center;grid-template-columns:225px 1fr}}.TBarr{height:0;overflow:hidden;padding-bottom:100%;position:relative;width:100%}.TBarr .TBd,.TBarr embed,.TBarr iframe,.TBarr img,.TBarr object{height:100%;left:0;position:absolute;top:0;width:100%}@media screen and (min-width:630px){.TBarr{height:0;overflow:hidden;padding-bottom:60%;position:relative;width:100%}.TBarr .TBd,.TBarr embed,.TBarr iframe,.TBarr img,.TBarr object{height:100%;left:0;position:absolute;top:0;width:100%}}.TBart{border-bottom-left-radius:var(--27);border-top-left-radius:var(--27);display:block}.TBarv{object-fit:fill}.TBarx{object-fit:contain}.TBarz img{object-fit:fill}.TBar1 img{object-fit:contain}.TBl9{display:flex;flex-direction:column;gap:var(--2a);justify-content:center;margin:var(--2b) var(--2c)}.TBjn{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;max-height:84px;overflow:hidden;text-overflow:ellipsis}@media screen and (min-width:630px){.TBjn{font-size:22px;line-height:28px}}.TBar3{text-align:center}@media screen and (min-width:630px){.TBar3{text-align:left}}.TBcp{color:var(--1u);text-transform:uppercase}@media screen and (min-width:630px){.RXao5{display:flex;justify-content:center}}.KTv1{background:#0000;border-radius:var(--27);display:grid;gap:var(--2c);grid-template-columns:1fr;margin:var(--2h) 0}.KTv1:last-child{margin-bottom:0}@media screen and (min-width:630px){.KTv1{grid-template-columns:1fr 1fr}}.KTac3{background:var(--3v);display:flex;flex-direction:column;gap:var(--2b);padding:var(--2d)}.KTab1{display:grid;gap:var(--2c);list-style:none;margin:0;padding-left:var(--2b)}.KTac5{align-items:baseline;display:flex;gap:var(--2b)}.KTac7{flex:1 1}.KTnl{align-items:center;border-radius:50%;display:flex;height:16px;justify-content:center;width:16px}.KTnl.KTac9{background-color:#559b98}.KTnl.KTac-{background-color:#ba6d78}.KTfn{color:var(--o);height:10px;width:10px}.R1b{margin:var(--2h) 0}.R1b:last-child{margin-bottom:0}.R5b{grid-gap:var(--2c);background:var(--3j);border-radius:var(--28);display:grid;margin:var(--2h) 0;padding:var(--2c) 0 var(--2e);place-items:center;text-align:center}.R5b:last-child{margin-bottom:0}.R5ao9{align-items:center;display:flex}.R5ao-{color:var(--p);font-size:28px;font-weight:var(--s);margin:0 var(--2b)}.R5apb{color:var(--1u)}:root{--7h:#f8c609}.D5b{align-items:flex-end;display:flex;list-style:none;margin:0;padding:0}.D5n3{color:#f8c609;color:var(--7h);transition:transform var(--t),color var(--t)}.D5n3.D5n5{color:var(--1m)}.D5n3.D5n7:focus,.D5n3.D5n7:hover{cursor:pointer;transform:scale(1.3)}.D5n3.D5h3{height:14px;margin-right:2px;width:14px}.D5n3.D5n9{height:20px;margin-right:6px;width:20px}.D5n3.D5n-{height:26px;margin-right:var(--2c);width:26px}.D5ob:last-child>*{margin-right:unset}.OVb{align-content:center;display:flex;flex-direction:column;margin:var(--2h) 0}.OVb:last-child{margin-bottom:0}.OVfj{color:var(--o)}.OVfj:hover{color:var(--5s)}.OVjn{color:var(--o)}.OVakl{color:inherit}.OVnj{margin:var(--2c) auto 0}:root{--gk:220px}.QFand{display:flex;justify-content:center;margin-bottom:var(--2b)}.QFand,.QFu9{height:220px;height:var(--gk)}.QFu9{background:#0000;border-radius:var(--27);width:auto}.DZnv{color:var(--d);table-layout:fixed;width:100%}.DZnv .DZml{caption-side:top;margin-bottom:var(--2b)}.DZnv thead td,.DZnv thead th{font-size:18px;line-height:27px;text-align:center}.DZnv tbody tr:nth-child(2n){background:var(--3v)}.DZnv tbody th{padding:12px 16px}.DZnv tbody th[scope]{background:var(--2);color:var(--o);text-transform:uppercase}.DZnv tbody td{padding:12px var(--2d)}@media screen and (min-width:630px){.DZnv tbody td{padding:12px var(--2e)}}.DZnv tbody td,.DZnv tbody th{border-right:2px solid var(--3y);font-size:16px;font-weight:var(--2f);height:48px;line-height:24px;overflow-x:auto;vertical-align:top;white-space:pre-line}.DZnv tbody td:last-child,.DZnv tbody th:last-child{border:0}.RVez{margin:var(--2g) 0}.RVez:last-child{margin-bottom:0}.RZez{margin:var(--2g) 0}.RZez:last-child{margin-bottom:0}.R9apn{height:400px}.BVf9{align-items:center;display:flex;font-weight:500;position:relative}.BVf-,.BVf9{font-size:var(--4)}.BVf-{color:var(--1t);font-weight:var(--s);margin-bottom:var(--2a)}.BVf-.BVgb{color:var(--2)}.BVgd{font-size:var(--7);margin-bottom:var(--2c)}.BVgb:before{animation:BVgf 1s cubic-bezier(.29,0,0,1) infinite;background-color:var(--2);border-radius:100%;content:"";display:inline-block;height:8px;margin-right:var(--2b);width:8px}@keyframes BVgf{1%{opacity:.3}to{opacity:1}}:root{--57:#e02020}.SPap-{display:flex;flex-direction:column;padding:0 0 var(--2c) var(--2b);position:relative}.SPap- [id*=player-]{background-color:initial;margin:0;padding:0}.SPap-:after{background-color:#e02020;background-color:var(--57);border-radius:50%;content:"";height:7px;left:-6px;position:absolute;top:7px;width:7px}@media screen and (min-width:1140px){.SPap-:after{left:1px}}.SPap-:before{background-color:var(--1m);content:"";height:100%;left:-3px;position:absolute;top:7px;width:1px}@media screen and (min-width:1140px){.SPap-:before{left:4px}.SPap-{padding:0 var(--2c) var(--2d) var(--2d)}}.SPaqb,.SPaqd{position:relative}.SPaqd{display:flex;flex-direction:column;flex-wrap:wrap;font-size:14px;line-height:21px}.SPaqf{display:flex;flex-direction:row}.SPaqh{font-weight:var(--s);margin-right:var(--2b)}@media screen and (min-width:1140px){.SPaqh{color:#e02020;color:var(--57)}}.SPaqj,.SPaql{color:var(--1u)}.SPaql{font-size:10px;font-weight:var(--s);line-height:16px;text-transform:uppercase;width:100%}.SPaqn{display:flex;flex-direction:row;gap:var(--2a);margin-top:var(--2b)}@media screen and (min-width:1140px){.SPaqn{margin-top:var(--2c)}}.SPaqp{background-color:#e02020;background-color:var(--57)}.SPaqp,.SPaqr{align-items:center;border-radius:10px;color:var(--36);display:flex;font-size:12px;height:20px;line-height:18px;padding:0 var(--2b);text-transform:uppercase}.SPaqr{background-color:var(--1u)}.SPaqt{fill:var(--36);margin-right:var(--2a);width:9px}.SPaqv{background-color:var(--3j);margin-bottom:var(--2c);padding:var(--2c) 0}.SPaqv:after{content:"";height:8px;left:0;top:23px;width:8px}@media screen and (min-width:1140px){.SPaqv:after{left:var(--2c)}}.SPaqv:before{background-color:var(--3j);left:calc(var(--2n)*-1);top:0;width:calc(100% + var(--2n)*2)}@media screen and (min-width:1140px){.SPaqv:before{content:none}}.SPaqv .SPaqf{padding:0 0 0 var(--2c)}@media screen and (min-width:1140px){.SPaqv{border-radius:var(--27);padding:var(--2c)}}