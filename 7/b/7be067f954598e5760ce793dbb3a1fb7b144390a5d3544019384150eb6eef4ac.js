import{I as i,q as s,a3 as D,a4 as l,d as o,a5 as F,f as c,a6 as n,a7 as C,a8 as b,j as e,a9 as H,aa as L,ab as p,ac as T,Y as w,ad as P,ae as B,af as N,ag as M,ah as W,ai as h,aj as f,ak as $,al as z,am as R,K as U,an as E,ao as G,ap as I,V as q,X as _,W as K,aq as V,ar as Y,as as O,at as Z,au as J,av as x,aw as g,J as Q,ax as X,x as u,O as ee,G as ae,A as te,E as re,ay as ne,az as ie,aA as se,aB as oe}from"./index-172e3f67.js";const v=i({name:"AdvertorialHeader",fragment(){return s`fragment ${this.name} on AssociationsAspect {
      topStoriesNavigation {
          namedUrl
        }
      }
    `}}),le=({className:a,content:t={}})=>{const{topStoriesNavigation:r}=t,[{scrollbarRightWidth:d}]=C(),{isMobileMode:m}=b();return m?null:e.jsx(H,{value:{},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:`calc(100% - ${d})`},className:a,children:e.jsx(L,{isBlue:!0,className:"logo",href:r==null?void 0:r.namedUrl})}),e.jsx("div",{className:"spx"})]})})},de=D`
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
`,me=o(le)`
  position: fixed;
  top: 0;
  z-index: 10;
  ${F}

  ${de}

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
  `}}),ce=({className:a,content:t})=>{const{isMobileMode:r}=b();return r?null:e.jsx("footer",{className:a,id:w.quickNav.footer,children:e.jsx(P,{footer:t.footer})})},ge=o(ce)`
  background-color: ${c.DW_GREY_13};
  padding-top: 30px;
  padding-bottom: 60px;

  ${T("& > section")}
`;i({name:"AdvertorialDetailHeader",fragment(){return s`fragment ${this.name} on Article {
        title
        teaser
      }
    `}});const xe=({content:a,className:t})=>e.jsxs("header",{className:t,children:[e.jsx(M,{className:"headline",children:a.title}),a.teaser&&e.jsx(W,{className:"teaser-text",children:a.teaser})]}),pe=`
  ${B}
  ${N}
`,he=o(xe)`
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
    `}}),fe=({content:a={},className:t})=>e.jsxs(U,{className:t,children:[e.jsx(he,{className:"advertorial-header",content:a}),e.jsx(E,{content:a}),e.jsx(G,{className:"advertorial-rich-text",content:a})]}),$e=`
  ${pe}
  ${R}
`,ue=o(fe)`
  .advertorial-header *, .advertorial-rich-text {
    color: ${c.BLACK};
  }
  .advertorial-rich-text a {
    ${z.color}: indigo;
  }
`,A=i({name:"AdvertorialPageHeaderMetadata",fragment(){return s`fragment ${this.name} on Article { 
          isLive
          language
          canonicalUrl
          title
          subdomain
          localizedContentDate
        }
    `}}),ve=({content:a})=>{const{staticBaseHost:t}=I(),r=q().window.location.href,d=_({title:a.title,date:a.localizedContentDate}),m=a.sharingDescription,k=encodeURI(a.canonicalUrl?a.canonicalUrl:r);return e.jsx(e.Fragment,{children:e.jsxs(K,{children:[e.jsx("title",{children:d}),e.jsx("meta",{name:"description",content:m}),e.jsx("link",{rel:"canonical",href:k}),e.jsx("link",{rel:"preconnect",href:t}),e.jsx("link",{rel:"dns-prefetch",href:t}),e.jsx("link",{rel:"manifest",href:`/${V(a.language)}/manifest.json`}),e.jsx("meta",{name:"robots",content:"noindex, nofollow"})]})})},je=({link:a={},className:t})=>e.jsxs(O,{isA:Z,to:a.url,className:t,children:[a.name,e.jsx(J,{className:"external-icon"})]}),ye=o(je)`
  ${Y}

  .external-icon {
    margin-left: 5px;
  }
`,S=i({name:"AdvertorialBanner",fragment),Ae=({className:a,content:t})=>{const[r]=t.externalLinks,d=Q("general.advertisement.advertorial.attribution.label"),m=X({key:"general.advertisement.advertorial.attribution.partner",parameter:"partnerLink",componentFn:()=>e.jsx(ye,{link:r})});return e.jsxs("section",{className:a,children:[e.jsx(x,{className:"attribution-label",children:d}),(r==null?void 0:r.name)&&e.jsx(x,{className:"attribution-partner",children:m})]})},Se=o(Ae)`
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

`,Fe=i({name:"AdvertorialContentDetails",fragment(){return s`fragment ${this.name} on Article {
            ...${A.name}
            ...${v.name}
            ...${S.name}
            ...${y.name}
            ...${j.name}
            ...${u.name}
          }
        ${A.fragment()}
        ${v.fragment()}
        ${S.fragment()}
        ${y.fragment()}
        ${j.fragment()}
        ${u.fragment()}
    `}}),be=({content:a,className:t})=>e.jsxs(ee,{children:[e.jsx(ve,{content:a}),e.jsx(ae,{content:a}),e.jsx(te,{content:a}),e.jsxs("div",{className:t,children:[e.jsx(me,{hasWhiteState:!0,content:a}),e.jsx(Se,{content:a}),e.jsx(re,{DetailZoneFn:AlternatingColorZoneConfig:{compFn:()=>e.jsx("div",{className:"bottom-slot",children:e.jsx(ne,{content:a})})}}),e.jsx(ge,{content:a})]})]}),ke=o(be)`
  ${ie.fontFamily}:  Arial, Helvetica, sans-serif;
  .bottom-slot {
    padding-top: 20px;
    padding-bottom: 35px;
  }
`,Ce=se(ke)`
  ${oe}
  ${$e}
`;export{be as AdvertorialContentDetails,ke as StyledAdvertorialContentDetails,Ce as StyledAdvertorialContentDetailsWithTheme,Fe as advertorialContentDetailsFragment};
//# sourceMappingURL=AdvertorialContentDetails.cd23-93087eaa.js.map
