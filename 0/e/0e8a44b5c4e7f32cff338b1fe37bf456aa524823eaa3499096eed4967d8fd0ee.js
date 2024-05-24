(self.webpackChunkDestination=self.webpackChunkDestination||[]).push([[845],{1291:(e,t,r)=>{"use strict";const n=r(6150),o=r(6086);class s extends Error{constructor(e){if(!Array.isArray(e))throw new TypeError("Expected input to be an Array, got "+typeof e);let t=(e=[...e].map((e=>e instanceof Error?e:null!==e&&"object"==typeof e?Object.assign(new Error(e.message),e):new Error(e)))).map((e=>"string"==typeof e.stack?o(e.stack).replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""):String(e))).join("\n");t="\n"+n(t,4),super(t),this.name="AggregateError",Object.defineProperty(this,"_errors",{value:e})}*[Symbol.iterator](){for(const e of this._errors)yield e}}e.exports=s},6086:(e,t,r)=>{"use strict";const n=r(1209),o=/\s+at.*(?:\(|\s)(.*)\)?/,s=/^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,a=void 0===n.homedir?"":n.homedir();e.exports=(e,t)=>(t=Object.assign({pretty:!1},t),e.replace(/\\/g,"/").split("\n").filter((e=>{const t=e.match(o);if(null===t||!t[1])return!0;const r=t[1];return!r.includes(".app/Contents/Resources/electron.asar")&&!r.includes(".app/Contents/Resources/default_app.asar")&&!s.test(r)})).filter((e=>""!==e.trim())).map((e=>t.pretty?e.replace(o,((e,t)=>e.replace(t,t.replace(a,"~")))):e)).join("\n"))},6150:e=>{"use strict";e.exports=(e,t=1,r)=>{if(r={indent:" ",includeEmptyLines:!1,...r},"string"!=typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!=typeof t)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if("string"!=typeof r.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);if(0===t)return e;const n=r.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(n,r.indent.repeat(t))}},3962:(e,t,r)=>{"use strict";r.r(t),r.d(t,{generatePlugins:()=>u});var n=r(6783),o=r(1374),s=r(6146);async function a(e,t){const r=Array.from(window.document.querySelectorAll("script")).find((t=>t.src===e));if(void 0!==r){const e=r?.getAttribute("status");if("loaded"===e)return r;if("loading"===e)return new Promise(((e,t)=>{r.addEventListener("load",(()=>e(r))),r.addEventListener("error",(e=>t(e)))}))}return new Promise(((r,n)=>{const o=window.document.createElement("script");o.type="text/javascript",o.src=e,o.async=!0,o.setAttribute("status","loading");for(const[e,r]of Object.entries(t??{}))o.setAttribute(e,r);o.onload=()=>{o.onerror=o.onload=null,o.setAttribute("status","loaded"),r(o)},o.onerror=()=>{o.onerror=o.onload=null,o.setAttribute("status","error"),n(new Error(`Failed to load ${e}`))};const s=window.document.getElementsByTagName("script")[0];s.parentElement?.insertBefore(o,s)}))}async function i(e,t){return new Promise(((r,n)=>{if(e())return void r();const o=()=>setTimeout((()=>{e()?r():o()}),t);o()}))}function u(e,t,r){let u,c,p,l=!1;const h=async(r,n)=>{l||(p?await p:(c=n,p=e.initialize?.({settings:t,analytics:c},{loadScript:a,resolveWhen:i}),u=await p,l=!0))};return Object.entries(e.actions).reduce(((a,[i,p])=>{const f=r.filter((e=>e.enabled&&e.partnerAction===i));if(0===f.length)return a;async function y(e){const r=[];for(const a of f){if(!(0,o.Z)((0,s.Z)(a.subscribe),e.event))continue;const i=a.mapping??{},l={payload:(0,n.vs)(i,e.event),mapping:i,settings:t,analytics:c,context:e};r.push(p.perform(u,l))}return await Promise.all(r),e}const d={name:`${e.name} ${i}`,type:p.lifecycleHook??"destination",version:"0.1.0",ready:()=>Promise.resolve(),isLoaded:()=>l,load:h,track:y,page:y,alias:y,identify:y,group:y};return a.push(d),a}),[])}},7128:(e,t,r)=>{"use strict";let n;r.d(t,{U:()=>o});try{n=new RegExp("\\[(?=\"|'|\\d)|\\.|(?<=\"|'|\\d)]+","g")}catch(e){n=/\[|\.|]+/g}function o(e,t){if(""===t||"."===t)return e;if(null===t||null==t)return;return(Array.isArray(t)?t:t.split(n).filter((e=>e)).map((e=>e.replace(/'|"/g,"")))).reduce(((e,t)=>e&&e[t]),e)}},6783:(e,t,r)=>{"use strict";r.d(t,{tY:()=>P,a8:()=>C,vs:()=>L});var n=r(7128),o=r(6933);function s(e){if(!(0,o.Kn)(e))return!1;const t=Object.keys(e);if(!t.some((e=>e.startsWith("@"))))return!1;return 0===t.filter((e=>!e.startsWith("@")&&"_metadata"!==e)).length}function a(e){if(Array.isArray(e))return e.map((e=>a(e)));if((0,o.Kn)(e)){const t=Object.assign({},e);return Object.keys(t).forEach((e=>{void 0===t[e]?delete t[e]:t[e]=a(t[e])})),t}return e}var i=r(1291),u=r.n(i),c=r(2501);class p extends c.CustomError{constructor(e,t=[]){super(`/${t.join("/")} ${e}.`)}}function l(e){const t=[];return e.forEach((e=>{e instanceof u()?t.push(...e):t.push(e)})),t}function h(e){const t=(0,o.X6)(e);return"object"===t&&Object.keys(e).some((e=>e.startsWith("@")))?"directive":t}const f={};function y(e,t=[]){if(!s(e)&&!(0,o.Kn)(e)){const r=(0,o.X6)(e);throw new p(`should be a directive object but it is ${_(r)} ${r}`,t)}const r=Object.keys(e),n=r.filter((e=>e.startsWith("@")));if(n.length>1)throw new p(`should only have one @-prefixed key but it has ${n.length} keys`,t);if(r.filter((e=>!e.startsWith("@")&&"_metadata"!==e)).length>0)throw new p(`should only have one @-prefixed key but it has ${r.length} keys`,t);const a=n[0],i=f[a];if("function"!=typeof i)throw new p(`has an invalid directive: ${a}`,t);i(e[a],t)}function d(e,t=[]){const r=h(e);switch(r){case"directive":return y(e,t);case"object":case"array":case"boolean":case"string":case"number":case"null":return;default:throw new p(`should be a mapping directive or a JSON value but it is ${_(r)} ${r}`,t)}}function v(e,t=[]){const r=h(e);switch(r){case"directive":return y(e,t);case"string":return;default:throw new p(`should be a string or a mapping directive but it is ${_(r)} ${r}`,t)}}function g(...e){return(t,r=[])=>{e.forEach((e=>{e(t,r)}))}}function w(e,t){return(r,n=[])=>{if("string"==typeof r&&r.length<e)throw new p(`should be a string of length ${e} or greater`,n);if("string"==typeof r&&r.length>t)throw new p(`should be a string of length ${t} or less`,n)}}function m(e,t=[]){const r=h(e);if("string"!==r)throw new p(`should be a string but it is ${_(r)} ${r}`,t)}function b(e,t=[]){const r=h(e);if("boolean"!==r)throw new p(`should be a boolean but it is ${_(r)} ${r}`,t)}function x(e,t=[]){const r=h(e);if("object"!==r)throw new p(`should be an object but it is ${_(r)} ${r}`,t);const n=e,o=Object.keys(n),s=o.find((e=>"@"===e.charAt(0)));if(s)throw new p(`shouldn't have directive (@-prefixed) keys but it has ${JSON.stringify(s)}`,t);const a=[];if(o.forEach((e=>{try{O(n[e],[...t,e])}catch(e){a.push(e)}})),a.length)throw new(u())(l(a))}function E(e,t,r=[]){x(e,r);const n=[],o=e;if(Object.entries(t).forEach((([e,{required:t,optional:s}])=>{try{if(t){if(void 0===o[e])throw new p(`should have field ${JSON.stringify(e)} but it doesn't`,r);t(o[e],[...r,e])}else s&&void 0!==o[e]&&s(o[e],[...r,e])}catch(e){n.push(e)}})),n.length)throw new(u())(l(n))}function k(e,t=[]){const r=(0,o.X6)(e);if("array"!==r)throw new p(`should be an array but it is ${_(r)} ${r}`,t)}function $(e,t){Array.isArray(e)||(e=[e]),e.forEach((e=>{f[e]=(r,n=[])=>{try{t(r,[...n,e])}catch(e){if(e instanceof p||e instanceof u())throw e;throw new p(e.message,n)}}}))}function _(e){switch(e.charAt(0)){case"a":case"e":case"i":case"o":case"u":return"an";default:return"a"}}function O(e,t=[]){switch(h(e)){case"directive":return y(e,t);case"object":return x(e,t);case"array":return k(e,t);default:return null}}function S(e,t=!0){return null==e?t?[]:e:(0,o.kJ)(e)?e:[e]}$("@if",((e,t)=>{E(e,{exists:{optional:d},then:{optional:d},else:{optional:d}},t)})),$("@case",((e,t)=>{E(e,{operator:{optional:m},value:{optional:v}},t)})),$("@replace",((e,t)=>{E(e,{pattern:{required:g(m,w(1,P))},replacement:{optional:g(m,w(0,C))},value:{required:v},ignorecase:{optional:b},global:{optional:b}},t)})),$("@arrayPath",((e,t)=>{const r=e;k(r,t),v(r[0],t),O(r[1],t)})),$("@path",((e,t)=>{v(e,t)})),$("@template",((e,t)=>{v(e,t)})),$("@literal",((e,t)=>{d(e,t)}));const j={},A=/^@[a-z][a-zA-Z0-9]+$/;function I(e,t){if(!A.exec(e))throw new Error(`"${e}" is an invalid directive name`);j[e]=t}function N(e,t){I(e,((r,n)=>{const s=q(r,n);if("string"!=typeof s)throw new Error(`${e}: expected string, got ${(0,o.X6)(s)}`);return t(s,n)}))}I("@if",((e,t)=>{let r=!1;if(!(0,o.Kn)(e))throw new Error('@if requires an object with an "exists" key');if(!e.exists&&!e.blank)throw new Error('@if requires an "exists" key or a "blank" key');if(void 0!==e.exists){const n=q(e.exists,t);r=null!=n}else if(void 0!==e.blank){const n=q(e.blank,t);r=null!=n&&""!=n}return r&&void 0!==e.then?q(e.then,t):!r&&e.else?q(e.else,t):void 0})),I("@case",((e,t)=>{if(!(0,o.Kn)(e))throw new Error('@case requires an object with a "operator" key');if(!e.operator)throw new Error('@case requires a "operator" key');const r=e.operator;if(e.value){const n=q(e.value,t);if("string"==typeof n)switch(r){case"lower":return n.toLowerCase();case"upper":return n.toUpperCase();default:throw new Error('operator key should have a value of "lower" or "upper"')}return n}}));const P=10,C=10;function q(e,t){if(!(0,o.Kn)(e)&&!(0,o.kJ)(e))return e;if(s(e))return function(e,t){const r=Object.keys(e).find((e=>e.startsWith("@"))),n=j[r],s=e[r];if("function"!=typeof n)throw new Error(`${r} is not a valid directive, got ${(0,o.X6)(n)}`);return n(s,t)}(e,t);if(Array.isArray(e))return e.map((e=>q(e,t)));const r={};for(const n of Object.keys(e))r[n]=q(e[n],t);return r}function L(e,t={}){const r=(0,o.X6)(t);if("object"!==r)throw new Error(`data must be an object, got ${r}`);O(e);return a(q(e,t))}I("@replace",((e,t)=>{if(!(0,o.Kn)(e))throw new Error('@replace requires an object with a "pattern" key');if(!e.pattern)throw new Error('@replace requires a "pattern" key');null==e.replacement&&(e.replacement=""),null==e.ignorecase&&(e.ignorecase=!1),null==e.global&&(e.global=!0);let r=e.pattern;const n=e.replacement,s=e.ignorecase,a=e.global;if(e.value){const o=q(e.value,t);if("string"==typeof o&&"string"==typeof r&&"string"==typeof n&&"boolean"==typeof s&&"boolean"==typeof a){if(r.length>P)throw new Error(`@replace requires a "pattern" less than ${P} characters`);if(n.length>C)throw new Error(`@replace requires a "replacement" less than ${C} characters`);r=r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");let e="";return a&&(e+="g"),s&&(e+="i"),o.replace(new RegExp(r,e),n)}}})),I("@arrayPath",((e,t)=>{if(!Array.isArray(e))throw new Error(`@arrayPath expected array, got ${(0,o.X6)(e)}`);const[r,s]=e,a="string"==typeof r?(0,n.U)(t,r.replace("$.","")):q(r,t);return["object","array"].includes((0,o.X6)(a))&&"object"===(0,o.X6)(s)&&Object.keys(s).length>0?S(a).map((e=>q(s,e))):a})),N("@path",((e,t)=>(0,n.U)(t,e.replace("$.","")))),N("@template",((e,t)=>function(e,t={}){if("string"!=typeof e)throw new TypeError(`Invalid template! Template should be a "string" but ${(0,o.X6)(e)} was given.`);function r(e){return r=>(r=r.slice(e,-e).trim(),(0,n.U)(t,r)??"")}return e.replace(/\{\{\{([^}]+)\}\}\}/g,r(3)).replace(/\{\{([^}]+)\}\}/g,r(2))}(e,t))),I("@literal",((e,t)=>q(e,t)))},6933:(e,t,r)=>{"use strict";function n(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function o(e){return"object"===n(e)}function s(e){return Array.isArray(e)}r.d(t,{Kn:()=>o,X6:()=>n,kJ:()=>s})},6146:(e,t,r)=>{"use strict";var n;r.d(t,{Z:()=>N}),function(e){e.Err="err",e.Ident="ident",e.Dot="dot",e.Operator="operator",e.Conditional="conditional",e.String="string",e.Number="number",e.Null="null",e.BrackLeft="brackleft",e.BrackRight="brackright",e.ParenLeft="parenleft",e.ParenRight="parenright",e.Comma="comma",e.EOS="eos"}(n||(n={}));const o=e=>({type:n.Ident,value:e}),s=()=>({type:n.Dot,value:"."}),a=e=>({type:n.Operator,value:e}),i=e=>({type:n.Conditional,value:e}),u=e=>({type:n.String,value:e}),c=e=>({type:n.Number,value:e}),p=()=>({type:n.Null,value:"null"}),l=()=>({type:n.BrackLeft,value:"["}),h=()=>({type:n.BrackRight,value:"]"}),f=()=>({type:n.ParenLeft,value:"("}),y=()=>({type:n.ParenRight,value:")"}),d=()=>({type:n.Comma,value:","}),v=()=>({type:n.EOS,value:"eos"});class g{constructor(e){this.code=e,this.position=0}forward(){if(this.code.length===this.position)return{char:"",isEOS:!0};const e=this.code.charAt(this.position);return this.position+=1,{char:e,isEOS:!1}}backward(){if(0===this.position)throw new RangeError;const e=this.code.charAt(this.position);return this.position-=1,{char:e,isEOS:!1}}getPosition(){return this.position}}const w="-1";function m(e){return"\r"===e||"\n"===e}function b(e){return" "===e||"\t"===e||"\n"===e}function x(e){return!!e.match(/[a-z]/i)}function E(e){return e!==w&&(!isNaN(parseFloat(e))&&isFinite(parseInt(e,10)))}function k(e){return e===w||b(e)||","===e||"]"===e||")"===e}class $ extends Error{constructor(e,t){super(e),this.message=e,this.name="LexerError",this.stack=(new Error).stack,this.cursor=t}}class _{constructor(e){this.reader=new g(e),this.cursor={line:0,column:0}}lex(){const e=[];for(;;){const{char:t,isEOS:r}=this.next();if(r)return e.push(v()),e;if(!b(t)){if("!"===t){const t=this.peek();if(x(t)||"("===t){e.push(a("!"));continue}}if(x(t)||"!"===t||"="===t||">"===t||"<"===t||"\\"===t||"_"===t)e.push(this.lexOperatorOrConditional(t));else if(E(t)||"-"===t||"+"===t)e.push(this.lexNumber(t));else if('"'!==t&&"'"!==t)if("."!==t)if("["!==t)if("]"!==t)if(","!==t)if("("!==t){if(")"!==t)throw new $(`invalid character "${t}"`,this.cursor);e.push(y())}else e.push(f());else e.push(d());else e.push(h());else e.push(l());else e.push(s());else e.push(this.lexString(t))}}}lexString(e){let t="";for(;this.peek()!==e;){const{char:e,isEOS:r}=this.next();if(t+=e,r)throw new $("unterminated string",this.cursor);if(t.length>=1e5)throw new $("unreasonable string length",this.cursor)}return this.accept(e),u(`${e}${t}${e}`)}lexNumber(e){let t="",r=this.peek(),n=!1;for(;E(r)||"."===r;){const{char:e}=this.next();if(t+=e,"."===r){if(k(this.peek()))throw new $("unexpected terminator after decimal point",this.cursor);if(n)throw new $("multiple decimal points in one number",this.cursor);n=!0}if(t.length>=1e5)throw new $("unreasonable number length",this.cursor);r=this.peek()}return c(e+t)}lexOperatorOrConditional(e){if("="===e)return a("=");if("!"===e){if(this.accept("="))return a("!=");throw new $(`expected '=' after '!', got '${this.peek()}'`,this.cursor)}return"a"===e?this.accept("nd")?i("and"):this.lexIdent(e):"o"===e?this.accept("r")?i("or"):this.lexIdent(e):"n"===e?this.accept("ull")?p():this.lexIdent(e):"<"===e||">"===e?this.accept("=")?a(e+"="):a(e):this.lexIdent(e)}lexIdent(e){let t="",r=e;for(;;){if("\\"===r){if(this.peek()===w)throw new $("expected character after escape character, got EOS",this.cursor);r=this.next().char}if(t+=r,t.length>=1e5)throw new $("unreasonable literal length",this.cursor);if((n=this.peek())===w||!x(n)&&!E(n)&&"_"!==n&&"-"!==n&&"\\"!==n)break;r=this.next().char}var n;const s=this.peek();if(s!==w&&!k(s)&&"."!==s&&"("!==s&&"="!==s&&"!"!==s)throw new $(`expected termination character after identifier, got ${s}`,this.cursor);return o(t)}accept(e){let t="";for(const r of e){const{char:e,isEOS:r}=this.next();if(t+=e,r)return!1;if(k(e))break}return!(e!==t||!k(this.peek()))||(this.backup(t.length),!1)}next(){const{char:e,isEOS:t}=this.reader.forward();m(e)?(this.cursor.line+=1,this.cursor.column=0):this.cursor.column+=1;return{char:t?w:e,isEOS:t}}peek(){const{char:e,isEOS:t}=this.next();return t||this.backup(1),e}backup(e){for(let t=e;t>0;t--){let e;try{e=this.reader.backward().char}catch(e){return}m(e)?(this.cursor.line-=1,this.cursor.column=0):this.cursor.column-=1}}}const O={type:"event-type",event:"event",name:"name",userId:"userId",context:"event-context",properties:"event-property",traits:"event-trait"},S=e=>"string"===e.type?e.value.replace(/^"/,"").replace(/"$/,""):"number"===e.type?Number(e.value):"ident"===e.type&&["true","false"].includes(e.value)?"true"===e.value:String(e.value),j=e=>"ident"===e.type&&["contains","match"].includes(e.value),A=(e,t,r,{negate:n}={negate:!1})=>{if("contains"===e){r.shift();const e=r.shift();if(!e)throw new Error("contains() is missing a 1st argument");r.shift();const o=r.shift();if(!o)throw new Error("contains() is missing a 2nd argument");r.shift(),["event","name","userId"].includes(e.value)&&t.push({type:e.value,operator:n?"not_contains":"contains",value:String(S(o))}),/^(properties)/.test(e.value)&&t.push({type:"event-property",name:e.value.replace(/^(properties)\./,""),operator:n?"not_contains":"contains",value:String(S(o))}),/^(traits)/.test(e.value)&&t.push({type:"event-trait",name:e.value.replace(/^(traits)\./,""),operator:n?"not_contains":"contains",value:String(S(o))}),/^(context)/.test(e.value)&&t.push({type:"event-context",name:e.value.replace(/^(context)\./,""),operator:n?"not_contains":"contains",value:String(S(o))})}if("match"===e){r.shift();const e=r.shift();if(!e)throw new Error("match() is missing a 1st argument");r.shift();const o=r.shift();if(!o)throw new Error("match() is missing a 2nd argument");let s,a;r.shift(),o.value.endsWith('*"')?(s=n?"not_starts_with":"starts_with",a=String(S(o)).slice(0,-1)):(s=n?"not_ends_with":"ends_with",a=String(S(o)).slice(1)),["event","name","userId"].includes(e.value)&&t.push({type:e.value,operator:s,value:a}),/^(properties)/.test(e.value)&&t.push({type:"event-property",name:e.value.replace(/^(properties)\./,""),operator:s,value:a}),/^(traits)/.test(e.value)&&t.push({type:"event-trait",name:e.value.replace(/^(traits)\./,""),operator:s,value:a}),/^(context)/.test(e.value)&&t.push({type:"event-context",name:e.value.replace(/^(context)\./,""),operator:s,value:a})}},I=e=>{var t;const r=[];let o="and",s=e.shift();for(;s&&"eos"!==s.type;){if("ident"===s.type){const[n]=(null!==(t=s.value)&&void 0!==t?t:"").split("."),o=O[n];if(o){const t=e.shift();if(!t)throw new Error("Operator token is missing");const n=e.shift();if(!n)throw new Error("Value token is missing");const a="="===t.value&&"true"===n.value,i="="===t.value&&"false"===n.value,u="!="===t.value&&"null"===n.value,c="="===t.value&&"null"===n.value;"event"===o?r.push({type:"event",operator:t.value,value:String(S(n))}):"event-type"===o?r.push({type:"event-type",operator:t.value,value:String(S(n))}):"name"===o?u?r.push({type:"name",operator:"exists"}):c?r.push({type:"name",operator:"not_exists"}):r.push({type:"name",operator:t.value,value:String(S(n))}):"userId"===o?u?r.push({type:"userId",operator:"exists"}):c?r.push({type:"userId",operator:"not_exists"}):a?r.push({type:"userId",operator:"is_true"}):i?r.push({type:"userId",operator:"is_false"}):r.push({type:"userId",operator:t.value,value:String(S(n))}):"event-property"===o?u?r.push({type:"event-property",name:s.value.replace(/^(properties)\./,""),operator:"exists"}):c?r.push({type:"event-property",name:s.value.replace(/^(properties)\./,""),operator:"not_exists"}):a?r.push({type:"event-property",name:s.value.replace(/^(properties)\./,""),operator:"is_true"}):i?r.push({type:"event-property",name:s.value.replace(/^(properties)\./,""),operator:"is_false"}):r.push({type:"event-property",name:s.value.replace(/^(properties)\./,""),operator:t.value,value:S(n)}):"event-trait"===o?u?r.push({type:"event-trait",name:s.value.replace(/^(traits)\./,""),operator:"exists"}):c?r.push({type:"event-trait",name:s.value.replace(/^(traits)\./,""),operator:"not_exists"}):a?r.push({type:"event-trait",name:s.value.replace(/^(traits)\./,""),operator:"is_true"}):i?r.push({type:"event-trait",name:s.value.replace(/^(traits)\./,""),operator:"is_false"}):r.push({type:"event-trait",name:s.value.replace(/^(traits)\./,""),operator:t.value,value:S(n)}):"event-context"===o&&(u?r.push({type:"event-context",name:s.value.replace(/^(context)\./,""),operator:"exists"}):c?r.push({type:"event-context",name:s.value.replace(/^(context)\./,""),operator:"not_exists"}):a?r.push({type:"event-context",name:s.value.replace(/^(context)\./,""),operator:"is_true"}):i?r.push({type:"event-context",name:s.value.replace(/^(context)\./,""),operator:"is_false"}):r.push({type:"event-context",name:s.value.replace(/^(context)\./,""),operator:t.value,value:S(n)}))}j(s)&&A(s.value,r,e)}if("operator"===s.type&&"!"===s.value&&j(e[0])){const t=e[0].value;e.shift(),A(t,r,e,{negate:!0})}if("parenleft"===s.type){const t=[];let o=e.shift();for(;"parenright"!==o.type;)t.push(o),o=e.shift();t.push({type:n.EOS,value:"eos"}),r.push(I(t))}"conditional"===s.type&&(o=s.value),s=e.shift()}return r.length>1?{type:"group",operator:o,children:r}:r[0]},N=e=>{try{const t=I((e=>{const t=[];let r=0;for(;e[r];){const o=t[t.length-1],s=e[r],a=e[r+1];if("ident"===(null==o?void 0:o.type)&&"dot"===s.type&&"ident"===(null==a?void 0:a.type)){const e=t.pop();t.push({type:n.Ident,value:`${null==e?void 0:e.value}${s.value}${a.value}`}),r+=2}else t.push(e[r]),r++}return t})(function(e){try{return{tokens:new _(e).lex()}}catch(e){return{tokens:[],error:e}}}(e).tokens));return"group"!==t.type?{type:"group",operator:"and",children:[t]}:t}catch(t){return{error:t instanceof Error?t:new Error(`Error while parsing ${e}`)}}}},1374:(e,t,r)=>{"use strict";function n(e,t,r){if(!t)return r;const n=(Array.isArray(t)?t:t.match(/([^[.\]])+/g)).reduce(((e,t)=>e&&e[t]),e);return void 0===n?r:n}r.d(t,{Z:()=>s});const o=(e,t)=>"and"===e.operator?e.children.every((e=>a(e,t))):"or"===e.operator&&e.children.some((e=>a(e,t))),s=(e,t)=>!e.error&&void 0!==t&&o(e,t),a=(e,t)=>"event-type"===e.type?i(t.type,e.operator,e.value):"event"===e.type?i(t.event,e.operator,e.value):"name"===e.type?i(t.name,e.operator,e.value):"userId"===e.type?i(t.userId,e.operator,e.value):"event-property"===e.type?i(n(t.properties,e.name),e.operator,e.value):"event-trait"===e.type?i(n(t.traits,e.name),e.operator,e.value):"event-context"===e.type?i(n(t.context,e.name),e.operator,e.value):"group"===e.type&&o(e,t),i=(e,t,r)=>{switch(t){case"=":return e===String(r);case"!=":return e!==String(r);case"<":return"number"==typeof e&&Number(e)<Number(r);case"<=":return"number"==typeof e&&Number(e)<=Number(r);case">":return"number"==typeof e&&Number(e)>Number(r);case">=":return"number"==typeof e&&Number(e)>=Number(r);case"contains":return"string"==typeof e&&e.includes(String(r));case"not_contains":return"string"==typeof e&&!e.includes(String(r));case"starts_with":return"string"==typeof e&&e.startsWith(String(r));case"not_starts_with":return"string"==typeof e&&!e.startsWith(String(r));case"ends_with":return"string"==typeof e&&e.endsWith(String(r));case"not_ends_with":return"string"==typeof e&&!e.endsWith(String(r));case"exists":return null!=e;case"not_exists":return null==e;case"is_true":return"boolean"==typeof e&&!0===e;case"is_false":return"boolean"==typeof e&&!1===e;default:return!1}}},1209:()=>{},2501:(e,t,r)=>{"use strict";function n(e,t){void 0===t&&(t=e.constructor);var r=Error.captureStackTrace;r&&r(e,t)}r.r(t),r.d(t,{CustomError:()=>a,customErrorFactory:()=>u});var o,s=(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},o(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e){function t(t){var r,o,s,a=this.constructor,i=e.call(this,t)||this;return Object.defineProperty(i,"name",{value:a.name,enumerable:!1,configurable:!0}),r=i,o=a.prototype,(s=Object.setPrototypeOf)?s(r,o):r.__proto__=o,n(i),i}return s(t,e),t}(Error),i=function(){for(var e=arguments,t=0,r=0,n=arguments.length;r<n;r++)t+=e[r].length;var o=Array(t),s=0;for(r=0;r<n;r++)for(var a=arguments[r],i=0,u=a.length;i<u;i++,s++)o[s]=a[i];return o};function u(e,t){function r(){for(var o=arguments,s=[],a=0;a<arguments.length;a++)s[a]=o[a];if(!(this instanceof r))return new(r.bind.apply(r,i([void 0],s)));t.apply(this,s),Object.defineProperty(this,"name",{value:e.name||t.name,enumerable:!1,configurable:!0}),e.apply(this,s),n(this,r)}return void 0===t&&(t=Error),Object.defineProperties(r,{prototype:{value:Object.create(t.prototype,{constructor:{value:r,writable:!0,configurable:!0}})}})}}}]);
//# sourceMappingURL=16b34c486b3afe671eeb.js.map