var h=this&&this.__asyncValues||import{createMarker as p,directive as t,NodePart as N}from"../lit-html.js";export const asyncAppend=t((value,m)=>async part=>{var o,t;if(!(part instanceof N)){throw new Error("asyncAppend can only be used in text bindings")}if(value===part.value){return}part.value=value;let i;let l=0;try{for(var u=h(value),v;v=await u.next(),!v.done;){let t=v.value;if(part.value!==value){break}if(l===0){part.clear()}if(m!==undefined){t=m(t,l)}let o=part.startNode;if(i!==undefined){o=p();i.endNode=o;part.endNode.parentNode.insertBefore(o,part.endNode)}i=new N(part.options);i.insertAfterNode(o);i.setValue(t);i.commit();l++}}catch(t){o={error:t}}finally{try{if(v&&!v.done&&(t=u.return))await t.call(u)}finally{if(o)throw o.error}}});