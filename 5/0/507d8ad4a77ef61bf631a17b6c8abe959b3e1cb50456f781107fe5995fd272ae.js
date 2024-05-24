"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8744],{"9Y+p":function(e,n,t){t.d(n,{Z:function(){return a}});var r=t("QslU"),i=(t("Oz0t"),t("V67U")),o=t.n(i);.displayName="LayoutFullHeight",a.propTypes={children:o().node}},Y680:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t("11lP"),i=t("dLhX"),o=t("QslU"),a=t("V67U"),s=t.n(a),c=t("Oz0t");function u(e){var n=e.onLoad,r=void 0===n?n,i=e.src,a=(0,c.useState)(""),s=a[0],u=a[1],d=(0,c.useState)(!1),p=d[0],l=d[1];return(0,c.useEffect)((function(){t.e(7041).then(t.bind(t,"NyNy")).then((function(e){var n=e.marked,t=new window.XMLHttpRequest;t.open("GET",i,!0),t.onload=function(){4===t.readyState&&200===t.status&&(u(n(t.responseText)),l(!0))},t.send(null)}))}),[i]),(0,c.useEffect)((function(){if(p){r({html:s,setHtml:u});var e=document.location.hash.substring(1);if(e){var n=document.getElementById(e);n&&n.scrollIntoView({block:"start",behavior:"smooth"})}}}),[p,r]),(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})}u.displayName="ServiceMarkdown";var d=u,p=function(e){var n=e.src,t=(0,i.Z)(e,["src"]);return(0,o.jsx)("div",{className:"ma-MarkdownWrapper",children:(0,o.jsx)(d,(0,r.Z)({src:n},t))})};p.displayName="MarkdownWrapper",p.propTypes={src:s().string};var l=p},IBpw:function(e,n,t){var r=t("11lP"),i=t("dLhX"),o=t("QslU"),a=t("Oz0t"),s=t("V67U"),c=t.n(s),u=t("bBVy"),d=t("r4X9"),p=t("3Fx5"),l=function(e){var n=e.seoDefinition,t=void 0===n?{}:n,s=(0,a.useContext)(u.Z),c=s.i18n,l=s.domain,f=(0,p.TH)(),g=""+l.get("config").get("BASE_IMAGES_URL_STATICS"),m=l.get("config").get("CURRENT_ENV_HOST");if(t&&Object.keys(t).length){var h=t.title,v=void 0===h?"HOME_SEO_TITLE":h,x=t.meta,y=void 0===x?[]:x,j=t.link,E=void 0===j?[]:j,_=y.find((),L=""+m+f.pathname,Z=g+"/images/icons/icon-square-192x192.ff91f9a5f0.png";return(0,o.jsxs)(d.Z,{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,o.jsx)("title",{children:c.t(v)}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:title",content:c.t(v)}),(0,o.jsx)("meta",{property:"og:url",content:L}),(0,o.jsx)("meta",{property:"og:image",content:Z}),_&&(0,o.jsx)("meta",{property:"og:description",content:c.t(_.content)}),y.map((function(e){return(0,o.jsx)("meta",{name:e.name,property:e.property,content:c.t(e.content)},e.name)})),E.map((function(e){return(0,o.jsx)("link",(0,r.Z)({},(t=(n=e).name,a=n.content,s=(0,i.Z)(n,["name","content"]),(0,r.Z)({rel:t,href:a,key:t},s))));var n,t,a,s}))]})}return null};l.displayName="SeoHeadTags",l.propTypes={seoDefinition:c().object},n.Z=l},rq40:function(e,n,t){t.r(n),t.d(n,{default:);var r=t("bBVy"),i=t("Tim7"),o=t("jbFD"),a=t.n(o),s=(t("Oz0t"),t("Bd1x")),c=t("9Y+p"),u=t("Y680"),d=t("IBpw"),p=t("h8GR"),l=t("QslU"),f=function(e){var n=e.page,t=e.seoDefinition,r=e.markdownURL;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{children:(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(d.Z,{seoDefinition:t}),(0,l.jsx)(p.Z,{page:n}),(0,l.jsx)(s.Z.Header,{page:n}),(0,l.jsxs)(s.Z.Body,{pageClass:"ma-PagePersonalizedAdvertising",children:[(0,l.jsx)(s.Z.MainContent,{children:(0,l.jsx)(u.Z,{src:r})}),(0,l.jsx)(s.Z.Sidebar,{})]})]})}),(0,l.jsx)(s.Z.Footer,{})]})};f.displayName="PersonalizedAdvertising",f.getInitialProps=function(){var e=(0,i.Z)(a().mark((function e(n){var t,r,i,o,s,c,u,d,p,l,f,g;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.context,r=n.routeInfo,i=t.domain,o=t.i18n,s=i.get("config").get("CULTURES"),c=s.CULTURES_MAP,u=i.get("config").get("MARKDOWN").FILENAMES[c[o.culture]][r.location.pathname],d=i.get("config").get("PAGES"),e.next=7,i.get("get_definition_by_page_seo_use_case").execute({page:d.LEGAL_AD_PROFILED});case 7:return p=e.sent,l=p[0],f=p[1],l&&console.error(l),g=""+i.get("config").get("BASE_URL_STATICS")+u,e.abrupt("return",{markdownURL:g,page:d.LEGAL_AD_PROFILED,seoDefinition:f||{title:"HOME_SEO_TITLE",meta:[],link:[]}});case 13:case"end":return e.stop()}}),e)})));return ();var g=f,m=r.Z.wrapper(g,"PersonalizedAdvertising")},NmLn:]);