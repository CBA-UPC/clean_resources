import{R as q,d as V,j as u,r as Y,bv as Nr,J as G,c as ie,bw as Br,f as F,a6 as jr,bx as ut,by as Ee,bz as ft,bu as Mr,P,ap as $r,k as Or,B as Ur,Y as Q,M as Pr,bA as Gr,U as pt,bB as ht,bC as mt,bD as yt,Q as bt,bj as gt,bE as vt,bF as xt,aA as kt}from"./index-172e3f67.js";import{i as Hr,a as $e,d as zr,b as Xe,h as St}from"./hoist-non-react-statics.cjs-ac049ed2.js";var Ce=e=>e.type==="checkbox",ve=e=>e instanceof Date,$=const Kr=e=>typeof e=="object";var N=_t=wt=At=Et=er=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";ar Fe=T=h=const wr={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ee={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ne={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Wr=q.createContext(null),Se=Ct=var Ft=W=Rt=ze=ar ae=e=>typeof e=="string",It=rr=qr=ar Lt=const Ze=var Ar=Er=Tt=ke=e=>typeof e=="boolean",tr=e=>e.type==="file",de=Ve=Te=ar=e=>e.type==="radio",Ne=const Cr={value:!1,isValid:!1},Fr={value:!0,isValid:!0};var Yr=const Rr={isValid:!1,value:null};var Zr=ar ge=Ir=async(e,t,a,r,s)=>{const{ref:i,refs:c,required:b,maxLength:g,minLength:k,min:w,max:v,pattern:f,validate:E,name:C,valueAsNumber:me,mount:oe,disabled:ye}=e._f,x=h(t,C);if(!oe||ye)return{};const O=c?c[0]:i,j=D={},le=ar(i),B=Ce(i),se=le||B,H=(me||tr(i))&&T(i.value)&&T(x)||Ve(i)&&i.value===""||x===""||Array.isArray(x)&&!x.length,J=Lt.bind(null,C,a,D),z=if(s?!Array.isArray(x)||!x.length:b&&(!se&&(H||$(x))||ke(x)&&!x||B&&!Yr(c).isValid||le&&!Zr(c).isValid)){const{value:_,message:S}=Te(b)?{value:!!b,message:b}:ge(b);if(_&&(D[C]={type:ne.required,message:S,ref:O,...J(ne.required,S)},!a))return j(S),D}if(!H&&(!$(w)||!$(v))){let _,S;const I=ge(v),U=ge(w);if(!$(x)&&!isNaN(x)){const K=i.valueAsNumber||x&&+x;$(I.value)||(_=K>I.value),$(U.value)||(S=K<U.value)}else{const K=i.valueAsDate||new Date(x),re=fe=i.type=="time",_e=i.type=="week";ae(I.value)&&x&&(_=fe?re(x)>re(I.value):_e?x>I.value:K>new Date(I.value)),ae(U.value)&&x&&(S=fe?re(x)<re(U.value):_e?x<U.value:K<new Date(U.value))}if((_||S)&&(z(!!_,I.message,U.message,ne.max,ne.min),!a))return j(D[C].message),D}if((g||k)&&!H&&(ae(x)||s&&Array.isArray(x))){const _=ge(g),S=ge(k),I=!$(_.value)&&x.length>+_.value,U=!$(S.value)&&x.length<+S.value;if((I||U)&&(z(I,_.message,S.message),!a))return j(D[C].message),D}if(f&&!H&&ae(x)){const{value:_,message:S}=ge(f);if(Ne(_)&&!x.match(_)&&(D[C]={type:ne.pattern,message:S,ref:i,...J(ne.pattern,S)},!a))return j(S),D}if(E){if(de(E)){const _=await E(x,t),S=Dr(_,O);if(S&&(D[C]={...S,...J(ne.validate,S.message)},!a))return j(S.message),D}else if(N(E)){let _={};for(const S in E){if(!W(_)&&!a)break;const I=Dr(await E[S](x,t),O,S);I&&(_={...I,...J(S,I.message)},j(I.message),a&&(D[C]=_))}if(!W(_)&&(D[C]={ref:O,..._},!a))return D}}return j(!0),D};Be=ar Jr=Bt=We=Qr=r qe=et=ar jt=Ae=Mt=ar $t=Ot=const Ut={mode:ee.onSubmit,reValidateMode:ee.onChange,shouldFocusError:!0};function Pt(e={},t){let a={...Ut,...e},r={submitCount:0,isDirty:!1,isLoading:de(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},s={},i=N(a.defaultValues)||N(a.values)?ce(a.defaultValues||a.values)||{}:{},c=a.shouldUnregister?{}:ce(i),b={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},k,w=0;const v={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:Ke(),array:Ke(),state:Ke()},E=e.resetOptions&&e.resetOptions.keepDirtyValues,C=Ar(a.mode),me=Ar(a.reValidateMode),oe=a.criteriaMode===ee.all,ye=x=O=j=D=le=B=se=H=J=z=_=S=I=U=K=re=fe=(n,o,l={})=>{const m=h(s,n),p=g.array.has(n),d=ce(o);A(c,n,d),p?(f.array.next({name:n,values:{...c}}),(v.isDirty||v.dirtyFields)&&l.shouldDirty&&f.state.next({name:n,dirtyFields:qe(i,c),isDirty:S(n,d)})):m&&!m._f&&!$(d)?re(n,d,l):K(n,d,l),Er(n,g)&&f.state.next({...r}),f.values.next({name:n,values:{...c}}),!b.mount&&t()},_e=async n=>{const o=n.target;let l=o.name,m=!0;const p=h(s,l),d=if(p){let y,R;const L=d(),be=n.type===wr.BLUR||n.type===wr.FOCUS_OUT,lt=!Mt(p._f)&&!a.resolver&&!h(r.errors,l)&&!p._f.deps||$t(be,h(r.touchedFields,l),r.isSubmitted,me,C),Ge=Er(l,g,be);A(c,l,L),be?(p._f.onBlur&&p._f.onBlur(n),k&&k(0)):p._f.onChange&&p._f.onChange(n);const He=B(l,L,be,!1),ct=!W(He)||Ge;if(!be&&f.values.next({name:l,type:n.type,values:{...c}}),lt)return v.isValid&&x(),ct&&f.state.next({name:l,...Ge?{}:He});if(!be&&Ge&&f.state.next({...r}),O(!0),a.resolver){const{errors:Sr}=await H([l]),dt=Lr(r.errors,s,l),_r=Lr(Sr,s,dt.name||l);y=_r.error,l=_r.name,R=W(Sr)}else y=(await Ir(p,c,oe,a.shouldUseNativeValidation))[l],m=isNaN(L)||L===h(c,l,L),m&&(y?R=!1:v.isValid&&(R=await z(s,!0)));m&&(p._f.deps&&we(p._f.deps),se(l,R,y,He))}},we=mr=yr=nt=br=it=Ue=Pe=(n,o={})=>{let l=h(s,n);const m=ke(o.disabled);return A(s,n,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:n}},name:n,mount:!0,...o}}),g.mount.add(n),T(o.value)||A(c,n,o.value),l?m&&A(c,n,o.disabled?void 0:h(c,n,Ye(l._f))):le(n,!0,o.value),{...m?{disabled:o.disabled}:{},...a.progressive?{required:!!o.required,min:Ae(o.min),max:Ae(o.max),minLength:Ae(o.minLength),maxLength:Ae(o.maxLength),pattern:Ae(o.pattern)}:{},name:n,onChange:_e,onBlur:_e,ref:},gr=vr=ot=xr=(n,o={})=>{const l=n||i,m=ce(l),p=n&&!W(n)?m:i;if(o.keepDefaultValues||(i=l),!o.keepValues){if(o.keepDirtyValues||E)for(const d of g.mount)h(r.dirtyFields,d)?A(p,d,h(c,d)):fe(d,h(p,d));else{if(er&&T(n))for(const d of g.mount){const y=h(s,d);if(y&&y._f){const R=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;if(Ve(R)){const L=R.closest("form");if(L){L.reset();break}}}}s={}}c=e.shouldUnregister?o.keepDefaultValues?ce(i):{}:ce(p),f.array.next({values:{...p}}),f.values.next({values:{...p}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&t(),b.mount=!v.isValid||!!o.keepIsValid,b.watch=!!e.shouldUnregister,f.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!he(n,i)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:o.keepDirtyValues?r.dirtyFields:o.keepDefaultValues&&n?qe(i,n):{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},kr=return{control:{register:Pe,unregister:Ue,getFieldState:yr,handleSubmit:vr,setError:br,_executeSchema:H,_getWatch:I,_getDirty:S,_updateValid:x,_removeUnmounted:_,_updateFieldArray:j,_getFieldArray:U,_reset:xr,_resetDefaultValues:_updateFormState:_subjects:f,_proxyFormState:v,get _fields(){return s},get _formValues(){return c},get _state(){return b},set _state(n){b=n},get _defaultValues(){return i},get _names(){return g},set _names(n){g=n},get _formState(){return r},set _formStateget _optionsset _options,trigger:we,register:Pe,handleSubmit:vr,watch:it,setValue:fe,getValues:mr,reset:kr,resetField:ot,clearErrors:nt,unregister:Ue,setError:br,setFocus:getFieldState:yr}}onst Ht=({prefilledContent:e={}}={})=>{const{setValue:t,...a}=Gt();return Y.useEffect(()=>{Object.entries(e).forEach(},[e,t]),{setValue:t,...a}},rt=({onSubmit:e,children:t,prefilledContent:a={},...r})=>{const{handleSubmit:s,...i}=Ht({prefilledContent:a});return u.jsx(Ct,{...i,children:u.jsx("form",{...r,onSubmit:s(e),children:t})})};V(rt)`
  width: 100%;
