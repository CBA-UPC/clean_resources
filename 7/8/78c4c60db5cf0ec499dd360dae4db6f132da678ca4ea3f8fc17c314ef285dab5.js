import{e as g,j as a,d as x,x as t,u,aa as y,aQ as j}from"./index-IMvvqvG5.js";import{T as h}from"./index-q2tK04gT.js";import"./useImageMeasurer-i_xvXh1-.js";import"./getPressedImageData-74KNu2MQ.js";import"./index-6SJllaRd.js";import"./index-ss2QbMh7.js";const N=g(s=>({link:{"@media(hover: hover)":{"&:hover":{color:s.colors.accents.primary.base.action}}}})),T="%a",f=({restrictionInfo:{action:s,action_title:l,text:n}})=>{const r=N();return a.jsx(a.Fragment,{children:n.split(T).map((i,c)=>a.jsxs(x.Fragment,{children:[i,!c&&a.jsx(t,{tagType:"a",target:"_blank",href:s,className:r.link,rel:"noreferrer",color:"selected",size:"small",children:l})]},i))})},v=g(s=>({root:{width:252,margin:[s.spacings.s0,"auto"],padding:[s.spacings.s24,s.spacings.s0]},icon:{display:"block",width:132,height:132,margin:[s.spacings.s0,"auto"]},title:{display:"block",marginTop:s.spacings.s8,textAlign:"center"},description:{marginTop:s.spacings.s12,textAlign:"center"},exploreContainer:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:s.spacings.s24},explore:{marginBottom:s.spacings.s12},tagsContainer:{display:"flex",justifyContent:"center",flexWrap:"wrap"},tag:{margin:s.spacings.s4}}),{name:"no-results-found"});function R({iconName:s,title:l,description:n,tags:r,chooseTagHandler:i,selectedTag:c,restrictionInfo:p}){const e=v(),m=u(),d=!!(n||p);return a.jsxs("div",{className:e.root,children:[a.jsx(y,{className:e.icon,name:s}),a.jsx(t,{className:e.title,size:"base16",weight:"semiBold",color:"secondary",children:l}),d&&a.jsx(t,{className:e.description,tagType:"p",size:"small",weight:"semiBold",color:"secondary",children:p?a.jsx(f,{restrictionInfo:p}):n}),r&&a.jsxs("div",{className:e.exploreContainer,children:[a.jsx(t,{className:e.explore,tagType:"h2",size:"base14",weight:"semiBold",color:"secondary",children:m("Explore")}),a.jsx("div",{className:e.tagsContainer,children:r.map(o=>a.jsx(h,{title:o.tag,type:j.Normal,onChange:isActive:c===o.tag,className:e.tag},o.tag))})]})]})}export{R as default};
