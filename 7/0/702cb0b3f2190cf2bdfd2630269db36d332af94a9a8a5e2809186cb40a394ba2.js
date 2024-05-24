<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;www&#46;sap&#46;com&#47;etc&#46;clientlibs&#47;sapdx&#47;front&#45;layer&#47;dist&#47;resources&#47;sapcom&#47;feedback&#45;CallMeNow&#46;5ae08a3e3c60e5219ce9&#46;js" on this server.<P>
Reference&#32;&#35;18&#46;24231102&#46;1706719739&#46;d45410
</BODY>
</HTML>
        "nodeId": "1",
            "messageId": "",
            "messageTitle": "",
            "messageType": "",
            "messageCreateDate": "",
            "user_tags": [],
            "labels": [],
            "pageId": "1",
        }
        this.getProp = function(name){ return data[name]; }
    }
</script>

<script type="text/javascript">window.adobeDataLayer=window.adobeDataLayer||[];function CommunityEDDLCore(){this.sendEvent=function(event){window.adobeDataLayer.push(event)}}function CommunityEDDLLoginState(pageData){var hasUserLoggedIn=LITHIUM.CommunityJsonObject.Activity.Results.filter(item=>item.name==='UserSignedOn').length>0;var currentState=pageData.getProp("loginStatus");var prevState=localStorage.getItem("userLoggedIn")||currentState;localStorage.setItem("userLoggedIn",currentState);this.isLogin=function(){return hasUserLoggedIn&&currentState==="yes"};this.isLogout=function(){return prevState!=currentState&&currentState==="no"};this.isAuthenticationEvent=function(){return this.isLogin()||this.isLogout()}}function CommunityEDDLEvents(){var eddl=new CommunityEDDLCore();var pageData=new DataContainer();this.global=function(){eddl.sendEvent({'event':'globalDL','site':{'name':'scn-groups','country':pageData.getProp('country')},'user':{'loginStatus':pageData.getProp('loginStatus')}})};this.pageView=function(){eddl.sendEvent({'event':'pageView','page':{'pageId':pageData.getProp('pageId'),'name':location.pathname.slice(1)||'/','title':pageData.getProp('pageName'),'template':pageData.getProp('pageTemplate'),'section':location.pathname.split('/')[2]||'/','language':'en','country':pageData.getProp('country'),'url':window.location.href,'referrer':document.referrer,'semaphoreID':pageData.getProp('productIDs')},'user':{'loginStatus':pageData.getProp('loginStatus')}})};this.siteContent=function(){if(!pageData.getProp('messageId')){return}eddl.sendEvent({'event':'siteContentView','siteContent':{'contentid':pageData.getProp('messageId'),'type':pageData.getProp('messageType'),'title':pageData.getProp('messageTitle'),'tag':pageData.getProp('user_tags'),'language':'en','createDate':pageData.getProp('messageCreateDate'),'nodeID':pageData.getProp('nodeId'),'label':pageData.getProp('labels')},'user':{'loginStatus':pageData.getProp('loginStatus')}})};this.login=function(){var loginState=new CommunityEDDLLoginState(pageData);if(!loginState.isAuthenticationEvent()){return}eddl.sendEvent({'event':loginState.isLogin()?'userLogin':'userLogout','user':{'loginStatus':pageData.getProp('loginStatus')}})};this.beacon=function(){eddl.sendEvent({'event':'stBeaconReady'})}}function CommunityScenarios(){var events=new CommunityEDDLEvents();this.pageView=function(){events.global();events.login();events.pageView();events.siteContent();events.beacon()};this.kudo=function(){};this.subscription=function(){}}window.addEventListener('load',()=>{if(LITHIUM?.CommunityJsonObject?.Activity?.Results==undefined){console.error("SAP EDDL: Tracking is disabled due to LITHIUM.CommunityJsonObject.Activity.Results is undefined");return}var eddlScenarios=new CommunityScenarios();eddlScenarios.pageView()});</script>

	
	
	
	<meta content="width=device-width, initial-scale=1.0, user-scalable=yes" name="viewport"/><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/><link href="https://community.sap.com/" rel="canonical"/>
	<meta content="https://groups.community.sap.com/html/assets/SAP_R_grad_200x200.png" property="og:image"/><meta content="SAP Community" property="og:site_name"/><meta content="website" property="og:type"/><meta content="https://community.sap.com/" property="og:url"/><meta content="" property="og:description"/><meta content="SAP Community" property="og:title"/>
	
	
		<link class="lia-link-navigation hidden live-links" title="New board topics in SAP Community" type="application/rss+xml" rel="alternate" id="link" href="/khhcw49343/rss/Community?interaction.style=forum"></link>
	
		<link class="lia-link-navigation hidden live-links" title="All board posts in SAP Community" type="application/rss+xml" rel="alternate" id="link_0" href="/khhcw49343/rss/Community?interaction.style=forum&amp;feeds.replies=true"></link>
	
		<link class="lia-link-navigation hidden live-links" title="New knowledge base documents in SAP Community" type="application/rss+xml" rel="alternate" id="link_1" href="/khhcw49343/rss/Community?interaction.style=tkb"></link>
	
		<link class="lia-link-navigation hidden live-links" title="All knowledge base posts in SAP Community" type="application/rss+xml" rel="alternate" id="link_2" href="/khhcw49343/rss/Community?interaction.style=tkb&amp;feeds.replies=true"></link>
	
		<link class="lia-link-navigation hidden live-links" title="New blog articles in SAP Community" type="application/rss+xml" rel="alternate" id="link_3" href="/khhcw49343/rss/Community?interaction.style=blog"></link>
	
		<link class="lia-link-navigation hidden live-links" title="All blog posts in SAP Community" type="application/rss+xml" rel="alternate" id="link_4" href="/khhcw49343/rss/Community?interaction.style=blog&amp;feeds.replies=true"></link>
	
		<link class="lia-link-navigation hidden live-links" title="New idea exchange ideas in SAP Community" type="application/rss+xml" rel="alternate" id="link_5" href="/khhcw49343/rss/Community?interaction.style=idea"></link>
	
		<link class="lia-link-navigation hidden live-links" title="All idea exchange posts in SAP Community" type="application/rss+xml" rel="alternate" id="link_6" href="/khhcw49343/rss/Community?interaction.style=idea&amp;feeds.replies=true"></link>
	
		<link class="lia-link-navigation hidden live-links" title="New Questions in SAP Community" type="application/rss+xml" rel="alternate" id="link_7" href="/khhcw49343/rss/Community?interaction.style=qanda"></link>
	
		<link class="lia-link-navigation hidden live-links" title="All Questions, Answers, and Comments in SAP Community" type="application/rss+xml" rel="alternate" id="link_8" href="/khhcw49343/rss/Community?interaction.style=qanda&amp;feeds.replies=true"></link>
	
		<link class="lia-link-navigation hidden live-links" title="New Products" type="application/rss+xml" rel="alternate" id="link_9" href="/khhcw49343/rss/Community?interaction.style=review"></link>
	
		<link class="lia-link-navigation hidden live-links" title="All Reviews and Comments" type="application/rss+xml" rel="alternate" id="link_10" href="/khhcw49343/rss/Community?interaction.style=review&amp;feeds.replies=true"></link>
	
		<link class="lia-link-navigation hidden live-links" title="rss.livelink.threads-in-node@place:occasion" type="application/rss+xml" rel="alternate" id="link_11" href="/khhcw49343/rss/Community?interaction.style=occasion"></link>
	
		<link class="lia-link-navigation hidden live-links" title="rss.livelink.posts-in-node@place:occasion" type="application/rss+xml" rel="alternate" id="link_12" href="/khhcw49343/rss/Community?interaction.style=occasion&amp;feeds.replies=true"></link>
	
		<link class="lia-link-navigation hidden live-links" title="New media posts in SAP Community" type="application/rss+xml" rel="alternate" id="link_13" href="/khhcw49343/rss/Community?interaction.style=media"></link>
	
		<link class="lia-link-navigation hidden live-links" title="All media posts in SAP Community" type="application/rss+xml" rel="alternate" id="link_14" href="/khhcw49343/rss/Community?interaction.style=media&amp;feeds.replies=true"></link>
	

	
	
	    
            	<link href="/skins/1906075/807055b66159d6ce4b1fb88c9f276de0/sap2023.css" rel="stylesheet" type="text/css"/>
            
	

	
	
	
	
	<link rel="shortcut icon" href="https://community.sap.com/html/@28E64AF715869863C9097AAA9C123156/assets/favicon.ico" />

  <script src="https://assets.adobedtm.com/ccc66c06b30b/2a75032df81e/launch-dfaf5c383cc4.min.js"></script>

  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>

<link href="https://community.sap.com/html/@0695D6660F84CABE78A4151F0A127FA9/assets/prism-kh.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="https://community.sap.com/html/@2778250842E3D1984686289CD77E55B9/assets/prism-kh.js"></script>

<link rel="stylesheet"
      href="https://contextualnavigation.api.community.sap.com/static/1.31.0/cxs-designsystem/cxs-designsystem.css">
<script type="module"
        src='https://contextualnavigation.api.community.sap.com/static/1.31.0/cxs-designsystem/cxs-designsystem.esm.js'></script>


<script language="javascript" type="text/javascript">
<!--
if("undefined"==typeof LITHIUM)var LITHIUM={};LITHIUM.Loader=function(){var h=[],a=[],b=!1,c=!1;return{onLoad:function(a){"function"===typeof a&&(!0===b?a():h.push(a))},onJsAttached:function(b){"function"===typeof b&&(!0===c?b():a.push(b))},runJsAttached:function(){c=!0;for(var b=0;b<a.length;b++)a[b]()},getOnLoadFunctions:function(){return h},setLoaded:function(){b=!0},isLoaded:function(){return b},isJsAttached:function(){return c}}}();"undefined"===typeof LITHIUM.Components&&(LITHIUM.Components={});LITHIUM.Components.render=function(h,a,b){LITHIUM.Loader.onLoad(function(){var c=LITHIUM.Components.renderUrl(h),k={type:"GET",dataType:"json"};LITHIUM.jQuery.extend(k,b||{});k.hasOwnProperty("url")||LITHIUM.jQuery.extend(k,{url:c});k.data=a;if("object"!==typeof k.data||null===k.data)k.data={};k.data.originalPageName=LITHIUM.Components.ORIGINAL_PAGE_NAME;k.data.originalPageContext=LITHIUM.Components.ORIGINAL_PAGE_CONTEXT;LITHIUM.jQuery.ajax(k)}.bind(this))};
LITHIUM.Components.renderUrl=function(h,a){var b=LITHIUM.Components.RENDER_URL;LITHIUM.jQuery.each({"component-id":h},function(a,h){b=b.replace(new RegExp("#{"+a+"}","g"),h)});"undefined"!==typeof a&&(b+="?"+LITHIUM.jQuery.param(a));return b};
LITHIUM.Components.renderInPlace=function(h,a,b,c){function k(b){var a=document.createElement("div"),c=(new Date).getTime()+Math.floor(1E7*Math.random()+1);a.setAttribute("id",c);b.parentNode.insertBefore(a,b);return c}if(c)var q=c;else!1===LITHIUM.Loader.isLoaded()&&(document.currentScript?q=k(document.currentScript):(c=document.querySelectorAll("script"),1<c.length&&(q=k(c[c.length-1]))));LITHIUM.Loader.onLoad(function(){var c=LITHIUM.jQuery,k=a||{},m=b||{},l=c("#"+q);c.extend(k,{renderedScripts:LITHIUM.RenderedScripts.toString(),
"component-id":h});c.extend(m,{success:function(b){var a=b.content;LITHIUM.AngularSupport.isAngularEnabled()&&(a=LITHIUM.AngularSupport.compile(a));l.replaceWith(a);LITHIUM.AjaxSupport.ScriptsProcessor.handleScriptEvaluation(b);(b=LITHIUM.jQuery(a).attr("id"))&&LITHIUM.jQuery("#"+b).trigger("LITHIUM:ajaxSuccess:renderInPlace",{componentId:h})},error:function(a,c,h){0===a.readyState||0===a.status?l.html(""):l.html('\x3cspan class\x3d"lia-ajax-error-text"\x3e'+b.errorMessage+"\x3c/span\x3e");l.removeClass(LITHIUM.Css.BASE_LAZY_LOAD).removeClass("lia-fa-spin")}});
l&&LITHIUM.Components.render(h,k,m)}.bind(this))};/*
 modernizr v3.3.1
 Build https://modernizr.com/download?-exiforientation-filereader-flash-setclasses-dontmin

 Copyright (c)
  Faruk Ates
  Paul Irish
  Alex Sexton
  Ryan Seddon
  Patrick Kettner
  Stu Cox
  Richard Herrera

 MIT License
 {
      "name": "EXIF Orientation",
      "property": "exiforientation",
      "tags": ["image"],
      "builderAliases": ["exif_orientation"],
      "async": true,
      "authors": ["Paul Sayre"],
      "notes": [{
        "name": "Article by Dave Perrett",
        "href": "http://recursive-design.com/blog/2012/07/28/exif-orientation-handling-is-a-ghetto/"
      },{
        "name": "Article by Calvin Hass",
        "href": "http://www.impulseadventure.com/photo/exif-orientation.html"
      }]
    }
    ! {
      "name": "Flash",
      "property": "flash",
      "tags": ["flash"],
      "polyfills": ["shumway"]
      }
      ! {
      "name": "File API",
      "property": "filereader",
      "caniuse": "fileapi",
      "notes": [{
        "name": "W3C Working Draft",
        "href": "https://www.w3.org/TR/FileAPI/"
      }],
      "tags": ["file"],
      "builderAliases": ["file_api"],
      "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
    }
    !*/
