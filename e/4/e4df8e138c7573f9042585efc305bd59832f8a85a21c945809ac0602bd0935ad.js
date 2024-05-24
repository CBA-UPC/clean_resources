"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2711],{30435:(e,i,r)=>{r.d(i,{Z:()=>l});var s=r(8071),a=r(32540),t=r(79865),n=r(11527);const l=e=>{let{name:i,uri:r,images:l,isHero:o,testId:d,description:u,index:c,requestId:m,color:x}=e;return(0,n.jsx)(s.C,{index:c,featureIdentifier:"artist_concerts",headerText:i,uri:r,isPlayable:!1,renderCardImage:()=>(0,n.jsx)(a.x,{isHero:o,images:l,color:x}),renderSubHeaderContent:()=>(0,n.jsx)(t.i,{isHero:o,children:(0,n.jsx)("span",{children:u||""})}),testId:d,requestId:m})}},20537:(e,i,r)=>{r.d(i,{T:()=>P});r(86277);var s=r(50959),a=r(69736),t=r(60702),n=r(79126),l=r(87890),o=r(24441),d=r(21933),u=r(76463),c=r(10226),m=r(85255),x=r(85648),g=r(80626),p=r(58912),I=r(17676);const h="iSdDcgYotxUpyRSGLR62",j="EqZ5uEZ02bJiKlZNijVQ",y="UroGtnEGQiwN1yKyNXjC",b="Tv3tod8ggHvNrrRzE1Kg",C="dWaG35yHF_9XzU2FlAce";var f=r(11527);const v=e=>{let{content:i}=e;return(0,f.jsxs)(a.x,{as:"p",semanticColor:"textBrightAccent",className:C,children:[(0,f.jsx)(t.V,{size:"small"}),i]})},k=e=>{let{content:i}=e;return(0,f.jsxs)(a.x,{as:"p",semanticColor:"textBrightAccent",className:C,children:[(0,f.jsx)(n.o,{size:"small"}),i]})},E=e=>{let{content:i}=e;return(0,f.jsx)(a.x,{as:"p",className:C,children:i})},S=e=>{switch(e.type){case"SPOTIFY_EXCLUSIVE":return(0,f.jsx)(v,{...e});case"TOP_FANS_EXCLUSIVE":case"TOP_FANS_DISCOUNT":case"LIMITED_EDITION":return(0,f.jsx)(k,{...e});default:return(0,f.jsx)(E,{...e})}},H=e=>{let{price:i,salePrice:r}=e;return r?(0,f.jsxs)("div",{children:[(0,f.jsxs)(a.x,{variant:"bodySmall",semanticColor:"textBrightAccent",children:[r," "]}),(0,f.jsx)(a.x,{variant:"bodySmall",style:{textDecoration:"line-through"},children:i})]}):(0,f.jsx)(a.x,{variant:"bodySmall",children:i})},P=e=>{let{name:i,uri:r,href:a,images:t,index:n,price:C,testId:v,salePrice:k,label:E,artists:P}=e;const T=(0,c.W6)(I.WDb),q=(0,s.useMemo)((()=>P.items.map((e=>"profile"in e.data?e.data.profile.name:"")).join(x.ag.getSeparator())),[P.items]),{spec:O,logger:L}=(0,g.fU)(m.I,{data:{position:n,uri:r,reason:(null==E?void 0:E.type)||""}}),N=(0,p.X)(t,{desiredSize:300}),_=(0,s.useCallback)((()=>{L.logInteraction(O.cardLinkFactory({position:0}).hitNavigateToExternalUri({destination:a})),window.open(a,"_blank")}),[a,L,O]);return(0,f.jsx)(l.Z,{id:r,"data-testid":v,title:(0,f.jsx)(o.l,{className:b,children:i}),pretitle:E&&(0,f.jsx)(S,{type:E.type,content:E.content}),media:(0,f.jsx)("div",{className:h,children:N?(0,f.jsx)(d.x,{size:"sm",src:null==N?void 0:N.url,alt:i}):(0,f.jsx)("div",{className:j,children:(0,f.jsx)("div",{className:y,children:(0,f.jsx)(u.C,{size:"xxlarge","aria-hidden":!0,"data-testid":"card-image-fallback"})})})}),onClick:_,size:T?"md":"sm",subtitle:(0,f.jsx)(H,{price:C,salePrice:k}),body:q},r)}},93312:(e,i,r)=>{r.d(i,{h:()=>Y});var s=r(10226),a=r(72543),t=r(25959),n=r(33563),l=(r(80378),r(11317)),o=r(85648),d=r(8071),u=r(32540),c=r(79865),m=r(31948),x=r(33874),g=r(11527);const p=e=>{let{name:i,uri:r,images:s,isHero:a,onClick:t,testId:n,description:l,index:p,requestId:I,color:h}=e;return a?(0,g.jsx)(m.Z,{featureIdentifier:"genre",index:p,onClick:t,headerText:i,uri:r,isPlayable:!1,renderCardImage:()=>(0,g.jsx)(u.x,{isHero:a,images:s,color:h}),renderSubHeaderContent:()=>(0,g.jsx)(c.i,{isHero:!0,children:(0,g.jsx)(x.k,{children:l||o.ag.get("card.tag.genre")})}),testId:n,requestId:I}):(0,g.jsx)(d.C,{index:p,featureIdentifier:"genre",onClick:t,headerText:i,uri:r,isPlayable:!1,renderCardImage:()=>(0,g.jsx)(u.x,{isHero:a,images:s,color:h}),renderSubHeaderContent:()=>(0,g.jsx)(c.i,{children:(0,g.jsx)("span",{children:l||""})}),testId:n,requestId:I})},I=e=>{let{name:i="",uri:r="",images:s=[],isHero:a,onClick:t,testId:n,index:l}=e;return a?(0,g.jsx)(m.Z,{featureIdentifier:"unknown",index:l,onClick:t,headerText:i,uri:r,isPlayable:!1,renderCardImage:()=>(0,g.jsx)(u.x,{isHero:a,images:s}),renderSubHeaderContent:()=>(0,g.jsx)(c.i,{isHero:!0,children:(0,g.jsx)(x.k,{})}),testId:n}):(0,g.jsx)(d.C,{index:l,featureIdentifier:"unknown",onClick:t,headerText:i,uri:r,isPlayable:!1,renderCardImage:()=>(0,g.jsx)(u.x,{isHero:a,images:s}),renderSubHeaderContent:()=>(0,g.jsx)(c.i,{children:(0,g.jsx)("span",{})}),testId:n})};var h=r(936),j=r(10590),y=r(30435),b=r(20109),C=r(20537),f=r(87964),v=r(15103),k=r(88195),E=r(48672),S=r(25750);const H=e=>{let{entity:i,index:r,testId:s,isHero:n=!1}=e;const o=((0,l.EC)(i.uri)||{}).type,d={testId:s,isHero:n,index:r,sharingInfo:i.sharingInfo};if(("string"==typeof i.uri||i.uri instanceof String)&&i.uri.startsWith("spotify:merch:")){const e=i.description?i.description.split("•")[0]:"";return(0,g.jsx)(C.T,{...d,name:i.name,uri:i.uri,href:i.href,images:i.images,price:e,artists:i.artists||{items:[]},label:null,salePrice:null})}if(("string"==typeof i.uri||i.uri instanceof String)&&i.uri.startsWith("spotify:artist:")&&i.uri.endsWith(":concerts"))return(0,g.jsx)(y.Z,{...d,name:i.name,uri:i.uri,images:i.images,description:i.description});switch(o){case l.JM.ALBUM:case l.JM.COLLECTION_ALBUM:{const e=i;return(0,g.jsx)(a.r,{...d,name:e.name,uri:e.uri,images:e.images,artists:e.artists})}case l.JM.ARTIST:{const e=i;return(0,g.jsx)(t.I,{...d,name:e.name,uri:e.uri,images:e.images})}case l.JM.EPISODE:{var u,c;const e=i;return(0,g.jsx)(b.B,{...d,name:e.name,uri:e.uri,images:e.images,showImages:(null===(u=e.show)||void 0===u?void 0:u.images)||[],durationMilliseconds:e.duration_ms,releaseDate:e.release_date,resume_point:e.resume_point,description:e.description,isExplicit:e.explicit,is19PlusOnly:!(null===(c=e.tags)||void 0===c||!c.includes("MOGEF-19+"))})}case l.JM.PLAYLIST:case l.JM.PLAYLIST_V2:{var m,x;const e=i,r=(null===(m=e.owner)||void 0===m?void 0:m.display_name)||(null===(x=i.owner)||void 0===x?void 0:x.displayName)||"";return(0,g.jsx)(f.Z,{...d,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:r})}case l.JM.PROFILE:return(0,g.jsx)(v.P,{...d,name:i.name,uri:i.uri,images:i.images});case l.JM.SHOW:{const e=i;return(0,g.jsx)(k._,{...d,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,mediaType:{audio:j.E.AUDIO,video:j.E.VIDEO,mixed:j.E.MIXED}[e.media_type]??j.E.AUDIO})}case l.JM.APPLICATION:return(0,g.jsx)(p,{...d,name:i.name,uri:i.uri,images:i.images,description:i.description});case l.JM.TRACK:{var H,P;const e=i;return(0,g.jsx)(E.G,{...d,name:e.name,uri:e.uri,images:(null===(H=e.album)||void 0===H?void 0:H.images)||[],artists:e.artists,album:e.album,isExplicit:e.explicit,is19PlusOnly:null===(P=e.tags)||void 0===P?void 0:P.includes("MOGEF-19+")})}case l.JM.COLLECTION:return i.uri.endsWith("your-episodes")?(0,g.jsx)(S.T,{index:r}):(0,g.jsx)(h.p,{index:r});default:return(0,g.jsx)(I,{...d,name:i.name,uri:i.uri,images:i.images})}};r(86277);var P=r(50959),T=r(69736),q=r(72518),O=r(82579),L=r(6807),N=r(45438),_=r(94452),A=r(2017),w=r(24683);const M=P.memo((function(e){let{uri:i,sharingInfo:r}=e;const{spec:s}=(0,_.T)(i);return(0,g.jsx)(N.JL,{value:"album",children:(0,g.jsxs)(L.v,{children:[(0,g.jsx)(A.q,{divider:"before",children:(0,g.jsx)(w.Jx,{uri:i,spec:s,sharingInfo:r,displayText:o.ag.get("context-menu.copy-album-link")})}),(0,g.jsx)(w.h$,{spec:s,divider:"before",uri:i})]})})}));var U=r(67937),D=r(43104),J=r(32793),z=r(27838),F=r(60046);const R=e=>{let{artist:i,index:r,logger:s,spec:a}=e;const t=(0,P.useCallback)((()=>{s.logInteraction(a.cardLinkFactory({position:r}).hitUiNavigate({destination:i.uri}))}),[s,a,r,i.uri]);return(0,U.i)(i)&&i.uri?(0,g.jsx)(O._,{menu:(0,g.jsx)(z.m,{uri:i.uri}),children:(0,g.jsx)(F.default,{to:i.uri,dir:"auto",onClick:t,children:i.name})},i.uri):(0,g.jsx)(T.x,{variant:"bodySmall",children:i.name})},Z=e=>{var i;let r,{name:s,uri:a,images:t,artists:n=[],sharingInfo:l,isHero:p=!1,onClick:I,testId:h,index:j,requestId:y,color:b,release:C,releaseTimezone:f}=e;const v=(0,J.Y)(a),k=()=>n.map((e=>e.name)).join(o.ag.getSeparator()),E=e=>{let{logger:i,spec:r}=e;return(0,g.jsx)("span",{children:n.map(((e,s)=>[s>0&&o.ag.getSeparator(),(0,g.jsx)(R,{artist:e,index:s,logger:i,spec:r},e.uri)]))})},S=()=>(0,g.jsx)(T.x,{variant:"bodySmall",semanticColor:"textSubdued",children:(0,g.jsx)("span",{children:o.ag.get("web-player.album-prerelease.releases_on",{date:o.ag.formatDate((0,D.RX)(C.date),(0,D.Hd)({month:"long",day:"numeric",year:"numeric",timeZone:f},C.precision))})})});return r=p?(0,g.jsx)(m.Z,{isPlayable:!1,index:j,onClick:I,headerText:s,featureIdentifier:"album",uri:a,playUri:v,ariaPauseLabel:o.ag.get("tracklist.a11y.pause",s,k()),ariaPlayLabel:o.ag.get("tracklist.a11y.play",s,k()),renderCardImage:()=>(0,g.jsx)(u.x,{isHero:!0,images:t,color:b,FallbackComponent:e=>(0,g.jsx)(q.c,{size:"xxlarge",...e})}),renderSubHeaderContent:(e,i)=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x.k,{children:o.ag.get("card.tag.album")}),(0,g.jsx)(E,{logger:e,spec:i})]}),getSignifierContent:()=>(0,g.jsx)(S,{}),testId:h,requestId:y}):(0,g.jsx)(d.C,{isPlayable:!1,onClick:I,headerText:s,featureIdentifier:"album",uri:a,playUri:v,ariaPauseLabel:o.ag.get("tracklist.a11y.pause",s,k()),index:j,ariaPlayLabel:o.ag.get("tracklist.a11y.play",s,k()),renderCardImage:()=>(0,g.jsx)(u.x,{isHero:p,images:t,color:b,FallbackComponent:e=>(0,g.jsx)(q.c,{size:"xxlarge",...e})}),renderSubHeaderContent:(e,i)=>(0,g.jsxs)(c.i,{children:[(0,g.jsx)(S,{}),n.length>0&&(0,g.jsx)("span",{children:" • "}),(0,g.jsx)(E,{logger:e,spec:i})]}),testId:h,requestId:y}),(0,g.jsx)(O._,{menu:(0,g.jsx)(M,{uri:a,artistUri:null==n||null===(i=n[0])||void 0===i?void 0:i.uri,sharingInfo:l}),children:r})};var B=r(17676),G=r(54644),V=r(82857),W=r(58301),X=r(86461);const Y=e=>{var i,r,l;let{entity:o,index:d,testId:u,onClick:c,isHero:m=!1}=e;const x=(0,W.E)(),I=(0,X.s)(),h=(0,s.W6)(B.Kpm),j=x||I;switch(o.type){case V.p.ALBUM:return(0,g.jsx)(a.r,{testId:u,onClick:c,isHero:m,index:d,name:o.name,uri:o.uri,images:o.images,artists:o.artists,year:o.year,sharingInfo:null,requestId:o.requestId,color:o.color},o.uri);case V.p.ARTIST:return(0,g.jsx)(t.I,{testId:u,onClick:c,isHero:m,index:d,name:o.name,uri:o.uri,images:o.images,requestId:o.requestId,color:o.color},o.uri);case V.p.AUDIOBOOK:return(0,g.jsx)(n.c,{testId:u,onClick:c,isHero:m,index:d,name:o.name,uri:o.uri,images:o.images,authorName:o.authorName,requestId:o.requestId,color:o.color,signifierText:o.signifierText},o.uri);case V.p.EPISODE:return(0,g.jsx)(b.B,{testId:u,onClick:c,isHero:m,index:d,name:o.name,uri:o.uri,images:o.images,showImages:(null===(i=o.show)||void 0===i?void 0:i.images)||[],durationMilliseconds:o.duration.milliseconds,releaseDate:o.release.date,resume_point:null,description:o.description,isExplicit:o.isExplicit,is19PlusOnly:o.is19PlusOnly,sharingInfo:null,requestId:o.requestId,color:o.color,episodeShow:o.show},o.uri);case V.p.GENRE:return(0,g.jsx)(p,{testId:u,onClick:c,isHero:m,index:d,name:o.name,uri:o.uri,images:o.images,requestId:o.requestId,color:o.color},o.uri);case V.p.PLAYLIST:return(0,g.jsx)(f.Z,{testId:u,onClick:c,isHero:m,index:d,name:o.name,uri:o.uri,images:o.images,description:"",authorName:o.owner.displayName,authorUri:o.owner.uri,requestId:o.requestId,color:o.color,isPlayable:!(0,G.T)(null===(r=o.formatListData)||void 0===r?void 0:r.attributes)},o.uri);case V.p.USER:return(0,g.jsx)(v.P,{testId:u,onClick:c,isHero:m,index:d,name:o.name,uri:o.uri,images:o.images,requestId:o.requestId,color:o.color},o.uri);case V.p.SHOW:return(0,g.jsx)(k._,{testId:u,onClick:c,isHero:m,index:d,name:o.name,uri:o.uri,images:o.images,publisher:o.publisher,sharingInfo:null,requestId:o.requestId,color:o.color},o.uri);case V.p.TRACK:return(0,g.jsx)(E.G,{testId:u,onClick:c,isHero:m,index:d,name:o.name,uri:o.uri,images:(null===(l=o.album)||void 0===l?void 0:l.images)||[],artists:o.artists,album:j?null:o.album,isExplicit:o.isExplicit,is19PlusOnly:o.is19PlusOnly,sharingInfo:null,requestId:o.requestId,isLyricsMatch:o.isLyricsMatch,color:o.color,hasAssociatedVideo:o.hasAssociatedVideo&&h},o.uri);case V.p.PRE_RELEASE:return(0,g.jsx)(Z,{testId:u,onClick:c,isHero:m,index:d,name:o.name,uri:o.uri,images:o.images,artists:o.artists,sharingInfo:null,requestId:o.requestId,color:o.color,release:o.release,releaseTimezone:o.releaseTimezone},o.uri);default:return(0,g.jsx)(H,{testId:u,onClick:c,isHero:m,index:d,entity:o})}}},76578:(e,i,r)=>{r.d(i,{q:()=>u});var s=r(7863),a=r(85648),t=r(93312);const n="ADri2r8kq8LVqSsNNvIr",l="fOEOTcOAgPryvbYRYfOo",o="xmJl0s8mcJ3bfhtnoaP1";var d=r(11527);const u=e=>{let{entity:i,index:r,clearSearchHistory:u}=e;return(0,d.jsxs)("div",{className:n,children:[(0,d.jsx)(t.h,{entity:{...i,requestId:void 0},index:r}),(0,d.jsx)("div",{className:l,children:(0,d.jsx)("button",{className:o,onClick:()=>u(i.uri),"aria-label":a.ag.get("remove"),children:(0,d.jsx)(s.k,{size:"small"})})})]},i.uri)}},37286:(e,i,r)=>{r.d(i,{Z:()=>s});const s={searchPageGrid:"khkfPsJuVBQyL_5cLT7y",narrowPage:"xol36rXFgZ_biOcw6Czk"}}}]);
//# sourceMappingURL=2711.99fbc874.js.map07563714206/css/ui/flexiblegrid.css" />
<link rel="dns-prefetch" href="//widget.fitanalytics.com" />
<meta property="og:image" content="https://www.aritzia.com/on/demandware.static/-/Sites-aritzia-ca-catalog/en_CA/v1707563714206/https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24231_merch" />
<link rel="dns-prefetch" href="//cdn.dynamicyield.com" />
<link rel="dns-prefetch" href="//st.dynamicyield.com" />
<link rel="dns-prefetch" href="//rcom.dynamicyield.com" />
<script>
// <![CDATA[
window.DY = window.DY || {};
DY.recommendationContext = {
type: "CATEGORY",
lng: "en_CA"
};
if(DY.recommendationContext.type != "OTHER" && DY.recommendationContext.type != "HOMEPAGE") {
var data = "Shop By,Body Shaping,Contour";
DY.recommendationContext.data = data.split(',');
}
// ]]>
</script>
<script src="//cdn.dynamicyield.com/api/8780652/api_dynamic.js" id="DY_api_dynamic"></script>
<script src="//cdn.dynamicyield.com/api/8780652/api_static.js" id="DY_api_static"></script>
</head>
<body>
<div id="wrapper" class="pt_product-search-result fullwidth container_30 js-wrapper ar-wrapper " data-headerbg-fluid="false">
<a class="ar-skip-content pa3 db bg-light-yellow ba absolute z-9999 underline f1" data-ec="navigation" data-ea="nav-banner" data-el="skip to main context" tabindex="0" href="#main" aria-label="Skip to main content">
Skip to main content
</a>
<a class="ar-accessibility-statement pa3 db bg-light-yellow ba absolute z-9999 underline f1" data-ec="navigation" data-ea="nav-banner" data-el="accessibility-statement" tabindex="0" href="/en/aritzia/about-aritzia/accessibility.html" aria-label="Click to View our Accessibility Statement">
Click to View our Accessibility Statement
</a>
<div role="complementary" id="ar-promotional-banner" class="ar-promotional-banner js-promotional-message tc ttn relative overflow-hidden">
<div class="ar-promotional-banner__btn-details js-promotional-banner__btn-details ph-3 w-100 border-box fs-aa lh-title hover" style="background: #000; color: #fff;">
<div class="ar-promotional-banner__messsage-container js-promotional-banner__messsage-container" data-cta style="background: #000; color: #fff;">
<div class="js-promotional-banner__messsage ph4"><a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing" onclick="gaa.sendEvent('promo-banner-click', {'promo-copy': '24-sp-homepage-promobanner-contour-launch'})">New
Contour styles just launched. <span class="ar-link">Shop Now</span></a></div>
<div class="js-promotional-banner__messsage ph4 o-0"><a href="https://www.aritzia.com/en/stories/lunar-new-year-24" onclick="gaa.sendEvent('promo-banner-click', {'promo-copy': '24-sp-homepage-promobanner-lny'})">Celebrate Lunar
New Year with our limited-edition collection. <span class="ar-link">Shop
Now</span></a>
</div>
</div>
</div>
<div class="ar-promotional-banner__btn-close js-promo-banner-close absolute top-0 right-0 h-100 hover pr3" style="background: #000;cursor: pointer;">
<button class="button-clean db pa2 relative" aria-label="Close Promotions Banner" style="top: 50%; transform: translateY(-50%);">
<div class="ar-svg js-svg" data-default-color="#fff">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</div>
</button>
</div>
</div>
<style>
		.ar-promotional-banner__btn-close svg {
			width: 12px;
			height: 12px;
		}
		.ar-promotional-banner__btn-close svg path {
			fill: #fff;
		}
		.js-promotional-banner__messsage:not(.active), .js-promotional-banner__messsage:not(.active) a {
			z-index: 9;
		}
		.js-promotional-banner__messsage.active, .js-promotional-banner__messsage.active a {
			z-index: 999;
		}
	</style>
<script>
		jQuery(document).ready(function() {
			
			
			var callToAction = $('.js-promotional-banner__messsage-container').data('cta');
			$('.js-promotional-banner__messsage').first().addClass('active');
			
			function addCallToAction(msg) {
				if (msg.length > 0) {
					$('.js-promotional-banner__messsage').append(' <span class="underline">' + msg + '</span>') 
				}
			}
			
			function updatePromoBannerHeight() {
				var elementHeights = $('.js-promotional-banner__messsage').map(function() {
					return $(this).height();
				}).get();
	
				var maxHeight = Math.max.apply(null, elementHeights);
	
				$('.js-promotional-banner__btn-details').height(maxHeight + 16);
			}
			
			function doPromoBannerAnimation() {
				
				var animationTimeout;
				var $firstMsg = jQuery('.js-promotional-banner__messsage').first();
				var $currentMsg = $firstMsg;
				var timeoutDuration = $currentMsg.text().trim().length > 30 ? 7000 : 5000;
				
				var bannerAnimation = function() {
					
			    	$currentMsg.fadeTo( 0, 0 );
			    	$currentMsg.toggleClass('active');
	
			    	if($currentMsg.is(':last-child')) {
			    		$currentMsg = $firstMsg;
			    	} else {
			    		$currentMsg = $currentMsg.next();
			    	}
			    	
			    	$currentMsg.fadeTo( "fast", 1 );
			    	$currentMsg.toggleClass('active');
			    	
			    	//Reset the timeout
					timeoutDuration = $currentMsg.text().trim().length > 30 ? 5000 : 3000;
					animationTimeout = setTimeout(bannerAnimation, timeoutDuration);
				    
				}
				animationTimeout = setTimeout(bannerAnimation, timeoutDuration);
				
				//Restart
				jQuery('.js-promotional-banner__btn-details').mouseout( function () {
					animationTimeout = setTimeout(bannerAnimation, timeoutDuration);
				});
				
				//Pause
				jQuery('.js-promotional-banner__btn-details').mouseover( function () {
				  clearTimeout(animationTimeout);
				});
			}
			
			addCallToAction(callToAction);
			updatePromoBannerHeight();
			doPromoBannerAnimation();
			
			$( window ).resize(function() {
				updatePromoBannerHeight();
			});

		});
	</script>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV39WP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<div class="ar-header__banner bg-white relative z-999 cf" data-transparent="false">
<header role="banner" class="ar-header__container grid_28 push_1 pull_1 omega">

<div class="ar-header js-header--mobile dn-ns w-100  bg-white absolute top-0 left-0">
<div class="flex items-center h-100 pl3">
<a href="https://www.aritzia.com/en/home" data-link-type="nav-global" class="h-100 flex flex-column justify-center" aria-label="Return to Homepage">
<div class="ar-svg js-svg" data-default-color="black" data-event-color="white">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 39.493" enable-background="new 0 0 200 39.493" xml:space="preserve" class="ar-header__logo" fill="black">
<g>
<path d="M25.292,29.386H8.759l-4.25,10.106H0v-0.104c0.363-0.467,1.503-2.021,2.902-5.286L15.133,5.649l-0.57-1.347
			c-0.881-2.177-1.659-3.473-2.436-4.198V0h6.841l14.667,34.155c1.399,3.213,2.333,4.768,2.747,5.234v0.104h-6.789L25.292,29.386z
			M23.996,26.38l-7.049-16.43l-6.893,16.43H23.996z" />
<path d="M55.195,19.28c3.11-1.192,5.287-4.095,5.287-8.707c0-5.494-3.991-8.033-8.707-8.033h-4.924v36.953h-7.152v-0.104
			c0.363-0.674,1.192-2.125,1.192-5.441V5.545c0-3.317-0.829-4.768-1.192-5.442V0h14.512c5.649,0,12.49,2.695,12.49,10.158
			c0,6.945-5.234,9.951-10.521,10.521l10.158,14.253c1.659,2.332,3.524,3.938,4.198,4.457v0.104H62.71L48.665,19.54l5.131-2.229
			L55.195,19.28z" />
<path d="M82.715,39.389v0.104h-8.344v-0.104c0.363-0.674,1.192-2.125,1.192-5.441V5.545c0-3.317-0.829-4.768-1.192-5.442V0h8.344
			v0.104c-0.362,0.674-1.192,2.125-1.192,5.442v28.402C81.523,37.264,82.353,38.715,82.715,39.389z" />
<path d="M106.504,39.389v0.104h-8.345v-0.104c0.363-0.674,1.192-2.125,1.192-5.441V2.54c-4.976,0.622-10.21,2.28-11.92,3.369
			L88.208,0h28.247l0.776,5.908c-1.658-1.088-6.893-2.747-11.92-3.369v31.408C105.312,37.264,106.141,38.715,106.504,39.389z" />
<path d="M146.515,39.493h-28.609v-0.104l20.887-36.694c-7.411,0.363-12.594,1.088-17.311,3.213L122.259,0h24.67v0.104
			L126.042,36.85c8.5-0.26,15.911-0.83,21.25-3.266L146.515,39.493z" />
<path d="M160.352,39.389v0.104h-8.344v-0.104c0.362-0.674,1.191-2.125,1.191-5.441V5.545c0-3.317-0.829-4.768-1.191-5.442V0h8.344
			v0.104c-0.362,0.674-1.191,2.125-1.191,5.442v28.402C159.16,37.264,159.989,38.715,160.352,39.389z" />
<path d="M188.909,29.386h-16.534l-4.249,10.106h-4.51v-0.104c0.363-0.467,1.504-2.021,2.902-5.286L178.75,5.649l-0.569-1.347
			c-0.882-2.177-1.659-3.473-2.437-4.198V0h6.842l14.667,34.155c1.399,3.213,2.332,4.768,2.747,5.234v0.104h-6.79L188.909,29.386z
			M187.613,26.38l-7.049-16.43l-6.894,16.43H187.613z" />
</g>
</svg>
</div>
</a>
<a class="ar-exposed-search js-mobile-search ml3 flex items-start justify-center flex-column" data-ec="navigation" data-ea="nav-global-search" data-el="expand">
<span class="ar-exposed-search__label ttu fn1">
Search
</span>
</a>
<div class="flex flex-auto items-end justify-end h-100">
<a href="#menu" class="ar-mobile-search js-mobile-search db pa2 flex items-center border-box h-100" data-ec="navigation" data-ea="nav-global-search" data-el="expand" aria-label="Search">
<div class="ar-svg js-svg" data-default-color="black" data-event-color="white">
<svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="black">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.36316 8.5C2.36316 5.11726 5.10542 2.375 8.48816 2.375C11.8709 2.375 14.6132 5.11726 14.6132 8.5C14.6132 11.8827 11.8709 14.625 8.48816 14.625C5.10542 14.625 2.36316 11.8827 2.36316 8.5ZM8.48816 0.625C4.13892 0.625 0.613159 4.15076 0.613159 8.5C0.613159 12.8492 4.13892 16.375 8.48816 16.375C10.3475 16.375 12.0564 15.7306 13.4036 14.6529L19.3694 20.6187L20.6068 19.3813L14.641 13.4155C15.7187 12.0683 16.3632 10.3594 16.3632 8.5C16.3632 4.15076 12.8374 0.625 8.48816 0.625Z" />
</svg>
</div>
</a>


<a href="https://www.aritzia.com/en/cart" class="ar-header__bag js-header__bag js-view-cart ar-header__panel-trigger db pa2 mh3 relative flex items-center border-box h-100" data-panel-id="bag" data-location="bag-icon" data-link-type="nav-global" data-minicart-disabled="true" aria-label="cart">
<div class="ar-svg js-svg" data-default-color="black" data-event-color="white">
<svg xmlns="http://www.w3.org/2000/svg" class="ar-cart__icon" width="22" height="20" viewBox="0 0 21.6 19.6" fill="black">
<path d="M18.6,7V3.2c0-1.8-1.4-3.2-3.2-3.2H6.2C4.4,0,3,1.4,3,3.2V7H0v12.6h21.6V7H18.6z M4.6,3.2c0-0.9,0.7-1.6,1.6-1.6 h9.2c0.9,0,1.6,0.7,1.6,1.6V7H4.6V3.2z" class="ar-cart__icon-fill" fill="none" />
<path d="M18.6,7V3.2c0-1.8-1.4-3.2-3.2-3.2H6.2C4.4,0,3,1.4,3,3.2V7H0v12.6h21.6V7H18.6z M4.6,3.2c0-0.9,0.7-1.6,1.6-1.6 h9.2c0.9,0,1.6,0.7,1.6,1.6V7H4.6V3.2z M20,18H1.6V8.6H20V18z" class="ar-cart__icon-outline" />
</svg>
</div>
</a>
<a href="#menu" class="ar-mobile-menu js-menu-trigger db pa2 mr2 flex items-center border-box h-100" data-ec="navigation" data-ea="nav-primary-hamburger" data-el="expand" aria-label="Mobile Menu">
<div class="ar-svg js-svg" data-default-color="black" data-event-color="white">
<svg width="21" height="16" viewBox="0 0 21 16" xmlns="http://www.w3.org/2000/svg" fill="black">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3732 0.125H0.373169V1.875H20.3732V0.125ZM20.3732 7.125H0.373169V8.875H20.3732V7.125ZM0.373169 14.125H20.3732V15.875H0.373169V14.125Z" />
</svg>
</div>
</a>
</div>
</div>
</div>

<div class="ar-header js-header ar-header--desktop js-header--desktop flex-column dn flex-ns">
<div class="ar-header__bar--desktop flex justify-between items-start flex-wrap">
<a href="https://www.aritzia.com/en/home" class="dn db-ns relative z-3" data-link-type="nav-global" aria-label="Return to Homepage">
<div class="ar-svg js-svg" data-default-color="black" data-event-color="white">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 39.493" enable-background="new 0 0 200 39.493" xml:space="preserve" class="ar-header__logo" fill="black">
<g>
<path d="M25.292,29.386H8.759l-4.25,10.106H0v-0.104c0.363-0.467,1.503-2.021,2.902-5.286L15.133,5.649l-0.57-1.347
			c-0.881-2.177-1.659-3.473-2.436-4.198V0h6.841l14.667,34.155c1.399,3.213,2.333,4.768,2.747,5.234v0.104h-6.789L25.292,29.386z
			M23.996,26.38l-7.049-16.43l-6.893,16.43H23.996z" />
<path d="M55.195,19.28c3.11-1.192,5.287-4.095,5.287-8.707c0-5.494-3.991-8.033-8.707-8.033h-4.924v36.953h-7.152v-0.104
			c0.363-0.674,1.192-2.125,1.192-5.441V5.545c0-3.317-0.829-4.768-1.192-5.442V0h14.512c5.649,0,12.49,2.695,12.49,10.158
			c0,6.945-5.234,9.951-10.521,10.521l10.158,14.253c1.659,2.332,3.524,3.938,4.198,4.457v0.104H62.71L48.665,19.54l5.131-2.229
			L55.195,19.28z" />
<path d="M82.715,39.389v0.104h-8.344v-0.104c0.363-0.674,1.192-2.125,1.192-5.441V5.545c0-3.317-0.829-4.768-1.192-5.442V0h8.344
			v0.104c-0.362,0.674-1.192,2.125-1.192,5.442v28.402C81.523,37.264,82.353,38.715,82.715,39.389z" />
<path d="M106.504,39.389v0.104h-8.345v-0.104c0.363-0.674,1.192-2.125,1.192-5.441V2.54c-4.976,0.622-10.21,2.28-11.92,3.369
			L88.208,0h28.247l0.776,5.908c-1.658-1.088-6.893-2.747-11.92-3.369v31.408C105.312,37.264,106.141,38.715,106.504,39.389z" />
<path d="M146.515,39.493h-28.609v-0.104l20.887-36.694c-7.411,0.363-12.594,1.088-17.311,3.213L122.259,0h24.67v0.104
			L126.042,36.85c8.5-0.26,15.911-0.83,21.25-3.266L146.515,39.493z" />
<path d="M160.352,39.389v0.104h-8.344v-0.104c0.362-0.674,1.191-2.125,1.191-5.441V5.545c0-3.317-0.829-4.768-1.191-5.442V0h8.344
			v0.104c-0.362,0.674-1.191,2.125-1.191,5.442v28.402C159.16,37.264,159.989,38.715,160.352,39.389z" />
<path d="M188.909,29.386h-16.534l-4.249,10.106h-4.51v-0.104c0.363-0.467,1.504-2.021,2.902-5.286L178.75,5.649l-0.569-1.347
			c-0.882-2.177-1.659-3.473-2.437-4.198V0h6.842l14.667,34.155c1.399,3.213,2.332,4.768,2.747,5.234v0.104h-6.79L188.909,29.386z
			M187.613,26.38l-7.049-16.43l-6.894,16.43H187.613z" />
</g>
</svg>
</div>
</a>
<div class="ar-header__utility border-box flex z-2">
<form role="search" action="/en/search" method="get" name="simpleSearch" class="ar-header__search-form ar-header__panel-trigger flex items-center relative z-2" data-panel-id="search" data-eins-suggestion="true">
<input type="text" class="ar-header__search-input js-header__search-input absolute right-0 f0" name="q" id="q" value placeholder="Search" aria-label="Search" />
<button href="#menu" class="ar-header__search-button db pa2 flex items-center border-box h-100" data-ec="navigation" data-ea="nav-global-search" data-el="expand" aria-label="Search">
<div class="ar-svg js-svg" data-default-color="black" data-event-color="white">
<svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="black">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.36316 8.5C2.36316 5.11726 5.10542 2.375 8.48816 2.375C11.8709 2.375 14.6132 5.11726 14.6132 8.5C14.6132 11.8827 11.8709 14.625 8.48816 14.625C5.10542 14.625 2.36316 11.8827 2.36316 8.5ZM8.48816 0.625C4.13892 0.625 0.613159 4.15076 0.613159 8.5C0.613159 12.8492 4.13892 16.375 8.48816 16.375C10.3475 16.375 12.0564 15.7306 13.4036 14.6529L19.3694 20.6187L20.6068 19.3813L14.641 13.4155C15.7187 12.0683 16.3632 10.3594 16.3632 8.5C16.3632 4.15076 12.8374 0.625 8.48816 0.625Z" />
</svg>
</div>
</button>
<a href="#" class="js-header__search-clear ar-header__search-clear absolute db right-0" aria-label="Clear search ">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</a>
</form>
<span class="js-header__search-cancel ar-header__search-cancel ttu absolute flex pointer items-center h-100 right-0 z-2">
Cancel
</span>


