import{I as h,q as l,a1 as y,d as m,j as o,aC as T,aD as I,$ as C,a0 as _,aE as x,aF as $,aG as L,aH as i,aI as P,aJ as k,aK as j,aL as A,aM as H,aN as F,aO as g,aP as S,aQ as c,aR as Z,aS as Q,aT as R,aU as D,aV as r,aW as N,aw as b,aX as G,ay as O,U,aY as q,k as E,aZ as M,n as B}from"./index-6f0b08dd.js";const W=h({name:"ListDefaultUnifiedSmallImageText",fragment(){return l`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${y.name}
      }
      ${y.fragment()}
    `}}),Y=({contents:t=[],hideDescription:e,...n})=>o.jsx(T,{headlineIsA:"h1",...n,children:o.jsx(I,{children:t.map(s=>o.jsx(C,{content:s,imageFormatConfig:_(),titleIsA:"h2",hideDescription:e},s.id))})}),V=`
  ${x}
  ${$}
`,w=m(Y)``,d=W,v=({contents:t,headlineTranslation:e,...n})=>L(t)&&o.jsx(w,{contents:t,headlineTranslation:e,hideDescription:!0,...n}),z=V,J=m(v)``,K=[i.Article,i.Video,i.Audio,i.ImageGallery],X=tt=et=({className:t})=>{const{leadingContent:e}=k();return!e||!X(e)?null:o.jsx(j,{className:t,slotConfig:tt(e)})},ot=P,p=h({name:"TopStoryZoneNoQueryFragment",fragment(){return l`fragment ${this.name} on Navigation {
      ...${g.name}
      contentComposition {
        informationSpaces {
          name
          top_story: compositionComponents(type: TOP_STORY) {
            id
            type
            contents {
              ...${S.name}
            }
          }
          high_priority_stories: compositionComponents(type: HIGH_PRIORITY_STORIES) {
            id
            type
            cocoContents {
              ...${c.name}
            }
          }
          high_priority_stories_list: compositionComponents(type: HIGH_PRIORITY_STORIES_LIST) {
            id
            type
            contents {
              ...${d.name}
            }
          }
        }
      }
    }
    ${g.fragment()}
    ${S.fragment()}
    ${c.fragment()}
    ${d.fragment()}
    `}}),nt=t=>{if(!(t!=null&&t.contentComposition))return{topStory:null,highPriorityStories:null,highPriorityStoriesList:null};const{top_story:e=[],high_priority_stories:n=[],high_priority_stories_list:s=[]}=t.contentComposition.informationSpaces.find(G)||{},[a=null]=e,[u=null]=n,[f=null]=s;return{topStory:a,highPriorityStories:u,highPriorityStoriesList:f}},st=({topStoriesNavigation:t,className:e})=>{const{topStory:n,highPriorityStories:s,highPriorityStoriesList:a}=nt(t);return o.jsxs("div",{className:e,children:[n&&o.jsx(D,{contents:n.contents,pageSectionId:r(n)}),s&&o.jsx(N,{headlineTranslation:"content_block_detail.home_high_priority_stories.headline",contents:s.cocoContents,pageSectionId:r(s)}),!s&&a&&o.jsx(J,{headlineTranslation:"content_block_detail.home_high_priority_stories.headline",contents:a.contents,pageSectionId:r(a)}),o.jsx(b,{content:t}),o.jsx(et,{className:"bottom-slot"})]})},at=`
  ${Z}
  ${Q}
  ${z}
  ${R}
  ${ot}
`,it=m(st)`
  display: grid;
  .bottom-slot {
    padding-top: 20px;
    padding-bottom: 50px;
  }
`,rt=l`
 query topStoryZone($id: Int, $lang: Language!) {
  topStoriesNavigation(lang: $lang) {
    ...${p.name}
  }
}
${p.fragment()}
`,lt=()=>{const{langCode:t,contentId:e}=E();return M(rt,{variables:{lang:B(t)||"ENGLISH",id:+e}})},mt=O(it)(at),gt=()=>{const{data:t,error:e,loading:n}=lt();return e?(U.console.error("Could not fetch top story zone.",e),null):n?o.jsx(q,{}):t!=null&&t.topStoriesNavigation?o.jsx(mt,{topStoriesNavigation:t.topStoriesNavigation}):null};export{gt as TopStoryZone,rt as topStoryZoneQuery};
//# sourceMappingURL=TopStoryZone-bad1794c.js.map