LITHIUM.LiModernizr=function(){(function(h,a,b){function c(e){var a=n.className,b=d._config.classPrefix||"";r&&(a=a.baseVal);d._config.enableJSClass&&(a=a.replace(new RegExp("(^|\\s)"+b+"no-js(\\s|$)"),"$1"+b+"js$2"));d._config.enableClasses&&(a+=" "+b+e.join(" "+b),r?n.className.baseVal=a:n.className=a)}function k(){return"function"!==typeof a.createElement?a.createElement(arguments[0]):r?a.createElementNS.call(a,"http://www.w3.org/2000/svg",arguments[0]):a.createElement.apply(a,arguments)}function q(){var e=
a.body;e||(e=k(r?"svg":"body"),e.fake=!0);return e}function p(a,b){if("object"==typeof a)for(var e in a)u(a,e)&&p(e,a[e]);else{a=a.toLowerCase();e=a.split(".");var f=d[e[0]];2==e.length&&(f=f[e[1]]);if("undefined"!=typeof f)return d;b="function"==typeof b?b():b;1==e.length?d[e[0]]=b:(!d[e[0]]||d[e[0]]instanceof Boolean||(d[e[0]]=new Boolean(d[e[0]])),d[e[0]][e[1]]=b);c([(b&&0!=b?"":"no-")+e.join("-")]);d._trigger(a,b)}return d}var t=[],m=[],l={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,
enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var e=this;setTimeout(function(){b(e[a])},0)},addTest:function(a,b,c){m.push({name:a,fn:b,options:c})},addAsyncTest:function(a){m.push({name:null,fn:a})}},d=function(){};d.prototype=l;d=new d;var n=a.documentElement,r="svg"===n.nodeName.toLowerCase(),u;(function(){var a={}.hasOwnProperty;u="undefined"!==typeof a&&"undefined"!==typeof a.call?function(b,e){return a.call(b,e)}:function(a,b){return b in a&&"undefined"===typeof a.constructor.prototype[b]}})();
l._l={};l.on=function(a,b){this._l[a]||(this._l[a]=[]);this._l[a].push(b);d.hasOwnProperty(a)&&setTimeout(function(){d._trigger(a,d[a])},0)};l._trigger=function(a,b){if(this._l[a]){var e=this._l[a];setTimeout(function(){var a;for(a=0;a<e.length;a++){var c=e[a];c(b)}},0);delete this._l[a]}};d._q.push(function(){l.addTest=p});d.addAsyncTest(function(){LITHIUM.Loader.onLoad(function(){var b=a.createElement("img");b.onerror=function(){p("exiforientation",!1,{aliases:["exif-orientation"]});a.body.removeChild(b)};
b.onload=function(){p("exiforientation",2!==b.width,{aliases:["exif-orientation"]});a.body.removeChild(b)};b.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q\x3d\x3d";
a.body&&(b.setAttribute("style","position: absolute; left: -9999;"),a.body.appendChild(b))})});d.addAsyncTest(function(){var b=function(a){n.contains(a)||n.appendChild(a)},c=function(a,b){var c=!!a;c&&(c=new Boolean(c),c.blocked="blocked"===a);p("flash",function(){return c});if(b&&g.contains(b)){for(;b.parentNode!==g;)b=b.parentNode;g.removeChild(b)}};try{var d="ActiveXObject"in h&&"Pan"in new h.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(v){}if(!("plugins"in navigator&&"Shockwave Flash"in
navigator.plugins||d)||r)c(!1);else{var f=k("embed"),g=q(),l;f.type="application/x-shockwave-flash";g.appendChild(f);if("Pan"in f||d){var m=function(){b(g);if(!n.contains(g))return g=a.body||g,f=k("embed"),f.type="application/x-shockwave-flash",g.appendChild(f),setTimeout(m,1E3);n.contains(f)?(l=f.style.cssText,""!==l?c("blocked",f):c(!0,f)):c("blocked");g.fake&&g.parentNode&&g.parentNode.removeChild(g)};setTimeout(m,10)}else b(g),c("blocked",f),g.fake&&g.parentNode&&g.parentNode.removeChild(g)}});
d.addTest("filereader",!!(h.File&&h.FileList&&h.FileReader));(function(){var a,b;for(b in m)if(m.hasOwnProperty(b)){var c=[];var f=m[b];if(f.name&&(c.push(f.name.toLowerCase()),f.options&&f.options.aliases&&f.options.aliases.length))for(a=0;a<f.options.aliases.length;a++)c.push(f.options.aliases[a].toLowerCase());f="function"===typeof f.fn?f.fn():f.fn;for(a=0;a<c.length;a++){var g=c[a];g=g.split(".");1===g.length?d[g[0]]=f:(!d[g[0]]||d[g[0]]instanceof Boolean||(d[g[0]]=new Boolean(d[g[0]])),d[g[0]][g[1]]=
f);t.push((f?"":"no-")+g.join("-"))}}})();c(t);delete l.addTest;delete l.addAsyncTest;for(b=0;b<d._q.length;b++)d._q[b]();LITHIUM.Modernizr=d})(window,document)}();(function(){LITHIUM.Globals=function(){var h={};return{preventGlobals:function(a){for(var b=0;b<a.length;b++){var c=a[b];c in window&&void 0!==window[c]&&(h[c]=window[c],window[c]=void 0)}},restoreGlobals:function(a){for(var b=0;b<a.length;b++){var c=a[b];h.hasOwnProperty(c)&&(window[c]=h[c])}}}}()})();(function(h){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);Element.prototype.closest||(Element.prototype.closest=function(a){var b=this;do{if(b.matches(a))return b;b=b.parentElement||b.parentNode}while(null!==b&&1===b.nodeType);return null})})(LITHIUM.jQuery);LITHIUM.PrefetchData = {"Components":{"grouphubs.widget.node-groups-panel-list":{"instances":[{"nodeScope":{"result":{"data":{"size":1,"list_item_type":"node","type":"nodes","items":[{"id":"community:khhcw49343","type":"node","title":"SAP Community"}]},"successful":true}},"groupHubs":{"call":{"query":{"nodes":{"limit":5,"fields":["id","title","view_href","avatar","user_context.can_update_node","user_context.is_member","membership_type","memberships.count(*)"],"constraints":[{"ancestors.id":"community:khhcw49343"},{"node_type":"grouphub"}],"sorts":["creation_date desc"]}}}}}]}},"commonResults":{}};
;(function(){var en = function(n, ord
) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return (n10 == 1 && n100 != 11) ? 'one'
      : (n10 == 2 && n100 != 12) ? 'two'
      : (n10 == 3 && n100 != 13) ? 'few'
      : 'other';
  return (n == 1 && v0) ? 'one' : 'other';
};
var number = function (value, name, offset) {
  if (!offset) return value;
  if (isNaN(value)) throw new Error("Can't apply offset:" + offset + ' to argument `' + name + '` with non-numerical value ' + JSON.stringify(value) + '.');
  return value - offset;
};
var plural = function (value, offset, lcfunc, data, isOrdinal) {
  if ({}.hasOwnProperty.call(data, value)) return data[value];
  if (offset) value -= offset;
  var key = lcfunc(value, isOrdinal);
  return key in data ? data[key] : data.other;
};
var fmt = {
  prop: function (value, lc, param) {
    return value[param];
  }
};

LITHIUM.TextData = {
  li: {
    nodes: {
      NodeTitle: {
        title: function(d) { return d.title; }
      },
      NodeAvatar: {
        alt: function(d) { return d.title; }
      }
    },
    common: {
      Panel: {
        viewAll: function(d) { return "View all"; }
      },
      Feedback: {
        closeAriaLabel: function(d) { return "Close feedback banner"; }
      }
    },
    grouphubs: {
      GroupHubsPanelList: {
        title: {
          node: {
            "default": function(d) { return "Groups"; },
            top: function(d) { return "Explore the Latest Groups"; },
            leaf: function(d) { return "Groups in " + fmt.prop(d.node, "en", (" title").trim()); }
          },
          user: {
            them: function(d) { return "Groups for " + fmt.prop(d.user, "en", (" login").trim()); },
            my: function(d) { return "My Groups"; }
          }
        }
      }
    },
    memberships: {
      MembershipCount: {
        iconCount: function(d) { return d.count; },
        count: function(d) { return plural(d.count, 0, en, { one: "1 member", other: number(d.count, "count") + " members" }); }
      }
    }
  }
};LITHIUM.Limuirs = LITHIUM.Limuirs || {}; 
        LITHIUM.Limuirs.logLevel = "error"; 
        LITHIUM.Limuirs.getChunkURL = function(){ return "https:\u002F\u002Flimuirs-assets.lithium.com\u002Fassets\u002F"}; 
        LITHIUM.Limuirs.preloadPaths = [];;LITHIUM.release = "23.12"})();
LITHIUM.DEBUG = false;
LITHIUM.CommunityJsonObject = {
  "Validation" : {
    "image.description" : {
      "min" : 0,
      "max" : 1000,
      "isoneof" : [ ],
      "type" : "string"
    },
    "tkb.toc_maximum_heading_level" : {
      "min" : 1,
      "max" : 6,
      "isoneof" : [ ],
      "type" : "integer"
    },
    "tkb.toc_heading_list_style" : {
      "min" : 0,
      "max" : 50,
      "isoneof" : [
        "disc",
        "circle",
        "square",
        "none"
      ],
      "type" : "string"
    },
    "blog.toc_maximum_heading_level" : {
      "min" : 1,
      "max" : 6,
      "isoneof" : [ ],
      "type" : "integer"
    },
    "tkb.toc_heading_indent" : {
      "min" : 5,
      "max" : 50,
      "isoneof" : [ ],
      "type" : "integer"
    },
    "blog.toc_heading_indent" : {
      "min" : 5,
      "max" : 50,
      "isoneof" : [ ],
      "type" : "integer"
    },
    "blog.toc_heading_list_style" : {
      "min" : 0,
      "max" : 50,
      "isoneof" : [
        "disc",
        "circle",
        "square",
        "none"
      ],
      "type" : "string"
    }
  },
  "User" : {
    "settings" : {
      "imageupload.legal_file_extensions" : "*.jpg;*.JPG;*.jpeg;*.JPEG;*.gif;*.GIF;*.png;*.PNG;*.webm;*.svg;*.SVG",
      "config.enable_avatar" : true,
      "integratedprofile.show_klout_score" : true,
      "layout.sort_view_by_last_post_date" : true,
      "layout.friendly_dates_enabled" : true,
      "profileplus.allow.anonymous.scorebox" : false,
      "tkb.message_sort_default" : "topicPublishDate",
      "layout.format_pattern_date" : "MM-dd-yyyy",
      "config.require_search_before_post" : "off",
      "isUserLinked" : false,
      "integratedprofile.cta_add_topics_dismissal_timestamp" : -1,
      "layout.message_body_image_max_size" : 1000,
      "profileplus.everyone" : false,
      "integratedprofile.cta_connect_wide_dismissal_timestamp" : -1,
      "blog.toc_maximum_heading_level" : "",
      "integratedprofile.hide_social_networks" : false,
      "blog.toc_heading_indent" : "",
      "contest.entries_per_page_num" : 20,
      "layout.messages_per_page_linear" : 15,
      "integratedprofile.cta_manage_topics_dismissal_timestamp" : -1,
      "profile.shared_profile_test_group" : false,
      "integratedprofile.cta_personalized_feed_dismissal_timestamp" : -1,
      "integratedprofile.curated_feed_size" : 10,
      "contest.one_kudo_per_contest" : false,
      "integratedprofile.enable_social_networks" : false,
      "integratedprofile.my_interests_dismissal_timestamp" : -1,
      "profile.language" : "en",
      "layout.friendly_dates_max_age_days" : 31,
      "layout.threading_order" : "thread_ascending",
      "blog.toc_heading_list_style" : "disc",
      "useRecService" : false,
      "layout.module_welcome" : "<h2>Welcome to SAP Community<\/h2>\r\n<p>Connect and engage with our community to get answers, discuss best practices, \r\nand continually learn more about SAP solutions.<\/p>",
      "imageupload.max_uploaded_images_per_upload" : 100,
      "imageupload.max_uploaded_images_per_user" : 1000,
      "integratedprofile.connect_mode" : "",
      "tkb.toc_maximum_heading_level" : "",
      "tkb.toc_heading_list_style" : "disc",
      "sharedprofile.show_hovercard_score" : true,
      "config.search_before_post_scope" : "community",
      "tkb.toc_heading_indent" : "",
      "p13n.cta.recommendations_feed_dismissal_timestamp" : -1,
      "imageupload.max_file_size" : 9216,
      "layout.show_batch_checkboxes" : false,
      "integratedprofile.cta_connect_slim_dismissal_timestamp" : -1
    },
    "isAnonymous" : true,
    "policies" : {
      "image-upload.process-and-remove-exif-metadata" : false
    },
    "registered" : false,
    "emailRef" : "",
    "id" : -1,
    "login" : "Former Member"
  },
  "Server" : {
    "communityPrefix" : "/khhcw49343",
    "nodeChangeTimeStamp" : 1706719712925,
    "tapestryPrefix" : "/t5",
    "deviceMode" : "DESKTOP",
    "responsiveDeviceMode" : "DESKTOP",
    "membershipChangeTimeStamp" : "0",
    "version" : "23.12",
    "branch" : "23.12-release",
    "showTextKeys" : false
  },
  "Config" : {
    "phase" : "prod",
    "integratedprofile.cta.reprompt.delay" : 30,
    "profileplus.tracking" : {
      "profileplus.tracking.enable" : false,
      "profileplus.tracking.click.enable" : false,
      "profileplus.tracking.impression.enable" : false
    },
    "app.revision" : "2401251442-s18749d8ddb-b78",
    "navigation.manager.community.structure.limit" : "1000"
  },
  "Activity" : {
    "Results" : [ ]
  },
  "NodeContainer" : {
    "viewHref" : "https://community.sap.com/t5/top/ct-p/top",
    "description" : "",
    "id" : "top",
    "shortTitle" : "Top",
    "title" : "Top",
    "nodeType" : "category"
  },
  "Page" : {
    "skins" : [
      "sap2023",
      "theme_hermes",
      "responsive_peak"
    ],
    "authUrls" : {
      "loginUrl" : "/plugins/common/feature/oidcss/sso_login_redirect/providerid/sap_ids?referer=https%3A%2F%2Fcommunity.sap.com%2F",
      "loginUrlNotRegistered" : "/plugins/common/feature/oidcss/sso_login_redirect/providerid/sap_ids?redirectreason=notregistered&referer=https%3A%2F%2Fcommunity.sap.com%2F",
      "loginUrlNotRegisteredDestTpl" : "/plugins/common/feature/oidcss/sso_login_redirect/providerid/sap_ids?redirectreason=notregistered&referer=%7B%7BdestUrl%7D%7D"
    },
    "name" : "CommunityPage",
    "rtl" : false,
    "object" : {
      "viewHref" : "/",
      "id" : "khhcw49343",
      "page" : "CommunityPage",
      "type" : "Community"
    }
  },
  "WebTracking" : {
    "Activities" : { },
    "path" : "Community:SAP Community"
  },
  "Feedback" : {
    "targeted" : { }
  },
  "Seo" : {
    "markerEscaping" : {
      "pathElement" : {
        "prefix" : "@",
        "match" : "^[0-9][0-9]$"
      },
      "enabled" : false
    }
  },
  "TopLevelNode" : {
    "viewHref" : "https://community.sap.com/",
    "description" : "",
    "id" : "khhcw49343",
    "shortTitle" : "SAP Community",
    "title" : "SAP Community",
    "nodeType" : "Community"
  },
  "Community" : {
    "viewHref" : "https://community.sap.com/",
    "integratedprofile.lang_code" : "en",
    "integratedprofile.country_code" : "US",
    "id" : "khhcw49343",
    "shortTitle" : "SAP Community",
    "title" : "SAP Community"
  },
  "CoreNode" : {
    "viewHref" : "https://community.sap.com/",
    "settings" : { },
    "description" : "",
    "id" : "khhcw49343",
    "shortTitle" : "SAP Community",
    "title" : "SAP Community",
    "nodeType" : "Community",
    "ancestors" : [ ]
  }
};
LITHIUM.Components.RENDER_URL = "/t5/util/componentrenderpage/component-id/#{component-id}?render_behavior=raw";
LITHIUM.Components.ORIGINAL_PAGE_NAME = 'community/Page';
LITHIUM.Components.ORIGINAL_PAGE_ID = 'CommunityPage';
LITHIUM.Components.ORIGINAL_PAGE_CONTEXT = 'nNFJdB6DHznvOKb1Ds-lusAxO0P_RgppRaDF5QqmoULuibDx2BImr0RDYsV8lgHNNjaoz_0GBNYXhchv9i7XzJjmSi-oyw6NA-Uv3o2HmsIlnqFbsvywhAXHwuSHS6f6MZXsIpQi3laxPwBY6-4VpYnuYwRCim3x0bO1itULOsnR4Me6zP15XtiDWNHFpqY8xypaSwVqpAKuQQbIjOC7hGu4X75Fzz3GQAdWIHHUUa9y75F3uLsXcC4jljP_mYtiUXK_H_HZnag3cPFY9-OBKiVZfeDtUNyjRYS0g6sHzPE.';
LITHIUM.Css = {
  "BASE_DEFERRED_IMAGE" : "lia-deferred-image",
  "BASE_BUTTON" : "lia-button",
  "BASE_SPOILER_CONTAINER" : "lia-spoiler-container",
  "BASE_TABS_INACTIVE" : "lia-tabs-inactive",
  "BASE_TABS_ACTIVE" : "lia-tabs-active",
  "BASE_AJAX_REMOVE_HIGHLIGHT" : "lia-ajax-remove-highlight",
  "BASE_FEEDBACK_SCROLL_TO" : "lia-feedback-scroll-to",
  "BASE_FORM_FIELD_VALIDATING" : "lia-form-field-validating",
  "BASE_FORM_ERROR_TEXT" : "lia-form-error-text",
  "BASE_FEEDBACK_INLINE_ALERT" : "lia-panel-feedback-inline-alert",
  "BASE_BUTTON_OVERLAY" : "lia-button-overlay",
  "BASE_TABS_STANDARD" : "lia-tabs-standard",
  "BASE_AJAX_INDETERMINATE_LOADER_BAR" : "lia-ajax-indeterminate-loader-bar",
  "BASE_AJAX_SUCCESS_HIGHLIGHT" : "lia-ajax-success-highlight",
  "BASE_CONTENT" : "lia-content",
  "BASE_JS_HIDDEN" : "lia-js-hidden",
  "BASE_AJAX_LOADER_CONTENT_OVERLAY" : "lia-ajax-loader-content-overlay",
  "BASE_FORM_FIELD_SUCCESS" : "lia-form-field-success",
  "BASE_FORM_WARNING_TEXT" : "lia-form-warning-text",
  "BASE_FORM_FIELDSET_CONTENT_WRAPPER" : "lia-form-fieldset-content-wrapper",
  "BASE_AJAX_LOADER_OVERLAY_TYPE" : "lia-ajax-overlay-loader",
  "BASE_FORM_FIELD_ERROR" : "lia-form-field-error",
  "BASE_SPOILER_CONTENT" : "lia-spoiler-content",
  "BASE_FORM_SUBMITTING" : "lia-form-submitting",
  "BASE_EFFECT_HIGHLIGHT_START" : "lia-effect-highlight-start",
  "BASE_FORM_FIELD_ERROR_NO_FOCUS" : "lia-form-field-error-no-focus",
  "BASE_EFFECT_HIGHLIGHT_END" : "lia-effect-highlight-end",
  "BASE_SPOILER_LINK" : "lia-spoiler-link",
  "BASE_DISABLED" : "lia-link-disabled",
  "FACEBOOK_LOGOUT" : "lia-component-users-action-logout",
  "FACEBOOK_SWITCH_USER" : "lia-component-admin-action-switch-user",
  "BASE_FORM_FIELD_WARNING" : "lia-form-field-warning",
  "BASE_AJAX_LOADER_FEEDBACK" : "lia-ajax-loader-feedback",
  "BASE_AJAX_LOADER_OVERLAY" : "lia-ajax-loader-overlay",
  "BASE_LAZY_LOAD" : "lia-lazy-load"
};
LITHIUM.noConflict = true;
LITHIUM.useCheckOnline = false;
LITHIUM.RenderedScripts = [
  "ElementQueries.js",
  "jquery.appear-1.1.1.js",
  "DataHandler.js",
  "jquery.tools.tooltip-1.2.6.js",
  "jquery.effects.core.js",
  "ForceLithiumJQuery.js",
  "Text.js",
  "Auth.js",
  "jquery.ui.position.js",
  "ResizeSensor.js",
  "jquery.function-utils-1.0.js",
  "jquery.ui.widget.js",
  "Link.js",
  "jquery.json-2.6.0.js",
  "jquery.iframe-shim-1.0.js",
  "AutoComplete.js",
  "Sandbox.js",
  "jquery.viewport-1.0.js",
  "Throttle.js",
  "PolyfillsAll.js",
  "jquery.blockui.js",
  "jquery.autocomplete.js",
  "jquery.tmpl-1.1.1.js",
  "Loader.js",
  "limuirs-23_11-vendors~main.5ef86aa8c72fe4cbb8d6.js",
  "SearchForm.js",
  "SpoilerToggle.js",
  "AjaxSupport.js",
  "jquery.lithium-selector-extensions.js",
  "InformationBox.js",
  "json2.js",
  "jquery.ui.resizable.js",
  "jquery.scrollTo.js",
  "Lithium.js",
  "jquery.clone-position-1.0.js",
  "Cache.js",
  "Video.js",
  "jquery.position-toggle-1.0.js",
  "jquery.hoverIntent-r6.js",
  "Tooltip.js",
  "HelpIcon.js",
  "jquery.iframe-transport.js",
  "jquery.fileupload.js",
  "prism.js",
  "LiModernizr.js",
  "jquery.js",
  "jquery.ui.dialog.js",
  "DeferredImages.js",
  "Forms.js",
  "Events.js",
  "jquery.placeholder-2.0.7.js",
  "UserListActual.js",
  "jquery.ui.mouse.js",
  "jquery.ui.draggable.js",
  "jquery.delayToggle-1.0.js",
  "Globals.js",
  "PartialRenderProxy.js",
  "limuirs-23_11-main.415abf948bf992ab321e.js",
  "jquery.ui.core.js",
  "SearchAutoCompleteToggle.js",
  "jquery.ajax-cache-response-1.0.js",
  "jquery.effects.slide.js",
  "Namespace.js",
  "Components.js",
  "ElementMethods.js",
  "Placeholder.js",
  "ActiveCast3.js",
  "AjaxFeedback.js",
  "jquery.css-data-1.0.js",
  "NoConflict.js"
];(function(){LITHIUM.AngularSupport=function(){function g(a,c){a=a||{};for(var b in c)"[object object]"===Object.prototype.toString.call(c[b])?a[b]=g(a[b],c[b]):a[b]=c[b];return a}var d,f,b={coreModule:"li.community",coreModuleDeps:[],noConflict:!0,bootstrapElementSelector:".lia-page .min-width .lia-content",bootstrapApp:!0,debugEnabled:!1,useCsp:!0,useNg2:!1},k=function(){var a;return function(b){a||(a=document.createElement("a"));a.href=b;return a.href}}();LITHIUM.Angular={};return{preventGlobals:LITHIUM.Globals.preventGlobals,
restoreGlobals:LITHIUM.Globals.restoreGlobals,init:function(){var a=[],c=document.querySelector(b.bootstrapElementSelector);a.push(b.coreModule);b.customerModules&&0<b.customerModules.length&&a.concat(b.customerModules);b.useCsp&&(c.setAttribute("ng-csp","no-unsafe-eval"),c.setAttribute("li-common-non-bindable",""));d=LITHIUM.angular.module(b.coreModule,b.coreModuleDeps);d.config(["$locationProvider","$provide","$injector","$logProvider","$compileProvider","$qProvider","$anchorScrollProvider",function(a,
c,e,d,f,g,h){h.disableAutoScrolling();h=document.createElement("base");h.setAttribute("href",k(location));document.getElementsByTagName("head")[0].appendChild(h);window.history&&window.history.pushState&&a.html5Mode({enabled:!0,requireBase:!0,rewriteLinks:!1}).hashPrefix("!");d.debugEnabled(b.debugEnabled);f.debugInfoEnabled(b.debugEnabled);e.has("$uibModal")&&c.decorator("$uibModal",["$delegate",function(a){var b=a.open;a.open=function(a){a.backdropClass=(a.backdropClass?a.backdropClass+" ":"")+
"lia-modal-backdrop";a.windowClass=(a.windowClass?a.windowClass+" ":"")+"lia-modal-window";return b(a)};return a}]);e.has("uibDropdownConfig")&&(e.get("uibDropdownConfig").openClass="lia-dropdown-open");e.has("uibButtonConfig")&&(e.get("uibButtonConfig").activeClass="lia-link-active");g.errorOnUnhandledRejections(!1)}]);if(b.bootstrapApp)f=b.useNg2?LITHIUM.Angular.upgradeAdapter.bootstrap(c,a):LITHIUM.angular.bootstrap(c,a);else LITHIUM.Loader.onLoad(function(){f=LITHIUM.angular.element(c).injector()});
LITHIUM.Angular.app=d},compile:function(a){void 0===a&&(a=document.querySelector(b.bootstrapElementSelector));var c;if(void 0===a||""===a)return a;f.invoke(["$rootScope","$compile",function(b,d){try{var e=LITHIUM.angular.element(a)}catch(l){e=LITHIUM.angular.element("\x3cli:safe-wrapper\x3e"+a+"\x3c/li:safe-wrapper\x3e")}e.attr("li-common-non-bindable","");c=d(e)(b);b.$digest()}]);return c},isAngularEnabled:function(){return void 0!==d},updateLocationUrl:function(a,b){f.invoke(["$location","$rootScope",
"$browser",function(c,d,e){a=""===a?"?":a;c.url(a,b);d.$apply()}])},setOptions:function(a){return g(b,a)},getOptions:function(){return b},initGlobal:function(a){LITHIUM.angular=a;b.useNg2&&(LITHIUM.Angular.upgradeAdapter=new ng.upgrade.UpgradeAdapter)}}}()})();(function(){LITHIUM.ScriptLoader=function(){function d(a){a in e||(e[a]={loaded:!1});return e[a]}function f(){g.filter(function(a){return!a.loaded}).forEach(function(a){var b=!0;a.labels.forEach(function(a){!1===d(a).loaded&&(b=!1)});b&&(a.loaded=!0,a.callback())})}var e={},g=[];return{load:function(a){a.forEach(function(a){var b=document.getElementsByTagName("head")[0]||document.documentElement,c=document.createElement("script");c.src=a.url;c.async=!1;a.crossorigin&&a.integrity&&(c.setAttribute("crossorigin",
a.crossorigin),c.setAttribute("integrity",a.integrity));b.insertBefore(c,b.firstChild);d(a.label)})},setLoaded:function(a){d(a).loaded=!0;f()},ready:function(a,b){g.push({labels:a,callback:b,loaded:!1});f()}}}()})();LITHIUM.ScriptLoader.load([{"name":"lia-scripts-common-min.js","label":"common","url":"/t5/scripts/AEDAE865B0CFD50743A695EDB8D1125C/lia-scripts-common-min.js"},{"name":"lia-scripts-body-min.js","label":"body","url":"/t5/scripts/57AC6B707D428FBBF930C08844479A9D/lia-scripts-body-min.js"},{"name":"limuirs-23_11-vendors~main.5ef86aa8c72fe4cbb8d6.js","label":"external","url":"https://limuirs-assets.lithium.com/assets/limuirs-23_11-vendors~main.5ef86aa8c72fe4cbb8d6.js"},{"name":"limuirs-23_11-main.415abf948bf992ab321e.js","label":"external","url":"https://limuirs-assets.lithium.com/assets/limuirs-23_11-main.415abf948bf992ab321e.js"}]);
// -->
</script></head>
	<body class="lia-user-status-anonymous CommunityPage lia-body lia-a11y" id="lia-body">
	
	
	<div id="B14-118-9" class="ServiceNodeInfoHeader">