<a href="https://www.aritzia.com/en/cart" class="ar-header__bag js-header__bag js-view-cart ar-header__panel-trigger db pa2 mh3 relative flex items-center border-box h-100" data-panel-id="bag" data-location="bag-icon" data-link-type="nav-global" data-minicart-disabled="true" aria-label="cart">
<div class="ar-svg js-svg" data-default-color="black" data-event-color="white">
<svg xmlns="http://www.w3.org/2000/svg" class="ar-cart__icon" width="22" height="20" viewBox="0 0 21.6 19.6" fill="black">
<path d="M18.6,7V3.2c0-1.8-1.4-3.2-3.2-3.2H6.2C4.4,0,3,1.4,3,3.2V7H0v12.6h21.6V7H18.6z M4.6,3.2c0-0.9,0.7-1.6,1.6-1.6 h9.2c0.9,0,1.6,0.7,1.6,1.6V7H4.6V3.2z" class="ar-cart__icon-fill" fill="none" />
<path d="M18.6,7V3.2c0-1.8-1.4-3.2-3.2-3.2H6.2C4.4,0,3,1.4,3,3.2V7H0v12.6h21.6V7H18.6z M4.6,3.2c0-0.9,0.7-1.6,1.6-1.6 h9.2c0.9,0,1.6,0.7,1.6,1.6V7H4.6V3.2z M20,18H1.6V8.6H20V18z" class="ar-cart__icon-outline" />
</svg>
</div>
</a>
<a href="https://www.aritzia.com/en/mylist" class="ar-header__wishlist flex items-center mt1 mr3" data-status="logged out" data-link-type="wishlist-nav" data-panel-id="wishlist" aria-label="My List">
<div class="ar-bookmark--light ar-bookmark--light-hover pointer flex items-center h-100">
<div class="ar-svg js-svg" data-default-color="black" data-event-color="white">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
</a>
<a href="https://www.aritzia.com/en/my-account" class="ar-header__account js-header__account ttu flex items-center" data-status="logged out" data-link-type="nav-global" style="margin-top: 6px;">
Sign In
</a>
</div>
<div class="ar-navigation js-navigation w-100 fl relative">
<span class="ar-navigation__background  js-secondary-nav db"></span>
<div class="ar-navigation__container js-navigation__container top-0 left-0 w-100 flex items-center border-box">
<span class="ar-navigation__fade"></span>
<div class="ar-navigation__scroll js-secondary-nav__scroll overflow-auto flex items-center h-100">
<ul class="ar-navigation__categories js-navigation__categories f1 flex w-auto">
<li class="mr3 pr2 nowrap ">
<a class="ar-navigation__category js-navigation__category ar-header__panel-trigger js-header__panel-trigger js-header__trigger--ga-link overflow-visible js-navigation__category--has-children" data-link-type="nav-primary" href="https://www.aritzia.com/en/new" data-panel-id="new" data-ga-parent="new" data-link-status="disabled">
New
</a>
</li>
<li class="mr3 pr2 nowrap ">
<a class="ar-navigation__category js-navigation__category ar-header__panel-trigger js-header__panel-trigger js-header__trigger--ga-link overflow-visible js-navigation__category--has-children" data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing" data-panel-id="clothing" data-ga-parent="clothing" data-link-status="disabled">
Clothing
</a>
</li>
<li class="mr3 pr2 nowrap ">
<a class="ar-navigation__category js-navigation__category ar-header__panel-trigger js-header__panel-trigger js-header__trigger--ga-link overflow-visible js-navigation__category--has-children" data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by" data-panel-id="Shop-by" data-ga-parent="shop by" data-link-status="disabled">
Shop By
</a>
</li>
<li class="mr3 pr2 nowrap ">
<a class="ar-navigation__category js-navigation__category ar-header__panel-trigger js-header__panel-trigger js-header__trigger--ga-link overflow-visible js-navigation__category--has-children" data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes" data-panel-id="accessories-and-shoes" data-ga-parent="accessories" data-link-status="disabled">
Accessories
</a>
</li>
<li class="mr3 pr2 nowrap ">
<a class="ar-navigation__category js-navigation__category ar-header__panel-trigger js-header__panel-trigger js-header__trigger--ga-link overflow-visible js-navigation__category--has-children" data-link-type="nav-primary" href="https://www.aritzia.com/en/brands" data-panel-id="brands" data-ga-parent="brands" data-link-status="disabled">
Brands
</a>
</li>
<li class="mr3 pr2 nowrap ">
<a class="ar-navigation__category js-navigation__category ar-header__panel-trigger js-header__panel-trigger js-header__trigger--ga-link overflow-visible js-navigation__category--has-children" data-link-type="nav-primary" href="https://www.aritzia.com/en/stories" data-panel-id="stories" data-ga-parent="stories" data-link-status="disabled">
Stories
</a>
</li>
<li class="mr3 pr2 nowrap ">
<a class="ar-navigation__category js-navigation__category ar-header__panel-trigger js-header__panel-trigger js-header__trigger--ga-link overflow-visible js-navigation__category--has-children" data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5" data-panel-id="the-super-puff-5" data-ga-parent="the super puff&trade;" data-link-status="disabled">
The Super Puff&trade;
</a>
</li>
<li class="mr3 pr2 nowrap ">
<a class="ar-navigation__category js-navigation__category ar-header__panel-trigger js-header__panel-trigger js-header__trigger--ga-link overflow-visible js-navigation__category--has-children" data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece" data-panel-id="sweatfleece" data-ga-parent="sweatfleece" data-link-status="disabled">
Sweatfleece
</a>
</li>
<li class="mr3 pr2 nowrap ">
<a class="ar-navigation__category js-navigation__category ar-header__panel-trigger js-header__panel-trigger js-header__trigger--ga-link overflow-visible js-navigation__category--has-children" data-link-type="nav-primary" href="https://www.aritzia.com/en/sale" data-panel-id="sale" data-ga-parent="sale" data-link-status="disabled">
Sale
</a>
</li>
</ul>
<script>
			var navjson = {}
		</script>
</div>
</div>
</div>
</div>
<div class="ar-header__panels js-header__panels">

<div class="ar-header__subnav js-header__subnav">
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="new">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Categories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/denim" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-jeans" data-ga-parent="new" data-ga-cat="new denim">
New Denim
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/new-dresses" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-dresses" data-ga-parent="new" data-ga-cat="new dresses">
New Dresses
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/new-jackets-coats" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-jackets-coats" data-ga-parent="new" data-ga-cat="new jackets &amp; coats">
New Jackets &amp; Coats
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/new-pants" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-pants" data-ga-parent="new" data-ga-cat="new pants">
New Pants
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/new-blouses" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-blouses" data-ga-parent="new" data-ga-cat="new shirts &amp; blouses">
New Shirts &amp; Blouses
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new?prefn1=subDepartment&amp;prefv1=Skirts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-skirts" data-ga-parent="new" data-ga-cat="new skirts">
New Skirts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/new-sweaters" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-sweaters" data-ga-parent="new" data-ga-cat="new sweaters">
New Sweaters
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-sweatsuit-sets" data-ga-parent="new" data-ga-cat="new sweatsuits">
New Sweatsuits
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/new-tshirts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-tshirts" data-ga-parent="new" data-ga-cat="new t-shirts &amp; tops">
New T-Shirts &amp; Tops
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Featured
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/contour-feature-3" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="contour-feature-3" data-ga-parent="new" data-ga-cat="contour">
Contour
</a>
</li>
<li class="mb2  ar-category-isnew">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/online-exclusives-new" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="online-exclusives-new" data-ga-parent="new" data-ga-cat="online exclusives">
Online Exclusives
<sup class="ar-category__new-label fn1">New</sup> </a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/sweatsuit-sets-feature" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatsuit-sets-feature" data-ga-parent="new" data-ga-cat="sweatfleece">
Sweatfleece
</a>
</li>
<li class="mb2  ar-category-isnew">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/valentines-day-new" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="valentines-day-new" data-ga-parent="new" data-ga-cat="valentine's day">
Valentine&#39;s Day
<sup class="ar-category__new-label fn1">New</sup> </a>
</li>
<li class="js-header__panel-spacer ttc mb3 db f0">
&nbsp;
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Stories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/contour-sp24-story" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="contour-sp24-story" data-ga-parent="new" data-ga-cat="new contour does things">
New Contour Does Things
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/lunar-new-year-new" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="lunar-new-year-new" data-ga-parent="new" data-ga-cat="lunar new year: year of the dragon">
Lunar New Year: Year of the Dragon
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/bundled-up-story-new" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="bundled-up-story-new" data-ga-parent="new" data-ga-cat="bundled up edit">
Bundled Up Edit
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/view-all-stories" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="view-all-stories" data-ga-parent="new" data-ga-cat="view all stories">
View All Stories
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/contour-feature-1" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="contour-feature-1" data-ga-parent="new" data-ga-cat="contour">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-01-new-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-01-new-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-01-new-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-01-new-a.jpg?wid=900 900w" alt="Contour" title="Contour" />
<span class="f0 pt2 db">Contour</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/new/valentines-day-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="valentines-day-feature" data-ga-parent="new" data-ga-cat="valentine's day">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-01-new-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-01-new-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-01-new-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-01-new-b.jpg?wid=900 900w" alt="Valentine's Day" title="Valentine's Day" />
<span class="f0 pt2 db">Valentine&#39;s Day</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="clothing">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Categories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/womens-workout-clothes" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="womens-workout-clothes" data-ga-parent="clothing" data-ga-cat="activewear">
Activewear
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/favourites-3" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="favourites-3" data-ga-parent="clothing" data-ga-cat="back in">
Back In
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/blazers-2" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="blazers-2" data-ga-parent="clothing" data-ga-cat="blazers &amp; vests">
Blazers &amp; Vests
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/bodysuits" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="bodysuits" data-ga-parent="clothing" data-ga-cat="bodysuits">
Bodysuits
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/jeans" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="jeans" data-ga-parent="clothing" data-ga-cat="denim">
Denim
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/dresses" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="dresses" data-ga-parent="clothing" data-ga-cat="dresses">
Dresses
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/coats-jackets" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="coats-jackets" data-ga-parent="clothing" data-ga-cat="jackets &amp; coats">
Jackets &amp; Coats
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/jumpsuits-rompers" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="jumpsuits-rompers" data-ga-parent="clothing" data-ga-cat="jumpsuits &amp; rompers">
Jumpsuits &amp; Rompers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/knitwear" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="knitwear" data-ga-parent="clothing" data-ga-cat="knitwear">
Knitwear
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/leggings-and-bike-shorts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="leggings-and-bike-shorts" data-ga-parent="clothing" data-ga-cat="leggings &amp; bike shorts">
Leggings &amp; Bike Shorts
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
&nbsp;
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/pants" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="pants" data-ga-parent="clothing" data-ga-cat="pants">
Pants
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/sale-2" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-2" data-ga-parent="clothing" data-ga-cat="sale">
Sale
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/blouses" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="blouses" data-ga-parent="clothing" data-ga-cat="shirts &amp; blouses">
Shirts &amp; Blouses
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/shorts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="shorts" data-ga-parent="clothing" data-ga-cat="shorts">
Shorts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/skirts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="skirts" data-ga-parent="clothing" data-ga-cat="skirts">
Skirts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/socks-and-tights" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="socks-and-tights" data-ga-parent="clothing" data-ga-cat="socks &amp; tights">
Socks &amp; Tights
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/suits-for-women" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="suits-for-women" data-ga-parent="clothing" data-ga-cat="suits &amp; tailoring">
Suits &amp; Tailoring
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/sweaters" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweaters" data-ga-parent="clothing" data-ga-cat="sweaters">
Sweaters
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/sweatsuit-sets" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatsuit-sets" data-ga-parent="clothing" data-ga-cat="sweatsuits">
Sweatsuits
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/swimsuits" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="swimsuits" data-ga-parent="clothing" data-ga-cat="swim">
Swim
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/tshirts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="tshirts" data-ga-parent="clothing" data-ga-cat="t-shirts &amp; tops">
T-Shirts &amp; Tops
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Featured
</li>
<li class="mb2  ar-category-isnew">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/online-exclusives-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="online-exclusives-1" data-ga-parent="clothing" data-ga-cat="online exclusives">
Online Exclusives
<sup class="ar-category__new-label fn1">New</sup> </a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/online-exclusive-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="online-exclusive-feature" data-ga-parent="clothing" data-ga-cat="online exclusives">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-a.jpg?wid=900 900w" alt="Online Exclusives" title="Online Exclusives" />
<span class="f0 pt2 db">Online Exclusives</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/dresses-2" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="dresses-2" data-ga-parent="clothing" data-ga-cat="dresses">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-02-clothing-b.jpg?wid=900 900w" alt="Dresses" title="Dresses" />
<span class="f0 pt2 db">Dresses</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="Shop-by">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Iconically Aritzia
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/contour-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="contour-shop-by" data-ga-parent="shop by" data-ga-cat="contour">
Contour
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/seamless-feature-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="seamless-feature-1" data-ga-parent="shop by" data-ga-cat="seamless">
Seamless
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/cozy-fleece-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="cozy-fleece-shop-by" data-ga-parent="shop by" data-ga-cat="sweatfleece">
Sweatfleece
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/effortless-pant-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="effortless-pant-shop-by" data-ga-parent="shop by" data-ga-cat="the effortless pant&trade;">
The Effortless Pant&trade;
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/super-puff-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-puff-shop-by" data-ga-parent="shop by" data-ga-cat="the super puff&trade;">
The Super Puff&trade;
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Occasion
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/womens-basics" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="womens-basics" data-ga-parent="shop by" data-ga-cat="everyday essentials">
Everyday Essentials
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/event-dressing" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="event-dressing" data-ga-parent="shop by" data-ga-cat="going out">
Going Out
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/loungewear-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="loungewear-1" data-ga-parent="shop by" data-ga-cat="loungewear">
Loungewear
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/vacation-outfits" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="vacation-outfits" data-ga-parent="shop by" data-ga-cat="vacation">
Vacation
</a>
</li>
<li class="mb2  ar-category-isnew">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/romantic-edit" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="romantic-edit" data-ga-parent="shop by" data-ga-cat="valentine's day">
Valentine&#39;s Day
<sup class="ar-category__new-label fn1">New</sup> </a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/workwear" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="workwear" data-ga-parent="shop by" data-ga-cat="wear to work">
Wear to Work
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/working-out" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="working-out" data-ga-parent="shop by" data-ga-cat="working out">
Working Out
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Trending
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/shapewear-clothing" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="shapewear-clothing" data-ga-parent="shop by" data-ga-cat="body shaping">
Body Shaping
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/cargo-parachute-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="cargo-parachute-shop-by" data-ga-parent="shop by" data-ga-cat="cargo &amp; parachute">
Cargo &amp; Parachute
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/two-piece-sets-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="two-piece-sets-1" data-ga-parent="shop by" data-ga-cat="matching sets">
Matching Sets
</a>
</li>
<li class="mb2  ar-category-isnew">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/online-exclusive" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="online-exclusive" data-ga-parent="shop by" data-ga-cat="online exclusives">
Online Exclusives
<sup class="ar-category__new-label fn1">New</sup> </a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/puffers-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="puffers-shop-by" data-ga-parent="shop by" data-ga-cat="puffers">
Puffers
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Fabric
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/butter-fabric" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="butter-fabric" data-ga-parent="shop by" data-ga-cat="butter">
Butter
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/sweatsuit-sets/cozy-fleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="cozy-fleece-shop" data-ga-parent="shop by" data-ga-cat="cozy fleece">
Cozy Fleece
</a>
</li>
<li class="mb2  ar-category-isnew">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/crepette-clothing" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="crepette-clothing" data-ga-parent="shop by" data-ga-cat="crepette">
Crepette
<sup class="ar-category__new-label fn1">New</sup> </a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/sculpt-knit-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sculpt-knit-shop-by" data-ga-parent="shop by" data-ga-cat="sculpt knit">
Sculpt Knit
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing?prefn1=sustainability&amp;prefv1=Organic%20Materials%20%7C%20Recycled%20Materials%20%7C%20Responsible%20Forestry%20%7C%20Responsible%20Wool%20%7C%20Responsible%20Cashmere%20%7C%20Responsible%20Down" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sustainable-materials" data-ga-parent="shop by" data-ga-cat="sustainable styles">
Sustainable Styles
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/vegan-leather-shop-by" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="vegan-leather-shop-by" data-ga-parent="shop by" data-ga-cat="vegan leather">
Vegan Leather
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/shapewear-clothing-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="shapewear-clothing-feature" data-ga-parent="shop by" data-ga-cat="body shaping">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-a.jpg?wid=900 900w" alt="Body Shaping" title="Body Shaping" />
<span class="f0 pt2 db">Body Shaping</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/shop-by/valentines-day-shopby-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="valentines-day-shopby-feature" data-ga-parent="shop by" data-ga-cat="valentine's day">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-03-shopby-b.jpg?wid=900 900w" alt="Valentine's Day" title="Valentine's Day" />
<span class="f0 pt2 db">Valentine&#39;s Day</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="accessories-and-shoes">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Categories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/bags-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="bags-1" data-ga-parent="accessories" data-ga-cat="bags">
Bags
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/belts-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="belts-1" data-ga-parent="accessories" data-ga-cat="belts">
Belts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/gloves" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="gloves" data-ga-parent="accessories" data-ga-cat="gloves &amp; mittens">
Gloves &amp; Mittens
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/hats-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="hats-1" data-ga-parent="accessories" data-ga-cat="hats">
Hats
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/intimates-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="intimates-1" data-ga-parent="accessories" data-ga-cat="intimates">
Intimates
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/scarves-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="scarves-1" data-ga-parent="accessories" data-ga-cat="scarves">
Scarves
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/shoes-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="shoes-1" data-ga-parent="accessories" data-ga-cat="shoes">
Shoes
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/socks-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="socks-1" data-ga-parent="accessories" data-ga-cat="socks &amp; tights">
Socks &amp; Tights
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/tech" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="tech" data-ga-parent="accessories" data-ga-cat="tech">
Tech
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Featured
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/everyday-socks-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="everyday-socks-1" data-ga-parent="accessories" data-ga-cat="everyday socks">
Everyday Socks
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/new-era-feature-2" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-era-feature-2" data-ga-parent="accessories" data-ga-cat="new era">
New Era
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/socks-tights-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="socks-tights-feature" data-ga-parent="accessories" data-ga-cat="socks &amp; tights">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-a.jpg?wid=900 900w" alt="Socks &amp; Tights" title="Socks &amp; Tights" />
<span class="f0 pt2 db">Socks &amp; Tights</span>
</a>
</li>
</ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/bags-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="bags-feature" data-ga-parent="accessories" data-ga-cat="bags">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-04-accessories-b.jpg?wid=900 900w" alt="Bags" title="Bags" />
<span class="f0 pt2 db">Bags</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/accessories-and-shoes/shoes-ca" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="shoes-ca" data-ga-parent="accessories" data-ga-cat="shoes">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-04-accessories-c.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-04-accessories-c.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-04-accessories-c.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-04-accessories-c.jpg?wid=900 900w" alt="Shoes" title="Shoes" />
<span class="f0 pt2 db">Shoes</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="brands">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Iconically Aritzia
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/contour-icon" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="contour-icon" data-ga-parent="brands" data-ga-cat="contour">
Contour
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/seamless-icon" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="seamless-icon" data-ga-parent="brands" data-ga-cat="seamless">
Seamless
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/sweatfleece-icon" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatfleece-icon" data-ga-parent="brands" data-ga-cat="sweatfleece">
Sweatfleece
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/effortless-icon" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="effortless-icon" data-ga-parent="brands" data-ga-cat="the effortless pant&trade;">
The Effortless Pant&trade;
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/super-world" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-world" data-ga-parent="brands" data-ga-cat="the super puff&trade;">
The Super Puff&trade;
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Our Brands
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/t-babaton" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="t-babaton" data-ga-parent="brands" data-ga-cat="babaton">
Babaton
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/denimforum" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="denimforum" data-ga-parent="brands" data-ga-cat="denim forum">
Denim Forum
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/wilfred-free" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="wilfred-free" data-ga-parent="brands" data-ga-cat="free">
Free
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/sunday-best" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sunday-best" data-ga-parent="brands" data-ga-cat="sunday best">
Sunday Best
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/ten-by-babaton" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="ten-by-babaton" data-ga-parent="brands" data-ga-cat="ten by babaton">
Ten by Babaton
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/group" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="group" data-ga-parent="brands" data-ga-cat="the group">
The Group
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/tna" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="tna" data-ga-parent="brands" data-ga-cat="tna">
Tna
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/tnaction" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="tnaction" data-ga-parent="brands" data-ga-cat="tnaction&trade;">
TnAction&trade;
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/wilfred" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="wilfred" data-ga-parent="brands" data-ga-cat="wilfred">
Wilfred
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
More Brands We Love
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/agolde-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="agolde-1" data-ga-parent="brands" data-ga-cat="agolde">
AGOLDE
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/asics-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="asics-1" data-ga-parent="brands" data-ga-cat="asics">
ASICS
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/citizens-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="citizens-1" data-ga-parent="brands" data-ga-cat="citizens of humanity">
Citizens of Humanity
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/eb-denim-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="eb-denim-1" data-ga-parent="brands" data-ga-cat="eb denim">
EB Denim
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/levis-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="levis-1" data-ga-parent="brands" data-ga-cat="levi&rsquo;s&reg; premium">
Levi&rsquo;s&reg; Premium
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/new-era" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-era" data-ga-parent="brands" data-ga-cat="new era">
New Era
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/new-balance" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-balance" data-ga-parent="brands" data-ga-cat="new balance">
New Balance
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/redone" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="redone" data-ga-parent="brands" data-ga-cat="re/done">
RE/DONE
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/salomon" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="salomon" data-ga-parent="brands" data-ga-cat="salomon">
Salomon
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/tna-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="tna-feature" data-ga-parent="brands" data-ga-cat="tna">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-a.jpg?wid=900 900w" alt="Tna" title="Tna" />
<span class="f0 pt2 db">Tna</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/brands/babaton-1" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="babaton-1" data-ga-parent="brands" data-ga-cat="babaton">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-05-brands-b.jpg?wid=900 900w" alt="Babaton" title="Babaton" />
<span class="f0 pt2 db">Babaton</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="stories">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Spring 24
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/new-contour-spring-2024" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="new-contour-spring-2024" data-ga-parent="stories" data-ga-cat="new contour does things">
New Contour Does Things
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Winter 23
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/lunar-new-year-24" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="lunar-new-year-24" data-ga-parent="stories" data-ga-cat="lunar new year: year of the dragon">
Lunar New Year: Year of the Dragon
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/super-on-you-story-feature-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-on-you-story-feature-1" data-ga-parent="stories" data-ga-cat="super on you">
Super On You
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/super-puff-styles-winter-23" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-puff-styles-winter-23" data-ga-parent="stories" data-ga-cat="the super puff&trade;. it&rsquo;s personal. on set.">
The Super Puff&trade;. It&rsquo;s Personal. On Set.
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/winter-coat-outfits" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="winter-coat-outfits" data-ga-parent="stories" data-ga-cat="bundled up edit">
Bundled Up Edit
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/emma-chamberlain-super-puff-winter-23" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="emma-chamberlain-super-puff-winter-23" data-ga-parent="stories" data-ga-cat="super goes with emma">
Super Goes With Emma
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/vegan-leather-edit" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="vegan-leather-edit" data-ga-parent="stories" data-ga-cat="vegan leather edit">
Vegan Leather Edit
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/polar-fleece-winter-23" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="polar-fleece-winter-23" data-ga-parent="stories" data-ga-cat="polar fleece edit">
Polar Fleece Edit
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/contour-pam-winter-23" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="contour-pam-winter-23" data-ga-parent="stories" data-ga-cat="she's pam. in contour.">
She&#39;s Pam. In Contour.
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/contour-lookbook-winter-23" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="contour-lookbook-winter-23" data-ga-parent="stories" data-ga-cat="contour winter 23 lookbook">
Contour Winter 23 Lookbook
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/ndtr-osd-2023" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="ndtr-osd-2023" data-ga-parent="stories" data-ga-cat="orange shirt day">
Orange Shirt Day
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/sweaters-edit" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweaters-edit" data-ga-parent="stories" data-ga-cat="sweaters edit">
Sweaters Edit
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/contour-sp24-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="contour-sp24-feature" data-ga-parent="stories" data-ga-cat="new contour does things">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-06-stories-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-06-stories-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-06-stories-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-06-stories-a.jpg?wid=900 900w" alt="New Contour Does Things" title="New Contour Does Things" />
<span class="f0 pt2 db">New Contour Does Things</span>
</a>
</li>
</ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/lunar-new-year-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="lunar-new-year-feature" data-ga-parent="stories" data-ga-cat="lunar new year: year of the dragon">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-27-main-menu-06-stories-a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-27-main-menu-06-stories-a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-27-main-menu-06-stories-a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-27-main-menu-06-stories-a?wid=900 900w" alt="Lunar New Year: Year of the Dragon" title="Lunar New Year: Year of the Dragon" />
<span class="f0 pt2 db">Lunar New Year: Year of the Dragon</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/stories/bundled-up-story" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="bundled-up-story" data-ga-parent="stories" data-ga-cat="bundled up edit">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-18-main-menu-06-stories-c?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-18-main-menu-06-stories-c?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-18-main-menu-06-stories-c?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-18-main-menu-06-stories-c?wid=900 900w" alt="Bundled Up Edit" title="Bundled Up Edit" />
<span class="f0 pt2 db">Bundled Up Edit</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="the-super-puff-5">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Categories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/the-iconic-supers" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="the-iconic-supers" data-ga-parent="the super puff&trade;" data-ga-cat="the classic supers">
The Classic Supers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/the-super-puff-mens-5" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="the-super-puff-mens-5" data-ga-parent="the super puff&trade;" data-ga-cat="the men's supers">
The Men&#39;s Supers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/the-new-supers-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="the-new-supers-1" data-ga-parent="the super puff&trade;" data-ga-cat="the new supers">
The New Supers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/clothing/coats-jackets/puffers/thesuperpuff?prefn1=sustainability&amp;prefv1=Recycled%20Materials" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="the-recycled-supers" data-ga-parent="the super puff&trade;" data-ga-cat="the 100% recycled supers">
The 100% Recycled Supers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-puff-accessories-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-puff-accessories-1" data-ga-parent="the super puff&trade;" data-ga-cat="the super accessories">
The Super Accessories
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-vests-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-vests-1" data-ga-parent="the super puff&trade;" data-ga-cat="the super vests">
The Super Vests
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/the-waterproof-supers" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="the-waterproof-supers" data-ga-parent="the super puff&trade;" data-ga-cat="the waterproof supers">
The Waterproof Supers
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Featured
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-colours-2" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-colours-2" data-ga-parent="the super puff&trade;" data-ga-cat="super colours">
Super Colours
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-on-you-feature-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-on-you-feature-1" data-ga-parent="the super puff&trade;" data-ga-cat="super on you">
Super On You
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-puff-guide-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-puff-guide-1" data-ga-parent="the super puff&trade;" data-ga-cat="the super puff&trade; guide">
The Super Puff&trade; Guide
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-puff-game-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="super-puff-game-1" data-ga-parent="the super puff&trade;" data-ga-cat="the super puff&trade;: icy odyssey">
The Super Puff&trade;: Icy Odyssey
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-puff-guide-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="super-puff-guide-feature" data-ga-parent="the super puff&trade;" data-ga-cat="the super puff&trade; guide">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-a?wid=900 900w" alt="The Super Puff&trade; Guide" title="The Super Puff&trade; Guide" />
<span class="f0 pt2 db">The Super Puff&trade; Guide</span>
</a>
</li>
</ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/waterproof-supers-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="waterproof-supers-feature" data-ga-parent="the super puff&trade;" data-ga-cat="the waterproof supers">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-07-thesuperpuff-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-07-thesuperpuff-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-07-thesuperpuff-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-07-thesuperpuff-b.jpg?wid=900 900w" alt="The Waterproof Supers" title="The Waterproof Supers" />
<span class="f0 pt2 db">The Waterproof Supers</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/the-super-puff-5/super-colours-1" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="super-colours-1" data-ga-parent="the super puff&trade;" data-ga-cat="super colours">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-c?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-c?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-c?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/wi23-01-23-main-menu-07-thesuperpuff-c?wid=900 900w" alt="Super Colours" title="Super Colours" />
<span class="f0 pt2 db">Super Colours</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="sweatfleece">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Categories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/sweatpants-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatpants-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="sweatpants">
Sweatpants
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/sweatshirts-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatshirts-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="sweatshirts">
Sweatshirts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/sweatshorts-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatshorts-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="sweatshorts">
Sweatshorts
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Fit
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/mega-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="mega-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="mega">
Mega
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/boyfriend-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="boyfriend-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="boyfriend">
Boyfriend
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/perfect-sweatfleece" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="perfect-sweatfleece" data-ga-parent="sweatfleece" data-ga-cat="perfect">
Perfect
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Featured
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/perfect-hoodie-feature-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="perfect-hoodie-feature-1" data-ga-parent="sweatfleece" data-ga-cat="cozy fleece perfect hoodie">
Cozy Fleece Perfect Hoodie
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/sweatfleece-guide-1" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sweatfleece-guide-1" data-ga-parent="sweatfleece" data-ga-cat="sweatfleece guide">
Sweatfleece Guide
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/sweatfleece-guide-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="sweatfleece-guide-feature" data-ga-parent="sweatfleece" data-ga-cat="sweatfleece guide">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-08-sweatfleece-a.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-08-sweatfleece-a.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-08-sweatfleece-a.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-01-main-menu-08-sweatfleece-a.jpg?wid=900 900w" alt="Sweatfleece Guide" title="Sweatfleece Guide" />
<span class="f0 pt2 db">Sweatfleece Guide</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sweatfleece/perfect-hoodie-feature" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="perfect-hoodie-feature" data-ga-parent="sweatfleece" data-ga-cat="cozy fleece perfect hoodie">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-08-sweatfleece-b.jpg?wid=600" data-srcset="https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-08-sweatfleece-b.jpg?wid=300 300w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-08-sweatfleece-b.jpg?wid=600 600w, https://assets.aritzia.com/image/upload/sp24-02-06-main-menu-08-sweatfleece-b.jpg?wid=900 900w" alt="Cozy Fleece Perfect Hoodie" title="Cozy Fleece Perfect Hoodie" />
<span class="f0 pt2 db">Cozy Fleece Perfect Hoodie</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-header__panel js-header__panel--categories js-header__panel fixed absolute--fill z-1" data-panel-id="sale">
<div class="ar-header__panel-content--categories ar-header__panel-content js-header__panel-content relative w-100 border-box bg-white h-minc">
<div class="ar-header__scroll js-header__scroll grid grid-col-1 grid-col-4-m grid-col-6-l gp2 pt3 relative overflow-auto h-100">
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Categories
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/final-few" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="final-few" data-ga-parent="sale" data-ga-cat="final few">
Final Few
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-dresses" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-dresses" data-ga-parent="sale" data-ga-cat="dresses">
Dresses
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-coats-jackets" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-coats-jackets" data-ga-parent="sale" data-ga-cat="jackets &amp; coats">
Jackets &amp; Coats
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-jumpsuits-rompers" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-jumpsuits-rompers" data-ga-parent="sale" data-ga-cat="jumpsuits &amp; rompers">
Jumpsuits &amp; Rompers
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-leggings-bike-shorts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-leggings-bike-shorts" data-ga-parent="sale" data-ga-cat="leggings &amp; bike shorts">
Leggings &amp; Bike Shorts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-pants" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-pants" data-ga-parent="sale" data-ga-cat="pants">
Pants
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-blouses" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-blouses" data-ga-parent="sale" data-ga-cat="shirts &amp; blouses">
Shirts &amp; Blouses
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
&nbsp;
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-accessories" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-accessories" data-ga-parent="sale" data-ga-cat="shoes &amp; accessories">
Shoes &amp; Accessories
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-shorts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-shorts" data-ga-parent="sale" data-ga-cat="shorts">
Shorts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-skirts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-skirts" data-ga-parent="sale" data-ga-cat="skirts">
Skirts
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-sweaters" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-sweaters" data-ga-parent="sale" data-ga-cat="sweaters">
Sweaters
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/swim-sale" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="swim-sale" data-ga-parent="sale" data-ga-cat="swim">
Swim
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/sale-tshirts" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-tshirts" data-ga-parent="sale" data-ga-cat="t-shirts &amp; tops">
T-Shirts &amp; Tops
</a>
</li>
</ul>
<ul class="pr3">
<li class="js-header__panel-spacer ttc mb3 db f0">
Discount
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale?prefn1=percentageBucket&amp;prefv1=50-60" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-50percent" data-ga-parent="sale" data-ga-cat="50&ndash;60% off">
50&ndash;60% Off
</a>
</li>
<li class="mb2  ">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale?prefn1=percentageBucket&amp;prefv1=60-70" class="js-header__trigger--ga-link f1 lh-copy relative" data-cat-id="sale-60percent" data-ga-parent="sale" data-ga-cat="60&ndash;70% off">
60&ndash;70% Off
</a>
</li>
</ul>
<ul class="dn-m"></ul>
<ul class>
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/feature-dresses" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="feature-dresses" data-ga-parent="sale" data-ga-cat="dresses">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/s23_04_a08_106205_1275_on_c?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/s23_04_a08_106205_1275_on_c?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/s23_04_a08_106205_1275_on_c?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/s23_04_a08_106205_1275_on_c?wid=900 900w" alt="Dresses" title="Dresses" />
<span class="f0 pt2 db">Dresses</span>
</a>
</li>
</ul>
<ul class="dn-m">
<li class="mb2 w-100">
<a data-link-type="nav-primary" href="https://www.aritzia.com/en/sale/feature-skirts" class="js-header__trigger--ga-link lh-copy relative" data-cat-id="feature-skirts" data-ga-parent="sale" data-ga-cat="skirts">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/s23_02_a07_109875_28150_on_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/s23_02_a07_109875_28150_on_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/s23_02_a07_109875_28150_on_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/s23_02_a07_109875_28150_on_a?wid=900 900w" alt="Skirts" title="Skirts" />
<span class="f0 pt2 db">Skirts</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>

<div class="ar-header__panel ar-header__panel--right js-header__panel--right js-header__panel fixed absolute--fill flex z-2 justify-end" data-panel-id="bag">
<div class="ar-header__panel-content js-header__panel-content bg-white border-box">
<div class="ar-header__scroll flex flex-wrap relative overflow-auto">


