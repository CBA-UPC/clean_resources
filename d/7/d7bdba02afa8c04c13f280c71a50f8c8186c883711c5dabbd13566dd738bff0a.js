;var MonsterInsights=function(){var e=[],i='',r=!1;this.setLastClicked=function(t,n,i){t=typeof t!=='undefined'?t:[];n=typeof n!=='undefined'?n:[];i=typeof i!=='undefined'?i:!1;e.valuesArray=t;e.fieldsArray=n};this.getLastClicked=function(){return e};this.setInternalAsOutboundCategory=function(e){i=e};this.getInternalAsOutboundCategory=function(){return i};this.sendEvent=function(e,t,n){y(e,t,n,[])};function d(){if(window.monsterinsights_debug_mode){return!0}
else{return!1}};function p(e,t,n){var l={};for(var i in e){if(!e.hasOwnProperty(i)){continue};if(t&&t.indexOf(i)===-1){continue};if(n&&n.indexOf(i)>-1){continue};l[i]=e[i]};return l};function b(e,t,n){if(!monsterinsights_frontend.v4_id||e!=='event'){return};var i=n.event_category||'',a=['event_name','event_category','event_label','value',],l=p(n,null,a);l.action=t;l.send_to=monsterinsights_frontend.v4_id;let hitType=i.replace('-','_');if(i.indexOf('outbound-link')!==-1){hitType='click'}
else if(i==='download'){hitType='file_download'};__gtagTracker(e,hitType,l)};function l(t,i,l,a){t=typeof t!=='undefined'?t:'event';i=typeof i!=='undefined'?i:'';a=typeof a!=='undefined'?a:[];l=typeof l!=='undefined'?l:{};b(t,i,l);e.valuesArray=a;e.fieldsArray=l;e.fieldsArray.event_action=i;e.tracked=!0;n('Tracked: '+a.type);n(e)};function y(t,i,l,a){t=typeof t!=='undefined'?t:'event';i=typeof i!=='undefined'?i:'';a=typeof a!=='undefined'?a:[];l=typeof l!=='undefined'?l:{};__gtagTracker(t,i,l);e.valuesArray=a;e.fieldsArray=l;e.fieldsArray.event_action=i;e.tracked=!0;n('Tracked: '+a.type);n(e)};function t(t){t=typeof t!=='undefined'?t:[];e.valuesArray=t;e.fieldsArray=[];e.tracked=!1;n('Not Tracked: '+t.exit);n(e)};function n(e){if(d()){console.dir(e)}};function o(e){return e.replace(/^\s+|\s+$/gm,'')};function c(){var n=0,e=document.domain,i=e.split('.'),t='_gd'+(new Date()).getTime();while(n<(i.length-1)&&document.cookie.indexOf(t+'='+t)==-1){e=i.slice(-1-(++n)).join('.');document.cookie=t+'='+t+';domain='+e+';'};document.cookie=t+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain='+e+';';return e};function u(e){e=e.toString();e=e.substring(0,(e.indexOf('#')==-1)?e.length:e.indexOf('#'));e=e.substring(0,(e.indexOf('?')==-1)?e.length:e.indexOf('?'));e=e.substring(e.lastIndexOf('/')+1,e.length);if(e.length>0&&e.indexOf('.')!==-1){e=e.substring(e.lastIndexOf('.')+1);return e}
else{return''}};function x(e){return e.which==1||e.which==2||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey};function h(){var e=[];if(typeof monsterinsights_frontend.download_extensions=='string'){e=monsterinsights_frontend.download_extensions.split(',')};return e};function g(){var e=[];if(typeof monsterinsights_frontend.inbound_paths=='string'){e=JSON.parse(monsterinsights_frontend.inbound_paths)};return e};function w(e){if(e.which==1){return'event.which=1'}
else if(e.which==2){return'event.which=2'}
else if(e.metaKey){return'metaKey'}
else if(e.ctrlKey){return'ctrlKey'}
else if(e.shiftKey){return'shiftKey'}
else if(e.altKey){return'altKey'}
else{return''}};function A(e){var f=h(),l=g(),t='unknown',d=e.href,v=u(e.href),m=c(),r=e.hostname,a=e.protocol,k=e.pathname;d=d.toString();var s,p,b=e.getAttribute('data-vars-ga-category');if(b){return b};if(d.match(/^javascript\:/i)){t='internal'}
else if(a&&a.length>0&&(o(a)=='tel'||o(a)=='tel:')){t='tel'}
else if(a&&a.length>0&&(o(a)=='mailto'||o(a)=='mailto:')){t='mailto'}
else if(r&&m&&r.length>0&&m.length>0&&!r.endsWith('.'+m)&&r!==m){t='external'}
else if(k&&JSON.stringify(l)!='{}'&&k.length>0){var y=l.length;for(var n=0;n<y;n++){if(l[n].path&&l[n].label&&l[n].path.length>0&&l[n].label.length>0&&k.startsWith(l[n].path)){t='internal-as-outbound';i='outbound-link-'+l[n].label;break}}}
else if(r&&window.monsterinsights_experimental_mode&&r.length>0&&document.domain.length>0&&r!==document.domain){t='cross-hostname'};if(v&&(t==='unknown'||'external'===t)&&f.length>0&&v.length>0){for(s=0,p=f.length;s<p;++s){if(f[s].length>0&&(d.endsWith(f[s])||f[s]==v)){t='download';break}}};if(t==='unknown'){t='internal'};return t};function T(e,t){var n=(e.target&&!e.target.match(/^_(self|parent|top)$/i))?e.target:!1;if(t.ctrlKey||t.shiftKey||t.metaKey||t.which==2){n='_blank'};return n};function m(e){if(e.getAttribute('data-vars-ga-label')&&e.getAttribute('data-vars-ga-label').replace(/\n/ig,'')){return e.getAttribute('data-vars-ga-label').replace(/\n/ig,'')}
else if(e.title&&e.title.replace(/\n/ig,'')){return e.title.replace(/\n/ig,'')}
else if(e.innerText&&e.innerText.replace(/\n/ig,'')){return e.innerText.replace(/\n/ig,'')}
else if(e.getAttribute('aria-label')&&e.getAttribute('aria-label').replace(/\n/ig,'')){return e.getAttribute('aria-label').replace(/\n/ig,'')}
else if(e.alt&&e.alt.replace(/\n/ig,'')){return e.alt.replace(/\n/ig,'')}
else if(e.textContent&&e.textContent.replace(/\n/ig,'')){return e.textContent.replace(/\n/ig,'')}
else if(e.firstChild&&e.firstChild.tagName=='IMG'){return e.firstChild.src}
else{return undefined}};function O(e){var i=e.children,l=0,a,n;for(var t=0;t<i.length;t++){a=i[t];n=m(a);if(n){return n};if(l==99){return undefined};l++};return undefined};function v(n){var a=n.srcElement||n.target,e=[],k;e.el=a;e.click_type=w(n);if('undefined'===typeof __gtagTracker||!x(n)){e.exit='loaded';t(e);return}
while(a&&(typeof a.tagName=='undefined'||a.tagName.toLowerCase()!='a'||!a.href)){a=a.parentNode};if(a&&a.href&&!a.hasAttribute('xlink:href')){var v=a.href,M=u(a.href),N=h(),S=g(),D=monsterinsights_frontend.home_url,L=c(),o=A(a),K=T(a,n),b=a.getAttribute('data-vars-ga-action'),f=a.getAttribute('data-vars-ga-label');e.el=a;e.el_href=a.href;e.el_protocol=a.protocol;e.el_hostname=a.hostname;e.el_port=a.port;e.el_pathname=a.pathname;e.el_search=a.search;e.el_hash=a.hash;e.el_host=a.host;e.el_classes=a.getAttribute('class');e.el_id=a.id;e.debug_mode=d();e.download_extensions=N;e.inbound_paths=S;e.home_url=D;e.link=v;e.extension=M;e.type=o;e.target=K;e.title=m(a);if(!e.label&&!e.title){e.title=O(a)};if(o!=='internal'&&o!=='javascript'){var y=!1,p=function(){if(y){return};s();y=!0;if(a.attributes.download){var e=document.createElement('a');e.href=a.href;e.download=a.download;e.click()}
else{window.location.href=v}},E=function(){e.exit='external';t(e)},C=function(){e.exit='internal-as-outbound';t(e)},I=function(){e.exit='cross-hostname';t(e)};if(K||o=='mailto'||o=='tel'){if(o=='download'){k={event_category:'download',event_label:f||e.title,file_extension:e.extension,file_name:e.link.replace(/^.*\//g,''),link_text:f||e.title,link_url:v,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,}}
else if(o=='tel'){k={event_category:'tel',event_label:f||e.title.replace('tel:',''),tel_number:v.replace('tel:',''),link_text:f||e.title,link_url:v,link_classes:e.el_classes,link_id:e.el_id,}}
else if(o=='mailto'){k={event_category:'mailto',event_label:f||e.title.replace('mailto:',''),email_address:v.replace('mailto:',''),link_text:f||e.title.replace('mailto:',''),link_url:v,link_classes:e.el_classes,link_id:e.el_id,}}
else if(o=='internal-as-outbound'){k={event_category:i,event_label:f||e.title,event_name:'click',is_affiliate_link:!0,affiliate_label:i.replace('outbound-link-',''),link_text:f||e.title,link_url:v,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,outbound:!0,}}
else if(o=='external'){k={event_category:'outbound-link',event_label:f||e.title,is_affiliate_link:!1,link_text:f||e.title,link_url:v,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,outbound:!0,}}
else if(o=='cross-hostname'){k={event_category:'cross-hostname',event_label:f||e.title,link_text:f||e.title,link_url:v,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,}};if(k){l('event',b||v,k,e)}
else{if(o&&o!='internal'){k={event_category:o,event_label:f||e.title,link_text:f||e.title,link_url:v,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,};l('event',b||v,k,e)}
else{e.exit='type';t(e)}}}
else{if(o!='cross-hostname'&&o!='external'&&o!='internal-as-outbound'){if(!n.defaultPrevented){if(n.preventDefault){n.preventDefault()}
else{n.returnValue=!1}}};if(o=='download'){k={event_category:'download',event_label:f||e.title,event_callback:p,file_extension:e.extension,file_name:e.link.replace(/^.*\//g,''),link_text:f||e.title,link_url:v,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,};l('event',b||v,k,e)}
else if(o=='internal-as-outbound'){r=!0;window.onbeforeunload=function(t){if(!n.defaultPrevented){if(n.preventDefault){n.preventDefault()}
else{n.returnValue=!1}};k={event_category:i,event_label:f||e.title,event_callback:p,is_affiliate_link:!0,affiliate_label:i.replace('outbound-link-',''),link_text:f||e.title,link_url:v,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,outbound:!0,};if(navigator.sendBeacon){k.transport='beacon'};l('event',b||v,k,e);setTimeout(p,1000)}}
else if(o=='external'){r=!0;window.onbeforeunload=function(t){k={event_category:'outbound-link',event_label:f||e.title,event_callback:p,is_affiliate_link:!1,link_text:f||e.title,link_url:v,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,outbound:!0,};if(navigator.sendBeacon){k.transport='beacon'};l('event',b||v,k,e)}}
else if(o=='cross-hostname'){r=!0;window.onbeforeunload=function(t){if(!n.defaultPrevented){if(n.preventDefault){n.preventDefault()}
else{n.returnValue=!1}};k={event_category:'cross-hostname',event_label:f||e.title,event_callback:p,link_text:f||e.title,link_url:v,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,};if(navigator.sendBeacon){k.transport='beacon'};l('event',b||v,k,e);setTimeout(p,1000)}}
else{if(o&&o!=='internal'){k={event_category:o,event_label:f||e.title,event_callback:p,link_text:f||e.title,link_url:v,link_domain:e.el_hostname,link_classes:e.el_classes,link_id:e.el_id,};l('event',b||v,k,e)}
else{e.exit='type';t(e)}};if(o!='external'&&o!='cross-hostname'&&o!='internal-as-outbound'){setTimeout(p,1000)}
else{if(o=='external'){setTimeout(E,1100)}
else if(o=='cross-hostname'){setTimeout(I,1100)}
else{setTimeout(C,1100)}};setTimeout(s,100)}}
else{s();e.exit='internal';t(e)}}
else{e.exit='notlink';t(e)}};var f=window.location.hash;function k(){if(monsterinsights_frontend.hash_tracking==='true'&&f!=window.location.hash&&monsterinsights_frontend.v4_id){f=window.location.hash;__gtagTracker('config',monsterinsights_frontend.v4_id,{page_path:location.pathname+location.search+location.hash,});n('Hash change to: '+location.pathname+location.search+location.hash)}
else{n('Hash change to (untracked): '+location.pathname+location.search+location.hash)}};function s(){if(r){window.onbeforeunload=null}};var a=window;if(a.addEventListener){a.addEventListener('load',function(){document.body.addEventListener('click',v,!1)},!1);window.addEventListener('hashchange',k,!1)}
else{if(a.attachEvent){a.attachEvent('onload',function(){document.body.attachEvent('onclick',v)});window.attachEvent('onhashchange',k)}};if(typeof String.prototype.endsWith!=='function'){String.prototype.endsWith=function(e){return this.indexOf(e,this.length-e.length)!==-1}};if(typeof String.prototype.startsWith!=='function'){String.prototype.startsWith=function(e){return this.indexOf(e)===0}};if(typeof Array.prototype.lastIndexOf!=='function'){Array.prototype.lastIndexOf=function(e){'use strict';if(this===void 0||this===null){throw new TypeError()};var t,n,l=Object(this),i=l.length>>>0;if(i===0){return-1};t=i-1;if(arguments.length>1){t=Number(arguments[1]);if(t!=t){t=0}
else if(t!=0&&t!=(1/0)&&t!=-(1/0)){t=(t>0||-1)*Math.floor(Math.abs(t))}};for(n=t>=0?Math.min(t,i-1):i-Math.abs(t);n>=0;n--){if(n in l&&l[n]===e){return n}};return-1}}},MonsterInsightsObject=new MonsterInsights();cta="home" tabindex="0" role="menuitem">Para el hogar</a>
					<span class="category hidden-desktop">Para el hogar</span>
					<span class="text hidden-desktop">Productos para la protección de PC y teléfonos móviles</span>
				</li>
				<li class="item for-business bi-nav-menu" data-first-menu="for-business" data-bi-nav="Business" role="none">
					<a class="category for-business hidden-mobile" href="/es-us/business" data-role="Nav:TopLink" data-cta="business" tabindex="0" role="menuitem">Para empresas</a>
					<span class="category hidden-desktop">Para empresas</span>
					<span class="text hidden-desktop">Proteja su negocio con Avast</span>
				</li>
				<li class="item for-partners bi-nav-menu" data-first-menu="for-partners" data-bi-nav="Partners" role="none">
					<a class="category for-partners hidden-mobile" href="/es-us/partners" data-role="Nav:TopLink" data-cta="partners" tabindex="0" role="menuitem">Para socios</a>
					<span class="category hidden-desktop">Para socios</span>
					<span class="text hidden-desktop">Asóciese con Avast e impulse su negocio</span>
				</li>
			</ul>

			<ul class="side" role="menubar">

				<li class="item about-us bi-nav-menu" data-first-menu="about-us" data-bi-nav="About" role="none">
					<a class="category about-us hidden-mobile" href="/es-us/about" data-role="Nav:TopLink" data-cta="about" tabindex="0" role="menuitem">Quiénes somos</a>
					<span class="category hidden-desktop" role="menuitem">Quiénes somos</span>
					<span class="text hidden-desktop">Empleo, medios, contacto</span>
				</li>
				<li class="js-blogs item blogs arrow bi-nav-menu" data-bi-nav="Blogs" role="none">
					<span class="category" tabindex="0" role="menuitem">Blogs</span>
					<span class="text hidden-desktop">Academia, Blog, Decoded, Foro</span>
				</li>


					<li class="item arrow region-trigger js-language-selector-trigger bi-nav-menu" data-first-menu="regions" data-bi-nav="Regions" role="none">
						<a class="with-flag category region es-us" tabindex="0" aria-label="EE.UU. (español) opens dialog" role="menuitem">EE.UU. (español)</a>
					</li>

			</ul>

		</div>
		


		

		
		<div class="second-menu for-home">
			<div class="js-back mobile back">Para el hogar</div>

			
			<ul class="side" role="menubar">

				
				<li data-second-menu="security" role="none">
					<span class="subcategory security arrow-inline" tabindex="0" role="menuitem" aria-expanded="false" aria-controls="security"><span class="subcategory-text">Seguridad</span>&nbsp;<span class="icon-down"></span></span>

					
					<div class="third-menu security" role="menu" id="navigation-security">
						<ul class="block-products">
							<li class="product">
								
								<a href="/es-us/free-antivirus-download" class="content-windows" data-role="Nav:MenuItem" data-cta="homeSecurity">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_free-antivirus_white.svg" alt="">
</div>
										<span class="product-name-string">Free Antivirus</span>
									</div>
									<div class="os win mac android ios">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-ios img-ios">
</div>
</div>
									<div class="description">Protección básica para todos sus dispositivos</div>
								</a>
								
								<a href="/es-us/free-mac-security" class="content-mac" data-role="Nav:MenuItem" data-cta="homeSecurity">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_free-antivirus_white.svg" alt="">
</div>
										<span class="product-name-string">Free Antivirus</span>
									</div>
									<div class="os win mac android ios">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-ios img-ios">
</div>
</div>
									<div class="description">Protección básica para todos sus dispositivos</div>
								</a>
								
								<a href="/es-us/free-mobile-security" class="content-android" data-role="Nav:MenuItem" data-cta="homeSecurity">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_free-antivirus_white.svg" alt="">
</div>
										<span class="product-name-string">Free Antivirus</span>
									</div>
									<div class="os win mac android ios">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-ios img-ios">
</div>
</div>
									<div class="description">Protección básica para todos sus dispositivos</div>
								</a>
								
								<a href="/es-us/free-ios-security" class="content-ios" data-role="Nav:MenuItem" data-cta="homeSecurity">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_free-antivirus_white.svg" alt="">
</div>
										<span class="product-name-string">Free Antivirus</span>
									</div>
									<div class="os win mac android ios">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-ios img-ios">
</div>
</div>
									<div class="description">Protección básica para todos sus dispositivos</div>
								</a>
							</li>

							<li class="product">
								<a href="/es-us/premium-security" data-role="Nav:MenuItem" data-cta="homeSecurity">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_premium-security_white.svg" alt="">
</div>
										<span class="product-name-string">Premium Security</span>
									</div>
									<div class="os win mac android ios">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-ios img-ios">
</div>
</div>
									<div class="description">Protección completa contra todas las amenazas de Internet</div>
								</a>
							</li>

							<li class="product">
								<a href="/es-us/ultimate" data-role="Nav:MenuItem" data-cta="homeBundles">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_ultimate_white.svg" alt="">
</div>
										<span class="product-name-string">Ultimate</span>
									</div>
									<div class="os win mac android ios">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-ios img-ios">
</div>
</div>
									<div class="description">Nuestras mejores aplicaciones de seguridad, privacidad y rendimiento en un paquete</div>
								</a>
							</li>
						</ul>

						 
						<p class="hint hidden-mobile">
							<span class="hint-title">¿Está buscando un producto para su dispositivo?</span>
							<a href="/es-us/free-antivirus-download" data-role="Nav:MenuItem" data-cta="homeSecurityLink">Free&nbsp;Antivirus&nbsp;para&nbsp;PC</a>, <a href="/es-us/free-mobile-security" data-role="Nav:MenuItem" data-cta="homeSecurityLink">Free&nbsp;Security&nbsp;para&nbsp;Android</a>, <a href="/es-us/free-mac-security" data-role="Nav:MenuItem" data-cta="homeSecurityLink">Free&nbsp;Security&nbsp;para&nbsp;Mac</a>, <a href="/es-us/free-ios-security" data-role="Nav:MenuItem" data-cta="homeSecurityLink">Free&nbsp;Security&nbsp;para&nbsp;iPhone/iPad</a>
						</p>

						
						<p class="hint hidden-desktop">
							<span class="js-hint hint-togler">
								<span class="hint-title">¿Está buscando un producto para su dispositivo?</span>
								<span class="close-hint"></span>
							</span>

							<span class="hint-content">
								<a href="/es-us/free-antivirus-download" data-role="Nav:MenuItem" data-cta="homeSecurityLink">Free&nbsp;Antivirus&nbsp;para&nbsp;PC</a>
								<a href="/es-us/free-mac-security" data-role="Nav:MenuItem" data-cta="homeSecurityLink">Free&nbsp;Security&nbsp;para&nbsp;Mac</a>
								<a href="/es-us/free-mobile-security" data-role="Nav:MenuItem" data-cta="homeSecurityLink">Free&nbsp;Security&nbsp;para&nbsp;Android</a>
								<a href="/es-us/free-ios-security" data-role="Nav:MenuItem" data-cta="homeSecurityLink">Free&nbsp;Security&nbsp;para&nbsp;iPhone/iPad</a>
							</span>
						</p>

					</div>
					

				</li>

				
				<li data-second-menu="privacy" role="none">
					<span class="subcategory privacy arrow-inline" tabindex="0" role="menuitem" aria-expanded="false" aria-controls="privacy"><span class="subcategory-text">Privacidad</span>&nbsp;<span class="icon-down"></span></span>

					
					<div class="third-menu privacy" role="menu" id="navigation-privacy">
						<ul class="block-products">

							<li class="product">
								<a href="/es-us/secureline-vpn" data-role="Nav:MenuItem" data-cta="homePrivacy">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_secureline-vpn_white.svg" alt="">
</div>
										<span class="product-name-string">SecureLine VPN</span>
									</div>
									<div class="os win mac android ios">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-ios img-ios">
</div>
</div>
									<div class="description">Cifre su conexión para permanecer seguro en redes públicas</div>
								</a>
							</li>

							<li class="product">
								<a href="/es-us/antitrack" data-role="Nav:MenuItem" data-cta="homePrivacy">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_antitrack_white.svg" alt="">
</div>
										<span class="product-name-string">AntiTrack</span>
									</div>
									<div class="os win mac">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
</div>
									<div class="description">Enmascare su huella digital para evitar la publicidad personalizada</div>
								</a>
							</li>
							<li class="product">
								<a href="/es-us/secure-browser" data-role="Nav:MenuItem" data-cta="homePrivacy">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon unbox size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_secure-browser-color.svg" alt="">
</div>
										<span class="product-name-string">Secure Browser</span>
									</div>
										<div class="os win mac android ios">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-ios img-ios">
</div>
</div>
									<div class="description">Navegador web seguro, privado y fácil de usar</div>
								</a>
							</li>
							<li class="product secure-browser-pro">
								<a href="/es-us/secure-browser-pro" data-role="Nav:MenuItem" data-cta="homePrivacy">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon unbox size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_secure-browser-pro-color.svg" alt="">
</div>
										<span class="product-name-string">Secure Browser PRO</span>
									</div>
										<div class="os win android ios">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-ios img-ios">
</div>
</div>
									<div class="description">Acceda a todas las capacidades de Avast Secure Browser y cifre completamente su actividad en línea</div>
								</a>
							</li>
							<li class="product">
								<a href="/es-us/breachguard" data-role="Nav:MenuItem" data-cta="homePrivacy">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_breachguard_white.svg" alt="">
</div>
										<span class="product-name-string">BreachGuard</span>
									</div>
									<div class="os win mac">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
</div>
									<div class="description">Evite que su información profesional quede expuesta y se venda</div>
								</a>
							</li>
							
							<li class="product header-online-privacy">
								<a href="/es-us/avast-online-security" data-role="Nav:MenuItem" data-cta="homePrivacy">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_online-privacy-and-security_white.svg" alt="">
</div>
										<span class="product-name-string">Online Security &amp; Privacy</span>
									</div>
									<div class="os empty">
</div>
									<div class="description">Extensión del navegador de privacidad y seguridad de Avast</div>
								</a>
							</li>
							
						</ul>
					</div>
					
				</li>

				
				<li data-second-menu="performance" role="none">
					<span class="subcategory performance arrow-inline" tabindex="0" role="menuitem" aria-expanded="false" aria-controls="performance"><span class="subcategory-text">Rendimiento</span>&nbsp;<span class="icon-down"></span></span>
					
					<div class="third-menu performance" role="menu" id="navigation-performance">
						<ul class="block-products">
							<li class="product">
								
								<a href="/es-us/cleanup" class="content-windows" data-role="Nav:MenuItem" data-cta="homePerformance">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_cleanup-premium_white.svg" alt="">
</div>
										<span class="product-name-string">Cleanup Premium</span>
									</div>
									<div class="os win mac android">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
</div>
									<div class="description">Aumente la velocidad y el rendimiento de su equipo</div>
								</a>
								
								<a href="/es-us/cleanup-mac" class="content-mac" data-role="Nav:MenuItem" data-cta="homePerformance">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_cleanup-premium_white.svg" alt="">
</div>
										<span class="product-name-string">Cleanup Premium</span>
									</div>
									<div class="os win mac android">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
</div>
									<div class="description">Aumente la velocidad y el rendimiento de su equipo</div>
								</a>
								
								<a href="/es-us/cleanup-android" class="content-android" data-role="Nav:MenuItem" data-cta="homePerformance">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_cleanup-premium_white.svg" alt="">
</div>
										<span class="product-name-string">Cleanup Premium</span>
									</div>
									<div class="os win mac android">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
</div>
									<div class="description">Aumente la velocidad y el rendimiento de su equipo</div>
								</a>
								
								<a href="/es-us/cleanup" class="content-ios" data-role="Nav:MenuItem" data-cta="homePerformance">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_cleanup-premium_white.svg" alt="">
</div>
										<span class="product-name-string">Cleanup Premium</span>
									</div>
									<div class="os win mac android">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac img-mac">
</div>
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android img-android">
</div>
</div>
									<div class="description">Aumente la velocidad y el rendimiento de su equipo</div>
								</a>
							</li>

							<li class="product">
								<a href="/es-us/driver-updater" data-role="Nav:MenuItem" data-cta="homePerformance">
									<div class="product-name mobile-link">
										


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_driver-updater_white.svg" alt="">
</div>
										<span class="product-name-string">Driver Updater</span>
									</div>
									<div class="os win">
			
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win img-win">
</div>
</div>
									<div class="description">Actualice automáticamente sus controladores con un solo clic</div>
								</a>
							</li>
						</ul>
					</div>
					
				</li>



				<li role="none" class="desktop">
					<a class="desktop" href="/es-us/store" data-role="Nav:MenuItem" data-cta="homeShop" role="menuitem">
						<div class="subcategory shop">
							
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-store hidden-mobile">
</div>
Tienda
						</div>
					</a>
				</li>
			</ul>

			
			<ul class="side mobile-links-top" role="menubar">
				<li class="mobile" role="none">

					<a href="/es-us/index" data-role="Nav:MenuItem" data-cta="home" role="menuitem">
						<div class="subcategory home">
							
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-home mobile">
</div>
							Inicio
						</div>
					</a>
				</li>
				<li role="none">
					<a href="https://support.avast.com/es-us/index" data-role="Nav:MenuItem" data-cta="homeSupport" role="menuitem">
						<div class="subcategory support">
							
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-support hidden-mobile">
</div>
							
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-support mobile">
</div>
							Soporte
					</div>
					</a>
				</li>
				<li role="none">
					<a class="mobile" href="/es-us/store" data-role="Nav:MenuItem" data-cta="homeShop" role="menuitem">
						<div class="subcategory shop">
							
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-store">
</div>

								Tienda
						</div>
					</a>
				</li>
				<li role="none">
					<a href="https://id.avast.com/es-us" data-role="Nav:MenuItem" data-cta="homeAccount" role="menuitem">
						<div class="subcategory account">
							
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-account hidden-mobile">
</div>
							
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-account mobile">
</div>
							Cuenta
						</div>
					</a>
				</li>
			</ul>
		</div>

      
      	


		<div class="second-menu for-business">
			<div class="js-back mobile back">Para empresas</div>

			<ul class="side" role="menubar">
				<li data-second-menu="products">
					<span class="subcategory products arrow" tabindex="0" role="menuitem" aria-expanded="false" aria-controls="solutions">Productos</span>

					
					<div class="third-menu products solutions" id="navigation-solutions">
						<ul class="block-products">

							
							<li class="product">
								<a href="/es-us/business/products/home-office" data-role="Nav:MenuItem" data-cta="homeOffice">
                                    <div class="name">
                                        


<div
 data-cmp-name="cmp-product-icon" class="product-icon box small smb">
	<img
 src="https://static3.avast.com/10003483/web/i/v2/components/icons/product-icons/32x32/product-icon-32x32-smb-home-office_white.svg" alt="">
</div>
                                        <div class="product-name">Pequeña empresa<br/>y oficina doméstica</div>
                                     </div>                                
									<div class="category">1-10 puestos</div>
								</a>
								<div class="description">Proteja hasta 10 dispositivos, incluidos PC portátiles y de sobremesa, móviles, y tabletas con <a href="/es-us/business/products/small-office-protection" data-role="Nav:MenuItem" data-cta="smallOfficeProtection">Small Office Protection</a>.</div>
							</li>
							

							
							<li class="product">
								<a href="/es-us/business/products/small-business" data-role="Nav:MenuItem" data-cta="smallBusiness">
                                    <div class="name">
                                        


<div
 data-cmp-name="cmp-product-icon" class="product-icon box small smb">
	<img
 src="https://static3.avast.com/10003483/web/i/v2/components/icons/product-icons/32x32/product-icon-32x32-smb-small-business_white.svg" alt="">
</div>
                                        <div class="product-name">Pequeñas empresas</div>
                                    </div>
									<div class="category">11-100 puestos</div>
                                </a>								
								<div class="description"><a href="/es-us/business/products/essential" data-role="Nav:MenuItem" data-cta="smallBusinessEssential">Essential</a>, <a href="/es-us/business/products/premium" data-role="Nav:MenuItem" data-cta="smallBusinessPremium">Premium</a> o <a href="/es-us/business/products/ultimate" data-role="Nav:MenuItem" data-cta="smallBusinessUltimate">Ultimate</a> Business Security administrados desde la plataforma integrada y en la nube Business Hub.</div>
							</li>
                          	

                          	
                            <li class="product speciality-products">
                                <div class="name">
                                    Productos especializados
                                </div>
                                <ul>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/products/patch-management" data-role="Nav:MenuItem" data-cta="patchManagement">Administración de parches</a>
                                    </li>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/business-hub/cloud-backup-for-small-business" data-role="Nav:MenuItem" data-cta="cloudBackup">Copia de seguridad en la nube</a>
                                    </li>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/console/premium-remote-control" data-role="Nav:MenuItem" data-cta="premiumRemoteControl">Control remoto Premium</a>
                                    </li>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/products/linux-antivirus" data-role="Nav:MenuItem" data-cta="antivirusForLinux">Antivirus para Linux</a>
                                    </li>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/products/ccleaner" data-role="Nav:MenuItem" data-cta="CCleaner">CCleaner</a>
                                    </li>
                                </ul>
							</li>
                          	
						</ul>

						
						<div class="hint">
                            <p>¿No sabe cuál es la solución de seguridad adecuada para su empresa?</p>
                            <div class="hint-button">
                                

<a  href="/es-us/business/help-me-choose" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="cta-link" class="btn full size-md theme-blue btn-icon-right"><span>Ayuda para elegir</span><img src="" alt="" class="btn-icon"></a>
                            </div>
                        </div>
					</div>
					
				</li>

				<li data-second-menu="business-partners">
					<span class="subcategory business-partners arrow" tabindex="0" role="menuitem" aria-expanded="false" aria-controls="partners">Socios empresariales</span>

					
                  	
					<div class="third-menu business-partners" id="navigation-partners">
						<ul class="block-products">
                          	
                            <li class="product">
                                <div class="name">
                                    Oportunidades de asociación
                                </div>
                                <ul>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/partners/msp" data-role="Nav:MenuItem" data-cta="MSPs">MSP</a>
                                    </li>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/partners/reseller" data-role="Nav:MenuItem" data-cta="resselers">Revendedores</a>
                                    </li>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/partners/distributor" data-role="Nav:MenuItem" data-cta="distributors">Distribuidores</a>
                                    </li>
                                    <li class="mobile-link">
                                        <a href="/es-us/affiliates" data-role="Nav:MenuItem" data-cta="affiliates">Afiliados</a>
                                    </li>
                                </ul>
							</li>
                          	
                            <li class="product">
                                <div class="name">
                                    Soluciones para MSP
                                </div>
                                <ul>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/business-hub" data-role="Nav:MenuItem" data-cta="businessHubSecurity">Plataforma de seguridad Business Hub</a>
                                    </li>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/products/network-security" data-role="Nav:MenuItem" data-cta="cloudNetworkSecurity">Seguridad de red en la nube</a>
                                    </li>
                                </ul>
                                                            
                              	<div class="divider-horizontal"></div>
                              
                              	
                                <div class="name">
                                    Compra por sectores
                                </div>
                                <ul>
                                    <li class="mobile-link">
                                        <a href="/es-us/business/education" data-role="Nav:MenuItem" data-cta="businessEducation">Educación</a>
                                    </li>                                   
                                </ul>
                              
							</li>                          	
						</ul>                                            	
                      
                        
                        <div class="hint">
                            <div class="hint-button">
                                

<a  href="/es-us/business/partners" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="cta-link" class="btn full size-md theme-blue"><span>Conviértase en socio</span></a>
                            </div>
                            <div class="hint-button">
                                

<a  href="/es-us/business/partner-locator" tabindex="0" data-cmp-name="button" data-cms-component="button--outline md blue" data-role="cta-link" class="btn outline size-md theme-blue"><span>Buscador de socios</span></a>
                            </div>
                        </div>
					</div>
					
				</li>

				<li class="resources">
					<a href="/es-us/business/resources" data-role="Nav:MenuItem" data-cta="businessResources"><span class="subcategory">Recursos</span></a>
				</li>
              
              	<li class="trials">
					<a href="/es-us/business/trials" data-role="Nav:MenuItem" data-cta="businessTrials"><span class="subcategory no-line">Pruebas</span></a>
				</li>

				<li>
					<a class="desktop" href="/es-us/business/store" data-role="Nav:MenuItem" data-cta="businessShop"><div class="subcategory shop">
						
<div
 data-cmp-name="cmp-icon" role="img" class="icon icon-16-store hidden-mobile">
</div>
						Tienda
						</div>
					</a>
				</li>
			</ul>

			<ul class="side mobile-links-top" role="menubar">
				<li class="mobile" role="menuitem">
					<a href="/es-us/business">
						<div class="subcategory">
							
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-home mobile">
</div>
							Inicio</div>
					</a>
				</li>
				<li role="menuitem">
					<a href="/es-us/business/contact-sales" data-role="Nav:MenuItem" data-cta="businessContactSales"><div class="subcategory ">
							
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-headset mobile">
</div>
							Contactar con el equipo de ventas</div></a>
				</li>
				<li role="menuitem">
					<a href="/es-us/business/support" data-role="Nav:MenuItem" data-cta="businessSupport"><div class="subcategory support">
						
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-support hidden-mobile">
</div>
						
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-support mobile">
</div>
						Soporte</div></a>
				</li>
				<li role="menuitem">
					<a class="mobile" href="/es-us/business/store" data-role="Nav:MenuItem" data-cta="businessShop"><div class="subcategory">
						
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-store mobile">
</div>
							Tienda

					</div></a>

				</li>
				<li data-second-menu="account">
					<div class="subcategory account arrow" tabindex="0">
						
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-account hidden-mobile">
</div>
						
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-account mobile">
</div>
						Cuenta</div>
					
					<div class="third-menu login">
						<ul class="block-products">
							
							<li class="mobile-link"><a href="https://id.avast.com/?target=https%3A%2F%2Fbusiness.avast.com%3A443%2F#login" data-role="Nav:MenuItem" data-cta="businessAccount">Business Hub</a></li>
							
							<li class="mobile-link"><a href="https://us.cloudcare.avg.com/" data-role="Nav:MenuItem" data-cta="businessAccount">CloudCare</a></li>
							<li class="mobile-link"><a href="https://partners.avast.com/s/login/" data-role="Nav:MenuItem" data-cta="businessAccount">Portal de revendedores</a></li>
						</ul>
					</div>
					
				</li>
			</ul>
		</div>
      

		
		<div class="second-menu for-partners">
			<div class="js-back mobile back">Para socios</div>
			<ul class="side" role="menu">
				<li>
					<a href="/es-us/partners/smartlife" data-role="Nav:MenuItem" data-cta="partnersCarriers"><span class="subcategory">Smart Life</span></a>
				</li>
				<li>
					<a href="/es-us/partners/mobile-security" data-role="Nav:MenuItem" data-cta="partnersAffiliate"><span class="subcategory">Mobile Security</span></a>
				</li>
				<li>
					<a href="/es-us/partners/vpn" data-role="Nav:MenuItem" data-cta="partnersBusiness"><span class="subcategory">VPN</span></a>
				</li>
				<li>
					<a href="/es-us/partners/threat-intelligence" data-role="Nav:MenuItem" data-cta="partnersBusiness"><span class="subcategory">Threat Intelligence</span></a>
				</li>
				<li>
					<a href="/es-us/partners/knowledge" data-role="Nav:MenuItem" data-cta="partnersBusiness"><span class="subcategory shop">Knowledge Center</span></a>
				</li>
			</ul>
		</div>


		
		<div class="second-menu about-us">
			<div class="js-back mobile back">Quiénes somos</div>

			<ul class="side" role="menu">
				<li>
					<a href="/es-us/about" data-role="Nav:MenuItem" data-cta="aboutAbout"><span class="subcategory">Acerca de Avast</span></a>
				</li>
				<li>
					<a href="/es-us/careers" data-role="Nav:MenuItem" data-cta="aboutCareers"><span class="subcategory line">Empleo</span></a>
				</li>

				
				<li>
					<a href="/es-us/digital-trust" data-role="Nav:MenuItem" data-cta="digitalTrust"><span class="subcategory line">Confianza digital</span></a>
				</li>
				<li data-second-menu="press-center">
					<span class="subcategory press-center arrow-inline"><span class="subcategory-text">Centro de prensa</span>&nbsp;<span class="icon-down"></span></span>

					
					<div class="third-menu press-center">
						<ul class="block-products">
							<li>
								<ul>
									<li class="mobile-link">
											<a href="https://press.avast.com/es-us" data-role="Nav:MenuItem" data-cta="aboutPressReleases">Comunicados de prensa</a>
									</li>

									<li class="mobile-link">
										<a href="https://press.avast.com/es-es/events" data-role="Nav:MenuItem" data-cta="aboutPressReleases">Eventos</a>
									</li>
									<li class="mobile-link">
										<a href="https://press.avast.com/es-es/news" data-role="Nav:MenuItem" data-cta="aboutPressReleases">En las noticias</a>
									</li>
									<li class="mobile-link">
										<a href="https://press.avast.com/es-es/media-materials" data-role="Nav:MenuItem" data-cta="aboutPressReleases">Materiales para medios de comunicación</a>
									</li>
									<li class="mobile-link">
										<a href="https://press.avast.com/es-es/contacts" data-role="Nav:MenuItem" data-cta="aboutPressReleases">Contactos de RR. PP.</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					
				</li>
				
				<li>
					<a href="/es-us/awards-certifications" data-role="Nav:MenuItem" data-cta="aboutAwards"><span class="subcategory">Premios</span></a>
				</li>
				
				<li data-second-menu="diversity">
					<span class="subcategory diversity arrow-inline"><span class="subcategory-text">Diversidad e inclusión</span>&nbsp;<span class="icon-down"></span></span>
					
					<div class="third-menu diversity">
						<ul class="block-products">
							<li>
								<ul>
									<li class="mobile-link">
										<a href="/es-us/diversity" data-role="Nav:MenuItem" data-cta="aboutDiversity">Diversidad e inclusión</a>
									</li>
									<li class="mobile-link">
										<a href="/es-us/accessibility" data-role="Nav:MenuItem" data-cta="aboutAccessibility">Accesibilidad</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					
				</li>
				
				<li>
					<a href="/es-us/contacts" data-role="Nav:MenuItem" data-cta="aboutContact"><span class="subcategory">Contáctenos</span></a>
				</li>
			</ul>
		</div>

		<ul class="second-menu blogs">
			<li class="js-back js-blog mobile back">Blogs</li>

			<li>
				<a href="https://blog.avast.com/es/" data-role="Nav:MenuItem" data-cta="blogsBlog">
					<span class="name">Blog de Avast</span>
					<span class="description">Lea noticias recientes sobre el mundo de la seguridad</span>
				</a>
			</li>

			<li>
				<a href="/es-es/c-academy" data-role="Nav:MenuItem" data-cta="blogsAcademy">
					<span class="name">Academia Avast</span>
					<span class="description">Consejos y guías de expertos sobre la seguridad digital y la privacidad</span>
				</a>
			</li>

			<li>
				<a href="https://decoded.avast.io/" data-role="Nav:MenuItem" data-cta="blogsDecoded">
					<span class="name">Avast Decoded</span>
					<span class="description">Artículos técnicos en profundidad sobre amenazas de seguridad</span>
				</a>
			</li>

			<li>
				<a href="https://forum.avast.com/" data-role="Nav:MenuItem" data-cta="blogsForum">
					<span class="name">Foro de Avast</span>
					<span class="description">Debata con la comunidad</span>
				</a>
			</li>
		</ul>

		


	</nav>

</div>
</header>

	

<section class="region-selector" role="dialog" aria-label="Selector de región">
	<div class="container">
		
<div data-cmp-name="icon" role="img" title="Cerrar" class="icon icon-32 icon-cross region-selector-close">
</div>
		
		<h1 class="visually-hidden">Lista de regiones disponibles</h1>
		
		<div class="custom-regions">

			<div class="area">
				<div class="js-regions-toggle subcategory arrow tagline-lg" tabindex="0">América</div>

				<div class="regions-wrapper area-1">
						<a class="with-flag region es-ar" lang="es" href="/es-ar/index">
							Argentina
						</a>
						<a class="with-flag region pt-br" lang="pt" href="/pt-br/index">
							Brasil
						</a>
						<a class="with-flag region en-ca" lang="en" href="/en-ca/index">
							Canada (English)
						</a>
						<a class="with-flag region fr-ca" lang="fr" href="/fr-ca/index">
							Canada (français)
						</a>
						<a class="with-flag region es-cl" lang="es" href="/es-cl/index">
							Chile
						</a>
						<a class="with-flag region es-co" lang="es" href="/es-co/index">
							Colombia
						</a>
						<a class="with-flag region es-us" lang="es" href="/es-us/index">
							EE.UU. (español)
						</a>
						<a class="with-flag region es-mx" lang="es" href="/es-mx/index">
							México
						</a>
						<a class="with-flag region en-us" lang="en" href="/en-us/index">
							USA (English)
						</a>

					
					<div class="region-spacer"></div>
						<a class="global with-flag region es-ww" lang="es" href="/es-ww/index">América Latina (español)</a>
				</div>
			</div>
			<div class="area">
				<div class="js-regions-toggle subcategory arrow tagline-lg" tabindex="0">Europa, Oriente Medio y África</div>

				<div class="regions-wrapper area-2">
						<a class="with-flag region nl-be" lang="nl" href="/nl-be/index">
							België (Nederlands)
						</a>
						<a class="with-flag region fr-be" lang="fr" href="/fr-be/index">
							Belgique (français)
						</a>
						<a class="with-flag region cs-cz" lang="cs" href="/cs-cz/index">
							Česká republika
						</a>
						<a class="with-flag region da-dk" lang="da" href="/da-dk/index">
							Danmark
						</a>
						<a class="with-flag region de-de" lang="de" href="/de-de/index">
							Deutschland 
						</a>
						<a class="with-flag region es-es" lang="es" href="/es-es/index">
							España
						</a>
						<a class="with-flag region fr-fr" lang="fr" href="/fr-fr/index">
							France
						</a>
						<a class="with-flag region it-it" lang="it" href="/it-it/index">
							Italia 
						</a>
						<a class="with-flag region hu-hu" lang="hu" href="/hu-hu/index">
							Magyarország
						</a>
						<a class="with-flag region nl-nl" lang="nl" href="/nl-nl/index">
							Nederland
						</a>
						<a class="with-flag region no-no" lang="no" href="/no-no/index">
							Norge
						</a>
						<a class="with-flag region pl-pl" lang="pl" href="/pl-pl/index">
							Polska
						</a>
						<a class="with-flag region pt-pt" lang="pt" href="/pt-pt/index">
							Portugal
						</a>
						<a class="with-flag region ro-ro" lang="ro" href="/ro-ro/index">
							România
						</a>
						<a class="with-flag region de-ch" lang="de" href="/de-ch/index">
							Schweiz (Deutsch)
						</a>
						<a class="with-flag region cs-sk" lang="cs" href="/cs-sk/index">
							Slovensko (česky)
						</a>
						<a class="with-flag region en-za" lang="en" href="/en-za/index">
							South Africa
						</a>
						<a class="with-flag region fr-ch" lang="fr" href="/fr-ch/index">
							Suisse (français)
						</a>
						<a class="with-flag region fi-fi" lang="fi" href="/fi-fi/index">
							Suomi
						</a>
						<a class="with-flag region sv-se" lang="sv" href="/sv-se/index">
							Sverige
						</a>
						<a class="with-flag region tr-tr" lang="tr" href="/tr-tr/index">
							Türkiye
						</a>
						<a class="with-flag region en-ae" lang="en" href="/en-ae/index">
							United Arab Emirates
						</a>
						<a class="with-flag region en-gb" lang="en" href="/en-gb/index">
							United Kingdom
						</a>
						<a class="with-flag region el-gr" lang="el" href="/el-gr/index">
							Ελλάδα
						</a>
						<a class="with-flag region he-il" lang="he" href="/he-il/index">
							ישראל
						</a>
						<a class="with-flag region ru-kz" lang="ru" href="/ru-kz/index">
							Казахстан
						</a>
						<a class="with-flag region ru-ru" lang="ru" href="//www.avast.ru/index">
							Россия
						</a>
						<a class="with-flag region uk-ua" lang="uk" href="//www.avast.ua/index">
							Україна (українська)
						</a>
						<a class="with-flag region ru-ua" lang="ru" href="//www.avast.ua/ru-ua/index">
							Украина (русский)
						</a>
						<a class="with-flag region ar-sa" lang="ar" href="/ar-sa/index">
							المملكة العربية السعودية
						</a>
						<a class="with-flag region ar-ww" lang="ar" href="/ar-ww/index">
							الدول العربية
						</a>

					
					<div class="region-spacer"></div>
						<a class="global with-flag region en-eu" lang="en" href="/en-eu/index">Europe (English)</a>
						<a class="global with-flag region en-ww" lang="en" href="/index">Worldwide (English)</a>
				</div>
			</div>
			<div class="area">
				<div class="js-regions-toggle subcategory arrow tagline-lg" tabindex="0">Asia y Pacífico</div>

				<div class="regions-wrapper area-3">
						<a class="with-flag region en-au" lang="en" href="/en-au/index">
							Australia
						</a>
						<a class="with-flag region en-in" lang="en" href="/en-in/index">
							India
						</a>
						<a class="with-flag region hi-in" lang="hi" href="/hi-in/index">
							इंडिया (हिंदी)
						</a>
						<a class="with-flag region en-id" lang="en" href="/en-id/index">
							Indonesia (English)
						</a>
						<a class="with-flag region id-id" lang="id" href="/id-id/index">
							Indonesia (Bahasa Indonesia)
						</a>
						<a class="with-flag region en-my" lang="en" href="/en-my/index">
							Malaysia (English)
						</a>
						<a class="with-flag region ms-my" lang="ms" href="/ms-my/index">
							Malaysia (Bahasa Melayu)
						</a>
						<a class="with-flag region en-nz" lang="en" href="/en-nz/index">
							New Zealand
						</a>
						<a class="with-flag region en-ph" lang="en" href="/en-ph/index">
							Philippines (English)
						</a>
						<a class="with-flag region tl-ph" lang="tl" href="/tl-ph/index">
							Pilipinas (Filipino)
						</a>
						<a class="with-flag region en-sg" lang="en" href="/en-sg/index">
							Singapore
						</a>
						<a class="with-flag region vi-vn" lang="vi" href="/vi-vn/index">
							Việt Nam
						</a>
						<a class="with-flag region ja-jp" lang="ja" href="//www.avast.co.jp/index">
							日本語 
						</a>
						<a class="with-flag region ko-kr" lang="ko" href="/ko-kr/index">
							대한민국
						</a>
						<a class="with-flag region zh-cn" lang="zh" href="/zh-cn/index">
							简体中文
						</a>
						<a class="with-flag region zh-tw" lang="zh" href="/zh-tw/index">
							繁體中文
						</a>
						<a class="with-flag region th-th" lang="th" href="/th-th/index">
							ประเทศไทย
						</a>

					
					<div class="region-spacer"></div>
				</div>
			</div>

			
			<div class="main-regions">
				<h5 class="visually-hidden">Regiones principales</h5>
				<a class="with-flag region en-ww" lang="en" href="/index">Worldwide (English)</a>
				<a class="with-flag region es-ww" lang="es" href="/es-ww/index">América Latina (español)</a>
				<a class="with-flag region en-eu" lang="en" href="/en-eu/index">Europe (English)</a>
			</div>

		</div>
	</div>
</section>


		<div class="content-holder" id="main-content" tabindex="-1">
			



	

<section
 data-cmp-name="hero" class="hero autoheight">
	<div class="container">
		<div class="row">

			


			
			<div class="col-12 col-lg-7 hero-content">

				<h1 class="hero-headline">Antivirus <span class="highlight">gratuito</span> avalado por más de 30 años de experiencia</h1>
			<div class="hero-text body-1">Avast <a href="/es-us/free-antivirus-download">antivirus gratuito</a> es fácil de instalar y de usar. Únase a los más de 435 millones de usuarios que ya disfrutan de la tranquilidad que les ofrece nuestra protección galardonada.</div>
		
			<div class="hero-buttons">
						
<a data-platform="pc"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=FAV-ONLINE-HP&locale=es-us" data-bi-download-name="FAV-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full lg blue" data-role="download-link" data-download-name="FAV-ONLINE-HP" class="btn full size-lg theme-blue btn-icon-left bi-download-link js-pc">
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-win btn-icon">
</div><span>Descarga gratuita</span></a>
						
<a data-platform="mac"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=MAC-FREE-ONLINE-HP&locale=es-us" data-bi-download-name="MAC-FREE-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full lg blue" data-role="download-link" data-download-name="MAC-FREE-ONLINE-HP" class="btn full size-lg theme-blue btn-icon-left bi-download-link js-mac">
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-mac btn-icon">
</div><span>Descarga gratuita</span></a>
						
<a data-platform="android"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=AMS&locale=es-us" data-bi-download-name="AMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full lg blue" data-role="download-link" data-download-name="AMS" class="btn full size-lg theme-blue btn-icon-left bi-download-link js-android">
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-android btn-icon">
</div><span>Descarga gratuita</span></a>
						
<a data-platform="ios"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=IMS&locale=es-us" data-bi-download-name="IMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full lg blue" data-role="download-link" data-download-name="IMS" class="btn full size-lg theme-blue btn-icon-left bi-download-link js-ios">
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-ios btn-icon">
</div><span>Descarga gratuita</span></a>
			</div>

		<div class="hero-note">
			<span class="body-3 js-pc">
				También disponible para <a href="download-thank-you.php?product=MAC-FREE-ONLINE-HP" data-bi-download-name="MAC-FREE-ONLINE-HP" data-download-name="MAC-FREE-ONLINE-HP" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="mac">Mac</a>, <a href="download-thank-you.php?product=AMS" data-bi-download-name="AMS" data-download-name="AMS" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="android">Android</a> y <a href="download-thank-you.php?product=IMS" data-bi-download-name="IMS" data-download-name="IMS" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="ios">iOS</a>
			</span>
			<span class="body-3 js-mac">
				También disponible para <a href="download-thank-you.php?product=FAV-ONLINE-HP" data-bi-download-name="FAV-ONLINE-HP" data-download-name="FAV-ONLINE-HP" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="pc">PC</a>, <a href="download-thank-you.php?product=AMS" data-bi-download-name="AMS" data-download-name="AMS" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="android">Android</a> y <a href="download-thank-you.php?product=IMS" data-bi-download-name="IMS" data-download-name="IMS" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="ios">iOS</a>
			</span>
			<span class="body-3 js-ios">
				También disponible para <a href="download-thank-you.php?product=MAC-FREE-ONLINE-HP" data-bi-download-name="MAC-FREE-ONLINE-HP" data-download-name="MAC-FREE-ONLINE-HP" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="mac">Mac</a>, <a href="download-thank-you.php?product=AMS" data-bi-download-name="AMS" data-download-name="AMS" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="android">Android</a> y <a href="download-thank-you.php?product=FAV-ONLINE-HP" data-bi-download-name="FAV-ONLINE-HP" data-download-name="FAV-ONLINE-HP" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="pc">PC</a>
			</span>
			<span class="body-3 js-android">
				También disponible para <a href="download-thank-you.php?product=FAV-ONLINE-HP" data-bi-download-name="FAV-ONLINE-HP" data-download-name="FAV-ONLINE-HP" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="pc">PC</a>, <a href="download-thank-you.php?product=MAC-FREE-ONLINE-HP" data-bi-download-name="MAC-FREE-ONLINE-HP" data-download-name="MAC-FREE-ONLINE-HP" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="mac">Mac</a> y <a href="download-thank-you.php?product=IMS" data-bi-download-name="IMS" data-download-name="IMS" class="modal-oops-hint-link" data-role="download-link" data-oops-target="oopsFAV" data-platform="ios">iOS</a>
			</span>
		</div>

		<div class="hero-awards-wrap">
			<div
 data-cmp-name="award-badges" class="award-badges-wrap size-sm short no-text">
		

		
		
		
		<div class="award-badge">
				<div class="badge-image">
					<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/_awards/avc-top-rated-2022.png?height=38"
				 width="68" height="38" alt="" loading="lazy" class="ratio-16-9">
					
				</div>

				<div
					class="badge-text"
				>
					2022<br><b>Mejor valoración</b>
				</div>

		</div>

		
		

		
		
		
		<div class="award-badge">
				<div class="badge-image">
					<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/_awards/av-test-best-protection-2022.png?height=64"
				 width="36" height="64" alt="" loading="lazy" class="ratio-9-16">
					
				</div>

				<div
					class="badge-text"
				>
					2022<br><b>Mejor protección</b>
				</div>

		</div>

		
			
<div data-cmp-name="trustpilot" class="trustpilot-widget size-sm short " data-locale="es-us" data-template-id="5419b6ffb0d04a076446a9af" data-businessunit-id="46d31466000064000500a775" data-theme="light" data-stars="1,2,3,4,5" data-no-reviews="hide" data-scroll-to-list="true" data-allow-robots="true">
	<a href="https://uk.trustpilot.com/review/www.avast.com" target="_blank" rel="noopener">Trustpilot</a>
</div>
</div>
		</div>
			</div>

			

			
				<div class="col-12 col-lg-5 hero-content-right">
						<div class="hero-image-wrapper">
							<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/index/hero-img.svg?width=664" alt="" height="100%" class="hero-image">
						</div>
				</div>
			

		</div>
	</div>
	
</section>


<section>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12">
							<div
		 data-cmp-name="stripe" class="stripe box usp contents-usp bg-orange-faint">
				<div

	 data-cmp-name="feature-item" class="feature-item size-lg in-stripe border-0">

	

		<div class="feature-item-img"><img src="https://static3.avast.com/10003483/web/i/v3/components/icons/feature-icons/80x80/award-winning--shield-badge.svg" alt="" loading="lazy"></div>

	<div class="feature-item-body">
		<div class="tagline-lg feature-item-tagline">Antivirus gratuito y galardonado</div>
	</div>

	


	</div>
	
									<div

	 data-cmp-name="feature-item" class="feature-item size-lg in-stripe border-0">

	

		<div class="feature-item-img"><img src="https://static3.avast.com/10003483/web/i/v3/components/icons/feature-icons/80x80/one-click-deployment--laptop-hand.svg" alt="" loading="lazy"></div>

	<div class="feature-item-body">
		<div class="tagline-lg feature-item-tagline">Fácil de instalar de usar</div>
	</div>

	


	</div>
	
									<div

	 data-cmp-name="feature-item" class="feature-item size-lg in-stripe border-0">

	

		<div class="feature-item-img"><img src="https://static3.avast.com/10003483/web/i/v3/components/icons/feature-icons/80x80/defend-wifi--shield.svg" alt="" loading="lazy"></div>

	<div class="feature-item-body">
		<div class="tagline-lg feature-item-tagline">También protege su red Wi-Fi</div>
	</div>

	


	</div>
	
									<div

	 data-cmp-name="feature-item" class="feature-item size-lg in-stripe border-0">

	

		<div class="feature-item-img"><img src="https://static3.avast.com/10003483/web/i/v3/components/icons/feature-icons/80x80/no-slowing-down--laptop-fast-speed.svg" alt="" loading="lazy"></div>

	<div class="feature-item-body">
		<div class="tagline-lg feature-item-tagline">No ralentiza su dispositivo</div>
	</div>

	


	</div>

		</div>

			</div>
		</div>
	</div>
</section>


<div
 data-cmp-name="sticky-bar" class="sticky-bar">
	<div class="sticky-bar-content">

		<div class="sticky-bar__left">
			<div class="product-name">
					


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_free-antivirus_white.svg" alt="" loading="lazy">
</div>
				<span class="h7">Descargar antivirus gratuito</span>
			</div>
		</div>

		<div class="sticky-bar__right">
			<div
 data-cmp-name="award-badges" class="award-badges-wrap size-sm long no-text">
		

		
		
		
		<div class="award-badge">
				<div class="badge-image">
					<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/_awards/av-test-top-product-16-9.png?height=38"
				 width="68" height="38" alt="" loading="lazy" class="ratio-16-9">
					
				</div>

				<div
					class="badge-text"
				>
					2022<br><b>Mejor valoración</b>
				</div>

		</div>

		
</div>
		<div class="h7 header-text">¡Consígalo gratis!</div>
					
<a data-platform="pc"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=FAV-ONLINE-HP&locale=es-us" data-bi-download-name="FAV-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full sm blue" data-role="download-link" data-download-name="FAV-ONLINE-HP" class="btn full size-sm theme-blue btn-icon-left bi-download-link btn-stay js-pc">
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-win btn-icon">
</div><span>Descarga gratuita</span></a>
					
<a data-platform="mac"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=MAC-FREE-ONLINE-HP&locale=es-us" data-bi-download-name="MAC-FREE-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full sm blue" data-role="download-link" data-download-name="MAC-FREE-ONLINE-HP" class="btn full size-sm theme-blue btn-icon-left bi-download-link btn-stay js-mac">
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-mac btn-icon">
</div><span>Descarga gratuita</span></a>
					
<a data-platform="android"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=AMS&locale=es-us" data-bi-download-name="AMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full sm blue" data-role="download-link" data-download-name="AMS" class="btn full size-sm theme-blue btn-icon-left bi-download-link btn-stay js-android">
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-android btn-icon">
</div><span>Descarga gratuita</span></a>
					
<a data-platform="ios"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=IMS&locale=es-us" data-bi-download-name="IMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full sm blue" data-role="download-link" data-download-name="IMS" class="btn full size-sm theme-blue btn-icon-left bi-download-link btn-stay js-ios">
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-ios btn-icon">
</div><span>Descarga gratuita</span></a>
		</div>

	</div>
</div>


<section class="features-section sticky-waypoint section-py">
	<div class="container">
		<div class="row justify-content-center text-center">
			<div class="col-12 col-lg-10">
				<div class="product-name justify-content-center mb-16 mb-lg-24">
					


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_free-antivirus_white.svg" alt="" loading="lazy">
</div>
					<span class="h7">Avast Free Antivirus</span>
				</div>
				<h2 class="section-header">Consiga un antivirus gratuito con funciones de privacidad y seguridad avanzadas</h2>
				<p class="body-2 mb-40 mb-lg-32">Avast Free Antivirus es más que un simple antivirus, también incluye estas herramientas especializadas:</p>
			</div>
		</div>
		
		<div class="row justify-content-center">
			<div class="col-12 col-lg-3 pl-0 mt-lg-24 mb-24 mb-lg-0">
					<div

	 data-cmp-name="feature-item" class="feature-item size-lg centered">

	

		<div class="feature-item-img"><img src="https://static3.avast.com/10003483/web/i/v3/components/icons/feature-icons/80x80/deploy-layered--shields-hand.svg" alt="" loading="lazy"></div>

	<div class="feature-item-body">
		<div class="h6 feature-item-title">Seis capas de seguridad</div>
		<div class="feature-item-text">Realice análisis inteligentes de software, archivos y aplicaciones para encontrar vulnerabilidades sin esfuerzo; analice los archivos sospechosos en la nube; reciba alertas de amenazas y mucho más.</div>
	</div>

	


	</div>

			</div>
			<div class="col-12 col-lg-3 mt-lg-24 mb-24 mb-lg-0">
					<div

	 data-cmp-name="feature-item" class="feature-item size-lg centered">

	

		<div class="feature-item-img"><img src="https://static3.avast.com/10003483/web/i/v3/components/icons/feature-icons/80x80/one-click-deployment--laptop-hand.svg" alt="" loading="lazy"></div>

	<div class="feature-item-body">
		<div class="h6 feature-item-title">Fácil de instalar y usar</div>
		<div class="feature-item-text">Solo se tarda un momento en instalar Avast Free Antivirus y después funcionará silenciosamente en segundo plano, protegiéndole continuamente contra los virus y otros programas maliciosos en tiempo real</div>
	</div>

	


	</div>

			</div>
			<div class="col-12 col-lg-3 mt-lg-24 mb-24 mb-lg-0">
					<div

	 data-cmp-name="feature-item" class="feature-item size-lg centered">

	

		<div class="feature-item-img"><img src="https://static3.avast.com/10003483/web/i/v3/components/icons/feature-icons/80x80/defend-wifi--shield.svg" alt="" loading="lazy"></div>

	<div class="feature-item-body">
		<div class="h6 feature-item-title">Seguridad de la red Wi-Fi</div>
		<div class="feature-item-text">Conéctese de forma segura a cualquier red Wi-Fi, incluso a las redes públicas no seguras, vea quién está utilizando su red Wi-Fi doméstica y bloquee a los intrusos con un clic.</div>
	</div>

	


	</div>

			</div>	
			<div class="col-12 col-lg-3 pr-0 mt-lg-24">
					<div

	 data-cmp-name="feature-item" class="feature-item size-lg centered">

	

		<div class="feature-item-img"><img src="https://static3.avast.com/10003483/web/i/v3/components/icons/feature-icons/80x80/ransomware--laptop-shield-money.svg" alt="" loading="lazy"></div>

	<div class="feature-item-body">
		<div class="h6 feature-item-title">Protección contra los ataques de ransomware</div>
		<div class="feature-item-text">Proteja su información. No permita que sus fotos, archivos y documentos personales se conviertan en rehenes de los hackers por medio del ransomware.</div>
	</div>

	


	</div>

			</div>	
		</div>
		
		<div class="row justify-content-center text-center">
			<div class="col-12 mt-32 mt-lg-40">	
				<div class="d-flex justify-content-center align-items-center gap-16 gap-lg-24 flex-column flex-lg-row">
							
<a data-platform="pc"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=FAV-ONLINE-HP&locale=es-us" data-bi-download-name="FAV-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="FAV-ONLINE-HP" class="btn full size-md theme-blue btn-icon-left bi-download-link js-pc">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-win btn-icon">
</div><span>Descarga gratuita</span></a>
							
<a data-platform="mac"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=MAC-FREE-ONLINE-HP&locale=es-us" data-bi-download-name="MAC-FREE-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="MAC-FREE-ONLINE-HP" class="btn full size-md theme-blue btn-icon-left bi-download-link js-mac">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-mac btn-icon">
</div><span>Descarga gratuita</span></a>
							
<a data-platform="android"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=AMS&locale=es-us" data-bi-download-name="AMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="AMS" class="btn full size-md theme-blue btn-icon-left bi-download-link js-android">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-android btn-icon">
</div><span>Descarga gratuita</span></a>
							
<a data-platform="ios"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=IMS&locale=es-us" data-bi-download-name="IMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="IMS" class="btn full size-md theme-blue btn-icon-left bi-download-link js-ios">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-ios btn-icon">
</div><span>Descarga gratuita</span></a>
					
					

<a  href="/es-us/free-antivirus-download" tabindex="0" data-cmp-name="button" data-cms-component="button--outline md blue" data-role="promo-link" class="btn outline size-md theme-blue btn-icon-right js-learnMore-tracking"><span>Más información</span>
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-arrow-right btn-icon">
</div></a>
				</div>
			</div>
		</div>
	</div>
</section>





<section
 data-cmp-name="media" class="media bg-size-container img-position-right">
	<div
		style=""
	 class="container inverse">
		<div class="row media-row">

			
			<div class="col-1 d-none d-lg-block"></div>
			<div class="col-12 col-sm-10 col-lg-5 media-text">

				<div class="media-title"><div class="product-name">
			


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_premium-security_white.svg" alt="" loading="lazy">
</div><span class="h7">Avast Premium Security</span>
		</div>
		<div class="h2">Protección completa para todos sus dispositivos</div></div>

				
				<div class="d-lg-none row justify-content-center">
					<div class="col-12 col-sm-10 col-md-8">
						<div class="img-mobile-wrap">
							<picture>
								<source media="(min-width: 768px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-security.png?width=688">
								<source media="(min-width: 576px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-security.png?width=508">
								<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-security.png?width=688" alt="" loading="lazy" width="548" height="456" class="img-mobile">
							</picture>

						</div>
					</div>
				</div>
				

				<div class="media-body"><div class="body-2">
			
	Nuestra protección más avanzada es su defensa más resistente contra los <b>virus</b>, el <b>ransomware</b>, las amenazas de <b>día cero</b>, las vulnerabilidades de las redes Wi-Fi y mucho más.
			
		</div>
		<div class="buttons">
			

<a  href="/es-us/premium-security" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="promo-link" class="btn full size-md theme-blue btn-icon-right"><span>Protéjase</span>
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-arrow-right btn-icon">
</div></a>
		</div></div>
			</div>
			


			
			<div
			 class="col-12 col-lg-6 d-none d-lg-flex justify-content-center align-items-center img-desktop-wrap">
				<picture>
					<source media="(min-width: 1600px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-security.png?width=664">
					<source media="(min-width: 1366px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-security.png?width=628">
					<source media="(min-width: 1280px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-security.png?width=580">
					<source media="(min-width: 992px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-security.png?width=448">
					<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-security.png?width=664" alt="" loading="lazy" width="548" height="456" class="img-desktop">
				</picture>
			</div>
			
		</div>
	</div>
</section>





<section
 data-cmp-name="media" class="media bg-size-full img-position-left">
	<div
		style=""
	 class="container pack-top">
		<div class="row media-row">

			
			<div class="col-1 d-none d-lg-block"></div>
			<div class="col-12 col-sm-10 col-lg-5 media-text">

				<div class="media-title"><div class="product-name">
			


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_secureline-vpn_white.svg" alt="" loading="lazy">
</div><span class="h7">Avast SecureLine VPN</span>
		</div>
		<div class="h2">Elija una VPN para conseguir una verdadera privacidad</div></div>

				
				<div class="d-lg-none row justify-content-center">
					<div class="col-12 col-sm-10 col-md-8">
						<div class="img-mobile-wrap">
							<picture>
								<source media="(min-width: 768px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-vpn.png?width=688">
								<source media="(min-width: 576px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-vpn.png?width=508">
								<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-vpn.png?width=688" alt="" loading="lazy" width="616" height="512" class="img-mobile">
							</picture>

						</div>
					</div>
				</div>
				

				<div class="media-body"><div class="body-2">Evite que su proveedor de Internet siga su actividad, eluda las restricciones geográficas de los proveedores de contenido y protéjase en las redes Wi-Fi públicas con la <a href="secureline-vpn">red privada virtual (VPN)</a> de Avast.</div>
		<div class="buttons">
			

<a  href="/es-us/secureline-vpn" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="promo-link" class="btn full size-md theme-blue btn-icon-right"><span>Descubra las VPN</span>
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-arrow-right btn-icon">
</div></a>
		</div></div>
			</div>
			


			
			<div
			 class="col-12 col-lg-6 d-none d-lg-flex justify-content-center align-items-center img-desktop-wrap">
				<picture>
					<source media="(min-width: 1600px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-vpn.png?width=664">
					<source media="(min-width: 1366px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-vpn.png?width=628">
					<source media="(min-width: 1280px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-vpn.png?width=580">
					<source media="(min-width: 992px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-vpn.png?width=448">
					<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-vpn.png?width=664" alt="" loading="lazy" width="616" height="512" class="img-desktop">
				</picture>
			</div>
			
		</div>
	</div>
</section>





<section
 data-cmp-name="media" class="media bg-size-full img-position-right">
	<div
		style=""
	 class="container pack-bottom">
		<div class="row media-row">

			
			<div class="col-1 d-none d-lg-block"></div>
			<div class="col-12 col-sm-10 col-lg-5 media-text">

				<div class="media-title"><div class="product-name">
			


<div
 data-cmp-name="product-icon" class="product-icon box size-32">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/32/prodico-32_cleanup-premium_white.svg" alt="" loading="lazy">
</div><span class="h7">Avast Cleanup Premium</span>
		</div>
		<div class="h2">Disfrute de un dispositivo más rápido y con más espacio de almacenamiento</div></div>

				
				<div class="d-lg-none row justify-content-center">
					<div class="col-12 col-sm-10 col-md-8">
						<div class="img-mobile-wrap">
							<picture>
								<source media="(min-width: 768px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-cleanup.png?width=688">
								<source media="(min-width: 576px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-cleanup.png?width=508">
								<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-cleanup.png?width=688" alt="" loading="lazy" width="616" height="512" class="img-mobile">
							</picture>

						</div>
					</div>
				</div>
				

				<div class="media-body"><div class="body-2">Recupere gigabytes de espacio de almacenamiento y haga que su dispositivo funcione como nuevo eliminando basura como archivos residuales, bloatware y programas no deseados. Además, Avast Cleanup actualiza su software automáticamente, pone en hibernación las aplicaciones que consumen más recursos y mucho más.</div>
		<div class="buttons">
			

<a  href="/es-us/cleanup" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="promo-link" class="btn full size-md theme-blue btn-icon-right"><span>Descubra Cleanup</span>
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-arrow-right btn-icon">
</div></a>
		</div></div>
			</div>
			


			
			<div
			 class="col-12 col-lg-6 d-none d-lg-flex justify-content-center align-items-center img-desktop-wrap">
				<picture>
					<source media="(min-width: 1600px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-cleanup.png?width=664">
					<source media="(min-width: 1366px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-cleanup.png?width=628">
					<source media="(min-width: 1280px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-cleanup.png?width=580">
					<source media="(min-width: 992px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-cleanup.png?width=448">
					<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-cleanup.png?width=664" alt="" loading="lazy" width="616" height="512" class="img-desktop">
				</picture>
			</div>
			
		</div>
	</div>
</section>





<section
 data-cmp-name="media" class="media bg-gray10 bg-size-full img-position-left">
	<div
		style=""
	 class="container">
		<div class="row media-row">

			
			<div class="col-1 d-none d-lg-block"></div>
			<div class="col-12 col-sm-10 col-lg-5 media-text">

				<div class="media-title"><div class="h2">Es muy fácil de instalar; bastan unos segundos para cambiar a Avast</div></div>

				
				<div class="d-lg-none row justify-content-center">
					<div class="col-12 col-sm-10 col-md-8">
						<div class="img-mobile-wrap">
							<picture>
								<source media="(min-width: 768px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-install.svg?width=688">
								<source media="(min-width: 576px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-install.svg?width=508">
								<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-install.svg?width=688" alt="" loading="lazy" width="548" height="440" class="img-mobile">
							</picture>

						</div>
					</div>
				</div>
				

				<div class="media-body"><div class="body-2">Puede empezar a usar el antivirus galardonado de Avast inmediatamente. Es rápido y fácil de instalar, y le ofrece toda la protección que necesita para vivir su vida en línea de forma segura. Y es completamente gratis, así que pruébelo ya.</div>
		<div class="buttons">
					
<a data-platform="pc"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=FAV-ONLINE-HP&locale=es-us" data-bi-download-name="FAV-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="FAV-ONLINE-HP" class="btn full size-md theme-blue btn-icon-left bi-download-link js-pc">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-win btn-icon">
</div><span>Descarga gratuita</span></a>
					
<a data-platform="mac"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=MAC-FREE-ONLINE-HP&locale=es-us" data-bi-download-name="MAC-FREE-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="MAC-FREE-ONLINE-HP" class="btn full size-md theme-blue btn-icon-left bi-download-link js-mac">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-mac btn-icon">
</div><span>Descarga gratuita</span></a>
					
<a data-platform="android"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=AMS&locale=es-us" data-bi-download-name="AMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="AMS" class="btn full size-md theme-blue btn-icon-left bi-download-link js-android">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-android btn-icon">
</div><span>Descarga gratuita</span></a>
					
<a data-platform="ios"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=IMS&locale=es-us" data-bi-download-name="IMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="IMS" class="btn full size-md theme-blue btn-icon-left bi-download-link js-ios">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-ios btn-icon">
</div><span>Descarga gratuita</span></a>
		</div></div>
			</div>
			


			
			<div
			 class="col-12 col-lg-6 d-none d-lg-flex justify-content-center align-items-center img-desktop-wrap">
				<picture>
					<source media="(min-width: 1600px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-install.svg?width=664">
					<source media="(min-width: 1366px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-install.svg?width=628">
					<source media="(min-width: 1280px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-install.svg?width=580">
					<source media="(min-width: 992px)" srcset="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-install.svg?width=448">
					<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/index/media-install.svg?width=664" alt="" loading="lazy" width="548" height="440" class="img-desktop">
				</picture>
			</div>
			
		</div>
	</div>
</section>

<section class="bg-gray10">
	<div class="container">
		<div class="row justify-content-center">
			<h2 class="text-center mb-40 mb-lg-56">Avast cuenta con más de 435 millones de usuarios alrededor del mundo</h2>
			<div class="col-12 col-lg-4 mb-24 mb-lg-0">
					<div

	 data-cmp-name="testimonial" class="testimonial type-sm ratio-16-9 bg-white">

	

		<div class="text-wrapper">
				
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-quote quotation-icon">
</div>
			<div class="body-2">La interfaz de usuario de su software es sorprendente. Un gran trabajo año tras año. ¡Me faltan palabras para explicar lo buenos que sois!</div>

		</div>
		
		<div class="details">
			<div class="person">
				<div class="h6">Ryan R.</div>
				<div class="text-muted">
					
				
					
					<div
 data-cmp-name="rating" class="rating only-stars">
	
	<div class="rating-values">
			<style>
				.stars-192 {background-image: url('data:image/svg+xml, <svg style="color:%23FF7800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20\.6529 10\.7987L16\.1197 14\.2401L17\.8656 19\.8381C18\.1094 20\.6054 17\.2227 21\.3249 16\.5701 20\.8332L12\.001 17\.3653L7\.43259 20\.8332C6\.75784 21\.3416 5\.90502 20\.5683 6\.13705 19\.8381L7\.88356 14\.2401L3\.35045 10\.7993C2\.72304 10\.3253 3\.01278 9\.19739 3\.84495 9\.19739H9\.45662L11\.1943 3\.62528C11\.4314 2\.8155 12\.5719 2\.8155 12\.809 3\.62528L14\.546 9\.19739H20\.1571C20\.9885 9\.19739 21\.279 10\.3241 20\.6529 10\.7987Z" opacity=".3"/></svg>');}
				.stars-192:before {background-image: url('data:image/svg+xml, <svg style="color:%23FF7800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20\.6529 10\.7987L16\.1197 14\.2401L17\.8656 19\.8381C18\.1094 20\.6054 17\.2227 21\.3249 16\.5701 20\.8332L12\.001 17\.3653L7\.43259 20\.8332C6\.75784 21\.3416 5\.90502 20\.5683 6\.13705 19\.8381L7\.88356 14\.2401L3\.35045 10\.7993C2\.72304 10\.3253 3\.01278 9\.19739 3\.84495 9\.19739H9\.45662L11\.1943 3\.62528C11\.4314 2\.8155 12\.5719 2\.8155 12\.809 3\.62528L14\.546 9\.19739H20\.1571C20\.9885 9\.19739 21\.279 10\.3241 20\.6529 10\.7987Z" /></svg>');}
			</style>
		<div class="stars stars-192 value45"></div>
	</div>

	<span itemprop="ratingValue">4.5</span>
</div>
				</div>
			</div>
		</div>

	</div>

			</div>
			<div class="col-12 col-lg-4 mb-24 mb-lg-0">
					<div

	 data-cmp-name="testimonial" class="testimonial type-sm ratio-16-9 bg-white">

	

		<div class="text-wrapper">
				
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-quote quotation-icon">
</div>
			<div class="body-2">Gracias, Avast, por el excelente trabajo que hacéis. Utilizo vuestro software antivirus tanto en mi Mac OS X como en mis equipos Windows. Tenéis los mejores productos del mercado, y punto.</div>

		</div>
		
		<div class="details">
			<div class="person">
				<div class="h6">Eric S.</div>
				<div class="text-muted">
					
				
					
					<div
 data-cmp-name="rating" class="rating only-stars">
	
	<div class="rating-values">
			<style>
				.stars-691 {background-image: url('data:image/svg+xml, <svg style="color:%23FF7800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20\.6529 10\.7987L16\.1197 14\.2401L17\.8656 19\.8381C18\.1094 20\.6054 17\.2227 21\.3249 16\.5701 20\.8332L12\.001 17\.3653L7\.43259 20\.8332C6\.75784 21\.3416 5\.90502 20\.5683 6\.13705 19\.8381L7\.88356 14\.2401L3\.35045 10\.7993C2\.72304 10\.3253 3\.01278 9\.19739 3\.84495 9\.19739H9\.45662L11\.1943 3\.62528C11\.4314 2\.8155 12\.5719 2\.8155 12\.809 3\.62528L14\.546 9\.19739H20\.1571C20\.9885 9\.19739 21\.279 10\.3241 20\.6529 10\.7987Z" opacity=".3"/></svg>');}
				.stars-691:before {background-image: url('data:image/svg+xml, <svg style="color:%23FF7800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20\.6529 10\.7987L16\.1197 14\.2401L17\.8656 19\.8381C18\.1094 20\.6054 17\.2227 21\.3249 16\.5701 20\.8332L12\.001 17\.3653L7\.43259 20\.8332C6\.75784 21\.3416 5\.90502 20\.5683 6\.13705 19\.8381L7\.88356 14\.2401L3\.35045 10\.7993C2\.72304 10\.3253 3\.01278 9\.19739 3\.84495 9\.19739H9\.45662L11\.1943 3\.62528C11\.4314 2\.8155 12\.5719 2\.8155 12\.809 3\.62528L14\.546 9\.19739H20\.1571C20\.9885 9\.19739 21\.279 10\.3241 20\.6529 10\.7987Z" /></svg>');}
			</style>
		<div class="stars stars-691 value50"></div>
	</div>

	<span itemprop="ratingValue">5</span>
</div>
				</div>
			</div>
		</div>

	</div>

			</div>
			<div class="col-12 col-lg-4">
					<div

	 data-cmp-name="testimonial" class="testimonial type-sm ratio-16-9 bg-white">

	

		<div class="text-wrapper">
				
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-quote quotation-icon">
</div>
			<div class="body-2">Llevo más de un año usando Avast y me parece una de las mejores aplicaciones gratuitas de software de protección de dispositivos del mercado.</div>

		</div>
		
		<div class="details">
			<div class="person">
				<div class="h6">Daryl C.</div>
				<div class="text-muted">
					
				
					
					<div
 data-cmp-name="rating" class="rating only-stars">
	
	<div class="rating-values">
			<style>
				.stars-216 {background-image: url('data:image/svg+xml, <svg style="color:%23FF7800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20\.6529 10\.7987L16\.1197 14\.2401L17\.8656 19\.8381C18\.1094 20\.6054 17\.2227 21\.3249 16\.5701 20\.8332L12\.001 17\.3653L7\.43259 20\.8332C6\.75784 21\.3416 5\.90502 20\.5683 6\.13705 19\.8381L7\.88356 14\.2401L3\.35045 10\.7993C2\.72304 10\.3253 3\.01278 9\.19739 3\.84495 9\.19739H9\.45662L11\.1943 3\.62528C11\.4314 2\.8155 12\.5719 2\.8155 12\.809 3\.62528L14\.546 9\.19739H20\.1571C20\.9885 9\.19739 21\.279 10\.3241 20\.6529 10\.7987Z" opacity=".3"/></svg>');}
				.stars-216:before {background-image: url('data:image/svg+xml, <svg style="color:%23FF7800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20\.6529 10\.7987L16\.1197 14\.2401L17\.8656 19\.8381C18\.1094 20\.6054 17\.2227 21\.3249 16\.5701 20\.8332L12\.001 17\.3653L7\.43259 20\.8332C6\.75784 21\.3416 5\.90502 20\.5683 6\.13705 19\.8381L7\.88356 14\.2401L3\.35045 10\.7993C2\.72304 10\.3253 3\.01278 9\.19739 3\.84495 9\.19739H9\.45662L11\.1943 3\.62528C11\.4314 2\.8155 12\.5719 2\.8155 12\.809 3\.62528L14\.546 9\.19739H20\.1571C20\.9885 9\.19739 21\.279 10\.3241 20\.6529 10\.7987Z" /></svg>');}
			</style>
		<div class="stars stars-216 value45"></div>
	</div>

	<span itemprop="ratingValue">4.5</span>
</div>
				</div>
			</div>
		</div>

	</div>

			</div>
		</div>
	</div>
</section>


<section class="bg-gray10 awards-section">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10 text-center">
				<div
 data-cmp-name="award-badges" class="award-badges-wrap centered size-lg short">
		

		
		
		
		<div class="award-badge">
				<div class="badge-image">
					<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/_awards/av-test-best-protection-2022.png?height=120"
				 width="68" height="120" alt="" loading="lazy" class="ratio-9:16">
					
				</div>

				<div
					class="badge-text"
				>
					«Avast, el prestigioso especialista en seguridad, ha recibido un total de tres premios por su excelente rendimiento[...] y demuestra la fiabilidad y solvencia con las que el software de seguridad presta su servicio...»
				</div>

		</div>

		
		

		
		
		
		<div class="award-badge">
				<div class="badge-image">
					<img src="https://static3.avast.com/10003483/web/i/v3/aim/img/_awards/avc-top-rated-2022.png?height=72"
				 width="128" height="72" alt="" loading="lazy" class="ratio-16-9">
					
				</div>

				<div
					class="badge-text"
				>
					Premiado como Producto de Seguridad Destacado en 2022<br>por AV-Comparatives
				</div>

		</div>

		
</div>
			</div>
		</div>
	</div>
</section>





	<div class="section-py">
		
			<section
			 data-cmp-name="academy-carousel-header" class="academy-carousel academy-header mb-40 mb-lg-56">
				<div class="container">
					<div class="row align-items-end">
						<div class="text-center text-md-start col-12 col-md-7">
							<h2 class="mb-32 mb-md-0">Consejos y guías de expertos sobre la seguridad digital y la privacidad</h2>
						</div>

						<div class="text-center text-md-end col-12 col-md-5">

									

<a  href="https://www.avast.com/es-es/c-academy" tabindex="0" data-cmp-name="button" data-cms-component="button--outline md blue" data-role="cta-link" class="btn outline size-md theme-blue btn-icon-right"><span>Lea más en la Academia Avast</span>
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-arrow-right btn-icon">
</div></a>

						</div>
					</div>
				</div>
			</section>

		
		<section
 data-cmp-name="carousel" data-name="slider-index" class="carousel joint articles">
	<div class="container">
		
		

		<div class="tiny-slider">
			<div class="article-items slider-index">
						
			<a

	 href="https://www.avast.com/es-es/c-computer-virus" data-cmp-name="article" class="article size-sm hoverable-wrap">


	

		<div class="article-img-wrapper"><img class="article-img" src="https://f.hubspotusercontent40.net/hub/4650993/New_Avast_Academy/Computer%20Virus/Academy-Computer-Virus-Thumb.jpg?width=312" alt="" loading="lazy"></div>

	<div class="article-body">
		
		<div class="article-title h6">¿Qué es un virus informático y cómo funciona?</div>
		<div class="article-text body-4">Los virus informáticos se crean para infectar programas y archivos con código malicioso, cambiar el funcionamiento del equipo y propagarse por los sistemas.</div>
	</div>

	
	<div class="article-footer">

			<span  data-cmp-name="button" class="btn link size-sm btn-icon-right"><span>Más información</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-arrow-right btn-icon">
</div></span>
	</div>

	</a>


			<a

	 href="https://www.avast.com/es-es/c-what-is-a-vpn" data-cmp-name="article" class="article size-sm hoverable-wrap">


	

		<div class="article-img-wrapper"><img class="article-img" src="https://4650993.fs1.hubspotusercontent-na1.net/hub/4650993/New_Avast_Academy/what_is_a_vpn_and_how_does_it_work_academy_refresh/What_is_a_VPN_and_how_does_it_work-Your_Essential_Guide-Thumb.png?width=312" alt="" loading="lazy"></div>

	<div class="article-body">
		
		<div class="article-title h6">¿Qué es una VPN y cómo funciona?</div>
		<div class="article-text body-4">Una VPN es una conexión segura y cifrada que protege su privacidad. Conozca qué son las VPN y cómo le protegen.</div>
	</div>

	
	<div class="article-footer">

			<span  data-cmp-name="button" class="btn link size-sm btn-icon-right"><span>Más información</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-arrow-right btn-icon">
</div></span>
	</div>

	</a>


			<a

	 href="https://www.avast.com/es-es/c-how-to-speed-up-internet-connection" data-cmp-name="article" class="article size-sm hoverable-wrap">


	

		<div class="article-img-wrapper"><img class="article-img" src="https://f.hubspotusercontent40.net/hub/4650993/New_Avast_Academy/How%20to%20speed%20up%20your%20internet%20connection/Academy-How-to-Increase-Your-Internet-Speed-Thumb-a1.jpg?width=312" alt="" loading="lazy"></div>

	<div class="article-body">
		
		<div class="article-title h6">Cómo aumentar ya su velocidad en Internet</div>
		<div class="article-text body-4">¿Se pregunta por qué va lenta su conexión a Internet? Aprenda ya a mejorar su conexión a Internet, por Wi-Fi o Ethernet.</div>
	</div>

	
	<div class="article-footer">

			<span  data-cmp-name="button" class="btn link size-sm btn-icon-right"><span>Más información</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-arrow-right btn-icon">
</div></span>
	</div>

	</a>


			<a

	 href="https://www.avast.com/es-es/c-hacker" data-cmp-name="article" class="article size-sm hoverable-wrap">


	

		<div class="article-img-wrapper"><img class="article-img" src="https://f.hubspotusercontent40.net/hub/4650993/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png?width=312" alt="" loading="lazy"></div>

	<div class="article-body">
		
		<div class="article-title h6">¿Qué es el hackeo?</div>
		<div class="article-text body-4">Todos tenemos una cierta idea de lo que es el hackeo, pero ¿sabe de verdad a qué se refiere? Lea aquí nuestra definición completa del hackeo.</div>
	</div>

	
	<div class="article-footer">

			<span  data-cmp-name="button" class="btn link size-sm btn-icon-right"><span>Más información</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-arrow-right btn-icon">
</div></span>
	</div>

	</a>


			<a

	 href="https://www.avast.com/es-es/c-what-is-about-blank-and-is-it-safe" data-cmp-name="article" class="article size-sm hoverable-wrap">


	

		<div class="article-img-wrapper"><img class="article-img" src="https://4650993.fs1.hubspotusercontent-na1.net/hub/4650993/New_Avast_Academy/what_is_aboutblank_in_chrome_academy/Academy-What-Is-The-about-blank-Page-How-to-Use-or-Remove-It-Thumb.jpg?width=312" alt="" loading="lazy"></div>

	<div class="article-body">
		
		<div class="article-title h6">¿Qué es la página about:blank? Cómo utilizarla o eliminarla</div>
		<div class="article-text body-4">¿Alguna vez ha visto la página about:blank? Qué es, por qué aparece, cómo eliminarla y cómo navegar con seguridad.</div>
	</div>

	
	<div class="article-footer">

			<span  data-cmp-name="button" class="btn link size-sm btn-icon-right"><span>Más información</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-arrow-right btn-icon">
</div></span>
	</div>

	</a>


			<a

	 href="https://www.avast.com/es-es/c-vpn-protocols" data-cmp-name="article" class="article size-sm hoverable-wrap">


	

		<div class="article-img-wrapper"><img class="article-img" src="https://4650993.fs1.hubspotusercontent-na1.net/hub/4650993/New_Avast_Academy/vpn_protocols_academy/Academy-VPN-Protocols-Explained-and-Compared--Thumb.jpg?width=312" alt="" loading="lazy"></div>

	<div class="article-body">
		
		<div class="article-title h6">Protocolos VPN: descripción y comparación</div>
		<div class="article-text body-4">Los protocolos VPN ofrecen diferentes niveles de conexión, seguridad y privacidad. Conozca los mejores protocolos VPN.</div>
	</div>

	
	<div class="article-footer">

			<span  data-cmp-name="button" class="btn link size-sm btn-icon-right"><span>Más información</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-arrow-right btn-icon">
</div></span>
	</div>

	</a>


			<a

	 href="https://www.avast.com/es-es/c-hide-apps-iphone" data-cmp-name="article" class="article size-sm hoverable-wrap">


	

		<div class="article-img-wrapper"><img class="article-img" src="https://4650993.fs1.hubspotusercontent-na1.net/hub/4650993/New_Avast_Academy/how_to_hide_apps_on_iphone_academy_rx/Academy-How-to-Hide-Apps-on-an-iPhone-Thumb.jpg?width=312" alt="" loading="lazy"></div>

	<div class="article-body">
		
		<div class="article-title h6">Cómo ocultar aplicaciones en un iPhone</div>
		<div class="article-text body-4">Mantenga la privacidad en línea ocultando aplicaciones en su iPhone. Guía para ocultarlas en un iPhone o un iPad.</div>
	</div>

	
	<div class="article-footer">

			<span  data-cmp-name="button" class="btn link size-sm btn-icon-right"><span>Más información</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-arrow-right btn-icon">
</div></span>
	</div>

	</a>


			<a

	 href="https://www.avast.com/es-es/c-has-my-twitter-been-hacked" data-cmp-name="article" class="article size-sm hoverable-wrap">


	

		<div class="article-img-wrapper"><img class="article-img" src="https://4650993.fs1.hubspotusercontent-na1.net/hub/4650993/New_Avast_Academy/has_my_twitter_account_been_hacked_academy/Academy-Has-My-Twitter-Account-Been-Hacked-Thumb.jpg?width=312" alt="" loading="lazy"></div>

	<div class="article-body">
		
		<div class="article-title h6">¿Han hackeado mi cuenta de Twitter?</div>
		<div class="article-text body-4">¿Han hackeado su cuenta de Twitter? ¿Publica enlaces de spam de repente? Siga nuestra guía para proteger su cuenta.</div>
	</div>

	
	<div class="article-footer">

			<span  data-cmp-name="button" class="btn link size-sm btn-icon-right"><span>Más información</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-arrow-right btn-icon">
</div></span>
	</div>

	</a>


			<a

	 href="https://www.avast.com/es-es/c-evil-twin-attack" data-cmp-name="article" class="article size-sm hoverable-wrap">


	

		<div class="article-img-wrapper"><img class="article-img" src="https://4650993.fs1.hubspotusercontent-na1.net/hub/4650993/New_Avast_Academy/what_is_an_evil_twin_attack_academy_rx/Academy-What-Is-an-Evil-Twin-Attack-Thumb.jpg?width=312" alt="" loading="lazy"></div>

	<div class="article-body">
		
		<div class="article-title h6">¿Qué es un ataque de gemelo malvado y cómo actúa?</div>
		<div class="article-text body-4">Un ataque de gemelo malvado engaña a los usuarios para que se conecten a un wifi falso que imita una red legítima.</div>
	</div>

	
	<div class="article-footer">

			<span  data-cmp-name="button" class="btn link size-sm btn-icon-right"><span>Más información</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-arrow-right btn-icon">
</div></span>
	</div>

	</a>



			</div>
		</div>
		
			<div class="slider-controls slider-index-controls" role="group">
				<button title="Artículo anterior" class="prev button-circle outline size-md theme-dark alt-opacity">
					
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-back">
</div>
				</button>
				<button title="Artículo siguiente" class="next button-circle full size-md theme-blue alt-opacity">
					
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-next">
</div>
				</button>
			</div>
		
	</div>
</section>
	</div>



<section class="bft inverse section-py">
	<div class="container justify-content-around">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">


				<div class="bft-title h2">
					Mantenemos a la gente protegida digitalmente en todo el mundo
				</div>

				<div class="bft-text body-1">Evitamos diariamente más de 66 millones de amenazas usando la inteligencia artificial de más de 435 millones de usuarios de Avast.</div>

				
				<div class="bft-body">
					<div class="bft-buttons">
					
<a data-platform="pc"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=FAV-ONLINE-HP&locale=es-us" data-bi-download-name="FAV-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full lg blue" data-role="download-link" data-download-name="FAV-ONLINE-HP" class="btn full size-lg theme-blue btn-icon-left bi-download-link js-pc">
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-win btn-icon">
</div><span>Descargar protección gratuita</span></a>
					
<a data-platform="mac"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=MAC-FREE-ONLINE-HP&locale=es-us" data-bi-download-name="MAC-FREE-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full lg blue" data-role="download-link" data-download-name="MAC-FREE-ONLINE-HP" class="btn full size-lg theme-blue btn-icon-left bi-download-link js-mac">
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-mac btn-icon">
</div><span>Descargar protección gratuita</span></a>
					
<a data-platform="android"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=AMS&locale=es-us" data-bi-download-name="AMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full lg blue" data-role="download-link" data-download-name="AMS" class="btn full size-lg theme-blue btn-icon-left bi-download-link js-android">
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-android btn-icon">
</div><span>Descargar protección gratuita</span></a>
					
<a data-platform="ios"
data-oops-target="oopsFAV"
 href="/es-us/download-thank-you.php?product=IMS&locale=es-us" data-bi-download-name="IMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full lg blue" data-role="download-link" data-download-name="IMS" class="btn full size-lg theme-blue btn-icon-left bi-download-link js-ios">
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-ios btn-icon">
</div><span>Descargar protección gratuita</span></a>
		</div>
				</div>
			</div>
		</div>
	</div>
</section>





	<div

 id="oopsFAV" tabindex="-1" aria-labelledby="oopsFAV" aria-hidden="true" data-cmp-name="cmp-modal" class="modal modal--small fade modal-oops-wrapper  ">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<button data-bs-dismiss="modal" type="button" aria-label="Cerrar" class="button-circle outline theme-dark shadow-none size-sm btn-close">
				
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-cross">
</div>
			</button>
			
			<div class="modal-body">
				<div class="modal-oops">

		
		<div class="h3 modal-oops-title js-oops-title-pc" style="display: none">Parece que está usando Windows</div>
		<div class="h3 modal-oops-title js-oops-title-mac" style="display: none">Parece que está usando un Mac</div>
		<div class="h3 modal-oops-title js-oops-title-android" style="display: none">Parece que está usando un dispositivo Android</div>
		<div class="h3 modal-oops-title js-oops-title-ios" style="display: none">Parece que está usando iOS</div>
		
		
		<div class="modal-oops-desc text-medium">


				<span class="body-3 js-oops-desc-pc-mac" style="display: none">¿Desea esta aplicación para <strong>Windows</strong> o para <strong>Mac</strong>?</span>
				<span class="body-3 js-oops-desc-pc-android" style="display: none">¿Desea esta aplicación para <strong>Windows</strong> o para <strong>Android</strong>?</span>
				<span class="body-3 js-oops-desc-pc-ios" style="display: none">¿Desea esta aplicación para <strong>Windows</strong> o para <strong>iOS</strong>?</span>
			
				<span class="body-3 js-oops-desc-mac-pc" style="display: none">¿Desea esta aplicación para <strong>Mac</strong> o para <strong>Windows</strong>?</span>
				<span class="body-3 js-oops-desc-mac-android" style="display: none">¿Desea esta aplicación para <strong>Mac</strong> o para <strong>Android</strong>?</span>
				<span class="body-3 js-oops-desc-mac-ios" style="display: none">¿Desea esta aplicación para <strong>Mac</strong> o para <strong>iOS</strong>?</span>
			
				<span class="body-3 js-oops-desc-android-pc" style="display: none">¿Desea esta aplicación para <strong>Android</strong> o para <strong>Windows</strong>?</span>
				<span class="body-3 js-oops-desc-android-mac" style="display: none">¿Desea esta aplicación para <strong>Android</strong> o para <strong>Mac</strong>?</span>
				<span class="body-3 js-oops-desc-android-ios" style="display: none">¿Desea esta aplicación para <strong>Android</strong> o para <strong>iOS</strong>?</span>

				<span class="body-3 js-oops-desc-ios-pc" style="display: none">¿Desea esta aplicación para <strong>iOS</strong> o para <strong>Windows</strong>?</span>
				<span class="body-3 js-oops-desc-ios-android" style="display: none">¿Desea esta aplicación para <strong>iOS</strong> o para <strong>Android</strong>?</span>
				<span class="body-3 js-oops-desc-ios-mac" style="display: none">¿Desea esta aplicación para <strong>iOS</strong> o para <strong>Mac</strong>?</span>
		</div>


		<div class="modal-oops-btn js-oops-primary-pc" style="display: none">
			
				
<a data-cta="compatible_product"
 href="/es-us/download-thank-you.php?product=FAV-ONLINE-HP&locale=es-us" data-bi-download-name="FAV-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="FAV-ONLINE-HP" class="btn full size-md theme-blue btn-icon-left bi-download-link">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-win btn-icon">
</div><span>Windows</span></a>
		</div>
		<div class="modal-oops-btn js-oops-primary-mac" style="display: none">
			
				
<a data-cta="compatible_product"
 href="/es-us/download-thank-you.php?product=MAC-FREE-ONLINE-HP&locale=es-us" data-bi-download-name="MAC-FREE-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="MAC-FREE-ONLINE-HP" class="btn full size-md theme-blue btn-icon-left bi-download-link">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-mac btn-icon">
</div><span>Mac</span></a>
		</div>
		<div class="modal-oops-btn js-oops-primary-android" style="display: none">
			
						
<a data-cta="compatible_product"
data-download-name="AMS"
data-bi-download-name="AMS"
 href="/es-us/download-thank-you.php?product=AMS&locale=es-us" data-bi-download-name="AMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="AMS" class="btn full size-md theme-blue btn-icon-left bi-download-link js-android">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-android btn-icon">
</div><span>Descargar gratis<br>desde Google Play</span></a><a data-cta="compatible_product" href="/es-us/download-thank-you.php?product=AMS&amp;locale=es-us" data-bi-download-name="AMS" data-cmp-name="store-badge" title="Descargar gratis desde Google Play" data-download-name="AMS" data-bi-download-name="AMS" data-role="download-link" class="storebadge-link bi-download-link js-not-android">
<img src='https://static3.avast.com/web/i/v3/components/store-badge/google-play/google-play-es.svg' class='type-google ' alt='Enlace de Google Play' height='56' data-cmp-name='localized-img'></a>
		</div>
		<div class="modal-oops-btn js-oops-primary-ios" style="display: none">
			
						
<a data-download-name="IMS"
data-bi-download-name="IMS"
 href="/es-us/download-thank-you.php?product=IMS&locale=es-us" data-bi-download-name="IMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="IMS" class="btn full size-md theme-blue btn-icon-left bi-download-link js-ios">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-ios btn-icon">
</div><span>Descargar gratis<br>desde la App Store</span></a><a  href="/es-us/download-thank-you.php?product=IMS&amp;locale=es-us" data-bi-download-name="IMS" data-cmp-name="store-badge" title="Descargar gratis desde la App Store" data-download-name="IMS" data-bi-download-name="IMS" data-role="download-link" class="storebadge-link bi-download-link js-not-ios">
<img src='https://static3.avast.com/web/i/v3/components/store-badge/app-store/app-store-badge-es.svg' class='type-apple ' alt='Enlace de Apple Store' height='56' data-cmp-name='localized-img'></a>
		</div>

		<div class="modal-oops-btn-requested js-oops-secondary-pc" style="display: none">
			
				
<a data-cta="original_product"
 href="/es-us/download-thank-you.php?product=FAV-ONLINE-HP&locale=es-us" data-bi-download-name="FAV-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--outline md blue" data-role="download-link" data-download-name="FAV-ONLINE-HP" class="btn outline size-md theme-blue btn-icon-left bi-download-link">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-win btn-icon">
</div><span>Windows</span></a>
		</div>
		<div class="modal-oops-btn-requested js-oops-secondary-mac" style="display: none">
			
				
<a data-cta="original_product"
 href="/es-us/download-thank-you.php?product=MAC-FREE-ONLINE-HP&locale=es-us" data-bi-download-name="MAC-FREE-ONLINE-HP" tabindex="0" data-cmp-name="button" data-cms-component="button--outline md blue" data-role="download-link" data-download-name="MAC-FREE-ONLINE-HP" class="btn outline size-md theme-blue btn-icon-left bi-download-link">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-mac btn-icon">
</div><span>Mac</span></a>
		</div>
		<div class="modal-oops-btn-requested js-oops-secondary-android" style="display: none">
			
						
<a data-cta="original_product"
data-download-name="AMS"
data-bi-download-name="AMS"
 href="/es-us/download-thank-you.php?product=AMS&locale=es-us" data-bi-download-name="AMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="AMS" class="btn full size-md theme-blue btn-icon-left bi-download-link js-android">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-android btn-icon">
</div><span>Descargar gratis<br>desde Google Play</span></a><a data-cta="original_product" href="/es-us/download-thank-you.php?product=AMS&amp;locale=es-us" data-bi-download-name="AMS" data-cmp-name="store-badge" title="Descargar gratis desde Google Play" data-download-name="AMS" data-bi-download-name="AMS" data-role="download-link" class="storebadge-link bi-download-link js-not-android">
<img src='https://static3.avast.com/web/i/v3/components/store-badge/google-play/google-play-es.svg' class='type-google ' alt='Enlace de Google Play' height='56' data-cmp-name='localized-img'></a>
		</div>
		<div class="modal-oops-btn-requested js-oops-secondary-ios" style="display: none">
			
						
<a data-cta="original_product"
data-download-name="IMS"
data-bi-download-name="IMS"
 href="/es-us/download-thank-you.php?product=IMS&locale=es-us" data-bi-download-name="IMS" tabindex="0" data-cmp-name="button" data-cms-component="button--full md blue" data-role="download-link" data-download-name="IMS" class="btn full size-md theme-blue btn-icon-left bi-download-link js-ios">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-ios btn-icon">
</div><span>Descargar gratis<br>desde la App Store</span></a><a data-cta="original_product" href="/es-us/download-thank-you.php?product=IMS&amp;locale=es-us" data-bi-download-name="IMS" data-cmp-name="store-badge" title="Descargar gratis desde la App Store" data-download-name="IMS" data-bi-download-name="IMS" data-role="download-link" class="storebadge-link bi-download-link js-not-ios">
<img src='https://static3.avast.com/web/i/v3/components/store-badge/app-store/app-store-badge-es.svg' class='type-apple ' alt='Enlace de Apple Store' height='56' data-cmp-name='localized-img'></a>
		</div>

		
		<span data-bs-dismiss="modal"
 data-cmp-name="button" class="btn link size-sm js-modal-close"><span>Atrás</span></span>

	</div>
			</div>
		</div>
	</div>
</div>
 
			
				<div id="e-capture-btn">
		<span data-bs-toggle="modal"
data-bs-target="#email-capture"
 data-cmp-name="button" class="btn outline size-md theme-dark e-capture btn-icon-left">
<div data-cmp-name="icon" role="img" class="icon icon-24 icon-email btn-icon">
</div><span>Boletín de noticias</span></span>
	</div>

	<div

 id="email-capture" tabindex="-1" aria-labelledby="email-capture" aria-hidden="true" data-cmp-name="cmp-modal" class="modal modal--medium fade text-center">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<button data-bs-dismiss="modal" type="button" aria-label="Cerrar" class="button-circle outline theme-dark shadow-none size-sm btn-close">
				
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-cross">
</div>
			</button>
			
			<div class="modal-body">
				<div>
			</div>
			</div>
		</div>
	</div>
</div>
 
		</div>

		

<div class="chrome-banner inverse" style="display:none" id="offer-chrome" data-cmp-name="chrome-banner">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-8 col-xl-6 offset-xxl-1 mb-24 mb-lg-0 px-0 px-lg-16">
				<div class="chrombar-info">
					<img src="https://static3.avast.com/10003483/web/i/v3/components/icons/browsers/chrome.svg" alt="Chrome">
					<div class="h4">Avast recomienda usar <br>el navegador <b>GRATUITO</b> Chrome&trade;.</div>
				</div>
			</div>
			<div class="col-12 col-lg-4 col-xl-6 col-xxl-4 px-0 px-lg-16">
				<div class="chrombar-cta">
					
					

<a  href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" tabindex="0" data-cmp-name="button" data-cms-component="button--outline lg dark" data-role="cta-link" class="btn outline size-lg theme-dark js-pc js-mac"><span>Descargar Chrome</span></a>
					<div class="js-android">
						
								<a  href="https://play.google.com/store/apps/details/Google_Chrome_Fast_Secure?id=com.android.chrome" data-cmp-name="store-badge" target="_blank" title="Descargar gratis desde Google Play" rel="noopener noreferrer" data-role="cta-link" class="storebadge-link bi-download-link">
<img src='https://static3.avast.com/web/i/v3/components/store-badge/google-play/google-play-es.svg' class='type-google ' alt='Enlace de Google Play' height='56' data-cmp-name='localized-img'></a>
					</div>
					<div class="js-ios">
						
								<a  href="https://apps.apple.com/us/app/google-chrome/id535886823" data-cmp-name="store-badge" target="_blank" title="Descargar gratis desde la App Store" rel="noopener noreferrer" data-role="cta-link" class="storebadge-link bi-download-link">
<img src='https://static3.avast.com/web/i/v3/components/store-badge/app-store/app-store-badge-es.svg' class='type-apple ' alt='Enlace de Apple Store' height='56' data-cmp-name='localized-img'></a>
					</div>
				</div>
			</div>
			<div class="col-xxl-1 d-none d-xxl-block"></div>
		</div>
	</div>
</div>


		

<div data-cmp-name="footer-links" class="footer-links inverse web">
	<div class="container">
		<div class="row">

			
			<div class="col-12 col-lg-4 select-region">

				
				<img width="116" height="36" class="logo-avast" src="https://static3.avast.com/10003483/web/i/v3/components/avast-logos/avast-logo-inverse.svg" alt="">

				
				<div class="select-region-wrap">
					<a class="select-region-button region es-us with-flag js-language-selector-trigger" aria-label="Estados Unidos (Español) opens dialog" tabindex="0">
						<span>Estados Unidos (Español)</span>
						
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-down-s filter-white">
</div>
					</a>
				</div>

				
				<div class="social-icons"
 data-cmp-name="social-icons">
		<a href="https://www.facebook.com/avast" title="facebook" aria-label="facebook">
			
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-facebook">
</div>
		</a>
		<a href="https://www.instagram.com/avast" title="instagram" aria-label="instagram">
			
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-instagram">
</div>
		</a>
		<a href="https://twitter.com/Avast" title="twitter" aria-label="twitter">
			
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-twitter">
</div>
		</a>
		<a href="https://www.youtube.com/avast" title="youtube" aria-label="youtube">
			
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-youtube">
</div>
		</a>
</div>
			</div>

			
			<div class="col-12 col-lg-2 links sec1">
				<div class="h7 js-footer-links">
					Para el hogar
					
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-down filter-white">
</div>
				</div>
				<ul class="list-unstyled">
					<li><a href="//support.avast.com" target="_blank" rel="noopener noreferrer">Soporte</a></li>
					<li><a href="/es-us/free-antivirus-download">Seguridad</a></li>
						<li><a href="/es-us/secureline-vpn" target="_blank" rel="noopener noreferrer">Privacidad</a></li>
					<li><a href="/es-us/cleanup">Rendimiento</a></li>
						<li><a href="https://blog.avast.com/es/" target="_blank" rel="noopener noreferrer">Blog</a></li>
				</ul>
			</div>

			
			<div class="col-12 col-lg-2 links sec2">
				<div class="h7 js-footer-links">
					Para empresas
					
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-down filter-white">
</div>
				</div>
				<ul class="list-unstyled">
					<li><a href="/es-us/business/support">Soporte empresarial</a></li>
					<li><a href="/es-us/business">Productos para empresa</a></li>
					<li><a href="/es-us/business/partners">Socios empresariales</a></li>
						<li><a href="https://blog.avast.com/es/topic/pyme-empresa">Blog empresarial</a></li>
					<li><a href="/es-us/business/affiliates">Afiliados</a></li>
				</ul>
			</div>

			
			<div class="col-12 col-lg-2 links sec3">
				<div class="h7 js-footer-links">
					Para socios
					
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-down filter-white">
</div>
				</div>
				<ul class="list-unstyled">
					<li><a href="/es-us/mno">Operadores de telefonía móvil</a></li>
				</ul>
			</div>

			
			<div class="col-12 col-lg-2 links sec4">
				<div class="h7 js-footer-links">
					Empresa
					
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-down filter-white">
</div>
				</div>
				<ul class="list-unstyled">
					
						<li><a href="/es-us/contacts">Contáctenos</a></li>
						<li><a href="/es-us/careers">Empleo</a></li>
						<li><a href="//press.avast.com/es-us" target="_blank" rel="noopener noreferrer">Centro de prensa</a></li>
						<li><a href="/es-us/diversity">Diversidad e inclusión</a></li>
						<li><a href="/es-us/digital-trust">Confianza digital</a></li>
						<li><a href="/es-us/technology">Tecnología</a></li>

				</ul>
			</div>
		</div>
	</div>
</div>



<div data-cmp-name="footer" class="footer inverse web">
	<div class="container">
		<div class="row">
			<div class="col-12 footer-wrapper">

				
				
				

				
				<span class="copyright year body-4">
					<span class="copyright-company">
						<img width="38" height="18" class="logo-gen" src="https://static3.avast.com/10003483/web/i/v3/components/gen-logos/gen-logo.svg" alt="">
						&copy; 2024 Gen Digital Inc.
					</span>
					<span class="copyright-rights">Todos los derechos reservados.</span>
				</span>

				
				<div class="middle">

					
					<a href="/es-us/privacy-policy">Política de privacidad</a>
					<a href="/es-us/products-policy">Política de productos</a>

						<a href="/es-us/legal">Información legal</a>
						<a href="/coordinated-vulnerability-disclosure">Informar de una vulnerabilidad</a>
						<a href="/bug-bounty">Contactar con seguridad</a>
						<a href="https://static3.avast.com/10003483/web/o/legal/Avast-Modern-Slavery-Statement-2022.pdf" target="_blank" rel="noopener">Declaración sobre la esclavitud moderna</a>
						<a href="/es-us/subscription-details" target="_blank" rel="noopener">Detalles de la suscripción</a>
						
					
					<button id="ot-sdk-btn" class="ot-sdk-show-settings"></button>
					
				</div>

				

			</div>
		</div>
	</div>
</div>


		
		<section id="downloadPopup" data-behavior="downloadPopup" data-role="popup" data-cmp-name="dtyp-popup" class="js-popup-dtp dtyp dtyp-popup inverse d-none">

	<span  data-cmp-name="button" class="btn link size-sm js-dtp-close dtyp-close btn-icon-right"><span>Cerrar</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-cross btn-icon">
</div></span>

	
	
<div class="container text-center dtyp-default">
	<div class="row align-items-center justify-content-center">
		<div class="col-12 col-lg-8 dtyp-content">

			<div class="dtyp-img-wrap">
				<img class="dtyp-img" src="https://static3.avast.com/10003483/web/i/v3/components/illustrations/dtyp-thumb-sm.svg" width="200" height="146">
			</div>

			<div class="dtyp-headers">
				<div class="h1">¡Ya casi hemos terminado!</div>
				<div class="h4">Complete la instalación haciendo clic en el archivo descargado y siguiendo las instrucciones.</div>
			</div>

			<div class="dtyp-misc">
				<div class="dtyp-progress d-none">
					<div class="spinner"></div>
					<span>Iniciando la descarga...</span>
				</div>
				<div class="dtyp-note dtyp-note-show">
					<span>						<b>Nota:</b> si su descarga no se inicia automáticamente, por favor, <a href="/es-us/download-thank-you.php?product=FAV-ONLINE&locale=es-us" data-bi-download-name="FAV-ONLINE" class="bi-download-link js-downloadPopup-fallback-link filter-orange-bright bi-download-link" data-role="download-link" data-download-name="FAV-ONLINE" data-position="overlay-link">haga clic aquí</a>.
					</span>

					
				</div>
			</div>

		</div>
	</div>
</div>


	


<div class="js-chrome js-avast light">
	<div class="dtyp-arrow-chrome">
		<div class="dtyp-arrow-top">


<div
 data-cmp-name="product-icon" class="product-icon unbox size-48">
	<img
 src="https://static3.avast.com/10003483/web/i/v3/components/icons/product-icons/48/prodico-48_avast-one.svg" alt="" loading="lazy">
</div></div>
		<div class="dtyp-arrow-bottom tagline-md">Haga clic en este archivo para comenzar a instalar Avast.</div>
		<div class="dtyp-arrow-pointer">
<div data-cmp-name="icon" role="img" class="icon icon-32 icon-next">
</div></div>
	</div>
</div>




</section>
		<section id="downloadPopup_avast-one-free" data-behavior="downloadPopup" data-role="popup" data-cmp-name="dtyp-popup" class="js-popup-dtp dtyp dtyp-popup inverse d-none">

	<span  data-cmp-name="button" class="btn link size-sm js-dtp-close dtyp-close btn-icon-right"><span>Cerrar</span>
<div data-cmp-name="icon" role="img" class="icon icon-16 icon-cross btn-icon">
</div></span>

	
	
</section>
		
		
		
		<script>
window.avastGlobals = window.avastGlobals || {};
window.avastGlobals.web = {
	domain: 'www.avast.com',
	pathFromRoot: 'es-us/index',
	fileName: 'index',
	locale: 'es-us',
	ulocale: '/es-us',
	RootPath: '../',
	language: 'es',
	numberDecimalSeparator: '.',
	numberThousandSeparator: '',
	responsive: true,
	contentGroup: 'Consumer',
	pageName: 'es-us | es-us/index'
};
window.avast = window.avast || {};
window.avast.disableSmoothScroll = true;
	
window.avastGlobals.texts = {
	chromeUnsupportedOS: 'Está ejecutando un sistema operativo no compatible. Para descargar la última versión de Secure Browser, actualice su sistema operativo a Windows 10 o posterior.'
};
</script>
		
<script src="https://static3.avast.com/10003483/web/j/v3/components/singleDL-secondary.js"></script>

<script src="https://static3.avast.com/10003483/web/j/v3/vendor/cash.js"></script>
<script src="https://static3.avast.com/10003483/web/j/v3/avast.js"></script>
<script src="https://static3.avast.com/10003483/web/j/v3/vendor/bootstrap-native-v5.js"></script>
<script src="https://resources.digital-cloud.medallia.eu/wdceu/82320/onsite/embed.js" type="text/javascript" async></script>



<script src="https://static3.avast.com/10003483/web/j/v3/components/cmp-sticky-bars.js"></script>

<script src="https://static3.avast.com/10003483/web/j/v3/components/cmp-countdown.js" type="text/javascript"></script>



<script type="text/javascript" src="https://static3.avast.com/10003483/web/j/v3/components/aa-helper.js"></script>
		

		<script type="application/ld+json">
{ "@context" : "http://schema.org",
  "@type" : "Organization",
  "name" : "Avast",
  "alternateName" : "AVAST Software",
  "url" : "https://www.avast.com",
  "logo" : "https://static3.avast.com/web/i/v2/components/logos/avast-logos/seo/logo-avast-224x224px.png?v1",
  "contactPoint" : [{
    "@type" : "ContactPoint",
    "telephone" : "855-745-3255",
    "contactType" : "premium support",
    "contactOption" : "TollFree",
    "areaServed" : "US"
    },{
    "@type" : "ContactPoint",
    "telephone" : "855-745-3255",
    "contactType" : "premium support",
    "contactOption" : "TollFree",
    "areaServed" : "CA"
    }],
  "sameAs" : [
	"https://www.facebook.com/avast",
	"https://twitter.com/avast_antivirus",
	"https://www.youtube.com/avast",
	"https://www.linkedin.com/company/avast-software"
	]
}
</script>

	<script src="https://static3.avast.com/10003483/web/j/v3/vendor/tiny-slider-2.9.4.min.js"></script>
	<script src="https://static3.avast.com/10003483/web/j/v3/components/cmp-academy-carousel.js"></script>

<script src="https://static3.avast.com/10003483/web/j/v3/components/cmp-sticky-bars.js"></script>

<script src="https://static3.avast.com/10003483/web/j/v3/vendor/trustpilot.js"></script>

<script async src="https://static.avast.com/client.js"></script>

<script src="https://static3.avast.com/10003483/web/j/v3/pages/index.js"></script>



		
				<script src="https://static3.avast.com/10003483/web/j/v3/components/forms-fetch.js" type="text/javascript"></script>
 
		
			<div class="ds-backdrop js"></div>
		
	</body>
<!-- cached: 2024-01-16 16:57:35, 214.40815925598, 212.50581741333, 0.7472038269043, 0caf8d36bb01; pricingVersion: 5851 --></html>