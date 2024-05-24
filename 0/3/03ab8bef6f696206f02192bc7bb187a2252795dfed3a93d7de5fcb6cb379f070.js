"use strict";this.default_BloggerCommentUi=this.default_BloggerCommentUi||{};(function(_){var window=this;
try{
_.ZH=
_.MI=_.ZH("A4UTCb");
_.QM=_.RM=_.SM=function(){};
_.SM.prototype.toString=function(){};_.TM={oz:"button",pz:"checkbox",COLOR:"color",YN:"date",ZN:"datetime",aO:"datetime-local",hO:"email",qO:"file",yO:"hidden",zO:"image",jD:"menu",UO:"month",bP:"number",eP:"password",vD:"radio",kP:"range",mP:"reset",xD:"search",wP:"select-multiple",xP:"select-one",LP:"submit",TP:"tel",UP:"text",VP:"textarea",YP:"time",URL:"url",pQ:"week"};
_.UM={BN:"alert",CN:"alertdialog",EN:"application",FN:"article",GN:"banner",oz:"button",PN:"cell",pz:"checkbox",TN:"columnheader",UN:"combobox",VN:"complementary",WN:"contentinfo",bO:"definition",eO:"dialog",fO:"directory",gO:"document",pO:"feed",rO:"form",tO:"grid",uO:"gridcell",vO:"group",xO:"heading",AO:"img",DO:"link",EO:"list",FO:"listbox",GO:"listitem",JO:"log",KO:"main",LO:"marquee",NO:"math",jD:"menu",OO:"menubar",PO:"menuitem",QO:"menuitemcheckbox",RO:"menuitemradio",YO:"navigation",NONE:"none",
aP:"note",cP:"option",hP:"presentation",iP:"progressbar",vD:"radio",jP:"radiogroup",lP:"region",oP:"row",pP:"rowgroup",qP:"rowheader",tP:"scrollbar",xD:"search",vP:"searchbox",yP:"separator",DP:"slider",HP:"spinbutton",JP:"status",NP:"switch",PP:"tab",QP:"table",RP:"tablist",SP:"tabpanel",WP:"textbox",XP:"textinfo",ZP:"timer",aQ:"toolbar",bQ:"tooltip",hQ:"tree",iQ:"treegrid",jQ:"treeitem"};_.dka=new Set(["accesskey","hidden","id","tabindex"]);_.VM=_.RM(_.QM(_.UM,_.TM),_.qb(_.SM));_.WM=new Set("article banner complementary contentinfo document form group main navigation note region search textinfo tabpanel".split(" "));_.XM=new Set(["alertdialog","application","dialog"]);_.YM=new Set(["alert","log","marquee","status"]);_.eka=_.RM(_.WM,[_.XM,_.YM]);_.ZM=new Set("alert definition directory list listitem log marquee menubar none note presentation progressbar scrollbar separator status textinfo timer toolbar tooltip".split(" "));_.$M=new Set("button checkbox columnheader gridcell link menuitem menuitemcheckbox menuitemradio option radio rowheader searchbox slider spinbutton switch tab textbox treeitem".split(" "));
_.aN=new Set("button checkbox link scrollbar searchbox slider spinbutton switch textbox".split(" "));_.bN=new Set(["searchbox","spinbutton","textbox"]);_.fka=new Set(["checkbox","switch","img","slider"]);
_.cN=new Map([["checkbox",{Eg:null,ag:{kd:null,ff:!1,Se:!1,Fd:"aria-checked",Re:!1,Fe:!0}}],["gridcell",{Eg:{kd:"aria-selected",ff:!1,Se:!1,Fd:null,Re:!1,Fe:!1},ag:{kd:"aria-selected",ff:!1,Se:!1,Fd:null,Re:!1,Fe:!1}}],["menuitemcheckbox",{Eg:{kd:null,ff:!1,Se:!1,Fd:"aria-checked",Re:!1,Fe:!0},ag:null}],["menuitemradio",{Eg:null,ag:{kd:null,ff:!1,Se:!1,Fd:"aria-checked",Re:!0,Fe:!1}}],["option",{Eg:{kd:null,ff:!1,Se:!1,Fd:"aria-selected",Re:!1,Fe:!0},ag:{kd:"aria-selected",ff:!0,Se:!0,Fd:"aria-selected",
Re:!0,Fe:!1}}],["radio",{Eg:null,ag:{kd:"aria-checked",ff:!0,Se:!0,Fd:"aria-checked",Re:!0,Fe:!1}}],["switch",{Eg:null,ag:{kd:null,ff:!1,Se:!1,Fd:"checked",Re:!1,Fe:!0}}],["tab",{Eg:{kd:"aria-selected",ff:!1,Se:!1,Fd:"aria-expanded",Re:!0,Fe:!0},ag:{kd:"aria-selected",ff:!0,Se:!0,Fd:"aria-selected",Re:!0,Fe:!1}}],["treeitem",{Eg:{kd:"aria-selected",ff:!1,Se:!1,Fd:"aria-checked",Re:!0,Fe:!0},ag:{kd:"aria-selected",ff:!0,Se:!0,Fd:"aria-selected",Re:!0,Fe:!1}}]]);
_.dN=new Map([["listbox",{Si:!0,Ti:!1,Lk:!0,xj:!1}],["menu",{Si:!1,Ti:!1,Lk:!0,xj:!0}],["menubar",{Si:!1,Ti:!1,Lk:!0,xj:!0}],["radiogroup",{Si:!1,Ti:!0,Lk:!1,xj:!0}],["tablist",{Si:!1,Ti:!0,Lk:!0,xj:!0}],["tree",{Si:!0,Ti:!1,Lk:!0,xj:!1}]]);_.gka=new Set(["combobox","grid","treegrid"]);_.eN=new Set("menuitem menuitemcheckbox menuitemradio option radio tab treeitem".split(" "));_.fN=new Set(["cell","columnheader","gridcell","rowheader"]);_.gN=new Set(["progressbar","scrollbar","slider","spinbutton"]);
_.hN=new Set("definition directory heading img list listitem none presentation progressbar scrollbar separator timer".split(" "));_.iN=
var DN,FN,ska,GN,HN;DN=_.EN=FN=Math;ska=FN.pow;HN=_.Wi();GN=void 0!==HN.devicePixelRatio?HN.devicePixelRatio:HN.matchMedia?DN(3)||DN(2)||DN(1.5)||DN(1)||.75:1;_.IN=ska.call(FN,20/GN,2);
_.WN=_.G("qUuEUd");_.XN=_.G("j9grLe");_.YN=_.G("HUObcd");
_.n("A4UTCb");
var $N,aO,bO;_.ZN=$N=aO=
bO=_.cO=_.h=_.cO.prototype;
_.h.start=_.h.lF=
_.h.sN=_.h.kF=_.h.ML=_.h.Tt=_.dO=_.eO=
_.fO=_.F(_.fO,_.P);_.fO.O=_.P.O;_.h=_.fO.prototype;_.h.Sz=function(){return this.Ma};_.h.kc=_.h.ac=
_.h.ub=_.h.wc=_.h.ad=_.gO=_.fO.prototype.PD=function(){return this.i};
_.hO=_.h=_.fO.prototype;_.h.Mf=function(){return this.Gg};_.h.Jk=_.h.yb=_.h.Tz=function(){return this.Rb};_.h.Uz=function(){return this.Ga};_.h.os=_.h.nu=_.h.jn=function(){return!1};
_.h.ze=
_.h.wf=_.h.ii=_.h.Vz=
_.h.xc=
_.h.mn=_.h.Jd=_.h.Wz=function(){this.Ga=!1;this.Hg()};_.h.click=_.h.rq=
_.h.focus=_.h.blur=_.h.hi=_.h.ou=
_.h.Pz=_.h.Vq=
var kO=mO=jO=lO=
_.fO.prototype.Hg=_.fO.prototype.H=var iO=
_.h=_.fO.prototype;_.h.Rz=function(){return this.ha};_.h.ln=_.h.Qz=_.h.Lc=function(){_.hO(this,!0)};_.h.Ee=function(){_.hO(this,!1)};_.h.lh=function(){_.hO(this,!0)};_.h.kh=_.h.Xc=
_.h.zd=_.h.SF=_.h.Zk=var nO=
_.fO.prototype.jl=_.Q(_.fO.prototype,"Hp74Ud",function(){return this.Zk});_.Q(_.fO.prototype,"TWkaKc",function(){return this.zd});_.Q(_.fO.prototype,"Mlp4Hf",function(){return this.Xc});_.Q(_.fO.prototype,"mQiROb",function(){return this.kh});_.Q(_.fO.prototype,"BIGU4d",function(){return this.lh});
_.Q(_.fO.prototype,"jz8gV",function(){return this.Lc});_.Q(_.fO.prototype,"uhhy1",function(){return this.Qz});_.Q(_.fO.prototype,"t9Gapd",function(){return this.ln});_.Q(_.fO.prototype,"N1hOyf",function(){return this.Rz});_.Q(_.fO.prototype,"kgcjFf",function(){return this.H});_.Q(_.fO.prototype,"mg9Pef",function(){return this.hi});_.Q(_.fO.prototype,"O22p3e",function(){return this.blur});_.Q(_.fO.prototype,"AHmuwe",function(){return this.focus});_.Q(_.fO.prototype,"CUGPDc",function(){return this.rq});
_.Q(_.fO.prototype,"cOuCgd",function(){return this.click});_.Q(_.fO.prototype,"JMtRjd",function(){return this.Wz});_.Q(_.fO.prototype,"yfqBxc",function(){return this.Jd});_.Q(_.fO.prototype,"FwuNnf",function(){return this.mn});_.Q(_.fO.prototype,"p6p2H",function(){return this.xc});_.Q(_.fO.prototype,"JywGue",function(){return this.Vz});_.Q(_.fO.prototype,"tfO1Yc",function(){return this.ii});_.Q(_.fO.prototype,"lbsD7e",function(){return this.wf});_.Q(_.fO.prototype,"UX7yZ",function(){return this.ze});
_.Q(_.fO.prototype,"QU9ABe",function(){return this.jn});_.Q(_.fO.prototype,"dReUsb",function(){return this.nu});_.Q(_.fO.prototype,"ln1WGe",function(){return this.os});_.Q(_.fO.prototype,"TbSmRe",function(){return this.Uz});_.Q(_.fO.prototype,"CVWi4d",function(){return this.Tz});_.Q(_.fO.prototype,"u3bW4e",function(){return this.yb});_.Q(_.fO.prototype,"If42bb",function(){return this.Mf});_.Q(_.fO.prototype,"y7OZL",function(){return this.PD});_.Q(_.fO.prototype,"SQpL2c",function(){return this.ad});
_.Q(_.fO.prototype,"RDPZE",function(){return this.ac});_.Q(_.fO.prototype,"yXgmRe",function(){return this.kc});_.Q(_.fO.prototype,"JsZxYc",function(){return this.Sz});_.tB(_.fO);
_.t();
_.rI=_.y("yDXup",[_.ko]);
_.sI=_.y("pA3VNb",[_.rI]);
_.NI=_.y("VXdfxd",[_.MI]);
_.IO=function(a,b){a.__soy_skip_handler=b};_.JO=function(a,b){a.__soy_patch_handler=b};_.KO=
_.n("VXdfxd");
_.LO=_.F(_.LO,_.fO);_.LO.O=_.fO.O;_.LO.prototype.Ka=
_.LO.prototype.Xc=var MO=_.h=_.LO.prototype;_.h.Lc=_.h.lh=
_.h.Ee=_.h.kh=_.h.focus=_.h.ii=_.h.xc=
_.h.hi=_.h.Gt=_.h.click=var OO=_.LO.prototype.jn=
var NO=_.h=_.LO.prototype;_.h.Yz=
_.h.Bg=_.h.hc=_.h.zw=_.h.wG=_.h.Xz=_.h.bE=_.Q(_.LO.prototype,"EAYb4",function(){return this.zw});_.Q(_.LO.prototype,"QU9ABe",function(){return this.jn});
_.Q(_.LO.prototype,"cOuCgd",function(){return this.click});_.Q(_.LO.prototype,"mg9Pef",function(){return this.hi});_.Q(_.LO.prototype,"p6p2H",function(){return this.xc});_.Q(_.LO.prototype,"tfO1Yc",function(){return this.ii});_.Q(_.LO.prototype,"AHmuwe",function(){return this.focus});_.Q(_.LO.prototype,"mQiROb",function(){return this.kh});_.Q(_.LO.prototype,"BIGU4d",function(){return this.lh});_.Q(_.LO.prototype,"jz8gV",function(){return this.Lc});_.Q(_.LO.prototype,"Mlp4Hf",function(){return this.Xc});
_.R(_.NI,_.LO);
_.t();
_.dI=_.y("i6Ko2d",[_.ko]);
var nM,aka;nM=/['()]/g;aka=_.oM=_.lM("a",0,;
_.lM("b",0,function(a,b){a=a.Yc;var c=(new Map).set("useLegacyBlogger","true");b=_.pM(b)+"/"+_.OH("blogger.g");var d="";switch(_.ya("settings")?"settings".toString():"settings"){case "comments":d+="comments";break;case "earnings":d+="earnings";break;case "layout":d+="pageelements";break;case "editor":d+="editor";break;case "info":d+="info";break;case "newBlog":d+="create";break;case "pages":d+="pages";break;case "pageedit":d+="editor";break;case "posts":d+="posts";break;case "postedit":d+="editor";
break;case "reading":d+="reading";break;case "settings":d+="settings";break;case "stats":d+="stats";break;case "templates":d+="template";break;case "classictemplate":d+="classictemplate";break;case "templatehtml":d+="templatehtml"}if(a||c)if(b+="?"+(a?"blogID="+_.oM(a):""),c&&(!d||"editor"!==d))for(var e=Array.from(c.keys()),f=e.length,g=0;g<f;g++){var k=e[g];b+=(a||0!==g?"&":"")+_.oM(k)+"="+_.oM(c.get(k))}b+=d?"#"+_.OH(d):"";a=(0,_.zH)(b);a=(0,_.zH)(a);return(0,_.zH)(a)});
_.pM=function(a){var b=a.qw;return(0,_.zH)((0,_.zH)(_.RH(a.ar))+(b&&"0"!==b?"/u/"+_.OH(b):""))};
_.n("i6Ko2d");
var bka=function(a,b){return(0,_.zH)(_.RH(b.rv))},cka=function(a,b){return(0,_.zH)(_.RH(b.Lr))};_.qM=_.F(_.qM,_.N);_.qM.na=_.N.na;_.qM.O=function(){return{Ea:{Za:_.Jy}}};_.qM.prototype.rv=function(){return _.Ey(this.g,bka,{}).zc()};_.qM.prototype.Lr=function(){return _.Ey(this.g,cka,{}).zc()};_.O(_.dI,_.qM);
_.t();
_.VH=function(){return null};_.og(_.jt);
_.eI=_.y("fgj8Rb",[_.jo,_.ko,_.So]);
var bP;
bP={bu:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},qz:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},1E14:{other:"000 trillion"}}};
_.cP=bP;_.cP=bP;var dP={AED:[2,"dh","\u062f.\u0625."],ALL:[0,"Lek","Lek"],AUD:[2,"$","AU$"],BDT:[2,"\u09f3","Tk"],BGN:[2,"lev","lev"],BRL:[2,"R$","R$"],CAD:[2,"$","C$"],CDF:[2,"FrCD","CDF"],CHF:[2,"CHF","CHF"],CLP:[0,"$","CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[32,"$","COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[50,"K\u010d","K\u010d"],DKK:[50,"kr.","kr."],DOP:[2,"RD$","RD$"],EGP:[2,"\u00a3","LE"],ETB:[2,"Birr","Birr"],EUR:[2,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,"$","HK$"],HRK:[2,"kn","kn"],HUF:[34,
"Ft","Ft"],IDR:[0,"Rp","Rp"],ILS:[34,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],IRR:[0,"Rial","IRR"],ISK:[0,"kr","kr"],JMD:[2,"$","JA$"],JPY:[0,"\u00a5","JP\u00a5"],KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],LTL:[2,"Lt","Lt"],MNT:[0,"\u20ae","MN\u20ae"],MVR:[2,"Rf","MVR"],MXN:[2,"$","Mex$"],MYR:[2,"RM","RM"],NOK:[50,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,"S/.","S/."],PHP:[2,"\u20b1","PHP"],PKR:[0,"Rs","PKRs."],PLN:[50,"z\u0142","z\u0142"],RON:[2,"RON","RON"],RSD:[0,"din","RSD"],RUB:[50,"\u20bd",
"RUB"],SAR:[2,"SAR","SAR"],SEK:[50,"kr","kr"],SGD:[2,"$","S$"],THB:[2,"\u0e3f","THB"],TRY:[2,"\u20ba","TRY"],TWD:[2,"$","NT$"],TZS:[0,"TSh","TSh"],UAH:[2,"\u0433\u0440\u043d.","UAH"],USD:[2,"$","US$"],UYU:[2,"$","$U"],VND:[48,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};var eP;eP={fu:".",fq:",",Pu:"%",Iq:"0",tD:"+",Nu:"-",gu:"E",Qu:"\u2030",gq:"\u221e",oD:"NaN",eu:"#,##0.###",wD:"#E0",sD:"#,##0%",rz:"\u00a4#,##0.00",Zp:"USD"};_.fP=eP;_.fP=eP;var gP,hP;
_.iP=_.jP=
gP=hP=
_.iP.prototype.parse=
_.iP.prototype.format=
var pP=rP=sP=lP=kP=mP={wr:0,Fs:"",Gs:"",prefix:"",lf:""},nP=oP=qP=uP=tP=
_.vP=
_.wP=_.xP=_.yP=function(a,b){var c="";if(b)c+='dir="'+_.Y(b)+'"';else if(_.X(a)){b=_.vH(a);if(null!=b)a=b;else{var d=d||null!=a&&a.Ub===_.uy;d=_.sy(a+"",d);null!=a&&void 0!==a.Bi&&(a.Bi=d);a=d}switch(a){case 1:c+='dir="ltr"';break;case -1:c+='dir="rtl"'}}return(0,_.AH)(c)};
_.Qka=_.y("rODCz");
_.RP=function(a){this.g=a};_.RP.prototype.toString=function(){return this.g.toString()};_.SP=function(a){return a instanceof _.RP&&a.constructor===_.RP?a.g:"type_error:SafeStyle"};
_.TP=
var WP,Ska;_.UP=_.UP.prototype.toString=_.VP=WP=Ska=/^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i;
_.XP=function(a){_.uH(a,_.pH)?a=WP(a.zc()):null==a?a="":a instanceof _.RP?a=WP(_.SP(a)):a instanceof _.UP?a=WP(_.VP(a)):(a=String(a),a=Ska.test(a)?a:"zSoyz");return a};_.ZP=
_.YP=
_.$P=_.aQ=function(a){var b=a.Aa,c=_.U;a=_.DH({Aa:"C0oVfc"+(b?" "+b:"")},a);b=a.Aa;a=(0,_.U)(_.$P(_.DH({Aa:"O0WRkf oG5Srb HQ8yf"+(b?" "+b:"")},a)));return c(a)};_.bQ=function(a){var b=a.Aa,c=_.U;a=_.DH({Aa:"C0oVfc"+(b?" "+b:"")},a);b=a.Aa;a=(0,_.U)(_.$P(_.DH({Aa:"O0WRkf zZhnYe"+(b?" "+b:"")},a)));return c(a)};_.cQ=
_.dQ=_.eQ=
_.n("fgj8Rb");
var Tka,iQ,jQ,Vka,Wka,mQ,Xka;_.fQ=Tka=
_.gQ=
_.hQ=iQ=
jQ=
_.kQ=
Vka=Wka=
mQ=function(a,b){var c=this;this.v=new _.K(a);this.N=b;this.H=this.g=null;this.Pb=new _.bs([]);this.V=new _.bs([]);this.ua=this.v.getData("backToCancel").g(!0);this.bl=null;_.Wq(this.ma().u(),_.qL,this.oA,this);this.l=this.j=this.o=this.U=null;this.ka=!1;this.ha=null;this.ta=this.v.getData("backgroundClickCancel").g(!0);this.Fb=this.ma().getData("isAdaptive").g(!1);this.i="vcug3d"==this.ma().getData("position");_.lQ(this,this.i);this.va=_.Ej();_.Wq(this.ma().u(),_.vL,
this)};mQ.prototype.ma=function(){return this.v};mQ.prototype.zc=Xka=_.lQ=function(a,b){a.i=a.Fb?_.nQ(a.N):b;a.g&&(_.M(a.g.children().La(0),"vcug3d",a.i),_.I(a.g,"isFullscreen",a.i));b=_.kx(a.ma(),".R6Lfte");b.size()&&(_.M(b,"tOrNgd",!a.i),_.M(b,"qRUolc",!a.i),_.M(b,"TNczib",a.i),_.M(b,"X1clqd",a.i));return a};
mQ.prototype.show=function(a){this.g=Yka(this.N,this);_.lQ(this,this.i);this.H=a||_.CM(this.N.N);this.j=_.Ej();Zka(this.N,this);return this.j.promise};mQ.prototype.opened=mQ.prototype.after=
var oQ=_.h=mQ.prototype;_.h.pA=_.h.oA=_.h.cancel=_.h.yv=
_.h.resolve=_.h.uy=var ala=var qQ;qQ=
_.rQ=function(a){_.N.call(this,a.W);this.v=a.Ea.Za;this.i=a.Ea.Nd.g;var b=new _.K(this.i.g.body),c=this.i.ma("yDmH0d");this.j=c?new _.K(c):b;this.g=[];this.N=a.T.focus;this.o=null;this.ha=0;this.l=this.l.bind(this);this.H=this.ka=0;this.Ue(_.Vj(_.re(this,{T:{history:_.jt}}),_.VH,this))};_.F(_.rQ,_.N);_.rQ.na=_.N.na;_.rQ.O=
_.rQ.prototype.render=_.tQ=function(a,b,c,d,e,f){b=sQ(a,Wka,b,c,null,void 0,d,e,void 0,void 0,f);a=new mQ(b,a);qQ(a);return a};
_.rQ.prototype.prompt=
var sQ=function(a,b,c,d,e,f,g,k,m,p,q,r){var u=f?null:"gfjvOb"+a.ka++;return a.v.Qb(b,{title:c,content:d,value:e,GM:f,Zl:u,Mn:m,kI:p,attributes:q?q.Yn:void 0,ol:r,buttons:_.fQ(a.v,iQ,{IJ:g,TE:k,HJ:q?q.zk:void 0,wv:q?q.Oj:void 0})})},Yka=function(a,b){var c=b.g;c?_.Vz(c):(c=new _.K(a.i.i("DIV","llhEMd")),_.Wq(c.u(),_.Iq,function(){}),_.Wq(c.u(),"mousedown",a.U,a),_.Wq(c.u(),"touchstart",a.U,a));var d=c,e=new _.K(a.i.i("DIV","mjANdc"));e.Ca(b.ma().getData("position").Da());d.toggle(!1);_.TB(function(){_.fz(d,
e);_.fz(e,this.i.i("DIV","x3wWge"));_.fz(e,b.ma());_.fz(e,this.i.i("DIV","ONJhl"))},a);return d},Zka=function(a,b){a.g.push(b);_.S(_.T(a).wa(function(){var d=b.g;_.fz(this.j,d);_.ir(d.u());d.show();d.Ca("CAwICe");var e=b.ma();e.Ca("CAwICe");uQ(b);var f=b.ma().u();_.Qf(f,_.sL,{ks:!1});0<=d.Ra().offsetWidth&&(d.Ca("iWO5td").Ba("CAwICe"),e.Ca("iWO5td").Ba("CAwICe"),b.g.children().La(0).ya("transform",""),_.oO(this.N,e))}).window(_.Wi(_.Ni(b.ma().u()))||_.Wi(_.Ni(a.j.u()))))();Xka(b,bla(a,b));_.I(b.V,
"aria-hidden",!0);a.o&&!b.bl&&b.ua&&a.o.il(void 0,void 0,(0,_.C)(a,b)).then(;try{window.addEventListener("wheel",a.l,{capture:!0,passive:!1})}catch(d){window.addEventListener("wheel",a.l,!0)}var c=b.ma().u();_.Wq(c,"touchstart",a.ta,a);_.Wq(c,"touchmove",a.ua,a)};_.rQ.prototype.l=
var vQ=$ka=
_.rQ.prototype.V=function(a){_.S(_.T(this).wa(.window(_.Wi(_.Ni(a.ma().u()))||_.Wi(_.Ni(this.j.u()))))();_.sa(this.g,a);ala(a);0<this.g.length||window.removeEventListener("wheel",this.l,!0)};
var bla=uQ=_.rQ.prototype.ta=
_.rQ.prototype.ua=_.rQ.prototype.U=function(a){a.event.preventDefault();if(!(Date.now()<this.ha)&&0<this.g.length&&(a=this.g[this.g.length-1],a.ta)){a=_.Yz(a.v.u(),"bN97Pc").La(0);var b=a.children();a=(1==b.size()?b.La(0):a).u();_.Qf(a,_.tL,"IbE0S")}};_.nQ=function(a){var b=window;a=a.j.u();a.ownerDocument&&a.ownerDocument.defaultView&&(b=a.ownerDocument.defaultView);b=_.Ti(b);return 600>Math.min(b.width,b.height)};
_.O(_.eI,_.rQ);var pQ=0;
_.t();
_.fI=_.y("XvDhNc",[_.cI,_.ko,_.eI,_.dI]);
_.SR=
_.TR=
_.UR=function(a,b,c,d,e,f,g,k,m,p){var q=(0,_.AH)('aria-checked="'+(b?"true":"false")+'"'),r=(0,_.U)('<div class="'+_.Y("PkgjBf")+" "+_.Y("MbhUzd")+'"></div><div class="'+_.Y("uHMk6b")+" "+_.Y("fsHoPb")+'"></div><div class="'+_.Y("rq8Mwb")+'"><div class="'+_.Y("TCA6qd")+'"><div class="'+_.Y("MbUTNc")+" "+_.Y("oyD5Oc")+'"></div><div class="'+_.Y("Ii6cVc")+" "+_.Y("oyD5Oc")+'"></div></div></div>');d="uVccjd"+(d?" ZdhN5b":"")+(p?" "+p:"");m=m?"presentation":"checkbox";p=b?" "+_.Y("N2RpBe"):"";b=b&&f?
' jslog="'+_.Y(f)+"; track:"+_.Y("JIbuQc")+'"':!b&&e?' jslog="'+_.Y(e)+"; track:"+_.Y("JIbuQc")+'"':"";a=_.X(a)?' aria-label="'+_.Y(_.IH(a))+'"':"";c=(0,_.U)('<div class="'+_.Y(d)+p+(g?" "+_.Y("RDPZE"):"")+'" jscontroller="'+_.Y("EcW08c")+'" jsaction="keydown:'+_.Y("I481le")+";"+_.Y("dyRcpb")+":"+_.Y("dyRcpb")+";"+_.Y(_.TP(void 0,!0,!0,!0))+'"'+(f?' data-checked-veid="'+_.Y(f)+'"':"")+(e?' data-unchecked-veid="'+_.Y(e)+'"':"")+b+" jsshadow"+(c?' jsname="'+_.Y(c)+'"':"")+a+(g?' aria-disabled="true"':
' tabindex="'+(k?_.Y(k):"0")+'"')+(_.X()?' title="'+_.Y(_.IH())+'"':"")+(_.X()?_.NH(_.MH()):"")+' role="'+_.Y(m)+'"'+_.NH(_.MH(q))+">"+(_.X(r)?_.W(r):"")+"</div>");return(0,_.U)(""+c)};
_.VR=function(a){a='<div id="subscribeButtonHolder" jscontroller="'+_.Y("G0Zomd")+'" jsaction="'+_.Y("JIbuQc")+":"+_.Y("cVqcle")+"("+_.Y("We6uYb")+')">'+_.UR("Notify Me",a,"We6uYb")+'<label class="'+_.Y("S7uxcc")+'">';return(0,_.U)(a+"Notify Me</label></div>")};
_.n("XvDhNc");
var Ela,Fla,YR;_.WR=Ela=function(a){return(0,_.U)(_.TR({label:a.mE,value:a.nE,Aa:"vD8Nbe"}))};
Fla=function(a){a=a||{};var b=a.UK,c=a.VK,d='<div jscontroller="'+_.Y("GglmYd")+'" jsaction="'+_.Y("Vws5Ae")+":"+_.Y("JIbuQc")+';" class="'+_.Y("VHoHqb")+'">';d+=_.gQ(_.DH({label:"Name",value:b,autocomplete:"name",Na:"qU5wh",autofocus:!0},a));d+=_.gQ(_.DH({label:"URL",Na:"e27sfb",value:c,autocomplete:"url"},a))+"</div>";a=_.U;b=(0,_.U)("Edit Profile:");a=a(""+b);d=(0,_.U)(d);c=b=_.U;var e=(0,_.U)("Continue");d=""+_.kQ({title:a,Na:"pyUT5e",content:d,iF:!0,buttons:b(""+_.hQ({label:c(""+e),er:"sFeBqf"}))});
return(0,_.U)(d)};YR=new Map([["gaia_login",1],["gaia_no_profile",1],["gaia_no_login",1],["anonymous",2],["name_url",3]]);_.ZR=function(a){_.P.call(this,a.W);this.kf=a.Ea.Za;this.N=a.T.Di;this.ka=a.T.url;this.tf=a.controller.tf;this.fo=a.controller.fo;this.j=this.tf.Ia();this.H=a.model.mc;if(a=YR.get(this.j))this.H.Ef=a;this.g=new Map};_.F(_.ZR,_.P);_.ZR.O=function(){return{model:{mc:_.fM},Ea:{Za:_.Jy},T:{Di:_.rQ,url:_.qM},controller:{tf:"J3Vxgd",fo:"J8YHde"}}};
_.ZR.prototype.V=function(a){var b=this;if("gaia_no_login"===a.data)this.l();else if("gaia_no_profile"===a.data)this.o();else if(3===YR.get(a.data))$R(this,function(d){aS(b,3,d.name,d.url);var e=d.name;d=d.url;var f=e+" "+d+" name_url";if(!b.g.has(f)){var g=b.tf.Mi();b.g.set(f,{name:e,url:d,Ef:null});(g=g.u())&&g.appendChild(b.kf.ny(Ela,{mE:d?e+" ("+d+")":e,nE:f}))}b.tf.Hb(f);b.j=f;bS(b,!0)},;else if(YR.has(a.data))aS(this,YR.get(a.data)),this.j=a.data,bS(this,!1);else if(this.g.has(a.data)){var c=
this.g.get(a.data);aS(this,3,c.name,c.url);this.j=a.data;bS(this,!0)}};_.ZR.prototype.i=_.ZR.prototype.l=function(){var a=_.aM(this.ka.Lr(),{service:"blogger","continue":this.i()});_.pz(a,{target:"_top"})};_.ZR.prototype.o=function(){var a=_.aM("/onboarding",{continueUrl:this.i()});_.pz(a,{target:"_top"})};var $R=function(a,b,c,d,e){_.lQ(a.N.render(Fla,{UK:d,VK:e},a),!0).show().then(b,c)};
_.ZR.prototype.U=function(){var a=this,b=this.tf.Ia();(b=this.g.get(b))&&$R(this,function(c){var d=c.name;c=c.url;var e=d+" "+c+" name_url";aS(a,3,d,c);if(!a.g.has(e)){var f=a.tf.Ia();a.g.delete(f);f=a.tf.fg();a.g.set(e,{name:d,url:c,Ef:null});_.sM(f,"value",e);if(f=f.u())f.textContent=c?d+" ("+c+")":d}a.tf.Hb(e)},function(){},b.name,b.url)};var aS=bS=function(a,b){_.M(a.fo.s(),"hZA5zd",!b);a.fo.ub(b)};
_.ZR.prototype.ha=function(a){try{var b=this.tf.hH();this.tf.gs(b,a)}catch(c){}};_.Q(_.ZR.prototype,"uf29ze",function(){return this.U});_.Q(_.ZR.prototype,"HVcaQe",function(){return this.o});_.Q(_.ZR.prototype,"AkwW4d",function(){return this.l});_.Q(_.ZR.prototype,"VSPJC",function(){return this.i});_.Q(_.ZR.prototype,"yI4kgf",function(){return this.V});_.R(_.fI,_.ZR);
_.t();
_.Kha=_.y("fgib1c",[_.Ko,_.fI]);
_.n("fgib1c");
var DT=function(a){_.ZR.call(this,a.W);a=_.yA(a.model.component,_.rD);this.Yc=_.Mk(a,1);this.v=_.Mk(a,2);this.Pf=_.Mk(a,3)};_.F(DT,_.ZR);DT.O=DT.prototype.i=function(){var a={};a.blogId=this.Yc;this.v?a.po=this.v:this.Pf&&(a.pa=this.Pf);return _.aM(_.WR(this.getWindow().location.origin,"/comment/redirect"),a)};_.Q(DT.prototype,"VSPJC",function(){return this.i});_.R(_.Kha,DT);
_.t();
_.Tia=_.y("YwHGTd",[_.MI]);
var Rka;_.KP=Rka=0;
var MQ,kla,NQ,OQ;MQ=kla={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};NQ={IMG:" ",BR:"\n"};OQ=
_.PQ=_.QQ=_.RQ=_.SQ=_.TQ=
_.UQ=_.VQ=_.QQ.prototype.v=
_.n("YwHGTd");
var iR=jR=function(a,b){b=_.gs(b);return new _.bs(_.Rz(a.Ge,b,"ksKsZd"))},pla=kR=_.F(kR,_.fO);kR.O=_.fO.O;_.h=kR.prototype;_.h.Mi=function(){return this.ma("d9BH4c")};_.h.hH=_.h.Ia=_.h.fg=
_.h.Hb=function(a,b){var c=void 0===c?!0:c;a=lR(this,a);if(mR(a)||b){b=_.na(_.ez(this.o()),a.u());c=void 0===c?!0:c;if(0>b||b>=this.o().size())throw Error("Oc`"+b);_.I(this.fg(),"aria-selected","false");_.I(this.o().La(b),"aria-selected",!0);this.uc({index:b,focus:c&&!this.g&&nR(this)})}};_.h.su=_.h.open=
_.h.close=_.h.FA=function(){return this.g};_.h.ub=_.h.blur=_.h.RK=function(a){mR(a.targetElement)&&_.TQ(this.V,iR(a))};_.h.QK=function(a){mR(a.targetElement)&&_.UQ(this.V,iR(a))};_.h.PK=
_.h.nb=
_.h.GA=_.h.Lc=_.h.Ee=
_.h.kh=function(){_.hO(this,!1);this.j()};_.h.lh=_.h.ui=_.h.Uj=
_.h.sq=
_.h.AF=function(a){var b=this.Mi();b=new _.K(b.u().cloneNode(!0));_.es(b.find("[id]"),"id");b=b.children();_.fz(_.Vz(this.v()),b).show();_.I(this.Mi(),"aria-hidden",!0);_.es(this.o(),"role");_.I(this.ma("LgbsSe"),"aria-hidden",!0);_.I(this.s(),"aria-expanded",!0);_.es(this.v(),"aria-hidden");this.Pa=!1;_.S(_.T(this).measure(this.ME).wa(this.ts).window(this.getWindow()).Wa())(a)};
_.h.ME=var vR=uR=kR.prototype.ts=
var oR=
kR.prototype.ig=function(a){this.sq(a);var b=this.fg();_.I(b,"tabindex","0");a.focus&&b.focus();_.es(this.Mi(),"aria-hidden");_.I(this.o(),"role","option");_.es(this.ma("LgbsSe"),"aria-hidden");_.I(this.v(),"aria-hidden",!0);_.I(this.s(),"aria-expanded","false").Ba("iWO5td");a=b.getData("value").Da();0!=this.ta.size()&&a==this.ta.getData("value").Da()||this.qa(_.Iq,a);0<this.s().parent().size()&&this.qa(_.qJ);_.On(function(){this.ka=!1;this.g||(_.Vz(this.v().toggle(!1)),this.qa(_.nJ))},300,this)};
kR.prototype.Ig=kR.prototype.re=kR.prototype.Xc=
var mR=kR.prototype.gs=function(a,b){_.I(a,"aria-disabled",!b);_.S(_.T(this).wa(function(){var c=!mR(a);_.M(a,"RDPZE",c)}).window(this.getWindow()).Wa())()};kR.prototype.qe=var nR=pR=function(a,b){var c=a.o(),d=c.filter(".KKjvXb");b=_.na(_.ez(c),d.u())+b;0<=b&&b<c.size()&&a.uc({index:b,focus:!a.g&&nR(a)})};
kR.prototype.Oq=var qR=lR=function(a,b){a=a.o().filter(pla("value",b));if(0==a.size())throw Error("Pc`"+b);return a};
kR.prototype.o=kR.prototype.v=var tR=rR=function(a,b){b.Ca("KKjvXb");jR(a,_.gs(b)).Ca("ziS7vd");return b},sR=function(a,b){b.Bb(function(c){c=_.mz(c);c.Ba("KKjvXb");jR(a,c).Ba("ziS7vd")});return b},wR=_.Q(kR.prototype,"pcAkKe",function(){return this.v});
_.Q(kR.prototype,"LjU6Dd",function(){return this.o});_.Q(kR.prototype,"Mlp4Hf",function(){return this.Xc});_.Q(kR.prototype,"BIGU4d",function(){return this.lh});_.Q(kR.prototype,"mQiROb",function(){return this.kh});_.Q(kR.prototype,"jz8gV",function(){return this.Lc});_.Q(kR.prototype,"Kr2w4b",function(){return this.GA});_.Q(kR.prototype,"I481le",function(){return this.nb});_.Q(kR.prototype,"MkF9r",function(){return this.PK});_.Q(kR.prototype,"hvFWtf",function(){return this.QK});
_.Q(kR.prototype,"Rh2fre",function(){return this.RK});_.Q(kR.prototype,"O22p3e",function(){return this.blur});_.Q(kR.prototype,"iWO5td",function(){return this.FA});_.Q(kR.prototype,"TvD9Pc",function(){return this.close});_.Q(kR.prototype,"FNFY6c",function(){return this.open});_.Q(kR.prototype,"MVOW3d",function(){return this.su});_.Q(kR.prototype,"UO1Kae",function(){return this.fg});_.Q(kR.prototype,"HvnK2b",function(){return this.Ia});_.Q(kR.prototype,"AikjXd",;
_.R(_.Tia,kR);kR.prototype.ll=_.KP({wa:function(a){if(!this.Ka.isActive()&&(a=a.targetElement,_.gj(a.u().ownerDocument,a.u()))){if(!wR(a.u())&&(a=_.$w(a,wR),0==a.size()))return;mR(a)&&(sR(this,tR(this).filter(_.vM(a.u()))),rR(this,a))}},Tm:function(){return this.getWindow()}});_.Q(kR.prototype,"nfXz1e",function(){return this.ll});kR.prototype.oh=_.KP({measure:function(a){mR(a.targetElement)&&_.RQ(this.V,iR(a))},Tm:function(){return this.getWindow()}});_.Q(kR.prototype,"uYU8jb",function(){return this.oh});
kR.prototype.mi=_.KP({measure:function(a){mR(a.targetElement)&&_.SQ(this.V,iR(a))},Tm:function(){return this.getWindow()}});_.Q(kR.prototype,"LVEdXd",function(){return this.mi});kR.prototype.tb=_.KP({measure:Tm:);_.Q(kR.prototype,"dPTK6c",function(){return this.tb});
_.t();
_.LI=_.y("pxq3x",[_.ko]);
_.n("pxq3x");
var zP=function(){var a=_.Pa(),b="";if(_.mb())b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0";else if(_.kb())b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".");else if(_.lb())b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10";else if(_.Sa(_.Pa().toLowerCase(),"kaios"))b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1];else if(_.ib())b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1];else if(_.hb()?"Chrome OS"===_.Ra.platform:_.Ua("CrOS"))b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
b=(a=b.exec(a))&&a[1];return b||""},Kka=Lka=function(a){a=_.W(a.WE)+" characters remaining";return(0,_.U)(a)},Mka=Nka=Oka=_.G("YqO5N"),Pka=_.G("CUe1Cc");var DP=_.F(DP,_.P);DP.O=function(){return{Ea:{Za:_.Jy}}};
DP.prototype.Yg=function(a){var b=this.wb("LwH6nd");var c=this.wb("YRMmle");b=b.Ib()||c.Ib();a=a||"";c=this.ma("YPqjbf");"true"==_.H(b,"aria-hidden")?_.I(c,"aria-label",a):a==_.H(c,"aria-label")&&_.I(b,"aria-hidden","true");b.hc(a)};var EP=_.h=DP.prototype;_.h.Hb=function(a,b){b=void 0===b?!1:b;a=a||"";_.qB(this.ma("YPqjbf"),a);a!=EP(this)&&(this.notify(_.Dq),FP(this,a,b))};_.h.Ia=
_.h.qu=_.h.focus=_.h.blur=_.h.hf=function(a){try{var b=this.ma("B34EJ")}catch(c){return}_.M(this.s(),"k0tWj",!!a);_.M(this.s(),"IYewr",!!a);a?("string"===typeof a?b.hc(a):_.fz(_.Vz(b),a),this.qa(Pka)):_.Vz(b);this.Jk(!a)};_.h.getError=_.h.Jk=
_.h.nn=_.h.jA=_.h.ub=_.h.al=
_.h.iA=
_.h.hA=_.h.yb=function(){return this.g};_.h.Or=
_.h.kA=function(a){var b=this.ma("YPqjbf").u();_.YO(b)&&(b.selectionStart=a,b.selectionEnd=a)};_.h.mA=_.h.lA=_.h.gA=var GP=DP.prototype.v=
DP.prototype.H=
var AP=BP=IP=FP=function(a,b,c){c=void 0===c?!1:c;var d=a.ma("YPqjbf"),e=d.u();a.j=""!==b;_.M(a.s(),"CDELXb",a.j);e.setAttribute("badinput",!!e.validity.badInput);e=a.wb("CGfNbd");1>e.size()||!AP(a)||e.hc(_.Dy(a.i,Kka,{DF:HP(a,b),bJ:AP(a)}));_.sM(d,"initialValue",b);CP(a);
c||a.qa(_.Jq,b)},HP=CP=_.Q(DP.prototype,"KjsqPd",function(){return this.H});_.Q(DP.prototype,"fpfTEe",function(){return this.v});_.Q(DP.prototype,"WvE0j",function(){return this.gA});_.Q(DP.prototype,"yfHlzb",function(){return this.Or});_.Q(DP.prototype,"u3bW4e",function(){return this.yb});_.Q(DP.prototype,"Jt1EX",function(){return this.hA});
_.Q(DP.prototype,"Lg5SV",function(){return this.iA});_.Q(DP.prototype,"yXgmRe",function(){return this.al});_.Q(DP.prototype,"Ycd8ge",function(){return this.getError});_.Q(DP.prototype,"O22p3e",function(){return this.blur});_.Q(DP.prototype,"MJlnB",function(){return this.qu});_.Q(DP.prototype,"HvnK2b",function(){return this.Ia});_.R(_.LI,DP);
_.t();
}catch(e){_._DumpException(e)}
}).call(this,this.default_BloggerCommentUi);
// Google Inc.
