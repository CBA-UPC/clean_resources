"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["campaign_election_components_LiveDataWidget_js"],{"./campaign/election/components/LiveDataWidget.js":(e,l,t)=>{t.r(l),t.d(l,{default:);var a=t("../node_modules/react/index.js"),n=t("../node_modules/prop-types/index.js"),i=t.n(n),s=t("./utils/util.js"),c=t("./components/common/AnchorLink.js"),r=(0,s.pR)();function o(e){var l=e.widgetData,t=e.type,n=e.linkBlinker;if((0,s.L5)(l)&&("liveblog"==t&&(0,s.qt)(l.lbcontent)||"articleshow"==t&&l.id)){var i,o,v,d,p,u="/";return"liveblog"==t&&(o=(null===(v=l.lbcontainer)||void 0===v?void 0:v.msName)||r.locale.live_blog,u=(null===(d=l.lbcontainer)||void 0===d?void 0:d.override)||(null===(p=l.lbcontainer)||void 0===p?void 0:p.wu)),"articleshow"==t&&(o=l.hl,u=l.override||l.wu||(0,s.nu)(l)),a.createElement("div",{className:"livBlogHP"},a.createElement("div",{className:"HP_liveBlog ".concat("articleshow"==t?"article_hp":"")},a.createElement("div",{className:"liveblog-heading-area"},a.createElement("h1",null,a.createElement(c.Z,{href:u},a.createElement("span",{className:"text_ellipsis"},n&&a.createElement("span",{className:"liveblink_newscard"},"Live"),o)))),!(0,s.an)()&&a.createElement("ul",{className:"livepost"},"liveblog"==t&&(null===(i=l.lbcontent)||void 0===i?void 0:i.map((function(e){return e?a.createElement(m,{item:e,url:u,type:t}):null}))),"articleshow"==t&&a.createElement(m,{item:l,url:u,type:t}))))}return null}var m=function(e){var l=e.item,t=e.url,n=e.type;return a.createElement("li",{className:"livelist",key:l.msid||l.title},"liveblog"==n&&a.createElement(a.Fragment,null,a.createElement("div",{className:"blog_timestamp"},a.createElement("span",{className:"blog_time"},l.shortDateTime)),a.createElement("div",{className:"blog_txt"},a.createElement(c.Z,{className:"anchHide",href:t},a.createElement("b",null,l.title)),a.createElement("div",{className:"text_ellipsis"},a.createElement(c.Z,{href:t},l.smallDesc||l.smalldesc)))),"articleshow"==n&&a.createElement("div",{className:"blog_txt"},a.createElement("div",{className:"text_ellipsis"},a.createElement(c.Z,{href:t},l.syn))))};m.propTypes={item:i().object,type:i().string,url:i().string},o.propTypes={widgetData:i().object,type:i().string,linkBlinker:i().bool};const v=o}}]);