<div class="ar-minicart js-minicart w-100 relative" data-currency="CAD">
<div class="js-minicart__total dn">
<a href="https://www.aritzia.com/en/cart" title="View Bag" class="js-view-cart" data-link-type="nav-global" data-location="bag-icon">
Bag (0)
</a>
</div>
<div class="ar-minicart__content js-minicart__content bg-white f0 z-9999" data-selid="minicart-overlay">
<div class="ar-minicart__content-wrapper pt1 pt0-ns">
<div class="ar-minicart__promotion">
</div>
<div class="ar-minicart__products js-minicart__products ws-normal">
<div class="ph5">
You haven't put any items in your bag.
<div class="pt2 mb4">
<a href="/en/clothing" data-ec="ecommerce" data-ea="empty mini bag" data-el="start shopping" class="ar-link">Start Shopping</a>
<span class="tc">or</span>
<a href="/en/my-account?redirect=" data-ec="ecommerce" data-ea="empty mini bag" data-el="sign in" class="ar-link js-minicart__signin">Sign In</a>
</div>
</div>
<div class="ar-minicart__products-container pl0 pt3 pt0-ns overflow-y-auto border-box flex flex-column justify-end">
<div class="ph5-ns">
</div>
<div class="ar-minicart__recommendations mt3">
<div class="ar-slider-recommendations">
<div class="ar-product-swiper" data-cid="gifts-under-35">
<div class="ar-swiper ar-swiper-quickview js-swiper-quickview">
<div class="ar-swiper-buttons cf">
<div class="ar-swiper-next dn dib-ns"><a>Next</a></div>
<div class="ar-swiper-prev dn dib-ns"><a>Prev</a></div>
<h5 class="tl f1">Before you go, there's more:</h5>
</div>
<div class="ar-swiper-scroll ar-swiper-lazyload">
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="335b4233ce7ff42a031785ed10" data-itemid="103241001" data-mpid="103241" data-color="5870" data-pkey="103241-5870" data-colors="8" data-master="{&quot;name&quot;:&quot;ON-THE-WAY EXPOSED BAG&quot;,&quot;brand&quot;:&quot;TnAction&quot;,&quot;master&quot;:&quot;103241&quot;,&quot;category&quot;:&quot;AWN1O08&quot;,&quot;size&quot;:&quot;ONE&quot;,&quot;color&quot;:&quot;KOMBU&quot;,&quot;department&quot;:&quot;N08&quot;,&quot;price&quot;:&quot;38.00&quot;,&quot;listprice&quot;:&quot;38.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;675&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="ON-THE-WAY EXPOSED BAG" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for ON-THE-WAY EXPOSED BAG " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/on-the-way-exposed-bag/103241.html?dwvar_103241_color=19629&amp;dwvar_103241_size=1">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="ON-THE-WAY EXPOSED BAG - Water-repellent nylon multi-way bag" title="ON-THE-WAY EXPOSED BAG - Water-repellent nylon multi-way bag" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s23_19_n08_103241_19629_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s23_19_n08_103241_19629_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s23_19_n08_103241_19629_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s23_19_n08_103241_19629_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s23_19_n08_103241_19629_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s23_19_n08_103241_19629_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s23_19_n08_103241_19629_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="103241001" data-master="103241" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="103241001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/on-the-way-exposed-bag/103241.html?dwvar_103241_color=19629&amp;dwvar_103241_size=1" title="ON-THE-WAY EXPOSED BAG">TnAction</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="103241001 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/on-the-way-exposed-bag/103241.html?dwvar_103241_color=19629&amp;dwvar_103241_size=1" title="on-the-way exposed bag">on-the-way exposed bag<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$38</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="103241001" data-master="103241" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 103241001 lh-solid" href="https://www.aritzia.com/en/product/on-the-way-exposed-bag/103241.html?dwvar_103241_color=19629&amp;dwvar_103241_size=1" title="8 Colours">
8 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="e352fb6defe30c4c4f4ce3990e" data-itemid="114854001" data-mpid="114854" data-color="32459" data-pkey="114854-32459" data-colors="8" data-master="{&quot;name&quot;:&quot;BEST-EVER ANKLE SOCK 3-PACK&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;114854&quot;,&quot;category&quot;:&quot;AWN1S06&quot;,&quot;size&quot;:&quot;XS/S&quot;,&quot;color&quot;:&quot;ARWY BL/AQMR GR/SLB BL&quot;,&quot;department&quot;:&quot;N06&quot;,&quot;price&quot;:&quot;20.00&quot;,&quot;listprice&quot;:&quot;20.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;796&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="BEST-EVER ANKLE SOCK 3-PACK" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for BEST-EVER ANKLE SOCK 3-PACK " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/best-ever-ankle-sock-3-pack/114854.html?dwvar_114854_color=1275&amp;dwvar_114854_size=90">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="BEST-EVER ANKLE SOCK 3-PACK - Base Cotton&trade; everyday cotton ankle socks, 3-pack" title="BEST-EVER ANKLE SOCK 3-PACK - Base Cotton&trade; everyday cotton ankle socks, 3-pack" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114854_1275_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114854_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114854_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114854_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114854_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114854_1275_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114854_1275_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="114854001" data-master="114854" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="114854001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/best-ever-ankle-sock-3-pack/114854.html?dwvar_114854_color=1275&amp;dwvar_114854_size=90" title="BEST-EVER ANKLE SOCK 3-PACK">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="114854001 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/best-ever-ankle-sock-3-pack/114854.html?dwvar_114854_color=1275&amp;dwvar_114854_size=90" title="best-ever ankle sock 3-pack">best-ever ankle sock 3-pack<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$20</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="114854001" data-master="114854" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 114854001 lh-solid" href="https://www.aritzia.com/en/product/best-ever-ankle-sock-3-pack/114854.html?dwvar_114854_color=1275&amp;dwvar_114854_size=90" title="8 Colours">
8 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="eb9b0d0223bdc0e012a27eab10" data-itemid="105194017" data-mpid="105194" data-color="23833" data-pkey="105194-23833" data-colors="11" data-master="{&quot;name&quot;:&quot;SINCH SMOOTH WILLOW T-SHIRT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;105194&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;XS&quot;,&quot;color&quot;:&quot;FLUENT TAUPE&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;35.00&quot;,&quot;listprice&quot;:&quot;35.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;769&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Back In&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="SINCH SMOOTH WILLOW T-SHIRT" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for SINCH SMOOTH WILLOW T-SHIRT - Back In" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/sinch-smooth-willow-t-shirt/105194.html?dwvar_105194_color=18891&amp;dwvar_105194_size=14">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="SINCH SMOOTH WILLOW T-SHIRT - Seamless crewneck t-shirt" title="SINCH SMOOTH WILLOW T-SHIRT - Seamless crewneck t-shirt" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_105194_18891_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_105194_18891_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_105194_18891_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_105194_18891_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_105194_18891_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_105194_18891_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_105194_18891_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style="background-color: rgba( 255, 255, 255, 1 );" data-productLabel="unavailable">
Back In
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="105194017" data-master="105194" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="105194017 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/sinch-smooth-willow-t-shirt/105194.html?dwvar_105194_color=18891&amp;dwvar_105194_size=14" title="SINCH SMOOTH WILLOW T-SHIRT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="105194017 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/sinch-smooth-willow-t-shirt/105194.html?dwvar_105194_color=18891&amp;dwvar_105194_size=14" title="sinch smooth willow t-shirt">sinch smooth willow t-shirt<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$35</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="105194017" data-master="105194" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 105194017 lh-solid" href="https://www.aritzia.com/en/product/sinch-smooth-willow-t-shirt/105194.html?dwvar_105194_color=18891&amp;dwvar_105194_size=14" title="11 Colours">
11 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="99e24ccbae96793538d72b9fc2" data-itemid="102669001" data-mpid="102669" data-color="1274" data-pkey="102669-1274" data-colors="12" data-master="{&quot;name&quot;:&quot;HOMESTRETCH&trade; CREW LONGSLEEVE&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;102669&quot;,&quot;category&quot;:&quot;AWA1S01&quot;,&quot;size&quot;:&quot;2XL&quot;,&quot;color&quot;:&quot;BLACK&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;35.00&quot;,&quot;listprice&quot;:&quot;35.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;769&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Back In&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="HOMESTRETCH&trade; CREW LONGSLEEVE" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for HOMESTRETCH&trade; CREW LONGSLEEVE - Back In" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-longsleeve/102669.html?dwvar_102669_color=1275&amp;dwvar_102669_size=134">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="HOMESTRETCH&trade; CREW LONGSLEEVE - Stretchy ribbed cotton crewneck longsleeve" title="HOMESTRETCH&trade; CREW LONGSLEEVE - Stretchy ribbed cotton crewneck longsleeve" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102669_1275_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102669_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102669_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_102669_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102669_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_102669_1275_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102669_1275_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style="background-color: rgba( 255, 255, 255, 1 );" data-productLabel="unavailable">
Back In
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="102669001" data-master="102669" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="102669001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-longsleeve/102669.html?dwvar_102669_color=1275&amp;dwvar_102669_size=134" title="HOMESTRETCH&trade; CREW LONGSLEEVE">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="102669001 product-quickview js-quickview-button__done ws-normal overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-longsleeve/102669.html?dwvar_102669_color=1275&amp;dwvar_102669_size=134" title="HomeStretch&trade; Crew Longsleeve">HomeStretch&trade; Crew Longsleeve</a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$35</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="102669001" data-master="102669" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 102669001 lh-solid" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-longsleeve/102669.html?dwvar_102669_color=1275&amp;dwvar_102669_size=134" title="12 Colours">
12 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="be85d2dabc9ee61bd67a2b1cdb" data-itemid="102668001" data-mpid="102668" data-color="1275" data-pkey="102668-1275" data-colors="14" data-master="{&quot;name&quot;:&quot;HOMESTRETCH&trade; CREW T-SHIRT&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;102668&quot;,&quot;category&quot;:&quot;AWA1S01&quot;,&quot;size&quot;:&quot;XS&quot;,&quot;color&quot;:&quot;WHITE&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;25.00&quot;,&quot;listprice&quot;:&quot;25.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;769&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="HOMESTRETCH&trade; CREW T-SHIRT" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for HOMESTRETCH&trade; CREW T-SHIRT " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-t-shirt/102668.html?dwvar_102668_color=4425&amp;dwvar_102668_size=14">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="HOMESTRETCH&trade; CREW T-SHIRT - Stretchy ribbed cotton crewneck t-shirt" title="HOMESTRETCH&trade; CREW T-SHIRT - Stretchy ribbed cotton crewneck t-shirt" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102668_4425_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102668_4425_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102668_4425_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_102668_4425_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102668_4425_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_102668_4425_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_102668_4425_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="102668001" data-master="102668" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="102668001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-t-shirt/102668.html?dwvar_102668_color=4425&amp;dwvar_102668_size=14" title="HOMESTRETCH&trade; CREW T-SHIRT">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="102668001 product-quickview js-quickview-button__done ws-normal overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-t-shirt/102668.html?dwvar_102668_color=4425&amp;dwvar_102668_size=14" title="HomeStretch&trade; Crew T-Shirt">HomeStretch&trade; Crew T-Shirt</a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$25</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="102668001" data-master="102668" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 102668001 lh-solid" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-t-shirt/102668.html?dwvar_102668_color=4425&amp;dwvar_102668_size=14" title="14 Colours">
14 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="60b3feb07cf45afecdd59e128e" data-itemid="114850001" data-mpid="114850" data-color="1275" data-pkey="114850-1275" data-colors="9" data-master="{&quot;name&quot;:&quot;BEST-EVER NO-SHOW SOCK 3-PACK&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;114850&quot;,&quot;category&quot;:&quot;AWN1S06&quot;,&quot;size&quot;:&quot;XS/S&quot;,&quot;color&quot;:&quot;WHITE&quot;,&quot;department&quot;:&quot;N06&quot;,&quot;price&quot;:&quot;18.00&quot;,&quot;listprice&quot;:&quot;18.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;762&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="BEST-EVER NO-SHOW SOCK 3-PACK" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for BEST-EVER NO-SHOW SOCK 3-PACK " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/best-ever-no-show-sock-3-pack/114850.html?dwvar_114850_color=1275&amp;dwvar_114850_size=90">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="BEST-EVER NO-SHOW SOCK 3-PACK - Base Cotton&trade; everyday no-show cotton socks, 3-pack" title="BEST-EVER NO-SHOW SOCK 3-PACK - Base Cotton&trade; everyday no-show cotton socks, 3-pack" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114850_1275_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114850_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114850_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114850_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114850_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114850_1275_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114850_1275_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="114850001" data-master="114850" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="114850001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/best-ever-no-show-sock-3-pack/114850.html?dwvar_114850_color=1275&amp;dwvar_114850_size=90" title="BEST-EVER NO-SHOW SOCK 3-PACK">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="114850001 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/best-ever-no-show-sock-3-pack/114850.html?dwvar_114850_color=1275&amp;dwvar_114850_size=90" title="best-ever no-show sock 3-pack">best-ever no-show sock 3-pack<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$18</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="114850001" data-master="114850" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 114850001 lh-solid" href="https://www.aritzia.com/en/product/best-ever-no-show-sock-3-pack/114850.html?dwvar_114850_color=1275&amp;dwvar_114850_size=90" title="9 Colours">
9 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="42dd8237c94bfa284b93ff1ce7" data-itemid="114988001" data-mpid="114988" data-color="19451" data-pkey="114988-19451" data-colors="8" data-master="{&quot;name&quot;:&quot;BEST-EVER CREW SOCK 3-PACK&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;114988&quot;,&quot;category&quot;:&quot;AWN1S06&quot;,&quot;size&quot;:&quot;XS/S&quot;,&quot;color&quot;:&quot;HEATHER CLOUD WHITE&quot;,&quot;department&quot;:&quot;N06&quot;,&quot;price&quot;:&quot;20.00&quot;,&quot;listprice&quot;:&quot;20.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;762&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="BEST-EVER CREW SOCK 3-PACK" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for BEST-EVER CREW SOCK 3-PACK " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/best-ever-crew-sock-3-pack/114988.html?dwvar_114988_color=1275&amp;dwvar_114988_size=90">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="BEST-EVER CREW SOCK 3-PACK - Base Cotton&trade; everyday cotton crew socks, 3-pack" title="BEST-EVER CREW SOCK 3-PACK - Base Cotton&trade; everyday cotton crew socks, 3-pack" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114988_1275_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114988_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114988_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114988_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114988_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_n06_114988_1275_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_n06_114988_1275_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="114988001" data-master="114988" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="114988001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/best-ever-crew-sock-3-pack/114988.html?dwvar_114988_color=1275&amp;dwvar_114988_size=90" title="BEST-EVER CREW SOCK 3-PACK">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="114988001 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/best-ever-crew-sock-3-pack/114988.html?dwvar_114988_color=1275&amp;dwvar_114988_size=90" title="best-ever crew sock 3-pack">best-ever crew sock 3-pack<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$20</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="114988001" data-master="114988" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 114988001 lh-solid" href="https://www.aritzia.com/en/product/best-ever-crew-sock-3-pack/114988.html?dwvar_114988_color=1275&amp;dwvar_114988_size=90" title="8 Colours">
8 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="15f6218f0bce13594bbd20dd4a" data-itemid="68755007" data-mpid="68755" data-color="1275" data-pkey="68755-1275" data-colors="16" data-master="{&quot;name&quot;:&quot;BESTHUG&trade; LITTLE RIBBED T-SHIRT&quot;,&quot;brand&quot;:&quot;Sunday Best&quot;,&quot;master&quot;:&quot;68755&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;S&quot;,&quot;color&quot;:&quot;WHITE&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;25.00&quot;,&quot;listprice&quot;:&quot;25.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;769&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="BESTHUG&trade; LITTLE RIBBED T-SHIRT" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for BESTHUG&trade; LITTLE RIBBED T-SHIRT " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/besthug%E2%84%A2-little-ribbed-t-shirt/68755.html?dwvar_68755_color=1274&amp;dwvar_68755_size=3">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="BESTHUG&trade; LITTLE RIBBED T-SHIRT - Fine-ribbed crewneck t-shirt" title="BESTHUG&trade; LITTLE RIBBED T-SHIRT - Fine-ribbed crewneck t-shirt" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_02_a01_68755_1274_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_02_a01_68755_1274_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_02_a01_68755_1274_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_02_a01_68755_1274_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_02_a01_68755_1274_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_02_a01_68755_1274_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_02_a01_68755_1274_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="68755007" data-master="68755" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="68755007 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/besthug%E2%84%A2-little-ribbed-t-shirt/68755.html?dwvar_68755_color=1274&amp;dwvar_68755_size=3" title="BESTHUG&trade; LITTLE RIBBED T-SHIRT">Sunday Best</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="68755007 product-quickview js-quickview-button__done ws-normal overflow-visible" href="https://www.aritzia.com/en/product/besthug%E2%84%A2-little-ribbed-t-shirt/68755.html?dwvar_68755_color=1274&amp;dwvar_68755_size=3" title="BestHug&trade; Little Ribbed T-Shirt">BestHug&trade; Little Ribbed T-Shirt</a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$25</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="68755007" data-master="68755" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 68755007 lh-solid" href="https://www.aritzia.com/en/product/besthug%E2%84%A2-little-ribbed-t-shirt/68755.html?dwvar_68755_color=1274&amp;dwvar_68755_size=3" title="16 Colours">
16 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="cb9410b09ffb4981842b3f1934" data-itemid="104144001" data-mpid="104144" data-color="1274" data-pkey="104144-1274" data-colors="11" data-master="{&quot;name&quot;:&quot;THE SUPER PUFF&trade; NEW MITTEN&quot;,&quot;brand&quot;:&quot;The Super Puff&trade;&quot;,&quot;master&quot;:&quot;104144&quot;,&quot;category&quot;:&quot;AWN1S07&quot;,&quot;size&quot;:&quot;S/M&quot;,&quot;color&quot;:&quot;BLACK&quot;,&quot;department&quot;:&quot;N07&quot;,&quot;price&quot;:&quot;55.00&quot;,&quot;listprice&quot;:&quot;55.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;SFE&quot;,&quot;varbuycode&quot;:&quot;SFECC&quot;,&quot;model&quot;:&quot;762&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:3,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="THE SUPER PUFF&trade; NEW MITTEN" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for THE SUPER PUFF&trade; NEW MITTEN " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/the-super-puff%E2%84%A2-new-mitten/104144.html?dwvar_104144_color=18872&amp;dwvar_104144_size=93">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="THE SUPER PUFF&trade; NEW MITTEN - cliMATTE&trade; goose down puffer mittens" title="THE SUPER PUFF&trade; NEW MITTEN - cliMATTE&trade; goose down puffer mittens" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/f22_18_n07_104144_18872_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/f22_18_n07_104144_18872_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/f22_18_n07_104144_18872_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/f22_18_n07_104144_18872_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/f22_18_n07_104144_18872_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/f22_18_n07_104144_18872_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/f22_18_n07_104144_18872_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="104144001" data-master="104144" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="104144001 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/the-super-puff%E2%84%A2-new-mitten/104144.html?dwvar_104144_color=18872&amp;dwvar_104144_size=93" title="THE SUPER PUFF&trade; NEW MITTEN">The Super Puff&trade;</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="104144001 product-quickview js-quickview-button__done ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/the-super-puff%E2%84%A2-new-mitten/104144.html?dwvar_104144_color=18872&amp;dwvar_104144_size=93" title="the super puff&trade; new mitten">the super puff&trade; new mitten<span class="ttn"> — cliMATTE</span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$55</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="104144001" data-master="104144" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 104144001 lh-solid" href="https://www.aritzia.com/en/product/the-super-puff%E2%84%A2-new-mitten/104144.html?dwvar_104144_color=18872&amp;dwvar_104144_size=93" title="11 Colours">
11 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item" data-ga-creative="product-swiper">
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="3de3bd2e3e5379f1657961d1ee" data-itemid="95025029" data-mpid="95025" data-color="19451" data-pkey="95025-19451" data-colors="14" data-master="{&quot;name&quot;:&quot;HOMESTRETCH&trade; CREW WAIST T-SHIRT&quot;,&quot;brand&quot;:&quot;Tna&quot;,&quot;master&quot;:&quot;95025&quot;,&quot;category&quot;:&quot;AWA1S01&quot;,&quot;size&quot;:&quot;XL&quot;,&quot;color&quot;:&quot;HEATHER CLOUD WHITE&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;25.00&quot;,&quot;listprice&quot;:&quot;25.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;COECC&quot;,&quot;model&quot;:&quot;769&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:2,&quot;specialorderdate&quot;:&quot;&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;unavailable&quot;,&quot;name&quot;:&quot;unavailable&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;unavailable&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="HOMESTRETCH&trade; CREW WAIST T-SHIRT" class="relative db js-plp-hash product-quickview js-quickview-button__done" aria-label="View full details for HOMESTRETCH&trade; CREW WAIST T-SHIRT " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_b" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-waist-t-shirt/95025.html?dwvar_95025_color=1275&amp;dwvar_95025_size=55">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="HOMESTRETCH&trade; CREW WAIST T-SHIRT - Stretch rib cotton crewneck t-shirt" title="HOMESTRETCH&trade; CREW WAIST T-SHIRT - Stretch rib cotton crewneck t-shirt" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_95025_1275_on_b.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_95025_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_95025_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_95025_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_95025_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_03_a01_95025_1275_on_b.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_03_a01_95025_1275_on_b.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="95025029" data-master="95025" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2">
<h6>
<a class="95025029 product-quickview js-quickview-button__done overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-waist-t-shirt/95025.html?dwvar_95025_color=1275&amp;dwvar_95025_size=55" title="HOMESTRETCH&trade; CREW WAIST T-SHIRT">Tna</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="95025029 product-quickview js-quickview-button__done ws-normal overflow-visible" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-waist-t-shirt/95025.html?dwvar_95025_color=1275&amp;dwvar_95025_size=55" title="HomeStretch&trade; Crew Waist T-Shirt">HomeStretch&trade; Crew Waist T-Shirt</a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$25</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="95025029" data-master="95025" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
<div class="ar-product-plp-label js-product-plp-label pt1 ">
<a class="fn1 95025029 lh-solid" href="https://www.aritzia.com/en/product/homestretch%E2%84%A2-crew-waist-t-shirt/95025.html?dwvar_95025_color=1275&amp;dwvar_95025_size=55" title="14 Colours">
14 Colours
</a>
</div>
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</div>
<div class="ar-swiper-item ar-swiper-item-end">
<div><a href="/en/clothing/accessories/gifts-under-35">See all gifts-under-35</a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="lh-solid ph5-ns">
</div>
</div>
</div>
<div class="ph5-ns">
<a class="js-checkout-minibag ph2 w-100 tc pv3 f1 white bg-black border-box db dn-ns" href="https://www.aritzia.com/en/checkout/login" title="Checkout" data-selid="minicart-my-bag-checkout" data-location="view-bag-nav-global">
Checkout
</a>
</div>
</div>
<div class="absolute bg-white f0 dn-ns w-100 h-100" style="padding-top: 1px;" data-selid="minicart-overlay">
<div class="ar-minicart__content-wrapper br bl b--light-gray pt1 pt0-ns">
<div class="ml3 pt3 pb3 pb0-ns pt2-ns mr2 pr1 cf">
<span class="db dn-ns fl f1">My Bag</span>
</div>
</div>
<span class="ar-minicart__empty-message f1 ph3 absolute db tc w-100 border-box">
You haven't put any items in your bag.
</span>
</div>
</div>
</div>
</div>
</div>

<div class="ar-header__panel ar-header__panel--right js-header__panel--right js-header__panel fixed absolute--fill flex z-2 justify-end" data-panel-id="wishlist">
<div class="ar-header__panel-content js-header__panel-content bg-white border-box ar-minilist-panel__content">
<div class="ar-header__scroll flex flex-wrap relative overflow-auto other">
</div>
<div class="wishlist-spinner"></div>
</div>
</div>

<div class="ar-header__panel ar-header__panel--right js-header__panel--right js-header__panel fixed absolute--fill flex z-2 justify-end" data-panel-id="search">
<div class="ar-header__panel-content js-header__panel-content ar-header__scroll bg-white border-box overflow-auto relative">
<span class="js-header__panel-bg db bg-white fixed top-0 right-0 z-999"></span>
<div class="flex flex-wrap relative">
<div class="ar-header__search-results w-100">
<ul class="pl3 pl0-ns pb6-5 pb0-ns ar-suggestion-results__suggested js-suggestion-results__suggested">
<li class="js-header__panel-spacer ttu mb3">Suggested</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/effortless-pant-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="effortless-pant-9" data-ga-parent="Suggested" data-ga-cat="the effortless pant&trade;">
The Effortless Pant&trade;
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/suiting-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="Suiting-9" data-ga-parent="Suggested" data-ga-cat="suiting">
Suiting
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/cargo-parachute-shop-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="cargo-parachute-shop-9" data-ga-parent="Suggested" data-ga-cat="cargo &amp; parachute">
Cargo &amp; Parachute
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/sweatsuits-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="sweatsuits-9" data-ga-parent="Suggested" data-ga-cat="sweatsuits">
Sweatsuits
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/activewear-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="activewear-9" data-ga-parent="Suggested" data-ga-cat="activewear">
Activewear
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/sculpt-knit-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="sculpt-knit-9" data-ga-parent="Suggested" data-ga-cat="sculpt knit">
Sculpt Knit
</a>
</li>
<li class="pv2 pv0-ns mv1 mb2-ns ar-searchterm js-searchterm">
<a data-link-type="nav-search" href="https://www.aritzia.com/en/suggested/contour-9" class="f1 relative db ar-searchterm-value js-searchterm-value js-header__trigger--ga-link" data-cat-id="contour-9" data-ga-parent="Suggested" data-ga-cat="contour">
Contour
</a>
</li>
</ul>
</div>
</div>
</div>
</div>

<div class="ar-header__panel ar-header__panel--right js-header__panel--right js-header__panel fixed absolute--fill flex z-2 justify-end" data-panel-id="account">
<div class="ar-header__panel-content js-header__panel-content bg-white border-box flex">
<div class="ar-header__scroll flex flex-wrap pb5 relative overflow-auto w-100 content-start">
<div class="content-asset">
<ul class="level-2">
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/mylist" data-link-type="nav-global">My List</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/order-history" data-link-type="nav-global">Order History</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/order-tracking" data-link-type="nav-global">Order Tracking</a></li>
<li class="ar-mobile-nav__child-subheader fn1 mb2-ns pb1-ns"><span class="db mt4 ttu black-70">Manage</span></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/edit-profile" data-link-type="nav-global">Profile</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/preferences" data-link-type="nav-global">Preferences</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/addresses" data-link-type="nav-global">Address Book</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://www.aritzia.com/en/my-account/payment" data-link-type="nav-global">Payment Cards</a></li>

</ul>
</div> 
<div class="w-100">
<ul>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns"><a href="https://aritzia.ca1.qualtrics.com/jfe/form/SV_8C88e9gIyAlyjmS?Site=CA_EN" data-link-type="get-help-nav" target="_blank">Send Us Feedback</a></li>
<li class="pv2 pv0-ns db f2 f1-ns mv1 mt0-ns mb3-ns">
<a href="https://airtable.com/shrNqPX9R03BqVrma" data-link-type="research-community-nav" target="_blank">Aritzia Research Community</a>
</li>
</ul>
</div>
<div class="w-100">
<a href="/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Login-Logout" class="js-header__logout mt4 dib f1" data-link-type="nav-global">
Sign Out
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</header>
</div>
<div class="js-template" data-show-view-modes="false">
<div role="region" aria-labelledby="ar-search-title__label" class="container_30 clearfix center mw-93 mw-100-ns">
<div class="grid_28 prefix_1 suffix_1">
<div class="cf f0 mt3 mt0-ns mb4 mb4-5-ns">
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategory-active_data.js) */
dw.ac.applyContext({category: "contour-clothing"});
/* ]]> */
// -->
</script>
<div class="ar-category-breadcrumbs js-ar-category-breadcrumbs pt2 db relative z-2">
<div class="ar-category-breadcrumbs__category-title js-category-breadcrumbs__category-title js-subnav__category-title dn">
<span class="ar-category-breadcrumbs__category-title-text js-category-breadcrumbs__category-title-text f0"></span>
<span class="js-category-breadcrumbs__category-title-arrow rotate-90 ar-arrow-icon svgn2 dn"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</div>
<ul class="ar-category-breadcrumbs__list list mt0 mb0 pl0 flex flex-wrap" data-selid="pdp-breadcrumbs">
<li class="ar-category-breadcrumbs__item nowrap flex-auto flex-grow-0 flex-shrink-0" data-selid="pdp-breadcrumb-0 ">
<span class="ar-category-breadcrumbs__link dib mr1 mr2-ns"><a href="https://www.aritzia.com/en/shop-by" title="Shop By">Shop By&nbsp;</a><span class="ml1-ns">&mdash;</span></span>
</li>
<li class="ar-category-breadcrumbs__item nowrap flex-auto flex-grow-0 flex-shrink-0" data-selid="pdp-breadcrumb-1 ">
<span class="ar-category-breadcrumbs__link dib mr1 mr2-ns"><a href="https://www.aritzia.com/en/shop-by/shapewear-clothing" title="Body Shaping">Body Shaping&nbsp;</a><span class="ml1-ns">&mdash;</span></span>
</li>
<li class="ar-category-breadcrumbs__item nowrap flex-auto flex-grow-0 flex-shrink-0" data-selid="pdp-breadcrumb-2 ">
<span class="ar-category-breadcrumbs__link js-category-breadcrumbs__link--last dib">Contour</span>
<span class="ar-search-refined__count js-search-refined__count relative">116</span>
</li>
</ul>
<div class="ar-category-breadcrumbs__page-title df">
<div class="ar-search-header cf">
<div class="ar-search-title " data-refinement-title-enabled="false">
<h1 id="ar-search-title__label" class="js-search-title f0" data-display-name="Contour" data-cat-id="contour-clothing">
Contour Clothing
</h1>
</div>
</div>
</div>
<script type="application/ld+json">
                {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{"@type": "ListItem","position": 1,"item": {"@id": "https://www.aritzia.com/en/shop-by","name": "Shop By"}},{"@type": "ListItem","position": 2,"item": {"@id": "https://www.aritzia.com/en/shop-by/shapewear-clothing","name": "Body Shaping"}},{"@type": "ListItem","position": 3,"item": {"@id": "https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing","name": "Contour"}}]
                }
            </script>
</div>
</div>
<div class="ar-category-header ga-promotions">
<h2 class="ar-category-header__title non-seasonal-geo f2 f3-m f4-l w-80-ns">
Contour — Our iconic second-skin silhouettes that smooth, shape and support. Nothing feels like Contour, except Contour.
</h2>
</div>
</div>
</div>
<div class="cf" role="complementary" aria-label="cat-banner-full">
<div id="cat-banner-full" class="ga-promotions">
</div>
</div>
<div role="complementary" aria-label="plp-visual-tab-swiper" class="plp-visual-swiper ga-promotions relative center ar-swiper-tab js-swiper-tab  mb4 mb4-5-ns" data-promoname="visual-swiper">
<div class="ar-visual-swiper-tab__container relative ml0 mt3 mb2 flex-row-reverse justify-between">
<div class="ar-swiper-tab__tabs js-swiper-tab__tabs w-100 center-ns overflow-x-scroll overflow-x-hidden-ns">
<div class="ar-swiper w-100">
<div class="ar-swiper-buttons dn">
<div class="ar-swiper-next"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
<div class="ar-swiper-prev"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
</div>
<ul class="ar-swiper-scroll">
<li class="ar-swiper-item">
<div class="f0 pv1 ph2 mr2 true-black pointer ar-swiper-tab__tab js-swiper-tab__tab bg-black-10 ar-swiper-tab__tab--active js-swiper-tab__tab--active" data-swiper="fabric-spacer-shapewear">
Fabric
</div>
</li>
<li class="ar-swiper-item">
<div class="f0 pv1 ph2 mr2 true-black pointer ar-swiper-tab__tab js-swiper-tab__tab " data-swiper="category-spacer-shapewear">
Categories
</div>
</li>
</ul>
</div>
</div>
</div>
<div class="ar-visual-swiper ar-visual-swiper--large js-visual-swiper--large js-visual-swiper ar-tabbed-swiper js-swiper-tab__swiper mb3-ns " data-swiper="fabric-spacer-shapewear">
<div class="ar-swiper js-swiper">
<div class="ar-swiper-buttons dn">
<div class="ar-swiper-next"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
<div class="ar-swiper-prev"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
</div>
<div class="ar-swiper-scroll js-swiper-scroll ar-swiper-lazyload pb0 pb2-ns">
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  ar-swiper-item--first-visible" data-ga-creative="visual-swiper-tab-fabric">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="shapewear-clothing">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24096_merch?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24096_merch?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24096_merch?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24096_merch?wid=900 900w" alt="Body Shaping" title="Body Shaping" sizes="(min-width : 1025px) 22vw, (min-width : 768px and max-width : 1024px) 20vw, 40vw" />
</span>
<div class="pa2">
<div class="flex justify-between items-center ph1">
<span class="db f0 f1-ns ws-normal">All Body Shaping</span>
<svg class="dn-ns" width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: rotate(-180deg);">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g stroke="#000000">
<polyline transform="translate(4.000697, 7.750000) rotate(90.000000) translate(-4.000697, -7.750000) " points="-3.49930312 4.05821648 4.00069688 11.4417835 11.5006969 4.05821648"></polyline>
<line x1="0.75" y1="7.75" x2="19.75" y2="7.75"></line>
</g>
</g>
</svg>
</div>
</div>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-fabric">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="contour-clothing">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24231_merch?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24231_merch?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24231_merch?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24231_merch?wid=900 900w" alt="Contour" title="Contour" sizes="(min-width : 1025px) 22vw, (min-width : 768px and max-width : 1024px) 20vw, 40vw" />
</span>
<div class="pa2">
<div class="flex justify-between items-center ph1">
<span class="db f0 f1-ns ws-normal">Contour</span>
</div>
</div>
<div class="ph2 pb2">
<span class="dib ph1 f0">
Luxe, ultra-flattering fabric<br>coveted for its smoothing<br>effect and second-skin feel.
</span>
</div>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-fabric">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/sculpt-knit-clothing" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="sculpt-knit-clothing">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24198_merch?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24198_merch?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24198_merch?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24198_merch?wid=900 900w" alt="Sculpt Knit" title="Sculpt Knit" sizes="(min-width : 1025px) 22vw, (min-width : 768px and max-width : 1024px) 20vw, 40vw" />
</span>
<div class="pa2">
<div class="flex justify-between items-center ph1">
<span class="db f0 f1-ns ws-normal">Sculpt Knit</span>
<svg class="dn-ns" width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: rotate(-180deg);">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g stroke="#000000">
<polyline transform="translate(4.000697, 7.750000) rotate(90.000000) translate(-4.000697, -7.750000) " points="-3.49930312 4.05821648 4.00069688 11.4417835 11.5006969 4.05821648"></polyline>
<line x1="0.75" y1="7.75" x2="19.75" y2="7.75"></line>
</g>
</g>
</svg>
</div>
</div>
<div class="ph2 pb2">
<span class="dib ph1 f0">
Our signature figure-enhancing yarn.<br>Holds you in all the right places<br>to shape and sculpt your form.
</span>
</div>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-fabric">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/seamless-clothes" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="seamless-clothes">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24113_merch?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24113_merch?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24113_merch?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24113_merch?wid=900 900w" alt="Seamless" title="Seamless" sizes="(min-width : 1025px) 22vw, (min-width : 768px and max-width : 1024px) 20vw, 40vw" />
</span>
<div class="pa2">
<div class="flex justify-between items-center ph1">
<span class="db f0 f1-ns ws-normal">Seamless</span>
<svg class="dn-ns" width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: rotate(-180deg);">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g stroke="#000000">
<polyline transform="translate(4.000697, 7.750000) rotate(90.000000) translate(-4.000697, -7.750000) " points="-3.49930312 4.05821648 4.00069688 11.4417835 11.5006969 4.05821648"></polyline>
<line x1="0.75" y1="7.75" x2="19.75" y2="7.75"></line>
</g>
</g>
</svg>
</div>
</div>
<div class="ph2 pb2">
<span class="dib ph1 f0">
Our smooth-look, smooth-feel<br>fabrics crafted for<br>unbeatable comfort.
</span>
</div>
</a>
</div>
</div>
</div>
</div>
<div class="ar-visual-swiper ar-visual-swiper--large js-visual-swiper--large js-visual-swiper ar-tabbed-swiper js-swiper-tab__swiper mb3-ns dn" data-swiper="category-spacer-shapewear">
<div class="ar-swiper js-swiper">
<div class="ar-swiper-buttons dn">
<div class="ar-swiper-next"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
<div class="ar-swiper-prev"><a><svg width="32px" height="62px" viewBox="0 0 32 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M-20.9973016,52.9126984 C-21.273444,52.9126984 -21.4973016,52.6888407 -21.4973016,52.4126984 C-21.4973016,52.136556 -21.273444,51.9126984 -20.9973016,51.9126984 L21.5026984,51.9126984 L21.5026984,9.41269837 C21.5026984,9.136556 21.726556,8.91269837 22.0026984,8.91269837 C22.2788407,8.91269837 22.5026984,9.136556 22.5026984,9.41269837 L22.5026984,52.4126984 L22.5026984,52.4126984 C22.5026984,52.6581583 22.3258232,52.8623067 22.092574,52.9046427 L22.0026984,52.9126984 L22.0026984,52.9126984 L-20.9973016,52.9126984 Z" fill="#000000" transform="translate(0.502698, 30.912698) rotate(-45.000000) translate(-0.502698, -30.912698) "></path>
</g>
</svg></a></div>
</div>
<div class="ar-swiper-scroll js-swiper-scroll ar-swiper-lazyload pb0 pb2-ns">
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  ar-swiper-item--first-visible" data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="shapewear-clothing">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24096_merch?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24096_merch?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24096_merch?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/240118_NAV_BestBody_KL_B24096_merch?wid=900 900w" alt="Body Shaping" title="Body Shaping" sizes="(min-width : 1025px) 22vw, (min-width : 768px and max-width : 1024px) 20vw, 40vw" />
</span>
<div class="pa2">
<div class="flex justify-between items-center ph1">
<span class="db f0 f1-ns ws-normal">All Body Shaping</span>
<svg class="dn-ns" width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: rotate(-180deg);">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g stroke="#000000">
<polyline transform="translate(4.000697, 7.750000) rotate(90.000000) translate(-4.000697, -7.750000) " points="-3.49930312 4.05821648 4.00069688 11.4417835 11.5006969 4.05821648"></polyline>
<line x1="0.75" y1="7.75" x2="19.75" y2="7.75"></line>
</g>
</g>
</svg>
</div>
</div>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/tops" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="tops">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/s24_02_a01_105194_1274_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/s24_02_a01_105194_1274_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/s24_02_a01_105194_1274_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/s24_02_a01_105194_1274_off_a?wid=900 900w" alt="Tops" title="Tops" sizes="(min-width : 1025px) 22vw, (min-width : 768px and max-width : 1024px) 20vw, 40vw" />
</span>
<div class="pa2">
<div class="flex justify-between items-center ph1">
<span class="db f0 f1-ns ws-normal">Tops</span>
<svg class="dn-ns" width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: rotate(-180deg);">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g stroke="#000000">
<polyline transform="translate(4.000697, 7.750000) rotate(90.000000) translate(-4.000697, -7.750000) " points="-3.49930312 4.05821648 4.00069688 11.4417835 11.5006969 4.05821648"></polyline>
<line x1="0.75" y1="7.75" x2="19.75" y2="7.75"></line>
</g>
</g>
</svg>
</div>
</div>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/shapewear-bodysuits" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="shapewear-bodysuits">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/s24_99_a28_118758_1274_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/s24_99_a28_118758_1274_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/s24_99_a28_118758_1274_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/s24_99_a28_118758_1274_off_a?wid=900 900w" alt="Bodysuits" title="Bodysuits" sizes="(min-width : 1025px) 22vw, (min-width : 768px and max-width : 1024px) 20vw, 40vw" />
</span>
<div class="pa2">
<div class="flex justify-between items-center ph1">
<span class="db f0 f1-ns ws-normal">Bodysuits</span>
<svg class="dn-ns" width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: rotate(-180deg);">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g stroke="#000000">
<polyline transform="translate(4.000697, 7.750000) rotate(90.000000) translate(-4.000697, -7.750000) " points="-3.49930312 4.05821648 4.00069688 11.4417835 11.5006969 4.05821648"></polyline>
<line x1="0.75" y1="7.75" x2="19.75" y2="7.75"></line>
</g>
</g>
</svg>
</div>
</div>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/body-shaping-dresses" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="body-shaping-dresses">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/s24_99_a08_118308_1274_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/s24_99_a08_118308_1274_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/s24_99_a08_118308_1274_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/s24_99_a08_118308_1274_off_a?wid=900 900w" alt="Dresses &amp; Skirts" title="Dresses &amp; Skirts" sizes="(min-width : 1025px) 22vw, (min-width : 768px and max-width : 1024px) 20vw, 40vw" />
</span>
<div class="pa2">
<div class="flex justify-between items-center ph1">
<span class="db f0 f1-ns ws-normal">Dresses & Skirts</span>
<svg class="dn-ns" width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: rotate(-180deg);">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g stroke="#000000">
<polyline transform="translate(4.000697, 7.750000) rotate(90.000000) translate(-4.000697, -7.750000) " points="-3.49930312 4.05821648 4.00069688 11.4417835 11.5006969 4.05821648"></polyline>
<line x1="0.75" y1="7.75" x2="19.75" y2="7.75"></line>
</g>
</g>
</svg>
</div>
</div>
</a>
</div>
<div class="ar-swiper-item js-swiper-item mr2-ns mr1 w-40 w-20-m w-10-l  " data-ga-creative="visual-swiper-tab-categories">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/intimates-shapewear" class="db relative js-visual-swiper__link ar-visual-swiper__link" data-cat-id="intimates-shapewear">
<span class="ar-visual-swiper__img-wrapper js-visual-swiper__img-wrapper relative db border-box">
<img class="w-100 db lazy" src="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600" srcset="//aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=300 300w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=600 600w, //aritzia.scene7.com/is/image/Aritzia/f7f7f7?wid=900 900w" data-original="https://aritzia.scene7.com/is/image/Aritzia/f22_15_a09_84848_1274_off_a?wid=600" data-srcset="https://aritzia.scene7.com/is/image/Aritzia/f22_15_a09_84848_1274_off_a?wid=300 300w, https://aritzia.scene7.com/is/image/Aritzia/f22_15_a09_84848_1274_off_a?wid=600 600w, https://aritzia.scene7.com/is/image/Aritzia/f22_15_a09_84848_1274_off_a?wid=900 900w" alt="Intimates" title="Intimates" sizes="(min-width : 1025px) 22vw, (min-width : 768px and max-width : 1024px) 20vw, 40vw" />
</span>
<div class="pa2">
<div class="flex justify-between items-center ph1">
<span class="db f0 f1-ns ws-normal">Intimates</span>
<svg class="dn-ns" width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="transform: rotate(-180deg);">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g stroke="#000000">
<polyline transform="translate(4.000697, 7.750000) rotate(90.000000) translate(-4.000697, -7.750000) " points="-3.49930312 4.05821648 4.00069688 11.4417835 11.5006969 4.05821648"></polyline>
<line x1="0.75" y1="7.75" x2="19.75" y2="7.75"></line>
</g>
</g>
</svg>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
<div id="main" role="main" class="container_30 clearfix product-search-result--full-hits">
<div id="ar-refinement-panel" class="ar-panel js-panel ar-refinement-panel js-refinement-panel fixed absolute--fill df justify-end z-9999 w-100">
<div class="ar-panel__content js-panel__content ar-refinement-panel__content bg-white border-box df flex-column relative w-100">
<div class="ar-refinement-panel__header flex flex-column justify-center flex-shrink-0 ph3 ph4-ns bb b--black-10">
<div class="ph3 pv3-ns pt3 pb2">
<div class="flex items-center mb0">
<span class="ar-refinement-panel__header-title flex-grow-1">
No Filters Selected
</span>
<div class="ar-refinement-panel__header-actions">
<a href role="button" class="js-panel__content-close underline" data-selid="filters-done">
Done
</a>
</div>
</div>
<div class="ar-search-refined js-search-refined center df-ns justify-between">
<div class="ar-search-refined__container w-60-l df">
<div class="flex flex-wrap items-center">
<div class="items-baseline relative ar-swiper--fade ar-search-header__promoted-filters ar-search-header__promoted-filters--none">
<ul class="flex ar-search-header__promoted-filters-list mt1 mt0-ns overflow-auto">
<li class="mr3 nowrap js-search-header__promoted-filter dn-ns dib" data-filter-id="sort" data-selected-count="0" data-filter-display>
<button class="ar-search-header__promoted-filter-link ar-search-header__promoted-filter-link--underline bg-transparent bn black pa0 tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="sort - expand">
Sort
</button>
</li>
<li class="mb1 mr3 mr1-ns nowrap js-search-header__promoted-filter ar-search-header__promoted-filter--active" data-filter-id="size" data-selected-count="0" data-filter-display="null">
<button class="ar-search-header__promoted-filter-link bg-transparent underline no-underline-ns bn ba-ns black pa0 ph2-ns tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="size - expand">
Size
</button>
</li>
<li class="mb1 mr3 mr1-ns nowrap js-search-header__promoted-filter " data-filter-id="refinementcolor" data-selected-count="0" data-filter-display="null">
<button class="ar-search-header__promoted-filter-link bg-transparent underline no-underline-ns bn ba-ns black pa0 ph2-ns tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="refinementColor - expand">
Colour
</button>
</li>
<li class="mb1 mr3 mr1-ns nowrap js-search-header__promoted-filter " data-filter-id="subdepartment" data-selected-count="0" data-filter-display="null">
<button class="ar-search-header__promoted-filter-link bg-transparent underline no-underline-ns bn ba-ns black pa0 ph2-ns tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="subDepartment - expand">
Product Type
</button>
</li>
<li class="mr1 nowrap">
<button class="ar-search-header__promoted-filter-link js-search-header__all-filters js-panel-trigger js-open-panel bg-transparent bn ba-ns black pa0 ph2-ns tl" data-selid="plp-filter" data-copy="All Filters" tabindex="0" data-ec="plp" data-ea="refine" data-el="open">
<span class="underline no-underline-ns">
All Filters
</span>
</button>
</li>
</ul>
</div>
</div>
</div>