`;const sr=({htmlFor:e,label:t,required:a,className:r,isA:s="label"})=>{const i=G(t);return u.jsx(Nr,{isA:s,className:ie(r,{required:a}),htmlFor:s==="label"?e:void 0,children:i})},Re=V(sr)`
  font-size: 1.6rem;
  margin-bottom: unset;
  margin-top: 1rem;

  &.required::after {
    content: "*";
  }
`;Re.darkStyles=Nr.darkStyles;const zt=({id:e,className:t,label:a,labelIsA:r,children:s,required:i,maxLength:c,pattern:b})=>{const{formState:g}=Se(),k=g.errors[e];return u.jsxs("div",{className:ie(t,{error:k}),children:[u.jsx(Re,{isA:r,label:a,required:i,htmlFor:e,className:ie({"label-hidden":!a})}),u.jsx(Br,{className:"error-message",children:G(k==null?void 0:k.message)}),s({id:e,required:i,maxLength:c,pattern:b})]})},Z=V(zt)`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;

  .label-hidden {
    display: none;
  }

  & > .error-message {
    grid-row: 3 / 4;
    display: none;
    font-size: 1.4rem;
    padding-bottom: 10px;
  }

  &.error > .error-message {
    display: block;
  }
`;Z.darkStyles=`
  ${Re.darkStyles}
  ${Br.darkStyles}