</div>
	
	
	
	

	<div class="lia-page">
		<center>
			
				<div style="height: 64px; background: black">
    <ds-header identifier="community"
       locale="en-us"
       s3-bucket="https://contextualnavigation.api.community.sap.com">
    </ds-header>
</div>

<script type="module">
    // Listen to header custom events
    document.addEventListener('login', () => {
        window.location.href = "/plugins/common/feature/oidcss/sso_login_redirect/providerid/sap_ids?referer=https%3A%2F%2Fcommunity.sap.com%2F";
    });
    document.addEventListener('logout', () => {
        window.location.href = "https://community.sap.com/t5/community/page.logoutpage?t:cp=authentication/contributions/unticketedauthenticationactions&dest_url=https%3A%2F%2Fcommunity.sap.com%2F&lia-action-token=wxTtjzaA2ZC-oY0z77HcXwW6dBqXMMwOX0Gs4MPwfPs.&lia-action-token-id=logoff";
    });
</script>

					
	
	<div class="MinimumWidthContainer">
		<div class="min-width-wrapper">
			<div class="min-width">		
				
						<div class="lia-content">
                            
							
							
							
		
	<div class="lia-quilt lia-quilt-community-page lia-quilt-layout-custom-landing-page-two-column lia-top-quilt">
	<div class="lia-quilt-row lia-quilt-row-header">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-common-header">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-single">
	
		
			<div class="lia-quilt lia-quilt-header lia-quilt-layout-custom-community-header lia-component-quilt-header">
	<div class="lia-quilt-row lia-quilt-row-header-top">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-header-top-content lia-mark-empty">
			
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-header-navigation">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-header-navigation-content">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-single">
	
		<div class="custom-community-header-right lia-mark-empty">
			
		
			
		
	
		</div>
	
	
</div>
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-header-hero">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-header-hero-content">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-single">
	
		<div class="header-hero-wrapper lia-mark-empty">
			
		
			
		
	
		</div>
	
	

	
		
			<div class="custom-hero-flex">

    <div class="hero-content custom-hero-with-carousel">
        <div class="header-hero-wrapper header-hero-wrapper-custom-node-information">
<span class="lia-welcome lia-component-common-widget-welcome"><h2>Welcome to SAP Community</h2>
<p>Connect and engage with our community to get answers, discuss best practices, 
and continually learn more about SAP solutions.</p></span><div id="lia-searchformV32_1dec0935253fb" class="SearchForm lia-search-form-wrapper lia-mode-default lia-component-common-widget-search-form">
	

	
		<div class="lia-inline-ajax-feedback">
			<div class="AjaxFeedback" id="ajaxfeedback_1dec0935253fb"></div>
			
	

	

		</div>

	

	
		<div id="searchautocompletetoggle_1dec0935253fb">	
	
		

	
		<div class="lia-inline-ajax-feedback">
			<div class="AjaxFeedback" id="ajaxfeedback_1dec0935253fb_0"></div>
			
	

	

		</div>

	

	
			
            <form enctype="multipart/form-data" class="lia-form lia-form-inline SearchForm" action="https://community.sap.com/t5/community/page.searchformv32.form.form" method="post" id="form_1dec0935253fb" name="form_1dec0935253fb"><div class="t-invisible"><input value="search/contributions/page" name="t:cp" type="hidden"></input><input value="b7yywU1S2ZzPR1yEPLQ9qLlt_Wk2QbbvzswG1dCEZd4J-i8LDUBq2RDfFJo3jq8egcZCiy4UjXyA8nrIhvO3EWftSvQunqklNdTeEiDssqfZyrej8ZQ2s0Q0_W6L8cR7S_Gy-LTR8bHnY6KqKURRxEyCxQ2qFTqoB1nC2gP2hfJruQZf0UjaiGq0Y2_Hh5oh0XJnfAV90oJgE_8R4h4jfIY92ClL3qeNi_xWW2YGkwOb8q0qMn1jj4MBt_rWcj_AmfHF6J9Eu_PYKuQ7ZQd25rwFCav2BzKiEBGu6VlfL0I5ZIRGnr0lc8fplKksCl0PYUhAk72wZFfvlaVW_C0c-0FY9MOAagZMZb-dnB2nXZnPAXvy-eda0tz6KRYjpL8kzLdRHkPTpnaNwlWytww90U9NFU5SOAtU19IH56Se70PuypLL1nrynutJzAv7NtjZg1imPgA4uGsgH-aK8XDy9itDy5ZxlnZRmTk2Em4mS6D9e5wC-lmYOnMQ5cUtPCSypDUbNujLY06Xc0uuRRPIz8GD1bu11mMMZwEQt9qRTsacengoXKPMw4QE64IKogTxc1D_2BWz68GHRQUTwRRPVzyPFJs376_RlBVf85gIfj4Kv3Hou4NDdnxTnyNWosPFupmM7apemKmp1U-dK7H8IScKLTBphw6DE4kxg3OhN5CIGzLp_U-JD9eZCO6OIeHzteU-pBe1I5MWCjhm7j-cygCVIwtGVSRJGjdjLOiig33na9fOFxKot-5ziYCSWowpi0cPLjEYZxY8kvCWI_E0BNqTPhzuazID9LT9zmJpjE4q-dHbaBw6P8cy4LsiPyrrKPF6wOQepsRDRJnlVkciSqqxnN8Cvsv6Q2YGJjHd0DEf6bEnd3m0faA3BvQHju79D3iQV8EZU6vTjzYdKJCr0_-0uXkzhP8IqKgYK51Cq7aY-2EEixKJz6p9Ab4dl2q4tzFNs19_cVQC7OqN63vZkQBmmP7ZyDcID1AGm_PCUvVOcj4ovXNGJmgekNbMtEbOqbtPdz-1qmMc9u4xHT2w8CEgyCtlavYuyyaSA2qe3HvZDJf2GJR8OIQWP64Ohfjg3NCWVKhHWquOGcTzQEsD9Jh2KRoaWJlDSPVauCkNuMAYkVwaQ_J2KMBHaHGrp5jRusp992Xyw6l4SNqe4uKSBhwerQxriZZ_uYgXXXuvpqN17hFyi7HoLIHpR75yn0-BUaPV8sTrlnselgPgaGxkeF8mdqmb1dy0Jbdw82yAZ7i0QOTM97F4bEQaA_q_5oOyzO2gLyh2h48SRT74T19ZW-mpZ7Xa8_2dpxfi1_zn4wM." name="lia-form-context" type="hidden"></input><input value="CommunityPage::searchformv32.form:" name="liaFormContentKey" type="hidden"></input><input value="5DI9GWMef1Esyz275vuiiOExwpQ=:H4sIAAAAAAAAALVSTU7CQBR+krAixkj0BrptjcpCMSbERGKCSmxcm+kwlGrbqTOvFDYexRMYL8HCnXfwAG5dubDtFKxgYgu4mrzvm3w/M+/pHcphHQ4kI4L2dMo9FLYZoM09qbeJxQ4V0+XC7e/tamqyBPEChwgbh1JAjQtLIz6hPaYh8ZlEMaxplAvm2KZmEsm0hhmBhOKpzZzOlsEw8LevR5W3zZfPEqy0oJIYc+eCuAyh2rolfaI7xLN0I8rjWfWBj7CuzJvf5osmbxRN3hacMimNwHRtKSOr0XNnv/vx+FoCGPjhMRzljhNLYHrEt9kA5T08ACCsKvREoYuqxqLl8BLO84q4UcMITcG49y/QOGs1pYyESl5p6V6qwRW086rinVmoxMZsiZud/zBUTc6gmVc4kExkJafmcYG1GM9+wfIsCkf2OP54hal5EjnG54z8h0XhjfcF7wQUs5Kz0GTjU2rOjc/llTT4Au07pDOcBQAA" name="t:formdata" type="hidden"></input></div>
	
	

	

	

	
		<div class="lia-inline-ajax-feedback">
			<div class="AjaxFeedback" id="feedback_1dec0935253fb"></div>
			
	

	

		</div>

	

	

	

	


	
	<input value="ZFTXGQIzvrzfmBRpmSM_Ee3b8dt9WAJ_YDlugi-00EQ." name="lia-action-token" type="hidden"></input>
	
	<input value="form_1dec0935253fb" id="form_UIDform_1dec0935253fb" name="form_UID" type="hidden"></input>
	<input value="" id="form_instance_keyform_1dec0935253fb" name="form_instance_key" type="hidden"></input>
	
                

                
                    
                        <span class="lia-search-granularity-wrapper">
                            <select title="Search Granularity" class="lia-search-form-granularity search-granularity" aria-label="Search Granularity" id="searchGranularity_1dec0935253fb" name="searchGranularity"><option title="All community" selected="selected" value="khhcw49343|community">All community</option><option title="Knowledge base" value="tkb|tkb">Knowledge base</option><option title="Users" value="user|user">Users</option><option title="Managed tags" value="product|product">Managed tags</option></select>
                        </span>
                    
                

                <span class="lia-search-input-wrapper">
                    <span class="lia-search-input-field">
                        <span class="lia-button-wrapper lia-button-wrapper-secondary lia-button-wrapper-searchForm-action"><input value="searchForm" name="submitContextX" type="hidden"></input><input class="lia-button lia-button-secondary lia-button-searchForm-action" value="Search" id="submitContext_1dec0935253fb" name="submitContext" type="submit"></input></span>

                        <span class="lia-hidden-aria-visibile" id="autocompleteInstructionsText_1dec0935253fb"></span><input placeholder="What are you looking for today?" aria-label="Search" title="Search" class="lia-form-type-text lia-autocomplete-input search-input lia-search-input-message" value="" id="messageSearchField_1dec0935253fb_0" name="messageSearchField" type="text"></input>
                        <span class="lia-hidden-aria-visibile" id="autocompleteInstructionsText_1dec0935253fb_0"></span><input placeholder="What are you looking for today?" aria-label="Search" title="Search" class="lia-form-type-text lia-autocomplete-input search-input lia-search-input-tkb-article lia-js-hidden" value="" id="messageSearchField_1dec0935253fb_1" name="messageSearchField_0" type="text"></input>
                        

	
		<span class="lia-hidden-aria-visibile" id="autocompleteInstructionsText_1dec0935253fb_1"></span><input placeholder="Enter a keyword to search within the users" ng-non-bindable="" title="Enter a user name or rank" class="lia-form-type-text UserSearchField lia-search-input-user search-input lia-js-hidden lia-autocomplete-input" aria-label="Enter a user name or rank" value="" id="userSearchField_1dec0935253fb" name="userSearchField" type="text"></input>
	

	


                        <span class="lia-hidden-aria-visibile" id="autocompleteInstructionsText_1dec0935253fb_2"></span><input placeholder="Enter a keyword to search within the private messages" title="Enter a search word" class="lia-form-type-text NoteSearchField lia-search-input-note search-input lia-js-hidden lia-autocomplete-input" aria-label="Enter a search word" value="" id="noteSearchField_1dec0935253fb_0" name="noteSearchField" type="text"></input>
						<span class="lia-hidden-aria-visibile" id="autocompleteInstructionsText_1dec0935253fb_3"></span><input title="Enter a search word" class="lia-form-type-text ProductSearchField lia-search-input-product search-input lia-js-hidden lia-autocomplete-input" aria-label="Enter a search word" value="" id="productSearchField_1dec0935253fb" name="productSearchField" type="text"></input>
                        <input class="lia-as-search-action-id" name="as-search-action-id" type="hidden"></input>
                    </span>
                </span>
                

                <span class="lia-cancel-search">cancel</span>

                
            
