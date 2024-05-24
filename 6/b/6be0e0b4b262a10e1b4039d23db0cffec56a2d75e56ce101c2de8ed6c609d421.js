/**/ typeof branch_callback__0 === 'function' && branch_callback__0("1276082657266070784");t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("s1y1"),l=n("q1tI"),o=n("17x9"),i=n("vOnD"),r=n("o16W"),d=n("ro0j"),s=n("8Y1w"),c=n("kaA/"),u=n("LEC9");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=p(l),f=p(i),E={PRIMARY_BUTTON:"PRIMARY_BUTTON",SECONDARY_BUTTON:"SECONDARY_BUTTON"},g={BLUE:"blue",ORANGE:"orange",GRAY:"gray",WHITE:"white"};const T=f.default.span.withConfig({displayName:"styled__PseudoButton",componentId:"sc-z84cl8-0"})(["background:",";border:1px solid ",";display:inline-block;padding:0 23px;text-align:center;@media screen and (max-width:","){width:100%;}"],e=>{let{buttonTheme:t}=e;return t===E.PRIMARY_BUTTON?r.BRAND:r.WHITE},e=>{let{buttonTheme:t}=e;return t===E.PRIMARY_BUTTON?"transparent":r.GRAY},c.LARGE_SCREEN),h=f.default(s.Caps).attrs({as:"span"}).withConfig({displayName:"styled__PseudoButtonCopy",componentId:"sc-z84cl8-1"})(["color:",";line-height:30px;@media screen and (max-width:","){line-height:38px;}"],e=>{let{buttonTheme:t}=e;return t===E.PRIMARY_BUTTON?r.WHITE:r.BRAND},c.LARGE_SCREEN),C=f.default(s.Caps).attrs({as:"span"}).withConfig({displayName:"styled__PseudoLink",componentId:"sc-z84cl8-2"})(["color:",";display:inline-block;margin-top:10px;"],e=>{let{theme:t}=e;return t===g.WHITE?r.BRAND:r.BRAND_DARK});function R(e){let{children:t,...n}=e;return m.default.createElement(T,n,m.default.createElement(h,n,t))}R.propTypes={children:o.node.isRequired};var _={TOP:"TOP",BOTTOM:"BOTTOM",LEFT:"LEFT",RIGHT:"RIGHT"};const b={[g.BLUE]:i.css(["background:",";"],r.ACCENT_PRIMARY_LIGHTEST),[g.ORANGE]:i.css(["background:",";"],r.ACCENT_SECONDARY_LIGHTEST),[g.GRAY]:i.css(["background:",";"],r.GRAY_LIGHTEST),[g.WHITE]:i.css(["background:",";border-color:",";"],r.WHITE,r.GRAY_LIGHT)},y={[g.BLUE]:i.css(["&:hover{background:",";}&:active{background:",";}"],r.ACCENT_PRIMARY_LIGHTEST_HOVER,r.ACCENT_PRIMARY_LIGHTEST_PRESSED),[g.ORANGE]:i.css(["&:hover{background:",";}&:active{background:",";}"],r.ACCENT_SECONDARY_LIGHTEST_HOVER,r.ACCENT_SECONDARY_LIGHTEST_PRESSED),[g.GRAY]:i.css(["&:hover{background:",";}&:active{background:",";}"],r.GRAY_LIGHTEST_HOVER,r.GRAY_LIGHTEST_PRESSED),[g.WHITE]:i.css(["&:hover{background:",";}"],r.WHITE)},x=f.default.span.withConfig({displayName:"styled__CallToAction",componentId:"sc-kk19h4-0"})(["margin-top:10px;"]),I=f.default.span.withConfig({displayName:"styled__ContentWrapper",componentId:"sc-kk19h4-1"})(["@media screen and (max-width:","){width:100%;}"],c.LARGE_SCREEN),A=f.default(s.Body).attrs({as:"span"}).withConfig({displayName:"styled__Description",componentId:"sc-kk19h4-2"})(["display:block;margin-top:",";"],u.XS),O=f.default(d.SecondarySmall).attrs({as:"span"}).withConfig({displayName:"styled__Headline",componentId:"sc-kk19h4-3"})(["display:block;"]),k=f.default.div.withConfig({displayName:"styled__HorizontalCardWrapper",componentId:"sc-kk19h4-4"})(["align-items:center;border:1px solid transparent;border-radius:0;box-shadow:0 2px 4px rgba(0,0,0,0.04);box-sizing:border-box;cursor:",";display:flex;margin:0;padding:15px 19px;text-align:left;text-decoration:none;transition:background 250ms,box-shadow 250ms;width:100%;@media screen and (max-width:","){align-items:flex-start;flex-direction:column;padding:19px;}"," "," *{box-sizing:border-box;}"],e=>{let{interactive:t}=e;return t?"pointer":"default"},c.LARGE_SCREEN,e=>{let{theme:t}=e;return b[t]},e=>{let{interactive:t,theme:n}=e;return t&&i.css(["&:hover{box-shadow:0 2px 8px rgba(0,0,0,0.08);}&:active{box-shadow:0 2px 4px rgba(0,0,0,0.04);}",""],y[n])}),N=f.default.span.withConfig({displayName:"styled__IllustrationWrapper",componentId:"sc-kk19h4-5"})(["padding-right:24px;img{display:block;}@media screen and (min-width:","){","}@media screen and (max-width:","){padding:0 0 20px;}"],c.LARGE_SCREEN,e=>{let{imagePosition:t}=e;return t===_.RIGHT&&i.css(["margin-left:auto;order:1;padding:0 0 0 24px;"])},c.LARGE_SCREEN),S=m.default.forwardRef((e,t)=>{let{buttonTheme:n,callToActionCopy:l,description:o,headline:i,illustration:r,imagePosition:d,onClick:s,theme:c,...u}=e;return m.default.createElement(k,a._extends({ref:t,as:"button",interactive:!0,onClick:s,theme:c},u),r&&m.default.createElement(N,{imagePosition:d},r),m.default.createElement(I,null,m.default.createElement(O,null,i),o&&m.default.createElement(A,null,o),m.default.createElement(x,{as:R,buttonTheme:n,theme:c},l)))});S.propTypes={buttonTheme:o.oneOf(Object.values(E)),callToActionCopy:o.oneOfType([o.node,o.string]).isRequired,description:o.string,headline:o.string.isRequired,illustration:o.node,imagePosition:o.oneOf([_.LEFT,_.RIGHT]),onClick:o.func.isRequired,theme:o.oneOf(Object.values(g))},S.defaultProps={buttonTheme:E.PRIMARY_BUTTON,description:null,illustration:null,imagePosition:_.LEFT,theme:g.WHITE};const P=m.default.forwardRef((e,t)=>{let{callToActionCopy:n,description:l,headline:o,href:i,illustration:r,imagePosition:d,onClick:s,theme:c,...u}=e;return m.default.createElement(k,a._extends({ref:t,as:"a",href:i,interactive:!0,onClick:s,theme:c},u),r&&m.default.createElement(N,{imagePosition:d},r),m.default.createElement(I,null,m.default.createElement(O,null,o),l&&m.default.createElement(A,null,l),m.default.createElement(x,{as:C,theme:c},n)))});P.propTypes={callToActionCopy:o.oneOfType([o.node,o.string]).isRequired,description:o.string,headline:o.string.isRequired,href:o.string.isRequired,illustration:o.node,imagePosition:o.oneOf([_.LEFT,_.RIGHT]),onClick:o.func,theme:o.oneOf(Object.values(g))},P.defaultProps={description:null,illustration:null,imagePosition:_.LEFT,onClick:()=>{},theme:g.WHITE};const H=m.default.forwardRef((e,t)=>{let{description:n,headline:l,illustration:o,imagePosition:i,theme:r,...d}=e;return m.default.createElement(k,a._extends({ref:t,theme:r},d),o&&m.default.createElement(N,{imagePosition:i},o),m.default.createElement(I,null,m.default.createElement(O,null,l),n&&m.default.createElement(A,null,n)))});H.propTypes={description:o.string,headline:o.string.isRequired,illustration:o.node,imagePosition:o.oneOf([_.LEFT,_.RIGHT]),theme:o.oneOf(Object.values(g))},H.defaultProps={description:null,illustration:null,imagePosition:_.LEFT,theme:g.WHITE};const G={[g.BLUE]:i.css(["background:",";"],r.ACCENT_PRIMARY_LIGHTEST),[g.ORANGE]:i.css(["background:",";"],r.ACCENT_SECONDARY_LIGHTEST),[g.GRAY]:i.css(["background:",";"],r.GRAY_LIGHTEST),[g.WHITE]:i.css(["background:",";border-color:",";"],r.WHITE,r.GRAY_LIGHT)},v={[g.BLUE]:i.css(["&:hover{background:",";}&:active{background:",";}"],r.ACCENT_PRIMARY_LIGHTEST_HOVER,r.ACCENT_PRIMARY_LIGHTEST_PRESSED),[g.ORANGE]:i.css(["&:hover{background:",";}&:active{background:",";}"],r.ACCENT_SECONDARY_LIGHTEST_HOVER,r.ACCENT_SECONDARY_LIGHTEST_PRESSED),[g.GRAY]:i.css(["&:hover{background:",";}&:active{background:",";}"],r.GRAY_LIGHTEST_HOVER,r.GRAY_LIGHTEST_PRESSED),[g.WHITE]:i.css(["&:hover{background:",";}"],r.WHITE)},w=f.default.span.withConfig({displayName:"styled__VerticalCardWrapper",componentId:"sc-1lvkggn-0"})(["align-items:flex-start;border:1px solid transparent;box-shadow:0px 2px 4px rgba(0,0,0,0.04);box-sizing:border-box;cursor:",";display:flex;flex-direction:column;padding:20px;text-align:left;text-decoration:none;transition:background 250ms,box-shadow 250ms;width:100%;"," ",""],e=>{let{interactive:t}=e;return t?"pointer":"default"},e=>{let{theme:t}=e;return G[t]},e=>{let{interactive:t,theme:n}=e;return t&&i.css(["&:hover{box-shadow:0px 2px 8px rgba(0,0,0,0.08);}&:active{box-shadow:0px 2px 4px rgba(0,0,0,0.04);}",""],v[n])}),L=f.default.span.withConfig({displayName:"styled__IllustrationWrapper",componentId:"sc-1lvkggn-1"})(["margin-bottom:",";order:",";"],u.MD,e=>{let{imagePosition:t}=e;return t===_.TOP?0:2}),Y=f.default(L).withConfig({displayName:"styled__StaticIllustrationWrapper",componentId:"sc-1lvkggn-2"})(["margin:",";"],e=>{let{imagePosition:t,legalCopy:n}=e;return t!==_.BOTTOM||n?"0 0 16px":"16px 0 0"}),B=f.default.span.withConfig({displayName:"styled__Separator",componentId:"sc-1lvkggn-3"})(["background-color:",";border:none;height:1px;margin:18px 0 0;order:4;width:100%;"],e=>{let{theme:t}=e;return t===g.WHITE?r.GRAY_LIGHT:r.GRAY}),W=f.default.span.withConfig({displayName:"styled__ContentWrapper",componentId:"sc-1lvkggn-4"})(["margin-bottom:",";order:1;& + ","{margin-top:0;}&:last-of-type{margin-bottom:0;}"],u.MD,B),D=f.default(d.SecondaryLarge).attrs({as:"span"}).withConfig({displayName:"styled__Headline",componentId:"sc-1lvkggn-5"})(["display:block;margin-bottom:",";"],u.SM),M=f.default(s.Body).attrs({as:"span"}).withConfig({displayName:"styled__Description",componentId:"sc-1lvkggn-6"})(["display:block;"]),q=f.default(C).withConfig({displayName:"styled__PseudoLink",componentId:"sc-1lvkggn-7"})(["margin-top:0;order:3;"]),U=f.default(R).withConfig({displayName:"styled__PseudoButton",componentId:"sc-1lvkggn-8"})(["box-sizing:border-box;line-height:38px;order:3;width:100%;"]),V=f.default(s.Caption).attrs({as:"span"}).withConfig({displayName:"styled__LegalCopy",componentId:"sc-1lvkggn-9"})(["color:",";margin-top:",";order:5;"],r.TEXT_SECONDARY,u.MD),j=m.default.forwardRef((e,t)=>{let{callToActionCopy:n,description:l,headline:o,illustration:i,imagePosition:r,legalCopy:d,theme:s,...c}=e;return m.default.createElement(w,a._extends({ref:t,as:"a",interactive:!0,theme:s},c),i&&m.default.createElement(L,{imagePosition:r},i),m.default.createElement(W,null,m.default.createElement(D,null,o),l&&m.default.createElement(M,null,l)),m.default.createElement(q,{theme:s},n),d&&m.default.createElement(m.default.Fragment,null,m.default.createElement(B,{theme:s}),m.default.createElement(V,null,d)))});j.propTypes={callToActionCopy:o.oneOfType([o.node,o.string]).isRequired,description:o.string,headline:o.string.isRequired,href:o.string.isRequired,illustration:o.node,imagePosition:o.oneOf([_.TOP,_.BOTTOM]),legalCopy:o.oneOfType([o.node,o.string]),onClick:o.func,theme:o.oneOf(Object.values(g))},j.defaultProps={description:null,legalCopy:null,illustration:null,imagePosition:_.TOP,onClick:null,theme:g.WHITE},j.displayName="VerticalCalloutCardLink";const z=m.default.forwardRef((e,t)=>{let{description:n,headline:l,illustration:o,imagePosition:i,legalCopy:r,theme:d,...s}=e;return m.default.createElement(w,a._extends({ref:t,theme:d},s),o&&m.default.createElement(Y,{imagePosition:i,legalCopy:r},o),m.default.createElement(W,null,m.default.createElement(D,null,l),n&&m.default.createElement(M,null,n)),r&&m.default.createElement(m.default.Fragment,null,m.default.createElement(B,{theme:d}),m.default.createElement(V,null,r)))});z.propTypes={description:o.string,headline:o.string.isRequired,illustration:o.node,imagePosition:o.oneOf([_.TOP,_.BOTTOM]),legalCopy:o.oneOfType([o.node,o.string]),theme:o.oneOf(Object.values(g))},z.defaultProps={description:null,legalCopy:null,illustration:null,imagePosition:_.TOP,theme:g.WHITE},z.displayName="VerticalCalloutCardStatic";const F=m.default.forwardRef((e,t)=>{let{buttonTheme:n,callToActionCopy:l,description:o,headline:i,illustration:r,imagePosition:d,legalCopy:s,theme:c,...u}=e;return m.default.createElement(w,a._extends({ref:t,as:"button",interactive:!0,theme:c},u),r&&m.default.createElement(L,{imagePosition:d},r),m.default.createElement(W,null,m.default.createElement(D,null,i),o&&m.default.createElement(M,null,o)),m.default.createElement(U,{buttonTheme:n,theme:c},l),s&&m.default.createElement(V,null,s))});F.propTypes={buttonTheme:o.oneOf(Object.values(E)),callToActionCopy:o.oneOfType([o.node,o.string]).isRequired,description:o.string,headline:o.string.isRequired,illustration:o.node,imagePosition:o.oneOf([_.TOP,_.BOTTOM]),legalCopy:o.oneOfType([o.node,o.string]),onClick:o.func,theme:o.oneOf(Object.values(g))},F.defaultProps={buttonTheme:E.PRIMARY_BUTTON,description:null,legalCopy:null,illustration:null,imagePosition:_.TOP,onClick:null,theme:g.WHITE},F.displayName="VerticalCalloutCardButton";const J={[g.BLUE]:i.css(["background:",";"],r.ACCENT_PRIMARY_LIGHTEST),[g.ORANGE]:i.css(["background:",";"],r.ACCENT_SECONDARY_LIGHTEST),[g.GRAY]:i.css(["background:",";"],r.GRAY_LIGHTEST),[g.WHITE]:i.css(["background:",";border-color:",";"],r.WHITE,r.GRAY_LIGHT)},X={[g.BLUE]:i.css(["&:hover{background:",";}&:active{background:",";}"],r.ACCENT_PRIMARY_LIGHTEST_HOVER,r.ACCENT_PRIMARY_LIGHTEST_PRESSED),[g.ORANGE]:i.css(["&:hover{background:",";}&:active{background:",";}"],r.ACCENT_SECONDARY_LIGHTEST_HOVER,r.ACCENT_SECONDARY_LIGHTEST_PRESSED),[g.GRAY]:i.css(["&:hover{background:",";}&:active{background:",";}"],r.GRAY_LIGHTEST_HOVER,r.GRAY_LIGHTEST_PRESSED),[g.WHITE]:i.css(["&:hover{background:",";}"],r.WHITE)},K=f.default.span.withConfig({displayName:"styled__CompactCardWrapper",componentId:"sc-1q7vnlr-0"})(["align-items:center;border:1px solid transparent;box-shadow:0 2px 4px rgba(0,0,0,0.04);box-sizing:border-box;cursor:",";display:flex;padding:9px 15px 11px 15px;text-align:left;text-decoration:none;transition:background 250ms,box-shadow 250ms;width:100%;"," ",";@media screen and (max-width:","){padding:9px 15px 13px 15px;}"],e=>{let{interactive:t}=e;return t?"pointer":"default"},e=>{let{theme:t}=e;return J[t]},e=>{let{interactive:t,theme:n}=e;return t&&i.css(["&:hover{box-shadow:0 2px 8px rgba(0,0,0,0.08);}&:active{box-shadow:0 2px 4px rgba(0,0,0,0.04);}",""],X[n])},c.LARGE_SCREEN),Q=f.default.span.withConfig({displayName:"styled__IllustrationWrapper",componentId:"sc-1q7vnlr-1"})(["margin-right:",";img{vertical-align:bottom;}"],u.MD),Z=f.default(d.SecondarySmall).attrs({as:"span"}).withConfig({displayName:"styled__Headline",componentId:"sc-1q7vnlr-2"})(["display:block;"]),$=f.default.span.withConfig({displayName:"styled__ContentWrapper",componentId:"sc-1q7vnlr-3"})(["align-items:center;display:flex;flex:1;@media screen and (max-width:","){flex-direction:column;align-items:flex-start;}"],c.LARGE_SCREEN),ee=f.default(C).withConfig({displayName:"styled__PseudoLink",componentId:"sc-1q7vnlr-4"})(["margin:0;margin-left:auto;@media screen and (max-width:","){margin-left:0;margin-top:",";}"],c.LARGE_SCREEN,u.SM),te=f.default(R).withConfig({displayName:"styled__PseudoButton",componentId:"sc-1q7vnlr-5"})(["margin-bottom:-1px;margin-left:auto;@media screen and (max-width:","){width:auto;margin-left:0;margin-top:",";}"],c.LARGE_SCREEN,u.SM),ne=m.default.forwardRef((e,t)=>{let{buttonTheme:n,callToActionCopy:l,headline:o,illustration:i,theme:r,...d}=e;return m.default.createElement(K,a._extends({ref:t,as:"button",interactive:!0,theme:r},d),i&&m.default.createElement(Q,null,i),m.default.createElement($,null,m.default.createElement(Z,null,o),m.default.createElement(te,{buttonTheme:n,theme:r},l)))});ne.propTypes={buttonTheme:o.oneOf(Object.values(E)),callToActionCopy:o.oneOfType([o.node,o.string]).isRequired,headline:o.string.isRequired,illustration:o.node,onClick:o.func,theme:o.oneOf(Object.values(g))},ne.defaultProps={buttonTheme:E.PRIMARY_BUTTON,illustration:null,onClick:null,theme:g.WHITE},ne.displayName="CompactCalloutCardButton";const ae=m.default.forwardRef((e,t)=>{let{callToActionCopy:n,headline:l,illustration:o,theme:i,...r}=e;return m.default.createElement(K,a._extends({ref:t,as:"a",interactive:!0,theme:i},r),o&&m.default.createElement(Q,null,o),m.default.createElement($,null,m.default.createElement(Z,null,l),m.default.createElement(ee,{theme:i},n)))});ae.propTypes={callToActionCopy:o.oneOfType([o.node,o.string]).isRequired,headline:o.string.isRequired,href:o.string.isRequired,illustration:o.node,onClick:o.func,theme:o.oneOf(Object.values(g))},ae.defaultProps={illustration:null,onClick:null,theme:g.WHITE},ae.displayName="CompactCalloutCardLink";const le=m.default.forwardRef((e,t)=>{let{headline:n,illustration:l,theme:o,...i}=e;return m.default.createElement(K,a._extends({ref:t,theme:o},i),l&&m.default.createElement(Q,null,l),m.default.createElement($,null,m.default.createElement(Z,null,n)))});le.propTypes={headline:o.string.isRequired,illustration:o.node,theme:o.oneOf(Object.values(g))},le.defaultProps={illustration:null,theme:g.WHITE},le.displayName="CompactCalloutCardStatic",t.CompactCalloutCardButton=ne,t.CompactCalloutCardLink=ae,t.CompactCalloutCardStatic=le,t.HorizontalCalloutCardButton=S,t.HorizontalCalloutCardLink=P,t.HorizontalCalloutCardStatic=H,t.VerticalCalloutCardButton=F,t.VerticalCalloutCardLink=j,t.VerticalCalloutCardStatic=z,t.buttonThemes=E,t.calloutCardThemes=g,t.imagePositions=_}}]);
//# sourceMappingURL=shared-2dfcd9bf-3174414766c55296f3c6.chunk.js.map