`;const tt=({isA:e="input",id:t,className:a,required:r,maxLength:s,pattern:i,...c})=>{const{formState:b,register:g}=Se(),k=!!b.errors[t],{ref:w,...v}=g(t,{required:r,maxLength:s,pattern:i}),f=e;return u.jsx(f,{ref:w,id:t,className:ie(a,{error:k}),maxLength:s==null?void 0:s.value,...v,...c})},Kt=`
  ${zr}
  ${Xe}
`,De=V(tt)`
  ${Hr}
  ${$e}
`;De.darkStyles=Kt;const Wt=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,qt=({readOnly:e,...t})=>u.jsx(Z,{...t,children:a=>u.jsx(De,{readOnly:e,...a,type:"text"})}),pe=V(qt)`
  input {
    height: 50px; 
  }
`;pe.darkStyles=`
  ${De.darkStyles}
  ${Z.darkStyles}
`;const Yt=({className:e,isAlternate:t,headline:a,children:r})=>{const s=G(a);return u.jsxs("div",{className:ie(e,{alternate:t}),children:[a&&u.jsx(ut,{isA:"h3",children:s}),r]})},Me={alternateBackgroundColor:"--form-group-alternate-background-color",backgroundColor:"--form-group-background-color"},Zt=`
  ${Me.alternateBackgroundColor}: ${F.DARK_BLUE_GREY_01};
  ${Me.backgroundColor}: ${F.DARK_BLUE_GREY_02};
`,xe=V(Yt)`
  background-color: var(${Me.backgroundColor}, ${F.WHITE});
  &.alternate {
    background-color: var(${Me.alternateBackgroundColor}, ${F.BLUE_GREY_01});
  }
  padding: 15px;

  ${jr.sm`
    padding-left: 45px;
    padding-right: 45px;
  `}
`;xe.darkStyles=Zt;const Jt=Ie=V(Jt)`
  font-size: 1.4rem;
  justify-self: right;
