import{directive as t,NodePart as i}from"../lit-html.js";const l=new WeakMap;export const templateContent=t(m=>part=>{if(!(part instanceof i)){throw new Error("templateContent can only be used in text bindings")}const t=l.get(part);if(t!==undefined&&m===t.template&&part.value===t.fragment){return}const o=document.importNode(m.content,true);part.setValue(o);l.set(part,{template:m,fragment:o})});