<div class="js-sortby-options-container ar-sortby-options-container dib-ns dn" data-accordion-id="sort">
<button class="button-clean ar-sortby-options__header flex pa0 items-center pointer" data-ec="plp" data-ea="filter" data-el="sort - collapse">
<span class="pr1">
Sort by <span class="underline">Recommended</span>
</span>
<span class="js-sortby__arrow rotate-90 ar-arrow-icon svgn2 dn dib-ns">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</button>
<div class="js-sortby-options-content ar-sortby-options-content pv2 dn">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Aritzia-Department-Sort-Steady-State" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="sr-best-match" data-refinement-id="sr-best-match">
<span class="ar-refinement-panel__option-title db ar-sortby-option ar-sortby-option__active">
Recommended
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Price-Low-To-High" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="sr-price-low-to-high" data-refinement-id="sr-price-low-to-high">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Price: Low to High
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Price-High-To-Low" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="sr-price-high-to-low" data-refinement-id="sr-price-high-to-low">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Price: High to Low
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Sort%20by%20Newest%20-07%2F07%2F22" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="Sort By New" data-refinement-id="Sort By New">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Newest
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Sort%20by%20Top%20Rated" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="top-rated" data-refinement-id="top-rated">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Top Rated
</span>
</a>
</div>
</div>

</div>
</div>
</div>
<div class="ar-refinement-panel__scroll js-sheet__scroll flex-grow-1 overflow-auto">
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group db dn-ns ph3 bb b--black-10" data-accordion-id="sort">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="sort - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Sort
</span>
<span class="f0 mr2">
Recommended
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap flex-column ph4-ns ph3 pb2">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Aritzia-Department-Sort-Steady-State" class="ar-refinement-panel__option js-refinement-panel__option flex mb3" title data-srule="sr-best-match" data-refinement-id="sr-best-match">
<span class="ar-refinement-radio ar-refinement-radio--checked mr2 db"></span>
<span class="ar-refinement-panel__option-title db">
Recommended
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Price-Low-To-High" class="ar-refinement-panel__option js-refinement-panel__option flex mb3" title data-srule="sr-price-low-to-high" data-refinement-id="sr-price-low-to-high">
<span class="ar-refinement-radio ar-refinement-radio--unchecked mr2 db"></span>
<span class="ar-refinement-panel__option-title db">
Price: Low to High
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Price-High-To-Low" class="ar-refinement-panel__option js-refinement-panel__option flex mb3" title data-srule="sr-price-high-to-low" data-refinement-id="sr-price-high-to-low">
<span class="ar-refinement-radio ar-refinement-radio--unchecked mr2 db"></span>
<span class="ar-refinement-panel__option-title db">
Price: High to Low
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Sort%20by%20Newest%20-07%2F07%2F22" class="ar-refinement-panel__option js-refinement-panel__option flex mb3" title data-srule="Sort By New" data-refinement-id="Sort By New">
<span class="ar-refinement-radio ar-refinement-radio--unchecked mr2 db"></span>
<span class="ar-refinement-panel__option-title db">
Newest
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Sort%20by%20Top%20Rated" class="ar-refinement-panel__option js-refinement-panel__option flex mb3" title data-srule="top-rated" data-refinement-id="top-rated">
<span class="ar-refinement-radio ar-refinement-radio--unchecked mr2 db"></span>
<span class="ar-refinement-panel__option-title db">
Top Rated
</span>
</a>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="onlineexclusive">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="online exclusive - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Online Exclusive
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-column">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=onlineExclusive&amp;prefv1=Online%20Exclusive" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="onlineExclusive" data-refinement-id="online exclusive" title="Online Exclusive">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Online Exclusive
</span>
</div>
</a>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="availability">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="availability - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Availability
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-row">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=readyToShip&amp;prefv1=Ready%20to%20Ship" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="readyToShip" data-refinement-id="ready to ship" title="Ready to Ship">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Ready to Ship
</span>
<span class="ar-refinement-panel__option-description f0 db">
Hides special orders and sold out items.
</span>
</div>
</a>
<div class="js-refinement-panel__option-msg w-100">
<div class="bg-lightest-gray black-60 pa2 mb3 relative df items-center">
Select a size filter to unlock this feature
<div class="ar-tooltip ar-tooltip--refinementpanel js-tooltip ml1">
<div class="ar-tooltip-content">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g>
<circle fill="#D8D8D8" cx="8" cy="8" r="8" />
<path class="ar-tooltip-icon__question" d="M8.5376,9.3456 L8.5376,9.1064 C8.5376,7.5672 10.3992,7.7856 10.3992,5.924 C10.3992,4.7384 9.5464,4 8.2256,4 C6.9152,4 6.0208,4.8424 6,6.4024 L6.832,6.4024 C6.9152,5.2792 7.404,4.6968 8.236,4.6968 C9.068,4.6968 9.5776,5.2168 9.5672,5.924 C9.5464,7.328 7.768,7.4944 7.768,9.044 L7.768,9.3456 L8.5376,9.3456 Z M8.704,11.228 L8.704,10.1048 L7.6016,10.1048 L7.6016,11.228 L8.704,11.228 Z" fill-opacity="0.6" fill="#000000" fill-rule="nonzero" />
</g>
</g>
</svg>
</div>
<div class="ar-tooltip-chevron"></div>
<div class="ar-tooltip-popup ar-tooltip-popup--full-width">
<span class="js-tooltip-popup-close ar-tooltip-popup-close absolute right-0 top-0 dn-l svg--light svgn1 pa2">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</span>
<div class="f0 white mb0 pr5 pr0-ns">
Select at least one size filter to unlock this feature
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="size">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="size - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Size
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-row">
<span class="ar-refinement-panel__option-title js-refinement-panel__option-title dn mb2">
Clothing
</span>
<div class="w-100 flex flex-wrap gp2 mb3-5">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=size&amp;prefv1=2XS" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="2xs" title="2XS" data-ga-attribute>
2XS
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=size&amp;prefv1=XS" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="xs" title="XS" data-ga-attribute>
XS
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=size&amp;prefv1=S" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="s" title="S" data-ga-attribute>
S
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=size&amp;prefv1=M" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="m" title="M" data-ga-attribute>
M
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=size&amp;prefv1=L" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="l" title="L" data-ga-attribute>
L
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=size&amp;prefv1=XL" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="xl" title="XL" data-ga-attribute>
XL
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=size&amp;prefv1=2XL" class="ar-refinement-panel__option js-refinement-panel__option ar-refinement-panel__option--size js-refinement-panel__option--size flex w3 ba b--black-60 items-center justify-center f0 tc pt0-5-ns" data-filter-type="clothing" data-refinement-id="2xl" title="2XL" data-ga-attribute>
2XL
</a>
</div>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="refinementcolor">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="colour - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Colour
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-column">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/black2" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="refinementColor" data-refinement-id="black" title="Black">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<img src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" data-original="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw1de942eb/aritzia/filters/color/Black.svg" class="lazy ar-refinement-panel__color-icon mr2" alt="Black" />
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Black
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/blue2" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="refinementColor" data-refinement-id="blue" title="Blue">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<img src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" data-original="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dwcb3a925d/aritzia/filters/color/Blue.svg" class="lazy ar-refinement-panel__color-icon mr2" alt="Blue" />
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Blue
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/brown2" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="refinementColor" data-refinement-id="brown" title="Brown">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<img src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" data-original="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw0a0ca564/aritzia/filters/color/Brown.svg" class="lazy ar-refinement-panel__color-icon mr2" alt="Brown" />
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Brown
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/green2" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="refinementColor" data-refinement-id="green" title="Green">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<img src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" data-original="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw9714026b/aritzia/filters/color/Green.svg" class="lazy ar-refinement-panel__color-icon mr2" alt="Green" />
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Green
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/grey2" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="refinementColor" data-refinement-id="grey" title="Grey">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<img src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" data-original="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw6e9b5a9b/aritzia/filters/color/Grey.svg" class="lazy ar-refinement-panel__color-icon mr2" alt="Grey" />
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Grey
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/pink2" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="refinementColor" data-refinement-id="pink" title="Pink">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<img src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" data-original="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw51131154/aritzia/filters/color/Pink.svg" class="lazy ar-refinement-panel__color-icon mr2" alt="Pink" />
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Pink
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/purple2" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="refinementColor" data-refinement-id="purple" title="Purple">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<img src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" data-original="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw9865a357/aritzia/filters/color/Purple.svg" class="lazy ar-refinement-panel__color-icon mr2" alt="Purple" />
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Purple
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/red2" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="refinementColor" data-refinement-id="red" title="Red">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<img src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" data-original="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw946ad75b/aritzia/filters/color/Red.svg" class="lazy ar-refinement-panel__color-icon mr2" alt="Red" />
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Red
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/tan2" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="refinementColor" data-refinement-id="tan" title="Tan">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<img src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" data-original="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dwdd99a429/aritzia/filters/color/Tan.svg" class="lazy ar-refinement-panel__color-icon mr2" alt="Tan" />
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Tan
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/white2" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="refinementColor" data-refinement-id="white" title="White">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<img src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" data-original="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw7a111825/aritzia/filters/color/White.svg" class="lazy ar-refinement-panel__color-icon mr2" alt="White" />
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
White
</span>
</div>
</a>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="print">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="print - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Print
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-column">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing/animal" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="print" data-refinement-id="animal" title="Animal">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Animal
</span>
</div>
</a>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="style">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="style - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Style
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-column">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=style&amp;prefv1=Crewneck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="style" data-refinement-id="crewneck" title="Crewneck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Crewneck
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=style&amp;prefv1=Halter%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="style" data-refinement-id="halter neck" title="Halter Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Halter Neck
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=style&amp;prefv1=High%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="style" data-refinement-id="high neck" title="High Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
High Neck
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=style&amp;prefv1=One%20Strap" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="style" data-refinement-id="one strap" title="One Strap">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
One Strap
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=style&amp;prefv1=Polo" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="style" data-refinement-id="polo" title="Polo">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Polo
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=style&amp;prefv1=Scoopneck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="style" data-refinement-id="scoopneck" title="Scoopneck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Scoopneck
</span>
</div>
</a>
<div id="more-style-refinements-panel" aria-labelledby="more-style-refinements-btn" class="js-refinement-panel__option-content__truncated" hidden>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=style&amp;prefv1=Square%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="style" data-refinement-id="square neck" title="Square Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Square Neck
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=style&amp;prefv1=Strapless" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="style" data-refinement-id="strapless" title="Strapless">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Strapless
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=style&amp;prefv1=Sweetheart%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="style" data-refinement-id="sweetheart neck" title="Sweetheart Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Sweetheart Neck
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=style&amp;prefv1=V%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="style" data-refinement-id="v neck" title="V Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
V Neck
</span>
</div>
</a>
</div>
<button id="more-style-refinements-btn" class="js-refinement-panel__option-content__truncated-btn js-refinement-panel__option-content__truncated-btn--show button-clean tl underline mb2 pa0" aria-expanded="false" aria-controls="more-style-refinements-panel" data-ec="plp" data-ea="filter" data-el="style - show more" hidden>
<span>
Show 4 more
</span>
<span class="dn">
Show less
</span>
</button>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="sleeve">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="sleeve length - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Sleeve Length
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-column">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=sleeve&amp;prefv1=Sleeveless" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="sleeve" data-refinement-id="sleeveless" title="Sleeveless">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Sleeveless
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=sleeve&amp;prefv1=Short%20Sleeve" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="sleeve" data-refinement-id="short sleeve" title="Short Sleeve">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Short Sleeve
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=sleeve&amp;prefv1=Long%20Sleeve" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="sleeve" data-refinement-id="long sleeve" title="Long Sleeve">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Long Sleeve
</span>
</div>
</a>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="subdepartment">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="product type - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Product Type
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-column">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=subDepartment&amp;prefv1=T-Shirts%20%26%20Tops" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="subDepartment" data-refinement-id="t-shirts &amp; tops" title="T-Shirts &amp; Tops">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
T-Shirts &amp; Tops
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=subDepartment&amp;prefv1=Bodysuits" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="subDepartment" data-refinement-id="bodysuits" title="Bodysuits">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Bodysuits
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=subDepartment&amp;prefv1=Dresses" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="subDepartment" data-refinement-id="dresses" title="Dresses">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Dresses
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=subDepartment&amp;prefv1=Rompers" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="subDepartment" data-refinement-id="rompers" title="Rompers">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Rompers
</span>
</div>
</a>
</div>
</div>
<div class="ar-refinement-panel__option-group js-refinement-panel__option-group ph3 bb b--black-10" data-accordion-id="neckline">
<a href="#" class="ar-refinement-panel__option-header ar-refinement-panel__row js-refinement-panel__option-header flex pv3 items-center pointer ph4-ns ph3" data-ec="plp" data-ea="filter" data-el="neckline - collapse">
<span class="ar-refinement-panel__option-label f1 flex-grow-1">
Neckline
</span>
<span class="ar-refinement-panel__option-icon ml2">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</a>
<div class="ar-refinement-panel__option-content js-refinement-panel__option-content dn flex-wrap ph4-ns ph3 pb2 flex-column">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Boat%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="boat neck" title="Boat Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Boat Neck
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Collar" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="collar" title="Collar">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Collar
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Crew%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="crew neck" title="Crew Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Crew Neck
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Halter" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="halter" title="Halter">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Halter
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Mock%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="mock neck" title="Mock Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Mock Neck
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Off%20Shoulder" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="off shoulder" title="Off Shoulder">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Off Shoulder
</span>
</div>
</a>
<div id="more-neckline-refinements-panel" aria-labelledby="more-neckline-refinements-btn" class="js-refinement-panel__option-content__truncated" hidden>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=One%20Shoulder" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="one shoulder" title="One Shoulder">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
One Shoulder
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Open" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="open" title="Open">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Open
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Scoop%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="scoop neck" title="Scoop Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Scoop Neck
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Square%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="square neck" title="Square Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Square Neck
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Strapless" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="strapless" title="Strapless">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Strapless
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=Sweetheart" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="sweetheart" title="Sweetheart">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
Sweetheart
</span>
</div>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?prefn1=neckline&amp;prefv1=V%20Neck" class="ar-refinement-panel__option js-refinement-panel__option false flex mb3" data-ga-attribute="neckline" data-refinement-id="v neck" title="V Neck">
<span class="ar-refinement-panel__checkbox mr2">
<span class="js-refinement-panel__checkbox-unchecked">
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.4">
<rect stroke="#505050" x="0.5" y="0.5" width="15" height="15"></rect>
</g>
</svg>
</span>
</span>
<div class>
<span class="ar-refinement-panel__option-title db flex items-center">
V Neck
</span>
</div>
</a>
</div>
<button id="more-neckline-refinements-btn" class="js-refinement-panel__option-content__truncated-btn js-refinement-panel__option-content__truncated-btn--show button-clean tl underline mb2 pa0" aria-expanded="false" aria-controls="more-neckline-refinements-panel" data-ec="plp" data-ea="filter" data-el="neckline - show more" hidden>
<span>
Show 7 more
</span>
<span class="dn">
Show less
</span>
</button>
</div>
</div>
</div>
<div class="absolute bottom-0 left-0 right-0 ph4-ns pb3-ns">
<a href class="ar-refinement-panel__apply js-refinement-panel__apply bg-true-black white df items-center justify-center tc f1" data-selid="filters-view-button">
View 116 Items
</a>
</div>
</div>
</div>
<div class="grid_28 prefix_1 suffix_1">
<div class="cf native-stick js-sticky-plp-container" style="margin-top: 0;">

<div id="primary" class="primary-content native-stick__inner-container omega grid_28">
<div class="ar-refinement-header js-refinement-header z-5 sticky-ns bg-white pv3 border-box">
<div class="ar-refinement-subnav-wrapper df-ns pb2-ns mb1-ns">
<div class="ar-refinement-subnav__breadcrumb js-refinement-subnav__breadcrumb df pre mr3 overflow-auto" data-ga-hierarchy="{&quot;1&quot;:&quot;Shop By&quot;,&quot;2&quot;:&quot;Body Shaping&quot;,&quot;3&quot;:&quot;Contour&quot;}">
<a class="menu-cat-Shop-by dn df-ns " title="Shop By" href="https://www.aritzia.com/en/shop-by" data-link-type="nav-category" data-subnavitem="true" data-ga-parent="shop by" data-ga-cat="shop by" data-isCatSibling="false">
<span class=" refinement-link-text ar-refinement-link-text ">Shop By</span>
<span> &mdash; </span>
</a>
<a class="menu-cat-shapewear-clothing dn df-ns " title="Body Shaping" href="https://www.aritzia.com/en/shop-by/shapewear-clothing" data-link-type="nav-category" data-subnavitem="true" data-ga-parent="shop by" data-ga-cat="body shaping" data-isCatSibling="false">
<span class=" refinement-link-text ar-refinement-link-text ">Body Shaping</span>
<span> &mdash; </span>
</a>
<div class="js-subnav-refinementlevel--last db nowrap pr2" data-categorysubsonline="false">
<span class="ar-subnav-refinementlevel--last-text dn di-ns">Contour</span>
<div class="ar-refinement-subnav-categories dn fixed absolute-ns bg-white pt2-ns pr5-ns nowrap z-max w-100 w-auto-ns">
<span class="ar-refinement-subnav__close js-refinement-subnav__close svg--light dn">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13318 7.76256L1.7519 0.381279L0.514465 1.61872L7.89575 9L0.514465 16.3813L1.7519 17.6187L9.13318 10.2374L16.5145 17.6187L17.7519 16.3813L10.3706 9L17.7519 1.61872L16.5145 0.381279L9.13318 7.76256Z" fill="black" />
</svg>
</span>
<div class="js-refinement-subnav-categories__scroll overflow-scroll overflow-visible-ns h-100 pt3 pt0-ns">
<div class="ar-refinement-subnav-categories__option df db-ns flex-column justify-center relative">
<a class="menu-cat-shapewear-clothing ar-refinement-subnav-categories__option-anchor df db-ns flex-column justify-center h-100 " title="Body Shaping" href="https://www.aritzia.com/en/shop-by/shapewear-clothing" data-link-type="nav-category" data-subnavitem="true" data-ga-parent="shop by" data-ga-cat="body shaping" data-isCatSibling="false">
<span class=" refinement-link-text ar-refinement-link-text dib-ns pl3 pl0-ns mb2-ns f1 f0-ns">All Body Shaping</span>
</a>
</div>
</div>
</div>
<div class="js-refinement-subnav-overlay ar-refinement-subnav-overlay fixed dn top-0 left-0 w-100 h-100 z-2000"></div>
</div>
</div>
</div>
<div class="ar-search-refined js-search-refined center df-ns justify-between">
<div class="ar-search-refined__container w-60-l df">
<div class="flex flex-wrap items-center">
<div class="items-baseline relative ar-swiper--fade ar-search-header__promoted-filters ar-search-header__promoted-filters--none">
<ul class="flex ar-search-header__promoted-filters-list mt1 mt0-ns overflow-auto">
<li class="mr3 nowrap js-search-header__promoted-filter dn-ns dib" data-filter-id="sort" data-selected-count="0" data-filter-display>
<button class="ar-search-header__promoted-filter-link ar-search-header__promoted-filter-link--underline bg-transparent bn black pa0 tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="sort - expand">
Sort
</button>
</li>
<li class="mb1 mr3 mr1-ns nowrap js-search-header__promoted-filter ar-search-header__promoted-filter--active" data-filter-id="size" data-selected-count="0" data-filter-display="null">
<button class="ar-search-header__promoted-filter-link bg-transparent underline no-underline-ns bn ba-ns black pa0 ph2-ns tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="size - expand">
Size
</button>
</li>
<li class="mb1 mr3 mr1-ns nowrap js-search-header__promoted-filter " data-filter-id="refinementcolor" data-selected-count="0" data-filter-display="null">
<button class="ar-search-header__promoted-filter-link bg-transparent underline no-underline-ns bn ba-ns black pa0 ph2-ns tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="refinementColor - expand">
Colour
</button>
</li>
<li class="mb1 mr3 mr1-ns nowrap js-search-header__promoted-filter " data-filter-id="subdepartment" data-selected-count="0" data-filter-display="null">
<button class="ar-search-header__promoted-filter-link bg-transparent underline no-underline-ns bn ba-ns black pa0 ph2-ns tl" tabindex="0" data-ec="plp" data-ea="filter - promoted" data-el="subDepartment - expand">
Product Type
</button>
</li>
<li class="mr1 nowrap">
<button class="ar-search-header__promoted-filter-link js-search-header__all-filters js-panel-trigger js-open-panel bg-transparent bn ba-ns black pa0 ph2-ns tl" data-selid="plp-filter" data-copy="All Filters" tabindex="0" data-ec="plp" data-ea="refine" data-el="open">
<span class="underline no-underline-ns">
All Filters
</span>
</button>
</li>
</ul>
</div>
</div>
</div>

<div class="js-sortby-options-container ar-sortby-options-container dib-ns dn" data-accordion-id="sort">
<button class="button-clean ar-sortby-options__header flex pa0 items-center pointer" data-ec="plp" data-ea="filter" data-el="sort - collapse">
<span class="pr1">
Sort by <span class="underline">Recommended</span>
</span>
<span class="js-sortby__arrow rotate-90 ar-arrow-icon svgn2 dn dib-ns">
<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</button>
<div class="js-sortby-options-content ar-sortby-options-content pv2 dn">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Aritzia-Department-Sort-Steady-State" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="sr-best-match" data-refinement-id="sr-best-match">
<span class="ar-refinement-panel__option-title db ar-sortby-option ar-sortby-option__active">
Recommended
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Price-Low-To-High" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="sr-price-low-to-high" data-refinement-id="sr-price-low-to-high">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Price: Low to High
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Price-High-To-Low" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="sr-price-high-to-low" data-refinement-id="sr-price-high-to-low">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Price: High to Low
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Sort%20by%20Newest%20-07%2F07%2F22" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="Sort By New" data-refinement-id="Sort By New">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Newest
</span>
</a>
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?srule=Sort%20by%20Top%20Rated" class="ar-refinement-panel__option js-refinement-panel__option flex mb2 ph3 underline-hover" title data-srule="top-rated" data-refinement-id="top-rated">
<span class="ar-refinement-panel__option-title db ar-sortby-option ">
Top Rated
</span>
</a>
</div>
</div>