`;Ie.darkStyles=Ee.darkStyles;const Qt=({id:e,className:t,required:a,maxLength:r})=>{const s=Y.useRef(),[i,c]=Y.useState(0);return u.jsxs("div",{ref:s,className:`${t} grow-wrap`,children:[u.jsx(De,{id:e,isA:"textarea",required:a,maxLength:r,onInput:()=>{const b=s.current.children[0].value;c(b.length),s.current.dataset.replicatedValue=s.current.children[0].value,ft()}}),(r==null?void 0:r.value)&&u.jsxs(Ie,{children:[i,"/",r.value]})]})},nr=V(Qt)`
  &.grow-wrap {
    display: grid;
  }
  &.grow-wrap::after {
    content: attr(data-replicated-value) " ";
    white-space: pre-wrap;
    visibility: hidden;
    overflow-x: hidden;
  }
  &.grow-wrap > textarea {
    resize: none;
    overflow: hidden;
  }
  &.grow-wrap > textarea,
  &.grow-wrap::after {
    /* Identical styling required!! */
    ${$e}
    grid-area: 1 / 1 / 2 / 2;
  }
`;nr.darkStyles=`
  ${De.darkStyles}
  ${Ie.darkStyles}
`;const Xt=e=>u.jsx(Z,{...e,children:),ir=V(Xt)`
`;ir.darkStyles=`
  ${nr.darkStyles}
  ${Z.darkStyles}
`;const ea=Y.forwardRef(({id:e,label:t,value:a,className:r,...s},i)=>u.jsxs("div",{className:r,children:[u.jsx("input",{id:e,type:"radio",value:a,...s,ref:i}),u.jsx(sr,{htmlFor:e,label:t,className:"radio-label"})]})),ue={backgroundColor:"--radio-input-background-color",borderColor:"--radio-input-shadow-color",borderColorHover:"--radio-input-border-color-hover",indicatorBackgroundColorChecked:"--radio-input-background-color-checked"},ra=`
  ${ue.backgroundColor}: ${F.DARK_BLUE_GREY_01};
  ${ue.borderColor}: ${F.BLUE_GREY_02};
  ${ue.borderColorHover}: ${F.BLUE_GREY_01};
  ${ue.indicatorBackgroundColorChecked}: ${F.WHITE};
`,or=V(ea)`
  padding-right: 20px;
  position: relative;
  display: inline-flex;

  input {
    cursor: pointer;
    width: 20px;
    height: 20px;
    opacity: 0;
    border-radius: 10px;
  }

  .radio-label {
    font-size: 1.6rem;
    padding-left: 10px;
    cursor: pointer;
    margin-bottom: 0;
  }

  .radio-label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid var(${ue.borderColor}, ${F.BLUE_GREY_04});
    border-radius: 100%;
    background-color: var(${ue.backgroundColor}, ${F.WHITE});
  }

  ${Mr.mouse`
    input:hover + .radio-label:before {
      border: 2px solid var(${ue.borderColorHover}, ${F.DW_DARK_BLUE});
    }
  `}

  input:checked + .radio-label:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    background-color: var(${ue.indicatorBackgroundColorChecked}, ${F.DW_DARK_BLUE});
    border-radius: 100%;
  }
`;or.darkStyles=ra;const ta=({id:e,required:t,valueToTranslation:a})=>{const{register:r}=Se();return u.jsx("div",{children:Object.entries(a).map(([s,i])=>{const{ref:c,...b}=r(e,{required:t}),g=s.toLowerCase();return u.jsx(or,{ref:c,id:g,label:i,value:s,...b},s)})})},aa=({id:e,className:t,groupLabel:a,required:r,valueToTranslation:s})=>u.jsx(Z,{labelIsA:"span",label:a,required:r,id:e,className:t,children:i=>u.jsx(ta,{valueToTranslation:s,...i})}),lr=V(aa)`
`;lr.darkStyles=`
  ${or.darkStyles}
  ${Z.darkStyles}
