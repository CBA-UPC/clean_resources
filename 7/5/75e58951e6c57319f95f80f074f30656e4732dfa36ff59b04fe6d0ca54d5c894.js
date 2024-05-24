import{S as N,f as j,a as q,_ as F}from"./entry.a7cea746.js";import{aD as A,ab as G,a1 as O,G as Y,ay as C,at as K,b4 as Q,aq as W,bZ as Z,az as J,aA as X,bg as ee,aP as oe,b_ as se,b$ as te,c0 as ae,c1 as ie,as as ne}from"./itinerary-entities.5f897bcd.js";import{l as R,G as u,P as _,Y as e,a6 as d,x as o,S as ce,a4 as le,bd as re,b6 as de,r as m,c as k,w as ue,q as _e,y as pe,z as s,R as he,a as me,I as f,a7 as v,an as fe,ao as ve,be}from"./graphql.5cf3693b.js";import{I as ge}from"./InformationContainer.c9910b2d.js";import{V as ye}from"./VideoPlayer.3488cdf1.js";import"./itinerary-modules.2ea32123.js";import"./service-client.4862e840.js";import"./FaqList.f0c8de76.js";import"./index.308ba4bd.js";const we=""+globalThis.__publicAssetsURL("img/auto-reserve/hero-mobile.webm"),xe=""+globalThis.__publicAssetsURL("img/auto-reserve/hero.webm"),Se={class:"info-index"},Ie={class:"info-box"},Ce={class:"info-head"},ke={class:"info-icon"},Ve={class:"info-title"},Ae={class:"info-desc"},c=R({__name:"InfographicBox",props:{title:{},desc:{},color:{},icon:{},index:{}},setup(l){return(n,p)=>(u(),_("div",{class:"info-wrapper",style:ce({"--info-bax-color":n.color})},[e("div",Se,d(n.index),1),e("div",Ie,[e("div",Ce,[e("div",ke,[o(A,{icon:n.icon,color:"white",size:"small"},null,8,["icon"])]),e("div",Ve,d(n.title),1)]),e("p",Ae,d(n.desc),1)])],4))}});const i=Re={class:"page-wrapper"},Te={class:"notify-container"},ze=i(ه تماس خود را در اینجا وارد کنید. ",-1)),$e={class:"artwork"},Be={class:"content"},De={class:"h1-container"},Pe=i(()=>e("p",{class:"head1"},"با ",-1)),Me=i(� که میخوای نیست؟ "),e("br"),v(" با کلیک روی موجود شد رزرو کن از قابلیت رزرو خودکار مستربلیط استفاده کن ")],-1)),Ee={class:"discount-card"},He=i(()=>e("div",{class:"discount-title"},"تخفیف خرید اوّل",-1)),Le=i(()=>e("div",{class:"discount-desc"}," برای دریافت کد تخفیف 40 درصدی ویژه اولین رزرو خودکار، شماره تماس خود را وارد کنید. ",-1)),Ne={class:"discount-actions"},je={class:"artwork-animation"},qe={key:0,playsinline:"",autosource",{src:we,type:"video/webm"},null,-1)),Ge={key:1,playsinline:"",autoplay:"",muted:"",loop:""},Oe=i(()=>e("source",{src:xe,type:"video/webm"},null,-1)),Ye={class:"infographic-container"},Ke={class:"box-column"},Qe=i(()=>e("div",{class:"spacer"},null,-1)),Ws:"box-column"},V="get-auto-reserve-mobile",Ze=R({__name:"au{let n,p;const h=G(),T=O(),b=Y(),{loggedIn:z,userInfo:$}=C(T),B=le(),D=K(),{isMobileSize:P}=Q(),{landingPageTitle:g,o.js"()=>be(()=>h.getPageData(B.path),"$zVOeQrxI8E")),await n,p(),de({title:g,description:y,ogTitle:g,ogDesc?"تخفیف ارسال شد":"دریافت تخفیف"),U=k(()=>{var a;return(a=h.landingPageContent)==null?void 0:a.h1});ue($,a=>{a&&!t.value&&(t.value=a.mobile||"")},{immediate:!0});function x(){w.value=window.scrollY!==0}function E(){window.scrollTo({top:0,behavior:"smooth"})}function H(){if(!ie.test(t.value)){D({title:"توجه",text:"شماره موبایل خود را به صوonfirmButtonText:"باشه"});return}b.setWebengageUserInfo({mobile:t.value}),b.trackAll("auto-reserve-landing-campaign"),localStorage.setItem(V,t.value),r.value=!0}return _e(()=>{const a=localStorage.getItem(V);a&&(t.value=a,r.value=!0),window.addEventListener("scroll",x)}),pe(()=>{window.removeEventListen{const I=F;return u(),_("div",Re,[e("div",{class:he(["notify",{visible:s(w)}]),onClick:E},[e("div",Te,[o(A,{icon:s(Z)},null,8,["icon"]),ze])],2),e("div",$e,[e("div",Be,[e("div",De,[Pe,e("h1",null,d(s(Uv",Ee,[He,Le,e("div",Ne,[o(J,{modelValue:s(t),"onUpdate:modelValue":S[0]||(S[0]=L=>me(t)?t.value=L:null),class:"discount-phone","hide-descriptisabled:s(z)||s(r)},null,8,["modelValue","disabled"]),o(X,{id:"get-auto-reserve-discount-button",disabled:s(r),class:"discount-btn",onClick:H},{default:f(()=>[v(d(s(M)),1)]),_:1},8,["disabled"])])])]),e("div",je,[s(P)?(u(),_("video",qe,[o(I,null,{default:f(()=>[Fe]),_:1})])):(u(),_("video",Ge,[o(I,null,{default:f(()=>[Oe]),_:1})]))]),o(N,{class:"flight-search-form"})]),e("div",Ye,[e("div",Ke,[o(c,{title:"مبدأ و مقصد سفر را جست‌و‌جو کنید.",desc:"از بخش بالای صفحه یا از صفحه اصلی سایت به بخش بلیط هواپیما بروید در ادامه فقط کافیست مبدأ، مقصد و زمان سفر را مشخص کنید.",color:"var(--blue-300)",icon:s(ee),index:"01"},null,8,["icon"]),o(c,{title:"به حساب کاربری خود وارد شوید.",desc:"اگر وارد حساب کاربری‌تان شده‌اید در این بخش سراغ گزینه ادامه و ورود بروید. اما اگر هنوز وارد حسابتان نشده‌اید پس گزینه ادامه و انتخاب را کلیک کرده و به مرحله بعد بروید.",color:"var(--yellow-300)",icon:s(oe),index:"02"},null,8,["icon"]),o(c,{title:"مشخصات خود را وارد کنید.",desc:"مشخصات را وارد کرده و حتما یکبار بررسی کنید زیرا در ادامه قابل تغییر نخواهند بود.",color:"var(--green-300)",icon:s(se),index:"03"},null,8,["icon"])]),Qe,e("div",We,[o(c,{title:"موجود شد رزرو کن! را انتخاب کنید.",desc:"اگر پرواز مد نظرتان ظرفیت دارد که فرآیند رزرو را پیش بروید اما ماجرای رزرو خودکار از جایی شروع می‌شود که ظرفیت تکمیل باشد. در این حالت گزینه 'موجود شد رزرو کن' را انتخاب کنید.",color:"var(--blue-300)",icon:s(j),index:"04"},null,8,["icon"]),o(c,{title:"پرواز مدنظر را انتخاب کنید.",desc:"حالا پروازی که می‌خواهید را انتخاب کنید. توجه داشته باشید که در مبلغ 300 هزار تومان بابت رزرو خودکار به هزینه بلیط اضافه خواهد شد.",color:"var(--purple-300)",icon:s(te),index:"05"},null,8,["icon"]),o(c,{title:"اعتبار خود را شارژ کنید.",desc:"اکنون روی دکمه شارژ کلیک کنید تا پیغام اعتبار به کیف پول شما اضافه شد را مشاهده کنید. به همین آسانی رزرو خودکار فعال می‌شود.",color:"var(--red-300)",icon:s(ae),index:"06"},null,8,["icon"])])]),o(ye,{class:"player"}),o(ge,{"faq-title":"سوالات متداول رزرو خودکار","hide-busy-way":""}),o(q,{class:"site-footer",compact:""})])}}});const co=ne(Ze,[["__scopeId","data-v-42fec830"]]);export{co as default};