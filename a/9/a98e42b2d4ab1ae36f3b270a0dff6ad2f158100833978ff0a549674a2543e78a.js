;var MonsterInsights=function(){var e=[],a='',o=!1;this.setLastClicked=this.getLastClicked=function(){return e};this.setInternalAsOutboundCategory=this.getInternalAsOutboundCategory=this.sendEvent=function p(i){var l=i.srcElement||i.target,e=[],f;e.el=l;e.click_type=y(i);if('undefined'===typeof __gtagTracker||!b(i)){e.exit='loaded';n(e);return}
while(l&&(typeof l.tagName=='undefined'||l.tagName.toLowerCase()!='a'||!l.href)){l=l.parentNode};if(l&&l.href&&!l.hasAttribute('xlink:href')){var A=l.href,I=d(l.href),M=h(),S=g(),L=monsterinsights_frontend.home_url,N=c(),r=w(l),K=x(l,i),T=l.getAttribute('data-vars-ga-action'),p=l.getAttribute('data-vars-ga-label');e.el=l;e.el_href=l.href;e.el_protocol=l.protocol;e.el_hostname=l.hostname;e.el_port=l.port;e.el_pathname=l.pathname;e.el_search=l.search;e.el_hash=l.hash;e.el_host=l.host;e.debug_mode=u();e.download_extensions=M;e.inbound_paths=S;e.home_url=L;e.link=A;e.extension=I;e.type=r;e.target=K;e.title=v(l);if(!e.label&&!e.title){e.title=k(l)};if(r!=='internal'&&r!=='javascript'){var O=!1,m=E=function(){e.exit='external';n(e)},D=function(){e.exit='internal-as-outbound';n(e)},C=if(K||r=='mailto'||r=='tel'){if(r=='download'){f={event_category:'download',event_label:p||e.title,}}
else if(r=='tel'){f={event_category:'tel',event_label:p||e.title.replace('tel:',''),}}
else if(r=='mailto'){console.log(p||e.title.replace('mailto:',''));f={event_category:'mailto',event_label:p||e.title.replace('mailto:',''),}}
else if(r=='internal-as-outbound'){f={event_category:a,event_label:p||e.title,}}
else if(r=='external'){f={event_category:'outbound-link',event_label:p||e.title,}}
else if(r=='cross-hostname'){f={event_category:'cross-hostname',event_label:p||e.title,}};if(f){t('event',T||A,f,e)}
else{if(r&&r!='internal'){f={event_category:r,event_label:p||e.title,};t('event',T||A,f,e)}
else{e.exit='type';n(e)}}}
else{if(r!='cross-hostname'&&r!='external'&&r!='internal-as-outbound'){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}}};if(r=='download'){f={event_category:'download',event_label:p||e.title,event_callback:m,};t('event',T||A,f,e)}
else if(r=='internal-as-outbound'){o=!0;window.onbeforeunload=function(n){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}};f={event_category:a,event_label:p||e.title,event_callback:m,};if(navigator.sendBeacon){f.transport='beacon'};t('event',T||A,f,e);setTimeout(m,1000)}}
else if(r=='external'){o=!0;window.onbeforeunload=function(n){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}};f={event_category:'outbound-link',event_label:p||e.title,event_callback:m,};if(navigator.sendBeacon){f.transport='beacon'};t('event',T||A,f,e);setTimeout(m,1000)}}
else if(r=='cross-hostname'){o=!0;window.onbeforeunload=function(n){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}};f={event_category:'cross-hostname',event_label:p||e.title,event_callback:m,};if(navigator.sendBeacon){f.transport='beacon'};t('event',T||A,f,e);setTimeout(m,1000)}}
else{if(r&&r!=='internal'){f={event_category:r,event_label:p||e.title,event_callback:m,};t('event',T||A,f,e)}
else{e.exit='type';n(e)}};if(r!='external'&&r!='cross-hostname'&&r!='internal-as-outbound'){setTimeout(m,1000)}
else{if(r=='external'){setTimeout(E,1100)}
else if(r=='cross-hostname'){setTimeout(C,1100)}
else{setTimeout(D,1100)}};setTimeout(s,100)}}
else{s();e.exit='internal';n(e)}}
else{e.exit='notlink';n(e)}};var f=window.location.hash;var r=window;if(r.addEventListener){r.addEventListener('load',!1);window.addEventListener('hashchange',m,!1)}
else{if(r.attachEvent){r.attachEvent('onload',;window.attachEvent('onhashchange',m)}};if(typeof String.prototype.endsWith!=='function'){String.prototype.endsWith=;if(typeof String.prototype.startsWith!=='function'){String.prototype.startsWith=;if(typeof Array.prototype.lastIndexOf!=='function'){Array.prototype.lastIndexOf=},MonsterInsightsObject=new MonsterInsights();