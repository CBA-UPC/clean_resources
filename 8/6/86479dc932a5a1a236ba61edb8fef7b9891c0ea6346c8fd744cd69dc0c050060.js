(self.webpackChunkweb=self.webpackChunkweb||[]).push([[23350],{6048:(e,i,o)=>{"use strict";o.d(i,{Z:()=>j});var t=o(67294),n=o(37974),s=o(33529),r=o(94829),a=o(95557),l=o(4423),c=o(99408),p=o(55518),d=o(10204),f=o(33487);const m=["to","children","ext","skipAffiliateHandling","isNoLink"];var u,h,g;t b=(u=(0,p.GA)({}),g=class extends t.Component{etLiveURL(e){let i=e;const o=this.props.isMobile?f.ndL:f.Ykj;return this.props.isMobile&&(0,r.jP)(e)?(i=e.split("m.timesofindia.com").join("timesofindia.indiatimes.com"),"/"===i[0]&&(i=f.Ykj+i)):"/"!==i[0]||this.props.route||this.props.spa?this.props.isMobile&&e&&e.indexOf("timesofindia.indiatimes.com")>-1&&-1===e.indexOf("/liveblog/")&&-1===e.indexOf("/blogs/")&&-1===e.indexOf("/readersblog/")&&!this.props.doNotChangeDomain&&!this.props.doNotChangeURL&&(i=e.split("timesofindia.indiatimes.com").join("m.timesofindia.com")):i=o+i,i}static getRelativeUrl(e){return"string"==typeof e&&e.indexOf("https://timesofindia.indiatimes.com")>=0?e.replace("https://timesofindia.indiatimes.com",""):"string"==typeof e&&e.startsWith("http")?new URL(e).pathname:e||""}handleClick(e){if(this.props.data&&(0,l.z)({data:this.props.data}),this.props.ga4Data&&Array.isArray(this.props.ga4Data)&&(0,c.Z)("ga4",...this.props.ga4Data),this.props.ext)return;if(this.props&&this.props.onClick&&(this.props.onClick(e),e.preventDefault()),this.props.extraClick&&this.props.extraClick(),this.props.isNoLink)return;const i=e.target.closest("a");if(!i)return;let o=i.href;i.href&&!this.props.isMobile&&(0,d.E6)()?(e.preventDefault(),window.location.href=(0,d.li)(o)):this.props.isMobile&&!this.props.disableClick&&(e.preventDefault(),!this.props.doNotChangeURL&&!this.props.doNotChangeDomain&&i.href&&i.href.indexOf("timesofindia.indiatimes.com")>0&&-1===i.href.indexOf("/liveblog/")&&-1===i.href.indexOf("/blogs/")&&-1===i.href.indexOf("/readersblog/")&&(o=o.replace("timesofindia.indiatimes.com","m.timesofindia.com")),(0,d.E6)()&&(o=(0,d.li)(o)),i.getAttribute("target")?window.open(o,"_blank"):window.location.href=o)}render(){var e,i;const o=this.props,{to:n,children:r,ext:l,skipAffiliateHandling:c,isNoLink:p}=o,d=_(o,m);let f=n||(this.props.href?this.props.href:"");const u=!c&&(0,a.vP)(f);let h=this.props.rel||"noopener nofollow noreferrer";const g=(0,s.fl)(f),b=(0,s.gR)(f);if(("string"==typeof f&&(f.indexOf("timesofindia.indiatimes.com")>=0||f.indexOf("m.timesofindia.com")>=0||f.startsWith("/"))||g||b)&&(h=(0,s.zn)(f)?"noopener nofollow":"_blank"!==this.props.target||b?void 0:"noopener"),u){const e=this.props.isMobile,i=this.props.isMspArticle;h+=" nofollow sponsored",f=(0,a.es)("",f,e,i).replace("<title>","")}this.props.rel&&"sponsored noopener"===this.props.rel&&(h="sponsored noopener"),(e=>e&&e.includes("/spotlight/")&&e.includes("/articleshow/"))(f)&&h&&!h.includes("sponsored")&&(h+=" sponsored");const k=null!==(e=this.props)&&void 0!==e&&e.target?null===(i=this.props)||void 0===i?void 0:i.target:"";return p?t.createElement("div",w({},d,{onClick:this.handleClick}),r):k?t.createElement("a",w({href:this.getLiveURL(f)},d,{onClick:this.props.onClick||this.handleClick,rel:h,frmappuse:"1",data:void 0,ref:this.props.innerRef,target:k}),r):t.createElement("a",w({href:this.getLiveURL(f)},d,{onClick:this.props.onClick||this.handleClick,rel:h,frmappuse:"1",data:void 0,ref:this.props.innerRef}),r)}},g.defaultProps={onClick:null,to:void 0,children:null,href:void 0,extraClick:null},k=(h=g).prototype,v="handleClick",y=[u],N=Object.getOwnPropertyDescriptor(h.prototype,"handleClick"),z=h.prototype,C={},Object.keys(N).forEach((),C.enumerable=!!C.enumerable,C.configurable=!!C.configurable,("value"in C||C.initializer)&&(C.writable=!0),C=y.slice().reverse().reduce((,C),z&&void 0!==C.initializer&&(C.value=C.initializer?C.initializer.call(z):void 0,C.initializer=void 0),void 0===C.initializer&&(Object.defineProperty(k,v,C),C=null),h);var k,v,y,N,z,C;b.defaultProps={isNoLink:!1,route:void 0,doNotChangeURL:!1,doNotChangeDomain:!1,skipAffiliateHandling:!1,rel:void 0,isMobile:!1,isMspArticle:!1,target:""};const O=(0,n.$j)(()(b),j=t.forwardRef(()},94076:(e,i,o)=>{"use strict";o.r(i),o.d(i,{default:()=>p});var t,n=o(67294),s=o(6048),r=o(28408),a=o.n(r);function l(e,i,o,n){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,r=arguments.length-3;if(i||0===r||(i={children:void 0}),1===r)i.children=n;else if(r>1){for(var a=new Array(r),l=0;l<r;l++)a[l]=arguments[l+3];i.children=a}if(i&&s)for(var c in s)void 0===i[c]&&(i[c]=s[c]);else i||(i=s||{});return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:i,_owner:null}}class c extends n.Component{render(){const{colorTheme:e}=this.props,i=e?a()[e]:"";return l("ul",{className:`${a().sociable} ${i}`},void 0,l("li",{className:a().fb},void 0,l(s.Z,{target:"_blank",rel:"nofollow noreferrer",className:a()["sports-sprite"],"data-ga":"top_header|social_profile_icons|social_fb",to:"https://www.facebook.com/etimesofficial",title:"Facebook"})),l("li",{className:a().twitter},void 0,l(s.Z,{target:"_blank",rel:"nofollow noreferrer",className:a()["sports-sprite"],"data-ga":"top_header|social_profile_icons|social_twitter",to:"https://twitter.com/etimes",title:"Twitter"})))}}c.defaultProps={colorTheme:""};const p=c},41324:(e,i,o)=>{"use strict";o.r(i),o.d(i,{default:()=>m});var t,n=o(67294),s=o(6048),r=o(4423),a=o(33487),l=o(58226),c=o.n(l),p=o(94829);lass f extends n.Component{componentDidMount(){const{isFooter:e,isMweb:i}=this.props;!e&&i&&(0,r.z)({data:{gaCategory:i?"mWeb_top_header_toi":"web_top_header_toi",gaAction:"social_profile_icons",gaLabel:"view",nonInteraction:!0}})}render(){const{colorTheme:e,showTitle:i,showKoo:o,showGnews:t,showWiki:r,isFooter:l,sectionName:f,isMweb:m}=this.props,u=e?c()[e]:"";let h;return h=m&&l?"mWeb_bottom_footer_toi":l?"web_bottom_footer_toi":"web_top_header_toi",n.createElement(n.Fragment,null,i?d("div",{className:""+(l?"social_footer_heading":"")},void 0,"FOLLOW US ON"):"",d("ul",{className:`${c().sociable} ${u} ${l?"social_footer":""}`},void 0,t?d("li",{className:c().gnews},void 0,d(s.Z,{target:"_blank",rel:"nofollow noreferrer",className:c()["sports-sprite"],"data-ga":`${h}|social_profile_icons|click_social_google_news`,to:p.l3[f]?p.l3[f]:p.l3.toi,title:"Google News"})):"",d("li",{className:c().fb},void 0,d(s.Z,"web_top_header_toi"===h?{target:"_blank",rel:"nofollow noreferrer",className:c()["sports-sprite"],to:p.JR[f]?p.JR[f]:p.JR.toi,title:"Facebook"}:{target:"_blank",rel:"nofollow noreferrer",className:c()["sports-sprite"],"data-ga":`${h}|social_profile_icons|click_social_facebook`,to:p.JR[f]?p.JR[f]:p.JR.toi,title:"Facebook"})),d("li",{className:c().twitter},void 0,d(s.Z,{target:"_blank",rel:"nofollow noreferrer",className:c()["sports-sprite"],"data-ga":`${h}|social_profile_icons|click_social_twitter`,to:p.vq[f]?p.vq[f]:p.vq.toi,title:"Twitter"})),d("li",{className:c().rss},void 0,d(s.Z,{className:c()["sports-sprite"],"data-ga":`${h}|social_profile_icons|click_social_rss`,to:`${a.Ykj}/rss.cms`,title:"RSS",target:"_blank",doNotChangeURL:!0})),d("li",{className:c().youtube},void 0,d(s.Z,{target:"_blank",rel:"nofollow noreferrer",className:c()["sports-sprite"],"data-ga":`${h}|social_profile_icons|click_social_youtube`,to:p.Aw[f]?p.Aw[f]:p.Aw.toi,title:"YouTube"})),d("li",{className:c().insta},void 0,d(s.Z,{target:"_blank",rel:"nofollow noreferrer",className:c()["sports-sprite"],"data-ga":`${h}|social_profile_icons|click_social_instagram`,to:p.ZE[f]?p.ZE[f]:p.ZE.toi,title:"YouTube"})),d("li",{className:c().linkedin},void 0,d(s.Z,{target:"_blank",rel:"nofollow noreferrer",className:c()["sports-sprite"],"data-ga":`${h}|social_profile_icons|click_social_linkedin`,to:"https://www.linkedin.com/company/timesofindia/",title:"YouTube"})),o?d("li",{className:c().koo},void 0,d(s.Z,{target:"_blank",rel:"nofollow noreferrer",className:c()["sports-sprite"],"data-ga":`${h}|social_profile_icons|click_social_koo`,to:p.S2[f]?p.S2[f]:p.S2.toi,title:"Koo"})):"",r?d("li",{className:c().wikipedia},void 0,d(s.Z,{target:"_blank",rel:"nofollow noreferrer",className:c()["sports-sprite"],"data-ga":`${h}|social_profile_icons|click_social_wikipedia`,to:"https://en.wikipedia.org/wiki/The_Times_of_India",title:"Wikipedia"})):""))}}f.defaultProps={colorTheme:"",showTitle:!1,showKoo:!1,showGnews:!1,showWiki:!1,isFooter:!1,sectionName:"",isMweb:!1};const m=f},59007:(e,i,o)=>{"use strict";o.r(i),o.d(i,{default:()=>r});var t=o(67294),n=o(68356);const s=o.n(n)()({loader:loading:);class r extends t.Component{nder},33529:(e,i,o)=>{"use strict";o.d(i,{bg:()=>t,fl:()=>s,gR:()=>l,zn:()=>r});o(33487);onst n=["zigwheels.com","mediawire.in"];function s(e){if("string"!=typeof e)return!1;let i=!1;return n.forEach((o=>{e.indexOf(o)>=0&&(i=!0)})),i}onst a=["recipes.timesofindia.com","photogallery.indiatimes.com","beautypageants.indiatimes.com"];function l(e){if("string"!=typeof e)return!1;let i=!1;return a.forEach((o=>{e.indexOf(o)>=0&&(i=!0)})),i}},4423:(e,i,o)=>{"use strict";o.d(i,{z:()=>n});var t=o(55518);function n({data:e}){if("object"!=typeof e)return;let{gaAction:i,gaLabel:o,gaCategory:n}=e;const{nonInteraction:s}=e;"string"==typeof i&&"string"==typeof o&&(e.noSpaceReplace||(i=i.split(" ").join("")),i=i.split("&").join(""),e.noSpaceReplace||(o=o.split(" ").join("")),o=o.split("&").join("")),"string"!=typeof n&&(n=window.categoryForGA);let r=!("undefined"==typeof window||!window.isGaNonInteractive)&&window.isGaNonInteractive;!0===s&&(r=!0),"undefined"!=typeof window&&window.categoryForGA&&e&&!r&&(0,t.yl)("send","event",n,i,o),"undefined"!=typeof window&&window.categoryForGA&&e&&r&&(0,t.yl)("send","event",n,i,o,{nonInteraction:1})}},95557:(e,i,o)=>{"use strict";o.d(i,{_6:()=>l,es:()=>c,vP:);var t=o(94829);const n="PAYTM",s="AMAZON",r="TATACLIQ";function a(e){return e&&(e.includes("paytmmall.com")||e.includes("paytm.com")||e.includes("amazon.in")||e.includes("amazon.com")||e.includes("amazon.co.uk")||e.includes("amazon.ca")||e.includes("amazon.de")||e.includes("amazon.fr")||e.includes("amazon.es")||e.includes("amazon.it")||e.includes("amazon.ae")||e.includes("tatacliq.com")||e.includes("fnp.com")||e.includes("bajajmall.in")||e.includes("croma.com")||e.includes("anrdoezrs.net")||e.includes("dpbolvw.net")||e.includes("kqzyfj.com")||e.includes("jdoqocy.com")||e.includes("kqzyfj.com")||e.includes("dpbolvw.net"))}function l(e){return"string"!=typeof e?"":e.includes("paytmmall.com")||e.includes("paytm.com")?n:e.includes("amazon.in")||e.includes("amazon.co.uk")||e.includes("amazon.ca")||e.includes("amazon.de")||e.includes("amazon.fr")||e.includes("amazon.es")||e.includes("amazon.it")||e.includes("amazon.ae")||e.includes("amazon.com")?s:e.includes("tatacliq.com")?r:e.includes("fnp.com")?"FNP":e.includes("bajajmall.in")?"BAJAJMALL":e.includes("croma.com")?"CROMA":e.includes("anrdoezrs.net")||e.includes("dpbolvw.net")||e.includes("kqzyfj.com")||e.includes("jdoqocy.com")||e.includes("kqzyfj.com")||e.includes("dpbolvw.net")?"NORTON":""}function c(e,i,o=!1,a=!1){const c=l(i),p=function(e){return e===n?"affiliate_paytm":e===s?"affiliate_amazon":e===r?"affiliate_tatacliq":""}(c);let d="";try{d=i&&new URL(i).searchParams.get("tag")}catch(e){return console.log(`Error:unable to convert URL = ${i}, wrong format of overridelink:`,e),""}if(i&&i.includes(p))return i;const f=encodeURIComponent(i);let m;return d||(m=o?function(e="",i){return i===n?"putm=toiwap_articles&":i===s?"&utm_campaign=times_of_india_wap-21":i===r?e.replace(" ","_"):""}(e,c):function(e="",i){return i===n?"putm=toiweb_articles&":i===s?"&utm_campaign=times_of_india_web-21":i===r?e.replace(" ","_"):""}(e,c)),`${(0,t.zu)(o)}/${p}.cms?url=${f}${e?`&title=${e}`:""}${a?"&ismsp=yes":""}${d?"":`&${m}`}`}},28408:58226:e=>{e.exports={"sports-sprite":"t3kaD",sociable:"r0m20",fb:"_SFqk",twitter:"o1jxn",linkedin:"KJVoK",rss:"_0HkkF",youtube:"TuB9M",insta:"z2Y3D",koo:"TDc_f",wikipedia:"jGnSa",gnews:"SDXk_",darkTheme:"yNUoM"}}}]);
//# sourceMappingURL=Socials_es6_module.8a194792.chunk.js.map