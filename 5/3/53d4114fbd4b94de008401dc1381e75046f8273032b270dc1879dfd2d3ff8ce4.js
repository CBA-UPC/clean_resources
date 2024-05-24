;var MonsterInsights=function(){var e=[],i='',r=!1;this.setLastClicked=function(t,n,i){t=typeof t!=='undefined'?t:[];n=typeof n!=='undefined'?n:[];i=typeof i!=='undefined'?i:!1;e.valuesArray=t;e.fieldsArray=n};this.getLastClicked=function(){return e};this.setInternalAsOutboundCategory=function(e){i=e};this.getInternalAsOutboundCategory=function(){return i};this.sendEvent=function(e,t,n){x(e,t,n,[])};function d(){if(window.monsterinsights_debug_mode){return!0}
else{return!1}};function c(e,t,n){var l={};for(var i in e){if(!e.hasOwnProperty(i)){continue};if(t&&t.indexOf(i)===-1){continue};if(n&&n.indexOf(i)>-1){continue};l[i]=e[i]};return l};function b(e,t,n){if(!monsterinsights_frontend.v4_id||e!=='event'){return};var i=n.event_category||'',a=['event_name','event_category','event_label','value',],l=c(n,null,a);l.action=t;l.send_to=monsterinsights_frontend.v4_id;let hitType=i.replace('-','_');if(i.indexOf('outbound-link')!==-1){hitType='click'}
else if(i==='download'){hitType='file_download'};__gtagTracker(e,hitType,l)};function y(e,t,n){if(!monsterinsights_frontend.ua){return};var l=['event_category','event_label','value',],i=c(n,l);i.send_to=monsterinsights_frontend.ua;__gtagTracker(e,t,i)};function l(t,i,l,a){t=typeof t!=='undefined'?t:'event';i=typeof i!=='undefined'?i:'';a=typeof a!=='undefined'?a:[];l=typeof l!=='undefined'?l:{};y(t,i,l);b(t,i,l);e.valuesArray=a;e.fieldsArray=l;e.fieldsArray.event_action=i;e.tracked=!0;n('Tracked: '+a.type);n(e)};function x(t,i,l,a){t=typeof t!=='undefined'?t:'event';i=typeof i!=='undefined'?i:'';a=typeof a!=='undefined'?a:[];l=typeof l!=='undefined'?l:{};__gtagTracker(t,i,l);e.valuesArray=a;e.fieldsArray=l;e.fieldsArray.event_action=i;e.tracked=!0;n('Tracked: '+a.type);n(e)};function t(t){t=typeof t!=='undefined'?t:[];e.valuesArray=t;e.fieldsArray=[];e.tracked=!1;n('Not Tracked: '+t.exit);n(e)};function n(e){if(d()){console.dir(e)}};function o(e){return e.replace(/^\s+|\s+$/gm,'')};function u(){var n=0,e=document.domain,i=e.split('.'),t='_gd'+(new Date()).getTime();while(n<(i.length-1)&&document.cookie.indexOf(t+'='+t)==-1){e=i.slice(-1-(++n)).join('.');document.cookie=t+'='+t+';domain='+e+';'};document.cookie=t+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain='+e+';';return e};function h(e){e=e.toString();e=e.substring(0,(e.indexOf('#')==-1)?e.length:e.indexOf('#'));e=e.substring(0,(e.indexOf('?')==-1)?e.length:e.indexOf('?'));e=e.substring(e.lastIndexOf('/')+1,e.length);if(e.length>0&&e.indexOf('.')!==-1){e=e.substring(e.lastIndexOf('.')+1);return e}
else{return''}};function w(e){return e.which==1||e.which==2||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey};function g(){var e=[];if(typeof monsterinsights_frontend.download_extensions=='string'){e=monsterinsights_frontend.download_extensions.split(',')};return e};function m(){var e=[];if(typeof monsterinsights_frontend.inbound_paths=='string'){e=JSON.parse(monsterinsights_frontend.inbound_paths)};return e};function T(e){if(e.which==1){return'event.which=1'}
else if(e.which==2){return'event.which=2'}
else if(e.metaKey){return'metaKey'}
else if(e.ctrlKey){return'ctrlKey'}
else if(e.shiftKey){return'shiftKey'}
else if(e.altKey){return'altKey'}
else{return''}};function A(e){var f=g(),l=m(),t='unknown',d=e.href,v=h(e.href),c=u(),r=e.hostname,a=e.protocol,k=e.pathname;d=d.toString();var s,p,b=e.getAttribute('data-vars-ga-category');if(b){return b};if(d.match(/^javascript\:/i)){t='internal'}
else if(a&&a.length>0&&(o(a)=='tel'||o(a)=='tel:')){t='tel'}
else if(a&&a.length>0&&(o(a)=='mailto'||o(a)=='mailto:')){t='mailto'}
else if(r&&c&&r.length>0&&c.length>0&&!r.endsWith('.'+c)&&r!==c){t='external'}
else if(k&&JSON.stringify(l)!='{}'&&k.length>0){var y=l.length;for(var n=0;n<y;n++){if(l[n].path&&l[n].label&&l[n].path.length>0&&l[n].label.length>0&&k.startsWith(l[n].path)){t='internal-as-outbound';i='outbound-link-'+l[n].label;break}}}
else if(r&&window.monsterinsights_experimental_mode&&r.length>0&&document.domain.length>0&&r!==document.domain){t='cross-hostname'};if(v&&(t==='unknown'||'external'===t)&&f.length>0&&v.length>0){for(s=0,p=f.length;s<p;++s){if(f[s].length>0&&(d.endsWith(f[s])||f[s]==v)){t='download';break}}};if(t==='unknown'){t='internal'};return t};function O(e,t){var n=(e.target&&!e.target.match(/^_(self|parent|top)$/i))?e.target:!1;if(t.ctrlKey||t.shiftKey||t.metaKey||t.which==2){n='_blank'};return n};function v(e){if(e.getAttribute('data-vars-ga-label')&&e.getAttribute('data-vars-ga-label').replace(/\n/ig,'')){return e.getAttribute('data-vars-ga-label').replace(/\n/ig,'')}
else if(e.title&&e.title.replace(/\n/ig,'')){return e.title.replace(/\n/ig,'')}
else if(e.innerText&&e.innerText.replace(/\n/ig,'')){return e.innerText.replace(/\n/ig,'')}
else if(e.getAttribute('aria-label')&&e.getAttribute('aria-label').replace(/\n/ig,'')){return e.getAttribute('aria-label').replace(/\n/ig,'')}
else if(e.alt&&e.alt.replace(/\n/ig,'')){return e.alt.replace(/\n/ig,'')}
else if(e.textContent&&e.textContent.replace(/\n/ig,'')){return e.textContent.replace(/\n/ig,'')}
else{return undefined}};function K(e){var i=e.children,l=0,a,n;for(var t=0;t<i.length;t++){a=i[t];n=v(a);if(n){return n};if(l==99){return undefined};l++};return undefined};function k(n){var a=n.srcElement||n.target,e=[],k;e.el=a;e.click_type=T(n);if('undefined'===typeof __gtagTracker||!w(n)){e.exit='loaded';t(e);return}
while(a&&(typeof a.tagName=='undefined'||a.tagName.toLowerCase()!='a'||!a.href)){a=a.parentNode};if(a&&a.href&&!a.hasAttribute('xlink:href')){var c=a.href,M=h(a.href),S=g(),D=m(),L=monsterinsights_frontend.home_url,N=u(),o=A(a),x=O(a,n),b=a.getAttribute('data-vars-ga-action'),f=a.getAttribute('data-vars-ga-label');e.el=a;e.el_href=a.href;e.el_protocol=a.protocol;e.el_hostname=a.hostname;e.el_port=a.port;e.el_pathname=a.pathname;e.el_search=a.search;e.el_hash=a.hash;e.el_host=a.host;e.el_classes=a.getAttribute('class');e.el_id=a.id;e.debug_mode=d();e.download_extensions=S;e.inbound_paths=D;e.home_url=L;e.link=c;e.extension=M;e.type=o;e.target=x;e.title=v(a);if(!e.label&&!e.title){e.title=K(a)};if(o!=='internal'&&o!=='javascript'){var y=!1,p=function(){if(y){return};s();y=!0;if(a.attributes.download){var e=document.createElement('a');e.href=a.href;e.download=a.download;e.click()}
else{window.location.href=c}},E=function(){e.exit='external';t(e)},I=function(){e.exit='internal-as-outbound';t(e)},C=function(){e.exit='cross-hostname';t(e)};if(x||o=='mailto'||o=='tel'){if(o=='download'){k={event_category:'download',event_label:f||e.title,file_extension:e.extension,file_name:e.link.replace(/^.*\//g,''),link_text:f||e.title,link_url:c,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,}}
else if(o=='tel'){k={event_category:'tel',event_label:f||e.title.replace('tel:',''),tel_number:c.replace('tel:',''),link_text:f||e.title,link_url:c,link_classes:e.el_classes,link_id:e.el_id,}}
else if(o=='mailto'){k={event_category:'mailto',event_label:f||e.title.replace('mailto:',''),email_address:c.replace('mailto:',''),link_text:f||e.title.replace('mailto:',''),link_url:c,link_classes:e.el_classes,link_id:e.el_id,}}
else if(o=='internal-as-outbound'){k={event_category:i,event_label:f||e.title,event_name:'click',is_affiliate_link:!0,affiliate_label:i.replace('outbound-link-',''),link_text:f||e.title,link_url:c,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,outbound:!0,}}
else if(o=='external'){k={event_category:'outbound-link',event_label:f||e.title,is_affiliate_link:!1,link_text:f||e.title,link_url:c,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,outbound:!0,}}
else if(o=='cross-hostname'){k={event_category:'cross-hostname',event_label:f||e.title,link_text:f||e.title,link_url:c,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,}};if(k){l('event',b||c,k,e)}
else{if(o&&o!='internal'){k={event_category:o,event_label:f||e.title,link_text:f||e.title,link_url:c,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,};l('event',b||c,k,e)}
else{e.exit='type';t(e)}}}
else{if(o!='cross-hostname'&&o!='external'&&o!='internal-as-outbound'){if(!n.defaultPrevented){if(n.preventDefault){n.preventDefault()}
else{n.returnValue=!1}}};if(o=='download'){k={event_category:'download',event_label:f||e.title,event_callback:p,file_extension:e.extension,file_name:e.link.replace(/^.*\//g,''),link_text:f||e.title,link_url:c,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,};l('event',b||c,k,e)}
else if(o=='internal-as-outbound'){r=!0;window.onbeforeunload=function(t){if(!n.defaultPrevented){if(n.preventDefault){n.preventDefault()}
else{n.returnValue=!1}};k={event_category:i,event_label:f||e.title,event_callback:p,is_affiliate_link:!0,affiliate_label:i.replace('outbound-link-',''),link_text:f||e.title,link_url:c,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,outbound:!0,};if(navigator.sendBeacon){k.transport='beacon'};l('event',b||c,k,e);setTimeout(p,1000)}}
else if(o=='external'){r=!0;window.onbeforeunload=function(t){k={event_category:'outbound-link',event_label:f||e.title,event_callback:p,is_affiliate_link:!1,link_text:f||e.title,link_url:c,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,outbound:!0,};if(navigator.sendBeacon){k.transport='beacon'};l('event',b||c,k,e)}}
else if(o=='cross-hostname'){r=!0;window.onbeforeunload=function(t){if(!n.defaultPrevented){if(n.preventDefault){n.preventDefault()}
else{n.returnValue=!1}};k={event_category:'cross-hostname',event_label:f||e.title,event_callback:p,link_text:f||e.title,link_url:c,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,};if(navigator.sendBeacon){k.transport='beacon'};l('event',b||c,k,e);setTimeout(p,1000)}}
else{if(o&&o!=='internal'){k={event_category:o,event_label:f||e.title,event_callback:p,link_text:f||e.title,link_url:c,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,};l('event',b||c,k,e)}
else{e.exit='type';t(e)}};if(o!='external'&&o!='cross-hostname'&&o!='internal-as-outbound'){setTimeout(p,1000)}
else{if(o=='external'){setTimeout(E,1100)}
else if(o=='cross-hostname'){setTimeout(C,1100)}
else{setTimeout(I,1100)}};setTimeout(s,100)}}
else{s();e.exit='internal';t(e)}}
else{e.exit='notlink';t(e)}};var f=window.location.hash;function p(){if(monsterinsights_frontend.hash_tracking==='true'&&f!=window.location.hash&&(monsterinsights_frontend.ua||monsterinsights_frontend.v4_id)){f=window.location.hash;if(monsterinsights_frontend.ua){__gtagTracker('config',monsterinsights_frontend.ua,{page_path:location.pathname+location.search+location.hash,})};if(monsterinsights_frontend.v4_id){__gtagTracker('config',monsterinsights_frontend.v4_id,{page_path:location.pathname+location.search+location.hash,})};n('Hash change to: '+location.pathname+location.search+location.hash)}
else{n('Hash change to (untracked): '+location.pathname+location.search+location.hash)}};function s(){if(r){window.onbeforeunload=null}};var a=window;if(a.addEventListener){a.addEventListener('load',function(){document.body.addEventListener('click',k,!1)},!1);window.addEventListener('hashchange',p,!1)}
else{if(a.attachEvent){a.attachEvent('onload',function(){document.body.attachEvent('onclick',k)});window.attachEvent('onhashchange',p)}};if(typeof String.prototype.endsWith!=='function'){String.prototype.endsWith=function(e){return this.indexOf(e,this.length-e.length)!==-1}};if(typeof String.prototype.startsWith!=='function'){String.prototype.startsWith=function(e){return this.indexOf(e)===0}};if(typeof Array.prototype.lastIndexOf!=='function'){Array.prototype.lastIndexOf=function(e){'use strict';if(this===void 0||this===null){throw new TypeError()};var t,n,l=Object(this),i=l.length>>>0;if(i===0){return-1};t=i-1;if(arguments.length>1){t=Number(arguments[1]);if(t!=t){t=0}
else if(t!=0&&t!=(1/0)&&t!=-(1/0)){t=(t>0||-1)*Math.floor(Math.abs(t))}};for(n=t>=0?Math.min(t,i-1):i-Math.abs(t);n>=0;n--){if(n in l&&l[n]===e){return n}};return-1}}},MonsterInsightsObject=new MonsterInsights(););--warning-color-80: #FFD032;--warning-color-80-disabled: rgba(255, 208, 50, .5);--warning-color-60: #FFDC67;--warning-color-60-disabled: rgba(255, 220, 103, .5);--warning-color-40: #FFE79B;--warning-color-40-disabled: rgba(255, 231, 155, .5);--warning-color-20: #FCF3CC;--warning-color-20-disabled: rgba(252, 243, 204, .5);--success-color: #008000;--success-color-disabled: rgba(0, 128, 0, .5);--success-color-80: #339933;--success-color-80-disabled: rgba(51, 153, 51, .5);--success-color-60: #66B366;--success-color-60-disabled: rgba(102, 179, 102, .5);--success-color-40: #99CC99;--success-color-40-disabled: rgba(153, 204, 153, .5);--success-color-20: #CCE6CC;--success-color-20-disabled: rgba(204, 230, 204, .5);--color1-color: #307FE2;--color1-color-disabled: rgba(48, 127, 226, .5);--color1-color-80: #5999E8;--color1-color-80-disabled: rgba(89, 153, 232, .5);--color1-color-60: #83B2EE;--color1-color-60-disabled: rgba(131, 178, 238, .5);--color1-color-40: #ACCCF3;--color1-color-40-disabled: rgba(172, 204, 243, .5);--color1-color-20: #D6E5F9;--color1-color-20-disabled: rgba(214, 229, 249, .5);--color2-color: #172859;--color2-color-disabled: rgba(23, 40, 89, .5);--color2-color-80: #46547B;--color2-color-80-disabled: rgba(70, 84, 123, .5);--color2-color-60: #737D9B;--color2-color-60-disabled: rgba(115, 125, 155, .5);--color2-color-40: #A1A8BC;--color2-color-40-disabled: rgba(161, 168, 188, .5);--color2-color-20: #D1D4DE;--color2-color-20-disabled: rgba(209, 212, 222, .5);--color3-color: #792359;--color3-color-disabled: rgba(121, 35, 89, .5);--color3-color-80: #94507B;--color3-color-80-disabled: rgba(148, 80, 123, .5);--color3-color-60: #AF7C9C;--color3-color-60-disabled: rgba(175, 124, 156, .5);--color3-color-40: #CAA8BD;--color3-color-40-disabled: rgba(202, 168, 189, .5);--color3-color-20: #E4D3DE;--color3-color-20-disabled: rgba(228, 211, 222, .5);--background-color: var(--secondary-color-20);--surface-color: #FFFFFF;--surface-color-disabled: var(--secondary-color-40);--text-color-dark: var(--primary-color);--text-color-light: var(--primary-color-60);--text-color-accent: #FFFFFF;--text-color-disabled: var(--primary-color-60-disabled);--border-color: var(--secondary-color)}.ld-text[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:.875rem;color:var(--text-color-dark);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ld-text--title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:1.6875rem;color:var(--text-color-dark);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ld-text--secondary-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:1.0625rem;color:var(--text-color-dark);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.name-id__id[_ngcontent-%COMP%], .ld-text--desc[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:.875rem;color:var(--text-color-light);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ld-text--info[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:.75rem;color:var(--text-color-light);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ld-text--bold[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:600;font-size:.875rem;color:var(--text-color-dark);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.name-id__name[_ngcontent-%COMP%], .ld-text--link[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:.875rem;color:var(--color1-color);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none}.name-id__name[_ngcontent-%COMP%]:hover, .ld-text--link[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover{color:var(--text-color-dark)}.ld-text--accent[_ngcontent-%COMP%]{color:var(--text-color-accent)}.ld-text--error[_ngcontent-%COMP%]{color:var(--error-color)}.ld-text--error-60[_ngcontent-%COMP%]{color:var(--error-color-60)}.ld-text--success[_ngcontent-%COMP%]{color:var(--success-color)}.ld-text--success-60[_ngcontent-%COMP%]{color:var(--success-color-60)}.ld-text--warning[_ngcontent-%COMP%]{color:var(--warning-color)}.ld-text--warning-60[_ngcontent-%COMP%]{color:var(--warning-color-60)}[_nghost-%COMP%]:hover{background-color:var(--background-color)}.status-column[_ngcontent-%COMP%]{position:sticky;width:7.5rem;min-width:7.5rem;max-width:7.5rem;left:0rem}.type-column[_ngcontent-%COMP%]{position:sticky;width:7.5rem;min-width:7.5rem;max-width:7.5rem;left:7.5rem}.name-column[_ngcontent-%COMP%]{position:sticky;left:15rem}.domains-column[_ngcontent-%COMP%], .apps-column[_ngcontent-%COMP%]{width:7.5rem;min-width:7.5rem;max-width:7.5rem}.name-id[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:.3125rem 0}.name-id__name[_ngcontent-%COMP%]{display:inline-flex;align-items:center;column-gap:.625rem;cursor:pointer;width:fit-content;word-break:break-word}.actions-cell[_ngcontent-%COMP%]{--pk-button-height: 100%;text-align:center;position:sticky;right:0;padding:0 .3125rem;box-shadow:inset .0625rem -.0625rem var(--border-color)}.actions-cell.last[_ngcontent-%COMP%]{box-shadow:inset .0625rem 0 var(--border-color)}.actions-cell--opened[_ngcontent-%COMP%]{z-index:1}.sticky-col[_ngcontent-%COMP%]{position:sticky}"],changeDetection:0});let e=o;return e})();var oo=(()=>{let o=class o{constructor(t){this.importedDomainsValidator=t}getValidator(){return t=>{let r=this.importedDomainsValidator.validateDomains(t.value.map(({id:i})=>i));return r.isValid?null:{invalidDomains:r.errors}}}};o.\u0275fac=function(r){return new(r||o)(le(Mt))},o.\u0275prov=U({token:o,factory:o.\u0275fac,providedIn:"root"});let e=o;return e})();var $=(()=>{let o=class o{reset(t){this.resetName(t?.name),this.resetAppsOrDomains(t?.domains.concat(t?.apps)),this.resetSiteListType(t?.type),this.form.markAsPristine(),this.form.markAsUntouched(),this.form.enable()}resetName(t){this.name.reset(t??""),this.name.markAsPristine(),this.name.markAsUntouched()}resetAppsOrDomains(t){this.appOrDomains.reset(t??[]),this.name.markAsPristine(),this.name.markAsUntouched()}resetSiteListType(t){this.type.reset(t??T.Include),this.type.markAsPristine(),this.type.markAsUntouched()}addAppsOrDomains(t){let r=this.appOrDomains.value.concat(t.filter(i=>!this.appOrDomains.value.some(c=>c.id===i.id)));this.appOrDomains.setValue(r)}removeAppsOrDomains(t){let r=this.appOrDomains.value.filter(i=>!t.some(c=>c.id===i.id));this.appOrDomains.setValue(r)}updateSiteListType(t){this.type.setValue(t)}serialize$(){return this.form.value$.pipe(D(t=>({name:t.name,domainListItemKindId:xt.RuleOrDeal,domains:t.appOrDomains.filter(({type:r})=>r===k.Domain),apps:t.appOrDomains.filter(({type:r})=>r===k.App),type:t.type})))}constructor(t){this.siteValidatorService=t,this.name=new Ce("",[me.required]),this.appOrDomains=new Ce([],[me.required,this.siteValidatorService.getValidator()]),this.type=new Ce(T.Include,[me.required]),this.form=new Ct({name:this.name,appOrDomains:this.appOrDomains,type:this.type})}};o.\u0275fac=function(r){return new(r||o)(le(oo))},o.\u0275prov=U({token:o,factory:o.\u0275fac});let e=o;return e})();function To(e,o){e&1&&(n(0,"span",3),g(1," The name is required "),s())}var io=(()=>{let o=class o{constructor(t){this.siteListConfigurationFormService=t,this.name=this.siteListConfigurationFormService.name}};o.\u0275fac=function(r){return new(r||o)(x($))},o.\u0275cmp=S({type:o,selectors:[["app-site-list-configuration-name-edit"]],decls:6,vars:10,consts:[[3,"title","mandatory","errorValidationEnabled","hasError"],[3,"formControl","valid","touched"],["slot","error-message","test-name-error",""],["test-name-required-error",""]],template:function(r,i){r&1&&(n(0,"pk-card")(1,"ld-form-item",0),d(2,"touchedAndInvalid"),C(3,"ld-input",1),n(4,"span",2),O(5,To,2,0,"span",3),s()()()),r&2&&(l(1),p("title","Name")("mandatory",!0)("errorValidationEnabled",!0)("hasError",m(2,8,i.name)),l(2),p("formControl",i.name)("valid",i.name.valid)("touched",i.name.touched),l(2),L(5,i.name.hasError("required")?5:-1))},dependencies:[ot,Xe,et,W,it]});let e=o;return e})();var ro=(()=>{let o=class o{constructor(t,r,i){this.siteListConfigurationFormService=t,this.store=r,this.metricFormatter=i,this.appOrDomains$=this.siteListConfigurationFormService.appOrDomains.value$,this.siteListType$=this.siteListConfigurationFormService.type.value$,this.translations={tableColumn1:"DOMAINS/APPS",tableColumn2:"Avails",clearList:"Remove All",searchPlaceholder:"Search for a domain or app",importButton:"Import",exportButton:"Export",includeList:"Inclusion list",excludeList:"Exclusion list",noItemsTitle:"Empty list",noItemsDescription:"The items you select will appear here.",noSearchedItemsDescription:"Please add an item or adapt your search"},this.additionalPropertiesDisplayed=["avails"],this.interactiveValue$=ae([this.appOrDomains$,this.siteListType$]).pipe(D(([c,f])=>({isExcluded:f===T.Exclude,items:c.map(M=>Ve(ee({},M),{icon:this.getIcon(M),avails:this.metricFormatter.format(M.avails)}))})))}getIcon(t){return t.type===k.App?"app":"web"}updateDomains(t){let r=this.siteListConfigurationFormService.appOrDomains.value,i=this.siteListConfigurationFormService.type.value;if(t.items.length<r.length){let f=r.filter(M=>!t.items.some(R=>R.id===M.id));this.siteListConfigurationFormService.removeAppsOrDomains(f)}let c=t.isExcluded!==void 0?t.isExcluded?T.Exclude:T.Include:void 0;c!==void 0&&c!==i&&this.siteListConfigurationFormService.updateSiteListType(c)}importDomains(){this.store.dispatch(Se())}};o.\u0275fac=function(r){return new(r||o)(x($),x(w),x(yt))},o.\u0275cmp=S({type:o,selectors:[["app-site-list-configuration-summary"]],decls:3,vars:8,consts:[[1,"site-list-configuration-summary"],["test-site-configuration-list","",1,"site-list-configuration-summary-interactive-list",3,"value","additionalPropertiesDisplayed","translations","valueField","textField","hideExportButton","changes","importClick"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"pk-interactive-list",1),b("changes",function(f){return i.updateDomains(f)})("importClick",function(){return i.importDomains()}),d(2,"async"),s()()),r&2&&(l(1),p("value",m(2,6,i.interactiveValue$))("additionalPropertiesDisplayed",i.additionalPropertiesDisplayed)("translations",i.translations)("valueField","id")("textField","id")("hideExportButton",!0))},dependencies:[mt,I],styles:["[_ngcontent-%COMP%]:root{--primary-color: #2D2D2D;--primary-color-disabled: rgba(45, 45, 45, .5);--primary-color-80: #565656;--primary-color-80-disabled: rgba(86, 86, 86, .5);--primary-color-60: #828282;--primary-color-60-disabled: rgba(130, 130, 130, .5);--primary-color-40: #ACACAC;--primary-color-40-disabled: rgba(172, 172, 172, .5);--primary-color-20: #CFCCCC;--primary-color-20-disabled: rgba(207, 204, 204, .5);--secondary-color: #D9D9D6;--secondary-color-disabled: rgba(217, 217, 214, .5);--secondary-color-80: #E1E1DF;--secondary-color-80-disabled: rgba(225, 225, 223, .5);--secondary-color-60: #E9E9E7;--secondary-color-60-disabled: rgba(233, 233, 231, .5);--secondary-color-40: #F0F0EF;--secondary-color-40-disabled: rgba(240, 240, 239, .5);--secondary-color-20: #F7F7F6;--secondary-color-20-disabled: rgba(247, 247, 246, .5);--accent-color: #FE5000;--accent-color-disabled: rgba(254, 80, 0, .5);--accent-color-80: #FC7338;--accent-color-80-disabled: rgba(252, 115, 56, .5);--accent-color-60: #FF986A;--accent-color-60-disabled: rgba(255, 152, 106, .5);--accent-color-40: #FFBA9C;--accent-color-40-disabled: rgba(255, 186, 156, .5);--accent-color-20: #FFD5C3;--accent-color-20-disabled: rgba(255, 213, 195, .5);--error-color: #D23030;--error-color-disabled: rgba(210, 48, 48, .5);--error-color-80: #DB5959;--error-color-80-disabled: rgba(219, 89, 89, .5);--error-color-60: #E48383;--error-color-60-disabled: rgba(228, 131, 131, .5);--error-color-40: #EDAFAF;--error-color-40-disabled: rgba(237, 175, 175, .5);--error-color-20: #F6D6D6;--error-color-20-disabled: rgba(246, 214, 214, .5);--warning-color: #F1C502;--warning-color-disabled: rgba(241, 197, 2, .5);--warning-color-80: #FFD032;--warning-color-80-disabled: rgba(255, 208, 50, .5);--warning-color-60: #FFDC67;--warning-color-60-disabled: rgba(255, 220, 103, .5);--warning-color-40: #FFE79B;--warning-color-40-disabled: rgba(255, 231, 155, .5);--warning-color-20: #FCF3CC;--warning-color-20-disabled: rgba(252, 243, 204, .5);--success-color: #008000;--success-color-disabled: rgba(0, 128, 0, .5);--success-color-80: #339933;--success-color-80-disabled: rgba(51, 153, 51, .5);--success-color-60: #66B366;--success-color-60-disabled: rgba(102, 179, 102, .5);--success-color-40: #99CC99;--success-color-40-disabled: rgba(153, 204, 153, .5);--success-color-20: #CCE6CC;--success-color-20-disabled: rgba(204, 230, 204, .5);--color1-color: #307FE2;--color1-color-disabled: rgba(48, 127, 226, .5);--color1-color-80: #5999E8;--color1-color-80-disabled: rgba(89, 153, 232, .5);--color1-color-60: #83B2EE;--color1-color-60-disabled: rgba(131, 178, 238, .5);--color1-color-40: #ACCCF3;--color1-color-40-disabled: rgba(172, 204, 243, .5);--color1-color-20: #D6E5F9;--color1-color-20-disabled: rgba(214, 229, 249, .5);--color2-color: #172859;--color2-color-disabled: rgba(23, 40, 89, .5);--color2-color-80: #46547B;--color2-color-80-disabled: rgba(70, 84, 123, .5);--color2-color-60: #737D9B;--color2-color-60-disabled: rgba(115, 125, 155, .5);--color2-color-40: #A1A8BC;--color2-color-40-disabled: rgba(161, 168, 188, .5);--color2-color-20: #D1D4DE;--color2-color-20-disabled: rgba(209, 212, 222, .5);--color3-color: #792359;--color3-color-disabled: rgba(121, 35, 89, .5);--color3-color-80: #94507B;--color3-color-80-disabled: rgba(148, 80, 123, .5);--color3-color-60: #AF7C9C;--color3-color-60-disabled: rgba(175, 124, 156, .5);--color3-color-40: #CAA8BD;--color3-color-40-disabled: rgba(202, 168, 189, .5);--color3-color-20: #E4D3DE;--color3-color-20-disabled: rgba(228, 211, 222, .5);--background-color: var(--secondary-color-20);--surface-color: #FFFFFF;--surface-color-disabled: var(--secondary-color-40);--text-color-dark: var(--primary-color);--text-color-light: var(--primary-color-60);--text-color-accent: #FFFFFF;--text-color-disabled: var(--primary-color-60-disabled);--border-color: var(--secondary-color)}.ld-text[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:.875rem;color:var(--text-color-dark);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ld-text--title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:1.6875rem;color:var(--text-color-dark);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ld-text--secondary-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:1.0625rem;color:var(--text-color-dark);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ld-text--desc[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:.875rem;color:var(--text-color-light);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ld-text--info[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:.75rem;color:var(--text-color-light);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ld-text--bold[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:600;font-size:.875rem;color:var(--text-color-dark);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ld-text--link[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:.875rem;color:var(--color1-color);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none}.ld-text--link[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover{color:var(--text-color-dark)}.ld-text--accent[_ngcontent-%COMP%]{color:var(--text-color-accent)}.ld-text--error[_ngcontent-%COMP%]{color:var(--error-color)}.ld-text--error-60[_ngcontent-%COMP%]{color:var(--error-color-60)}.ld-text--success[_ngcontent-%COMP%]{color:var(--success-color)}.ld-text--success-60[_ngcontent-%COMP%]{color:var(--success-color-60)}.ld-text--warning[_ngcontent-%COMP%]{color:var(--warning-color)}.ld-text--warning-60[_ngcontent-%COMP%]{color:var(--warning-color-60)}.site-list-configuration-summary[_ngcontent-%COMP%]{height:100%;--pk-interactive-list-max-width: 100%;--pk-interactive-list-table-min-height: 80%;--pk-interactive-list-table-height: 35rem;background-color:#fff}.site-list-configuration-summary-interactive-list[_ngcontent-%COMP%]{h