</div>
</div>
<div class="ar-breadcrumbs-header js-breadcrumbs-header df dn-ns flex-column justify-center z-5 fixed bg-white pv3 border-box w-100">
<div class="mw-93 center w-100 flex justify-between">
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategory-active_data.js) */
dw.ac.applyContext({category: "contour-clothing"});
/* ]]> */
// -->
</script>
<div class="ar-category-breadcrumbs js-ar-category-breadcrumbs pt2 db relative z-2">
<div class="ar-category-breadcrumbs__category-title js-category-breadcrumbs__category-title js-subnav__category-title dn">
<span class="ar-category-breadcrumbs__category-title-text js-category-breadcrumbs__category-title-text f0"></span>
<span class="js-category-breadcrumbs__category-title-arrow rotate-90 ar-arrow-icon svgn2 dn"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8694 0.309998L9.5594 8L1.8694 15.69L0.639404 14.45L7.0894 8L0.639404 1.55L1.8694 0.309998Z" fill="black" />
</svg>
</span>
</div>
<ul class="ar-category-breadcrumbs__list list mt0 mb0 pl0 flex flex-wrap" data-selid="pdp-breadcrumbs">
<li class="ar-category-breadcrumbs__item nowrap flex-auto flex-grow-0 flex-shrink-0" data-selid="pdp-breadcrumb-0 ">
<span class="ar-category-breadcrumbs__link dib mr1 mr2-ns"><a href="https://www.aritzia.com/en/shop-by" title="Shop By">Shop By&nbsp;</a><span class="ml1-ns">&mdash;</span></span>
</li>
<li class="ar-category-breadcrumbs__item nowrap flex-auto flex-grow-0 flex-shrink-0" data-selid="pdp-breadcrumb-1 ">
<span class="ar-category-breadcrumbs__link dib mr1 mr2-ns"><a href="https://www.aritzia.com/en/shop-by/shapewear-clothing" title="Body Shaping">Body Shaping&nbsp;</a><span class="ml1-ns">&mdash;</span></span>
</li>
<li class="ar-category-breadcrumbs__item nowrap flex-auto flex-grow-0 flex-shrink-0" data-selid="pdp-breadcrumb-2 ">
<span class="ar-category-breadcrumbs__link js-category-breadcrumbs__link--last dib">Contour</span>
<span class="ar-search-refined__count js-search-refined__count relative">116</span>
</li>
</ul>
</div>
<a class="ar-search-refine-cta js-search-refine-cta dbi ar-search-refine-cta--sticky js-panel-trigger js-open-panel ba ph3" data-copy="Filter" data-ec="plp" data-ea="filter" data-el="open">
<span>
Filter
</span>
</a>
</div>
</div>
<div id="plp-promo-triple-0" class="ga-promotions">
</div>
<div class="ar-product-grid js-product-grid center mw-100">
<ul class="ar-product-grid__container js-product-grid__container list flex flex-wrap justify-center-ns justify-center" data-colwidth="200" data-category="contour-clothing" data-searchphrase data-productsperrow="4.0" data-show-swatches="true" data-flexpattern="4|4|2|pt|4|2|pt|4|4|pt|4|4|2|">
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="1" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118750',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118750", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="133153f6f190851963f9243565" data-itemid="118750" data-mpid="118750" data-color="1274" data-pkey="118750-1274" data-colors="4" data-master="{&quot;name&quot;:&quot;CONTOUR WHITNEY BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118750&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;58.00&quot;,&quot;listprice&quot;:&quot;58.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;CON&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Back In&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1274&quot;,&quot;name&quot;:&quot;BLACK&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;787&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR WHITNEY BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR WHITNEY BODYSUIT - Back In" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-whitney-bodysuit/118750.html?dwvar_118750_color=1274">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR WHITNEY BODYSUIT - Smoothing boatneck bodysuit" title="CONTOUR WHITNEY BODYSUIT - Smoothing boatneck bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118750_1274_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118750_1274_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="unavailable">
Back In
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118750" data-master="118750" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118750  overflow-visible" href="https://www.aritzia.com/en/product/contour-whitney-bodysuit/118750.html?dwvar_118750_color=1274" title="CONTOUR WHITNEY BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118750  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-whitney-bodysuit/118750.html?dwvar_118750_color=1274" title="contour whitney bodysuit">contour whitney bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$58</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118750" data-master="118750" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-whitney-bodysuit/118750.html?dwvar_118750_color=1274" title="CONTOUR WHITNEY BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118750_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR WHITNEY BODYSUIT | Aritzia" data-thumb-title="CONTOUR WHITNEY BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-whitney-bodysuit/118750.html?dwvar_118750_color=1275" title="CONTOUR WHITNEY BODYSUIT | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118750_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1275_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1275_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1275_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1275_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1275_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1275_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1275_on_e.jpg&quot;]" data-thumb-alt="CONTOUR WHITNEY BODYSUIT | Aritzia" data-thumb-title="CONTOUR WHITNEY BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-whitney-bodysuit/118750.html?dwvar_118750_color=5391" title="CONTOUR WHITNEY BODYSUIT | Aritzia | ICEBERG BLUE" data-color="ICEBERG BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="ICEBERG BLUE" data-colorid="5391">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour ICEBERG BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118750_5391_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_5391_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_5391_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_5391_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_5391_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_5391_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR WHITNEY BODYSUIT | Aritzia" data-thumb-title="CONTOUR WHITNEY BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-whitney-bodysuit/118750.html?dwvar_118750_color=30252" title="CONTOUR WHITNEY BODYSUIT | Aritzia | HALO PINK" data-color="HALO PINK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="HALO PINK" data-colorid="30252">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour HALO PINK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118750_30252_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_30252_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_30252_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_30252_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_30252_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_30252_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118750_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR WHITNEY BODYSUIT | Aritzia" data-thumb-title="CONTOUR WHITNEY BODYSUIT | Aritzia" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="2" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118749',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118749", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="0f48b3af801cd8ec997908a74e" data-itemid="118749" data-mpid="118749" data-color="1275" data-pkey="118749-1275" data-colors="4" data-master="{&quot;name&quot;:&quot;CONTOUR ONE-SHOULDER BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118749&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;48.00&quot;,&quot;listprice&quot;:&quot;48.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;CON&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1275&quot;,&quot;name&quot;:&quot;WHITE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;792&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR ONE-SHOULDER BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR ONE-SHOULDER BODYSUIT " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=1275">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR ONE-SHOULDER BODYSUIT - One-shoulder bodysuit" title="CONTOUR ONE-SHOULDER BODYSUIT - One-shoulder bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1275_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118749" data-master="118749" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118749  overflow-visible" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=1275" title="CONTOUR ONE-SHOULDER BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118749  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=1275" title="contour one-shoulder bodysuit">contour one-shoulder bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$48</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118749" data-master="118749" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=1275" title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118749_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1275_on_e.jpg&quot;]" data-thumb-alt="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" data-thumb-title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=1274" title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118749_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" data-thumb-title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=30360" title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia | CRUISE BLUE" data-color="CRUISE BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CRUISE BLUE" data-colorid="30360">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CRUISE BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118749_30360_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_30360_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_30360_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_30360_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_30360_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_30360_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_30360_off_c.jpg&quot;]" data-thumb-alt="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" data-thumb-title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=15104" title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia | MATTE PEARL" data-color="MATTE PEARL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="MATTE PEARL" data-colorid="15104">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour MATTE PEARL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118749_15104_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_15104_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_15104_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_15104_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_15104_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_15104_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118749_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" data-thumb-title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="3" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '117359-3634',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "117359-3634", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="8759a442e6d5834fed893329d3" data-itemid="117359-3634" data-mpid="117359" data-color="3634" data-pkey="117359-3634" data-colors="6" data-master="{&quot;name&quot;:&quot;CONTOUR BANDEAU TOP&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;117359-3634&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;28.00&quot;,&quot;listprice&quot;:&quot;28.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Online Exclusive&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;3634&quot;,&quot;name&quot;:&quot;DENUDE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;787&quot;}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR BANDEAU TOP" class="relative db js-plp-hash " aria-label="View full details for CONTOUR BANDEAU TOP - Online Exclusive" data-default="on_a" data-default-hover="on_b" data-product="on_c" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=3634">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR BANDEAU TOP - Bandeau tube top" title="CONTOUR BANDEAU TOP - Bandeau tube top" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_on_c.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_on_c.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3634_on_c.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_on_c.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3634_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="Online Exclusive">
Online Exclusive
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="117359-3634" data-master="117359" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="117359-3634  overflow-visible" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=3634" title="CONTOUR BANDEAU TOP">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="117359-3634  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=3634" title="contour bandeau top">contour bandeau top<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$28</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="117359-3634" data-master="117359" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=3634" title="CONTOUR BANDEAU TOP | Aritzia | DENUDE" data-color="DENUDE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DENUDE" data-colorid="3634">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DENUDE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_3634_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3634_on_e.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=1274" title="CONTOUR BANDEAU TOP | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=22419" title="CONTOUR BANDEAU TOP | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_22419_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_22419_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_22419_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_22419_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=1275" title="CONTOUR BANDEAU TOP | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1275_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1275_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1275_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1275_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=3048" title="CONTOUR BANDEAU TOP | Aritzia | CAIRO" data-color="CAIRO">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CAIRO" data-colorid="3048">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CAIRO" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_3048_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3048_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3048_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3048_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_3048_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=30252" title="CONTOUR BANDEAU TOP | Aritzia | HALO PINK" data-color="HALO PINK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="HALO PINK" data-colorid="30252">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour HALO PINK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_30252_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_30252_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_30252_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_30252_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_30252_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_117359_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=3634" class="js-swatches-all ar-swatches__all db f0 pl2">
+1
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="4" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118756',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118756", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="f83140f959d81211e63979f29d" data-itemid="118756" data-mpid="118756" data-color="31973" data-pkey="118756-31973" data-colors="14" data-master="{&quot;name&quot;:&quot;CONTOUR SQUARENECK BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118756&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;48.00&quot;,&quot;listprice&quot;:&quot;48.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;2 Lengths&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;31973&quot;,&quot;name&quot;:&quot;AQUAMARINE GREEN&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;795&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR SQUARENECK BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR SQUARENECK BODYSUIT - 2 Lengths" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-squareneck-bodysuit/118756.html?dwvar_118756_color=31973">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR SQUARENECK BODYSUIT - Squareneck sleeveless bodysuit" title="CONTOUR SQUARENECK BODYSUIT - Squareneck sleeveless bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118756_31973_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118756_31973_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="2 Lengths">
2 Lengths
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118756" data-master="118756" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118756  overflow-visible" href="https://www.aritzia.com/en/product/contour-squareneck-bodysuit/118756.html?dwvar_118756_color=31973" title="CONTOUR SQUARENECK BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118756  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-squareneck-bodysuit/118756.html?dwvar_118756_color=31973" title="contour squareneck bodysuit">contour squareneck bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$48</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118756" data-master="118756" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-bodysuit/118756.html?dwvar_118756_color=31973" title="CONTOUR SQUARENECK BODYSUIT | Aritzia | AQUAMARINE GREEN" data-color="AQUAMARINE GREEN">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="AQUAMARINE GREEN" data-colorid="31973">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour AQUAMARINE GREEN" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118756_31973_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-bodysuit/118756.html?dwvar_118756_color=1274" title="CONTOUR SQUARENECK BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118756_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-bodysuit/118756.html?dwvar_118756_color=30751" title="CONTOUR SQUARENECK BODYSUIT | Aritzia | DARK NIGHT NAVY" data-color="DARK NIGHT NAVY">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK NIGHT NAVY" data-colorid="30751">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK NIGHT NAVY" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118756_30751_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_30751_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_30751_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_30751_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_30751_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_30751_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-bodysuit/118756.html?dwvar_118756_color=28539" title="CONTOUR SQUARENECK BODYSUIT | Aritzia | BOLD FUCHSIA" data-color="BOLD FUCHSIA">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BOLD FUCHSIA" data-colorid="28539">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BOLD FUCHSIA" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118756_28539_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_28539_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_28539_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_28539_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_28539_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_28539_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-bodysuit/118756.html?dwvar_118756_color=22419" title="CONTOUR SQUARENECK BODYSUIT | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118756_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_22419_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_22419_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_22419_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_22419_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_22419_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_31973_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-bodysuit/118756.html?dwvar_118756_color=1275" title="CONTOUR SQUARENECK BODYSUIT | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118756_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1275_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1275_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1275_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1275_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1275_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1275_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118756_1275_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-squareneck-bodysuit/118756.html?dwvar_118756_color=31973" class="js-swatches-all ar-swatches__all db f0 pl2">
+7
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="5" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118757',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118757", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="616ab97e5dc3c2d208f7fdf448" data-itemid="118757" data-mpid="118757" data-color="31973" data-pkey="118757-31973" data-colors="16" data-master="{&quot;name&quot;:&quot;CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118757&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;58.00&quot;,&quot;listprice&quot;:&quot;58.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;2 Lengths&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;31973&quot;,&quot;name&quot;:&quot;AQUAMARINE GREEN&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;795&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT - 2 Lengths" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-squareneck-shortsleeve-bodysuit/118757.html?dwvar_118757_color=31973">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT - Squareneck tee bodysuit" title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT - Squareneck tee bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118757_31973_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118757_31973_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="2 Lengths">
2 Lengths
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118757" data-master="118757" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118757  overflow-visible" href="https://www.aritzia.com/en/product/contour-squareneck-shortsleeve-bodysuit/118757.html?dwvar_118757_color=31973" title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118757  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-squareneck-shortsleeve-bodysuit/118757.html?dwvar_118757_color=31973" title="contour squareneck shortsleeve bodysuit">contour squareneck shortsleeve bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$58</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118757" data-master="118757" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-shortsleeve-bodysuit/118757.html?dwvar_118757_color=31973" title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia | AQUAMARINE GREEN" data-color="AQUAMARINE GREEN">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="AQUAMARINE GREEN" data-colorid="31973">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour AQUAMARINE GREEN" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118757_31973_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-shortsleeve-bodysuit/118757.html?dwvar_118757_color=1274" title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118757_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-shortsleeve-bodysuit/118757.html?dwvar_118757_color=28539" title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia | BOLD FUCHSIA" data-color="BOLD FUCHSIA">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BOLD FUCHSIA" data-colorid="28539">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BOLD FUCHSIA" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118757_28539_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_28539_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_28539_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_28539_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_28539_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_28539_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-shortsleeve-bodysuit/118757.html?dwvar_118757_color=29514" title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia | UBE PURPLE" data-color="UBE PURPLE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="UBE PURPLE" data-colorid="29514">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour UBE PURPLE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118757_29514_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_29514_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_29514_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_29514_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_29514_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_29514_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-shortsleeve-bodysuit/118757.html?dwvar_118757_color=30751" title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia | DARK NIGHT NAVY" data-color="DARK NIGHT NAVY">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK NIGHT NAVY" data-colorid="30751">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK NIGHT NAVY" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118757_30751_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_30751_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_30751_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_30751_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_30751_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_30751_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_31973_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-shortsleeve-bodysuit/118757.html?dwvar_118757_color=27638" title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia | SLAB BLUE" data-color="SLAB BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="SLAB BLUE" data-colorid="27638">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour SLAB BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118757_27638_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_27638_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_27638_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_27638_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_27638_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_27638_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_27638_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118757_27638_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-squareneck-shortsleeve-bodysuit/118757.html?dwvar_118757_color=31973" class="js-swatches-all ar-swatches__all db f0 pl2">
+8
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="6" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118763-15104',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118763-15104", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="d3de57647125283ce3d4029b55" data-itemid="118763-15104" data-mpid="118763" data-color="15104" data-pkey="118763-15104" data-colors="4" data-master="{&quot;name&quot;:&quot;CONTOUR SQUARENECK MIDI DRESS&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118763-15104&quot;,&quot;category&quot;:&quot;AWA1F08&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A08&quot;,&quot;price&quot;:&quot;88.00&quot;,&quot;listprice&quot;:&quot;88.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Online Exclusive&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;15104&quot;,&quot;name&quot;:&quot;MATTE PEARL&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;792&quot;}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR SQUARENECK MIDI DRESS" class="relative db js-plp-hash " aria-label="View full details for CONTOUR SQUARENECK MIDI DRESS - Online Exclusive" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-squareneck-midi-dress/118763.html?dwvar_118763_color=15104">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR SQUARENECK MIDI DRESS - Sleek squareneck midi tank dress" title="CONTOUR SQUARENECK MIDI DRESS - Sleek squareneck midi tank dress" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118763_15104_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118763_15104_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="Online Exclusive">
Online Exclusive
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118763-15104" data-master="118763" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118763-15104  overflow-visible" href="https://www.aritzia.com/en/product/contour-squareneck-midi-dress/118763.html?dwvar_118763_color=15104" title="CONTOUR SQUARENECK MIDI DRESS">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118763-15104  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-squareneck-midi-dress/118763.html?dwvar_118763_color=15104" title="contour squareneck midi dress">contour squareneck midi dress<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$88</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118763-15104" data-master="118763" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-midi-dress/118763.html?dwvar_118763_color=15104" title="CONTOUR SQUARENECK MIDI DRESS | Aritzia | MATTE PEARL" data-color="MATTE PEARL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="MATTE PEARL" data-colorid="15104">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour MATTE PEARL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118763_15104_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_15104_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK MIDI DRESS | Aritzia" data-thumb-title="CONTOUR SQUARENECK MIDI DRESS | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-midi-dress/118763.html?dwvar_118763_color=1274" title="CONTOUR SQUARENECK MIDI DRESS | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118763_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK MIDI DRESS | Aritzia" data-thumb-title="CONTOUR SQUARENECK MIDI DRESS | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-midi-dress/118763.html?dwvar_118763_color=31973" title="CONTOUR SQUARENECK MIDI DRESS | Aritzia | AQUAMARINE GREEN" data-color="AQUAMARINE GREEN">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="AQUAMARINE GREEN" data-colorid="31973">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour AQUAMARINE GREEN" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118763_31973_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_31973_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_31973_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_31973_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_31973_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_31973_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_31973_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK MIDI DRESS | Aritzia" data-thumb-title="CONTOUR SQUARENECK MIDI DRESS | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-midi-dress/118763.html?dwvar_118763_color=30360" title="CONTOUR SQUARENECK MIDI DRESS | Aritzia | CRUISE BLUE" data-color="CRUISE BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CRUISE BLUE" data-colorid="30360">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CRUISE BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118763_30360_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_30360_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_30360_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_30360_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_30360_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_30360_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118763_31973_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK MIDI DRESS | Aritzia" data-thumb-title="CONTOUR SQUARENECK MIDI DRESS | Aritzia" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="7" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118758-1275',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118758-1275", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="24ab735df1808ff706334aa8a9" data-itemid="118758-1275" data-mpid="118758" data-color="1275" data-pkey="118758-1275" data-colors="18" data-master="{&quot;name&quot;:&quot;CONTOUR SQUARENECK LONGSLEEVE BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118758-1275&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;58.00&quot;,&quot;listprice&quot;:&quot;58.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;2 Lengths&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1275&quot;,&quot;name&quot;:&quot;WHITE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;770&quot;}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR SQUARENECK LONGSLEEVE BODYSUIT - 2 Lengths" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-squareneck-longsleeve-bodysuit/118758.html?dwvar_118758_color=1275">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT - Squareneck longsleeve bodysuit" title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT - Squareneck longsleeve bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118758_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118758_1275_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="2 Lengths">
2 Lengths
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118758-1275" data-master="118758" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118758-1275  overflow-visible" href="https://www.aritzia.com/en/product/contour-squareneck-longsleeve-bodysuit/118758.html?dwvar_118758_color=1275" title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118758-1275  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-squareneck-longsleeve-bodysuit/118758.html?dwvar_118758_color=1275" title="contour squareneck longsleeve bodysuit">contour squareneck longsleeve bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$58</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118758-1275" data-master="118758" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-longsleeve-bodysuit/118758.html?dwvar_118758_color=1275" title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118758_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_1275_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-longsleeve-bodysuit/118758.html?dwvar_118758_color=15104" title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia | MATTE PEARL" data-color="MATTE PEARL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="MATTE PEARL" data-colorid="15104">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour MATTE PEARL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118758_15104_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_e.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-longsleeve-bodysuit/118758.html?dwvar_118758_color=30751" title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia | DARK NIGHT NAVY" data-color="DARK NIGHT NAVY">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK NIGHT NAVY" data-colorid="30751">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK NIGHT NAVY" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118758_30751_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_30751_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_30751_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_30751_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_30751_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_30751_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-longsleeve-bodysuit/118758.html?dwvar_118758_color=22419" title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118758_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_22419_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_22419_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_22419_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_22419_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_22419_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-longsleeve-bodysuit/118758.html?dwvar_118758_color=3634" title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia | DENUDE" data-color="DENUDE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DENUDE" data-colorid="3634">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DENUDE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118758_3634_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_3634_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_3634_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_3634_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_3634_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_3634_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-squareneck-longsleeve-bodysuit/118758.html?dwvar_118758_color=32007" title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia | STARGAZER PINK" data-color="STARGAZER PINK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="STARGAZER PINK" data-colorid="32007">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour STARGAZER PINK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118758_32007_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_32007_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_32007_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_32007_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_32007_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_32007_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118758_15104_on_b.jpg&quot;]" data-thumb-alt="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR SQUARENECK LONGSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-squareneck-longsleeve-bodysuit/118758.html?dwvar_118758_color=1275" class="js-swatches-all ar-swatches__all db f0 pl2">
+10
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="8" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '115794',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "115794", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="bb71b3dcaeb32137e4e5456e5a" data-itemid="115794" data-mpid="115794" data-color="1274" data-pkey="115794-1274" data-colors="3" data-master="{&quot;name&quot;:&quot;CONTOUR ESTEEM BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;115794&quot;,&quot;category&quot;:&quot;AWA1P28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;48.00&quot;,&quot;listprice&quot;:&quot;48.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;N1&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;New&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1274&quot;,&quot;name&quot;:&quot;BLACK&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;770&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR ESTEEM BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR ESTEEM BODYSUIT - New" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-esteem-bodysuit/115794.html?dwvar_115794_color=1274">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR ESTEEM BODYSUIT - Squareneck sleeveless bodysuit" title="CONTOUR ESTEEM BODYSUIT - Squareneck sleeveless bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_115794_1274_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_115794_1274_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="New">
New
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="115794" data-master="115794" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="115794  overflow-visible" href="https://www.aritzia.com/en/product/contour-esteem-bodysuit/115794.html?dwvar_115794_color=1274" title="CONTOUR ESTEEM BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="115794  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-esteem-bodysuit/115794.html?dwvar_115794_color=1274" title="contour esteem bodysuit">contour esteem bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$48</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="115794" data-master="115794" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-esteem-bodysuit/115794.html?dwvar_115794_color=1274" title="CONTOUR ESTEEM BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_115794_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR ESTEEM BODYSUIT | Aritzia" data-thumb-title="CONTOUR ESTEEM BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-esteem-bodysuit/115794.html?dwvar_115794_color=1275" title="CONTOUR ESTEEM BODYSUIT | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_115794_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1275_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1275_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1275_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1275_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1275_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1275_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1275_on_e.jpg&quot;]" data-thumb-alt="CONTOUR ESTEEM BODYSUIT | Aritzia" data-thumb-title="CONTOUR ESTEEM BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-esteem-bodysuit/115794.html?dwvar_115794_color=32007" title="CONTOUR ESTEEM BODYSUIT | Aritzia | STARGAZER PINK" data-color="STARGAZER PINK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="STARGAZER PINK" data-colorid="32007">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour STARGAZER PINK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_115794_32007_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_32007_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_32007_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_32007_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_32007_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_32007_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_115794_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR ESTEEM BODYSUIT | Aritzia" data-thumb-title="CONTOUR ESTEEM BODYSUIT | Aritzia" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1 mh5-ns mh0 ph0-ns w-100 w-third-ns " data-loopstat="9" data-page="0" data-rowMaxItems="2">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118749-30360',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118749-30360", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="25f67eb7253b4a676dacfc49b4" data-itemid="118749-30360" data-mpid="118749" data-color="30360" data-pkey="118749-30360" data-colors="4" data-master="{&quot;name&quot;:&quot;CONTOUR ONE-SHOULDER BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118749-30360&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;48.00&quot;,&quot;listprice&quot;:&quot;48.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;CON&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;30360&quot;,&quot;name&quot;:&quot;CRUISE BLUE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;787&quot;}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR ONE-SHOULDER BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR ONE-SHOULDER BODYSUIT " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_a" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=30360">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/large/f7f7f7.jpg" alt="CONTOUR ONE-SHOULDER BODYSUIT - One-shoulder bodysuit" title="CONTOUR ONE-SHOULDER BODYSUIT - One-shoulder bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_on_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_on_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118749-30360" data-master="118749" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118749-30360  overflow-visible" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=30360" title="CONTOUR ONE-SHOULDER BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118749-30360  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=30360" title="contour one-shoulder bodysuit">contour one-shoulder bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$48</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118749-30360" data-master="118749" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=30360" title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia | CRUISE BLUE" data-color="CRUISE BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CRUISE BLUE" data-colorid="30360">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CRUISE BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118749_30360_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_30360_off_c.jpg&quot;]" data-thumb-alt="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" data-thumb-title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=1274" title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118749_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" data-thumb-title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=1275" title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118749_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1275_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1275_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1275_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1275_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1275_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1275_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1275_on_e.jpg&quot;]" data-thumb-alt="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" data-thumb-title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-one-shoulder-bodysuit/118749.html?dwvar_118749_color=15104" title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia | MATTE PEARL" data-color="MATTE PEARL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="MATTE PEARL" data-colorid="15104">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour MATTE PEARL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118749_15104_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_15104_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_15104_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_15104_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_15104_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_15104_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118749_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" data-thumb-title="CONTOUR ONE-SHOULDER BODYSUIT | Aritzia" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1 mh5-ns mh0 ph0-ns w-100 w-third-ns " data-loopstat="10" data-page="0" data-rowMaxItems="2">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118760-22419',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118760-22419", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="362a1cded2f1036f65ab911e16" data-itemid="118760-22419" data-mpid="118760" data-color="22419" data-pkey="118760-22419" data-colors="3" data-master="{&quot;name&quot;:&quot;CONTOUR TUBE MAXI DRESS&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118760-22419&quot;,&quot;category&quot;:&quot;AWA1F08&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A08&quot;,&quot;price&quot;:&quot;98.00&quot;,&quot;listprice&quot;:&quot;98.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;NR&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Back In&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;22419&quot;,&quot;name&quot;:&quot;WARM TAUPE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;795&quot;}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR TUBE MAXI DRESS" class="relative db js-plp-hash " aria-label="View full details for CONTOUR TUBE MAXI DRESS - Back In" data-default="on_a" data-default-hover="on_b" data-product="on_g" data-product-hover="on_g" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=22419">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/large/f7f7f7.jpg" alt="CONTOUR TUBE MAXI DRESS - Tight maxi tube dress" title="CONTOUR TUBE MAXI DRESS - Tight maxi tube dress" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_g.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_g.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_g.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_g.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_g.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_g.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_g.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="unavailable">
Back In
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118760-22419" data-master="118760" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118760-22419  overflow-visible" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=22419" title="CONTOUR TUBE MAXI DRESS">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118760-22419  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=22419" title="contour tube maxi dress">contour tube maxi dress<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$98</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118760-22419" data-master="118760" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=22419" title="CONTOUR TUBE MAXI DRESS | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118760_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_g.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_22419_on_d.jpg&quot;]" data-thumb-alt="CONTOUR TUBE MAXI DRESS | Aritzia" data-thumb-title="CONTOUR TUBE MAXI DRESS | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=1274" title="CONTOUR TUBE MAXI DRESS | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118760_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR TUBE MAXI DRESS | Aritzia" data-thumb-title="CONTOUR TUBE MAXI DRESS | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=30751" title="CONTOUR TUBE MAXI DRESS | Aritzia | DARK NIGHT NAVY" data-color="DARK NIGHT NAVY">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK NIGHT NAVY" data-colorid="30751">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK NIGHT NAVY" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118760_30751_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_30751_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_30751_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_30751_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_30751_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_30751_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_30751_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_30751_on_e.jpg&quot;]" data-thumb-alt="CONTOUR TUBE MAXI DRESS | Aritzia" data-thumb-title="CONTOUR TUBE MAXI DRESS | Aritzia" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li id="plp-promo-single-1" class="ar-product-grid__tile relative border-box ph1 w-100 ga-promotions">
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="11" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '120567-1275',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "120567-1275", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="2cd3a742beb45c55305b0b24cd" data-itemid="120567-1275" data-mpid="120567" data-color="1275" data-pkey="120567-1275" data-colors="7" data-master="{&quot;name&quot;:&quot;CONTOUR DECO BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;120567-1275&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;68.00&quot;,&quot;listprice&quot;:&quot;68.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;CON&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1275&quot;,&quot;name&quot;:&quot;WHITE&quot;},&quot;model&quot;:{&quot;id&quot;:null}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR DECO BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR DECO BODYSUIT " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1275">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR DECO BODYSUIT - Off-shoulder longsleeve bodysuit" title="CONTOUR DECO BODYSUIT - Off-shoulder longsleeve bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_120567_1275_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_120567_1275_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="120567-1275" data-master="120567" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="120567-1275  overflow-visible" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1275" title="CONTOUR DECO BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="120567-1275  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1275" title="contour deco bodysuit">contour deco bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$68</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="120567-1275" data-master="120567" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1275" title="CONTOUR DECO BODYSUIT | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_c.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1274" title="CONTOUR DECO BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=15104" title="CONTOUR DECO BODYSUIT | Aritzia | MATTE PEARL" data-color="MATTE PEARL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="MATTE PEARL" data-colorid="15104">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour MATTE PEARL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_15104_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_15104_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_15104_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_15104_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_15104_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_15104_off_c.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1565" title="CONTOUR DECO BODYSUIT | Aritzia | COFFEE BEAN" data-color="COFFEE BEAN">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="COFFEE BEAN" data-colorid="1565">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour COFFEE BEAN" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_1565_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1565_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1565_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1565_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1565_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1565_off_c.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=30360" title="CONTOUR DECO BODYSUIT | Aritzia | CRUISE BLUE" data-color="CRUISE BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CRUISE BLUE" data-colorid="30360">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CRUISE BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_30360_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_30360_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_30360_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_30360_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_30360_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_30360_off_c.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=24277" title="CONTOUR DECO BODYSUIT | Aritzia | OXIDIZED TEAL" data-color="OXIDIZED TEAL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="OXIDIZED TEAL" data-colorid="24277">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour OXIDIZED TEAL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_24277_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_24277_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_24277_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_24277_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_24277_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_24277_off_c.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1275" class="js-swatches-all ar-swatches__all db f0 pl2">
+2
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="12" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118770-22419',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118770-22419", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="d607442c4975304bac72146140" data-itemid="118770-22419" data-mpid="118770" data-color="22419" data-pkey="118770-22419" data-colors="10" data-master="{&quot;name&quot;:&quot;CONTOUR HIP TUBE TOP&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118770-22419&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;40.00&quot;,&quot;listprice&quot;:&quot;40.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;SSN&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;22419&quot;,&quot;name&quot;:&quot;WARM TAUPE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;770&quot;}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR HIP TUBE TOP" class="relative db js-plp-hash " aria-label="View full details for CONTOUR HIP TUBE TOP " data-default="on_a" data-default-hover="on_b" data-product="off_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=22419">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR HIP TUBE TOP - Sleek tube top" title="CONTOUR HIP TUBE TOP - Sleek tube top" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_22419_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_22419_off_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_22419_off_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_22419_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_22419_off_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_22419_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_22419_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118770-22419" data-master="118770" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118770-22419  overflow-visible" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=22419" title="CONTOUR HIP TUBE TOP">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118770-22419  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=22419" title="contour hip tube top">contour hip tube top<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$40</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118770-22419" data-master="118770" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=22419" title="CONTOUR HIP TUBE TOP | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_22419_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_22419_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_22419_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_22419_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_c.jpg&quot;]" data-thumb-alt="WARM TAUPE" data-thumb-title="WARM TAUPE" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=28539" title="CONTOUR HIP TUBE TOP | Aritzia | BOLD FUCHSIA" data-color="BOLD FUCHSIA">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BOLD FUCHSIA" data-colorid="28539">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BOLD FUCHSIA" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_28539_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_28539_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_28539_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_28539_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_28539_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_c.jpg&quot;]" data-thumb-alt="BOLD FUCHSIA" data-thumb-title="BOLD FUCHSIA" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=30252" title="CONTOUR HIP TUBE TOP | Aritzia | HALO PINK" data-color="HALO PINK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="HALO PINK" data-colorid="30252">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour HALO PINK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_30252_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_30252_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_30252_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_30252_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_30252_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_c.jpg&quot;]" data-thumb-alt="HALO PINK" data-thumb-title="HALO PINK" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=3048" title="CONTOUR HIP TUBE TOP | Aritzia | CAIRO" data-color="CAIRO">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CAIRO" data-colorid="3048">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CAIRO" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_3048_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_3048_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_3048_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_3048_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_3048_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_c.jpg&quot;]" data-thumb-alt="CAIRO" data-thumb-title="CAIRO" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=2819" title="CONTOUR HIP TUBE TOP | Aritzia | DARK OLIVE" data-color="DARK OLIVE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK OLIVE" data-colorid="2819">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK OLIVE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_2819_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_2819_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_2819_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_2819_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_2819_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_c.jpg&quot;]" data-thumb-alt="DARK OLIVE" data-thumb-title="DARK OLIVE" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=27638" title="CONTOUR HIP TUBE TOP | Aritzia | SLAB BLUE" data-color="SLAB BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="SLAB BLUE" data-colorid="27638">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour SLAB BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_27638_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_27638_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_27638_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_27638_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_27638_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118770_1274_on_c.jpg&quot;]" data-thumb-alt="SLAB BLUE" data-thumb-title="SLAB BLUE" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=22419" class="js-swatches-all ar-swatches__all db f0 pl2">
+5
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="13" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118751-2819',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118751-2819", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="cbc484961cb8aa0e6451db0e77" data-itemid="118751-2819" data-mpid="118751" data-color="2819" data-pkey="118751-2819" data-colors="12" data-master="{&quot;name&quot;:&quot;CONTOUR CREW SHORTSLEEVE BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118751-2819&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;58.00&quot;,&quot;listprice&quot;:&quot;58.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;2 Lengths&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;2819&quot;,&quot;name&quot;:&quot;DARK OLIVE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;792&quot;}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR CREW SHORTSLEEVE BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR CREW SHORTSLEEVE BODYSUIT - 2 Lengths" data-default="on_a" data-default-hover="on_b" data-product="off_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=2819">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR CREW SHORTSLEEVE BODYSUIT - Crewneck shortsleeve bodysuit" title="CONTOUR CREW SHORTSLEEVE BODYSUIT - Crewneck shortsleeve bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_off_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_off_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118751_2819_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_off_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118751_2819_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="2 Lengths">
2 Lengths
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118751-2819" data-master="118751" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118751-2819  overflow-visible" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=2819" title="CONTOUR CREW SHORTSLEEVE BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118751-2819  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=2819" title="contour crew shortsleeve bodysuit">contour crew shortsleeve bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$58</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118751-2819" data-master="118751" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=2819" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | DARK OLIVE" data-color="DARK OLIVE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK OLIVE" data-colorid="2819">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK OLIVE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118751_2819_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_d.jpg&quot;]" data-thumb-alt="DARK OLIVE" data-thumb-title="DARK OLIVE" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=1274" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118751_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_d.jpg&quot;]" data-thumb-alt="BLACK" data-thumb-title="BLACK" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=31973" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | AQUAMARINE GREEN" data-color="AQUAMARINE GREEN">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="AQUAMARINE GREEN" data-colorid="31973">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour AQUAMARINE GREEN" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118751_31973_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_d.jpg&quot;]" data-thumb-alt="AQUAMARINE GREEN" data-thumb-title="AQUAMARINE GREEN" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=30360" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | CRUISE BLUE" data-color="CRUISE BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CRUISE BLUE" data-colorid="30360">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CRUISE BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118751_30360_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_d.jpg&quot;]" data-thumb-alt="CRUISE BLUE" data-thumb-title="CRUISE BLUE" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=27638" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | SLAB BLUE" data-color="SLAB BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="SLAB BLUE" data-colorid="27638">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour SLAB BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118751_27638_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_d.jpg&quot;]" data-thumb-alt="SLAB BLUE" data-thumb-title="SLAB BLUE" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=22419" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118740_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_d.jpg&quot;]" data-thumb-alt="WARM TAUPE" data-thumb-title="WARM TAUPE" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=2819" class="js-swatches-all ar-swatches__all db f0 pl2">
+6
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="14" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118308-1274',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118308-1274", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="d3fd03230515b4462c4ddf40e6" data-itemid="118308-1274" data-mpid="118308" data-color="1274" data-pkey="118308-1274" data-colors="2" data-master="{&quot;name&quot;:&quot;CONTOUR MINI TUBE DRESS&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118308-1274&quot;,&quot;category&quot;:&quot;AWA1F08&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A08&quot;,&quot;price&quot;:&quot;78.00&quot;,&quot;listprice&quot;:&quot;78.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;SSD&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1274&quot;,&quot;name&quot;:&quot;BLACK&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;720&quot;}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR MINI TUBE DRESS" class="relative db js-plp-hash " aria-label="View full details for CONTOUR MINI TUBE DRESS " data-default="on_a" data-default-hover="on_b" data-product="off_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-mini-tube-dress/118308.html?dwvar_118308_color=1274">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR MINI TUBE DRESS - Strapless mini tube dress" title="CONTOUR MINI TUBE DRESS - Strapless mini tube dress" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_off_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_off_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118308_1274_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_off_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118308_1274_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118308-1274" data-master="118308" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118308-1274  overflow-visible" href="https://www.aritzia.com/en/product/contour-mini-tube-dress/118308.html?dwvar_118308_color=1274" title="CONTOUR MINI TUBE DRESS">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118308-1274  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-mini-tube-dress/118308.html?dwvar_118308_color=1274" title="contour mini tube dress">contour mini tube dress<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$78</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118308-1274" data-master="118308" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-mini-tube-dress/118308.html?dwvar_118308_color=1274" title="CONTOUR MINI TUBE DRESS | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118308_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_1274_on_d.jpg&quot;]" data-thumb-alt="BLACK" data-thumb-title="BLACK" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-mini-tube-dress/118308.html?dwvar_118308_color=30751" title="CONTOUR MINI TUBE DRESS | Aritzia | DARK NIGHT NAVY" data-color="DARK NIGHT NAVY">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK NIGHT NAVY" data-colorid="30751">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK NIGHT NAVY" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118308_30751_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_30751_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_30751_off_a.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_30751_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_30751_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_30751_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_30751_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118308_30751_on_d.jpg&quot;]" data-thumb-alt="DARK NIGHT NAVY" data-thumb-title="DARK NIGHT NAVY" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1 mh5-ns mh0 ph0-ns w-100 w-third-ns " data-loopstat="15" data-page="0" data-rowMaxItems="2">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118770-2819',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118770-2819", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="1d385bd7f9ffe48b8616177ee9" data-itemid="118770-2819" data-mpid="118770" data-color="2819" data-pkey="118770-2819" data-colors="10" data-master="{&quot;name&quot;:&quot;CONTOUR HIP TUBE TOP&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118770-2819&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;40.00&quot;,&quot;listprice&quot;:&quot;40.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;SSN&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;2819&quot;,&quot;name&quot;:&quot;DARK OLIVE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;770&quot;}}" data-vg="true" data-campaignimg="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg">
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR HIP TUBE TOP" class="relative db js-plp-hash " aria-label="View full details for CONTOUR HIP TUBE TOP " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=2819">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/large/f7f7f7.jpg" alt="CONTOUR HIP TUBE TOP - Sleek tube top" title="CONTOUR HIP TUBE TOP - Sleek tube top" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118770-2819" data-master="118770" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118770-2819  overflow-visible" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=2819" title="CONTOUR HIP TUBE TOP">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118770-2819  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=2819" title="contour hip tube top">contour hip tube top<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$40</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118770-2819" data-master="118770" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=2819" title="CONTOUR HIP TUBE TOP | Aritzia | DARK OLIVE" data-color="DARK OLIVE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK OLIVE" data-colorid="2819">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK OLIVE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_2819_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR HIP TUBE TOP | Aritzia" data-thumb-title="CONTOUR HIP TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=28539" title="CONTOUR HIP TUBE TOP | Aritzia | BOLD FUCHSIA" data-color="BOLD FUCHSIA">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BOLD FUCHSIA" data-colorid="28539">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BOLD FUCHSIA" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_28539_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_28539_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_28539_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_28539_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_28539_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR HIP TUBE TOP | Aritzia" data-thumb-title="CONTOUR HIP TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=30252" title="CONTOUR HIP TUBE TOP | Aritzia | HALO PINK" data-color="HALO PINK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="HALO PINK" data-colorid="30252">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour HALO PINK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_30252_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_30252_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_30252_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_30252_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_30252_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR HIP TUBE TOP | Aritzia" data-thumb-title="CONTOUR HIP TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=3048" title="CONTOUR HIP TUBE TOP | Aritzia | CAIRO" data-color="CAIRO">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CAIRO" data-colorid="3048">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CAIRO" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_3048_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_3048_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_3048_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_3048_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_3048_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR HIP TUBE TOP | Aritzia" data-thumb-title="CONTOUR HIP TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=22419" title="CONTOUR HIP TUBE TOP | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_22419_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_22419_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_22419_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_22419_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR HIP TUBE TOP | Aritzia" data-thumb-title="CONTOUR HIP TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=27638" title="CONTOUR HIP TUBE TOP | Aritzia | SLAB BLUE" data-color="SLAB BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="SLAB BLUE" data-colorid="27638">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour SLAB BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118770_27638_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_27638_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_27638_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_2819_campaign_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_27638_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_27638_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118770_1274_on_b.jpg&quot;]" data-thumb-alt="CONTOUR HIP TUBE TOP | Aritzia" data-thumb-title="CONTOUR HIP TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-hip-tube-top/118770.html?dwvar_118770_color=2819" class="js-swatches-all ar-swatches__all db f0 pl2">
+5
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1 mh5-ns mh0 ph0-ns w-100 w-third-ns " data-loopstat="16" data-page="0" data-rowMaxItems="2">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '117359-1274',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "117359-1274", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="bc5a2a19d46cf32c9b279257af" data-itemid="117359-1274" data-mpid="117359" data-color="1274" data-pkey="117359-1274" data-colors="6" data-master="{&quot;name&quot;:&quot;CONTOUR BANDEAU TOP&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;117359-1274&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;28.00&quot;,&quot;listprice&quot;:&quot;28.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Online Exclusive&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1274&quot;,&quot;name&quot;:&quot;BLACK&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;787&quot;}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR BANDEAU TOP" class="relative db js-plp-hash " aria-label="View full details for CONTOUR BANDEAU TOP - Online Exclusive" data-default="on_a" data-default-hover="on_b" data-product="on_g" data-product-hover="on_g" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=1274">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/large/f7f7f7.jpg" alt="CONTOUR BANDEAU TOP - Bandeau tube top" title="CONTOUR BANDEAU TOP - Bandeau tube top" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_g.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_g.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_g.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_g.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_g.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_g.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_g.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="Online Exclusive">
Online Exclusive
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="117359-1274" data-master="117359" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="117359-1274  overflow-visible" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=1274" title="CONTOUR BANDEAU TOP">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="117359-1274  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=1274" title="contour bandeau top">contour bandeau top<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$28</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="117359-1274" data-master="117359" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=1274" title="CONTOUR BANDEAU TOP | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_g.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_d.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=22419" title="CONTOUR BANDEAU TOP | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_22419_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_22419_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_22419_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_22419_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_c.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=3634" title="CONTOUR BANDEAU TOP | Aritzia | DENUDE" data-color="DENUDE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DENUDE" data-colorid="3634">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DENUDE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_3634_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3634_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3634_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3634_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3634_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3634_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3634_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3634_on_e.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=1275" title="CONTOUR BANDEAU TOP | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1275_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1275_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1275_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1275_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_c.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=3048" title="CONTOUR BANDEAU TOP | Aritzia | CAIRO" data-color="CAIRO">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CAIRO" data-colorid="3048">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CAIRO" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_3048_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3048_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3048_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3048_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_3048_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_c.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=30252" title="CONTOUR BANDEAU TOP | Aritzia | HALO PINK" data-color="HALO PINK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="HALO PINK" data-colorid="30252">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour HALO PINK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_117359_30252_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_30252_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_30252_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_30252_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_30252_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_117359_1274_on_c.jpg&quot;]" data-thumb-alt="CONTOUR BANDEAU TOP | Aritzia" data-thumb-title="CONTOUR BANDEAU TOP | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-bandeau-top/117359.html?dwvar_117359_color=1274" class="js-swatches-all ar-swatches__all db f0 pl2">
+1
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li id="plp-promo-single-2" class="ar-product-grid__tile relative border-box ph1 w-100 ga-promotions">
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="17" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118760',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118760", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="6e815b19b9448d68ed3969a98d" data-itemid="118760" data-mpid="118760" data-color="1274" data-pkey="118760-1274" data-colors="3" data-master="{&quot;name&quot;:&quot;CONTOUR TUBE MAXI DRESS&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118760&quot;,&quot;category&quot;:&quot;AWA1F08&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A08&quot;,&quot;price&quot;:&quot;98.00&quot;,&quot;listprice&quot;:&quot;98.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;NR&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1274&quot;,&quot;name&quot;:&quot;BLACK&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;795&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR TUBE MAXI DRESS" class="relative db js-plp-hash " aria-label="View full details for CONTOUR TUBE MAXI DRESS " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=1274">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR TUBE MAXI DRESS - Tight maxi tube dress" title="CONTOUR TUBE MAXI DRESS - Tight maxi tube dress" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_1274_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118760_1274_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118760" data-master="118760" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118760  overflow-visible" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=1274" title="CONTOUR TUBE MAXI DRESS">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118760  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=1274" title="contour tube maxi dress">contour tube maxi dress<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$98</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118760" data-master="118760" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=1274" title="CONTOUR TUBE MAXI DRESS | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118760_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR TUBE MAXI DRESS | Aritzia" data-thumb-title="CONTOUR TUBE MAXI DRESS | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=30751" title="CONTOUR TUBE MAXI DRESS | Aritzia | DARK NIGHT NAVY" data-color="DARK NIGHT NAVY">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK NIGHT NAVY" data-colorid="30751">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK NIGHT NAVY" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118760_30751_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_30751_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_30751_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_30751_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_30751_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_30751_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_30751_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_30751_on_e.jpg&quot;]" data-thumb-alt="CONTOUR TUBE MAXI DRESS | Aritzia" data-thumb-title="CONTOUR TUBE MAXI DRESS | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-tube-maxi-dress/118760.html?dwvar_118760_color=22419" title="CONTOUR TUBE MAXI DRESS | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118760_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_22419_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_22419_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_22419_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_22419_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_22419_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_22419_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118760_22419_on_e.jpg&quot;]" data-thumb-alt="CONTOUR TUBE MAXI DRESS | Aritzia" data-thumb-title="CONTOUR TUBE MAXI DRESS | Aritzia" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="18" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118413',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118413", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="7dbde91b0cd7cdca81aeaae169" data-itemid="118413" data-mpid="118413" data-color="15104" data-pkey="118413-15104" data-colors="7" data-master="{&quot;name&quot;:&quot;CONTOUR CREW LONGSLEEVE&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118413&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;48.00&quot;,&quot;listprice&quot;:&quot;48.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;15104&quot;,&quot;name&quot;:&quot;MATTE PEARL&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;784&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR CREW LONGSLEEVE" class="relative db js-plp-hash " aria-label="View full details for CONTOUR CREW LONGSLEEVE " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-crew-longsleeve/118413.html?dwvar_118413_color=15104">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR CREW LONGSLEEVE - Body-hugging crewneck longsleeve" title="CONTOUR CREW LONGSLEEVE - Body-hugging crewneck longsleeve" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118413_15104_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118413_15104_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118413" data-master="118413" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118413  overflow-visible" href="https://www.aritzia.com/en/product/contour-crew-longsleeve/118413.html?dwvar_118413_color=15104" title="CONTOUR CREW LONGSLEEVE">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118413  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-crew-longsleeve/118413.html?dwvar_118413_color=15104" title="contour crew longsleeve">contour crew longsleeve<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$48</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118413" data-master="118413" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-longsleeve/118413.html?dwvar_118413_color=15104" title="CONTOUR CREW LONGSLEEVE | Aritzia | MATTE PEARL" data-color="MATTE PEARL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="MATTE PEARL" data-colorid="15104">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour MATTE PEARL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118413_15104_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_15104_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW LONGSLEEVE | Aritzia" data-thumb-title="CONTOUR CREW LONGSLEEVE | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-longsleeve/118413.html?dwvar_118413_color=1274" title="CONTOUR CREW LONGSLEEVE | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118413_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW LONGSLEEVE | Aritzia" data-thumb-title="CONTOUR CREW LONGSLEEVE | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-longsleeve/118413.html?dwvar_118413_color=1275" title="CONTOUR CREW LONGSLEEVE | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118413_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1275_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1275_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1275_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1275_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1275_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1275_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1275_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW LONGSLEEVE | Aritzia" data-thumb-title="CONTOUR CREW LONGSLEEVE | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-longsleeve/118413.html?dwvar_118413_color=29514" title="CONTOUR CREW LONGSLEEVE | Aritzia | UBE PURPLE" data-color="UBE PURPLE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="UBE PURPLE" data-colorid="29514">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour UBE PURPLE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118413_29514_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_29514_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_29514_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_29514_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_29514_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_c.jpg&quot;]" data-thumb-alt="CONTOUR CREW LONGSLEEVE | Aritzia" data-thumb-title="CONTOUR CREW LONGSLEEVE | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-longsleeve/118413.html?dwvar_118413_color=32007" title="CONTOUR CREW LONGSLEEVE | Aritzia | STARGAZER PINK" data-color="STARGAZER PINK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="STARGAZER PINK" data-colorid="32007">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour STARGAZER PINK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118413_32007_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_32007_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_32007_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_32007_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_32007_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_32007_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_32007_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_32007_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW LONGSLEEVE | Aritzia" data-thumb-title="CONTOUR CREW LONGSLEEVE | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-longsleeve/118413.html?dwvar_118413_color=22419" title="CONTOUR CREW LONGSLEEVE | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118413_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_22419_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_22419_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_22419_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_22419_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118413_1274_on_c.jpg&quot;]" data-thumb-alt="CONTOUR CREW LONGSLEEVE | Aritzia" data-thumb-title="CONTOUR CREW LONGSLEEVE | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-crew-longsleeve/118413.html?dwvar_118413_color=15104" class="js-swatches-all ar-swatches__all db f0 pl2">
+2
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="19" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118751',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118751", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="0f00235f672033df4c9d9fdddf" data-itemid="118751" data-mpid="118751" data-color="2819" data-pkey="118751-2819" data-colors="12" data-master="{&quot;name&quot;:&quot;CONTOUR CREW SHORTSLEEVE BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118751&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;58.00&quot;,&quot;listprice&quot;:&quot;58.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;2 Lengths&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;2819&quot;,&quot;name&quot;:&quot;DARK OLIVE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;792&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR CREW SHORTSLEEVE BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR CREW SHORTSLEEVE BODYSUIT - 2 Lengths" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=2819">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR CREW SHORTSLEEVE BODYSUIT - Crewneck shortsleeve bodysuit" title="CONTOUR CREW SHORTSLEEVE BODYSUIT - Crewneck shortsleeve bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118751_2819_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118751_2819_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="2 Lengths">
2 Lengths
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118751" data-master="118751" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118751  overflow-visible" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=2819" title="CONTOUR CREW SHORTSLEEVE BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118751  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=2819" title="contour crew shortsleeve bodysuit">contour crew shortsleeve bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$58</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118751" data-master="118751" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=2819" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | DARK OLIVE" data-color="DARK OLIVE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK OLIVE" data-colorid="2819">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK OLIVE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118751_2819_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_2819_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=1274" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118751_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=31973" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | AQUAMARINE GREEN" data-color="AQUAMARINE GREEN">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="AQUAMARINE GREEN" data-colorid="31973">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour AQUAMARINE GREEN" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118751_31973_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_31973_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=30360" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | CRUISE BLUE" data-color="CRUISE BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CRUISE BLUE" data-colorid="30360">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CRUISE BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118751_30360_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_30360_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=27638" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | SLAB BLUE" data-color="SLAB BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="SLAB BLUE" data-colorid="27638">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour SLAB BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118751_27638_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118751_27638_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=22419" title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118740_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118740_22419_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" data-thumb-title="CONTOUR CREW SHORTSLEEVE BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-crew-shortsleeve-bodysuit/118751.html?dwvar_118751_color=2819" class="js-swatches-all ar-swatches__all db f0 pl2">
+6
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="20" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118416',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118416", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="d359b94435129d06d33d3a4833" data-itemid="118416" data-mpid="118416" data-color="1275" data-pkey="118416-1275" data-colors="5" data-master="{&quot;name&quot;:&quot;CONTOUR NEW CREW TANK&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118416&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;38.00&quot;,&quot;listprice&quot;:&quot;38.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Online Exclusive&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1275&quot;,&quot;name&quot;:&quot;WHITE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;787&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR NEW CREW TANK" class="relative db js-plp-hash " aria-label="View full details for CONTOUR NEW CREW TANK - Online Exclusive" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-new-crew-tank/118416.html?dwvar_118416_color=1275">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR NEW CREW TANK - Body-hugging crewneck tank" title="CONTOUR NEW CREW TANK - Body-hugging crewneck tank" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118416_1275_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118416_1275_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="Online Exclusive">
Online Exclusive
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118416" data-master="118416" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118416  overflow-visible" href="https://www.aritzia.com/en/product/contour-new-crew-tank/118416.html?dwvar_118416_color=1275" title="CONTOUR NEW CREW TANK">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118416  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-new-crew-tank/118416.html?dwvar_118416_color=1275" title="contour new crew tank">contour new crew tank<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$38</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118416" data-master="118416" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-new-crew-tank/118416.html?dwvar_118416_color=1275" title="CONTOUR NEW CREW TANK | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118416_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1275_on_e.jpg&quot;]" data-thumb-alt="CONTOUR NEW CREW TANK | Aritzia" data-thumb-title="CONTOUR NEW CREW TANK | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-new-crew-tank/118416.html?dwvar_118416_color=1274" title="CONTOUR NEW CREW TANK | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118416_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR NEW CREW TANK | Aritzia" data-thumb-title="CONTOUR NEW CREW TANK | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-new-crew-tank/118416.html?dwvar_118416_color=18891" title="CONTOUR NEW CREW TANK | Aritzia | RICH MOCHA BROWN" data-color="RICH MOCHA BROWN">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="RICH MOCHA BROWN" data-colorid="18891">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour RICH MOCHA BROWN" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118416_18891_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_18891_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_18891_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_18891_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_18891_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_c.jpg&quot;]" data-thumb-alt="CONTOUR NEW CREW TANK | Aritzia" data-thumb-title="CONTOUR NEW CREW TANK | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-new-crew-tank/118416.html?dwvar_118416_color=27638" title="CONTOUR NEW CREW TANK | Aritzia | SLAB BLUE" data-color="SLAB BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="SLAB BLUE" data-colorid="27638">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour SLAB BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118416_27638_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_27638_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_27638_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_27638_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_27638_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_c.jpg&quot;]" data-thumb-alt="CONTOUR NEW CREW TANK | Aritzia" data-thumb-title="CONTOUR NEW CREW TANK | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-new-crew-tank/118416.html?dwvar_118416_color=29514" title="CONTOUR NEW CREW TANK | Aritzia | UBE PURPLE" data-color="UBE PURPLE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="UBE PURPLE" data-colorid="29514">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour UBE PURPLE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118416_29514_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_29514_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_29514_off_c.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_29514_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_29514_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118416_1274_on_c.jpg&quot;]" data-thumb-alt="CONTOUR NEW CREW TANK | Aritzia" data-thumb-title="CONTOUR NEW CREW TANK | Aritzia" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="21" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118754',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118754", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="fc4401387da339c35d2cde3929" data-itemid="118754" data-mpid="118754" data-color="1275" data-pkey="118754-1275" data-colors="3" data-master="{&quot;name&quot;:&quot;CONTOUR CAMI BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118754&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;48.00&quot;,&quot;listprice&quot;:&quot;48.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;COC&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Online Exclusive&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1275&quot;,&quot;name&quot;:&quot;WHITE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;770&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR CAMI BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR CAMI BODYSUIT - Online Exclusive" data-default="on_a" data-default-hover="on_b" data-product="on_c" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-cami-bodysuit/118754.html?dwvar_118754_color=1275">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR CAMI BODYSUIT - Cami bodysuit with thong-cut bottom" title="CONTOUR CAMI BODYSUIT - Cami bodysuit with thong-cut bottom" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_on_c.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_on_c.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118754_1275_on_c.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_on_c.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_118754_1275_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="Online Exclusive">
Online Exclusive
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118754" data-master="118754" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118754  overflow-visible" href="https://www.aritzia.com/en/product/contour-cami-bodysuit/118754.html?dwvar_118754_color=1275" title="CONTOUR CAMI BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118754  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-cami-bodysuit/118754.html?dwvar_118754_color=1275" title="contour cami bodysuit">contour cami bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$48</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118754" data-master="118754" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-cami-bodysuit/118754.html?dwvar_118754_color=1275" title="CONTOUR CAMI BODYSUIT | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118754_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1275_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CAMI BODYSUIT | Aritzia" data-thumb-title="CONTOUR CAMI BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-cami-bodysuit/118754.html?dwvar_118754_color=22419" title="CONTOUR CAMI BODYSUIT | Aritzia | WARM TAUPE" data-color="WARM TAUPE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WARM TAUPE" data-colorid="22419">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WARM TAUPE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118754_22419_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_22419_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_22419_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_22419_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_22419_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_22419_off_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1274_on_a.jpg&quot;]" data-thumb-alt="CONTOUR CAMI BODYSUIT | Aritzia" data-thumb-title="CONTOUR CAMI BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-cami-bodysuit/118754.html?dwvar_118754_color=1274" title="CONTOUR CAMI BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_118754_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_118754_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CAMI BODYSUIT | Aritzia" data-thumb-title="CONTOUR CAMI BODYSUIT | Aritzia" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="22" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118759',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118759", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="59f9ac5aabbaf51fb4f5b094ca" data-itemid="118759" data-mpid="118759" data-color="2819" data-pkey="118759-2819" data-colors="3" data-master="{&quot;name&quot;:&quot;CONTOUR CREW LONGSLEEVE MINI DRESS&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118759&quot;,&quot;category&quot;:&quot;AWA1F08&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A08&quot;,&quot;price&quot;:&quot;88.00&quot;,&quot;listprice&quot;:&quot;88.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;CON&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;Online Exclusive&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;2819&quot;,&quot;name&quot;:&quot;DARK OLIVE&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;784&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR CREW LONGSLEEVE MINI DRESS" class="relative db js-plp-hash " aria-label="View full details for CONTOUR CREW LONGSLEEVE MINI DRESS - Online Exclusive" data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-crew-longsleeve-mini-dress/118759.html?dwvar_118759_color=2819">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR CREW LONGSLEEVE MINI DRESS - Crewneck longsleeve mini dress" title="CONTOUR CREW LONGSLEEVE MINI DRESS - Crewneck longsleeve mini dress" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118759_2819_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a08_118759_2819_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
<div class="product-label ar-product-label js-product-label fn1 bg-white" style data-productLabel="Online Exclusive">
Online Exclusive
</div>
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118759" data-master="118759" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118759  overflow-visible" href="https://www.aritzia.com/en/product/contour-crew-longsleeve-mini-dress/118759.html?dwvar_118759_color=2819" title="CONTOUR CREW LONGSLEEVE MINI DRESS">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118759  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-crew-longsleeve-mini-dress/118759.html?dwvar_118759_color=2819" title="contour crew longsleeve mini dress">contour crew longsleeve mini dress<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$88</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1  ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118759" data-master="118759" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-longsleeve-mini-dress/118759.html?dwvar_118759_color=2819" title="CONTOUR CREW LONGSLEEVE MINI DRESS | Aritzia | DARK OLIVE" data-color="DARK OLIVE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK OLIVE" data-colorid="2819">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK OLIVE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118759_2819_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_2819_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW LONGSLEEVE MINI DRESS | Aritzia" data-thumb-title="CONTOUR CREW LONGSLEEVE MINI DRESS | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-longsleeve-mini-dress/118759.html?dwvar_118759_color=1274" title="CONTOUR CREW LONGSLEEVE MINI DRESS | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118759_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW LONGSLEEVE MINI DRESS | Aritzia" data-thumb-title="CONTOUR CREW LONGSLEEVE MINI DRESS | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-crew-longsleeve-mini-dress/118759.html?dwvar_118759_color=15104" title="CONTOUR CREW LONGSLEEVE MINI DRESS | Aritzia | MATTE PEARL" data-color="MATTE PEARL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="MATTE PEARL" data-colorid="15104">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour MATTE PEARL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a08_118759_15104_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_15104_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_15104_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_15104_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_15104_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_15104_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_15104_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a08_118759_15104_on_e.jpg&quot;]" data-thumb-alt="CONTOUR CREW LONGSLEEVE MINI DRESS | Aritzia" data-thumb-title="CONTOUR CREW LONGSLEEVE MINI DRESS | Aritzia" />
</span>
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="23" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '118415',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "118415", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="46072c471babdfefa18c915648" data-itemid="118415" data-mpid="118415" data-color="15104" data-pkey="118415-15104" data-colors="13" data-master="{&quot;name&quot;:&quot;NEW CONTOUR TUBE TOP&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;118415&quot;,&quot;category&quot;:&quot;AWA1F01&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A01&quot;,&quot;price&quot;:&quot;40.00&quot;,&quot;listprice&quot;:&quot;40.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular&quot;,&quot;genbuycode&quot;:&quot;COE&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;15104&quot;,&quot;name&quot;:&quot;MATTE PEARL&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;792&quot;}}" data-vg="false" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="NEW CONTOUR TUBE TOP" class="relative db js-plp-hash " aria-label="View full details for NEW CONTOUR TUBE TOP " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="on_a" href="https://www.aritzia.com/en/product/new-contour-tube-top/118415.html?dwvar_118415_color=15104">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="NEW CONTOUR TUBE TOP - Body-shaping tube top" title="NEW CONTOUR TUBE TOP - Body-shaping tube top" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118415_15104_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a01_118415_15104_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="118415" data-master="118415" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="118415  overflow-visible" href="https://www.aritzia.com/en/product/new-contour-tube-top/118415.html?dwvar_118415_color=15104" title="NEW CONTOUR TUBE TOP">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="118415  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/new-contour-tube-top/118415.html?dwvar_118415_color=15104" title="new contour tube top">new contour tube top<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$40</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="118415" data-master="118415" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/new-contour-tube-top/118415.html?dwvar_118415_color=15104" title="NEW CONTOUR TUBE TOP | Aritzia | MATTE PEARL" data-color="MATTE PEARL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="MATTE PEARL" data-colorid="15104">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour MATTE PEARL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118415_15104_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_15104_on_e.jpg&quot;]" data-thumb-alt="NEW CONTOUR TUBE TOP | Aritzia" data-thumb-title="NEW CONTOUR TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/new-contour-tube-top/118415.html?dwvar_118415_color=1274" title="NEW CONTOUR TUBE TOP | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118415_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1274_on_e.jpg&quot;]" data-thumb-alt="NEW CONTOUR TUBE TOP | Aritzia" data-thumb-title="NEW CONTOUR TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/new-contour-tube-top/118415.html?dwvar_118415_color=32007" title="NEW CONTOUR TUBE TOP | Aritzia | STARGAZER PINK" data-color="STARGAZER PINK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="STARGAZER PINK" data-colorid="32007">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour STARGAZER PINK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118415_32007_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_32007_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_32007_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_32007_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_32007_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_32007_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_32007_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_32007_on_e.jpg&quot;]" data-thumb-alt="NEW CONTOUR TUBE TOP | Aritzia" data-thumb-title="NEW CONTOUR TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/new-contour-tube-top/118415.html?dwvar_118415_color=31973" title="NEW CONTOUR TUBE TOP | Aritzia | AQUAMARINE GREEN" data-color="AQUAMARINE GREEN">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="AQUAMARINE GREEN" data-colorid="31973">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour AQUAMARINE GREEN" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118415_31973_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_31973_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_31973_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_31973_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_31973_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_31973_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_31973_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_31973_on_e.jpg&quot;]" data-thumb-alt="NEW CONTOUR TUBE TOP | Aritzia" data-thumb-title="NEW CONTOUR TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/new-contour-tube-top/118415.html?dwvar_118415_color=1275" title="NEW CONTOUR TUBE TOP | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118415_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1275_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1275_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1275_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1275_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1275_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1275_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_1275_on_e.jpg&quot;]" data-thumb-alt="NEW CONTOUR TUBE TOP | Aritzia" data-thumb-title="NEW CONTOUR TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/new-contour-tube-top/118415.html?dwvar_118415_color=30751" title="NEW CONTOUR TUBE TOP | Aritzia | DARK NIGHT NAVY" data-color="DARK NIGHT NAVY">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="DARK NIGHT NAVY" data-colorid="30751">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour DARK NIGHT NAVY" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a01_118415_30751_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_30751_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_30751_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_30751_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_30751_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_30751_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_30751_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a01_118415_30751_on_e.jpg&quot;]" data-thumb-alt="NEW CONTOUR TUBE TOP | Aritzia" data-thumb-title="NEW CONTOUR TUBE TOP | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/new-contour-tube-top/118415.html?dwvar_118415_color=15104" class="js-swatches-all ar-swatches__all db f0 pl2">
+8
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
<li class="ar-product-grid__tile relative border-box ph1  w-50 w-25-ns " data-loopstat="24" data-page="0" data-rowMaxItems="4">

