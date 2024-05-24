"use strict";(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[9296],{93573:(t,e,o)=>{o.d(e,{Z:()=>a});var i=o(46255),s=o(95928);const a=(0,i.Z)("ul",{target:"e1p2bvz20"})((({theme:t})=>({display:"flex",flexWrap:"wrap",listStyle:"none",padding:0,width:"calc(100% + 3rem)",[(0,s.Z)(t.mediaQueries.max.width[1160])]:{width:"calc(100% + 1.5rem)"}})),"")},94372:(t,e,o)=>{o.d(e,{Z:()=>i});const i=(0,o(46255).Z)("span",{target:"eh4jd820"})((({theme:t})=>({background:t.colors.black.dark,borderRadius:"0.8rem",height:"100%",left:0,opacity:0,position:"absolute",top:0,transition:"opacity 0.3s",width:"100%","&:hover":{opacity:.5}})),"")},82256:(t,e,o)=>{o.d(e,{Z:()=>a});var i=o(46255),s=o(95928);const a=(0,i.Z)("li",{target:"e1b9c0hh0"})((({theme:t})=>({boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.15)",marginBottom:"3rem",marginRight:"3rem",position:"relative",width:"calc(33.33% - 3rem)",borderRadius:"0.8rem",overflow:"hidden",".background":{backgroundPosition:"center",backgroundSize:"cover"},[(0,s.Z)(t.mediaQueries.max.width[1160])]:{marginBottom:"1.5rem",marginRight:"1.5rem",width:"calc(50% - 1.5rem)"}})),"")},50447:(t,e,o)=>{o.d(e,{Z:()=>c});var i=o(9969),s=o(30160),a=o(74763),r=o(33876),n=o(37829),d=o(46699),l=o(34853);const c=function({aspectRatio:t=1,displayLimit:e,hasBottomMargin:o,imgWidth:c,itemSelectedLocation:h,podcasts:p=[],tilesInRow:m=4}){if(!p.length)return null;const Z=p.map((e=>{const{title:n,description:p,imgUrl:Z,url:g,followed:u,seedType:w,seedId:y,newEpisodeCount:f}=e,S=(0,l.tZ)(d.Z,{lines:2,children:p}),L={id:y,location:h,name:n,type:w};return{children:(0,l.BX)(a.Z,{itemSelected:L,to:g,children:[(0,l.tZ)(r.Z,{newEpisodeCount:f}),(0,l.tZ)(i.Z,{alt:n,aspectRatio:t,height:c,id:y,src:Z,type:w,width:c})]}),dropdown:(0,l.tZ)(s.Z,{followed:u,seedId:y,title:n},`dropdown-${y}`),hasBottomMargin:o,itemSelected:L,key:y,subTitle:S,tilesInRow:m,title:n,titleSingleLine:!0,url:g}}));return(0,l.tZ)(n.Z,{aspectRatio:t,displayLimit:e,subtitleLines:2,tilesData:Z,tilesInRow:m,titleLines:1})}},54415:(t,e,o)=>{o.r(e),o.d(e,{default:()=>v});var i=o(93573),s=o(94372),a=o(82256),r=o(37851),n=o(70515),d=o(54067),l=o(74763),c=o(62188),h=o(90758),p=o(26152),m=o(34853);var Z=o(71130),g=o(9271);const u=(0,Z.connect)(g.eq)((({networks:t})=>{const e=(0,h.Z)();return t.length?(0,m.tZ)(c.Z,{as:"h2",header:e("iHeart Podcast Networks"),url:"/podcast/networks",children:(0,m.tZ)(i.Z,{children:t.slice(0,6).map((t=>(0,m.tZ)(a.Z,{children:(0,m.BX)(l.Z,{to:t.link.urls.web,children:[(0,m.tZ)(d.ZP,{alt:t.title,background:!0,ops:[(0,p.QX)("center"),(0,p.bC)(1.77,1),(0,p.SI)(330,0)],src:t.img_uri}),(0,m.tZ)(s.Z,{})]})},t.title)))})}):null}));var w=o(20015),y=o(12771);function f({keywords:t}){return(0,m.tZ)(y.q,{meta:[{content:t,name:"keywords"}]})}var S=o(94517),L=o(50447),b=o(61729),k=o(33998),P=o(96832),R=o(58554);class v extends P.Component{constructor(...t){super(...t),this.state={followedShowsLimit:6,recShowsLimit:3},this.onShowMoreClick=t=>{const{followedShowsLimit:e,recShowsLimit:o}=this.state,{followed:i,recs:s}=this.props,a="recs"===t?o+15:e+15,r="recs"===t?Math.min(s.length,a):Math.min(i.length,a);return"recs"===t?this.setState({recShowsLimit:r}):this.setState({followedShowsLimit:r})}}componentDidMount(){const{categories:t=[],getPodcastCategories:e,getPodcastRecs:o,requestFollowed:i,setHasHero:s}=this.props;i(),s(!1),o(),t.length||e()}UNSAFE_componentWillReceiveProps(t){this.props.isAuthenticated||!t.isAuthenticated||t.receivedFollowed||t.requestFollowed()}truncatedFavShows(){const{followed:t}=this.props,{followedShowsLimit:e}=this.state;return t.slice(0,e)}render(){var t;const{categories:e=[],countryCode:o,featuredCategoryPodcasts:h=[],popularCategoryPodcasts:Z=[],featuredCategory:g,followed:y=[],popularCategory:P,translate:v,imgWidth:B,podcastRecsFlag:C,recs:H=[]}=this.props,{name:T}=g,_="WW"===o,I=e.length?e.map((t=>"Featured"!==t.name?(0,m.tZ)(a.Z,{"data-test":"podcast-directory-topic-tile",children:(0,m.BX)(l.Z,{to:(0,R.NQ)(t.name,t.id),children:[(0,m.tZ)(d.ZP,{alt:t.name,background:!0,ops:[(0,p.QX)("center"),(0,p.bC)(1.77,1),(0,p.SI)(330,0)],src:t.image}),(0,m.tZ)(s.Z,{"data-test":"podcast-directory-podcast-overlay"})]})},t.id):null)):null,D=[];for(let t=0;t<3;t+=1)D.push((0,m.tZ)(b.Z,{isDummyTile:!0,singleRow:!0,tilePosition:t,tilesInRow:3},`dummyTile${t}`));const A=(0,m.tZ)(c.Z,{header:(0,m.tZ)(n.Z,{as:"h2",style:{marginBottom:"2rem"},children:v("Recommended For You")}),isHidden:H.length<5,children:H.length?(0,m.tZ)(L.Z,{imgWidth:B,podcasts:(0,R.jU)(H,y),tilesInRow:3}):(0,m.tZ)(k.Z,{tilesInRow:3,children:D})});return(0,m.BX)(m.HY,{children:[(0,m.tZ)(r.Z,{deeplink:"goto/podcast",description:v("Listen to the latest episodes from top podcasts. Get news, sports & lifestyle info from your favorite personalities for free!"),legacyDeeplink:"goto/podcast",metaTitle:v("Listen to the Best Podcasts Online for Free on iHeart"),ogType:"website",pagePath:"/podcast/",title:v("Listen to the Best Podcasts & Shows Online, Free")}),(0,m.tZ)(f,{keywords:v("Talk, Show, Host, Personality, On Demand, Topic, Category, Health, News, Politics, Comedy, Station, Internet, Online, iHeartRadio, iHeart")}),(0,m.BX)(w.ZP,{dataTest:w.n3.PodcastDirectory,isWwUser:_,mainStyles:_?{display:"block",margin:"0 auto"}:{},more:_?(0,m.tZ)("div",{}):null,noAds:_,title:v("Stream Top Podcasts"),children:[(0,m.tZ)(S.Z,{categories:e,title:v("All Topics")}),C?A:null,(0,m.tZ)(c.Z,{dataTest:"popular-podcast-section",header:(0,m.tZ)(n.Z,{as:"h2","data-test":"popular-podcasts-section-heading",style:{marginBottom:"2rem"},children:v("{name} Podcasts",{name:null!=(t=null==P?void 0:P.name)?t:""})}),isHidden:!Z.length,children:(0,m.tZ)(L.Z,{imgWidth:B,podcasts:Z,tilesInRow:3})}),(0,m.tZ)(c.Z,{dataTest:"featured-podcast-section",header:(0,m.tZ)(n.Z,{as:"h2","data-test":"featured-podcasts-section-heading",style:{marginBottom:"2rem"},children:v("{name} Podcasts",{name:T})}),isHidden:!h.length,children:(0,m.tZ)(L.Z,{imgWidth:B,podcasts:h,tilesInRow:3})}),(0,m.tZ)(u,{}),(0,m.tZ)(c.Z,{dataTest:"podcast-genre-section",header:(0,m.tZ)(n.Z,{as:"h2","data-test":"podcast-genre-section-heading",style:{marginBottom:"2rem"},children:v("Topics")}),isHidden:!e.length,children:(0,m.tZ)(i.Z,{"data-test":"podcast-directory-topics",children:I})})]})]})}}v.defaultProps={imgWidth:d.ul}}}]);
//# sourceMappingURL=PodcastDirectory.www.js.mapfunction c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(p&&p.fillText)switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!s("\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!s("\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);
</script>
<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 0.07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='nivoslider-css' href='https://lipperalpha.refinitiv.com/wp-content/plugins/nivo-slider/scripts/nivo-slider/nivo-slider.css?ver=6.2.3' type='text/css' media='all' />
<link rel='stylesheet' id='wp-block-library-css' href='https://lipperalpha.refinitiv.com/wp-includes/css/dist/block-library/style.min.css?ver=6.2.3' type='text/css' media='all' />
<link rel='stylesheet' id='classic-theme-styles-css' href='https://lipperalpha.refinitiv.com/wp-includes/css/classic-themes.min.css?ver=6.2.3' type='text/css' media='all' />
<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='prefix-style-css' href='https://lipperalpha.refinitiv.com/wp-content/plugins/tr-index-widget/style.css?ver=6.2.3' type='text/css' media='all' />
<link rel='stylesheet' id='wp-polls-css' href='https://lipperalpha.refinitiv.com/wp-content/plugins/wp-polls/polls-css.css?ver=2.77.2' type='text/css' media='all' />
<style id='wp-polls-inline-css' type='text/css'>
.wp-polls .pollbar {
	margin: 1px;
	font-size: 18px;
	line-height: 20px;
	height: 20px;
	background: #ff8000;
	border: 1px solid #;
}

</style>
<link rel='stylesheet' id='YoutubeFeeder_styles-css' href='https://lipperalpha.refinitiv.com/wp-content/plugins/youtube-feeder/css/style.css?ver=2.0.1' type='text/css' media='all' />
<link rel='stylesheet' id='wp-pagenavi-css' href='https://lipperalpha.refinitiv.com/wp-content/plugins/wp-pagenavi/pagenavi-css.css?ver=2.70' type='text/css' media='all' />
<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js?ver=6.2.3' id='jquery-js'></script>
<script type='text/javascript' src='https://lipperalpha.refinitiv.com/wp-content/plugins/tr-index-widget/tr-index-widget.js?ver=6.2.3' id='my-plugin-script-js'></script>
<script type='text/javascript' src='https://lipperalpha.refinitiv.com/wp-content/plugins/youtube-feeder/js/jquery.youtubeplaylist.js?ver=2.0.1' id='YoutubeFeeder_jquery_youtubeplaylist-js'></script>
<link rel="https://api.w.org/" href="https://lipperalpha.refinitiv.com/wp-json/" /><link rel="alternate" type="application/json" href="https://lipperalpha.refinitiv.com/wp-json/wp/v2/pages/43274" /><link rel='shortlink' href='https://lipperalpha.refinitiv.com/' />
<link rel="alternate" type="application/json+oembed" href="https://lipperalpha.refinitiv.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Flipperalpha.refinitiv.com%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://lipperalpha.refinitiv.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Flipperalpha.refinitiv.com%2F&#038;format=xml" />

	<!-- CLOSE head -->
</head>

<!-- OPEN Body -->

<body id="top" class="home page-template page-template-template-home page-template-template-home-php page page-id-43274 theme-grey">

	<!-- HEADER -->
	<!--region 1-->
	<header class="region region-1">
		<!--c064 Cookie Policy-->
		<div class="cookie-policy">
			<div class="container">
				<span class="cookie-policy-title">Our Policy Towards the use of cookies</span>
				<div class="row">
					<div class="cookie-policy-notice col-sm-8 col-md-6 col-lg-5">
						<p>All Refinitiv websites use cookies to improve your online experience. They were placed on your computer when you launched this website. You can change your cookie settings through your browser.</p>
					</div>
					<div class="cookie-policy-buttons col-sm-4 col-md-6 col-lg-7">
						<a href="#okay-to-continue" data-toggle="closeup" data-toggle-target=".cookie-policy" id="policy-ok"><span class="icon icon-checkmark-blue"></span>Okay to Continue</a>
						<a target="_blank" href="https://www.refinitiv.com/en/policies/privacy-statement.html#scrollto12"><span class="icon icon-info-blue"></span>More Information</a>
					</div>
				</div>
			</div>
		</div>
		<!--c042 Global Site Header-->
		<nav class="global-site-header component component--inline">
			<div class="container">
				<!--c011 Discover Refinitiv-->
				<div class="discover-thomson-reuters dropdown component component--inline">
					<a href="#discover-thomson-reuters" class="dropdown-toggle" id="discover-thomson-reuters-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Discover Refinitiv<span class="icon icon-caret-light-grey"></span></a>
					<ul id="discover-thomson-reuters-list" class="discover-thomson-reuters-list dropdown-menu" role="menu" aria-labelledby="discover-thomson-reuters-toggle">
						<li><a href="https://my.refinitiv.com" target="_blank">MyRefinitiv</a></li>
						<li><a href="https://www.refinitiv.com/perspectives/" target="_blank">Refinitiv Perspectives</a></li>
						<li><a href="https://developers.refinitiv.com" target="_blank">Developers</a></li>
						<li><a href="https://www.refinitiv.com/en/careers" target="_blank">Careers</a></li>
					</ul>
				</div>
				<!--/c011 Discover Refinitiv-->
				<div class="menu-headersecondary_navigation-container"><ul id="global-site-header-nav" class="global-site-header-nav"><li id="menu-item-49650" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-49650"><a target="_blank" rel="noopener" href="http://solutions.refinitiv.com/LipperAlphaInsightsubscription">Subscribe to Updates</a></li>
<li id="menu-item-48756" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-48756"><a target="_blank" rel="noopener" href="https://www.refinitiv.com/en/contact-us.html">Contact</a></li>
<li id="menu-item-48757" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-48757"><a target="_blank" rel="noopener" href="https://my.refinitiv.com">Support</a></li>
</ul></div>			</div>
			<!--/container-->
		</nav>
		<!--/c042 Global Site Header-->
	</header>

	<!--region 2-->
	<header class="region region-2 fixedsticky fixedsticky-sm fixedsticky-md fixedsticky-lg">
		<!--c043 Site Specific Header-->
		<div class="site-specific-header site-specific-header--expanded  site-specific-header--integrated  component component--inline">
			<div class="container">
				<div class="lockup">
					<a href="https://www.lseg.com" target="_blank" class="icon logo icon-lseg-tac-logo">LSEG</a>
					<span class="business-unit">
						<a href="/" class="default">LIPPER ALPHA INSIGHT</a>
					</span>
				</div>
				<div class="nav-wrapper">
					<!--c018 Primary Navigation-->
					<nav class="primary-navigation component component--inline"> <a href="#navigation" class="primary-navigation-toggle toggle" id="primary-navigation-toggle" role="button"><span class="icon icon-burger">Navigation</span></a>
						<div class="primary-navigation-list-wrapper">
							<div class="menu-headerprimary_navigation-container"><ul id="primary-navigation-list" class="primary-navigation-list level-1"><li id="menu-item-47621" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47621"><a href="https://lipperalpha.refinitiv.com/commentary-research/">Commentary &#038; Research</a></li>
<li id="menu-item-52138" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-52138"><a href="https://lipperalpha.refinitiv.com/the-events/">Events</a></li>
<li id="menu-item-47624" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47624"><a href="https://lipperalpha.refinitiv.com/lipper/">Lipper</a></li>
<li id="menu-item-73461" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-73461"><a target="_blank" rel="noopener" href="https://www.refinitiv.com/en/products/starmine-financial-modeling">StarMine</a></li>
</ul></div>						</div>
					</nav>
					<!--/c018 Primary Navigation-->

					<!--c022 Site Specific Global Search-->
					<div class="global-search component component--inline"> <a href="#search" class="global-search-toggle toggle" role="button"><span class="icon icon-search">Search</span></a>
						<div class="global-search-form">
							<form method="get" action="/searching/">
								<fieldset role="search">
									<input class="global-search-input" name="wordSearching" type="search" placeholder="Search">
									<button class="global-search-submit" type="submit">Submit</button>
								</fieldset>
							</form>
						</div>
					</div>
					<!--/c022 Site Specific Global Search-->
				</div>
			</div>
			<div class="primary-navigation-mobile"></div>
		</div>
		<!--/c043 Site Specific Header-->
	</header>
	<!-- /header -->
	<!--/region 2-->
<section class="newMarqueeHome">
	<div class="newMarqueeHome-wrapper" style="background-image: url('https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/images/marquee_starmine.jpg');">
		<div class="body">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-6 newMarqueeHome-left">

													<div class="heading">StarMine Quantitative Analytics</div>
							<p class="copy">Unique value-add analytics and predictive financial modeling, dedicated to making investment research smarter.</p>
							<p>
								<a target="_blank" href="https://refini.tv/3t4shsT" class="btn btn-primary">Learn more<span class="icon icon-chevron-large"></span></a>
							</p>
											</div>
					<div class="col-md-6 col-sm-6 newMarqueeHome-right">
						<div class="featuredArticles">
							<div class="featuredArticles-title">
								Featured Articles
							</div>
							<div class="featuredArticles-body">
								<ul>
																																							<li>
												<a href="https://lipperalpha.refinitiv.com/2024/01/stoxx-600-earnings-outlook-23q4-january-16-2024/">
													<span class="date">
														Jan 16, 2024													</span>
													<span class="title"><strong>STOXX 600 Earnings Outlook 23Q4 | January. 16, 2024</strong></span>
													<span class="excerpt">Download the full report here.

Please note: if you use our earnings data, please source "LSEG ...</span>
													<span class="icon icon-chevron-large icon-carrot"></span>
												</a>
											</li>
																					<li>
												<a href="https://lipperalpha.refinitiv.com/reports/2024/01/uk-etf-market-report-december-2023/">
													<span class="date">
														Jan 16, 2024													</span>
													<span class="title"><strong>UK ETF Market Report:  December 2023</strong></span>
													<span class="excerpt">


Assets Under Management
Chart 1: Assets Under Management of ETFs Listed on the LSE by Asset ...</span>
													<span class="icon icon-chevron-large icon-carrot"></span>
												</a>
											</li>
																					<li>
												<a href="https://lipperalpha.refinitiv.com/reports/2024/01/global-responsible-investments-fund-market-statistics-for-december-lipper-analysis/">
													<span class="date">
														Jan 15, 2024													</span>
													<span class="title"><strong>Global Responsible Investments Fund Market Statistics for December–Lipper Analysis</strong></span>
													<span class="excerpt">
In this issue of LSEG Lipper’s Global Mutual Funds &amp; Exchange-Traded Products Snapshot, we ...</span>
													<span class="icon icon-chevron-large icon-carrot"></span>
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

</section>



<div class="container">
	<div class="row mainView mainHome">
		<div class="col-xs-12 col-sm-4 col-md-4">

			<div class="featured-content featured-content--article">
				<h4 class="heading-2 heading-component heading-component--grey"><span class="icon-circle icon-file"></span> <span class="heading--home">Commentary &amp; Research</span></h4>
				<div class="row">

					
											
							<div class="col-xs-12 column entry--1">
								<div class="border">
									<time class="date">Jan 16, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/2024/01/stoxx-600-earnings-outlook-23q4-january-16-2024/">STOXX 600 Earnings Outlook 23Q4 | January. 16, 2024</a></h5>
									<p class="description">
										Download the full report here.

Please note: if you use our earnings data, please ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 16, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/reports/2024/01/uk-etf-market-report-december-2023/">UK ETF Market Report:  December 2023</a></h5>
									<p class="description">
										


Assets Under Management
Chart 1: Assets Under Management of ETFs Listed on the LSE ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 15, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/reports/2024/01/global-responsible-investments-fund-market-statistics-for-december-lipper-analysis/">Global Responsible Investments Fund Market Statistics for December–Lipper Analysis</a></h5>
									<p class="description">
										
In this issue of LSEG Lipper’s Global Mutual Funds &amp; Exchange-Traded Products ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 14, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/reports/2024/01/global-etf-industry-review-2023/">Monday Morning Memo: Global ETF Industry Review: 2023</a></h5>
									<p class="description">
										General Overview
It’s fair to say that 2023 was a challenging year for portfolio ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 14, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/reports/2024/01/swiss-fund-market-statistics-for-december-lipper-analysis-2/">Swiss Fund Market Statistics for December–Lipper Analysis</a></h5>
									<p class="description">
										
In this issue of LSEG Lipper’s Swiss Mutual Funds &amp; Exchange-Traded Products ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 12, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/reports/2024/01/consumer-confidence-shows-uptick-to-begin-2024/">Consumer Confidence Shows Uptick To Begin 2024</a></h5>
									<p class="description">
										The LSEG/Ipsos Primary Consumer Sentiment Index for January 2024 is at 52.9. Fielded from ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 12, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/2024/01/weekly-aggregates-report-january-12-2024/">Weekly Aggregates Report | January. 12, 2024</a></h5>
									<p class="description">
										To download the full Weekly Aggregates report click here.

Please note: if you use our ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 12, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/2024/01/this-week-in-earnings-23q4-january-12-2024/">This Week in Earnings 23Q4 | January. 12, 2024</a></h5>
									<p class="description">
										To download the full This Week in Earnings report click here.

Please note: if you ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 12, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/2024/01/sp-500-earnings-dashboard-23q4-january-12-2024/">S&amp;P 500 Earnings Dashboard 23Q4 | January. 12, 2024</a></h5>
									<p class="description">
										Click here to view the full report.
Please note: if you use our earnings data, please ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 12, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/2024/01/breakingviews-chesapeake-7-4-bln-deal-finds-safety-in-numbers/">Breakingviews: Chesapeake $7.4 bln deal finds safety in numbers</a></h5>
									<p class="description">
										
Chesapeake Energy is the latest to join the fossil-fuel merger rush, and has the ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 12, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/reports/2024/01/103569-2/">Review of the European ETF Industry, 2023</a></h5>
									<p class="description">
										It’s fair to say that 2023 was a challenging year for portfolio managers around the ...									</p>
								</div>
							</div>
																								<div class="col-xs-12 column entry--1 entry--2">
								<div class="border">
									<time class="date">Jan 12, 2024</time>
									<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/reports/2024/01/review-of-the-european-etf-market-december-2023/">Review of the European ETF Industry, December 2023</a></h5>
									<p class="description">
										The European ETF industry enjoyed healthy inflows over the course of December 2023. These ...									</p>
								</div>
							</div>
															</div>
			</div>
		</div>
		<div class="col-xs-12 col-sm-4 col-md-4 articles-margin--top">

			<div class="Reports Reports-charts">
				<div class="featured-content featured-content--article">
					<h4 class="heading-2 heading-component heading-component--grey borderbottom-fix"><span class="icon-circle icon-chart"></span> <span class="heading--home">Charts</span></h4>
				</div>
								<div class="carousel-single-element SliderCharts-Home" data-slider>
					<ul class="slides">
													<li>
								<!--c065 Video-->
								<div class="video-asset component">
									<div class="video">
										<a href="https://lipperalpha.refinitiv.com/2024/01/chart-of-the-week-bonds-rally-amidst-fed-policy-change-expectations/" title="View chart">
																						<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2024/01/COTW-15-Jan.jpg" alt="">
										</a>
									</div>
									<div class="video-asset-caption caption">
										<span class="video-asset-caption-title">Chart of the Week: Bonds rally amidst Fed policy change expectations</span>
									</div>
								</div>
								<!--/c065 Video-->
							</li>
													<li>
								<!--c065 Video-->
								<div class="video-asset component">
									<div class="video">
										<a href="https://lipperalpha.refinitiv.com/2024/01/news-in-charts-france-new-prime-minister-old-problems/" title="View chart">
																						<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2024/01/Unemployment-rate.jpg" alt="">
										</a>
									</div>
									<div class="video-asset-caption caption">
										<span class="video-asset-caption-title">News in Charts: France &#8211; new prime minister, old problems</span>
									</div>
								</div>
								<!--/c065 Video-->
							</li>
													<li>
								<!--c065 Video-->
								<div class="video-asset component">
									<div class="video">
										<a href="https://lipperalpha.refinitiv.com/2024/01/chart-of-the-week-a-timely-reminder-of-inflation-risks/" title="View chart">
																						<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2024/01/COTW-8-Jan.jpg" alt="">
										</a>
									</div>
									<div class="video-asset-caption caption">
										<span class="video-asset-caption-title">Chart of the Week: A timely reminder of inflation risks</span>
									</div>
								</div>
								<!--/c065 Video-->
							</li>
													<li>
								<!--c065 Video-->
								<div class="video-asset component">
									<div class="video">
										<a href="https://lipperalpha.refinitiv.com/2024/01/news-in-charts-it-was-a-not-so-very-good-year/" title="View chart">
																						<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2024/01/Fathom-economic-sentiment-indicator.jpg" alt="">
										</a>
									</div>
									<div class="video-asset-caption caption">
										<span class="video-asset-caption-title">News in Charts: It was a (not so) very good year</span>
									</div>
								</div>
								<!--/c065 Video-->
							</li>
													<li>
								<!--c065 Video-->
								<div class="video-asset component">
									<div class="video">
										<a href="https://lipperalpha.refinitiv.com/2024/01/chart-of-the-week-will-rates-really-stay-higher-for-longer/" title="View chart">
																						<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2024/01/COTW-3-Jan.jpg" alt="">
										</a>
									</div>
									<div class="video-asset-caption caption">
										<span class="video-asset-caption-title">Chart of the Week: Will rates really stay higher for longer?</span>
									</div>
								</div>
								<!--/c065 Video-->
							</li>
											</ul>
				</div>
				<!--/c050 Carousel Single Element-->
			</div>

			<div class="featured-content featured-content--article webcast-podcast">
				<h4 class="heading-2 heading-component heading-component--grey borderbottom-fix">
					<span class="icon-circle icon-podcast"></span>
					<span class="heading--home">Webcasts & Podcasts</span>
				</h4>
				<div class="row webcast-podcast-carousel">
					
					<div class="carousel-single-element SliderCharts-Home" data-slider>
						<ul class="slides">
															<li>
									<!--c065 Video-->
									<div class="video-asset component">
										<div class="video">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2023/11/uk-fund-market-review-q3-2023/" title="View chart">
																								<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2023/11/RTXMZPM-scaled.jpg" alt="">
											</a>
										</div>
										<div class="video-asset-caption caption">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2023/11/uk-fund-market-review-q3-2023/" class="video-asset-caption-title">UK Fund Market Review &#8211; Q3 2023</a>
										</div>
									</div>
									<!--/c065 Video-->
								</li>
															<li>
									<!--c065 Video-->
									<div class="video-asset component">
										<div class="video">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2023/06/lipper-research-webinar-uk-fund-market-review-q1-2023/" title="View chart">
																								<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2023/06/2304-yield-curve.png" alt="">
											</a>
										</div>
										<div class="video-asset-caption caption">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2023/06/lipper-research-webinar-uk-fund-market-review-q1-2023/" class="video-asset-caption-title">Lipper Research Webinar &#8211; UK Fund Market Review Q1 2023</a>
										</div>
									</div>
									<!--/c065 Video-->
								</li>
															<li>
									<!--c065 Video-->
									<div class="video-asset component">
										<div class="video">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2023/05/101156-2/" title="View chart">
																								<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2023/05/LFA-UK.png" alt="">
											</a>
										</div>
										<div class="video-asset-caption caption">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2023/05/101156-2/" class="video-asset-caption-title">Lipper Fund Awards 2023 | United Kingdom, Highlights</a>
										</div>
									</div>
									<!--/c065 Video-->
								</li>
															<li>
									<!--c065 Video-->
									<div class="video-asset component">
										<div class="video">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2023/02/lipper-research-webinar-recording/" title="View chart">
																								<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2023/02/MicrosoftTeams-image-1.png" alt="">
											</a>
										</div>
										<div class="video-asset-caption caption">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2023/02/lipper-research-webinar-recording/" class="video-asset-caption-title">Lipper Research Webinar &#8211; Recording</a>
										</div>
									</div>
									<!--/c065 Video-->
								</li>
															<li>
									<!--c065 Video-->
									<div class="video-asset component">
										<div class="video">
											<a href="https://lipperalpha.refinitiv.com/podcasts/2023/01/cefa-podcast-refinitiv-lippers-q4-2022-closed-end-fund-market-review/" title="View chart">
																								<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2023/01/RTSESELO-scaled.jpg" alt="">
											</a>
										</div>
										<div class="video-asset-caption caption">
											<a href="https://lipperalpha.refinitiv.com/podcasts/2023/01/cefa-podcast-refinitiv-lippers-q4-2022-closed-end-fund-market-review/" class="video-asset-caption-title">CEFA Podcast: Refinitiv Lipper’s Q4 2022 Closed-End Fund Market Review</a>
										</div>
									</div>
									<!--/c065 Video-->
								</li>
															<li>
									<!--c065 Video-->
									<div class="video-asset component">
										<div class="video">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2022/12/how-do-you-effectively-hedge-against-inflation/" title="View chart">
																								<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2022/12/webcast.png" alt="">
											</a>
										</div>
										<div class="video-asset-caption caption">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2022/12/how-do-you-effectively-hedge-against-inflation/" class="video-asset-caption-title">How do you effectively hedge against inflation?</a>
										</div>
									</div>
									<!--/c065 Video-->
								</li>
															<li>
									<!--c065 Video-->
									<div class="video-asset component">
										<div class="video">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2022/11/the-tide-flows-green-but-in-which-direction/" title="View chart">
																								<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2022/11/sectors-UC.png" alt="">
											</a>
										</div>
										<div class="video-asset-caption caption">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2022/11/the-tide-flows-green-but-in-which-direction/" class="video-asset-caption-title">The tide flows green: but in which direction?</a>
										</div>
									</div>
									<!--/c065 Video-->
								</li>
															<li>
									<!--c065 Video-->
									<div class="video-asset component">
										<div class="video">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2022/09/do-esg-funds-create-alpha/" title="View chart">
																								<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2022/09/Perspectives-shot.png" alt="">
											</a>
										</div>
										<div class="video-asset-caption caption">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2022/09/do-esg-funds-create-alpha/" class="video-asset-caption-title">Do ESG funds create alpha?</a>
										</div>
									</div>
									<!--/c065 Video-->
								</li>
															<li>
									<!--c065 Video-->
									<div class="video-asset component">
										<div class="video">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2022/07/caught-between-inflation-and-recession/" title="View chart">
																								<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2022/07/chat.png" alt="">
											</a>
										</div>
										<div class="video-asset-caption caption">
											<a href="https://lipperalpha.refinitiv.com/webcasts/2022/07/caught-between-inflation-and-recession/" class="video-asset-caption-title">Caught between inflation and recession</a>
										</div>
									</div>
									<!--/c065 Video-->
								</li>
															<li>
									<!--c065 Video-->
									<div class="video-asset component">
										<div class="video">
											<a href="https://lipperalpha.refinitiv.com/podcasts/2022/07/cefa-podcast-refinitiv-lippers-q2-2022-closed-end-fund-market-review/" title="View chart">
																								<img class="img-responsive" src="https://lipperalpha.refinitiv.com/wp-content/uploads/2022/07/RTS8O1KW-scaled.jpg" alt="">
											</a>
										</div>
										<div class="video-asset-caption caption">
											<a href="https://lipperalpha.refinitiv.com/podcasts/2022/07/cefa-podcast-refinitiv-lippers-q2-2022-closed-end-fund-market-review/" class="video-asset-caption-title">CEFA Podcast: Refinitiv Lipper’s Q2 2022 Closed-End Fund Market Review</a>
										</div>
									</div>
									<!--/c065 Video-->
								</li>
													</ul>
					</div>
					<!--/c050 Carousel Single Element-->
					<div class="featured-content featured-content--article margin--top-popularposts">
						<h4 class="heading-2 heading-component heading-component--grey">
							<span class="icon-circle icon-popular"></span>
														<span class="heading--home">Popular Posts</span>
						</h4>
						<div class="row">

							
															<div class="col-xs-12 column entry--1">
									<div class="border">
										<time datetime="2014-07-10" class="date">Dec 22, 2023</time>
										<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/2023/12/sp-500-earnings-dashboard-23q3-december-22-2023/">S&amp;P 500 Earnings Dashboard 23Q3 | December. 22, 2023</a></h5>
										<p class="description">Click here to view the full report.
Please note: if you use our earnings data, please ...</p>
									</div>
								</div>
															<div class="col-xs-12 column entry--1">
									<div class="border">
										<time datetime="2014-07-10" class="date">Dec 22, 2023</time>
										<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/2023/12/this-week-in-earnings-23q3-december-22-2023/">This Week in Earnings 23Q3 | December. 22, 2023</a></h5>
										<p class="description">To download the full This Week in Earnings report click here.

Please note: if you ...</p>
									</div>
								</div>
															<div class="col-xs-12 column entry--1">
									<div class="border">
										<time datetime="2014-07-10" class="date">Dec 22, 2023</time>
										<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/2023/12/weekly-aggregates-report-december-22-2023/">Weekly Aggregates Report | December. 22, 2023</a></h5>
										<p class="description">To download the full Weekly Aggregates report click here.

Please note: if you use our ...</p>
									</div>
								</div>
															<div class="col-xs-12 column entry--1">
									<div class="border">
										<time datetime="2014-07-10" class="date">Dec 21, 2023</time>
										<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/2023/12/russell-2000-earnings-dashboard-23q3-december-21-2023/">Russell 2000 Earnings Dashboard 23Q3 | December. 21, 2023</a></h5>
										<p class="description">Click here to view the full report.
Please note: if you use our earnings data, please ...</p>
									</div>
								</div>
															<div class="col-xs-12 column entry--1">
									<div class="border">
										<time datetime="2014-07-10" class="date">Dec 20, 2023</time>
										<h5 class="heading-5 heading-related-content"><a href="https://lipperalpha.refinitiv.com/2023/12/breakingviews-backlogged-ma-pipeline-will-burst-in-2024/">Breakingviews: Backlogged M&#038;A pipeline will burst in 2024</a></h5>
										<p class="description">
Investment bankers ordered back to the office in 2023 could just as easily have ...</p>
									</div>
								</div>
													</div>
					</div>

				</div><!-- End row -->
			</div>

		</div>

		<div class="col-xs-12 col-sm-4 col-md-4">

							<div class="PollInHome">
					<div id="polls-28" class="wp-polls">
	<form id="polls_form_28" class="wp-polls-form" action="/index.php" method="post">
		<p style="display: none;"><input type="hidden" id="poll_28_nonce" name="wp-polls-nonce" value="fd88b39510" /></p>
		<p style="display: none;"><input type="hidden" name="poll_id" value="28" /></p>
		<p><strong>Regarding ESG, where does your focus lie?</strong></p><div id="polls-28-ans" class="wp-polls-ans"><ul class="wp-polls-ul">
		<li><input type="radio" id="poll-answer-70" name="poll_28" value="70" /> <label for="poll-answer-70">Environmental</label></li>
		<li><input type="radio" id="poll-answer-71" name="poll_28" value="71" /> <label for="poll-answer-71">Social</label></li>
		<li><input type="radio" id="poll-answer-72" name="poll_28" value="72" /> <label for="poll-answer-72">Governance</label></li>
		<li><input type="radio" id="poll-answer-73" name="poll_28" value="73" /> <label for="poll-answer-73">A holistic ESG view</label></li>
		</ul><p><input class="btn btn-smm" type="button" name="vote" value="   Vote   " onclick="poll_vote(28);" /></p><p><a class="associated_article"></a><a class="js-poll-trigger" href="#ViewPollResults" onclick="poll_result(28); return false;" title="View Results Of This Poll">View Results</a></p></div>
	</form>
</div>
<div id="polls-28-loading" class="wp-polls-loading"><img src="https://lipperalpha.refinitiv.com/wp-content/plugins/wp-polls/images/loading.gif" width="16" height="16" alt="Loading ..." title="Loading ..." class="wp-polls-image" />&nbsp;Loading ...</div>
				</div>
				<input type="hidden" id="home_poll_associated_article" value="">
				<input type="hidden" id="home_poll_text_button" value="">
			

							<div class="Ads">

					
				</div>
			
			<!-- Upcoming Events -->
			<div class="LatestEvents Reports Reports--bg-gray">
				<div class="Reports-title-small">
					<h4>Upcoming Events</h4>
				</div>
								<div class="Reports-content clearfix">
					<!-- Upcoming Events Include -->
					
					<a href="/the-events/" class="btn-viewAll">View all events <span class="link link-chevron"></span>
						</span></a>
				</div>
			</div>

			<!-- Recent Events -->
			<div class="LatestEvents Reports Reports--bg-gray">
				<div class="Reports-title-small">
					<h4>Past Events</h4>
				</div>
								<div class="Reports-content clearfix">
											<div class="Report">
							<div class="Report-title">
								<a href="https://lipperalpha.refinitiv.com/2023/04/refinitiv-lipper-fund-awards-event-united-kingdom-2023/" class="text">Refinitiv Lipper Fund Awards United Kingdom 2023</a>
							</div>
							<div class="Report-info">
								<time class="date">
									Apr 20, 2023								</time>
							</div>
							<div class="Report-info">
								Banking Hall							</div>
							<div class="Report-info">
								London							</div>
						</div>
						<!-- End Report -->
											<div class="Report">
							<div class="Report-title">
								<a href="https://lipperalpha.refinitiv.com/2023/04/refinitiv-lipper-fund-awards-nordics-2023/" class="text">Refinitiv Lipper Fund Awards Nordics 2023</a>
							</div>
							<div class="Report-info">
								<time class="date">
									Apr 19, 2023								</time>
							</div>
							<div class="Report-info">
								https://lipperfundawards.com/Awards/Nordics							</div>
							<div class="Report-info">
															</div>
						</div>
						<!-- End Report -->
											<div class="Report">
							<div class="Report-title">
								<a href="https://lipperalpha.refinitiv.com/2023/04/refinitiv-lipper-fund-awards-event-france-2023/" class="text">Refinitiv Lipper Fund Awards France 2023</a>
							</div>
							<div class="Report-info">
								<time class="date">
									Apr 13, 2023								</time>
							</div>
							<div class="Report-info">
								https://lipperfundawards.com/Awards/France							</div>
							<div class="Report-info">
															</div>
						</div>
						<!-- End Report -->
											<div class="Report">
							<div class="Report-title">
								<a href="https://lipperalpha.refinitiv.com/2023/04/refinitiv-lipper-fund-awards-event-taiwan-2023/" class="text">Refinitiv Lipper Fund Awards Taiwan 2023</a>
							</div>
							<div class="Report-info">
								<time class="date">
									Apr 12, 2023								</time>
							</div>
							<div class="Report-info">
								https://lipperfundawards.com/Awards/Taiwan							</div>
							<div class="Report-info">
															</div>
						</div>
						<!-- End Report -->
					
					<a href="/the-events/" class="btn-viewAll">
						View all events <span class="link link-chevron"></span>
					</a>
				</div>
			</div>

		</div>
		<!--End col-md-4 -->
	</div>

	<!-- WordPress Hook -->
	</div>
<!-- Close Main Container -->
<!-- Footer -->

<div class="tr-privacy-policy-banner"><strong>We have updated our Privacy Statement</strong>. Before you continue, please read our new <a href="https://www.refinitiv.com/en/policies/privacy-statement">Privacy Statement</a> and familiarize yourself with the terms.<a class="tr-privacy-policy-banner-close-button" aria-label="Close" href="#">×</a></div>

<footer id="main-footer">
  <!--region 12-->
  <div class="region region-12">
    <!--c091 Back to top-->
    <div class="back-to-top visible-xs visible-sm component component--inline">
      <div class="container">
        <a href="#top" class="ss">Back to Top<span class="icon icon-up"></span></a>
      </div>
    </div>
    <!--/c002 Back to top-->

    <!--c023 Site-Specific Footer-->
    <div class="site-specific-footer component component--inline">
      <div class="container">
        <div class="row">
          <div class="col-sm-7 col-md-8 col-lg-7 col-1">
            <div class="rich-text-editor component">
              <p class="feature">Refinitiv provides solutions to the global financial community - delivering critical news, information and analytics, enabling transactions and connecting communities of trading, investing, financial and corporate professionals.</p>
            </div>
          </div>
          <div class="col-sm-4 col-md-3 col-sm-offset-1 col-lg-offset-2 col-2">
            <!--c069 Call To Action-->
            <div class="call-to-action component">
              <a href="/contributors" target="_self" class="btn btn-dark">Contributors<span class="icon icon-chevron-large-white"></span></a>
            </div>
            <!--/c069 Call To Action-->
            <div class="component">
              <ul class="social">
                                  <li><a href="https://www.facebook.com/refinitiv" target="_blank" title="Facebook"><span class="icon icon-facebook">facebook</span></a></li>
                                                  <li><a href="http://www.twitter.com/refinitiv" target="_blank" title="Twitter"><span class="icon icon-twitter">Twitter</span></a></li>
                                                  <li><a href="https://www.linkedin.com/company/refinitiv/" target="_blank"><span class="icon icon-linkedin">Linkedin</span></a></li>
                                                                  <li><a href="https://www.youtube.com/channel/UC5z9sDKRTI2LrDKlxTUmU8Q" target="_blank"><span class="icon icon-youtube">Youtube</span></a></li>
                                                  <li><a href="https://instagram.com/refinitiv" target="_blank"><span class="icon icon-instagram">Youtube</span></a></li>
                                                  <li><a href="/feed" target="_blank"><span class="icon icon icon-rss">RSS</span></a></li>
                              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="global-footer component component--inline">
      <div class="container">
        <div class="row">
          <div class="col-6 col-lg-2">
            <a href="/" title="Home"> <img src="https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/images/svg/Refinitiv-logo-primary-white-rgb.svg" alt=""> </a>
          </div>
          <button aria-label="Toggle button" class="footer-menu__nav-btn"> <i class="icon-ui-carrot-dark-gray"></i> </button>
          <div class="col-12 col-md-12 col-lg-10 footer-menu">
            <nav class="holder">
              <div class="menu-footer_navigation-container"><ul id="global-footer-list" class="menu global-footer-list"><li id="menu-item-49114" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-49114"><a href="https://lipperalpha.refinitiv.com/terms-conditions/">Terms &#038; Conditions</a></li>
<li id="menu-item-47520" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-47520"><a title="Privacy Policy" target="_blank" rel="noopener" href="https://www.refinitiv.com/en/policies/privacy-statement.html">Privacy Policy</a></li>
<li id="menu-item-93139" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-93139"><a target="_blank" rel="noopener" href="https://privacyportalde-cdn.onetrust.com/dsarwebform/5f7a2da0-bed0-45e8-ac2c-c1f297e2efdc/1234b4c9-a981-4092-b398-cb80005998cf.html">Do not sell my personal information</a></li>
<li id="menu-item-47521" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-47521"><a title="Terms of Use" target="_blank" rel="noopener" href="https://www.refinitiv.com/en/policies/terms-of-use.html">Terms of Use</a></li>
<li id="menu-item-47522" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-47522"><a title="Contact" target="_blank" rel="noopener" href="https://www.refinitiv.com/en/contact-us.html">Contact</a></li>
</ul></div>            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/region 12-->
  <img src="https://rtd-tm.everesttech.net/upi/?sid=H0PTyRIGv2HUXThGIfb0&cs=1" />
</footer>
<script src="https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/js/privacypolicy.2.0.0.js"></script>
<script src="https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/js/vendor.js"></script>
<script src="https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/js/main.js"></script>
<script src="https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/js/vendor/masonry.pkgd.min.js"></script>
<script src="https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/js/vendor/imagesloaded.pkgd.min.js"></script>
<script src="https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/js/vendor/jquery.cycle2.min.js"></script>
<script src="https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/js/done/main.js"></script>
<script src="https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/js/stacktable.js"></script>

<script>
  //var controller;
  jQuery(document).ready(function($) {
    $('.home p:empty').remove();
    $('#responsive-example-table').stacktable({
      myClass: 'stacktable large-only'
    });
    // privay policy banner (digital.dev.gcs.js)
    trInvokePrivacyPolicyBanner();
  });
</script>

<!-- WordPress Footer Hook -->
<script type='text/javascript' id='ajax-pagination-js-extra'>
/* <![CDATA[ */
var ajaxpagination = {"ajaxurl":"https:\/\/lipperalpha.refinitiv.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type='text/javascript' src='https://lipperalpha.refinitiv.com/wp-content/themes/refinitiv/js/ajax-pagination.js?ver=1.0.0' id='ajax-pagination-js'></script>
<script type='text/javascript' id='wp-polls-js-extra'>
/* <![CDATA[ */
var pollsL10n = {"ajax_url":"https:\/\/lipperalpha.refinitiv.com\/wp-admin\/admin-ajax.php","text_wait":"Your last request is still being processed. Please wait a while ...","text_valid":"Please choose a valid poll answer.","text_multiple":"Maximum number of choices allowed: ","show_loading":"1","show_fading":"1"};
/* ]]> */
</script>
<script type='text/javascript' src='https://lipperalpha.refinitiv.com/wp-content/plugins/wp-polls/polls-js.js?ver=2.77.2' id='wp-polls-js'></script>
<script>
  var addthis_config = {
    'data_track_clickback': true,
    'data_ga_social': true
  };
  var addthis_share = {
    url_transforms: {
      clean: true
    }
  };
</script>
<script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53875c3e3e2b90d4"></script>
</body>
</html>