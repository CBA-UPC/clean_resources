function z(e,t){if(!!!e)throw new Error(t)}function Ot(e){return typeof e=="object"&&e!==null}function Dt(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}const bt=/\r\n|[\n\r]/g;function Q(e,t){let n=0,r=1;for(const i of e.body.matchAll(bt)){if(typeof i.index=="number"||Dt(!1),i.index>=t)break;n=i.index+i[0].length,r+=1}return{line:r,column:t+1-n}}function Pt(e){return Ne(e.source,Q(e.source,e.start))}function Ne(e,t){const n=e.locationOffset.column-1,r="".padStart(n)+e.body,i=t.line-1,s=e.locationOffset.line-1,a=t.line+s,d=t.line===1?n:0,p=t.column+d,c=`${e.name}:${a}:${p}
`,h=r.split(/\r\n|[\n\r]/g),f=h[i];if(f.length>120){const g=Math.floor(p/80),m=p%80,E=[];for(let S=0;S<f.length;S+=80)E.push(f.slice(S,S+80));return c+Ee([[`${a} |`,E[0]],...E.slice(1,g+1).map(S=>["|",S]),["|","^".padStart(m)],["|",E[g+1]]])}return c+Ee([[`${a-1} |`,h[i-1]],[`${a} |`,f],["|","^".padStart(p)],[`${a+1} |`,h[i+1]]])}function Ee(e){const t=e.filter(([r,i])=>i!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,i])=>r.padStart(n)+(i?" "+i:"")).join(`
`)}function xt(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class ee extends Error{constructor(t,...n){var r,i,s;const{nodes:a,source:d,positions:p,path:c,originalError:h,extensions:f}=xt(n);super(t),this.name="GraphQLError",this.path=c??void 0,this.originalError=h??void 0,this.nodes=Ie(Array.isArray(a)?a:a?[a]:void 0);const g=Ie((r=this.nodes)===null||r===void 0?void 0:r.map(E=>E.loc).filter(E=>E!=null));this.source=d??(g==null||(i=g[0])===null||i===void 0?void 0:i.source),this.positions=p??(g==null?void 0:g.map(E=>E.start)),this.locations=p&&d?p.map(E=>Q(d,E)):g==null?void 0:g.map(E=>Q(E.source,E.start));const m=Ot(h==null?void 0:h.extensions)?h==null?void 0:h.extensions:void 0;this.extensions=(s=f??m)!==null&&s!==void 0?s:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),h!=null&&h.stack?Object.defineProperty(this,"stack",{value:h.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,ee):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+Pt(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+Ne(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function Ie(e){return e===void 0||e.length===0?void 0:e}function _(e,t,n){return new ee(`Syntax Error: ${n}`,{source:e,positions:[t]})}class wt{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Ae{constructor(t,n,r,i,s,a){this.kind=t,this.start=n,this.end=r,this.line=i,this.column=s,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Lt={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]};new Set(Object.keys(Lt));var O;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(O||(O={}));var J;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(J||(J={}));var l;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(l||(l={}));function Ct(e){return e===9||e===32}function w(e){return e>=48&&e<=57}function Oe(e){return e>=97&&e<=122||e>=65&&e<=90}function De(e){return Oe(e)||e===95}function Ft(e){return Oe(e)||w(e)||e===95}function Rt(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,i=-1;for(let a=0;a<e.length;++a){var s;const d=e[a],p=kt(d);p!==d.length&&(r=(s=r)!==null&&s!==void 0?s:a,i=a,a!==0&&p<n&&(n=p))}return e.map((a,d)=>d===0?a:a.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,i+1)}function kt(e){let t=0;for(;t<e.length&&Ct(e.charCodeAt(t));)++t;return t}var o;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(o||(o={}));class Vt{constructor(t){const n=new Ae(o.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==o.EOF)do if(t.next)t=t.next;else{const n=Ut(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===o.COMMENT);return t}}function $t(e){return e===o.BANG||e===o.DOLLAR||e===o.AMP||e===o.PAREN_L||e===o.PAREN_R||e===o.SPREAD||e===o.COLON||e===o.EQUALS||e===o.AT||e===o.BRACKET_L||e===o.BRACKET_R||e===o.BRACE_L||e===o.PIPE||e===o.BRACE_R}function b(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function M(e,t){return be(e.charCodeAt(t))&&Pe(e.charCodeAt(t+1))}function be(e){return e>=55296&&e<=56319}function Pe(e){return e>=56320&&e<=57343}function N(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return o.EOF;if(n>=32&&n<=126){const r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function I(e,t,n,r,i){const s=e.line,a=1+n-e.lineStart;return new Ae(t,n,r,s,a,i)}function Ut(e,t){const n=e.source.body,r=n.length;let i=t;for(;i<r;){const s=n.charCodeAt(i);switch(s){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:n.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return Bt(e,i);case 33:return I(e,o.BANG,i,i+1);case 36:return I(e,o.DOLLAR,i,i+1);case 38:return I(e,o.AMP,i,i+1);case 40:return I(e,o.PAREN_L,i,i+1);case 41:return I(e,o.PAREN_R,i,i+1);case 46:if(n.charCodeAt(i+1)===46&&n.charCodeAt(i+2)===46)return I(e,o.SPREAD,i,i+3);break;case 58:return I(e,o.COLON,i,i+1);case 61:return I(e,o.EQUALS,i,i+1);case 64:return I(e,o.AT,i,i+1);case 91:return I(e,o.BRACKET_L,i,i+1);case 93:return I(e,o.BRACKET_R,i,i+1);case 123:return I(e,o.BRACE_L,i,i+1);case 124:return I(e,o.PIPE,i,i+1);case 125:return I(e,o.BRACE_R,i,i+1);case 34:return n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34?zt(e,i):Wt(e,i)}if(w(s)||s===45)return Mt(e,i,s);if(De(s))return qt(e,i);throw _(e.source,i,s===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:b(s)||M(n,i)?`Unexpected character: ${N(e,i)}.`:`Invalid character: ${N(e,i)}.`)}return I(e,o.EOF,r,r)}function Bt(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const s=n.charCodeAt(i);if(s===10||s===13)break;if(b(s))++i;else if(M(n,i))i+=2;else break}return I(e,o.COMMENT,t,i,n.slice(t+1,i))}function Mt(e,t,n){const r=e.source.body;let i=t,s=n,a=!1;if(s===45&&(s=r.charCodeAt(++i)),s===48){if(s=r.charCodeAt(++i),w(s))throw _(e.source,i,`Invalid number, unexpected digit after 0: ${N(e,i)}.`)}else i=q(e,i,s),s=r.charCodeAt(i);if(s===46&&(a=!0,s=r.charCodeAt(++i),i=q(e,i,s),s=r.charCodeAt(i)),(s===69||s===101)&&(a=!0,s=r.charCodeAt(++i),(s===43||s===45)&&(s=r.charCodeAt(++i)),i=q(e,i,s),s=r.charCodeAt(i)),s===46||De(s))throw _(e.source,i,`Invalid number, expected digit but got: ${N(e,i)}.`);return I(e,a?o.FLOAT:o.INT,t,i,r.slice(t,i))}function q(e,t,n){if(!w(n))throw _(e.source,t,`Invalid number, expected digit but got: ${N(e,t)}.`);const r=e.source.body;let i=t+1;for(;w(r.charCodeAt(i));)++i;return i}function Wt(e,t){const n=e.source.body,r=n.length;let i=t+1,s=i,a="";for(;i<r;){const d=n.charCodeAt(i);if(d===34)return a+=n.slice(s,i),I(e,o.STRING,t,i+1,a);if(d===92){a+=n.slice(s,i);const p=n.charCodeAt(i+1)===117?n.charCodeAt(i+2)===123?jt(e,i):Gt(e,i):Ht(e,i);a+=p.value,i+=p.size,s=i;continue}if(d===10||d===13)break;if(b(d))++i;else if(M(n,i))i+=2;else throw _(e.source,i,`Invalid character within String: ${N(e,i)}.`)}throw _(e.source,i,"Unterminated string.")}function jt(e,t){const n=e.source.body;let r=0,i=3;for(;i<12;){const s=n.charCodeAt(t+i++);if(s===125){if(i<5||!b(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|x(s),r<0)break}throw _(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}function Gt(e,t){const n=e.source.body,r=_e(n,t+2);if(b(r))return{value:String.fromCodePoint(r),size:6};if(be(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const i=_e(n,t+8);if(Pe(i))return{value:String.fromCodePoint(r,i),size:12}}throw _(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function _e(e,t){return x(e.charCodeAt(t))<<12|x(e.charCodeAt(t+1))<<8|x(e.charCodeAt(t+2))<<4|x(e.charCodeAt(t+3))}function x(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Ht(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw _(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function zt(e,t){const n=e.source.body,r=n.length;let i=e.lineStart,s=t+3,a=s,d="";const p=[];for(;s<r;){const c=n.charCodeAt(s);if(c===34&&n.charCodeAt(s+1)===34&&n.charCodeAt(s+2)===34){d+=n.slice(a,s),p.push(d);const h=I(e,o.BLOCK_STRING,t,s+3,Rt(p).join(`
`));return e.line+=p.length-1,e.lineStart=i,h}if(c===92&&n.charCodeAt(s+1)===34&&n.charCodeAt(s+2)===34&&n.charCodeAt(s+3)===34){d+=n.slice(a,s),a=s+1,s+=4;continue}if(c===10||c===13){d+=n.slice(a,s),p.push(d),c===13&&n.charCodeAt(s+1)===10?s+=2:++s,d="",a=s,i=s;continue}if(b(c))++s;else if(M(n,s))s+=2;else throw _(e.source,s,`Invalid character within String: ${N(e,s)}.`)}throw _(e.source,s,"Unterminated string.")}function qt(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const s=n.charCodeAt(i);if(Ft(s))++i;else break}return I(e,o.NAME,t,i,n.slice(t,i))}const Yt=10,xe=2;function we(e){return W(e,[])}function W(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return Qt(e,t);default:return String(e)}}function Qt(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(Jt(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:W(r,n)}else if(Array.isArray(e))return Zt(e,n);return Xt(e,n)}function Jt(e){return typeof e.toJSON=="function"}function Xt(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>xe?"["+Kt(e)+"]":"{ "+n.map(([i,s])=>i+": "+W(s,t)).join(", ")+" }"}function Zt(e,t){if(e.length===0)return"[]";if(t.length>xe)return"[Array]";const n=Math.min(Yt,e.length),r=e.length-n,i=[];for(let s=0;s<n;++s)i.push(W(e[s],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function Kt(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}const en=globalThis.process?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var r;const i=n.prototype[Symbol.toStringTag],s=Symbol.toStringTag in t?t[Symbol.toStringTag]:(r=t.constructor)===null||r===void 0?void 0:r.name;if(i===s){const a=we(t);throw new Error(`Cannot use ${i} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Le{constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||z(!1,`Body must be a string. Received: ${we(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||z(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||z(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function tn(e){return en(e,Le)}function nn(e,t){return new rn(e,t).parseDocument()}class rn{constructor(t,n={}){const r=tn(t)?t:new Le(t);this._lexer=new Vt(r),this._options=n,this._tokenCounter=0}parseName(){const t=this.expectToken(o.NAME);return this.node(t,{kind:l.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:l.DOCUMENT,definitions:this.many(o.SOF,this.parseDefinition,o.EOF)})}parseDefinition(){if(this.peek(o.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===o.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw _(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(o.BRACE_L))return this.node(t,{kind:l.OPERATION_DEFINITION,operation:O.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let r;return this.peek(o.NAME)&&(r=this.parseName()),this.node(t,{kind:l.OPERATION_DEFINITION,operation:n,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(o.NAME);switch(t.value){case"query":return O.QUERY;case"mutation":return O.MUTATION;case"subscription":return O.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(o.PAREN_L,this.parseVariableDefinition,o.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:l.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(o.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(o.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(o.DOLLAR),this.node(t,{kind:l.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:l.SELECTION_SET,selections:this.many(o.BRACE_L,this.parseSelection,o.BRACE_R)})}parseSelection(){return this.peek(o.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let r,i;return this.expectOptionalToken(o.COLON)?(r=n,i=this.parseName()):i=n,this.node(t,{kind:l.FIELD,alias:r,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(o.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(o.PAREN_L,n,o.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,r=this.parseName();return this.expectToken(o.COLON),this.node(n,{kind:l.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(o.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(o.NAME)?this.node(t,{kind:l.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:l.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:l.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:l.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case o.BRACKET_L:return this.parseList(t);case o.BRACE_L:return this.parseObject(t);case o.INT:return this.advanceLexer(),this.node(n,{kind:l.INT,value:n.value});case o.FLOAT:return this.advanceLexer(),this.node(n,{kind:l.FLOAT,value:n.value});case o.STRING:case o.BLOCK_STRING:return this.parseStringLiteral();case o.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:l.BOOLEAN,value:!0});case"false":return this.node(n,{kind:l.BOOLEAN,value:!1});case"null":return this.node(n,{kind:l.NULL});default:return this.node(n,{kind:l.ENUM,value:n.value})}case o.DOLLAR:if(t)if(this.expectToken(o.DOLLAR),this._lexer.token.kind===o.NAME){const r=this._lexer.token.value;throw _(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:l.STRING,value:t.value,block:t.kind===o.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:l.LIST,values:this.any(o.BRACKET_L,n,o.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:l.OBJECT,fields:this.any(o.BRACE_L,n,o.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,r=this.parseName();return this.expectToken(o.COLON),this.node(n,{kind:l.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(o.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(o.AT),this.node(n,{kind:l.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(o.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(o.BRACKET_R),n=this.node(t,{kind:l.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(o.BANG)?this.node(t,{kind:l.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:l.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(o.STRING)||this.peek(o.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),i=this.many(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);return this.node(t,{kind:l.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:i})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(o.COLON);const r=this.parseNamedType();return this.node(t,{kind:l.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),i=this.parseConstDirectives();return this.node(t,{kind:l.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:i})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:l.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:s,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(o.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseFieldDefinition,o.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),i=this.parseArgumentDefs();this.expectToken(o.COLON);const s=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(t,{kind:l.FIELD_DEFINITION,description:n,name:r,arguments:i,type:s,directives:a})}parseArgumentDefs(){return this.optionalMany(o.PAREN_L,this.parseInputValueDef,o.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(o.COLON);const i=this.parseTypeReference();let s;this.expectOptionalToken(o.EQUALS)&&(s=this.parseConstValueLiteral());const a=this.parseConstDirectives();return this.node(t,{kind:l.INPUT_VALUE_DEFINITION,description:n,name:r,type:i,defaultValue:s,directives:a})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:l.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:s,fields:a})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),i=this.parseConstDirectives(),s=this.parseUnionMemberTypes();return this.node(t,{kind:l.UNION_TYPE_DEFINITION,description:n,name:r,directives:i,types:s})}parseUnionMemberTypes(){return this.expectOptionalToken(o.EQUALS)?this.delimitedMany(o.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),i=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();return this.node(t,{kind:l.ENUM_TYPE_DEFINITION,description:n,name:r,directives:i,values:s})}parseEnumValuesDefinition(){return this.optionalMany(o.BRACE_L,this.parseEnumValueDefinition,o.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(t,{kind:l.ENUM_VALUE_DEFINITION,description:n,name:r,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw _(this._lexer.source,this._lexer.token.start,`${R(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),i=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();return this.node(t,{kind:l.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:i,fields:s})}parseInputFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseInputValueDef,o.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===o.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.optionalMany(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:l.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:l.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:l.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:s})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:l.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:s})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:l.UNION_TYPE_EXTENSION,name:n,directives:r,types:i})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:l.ENUM_TYPE_EXTENSION,name:n,directives:r,values:i})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:l.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:i})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(o.AT);const r=this.parseName(),i=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const a=this.parseDirectiveLocations();return this.node(t,{kind:l.DIRECTIVE_DEFINITION,description:n,name:r,arguments:i,repeatable:s,locations:a})}parseDirectiveLocations(){return this.delimitedMany(o.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(J,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new wt(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw _(this._lexer.source,n.start,`Expected ${Ce(t)}, found ${R(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===o.NAME&&n.value===t)this.advanceLexer();else throw _(this._lexer.source,n.start,`Expected "${t}", found ${R(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===o.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const n=t??this._lexer.token;return _(this._lexer.source,n.start,`Unexpected ${R(n)}.`)}any(t,n,r){this.expectToken(t);const i=[];for(;!this.expectOptionalToken(r);)i.push(n.call(this));return i}optionalMany(t,n,r){if(this.expectOptionalToken(t)){const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}return[]}many(t,n,r){this.expectToken(t);const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}delimitedMany(t,n){this.expectOptionalToken(t);const r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(t!==void 0&&n.kind!==o.EOF&&(++this._tokenCounter,this._tokenCounter>t))throw _(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function R(e){const t=e.value;return Ce(e.kind)+(t!=null?` "${t}"`:"")}function Ce(e){return $t(e)?`"${e}"`:e}var $=function(){return $=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},$.apply(this,arguments)};var V=new Map,X=new Map,Fe=!0,U=!1;function Re(e){return e.replace(/[\s,]+/g," ").trim()}function sn(e){return Re(e.source.body.substring(e.start,e.end))}function on(e){var t=new Set,n=[];return e.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var i=r.name.value,s=sn(r.loc),a=X.get(i);a&&!a.has(s)?Fe&&console.warn("Warning: fragment with name "+i+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):a||X.set(i,a=new Set),a.add(s),t.has(s)||(t.add(s),n.push(r))}else n.push(r)}),$($({},e),{definitions:n})}function an(e){var t=new Set(e.definitions);t.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(i){var s=r[i];s&&typeof s=="object"&&t.add(s)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function cn(e){var t=Re(e);if(!V.has(t)){var n=nn(e,{experimentalFragmentVariables:U,allowLegacyFragmentVariables:U});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");V.set(t,an(on(n)))}return V.get(t)}function D(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var r=e[0];return t.forEach(function(i,s){i&&i.kind==="Document"?r+=i.loc.source.body:r+=i,r+=e[s+1]}),cn(r)}function un(){V.clear(),X.clear()}function ln(){Fe=!1}function dn(){U=!0}function hn(){U=!1}var P={gql:D,resetCaches:un,disableFragmentWarnings:ln,enableExperimentalFragmentVariables:dn,disableExperimentalFragmentVariables:hn};(function(e){e.gql=P.gql,e.resetCaches=P.resetCaches,e.disableFragmentWarnings=P.disableFragmentWarnings,e.enableExperimentalFragmentVariables=P.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=P.disableExperimentalFragmentVariables})(D||(D={}));D.default=D;const u=D;var ke=(e=>(e.Mid="MID",e.Post="POST",e.Pre="PRE",e))(ke||{}),Ve=(e=>(e.AfterResolver="AFTER_RESOLVER",e.BeforeResolver="BEFORE_RESOLVER",e.Validation="VALIDATION",e))(Ve||{}),$e=(e=>(e.Color="COLOR",e.Flavor="FLAVOR",e.Matrix="MATRIX",e.MatrixGrouping="MATRIX_GROUPING",e.Size="SIZE",e.SizeGrouping="SIZE_GROUPING",e.Unknown="UNKNOWN",e.Width="WIDTH",e))($e||{}),Ue=(e=>(e.Ascending="ASCENDING",e.Descending="DESCENDING",e))(Ue||{}),Be=(e=>(e.Default="DEFAULT",e.Helpfulness="HELPFULNESS",e.Rating="RATING",e.SubmittedAt="SUBMITTED_AT",e))(Be||{}),Me=(e=>(e.BestSelling="BEST_SELLING",e.Default="DEFAULT",e.MostFavorites="MOST_FAVORITES",e.NameAscending="NAME_ASCENDING",e.NameDescending="NAME_DESCENDING",e.Newest="NEWEST",e.PriceHighToLow="PRICE_HIGH_TO_LOW",e.PriceLowToHigh="PRICE_LOW_TO_HIGH",e.Random="RANDOM",e.Rating="RATING",e))(Me||{}),We=(e=>(e.Address="ADDRESS",e.General="GENERAL",e.ItemSoldOut="ITEM_SOLD_OUT",e.Payment="PAYMENT",e))(We||{}),je=(e=>(e.AccountCredit="ACCOUNT_CREDIT",e.AmericanExpress="AMERICAN_EXPRESS",e.CarteBlanche="CARTE_BLANCHE",e.DinersClub="DINERS_CLUB",e.Discover="DISCOVER",e.HsnCard="HSN_CARD",e.HsnMasterCard="HSN_MASTER_CARD",e.MasterCard="MASTER_CARD",e.Paypal="PAYPAL",e.QvcCard="QVC_CARD",e.Unknown="UNKNOWN",e.Visa="VISA",e.ZulilyCard="ZULILY_CARD",e))(je||{}),Ge=(e=>(e.Other="OTHER",e.Prop65="PROP65",e))(Ge||{}),He=(e=>(e.Hsn="HSN",e.Qvc="QVC",e))(He||{}),ze=(e=>(e.De="DE",e.Jp="JP",e.Uk="UK",e.Us="US",e))(ze||{}),qe=(e=>(e.Fallback="FALLBACK",e.LandscapeWithoutTitles="LANDSCAPE_WITHOUT_TITLES",e.LandscapeWithTitles="LANDSCAPE_WITH_TITLES",e.PortraitWithoutTitles="PORTRAIT_WITHOUT_TITLES",e.PortraitWithTitles="PORTRAIT_WITH_TITLES",e.Splash="SPLASH",e.Spotlight="SPOTLIGHT",e.SquareWithoutTitles="SQUARE_WITHOUT_TITLES",e.SquareWithTitles="SQUARE_WITH_TITLES",e))(qe||{}),Ye=(e=>(e.Layout="LAYOUT",e.Screen="SCREEN",e))(Ye||{}),Qe=(e=>(e.Landscape="LANDSCAPE",e.None="NONE",e.Portrait="PORTRAIT",e.Square="SQUARE",e))(Qe||{}),Je=(e=>(e.Large="LARGE",e.Medium="MEDIUM",e.None="NONE",e.Small="SMALL",e))(Je||{}),Xe=(e=>(e.Error="ERROR",e.OptedOut="OPTED_OUT",e.Success="SUCCESS",e))(Xe||{}),Ze=(e=>(e.Error="ERROR",e.OptedOut="OPTED_OUT",e.Success="SUCCESS",e))(Ze||{}),Ke=(e=>(e.Error="ERROR",e.OptedOut="OPTED_OUT",e.Success="SUCCESS",e))(Ke||{}),et=(e=>(e.Hsn="HSN",e.Hsn2="HSN2",e.HsnWest="HSN_WEST",e.Plus="PLUS",e.Qvc="QVC",e.Qvc2="QVC2",e.Qvc3="QVC3",e.Qvc5="QVC5",e.Qvc6="QVC6",e.QvcNow="QVC_NOW",e.QvcWest="QVC_WEST",e))(et||{});const tt=u`
    fragment OnAirShowPreviewWidget_BackgroundImage on Television_Show {
  channel {
    placeholderImage {
      uri
    }
  }
}
    `,nt=u`
    fragment OnAirShowPreviewWidget_ShowInfo_ChannelLogo on Television_Channel {
  channelCode
}
    `,it=u`
    fragment OnAirShowPreviewWidget_ShowInfo_Host on Television_ShowHost {
  image {
    uri
  }
  name
}
    `,rt=u`
    fragment OnAirShowPreviewWidget_ShowInfo_Title on Television_Show {
  title
}
    `,st=u`
    fragment OnAirShowPreviewWidget_ShowInfo on Television_Show {
  channel {
    ...OnAirShowPreviewWidget_ShowInfo_ChannelLogo
  }
  hosts {
    ...OnAirShowPreviewWidget_ShowInfo_Host
  }
  ...OnAirShowPreviewWidget_ShowInfo_Title
}
    ${nt}
${it}
${rt}`,pn=u`
    fragment OnAirShowPreviewWidget on Content_OnAirShowPreviewWidget {
  onAirShows {
    ...OnAirShowPreviewWidget_BackgroundImage
    ...OnAirShowPreviewWidget_ShowInfo
  }
}
    ${tt}
${st}`,te=u`
    fragment OnAirShowSwimlaneWidget on Content_OnAirShowSwimlaneWidget {
  onAirShows {
    id
    channel {
      loopingStreamUri
      channelCode
      companyCode
      id
      placeholderImage {
        uri
      }
      streamUri
      telephoneNumber
      title
    }
    description
    endsAt
    startsAt
    title
    hosts {
      name
    }
  }
  shelfStyle
}
    `,y=u`
    fragment ResponsivePicture on Common_ResponsiveImage {
  id
  height
  responsiveMimeTypes
  responsiveWidths
  width
}
    `,ne=u`
    fragment PremiereSpotlightWidget on Content_PremiereSpotlightWidget {
  asset {
    __typename
    id
    companyCodes
    ... on Video_VideoStream {
      isEvergreen
    }
    title
    ... on Video_VideoSeries {
      streams {
        id
        title
      }
    }
  }
  collectionTitle
  image {
    uri
  }
  responsiveImage @include(if: $useFancyImages) {
    ...ResponsivePicture
  }
  title
}
    ${y}`,ie=u`
    fragment MultipleSpotlightWidget on Content_SpotlightCarouselWidget {
  assets @include(if: $isModularLayout) {
    __typename
    id
    companyCodes
    ... on Video_VideoStream {
      isEvergreen
    }
    ... on Video_VideoSeries {
      streams {
        id
        title
      }
    }
    title
    image {
      uri
    }
    description
  }
  title
  shelfStyle
}
    `,re=u`
    fragment SpotlightWidget on Content_SpotlightWidget {
  asset {
    __typename
    id
    companyCodes
    ... on Video_VideoStream {
      isEvergreen
    }
    ... on Video_VideoSeries {
      streams {
        id
        title
      }
    }
    title
  }
  collectionTitle
  image {
    uri
  }
  responsiveImage @include(if: $useFancyImages) {
    ...ResponsivePicture
  }
  title
  shelfStyle
}
    ${y}`,se=u`
    fragment VideoAssetSwimlaneWidget_Asset on Video_VideoAssetInterface {
  __typename
  ... on Video_VideoStream {
    durationInSeconds
    isRestrictedWithoutProfileEmail
    streamUri
  }
  id
  companyCodes
  image {
    uri
  }
  ... on Video_VideoStream {
    isEvergreen
  }
  responsiveImage @include(if: $useFancyImages) {
    ...ResponsivePicture
  }
  title
}
    ${y}`,oe=u`
    fragment VideoAssetSwimlaneWidget on Content_VideoAssetSwimlaneWidget {
  assets {
    ...VideoAssetSwimlaneWidget_Asset
  }
  id
  description
  remocoId
  title
  orientation
  displayTitles
  tileSize
  shelfStyle
}
    ${se}`,ae=u`
    fragment WideBannerWidget on Content_WideBannerSwimlaneWidget {
  assets {
    ...VideoAssetSwimlaneWidget_Asset
  }
  id
  collectionThumbnailImage {
    uri
  }
  description
  title
  orientation
  displayTitles
  tileSize
  shelfStyle
}
    ${se}`,ce=u`
    fragment CategoryScreen_Asset on Video_VideoAssetInterface {
  __typename
  ... on Video_VideoStream {
    isRestrictedWithoutProfileEmail
    streamUri
  }
  id
  image {
    uri
  }
  responsiveImage @include(if: $useFancyImages) {
    ...ResponsivePicture
  }
  title
}
    ${y}`,ot=u`
    fragment CollectionScreen_Asset on Video_VideoAssetInterface {
  __typename
  ... on Video_VideoStream {
    isRestrictedWithoutProfileEmail
    streamUri
  }
  companyCodes
  id
  image(imageType: LANDSCAPE_WITHOUT_TITLES) {
    uri
  }
  responsiveImage @include(if: $useFancyImages) {
    ...ResponsivePicture
  }
  title
}
    ${y}`,at=u`
    fragment GatingScreenOnAirShowSwimlaneWidget on Content_OnAirShowSwimlaneWidget {
  onAirShows {
    channel {
      loopingStreamUri
      placeholderImage {
        uri
      }
    }
  }
}
    `,ct=u`
    fragment HomeScreenVideoAssetSwimlaneWidget on Content_VideoAssetSwimlaneWidget {
  id
  remocoId
}
    `,ut=u`
    fragment PortalSwimlaneWidget on Content_PortalWidget {
  id
  code
  items {
    __typename
    id
    image {
      uri
    }
    title
    ... on Portal_PortalMenuItem {
      code
    }
  }
}
    `,ue=u`
    fragment Layout_ProductChanged on Catalog_Product {
  id
  companyCode
  defaultImage {
    uri
  }
  defaultResponsiveImage @include(if: $useFancyImages) {
    ...ResponsivePicture
  }
  name
  price {
    __typename
    ... on Common_PriceRange {
      maximum {
        amount
      }
      minimum {
        amount
      }
    }
    text
  }
  strikethroughPrice {
    text
  }
  uri
  uriWithAttribution
}
    ${y}`,le=u`
    fragment Layout_ShowChanged on Television_Show {
  channel {
    channelCode
    companyCode
    isRestrictedWithoutProfileEmail
    placeholderImage {
      uri
    }
    responsivePlaceholderImage @include(if: $useFancyImages) {
      ...ResponsivePicture
    }
    streamUri
  }
  description
  endsAt
  hosts {
    name
  }
  startsAt
  title
}
    ${y}`,lt=u`
    fragment ProductGroupingScreen_ProductGrouping on Catalog_ProductGrouping {
  name
}
    `,fn=u`
    fragment ProductScreen_BuyButtons on Catalog_Product {
  isAvailableToSell
}
    `,mn=u`
    fragment ProductScreen_Description on Catalog_Product {
  description
  markdownDescription
}
    `,dt=u`
    fragment ProductScreen_BuyButton on Catalog_Product {
  companyCode
  isAvailableToSell
  uri
}
    `,ht=u`
    fragment ProductScreen_FinancedPricing on Catalog_Product {
  companyCode
  financedPrices {
    installments
    isSale
    text
  }
}
    `,pt=u`
    fragment ProductScreen_ImageGallery on Catalog_Product {
  alternateImages {
    uri
  }
  defaultImage {
    uri
  }
}
    `,ft=u`
    fragment ProductScreen_ItemNumber on Catalog_Product {
  itemNumber
}
    `,mt=u`
    fragment ProductScreen_Name on Catalog_Product {
  name
}
    `,gt=u`
    fragment ProductScreen_OptionChoice on Catalog_ProductOptionChoice {
  abbreviation
  name
  image {
    uri
  }
  productImage {
    uri
  }
  variantMatches {
    productVariantId
  }
}
    `,St=u`
    fragment ProductScreen_Option on Catalog_ProductOption {
  name
  kind
  nodeId
  childNodes
  parentNodeId
  isAvailableToSell
  isParentNode
  isSoldOut
  choices {
    ...ProductScreen_OptionChoice
  }
}
    ${gt}`,Et=u`
    fragment ProductScreen_Options on Catalog_Product {
  options {
    ...ProductScreen_Option
  }
}
    ${St}`,It=u`
    fragment ProductScreen_Pricing on Catalog_Product {
  price {
    isSale
    text
  }
}
    `,_t=u`
    fragment ProductScreen_Rating on Catalog_Product {
  rating {
    average
    count
    distributions {
      count
      percentage
      star
    }
  }
}
    `,yt=u`
    fragment ProductScreen_Product on Catalog_Product {
  ...ProductScreen_BuyButton
  ...ProductScreen_FinancedPricing
  ...ProductScreen_ImageGallery
  ...ProductScreen_ItemNumber
  ...ProductScreen_Name
  ...ProductScreen_Options
  ...ProductScreen_Pricing
  ...ProductScreen_Rating
  markdownDescription
  description
}
    ${dt}
${ht}
${pt}
${ft}
${mt}
${Et}
${It}
${_t}`,Tt=u`
    fragment SearchScreen_ProductResult on Video_VideoProductSearchResult {
  airedAt
  product {
    companyCode
    defaultImage {
      uri
    }
    defaultResponsiveImage @include(if: $useFancyImages) {
      ...ResponsivePicture
    }
    name
  }
  stream {
    id
    title
  }
}
    ${y}`,vt=u`
    fragment SearchScreen_VideoResult on Video_VideoAssetInterface {
  __typename
  id
  companyCodes
  image {
    uri
  }
  responsiveImage @include(if: $useFancyImages) {
    ...ResponsivePicture
  }
  title
  ... on Video_VideoStream {
    isRestrictedWithoutProfileEmail
  }
}
    ${y}`,de=u`
    fragment ProductFragment on Video_ProductAiring {
  airedAt
  product {
    companyCode
    defaultImage {
      uri
    }
    defaultResponsiveImage @include(if: $useFancyImages) {
      ...ResponsivePicture
    }
    id
    name
    price {
      __typename
      ... on Common_PriceRange {
        maximum {
          amount
        }
        minimum {
          amount
        }
      }
      text
    }
    strikethroughPrice {
      text
    }
    uri
    uriWithAttribution
  }
}
    ${y}`,he=u`
    fragment StreamScreen_StreamCard on Video_VideoAssetInterface {
  __typename
  id
  companyCodes
  image(imageType: LANDSCAPE_WITHOUT_TITLES) {
    uri
  }
  responsiveImage @include(if: $useFancyImages) {
    ...ResponsivePicture
  }
  title
  ... on Video_VideoStream {
    isRestrictedWithoutProfileEmail
  }
}
    ${y}`,gn=u`
    query CategoryScreen($id: ID!, $useFancyImages: Boolean!) {
  visitor {
    video {
      category(id: $id) {
        id
        description
        resources {
          type
          __typename
          uri
        }
        assets {
          ...CategoryScreen_Asset
        }
        title
      }
    }
  }
}
    ${ce}`,Sn=u`
    query CategoryIndexScreen {
  visitor {
    video {
      categories {
        id
        title
        resources {
          type
          __typename
          uri
        }
      }
    }
  }
}
    `,En=u`
    query CollectionScreen($remocoId: String!, $useFancyImages: Boolean!) {
  visitor {
    content {
      widget(remocoId: $remocoId) {
        ... on Content_VideoAssetSwimlaneWidget {
          assets {
            ...CollectionScreen_Asset
          }
          description
          remocoId
          title
        }
      }
    }
  }
}
    ${ot}`,In=u`
    mutation CreateProfileEmail($email: String!) {
  account_createProfileEmail(input: {email: $email}) {
    result {
      id
    }
  }
}
    `,_n=u`
    query HomeScreenLayoutIds($layoutId: String!) {
  visitor {
    content {
      layout(name: $layoutId) {
        id
        widgets {
          nodes {
            id
            ...HomeScreenVideoAssetSwimlaneWidget
            ...GatingScreenOnAirShowSwimlaneWidget
          }
        }
      }
    }
  }
}
    ${ct}
${at}`,yn=u`
    query LandingPageLayout($layoutName: String!, $layoutType: Content_LayoutType!, $isModularLayout: Boolean!, $first: Int!, $after: String, $useFancyImages: Boolean!) {
  visitor {
    content {
      layout(name: $layoutName, layoutType: $layoutType) {
        id
        screen {
          code
          collectionCode
          layoutStyle
          options {
            heroImage
          }
        }
        widgets(first: $first, after: $after) {
          edges {
            cursor
            node {
              __typename
              id
              ...OnAirShowSwimlaneWidget
              ...PremiereSpotlightWidget
              ...SpotlightWidget
              ...VideoAssetSwimlaneWidget
              ...MultipleSpotlightWidget
              ...PortalSwimlaneWidget
              ...WideBannerWidget
            }
          }
          totalCount
        }
      }
    }
  }
}
    ${te}
${ne}
${re}
${oe}
${ie}
${ut}
${ae}`,Tn=u`
    query LandingPageLayoutFlagOff($layoutName: String!, $isModularLayout: Boolean!, $first: Int!, $after: String, $useFancyImages: Boolean!) {
  visitor {
    content {
      layout(name: $layoutName) {
        id
        widgets(first: $first, after: $after) {
          edges {
            cursor
            node {
              __typename
              id
              ...OnAirShowSwimlaneWidget
              ...PremiereSpotlightWidget
              ...SpotlightWidget
              ...VideoAssetSwimlaneWidget
              ...MultipleSpotlightWidget
              ...WideBannerWidget
            }
          }
          totalCount
        }
      }
    }
  }
}
    ${te}
${ne}
${re}
${oe}
${ie}
${ae}`,vn=u`
    query LayoutScreen($useFancyImages: Boolean!) {
  visitor {
    television {
      onAirProducts {
        channelCode
        product {
          ...Layout_ProductChanged
        }
      }
      onAirShows {
        ...Layout_ShowChanged
      }
    }
  }
}
    ${ue}
${le}`,Nn=u`
    subscription Layout_OnAirProductChanged($useFancyImages: Boolean!) {
  televisionOnAirProductChanged {
    channelCode
    product {
      ...Layout_ProductChanged
    }
  }
}
    ${ue}`,An=u`
    subscription Layout_OnAirShowChanged($useFancyImages: Boolean!) {
  televisionOnAirShowChanged {
    channelCode
    show {
      ...Layout_ShowChanged
    }
  }
}
    ${le}`,On=u`
    query ProductScreenPicker($id: ID!) {
  visitor {
    catalog {
      productWithGrouping(id: $id) {
        ... on Catalog_Product {
          ...ProductScreen_Product
        }
        ... on Catalog_ProductGrouping {
          ...ProductGroupingScreen_ProductGrouping
        }
      }
    }
  }
}
    ${yt}
${lt}`,Dn=u`
    query ProgramGuideScreen($date: DateTime!) {
  visitor {
    television {
      programGuide(date: $date) {
        entries {
          channel {
            channelCode
            isRestrictedWithoutProfileEmail
            title
          }
          shows {
            description
            startsAt
            endsAt
            id
            channel {
              channelCode
            }
            title
            hosts {
              name
            }
          }
        }
      }
    }
  }
}
    `,bn=u`
    query SearchScreen($query: String!, $useFancyImages: Boolean!, $doProductSearch: Boolean!, $doVideoSearch: Boolean!) {
  visitor {
    content {
      widget(remocoId: "trending") {
        ... on Content_VideoAssetSwimlaneWidget {
          assets {
            ...SearchScreen_VideoResult
          }
        }
      }
    }
    video {
      popularSearchTerms
      productSearch(query: $query) @include(if: $doProductSearch) {
        nodes {
          ...SearchScreen_ProductResult
        }
      }
      search(query: $query) @include(if: $doVideoSearch) {
        nodes {
          ...SearchScreen_VideoResult
        }
      }
    }
  }
}
    ${vt}
${Tt}`,Pn=u`
    query SeriesScreen($id: ID!, $useFancyImages: Boolean!) {
  visitor {
    video {
      series(id: $id) {
        title
        id
        remocoId
        description
        image {
          uri
        }
        companyCodes
        streams {
          id
          remocoId
          title
          type
          image {
            uri
          }
          responsiveImage @include(if: $useFancyImages) {
            ...ResponsivePicture
          }
          isEvergreen
          isRestrictedWithoutProfileEmail
          streamUri
          companyCodes
        }
      }
    }
  }
}
    ${y}`,xn=u`
    query AdPods($id: ID!, $useFancyImages: Boolean!) {
  visitor {
    __typename
    video {
      stream(id: $id) {
        adRolls {
          id
          remocoId
          type
          title
          duration
          time
          uri
          products {
            ...ProductFragment
          }
        }
      }
    }
  }
}
    ${de}`,wn=u`
    query RelatedContentFromCategory($id: ID!, $useFancyImages: Boolean!) {
  visitor {
    video {
      category(id: $id) {
        id
        description
        resources {
          type
          __typename
          uri
        }
        assets {
          ...CategoryScreen_Asset
        }
        title
      }
    }
  }
}
    ${ce}`,Ln=u`
    query RelatedContentFromCollection($remocoId: String, $useFancyImages: Boolean!) {
  visitor {
    content {
      widget(remocoId: $remocoId) {
        ... on Content_VideoAssetSwimlaneWidget {
          assets {
            ...StreamScreen_StreamCard
          }
        }
      }
    }
  }
}
    ${he}`,Cn=u`
    query RelatedContentFromSeries($id: ID, $useFancyImages: Boolean!) {
  visitor {
    video {
      series(id: $id) {
        streams {
          ...StreamScreen_StreamCard
        }
        title
      }
    }
  }
}
    ${he}`,Fn=u`
    query StreamScreen($id: ID!, $useFancyImages: Boolean!) {
  visitor {
    video {
      stream(id: $id) {
        companyCodes
        createdAt
        description
        durationInSeconds
        id
        image {
          uri
        }
        isEvergreen
        isRestrictedWithoutProfileEmail
        productAirings {
          ...ProductFragment
        }
        responsiveImage @include(if: $useFancyImages) {
          ...ResponsivePicture
        }
        streamUri
        title
        type
        updatedAt
        hasDrm
        isAutomated
        sources {
          streamUri
        }
      }
    }
  }
}
    ${de}
${y}`,ii=Object.freeze(Object.defineProperty({__proto__:null,AdPod_Type:ke,AdPodsDocument:xn,ApplyPolicy:Ve,Catalog_ProductOptionKind:$e,Catalog_ProductReviewSortDirection:Ue,Catalog_ProductReviewSortOrder:Be,Catalog_SortOrder:Me,CategoryIndexScreenDocument:Sn,CategoryScreenDocument:gn,CategoryScreen_AssetFragmentDoc:ce,CollectionScreenDocument:En,CollectionScreen_AssetFragmentDoc:ot,Commerce_ErrorGroup:We,Commerce_ExpressOrderComposeResult_CardType:je,Commerce_ExpressOrderComposeResult_ComplianceMessageType:Ge,Common_CompanyCode:He,Common_CountryCode:ze,Content_ImageType:qe,Content_LayoutType:Ye,Content_Orientation:Qe,Content_TileSize:Je,CreateProfileEmailDocument:In,GatingScreenOnAirShowSwimlaneWidgetFragmentDoc:at,HomeScreenLayoutIdsDocument:_n,HomeScreenVideoAssetSwimlaneWidgetFragmentDoc:ct,LandingPageLayoutDocument:yn,LandingPageLayoutFlagOffDocument:Tn,LayoutScreenDocument:vn,Layout_OnAirProductChangedDocument:Nn,Layout_OnAirShowChangedDocument:An,Layout_ProductChangedFragmentDoc:ue,Layout_ShowChangedFragmentDoc:le,MultipleSpotlightWidgetFragmentDoc:ie,OnAirShowPreviewWidgetFragmentDoc:pn,OnAirShowPreviewWidget_BackgroundImageFragmentDoc:tt,OnAirShowPreviewWidget_ShowInfoFragmentDoc:st,OnAirShowPreviewWidget_ShowInfo_ChannelLogoFragmentDoc:nt,OnAirShowPreviewWidget_ShowInfo_HostFragmentDoc:it,OnAirShowPreviewWidget_ShowInfo_TitleFragmentDoc:rt,OnAirShowSwimlaneWidgetFragmentDoc:te,PortalSwimlaneWidgetFragmentDoc:ut,PremiereSpotlightWidgetFragmentDoc:ne,ProductFragmentFragmentDoc:de,ProductGroupingScreen_ProductGroupingFragmentDoc:lt,ProductScreenPickerDocument:On,ProductScreen_BuyButtonFragmentDoc:dt,ProductScreen_BuyButtonsFragmentDoc:fn,ProductScreen_DescriptionFragmentDoc:mn,ProductScreen_FinancedPricingFragmentDoc:ht,ProductScreen_ImageGalleryFragmentDoc:pt,ProductScreen_ItemNumberFragmentDoc:ft,ProductScreen_NameFragmentDoc:mt,ProductScreen_OptionChoiceFragmentDoc:gt,ProductScreen_OptionFragmentDoc:St,ProductScreen_OptionsFragmentDoc:Et,ProductScreen_PricingFragmentDoc:It,ProductScreen_ProductFragmentDoc:yt,ProductScreen_RatingFragmentDoc:_t,ProgramGuideScreenDocument:Dn,RelatedContentFromCategoryDocument:wn,RelatedContentFromCollectionDocument:Ln,RelatedContentFromSeriesDocument:Cn,ResponsivePictureFragmentDoc:y,SearchScreenDocument:bn,SearchScreen_ProductResultFragmentDoc:Tt,SearchScreen_VideoResultFragmentDoc:vt,SeriesScreenDocument:Pn,SmsSendProductDetailResult:Xe,Sms_SendProductDetailResult:Ze,Sms_SendProductWithGroupingDetailResult:Ke,SpotlightWidgetFragmentDoc:re,StreamScreenDocument:Fn,StreamScreen_StreamCardFragmentDoc:he,Television_ChannelCode:et,VideoAssetSwimlaneWidgetFragmentDoc:oe,VideoAssetSwimlaneWidget_AssetFragmentDoc:se,WideBannerWidgetFragmentDoc:ae},Symbol.toStringTag,{value:"Module"}));var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j={exports:{}};function kn(e){try{return JSON.stringify(e)}catch{return'"[Circular]"'}}var Vn=$n;function $n(e,t,n){var r=n&&n.stringify||kn,i=1;if(typeof e=="object"&&e!==null){var s=t.length+i;if(s===1)return e;var a=new Array(s);a[0]=r(e);for(var d=1;d<s;d++)a[d]=r(t[d]);return a.join(" ")}if(typeof e!="string")return e;var p=t.length;if(p===0)return e;for(var c="",h=1-i,f=-1,g=e&&e.length||0,m=0;m<g;){if(e.charCodeAt(m)===37&&m+1<g){switch(f=f>-1?f:0,e.charCodeAt(m+1)){case 100:case 102:if(h>=p||t[h]==null)break;f<m&&(c+=e.slice(f,m)),c+=Number(t[h]),f=m+2,m++;break;case 105:if(h>=p||t[h]==null)break;f<m&&(c+=e.slice(f,m)),c+=Math.floor(Number(t[h])),f=m+2,m++;break;case 79:case 111:case 106:if(h>=p||t[h]===void 0)break;f<m&&(c+=e.slice(f,m));var E=typeof t[h];if(E==="string"){c+="'"+t[h]+"'",f=m+2,m++;break}if(E==="function"){c+=t[h].name||"<anonymous>",f=m+2,m++;break}c+=r(t[h]),f=m+2,m++;break;case 115:if(h>=p)break;f<m&&(c+=e.slice(f,m)),c+=String(t[h]),f=m+2,m++;break;case 37:f<m&&(c+=e.slice(f,m)),c+="%",f=m+2,m++,h--;break}++h}++m}return f===-1?e:(f<g&&(c+=e.slice(f)),c)}const ye=Vn;j.exports=T;const L=Kn().console||{},Un={mapHttpRequest:k,mapHttpResponse:k,wrapRequestSerializer:Y,wrapResponseSerializer:Y,wrapErrorSerializer:Y,req:k,res:k,err:ve,errWithCause:ve};function B(e,t){return e==="silent"?1/0:t.levels.values[e]}const pe=Symbol("pino.logFuncs"),Z=Symbol("pino.hierarchy"),Bn={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function Te(e,t){const n={logger:t,parent:e[Z]};t[Z]=n}function Mn(e,t,n){const r={};t.forEach(i=>{r[i]=n[i]?n[i]:L[i]||L[Bn[i]||"log"]||C}),e[pe]=r}function Wn(e,t){return Array.isArray(e)?e.filter(function(r){return r!=="!stdSerializers.err"}):e===!0?Object.keys(t):!1}function T(e){e=e||{},e.browser=e.browser||{};const t=e.browser.transmit;if(t&&typeof t.send!="function")throw Error("pino: transmit option must have a send function");const n=e.browser.write||L;e.browser.write&&(e.browser.asObject=!0);const r=e.serializers||{},i=Wn(e.browser.serialize,r);let s=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(s=!1);const a=Object.keys(e.customLevels||{}),d=["error","fatal","warn","info","debug","trace"].concat(a);typeof n=="function"&&d.forEach(function(S){n[S]=n}),(e.enabled===!1||e.browser.disabled)&&(e.level="silent");const p=e.level||"info",c=Object.create(n);c.log||(c.log=C),Mn(c,d,n),Te({},c),Object.defineProperty(c,"levelVal",{get:f}),Object.defineProperty(c,"level",{get:g,set:m});const h={transmit:t,serialize:i,asObject:e.browser.asObject,levels:d,timestamp:Jn(e)};c.levels=jn(e),c.level=p,c.setMaxListeners=c.getMaxListeners=c.emit=c.addListener=c.on=c.prependListener=c.once=c.prependOnceListener=c.removeListener=c.removeAllListeners=c.listeners=c.listenerCount=c.eventNames=c.write=c.flush=C,c.serializers=r,c._serialize=i,c._stdErrSerialize=s,c.child=E,t&&(c._logEvent=K());function f(){return B(this.level,this)}function g(){return this._level}function m(S){if(S!=="silent"&&!this.levels.values[S])throw Error("unknown level "+S);this._level=S,v(this,h,c,"error"),v(this,h,c,"fatal"),v(this,h,c,"warn"),v(this,h,c,"info"),v(this,h,c,"debug"),v(this,h,c,"trace"),a.forEach(A=>{v(this,h,c,A)})}function E(S,A){if(!S)throw new Error("missing bindings for child Pino");A=A||{},i&&S.serializers&&(A.serializers=S.serializers);const fe=A.serializers;if(i&&fe){var F=Object.assign({},r,fe),me=e.browser.serialize===!0?Object.keys(F):i;delete S.serializers,G([S],me,F,this._stdErrSerialize)}function ge(Se){this._childLevel=(Se._childLevel|0)+1,this.bindings=S,F&&(this.serializers=F,this._serialize=me),t&&(this._logEvent=K([].concat(Se._logEvent.bindings,S)))}ge.prototype=this;const H=new ge(this);return Te(this,H),H.level=this.level,H}return c}function jn(e){const t=e.customLevels||{},n=Object.assign({},T.levels.values,t),r=Object.assign({},T.levels.labels,Gn(t));return{values:n,labels:r}}function Gn(e){const t={};return Object.keys(e).forEach(function(n){t[e[n]]=n}),t}T.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}};T.stdSerializers=Un;T.stdTimeFunctions=Object.assign({},{nullTime:Nt,epochTime:At,unixTime:Xn,isoTime:Zn});function Hn(e){const t=[];e.bindings&&t.push(e.bindings);let n=e[Z];for(;n.parent;)n=n.parent,n.logger.bindings&&t.push(n.logger.bindings);return t.reverse()}function v(e,t,n,r){if(e[r]=B(e.level,n)>B(r,n)?C:n[pe][r],!t.transmit&&e[r]===C)return;e[r]=qn(e,t,n,r);const i=Hn(e);i.length!==0&&(e[r]=zn(i,e[r]))}function zn(e,t){return function(){return t.apply(this,[...e,...arguments])}}function qn(e,t,n,r){return function(i){return function(){const a=t.timestamp(),d=new Array(arguments.length),p=Object.getPrototypeOf&&Object.getPrototypeOf(this)===L?L:this;for(var c=0;c<d.length;c++)d[c]=arguments[c];if(t.serialize&&!t.asObject&&G(d,this._serialize,this.serializers,this._stdErrSerialize),t.asObject?i.call(p,Yn(this,r,d,a)):i.apply(p,d),t.transmit){const h=t.transmit.level||e._level,f=n.levels.values[h],g=n.levels.values[r];if(g<f)return;Qn(this,{ts:a,methodLevel:r,methodValue:g,transmitLevel:h,transmitValue:n.levels.values[t.transmit.level||e._level],send:t.transmit.send,val:B(e._level,n)},d)}}}(e[pe][r])}function Yn(e,t,n,r){e._serialize&&G(n,e._serialize,e.serializers,e._stdErrSerialize);const i=n.slice();let s=i[0];const a={};r&&(a.time=r),a.level=e.levels.values[t];let d=(e._childLevel|0)+1;if(d<1&&(d=1),s!==null&&typeof s=="object"){for(;d--&&typeof i[0]=="object";)Object.assign(a,i.shift());s=i.length?ye(i.shift(),i):void 0}else typeof s=="string"&&(s=ye(i.shift(),i));return s!==void 0&&(a.msg=s),a}function G(e,t,n,r){for(const i in e)if(r&&e[i]instanceof Error)e[i]=T.stdSerializers.err(e[i]);else if(typeof e[i]=="object"&&!Array.isArray(e[i]))for(const s in e[i])t&&t.indexOf(s)>-1&&s in n&&(e[i][s]=n[s](e[i][s]))}function Qn(e,t,n){const r=t.send,i=t.ts,s=t.methodLevel,a=t.methodValue,d=t.val,p=e._logEvent.bindings;G(n,e._serialize||Object.keys(e.serializers),e.serializers,e._stdErrSerialize===void 0?!0:e._stdErrSerialize),e._logEvent.ts=i,e._logEvent.messages=n.filter(function(c){return p.indexOf(c)===-1}),e._logEvent.level.label=s,e._logEvent.level.value=a,r(s,e._logEvent,d),e._logEvent=K(p)}function K(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function ve(e){const t={type:e.constructor.name,msg:e.message,stack:e.stack};for(const n in e)t[n]===void 0&&(t[n]=e[n]);return t}function Jn(e){return typeof e.timestamp=="function"?e.timestamp:e.timestamp===!1?Nt:At}function k(){return{}}function Y(e){return e}function C(){}function Nt(){return!1}function At(){return Date.now()}function Xn(){return Math.round(Date.now()/1e3)}function Zn(){return new Date(Date.now()).toISOString()}function Kn(){function e(t){return typeof t<"u"&&t}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}j.exports.default=T;j.exports.pino=T;var ei=j.exports;const ti=Rn(ei),ni="error",si=ti({browser:{asObject:!0},level:ni});export{xn as A,Sn as C,_n as H,yn as L,Dn as P,Ln as R,Pn as S,et as T,He as a,En as b,ri as c,gn as d,Fn as e,Cn as f,Rn as g,wn as h,bn as i,In as j,vn as k,si as l,Nn as m,An as n,On as o,ii as s};