</form>
		
			<div class="search-autocomplete-toggle-link lia-js-hidden">
				<span>
					<a class="lia-link-navigation auto-complete-toggle-on lia-link-ticket-post-action lia-component-search-action-enable-auto-complete" data-lia-action-token="iL4sOoxkIV0c7fxTEBSwM3MG5cLI5eHLXo7sSGcQyMk." rel="nofollow" id="enableAutoComplete_1dec0935253fb" href="https://community.sap.com/t5/community/page.enableautocomplete:enableautocomplete?t:cp=action/contributions/searchactions">Turn on suggestions</a>					
					<span class="HelpIcon">
	<a class="lia-link-navigation help-icon lia-tooltip-trigger" role="button" aria-label="Help Icon" id="link_1dec0935253fb" href="#"><span class="lia-img-icon-help lia-fa-icon lia-fa-help lia-fa" alt="Auto-suggest helps you quickly narrow down your search results by suggesting possible matches as you type." aria-label="Help Icon" role="img" id="display_1dec0935253fb"></span></a><div role="alertdialog" class="lia-content lia-tooltip-pos-bottom-left lia-panel-tooltip-wrapper" id="link_1dec0935253fb_0-tooltip-element"><div class="lia-tooltip-arrow"></div><div class="lia-panel-tooltip"><div class="content">Auto-suggest helps you quickly narrow down your search results by suggesting possible matches as you type.</div></div></div>
</span>
				</span>
			</div>
		

	

	

	
	
	
</div>
		
	<div class="spell-check-showing-result">
		Showing results for <span class="lia-link-navigation show-results-for-link lia-link-disabled" aria-disabled="true" id="showingResult_1dec0935253fb"></span>
		

	</div>
	<div>
		
		<span class="spell-check-search-instead">
			Search instead for <a class="lia-link-navigation search-instead-for-link" rel="nofollow" id="searchInstead_1dec0935253fb" href="#"></a>
		</span>

	</div>
	<div class="spell-check-do-you-mean lia-component-search-widget-spellcheck">
		Did you mean: <a class="lia-link-navigation do-you-mean-link" rel="nofollow" id="doYouMean_1dec0935253fb" href="#"></a>
	</div>

	

	

	


	
</div><div class="lia-component-quilt-vitality"> <div class="lia-vitality-component"> <div class="lia-vitality-display lia-vitality-metrics-display-net-overall-posts"> <span class="lia-vitality-stats"> <span class="lia-vitality-value">2.7M</span> <span class="lia-vitality-key">Posts</span> </span> </div> </div> <div class="lia-vitality-component"> <div class="lia-vitality-display lia-vitality-metrics-display-completed-registrations"> <span class="lia-vitality-stats"> <span class="lia-vitality-value">709K</span> <span class="lia-vitality-key">Members</span> </span> </div> </div> <div class="lia-vitality-component"> <div class="lia-vitality-display lia-vitality-users-online"> <span class="lia-vitality-stats"> <span class="lia-vitality-value">9,140</span> <span class="lia-vitality-key">Online</span> </span> </div> </div> </div>        </div>
    </div>

<div class="hero-content custom-hero-carousel">
  <div class="custom-hero-carousel-content custom-featured-posts-slider">
    <div class="hero-carousel-slider slickslide">
      <div class="custom-slider-slide">
        
		<p>&nbsp;</p>

    <h3 class="event-title">See What's New in What's New!</h3>

    <p>Our <a href="https://community.sap.com/t5/what-s-new/bg-p/whats-new" target="_blank">What's New</a> blog board covers the latest announcements about SAP Community. Subscribe, read, and learn about new platform features and more.</p>

</div>

<div class="custom-slider-slide">
        
		<p>&nbsp;</p>

    <h3 class="event-title">Take Our New Tutorial!</h3>

    <p>The <a href="https://developers.sap.com/tutorials/community-2024.html" target="_blank">Tour the SAP Community 2024</a> tutorial will teach you all about SAP Community etiquette, contributing content, and connecting with members.</p>

</div>


<div class="custom-slider-slide">
        
		<p>&nbsp;</p>

    <h3 class="event-title">New Here? Say Hello!</h3>

    <p>New to SAP Community? Head to the <a href="https://community.sap.com/t5/welcome-corner/gh-p/welcome-corner" target="_blank">Welcome Corner</a> to introduce yourself and visit the <a href="https://community.sap.com/t5/coffee-corner/gh-p/Coffee-Corner" target="_blank">Coffee Corner</a> to join discussions about your interests.</p>

</div>


<div class="custom-slider-slide">
        
		<p>&nbsp;</p>

    <h3 class="event-title">Ask and Answer Questions!</h3>

    <p>The <a href="https://community.sap.com/t5/what-s-new/asking-and-answering-questions-in-the-community-after-migration/ba-p/311224" target="_blank">Asking and Answering Questions in the Community After Migration </a> post provides all the information you need to get started in Q&A.</p>

</div>    </div>
  </div>
</div></div>

		
	
	
</div>
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-header-bottom">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-header-bottom-content lia-mark-empty">
			
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-header-feedback">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-feedback">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-single">
	
		
			<div class="lia-panel lia-panel-standard custom-announcement ">
  <div class="lia-decoration-border">
    <div class="lia-decoration-border-top"><div> </div></div>
    <div class="lia-decoration-border-content">
      <div>
        <div class="lia-panel-content-wrapper">
          <div class="lia-panel-content">
<div class="lia-panel-feedback-banner-note">
Welcome to the New Community! <br>
We are live! Log in now (or register) to participate in our new SAP Community platform.
<a href="https://community.sap.com/t5/what-s-new/bg-p/whats-new">Learn about our latest features in the What's New section</a>.
</div>
          </div>
        </div>
      </div>
    </div>
    <div class="lia-decoration-border-bottom">
      <div> </div>
    </div>
  </div>
</div>

		
			
	

	

		
			
        <li:common-feedback class="lia-limuirs-comp lia-component-common-widget-feedback-react lia-component-common-widget-page-feedback" data-lia-limuirs-comp="{&quot;mode&quot;:&quot;DEFAULT&quot;,&quot;componentId&quot;:&quot;common.widget.feedback-react&quot;,&quot;path&quot;:&quot;limuirs\u002Fcomponents\u002Fcommon\u002FFeedback&quot;,&quot;alias&quot;:&quot;common.widget.feedback-react&quot;,&quot;instance&quot;:0,&quot;fqPath&quot;:&quot;0\u002Flimuirs\u002Fcomponents\u002Fcommon\u002FFeedback&quot;}"><noscript></noscript></li:common-feedback>
        
	

	

    
		
	
	
</div>
		</div>
	</div>
</div>
		
	
	
</div>
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-main-top">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-main-top-content">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-single">
	
		
			



    <div class="custom-tiled-node-navigation ">
        <section>
            <h2>Explore SAP Community</h2>
            <div>
                    <article>
                        <a href="/t5/customer-relationship-management/ct-p/crm" title="Go to Customer Relationship Management" style="background: url('/t5/image/serverpage/image-id/48358i8679414535139647/image-size/medium?v=v2&amp;px=400') center/contain no-repeat">
                        </a>                        
                        <h3><a href="/t5/customer-relationship-management/ct-p/crm">Customer Relationship Management</a></h3>
                        <p>Find answers to your questions about SAP Customer Relationship Management software, gain insights fr...</p>
                        <i>112898 Posts</i> 
                    </article>
                    <article>
                        <a href="/t5/enterprise-resource-planning/ct-p/erp" title="Go to Enterprise Resource Planning" style="background: url('/t5/image/serverpage/image-id/48360i5B1B8032F7344308/image-size/medium?v=v2&amp;px=400') center/contain no-repeat">
                        </a>                        
                        <h3><a href="/t5/enterprise-resource-planning/ct-p/erp">Enterprise Resource Planning</a></h3>
                        <p>Get support, share your expertise, and engage with the community about SAP S/4HANA, SAP S/4HANA Clou...</p>
                        <i>898125 Posts</i> 
                    </article>
                    <article>
                        <a href="/t5/financial-management/ct-p/financial-management" title="Go to Financial Management" style="background: url('/t5/image/serverpage/image-id/48359i4FFDDF9DECA8346C/image-size/medium?v=v2&amp;px=400') center/contain no-repeat">
                        </a>                        
                        <h3><a href="/t5/financial-management/ct-p/financial-management">Financial Management</a></h3>
                        <p>Get answers and gain insight about planning and analysis, accounting and financial close, tax and tr...</p>
                        <i>50862 Posts</i> 
                    </article>
                    <article>
                        <a href="/t5/human-capital-management/ct-p/hcm" title="Go to Human Capital Management" style="background: url('/t5/image/serverpage/image-id/48361iBDE9948F1633F357/image-size/medium?v=v2&amp;px=400') center/contain no-repeat">
                        </a>                        
                        <h3><a href="/t5/human-capital-management/ct-p/hcm">Human Capital Management</a></h3>
                        <p>Ask questions, find resources, and share your knowledge about SAP SuccessFactors products and human ...</p>
                        <i>13768 Posts</i> 
                    </article>
                    <article>
                        <a href="/t5/product-lifecycle-management/ct-p/plm" title="Go to Product Lifecycle Management" style="background: url('/t5/image/serverpage/image-id/48362iFDFA1319ED959D33/image-size/medium?v=v2&amp;px=400') center/contain no-repeat">
                        </a>                        
                        <h3><a href="/t5/product-lifecycle-management/ct-p/plm">Product Lifecycle Management</a></h3>
                        <p>Explore Q&amp;A, blogs, and other resources related to SAP Product Lifecycle Management. Share your expe...</p>
                        <i>18834 Posts</i> 
                    </article>
                    <article>
                        <a href="/t5/spend-management/ct-p/spend-management" title="Go to Spend Management" style="background: url('/t5/image/serverpage/image-id/44432i13B8D7FE0748FEFF/image-size/medium?v=v2&amp;px=400') center/contain no-repeat">
                        </a>                        
                        <h3><a href="/t5/spend-management/ct-p/spend-management">Spend Management</a></h3>
                        <p>Get answers to questions about SAP products and technology. Follow expert blogs to gain insights. Sh...</p>
                        <i>41252 Posts</i> 
                    </article>
                    <article>
                        <a href="/t5/supply-chain-management/ct-p/scm" title="Go to Supply Chain Management" style="background: url('/t5/image/serverpage/image-id/48364iDECFECCEABF6E38B/image-size/medium?v=v2&amp;px=400') center/contain no-repeat">
                        </a>                        
                        <h3><a href="/t5/supply-chain-management/ct-p/scm">Supply Chain Management</a></h3>
                        <p>Find answers to your questions about SAP SCM software. Connect with experts, share insights, and acc...</p>
                        <i>50023 Posts</i> 
                    </article>
                    <article>
                        <a href="/t5/technology/ct-p/technology" title="Go to Technology" style="background: url('/t5/image/serverpage/image-id/48365iD08F4F3F4B19D621/image-size/medium?v=v2&amp;px=400') center/contain no-repeat">
                        </a>                        
                        <h3><a href="/t5/technology/ct-p/technology">Technology</a></h3>
                        <p>Ask and answer questions about SAP Business Technology Platform (SAP BTP). Connect with peers, share...</p>
                        <i>1004320 Posts</i> 
                    </article>
            </div>
        </section>
    </div>

		
	
	
</div>
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-main">
		<div class="lia-quilt-column lia-quilt-column-16 lia-quilt-column-left lia-quilt-column-main-content">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-left">
	
		
			 
