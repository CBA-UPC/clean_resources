![function(e,t,n){"use strict";n.r(t);const i=["misc","homepage","frontpage","subfrontpage","article","videoarticle","listing","gallery","chart","search","detail","adarticle","community","dossier","maps","rating","ratingsingle","question","special","blog","login","logout","shop","games","articledl","programmgrid","broadcasterdetail","de","live","us","getfile","test","recipe","ticker","articlelm","articlepm","profile","articlenews","channelizer","homepagelogin","ratingnew","answer","catalog","ratingdetail","offer","brandhub","layer","gallerydetail","articlemag","interview","articlelu","frontpagelu","testlu","grid"],o=["misc","article","videoarticle","listing","chart","detail","adarticle","community","questions","special","blog","shop","games","articledl","articlelu","search","broadcasterdetail","test","recipe","ticker","articlelm","articlepm","articlenews","catalog","ratingdetail","offer","brandhub","ratingsingle","rating"],d=["programmgrid"],s={1:{type:"gender",value:1,label:"Weiblich"},2:{type:"gender",value:2,label:"Männlich"},3:{type:"gender",value:3,label:"Divers"},4:{type:"age",value:1,label:"18-19"},5:{type:"age",value:2,label:"20-29"},6:{type:"age",value:3,label:"30-39"},7:{type:"age",value:4,label:"40-49"},8:{type:"age",value:5,label:"50-59"},9:{type:"age",value:6,label:"60+"},10:{type:"income",value:1,label:"500€ - 1500€"},11:{type:"income",value:2,label:"2500€ - 4000€"},12:{type:"income",value:3,label:"1500€ - 2500€"},13:{type:"income",value:4,label:"4000€ +"}};function a(){return void 0!==window.bf__bfa_metadata&&window.bf__bfa_metadata.status&&1===window.bf__bfa_metadata.status.code}function r(e){return document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)")?document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)").pop():void 0}function w(e){const t=new Date;t.setTime(t.getTime()+-6e4);const n="; expires=".concat(t.toGMTString());document.cookie="".concat(e,"=").concat(n,"; path=/")}function p(){return new Promise(e=>{if(window._deqOptions.tcf2disabled)e(!0);else{const t=t=>{const n=t.vendor.consents,i=t.purpose.consents,o=t.purpose.legitimateInterests;let d;n[213]?window.sessionStorage.setItem("emqcons","true"):(window.sessionStorage.setItem("emqcons","false"),w("adp_segs")),Object.keys(i).length>0?(Object.keys(i).forEach(e=>{i[e]||(d=2)}),2!==window._deqOptions.consentStatus&&(d=3)):Object.keys(o).length>0&&o[2]&&o[7]&&o[8]&&o[10]&&(d=1);const s=window.sessionStorage.getItem("nidpermissions"),a=window.sessionStorage.getItem("nid"),r=window.localStorage.getItem("@@auth0spajs@@::mQICv5poT8NaPRFSHCsylkJ3Q2ReK2Gg::default::openid profile email"),p=["c",3===d?1:0,"n",s?1:0,a?1:0],c=["c",3===d?1:0,"a",r?1:0];window._deqOptions.parid=`${p.join("")},${c.join("")}`,window._deqOptions.permutiveAddonObj.page.parid=window._deqOptions.parid,e(t.tcString)};window.__tcfapi("addEventListener",2,(e,n)=>{n&&/tcloaded|useractioncomplete/.test(e.eventStatus)&&t(e)})}})}function c(e){window.apntag=window.apntag||{},window.apntag.anq=window.apntag.anq||[],window.__permutive=window.__permutive||{},window.__permutive.appnexusEvents=window.__permutive.appnexusEvents||[],["adRequested","adAvailable","adBadRequest","adLoaded","adNoBid","adError","adCollapse"].forEach(e=>{window.apntag.anq.push(()=>{window.apntag.onEvent(e,t=>{window.__permutive.appnexusEvents.push({eventType:e,arg:t})})})}),window.permutive.context=e,window._deqOptions.init.permutive=!0,window._deqOptions.permutiveCallbackReady=!0}function u(e){e&&(window.__sugarlessAudience=e),window._deqOptions.permutiveAddonObj&&window._deqOptions.permutiveAddonObj.page&&(window._deqOptions.permutiveAddonObj.page.sugarless={audience:window.__sugarlessAudience}),localStorage.setItem("sugarless_audience",JSON.stringify(window.__sugarlessAudience))}function l(e){const t=window.permutive&&window.permutive.context;0===e||void 0!==t&&void 0!==t.user_id?fetch("https://demographics.bf-sugarless-production.aws.bfops.io/api/predict/submit",{method:"POST",headers:{"x-api-key":"m9UN4GBTqR4YfwV2dB6iI5KWF3xPQEfS4R1iitUd","Content-Type":"application/json"},body:JSON.stringify({user_id:t?t.user_id:"",client:{referrer:t?t.referrer:"",title:document.title,type:"web",url:t?t.url:"",user_agent:navigator.userAgent},geo_info:{city:t?t.city:"",country:t?t.country:"",continent:t?t.continent:"",province:t?t.province:""}})}).then(e=>diction=e,u()}):setTimeout(l,300,e-1)}function m(e,t,n){!function(e,t,n,i,o){if(!t){t=t||{},window.permutive=t,t.q=[],t.config=o||{},t.config.projectId="c8c3489e-f329-40e8-bcfc-1f852e512b01",t.config.apiKey="5fb72d88-baeb-4ca1-aa5a-6b7c921e159d",t.config.environment=t.config.environment||"production";for(var d=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],s=0;s<d.length;s++){vrguments:n})}}(a)}}}(document,window.permutive,0,0,n);const i=e.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.permutive.com/c8c3489e-f329-40e8-bcfc-1f852e512b01-web.js";const o=e.getElementsByTagName("script")[0];o.parentNode.insertBefore(i,o)}function _(e){let t,n=document.querySelector("link[rel='canonical']")&&document.querySelector("link[rel='canonical']").getAttribute("href")||document.location.href,i=!1;-1===n.indexOf(document.domain)&&(i=document.location.protocol+document.location.host+document.location.pathname),-1!==n.indexOf("focus.de")&&-1===n.indexOf("praxistipps.focus.de")&&window._deqOptions.contentid&&window._deqOptions.contentid.split("-").length>1&&(n="https://www.focus.de/"+window._deqOptions.contentid.split("-")[1]),document.location.href.includes(".ece?token")||(t=`https://mds.bf-tools.net/api/v1/getMetadata?id=${window._deqOptions.contentid}&caller=bfa-web\n&url=${encodeURIComponent(n)}`,i&&(t+="&altUrl="+encodeURIComponent(i))),fetch(t,{method:"GET"}).then(e=>then(t=>{e(t)})}function g(...e){console.log(e)}function f(){const e={projectId:"c8c3489e-f329-40e8-bcfc-1f852e512b01",apiKey:"5fb72d88-baeb-4ca1-aa5a-6b7c921e159d",cookieDays:180,debug:!1,version:1},t={};function n(e){const t=document.cookie.split(";");let n,i,o=!1;for(n=0;n<t.length;n++)i=t[n].substring(1,t[n].length).split("="),"perm_dnt"===i[0]&&"true"===i[1]&&(o=!0);return"function"==typeof e&&e(o),o}return window.getDataIR=()=>{const e={Interest_N2U_newsletter_Energie:128394,Interest_N2U_newsletter_Klima:128396,Interest_N2U_newsletter_Finanzen:128409,Interest_N2U_newsletter_Immobilien:128403,Interest_N2U_newsletter_Gesundheit:128043,Interest_N2U_newsletter_Finanzen_v2:144287,"Sugarless_Deals-Team-Cohorte_Deals_allgemein":144070,Interest_N2U_newsletter_Finanzen_v3:155415,Interest_N2bS_newsletter_China_v1:164907,"Interest_HomeTeam_appwall-cp_general creative":172240,"Sugarless_Deals-Team_Cohorte_Deals_allgemein":144070,"Interest_Lifestyle_Schnäppchenjäger":10767,"Black Friday Deal Shopper":157224,Interest_Special_ShoppingDeals:4988,"Sugarless Audience: First Party Interests : Holiday Shopping":478,"Sugarless Audience: First Party Interests : Food & Drink (210)":118949,"Sugarless Audience: First Party Interests : Alcoholic Beverages (211)":118950,"Interest_Special_Focus-Weinstube":115098},t={segments:{}};try{const n=JSON.parse(window.localStorage.getItem("_psegs"));Object.keys(e).forEach(i=>{t.segments[i]=n.indexOf(e[i])>0})}catch(e){t.error=e}return t},{init:function(){if(!window._deqOptions.initialized)if(e.doNotTrack=n(),e.doNotTrack)g("DoNotTrack is set.");else{if(u(JSON.parse(localStorage.getItem("sugarless_audience")||"{}")),window.addEventListener("SugarlessWidgetAnswer",e=>{if(e&&e.detail&&e.detail.survey&&e.detail.survey.solution&&"Sugarless"===e.detail.survey.solution&&(window.permutive.track("SurveyResponse",e.detail),e.detail.answer&&e.detail.answer.optionIdentifier)){const t=s[e.detail.answer.optionIdentifier];t&&(window.__sugarlessAudience.survey=window.__sugarlessAudience.survey||{},window.__sugarlessAudience.survey[t.type]=t.value,u())}}),window.__sugarlessAudience&&window.__sugarlessAudience.prediction||l(10),window.addEventListener("ChipAdvisorAnswer",e=>{e&&e.detail&&e.detail.survey&&e.detail.survey.solution&&"chipadvisor"===e.detail.survey.solution&&window.permutive.track("SurveyResponse",e.detail)}),window._deqOptions.siteConfig.emq&&!window._deqOptions.init.emq&&p().then(e=>{!function(e){const t=`https://rtt.bf-tools.net/ctx?event_id=ctx_json&_sid=91628&hostSiteUrl=${document.location.href}\n&referrer=${document.referrer}&userAgent=${encodeURIComponent(navigator.userAgent)}&userLang=${navigator.language}\n&gdpr=1&gdpr_consent=${e}`;fetch(t,{method:"GET"}).then(e__emqSegments=e})}(e),window._deqOptions.init.emq=!0}),window._deqOptions.siteConfig.permutive&&!window._deqOptions.init.permutive){let e={};!function(){if(window._deqOptions.siteConfig.permutiveCtx){fetch("https://api.permutive.com/ctx/v1/segment?k=5fb72d88-baeb-4ca1-aa5a-6b7c921e159d",{method:"POST",body:JSON.stringify({pageProperties:function(e){try{return Object.assign(e,{client:{url:document.URL,referrer:document.referrer,type:"web",user_agent:navigator.userAgent,domain:window.location.hostname,title:document.title}})}catch(t){return e}}(window._deqOptions.permutiveAddonObj.page),url:document.URL})}).then(e=>e.json()).then(e=>{window.permutive&&window.permutive.addon("contextual",e);const t=e.xandr||[];window.__permutiveContextual=t.concat("rts")})}}(),window._deqOptions.siteConfig.consent?(e={consentRequired:!0},p().then(n=>{!function(e){const t="1"===localStorage.getItem("nidchecked"),n="https://einwilligungsspeicher.netid.de/netid-permissions?q.tapp_id.eq="+e.netIdTappId;let i=0;e.netIdPing&&!t&&fetch(n,{credentials:"include"}).then(e=>e.json()).then(e=>{400===e.status&&"NO_TPID"===e.status_code?i=0:404===e.status&&"PERMISSIONS_NOT_FOUND"===e.status_code&&(i=1),window.localStorage.setItem("nidchecked","1"),window.permutive.track("FormSubmission",{form:{properties:[{name:"netid",value:i}]}})})}(window._deqOptions.siteConfig);window._deqOptions.tcf2disabled?(m(document,window.permutive,e),window.permutive.consent({opt_in:!0,token:n}),c()):window.__tcfapi("getCustomVendorConsents",2,i=>{const o=i.grants;if(o["5eff0d77969bfa03746427eb"]&&o["5eff0d77969bfa03746427eb"].vendorGrant)m(document,window.permutive,e),window.permutive.consent({opt_in:!0,token:n}),"true"!==window.localStorage.getItem("nidstatknown")&&(void 0!==window._sp_&&void 0!==window._sp_.config&&void 0!==window._sp_.config.targetingParams&&void 0!==window._sp_.config.targetingParams.netiduser&&0===window._sp_.config.targetingParams.netiduser&&window.permutive.ready(()=>{window.permutive.track("bfTrack",{name:"netidlayer",string:"not_available",contentid:window._deqOptions.contentid,jobid:window._deqOptions.jobid})}),window.localStorage.setItem("nidstatknown","true")),c(t);else{const e=["permutive-id","permutive-consent","_papns","_psegs","_ppam","_pcrprs","_pcrdbs"];try{w("permutive.removeItem(e)})}catch(e){g("Data Engine error: "+e)}}})})):(m(document,window.permutive,e),c())}if(window._deqOptions.siteConfig.mdsapi&&!window._deqOptions.init.mdsapi||a()){const e=e=>{if(e){const t=e.status,n=e.xandr;let i=[],o=[],d=[],s=[],a={};e.mdsStatus&&e.mdsStatus.code&&n&&n.sis&&(i=tive.includes(e)),o=n.sis.keywords,d=n.pie.bestcheck,s=n.bestlink.bestlinks,a=n.sentiment),window.__mdsIabCat=window.__mdsIabCat||i.join(","),window.__mdsKeywords=window.__mdsKeywords||o.join(","),window.__mdsPieBcCat=window.__mdsPieBcCat||d.join(","),window.__mdsBestLink=window.__mdsBestLink||s,window.__mdsSentiment=window.__mdsSentiment||a;const w=window._deqOptions.contentid,p=[],c=r("adp_segs");if(c){const e=c.split(",");let t;for(t=0;t<e.length;t++)p.push(e[t])}window._deqOptions.permutiveAddonObj.page={keywords:window._deqOptions.keywordArray,status:t,contentid:w,jobid:window._deqOptions.jobid,emqsegs:p,sis:[{iab:i,keywords:o}],pie:[{catalog:"bestcheck",categories:d}],classifications_watson:{taxonomy:"$alchemy_taxonomy",taxonomy_labels:"$taxonomy_labels",concepts:"$alchemy_concepts",entities:"$alchemy_entities",keywords:"$alchemy_keywords",watson_sentiment:"$alchemy_document_sentiment"},sugarless:{audience:window.__sugarlessAudience,sentiment:a},pnj:window._deqOptions.pnj,parid:window._deqOptions.parid,author:window._deqOptions.author,pageviewRevenueId:window._deqOptions.pageviewRevenueId,pageJob:window._deqOptions.pageJob,pagePublishDateTimeUtc:window._deqOptions.pagePublishDateTimeUtc,pageUpdateDateTimeUtc:window._deqOptions.pageUpdateDateTimeUtc}}};a()&&e(window.bf__bfa_metadata),window._deqOptions.siteConfig.mdsapi&&!window._deqOptions.init.mdsapi&&_(e),window._deqOptions.init.mdsapi=!0}window._deqOptions.siteConfig.wfx&&!window._deqOptions.init.wfx&&function(){const e="https://partners.wfxtriggers.com/json/?resp_type=json&current=true\n&df=1,2,3&acctid="+window._deqOptions.siteConfig.wfxAccountId;fetch(e,{metthen(e=>e.json()).then(e=>{e.wfxtg&&(window.__wfxData=e.wfxtg.current.toString(),window._deqOptions.permutiveAddonObj.page.wfxtg=window.__wfxData,window._deqOptions.init.wfx=!0)})}(),(document.getElementById("opinary-automation-placeholder")||document.getElementsByClassName("opinary-widget-wrapper").length>0)&&(window._deqOptions.opinaryEventListener||(window._deqOptions.opinaryEventListener=!0,window.addEventListener("OpinaryReady",()=>{window.Opinary.on("opinary.vote",(e,t)=>{const n={...e,...t};window.localStorage.setItem("opinaryVote",JSON.stringify(n)),window.permutive&&t.dmpIntegration&&window.permutive.track("SurveyResponse",{survey:{id:t.pollId,type:t.type,solution:"Opinary"},question:{text:t.header},answer:{text:e.label,posX:e.x||0,posY:e.y||0,optionIdentifier:e.optionID||"",optionPosition:e.position||0,rawValue:e.value||0,unit:e.unit||""}})})}))),window._deqOptions.initialized=!0}},track:function(e,t){window.whenDefined(window._deqOptions,"permutiveCallbackReady",()=>{window.permutive.ready(()=>{t.visit_id=window.permutive.context.view_id,t.contentid=window._deqOptions.contentid,window.permutive.track(e,t)})})},setConfig:function(t){return window._deqOptions.initialized?g("DateEngine config already set."):Object.keys(t).forEach(n=>{e[n]=t[n]}),this},setContext:function(e){Objecth(n=>{t[n]=eypeof t&&t(e),e},setDNTCookie:function(){const t=new Date;t.setDate(t.getDate()+e.cookieDays);const n="; expires="+t.toUTCString();document.cookie=`perm_dnt=true${n}; path=/`},getDNTCookie:n00 GMT; path=/"},getSegments:function(e){let t=[];return window.peegments(e=>{t=e}),"function"==typeof e&&r(){this.de=f()}push(...e){let t;for(t=0;t<e.length;t++)try{if("function"==typeof e[t])e[t]();else{const n=e[t][0];this.de[e[t][0]].apply(n,e[t].slice(1))}}catch(e){g("Data Engine error: "+e)}}}window.whenDefined=window.whenDefined||function(e,t,n){e[t]?n():Object.defineProperty(e,t,{configurable:!0,enumerable:!0,urn this["_"+t]},set:function(e){this["_"+t]=e,n()}})};(()=>{const e=window.utag_data;window._deqOptions=window._deqOptions||{},window._deqOptions.init=window._deqOptions.init||{},window._deqOptions.permutiveAddonObj=window._deqOptions.permutiveAddonObj||{},window._deqOptions.tcf2disabled=document.location.href.includes("tcf2disabled"),window._deqOptions.keywordArray=window._deqOptions.keywordArray||[],window._deqOptions.source="direct";const t=document.currentScript.dataset;t.config=t.config.replace(/'/gi,'"');const n=JSON.parse(t.config);if(e?(window._deqOptions.contentid=e.pageContentId,window._deqOptions.layout=e.pageTemplate,window._deqOptions.jobid="J"+e.pageJobId,window._deqOptions.keywords=e.pageAdKeyword,window._deqOptions.pnj=`J${e.pageJobId}${e.salesforcePartnerId}`,window._deqOptions.author=e.pageAuthor?e.pageAuthor.join(""):"n/a",window._deqOptions.pageviewRevenueId=e.pageviewRevenueId,window._deqOptions.pageJob=e.pageJob,window._deqOptions.pagePublishDateTimeUtc=e.pagePublishDateTimeUtc,window._deqOptions.pageUpdateDateTimeUtc=e.pageUpdateDateTimeUtc,window._deqOptions.pageSpecial=e.pageSpecial):(n.source&&(window._deqOptions.source=n.source),n.layout&&(window._deqOptions.layout=n.layout),n.jobid&&(window._deqOptions.jobid=n.jobid),n.keywords&&(window._deqOptions.keywords=n.keywords)),i.includes(window._deqOptions.layout)||n.layout&&(window._deqOptions.layout=n.layout),window._deqOptions.keywords&&("string"==typeof window._deqOptions.keywords?window._deqOptions.keywords.split(",").forEach(e=>{window._deqOptions.keywordArray.push({name:e,type:"BF custom kw"})}):window._deqOptions.keywords.forEach(e=>{"n/a"!==e&&window._deqOptions.keywordArray.push({name:e,type:"BF custom kw"})})),function(){let e=!1,t=!0;window._deqOptions.layout&&(o.forEach(t=>{if(t===window._deqOptions.layout)return e=!0,e}),d.forEach(e=>{if(e===window._deqOptions.layout)return t=!1,t}));const n={"bestcheck.de":{mdsapi:e,emq:!0,permutive:t,permutiveCtx:!1,wfx:!1,consent:!0},"bf-ad.net":{mdsapi:!1,emq:!0,permutive:t,permutiveCtx:!1,wfx:!1,consent:!0},"bunte.de":{mdsapi:e,emq:window._deqOptions.layout&&"channelizer"!==window._deqOptions.layout,permutive:t,permutiveCtx:!0,wfx:!1,consent:window._deqOptions.layout&&"channelizer"!==window._deqOptions.layout,netIdPing:!1,netIdTappId:"e98ca2ac-6596-47f4-affc-724aefe02fa1"},"chip.de":{mdsapi:e,emq:window._deqOptions.layout&&"channelizer"!==window._deqOptions.layout,permutive:t,permutiveCtx:!0,wfx:window._deqOptions.layout&&"channelizer"!==window._deqOptions.layout,wfxAccountId:"U87CFV",consent:!0,netIdPing:!1,netIdTappId:"1a0e3a41-fe3d-447c-af9a-3fc4640171c5"},"cinema.de":{mdsapi:e,emq:!0,permutive:t,permutiveCtx:!0,wfx:"adengine"===window._deqOptions.source,wfxAccountId:"BX44UI",consent:!0},"dasprodukt.de":{mdsapi:!1,emq:!1,permutive:t,permutiveCtx:!0,wfx:!1,wfxAccountId:!1,consent:!0},"efahrer.chip.de":{mdsapi:e,emq:window._deqOptions.layout&&"channelizer"!==window._deqOptions.layout,permutive:t,permutiveCtx:!0,wfx:window._deqOptions.layout&&"channelizer"!==window._deqOptions.layout,wfxAccountId:"U87CFV",consent:!0},"federiko.de":{mdsapi:!1,emq:!1,permutive:t,permutiveCtx:!0,wfx:!1,wfxAccountId:!1,consent:!0},"finanzen100.de":{mdsapi:e,emq:!0,permutive:t,permutiveCtx:!0,wfx:!0,wfxAccountId:"TH234Z",consent:!0},"fitforfun.de":{mdsapi:e,emq:!0,permutive:t,permutiveCtx:!0,wfx:"adengine"===window._deqOptions.source,wfxAccountId:"KS5F55",consent:!0},"focus.de":{mdsapi:!a()&&e,emq:window._deqOptions.layout&&"channelizer"!==window._deqOptions.layout,permutive:t,permutiveCtx:!0,wfx:window._deqOptions.layout&&"channelizer"!==window._deqOptions.layout,wfxAccountId:"ZSWR33",consent:!0},localhost:{mdsapi:e,emq:!0,permutive:t,permutiveCtx:!0,wfx:!1,consent:!1},"netmoms.de":{mdsapi:e,emq:!0,permutive:t,permutiveCtx:!0,wfx:!0,wfxAccountId:"Q983II",consent:!0},"so-stadt.de":{mdsapi:e,emq:!0,permutive:t,permutiveCtx:!0,wfx:!1,wfxAccountId:"TODO",consent:!0},"streampicker.de":{mdsapi:e,emq:!0,permutive:t,permutiveCtx:!1,wfx:!1,consent:!0},"tvspielfilm.de":{mdsapi:e,emq:!0,permutive:t,permutiveCtx:!0,wfx:!1,consent:!0},"tvtoday.de":{mdsapi:e,emq:!0,permutive:t,permutiveCtx:!0,wfx:!1,consent:!0},"weather.com":{mdsapi:e,emq:!1,permutive:!1,permutiveCtx:!1,wfx:!1,consent:!1}},i=window.location.host.split(".");window._deqOptions.siteConfig=n[i.length>2?i.shift()&&i.join("."):i.join(".")],-1!==window.location.host.indexOf("efahrer.chip.de")&&(window._deqOptions.siteConfig=n["efahrer.chip.de"]),window._deqOptions.siteConfig}(),window.whenDefined(window._deqOptions,"permutiveCallbackReady",()=>{const e=window.sessionStorage.getItem("nid");e?window.permutive.identify([{id:e,tag:"netid",priority:1}]):function e(t,n,i){return window.sessionStorage.getItem(t)?(clearTimeout(i),"function"!=typeof n?window.sessionStorage.getItem(t):n(window.sessionStorage.getItem(t))):setTimeout(e.bind(null,t,n),100)}("nid",e=>{window.permutive.identify([{id:e,tag:"netid",priority:1}])});let t=!1;const n=localStorage.getItem("@@auth0spajs@@::mQICv5poT8NaPRFSHCsylkJ3Q2ReK2Gg::default::openid profile email");n&&(t=JSON.parse(n).body.decodedToken.user.sub,t&&window.permutive.identify([{id:t,tag:"auth0",priority:1}]));const i=r("ttd_uuid");if(i&&window.permutive.identify([{id:i,tag:"ttd"}]),!window._deqOptions.permutiveAddonSet)if(window._deqOptions.siteConfig.emq)if(window.__emqSegments)window._deqOptions.permutiveAddonObj.page.emqrtt=window.__emqSegments,window.permutive.addon("web",window._deqOptions.permutiveAddonObj),window._deqOptions.permutiveAddonSet=!0;else{const e=setTimeout(()=>{window._deqOptions.permutiveAddonSet||(window.__emqSegments&&(window._deqOptions.permutiveAddonObj.page.emqrtt=window.__emqSegments),window.permutive.addon("web",window._deqOptions.permutiveAddonObj),window._deqOptions.permutiveAddonSet=!0),clearTimeout(e)},200);window.whenDefined(window,"__emqSegments",()=>{window._deqOptions.permutiveAddonSet||(window._deqOptions.permutiveAddonObj.page.emqrtt=window.__emqSegments,window.permutive.addon("web",window._deqOptions.permutiveAddonObj),window._deqOptions.permutiveAddonSet=!0,clearTimeout(e))})}else window.permutive.addon("web",window._deqOptions.permutiveAddonObj),window._deqOptions.permutiveAddonSet=!0}),window._deqOptions.permutiveAddonObj=window._deqOptions.permutiveAddonObj||{},window._deqOptions.permutiveAddonObj.page=window._deqOptions.permutiveAddonObj.page||{},window._deqOptions.permutiveAddonObj.page.contentid=window._deqOptions.contentid,window._deqOptions.permutiveAddonObj.page.jobid=window._deqOptions.jobid,window._deqOptions.permutiveAddonObj.page.keywords=window._deqOptions.permutiveAddonObj.page.keywords||window._deqOptions.keywordArray,window._deqOptions.permutiveAddonObj.page.pnj=window._deqOptions.pnj,window._deqOptions.permutiveAddonObj.page.author=window._deqOptions.author,window._deqOptions.permutiveAddonObj.page.pageviewRevenueId=window._deqOptions.pageviewRevenueId,window._deqOptions.permutiveAddonObj.page.pageJob=window._deqOptions.pageJob,window._deqOptions.permutiveAddonObj.page.pagePublishDateTimeUtc=window._deqOptions.pagePublishDateTimeUtc,window._deqOptions.permutiveAddonObj.page.pageUpdateDateTimeUtc=window._deqOptions.pageUpdateDateTimeUtc,window._deqOptions.permutiveAddonObj.page.pageSpecial=window._deqOptions.pageSpecial,window._deq&&!window._deq.apiReady){const e=localStorage.getItem("_psegs"),t=8550;if(e){const n=JSON.parse(e).ma.filter(e=>e===t);if(n&&n.length>0){const e=document,t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://a.bf-ad.net/permutive/activation.js";e.head.appendChild(t)}}}if(!window._deq||window._deq&&!window._deq.apiReady){const e=window._deq;window._deq=new v,e&&window._deq.push(...e),window._deq.apiReady=!0}})()}]);