`;const sa={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",AX:"Åland Islands",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire, Saint Eustatius and Saba",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",CV:"Cabo Verde",KH:"Cambodia",CM:"Cameroon",CA:"Canada",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CD:"Congo, Democratic Republic",CG:"Congo, Republic",CK:"Cook Islands",CR:"Costa Rica",CI:"Côte d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Curaçao",CY:"Cyprus",CZ:"Czechia",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",SZ:"Eswatini",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern and Antarctic Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard and the McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea, Democratic People's Republic",KR:"Korea, Republic",KO:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova, Republic of",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MK:"North Macedonia",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian territories",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Réunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",SH:"Saint Helena, Ascension and Tristan da Cunha",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"São Tomé and Príncipe",SX:"Sint Maarten",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania, United Republic of",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican City",VE:"Venezuela",VN:"Viet Nam",VI:"Virgin Islands of the United States",VG:"Virgin Islands, british",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"},Tr=({translation:e,...t})=>u.jsx("option",{...t,children:G(e)}),Vr="",na=({id:e,className:t,defaultOptionTranslation:a,valueToTranslation:r,required:s})=>{const{formState:i,register:c}=Se(),b=!!i.errors[e],{ref:g,...k}=c(e,{required:s});return u.jsxs("select",{ref:g,id:e,className:ie(t,{error:b}),defaultValue:Vr,...k,children:[u.jsx(Tr,{value:Vr,translation:a,disabled:s}),Object.entries(r).map(([w,v])=>u.jsx(Tr,{value:w,translation:v},w))]})},ia=`
  ${zr}
  ${Xe}
`,cr=V(na)`
  ${Hr}
  ${$e}
`;cr.darkStyles=ia;const oa=({id:e,className:t,label:a,defaultOptionTranslation:r,required:s,valueToTranslation:i})=>u.jsx(Z,{label:a,required:s,id:e,className:t,children:c=>u.jsx(cr,{defaultOptionTranslation:r,valueToTranslation:i,...c})}),dr=V(oa)`
`;dr.darkStyles=`
  ${cr.darkStyles}
  ${Z.darkStyles}
`;function Je(){return Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},Je.apply(this,arguments)}function la(e,t){if(e==null)return{};var a={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(a[s]=e[s]);reurn e}function ca(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Oe=function(e){cr)),r}var a=t.prototype;return a.getValue=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this.props.grecaptcha.getResponse(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},a.execute=function(){var s=this.props.grecaptcha;if(s&&this._widgetId!==void 0)return s.execute(this._widgetId);this._executeRequested=!0},a.execute()})},a.reset=function(){this.props.grecaptcha&&this._widgetId!==void 0&&this.props.grecaptcha.reset(this._widgetId)},a.handleEnull)},a.handleEject)},a.handleolve)},a.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&this._widgetId===void 0){var s=document.createElement("div");this._widgetId=this.props.grecaptcha.render(s,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(s)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidder()},a.componentWillUnmount=function(){this._widgetId!==void 0&&(this.delayOfCaptchaIframeRemoving(),this.reset())},a.delayOfCaptchaIframeRe,5e3)},a.handleRecaptcha=s},a.render=function(){var s=this.props;s.sitekey,s.onChange,s.theme,s.type,s.tabindex,s.onExpired,s.onErrored,s.size,s.stoken,s.grecaptcha,s.badge,s.hl;var i=la(s,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]);return q.createElement("div",Je({},i,{ref:this.handleRecaptchaRef}))},t}(q.Component);Oe.displayName="ReCAPTCHA";Oe.propTypes={sitekey:P.string.isRequired,onChange:P.func,grecaptcha:P.object,theme:P.oneOf(["dark","light"]),type:P.oneOf(["image","audio"]),tabindex:P.number,onExpired:P.func,onErrored:P.func,size:P.oneOf(["compact","normal","invisible"]),stoken:P.string,hl:P.string,badge:P.oneOf(["bottomright","bottomleft","inline"])};Oe.defaultProps={onon(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomr_=t}var X={},fa=0;function pa(e,t){return t=t||{},function(r){var s=r.displayName||r.name||"Component",i=function(b){u="",f}var k=g.prototype;return k.asyncScriptLoaderGetScriptLoderID},k.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},k.asyncScriptLoaderHandte)})},k.asyncScriptLoaderTriggerOnScriptName]},k.componentDidMount=function(){var v=this,f=this.setupScriptURL(),E=this.asyncScriptLoaderGetScriptLoaderID(),C=t,me=C.globalName,oe=C.callbackName,ye=C.scriptId;if(me&&typeof window[me]<"u"&&(X[f]={loaded:!0,observers:{}}),X[f]){var x=X[f];if(x&&(x.loaded||x.errored)){this.asyncScriptLoaderHandleLoad(x);return}x.observers[E]=function(B){return v.asyncScriptLoaderHandleLoad(B)};return}var O={ad(B)},X[f]={loaded:!1,observers:O};var j=document.createElement("script");j.src=f,j.async=!0;for(var D in t.attributes)j.setAttribute(D,t.attributes[D]);ye&&(j.id=ye);J[z]}};oe&&typeof window<"u"&&(windded()}),j.onload=function(){var B=X[f];B&&(B.loaded=!0,le(function(se){return oe?!1:(se(B),!0)}))},j.o!0}))},document.body.appendChild(j)},k.componentWillUnmount=function(){var v=this.__scriptURL;if(t.removeOnUnmount===!0)for(var f=document.getElementsByTagName("script"),E=0;E<f.length;E+=1)f[E].src.indexOf(v)>-1&&f[E].parentNode&&f[E].parentNode.removeChild(f[E]);var C=X[v];C&&(delete C.observers[this.asyncScriptLoaderGetScriptLoaderID()],t.removeOnUnmount===!0&&delete X[v])},k.render=function(){var v=t.globalName,f=this.props;f.asyncScriptOnLoad;var E=f.forwardedRef,C=da(f,["asyncScriptOnLoad","forwardedRef"]);return v&&typeof window<"u"&&(C[v]=typeof window[v]<"u"?window[v]:void 0),C.ref=E,Y.createElement(r,C)},g}(Y.Component),c=Y.forw:g}))});return c.displayName="AsyncScriptLoader("+s+")",c.propTypes={asyncScriptOnLoad:P.func},St(c,r)}}var at="onloadcallback",ha="grecaptcha";function ma(){return typeof window<"u"&&window.recaptchaOptions||{}}function ya(){var e=ma(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return"https://"+t+"/recaptcha/api.js?onload="+at+"&render=explicit"}const ba=pa(ya,{callbackName:at,globalName:ha})(Oe),ga=({id:e,className:t})=>{const{reCaptchaSiteKey:a}=$r(),{langCode:r}=Or(),{register:s,formState:i,setValue:c,clearErrors:b}=Se(),g=!!i.error,b(e)};return Y.use:!0})}),u.jsx("div",{className:ie(t,{error:g}),children:u.jsx(ba,{hl:r,sitekey:a,onChange:k})})},va=V(ga)`
  width: fit-content;
  &.error {
    box-shadow: 0 2px 0 ${F.RED};
  }
