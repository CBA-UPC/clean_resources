import{ApolloLink as c}from"./bundle.esm_43932ba3_r24-02-0_b0_t240129-161140.js";import"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";import"./bundle.esm_43583291_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";const x=new c((t,a)=>a(t).map(g=>{const e=new Date,{requestStart:n}=t.getContext();if(!n)throw new TypeError("requestContextLink was not processed!");const r=e.getTime()-n.getTime(),o={sent:n.toISOString(),received:e.toISOString(),duration:r},i=t.getContext().response.headers.get("x-timings-gateway");if(i){const s=parseInt(i,10);s&&Object.assign(o,{serverDuration:s,networkLatency:r-s})}return t.setContext({requestEnd:e,timings:o}),g}));export{x as default};