<div class="custom-community-activity" id="custom-loader"> <section> <header> <h2>Recent Activity</h2> <div> <label for="community-activity-sorted-by">Sort By</label> <select id="community-activity-sorted-by"> <option value="recent" selected>Most recent</option> <option value="views" >Most viewed</option> <option value="replies" >Most commented</option> <option value="topkudos" >Most liked</option> </select> <div class="custom-start-conversation-button"> <a class="lia-button lia-button-primary" href="/plugins/common/feature/oidcss/sso_login_redirect/providerid/sap_ids?referer=https%3A%2F%2Fcommunity.sap.com%2F">Sign In to Post</a> </div> </div> </header> <section id="custom-loader-messages"> <div class="errors"></div> <div class="message-list" data-attrib-current-page="0" data-attrib-message-list-type="recent"> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/technology-q-a/sap-mdk-segmented-control-value-when-iseditable-is-set-to-false/qaq-p/13588808" title="SAP MDK segmented control value when IsEditable is set to false">SAP MDK segmented control value when IsEditable is set to false</a> </h3> <p> Hello experts,For one development built on top of SSAM, I am using a segmented control. I have written a rule which set the “Value” of this segmented control. This is working fine.However, when I try to add a rule (and the rule returns&nbsp; “false”) to d... </p> <figure> <img src="/t5/image/serverpage/image-id/57094i15F601C2363368E6/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400" alt="jeaneudes_humbert_0-1706694149839.png" /> </figure> </div> <aside> <div class="custom-tile-date"> <time datetime="01-31-2024 9:46 AM"> 7 hours ago </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/technology-q-a/qa-p/technology-questions">Technology Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/232276" title="View profile"> <img class="lia-user-avatar-message" alt="jeaneudes_humbert" src="https://avatars.profile.sap.com/5/f/id5f4d305d5d4b901ac79571fcedbcaaf721d0cb11ca0b149fc1948812ef2023cc_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/232276" rel="author" title="View profile"> <span class="" style="color:#000000" >jeaneudes_humbert</span> </a> </strong> <small>&bull;</small> <em>Employee</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>9</b> Views</li> <li class="custom-tile-replies"><b>1</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/enterprise-resource-planning-q-a/separate-pro-forma-invoice-number-range-and-invoice-number-range/qaq-p/13589796" title="Separate Pro forma invoice Number Range and Invoice Number Range">Separate Pro forma invoice Number Range and Invoice Number Range</a> </h3> <p> Hello experts,Is there any configuration in CBC to separate pro forma invoice (F5) number range and invoice (F2) Number Range? When I created Pro Forma Invoice, the number is 9xxxxxxxx and when Invoice (F2) created, the number also 9xxxxxxxx.SAP S/4H... </p> </div> <aside> <div class="custom-tile-date"> <time datetime="01-31-2024 4:41 PM"> 7m ago </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/enterprise-resource-planning-q-a/qa-p/erp-questions">Enterprise Resource Planning Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/1386046" title="View profile"> <img class="lia-user-avatar-message" alt="johan-handoko" src="https://avatars.profile.sap.com/0/7/id07331e650bb90921a7c315f30c742b984bb1635d6699bb68dae471049da17ded_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/1386046" rel="author" title="View profile"> <span class="" >johan-handoko</span> </a> </strong> <small>&bull;</small> <em>Discoverer</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>0</b> Views</li> <li class="custom-tile-replies"><b>0</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-solved custom-thread-unread"> <div> <h3> <i class="custom-thread-solved"><small>Resolved!</small></i> <a href="/t5/enterprise-resource-planning-q-a/subtracting-the-number-of-one-wagetype-from-another-when-calling-a-pcr-with/qaq-p/13585771" title="Subtracting the number of one wagetype from another when calling a PCR with PRT">Subtracting the number of one wagetype from another when calling a PCR with PRT</a> </h3> <p> For full compliance with the Alabama Overtime Exemption, we have a need to subtract the&nbsp;number of one wagetype from another, then recalculating the&nbsp;amount before adding it to the&nbsp;/PPE wagetype.For some background, we calculate OT differently from the... </p> </div> <aside> <div class="custom-tile-date"> <time datetime="01-29-2024 8:05 PM"> Monday </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/enterprise-resource-planning-q-a/qa-p/erp-questions">Enterprise Resource Planning Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/151230" title="View profile"> <img class="lia-user-avatar-message" alt="khigby" src="https://avatars.profile.sap.com/2/b/id2bb0b35b0cd02ded07a47c4965a96facef8248fdaa6700168e7f57e99bba51ca_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/151230" rel="author" title="View profile"> <span class="" >khigby</span> </a> </strong> <small>&bull;</small> <em>Explorer</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>32</b> Views</li> <li class="custom-tile-replies"><b>1</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/application-development-discussions/can-u-help-me-in-st05-while-i-am-displaying-trace-analysis-its-showing-the/td-p/10615201" title="Can u help me in ST05? while i am displaying trace analysis its showing the pop window as &#39;&#39;Cannot open kernel trace file for reading (End of file)&#39;&#39;">Can u help me in ST05? while i am displaying trace analysis its showing the pop window as &#39;&#39;Cannot open kernel trace file for reading (End of file)&#39;&#39;</a> </h3> <p> plz answer me... i am facing this problem while i am doing sql trace.1-i activated trace for my tcode.2-deactivated trace after the program execution. 3- now , while i am displaying the trace the following error is coming.thanks in advance,Rahul </p> </div> <aside> <div class="custom-tile-date"> <time datetime="09-29-2014 12:02 PM"> 09-29-2014 12:02 PM </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/application-development-discussions/bd-p/application-developmentforum-board">Application Development Discussions</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="" title="View profile"> <img class="lia-user-avatar-message" alt="Former Member" src="/skins/images/490DCE020A0EE1136A7FEF0ED4F481BD/responsive_peak/images/icon_anonymous_profile.svg" /> </a> <strong> <span>by </span> <a href="" rel="author" title="View profile"> <span class="" >Former Member</span> </a> </strong> <small>&bull;</small> <em></em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>4716</b> Views</li> <li class="custom-tile-replies"><b>3</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/human-capital-management-q-a/configure-basis-amount-located-under-set-bonus-calculations-option/qaq-p/13585342" title="Configure basis amount located under Set Bonus Calculations option">Configure basis amount located under Set Bonus Calculations option</a> </h3> <p> Hi&nbsp;I have doubt related to&nbsp;Configure basis amount located under Set Bonus Calculations option. We have selected. option 3 :- Point in Time Calculation with effective date as 31/12. Since client need most recent record for the EE salary.&nbsp; simultaneous... </p> </div> <aside> <div class="custom-tile-date"> <time datetime="01-29-2024 3:11 PM"> Monday </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/human-capital-management-q-a/qa-p/hcm-questions">Human Capital Management Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/46749" title="View profile"> <img class="lia-user-avatar-message" alt="Ritanshi" src="https://avatars.profile.sap.com/c/b/idcb7a7f525d7b6e6ea886ec6ffaea5b53b8efd20ab4135cc2209a427d9d8abeff_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/46749" rel="author" title="View profile"> <span class="" >Ritanshi</span> </a> </strong> <small>&bull;</small> <em>Participant</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>47</b> Views</li> <li class="custom-tile-replies"><b>4</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/questions-about-sap-websites/fiori-launchpad-access-issue/qaq-p/13589681" title="Fiori Launchpad Access Issue">Fiori Launchpad Access Issue</a> </h3> <p> Hey, guys,I'm having trouble accessing Fiori Launchpad onhttp://myinternalhostname:8000/sap/bc/ui2/flp?sap-client=200&amp;sap-language=EN.My hosts file is configured correctly and I have contacted my superiors to verify that the environment is working no... </p> </div> <aside> <div class="custom-tile-date"> <time datetime="01-31-2024 3:20 PM"> an hour ago </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/questions-about-sap-websites/qa-p/website-questions">Questions about SAP Websites</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/1387263" title="View profile"> <img class="lia-user-avatar-message" alt="alan_felipe" src="https://avatars.profile.sap.com/a/8/ida81496ae9addff4cda9e84a638f91f241040031c07d7090a722e103f97957760_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/1387263" rel="author" title="View profile"> <span class="" >alan_felipe</span> </a> </strong> <small>&bull;</small> <em>Member</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>32</b> Views</li> <li class="custom-tile-replies"><b>3</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/enterprise-resource-planning-q-a/prt-printed-status-is-missing-in-pm-work-order/qaq-p/13588812" title="PRT- Printed status is missing in PM Work Order">PRT- Printed status is missing in PM Work Order</a> </h3> <p> In customization I have activated "Print before release allowed" and "Print after completion allowed" for shop paper- Operation Control Ticket. Operation Status is also ticked. But If i do a print for this form from work order before release, I see s... </p> <figure> <img src="/t5/image/serverpage/image-id/57095iDAD0F5E88D506495/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400" alt="vineeth_varghese_0-1706694178120.png" /> <img src="/t5/image/serverpage/image-id/57098i79FD27A67DA4109D/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400" alt="vineeth_varghese_1-1706694325671.png" /> </figure> </div> <aside> <div class="custom-tile-date"> <time datetime="01-31-2024 9:48 AM"> 7 hours ago </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/enterprise-resource-planning-q-a/qa-p/erp-questions">Enterprise Resource Planning Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/206332" title="View profile"> <img class="lia-user-avatar-message" alt="vineeth_varghese" src="https://avatars.profile.sap.com/2/3/id239a36ea6aa35fd27c043eeed2887abe3aaa5b8f8dc021b69e21f36596238b73_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/206332" rel="author" title="View profile"> <span class="" >vineeth_varghese</span> </a> </strong> <small>&bull;</small> <em>Active Participant</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>32</b> Views</li> <li class="custom-tile-replies"><b>1</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/technology-q-a/performance-issues-sap-business-one/qaq-p/13588436" title="Performance Issues - SAP Business One">Performance Issues - SAP Business One</a> </h3> <p> Hi everyone,we have recently updated a customer from and early Version of SAP 10&nbsp; &nbsp;to&nbsp; &nbsp;SAP 10 FP 2308.Now the Forms are loading very slowly and the SAP App seems not responding.We have already fixed the issue with the unwanted Creation of Logs.Is th... </p> </div> <aside> <div class="custom-tile-date"> <time datetime="01-31-2024 7:09 AM"> 10 hours ago </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/technology-q-a/qa-p/technology-questions">Technology Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/771608" title="View profile"> <img class="lia-user-avatar-message" alt="wrede_tobias_schwarz" src="https://avatars.profile.sap.com/e/b/ideb96f6ee118d1a8cc18a8579d3af5bf0e31df6329565bef5c99468022cd44e78_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/771608" rel="author" title="View profile"> <span class="" >wrede_tobias_schwarz</span> </a> </strong> <small>&bull;</small> <em>Explorer</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>19</b> Views</li> <li class="custom-tile-replies"><b>1</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/human-capital-management-q-a/default-data-from-std-ec-object-to-custom-mdf-object/qaq-p/13589774" title="Default data from Std EC object to Custom MDF object">Default data from Std EC object to Custom MDF object</a> </h3> <p> Is it possible to default data from an standard EC object(Job info, Emp info) into a custom object in Onboarding? </p> </div> <aside> <div class="custom-tile-date"> <time datetime="01-31-2024 4:23 PM"> 26m ago </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/human-capital-management-q-a/qa-p/hcm-questions">Human Capital Management Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/62278" title="View profile"> <img class="lia-user-avatar-message" alt="PujaSoniAhuja" src="https://avatars.profile.sap.com/c/3/idc3eae56d8569bc35af52715031aa19c71628d9479ad4ace235b50dcc7b7f5600_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/62278" rel="author" title="View profile"> <span class="" >PujaSoniAhuja</span> </a> </strong> <small>&bull;</small> <em>Discoverer</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>2</b> Views</li> <li class="custom-tile-replies"><b>0</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/supply-chain-management-q-a/ltmom-commodity-codes/qaq-p/13589768" title="LTMOM-Commodity codes">LTMOM-Commodity codes</a> </h3> <p> Hello ,&nbsp;&nbsp;I'm trying to create an new object for commodity codes on LTMOM but once i click on generate runtime object i get this error message :&nbsp;&nbsp;Any suggestions please ?&nbsp;Thank you in advance.&nbsp; </p> <figure> <img src="/t5/image/serverpage/image-id/57686i65B24C374C8ADC3B/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400" alt="soulaymane_naim_0-1706717935429.png" /> </figure> </div> <aside> <div class="custom-tile-date"> <time datetime="01-31-2024 4:20 PM"> 29m ago </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/supply-chain-management-q-a/qa-p/scm-questions">Supply Chain Management Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/892658" title="View profile"> <img class="lia-user-avatar-message" alt="soulaymane_naim" src="https://avatars.profile.sap.com/6/a/id6a90865687dfee4d1cd0bfca30c324f846dcb3bcfb1b99df37482d7e8a052f9d_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/892658" rel="author" title="View profile"> <span class="" >soulaymane_naim</span> </a> </strong> <small>&bull;</small> <em>Discoverer</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>4</b> Views</li> <li class="custom-tile-replies"><b>0</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/human-capital-management-q-a/sme-subject-matter-expert-hours/qaq-p/13589765" title="SME Subject Matter Expert Hours">SME Subject Matter Expert Hours</a> </h3> <p> Are the SME Subject Matter Expert Hours still running? How do we register / join them? Thanks! </p> </div> <aside> <div class="custom-tile-date"> <time datetime="01-31-2024 4:18 PM"> 30m ago </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/human-capital-management-q-a/qa-p/hcm-questions">Human Capital Management Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/175677" title="View profile"> <img class="lia-user-avatar-message" alt="E_Morgan" src="https://avatars.profile.sap.com/4/0/id40923ea5c42794d7686618de0311739c7c2f2eedd0b37a8a785a13bc0b5419c4_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/175677" rel="author" title="View profile"> <span class="" >E_Morgan</span> </a> </strong> <small>&bull;</small> <em>Discoverer</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>2</b> Views</li> <li class="custom-tile-replies"><b>0</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/technology-q-a/business-objects-to-4-2-upgrade-server-issues/qaq-p/12067406" title="Business Objects to 4.2 upgrade &amp; Server Issues">Business Objects to 4.2 upgrade &amp; Server Issues</a> </h3> <p> We have recently upgraded Business Objects to 4.2 version on one of our app server. .NET Application which is referencing 4.2 DLL(s) is throwing below exception. Everything is working fine on local machine and the issue is coming only on the ser... </p> </div> <aside> <div class="custom-tile-date"> <time datetime="12-06-2019 11:38 PM"> 12-06-2019 11:38 PM </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/technology-q-a/qa-p/technology-questions">Technology Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/1304559" title="View profile"> <img class="lia-user-avatar-message" alt="former_member1304559" src="https://avatars.profile.sap.com/former_member_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/1304559" rel="author" title="View profile"> <span class="" >former_member1304559</span> </a> </strong> <small>&bull;</small> <em>Member</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>338</b> Views</li> <li class="custom-tile-replies"><b>2</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/enterprise-resource-planning-q-a/missing-functional-location-change-log/qaq-p/13583887" title="Missing Functional Location Change Log">Missing Functional Location Change Log</a> </h3> <p> Hi Experts,One of our customer claimed that he change the cost centre of a Floc on 08/11/2023 but it does not recorded in the Change Documents of the Floc. However, the change log recorded the previous cost centre change in 04/07/2023. Below is the c... </p> <figure> <img src="/t5/image/serverpage/image-id/54117i5BD847DC2FE3965D/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400" alt="sank_n_0-1706478501337.png" /> <img src="/t5/image/serverpage/image-id/54118i7C308F35370E7F78/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400" alt="sank_n_1-1706478579212.png" /> <img src="/t5/image/serverpage/image-id/54119iE076CC3B49FB80E5/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400" alt="sank_n_2-1706478678495.png" /> <img src="/t5/image/serverpage/image-id/54120i108B2D0C7E3619CF/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400" alt="sank_n_3-1706478735041.png" /> </figure> </div> <aside> <div class="custom-tile-date"> <time datetime="01-28-2024 9:56 PM"> Sunday </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/enterprise-resource-planning-q-a/qa-p/erp-questions">Enterprise Resource Planning Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/424318" title="View profile"> <img class="lia-user-avatar-message" alt="sank_n" src="https://avatars.profile.sap.com/2/b/id2b9e9497fe2ccd44a8031e1a4847214cd98aa9cf4912ce42256fc6c27da5c3ab_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/424318" rel="author" title="View profile"> <span class="" >sank_n</span> </a> </strong> <small>&bull;</small> <em>Participant</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>55</b> Views</li> <li class="custom-tile-replies"><b>1</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/technology-q-a/training-the-sap-ai-model-with-sap-help-documents/qaq-p/12739069" title="Training the SAP AI Model with SAP Help Documents">Training the SAP AI Model with SAP Help Documents</a> </h3> <p> Hi All, I have a requirement for building a chatbot that is trained with SAP Internal Help document. I have a parent link and in turn the parent link navigates to various sub links. We want our AI model to be trained with all the data availabl... </p> </div> <aside> <div class="custom-tile-date"> <time datetime="12-01-2023 6:01 AM"> 12-01-2023 6:01 AM </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/technology-q-a/qa-p/technology-questions">Technology Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/138505" title="View profile"> <img class="lia-user-avatar-message" alt="santhosini_K" src="https://avatars.profile.sap.com/7/8/id784757e2f1e45abd6a8cf92732e948ad064182a932ac2a1754c2c30d010d9ab3_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/138505" rel="author" title="View profile"> <span class="" >santhosini_K</span> </a> </strong> <small>&bull;</small> <em>Advisor</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>242</b> Views</li> <li class="custom-tile-replies"><b>4</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> <article class="custom-message-tile custom-thread-unread"> <div> <h3> <a href="/t5/technology-q-a/have-you-got-the-solution-for-this-i-also-have-same-requirement/qaq-p/13589748" title="Have you got the solution for this. I also have same requirement">Have you got the solution for this. I also have same requirement</a> </h3> <p> </p> </div> <aside> <div class="custom-tile-date"> <time datetime="01-31-2024 4:06 PM"> 42m ago </time> </div> &vert; <div class="custom-tile-category"> <span class="custom-tile-category-posted">Posted in </span> <a class="custom-tile-category-board" href="/t5/technology-q-a/qa-p/technology-questions">Technology Q&amp;A</a> </div> </aside> <footer> <div class="custom-tile-author-info"> <a class="UserAvatar lia-link-navigation" href="/t5/user/viewprofilepage/user-id/769690" title="View profile"> <img class="lia-user-avatar-message" alt="vaiverma123" src="https://avatars.profile.sap.com/2/6/id26c45e8cdf32d58f2ca50e41347b31bdcd27390f12bf274b2da3bffb8b1366be_small.jpeg" /> </a> <strong> <span>by </span> <a href="/t5/user/viewprofilepage/user-id/769690" rel="author" title="View profile"> <span class="" >vaiverma123</span> </a> </strong> <small>&bull;</small> <em>Discoverer</em> </div> <ul class="custom-tile-statistics"> <li class="custom-tile-views"><b>7</b> Views</li> <li class="custom-tile-replies"><b>0</b> replies</li> <li class="custom-tile-kudos"><b>0</b> kudos</li> </ul> </footer> </article> </div> <div class="lia-view-all"> <a class="lia-link-navigation load-more-button " href="javascript:;" id="custom-loader-button">Load more</a> </div> <div id="load-more-aria" role="status" aria-live="assertive" aria-atomic="true" class="sr-only"></div> </section> </section> </div>
		
	
	
</div>
		</div><div class="lia-quilt-column lia-quilt-column-08 lia-quilt-column-right lia-quilt-column-side-content">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-right">
	
		<div class="custom-getting-started lia-mark-empty">
			
		
			
		
	
		</div>
	
	

	
		
			
		
			<div class="lia-panel lia-panel-standard custom-resource-list ">
  <div class="lia-decoration-border">
    <div class="lia-decoration-border-top"><div> </div></div>
    <div class="lia-decoration-border-content">
      <div>
          <div class="lia-panel-heading-bar-wrapper">
            <div class="lia-panel-heading-bar">
              <span class="lia-panel-heading-bar-title">Welcome to SAP Community!</span>
            </div>
          </div>
        <div class="lia-panel-content-wrapper">
          <div class="lia-panel-content">
            <p>
These materials will help you participate and connect with other members.
</p>

<ul class="custom-resource-list-items">
<li>
     <img src="/html/assets/community-resources-tile-01.svg" alt="" />
     <h4><a href="https://groups.community.sap.com/t5/help/faqpage" target="_blank">FAQs</a></h4>
     <p>Find answers to basic questions about using SAP Community.</p>
</li>
<li>
     <img src="/html/assets/community-resources-tile-02.svg" alt="" />
     <h4><a href="https://pages.community.sap.com/resources" target="_blank">Resources</a></h4>
     <p>Learn about community rules, take our tutorial, and get support.</p>
</li>
<li>
     <img src="/html/assets/community-resources-tile-03.svg" alt="" />
     <h4><a href="https://groups.community.sap.com/t5/what-s-new/asking-and-answering-questions-in-the-community-after-migration/ba-p/311224" target="_blank">Q&A</a></h4>
     <p>Familiarize yourself with questions and answers.</p>
</li>
<li>
     <img src="/html/assets/community-resources-tile-04.svg" alt="" />
     <h4><a href="https://groups.community.sap.com/t5/what-s-new/what-you-need-to-know-about-blogging-post-migration/ba-p/309730" target="_blank">Blogging</a></h4>
     <p>Share your knowledge by contributing to the community.</p>
</li>
<li>
     <img src="/html/assets/community-resources-tile-01.svg" alt="" />
     <h4><a href="https://groups.community.sap.com/t5/welcome-corner/gh-p/welcome-corner" target="_blank">Welcome Corner </a></h4>
     <p>Introduce yourself and get to know other members.</p>
</li>

</ul>

          </div>
        </div>
      </div>
    </div>
    <div class="lia-decoration-border-bottom">
      <div> </div>
    </div>
  </div>
</div>

		
			<div class="lia-panel lia-panel-standard KudoedAuthorsLeaderboardTaplet Chrome lia-component-kudos-widget-authors-leaderboard"><div class="lia-decoration-border"><div class="lia-decoration-border-top"><div> </div></div><div class="lia-decoration-border-content"><div><div class="lia-panel-heading-bar-wrapper"><div class="lia-panel-heading-bar"><span aria-level="3" role="heading" class="lia-panel-heading-bar-title">Top kudoed authors</span></div></div><div class="lia-panel-content-wrapper"><div class="lia-panel-content">

	

	

	

	
		<div class="UserList lia-component-users-widget-user-list">
	<span id="user-listuserList"> </span>
	<div class="t-data-grid" id="grid">

	

	

	<table role="presentation" class="lia-list-slim">
        <thead class="lia-table-head" id="columns"><tr><th scope="col" class="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text t-first">
			<span class="lia-view-filter lia-link-disabled" aria-disabled="true" id="link_15">User</span>
		</th><th scope="col" class="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer t-last">
			Count
		</th></tr></thead>
        <tbody>
            <tr class="lia-list-row lia-row-odd t-first"><td class="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
			<div class="UserProfileSummary lia-user-item lia-js-data-userId-145194 lia-user-info-group">
	

	

	

	

	
		<div class="lia-message-author-avatar-username">
	<a class="UserAvatarName lia-link-navigation" id="link_16" href="/t5/user/viewprofilepage/user-id/145194">
		
			
		<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
	
			
					<img class="lia-user-avatar-message" title="Sandra_Rossi" alt="Sandra_Rossi" id="imagedisplay" src="https://avatars.profile.sap.com/5/a/id5ade69af148fee003e69a3410fe4ea7d8d92f9f0535ff49f640e7d27e69efed1_small.jpeg"/>
					
				
		
</div>
	
			<div class="lia-user-attributes">
				
		<div class="lia-user-name">
			
	

	
			<span class="UserName lia-user-name lia-user-rank-Active-Contributor">
				
		
		
			<span class="">Sandra_Rossi</span>
		
		
		
		
		
		
		
	
			</span>
		

		</div>
	
			</div>
		
	</a>
</div>
		
	

	<div class="lia-user-attributes">
		

		

		

		

		

		

		

		

		

		

		

		

		

		

		
	</div>
