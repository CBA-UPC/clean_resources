"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[42122],{257490:(e,n,t)=>{t.r(n);var a,r,o=t(356088),l=t.n(o),c=t(213002),s=t(490845),i=t(755580),g=t(422223),u=t(457352);ar f=i.default.ul(a||(a=d(["\n    padding: 0;\n    display: flex;\n    align-items: center;\n    list-style: none;\n    ","\n\n    a {\n        text-decoration: none;\n        cursor: pointer;\n        color: ",";\n\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n"])),(e=>{var{theme:n}=e;return"\n        margin-right: ".concat(n.space[40],";\n        color: ").concat(n.colors.grey4,";\n        font-size: ").concat(n.fontSizes[14],";\n    ")}),(),L=i.default.li(r||(r=d(["\n    &:not(:first-of-type)::before {\n        content: '|';\n        ","\n    }\n"])),(e=>{var{theme:n}=e;return"\n            padding: 0 ".concat(n.space[12],";\n            color: ").concat(n.colors.grey4,";\n        ")})),h=e=>l().createElement(s.FormattedMessage,{id:"langSwitch.lang-".concat(e),defaultMessage:e});n.default=(0,c.withRouter)((e=>{var{pathname:n="",search:t="",hash:a=""}=e.location,r=n+t+a,{marketMetadata:c,selectedLanguage:i}=(0,o.useContext)(s.LocalisationContext),d=c.languages;return Object.keys(d).length>1?l().createElement(f,null,Object.entries(d).map((e=>{var[,n]=e;return l().createElement(L,{key:n.langISOCode},i.langISOCode===n.langISOCode?h(n.URLLanguageCode):l().createElement(g.Z,{to:r,language:n.URLLanguageCode,fullReload:!0,onClick:()=>{return e=n.URLLanguageCode,void u.cookieStorage.set("lang",e);var e}},h(n.URLLanguageCode)))}))):null}))}}]);
//# sourceMappingURL=LangSwitcher.35d578300.chunk.js.map