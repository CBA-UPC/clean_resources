import{aF as J,aA as R,aB as K,as as z,ay as re,K as _,ai as ie,az as L,aa as k,aC as A,l as se,a3 as G,d0 as Q,n as oe}from"./itinerary-entities.5f897bcd.js";import{g as O,u as ne,D as Y}from"./entry.a7cea746.js";import{A as de,l as ue}from"./AddLabel.7a680199.js";import{l as F,r as x,G as N,H as M,I as i,x as p,z as a,a7 as s,Y as W,a as V,c as C,a6 as u,Q as ce}from"./graphql.5cf3693b.js";import{P as pe}from"./PanelContainer.e2d81510.js";import{d as me,M as fe}from"./mixins.c083cc34.js";import{R as c}from"./itinerary-modules.2ea32123.js";import"./service-client.4862e840.js";import"./useTutorial.34e7d475.js";/* empty css                 */const be={class:"options"},ye=F({__name:"ReportLabelModal",props:{billCode:{},initialLabels:{}},emits:["close"],setup(T,{emit:b}){const{assignLabels:h}=J(),y=x(T.initialLabels||[]),m=x(!1),f=async()=>{var d;y.value.length>0&&(m.value=!0,await h({BillCode:T.billCode.toString(),LabelIds:(d=y.value)==null?void 0:d.map(}).then(.catch(.finally()};return(d,r)=>(N(),M(K,{width:"400px",onClose:r[1]||(r[1]=},{footer:i(()=>[p(R,{"full-width":"",loading:a(m),onClick:f},{default:i(()=>[s(" تایید ")]),_:1},8,["loading"])]),default:i(()=>[W("div",be,[p(de,{labels:a(y),"onUpdate:labels":r[0]||(r[0]=D=>V(y)?y.value=D:null),"in-modal":""},null,8,["labels"])])]),_:1}))}});const he=z(ye,[["__scopeId","data-v-7de0c772"]]),ke=F({__name:"FieldSelectModal",emits:["close"],setup(T,{emit:b}){const h=[{id:1,label:"نوع",checked:!0,isCheckbox:!0},{id:2,label:"نام و نام خانوادگی",checked:!0,isCheckbox:!0},{id:3,label:"شماره صورت حساب",checked:!0,isCheckbox:!0},{id:4,label:"تاریخ سفر",checked:!0,isCheckbox:!0},{id:5,label:"مبدا",checked:!0,isCheckbox:!0},{id:6,label:"مقصد",checked:!0,isCheckbox:!0},{id:7,label:"مبلغ کل",checked:!0,isCheckbox:!0},{id:8,label:"تخفیف",checked:!0,isCheckbox:!0},{id:9,label:"قابل پرداخت",checked:!0,isCheckbox:!0},{id:10,label:"وضعیت",checked:!0,isCheckbox:!0},{id:11,label:"تاریخ پرداخت",checked:!0,isCheckbox:!0},{id:12,�ماره پیگیری",checked:!0,isCheckbox:!0}],y=x([...h]),m=()=>alue.map(f=>f.id))};return(f,d)=>(N(),M(K,{title:"انتخاب ستون‌ها",onClose:d[1]||(d[1]=r=>b("close"))},{footer:i(()=>[p(R,{"full-width":"",type:"filled",onClick:m},{default:i(()=>[s(" دریافت ")fault:i(()=>[p(O,{class:"options",options:h,"multi-selected":"","dis-searchable":"",onSelected:d[0]||(d[0]=r=>y.value=r)})]),_:1}))}});const ve=z(ke,[["__scopeId","data-v-1c6527b5"]]),ge={class:"inputs"},_aseReport",setup(T){const b=J(),{saleReport:h}=re(b),y=async t=>{var w,l;const e=(w=b.saleReport.find(g=>g.billCode===t))==null?void 0:w.billLabels,n=e==null?void 0:e.map(({id:g,colour:j,title:le})=>({id:g||0,label:le||"",color:j?ue[`Colour${j+1}`].name:void 0,isCheckbox:!0,checked:!0})),{open:I}=A({component:he,attrs:{initialLabels:n,billCode:t}});(l=(await I()).args)!=null&&l[0]&&await b.fetchSaleReport(o.value)},{day:m}=se(),f=C({get(){const{from:t,to:e}=o.value;return t&&e?{start:new Date(t),end:new Date(e)}:t?{start:new Date(t),end:null}:e?{start:null,end:new Date(e)}:null},set(t){const{start:e,end:n}=t||{};o.value.from=e?m.gregory(e).format(_()):"",o.value.to=n?m.gregory(n).format(_()):""}}),d=C({get(){const{fromDepartureTime:t,toDepartureTime:e}=o.value;return t&&e?{start:new Date(t),end:new Date(e)}:t?{start:new Date(t),end:null}:e?{start:null,end:new Date(e)}:null},set(t){const{start:e,end:n}=t||{};o.value.fromDepartureTime=e?m.gregory(e).format(_()):"",o.value.toDepartureTime=n?m.gregory(n).format(_()):""}}),r=ie(),D=[{id:r.t(`Itinerary.Reserve.${c.Flight}`),label:r.t(`Itinerary.Reserve.${c.Flight}`)},{id:r.t(`Itinerary.Reserve.${c.Train}`),label:r.t(`Itinerary.Reserve.${c.Train}`)},{id:r.t(`Itinerary.Reserve.${c.Hotel}`),label:r.t(`Itinerary.Reserve.${c.Hotel}`)},{id:r.t(`Itinerary.Reserve.${c.Bus}`),label:r.t(`Itinerary.Reserve.${c.Bus}`)},{id:r.t(`Itinerary.Reserve.${c.Taxi}`),label:r.t(`Itinerary.Reserve.${c.Taxi}`)},{id:r.t(`Itinerary.Reserve.${c.Bundle}`),label:r.t(`Itinerary.Reserve.${tinerary.Reserve.${c.Ship}`),label:r.t(`Itinerary.Reserve.${c.Ship}`)}],S=C({get(){return D.find(t=>t.id===o.value.type)},set(t){o.value.type=t==null?void 0:t.id}}),o=x({}),v=x(!1),P=x(!1),{handleException:q}=ne(),X=me([{key:"data-table-index",title:"ردیف"},{key:"type",title:"نوع"},{key:"billCode",title:"شماره صورتحساب"},{key:"billLabels",title:"لیبل"},{key:"fullName",title:"نام مسافر"},{key:"organizerFullName",title:"نام کاربر"},{key:"serviceNumber",title:"شماره سرویس"},{key:"departureDate",title:"تاریخ سفر"},{key:"departureTime",title:"ساعت سفر"},{key:"originName",title:"مبدأ"},{key:"destinationName",title:"مقصد"},{key:"price",title:"قیمت"},{key:"totalDiscount",title:"تخفیف"},{key:"penalty",title:"جریمه"},{key:"payable",title:"مبلغ پرداختی"},{key:"status",title:"وضعیت"},{key:"finalizationTime",title:"تاریخ پرداخت"},{key:"referenceCode",title:"شماره پیگیری"}]),$=C(()=>h.value.reduce((t,e)=>({price:(t.price||0)+U(e.price||"0"),totalDiscount:(t.totalDiscount||0)+U(e.totalDiscount||"0"),payable:(t.payable||0)+U(e.payable||"0"),penalty:t.penalty+(e.penalty||0)}),{price:0,totalDiscount:0,payable:0,penalty:0})),Z=C(()=>h.value.slice().sort((tationTime||"").getTime()-new Date(e.finalizationTime||"").getTime())),ee=async()=>{var t,e;!((t=f.value)!=null&&t.start)||!((e=f.value)!=null&&e.end)||(v.value=!0,P.value=!0,await b.fetchSaleReport(o.value),v.value=!1)},U=t=>+t.replace(/,/g,""),E=t=>t===""?"-":m.js(new Date(t||"")).format(_({format:"long",includeYear:!0})),H=async()=>{var n;const{open:t}=A({component:ve}),e=(n=(await t()).args)==null?void 0:n[0];return e?oe.stringify({...o.value,filterParameters:e},{addQueryPrefix:!0,arrayFormat:"repeat"}):null},te=async()=>{const t=G().acc,e=await H();if(e)try{v.value=!0,await Q(`${t}/UserReport/self/Download${e}`,"GET","report.pdf",{})}catch(n){q(n,{icon:"warning"})}finally{v.value=!1}},ae=async()=>{const t=G().acc,e=await H();if(e)try{v.value=!0,await Q(`${t}/UserReport/self/excel/Download${e}`,"GET","report.xls",{})}catch(n){q(n,{icon:"warning"})}finally{v.value=!1}};return(t,e)=>(N(),M(pe,{title:a(r).t("PurchaseReport.title"),"retain-box-in-mobile":""},{default:i(()=>{var n,I,B,w;return[W("div",ge,[p(Y,{modelValue:a(f),"onUpdate:modelValue":e[0]||(e[0]=l=>V(f)?f.value=l:null),class:"half","hide-icon":"","start-day-title":"رزرو از","end-day-title":"رزرو تا",joined:"",range:"","range-enabled":"","max-date":new Date,required:"",format:"short","hide-description":"","hide-label":"","year-month-selector":"","past-enabled":"","future-disabled":"","double-month":""},null,8,["modelValue","max-date"]),p(Y,{modelValue:a(d),"onUpdate:modelValue":e[1]||(e[1]=l=>V(d)?d.value=l:null),class:"half","hide-icon":"","start-day-title":"حرکت از","end-day-title":"حرکت تا",joined:"",range:"","range-enabled":"","max-date":new Date,required:"",format:"short","hide-description":"","hide-label":"","year-month-selector":"","past-enabled":"","future-disabled":"","double-month":""},null,8,["modelValue","max-date"]),p(L,{modelValue:a(o).fullName,"onUpdate:modelValue":e[2]||(e[2]=l=>a(o).fullName=l),class:"quarter",placeholder:"نام مسافر","hide-deselValue"]),p(L,{modelValue:a(o).originName,"onUpdate:modelValue":e[3]||(e[3]=l=>a(o).originName=l),class:"quarter",placeholder:"مبدأ",null,8,["modelValue"]),p(L,{modelValue:a(o).destinationName,"onUpdate:modelValue":e[4]||(e[4]=l=>a(o).destinationName=l),class:"quarter",placeholder:"مقصد","hide-description":""},null,8,["modelValue"]),p(O,{modelValue:a(S),"onUpdate:modelValue":e[5]||(e[5]=l=>V(S)?S.value=l:null),options:D,class:"quarter","hide-description":"",placeholder:"نوع سرویس",clearable:""},null,8,["modelValue"]),p(R,{type:"filled",disabled:(!((n=a(f))!=null&&n.start)||!((I=a(f))!=null&&I.end))&&(!((B=a(d))!=null&&B.start)||!((w=a(d))!=null&&w.end)),size:"big",class:"third",onClick:ee},{default:i(()=>[s(u(a(r).t("PurchaseReport.submit")),1)]),_:1},8,["disabled"]),p(R,{type:"filled",disabled:!a(h).length,size:"big",class:"third",onClick:te},{default:i(()=>[s(" دانلود pdf ")]),_:1},8,["disalled",disabled:!a(h).length,size:"big",class:"third",onClick:a)=>[s(" دانلود اکسل ")]),_:1},8,["disabled"])]),a(P)?(N(),M(fe,{key:0,headers:a(X),items:a(Z),loading:a(v),"no-data-text":"خریدی در بازه انتخابی یافت نشد.",class:"data-table","onClick:row":e[6]||(e[6]=l=>y(l.billCode||""))},{"item.billLabels":i(({value:l})=>[s(u(l==null?void 0:l.map(({title:g})=>g).join(" - ")),1)]),"item.departureDate":i(({item:l})=>[s(u(E(l.departureTime||"")),1)]),"item.departureTime":i(({value:l})=>[s(u(l?a(m).gregory(l).format(("formatter"in t?t.formatter:a(_))({includeTime:!0,includeDate:!1})):"-"),1)]),"item.pri>[s(u(a(k)(l)),1)]),"item.totalDiscount":i(({value:l})=>[s(u(a(k)(l)),1)]),"item.penalty":i(({value:l,item:g})=>[s(u(a(k)((l||0)*10,{includeUnit:!1}))+" ("+u(g.penaltyPercent)+"٪) ",1)]),"item.payable":i(({value:l})=>[s(u(a(k)(l)),1)]),"item.finalizationTime":i(({value:l})=>[s(u(E(l||"")),1)]),"item.append.type":i(()=>[s("جمع کل")]),"item.append.price":i(()=>[s(u(a(k)(a($).price*10,{includeUnit:!1})),1)]),"item.append.totalDiscount":i(()=>[s(u(a(k)(a($).totalDiscount*10,{includeUnit:!1})),1)]),"item.append.payable":i(()=>[s(u(a(k)(a($).payable*10,{includeUnit:!1})),1)]),"item.append.penalty":i(()=>[s(u(a(k)(a($).penalty*10,{includeUnit:!1})),1)]),_:1},8,["headers","items","loading"])):ce("",!0)]}),_:1},8,["title"]))}});const Me=z(_e,[["__scopeId","data-v-5ed4ca4c"]]);export{Me as default};