</div>
		</td><td class="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer" aria-label="Number of kudos: 10,367">
			10367
		</td></tr><tr class="lia-list-row lia-row-even"><td class="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
			<div class="UserProfileSummary lia-user-item lia-js-data-userId-82 lia-user-info-group">
	

	

	

	

	
		<div class="lia-message-author-avatar-username">
	<a class="UserAvatarName lia-link-navigation" id="link_17" href="/t5/user/viewprofilepage/user-id/82">
		
			
		<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
	
			
					<img class="lia-user-avatar-message" title="TammyPowlas" alt="TammyPowlas" id="imagedisplay_0" src="https://avatars.profile.sap.com/1/c/id1c4d2e836029296f46652b6377aa87afb5d5ecfd4a49ad9310b161b7e108db3a_small.jpeg"/>
					
				
		
</div>
	
			<div class="lia-user-attributes">
				
		<div class="lia-user-name">
			
	

	
			<span class="UserName lia-user-name lia-user-rank-Active-Contributor">
				
		
		
			<span class="">TammyPowlas</span>
		
		
		
		
		
		
		
	
			</span>
		

		</div>
	
			</div>
		
	</a>
</div>
		
	

	<div class="lia-user-attributes">
		

		

		

		

		

		

		

		

		

		

		

		

		

		

		
	</div>
</div>
		</td><td class="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer" aria-label="Number of kudos: 7,375">
			7375
		</td></tr><tr class="lia-list-row lia-row-odd"><td class="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
			<div class="UserProfileSummary lia-user-item lia-js-data-userId-4934 lia-user-info-group">
	

	

	

	

	
		<div class="lia-message-author-avatar-username">
	<a class="UserAvatarName lia-link-navigation" id="link_18" href="/t5/user/viewprofilepage/user-id/4934">
		
			
		<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
	
			
					<img class="lia-user-avatar-message" title="JelenaP" alt="JelenaP" id="imagedisplay_1" src="https://avatars.profile.sap.com/f/b/idfb2b823c35a16b3b24d5e73ff317e894a4b868003efa157ebe59524244102690_small.jpeg"/>
					
				
		
</div>
	
			<div class="lia-user-attributes">
				
		<div class="lia-user-name">
			
	

	
			<span class="UserName lia-user-name lia-user-rank-Active-Contributor">
				
		
		
			<span class="">JelenaP</span>
		
		
		
		
		
		
		
	
			</span>
		

		</div>
	
			</div>
		
	</a>
</div>
		
	

	<div class="lia-user-attributes">
		

		

		

		

		

		

		

		

		

		

		

		

		

		

		
	</div>
</div>
		</td><td class="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer" aria-label="Number of kudos: 6,365">
			6365
		</td></tr><tr class="lia-list-row lia-row-even"><td class="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
			<div class="UserProfileSummary lia-user-item lia-js-data-userId-310 lia-user-info-group">
	

	

	

	

	
		<div class="lia-message-author-avatar-username">
	<a class="UserAvatarName lia-link-navigation" id="link_19" href="/t5/user/viewprofilepage/user-id/310">
		
			
		<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
	
			
					<img class="lia-user-avatar-message" title="matt" alt="matt" id="imagedisplay_2" src="https://avatars.profile.sap.com/1/c/id1cae56a3d0a04deff9c8d10f54c3f562a6106c370cfae33f5fcd6d3888172910_small.jpeg"/>
					
				
		
</div>
	
			<div class="lia-user-attributes">
				
		<div class="lia-user-name">
			
	

	
			<span class="UserName lia-user-name lia-user-rank-Active-Contributor">
				
		
		
			<span class="">matt</span>
		
		
		
		
		
		
		
	
			</span>
		

		</div>
	
			</div>
		
	</a>
</div>
		
	

	<div class="lia-user-attributes">
		

		

		

		

		

		

		

		

		

		

		

		

		

		

		
	</div>
</div>
		</td><td class="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer" aria-label="Number of kudos: 6,034">
			6034
		</td></tr><tr class="lia-list-row lia-row-odd"><td class="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
			<div class="UserProfileSummary lia-user-item lia-js-data-userId-67 lia-user-info-group">
	

	

	

	

	
		<div class="lia-message-author-avatar-username">
	<a class="UserAvatarName lia-link-navigation" id="link_20" href="/t5/user/viewprofilepage/user-id/67">
		
			
		<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
	
			
					<img class="lia-user-avatar-message" title="dvankempen" alt="dvankempen" id="imagedisplay_3" src="https://avatars.profile.sap.com/e/5/ide56f94b241acf8b85be7e0a035dc869f89032a35f49f79117396f1efe8803047_small.jpeg"/>
					
				
		
</div>
	
			<div class="lia-user-attributes">
				
		<div class="lia-user-name">
			
	

	
			<span class="UserName lia-user-name lia-user-rank-Product-and-Topic-Expert">
				
		<img class="lia-user-rank-icon lia-user-rank-icon-left" title="Product and Topic Expert" alt="Product and Topic Expert" id="display" src="/html/@C6690A74F301515E6881523D52BDF6AA/rank_icons/sap-logo-small-14px.png"/>
		
			<span class="">dvankempen</span>
		
		
		
		
		
		
		
	
			</span>
		

		</div>
	
			</div>
		
	</a>
</div>
		
	

	<div class="lia-user-attributes">
		

		

		

		

		

		

		

		

		

		

		

		

		

		

		
	</div>
</div>
		</td><td class="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer" aria-label="Number of kudos: 5,515">
			5515
		</td></tr><tr class="lia-list-row lia-row-even"><td class="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
			<div class="UserProfileSummary lia-user-item lia-js-data-userId-181866 lia-user-info-group">
	

	

	

	

	
		<div class="lia-message-author-avatar-username">
	<a class="UserAvatarName lia-link-navigation" id="link_21" href="/t5/user/viewprofilepage/user-id/181866">
		
			
		<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
	
			
					<img class="lia-user-avatar-message" title="horst_keller" alt="horst_keller" id="imagedisplay_4" src="https://avatars.profile.sap.com/5/6/id56f8cf651059f0a04a81d6b6f40054d6b25e948f25417a0780b3cb816a22765e_small.jpeg"/>
					
				
		
</div>
	
			<div class="lia-user-attributes">
				
		<div class="lia-user-name">
			
	

	
			<span class="UserName lia-user-name lia-user-rank-Advisor">
				
		<img class="lia-user-rank-icon lia-user-rank-icon-left" title="Advisor" alt="Advisor" id="display_0" src="/html/@C6690A74F301515E6881523D52BDF6AA/rank_icons/sap-logo-small-14px.png"/>
		
			<span class="">horst_keller</span>
		
		
		
		
		
		
		
	
			</span>
		

		</div>
	
			</div>
		
	</a>
</div>
		
	

	<div class="lia-user-attributes">
		

		

		

		

		

		

		

		

		

		

		

		

		

		

		
	</div>
</div>
		</td><td class="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer" aria-label="Number of kudos: 5,086">
			5086
		</td></tr><tr class="lia-list-row lia-row-odd"><td class="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
			<div class="UserProfileSummary lia-user-item lia-js-data-userId-6638 lia-user-info-group">
	

	

	

	

	
		<div class="lia-message-author-avatar-username">
	<a class="UserAvatarName lia-link-navigation" id="link_22" href="/t5/user/viewprofilepage/user-id/6638">
		
			
		<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
	
			
					<img class="lia-user-avatar-message" title="OlgaDolinskaja" alt="OlgaDolinskaja" id="imagedisplay_5" src="https://avatars.profile.sap.com/3/d/id3de2dde04a1aa64b641424db3bbbc1eb95d2a09d6ce8813af73d131db316e370_small.jpeg"/>
					
				
		
</div>
	
			<div class="lia-user-attributes">
				
		<div class="lia-user-name">
			
	

	
			<span class="UserName lia-user-name lia-user-rank-Product-and-Topic-Expert">
				
		<img class="lia-user-rank-icon lia-user-rank-icon-left" title="Product and Topic Expert" alt="Product and Topic Expert" id="display_1" src="/html/@C6690A74F301515E6881523D52BDF6AA/rank_icons/sap-logo-small-14px.png"/>
		
			<span class="">OlgaDolinskaja</span>
		
		
		
		
		
		
		
	
			</span>
		

		</div>
	
			</div>
		
	</a>
</div>
		
	

	<div class="lia-user-attributes">
		

		

		

		

		

		

		

		

		

		

		

		

		

		

		
	</div>
</div>
		</td><td class="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer" aria-label="Number of kudos: 4,701">
			4701
		</td></tr><tr class="lia-list-row lia-row-even"><td class="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
			<div class="UserProfileSummary lia-user-item lia-js-data-userId-131660 lia-user-info-group">
	

	

	

	

	
		<div class="lia-message-author-avatar-username">
	<a class="UserAvatarName lia-link-navigation" id="link_23" href="/t5/user/viewprofilepage/user-id/131660">
		
			
		<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
	
			
					<img class="lia-user-avatar-message" title="Jocelyn_Dart" alt="Jocelyn_Dart" id="imagedisplay_6" src="https://avatars.profile.sap.com/e/6/ide61bddc8afbcf45f77659ee1cd5c70e2a73f821cfee87786d0369c53fab9f266_small.jpeg"/>
					
				
		
</div>
	
			<div class="lia-user-attributes">
				
		<div class="lia-user-name">
			
	

	
			<span class="UserName lia-user-name lia-user-rank-Advisor">
				
		<img class="lia-user-rank-icon lia-user-rank-icon-left" title="Advisor" alt="Advisor" id="display_2" src="/html/@C6690A74F301515E6881523D52BDF6AA/rank_icons/sap-logo-small-14px.png"/>
		
			<span class="">Jocelyn_Dart</span>
		
		
		
		
		
		
		
	
			</span>
		

		</div>
	
			</div>
		
	</a>
</div>
		
	

	<div class="lia-user-attributes">
		

		

		

		

		

		

		

		

		

		

		

		

		

		

		
	</div>
</div>
		</td><td class="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer" aria-label="Number of kudos: 4,282">
			4282
		</td></tr><tr class="lia-list-row lia-row-odd t-last"><td class="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
			<div class="UserProfileSummary lia-user-item lia-js-data-userId-13192 lia-user-info-group">
	

	

	

	

	
		<div class="lia-message-author-avatar-username">
	<a class="UserAvatarName lia-link-navigation" id="link_24" href="/t5/user/viewprofilepage/user-id/13192">
		
			
		<div class="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
	
			
					<img class="lia-user-avatar-message" title="JL23" alt="JL23" id="imagedisplay_7" src="https://avatars.profile.sap.com/6/c/id6c36df4577212140a0f37173cffd07bdfe5e088443d6daa05f631502fcf007ef_small.jpeg"/>
					
				
		
</div>
	
			<div class="lia-user-attributes">
				
		<div class="lia-user-name">
			
	

	
			<span class="UserName lia-user-name lia-user-rank-Active-Contributor">
				
		
		
			<span class="">JL23</span>
		
		
		
		
		
		
		
	
			</span>
		

		</div>
	
			</div>
		
	</a>
</div>
		
	

	<div class="lia-user-attributes">
		

		

		

		

		

		

		

		

		

		

		

		

		

		

		
	</div>
</div>
		</td><td class="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer" aria-label="Number of kudos: 4,145">
			4145
		</td></tr>
        </tbody>
    </table>

	

	

    
</div>
	
	
</div>
	
	<div class="lia-view-all"><a class="lia-link-navigation view-all-link" id="link_25" href="/t5/forums/kudosleaderboardpage/timerange/one_month/page/1/tab/authors">View all</a></div>

</div></div></div></div><div class="lia-decoration-border-bottom"><div> </div></div></div></div>
		
			
		
			
		
			
		
			
		
	
	
</div>
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-main-secondary">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-main-secondary-content">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-single">
	
		<div class="custom-grouphubs-cards">
			
		
			<li:grouphubs-group-hubs-panel-list class="lia-limuirs-comp lia-component-grouphubs-widget-node-groups-panel-list" data-lia-limuirs-comp="{&quot;mode&quot;:&quot;DEFAULT&quot;,&quot;componentId&quot;:&quot;grouphubs.widget.node-groups-panel-list&quot;,&quot;path&quot;:&quot;limuirs\u002Fcomponents\u002Fgrouphubs\u002FGroupHubsPanelList&quot;,&quot;alias&quot;:&quot;grouphubs.widget.node-groups-panel-list&quot;,&quot;instance&quot;:0,&quot;fqPath&quot;:&quot;0\u002Flimuirs\u002Fcomponents\u002Fgrouphubs\u002FGroupHubsPanelList&quot;}"><span class="lia-component-loading"></span></li:grouphubs-group-hubs-panel-list>
		
	
		</div>
	
	

	
		
			


        <div class="custom-featured-posts">
            <section>
                <h2>Featured Topics</h2>
                <div>
                        <article class="custom-featured-post-tile ">
                            <a href="/t5/welcome-corner-discussions/can-you-remember-the-first-time-you-heard-of-sap/td-p/980" title="View topic"><img src="/t5/image/serverpage/image-id/15616i9AAB1C15A11CEEE7/image-size/large?v=v2&amp;px=999" alt="Can you remember the first time you heard of SAP" /></a> 
                            <div>
                                <h3><a href="/t5/welcome-corner-discussions/can-you-remember-the-first-time-you-heard-of-sap/td-p/980" title="View topic">Can you remember the first time you heard of SAP</a></h3>
                            </div>
                            <footer>
   <ul class="custom-tile-statistics">
       <li class="custom-tile-views"><b>62596</b> Views</li>
       <li class="custom-tile-replies"><b>207</b> replies</li>
       <li class="custom-tile-kudos"><b>51</b> kudos</li>
   </ul>
                                <div class="post-time">
                                        on 11-13-2021
                                </div>
                            </footer>
                        </article>
                        <article class="custom-featured-post-tile ">
                            <a href="/t5/coffee-corner-discussions/welcome-glad-to-see-you-here/td-p/15" title="View topic"><img src="/t5/image/serverpage/image-id/15618i197628357728695B/image-size/large?v=v2&amp;px=999" alt="Welcome, glad to see you here!" /></a> 
                            <div>
                                <h3><a href="/t5/coffee-corner-discussions/welcome-glad-to-see-you-here/td-p/15" title="View topic">Welcome, glad to see you here!</a></h3>
                            </div>
                            <footer>
   <ul class="custom-tile-statistics">
       <li class="custom-tile-views"><b>14826</b> Views</li>
       <li class="custom-tile-replies"><b>29</b> replies</li>
       <li class="custom-tile-kudos"><b>45</b> kudos</li>
   </ul>
                                <div class="post-time">
                                        on 10-07-2021
                                </div>
                            </footer>
                        </article>
                </div>
            </section>
        </div>

		
			<div class="lia-panel lia-panel-standard custom-resource-list ">
  <div class="lia-decoration-border">
    <div class="lia-decoration-border-top"><div> </div></div>
    <div class="lia-decoration-border-content">
      <div>
          <div class="lia-panel-heading-bar-wrapper">
            <div class="lia-panel-heading-bar">
              <span class="lia-panel-heading-bar-title">Community Resources</span>
            </div>
          </div>
        <div class="lia-panel-content-wrapper">
          <div class="lia-panel-content">
            <p>
These materials will help you participate and connect with other members.
</p>

<ul class="custom-resource-list-items">
<li>
     <img src="/html/assets/community-resources-tile-01.svg" alt="" />
     <h4><a href="https://community.sap.com/resources/rules-of-engagement">Rules of Engagement</a></h4>
     <p>SAP Community participants should be respectful, supportive, and professional. Get to know the rules that all members should follow, as well as the actions that could lead to the removal of a member's content.</p>
</li>
<li>
     <img src="/html/assets/community-resources-tile-02.svg" alt="" />
     <h4><a href="https://community.sap.com/resources/tutorials">SAP Community Tutorial</a></h4>
     <p>The Tour the Community tutorial provides valuable insight into navigating and participating in the community, covering everything from the basics to blogging.</p>
</li>
<li>
     <img src="/html/assets/community-resources-tile-03.svg" alt="" />
     <h4><a href="https://community.sap.com/resources/moderation">The SAP Community Team and Moderation</a></h4>
     <p>The SAP Community team is ready to answer your questions about our platform. Our team includes moderators who ensure that SAP Community remains a professional source of information, helping mediate conflicts related to moderation activities.</p>
</li>
<li>
     <img src="/html/assets/community-resources-tile-04.svg" alt="" />
     <h4><a href="https://sap.com/cmp/nl/sap-community-voice/index.html">SAP Community Voice</a></h4>
     <p>SAP Community Voice is a twice-monthly newsletter that highlights the best of SAP Community content, including blog posts, discussions, news features, tutorials, events, and more. Subscribe today!</p>
</li>
<li>
     <img src="/html/assets/community-resources-tile-04.svg" alt="" />
     <h4><a href="https://community.sap.com/resources/privacy">Privacy – FAQs</a></h4>
     <p>Get answers to frequently asked questions about profile privacy, so that you can learn how to get the most out of your SAP Community experience.</p>
</li>
<li>
     <img src="/html/assets/community-resources-tile-04.svg" alt="" />
     <h4><a href="https://community.sap.com/resources">Monthly Active Recipients According to the DSA</a></h4>
     <p>See the average monthly active recipients of the service in the Union (average over the period of the past six months) according to Article 24 (2) of the Regulation (EU) 2022/2065 of the European Parliament and of the Council of 19 October 2022 on a Single Market For Digital Services and amending Directive 2000/31/EC (Digital Services Act).</p>
</li>
</ul>

<div class="lia-view-all">
     <a class="lia-link-navigation view-all-link" href="#">Back To Top</a>
</div>

          </div>
        </div>
      </div>
    </div>
    <div class="lia-decoration-border-bottom">
      <div> </div>
    </div>
  </div>