<script type="text/javascript">//<!--
/* <![CDATA[ */
(function(){
try {
    if(window.CQuotient) {
	var cq_params = {};
	
	cq_params.cookieId = window.CQuotient.getCQCookieId();
	cq_params.userId = window.CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.accumulate = true;
	cq_params.products = [{
	    id: '120567-1274',
	    sku: ''
	}];
	cq_params.categoryId = 'contour-clothing';
	cq_params.refinements = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
	cq_params.personalized = 'false';
	cq_params.sortingRule = 'Aritzia-Department-Sort-Steady-State';
	cq_params.imageUUID = '__UNDEFINED__';
	cq_params.realm = "AAIV";
	cq_params.siteId = "Aritzia_CA";
	cq_params.instanceType = "prd";
	cq_params.queryLocale = "en_CA";
	cq_params.locale = window.CQuotient.locale;
	
	if(window.CQuotient.sendActivity)
	    window.CQuotient.sendActivity(CQuotient.clientId, 'viewCategory', cq_params);
	else
	    window.CQuotient.activities.push({
	    	activityType: 'viewCategory',
	    	parameters: cq_params
	    });
  }
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewCategoryProduct-active_data.js) */
(function(){
try {
	if (dw.ac) {
		var search_params = {};
		search_params.persd = 'false';
		search_params.refs = '[{\"name\":\"Category\",\"value\":\"contour-clothing\"}]';
		search_params.sort = 'Aritzia-Department-Sort-Steady-State';
		search_params.imageUUID = '';
		search_params.searchID = '4e83fe5c-26dd-4417-bc4f-3241ade365dd';
		search_params.locale = 'en_CA';
		search_params.queryLocale = 'en_CA';
		search_params.showProducts = 'true';
		dw.ac.applyContext({category: "contour-clothing", searchData: search_params});
		if (typeof dw.ac._scheduleDataSubmission === "function") {
			dw.ac._scheduleDataSubmission();
		}
	}
} catch(err) {}
})();
/* ]]> */
// -->
</script>
<script type="text/javascript">//<!--
/* <![CDATA[ (viewProduct-active_data.js) */
dw.ac._capture({id: "120567-1274", type: "searchhit"});
/* ]]> */
// -->
</script>
<div class="product-tile ar-product-tile js-product-tile ar-quickshop ga-product flex flex-column  product-tile--unfiltered" data-uuid="1bf74520ddea8dfaeea47359d7" data-itemid="120567-1274" data-mpid="120567" data-color="1274" data-pkey="120567-1274" data-colors="7" data-master="{&quot;name&quot;:&quot;CONTOUR DECO BODYSUIT&quot;,&quot;brand&quot;:&quot;Aritzia&quot;,&quot;master&quot;:&quot;120567-1274&quot;,&quot;category&quot;:&quot;AWA1F28&quot;,&quot;size&quot;:&quot;unavailable&quot;,&quot;color&quot;:&quot;unavailable&quot;,&quot;department&quot;:&quot;A28&quot;,&quot;price&quot;:&quot;68.00&quot;,&quot;listprice&quot;:&quot;68.00&quot;,&quot;discount&quot;:&quot;unavailable&quot;,&quot;currency&quot;:&quot;CAD&quot;,&quot;issale&quot;:&quot;regular, final sale&quot;,&quot;genbuycode&quot;:&quot;CON&quot;,&quot;varbuycode&quot;:&quot;&quot;,&quot;model&quot;:&quot;unavailable&quot;,&quot;availability&quot;:&quot;in stock&quot;,&quot;label&quot;:&quot;&quot;,&quot;climaterating&quot;:&quot;unavailable&quot;,&quot;specialorderdate&quot;:&quot;&quot;,&quot;height&quot;:&quot;unavailable&quot;}" data-variant="{&quot;color&quot;:{&quot;id&quot;:&quot;1274&quot;,&quot;name&quot;:&quot;BLACK&quot;},&quot;model&quot;:{&quot;id&quot;:&quot;797&quot;}}" data-vg="true" data-campaignimg>
<div class="product-tile__imagewrapper relative order-1 ">
<div class="product-image ar-product-image js-product-plp-image tc  js-product-plp-image--trigger-qv">
<a title="CONTOUR DECO BODYSUIT" class="relative db js-plp-hash " aria-label="View full details for CONTOUR DECO BODYSUIT " data-default="on_a" data-default-hover="on_b" data-product="on_a" data-product-hover="off_a" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1274">
<img class="lazy w-auto w-100-l h-auto db" src="//aritzia.scene7.com/is/image/Aritzia/medium/f7f7f7.jpg" alt="CONTOUR DECO BODYSUIT - Off-shoulder longsleeve bodysuit" title="CONTOUR DECO BODYSUIT - Off-shoulder longsleeve bodysuit" data-mouseover-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_off_a.jpg" data-mouseout-img="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_a.jpg" data-original="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_a.jpg" data-srcset="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_120567_1274_on_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_a.jpg 500w" data-srcset-mouseover="
								https://aritzia.scene7.com/is/image/Aritzia/large/s24_99_a28_120567_1274_off_a.jpg 840w,
								https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_off_a.jpg 500w" sizes="(max-width: 1980px) 500px, 100vw">
</a>
</div>
</div>
<div class="product-info ml1 ml2-ns ml1-ns pl1 pl0-ns relative order-2-ns order-3">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer dn db-ns" data-pid="120567-1274" data-master="120567" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="f0 product-brand ar-product-brand js-product-plp-brand pr4 mt2-ns">
<h6>
<a class="120567-1274  overflow-visible" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1274" title="CONTOUR DECO BODYSUIT">Aritzia</a>
</h6>
</div>
<div class="f0 product-name ar-product-name js-product-plp-name pr4-ns">
<h6>
<a class="120567-1274  ws-normal ttc ttu-fr overflow-visible" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1274" title="contour deco bodysuit">contour deco bodysuit<span class="ttn"></span></a>
</h6>
</div>
<div class="f0 product-pricing">
<span class="js-product__sales-price" title="Sale Price">
<span>$68</span>
</span>
</div>
</div>
<div class="product-tile__labels mv1 product-tile__labels--swatches-max ml1 ml2-ns ml1-ns pl1 pl0-ns lh-solid relative order-2 order-3-ns">
<div class="ar-bookmark ar-bookmark--light ar-bookmark--light-hover js-bookmark right-0 top-100 z-1 absolute pointer db dn-ns" data-pid="120567-1274" data-master="120567" tabindex="0">
<svg class="ar-bookmark__icon js-bookmark__icon" role="img" aria-label="Not Selected" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" fill="black">
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28ZM7.13317 12.28L12.2532 15.87V2.47H2.01317V15.91L7.13317 12.28Z" class="ar-bookmark__icon-outline" />
<path d="M14.0132 19.28L7.13317 14.45L0.253174 19.28V0.720001H14.0132V19.28Z" class="ar-bookmark__icon-fill" fill="none" />
</svg>
</div>
<div class="product-swatches bg-white w-100 dn">
<ul class="ar-swatches js-swatches flex items-center flex-wrap pv1-ns" data-mobile-carousel="false">
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1274" title="CONTOUR DECO BODYSUIT | Aritzia | BLACK" data-color="BLACK">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="BLACK" data-colorid="1274">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour BLACK" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_1274_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_c.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_d.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1274_on_e.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1275" title="CONTOUR DECO BODYSUIT | Aritzia | WHITE" data-color="WHITE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="WHITE" data-colorid="1275">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour WHITE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_1275_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1275_off_c.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=15104" title="CONTOUR DECO BODYSUIT | Aritzia | MATTE PEARL" data-color="MATTE PEARL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="MATTE PEARL" data-colorid="15104">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour MATTE PEARL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_15104_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_15104_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_15104_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_15104_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_15104_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_15104_off_c.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1565" title="CONTOUR DECO BODYSUIT | Aritzia | COFFEE BEAN" data-color="COFFEE BEAN">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="COFFEE BEAN" data-colorid="1565">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour COFFEE BEAN" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_1565_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1565_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1565_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1565_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1565_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_1565_off_c.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  ">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=30360" title="CONTOUR DECO BODYSUIT | Aritzia | CRUISE BLUE" data-color="CRUISE BLUE">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="CRUISE BLUE" data-colorid="30360">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour CRUISE BLUE" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_30360_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_30360_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_30360_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_30360_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_30360_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_30360_off_c.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="ar-swatches__swatch-container relative  dn">
<a class="ar-swatches__swatch-anchor db pt2 pt1-ns pb2 pb1-ns" href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=24277" title="CONTOUR DECO BODYSUIT | Aritzia | OXIDIZED TEAL" data-color="OXIDIZED TEAL">
<span class="ar-swatches__swatch js-swatches__swatch   relative db br-100 border-box z-1" data-color="OXIDIZED TEAL" data-colorid="24277">
<img class="ar-swatches__image db br-100 lazy" src="//aritzia.scene7.com/is/image/Aritzia/swatch/f7f7f7.jpg" alt="Colour OXIDIZED TEAL" data-original="https://aritzia.scene7.com/is/image/Aritzia/swatch/s24_99_a28_120567_24277_sw.jpg" data-thumb-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_24277_off_a.jpg" data-thumb-hover-src="https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_24277_off_b.jpg" data-thumb-carousel-images="[&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_24277_off_a.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_24277_off_b.jpg&quot;,&quot;https://aritzia.scene7.com/is/image/Aritzia/medium/s24_99_a28_120567_24277_off_c.jpg&quot;]" data-thumb-alt="CONTOUR DECO BODYSUIT | Aritzia" data-thumb-title="CONTOUR DECO BODYSUIT | Aritzia" />
</span>
</a>
</li>
<li class="order-2 order-0-ns">
<a href="https://www.aritzia.com/en/product/contour-deco-bodysuit/120567.html?dwvar_120567_color=1274" class="js-swatches-all ar-swatches__all db f0 pl2">
+2
</a>
</li>
</ul>
</div>
</div>
<div class="js-product-tile__slug-text ml1 ml2-ns pl1 pl0-ns order-4">
<div class="db dn-ns">
</div>
<div class="ar-product-tile__rv js-product-tile__rv fn1 pt1 dn lh-solid">
Recently Viewed
</div>
</div>

</div>
</li>
</ul>
<div class="ar-load-more js-load-more flex justify-center mt3 mb1">
<div class="js-load-more__button mb3">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?start=24&amp;sz=24&amp;loadmore=true&amp;format=ajax&amp;enablepromos=true&amp;numpromos=2&amp;promowidth=4&amp;productsperrow=4&amp;templaterowcounter=0&amp;enabledynamiclayout=false&amp;dynamiclayout=&amp;flexpattern=4|4|2|pt|4|2|pt|4|4|pt|4|4|2|&amp;isflextemplate=true&amp;flexrowindex=9&amp;flexrowproductcount=0" class="button secondary pointer db" onclick="return app.search.loadProducts(this, 'https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing?start=24&amp;sz=24&amp;loadmore=true&amp;format=ajax&amp;enablepromos=true&amp;numpromos=2&amp;promowidth=4&amp;productsperrow=4&amp;templaterowcounter=0&amp;enabledynamiclayout=false&amp;dynamiclayout=&amp;flexpattern=4|4|2|pt|4|2|pt|4|4|pt|4|4|2|&amp;isflextemplate=true&amp;flexrowindex=9&amp;flexrowproductcount=0')" data-loader="/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw6dfde8da/images/zoomloader.gif" data-enablepromos="true" data-numpromos="2.0" data-promowidth="4.0">
<span>Show More</span>
</a>
</div>
</div>
<div class="ar-dead-end js-dead-end-cta tl tc-ns dn ">
<div class="ar-dead-end-cta dib ph3 border-box">
<span class="db f0 f2-ns mb3 mb4-ns pb3 pb0-ns bb bw0-ns b--black-10">Looking for more?</span>
<ul class="js-dead-end-cta__links flex justify-center-ns flex-wrap f2 f3-ns">
<li class="w-100 w-auto-ns mh4-ns mb3 mb0-ns pb3 pb0-ns pl3 pl0-ns bb bw0-ns b--black-10">
<a data-ec="plp" data-ea="end of plp nav" href="https://www.aritzia.com/en/shop-by/shapewear-clothing" class="underline-hover">
Body Shaping
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div role="complementary" id="product-list-footer" aria-label="product-list-footer" class="ga-promotions">
</div>
<div id="plp-nav-swiper" role="navigation" aria-label="plp-nav-swiper" class="ga-promotions ar-pill-swiper__plp relative db dn-ns">
<div class="ar-category-swiper ar-pill-swiper">
<div class="ar-swiper ar-swiper--fade">
<div class="ar-swiper-buttons cf">
<div class="ar-swiper-next dn dib-ns "><a>Next</a></div>
<div class="ar-swiper-prev dn dib-ns"><a>Prev</a></div>
</div>
<div class="ar-swiper-scroll">
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by" data-cat-id="Shop-by">
All Shop By
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/contour-shop-by" data-cat-id="contour-shop-by">
Contour
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/seamless-feature-1" data-cat-id="seamless-feature-1">
Seamless
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/cozy-fleece-shop-by" data-cat-id="cozy-fleece-shop-by">
Sweatfleece
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/effortless-pant-shop-by" data-cat-id="effortless-pant-shop-by">
The Effortless Pant™
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/super-puff-shop-by" data-cat-id="super-puff-shop-by">
The Super Puff™
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/womens-basics" data-cat-id="womens-basics">
Everyday Essentials
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/event-dressing" data-cat-id="event-dressing">
Going Out
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/loungewear-1" data-cat-id="loungewear-1">
Loungewear
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/vacation-outfits" data-cat-id="vacation-outfits">
Vacation
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/romantic-edit" data-cat-id="romantic-edit">
Valentine's Day
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/workwear" data-cat-id="workwear">
Wear to Work
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/working-out" data-cat-id="working-out">
Working Out
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing" data-cat-id="shapewear-clothing">
Body Shaping
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/fabric-spacer-shapewear" data-cat-id="fabric-spacer-shapewear">
Fabric
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/contour-clothing" class="selected" data-cat-id="contour-clothing">
Contour
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/sculpt-knit-clothing" data-cat-id="sculpt-knit-clothing">
Sculpt Knit
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/seamless-clothes" data-cat-id="seamless-clothes">
Seamless
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/category-spacer-shapewear" data-cat-id="category-spacer-shapewear">
Categories
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/tops" data-cat-id="tops">
Tops
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/shapewear-bodysuits" data-cat-id="shapewear-bodysuits">
Bodysuits
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/body-shaping-dresses" data-cat-id="body-shaping-dresses">
Dresses & Skirts
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing/intimates-shapewear" data-cat-id="intimates-shapewear">
Intimates
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/cargo-parachute-shop-by" data-cat-id="cargo-parachute-shop-by">
Cargo & Parachute
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/two-piece-sets-1" data-cat-id="two-piece-sets-1">
Matching Sets
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/online-exclusive" data-cat-id="online-exclusive">
Online Exclusives
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/puffers-shop-by" data-cat-id="puffers-shop-by">
Puffers
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/butter-fabric" data-cat-id="butter-fabric">
Butter
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/clothing/sweatsuit-sets/cozy-fleece" data-cat-id="cozy-fleece-shop">
Cozy Fleece
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/crepette-clothing" data-cat-id="crepette-clothing">
Crepette
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/sculpt-knit-shop-by" data-cat-id="sculpt-knit-shop-by">
Sculpt Knit
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/clothing?prefn1=sustainability&amp;prefv1=Organic%20Materials%20%7C%20Recycled%20Materials%20%7C%20Responsible%20Forestry%20%7C%20Responsible%20Wool%20%7C%20Responsible%20Cashmere%20%7C%20Responsible%20Down" data-cat-id="sustainable-materials">
Sustainable Styles
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/vegan-leather-shop-by" data-cat-id="vegan-leather-shop-by">
Vegan Leather
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/shapewear-clothing-feature" data-cat-id="shapewear-clothing-feature">
Body Shaping
</a>
</div>
<div class="ar-swiper-item" data-ga-creative="text-swiper">
<a href="https://www.aritzia.com/en/shop-by/valentines-day-shopby-feature" data-cat-id="valentines-day-shopby-feature">
Valentine's Day
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="ar-footer" class="bg-true-black white js-footer overflow-hidden cb">
<div class="relative overflow-hidden">
<div role="complementary" aria-label="ar-footer" class="ph4-ns pt4-ns mh3 mt5">
<div class="cf flex flex-wrap-reverse flex-nowrap-ns mb5">
<div class="w-100 w-50-ns pr4-ns mt4 pt3 pt0-ns mt0-ns">
<h3 class="ttu o-60 mb3 pb2-ns">Join Aritzia's mailing list</h3>
<div class="content-asset">
<p>Insider info on sales, new arrivals and more good stuff.</p>
<div class="newsletter-container">
<form autocomplete="off" action="/on/demandware.store/Sites-Aritzia_CA-Site/en_CA/Account-AddMail">
<div class="input-container newsletter relative " data-success="Thanks for subscribing.">
<div class="error_message red pv1 ma0 ">Please enter a valid email address.</div>
<label class="form-label-wrap">
<input type="text" name="mail" class="ar-newsletter__email-input newsletter-input f1 " value placeholder="Email Address" autocapitalize="off" autocorrect="off" aria-label="email" inputmode="email" />
<span class="hidden">Email Address</span>
</label>
<input type="hidden" value="en_CA" name="language" />
<span class="newsletter-submit">
<input type="submit" value="Submit" class="button ar-newsletter__submit-btn clip" />
</span>
<div class="legal">
<div class="legal-content ">
Don't worry, you can unsubscribe from our mailing list at any time.
All emails will be sent by Aritzia LP | 611 Alexander Street | Vancouver, BC | V6A 1E1 | Aritzia.com
|
<a href="/en/privacy-policy">
Privacy Policy
</a>
</div>
<div class="arrow-up pb1"></div>
</div>
</div>
</form>
</div>
</div> 
<div class="mv5">
<h3 class="ttu o-60 mb3 pb2-ns">Aritzia Research Community</h3>
<p class="w-70-ns mb1">
Join the Aritzia Research Community for a chance to provide valued feedback and receive an Aritzia gift card in return. Interested?
</p>
<a href="https://airtable.com/shrNqPX9R03BqVrma" class="ar-link" data-link-type="research-community-footer" target="_blank">Learn More</a>
</div>
<div class="mt4">
<ul class="flex">
<li class="mr3 pr2">
<a href="http://www.facebook.com/aritzia" target="_blank" aria-label="Facebook">
<svg width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M18.2132585,15.9571538 L18.2132585,27.8963852 L13.3249589,27.8963852 L13.3249589,15.9571538 L11,15.9571538 L11,11.7394418 L13.3249589,11.7394418 L13.3249589,9.00927976 C13.3249589,7.05724379 14.238756,4 18.2574033,4 L21.8787475,4.01493524 L21.8787475,8.11017826 L19.2506611,8.11017826 C18.8224566,8.11017826 18.2132585,8.32823278 18.2132585,9.2601918 L18.2132585,11.7394418 L21.9405502,11.7394418 L21.5123458,15.9571538 L18.2132585,15.9571538 Z" fill="#FFFFFF"></path>
</g>
</svg>
</a>
</li>
<li class="mr3 pr2">
<a href="http://twitter.com/aritzia" target="_blank" aria-label="Twitter">
<svg width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M24.9463939,12.4170698 C24.9463939,18.8341231 20.1339118,26.2334086 11.3338613,26.2334086 C8.63175897,26.2334086 6.11766702,25.4301675 4,24.0514921 C4.37602071,24.0988286 4.75641375,24.1180591 5.14117913,24.1180591 C7.38418638,24.1180591 9.44501306,23.3444033 11.0817234,22.0411705 C8.99029034,22.0041888 7.22241003,20.5988867 6.61465563,18.6699246 C6.90614455,18.727616 7.2049207,18.755722 7.51389895,18.755722 C7.95113234,18.755722 8.37379127,18.6980307 8.7731311,18.5856065 C6.58696418,18.1403476 4.93713688,16.1758832 4.93713688,13.8238512 L4.93713688,13.7632013 C5.58278485,14.1271006 6.32025182,14.3475112 7.10435702,14.3697002 C5.82034832,13.5013714 4.97648789,12.0132304 4.97648789,10.3283471 C4.97648789,9.43782936 5.21259392,8.60648221 5.62359329,7.88755923 C7.98173867,10.8253803 11.5087546,12.7587802 15.4846635,12.9599602 C15.4030466,12.6049365 15.3607807,12.2351202 15.3607807,11.8534697 C15.3607807,9.17304085 17.5032243,7 20.1455714,7 C21.5199416,7 22.7645993,7.58874762 23.6376087,8.53103968 C24.7263198,8.31506693 25.7509034,7.90974821 26.6763807,7.35502369 C26.3178493,8.48814098 25.5599781,9.44078789 24.5718307,10.0398904 C25.5395739,9.92450767 26.4621363,9.66415696 27.3191138,9.27658943 C26.6792956,10.2499461 25.8674989,11.1049614 24.9318195,11.7898613 C24.9420216,11.9984377 24.9463939,12.2070142 24.9463939,12.4170698 Z" fill="#FFFFFF"></path>
</g>
</svg>
</a>
</li>
<li class="mr3 pr2">
<a href="http://instagram.com/aritzia" target="_blank" aria-label="Instagram">
<svg width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(6.000000, 6.000000)" fill="#FFFFFF">
<path d="M9.99686508,0.00630952381 C7.28186508,0.00630952381 6.94142857,0.0178174603 5.87515873,0.066468254 C4.81111111,0.115 4.08440476,0.284007937 3.44853175,0.531150794 C2.79115079,0.786587302 2.23365079,1.1284127 1.67785714,1.68416667 C1.12210317,2.23996032 0.780277778,2.79746032 0.52484127,3.45484127 C0.277698413,4.09071429 0.108690476,4.81742063 0.0601587302,5.88146825 C0.0115079365,6.9477381 0,7.2881746 0,10.0031746 C0,12.7181349 0.0115079365,13.0585714 0.0601587302,14.1248413 C0.108690476,15.1888889 0.277698413,15.9155952 0.52484127,16.5514683 C0.780277778,17.2088492 1.12210317,17.7663492 1.67785714,18.3221429 C2.23365079,18.8778968 2.79115079,19.2197222 3.44853175,19.4751984 C4.08440476,19.7223016 4.81111111,19.8913095 5.87515873,19.9398413 C6.94142857,19.9884921 7.28186508,20 9.99686508,20 C12.7118254,20 13.0522619,19.9884921 14.1185317,19.9398413 C15.1825794,19.8913095 15.9092857,19.7223016 16.5451587,19.4751984 C17.2025397,19.2197222 17.7600397,18.8778968 18.3158333,18.3221429 C18.8715873,17.7663492 19.2134127,17.2088492 19.4688889,16.5514683 C19.7159921,15.9155952 19.885,15.1888889 19.9335317,14.1248413 C19.9821825,13.0585714 19.9936905,12.7181349 19.9936905,10.0031746 C19.9936905,7.2881746 19.9821825,6.9477381 19.9335317,5.88146825 C19.885,4.81742063 19.7159921,4.09071429 19.4688889,3.45484127 C19.2134127,2.79746032 18.8715873,2.23996032 18.3158333,1.68416667 C17.7600397,1.1284127 17.2025397,0.786587302 16.5451587,0.531150794 C15.9092857,0.284007937 15.1825794,0.115 14.1185317,0.066468254 C13.0522619,0.0178174603 12.7118254,0.00630952381 9.99686508,0.00630952381 Z M9.99686508,1.80753968 C12.6661111,1.80753968 12.9823016,1.8177381 14.0364286,1.86583333 C15.0111111,1.91027778 15.5404365,2.07313492 15.8926984,2.21003968 C16.3593254,2.39138889 16.6923413,2.60801587 17.0421429,2.95785714 C17.3919841,3.30765873 17.6086111,3.6406746 17.7899603,4.10730159 C17.9268651,4.45956349 18.0897222,4.98888889 18.1341667,5.96357143 C18.1822619,7.01769841 18.1924603,7.33388889 18.1924603,10.0031746 C18.1924603,12.6724206 18.1822619,12.9886111 18.1341667,14.0427381 C18.0897222,15.0174206 17.9268651,15.546746 17.7899603,15.8990079 C17.6086111,16.3656349 17.3919841,16.6986508 17.0421429,17.0484524 C16.6923413,17.3982937 16.3593254,17.6149206 15.8926984,17.7962698 C15.5404365,17.9331746 15.0111111,18.0960317 14.0364286,18.1404762 C12.9824603,18.1885714 12.6663095,18.1987698 9.99686508,18.1987698 C7.32738095,18.1987698 7.01126984,18.1885714 5.9572619,18.1404762 C4.98257937,18.0960317 4.45325397,17.9331746 4.10099206,17.7962698 C3.63436508,17.6149206 3.30134921,17.3982937 2.95154762,17.0484524 C2.60174603,16.6986508 2.38507937,16.3656349 2.20373016,15.8990079 C2.0668254,15.546746 1.90396825,15.0174206 1.85952381,14.0427381 C1.81142857,12.9886111 1.80123016,12.6724206 1.80123016,10.0031746 C1.80123016,7.33388889 1.81142857,7.01769841 1.85952381,5.96357143 C1.90396825,4.98888889 2.0668254,4.45956349 2.20373016,4.10730159 C2.38507937,3.6406746 2.60170635,3.30765873 2.95154762,2.95785714 C3.30134921,2.60801587 3.63436508,2.39138889 4.10099206,2.21003968 C4.45325397,2.07313492 4.98257937,1.91027778 5.9572619,1.86583333 C7.01138889,1.8177381 7.32757937,1.80753968 9.99686508,1.80753968 L9.99686508,1.80753968 Z"></path>
<path d="M9.99686508,13.3354365 C8.15646825,13.3354365 6.66456349,11.8435317 6.66456349,10.0031746 C6.66456349,8.16277778 8.15646825,6.67087302 9.99686508,6.67087302 C11.8372222,6.67087302 13.329127,8.16277778 13.329127,10.0031746 C13.329127,11.8435317 11.8372222,13.3354365 9.99686508,13.3354365 Z M9.99686508,4.86964286 C7.16166667,4.86964286 4.86333333,7.16797619 4.86333333,10.0031746 C4.86333333,12.8383333 7.16166667,15.1366667 9.99686508,15.1366667 C12.8320238,15.1366667 15.1303571,12.8383333 15.1303571,10.0031746 C15.1303571,7.16797619 12.8320238,4.86964286 9.99686508,4.86964286 L9.99686508,4.86964286 Z"></path>
<path d="M16.5328175,4.6668254 C16.5328175,5.32936508 15.9957143,5.86642857 15.3331746,5.86642857 C14.6706746,5.86642857 14.1335714,5.32936508 14.1335714,4.6668254 C14.1335714,4.00428571 14.6706746,3.46718254 15.3331746,3.46718254 C15.9957143,3.46718254 16.5328175,4.00428571 16.5328175,4.6668254"></path>
</g>
</g>
</svg>
</a>
</li>
<li class="mr3 pr2">
<a href="http://pinterest.com/aritzia/" target="_blank" aria-label="Pinterest">
<svg width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M17.506053,21.602266 C16.102983,21.602266 14.7819472,20.8299341 14.3307583,19.9556772 C14.3307583,19.9556772 13.5754767,22.9947604 13.4170655,23.5833406 C12.8527258,25.656291 11.1964808,27.730677 11.0691861,27.8986377 C10.9800799,28.0192249 10.7806516,27.9804647 10.7608502,27.8254241 C10.7240762,27.5598453 10.301175,24.9442526 10.7990386,22.809573 C11.0493847,21.7386443 12.4722562,15.6202822 12.4722562,15.6202822 C12.4722562,15.6202822 12.056427,14.7804789 12.056427,13.5344117 C12.056427,11.5777417 13.1737913,10.1192115 14.5641319,10.1192115 C15.7465579,10.1192115 16.3151407,11.0193084 16.3151407,12.0988504 C16.3151407,13.307593 15.559859,15.110658 15.1694887,16.7816513 C14.8427658,18.1813235 15.8597087,19.3225947 17.2203472,19.3225947 C19.6827918,19.3225947 21.3418656,16.1112442 21.3418656,12.309878 C21.3418656,9.41578645 19.4239593,7.25096006 15.9332567,7.25096006 C11.9913653,7.25096006 9.53316384,10.2369275 9.53316384,13.5717363 C9.53316384,14.7216209 9.86837312,15.5312774 10.3916956,16.1586177 C10.6321411,16.4486011 10.664672,16.563446 10.5783945,16.8936251 C10.5147471,17.1376705 10.3733086,17.7205084 10.3124901,17.9530693 C10.227627,18.2875551 9.95889377,18.4052711 9.66187289,18.2818128 C7.84580233,17.5310143 7,15.5111796 7,13.2429928 C7,9.49474232 10.1144761,5 16.2910962,5 C21.2541737,5 24.5199891,8.64489005 24.5199891,12.5596656 C24.5199891,17.734864 21.6841468,21.602266 17.506053,21.602266 L17.506053,21.602266 Z" fill="#FFFFFF"></path>
</g>
</svg>
</a>
</li>
<li>
<a href="https://open.spotify.com/user/aritziaspotify" target="_blank" aria-label="Spotify">
<svg width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<path d="M15.6292735,4.00000261 C9.23432936,4.004185 4.01341766,9.29785139 4.00002543,15.7911236 C3.98669379,22.2883936 9.21754362,27.609922 15.6248499,27.6175487 C22.027793,27.6252369 27.2675508,22.3125038 27.2692476,15.8109899 C27.2710049,9.31058305 22.0331863,3.99569722 15.6292735,4.00000261 L15.6292735,4.00000261 Z M19.8117113,22.9985376 C19.0019961,22.6368845 18.1954926,22.2471233 17.3523877,21.9874465 C14.9851131,21.2585433 12.5995377,21.2900342 10.2250518,21.986647 C9.85758342,22.0944663 9.52604983,22.0977261 9.2440857,21.8108024 C8.89382722,21.4544388 9.01290298,21.0296809 9.12179822,20.6258965 C9.2144531,20.282449 9.42903187,20.0653342 9.79843943,19.9619432 C13.4479752,18.9400887 16.9598316,19.2826135 20.3551573,20.9841052 C20.8830902,21.2485794 21.1072435,21.6277001 21.0917303,22.1390579 C21.1145759,22.9935556 20.5537987,23.3301759 19.8117113,22.9985376 L19.8117113,22.9985376 Z M22.4408314,18.3617513 C22.4167739,18.4066504 22.3915044,18.4510574 22.3652047,18.4946649 C21.940895,19.1978588 21.7154085,19.2716655 20.9856832,18.9031853 C18.3774695,17.5863498 15.6134574,17.0317536 12.7171591,17.2436405 C11.6968646,17.3183083 10.6860235,17.5525832 9.67645494,17.7443578 C9.02581043,17.8678611 8.54793182,17.6407823 8.41352467,17.079728 C8.26027143,16.440254 8.63131515,15.7193465 9.1885776,15.5720405 C10.7095963,15.1700397 12.2569752,14.9732832 13.8806475,14.9630733 C16.7102876,14.9834932 19.4414553,15.6438791 22.0128858,16.9717856 C22.5806924,17.2650444 22.7432172,17.7982367 22.4408314,18.3617513 L22.4408314,18.3617513 Z M23.4227065,14.6409683 C23.1142003,14.7903655 22.8182986,14.6818696 22.5202153,14.5587353 C21.5693059,14.1658988 20.630092,13.7325917 19.6552463,13.4130084 C17.1964682,12.6070387 14.6661839,12.3442251 12.0958442,12.6040249 C11.1051217,12.7042176 10.1224588,12.8975913 9.14112909,13.0765112 C8.42491716,13.2071491 7.88189532,12.9175806 7.73300517,12.2733707 C7.58484219,11.6320515 7.98788184,11.0110907 8.65779663,10.850684 C10.3534597,10.4446853 12.0728168,10.2392565 13.3881647,10.2348896 C17.2088908,10.2369193 20.4309052,10.998605 23.4824565,12.5079531 C23.9236125,12.7261751 24.1901847,13.0648866 24.1676421,13.5672031 C24.1452207,14.069704 23.8634383,14.4273593 23.4227065,14.6409683 L23.4227065,14.6409683 Z" fill="#FFFFFF"></path>
</g>
</svg>
</a>
</li>
</ul>
</div>
</div>
<div class="w-50 w-25-ns pr4-ns">
<h3 class="ttu o-60 mb3 tl">Aritzia</h3>
<div class="mr3 f1">
<div class="content-asset">
<ul class="level-2">
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/corporate-hub/corporate-landing.html" data-link-type="aritzia-nav" target="_blank">About
Us</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/corporate-hub/careers/careers-landing-page.html" target="_blank" data-link-type="aritzia-nav">Careers</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/corporate-hub/community/community-landing-page.html" target="_blank" data-link-type="aritzia-nav">Community</a></li>
<li class="pb3"><a href="https://investors.aritzia.com" data-link-type="aritzia-nav">Investor Relations</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/store-locator" data-link-type="aritzia-nav">Store Locator</a></li>
<li class="pb3 ga-promotion" ga-promotion="23-sp-garment-care-vegan-navigational"><a href="https://www.aritzia.com/en/fabric-care-guide" data-link-type="aritzia-nav">Fabric Care</a>
</li>
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/about-aritzia/accessibility.html" data-link-type="aritzia-nav">Accessibility</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/gift-card" data-link-type="aritzia-nav">Gift Cards</a>
</li>
<li class="pb3"><a href="https://www.aritzia.com/en/list-search" data-link-type="aritzia-nav">Find a List</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/at-your-service.html" data-link-type="aritzia-nav">Our
Services</a></li>
</ul>
</div> 
</div>
</div>
<div class="w-50 w-25-ns">
<h3 class="ttu o-60 mb3 tl">Get Help</h3>
<div class="f1">
<div class="content-asset">
<ul class="level-2">
<li class="pb3"><a href="https://www.aritzia.com/en/contact-us" data-link-type="get-help-nav">Contact Us</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/size-guide" data-link-type="get-help-nav">Size Guide</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/shipping-info" data-link-type="get-help-nav">Shipping</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/returns" data-link-type="get-help-nav">Returns &amp;
Exchanges</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/security" data-link-type="get-help-nav">Payment &amp;
Security</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/order-tracking" data-link-type="get-help-nav">Order Tracking</a></li>
<li class="pb3"><a href="https://www.aritzia.com/en/aritzia/policies-information/specialorders.html" data-link-type="get-help-nav">Special Orders</a>
</li>
<li class="pb3"> <a href="https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dwb5b6f227/aritzia/legal/California%20Transparency%20in%20Supply%20Chains%20Act%2007-24-2023.pdf" data-link-type="get-help-nav" target="”_blank”">California Transparency Act</a></li>
<li class="pb3 js-promotion-details__link"><a href="https://www.aritzia.com/en/sale-details" data-link-type="aritzia-nav">Promotion Details</a></li>

</ul>
</div> 
<ul>
<li class="pb3"><a href="https://aritzia.ca1.qualtrics.com/jfe/form/SV_8C88e9gIyAlyjmS?Site=CA_EN" data-link-type="get-help-nav" target="_blank">Send Us Feedback</a></li>
</ul>
<ul>
<li class="pb3"><a href="/en/afterpay" data-link-type="aritzia-nav">Afterpay</a></li>
</ul>
</div>
</div>
</div>
<div class="dib relative">
<div class="ar-country-select">
<div class="flex items-center justify-center">
<div class="js-country-select--current" data-country="CA">
<svg width="25px" height="13px" viewBox="0 0 25 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-70.000000, -95.000000)" fill-rule="nonzero">
<g transform="translate(70.000000, 95.000000)">
<polygon fill="#DA291C" points="0 0 6.25 0 6.5078125 0.268125 18.4921875 0.268125 18.75 0 25 0 25 13 18.75 13 18.4921875 12.731875 6.5078125 12.731875 6.25 13 0 13"></polygon>
<path d="M6.18,0.005 L18.8300002,0.005 L18.8300002,13 L6.18,13 L6.18,0.005 Z M12.7421876,11.849896 L12.6235938,9.57553139 C12.6201018,9.49977233 12.651138,9.4265137 12.7079903,9.37631971 C12.7648427,9.32612572 12.8413827,9.30440714 12.9161251,9.31726055 L15.1799481,9.71520848 L14.8742397,8.87187513 C14.8488089,8.80307577 14.8700023,8.72572014 14.926948,8.67948971 L17.4068752,6.67130218 L16.8481668,6.41039593 C16.7700918,6.37350136 16.731685,6.28426206 16.7585627,6.20219801 L17.2487502,4.69473965 L15.8203543,4.99781257 C15.7405677,5.01444796 15.660108,4.97256483 15.6279689,4.89766674 L15.3512501,4.24671881 L14.2364689,5.443198 C14.1841117,5.49842294 14.101599,5.51248694 14.0339037,5.47772452 C13.9662085,5.44296209 13.9295618,5.36770814 13.9439376,5.29297924 L14.4815626,2.52052087 L13.6197814,3.01861463 C13.5788841,3.04258412 13.5298827,3.04853493 13.484437,3.03505105 C13.4389913,3.02156717 13.4011649,2.98985425 13.3799584,2.94745837 L12.5050001,1.22916668 L11.6300417,2.94745837 C11.6088353,2.98985425 11.5710088,3.02156717 11.5255632,3.03505105 C11.4801175,3.04853493 11.4311161,3.04258412 11.3902188,3.01861463 L10.5284376,2.52052087 L11.0660626,5.29297924 C11.0804384,5.36770814 11.0437917,5.44296209 10.9760965,5.47772452 C10.9084012,5.51248694 10.8258885,5.49842294 10.7735313,5.443198 L9.65875005,4.24671881 L9.3820313,4.89766674 C9.34989223,4.97256483 9.26943252,5.01444796 9.18964588,4.99781257 L7.76125002,4.69473965 L8.25143753,6.20219801 C8.27831516,6.28426206 8.23990837,6.37350136 8.16183336,6.41039593 L7.60312502,6.67130218 L10.0830521,8.67948971 C10.1399979,8.72572014 10.1611913,8.80307577 10.1357605,8.87187513 L9.83005214,9.71520848 L12.0938751,9.31726055 C12.1686174,9.30440714 12.2451575,9.32612572 12.3020099,9.37631971 C12.3588622,9.4265137 12.3898984,9.49977233 12.3864063,9.57553139 L12.2678126,11.849896 L12.7421876,11.849896 Z" fill="#FFFFFF"></path>
</g>
</g>
</g>
</svg>
</div>
<select class="f1 f0-ns ar-country-select__dropdown js-country-select__dropdown pointer white mt1 pl2 pv0 bg-true-black bw0" data-current-site="Aritzia_CA" aria-label="Country Select">
<option value="https://www.aritzia.com/en/search?cgid=contour-clothing&amp;country=ca&amp;lang=en" class="black" data-locale="CA-EN" selected="selected">Canada ($CAD) &mdash; EN</option>
<option value="https://www.aritzia.com/fr/search?cgid=contour-clothing&amp;country=ca&amp;lang=fr" class="black" data-locale="CA-FR">Canada ($CAD) &mdash; FR</option>
<option value="https://www.aritzia.com/us/en/search?cgid=contour-clothing&amp;country=us" class="black" data-locale="US">USA ($USD)</option>
<option value="https://www.aritzia.com/intl/en/search?cgid=contour-clothing&amp;country=intl" class="black" data-locale="INTL">International ($USD)</option>
</select>
</div>
</div>
</div>
</div>
<div class="ar-footer__global js-footer__global mh3">
<footer role="contentinfo" class="ph4-ns flex-ns">
<div class="w-50-ns pt2-ns">
<div class="ar-footer__copyright pt3 pb0-ns mb2 pb1 mb3-ns">
<ul class="mt0">
<li class="copyright dn dib-ns pr3"><p>&copy; <span class="js-footer__year">2021</span> Aritzia LP</p></li>
<li class="dib pr3 mb2"><a href="/en/privacy-policy" data-link-type="nav-footer-nav">Privacy Policy</a></li>
<li class="dib pr3 mb2"><button id="ot-sdk-btn" class="ot-sdk-show-settings">Manage Cookies</button></li>
<li class="dib pr3 mb2"><a href="/en/terms-of-use" data-link-type="nav-footer-nav">Terms of Use</a></li>
<li class="dib mb2"><a href="/en/sitemap" data-link-type="nav-footer-nav">Site Map</a></li>
</ul>
</div>
</div>
<div class="w-50-ns tr-ns pb0-ns pb1">
<div class="dib mt0 mt2-ns pt3-ns pb2-ns">
<div class="flex items-center flex-wrap">
<span class="mr3">
<svg width="28px" height="9px" viewBox="0 0 28 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(0.000000, -4.000000)" fill="#FFFFFF" fill-rule="nonzero">
<g>
<g transform="translate(0.000000, 4.000000)">
<g>
<g transform="translate(0.197400, 0.197400)">
<polygon points="11.8300057 8.65240238 9.62866787 8.65240238 11.0055423 0.259293023 13.2067598 0.259293023"></polygon>
<path d="M19.8100511,0.464480598 C19.3758505,0.294657914 18.6871726,0.107152785 17.8356243,0.107152785 C15.6617324,0.107152785 14.1308955,1.24998468 14.1215061,2.88389014 C14.1034495,4.08938198 15.2175405,4.75894144 16.0507915,5.16089072 C16.9024602,5.5716219 17.1919674,5.83970676 17.1919674,6.20581646 C17.1833002,6.7680945 16.5037709,7.02727881 15.869985,7.02727881 C14.991111,7.02727881 14.5201954,6.89365173 13.804553,6.58082672 L13.5146847,6.44672495 L13.2066394,8.33079548 C13.7229372,8.56268474 14.6741579,8.76846568 15.6617324,8.77748492 C17.9715301,8.77748492 19.4752821,7.65233546 19.4930979,5.91114859 C19.5018855,4.95570315 18.9136021,4.22360242 17.6453079,3.62536612 C16.8753753,3.24133663 16.4038578,2.98238967 16.4038578,2.58945962 C16.4128861,2.23225048 16.8026675,1.86637813 17.6717909,1.86637813 C18.3874334,1.84845833 18.913241,2.01804367 19.3115691,2.18774768 L19.510673,2.27687195 L19.8100511,0.464480598 L19.8100511,0.464480598 L19.8100511,0.464480598 Z"></path>
<path d="M22.735819,5.67902199 C22.917107,5.19684899 23.6146929,3.33069825 23.6146929,3.33069825 C23.6055442,3.34861804 23.7956198,2.83962469 23.9043205,2.5271557 L24.0581625,3.25035586 C24.0581625,3.25035586 24.4750288,5.25939025 24.5655524,5.67902199 C24.2215144,5.67902199 23.1706214,5.67902199 22.735819,5.67902199 L22.735819,5.67902199 Z M25.4530935,0.259293023 L23.750358,0.259293023 C23.2252727,0.259293023 22.8263426,0.410958564 22.5997927,0.955672833 L19.3299868,8.65228371 L21.6397846,8.65228371 C21.6397846,8.65228371 22.0200561,7.6163772 22.1017923,7.39326983 C22.3551863,7.39326983 24.6021471,7.39326983 24.9281285,7.39326983 C24.9913266,7.6879377 25.1907916,8.65228371 25.1907916,8.65228371 L27.2290184,8.65228371 L25.4530935,0.259293023 L25.4530935,0.259293023 L25.4530935,0.259293023 Z"></path>
<path d="M7.79002651,0.259293023 L5.63419122,5.98259042 L5.39861304,4.82183873 C5.00004413,3.48248247 3.75004728,2.02730025 2.35511628,1.30374406 L4.32978388,8.64350182 L6.65763818,8.64350182 L10.1177604,0.259293023 L7.79002651,0.259293023 L7.79002651,0.259293023 L7.79002651,0.259293023 Z"></path>
<path d="M3.63231838,0.259293023 L0.0905803809,0.259293023 L0.0543468436,0.428878358 C2.81712397,1.12537684 4.64685742,2.8042598 5.39861304,4.82219475 L4.62868046,0.964810741 C4.50192327,0.428759684 4.11238265,0.276975468 3.63231838,0.259293023 L3.63231838,0.259293023 Z"></path>
</g>
</g>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="26px" height="14px" viewBox="0 0 26 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-49.000000, -2.000000)" fill="#FFFFFF" fill-rule="nonzero">
<g>
<g transform="translate(49.000000, 2.000000)">
<path d="M0.0873198584,0.312910624 C0.433174984,0.138885464 0.828682577,0.209164856 1.20022001,0.20247158 C2.05116059,0.224224725 2.90381333,0.182391754 3.75475391,0.219204769 C4.13827642,0.21753145 4.46701001,0.528768756 4.52008679,0.891878945 C4.78718282,2.15690799 5.03202086,3.426957 5.29398043,4.69533268 C4.86080545,3.20942555 3.71708652,1.99626938 2.37304556,1.2248694 C1.66250162,0.808213003 0.869774275,0.56558177 0.0873198584,0.312910624 Z"></path>
<path d="M7.49067412,0.205818218 C8.22861253,0.214184812 8.96483879,0.210838175 9.70106505,0.205818218 C8.58131628,2.82121558 7.53690228,5.46673267 6.39318336,8.07209012 C5.67407864,8.05033697 4.95497392,8.06037689 4.23586921,8.06037689 C3.59894789,5.78633657 3.00483042,3.50058303 2.37304556,1.2248694 C3.71708652,1.99626938 4.86080545,3.20942555 5.29398043,4.69533268 C5.35904229,4.98314353 5.40527045,5.27764764 5.46177153,5.56880512 C6.13293593,3.78002728 6.81266111,1.99292275 7.49067412,0.205818218 Z"></path>
<path d="M10.5280355,0.20247158 C11.2214579,0.207491537 11.9148803,0.207491537 12.6083027,0.20247158 C12.1819763,2.82288889 11.7333919,5.43995957 11.3173385,8.0620502 C10.6273404,8.06372352 9.93734231,8.06372352 9.24563206,8.0620502 C9.64285181,5.43828625 10.1102699,2.82456221 10.5280355,0.20247158 Z"></path>
<path d="M14.5807042,0.69610064 C15.8237281,-0.10207245 17.4485623,-0.0786459858 18.823422,0.36311019 C18.7600723,0.94375183 18.6607674,1.51937351 18.5580381,2.09332188 C17.8269483,1.75029151 16.9742956,1.5980195 16.1798561,1.79714444 C15.8048944,1.88415702 15.4350691,2.33929975 15.7466811,2.68065679 C16.3870268,3.32153791 17.3954855,3.46711665 17.9981637,4.16489061 C18.6967226,4.83254483 18.6710403,5.95701509 18.1950615,6.738455 C17.6916882,7.56340119 16.722609,7.99511745 15.7792121,8.11894304 C14.7125401,8.22770877 13.6013521,8.16244933 12.6014541,7.75917949 C12.7076076,7.1735179 12.7966396,6.58450966 12.9045053,5.99884807 C13.7691432,6.43558428 14.7724654,6.65478905 15.7364082,6.4456242 C16.0634296,6.33853179 16.400724,6.07582073 16.3716174,5.70099731 C16.2637517,5.25422118 15.7860607,5.06346283 15.4145232,4.86099125 C14.6937064,4.51461425 13.9181006,4.08959126 13.5945034,3.32823119 C13.1921472,2.36607285 13.7246271,1.23992927 14.5807042,0.69610064 Z"></path>
<path d="M24.1602063,0.212511494 C24.7303536,2.82958217 25.2816672,5.44832617 25.8432538,8.06539684 C25.2029081,8.06707016 24.5625625,8.06707016 23.9222169,8.06874348 C23.8314727,7.67551355 23.745865,7.2806103 23.6636816,6.88403374 C22.7750736,6.88403374 21.8881778,6.88570705 21.001282,6.8806871 C20.8591732,7.27726366 20.711928,7.67384023 20.5595463,8.06707016 C19.8335929,8.06707016 19.1076396,8.06707016 18.3816863,8.06874348 C19.3850086,5.71438386 20.3986038,3.36337088 21.4002139,1.00733795 C21.5388984,0.645901075 21.812843,0.252671146 22.246018,0.230918001 C22.8829394,0.187411711 23.523285,0.224224725 24.1602063,0.212511494 Z M22.7425427,2.33762643 C22.3093677,3.29141817 21.9926192,4.29206284 21.6056724,5.26426109 C22.1809562,5.26593441 22.7545278,5.26593441 23.3298116,5.26593441 C23.1226409,4.29206284 22.8709543,3.32488455 22.7425427,2.33762643 Z"></path>
<path d="M15.655937,10.6088415 C16.1764318,11.5208003 15.7911971,12.8477421 14.8238301,13.3212913 C14.2040303,13.6442419 13.4746527,13.5053564 12.8034883,13.5354762 C13.0089467,12.3557864 13.1681771,11.16773 13.3924693,9.99138683 C14.1663629,10.0047734 15.1628366,9.87760115 15.655937,10.6088415 Z M15.289536,10.9568918 C15.0207278,10.3929834 14.3358662,10.4113899 13.7965376,10.4180831 C13.6201857,11.3266953 13.5071836,12.243674 13.3359682,13.1522861 C13.8085227,13.1439195 14.3324418,13.1857525 14.7330859,12.8895751 C15.3631586,12.474592 15.5001309,11.6262193 15.289536,10.9568918 Z"></path>
<path d="M16.8407476,9.99808011 C17.4519866,9.99808011 18.0632256,9.99640679 18.6744646,10.0014267 C18.6487823,10.1068458 18.5991298,10.3160107 18.5734475,10.4214298 C18.1282875,10.4431829 17.6831274,10.4281231 17.2379673,10.4314697 C17.1951635,10.78454 17.1386624,11.1359369 17.0633276,11.4823139 C17.4108949,11.4839872 17.7584622,11.4839872 18.1077416,11.4856606 C18.1077416,11.5977729 18.1043173,11.8219977 18.1043173,11.93411 C17.7396285,11.9324367 17.3766518,11.9307634 17.011963,11.9274167 C16.9366282,12.3306866 16.8664299,12.7339564 16.7996559,13.1388996 C17.2722104,13.1455929 17.7447649,13.1439195 18.2190316,13.1455929 C18.1967736,13.2359521 18.1539698,13.4149972 18.1317118,13.5053564 C17.5136241,13.5722892 16.8886879,13.5204163 16.267176,13.5354762 C16.4486643,12.354113 16.6352891,11.1744233 16.8407476,9.99808011 Z"></path>
<path d="M20.8608854,10.1921851 C21.4053504,10.6121881 21.1382543,11.4639074 20.5441369,11.7015187 C21.2101648,11.9675764 21.1964676,12.9330814 20.634881,13.2928449 C20.078431,13.671015 19.3559019,13.4936432 18.7224049,13.5438427 C18.922727,12.3624796 19.1076396,11.1777699 19.2994009,9.99473347 C19.8198957,10.0164866 20.3917552,9.91441417 20.8608854,10.1921851 Z M19.4654798,11.8989703 C19.4055544,12.3290133 19.3267953,12.7557096 19.2480362,13.1840792 C19.568209,13.162326 19.9037912,13.1907725 20.2085547,13.0753135 C20.5304396,12.9347547 20.7050794,12.5130783 20.5116059,12.2118809 C20.3284055,11.8286909 19.8164714,11.9357833 19.4654798,11.8989703 Z M20.6930943,10.8715525 C20.6742606,10.3478037 20.0630216,10.3980033 19.6829234,10.4130632 C19.6366952,10.78454 19.5853306,11.1526701 19.5391024,11.5241469 C19.9962476,11.5308402 20.6862457,11.4588875 20.6930943,10.8715525 Z"></path>
<path d="M22.0987728,10.0181599 C22.2220479,10.0097933 22.4685981,9.99306015 22.5935853,9.98469356 C22.3983997,11.1727499 22.2220479,12.3624796 22.0097408,13.5471894 C21.88989,13.5438427 21.6484763,13.5371495 21.5286255,13.5338028 C21.7477812,12.3674996 21.9155723,11.1911564 22.0987728,10.0181599 Z"></path>
<path d="M23.223658,10.0097933 C24.0848715,9.9796736 24.946085,10.00812 25.8090107,9.99808011 C25.8090107,10.1068458 25.8090107,10.3243773 25.8107228,10.433143 C25.4443219,10.4314697 25.0779209,10.4297964 24.7115199,10.4264497 C24.5060614,11.4555408 24.3913471,12.4996918 24.1876008,13.5271096 C24.0694621,13.5354762 23.834897,13.550536 23.7184705,13.5572293 C23.8845495,12.5147517 24.0403555,11.4706007 24.2252682,10.4314697 C23.8588672,10.4314697 23.4924662,10.4297964 23.1260652,10.4281231 C23.1500354,10.322704 23.1996879,10.1135391 23.223658,10.0097933 Z"></path>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="23px" height="18px" viewBox="0 0 23 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-95.000000, 0.000000)" fill="#FFFFFE">
<g>
<g transform="translate(95.000000, 0.000000)">
<path d="M11.5,1.53150071 C11.4083933,1.60400366 11.3187608,1.67869164 11.2311027,1.75556463 C9.73341173,3.06657691 8.78536112,4.99674454 8.78536112,7.15097609 C8.78536112,9.30520763 9.73341173,11.2351766 11.2311027,12.5463875 C11.3187608,12.6232605 11.4083933,12.6977499 11.5,12.7702528 C11.5916067,12.6977499 11.6812392,12.6232605 11.7688973,12.5463875 C13.2667857,11.2351766 14.2146389,9.30520763 14.2146389,7.15097609 C14.2146389,4.99674454 13.2667857,3.06657691 11.7688973,1.75556463 C11.6812392,1.67869164 11.5916067,1.60400366 11.5,1.53150071 L11.5,1.53150071 Z M15.8925818,0 C14.4375354,0 13.0847568,0.440182306 11.9580336,1.1952062 C12.0156827,1.24268073 12.0741214,1.28936072 12.1297962,1.33822572 C13.8043829,2.80397718 14.7644766,4.92265248 14.7644766,7.15097609 C14.7644766,9.37929969 13.8043829,11.497975 12.1299936,12.9635278 C12.0745163,13.0121942 12.0156827,13.0592714 11.9580336,13.106746 C13.0845594,13.8615712 14.4375354,14.3019522 15.8925818,14.3019522 C19.817851,14.3019522 23,11.1003013 23,7.15097609 C23,3.20145227 19.817851,0 15.8925818,0 Z M10.8702038,12.9635278 C10.9256811,13.0121942 10.9843173,13.0590728 11.0419664,13.106746 C9.91544061,13.8617699 8.56266202,14.3019522 7.10741815,14.3019522 C3.18195162,14.3019522 0,11.1003013 0,7.15097609 C0,3.2016509 3.18195162,0 7.10741815,0 C8.56246459,0 9.91544061,0.440182306 11.0419664,1.1952062 C10.9843173,1.24268073 10.926076,1.28936072 10.8702038,1.33822572 C9.19581452,2.80397718 8.23552336,4.92265248 8.23552336,7.15097609 C8.23552336,9.37949833 9.19581452,11.497975 10.8702038,12.9635278 Z M22.7773009,11.5821976 L22.7773009,11.3045014 L22.705437,11.3045014 L22.6225171,11.4955913 L22.5395972,11.3045014 L22.4675359,11.3045014 L22.4675359,11.5821976 L22.5184724,11.5821976 L22.5184724,11.3728329 L22.5960617,11.5531964 L22.6487751,11.5531964 L22.7265618,11.3724356 L22.7265618,11.5821976 L22.7773009,11.5821976 Z M22.3212416,11.5821976 L22.3212416,11.3519759 L22.4134406,11.3519759 L22.4134406,11.3050973 L22.1785009,11.3050973 L22.1785009,11.3519759 L22.2706999,11.3519759 L22.2706999,11.5821976 L22.3212416,11.5821976 Z M22.5433484,17.7558736 L22.5433484,17.8025536 L22.5859929,17.8025536 C22.5958643,17.8025536 22.6037614,17.8005672 22.6094869,17.7967931 C22.6154097,17.793019 22.6181737,17.7870598 22.6181737,17.7789157 C22.6181737,17.7711688 22.6154097,17.7654083 22.6094869,17.7616341 C22.6037614,17.75786 22.5958643,17.7558736 22.5859929,17.7558736 L22.5433484,17.7558736 Z M22.5865852,17.7230983 C22.6088946,17.7230983 22.6260708,17.7280643 22.6383114,17.7379962 C22.6503545,17.7481267 22.6564748,17.7616341 22.6564748,17.7789157 C22.6564748,17.7934162 22.6515391,17.8055332 22.6418651,17.8148692 C22.6321911,17.8242052 22.6185686,17.8299657 22.6008,17.8321507 L22.6578568,17.8982972 L22.613238,17.8982972 L22.5603272,17.832548 L22.5433484,17.832548 L22.5433484,17.8982972 L22.5060344,17.8982972 L22.5060344,17.7230983 L22.5865852,17.7230983 Z M22.5755292,17.9584846 C22.5956669,17.9584846 22.61462,17.9545118 22.6319937,17.9469636 C22.6495648,17.9392167 22.6647668,17.9286889 22.6779945,17.9153801 C22.6912222,17.90227 22.7014884,17.8865776 22.7089907,17.8687001 C22.716493,17.8508227 22.7202441,17.8317534 22.7202441,17.8112937 C22.7202441,17.7910326 22.716493,17.7719633 22.7089907,17.7540859 C22.7014884,17.7362084 22.6912222,17.720516 22.6779945,17.7072073 C22.6647668,17.6940971 22.6495648,17.6835693 22.6319937,17.6760211 C22.61462,17.6684728 22.5956669,17.6646987 22.5755292,17.6646987 C22.5549967,17.6646987 22.5356487,17.6684728 22.5178801,17.6760211 C22.4999142,17.6835693 22.4843173,17.6940971 22.4710896,17.7072073 C22.4580594,17.720516 22.4475957,17.7362084 22.4400934,17.7540859 C22.4325911,17.7719633 22.42884,17.7910326 22.42884,17.8112937 C22.42884,17.8317534 22.4325911,17.8508227 22.4400934,17.8687001 C22.4475957,17.8865776 22.4580594,17.90227 22.4710896,17.9153801 C22.4843173,17.9286889 22.4999142,17.9392167 22.5178801,17.9469636 C22.5356487,17.9545118 22.5549967,17.9584846 22.5755292,17.9584846 Z M22.5755292,17.6225874 C22.6017872,17.6225874 22.6266631,17.6275533 22.6497622,17.6374852 C22.6728613,17.6472185 22.6931964,17.6607259 22.7103727,17.6780074 C22.7277464,17.6950903 22.741369,17.7151528 22.7514378,17.7379962 C22.7613092,17.7610382 22.7662449,17.7854707 22.7662449,17.8112937 C22.7662449,17.8373153 22.7613092,17.8615492 22.7514378,17.8843926 C22.741369,17.9072359 22.7277464,17.9272984 22.7103727,17.9443813 C22.6931964,17.9614642 22.6728613,17.9749716 22.6497622,17.9851021 C22.6266631,17.995034 22.6017872,18 22.5755292,18 C22.5484815,18 22.5234081,17.995034 22.4999142,17.9851021 C22.4764202,17.9749716 22.4560851,17.9614642 22.4389088,17.9443813 C22.4217326,17.9272984 22.4083074,17.9072359 22.3982386,17.8843926 C22.3883672,17.8615492 22.3834315,17.8373153 22.3834315,17.8112937 C22.3834315,17.7854707 22.3883672,17.7610382 22.3982386,17.7379962 C22.4083074,17.7151528 22.4217326,17.6950903 22.4389088,17.6780074 C22.4560851,17.6607259 22.4764202,17.6472185 22.4999142,17.6374852 C22.5234081,17.6275533 22.5484815,17.6225874 22.5755292,17.6225874 Z M4.96986214,16.9484092 C4.96986214,16.614697 5.18703325,16.3407749 5.54220673,16.3407749 C5.88178338,16.3407749 6.11080019,16.6027787 6.11080019,16.9484092 C6.11080019,17.2940397 5.88178338,17.5562422 5.54220673,17.5562422 C5.18703325,17.5562422 4.96986214,17.2821215 4.96986214,16.9484092 Z M6.49775962,16.9484092 L6.49775962,15.9991172 L6.08710879,15.9991172 L6.08710879,16.2295375 C5.95680613,16.0587086 5.75937784,15.951444 5.49087538,15.951444 C4.96196501,15.951444 4.54736562,16.3685843 4.54736562,16.9484092 C4.54736562,17.5284329 4.96196501,17.9455731 5.49087538,17.9455731 C5.75937784,17.9455731 5.95680613,17.8383085 6.08710879,17.6674796 L6.08710879,17.8979 L6.49775962,17.8979 L6.49775962,16.9484092 Z M20.3631479,16.9484092 C20.3631479,16.614697 20.580319,16.3407749 20.9356899,16.3407749 C21.2750691,16.3407749 21.5040859,16.6027787 21.5040859,16.9484092 C21.5040859,17.2940397 21.2750691,17.5562422 20.9356899,17.5562422 C20.580319,17.5562422 20.3631479,17.2821215 20.3631479,16.9484092 Z M21.8910453,16.9484092 L21.8910453,15.2363464 L21.4803945,15.2363464 L21.4803945,16.2295375 C21.3500918,16.0587086 21.1526636,15.951444 20.8843585,15.951444 C20.3552507,15.951444 19.9406513,16.3685843 19.9406513,16.9484092 C19.9406513,17.5284329 20.3552507,17.9455731 20.8843585,17.9455731 C21.1526636,17.9455731 21.3500918,17.8383085 21.4803945,17.6674796 L21.4803945,17.8979 L21.8910453,17.8979 L21.8910453,16.9484092 Z M11.5906196,16.3209111 C11.8551735,16.3209111 12.0249618,16.4875686 12.068396,16.7815531 L11.0893492,16.7815531 C11.132586,16.5074324 11.2984257,16.3209111 11.5906196,16.3209111 Z M11.5985167,15.951444 C11.0457175,15.951444 10.6589555,16.356666 10.6589555,16.9484092 C10.6589555,17.5522694 11.0615118,17.9455731 11.6261567,17.9455731 C11.9104534,17.9455731 12.1710587,17.8738647 12.4000755,17.6793979 L12.1986987,17.373495 C12.0407561,17.5006235 11.8393792,17.5721333 11.6498481,17.5721333 C11.3852942,17.5721333 11.1444317,17.4489776 11.0852032,17.1073198 L12.486944,17.1073198 C12.4908925,17.0556739 12.4946437,17.0040279 12.4946437,16.9484092 C12.4908925,16.356666 12.1276245,15.951444 11.5985167,15.951444 Z M16.5533743,16.9484092 C16.5533743,16.614697 16.770348,16.3407749 17.1257189,16.3407749 C17.4652955,16.3407749 17.6943123,16.6027787 17.6943123,16.9484092 C17.6943123,17.2940397 17.4652955,17.5562422 17.1257189,17.5562422 C16.770348,17.5562422 16.5533743,17.2821215 16.5533743,16.9484092 Z M18.0812718,16.9484092 L18.0812718,15.9991172 L17.670621,15.9991172 L17.670621,16.2295375 C17.5403183,16.0587086 17.34289,15.951444 17.0743875,15.951444 C16.5454772,15.951444 16.1308778,16.3685843 16.1308778,16.9484092 C16.1308778,17.5284329 16.5454772,17.9455731 17.0743875,17.9455731 C17.34289,17.9455731 17.5403183,17.8383085 17.670621,17.6674796 L17.670621,17.8979 L18.0812718,17.8979 L18.0812718,16.9484092 Z M14.2357637,16.9484092 C14.2357637,17.5244601 14.6345688,17.9455731 15.2426479,17.9455731 C15.5269447,17.9455731 15.7162784,17.8820089 15.9216038,17.7191256 L15.7241755,17.3854133 C15.5701815,17.4966507 15.4082903,17.5562422 15.2308022,17.5562422 C14.9030713,17.5522694 14.6622088,17.3139036 14.6622088,16.9484092 C14.6622088,16.5831135 14.9030713,16.3447477 15.2308022,16.3407749 C15.4082903,16.3407749 15.5701815,16.4001677 15.7241755,16.5116038 L15.9216038,16.1778916 C15.7162784,16.0150082 15.5269447,15.951444 15.2426479,15.951444 C14.6345688,15.951444 14.2357637,16.372557 14.2357637,16.9484092 Z M19.5262494,15.951444 C19.2893354,15.951444 19.1353414,16.0626814 19.0287301,16.2295375 L19.0287301,15.9991172 L18.6220278,15.9991172 L18.6220278,17.8979 L19.0326787,17.8979 L19.0326787,16.8331991 C19.0326787,16.5195493 19.1669299,16.3447477 19.4354324,16.3447477 C19.5183522,16.3447477 19.6052207,16.356666 19.6920891,16.3924208 L19.8184432,16.0030899 C19.7274288,15.967335 19.6089718,15.951444 19.5262494,15.951444 Z M8.5269275,16.1500822 C8.32949922,16.018981 8.05704819,15.951444 7.75715463,15.951444 C7.27937819,15.951444 6.97139007,16.1818643 6.97139007,16.5590783 C6.97139007,16.8689539 7.20040687,17.0596466 7.6229034,17.1192381 L7.81638311,17.1470475 C8.04125393,17.1788296 8.14806263,17.238421 8.14806263,17.3456857 C8.14806263,17.492678 7.99781971,17.576106 7.71766897,17.576106 C7.43337225,17.576106 7.22804683,17.4847324 7.08984704,17.3774678 L6.89636732,17.6992617 C7.12143556,17.8659192 7.40573229,17.9455731 7.71372041,17.9455731 C8.25842504,17.9455731 8.57431029,17.6873434 8.57431029,17.3258219 C8.57431029,16.9921096 8.32555065,16.817308 7.91509725,16.7577165 L7.72161754,16.7299072 C7.54393208,16.7060706 7.40178372,16.6705144 7.40178372,16.5433859 C7.40178372,16.4043391 7.53603495,16.3209111 7.76110319,16.3209111 C8.0019657,16.3209111 8.23473364,16.4122847 8.34924205,16.4837944 L8.5269275,16.1500822 Z M13.8213617,15.951444 C13.5844478,15.951444 13.4304537,16.0626814 13.3238425,16.2295375 L13.3238425,15.9991172 L12.9171402,15.9991172 L12.9171402,17.8979 L13.327791,17.8979 L13.327791,16.8331991 C13.327791,16.5195493 13.4620423,16.3447477 13.7305447,16.3447477 C13.8134646,16.3447477 13.9003331,16.356666 13.9870041,16.3924208 L14.1133582,16.0030899 C14.0225412,15.967335 13.9040842,15.951444 13.8213617,15.951444 Z M10.3193789,15.9991172 L9.64812271,15.9991172 L9.64812271,15.4230663 L9.23372075,15.4230663 L9.23372075,15.9991172 L8.85070988,15.9991172 L8.85070988,16.3765298 L9.23372075,16.3765298 L9.23372075,17.2423938 C9.23372075,17.6833707 9.40350907,17.9455731 9.88898522,17.9455731 C10.0666707,17.9455731 10.2719961,17.8897558 10.4022988,17.7985808 L10.2838418,17.4450048 C10.1614362,17.5165146 10.027185,17.5522694 9.92057374,17.5522694 C9.71524833,17.5522694 9.64812271,17.425141 9.64812271,17.2344483 L9.64812271,16.3765298 L10.3193789,16.3765298 L10.3193789,15.9991172 Z M4.18409758,17.8979 L4.18409758,16.7060706 C4.18409758,16.2573469 3.89980085,15.9554168 3.44196467,15.951444 C3.20110216,15.9474712 2.95234253,16.0229538 2.77860564,16.289129 C2.64830298,16.0785725 2.44297756,15.951444 2.1549297,15.951444 C1.95355285,15.951444 1.75612457,16.0110355 1.60213051,16.2335103 L1.60213051,15.9991172 L1.19147968,15.9991172 L1.19147968,17.8979 L1.60607907,17.8979 L1.60607907,16.8451174 C1.60607907,16.5153779 1.78771309,16.3407749 2.06806125,16.3407749 C2.34031486,16.3407749 2.47851465,16.5195493 2.47851465,16.8411446 L2.47851465,17.8979 L2.89311404,17.8979 L2.89311404,16.8451174 C2.89311404,16.5153779 3.0826452,16.3407749 3.35509622,16.3407749 C3.63544439,16.3407749 3.76949819,16.5195493 3.76949819,16.8411446 L3.76949819,17.8979 L4.18409758,17.8979 L4.18409758,17.8979 Z"></path>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="35px" height="14px" viewBox="0 0 35 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-138.000000, -2.000000)" fill="#FFFFFF" fill-rule="nonzero">
<g>
<g transform="translate(138.000000, 2.000000)">
<g>
<g transform="translate(0.789600, 0.592200)">
<path d="M33.952799,8.74368672 L32.2361974,8.74368672 C32.0648106,8.74368672 31.9509489,8.75012298 31.8550341,8.81508152 C31.7556725,8.87908655 31.7174017,8.97408097 31.7174017,9.09946884 C31.7174017,9.24857552 31.8013123,9.3500062 31.9233749,9.39386812 C32.0227364,9.4285524 32.1294669,9.43868355 32.2863536,9.43868355 L32.7968295,9.4523904 C33.3119407,9.46514373 33.655784,9.55394027 33.8654417,9.77050849 C33.9035937,9.80066356 33.9265324,9.83451351 33.952799,9.86836347 L33.952799,8.74368672 Z M33.952799,11.3495375 C33.724006,11.6850573 33.2781863,11.8551414 32.6746481,11.8551414 L30.8557135,11.8551414 L30.8557135,11.0075814 L32.6672792,11.0075814 C32.8469857,11.0075814 32.9727327,10.9838626 33.0484425,10.9097264 C33.1140496,10.848582 33.1598082,10.7597854 33.1598082,10.6519185 C33.1598082,10.5367809 33.1140496,10.4453622 33.044758,10.3905348 C32.9764172,10.3302247 32.8769368,10.302811 32.7129189,10.302811 C31.8285297,10.2726559 30.7252124,10.3302247 30.7252124,9.07944492 C30.7252124,8.50614107 31.0881911,7.90268214 32.0765771,7.90268214 L33.952799,7.90268214 L33.952799,7.11626659 L32.2095742,7.11626659 C31.6835284,7.11626659 31.3014143,7.24260798 31.0307848,7.43903308 L31.0307848,7.11626659 L28.452495,7.11626659 C28.0401921,7.11626659 27.5562205,7.21876998 27.3273086,7.43903308 L27.3273086,7.11626659 L22.7231603,7.11626659 L22.7231603,7.43903308 C22.3567348,7.17395454 21.7384587,7.11626659 21.4530914,7.11626659 L18.4161458,7.11626659 L18.4161458,7.43903308 C18.126262,7.15750632 17.4816004,7.11626659 17.0886707,7.11626659 L13.6898161,7.11626659 L12.9120385,7.9603701 L12.1835852,7.11626659 L7.10639979,7.11626659 L7.10639979,12.6314258 L12.0880269,12.6314258 L12.8894563,11.773973 L13.644414,12.6314258 L16.715114,12.6341672 L16.715114,11.3367842 L17.017002,11.3367842 C17.4244319,11.3431012 17.9049567,11.326653 18.3289073,11.142862 L18.3289073,12.6313066 L20.8616762,12.6313066 L20.8616762,11.1938754 L20.9838576,11.1938754 C21.1397935,11.1938754 21.1551256,11.2003116 21.1551256,11.3565697 L21.1551256,12.6311875 L28.8492281,12.6311875 C29.3377162,12.6311875 29.848311,12.5057996 30.1310635,12.2782659 L30.1310635,12.6311875 L32.5716021,12.6311875 C33.0794632,12.6311875 33.575439,12.5597926 33.952799,12.3769552 L33.952799,11.3495375 Z M30.1957199,9.77050849 C30.3791109,9.9608549 30.4774027,10.2011419 30.4774027,10.6079374 C30.4774027,11.4582388 29.9476725,11.8551414 28.9977951,11.8551414 L27.1632907,11.8551414 L27.1632907,11.0075814 L28.9904261,11.0075814 C29.169063,11.0075814 29.2957609,10.9838626 29.375155,10.9097264 C29.4399302,10.848582 29.4864019,10.7597854 29.4864019,10.6519185 C29.4864019,10.5367809 29.4361269,10.4453622 29.3714706,10.3905348 C29.2994453,10.3302247 29.2000838,10.302811 29.0360659,10.302811 C28.1552423,10.2726559 27.0521627,10.3302247 27.0521627,9.07944492 C27.0521627,8.50614107 27.411338,7.90268214 28.3987732,7.90268214 L30.2869994,7.90268214 L30.2869994,8.7439251 L28.5592255,8.7439251 C28.3879576,8.7439251 28.2765918,8.75036136 28.1818655,8.8153199 C28.0787007,8.87932493 28.0404298,8.97431935 28.0404298,9.09970722 C28.0404298,9.2488139 28.1280249,9.35024458 28.2465219,9.3941065 C28.3458834,9.42879078 28.4526139,9.43892193 28.6130662,9.43892193 L29.1200953,9.45262878 C29.6314033,9.46514373 29.9823778,9.55382108 30.1957199,9.77050849 Z M21.6967411,9.52640739 C21.5707564,9.60137789 21.4149394,9.60781415 21.2316672,9.60781415 L20.0874642,9.60781415 L20.0874642,8.7200871 L21.2472371,8.7200871 C21.4149394,8.7200871 21.5827606,8.7236628 21.6967411,8.7914819 C21.8188037,8.85548693 21.8917798,8.97789505 21.8917798,9.14702565 C21.8917798,9.31615624 21.8188037,9.4523904 21.6967411,9.52640739 Z M22.2655742,10.0183045 C22.4752318,10.0958972 22.6466186,10.2349919 22.7269636,10.3501294 C22.8599607,10.543098 22.879215,10.7231941 22.8830183,11.0715864 L22.8830183,11.8551414 L21.9374195,11.8551414 L21.9374195,11.3606222 C21.9374195,11.1228381 21.9602394,10.7707509 21.7851682,10.5869599 C21.6475358,10.4453622 21.4377593,10.4115123 21.0941537,10.4115123 L20.0875831,10.4115123 L20.0875831,11.8551414 L19.1411524,11.8551414 L19.1411524,7.90256295 L21.3156967,7.90256295 C21.7925371,7.90256295 22.1398271,7.92365958 22.4489652,8.08909529 C22.7462179,8.26919137 22.9331745,8.51591465 22.9331745,8.96681038 C22.9330556,9.597683 22.5135026,9.91961517 22.2655742,10.0183045 Z M26.5989741,7.90256295 L26.5989741,8.71996791 L24.393409,8.71996791 L24.393409,9.43856436 L26.5451335,9.43856436 L26.5451335,10.2450038 L24.393409,10.2450038 L24.393409,11.0314194 L26.5989741,11.0349951 L26.5989741,11.8551414 L23.4554169,11.8551414 L23.4554169,7.90256295 L26.5989741,7.90256295 Z M17.1006749,9.72664657 L15.8834958,9.72664657 L15.8834958,8.7200871 L17.1116094,8.7200871 C17.4516494,8.7200871 17.6876925,8.85906263 17.6876925,9.2047136 C17.6876925,9.5465505 17.4625839,9.72664657 17.1006749,9.72664657 Z M14.9453848,11.4956644 L13.4992938,9.88564602 L14.9453848,8.32676013 L14.9453848,11.4956644 Z M11.2108878,11.0314194 L8.89514552,11.0314194 L8.89514552,10.2450038 L10.9629594,10.2450038 L10.9629594,9.43856436 L8.89514552,9.43856436 L8.89514552,8.71996791 L11.2565276,8.71996791 L12.2867501,9.87181998 L11.2108878,11.0314194 Z M18.6988984,9.2047136 C18.6988984,10.3026918 17.882018,10.5293912 17.0587196,10.5293912 L15.8834958,10.5293912 L15.8834958,11.8551414 L14.0527948,11.8551414 L12.8930219,10.5466737 L11.6877282,11.8551414 L7.9569157,11.8551414 L7.9569157,7.90256295 L11.7451345,7.90256295 L12.9039565,9.19815815 L14.1020001,7.90256295 L17.1116094,7.90256295 C17.8590793,7.90256295 18.6988984,8.11007273 18.6988984,9.2047136 Z"></path>
<path d="M2.98601802,3.03341453 L2.3487502,1.47614827 L1.71512458,3.03341453 L2.98601802,3.03341453 Z M17.0249436,2.41331221 C16.8969966,2.4911932 16.745669,2.49378531 16.5643813,2.49378531 L15.4333014,2.49378531 L15.4333014,1.62613692 L16.5797725,1.62613692 C16.7420268,1.62613692 16.9113304,1.63344194 17.0213014,1.69659505 C17.1420815,1.75350355 17.2168054,1.87462557 17.2168054,2.0419342 C17.2168054,2.21265969 17.1457237,2.35004128 17.0249436,2.41331221 Z M25.093948,3.03341453 L24.4496307,1.47614827 L23.8088382,3.03341453 L25.093948,3.03341453 Z M10.0528294,4.71899002 L9.09833758,4.71899002 L9.09481287,1.65959864 L7.74473091,4.71899002 L6.92723284,4.71899002 L5.57362616,1.65688871 L5.57362616,4.71899002 L3.67991621,4.71899002 L3.322158,3.84768912 L1.38356672,3.84768912 L1.02216631,4.71899002 L0.0109266054,4.71899002 L1.6782326,0.812687093 L3.06156434,0.812687093 L4.64509969,4.51115029 L4.64509969,0.812687093 L6.16472027,0.812687093 L7.383213,3.46264363 L8.50254386,0.812687093 L10.0527119,0.812687093 L10.0527119,4.71899002 L10.0528294,4.71899002 Z M13.8570505,4.71899002 L10.7467276,4.71899002 L10.7467276,0.812687093 L13.8570505,0.812687093 L13.8570505,1.62613692 L11.6778389,1.62613692 L11.6778389,2.33024702 L13.8047672,2.33024702 L13.8047672,3.13097196 L11.6778389,3.13097196 L11.6778389,3.91107788 L13.8570505,3.91107788 L13.8570505,4.71899002 L13.8570505,4.71899002 Z M18.2424964,1.86472844 C18.2424964,2.48754069 17.8279903,2.80931523 17.5864301,2.90593007 C17.7901584,2.98369324 17.9641617,3.12107483 18.0469924,3.23489182 C18.1784642,3.42918191 18.2011398,3.60273515 18.2011398,3.95160898 L18.2011398,4.71899002 L17.2620392,4.71899002 L17.2585145,4.22637216 C17.2585145,3.99131532 17.2809551,3.65328121 17.111534,3.46535356 C16.9754801,3.32797197 16.7681096,3.29816276 16.4329096,3.29816276 L15.4334189,3.29816276 L15.4334189,4.71899002 L14.5024251,4.71899002 L14.5024251,0.812687093 L16.6439223,0.812687093 C17.1197583,0.812687093 17.4703496,0.825294152 17.77136,0.999789978 C18.0659084,1.1742858 18.2424964,1.42901908 18.2424964,1.86472844 Z M19.7325094,4.71899002 L18.7824822,4.71899002 L18.7824822,0.812687093 L19.7325094,0.812687093 L19.7325094,4.71899002 Z M30.754047,4.71899002 L29.4346301,4.71899002 L27.6698071,1.7870831 L27.6698071,4.71899002 L25.7736298,4.71899002 L25.4112895,3.84768912 L23.4771628,3.84768912 L23.1256316,4.71899002 L22.0361433,4.71899002 C21.5835704,4.71899002 21.0105698,4.61860484 20.6860613,4.28693317 C20.3588506,3.95526149 20.1886071,3.50600249 20.1886071,2.79564777 C20.1886071,2.2163122 20.2903537,1.68669792 20.690526,1.26819072 C20.9915363,0.956431123 21.4629077,0.812687093 22.1045227,0.812687093 L23.0059089,0.812687093 L23.0059089,1.64970151 L22.1234387,1.64970151 C21.7836565,1.64970151 21.5917947,1.70036539 21.4069823,1.88110583 C21.2482528,2.04558671 21.1393392,2.35652154 21.1393392,2.76595638 C21.1393392,3.18446359 21.2222874,3.48620823 21.3953508,3.68332607 C21.538689,3.83790981 21.7991652,3.88480335 22.0442501,3.88480335 L22.4623984,3.88480335 L23.7746485,0.812804916 L25.1697292,0.812804916 L26.7460977,4.5076156 L26.7460977,0.812804916 L28.1637366,0.812804916 L29.8003776,3.53333742 L29.8003776,0.812804916 L30.754047,0.812804916 L30.754047,4.71899002 Z M0,5.48625324 L1.59093724,5.48625324 L1.94963538,4.61860484 L2.75268213,4.61860484 L3.11044033,5.48625324 L6.24050156,5.48625324 L6.24050156,4.82290988 L6.51989369,5.48908099 L8.14478565,5.48908099 L8.42417778,4.81301275 L8.42417778,5.48625324 L16.2029809,5.48625324 L16.1993387,4.06200911 L16.3498439,4.06200911 C16.4552327,4.06566162 16.4860152,4.07544093 16.4860152,4.24993675 L16.4860152,5.48625324 L20.5092383,5.48625324 L20.5092383,5.15469938 C20.8337468,5.32907739 21.3384854,5.48625324 22.0026585,5.48625324 L23.695225,5.48625324 L24.0574478,4.61860484 L24.8604946,4.61860484 L25.2147281,5.48625324 L28.4763785,5.48625324 L28.4763785,4.66208152 L28.9703081,5.48625324 L31.5839991,5.48625324 L31.5839991,0.038118853 L28.9973309,0.038118853 L28.9973309,0.681550122 L28.635108,0.038118853 L25.9808828,0.038118853 L25.9808828,0.681550122 L25.6482676,0.038118853 L22.0630486,0.038118853 C21.4629077,0.038118853 20.9353759,0.122126634 20.5092383,0.356240887 L20.5092383,0.038118853 L18.0351259,0.038118853 L18.0351259,0.356240887 C17.7639581,0.114939433 17.3944508,0.038118853 16.983587,0.038118853 L7.94469953,0.038118853 L7.33821419,1.44527865 L6.71539768,0.038118853 L3.86837078,0.038118853 L3.86837078,0.681550122 L3.55561139,0.038118853 L1.12755518,0.038118853 L0,2.62845697 L0,5.48625324 L0,5.48625324 Z"></path>
</g>
</g>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="23px" height="15px" viewBox="0 0 23 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-147.000000, -1.000000)">
<g>
<g transform="translate(147.000000, 1.000000)">
<path d="M22.8745698,8.4 C22.8745698,8.4 16.6411308,12.8517198 5.22456981,14.8440998 L22.8745698,14.8440998 L22.8745698,8.4" fill="#FFFFFE"></path>
<path d="M22.83387,0.170044838 C22.83387,0.336418701 22.83387,14.6626636 22.83387,14.8299552 C22.6691545,14.8299552 0.331359855,14.8299552 0.16612997,14.8299552 C0.16612997,14.6635813 0.165358469,0.337729764 0.165358469,0.170569263 C0.330974104,0.170569263 22.6673543,0.170044838 22.83387,0.170044838 Z M22.916935,0 L0,0.00235991295 L0,15 L23,15 L22.9987142,0 L22.916935,0 L22.916935,0 Z" fill="#FFFFFE"></path>
<path d="M2.8000699,7.07888974 C2.5938899,7.26517973 2.32595991,7.34642973 1.90189993,7.34642973 L1.72574994,7.34642973 L1.72574994,5.12134981 L1.90189993,5.12134981 C2.32595991,5.12134981 2.58335991,5.19713981 2.8000699,5.3934398 C3.02717989,5.59558979 3.16367988,5.90875978 3.16367988,6.23102977 C3.16367988,6.55407976 3.02717989,6.87686975 2.8000699,7.07888974 Z M2.03332993,4.55116983 L1.06989996,4.55116983 L1.06989996,7.91608971 L2.02825993,7.91608971 C2.53785991,7.91608971 2.90588989,7.79583971 3.22893988,7.52764972 C3.61269987,7.20992974 3.83980986,6.73113975 3.83980986,6.23596977 C3.83980986,5.24289981 3.09776989,4.55116983 2.03332993,4.55116983 L2.03332993,4.55116983 Z" fill="#FFFFFE"></path>
<polygon fill="#FFFFFE" points="4.14179985 7.91608971 4.79816982 7.91608971 4.79816982 4.55116983 4.14179985 4.55116983"></polygon>
<path d="M6.40301977,5.84245979 C6.00911978,5.69672979 5.89341978,5.60052979 5.89341978,5.4187898 C5.89341978,5.20688981 6.09946978,5.04581981 6.38247977,5.04581981 C6.57903976,5.04581981 6.74062975,5.12654981 6.91170975,5.3182998 L7.25503973,4.86862982 C6.97293974,4.62175983 6.63519976,4.49552984 6.26638977,4.49552984 C5.67098979,4.49552984 5.21689981,4.90905982 5.21689981,5.4597398 C5.21689981,5.92331978 5.4282798,6.16056977 6.04473978,6.38247977 C6.30161977,6.47308976 6.43239976,6.53353976 6.49843976,6.57409976 C6.62960976,6.65976976 6.69525975,6.78092975 6.69525975,6.92223975 C6.69525975,7.19484974 6.47841976,7.39686973 6.18565977,7.39686973 C5.87261978,7.39686973 5.62041979,7.24034973 5.4693598,6.94810975 L5.04529981,7.35643973 C5.3476798,7.80025971 5.71089979,7.99694971 6.21022977,7.99694971 C6.89233975,7.99694971 7.37086973,7.54350972 7.37086973,6.89207975 C7.37086973,6.35751977 7.14960974,6.11545978 6.40301977,5.84245979" fill="#FFFFFE"></path>
<path d="M7.57782972,6.23596977 C7.57782972,7.22500973 8.35444969,7.99187971 9.35388966,7.99187971 C9.63650965,7.99187971 9.87843964,7.93636971 10.1769196,7.79583971 L10.1769196,7.02324974 C9.91444964,7.28584973 9.68200964,7.39179973 9.38443966,7.39179973 C8.72338968,7.39179973 8.2542197,6.91248975 8.2542197,6.23102977 C8.2542197,5.5850598 8.73833968,5.07545981 9.35388966,5.07545981 C9.66705965,5.07545981 9.90391964,5.18712981 10.1769196,5.4540198 L10.1769196,4.68181983 C9.88870964,4.53569983 9.65184965,4.47511984 9.36948966,4.47511984 C8.37511969,4.47511984 7.57782972,5.25758981 7.57782972,6.23596977" fill="#FFFFFE"></path>
<polyline fill="#FFFFFE" points="15.3809494 6.81134975 14.4835595 4.55116983 13.7666095 4.55116983 15.1945294 8.00240971 15.5477394 8.00240971 17.0013994 4.55116983 16.2899094 4.55116983 15.3809494 6.81134975"></polyline>
<polyline fill="#FFFFFE" points="17.2981894 7.91608971 19.1595293 7.91608971 19.1595293 7.34642973 17.9540393 7.34642973 17.9540393 6.43811976 19.1150693 6.43811976 19.1150693 5.86819978 17.9540393 5.86819978 17.9540393 5.12134981 19.1595293 5.12134981 19.1595293 4.55116983 17.2981894 4.55116983 17.2981894 7.91608971"></polyline>
<path d="M20.4415893,6.10037978 L20.2498393,6.10037978 L20.2498393,5.08117981 L20.4519892,5.08117981 C20.8607092,5.08117981 21.0828792,5.25251981 21.0828792,5.5799898 C21.0828792,5.91824978 20.8607092,6.10037978 20.4415893,6.10037978 Z M21.7582292,5.5446298 C21.7582292,4.91464982 21.3244192,4.55116983 20.5674292,4.55116983 L19.5942493,4.55116983 L19.5942493,7.91608971 L20.2498393,7.91608971 L20.2498393,6.56434976 L20.3353793,6.56434976 L21.2438192,7.91608971 L22.0509892,7.91608971 L20.9917492,6.49856976 C21.4861392,6.39794977 21.7582292,6.05981978 21.7582292,5.5446298 L21.7582292,5.5446298 Z" fill="#FFFFFE"></path>
<path d="M22.08255,4.70365983 L22.07059,4.70365983 L22.07059,4.62643983 L22.08333,4.62643983 C22.11817,4.62643983 22.13637,4.63891983 22.13637,4.66439983 C22.13637,4.69052983 22.11791,4.70365983 22.08255,4.70365983 Z M22.20696,4.66335983 C22.20696,4.60433983 22.16627,4.57209983 22.09503,4.57209983 L22,4.57209983 L22,4.86784982 L22.07059,4.86784982 L22.07059,4.75318983 L22.1534,4.86784982 L22.23959,4.86784982 L22.14235,4.74590983 C22.18395,4.73472983 22.20696,4.70443983 22.20696,4.66335983 L22.20696,4.66335983 Z" fill="#FFFFFE"></path>
<path d="M22.10649,4.93115982 C21.99352,4.93115982 21.90109,4.83716982 21.90109,4.71977983 C21.90109,4.60199983 21.99235,4.50800983 22.10649,4.50800983 C22.21894,4.50800983 22.31059,4.60420983 22.31059,4.71977983 C22.31059,4.83612982 22.21894,4.93115982 22.10649,4.93115982 Z M22.10753,4.46159984 C21.96388,4.46159984 21.85,4.57612983 21.85,4.71938983 C21.85,4.86251982 21.96518,4.97730982 22.10753,4.97730982 C22.24741,4.97730982 22.36207,4.86121982 22.36207,4.71938983 C22.36207,4.57820983 22.24741,4.46159984 22.10753,4.46159984 L22.10753,4.46159984 Z" fill="#FFFFFE"></path>
<circle fill="#FFFFFF" cx="12.18" cy="6.24" r="1.81"></circle>
</g>
</g>
</g>
</g>
</svg>
</span>
<span class="mr3">
<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9779 5.91163H16.2622L16.481 4.84897H17.088C17.2865 4.84897 17.4314 4.87722 17.5219 4.93662C17.6139 4.99529 17.6588 5.08801 17.6588 5.21623C17.6588 5.24158 17.6545 5.26693 17.653 5.29301C17.6472 5.32054 17.6443 5.35096 17.6378 5.38356C17.5987 5.5632 17.5277 5.69576 17.4205 5.78196C17.3111 5.86816 17.1641 5.91163 16.9779 5.91163ZM11.2467 7.41471C11.4176 7.41471 11.556 7.35531 11.6646 7.23723C11.7733 7.11988 11.8501 6.94169 11.8979 6.70554C11.9051 6.6686 11.9109 6.63021 11.9145 6.59109C11.9174 6.55342 11.9196 6.51793 11.9196 6.48533C11.9196 6.34842 11.8848 6.24122 11.8138 6.16516C11.7436 6.0891 11.6443 6.05071 11.5154 6.05071C11.3452 6.05071 11.2068 6.11083 11.0982 6.23035C10.9888 6.3506 10.9113 6.53097 10.862 6.77218C10.8555 6.80913 10.8497 6.84679 10.8453 6.88229C10.8417 6.91923 10.8403 6.954 10.841 6.98587C10.841 7.12278 10.8765 7.22854 10.9475 7.30315C11.017 7.37776 11.1163 7.41471 11.2467 7.41471ZM18.975 7.44223C19.1728 7.50525 19.4277 7.28432 19.54 6.94893C19.6552 6.61355 19.5849 6.29047 19.3857 6.2289C19.1894 6.16661 18.9337 6.38609 18.8222 6.7222C18.7048 7.05831 18.7765 7.38138 18.975 7.44223ZM13.5284 10.4455H14.5281C14.6099 10.4571 14.6563 10.4245 14.6621 10.3477L14.7302 10.1043H13.6219L13.5284 10.4455ZM16.6056 11.8834H17.1641L17.3068 11.3778H16.7483L16.6056 11.8834ZM16.833 11.0982C16.833 11.0982 17.1952 10.92 17.4415 10.9047C17.5147 10.6367 17.5857 10.402 17.5857 10.402H17.025L16.833 11.0982ZM17.1134 10.0891C17.1134 10.0891 17.4386 9.96378 17.7204 9.92829C17.7827 9.69576 17.8631 9.4234 17.8631 9.4234H17.3039L17.1134 10.0891ZM13.6921 9.83484C13.6921 9.83484 13.8761 9.70228 14.1833 9.69721C14.4911 9.69286 14.8417 9.69721 14.8417 9.69721L14.9308 9.37197H13.8247L13.6921 9.83484ZM26.1101 1.55161L23.193 14.4585C23.004 15.2872 22.1999 15.9587 21.3705 16H14.891C14.05 15.987 13.527 15.2995 13.7189 14.4527L13.9457 13.4488H13.4372L13.2104 14.4527C13.0185 15.2988 13.5407 15.987 14.3825 16H7.49366C6.65339 15.987 6.12966 15.2995 6.32235 14.4527L6.99964 11.4567H6.40565L5.72836 14.4527C5.53568 15.2988 6.0594 15.987 6.9004 16H1.20536C0.528794 15.9906 0.05795 15.5407 0 14.925V14.686C0.005795 14.6106 0.0159363 14.5331 0.0340456 14.4549L2.95183 1.54727C3.14741 0.691778 4.24267 0 5.09743 0L10.7577 0.00144865C9.908 0.0188337 8.8381 0.703369 8.64614 1.54727L8.09852 3.97175H8.69178L9.24013 1.54727C9.43209 0.702644 10.5013 0.0188337 11.351 0.00144865C11.3626 0.00072427 11.3734 0 11.3843 0L15.7696 0.00217297H18.2354C18.2304 0.00217297 18.2253 0.00289764 18.2209 0.00289764C17.3734 0.0289751 16.318 0.708439 16.1253 1.54654L15.577 3.97103H16.0855L16.6338 1.54654C16.8258 0.708439 17.8812 0.0289751 18.7287 0.00289764C18.7331 0.00289764 18.7374 0.00217297 18.7439 0.00217297C18.7439 0.00217297 18.7447 0.00217297 18.7454 0.00217297L24.9134 0.00362196C25.7675 0.00289758 26.305 0.696849 26.1101 1.55161ZM6.04129 6.60051L6.56067 4.09562H5.78051L5.26621 6.57153C5.2213 6.79029 5.12061 6.95762 4.96632 7.0757C4.81202 7.19522 4.61355 7.25389 4.37233 7.25389C4.16154 7.25389 4.01087 7.19377 3.91815 7.0728C3.8544 6.99167 3.82325 6.88808 3.82398 6.76132C3.82325 6.70409 3.82905 6.64035 3.84498 6.57081L4.35784 4.09489H3.57334L3.05397 6.59978C3.02861 6.72148 3.0163 6.8352 3.0163 6.94096C3.0163 7.19594 3.09091 7.40746 3.23941 7.57334C3.45382 7.80732 3.78993 7.92394 4.24919 7.92394C4.73669 7.92394 5.1351 7.80949 5.44296 7.58204C5.75371 7.35096 5.95436 7.02572 6.04129 6.60051ZM8.4962 5.76168C8.39044 5.6255 8.22238 5.55741 7.98913 5.55741C7.73198 5.55741 7.51394 5.65302 7.33357 5.84498L7.25462 5.93698L7.31764 5.61463H6.76349L6.31655 7.85078H6.88664L7.14089 6.56646C7.17349 6.40492 7.24013 6.27816 7.34082 6.18689C7.44151 6.09634 7.56465 6.05071 7.71097 6.05071C7.8305 6.05071 7.91308 6.08475 7.95581 6.15357C8 6.22166 8.00797 6.32814 7.97972 6.47084L7.70373 7.8515H8.27381L8.57805 6.32814C8.62803 6.0862 8.59978 5.89859 8.4962 5.76168ZM19.2807 7.7117L19.385 7.83267L20.0934 7.85078L20.557 5.74285L19.9421 5.79718L19.6827 5.9761C19.4111 5.76385 19.1626 5.63202 18.6845 5.8544C18.0319 6.15647 17.4864 8.47664 19.2807 7.7117ZM19.829 9.22782C19.7457 9.22782 19.7052 9.19667 19.7102 9.13003L19.6806 8.8707H18.975L18.9989 9.44006C19.0091 9.60377 19.1097 9.67765 19.3075 9.66679H19.8254L19.9529 9.22782H19.829V9.22782ZM15.1141 7.85078H15.8609L16.1275 6.54111H16.9909C17.3379 6.54111 17.64 6.43535 17.8964 6.226C18.1507 6.01521 18.3151 5.7385 18.3861 5.3937C18.4006 5.33068 18.4093 5.26983 18.4172 5.21043C18.4223 5.15031 18.4259 5.09381 18.4259 5.04455V5.03658C18.4259 4.77581 18.3441 4.57588 18.1796 4.4368C18.0138 4.29917 17.7754 4.22818 17.4669 4.22818H15.8566L15.1141 7.85078ZM12.6708 7.85078H13.2401L13.4951 6.56646C13.527 6.40492 13.5936 6.27816 13.6943 6.18689C13.7957 6.09634 13.9189 6.05071 14.0652 6.05071C14.184 6.05071 14.2644 6.08475 14.31 6.15357C14.3542 6.22166 14.3607 6.32814 14.3325 6.47084L14.0565 7.8515H14.6266L14.9308 6.32814C14.9808 6.08693 14.9511 5.89859 14.849 5.76241C14.7432 5.62622 14.5744 5.55813 14.3426 5.55813C14.0862 5.55813 13.8667 5.65375 13.6871 5.84571L13.6096 5.9377L13.6726 5.61536H13.1177L12.6708 7.85078ZM12.0478 9.16407L12.2035 8.88953H11.4582L11.18 9.30677C11.1489 9.37197 11.0829 9.40456 10.9837 9.40456H10.8765L10.7555 9.84353H11.3097C11.4915 9.8544 11.6422 9.7682 11.7646 9.58421H12.828L12.9417 9.16407H12.0478V9.16407ZM9.95002 5.61536H9.33575L8.85549 7.85005H9.46831L9.95002 5.61536ZM10.1485 4.80044H9.52843L9.41326 5.34372H10.0326L10.1485 4.80044ZM10.2506 7.05759C10.2514 7.32054 10.3325 7.52698 10.494 7.68128C10.6541 7.83267 10.8721 7.90873 11.1489 7.90873C11.4835 7.90873 11.7704 7.80442 12.0094 7.59363C12.2492 7.38501 12.4035 7.0996 12.4745 6.74248C12.4846 6.68816 12.4926 6.6331 12.5005 6.57515C12.5063 6.51865 12.51 6.46577 12.51 6.42014C12.51 6.15429 12.4296 5.94422 12.2695 5.78921C12.1094 5.63492 11.8906 5.55741 11.6139 5.55741C11.2771 5.55741 10.9888 5.66461 10.7505 5.8783C10.5114 6.09055 10.3571 6.37885 10.2832 6.74248C10.2731 6.79391 10.2651 6.84824 10.2586 6.90547C10.2535 6.96052 10.2506 7.01123 10.2506 7.05759ZM12.1746 12.1565H11.5502C11.3908 12.1673 11.3329 12.1181 11.3763 12.0101L11.5545 11.3604H12.3216L12.4462 10.904H11.6798L11.8001 10.4636H12.5875L12.7121 10.008H10.7534L10.6302 10.4636H11.0982L10.9786 10.9026H10.4882L10.3644 11.3604H10.854L10.6266 12.1905C10.5556 12.4513 10.6331 12.5817 10.8613 12.5817H12.0601L12.1746 12.1565ZM15.2879 11.0163H14.7577L14.707 11.1952C14.707 11.2488 14.6643 11.2771 14.5781 11.2771H14.4078L14.4209 11.0011H13.7812L13.7334 12.2702C13.7305 12.4868 13.837 12.5882 14.0507 12.5802H14.8171L14.9221 12.205H14.6034C14.4622 12.205 14.3933 12.1659 14.3999 12.092L14.4013 11.6197H14.7418C14.9996 11.6081 15.159 11.4951 15.2191 11.2771L15.2879 11.0163ZM15.3191 10.5925L15.7928 8.87649H14.5527C14.218 8.87649 13.8479 9.15393 13.8479 9.15393L13.8776 8.88664H13.222L12.2919 12.3187C12.2477 12.4832 12.3593 12.5628 12.6295 12.5628H13.3321L13.4343 12.1883H13.1576C13.0858 12.1883 13.0598 12.1543 13.0786 12.0905L13.4075 10.8852H14.812C15.1112 10.8859 15.28 10.7896 15.3191 10.5925ZM17.9609 12.3709L18.0978 11.8827H17.9522L18.6519 9.42267H18.7968L18.9439 8.90185C18.9439 8.90185 18.2941 8.90185 18.0181 8.90185C17.7414 8.90185 17.3597 9.09381 17.3597 9.09381L17.3922 8.90185H16.6432L16.4955 9.42267H16.6396L15.9399 11.8827H15.7965L15.6581 12.3709H17.0902L17.0293 12.5824H17.7544L17.8153 12.3709H17.9609ZM21.0518 9.81456H18.77L18.6346 10.2869H19.4234L19.2974 10.7251H18.51L18.3738 11.1959H19.1011L18.5382 12.0101C18.4752 12.0855 18.402 12.1239 18.3173 12.1239H18.1116L17.9804 12.5802H18.6454C18.8207 12.5918 18.9533 12.5208 19.0373 12.3687L19.3966 11.8305L19.5024 12.3347C19.5125 12.4991 19.6284 12.5737 19.853 12.5621H20.2883L20.418 12.1058H20.2948C20.2115 12.1058 20.163 12.0797 20.1521 12.0246L20.0601 11.4698H19.6668L19.8493 11.1938H20.657L20.7932 10.7229H20.0674L20.1927 10.284H20.9185L21.0518 9.81456ZM23.0887 5.61536H22.4339L21.7863 7.12495L21.7494 5.61536H21.4053L20.996 5.62115L21.1916 8.02753C21.0272 8.35494 20.7396 9.09236 20.2086 9.25534L20.1536 9.63854C20.7859 9.66172 21.0474 9.34879 21.1807 9.21333C21.3133 9.07715 21.5386 8.7845 21.7733 8.28178L23.0887 5.61536Z" fill="white" />
</svg>
</span>
<span class="mr3">
<svg width="30px" height="12px" viewBox="0 0 30 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-194.000000, -3.000000)" fill="#FFFFFF">
<g>
<g transform="translate(193.000000, 2.000000)">
<g transform="translate(0.935000, 0.922000)">