var h=this&&this.__asyncValues||import{directive as t,NodePart as p}from"../lit-html.js";export const asyncReplace=t((value,m)=>async part=>{var o,t;if(!(part instanceof p)){throw new Error("asyncReplace can only be used in text bindings")}if(value===part.value){return}const i=new p(part.options);part.value=value;let l=0;try{for(var u=h(value),v;v=await u.next(),!v.done;){let t=v.value;if(part.value!==value){break}if(l===0){part.clear();i.appendIntoPart(part)}if(m!==undefined){t=m(t,l)}i.setValue(t);i.commit();l++}}catch(t){o={error:t}}finally{try{if(v&&!v.done&&(t=u.return))await t.call(u)}finally{if(o)throw o.error}}});