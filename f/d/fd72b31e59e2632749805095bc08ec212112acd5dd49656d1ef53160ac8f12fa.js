import{AttributePart as o,BooleanAttributePart as l,directive as t,EventPart as m,NodePart as g,PropertyPart as h}from"../lit-html.js";export const live=t(value=>part=>{let t;if(part instanceof m||part instanceof g){throw new Error("The `live` directive is not allowed on text or event bindings")}if(part instanceof l){u(part.strings);t=part.element.hasAttribute(part.name);part.value=t}else{const{element,name,strings:i}=part.committer;u(i);if(part instanceof h){t=element[name];if(t===value){return}}else if(part instanceof o){t=element.getAttribute(name)}if(t===String(value)){return}}part.setValue(value)});const u=t=>{if(t.length!==2||t[0]!==""||t[1]!==""){throw new Error("`live` bindings can only contain a single expression")}};