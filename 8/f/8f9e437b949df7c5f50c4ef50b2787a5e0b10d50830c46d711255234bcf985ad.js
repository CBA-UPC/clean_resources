(this,function(){var dF;
nction aj(af){return af instanceof Array||Object.prototype.toString.call(af)==="[object Array]"
}function hA(af){return af instanceof Date||Object.prototype.toString.call(af)==="[object Date]"
};
if(Array.prototype.some){fK=Array.prototype.some
}else{fK=}function a7(af){if(af._isValid==null){var ar=cb(af);
var az=fK.call(ar.parsedDateParts,;
af._isValid=!isNaN(af._d.getTime())&&ar.overflow<0&&!ar.empty&&!ar.invalidMonth&&!ar.invalidWeekday&&!ar.nullInput&&!ar.invalidFormat&&!ar.userInvalidated&&(!ar.meridiem||(ar.meridiem&&az));
if(af._strict){af._isValid=af._isValid&&ar.charsLeftOver===0&&ar.unusedTokens.length===0&&ar.bigHour===undefined
}}return af._isValid
}r eN=c7.momentProperties=[];
ar fw=false;
nction fB(af){if(af<0){return Math.ceil(af)
}else{return Math.floor(af)
}}ction gY(ar,af){var az=true;
return iw(function(){if(c7.deprecationHandler!=null){c7.deprecationHandler(null,ar)
}if(az){fm(ar+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error()).stack);
az=false
}return af.apply(this,arguments)
},af)
}var av={};
7.suppressDeprecationWarnings=false;
c7.deprecationHandler=null;
unction D(af){return Object.prototype.toString.call(af)==="[object Object]"
}unction gL(az,af){var ar=iw({},az),be;
for(be in af){if(fF(af,be)){if(D(az[be])&&D(af[be])){ar[be]={};
iw(ar[be],az[be]);
iw(ar[be],af[be])
}else{if(af[be]!=null){ar[be]=af[be]
}else{delete ar[be]
}}}}return ar
}ar dd;
if(Object.keys){dd=Object.keys
}else{dd=}var cJ={};
var eW;
tion eg(ar,af){if(af!==null){af.abbr=ar;
if(cJ[ar]!=null){ik("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale");
af=gL(cJ[ar]._config,af)
}else{if(af.parentLocale!=null){if(cJ[af.parentLocale]!=null){af=gL(cJ[af.parentLocale]._config,af)
}else{ik("parentLocaleUndefined","specified parentLocale is not defined yet")
}}}cJ[ar]=new eh(af);
ez(ar);
return cJ[ar]
}else{delete cJ[ar];
return null
}}function hf(az,ar){if(ar!=null){var af;
if(cJ[az]!=null){ar=gL(cJ[az]._config,ar)
}af=new eh(ar);
af.parentLocale=cJ[az];
cJ[az]=af;
ez(az)
}else{if(cJ[az]!=null){if(cJ[az].parentLocale!=null){cJ[az]=cJ[az].parentLocale
}else{if(cJ[az]!=null){delete cJ[az]
}}}}return cJ[az]
}r eF={};
(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
var c0=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
var cY={};
var b8={};
C=/\d/;
var bB=/\d\d/;
var bA=/\d{3}/;
var bz=/\d{4}/;
var bw=/[+-]?\d{6}/;
var a0=/\d\d?/;
var dT=/\d\d\d\d?/;
var gV=/\d\d\d\d\d\d?/;
var aZ=/\d{1,3}/;
var aY=/\d{1,4}/;
var aX=/[+-]?\d{1,6}/;
var x=/\d+/;
var K=/[+-]?\d+/;
var cP=/Z|[+-]\d\d:?\d\d/gi;
var em=/Z|[+-]\d\d(?::?\d\d)?/gi;
var il=/[+-]?\d+(\.\d{1,3})?/;
var b4=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
var bX={};
l={};
 io=0;
var n=1;
var hx=2;
var h0=3;
var f9=4;
var aN=5;
var cS=6;
var dO=7;
var m=8;
var eJ;
if(Array.prototype.indexOf){eJ=Array.prototype.indexOf
}else{eJ=}b("M",["MM",2],"Mo",;
eb("MMM",0,0,function(af){return this.localeData().monthsShort(this,af)
});
eb("MMMM",0,0,function(af){return this.localeData().months(this,af)
});
dM("month","M");
ce("M",a0);
ce("MM",a0,bB);
ce("MMM",function(ar,af){return af.monthsShortRegex(ar)
});
ce("MMMM",function(ar,af){return af.monthsRegex(ar)
});
c8(["M","MM"],;
c8(["MMM","MMMM"],function(af,bg,ar,az){var be=ar._locale.monthsParse(af,az,ar._strict);
if(be!=null){bg[n]=be
}else{cb(ar).invalidMonth=af
}});
var dt=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
var Y="January_February_March_April_May_June_July_August_September_October_November_December".split("_");
function bV(af,ar){return aj(this._months)?this._months[af.month()]:this._months[dt.test(ar)?"format":"standalone"][af.month()]
}var gB="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
nction fh(ar,bn,af){var az,bg,be;
if(this._monthsParseExact){return cd.call(this,ar,bn,af)
}if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[]
}for(az=0;
az<12;
az++){bg=g6([2000,az]);
if(af&&!this._longMonthsParse[az]){this._longMonthsParse[az]=new RegExp("^"+this.months(bg,"").replace(".","")+"$","i");
this._shortMonthsParse[az]=new RegExp("^"+this.monthsShort(bg,"").replace(".","")+"$","i")
}if(!af&&!this._monthsParse[az]){be="^"+this.months(bg,"")+"|^"+this.monthsShort(bg,"");
this._monthsParse[az]=new RegExp(be.replace(".",""),"i")
}if(af&&bn==="MMMM"&&this._longMonthsParse[az].test(ar)){return az
}else{if(af&&bn==="MMM"&&this._shortMonthsParse[az].test(ar)){return az
}else{if(!af&&this._monthsParse[az].test(ar)){return az
}}}}}function bN(af,ar){var az;
if(!af.isValid()){return af
}if(typeof ar==="string"){if(/^\d+$/.test(ar)){ar=eI(ar)
}else{ar=af.localeData().monthsParse(ar);
if(typeof ar!=="number"){return af
}}}az=Math.min(af.date(),cO(af.year(),ar));
af._d["set"+(af._isUTC?"UTC":"")+"Month"](ar,az);
return af
}r fz=b4;
function fE(af){if(this._monthsParseExact){if(!fF(this,"_monthsRegex")){fH.call(this)
}if(af){return this._monthsShortStrictRegex
}else{return this._monthsShortRegex
}}else{return this._monthsShortStrictRegex&&af?this._monthsShortStrictRegex:this._monthsShortRegex
}}var hG=b4;
function eY(af){if(this._monthsParseExact){if(!fF(this,"_monthsRegex")){fH.call(this)
}if(af){return this._monthsStrictRegex
}else{return this._monthsRegex
}}else{return this._monthsStrictRegex&&af?this._monthsStrictRegex:this._monthsRegex
}}r o=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
var bL=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
var en=/Z|[+-]\d\d(?::?\d\d)?/;
var eM=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/]];
var d2=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]];
var db=/^\/?Date\((\-?\d+)/i;
.createFromInputFallback=gY("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",;
("Y",0,0,;
eb(0,["YY",2],0,function(){return this.year()%100
});
eb(0,["YYYY",4],0,"year");
eb(0,["YYYYY",5],0,"year");
eb(0,["YYYYYY",6,true],0,"year");
dM("year","y");
ce("Y",K);
ce("YY",a0,bB);
ce("YYYY",aY,bz);
ce("YYYYY",aX,bw);
ce("YYYYYY",aX,bw);
c8(["YYYYY","YYYYYY"],io);
c8("YYYY",;
c8("YY",;
c8("Y",;
.parseTwoDigitYear=
var eq=gS("FullYear",true);
nction cL(be,ar,az,ca,br){var bs=(7+az-ca)%7,af=cm(be,ca,br),bn=1+7*(ar-1)+bs+af,bo,bg;
if(bn<=0){bo=be-1;
bg=f6(bo)+bn
}else{if(bn>f6(be)){bo=be+1;
bg=bn-f6(be)
}else{bo=be;
bg=bn
}}return{year:bo,dayOfYear:bg}
}function ht(bg,bo,bn){var az=cm(bg.year(),bo,bn),be=Math.floor((bg.dayOfYear()-az-1)/7)+1,af,ar;
if(be<1){ar=bg.year()-1;
af=be+O(ar,bo,bn)
}else{if(be>O(bg.year(),bo,bn)){af=be-O(bg.year(),bo,bn);
ar=bg.year()+1
}else{ar=bg.year();
af=be
}}return{week:af,year:ar}
}tion e4(az){var bn,af,ar,be,bs,bo,br,bg;
bn=az._w;
if(bn.GG!=null||bn.W!=null||bn.E!=null){bs=1;
bo=4;
af=gN(bn.GG,az._a[io],ht(gJ(),1,4).year);
ar=gN(bn.W,1);
be=gN(bn.E,1);
if(be<1||be>7){bg=true
}}else{bs=az._locale._week.dow;
bo=az._locale._week.doy;
af=gN(bn.gg,az._a[io],ht(gJ(),bs,bo).year);
ar=gN(bn.w,1);
if(bn.d!=null){be=bn.d;
if(be<0||be>6){bg=true
}}else{if(bn.e!=null){be=bn.e+bs;
if(bn.e<0||bn.e>6){bg=true
}}else{be=bs
}}}if(ar<1||ar>O(af,bs,bo)){cb(az)._overflowWeeks=true
}else{if(bg!=null){cb(az)._overflowWeekday=true
}else{br=cL(af,ar,be,bs,bo);
az._a[io]=br.year;
az._dayOfYear=br.dayOfYear
}}}c7.ISO_8601=function(){};
function df(az){if(az._f===c7.ISO_8601){L(az);
return
}az._a=[];
cb(az).empty=true;
var bn=""+az._i,bg,ar,bs,be,br,af=bn.length,bo=0;
bs=cN(az._f,az._locale).match(c1)||[];
for(bg=0;
bg<bs.length;
bg++){be=bs[bg];
ar=(bn.match(cM(be,az))||[])[0];
if(ar){br=bn.substr(0,bn.indexOf(ar));
if(br.length>0){cb(az).unusedInput.push(br)
}bn=bn.slice(bn.indexOf(ar)+ar.length);
bo+=ar.length
}if(b8[be]){if(ar){cb(az).empty=false
}else{cb(az).unusedTokens.push(be)
}C(be,ar,az)
}else{if(az._strict&&!ar){cb(az).unusedTokens.push(be)
}}}cb(az).charsLeftOver=af-bo;
if(bn.length>0){cb(az).unusedInput.push(bn)
}if(cb(az).bigHour===true&&az._a[h0]<=12&&az._a[h0]>0){cb(az).bigHour=undefined
}cb(az).parsedDateParts=az._a.slice(0);
cb(az).meridiem=az._meridiem;
az._a[h0]=g1(az._locale,az._a[h0],az._meridiem);
h(az);
eG(az)
}function g1(af,az,be){var ar;
if(be==null){return az
}if(af.meridiemHour!=null){return af.meridiemHour(az,be)
}else{if(af.isPM!=null){ar=af.isPM(be);
if(ar&&az<12){az+=12
}if(!ar&&az===12){az=0
}return az
}else{return az
}}}ction cC(ar){var af=ar._i,az=ar._f;
ar._locale=ar._locale||A(ar._l);
if(af===null||(az===undefined&&af==="")){return ev({nullInput:true})
}if(typeof af==="string"){ar._i=af=ar._locale.preparse(af)
}if(dG(af)){return new hs(eG(af))
}else{if(aj(az)){f2(ar)
}else{if(az){df(ar)
}else{if(hA(af)){ar._d=af
}else{d8(ar)
}}}}if(!a7(ar)){ar._d=null
}return ar
}function d8(ar){var af=ar._i;
if(af===undefined){ar._d=new Date(c7.now())
}else{if(hA(af)){ar._d=new Date(af.valueOf())
}else{if(typeof af==="string"){cc(ar)
}else{if(aj(af)){ar._a=cx(af.slice(0),;
h(ar)
}else{if(typeof(af)==="object"){bY(ar)
}else{if(typeof(af)==="number"){ar._d=new Date(af)
}else{c7.createFromInputFallback(ar)
}}}}}}}r eA=gY("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",;
var hm=gY("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",;
unction v(){var af=[].slice.call(arguments,0);
return ix("isBefore",af)
}ar ed=
"Z",":");
cG("ZZ","");
ce("Z",em);
ce("ZZ",em);
c8(["Z","ZZ"],;
var hT=/([\+\-]|\d\d)/gi;
updateOffset=function(){};
function fQ(af,be){var az=this._offset||0,ar;
if(!this.isValid()){return af!=null?this:NaN
}if(af!=null){if(typeof af==="string"){af=u(em,af)
}else{if(Math.abs(af)<16){af=af*60
}}if(!this._isUTC&&be){ar=bG(this)
}this._offset=af;
this._isUTC=true;
if(ar!=null){this.add(ar,"m")
}if(az!==af){if(!be||this._changeInProgress){b(this,gX(af-az,"m"),1,false)
}else{if(!this._changeInProgress){this._changeInProgress=true;
c7.updateOffset(this,true);
this._changeInProgress=null
}}}return this
}else{return this._isUTC?az:bG(this)
}}ction dC(){if(this._tzm){this.utcOffset(this._tzm)
}else{if(typeof this._i==="string"){this.utcOffset(u(cP,this._i))
}}return this
}=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
var ea=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
function gX(az,bn){var bo=az,bg=null,ar,be,af;
if(aD(az)){bo={ms:az._milliseconds,d:az._days,M:az._months}
}else{if(typeof az==="number"){bo={};
if(bn){bo[bn]=az
}else{bo.milliseconds=az
}}else{if(!!(bg=au.exec(az))){ar=(bg[1]==="-")?-1:1;
bo={y:0,d:eI(bg[hx])*ar,h:eI(bg[h0])*ar,m:eI(bg[f9])*ar,s:eI(bg[aN])*ar,ms:eI(bg[cS])*ar}
}else{if(!!(bg=ea.exec(az))){ar=(bg[1]==="-")?-1:1;
bo={y:iq(bg[2],ar),M:iq(bg[3],ar),w:iq(bg[4],ar),d:iq(bg[5],ar),h:iq(bg[6],ar),m:iq(bg[7],ar),s:iq(bg[8],ar)}
}else{if(bo==null){bo={}
}else{if(typeof bo==="object"&&("from" in bo||"to" in bo)){af=cX(gJ(bo.from),gJ(bo.to));
bo={};
bo.ms=af.milliseconds;
bo.M=af.months
}}}}}}be=new gj(bo);
if(aD(az)&&fF(az,"_locale")){be._locale=az._locale
}return be
}gX.fn=gj.prototype;
=bZ(1,"add");
var bQ=bZ(-1,"subtract");
on h3(ar,af){return this.isSame(ar,af)||this.isAfter(ar,af)
}unction S(be,az,af){var bn,bg,bo,ar;
if(!this.isValid()){return NaN
}bn=bm(be,this);
if(!bn.isValid()){return NaN
}bg=(bn.utcOffset()-this.utcOffset())*60000;
az=eH(az);
if(az==="year"||az==="month"||az==="quarter"){ar=hh(this,bn);
if(az==="quarter"){ar=ar/3
}else{if(az==="year"){ar=ar/12
}}}else{bo=this-bn;
ar=az==="second"?bo/1000:az==="minute"?bo/60000:az==="hour"?bo/3600000:az==="day"?(bo-bg)/86400000:az==="week"?(bo-bg)/604800000:bo
}return af?ar:fB(ar)
}7.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";
c7.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";
ction gm(ar,af){if(this.isValid()&&((dG(ar)&&ar.isValid())||gJ(ar).isValid())){return gX({to:this,from:ar}).locale(this.locale()).humanize(!af)
}else{return this.localeData().invalidDate()
}}function gg(af){return this.from(gJ(),af)
} H=gY("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",;
function gn(){return this._locale
}],0,function(){return this.weekYear()%100
});
eb(0,["GG",2],0,;
p("gggg","weekYear");
ap("ggggg","weekYear");
ap("GGGG","isoWeekYear");
ap("GGGGG","isoWeekYear");
dM("weekYear","gg");
dM("isoWeekYear","GG");
ce("G",K);
ce("g",K);
ce("GG",a0,bB);
ce("gg",a0,bB);
ce("GGGG",aY,bz);
ce("gggg",aY,bz);
ce("GGGGG",aX,bw);
ce("ggggg",aX,bw);
at(["gggg","ggggg","GGGG","GGGGG"],function(af,be,ar,az){be[az.substr(0,2)]=eI(af)
});
at(["gg","GG"],;
,0,"Qo","quarter");
dM("quarter","Q");
ce("Q",bC);
c8("Q",;
b("w",["ww",2],"wo","week");
eb("W",["WW",2],"Wo","isoWeek");
dM("week","w");
dM("isoWeek","W");
ce("w",a0);
ce("ww",a0,bB);
ce("W",a0);
ce("WW",a0,bB);
at(["w","ww","W","WW"],;
ar ds={dow:0,doy:6};
function aJ(){return this._week.dow
}"D",["DD",2],"Do","date");
dM("date","D");
ce("D",a0);
ce("DD",a0,bB);
ce("Do",;
c8(["D","DD"],hx);
c8("Do",;
var dW=gS("Date",true);
eb("d",0,"do","day");
eb("dd",0,0,function(af){return this.localeData().weekdaysMin(this,af)
});
eb("ddd",0,0,function(af){return this.localeData().weekdaysShort(this,af)
});
eb("dddd",0,0,;
eb("e",0,0,"weekday");
eb("E",0,0,"isoWeekday");
dM("day","d");
dM("weekday","e");
dM("isoWeekday","E");
ce("d",a0);
ce("e",a0);
ce("E",a0);
ce("dd",function(ar,af){return af.weekdaysMinRegex(ar)
});
ce("ddd",function(ar,af){return af.weekdaysShortRegex(ar)
});
ce("dddd",;
at(["dd","ddd","dddd"],;
at(["d","e","E"],;
ar ag="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
ar q="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
function W(af){return this._weekdaysShort[af.day()]
}var cE="Su_Mo_Tu_We_Th_Fr_Sa".split("_");
unction dl(bn,bo,af){var az,be,bg,ar=bn.toLocaleLowerCase();
if(!this._weekdaysParse){this._weekdaysParse=[];
this._shortWeekdaysParse=[];
this._minWeekdaysParse=[];
for(az=0;
az<7;
++az){bg=g6([2000,1]).day(az);
this._minWeekdaysParse[az]=this.weekdaysMin(bg,"").toLocaleLowerCase();
this._shortWeekdaysParse[az]=this.weekdaysShort(bg,"").toLocaleLowerCase();
this._weekdaysParse[az]=this.weekdays(bg,"").toLocaleLowerCase()
}}if(af){if(bo==="dddd"){be=eJ.call(this._weekdaysParse,ar);
return be!==-1?be:null
}else{if(bo==="ddd"){be=eJ.call(this._shortWeekdaysParse,ar);
return be!==-1?be:null
}else{be=eJ.call(this._minWeekdaysParse,ar);
return be!==-1?be:null
}}}else{if(bo==="dddd"){be=eJ.call(this._weekdaysParse,ar);
if(be!==-1){return be
}be=eJ.call(this._shortWeekdaysParse,ar);
if(be!==-1){return be
}be=eJ.call(this._minWeekdaysParse,ar);
return be!==-1?be:null
}else{if(bo==="ddd"){be=eJ.call(this._shortWeekdaysParse,ar);
if(be!==-1){return be
}be=eJ.call(this._weekdaysParse,ar);
if(be!==-1){return be
}be=eJ.call(this._minWeekdaysParse,ar);
return be!==-1?be:null
}else{be=eJ.call(this._minWeekdaysParse,ar);
if(be!==-1){return be
}be=eJ.call(this._weekdaysParse,ar);
if(be!==-1){return be
}be=eJ.call(this._shortWeekdaysParse,ar);
return be!==-1?be:null
}}}}function cU(bg,bn,af){var ar,be,az;
if(this._weekdaysParseExact){return dl.call(this,bg,bn,af)
}if(!this._weekdaysParse){this._weekdaysParse=[];
this._minWeekdaysParse=[];
this._shortWeekdaysParse=[];
this._fullWeekdaysParse=[]
}for(ar=0;
ar<7;
ar++){be=g6([2000,1]).day(ar);
if(af&&!this._fullWeekdaysParse[ar]){this._fullWeekdaysParse[ar]=new RegExp("^"+this.weekdays(be,"").replace(".",".?")+"$","i");
this._shortWeekdaysParse[ar]=new RegExp("^"+this.weekdaysShort(be,"").replace(".",".?")+"$","i");
this._minWeekdaysParse[ar]=new RegExp("^"+this.weekdaysMin(be,"").replace(".",".?")+"$","i")
}if(!this._weekdaysParse[ar]){az="^"+this.weekdays(be,"")+"|^"+this.weekdaysShort(be,"")+"|^"+this.weekdaysMin(be,"");
this._weekdaysParse[ar]=new RegExp(az.replace(".",""),"i")
}if(af&&bn==="dddd"&&this._fullWeekdaysParse[ar].test(bg)){return ar
}else{if(af&&bn==="ddd"&&this._shortWeekdaysParse[ar].test(bg)){return ar
}else{if(af&&bn==="dd"&&this._minWeekdaysParse[ar].test(bg)){return ar
}else{if(!af&&this._weekdaysParse[ar].test(bg)){return ar
}}}}}} ax=b4;
function ir(af){if(this._weekdaysParseExact){if(!fF(this,"_weekdaysRegex")){I.call(this)
}if(af){return this._weekdaysStrictRegex
}else{return this._weekdaysRegex
}}else{return this._weekdaysStrictRegex&&af?this._weekdaysStrictRegex:this._weekdaysRegex
}}var E=b4;
function bv(af){if(this._weekdaysParseExact){if(!fF(this,"_weekdaysRegex")){I.call(this)
}if(af){return this._weekdaysShortStrictRegex
}else{return this._weekdaysShortRegex
}}else{return this._weekdaysShortStrictRegex&&af?this._weekdaysShortStrictRegex:this._weekdaysShortRegex
}}var gs=b4;
("DDD",["DDDD",3],"DDDo","dayOfYear");
dM("dayOfYear","DDD");
ce("DDD",aZ);
ce("DDDD",bA);
c8(["DDD","DDDD"],;
"H",["HH",2],0,"hour");
eb("h",["hh",2],0,fV);
eb("k",["kk",2],0,X);
eb("hmm",0,0,;
eb("hmmss",0,0,;
eb("Hmm",0,0,;
eb("Hmmss",0,0,;
l("a",true);
hl("A",false);
dM("hour","h");
e("a",ac);
ce("A",ac);
ce("H",a0);
ce("h",a0);
ce("HH",a0,bB);
ce("hh",a0,bB);
ce("hmm",dT);
ce("hmmss",gV);
ce("Hmm",dT);
ce("Hmmss",gV);
c8(["H","HH"],h0);
c8(["a","A"],;
c8(["h","hh"],;
c8("hmm",;
c8("hmmss",;
c8("Hmm",;
c8("Hmmss",;
ar dx=/[ap]\.?m?\.?/i;
ar d1=gS("Hours",true);
eb("m",["mm",2],0,"minute");
dM("minute","m");
ce("m",a0);
ce("mm",a0,bB);
c8(["m","mm"],f9);
var ig=gS("Minutes",false);
eb("s",["ss",2],0,"second");
dM("second","s");
ce("s",a0);
ce("ss",a0,bB);
c8(["s","ss"],aN);
var cH=gS("Seconds",false);
eb("S",0,0,function(){return ~~(this.millisecond()/100)
});
eb(0,["SS",2],0,;
eb(0,["SSS",3],0,"millisecond");
eb(0,["SSSS",4],0,function(){return this.millisecond()*10
});
eb(0,["SSSSS",5],0,function(){return this.millisecond()*100
});
eb(0,["SSSSSS",6],0,function(){return this.millisecond()*1000
});
eb(0,["SSSSSSS",7],0,function(){return this.millisecond()*10000
});
eb(0,["SSSSSSSS",8],0,function(){return this.millisecond()*100000
});
eb(0,["SSSSSSSSS",9],0,;
dM("millisecond","ms");
ce("S",aZ,bC);
ce("SS",aZ,bB);
ce("SSS",aZ,bA);
var cp;
for(cp="SSSS";
cp.length<=9;
cp+="S"){ce(cp,x)
}or(cp="S";
cp.length<=9;
cp+="S"){c8(cp,e9)
}var dj=gS("Milliseconds",false);
eb("z",0,0,"zoneAbbr");
eb("zz",0,0,"zoneName");
function h9(){return this._isUTC?"UTC":""
}ar fu=hs.prototype;
fu.add=dP;
fu.calendar=dK;
fu.clone=fM;
fu.diff=S;
fu.endOf=hE;
fu.format=hO;
fu.from=gm;
fu.fromNow=gg;
fu.to=aK;
fu.toNow=bI;
fu.get=hL;
fu.invalidAt=ef;
fu.isAfter=ek;
fu.isBefore=ih;
fu.isBetween=hp;
fu.isSame=ew;
fu.isSameOrAfter=h3;
fu.isSameOrBefore=ic;
fu.isValid=hH;
fu.lang=H;
fu.locale=iC;
fu.localeData=gn;
fu.max=hm;
fu.min=eA;
fu.parsingFlags=f3;
fu.set=hL;
fu.startOf=dB;
fu.subtract=bQ;
fu.toArray=gc;
fu.toObject=go;
fu.toDate=e3;
fu.toISOString=ee;
fu.toJSON=fe;
fu.toString=gC;
fu.unix=cK;
fu.valueOf=aO;
fu.creationData=ij;
fu.year=eq;
fu.isLeapYear=eS;
fu.weekYear=cB;
fu.isoWeekYear=gz;
fu.quarter=fu.quarters=dn;
fu.month=hY;
fu.daysInMonth=cV;
fu.week=fu.weeks=R;
fu.isoWeek=fu.isoWeeks=G;
fu.weeksInYear=Q;
fu.isoWeeksInYear=fg;
fu.date=dW;
fu.day=fu.days=hd;
fu.weekday=aB;
fu.isoWeekday=d7;
fu.dayOfYear=ci;
fu.hour=fu.hours=d1;
fu.minute=fu.minutes=ig;
fu.second=fu.seconds=cH;
fu.millisecond=fu.milliseconds=dj;
fu.utcOffset=fQ;
fu.utc=bS;
fu.local=fN;
fu.parseZone=dC;
fu.hasAlignedHourOffset=bk;
fu.isDST=bF;
fu.isDSTShifted=d;
fu.isLocal=fR;
fu.isUtcOffset=c4;
fu.isUtc=f0;
fu.isUTC=f0;
fu.zoneAbbr=h9;
fu.zoneName=g2;
fu.dates=gY("dates accessor is deprecated. Use date instead.",dW);
fu.months=gY("months accessor is deprecated. Use month instead",hY);
fu.years=gY("years accessor is deprecated. Use year instead",eq);
fu.zone=gY("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",fL);
var a=fu;
r dS={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};
ar gw={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};
ar aV="Invalid date";
ar dA="%d";
var cF=/\d{1,2}/;
r hP={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};
r fd=eh.prototype;
fd._calendar=dS;
fd.calendar=ak;
fd._longDateFormat=gw;
fd.longDateFormat=eC;
fd._invalidDate=aV;
fd.invalidDate=ho;
fd._ordinal=dA;
fd.ordinal=hQ;
fd._ordinalParse=cF;
fd.preparse=fU;
fd.postformat=fU;
fd._relativeTime=hP;
fd.relativeTime=dV;
fd.pastFuture=gy;
fd.set=gi;
fd.months=bV;
fd._months=Y;
fd.monthsShort=b9;
fd._monthsShort=gB;
fd.monthsParse=fh;
fd._monthsRegex=hG;
fd.monthsRegex=eY;
fd._monthsShortRegex=fz;
fd.monthsShortRegex=fE;
fd.week=cz;
fd._week=ds;
fd.firstDayOfYear=ff;
fd.firstDayOfWeek=aJ;
fd.weekdays=bb;
fd._weekdays=ag;
fd.weekdaysMin=hU;
fd._weekdaysMin=cE;
fd.weekdaysShort=W;
fd._weekdaysShort=q;
fd.weekdaysParse=cU;
fd._weekdaysRegex=ax;
fd.weekdaysRegex=ir;
fd._weekdaysShortRegex=E;
fd.weekdaysShortRegex=bv;
fd._weekdaysMinRegex=gs;
fd.weekdaysMinRegex=M;
fd.isPM=dJ;
fd._meridiemParse=dx;
fd.meridiem=bM;
unction bR(bg,ar,be){if(typeof bg==="number"){ar=bg;
bg=undefined
}bg=bg||"";
if(ar!=null){return b6(bg,ar,be,"month")
}var az;
var af=[];
for(az=0;
az<12;
az++){af[az]=b6(bg,az,be,"month")
}return af
}function iu(bn,br,be,bo){if(typeof bn==="boolean"){if(typeof br==="number"){be=br;
br=undefined
}br=br||""
}else{br=bn;
be=br;
bn=false;
if(typeof br==="number"){be=br;
br=undefined
}br=br||""
}var af=A(),ar=bn?af._week.dow:0;
if(be!=null){return b6(br,(be+ar)%7,bo,"day")
}var bg;
var az=[];
for(bg=0;
bg<7;
bg++){az[bg]=b6(br,(bg+ar)%7,bo,"day")
}return az
}function iD(ar,af){return bR(ar,af,"months")
}unction b1(ar,az,af){return iu(ar,az,af,"weekdays")
}function ip(ar,az,af){return iu(ar,az,af,"weekdaysShort")
}z("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:);
c7.lang=gY("moment.lang is deprecated. Use moment.locale instead.",ez);
c7.langData=gY("moment.langData is deprecated. Use moment.localeData instead.",A);
var hK=Math.abs;
on k(af){return af*4800/146097
}iz=gK("ms");
var U=gK("s");
var fO=gK("m");
var B=gK("h");
var gP=gK("d");
var gk=gK("w");
var gH=gK("M");
var co=gK("y");
r e=dE("milliseconds");
var ck=dE("seconds");
var bp=dE("minutes");
var ai=dE("hours");
var cf=dE("days");
var gR=dE("months");
var cT=dE("years");
ar e2=Math.round;
var f8={s:45,m:45,h:22,d:26,M:11};
bP=Math.abs;
ar gG=gj.prototype;
gG.abs=aR;
gG.add=cA;
gG.subtract=fX;
gG.as=h1;
gG.asMilliseconds=iz;
gG.asSeconds=U;
gG.asMinutes=fO;
gG.asHours=B;
gG.asDays=gP;
gG.asWeeks=gk;
gG.asMonths=gH;
gG.asYears=co;
gG.valueOf=eT;
gG._bubble=eR;
gG.get=cq;
gG.milliseconds=e;
gG.seconds=ck;
gG.minutes=bp;
gG.hours=ai;
gG.days=cf;
gG.weeks=gU;
gG.months=gR;
gG.years=cT;
gG.humanize=c;
gG.toISOString=ia;
gG.toString=ia;
gG.toJSON=ia;
gG.locale=iC;
gG.localeData=gn;
gG.toIsoString=gY("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ia);
gG.lang=H;
eb("X",0,0,"unix");
eb("x",0,0,"valueOf");
ce("x",K);
ce("X",il);
c8("X",;
c8("x",;
c7.version="2.13.0";
bK(gJ);
c7.fn=a;
c7.min=v;
c7.max=cr;
c7.now=ed;
c7.utc=g6;
c7.unix=fq;
c7.months=iD;
c7.isDate=hA;
c7.locale=ez;
c7.invalid=ev;
c7.duration=gX;
c7.isMoment=dG;
c7.weekdays=b1;
c7.parseZone=h5;
c7.localeData=A;
c7.isDuration=aD;
c7.monthsShort=dR;
c7.weekdaysMin=V;
c7.defineLocale=eg;
c7.updateLocale=hf;
c7.locales=an;
c7.weekdaysShort=ip;
c7.normalizeUnits=eH;
c7.relativeTimeThreshold=b5;
c7.prototype=a;
var N=c7;
var ib=N.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(af){return/^nm$/i.test(af)
},meridiem:longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal,week:{dow:1,doy:4}});
var hg=N.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}});
var ej={"1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦","7":"٧","8":"٨","9":"٩","0":"٠"},fk={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};
var fc=N.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(af){return"م"===af
},meridiem:function(af,az,ar){if(af<12){return"ص"
}else{return"م"
}},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(af){return af.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(ar){return fk[ar]
}).replace(/،/g,",")
},postformat:function(af){return af.replace(/\d/g,function(ar){return ej[ar]
}).replace(/,/g,"،")
},week:{dow:6,doy:12}});
var eB=N.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_س_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %�ر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}});
var z={"1":"١","2":"٢","3":"٣","4":"٤","5":"٥","6":"٦","7":"٧","8":"٨","9":"٩","0":"٠"},aw={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},bj=function(af){return af===0?0:af===1?1:af===2?2:af%100>=3&&af%100<=10?3:af%100>=11?4:5
},dq={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقةمن سا],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أع�g===2){bo=b�باط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"];
var h2=N.defineLocale("ar",{months:bE,monthsShort:bE,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200FM/\u200FYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(af){return"م"===af
},meridiem:function(af,az,ar){if(af<12){return"ص"
}else{return"م"
}},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:gb("s"),m:gb("m"),mm:gb("m"),h:gb("h"),hh:gb("h"),d:gb("d"),dd:gb("d"),M:gb("M"),MM:gb("M"),y:gb("y"),yy:gb("y")},preparse:function(af){return af.replace(/\u200f/g,"").replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(ar){return aw[ar]
}).re6,doy:12}});
var fD={19:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};
var hV=N.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(af){return/^(gündüz|axşam)$/.test(af)
},meridiem:function(af,az,ar){if(af<4){return"gecə"
}else{if(af<12){return"səhər"
}else{if(af<17){return"gündüz"se:/\d{1,az+(fD[ar]||fD[af]||fD[be])
},week:{dow:1,doy:7}});
function aq(az,ar){var af=az.split("_");
return ar%10===1&&ar%100!==11?af[0]:(ar%10>=2&&ar%10<=4&&(ar%100<10||ar%100>=20)?af[1]:af[2])
}functхвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:ar?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"�r?"гадзіна":"гадзіну"
}else{return az+" "+aq(be[af],+az)
}}}var hJ=N.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_с),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"
},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";
case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"
}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:fG,mm:fG,h:fG,hh:fG,d:"дзень",dd:fG,M:"месяц",MM:fG,y:"год",yy:fG},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(af){return/^(дня|вечара)$/.test(af)
},meridiem:function(af,az,ar){if(af<4){return"ночы"
}else{if(af<12){return"раніцы"
}else{if(af<17){return"дня"
}else{return"вечара"
}}}},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(af,ar){switch(ar){case"M":case"d":case"DDD":case"w":case"W":return(af%10===2||af%10===3)&&(af%100!==12&&af%100!==13)?af+"-і":af+"-ы";
case"D":return af+"-га";
default:return af
}},week:{dow:1,doy:7}});
var hF=N.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";
case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"
}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(az){var ar=az%10,af=az%100;
if(az===0){return az+"-ев"
}else{if(af===0){return az+"-ен"
}else{if(af>10&&af<20){return az+"-ти"
}else{if(ar===1){return az+"-ви"
}else{if(ar===2){return az+"-ри"
}else{if(ar===7||ar===8){return az+"-ми"
}else{return az+"-ти"
}}}}}}},week:{dow:1,doy:7}});
var cD={"1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","0":"০"},dz={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};
var hz=N.defineLocale("bn",{months:"জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অনভেম্বর_ডিসেম্বর".split("_"),monthsShসেম্".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবা"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(af){return af.replace(/[১২৩৪৫৬৭৮৯০]/g,function(ar){return dz[ar]
})
},postformat:function(af){return af.replace(/\d/g,function(ar){return cD[ar]
})
},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(af,ar){if(af===12){af=0
}if((ar==="রাত"&&af>=4)||(ar==="দুপুর"&&af<5)||ar==="বিকাল"){return af+12
}else{return af
}},meridiem:function(af,az,ar){if(af<4){returnf(af<17){return"দুপুর"
}else{if(af<20){return"বিকাল"
}else{return"রাত"
}}}}},week:{dow:0,doy:6}});
var gE={"1":"༡","2":"༢","3":"༣","4":"༤","5":"༥","6":"༦","7":"༧","8":"༨","9":"༩","0":"༠"},hk={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};
var hy=N.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(af){return af.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(ar){return hk[ar]
})
},postformat:function(af){return af.replace(/\d/g,function(ar){return gE[ar]
})
},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(af,ar){if(af===12){af=0
}if((ar==="མཚན་མོ"&&af>=4)||(ar==="ཉིན་གུང"&&af<5)||ar==="དགོང་དག"){return af+12
}else{return af
}},meridiem:function(af,az,ar){if(af<4){return"མཚན་མོ"
}else{if(af<10){return"ཞོགས��མོ"
}}}}},week:{dow:0,doy:6}});
function g(az,ar,af){var be={mm:"munutenn",MM:"miz",dd:"devezh"};
return az+" "+hN(be[af],az)
}function aM(af){switch(eE(af)){case 1:case 3:case 4:case }}function eE(af){if(af>9){return eE(af%10)
}return af
}function hN(ar,af){if(af===2){return hc(ar)
}return ar
}function hc(ar){var af={m:"v",b:"v",d:"z"};
if(af[ar.charAt(0)]===undefined){return ar
}return af[ar.charAt(0)]+ar.substring(1)
}var hw=N.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da]lse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:g,h:"un eur",hh:"%d eur",d:"un devezh",dd:g,M:"?"añ":"vet";
return ar+af
},week:{dow:1,doy:4}});
function dy(be,az,ar){var af=be+" ";
switch(ar){case"m":return az?"jedna minuta":"jedne minute";
case"mm":if(be===1){af+="minuta"
}else{if(be===2||be===3||be===4){af+="minute"
}else{af+="minuta"
}}return af;
case"h":return az?"jedan sat":"jednog sata";
case"hh":if(be===1){af+="sat"
}else{if(be===2||be===3||be===4){af+="sata"
}else{af+="sati"
}}return af;
case"dd":if(be===1){af+="dan"
}else{af+="dana"
}return af;
case"MM":if(be===1){af+="mjesec"
}else{if(be===2||be===3||be===4){af+="mjeseca"
}else{af+="mjeseci"
}}return af;
case"yy":if(be===1){af+="godina"
}else{if(be===2||be===3||be===4){af+="godine"
}else{af+="godina"
}}return af
}}var hv=N.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:true,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";
case 3:return"[u] [srijedu] [u] LT";
case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"
}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";
case 6:return"[prošle] [subote] [u] LT";
case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:\./,ordinal:"%d.",week:{dow:1,doy:7}});
var hj=N.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:true,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[avui a "+((this.hours()!==1)?"les":"la")+"] LT"
},nextDay:function(){return"[demà a "+((this.hours()!==1)?"les":"la")+"] LT"
},nextWeek:function(){return"dddd [a "+((this.hours()!==1)?"les":"la")+"] LT"
},lastDay:function(){return"[ahir a "+((this.hours()!==1)?"les":"la")+"] LT"
},lastWeek:function(){return"[el] dddd [passat a "+((this.hours()!==1)?"les":"la")+"] LT"
},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(ar,az){var af=(ar===1)?"r":(ar===2)?"n":(ar===3)?"r":(ar===4)?"t":"è";
if(az==="w"||az==="W"){af="a"
}return ar+af
},week:{dow:1,doy:4}});
var gO="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),ah="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
function dQ(af){return(af>1)&&(af<5)&&(~~(af/10)!==1)
}function fZ(be,az,ar,bg){var af=be+" ";
switch(ar){case"s":return(az||bg)?"pár sekund":"pár sekundami";
case"m":return az?"minuta":(bg?"minutu":"minutou");
case"mm":if(az||bg){return af+(dQ(be)?"minuty":"minut")
}else{return af+"minutami"
}break;
case"h":return az?"hodina":(bg?"hodinu":"hodinou");
case"hh":if(az||bg){return af+(dQ(be)?"hodiny":"hodin")
}else{return af+"hodinami"
}break;
case"d":return(az||bg)?"den":"dnem";
case"dd":if(az||bg){return af+(dQ(be)?"dny":"dní")
}else{return af+"dny"
}break;
case"M":return(az||bg)?"měsíc":"měsícem";
case"MM":if(az||bg){return af+(dQ(be)?"měsíce":"měsíců")
}else{return af+"měsíci"
}break;
case"y":return(az||bg)?"rok":"rokem";
case"yy":if(az||bg){return af+(dQ(be)?"roky":"let")
}else{return af+"lety"
}break
}}var g8=N.defineLocale("cs",{months:gO,monthsShort:ah,monthsParse:(function(af,az){var ar,be=[];
for(ar=0;
ar<12;
ar++){be[ar]=new RegExp("^"+af[ar]+"$|^"+az[ar]+"$","i")
}return be
}(gO,ah)),shortMonthsParse:(function(ar){var af,az=[];
for(af=0;
af<12;
af++){az[af]=new RegExp("^"+ar[af]+"$","i")
}return az
}(ah)),longMonthsParse:(function(af){var ar,az=[];
for(ar=0;
ar<12;
ar++){az[ar]=new RegExp("^"+af[ar]+"$","i")
}return az
}(gO)),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";
case 1:case 2:return"[v] dddd [v] LT";
case 3:return"[ve středu v] LT";
case 4:return"[ve čtvrtek v] LT";
case 5:return"[v pátek v] LT";
case 6:return"[v sobotu v] LT"
}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";
case 1:case 2:return"[minulé] dddd [v] LT";
case 3:return"[minulou středu v] LT";
case 4:case 5:return"[minulý] dddd �й_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(ar){var af=/сехет$/i.exec(ar)?"рен":/ҫул$/i.exec(ar)?"тан":"ран";
return ar+af
},past:"%s каялла",s:"пӗр-ик ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},ordinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}});
var g5=N.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:xtWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(az===50||af===60||af===80||af===100){ar="fed"
}else{ar="ain"
}}else{if(af>0){ar=be[af]
}}return az+ar
},week:{dow:1,doy:4}});
var g0=N.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"sønda"_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY HH:mm"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"åneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
function c9(az,ar,af,bg){var be={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[az+" Tage",az+" Tagen"],M:["ein Monat","einem Monat"],MM:[az+" Monate",az+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[az+" Jahre",az+" Jahren"]};
return ar?be[af][0]:be[af][1]
}var y=N.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:true,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:c9,mm:"%d Minuten",h:c9,hh:"%d Stunden",d:c9,dd:c9,M:c9,MM:c9,y:c9,yy:c9},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
function eL(az,ar,af,bg){var be={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[az+" Tage",az+" Tagen"],M:["ein Monat","einem Monat"],MM:[az+" Monate",az+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[az+" Jahre",az+" Jahren"]};
return ar?be[af][0]:be[af][1]
}var gW=N.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:true,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:eL,mm:"%d Minuten",h:eL,hh:"%d Stunden",d:eL,dd:eL,M:eL,MM:eL,y:eL,yy:eL},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var fl=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],f1=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"];
var gI=N.defineLocale("dv",{months:fl,monthsShort:fl,weekdays:f1,weekdaysShort:f1,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(af){return"މފ"===af
},meridiem:function(af,az,ar){if(af<12){return"މކ"
}else{return"މފ"
}},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(af){return af.replace(/،/g,",")
},postformat:function(af){return af.replace(/,/g,"،")
},week:{dow:7,doy:12}});
var gx=N.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(ar,af){if(/D/.test(af.substring(0,af.indexOf("MMMM")))){return this._monthsGenitiveEl[ar.month()]
}else{return this._monthsNominativeEl[ar.month()]
}},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(af,ar,az){if(af>11){return az?"μμ":"ΜΜ"
}else{return az?"πμ":"ΠΜ"
}},isPM:function(af){return((af+"").toLowerCase()[0]==="μ")
},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";
default:return"[την προηγούμενη] dddd [{}] LT"
}},sameElse:"L"},calendar:function(az,be){var ar=this._calendarEl[az],af=be&&be.hours();
if(b2(ar)){ar=ar.apply(be)
}return ar.replace("{}",(af%12===1?"στη":"στις"))
},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}});
var cZ=N.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(az){var af=az%10,ar=(~~(az%100/10)===1)?"th":(af===1)?"st":(af===2)?"nd":(af===3)?"rd":"th";
return az+ar
},week:{dow:1,doy:4}});
var ct=N.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(az){var af=az%10,ar=(~~(az%100/10)===1)?"th":(af===1)?"st":(af===2)?"nd":(af===3)?"rd":"th";
return az+ar
}});
var a3=N.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(az){var af=az%10,ar=(~~(az%100/10)===1)?"th":(af===1)?"st":(af===2)?"nd":(af===3)?"rd":"th";
return az+ar
},week:{dow:1,doy:4}});
var ae=N.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(az){var af=az%10,ar=(~~(az%100/10)===1)?"th":(af===1)?"st":(af===2)?"nd":(af===3)?"rd":"th";
return az+ar
},week:{dow:1,doy:4}});
var hq=N.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(az){var af=az%10,ar=(~~(az%100/10)===1)?"th":(af===1)?"st":(af===2)?"nd":(af===3)?"rd":"th";
return az+ar
},week:{dow:1,doy:4}});
var gu=N.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-an de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(af){return af.charAt(0).toLowerCase()==="p"
},meridiem:function(af,ar,az){if(af>11){return az?"p.t.m.":"P.T.M."
}else{return az?"a.t.m.":"A.T.M."
}},arzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:function(af,ar){if(/-MMM-/.test(ar)){return f[af.month()]
}else{return iv[af.month()]
}},monthsParseExact:true,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+((this.hours()!==1)?"s":"")+"] LT"
},nextDay:function(){return"[mañana a la"+((this.hours()!==1)?"s":"")+"] LT"
},nextWeek:function(){return"dddd [a la"+((this.hours()!==1)?"s":"")+"] LT"
},lastDay:function(){return"[ayer a la"+((this.hours()!==1)?"s":"")+"] LT"
},lastWeek:function(){return"[el] dddd [pasado a la"+((this.hours()!==1)?"s":"")+"] LT"
},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});
function cj(az,ar,af,bg){var be={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[az+" minuti",az+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[az+" tunni",az+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[az+" kuu",az+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[az+" aasta",az+" aastat"]};
if(ar){return be[af][2]?be[af][2]:be[af][1]
}return bg?be[af][0]:be[af][1]
}var gr=N.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:cj,m:cj,mm:cj,h:cj,hh:cj,d:cj,dd:"%d päeva",M:cj,MM:cj,y:cj,yy:cj},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var gq=N.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:true,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});
var gF={"1":"۱","2":"۲","3":"۳","4":"۴","5":"۵","6":"۶","7":"۷","8":"۸","9":"۹","0":"۰"},hn={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};
var gh=N.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(af){return/بعد از ظهر/.test(af)
},meridiem:function(af,az,ar){if(af<12){return"قبل از ظهر"
}else{return"بعد از ظهر"
}},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",یروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(af){return af.replace(/[۰-۹]/g,function(ar){return hn[ar]
}).replace(/،/g,",")
},postformat:function(af){return af.replace(/\d/g,function(ar){return gF[ar]
}).replace(/,/g,"،")
},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}});
var t="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),bi=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",t[7],t[8],t[9]];
function Z(be,az,ar,bg){var af="";
switch(ar){case"s":return bg?"muutaman sekunnin":"muutama sekunti";
case"m":return bg?"minuutin":"minuutti";
case"mm":af=bg?"minuutin":"minuuttia";
break;
case"h":return bg?"tunnin":"tunti";
case"hh":af=bg?"tunnin":"tuntia";
break;
case"d":return bg?"päivän":"päivä";
case"dd":af=bg?"päivän":"päivää";
break;
case"M":return bg?"kuukauden":"kuukausi";
case"MM":af=bg?"kuukauden":"kuukautta";
break;
case"y":return bg?"vuoden":"vuosi";
case"yy":af=bg?"vuoden":"vuotta";
break
}af=e6(be,bg)+" "+af;
return af
}function e6(af,ar){return af<10?(ar?bi[af]:t[af]):af
}var ga=N.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:Z,m:Z,mm:Z,h:Z,hh:Z,d:Z,dd:Z,M:Z,MM:Z,y:Z,yy:Z},ordinalParse:/\d{1,2}\./,ordinal:"%d.",weekr_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordier_février_mars_avril_mai_juin_juv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:true,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(af){return af+(af===1?"er":"e")
}});
var hS=N.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:true,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi__sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(af){return af+(af===1?"er":"e")
},week:{dow:1,doy:4}});
var f4=N.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:true,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(af){return af+(af===1?"er":"")
},week:{dow:1,doy:4}});
var e5="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),dc="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
var fY=N.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(af,ar){if(/-MMM-/.test(ar)){return dc[af.month()]
}else{return e5[af.month()]
}},monthsParseExact:true,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(af){return af+((af===1||af===8||af>=20)?"ste":"de")
},week:{dow:1,doy:4}});
var ha=["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"];
var ay=["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"];
var hI=["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"];
var g3=["Did","Dil","Dim","Dic","Dia","Dih","Dis"];
var F=["Dò","Lu","Mà","Ci","Ar","Ha","Sa"];
var fT=N.defineLocale("gd",{months:ha,monthsShort:ay,monthsParseExact:true,weekdays:hI,weekdaysShort:g3,weekdaysMin:F,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [ai mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},ordinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(ar){var af=ar===1?"d":ar%10===2?"na":"mh";
return ar+af
},week:{dow:1,doy:4}});
var fS=N.defineLocale("gl",{months:"Xaneir((this.hours()!==1)?"ás":"á")+"] LT"
},nextWeek:function(){return"dddd ["+((this.hours()!==1)?"ás":"a")+"] LT"
},lastDay:function(){return"[onte "+((this.hours()!==1)?"á":"a")+"] LT"
},lastWeek:function(){return"[o] dddd [pasado "+((this.hours()!==1)?"ás":"a")+"] LT"
},sameElse:"L"},relativeTime:{future:function(af){if(af==="uns segundos"){return"nuns segundos"
}return"en "+af
},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordi);
var fAלי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_י׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(af){if(af===2){return"שעתיים"
}return af+" שעות"
},d:"יום",dd:function(af){if(af===2){return"יומיים"
}return af+" ימים"
},M:"חודש",MM:function(af){if(af===2){return"חודשיים"
}return af+" חודשים"
},y:"שנה",yy:function(af){if(af===2){return"שנתיים"
}else{if(af%10===0&&af!==10){return af+" שנה"
}}return af+" שנים"
}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(af){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(af)
},meridiem:function(af,az,ar){if(af<5){return"לפנות בוקר"
}else{if(af<10){return"בבוקר"
}else{if(af<12){return ar?'לפנה"צ':"לפני הצהריים"
}else{if(af<18"5":"५","6":"६","7":"७","8":"८","9":"९","0":"०"},fv={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};
var fx=N.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:true,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(af){return af.replace(/[१२३४५६७८९०]/g,function(ar){return fv[ar]
})
},postformat:function(af){return af.replace(/\d/g,function(ar){return ey[ar]
})
},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(af,ar){if(af===12){af=0
}if(ar==="रात"){return af<4?af:af+12
}else{if(ar==="सुबह"){return af
}else{if(ar==="दोपहर"){return af>=10?af:af+12
}else{if(ar==="शाम"){return af+12
}}}}},meridiem:function(af,az,ar){if(af<4){return"रात"
}else{if(af<10){return"सुबह"
}else{if(af<17){return"दोपहर"
}else{if(af<20){return"शाम"
}else{return"रात"
}}}}},week:{dow:0,doy:6}});
function bO(be,az,ar){var af=be+" ";
switch(ar){case"m":return az?"jedna minuta":"jedne minute";
case"mm":if(be===1){af+="minuta"
}else{if(be===2||be===3||be===4){af+="minute"
}else{af+="minuta"
}}return af;
case"h":return az?"jedan sat":"jednog sata";
case"hh":if(be===1){af+="sat"
}else{if(be===2||be===3||be===4){af+="sata"
}else{af+="sati"
}}return af;
case"dd":if(be===1){af+="dan"
}else{af+="dana"
}return af;
case"MM":if(be===1){af+="mjesec"
}else{if(be===2||be===3||be===4){af+="mjeseca"
}else{af+="mjeseci"
}}return af;
case"yy":if(be===1){af+="godina"
}else{if(be===2||be===3||be===4){af+="godine"
}else{af+="godina"
}}return af
}}var fs=N.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:true,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [ dddd [u] LT"
}},lastDay:"[jučer un"[prošlu] dddd [u] LT";
case 6:return"[prošle] [subote] [u] LT";
case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:bO,mm:bO,h:bO,hh:bO,d:"dan",dd:bO,M:"mjesec",MM:bO,y:"godinu",yy:bO},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});
var ge="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
function gQ(be,az,ar,bn){var af=be,bg;
switch(ar){case"s":return(bn||az)?"néhány másodperc":"néhány másodperce";
case"m":return"egy"+(bn||az?" perc":" perce");
case"mm":return af+(bn||az?" perc":" perce");
case"h":return"egy"+(bn||az?" óra":" órája");
case"hh":return af+(bn||az?" óra":" órája");
case"d":return"egy"+(bn||az?" nap":" napja");
case"dd":return af+(bn||az?" nap":" napja");
case"M":return"egy"+(bn||az?" hónap":" hónapja");
case"MM":return af+(bn||az?" h|az?" év":" éve")
}return""
}function aG(af){return(af?"":"[múlt] ")+"["+ge[this.day()]+"] LT[-kor]"
}var fn=N.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(af){return af.charAt(1).toLowerCase()==="u"
},meridiem:function(af,ar,az){if(af<12){return az===true?"de":"DE"
}else{return az===true?"du":"DU"
}},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return aG.call(this,true)
},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return aG.call(this,false)
},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:gQ,m:gQ,mm:gQ,h:gQ,hh:gQ,d:gQ,dd:gQ,M:gQ,MM:gQ,y:gQ,yy:gQ},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});
var im=N.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"
},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"
},sameրկ�se:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(af){return/^(ցերեկվա|երեկոյան)$/.test(af)
},meridiem:function(af){if(af<4){return/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(af,ar){switch(ar){case"DDD":case"w":case"W":case"DDDo":if(af===1){return af+"-ին"
}return af+"-րդ";
default:return af
}},week:{dow:1,doy:7}});
var fb=N.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(af,ar){if(af===12){af=0
}if(ar==="pagi"){return af
}else{if(ar==="siang"){return af>=11?af:af+12
}else{if(ar==="sore"||ar==="malam"){return af+12
}}}},meridiem:function(af,ar,az){if(af<11){return"pagi"
}else{if(af<15){return"siang"
}else{if(af<19){return"sore"
}else{return"malam"
}}}},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});
function eV(af){if(af%100===11){return true
}else{if(af%10===1){return false
}}return true
}function ii(be,az,ar,bg){var af=be+" ";
switch(ar){case"s":return az||bg?"nokkrar sekúndur":"nokkrum sekúndum";
case"m":return az?"mínúta":"mínútu";
case"mm":if(eV(be)){return af+(az||bg?"mínútur":"mínútum")
}else{if(az){return af+"mínúta"
}}return af+"mínútu";
case"hh":if(eV(be)){return af+(az||bg?"klukkustundir":"klukkustundum")
}return af+"klukkustund";
case"d":if(az){return"dagur"
}return bg?"dag":"degi";
case"dd":if(eV(be)){if(az){return af+"dagar"
}return af+(bg?"daga":"dögum")
}else{if(az){return af+"dagur"
}}return af+(bg?"dag":"degi");
case"M":if(az){return"mánuður"
}return bg?"mánuð":"mánuði";
case"MM":if(eV(be)){if(az){return af+"mánuðir"
}return af+(bg?"mánuði":"mánuðum")
}else{if(az){return af+"mánuður"
}}return af+(bg?"mánuð":"mánuði");
case"y":return az||bg?"ár":"ári";
case"yy":if(eV(be)){return af+(az||bg?"ár":"árum")
}return af+(az||bg?"ár":"ári")
}}var e0=N.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:ii,m:ii,mm:ii,h:"klukkustund",hh:ii,d:ii,dd:ii,M:ii,MM:ii,y:ii,yy:ii},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var eX=N.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [ae:{future:function(af)ni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});
var eQ=N.defineLocale("ja",2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"Ah時m分s秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah時m分",LLLL:"YYYY年M月D日Ah時m分 dddd"},meridiemParse:/午前|午後/i,isPM:function(af){return af==="午後"
},meridiem:function(af,az,ar){if(af<12){return"午前"
}else{return"午後"
}},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},ordinalParse:/\d{1,2}日/,ordinal:function(af,ar){switch(ar){case"d":case"D":case"DDD":return af+"日";
default:return af
}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}});
var er=N.defineLocale("jv",{months:"Januarir_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(af,ar){if(af===12){af=0
}if(ar==="enjing"){return af
}else{if(ar==="siyang"){return af>=11?af:af+12
}else{if(ar==="sonten"||ar==="ndalu"){return af+12
}}}},meridiem:function(af,ar,az){if(af<11){return"enjing"
}else{if(af<15){return"siyang"
}else{if(af<19){return"sonten"
}else{return"ndalu"
}}}},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}});
var ei=N.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_Ⴣ�ი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნ�ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(af){return(/(წამი|წუთი|საათი|წელი)/).test(af)?af.replace(/ი$/,"ში"):af+"ში"
},past:function(af){if((/(წამი|წუთი|საათი|დღე|თვე)/).test(af)){return af.replace(/(ი|ე)$/,"ის წინ")
}if((/წელი/).test(af)){return af.replace(/წელი$/,"წლის წინ")
}},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(af){if(af===0){return af
}if(af===1){return af+"-ლი"
}if((af<20)||(af<=100&&(af%20===0))||(af%100===0)){return"მე-"+af
}return af+"-ე"
},week:{dow:1,doy:7}});
var r={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(az){var ar=az%10,af=az>=100?100:null;
return az+(r[az]||r[ar]||r[af])
},week:{dow:1,doy:7}});
var d9=N.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}});
var d6=N.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h시 m분",LLLL:"YYYY년 MMMM D일 dddd A h시 m분"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"일분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/오전|오후/,isPM:function(af){return af==="오후"
},meridiem:function(af,az,ar){return af<12?"오전":"오후"
}});
var J={0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"};
var d0=N.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кече саат] LT",lastWeek:"[Өткен аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",m:"бир мүнөт",mm:"%d м жыл"},ordinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(az){var ar=az%10,af=az>=100?100:null;
return az+(J[az]||J[ar]||J[af])
},week:{dow:1,doy:7}});
function am(az,ar,af,bg){var be={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};
return ar?be[afndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";
default:return"[Leschte] dddd [um] LT"
}}},relativeTime:{future:ie,past:hX,s:"e puer Sekonnen",m:am,mm:"%d Minutten",h:am,hh:"%d Stonnen",d:am,dd:"%d Deeg",M:am,MM:"%d Méint",y:am,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var dL=N.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(af){return af==="ຕອນແລງ"
},meridiem:function(af,az,ar){if(af<12){return"ຕອນເຊົ້າ"
}else{return"ຕອນແລງ"
}},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},ordinalParse:/(ທີ່)\d{1,2}/,ordinal:function(af){return"ທີ່"+af
}});
var aa={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};
function f7(az,ar,af,be){if(ar){return"kelios sekundės"
}else{return be?"kelių sekundžių":"kelias sekundes"
}}function hD(az,ar,af,be){return ar?bf(af)[0]:(be?bf(af)[1]:bf(af)[2])
}function c5(af){return af%10===0||(af>10&&af<20)
}function bf(af){return aa[af].split("_")
}function al(be,az,ar,bg){var af=be+" ";
if(be===1){return af+hD(be,az,ar[0],bg)
}else{if(az){return af+(c5(be)?bf(ar)[1]:bf(ar)[0])
}else{if(bg){return af+bf(ar)[1]
}else{return af+(c5(be)?bf(ar)[1]:bf(ar)[2])
}}}}var dI=N.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_")},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:f7,m:hD,mm:al,h:hD,hh:al,d:hD,dd:al,M:hD,MM:al,y:hD,yy:al},ordinalParse:/\d{1,2}-oji/,ordinal:function(af){return af+"-oji"
},week:{dow:1,doy:4}});
var gZ={m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};
function ep(af,az,ar){if(ar){return az%10===1&&az!==11?af[2]:af[3]
}else{return az%10===1&&az!==11?af[0]:af[1]
}}function dZ(az,ar,af){return az+" "+ep(gZ[af],az,ar)
}function fj(az,ar,af){return ep(gZ[af],az,ar)
}function b0(ar,af){return af?"dažas sekundes":"dažām sekundēm"
}var dH=N.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:b0,m:fj,mm:dZ,h:fj,hh:dZ,d:fj,dd:dZ,M:fj,MM:dZ,y:fj,yy:dZ},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var cn={words:{m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(ar,af){return ar===1?af[0]:(ar>=2&&ar<=4?af[1]:af[2])
},translate:function(be,ar,af){var az=cn.words[af];
if(af.length===1){return ar?az[0]:az[1]
}else{return be+" "+cn.correctGrammaticalCase(be,az)
}}};
var dw=N.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:true,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";
case 3:return"[u] [srijedu] [u] LT";
case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"
}},lastDay:"[juče u] LT",lastWeek:function(){var af=["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];
return af[this.day()]
},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",m:cn.translate,mm:cn.translate,h:cn.:cn.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});
var dr=N.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";
case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"
}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(az){var ar=az%10,af=az%100;
if(az===0){return az+"-ев"
}else{if(af===0){return az+"-ен"
}else{if(af>10&&af<20){return az+"-ти"
}else{if(ar===1){return az+"-ви"
}else{if(ar===2){return az+"-ри"
}else{if(ar===7||ar===8){return az+"-ми"
}else{return az+"-ти"
}}}}}}},week:{dow:1,doy:7}});
var dp=N.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:true,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(af,ar){if(af===12){af=0
}if((ar==="രാത്രി"&&af>=4)||ar==="ഉച്ച കഴിഞ�":"३","4":"४","5":"५","6":"६","7":"७","8":"८","9":"९","0":"०"},eZ={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};
function iB(be,az,ar,bg){var af="";
if(az){switch(ar){case"s":af="काही सेकंद";
break;
case"m":af="एक मिनिट";
break;
case"mm":af="%d मिनिटे";
break;
case"h":af="एक तास";
break;
case"hh":af="%d तास";
break;
case"d":af="एक दिवस";
break;
case"dd":af="%d दिवस";
break;
case"M":af="एक महिना";
break;
case"MM":af="%d महिने";
break;
case"y":af="एक वर्ष";
break;
case"yy":af="%d वर्षे";��का तासा";
break;
case"hh":af="%d तासां";
break;
case"d":af="एका दिवसा";
break;
case"dd":af="%d दिवसां";
break;
case"M":af="एका महिन्या";
break;
case"MM":af="%d महिन्यां";
break;
case"y":af="एका वर्षा";
break;
case"yy":af="%d वर्षां";
break
}}return af.replace(/%d/i,be)
}var dm=N.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:true,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:iB,m:iB,mm:iB,h:iB,hh:iB,d:iB,dd:iB,M:iB,MM:iB,y:iB,yy:iB},preparse:function(af){return af.replace(/[१२३४५६७८९०]/g,function(ar){return eZ[ar]
})
},postformat:function(af){return af.replace(/\d/g,function(ar){return dY[ar]
})
},meridiemParse:/रात्री|सकाळी|दुपारी|सायं<4?af:af+12
}else{if(ar==="सकाळी"){return af
}else{if(ar==="दुपारी"){return af>=10?af:af+12
}else{if(ar==="सायंकाळी"){return af+12
}}}}},meridiem:function(af,az,ar){if(af<4){return"रात्री"
}else{if(af<10){return"सकाळी"
}else{if(af<17){return"दुपारी"
}else{if(af<20){return"सायंकाळी"
}else{return"रात्री"
}}}}},week:{dow:0,doy:6}});
var aL=N.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(af,ar){if(af===12){af=0
}if(ar==="pagi"){return af
}else{if(ar==="tengahari"){return af>=11?af:af+12
}else{if(ar==="petang"||ar==="malam"){return af+12
}}}},meridiem:function(af,ar,az){if(af<11){return"pagi"
}else{if(af<15){return"tengahari"
}else{if(af<19){return"petang"
}else{return"malam"
}}}},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukulun"},week:{dow:1,doy:7}});
var bT=N.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(af,ar){if(af===12){af=0
}if(ar==="pagi"){return af
}else{if(ar==="tengahari"){return af>=11?af:af+12
}else{if(ar==="petang"||ar==="malam"){return af+12
}}}},meridiem:function(af,ar,az){if(af<11){return"pagi"
}else{if(af<15){return"tengahari"
}else{if(af<19){return"petang"
}else{return"malam"
}}}},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});
var fI={"1":"၁","2":"၂","3":"၃","4":"၄","5":"၅","6":"၆","7":"၇","8":"၈","9":"၉","0":"၀"},du={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};
var di=N.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_�LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(af){return af.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(ar){return du[ar]
})
},postformat:function(af){return af.replace(/\d/g,function(ar){return fI[ar]
})
},week:{dow:1,doy:4}});
var c6=N.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:true,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var aI={"1":"१","2":"२","3":"३","4":"४","5":"५","6":"६","7":"७","8":"८","9":"९","0":"०"},bD={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};
var c3=N.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:true,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_निबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"Aकुसो"
}else{if(af<20){return"साँझ"
}else{return"राति"
}}}}},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घ�ul._aug._sep._okt._nov._dec.".spaf,ar){if(/-MMM-/.test(ar)){return gv[af.month()]
}else{return h6[af.month()]
}},monthsParseExact:true,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(af){return af+((af===1||af===8||af>=20)?"ste":"de")
},week:{dow:1,doy:4}});
var cR=N.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var aQ={"1":"੧","2":"੨","3":"੩","4":"੪","5":"੫","6":"੬","7":"੭","8":"੮","9":"੯","0":"੦"},bH={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"};
var bJ=N.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵ��ਜੇ"ਕਲ] LT",nextWeek:"dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(af){return af.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(ar){return bH[ar]
})
},postformat:function(af){return af.replace(/\d/g,function(ar){return aQ[ar]
})
},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(af,ar){if(af===12){af=0
}if(ar==="ਰਾਤ"){return af<4?af:af+12
}else{if(ar==="ਸਵੇਰ"){return af
}else{if(ar==="ਦੁਪਹਿਰ"){return af>=10?af:af+12
}else{if(ar==="ਸ਼ਾਮ"){return af+12
}}}}},meridiem:function(af,az,ar){if(af<4){return"ਰਾਤ"
}else{if(af<10){return"ਸਵੇਰ"
}else{if(af<17){return"ਦੁਪਹਿਰ"
}else{if(af<20){return"ਸ਼ਾਮ"
}else{return"ਰਾਤ"
}}}}},week:{dow:0,doy:6}});
var dh="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),aC="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
function i(af){return(af%10<5)&&(af%10>1)&&((~~(af/10)%10)!==1)
}function eK(be,az,ar){var af=be+" ";
switch(ar){case"m":return az?"minuta":"minutę";
case"mm":return af+(i(be)?"minuty":"minut");
case"h":return az?"godzina":"godzinę";
case"hh":return af+(i(be)?"godziny":"godzin");
case"MM":return af+(i(be)?"miesiące":"miesięcy");
case"yy":return af+(i(be)?"lata":"lat")
}}var cg=N.defineLocale("pl",{months:function(ar,af){if(af===""){return"("+aC[ar.month()]+"|"+dh[ar.month()]+")"
}else{if(/D MMMM/.test(af)){return aC[ar.month()]
}else{return dh[ar.month()]
}}},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";
case 3:return"[W zeszłą środę o] LT";
case 6:return"[W zeszłą sobotę o] LtiveTime:{lParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var eD=N.defineLocale("pt-br",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddthis.day()===6)?"[Último] dddd anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"});
var b7=N.defineLocale("pt",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return(this.day()===0||this.day()===6)?"[Último] dddd [às] LT":"[Última] dddd [às] LT"
},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});
function c2(az,ar,af){var bg={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},be=" ";
if(az%100>=20||(az>=100&&az%100===0)){be=" de "
}return az+be+bg[af]
}var by=N.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:true,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:c2,h:"o oră",hh:c2,d:"o zi",dd:c2,M:"o lună",MM:c2,y:"un an",yy:c2},week:{dow:1,doy:7}});
function bx(az,ar){var af=az.split("_");
return ar%10===1&&ar%100!==11?af[0]:(ar%10>=2&&ar%10<=4&&(ar%100<10||ar%100>=20)?af[1]:af[2])
}function e7(az,ar,af){var be={mm:ar?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};
if(af==="m"){return ar?"минута":"минуту"
}else{return az+" "+bx(be[af],+az)
}}var gD=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];
var bu=N.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:gD,longMonthsParse:gD,shortMonthsParse:gD,monthsRegex:/^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,monthsShortRegex:/^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,monthsStrictRegex:/^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|марта?|июн[яь]|июл[яь]|ма[яй])/i,monthsShortStrictRegex:/^(нояб\.|февр\.|сент\.|июль|ян�вг\.|апр\.|окт\.|дек\.|ма[яй])/i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(af){if(af.week()!==this.week()){switch(this.day()){case 0:return"[В следующее] dddd [в] LT";
case 1:case 2:case 4:return"[В следующий] dddd [в] LT";
case 3:case 5:case 6:return"[В следующую] dddd [в] LT"
}}else{if(this.day()===2){return"[Во] dddd [в] LT"
}else{return"[В] dddd [в] LT"
}}},lastWeek:function(af){if(af.week()!==this.week()){switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";
case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";
case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"
}}else{if(this.day()===2){return"[Во] dddd [в] LT"
}else{return"[В] dddd [в] LT"
}}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:e7,mm:e7,h:"час",hh:e7,d:"день",dd:e7,M:"месяц",MM:e7,y:"год",yy:e7},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(af){return/^(дня|вечера)$/.test(af)
},meridiem:function(af,az,ar){if(af<4){return"ночи"
}else{if(af<12){return"утра"
}else{if(af<17){return"дня"
}else{return"вечера"
}}}},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(af,ar){switch(ar){case"M":case"d":case"DDD":return af+"-й";
case"D":return af+"-го";
case"w":case"W":return af+"-я";
default:return af
}},week:{dow:1,doy:7}});
var bh=N.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var bd=N.defineLocale("si",{months:"ඒ_මාර්තු_අප්රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්ර_සි_සෙ".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},ordinalParse:/\d{1,2} වැනි/,ordinal:function(af){return af+" වැනි"
},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(af){return af==="ප.ව."||af==="පස් වරු"
},meridiem:function(af,ar,az){if(af>11){return az?"ප.ව.f(az||bg){return af+(bU(be)?"hodiny":"hodín")
}else{return af+"hodinami"
}break;
case"d":return(az||bg)?"deň":"dňom";
case"dd":if(az||bg){return af+(bU(be)?"dni":"dní")
}else{return af+"dňami"
}break;
case"M":return(az||bg)?"mesiac":"mesiacom";
case"MM":if(az||bg){return af+(bU(be)?"mesiace":"mesiacov")
}else{return af+"mesiacmi"
}break;
case"y":return(az||bg)?"rok":"rokom";
case"yy":if(az||bg){return af+(bU(be)?"roky":"rokov")
}else{return af+"rokmi"
}break
}}var a9=N.defineLocale("sk",{months:e1,monthsShort:j,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";
case 1:case 2:return"[v] dddd [o] LT";
case 3:return"[v stredu o] LT";
case 4:return"[vo štvrtok o] LT";
case 5:return"[v piatok o] LT";
case 6:return"[v sobotu o] LT"
}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";
case 1:case 2:return"[minulý] dddd [o] LT";
case 3:return"[minulú stredu o] LT";
case 4:case 5:return"[minulý] dddd [o] LT";
case 6:return"[minulú sobotu o] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:h8,m:h8,mm:h8,h:h8,hh:h8,d:h8,dd:h8,M:h8,MM:h8,y:h8,yy:h8},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
function hM(be,az,ar,bg){var af=be+" ";
switch(ar){case"s":return az||bg?"nekaj sekund":"nekaj sekundami";
case"m":return az?"ena minuta":"eno minuto";
case"mm":if(be===1){af+=az?"minuta":"minuto"
}else{if(be===2){af+=az||bg?"minuti":"minutama"
}else{if(be<5){af+=az||bg?"minute":"minutami"
}else{af+=az||bg?"minut":"minutami"
}}}return af;
case"h":return az?"ena ura":"eno uro";
case"hh":if(be===1){af+=az?"ura":"uro"
}else{if(be===2){af+=az||bg?"uri":"urama"
}else{if(be<5){af+=az||bg?"ure":"urami"
}else{af+=az||bg?"ur":"urami"
}}}return af;
case"d":return az||bg?"en dan":"enim dnem";
case"dd":if(be===1){af+=az||bg?"dan":"dnem"
}else{if(be===2){af+=az||bg?"dni":"dnevoma"
}else{af+=az||bg?"dni":"dnevi"
}}return af;
case"M":return az||bg?"en mesec":"enim mesecem";
case"MM":if(be===1){af+=az||bg?"mesec":"mesecem"
}else{if(be===2){af+=az||bg?"meseca":"mesecema"
}else{if(be<5){af+=az||bg?"mesece":"meseci"
}else{af+=az||bg?"mesecev":"meseci"
}}}return af;
case"y":return az||bg?"eno leto":"enim letom";
case"yy":if(be===1){af+=az||bg?"leto":"letom"
}else{if(be===2){af+=az||bg?"leti":"letoma"
}else{if(be<5){af+=az||bg?"leta":"leti"
}else{af+=az||bg?"let":"leti"
}}}return af
}}var a8=N.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg.act:true,sShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextcase 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"
}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:hM,m:hM,mm:hM,h:hM,hh:hM,d:hM,dd:hM,M:hM,MM:hM,y:hM,yy:hM},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});
var a6=N.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:true,meridiemParse:/PD|MD/,isPM:function(af){return af.charAt(0)==="M"
},meridiem:function(af,ar,az){return af<12?"PD":"MD"
},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var hC={words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(ar,af){return ar===1?af[0]:(ar>=2&&ar<=4?af[1]:af[2])
},translate:function(be,ar,af){var az=hC.words[af];
if(af.length===1){return ar?az[0]:az[1]
}else{return be+" "+hC.correctGrammaticalCase(be,az)
}}};
var gT=N.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:true,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_] [у] LT";
case 6:return"[у] [суботу] [у] LT";
case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"
}},lastDay:"[јуче у] LT",lastWeek:function(){var af=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];
return af[this.day()]
},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:hC.translate,mm:hC.translate,h:hC.translate,hh:hC.translate,d:"дан",dd:hC.translate,M:"месец",MM:hC.transla"minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(ar,af){return ar===1?af[0]:(ar>=2&&ar<=4?af[1]:af[2])
},translate:function(be,ar,af){var az=s.words[af];
if(af.length===1){return ar?az[0]:az[1]
}else{return be+" "+s.correctGrammaticalCase(be,az)
}}};
var a5=N.defineLocale("sr",pr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:true,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";
case 3:return"[u] [sredu] [u] LT";
case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"
}},lastDay:"[juče u] LT",lastWeek:function(){var af=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];
return af[this.day()]
},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:s.translate,mm:s.translate,h:s.translate,hh:s.translate,d:"dan",dd:s.translate,M:"mesec",MM:s.translate,y:"godinu",yy:s.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});
var a4=N.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(af,ar,az){if(af<11){return"ekuseni"
}else{if(af<15){return"emini"
}else{if(af<19){return"entsambama"
}else{return"ebusuku"
}}}},meridiemHour:function(af,ar){if(af===12){af=0
}if(ar==="ekuseni"){return af
}else{if(ar==="emini"){return af>=11?af:af+12
}else{if(ar==="entsambama"||ar==="ebusuku"){if(af===0){return 0
}return af+12
}}}},ordinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}});
var a2=N.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calend",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(az){var af=az%10,ar=(~~(az%100/10)===1)?"e":(af===1)?"a":(af===2)?"a":(af===3)?"e":"e";
return az+ar
},week:{dow:1,doy:4}});
var a1=N.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dd,past:"to,y:"mwaka��","0":"௦"},g9={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"};
var aW=N.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextW��ல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(af){return af+"வது"
},preparse:function(af){return af.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(ar){return g9[ar]
})
},postformat:function(af){return af.replace(/\d/g,function(ar){return gp[ar]
})
},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(af,az,ar){if(af<2){return" யாமம்"
}else{if(af<6){return" வைகறை"
}else{if(af<10){return" காலை"
}else{if(af<14){return" நண்பகல்"
}else{if(af<18){return" எற்பாடு"
}else{if(af<22){return" மாலை"
}else{return" யாமம்"
}}}}}}},meridiemHour:function(af,ar){if(af===12){af=0
}if(ar==="யாமம்"){return af<2?af:af+12
}else{if(ar==="வைகறை"||ar==="காலை"){return af
}else{if(ar==="நண்பகல்"){return af>=10?af:af+12
}else{return af+12
}}}},week:{dow:0,doy:6}});
var aS=N.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_�._అక్టో._నవ._డి�nthsParseExact:true,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుళ_బ�శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత
}if(ar==="రాత్రి"){return af<4?af:af+12
}else{if(ar==="ఉదయం"){return af
}else{if(ar==="మధ్యాహ్నం"){return af>=10?af:af+12
}else{if(ar==="సాయంత్రం"){return af+12
}}}}},meridiem:function(af,az,ar){if(af<4){return"రాత్రి"
}else{ifา_ส".split("_"),monthsParseExact:true,weekdays:"อาทิตย์_จันทร์_อังคารekdaysShort:"อาทิ�kdaysPaนเ�งเ�return"��ื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s""%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}});
var dD=N.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_AgostNobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".sDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",h",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(af){return af
},week:{dow:1,doy:4}});
var ab="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
function hR(af){var ar=af;
ar=(af.indexOf("jaj")!==-1)?ar.slice(0,-3)+"leS":(af.indexOf("jar")!==-1)?ar.slice(0,-3)+"waQ":(af.indexOf("DIS")!==-1)?ar.slice(0,-3)+"nem":ar+" pIq";
return ar
}function iA(af){var ar=af;
ar=(af.indexOf("jaj")!==-1)?ar.slice(0,-3)+"Hu’":(af.indexOf("jar")!==-1)?ar.slice(0,-3)+"wen":(af.indexOf("DIS")!==-1)?ar.slice(0,-3)+"ben":ar+" ret";
return ar
}function ch(be,az,ar,bg){var af=ft(be);
switch(0,be="";
if(bg>0){be+=ab[bg]+"vatlh"
}if(af>0){be+=((be!=="")?" ":"")+ab[af]+"maH"
}if(ar>0){be+=((be!=="")?" ":"")+ab[ar]
}return(be==="")?"pagh":be
}var aF=N.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar So_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:hR,past:iA,s:"puS lup",m:"wa’ tup",mm:ch,h:"wa’ rep",hh:ch,d:"wa’ jaj",dd:ch,M:"wa’ jar",MM:ch,y:"wa’ DIS",yy:ch},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});
var p={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2'ıncı"};
var aH=N_Sal_Çar_elativeTime:{frn az+"'ıncı"
}var ar=az%10,af=az%100-ar,be=az>=100?100:null;
return az+(p[ar]||p[af]||p[be])
},week:{dow:1,doy:7}});
var eP=N.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïur_Listopäts_Noemv�i_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(af){return"d'o"===af.toLowerCase()
},meridiem:function(af,ar,az){if(af>11){return az?"d'o":"D'O"
}else{return az?iveTime:{futury:4}});
function bq(az,ar,af,bg){var be={s:["viensas secunds","'iensas secunds"],m:["'n míut","'iens míut"],mm:[az+" míuts",""+az+" míuts"],h:["'n þora","'iensa þora"],hh:[az+" þoras",""+az+" þoras"],d:["'n ziua","'iensa ziua"],dd:[az+" ziuas",""+az+" ziuas"],M:["'n mes","'iens mes"],MM:[az+" mesen",""+az+" mesaz+" ars",""+az+" ars"]};
return bg?be[af][0]:(ar?be[af][0]:be[af][1])
}var cQ=N.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFordar:{saTime:{fⵏⵏ�ⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_eekdaysMiⴴ] LT LT",saⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:g(az,ar){var af=az.spl d3(az,ar,af){var be={mm:ar?"х�ина_години_годин":"годину_години_гнь_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};
if(af==="m"){return ar?"хвилина":"хвилину"
}else{if(af==="h"){return ar?"година":"годину"
}else{return az+" "+dg(be[af],+az)
}}}function cu(af,be){var ar={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},az=(/(\[[ВвУу]\]) ?dddd/).test(be)?"accusative":((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(be)?"genitive":"nominative");
return ar[az][af.day()]
}function bc(af){return function(){return af+"о"+(this.hours()===11?"б":"")+"] LT"
}
}var ao=N.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:cu,weekdaeekdaysbc("[С dddd [").call(this);
case 1:case 2:case 4:return bc("[Минулого] dddd [").call(this)
}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:d3,mm:d3,h:"годину",hh:d3,d:"день",dd:d3,M:"місяць",MM:d3,y:"рік",yy:d3},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(af){return/^(дня|вечора)$/.test(af)
},meridiem:function(af,az,ar){if(af<4){return"ночі"
}else{if(af<12){return"ранку"
}else{if(af<17){return"дня"
}else{return"вечора"
}}}},ordinalParse:/\d{1,2}-(й|го)/,ordinal:function(af,ar){switch(ar){case"M":case"d":case"DDD":case"w":case"W":return af+"-й";
case"D":return af+"-го";
default:return af
}},week:{dow:1,doy:7}});
var ad=N.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),�шанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:�т",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}});
var T=N.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:true,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_Tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:pr_~Máý_~Júñ_~Júl_~_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_TúY",LLL:"D MMMM  LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñ%100/10)===1)?"th":(af===1)?"st":(af===2)?"nd":(af===3)?"rd":"th月_6月_7月_8�三_四_�M-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日A��mm分:function(af,ar){if(af===12){af=0
}if(ar==="凌晨"||ar==="早上"||ar==="上午"){return af
}else{if(ar==="下午"||ar==="晚上"){return af+12
}else{return af>=11?af:af+12
}}},meridiem:function(af,az,ar){var be=af*100+az;
if(be<600){return"凌晨"
}else{if(be<900){return"早上"
}else{if(be<1130){return"上午"
}else{if(be<1230){return"中午"
}e��天]Ah[�T"
},nextWeek:function()n this.minutes()===0?ar+"dddAh点整":ar+"dddAh点mm"
},lastWeek:function(){var af,ar;
af=N().startOf("week");
ar=this.unix()<af.unix()?"[上]":"[本]";
return this.minutes()===0?ar+"dddAh点整":ar+"dddAh点mm"
},sameElse:"LL"},ordinalParse:/\d{";
case"w"t:return af
}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}});
var bt=N.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期eekdaysMin:"日_一_二_三_四_五_六".split("_"),longDats秒",L:"L:"YYYY年"YYYY年MMMD旸�午"){return af
}else{if(ar==="中午"){return af>=11?af:af+12
}else{if(ar==="下午"||ar==="晚上"){return af+12
}}}},meridiem:function(af,az,ar){var be=af*100+az;
if(be<900){return"早上"
}else{if(be<1130){return"上午"
}else{if(be<1230){return"中午"
}else{if(be<1800){return"下午"
}else{return"晚上"
}}}}},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"e"D":case"DDD":return af+"日";
case"M":return af+"月";
case af
}},relen");
return e8
}));
namespace("SAP.sapdx.scroll");
SAP.sapdx.scroll.detectScrollProps=function(C){var c="UP";
var x="DOWN";
var A={TOP:"TOP",BOTTOM:"BOTTOM",DOWN:x,UP:c};
var q;
var d=C.scrollingWindow||$(window);
var G=$(document);
var E=new MobileDetect(window.navigator.userAgent);
var r=E.mobile();
var B=d.scrollTop();
var m=C.timeout;
var f=C.offset;
var o=C.onTop||functiction(){};
var a=C.onDown||function(){};
var v=C.onUp||function(){};
var g=C.onMovingUp||function(){};
var n=C.onMovingDown||function(){};
var u=false;
var k=0;
var z=C.onScroll||function(){};
var b=function(){var H=d.scrollTop();
var I;
if(H<B){I=c
}else{if(H>B){I=x
}else{I=0
}}B=H;
return I
};
var t=function(){var J=G.height();
var H=d.height()+d.scrollTop();
if(r){var I=$("#footer").height()||30;
return d.height()+d.scrollTop()>(G.height()-I)
}else{return(J-H)/J===0
}};
var i=function(){var I=G.height();
var H=d.height()+d.scrollTop();
if(r){return d.scrollTop()+d.height()>=G.height()-100
}else{return(I-H)/I===0
}};
var p=function(){return d.scrollTop()===0?true:d.scrollTop()<15
};
var j=function(){if(u){return
}var N=t();
var O=p();
var P=b();
switch(P){case x:n(B,q);
if(N){if(q!==A.BOTTOM){F(B,q,A.BOTTOM);
q=A.BOTTOM
}}else{if((q!==A.DOWN)&&((f&&B>=f)||!f)){a(B,q,A.DOWN);
q=A.DOWN
}}break;
case c:g(B,q);
if(O){if(q!==A.TOP){o(B,q,A.TOP);
q=A.TOP
}}else{if(q!==A.UP){v(B,q,A.UP);
q=A.UP
}}break;
default:return
}var M=P===x&&k!==P;
var I=P===c&&k!==P;
var K=P===x;
var H=i();
var Q=O;
var L=P===c;
var J=B;
z(M,K,H,I,L,Q,J);
k=P;
return false
};
var h=function(){return B
};
var e=function(){return d.scrollTop()
};
var y=function(){u=true
};
var w=function(){u=false
dScrollBehaviour",y);
G.off("resumeScrollBehaviour",w)
};
var D=function(H){f=H
};
this.setOffset=D;
this.startListhenScrollEvent=l;
this.stopListhenScrollEvent=s;
this.SCROLL_STATES=A;
this.getLastScrollPosition=h;
this.getCurrentScrollPosition=e;
this.isScrollOnBottom=t;
this.isSrollOnTop=p;
this.suspendEvents=y;
this.resumeEvents=w
};
/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
(function(a,b){if(typeof define==="function"&&define.amd){define(b)
}else{if(typeof exports==="object"){module.exports=b()
}else{a.ScrollMagic=b()
}}}(this,function(){var b=function(){e.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
};
b.version="2.0.7";
window.addEventListener("mousewheel",function(){});
var d="data-scrollmagic-pin-spacer";
b.Controller=function(k){var n="ScrollMagic.Controller",q="FORWARD",o="REVERSE",t="PAUSED",j=a.defaults;
var G=this,z=e.extend({},j,k),F=[],C=false,l=0,i=t,p=true,v=0,E=true,D,y;
var x=function(){for(var I in z){if(!j.hasOwnProperty(I)){r(2,'WARNING: Unknown option "'+I+'"');
delete z[I]
}}z.container=e.get.elements(z.container)[0];
if(!z.container){r(1,"ERROR creating object "+n+": No valid scroll container supplied");
throw n+" init failed."
}p=z.contai0);
z.refreshInterval=e.type.Number(H)?H:j.refreshInterval;
f();
r(3,"added new "+n+" controller (v"+b.version+")")
};
var f=function(){if(z.refreshInterval>0){y=window.setTimeout(m,z.refreshInterval)
}};
var g=function(){return z.vertical?e.get.scrollTop(z.container):e.get.scrollLeft(z.container)
};
var w=function(){return z.vertical?e.get.height(z.container):e.get.width(z.container)
};
var h=this._setScrollPos=function(H){if(z.vertical){if(p){window.scrollTo(e.get.scrollLeft(),H)
}else{z.container.scrollTop=H
}}else{if(p){window.scrollTo(H,e.get.scrollTop())
}else{z.container.scrollLeft=H
}}};
var u=function(){if(E&&C){var H=e.type.Array(C)?C:F.slice(0);
C=false;
var I=l;
l=G.scrollPos();
var J=l-I;
if(J!==0){i=(J>0)?q:o
}if(i===o){H.reverse()
}H.forEach(function(L,K){r(3,"updating Scene "+(K+1)+"/"+H.length+" ("+F.length+" total)");
L.update(true)
});
if(H.length===0&&z.loglevel>=3){r(3,"updating 0 Scenes (nothing added to controller)")
}}};
var B=function(){D=e.rAF(u)
};
var A=function(H){r(3,"event fired causing an update:",H.type);
if(H.type=="resize"){v=w();
i=t
}if(C!==true){C=true;
B()
}};
var m=function(){if(!p){if(v!=w()){var H;
try{H=new Event("resize",{bubbles:false,cancelable:false})
}catch(I){H=document.createEvent("Event");
H.initEvent("resize",false,false)
}z.container.dispatchEvent(H)
}}F.forEach(function(K,J){K.refresh()
});
f()
};
var r=this._log=function(I,H){if(z.loglevel>=I){Array.prototype.splice.call(arguments,1,0,"("+n+") ->");
e.log.apply(window,arguments)
}};
this._options=z;
var s=function(I){if(I.length<=1){return I
}else{var H=I.slice(0);
H.sort(function(K,J){return K.scrollOffset()>J.scrollOffset()?1:-1
});
return H
}};
this.addScene=function(I){if(e.type.Array(I)){I.forEach(function(K,J){G.addScene(K)
})
}else{if(I instanceof b.Scene){if(I.controller()!==G){I.addTo(G)
}else{if(F.indexOf(I)<0){F.push(I);
F=s(F);
I.on("shift.controller_sort",function(){F=s(F)
});
for(var H in z.globalSceneOptions){if(I[H]){I[H].call(I,z.globalSceneOptions[H])
}}r(3,"adding Scene (now "+F.length+" total)")
}}}else{r(1,"ERROR: invalid argument supplied for '.addScene()'")
}}return G
};
this.removeScene=function(I){if(e.type.Array(I)){I.forEach(function(K,J){G.removeScene(K)
})
}else{var H=F.indexOf(I);
if(H>-1){I.off("shift.controller_sort");
F.splice(H,1);
r(3,"removing Scene (now "+F.length+" left)");
I.remove()
}}return G
};
this.updateScene=function(I,H){if(e.type.Array(I)){I.forEach(function(K,J){G.updateScene(K,H)
})
}else{if(H){I.update(true)
}else{if(C!==true&&I instanceof b.Scene){C=C||[];
if(C.indexOf(I)==-1){C.push(I)
}C=s(C);
B()
}}}return G
};
this.update=function(H){A({type:"resize"});
if(H){u()
}return G
};
this.scrollTo=function(H,L){if(e.type.Number(H)){h.call(z.container,H,L)
}else{if(H instanceof b.Scene){if(H.controller()===G){G.scrollTo(H.scrollOffset(),L)
}else{r(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",H)
}}else{if(e.type.Function(H)){h=H
}else{var K=e.get.elements(H)[0];
if(K){while(K.parentNode.hasAttribute(d)){K=K.parentNode
}var M=z.vertical?"top":"left",J=e.get.offset(z.container),I=e.get.offset(K);
if(!p){J[M]-=G.scrollPos()
}G.scrollTo(I[M]-J[M],L)
}else{r(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",H)
}}}}return G
};
this.scrollPos=function(H){if(!arguments.length){return g.call(G)
}else{if(e.type.Function(H)){g=H
}else{r(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.")
}}return G
};
this.info=function(I){var H={size:v,vertical:z.vertical,scrollPos:l,scrollDirection:i,container:z.container,isDocument:p};
if(!arguments.length){return H
}else{if(H[I]!==undefined){return H[I]
}else{r(1,'ERROR: option "'+I+'" is not available');
return
}}};
this.loglevel=function(H){if(!arguments.length){return z.loglevel
}else{if(z.loglevel!=H){z.loglevel=H
}}return G
};
this.enabled=function(H){if(!arguments.length){return E
}else{if(E!=H){E=!!H;
G.updateScene(F,true)
}}return G
};
this.destroy=function(H){window.clearTimeout(y);
var I=F.length;
while(I--){F[I].destroy(H)
}z.container.removeEventListener("resize",A);
z.container.removeEventListener("scroll",A);
e.cAF(D);
r(3,"destroyed "+n+" (reset: "+(H?"true":"false")+")");
return null
};
x();
return G
};
var a={defaults:{container:window,vertical:true,globalSceneOptions:{},loglevel:2,refreshInterval:100}};
b.Controller.addOption=function(g,f){a.defaults[g]=f
};
b.Controller.extend=function(g){var f=this;
b.Controller=function(){f.apply(this,arguments);
this.$super=e.extend({},this);
return g.apply(this,arguments)||this
};
e.extend(b.Controller,f);
b.Controller.prototype=f.prototype;
b.Controller.prototype.constructor=b.Controller
};
b.Scene=function(o){var p="ScrollMagic.Scene",r="BEFORE",x="DURING",D="AFTER",l=c.defaults;
var k=this,B=e.extend({},l,o),I=r,v=0,L={start:0,end:0},N=0,J=true,h,u;
var A=function(){for(var P in B){if(!l.hasOwnProperty(P)){s(2,'WARNING: Unknown option "'+P+'"');
delete B[P]
}}for(var O in l){E(O)
}i()
};
var f={};
this.on=function(O,P){if(e.type.Function(P)){O=O.trim().split(" ");
O.forEach(function(Q){var T=Q.split("."),S=T Supplied callback for '"+O+"' is not a valid function!")
}return k
};
this.off=function(O,P){if(!O){s(1,"ERROR: Invalid event name supplied.");
return k
}O=O.trim().split(" ");
O.forEach(function(Q,R){var U=Q.split("."),T=U[0],S=U[1]||"",V=T==="*"?Object.keys(f):[T];
V.forEach(function(W){var Z=f[W]||[],X=Z.length;
while(X--){var Y=Z[X];
if(Y&&(S===Y.namespace||S==="*")&&(!P||P==Y.callback)){Z.splice(X,1)
}}if(!Z.length){delete f[W]
}})
});
return k
};
this.trigger=function(O,T){if(O){var S=Ospace){V.callback.call(k,new evel"&&O.what!=el>=P){Array.prototype.splice.call(arguments,1,0,"("+p+")unctionne(k)
}u=O;
i();
dScene(k);
efined;
O.removeScenetPos:L.return v
}else{var V=false,Q=I,U=u?u.info("scrollDirectiof(B.duration===0){Ver");
O(Q===r?"start":"end")
}}O("progress");
if(P){if(I!==x){O(I===r?"start":"end");
O("leave")
}}}return k
}};
var q=function(){L={start:N+B.offset};
if(u&&B.triggerElement){L.start-=u.info("size")*B.triggerHook
}L.end=L.[O]});
k.trigger("shift",{reason:O})
}}};
var M=function(S){var Q=0,V=B.triggerElement;
if(u&&(V||N>0)){if(V){if(V.parentNode){var O=u.info(),R=e.get.offset(O.container),U=O.vertical?"top":"left";
while(V.parentNode.hasAttribute(d)){V=V.parentNode
}var P=e.get.offset(V);
if(!O.isDocument){R[U]-=u.scrollPos()
}Q=P[U]-R[U]
}else{s(2,"WARNING: triggerElement was remo!S){k.trigger("sh)){h=Q;
try{Q=parseFloat(h.call(k))
}catch(P){Q=-1
}}Q=parseFloat(Q);
if(!e.type.Number(Q)||Q<0){if(h){h=undefined;
throw ['Invalid return value of supplied function for option "duration":',Q]
}else{throw ['Invalid value for option "duration":',Q]
}}return Q
}});
var i=function(O){O=arguments.length?[O]:Object.keys(F);
O.forEach(function(R,Q){var S;
if(F[R]){try{S=F[R](B[R])
}catch(T){S=l[R];
var P=e.type.String(T)?[T]:T;
if(e.type.Array(P)){P[0]="ERROR: "+P[0];
P.unshift(1);
s.apply(this,P)
}else{s(1,"ERROR: Problem executing validation callback for option '"+R+"':",T.message)
}}finally{B[R]=S
}}})
};
var g=function(O,Q){var R=false,P=B[O];
if(B[O]!=Q){B[O]=Q;
i(O);
R=P!=B[O]
}return R
};
var E=function(O){if(!k[O]){k[O]=function(P){if(!arguments.length){return B[O]
}else{if(O==="duration"){h=undefined
}if(g(O,P)){k.trigger("change",{what:O,newval:B[O]});
if(c.shifts.indexOf(O)>-1){k.trigger("shift",{reason:O})
}}}return k
}
}};
this.controller=function(){return u
};
this.stturn L.start
};
this.triggerPosition=function(){var O=B.offset;
if(u){if(B.triggerElement){O+=N
}else{O+=u.info("size")*k.triggerHook()
}}return O
};
var w,K;
k.on("shift.internal",function(P){var O=P.reason==="duration";
if((I===D&&O)||(I===x&&B.duration===0)){C()
}if(O){z()
}}).on("progress.internal",function(O){C()
}).on("add.internal",function(O){z()),R=K.spon:"fixed"tion*10)/10;
P[Q.vertical?"top":"left"]+=O;
e.css(K.spacer.firstChild,{top:P.top,left:P.left})
}else{var T={position:K.inFlow?"relative":"absolute",top:0,left:0},S=e.css(R,"position")!=T.position;
if(!K.pushFollowers){T[Q.vertical?"top":"left"]=B.duration*v
}else{if(B.duration>0){if(I===D&&parseFloat(e.css(K.spacer,"padding-top"))===0){S=true
}else{if(I===r&&parseFloat(e.css(K.spacer,"padding-bottom"))===0){S=true
}}}}e.css(R,T);
if(S){z()
}}}};
var z=function(){if(w&&u&&K.inFlow){var U=(I===D),T=(I===r),P=(I===x),O=u.info("vertical"),Q=K.spacer.firstChild,S=e.isMarginCollapseType(e.css(K.spacer,"display")),R={};
if(K.relSize.width||K.relSize.autoFullWidth){if(P){e.css(w,{width:e.get.width(K.spacer)})
}else{e.css(w,{width:"100%"})
}}else{R["min-width"]=e.get.width(O?w:Q,true,true);
R.width=P?R["min-width"]:"auto"
}if(K.relSize.height){if(P){e.css(w,{height:e.get.height(K.spacer)-(K.pushFollowers?B.duration:0)})
}else{e.css(w,{height:"100%"})
}}else{R["min-height"]=e.get.height(O?Q:w,true,!S);
R.height=P?R["min-height"]:"auto"
}if(K.pushFollowers){R["padding"+(O?"Top":"Left")]=B.duration*v;
R["padding"+(O?"Bottom":"Right")]=B.duration*(1-v)
}e.css(K.spacer,R)
}};
var G=function(){if(u&&w&&I===x&&!u.info("isDocument")){C()
}};
var H=function(){if(u&&w&&I===x&&(((K.relSize.width||K.relSize.autoFullWidth)&&e.get.width(window)!=e.get.width(K.spacer.parentNode))||(K.relSize.height&&e.get.height(window)!=e.get.height(K.spacer.parentNode)))){z()
}};
var t=function(O){if(u&&w&&I===x&&!u.info("isDocument")){O.preventDefault();
u._setScrollPos(u.info("scrollPos")-((O.wheelDelta||O[u.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||-O.detail*30))
}};
this.setPin=function(U,R){var V={pushFollowers:true,spacerClass:"scrollmagic-pin-spacer"};
var aa=R&&R.hasOwnProperty("pushFollowers");
R=e.extend({},V,R);
U=e.get.elements(U)[0];
if(!U){s(1,"ERROR calling method 'setPin()': Invalid pin element supplied.");
return k
}else{if(e.css(U,"position")==="fixed"){s(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
return k
}}if(w){if(w===U){return k
}else{k.removePin()
}}w=U;
var T=w.parentNode.style.display,Q=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];
w.parentNode.style.display="none";
var O=e.css(w,"position")!="absolute",Y=e.css(w,Q.concat(["display"])),X=e.css(w,["width","height"]);
w.parentNode.style.display=T;
if(!O&&R.pushFollowers){s(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
R.pushFollowers=false
}window.setTimeout(function(){if(w&&B.duration===0&&aa&&R.pushFollowers){s(2,"WARNING: pushFollowers =",true,"has no effect, when scene duration is 0.")
}},0);
var Z=w.parentNode.insertBefore(document.createElement("div"),w),P=e.extend(Y,{position:O?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});
if(!O){e.extend(P,e.css(w,["width","height"]))
}e.css(Z,P);
Z.setAttribute(d,"");
e.addClass(Z,R.spacerClass);
K={spacer:Z,relSize:{width:X.width.slice(-1)==="%",height:X.height.slice(-1)==="%",autoFullWidth:X.width==="auto"&&O&&e.isMarginCollapseType(Y.display)},pushFollowers:R.pushFollowers,inFlow:O};
if(!w.___origStyle){w.___origStyle={};
var W=w.style,S=Q.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);
S.forEach(function(ab){w.})
}if(K.relSize.height){e.s(w,{position:O?"ro"});
if(K.rmozBoxSizingEventListener("",t);
s(3,"added==x){C(true)
}if(R||!u){var P=K.spacer.firstChild;
if(P.hasAttribute(d)){var Q=K.spacer.style,O=["margin","marginLeft","marginRight","marginTop","marginBottom"],S={};
O.forEach(function(T){S[T]=Q[T]||""
});
e.css(P,S)
}K.spacer.parentNode.insertBefore(P,K.spacer);
K.spacer.parentNode.removeChild(K.spacer);
if(!w.parentNode.hasAttribute(d)){e.css(w,w.___origStyle);
delete w.___origStyle
}}window.removeEventListener("scroll",G);
window.removeEventListener("resize",G);
window.removeEventListener("resize",H);
w.removeEventListener("mousewheel",t);
w.removeEventListener("DOMMouseScroll",t);
w=undefined;
s(3,"removed pin (reset: "+(R?"true":"false")+")")
}return k
};
var y,m=[];
k.on("destroy.internal",function(O){k.removeClassToggle(O.reset)
});
this.setClassToggle=function(Q,P){var O=e.get.elements(Q);
if(?"elemen}if(m.length>0){k.removeClassToggle()
}y=P;
m=O;
k.on("enter.internaS){var R=S.type==="enter"?e.addClass:e.removeClass;
m.forEach(function(U,T){R(U,y)
})
});
return k
};
this.removeClassToggle=function(O){if(O){m.forEach(function(Q,P){e.removeClass(Q,y)
})
}k.off("start.internal_class end.internal_class");
y=undefined;
m=[];
return k
};
A();
return k
};
var c={defaults:{duration:0,offset:0,triggerElement:undefined,triggerHook:0.5,reverse:true,loglevel:2},validate:{offset:function(f){f=parseFloat(f);
if(!e.type.Number(f)){throw ['Invalid value for option "offset":',f]
}return f
},triggerElement:function(g){g=g||undefined;
if(g){var f=e.get.elements(g)[0];
if(f&&f.parentNode){g=f
}else{throw ['Element defined in option "triggerElement" was not found:',g]
}}return g
},triggerHook:function(g){var f={onCenter:0.5,onEnter:1,onLeave:0};
if(e.type.Number(g)){g=Math.max(0,Math.min(parseFloat(g),1))
}else{if(g in f){g=f[g]
}else{throw ['Invalid value for option "triggerHook": ',g]
}}return g
},reverse:function(f){return !!f
},loglevel:function(f){f=parseInt(f);
if(!e.type.Number(f)||f<0||f>3){throw ['Invalid value for option "loglevel":',f]
}return f
}},shifts:["duration","offset","triggerHook"]};
b.Scene.addOption=function(i,g,f,h){if(!(i in c.defaults)){c.defaults[i]=g;
c.validate[i]=f;
if(h){c.shifts.push(i)
}}else{b._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+i+"', because it already exists.")
}};
b.Scene.extend=function(g){var f=this;
b.Scene=function(){f.apply(this,arguments);
this.$super=e.extend({},this);
return g.apply(this,arguments)||this
};
e.extend(b.Scene,f);
b.Scene.prototype=f.prototype;
b.Scene.prototype.constructor=b.Scene
};
b.Event=function(h,g,j,i){i=i||{};
for(var f in i){this[f]=i[f]
}this.type=h;
this.target=this.currentTarget=j;
this.namespace=g||"";
this.timeStamp=this.timestamp=Date.now();
return this
};
var e=b._util=(function(q){var j={},o;
var u=function(i){return parseFloat(i)||0
};
var s=function(i){return i.currentStyle?i.currentStyle:q.getComputedStyle(i)
};
var k=function(A,y,w,i){y=(y===document)?q:y;
if(y===q){i=false
}else{if(!n.DomElement(y)){return 0
}}A=A.charAt(0).toUpperCase()+A.substr(1).toLowerCase();
var z=(w?y["offset"+A]||y["outer"+A]:y["client"+A]||y["inner"+A])||0;
if(w&&i){var x=s(y);
z+=A==="Height"?u(x.marginTop)+u(x.marginBottom):u(x.marginLeft)+u(x.marginRight)
}return z
};
var p=function(i){return i.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(w){return w[1].toUpperCase()
})
};
j.extend=function(w){w=w||{};
for(o=1;
o<arguments.length;
o++){if(!arguments[o]){continue
}for(var i in arguments[o]){if(arguments[o].hasOwnProperty(i)){w[i]=arguments[o][i]
}}}return w
};
j.isMarginCollapseType=function(i){return["block","flex","list-item","table","-webkit-box"].indexOf(i)>-1
};
var g=0,v=["ms","moz","webkit","o"];
var h=q.requestAnimationFrame;
var t=q.cancelAnimationFrame;
for(o=0;
!h&&o<v.length;
++o){h=q[v[o]+"RequestAnimationFrame"];
t=q[v[o]+"CancelAnimationFrame"]||q[v[o]+"CancelRequestAnimationFrame"]
}if(!h){h=function(y){var i=new Date().getTime(),w=Math.max(0,16-(i-g)),x=q.setTimeout(function(){y(i+w)
},w);
g=i+w;
return x
}
}if(!t){t=function(i){q.clearTimeout(i)
}
}j.rAF=h.bind(q);
j.cAF=t.bind(q);
var r=["error","warn","log"],l=q.console||{};
l.log=l.log||function(){};
for(o=0tHours()).slice(-2)+":"+("0"+w.getMinutes()).slice(-2)+":"+("0"+w.getSeconds()).slice(-2)+":"+("00"+w.getMilliseconds()).slice(-3),A=r[x-1],i=Array.prototype.splice.call(arguments,1),y=Function.prototype.bind.call(l[A],l);
i.unshift(z);
y.apply(l,i)
};
var n=j.type=function(i){return Objmber=functseFloat(i)+1)nction"?i instanc){try{x=d}else{if( i.scrollLeft==="number")?i.scrollLeft:q.pageXOffset||0
};
m.width=function(x,w,i){return k("width",x,w,i)
};
m.height=function(x,w,i){
y.top=w.top;sList.add(w).join("|")+"(\\b|$)","gi")," ")
}}};
j.css=function(y,i){if(n.String(i)){return s(y)[p(i)]
}else{if(n.Array(i)){var z={},x=s(y);
i.forEach(function(C,B){z[C]=x[p(C)]
});
return z
}else{for(var w in i){var A=i[w];
if(A==parseFloat(A)){A+="px"
}y.style[p(w)]=A
}}}};
return j
}(window||{}));
b.Scene.prototype.addIndicators=function(){b._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js");
return this
};
b.Scene.prototype.removeIndicators=function(){b._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js");
return this
};
b.Scene.prototype.setTween=function(){b._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js");
return this
};
b.Scene.prototype.removeTween=function(){b._util.log(1,"(ScrollMagic.Scene) -> ERROR callinsap.js");
ris
};
b.Scene.prototype.removeVelocity=function(){b._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js");
return this
};
return b
}));
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock meship.
 * 
 * @auth{_gsScope._gsDenction(g,c,h){var o=function(r){var p=[],q=r.length,s;
for(s=0;
s!==q;
p.push(r[s++])){}return p
},d=function(u,q,r){var t=u.cycle,s,v;
for(s in t){v=t[s];
u[s]=(typeof(v)==="function")?v(r,q[r]):v[r%v.length]
}delete u.cycle
},l=function(r,q,p){h.call(this,r,q,p);
this._cycle=0;
this._yoyo=(thon="2.0.2";
b.constructor=l|0;
this._repeatDelay=this.vars.repeatDelay||0;
this._yoyoEase=null;
this._uncache(true);
return h.prototype.invalidate.call(this)
};
b.updateTo=function(w,u){var s=this.ratio,t=this.vars.immediateRender||w.immediateRender,r;
if(u&&this._startTime<this._timeline._time){this._startTime=this._timeline._time;
this._uncache(false);
if(this._gc){this._enabled(true,false)
}else{this._timeline.insert(this,this._startTime-this._delay)
}}for(r in w){this.vars[r]=w[r]
}if(this._initted||t){if(u){this._initted=false;
if(t){this.render(0,true,true)
}}else{if(this._gc){this._enabled(true,false)
}if(this._notifyPluginsOfEnabled&&this._firstPT){h._onPluginEvent("_onDisable",this)
}if(this._time/this._duration>0.998){var q=this._totalTime;
this.render(0,true,false);
this._initted=false;
this.render(q,true,false)
}else{this._initted=false;
this._init();
if(this._time>0||t){var v=1/(1-s),y=this._firstPT,x;
while(y){x=y.s+y.c;
y.c*=v;
y.s=x-y.c;
y=y._next
}}}}}return this
};
b.render=function(y,z,s){if(!this._initted){if(this._duration===0&&this.vars.repeat){this.invalidate()
}}var H=(!this._dirty)?this._totalDuration:this.totalDuration(),w=this._time,C=this._totalTime,B=this._cycle,p=this._duration,E=this._rawPrevTime,x,v,F,G,D,t,u,A,q;
if(y>=H-1e-7&&y>=0){this._totalTime=H;
this._cycle=this._repeat;
if(this._yoyo&&(this._cycle&1)!==0){this._time=0;
this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0
}else{this._time=p;
this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1
}if(!this._reversed){x=true;
v="onComplete";
s=(s||this._timeline.autoRemoveChildren)
}if(p===0){if(this._initted||!this.vars.lazy||s){if(this._startTime===this._timeline._duration){y=0
}if(E<0||(y<=0&&y>=-1e-7)||(E===f&&this.data!=="isPause")){if(E!==y){s=true;
if(E>f){v="onReverseComplete"
}}}this._rawPrevTime=A=(!z||y||E===y)?y:f
}}}else{if(y<1e-7){this._totalTime=this._time=this._cycle=0;
this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;
if(C!==0||(p===0&&E>0)){v="onReverseComplete";
x=this._reversed
}if(y<0){this._active=false;
if(p===0){if(this._initted||!this.vars.lazy||s){if(E>=0){s=true
}this._rawPrevTime=A=(!z||y||E===y)?y:f
}}}if(!this._initted){s=true
}}else{this._totalTime=this._time=y;
if(this._repeat!==0){G=p+this._repeatDelay;
this._cycle=(this._totalTime/G)>>0;
if(this._cycle!==0){if(this._cycle===this._totalTime/G&&C<=y){this._cycle--
}}this._time=this._totalTime-(this._cycle*G);
if(this._yoyo){if((this._cycle&1)!==0){this._time=p-this._time;
q=this._yoyoEase||this.vars.yoyoEase;
if(q){if(!this._yoyoEase){if(q===true&&!this._initted){q=this.vars.ease;
this._yoyoEase=q=!q?h.defaultEase:(q instanceof Ease)?q:(typeof(q)==="function")?new Ease(q,this.vars.easeParams):Ease.map[q]||h.defaultEase
}else{this._yoyoEase=q=(q===true)?this._ease:(q instanceof Ease)?q:Ease.map[q]
}}this.ratio=q?1-q.getRatio((p-this._time)/p):0
}}}if(this._time>p){this._time=p
}else{if(this._time<0){this._time=0
}}}if(this._easeType&&!q){D=this._time/p;
t=this._easeType;
u=this._easePower;
if(t===1||(t===3&&D>=0.5)){D=1-D
}if(t===3){D*=2
}if(u===1){D*=D
}else{if(u===2){D*=D*D
}else{if(u===3){D*=D*D*D
}else{if(u===4){D*=D*D*D*D
}}}}if(t===1){this.ratio=1-D
}else{if(t===2){this.ratio=D
}else{if(this._time/p<0.5){this.ratio=D/2
}else{this.ratio=1-(D/2)
}}}}else{if(!q){this.ratio=this._ease.getRatio(this._time/p)
}}}}if(w===this._time&&!s&&B===this._cycle){if(C!==this._totalTime){if(this._onUpdate){if(!z){this._callback("onUpdate")
}}}return
}else{if(!this._initted){this._init();
if(!this._initted||this._gc){return
}else{if(!s&&this._firstPT&&((this.vars.lazy!==false&&this._duration)||(this.vars.lazy&&!this._duration))){this._time=w;
this._totalTime=C;
this._rawPrevTime=E;
this._cycle=B;
m.lazyTweens.push(this);
this._lazy=[y,z];
return
}}if(this._time&&!x&&!q){this.ratio=this._ease.getRatio(this._time/p)
}else{if(x&&this._ease._calcEnd&&!q){this.ratio=this._ease.getRatio((this._time===0)?0:1)
}}}}if(this._lazy!==false){this._lazy=false
}if(!this._active){if(!this._paused&&this._time!==w&&y>=0){this._active=true
}}if(C===0){if(this._initted===2&&y>0){this._init()
}if(this._startAt){if(y>=0){this._startAt.render(y,true,s)
}else{if(!v){v="_dummyGS"
}}}if(this.vars.onStart){if(this._totalTime!==0||p===0){if(!z){this._callback("onStart")
}}}}F=this._firstPT;
while(F){if(F.f){F.t[F.p](F.c*this.ratio+F.s)
}else{F.t[F.p]=F.c*this.ratio+F.s
}F=F._next
}if(this._onUpdate){if(y<0){if(this._startAt&&this._startTime){this._startAt.render(y,true,s)
}}if(!z){if(this._totalTime!==C||v){this._callback("onUpdate")
}}}if(this._cycle!==B){if(!z){if(!this._gc){if(this.vars.onRepeat){this._callback("onRepeat")
}}}}if(v){if(!this._gc||s){if(y<0&&this._startAt&&!this._onUpdate&&this._startTime){this._startAt.render(y,true,s)
}if(x){if(this._timeline.autoRemoveChildren){this._enabled(false,false)
}this._active=false
}if(!z&&this.vars[v]){this._callback(v)
}if(p===0&&this._rawPrevTime===f&&A!==f){this._rawPrevTime=0
}}}};
l.to=function(r,q,p){return new l(r,q,p)
};
l.from=function(r,q,p){p.runBackwards=true;
p.im!=false&&s.immediaete.apply(C.on=C.cycle,B=(s in C){q[s]=C[s]rtAt[s]
}d(q.starstartAt=w;
u.immediateRender=(u.immediateRender!=false&&w.immediateRender!=false);
return l.staggerTo(q,v,u,t,s,p,r)
};
l.delayedCall=function(p,t,s,r,q){return new l(t,0,{delay:p,onComplete:t,onCompleteParams:s,callbackScope:r,onReverseComplete:t,onReverseCompleteParams:s,immediateRender:false,useFrames:q,overwrite:0})
};
l.set=function(q,p){return new l(q,0,p)
};
l.isTweening=function(p){return(h.getTweensOf(p,true).length>0)
};
var n=function(s,t){var p=[],r=0,q=s._first;p
},e=l.ne,p))
};
l.killAll=function(r,u,y,v){if(u==null){u=true
}if(y==null){y=true
}var w=e((v!=false)),s=w.length,q=(u&&y&&v),p,x,t;
for(t=0;
t<s;
t++){x=w[t];
if(q||(x instanceof c)||((p=(x.target===x.vars.onComplete))&&y)||(utweenLookup,r,v,x,u,q;
if(typeof(w)==="string"){w=h.selector(w)||w
}if(a(w)){w=o(w)
}if(k(w)){u=w.length;
while(--u>-1){l.killChildTweensOf(w[u],s)
}return
}r=[];
for(x in 
wn():this.totalTime(this.duration()*((this._yoyo&&(this._cycle&1)!==0)?1-q:q)+(this._cycle*(this._duration+this._repeatDelay)),p)
};
b.totalProgress=function(q,p){return(!arguments.length)?this._totalTime/this.totalDuration():this.totalTime(this.totalDuration()*q,p)
};
b.time=function(q,p){if(!arguments.length){return this._time
}if(this._dirty){this.totalDuration()
}if(q>this._duration){q=this._duration
}if(this._yoyo&&(this._cycle&1)!==0){q=(thiche(true)
};
b.yoyo=function(p){if(!arguments.length){return this._yoyo
}this._yoyo=p;
return this
};
return l
},true);
_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(i,f,k){var c=function(u){f.call(this,u);
this._labels={};
this.autoRemoveChildren=(this.vars.autoRemoveChildren===true);
this.smoothChildTiming=(this.vars.smoothChildTiming===true);
this._sortChildren=true;
this._onUpdate=this.vars.onUpdate;
var s=this.vars,w,t;
for(t in s){w=s[t];
if(m(w)){if(w.join("").indexOf("{self}")!==-1){s[t]=this._swapSelfInParams(w)
}}}if(m(s.tweens)){this.add(s.tweens,0,s.align,s.stagger)
}},fo;
d.kill()._gc=d._forcingPlayhead=d._hasPause=false;
d.to=function(v,u,t,p){var s=(t.repeat&&g.TweenMax)||k;
return u?this.add(new s(v,u,t),p):this.set(v,t,p)
};
d.from=function(u,t,s,p){return this.add(((s.repeat&&g.TweenMax)||k).from(u,t,s),p)
};
d.fromTo=function(v,u,w,t,p){var s=(t.repeat&&g.TweenMax)||k;
return u?this.add(s.fromTo(v,u,w,t),p):this.set(v,t,p)
};
d.staggerTo=function(z,v,A,s,y,B,t,u){var C=new c({onComplete:B,onCompleteParams:t,callbackScope:u,smoothChildTiming:this.smoothChildTiming}),w=A.cycle,p,x;
if(typeof(z)==="string"){z=k.selector(z)||z
}z=z||[];
if(b(z)){z=q(z)
}s=s||0;
if(s<0){z=q(z);
z.reverse();
s*=-1
}for(x=0;
x<z.length;
x++){p=n(A);
if(p.startAt){p.startAt=n(p.startAt);
if(p.startAt.cycle){e(p.startAt,z,x)
}}if(w){e(p,z,x);
if(p.duration!=null){v=p.duration;
delete p.duration
}}C.to(z[x],v,p,x*s)
}return this.add(C,y)
};
d.staggerFrom=function(t,y,x,w,s,v,p,u){x.immediateRender=(x.immediateRender!=false);
x.runBackwards=true;
return this.staggerTo(t,y,x,w,s,v,p,u)
};
d.staggerFromTo=function(x,v,s,z,p,w,y,t,u){z.startAt=s;
z.immediateRender=(z.immediateRender!=false&&s.immediateRender!=false);
return this.staggerTo(x,v,z,p,w,y,t,u)
};
d.call=function(u,t,s,p){return this.add(k.delayedCall(0,u,t,s),p)
};
d.set=function(t,s,p){p=this._parseTimeOrLabel(p,0,true);
if(s.immediateRender==null){s.immediateRender=(p===this._time&&!this._paused)
}return this.add(new k(t,0,s),p)
};
c.exportRoot=function(y,w){y=y||{};
if(y.smoothChildTiming==null){y.smoothChildTiming=true
}var s=new c(y),p=s._timeline,t,x,u,v;
if(w==null){w=true
}p._remove(s,true);
s._startTime=0;
s._rawPrevTime=s._time=s._totalTime=p._time;
u=p._first;
while(u){v=u._next;
if(!w||!(u instanceof k&&u.target===u.vars.onComplete)){x=u._startTime-u._delay;
if(x<0){t=1
}s.add(u,x)
}u=v
}p.add(s,0);
if(t){s.totalDuration()
}return s
};
d.add=function(z,x,y,p){var t,u,w,s,A,v;
if(typeof(x)!=="number"){x=this._parseTimeOrLabel(x,0,true,z)
}if(!(z instanceof i)){if((z instanceof Array)||(z&&z.push&&m(z))){y=y||"normal";
p=p||0;
t=x;
u=z.length;
for(w=0;
w<u;
w++){if(m(s=z[w])){s=new c({tweens:s})
}this.add(s,t);
if(typeof(s)!=="string"&&typeof(s)!=="function"){if(y==="sequence"){t=s._startTime+(s.totalDuration()/s._timeScale)
}else{if(y==="start"){s._startTime-=s.delay()
}}}t+=p
}return this._uncache(true)
}else{if(typeof(z)==="string"){return this.addLabel(z,x)
}else{if(typeof(z)==="function"){z=k.delayedCall(0,z)
}else{throw ("Cannot add "+z+" into the timeline; it is not a tween, timeline, function, or string.")
}}}}f.prototype.add.call(this,z,x);
if(z._time){t=Math.max(0,Math.min(z.totalDuration(),(this.rawTime()-z._startTime)*z._timeScale));
if(Math.abs(t-z._totalTime)>0.00001){z.render(t,false,false)
}}if(this._gc||this._time===this._duration){if(!this._paused){if(this._duration<this.duration()){A=this;
v=(A.rawTime()>z._startTime);
while(A._timeline){if(v&&A._timeline.smoothChildTiming){A.totalTime(A._totalTime,true)
}else{if(A._gc){A._enabled(true,false)
}}A=A._timeline
}}}}return this
};
d.remove=function(t){if(t instanceof i){this._remove(t,false);
var p=t._timeline=t.vars.useFrames?i._rootFramesTimeline:i._rootTimeline;
t._startTime=(t._paused?t._pauseTime:p._time)-((!t._reversed?t._totalTime:t.totalDuration()-t._totalTime)/t._timeScale);
return this
}else{if(t instanceof Array||(t&&t.push&&m(t))){var s=t.length;
while(--s>-1){this.remove(t[s])
}return this
}else{if(typeof(t)==="string"){return this.removeLabel(t)
}}}return this.kill(null,t)
};
d._rvar s=this._last{if(w&&(}p=(typeo;
if(t===-1){if(this._labels[v]==null){return u?(this._labels[v]=p+s):s
}return this._labels[v]+s
}s=p0,u):p
}else{if(v==null){v=p
}}return Number(v)+s
};
d.seek=function(p,s){return this.totalTime((typeof(p)==="number")?p:this._parseTimeOrLabel(p),(s!==false))
};
d.stop=function(){return this.paused(true)
};
d.gotoAndPlay=function(p,s){return this.play(p,s)
};
d.gotoAndStop=function(p,s){return this.pause(p,s)
};
d.render=function(u,F,t){if(this._gc){this._enabled(true,false)
}var p=this._time,z=(!this._dirty)?this._totalDuration:this.totalDuration(),B=this._startTime,x=this._timeScale,v=this._paused,E,A,y,D,s,C,w;
if(p!==this._time){u+=this._time-p
}if(u>=z-1e-7&&u>=0){this._totalTime=this._time=z;
if(!this._reversed){if(!this._hasPausedChild()){A=true;
D="onComplete";
s=!!this._timeline.autoRemoveChildren;
if(this._duratPrevTime<0||this._rawPrevTime===h){if(this._rawPrevTime!==u&&this._first){s=true;
if(this._rawPrevTime>h){D="onReverseComplete"
}}}}}}this._rawPrevTime=(this._duration||!F||u||this._rawPrevTime===u)?u:h;
u=z+0.0001
}else{if(u<1e-7){this._totalTime=this._time=0;
if(p!==te";
A=this._reversed
}if(u<0){this._active=false;
if(this._timeline.autoRemoveChildren&&this._reversed){s=A=true;
D===0&&t){C=E
}}E=E._prev
}}if(C){this._time=u=C._startTime;
this._totalTime=u+(tonStart){if(this._time!==0||!this._duration){if(!F){this._callback("onStart")
}}}}w=this._time;
if(w>=p){E=this._first;
while(E){y=E._next;
if(w!==this._time||(this._paused&&!v)){break
}else{if(E._active||(E._startTime<=w&&!E._paused&&!E._gc)){if(C===E){this.pause()
}if(!E._reversed){E.render((u-E._startTime)*E._timeScale,F,t)
}else{E.render(((!E._dirty)?E._totalDuration:E.totalDuration())-((u-E._startTime)*E._timeScale),F,t)
}}}E=y
}}else{E=this._last;
while(E){y=E._prev;
if(w!==this._time||(this._paused&&!v)){break
}else{if(E._active||(E._startTime<=p&&!E._paused&&!E._gc)){if(C===E){C=E._prev;
while(C&&C.endTime()>this._time){C.render((C._reversed?C.totalDuration()-((u-C._startTime)*C._timeScale):(u-C._startTime)*C._timeScale),F,t);
C=C._prev
}C=null;
this.pause()
}if(!E._reversed){E.render((u-E._startTime)*E._timeScale,F,t)
}else{E.render(((!E._dirty)?E._totalDuration:E.totalDuration())-((u-E._startTime)*E._timeScale),F,t)
}}}E=y
}}if(this._onUpdate){if(!F){if(a.length){l()
}this._callback("onUpdate")
}}if(D){if(!this._gc){if(B===this._startTime||x!==this._timeScale){if(this._time===0||z>=this.totalDuration()){if(A){if(a.length){l()
}if(this._timeline.autoRemoveChildren){this._enabled(false,false)
}this._active=false
}if(!F&&this.vars[D]){this._callback(D)
}}}}}};
d._hasPausedChild=function(){var p=this._first;
while(p){if(p._paused||((p instanceof c)&&p._hasPausedChild())){return true
}p=p._next
}return false
};
d.getChildren=function(x,w,u,v){v=v||-9999999999;
var p=[],t=this._first,s=0;
while(t){if(t._startTime<v){}else{if(t instanceof k){if(w!==false){p[s++]=t
}}else{if(u!==false){p[s++]=t
;
s=v.length;
while(--s>-1){if(v[s].timeline===this||(x&&this._contains(v[s]))){p[t++]=v[s]
}}if(u){this._enabled(false,true)
}return p
};
d.recent=function(){return this._recent
};
d._contains=function(s){var p=s.timeline;
while(p){if(p===this){return true
}p=p.timeline
}return false
};
d.shiftChildren=function(t,w,u){u=u||0;
var s=this._first,x=this._labels,v;
while(s){if(s._startTime>=u){s._startTime+=t
}s=s._next
}if(w){for(v in x){if(x[v]>=u){x[v]+=t
}}}return this._uncache(true)
};
d._kill=function(u,t){if(!u&&!t){return this._enabled(false,false)
}var s=(!t)?this.getChildren(true,true,false):this.getTweensOf(t),p=s.length,v=false;
while(--p>-1){if(s[p]._kill(u,t)){v=true
}}return v
};
d.clear=function(t){var s=this.getChildren(false,true,true),p=s.length;
this._time=this._totalTime=0;
while(--p>-1){s[p]._enabled(false,false)
}if(t!==false){this._labels={}
}return this._uncache(true)
};
d.invalidate=function(){var p=this._first;
while(p){p.invalidate();
p=p._next
}return i.prototype.invalidate.call(this)
};
d._enabled=function(s,p){if(s===this._gc){var t=this._first;
while(t){t._enabled(s,true);
t=t._next
}}return f.prototype._enabled.call(this,s,p)
};
d.totalTime=function(t,s,p){this._forcingPlayhead=true;
var u=i.prototype.totalTime.apply(this,arguments);
this._forcingPlayhead=false;
return u
};
d.duration=function(p){if(!arguments.length){if(this._dirty){this.totalDuration()
}return this._duration
}if(this.duration()!==0&&p!==0){this.timeScale(this._duration/p)
}return this
};
d.totalDuration=function(w){if(!arguments.length){if(this._dirty){var s=0,u=this._last,p=999999999999,v,t;
while(u){v=u._prev;
if(u._dirty){u.totalDuration()
}if(u._startTime>p&&this._sortChildren&&!u._paused&&!this._calculatingDuration){this._calculatingDuration=1;
this.add(u,u._startTime-u._delay);
this._calculatingDuration=0
}else{p=u._startTime
}if(u._startTime<0&&!u._paused){s-=u._startTime;
if(this._timeline.smoothChildTiming){this._startTime+=u._startTime/this._timeScale;
this._time-=u._startTime;
this._totalTime-=u._startTime;
this._rawPrevTime-=u._startTime
}this.shiftChildren(-u._startTime,false,-9999999999);
p=0
}t=u._startTime+(u._totalDuration/u._timeScale);
if(t>s){s=t
}u=v
}this._duration=this._totalDuration=s;
this._dirty=false
}return this._totalDuration
}return(w&&this.totalDuration())?this.timeScale(this._totalDuration/w):this
};
d.paused=function(s){if(!s){var p=this._first,t=this._time;
while(p){if(p._startTime===t&&p.data==="isPause"){p._rawPrevTime=0
}p=p._next
}}return i.prototype.paused.apply(this,arguments)
};
d.usesFrames=function(){var p=tthis._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(p)-this._startTime)*this._timeScale
};
return c
},true);
_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(b,g,i){var k=function(l){b.call(this,l);
this._repeat=this.vars.repeat||0;
this._repeatDelay=this.vars.repeatDelay||0;
this._cycle=0;
this._yoyo=(this.vars.yoyo===true);
this._dirty=true
},f=1e-10,j=g._internals,a=j.lazyTweens,h=j.lazyRender,e=_gsScope._gsDefine.globals,d=new i(null,null,1,0),c=k.prototype=new b();
c.constructor=k;
c.kill()._gc=false;
k.version="2.0.2";
c.invalidate=function(){this._yoyo=(this.vars.yoyo===true);
this._repeat=this.vars.repeat||0;
this._repeatDelay=this.vars.repeatDelay||0;
this._uncache(true);
return b.prototype.invalidate.call(this)
};
c.addCallback=function(o,l,n,m){return this.add(g.delayedCall(0,o,n,m),l)
};
c.removeCallback=function(p,l){if(p){if(l==null){this._kill(null,p)
}else{var m=this.getTweensOf(p,false),n=m.length,o=this._parseTimeOrLabel(l);
while(--n>-1){if(m[n]._startTime===o){m[n]._enabled(false,false)
}}}}return this
};
c.removePause=function(l){return this.removeCallback(b._internals.pauseCallback,l)
};
c.tweenTo=function(l,r){r=r||{};
var s={ease:d,useFrames:this.usesFrames(),immediateRender:false,lazy:false},m=(r.repeat&&e.TweenMax)||g,q,o,n;
for(o in r){s[o]=r[o]
}s.time=this._pared(true);
if(n.vars.time!==n.target.time()&&q===n.duration()&&!n.isFromTo){n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale).render(n.time(),true,true)
}if(r.onStart){r.onStart.apply(r.onStartScope||r.callbackScope||n,r.onStartParams||[])
}};
return n
};
c.tweenFromTo=function(l,o,n){n=n||{};
l=this._parseTimeOrLabel(l);
n.startAt={onComplete:this.seek,onCompleteParams:[l],callbackScope:this};
n.immediateRender=(n.immediateRender!==false);
var m=this.tweenTo(o,n);
m.isFromTo=1;
return m.duration((Math.abs(m.vars.time-l)/this._timeScale)||0.001)
};
c.render=function(w,A,m){if(this._gc){this._enabled(true,false)
}var t=this._time,K=(!this._dirty)?this._totalDuration:this.totalDuration(),H=this._duration,D=this._totalTime,s=this._startTime,l=this._timeScale,E=this._rawPrevTime,I=this._paused,C=this._cycle,p,v,F,r,o,G,u,y;
if(t!==this._time){w+=this._time-t
}if(w>=K-1e-7&&w>=0){if(!this._locked){this._totalTime=K;
this._cycle=this._repeat
}if(!this._reversed){if(!this._hasPausedChild()){v=true;
r="onComplete";
o=!!this._timeline.autoRemoveChildren;
if(this._duration===0){if((w<=0&&w>=-1e-7)||E<0||E===f){if(E!==w&&this._first){o=true;
if(E>f){r="onReverseComplete"
}}}}}}this._rawPrevTime=(thif(this._timeline.autoRemoveChildren&&this._reversed){o=v=true;
r="onReverseComplete"
}else{if(E>=0&&this._first){o=true
}}this._rawPrevTime=w
}else{this._s._initted){o=true
}}}else{if(H===0&&E<0){o=true
}this._time=this._rawPrevTime=w;
if(!this._locked){this._totalTime=w;
if(this._repeat!==0){G=H+this._repeatDelay;
this._cycle=(this._totalTime/G)>>0;
if(this._cycle!==0){if(this._cycle===this._totalTime/G&&D<=w){this._cycle--
}}this._time=this._totalTime-(this._cycle*G);
if(this._yoyo){if((this._cycle&1)!==0){this._time=H-this._time
}}if(this._t0.0001
}else{if(this._time<0){this._time=w=0
}else{w=this._time
}}}}if(this._hasPause&&!this._forcingPlayhead&&!A){w=this._time;
if(w>=t||(this._repeat&&C!==this._cycle)){p=this._first;
while(p&&p._startTime<=w&&!u){if(!p._duration){if(p.data==="isPause"&&!p.ratio&&!(p._startTime===0&&this._rawPrevTime===0)){u=p
}}p=p._next
}}else{p=this._last;
while(p&&p._startTime>=w&&!u){if(!p._duration){if(p.data==="isPause"&&p._rawPrevTime>0){u=p
}}p=p._prev
}}if(u&&u._startTime<H){this._time=w=u._startTime;
this._totalTime=w+(this._cycle*(this._totalDuration+this._repeatDelay))
}}}}if(this._cycle!==C){if(!this._locked){var J=(this._yoyo&&(C&1)!==0),B=(J===(this._yoyo&&(this._cycle&1)!==0)),z=this._totalTime,q=this._cycle,x=this._rawPrevTime,n=this._time;
this._totaif(this.vars.onRepeat){this._cycle=q;
this._locked=false;
this._callback("onRepeat")
}}}if(t!==this._time){return
}if(B){this._cycle=C;
this._locked=true;
t=(J)?H+0.0001:-0.0001;
this.render(t,true,false)
}this._locked=false;
if(this._paused&&!I){return
}this._time=n;
this._totalTime=z;
this._cycle=q;
this._rawPrevTime=x
}}if((this._time===t||!this._first)&&!m&&!o&&!u){if(D!==this._totalTime){if(this._onUpdate){if(!A){this._callback("onUpdate")
}}}return
}else{if(!this._initted){this._initted=true
}}if(!this._active){if(!this._paused&&this._totalTime!==D&&w>0){this._active=true
}}if(D==}}}y=this._time;
i_reversed?u.totalk((this._time===0||K>=this.totalDuration()){if(v){if(a.length){h()
}if(this._timeline.autoRemoveChildren){this._enabled(false,false)
}this._active=false
}if(!A&&this.vars[r]){this._callback(r)
}}}}}}};
c.getActive=function(r,p,q){if(r==null){r=true
}if(p==null){p=true
}if(q==null){q=false
}var s=[],t=this.getChildren(r,p,q),m=0,n=t.length,o,u;
for(o=0;
o<n;
o++){u=t[o];
if(u.isActive()){s[m++]=u
}}return s
};
c.getLabelAfter=function(o){if(!o){if(o!==0){o=this._time
}}var p=this.getLabelsArray(),m=p.length,n;
for(n=0;
n<m;
n++){if(p[n].time>o){return p[n].name
}}return null
};
c.getLabelBefore=function(m){if(m==null){m=this._time
}var n=this.getLabelsArray(),l=n.length;
while(--l>-1){if(n[l].time<m){return n[l].name
}}return null
};
c.getLabelsArray=function(){var l=[],m=0,n;
for(n in this._labels){l[m++]={time:this._labels[n],name:n}
}l.sort(function(p,o){return p.time-o.time
});
return l
};
c.invalidate=function(){this._locked=false;
return b.prototype.invalidate.call(this)
};
c.progress=function(m,l){return(!arguments.length)?(this._time/this.duration())||0:this.totalTime(this.duration()*((this._yoyo&&(this._cycle&1)!==0)?1-m:m)+(this._cycle*(this._duration+this._repeatDelay)),l)
};
c.totalProgress=function(m,l){return(!arguments.length)?(this._totalTime/this.totalDuration())||0:this.totalTime(this.totalDuration()*m,l)
};
c.totalDuration=function(l){if(!arguments.length){if(this._dirty){b.prototype.totalDuration.call(this);
this._totalDuration=(this._repeat===-1)?999999999999:this._duration*(this._repeat+1)+(this._repeatDelay*this._repeat)
}return this._totalDuration
}return(this._repeat===-1||!l)?this:this.timeScale(this.totalDuration()/l)
};
c.time=function(m,l){if(!arguments.length){return this._time
}if(this._dirty){this.totalDuration()
}if(m>this._duration){m=this._duration
}if(this._yoyo&&(this._cycle&1)!==0){m=(this._duration-m)+(this._cycle*(this._duration+this._repeatDelay))
}else{if(this._repeat!==0){m+=this._cycle*(this._duration+this._repeatDelay)
}}return this.totalTime(m,l)
};
c.repeat=function(l){if(!arguments.length){return this._repeat
}this._repeat=l;
return this._uncache(true)
};
c.repeatDelay=function(l){if(!arguments.length){return this._repeatDelay
}this._repeatDelay=l;
return this._uncache(true)
};
c.yoyo=function(l){if(!arguments.length){return this._yoyo
}this._yoyo=l;
return this
};
c.currentLabel=function(l){if(!arguments.length){return this.getLabelBefore(this._time+1e-8)
}return this.seek(l,true)
};
return k
},true);
(function(){var q=180/Math.PI,l=[],j=[],i=[],n={},g=_gsScope._gsDefine.globals,e=function(s,p,u,t){if(u===t){u=t-(t-p)/1000000
}if(s===p){p=s+(u-s)/1000000
}this.a=s;
this.b=p;
this.c=u;
this.d=t;
this.da=t-s;
this.ca=u-s;
this.ba=p-s
},c=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",f=function(D,C,B,z){var x={a:D},w={},v={},u={c:z},A=(D+C)/2,t=(C+B)/2,E=(B+z)/2,s=(A+t)/2,p=(t+E)/2,y=(p-s)/8;
x.b=A+(D-A)/4;
w.b=s+y;
x.c=w.a=(x.b+w.b)/2;
w.c=v.a=(s+p)/2;
v.b=p-y;
u.b=E+(z-E)/4;
v.c=u.a=(v.b+u.b)/2;
return[x,w,v,u]
},b=function(L,A,B,x,w){var D=L.length-1,C=0,K=L[0].a,G,v,u,s,I,t,p,H,J,z,F,E,y;
for(G=0;
G<D;
G++){I=L[C];
v=I.a;
u=I.d;
s=L[C+1].d;
if(w){F=l[G];
E=j[G];
y=((E+F)*A*0.25)/(x?0.5:i[G]||0.5);
t=u-(u-v)*(x?A*0.5:(F!==0?y/F:0));
p=u+(s-u)*(x?A*0.5:(E!==0?y/E:0));
H=u-],z[3]);
C+=4
}else{C++
="="){A[w][s]=C[s]+Number(v.charAt(0)+v.substr(2))
}}}}u=A.length-2;
if(u<0){x[0]=new e(A[0][s],0,0,A[0][s]);
return x
}for(w=0;
w<u;
w++){B=A[w][s];
z=A[w+1][s];
x[w]=new e(B,0,0,z);
if(t){y=A[w+2][s];
l[w]=(l[w]||0)+(z-B)*(z-B);
j[w]=(j[w]||0)+(y-z)*(y-z)
}}x[w]=new e(A[w][s],0,0,A[w+1][s]);
return x
},k=function(H,t,A,y,v,I){var C={},E=[],D=I||H[0],B,u,F,z,s,x,w,G;
v=(typeof(v)==="string")?","+v+",":c;
if(t==null){t=1
}for(u in H[0]){E.push(u)
}if(H.length>1){G=H[H.length-1];
w=true;
B=E.length;
while(--B>-1){u=E[B];
if(Math.abs(D[u]-G[u])>0.05){w=false;
break
}}if(w){H=H.concat();
if(I){H.unshift(I)
}H.push(H[,n[u],I)
}B=l.length;
whi[z]=(i[z]||0)+s*s
}}}B=i.length;
while(--B>-1){i[B]=Math.sqrt(i[B])
}}B=E.length;
z=A?4:1;
while(--B>-1){u=E[B];
F=C[u];
b(F,t,A,y,n[u]);
if(w){F.splice(0,z);
F.splice(F.length-z,z)
}}return C
},m=function(s,v,J){v=v||"soft";
var x={},w=(v==="cubic")C=u.length;
while(--C>-1){y=
}}}t[B++]=I
}z=B-w+1;
B=0;
for(A=0;
A<z;
A+=w){I=t[A];
H=t[A+1];
G=t[A+2];
E=(w===2)?0:t[A+3];
t[B++]=F=(w===3)?new e(I,H,G,E):new e(I,(2*H+I)/3,(2*H+G)/3,G)
}t.length=B
}return x
},r=function(F,E,w){var v=1/w,y=F.length,C,t,I,H,x,D,u,A,z,G,B;
while(--y>-1){G=F[y];
I=G.a;
H=G.d-I;
x=G.c-I;
D=G.b-I;
C=t=0;
for(A=1;
A<=w;
A++){u=v*A;
z=1-u;
C=t-(t=(u*u*H+3*zsegCount=this._beziers[t].length;
if(this._timeRes){var s=h(this._beziers,this._timeRes);
this._length=s.length;
this._lengths=s.lengths;
this._segments=s.segments;
this._l1=this._li=this._s1=this._si=0;
this._l2=this._lengths[0];
this._curSeg=this._segments[0];
this._s2=this._curSeg[0];
this._prec=1/this._curSeg.length
}if((v=this._autoRotate)){this._initialRotations=[];
if(!(v[0] instanceof Array)){this._autoRotate=v=[v]
}x=v.length;
while(--x>-1){for(w=0;
w<3;
w++){t=v[x][w];
this._func[t]=(typeof(z[t])==="function")?z"+nc[t].call(this._target):this._target[t])||0;
this._overwriteProps.push(t)
}}this._startRatio=D.vars.runBackwards?1:0;
return true
},set:function(E){var J=this._segCount,A=this._func,P=this._target,s=(E!==this._startRatio),D,u,L,I,O,F,Q,K,z,C;
if(!this._timeRes){D=(E<0)?0:(E>=1)?J-1:(J*E)>>0;
F=(E-(D*(1/J)))*J
}else{z=this._lengths;
C=this._curSeg;
E*=this._length;
L=this._li;
if(E>this._l2&&L<J-1){K=J-1;
while(L<K&&(this._l2=z[++L])<=E){}this._l1=z[L-1];
this._li=L;
this._curSeg=C=this._segments[L];
this._s2=C[(this._s1=this._si=0)]
}else{if(E<this._l1&&L>0){while(L>0&&(this._l1=z[--L])>=E){}if(L===0&&E<this._l1){this._l1=0
}else{L++
}this._l2=z[L];
this._li=L;
this._curSeg=C=this._segments[L];
this._s1=C[(this._si=C.length-1)-1]||0;
this._s2=C[this._si]
}}D=L;
E-=this._l1;
L=this._si;
if(E>this._s2&&L<C.length-1){K=C.length-1;
while(L<K&&(this._s2=C[++L])<=E){}this._s1=C[L-1];
this._si=L
}else{if(E<this._s1&&L>0){while(L>0&&(this._s1=C[--L])>=E){}if(L===0&&E<this._s1){this._s1=0
}else{L++
}this._s2=C[L];
this._si=L
}}F=((L+(E-this._s1)/(this._s2-this._s1))*this._prec)||0
}u=1-F;
L=this._props.length;
while(--L>-1){I=this._props[L];
O=this._beziers[I][D];
Q=(F*F*O.da+3*u*(F*O.ca+u*O.ba))*F+O.a;
if(this._mod[I]){Q=this._mod[I](Q,P)
}if(A[I]){P[I](Q)
}else{P[I]=Q
}}if(this._autoRotate){var H=this._autoRotate,B,N,y,M,x,G,w;
L=H.length;
while(--L>-1){I=H[L][2];
G=H[L][3]||0;
w=(H[L][4]===true)?1:q;
O=this._beziers[H[L][0]];
B=this._beziers[H[L][1]];
if(O&&B){O=O[D];
B=B[D];
N=O.a+(O.b-O.a)*F;
M=O.b+(O.c-O.b)*F;
N+=(M-N)*F;
M+=((O.c+(O.d-O.c)*F)-M)*F;
y=B.a+(B.b-B.a)*F;
x=B.b+(B.c-B.b)*F;
y+=(x-y)*F;
x+=((B.c+(B.d-B.c)*F)-x)*F;
Q=s?Math.atan2(x-y,M-N)*w+G:this._initialRotations[L];
if(this._mod[I]){Q=this._mod[I](Q,P)
}if(A[I]){P[I](Q)
}else{P[I]=Q
}}}}}}),d=a.prototype;
a.bezierThrough=k;
a.cubicToQuadratic=f;
a._autoCSS=true;
a.quadraticToCubic=function(s,p,t){return new e(s,(2*p+s)/3,(2*p+t)/3,t)
};
a._cssRegister=function(){var t=g.CSSPlugin;
if(!t){return
}var p=t._internals,u=p._parseToProxy,s=p._setPluginRatio,v=p.CSSPropTween;
p._registerComplexSpecialProp("bezier",{parser:function(H,E,w,z,I,D){if(E instanceof Array){E={values:E}
}D=new a();
var G=E.values,A=G.length-1,y=[],F={},C,x,B;
if(A<0){return I
}for(C=0;
C<=A;
C++){B=u(H,G[C],z,I,D,(A!==C));
y[C]=B.end
}for(x in E){F[x]=E[x]
}F.values=y;
I=new v(H,"bezier",0,0,B.pt,2);
I.data=B;
I.plugin=D;
I.setRatio=s;
if(F.autoRotate===0){F.autoRotate=true
}if(F.autoRotate&&!(F.autoRotate instanceof Array)){C=(F.autoRotate===true)?0:Number(F.autoRotate);
F.autoRotate=(B.end.left!=null)?[["left","top","rotation",C,false]]:(B.end.x!=null)?[["x","y","rotation",C,false]]:false
}if(F.autoRotate){if(!z._transform){z._enableTransforms(false)
}B.autoRotate=z._target._gsTransform;
B.proxy.rotation=B.autoRotate.rotation||0;
z._overwriteProps.push("rotation")
}D._onInitTween(B.proxy,F,z._tween);
return I
}})
};
d._mod=function(s){var u=this._overwriteProps,p=u.length,t;
while(--p>-1){t=s[u[p]];
if(t&&typeof(t)==="function"){this._mod[u[p]]=t
}}};
d._kill=function(v){var s=this._props,u,t;
for(u in this._beziers){if(u in v){delete this._beziers[u];
delete this._func[u];
t=s.length;
while(--t>-1){if(s[t]===u){s.splice(t,1)
}}}}s=this._autoRotate;
if(s){t=s.length;
while(--t>-1){if(v[s[t][2]]){s.splice(t,1)
}}}return this._super._kill.call(this,v)
}
}());
_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(F,s){var aF=function(){F.call(this,"css");
this._overwriteProps.length=0;
this.setRatio=aF.prototype.setRatio
},w=_gsScope._gsDefine.globals,aD,a,Q,a3,b={},X=aF.prototype=new F("css");
X.constructor=aF;
aF.version="2.0.2";
aF.API=2;
aF.defaultTransformPerspective=0;
aF.defaultSkewType="compensated";
aF.defaultSmoothOrigin=true;
X="px";
aF.suffixMap={top:X,right:X,bottom:X,left:X,width:X,height:X,fontSize:X,padding:X,margin:X,perspective:X,lineHeight:""};
var aS=/(?:\-|\.|\b)(\d|\.|e\-)+/g,y=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,ax=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,aP=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,ap=/(?:\d|\-|\+|=|#|\.)*/g,aL=/opacity *= *([^)]*)/i,m=/opacity:([=.+?\)/i,aa=/^(rgb|hsl)/,ag=/([A-Z])/g,f=/-([a-z])/gi,ab=/(^(?:u(i,p){return p.toUpperCase()
},B=/(?:Left|Right|Width)/i,am=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,L=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,z=/,(?=[^\)]*(?:\(|$))/gi,ah=/[\s,\(]/i,W=Math.PI/180,aH=180/Math.PI,a6={},N={style:{}},aV=_gsScope.document||{createElement:function(){return N
}},aY=function(p,i){return aV.createElementNS?aV.createElementNS(i||"http://www.w3.org/1999/xhtml",p):aV.createElement(p)
},a4=aY("div"),A=aY("img"),l=aF._internals={_specialProps:b},av=(_gsScope.navigator||{}).userAgent||"",E,aG,I,M,n,T,Z=(function(){var a7=av.indexOf("Android"),p=aY("a");
I=(av.indexOf("Safari")!==-1&&av.indexOf("Chrome")===-1&&(a7===-1||parseFloat(av.substr(a7+8,2))>3));
n=(I&&(parseFloat(av.substr(av.indexOf("Version/")+8,2))<6));
M=(av.indexOf("Firefox")!==-1);
if((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(av)||(/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(av)){T=parseFloat(RegExp.$1)
}if(!p){return false
}p.style.cssText="top:1px;opacity:.55;";
return/^0.55/.test(p.style.opacity)
}()),aq=function(i){return(aL.test(((typeof(i)==="string")?i:(i.currentStyle?i.currentStyle.filter:i.style.filter)||""))?(parseFloat(RegExp.$1)/100):1)
},at=function(i){if(_gsScope.console){console.log(i)
}},aC,aN,t="",aX="",R=function(bb,ba){ba=ba||a4;
var a9=ba.style,a7,a8;
if(a9[bb]!==undefined){return bb
}bb=bb.charAt(0).toUpperCase()+bb.substr(1);
a7=["O","Moz","ms","Ms","Webkit"];
a8=5;
while(--a8>-1&&a9[a7[a8]+bb]===undefined){}if(a8>=0){aX=(a8===3)?"ms":a7[a8];
t="-"+aX.toLowerCase()+"-";
return aX+bb
}return null
},aK=(typeof(window)!=="undefined"?window:aV.defaultView||{getComputedStyle:function(){}}).getComputedStyle,C=aF.getStyle=function(a7,ba,a8,i,a9){var bb;
if(!Z){if(ba==="opacity"){return aq(a7)
}}if(!i&&a7.style[ba]){bb=a7.style[ba]
}else{if((a8=a8||aK(a7))){bb=a8[ba]||a8.getPropertyValue(ba)||a8.getPropertyValue(ba.replace(ag,"-$1").toLowerCase())
}else{if(a7.currentStyle){bb=a7.currentStyle[ba]
}}}return(a9!=null&&(!bb||bb==="none"||bb==="auto"||bb==="auto auto"))?a9:bb
},H=l.convertToPixels=function(bi,a9,bg,bd,a7){if(bd==="px"||(!bd&&a9!=="lineHeight")){return bg
}if(bd==="auto"||!bg){return 0
}var bh=B.test(a9),bb=bi,a8=a4.style,bc=(bg<0),be=(bg===1),bf,i,ba;
if(bc){bg=-bg
}if(be){bg*=100
}if(a9==="lineHeight"&&!bd){i=aK(bi).lineHeight;
bi.style.lineHeight=bg;
bf=parseFloat(aK(bi).lineHeight);
bi.style.lineHeight=i
}else{if(bd==="%"&&a9.indexOf("border")!==-1){bf=(bg/100)*(bh?bi.clientWidth:bi.clientHeight)
}else{a8.cssText="border:0 solid red;position:"+C(bi,"position")+";line-height:0;";
if(bd==="%"||!bb.appendChild||bd.charAt(0)==="v"||bd==="rem"){bb=bi.parentNode||aV.body;
if(C(bb,"display").indexOf("flex")!==-1){a8.position="absolute"
}i=bb._gsCache;
ba=s.ticker.frame;
if(i&&bh&&i.time===ba){return i.width*bg/100
}a8[(bh?"width":"height")]=bg+bd
}else{a8[(bh?"borderLeftWidth":"borderTopWidth")]=bg+bd
}bb.appendChild(a4);
bf=parseFloat(a4[(bh?"offsetWidth":"offsetHeight")]);
bb.removeChild(a4);
if(bh&&bd==="%"&&aF.cacheWidths!==false){i=bb._gsCache=bb._gsCache||{};
i.time=ba;
i.width=bf/bg*100
}if(bf===0&&!a7){bf=H(bi,a9,bg,bd,true)
}}}if(be){bf/=100
}return bc?-bf:bf
},e=l.calculateOffset=function(a7,ba,a8){if(C(a7,"position",a8)!=="absolute"){return 0
}var a9=((ba==="left")?"Left":"Top"),i=C(a7,"margin"+a9,a8);
return a7["offset"+a9]-(H(a7,ba,parseFloat(i),i.replace(ap,""))||0)
},aE=function(a8,ba){var a9={},a7,bb,bc;
if((ba=ba||aK(a8,null))){if((a7=ba.length)){while(--a7>-1){bc=ba[a7];
if(bc.indexOf("-transform")===-1||az===bc){a9[bc.replace(f,ay)]=ba.getPropertyValue(bc)
}}}else{for(a7 in ba){if(a7.indexOf("Transform")===-1||aR===a7){a9[a7]=ba[a7]
}}}}else{if((ba=a8.currentStyle||a8.style)){for(a7 in ba){if(typeof(a7)==="string"&&a9[a7]===undefined){a9[a7.replace(f,ay)]=ba[a7]
}}}}if(!Z){a9.opacity=aq(a8)
}bb=c(a8,ba,false);
a9.rotation=bb.rotation;
a9.skewX=bb.skewX;
a9.scaleX=bb.scaleX;
a9.scaleY=bb.scaleY;
a9.x=bb.x;
a9.y=bb.y;
if(d){a9.z=bb.z;
a9.rotationX=bb.rotationX;
a9.rotationY=bb.rotationY;
a9.scaleZ=bb.scaleZ
}if(a9.filters){delete a9.filters
}return a9
},q=function(bf,be,bd,bb,ba){var a9={},i=bf.style,a8,a7,bc;
for(a7 in bd){if(a7!=="cssText"){if(a7!=="length"){if(isNaN(a7)){if(be[a7]!==(a8=bd[a7])||(ba&&ba[a7])){if(a7.indexOf("Origin")===-1){if(typeof(a8)==="number"||typeof(a8)==="string"){a9[a7]=(a8==="auto"&&(a7==="left"||a7==="top"))?e(bf,a7):((a8===""||a8==="auto"||a8==="none")&&typeof(be[a7])==="string"&&be[a7].replace(aP,"")!=="")?0:a8;
if(i[a7]!==undefined){bc=new ae(i,a7,i[a7],bc)
}}}}}}}}if(bb){for(a7 in bb){if(a7!=="className"){a9[a7]=bb[a7]
}}}return{difs:a9,firstMPT:bc}
},aQ={width:["Left","Right"],height:["Top","Bottom"]},ai=["marginLeft","marginRight","marginTop","marginBottom"],aM=function(ba,bc,bb){if((ba.nodeName+"").toLowerCase()==="svg"){return(bb||aK(ba))[bc]||0
}else{if(ba.getCTM&&o(ba)){return ba.getBBox()[bc]||0
}}var a8=parseFloat((bc==="width")?ba.offsetWidth:ba.offsetHeight),a7=aQ[bc],a9=a7.length;
bb=bb||aK(ba,null);
while(--a9>-1){a8-=parseFloat(C(ba,"padding"+a7[a9],bb,true))||0;
a8-=parseFloat(C(ba,"border"+a7[a9]+"Width",bb,true))||0
}return a8
},aI=function(a8,a9){if(a8==="contain"||a8==="auto"||a8==="auto auto"){return a8+" "
}if(a8==null||a8===""){a8="0 0"
}var a7=a8.split(" "),p=(a8.indexOf("left")!==-1)?"0%":(a8.indexOf("right")!==-1)?"100%":a7[0],bb=(a8.indexOf("top")!==-1)?"0%":(a8.indexOf("bottom")!==-1)?"100%":a7[1],ba;
if(a7.length>3&&!a9){a7=a8.split(", ").join(",").split(",");
a8=[];
for(ba=0;
ba<a7.length;
ba++){a8.push(aI(a7[ba]))
}return a8.join(",")
}if(bb==null){bb=(p==="center")?"50%":"0"
}else{if(bb==="center"){bb="50%"
}}if(p==="center"||(isNaN(parseFloat(p))&&(p+"").indexOf("=")===-1)){p="50%"
}a8=p+" "+bb+((a7.length>2)?" "+a7[2]:"");
if(a9){a9.oxp=(p.indexOf("%")!==-1);
a9.oyp=(bb.indexOf("%")!==-1);
a9.oxr=(p.charAt(1)==="=");
a9.oyr=(bb.charAt(1)==="=");
a9.ox=parseFloat(p.replace(aP,""));
a9.oy=parseFloat(bb.replace(aP,""));
a9.v=a8
}return a9||a8
},a5=function(p,i){if(typeof(p)==="function"){p=p(aN,aC)
}return(typeof(p)==="string"&&p.charAt(1)==="=")?parseInt(p.charAt(0)+"1",10)*parseFloat(p.substr(2)):(parseFloat(p)-parseFloat(i))||0
},x=function(i,a7){if(typeof(i)==="function"){i=i(aN,aC)
}var p=(typeof(i)==="string"&&i.charAt(1)==="=");
if(typeof(i)==="string"&&i.charAt(i.length-2)==="v"){i=(p?i.substr(0,2):0)+(window["inner"+((i.substr(-2)==="vh")?"Height":"Width")]*(parseFloat(p?i.substr(2):i)/100))
}return(i==null)?a7:p?parseInt(i.charAt(0)+"1",10)*parseFloat(i.substr(2))+a7:parseFloat(i)||0
},a1=function(bd,a8,i,bc){var a7=0.000001,be,a9,ba,bf,bb;
if(typeof(bd)==="function"){bd=bd(aN,aC)
}if(bd==null){bf=a8
}else{if(typeof(bd)==="number"){bf=bd
}else{be=360;
a9=bd.split("_");
bb=(bd.charAt(1)==="=");
ba=(bb?parseInt(bd.charAt(0)+"1",10)*parseFloat(a9[0].substr(2)):parseFloat(a9[0]))*((bd.indexOf("rad")===-1)?1:aH)-(bb?0:a8);
if(a9.length){if(bc){bc[i]=a8+ba
}if(bd.indexOf("short")!==-1){ba=ba%be;
if(ba!==ba%(be/2)){ba=(ba<0)?ba+be:ba-be
}}if(bd.indexOf("_cw")!==-1&&ba<0){ba=((ba+be*9999999999)%be)-((ba/be)|0)*be
}else{if(bd.indexOf("ccw")!==-1&&ba>0){ba=((ba-be*9999999999)%be)-((ba/be)|0)*be
}}}bf=a8+ba
}}if(bf<a7&&bf>-a7){bf=0
}return bf
},af={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},aJ=function(a7,p,i){a7=(a7<0)?a7+1:(a7>1)?a7-1:a7;
return((((a7*6<1)?p+(i-p)*a7*6:(a7<0.5)?i:(a7*3<2)?p+(i-p)*(2/3-a7)*6:p)*255)+0.5)|0
},a0=aF.parseColor=function(bg,a8){var bf,i,bb,be,a9,bh,p,bd,a7,bc,ba;
if(!bg){bf=af.black
}else{if(typeof(bg)==="number"){bf=[bg>>16,(bg>>8)&255,bg&255]
}else{if(bg.charAt(bg.length-1)===","){bg=bg.substr(0,bg.length-1)
}if(af[bg]){bf=af[bg]
}else{if(bg.charAt(0)==="#"){if(bg.length===4){i=bg.charAt(1);
bb=bg.charAt(2);
be=bg.charAt(3);
bg="#"+i+i+bb+bb+be+be
}bg=parseInt(bg.substr(1),16);
bf=[bg>>16,(bg>>8)&255,bg&255]
}else{if(bg.substr(0,3)==="hsl"){bf=ba=bg.match(aS);
if(!a8){a9=(Number(bf[0])%360)/360;
bh=Number(bf[1])/100;
p=Number(bf[2])/100;
bb=(p<=0.5)?p*(bh+1):p+bh-p*bh;
i=p*2-bb;
if(bf.length>3){bf[3]=Number(bf[3])
}bf[0]=aJ(a9+1/3,i,bb);
bf[1]=aJ(a9,i,bb);
bf[2]=aJ(a9-1/3,i,bb)
}else{if(bg.indexOf("=")!==-1){return bg.match(y)
}}}else{bf=bg.match(aS)||af.transparent
}}}bf[0]=Number(bf[0]);
bf[1]=Number(bf[1]);
bf[2]=Number(bf[2]);
if(bf.length>3){bf[3]=Number(bf[3])
}}}if(a8&&!ba){i=bf[0]/255;
bb=bf[1]/255;
be=bf[2]/255;
bd=Math.max(i,bb,be);
a7=Math.min(i,bb,be);
p=(bd+a7)/2;
if(bd===a7){a9=bh=0
}else{bc=bd-a7;
bh=p>0.5?bc/(2-bd-a7):bc/(bd+a7);
a9=(bd===i)?(bb-be)/bc+(bb<be?6:0):(bd===bb)?(be-i)/bc+2:(i-bb)/bc+4;
a9*=60
}bf[0]=(a9+0.5)|0;
bf[1]=(bh*100+0.5)|0;
bf[2]=(p*100+0.5)|0
}return bf
},D=function(bb,bd){var p=bb.match(aA)||[],bc=0,a9="",ba,a8,a7;
if(!p.length){return bb
}for(ba=0;
ba<p.length;
ba++){a8=p[ba];
a7=bb.substr(bc,bb.indexOf(a8,bc)-bc);
bc+=a7.length+a8.length;
a8=a0(a8,bd);
if(a8.length===3){a8.push(1)
}a9+=a7+(bd?"hsla("+a8[0]+","+a8[1]+"%,"+a8[2]+"%,"+a8[3]:"rgba("+a8.join(","))+")"
}return a9+bb.substr(bc)
},aA="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
for(X in af){aA+="|"+X+"\\b"
}aA=new RegExp(aA+")","gi");
aF.colorStringFilter=function(i){var p=i[0]+" "+i[1],a7;
if(aA.test(p)){a7=(p.indexOf("hsl(")!==-1||p.indexOf("hsla(")!==-1);
i[0]=D(i[0],a7);
i[1]=D(i[1],a7)
}aA.lastIndex=0
};
if(!s.defaultStringFilter){s.defaultStringFilter=aF.colorStringFilter
}var aw=function(ba,bg,bf,bb){if(ba==null){return function(bh){return bh
}
}var be=bg?(ba.match(aA)||[""])[0]:"",a9=ba.split(be).join("").match(ax)||[],bc=ba.substr(0,ba.indexOf(a9[0])),a8=(ba.charAt(ba.length-1)===")")?")":"",i=(ba.indexOf(" ")!==-1)?" ":",",a7=a9.length,p=(a7>0)?a9[0].replace(aS,""):"",bd;
if(!a7){return function(bh){return bh
}
}if(bg){bd=function(bj){var bi,bl,bk,bh;
if(typeof(bj)==="number"){bj+=p
}else{if(bb&&z.test(bj)){bh=bj.replace(z,"|").split("|");
for(bk=0;
bk<bh.length;
bk++){bh[bk]=bd(bh[bk])
}return bh.join(",")
}}bi=(bj.match(aA)||[be])[0];
bl=bj.split(bi).join("").match(ax)||[];
bk=bl.length;
if(a7>bk--){while(++bk<a7){bl[bk]=bf?bl[(((bk-1)/2)|0)]:a9[bk]
}}return bc+bl.join(i)+i+bi+a8+(bj.indexOf("inset")!==-1?" inset":"")
};
return bd
}bd=function(bi){var bk,bh,bj;
if(typeof(bi)==="number"){bi+=p
}else{if(bb&&z.test(bi)){bh=bi.replace(z,"|").split("|");
for(bj=0;
bj<bh.length;
bj++){bh[bj]=bd(bh[bj])
}return bh.join(",")
}}bk=bi.match(ax)||[];
bj=bk.length;
if(a7>bj--){while(++bj<a7){bk[bj]=bf?bk[(((bj-1)/2)|0)]:a9[bj]
}}return bc+bk.join(i)+a8
};
return bd
},aO=function(i){i=i.split(",");
return function(be,bb,a7,a8,bf,ba,bc){var bd=(bb+"").split(" "),a9;
bc={};
for(a9=0;
a9<4;
a9++){bc[i[a9]]=bd[a9]=bd[a9]||bd[(((a9-1)/2)>>0)]
}return a8.parse(be,bc,bf,ba)
}
},au=l._setPluginRatio=function(bf){this.plugin.setRatio(bf);
var bb=this.data,bc=bb.proxy,be=bb.firstMPT,a9=0.000001,a8,bg,ba,bd,a7;
while(be){a8=bc[be.v];
if(be.r){a8=be.r(a8)
}else{if(a8<a9&&a8>-a9){a8=0
}this._tween):bc.rotation
}if(bf===1||bf===0){be=bb.firstMPT;
a7=(bf===1)?"e":"b";
while(be){bg=be.t;ext
}return{proxy:a8,end:bf,firstMPT:bk,pt:bd}
},u=l.CSSPropTween=function(bf,a8,bg,bc,ba,bd,a9,i,a7,be,bb){this.t=bf;
this.p=a8;
this.s=bg;
this.c=bc;
this.n=a9||a8;
if(!(bf instanceof u)){a3.push(this.n)
}this.r=!i?i:(typeof(i)==="function")?i:Math.round;
this.type=bd||0;
if(a7){this.pr=a7;
aD=true
}this.b=(be===undefined)?bg:be;
this.e=(bb===undefined)?bg+bc:bb;
if(ba){this._next=ba;
ba._prev=this
}},r=function(a9,bb,ba,i,a7,p){var a8=new u(a9,bb,ba,i-ba,a7,-1,p);
a8.b=ba;
a8.e=a8.xs0=i;
return a8
},j=aF.parseComplex=function(bg,bj,bA,bw,bu,bi,bk,bo,bb,br){bA=bA||bi||"p,bx,a9,bl,bs;
if(bw.indexOf(",")!==-1||bA.indexOf(",")!==-1){if((bw+bA).indexOf("rgb")!==-1||(bw+bA).indexOf((z,", ").split(" ");
bf=bf.join(" ").replace(z,", ").replace(y,""),(bz&&b)"+(bl?by.substr(bl):"");
bs=(by.indexOf("hsl")!==-1&&Z);
bx=by;
bt=a0(bt,bs);
by=a0(by,bs);
bp=(bt.length+by.length>6);
if(bp&&!Z&&by[3]===x.substr(0aA.lastIndex=0
}else{bd=bt.match(aS);
if(!bd){bk["xs"+,bc,ba,a7";
if(i>0){a8.data["xn"+i]=p+bc;
a8.rxp["xn"+i]=a7;
a8["xn"+i]=p;
if(!a8.plugin){a8.xfirst=new u(a8,"xn"+i,p,bc,a8.xfirst||a8,0,a8.n,a7,a8.pr);
a8.xfirst.xs0=0
}return a8
}a8.data={s:p+bc};
a8.rxp={};
a8.s=p;
a8.c=bc;
a8.r=a7;
return a8
};
var ak=function(a7,i){i=i||{};
this.p=i.prefix?R(a7)||a7:a7;
b[a7]=b[this.p]=this;
this.format=i.formatter||aw(i.defaultValue,i.color,i.collapsible,i.multi);
if(i.parser){this.parse=i.parser
}this.clrs=i.color;
this.multi=i.multi;
this.keyword=i.keyword;
this.dflt=i.defaultValue;
this.pr=i.priority||0
},O=l._registerComplexSpecialProp=function(bc,a9,bb){if(typeof(a9)!=="object"){a9={parser:bb}
}var a7=bc.split(","),bd=a9.defaultValue,ba,a8;
bb=bb||[bd];
for(ba=0;
ba<a7.length;
ba++){a9.prefix=(ba===0&&a9.prefix);
a9.defaultValue=bb[ba]||bd;
a8=new ak(a7[ba],a9)
}},h=l._registerPluginProp=function(a7){if(!b[a7]){var i=a7.charAt(0).toUpperCase()+a7.substr(1)+"Plugin";
O(a7,{parser:function(a8,be,bd,bf,bc,ba,bb){var a9=w.com.greensock.plugins[i];
if(!a9){at("Error: "+i+" js file not loaded.");
return bc
}a9._cssRegister();
return b[bd].parse(a8,be,bd,bf,bc,ba,bb)
}})
}};
X=ak.prototype;
X.parseComplex=function(bj,bh,be,bk,bc,p){var bd=this.keyword,bb,bg,bf,a8,a9,a7;
if(this.multi){if(z.test(be)||z.test(bh)){bg=bh.replace(z,"|").split("|");
bf=be.replace(z,"|").split("|")
}else{if(bd){bg=[bh];
bf=[be]
}}}if(bf){a8=(bf.length>bg.length)?bf.length:bg.length;
for(bb=0;
bb<a8;
bb++){bh=bg[bb]=bg[bb]||this.dflt;
be=bf[bb]=bf[bb]||this.dflt;
if(bd){a9=bh.indexOf(bd);
a7=be.indexOf(bd);
if(a9!==a7){if(a7===-1){bg[bb]=bg[bb].split(bd).join("")
}else{if,p)
};
X.parse=function(i,bb,ba,bc,a9,a7,a8){return this.parseComplex(i.style,this.format(C(i,this.p,Q,false,this.dflt)),this.format(bb),a9,a7)
};
aF.registerSpecialProp=function(i,a7,p){O(i,{parser:function(a8,bd,bc,be,bb,a9,ba){var bf=new u(a8,bc,0,0,bb,2,bc,false,p);
bf.plugin=a9;
bf.setRatio=a7(a8,bd,be._tween,bc);
return bf
},priority:p})
};
aF.useSVGTransformAttr=true;
var ar=("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),aR=R("transform"),az=t+"transform",V=R("transformOrigin"),d=(R("perspective")!==null),aZ=l.Transform=function(){this.perspective=parseFloat(aF.defaultTransformPerspective)||0;
this.force3D=(aF.defaultForce3D===false||!d)?false:aF.defaultForce3D||"auto"
},ao=_gsScope.SVGElement,G,aU=function(ba,i,a7){var a8=aV.createElementNS("http://www.w3.org/2000/svg",ba),a9=/([a-z])([A-Z])/g,bb;
for(bb in a7){a8.setAttributeNS(null,bb.replace(a9,"$1-$2").toLowerCase(),a7[bb])
}i.appendChild(a8);
return a8
},J=aV.documentElement||{},U=(function(){var a8=T||(/Android/i.test(av)&&!_gsScope.chrome),i,a7,p;
if(aV.createElementNS&&!a8){i=aU("svg",J);
a7=aU("rect",i,{width:100,height:50,x:100});
p=a7.getBoundingClientRect().width;
a7.style[V]="50% 50%";
a7.style[aR]="scaleX(0.5)";
a8=(p===a7.getBoundingClientRect().width&&!(M&&d));
J.removeChild(i)
}return a8
})(),k=function(bh,be,bq,bk,bc,a8){var p=bh._gsTransform,bf=al(bh,true),bb,ba,a9,bg,i,bp,bn,bl,bj,bo,bm,bd,bi,a7;
if(p){bi=p.xOrigin;
a7=p.yOrigin
}if(!bk||(bb=bk.split(" ")).length<2){bn=bh.getBBox();
if(bn.x===0&&bn.y===0&&bn.width+bn.height===0){bn={x:parseFloat(bh.hasAttribute("x")?bh.getAttribute("x"):bh.hasAttribute("cx")?bh.getAttribute("cx"):0)||0,y:parseFloat(bh.hasAttribute("y")?bh.getAttribute("y"):bh.hasAttribute("cy")?bh.getAttribute("cy"):0)||0,width:0,height:0}
}be=aI(be).split(" ");
bb=[(be[0].indexOf("%")!==-1?parseFloat(be[0])/100*bn.width:parseFloat(be[0]))+bn.x,(be[1].indexOf("%")!==-1?parseFloat(be[1])/100*bn.height:parseFloat(be[1]))+bn.y]
}bq.xOrigin=bg=parseFloat(bb[0]);
bq.yOrigin=i=parseFloat(bb[1]);
if(bk&&bf!==S){bp=bf[0];
bn=bf[1];
bl=bf[2];
bj=bf[3];
bo=bf[4];
bm=bf[5];
bd=(bp*bj-bn*bl);
if(bd){ba=bg*(bj/bd)+i*(-bl/bd)+((bl*bm-bj*bo)/bd);
a9=bg*(-bn/bd)+i*(bp/bd)-((bp*bm-bn*bo)/bd);
bg=bq.xOrigin=bb[0]=ba;
i=bq.yOrigin=bb[1]=a9
}}if(p){if(a8){bq.xOffset=p.xOffset;
bq.yOffset=p.yOffset;
p=bq
}if(bc||(bc!==false&&aF.defaultSmoothOrigin!==false)){ba=bg-bi;
a9=i-a7;
p.xOffset+=(ba*bf[0]+a9*bf[2])-ba;
p.yOffset+=(ba*bf[1]+a9*bf[3])-a9
}else{p.xOffset=p.yOffset=0
}}if(!a8){bh.setAttribute("data-svg-origin",bb.join(" "))
}},g=function(a8){var i=aY("svg",(this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns"))||"http://www.w3.org/2000/svg"),a7=this.parentNode,p=this.nextSibling,bb=this.style.cssText,ba;
J.appendChild(i);
i.appendChild(this);
this.style.display="block";
if(a8){try{ba=this.getBBox();
this._originalGetBBox=this.getBBox;
this.getBBox=g
}catch(a9){}}else{if(this._originalGetBBox){ba=this._originalGetBBox()
}}if(p){a7.insertBefore(this,p)
}else{a7.appendChild(this)
}J.removeChild(i);
this.style.cssText=bb;
return ba
},aT=function(p){try{return p.getBBox()
}catch(i){return g.call(p,true)
}},o=function(i){return !!(ao&&i.getCTM&&(!i.parentNode||i.ownerSVGElement)&&aT(i))
},S=[1,0,0,1,0,0],al=function(bc,a8){var be=bc._gsTransform||new aZ(),p=100000,i=bc.style,bb,bf,a9,a7,ba,bd;
if(aR){bf=C(bc,az,null,true)
}else{if(bc.currentStyle){bf=bc.currentStyle.filter.match(am);
bf=(bf&&bf.length===4)?[bf[0].substr(4),Number(bf[2].substr(4)),Number(bf[1].substr(4)),bf[3].substr(4),(be.x||0),(be.y||0)].join(","):""
}}bb=(!bf||bf==="none"||bf==="matrix(1, 0, 0, 1, 0, 0)");
if(aR&&((bd=(!aK(bc)||aK(bc).display==="none"))||!bc.parentNode)){if(bd){a7=i.display;
i.display="block"
}if(!bc.parentNode){ba=1;
J.appendChild(bc)
}bf=C(bc,az,null,true);
bb=(!bf||bf==="none"||bf==="matrix(1, 0, 0, 1, 0, 0)");
if(a7){i.display=a7
}else{if(bd){Y(i,"display")
}}if(ba){J.removeChild(bc)
}}if(be.svg||(bc.getCTM&&o(bc))){if(bb&&(i[aR]+"").indexOf("matrix")!==-1){bf=i[aR];
bb=0
}a9=bc.getAttribute("transform");
if(bb&&a9){a9=bc.transform.baseVal.consolidate().matrix;
bf="matrix("+a9.a+","+a9.b+","+a9.c+","+a9.d+","+a9.e+","+a9.f+")";
bb=0
}}if(bb){return S
}a9=(bf||"").match(aS)||[];
ad=a9.length;
while(--ad>-1){a7=Number(a9[ad]);
a9[ad]=(ba=a7-(a7|=0))?((ba*p+(ba<0?-0.5:0.5))|0)/p+a7:a7
}return(a8&&a9.length>6)?[a9[0],a9[1],a9[4],a9[5],a9[12],a9[13]]:a9
},c=l.getTransform=function(bv,bi,bw,bh){if(bv._gsTransform&&bw&&!bh){return bv._gsTransform
}var bM=bw?bv._gsTransform||new aZ():new aZ(),bE=(bM.scaleX<0),bI=0.00002,by=100000,bs=d?parseFloat(C(bv,V,bi,false,"0 0 0").split(" ")[2])||bM.zOrigin||0:0,p=parseFloat(aF.defaultTransformPerspective)||0,bx,bA,bu,bt,bl,bL;
bM.svg=!!(bv.getCTM&&o(bv));
i){var bc[9],bk=bx[10],a=a9*bj-bx[12];
bB=bC*bj-bx[13];
bj=bk*bj+bM.zOrigin-bx[14]
}bM.rotationX=bg*aH;
if(bg){a7=Math.cos(-bg);
bb=Math.sin(-bg);
br=ba*a7+a9*bb;
bq=bD*a7+bC*bb;
bp=bn*a7+bk*bb;
a9=ba*-bb+a9*a7;
bC=bD*-bb+bC*a7;
bk=bn*-bb+bk*a7;
bd=be*-bb+bd*a7;
ba=br;
bD=bq;
bn=bp
}bg=Math.atan2(-bo,bk);
bM.rotationY=bg*aH;
if(bg){a7==bo*bb+bk*a7;
bd=bf*bb+bd*a7;
bc=br;
bF=bq;
bo=bp
}bg=Math.atan2(bF,bc);
bM.rotation=bg*aH;
if(bg){a7=Math.cos(bg);
bb=Math.sin(bg);
br=bc*a7+bF*bb;
bq=ba*a7+bD*bb;
bp=a9*a7+bC*bb;
bF=bF*a7-bc*bb;
bD=bD*a7-ba*bb;
bC=bC*a7-a9*bb;
bc=br;
ba=bq;
a9=bp
}if(bM.rotationX&&Math.abs(bM.rotationX)+Math.abs(bM.rotation)>359.9){bM.rotationX=bM.rotation=0;
bM.rotationY=180-bM.rotationY
}bg=Math.atan2(ba,bD);
bM.scaleX=((Math.sqrt(bc*bc+bF*bF+bo*bo)*by+0.5)|0)/by;
bM.scaleY=((Math.sqrt(bD*bD+bn*bn)*by+0.5)|0)/by;
bM.scaleZ=((Math.sqrt(a9*a9+bC*bC+bk*bk)*by+0.5)|0)/by;
bc/=bM.scaleX;
ba/.yOrigin-(bM.yionX=bM.rotationY=bM.z=0;
bM.perspective=p;
bM.scaleZ=1
}if(bM.svg){bM.x-=bM.xOrigin-(bM.xOrigin*bK+bM.yOrigin*bH);
bM.y-=bM.yOrigin-(bM.xOrigin0&&M?180:-180
}else{bM.scaleY*=-1;
bM.skewX+=(bM.skewX<=0)?180:-180
}}bM.zOrigin=bs;
for(bA in bM){if(bM[bA]<bI){if(bM[bA]>-bI){bM[bA]=0
}}}}if(bw){bv._gsTransform=bM;
if(bM.svg){if(G&&bv.style[aR]){s.delayedCall(0.001,function(){Y(bv.style,aR)
})
}else{if(!G&&bv.getAttribute("transform")){s.delayedCall(0.001,function(){bv.removeAttribute("transform")
})
}}}}return bM
},aB=function(bg){var bi=this.data,br=-bi.rotation*W,p=br+bi.skewX*W,bb=100000,bs=((Math.cos(br)*bi.scaleX*bb)|0)/bb,bq=((Math.sin(br)*bi.scaleX*bb)|0)/bb,bp=((Math.sin(p)*-bi.scaleY*bb)|0)/bb,bn=((Math.cos(p)*bi.scaleY*bb)|0)/bb,bl=this.t.style,ba=this.t.currentStyle,bc,bt;
if(!ba){return
}bt=bq;
bq=-bp;
bption!==uto expand')"
}else{bf=(be/2);
bd=(bk/2);
bj+=", Dx="+(bf-(bf*bs+bd*bq)+a8)+", Dy="+(bd-(bf*bp+bd*bn)+a7)+")"
}if(bc.indexOf("DXImageTransform.Microsoft.Matrix(")!==-1){bl.filter=bc.replace(L,bj)
}else{bl.filter=bj+" "+bc
}if(bg===0||bg===1){if(bs===1){if(bq===0){if(bp===0){if(bn===1){if(!bm||bj.indexOf("Dx=0, Dy=0")!==-1){if(!aL.test(bc)||parseFloat(RegExp.$1)===100){if(bc.indexOf("gradient("&&bc.indexOf("Alpha"))===-1){bl.removeAttribute("filter")
}}}}}}}}if(!bm){var a9=(T<8)?1:-1,bh,i,bo;
bf=bi.ieOffsetX||0;
bd=bi.ieOffsetY||0;
bi.ieOffsetX=Math.round((be-((bs<0?-bs:bs)*be+(bq<0?-bq:bq)*bk))/2+a8);
bi.ieOffsetY=Math.round((bk-((bn<0?-bn:bn)*bk+(bp<0?-bp:bp)*be))/2+a7);
for(ad=0;
ad<4;
ad++){i=ai[ad];
bh=ba[i];
bt=(bh.indexOf("px")!==-1)?parseFloat(bh):H(this.t,i,parseFloat(bh),bh.replace(ap,""))||0;
if(bt!==bi[i]){bo=(ad<2)?-bi.ieOffsetX:-bi.ieOffsetY
}else{bo=(ad<2)?bf-bi.ieOffsetX:bd-bi.ieOffsetY
}bl[i]=(bi[i]=Math.rotionY,ba=bz.scaleX,a9=bz.scaleY,a8=bz.scaleZ,bx=bz.x,bw=bz.y,bv=bz.z,p=bz.svg,bu=bz.perspective,bD=bz.force3D,bH=bz.skewY,bI=bz.skewX,bs,be,bc,bb,bF,bE,bC,bq,bo,bn,bi,bh,bf,bt,been._totalDuration||!this.tweble"igin*bF+bz.yOrigin*bE)+Box();
bx+=beight
}bG=0.000((bc*bB)|0)/bB)+","+(((bE*bB)|0)/bB)+","+bx+","+bw+")";
if(p&&G){this.t.setAttribute("transform","matrix("+bm)
}else{bA[aR]=((bz.xPercent||bz.yPercent)?"translate("+bz.xPercent+"%,"+bz.yPercent+"%) matrix(":"matrix(")+bm
}}else{bA[aR]=((bz.xPercent||bz.yPercent)?"translate("+bz.xPercent+"%,"+bz.yPercent+"%) matrix(":"matrix(")+ba+",0,0,"+a9+","+bx+","+bw+")"
}return
}if(M){bG=0.0001;
if(ba<bG&&ba>-bG){ba=a8=0.00002
}if(a9<bG&&a9>-bG){a9=a8=0.00002
}if(bu&&!bz.z&&!bz.rotationX&&!bz.rotationY){bu=0
}}if(bl||bI){bl*=W;
a7=be=Math.cos(bl);
bg=bF=Math.sin(bl);
if(bI){bl-=bI*W;
a7=Math.cos(bl);
bg=Math.sin(bl);
if(bz.skewType==="simple"){bs=Math.tan((bIbH*W);
bs=Math.sqrt(1+bs*bs);
be*=bs;
bF*=bs
}}}bc=-bg;
bE=a7
}else{if(!bj&&!bk&&a8===1&&!bu&&!p){bA[aR]=((bz.xPercent||bz.yPercent)?"translate("+bz.xPercent+"%,"+bz.yPercent+"%) translate3d(":"translate3d(")+bx+"px,"+bw+"px,"+bv+"px)"+((b
bb=bC=bq=bo=bi=bh=0;
bf=(bu)?-1/bu:0;
bt=bz.zOrigin;
bG=0;
bn=a7;
bf*=a7;
be*=a7;
bF*=a7
}bl=bk*W;
if(bl){a7=Math.cos(bl);
bg=Math.sin(bl);
bs=bc*a7+bb*bg;
br=bE*a7+bC*bg;
bo=bn*bg;
bh=bf*bg;
bb=bc*-bg+bb*a7;
bC=bE*-bg+bC*a7;
bn=bn*a7;
bf=bf*a7;
bc=bs;
bE=br
}if(a8!==1){bb*=a8;
bC*=a8;
bn*=a8;
bf*=a8
}if(a9!==1){bc*=a9;
bE*=a9;
bo*=a9;
bh*=a9
}if(ba!==1){be*=ba;
bF*=ba;
bq*=ba;
bi*=ba
}if(bt||p){if(bt){bx+=bb*-bt;
bw+=bC*-bt;
bv+=bn*-bt+bt
}if(p){bx+=bz.xOrigin-(bz.xOrigin*be+bz.yOrigin*bc)+bz.xOffset;
bw+=bz.yOrigin-(bz.xOrigin*bF+bz.yOrigin*bE)+bz.yOffset
}if(bx<bG&&bx>-bG){bx=i
}if(bw<bG&&bw>-bG){bw=i
}if(bv<bG&&bv>-bG){bv=0
}}bm=((bz.xPercent||bz.yPercent)?"translate("+bz.xPercent+"%,"+bz.yPercent+"%) me<bG&&be>-bG)?i:be)+bd+((bF<bG&&bF>-bG)?i:bF)+bd+((bq<bG&&bq>-bG)?i:bq);
bm+=bd+((bi<bG&&bi>-bG)?i:bi)+bd+((bc<bG&&bc>-bG)?i:bc)+bd+((bE<bG&&bE>-bG)?i:bE);
if(bk||bj||a8f)+bd
}elsbd+bw+bd+bv+bd+(bu?(1+(-bv/bu)):1)+")";
bA[aR]=bm
};
X=aZ.prototype;
X.x=X.y=X.z=X.skewX=X.skewY=X.rotation=X.rotationX=X.rotationY=X.zOrigin=X.xPercent=X.yPercent=X.xOffset=X.yOffset=0;
X.scaleX=X.scaleY=X.scaleZ=1;
O("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(bj,bw,bk,ba,bp,bd,bl){if(ba._lastParsedTransform===bl){return bp
}ba._lastParsedTransform=bl;
var bi=(bl.scale&&typeof(bl.scale)==="function")?bl.scale:0,br;
if(typeof(bl[bk])==="function"){br=bl[bk];
bl[bk]=bw
}if(bi){bl.scale=bi(aN,bj)
}var bo=bj._gsTransform,bv=bja8="transfor=bh.transform&&g,bf,q.height=C(bj,"height")
}aV.ath.cos(a7.skewX*W)ansformOrigin||bh.svgO(bg||bf){bt=al(a4,true);
a7.x[1]+bf*bt[3]{a7.perspectivePercent!=null){a7.yPercee{if(typeof(X!=null)?bh.sca?bh.scaleY:bh.scale,a9.scaleY),x:x(bh.x,a9.x),y:x(bh.y,a9.y),z:x(bh.z,a9.z),xPercent:x(bh.xPercent,a9.xPercent),yPercent:x(bh.yPercent,a9.yPercent),perspective:x(bh.transformPerspective,a9.perspective)};
bn=bh.directionalRotation;
if(bn!=null){if(typeof(bn)==="object"){for(bq in bn){bh[bq]=bn[bq]
}}else{bh.rotation=bn
}}if(typeof(bh.x)==="string"&&bh.x.indexOf("%")!==-=x(bh.y,a9.yPercent)
}a7.rotati9.rotation,a9.rotat",be);
a7.rotationY=a1(("rotationY" in bh)?bh.rotationY:("shortRotationY" in bh)?bh.shortRotationY+"_short":a9.rotationY||0,a9.rotationY,"rotationY",be)
}a7.skewX=a1(bh.skewX,a9.skewX);
a7.skewY=a1(bh.skewY,a9.skewY)
}}if(d&&bh.force3D!=null){a9.force3D=bh.force3D;
bx=true
}bb=(a9.force3D||a9.z||a9.rotationX||a9.rotationY||a7.z||a7.rotationX||a7.rotationY||a7.perspective);
if(!bb&&bh.scale!=null){a7.scaleZ=1
}while(--bu>-1){bm=ar[bu];
bc=a7[bm]-a9[bm];
if(bc>bs||bc<-bs||bh[bm]!=null||a6[bm]!=null){bx=true;
bp=new u(a9,bm,a9[bm],bc,bp);
if(bm in be){bp.e=be[bm]
}bp.xs0=0;
bp.plugin=bd;
ba._overwriteProps.push(bp.n)
}}bc=bh.transformOrigin;
if(a9.svg&&(bc||bh.svgOrigin)){bg=a9.xOffset;
bf=a9.yOffset;
k(bj,aI(bc),a7,bh.svgOrigin,bh.smoothOrigin);
bp=r(a9,"xOrigin",(bo?a9:a7).xOrigin,a7.xOrigin,bp,a8);
bp=r(a9,"yOrif(bg!==a9.);
bp=r(a9,"yOffset",(bo?bf:a9.yOffset),a9.yOffse50%"))+"";
bp=new u(bv,bm,0,0,bbc
}}else{aI(bc+"",a9)
}}if(bx){ba._transformType=(!(a9.svg&&G)&&(bb||this._transformType===3))?3:2
}if(br){bl[bk]=br
}if(bi){bl.scale=bi
}return bp
},prefix:true});
O("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:true,color:true,multi:true,keyword:"inset"});
O("borderRadius",{defaultValue:"0px",parser:function(bi,br,bj,bb,bk,be){br=this.format(br);
var bd=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],bo=bi.style,bt,bl,bw,bf,bu,bv,a7,a8,bh,bm,bq,bg,bc,ba,bp,a9;
bh=parseFloat(bi.offsetWidth);
bm=parseFloat(bi.offsetHeight);
bt=br.split(" ");
for(bl=0;
bl<bd.length;
bl++){if(this.p.indexOf("border")){bd[bl]=R(bd[bl])
}bu=bf=C(bi,bd[bl],Q,false,"0px");
if(bu.indexOf(";
a7=parseFloat(bu);
bg=bu.substr((a7+"").length);
bc=(bv.charAt(1)==="=");
if(bc){a8=parseInt(bv.charAt(0)+"1",10);
bv=bv.substr(2);
a8*=parseFloat(bv);
bq=bv.substr((a8+"").length-(a8<0?1:0))||""
}else{a8=parseFloat(bv);
bq=bv.substr((a8+"").length)
}if(bq===""){bq=a[bj]||bg
}if(bq!==bg){ba=H(bi,"borderLeft",a7,bg);
bp=H(bi,"borderTop",a7,bg);
if(bq=="em"
}else{bu=ba+adius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadi,ba,a9,bb,a8,a7){return j(i.style,a9,this.format(C(i,a9,Q,false,"0px 0px")),this.format(ba),false,"0px",a8)
},prefix:true,formatter:aw("0px 0px",false,true)});
O("backgroundPosition",{defaultValue:"0 0",parser:function(bm,bf,a9,bb,bn,bd){var a8="background-position",be=(Q||aK(bm,null)),bl=this.forma.indexOf("%")!==-1)!==(bk.indexOf("%")!==-th<2){a7=C(bm,"basetAttribui=(bc===0)?bm.offsetWidth-A.width:bm.offsetHeight-A.height;
bh[bc]=bj?(parseFloat(bl)/100*bi)+"px":(parseFloat(bl)/bi*100)+"%"
}}bl=b},formatter:aI});
O("backgroundSize",{==-1?i+" "+rigin",{defaultValue:"50;
O("userSelect",{prefix:true});
O("margin",{parser:aO("marginTop,marginRight,marginBottom,marginLeft")});
O("padding",{parser:aO("paddingTop,paddingRight,paddingBottom,paddingLeft")});
O("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(bd,bb,i,a8,be,a9){var bc,ba,a7;
if(T<9){ba=bd.currentStyle;
a7=T<8?" ":",";
bc="rect("+ba.clipTop+a7+ba.clipRight+a7+ba.clipBottom+a7+ba.clipLeft+")";
bb=this.format(bb).split(",").join(a7)
}else{bc=this.format(C(bd,this.p,Q,false,this.dflt));
bb=this.format(bb)
}return this.parseComplex(bd.style,bc,bb,be,a9)
}});
O("textShadow",{defaultValue:"0px 0px 0px #999",color:true,multi:true});
O("autoRound,strictUnits",{parser:function(i,a9,a8,ba,a7){return a7
}});
O("border",{defaultValue:"0px solid #000",parser:function(bd,ba,i,a7,be,a9){var bb=C(bd,"borderTopWidth",Q,false,"0px(bb)/H(bd,"borderTopWidth",1,bc))+bc
}return this.parseComplex(bd.style,this.format(bb+"false,"#p){var i=p.:aO("borderon(i,bb,bai.style,bd=("clter")||"",a9=(this.s+this.c*i)|0,a7;
if(a9===100){if(a8.indexOf("atrix(")===-1&&a8.indexOf("radient(")===-1&&a8.indexOf("oader(")===-1){p.removeAttribute("filter");
a7=(!C(this.data,"filter"))
}else{p.filter=a8.replace(an,"");
a7=true
}}if(!a7){if(this.xn1){p.filter=a8=a8||("alpha(opacity="+a9+")")
}if(a8.indexOf("pacity")===-1){if(a9!==0||!this.xn1){p.filter=a8+" alpha(opacity="+a9+")"
}}else{p.filter=a8.replace(aL,"opacity="+a9)
}}};
O("opacity,ald,bb,a8,false,"1")),At(0)==="-")?-1:1)*pau(a7,"opacity",0,0,be,-1,null,g,"-$1").ta,a7=this.t.style;
while(i){if(!i.v){Y(a7,i.p)
}else{a7[i.p]=i.v
}i=i._next
}if(p===1&&this.t._gsClassPT===this){this.t._gsClassPT=null
}}else{if(this.t.getAttribute("class")!==this.e){this.t.setAttribute("class",this.e)
}}};
O("className",{parser:function(bi,bd,a7,ba,bj,bc,be){var bg=bi.getAttribute("class")||"",a8=bi.style.cssTbj.b=bg;eplace(new Re){if(a9.svg){this.t.removeAtparser:function(i,a9,a8,ba,a7){a7=new u(i,a8,0,0,a7,2);
a7.setRatio=K;
a7.e=a9;
a7.pr=-10;
a7.data=ba._tween;
aD=true;
return a7
}});
X="bezier,throwProps,physicsProps,physics2D".split(",");
ad=X.length;
while(ad--){h(X[ad])
}X=aFf(!ba.nodeTyp
i.cssText=ae(ba,bc,null)
}if(this._transformType){bb=(this._transformType===3);
if(!aR){i.zoom=1
}else{if(I){aG=true;
if(i.zIndex===""){bd=C(ba,"zIndex",Q);
if(bd==="auto"||bd===""){this._addLazySet(i,"zIndex",0)
}}if(n){this._addLazySet(i,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(bb?"visible":"hidden"))
}}}be=bi;
while(be&&be._next){be=be._next
}p=new u(ba,"transform",0,0,null,2);
this._linkCSSP(p,null,be);
p.setRatio=aR?aW:aB;
p.data=this._transform||c(ba,Q,true);
p.tween=bh;
p.pr=-1;
a3.pop()
}if(aD){while(bi){a7=bi._next;
be=a8;
while(be&&be.pr>bi.pr){be=be.){be._prev=bi
}else{bf=bi
}bi=a7
}this._firstPT=a8
}return true
};
X.parse=function(bd,be,bk,bb){var a7=bd.style,a8,ba,a9,i,bh,bg,bf,bj,bc,bi;
for(a8 in be){bg=be[a8];
if(typeof(bg)==="function"){bg=bg(aN,aC)
}ba=b[a8];
if(ba){bk=ba.parse(bd,bg,a8,this,bk,bb,be)
}else{if(a8.substr(0,2)==="--"){this._tween._propLookup[a8]=this._addTween.call(this._tween,bd.style,"setProperty",aK(bd).getPropertyValue(a8)+"",bg+"",a8,false,a8);
continue
}else{bh=C(bd,a8,Q)+"";
bc=(typeof(bg)==="string");
if(a8==="color"||a8==="fill"||a8==="stroke"||a8.indexOf("Color")!==-1||(bc&&aa.test(bg))){if(!bc){bg=a0(bg);
bg=((bg.length>3)?"rgba(":"rgb(")+bg.join(",")+")"
}bk=j(a7,a8,bh,bg,true,"transparent",bk,0,bb)
}else{if(bc&&ah.test(bg)){bk=j(a7,a8,bh,bg,true,null,bk,0,bb)
}else{a9=parseFloat(bh);
bf=(a9||a9===0)?bh.substr((a9+"").length):"";
if(bh===""||bh==="auto"){if(a8==="width"||a8==="height"){a9=aM(bd,a8,Q);
bf="px"
}else{if(a8==="left"||a8==="top"){a9=e(bd,a8,Q);
bf="px"
}else{a9=(a8!=="opacity")?0:1;
bf=""
}}}bi=(bc&&bg.charAt(1)==="=");
if(bi){i=parseInt(bg.charAt(0)+"1",10);
bg=bg.substr(2);
i*=parseFloat(bg);
b=="vw"||bj=a8,i,bj);
bj="px"
}}}if(bi){if(i||i===0){bg=(i+a9)+bj
}}}}}}if(bi){i+=a9
}if((a9||a9===0)&&(i||i===0)){bk=new u(a7,a8,a9,i-a9,bk,0,a8,(E!==false&&(bj==="px"||a8==="zIndex")),0,bh,bg);
bk.xs0=bj
}else{if(a7[a8]===undefined||!bg&&(bg+""==="NaN"||bg==null)){at("invalid "+a8+" tween value: "+be[a8])
}else{bk=new u(a7,a8,i||a9||0,0,bk,-1,a8,false,0,bh,bg);
bk.xs0=(bg==="none"&&(a8==="display"||a8.indexOf("Style")!==-1))?bh:bg
}}}}}}if(bb){if(bk&&!bk.plugin){bk.plugin=bb
}}}return bk
};
X.setRatio=function(p){var a9=this._firstPT,a8=0.000001,bb,ba,a7;
if(p===1&&(this._tween._time===this._tween._duration||this._tween._time===0)){while(a9){if(a9.type!==2){if(a9.r&&a9.type!==-1){bb=a9.r(a9.s+a9.c);
if(!a9.type){a9.t[a9.p]=bb+a9.xs0
}else{if(a9.type===1){a7=a9.l;
ba=a9.xs0+bb+a9.xs1;
for(a7=1;
a7<a9.l;
a7++){ba+=a9["xn"+a7]+a9["xs"+(a7+1)]
}a9.t[a9.p]=ba
}}}else{a9.t[a9.p]=a9.e
}}else{a9.setRatio(p)
}a9=a9._next
}}else{if(p||!(this._tween._time===this._tween._duration||this._tween._time===0)||this._tween._rawPrevTime===-0.000001){while(a9){bb=a9.c*p+a9.s;
if(a9.r){bb=a9.r(bb)
}else{if(bb<a8){if(bb>-a8){bb=0
}}}if(!a9.type){a9.t[a9.p]=bb+a9.xs0
}else{if(a9.type===1){a7=a9.l;
if(a7===2){a9.t[a9.p]=a9.xs0+bb+a9.xs1+a9.xn1+a9.xs2
}else{if(a7===3){a9.t[a9.p]=a9.xs0+bb+a9.xs1+a9.xn1+a9.xs2+a9.xn2+a9.xs3
}els9.se{if(a9.setRatio){a9.setRatio(p)
}}}}a9=a9._next
}}else{while(a9){if(a9.type!==2){a9.t[a9.p]=a9.b
}else{a9.setRatio(p)
}a9=a9._next
}}}};
X._enableTransforms=function(i){this._transform=this._transform||c(this._target,Q,true);
this._transformType=(!(this._transform.svg&&G)&&(i||this._transformType===3))?3:2
};
var aj=function(i){this.t[this.p]=this.e;
this.data._lin(a8){if(p){p._prev=a8
}if(a8._next){a8._next._prev=a8._prev
}if(a8._prev){a8._prev._next=a8._next
}else{if(this._firstPT===a8){this._firstPT=a8._next;
i=true
}}if(a7){a7._next=a8
}else{if(!i&&this._firstPT===null){this._firstPT=a8
}}a8._next=p;
a8._prev=a7
}return a8
};
X._mod=function(p){var i=this._firstPT;
while(i){if(typeof(p[i.p])==="function"){i.r=p[i.p]
}i=i._next
}};
X._kill=function(a9){var ba=a9,a8,a7,i;
if(a9.autoAlpha||a9.alpha){ba={};
for(a7 in a9){ba[a7]=a9[a7]
}ba.opacity=1;
if(ba.autoAlpha){ba.visibility=1
}}if(a9.className&&(a8=this._classNamePT)){i=a8.xfirst;
if(i&&i._prev){this._linkCSSP(i._prev,a8._next,i._prev._prev)
}else{if(i===this._firstPT){this._firstPT=a8._next
}}if(a8._next){this._linkCSSP(a8._next,a8._next._next,i._prev)
}this._classNamePT=null
}a8=this._firstPT;
while(a8){if(a8.plugin&&a8.plugin!==a7&&a8.plugin._kill){a8.plugin._kill(a9);
a7=a8.plugin
}a8=a8._next
}return F.prototype._kill.call(this,ba)
};
var a2=function(bb,ba,p){var a8,a7,bc,a9;
if(bb.slice){a7=bb.length;
while(--a7>-1){a2(bb[a7],ba,p)
}return
}a8=bb.childNodes;
a7=a8.length;
while(--a7>-1){bc=a8[a7];
a9=bc.type;
if(bc.style){ba.push(aE(bc));
if(p){p.push(bc)
}}if((a9===1||a9===9||a9===11)&&bc.childNodes.length){a2(bc,ba,p)
}}};
aF.cascadeTo=function(bd,a9,bf){var bj=s.to(bd,a9,bf),bb=[bj],bg=[],be=[],bc=[],bi=s._internals.reservedProps,ba,a8,a7,bh;
bd=bj._targets||bj.target;
a2(bd,bg,bc);
bj.render(a9,true,true);
a2(bd,be);
bj.render(0,true,true);
bj._enabled(true);
ba=bc.length;
while(--ba>-1){a8=q(bc[ba],bg[ba],be[ba]);
if(a8.firstMPT){a8=a8.difs;
for(a7 in bf){if(bi[a7]){a8[a7]=bf[a7]
}}bh={};
for(a7 in a8){bh[a7]=bg[ba][a7]
}bb.push(s.fromTo(bc[ba],a9,bh,a8))
}}return bb
};
F.activate([aF]);
return aF
},true);
(function(){var b=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(g,f,e){this._tween=e;
return true
}}),a=function(e){var f=e<1?Math.pow(10,(e+"").length-2):1;
return function(g){return((Math.round(g/e)*e*f)|0)/f
}
},d=function(f,e){while(f){if(!f.f&&!f.blob){f.m=e||Math.round
}f=f._next
}},c=b.prototype;
c._onInitAllProps=function(){var g=this._tween,j=g.vars.roundProps,m={},e=g._propLookup.roundProps,l,h,f,k;
if(typeof(j)==="object"&&!j.push){for(k in j){m[k]=a(j[k])
}}else{if(typeof(j)==="string"){j=j.split(",")
}f=j.length;
while(--f>-1){m[j[f]]=Math.round
}}for(k in m){l=g._firstPT;
while(l){h=l._next;
if(l.pg){l.t._mod(m)
}else{if(l.n===k){if(l.f===2&&l.t){d(l.t._firstPT,m[k])
}else{this._add(l.t,k,l.s,l.c,m[k]);
if(h){h._prev=l._prev
}if(l._prev){l._prev._next=h
}else{if(g._firstPT===l){g._firstPT=h
}}l._next=l._prev=null;
g._propLookup[k]=e
}}}l=h
}}return false
};
c._add=function(h,g,f,i,e){this._addTween(h,g,f,f+i,g,e||Math.round);
this._overwriteProps.push(g)
}
}());
(function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(f,d,c,b){var e,a;
if(typeof(f.setAttribute)!=="function"){return false
}for(e in d){a=d[e];
if(typeof(a)==="function"){a=a(b,f)
}this._addTween(f,"setAttribute",f.getAttribute(e)+"",a+"",e,false,e);
this._overwriteProps.push(e)
}return true
}})
}());
_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(f,i,k,e){if(typeof(i)!=="object"){i={rotation:i}
}this.finals={};
var l=(i.useRadians===true)?Math.PI*2:360,d=0.000001,b,j,a,c,h,g;
for(b in i){if(b!=="useRadians"){c=i[b];
if(typeof(c)==="function"){c=c(e,f)
}g=(c+"").split("_");
j=g[0];
a=parseFloat((typeof(f[b])!=="function")?f[b]:f[((b.indexOf("set")||typeof(f["get"+b.substr(3)])!=="function")?b:"get"+b.substr(3))]());
c=this.finals[b]=(typeof(j)==="string"&&j.charAt(1)==="=")?a+parseInt(j.charAt(0)+"1",10)*Number(j.substr(2)):Number(j)||0;
h=c-a;
if(g.length){j=g.join("_");
if(j.indexOf("short")!==-1){h=h%l;
if(h!==h%(l/2)){h=(h<0)?h+l:h-l
}}if(j.indear=b._next
}}}})._autoCSS=true;
_gsScope._gsDefine("easing.Back",["easing.Ease"],function(s){var g=(_gsScope.GreenSockGlobals||_gsScope),j=g.com.greensock,h=Math.PI*2,l=Math.PI/2,c=j._class,n=function(w,t){var v=c("easing."+w,function(){},true),u=v.prototype=new s();
u.constructor=v;
u.getRatio=t;
return v
},e=s.register||function(){},a=function(u,t,w,v,p){var x=c("easing."+u,{easeOut:new t(),easeIn:new w(),easeInOut:new v()},true);
e(x,u);
return x
},i=function(u,t,p){this.t=u;
this.v=t;
if(p){this.next=p;
p.prev=this;
this.c=p.v-t;
this.gap=p.t-u
}},f=function(w,t){var v=c("easing."+w,function(p){this._p1=(p||p===0)?p:1.70158;
this._p2=this._p1*1.525
},true),u=v.prototype=new s();
u.constructor=v;
u.getRatio=t;
u.config=function(p){return new v(p)
};
return v
},r=a("Back",f("Back|t===0)?t:0.7;
if(p==null){p=0.7
}else{if(p>1){p=1
}}this._p=(p!==1)?t:0;
this._p1=(1-p)/2;
this._p2=p;
this._p3=this._p1+this._p2;
this._calcEnd=(u===true)
},true),k=o.prototype=new s(),q,m,b,d;
k.constructor=o;
k.getRatio=function(u){var t=u+(0.5-u)*this._p;
if(u<this._p1){return this._calcEnd?1-((u=1-(u/this._p1))*u):t-((u=1-(u/this._p1))*u*u*u*t)
}else{if(u>this._p3){return this._calcEnd?(u===1?0:1-(u=(u-this._p3)/this._p1)*u):t+((u-t)*(u=(u-this._p3)/this._p1)*u*u*u)
}}return this._calcEnd?1:t
};
o.ease=new o(0.7,0.7);
k.config=o.config=function(p,t,u){return new o(p,t,u)
};
q=c("easing.SteppedEase",function(p,t){p=p||1;
this._p1=1/p;
this._p2=p+(t?0:1);
this._p3=t?1:0
},true);
k=q.prototype=new s();
k.constructor=q;
k.getRatio=function(t){if(t<0){t=0
}else{if(t>=1){t=0.999999999
}}return(((this._p2*t)|0)+this._p3)*this._p1
};
k.config=q.config=function(p,t){return new q(p,t)
};
m=c("easing.ExpoScaleEase",function(u,p,t){this._p1=Math.log(p/u);
this._p2=p-u;
this._p3=u;
this._ease=t
},true);
k=m.prototype=new s();
k.constructor=m;
k.getRatio=function(t){if(this._ease){t=this._ease.getRatio(t)
}return(this._p3*Math.exp(this._p1*t)-this._p3)/this._p2
};
k.config=m.config=function(u,p,t){return new m(u,p,t)
};
b=c("easing.RoughEase",function(D){D=D||{};
var J=D.taper||"none",G=[],w=0,I=(D.points||20)|0,A=I,u=(D.randomize!==false),B=(D.clamp===true),H=(D.template instanceof s)?D.template:null,v=(typeof(D.strength)==="number")?D.strength*0.4:0.4,F,E,t,C,z,p;
while(--A>-1){F=u?Math.random():(1/I)*A;
E=H?H.getRatio(F):F;
if(J==="none"){t=v
}else{if(J==="out"){C=1-F;
t=C*C*v
}else{if(J==="in"){t=F*F*v
}else{if(F<0.5){C=F*2;
t=C*C*0.5*v
}else{C=(1-F)*2;
t=C*C*0.5*v
}}}}if(u){E+=(Math.random()*t)-(t*0.5)
}else{if(A%2){E+=t*0.5
}else{E-=t*0.5
}}if(B){if(E>1){E=1
}else{if(E<0){E=0
}}}G[w++]={x:F,y:E}
}G.sort(function(y,x){return y.x-x.x
});
p=new i(1,1,null);
A=I;
while(--A>-1){z=G[A];
p=new i(z.x,z.y,p)
}this._prev=new i(0,0,(p.t!==0)?p:p.next)
},true);
k=b.prototype=new s();
k.constructor=b;
k.getRatio=function(u){var t=this._prev;
if(u>t.t){while(t.next&&u>=t.t){t=t.next
}t=t.prev
}else{while(t.prev&&u<=t.t){t=t.prev
}}this._prev=t;
return(t.v+((u-t.t)/t.gap)*t.c)
};
k.config=function(p){return new b(p)
};
b.ease=new b();
a("Bounce",n("BounceOut",function(t){if(t<1/2.75){return 7.5625*t*t
}else{if(t<2/2.75){return 7.5625*(t-=1.5/2.75)*t+0.75
}else{if(t<2.5/2.75){return 7.5625*(t-=2.25/2.75)*t+0.9375
}}}return 7.5625*(t-=2.625/2.75)*t+0.984375
}),n("BounceIn",function(t){if((t=1-t)<1/2.75){return 1-(7.5625*t*t)
}else{if(t<2/2.75){return 1-(7.5625*(t-=1.5/2.75)*t+0.75)
}else{if(t<2.5/2.75){return 1-(7.5625*(t-=2.25/2.75)*t+0.9375)
}}}return 1-(7.5625*(t-=2.625/2.75)*t+0.984375)
}),n("BounceInOut",function(t){var u=(t<0.5);
if(u){t=1-(t*2)
}else{t=(t*2)-1
}if(t<1/2.75){t=7.5625*t*t
}else{if(t<2/2.75){t=7.5625*(t-=1.5/2.75)*t+0.75
}else{if(t<2.5/2.75){t=7.5625*(t-=2.25/2.75)*t+0.9375
}else{t=7.5625*(t-=2.625/2.75)*t+0.984375
}}}return u?(1-t)*0.5:t*0.5+0.5
}));
a("Circ",n("CircOut",function(t){return Math.sqrt(1-(t=t-1)*t)
}),n("CircIn",function(t){return -(Math.sqrt(1-(t*t))-1)
}),n("CircInOut",function(t){return((t*=2)<1)?-0.5*(Math.sqrt(1-t*t)-1):0.5*(Math.sqrt(1-(t-=2)*t)+1)
}));
d=function(x,u,t){var w=c("easing."+x,function(p,y){this._p1=(p>=1)?p:1;
this._p2=(y||t)/(p<1?p:1);
this._p3=this._p2/h*(Math.asin(1/this._p1)||0);
this._p2=h/this._p2
},true),v=w.prototype=new s();
v.constructor=w;
v.getRatio=u;
v.config=function(p,y){return new w(p,y)
};
return w
};
a("Elastic",d("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1
},0.3),d("ElasticIn",function(t){return -(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))
},0.3),d("ElasticInOut",function(t){return((t*=2)<1)?-0.5*(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)*0.5+1
},0.45));
a("Expo",n("ExpoOut",function(t){return 1-Math.pow(2,-10*t)
}),n("ExpoIn",function(t){return Math.pow(2,10*(t-1))-0.001
}),n("ExpoInOut",function(t){return((t*=2)<1)?0.5*Math.pow(2,10*(t-1)):0.5*(2-Math.pow(2,-10*(t-1)))
}));
a("Sine",n("SineOut",function(t){return Math.sin(t*l)
}),n("SineIn",function(t){return -Math.cos(t*l)+1
}),n("SineInOut",function(t){return -0.5*(Math.cos(Math.PI*t)-1)
}));
c("easing.EaseLookup",{find:function(p){return s.map[p]
}},true);
e(g.SlowMo,"SlowMo","ease,");
e(b,"RoughEase","ease,");
e(q,"SteppedEase","ease,");
return r
},true)
});
if(_gsScope._gsDefine){_gsScope._gsQueue.pop()()
}(function(V,s){var r={},k=V.document,I=V.GreenSockGlobals=V.GreenSockGlobals||V,X=I[s];
if(X){if(typeof(module)!=="undefined"&&module.exports){module.exports=X
}return X
}var C=function(al){var aj=al.split("."),am=I,ak;
for(ak=0;
ak<aj.length;
ak++){am[aj[ak]]=am=am[aj[ak]]||{}
}return am
},m=C("com.greensock"),f=1e-10,w=function(ak){var p=[],aj=ak.length,al;
for(al=0;
al!==aj;
p.push(ak[al++])){}return p
},H=function(){},af=(function(){var a=Object.prototype.toString,i=a.call([]);
return function(p){return p!=null&&(p instanceof Array||(typeof(p)==="object"&&!!p.push&&a.call(p)===i))
}
}()),ah,ab,Y,B,K,j={},F=function(i,ak,aj,p){this.sc=(j[i])?j[i].sc:[];
j[i]=this;
this.gsClass=null;
this.func=aj;
var a=[];
this.check=function(aq){var ao=ak.length,an=ao,ap,am,ar,al;
while(--ao>-1){if((ap=j[ak[ao]]||new F(ak[ao],[])).gsClass){a[ao]=ap.gsClass;
an--
}else{if(aq){ap.sc.push(this)
}}}if(an===0&&aj){am=("com.greensock."+i).split(".");
ar=am.pop();
al=C(am.join("."))[ar]=this.gsClass=aj.apply(aj,a);
if(p){I[ar]=r[ar]=al;
if(typeof(module)!=="undefined"&&module.exports){if(i===s){module.exports=r[s]=al;
for(ao in r){al[ao]=r[ao]
}}else{if(r[s]){r[s][ar]=al
}}}else{if(typeof(define)==="function"&&define.amd){define((V.GreenSockAMDPath?V.GreenSockAMDPath+"/":"")+i.split(".").pop(),[],function(){return al
})
}}}for(ao=0;
ao<this.sc.length;
ao++){this.sc[ao].check()
}}};
this.check(true)
},c=V._gsDefine=function(a,aj,p,i){return new F(a,aj,p,i)
},t=m._class=function(a,p,i){p=p||function(){};
c(a,[],function(){return p
},i);
return p
};
c.globals=I;
var ag=[0,0,1,1],D=t("easing.Ease",function(p,aj,i,a){this._func=p;
this._type=i||0;
this._power=a||0;
this._params=aj?ag.concat(aj):ag
},true),ai=D.map={},q=D.register=function(p,ar,ao,am){var an=ar.split(","),ak=an.length,al=(ao||"easeIn,easeOut,easeInOut").split(","),ap,a,aj,aq;
while(--ak>-1){a=an[ak];
ap=am?t("easing."+a,null,true):m.easing[a]||{};
aj=al.length;
while(--aj>-1){aq=al[aj];
ai[a+"."+aq]=ai[aq+a]=ap[aq]=p.getRatio?p:p[aq]||new p()
}}};
Y=D.prototype;
Y._calcEnd=false;
Y.getRatio=function(ak){if(this._func){this._params[0]=ak;
return this._func.apply(null,this._params)
}var a=this._type,i=this._power,aj=(a===1)?1-ak:(a===2)?ak:(ak<0.5)?ak*2:(1-ak)*2;
if(i===1){aj*=aj
}else{if(i===2){aj*=aj*aj
}else{if(i===3){aj*=aj*aj*aj
}else{if(i===4){aj*=aj*aj*aj*aj
}}}}return(a===1)?1-aj:(a===2)?aj:(ak<0.5)?aj/2:1-(aj/2)
};
ah=["Linear","Quad","Cubic","Quart","Quint,Strong"];
ab=ah.length;
while(--ab>-1){Y=ah[ab]+",Power"+ab;
q(new D(null,null,1,ab),Y,"easeOut",true);
q(new D(null,null,2,ab),Y,"easeIn"+((ab===0)?",easeNone":""));
q(new D(null,null,3,ab),Y,"easeInOut")
}ai.linear=m.easing.Linear.easeIn;
ai.swing=m.easing.Quad.easeInOut;
var aa=t("events.EventDispatcher",function(a){this._listeners={};
this._eventTarget=a||this
});
Y=aa.prototype;
Y.addEventListener=function(am,ao,ap,p,an){an=an||0;
var al=this._listeners[am],ak=0,a,aj;
if(this===B&&!K){B.wake()
}if(al==null){this._listeners[am]=al=[]
}aj=al.length;
while(--aj>-1){a=al[aj];
if(a.c===ao&&a.s===ap){al.splice(aj,1)
}else{if(ak===0&&a.pr<an){ak=aj+1
}}}al.splice(ak,0,{c:ao,s:ap,up:p,pr:an})
};
Y.removeEventListener=function(p,ak){var aj=this._listeners[p],a;
if(aj){a=aj.length;
while(--a>-1){if(aj[a].c===ak){aj.splice(a,1);
return
}}}};
Y.dispatchEvent=function(aj){var al=this._listeners[aj],p,a,ak;
if(al){p=al.length;
if(p>1){al=al.slice(0)
}a=this._eventTarget;
while(--p>-1){ak=al[p];
if(ak){if(ak.up){ak.c.call(ak.s||a,{type:aj,target:a})
}else{ak.c.call(ak.s||a)
}}}}};
var l=V.requestAnimationFrame,n=V.cancelAnimationFrame,U=Date.now||function(){return new Date().getTime()
},M=U();
ah=["ms","moz","webkit","o"];
ab=ah.length;
while(--ab>-1&&!l){l=V[ah[ab]+"RequestAnimationFrame"];[ah[ab]+se,al=500,f(!an||av>0||ayaw){if(l=av||(1/f);
i=Math.min(aw,al,0)
};
aq.sleep=function(){if(ar==null){return
}if(!p||!n){clearTimeout(ar)
}else{n(ar)
}at=H;
ar=null;
if(aq===B){K=false
}};
aq.wake=function(av){if(ar!==null){aq.sleep()
}else{if(av){a+=-M+(M=U())
}else{if(aq.frame>10){M=U()-al+5
}}}at=(an===0)?H:(!p||!l)?function(aw){return setTimeout(aw,((am-aq.time)*1000+1)|0)
}:l;
if(aq===B){K=true
}aj(2)
};
aq.fps=function(av){if(!arguments.length){return an
}an=av;
au=1/(an||60);
am=this.time+au;
aq.wake()
};
aq.useRAF=function(av){if(!atate!=="hidden"){aq.useRAF(falsi=i||{};
this._duration=this._totalDuration=p||0;
this._delay=Number(i.delay)||0;
this._timeScale=1;
this._active=(i.immediateRender===true);
this.data=i.data;
this._reversed=(i.reversed===true);
if(!J){return
}if(!K){B.wake()
}var a=this.vars.useFrames?u:J;
a.add(this,a._time);
if(this.vars.paused){this.paused(true)
}});
B=v.ticker=new m.Ticker();
Y=v.prototype;
Y._dirty=Y._gc=Y._initted=Y._paused=false;
Y._totalTime=Y._time=0;
Y._rawPrevTime=-1;
Y._next=Y._last=Y._onUpdate=Y._timeline=Y.timeline=null;
Y._pau.seek(i,a)
}return this.reversed(false).paused(false)
};
Y.pause=function(a,i){if(a!=null){this.seek(a,i)
}return this.paused(true)
};
Y.resume=function(i,a){if(i!=null){this.seek(i,a)
}return this.paused(false)
};
Y.seek=function(i,a){return this.totalTime(Number(i),a!==false)
};
Y.restart=function(i,a){return this.reversed(false).paused(false).totalTime(i?-this._delay:0,(a!==false),true)
};
Y.rse)
};
Y.re{if(!i&&this.timeline){this._timeline._remove(this,true)
}}}return false
};
Y._kill=function(i,a){return this._enabled(false,false)
};
Y.kill=function(i,a){this._kill(i,a);
return this
};
Y._uncache=function(a){var i=a?this:this.timeline;
while(i){i._dirty=true;
i=i.timeline
}return this
};
Y._swapSelfInParams=function(p){var a=p.length,aj=p.concat();
while(--a>-1){if(p[a]==="{self}"){aj[a]=this
}}return aj
};
Y._callback=function(aj){var i=this.vars,al=i[aj],ak=i[aj+"Params"],p=i[aj+"Scope"]||i.callbackScope||this,a=ak?ak.length:0;
switch(a){case 0:al.call(p);
break;
case 1:al.call(p,ak[0]);
break;
case 2:al.call(p,ak[0],ak[1]);
break;
default:al.apply(p,ak)
}};
Y.eventCallback=function(p,ak,aj,i){if((p||"").substr(0,2)==="on"){var a=this.vars;
if(arguments.length===1){return a[p]
}if(ak==null){delete a[p]
}else{a[p]=ak;
a[p+"Params"]=(af(aj)&&aj.join("").indexOf("{self}")!==-1)?this._swapSelfInParams(aj):aj;
a[p+"Scope"]=i
}if(p==="onUpdate"){this._onUpdate=ak
}}return this
};
Y.delay=function(a){if(!arguments.length){return this._delay
}if(this._timeline.smoothChildTiming){this.startTime(this._startTime+a-this._delay)
}this._delay=a;
return this
};
Y.duration=function(a){if(!arguments.length){this._dirty=false._duration
}this._duration=this._totalDuration=a;
this._uncache(true);
if(this._timeline.smoothChildTiming){if(this._time>0){if(this._time<this._duration){if(a!==0){this.totalTime(this._totalTime*(a/this._duration),true)
}}}}return this
};
Y.totalDuration=function(a){this._dirty=false;
return(!arguments.length)?this._totalDuration:this.duration(a)
};
Y.time=function(i,a){if(!argumentme
}if(this._dirty){this.totalDuration()
}returnents.length){return this._totalTime
}if(this._timeline){if(aj<0&&!i){aj+=th.smoothChildTiming){if(this._dirty){this.totalDuration()
}var ak=this._totalDuration,a=this._timeline;
if(aj>ak&&!i){aj=ak
}this._startTime=(this._paused?this._pauseTime:a._time)-((!this._reversed?aj:ak-aj)/this._timeScale);
if(!a._dirty){this._uncache(false)
}if(a._timeline){while(a._timeline){if(a._timeline._time!==(a._startTime+a._totalTime)/a._timeScale){a.totaline,p,a;
if(ajuncache(false)
}this._pauseTime=aj?p:null;
this._paused=aj;
this._active=this.isActive();
if(!aj&&a!==0&&this._initted&&this.duration()){p=i.smoothChildTiming?this._totalTime:(p-this._startTime)/this._timeScale;
this.render(p,(p===this._totalTime),true)
}}}if(this._gc&&!aj){this._enabled(true,false)
}return this
};
var ad=t("core.SimpleTimeline",function(a){v.call(this,0,a);
this.autoRemoveChildren=this.smoothChildTiming=true
});
Y=ad.prototype=new v();
Y.construct=Y._recent=null;
Y._sortCif(this!==al._timeline){al._pauseTime=this.rawTime()-(al._timeline.rawTime()-al._pauseTime)
}}if(al.timeline){al.timeline._remove(al,true)
}al.timeline=al._timeline=this;
if(al._gc){al._enabled(true,true)
}p=this._last;
if(this._sortChildren){i=al._startTime;
while(p&&p._startTime>i){p=p._prev
}}if(p){al._next=p._next;
p._next=al
}else{al._next=this._first;
this._first=al
}if(al._next){al._next._prev=al
}else{this._last=al
}al._prev=p;
this._recent=al;
if(this._timeline){this._uncache(true)
}return this
};
Y._remove=function(a,i){if(a.timeline===this){if(!i){a._enabled(false,true)
}if(a._prev){a._prev._next=a._next
}else{if(this._first===a){this._first=a._next
}}if(a._next){a._next._prev=a._prev
}else{if(this._last===a){this._last=a._prev
}}a._next=a._prev=a.timeline=null;
if(a===this._recent){this._recent=this._last
}if(this._timeline){this._uncache(true)
}}return this
};
Y.render=function(ak,p,aj){var a=this._first,i;
this._totalTime=this._time=this._rawPrevTime=ak;
while(a){i=a._next;
if(a._active||(ak>=a._startTime&&!a._paused&&!a._gc)){if(!a._reversed){a.render((ak-a._startTime)*a._timeScale,p,aj)
}else{a.render(((!a._dirty)?a._totalDuration:a.totalDuration())-((ak-a._startTime)*a._timeScale),p,aj)
}}a=i
}};
Y.rawTime=function(){if(!K){B.wake()
}return this._totalTime
};
var E=t("TweenLite",function(an,am,al){v.call(this,am,al);
this.render=E.prototype.render;
if(an==null){throw"Cannot tween a null target."
}this.target=an=(typeof(an)!=="string")?an:E.selector(an)||an;
var ao=(an.jquery||(an.length&&an!==V&&an[0]&&(an[0]===V||(an[0].nodeType&&an[0].style&&!an.nodeType)))),p=this.vars.overwrite,ak,aj,a;
this._overwrite=p=(p==null)?Z[E.defaultOverwrite]:(typeof(p)==="number")?p>>0:Z[p];
if((ao||an instanceof Array||(an.push&&af(an)))&&typeof(an[0])!=="number"){this._targets=a=w(an);
this._propLookup=[];
this._siblings=[];
for(ak=0;
ak<a.length;
ak++){aj=a[ak];
if(!aj){a.splice(ak--,1);
continue
}else{if(typeof(aj)==="string"){aj=a[ak--]=E.selector(aj);
if(typeof(aj)==="string"){a.splice(ak+1,1)
}continue
}else{if(aj.length&&aj!==V&&aj[0]&&(aj[0]===V||(aj[0].nodeType&&aj[0].style&&!aj.nodeType))){a.splice(ak--,1);
this._targets=a=a.concat(w(aj));
continue
}}}this._siblings[ak]=P(aj,this,false);
if(p===1){if(this._siblings[ak].length>1){g(aj,this,null,1,this._siblings[ak])
}}}}else{this._propLookup={};
this._siblings=P(an,this,false);
if(p===1){if(this._siblings.length>1){g(an,this,null,1,this._siblings)
}}}if(this.vars.immediateRender||(am===0&&this._delay===0&&this.vars.immediateRender!==false)){this._time=-f;
this.render(Math.min(0,-this._delay))
}},true),ae=function(a){return(a&&a.length&&a!==V&&a[0]&&(a[0]===V||(a[0].nodeType&&a[0].style&&!a.nodeType)))
},h=function(ak,aj){var a={},i;
for(i in ak){if(!R[i]&&(!(i in aj)||i==="transform"||i==="x"||i==="y"||i==="width"||i==="height"||i==="className"||i==="border")&&(!A[i]||(A[i]&&A[i]._autoCSS))){a[i]=ak[i];
delete ak[i]
}}ak.css=a
};
Y=E.prototype=new v();
Y.constructor=E;
Y.kill()._gc=false;
Y.ratio=0;
Y._firstPT=Y._targets=Y._overwrittenProps=Y._startAt=null;
Y._notifyPluginsOfEnabled=Y._lazy=false;
E.version="2.0.2";
E.defaultEase=Y._ease=new D(null,null,1,1);
E.defaultOverwrite="auto";
E.ticker=B;
E.autoSleep=120;
E.lagSmoothing=function(a,i){B.lagSmoothing(a,i)
};
E.selector=V.$||V.jQuery||function(i){var a=V.$||V.jQuery;
if(a){E.selector=a;
return a(i)
}if(!k){k=V.document
}return(!k)?i:(k.querySelectorAll?k.querySelectorAll(i):k.getElementById((i.charAt(0)==="#")?i.substr(1):i))
/[\+-]=-?[\.\d]/,e=function(a){var p=this._firstPT,i=0.000001,aj;
while(p){aj=!p.blob?p.c*a+p.s:(a===1&&this.end!=null)?this.end:a?this.j(p.m){aj=p.m.call(this._twee||p.t,this._tween)
}else{if(aj<i){if(aj>-i&&!p.blob){aj=0
}}}if(!p.f){p.t[p.p]=aj
}else{if(p.fp){p.t[p.p](p.fp,aj)
}else{p.t[p.p](aj)
}}p=p._next
}},d=function(ak,ap,al,aw){var au=[],p=0,ax="",ao=0,at,aj,ar,aq,am,av,an;
au.start=ak;
au.end=ap;
ak=au[0]=ak+"";
ap=au[1]=ap+"";
if(al){al(au);
ak=au[0];
ap=au[1]
}au.length=0;
at=ak.match(S)||[];
aj=ap.match(S)||[];
if(aw){aw._next=null;
aw.blob=1;
au._firstPT=au._applyPT=aw
}am=aj.length;
for(aq=0;
aq<am;
aq++){an=aj[aq];
av=ap.substr(p,ap.indexOf(an,p)-p);
ax+=(av||!aq)?av:",";
p+=av.length;
if(ao){ao=(ao+1)%5
}else{if(av.substr(-5)==="rgba("){ao=1
}}if(an===at[aq]||at.length<=aq){ax+=an
}else{if(ax){au.push(ax);
ax=""
}ar=parseFloat(at[aq]);
au.push(ar);
au._firstPT={_next:au._firstPT,t:au,p:au.length-1,s:ar,c:((an.charAt(1)==="=")?parseInt(an.charAt(0)+"1",10)*parseFloat(an.substr(2)):(parseFloat(an)-ar))||0,f:0,m:(ao&&ao<4)?Math.round:0}
}p+=an.length
}ax+=ap.substr(p);
if(ax){au.push(ax)
}au.setRatio=e;
if(z.test(ap)){au.end=null
}return au
},x=function(an,i,aj,al,ak,aq,p,av,am){if(typeof(al)==="function"){al=al(am||0,an)
}var ao=typeof(an[i]),ap=(ao!=="function")?"":((i.indexOf("set")||typeof(an["get"+i.substr(3)])!=="function")?i:"get"+i.substr(3)),au=(aj!=="get")?aj:!ap?an[i]:p?an[ap](p):an[ap](),ar=(typeof(al)==="string"&&al.charAt(1)==="="),at={t:an,p:i,s:au,f:(ao==="function"),pg:0,n:ak||i,m:(!aq?0:(typeof(aq)==="function")?aq:Math.round),pr:0,c:ar?parseInt(al.charAt(0)+"1",10)*parseFloat(al.substr(2)):(parseFloat(al)-au)||0},a;
if(typeof(au)!=="number"||(typeof(al)!=="number"&&!ar)){if(p||isNaN(au)||(!ar&&isNaN(al))||typeof(au)==="boolean"||typeof(al)==="boolean"){at.fp=p;
a=d(au,(ar?(parseFloat(at.s)+at.c)+(at.s+"").replace(/[0-9\-\.]/g,""):al),av||E.defaultStringFilter,at);
at={t:a,p:"setRatio",s:0,c:1,f:2,pg:0,n:ak||i,pr:0,m:0}
}else{at.s=parseFloat(au);
if(!ar){at.c=(parseFloat(al)-at.s)||0
}}}if(at.c){if((at._next=this._firstPT)){at._next._prev=at
}this._firstPT=at;
return at
}},Q=E._internals={isArray:af,isSelector:ae,lazyTweens:G,blobDif:d},A=E._plugins={},y=Q.tweenLookup={},O=0,R=Q.reservedProps={ease:1,delay:1,overwrite:1pe:1,onReversa:1,paused:1,reversed:1,autoCSS:1,lazy:te=false;
aq.immediateRender.onUpdateScope||ar.callbackScope||this;
thi.defaultEase:(am instanceofower=this._ease._power;
th.vars[a],this,am)){this._f=al._overwriteProps.le}if(at._next){at._next._prev=,ar,am)
}}}}if(this._f=this._time,ak=this._duratihis._time=ak;
this.ratio=this.}}}this._rawPrevTime=al=(io=a
}else{if(aj/ak<0.5is._lazy=[aj,aq];
retuhildren){this._enabled(=true
}}}else{if(this._targetfalse;
this._propLookup=(der=(a.immediateRender!=falsope:p,onReverseComplete:ak,ile(a){p=i[this._propName]||(a.nginEvent=function(p,a){vaak?ak._prev:aj)){al._prev.[p])==="function"){if.io
 * 
 * @version 2.0.7
 * @lugin.
 *
 * requires: Gc"),TweenMax,TimelineMax)
n(){},b);
if(!e){c("("+a+") -> ERROR: The ScrollMa be found. Please make surents,1,0,"("+a+")","->");
g._log.apply(this,arguments)
});
g.on("destroy.plugin_gsap",function(k){g.removeTween(k.reset)
});
var i=function(){if(j){var k=g.progress(),l=g.state();
if(j.repeat&&j.repeat()===-1){if(l==="DURING"&&j.paused()){j.play()
}else{if(l!=="DURING"&&!j.paused()){j.pause()
}}}else{if(k!=j.progress()){if(g.duration()===0){if(k>0){j.play()
}else{j.reverse()
}}else{if(g.tweenChanges()&&j.tweenTo){j.tweenTo(k*j.duration())
}else{j.progress(k).pause()
}}}}}};
g.setTween=function(u,o,n){var l;
if(arguments.length>1){if(arguments.length<3){n=o;
o=1
}u=f.to(u,o,n)
}try{if(d){l=new d({smoothChildTiming:true}).add(u)
}else{l=u
}l.pause()
}catch(s){h(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
return g
}if(j){g.removeTween()
}j=l;
if(u.repeat&&u.repeat()===-1){j.repeat(-1);
j.yoyo(u.yoyo())
}if(g.tweenChanges()&&!j.tweenTo){h(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.")
}if(j&&g.controller()&&g.triggerElement()&&g.loglevel()>=2){var k=f.getTweensOf(g.triggerElement()),m=g.controller().info("vertical");
k.forEach(function(y,w){var x=y.vars.css||y.vars,z=m?(x.top!==undefined||x.bottom!==undefined):(x.left!==undefined||x.right!==undefined);
if(z){h(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
return false
}})
}if(parseFloat(TweenLite.version)>=1.14){var t=j.getChildren?j.getChildren(true,true,false):[j],v=function(){h(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
};
for(var q=0,p,r;
q<t.length;
q++){p=t[q];
if(r!==v){r=p.vars.onOverwrite;
p.vars.onOverwrite=function(){if(r){r.apply(this,arguments)
}v.apply(this,arguments)
}
}}}h(3,"added tween");
i();
return g
};
g.removeTween=function(k){if(j){if(k){j.progress(0).pause()
}j.kill();
j=undefined;
h(3,"removed tween (reset: "+(k?"true":"false")+")")
}return g
}
})
}));
$(function(){var a=function(){var b=new FontFaceObserver("SAPBook");
b.load(null,10000).then(function(){$(".button2017:visible:not(.tableComparisonExtendedLink, .finder-facet-mobile) .buttonText").each(function(g,d){var c=$(d);
var e=parseFloat(c.css("line-height"));
var f=Math.round(e*2);
c.dotdotdot({tolerance:0,watch:true,wrap:"letter",height:f})
})
})
};
a();
$(window).on("resize truncateButton2017",a)
});
$(function(){$(".ds-select-button").on("click",function(){$(this).toggleClass("active")
});
$(document).on("click",function(a){if(!$(a.target).closest(".ds-select-button").length){$(".ds-select-button").removeClass("active")
}})
});
(function(a){(function(){var b=a("html");
SAP.isBP=b.hasClass("bp")
}())
}(jQuery));
(function(){var a=function(d){return $(document.createElement("span")).addClass("label-default").html(d)
};
var b=function(){$(".jcf-select-atom-dd-select").each(function(h,f){var d=$(f);
var g=d.closest(".atom-dd-select-container");
var e=g.find(".atom-dd-select").find("option:first").text();
$(f).append(a(e))
})
};
var c=function(){$(d){$(d).on("click",function(){vardy(function(){var d=".roy(d);
jcf.replace(d,"Seleull,isRtl:false,isIos:a("html").hasClasss("horizontallScro.$itemsContainer.on("ArrowL");
m.$rootContainer.ad{return window.matchMedia(mlse{if(u===s&&q!==t){r=q+1
}}d","false");
r.addClass("activniqName||!m.settingsstringify({activeNav:nul.$rootContainer.removeClass("horizontallScroll");
o.rn">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(k,j){return a('<button type="button" />').text(j+1)
},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};
f.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:nuslicked:false};
a.extend(f,f.initials);
f.activeBreakpoint=null;
f.animType=null;
f.animProp=null;
f.breakpoints=[];
f.breakpointSettin=false;
f.hidden="hidden";
f.paused=true;
uldClick=true;
f.$slider=a(g);
f.$slidesdowTimer=null;
e=a(g).doPlay=a.proxy(f.autoPlay,f);
f.autoPlayCayIterator,f);
f.changeSlidekHandler=a.proxy(f.clickHandler,f}}}else{if(f===true){function(){var d=this;
if(d.optiog,e)
}else{c.$slideT.options.asNavFor;
if(c&&c!==null){c=a(c).not(d.$slider)
}return c
};
b.prototype.asNavFor=function(e){var d=this,c=d.getNavTarget();
if(c!==null&&typeof c==="object"){c.each(function(ransition=function(c){var d=this,e={};
if(d.options.fade=this;
if(c.autoPlayprototype.buildArrows=function(){var c=this;
if(c.options.arrows===true){c.$prevArrow=a(c.options.prevArrow).addClass("slick-arrow");
c.$nextArrow=a(c.options.nextArrow).addClass("slick-arrow");
if(c.slideCount>c.options.slidesToShow){c.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
c.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.prependTo(c.options.appendArrows)
}if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.appendTo(c.options.appendArrows)
}if(c.options.infinite!==true){c.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")
}}else{c.$prevArrow.add(c.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"})
}}};
b.prototype.buildDots=function(){var d=this,e,c;
if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){d.$slider.addClass("slick-dotted");
c=a("<ul />").addClass(d.options.dotsClass);
for(e=0;
e<=d.getDotCount();
e+=1){c.append(a("<li />").append(d.options.customPaging.call(this,d,e)))",a(e).attr("style")||"$slideTrack.wrap('<div class="slick-list"/>').parear g=(l*e+((k*m.options.s00/m.options.slidesPercurrentSlide)%e.options.slidesToScroll;
switch(g.data.message){case"previous":f=i===0?e.options.slidesToScroll:e.options.slidesToShow-i;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide-f,false,j)
}break;
case"next":f=i===0?e.options.slidesToScroll:i;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide+f,false,j)
}break;
case"index":var d=g.data.index===0?0:g.data.index||c.index()*e.options.slidesToScroll;
e.slideHandler(e.checkNavigable(d),false,j);
c.children().trigger("focus");
break;
default:return
}};
b.prototype.checkNavigable=function(d){var c=this,e,f;
e=c.getNavigableIndexes();
f=0;
if(d>e[e.length-1]){d=e[e.length-1]
}else{for(var g in e){if(d<e[g]){d=f;
break
}f=e[g]
}}return d
};
b.prototype.cleanUpEvents=function(){var c=this;
if(c.options.dots&&c.$dots!==null){a("li",c.$dots).off("click.slick",c.changeSlide).off("mouseenter.slick",a.proxy(c.interrupt,c,true)).off("mouseleave.slick",a.proxy(c.interrupt,c,false));
if(c.options.accessibility===true){c.$dots.off("keydown.slick",c.keyHandler)
}}c.$slider.off("focus.slick blur.slick");
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow&&c.$prevArrow.off("click.slick",c.changeSlide);
c.$nextArrow&&c.$nextArrow.off("click.slick",c.changeSlide);
if(c.options.accessibility===true){c.$prevArrow&&c.$prevArrow.off("keydown.slick",c.keyHandler);
c.$nextArrow&&c.$nextArrow.off("keydown.slick",c.keyHandler)
}}c.$list.off("touchstart.slick mousedown.slick",c.swipeHandler);
c.$list.off("touchmove.slick mousem
};
b.prototype.cleanUpk",a.proxy(c.interrupt,c,true));
c.$list.off("mouseleave.slick",a.proxy(c.interrupt,c,false))
};
b.prototype.cleanUpRows=function(){var d=this,c;
if(d.options.rows>0){c=d.$slides.children().children();
c.removeAttr("style");
d.$slider.empty().append(c)
}};
b.prototype.clickHandler=function(d){var c=this;
if(c.shouldClick===false){d.stopImmediatePropagation();
d.stopPropagation();
d.preventDefault()
}};
b.prototype.destroy=function(d){var c=this;
c.autoPlayClear();
c.touchObject={};
c.cleanUpEvents();
a(".slick-cloned",c.$slider).detach();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&c.$prevArrow.length){c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.remove()
}}if(c.$nextArrow&&c.$nextArrow.length){c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.remove()
}}if(c.$slides){c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))
});
c.$slideTrack.children(this.options.slide).detach();
c.$slideTrack.detach();
c.$list.detach();
c.$slider.append(c.$slides)
}c.cleanUpRows();
c.$slider.removeClass("slick-slider");
c.$slider.removeClass("slick-initialized");
c.$slider.removeClass("slick-dotted");
c.unslicked=true;
if(!d){c.$slider.trigger("destroy",[c])
}};
b.prototype.disableTransition=function(c){var d=this,e={};
e[d.transitionType]="";
if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.fadeSlide=function(d,e){var c=this;
if(c.cssTransitions===false){c.$slides.eq(d).css({zIndex:c.options.zIndex});
c.$slides.eq(d).animate({opacity:1},c.options.speed,c.options.easing,e)
}else{c.applyTransition(d);
c.$slides.eq(d).css({opacity:1,zIndex:c.options.zIndex});
if(e){setTimeout(function(){c.disableTransitiodes.eq(d).css({opacity:0,zInd=d.is(":focus");
c.auunt>d.options.slidesToShow=((d.slideCount%d.optioe{i=h[0]?h[0].offsetLeft.options.slidesToScroll<=f.options.slidesToShow?f.opti.centerMode===true?e=function(c,e){var d=totype.init=function(c){va);
if(k!==-1){var j="slion"});
a(this).find("but"aria-label".$slides.eq(f).removeAttr("tabindex")
}}e.activateADA()
};
b.prototype.initArrowEvents=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},c.changeSlide);
c.$nextArrow.off("click.slick").on("click.slick",{messaroxy(c.interrupt,c,false))
}};
b.prototype.initializeEvents=function(){var c=this;
c.initArr
c.$list.on("touchstart.slick mousedown.slick",{action:"start"},c.swipeHandler);ck",{action:"move"},c.swipeHandler);
c.$list.on("touchend.slick mouseup.slick",{action:"end"},c.swipeHandler);
c.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},c.swipeHandler);
c.$list.on("click.slick",c.clickHandler)=true){c.$list.on("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.$slideTr
}a(window).on("orientationchange.slick.slick-"+c.i(c.resize,c));
a("[draggab
}};
b.prototype.keyHandler=function(d){var c=this;
if(!d.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(d.keyCode===37&&c.options.accessibility===true){c.changeSlid,functdata-lazy data-srcset data-sizes").removeClassaded",eer("afterChange",[c,d]);
c.animating=false;
if(c.slideCount>c.options.slidesToShow){c.setPosition()
}c.swipeLeft=null;
if(c.options.autoplay){c.autoPlay()
}if(c.options.accessibility===true){c.initADA();
if(c.options.focusOtypeof c.currentSlide==="number"?c.currentSlide:0);
c.setPosition();
c.focusHandler();
c.paused=!c.options.autoplay;
c.autoPlay();
c.$slle");
c.checkRespload();
if(e===true){c.$slideTrack.children().remove()
}else{c.$slideTrack.children(this.options.slide).eq(d).remove()
}c.$slides=c.$slideTrack.children(this.options.slide);
c.$slideTrack.children(this.options.slide).detaclidesCache=c.$slides;
c.reinit()
};
b.prototype.setCSS=function(d){var e=ts.rtl===true){d=-d
}c=e.positionProp=="lefenterMode===true){c.$listpe.setProps=function(){var d=this,c=document.body.style;kitTransition!==undefined||c.MozTransition!==undefined||c.msTransition!==undefined){if(d.options.useCSS===true){d.cssTransitions=true
}}if(d.options.fade){if(typeof d.options.zIndex==="number"){if(d.options.zProperty===undefinansform!n";
if(c.peanimType="msTransform";
d.transformType="-ms-transform";
d.transitionTypefinite===true){if(g>=c&&d==="ondemand"||f.optioner=function(f,i,e){var d,l,tDotCount()*k.options.sl.slidesToShow){c.setSlideShow){c.$prevArrow.hide();
c.$nextArrow.hide()
}if(c.options.dots===true&&c.slwiping===true){if((g>=35)&&(g<=135)){return"down"
}else{return"up"
}}return"vertical"
};
b.prototype.swipeEnd=function.swick=(d.touchObject.swipeLength>10)?false:true;
if(d.touchObject.curX===undefined){return false
}if(d.touchObject.edgeHit===true){d.$slider.trigger("edge",[d,d.swipectionide-d.gerigger("swipe",[d,f])
}}else{if(d.touchObject.startX!==d.touchObject.curX){d.slideHandler(d.currentSlide);
d.touchObject={}
}}};
b.prototype.swipeHandler=function(d){var c=tchend" in document&&c.options.swipe===falsegable===false&&d.type.indexOf("mouse")!==-1){return
}}c.touchObject.fingerCount=d.originalEvent&&d.originalEvent.touches!==undefined?d.originalEvent.touches.length:1;
c.touchObject.minSwipe=c.listWidth/c.options.touchThreshold;
if(c.options.verticalSwiping===true){c.touchObject.minSwipe=c.listHeight/c.options.touchThreshold
}switch(d.data.action){case"start":c.swipeStart(d);
break;
case"move":c.swipeMove(d);
break;
case"end":c.swipeEnd(d);
break
}};
b.i,f,j,h,d;
h=c.ori.dragging||k.scrolling||h&&h.length!==1){return false
}e=k.getLeft(k.currentSlide);
k.touchObject.curX=h!==undefined?h[0].pageX:c.clientX;
k.touchObject.curY=h!==undefined?h[0].pageY:c.clientY;
k.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(k.touchObject.curX-k.touchObject.startX,2)));
d=Math.round(Math.sqrt(Math.pow(k.touchObject.curY-k.touchObject.startY,2)));
if(!k.options.verticalSwiping&&!k.swiping&&d>4){k.scrolling=true;
return false
}if(k.options.verticalSwiping===true){k.touchObject.swipeLength=d
}i=k.swipeDirection();
if(c.originalEvent!==undefined&&k.touchObject.swipeLength>4){k.swiping=true;
c.preventDefault()
}j=(k.options.rtl===false?1:-1)*(k.touchObject.curX>k.touchObject.startX?1:-1);
if(k.options.verticalSwiping===true){j=k.touchObject.curY>k.touchObject.startY?1:-1
}f=k.touchObject.swipeLength;
k.touchObject.edgeHit=false;
if(k.options.infinite===false){if((k.currentSlide===0&&i==="right")||(k.currentSlide>=k.getDotCount()&&i==="left")){f=k.touchObject.swipeLength*k.options.edgeFriction;
k.touchObject.edgeHit=true
}}if(k.options.vertical===false){k.swipeLeft=e+f*j
}else{k.swipeLeft=e+(f*(k.$list.height()/k.listWidth))*j
}if(k.options.verticalSwiping===tr=false){return false
}if(k.animating===true){k.swipeLeft=null;
return false
}k.setCSS(k.swipeLeft)
};
b.prototype.swipeStart=function(d){var c=this,e;
c.interrupted=true;
if(c.touchObject.fingerCount!==1||c.slideCount<=c.options.slidesToShow){c.touchObject={};
return false
}if(d.originalEvent!==undefined&&d.originalEvent.touches!==undefined){e=d.originalEvent.touches[0]
}c.touchObject.startX=c.touchObject.curX=e!==undefined?e.pageX:d.clientX;
c.touchObject.startY=c.touchObject.curY=e!=ype.slickUnfilter=function(){var c=this;
if(c.$slidesCache!==null){c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.unload=function(){var c=this;
a(".slick-cloned",c.$slider).remove();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.remove()
}if(c.$nextArrow&&c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.remove()
}c.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")
};
b.prototype.unslick=function(d){var c=this;
c.$slider.trigger("unslick",[c,d]);
c.destroy()
};
b.prototype.updateArrows=function(){var d=this,c;
c=Math.floor(d.e){d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");
d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");
if(d.currentSlide===0){d.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(d.currentSlide>=d.slideCount-d.options.slidesToShow&&d.options.centerMode===false){d.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(d.currentSlide>=d.slideCount-1&&d.options.centerMode===true){d.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}}}}};
b.prototype.updateDots=function(){var c=this;
if(c.$dots!==null){c.$dots.find("li").removeClass("slick-active").end();
c.$dots.find("li").eq(Math.floor(c.currentSlide/c.options.slidesToScroll)).addClass("slick-active")
}};
b.prototype.visibility=function(){var c=this;
if(c.options.autoplay){if(document[c.hidden]){c.interrupted=true
}else{c.interrupted=false
}}};
a.fn.slick=function(){var f=this,h=arguments[0],e=Array.prototype.slice.call(argumentew b(f[g],h)
}else{d=f[g].slick[h].apply(f[g].slick,e)
}if(typeof d!="undefined"){return d
}}return f
};
a.Slick=b
}));
(function(ah,aT,aG,ak,aL,an){var aV=this;
var aI=Math.floor(Math.random()*10000);
var aF=Function.prototype;
var ae=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;
var ad=/[\-\w]+\/\.\.\//;
var ap=/([^:])\/\//g;
var am="";
var aH={};
var ai=ah.easyXDM;
var aa="easyXDM_";
var aq;
var ax=false;
var aN;
var aO;
function at(c,b){var a=typeof c[b];
return a=="function"||(!!(a=="object"&&c[b]))||a=="unknown"
}function aB(b,a){return !!(typeof(b[a])=="object"&&b[a])
}function aE(a){return Object.prototype.toString.call(a)==="[object Array]"
}function aU(){var f="Shockwave Flash",a="application/x-shockwave-flash";
if(!aC(navigator.plugins)&&typeof navigator.plugins[f]=="object"){var c=navigator.plugins[f].description;
if(c&&!aC(navigator.mimeTypes)&&navigator.mimeTypes[a]&&navigator.mimeTypes[a].enabledPlugin){aN=c.match(/\d+/g)
}}if(!aN){var e;
try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
aN=Array.prototype.slice.call(e.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1);
e=null
}catch(b){}}if(!aN){return false
}var g=parseInt(aN[0],10),d=parseInt(aN[1],10);
aO=g>9&&d>0;
return true
}var aA,ay;
if(at(ah,"addEventListener")){aA=function(b,c,a){b.addEventListener(c,a,false)
};
ay=function(b,c,a){b.removeEventListener(c,a,false)
}
}else{if(at(ah,"attachEvent")){aA=function(c,b,a){c.attachEvent("on"+b,a)
};
ay=function(c,b,a){c.detachEvent("on"+b,a)
}
}else{throw new Error("Browser not supported")
}}var Y=false,al=[],aj;
if("readyState" in aT){aj=aT.readyState;
Y=aj=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(aj=="loaded"||aj=="interactive"))
}else{Y=!!aT.body
}function aD(){if(Y){return
}Y=true;
for(var a=0;
a<al.length;
a++){al[a]()
}al.length=0
}if(!Y){if(at(ah,"addEventListener")){aA(aT,"DOMContentLoaded",aD)
}else{aA(aT,"readystatechange",function(){if(aT.readyState=="complete"){aD()
}});
if(aT.documentElement.doScroll&&ah===top){var aP=function(){if(Y){return
}try{aT.documentElement.doScroll("left")
}catch(a){ak(aP,1);
return
}aD()
};
aP()
}}aA(ah,"load",aD)
}function ao(a,b){if(Y){a.call(b);
return
}al.push(function(){a.call(b)
})
}function aJ(){var b=parent;
if(am!==""){for(var c=0,a=am.split(".");
c<a.length;
c++){b=b[a[c]]
}}return b.easyXDM
}function aR(a){ah.easyXDM=ai;
am=a;
if(am){aa="easyXDM_"+am.replace(".","_")+"_"
}return aH
}function aw(a){return a.match(ae)[3]
}function aQ(a){return a.match(ae)[4]||""
}function aM(d){var e=d.toLowerCase().match(ae);
if(!e){return""
}var b=e[2],a=e[3],c=e[4]||"";
if((b=="http:"&&c==":80")||(b=="https:"&&c==":443")){c=""
}return b+"//"+a+c
}function au(b){b=b.replace(ap,"$1/");
if(!b.match(/^(http||https):\/\//)){var a=(b.substring(0,1)==="/")?"":aG.pathname;
if(a.substring(a.length-1)!=="/"){a=a.substring(0,a.lastIndexOf("/")+1)
}b=aG.protocol+"//"+aG.host+a+b
}while(ad.test(b)){b=b.replace(ad,"")
}return b
}function af(f,c){var a="",e=f.indexOf("#");
if(e!==-1){a=f.substring(e);
f=f.substring(0,e)
}var b=[];
for(var d in c){if(c.hasOwnProperty(d)){b.push(d+"="+an(c[d]))
}}return f+(ax?"#":(f.indexOf("?")==-1?"?":"&"))+b.join("&")+a
}var ac=(function(d){d=d.substring(1).split("&");
var c={},a,b=d.length;
while(b--){a=d[b].split("=");
c[a[0]]=aL(a[1])
}return c
}(/xdm_e=/.test(aG.search)?aG.search:aG.hash));
function aC(a){return typeof a==="undefined"
}var ag=function(){var b={};
var a={a:[1,2,3]},c='{"a":[1,2,3]}';
if(typeof JSON!="undefined"&&typeof JSON.stringify==="function"&&JSON.stringify(a).replace((/\s/g),"")===c){return JSON
}if(Object.toJSON){if(Object.toJSON(a).replace((/\s/g),"")===c){b.stringify=Object.toJSON
}}if(typeof String.prototype.evalJSON==="function"){a=c.evalJSON();
if(a.a&&a.a.length===3&&a.a[2]===3){b.parse=function(d){return d.evalJSON()
}
}}if(b.stringify&&b.parse){ag=function(){return b
};
return b
 d){if(d.hasOwnProperty(b)){if(b in e){a=d[b];
if(typeof a==="object"){ab(e[b],a,c)
}else{if(!c){e[b]=d[b]
}}}else{e[b]=d[b]
}}}return e
}function aW(){var a=aT.body.appendChild(aT.createElement("form")),b=a.appendChild(aT.createElement("input"));
b.name=aa+"TEST"+aI;
aq=b!==a.elements[b.name];
aT.body.removeChild(a)
}function av(e){if(aC(aq)){aW()
}var a;
if(aq){a=aT.createElement('<iframe name="'+e.props.name+'"/>')
}else{a=aT.createElement("IFRAME");
a.name=e.props.name
}a.id=a.name=e.props.name;
delete e.props.name;
if(typeof e.container=="string"){e.container=aT.getElementById(e.container)
}if(!e.containon:"absolute",top:"-2000px",left:"0px"});
e.container=aT.body
}var b=e.props.src;
e.props.src="javascript:false";
ab(a,e.props);
a.border=a.frameBorder=0;
a.allowTransparency=true;
e.container.appendChild(a);
if(e.onLoad){aA(a,"load",e.onLoad)
}if(e.usePost){var c=e.container.appendChild(aT.createElement("form")),f;
c.target=a.name;
c.action=b;
c.method="POST";
if(typeof(e.usePost)==="object"){for(var d in e.usePost){if(e.usePost.hasOwnProperty(d)){if(aq){f=aT.createElement('<input name="'+d+'"/>')
}else{f=aT.createElement("INPUT");
f.name=d
}f.value=e.usePost[d];
c.appendChild(f)
}}}c.submit();
c.parentNode.removeChild(c)
}else{a.src=b
}e.props.src=b;
return a
}function aS(a){return a.replace(/[-[\]/{}()+.\^$|]/g,"\\$&").replace(/(\*)/g,".$1").replace(/\?/g,".")
}function Z(a,d){if(typeof a=="string"){a=[a]
}var c,e=a.length;
while(e--){var b=a[e].substr(0,1)==="^"&&a[e].substr(a[e].length-1,1)==="$";
c=b?a[e]:"^"+aS(a[e])+"$";
c=new RegExp(c);
if(c.test(d)){return true
}}return false
}function aK(g){var a=g.protocol,f;
g.isHost=g.isHost||aC(ac.xdm_p);
ax=g.hash||false;
if(!g.props){g.props={}
}if(!g.isHost){g.channel=ac.xdm_c.replace(/["'<>\\]/g,"");
g.secret=ac.xdm_s;
g.remote=ac.xdm_e.replace(/["'<>\\]/g,"");
a=ac.xdm_p;
if(g.acl&&!Z(g.acl,g.remote)){throw new Error("Access denied for "+g.remote)
}}else{g.remote=au(g.remote);
g.channel=g.channel||"default"+aI++;
g.secret=Math.random().toString(16).substring(2);
if(aC(a)){if(aM(aG.href)==aM(g.remote)){a="4"
}else{if(at(ah,"postMessage")||at(aT,"postMessage")){a="1"
}else{if(g.swf&&at(ah,"ActiveXObject")&&aU()){a="6"
}else{if(navigator.product==="Gecko"&&"frameElement" in ah&&navigator.userAgent.indexOf("WebKit")==-1){a="5"
}else{if(g.remoteHelper){a="2"
}else{a="0"
}}}}}}}g.protocol=a;
switch(a){case"0":ab(g,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);
if(g.isHost){if(!g.local){var c=aG.protocol+"//"+aG.host,h=aT.body.getElementsByTagName("img"),b;
var e=h.length;
while(e--){b=h[e];
if(b.src.substring(0,c.length)===c){g.local=b.src;
break
}}if(!g.local){g.local=ah
}}var d={xdm_c:g.channel,xdm_p:0};
if(g.local===ah){g.usePolling=true;
g.useParent=true;
g.local=aG.protocol+"//"+aG.host+aG.pathname+aG.search;
d.xdm_e=g.local;
d.xdm_pa=1
}else{d.xdm_e=au(g.local)
}if(g.container){g.useResize=false;
d.xdm_po=1
}g.remote=af(g.remote,d)
}else{ab(g,{useParent:!aC(ac.xdm_pa),usePolling:!aC(ac.xdm_po),useResize:g.useParent?false:g.useResize})
}f=[new aH.stack.HashTransport(g),new aH.stack.ReliableBehavior({}),new aH.stack.QueueBehavior({encode:true,maxLength:4000-g.remote.length}),new aH.stack.VerifyBehavior({initiate:g.isHost})];
break;
case"1":f=[new aH.stack.PostMessageTransport(g)];
break;
case"2":if(g.isHost){g.remoteHelper=au(g.remoteHelper)
}f=[new aH.stack.NameTransport(g),new aH.stack.QueueBehavior(),new aH.stack.VerifyBehavior({initiate:g.isHost})];
break;
case"3":f=[new aH.stack.NixTransport(g)];
break;
case"4":f=[new aH.stack.SameOriginTransport(g)];
break;
case"5":f=[new aH.stack.FrameElementTransport(g)];
break;
case"6":if(!aN){aU()
}f=[new aH.stack.FlashTransport(g)];
break
}f.push(new aH.stack.QueueBehavior({lazy:g.lazy,remove:true}));
return f
}function ar(b){var a,d={incoming:function(f,g){this.up.incoming(f,g)
},outgoing:function(g,f){this.down.outgoing(g,f)
},callback:function(f){this.up.callback(f)
},init:function(){this.down.init()
},destroy:function(){this.down.destroy()
}};
for(var c=0,e=b.length;
c<e;
c++){a=b[c];
ab(a,d,true);
if(c!==0){a.down=b[c-1]
}if(c!==e-1){a.up=b[c+1]
}}return a
}function az(a){a.up.down=a.down;
a.down.up=a.up;
a.up=a.down=null
}ab(aH,{version:"2.5.00.0",query:ac,stack:{},apply:ab,getJSONObject:ag,whenReady:ao,noConflict:aR});
aH.DomHelper={on:aA,un:ay,requiresJSON:function(a){if(!aB(ah,"JSON")){aT.write('<script type="text/javascript" src="'+a+'"><\/script>')
}}};
(function(){var a={};
aH.Fn={set:function(c,b){a[c]=b
},get:function(d,c){if(!a.hasOwnProperty(d)){return
}var b=a[d];
if(c){delete a[d]
}return b
}}
}());
aH.Socket=function(b){var c=ar(aK(b).concat([{incoming:function(d,e){b.onMessage(d,e)
},callback:function(d){if(b.onReady){b.onReady(d)
}}}])),aon(d){c.outgoing(d,a)
};
c.init()
};
aH.Rpc=function(d,c){if(c.local){for(var a in c.local){if(c.local.hasOwnProperty(a)){var b=c.local[a];
if(typeof b==="function"){c.local[a]={method:b}
}}}}var e=ar(aK(d).concat([new aH.stack.RpcBehavior(this,c),{callback:function(f){if(d.onReady){d.onReady(f)
}}}]));
this.origin=aM(d.remote);
this.context=d.context||null;
this.destroy=function(){e.destroy()
};
e.init()
};
aH.stack.SameOriginTransport=function(d){var c,a,b,e;
return(c={outgoing:function(g,f,h){b(g);
if(h){h()
}},destroy:function(){if(a){a.parentNode.removeChild(a);
a=null
{e=aM(d.remote);
if(d.isHost){ab(d.props,{src:af(d.remote,{xdm_e:aG.protocol+"//"+aG.host+aG.pathname,xdm_c:d.channel,xdm_p:4}),name:aa+d.channel+"_provider"});
a=av(d);
aH.Fn.set(d.channel,function(f){b=f;
ak(function(){c.up.callback(true)
},0);
return function(g){c.up.incoming(g,e)
}
})
}else{b=aJ().Fn.get(d.channel,true)(function(f){c.up.incoming(f,e)
});
ak(function(){c.up.callback(true)
},0)
}},init:function(){ao(c.onDOMReady,c)
}})
};
aH.stack.FlashTransport=function(i){var g,c,h,f,b,e;
function d(j,k){ak(function(){g.up.incoming(j,f)
},0)
}function a(j){var k=i.swf+"?host="+i.isHost;
var l="easyXDM_swf_"+Math.floor(Math.random()*10000);
aH.Fn.set("flash_loaded"+j.replace(/[\-.]/g,"_"),function(){aH.stack.FlashTransport[j].swf=b=e.firstChild;
var o=aH.stack.FlashTransport[j].queue;
for(var n=0;
n<o.length;
n++){o[n]()
}o.length=0
});
if(i.swfContainer){e=(typeof i.swfContainer=="string")?aT.getElementById(i.swfContainer):i.swfContainer
}else{e=aT.createElement("div");
ab(e.style,aO&&i.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0});
aT.body.appendChild(e)
}var m="callback=flash_loaded"+an(j.replace(/[\-.]/g,"_"))+"&proto="+aV.location.protocol+"&domain="+an(aw(aV.location.href))+"&port="+an(aQ(aV.location.href))+"&ns="+an(am);
e.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+l+"' data='"+k+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+k+"'></param><param name='flashvars' value='"+m+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+m+"' allowScriptAccess='always' wmode='transparent' src='"+k+"' height='1' width='1'></embed></object>"
}return(g={outgoing:function(j,l,k){b.postMessage(i.channel,j.toString());
if(k){k()
}},destroy:function(){try{b.destroyChannel(i.channel)
}catch(j){}b=null;
if(c){c.parentNode.removeChild(c);
c=null
}},onDOMReady:function(){f=i.remote;
aH.Fn.set("flash_"+i.channel+"_init",function(){ak(function(){g.up.callback(true)
})
});
aH.Fn.set("flash_"+i.channel+"_onMessage",d);
i.swf=au(i.swf);
var j=aw(i.swf);
var k=function(){aH.stack.FlashTransport[j].init=true;
b=aH.stack.FlashTransport[j].swf;
b.createChannel(i.channel,i.secret,aM(i.remote),i.isHost);
if(i.isHost){if(aO&&i.swfNoThrottle){ab(i.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"})
}ab(i.props,{src:af(i.remote,{xdm_e:aM(aG.href),xdm_c:i.channel,xdm_p:6,xdm_s:i.secret}),name:aa+i.channel+"_provider"});
c=av(i)
}};
if(aH.stack.FlashTransport[j]&&aH.stack.FlashTransport[j].init){k()
}else{if(!aH.stack.FlashTransport[j]){aH.stack.FlashTransport[j]={queue:[k]};
a(j)
}else{aH.stack.FlashTransport[j].queue.push(k)
}}},init:function(){ao(g.onDOMReady,g)
}})
};
aH.stack.PostMessageTransport=function(d){var b,a,g,e;
function f(i){if(i.origin){return aM(i.origin)
}if(i.uri){return aM(i.uri)
}if(i.domain){return aG.protocol+"//"+i.domain
}throw"Unable to retrieve the origin of the event"
}function c(i){if(typeof i.data!=="string"){return
}var j=f(i);
if(j==e&&typeof i.data==="string"&&i.data.substring(0,d.channel.length+1)==d.channel+" "){b.up.incoming(i.data.substring(d.channel.length+1),j)
}}function h(i){if(i.data==d.channel+"-ready"){g=("postMessage" in a.contentWindow)?a.contentWindow:a.contentWindow.document;
ay(ah,"message",h);
aA(ah,"message",c);
ak(function(){b.up.callback(true)
},0)
}}return(b={outgoing:function(j,i,k){g.postMessage(d.channel+" "+j,i||e);
if(k){k()
}},destroy:function(){ay(ah,"message",h);
ay(ah,"message",c);
if(a){g=null;
a.parentNode.removeChild(a);
a=null
}},onDOMReady:function(){e=aM(d.remote);
if(d.isHost){aA(ah,"message",h);
ab(d.props,{src:af(d.remote,{xdm_e:aM(aG.href),xdm_c:d.channel,xdm_p:1}),name:aa+d.channel+"_provider"});
a=av(d)
}else{aA(ah,"message",c);
g=("postMessage" in ah.parent)?ah.parent:ah.parent.document;
g.postMessage(d.channel+"-ready",e);
ak(function(){b.up.callback(true)
},0)
}},init:function(){ao(b.onDOMReady,b)
}})
};
aH.stack.FrameElementTransport=function(d){var c,a,b,e;
return(c={outgoing:function(g,f,h){b.call(this,g);
if(h){h()
}},destroy:function(){if(a){a.parentNode.removeChild(a);
a=null
}},onDOMReady:function(){e=aM(d.remote);
if(d.isHost){ab(d.props,{src:af(d.remote,{xdm_e:aM(aG.href),xdm_c:d.channel,xdm_p:5}),name:aa+d.channel+"_provider"});
a=av(d);
a.fn=function(f){delete a.fn;
b=f;
ak(function(){c.up.callback(true)
},0);
return function(g){c.up.incoming(g,e)
}
}
}else{if(aT.referrer&&aM(aT.referrer)!=ac.xdm_e){ah.top.location=ac.xdm_e
}b=ah.frameElement.fn(function(f){c.up.incoming(f,e)
});
c.up.callback(true)
}},init:function(){ao(c.onDOMReady,c)
}})
};
aH.stack.NameTransport=function(l){var k;
var i,e,m,g,f,b,c;
function h(n){var o=l.remoteHelper+(i?"#_3":"#_2")+l.channel;
e.contentWindow.sendMessage(n,o)
}function j(){if(i){if(++g===2||!i){k.up.callback(true)
}}else{h("ready");
k.up.callback(true)
}}function d(n){k.up.incoming(n,b)
}function a(){if(f){ak(function(){f(true)
},0)
}}return(k={outgoing:function(o,n,p){f=p;
h(o)
},destroy:function(){e.parentNode.removeChild(e);
e=null;
if(i){m.parentNode.removeChild(m);
m=null
}},onDOMReady:function(){i=l.isHost;
g=0;
b=aM(l.remote);
l.local=au(l.local);
if(i){aH.Fn.set(l.channel,function(o){if(i&&o==="ready"){aH.Fn.set(l.channel,d);
j()
}});
c=af(l.remote,{xdm_e:l.local,xdm_c:l.channel,xdm_p:2});
ab(l.props,{src:c+"#"+l.channel,name:aa+l.channel+"_provider"});
m=av(l)
}else{l.remoteHelper=l.remote;
aH.Fn.set(l.channel,d)
}var n=function(){var p=e||this;
ay(p,"load",n);
aH.Fn.set(l.channel+"_load",a);
(function o(){if(typeof p.contentWindow.sendMessage=="function"){j()
}else{ak(o,50)
}}())
};
e=av({props:{src:l.local+"#_4"+l.channel},onLoad:n})
},init:function(){ao(k.onDOMReady,k)
}})
};
aH.stack.HashTransport=function(a){var n;
var i=this,k,p,c,m,d,o,e;
var j,b;
function f(q){if(!e){return
}var r=a.remote+"#"+(d++)+"_"+q;
((k||!j)?e.contentWindow:e).location=r
}function l(q){m=q;
n.up.incoming(m.substring(m.indexOf("_")+1),b)
}function g(){if(!o){return
}var s=o.location.href,q="",r=s.indexOf("#");
if(r!=-1){q=s.substring(r)
}if(q&&q!=m){l(q)
}}function h(){p=setInterval(g,c)
}return(n={outgoing:function(r,q){f(r)
},destroy:function(){ah.clearInterval(p);
if(k||!j){e.parentNode.removeChild(e)
}e=null
},onDOMReady:function(){k=a.isHost;
c=a.interval;
m="#"+a.channel;
d=0;
j=a.useParent;
b=aM(a.remote);
if(k){ab(a.props,{src:a.remote,name:aa+a.channel+"_provider"});
if(j){a.onLoad=function(){o=ah;
h();
n.up.callback(true)
}
}else{var q=0,s=a.delay/50;
(function r(){if(++q>s){throw new Error("Unable to reference listenerwindow")
}try{o=e.contentWindow.frames[aa+a.channel+"_consumer"]
}catch(t){}if(o){h();
n.up.callback(true)
}else{ak(r,50)
}}())
}e=av(a)
}else{o=ah;
h();
if(j){e=parent;
n.up.callback(true)
}else{ab(a,{props:{src:a.remote+"#"+a.channel+new Date(),name:aa+a.channel+"_consumer"},onLoad:function(){n.up.callback(true)
}});
e=av(a)
}}},init:function(){ao(n.onDOMReady,n)
}})
};
aH.stack.ReliableBehavior=function(e){var c,a;
var b=0,f=0,d="";
return(c={incoming:function(h,j){var i=h.indexOf("_"),g=h.substring(0,i).split(",");
h=h.substring(i+1);
if(g[0]==b){d="";
if(a){a(true)
}}if(h.length>0){c.down.outgoing(g[1]+","+b+"_"+d,j);
if(f!=g[1]){f=g[1];
c.up.incoming(h,j)
}}},outgoing:function(g,i,h){d=g;
a=h;
c.down.outgoing(f+","+(++b)+"_"+g,i)
}})
};
aH.stack.QueueBehavior=function(a){var h,g=[],d=true,j="",e,c=0,b=false,i=false;
function f(){if(a.remove&&g.length===0){az(h);
return
}if(d||g.length===0||e){return
}d=true;
var k=g.shift();
h.down.outgoing(k.data,k.origin,function(l){d=false;
if(k.callback){ak(function(){k.callback(l)
},0)
}f()
})
}return(h={init:function(){if(aC(a)){a={}
}if(a.maxLength){c=a.maxLength;
i=true
}if(a.lazy){b=true
}else{h.down.init()
}},callback:function(l){d=false;
var k=h.up;
f();
k.callback(l)
},incoming:function(l,n){if(i){var m=l.indexOf("_"),k=parseInt(l.substring(0,m),10);
j+=l.substring(m+1);
if(k===0){if(a.encode){j=aL(j)
}h.up.incoming(j,n);
j=""
}}else{h.up.incoming(l,n)
}},outgoing:function(l,o,m){if(a.encode){l=an(l)
}var k=[],n;
if(i){while(l.length!==0){n=l.substring(0,c);
l=l.substring(n.length);
k.push(n)
}while((n=k.shift())){g.push({data:k.length+"_"+n,origin:o,callback:k.length===0?m:null})
}}else{g.push({data:l,origin:o,callback:m})
}if(b){h.down.init()
}else{f()
}},destroy:function(){e=true;
h.down.destroy()
}})
};
aH.stack.VerifyBehavior=function(b){var a,c,e,d=false;
function f(){c=Math.random().toString(16).substring(2);
a.down.outgoing(c)
}return(a={incoming:function(g,i){var h=g.indexOf("_");
if(h===-1){if(g===c){a.up.callback(true)
}else{if(!e){e=g;
if(!b.initiate){f()
}a.down.outgoing(g)
}}}else{if(g.substring(0,h)===e){a.up.incoming(g.substring(h+1),i)
}}},outgoing:function(g,i,h){a.down.outgoing(c+"_"+g,i,h)
},callback:function(g){if(b.initiate){f()
}}})
};
aH.stack.RpcBehavior=function(f,b){var i,d=b.serializer||ag();
var e=0,g={};
function c(j){j.jsonrpc="2.0";
i.down.outgoing(d.stringify(j))
}function h(k,l){var j=Array.prototype.slice;
return function(){var o=arguments.length,m,n={method:l};
if(o>0&&typeof arguments[o-1]==="function"){if(o>1&&typeof arguments[o-2]==="function"){m={success:arguments[o-2],error:arguments[o-1]};
n.params=j.call(arguments,0,o-2)
}else{m={success:arguments[o-1]};
n.params=j.call(arguments,0,o-1)
}g[""+(++e)]=m;
n.id=e
}else{n.params=j.call(arguments,0)
}if(k.namedParams&&n.params.length===1){n.params=n.params[0]
}c(n)
}
}function a(r,p,l,n){if(!l){if(p){c({id:p,error:{code:-32601,message:"Procedure not found."}})
}return
}var k,m;
if(p){k=function(s){k=aF;
c({id:p,result:s})
};
m=function(u,t){m=aF;
var s={id:p,error:{code:-32099,message:u}};
if(t){s.error.data=t
}c(s)
}
}else{k=m=aF
}if(!aE(n)){n=[n]
}try{var o=f.context||l.scope;
var j=l.method.apply(o,n.concat([k,m]));
if(!aC(j)){k(j)
}}catch(q){m(q.message)
}}return(i={incoming:function(j,k){var m=d.parse(j);
if(m.method){if(b.handle){b.handle(m,c)
}else{a(m.method,m.id,b.local[m.method],m.params)
}}else{var l=g[m.id];
if(m.error){if(l.error){l.error(m.error)
}}else{if(l.success){l.success(m.result)
}}delete g[m.id]
}},init:function(){if(b.remote){for(var j in b.remote){if(b.remote.hasOwnProperty(j)){f[j]=h(b.remote[j],j)
}}}i.down.init()
},destroy:function(){for(var j in b.remote){if(b.remote.hasOwnProperty(j)&&f.hasOwnProperty(j)){delete f[j]
}}i.down.destroy()
}})
};
aV.easyXDM=aH
})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);
var SAP=SAP||{};
SAP.sapdx=SAP.sapdx||{};
SAP.sapdx.LanguageToggler=function(a){this.options=a;
this.init()
};
SAP.sapdx.LanguageToggler.prototype={init:function(){this.attachEvents()
},attachEvents:function(){var a=this;
ResponsiveHelper.addRange({"..1000":{on:function(){a.tabletInit()
},off:function(){a.tabletDestroy()
}}})
},tabletInit:function(){this.options.$el.openClose({wrapper:"#page",hideOnClickOutside:true,activeClass:"active",opener:".mobile-btn",slider:".toggleBlock",animSpeed:400,setWindowHeight:true,effect:"push",animStart:function(b,a){$("html").toggleClass("active-panel",b);
$(a.slider).addClass("animStart")
},animEnd:function(b,a){$(a.slider).removeClass("animStart")
}})
},tabletDestroy:function(){this.options.$el.data("OpenClose").destroy()
}};
$(function(){var a=$(".languageToggle");
if(a.closest(".header-lang-standard").length){return
}else{if(a.length){var b=new SAP.sapdx.LanguageToggler({$el:a});
a.data("language-toggler",b);
c(a)
}}function c(d){if(d&&window.matchMedia&&window.matchMedia("(min-width:1000px)").matches){d.find(".nav-block").removeClass("js-slide-hidden")
}}});
$(window).on("load",function(){if($(".languageToggle .mobile-btn").length){var a=$(new URL(location)).attr("href");
a=a.substring(0,a.indexOf(".html")+".html".length);
if(a.indexOf("/de/")>=0||a.indexOf("/en/")>=0){var b;
if(a.indexOf("/de/")>=0){b=a.replace("/de/","/en/")
}else{b=a.replace("/en/","/de/")
}$(".languageToggle .mobile-btn").attr("href",b)
}}});
namespace("SAP.sapdx.HeroSpaceProductCategory");
SAP.sapdx.HeroSpaceProductCategory.utils={init:function(){var a=$(".heroSpaceProductCategory");
a.each(function(){SAP.sapdx.HeroSpaceProductCategory.utils.drawAnvil(this);
SAP.sapdx.HeroSpaceProductCategory.observePageTitle.init()
})
},attachEvents:function(){var a;
$(window).on("resize orientationchange",function(){if(a){window.cancelAnimationFrame(a)
}a=window.requestAnimationFrame(function(){var b=$(".heroSpaceProductCategory");
b.each(function(){SAP.sapdx.HeroSpaceProductCategory.utils.drawAnvil(this)
})
})
})
},getTextWidth:function(e,a){var b;
if(getTextWidth.canvas){b=getTextWidth.canvas
}else{getTextWidth.canvas=b=document.createElement("canvas")
}var c=b.getContext("2d");
c.font=a;
var d=c.measureText(e);
return d.width
},initParallax:function(){var c=new ScrollMagic.Controller();
var e=new MobileDetect(navigator.userAgent);
var f="only screen and (min-width: 1240px)";
var d=window.matchMedia(f).matches;
var b=$(".heroSpaceProductCategory");
var a=[];
if(!e.mobile()&&d){b.filter(function(){return $(this).find(".heroSpaceProductCategory-navigation").length===0
}).each(function(){var g=$(this);
var k=g.find(".background-holder img");
if(!k.length){return true
}var l=g.offset().top;
var j=window.innerHeight/2;
var i=new ScrollMagic.Scene({triggerElement:g[0],duration:"100%"});
if(l<j){var h=l/window.innerHeight;
i.triggerHook(h)
}i.setTween(TweenMax.from(k[0],1,{y:"16%",ease:Power0.easeNone}));
a.push(i)
});
if(a.length){c.addScene(a);
b.addClass("parallax-active")
}}},drawAnvil:function(c){var n=$(c).find(".anvil");
if(n.length===0){return
}if(n[0].getContext){var v=n[0].getContext("2d");
var b=n.data("anvil");
var w=n.data("height");
var t=686;
var s=435;
var f=339;
var r=function(){var y=window.matchMedia("all and (max-width: 1299px) and (min-width: 768px)");
return y.matches
};
var g=function(){var y=window.matchMedia("all and (max-width: 979px) and (min-width: 768px)");
return y.matches
};
var a=(w==="extralarge")?t:(w==="large"?(g()?f:s):null);
n.parent().height(a);
v.clearRect(0,0,n.width(),n.height());
var e,d,j,q;
var k="#222222";
var m="#C6C6C6";
var l=8;
var p=24;
var i=0;
var u="rgba(0, 0, 0, 0.8)";
var h=6;
var x=3840;
if(b==="left"){if(w==="extralarge"){q=$(".anvil-left-extralarge-col")
}else{if(w==="large"){var o=(r()?".anvil-left-large-col-tablet":".anvil-left-large-col");
q=$(o)
}}e=q.offset().left;
d=q.width()+parseInt(q.css("padding-right"));
j=e+d;
v.beginPath();
v.moveTo(j,a);
v.lineTo(0,a);
v.lineTo(0,0);
v.lineTo(j+a,0);
v.closePath();
v.fillStyle=k;
v.fill();
v.beginPath();
v.lineWidth=l;
v.strokeStyle=m;
v.shadowBlur=p;
v.shadowColor=u;
v.shadowOffsetX=i;
v.shadowOffsetY=i;
v.moveTo(j-h+3,a+h);
v.lineTo(j+a+h+3,-h);
v.stroke()
}else{if(b==="right"){q=$(".anvil-right-col");
j=q.offset().left+parseInt(q.css("padding-right"));
v.beginPath();
v.moveTo(j,a);
v.lineTo(j+a,0);
v.lineTo(x,0);
v.lineTo(x,a);
v.closePath();
v.fillStyle=k;
v.fill();
v.beginPath();
v.lineWidth=l;
v.strokeStyle=m;
v.shadowBlur=p;
v.shadowColor=u;
v.shadowOffsetX=-i;
v.shadowOffsetY=i;
v.moveTo(j-h,a+h);
v.lineTo(j+a+h,-h);
v.stroke()
}}}}};
$(function(){var c=$(".heroSpaceProductCategory").filter(function(){return $(this).find(".heroSpaceProductCategory-navigation:not(.fixed-pin)").length>0
});
var a=c.find(".heroSpaceProductCategory-navigation-items:not(.scroll)");
var d=c.find(".heroSpaceProductCategory-navigation-content:not(.scroll)");
var i=new MobileDetect(navigator.userAgent);
var b="only screen and (max-width: 767px)";
var g=window.matchMedia(b).matches;
SAP.sapdx.HeroSpaceProductCategory.observePageTitle.init();
if(c.length&&!g){SAP.sapdx.HeroSpaceProductCategory.adaptiveNav.init(a,d);
SAP.sapdx.HeroSpaceProductCategory.adaptiveNav.initOpenCloseHandler(i)
}else{if(g){d.find(".nav-bar-scroll").CXHorizontalMenu({isRtl:SAP.isRtl})
}}$(window).on("orientationchange",$.debounce(100,function(){var j=d.find(".nav-bar-scroll").data("CXHorizontalMenu");
if(!window.matchMedia(b).matches){if(j){j.destroy()
}if(!a.attr("init")){SAP.sapdx.HeroSpaceProductCategory.adaptiveNav.init(a,d);
SAP.sapdx.HeroSpaceProductCategory.adaptiveNav.initOpenCloseHandler(i)
}}else{if(!j){j=d.find(".nav-bar-scroll").CXHorizontalMenu({isRtl:SAP.isRtl}).data("CXHorizontalMenu");
if(j){j.initRecalculateState()
}}}}));
SAP.sapdx.HeroSpaceProductCategory.utils.init();
SAP.sapdx.HeroSpaceProductCategory.utils.attachEvents();
SAP.sapdx.HeroSpaceProductCategory.utils.initParallax();
var f=$(".heroSpaceProductCategory.section .heroSpaceProductCategory-root");
if(!f.length){return
}var h=f.data("content-language");
var e=new SAP.sapdx.HeroSpaceProductCategory.Promo(".heroSpaceProductCategory.section:not(.at-element-marker)",h);
if(SAP.sapdx&&SAP.sapdx.TouchUIListener){SAP.sapdx.TouchUIListener.attach({action:"heroSpaceProductCategoryRefresh",handler:function(j){SAP.sapdx.HeroSpaceProductCategory.utils.init();
e.init(j)
}})
}e.init();
e.attachEvents()
});
namespace("SAP.sapdx.HeroSpaceProductCategory");
SAP.sapdx.HeroSpaceProductCategory.Promo=function(a,c){this.contentLocale=c;
this.rootCssSelector=a;
var b=this;
if(this.contentLocale==="iw_il"){this.contentLocale="he"
}this.renderEventCountdown=function(d){d.each(function(){var j=$(this);
if(j.parent().data("initialized")){return true
}var p=j.find(".description");
var q=j.find(".countdown");
var h=j.find(".days-number");
var g=q.attr("data-daycounter");
var o=j.find(".days-label").first();
var k=j.find(".days-label").last();
var e=j.attr("data-startdate");
var m=j.attr("data-startdatetimezone");
var l=j.attr("data-enddate");
if(e){var n=b.durationDateCalc(e,m);
h.html(n);
if(g){var f=g.split("{0}");
if(f[0]){o.html(f[0].trim())
}if(f[1]){k.html(f[1].trim())
}}var i=b.formatDate(e,l);
p.prepend(i);
if(n>0){j.addClass("isCountdown")
}else{j.addClass("generic")
}}if(Granite.author){j.parent().attr("data-initialized",true)
}})
};
this._initInner=function(e){var d=e.find(".hero-promo");
d.each(function(){var j=$(this);
var g=j.find(".column");
var m=j.find(".item.event");
var h=[];
g.each(function(o){var q=$(this).find(".event");
var p=q.attr("data-offlinedate");
var i=q.attr("data-startdatetimezone");
if(p){var n=b.durationDateCalc(p,i);
if(n>0){h[o]=true
}else{h[o]=false
}}else{h[o]=true
}});
if(!Granite.author){var f=0;
for(var l=0;
l<h.length;
l++){if(h[l]===true){f++
}}if(f>0){var k="";
switch(f){case 1:k="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xlg-8 col-lg-offset-2 col-xlg-offset-2 col-md-offset-0 column items-1";
break;
case 2:k="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xlg-4 col-lg-offset-2 col-xlg-offset-2 col-lg-pull-1 col-xlg-pull-1 col-md-offset-0 col-md-pull-0 column items-2";
break;
case 3:k="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xlg-4 column items-3";
break;
default:break
}g.each(function(i){if(h[i]===false){$(this).remove()
}else{$(this).attr("class",k)
}})
}else{j.remove()
}}if(j.length){$(j).sameHeight({elements:".column",useMinHeight:true,flexible:true,multiLine:true})
}b.renderEventCountdown(m);
b.initCarousel(j);
$(j).css("visibility","visible")
})
};
this.init=function(d){if(d){b._initInner($(d).closest(b.rootCssSelector))
}else{$(b.rootCssSelector).filter(function(){return !$(this).data("promoinitialized")
}).each(function(){var e=$(this);
b._initInner(e);
e.data("promoinitialized",true)
})
}};
this.initCarousel=function(h){var g=99999;
var d=980;
var f=1;
var e=0;
h.each(function(){var i=$(this).find('.hero-promo-slider .row:not(".slick-initialized")');
if(i.find(".column").length<=1){return
}i.slick({infinite:false,slidesPerRow:f,rows:1,prevArrow:'<span class="icon-arrow-left"></span>',nextArrow:'<span class="icon-arrow-right"></span>',speed:600,initialSlide:e,dots:true,rtl:SAP.isRtl,responsive:[{breakpoint:g,settings:"unslick"},{breakpoint:d,settings:{slidesPerRow:f}}]});
if(Granite.author){i.on("afterChange",function(j,l,k){e=k
})
}})
};
this.attachEvents=function(){$(window).on("resize orientationchange",$.debounce(300,function(){var f=$(".hero-promo-slider .row");
var h=99999;
var d=980;
var g=1;
var e=0;
if(!f.hasClass("slick-initialized")&&(f.find(".column").length>1)){f.slick({infinite:false,slidesPerRow:g,rows:1,prevArrow:'<span class="icon-arrow-left"></span>',nextArrow:'<span class="icon-arrow-right"></span>',speed:600,initialSlide:e,dots:true,rtl:SAP.isRtl,responsive:[{breakpoint:h,settings:"unslick"},{breakpoint:d,settings:{slidesPerRow:g}}]})
}$(window).trigger("sameHeightRecalc")
}))
};
this.durationDateCalc=function(f,h){if(!f){return
}var e=new Date();
var d=moment().add(e.getTimezoneOffset()-Number(h),"minutes").startOf("day");
var g=moment(f).startOf("day");
var i=g.diff(d,"days");
return i
};
this.formatDate=function(g,k){var f=b.contentLocale;
if(!g){return
}var d=SAP.sapdx.HeroSpaceProductCategory.localeMapFormat;
try{var l=moment(g).utcOffset(g).locale(f);
var h=l.month();
var m=l.date();
var i=null;
var o=null;
var e=null;
var j="";
if(k&&k.length){i=moment(k).utcOffset(k).locale(f);
o=i.month();
e=i.date()
}if(!k){j=l.format(d.getDate(f).def)
}else{if(h!==o){j=d.getDate(f,l,i).inYear
}else{if(m===e){j=l.format(d.getDate(f).def)
}else{j=d.getDate(f,l,i).inMonth
}}}}catch(n){console.error(n)
}if(!d.getDate(f).lowerCase){return j
}else{return j.toLowerCase()
}}
};
namespace("SAP.sapdx.HeroSpaceProductCategory");
SAP.sapdx.HeroSpaceProductCategory.adaptiveNav={init:function(a,b){var d;
var e;
var j;
var g=$('<div class="adaptive-nav-icon icon-arrowdown"></div>');
var l=$('<div class="nav-dropdown-menu"></div>');
var k=52;
var m=77;
var c=55;
var h=b.find(".cloned-buttons-holder");
var i=h.find(".ds-button");
b.addClass("adaptive-menu");
a.addClass("adaptive-nav");
e=a.append(g);
e.append(l);
d=e.find(".nav-dropdown-menu");
a.find(".item").clone().addClass("dd-item adaptive-nav-visible").appendTo(d);
a.attr("init",true);
var f=function(){if(window.innerWidth<=767){a.removeClass("adaptive-nav-ready");
a.removeClass("adaptive-nav-active");
g.removeClass("active-button");
return false
}j=false;
var p=b.find(".heroSpaceProductCategory-navigation-items");
var r=a.find("a:not(.dd-item)");
var o=p.width();
var n=c;
var q=0;
a.removeClass("adaptive-nav-active");
a.find("a").removeClass("hidden adaptive-nav-hidden visible-item last no-buttons");
q=parseInt(SAP.isRtl?r.first().css("margin-left"):r.first().css("margin-right"));
if(!p.hasClass("scroll")||(p.hasClass("scroll")&&!i.length)){n=(k-q)
}else{if(i.length&&!h.hasClass("dropped")){n=m
}else{if(i.length&&h.hasClass("dropped")){n=0
}}}r.each(function(){var v=$(this);
var t=v.attr("nav-item-id");
var s="[nav-item-id='"+t+"']";
var x=d.find(s);
var w=v.outerWidth(true)+6;
n+=w;
if(n<o){x.addClass("hidden");
v.addClass("visible-item")
}else{var u=a.find(".visible-item").last().addClass("last");
if(!i.length){u.addClass("no-buttons")
}a.find("a:not(.dd-item):not(.visible-item)").addClass("adaptive-nav-hidden");
if(x.hasClass("active")){j=true
}return false
}});
if(j){g.addClass("active-button")
}else{g.removeClass("active-button")
}if(a.find(".adaptive-nav-hidden:not(.dd-item)").length){a.addClass("adaptive-nav-ready");
if(i.length){h.addClass("dropped")
}}else{a.removeClass("adaptive-nav-ready");
h.removeClass("dropped")
}};
f();
$(window).on("HSP_NAV_RELOAD",f);
$(window).on("resize",$.debounce(10,f))
},initOpenCloseHandler:function(b){var a="click";
if(b.mobile()){a="touchstart"
}$(".heroSpaceProductCategory .adaptive-nav-icon").on(a,function(f){var c=$(f.target).closest(".adaptive-nav-ready");
var d=$(f.target);
if(c.length&&d.hasClass("icon-arrowdown")){c.toggleClass("adaptive-nav-active")
}else{$(".heroSpaceProductCategory-navigation-items").removeClass("adaptive-nav-active")
}});
$(document).on(a,function(d){var c=$(d.target).closest(".adaptive-nav-ready");
if(!c.length){$(".heroSpaceProductCategory-navigation-items").removeClass("adaptive-nav-active")
}});
$(document).on("HSPC_NAV_FIXED_ACTIVED",function(){$(".heroSpaceProductCategory-navigation-items:not(.scroll)").removeClass("adaptive-nav-active")
});
$(document).on("HSPC_NAV_FIXED_DEACTIVATED",function(){$(".heroSpaceProductCategory-navigation-items.scroll").removeClass("adaptive-nav-active")
})
}};
namespace("SAP.sapdx.HeroSpaceProductCategory");
SAP.sapdx.HeroSpaceProductCategory.observePageTitle={init:function(){var e=$(".heroSpaceProductCategory-root.nav-enabled").find(".navigation-headline");
if(!e.length){return false
}var b={1:"normal",2:"smaller",3:"smallest"};
var a=[b[1],b[2],b[3]].join(" ");
var d=55;
var c=function(j){var f=parseInt(j.css("line-height"));
var g=j.height();
var k=(g===f);
if(k){j.removeClass(a).addClass(b[1])
}else{for(var h=2;
h<=3;
h++){g=j.height();
if(g<=d){break
}j.removeClass(a).addClass(b[h])
}}j.addClass("lines-ready")
};
e.each(function(){c($(this))
})
}};
namespace("SAP.sapdx.HeroSpaceProductCategory");
SAP.sapdx.HeroSpaceProductCategory.localeMapFormat={getDate:function(a,e,b){var d={};
var c=(e&&b);
switch(a){case"en_us":d={def:"LL",inMonth:c?e.format("MMMM D [-] ")+b.format("D, YYYY"):"",inYear:c?e.format("MMMM D [-] ")+b.format("LL"):""};
break;
case"en_au":case"en_gb":case"en_in":case"en_za":case"en_sg":case"ru_ru":d={def:"D MMMM, YYYY",inMonth:c?e.format("D [-] ")+b.format("D MMMM, YYYY"):"",inYear:c?e.format("D MMMM [-] ")+b.format("D MMMM, YYYY"):""};
break;
case"de_de":case"de_at":case"de_ch":d={def:"LL",inMonth:c?e.format("D. [-] ")+b.format("LL"):"",inYear:c?e.format("D. MMMM [-] ")+b.format("LL"):""};
break;
case"es_es":case"es_co":case"pt_pt":case"pt_br":d={def:"LL",inMonth:c?e.format("D [-] ")+b.format("LL"):"",inYear:c?e.format("D ")+"de "+e.format("MMMM [-] ")+b.format("LL"):"",lowerCase:true};
break;
case"fr_fr":case"fr_be":case"fr_ca":case"fr_ch":d={def:"LL",inMonth:c?e.format("D [-] ")+b.format("LL"):"",inYear:c?e.format("D MMMM [-] ")+b.format("LL"):""};
break;
case"zh_cn":case"zh_tw":d={def:"YYYY年 MMMM D日",inMonth:c?e.format("YYYY年 M月 D [-] ")+b.format("D日"):"",inYear:c?e.format("YYYY年 M月 D日 [-] ")+b.format("M月 D日"):""};
break;
case"ja_jp":d={def:"YYYY年 M月 D日",inMonth:c?e.format("YYYY年 M月 D [-] ")+b.format("D日"):"",inYear:c?e.format("YYYY年 M月 D日 [-] ")+b.format("M月 D日"):""};
break;
case"ko_kr":d={def:"YYYY년 MMMM D일",inMonth:c?e.format("YYYY년 MMMM D [-] ")+b.format("D일"):"",inYear:c?e.format("YYYY년 MMMM D일 [-] ")+b.format("MMMM D일"):""};
break;
default:return{def:"LL",inMonth:c?e.format("MMMM D [-] ")+b.format("D, YYYY"):"",inYear:c?e.format("MMMM D [-] ")+b.format("LL"):""}
}return d
}};