`,xa=({id:e,label:t,className:a,required:r})=>u.jsxs("div",{className:a,children:[u.jsx(tt,{id:e,type:"checkbox",required:r}),u.jsx(sr,{htmlFor:e,label:t,className:"checkbox-label"})]}),te={backgroundColor:"--checkbox-input-background-color",borderColor:"--checkbox-input-border-color",checkmarkBorderColor:"--checkbox-input-border-color-checked",borderColorError:"--checkbox-input-border-color-error",borderColorHover:"--checkbox-input-border-color-hover",textColor:"--checkbox-input-text-color"},ka=`
  ${te.backgroundColor}: ${F.DARK_BLUE_GREY_01};
  ${te.borderColor}: ${F.BLUE_GREY_02};
  ${te.checkmarkBorderColor}: ${F.WHITE};
  ${te.borderColorError}: ${F.ACCENT_RED};
  ${te.borderColorHover}: ${F.BLUE_GREY_01};
`,ur=V(xa)`
  display: flex;
  position: relative;

  input {
    height: 22px;
    width: 22px;
    min-width: 22px;
    opacity: 0;
    cursor: pointer;
  }

  .checkbox-label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 22px;
    height: 22px;
    border: 1px solid var(${te.borderColor}, ${F.BLUE_GREY_04});
    background-color: var(${te.backgroundColor}, ${F.WHITE});
  }

  ${Mr.mouse`
    input:hover + .checkbox-label:before{
      border: 2px solid var(${te.borderColorHover}, ${F.DW_DARK_BLUE});
    }
  `}

  input:checked + .checkbox-label:after {
    content: "";
    position: absolute;
    left: 8px;
    top: 3px;
    height: 12px;
    width: 6px;
    border: 2px solid var(${te.checkmarkBorderColor}, ${F.DW_DARK_BLUE});
    border-left: 0;
    border-top: 0;
    transform: rotate(45deg);
  }

  input.error + .checkbox-label:before {
    border: 2px solid var(${te.borderColorError}, ${F.RED});
  }

  .checkbox-label {
    font-size: 1.6rem;
    padding-left: 10px;
    cursor: pointer;
  }
