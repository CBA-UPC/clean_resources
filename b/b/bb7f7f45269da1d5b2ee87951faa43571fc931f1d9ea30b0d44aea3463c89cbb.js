import{l as i,r as f,ak as l}from"./graphql.5cf3693b.js";const a={pwaInDevEnvironment:!1,webManifest:{href:"/manifest.webmanifest",useCredentials:!1,linkTag:'<link rel="manifest" href="/manifest.webmanifest">'}},o=i({async setup(){if(a){const e=f({link:[]});l(e);const{webManifest:n}=a;if(n){const{href:s,useCredentials:t}=n;t?e.value.link.push({rel:"manifest",href:s,crossorigin:"use-credentials"}):e.value.link.push({rel:"manifest",href:s})}}return});export{o as _};