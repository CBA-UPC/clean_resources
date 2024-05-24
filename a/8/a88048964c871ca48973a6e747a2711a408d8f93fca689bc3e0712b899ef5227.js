(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1099:function(t,e,n){"use strict";n.r(e);var H=n(5),i=n.n(H),s=n(719),a=n(120),H=n(635),o=n(933),r=n(742),l=n(674),d=n(22),H={name:"orderInspection",extends:H.default,components:{Modal:H.default},mixins:[o.a],props:{realty:{type:Object,default:function(){return{}}},withBus:{type:Boolean,default:!1},fromId:{type:Number,default:0}},data:function(){return{phone:"",name:"",description:"",successMessage:!1,err:{name:!1,phone:!1},inspectionAvailableForCity:0,inspPrice:0,billingWindow:null,inspectionSuccessMessage:0,withFree:0,withoutFree:0,inspectionExistsMessage:0,inspPublicationId:0}},computed:{realtyData:isMyAgentsAdverts:function(){return this.$route.params.id&&!["finalpageV","finalpage"].includes(this.$route.name)||"myagentsadverts"===this.$route.name},isMyArchive:showInfoOnWeekend:function(){return this.betweenOnDate("2022-12-31 06:00:00","2023-01-01 12:00:00")||this.betweenOnDate("2023-01-06 00:00:00","2023-01-07 09:00:00")},fromIdInspection:,watch:{realtyData:"setupValueIntoFields"},methods:{betweenOnDate:function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return!(!e||!n)&&(t=i()(),t.isAfter(e))&&t.isBefore(n)},setupValueIntoFields:function(){var e,t,n=this;this.isMyAgentsAdverts?(t=this.$store.state.employees,e=null,Object(s.each)(t,function(t){return Number(t.user_id)!==Number(n.realty.user_id)||(e=t,!1)}),e&&(this.name=e.name,this.phone=e.phones[0].phone)):(t=this.$store.getters.user,t&&(this.name=t.name,this.phone=t.phones[0].phone))},showValidateErrors:function(){this.err.name=!this.name,this.err.phone=!this.phone||this.phone.length<9||12<this.phone.length||!Number(this.phone)},trackInspectionEvent:function(){var t=this.$store.state.user||null;this.$trackSlonEvent({web_id:this.$cookie.get("ui"),user_id:this.realty.user_id||this.$store.getters.userId||0,event_id:343,state_id:this.realty.state_id||this.$store.getters.userStateId||0,phone:t&&t.phones&&t.phones[0]&&t.phones[0].phone?t.phones[0].phone:"",form_type:this.isMyAgentsAdverts?4:1,city_id:this.realty.city_id||this.$store.getters.userCityId||0,agency_id:this.realty.agency_id||this.$store.getters.agencyId||0})},sendInspection:function(){var e=this,t=new FormData;t.append("name",this.name),t.append("phone",this.phone),t.append("description",this.description),t.append("without_order",this.inspPrice?0:1),t.append("user_id",this.realty.user_id||this.$store.getters.userId||0),t.append("cityId",this.realty.city_id||this.$store.getters.userCityId||0),t.append("packageType",4),t.append("single",1),t.append("from_id",this.fromIdInspection),this.isMyAgentsAdverts?(t.append("admin_action",!0),t.append("page","AgentsAdverts")):"finalpage"===this.$route.name&&t.append("page","NewFinalPage"),this.isMyArchive&&t.append("page","MyArchivePage"),this.inspPublicationId&&t.append("publication_id",this.inspPublicationId),Object(d.n)(+this.$store.getters.currentPackageId||0)&&t.append("with_package",1),t.append("realty_id",this.realty.realty_id||0),this.err.name||this.err.phone?this.billingWindow.close():this.$http.post("/ru/default/package/buy-verify-package/",t,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(t){t.data.status&&Number(t.data.status)?(t.data.url?e.isWebView?window.location.href=t.data.url:(e.billingWindow.location.href=t.data.url,e.billingWindow.focus()):e.closeBillingWindow(),1===Number(t.data.status)?(e.successMessage=!0,e.trackInspectionEvent(),e.inspPrice?e.withoutFree=!0:e.withFree=!0):2===Number(t.data.status)&&(e.inspectionExistsMessage=!0),e.withBus&&r.a.$emit("orderInspectionHandler",{name:"inspection",realtyId:e.realty.realty_id})):e.closeBillingWindow()}).catch(function(t){console.log("sendInspection err",t)}),this.gtmInspectionEvent()},sendInspectionsForm:function(){return this.showValidateErrors(),this.err.name||this.err.phone||this.$store.getters.userId&&(this.isWebView||(this.billingWindow=window.open("/wait.html","_blank","fullscreen=no,height=768,width=1024,toolbar=no,scrollbars=yes")),this.sendInspection()),!1},isInspectionAvailableForCity:isCanInspectInCategory:closeBillingWindow:,mounted:function(){var e=this;this.setupValueIntoFields(),this.isInspectionAvailableForCity(this.realty.city_id||this.$store.getters.userCityId)&&Object(l.b)({realtyId:this.realty.realty_id,withInspPrice:1}).then(function(t){e.inspPublicationId=+Object(s.get)(t,"data.inspPublicationId",0),e.inspPrice=+Object(s.get)(t,"data.price",0),e.inspBalanceByRealty=+Object(s.get)(t,"data.inspectionsBalance",0)}).catch(function(t){return console.log("getInspectionBalanceByRealty err --\x3e",t)})}},o=n(4);o=Object(o.a)(H,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("modal",{staticClass:"checkRequestModal",on:{close:function(t){return e.$emit("close")}}},[t("h3",{staticClass:"ps-head m0 flex f-center f-space boxed",attrs:{slot:"header"},slot:"header"},[t("span",{staticClass:"flex f-center"},[t("svg",{staticClass:"mw mr-10 pointer",attrs:{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){return e.$emit("close")}}},[t("path",{attrs:{d:"M20 13H7.8l5.6 5.6L12 20l-8-8 8-8 1.4 1.4L7.8 11H20v2z",fill:"currentColor"}})]),e._v("\n                "+e._s(e.ti("Оставьте заявку на проверку","Залиште заявку на перевірку"))+"\n            ")]),e._v(" "),t("a",{staticClass:"close unlink pointer",on:{click:function(t){return e.$emit("close")}}},[t("svg",{attrs:{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M6 18L18 6M6 6l12 12",stroke:"#fff","stroke-width":"2","stroke-linecap":"round"}})])])]),e._v(" "),t("div",{attrs:{slot:"body"},slot:"body"},[e.successMessage&&!e.inspectionExistsMessage?[t("div",{staticClass:"flex f-center isSuccessMessage"},[t("span",{staticClass:"svgSuccess circle i-flex f-center f-text-c"},[t("svg",{staticClass:"circle",attrs:{width:"20",height:"21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"10",cy:"10.5",r:"10",fill:"#79BE00"}}),t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.707 7.207L8 14.914l-3.707-3.707 1.414-1.414L8 12.086l6.293-6.293 1.414 1.414z",fill:"#fff"}})])]),e._v(" "),t("div",{staticClass:"size16"},[e._v(e._s(e.$t("Спасибо! Ваша заявка принята.")))])]),e._v(" "),e.withoutFree?t("div",{staticClass:"mt-10"},[e._v('\n                    Координатор "Перевірених квартир" DIM.RIA '+e._s(e.ti("свяжется с Вами сразу после фиксации оплаты","зв`яжеться з Вами відразу після фіксації оплати"))+".\n                ")]):e._e(),e._v(" "),e.withFree?t("div",{staticClass:"mt-10"},[e._v('\n                    Координатор "Перевірених квартир" DIM.RIA '+e._s(e.ti("свяжется с Вами в ближайшее время","зв`яжеться з Вами найближчим часом"))+".\n                ")]):e._e()]:e._e(),e._v(" "),!e.successMessage&&e.inspectionExistsMessage?t("div",[t("div",{staticClass:"success middle"},[t("i",{staticClass:"alert-warning"}),e._v(" "),t("div",{staticClass:"message"},[t("span",[e._v(e._s(e.ti("Заявка на проверку недвижимости уже зарегистрирована","Заявка на перевірку нерухомості вже зареєстрова�.ti("Узнайте подробности проверки у Координатора проекта","Дізнайтеся подробиці перевірки у Координатора проекту"))+"\n                            «ПЕРЕВІРЕНІ КВАРТИРИ» по тел. (067) 431-54-92\n                        ")])])])]):e._e(),e._v(" "),e.successMessage?e._e():t("form",{on:{submit:function(t){return t.preventDefault(),e.sendInspectionsForm(t)}}},[t("div",{staticClass:"mb-15"},[t("span",{staticClass:"i-block fl-l circle bgColor flex f-center f-text-c"},[t("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M5 12V11H4H3.99995H3.9999H3.99982H3.99971H3.99959H3.99944H3.99927H3.99908H3.99886H3.99863H3.99836H3.99808H3.99778H3.99745H3.9971H3.99673H3.99634H3.99592H3.99548H3.99502H3.99454H3.99404H3.99351H3.99296H3.99239H3.9918H3.99119H3.99056H3.9899H3.98922H3.98853H3.98781H3.98706H3.9863H3.98552H3.98471H3.98388H3.98304H3.98217H3.98128H3.98036H3.97943H3.97848H3.9775H3.97651H3.97549H3.97446H3.9734H3.97232H3.97122H3.9701H3.96896H3.9678H3.96662H3.96542H3.9642H3.96296H3.96169H3.96041H3.95911H3.95778H3.95644H3.95508H3.95369H3.95229H3.95087H3.94943H3.94796H3.94648H3.94498H3.94345H3.94191H3.94035H3.93877H3.93717H3.93555H3.93391H3.93225H3.93057H3.92887H3.92716H3.92542H3.92367H3.92189H3.9201H3.91829H3.91645H3.9146H3.91273H3.91085H3.90894H3.90701H3.90507H3.90311H3.90112H3.89912H3.8971H3.89507H3.89301H3.89094H3.88884H3.88673H3.8846H3.88245H3.88029H3.8781H3.8759H3.87368H3.87144H3.86919H3.86691H3.86462H3.86231H3.85998H3.85764H3.85527H3.85289H3.8505H3.84808H3.84565H3.8432H3.84073H3.83824H3.83574H3.83322H3.83068H3.82812H3.82555H3.82296H3.82036H3.81773H3.81509H3.81244H3.80976H3.80707H3.80436H3.80164H3.7989H3.79614H3.79337H3.79057H3.78777H3.78494H3.7821H3.77924H3.77637H3.77348H3.77058H3.76765H3.76472H3.76176H3.75879H3.7558H3.7528H3.74978H3.74675H3.7437H3.74063H3.73755H3.73445H3.73134H3.72821H3.72506H3.7219H3.71873H3.71554H3.71233H3.70911H3.70587H3.70262H3.69935H3.69607H3.69277H3.68946H3.68613H3.68278H3.67942H3.67605H3.67266H3.66926H3.66584H3.66241H3.65896H3.6555H3.65202H3.64853H3.64503H3.64151H3.63797H3.63442H3.63086H3.62728H3.62369H3.62008H3.61646H3.61283H3.60918H3.60552H3.60184H3.59815H3.59445H3.59073H3.587H3.58325H3.57949H3.57572H3.57193H3.56813H3.56432H3.56049H3.55665H3.55279H3.54892H3.54504H3.54115H3.53724H3.53332H3.52939H3.52544H3.52148H3.51751H3.51352H3.50952H3.50551H3.50148H3.49745H3.4934H3.48933H3.48526H3.48117H3.47707H3.47296H3.46883H3.46469H3.46054H3.45638H3.4522H3.44802H3.44382H3.43961H3.43538H3.43115H3.4269H3.42264H3.41837H3.41408H3.40979H3.40548H3.40116H3.39683H3.39249H3.38813H3.38377H3.37939H3.375H3.3706H3.36619H3.36177H3.35733H3.35289H3.34843H3.34396H3.33948H3.33499H3.33049H3.32598H3.32145H3.31692H3.31238H3.30782H3.30325H3.29868H3.29409H3.28949H3.28488H3.28026H3.27563H3.27099H3.26634H3.26168H3.257H3.25232H3.24763H3.24293H3.23822H3.23349H3.22876H3.22402H3.21926H3.2145H3.20973H3.20495H3.20015H3.19535H3.19054H3.18572H3.18089H3.17605H3.1712H3.16634H3.16147H3.15659H3.1517H3.14681H3.1419H3.13698H3.13206H3.12713H3.12218H3.11723H3.11227H3.1073H3.10232H3.09733H3.09234H3.08733H3.08232H3.0773H3.07227H3.06723H3.06218H3.05712H3.05206H3.04698H3.0419H3.03681H3.03171H3.0266H3.02149H3.01637H3.01124H3.0061H3.00095H2.99579H2.99063H2.98546H2.98028H2.97509H2.9699H2.9647H2.95949H2.95427H2.94905H2.94381H2.93858H2.93333H2.92807H2.92281H2.91754H2.91227H2.90698H2.90169H2.89639H2.89109H2.88578H2.88046H2.87513H2.8698H2.86446H2.85911H2.85376H2.8484H2.84303H2.83766H2.83228H2.8269H2.8215H2.8161H2.8107H2.80529H2.79987H2.79444H2.78901H2.78358H2.77813H2.77268H2.76723H2.76177H2.7563H2.75083H2.74535H2.73987H2.73438H2.72888H2.72338H2.71787H2.71236H2.70684H2.70131H2.69579H2.69025H2.68471H2.67916H2.67361H2.66806H2.6625H2.65693H2.65136H2.64578H2.6402H2.63461H2.62902H2.62343H2.61783H2.61222H2.60661H2.60099H2.59537H2.58975H2.58412H2.57849H2.57285H2.56721H2.56156H2.55591H2.55025H2.54459H2.53893H2.53326H2.52759H2.52191H2.51623H2.51055H2.50486H2.49917H2.49347H2.48777H2.48207H2.47636H2.47065H2.46494H2.45922H2.4535H2.44777H2.44204H2.43631H2.43057H2.42484H2.41909H2.41335H2.4076H2.40185H2.39609H2.39034H2.38458H2.37881H2.37305H2.36728H2.36151H2.35573H2.34995H2.34417H2.33839H2.3326H2.32682H2.32103H2.31523H2.30944H2.30364H2.29784H2.29204H2.28623H2.28043H2.27462H2.26881H2.26299H2.25718H2.25136H2.24554H2.23972H2.2339H2.22807H2.22225H2.21642H2.21059H2.20476H2.19893H2.19309H2.18726H2.18142H2.17558H2.16974H2.1639H2.15806H2.15221H2.14637H2.14052H2.13468H2.12883H2.12298H2.11713H2.11128H2.10543H2.09957H2.09372H2.08787H2.08201H2.07616H2.0703H2.06444H2.05859H2.05273H2.04687H2.04101H2.03515H2.0293H2.02344H2.01758H2.01172H2.00586H2C1.67498 11 1.4977 10.9216 1.39845 10.8554C1.29294 10.7851 1.21011 10.6842 1.14443 10.5528C1.1196 10.5031 1.09866 10.4519 1.08109 10.4008L12 1.30171L22.9189 10.4008C22.9013 10.4519 22.8804 10.5031 22.8556 10.5528C22.7899 10.6842 22.7071 10.7851 22.6015 10.8554C22.5023 10.9216 22.325 11 22 11H21.9941H21.9883H21.9824H21.9766H21.9707H21.9648H21.959H21.9531H21.9473H21.9414H21.9356H21.9297H21.9238H21.918H21.9121H21.9063H21.9004H21.8946H21.8887H21.8829H21.877H21.8712H21.8653H21.8595H21.8536H21.8478H21.8419H21.8361H21.8303H21.8244H21.8186H21.8127H21.8069H21.8011H21.7952H21.7894H21.7836H21.7778H21.7719H21.7661H21.7603H21.7545H21.7486H21.7428H21.737H21.7312H21.7254H21.7196H21.7138H21.708H21.7022H21.6964H21.6906H21.6848H21.679H21.6732H21.6674H21.6616H21.6558H21.65H21.6443H21.6385H21.6327H21.627H21.6212H21.6154H21.6097H21.6039H21.5982H21.5924H21.5867H21.5809H21.5752H21.5694H21.5637H21.558H21.5522H21.5465H21.5408H21.5351H21.5294H21.5236H21.5179H21.5122H21.5065H21.5008H21.4951H21.4895H21.4838H21.4781H21.4724H21.4667H21.4611H21.4554H21.4497H21.4441H21.4384H21.4328H21.4272H21.4215H21.4159H21.4102H21.4046H21.399H21.3934H21.3878H21.3822H21.3766H21.371H21.3654H21.3598H21.3542H21.3486H21.3431H21.3375H21.3319H21.3264H21.3208H21.3153H21.3097H21.3042H21.2987H21.2932H21.2876H21.2821H21.2766H21.2711H21.2656H21.2601H21.2547H21.2492H21.2437H21.2382H21.2328H21.2273H21.2219H21.2164H21.211H21.2056H21.2001H21.1947H21.1893H21.1839H21.1785H21.1731H21.1677H21.1623H21.157H21.1516H21.1462H21.1409H21.1355H21.1302H21.1249H21.1195H21.1142H21.1089H21.1036H21.0983H21.093H21.0877H21.0825H21.0772H21.0719H21.0667H21.0614H21.0562H21.051H21.0457H21.0405H21.0353H21.0301H21.0249H21.0197H21.0145H21.0094H21.0042H20.9991H20.9939H20.9888H20.9836H20.9785H20.9734H20.9683H20.9632H20.9581H20.953H20.9479H20.9429H20.9378H20.9328H20.9277H20.9227H20.9177H20.9127H20.9077H20.9027H20.8977H20.8927H20.8877H20.8828H20.8778H20.8729H20.8679H20.863H20.8581H20.8532H20.8483H20.8434H20.8385H20.8337H20.8288H20.824H20.8191H20.8143H20.8095H20.8046H20.7998H20.7951H20.7903H20.7855H20.7807H20.776H20.7712H20.7665H20.7618H20.7571H20.7524H20.7477H20.743H20.7383H20.7337H20.729H20.7244H20.7197H20.7151H20.7105H20.7059H20.7013H20.6967H20.6922H20.6876H20.6831H20.6785H20.674H20.6695H20.665H20.6605H20.656H20.6516H20.6471H20.6427H20.6382H20.6338H20.6294H20.625H20.6206H20.6162H20.6119H20.6075H20.6032H20.5988H20.5945H20.5902H20.5859H20.5816H20.5774H20.5731H20.5689H20.5646H20.5604H20.5562H20.552H20.5478H20.5436H20.5395H20.5353H20.5312H20.527H20.5229H20.5188H20.5147H20.5107H20.5066H20.5026H20.4985H20.4945H20.4905H20.4865H20.4825H20.4785H20.4746H20.4706H20.4667H20.4628H20.4589H20.455H20.4511H20.4472H20.4434H20.4395H20.4357H20.4319H20.4281H20.4243H20.4205H20.4167H20.413H20.4093H20.4056H20.4018H20.3982H20.3945H20.3908H20.3872H20.3835H20.3799H20.3763H20.3727H20.3691H20.3656H20.362H20.3585H20.355H20.3515H20.348H20.3445H20.341H20.3376H20.3342H20.3307H20.3273H20.3239H20.3206H20.3172H20.3139H20.3105H20.3072H20.3039H20.3006H20.2974H20.2941H20.2909H20.2877H20.2845H20.2813H20.2781H20.2749H20.2718H20.2687H20.2655H20.2625H20.2594H20.2563H20.2533H20.2502H20.2472H20.2442H20.2412H20.2382H20.2353H20.2323H20.2294H20.2265H20.2236H20.2208H20.2179H20.2151H20.2122H20.2094H20.2066H20.2039H20.2011H20.1984H20.1956H20.1929H20.1902H20.1876H20.1849H20.1823H20.1796H20.177H20.1744H20.1719H20.1693H20.1668H20.1643H20.1618H20.1593H20.1568H20.1544H20.1519H20.1495H20.1471H20.1447H20.1424H20.14H20.1377H20.1354H20.1331H20.1308H20.1286H20.1263H20.1241H20.1219H20.1197H20.1175H20.1154H20.1133H20.1112H20.1091H20.107H20.1049H20.1029H20.1009H20.0989H20.0969H20.0949H20.093H20.0911H20.0892H20.0873H20.0854H20.0835H20.0817H20.0799H20.0781H20.0763H20.0746H20.0728H20.0711H20.0694H20.0677H20.0661H20.0645H20.0628H20.0612H20.0596H20.0581H20.0565H20.055H20.0535H20.052H20.0506H20.0491H20.0477H20.0463H20.0449H20.0436H20.0422H20.0409H20.0396H20.0383H20.037H20.0358H20.0346H20.0334H20.0322H20.031H20.0299H20.0288H20.0277H20.0266H20.0255H20.0245H20.0235H20.0225H20.0215H20.0206H20.0196H20.0187H20.0178H20.017H20.0161H20.0153H20.0145H20.0137H20.0129H20.0122H20.0115H20.0108H20.0101H20.0094H20.0088H20.0082H20.0076H20.007H20.0065H20.006H20.0055H20.005H20.0045H20.0041H20.0037H20.0033H20.0029H20.0026H20.0022H20.0019H20.0016H20.0014H20.0011H20.0009H20.0007H20.0006H20.0004H20.0003H20.0002H20.0001H20H20H19V12V19C19 19.5523 18.5523 20 18 20H15H14.5858L14.2929 20.2929L12 22.5858L9.70711 20.2929L9.41421 20H9H6C5.44771 20 5 19.5523 5 19V12Z",stroke:"black","stroke-width":"2"}}),e._v(" "),t("path",{attrs:{d:"M9 10L12 13L18 7",stroke:"black","stroke-width":"2","stroke-linecap":"round"}})])]),e._v(" "),t("div",{staticClass:"indent"},[t("b",[e._v(e._s(e.ti("Заказ проверки инспектором RIA","Замовлення перевірки інспектором RIA")))]),e._v(" "),t("br",{staticClass:"mhide"}),e._v("\n                        "+e._s(e.ti("Проверенные объявления привлекают","Перевірені оголошення залучають"))+"\n                        "),t("b",[e._v(e._s(e.ti("в 9 раз больше покупателей","у 9 разів більше покупців"))+"!")]),e._v(" "),t("a",{staticClass:"i-flex f-center size16",attrs:{href:e.$root.langUrl+"/inspected-promo/",target:"_blank"},on:{click:function(t){return e.$emit("clickOnMore")}}},[e._v(" "+e._s(e.ti("Подробнее","Детальніше"))+" ➡️ ")])])]),e._v(" "),t("div",{staticClass:"mb-10"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"boxed",class:e.err.name?"showError":"",attrs:{name:"name",type:"text",placeholder:e.$t("Укажите Ваше имя")},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),t("div",{stal",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"boxed",class:e.err.phone?"showError":"",attrs:{name:"phone",type:"text",placeholder:e.$t("Телефон (только цифры)")},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"mb-10"},[t("label",[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"boxed",attrs:{rows:"3",name:"description",type:"text",placeholder:e.ti("Ваш комментарий","Ваш коментар")},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})])]),e._v(" "),e.showInfoOnWeekend?t("div",{staticClass:"mb-10"},[t("b",[e._v("\n                        "+e._s(e.ti("Обратите внимание!","Зверніть увагу!"))+"\n                    ")]),e._v("\n                    "+e._s(e.ti("Мы дали себе время побыть с близкими, поэтому ответим на вашу заявку ","Ми дали собі час побути з близькими, тому відповімо на вашу заявку "))+"\n                    "),e.betweenOnDate("2022-12-31 06:00:00","2023-01-01 12:00:00")?[t("b",[e._v("\n                            31.12 до 16:00\n                        ")]),e._v("\n                        "+e._s(e.ti("или","або"))+"\n                        "),t("b",[e._v("\n                            "+e._s(e.ti("01.01 с 12:00","01.01 з 12:00"))+"\n                        ")])]:e._e(),e._v(" "),e.betweenOnDate("2023-01-06 00:00:00","2023-0           "+e._s(e.ti("6.01 с 08:00 до 18:00","6.01 з 08:00 до 18:00"))+"\n                        ")]),e._v("\n                                              "),t("b",[e._v("\n                            "+e._s(e.ti("7.01 с 09:00","01.01 з 09:00"))+"\n                        ")])]:e._e()],2):e._e(),e._v(" "),t("div",{staticClass:"mt-15"},[e.inspPrice?t("div",{staticClass:"mb-10"},[e._v("\n                        "+e._s(e.ti("Стоимость проверки","Вартість перевірки"))+"\n                        "),t("b",{staticClass:"price_level"},[e._v(e._s(e.inspPrice))]),e._v(" грн\n                    ")]):e._e(),e._v(" "),t("div",{staticClass:"mb-10"},[t("button",{staticClass:"flex-cell i-flex f-center f-text-c button-search bold-500 size16 boxed",attrs:{type:"submit"},on:{click:function(t){return e.$emit("userWidgetActions")}}},[e._v("\n                            "+e._s(e.ti("Отправить заявку","Відправити заявку"))+"\n                        ")])])])])],2)])},[],!1,function(t){n(1832),n(1834),n(1836)},"data-v-6f62c3f2",null),H=n(1838);H&&H.__esModule&&(H=H.default),"function"==typeof H&&H(o),e.default=o.exports},1832:function(t,e,n){var H=n(1833),t=(H.__esModule&&(H=H.default),"string"==typeof H&&(H=[[t.i,H,""]]),H.locals&&(t.exports=H.locals),n(11).default);t("1d01293b",H,!0,{})},1833:function(t,e,n){e=t.exports=n(10)(!1),e.push([t.i,"\n.isSuccessMessage .svgSuccess{min-width:60px;height:60px;margin-right:10px;background:#79be00\n}\n.isSuccessMessage .svgSuccess svg{outline:2px solid #fff\n}\n.i-flex{display:inline-flex\n}\n.ndV2 a{text-decoration:none;color:#000\n}",""])},1834:function(t,e,n){var H=n(1835),t=(H.__esModule&&(H=H.default),"string"60px\n}\n}",""])},1836:function(t,e,n){var H=n(1837),t=(H.__esModule&&(H=H.default),"string"==typeof H&&(H=[[t.i,H,""]]),H.locals&&(t.exports=H.locals),n(11).default);t("5a7598bd",H,!0,{})},1837:function(t,e,n){e=t.exports=,"\n.checkRequestModal.modal-mask.v2 .modal-body{padding:20px\n}\n.checkRequestModal.modal-mask.v2 .modal-body .bgColor.circle{widthckground-color:#d2e9fb\n} .modal-body .button-search{min-height:40px;width:100%;font-size:16px\n}",""])},1838:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ru":{"Укажите Ваше имя":"Укажите Ваше имя","Телефон (только цифры)":"Телефон (только цифры)"},"uk":{"Спасибо! Ваша заявка принята.":"Дякуємо! Ваша заявка прийнята.","Укажите Ваше имя":"Вкажіть Ваше ім\'я","Телефон (только цифры)":"Телефон (тільки цифри)"}}'),delete t.options._Ctor}},634:function(t,i,s){"use strict";!function(t){var e=s(9),n=s.n(e),e=s(7),H=s.n(e);i.a={props:{isPopupActive:{default:!1},fullWidth:{type:Boolean,default:!1},modalPortal:{type:Boolean,default:!1},styles:{type:Object,default:function(){return{}}},separateUrlOnDesktop:{default:!1},mergeUrlParams:{default:!1},separateUrlParams:{default:!1},value:{type:Boolean,default:!1}},data:function(){return{isPopupVisible:!1}},methods:{emitMobileClose:function(){this.$emit("outside")}},watch:{isPopupActive:{immediate:!0,handler:function(t){var e;(this.$root.isMobile||this.separateUrlOnDesktop)&&(t?(e={popup:this.$options.name},this.separateUrlParams&&H()(this.separateUrlParams).length&&n()(e,this.separateUrlParams),this.$router.push({query:e})):this.isPopupVisible&&this.$router.go(-1),this.isPopupVisible=!!t)}},$route:function(t){(this.$root.isMobile||this.separateUrlOnDesktop)&&this.isPopupVisible&&t.query.popup!==this.$options.name&&(this.isPopupVisible=!1,this.$emit("close"),this.$emit("input",!1))},onKeyUp:function(t){"Escape"===t.code&&(this.$emit("input",!1),this.$emit("close"))}},mounted:function(){t.browser&&(window.addEventListener("keyup",this.onKeyUp),this.modalPortal)&&this.$el.classList.value.includes("modal-mask v2")&&(docud(this.$el),this.$el.getAttribute("style")&&this.$el.getAttribute("style").match("none;")||document.documentElement.classList.add("modal-open"))},beforeDestroy:function(){this.modalPortal&&this.$el.classLise{display:none\n}\n.modal-mask.v2 .flex{display:flex\n}\n.modal-dia .modal-container{max-width:620px\n}\n.modal-dia .modal-container .w300{max-width:300px\n}\n.modal-dia .modal-header .ps-head{width:100%-mask.v2 .modal-body{padding:20px\n}\n@media (min-width:769px){\n.modal-container .modal-buttons-grid .flex-cell{width:calc(50% - 10px)\n}\n.ps-head{border-radius:20px 20px 0 0\n}\n.modal-mask.v2 .modal-container{border-radius:20px\n}\n}\n@media (max-width:768px){\n.modal-container .modal-buttons-grid{flex-direction:column\n}\n.modal-mask,.modal-mask .modal-wrapper{display:block\n}\n.modal-mask .modal-wrapper{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;-webkit-transform:translateZ(0);z-index:7\n}\n.modal-mask .modal-container{height:100%;border-radius:0\n}\n.calls-modal .modal-container{max-width:100%\n}\n.ps-head{padding:15px\n}\n.ps-body{padding:0;overflow-y:auto;position:absolute;top:70px;bottom:0;left:0;right:0\n}\n.ps-body.padding{pt,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"f",function(){return s}),n.d(e,"e",function(){return a}),n.d(e,"d",function(){return o}),n.d(e,"b",functe){return H.a.get("/v1/api/inspections/isInspectionReserved",{params:{userId:t,realtyId:e}}).catch(function(t){console.log("isRealtyInspectionReserved error ---\x3e",tusesAggr error ---\x3e",t)})},o=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return H.a.get("/v1/api/inspections/getUserActiveRealtiesWithoutVideoInspection",{params:t}).catch(function(t){console.log("realtiesWithoutVideoInspection error ---\x3e",t)})},r=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return H.a.get("/v1/api/inspections/isRealtyHasInspectionBalance",{params:t}).catch(function(t){return console.log("isRealtyHasInspectionBalance error ---\x3e",t)})},l=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return H.a.get("/v1/api/inspections/getCountActiveInspectedRealties/",{params:t})}},685:function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},707:function(t,e,n){function f(t,e){t.constructor==String?t=(e&&"binary"===e.encoding?b:v).stringToBytes(t):_(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var n=g.bytesToWords(t),e=8*t.length,H=1732584193,i=-271733879,s=-1732584194,a=271733878,o=0;o<n.length;o++)n[o]=16711935&(n[o]<<8|n[o]>>>24)|4278255360&(n[o]<<24|n[o]>>>8);n[e>>>5]|=128<<e%32,n[14+(64+e>>>9<<4)]=e;for(var r=f._ff,l=f._gg,d=f._hh,c=f._ii,o=0;o<n.length;o+=16){var u=H,p=i,h=s,m=a,H=r(H,i,s,a,n[o+0],7,-680876936),a=r(a,H,i,s,n[o+1],12,-389564586),s=r(s,a,H,i,n[o+2],17,606105819),i=r(i,s,a,H,n[o+3],22,-1044525330);H=r(H,i,s,a,n[o+4],7,-176418897),a=r(a,H,i,s,n[o+5],12,1200080426),s=r(s,a,H,i,n[o+6],17,-1473231341),i=r(i,s,a,H,n[o+7],22,-45705983),H=r(H,i,s,a,n[o+8],7,1770035416),a=r(a,H,i,s,n[o+9],12,-1958414417),s=r(s,a,H,i,n[o+10],17,-42063),i=r(i,s,a,H,n[o+11],22,-1990404162),H=r(H,i,s,a,n[o+12],7,1804603682),a=r(a,H,i,s,n[o+13],12,-40341101),s=r(s,a,H,i,n[o+14],17,-1502002290),i=r(i,s,a,H,n[o+15],22,1236535329),H=l(H,i,s,a,n[o+1],5,-165796510),a=l(a,H,i,s,n[o+6],9,-1069501632),s=l(s,a,H,i,n[o+11],14,643717713),i=l(i,s,a,H,n[o+0],20,-373897302),H=l(H,i,s,a,n[o+5],5,-701558691),a=l(a,H,i,s,n[o+10],9,38016083),s=l(s,a,H,i,n[o+15],14,-660478335),i=l(i,s,a,H,n[o+4],20,-405537848),H=l(H,i,s,a,n[o+9],5,568446438),a=l(a,H,i,s,n[o+14],9,-1019803690),s=l(s,a,H,i,n[o+3],14,-187363961),i=l(i,s,a,H,n[o+8],20,1163531501),H=l(H,i,s,a,n[o+13],5,-1444681467),a=l(a,H,i,s,n[o+2],9,-51403784),s=l(s,a,H,i,n[o+7],14,1735328473),i=l(i,s,a,H,n[o+12],20,-1926607734),H=d(H,i,s,a,n[o+5],4,-378558),a=d(a,H,i,s,n[o+8],11,-2022574463),s=d(s,a,H,i,n[o+11],16,1830),a=d,H,n[o],11,-9),H=d(H,i,s,a,n[o+9],4,-640364487),a=d(a,H),s=c(s,a,H,i,n[o+14],15,-1416354905),i=c(i,s,a,H,n[o+5],21,-57434055),H=c(H,i,s,a,n[o+12],6,170048506),si,s,a,H21,130915164,i,n[o+2],15,turn g.endian){t=t+(e&n|=function(t{t=t+(n^(e|~H)&&e.asBytes?t:nction(t,e){return t<<32-e|t>>>e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];0<t;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,H=0;n<t.length;n++,H+=8)e[H>>>5]|=t[n]<<24-H%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var e=[],n=0;n<t.length;n+=3)for(var H=t[n]<<16|t[n+1]<<8|t[n+2],i=0;i<4;i++)8*n+6*i<=8*t.length?e.push(s.charAt(H>>>6*(3-i)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],n=0,H=0;n<t.length;H=++n%4)0!=H&&e.push((s.indexOf(t.charAt(n-1))&Math.pow(2,-2*H+8)-1)<<2*H|s.indexOf(t.charAt(n))>>>6-2*H);return e}};t.exports=n},725:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(n(t)||(e=t,"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0)))||!!t._isBuffer);var e}},742:function(t,e,n){"use strict";n=n(1);e.a=new n.a},933:function(t,e,n){"use strict";var H=n(14),o=n.n(H),r=n(3);e.a={methods:{gtmConvertionCountEvent:function(t,e){var n=window,n=n.dataLayer;n?"value_level"===t&&n.push({value_level:e||0}):console.error("no dataLayer")},gtmInspectionEvent:function(){var t=window,t=t.dataLayer;t?t.push({event:"inspected-commercial",value_inspection:121}):console.error("no dataLayer")},gtmTrack:function(t){var e,n,H,i,s,a=window&&window.dataLayer;a?(e={},o()(e,r.ADVERT_TYPE_SALE,"prodazha"),o()(e,r.ADVERT_TYPE_MONTHLY_RENT,"arenda"),o()(e,r.ADVERT_TYPE_DAILY_RENT,"posutochnaia"),e=e,n={},o()(n,r.CATEGORY_FLATS,"kvartir"),o()(n,r.CATEGORY_HOUSES,"domov"),o()(n,r.CATEGORY_PLOTS,"uchastkov"),o()(n,r.CATEGORY_GARAGES,"garazhei"),o()(n,r.CATEGORY_COMMERCIAL,"kom-nedvizhimosti"),n=n,H={},o()(H,r.REALTY_TYPE_HOUSE,"chastniy-dom"),o()(H,r.REALTY_TYPE_TOWNHOUSE,"townhouse"),o()(H,r.REALTY_TYPE_HOUSE_PART,"chast-doma"),H=H,i={1655:"duplex",1656:"townhouse",1654:"kottedzhi"},s={listing_pagetype:"offerdetail",listing_id:t.realtyId,listing_totalvalue:t.price,listing_city:t.city,listing_region:t.state,building_district:t.district,building_realtor_id:t.user_id,building_seller_type:t.is_commercial?"commercial":"noncommercial"},t.numBeds&&(s.building_number_beds=t.numBeds),t.agency_id&&(s.building_real_estate_id=t.agency_id),t.advert_type_id&&e[t.advert_type_id]&&(s.building_offer_type=e[t.advert_type_id]),t.realty_type_parent_id&&n[t.realty_type_parent_id]&&(s.building_class_type=n[t.realty_type_parent_id]),+t.realty_type_id===r.REALTY_TYPE_ROOMS&&(s.building_class_type="komnat"),t.realty_type_id&&H[t.realty_type_id]&&(s.building_house_type=H[t.realty_type_id]),t.characteristics&&t.characteristics[1657]&&i[t.characteristics[1657]]&&(s.building_house_characteristic=i[t.characteristics[1657]]),a.push({event:"dynamicRemarketingRealty",google_tag_params:s})):console.error("no dataLayer")}}}}}]);