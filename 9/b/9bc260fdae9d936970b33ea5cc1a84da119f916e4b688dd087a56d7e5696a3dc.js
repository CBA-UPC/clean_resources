(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1175:function(t,e,n){"use strict";n.r(e);n(12);var r=n(2),o=n(317),c=n(310),l={components:{Post:o.a},mounted:function(){this.$store.dispatch("configuratorN2cr/setTitleFromConfig",!1)},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.store,o={pl:"6734794610956992",en:"6734794610956992"},e.next=4,r.dispatch("articlesN2cr/getArticle",o[n.i18n.locale]);case 4:return e.next=6,r.dispatch("dynamicConfig/updateConfig",{page:{info:{pl:{title:"Regulamin dodawania opinii"},en:{title:"Regulamin dodawania opinii"}},imgUrl:"https://holding.wpcdn.pl/backgrounds/21.jpg"}});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return Object(c.a)(this.$route.path,this.$t("seo.title"),this.$t("seo.desc"))}},f=n(4),d=n(662),component=Object(f.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("post",{attrs:{size:10,"format-classes":"first-number second-letter third-disc"}})}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports},310:function(t,e,n){"use strict";e.a=function(path,title,t){return{title:title,link:[{rel:"canonical",href:"https://holding.wp.pl"+path}],meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t}]}}},312:function(t,e,n){},313:function(t,e,n){"use strict";var r=n(9),o=n(40),c=n(48),l=n(147),f=n(100),d=n(18),h=n(77).f,m=n(102).f,N=n(20).f,_=n(314).trim,v=r.Number,I=v,w=v.prototype,C="Number"==c(n(101)(w)),E="trim"in String.prototype,A=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=E?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(C?d((function(){w.valueOf.call(n)})):"Number"!=c(n))?l(new I(A(e)),n,v):A(e)};for(var R,x=n(17)?h(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;x.length>y;y++)o(I,R=x[y])&&!o(v,R)&&N(v,R,m(I,R));v.prototype=w,w.constructor=v,n(21)(r,"Number",v)}},314:function(t,e,n){var r=n(6),o=n(53),c=n(18),l=n(315),f="["+l+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),m=function(t,e,n){var o={},f=c((function(){return!!l[t]()||"‚Äã¬Ö"!="‚Äã¬Ö"[t]()})),d=o[t]=f?e(N):l[t];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},N=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},315:function(t,e){t.exports="\t\n\v\f\r ¬†·öÄ·†é‚ÄÄ‚ÄÅ‚ÄÇ‚ÄÉ‚ÄÑ‚ÄÖ‚ÄÜ‚Äá‚Äà‚Äâ‚Ää‚ÄØ‚Åü„ÄÄ\u2028\u2029\ufeff"},316:function(t,e,n){"use strict";n(312)},317:function(t,e,n){"use strict";n(313);var r={computed:{htmlContent:function(){return this.$store.state.articlesN2cr.article.htmlContent}},props:{size:{type:Number,default:function(){return 8}},formatClasses:{type:String,default:function(){return""}}}},o=(n(316),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content center",class:"col-lg-"+this.size},[e("article",{staticClass:"single-post",attrs:{id:"blog"}},[e("div",{staticClass:"post-content",class:this.formatClasses,domProps:{innerHTML:this._s(this.htmlContent)}})])])}),[],!1,null,"7c134cbe",null);e.a=component.exports},372:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"pl":{"seo":{"title":"Regulamin dodawania opinii","desc":"Regulamin dodawania opinii"}},"en":{"seo":{"title":"Regulamin dodawania opinii","desc":"Regulamin dodawania opinii"}}}'),delete t.options._Ctor}},662:function(t,e,n){"use strict";var r=n(372),o=n.n(r);e.default=o.a}}]);]],[13,["money_slot18","62652"]],[14,["prebid-eu","XNEdtxheGMSt"]],[15,["19096","267668","1326702",[2,40,41,57]]],[12,["wirtualn-d.openx.net","538736463"]],[11,["616491"]],[17,[52686,550185,73727]],[16,["8ESGGHFl3wnv7h6Op0zNspWo"]]],mediaTypes:{banner:{sizes:"desktop_billboard_970"}}},{code:"slot32",disabled:!1,bids:[[1,[336630]],[4,[12923380]],[8,[4831,"money.pl"]],[14,["prebid-eu","XNEdtxheGMSt"]],[20,[207663,192442]],[11,["579136"]],[17,[51863,550185,73727]],[13,["desktop_money.pl_x32","62652"]],[16,["q6dX4vZcUv1xYB3a0rE93p44"]],[15,["19096","267668","1326706",[16]]]],mediaTypes:{banner:{sizes:"desktop_midtext_640"}}},{code:"slot34",disabled:!1,bids:[[8,[4831,"money.pl"]],[14,["prebid-eu","XNEdtxheGMSt"]],[15,["19096","267668","1326708",[15]]],[13,["desktop_money.pl_slot34","62652"]],[1,[120458]],[4,[5663189]],[12,["wirtualn-d.openx.net","538629524"]],[11,["278991"]],[7,[1038588,10047]],[17,[51852,550185,73727]],[16,["q6dX4vZcUv1xYB3a0rE93p44"]],[6,[24918011]]],mediaTypes:{banner:{sizes:"desktop_rectangle"}}},{code:"slot37",disabled:!1,bids:[[1,[93053]],[4,[5663191]],[8,[4831,"money.pl"]],[12,["wirtualn-d.openx.net","538629523"]],[13,["Money_DMS_300x600","62652"]],[14,["prebid-eu","XNEdtxheGMSt"]],[17,[32047,550185,73727]],[7,[1009863,10047]],[11,["268962"]],[15,["19096","267668","1326710",[10,15]]],[16,["PQOIKhFvwyJpeC5BI0MHF8y8"]],[6,[24918021]],[21,["926765"]]],mediaTypes:{banner:{sizes:"desktop_halfpage"}}},{code:"slot53",disabled:!1,bids:[[1,[361853]],[4,[12692467]],[8,[4831,"money.pl"]],[14,["prebid-eu","XNEdtxheGMSt"]],[15,["19096","267668","1326726",[2,40,41,57]]],[22,["14505674"]],[13,["desktop_money.pl_slot53","62652"]],[12,["wirtualn-d.openx.net","542286749"]],[11,["278992"]],[17,[51879,550185,73727]],[16,["8ESGGHFl3wnv7h6Op0zNspWo"]]],mediaTypes:{banner:{sizes:"desktop_contentbox_970"}}},{code:"slot70",disabled:!1,bids:[[4,[12923435]],[8,[4831,"money.pl"]],[14,["prebid-eu","XNEdtxheGMSt"]],[7,[1009864,10047]],[15,["19096","267668","1326732",[2,40,41,57]]],[22,["14505674"]],[13,["desktop_money.pl_slot70","62652"]],[12,["wirtualn-d.openx.net","538758057"]],[11,["268963"]],[1,[120469]],[17,[51954,550185,73727]],[16,["8ESGGHFl3wnv7h6Op0zNspWo"]]],mediaTypes:{banner:{sizes:"desktop_billboard_970"}}},{code:"slot79",disabled:!1,bids:[[1,[120471]],[4,[12923409]],[8,[4831,"money.pl"]],[14,["prebid-eu","XNEdtxheGMSt"]],[7,[1009865,10047]],[11,["268964"]],[15,["19096","267668","1326744",[10,15]]],[22,["14505675"]],[13,["desktop_money.pl_slot79","62652"]],[17,[51857,550185,73727]],[16,["PQOIKhFvwyJpeC5BI0MHF8y8"]]],mediaTypes:{banner:{sizes:"desktop_halfpage"}}},{code:"slot80",disabled:!1,mediaTypes:{native:{title:{required:!0,len:80},image:{required:!0,sizes:[300,150],aspect_ratios:[{ratio_width:2,ratio_height:1,min_width:300,min_height:150}]},sponsoredBy:{required:!1}}},bids:[[8,[4831,"money.pl",!0]],[4,[13840724]],[13,["WP_Desktop_RON_Native","62652"]],[1,[664770]],[2,["f4c827430b393ba9e07b50a32cec9b09"]]]},{code:"slot81",disabled:!1,bids:[[8,[4831,"money.pl",!0]],[13,["WP_Desktop_RON_Native","62652"]],[1,[664769]],[2,["ffa2f1d75ba0ce435655b0252096176c"]]],mediaTypes:{native:{title:{required:!0,len:80},image:{required:!0,sizes:[300,150],aspect_ratios:[{ratio_width:2,ratio_height:1,min_width:300,min_height:150}]},sponsoredBy:{required:!1}}}},{code:"slot90",disabled:!1,bids:[[4,[12923436]],[8,[4831,"money.pl"]],[14,["prebid-eu","XNEdtxheGMSt"]],[15,["19096","267668","1326746",[2,40,41,57]]],[22,["14505674"]],[13,["desktop_money.pl_slot90","62652"]],[12,["wirtualn-d.openx.net","538758058"]],[11,["278993"]],[1,[120475]],[17,[51951,550185,73727]],[16,["8ESGGHFl3wnv7h6Op0zNspWo"]]],mediaTypes:{banner:{sizes:"desktop_billboard_970"}}},{code:"slot99",disabled:!1,bids:[[1,[120465]],[4,[12923415]],[8,[4831,"money.pl"]],[14,["prebid-eu","XNEdtxheGMSt"]],[15,["19096","267668","1326758",[10,15]]],[13,["desktop_money.pl_slot99","62652"]],[11,["278995"]],[17,[51858,550185,73727]],[16,["PQOIKhFvwyJpeC5BI0MHF8y8"]]],mediaTypes:{banner:{sizes:"desktop_halfpage"}}},{code:"slot150",disabled:!1,mediaTypes:{video:{context:"instream",playerSize:[640,480],mimes:["video/mp4","video/x-ms-wmv","video/webm","video/3gpp","application/javascript"],protocols:[2,3,5,6],api:[2],maxduration:30,linearity:1,placement:1,plcmt:1}},bids:[[4,[9380893,{skippable:!1,playback_method:"auto_play_sound_off"}]],[22,["13159281",{skippable:!1,playback_method:["auto_play_sound_off"]},"money.pl"]],[12,["wirtualn-d.openx.net","540094710"]],[13,["desktop_money.pl_x150","62652",{mimes:["video/mp4","video/x-ms-wmv","video/webm","video/3gpp","application/javascript"],skippable:!0,minduration:5,maxduration:30,startdelay:0,api:[1,2],protocols:[2,3,5,6],battr:[8,9,13,14,17],linearity:1,placement:1,minbitrate:500,maxbitrate:7e3}]],[17,[42470,550185,73727,{protocol:6,startDelay:1}]],[15,["19096","267668","1583810",[201],{language:"pl"}]],[11,["452668",[640,480],{mimes:["video/mp4","video/x-ms-wmv","video/webm","video/3gpp","application/javascript"],minduration:0,maxduration:30,protocols:[2,3,5,6]}]],[1,[219454]],[8,[4831,"money.pl",{skip:1,playbackmethod:[6]}]]]},{code:"slot35",disabled:!1,bids:[[1,[598410]],[4,[13896215]],[14,["prebid-eu","XNEdtxheGMSt"]],[8,[4831,"money.pl"]],[12,["wirtualn-d.openx.net","540292457"]],[15,["19096","267668","1326768",[10,15]]],[22,["14505675"]],[13,["desktop_money.pl_slot35","62652"]],[17,[54834,550185,73727]],[16,["PQOIKhFvwyJpeC5BI0MHF8y8"]]],mediaTypes:{banner:{sizes:"desktop_halfpage"}}},{code:"slot36",disabled:!1,bids:[[1,[598409]],[4,[13896220]],[14,["prebid-eu","XNEdtxheGMSt"]],[8,[4831,"money.pl"]],[12,["wirtualn-d.openx.net","540292456"]],[17,[67462,550185,73727]],[15,["19096","267668","1326792",[10,15]]],[13,["desktop_money.pl_slot36","62652"]],[11,["579138"]],[16,["PQOIKhFvwyJpeC5BI0MHF8y8"]],[6,[24918021]],[1,[1722976],"sigma"]],mediaTypes:{banner:{sizes:"desktop_halfpage"}}},{code:"slot50",disabled:!1,bids:[[1,[598414]],[4,[13896227]],[14,["prebid-eu","XNEdtxheGMSt"]],[8,[4831,"money.pl"]],[15,["19096","267668","1326794",[2,40,41,57]]],[22,["14505674"]],[13,["desktop_money.pl_slot50","62652"]],[12,["wirtualn-d.openx.net","543848885"]],[11,["615041"]],[17,[52681,550185,73727]],[16,["8ESGGHFl3wnv7h6Op0zNspWo"]]],mediaTypes:{banner:{sizes:"desktop_billboard_970"}}},{code:"slot59",disabled:!1,bids:[[1,[598412]],[4,[13896223]],[14,["prebid-eu","XNEdtxheGMSt"]],[12,["wirtualn-d.openx.net","540292458"]],[17,[52683,550185,73727]],[15,["19096","267668","1326800",[10,15]]],[22,["14505675"]],[13,["desktop_money.pl_slot59","62652"]],[8,[4831,"money.pl"]],[11,["615042"]],[16,["PQOIKhFvwyJpeC5BI0MHF8y8"]]],mediaTypes:{banner:{sizes:"desktop_halfpage"}}},{code:"slot11",restrict:{ctype:["article"]},disabled:!1,bids:[[4,[17946231,{skippable:!1,playback_method:"auto_play_sound_off"}]],[12,["wirtualn-d.openx.net","540925582"]],[15,["19096","267668","1584520",[203],{language:"pl"}]],[11,["452670",[640,480],{mimes:["video/mp4","video/x-ms-wmv","video/webm","video/3gpp","application/javascript"],minduration:0,maxduration:30,protocols:[2,3,5,6]}]],[17,[42470,1173406,73727,{protocol:6}]],[1,[323007,1,0,1]],[20,[207662,192442,!0]]],mediaTypes:{video:{context:"outstream",playerSize:[640,480],mimes:["video/mp4","video/x-ms-wmv","video/webm","video/3gpp","application/javascript"],protocols:[2,3,5,6],api:[2],maxduration:30,linearity:1,placement:3,plcmt:2}},renderer:{backupOnly:!0}},{code:"slot72",disabled:!1,bids:[[15,["19096","267668","1454864",[15]]],[13,["desktop_money.pl_slot72","62652"]],[8,[4831,"money.pl"]],[17,[52537,550185,73727]],[16,["q6dX4vZcUv1xYB3a0rE93p44"]]],mediaTypes:{banner:{sizes:"desktop_rectangle"}}},{code:"slot92",disabled:!1,bids:[[15,["19096","267668","1454868",[15]]],[13,["desktop_money.pl_slot92","62652"]],[8,[4831,"money.pl"]],[17,[52541,550185,73727]],[16,["q6dX4vZcUv1xYB3a0rE93p44"]]],mediaTypes:{banner:{sizes:"desktop_rectangle"}}},{code:"slot93",disabled:!1,bids:[[1,[759303]],[4,[18292892]],[7,[1033353,10047]],[8,[4831,"money.pl"]],[12,["wirtualn-d.openx.net","540952111"]],[14,["prebid-eu","XNEdtxheGMSt"]],[17,[52542,550185,73727]],[15,["19096","267668","1545022",[10,15]]],[11,["451805"]],[13,["desktop_money.pl_x93","62652"]],[16,["PQOIKhFvwyJpeC5BI0MHF8y8"]]],mediaTypes:{banner:{sizes:"desktop_halfpage"}}},{code:"slot94",disabled:!1,bids:[[1,[759302]],[4,[18292893]],[7,[1033354,10047]],[8,[4831,"money.pl"]],[12,["wirtualn-d.openx.net","540952112"]],[14,["prebid-eu","XNEdtxheGMSt"]],[17,[52543,550185,73727]],[15,["19096","267668","1545024",[10,15]]],[11,["451806"]],[13,["desktop_money.pl_x94","62652"]],[16,["PQOIKhFvwyJpeC5BI0MHF8y8"]]],mediaTypes:{banner:{sizes:"desktop_halfpage"}}},{code:"slot33",disabled:!1,bids:[[1,[759523]],[4,[18293812]],[7,[1033369,10047]],[8,[4831,"money.pl"]],[12,["wirtualn-d.openx.net","540952458"]],[14,["prebid-eu","XNEdtxheGMSt"]],[17,[51864,550185,73727]],[15,["19096","267668","1545422",[15]]],[11,["451820"]],[13,["desktop_money.pl_x33","62652"]],[16,["q6dX4vZcUv1xYB3a0rE93p44"]]],mediaTypes:{banner:{sizes:"desktop_rectangle"}}},{code:"slot29",disabled:!1,mediaTypes:{banner:{sizes:"desktop_midtext_620"}},bids:[[17,[51862,550185,73727]],[12,["wirtualn-d.openx.net","545644968"]],[1,[336629]],[14,["prebid-eu","XNEdtxheGMSt"]],[7,[1034663,10047]],[4,[12923379]],[15,["19096","267668","1326704",[15,16]]],[11,["490152"]],[16,["q6dX4vZcUv1xYB3a0rE93p44"]]]},{code:"slot40",pauseAd:!0,disabled:!1,mediaTypes:{banner:{sizes:"desktop_rectangle"}},bids:[[8,[4831,"money.pl"]],[1,[842751]],[4,[19695258]],[16,["q6dX4vZcUv1xYB3a0rE93p44"]]]},{code:"slot95",disabled:!1,mediaTypes:{banner:{sizes:"desktop_halfpage"}},bids:[[8,[4831,"money.pl"]],[14,["prebid-eu","XNEdtxheGMSt"]],[17,[51961,613302,73727]],[12,["wirtualn-d.openx.net","538758070"]],[1,[848440]],[7,[1036530,10047]],[4,[19749121]],[15,["19096","267668","1787344",[10,15]]],[11,["579139"]],[13,["desktop_money.pl_x95","62652"]],[16,["PQOIKhFvwyJpeC5BI0MHF8y8"]]]},{code:"slot32",restrict:{ctype:["article"]},disabled:!1,mediaTypes:{video:{context:"outstream",playerSize:[640,480],mimes:["video/mp4","video/x-ms-wmv","video/webm","video/3gpp","application/javascript"],protocols:[2,3,5,6],api:[2],maxduration:30,linearity:1,placement:3,plcmt:2}},renderer:{backupOnly:!0},bids:[[20,[207661,192442,!0]]]},{code:"slot16",disabled:!1,mediaTypes:{banner:{sizes:"desktop_billboard_970"}},bids:[[1,[1251810]],[4,[23767275]],[7,[1009749,10047]],[8,[4831,"money.pl"]],[11,["758854"]],[12,["wirtualn-d.openx.net","556401886"]],[17,[52684,550185,73727]],[14,["prebid-eu","XNEdtxheGMSt"]],[15,["19096","267668","2254676",[57]]],[13,["desktop_money.pl_x16","62652"]],[16,["8ESGGHFl3wnv7h6Op0zNspWo"]]]},{code:"slot17",disabled:!1,mediaTypes:{banner:{sizes:"desktop_billboard_970"}},bids:[[1,[1251815]],[4,[23767279]],[7,[1009749,10047]],[8,[4831,"money.pl"]],[11,["758855"]],[12,["wirtualn-d.openx.net","556401887"]],[17,[52685,550185,73727]],[14,["prebid-eu","XNEdtxheGMSt"]],[15,["19096","267668","2254688",[57]]],[13,["desktop_money.pl_x17","62652"]],[16,["8ESGGHFl3wnv7h6Op0zNspWo"]]]},{code:"slot19",disabled:!1,mediaTypes:{banner:{sizes:"desktop_billboard_970"}},bids:[[1,[1251816]],[4,[23767280]],[7,[1009749,10047]],[8,[4831,"money.pl"]],[11,["758856"]],[12,["wirtualn-d.openx.net","556401886"]],[17,[53506,550185,73727]],[14,["prebid-eu","XNEdtxheGMSt"]],[15,["19096","267668","2254678",[57]]],[13,["desktop_money.pl_x19","62652"]],[16,["8ESGGHFl3wnv7h6Op0zNspWo"]]]},{code:"slot27",disabled:!1,restrict:{layout:["wide"]},mediaTypes:{banner:{sizes:"desktop_skyscraper"}},bids:[[8,[4831,"money.pl"]],[14,["prebid-eu","XNEdtxheGMSt"]],[16,["Cnwi37o3mAUcpCSJBgjYZJdP"]],[1,[1343124]],[4,[24264386]],[11,["777493"]],[17,[73954,1538622,73727]],[13,["desktop_money.pl_x27","62652"]],[15,["19096","267668","2312620",[9]]],[7,[1056918,10047]]]},{code:"slot151",disabled:!1,mediaTypes:{video:{context:"instream",playerSize:[640,480],mimes:["video/mp4","video/x-ms-wmv","video/webm","video/3gpp","application/javascript"],protocols:[2,3,5,6],api:[2],maxduration:16,linearity:1,placement:1,plcmt:1}},bids:[[4,[9380893,{skippable:!1,playback_method:"auto_play_sound_off"}]],[22,["13159281",{skippable:!1,playback_method:["auto_play_sound_off"]},"money.pl"]],[13,["desktop_money.pl_x151","62652",{mimes:["video/mp4","video/x-ms-wmv","video/webm","video/3gpp","application/javascript"],skippable:!0,minduration:5,maxduration:16,startdelay:0,api:[1,2],protocols:[2,3,5,6],battr:[8,9,13,14,17],linearity:1,placement:1,minbitrate:500,maxbitrate:7e3}]],[17,[42470,550185,73727,{protocol:6,startDelay:1}]]]},{code:"slot5",restrict:{ctype:["article"]},disabled:!1,mediaTypes:{video:{context:"outstream",playerSize:[640,480],mimes:["video/mp4","video/x-ms-wmv","video/webm","video/3gpp","application/javascript"],protocols:[2,3,5,6],api:[2],maxduration:30,linearity:1,placement:3,plcmt:2}},bids:[[20,[207653,192438,!0]]]},{code:"slot61",disabled:!1,mediaTypes:{banner:{sizes:"desktop_midtext_620"}},bids:[[8,[4831,"money.pl"]],[14,["prebid-eu","XNEdtxheGMSt"]],[16,["q6dX4vZcUv1xYB3a0rE93p44"]],[1,[1674148]],[4,[29675850]],[7,[1078548,10047]],[11,["967292"]],[12,["wirtualn-d.openx.net","559245586"]],[13,["desktop_money.pl_x61","62652"]],[17,[89443,1538622,73727]],[15,["19096","267668","1584520",[15]]]]},{code:"slot2",disabled:!1,restrict:{ctype:["index"]},mediaTypes:{banner:{sizes:"desktop_commercialbreak"}},bids:[[17,[106609,1538622,73727]],[16,["2W1VKQYkOpOWz1JCFlR4YjOQ"]],[15,["19096","267668","2312792",[144]]],[14,["prebid-eu","XNEdtxheGMSt"]],[13,["desktop_money.pl_x2","62652"]],[12,["wirtualn-d.openx.net","559805606"]],[11,["1046959"]],[7,[1111021,10047]],[4,[31177792]],[1,[1793085]],[8,[4831,"money.pl"]]]}]},config:{bidTargets:{default:2},dfpMultipliers:{default:2},floorprices:{default:{default:.5,slot2:15,slot3:1.5,slot5:1.5,slot36:1.5},instreamFloor:{default:6,stream:7.5},xhb:{default:2},outstreamFloor:{default:3}},priorities:{xhb:{slot150:{level:15},default:{level:2}}},viewConfig:{index:{auctions:[{id:"default",from:0,dist:0,asap:!0,slots:[3,34,36]},{id:"index1",dist:650,slots:[15,37]},{id:"index2",dist:650,slots:[16,79,99]},{id:"index3",dist:650,slots:[17,59]},{id:"low",dist:650,slots:[35,53]}]},article:{auctions:[{id:"default",from:0,dist:0,asap:!0,slots:[3,5,27,36,37,150,151]},{id:"native",dist:750,slots:[80,81]},{id:"art1",dist:650,slots:[11,12,13,14,61,93,94,95]},{id:"art2",dist:650,slots:[32,33,35]},{id:"art3",dist:650,slots:[70,79]},{id:"art4",dist:650,slots:[90,99]},{id:"low",dist:650,slots:[50,59,53]}]},article_premium:{auctions:[{id:"default",asap:!0,from:0,dist:0,slots:[15,16]},{id:"prem1",dist:650,slots:[17,18,19]},{id:"prem2",dist:650,slots:[33,70,79]},{id:"prem3",dist:650,slots:[90,99]},{id:"prem4",dist:650,slots:[50,53,59]}]},gallery:{auctions:[{id:"default",from:0,dist:0,asap:!0,slots:[3,36,37,29,150,151]},{id:"gal1",dist:650,slots:[33]},{id:"native",dist:650,slots:[80,81]},{id:"mid",dist:650,slots:[11,12,13,14]},{id:"low",dist:650,slots:[53]}]},stream:{auctions:[{id:"default",from:0,dist:0,asap:!0,slots:[3,34,150,151]},{id:"str1",dist:650,slots:[15,37,33,53,80,81]}]},notowania:{auctions:[{id:"default",from:0,dist:0,asap:!0,slots:[3,36,37,5]},{id:"native",dist:650,slots:[80,81]},{id:"low",dist:550,slots:[11,12,53,79]}]},category:{auctions:[{id:"default",from:0,dist:0,asap:!0,slots:[3,5,34,37]},{id:"native",dist:650,slots:[80,81]},{id:"low",dist:650,slots:[53]}]},others:{auctions:[{id:"default",from:0,dist:0,asap:!0,slots:[3,34,37]},{id:"mid",dist:650,slots:[53]}]},quiz:{auctions:[{id:"default",from:0,dist:0,asap:!0,slots:[3,36,80,81,53]}]},quizindex:{auctions:[{id:"default",from:0,dist:0,asap:!0,slots:[3,36,80,81]}]},calc:{auctions:[{id:"default",from:0,dist:0,asap:!0,slots:[3,34,37,80,81]},{id:"low",dist:650,slots:[53]}]},default:{slots:[3,37,18]}},slotAvailabilityDesktop:[11,12,13,14,93,94,95],sizeMap:[{desktop_billboard_970:[[970,300],[970,250],[950,300],[750,300],[750,200],[750,100]],desktop_contentbox_970:[[970,600],[980,600],[970,300],[970,250],[750,200],[750,300],[950,300]],desktop_midtext_640:[[300,250],[640,280],[336,280]],desktop_midtext_620:[[300,250],[620,280],[336,280]],desktop_halfpage:[[300,600],[300,250]],desktop_rectangle:[[300,250]],desktop_skyscraper:[[160,600],[120,600]],desktop_commercialbreak:[[750,300],[950,300],[970,300],[750,400],[970,600],[980,600],[1200,600],[1920,870]]}],bidderLimiterSlotsBlacklist:[80,81],blacklisted:{adrino:"all"}},steering:{usePvFraction:!0,apd:!0,useAmazon:!0,lazyBidding:!0,isDirectClickMultiplierAtfOnly:!0,useDirectClickMultiplier:!0},steeringExternal:{amznConfig:{pubID:"7ff3fff4-144d-4d39-8cb0-6a68c5c10ab4",units:[{slotID:"slot3",sizes:[[970,250],[728,90]]},{slotID:"slot5",sizes:[[300,250]]},{slotID:"slot11",sizes:[[300,250]]},{slotID:"slot36",sizes:[[300,600]]},{slotID:"slot37",sizes:[[300,600]]},{slotID:"slot27",sizes:[[160,600]]},{slotID:"slot32",sizes:[[300,250]]},{slotID:"slot35",sizes:[[300,600]]},{slotID:"slot93",sizes:[[300,600]]}],disabledGEO:[]},ctypesIntent:{article:["auto_play_sound_off"],stream:["click_to_play"]},brandSafety:{tagExcld:["koronawirus","pandemia","sars","covid","epidemia"],dpd_war:["ukraina","rosja","wojna","nato","konflikt","onz","inwazja","atak","sankcje","atak","wojsko","federacja"]}},ver:"1.0.1030"}}catch(e){var wp=window.WP||[];wp.push(function(){wp.captureError(e,"prebidConfig")})}</script>

		<script src="https://www.money.pl/Lm1pbi5qYwxQEhRaGgpuGRNKQApFGRMAXh4HEBddbjITSkA2ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm4vPTZqLhMybi89NmouEzJuLz02ai4TMm5STktAU3ZPHhpNA0QEKR9IXVNHDV9_Q1wZDEdfAm4Q"></script>
		<script>
		var WP = [];
		var __mnySiteFnc = [];
				if(typeof WP.$ === 'undefined') { WP.$ = jQuery; }
                if(typeof $j === 'undefined') { $j = jQuery; }
		var WPsocial = {config: function(p1, p2) {}};
		if(!WP.player) { WP.player = function(params) { WP.push(function() { WP.player(params); }); }; }
		WP.push(function () {
								WP.gaf.addEnv('ccategory','fundusze');
		WP.gaf.loadAndRunBunch();
		WP.getScript('https://s-eu-1.pushpushgo.com/js/5c779deee19a76000d37ea4d.js?va9');
		});
		</script>
        <meta name="logo" content="https://v.wpimg.pl/XzJ4LnBudxsrVjpdbQ56DmgObg0yHQcXJVopF3BXdFg_FnZMbQYsGz5dL0EuGj8VFXkjACcMBzkIa34WbAU2HWhJ" />
    	<meta name="gaf" content="NDQ3MTY3" />
		<script src="https://www.money.pl/eHA0djBkSikgUhJZbRBHPGMKRhgpSUlqHhJeSB00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HTQ6Fx5vOzUdNDoXHm87NR00Ohcebzs1HUlJajQSXkhtDAQub1oXVTAdWHlnQgEBKw8WdXMEUVl1XUM4KUQJBn8cEj9vXQsEJxJLOC0VVl9wLQM9L1QRGTgOQHp0AiIBIwcOPS1REAUwTld9c3YUGC0cDDIrVUFYd1kjbhFnJTUjDwcsfAJCGTICC3UPdDVZDz88e2dWCBk2ChEhJQ1CCyYdNiQuRBdXclpVbiJTBR4nDAo6OA0CHywPEDs7VUYX" charset="UTF-8"></script>
		<script src="https://www.money.pl/ODgxODcxYCUGGjl3TANtMEVCbScTEBA3ExxtaEEnbX5FJxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4WmNmFlp1ZkgPPy4QFCYmSA8_LhAUJiZKCyglE1YlN0UF" id="wpjslib" crossorigin charset="UTF-8"></script>

				<meta name="robots" content="index,follow" />
<link rel="search" type="application/opensearchdescription+xml" title="Money.pl" href="https://www.money.pl/d/search.xml" />
<link rel="shortcut icon" href="//static1.money.pl/i/favicon.ico" type="image/x-icon" />

<link href="https://plus.google.com/+moneypl/" rel="publisher" />
<meta property="og:title" content="Oblicz wysoko∂Ê prowizji funduszy inwestycyjnych" />
		<meta property="og:description" content="Oblicz wysoko∂Ê prowizji funduszy inwestycyjnych" />
		<meta property="og:image" content="https://static1.money.pl/i/wp-money.png" />
		<meta property="og:url" content="https://www.money.pl/fundusze/kalkulator/prowizje/" />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content="www.money.pl" />
		<meta property="og:locale" content="pl_PL" />
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="https://www.money.pl/fundusze/kalkulator/prowizje/" />
		<meta property="twitter:site" content="@Money_pl" />
		<meta property="twitter:image" content="https://static1.money.pl/i/wp-money.png" />
		<meta property="twitter:description" content="Oblicz wysoko∂Ê prowizji funduszy inwestycyjnych" />
		<meta property="twitter:domain" content="www.money.pl" />
		<meta name="author" content="Grupa Wirtualna Polska" />
		<meta property="fb:app_id" content="203880196374936" />
		<meta property="fb:pages" content="90593452375" />
		<meta property="fb:pages" content="115567901803497" />
		<meta property="fb:pages" content="203367529692524" />
		<meta property="logo" content="https://money.wpcdn.pl/i/logo/money_pl_meta.png" />
		
<!--[if lte IE 8]><link rel="stylesheet" type="text/css" media="screen" href="https://www.money.pl/X2llLmNzd1MNDjpeYQF6Rk5Wbg4-EgdfAwIpFGxWem1OVm4yESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQdtMzMTMhElB20zMxMyESUHbTMzEzIRJQcQQE45T3RYd0FDCyUIIh45bQUJYg49CXpP" /><![endif]-->
<link rel="stylesheet" type="text/css" href="https://www.money.pl/dW5kbGUuSzZUCRR0eg5GIxdRQCQlHTs6WgUHPndZRggXUUAYCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKKjsIajQ9GAoqOwhqND0YCio7CGo0PRgKV0h1QElYZXoGSydUDAcYNwAKM1kOTCQmBkYq" />




		<script>
		var _gaq = _gaq || [];
                
                function loadAndRunGoogleAnalyticsScript() {                  
                try {                                   
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-40724203-1', 'auto', { 'legacyCookieDomain': 'www.money.pl' });
ga('set', 'dimension2', 'A');
ga('send', 'pageview');
                        
                }
                catch (e) {
                  console.error(e);   
                }    
                }
                
                try {
                    WP.push(function () {
                        WP.gdpr.runAfterConsent(loadAndRunGoogleAnalyticsScript);
                    });
                }
                catch (e) {
                  console.error(e);   
                }   
		</script>
	    <script src="https://www.money.pl/YnVuZGxldg83Fyx0Vxd7GnRPeCQIBAYDORs_PlpAezF0T3gYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYJzMGMQkqBRgnMwYxCSoFGCczBjEJKgUYWkB7G3RPeGgSQzsbOBE2IgtDOgE7GDUpJw4sADIZP2kSH3sT"></script>

</head>
<body>
<div>
	
            <div class="h65c51145d62a9"></div>
            <script>
            try {
                WP.gaf.registerSlot(6, '.h65c51145d62a9');
            } catch(e) {};
            </script>
        
<header id="mainHeader" class="header brand-new-mny adsize_header money2018" data-st-area="headerMenu">
	<div class="logo-money-container">
		<a alt="money.pl" data-st-area="logo" href="https://www.money.pl/">
			<h1 alt="Najpopularniejszy w Polsce portal o finansach i biznesie">
				<svg xmlns="http://www.w3.org/2000/svg" width="168" height="41" viewBox="0 0 168 41">
					<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<path d="M6.20137975,28.454 C6.20137975,30.4079873 5.72339241,30.8859747 3.76992405,30.8859747 L2.94473418,30.8859747 C0.990746835,30.8859747 0.513278481,30.4079873 0.513278481,28.454 L0.513278481,17.426038 C0.513278481,11.7379367 3.72632911,8.6551519 9.80522785,8.6551519 C12.8444177,8.6551519 14.9722658,9.61008861 16.2313291,11.4338101 C17.5339873,9.61008861 19.7049114,8.6551519 22.6138354,8.6551519 C28.9968608,8.6551519 31.8185949,11.6076709 31.8185949,17.426038 L31.8185949,28.454 C31.8185949,30.4079873 31.3411266,30.8859747 29.3871392,30.8859747 L28.5624684,30.8859747 C26.608481,30.8859747 26.1310127,30.4079873 26.1310127,28.454 L26.1310127,17.426038 C26.1310127,15.211519 25.6099494,13.9955316 22.6138354,13.9955316 C19.4874557,13.9955316 18.9233165,15.211519 18.9233165,17.426038 L18.9233165,28.454 C18.9233165,30.4079873 18.4458481,30.8859747 16.4918608,30.8859747 L15.8405316,30.8859747 C13.8865443,30.8859747 13.4090759,30.4079873 13.4090759,28.454 L13.4090759,17.426038 C13.4090759,15.211519 12.8880127,13.9955316 9.80522785,13.9955316 C6.76603797,13.9955316 6.20137975,15.211519 6.20137975,17.426038 L6.20137975,28.454" id="Fill-1" fill="#FFFFFF" />
						<path d="M49.6208987,18.2943038 C49.6208987,15.5156456 48.8828987,13.9955316 44.9749241,13.9955316 C41.0669494,13.9955316 40.2422785,15.5156456 40.2422785,18.2943038 L40.2422785,21.7678861 C40.2422785,24.5465443 41.0669494,26.0661392 44.9749241,26.0661392 C48.8828987,26.0661392 49.6208987,24.5465443 49.6208987,21.7678861 L49.6208987,18.2943038 Z M34.5541772,21.7678861 L34.5541772,18.2943038 C34.5541772,12.0851392 38.2016203,8.6551519 44.9749241,8.6551519 C52.0959494,8.6551519 55.308481,11.8682025 55.308481,18.2943038 L55.308481,21.7678861 C55.308481,27.9765316 51.7482278,31.406519 44.9749241,31.406519 C37.8538987,31.406519 34.5541772,28.1934684 34.5541772,21.7678861 L34.5541772,21.7678861 Z" id="Fill-2" fill="#FFFFFF" />
						<path d="M63.7326835,28.454 C63.7326835,30.4079873 63.2546962,30.8859747 61.3007089,30.8859747 L60.476038,30.8859747 C58.5220506,30.8859747 58.0445823,30.4079873 58.0445823,28.454 L58.0445823,17.426038 C58.0445823,11.7379367 61.3878987,8.6551519 67.9437468,8.6551519 C74.8042405,8.6551519 77.7567595,11.6076709 77.7567595,17.426038 L77.7567595,28.454 C77.7567595,30.4079873 77.2792911,30.8859747 75.3253038,30.8859747 L74.5001139,30.8859747 C72.5466456,30.8859747 72.0691772,30.4079873 72.0691772,28.454 L72.0691772,17.426038 C72.0691772,15.211519 71.504519,13.9955316 67.9437468,13.9955316 C64.3834937,13.9955316 63.7326835,15.211519 63.7326835,17.426038 L63.7326835,28.454" id="Fill-3" fill="#FFFFFF" />
						<path d="M86.1799241,17.5127089 L94.7338734,17.5127089 L94.7338734,16.8613797 C94.7338734,14.6904557 93.3009494,13.5616582 90.4351013,13.5616582 C87.5692532,13.5616582 86.1799241,14.6904557 86.1799241,16.8613797 L86.1799241,17.5127089 Z M100.031177,19.7267089 C99.7706456,21.7242911 99.2065063,22.1150886 97.2089241,22.1150886 L86.1799241,22.1150886 L86.1799241,22.7664177 C86.1799241,25.0240127 87.8303038,26.0661392 91.8680253,26.0661392 C94.1261392,26.0661392 96.2970633,25.6322658 97.1217342,25.4584051 C99.0321266,25.0676076 99.423443,25.5886709 99.423443,27.5426582 L99.423443,28.0201266 C99.423443,29.9741139 99.0321266,30.3649114 97.1217342,30.8423797 C96.2970633,31.0593165 94.2558861,31.406519 91.8244304,31.406519 C84.1397848,31.406519 80.4923418,28.6278608 80.4923418,21.8981519 L80.4923418,18.4245696 C80.4923418,12.8231392 83.0540633,8.6551519 90.609481,8.6551519 C96.9483924,8.6551519 100.117848,11.8682025 100.117848,18.0337722 C100.117848,18.3809747 100.117848,18.9456329 100.031177,19.7267089 L100.031177,19.7267089 Z" id="Fill-4" fill="#FFFFFF" />
						<path d="M109.801114,24.6768101 C110.148316,26.3266709 110.668861,26.5005316 111.841772,26.5005316 C112.536696,26.5005316 113.100835,26.2830759 113.448038,24.6768101 L116.313886,11.5640759 C116.748278,9.65368354 117.312937,9.17621519 119.266405,9.17621519 L120.221342,9.17621519 C122.175329,9.17621519 122.566646,9.65368354 122.131734,11.5640759 L117.703215,30.8859747 C116.140544,37.7459494 112.536696,40.0912532 108.324595,40.6984684 C106.327532,41.0025949 105.850063,40.7420633 105.415152,38.7014051 L105.372595,38.4839494 C104.938203,36.6171519 105.198215,36.1396835 107.022456,35.7488861 C109.149785,35.2708987 111.103772,34.0118354 111.755101,31.2331772 C111.364304,31.363443 110.582709,31.406519 109.974456,31.406519 C106.067,31.406519 105.111544,28.8453165 104.286354,25.3281392 L101.117418,11.5640759 C100.682506,9.65368354 101.073823,9.17621519 103.02781,9.17621519 L103.983266,9.17621519 C105.936734,9.17621519 106.500873,9.65368354 106.935266,11.5640759 L109.801114,24.6768101" id="Fill-5" fill="#FFFFFF" />
						<path d="M124.551253,24.6768101 C126.419089,24.6768101 127.938165,26.1964051 127.938165,28.0632025 C127.938165,29.930519 126.419089,31.4501139 124.551253,31.4501139 C122.684456,31.4501139 121.164861,29.930519 121.164861,28.0632025 C121.164861,26.1964051 122.684456,24.6768101 124.551253,24.6768101" id="Fill-6" fill="#D83359" />
						<path d="M146.44681,18.164038 C146.44681,14.2124684 145.274937,12.1287342 140.238165,12.1287342 C135.244987,12.1287342 133.985405,14.2124684 133.985405,18.164038 L133.985405,22.2022785 C133.985405,26.1097342 135.244987,28.2370633 140.238165,28.2370633 C145.231342,28.2370633 146.44681,26.1097342 146.44681,22.2022785 L146.44681,18.164038 Z M130.728759,18.120443 C130.728759,12.2154051 133.812063,9.04594937 140.238165,9.04594937 C146.924797,9.04594937 149.746532,12.2154051 149.746532,18.120443 L149.746532,22.1586835 C149.746532,27.7595949 147.271481,31.3198481 140.758709,31.3198481 C137.111785,31.3198481 135.027013,30.1043797 133.985405,28.1067975 L133.985405,38.1803418 C133.985405,39.3091392 133.724873,39.5696709 132.596076,39.5696709 L132.118608,39.5696709 C130.989291,39.5696709 130.728759,39.3091392 130.728759,38.1803418 L130.728759,18.120443 L130.728759,18.120443 Z" id="Fill-7" fill="#FFFFFF" />
						<g transform="translate(153.101266, 0.000000)" fill="#FFFFFF">
							<path d="M0.379379747,1.8818481 C0.379379747,0.752531646 0.639911392,0.492 1.76870886,0.492 L2.2466962,0.492 C3.37601266,0.492 3.6365443,0.752531646 3.6365443,1.8818481 L3.6365443,24.763481 C3.6365443,27.3687975 4.54788608,28.0632025 5.8505443,28.0632025 L6.06748101,28.0632025 C7.10960759,28.0632025 7.41373418,28.1067975 7.41373418,29.192519 L7.41373418,29.4961266 C7.41373418,30.5818481 7.19679747,30.9290506 6.19774684,31.1029114 C5.8505443,31.1465063 5.63308861,31.1465063 5.4161519,31.1465063 C2.63749367,31.1465063 0.379379747,29.6263924 0.379379747,25.3281392 L0.379379747,1.8818481" id="Fill-8" />
						</g>
					</g>
				</svg>
			</h1>
		</a>
	</div>

	<section class="header-bottom">
		<style type="text/css">
    nav.header-bottom__categories > li > a {
        text-transform: initial! important;
    }
</style>

<nav class="header-bottom__categories">
            <li >
            <a href="https://www.money.pl/gielda/" data-st-area="st-menu-gielda">Gie≥da</a>
                            <div class="subMenyWrapper">
                    <ul>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/gielda/indeksy_gpw/">Notowania GPW</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/gielda/spolki-gpw/">SpÛ≥ki GPW</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/gielda/porownanie-spolek/">PorÛwnanie spÛ≥ek</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/gielda/na-zywo/">Gie≥da na øywo</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/gielda/swiat/europa/">Gie≥dy ∂wiatowe</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/gielda/komunikaty/">Komunikaty ESPI</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/gielda/surowce/">Surowce</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/gielda/narzedzia/">NarzÍdzia gie≥dowe</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/portfel_2013/">Portfel</a></div>
                                                                </li>
                                            </ul>
                </div>
                    </li>
            <li >
            <a href="https://www.money.pl/pieniadze/" data-st-area="st-menu-waluty">Waluty</a>
                            <div class="subMenyWrapper">
                    <ul>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/pieniadze/nbp/srednie/">Kursy walut</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/pieniadze/kalkulator/">Kalkulator walutowy</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/pieniadze/bitcoin/">Bitcoin</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/pieniadze/forex/">Forex</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/pieniadze/depozyty/walutowe/">Depozyty</a></div>
                                                                </li>
                                            </ul>
                </div>
                    </li>
            <li >
            <a href="https://msp.money.pl/" data-st-area="st-menu-msp">Dla przedsiÍbiorcÛw</a>
                            <div class="subMenyWrapper">
                    <ul>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/gospodarka/jak-zalozyc-firme-praktyczny-poradnik-6819706698144576a.html">Jak za≥oøyÊ firmÍ</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/firma/pkd-2007/">PKD</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/firma/pkwiu/">PKWiU</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/faktoring-dla-firm/">Faktoring dla firm</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/wiadomosci/poradnik-przedsi%c4%99biorcy.html">Poradniki</a></div>
                                                                </li>
                                            </ul>
                </div>
                    </li>
            <li >
            <a href="https://www.money.pl/mobility/" data-st-area="st-menu-mobility">Mobility</a>
                    </li>
            <li >
            <a href="https://praca.money.pl/" data-st-area="st-menu-praca">Praca</a>
                            <div class="subMenyWrapper">
                    <ul>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://praca.money.pl/oferty-pracy/">Oferty pracy</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://praca.money.pl/wynagrodzenia/">Wynagrodzenia</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/kalkulator-ppk/">Kalkulator PPK</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/plac/">Kalkulator wynagrodzeÒ</a></div>
                                                                </li>
                                            </ul>
                </div>
                    </li>
            <li >
            <a href="https://www.money.pl/sekcja/biznes-i-gospodarka/" data-st-area="st-menu-biznes-gospodarka">Biznes i Gospodarka</a>
                            <div class="subMenyWrapper">
                    <ul>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/biztech/">BizTech</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/ekologia-oze-esg/">Ekologia, OZE, ESG</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/nieruchomosci-i-budownictwo/">Nieruchomo∂ci i budownictwo</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/emerytury/">Emerytury</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/prawo/">Prawo</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/kariera-i-rynek-pracy/">Kariera i rynek pracy</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/finanse-osobiste/">Finanse osobiste</a></div>
                                                                </li>
                                            </ul>
                </div>
                    </li>
            <li >
            <a href="https://www.money.pl/podatki/kalkulatory/" data-st-area="st-menu-kalkulatory">Kalkulatory</a>
                            <div class="subMenyWrapper">
                    <ul>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/polski-lad/">Kalkulator Polskiego £adu</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/urlopu-macierzynskiego/">Kalkulator urlopu macierzyÒskiego</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/odsetkowy/">Kalkulator odsetkowy</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/zakupow-na-firme/">Kalkulator zakupÛw na firmÍ</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/skladek-zus/">Kalkulator sk≥adek ZUS</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/wynagrodzenia-za-prace-w-nadgodzinach/">Kalkulator wynagrodzenia za pracÍ w nadgodzinach</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/dat/">Kalkulator dat</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/wynagrodzenia-chorobowego/">Kalkulator wynagrodzenia chorobowego</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/ekwiwalentu-za-urlop-wypoczynkowy/">Kalkulator ekwiwalentu za urlop wypoczynkowy</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/stazu-pracy/">Kalkulator staøu pracy</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/kredytu-hipotecznego/">Kalkulator kredytu hipotecznego</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/podatki/kalkulatory/skladek-zus-dzialalnosc-gospodarcza/">Kalkulator sk≥adek ZUS dla dzia≥alno∂ci gospodarczej</a></div>
                                                                </li>
                                            </ul>
                </div>
                    </li>
            <li >
            <a href="/#" data-st-area="st-menu-strefamoney">Strefa money</a>
                            <div class="subMenyWrapper">
                    <ul>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/wiadomosci/biznes-klasa.html">Biznes Klasa</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/wiadomosci/program-money.html">Program Money</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/nagroda-money/2023/">Nagroda Money</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/wiadomosci/pomys%C5%82-na-dom.html">Pomys≥ Na Dom</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/stangospodarki/">Stan gospodarki</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/wybory2023/">Wybory parlamentarne 2023</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://wybory2023.money.pl/licznik-obietnic-wyborczych">Obietnice wyborcze 2023</a></div>
                                                                </li>
                                            </ul>
                </div>
                    </li>
            <li >
            <a href="/#" rel="nofollow">Wydarzenia</a>
                            <div class="subMenyWrapper">
                    <ul>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/impact/">Impact</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/kongres-590/">Kongres 590</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/forumekonomiczne2023">Forum Ekonomiczne</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/szczytklimatyczny/">Szczyt Klimatyczny Togetair</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/zapytaj-notariusza/">Zapytaj Notariusza</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/krynicaforum2022/">Krynica Forum 2022</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/krynicaforum2023/">Krynica Forum 2023</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/nieruchomosci-online.pl/">Rynek nieruchomo∂ci - INPON 2023</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/wyzszypoziomchmury/">Wyøszy poziom chmury</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/cybersec-forum/">Cybersec Forum</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/polskamocbiznesu/">Kongres ESG Polska Moc Biznesu</a></div>
                                                                </li>
                                                    <li class="drop-primary">
                                <div class="drop-primary__title"><a href="https://www.money.pl/sekcja/eksit/">II Europejski Kongres Sportu I Turystyki</a></div>
                                                                </li>
                                            </ul>
                </div>
                    </li>
        <li id="dropdownMore"><a href="#">WiÍcej</a>
        <div class="menu-secondary subMenyWrapper" id="menuSecondary">
            <div class="menu-secondary__content">
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://www.money.pl/podatki/">Podatki</a></div>
                                                        <li class="column-entry"><a href="https://www.money.pl/podatki/wiadomosci/">Wiadomo∂ci podatkowe</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/pit/">Pit</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/podatki/formularze/">Formularze podatkowe</a></li>
                                                        <li class="column-entry"><a href="https://msp.money.pl/znajdz_adres/">Znajdº Adres</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/podatki/poradniki/">Poradniki podatkowe</a></li>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://prawo.money.pl/">Prawo</a></div>
                                                        <li class="column-entry"><a href="https://prawo.money.pl/aktualnosci/wiadomosci/">Wiadomo∂ci</a></li>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://direct.money.pl/">Twoje finanse (REKLAMA)</a></div>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://www.money.pl/fundusze/">Fundusze</a></div>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/profile/">Profile funduszy</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/profile/wyszukiwarka/">Wyszukiwarka fundusz</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/kalkulator/zysk/">Stopa zwrotu z funduszy</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/kalkulator/prowizje/">Kalkulator prowizji</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/porownanie/">Kalkulator zysku</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/archiwum/fundusze/">Archiwum Funduszy</a></li>
                                                        <li class="column-entry"><a href="https://www.money.pl/fundusze/wiadomosci/">Wiadomo∂ci</a></li>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://www.money.pl/banki/">Banki</a></div>
                                                        <li class="column-entry"><a href="https://www.money.pl/banki/poradniki/">Poradniki</a></li>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://www.money.pl/ubezpieczenia/">Ubezpieczenia</a></div>
                                                </ul>
                                    <ul class="menu-secondary__column">
                        <div class="column-title"><a href="https://www.money.pl/emerytury/">Emerytury</a></div>
                                                        <li class="column-entry"><a href="https://www.money.pl/emerytury/poradniki/">Poradniki</a></li>
                                                </ul>
                            </div>
        </div>
    </li>
</nav>

<form class="header-bottom__search" id="header-form-search" action="http://www.money.pl/wyszukiwarka/" method="get" onsubmit="WP.cookie.set('nhs', 1, new Date(new Date().setMinutes(new Date().getMinutes() + 1)), '/wyszukiwarka/', 'www.money.pl');
        return true">
    <div class="wrapperSearch">
        <input class="search-input" type="text" placeholder="Szukaj..." value="" name="q">
        <input class="search-submit" type="submit" value="" name="search">
        <svg version="1.1" width="8" height="8" x="0px" y="0px" viewBox="0 0 20.1 15.5">
        <path d="M114.5,19 L113.71,19 L113.43,18.73 C114.41,17.59 115,16.11 115,14.5 C115,10.91 112.09,8 108.5,8 C104.91,8 102,10.91 102,14.5 C102,18.09 104.91,21 108.5,21 C110.11,21 111.59,20.41 112.73,19.43 L113,19.71 L113,20.5 L118,25.49 L119.49,24 L114.5,19 L114.5,19 Z M108.5,19 C106.01,19 104,16.99 104,14.5 C104,12.01 106.01,10 108.5,10 C110.99,10 113,12.01 113,14.5 C113,16.99 110.99,19 108.5,19 L108.5,19 Z" transform="translate(-102 -8)"></path>
        </svg>
    </div>
</form>
<a class="user-login" href="https://konto.money.pl/login.html">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path fill="#FFFFFF" d="M1255,89 C1256.10476,89 1257,89.8952381 1257,91 C1257,92.1047619 1256.10476,93 1255,93 C1253.89524,93 1253,92.1047619 1253,91 C1253,89.8952381 1253.89524,89 1255,89 L1255,89 Z M1255,98 C1257.92131,98 1261,99.36875 1261,99.96875 L1261,101 L1249,101 L1249,99.96875 C1249,99.36875 1252.07869,98 1255,98 L1255,98 Z M1255,87 C1252.79,87 1251,88.79 1251,91 C1251,93.21 1252.79,95 1255,95 C1257.21,95 1259,93.21 1259,91 C1259,88.79 1257.21,87 1255,87 L1255,87 Z M1255,96 C1252.33,96 1247,97.34 1247,100 L1247,103 L1263,103 L1263,100 C1263,97.34 1257.67,96 1255,96 L1255,96 Z" transform="translate(-1247 -87)"></path>
    </svg>
</a>	</section>
</header>

<script>
function apiContentBox(e){if(0===$("#"+e.id).length){var i=e.id,t=e.url,o="string"==typeof e.image?e.image:widthPage(e.image),a="string"==typeof e.width?e.width:e.width+"px",r="string"==typeof e.height?e.height:e.height+"px",d=!0===e.scalable?"cover":"",n=!0===e.fixed?"fixed":"absolute",g=!0===e.repeat?"repeat":"no-repeat",p=e.backgroundColor,s="number"==typeof e.offsetTop?e.offsetTop:widthPage(e.offsetTop),f='<div id="'+i+'" style="position: relative;"><div style="top: '+s+"px;left: 0px; z-index: -1; position: "+n+"; background-position: 50% 0px; background-color: "+p+"; background-repeat: "+g+"; background-image: url(&quot;"+o+"&quot;); background-size: "+d+";width: "+a+";height: "+r+';"><a  href="'+t+'" target="_blank" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; "></a></div></div>'
		$("body").css({position:"relative","z-index":-1}),$("#mainHeader").before(f).parent().css({position:"relative","z-index":-1}),$(window).resize(function(){"string"!=typeof e.image&&$("#"+i+" > div").css({"background-image":"url("+widthPage(e.image)+")"})})}}function widthPage(e){var i=$("#mainHeader").outerWidth(!0)
		return i<=1200?e.narrow:i<1600?e.medium:e.wide}
</script>


<div class="x03" style="text-align:center;min-height:180px">
            <div class="d65c51145d66dc"></div>
            <script>
            try {
                WP.gaf.registerSlot(3, '.d65c51145d66dc');
            } catch(e) {};
            </script>
        </div>
<div id="gielda" class="col2 adsize_content">



	<!-- zegary ze ∂wiata -->
	
	<div itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="" class="path"><a href="//www.money.pl" itemprop="url"><span itemprop="title">Money.pl</span></a><a href="http://www.money.pl/fundusze/" itemprop="url"><span itemprop="title">Fundusze</span></a><a href="http://www.money.pl/fundusze/kalkulator/prowizje/" itemprop="url"><span itemprop="title">Kalkulatory funduszy</span></a><a href="http://www.money.pl/fundusze/kalkulator/prowizje/" itemprop="url"><span itemprop="title">Oblicz wysoko∂Ê prowizji</span></a><span>Oblicz wysoko∂Ê prowizji</span></div>	<div class="mpl_left">
				
<div class="b660 box">
	<div class="hd inbox">Oblicz wysoko∂Ê prowizji</div>
	<div class="box_form">
		<form action="." method="post" class="form long_label">
			<div class="content">
				<div class="form form2">
					<dl>
						<dt>Wybierz typ funduszy:</dt>
						<dd>
							<select onchange="jQuery(this.form.grupa).load('/ajax/fundusze/grupa_select/?typ='+this.value);" name="typ" class="sin">
																	<option value="26" >Krajowe - absolutnej stopy zwrotu</option>
																	<option value="1" selected="selected">Krajowe - akcji</option>
																	<option value="35" >Krajowe - ca≥kowitej stopy zwrotu</option>
																	<option value="6" >Krajowe - mieszany</option>
																	<option value="8" >Krajowe - nieruchomo∂ci</option>
																	<option value="27" >Krajowe - obligacji</option>
																	<option value="37" >Krajowe - pozosta≥e</option>
																	<option value="3" >Krajowe - prywatny</option>
																	<option value="13" >Krajowe - rynku pieniÍønego</option>
																	<option value="15" >Krajowe - sekurytyzowane</option>
																	<option value="5" >Krajowe - surowcowy</option>
															</select>
						</dd>
					</dl>

					<dl>
						<dt>Wybierz grupÍ funduszy:</dt>
						<dd>
							<select name="grupa" class="sin">
								<option value="0">- wszystkie -</option>
																	<option value="695" >aktywnej alokacji (Europa)</option>
																	<option value="697" >aktywnej alokacji (¶wiat)</option>
																	<option value="608" >dywidendowy (Europa)</option>
																	<option value="406" >indeksowy (Polska)</option>
																	<option value="685" >indeksowy (rynki wschodz±ce)</option>
																	<option value="345" >ma≥ych i ∂rednich spÛ≥ek (Europa)</option>
																	<option value="1" >ma≥ych i ∂rednich spÛ≥ek (Polska)</option>
																	<option value="677" >ma≥ych i ∂rednich spÛ≥ek (rynki wschodz±ce)</option>
																	<option value="682" >ma≥ych i ∂rednich spÛ≥ek (Stany Zjednoczone)</option>
																	<option value="394" >ma≥ych i ∂rednich spÛ≥ek (¶wiat)</option>
																	<option value="669" >sektorowy (Azja i Pacyfik)</option>
																	<option value="552" >sektorowy (Europa)</option>
																	<option value="538" >sektorowy (Polska)</option>
																	<option value="498" >sektorowy (¶wiat)</option>
																	<option value="393" >uniwersalny (Azja i Pacyfik)</option>
																	<option value="367" >uniwersalny (Europa)</option>
																	<option value="2" >uniwersalny (Polska)</option>
																	<option value="675" >uniwersalny (rynki rozwiniÍte)</option>
																	<option value="529" >uniwersalny (rynki wschodz±ce)</option>
																	<option value="358" >uniwersalny (Stany Zjednoczone)</option>
																	<option value="352" >uniwersalny (¶wiat)</option>
															</select>
						</dd>
					</dl>

					<dl>
						<dt>Kwota inwestycji:</dt>
						<dd>
							<input type="text" name="kwota" value="10000" class="sin4"> PLN
						</dd>
					</dl>

					<dl>
						<dt>&nbsp;</dt>
						<dd>
							<input type="submit" class="but_blue" name="show" value="Pokaø"/>
						</dd>
					</dl>			
				</div>
			</div>
		</form>				

	</div>
</div>
<div class="b660">
	<div class="txt">
		<a name="opis" class="bld"><b>Opis kalkulatora</b></a><br>
		Kalkulator oblicza liczbÍ jednostek uczestnictwa oraz warto∂Ê op≥aty manipulacyjnej dla podanej kwoty i funduszy wybranego typu.
		<br /><br />
		Powyøsze wyliczenia umoøliwiaj± porÛwnanie wysoko∂ci op≥aty manipulacyjnej jaka jest pobierana przy zakupie wyliczonej liczby jednostek dla funduszy wybranego typu.
	</div>			   
</div>		</div> <!-- end left -->
	
	
	<div class="mpl_right">	
		
<div class="b300a box"><div class="corner">
            <div class="s65c51145d790c"></div>
            <script>
            try {
                WP.gaf.registerSlot(27, '.s65c51145d790c');
            } catch(e) {};
            </script>
        </div></div>
            <div class="p65c51145d7979"></div>
            <script>
            try {
                WP.gaf.registerSlot(37, '.p65c51145d7979');
            } catch(e) {};
            </script>
        <div class="b300a box"><script type="text/javascript" src="//static1.money.pl/j/jquery.autocomplete_money_analytics.js"></script>
<script type="text/javascript" src="//money.wpcdn.pl/j/wakacje/jquery.date_input.js"></script>
<div class="corner">
	<div class="hd"><a href="/fundusze/kalkulator/zysk/">Kalkulator funduszy</a></div>
	<form action="/fundusze/kalkulator/zysk/" method="post" class="form">
		<input type="hidden" name="typ_src" value="1">
		<div>
			<label>Wybierz fundusz</label>
			<input id="fundusze_kalkzysk_shortcut_symbol" value="" type="text" name="symbol" class="in in150 sin sin2 mr0 bg_select" />
		</div>	

		<div>
			<label>Kwota inwestycji</label>
			<input type="text" name="kwota" value="10000" class="sin sin2 mr0"> <span>PLN</span>
		</div>


		<div>
			<label>Data kupienia jednostek</label>
			<div class="dateForm" >
				<ul class="analitics_date_wrapper" style="padding:0 !important">
					<li class="analitics_date_box">
						<input id="fundusze_kalkzysk_date_od" onchange="setDate(this)"  type="text" name="od" class="analitics_date" value="2023-02-08" />
					</li>
				</ul>
			</div>
		</div>

			<div>
			<label>Data zbycia jednostek</label>
			<div class="dateForm" >
				<ul class="analitics_date_wrapper" style="padding:0 !important">
					<li class="analitics_date_box">
						<input id="fundusze_kalkzysk_date_do" onchange="setDate(this)"  type="text" name="do" class="analitics_date" value="2024-02-08" />
					</li>
				</ul>
			</div>
		</div>			


		<div>
			<label>&nbsp;</label>
			<input type="submit" class="but" name="show" value="Pokaø" onclick="return fundusze_kalkzysk_check(this)"/>
		</div>	
	</form>				

</div>
							
							
							

<script type="text/javascript">
	jQuery(function() {
		jQuery('#fundusze_kalkzysk_shortcut_symbol').autocompleteMoneyAnalytics({source_url: "/ajax/gielda/symbol/", source_param: {fundusze: 1, hide_symbol: 1, fulltextsearch: 1}, multiple: false, min_length: 0});
	});
	jQuery('#fundusze_kalkzysk_date_od').date_input();
	jQuery('#fundusze_kalkzysk_date_do').date_input();
		
	function fundusze_kalkzysk_check(f)
	{
		if(jQuery('#fundusze_kalkzysk_shortcut_symbol').val().length==0 
		|| jQuery('#fundusze_kalkzysk_shortcut_symbol').val().substr(0, 3) != 'TFI')
		{
			alert('Musisz wybraÊ fundusz');
			return false;
		}

		ds=jQuery('#fundusze_kalkzysk_date_od').val();
		de=jQuery('#fundusze_kalkzysk_date_do').val();
		if(ds.length==0||de.length==0)
		{
			alert('Musisz wybraÊ obydwie daty, lub okres');
			return false;
		}
		if(ds>de)
		{
			alert('Data pocz±tkowa musi byc mniejsza niz koÒcowa');
			return false;
		}	
		return true;
	}
</script>   
</div><div class="b300a box"><div class="hd inbox"><a href="/fundusze/profile/wyszukiwarka/">Znajdº fundusz</a></div>
<div class="corner">
	<form class="form" action="/fundusze/profile/wyszukiwarka/szukaj,funduszy.html" method="get">
		<div>
			<label>Nazwa</label>						
			<input type="text" class="sin sin2" name="nazwa">
		</div>	
		<div>
			<label>Stopa zwrotu min.</label>						
			<input type="text" name="stopa" class="sin in40">
			w&nbsp;
			<select name="okres" class="sin in40">
				<option value="1">1</option>
				<option value="3">3</option>
				<option value="6">6</option>
				<option selected="" value="12">12</option>
				<option value="18">18</option>
				<option value="24">24</option>
				<option value="36">36</option>
			</select>
			mies.		
		</div>	
		<div>
			<label>&nbsp;</label>						
			<input type="submit" value="Znajdº" class="but" name="szukaj">
		</div>					
	</form>
</div>	</div><div class="onreklama1" id="3278465c51145d8118"><div style="text-align:center;" class="reklama">
            <div class="j65c51145d8166"></div>
            <script>
            try {
                WP.gaf.registerSlot(18, '.j65c51145d8166');
            } catch(e) {};
            </script>
        </div></div>
			    <script type="text/javascript">
				jQuery(function() {
				    if(jQuery("#adv18").is(":hidden")) {
					jQuery("#3278465c51145d8118").removeClass("onreklama1");
				    }
				});
		        </script>
				</div> <!-- end right -->
	
	
	<div class="mpl_max">
			</div> <!-- end max -->
	
	<div class="mpl_bottom">
			</div> <!-- end stopka z linkami -->

	
		<div id="1412965c51145d81ca" style="position: absolute; top: 0px; left: 100%; z-index: 100; margin: 0 0 0 10px; width:160px;">
            <div class="o65c51145d8215"></div>
            <script>
            try {
                WP.gaf.registerSlot(7, '.o65c51145d8215');
            } catch(e) {};
            </script>
        </div>	    <script type="text/javascript">
	        /* <![CDATA[ */
	        (function () {
	    	try {
				var skyId = '#1412965c51145d81ca';
				var rectId = '#7141265c51145d825a';
	    	    var position = {};
	    	    var offset = {};
	    	    var isFixed = false;
	    	    function init() {
	    		position = {top: jQuery(rectId).position().top + jQuery(rectId).height() + 10};
	    		jQuery(skyId).css({top: position.top});
	    		offset = {left: jQuery(skyId).offset().left, top: jQuery(skyId).offset().top - jQuery('#dzialy').height()};
	    	    }
	    	    jQuery(window).scroll(function () {
	    		return;
	    		var scrollTop = jQuery(window).scrollTop();
	    		if (scrollTop > offset.top) {
	    		    if (!isFixed) {
	    			var left = offset.left - parseInt(jQuery(skyId).css('margin-left'));
	    			jQuery(skyId).css({position: "fixed", left: left, top: jQuery('#dzialy').height()});
	    			isFixed = true;
	    		    }
	    		} else {
	    		    if (isFixed) {
	    			jQuery(skyId).css({position: 'absolute', left: '100%', top: position.top});
	    			isFixed = false;
	    		    }
	    		}
	    	    });
	    	    jQuery(window).resize(function () {
	    		jQuery(skyId).css({position: 'absolute', left: '100%', top: position.top});
	    		if (jQuery(window).width() > offset.left) {
	    		    if (isFixed) {
	    			offset.left = jQuery(skyId).offset().left;
	    			jQuery(skyId).css({position: 'fixed', left: offset.left});
	    		    }
	    		}
	    	    });
	    	    init();
	    	    jQuery(function () {
	    		init()
	    	    });
	    	} catch (err) {
	    	}
	        })();
	        /* ]]> */
	    </script>
	</div><!-- end manager -->

<div style="width:976px;margin:0 auto"></div> 

<div id="mnu_bottom"></div>
					<script type="text/javascript">
					(function() {
						var mb = document.createElement("script");
						mb.type = "text/javascript";
						mb.async = true;
						mb.src = "//static1.money.pl/j/menu/5abd1766717a09b3057d123f2c412f1b_87002.js";
						var s = document.getElementsByTagName("script")[0];
						s.parentNode.insertBefore(mb, s);
					})();
					</script><script>
__mnySiteFnc.push(function() {
	// config dla FB
	window.WPsocial.config('FB', {
		fbAppId : '203880196374936',
		fbNamespace : 'portal.Moneypl',
		fbXfbml : true,
		fbStatus : true,
		fbCookie : true,
		fbLang : 'pl_PL',
		version: 'v2.3',
		fbdebug: false
	});
	window.WPsocial.config('WP', {ignoreLibCss:true });
});
</script>

<div class="container">
<div style="width:976px;margin:0 auto"></div></div>

<footer class="footer money2018">
  <div class="contentWrapper">
    <div class="contentShortcuts">
      <h2 class="title">MONEY.PL na skrÛty</h2>
      <div>
        <a href="https://www.money.pl/emerytury/notowania/">Notowania OFE</a>
        <a href="https://www.money.pl/emerytury/archiwum/fundusze/">Archiwum OFE</a>
        <a href="https://www.money.pl/emerytury/wykresy/">Wykresy OFE</a>
        <a href="https://www.money.pl/emerytury/kalkulator/ofe">Kalkulatory OFE</a>
        <a href="https://www.money.pl/emerytury/kalkulator/prowizje/">PorÛwnaj pobierane przez OFE prowizje</a>
        <a href="https://www.money.pl/fundusze/kalkulator/zysk/">Kalkulatory funduszy</a>
        <a href="https://www.money.pl/gospodarka/unia-europejska/statystyka/">PKB w UE</a>
      </div>
      <div>
        <a href="https://www.money.pl/fundusze/notowania/">Notowania funduszy</a>
        <a href="https://www.money.pl/fundusze/notowania/krajowe;-;akcji,-1.html">Krajowe akcji</a>
        <a href="https://www.money.pl/fundusze/wykresy/">Wykresy funduszy</a>
        <a href="https://www.money.pl/fundusze/profile/">Profile funduszy</a>
        <a href="https://www.money.pl/fundusze/prowizje/">Prowizje</a>
        <a href="https://www.money.pl/fundusze/kalkulator/zysk/">Kalkulatory funduszy</a>
        <a href="https://www.money.pl/forum/">Forum</a>
      </div>
      <div>
        <a href="https://www.money.pl/banki/kalkulatory/lokatowy/">Kalkulator lokatowy</a>
        <a href="https://www.money.pl/banki/kalkulatory/koszty/">Kalkulator kosztÛw zakupu nieruchomo∂ci</a>
        <a href="https://www.money.pl/banki/lokaty/12-miesieczne/">Lokaty 12-miesiÍcy</a>
        <a href="http://direct.money.pl/kredytysamochodowe/" class="spons">Kredyty samochodowe</a>
        <a href="http://direct.money.pl/ubezpieczenieauta/" class="spons">Ubezpieczenie auta</a>
        <a href="https://www.totalmoney.pl/energia" class="spons">Energia</a>
        <a href="https://agrobiznes.money.pl/">Agrobiznes</a>
      </div>
      <div>
        <a href="https://msp.money.pl/facebookdlafirm/">Pomys≥ na biznes z FB</a>
        <a href="https://www.money.pl/rejestr-firm/kody-pocztowe/">Kody pocztowe</a>
        <a href="https://msp.money.pl/wiadomosci/zakladam_firme/">Zak≥adam firmÍ</a>
        <a href="https://msp.money.pl/intel/">Firma Jutra</a>
        <a href="https://www.money.pl/ey-przedsiebiorca-roku/">EY przedsiÍbiorca roku</a>
        <a href="https://www.money.pl/gospodarka/wskazniki/pkb/">PKB</a>
        <a href="https://www.money.pl/emerytury/poradniki/">Poradniki</a>
      </div>
      <div>
        <a href="https://www.money.pl/podatki/informator/">Informator - stawki</a>
        <a href="https://www.money.pl/podatki/kalkulatory/odsetkowy/">Kalkulator odsetkowy</a>
        <a href="https://www.money.pl/podatki/kalkulatory/diety/">Diety zagraniczne</a>
        <a href="https://www.money.pl/podatki/urzedy/">UrzÍdy skarbowe</a>
        <a href="https://www.money.pl/podatki/zus/">Baza ZUS</a>
        <a href="https://www.money.pl/fundusze/edukacja/">ABC funduszy</a>
        <a href="https://www.money.pl/portfel/">Portfel inwestycyjny</a>
      </div>
      <div>
        <a href="https://www.money.pl/quizy/">Quizy</a>
        <a href="https://manager.money.pl/foto-news/">Galerie</a>
        <a href="https://www.money.pl/zwiazek-miast-polskich/">Zwi±zek Miast Polskich</a>
        <a href="https://tech.money.pl/">Technologie</a>
        <a href="https://moto.money.pl/">Motoryzacja</a>
        <a href="https://www.totalmoney.pl/konta_firmowe" class="spons">Konta firmowe</a>
        <a href="http://direct.money.pl/kredyty-na-start/" class="spons">Kredyty na start</a>
      </div>
    </div>
    <div class="topFooterDesktop">
      <h2 class="title">MONEY.PL</h2>
      <div class="item1">
        <a href="//onas.wp.pl/">O nas</a>
        <a href="//reklama.wp.pl/">Reklama</a>
        <a href="https://www.totalmoney.pl/o-nas" class="spons">eCommerce finansowy</a>
        <a href="//www.money.pl/inne/mapa/">Mapa serwisu</a>
      </div>
      <div class="item2">
        <a href="https://onas.wp.pl/zasady.html">Regulamin</a>
        <a href="https://onas.wp.pl/poufnosc.html?ticaid=11aa0b">Polityka prywatno∂ci</a>
        <a href="https://pomoc.wp.pl/">Kontakt</a>
        <a href="https://pomoc.wp.pl/">Pomoc</a>
      </div>
      <div class="item3">
        <a href="/archiwum/data/">Archiwum wg dat</a>
        <a href="https://www.money.pl/archiwum/autor/">Archiwum wg autorÛw</a>
        <a href="//www.money.pl/webmaster/">Dla webmasterÛw</a>
        <a href="//www.money.pl/rss/">RSS</a>
      </div>
      <div class="logoPartner">
        <a class="linkDefault" href="//www.businessclick.com/">
          <figure>
            <img src="//money.wpcdn.pl/i/mny2015/logo-businessclick.png" alt="BusinessClick">
          </figure>
        </a>
        <a class="linktotalMoney" href="//www.totalmoney.pl/">
          <figure>
            <img src="//money.wpcdn.pl/i/mny2015/logo_porownywarka.png" alt="TotalMoney.pl">
          </figure>
        </a>
        <a class="linkMoneyToMoney" href="//www.money2money.com.pl/">
          <figure>
            <img src="//money.wpcdn.pl/i/mny2015/logo-money2money.png" alt="Money2Money">
          </figure>
        </a>
        <div style="text-align:center;width: 190px;">(REKLAMA)</div>
      </div>
      <div class="socialMediaDeksktop">
        <a class="socialLink" href="https://www.facebook.com/portal.Moneypl">
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 32 32">
            <path class="FB" fill="#333333" d="M13.7,24.9h3.7V16h2.5l0.3-3.1h-2.8l0-1.5c0-0.8,0.1-1.2,1.2-1.2h1.5V7.1h-2.5c-2.9,0-4,1.5-4,4v1.8h-1.8V16h1.8V24.9L13.7,24.9z"></path>
          </svg>
        </a>
        <a class="socialLink" href="https://twitter.com/money_pl">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <g fill="none">
              <path fill="#FFFFFF" d="M16,31.625 C7.384,31.625 0.375,24.615 0.375,16 C0.375,7.385 7.384,0.375 16,0.375 C24.615,0.375 31.625,7.385 31.625,16 C31.625,24.615 24.615,31.625 16,31.625 Z"></path>
              <path class="twiter" fill="#333333" d="M18.226,8.886 C16.636,9.465 15.631,10.957 15.745,12.59 L15.783,13.22 L15.147,13.143 C12.832,12.847 10.809,11.844 9.091,10.159 L8.251,9.323 L8.036,9.94 C7.578,11.316 7.871,12.77 8.825,13.748 C9.334,14.288 9.219,14.365 8.342,14.044 C8.037,13.941 7.769,13.864 7.744,13.903 C7.655,13.993 7.96,15.163 8.202,15.627 C8.533,16.271 9.207,16.9 9.945,17.274 L10.569,17.57 L9.83,17.581 C9.118,17.581 9.092,17.594 9.169,17.865 C9.423,18.701 10.428,19.589 11.548,19.975 L12.337,20.245 L11.65,20.657 C10.632,21.25 9.436,21.584 8.24,21.608 C7.667,21.621 7.196,21.672 7.196,21.711 C7.196,21.839 8.749,22.559 9.651,22.843 C12.361,23.679 15.58,23.318 17.997,21.891 C19.715,20.875 21.432,18.855 22.234,16.899 C22.667,15.858 23.099,13.954 23.099,13.041 C23.099,12.449 23.137,12.372 23.849,11.665 C24.269,11.253 24.663,10.803 24.74,10.675 C24.868,10.43 24.854,10.43 24.206,10.649 C23.125,11.035 22.972,10.984 23.507,10.405 C23.901,9.993 24.372,9.247 24.372,9.029 C24.372,8.991 24.181,9.055 23.965,9.17 C23.736,9.299 23.227,9.492 22.845,9.607 L22.158,9.826 L21.535,9.4 C21.191,9.169 20.709,8.911 20.454,8.834 C19.804,8.654 18.812,8.68 18.226,8.886 Z"></path>
            </g>
          </svg>
        </a>
      </div>
    </div>

    <div class="bottomFoterDesktop">
      <div>
        <a class="linkONas" href="//onas.wp.pl/">MONEY.PL JEST CZ ¶CI° GRUPY WIRTUALNA POLSKA</a>
      </div>
      <p class="copyRight">&copy; <!-- -->2018<!-- --> WIRTUALNA POLSKA MEDIA S.A.</p>
    </div>
  </div>
</footer>


<script>
	 	jQuery(function() {
 		if (window.money) window.money.initMainMenu();
 	});

 	jQuery('.xmobile :contains("Czytaj wiÍcej w")').parent('.xmobile').hide();

if (WP.$('.modliszka-config').length == 1 && WP.$('article .like-us').length == 1) {
    WP.$('.modliszka-config').parents('.playertv_box').before(WP.$('article .like-us'))
}

if (jQuery('article .exchange-live-widget').length>0 && jQuery('article .like-us').length>0 && (jQuery('article .exchange-live-widget').offset().top+jQuery('article .exchange-live-widget').outerHeight()-jQuery('article .like-us').offset().top > 0)) {
	jQuery('article .exchange-live-widget').hide();
}
</script>
 <style>
	article .n_takze.xmobile, article .takze.xmobile { display:none !important }
        footer a.spons::before {
            content: 'REKLAMA';
            position: relative;
            top: 3px;
            font-size: 9px;
            line-height: 12px;
            color: #888;
            display: block;
        }
        .footer.money2018 {
            text-align: left;
        }
</style>
</div>
<script>
jQuery('.corner').each(function(i, e) {
jQuery(this).append('<span class="corners ctl"></span>');
jQuery(this).append('<span class="corners ctr"></span>');
jQuery(this).append('<span class="corners cbl"></span>');
jQuery(this).append('<span class="corners cbr"></span>');
});
</script>




            <div class="p65c51145d88cd"></div>
            <script>
            try {
                WP.gaf.registerSlot(80, '.p65c51145d88cd');
            } catch(e) {};
            </script>
        
            <div class="h65c51145d8918"></div>
            <script>
            try {
                WP.gaf.registerSlot(81, '.h65c51145d8918');
            } catch(e) {};
            </script>
        
            <div class="h65c51145d8961"></div>
            <script>
            try {
                WP.gaf.registerSlot(82, '.h65c51145d8961');
            } catch(e) {};
            </script>
        
            <div class="o65c51145d89ab"></div>
            <script>
            try {
                WP.gaf.registerSlot(83, '.o65c51145d89ab');
            } catch(e) {};
            </script>
        
            <div class="o65c51145d89f3"></div>
            <script>
            try {
                WP.gaf.registerSlot(84, '.o65c51145d89f3');
            } catch(e) {};
            </script>
        
            <div class="a65c51145d8a3c"></div>
            <script>
            try {
                WP.gaf.registerSlot(85, '.a65c51145d8a3c');
            } catch(e) {};
            </script>
            	<!-- Hotjar Tracking Code for http://www.money.pl/#old -->
    	<script>
    	(function(h,o,t,j,a,r){
    		h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    		h._hjSettings={hjid:764613,hjsv:6};
    		a=o.getElementsByTagName('head')[0];
    		r=o.createElement('script');r.async=1;
    		r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    		a.appendChild(r);
    	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    	</script>
      </body>
</html>