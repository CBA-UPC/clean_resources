import{I as i,q as s,a3 as F,a4 as l,d as o,a5 as C,f as c,a6 as n,a7 as H,a8 as S,j as e,a9 as L,aa as w,ab as p,ac as T,Y as P,ad as N,ae as B,af as M,ag as W,ah as z,ai as h,aj as f,ak as $,al as R,am as U,K as E,an as G,ao as I,ap as q,V as _,X as K,W as V,aq as Y,ar as D,as as O,at as x,au as g,J as Z,av as J,x as u,O as Q,G as X,A as ee,E as ae,aw as te,ax as re,ay as ne,az as ie}from"./index-6f0b08dd.js";const v=i({name:"AdvertorialHeader",fragment(){return s`fragment ${this.name} on AssociationsAspect {
      topStoriesNavigation {
          namedUrl
        }
      }
    `}}),se=({className:a,content:t={}})=>{const{topStoriesNavigation:r}=t,[{scrollbarRightWidth:d}]=H(),{isMobileMode:m}=S();return m?null:e.jsx(L,{value:{},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:`calc(100% - ${d})`},className:a,children:e.jsx(w,{isBlue:!0,className:"logo",href:r==null?void 0:r.namedUrl})}),e.jsx("div",{className:"spx"})]})})},oe=F`
  align-items: center;
  display: grid;
  grid-template-areas: "logo";
  grid-template-columns: 70px;
  grid-template-rows: 50px;

  min-height: ${l.xs.thin}px;

  & + .spx {
    margin-top: ${l.xs.thin}px;
  }

  & > .logo {
    grid-area: logo;
    justify-self: center;
    z-index: 4;
  }
`,le=o(se)`
  position: fixed;
  top: 0;
  z-index: 10;
  ${C}

  ${oe}

  background-color: ${c.WHITE};
  box-shadow: 0 0 10px 0 ${c.BLACK};

  ${n.md`
    max-height: 80vh;
    grid-template-columns: 83px;
    grid-template-rows: ${l.md}px;

    & + .spx {
      margin-top: ${l.md}px;
    }
  `}

  ${n.lg`
    grid-template-columns: 127px;
    grid-template-rows: ${l.lg}px;

    & + .spx {
      margin-top: ${l.lg}px;
    }
  `}

  ${n.xl`
    grid-template-columns: 250px;
  `}
`,j=i({name:"AdvertorialFooter",fragment(){return s`fragment ${this.name} on FooterAspect {
      footer {
        ...${p.name}
      }
    }
    ${p.fragment()}
  `}}),de=({className:a,content:t})=>{const{isMobileMode:r}=S();return r?null:e.jsx("footer",{className:a,id:P.quickNav.footer,children:e.jsx(N,{footer:t.footer})})},me=o(de)`
  background-color: ${c.DW_GREY_13};
  padding-top: 30px;
  padding-bottom: 60px;

  ${T("& > section")}
`;i({name:"AdvertorialDetailHeader",fragment(){return s`fragment ${this.name} on Article {
        title
        teaser
      }
    `}});const ce=({content:a,className:t})=>e.jsxs("header",{className:t,children:[e.jsx(W,{className:"headline",children:a.title}),a.teaser&&e.jsx(z,{className:"teaser-text",children:a.teaser})]}),ge=`
  ${B}
  ${M}
`,xe=o(ce)`
  .teaser-text {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`,y=i({name:"AdvertorialDetails",fragment(){return s`fragment ${this.name} on Article {
            ...${h.name}
            ...${f.name}
            ...${$.opinionFragment.name}
        }
        ${h.fragment()}
        ${f.fragment()}
        ${$.opinionFragment.fragment()}
    `}}),pe=({content:a={},className:t})=>e.jsxs(E,{className:t,children:[e.jsx(xe,{className:"advertorial-header",content:a}),e.jsx(G,{content:a}),e.jsx(I,{className:"advertorial-rich-text",content:a})]}),he=`
  ${ge}
  ${U}
`,fe=o(pe)`
  .advertorial-header *, .advertorial-rich-text {
    color: ${c.BLACK};
  }
  .advertorial-rich-text a {
    ${R.color}: indigo;
  }
`,A=i({name:"AdvertorialPageHeaderMetadata",fragment(){return s`fragment ${this.name} on Article { 
          isLive
          language
          canonicalUrl
          title
          subdomain
          localizedContentDate
        }
    `}}),$e=({content:a})=>{const{staticBaseHost:t}=q(),r=_().window.location.href,d=K({title:a.title,date:a.localizedContentDate}),m=a.sharingDescription,k=encodeURI(a.canonicalUrl?a.canonicalUrl:r);return e.jsx(e.Fragment,{children:e.jsxs(V,{children:[e.jsx("title",{children:d}),e.jsx("meta",{name:"description",content:m}),e.jsx("link",{rel:"canonical",href:k}),e.jsx("link",{rel:"preconnect",href:t}),e.jsx("link",{rel:"dns-prefetch",href:t}),e.jsx("link",{rel:"manifest",href:`/${Y(a.language)}/manifest.json`}),e.jsx("meta",{name:"robots",content:"noindex, nofollow"})]})})},ue=({link:a={},className:t})=>e.jsxs(D,{to:a.url,className:t,children:[a.name,e.jsx(O,{className:"external-icon"})]}),ve=o(ue)`
  ${D.darkStyles}

  .external-icon {
    margin-left: 5px;
  }
`,b=i({name:"AdvertorialBanner",fragment),je=({className:a,content:t})=>{const[r]=t.externalLinks,d=Z("general.advertisement.advertorial.attribution.label"),m=J({key:"general.advertisement.advertorial.attribution.partner",parameter:"partnerLink",componentFn:()=>e.jsx(ve,{link:r})});return e.jsxs("section",{className:a,children:[e.jsx(x,{className:"attribution-label",children:d}),(r==null?void 0:r.name)&&e.jsx(x,{className:"attribution-partner",children:m})]})},ye=o(je)`
  ${x.darkStyles}

  background-color: ${c.DW_GREY_14};
  padding: 10px 15px;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 0.5rem;
  
  .attribution-label {
    white-space: nowrap;
    font-size: 1.6rem;
  }

  .attribution-partner { 
    margin-left: auto; 
    font-size: 1.4rem;
  }

  ${n.sm`
    padding-left: ${g.sm}px;
  `}

  ${n.md`
    padding-left: ${g.md}px;
    .attribution-label {
      font-size: 1.8rem;
    }
  `}

  ${n.lg`
    padding-left: ${g.lg}px;
    .attribution-label {
      font-size: 2rem;
    }
  `}

  ${n.xl`
    padding-left: calc((100% - 1110px)/2 + ${g.xl}px);
  `}

`,De=i({name:"AdvertorialContentDetails",fragment(){return s`fragment ${this.name} on Article {
            ...${A.name}
            ...${v.name}
            ...${b.name}
            ...${y.name}
            ...${j.name}
            ...${u.name}
          }
        ${A.fragment()}
        ${v.fragment()}
        ${b.fragment()}
        ${y.fragment()}
        ${j.fragment()}
        ${u.fragment()}
    `}}),Ae=({content:a,className:t})=>e.jsxs(Q,{children:[e.jsx($e,{content:a}),e.jsx(X,{content:a}),e.jsx(ee,{content:a}),e.jsxs("div",{className:t,children:[e.jsx(le,{hasWhiteState:!0,content:a}),e.jsx(ye,{content:a}),e.jsx(ae,{DetailZoneFn:AlternatingColorZoneConfig:{compFn:()=>e.jsx("div",{className:"bottom-slot",children:e.jsx(te,{content:a})})}}),e.jsx(me,{content:a})]})]}),be=o(Ae)`
  ${re.fontFamily}:  Arial, Helvetica, sans-serif;
  .bottom-slot {
    padding-top: 20px;
    padding-bottom: 35px;
  }
`,ke=ne(be)`
  ${ie}
  ${he}
`;export{Ae as AdvertorialContentDetails,be as StyledAdvertorialContentDetails,ke as StyledAdvertorialContentDetailsWithTheme,De as advertorialContentDetailsFragment};
//# sourceMappingURL=AdvertorialContentDetails.cd23-ce8f5417.js.map
