"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7068],{"9Y+p":function(e,n,t){t.d(n,{Z:function(){return a}});var o=t("QslU"),r=(t("Oz0t"),t("V67U")),i=t.n(r);.displayName="LayoutFullHeight",a.propTypes={children:i().node}},Y680:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t("11lP"),r=t("dLhX"),i=t("QslU"),a=t("V67U"),s=t.n(a),c=t("Oz0t");function u(e){var n=e.onLoad,o=void 0===n?n,r=e.src,a=(0,c.useState)(""),s=a[0],u=a[1],l=(0,c.useState)(!1),p=l[0],d=l[1];return(0,c.useEffect)((function(){t.e(7041).then(t.bind(t,"NyNy")).then((function(e){var n=e.marked,t=new window.XMLHttpRequest;t.open("GET",r,!0),t.onload=function(){4===t.readyState&&200===t.status&&(u(n(t.responseText)),d(!0))},t.send(null)}))}),[r]),(0,c.useEffect)((function(){if(p){o({html:s,setHtml:u});var e=document.location.hash.substring(1);if(e){var n=document.getElementById(e);n&&n.scrollIntoView({block:"start",behavior:"smooth"})}}}),[p,o]),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})}u.displayName="ServiceMarkdown";var l=u,p=function(e){var n=e.src,t=(0,r.Z)(e,["src"]);return(0,i.jsx)("div",{className:"ma-MarkdownWrapper",children:(0,i.jsx)(l,(0,o.Z)({src:n},t))})};p.displayName="MarkdownWrapper",p.propTypes={src:s().string};var d=p},IBpw:function(e,n,t){var o=t("11lP"),r=t("dLhX"),i=t("QslU"),a=t("Oz0t"),s=t("V67U"),c=t.n(s),u=t("bBVy"),l=t("r4X9"),p=t("3Fx5"),d=function(e){var n=e.seoDefinition,t=void 0===n?{}:n,s=(0,a.useContext)(u.Z),c=s.i18n,d=s.domain,f=(0,p.TH)(),m=""+d.get("config").get("BASE_IMAGES_URL_STATICS"),g=d.get("config").get("CURRENT_ENV_HOST");if(t&&Object.keys(t).length){var h=t.title,y=void 0===h?"HOME_SEO_TITLE":h,x=t.meta,v=void 0===x?[]:x,j=t.link,E=void 0===j?[]:j,S=v.find((),L=""+g+f.pathname,_=m+"/images/icons/icon-square-192x192.ff91f9a5f0.png";return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,i.jsx)("title",{children:c.t(y)}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:c.t(y)}),(0,i.jsx)("meta",{property:"og:url",content:L}),(0,i.jsx)("meta",{property:"og:image",content:_}),S&&(0,i.jsx)("meta",{property:"og:description",content:c.t(S.content)}),v.map((function(e){return(0,i.jsx)("meta",{name:e.name,property:e.property,content:c.t(e.content)},e.name)})),E.map((function(e){return(0,i.jsx)("link",(0,o.Z)({},(t=(n=e).name,a=n.content,s=(0,r.Z)(n,["name","content"]),(0,o.Z)({rel:t,href:a,key:t},s))));var n,t,a,s}))]})}return null};d.displayName="SeoHeadTags",d.propTypes={seoDefinition:c().object},n.Z=d},x2Hs:function(e,n,t){t.r(n),t.d(n,{default:);var o=t("bBVy"),r=t("Tim7"),i=t("jbFD"),a=t.n(i),s=t("Oz0t"),c=t("Bd1x"),u=t("9Y+p"),l=t("Y680"),p=t("IBpw"),d=t("8gaA"),f=t("h8GR"),m=t("QslU"),g=function(e){var n=e.page,t=e.seoDefinition,o=e.markdownURL,r=(0,s.useState)(!1),i=r[0],a=r[1],g=(0,s.useState)(!1),h=g[0],y=g[1];return(0,s.useEffect)((function(){var e=document.getElementById("ma-PageCookiesPolicy-PartnersButtonId");e&&(e.onclick=function(){(0,d.Le)()?(0,d.Oo)():y(!0)})}),[i]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.Z,{children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(p.Z,{seoDefinition:t}),(0,m.jsx)(f.Z,{page:n}),(0,m.jsx)(c.Z.Header,{page:n}),(0,m.jsxs)(c.Z.Body,{pageClass:"ma-PageCookiesPolicy",children:[(0,m.jsxs)(c.Z.MainContent,{children:[(0,m.jsx)(l.Z,{onLoad:function(){return a(!0)},src:o}),h&&(0,m.jsx)(d.ZP,{layerType:"PARTNERS",showModal:h,onAcceptModal:)]}),(0,m.jsx)(c.Z.Sidebar,{})]})]})}),(0,m.jsx)(c.Z.Footer,{})]})};g.displayName="CookiesPolicy",g.getInitialProps=function(){var e=(0,r.Z)(a().mark((function e(n){var t,o,r,i,s,c,u,l,p,d,f,m;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.context,o=n.routeInfo,r=t.domain,i=t.i18n,s=r.get("config").get("CULTURES"),c=s.CULTURES_MAP,u=r.get("config").get("MARKDOWN").FILENAMES[c[i.culture]][o.location.pathname],l=r.get("config").get("PAGES"),e.next=7,r.get("get_definition_by_page_seo_use_case").execute({page:l.LEGAL_COOKIES_POLICY});case 7:return p=e.sent,d=p[0],f=p[1],d&&console.error(d),m=""+r.get("config").get("BASE_URL_STATICS")+u,e.abrupt("return",{markdownURL:m,page:l.LEGAL_COOKIES_POLICY,seoDefinition:f||{title:"HOME_SEO_TITLE",meta:[],link:[]}});case 13:case"end":return e.stop()}}),e)})));return ();var h=g,y=o.Z.wrapper(h,"CookiesPolicy")},chmK:]);