`;ur.darkStyles=ka;const Sa=({id:e,label:t,className:a,required:r})=>u.jsx(Z,{required:r,id:e,className:a,ch...s})}),fr=V(Sa)`
`;fr.darkStyles=`
  ${ur.darkStyles};
  ${Z.darkStyles};
`;const _a=1e6,wa=({id:e,className:t,acceptTypes:a,required:r,maxFileSize:s={value:1}})=>{const i=G({key:"component.feedback_form.form.fields.upload.field_info",parameters:{maxFileSize:`${s.value}MB`}}),{formState:c,register:b}=Se(),g=G(s.message),k=!!c.errors[e],w=s.value*_a,v=b(e,{required:r,validate:{maxFileSize:f=>{var E;return((E=f==null?void 0:f[0])==null?void 0:E.size)<w||g}}});return u.jsxs("div",{className:t,children:[u.jsx("input",{...v,id:e,className:ie({error:k}),accept:a==null?void 0.${f}`).join(","),type:"file"}),u.jsx(Ie,{children:i})]})},st=V(wa)`
  ${$e}
  display: grid
`;st.darkStyles=`
  ${Ie.darkStyles}
  ${Xe}
`;const Aa=({id:e,className:t,label:a,acceptTypes:r,required:s,maxFileSize:i})=>u.jsx(Z,{label:a,required:s,id:e,className:t,children:c=>u.jsx(st,{...c,maxFileSize:i,acceptTypes:r})}),pr=V(Aa)`
`;pr.darkStyles="";const Ea=({className:e,onSubmit:t,prefilledContent:a={},hasUpload:r})=>{const{feedbackFormMaxFileSizeMb:s,feedbackFormAcceptedFileTypes:i}=$r();return u.jsxs(rt,{className:e,onSubmit:t,prefilledContent:a,children:[u.jsxs(xe,{children:[u.jsx(Re,{isA:"div",label:"component.feedback_form.form.intro"}),u.jsx(Ee,{className:"hint",children:G("component.feedback_form.form.mandatory_hint")})]}),u.jsxs(xe,{headline:"component.feedback_form.form.section_message.label",isAlternate:!0,children:[u.jsx(pe,{id:Q.feedbackForm.subject,label:"component.feedback_form.form.fields.subject.label",required:"component.feedback_form.form.fields.subject.invalid.required",readOnly:!!a.subject}),u.jsx(ir,{id:Q.feedbackForm.message,label:"component.feedback_form.form.fields.message.label",required:"component.feedback_form.form.fields.message.invalid.required",maxLength:{value:2e3,message:"component.feedback_form.form.fields.message.invalid.max_length"}}),r&&u.jsx(pr,{id:Q.feedbackForm.file,label:"component.feedback_form.form.fields.upload.label",required:"component.feedback_form.form.fields.upload.invalid.required",acceptTypes:i,maxFileSize:{value:s,message:"component.feedback_form.form.fields.upload.invalid.max_file_size"}})]}),u.jsxs(xe,{headline:"component.feedback_form.form.section_contact.label",children:[u.jsx(pe,{id:Q.feedbackForm.firstName,label:"component.feedback_form.form.fields.first_name.label",required:"component.feedback_form.form.fields.first_name.invalid.required"}),u.jsx(pe,{id:Q.feedbackForm.lastName,label:"component.feedback_form.form.fields.last_name.label",required:"component.feedback_form.form.fields.last_name.invalid.required"}),u.jsx(lr,{id:Q.feedbackForm.gender,groupLabel:"component.feedback_form.form.fields.gender.label",required:"component.feedback_form.form.fields.gender.invalid.required",valueToTranslation:{FEMALE:"component.feedback_form.form.fields.gender.female.label",MALE:"component.feedback_form.form.fields.gender.male.label",DIVERS:"component.feedback_form.form.fields.gender.divers.label"}}),u.jsx(pe,{id:Q.feedbackForm.userEmail,label:"component.feedback_form.form.fields.email.label",required:"component.feedback_form.form.fields.email.invalid.required",pattern:{value:Wt,message:"component.feedback_form.form.fields.email.invalid.pattern"}}),u.jsx(pe,{id:Q.feedbackForm.city,label:"component.feedback_form.form.fields.city.label"}),u.jsx(dr,{id:Q.feedbackForm.country,label:"component.feedback_form.form.fields.country.label",defaultOptionTranslation:"component.feedback_form.form.fields.country.initial_option",required:"component.feedback_form.form.fields.country.invalid.required",valueToTranslation:sa})]}),u.jsxs(xe,{isAlternate:!0,children:[u.jsx(fr,{id:Q.feedbackForm.wantOffers,label:"component.feedback_form.form.fields.offers.want_offers.label"}),u.jsx(Ee,{className:"hint captcha",children:G("component.feedback_form.form.captcha.label")}),u.jsx(va,{id:Q.feedbackForm.captchaToken}),u.jsx(Pr,{className:"btn-bar",align:"end",children:u.jsx(Ur,{isA:"button",type:"submit",onKeyDown:Gr,children:G("component.feedback_form.form.submit_button.label")})})]})]})},Ca=`
  ${xe.darkStyles}
  ${Re.darkStyles}
  ${Ee.darkStyles}

  ${pe.darkStyles}
  ${ir.darkStyles}
  ${fr.darkStyles}
  ${lr.darkStyles}
  ${dr.darkStyles}
  ${pr.darkStyles}

  ${Ur.darkStyles}
`,hr=V(Ea)`
  .hint {
    font-size: 1.5rem;
    margin-top: 15px;
    margin-bottom: 10px;
    display: inline-block;
  }
  .captcha {
    &:after {
      content: "*";
    }
  }
  .btn-bar {
    margin-top: 30px;
  }
`;hr.darkStyles=Ca;const Fa=({content:e,langCode:t})=>async({captchaToken:a,file:r,...s})=>{const i={...s,contentId:e.id,language:t.split("-")[0],receiverEmail:e.firstNavArray[0].feedbackEmail,title:e.name,url:e.namedUrl},c=new FormData;c.append("feedback",JSON.stringify(i));const b=r==null?void 0:r[0];return b&&c.append("file",b),await pt.window.fetch(`/feedback/captcha?token=${a}`,{method:"POST",mode:"no-cors",cache:"no-cache",headers:{"Content-Type":void 0},body:c})},Ra="/static/feedback-success-91a2e37f.svg",Da=({className:e,onCloseFeedback:t=gt})=>{const a=G("component.feedback_form.success.headline"),r=G("component.feedback_form.success.message"),s=G("component.feedback_form.success.illustration.alt"),i=G("component.feedback_form.success.close_button.label");return u.jsxs("div",{className:e,children:[u.jsx("img",{src:Ra,alt:s,title:s}),u.jsx(mt,{isA:"h3",className:"success-headline",children:a}),u.jsx(yt,{isA:"p",className:"success-msg",children:r}),u.jsx(Pr,{align:"end",children:u.jsx(bt,{className:"close-feedback-btn",onClick:t,onKeyDown:Gr,children:i})})]})},Ia=V(Da)`
  padding: 20px 15px;

  .success-headline {
    font-size: 3rem;
    margin-bottom: 0;
    margin-top: 20px;
  }

  .success-msg {
    font-size: 1.6rem;
    margin-bottom: 0;
    margin-top: 10px;
  }

  ${ht.xs`
    .close-feedback-btn {
      position: absolute;
      bottom: 100px;
      width: calc(100% - 30px);
    }
  `}

  ${jr.sm`
    padding: 30px 45px;

    .close-feedback-btn {
      margin-top: 30px;
    }
  `}
`,La=({className:e,isLoading:t,children:a})=>u.jsxs("div",{className:e,children:[t&&u.jsx(vt,{className:"feedback-spinner"}),u.jsx("div",{className:ie({"is-loading":t}),children:a})]}),Ta=V(La)`
  .feedback-spinner {
    height: calc(100vh - 60px)
  }
  .is-loading {
    display: none;
  }
`,Va=({content:e,onCloseFeedback:t,...a})=>{const{langCode:r}=Or(),[s,i]=Y.useState(!1),[c,b]=Y.useState(!1),g=Fa({content:e,langCode:r}),k=async w=>{b(!0);try{(await g(w)).status===200&&i(!0)}finally{b(!1)}};return Y.useEffect(()=>{var w;(w=xt())==null||w.focus()},[]),s?u.jsx(Ia,{onCloseFeedback:t}):u.jsx(Ta,{isLoading:c,children:u.jsx(hr,{onSubmit:k,...a})})},Oa=kt(Va)`
  ${hr.darkStyles}
`;export{Va as DwFeedbackFormWithSubmit,Oa as DwFeedbackFormWithSubmitAndTheme};
//# sourceMappingURL=index-015dbe56.js.map
