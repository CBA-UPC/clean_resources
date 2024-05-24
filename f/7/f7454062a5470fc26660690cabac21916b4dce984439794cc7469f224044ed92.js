"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8765],{47128:function(e,n,r){r.d(n,{Ed:Fj:function(){return sfFormatOAuthSignInHost},Wg:function(){return s},fX:function(){return u}});var a=r(73022),l=r(77262),i=r(20851),o=r(16377);function getNavatticPropertiesWithFormFields(e){let n=[...e.map(e=>({id:e.attributeName,name:e.attributeName})),...a.VG.map(e=>({id:e.name,name:e.label}))],r=n.reduce([]);return r}let s="".concat(o.Z.APP_URL,"/oauth/pardot"),u=["production","sandbox"].map(,sfFormatOAuthSignInHost=e=>"".concat((0,l.r7)(e)).concat("/services/oauth2/authorize")},27425:function(e,n,r){r.d(n,{Z:function(){return FieldMapper}});var a=r(52322),l=r(2784),i=r(6676),o=r.n(i),s=r(62671),u=r(99219),d=r(83122),c=r(18318);let FieldMapping=e=>{let{fromIcon:n,toIcon:r,fromOptions:l,toOptions:i,onDelete:o,mapping:s,onChange:d,takenFromOptions:m,takenToOptions:f,preventDuplicates:b=!1,onCreateFromOption:x,onCreateToOption:T}=e;function shouldAllowOption(e,n,r){return!b||s[r]==e.value||!n.includes(e)}return(0,a.jsxs)("div",{className:"flex justify-between px-2 py-3",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(c.Z,{placeHolder:"Select field",className:"text-sm",renderSelectedIcon:()=>(0,a.jsx)("div",{className:"mr-2",children:(0,a.jsx)(n,{})}),selected:s.from?{id:s.from,name:s.from}:void 0,items:l.filter(e=>shouldAllowOption(e,m,"from")).map(e=>({id:e.value,name:e.label})),onChange:e=>d({id:s.id,from:e.id,to:s.to}),onCreateItem:e=>{x&&(x(e),d({id:s.id,from:e,to:s.to}))}}),(0,a.jsx)(u.XCv,{className:"mx-1 shrink-0 text-gray-400"}),(0,a.jsx)(c.Z,{className:"text-sm",renderSelectedIcon:selected:s.to?{id:s.to,name:s.to}:void 0,items:i.filter(.map(e=>({id:e.value,name:e.label})),onChange:onCreateItem:e=>{T&&(T(e),d({id:s.id,from:s.from,to:e}))}})]}),(0,a.jsx)("button",{onClick:o,className:"p-2",children:(0,a.jsx)(u.XHJ,{className:"h-3 w-3 text-gray-700"})})]})};function FieldMapperPanel(e){let{name:n,fromOptions:r,toOptions:i,mappings:d,onChange:c,preventDuplicates:m,onCreateFromOption:f,onCreateToOption:b,fromIcon:x,toIcon:T}=e,[E,h]=(0,l.useState)([]),[v,g]=(0,l.useState)([]);return(0,l.useEffect)(()=>{h(d.filter(e=>e.from).map(e=>({label:e.from,value:e.from}))),g(d.filter(e=>e.to).map()},[d]),(0,a.jsx)(s.O.Panel,{children:(0,a.jsxs)("ul",{role:"list",className:"divide-y divide-gray-200 border-t border-gray-200",children:[d.map(e=>(0,a.jsx)(FieldMapping,{fromIcon:x,toIcon:T,fromOptions:r,takenFromOptions:E,toOptions:i,takenToOptions:v,mapping:e,onChange:n=>c(d.map(r=>e.id==r.id?n:r)),onDelete:()=>c(d.filter(),preventDuplicates:m,onCreateFromOption:f,onCreateToOption:b},e.id)),(0,a.jsx)("div",{className:"flex items-center justify-between bg-gray-50 px-2 py-2",children:(0,a.jsxs)("button",{onClick:()=>c([...d,{id:o()(),from:void 0,to:void 0}]),type:"button",className:"btn-white bg-white text-sm font-medium",children:[(0,a.jsx)(u.pOD,{className:"mr-1 h-3 w-3","aria-hidden":"true"}),"Add Mapping"]})})]})},n)}function FieldMapper(e){let{tabs:n}=e;return(0,a.jsxs)("div",{className:"mt-4 rounded border",children:[(0,a.jsx)("div",{className:"flex items-center px-3 pb-1 pt-4 text-base font-medium leading-none",children:"Field Mapping"}),(0,a.jsxs)(s.O.Group,{children:[(0,a.jsx)(s.O.List,{children:Object.keys(n).map(}),(0,a.jsx)(s.O.Panels,{children:Object.entries(n).map(e=>{let[n,r]=e;return(0,a.jsx)(FieldMapperPanel,{name:n,...r},n)})})]})]})}},90306:function(e,n,r){r.d(n,{c:function(){return i}});var a=r(73235),l=r(66547);et i=(0,l.ZP)(_templateObject())},77815:77262:function(e,n,r){r.d(n,{r7:function(){return getLoginHost},zi:function(){return makeFullCustomFieldName},C7:function(){return makeIdField},Gd:function(){return makeNumberField},FS:function(){return makeTextField}}),(a=i||(i={})).ADDRESS="Address",a.AUTO_NUMBER="AutoNumber",a.LOOKUP="Lookup",a.MASTER_DETAIL="MasterDetail",a.METADATA_RELATIONSHIP="MetadataRelationship",a.CHECKBOX="Checkbox",a.CURRENCY="Currency",a.DATE="Date",a.DATE_TIME="DateTime",a.EMAIL="Email",a.ENCRYPTED_TEXT="EncryptedText",a.EXTERNAL_LOOKUP="ExternalLookup",a.NUMBER="Number",a.PERCENT="Percent",a.PHONE="Phone",a.PICKLIST="Picklist",a.MULTISELECT_PICKLIST="MultiselectPicklist",a.SUMMARY="Summary",a.TEXT="Text",a.TEXT_AREA="TextArea",a.LONG_TEXT_AREA="LongTextArea",a.URL="Url",a.HIERARCHY="Hierarchy",a.FILE="File",a.HTML="Html",a.LOCATION="Location",a.TIME="Time",(l=o||(o={})).PRIVATE="Private",l.READ="Read",l.READ_WRITE="ReadWrite",l.READ_WRITE_TRANSFER="ReadWriteTransfer",l.FULL_ACCESS="FullAccess",l.CONTROLLED_BY_PARENT="ControlledByParent",l.CONTROLLED_BY_CAMPAIGN="ControlledByCampaign",l.CONTROLLED_BY_LEAD_OR_CONTACT="ControlledByLeadOrContact";var a,l,i,o,s=r(73022);let baseProps=()=>({required:!1,unique:!1,securityClassification:"Public",caseSensitive:!1,defaultValue:null,displayLocationInDecimal:!1,externalId:!1,picklistValues:[],writeRequiresMasterRead:!1}),makeTextField=e=>{let{label:n,description:r}=e;return{...baseProps(),label:n,type:i.TEXT,length:200,description:r,externalId:!1}},makeIdField=e=>{let{label:n,description:r}=e;return{...baseProps(),label:n,type:i.TEXT,length:50,description:r,externalId:!0}},makeNumberField=e=>{let{label:n,description:r,precision:a,scale:l}=e;return{...baseProps(),label:n,description:r,type:i.NUMBER,externalId:!1,precision:a,scale:l}};[makeIdField({label:s.Rz.FLOW_ID,description:"ID of the most recently viewed flow in the Navattic product tour"}),makeTextField({label:s.Rz.FLOW_TITLE,description:"Title of the most recently viewed flow"}),makeIdField({label:s.Rz.PROJECT_ID,description:"ID of the most recently viewed project"}),makeTextField({label:s.Rz.PROJECT_TITLE,description:"Title of the most recently viewed project"}),makeIdField({label:s.Rz.STEP_ID,description:"ID of the most recently viewed step"}),makeNumberField({label:s.Rz.STEP_NUMBER,description:"Number of the most recently viewed step",precision:5,scale:0}),makeTextField({label:s.Rz.STEP_TITLE,description:"Title of the most recently viewed step"})].map(;let makeFullCustomFieldName=getLoginHost=,62671:function(e,n,r){r.d(n,{O:function(){return C}});var a,l,i,o=r(2784),s=r(90544),u=r(80586),d=r(3703),c=r(99108),m=r(52929),f=r(88064),b=r(33401),x=r(37352),T=r(61742),E=r(36799);function p({onFocus:e}){let[n,r]=(0,o.useState)(!0);return n?o.createElement(E._,{as:"button",type:"button",features:E.A.Focusable,onFocus:n=>{n.preventDefault();let a,l=50;a=requestAnimationFrame(function t(){if(l--<=0){a&&cancelAnimationFrame(a);return}if(e()){r(!1),cancelAnimationFrame(a);return}a=requestAnimationFrame(t)})}}):null}var h=r(55559),v=r(91554),g=r(29833);let I=o.createContext(null);function stable_collection_C({children:e}){let n=o.useRef({groups:new Map,get(e,n){var r;let a=this.groups.get(e);a||(a=new Map,this.groups.set(e,a));let l=null!=(r=a.get(n))?r:0;return a.set(n,l+1),[Array.from(a.keys()).indexOf(n),function(){let e=a.get(n);e>1?a.set(n,e-1):a.delete(n)}]}});return o.createElement(I.Provider,{value:n},e)}function stable_collection_d(e){let n=o.useContext(I);if(!n)throw Error("You must wrap your component in a <StableCollection>");let r=function(){var e,n,r;let a=null!=(r=null==(n=null==(e=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:n.current)?r:null;if(!a)return Symbol();let l=[],i=a;for(;i;)l.push(i.index),i=i.return;return"$."+l.join(".")}(),[a,l]=n.current.get(e,r);return o.useEffect([]),a}var O=((a=O||{})[a.Forwards=0]="Forwards",a[a.Backwards=1]="Backwards",a),y=((l=y||{})[l.Less=-1]="Less",l[l.Equal=0]="Equal",l[l.Greater=1]="Greater",l),R=((i=R||{})[i.SetSelectedIndex=0]="SetSelectedIndex",i[i.RegisterTab=1]="RegisterTab",i[i.UnregisterTab=2]="UnregisterTab",i[i.RegisterPanel=3]="RegisterPanel",i[i.UnregisterPanel=4]="UnregisterPanel",i);let F={0(e,n){var r;let a=(0,m.z2)(e.tabs,e=>e.current),l=(0,m.z2)(e.panels,e=>e.current),i=a.filter(,o={...e,tabs:a,panels:l};if(n.index<0||n.index>a.length-1){let r=(0,d.E)(Math.sign(n.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,d.E)(Math.sign(n.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:);return 0===i.length?o:{...o,selectedIndex:(0,d.E)(r,{0:1:)}}let s=a.slice(0,n.index),u=[...a.slice(n.index),...s].find(;if(!u)return o;let c=null!=(r=a.indexOf(u))?r:e.selectedIndex;return -1===c&&(c=e.selectedIndex),{...o,selectedIndex:c}},1(e,n){var r;if(e.tabs.includes(n.tab))return e;let a=e.tabs[e.selectedIndex],l=(0,m.z2)([...e.tabs,n.tab],e=>e.current),i=null!=(r=l.indexOf(a))?r:e.selectedIndex;return -1===i&&(i=e.selectedIndex),{...e,tabs:l,selectedIndex:i}},2:(e,n)=>({...e,tabs:e.tabs.filter(e=>e!==n.tab)}),3:(e,n)=>e.panels.includes(n.panel)?e:{...e,panels:(0,m.z2)([...e.panels,n.panel],e=>e.current)},4:,P=(0,o.createContext)(null);function M(e){let n=(0,o.useContext)(P);if(null===n){let n=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,M),n}return n}P.displayName="TabsDataContext";let A=(0,o.createContext)(null);displayName="TabsActionsContext";let _=o.Fragment,N=s.AN.RenderStrategy|s.AN.Static,C=Object.assign((0,s.yV)(function(e,n){var r,a;let l=(0,u.M)(),{id:i=`headlessui-tabs-tab-${l}`,...T}=e,{orientation:E,activation:I,selectedIndex:O,tabs:y,panels:R}=M("Tab"),F=q("Tab"),P=M("Tab"),A=(0,o.useRef)(null),_=(0,b.T)(A,n);(0,f.e)(()=>F.registerTab(A),[F,A]);let N=stable_collection_d("tabs"),C=y.indexOf(A);-1===C&&(C=N);let k=C===O,w=(0,h.z)(e=>{var n;let r=e();if(r===m.fE.Success&&"auto"===I){let e=null==(n=(0,g.r)(A))?void 0:n.activeElement,r=P.tabs.findIndex(;-1!==r&&F.change(r)}return r}),L=(0,h.z)(e=>{let n=y.map(e=>e.current).filter(Boolean);if(e.key===c.R.Space||e.key===c.R.Enter){e.preventDefault(),e.stopPropagation(),F.change(C);return}switch(e.key){case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),w(()=>(0,m.jA)(n,m.TO.First));case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),w(}if(w(()=>(0,d.E)(E,{vertical:()=>e.key===c.R.ArrowUp?(0,m.jA)(n,m.TO.Previous|m.TO.WrapAround):e.key===c.R.ArrowDown?(0,m.jA)(n,m.TO.Next|m.TO.WrapAround):m.fE.Error,horizontal:()=>e.key===c.R.ArrowLeft?(0,m.jA)(n,m.TO.Previous|m.TO.WrapAround):e.key===c.R.ArrowRight?(0,m.jA)(n,m.TO.Next|m.TO.WrapAround):m.fE.Error}))===m.fE.Success)return e.preventDefault()}),j=(0,o.useRef)(!1),S=(0,h.z)(()=>{var e;j.current||(j.current=!0,null==(e=A.current)||e.focus(),F.change(C),(0,v.Y)()}),D=(0,h.z)(,z=(0,o.useMemo)(()=>({selected:k}),[k]),U={ref:_,onKeyDown:L,onMouseDown:D,onClick:S,id:i,role:"tab",type:(0,x.f)(e,A),"aria-controls":null==(a=null==(r=R[C])?void 0:r.current)?void 0:a.id,"aria-selected":k,tabIndex:k?0:-1};return(0,s.sY)({ourProps:U,theirProps:T,slot:z,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,s.yV)(function(e,n){let{defaultIndex:r=0,vertical:a=!1,manual:l=!1,onChange:i,selectedIndex:u=null,...d}=e,c=a?"vertical":"horizontal",x=l?"manual":"auto",E=null!==u,v=(0,b.T)(n),[g,I]=(0,o.useReducer)(fe,{selectedIndex:null!=u?u:r,tabs:[],panels:[]}),O=(0,o.useMemo)([g.selectedIndex]),y=(0,T.E)(i||(),R=(0,T.E)(g.tabs),F=(0,o.useMemo)([c,x,g]),N=(0,h.z)(e=>(I({type:1,tab:e}),()=>I({type:2,tab:e}))),C=(0,h.z)(,k=(0,h.z)(,w=(0,T.E)(E?e.selectedIndex:g.selectedIndex),L=(0,o.useMemo)([]);return(0,f.e)([u]),(0,f.e)(()=>{if(void 0===w.current||g.tabs.length<=0)return;let e=(0,m.z2)(g.tabs,;e.some(&&k(e.indexOf(g.tabs[w.current]))}),o.createElement(stable_collection_C,null,o.createElement(A.Provider,{value:L},o.createElement(P.Provider,{value:F},F.tabs.length<=0&&o.createElement(p,{onFocus:()=>{var e,n;for(let r of R.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(n=r.current)||n.focus(),!0;return!1}}),(0,s.sY)({ourProps:{ref:v},theirProps:d,slot:O,defaultTag:_,name:"Tabs"}))))}),List:(0,s.yV)(function(e,n){let{orientation:r,selectedIndex:a}=M("Tab.List"),l=(0,b.T)(n);return(0,s.sY)({ourProps:{ref:l,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:a},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,s.yV)(function(e,n){let{selectedIndex:r}=M("Tab.Panels"),a=(0,b.T)(n),l=(0,o.useMemo)(()=>({selectedIndex:r}),[r]);return(0,s.sY)({ourProps:{ref:a},theirProps:e,slot:l,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,s.yV)(function(e,n){var r,a,l,i;let d=(0,u.M)(),{id:c=`headlessui-tabs-panel-${d}`,tabIndex:m=0,...x}=e,{selectedIndex:T,tabs:h,panels:v}=M("Tab.Panel"),g=q("Tab.Panel"),I=(0,o.useRef)(null),O=(0,b.T)(I,n);(0,f.e)([g,I]);let y=stable_collection_d("panels"),R=v.indexOf(I);-1===R&&(R=y);let F=R===T,P=(0,o.useMemo)([F]),A={ref:O,id:c,role:"tabpanel","aria-labelledby":null==(a=null==(r=h[R])?void 0:r.current)?void 0:a.id,tabIndex:F?m:-1};return F||null!=(l=x.unmount)&&!l||null!=(i=x.static)&&i?(0,s.sY)({ourProps:A,theirProps:x,slot:P,defaultTag:"div",features:N,visible:F,name:"Tabs.Panel"}):o.createElement(E._,{as:"span",...A})})})}}]);
//# sourceMappingURL=8765-6820bbf1a088569f.js.map