(window["webpackJsonp_help-center"]=window["webpackJsonp_help-center"]||[]).push([[8],{"VgJ+":ouyo:function(e,t,a){"use strict";a.r(t);var r=a("W0XZ"),c=a("lxOd"),n=a("k1fw"),l=a("tJVT"),i=a("cDcd"),o=a.n(i),s=a("jkix"),d=a("9kvl"),u=a("kyeR"),p=a("KzUQ"),g=a("gRkY"),h=a("c5yE"),b=a("6fDs"),O=a("wuUx"),j=a("549i"),m=a("nSV2"),v=a("k/Of"),y=a("s4jm"),S=a("lOii"),_=a("oXoT"),f=a("BhN1"),w=a("VgJ+"),k=a.n(w),E=()=>{var e=Object(i["useState"])(s["p"].query().keyword||""),t=Object(l["a"])(e,2),a=t[0],w=t[1],E=Object(i["useRef"])(null),H=Object(i["useState"])(!0),W=Object(l["a"])(H,2),I=W[0],C=W[1],N=Object(i["useState"])(!1),T=Object(l["a"])(N,2),x=T[0],J=T[1],R=Object(i["useState"])([]),K=Object(l["a"])(R,2),V=K[0],z=K[1],B=Object(i["useState"])(0),F=Object(l["a"])(B,2),P=F[0],A=F[1],Q=Object(i["useState"])({page:"1",size:"15"}),D=Object(l["a"])(Q,2),L=D[0],U=D[1],X=Object(j["c"])(),q=X.frontendId,M=f["a"].useContainer(),Y=M.deviceId,Z=Object(i["useRef"])(0),G=e=>{J(!0),Object(m["d"])(e).then((t=>{var a=((null===t||void 0===t?void 0:t.hits)||[]).map((e=>{var t,a=Object(S["a"])((null===e||void 0===e||null===(t=e.highlight)||void 0===t?void 0:t.title)||"");return Object(n["a"])(Object(n["a"])({},e),{},{highlight:Object(n["a"])(Object(n["a"])({},e.highlight||{}),{},{title:a})})}));z(I?a),A(null===t||void 0===t?void 0:t.total),s["d"].info({message:"".concat(y["b"].SearchArticles," ").concat(JSON.stringify({keyword:e.keyword}))}),0===Z.current&&(Object(y["o"])(y["d"].Search),Z.current+=1)})).catch((e=>{s["d"].error({message:"".concat(y["b"].SearchArticles," ").concat(JSON.stringify(Object(y["g"])(e,{redirect:!0})))}),Object(y["h"])(e),d["e"].replace(v["c"])})).finally(()},$=Object(c["a"])((e=>{C(!1),U({page:"1",size:"15"}),h["e"].trackerSync({tags:h["a"].HelpCenter,pageType:h["a"].HelpCenter,operation:h["b"].ActionSearch,pageSection:h["c"].SearchPanel,targetType:h["f"].Search,data:Object(h["g"])({searchKeywords:e,entryPage:O["d"].SearchHomePage})}),h["e"].trackerSync({tags:h["a"].HelpCenter,pageType:h["a"].HelpCenterSearchResults,operation:h["b"].View,data:Object(h["g"])({searchKeywords:e})})}),{wait:300}),ee=$.run;Object(i["useEffect"])((()=>{a.length>0?G(Object(n["a"])({frontendId:String(q),deviceId:Y,keyword:a,type:"2"},L)):z([])}),[L,q]);var te=P>Number(V.length);function ae(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:k.a.notFoundWrap},o.a.createElement(u["a"],null)))}function re(){return o.a.createElement(p["a"],{loading:!0},o.a.createElement("div",null))}function ce(){return V.length>0&&o.a.createElement("div",{className:k.a.listWrap},V.map((e=>{var t,r=(null===e||void 0===e||null===(t=e.highlight)||void 0===t?void 0:t.title)||"";return o.a.createElement("div",{onClick:()=>{Object(b["c"])({id:e.id,title:r},{previousPage:"search results page"}),h["e"].trackerSync({tags:h["a"].HelpCenter,pageType:h["a"].HelpCenterSearchResults,operation:h["b"].Click,targetType:h["f"].SearchResultsList,data:Object(h["g"])({searchKeywords:a,articleId:"".concat(e.id),articleTitle:r})})},className:k.a.listItem,dangerouslySetInnerHTML:{__html:r}})})))}return Object(r["a"])(E,(e=>{if(!x&&te&&E.current){var t=E.current,a=t.scrollHeight,r=t.clientHeight;e.top+r>a-50&&(I||C(!0),U((e=>Object(n["a"])(Object(n["a"])({},e),{},{page:String(+e.page+1)}))))}return!0})),o.a.createElement("div",{ref:E,className:k.a.scrollBox},o.a.createElement(g["a"],{mode:_["a"].NoCancel,keyword:a,setKeyword:),x&&"1"===L.page&&o.a.createElement("div",null,re()),o.a.createElement("div",{className:k.a.searchWrap},x||V.length?ce():ae()))};t["default"]=E}}]);
//# sourceMappingURL=mobile_search.33477f09.async.js.map