</div>

		
	
	
</div>
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-main-bottom">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-main-bottom-content lia-mark-empty">
			
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-footer">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-common-footer">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-single">
	
		
			<div class="lia-quilt lia-quilt-footer lia-quilt-layout-custom-community-footer lia-component-quilt-footer">
	<div class="lia-quilt-row lia-quilt-row-footer-top">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-footer-top-content lia-mark-empty">
			
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-footer-main">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-footer-main-content lia-mark-empty">
			
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-footer-bottom">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-footer-bottom-content">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-single lia-mark-empty">
	
		
			
		
	
	
</div>
		</div>
	</div><div class="lia-quilt-row lia-quilt-row-footer-external">
		<div class="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-footer-external-content">
			<div class="lia-quilt-column-alley lia-quilt-column-alley-single">
	
		
			
<ds-footer
      navigation-items='[
{&quot;url&quot;: &quot;https://pages.community.sap.com/resources/sap-community-privacy-statement&quot;, &quot;title&quot;: &quot;Privacy Statement&quot;, &quot;target&quot;: &quot;_blank&quot;, &quot;label&quot;: &quot;Privacy&quot;},
{&quot;url&quot;: &quot;https://www.sap.com/corporate/en/legal/terms-of-use.html&quot;, &quot;title&quot;: &quot;Terms of Use&quot;, &quot;target&quot;: &quot;_blank&quot;, &quot;label&quot;: &quot;Terms of Use&quot;},
{&quot;url&quot;: &quot;https://www.sap.com/about/legal/copyright.html&quot;, &quot;title&quot;: &quot;View the Copyright Information&quot;, &quot;target&quot;: &quot;_blank&quot;, &quot;label&quot;: &quot;Copyright&quot;},
{&quot;url&quot;: &quot;https://www.sap.com/about/legal/impressum.html&quot;, &quot;target&quot;: &quot;_blank&quot;, &quot;label&quot;: &quot;Legal Disclosure&quot;},
{&quot;url&quot;: &quot;https://www.sap.com/about/legal/trademark.html&quot;, &quot;title&quot;: &quot;View the Trademark Information&quot;, &quot;target&quot;: &quot;_blank&quot;, &quot;label&quot;: &quot;Trademark&quot;},
{&quot;url&quot;: &quot;https://www.sap.com/cmp/nl/sap-community-voice/index.html&quot;, &quot;title&quot;: &quot;View the Community newsletter information&quot;, &quot;target&quot;: &quot;_blank&quot;, &quot;label&quot;: &quot;Newsletter&quot;},
{&quot;url&quot;: &quot;mailto:sapcommunity@sap.com&quot;, &quot;title&quot;: &quot;Get Community support&quot;, &quot;target&quot;: &quot;_blank&quot;, &quot;label&quot;: &quot;Support&quot;}
]'
      social-links='[{&quot;tooltip&quot;:&quot;Visit the Services and Support from SAP Facebook page&quot;,&quot;target&quot;:&quot;_blank&quot;,&quot;rel&quot;:&quot;noopener noreferrer&quot;,&quot;name&quot;:&quot;facebook&quot;,&quot;url&quot;:&quot;https://www.facebook.com/SAPDigitalBusinessServices/&quot;,&quot;iconName&quot;:&quot;Facebook&quot;},{&quot;tooltip&quot;:&quot;Follow the SAP Support Twitter page&quot;,&quot;target&quot;:&quot;_blank&quot;,&quot;rel&quot;:&quot;noopener noreferrer&quot;,&quot;name&quot;:&quot;twitter&quot;,&quot;url&quot;:&quot;https://twitter.com/SAPSupportHelp&quot;,&quot;iconName&quot;:&quot;Twitter&quot;},{&quot;tooltip&quot;:&quot;Subscribe to Services and Support from SAP&quot;,&quot;target&quot;:&quot;_blank&quot;,&quot;rel&quot;:&quot;noopener noreferrer&quot;,&quot;name&quot;:&quot;youtube&quot;,&quot;url&quot;:&quot;https://www.youtube.com/user/SAPSupportInfo&quot;,&quot;iconName&quot;:&quot;Youtube&quot;},{&quot;tooltip&quot;:&quot;Follow SAP Support Help&quot;,&quot;target&quot;:&quot;_blank&quot;,&quot;rel&quot;:&quot;noopener noreferrer&quot;,&quot;name&quot;:&quot;linkedin&quot;,&quot;url&quot;:&quot;https://www.linkedin.com/groups/138840&quot;,&quot;iconName&quot;:&quot;LinkedIn&quot;}]'
      social-links-title='"Follow"'
      is-light-theme="false"
is-show-cookie-preferences="true"
    ></ds-footer>



		
	
	
</div>
		</div>
	</div>
</div>
		
	
	
</div>
		</div>
	</div>
</div>
	

	
						</div>
					
			</div>								
		</div>
	</div>

				
			
		</center>
	</div>
	
	
	
	
	   <script type="text/javascript">_satellite.pageBottom();</script>

<!-- skin Page Hitbox Content START -->

    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>


	
	
	<script type="text/javascript">
	new Image().src = ["/","b","e","a","c","o","n","/","2","1","0","9","7","1","4","9","8","1","6","_","1","7","0","6","7","1","9","7","3","9","8","8","9",".","g","i","f"].join("");
</script>
<script language="javascript" type="text/javascript">
<!--
LITHIUM.ScriptLoader.ready(['common', 'body'], function () {LITHIUM.Sandbox.restore();
LITHIUM.jQuery.fn.cssData.defaults = {"dataPrefix":"lia-js-data","pairDelimeter":"-","prefixDelimeter":"-"};
(($) => {
$(document).ready(() => {
    var Prism = window.PrsmK || window.Prism;
    var classupdates = [
            {'old': 'language-visual', 'new': 'language-visual-basic'},
            {'old': '-basic', 'new': ''},
            {'old': 'language-excel', 'new': 'language-excel-formula'},
            {'old': '-formula', 'new': ''}
        ];
    const fixer = (el5) => {
        $.each(classupdates, (i5, v5) => {
            if ((0 < (v5.old || '').length) && $(el5).hasClass(v5.old)) {
                if (0 < (v5.new || '').length) $(el5).addClass(v5.new);
                $(el5).removeClass(v5.old);
            }
        });
    };
    const worker = (el) => {
        fixer(el);
        //add classes for answers and blogs posts
        if(($(el)[0].className.length > 0) && $(el)[0].className.match(/language-(\w+)/) && !$(el).hasClass('lia-code-sample')) $(el).addClass('lia-code-sample');

        if($(el)[0].className.length === 0) $(el).addClass('lia-code-sample language-abap');
        //end add classes for answers and blogs

        if (!$(el).hasClass('line-numbers')) $(el).addClass('line-numbers');
        if ($('> code', el).length < 1){
            $(el).wrapInner('<code></code>');
            if($(el).hasClass("language-abap")){
                $(el).find('> code').addClass('language-abap');
            }
        }
        $('> code', el).each((i, v) => {
            fixer(v);
            if ($('.line-numbers-rows', v).length < 1) Prism.highlightElement(v);
        });
    };
    const styleNewSamples = () => {
        $('body pre.lia-code-sample').each((i2, v2) => {
            worker(v2);
        });
        $('.mce-edit-area iframe').each((i3, v3) => {
            $(v3).contents().find('body pre.lia-code-sample').each((i4, v4) => {
                worker(v4);
            });
        });
        //add classes for answers and blogs posts
        $('body pre').each((i5, v5) => {
            worker(v5);
        });
    };
    styleNewSamples();
    setInterval(() => {
        styleNewSamples();
    }, 500);
});
})(LITHIUM.jQuery);

LITHIUM.CommunityJsonObject.User.policies['forums.action.message-view.batch-messages.allow'] = false;
LITHIUM.InformationBox({"updateFeedbackEvent":"LITHIUM:updateAjaxFeedback","componentSelector":"#informationbox_1dec0935253fb","feedbackSelector":".InfoMessage"});
LITHIUM.InformationBox({"updateFeedbackEvent":"LITHIUM:updateAjaxFeedback","componentSelector":"#informationbox_1dec0935253fb_0","feedbackSelector":".InfoMessage"});
LITHIUM.InformationBox({"updateFeedbackEvent":"LITHIUM:updateAjaxFeedback","componentSelector":"#informationbox_1dec0935253fb_1","feedbackSelector":".InfoMessage"});
LITHIUM.InformationBox({"updateFeedbackEvent":"LITHIUM:updateAjaxFeedback","componentSelector":"#informationbox_1dec0935253fb_2","feedbackSelector":".InfoMessage"});
LITHIUM.AjaxFeedback(".lia-inline-ajax-feedback", "LITHIUM:hideAjaxFeedback", ".lia-inline-ajax-feedback-persist");
LITHIUM.Placeholder();
LITHIUM.AutoComplete({"options":{"autosuggestionAvailableInstructionText":"Auto-suggestions available. Use Up and Down arrow keys to navigate.","triggerTextLength":0,"autocompleteInstructionsSelector":"#autocompleteInstructionsText_1dec0935253fb","updateInputOnSelect":true,"loadingText":"Searching...","emptyText":"No Matches","successText":"Results:","defaultText":"Enter a search word","autosuggestionUnavailableInstructionText":"No suggestions available","disabled":false,"footerContent":[{"scripts":"\n\n(function(b){LITHIUM.Link=function(f){function g(a){var c=b(this),e=c.data(\"lia-action-token\");!0!==c.data(\"lia-ajax\")&&void 0!==e&&!1===a.isPropagationStopped()&&!1===a.isImmediatePropagationStopped()&&!1===a.isDefaultPrevented()&&(a.stop(),a=b(\"\\x3cform\\x3e\",{method:\"POST\",action:c.attr(\"href\"),enctype:\"multipart/form-data\"}),e=b(\"\\x3cinput\\x3e\",{type:\"hidden\",name:\"lia-action-token\",value:e}),a.append(e),b(document.body).append(a),a.submit(),d.trigger(\"click\"))}var d=b(document);void 0===d.data(\"lia-link-action-handler\")&&\n(d.data(\"lia-link-action-handler\",!0),d.on(\"click.link-action\",f.linkSelector,g),b.fn.on=b.wrap(b.fn.on,function(a){var c=a.apply(this,b.makeArray(arguments).slice(1));this.is(document)&&(d.off(\"click.link-action\",f.linkSelector,g),a.call(this,\"click.link-action\",f.linkSelector,g));return c}))}})(LITHIUM.jQuery);\nLITHIUM.Link({\n  \"linkSelector\" : \"a.lia-link-ticket-post-action\"\n});LITHIUM.AjaxSupport.defaultAjaxFeedbackHtml = \"<div class=\\\"lia-inline-ajax-feedback lia-component-common-widget-ajax-feedback\\\">\\n\\t\\t\\t<div class=\\\"AjaxFeedback\\\" id=\\\"ajaxFeedback_1dec09384018d\\\"><\\/div>\\n\\t\\t\\t\\n\\t\\n\\n\\t\\n\\n\\t\\t<\\/div>\";LITHIUM.AjaxSupport.defaultAjaxErrorHtml = \"<span id=\\\"feedback-errorfeedback_1dec09394e2ae\\\"> <\\/span>\\n\\n\\t\\n\\t\\t<div class=\\\"InfoMessage lia-panel-feedback-inline-alert lia-component-common-widget-feedback\\\" id=\\\"feedback_1dec09394e2ae\\\">\\n\\t\\t\\t<div role=\\\"alert\\\" class=\\\"lia-text\\\">\\n\\t\\t\\t\\t\\n\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t<p ng-non-bindable=\\\"\\\" tabindex=\\\"0\\\">\\n\\t\\t\\t\\t\\t\\tSorry, unable to complete the action you requested.\\n\\t\\t\\t\\t\\t<\\/p>\\n\\t\\t\\t\\t\\n\\n\\t\\t\\t\\t\\n\\n\\t\\t\\t\\t\\n\\n\\t\\t\\t\\t\\n\\t\\t\\t<\\/div>\\n\\n\\t\\t\\t\\n\\t\\t<\\/div>\";LITHIUM.AjaxSupport.fromLink('#disableAutoComplete_1dec0937bb5a3', 'disableAutoComplete', '#ajaxfeedback_1dec0935253fb_0', 'LITHIUM:ajaxError', {}, 'dc9DvTlI7GMW-kgeOajwUOgWqcS3FW6MhtNlsyle-l8.', 'ajax');","content":"<a class=\"lia-link-navigation lia-autocomplete-toggle-off lia-link-ticket-post-action lia-component-search-action-disable-auto-complete\" data-lia-action-token=\"OdHMbXnkNLho8IoC632neydGjDRpLe4B-DCMJH-3QpQ.\" rel=\"nofollow\" id=\"disableAutoComplete_1dec0937bb5a3\" href=\"https://community.sap.com/t5/community/page.disableautocomplete:disableautocomplete?t:cp=action/contributions/searchactions\">Turn off suggestions<\/a>"}],"prefixTriggerTextLength":3},"inputSelector":"#messageSearchField_1dec0935253fb_0","redirectToItemLink":false,"url":"https://community.sap.com/t5/community/page.searchformv32.messagesearchfield.messagesearchfield:autocomplete?t:cp=search/contributions/page","resizeImageEvent":"LITHIUM:renderImages"});
LITHIUM.AutoComplete({"options":{"autosuggestionAvailableInstructionText":"Auto-suggestions available. Use Up and Down arrow keys to navigate.","triggerTextLength":0,"autocompleteInstructionsSelector":"#autocompleteInstructionsText_1dec0935253fb_0","updateInputOnSelect":true,"loadingText":"Searching...","emptyText":"No Matches","successText":"Results:","defaultText":"Enter a search word","autosuggestionUnavailableInstructionText":"No suggestions available","disabled":false,"footerContent":[{"scripts":"\n\n(function(b){LITHIUM.Link=function(f){function g(a){var c=b(this),e=c.data(\"lia-action-token\");!0!==c.data(\"lia-ajax\")&&void 0!==e&&!1===a.isPropagationStopped()&&!1===a.isImmediatePropagationStopped()&&!1===a.isDefaultPrevented()&&(a.stop(),a=b(\"\\x3cform\\x3e\",{method:\"POST\",action:c.attr(\"href\"),enctype:\"multipart/form-data\"}),e=b(\"\\x3cinput\\x3e\",{type:\"hidden\",name:\"lia-action-token\",value:e}),a.append(e),b(document.body).append(a),a.submit(),d.trigger(\"click\"))}var d=b(document);void 0===d.data(\"lia-link-action-handler\")&&\n(d.data(\"lia-link-action-handler\",!0),d.on(\"click.link-action\",f.linkSelector,g),b.fn.on=b.wrap(b.fn.on,function(a){var c=a.apply(this,b.makeArray(arguments).slice(1));this.is(document)&&(d.off(\"click.link-action\",f.linkSelector,g),a.call(this,\"click.link-action\",f.linkSelector,g));return c}))}})(LITHIUM.jQuery);\nLITHIUM.Link({\n  \"linkSelector\" : \"a.lia-link-ticket-post-action\"\n});LITHIUM.AjaxSupport.fromLink('#disableAutoComplete_1dec093c027ef', 'disableAutoComplete', '#ajaxfeedback_1dec0935253fb_0', 'LITHIUM:ajaxError', {}, 'P9TuVh05ZrfUpf-Q3uCWtvr9vBmep8ytgV4EJF2IA1c.', 'ajax');","content":"<a class=\"lia-link-navigation lia-autocomplete-toggle-off lia-link-ticket-post-action lia-component-search-action-disable-auto-complete\" data-lia-action-token=\"rI631_n8-UgXWzktHbBbkM-2VRXTD9DHFxXSNuzLg7I.\" rel=\"nofollow\" id=\"disableAutoComplete_1dec093c027ef\" href=\"https://community.sap.com/t5/community/page.disableautocomplete:disableautocomplete?t:cp=action/contributions/searchactions\">Turn off suggestions<\/a>"}],"prefixTriggerTextLength":3},"inputSelector":"#messageSearchField_1dec0935253fb_1","redirectToItemLink":false,"url":"https://community.sap.com/t5/community/page.searchformv32.tkbmessagesearchfield.messagesearchfield:autocomplete?t:cp=search/contributions/page","resizeImageEvent":"LITHIUM:renderImages"});
LITHIUM.AutoComplete({"options":{"autosuggestionAvailableInstructionText":"Auto-suggestions available. Use Up and Down arrow keys to navigate.","triggerTextLength":0,"autocompleteInstructionsSelector":"#autocompleteInstructionsText_1dec0935253fb_1","updateInputOnSelect":true,"loadingText":"Searching for users...","emptyText":"No Matches","successText":"Users found:","defaultText":"Enter a user name or rank","autosuggestionUnavailableInstructionText":"No suggestions available","disabled":false,"footerContent":[{"scripts":"\n\n(function(b){LITHIUM.Link=function(f){function g(a){var c=b(this),e=c.data(\"lia-action-token\");!0!==c.data(\"lia-ajax\")&&void 0!==e&&!1===a.isPropagationStopped()&&!1===a.isImmediatePropagationStopped()&&!1===a.isDefaultPrevented()&&(a.stop(),a=b(\"\\x3cform\\x3e\",{method:\"POST\",action:c.attr(\"href\"),enctype:\"multipart/form-data\"}),e=b(\"\\x3cinput\\x3e\",{type:\"hidden\",name:\"lia-action-token\",value:e}),a.append(e),b(document.body).append(a),a.submit(),d.trigger(\"click\"))}var d=b(document);void 0===d.data(\"lia-link-action-handler\")&&\n(d.data(\"lia-link-action-handler\",!0),d.on(\"click.link-action\",f.linkSelector,g),b.fn.on=b.wrap(b.fn.on,function(a){var c=a.apply(this,b.makeArray(arguments).slice(1));this.is(document)&&(d.off(\"click.link-action\",f.linkSelector,g),a.call(this,\"click.link-action\",f.linkSelector,g));return c}))}})(LITHIUM.jQuery);\nLITHIUM.Link({\n  \"linkSelector\" : \"a.lia-link-ticket-post-action\"\n});LITHIUM.AjaxSupport.fromLink('#disableAutoComplete_1dec093e0a48f', 'disableAutoComplete', '#ajaxfeedback_1dec0935253fb_0', 'LITHIUM:ajaxError', {}, 'FCuJpSQclliCvF1rVKMbq0QUQlwqH_FTdYTWgCl6arg.', 'ajax');","content":"<a class=\"lia-link-navigation lia-autocomplete-toggle-off lia-link-ticket-post-action lia-component-search-action-disable-auto-complete\" data-lia-action-token=\"Lx_75xruRV4_7Tm3Zb_sm3PO3XJABGCn_j06bXim_og.\" rel=\"nofollow\" id=\"disableAutoComplete_1dec093e0a48f\" href=\"https://community.sap.com/t5/community/page.disableautocomplete:disableautocomplete?t:cp=action/contributions/searchactions\">Turn off suggestions<\/a>"}],"prefixTriggerTextLength":0},"inputSelector":"#userSearchField_1dec0935253fb","redirectToItemLink":false,"url":"https://community.sap.com/t5/community/page.searchformv32.usersearchfield.usersearchfield:autocomplete?t:cp=search/contributions/page","resizeImageEvent":"LITHIUM:renderImages"});
LITHIUM.AjaxSupport({"ajaxOptionsParam":{"event":"LITHIUM:userExistsQuery","parameters":{"javascript.ignore_combine_and_minify":"true"}},"tokenId":"ajax","elementSelector":"#userSearchField_1dec0935253fb","action":"userExistsQuery","feedbackSelector":"#ajaxfeedback_1dec0935253fb_0","url":"https://community.sap.com/t5/community/page.searchformv32.usersearchfield:userexistsquery?t:cp=search/contributions/page","ajaxErrorEventName":"LITHIUM:ajaxError","token":"JAdnDitpbaDVdIzWOm98TNA2LeF-B-7MarBfbeAR0hk."});
LITHIUM.AutoComplete({"options":{"autosuggestionAvailableInstructionText":"Auto-suggestions available. Use Up and Down arrow keys to navigate.","triggerTextLength":0,"autocompleteInstructionsSelector":"#autocompleteInstructionsText_1dec0935253fb_2","updateInputOnSelect":true,"loadingText":"Searching...","emptyText":"No Matches","successText":"Results:","defaultText":"Enter a search word","autosuggestionUnavailableInstructionText":"No suggestions available","disabled":false,"footerContent":[{"scripts":"\n\n(function(b){LITHIUM.Link=function(f){function g(a){var c=b(this),e=c.data(\"lia-action-token\");!0!==c.data(\"lia-ajax\")&&void 0!==e&&!1===a.isPropagationStopped()&&!1===a.isImmediatePropagationStopped()&&!1===a.isDefaultPrevented()&&(a.stop(),a=b(\"\\x3cform\\x3e\",{method:\"POST\",action:c.attr(\"href\"),enctype:\"multipart/form-data\"}),e=b(\"\\x3cinput\\x3e\",{type:\"hidden\",name:\"lia-action-token\",value:e}),a.append(e),b(document.body).append(a),a.submit(),d.trigger(\"click\"))}var d=b(document);void 0===d.data(\"lia-link-action-handler\")&&\n(d.data(\"lia-link-action-handler\",!0),d.on(\"click.link-action\",f.linkSelector,g),b.fn.on=b.wrap(b.fn.on,function(a){var c=a.apply(this,b.makeArray(arguments).slice(1));this.is(document)&&(d.off(\"click.link-action\",f.linkSelector,g),a.call(this,\"click.link-action\",f.linkSelector,g));return c}))}})(LITHIUM.jQuery);\nLITHIUM.Link({\n  \"linkSelector\" : \"a.lia-link-ticket-post-action\"\n});LITHIUM.AjaxSupport.fromLink('#disableAutoComplete_1dec093fd9019', 'disableAutoComplete', '#ajaxfeedback_1dec0935253fb_0', 'LITHIUM:ajaxError', {}, 'MSSa6TmE2o65hmvgik4vAa5jlgMGCr3-R1N9YgnhzZU.', 'ajax');","content":"<a class=\"lia-link-navigation lia-autocomplete-toggle-off lia-link-ticket-post-action lia-component-search-action-disable-auto-complete\" data-lia-action-token=\"hQZJXhtt9qD67T5KrEs0Oe_Q4Q7YAs9k3WM5Ief9GrY.\" rel=\"nofollow\" id=\"disableAutoComplete_1dec093fd9019\" href=\"https://community.sap.com/t5/community/page.disableautocomplete:disableautocomplete?t:cp=action/contributions/searchactions\">Turn off suggestions<\/a>"}],"prefixTriggerTextLength":0},"inputSelector":"#noteSearchField_1dec0935253fb_0","redirectToItemLink":false,"url":"https://community.sap.com/t5/community/page.searchformv32.notesearchfield.notesearchfield:autocomplete?t:cp=search/contributions/page","resizeImageEvent":"LITHIUM:renderImages"});
LITHIUM.AutoComplete({"options":{"autosuggestionAvailableInstructionText":"Auto-suggestions available. Use Up and Down arrow keys to navigate.","triggerTextLength":0,"autocompleteInstructionsSelector":"#autocompleteInstructionsText_1dec0935253fb_3","updateInputOnSelect":true,"loadingText":"Searching...","emptyText":"No Matches","successText":"Results:","defaultText":"Enter a search word","autosuggestionUnavailableInstructionText":"No suggestions available","disabled":false,"footerContent":[{"scripts":"\n\n(function(b){LITHIUM.Link=function(f){function g(a){var c=b(this),e=c.data(\"lia-action-token\");!0!==c.data(\"lia-ajax\")&&void 0!==e&&!1===a.isPropagationStopped()&&!1===a.isImmediatePropagationStopped()&&!1===a.isDefaultPrevented()&&(a.stop(),a=b(\"\\x3cform\\x3e\",{method:\"POST\",action:c.attr(\"href\"),enctype:\"multipart/form-data\"}),e=b(\"\\x3cinput\\x3e\",{type:\"hidden\",name:\"lia-action-token\",value:e}),a.append(e),b(document.body).append(a),a.submit(),d.trigger(\"click\"))}var d=b(document);void 0===d.data(\"lia-link-action-handler\")&&\n(d.data(\"lia-link-action-handler\",!0),d.on(\"click.link-action\",f.linkSelector,g),b.fn.on=b.wrap(b.fn.on,function(a){var c=a.apply(this,b.makeArray(arguments).slice(1));this.is(document)&&(d.off(\"click.link-action\",f.linkSelector,g),a.call(this,\"click.link-action\",f.linkSelector,g));return c}))}})(LITHIUM.jQuery);\nLITHIUM.Link({\n  \"linkSelector\" : \"a.lia-link-ticket-post-action\"\n});LITHIUM.AjaxSupport.fromLink('#disableAutoComplete_1dec09417c6c3', 'disableAutoComplete', '#ajaxfeedback_1dec0935253fb_0', 'LITHIUM:ajaxError', {}, '_W37tB_qpQFq_TN1ufbzsClq1QCxQ7Z5n3KRgKslrrE.', 'ajax');","content":"<a class=\"lia-link-navigation lia-autocomplete-toggle-off lia-link-ticket-post-action lia-component-search-action-disable-auto-complete\" data-lia-action-token=\"FMNnYbuG6yvsqJ51ECIGkMDMhOwa71ITRKn6M4KvJfw.\" rel=\"nofollow\" id=\"disableAutoComplete_1dec09417c6c3\" href=\"https://community.sap.com/t5/community/page.disableautocomplete:disableautocomplete?t:cp=action/contributions/searchactions\">Turn off suggestions<\/a>"}],"prefixTriggerTextLength":0},"inputSelector":"#productSearchField_1dec0935253fb","redirectToItemLink":false,"url":"https://community.sap.com/t5/community/page.searchformv32.productsearchfield.productsearchfield:autocomplete?t:cp=search/contributions/page","resizeImageEvent":"LITHIUM:renderImages"});
LITHIUM.Link({"linkSelector":"a.lia-link-ticket-post-action"});
LITHIUM.AjaxSupport.fromLink('#enableAutoComplete_1dec0935253fb', 'enableAutoComplete', '#ajaxfeedback_1dec0935253fb_0', 'LITHIUM:ajaxError', {}, 'CUTCF6yXaAZG7ndU7WxXv8Xsq6y9p3JPFsCcdmj-YJA.', 'ajax');
LITHIUM.Tooltip({"bodySelector":"body#lia-body","delay":30,"enableOnClickForTrigger":false,"predelay":10,"triggerSelector":"#link_1dec0935253fb","tooltipContentSelector":"#link_1dec0935253fb_0-tooltip-element .content","position":["bottom","left"],"tooltipElementSelector":"#link_1dec0935253fb_0-tooltip-element","events":{"def":"focus mouseover keydown,blur mouseout keydown"},"hideOnLeave":true});
LITHIUM.HelpIcon({"selectors":{"helpIconSelector":".help-icon .lia-img-icon-help"}});
LITHIUM.SearchAutoCompleteToggle({"containerSelector":"#searchautocompletetoggle_1dec0935253fb","enableAutoCompleteSelector":".search-autocomplete-toggle-link","enableAutocompleteSuccessEvent":"LITHIUM:ajaxSuccess:enableAutoComplete","disableAutoCompleteSelector":".lia-autocomplete-toggle-off","disableAutocompleteSuccessEvent":"LITHIUM:ajaxSuccess:disableAutoComplete","autoCompleteSelector":".lia-autocomplete-input"});
LITHIUM.SearchForm({"asSearchActionIdSelector":".lia-as-search-action-id","useAutoComplete":true,"selectSelector":".lia-search-form-granularity","useClearSearchButton":false,"buttonSelector":".lia-button-searchForm-action","asSearchActionIdParamName":"as-search-action-id","formSelector":"#lia-searchformV32_1dec0935253fb","nodesModel":{"khhcw49343|community":{"title":"Search Community: SAP Community","inputSelector":".lia-search-input-message"},"tkb|tkb":{"title":"Knowledge base","inputSelector":".lia-search-input-tkb-article"},"product|product":{"title":"Managed tags","inputSelector":".lia-search-input-product"},"user|user":{"title":"Users","inputSelector":".lia-search-input-user"}},"asSearchActionIdHeaderKey":"X-LI-AS-Search-Action-Id","inputSelector":"#messageSearchField_1dec0935253fb_0:not(.lia-js-hidden)","clearSearchButtonSelector":null});
; (function () {
    var buttonPrev = "<button type='button' aria-label='Previous' class='slick-prev'><span class='lia-fa lia-fa-chevron-left' aria-hidden='true'></span></button>";
    var buttonNext = "<button type='button' aria-label='Next' class='slick-next'><span class='lia-fa lia-fa-chevron-right' aria-hidden='true'></span></button>";

    $(document).ready(function () {
        slickLoaded(0);

        function slickLoaded(count) {
            if (typeof $.fn.slick === "function") {
                $('.hero-carousel-slider.slickslide').not('.slick-initialized').each(function () {
                    var $this = $(this);
                    var numSlides = $(this).children(".custom-slider-slide").length;

                    if (numSlides > 0) {

                      var options = {
                          infinite: true,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          dots: true,
                          arrows: true,
                          prevArrow: buttonPrev,
                          nextArrow: buttonNext,
                          variableWidth: false,
                          accessibility: false
                      };

                      $this.slick(options);
                  	}
                });
            } else if (count < 100) {
                setTimeout(function () {
                    slickLoaded(count + 1);
                }, 100);
            }
        }
    });
})();

LITHIUM.InformationBox({"updateFeedbackEvent":"LITHIUM:updateAjaxFeedback","componentSelector":"#pageInformation","feedbackSelector":".InfoMessage"});
LITHIUM.InformationBox({"updateFeedbackEvent":"LITHIUM:updateAjaxFeedback","componentSelector":"#informationbox","feedbackSelector":".InfoMessage"});
       ;(function($) {
           $(document).ready(function() {
 
               var getMessages = function (spinnerTarget, clearMessages) {
                   var parentComponent = $('#custom-loader');
                   var messageTarget = $('.message-list', parentComponent);
                   var currentPage = null;
                   var returnedMessageCount = 0;
                   try {
                       currentPage = parseInt($(messageTarget).attr('data-attrib-current-page'), 10);
                   } catch (e) {
                       currentPage = 0;
                   }
                   
                   $.ajax({
                       type: 'post',
                       url : '/plugins/custom/sap/sap/theme-lib.community-activity?tid=735677581061786987',
                       dataType: 'json',
                       data: {"currentPage": currentPage, "node": "khhcw49343", "scope":"all", "messageListType": $(messageTarget).attr('data-attrib-message-list-type'), "allowedInteractionStyles": "none"},
                       context: parentComponent,
                       beforeSend: function(jqXHR, settings) {
                           $('#custom-loader-messages .errors', parentComponent).empty();
                           $(spinnerTarget).prepend('<div class="spinner"></div>');
                       },
                       error: function (jqXHR, textStatus, errorThrown) {
                           $('#custom-loader-messages .errors', parentComponent).append(errorThrown);
                       },
                       success: function (data, textStatus, jqXHR) {
                           if (data.status == 'success') {
                                let totalListSize = messageTarget.children(".custom-message-tile").length;
                               if (clearMessages) {
                                   messageTarget.empty();
                               }
                               if (data.messages.length > 0) {
                                   messageTarget.append(data.messages);
                                   let messageMatch =  data.messages.match(/custom-message-tile/gi)
                                   returnedMessageCount = messageMatch ? messageMatch.length : 0;
                               } else {
                                   if (clearMessages) {
                                       messageTarget.append('<div class="no-messages">No posts to display.</div>');
                                   }
                               }
                                totalListSize = messageTarget.children(".custom-message-tile").length;
                               if (data.EOR == 'true') {
                                   $('#custom-loader-button').addClass('disabled');
                               } else {
                                   $('#custom-loader-button').removeClass('disabled');
                               }
                               //Set aria text regarding number of messages loaded. Since count is set in JS it cannot be passed to text key.
                               let statusString = "";
                               if (returnedMessageCount === 1){
                                    statusString += " new message loaded.";
                               }else{
                                    statusString += returnedMessageCount + " new messages loaded. ";
                               }
                               statusString += totalListSize + " total items in list.";
                               $('#load-more-aria').text(statusString);
                               //Find the first newly loaded message and set focus to the first focusable child.
                                $("#custom-loader #custom-loader-messages .message-list .custom-message-tile").eq(-returnedMessageCount).find(':focusable')[0].focus();
                           } else {
                               $('#custom-loader-messages .errors', parentComponent).append(data.message);
                           }
                       },
                       complete: function(jqXHR, textStatus) {
                           $('.spinner', spinnerTarget).remove();
                       }
                   });
               };
 
               $('#community-activity-sorted-by').change(function() {
                   var messageTarget = $('#custom-loader .message-list');
                   messageTarget.attr('data-attrib-message-list-type', $(this).val());
                   $(messageTarget).attr('data-attrib-current-page', '0');
                   getMessages($('#custom-loader'), true);
               });
 
               $('#custom-loader-button').click( function(evt) {
                   evt.preventDefault();
                   if ($(this).hasClass('disabled')) {
                       return;
                   }
                   var currentPage = null;
                   var messageTarget = $('#custom-loader .message-list');
                   try {
                       currentPage = parseInt($(messageTarget).attr('data-attrib-current-page'), 10);
                   } catch (e) {
                       currentPage = 0;
                   }
                   $(messageTarget).attr('data-attrib-current-page', (currentPage + 1));
                   getMessages($('#custom-loader-button'), false);
               });
           });
       })(LITHIUM.jQuery);

LITHIUM.UserListActual({"acceptedSolutionsColumnSelector":".UserList .lia-list-row .acceptedSolutionsCountColumn","kudosColumnSelector":".UserList .lia-list-row .kudosCountColumn"});

            ;(function ($) {
                $('.custom-featured-posts .view-all-link').click(function() {
                    var text = $(this).text() == 'View all featured topics' ? 'Close' : 'View all featured topics';

                    $('.custom-featured-posts .custom-featured-post-tile.article-hidden').toggleClass("hide");
                    
                    $(this).text(text).toggleClass('close-link');
                });
            })(LITHIUM.jQuery);


;document.createElement('ds-footer');
document.addEventListener('openCookiePreferences', (e) => {
  truste.eu.reopenBanner();

});

LITHIUM.PartialRenderProxy({"limuirsComponentRenderedEvent":"LITHIUM:limuirsComponentRendered","relayEvent":"LITHIUM:partialRenderProxyRelay","listenerEvent":"LITHIUM:partialRenderProxy"});
LITHIUM.AjaxSupport({"ajaxOptionsParam":{"event":"LITHIUM:partialRenderProxyRelay","parameters":{"javascript.ignore_combine_and_minify":"true"}},"tokenId":"ajax","elementSelector":document,"action":"partialRenderProxyRelay","feedbackSelector":false,"url":"https://community.sap.com/t5/community/page.liabase.basebody.partialrenderproxy:partialrenderproxyrelay","ajaxErrorEventName":"LITHIUM:ajaxError","token":"9mbIcbvv8O30STuBCbkXzuc2NKISDT0KVCFzROpW1bw."});
LITHIUM.Auth.API_URL = "/t5/util/authcheckpage";
LITHIUM.Auth.LOGIN_URL_TMPL = "/plugins/common/feature/oidcss/sso_login_redirect/providerid/sap_ids?referer=https%3A%2F%2FREPLACE_TEXT";
LITHIUM.Auth.KEEP_ALIVE_URL = "/t5/status/blankpage?keepalive";
LITHIUM.Auth.KEEP_ALIVE_TIME = 180000;
LITHIUM.Auth.CHECK_SESSION_TOKEN = 'gOwIDovbLNjMqKYVHGiCWjklJEAw63GbIWa9A1grXJ4.';
LITHIUM.AjaxSupport.useTickets = false;
LITHIUM.Loader.runJsAttached();

});
// -->
</script></body>
</html>