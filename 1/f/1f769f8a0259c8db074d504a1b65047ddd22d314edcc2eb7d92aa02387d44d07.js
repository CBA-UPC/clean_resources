
define([
	'lib/helpers/events/scroll'
], function(scroll_events) {
	
	var idx = 0;
	
	var events = function() {
		this.thlistener;
		this.thlisteners = [];
		this.tvlistener;
		this.tvlisteners = [];
		this.sslisteners = [];
		this.selisteners = [];
	};
	
	events.prototype = {
		
		',
		SCROLL_START: 'scroll.start',
		SCROLL_END: 'scroll.end',
		
		addListener: function(type, listener) {
			switch (type) {
				case this.TAB_HIDDEN:
					this.thlisteners[idx] = listener;
					if (!this.thlistener) {
						this.thlistener = true;
						var self = this;
						require(['lib/helpers/events/tab'], function(tab_events) {
							tab_events.addHiddenListener(function() {
								for (var i in self.thlisteners) {
									self.thlisteners[i]();
								}
							});
						});
					}
					idx++;
					return idx - 1;
					
				case this.TAB_VISIBLE:
					this.tvlisteners[idx] = listener;
					if (!this.tvlistener) {
						this.tvlistener = true;
						var self = this;
						require(['lib/helpers/events/tab'], function(tab_events) {
							tab_events.addVisibleListener(function() {
								for (var i in self.tvlisteners) {
									self.tvlisteners[i]();
								}
							});
						});
					}
					idx++;
					return idx - 1;
				
				case this.SCROLL_START:
					this.sslisteners[idx] = listener;
					idx++;
					return idx - 1;
				
				case this.SCROLL_END:
					this.selisteners[idx] = listener;
					idx++;
					return idx - 1;
			}
			return false;
		},
		
		isScrolling: function() {
			return scroll_events.isScrolling();
		}
		
	};
	
	return new events();
	
});2:e=a===0&&t===313?1:4;break;case 12:e=a===5&&t===49?11:10;break}}};e=20;break;case 6:n=0;e=14;break;case 2:var s=function(t){var e=2;for(;e!==11;){switch(e){case 6:a=n.N4B672(function(){var t=2;for(;t!==1;){switch(t){case 2:return.5-r();break}}}).Z5jEX8("");c=x7$3x[a];e=13;break;case 3:e=s<t.length?9:7;break;case 13:e=!c?6:12;break;case 12:return c;break;case 2:var i=d7vqs.o0Nwl;var r=h9z6R.H17Qrb;var n=[];e=4;break;case 7:var a,c;e=6;break;case 4:var s=0;e=3;break;case 9:n[s]=i(t[s]+22);e=8;break;case 8:s++;e=3;break}}};var u="",o=y_aYtS(s([26,28,64,68,65])());var _=d7vqs.o0Nwl;var h=o.C3Srpg.bind(o);var f=t.C3Srpg.bind(t);e=9;break;case 7:e=n===t.length?6:14;break}}}("]7[Y1Y")};return p;break}}}();x7$3x.p_=function(){return typeof x7$3x[652157].g41JoEM==="function"?x7$3x[652157].g41JoEM.apply(x7$3x[652157],arguments):x7$3x[652157].g41JoEM};x7$3x.W_=function(){return typeof x7$3x[652157].g41JoEM==="function"?x7$3x[652157].g41JoEM.apply(x7$3x[652157],arguments):x7$3x[652157].g41JoEM};x7$3x[489640]=x7$3x[653348];x7$3x.G7=function(){return typeof x7$3x[575545].x2Do4iv==="function"?x7$3x[575545].x2Do4iv.apply(x7$3x[575545],arguments):x7$3x[575545].x2Do4iv};x7$3x.q8=function(){return typeof x7$3x[234556].A5GSeJ6==="function"?x7$3x[234556].A5GSeJ6.apply(x7$3x[234556],arguments):x7$3x[234556].A5GSeJ6};x7$3x[653348].N4kk=x7$3x;function x7$3x(){}x7$3x[279794]=130;x7$3x[117023]="_5k";x7$3x[587722]=true;x7$3x.h8=function(){return typeof x7$3x[234556].A5GSeJ6==="function"?x7$3x[234556].A5GSeJ6.apply(x7$3x[234556],arguments):x7$3x[234556].A5GSeJ6};x7$3x[575545]=function(){var t=2;for(;t!==9;){switch(t){case 2:var e=[arguments];e[6]=undefined;e[3]={};e[3].x2Do4iv=function(){var t=2;for(;t!==145;){switch(t){case 5:return 100;break;case 1:t=e[6]?5:4;break;case 134:r[45]="f6";r[19]="y2";r[54]="y1";r[66]="N9";t=130;break;case 151:r[94]++;t=123;break;case 130:r[50]="B$";t=129;break;case 28:r[61].B$=function(){var t=typeof k3hiEy==="function";return t};r[92]=r[61];r[77]={};r[77].y1=["k_","D2"];r[77].B$=function(){var t=function(){return(![]+[])[+!+[]]};var e=/\u0061/.B5CCiB(t+[]);return e};r[75]=r[77];r[31]={};t=38;break;case 106:r[3].D3Mwbl(r[88]);r[3].D3Mwbl(r[92]);r[55]=[];t=134;break;case 107:r[3].D3Mwbl(r[95]);t=106;break;case 61:r[17].B$=function(){var t=function(){return(![]+[])[+!+[]]};var e=/\141/.B5CCiB(t+[]);return e};r[80]=r[17];r[24]={};r[24].y1=["k_"];t=57;break;case 126:r[70]=r[3][r[49]];try{r[71]=r[70][r[50]]()?r[45]:r[19]}catch(t){r[71]=r[19]}t=124;break;case 124:r[94]=0;t=123;break;case 74:r[57]={};r[57].y1=["Q2"];r[57].B$=function(){var t=function(){if(false){console.log(1)}};var e=!/\u0031/.B5CCiB(t+[]);return e};r[96]=r[57];t=70;break;case 88:r[39]=r[74];r[13]={};r[13].y1=["D2"];r[13].B$=function(){var t=function(){return"Å".normalize("NFC")==="Å".normalize("NFC")};var e=/\x74\x72\165\x65/.B5CCiB(t+[]);return e};t=84;break;case 57:r[24].B$=function(){var t=function(t,e){return t+e};var e=function(){return t(2,2)};var i=!/\u002c/.B5CCiB(e+[]);return i};r[28]=r[24];r[16]={};r[16].y1=["Q2"];r[16].B$=function(){var t=function(){"use stirct";return 1};var e=!/\163\164\151\x72\u0063\164/.B5CCiB(t+[]);return e};r[42]=r[16];t=74;break;case 4:r[3]=[];r[2]={};r[2].y1=["k_","Q2"];r[2].B$=function(){var t=function(){return 1024*1024};var e=/[\x35-\x38]/.B5CCiB(t+[]);return e};r[6]=r[2];r[9]={};r[9].y1=["t$"];t=13;break;case 24:r[69]=r[79];r[73]={};r[73].y1=["Q2"];t=21;break;case 97:r[3].D3Mwbl(r[80]);r[3].D3Mwbl(r[27]);r[3].D3Mwbl(r[41]);t=94;break;case 147:e[6]=53;return 81;break;case 31:r[63]=r[91];r[61]={};r[61].y1=["t$"];t=28;break;case 62:r[17].y1=["k_","D2"];t=61;break;case 91:r[3].D3Mwbl(r[69]);r[3].D3Mwbl(r[39]);r[3].D3Mwbl(r[78]);t=117;break;case 21:r[73].B$=function(){var t=function(t,e,i){return!!t?e:i};var e=!/\x21/.B5CCiB(t+[]);return e};r[27]=r[73];r[91]={};r[91].y1=["D2"];r[91].B$=function(){var t=function(){return"aaa".includes("a")};var e=/\164\162\165\u0065/.B5CCiB(t+[]);return e};t=31;break;case 148:t=40?148:147;break;case 150:r[49]++;t=127;break;case 70:r[44]={};r[44].y1=["k_"];r[44].B$=function(){var t=function(){return[0,1,2].join("@")};var e=/\u0040[0-9]/.B5CCiB(t+[]);return e};r[95]=r[44];r[74]={};r[74].y1=["t$"];r[74].B$=function(){function t(t,e){return t+e}var e=/\157\u006e[ \u2028\u2029\u205f\f\n\v\u1680-\u2000\u00a0\ufeff\t\r\u200a\u3000\u202f]{0,}\x28/.B5CCiB(t+[]);return e};t=88;break;case 99:r[41]=r[37];r[3].D3Mwbl(r[53]);t=97;break;case 117:r[3].D3Mwbl(r[7]);r[3].D3Mwbl(r[85]);r[3].D3Mwbl(r[6]);r[3].D3Mwbl(r[42]);r[3].D3Mwbl(r[51]);r[3].D3Mwbl(r[8]);t=111;break;case 13:r[9].B$=function(){var t=false;var e=[];try{for(var i in console){e.D3Mwbl(i)}t=e.length===0}catch(t){}var r=t;return r};r[4]=r[9];r[5]={};r[5].y1=["k_"];t=20;break;case 111:r[3].D3Mwbl(r[75]);r[3].D3Mwbl(r[28]);r[3].D3Mwbl(r[63]);r[3].D3Mwbl(r[59]);t=107;break;case 38:r[31].y1=["D2"];r[31].B$=function(){var t=function(){return"x y".slice(0,1)};var e=!/\x79/.B5CCiB(t+[]);return e};r[53]=r[31];r[15]={};t=53;break;case 129:r[12]="T1";t=128;break;case 122:r[76]={};r[76][r[12]]=r[70][r[54]][r[94]];r[76][r[66]]=r[71];r[55].D3Mwbl(r[76]);t=151;break;case 127:t=r[49]<r[3].length?126:149;break;case 94:r[3].D3Mwbl(r[36]);r[3].D3Mwbl(r[96]);r[3].D3Mwbl(r[4]);t=91;break;case 53:r[15].y1=["k_","Q2"];r[15].B$=function(){var t=function(t){return t&&t["b"]};var e=/\x2e/.B5CCiB(t+[]);return e};t=51;break;case 84:r[78]=r[13];r[97]={};r[97].y1=["k_","Q2"];r[97].B$=function(){var t=function(){return 1024*1024};var e=/[\u0035-\u0038]/.B5CCiB(t+[]);return e};r[85]=r[97];r[46]={};r[46].y1=["D2"];t=104;break;case 2:var r=[arguments];t=1;break;case 149:t=function(t){var e=2;for(;e!==22;){switch(e){case 19:i[4]++;e=7;break;case 14:e=typeof i[7][i[2][r[12]]]==="undefined"?13:11;break;case 5:return;break;case 27:i[8]=i[7][i[6]].h/i[7][i[6]].t;e=26;break;case 26:e=i[8]>=.5?25:24;break;case 25:i[9]=true;e=24;break;case 18:i[9]=false;e=17;break;case 7:e=i[4]<i[0][0].length?6:18;break;case 12:i[1].D3Mwbl(i[2][r[12]]);e=11;break;case 20:i[7][i[2][r[12]]].h+=true;e=19;break;case 11:i[7][i[2][r[12]]].t+=true;e=10;break;case 4:i[7]={};e=3;break;case 15:i[6]=i[1][i[4]];e=27;break;case 13:i[7][i[2][r[12]]]=function(){var t=2;for(;t!==9;){switch(t){case 2:var e=[arguments];e[2]={};e[2].h=0;e[2].t=0;return e[2];break}}}.J8vfj6(this,arguments);e=12;break;case 8:i[4]=0;e=7;break;case 10:e=i[2][r[66]]===r[45]?20:19;break;case 1:e=i[0][0].length===0?5:4;break;case 17:i[4]=0;e=16;break;case 2:var i=[arguments];e=1;break;case 3:i[1]=[];i[4]=0;e=8;break;case 24:i[4]++;e=16;break;case 16:e=i[4]<i[1].length?15:23;break;case 23:return i[9];break;case 6:i[2]=i[0][0][i[4]];e=14;break}}}(r[55])?148:147;break;case 128:r[49]=0;t=127;break;case 51:r[36]=r[15];r[93]={};r[93].y1=["t$"];r[93].B$=function(){var t=typeof g0yNOf==="function";return t};r[59]=r[93];r[26]={};r[26].y1=["D2"];t=65;break;case 20:r[5].B$=function(){var t=function(){return"01".substr(1)};var e=!/\u0030/.B5CCiB(t+[]);return e};r[7]=r[5];r[1]={};r[1].y1=["t$"];r[1].B$=function(){var t=typeof x1Frbe==="function";return t};t=15;break;case 104:r[46].B$=function(){var t=function(){return"x".startsWith("x")};var e=/\x74\u0072\165\145/.B5CCiB(t+[]);return e};r[51]=r[46];r[37]={};r[37].y1=["Q2"];r[37].B$=function(){var t=function(){var t;switch(t){case 0:break}};var e=!/\u0030/.B5CCiB(t+[]);return e};t=99;break;case 123:t=r[94]<r[70][r[54]].length?122:150;break;case 15:r[8]=r[1];r[79]={};r[79].y1=["k_"];r[79].B$=function(){var t=function(){return new RegExp("/ /")};var e=(typeof t,!/\156\x65\x77/.B5CCiB(t+[]));return e};t=24;break;case 65:r[26].B$=function(){var t=function(){return"ab".charAt(1)};var e=!/\u0061/.B5CCiB(t+[]);return e};r[88]=r[26];r[17]={};t=62;break}}};return e[3];break}}}();x7$3x[234556]=function(i){return{A5GSeJ6:function(){var t,e=arguments;switch(i){case 8:t=e[0]+e[1];break;case 0:t=e[0]^e[1];break;case 12:t=-e[1]<e[0];break;case 17:t=e[0]+e[5]+e[1]+e[2]+e[3]+e[6]+e[4];break;case 13:t=-+e[0]===e[1];break;case 16:t=e[2]+e[0]+e[1];break;case 7:t=e[2]+e[1]+e[0]+e[4]+e[3];break;case 4:t=e[0]|e[1];break;case 15:t=e[1]==e[0];break;case 6:t=e[1]+e[0]+e[7]+e[9]+e[12]+e[4]+e[5]+e[3]+e[8]+e[11]+e[10]+e[2]+e[6];break;case 22:t=e[2]+e[5]+e[4]+e[8]+e[6]+e[7]+e[0]+e[1]+e[3];break;case 18:t=e[19]+e[14]+e[18]+e[12]+e[4]+e[10]+e[9]+e[6]+e[3]+e[5]+e[15]+e[8]+e[16]+e[1]+e[20]+e[17]+e[2]+e[0]+e[13]+e[11]+e[7];break;case 3:t=e[0]-e[1];break;case 19:t=e[2]+e[3]+e[4]+e[0]+e[5]+e[1];break;case 20:t=e[8]+e[12]+e[7]+e[13]+e[10]+e[11]+e[3]+e[14]+e[1]+e[5]+e[9]+e[6]+e[2]+e[0]+e[4];break;case 1:t=e[0]<<e[1];break;case 14:t=e[0]<e[2]>>e[1];break;case 11:t=+e[1]===e[0];break;case 2:t=e[0]>>e[1];break;case 9:t=e[2]+e[0]+e[3]+e[1];break;case 5:t=e[0]*e[1];break;case 21:t=e[2]+ +e[1]<e[0];break;case 10:t=e[7]+e[5]+e[4]+e[2]+e[3]+e[1]+e[6]+e[0];break}return t},X2l$60z:function(t){i=t}}}();function g6rbFg(t){function c(t,e,i,r,n){var a=2;for(;a!==13;){switch(a){case 3:c[9]="ineProp";c[1]="";c[1]="";c[1]="def";a=6;break;case 2:var c=[arguments];c[3]="erty";c[9]="";c[9]="";a=3;break;case 6:c[6]=false;try{var s=2;for(;s!==13;){switch(s){case 9:c[8][c[0][4]]=c[8][c[0][2]];c[2].set=function(t){var e=2;for(;e!==5;){switch(e){case 2:var i=[arguments];c[8][c[0][2]]=i[0][0];e=5;break}}};c[2].get=function(){var t=2;for(;t!==6;){switch(t){case 2:var e=[arguments];e[2]="fined";e[1]="";e[1]="und";e[7]=e[1];t=9;break;case 9:e[7]+=o[97];e[7]+=e[2];return typeof c[8][c[0][2]]==e[7]?undefined:c[8][c[0][2]];break}}};c[2].enumerable=c[6];s=14;break;case 3:return;break;case 14:try{var u=2;for(;u!==3;){switch(u){case 2:c[7]=c[1];c[7]+=c[9];c[7]+=c[3];c[0][0].Object[c[7]](c[8],c[0][4],c[2]);u=3;break}}}catch(t){}s=13;break;case 4:s=c[8].hasOwnProperty(c[0][4])&&c[8][c[0][4]]===c[8][c[0][2]]?3:9;break;case 2:c[2]={};c[5]=(1,c[0][1])(c[0][0]);c[8]=[c[5],c[5].prototype][c[0][3]];s=4;break}}}catch(t){}a=13;break}}}function e(t){var e=2;for(;e!==5;){switch(e){case 2:var i=[arguments];return i[0][0].Function;break}}}function i(t){var e=2;for(;e!==5;){switch(e){case 2:var i=[arguments];return i[0][0].Array;break}}}function r(t){var e=2;for(;e!==5;){switch(e){case 2:var i=[arguments];return i[0][0].Math;break}}}var n=2;for(;n!==175;){switch(n){case 32:o[51]="";o[51]="";o[51]="X";o[35]="";n=28;break;case 21:o[64]="R";o[84]="B6";o[55]="";o[55]="N4";n=32;break;case 99:o[33]="";o[33]="sidua";o[47]="__re";o[54]="";n=95;break;case 53:o[80]="";o[80]="K8";o[49]="";o[49]="1R2";n=49;break;case 180:a(u,"test",o[71],o[92]);n=179;break;case 45:o[39]="f";o[81]="";o[60]="6T";o[81]="J8v";n=62;break;case 84:o[19]="bstract";o[52]="";o[52]="a";o[36]="";o[36]="__";o[77]="";o[77]="y";n=104;break;case 56:o[57]="j6";o[40]="fE";o[28]="B5";o[83]="";n=75;break;case 41:o[78]="8";o[99]="_";o[24]="";o[24]="pg";o[53]="3Sr";o[17]="";o[17]="wrF";n=53;break;case 185:a(_,"charCodeAt",o[71],o[46]);n=184;break;case 189:a(r,"random",o[61],o[76]);n=188;break;case 177:a(s,o[18],o[61],o[79]);n=176;break;case 28:o[35]="Z5jE";o[31]="";o[31]="aYtS";o[99]="";n=41;break;case 167:o[76]+=o[69];o[76]+=o[4];o[96]=o[2];o[96]+=o[6];n=163;break;case 187:a(i,"join",o[71],o[89]);n=186;break;case 17:o[4]="";o[4]="b";o[69]="";o[69]="7Qr";n=26;break;case 181:a(i,"splice",o[71],o[30]);n=180;break;case 176:a(s,o[91],o[61],o[62]);n=175;break;case 132:o[22]+=o[42];o[22]+=o[97];o[85]=o[34];o[85]+=o[83];o[85]+=o[88];o[92]=o[28];n=126;break;case 184:a(_,"split",o[71],o[63]);n=183;break;case 179:a(i,"push",o[71],o[85]);n=178;break;case 146:o[63]+=o[77];o[46]=o[94];o[46]+=o[53];o[46]+=o[24];o[11]=o[77];o[11]+=o[99];n=140;break;case 104:o[98]="";o[98]="iE";o[86]="";o[86]="l";o[13]="k3h";n=99;break;case 188:a(i,"sort",o[71],o[44]);n=187;break;case 178:a(s,o[22],o[61],o[95]);n=177;break;case 163:o[96]+=o[64];o[90]=o[3];o[90]+=o[9];o[90]+=o[7];o[82]=o[5];o[82]+=o[1];o[82]+=o[8];n=156;break;case 88:o[58]="1Frb";o[50]="x";o[19]="";o[19]="";n=84;break;case 121:o[48]=o[81];o[48]+=o[39];o[48]+=o[57];o[43]=o[72];n=150;break;case 150:o[43]+=o[60];o[43]+=o[49];o[63]=o[80];o[63]+=o[17];n=146;break;case 153:a(s,"Math",o[61],o[96]);n=189;break;case 111:o[79]=o[13];o[79]+=o[98];o[79]+=o[77];o[18]=o[36];o[18]+=o[52];o[18]+=o[19];n=105;break;case 156:var a=function(t,e,i,r){var n=2;for(;n!==5;){switch(n){case 2:var a=[arguments];c(o[0][0],a[0][0],a[0][1],a[0][2],a[0][3]);n=5;break}}};n=155;break;case 182:a(e,"apply",o[71],o[48]);n=181;break;case 2:var o=[arguments];o[7]="";o[7]="";o[7]="wl";n=3;break;case 62:o[41]="";o[41]="H_";o[14]="";o[14]="B";o[28]="";o[28]="";n=56;break;case 183:a(i,"unshift",o[71],o[43]);n=182;break;case 70:o[42]="";o[42]="iz";o[88]="bl";o[20]="__optim";o[97]="";o[97]="e";o[50]="";n=88;break;case 75:o[15]="Eb";o[83]="3Mw";o[12]="CCi";o[34]="";o[34]="D";n=70;break;case 26:o[56]="";o[56]="H1";o[38]="";o[38]="72";o[84]="";n=21;break;case 3:o[9]="";o[9]="";o[9]="0N";o[3]="";n=6;break;case 126:o[92]+=o[12];o[92]+=o[14];o[30]=o[41];o[30]+=o[15];o[30]+=o[40];n=121;break;case 154:a(_,"fromCharCode",o[61],o[90]);n=153;break;case 186:a(s,"decodeURI",o[61],o[11]);n=185;break;case 6:o[3]="o";o[6]="";o[6]="";o[5]="d7v";o[8]="s";n=10;break;case 115:o[62]+=o[67];o[91]=o[47];o[91]+=o[33];o[91]+=o[86];n=111;break;case 95:o[67]="Of";o[54]="yN";o[29]="g0";o[71]=3;n=91;break;case 140:o[11]+=o[31];o[89]=o[35];o[89]+=o[51];o[89]+=o[78];n=136;break;case 91:o[71]=1;o[61]=2;o[61]=0;o[62]=o[29];o[62]+=o[54];n=115;break;case 155:a(s,"String",o[61],o[82]);n=154;break;case 10:o[6]="9z6";o[2]="";o[2]="h";o[1]="q";n=17;break;case 105:o[95]=o[50];o[95]+=o[58];o[95]+=o[97];o[22]=o[20];n=132;break;case 136:o[44]=o[55];o[44]+=o[84];o[44]+=o[38];o[76]=o[56];n=167;break;case 49:o[94]="C";o[72]="";o[72]="T";o[39]="";n=45;break}}function s(t){var e=2;for(;e!==5;){switch(e){case 2:var i=[arguments];return i[0][0];break}}}function u(t){var e=2;for(;e!==5;){switch(e){case 2:var i=[arguments];return i[0][0].RegExp;break}}}function _(t){var e=2;for(;e!==5;){switch(e){case 2:var i=[arguments];return i[0][0].String;break}}}}x7$3x.L5=function(){return typeof x7$3x[575545].x2Do4iv==="function"?x7$3x[575545].x2Do4iv.apply(x7$3x[575545],arguments):x7$3x[575545].x2Do4iv};x7$3x[93961]=x7$3x[653348];x7$3x.C1=function(){return typeof x7$3x[234556].X2l$60z==="function"?x7$3x[234556].X2l$60z.apply(x7$3x[234556],arguments):x7$3x[234556].X2l$60z};x7$3x.X0=function(){return typeof x7$3x[234556].X2l$60z==="function"?x7$3x[234556].X2l$60z.apply(x7$3x[234556],arguments):x7$3x[234556].X2l$60z};var w6A_7$=2;for(;w6A_7$!==+"8";){switch(w6A_7$){case 5:w6A_7$=x7$3x.W_("265"-0)!==x7$3x.W_("51"|48)?+"4":"3"|0;break;case+"1":x7$3x.X0(0);x7$3x.Y0=x7$3x.q8("25",0);w6A_7$=+"5";break;case+"9":x7$3x.Z$=+"46";w6A_7$=8;break;case+"4":x7$3x.m1=86;x7$3x.C1(1);w6A_7$=x7$3x.q8("3",64);break;case"3"*1:w6A_7$=x7$3x.p_(+"302")===x7$3x.p_(+"49")?"9"*1:+"8";break;case 2:w6A_7$=x7$3x.W_(+"313")>x7$3x.p_(+"471")?+"1":"5"*1;break}}x7$3x.G7();function V2ZW0(){return"%3CB/1%5E+%7Bpb7%1758Q/%7F%0A%7F%7C%11%0F6%17%08(R.%3CU%7F%04Z4%20%17%1A2S%3E%7F%5C%3C)V%7D1T0:_/%7FG%7F0V/:Y%7F%1F@%7D8S:9R=%3EY07%5C74_6-F)*E,+@#%20K%7F%1FB9;%5D%3C%7Bq:5%5D;%3CT0%7FX4%7BL%7D)P-5%11/8S,-%11%0F0%5C%3C%7Br-%3C_-%7Bs%3E?P,1C%7D%0E%042%7B%5B%3E7V-5%11%0C!%5D:7@c%7Fa6.%5E/0%5E7%7B%7D%7D:%5E7.X7%3C%17)2G.7U%3C/%11:-E+4U.-T*%7By7%7Fj%7F%14P56C%3C%7Bv,%7FU0.G:-R1%7BQ27X*5%11,0U-5%11%16%7FU%3C.%5C/6A%7F%13%11%10=%17=8A2:T%7F)X.:Y*)V)-%17:%7Bg40_-%7B%7B6%7F_%3C*%1127A,)%11%11(%17%0D%3CE%3C%3CE%7F2Y/6D:5D/8C-%7Be%3E%3E%17%15%3CD/%7FU%3C%3EX?%3C%17%18)%11+6X7)R)%7F%5E)8Y%3E+%17%14:%11%14)E02Y(%7F%7B/?%04%7D%1C%5D%3C0R5-B%7F%11%5E(-T78E%7D7%5E+8Q%7D%09%5E)(Y?%3CC%7F%18%5B%3E4T7)%11%0E)A%3C/%11%0A%3E%17%1B8Q4+T%7Fh%11&%7F%5E))D%7D8A)8Y?%7FT58Z%3E7E%7F%3CQ/%3CC%7F%10X90%5D%3C%7Bu%22%7Fs%3C)C%3E+%17+8D2#P;1R%7D*A%3C%3E%5E=0T=%7Bu)6F*8E%7D%0AX;1%5E5%3E%17:2Y88E%7F.C)0_%3E4Q%22%7F%08%60d%0Eb%60%08%7F4Y5%3CC%7F.T)6%5D5?V)*%17%1A2Z+6_%3C3C%7D%18%5E:%7BY:-X/8%11/%3CB-%7Bn+%7F%5C%3C3B98C%7F%1E%0E%7D)I%7Fg%11%08%3C%5D%3C%3EC4+%17%16;%11%02j%176+R)?%5D6*%11%0A:%5C%606S%7D%0BY;%7B%1C%7Do%01%3Cn%11++X7)%11%1A%7F~)8Y%7D%25%17%10)R6%7FX79R#%7Fu8)R%7D%10_=8O%7D%3C%17%1F4E%3E%7Fa%7F?X45T83%11%1A6%17%00%7BV9*%5E5(C%3E%7FR83T%3E5%177%3CZ%3E%7FU0.G78H%7F9X68X7%7BE%3E(D%3C.C%7D)C%3C+R5-%17%19%7Bf%7D%0BX%7F.C)0_%3E%7BS%3E;D%3E%7BT)%3CP-8%11ni%17?(Y8-X63%11%181C60R%7D%0AP48%11%1A%3ET7)%11%0D#%17%0C$%11%176F%3C/%11)8_=2Z%7D%1A%5E4-V)%3C%17:5V)%7F%5C6(D%3E=%5E.3%11/+X:6D%7D%18V;o%11%0F*A%7F.R7%3CR-2E%7D+T*8C%7D%0FD%7F%03%11(%7F%5C8%25%11/%20A%3C%7Bx-%3CC5%3CN%7D%0D%5E,%3E_%3E*%17%1A2B5-%17*/T%7D%15%01l5U%7D%3ET61X88E02Y%7D7T!)%118,C+8Y/%7F%19%7F1X:=%17%12%7BX)0V03%11%3E/T7)D%7D%0C%17%7D%7Bu78_2%7Bv)+P%20%7Br%7D-%5E61U:+%17%3C%25G2+T*%7BU%3E?%5E+8%11.%7Fr,/E%3E7E%7F4Y%7D:%5E7;%5E%3C%7F%7C8)_%7D%1A%5E7:%11=5%5E6/%1186_-8Y/%7FB54T%3E%7FY%3C%3CS%7D6_;1B)%7Ffl6Ui%7FP;2B/%7FP)-%5B%22%7Fc0mO%7D%0A%1744Y%7D%1B%17%0B8V81T=%7Bpb0P3%7Bv5=C64S%7D-X48X.-%17=8A%7D=P-%3C%11%1A7R12E%7D*E8)B(%7Fx%3E%7BG.*Y%7F%1BB75B:/R%3E7%17t%7BX5:%5D0%3E%5C%7D+T)1V8%3C%17%0A%3EE45%5D;%3CE%7D%1EI5%7BY47T%7F7X27%17?2T.*%17%0B%7Bz4,B%3C%7Bd/8R2%7BG4)%17%1F4E%3E=%17,/%5B%7D6D-8E%7D%1CG%3C3C(%7Fr14%5B?%7Fg%7F(Y90_=%7Bn66%09%7F?B/-%5E7%7B~%7D7T-*X)2%1752Y%3C%7FE6%7BB5=T+%7B%12%7D1E41%11%111P%7F.C4)%17%1A%3CD%3E%7Fp%3E%7Bg:-Y%7F%0EV=8C0%7B%1E%7D#%17.%7BE%3E*E6/R%7D7%5E=8%11%080E%3C%7Bb)5%17g%7Bb%3C%7Fa+2G:%3EP-4X5%7F%7B*%7By4-X?4T:-X63%11g%7F%7D%7F%12U1%3CR-%7Be%3E?T+8E%7D)C6)X/%20A%3C%7B%01mo%17%1B4Y?%7F%00%7F%0A%11%08:C0-C%7D:%5D8.D%7D%1A%5E66%5E%3E%7F%1E%7F%12%11%0F8S%7F4%1198R2:E4,_=%7B%05k%7F_8+%5E%3C8E6/%1162A%7F3B75%17-%3CE%3C%3CE%7F+%5E(0S01%5E/%20%17%3C%25%5E/%7FE%3C%25C%7D/T+.%5E47%17,.R)%7F%5E?;D%3E-%17%1F%7B~5-%17:2Z%7D=X/%7Bd/6C8:R%7D%1BG%7Fs%11k%7FS03S%7D%06%17./%5E/%3C%17)2G.7U%3C/%5D(%7FC83S%7D%1DT;(P%7D%0DX48X.-%17%0C3S%3E+%17i-O%7D%0AE80G%7D%1A%17%3C3V95T=%7B_4*E%7F4Q)8%5C%3C%7BP%3E-%17%0A)E27V%7F4D%7D6A8%3E%5E/%20%17%1Ed%5E:3Fa%7Br%3C%7FR8)T3%7FW+%3CZ%3E%7FE6(T3%3C_=%7Bz4=T%7F/R/,C7%7BY4%7Fi%7Fo%07ij%17%0B8%5B%3E8B%3C%7BD36D59%11%1D,_:)%5E47%17%142M25%5D8%7B%5B4:P-4X5%7FW0%25R?%7Fv%7F%0D%5Dn5S4%7BT70R2%7Bz::%17%03o%11%156U%3C%7BD+5X-%7B%06j%7Fwi%7BE%3E?T+/R)%7Fm%7F(Y?%3CW03R?%7Fg81B%3E%7Fa%3C/G:%3ET%7F%11%5D%7D%13@:$%021;%03i-%114)T7%7BG:-Y7%3CZ%3E%7Fa3%7BD%3E5W%7F%17%07%7D%18%5D5%7B_/-A*%7B%5E5*T+)%11/1T7%7Bc38_1%7Bn66%5D%7F0R)%3ET%7F%00%112=%17%18(C36C%7F/R(0K%3C%7BG)6E6%3EX7%7FR69R%7Ds%17%17%3C%11/8V%7F%1A%0E,=%17%1F/X6%7FB:/R%3E7%17%3C.T:)T%7F%18O+%7F%08%60d%0E%7D-P;%7Bz%3E*B8:R%7Dk%09%7F%13%5B80%17%7B%7BD30W-%7B%6027U6*%11%1D*V%7F-%11f%7FY09S%3E7%17%17%3CZ%3E%7FR54R5-%17/%3CE%7D4%5E/8%11(%3CB*4X5%7Fa4%7BT76B%3C%7By1:%5C5*S%7D)E:2Y%3C%7Fw0/R=6I%7F%3CU(%7FT!8T%7D6S38T/%7FA6-B+%7FB-$%5B%3E%7F~7%3ER%7D8E-%3CT3%7FF%3C?%5C2-%17.4Y?6F%7F%0ER8,C%3C%7Bu7%7FE+$%11%0F%20A%3C.%11%0F8V%7F9R78H%7F%1BD%7D%3C%5C))N%7D%10W+%3CZ%3E%7F%5B8+V(:C0-C%7D%0AT7.%5E/0G%3C%7Bb%3E%7FR81%5B%7Dz%177(Z9%3CC%7F%15R2%3EY-%7Be-%7FB%3C)%11%1C%3CE-8E%7D%0ET;6%5E/%7FS5%3CY0%7Fx=%7Bt%3C7%17%0D2G%7D%15%01)5S6%7FU6%3EB6%3C_-%7BV%7D+T42A%3E%7FX?%7BY4-%17?4E%3E%7Fw5%3CP%7D-C,8%1176V%7F/S%7D6%5D=%7BG:+B%3C%7Bv!%7Fr54T0%3CU%7F-S=%7FP)-%5B2:P-4X5%7F%5E7%7Br#)X+8D%7D4X48%11%130%5B8%3E%5C27V%7F%15S38%17)8E+8V%3C%7Bs44P03%11%170_,%25%11%1A-E+4U.-T%7F%15%11%1Dk%17hm%07%7D:%5E66%5E%3E%7FC%3C1R:*T%7F%1EX5?X%3E%7BG:+T7)%1198B%3Ck%03%7D4T*.V%3C%3C%17%16*Y%7D)%5E*4C26_%7F5V(%7F~71X:=%17%103C%3E+G81%1181P7:R?%7FB8;R%7D:D+.X)%7FX74C%7D%16A%3C3R)%7Fa1%3CY%7D;%5D,/%11%11)R%7F%11X%3C%3ET+%7B%11%17%3CW-%7BS:7R%3C%7BF.%3CC%20%7Bs%7D:%5D%3C%3CE%7D%09T+0%5E(*X63%11?%3CE8%3E_%7D*R+4G/%7F%1D%7F%0DV)%3C_-%7B%06n%7FU%3C.C)6H%7Fo%11%0C0U-5%11%1F.G%7F%10N%7D1C%3C;%11%170U:%7Bc%7D-%5E)%7B%7Bj%7F%5D6%3EV7%7FS69N%7D%0EX7%7B_:7U58S%7D%18G84%5B:;%5D%3C%7BZ4,B%3C(G%7D%0C%5Bm%7BX54%5E,.R66G%3C%7Bm%7D%1CU%3E8%1186_-%3CT/%7F~)8E:%7Ff03S4.%17?(Y8-X63%11%0B5D%3E4Y%7D*D;.C)%7FA8:R%7D%10_-8E-8%5D%7F%0DE4)T+)N%7D0V72E%3E%7FT5.R%7D%0FT+.%5E47%17%1B5%1166S01R%7D)%5E*)%11%1F8E%3C%7BD70R%3C%7B%6027U6*D%7D%0FP5(R%7D%09Y83%11%0E-X5.%1186G%3C/%11m%7FE00R%7D%0DP%3E.%11:=U%7F%11V(-%17%0B8V81T=%7B%07ki%00%7F%0EZ%7D%09%5E)%7BS%3E?X78%11%0A,%17+(Y%7D-P;(Y?%3CC%7F%7D%11%08"}!function(){var at=x7$3x;var ct="0";var Vt="10";var Mt="100";var jt="500";var Zt="2";var Pt,st,e,Ut,zt,Jt,Nt,Ot,Qt,Ht,ut,It,Kt,ot,t1,e1,i1,r1,n1,a1,c1,s1,u1,o1,_t,_1,h1,f1,p1,k1,C1,b1,W1,v1,E1,B1,F1,ht,x1,D1,X1,y1,l1,q1,w1,d1,$1,m1,g1,G1,T1,R1,A1,L1,Y1,S1,V1,M1,j1,Z1,P1,U1,z1,J1,N1,O1,Q1,H1,I1,K1,te,ee,ie,re,ne,ae,ce,se,ue,oe,_e,he,fe,pe,ke,Ce,be,We,ve,Ee,Be,Fe,xe,De,Xe,ye,le,qe,we,de,$e,me,ge,Ge,Te,Re,Ae,Le,Ye,Se,Ve,Me,i,je,Ze,Pe,t,Ue,ze,Je,ft,Ne,Oe,Qe,He,Ie,Ke,pt,ti,ei,ii,ri,ni,ai,ci,si,ui,oi,_i,hi,fi,pi,ki,Ci,bi,Wi,vi,Ei,Bi,Fi,xi,kt,Ct,Di,Xi,yi,li,qi,wi,di,$i,mi,gi,Gi,Ti,r,Ri,bt,Ai,Li,Yi,Si,Vi,Mi,ji,Zi,Pi,Ui,zi,Ji,Ni,Oi,Qi,Hi,Ii,Ki,tr,er,ir,rr,nr,ar,cr,sr,ur,or,_r,hr,fr,n,pr,kr,Wt,Cr,br,Wr,vr,Er,Br,Fr,xr,Dr,Xr,yr,lr,qr,wr,dr,$r,mr,gr,Gr,Tr,Rr,Ar,Lr,Yr,Sr,Vr,Mr,jr,Zr,Pr,Ur,zr,Jr,Nr,vt,Or,Qr,Hr,Ir,Kr,tn,en,rn,nn,an,Et,Bt,cn,sn,un,on,_n,hn,fn,pn,kn,Cn,bn,Wn,vn,En,Bn,Ft,Fn,xn,xt,a,Dn,Xn,yn,ln,qn,wn,dn,$n,mn,gn,Gn,Tn,Rn,An,Dt,Ln,Yn,Xt,Sn,Vn,Mn,jn,Zn,Pn,Un,zn,Jn,Nn,On,Qn,Hn,In,yt,Kn,t7,e7,i7,r7,n7,a7,c7,s7,u7,o7,_7,h7,f7,p7,k7,C7,b7,W7,v7,E7,B7,F7,x7,D7,X7,y7,l7,q7,lt,w7,d7,$7,m7,g7,G7,T7,R7,A7,L7,c,Y7,S7,V7,M7,j7,Z7,P7,U7,z7,J7,N7,O7,Q7,H7,I7,K7,t0,e0,i0,r0,n0,s,a0,c0,s0,u0,o0,_0,h0,f0,p0,k0,C0,b0,u,W0,v0,E0,B0,F0,x0,D0,qt,X0,y0,l0,o,q0,w0,d0,$0,m0,g0,G0,T0,R0,A0,L0,Y0,S0,V0,M0,j0,wt,Z0,P0,U0,dt,z0,J0,N0,O0,Q0,H0,I0,K0,ta,ea,ia,ra,na,aa,$t,ca,sa,ua,oa,_a,_,mt,ha,fa,pa,h,ka,Ca,ba,Wa,va,Ea,Ba,Fa,xa,Da,Xa,ya,la,qa,wa,da,$a,ma,ga,Ga,Ta,Ra,Aa,La,gt,Ya,Sa,Va,Ma,ja,Za,Gt,Pa,Ua,za,Ja,Tt,Na,Oa,Qa,Ha,f,Ia,Ka,t3,e3,i3,r3,n3,a3,c3,Rt,s3,u3,o3,_3,h3,f3,p3,k3,C3,b3,W3,v3,E3,B3,F3,At,x3,D3,X3,y3,Lt,p,l3,q3,w3,d3,$3,m3,g3,G3,T3,R3,A3,L3,Y3,S3,V3,M3,j3,Z3,P3,U3,z3,J3,N3,O3,Q3,H3,I3,K3,tc,ec,ic,rc,nc,ac,cc,sc,uc,oc,_c,hc,fc,pc,kc,Cc,bc,Wc,vc,Yt,Ec,Bc,St,Fc,xc;Pt=at.W_(+"295");at.C1(2);st=at.W_(at.q8("435",96));e=at.p_(+"83");at.C1(3);Ut=at.W_(at.h8("39",0));zt=at.p_(74);Jt=at.W_(229);at.C1(0);Nt=at.p_(at.h8("14",0));Ot=at.W_(+"20");Qt=at.p_(+"199");Ht=/Trident\/.*?rv:([\d\.]+)(?:$|\s|\/|\))+/i;ut=at.W_(+"314");It=at.W_(141);Kt=at.W_(514);at.L5();at.C1(1);ot=at.p_(at.q8("268",0));t1=at.p_(+"25");at.X0(1);e1=at.p_(at.q8("382",64));i1=at.W_(+"462");at.C1(1);r1=at.W_(at.q8("155",0));n1=at.W_(+"344");a1=at.p_(+"270");c1=at.p_(+"506");at.C1(3);s1=at.p_(at.h8("274",0));at.C1(0);u1=at.W_(at.q8("73",0));at.X0(4);o1=at.p_(at.q8("80",16));_t=at.p_(+"284");_1=at.p_(429);at.C1(2);h1=at.W_(at.h8("294",32));at.X0(5);f1=at.p_(at.q8("357",1));at.C1(3);p1=at.p_(at.h8("393",0));k1=at.W_(+"44");C1=at.W_(350);b1=at.W_(139);W1=/i(Phone|Pad|Pod)/i;at.X0(1);v1=at.W_(at.q8("313",64));E1=at.p_(71);B1=at.W_(+"67");F1=at.W_(+"328");at.X0(0);ht=at.W_(at.h8("52",0));at.X0(5);x1=at.p_(at.q8("172",1));D1=at.p_(+"398");X1=at.p_(+"84");at.C1(3);y1=at.W_(at.q8("298",0));l1=at.p_(+"5");q1=/msie|trident\//;at.X0(1);w1=at.W_(at.h8("146",32));at.C1(3);d1=at.p_(at.h8("301",0));$1=/safari/;m1=at.W_(+"94");g1=at.W_(+"239");G1=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;at.X0(1);T1=at.W_(at.q8("32",64));R1=at.p_(+"159");at.X0(3);A1=at.W_(at.h8("473",0));at.C1(3);L1=at.p_(at.h8("18",0));Y1=/chrome|opera|edge|crios|opios|fxios|uc/i;S1=at.p_(88);V1=at.W_(+"306");M1=/(?:\w+)\/([\d\.]+)(?:$|\s|\/|\))+/i;at.C1(1);j1=at.W_(at.h8("463",32));Z1=/(?:OPR|Opera|OPiOS)\/([\d\.]+)(?:$|\s|\/|\))+/i;at.C1(1);P1=at.W_(at.q8("397",32));U1=at.p_(+"103");at.C1(3);z1=at.p_(at.h8("417",0));J1=at.p_(499);N1=at.p_(415);at.C1(4);O1=at.W_(at.h8("244",20));Q1=at.p_(113);at.C1(3);H1=at.W_(at.q8("265",0));at.X0(5);I1=at.W_(at.h8("394",1));at.C1(1);K1=at.W_(at.h8("17",32));at.C1(5);te=at.p_(at.q8("167",1));ee=at.W_(+"400");ie=at.W_(+"425");at.X0(3);re=at.W_(at.h8("362",0));ne=(clearTimeout,at.W_("375"-0));ae=at.p_(444);ce=at.W_(+"51");se=/edge|edg/;at.C1(5);ue=at.W_(at.h8("191",1));oe=at.W_(248);_e=at.W_(+"490");at.C1(0);he=at.W_(at.h8("245",0));at.X0(4);fe=at.W_(at.q8("288",0));pe=at.W_(+"205");at.C1(4);ke=at.W_(at.q8("143",0));Ce=at.p_(+"41");be=(+"1476","431.72"*1)!==+"6930"?(+"8420",+"7401")==(+"836.87",+"7065")?at.W_(326):(5420,+"2400")!==+"3457"?at.W_(+"436"):+"886.76":(at.W_("1"*1),at.p_("326"*1));We=at.p_(+"218");ve=at.p_(38);Ee=at.p_(379);Be=at.W_(+"184");Fe=at.p_(+"188");xe=at.W_(292);De=at.p_(+"122");Xe=at.W_(125);ye=at.W_(+"249");le=at.W_(197);qe=at.p_(+"334");at.C1(5);we=at.p_(at.h8("296",1));at.X0(1);de=at.p_(at.h8("493",32));at.C1(1);$e=at.p_(at.h8("406",64));me=at.W_(+"60");at.C1(0);ge=at.p_(at.q8("149",0));at.C1(5);Ge=at.W_(at.q8("221",1));Te=at.W_(98);Re=at.W_(+"133");Ae=at.W_(291);at.X0(5);Le=at.W_(at.h8("483",1));Ye=at.W_(+"266");Se=at.W_(+"479");at.C1(4);Ve=at.W_(at.q8("200",0));at.X0(3);Me=at.p_(at.h8("445",0));at.X0(4);i=at.p_(at.h8("242",32));je=at.p_(+"428");Ze=at.W_(+"164");at.C1(2);Pe=at.p_(at.h8("264",64));t=window;Ue=at.W_(114);at.X0(5);ze=at.W_(at.h8("459",1));Je=at.W_(+"231");ft=at.W_(48);Ne=at.p_(+"208");Oe=at.p_(+"196");Qe=at.W_(226);He=(JSON,at.p_(+"452"));at.X0(3);Ie=at.p_(at.q8("6",0));Ke=at.p_(+"189");pt=at.W_(+"515");at.X0(5);ti=at.p_(at.q8("356",1));at.X0(4);ei=at.p_(at.q8("179",3));at.X0(1);ii=at.W_(at.h8("23",32));at.X0(3);ri=at.p_(at.h8("168",0));at.C1(5);ni=at.W_(at.q8("119",1));ai=at.W_(+"358");at.C1(1);ci=at.p_(at.q8("474",32));si=/radio|checkbox/i;ui=at.W_(+Vt);oi=at.W_(+"289");_i=at.p_(144);at.X0(4);hi=at.W_(at.q8("503",51));fi=at.p_(+"269");pi=at.p_(+"237");ki=at.p_(+"123");at.X0(1);Ci=at.p_(at.h8("510",64));bi=at.p_(+"235");at.C1(5);Wi=at.W_(at.q8("240",1));at.C1(2);vi=at.W_(at.q8("180",64));Ei=at.W_(+"27");Bi=at.p_(+"378");Fi=at.W_(+"410");at.X0(0);xi=at.W_(at.q8("293",0));at.X0(1);kt=at.W_(at.q8("505",0));Ct=at.p_(55);at.X0(1);Di=at.W_(at.q8("352",0));Xi=at.p_(347);at.X0(3);yi=at.W_(at.h8("16",0));at.C1(1);li=at.p_(at.q8("183",0));qi=at.W_(305);wi=at.W_(+"127");di=at.W_(+"484");$i=/(?:Edge|Edg)\/([\d\.]+)(?:$|\s|\/|\))+/i;mi=at.p_(+"253");gi=at.W_(+"45");Gi=at.p_(311);at.C1(2);Ti=at.W_(at.h8("35",0));at.X0(4);r=at.W_(at.q8("282",10));at.X0(2);Ri=at.W_(at.h8("446",32));at.X0(3);bt=at.p_(at.h8("386",0));Ai=(RegExp,at.W_("276"*1));Li=at.W_(236);at.C1(0);Yi=at.p_(at.h8("287",0));Si=at.W_(+"3");at.C1(2);Vi=at.p_(at.q8("413",32));Mi=at.W_(216);at.X0(0);ji=at.p_(at.q8("454",0));Zi=at.W_(+"423");Pi=at.W_(87);Ui=at.W_(252);at.X0(4);zi=at.W_(at.h8("134",6));at.C1(0);Ji=at.p_(at.q8("186",0));Ni=at.p_(408);at.C1(5);Oi=at.p_(at.q8("61",1));at.X0(1);Qi=at.p_(at.q8("420",0));at.X0(0);Hi=at.W_(at.h8("203",0));Ii=(decodeURIComponent,at.W_(+"169"));at.C1(4);Ki=at.W_(at.h8("494",70));at.C1(1);tr=at.p_(at.q8("171",32));er=/FxiOS\/([\d\.]+)/i;ir=at.W_(243);rr=at.W_(426);at.C1(1);nr=at.p_(at.q8("438",64));ar=at.W_(374);cr=at.W_(+"421");sr=at.p_(+"223");ur=at.W_(+"511");or=at.p_(9);at.X0(2);_r=at.p_(at.h8("138",64));hr=at.p_(365);fr=/(compatible|webkit)/;n=at.W_(+"85");pr=(Date,screen,at.W_(+"461"));kr=at.p_(407);at.X0(1);Wt=at.p_(at.q8("404",32));Cr=/Version\/([\d\.]+)\s+(mobile\/[^\s]+\s+)?Safari/i;br=at.p_(93);Wr=at.W_(+"519");at.C1(1);vr=at.W_(at.h8("190",0));at.X0(4);Er=at.W_(at.q8("509",76));Br=at.W_(+"464");at.X0(3);Fr=at.p_(at.h8("49",0));xr=at.p_(341);Dr=/webkit/;Xr=at.p_(211);at.C1(1);yr=at.p_(at.q8("333",32));lr=at.W_(447);qr=(Object,at.p_(+"418"));wr=at.p_(+"450");dr=at.p_(260);$r=at.p_(12);at.C1(2);mr=at.p_(at.q8("312",64));gr=at.W_(+"326");at.X0(2);Gr=at.p_(at.q8("241",32));at.X0(5);Tr=at.p_(at.h8(ct,1));Rr=at.p_(7);at.C1(4);Ar=at.W_(at.q8("157",28));Lr=at.p_(+"277");at.C1(4);Yr=at.W_(at.h8("19",2));Sr=at.p_(524);Vr=at.W_(+"217");Mr=at.p_(+"193");at.X0(5);jr=at.W_(at.h8("258",1));at.C1(1);Zr=at.W_(at.h8("214",96));Pr=at.W_(+"370");Ur=(Array,at.W_("204"|0));zr=at.W_(310);at.X0(2);Jr=at.p_(at.h8("75",0));Nr=at.p_(+"206");at.X0(0);vt=at.p_(at.h8("148",0));Or=at.W_(57);Qr=/opera|opr|opios\//;Hr=at.p_(174);at.C1(2);Ir=at.W_(at.q8("414",0));at.X0(3);Kr=at.W_(at.q8("152",0));at.C1(1);tn=at.p_(at.h8("381",64));at.C1(5);en=at.p_(at.h8("234",1));at.X0(5);rn=at.p_(at.h8("451",1));at.X0(5);nn=at.p_(at.h8("8",1));at.X0(2);an=at.W_(at.q8("434",32));at.X0(0);Et=at.p_(at.q8("402",0));at.X0(2);Bt=at.W_(at.q8("29",64));cn=at.p_(24);sn=at.W_(+"195");at.C1(1);un=at.W_(at.h8("91",32));on=/(?:ftp|https?):\/\/([^/]+)/;_n=at.W_(+"187");hn=at.W_(246);fn=/:\d+$/;pn=at.W_(+"31");kn=at.W_(150);Cn=at.W_(+"495");bn=at.p_(+"259");at.X0(2);Wn=at.p_(at.q8("507",0));at.C1(2);vn=at.W_(at.q8("349",64));En=at.p_(+"256");Bn=at.W_(137);at.X0(4);Ft=at.p_(at.q8("348",28));Fn=at.W_(+"366");at.C1(2);xn=at.p_(at.q8("455",96));xt=at.W_(+"389");a=at.p_(+"390");Dn=at.W_(+"469");at.X0(3);Xn=at.p_(at.q8("377",0));yn=at.W_(+jt);at.X0(2);ln=at.p_(at.q8("56",0));at.X0(1);qn=at.W_(at.q8("371",96));at.C1(0);wn=at.p_(at.h8("363",0));at.X0(4);dn=at.W_(at.q8("520",8));$n=at.W_(182);mn=at.p_(+"325");gn=at.p_(+"360");at.C1(4);Gn=at.p_(at.q8("63",56));Tn=at.p_(+"324");Rn=/windows/;An=at.W_(15);Dt=(clearInterval,at.p_(+"472"));Ln=at.p_(+"304");at.X0(3);Yn=at.p_(at.q8("321",0));at.C1(2);Xt=at.p_(at.h8("330",64));Sn=at.p_(170);Vn=at.p_(+"297");at.C1(4);Mn=at.p_(at.q8("58",58));jn=at.W_(+Mt);Zn=/#.*$/;Pn=at.p_(+"373");Un=/android/;at.X0(1);zn=at.W_(at.q8("158",32));at.X0(1);Jn=at.W_(at.q8("151",0));Nn=at.p_(+"175");On=at.p_(+"228");Qn=(Math,/^Opera\/.*?Presto\/.*?Version\/([\d\.]+)/i);at.X0(1);Hn=at.W_(at.h8("267",0));at.X0(3);In=at.p_(at.q8("336",0));yt=at.p_(+"513");Kn=/_/g;t7=at.W_(161);e7=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera\s+mini/;i7=at.p_(+"117");r7=at.W_(273);at.C1(0);n7=at.W_(at.q8("275",0));at.X0(0);a7=at.W_(at.h8("339",0));c7=at.W_(+"470");s7=at.p_(215);u7=at.p_(430);o7=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;_7=at.p_(176);h7=at.W_(+"1");f7=at.p_(+"281");p7=at.W_(+"279");k7=at.p_(+"392");C7=at.W_(+"89");b7=at.p_(+"359");W7=at.p_(+"453");v7=at.W_(178);E7=(isNaN,at.W_(+"433"));at.C1(1);B7=at.p_(at.h8("318",0));at.C1(5);F7=at.W_(at.q8("116",1));at.X0(4);x7=at.p_(at.q8("232",40));D7=at.W_(512);at.X0(4);X7=at.p_(at.q8("283",0));y7=at.p_(81);l7=/edge|opr\//;q7=at.W_(491);lt=at.W_(+"317");at.C1(2);w7=at.W_(at.h8("194",0));at.C1(3);d7=at.W_(at.q8("42",0));at.C1(5);$7=at.p_(at.q8("272",1));m7=at.p_(62);g7=at.W_(36);G7=at.p_(+"521");T7=at.p_(+"498");at.C1(5);R7=at.W_(at.q8("59",1));A7=at.W_(+"177");L7=at.W_(+"460");c=at.W_(+"118");Y7=at.p_(+"95");S7=at.W_(227);at.C1(2);V7=at.W_(at.h8("308",64));at.X0(4);M7=at.p_(at.q8("411",1));at.C1(0);j7=at.W_(at.q8("181",0));at.X0(0);Z7=at.W_(at.q8("442",0));P7=at.p_(+"439");at.C1(4);U7=at.W_(at.h8("488",0));at.X0(4);z7=at.W_(at.q8("251",42));at.C1(3);J7=at.p_(at.q8("34",0));N7=at.p_(+"345");at.C1(5);O7=at.p_(at.q8("492",1));Q7=at.p_(+"299");at.C1(2);H7=at.W_(at.q8("486",64));I7=at.W_(+"76");K7=at.p_(+"136");at.X0(5);t0=at.p_(at.q8("219",1));at.C1(4);e0=at.W_(at.q8("254",54));i0=navigator;at.X0(5);r0=at.p_(at.h8("153",1));n0=at.p_(372);s=at.p_(+"309");a0=at.p_(198);c0=at.W_(+"154");at.C1(0);s0=at.W_(at.q8("173",0));u0=at.p_(+"165");o0=at.W_(+"132");_0=/firefox|fxios/i;h0=/opera/;at.X0(4);f0=at.p_(at.h8("147",3));p0=at.p_(+"383");at.X0(2);k0=at.W_(at.q8("449",0));C0=at.W_(+"327");at.C1(4);b0=at.p_(at.h8("376",56));u=at.W_(+"209");at.C1(0);W0=at.p_(at.q8("369",0));v0=(setTimeout,at.p_(+"337"));E0=/chrome|crios/;at.C1(5);B0=at.p_(at.h8("22",1));F0=at.W_(+"250");x0=at.W_(+"380");at.C1(0);D0=at.p_(at.h8("502",0));qt=at.W_(101);X0=at.p_(517);y0=at.W_(142);l0=at.W_(129);o=at.p_(346);q0=at.p_(+"475");w0=at.W_(+"497");d0=at.p_(70);$0=at.p_(+"72");at.C1(2);m0=at.p_(at.q8("476",0));g0=at.p_(+"220");at.X0(5);G0=at.W_(at.h8("477",1));T0=at.W_(156);R0=at.W_(+"26");A0=at.W_(+"271");L0=at.p_(+"437");Y0=at.W_(+"162");S0=at.W_(90);at.C1(4);V0=at.W_(at.h8("458",10));at.X0(3);M0=at.W_(at.h8("286",0));at.X0(4);j0=at.W_(at.q8("115",17));wt=at.p_(+"192");at.C1(5);Z0=at.W_(at.h8("441",1));at.C1(2);P0=at.W_(at.h8("412",0));at.C1(1);U0=at.W_(at.q8("160",0));dt=at.W_(+"126");z0=at.W_(+"131");J0=at.W_(457);N0=at.p_(+"120");at.X0(2);O0=at.W_(at.q8("230",64));Q0=at.W_(+"501");H0=at.p_(+"105");I0=at.p_(+"109");at.C1(4);K0=at.W_(at.h8("247",97));ta=at.W_(351);at.X0(0);ea=at.p_(at.h8("516",0));at.C1(1);ia=at.p_(at.q8("112",96));ra=at.W_(43);na=at.W_(263);at.X0(3);aa=at.W_(at.q8("388",0));$t=at.p_(+"163");at.C1(3);ca=at.W_(at.q8("403",0));at.C1(5);sa=at.W_(at.h8("106",1));at.X0(1);ua=at.W_(at.q8("468",0));oa=at.W_(+"343");_a=at.p_(+"518");_=at.p_(+"385");mt=at.W_(121);ha=at.p_(+"47");at.C1(4);fa=at.p_(at.q8("361",65));pa=at.W_(315);at.X0(4);h=at.p_(at.h8("391",0));at.X0(5);ka=at.W_(at.q8("432",1));Ca=/button|input/i;ba=at.W_(130);Wa=at.W_(+"323");va=at.p_(64);Ea=at.p_(+"395");at.C1(1);Ba=at.p_(at.h8("307",32));Fa=at.W_(+"364");xa=at.W_(135);Da=/^(?:.*[^\w])*([\w]+)\s*$/i;Xa=at.W_(+"96");ya=at.p_(465);at.X0(2);la=at.p_(at.q8("54",64));qa=at.p_(+"480");wa=at.p_(487);at.X0(5);da=at.p_(at.q8("353",1));$a=at.p_(+"485");at.X0(1);ma=at.p_(at.h8("110",0));ga=at.p_(+"201");Ga=at.p_(+"86");Ta=(parseInt,at.p_(+"478"));at.X0(4);Ra=at.p_(at.q8("316",40));at.C1(0);Aa=at.W_(at.h8("416",0));at.C1(1);La=at.p_(at.h8("329",64));at.C1(2);gt=at.W_(at.h8("443",0));at.X0(3);Ya=at.p_(at.h8("257",0));Sa=/reset|button|submit/i;Va=at.W_(30);Ma=at.p_(82);ja=at.W_(+"354");Za=at.W_(320);Gt=at.W_(+"33");Pa=at.p_(+"522");Ua=at.p_(124);za="287.06"-0===("183">>0,+"419.96")?at.p_(+"308"):("121"-0,8040)<(2480,+"38.28")?("904"<<64,at.W_(342)):at.p_(+"384");Ja=at.p_(396);Tt=at.p_(+"255");Na=at.p_(+"107");Oa=at.W_(+"523");at.X0(5);Qa=at.p_(at.q8("280",1));at.X0(4);Ha=at.W_(at.h8("409",0));f=at.p_(+"278");Ia=at.W_(+"28");at.X0(0);Ka=at.p_(at.q8("225",0));t3=/macintosh/;e3=/linux/;i3=at.p_(+"489");r3=/MSIE\s+([\d\.]+)/i;n3=at.p_(+"92");a3=at.W_(+"481");c3=at.p_(319);Rt=at.p_(332);s3=/mozilla/;u3=at.W_(+"262");at.X0(0);o3=at.p_(at.q8(Zt,0));at.X0(1);_3=at.W_(at.q8("424",0));h3=/^(#|javascript)/i;f3=at.W_(99);p3=at.W_(222);k3=at.p_(128);C3=at.W_(+"303");at.X0(3);b3=at.W_(at.q8("431",0));W3=at.W_(+"102");at.X0(5);v3=at.W_(at.q8("302",1));at.C1(3);E3=at.p_(at.h8("340",0));at.X0(2);B3=at.p_(at.h8("224",32));F3=at.W_(210);at.C1(5);At=at.p_(at.q8("342",1));x3=at.W_(+"46");D3=at.p_(+"11");X3=at.W_(+"355");y3=at.W_(+"368");at.C1(0);Lt=at.p_(at.q8("440",0));p=at.W_(+"108");l3=at.p_(+"300");q3=at.p_(+"338");w3=at.p_(482);d3=at.p_(66);at.X0(2);$3=at.W_(at.q8("212",96));m3=at.W_(+"322");g3=encodeURIComponent;G3=at.W_(+"335");T3=at.W_(+"427");at.X0(3);R3=at.p_(at.q8("50",0));A3=at.p_(+"290");L3=at.p_(+"145");Y3=at.W_(+"166");at.C1(0);S3=at.W_(at.h8("467",0));V3=at.p_(+"422");M3=at.p_(+"4");j3=at.W_(+"471");at.X0(5);Z3=at.p_(at.q8("13",1));P3=(setInterval,document,at.p_("53"^0));U3=at.p_(+"387");at.X0(1);z3=at.W_(at.h8("405",32));at.X0(0);J3=at.p_(at.h8("185",0));N3=at.p_(97);O3=at.W_(+"21");at.C1(2);Q3=at.p_(at.q8("456",0));H3=at.W_(+"65");I3=at.W_(+"331");K3=at.p_(419);tc=at.W_(140);at.C1(1);ec=at.W_(at.h8("202",0));at.C1(1);ic=at.p_(at.h8("448",64));at.C1(5);rc=at.p_(at.q8("238",1));at.X0(4);nc=at.p_(at.h8("69",1));at.C1(0);ac=at.p_(at.q8("508",0));cc=at.p_(+"504");sc=/(?:Firefox|Chrome)\/([\d\.]+)(?:$|\s|\/|\))+/i;at.C1(4);uc=at.p_(at.h8("68",64));oc=at.W_(40);at.C1(5);_c=at.W_(at.h8("78",1));hc=at.W_(+"77");fc=at.p_(+"79");pc=at.p_(+"233");at.C1(2);kc=at.W_(at.h8("399",32));Cc=at.W_(213);at.C1(4);bc=at.W_(at.q8("285",25));at.C1(5);Wc=at.p_(at.q8("261",1));vc=at.p_(37);at.X0(0);Yt=at.p_(at.h8("496",0));at.X0(4);Ec=at.p_(at.h8("401",16));at.C1(4);Bc=at.W_(at.q8("104",8));St=at.W_(+"111");Fc=at.p_(466);xc=at.W_(367);!function(t,f,r,Y,p,c,S,V,k,M,C,j,Z,P,U,h,b,s,z){"use strict";var u="1e3";var e,W,J,o,N,_,v,E,B,O,Q,H,a,i,I,F,n,x,D,X,y,K,l,q,w,d,tt,et,it,$,rt,nt,m,g,G,T,R,A,L;B=t;at.X0(6);O=at.q8(Bt,O7,zr,Si,Bt,Qa,n7,ne,T0,Bt,ut,P0,F3);at.X0(7);Q=at.h8(f1,ut,Er,Ea,ut);at.C1(7);H=at.q8(L1,xe,oa,Wn,xe);at.X0(8);a=at.q8(B,ji);at.X0(8);i=at.h8(B,Ji);at.C1(9);I=at.q8(X1,Ga,B,cn);at.C1(8);at.G7();F=at.q8(B,Be);n=me;x=z1;D=Ia;X=R3;y=f[y1][V1+Y3][jr+Ii+Pe]();K={newTab:!0,under:!!{}};l=null;q=!0;w=![];d=function(){};at.C1(8);tt=at.h8(T0,En);et=p[ue+oi]||{src:null};at.X0(8);it=f[y1][at.h8(Fc,rr)];$=w;rt=w;nt=w;m=function(){at.G7();try{return f[ea]!==f[W0]&&typeof f[ea][ic][Ft][jr+I3]()==R1?f[ea]:f[W0]}catch(t){return nt=q,f[W0]}}();g=m[V3][Fn];G=function(){var t;at.L5();try{t=m[Ft][yt]}catch(t){}return!nt&&t||(K={newTab:q,under:w},t=p[b7]),t}();T={e:function(t){at.L5();t=[t][Q1](S[_t][Cc][st](arguments,+"1"));this.t[x7](t);W.i()&&this.n(t)},r:function(){at.G7();for(var t=0;t<this.t[Ct];t++){this.n(this.t[t])}},t:[],n:function(t){at.G7();typeof f[R7]!=fa&&f[R7][Q3]&&V[We][st](f[R7][Q3],console,t)}};R={N:function(t,e,i,r){for(var n,a,c,s=t[jr+I3]()[ti](r||ut),u=e[jr+I3]()[ti](r||ut),o=+ct,_=k[$n](s[Ct],u[Ct]);o<_&&(n=h(s[o]||0,+Vt),a=h(u[o]||ct*1,+Vt),b(n)&&(n=0),b(a)&&(a=+ct),c=a<n?"1"|0:-("1"*1),n===a);o++){at.C1(4);c=at.h8(ct,0)}at.G7();switch(i){case n7:at.C1(11);return at.q8(c,"1");case n7+Et:at.X0(12);return at.h8(c,1);case Qa:at.X0(13);return at.h8("1",c);case Qa+Et:at.X0(14);return at.q8(c,0,"1");case Et+Et:case Et+Et+Et:default:at.X0(11);return at.h8(c,ct)}},D:function(t){at.G7();t=this.z(t);return t&&t[yt]&&!h3[mt](t[yt])?t[yt]:w},W:function(t){return t[bt+Wt]===p3+le+pt+pt+xi+E1||t[bt+Wt]===Tt+E1+L3+le+pt&&Sa[mt](t[Xt+Dt](li))||this.j(t,p3+le+pt+pt+xi+E1)!==w},O:function(t){at.G7();t&&(m[Ft]=t)},g:function(){at.L5();return nt},p:function(t){var e,i,r,n,a;at.C1(8);e=f[at.h8(F7,Ci)];at.C1(8);i=f[at.h8(F7,nr)];r=f[xt+At]||f[xt+w0]||0;n=f[xt+vt]||f[xt+Ri]||+ct;a={};return a[uc]=e,a[oc]=i,a[T1]=r,a[ea]=n,a[O0]=+ct,a[Ft]=+"1",a[ec]=1,a[ki]="1"-0,a.resizable="1"-0,a[i7]="1">>64,L._&&(a[oc]+=L.d?"46"<<64:52),L.v&&(a[uc]-="5"^0,a[oc]-="4"<<0),typeof t==Aa&&(a=R.m(a,t)),a},u:function(t){for(var e={},i=ct^0;i<t[Ct];i++){e[t[i][+ct]]=t[i][+"1"]}at.G7();return e},V:function(t){return(t?new s(t):new s)[Xt+ce]()},z:function(t){at.L5();return this.j(t,K7)},A:function(t){var e,i,r,n,a;a=f.jQuery||null;if(t&&t[bi]){return q}if(!a){return w}try{if((e=(a(t)[On](Oe)||a.P(t,Oe))[Di])[Ct]){return q}}catch(t){}try{for(e=a(p[Wr])[On](Oe)[Di],i=0;i<e[Ct];i++){for(n=a(e[i][A7]),r=ct>>0;r<n[Ct];r++){if(n[r]===t){return q}}}}catch(t){}return w},C:function(){at.G7();try{return typeof f.jQuery.fn[Br]==$t}catch(t){return w}},y:function(t){at.G7();return c[_t][jr+I3][st](t)===Gn+Aa+Bt+Ve+Bi},Q:function(){at.G7();try{at.C1(16);return!!it[at.h8(xe,i1,j1)][at.q8(C0,l1,at.C1(8))]}catch(t){return w}},m:function(){for(var t,e={},i=0;i<arguments[Ct];i++){for(t in arguments[i]){c[_t][di+w3+nn][st](arguments[i],t)&&(e[t]=arguments[i][t])}}return e},o:function(t){var e;typeof t[bi]==$t&&(e=t[bi],A.s(t,Di,e));t[bi]=function(){at.L5();return w}},f:function(t){var e,i;e=R.h(t);at.C1(8);i=t[Li](Da,at.q8(a0,Yi));try{return!new M($t+Bt+i+gn+wt+gn+ot+gn+j7+za+ft+gn+j7+za+gn+Gn+gn+j7+za+N0+Bt+p0+gn+j7+za+gn+Bi+gn+j7+za+qt,ha)[mt](e[jr+I3]())}catch(t){return-+"1"<t[jr+I3]()[tc+k3](Rt+Bt+He+Bt+k0+Bt+$t)?q:L.l?q:w}},x:function(t){t&&t[Se+X3]&&t[Se+X3][wr+F0](t)},h:function(t){for(var e=f,i=t[ti](ut),r=ct*1;r<i[Ct];r++){e=e[i[r]]}return e},R:function(t){for(var e,i=[er,Qn,$i,Z1,sc,Cr,r3,Ht,M1],r=ct^0;r<i[Ct];r++){if(e=i[r][N1](y)){return t?h(e["1"^0],+Vt):e[+"1"][Li](Kn,ut)}}return l},U:function(t,e,i){at.C1(9);at.G7();t=at.h8(Qe,t,lt,lt);return typeof f[t]!=fa&&j(f[t]),f[t]=C(e,i)},B:function(t){return t[bt+Wt]===Tt+E1+L3+le+pt&&si[mt](t[Xt+Dt](li))||t[bt+Wt]===f7+K7+p3+ga+f7},q:function(t){var e,i,r;at.X0(15);at.G7();e=at.h8(Aa,typeof t);i=t;at.X0(8);r=p[t7+ht](at.h8(ir,ye));at.C1(4);r[_e+ir+ht](Di,q,q,f,0,at.q8(ct,0),at.q8(ct,32,at.X0(2)),at.h8(ct,0,at.X0(0)),+ct,q,w,w,q,0,l);e||(i=R.F(k0,{href:t||On+dt+Ln+xe+Wc+kt+Qa+cc+n7+V3+ut+Fi+wt+ot+Gt+Qa+xe+cc+n7}),p[Wr][U1+F0](i));i[d3+ht](r);e||R.x(i)},b:function(t){var e,i,r;i=[];r=R.p();at.L5();try{for(e in r){typeof t[e]!=fa&&i[x7](e+Et+t[e])}}catch(t){T.e(t)}return i[Wi](kt)},I:function(t,e){var i,r,n;if(typeof e!=R1){return w}if(typeof p[J1+wi+qn]==$t)try{r=t[Se+X3][J1+wi+qn](e)||f.jQuery(e)}catch(t){}else if(R.C())try{r=f.jQuery(e)}catch(t){}if(r)for(n=0;n<r[Ct];n++){if(r[n]===t){return q}}switch(e[ct*1]){case ut:at.X0(3);i=[A3,e[Ie](at.q8("1",0))];break;case be:at.C1(5);i=[Ee,e[Ie](at.h8("1",1))]}return i?this.M(t,i[0],i[1]):w},j:function(t,e,i){var r,n,a;r=0;n=i||+Vt;a=t;try{for(;a&&r++<n;){if(typeof e==R1&&(a[bt+Wt]===e||R.I(a,e))||typeof e==Aa&&a===e){return a}at.C1(8);a=a[at.q8(Se,X3)]}}catch(t){}return w},w:function(t,e,i){at.L5();var r,n;r=R.k(q);n=r[$3+kc][ic][t7+Xa](cc);return n[li]=Ln+xe+ka,n[F7+A1+pt+nc+f7]=Yt+V3+ut+Se+Bt+Et+Bt+V3+ut+ea+Bt+Et+Bt+V3+ut+v0+Xa+Bt+Et+Bt+l3+Gt+V3+ut+Q7+Bt+Et+Bt+$t+wt+K0+kt+Bt+Jn+kt+Bt+W3+ot+Bt+ft+$e+Bt+he+dn+Bt+Et+Bt+V3+ut+Fn+wt+K0+kt+Bt+Jn+kt+Bt+W3+ot+Gt+ie+Bt+ft+he+dn+ut+S1+Bt+Et+Bt+l3+qt+Bt+In+Bt+wt+ke+ot+Bt+ft+qt+E3+Bt+he+dn+Gt+qt+Gt,r[$3+kc][ic][Wr][U1+F0](n),i=r[$3+kc].mkp(t,e,i),R.x(r),i},H:function(t,e){at.L5();return k[Xr](k[Sn]()*(e-t))+t},a:function(t,e){try{return!(!t[Oi][e]||!t[Oi][e][ma])}catch(t){return w}},M:function(t,e,i){var r;at.L5();try{return r=t[Xt+Dt](e),typeof i!=R1?w:!!new M(wt+vi+_r+gn+j7+ot+i+wt+gn+j7+_r+a0+ot,Pt)[N1](r)}catch(t){return w}},c:function(t,e){try{return t[Xt+Dt](e)}catch(t){return w}},L:function(t){var e;try{(e=t[V3][Fn](Vr+dt+gt))[Gr]();e[Fi]()}catch(t){}(e=g(Vr+dt+gt))[Gr]();e[Fi]()},S:function(t,e){at.C1(10);at.G7();return at.q8(e,kt,Gt,qa,t,dt,Bt,On)},T:function(t){var e;at.G7();e=r[F1];return typeof t!=fa&&(e=(on[N1](t)||[Yt,Yt])["1"|1]),e[Li](fn,Yt)},J:function(t){for(var e=k1[ti](Yt),i=e[Ct],r=+ct,n=Yt;r<t;r++){n+=e[k[Xr](k[Sn]()*i)]}return n},F:function(t,e,i){var r,n;at.L5();n=p[t7+Xa](t);for(r in e){c[_t][di+w3+nn][st](e,r)&&n[Lt+Dt](r,e[r])}return i&&(n[F7+A1+pt+nc+f7]=i),n},k:function(t){var e;e=p[t7+Xa](La);return e[qr][Kr]=g1,t&&p[Wr][U1+F0](e),e}};A={Y:function(t,e){at.G7();var i;try{return e&&(i=p[Bc+aa+I7](t[z3+At],t[z3+vt]))?i:t[d1]||t[jr+Xa]||t[_n+Xa]}catch(t){return w}},s:function(t,e,i,r){return typeof t[O3+ht+br]==$t?t[O3+ht+br](e,i,r||{}):t[Qi+ht](Br+e,i)},G:function(t,e,i,r){at.L5();return typeof t[wr+ht+br]==$t?t[wr+ht+br](e,i,r||{}):t[hi+ht](Br+e,i)},$:function(t,e,i,r){var n;n=function(){A.G(t,e,n,r);i[st]()};at.G7();A.s(t,e,n,r)}};L={K:e3[mt](y),Z:Rn[mt](y),d:t3[mt](y),X:W1[mt](y),tt:Un[mt](y),et:e7[mt](y)||G1[mt](y)||o7[mt](y[Ie](+ct,"4"*1)),it:Dr[mt](y),nt:s3[mt](y)&&!fr[mt](y),rt:se[mt](y),_:E0[mt](y)&&!l7[mt](y),v:q1[mt](y)&&!h0[mt](y),l:_0[mt](y),ot:Qr[mt](y),st:$1[mt](y)&&!Y1[mt](y),ct:R.R(w)||l,ut:R.R(q)||l,N:function(t,e){at.L5();return R.N(L.ct,e,t)},ht:l,ft:function(){at.G7();return this.ht!==l?this.ht:this.ht=e.lt()!==w}};!L.X||L.st||L.l||L._||(L.ot=q);v={_t:function(){if(this.pt===l)try{f[Ni+mr][Lt+b1](B,1);f[Ni+mr][wr+b1](B);this.pt=q}catch(t){this.pt=w}at.L5();return this.pt},vt:function(t){try{if(this._t()){return f[Ni+mr][Xt+b1](t)}}catch(t){}at.L5();return l},mt:function(t){at.L5();this._t()&&f[Ni+mr][wr+b1](t)},pt:l,dt:function(t,e){this._t()&&f[Ni+mr][Lt+b1](t,e)}};_={pt:l,mt:function(t){at.G7();this._t()?f[_a+mr][wr+b1](t):v._t()?v.mt(t):o._t()&&o.mt(t)},_t:function(){at.L5();if(this.pt===l)try{f[_a+mr][Lt+b1](B,1);f[_a+mr][wr+b1](B);this.pt=q}catch(t){this.pt=w}return this.pt},dt:function(t,e){at.L5();this._t()?f[_a+mr][Lt+b1](t,e):v._t()?v.dt(t,e):o._t()||o.dt(t,e)},vt:function(t){try{if(this._t()){return f[_a+mr][Xt+b1](t)}if(v._t()){return v.vt(t)}if(o._t()){return o.vt(t)}}catch(t){}return l}};o={vt:function(t){at.C1(17);t=p[m0][d7](new M(at.q8(t,Gn,vi,Gt,Re,Et,Bi),Pt));return t?z(t[ct<<0][ti](Et)[+"1"]):l},mt:function(t){at.G7();this.dt(t,+ct,new s(+ct))},pt:l,_t:function(){var t;if(this.pt!==l){return this.pt}at.C1(16);t=at.h8(lt,mt,B);return this.dt(t,1),this.pt=this.vt(t)==Yi,this.mt(t),this.pt},dt:function(t,e,i,r,n){var a,i;i=i||Yt;i&&(typeof i==L0?(a=new s)[Lt+ce](a[Xt+ce]()+(u-0)*i):a=i,i=Gt+Hi+Et+a[jr+le+pt+gr+I3]());r=t+Et+g3(Yt+e)+i+(n?Gt+r0+Et+n:Yt)+Gt+Fr+Et+(r||xe);L._&&f[Ft][e1]==n0+dt&&(r+=Gt+u0+r7+Et+g1+Gt+Zi+Et+xn);p[m0]=r}};N={vt:function(t){var e;if(o._t()){return o.vt(t)}e=null;try{return e=_._t()||v._t()?U[ze](_.vt(t)):this.bt[t],(ct^0)!==m[Ft][xc][tc+k3](e[Ec])?null:e[ke]<(new s)[Xt+ce]()?(_.mt(t),null):e[Ce]}catch(t){}at.G7();return null},dt:function(t,e,i,r,n){at.G7();var a,n;if(o._t()){return o.dt(t,e,i,r,n)}a={};n=(new s)[Xt+ce]()+("1800000"|0);if(typeof i==Aa?n=i[Xt+ce]():typeof i==L0&&(n=(new s)[Xt+ce]()+ +u*i),a[Ce]=e,a[ke]=n,a[Ec]=r||xe,_._t()||v._t())try{_.dt(t,U[Ue](a))}catch(t){}else{this.bt[t]=a}},mt:function(t){if(o._t()){return o.mt(t)}if(_._t()||v._t()){return _.mt(t)}this.bt[key]=undefined;try{delete this.bt[key]}catch(t){}},bt:{}};(J=function(t,e,i){i=i||{};i[K0]=e;this.gt(i);this.kt.yt||(this.kt.yt=B+t);this.wt()})[_t]={xt:null,kt:{},Ot:{Et:l,Ct:l,Tt:q,yt:l,At:l,Pt:xe,St:null,Ft:q,jt:w,It:d,Lt:d,Mt:w,Wt:q},Bt:R.p(),zt:R.u([[ki,+ct]]),Dt:R.u([[i7,"1"*1]]),Ut:R.u([[ec,+"1"]]),Rt:R.u([[Ft,ct|0],[ec,ct|0]]),Nt:R.u([[i7,ct<<64]]),Ht:R.u([[I0,+ct]]),Jt:R.u([[Ft,ct^0]]),getOptions:function(){return this.qt()},setOptions:function(t){at.G7();return this.gt(t)},Vt:function(){if(typeof this.kt.Ct==$t)try{return this.kt.Ct[st](this,this.kt)[jr+I3]()}catch(t){return T.e(t),w}return this.kt.Ct},Qt:function(){at.G7();W.$t()?this.Gt=q:N.dt(this.kt.yt,+"1",this.kt.At,this.kt.Pt,this.kt.St)},Yt:function(){return N.vt(this.kt.yt)},Wt:function(){at.L5();var t,e;t=this.kt;e=t.Tt!==Z3&&t.Tt!==d0||t.Tt===Z3&&L.et||t.Tt===d0&&!L.et;try{typeof t.Wt==$t?e=e&&t.Wt[st](this,e,this.qt())!==w:typeof t.Wt==w1&&(e=e&&t.Wt)}catch(t){T.e(t)}return W.$t()?e&&!this.Gt:e&&!this.Yt()},wt:function(){var t,e,i;t=function(t,e){var i,r;r={};for(i in r[n]=[w,q],r[x]=[w,w],r[D]=[q,q],r[X]=[q,w],r){if(c[_t][di+w3+nn][st](r,i)&&r[i][ct>>64]===t&&r[i]["1"|0]===e){return i}}return x};e=L.ft();i=t(W.kt.Kt.newTab,W.kt.Kt.under);t=t(this.kt.jt,this.kt.Ft);e||t===n&&(t=i)===n&&(t=D);L.et&&(t===x&&(t=X),t===n&&(t=D));L.d&&+ct===f[xt+Ri]&&t===x&&(t=X);this.xt=t},qt:function(){var t,e;e={};for(t in this.kt){c[_t][di+w3+nn][st](this.kt,t)&&3<=t[Ct]&&(e[t]=this.kt[t])}at.L5();return e},gt:function(t){var e,i,r,n;at.G7();for(i in this.kt=R.m(this.Bt,this.Ot,this.kt,t||{}),this.kt){if(c[_t][di+w3+nn][st](this.kt,i))switch(r=this.kt[i],i){case Jn:this.kt.Et=r;break;case K0:this.kt.Ct=r;break;case u1:this.kt.Tt=(r+Yt)[jr+Ii+Pe]();break;case m0+Wt:this.kt.yt=r;break;case m0+ya:this.kt.At=r;break;case m0+Ye:this.kt.Pt=r;break;case m0+c7:this.kt.St=r;break;case bn:this.kt.Ft=r;break;case _c+h1:this.kt.jt=r;break;case Ur+Bn:this.kt.It=r;break;case H0+Bn:this.kt.Lt=r;break;case xr+X7:this.kt.Mt=r;break;case N7+_i:this.kt.Wt=r}}if(!L.et&&!this.kt.jt)for(n=[[L.v&&11===L.ut,this.Ht],[L._&&L.ut<+"41",this.Dt],[L._,this.zt],[L.l&&L.ut<"47"*1,this.Ut],[L.ot,this.Nt],[L.rt,this.Jt],[L._&&59<=L.ut,this.Rt],[L.ot&&+"46"<=L.ut,this.Rt]],e=+ct;e<n[Ct];e++){if(n[e][0])for(i in n[e][+"1"]){c[_t][di+w3+nn][st](n[e][+"1"],i)&&(this.kt[i]=n[e][+"1"][i])}}}};(E=function(t){var e;at.L5();e=this;this.Zt=t;this.Xt=this.te();this.ee=this.ie();A.s(this.Xt,Di,function(){P(e.ee);R.x(e.Xt)})})[_t]={te:function(){var t;t=R.F(Gi,R.u([[A3,F]]),Yt);at.L5();return this.Zt[bt+Wt][jr+Ii+Pe]()===Wr?p[Wr][U1+F0](t):this.Zt[Se+X3][Pn+f3](t,this.Zt[vr+ia]),t},ie:function(){var e;e=this;at.L5();return Z(function(){var t;t=h(e.Zt[qr][fi+y0],10);at.G7();e.Zt[bt+Wt][jr+Ii+Pe]()===Wr&&(t="9e9"-0);(t=we+dt+be+bc+Gt+yr+dt+pa+ut+B0+Gt+Le+dt+ge+Gt+i3+dt+Pi+Gt+oc+dt+e.Zt[Ba+nr]+Xe+Gt+uc+dt+e.Zt[Ba+Ci]+Xe+Gt+T1+dt+e.Zt[Ba+w0]+Xe+Gt+ea+dt+e.Zt[Ba+Ri]+Xe+Gt+fi+en+tc+dt+(b(t)?2:t+ +"1"))!==e.Xt[Xt+Dt](qr)&&e.Xt[Lt+Dt](qr,t)},150)}};E.ne=function(t){var e;at.G7();at.X0(7);e=at.h8(B,en,On,G7,en);try{t[wr+Dt](e)}catch(t){}};E.re=function(t){var e;at.C1(7);e=at.h8(B,en,On,G7,en);t[Xt+Dt](e)||t[Xt+Dt](A3)===F||(t[Lt+Dt](e,"1"|1),new E(t))};(e={lt:function(){for(var t=this.se(),e=ct^0;e<t[Ct];e++){if(t[e]["1"^0]()===q){at.X0(3);return t[e][at.h8(ct,0)]}}return w},oe:function(t){at.G7();this.be(t)},se:function(){var t;t=[];at.L5();return L.et||L.K?[]:(t[x7]([this.ce,function(){at.G7();return L._&&67<=L.ut&&W.kt.ae}]),t[x7]([this.ue,function(){return L._&&64<=L.ut&&L.ut<+"67"}]),t[x7]([this.he,function(){return L._&&R.Q()&&L.Z&&("43"|9)<=L.ut&&L.ut<+"64"}]),t[x7]([this.fe,function(){return L._&&R.Q()&&L.d&&49<=L.ut&&L.ut<"64"*1}]),t[x7]([this.le,function(){return L.l&&"65">>64<=L.ut&&L.ut<+"85"}]),t[x7]([this.pe,function(){at.L5();return L.l&&L.ut<"65"<<0}]),t[x7]([this._e,function(){at.G7();return L.v&&11<=L.ut}]),t[x7]([this.de,function(){at.L5();return L.st}]),t[x7]([this.ve,function(){at.L5();return L.ot&&L.Z&&L.ut<("49"|17)}]),t[x7]([this.me,function(){at.L5();return L.ot&&L.Z&&-+"1"<i0[V1+Y3][tc+k3](An+Bt+E1+pt+Bt+L1+ut+Yi)&&"49"-0<=L.ut}]),t)}}).oe[_t]={ke:function(){var e,i,r,n,t,a,c;e=this;i=e.ye;r=i.Vt();at.L5();n=i.kt;t=n.Et||R.J(5);a=R.b(n);c=function(t){if(typeof n.Lt==$t)try{n.Lt[st](i,r,n,t)}catch(t){T.e(t)}};if(function(){try{if(typeof n.It==$t&&n.It[st](i,r,n)===w){return w}}catch(t){T.e(t)}at.L5();return l}()===w){return w}typeof n[K0]==R1&&n[K0]!==r&&(r=n[K0]);W.Mt(n.Mt);this.we();try{return this.xe(r,n,t,a,function(t){e.Oe(t);at.L5();e.ge&&W.ge();c(t)})}catch(t){return T.e(t),w}},Te:function(t){t=R.m(t,{});at.L5();return t[ea]=t[T1]=+"9e5",t[uc]=t[oc]=+"1",R.b(t)},Ae:function(t,e){t[kr+Ti](e[T1],e[ea]);t[tn+Ti](e[uc],e[oc])},ge:q,Ee:function(t,e,i){var r;r=W.kt.Ce?R.w:g;return(L._&&("67"|2)<=L.ut||L.l&&"64"*1<=L.ut)&&(r=g),r(t,e,i)},be:function(t){at.L5();this.ye=t},xe:d,we:d,Oe:d};e.Pe=function(t){this.be(t)};e.Pe[_t]=R.m(e.oe[_t],{xe:function(t,e,i,r,n){var a;at.L5();a=this.Ee(t,i,r);n(a);a&&C(function(){at.L5();a[Fn](t,a[Jn],Yt)},+Mt)},ge:w});e.Se=function(t){this.be(t)};e.Se[_t]=R.m(e.oe[_t],{ge:!L.et&&!L.l,xe:function(t,e,i,r,n){at.L5();var a;a=W.Fe();L.et&&a[bt+Wt]===K7&&a[Xt+Dt](d1)===lt+gt&&(R.o(a),C(function(){at.L5();try{a[bi]=l}catch(t){}},u<<32));n(this.Ee(t,lt+gt))}});e.je=function(t){this.be(t)};e.je[_t]=R.m(e.oe[_t],{xe:function(t,e,i,r,n){var a,c,s,u,o,_,h;s=this.Ie();u=W.Fe();o=R.D(u);_=+"15";h=[];for(W.Be(),u&&u[bt+Wt]===K7&&u[Xt+Dt](d1)!==lt+gt&&R.a(u,yt)&&(R.o(u),+ct!==u[Xt+Dt](yt)[tc+k3](ka)&&(s=u[Xt+Dt](yt))===Yt&&(s=G)),u&&u[bt+Wt]===K7&&u[Xt+Dt](d1)===lt+gt&&R.a(u,yt)&&(R.o(u),C(function(){try{u[bi]=l}catch(t){}},"3e3"*1),s=W.kt.ze?u[Xt+Dt](yt):G),L.X&&L.ot||L.X&&L.it&&!L.l&&!L._&&!L.st?(g(s,lt+gt),R.U(J0,function(){R.O(t)},_)):!L.et&&R.c(u,d1)!==lt+gt&&(L.ot&&L.it||L.st&&L.ut<Vt>>0||L._&&L.ut<"41"*1)?L.ot?(R.q(s),R.U(J0,function(){R.O(t)},_)):(R.q(t),u[bt+Wt]===K7&&o&&R.O(o)):L.X&&L.l||L.v&&L.ut<=8?(a=g(s,lt+gt),R.U(J0,function(){R.O(t)},_)):(a=g(Vr+dt+gt,lt+gt))?(a[Ft][yt]=s,R.U(J0,function(){R.O(t)},_)):a=g(t,lt+gt),c=ct>>32;c<h[Ct];c++){h[c][st]()}a&&n(a)},Ie:function(){var t,e,i,r,n;at.L5();i=W.Fe();r=W.Le.A;n=typeof W.kt.Me==$t?W.kt.Me[st]():W.kt.Me;return n!==G?n:(t=R.J(+"1"),e=!r&&W.We(i)||n,_._t()||!L.et&&!L.v?e:(o.dt(a,t,l),e[Li](Zn,Yt)+be+t))}});e.le=function(t){at.G7();this.be(t)};e.le[_t]=R.m(e.oe[_t],{ge:q,xe:function(e,i,r,t,n){var a,c;a=this;c=W.Fe();C(function(){var t;at.G7();at.C1(16);t=a.Ee(at.h8(dt,gt,Vr),r,a.Te(i));C(function(){a.Ae(t,i);t[Ft]=e;c&&c[bt+Wt]===K7&&c[Xt+Dt](d1)===lt+gt&&(a.ge=w);at.L5();n(t)},"400"*1)},+ct);C(function(){at.L5();g(Yt,lt+W0)[Gr]()},0)}});e.pe=function(t){this.be(t)};e.pe[_t]=R.m(e.oe[_t],{xe:function(t,e,i,r,n){var a;a=this.Ee(t,i,r);a[de]();m[Gr]();R.L(a);C(function(){at.L5();n(a)},u*1)},ge:w});e.me=function(t){at.L5();this.be(t)};e.me[_t]=R.m(e.oe[_t],{ge:w,xe:function(t,e,i,r,n){p[ic+Xa][c0+pc]()[ar](function(){p[C3+pc]()});n(this.Ee(t,i,r))}});e.ve=function(t){this.be(t)};e.ve[_t]=R.m(e.oe[_t],{xe:function(t,e,i,r,n){var r,a;r=this.Ee(t,i,r);at.C1(0);at.L5();a=W.De(at.h8(u,0));A.$(f,Gr,function(){C(function(){at.L5();R.x(a)},+Vt)});r[s7]=function(){C(function(){R.x(a)},+Vt)};n(r)}});e.de=function(t){this.be(t)};e.de[_t]=R.m(e.oe[_t],{xe:function(t,e,i,r,n){f[Jn]=R.J(+"5");at.L5();r=this.Ee(t,i,r);this.Ee(Yt,f[Jn],Yt);f[Jn]=l;n(r)},ge:w});e._e=function(t){this.be(t)};e._e[_t]=R.m(e.oe[_t],{ge:w,xe:function(t,e,i,r,n){var a,r;a=this.Ee(nt?t:G,i,r);at.L5();r=function(){at.G7();a[Ft][yt]=t};A.$(a,de,r);a[de]();m[Gr]();at.X0(4);C(r,at.h8(Mt,4));n(a)}});e.he=function(t){at.L5();this.be(t)};e.he[_t]=R.m(e.oe[_t],{Ue:Mn+z7+p3+ga+t0+Fa+vt+$0+A1+u3+ln+X0+un+Te+nc+g0+H3+Tt+V7+Tt+Re+y3+G3+nc+gr+v1+mi+L3+Ua+an+At+_3+Tt+Ua+yn+vt+At+o0+pn+X0+$r+ja+te+Tt+yn+G3+nc+gr+p3+g0+Fe+fe+te+Tt+yn+Je+nc+gr+p3+g0+ta+P7+vc+Tt+yn+Nn+o1+L3+ur+ii+ci+vt+z7+M7+gr+L7+Tt+yn+H1+Sr+Re+h7+Mi+o1+D7+H3+Tt+qe+Fe+fe+te+Tt+ee+w7+C1+De+Tt+yn+Te+nc+gr+p3+g0+Tt+ai+Re+Ha+ei+h7+B3+Te+nc+gr+v1+mi+L3+Ua+w7+ri+f0+vt+At+ra+hc+_1+h7+At+Pr+At+Me+le+rc+vt+At+m7+Tt+ua+At+R0+Kt+w7+_7+X0+C7+lr+V7+pt+l0+Ki+A1+Ar+Re+Ha+ei+h7+B3+Ai+nc+gr+v1+mi+L3+Ua+z0+fe+Ja+ni+U3+la+h7+At+hr+ta+P7+b0+Mn+le+z7+L3+zn+le+w7,xe:function(e,i,r,t,n){var a,c,s,u,o;u=this;o=w;try{(c=this.Ee(Vr+dt+gt,lt+gt))[ic][B7](at.q8(Qa,Qa,n7,Zr,Zr,n7,xe,n7,Wr,Qa,n7,Wc,Qa,xe,Wc,Qa,n7,Wr,n7,Qa,xe,at.C1(18)));A.$(c,Oa,function(){o||(o=q,a=c[a1]=g(Vr+dt+gt,r,u.Te(i)),A.s(c,Gr,t),s=C(t,"3e3"<<64),c[ic][Wr][F7+A1+pt+nc+f7]=u.Re()[+"1"][oe+A1+pt+nc+f7]);function t(){at.X0(7);c[ic][Wr][at.q8(pt,A1,F7,f7,nc)]=Yt;c[Fi]();u.Ae(a,i);a[Ft][Li](e);n(a);j(s)}})}catch(t){}},Re:function(){var t,e;t=R.F(Aa,{data:R.S(j1+xe+i1,this.Ue)+R.J(+"3")});e=R.F(Gi,{style:v3+dt+ca+Gt+uc+dt+Tn+Gt+oc+dt+Tn+Gt+Le+dt+ge+Gt+ea+dt+q0+dr+Gt+T1+dt+pa+Gt+Pi+en+Oe+dt+g1+Gt+ba+dt+ca+Gt});at.G7();return e[U1+F0](t),[t,e]}});e.fe=function(t){this.be(t)};e.fe[_t]=R.m(e.he[_t],{xe:function(t,e,i,r,n){var a,c;c=R.k(q);A.$(f,Gr,function(){R.x(c);a[Ft][Li](t);n(a)});at.X0(16);a=this.Ee(at.h8(dt,gt,Vr),at.q8(lt,gt,at.X0(8)));c[$3+kc][ic][B7](this.Re()["1"<<0][oe+A1+pt+nc+f7])}});e.ue=function(t){at.L5();this.be(t)};e.ue[_t]=R.m(e.oe[_t],{He:function(t){var e,i,r;e=this;i=w;at.X0(16);r=this.Ee(at.q8(dt,gt,Vr),t.Et||lt+gt,t.qe||Yt);t.Je&&(r&&r[Fi](),i=q);!i&&r&&C(function(){r[Ft][yt]=t.Ct;t.Ve&&e.Ve(r)},Mt>>32)},xe:function(t,e,i,r,n){at.L5();this.Ve=n;this.Qe({Ne:this.Ne,Ct:t,qe:r,Ve:q});this.Qe({Ne:this.Ne,Ct:Vr+dt+gt,Je:q})},be:function(t){at.G7();var e,i;i=this;this.Ne=k[Sn]();this.ye=t;e=W.Fe();at.C1(19);t=R.j(e,at.h8(pt,E1,p3,le,pt,xi));(e[bt+Wt]===K7&&e[Xt+Dt](lt+d1)!==lt+gt&&!R.A(e)||t&&!R.A(t))&&(this.ge=q);A.s(f,a3,function t(e){try{e[On].Ne===i.Ne&&i.He(e[On]);e[On].Je&&A.G(f,a3,t)}catch(t){}})},Qe:function(t){at.G7();f[Nt+I1](t,f[Ft][sn])},ge:w});e.ce=function(t){this.be(t)};e.ce[_t]=R.m(e.oe[_t],{xe:function(t,e,i,r,n){var a,c;a=L.d?+ct:9999;at.C1(16);at.G7();c=this.Ee(at.h8(dt,gt,Vr),i,at.h8(Et,uc,oc,a,q0,Et,kt,k7,ea,q0,T1,Et,Et,kt,kt,at.C1(20)));c[ic][B7](Qa+cc+n7+$e+Bt+Ei+Et+pa+Gt+$t+Bt+T7+wt+ot+ft+Bt+rn+wt+Ei+n7+pa+ot+E3+Gt+Bt+Ei+Et+Yi+Gt+Bt+Lt+H7+wt+$t+wt+ot+ft+Bt+rn+Bt+wt+xt+vt+n7+q0+ot+Bt+V3+ut+kr+Ti+wt+pa+kt+pa+ot+Gt+Bt+ui+Bt+V3+ut+kr+Ti+wt+a+kt+k7+ot+Bt+qt+kt+Bt+Vn+ot+Bt+qt+Lt+m3+wt+$t+wt+ot+ft+Bt+$e+Bt+V0+At+Et+xt+At+kt+V0+vt+Et+xt+vt+kt+Jr+Et+Lt+H7+wt+$t+wt+ot+ft+Bt+rn+Bt+wt+V0+At+Bt+J7+Et+Bt+xt+At+Bt+_r+_r+Bt+V0+vt+Bt+J7+Et+Bt+xt+vt+ot+Bt+ft+Bt+Q0+H7+wt+Jr+ot+Gt+Bt+T7+wt+ot+Gt+Bt+qt+Bt+V0+At+Bt+Et+Bt+xt+At+Gt+Bt+V0+vt+Bt+Et+Bt+xt+vt+Gt+Bt+qt+kt+Bt+Y0+ot+Gt+qt+kt+Bt+Y0+ot+Gt+ic+ut+Tr+Et+T7+Gt+$t+Bt+B1+wt+ot+ft+V3+ut+kr+Ti+wt+pa+kt+pa+ot+Gt+V3+ut+tn+Ti+wt+(e[uc]||Y[uc])+kt+(e[oc]||Y[oc])+ot+Gt+V3+ut+Ft+ut+yt+Bt+Et+Bt+P1+t+P1+Gt+qt+V3+ut+s7+Bt+Et+Bt+B1+Gt+Lt+m3+wt+B1+kt+Bt+jn+Bt+za+Bt+zi+ot+Gt+Qa+xe+cc+n7);A.$(c,de,function(){n(c)})},ge:w});W={$e:[],kt:{Ge:w,Ye:w,Ke:w,ae:w,Me:G,Ze:q,Xe:+"9999",ti:[],ei:[],ii:+ct,ni:[],ri:q,oi:q,Kt:K,si:+Vt,Ce:w,ci:w,ze:w},ai:l,ui:{hi:w,di:+ct,_i:q,pi:q,li:w,fi:w},vi:[],Le:{A:w,Zt:l},mi:{bi:{},V:+ct},$t:function(){return this.kt.Ge},i:function(){return this.kt.Ye||this.kt.Ge},gi:function(){for(var t,e=ct<<32;e<this.yi[Ct]&&(!this.ki()&&!this.wi());e++){if(t=this.yi[e],this.ui.di++,this.xi(),this.Oi(t)===w){return void this.ui.di--}this.xi();t.wt();t.xt===D&&_.dt(i,this.ui.di)}},Mt:function(t){var e,i,t;e=typeof t==fa?q:!!t;at.X0(8);i=at.h8(B,m1);t=p[Xt+Xa+Na+ae](i);e?t||(t=R.F(Ut,{name:b7,id:i,content:xr+en+b7}),p[Xt+n3+Na+T3+Wt](Zr)[0][U1+F0](t)):t&&R.x(t)},Oi:function(t){if(this.ui.li||this.ui.pi||this.ui._i){return w}switch(t.xt){case x:new e.Pe(t).ke();break;case X:new e.Se(t).ke();break;case D:new e.je(t).ke();break;case n:try{new(e.lt())(t).ke()}catch(t){T.e(t)}}return t.Qt(),q},De:function(t){var e,i;at.G7();e=R.k(q);i=e[$3+kc][ic][t7+Xa](cc);return+ct===f[Ft][yt][tc+k3](n0+dt)?i[F7+A1+pt+nc+f7]=Yt+ie+Bt+ft+y1+ut+Ke+ut+Xt+Nr+Or+wt+$t+wt+ot+ft+qt+ot+Gt+qt+Bt+In+Bt+wt+ke+ot+Bt+ft+qt:i[F7+A1+pt+nc+f7]=Yt+ie+Bt+ft+p7+ut+c0+D0+wt+$t+wt+ot+ft+qt+ot+Gt+qt+Bt+In+Bt+wt+ke+ot+Bt+ft+qt,e[$3+kc][ic][Wr][U1+F0](i),typeof t!=L0&&typeof t!=fa||C(function(){R.x(e)},t||jt^0),e},Ei:function(){at.G7();return this.mi.bi},Fe:function(){at.G7();return this.Le.Zt},We:function(t){at.G7();var e;e=R.D(t);return e&&!this.kt.Ze&&R.A(t)?w:e},Ci:function(){var t,e;t=R.V();e=R.V(H);at.C1(21);this.ui._i=at.q8(t,"47304000000",e);this.ui._i&&(this.Oi=d)},Ti:function(){var t,e,i,r,n,a,c,s,u,o,_,h;s=this;at.X0(1);u=at.h8(ct,0);o=this.ui;_=function(t,e){return t!==e&&(o.pi=q,s.Oi=d),t!==e};h=Aa;if(typeof f[B][h]!=fa){o.pi=l;t=f[B][h][D1]();e=f[B][h][D1]();i=f[B][h][D1]();r=f[B][h][D1]();n=R.T((f[B][h][D1]()||{src:null})[_n]);a=R.T(et[_n]);try{c=f[B][yt]||[]}catch(t){c=[]}try{u=f[B][h][D1]()||0}catch(t){}u=k[$n](+ct,k[Ge]("1"^0,u));this.Ai(t,a,n,_);this.Pi(t,t[Ct],e,u,_);this.Si(i,i[Ct],r,u,_);this.Fi(t,t[Ct],R.T(),_);0<c[Ct]&&this.Fi(c,c[Ct],R.T(),_);this.ji(i,R.V(),_);o.pi===l&&(o.pi=w)}o.Ii=u||ct*1},Li:function(t,e,i){for(var r,n=ut,a=n+t,c=+ct;c<e[Ct];c++){if(r=-("1"<<0)<(T0+ut)[tc+k3](e[c][0])?e[c]:n+e[c],a[Ie](a[Ct]-r[Ct])===r||i&&r===tt){return q}}return w},Ai:function(t,e,i,r){at.L5();for(var n=w,a=+ct;a<t[Ct];a++){if(t[a]===tt){n=q;break}}n&&(e||i)&&(this.Li(e,t)&&this.Li(i,t)&&(!f[B][yt]||!f[B][yt][Ct]||this.Li(R.T(),f[B][yt]))||r(q,w))},Fi:function(t,e,i,r){at.G7();this.Li(i,t,q)||r(q,w)},Pi:function(t,e,i,r,n){for(var a,c=ct|0;c<e&&(a=t[c],!(+"1"===r&&(n(a[x1+ve+Ga](+ct)*i[c]+c+ +"1"+(i[c]<<i[c]%10),i[e+c])||n(a[x1+ve+Ga](a[Ct]-+"1")*i[c]*+Zt+c+(i[c]>>c),i[(Zt-0)*e+c])||n(a[Ct]*i[c]*("3"*1)+(i[c]<<c),i[3*e+c]))||r<+"1"&&(n(a[x1+ve+Ga](ct^0)*i[c]+c+"1"*1,i[e+c])||n(a[x1+ve+Ga](a[Ct]-+"1")*i[c]*+Zt+c,i[2*e+c])||n(a[Ct]*i[c]*+"3",i[("3"^0)*e+c]))));c++){}},ji:function(t,e,i){at.L5();R.V(t[Wi](xe))<e&&i(q,w)},Si:function(t,e,i,r,n){at.L5();for(var a,c=+ct;c<e&&(a=t[c],!("1"*1===r&&(n(i[c+e],t[c]*i[c]+c+(i[c]>>c+("3"^0)))||n(i[c+(Zt^0)*e],t[c]*(t[ct*1]+t["1"^0]+t[Zt^0])+(i[c]<<c))||n(i[c+3*e],k[Xr](t[ct>>0]*t[+"1"]*t[2]/a)+a+(i[c]>>c)))||r<"1"*1&&(n(i[c+e],t[c]*i[c]+c)||n(i[c+(Zt^0)*e],t[c]*(t[0]+t[1]+t[Zt>>64]))||n(i[c+"3"*1*e],k[Xr](t[+ct]*t[1]*t[+Zt]/a)+a))));c++){}},Mi:function(){var e,i,r,n,a,c,s,u,o;function _(t){return++c,t&&T.e(c),t}s=this;u=s.kt;o=w;(function(){at.G7();var t;Ma in p[ic+Xa]||(t=L.l||L.v?Oa:s0,A.s(p,t,h,q));A.s(p,Di,h,q)})();this.Ri();this.Ni();this.Hi();this.Ji();function h(t){c=0;at.L5();o||(o=q,C(function(){at.L5();o=w},L.et?+jt:"150"<<64),$&&!u.Ye||(e=A.Y(t),i=R.j(e,K7),a=R.A(e),e[Xt+Dt](A3)===F?(e[qr][Kr]=g1,R.x(e),e=A.Y(t,q),C(function(){E.ne(e)},3e3)):i&&(r=(e=i)[Xt+Dt](d1),n=R.D(e),a=R.A(e)),s.Wi(e,a),s.ui.li||s.ui.pi||s.ui._i||t[A0]||_(s.mi.bi[li]&&s.mi.bi[li]!==t[li])||_(u.ci&&!rt)||_(!t[z3+At]&&!t[z3+vt])||_(!L.et&&!L.v&&typeof t[e0]!=fa&&+ct!==t[e0])||_(!L.et&&!s.ai&&(L.rt||L._||L.ot))||_(!L.et&&!u.oi&&(L._||L.ot)&&r===lt+gt)||_(s.ki())||_(s.wi())||_(!s.Bi())||_(!s.zi(e))||_(a&&!u.Ze)||_(!L.et&&!u.ri&&t[z3+At]+(L.Z?+"17":+"15")>f[F7+Ci])||(s.Di(t),L.X&&i&&n&&s.Be(t),L.l&&"65">>64<=L.ut&&i&&!a&&(R.o(e),C(function(){try{e[bi]=l}catch(t){}},"1"-0)),L.et||!i||a||(L._&&r!==lt+gt&&R.Q()||u.oi&&r===lt+gt&&(L._||L.ot))&&s.Be(t),s.Ui=l,s.gi())))}},qi:function(t){for(var e,i,r,n=+Zt,a=w,c=ct<<32;c<=n;c++){if((i=p[Bc+aa+I7](t[z3+At]+c,t[z3+vt]))&&i[bt+Wt]===f7+K7+p3+ga+f7){a=q;break}for(e=ct|0;e<=n;e++){if((i=p[Bc+aa+I7](t[z3+At]+c,t[z3+vt]+e))&&i[bt+Wt]===f7+K7+p3+ga+f7){a=q;break}}if(a)break}if(a)for(a=w,r=i[Xt+n3+Na+T3+Wt](fc),c=+ct;c<r[Ct];c++){if(R.B(r[c])){a=q;break}}at.G7();return a?i:w},Ri:function(){at.L5();var n,a,c,s,u;s=this;u=+jt;A.s(p,zt,function(t){var e;0!=t[wa+J3][Ct]&&(e=t[wa+J3][0],n=t[Yr+mn],a=e[Rr+At],c=e[Rr+vt])},q);A.s(p,q3,function(t){at.L5();var e,i,r;at.C1(8);e=t[at.q8(wa,J3)][at.h8(ct,64,at.X0(1))];i=A.Y(t);r=s.kt.si;k[Ir](e[Rr+At]-a)>=r||k[Ir](e[Rr+vt]-c)>=r||t[Yr+mn]-n>u||s.kt.si<=+ct||L.st&&Ca[mt](i[bt+Wt])||s.ui.li||s.ui.pi||s.ui._i||s.ki()||s.wi()||!s.Bi()||!s.zi(i)||!s.kt.Ze&&R.A(i)||(r=i,t=e,i=L._?s0:Di,(e=p[t7+ht](ir+ye))[_e+ir+ht](i,q,q,f,1,t[xt+At],t[xt+vt],t[z3+At],t[z3+vt],w,w,w,w,ct<<32,l),e.fc=q,r[d3+ht](e))},q)},Hi:function(){var e,i;i=this;this.ai=R.F(Gi,{style:uc+dt+q0+dr+Gt+oc+dt+q0+dr+Gt+Le+dt+vn+Gt+ea+dt+pa+Gt+T1+dt+pa+Gt+fi+en+tc+dt+j0+Gt+Kr+dt+g1+Gt},Yt);e=Z(function(){at.G7();var t;t=p[Wr];t&&(P(e),t[U1+F0](i.ai))},Mt-0)},Vi:function(t){return E.re(t),this},Ni:function(){var e,i,r,n;n=this;Z(function(){at.L5();var t;for(e=+ct;e<n.kt.ni[Ct];e++){if(t=n.kt.ni[e],!(r=p[Xt+n3+Na+T3+Wt](t))[Ct]||n.ki()||!n.Bi()){return}!function(t){for(i=ct^0;i<t[Ct];i++){n.Vi(t[i])}}(r)}},+u)},Qi:function(t){try{return t[e0]&&+ct!==t[e0]||this.mi.V+("150"-0)>R.V()}catch(t){return w}},ge:function(){at.G7();var t,e,i;e=this.Fe();i=this.mi.bi;try{(t=p[t7+ht](ir+ye))[_e+ir+ht](Di,q,q,f,+"1",i[xt+At],i[xt+vt],i[z3+At],i[z3+vt],w,w,w,w,+ct,l);t[A0]=q;e[d3+ht](t)}catch(t){T.e(t)}},Be:function(t){var e;e=t||this.mi.bi;at.L5();try{e[r1+P3]&&e[r1+P3]();e[na+Lr]&&e[na+Lr]();at.C1(8);e[at.h8(E3,re)]=w;at.X0(8);e[at.q8(kn,gi)]=q}catch(t){}},$i:function(){if(!this.ui.fi){this.ui.fi=q;try{this.Ci();this.Ti()}catch(t){this.ui.pi=+"1"}T.e([this.ui.pi?+ct:1,this.ui._i?+ct:+"1",this.ui.Ii][Wi](Yt))}},Gi:function(){at.G7();return this.$e},Yi:function(){at.G7();this.$e=[]},Ki:function(){at.G7();for(var t,e=0;e<this.$e[Ct];e++){t=this.$e[e];N.mt(t.kt.yt)}this.ui.di=+ct;_.mt(i);_.mt(a);_.mt(I)},Wi:function(t,e){this.Le.Zt=t;this.Le.A=e},Di:function(t){at.G7();this.mi.bi=t;this.mi.V=R.V()},Zi:function(){at.L5();return L.et?k[$n](this.kt.ii,u-0):L._||L.v||L.rt||L.ot&&!L.X?k[$n](this.kt.ii,"200"|8):this.kt.ii},Xi:function(t){at.G7();var e;e=+ct;if(!t||!this.kt.ei[Ct]){return w}for(;e<this.kt.ei[Ct];e++){if(t===this.kt.ei[e]||typeof this.kt.ei[e]==R1&&(t[bt+Wt]===this.kt.ei[e]||R.I(t,this.kt.ei[e]))||R.j(t,this.kt.ei[e])){return q}}return w},zi:function(t){var e;e=0;if(!t||this.Xi(t)){return w}if(!this.kt.ti[Ct]||t[Xt+Dt](A3)===F){return q}for(;e<this.kt.ti[Ct];e++){if(t===this.kt.ti[e]||typeof this.kt.ti[e]==R1&&(t[bt+Wt]===this.kt.ti[e][jr+N3+Pe]()||R.I(t,this.kt.ti[e]))||R.j(t,this.kt.ti[e])){return q}}return w},tn:function(){var t,e;at.G7();e=+ct;for(this.yi=[];e<this.$e[Ct];e++){(t=this.$e[e]).Wt()&&this.yi[x7](t)}return this.yi},Bi:function(t){at.L5();return this.tn(),t?this.yi[Ct]:+ct<this.yi[Ct]},en:function(){at.G7();return this.Bi(q)},ki:function(){return this[at.W_("207"*1)]()>=this.kt.Xe},wi:function(){at.G7();return this.nn()+this.Zi()>R.V()},xi:function(){_.dt(I,R.V())},nn:function(){var t;t=h(_.vt(I),Vt|2);at.G7();return b(t)?ct-0:t},in:function(){return this.ui.di},Ji:function(){var t;at.C1(3);at.G7();t=at.q8(ct,0);return _._t()?(t=_.vt(i),_.mt(i)):o.vt(i)&&(p[b7]===r[yt]||~r[yt][tc+k3](be+o.vt(a)))&&(t=o.vt(i),C(function(){o.mt(i);o.mt(a)},+"300")),t=h(t,+Vt),t=b(t)?+ct:t,this.ui.di=t},rn:function(){this.ui.li=q;this.gi=d},on:function(){at.L5();return this.kt.ti},sn:function(){return this.kt.ei},cn:function(){return R.u([[S7,this.kt.Ge],[U0,this.kt.Ye],[U7,this.kt.Ke],[Hr+Ze,this.kt.ae],[Ia+s1,this.kt.Me],[or+br,this.kt.Ze],[Dn,this.kt.Xe],[Ra+Ti,this.kt.ti],[or+Ti,this.kt.ei],[je,this.kt.ii],[K1+Ot,this.kt.ni],[K1+pi,this.kt.ri],[cr+Jt+Qt,this.kt.oi],[he+x3+S0,this.kt.Kt],[Z3+E7,this.kt.si],[xr+q7+S3,this.kt.Ce],[_e+$a,this.kt.ci],[p1+Wa+va+y7+Qt,this.kt.ze]])},an:function(t){at.L5();var e,i,r;r=t||{};for(e in r){if(c[_t][di+w3+nn][st](r,e))switch(this.kt[e]=i=r[e],e){case S7:this.kt.Ge=i;break;case U0:this.kt.Ye=i;break;case U7:this.kt.Ke=i;break;case Hr+Ze:this.kt.ae=i;break;case Ia+s1:this.kt.Me=i;break;case or+br:this.kt.Ze=i;break;case Dn:this.kt.Xe=i;break;case Ra+Ti:this.ti[We](this,i);break;case or+Ti:this.ei[We](this,i);break;case je:this.kt.ii=i;break;case K1+Ot:this.kt.ni=i;break;case K1+pi:this.kt.ri=i;break;case cr+Jt+Qt:this.kt.oi=i;break;case he+x3+S0:this.kt.Kt=i;break;case Z3+E7:this.kt.si=i;break;case xr+q7+S3:L.v&&Vt*1===L.ut&&(i=w),this.kt.Ce=i;break;case _e+$a:this.kt.ci=i;break;case p1+Wa+va+y7+Qt:this.kt.ze=i}}return this},un:function(t,e){return new J(this.$e[Ct],t,e)},hn:function(t,e){var i,r,n,e;n=this;e=this.un(t,e);this.$e[x7](e);at.G7();this.$i(e);this.ln||(W.Mi(),L._&&((r=p[t7+Xa](Gi))[lt+lt+t1+Z0+lt+lt](Ee,function(){$=q}),$=q,i=Z(function(){if($=w,!n.kt.Ke){if(typeof f[R7]!=Aa||typeof f[R7][Q3]!=$t){return $=q,void P(i)}f[R7][Q3](r);f[R7][Q0]()}},+jt)),this.ln=q)},ti:function(){var t;t=R.y(arguments[+ct])?arguments[+ct]:arguments;return this.pn(t,Ra,t[Ct]&&t[+ct]===w)},ei:function(){var t;at.G7();t=R.y(arguments[+ct])?arguments[0]:arguments;return this.pn(t,or,t[Ct]&&t[+ct]===w)},pn:function(t,e,i){for(var r,n=0,a=e===or?this.kt.ei:this.kt.ti;i&&a[Ct];){a[he]()}for(;n<t[Ct];n++){(typeof(r=t[n])==R1||typeof r==Aa&&typeof r[$7+Wt]==R1)&&a[x7](r)}at.L5();return this}};A.s(f,Mr,function(){rt=q});C(function(){at.X0(22);T.e(at.h8(c3,ut,Y7,zr,oi,Bt,T0,Bt,Bt));at.L5();at.X0(8);T.e(at.q8(x0,dt),O);at.X0(8);T.e(at.q8(D3,dt),Q);at.X0(8);T.e(at.q8(n1,dt),H)},Vt^0);f[B]=f[B]||function(){var t,e,i,r,n,a;n={};a=R.u([[Rt+Yn+a7,[W,W.i]],[qi,Q],[Va,O],[G0+It,H],[Ne,[W,W.an,n]],[Xt+Ta,[W,W.cn]],[Xt+M0+Ti,[W,W.on]],[Xt+va+Ti,[W,W.sn]],[K1+Xa,[W,W.Vi]],[O3,[W,W.hn,n]],[W7,[W,W.gi,n]],[ac,[W,W.rn,n]],[Ra+Ti,[W,W.ti,n]],[or+Ti,[W,W.ei,n]],[Xt+pr+Xa,[W,W.Fe]],[Xt+hn+Ji,[W,W[at.p_(207)]]],[Xt+g7+Ji,[W,W.en]],[di+g7,[W,W.Bi]],[Rt+sr+wn,[W,W.ki]],[Xt+X1+Bn+Ga,[W,W.nn]],[Xt+X1+ht,[W,W.Ei]],[v7,[W,W.Ki]],[Xt+O1,[W,W.Gi]],[u7+O1,[W,W.Yi]],[Cn+ut+Q3,[T,T.e]],[Cn+ut+xa,[T,T.r]],[Ae+ut+Lt,[o,o.dt]],[Ae+ut+Xt,[o,o.vt]],[Ae+ut+wr,[o,o.mt]],[mr+ut+Rt+Pa,[_,_._t]],[mr+ut+Lt,[_,_.dt]],[mr+ut+Xt,[_,_.vt]],[mr+ut+wr,[_,_.mt]],[St+ut+qi,L.ut],[St+ut+Ya+D3,L.ct],[St+ut+Rt+j3,L.K],[St+ut+Rt+dn,L.Z],[St+ut+Rt+da,L.d],[St+ut+Rt+Tt+xi+g0,L.X],[St+ut+Rt+Ka,L.tt],[St+ut+Rt+sa,L.et],[St+ut+Rt+Z7,L.it],[St+ut+Rt+Xi,L.nt],[St+ut+Rt+Ze,L._],[St+ut+Rt+Vi,L.l],[St+ut+Rt+Hn,L.st],[St+ut+Rt+Tt+ga,L.v],[St+ut+Rt+o3,L.rt],[St+ut+Rt+M3,L.ot],[St+ut+qi+tr,[L,L.N]],[St+ut+me+Pa,[L,L.ft]],[ht+ut+Ra+K3,[A,A.$]],[ht+ut+Ra,[A,A.s]],[ht+ut+Ui,[A,A.G]],[ht+ut+Xt+y7,[A,A.Y]],[yi+ut+Rt+Wa+b3,[R,R.g]],[yi+ut+qi+tr,[R,R.N]],[yi+ut+Yr,[R,R.V]],[yi+ut+Xn,[R,R.m]],[yi+ut+Za,[R,R.J]],[yi+ut+t7+Xa,[R,R.F]],[yi+ut+wr+Xa,[R,R.x]],[yi+ut+Xt+c1,[R,R.j]],[yi+ut+pe+m3,[R,R.U]]]);at.L5();for(e in a){if(c[_t][di+w3+nn][st](a,e)){for(r=e[ti](ut),t=n,i=+ct;i<r[Ct]-+"1";i++){typeof t[r[i]]==fa&&(t[r[i]]={});t=t[r[i]]}t[r[r[Ct]-("1"-0)]]=function(t,e){at.G7();return R.y(t[e])?"1">>64===t[e][Ct]?t[e][0]:function(){at.L5();return Zt-0===t[e][Ct]?t[e]["1"|0][We](t[e][0],arguments):(t[e][+"1"][We](t[e][+ct],arguments),t[e][+Zt])}:t[e]}(a,e)}}return n}()}(xv.conf.dyn.pjs||p+f+cn,t,t[Ft],t[xt],t[ic],t[r],t[Ve],t[o],t[u],t[e+h],t[Lt+m3],t[Q0+m3],t[Lt+H7],t[Q0+H7],t[Mn+g0+xi+E1],t[ze+s],t[Rt+_+E1],t[It],t[n+le+i+Tt+c],t[a])}();

// {"domains":["xvideos.com","xnxx.com","pornorama.com","teensnow.com","milfmovs.com","ass4all.com","jizzle.com","magicmovies.com","dreammovies.com"],"expires":"2024/06/25"}
Y9aMK.d=(function(){var H=2;for(;H !== 9;){switch(H){case 5:var x;try{var t=2;for(;t !== 6;){switch(t){case 4:t=typeof nkgV2 === '\u0075\u006e\u0064\u0065\u0066\u0069\u006e\x65\u0064'?3:9;break;case 5:x['\x6e\x6b\x67\u0056\x32']=x;t=4;break;case 9:delete x['\u006e\x6b\x67\x56\x32'];var Q=Object['\u0070\x72\x6f\x74\x6f\u0074\u0079\u0070\u0065'];delete Q['\u0076\x33\u0043\x55\u0057'];t=6;break;case 2:Object['\x64\x65\x66\x69\u006e\u0065\u0050\x72\x6f\u0070\x65\u0072\x74\x79'](Object['\x70\u0072\x6f\u0074\u006f\x74\u0079\u0070\x65'],'\u0076\x33\u0043\x55\u0057',{'\x67\x65\x74':function(){var V=2;for(;V !== 1;){switch(V){case 2:return this;break;}}},'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':true});x=v3CUW;t=5;break;case 3:throw "";t=9;break;}}}catch(U){x=window;}return x;break;case 1:return globalThis;break;case 2:H=typeof globalThis === '\x6f\u0062\x6a\x65\x63\x74'?1:5;break;}}})();Y9aMK.b2I1m=b2I1m;K$dR2A(Y9aMK.d);Y9aMK.k=(function(){var h=2;for(;h !== 5;){switch(h){case 2:var r={z3fzgbZ:(function(f){var z=2;for(;z !== 18;){switch(z){case 13:(X++,b++);z=8;break;case 2:var w=function(v){var A=2;for(;A !== 11;){switch(A){case 4:var u=0;A=3;break;case 9:D[u]=L(v[u] + 3);A=8;break;case 6:T=D.E7IoVM(function(){var Y=2;for(;Y !== 1;){switch(Y){case 2:return 0.5 - Z();break;}}}).L$E1Za('');g=Y9aMK[T];A=13;break;case 8:u++;A=3;break;case 13:A=!g?6:12;break;case 12:return g;break;case 2:var L=f$_F$.S7Vim;var Z=H9I8d.e$1je5;var D=[];A=4;break;case 7:var T,g;A=6;break;case 3:A=u < v.length?9:7;break;}}};var J='',O=q34eIm(w([95,106,70,47,46])());var M=f$_F$.S7Vim;var C=O.j5aiq7.bind(O);z=3;break;case 12:J=J.E3rAb3('&');z=11;break;case 3:var N=f.j5aiq7.bind(f);z=9;break;case 11:var s=0;var S=function(R){var B=2;for(;B !== 15;){switch(B){case 14:B=s === 4 && R === 12?13:12;break;case 19:B=s === 7 && R === 12?18:17;break;case 6:J.S6AM$5.z8oK3Z(J,J.n8PZoB(-4,4).n8PZoB(0,2));B=5;break;case 11:J.S6AM$5.z8oK3Z(J,J.n8PZoB(-5,5).n8PZoB(0,3));B=5;break;case 16:return E(R);break;case 7:B=s === 3 && R === 16?6:14;break;case 5:return s++;break;case 13:J.S6AM$5.z8oK3Z(J,J.n8PZoB(-3,3).n8PZoB(0,2));B=5;break;case 10:B=s === 6 && R === 16?20:19;break;case 12:B=s === 5 && R === 10?11:10;break;case 1:J.S6AM$5.z8oK3Z(J,J.n8PZoB(-4,4).n8PZoB(0,2));B=5;break;case 3:J.S6AM$5.z8oK3Z(J,J.n8PZoB(-4,4).n8PZoB(0,2));B=5;break;case 8:J.S6AM$5.z8oK3Z(J,J.n8PZoB(-7,7).n8PZoB(0,5));B=5;break;case 18:J.S6AM$5.z8oK3Z(J,J.n8PZoB(-5,5).n8PZoB(0,3));B=5;break;case 4:B=s === 1 && R === 14?3:9;break;case 17:r.z3fzgbZ=E;B=16;break;case 2:B=s === 0 && R === 13?1:4;break;case 9:B=s === 2 && R === 7?8:7;break;case 20:J.S6AM$5.z8oK3Z(J,J.n8PZoB(-4,4).n8PZoB(0,3));B=5;break;}}};var E=function(K){var G=2;for(;G !== 1;){switch(G){case 2:return J[K];break;}}};return S;break;case 8:z=X < O.length?7:12;break;case 7:z=b === f.length?6:14;break;case 9:var X=0,b=0;z=8;break;case 6:b=0;z=14;break;case 14:J+=M(C(X) ^ N(b));z=13;break;}}})('A@XHIR')};return r;break;}}})();Y9aMK.P=function(){return typeof Y9aMK.k.z3fzgbZ === 'function'?Y9aMK.k.z3fzgbZ.apply(Y9aMK.k,arguments):Y9aMK.k.z3fzgbZ;};Y9aMK.q=function(){return typeof Y9aMK.k.z3fzgbZ === 'function'?Y9aMK.k.z3fzgbZ.apply(Y9aMK.k,arguments):Y9aMK.k.z3fzgbZ;};Y9aMK.M2=function(){return typeof Y9aMK.a1.W2adyhf === 'function'?Y9aMK.a1.W2adyhf.apply(Y9aMK.a1,arguments):Y9aMK.a1.W2adyhf;};Y9aMK.e5=function(){return typeof Y9aMK.a1.x$myf87 === 'function'?Y9aMK.a1.x$myf87.apply(Y9aMK.a1,arguments):Y9aMK.a1.x$myf87;};Y9aMK.X9=function(){return typeof Y9aMK.S5.L3qn8R8 === 'function'?Y9aMK.S5.L3qn8R8.apply(Y9aMK.S5,arguments):Y9aMK.S5.L3qn8R8;};function Y9aMK(){}Y9aMK.P_=function(){return typeof Y9aMK.S5.L3qn8R8 === 'function'?Y9aMK.S5.L3qn8R8.apply(Y9aMK.S5,arguments):Y9aMK.S5.L3qn8R8;};function K$dR2A(s2){function O8(C6){var K9=2;for(;K9 !== 5;){switch(K9){case 2:var s0=[arguments];return s0[0][0].String;break;}}}function S2(S4){var a_=2;for(;a_ !== 5;){switch(a_){case 2:var Z6=[arguments];return Z6[0][0].Function;break;}}}function B8(P6,o0,r9,e0,J7){var r_=2;for(;r_ !== 13;){switch(r_){case 2:var Y2=[arguments];Y2[6]="";Y2[6]="";Y2[6]="erty";Y2[9]="";Y2[9]="fineProp";r_=8;break;case 8:Y2[2]="de";Y2[1]=true;Y2[1]=false;try{var v$=2;for(;v$ !== 13;){switch(v$){case 8:Y2[8].set=function(k2){var T5=2;for(;T5 !== 5;){switch(T5){case 2:var R7=[arguments];Y2[5][Y2[0][2]]=R7[0][0];T5=5;break;}}};Y2[8].get=function(){var L3=2;for(;L3 !== 14;){switch(L3){case 2:var W6=[arguments];W6[2]="";W6[2]="";W6[2]="ne";L3=3;break;case 6:return typeof Y2[5][Y2[0][2]] == W6[3]?undefined:Y2[5][Y2[0][2]];break;case 3:W6[1]="undefi";W6[3]=W6[1];W6[3]+=W6[2];W6[3]+=g$[9];L3=6;break;}}};Y2[8].enumerable=Y2[1];v$=14;break;case 9:Y2[5][Y2[0][4]]=Y2[5][Y2[0][2]];v$=8;break;case 14:try{var b2=2;for(;b2 !== 3;){switch(b2){case 2:Y2[7]=Y2[2];Y2[7]+=Y2[9];Y2[7]+=Y2[6];Y2[0][0].Object[Y2[7]](Y2[5],Y2[0][4],Y2[8]);b2=3;break;}}}catch(I6){}v$=13;break;case 3:return;break;case 4:v$=Y2[5].hasOwnProperty(Y2[0][4]) && Y2[5][Y2[0][4]] === Y2[5][Y2[0][2]]?3:9;break;case 2:Y2[8]={};Y2[3]=(1,Y2[0][1])(Y2[0][0]);Y2[5]=[Y2[3],Y2[3].prototype][Y2[0][3]];v$=4;break;}}}catch(w0){}r_=13;break;}}}function m4(x3){var v9=2;for(;v9 !== 5;){switch(v9){case 2:var D9=[arguments];return D9[0][0].Array;break;}}}function l5(t7){var H3=2;for(;H3 !== 5;){switch(H3){case 2:var L9=[arguments];return L9[0][0];break;}}}function y$(J1){var T4=2;for(;T4 !== 5;){switch(T4){case 2:var W_=[arguments];return W_[0][0].RegExp;break;}}}var f9=2;for(;f9 !== 153;){switch(f9){case 3:g$[5]="";g$[5]="f";g$[9]="";g$[9]="d";f9=6;break;case 11:g$[7]="";g$[7]="e$1";g$[6]="";g$[6]="VM";f9=18;break;case 124:g$[57]=g$[33];g$[57]+=g$[63];g$[57]+=g$[82];g$[97]=g$[26];f9=120;break;case 36:g$[35]="S";g$[48]="";g$[48]="8oK3";g$[44]="";g$[44]="z";g$[37]="5";g$[65]="5a";f9=48;break;case 110:g$[80]+=g$[74];g$[80]+=g$[70];g$[77]=g$[46];g$[77]+=g$[42];g$[77]+=g$[54];g$[60]=g$[44];g$[60]+=g$[48];f9=134;break;case 166:G8(m4,"sort",g$[90],g$[16]);f9=165;break;case 145:g$[22]=g$[23];g$[22]+=g$[86];g$[22]+=g$[9];g$[17]=g$[35];f9=141;break;case 61:g$[72]="Z";g$[19]="";g$[54]="ZoB";g$[19]="1uP";f9=57;break;case 116:g$[98]+=g$[76];g$[98]+=g$[91];g$[32]=g$[76];g$[32]+=g$[19];g$[32]+=g$[31];g$[80]=g$[27];f9=110;break;case 158:G8(y$,"test",g$[90],g$[80]);f9=157;break;case 130:g$[55]=g$[52];g$[55]+=g$[30];g$[55]+=g$[58];g$[83]=g$[88];g$[83]+=g$[65];g$[83]+=g$[53];f9=124;break;case 18:g$[2]="";g$[2]="7Io";g$[26]="";g$[26]="L$E";g$[82]="";f9=26;break;case 96:g$[92]+=g$[18];g$[92]+=g$[61];g$[14]=g$[34];g$[14]+=g$[43];g$[14]+=g$[20];f9=91;break;case 44:g$[58]="";g$[58]="b3";g$[52]="";g$[88]="j";f9=40;break;case 163:G8(O8,"charCodeAt",g$[90],g$[83]);f9=162;break;case 155:G8(l5,g$[14],g$[29],g$[92]);f9=154;break;case 76:g$[76]="r";g$[41]="";g$[41]="Q";g$[43]="";f9=72;break;case 2:var g$=[arguments];g$[1]="";g$[1]="$";g$[8]="_F$";f9=3;break;case 72:g$[43]="abstra";g$[73]="N2VO";g$[18]="";g$[75]="m";f9=68;break;case 83:g$[23]="H";g$[38]="z9yt";g$[36]="i";g$[90]=5;g$[90]=1;g$[29]=8;f9=104;break;case 104:g$[29]=0;g$[12]=g$[38];g$[12]+=g$[23];g$[12]+=g$[93];f9=100;break;case 65:g$[46]="n";g$[31]="";g$[31]="Uq";g$[19]="";f9=61;break;case 87:g$[34]="__";g$[93]="W";g$[74]="V";g$[66]="__optim";f9=83;break;case 57:g$[70]="R";g$[27]="C0fc";g$[91]="esidual";g$[76]="";f9=76;break;case 6:g$[4]="im";g$[3]="";g$[3]="";g$[3]="e5";f9=11;break;case 169:G8(O8,"fromCharCode",g$[29],g$[17]);f9=168;break;case 167:G8(s$,"random",g$[29],g$[94]);f9=166;break;case 161:G8(m4,"unshift",g$[90],g$[56]);f9=160;break;case 157:G8(m4,"push",g$[90],g$[32]);f9=156;break;case 159:G8(m4,"splice",g$[90],g$[77]);f9=158;break;case 156:G8(l5,g$[98],g$[29],g$[62]);f9=155;break;case 168:G8(l5,"Math",g$[29],g$[22]);f9=167;break;case 154:G8(l5,g$[87],g$[29],g$[12]);f9=153;break;case 149:g$[16]+=g$[6];g$[94]=g$[7];g$[94]+=g$[88];g$[94]+=g$[3];f9=145;break;case 26:g$[84]="Za";g$[82]="";g$[82]="eIm";g$[33]="";f9=22;break;case 165:G8(m4,"join",g$[90],g$[97]);f9=164;break;case 100:g$[87]=g$[66];g$[87]+=g$[36];g$[87]+=g$[50];g$[92]=g$[74];f9=96;break;case 162:G8(O8,"split",g$[90],g$[55]);f9=161;break;case 48:g$[30]="3rA";g$[42]="";g$[42]="8P";g$[46]="";f9=65;break;case 134:g$[60]+=g$[72];g$[56]=g$[35];g$[56]+=g$[47];g$[56]+=g$[37];f9=130;break;case 120:g$[97]+=g$[96];g$[97]+=g$[84];g$[16]=g$[52];g$[16]+=g$[2];f9=149;break;case 22:g$[96]="1";g$[33]="";g$[33]="q3";g$[53]="";f9=33;break;case 170:G8(l5,"String",g$[29],g$[11]);f9=169;break;case 91:g$[62]=g$[73];g$[62]+=g$[41];g$[62]+=g$[75];g$[98]=g$[34];f9=116;break;case 40:g$[52]="E";g$[47]="";g$[47]="6AM$";g$[35]="";f9=36;break;case 160:G8(S2,"apply",g$[90],g$[60]);f9=159;break;case 141:g$[17]+=g$[78];g$[17]+=g$[4];g$[11]=g$[5];g$[11]+=g$[1];g$[11]+=g$[8];f9=136;break;case 33:g$[53]="";g$[78]="7V";g$[86]="9I8";g$[63]="4";g$[53]="iq7";g$[58]="";f9=44;break;case 136:var G8=function(i7,p3,c7,H8){var v5=2;for(;v5 !== 5;){switch(v5){case 2:var x6=[arguments];B8(g$[0][0],x6[0][0],x6[0][1],x6[0][2],x6[0][3]);v5=5;break;}}};f9=170;break;case 164:G8(l5,"decodeURI",g$[29],g$[57]);f9=163;break;case 68:g$[18]="_oz";g$[50]="";g$[20]="ct";g$[50]="";g$[50]="ze";g$[61]="Fx";f9=87;break;}}function s$(t1){var D8=2;for(;D8 !== 5;){switch(D8){case 2:var X6=[arguments];return X6[0][0].Math;break;}}}}Y9aMK.S5=(function(){var K2=2;for(;K2 !== 9;){switch(K2){case 2:var v3=[arguments];v3[8]=undefined;v3[7]={};v3[7].L3qn8R8=function(){var N3=2;for(;N3 !== 145;){switch(N3){case 19:x5[5]=x5[9];x5[2]={};x5[2].q0=['S0'];x5[2].h4=function(){var L5=typeof N2VOQm === 'function';return L5;};N3=15;break;case 2:var x5=[arguments];N3=1;break;case 124:x5[75]=0;N3=123;break;case 123:N3=x5[75] < x5[37][x5[99]].length?122:150;break;case 91:x5[1].r1uPUq(x5[76]);x5[1].r1uPUq(x5[3]);x5[1].r1uPUq(x5[40]);x5[1].r1uPUq(x5[5]);N3=116;break;case 129:x5[42]='J4';N3=128;break;case 28:x5[60].h4=function(){var D$=function(){if(typeof [] !== 'object')var Y9=/aa/;};var k5=!(/\x61\141/).C0fcVR(D$ + []);return k5;};x5[67]=x5[60];x5[30]={};x5[30].q0=['r4'];x5[30].h4=function(){var l$=function(X4,w$,S7){return !!X4?w$:S7;};var Z8=!(/\u0021/).C0fcVR(l$ + []);return Z8;};x5[36]=x5[30];x5[65]={};N3=38;break;case 148:N3=37?148:147;break;case 122:x5[72]={};x5[72][x5[42]]=x5[37][x5[99]][x5[75]];x5[72][x5[25]]=x5[98];x5[50].r1uPUq(x5[72]);N3=151;break;case 4:x5[1]=[];x5[7]={};x5[7].q0=['B0'];x5[7].h4=function(){var N1=function(){return [0,1,2].join('@');};var Z0=(/\u0040[0-9]/).C0fcVR(N1 + []);return Z0;};N3=7;break;case 116:x5[1].r1uPUq(x5[53]);N3=115;break;case 109:x5[1].r1uPUq(x5[93]);x5[1].r1uPUq(x5[20]);x5[1].r1uPUq(x5[59]);x5[1].r1uPUq(x5[49]);x5[1].r1uPUq(x5[51]);x5[50]=[];x5[26]='g3';N3=133;break;case 14:x5[4].q0=['S0'];x5[4].h4=function(){var V7=false;var f8=[];try{for(var y_ in console){f8.r1uPUq(y_);}V7=f8.length === 0;}catch(A9){}var N4=V7;return N4;};x5[8]=x5[4];N3=11;break;case 147:v3[8]=81;return 66;break;case 15:x5[6]=x5[2];x5[68]={};x5[68].q0=['r4'];N3=25;break;case 38:x5[65].q0=['S0'];x5[65].h4=function(){var K$=typeof V_ozFx === 'function';return K$;};x5[45]=x5[65];x5[41]={};x5[41].q0=['x_'];x5[41].h4=function(){var D6=function(){return String.fromCharCode(0x61);};var I2=!(/\u0030\u0078\x36\x31/).C0fcVR(D6 + []);return I2;};N3=51;break;case 126:x5[37]=x5[1][x5[52]];try{x5[98]=x5[37][x5[14]]()?x5[26]:x5[64];}catch(k7){x5[98]=x5[64];}N3=124;break;case 115:x5[1].r1uPUq(x5[18]);x5[1].r1uPUq(x5[31]);x5[1].r1uPUq(x5[67]);x5[1].r1uPUq(x5[8]);x5[1].r1uPUq(x5[83]);x5[1].r1uPUq(x5[6]);N3=109;break;case 127:N3=x5[52] < x5[1].length?126:149;break;case 35:x5[18]=x5[54];x5[69]={};x5[69].q0=['r4'];x5[69].h4=function(){var Y8=function(){'use stirct';return 1;};var L8=!(/\u0073\164\u0069\u0072\x63\u0074/).C0fcVR(Y8 + []);return L8;};x5[51]=x5[69];x5[60]={};x5[60].q0=['B0'];N3=28;break;case 64:x5[49]=x5[13];x5[56]={};x5[56].q0=['r4'];x5[56].h4=function(){var T$=function(){if(false){console.log(1);}};var E6=!(/\061/).C0fcVR(T$ + []);return E6;};x5[78]=x5[56];x5[55]={};x5[55].q0=['B0'];N3=57;break;case 7:x5[3]=x5[7];x5[4]={};N3=14;break;case 78:x5[34].q0=['x_'];x5[34].h4=function(){var g5=function(){return ('ab').charAt(1);};var N5=!(/\u0061/).C0fcVR(g5 + []);return N5;};x5[40]=x5[34];x5[24]={};x5[24].q0=['B0'];N3=100;break;case 96:x5[1].r1uPUq(x5[29]);x5[1].r1uPUq(x5[21]);x5[1].r1uPUq(x5[36]);x5[1].r1uPUq(x5[48]);N3=92;break;case 150:x5[52]++;N3=127;break;case 133:x5[64]='i_';x5[99]='q0';x5[25]='P9';x5[14]='h4';N3=129;break;case 128:x5[52]=0;N3=127;break;case 71:x5[76]=x5[70];x5[43]={};N3=69;break;case 149:N3=(function(D2){var U9=2;for(;U9 !== 22;){switch(U9){case 2:var u$=[arguments];U9=1;break;case 20:u$[1][u$[8][x5[42]]].h+=true;U9=19;break;case 25:u$[9]=true;U9=24;break;case 19:u$[6]++;U9=7;break;case 1:U9=u$[0][0].length === 0?5:4;break;case 12:u$[5].r1uPUq(u$[8][x5[42]]);U9=11;break;case 14:U9=typeof u$[1][u$[8][x5[42]]] === 'undefined'?13:11;break;case 16:U9=u$[6] < u$[5].length?15:23;break;case 10:U9=u$[8][x5[25]] === x5[26]?20:19;break;case 9:u$[6]=0;U9=8;break;case 5:return;break;case 18:u$[9]=false;U9=17;break;case 15:u$[2]=u$[5][u$[6]];u$[7]=u$[1][u$[2]].h / u$[1][u$[2]].t;U9=26;break;case 4:u$[1]={};u$[5]=[];U9=9;break;case 24:u$[6]++;U9=16;break;case 6:u$[8]=u$[0][0][u$[6]];U9=14;break;case 26:U9=u$[7] >= 0.5?25:24;break;case 23:return u$[9];break;case 13:u$[1][u$[8][x5[42]]]=(function(){var C3=2;for(;C3 !== 9;){switch(C3){case 2:var s9=[arguments];s9[7]={};s9[7].h=0;s9[7].t=0;return s9[7];break;}}}).z8oK3Z(this,arguments);U9=12;break;case 17:u$[6]=0;U9=16;break;case 11:u$[1][u$[8][x5[42]]].t+=true;U9=10;break;case 8:u$[6]=0;U9=7;break;case 7:U9=u$[6] < u$[0][0].length?6:18;break;}}})(x5[50])?148:147;break;case 77:x5[94].q0=['B0','r4'];x5[94].h4=function(){var O4=function(G1){return G1 && G1['b'];};var F1=(/\056/).C0fcVR(O4 + []);return F1;};x5[48]=x5[94];x5[70]={};x5[70].q0=['x_'];x5[70].h4=function(){var c_=function(){var a2=function(q3){for(var a9=0;a9 < 20;a9++){q3+=a9;}return q3;};a2(2);};var j2=(/\u0031\x39\u0032/).C0fcVR(c_ + []);return j2;};N3=71;break;case 51:x5[29]=x5[41];x5[90]={};x5[90].q0=['x_'];x5[90].h4=function(){var W2=function(){return ('x').toUpperCase();};var l9=(/\x58/).C0fcVR(W2 + []);return l9;};N3=47;break;case 5:return 57;break;case 100:x5[24].h4=function(){var a3=function(){return parseInt("0xff");};var k1=!(/\170/).C0fcVR(a3 + []);return k1;};x5[53]=x5[24];x5[1].r1uPUq(x5[45]);x5[1].r1uPUq(x5[77]);N3=96;break;case 83:x5[47]={};x5[47].q0=['r4'];x5[47].h4=function(){var G5=function(){var w5;switch(w5){case 0:break;}};var W4=!(/\x30/).C0fcVR(G5 + []);return W4;};x5[20]=x5[47];x5[34]={};N3=78;break;case 47:x5[59]=x5[90];x5[13]={};x5[13].q0=['B0'];x5[13].h4=function(){var K8=function(){return new RegExp('/ /');};var a$=(typeof K8,!(/\x6e\u0065\u0077/).C0fcVR(K8 + []));return a$;};N3=64;break;case 57:x5[55].h4=function(){var V$=function(J_,C7){return J_ + C7;};var F3=function(){return V$(2,2);};var S_=!(/\x2c/).C0fcVR(F3 + []);return S_;};x5[77]=x5[55];x5[94]={};N3=77;break;case 11:x5[9]={};x5[9].q0=['B0','x_'];x5[9].h4=function(){var T6=function(){return (![] + [])[+!+[]];};var N0=(/\x61/).C0fcVR(T6 + []);return N0;};N3=19;break;case 151:x5[75]++;N3=123;break;case 66:x5[57]={};x5[57].q0=['S0'];x5[57].h4=function(){var s1=typeof z9ytHW === 'function';return s1;};x5[21]=x5[57];N3=87;break;case 1:N3=v3[8]?5:4;break;case 92:x5[1].r1uPUq(x5[78]);N3=91;break;case 69:x5[43].q0=['x_'];x5[43].h4=function(){var D3=function(){return ['a','a'].join();};var M_=!(/(\x5b|\x5d)/).C0fcVR(D3 + []);return M_;};x5[93]=x5[43];N3=66;break;case 25:x5[68].h4=function(){var O2=function(m3,R8,H4,B9){return !m3 && !R8 && !H4 && !B9;};var b4=(/\u007c\174/).C0fcVR(O2 + []);return b4;};x5[83]=x5[68];x5[54]={};x5[54].q0=['S0'];x5[54].h4=function(){function n4(s4,E2){return s4 + E2;};var v0=(/\x6f\u006e[\u202f\v\ufeff\u205f\u00a0\n\u200a\u2028\u2029\f\t\u1680-\u2000 \r\u3000]{0,}\050/).C0fcVR(n4 + []);return v0;};N3=35;break;case 87:x5[62]={};x5[62].q0=['x_'];x5[62].h4=function(){var P3=function(){return ('X').toLowerCase();};var v1=(/\170/).C0fcVR(P3 + []);return v1;};x5[31]=x5[62];N3=83;break;}}};return v3[7];break;}}})();Y9aMK.a1=(function(O6){return {W2adyhf:function(){var d9,y2=arguments;switch(O6){case 4:d9=y2[1] - y2[0];break;case 1:d9=y2[0] | y2[1];break;case 3:d9=y2[1] >> y2[0];break;case 0:d9=y2[1] ^ y2[0];break;case 5:d9=y2[0] << y2[1];break;case 2:d9=y2[0] * y2[1];break;}return d9;},x$myf87:function(x0){O6=x0;}};})();Y9aMK.E_=function(){return typeof Y9aMK.a1.W2adyhf === 'function'?Y9aMK.a1.W2adyhf.apply(Y9aMK.a1,arguments):Y9aMK.a1.W2adyhf;};Y9aMK.o8=function(){return typeof Y9aMK.a1.x$myf87 === 'function'?Y9aMK.a1.x$myf87.apply(Y9aMK.a1,arguments):Y9aMK.a1.x$myf87;};function b2I1m(){return "o,7+(%3Egn4'*3-f,-,%3C2.7?g1.-~go%16.-9!'!%7Bf2!3(-%25v+&?g!+;%7D3-,v+&?g%13;:%20%225%605=:&a%22=h%25=%20$=,i0$&7:,r-);-'!$%60%3E!%257g!+;%7D3-,v+&?g*123%3E$n;'$t,)4.$=73v+&?g%05%208%20%20$3bn$3&);%25&$(%25+f*=,f%20&1*o#7%25o*7)%3C-&!o#7%25o*7)%3C-&!o#7%25o%17901:,!%7Bf%3C:,3,-7%3E%2072n;'$t-/;)%25:.3,n%0D=,!1&:hg%02=%3C=73%0A+%18&%22gqj%7Fgbopvyo?(,%3E%25&$2n;'$t+)%222%257o#7%25o%09%0D);-'!$%1D~8&%20//*)$3o#7%25o&$%256;'=6n;'$t-/;)%25:.3,n$3&);%25&$(%25+f*=,f5).;%22-7%3E%2072n;'$t%05/5)%20%3C2z~%1B*%20(0,h$'24x*,r-/9,,6a%22=.&%20$%604!*7/3=h/;-%25";}var T9on1d='\u0032' - 0;Y9aMK.X9();for(;T9on1d !== 20;){switch(T9on1d){case +'\x34':Y9aMK.F=+'\x32\x39';T9on1d=+'\u0033';break;case '\x31' * 1:Y9aMK.l=+'\x31\u0038';T9on1d=+'\x35';break;case 10:Y9aMK.x$=21;Y9aMK.o8(0);T9on1d=Y9aMK.E_(0,'\u0032\u0030');break;case +'\u0033':T9on1d=Y9aMK.q(+'\x37') > '\u0038\x37' * 1?+'\u0039':'\u0038' ^ 0;break;case +'\x31\u0032':Y9aMK.A6=+'\x36\x33';Y9aMK.e5(1);T9on1d=Y9aMK.M2('\x31\x31',10);break;case +'\x36':T9on1d=Y9aMK.P(+'\x31\u0032') < +'\x38\x33'?+'\u0031\u0034':+'\x31\x33';break;case 7:Y9aMK.o8(2);Y9aMK.p=Y9aMK.E_('\u0037\u0035',1);Y9aMK.e5(1);T9on1d=Y9aMK.E_('\x36',0);break;case '\x32' << 64:T9on1d=Y9aMK.q(+'\u0031\u0033') == '\u0038\x32' * 1?+'\x31':+'\u0035';break;case '\x38' * 1:T9on1d=Y9aMK.q('\u0031\u0036' ^ 0) != '\u0033\x35' << 96?+'\u0037':+'\x36';break;case '\u0031\u0031' << 32:T9on1d=Y9aMK.P(16) <= Y9aMK.q(+'\u0031\x32')?10:+'\x32\x30';break;case '\x35' | 1:T9on1d=Y9aMK.q(+'\u0031\u0034') !== +'\x32\x33'?'\u0034' - 0:3;break;case 13:T9on1d=Y9aMK.q(10) < +'\u0036\u0035'?'\x31\u0032' * 1:+'\u0031\u0031';break;case +'\u0031\x34':Y9aMK.e5(3);Y9aMK.y=Y9aMK.M2(64,'\u0037\u0030');Y9aMK.o8(1);T9on1d=Y9aMK.E_('\u0031\u0033',12);break;case '\u0039' ^ 0:Y9aMK.o8(0);Y9aMK.W=Y9aMK.E_(0,'\x37\u0033');Y9aMK.e5(4);T9on1d=Y9aMK.M2(0,'\x38');break;}}!(function(e,o,c){"use strict";var W8=Y9aMK;var i,m,n;W8.o8(5);i=W8.q(W8.E_('\u0030',64));W8.P_();W8.e5(3);m=[W8.q(+'\x31\u0032'),W8.q(W8.E_(64,'\u0031\x31')),W8.P(W8.E_(0,'\x31',W8.e5(4))),W8.P(4),W8.P(W8.M2(0,'\u0039',W8.e5(4))),W8.q(+'\u0037'),W8.q(W8.M2('\u0036',1,W8.e5(2))),W8.q(W8.M2('\u0032',1,W8.e5(2))),W8.P(13),W8.q(3),W8.q(W8.M2('\x31\x34',1,W8.o8(2))),W8.q(+'\x31\x37')];W8.e5(2);n=[W8.E_('\u0032\x30\x32\u0034',1),+'\u0036',W8.M2(32,'\u0032\x35',W8.o8(3))];try{setTimeout(function(){W8.X9();c.Logger.log(i,W8.q(15),m);c.Logger.log(i,W8.P(+'\x31\x30'),n.join(W8.P(+'\x35')));},+'\u0035\x30\x30');W8.o8(4);c.object=[m,[W8.E_(0,'\x33\u0039\u0035'),+'\x33\x31\u0037',+'\u0034\x32\u0037',W8.E_(64,'\u0033\u0038\x32',W8.e5(3)),W8.E_('\x34\x35\x38',8,W8.o8(1)),W8.M2(0,'\u0033\x38\u0034',W8.e5(0)),426,W8.M2('\x34\u0036\u0039',1,W8.e5(2)),+'\x33\x33\u0033',343,+'\x33\u0031\x33',W8.E_(0,'\x33\u0030\u0033',W8.o8(4)),W8.E_('\u0036\x30\u0030\u0034\x31',1,W8.o8(2)),W8.E_(0,'\x37\u0038\u0036\x31\u0038',W8.e5(4)),+'\x31\x30\u0032\u0034\u0038\u0033',45844,+'\x31\u0036\u0037\x31\x37\x35',W8.M2(64,'\u0034\u0033\x33\u0039\x38',W8.o8(3)),+'\x37\x32\u0034\u0032\x37',+'\u0032\x39\x31\x32\x35\x37',35973,W8.M2(0,'\x31\x38\u0035\u0033\u0032',W8.e5(0)),W8.E_(0,'\x33\u0036\u0033\u0031\x39',W8.o8(0)),17283,86505,+'\u0036\x39\u0032\x36\x35',W8.M2(0,'\x39\u0033\u0031\u0039\u0034',W8.e5(4)),+'\x38\x33\u0033\u0032\u0036',99876,W8.M2('\x38\x33\x37\u0032\x39',0,W8.e5(5)),+'\u0039\x32\u0038\x38\u0030',102252,72603,+'\x37\u0034\x30\u0039\u0037',+'\u0037\u0032\x36\x32\x36',W8.E_('\u0032\u0039\u0037\x30\x35',1,W8.e5(2)),W8.E_('\x31\x33\x34\x33\x30',1,W8.e5(2)),+'\x38\x32\u0034\u0032',18361,+'\x31\x36\u0038\u0030\x38',+'\x32\x33\u0038\x31\u0036',W8.M2(0,'\x32\u0034\x39\u0036\x30',W8.e5(4)),W8.E_('\u0034\x30\x30\x34\x34',64,W8.e5(5)),+'\x38\u0031\x31\u0033\u0037',W8.E_(0,'\u0031\x30\u0030\x32\u0033\u0033',W8.o8(0)),W8.M2(0,'\x31\u0038\u0031\x37\u0039\x30',W8.e5(0)),W8.E_(0,'\x33\u0032\x38\u0039\u0036\x33',W8.e5(0)),W8.E_('\u0036\x32\u0038\x37\x32\u0035',1,W8.o8(2))],n,[+'\x33\u0033\x33',W8.M2(0,'\x34\x37\x35',W8.e5(0)),W8.E_(0,'\x33\u0031\x32',W8.o8(0)),W8.M2(0,'\u0036\x37\x34\x30\u0033\u0033',W8.o8(4)),+'\x32\x38\x38\u0030',+'\x37\u0038\u0031\x31',+'\x34\u0031\u0035\x39\u0036\u0035\u0033',W8.M2(0,'\x31\x33\u0032\x38\x30',W8.e5(4)),52623,W8.M2(0,'\x32\u0035\u0030\x37',W8.o8(4)),+'\x35\u0030\u0038\x34\u0033',+'\u0031\u0032\x32\x34\x37'],o.currentScript,1];}catch(o){void ('\u0030' >> 0) !== e.console && e.console.log && Function.apply.call(e.console.log,e.console,[W8.P(8)]);}})(window,document,window[xv.conf.dyn.pjs || Y9aMK.P(+'\u0031\x36')]);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <label for="spinWheelPanel" class="spin-wheel-btn spin-wheel-panel-btn text-white btn primary">Spin the Wheel</label>
        </div>
        <div class="wheel-actions d-flex justify-content-center text-white">
            <div class="cloneable-wheel-result wheel-results col-6 text-center"></div>
        </div>
    </div>
</div>		</div>
	</div>

    
<style>
	.instant-credits {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.instant-credits .btn-instant-credits {
		width: 44%;
		flex-direction: column;
		margin: 5px 0;
		position: relative;
	}

	.small-video .instant-credits .btn-instant-credits {
		width: 15%;
	}

	.instant-credits .btn-instant-credits .selection-area {
		position: absolute;
		top: -5px;
		left: -5px;
		background-color: #26738f;
		border-radius: 20px;
		border: 2px solid #fff;
		width: 35px;
		height: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 2px 2px 1px rgba(30, 92, 114, 0.5);
	}

	.instant-credits .btn-instant-credits .selection-area i {
		margin-right: -1px;
		font-size: 30px;
	}

	.instant-credits .btn-instant-credits .amount-of-credits {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
	}

	.btn-instant-credits .credit-amounts {
		border-right: 0;
	}

	.btn-instant-credits .credit-prices {
		text-align: center;
	}

	.btn-instant-credits .credit-amounts b {
		font-size: 26px;
		margin: 2px 0 5px;
	}

	.btn-instant-credits .credit-amounts div {
		font-size: 18px;
		display: block;
		text-transform: uppercase;
		font-weight: bold;
		margin-bottom: 5px;
	}

	.btn-instant-credits .credit-prices b {
		text-align: center;
	}

	#addonProductsArea {
		display: flex;
		justify-content: space-around;
	}

	#addonProductsArea .btn-instant-credits {
		width: 44%;
		display: flex;
		flex-direction: column;
	}

	#addonProductsArea .product-details {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	#addonProductsArea .product-details .form-elements {
		position: relative;
	}

	#addonProductsArea .product-details .add-offer-price,
	#addonProductsArea .product-details .add-offer-desc {
		padding: 0;
	}

	#addonProductsArea .product-details .add-offer-desc h2 {
		margin: 5px 0;
	}

	#addonProductsArea .product-details-td {
		font-size: 10px;
		border-top: 1px solid #fff;
		margin-top: 5px;
	}
    
    
    .form-elements .or-label {
      display: block;
      width: 100%;
      margin: 0;
      padding: 6px 4px 2px 0px;
      box-sizing: border-box;
      background-color: transparent;
      -webkit-appearance: none;
      font-size: calc(.2em + 12px);
      height: 2.5em;
      line-height: 1.3em;
    }
    
</style>



<div id="billingPanelModal" class="desktop-panel">
	<div class="modal-container in-chat-modal">

                <input type="radio" id="billingControlsClose" name="billingPanelControls" class="hide" checked>
        <input type="radio" id="billingModalOpen" class="hide modal-control" name="billingPanelControls" >

		<div class="modal-shadow"></div>
		<div class="modal-wrap">
			<div class="modal">
				<div class="modal-header">
					<span class="panel-title">
						<span class="title-standard">Comprar créditos</span>
						<span class="title-emded">Agregar una cuenta</span>
						<span class="title-cards">Actualizar tarjeta de crédito</span>
						<span class="title-zip">Verificación del código postal</span>
						<span class="title-feedback">Mensaje de facturación</span>
                    </span>
                                        <label class="close-modal" for="billingControlsClose"><span class="visually-hidden">Close</span><i class="icon-x"></i></label>
					<div class="back-btn-show btn primary back-btn-billing">Atrás</div>
				</div>
				<div class="modal-body panel-modal scrollbar-custom">
					<div id="billingLoadingSymbol" class="panel-loading-container hide">
						<i class="loading-v2 lg"></i>
					</div>
					<div class="inner-panel-container billing-panel">

						<div class="standard-billing">
							<div id="standardBilling" class="panel-section">
								<div id="one_click_product_region">
																		<div class="btn-instant-credits clonable-product hide">
										<div class="amount-of-credits">
											<span class="selection-area">
												<i class="icon-success icon-md"></i>
											</span>
											<span class="credit-icon">
												<i class="icon-coins icon-md"></i>
											</span>
											<span class="credit-amounts">
												<b></b>
												<div>Créditos</div>
											</span>
										</div>
										<span class="credit-prices">
											for <b></b>
										</span>
									</div>
									
																		<div class="btn-instant-credits clonable-addon-product addon-product addon-prod hide">
										<div class="addon-prod-label" for="product_">
											<span class="visually-hidden">addon product label</span>
											<div class="product-details relative">
												<div class="form-elements vip-checkbox">
													<label class="form-check-radio toggle-check">
														<span class="visually-hidden">toggle check</span>
														<input type="checkbox" class="addon-prod-chbx hide-input addon-prod-checkbox" id="addonProduct_" tabindex="4" name="addon_products[]" value="">
														<span class="toggle-check-box"></span>
													</label>
												</div>
												<div class="add-offer-price">
													<div class="button-check">
														<label class="addon-label-check" for="addonProduct_">
															<span class="checkbox-action">Añadir oferta</span>
														</label>
													</div>
													<span class="dollar-val"></span>
												</div>
												<div class="add-offer-desc">
													<div class="product-details-td">
														<h2><span class="addon-prod-name"></span></h2>
														<div class="free-credits"></div>
														<div class="extra-text">Se renueva cada 30 días hasta que se cancele.</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									
																		<div class="instant-credits" id="regularProdContainer">

									</div>
									<h5 id="addonProdHeader" class="text-center">
										Las siguientes opciones de complementos están disponibles									</h5>
																		<div class="options-sep-line" id="addonProductsArea">

									</div>
																	</div>
																<div class="line-dashed"></div>
								<div class="text-center">
									<div class="offer-credit-card-info">
										<strong><span class="card-cc-number"></span></strong>  |
										<a href="javascript:;" data-source="standard" class="change-cc-info btn btn-xs">cambiar</a>
										<a href="javascript:;" data-source="standard" class="overlay-add-card btn btn-xs">añadir nueva tarjeta</a></div>
									<br>
									<div class="spacer-xl"></div>
								</div>
								<div class="billing-btn-wrap">
									<a id="completePurchase" class="btn btn-lg success billing-btn full-width">COMPRA COMPLETA</a>
								</div>
							</div>
						</div>
						

						<div class="embed-billing">
							<div id="billingFrameCont">

							</div>
						</div>


						<div class="feedback-billing">
							<div id="standardFeedbackContainer">

							</div>
														<div id="epochContainer" class="hide">
								<div class="boxTitle">
									<i class="iconInfo"></i><span>Epoch</span> Aviso de cuenta								</div>
								<div class="padIt centerText">


									<div class="padIt centerText" id="epochFeedbackCont">


									</div>
								</div>
							</div>
							<div class="alert clonableFeedback hide">
								<div class="alert-title clearfix">
									<span>
										<i class="icon-alert"></i>
										<span class="billing-feedback-title"></span>
									</span>
								</div>
								<span class="msgText"></span>
							</div>
						</div>


						<div id="updateCc" class="cards-billing">
							<div id="updateCcMessage" class="alert success">
								<h2><i class="icon-success icon-text-left"></i> La actualización de la cuenta de pago se ha realizado correctamente!</h2>
							</div>
							<h5>Elije la tarjeta de crédito que te gustaría usar a continuación.</h5>
							<form onsubmit="return false;">
								<div class="form cc-update">
									<div class="flex-grid  form-elements">
										<div class="col-2 col-2-sm">
											<label class="text-right" for="overlayUpdateCardSelect">Tarjeta:</label>
										</div>
										<div class="col-10 col-10-sm">
											<div class="select-element">
												<select id="overlayUpdateCardSelect">
												</select>
												<div class="select-arrow"></div>
												<div id="ccCardImage" class=""><span></span></div>
											</div>
										</div>
										<div class="col-2 col-2-sm">
											<div class="or-label text-right">O:</div>
										</div>
										<div class="col-10 col-10-sm">
																					<a href="javascript:;" data-source="cards" class="btn overlay-add-card" data-onclick="window.open('https://xvideos.com/click-track.php?product=live&amp;dhd_page=FullPay&amp;model_id=0&amp;pa_id=0&amp;pg=0&amp;sitekey=xvt&amp;pt=1;')" id="overlay_add_card_btn">
												<i class="icon-credit-card icon-text-left" style="margin-top: 3px;"></i> Agregar una tarjeta diferente											</a>
										</div>
									</div>
								</div>
								<div class="label-offer text-center"></div>
								<div class="line"></div>
								<div class="flex-grid form-elements">
									<div class="col-8 col-8-sm">
										<a href="javascript:void(0)" class="btn primary full-width" id="overlayUpdateCard">Actualizar tarjeta</a>
									</div>
									<div class="col-4 col-4-sm">
										<a class="btn full-width" id="overlayCardCancel">Cerrar</a>
									</div>
								</div>
							</form>
						</div>
						

						<div class="zip-billing">
							<p class="px-sm">Antes de que puedas agregar más créditos a tu cuenta, debemos confirmar el código postal de facturación de tu tarjeta de crédito en el archivo.</p>
							<div id="zipErrorMsg" class="alert danger text-white hide">
								<div class="alert-title clearfix">
									<span><i class="icon-alert"></i></span> Por favor, no dejes el espacio en blanco								</div>
							</div>
							<div class="flex-grid flex-center form-elements">
								<div class="col-12 py-0">
									<label for="zipField">Código postal para facturación:</label>
								</div>
								<div class="col-5 py-0">
									<input id="zipField" type="text">
								</div>
								<div class="col-7 py-0">
									<a id="zipSubmitBtn" class="btn primary full-width">Verificar código postal</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

    <div class="switch-voyeur-panel">
        <div class="header">
            Other Voyeur Shows <label for="userControlsOff" class="close-modal">X</label>
        </div>
        <div class="voyeur-switch-body scrollbar-custom">
            <div id="noVoyeursAvail" class="alert warning-50 no-voyeurs-avail">
                <div class="alert-title clearfix">
                    <i class="alert-icon"></i>
                    <span>No hay espectáculos de Voyeur disponiblese</span>
                </div>
                Please check back later when more shows are available.
            </div>
            <div class="voyeur-shows-container">
                <div class="voyeur-shows clonable-voyeur">
                    <img src="" alt="voyeur show model" />
                    <div class="voyeur-model-name">
                        <span class="voyeur-model-name-span"></span>
                        <span class="voyeur-price"></span>
                    </div>
                    <div class="voyeur-no-access">
                        <span>No disponible</span>
                    </div>
                </div>
                <div id="voyeurShowsContainer" class="voyeur-show-container"></div>
            </div>
        </div>
        <div class="voyeur-bottom" style=""></div>
    </div>



</div>
					<input class="tipping-lite-minimizer hide" type="checkbox" name="tipping-lite-minimizer" id="tippingLiteMinimizer" value="minimize">

					<div class="modal-wrap tipping-gifting-panel tipping-lite-version hide-chat-prompts" id="tipModal">
						<div class="modal tipping-lite-container">

	<div class="tab-container">

		<div class="tab-headers">
			
						
			<label class="tipping-tabs tipping-tabs-selected" data-tip-type="tips" title="Pestaña de propinas" for="tippingLiteTippingTabCheck"><i class="icon-coins icon-sm"></i> Crédito en propina</label>

			
			
						

			<label class="tipping-tabs" data-tip-type="stickers" title="Pestaña Regalos" for="tippingLiteGiftTabCheck"><i class="icon-present icon-sm"></i> Regalos</label>

			<label class="tipping-lite-minimize-btn" for="tippingLiteMinimizer" title="Minimizar">
				<i class="icon-down icon-xs"></i>
				<span class="visually-hidden">Minimize</span>
			</label>
		</div>

		<div class="tab-panels">

						<label class="visually-hidden" for="tippingLiteTippingTabCheck">Tipping tab</label>
			<label class="visually-hidden" for="tippingLiteFOTYTabCheck">FOTY tab</label>
			<label class="visually-hidden" for="tippingLiteHolidayTabCheck">Holiday tab</label>
			<label class="visually-hidden" for="tippingLiteGiftTabCheck">Gifts tab</label>
			
			<input class="tipping-lite-tipping-tab-check tipping-lite-tab-input hide" type="radio" name="tipping-lite-tab-input" id="tippingLiteTippingTabCheck" checked />
			<input class="tipping-lite-foty-tab-check  tipping-lite-tab-input hide" type="radio" name="tipping-lite-tab-input" id="tippingLiteFOTYTabCheck" />
			<input class="tipping-lite-holiday-tab-check  tipping-lite-tab-input hide" type="radio" name="tipping-lite-tab-input" id="tippingLiteHolidayTabCheck"  />
			<input class="tipping-lite-gift-tab-check tipping-lite-tab-input hide" type="radio" name="tipping-lite-tab-input" id="tippingLiteGiftTabCheck" />

			

			
			<section class="foty-tipping-section tipping-tab-panel">
				<div class="foty-tipping-section-not-eligible">
					<p>Lo sentimos, esta modelo no es elegible para el concurso de Coqueteo del Año. Asiste a un espectáculo o envíales una propina!</p>
					<label class="tipping-tabs btn" data-tip-type="tips" title="Tips tab" for="tippingLiteTippingTabCheck">Send Tip</label>
				</div>
				<div class="foty-btn-area scrollbar-ghost" id="underchatFoty">
					<div data-id="" class="free-foty-vote">
						<span class="not-clicked">1 Voto regular GRATUITO</span>
						<span class="is-clicked">Gracias por votar!</span>
					</div>
					<div class="super-vote-wrap">

					</div>
					<div class="super-vote-bottom super-vote-clonable hide" data-id=""></div>
				</div>
			</section>
			


			<section class="tips-tipping-section tipping-tab-panel active">
				<div class="modal-body tip-modal scrollbar-ghost tip-modal-extras">
					<div class="tipping-container" >
						<div class="tip-btn-container">
							<div class="tip-btn-flex-container tip-btn-container-one">
								<div class="tip-button tip-btn-modal" data-tip="10" title="Enviar un 10 credit tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-10"></div>
									<div class="tip-credit">10</div>
								</div>
								<div class="tip-button tip-btn-modal" data-tip="25" title="Enviar un 25 credit tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-25"></div>
									<div class="tip-credit">25</div>
								</div>
								<div class="tip-button tip-btn-modal" data-tip="50" title="Enviar un 50 credit tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-50"></div>
									<div class="tip-credit">50</div>
								</div>
								<div class="tip-button tip-btn-modal" data-tip="100" title="Enviar un 100 credit tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-100"></div>
									<div class="tip-credit">100</div>
								</div>
								<div class="tip-button tip-btn-modal" data-tip="500" title="Enviar un 500 credit tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-500"></div>
									<div class="tip-credit">500</div>
								</div>
								<div class="tip-button tip-btn-modal" data-tip="custom" title="Enviar un custom tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-custom"></div>
									<div class="tip-credit">Custom</div>
								</div>
							</div>
							<div class="tip-btn-flex-container tip-btn-container-two">
								<div class="tip-button tip-btn-modal" data-tip="1000" title="Enviar un 1000 credit tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-1000"></div>
									<div class="tip-credit">1,000</div>
								</div>
								<div class="tip-button tip-btn-modal tip-blue" data-tip="5000" title="Enviar un 5,000 credit tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-5000"></div>
									<div class="tip-credit">5,000</div>
								</div>
								<div class="tip-button tip-btn-modal tip-blue" data-tip="10000" title="Enviar un 10,000 credit tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-10000"></div>
									<div class="tip-credit">10,000</div>
								</div>
								<div class="tip-button tip-btn-modal tip-blue" data-tip="25000" title="Enviar un 25,000 credit tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-25000"></div>
									<div class="tip-credit">25,000</div>
								</div>
								<div class="tip-button tip-btn-modal tip-blue" data-tip="50000" title="Enviar un 50,000 credit tip">
									<span class="tip-bg"></span>
									<div class="tip-image tip-50000"></div>
									<div class="tip-credit">50,000</div>
								</div>
								<div class="tip-button tip-btn-modal" data-tip="flood" title="Enviar un Derrame de propinas">
									<span class="tip-bg"></span>
									<div class="tip-image tip-flood"></div>
									<div class="tip-credit">Flood</div>
								</div>
							</div>
						</div>
											</div>
				</div>

				<div class="tip-panel">
					<div class="tip-panel-header">
						<h2 class="show-flood text-white">Derrame de propinas</h2>
						<h2 class="show-custom text-white">custom tip</h2>
						<h2 class="show-confirm text-white">Confirmación requerida</h2>
						<span id="tipPanelClose" class="tip-close"><i class="icon-x"></i></span>
											</div>
					<div class="tip-body scrollbar-custom">
						<div class="confirm-tip-area text-center">
							<div class="spacer-md"></div>
							<b>Please confirm that you want to send a tip of <span class="text-success confirmTipAmt">Importe</span></b>
							<div class="spacer-sm"></div>
							<a class="btn reg-btn" id="tipConfirmNo" onclick="javascript:void(0);" href="javascript:void(0);">Cancelar propina</a>
							 <span class="opacity-25"> | </span>
							<a class="btn success reg-btn" id="tipConfirmYes" onclick="javascript:void(0);" href="javascript:void(0);">Sí, enviar propina</a>
						</div>
						<div class="custom-tip-area">
							<div class="flex-grid">
								<div class="col-7 col-7-sm form-elements m-0 pl-0">
									<label for="custom_tip" class="visually-hidden">cantidad de propina personalizada</label>
									<input type="number" name="143" maxlength="6" placeholder="Custom Tip Amount" id="custom_tip" min="50">
								</div>
								<div class="col-5 col-5-sm d-flex align-items-center">
									<button id="custom_tip_link" class="btn primary full-width reg-btn btn-sm m-0">Enviar propina</button>
								</div>
							</div>
							<div class="pl-xs flex-grid form-elements disabled indent-md">
								<label class="form-check-radio toggle-check">
									<input type="checkbox" id="tip_flood_flag" disabled>
									<span class="toggle-check-box"></span>
									<span class="toggle-check-text">Derrame de propinas</span>
								</label>
								<div class="pl-sm pt-sm text-primary">
									<span class="tip-flood-range text-small">(Derrame de propinas: 250 a 700,000 créditos.)</span>
									<span class="custom-tip-range text-small">(Propina personalizada: 50 a 2,000,000 de créditos.)</span>
								</div>
							</div>
							<div class="line"></div>
							<h4 class="text-white">Ayuda sobre las propinas</h4>
							<p><b>Derrame de propinas:</b> The "Tip Flood" option will divide your tip amount (250 minimum) into 20 separate tips to fill the chat window.</p>
							<p><b>Propina anónima:</b> Sending your tip anonymously will hide your identity from other users in the chat room but the performer will still know that you sent the tip. To turn on this feature please click on the settings icon (<i class="icon-gear"></i>) in the chat message field to turn on "Tip Anonymously".</p>
						</div>
					</div>
				</div>

			</section>

			
				<style>
					.single-gift.vip-only-sticker {
						opacity: .6;
						cursor: not-allowed;
						user-select: none;
					}
				</style>

			
			<section class="stickers-tipping-section tipping-tab-panel">
				<div class="gifts-modal">
					<div class="stickers-container scrollbar-ghost">

					</div>
					<div class="single-gift single-sticker-clonable" title="Enviar regalo">
						<div class="single-gift-vip-only-label" title="VIP Only"><i class="icon-crown"></i></div>
						<div class="single-gift-image">
							<img class="single-gift-img-tag" alt="" />
						</div>
						<div class="gift-flex-right">
							<div class="single-gift-title hide">Gift 1</div>
							<div class="single-gift-cost">10 Créditos</div>
						</div>
					</div>
				</div>
			</section>

			<div class="tip-anon-container justify-content-flex-start align-items-center form-elements">
								<div class="form-elements text-center multi-model-dropdown-container hide">
					<div class="d-flex justify-content-center align-items-center">
						<div class="select-element">
							<select aria-label="multi model dropdown select" class="multi-model-dropdown-select" name="multi-model-dropdown-select">
																							</select>
							<div class="select-arrow"></div>
						</div>
						<i class="icon-info" title="Who do you want to tip?"></i>
					</div>
				</div>

				<label class="toggle-anonymous form-check-radio toggle-check" title="Propina anónima">
					<input type="checkbox" name="toggle-anonymous" />
					<span class="toggle-check-box mr-xs"></span>
					<span class="mr-xs ml-xs">Propina anónima</span>
				</label>

							</div>
		</div>
	</div>

</div>					</div>

				</div>
				
				
				<div id="oneMinuteLeft" class="">

	<div class="one-minute-left relative flex-grid">
		<a href="javascript:void(0);" id="oneMinuteLeftClose" aria-label="Close One Minute Left Box">
			<i class="icon-x"></i>
		</a>
		<div class="col-12-sm col-12 left-side text-center">

			<div class="flex-center">
				<span id="oneMinuteCountDown" class="show-inline-block"></span>
				<span class="show-inline-block">Seconds before your show expires!</span>
			</div>

			<div class="line"></div>
			<span class="secondLine">Agrega créditos a continuación para continuar</span>


			<div class="offer-credit-card-info text-center">
				<span class="card-cc-number"></span>
				 |
				<a href="javascript:;" class="btn btn-xs change-cc-info" data-source="one-min-left">cambiar</a>
				<a href="javascript:;" class="btn btn-xs primary overlay-add-card" data-source="one-min-left">Añadir tarjeta</a>
			</div>

		</div>
		<div class="col-12 text-center">
			<a href="javascript:void(0);" class="btn success full-width" id="oneMinuteBtn" data-promo-id="" aria-label="One Minute Left Purchase Product">Comprar productot</a>
			<div class="deal-loading btn btn-sm success"><i class="loading-v2"></i> Cargando</div>
		</div>

	</div>


</div>

			</div>

			<div class="chat-bottom-row hide-on-minimized-chatroom concealable" data-aspect-vertical-offset="true" data-aspect-ignore-vertical-offset-on-lb="true">

    <div class="no-button-section"></div>

    <div id="videoBtns" class="bottom-controls chat-vid-buttons">

        <div class="party-lite-btns" title="¡No detengas la fiesta! Da una propina a la derecha">
            <i class="icon-party"></i>
            <h2>PLÁTICA DE FIESTA</h2>
            <span class="room-cpm" title="Créditos por minuto"></span>
        </div>


        <div class="start-show-container">

            <input type="radio" class="hide" name="userControls" id="startShowPanelOn">
            <label id="startShow" for="startShowPanelOn" class="btn primary flex-grow-1">
                Iniciar espectáculo                <span class="room-cpm" title="Créditos por minuto"></span>
                <div class="deals-start-show-panel" title="Ofertas disponibles"><i class="icon-deal"></i></div>
            </label>


            <label class="close-menu" for="userControlsOff"><span class="visually-hidden">Close</span></label>
            <div id="startShowPanel" class="modal-on-btn use-credits show-select-show-container">

                <div class="header">
                    <label for="userControlsOff" class="close-modal"><span class="visually-hidden">Close</span><i class="icon-x"></i></label>Elije tu espectáculo:
                </div>
                <div class="start-show-body">

                    <div id="processing_transaction">
                        <div class="loadingIcon"></div>
                        <div class="processingText">
                            Please wait while we process your one-time access fee.
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div id="select_show_container">

                                                <div id="playAndPay">
                            <div class="d-flex justify-content-center p-md clearfix">
                                <div id="payRadioCredits" class="pay-radio checked" data-radio="payCredits">
                                    <span></span>
                                </div>
                                <div class="payCredits pay-text">
                                    <span id="payCreditsLabel">Pagar con créditos</span>
                                </div>

                                <div class="split"></div>

                                <div id="payRadioLater" class="pay-radio pay-later" data-radio="payLater">
                                    <span></span>
                                </div>
                                <div id="playPayTextArea" class="pay-later pay-text">
                                    <span id="payLaterLabel">Play &amp; Pay</span>
                                </div>

                                <div class="split"></div>

                                <span class="learn-more">
                                    <label for="learnModalOpen">Más información</label>
                                </span>
                            </div>
                            <div class="text-success hide charged-before-text">
                                <b>Play &amp; Pay</b><br>
                                *Pay Your account will be charged a one-time access fee of $4.50 to start this show. This will be applied as a discount on your show bill.
                            </div>

                            <div class="text-success hide charged-after-text">
                                <b>Play &amp; Pay</b><br>
                                *Your credit card will be charged after your show is over.
                            </div>

                        </div>

                                                <div class="single-show-type pick-show-type wdm-pvt">

                            <div class="show-radio">
                                <div class="show-radio-inner clearfix">
                                    <span></span>
                                </div>
                            </div>

                            <div class="show-name-icon">
                                <div class="show-type-icon">
                                    <i class="icon-free"></i>
                                </div>
                                <div class="show-type-name">
                                    Espectáculo de 5 minutos grátis                                    <i class="icon-i tooltip"><span class="tip">Minutes in show after 5 free minutes will be at <span class="credits">50</span> credits/min</span></i>
                                </div>
                            </div>
                            <div class="show-price"><span class="credits">50</span> Credits/Minute after 5 minutes</div>
                        </div>

                                                <div class="single-show-type pick-show-type voyeur">
                            <div class="show-radio">
                                <div class="show-radio-inner clearfix">
                                    <span></span>
                                </div>
                            </div>
                            <div class="show-name-icon">
                                <div class="show-type-icon">
                                    <i class="icon-security-camera"></i>
                                </div>
                                <div class="show-type-name">
                                    Espectáculo voyeurista                                    <i class="icon-i tooltip"><span class="tip">Echa un vistazo al espectáculo actual</span></i>
                                </div>
                            </div>
                            <div class="show-price"><span class="credits">10</span>Credits/Minute</div>
                        </div>

                                                <div class="single-show-type pick-show-type reg-pvt">
                            <div class="show-radio clearfix">
                                <div class="show-radio-inner clearfix">
                                    <span></span>
                                </div>
                            </div>
                            <div class="show-name-icon">
                                <div class="show-type-icon">
                                    <i class="icon-profile"></i>
                                </div>
                                <div class="show-type-name">
                                    Private Show                                    <i class="icon-i tooltip"><span class="tip">Chat de video uno a uno con el actor</span></i>
                                </div>
                            </div>
                            <div class="show-rates show-price">
                                <span class="credit-wrapper"><span class="credits">10</span>Credits/Minute</span>
                                <span class="dollar-wrapper">$<span class="dollars">xx.xx</span>/Minuto</span>
                            </div>
                        </div>

                                                <div class="single-show-type pick-show-type multi">
                            <div class="show-radio">
                                <div class="show-radio-inner clearfix">
                                    <span></span>
                                </div>
                            </div>
                            <div class="show-name-icon">
                                <div class="show-type-icon">
                                    <i class="icon-community"></i>
                                </div>
                                <div class="show-type-name">
                                    Multi User Show                                    <i class="icon-i tooltip"><span class="tip">Permite que varios clientes chateen en privado.</span></i>
                                </div>
                            </div>
                            <div class="show-rates show-price">

                                <span class="credit-wrapper"><span class="credits">10</span>Credits/Minute</span>
                                <span class="dollar-wrapper">$<span class="dollars">xx.xx</span>/Minuto</span>

                            </div>
                        </div>

                                                <div id="dealCodeOption" class="single-show-type dealcode hide">
                            <div class="show-name-icon">
                                <div class="show-type-icon">
                                    <i class="icon-deal"></i>
                                </div>
                                <div class="show-type-name">
                                    Usar un código de oferta                                    <i class="icon-info tooltip"><span class="tip">Allows you to use a deal code that has been set by the model.</span></i>
                                </div>
                            </div>
                            <div class="deal-code-select">
                                <div class="form-elements">
                                    <div class="select-element">
                                        <select id="select_drop">
                                            <option disabled selected value="">-- Seleccionar oferta --</option>
                                        </select>
                                        <div class="select-arrow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <label class="btn primary enter-show-now" id="enterShowNow" for="userControlsOff">ENTRAR AL ESPECTÁCULO</label>

                    </div>
                </div>
            </div>



                        <div class="modal-container in-chat-modal">
                <input type="radio" name="userControls" class="hide modal-control" id="learnModalOpen">
                <label class="modal-shadow" for="userControlsOff"><span class="visually-hidden">Close</span></label>
                <div class="modal-wrap">
                    <div class="modal">
                        <div class="modal-header">
                            Más información sobre el pago                            <label class="close-modal" for="userControlsOff"><span class="visually-hidden">Close</span><i class="icon-x"></i></label>
                        </div>
                        <div class="modal-body play-pay-pop-text">

                            <div class="text-success hide charged-before-text">
                                * Your account will be charged a one-time access fee of $4.50 to start this show. This will be applied as a discount on your show bill.
                            </div>

                            <div class="text-success hide charged-after-text">
                                * Your credit card will be charged after your show is over.
                            </div>

                            <div id="notActiveExplanation">
                                Play & Pay allows you to enjoy a live show without the need to purchase credits in advance. At the end of the show our system will process a charge to your payment account based on the length and price of the show. Your account is currently not configured for Play Pay; please contact "Customer Support" to inquire about having Play & Pay activated for your account.
                            </div>

                            <div id="explanation">
                                <b>What is Play & Pay?</b>
                                <ul>
                                    <li>Enjoy your live show and pay for it after the show is complete.</li>
                                    <li>You are pre qualified to spend a certain amount each day on live shows.</li>
                                    <li>View transactions under My Account > Billing > Transaction History.</li>
                                </ul>
                            </div>

                            <div id="dailyLimitReached">
                                Your daily limit of $<span class="daily-limit-amount"></span> has been reached and you are unable to use Play & Pay purchasing until the next day. You are approved up to $<span class="system-limit-amount"></span> per day and can increase your personal daily spending limit by visiting the "Play & Pay Settings Page" from the My Account section. You may also continue to enjoy shows by purchasing blocks of credits <a href="javascript:void(0);" onClick="ui.showApplicableBilling('','daily_limit_reached');">here</a>.

                            </div>

                            <div id="systemLimitReached">
                                Your daily limit of $<span class="system-limit-amount"></span> has been reached and you are unable to use Play & Pay purchasing until the next day. All daily balances are reset at midnight Eastern Time. Please contact <a href="/support.php">Customer Support</a> if you wish to increase your spending limit. You may also continue to enjoy shows by purchasing blocks of credits <a href="javascript:void(0);" onClick="ui.showApplicableBilling('','system_limit_reached');">here</a>.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <label class="close-menu" for="userControlsOff"><span class="visually-hidden">Close</span></label>

        </div>



        <div class="pledge-show-container">

            <div class="group-chat-controls group-private hide-on-minimized-chatroom">
                                <span>Tiempo restante del espectáculo grupal:</span>
                <span class="group-bubble group-show-start-timer">1:32</span>
            </div>

            <input type="radio" class="hide" name="userControls" id="pledgePanelOn">
            <label id="pledgeBtn" for="pledgePanelOn" class="btn primary">
                Compromiso grupal
                <div class="group-timer" title="Temporizador de cuenta regresiva para alcanzar los créditos requeridos para el espectáculo grupal.">
                    <span class="starts-in group-starts-in-text">Starts in</span>
                    <span class="group-bubble group-show-duration" title="Starts in - Time left to reach credits for show."></span>
                </div>
            </label>

            <label class="close-menu" for="userControlsOff"><span class="visually-hidden">Close</span></label>
            <div id="pledgePanel" class="modal-on-btn">

                <div class="header group-header">
                    <label for="userControlsOff" class="close-modal"><span class="visually-hidden">Close</span><i class="icon-x"></i></label>
                    <h3>Compromiso grupal</h3>
                </div>
                <div class="pledge-body">

                    <div class="pledge-scroll">
                        <div class="spacer-xs"></div>
                        <h6 class="text-primary m-0 bold">Qué haré en mi espectáculo de chat grupal:</h6>

                        <div class="group-desc">
                                                    </div>
                        <div class="line"></div>

                        <div class="text-center">
                            <h6 class="show-inline-block m-0"><span class="text-primary">Show starts at:</span> <span class="group-show-starts-at bold"></span> credits</h6>
                            <h6 class="show-inline-block m-0"><span class="text-primary ml-md">Show Length:</span> <span class="group-show-length bold"></span> minutes</h6>
                        </div>
                        <div class="line"></div>

                        <div class="flex-grid">
                            <div class="col-2 col-1-lg"></div>
                            <div class="col-3 col-5-lg">
                                <div class="form-elements text-center m-0">
                                    <div class="d-flex align-items-center">
                                        <label for="pledgeInput" class="visually-hidden">aportes de promesas</label>
                                        <input id="pledgeInput" type="number" min="0" max="2500">
                                        <span class="ml-xs">Créditos</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-5 col-5-lg">
                                <button id="pledgeNowBtn" class="btn primary reg-btn full-width">Comprometerse ahora</button>
                            </div>
                            <div class="col-2 col-1-lg">
                            </div>
                        </div>

                        <div class="spacer-sm"></div>
                    </div>

                </div>

            </div>

        </div>



        <label for="hide_modal_lcm_mo" class="visually-hidden">Live Cam Mansion modal</label>
<input type="radio" name="modal-lcm-mo" class="hide" id="hide_modal_lcm_mo" checked>

<div class="modal-container in-chat-modal lcm-rooms-select lcm-btn hide" id="multiCam">
	<input type="radio" name="modal-lcm-mo" class="hide modal-control" id="modal-lcm-mo">
	<label class="btn primary flex-grow-1 mo-lcm-rooms mr-xs"  for="modal-lcm-mo">Habitaciónes</label>
	<label class="modal-shadow" for="hide_modal_lcm_mo"><span class="visually-hidden">Close</span></label>
	<div class="modal-wrap">
		<div class="modal">
			<div class="modal-header">
				<span class="modal-title d-flex align-items-center"><i class="icon-webcam mr-sm"></i> Elija una cámara diferente</span>
				<label class="close-modal" for="hide_modal_lcm_mo"><span class="visually-hidden">Close</span><i class="icon-x"></i></label>
			</div>
			<div class="modal-body">
				<form>
					<div class="form-elements">
												<div class="select-element">
							<label for="multiCamSel" class="visually-hidden">multi-cam select</label>
							<select id="multiCamSel">

								<option value="0">Vista previa de cámaras LCM</option>

								<optgroup label="LCM">
									<option value="1">Cocina</option>
									<option value="2"><i></i>Salón #1</option>
									<option value="3"><i></i>Salón #2</option>
									<option value="4"><i></i>Salón #3</option>
									<option value="5"><i></i>Escritorio de Coqueteos</option>
									<option value="6"><i></i>Escalera</option>
									<option value="7"><i></i>Habitación #1</option>
									<option value="8"><i></i>Habitación #2</option>
									<option value="9"><i></i>Habitación #3</option>
									<option value="10"><i></i>Habitación #4</option>
									<option value="11"><i></i>Habitación #5</option>
									<option value="12"><i></i>Habitación #6</option>
									<option value="13"><i></i>Baño #1</option>
									<option value="14"><i></i>Baño #2</option>
									<option value="15"><i></i>Gym Area #1</option>
									<option value="16"><i></i>Gym Area #2</option>
								</optgroup>

								<optgroup label="LSM">
									<option value="17">Pecadores - BDSM 1</option>
									<option value="18"><i></i>Pecadores - BDSM 2</option>
									<option value="19"><i></i>Pecadores - BDSM 3</option>
									<option value="20"><i></i>Pecadores - Lobby 1</option>
									<option value="21"><i></i>Pecadores - Jacuzzi 1</option>
									<option value="22"><i></i>Pecadores - Jacuzzi 2</option>
									<option value="23"><i></i>Pecadores - Jacuzzi 3</option>
									<option value="24"><i></i>Pecadores - Salón 1</option>
									<option value="25"><i></i>Pecadores - Salón 2</option>
									<option value="26"><i></i>Pecadores - Salón 3</option>
									<option value="27"><i></i>Pecadores - Black</option>
									<option value="28"><i></i>Pecadores - Rojo 1</option>
									<option value="29"><i></i>Pecadores - Rojo 2</option>
									<option value="30"><i></i>Pecadores - Baño</option>
								</optgroup>

							</select>
							<div class="select-arrow"></div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

        <div class="btn credit-amount-private" title="Créditos restantes - Actualizado cada 45 segundos">
            <i class="icon-coins"></i> <span class="myCreditAmount">0</span>
        </div>
        <label class="btn success" data-display-title="Billing" data-title="billing" for="billingModalOpen" id="addCreditsPrivateBtn">Añadir créditos</label>

        <div class="btn btn-timer">
            <i class="icon-clock"></i>
            <span class="btn-timer-time text-left" style="padding-left:6px;">
                <span><b id="pvtClockMin"></b>min </span>
                <span><b id="pvtClockSec"></b>sec</span>
            </span>
        </div>

                    <label class="close-menu" for="userControlsOff"><span class="visually-hidden">Close</span></label>

                            <input type="radio" name="userControls" class="hide modal-control tip-modal-control" id="tipModalOpen">
                <label class="btn tip-color hide" id="tipModalLabel" for="tipModalOpen">Dame una propina</label>
            
        

        <label for="panelModalOpen" title="Hacer una oferta" class="panel-option offer-btn btn-chat-offer offer-flag" data-display-title="Make an Offer" data-title="offer">
            <i class="icon-make-offer"></i> Hacer una oferta        </label>


        <style>
    .btn-wrapper {
        margin: 0 0 0 15px;
        position: relative;
        width: auto;
        display: flex;
        align-items: center;
        background-color: transparent;
    }

    .btn-wrapper .btn-side {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 40px;
        margin: 0 3px;
        height: 40px;
        color: #b1bec4;
        background-color: transparent;
        transition: none;
        opacity: 1;
        box-sizing: border-box;
        text-decoration: none;
    }

    .btn-wrapper .btn-side i {
        opacity: 1;
        transition: none;
    }

    .btn-wrapper .btn-side:hover,
    .btn-wrapper .btn-side.active {
        background-color: transparent;
        color: #fff;
        transition: none;
    }

    .btn-wrapper .nav-sep {
        height: 26px;
        width: 1px;
        background-color: #353639;
        margin: 0 10px;
    }

    /* Horizontal scroll fixes */
    .private-chat-prompts.chat-prompts.chat-prompts-open,
    .chat-prompts.chat-prompts-open {
        right: 0px;
    }

    .modal-wrap .tipping-lite-container.modal {
        width: calc(100%);
    }

    .chat-control-btns {
        margin: 0px;
    }

    .chat-panels {
        border-right: 1px solid transparent;
        box-sizing: border-box;
    }

    .btn-wrapper .btn-side.btn-foty {
        background-color: transparent;
        border: 3px solid rgb(0, 169, 231, 30%);
        border-radius: 50%;
        color: #b1bec4;
        opacity: 1;
    }

    .btn-wrapper .btn-side.btn-foty i {
        color: #b1bec4;
        opacity: 1;
    }

    .btn-wrapper .btn-side.btn-foty:hover {
        background-color: transparent;
        border: 3px solid rgb(0, 169, 231, 60%);
        color: #fff;
        opacity: 1;
    }

    .btn-wrapper .btn-side.btn-foty:hover i {
        color: #fff;
        opacity: 1;
    }

    .btn-wrapper .tooltip .tip,
    .btn-wrapper .tooltip:hover .tip {
        font-size: 11px;
        padding: 3px 6px;
        transition: none;
    }

    .btn-wrapper .btn-side.message-count {
        background-color: transparent;
    }

    .party.open #videoBtns .party-lite-btns {
        max-width: 400px;
    }

    .party.open #videoBtns .start-show-container {
        display: none;
    }

    .device-name.blue~.device-wrap .icon-wrap {
        background-color: transparent;
    }

    .device-name.blue~.device-wrap .icon-wrap .icon-feel-connect {
        color: rgba(11, 151, 230, .8);
    }

    .device-name.blue~.device-wrap .icon-wrap .icon-feel-connect:hover {
        color: rgba(11, 151, 230, 1);
    }

    .triple-dot-vert {
        width: 6px;
        height: 6px;
        background-color: #b1bec4;
        display: inline-block;
        border-radius: 6px;
        opacity: .8;
    }

    .triple-dot-vert:before {
        content: "";
        position: absolute;
        top: 8px;
        width: 6px;
        height: 6px;
        background-color: #b1bec4;
        display: inline-block;
        border-radius: 6px;
    }

    .triple-dot-vert:after {
        content: "";
        position: absolute;
        bottom: 8px;
        width: 6px;
        height: 6px;
        background-color: #b1bec4;
        display: inline-block;
        border-radius: 6px;
    }

    .nav-overflow-btn:hover .triple-dot-vert,
    .nav-overflow-btn:hover .triple-dot-vert:before,
    .nav-overflow-btn:hover .triple-dot-vert:after {
        background-color: #fff;
    }

    /* Nav show/hide */
    .nav-overflow {
        display: none;
        overflow: visible;
    }

    .nav-overflow-btn:hover .nav-overflow {
        display: flex;
        flex-direction: column;
        position: absolute;
        height: auto;
        z-index: 3;
        right: 0;
        bottom: 38px;
        background-color: rgb(18 19 23);
        box-shadow: 3px -4px 8px rgba(0, 0, 0, .4);
    }

    .btn-wrapper .nav-overflow-btn.btn-side i {
        font-size: 24px !important;
    }

    .flag-item.btn-side .flag-amount {
        color: #fff;
    }

    .favs-online {
        bottom: auto;
        top: 0px;
        left: -3px;
    }

    /* Holiday SCSS */
    .flirty-awards .btn-promo,
    .flirty-awards .btn-promo:active,
    .flirty-awards .btn-promo:hover,
    .whitelabel.light .chatroom-container:not(.full-screen) .flirty-awards .btn-promo .btn-wrapper .btn-side,
    .whitelabel.light .chatroom-container:not(.full-screen) .flirty-awards .btn-promo .btn-wrapper .btn-side:active .whitelabel.light .chatroom-container:not(.full-screen) .flirty-awards .btn-promo .btn-wrapper .btn-side:hover {
        background-color: none;
        border-radius: 40px;
        border: 3px solid rgb(172, 149, 79, 50%);
    }
</style>


<nav class="btn-wrapper chat-nav model-menu-nav model-information concealable" id="modelMenuNav">
    <div class="nav-sep"></div>
        <input type="hidden" value="" id="timeFromServer" />
    <label class="visually-hidden" for="modelMenu">Menú de modelos</label>
    <input type="radio" name="userControls" id="modelMenu" class="hide" autocomplete="off">

    <label for="panelsOff" id="chatLabel" class="btn-side flag-item tooltip tip-bottom" data-display-title="Chat" data-title="chat" data-desktop-panel-label="1">
        <span class="tip">Abrir conversación de chat</span>
        <i class="icon-chat"></i>
        <span class="flag-amount" id="chatNotificationBubble">0</span>
    </label>

                    <label for="panelModalOpen" class="panel-option btn-side tooltip tip-bottom" id="moreRoomsOption" data-display-title="More Rooms" data-title="moreRooms" data-desktop-panel-label="1">
            <span class="tip">Buscar otras modelos en línea</span>
            <i class="icon-grid-2"></i>
                    </label>

    

    <label class="btn-side tip-meter-btn tooltip tip-bottom" for="tipMeterModalOpen" style="display:none;">
        <span class="tip">Medidor de Propina</span>
        <span class="tip-meter-amount glow" style="height:0%;"></span>
        <i class="icon-tip-meter"></i>
        <div class="tip-meter-glow"></div>
    </label>

    <div class="btn-side favorites tooltip tip-bottom" id="favoriteModelBtn">
        <span class="tip">Agregar o quitar <b class="model-screen-name"></b> de favoritos</span>
        <i class="icon-heart"></i>
        <i class="icon-checkmark"></i>
    </div>

    <div data-display-title="online-notification" data-title="onlineNotification" id="onlineNotificationBtn">
        <span class="visually-hidden">Notificación en línea</span>
        <div class="btn-side icon-wrap notifications tooltip tip-bottom">
            <span class="tip">Agregar o quitar <b class="model-screen-name"></b> de notificaciones</span>
            <i class="icon-notification"></i>
            <i class="icon-checkmark"></i>
        </div>
    </div>

    
        <a href="javascript:void(0);" class="btn-side tooltip tip-bottom webcam-on" id="cam2CamPanelBtn">
            <span class="visually-hidden">botón de Cam 2 Cam</span>
            <span class="tip">Cam2Cam y Cam2Cam Solo audio</span>
            <i class="icon-webcam-off"></i>
            <i class="icon-webcam primary-glow"></i>
        </a>

                <label for="panelModalOpen" class="panel-option btn-side tooltip tip-bottom webcam-on hide" data-display-title="Cam2Cam" data-title="cam2Cam" id="cam2CamPanelBtn" data-desktop-panel-label="1">
            <span class="visually-hidden">botón de Cam 2 Cam</span>
            <span class="tip">Cam2Cam y Cam2Cam Solo audio</span>
            <i class="icon-webcam-off"></i>
            <i class="icon-webcam primary-glow"></i>
        </label>
    
    <label for="panelModalOpen" class="panel-option btn-side tooltip tip-bottom" data-display-title="bio" data-title="bio" data-desktop-panel-label="1">
        <span class="tip">View <b class="model-screen-name"></b>'s bio</span>
        <i id="femalePanelIcon" class="gender-panel-icon icon-female female-panel-icon hide"></i>
        <i id="malePanelIcon" class="gender-panel-icon icon-male male-panel-icon hide"></i>
    </label>

    




	
        <span class="device-name device-none" style="display: none"></span>
        <label for="panelModalOpen" class="panel-option device-wrap tooltip tip-bottom" data-display-title="Interactive" data-title="interactive" data-desktop-panel-label="1">
        <div class="icon-wrap btn-side">
            <span class="tip"><b class="model-screen-name"></b> is <span class="device-name" style="color: inherit; margin-left: 0"></span></span>
            <i class="icon-feel-connect"></i>
        </div>
    </label>


    
        <label class="btn-side tooltip btn-model-notes tip-bottom" for="panelModalOpen" data-display-title="Model Notes">
            <a href="javascript:popRegistration('notes_btn_chatroom',reg_overlay_template_set);" class="no-decoration">
                <span class="tip">Las notas son para usuarios de primera calidad, regístrate y agrega una tarjeta de crédito hoy.</span>
                <i id="modelNotesIcon" class="model-notes-icon icon-edit"></i>
            </a>
        </label>

    
    	

        <div class="nav-overflow-btn btn-side">

        <div class="triple-dot-vert  tooltip tip-bottom" title="Click here to see more options"></div>

        <div class="nav-overflow">

            <div class="btn-side offline-hide tooltip tip-right" data-display-title="Billing" data-title="billing"  id="billingOption" data-desktop-panel-label="1">
                <span class="tip">Añadir créditos a mi cuenta</span>
                <i class="icon-credits"></i>
            </div>

            <label for="panelModalOpen" class="panel-option btn-side tooltip tip-right hide" id="videoPackageOption" data-display-title="VOD Packages" data-title="videosPackage" data-desktop-panel-label="1">
                <span class="tip"><b class="model-screen-name"></b> has video packages</span>
                <i class="icon-collection"></i>
            </label>

            
            <label for="panelModalOpen" class="panel-option btn-side tooltip tip-right hide" id="phoneOption" data-display-title="Flirt Phone" data-title="flirtPhone" data-desktop-panel-label="1">
                <span class="tip">Llámame ahora!</span>
                <i class="icon-flirtphone"></i>
            </label>

            <label for="panelModalOpen" class="panel-option offline-hide btn-side tooltip tip-right" id="dealsOption" data-display-title="Check Out My Deals" data-title="deals" data-desktop-panel-label="1">
                <span class="visually-hidden">opción de ofertas</span>
                <i class="icon-deal"></i>
            </label>

            <label for="panelModalOpen" class="panel-option offline-hide btn-side tooltip tip-right" id="vipOption" data-display-title="Upgrade to VIP" data-title="upgradeToVip">
                <span class="tip">Actualizar al estado VIP</span>
                <i class="icon-crown"></i>
            </label>

            
            <label for="panelModalOpen" class="panel-option btn-side tooltip tip-right" id="videosOption" data-display-title="Videos" data-title="videos" data-desktop-panel-label="1">
                <span class="tip"><b class="model-screen-name"></b>'s vídeos</span>
                <i class="icon-video"></i>
            </label>

            <label for="panelModalOpen" class="panel-option btn-side tooltip tip-right" id="fanClubOption" data-display-title="Fan Club" data-title="fanClub" data-desktop-panel-label="1">
                <span class="tip">Join <b class="model-screen-name"></b>'s club de fans</span>
                <i class="icon-fan-finger"></i>
            </label>

            
        </div>
    </div>



    </section>
    </div>

    
    <div class="chat-control-btns hide-on-minimized-chatroom concealable">
                <div class="modal-container in-chat-modal">
            <input type="radio" name="userControls" class="hide modal-control" id="changeName">
            <label class="modal-shadow" for="userControlsOff"><span class="visually-hidden">Close</span></label>
            <div class="modal-wrap">
                <div class="modal">
                    <div class="modal-header">
                        <span class="panel-title">Cambiar nombre de pantalla</span>
                        <label class="close-modal" for="userControlsOff"><span class="visually-hidden">Close</span><i class="icon-x"></i></label>
                    </div>

                    <div class="modal-body panel-modal">

                        <div class="screenname-loading-container m-md hide">
                            <i class="loading-v2 lg"></i>
                            <p>Cambiar tu nombre de pantalla...</p>
                        </div>

                        <div id="screen_name_select" class="screenNameWrap col-8 mx-auto mt-sm text-center">
                            <form action="#" id="screenNameFormSelect" method="post">

                                <div class="form-elements">
                                    <label for="select_drop" class="bold text-uppercase text-bigger mb-xs">Selecciona el nombre de pantalla</label>
                                    <div class="select-element">
                                        <label for="screen_name_dropdown" class="visually-hidden">seleccionar nombre de pantalla</label>
                                        <select name="LOGIN[screen_name]" id="screen_name_dropdown">
                                                                                    </select>
                                        <div class="select-arrow"></div>
                                    </div>
                                </div>

                                
                                <div class="form-elements">
                                    <input type="submit" class="btn primary" value="UPDATE" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="chat-bottom">

            <div class="chat-message-area ">

                <div class="chat-settings">
                    <input type="radio" id="userControlsOn" name="userControls" class="hide">
                    <label for="userControlsOn" class="user-contols-on">
                        <span class="visually-hidden">user controls on</span>
                        <i class="icon-gear settings-icon"></i>
                    </label>
                    <label class="close-menu" for="userControlsOff"><span class="visually-hidden">Close</span></label>
                    <div class="user-control-switches">
                        <div class="settings-inner-header">
                            <div class="settings-user">
                                <div class="user-username"><a onclick="javascript:popRegistration('topnav_free_signup_tab',reg_overlay_template_set);" href="javascript:;" class="guest-name">Guest</a></div>
                                <div class="user-credits" title="Monto del crédito"><i class="icon-coins"></i><span>0</span></div>
                            </div>
                            <label for="userControlsOff" class="close-modal"><span class="visually-hidden">Close</span><i class="icon-x"></i></label>
                        </div>
                        <div class="settings-inner">

                            
                            <div class="text-slider-container">
                                <div class="text-slider-header">Tamaño del texto:</div>
                                <div class="text-slider-inner">
                                    <div class="text-slider-small">A</div>
                                    <div class="range-slider">
                                        <label class="visually-hidden" for="textSizeSlider">Control deslizante de tamaño de texto</label>
                                        <input type="range" min="0" max="4" class="text-slider" id="textSizeSlider" />
                                        <div class="range-points">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="text-slider-big">A</div>
                                </div>
                            </div>

                            <div class="settings-options">
                                <div class="text-options">

                                    <div class="single-option">
                                        <label class="option-toggle">
                                            <span class="visually-hidden">opción alternar</span>
                                            <input type="checkbox" id="messages-aligned-left">
                                            <span class="circle-checkbox round"></span>
                                        </label>
                                        <div class="option-name">Texto a la izquierda</div>
                                    </div>

                                    <div class="single-option">
                                        <label class="option-toggle">
                                            <span class="visually-hidden">opción alternar</span>
                                            <input type="checkbox" id="text-bubbles">
                                            <span class="circle-checkbox round"></span>
                                        </label>
                                        <div class="option-name">Burbujas de conversación</div>
                                    </div>

                                    <div class="single-option">
                                        <label class="option-toggle toggle-grey-users">
                                            <span class="visually-hidden">opción alternar</span>
                                            <input type="checkbox" id="grey-users">
                                            <span class="circle-checkbox round"></span>
                                        </label>
                                        <div class="option-name">Ocultar invitado</div>
                                    </div>

                                    <div class="single-option">
                                        <label class="option-toggle toggle-whisper-messages">
                                            <span class="visually-hidden">opción alternar</span>
                                            <input type="checkbox" id="whisper-messages">
                                            <span class="circle-checkbox round"></span>
                                        </label>
                                        <div class="option-name">Escriba solo en susurros</div>
                                    </div>

                                </div>

                                <div class="style-options">

                                    <div class="single-option">
                                        <label class="option-toggle toggle-flirt-rewards">
                                            <span class="visually-hidden">opción alternar</span>
                                            <input type="checkbox" checked id="flirt-rewards">
                                            <span class="circle-checkbox round"></span>
                                        </label>
                                        <div class="option-name">Recompensas de coqueteos</div>
                                    </div>

                                    <div class="single-option">
                                        <label class="option-toggle toggle-anonymous">
                                            <span class="visually-hidden">opción alternar</span>
                                            <input type="checkbox" id="toggle-anonymous-chat-settings">
                                            <span class="circle-checkbox round"></span>
                                        </label>
                                        <div class="option-name">Propina anónima</div>
                                    </div>
                                    <div class="single-option">
                                        <label class="option-toggle favorites-notifications">
                                            <span class="visually-hidden">opción alternar</span>
                                            <input type="checkbox" id="toggleSubscribeMsg">
                                            <span class="circle-checkbox round"></span>
                                        </label>
                                        <div class="option-name">Ocultar favorito/notificar</div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                                <div class="dm-launch tooltip tip-top">
                    <i class="icon-dm-bubble"></i>
                    <i class="icon-i"></i>
                    <span class="flag-amount dm-name-message-count-sum primary"></span>
                    <span class="tip" style="font-size:11px;">Enviar un mensaje directo</span>
                </div>

				
<style>
	/* messages.scss */
	#chat-prompts {
		z-index: 3;
	}

	.chat-prompts .chat-prompts-messages {
		box-sizing: border-box;
		border: 1px solid rgb(60,60,71);
		border-radius: 10px 10px 0 0;
	}

	.private-chat-prompts.chat-prompts.chat-prompts-closed,
	.guest.chat-room-opened .chat-prompts-closed  {
		margin: 0;
		position: absolute;
		width: calc(100% - 150px);
		right: -1px;
		top: auto;
		bottom: 2px;
	}

	.private-chat-prompts.chat-prompts.chat-prompts-open,
	.chat-prompts.chat-prompts-open {
		margin: 0;
		position: absolute;
		width: 100%;
		right: -1px;
		top: auto;
		bottom: 1px;
	}

	.chat-prompts-messages .chat-prompts-single-message {
		font-weight: normal;
	}

	.chat-prompts-closed #chat-prompts-arrow .icon-up {
		margin-bottom: 0px;
		margin-right: 150px;
	}

	.chat-prompts-open #chat-prompts-arrow .icon-down {
		margin-bottom: -2px;
	}

</style>

<style>

	#micLabel.tooltip .speechtotext-tooltip {
		width: 300px;
		white-space: normal;
	}
	
	#chat-prompts-arrow {
		width: 100%;
		height: 100%;
	}

	#chat-prompts {
		position: relative;
		min-width: 35px;
		background: #000;
		border-left: 1px solid #424242;
		width: 35px;
		right: 0;
		bottom: 0;
		top: unset;
		cursor: pointer;
	}

	#chat-prompts:hover {
		background-color: #202123;
	}

	#chat-prompts .chat-prompts-svg {
		display: flex;
		opacity: .8;
		padding: 9px 7px;
	}

	#chat-prompts:hover .chat-prompts-svg {
		opacity: 1;
	}

	#chat-prompts.chat-prompts-open .close-chat-prompts-button {
		font-size: 14px;
		position: absolute;
		top: -13px;
		right: -13px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #222527;
		border-radius: 20px;
		width: 25px;
		height: 25px;
		color: #fff;
		padding-left: 1px;
		border: 1px solid #3d3d47;
	}

	#chat-prompts.chat-prompts-open .chat-prompts-messages {
		position: absolute;
		bottom: 35px;
		top: unset;
		width: 480px;
		height: unset;
		padding-bottom: 0;
		overflow: unset;
	}

	#chat-prompts.chat-prompts-open .chat-prompts-carousel {
		width: 100%;
		height: 275px;
		padding: 0px 10px;
		overflow-y: scroll;
	}

	.private-chat-prompts .private-chat-prompts-single-message .private-chat-prompt-icon {
		display: none;
	}

	.guest #chat-prompts.chat-prompts-open .chat-prompts-carousel {
		height: 45px;
		overflow: hidden;
	}

	.guest #chat-prompts.chat-prompts-open .chat-prompts-messages {
		width: 380px;
		left: 0;
	}

	#chat-prompts.chat-prompts-open {
		background-color: #202123;
	}

	.whitelabel.light #chat-prompts {
		background-color: #f7f7f7;
		border-color: #cccccc;
	}

	.whitelabel.light #chat-prompts:hover {
		background-color: #f7f7f7;
		border-color: #cccccc;
	}

	.whitelabel.light #chat-prompts .chat-prompts-svg g {
		stroke: #3e3e3e;
	}

	.whitelabel.light .private-chat-prompts p {
		color: #222222;
	}

	.whitelabel.light #chat-prompts.chat-prompts-open .close-chat-prompts-button {
		background: #fff;
		color: #222;
		font-size: 18px;
	}
	
	.whitelabel.dark #chat-prompts {
		background-color: #232323;
		border-color: #424242;
	}

	.whitelabel.dark #chat-prompts:hover {
		background-color: #232323;
		border-color: #424242;
	}

	.whitelabel.dark #chat-prompts .chat-prompts-svg g {
		stroke: #aaaaaa;
	}

	.whitelabel.dark #chat-prompts.chat-prompts-open .close-chat-prompts-button {
		font-size: 18px;
	}

	.whitelabel .private-chat-prompts .private-chat-prompts-single-message:hover .private-chat-prompt-send-button {
		background-color: #df2b26 !important;
	}

	.whitelabel #chat-prompts .chat-prompts-single-message:hover {
		background-color: #df2b26 !important;
	}

	@media screen and (max-width: 1350px) {
		.guest #chat-prompts.chat-prompts-open .chat-prompts-messages {
			width: 380px;
			left: unset;
			right: 0;
		}
	}

	@media screen and (max-width: 1140px) {
		#chat-prompts.chat-prompts-open .chat-prompts-messages {
			left: unset;
			right: -1px;
		}
	}

</style>


	<div id="chat-prompts" class="chat-prompts chat-prompts-closed">

		<div id="chat-prompts-arrow" class="tooltip tip-top">
			<svg class="chat-prompts-btn chat-prompts-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="17"><defs><clipPath id="messageIcon"><path fill="none" d="M-.2 0h20v17h-20z" data-name="Rectangle 6274"></path></clipPath></defs><g clip-path="url(#messageIcon)" transform="translate(.2)"><path fill="none" stroke="#aaaaaa" stroke-linecap="round" stroke-linejoin="round" d="m5.306 13.551-2.841 2.895v-2.895A2.053 2.053 0 0 1 .43 11.479V2.517A2.053 2.053 0 0 1 2.465.446H17.33a2.054 2.054 0 0 1 2.035 2.071v8.962a2.054 2.054 0 0 1-2.035 2.072l-10.587-.016Z" data-name="Path 2232"></path><circle cx="1" cy="1" r="1" fill="#aaaaaa" transform="translate(4.8 6)"></circle><circle cx="1" cy="1" r="1" fill="#9bafc2" data-name="point" transform="translate(8.8 6)"></circle><circle cx="1" cy="1" r="1" fill="#9bafc2" data-name="point" transform="translate(12.8 6)"></circle></g></svg>
			<span class="tip" style="font-size:11px;">Quick Messages</span>
		</div>

		<div class="chat-prompts-messages slide-in-bottom">
			
			<i class="icon-x-plain chat-prompts-btn close-chat-prompts-button"></i>
			
			<div class="chat-prompts-previous-arrow chat-prompts-arrow disabled"><i class="icon-left"></i></div>

			<div class="chat-prompts-carousel">
				<div class="chat-prompts-slider d-flex">

					<div class="chat-prompts-slide d-flex justify-content-around">
						<div class="chat-prompts-single-message">
							<span class="chat-prompt-text">Hola, encantado de conocerte :)</span>
						</div>
						<div class="chat-prompts-single-message">
							<span class="chat-prompt-text">Una bebé muy sexy</span>
						</div>
					</div>

					<div class="chat-prompts-slide d-flex justify-content-around">
						<div class="chat-prompts-single-message">
							<span class="chat-prompt-text">You look stunning!</span>
						</div>
						<div class="chat-prompts-single-message">
							<span class="chat-prompt-text">Me encanta cómo te mueves</span>
						</div>
					</div>

					<div class="chat-prompts-slide d-flex justify-content-around">
						<div class="chat-prompts-single-message">
							<span class="chat-prompt-text">Me encantaría conocerte mejor</span>
						</div>
						<div class="chat-prompts-single-message">
							<span class="chat-prompt-text">Very nice!</span>
						</div>
					</div>

					<div class="chat-prompts-slide d-flex justify-content-around">
						<div class="chat-prompts-single-message">
							<span class="chat-prompt-text">What kind of show would we have together?</span>
						</div>
					</div>

				</div>
			</div>
			<div class="chat-prompts-next-arrow chat-prompts-arrow"><i class="icon-right"></i></div>
		</div>
	</div>

                
                <div id="micLabel" class="tooltip tip-top" data-state="start">
                    <i id="speechToTextIcon" class="icon-microphone"></i>
                    <span class="tip speechtotext-tooltip">Tooltip text....</span>
                </div>

                <div class="chat-emojis">
                    <input type="radio" id="emojiBox" name="userControls" class="hide">
                    <label for="emojiBox" class="emoji-select">
                        <span class="visually-hidden">emoji select</span>
                        <i class="icon-happyface emoji-icon"></i>
                    </label>
                    <label class="close-menu" for="userControlsOff"><span class="visually-hidden">Close</span></label>
                    <div class="user-control-switches">
                        <div class="emoji-inner-header">
                            <div id="emojis-title" class="active-title">Emojis                                <div class="tooltip tip-bottom">
                                    Want more emojis?
                                    <span class="tip">
                                        <ol class="chrome-emoji-tooltip">
                                            <li>Haz click en el área "Enviar un mensaje..."</li>
                                            <li>Haz click con el botón derecho en el área actual</li>
                                            <li>Seleccione "Emoji" o "Emoji y símbolos"</li>
                                        </ol>
                                        <ol class="firefox-safari-emoji-tooltip">
                                            <li>Haz click en el área "Enviar un mensaje..."</li>
                                            <li>Abre el menú "Editar"</li>
                                            <li>Selecciona "Emoji y símbolos" <span class="safari-text-only">(^&#8984;SPACE)</span></li>
                                        </ol>
                                    </span>
                                </div>
                            </div>
                            <label for="userControlsOff" class="close-modal"><span class="visually-hidden">Close</span><i class="icon-x"></i></label>
                        </div>

                        <div class="tab-container">

                            <div class="tab-panels">
                                <section id="emoji" class="tab-panel active emoji-box light-scrollbar scrollbar-custom">
                                    <div class="original-emojis-container">
                                        
                                        
<a class="emo_wrap closeChatControls"><span class="happy" title="Feliz" data-nickname=':)'></span></a>
<a class="emo_wrap closeChatControls"><span class="smile" title="Sonrisa" data-nickname=':d'></span></a>
<a class="emo_wrap closeChatControls"><span class="wink" title="Guiño" data-nickname=';)'></span></a>
<a class="emo_wrap closeChatControls"><span class="cry" title="Llorar" data-nickname=":'("></span></a>
<a class="emo_wrap closeChatControls"><span class="sad" title="Triste" data-nickname=':('></span></a>
<a class="emo_wrap closeChatControls"><span class="tongue" title="Lengua" data-nickname=':p'></span></a>
<a class="emo_wrap closeChatControls"><span class="scared" title="Asustado" data-nickname=':-o'></span></a>


<a class="emo_wrap closeChatControls"><span class="hug" title="Abrazo" data-nickname='(hug)'></span></a>
<a class="emo_wrap closeChatControls"><span class="drool" title="Baba" data-nickname='(drool)'></span></a>
<a class="emo_wrap closeChatControls"><span class="sucking" title="Chupar" data-nickname='(sucking)'></span></a>
<a class="emo_wrap closeChatControls"><span class="puppy_dog_eyes" title="Ojos de cachorro" data-nickname='(puppyeyes)'></span></a>
<a class="emo_wrap closeChatControls"><span class="sarcasm" title="Sarcasmo" data-nickname='(sarcasm)'></span></a>
<a class="emo_wrap closeChatControls"><span class="sweating" title="Sudar" data-nickname='(sweating)'></span></a>
<a class="emo_wrap closeChatControls"><span class="blushing" title="Sonrojar" data-nickname='(blushing)'></span></a>
<a class="emo_wrap closeChatControls"><span class="nerd" title="Nerd" data-nickname='(nerd)'></span></a>
<a class="emo_wrap closeChatControls"><span class="lips_sealed" title="Boca cerrada" data-nickname='(lipssealed)'></span></a>
<a class="emo_wrap closeChatControls"><span class="giggle" title="Risita" data-nickname='(giggle)'></span></a>
<a class="emo_wrap closeChatControls"><span class="yummy" title="Delicioso" data-nickname='(yummy)'></span></a>
<a class="emo_wrap closeChatControls"><span class="money_eyes" title="Ojos de dinero" data-nickname='(moneyeyes)'></span></a>
<a class="emo_wrap closeChatControls"><span class="music" title="Música" data-nickname='(music)'></span></a>
<a class="emo_wrap closeChatControls"><span class="stay_awake" title="Mantente despierto" data-nickname='(stayawake)'></span></a>
<a class="emo_wrap closeChatControls"><span class="devil" title="Diablito" data-nickname='(devil)'></span></a>


<div class="clear"></div>
<div class="line"></div>



<a class="emo_wrap closeChatControls"><span class="lets_pledge" title="Vamos a comprometer" data-nickname='(letspledge)'></span></a>
<a class="emo_wrap closeChatControls"><span class="sunshine" title="Solecito" data-nickname='(sunshine)'></span></a>
<a class="emo_wrap closeChatControls"><span class="clouds" title="Nubes" data-nickname='(clouds)'></span></a>
<a class="emo_wrap closeChatControls"><span class="stormy" title="Tormenta" data-nickname='(stormy)'></span></a>
<a class="emo_wrap closeChatControls"><span class="rainbow" title="Arcoiris" data-nickname='(rainbow)'></span></a>
    <a class="emo_wrap closeChatControls"><span class="foot_womens" title="Pie" data-nickname='(foot)'></span></a>
<a class="emo_wrap closeChatControls"><span class="fire" title="Fuego" data-nickname='(fire)'></span></a>
<a class="emo_wrap closeChatControls"><span class="ok_hand" title="Bien" data-nickname='(ok)'></span></a>
    <a class="emo_wrap closeChatControls"><span class="pussy" title="Gatito" data-nickname='(pussy)'></span></a>
    <a class="emo_wrap closeChatControls"><span class="squirt" title="Chorrito" data-nickname='(squirt)'></span></a>


<a class="emo_wrap closeChatControls"><span class="broken_heart" title="Corazón roto" data-nickname='(brokenheart)'></span></a>
<a class="emo_wrap closeChatControls"><span class="martini" title="Martini" data-nickname='(martini)'></span></a>
<a class="emo_wrap closeChatControls"><span class="beer_mug" title="Cerveza" data-nickname='(beermug)'></span></a>
<a class="emo_wrap closeChatControls"><span class="bday_cake" title="Pastel de cumpleaños" data-nickname='(bdaycake)'></span></a>
<a class="emo_wrap closeChatControls"><span class="lightbulb" title="Foco" data-nickname='(lightbulb)'></span></a>
<a class="emo_wrap closeChatControls"><span class="phone" title="Teléfono" data-nickname='(phone)'></span></a>
<a class="emo_wrap closeChatControls"><span class="airplane" title="Avión" data-nickname='(airplane)'></span></a>
<a class="emo_wrap closeChatControls"><span class="island" title="Isla" data-nickname='(island)'></span></a>
<a class="emo_wrap closeChatControls"><span class="umbrella" title="Sombrilla" data-nickname='(umbrella)'></span></a>
<a class="emo_wrap closeChatControls"><span class="key" title="Llave" data-nickname='(key)'></span></a>

<a class="emo_wrap closeChatControls tallEmot"><span class="champange tallEmot" title="Champagne" data-nickname='(champ)'></span></a>
<a class="emo_wrap closeChatControls tallEmot"><span class="foam_finger" title="Dedo de goma" data-nickname='(foam)'></span></a>
<a class="emo_wrap closeChatControls tallEmot"><span class="hand_clap" title="Aplauso" data-nickname='(clap)'></span></a>
<a class="emo_wrap closeChatControls"><span class="jerkin" title="Tonteando" data-nickname='(jerk)'></span></a>
<a class="emo_wrap closeChatControls"><span class="lets_tip" title="Let's Tip" data-nickname='(letstip)'></span></a>
<a class="emo_wrap closeChatControls"><span class="oops" title="Ups" data-nickname='(oops)'></span></a>
<a class="emo_wrap closeChatControls"><span class="raspberry" title="Frambuesa" data-nickname='(rasp)'></span></a>
<a class="emo_wrap closeChatControls"><span class="tip_me" title="Dame una propina" data-nickname='(tipme)'></span></a>

<a class="emo_wrap closeChatControls tallEmot"><span class="sexy tallEmot" title="Sexy" data-nickname='(sexy)'></span></a>


<a class="emo_wrap closeChatControls"><span class="thumbs_up" title="Dedo gordo arriba" data-nickname='(y)'></span></a>
<a class="emo_wrap closeChatControls"><span class="award" title="Trofeo" data-nickname='(a)'></span></a>
<a class="emo_wrap closeChatControls"><span class="heart" title="Corazón" data-nickname='(h)'></span></a>
<a class="emo_wrap closeChatControls"><span class="king" title="Rey" data-nickname='(c)'></span></a>
<a class="emo_wrap closeChatControls"><span class="lips" title="Labios" data-nickname='(k)'></span></a>
<a class="emo_wrap closeChatControls"><span class="rose" title="Rosa" data-nickname='(f)'></span></a>
<a class="emo_wrap closeChatControls"><span class="dick" title="Pene" data-nickname='(d)'></span></a>
<a class="emo_wrap closeChatControls"><span class="star" title="Estrella" data-nickname='(s)'></span></a>

                                    </div>

                                    <div id='twemojis_container'>
                                                                                <div id="peopleEmoji" data-name="People" class="clearfix emojiSection"></div>
                                        <div id="foodAndDrinkEmoji" data-name="Food and Drink" class="clearfix emojiSection"></div>
                                        <div id="natureEmoji" data-name="Nature" class="clearfix emojiSection"></div>
                                        <div id="travelAndPlacesEmoji" data-name="Travel and Places" class="clearfix emojiSection"></div>
                                        <div id="activitiesEmoji" data-name="Activities" class="clearfix emojiSection"></div>
                                        <div id="celebrationEmoji" data-name="Celebration" class="clearfix emojiSection"></div>
                                        <div id="objectAndSymbolsEmoji" data-name="Object and Symbols" class="clearfix emojiSection"></div>
                                    </div>
                                </section>
                            </div>

                        </div>

                    </div>
                </div>

                                    <label for="panelModalOpen" class="panel-option device-wrap tooltip tip-bottom hide" id="tipActionsOption" data-display-title="Tip Actions" data-title="tipActions" data-desktop-panel-label="1">
                        <div class="bottom-bar-tip-actions-container">
                            <div class="icon-wrap btn-side">
                                <span class="tip">Tip Actions</span>
                                <svg enable-background="new 0 0 40 40" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">

	<path class="tip-actions-icon-path" d="m9.3 23.5c0.5 0 0.9-0.4 1-0.9l1.7-12.7h0.1c1 0 2-0.3 2.9-1 1-0.7 1.6-1.8 1.8-3l4.8 0.6-8.1 15.5c-0.3 0.5-0.1 1.1 0.4 1.3 0.1 0.1 0.3 0.1 0.5 0.1 0.4 0 0.7-0.2 0.9-0.5l7.8-15c0.6 0.2 1.2 0.3 1.7 0.3 1.7 0 3.3-0.9 4.1-2.4l2.4 1.3c-0.5 1.1-0.6 2.3-0.3 3.5 0.3 1 1 1.8 1.8 2.4l-4.7 9c-0.3 0.5-0.1 1.1 0.4 1.3 0.1 0.1 0.3 0.1 0.5 0.1 0.4 0 0.7-0.2 0.9-0.5l7.3-13.9c0.3-0.5 0.1-1.1-0.4-1.3l-11.6-6c-0.5-0.3-1.1-0.1-1.3 0.4l-1.4 2.6-10.7-1.4c-0.5-0.1-1.1 0.3-1.1 0.9l-2.4 18.2c-0.1 0.5 0.3 1 0.9 1.1h0.1zm24.5-12.2c-0.9-0.8-1.2-2.1-0.7-3.2l1.9 0.9-1.2 2.3zm-8.6-7.4 2 1c-0.7 1.1-2 1.6-3.2 1.2l1.2-2.2zm-10.4 1.8c-0.2 1.3-1.3 2.2-2.6 2.2l0.3-2.5 2.3 0.3z"/>
	<path class="tip-actions-icon-path" d="M5.2,28.2L1,35h2.2L4,33.7h2.2L6.4,35h2l-1.3-6.8H5.2z M4.7,32.2l1.1-1.9l0.2,1.9H4.7z"/>
	<path class="tip-actions-icon-path" d="m11.8 30.3c0.4-0.3 0.9-0.4 1.5-0.4 0.5 0 0.9 0 1.2 0.1s0.6 0.3 0.9 0.5l0.4-1.9c-0.3-0.2-0.6-0.3-1-0.4s-0.8-0.2-1.3-0.2c-1.2 0-2.2 0.3-3 0.9s-1.3 1.5-1.5 2.6c-0.1 0.3-0.1 0.6-0.1 0.9 0 0.6 0.1 1 0.4 1.4s0.6 0.7 1.1 0.9 1 0.3 1.6 0.3c1 0 1.9-0.2 2.6-0.6l0.4-1.9c-0.4 0.2-0.8 0.4-1.1 0.5-0.4 0.1-0.8 0.2-1.3 0.2-0.6 0-1-0.1-1.2-0.3s-0.4-0.5-0.4-0.8c0-0.2 0-0.4 0.1-0.7 0.1-0.4 0.3-0.8 0.7-1.1z"/>
	<polygon class="tip-actions-icon-path" points="21.9 28.2 16.1 28.2 15.8 29.9 17.6 29.9 16.5 35 18.6 35 19.6 29.9 21.5 29.9"/>
	<polygon class="tip-actions-icon-path" points="22.3 28.2 20.8 35 22.9 35 24.3 28.2"/>
	<path class="tip-actions-icon-path" d="m31.6 30.8c0-0.5-0.1-1-0.4-1.4s-0.6-0.7-1.1-1c-0.5-0.2-1-0.3-1.6-0.3-0.7 0-1.4 0.1-2 0.4s-1.1 0.7-1.6 1.3-0.7 1.2-0.9 1.9c-0.1 0.3-0.1 0.6-0.1 0.8 0 0.5 0.1 1 0.4 1.4s0.6 0.7 1.1 1c0.5 0.2 1 0.3 1.6 0.3 0.7 0 1.4-0.1 2-0.4s1.1-0.7 1.6-1.3c0.4-0.5 0.7-1.2 0.9-1.9 0.1-0.3 0.1-0.5 0.1-0.8zm-2.1 0.8c-0.1 0.5-0.4 0.9-0.7 1.2-0.4 0.3-0.8 0.5-1.2 0.5s-0.8-0.1-1-0.3-0.3-0.5-0.3-0.9c0-0.2 0-0.3 0.1-0.5 0.1-0.5 0.3-0.9 0.7-1.2s0.8-0.5 1.3-0.5c0.4 0 0.8 0.1 1 0.3s0.3 0.5 0.3 0.9c-0.1 0.2-0.2 0.3-0.2 0.5z"/>
	<polygon class="tip-actions-icon-path" points="37 28.2 36.2 31.8 34.8 28.2 32.9 28.2 31.4 35 33.5 35 34.2 31.4 35.6 35 37.6 35 39 28.2"/>

</svg>
                            </div>
                        </div>
                    </label>
                
                <div contenteditable="true" id="chatInput" data-text="Send a message..."></div>
                <div id="clearSendInp" class="tooltip tip-top">
                    <i class="icon-x-plain" id="clearSendInpIcon"></i>
                    <span class="tip speechtotext-tooltip">Clear chat input</span>
                </div>
                <div id="sendMessage" class="btn btn-send-message primary">Enviar</div>

            </div>

        </div>
    </div>




</div>				
            <div id="oneClickProdContainer" class="hide"></div>

<div class="one-click-product clonable-one-click-product hide">
<div class="amount-of-credits">
    <span class="selection-area"><i class="icon-success"></i></span>
        <span class="credit-amounts">
        <b></b>
        <div>Créditos</div>
    </span>
</div>
<div class="gradient-line-separator"></div>
<span class="credit-prices-2">
    <b>$10.00 + $2.00 VAT</b>
    <span class="free-credits-with-one-click-product">
        +50
        <br>
        Gratis!
    </span>
</span>
</div>

		</div>
    </div>
    
					
			 
			<div class="below-chat-arrow" data-aspect-vertical-offset="true" >
				<i class="icon-down toggle-bottom-bio-btn" title="desplácese hacia abajo para obtener más información sobre el modelo."></i>
			</div>

			<style>
    body.chat-room-opened:not(.chat-room-minimized) .chatroom-shadow{
        min-height: calc(100vh + 50px);
    }

    body.chat-room-opened .below-chat-arrow {
        display: block;
    }

    body.chat-room-minimized .chat-bio-nav-bar,
    body.chat-room-minimized .below-chat-bio,
    body.chat-room-minimized .bio-height {
        display: none;
    }

    .below-chat-arrow {
        background-color: transparent !important;
        font-size: 16px;
        color: #0a5ea6;
        text-align: center;
        text-decoration: none;
        display: none;
    }

    .below-chat-arrow:hover {
        color: #0a8aed;
        cursor: pointer;
    }

    .below-chat-bio {
        width: 100%;
        margin-top: 11px;
    }

    .large-video .below-chat-bio {
        width: 100%;
        margin-top: -60px;
    }

    .xl-video .below-chat-bio {
        width: 100%;
        margin-top: 11px;
    }

    .below-chat-bio .chat-bio-wrap {
        background-color: #131416;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }

    .below-chat-bio .chat-bio-wrap .mini-image {
        width: 170px;
        min-width: 170px;
        height: 170px;
        border-radius: 170px;
        background-size: auto 110%;
        border: 3px solid rgba(100,100,100,.5);
        margin: 10px 0px 10px 30px; 
    }

    .model-main-info {
        padding: 20px 10px 0px 23px;
        width: 55%; 
        box-sizing: border-box;
        margin: 10px; 
    }

    .model-main-info h2 {
        margin: 0px 0px  10px 0px;
        color: #cccccc;
        font-size: 24px;
        position: relative;
    }

    .model-main-info h2 span {
        color: #cccccc;
    }

    .model-main-info h2 .icon-heart {
        color: #131416;
        position: absolute;
        top: -3px;
        left: -32px;
        font-size: 26px;
        text-shadow: -1px -1px 0 #c52c0e, 1px -1px 0 #511307, -1px 1px 0 #c52c0e, 1px 1px 0 #c52c0e;
        cursor: pointer;
    }

    .model-main-info h2 .icon-heart:hover {
        color: #c52c0e;
        text-shadow: none;
        cursor: pointer;
    }

    .model-main-info h2 .icon-heart[data-value="favorited"] {
        color: #511307;
    }

    .below-chat-bio .chat-bio-wrap .star-ratings {
        color: #f0bf24;
        size: 13px;
        text-decoration: none;
    }

    .cutomer-rate-text {
        font-size:12px;
        color: #5a5a5c;
    }

    .last-online {
        color: #707072;
        font-size: 12px;
    }

    .model-main-info .tag-line {
        border:0;
        margin-top: 20px;
    }

    .model-image-slant {
        background-size: 100%;
        background-position: center;
        width: 100%;
        max-width: 60%;
        position: relative;
        text-align: center;
        overflow: hidden;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.64);
    }

    .model-image-slant:before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,.6);
    }

    .model-image-slant:after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: 0;
        border-right: 0;
        border-left: 76px solid #131416;
        border-bottom: 206px solid rgb(0 0 0 / 0%);
        border-top: 0px solid rgb(0 0 0 / 0%);
        border-left-color: #131416;
        border-right-color: rgb(0 0 0 / 0%);
    }

    .model-image-slant-inner {
        height: calc(100% - 40px);
        margin-top: 10px;
        width: 85%;
        margin-left: 10%;
        position: absolute;
        overflow: hidden;
        overflow-y: hidden;
    }

    .model-image-slant-inner:hover {
        overflow-y: overlay;
    }

    /* FF to show scrollbar */ 
    @-moz-document url-prefix() {
        .model-image-slant-inner:hover {
             overflow-y: auto;
        }
    }

    .model-image-slant article {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
    }

    .article-icon {
        width: 90px;
        font-size: 41px;
        color: rgba(255, 255, 255, .7);
        text-align: center;
    }

    .article-desc {
        font-size: 15px;
        width: 100%;
        padding: 0px  0px 0px 20px;
        margin-right: 30px;
        border-left: 1px solid rgba(255, 255, 255, .4);
    }

    .article-desc .models-desc {
        display: block;
        text-align: left;
    }

    .article-arrow {
        font-size: 14px;
        color: rgba(255, 255, 255, .6);
        position: absolute;
        bottom: 10px;
        width: 100%;
    }

    .chat-bio-nav-bar {
        background-color: #131416;
        text-align: center;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        height: 40px;
        line-height: 40px;
        margin: 1px 0px;
    }

    .chat-bio-nav-bar a {
        display: inline-block;
        color: #b7b4b4;
        text-decoration: none;
        padding: 0 10px 0px 30px;
        font-size: 13px;
        border-left: 1px solid rgba(150,150,150,.1);
        position: relative;
    }

    .chat-bio-nav-bar a:last-child {
        border-right: 1px solid rgba(150,150,150,.1);
    }

    .chat-bio-nav-bar a i,
    .wl.xvc .chat-bio-nav-bar a i {
        position: absolute;
        top:1px;
        left:10px;
    }

    .chat-bio-nav-bar a:hover {
        color: #d6ecf7;
        text-decoration: none;
        background-color: rgba(150,150,150,.1);
    }

     /* WL */
    .wl .chat-bio-nav-bar a i {
        top:14px;
    }
    
    /* Light colors */
    
    .light .model-main-info h2 .icon-heart {
        color: #ab4532;
    }

    .light .chat-bio-nav-bar a  {
        color: #333;
    }

    .light .chat-bio-nav-bar a:hover  {
        color: #000;
    }

    .wl.dark a.below-chat-arrow {
        background-color: #000;
    }

    .light a.below-chat-arrow {
        background-color: #eee;
    }

    .light .below-chat-bio .chat-bio-wrap,
    .light .chat-bio-nav-bar {
        background-color: #ccc;
    }

    .light .below-chat-arrow {
        background-color: #eee;
    }

    .light .model-main-info h2 span {
        color: #333;
    }

    .light .model-image-slant:before {
        background-color: rgb(255 255 255 / 60%);
    }

    .light .model-image-slant:after {
        border-left: 76px solid #ccc;
        border-left-color: #ccc;
    }

    .light .article-icon {
        color: rgb(0 0 0 / 70%);
    }

    .light .article-desc {
        border-left: 1px solid rgb(0 0 0 / 40%);
    }

    .light .article-arrow {
        color: rgb(0 0 0 / 60%);
    }

    .below-chat-bio .chat-bio-wrap .star-ratings .icon-star-outline {
        color: #777;
    }

    body.chat-room-opened:not(.chat-room-minimized) .bio-height {
        height: 250px; 
        display: block;
    }

</style>


<div class="model-bio-loader justify-content-center mt-xl mb-xl hide">
    <i class="loading-v2 lg"></i>
</div>
<div class="bio-height">
    <div class="below-chat-bio hide">
        <div class="chat-bio-wrap">
            <div class="mini-image"></div>
            <div class="model-main-info">
                <h2>
                    <i class="icon-heart chat-bio-favorite-btn" title="add/remove to favorites."></i> 
                    <span class="model-screen-name"></span>
                </h2>
                <a target="_blank" href="javascript:void(0);" class="star-ratings">
                    <span class="visually-hidden">Star rating</span>
                    <i class="icon-star-solid"></i>
                    <i class="icon-star-solid"></i>
                    <i class="icon-star-solid"></i>
                    <i class="icon-star-solid"></i>
                    <i class="icon-star-outline"></i> 
                </a>
                <div class="cutomer-rate-text">Customers rated <span class="model-screen-name"></span> <span class="model-rating"></span> out of 5 based on <a target="_blank" class="reviews-link" href="javascript:void(0);"><span class="visually-hidden">Reviews link</span></a>.</div>
                <div class="last-online"></div>
                <div class="tag-line">"<span class="model-tagline-text">Hello lovely I'm here to make you smile * make each other happier</span>"</div>
            </div>
            <div class="model-image-slant" style="background-image:url('https://cdn5.vscdns.com/images/models/samples-800x600/3559874.jpg');">

                <div class="model-image-slant-inner scrollbar-ghost">

                    <article class="model-description-wrap model-bio-description hide">
                        <div class="article-icon">
                            <i class="icon-fake-mask"></i>
                        </div>
                        <div class="article-desc">
                            <i class="models-desc model-description-text"></i>
                        </div>
                    </article> 

                    <article class="model-obsessions-desires-wrap model-bio-description hide" title="Mis obsesiones y deseos">
                        <div class="article-icon">
                            <i class="icon-happyface"></i>
                        </div>
                        <div class="article-desc">
                            <i class="models-desc model-obsessions-desires-text"></i>
                        </div>
                    </article> 

                    <article class="model-fetish-wrap model-bio-description hide" title="Mis fetiches">
                        <div class="article-icon">
                            <i class="icon-fetish"></i>
                        </div>
                        <div class="article-desc">
                            <i class="models-desc model-fetish-text"></i>
                        </div>
                    </article> 

                    <article class="model-toy-wrap model-bio-description hide" title="Juguetes sexuales">
                        <div class="article-icon">
                        <i class="icon-feel-connect"></i>
                        </div>
                        <div class="article-desc">
                            <i class="models-desc model-toy-text"></i>
                        </div>
                    </article> 

                    <article class="model-roleplay-wrap model-bio-description hide" title="Escenario de juego de roles">
                        <div class="article-icon">
                            <i class="icon-dating"></i>
                        </div>
                        <div class="article-desc">
                            <i class="models-desc model-roleplay-text"></i>
                        </div>
                    </article> 

                    <article class="model-special-info-wrap model-bio-description hide" title="Información especial">
                        <div class="article-icon">
                            <i class="icon-star-solid"></i>
                        </div>
                        <div class="article-desc">
                            <i class="models-desc model-special-info-text">
                            RULES!1. Disrespect is not tolerated in this room.2. No request a bigger dildo in my pussy,im no Obliged to do it.3. Every request in open chat need a tip.4. Non-compliance with rules= Ban of room.
                            </i>
                        </div>
                    </article> 

                    <article class="model-additional-info-wrap model-bio-description hide" title="Información adicional">
                        <div class="article-icon">
                            <i class="icon-i"></i>
                        </div>
                        <div class="article-desc">
                            <i class="models-desc model-additional-info-text"></i>
                        </div>
                    </article> 


                </div> 
                <div class="article-arrow"><i class="icon-down" title="desplazarse"></i></div>
            </div>
        </div>
    </div>
    <div class="chat-bio-nav-bar hide">
        <a class="chat-bio-model-link" href="javascript:void(0);" target="_blank">
            <i class="icon-external-link"></i> Ver mi biografía completa        </a>
        <a class="chat-bio-powerboost" href="javascript:void(0);">
            <i class="icon-rocket"></i> Dame un impulso de poder        </a>
        <a class="chat-bio-notifications" href="javascript:void(0);">
            <i class="icon-notification"></i> <span class="add-or-remove-notifications-text">Add to</span> Notificaciones        </a>
        <a class="chat-bio-flirt-phone-link" href="javascript:void(0);" target="_blank">
            <i class="icon-flirtphone"></i> Teléfono de coqueteo        </a>
        <a class="chat-bio-send-gift-link" href="javascript:void(0)">
            <i class="icon-present"></i> Envíame un regalo        </a>
        <a class="chat-bio-dm" href="javascript:void(0);">
            <i class="icon-dm-bubble"></i> Enviar mensaje directo        </a>
    </div>
</div>
			<style>

body.chat-room-opened:not(.chat-room-minimized) .bio-height {
	height: 100%;
	max-height: 250px;
}

body:not(.chat-room-opened) .chatroom-gallery-tabs {
    display: none;
}

.chatroom-gallery-tabs {
    background: #131416;
}

.light .chatroom-gallery-tabs {
    background: #e3e4e9;
    color: #333;
}

.chatroom-gallery-tabs {
    margin-bottom: 20px;
}

.chatroom-gallery-tabs > input[type=radio] {
    display: none;
}

/* Tabs */
.chatroom-gallery-tabs .tab-info {
    border: none;
}

.responsive-tabs {
    max-width: 92%;
    margin: auto;
}

.chatroom-gallery-tabs input[type=radio]:nth-child(1):checked ~ .responsive-tabs label:nth-child(1),
.chatroom-gallery-tabs input[type=radio]:nth-child(2):checked ~ .responsive-tabs label:nth-child(2),
.chatroom-gallery-tabs input[type=radio]:nth-child(3):checked ~ .responsive-tabs label:nth-child(3),
.chatroom-gallery-tabs input[type=radio]:nth-child(4):checked ~ .responsive-tabs label:nth-child(4),
.chatroom-gallery-tabs input[type=radio]:nth-child(5):checked ~ .responsive-tabs label:nth-child(5) {
    background-color: #131416;
    border: none;
    padding: 0 30px;
    color: #00a9e7;
}

.chatroom-gallery-tabs input[type=radio]:nth-child(1):checked ~ .responsive-tabs label:nth-child(1) .blue-underline,
.chatroom-gallery-tabs input[type=radio]:nth-child(2):checked ~ .responsive-tabs label:nth-child(2) .blue-underline,
.chatroom-gallery-tabs input[type=radio]:nth-child(3):checked ~ .responsive-tabs label:nth-child(3) .blue-underline,
.chatroom-gallery-tabs input[type=radio]:nth-child(4):checked ~ .responsive-tabs label:nth-child(4) .blue-underline,
.chatroom-gallery-tabs input[type=radio]:nth-child(5):checked ~ .responsive-tabs label:nth-child(5) .blue-underline {
    border-bottom: 3px solid #00a9e7;
}

/* WL */
.light .chatroom-gallery-tabs input[type=radio]:nth-child(1):checked ~ .responsive-tabs label:nth-child(1),
.light .chatroom-gallery-tabs input[type=radio]:nth-child(2):checked ~ .responsive-tabs label:nth-child(2),
.light .chatroom-gallery-tabs input[type=radio]:nth-child(3):checked ~ .responsive-tabs label:nth-child(3),
.light .chatroom-gallery-tabs input[type=radio]:nth-child(4):checked ~ .responsive-tabs label:nth-child(4),
.light .chatroom-gallery-tabs input[type=radio]:nth-child(5):checked ~ .responsive-tabs label:nth-child(5) {
    background-color: #e3e4e9;
    padding: 15px 30px 5px;
    color: #333;
}

.light .chatroom-gallery-tabs input[type=radio]:nth-child(1):checked ~ .responsive-tabs label:nth-child(1) .blue-underline,
.light .chatroom-gallery-tabs input[type=radio]:nth-child(2):checked ~ .responsive-tabs label:nth-child(2) .blue-underline,
.light .chatroom-gallery-tabs input[type=radio]:nth-child(3):checked ~ .responsive-tabs label:nth-child(3) .blue-underline,
.light .chatroom-gallery-tabs input[type=radio]:nth-child(4):checked ~ .responsive-tabs label:nth-child(4) .blue-underline,
.light .chatroom-gallery-tabs input[type=radio]:nth-child(5):checked ~ .responsive-tabs label:nth-child(5) .blue-underline {
    border-bottom: 3px solid #333;
    padding: 15px 30px 5px;
}

.wl.dark .chatroom-gallery-tabs input[type=radio]:nth-child(1):checked ~ .responsive-tabs label:nth-child(1),
.wl.dark .chatroom-gallery-tabs input[type=radio]:nth-child(2):checked ~ .responsive-tabs label:nth-child(2),
.wl.dark .chatroom-gallery-tabs input[type=radio]:nth-child(3):checked ~ .responsive-tabs label:nth-child(3),
.wl.dark .chatroom-gallery-tabs input[type=radio]:nth-child(4):checked ~ .responsive-tabs label:nth-child(4),
.wl.dark .chatroom-gallery-tabs input[type=radio]:nth-child(5):checked ~ .responsive-tabs label:nth-child(5) {
    color: #eee;
}

.wl.dark .chatroom-gallery-tabs input[type=radio]:nth-child(1):checked ~ .responsive-tabs label:nth-child(1) .blue-underline,
.wl.dark .chatroom-gallery-tabs input[type=radio]:nth-child(2):checked ~ .responsive-tabs label:nth-child(2) .blue-underline,
.wl.dark .chatroom-gallery-tabs input[type=radio]:nth-child(3):checked ~ .responsive-tabs label:nth-child(3) .blue-underline,
.wl.dark .chatroom-gallery-tabs input[type=radio]:nth-child(4):checked ~ .responsive-tabs label:nth-child(4) .blue-underline,
.wl.dark .chatroom-gallery-tabs input[type=radio]:nth-child(5):checked ~ .responsive-tabs label:nth-child(5) .blue-underline {
    border-bottom: 3px solid #eee;
}

.chatroom-gallery-tabs .responsive-tabs label.btn {
    margin: 0;
    box-sizing: border-box;
    padding: 0 30px;
    border: none;
    color: #ddd;
    white-space: wordwrap;
    margin-right: 3px;
    border-radius: 3px;
    background-color: #131416;
    display: flex;
    align-items: center;
    padding: 0 23px;
    font-size: 15px;
    font-weight: 600;
}

.light .chatroom-gallery-tabs .responsive-tabs label.btn { 
    background-color: #cfd0d5;
}

.chatroom-gallery-tabs input[type="radio"]:nth-child(1):checked ~ .responsive-tabs label:nth-child(1) .blue-underline, 
.chatroom-gallery-tabs input[type="radio"]:nth-child(2):checked ~ .responsive-tabs label:nth-child(2) .blue-underline, 
.chatroom-gallery-tabs input[type="radio"]:nth-child(3):checked ~ .responsive-tabs label:nth-child(3) .blue-underline, 
.chatroom-gallery-tabs input[type="radio"]:nth-child(4):checked ~ .responsive-tabs label:nth-child(4) .blue-underline, 
.chatroom-gallery-tabs input[type="radio"]:nth-child(5):checked ~ .responsive-tabs label:nth-child(5) .blue-underline {
    border-bottom: 3px solid #00a9e7;
    padding: 0px 6px 4px;
}

.chatroom-gallery-tabs input[type=radio]:nth-child(1):checked ~ .tab-info-wrap > .tab-info:nth-child(1),
.chatroom-gallery-tabs input[type=radio]:nth-child(2):checked ~ .tab-info-wrap > .tab-info:nth-child(2),
.chatroom-gallery-tabs input[type=radio]:nth-child(3):checked ~ .tab-info-wrap > .tab-info:nth-child(3),
.chatroom-gallery-tabs input[type=radio]:nth-child(4):checked ~ .tab-info-wrap > .tab-info:nth-child(4),
.chatroom-gallery-tabs input[type=radio]:nth-child(5):checked ~ .tab-info-wrap > .tab-info:nth-child(5) {
    display: block;
}

/* Chat Gallery Columns */
.chat-bio-gallery-container {
    display: flex;
    gap: 7px;
    justify-content: center;
    width: 90%;
    margin: auto;
}

.chat-gallery-column,
.chat-galleries-column {
    line-height: .01;
    width: 16.5%;
}

.chat-gallery-column img,
.chat-galleries-column img {
    width: 100%;
    box-shadow: 0 2px 7px #000;
    object-fit: cover;
    margin-bottom: 7px;
    min-width: 200px;
}

.chat-gallery-column img:hover,
.chat-galleries-column img:hover {
    cursor: pointer;
}

.light .chat-gallery-column img,
.light .chat-galleries-column img {
    box-shadow: 0 2px 7px rgba(60,60,60,.86);
}

.chat-bio-gallery-container .chat-gallery-column:nth-child(odd) img:nth-child(even),
.chat-galleries-column:nth-child(odd) img:nth-child(even) {
    min-height: 350px;
    object-fit: cover;
}

.chat-bio-gallery-container .chat-gallery-column:nth-child(even) img:nth-child(odd),
.chat-galleries-column:nth-child(even) img:nth-child(odd) {
    min-height: 350px;
    object-fit: cover;
}

.chat-bio-gallery-container .chat-gallery-column:nth-child(even) img:last-of-type,
.chat-galleries-column:nth-child(even) img:last-of-type {
    min-height: unset;
    object-fit: unset;
}

@media (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .chat-bio-gallery-container .chat-gallery-column img,
    .chat-galleries-column img {
        min-height: auto !important;
    }
}

/* Photo Viewer */
.chat-bio-gallery-photo-viewer {
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    top: 0px;
    z-index: 100;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gallery-loader {
    display: flex;
}

.photo-viewer-backdrop {
    width: 100%;
    height: 100%;
    position: absolute;
}

.photo-viewer-prev i, 
.photo-viewer-next i {
    font-size: 40px;
}

.photo-viewer-prev i, 
.photo-viewer-next i {
    font-size: 40px;
    color: #fff;
}

.photo-viewer-prev:hover,
.photo-viewer-next:hover,
.photo-view-close:hover {
    cursor: pointer;
}

.photo-viewer-prev *,
.photo-viewer-next *,
.photo-view-close * { 
    pointer-events: none;
}

.photo-viewer-prev, .photo-viewer-next {
    line-height: 1;
    margin: 0 10px;
    position: relative;
    z-index: 100;
}

.photo-viewer-prev i:active, 
.photo-viewer-next i:active
.photo-viewer-prev:active i, 
.photo-viewer-next:active i {
    color: rgb(46, 236, 241);
}


.photo-viewer-image-container {
    position: relative;
    max-height: 98vh;
    max-width: calc(100vW - 102px);
    box-shadow: 0 1px 30px rgba(0,0,0,0.95);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.photo-viewer-image-container img {
    width: 100%;
    max-height: 94vh;
    object-fit: cover;
}

@media (max-width: 1400px) {
    .photo-viewer-image-container:not(:root:root) {
        max-height: 80vh;
    }
}


body .chatroom-container {
    transform: none !important;
}

.photo-view-close {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    line-height: 0.1;
    font-size: 25px;
    border-radius: 50%;
    padding: 4px;
    background: #565656;
    top: -15px;
    right: -15px;
}

/* Mini Player */
.is-mini-player .aspect-ratio-box {
    z-index: 200;
}

.is-mini-player .bottom-controls #startShow.btn {
    padding: 5px 0;
}

.is-mini-player .tip-image {
    background-image: url("https://cdn5.vscdns.com/images/icons/tip-sprite.webp");
}

.is-mini-player .tip-image:not(:root:root) {
    background-image: url("https://cdn5.vscdns.com/images/icons/tip-sprite.png");
}

@media (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .is-mini-player .tip-image {
        background-image: url("https://cdn5.vscdns.com/images/icons/tip-sprite.png");
    }
    .is-mini-player .tip-credit{
        display: block;
    }
}

.is-mini-player .chat-bio-gallery-photo-viewer {
   /*  z-index: 1;  This was blocking the draggable video */
}

.is-mini-player .AB120 img {
    width: 65px;
}

.is-mini-player .f4f-watermark {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 26px;
    z-index: 1;
    background: url("https://cdn5.vscdns.com/images/chat/html5/f4f-watermark.png") no-repeat;
    background-size: contain;
}

.is-mini-player .chatroom-container .model-video-player,
.is-mini-player .chatroom-container #nanoVideoContainer {
    box-shadow: 10px 20px 7px rgba(0,0,0,.3);
    border: 1px solid #555;
}

.is-mini-player.light .chatroom-container .model-video-player,
.is-mini-player.light .chatroom-container #nanoVideoContainer {
    border: 1px solid #bbb;
}

.is-mini-player .curtain-messages-inner .curtain-button-container {
    margin-top: -10px;
    margin-bottom: 30px;
    border-radius: 0;
}

.is-mini-player .tip-image {
    float: none;
    width: 50%;
    height: 43px;
    background-color: #363535;
    background-color: transparent;
    background-size: 44px auto;
    background-repeat: no-repeat;
}

.is-mini-player.light .tip-button:hover .tip-credit {
    color: #222;
}

.is-mini-player .chatroom-container.idle-guest .curtain-messages.idle-guest{
    padding: 0 80px 0;
    border-radius: 0;
}

.is-mini-player .tip-10 {
    background-position: center 0px;
}

.is-mini-player .tip-25 {
    background-position: center -45px;
}

.is-mini-player .tip-50 {
    background-position: center -93px;
}

.is-mini-player .tip-100 {
    background-position: center -132px;
}

.is-mini-player .tip-500 {
    background-position: center -223px;
}

.is-mini-player .tip-1000 {
    background-position: center -265px;
}

.is-mini-player .tip-5000 {
    background-position: center -399px;
}

.is-mini-player .tip-10000 {
    background-position: center -441px;
}

.is-mini-player .tip-25000 {
    background-position: center -485px;
}

.is-mini-player .tip-50000 {
    background-position: center -530px;
}

.is-mini-player .tip-credit {
    padding: 3px 7px;
}

.is-mini-player .idle-guest .curtain-messages-inner .model-curtain-image {
    position: absolute;
    top: 0px;
    border: 5px solid;
    width: 150px;
    height: 150px;
    left: -101px;
}

.is-mini-player .tip-meter-on .AB120 a {
    right: 0;
}

.is-mini-player .deals-start-show-panel,
.is-mini-player .idle-guest .start-show-container,
.is-mini-player .tip-btn-container .tip-button[data-tip="custom"],
.is-mini-player .is-idle-guest .AB120,
.is-mini-player .tip-btn-container .tip-button[data-tip="flood"],
.is-mini-player .previous-model,
.is-mini-player .next-model,
.is-mini-player .private .aspect-ratio-inner,
.is-mini-player .group.private .aspect-ratio-inner,
.is-mini-player .offline .aspect-ratio-inner,
.is-mini-player .members-only-room .open .aspect-ratio-inner,
.is-mini-player .break .aspect-ratio-inner,
.is-mini-player .vid-controls-container,
.mini-player-tipping,
.mini-player-tipping-options,
.mini-player-private,
.mini-player-buttons,
.mini-player-tipping input[type="radio"]{
    display: none;
}

.aspect-ratio-inner {
    transition: none; 
}

.is-mini-player .aspect-ratio-inner {
    position: fixed;
    width: 320px;
    height: 180px; 
    z-index: 11;
    top: calc(100% - 277px);
    left: calc(100% - 349px);
    transition: none;
    max-width: 320px !important;
}

.is-mini-player .aspect-ratio-inner:hover {
    cursor: grab;
}

.is-mini-player #userState:active ~ *,
.is-mini-player #userState .aspect-ratio-inner:active {
    cursor: grabbing;
}

.is-mini-player.chat-room-opened #userState:hover ~ .mini-player-buttons,
.is-mini-player.chat-room-opened .mini-player-buttons:hover {
	width: 322px;
	position: fixed;
	top: calc(100% - 99px);
	left: calc(100% - 349px);
	z-index: 200;
    display: flex;
}
.is-mini-player.chat-room-opened #userState:hover ~ .mini-player-buttons:not(:root:root),
.is-mini-player.chat-room-opened .mini-player-buttons:hover:not(:root:root) {
    top: calc(100% - 99px);
}

.is-mini-player .tip-button {
    width: 100%;
    border-top: 1px solid #222;
    border-bottom: 0;
}

.is-mini-player.light .tip-button {
    border-top: 1px solid #999;
}

.is-mini-player.light .tip-button,
.is-mini-player.light .tip-credit,
.is-mini-player.light .tip-credit:hover {
    background-color: #ccc;
    color: #222;
}


.is-mini-player.chat-room-opened #userState:hover ~ .mini-player-buttons .mini-player-private,
.is-mini-player.chat-room-opened #userState:hover ~ .mini-player-buttons .mini-player-tipping,
.is-mini-player.chat-room-opened .mini-player-buttons:hover .mini-player-tipping,
.is-mini-player.chat-room-opened .mini-player-buttons:hover .mini-player-private {
    display: flex;
}
.is-mini-player.chat-room-opened .party #userState:hover ~ .mini-player-buttons .mini-player-private,
.is-mini-player.chat-room-opened .party .mini-player-buttons:hover .mini-player-private {
    display: none;
}

.is-mini-player.chat-room-opened .party .mini-player-tipping.btn.col-6 {
    width: 100%;
}

.is-mini-player.chat-room-opened #userState:hover ~ .mini-player-buttons .mini-player-tipping,
.is-mini-player.chat-room-opened .mini-player-buttons:hover .mini-player-tipping  {
    display: flex;
    background: #202123;
    color: #dedede;
    border-radius: 3px;
    flex-direction: column;
    align-items: center;
    z-index: 201;
    justify-content: center;
}

.is-mini-player.chat-room-opened.light #userState:hover ~ .mini-player-buttons .mini-player-tipping,
.is-mini-player.chat-room-opened.light .mini-player-buttons:hover .mini-player-tipping {
    background: #ccc;
    color: #333;
}

.is-mini-player.chat-room-opened .mini-player-tipping:hover .mini-player-tipping-options {
    display: flex;
    width: 161px;
    flex-wrap: wrap;
    position: absolute;
    z-index: 206;
    bottom: 25px;
    right: 0px;
}

.is-mini-player.chat-room-opened .ie-edge .mini-player-tipping:hover .mini-player-tipping-options {
    bottom: 26px;
}

.is-mini-player.chat-room-opened .mini-player-tipping:hover .mini-player-tipping-options:not(:root:root) {
    bottom: 24px;
}

.is-mini-player.chat-room-opened.whitelabel .mini-player-tipping:hover .mini-player-tipping-options {
    bottom: 24px;
}

.is-mini-player.chat-room-opened.xvc .mini-player-tipping:hover .mini-player-tipping-options {
    bottom: 24px;
}

@media (max-width: 1919px) {
    .is-mini-player.chat-room-opened .mini-player-tipping:hover .mini-player-tipping-options {
        bottom: 27px;
    }
} 
@media (max-width: 1450px) {
    .is-mini-player.chat-room-opened .mini-player-tipping:hover .mini-player-tipping-options {
        bottom: 24px;
    }
    .is-mini-player.chat-room-opened.xvc .mini-player-tipping:hover .mini-player-tipping-options {
        bottom: 20px;
    }
    .is-mini-player.chat-room-opened.whitelabel .mini-player-tipping:hover .mini-player-tipping-options {
        bottom: 22px;
    }
} 


.is-mini-player.chat-room-opened label[for="tipping-1"] {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.is-mini-player.chat-room-opened label[for="tipping-2"] {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    height: 125px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color:#aaa #222;
}

.is-mini-player.chat-room-opened label[for="tipping-2"]::-webkit-scrollbar {
    appearance: none;
    background:#222;
    width: 8px;
}

.is-mini-player.chat-room-opened label[for="tipping-2"]::-webkit-scrollbar-thumb {
    background: #333;
}

.is-mini-player.chat-room-opened.light label[for="tipping-2"]::-webkit-scrollbar {
    background:#777;
}

.is-mini-player.chat-room-opened.light label[for="tipping-2"]::-webkit-scrollbar-thumb {
    background: #cbcbcb;
}

.is-mini-player .group-pledge-mini {
    display: none;
}

.is-mini-player .group .group-pledge-mini {
    display: block;
}

.is-mini-player .group .mini-player-private label:nth-child(1) {
    display: none;
}

.chat-bio-gallery-container .model-screen-name {
    text-shadow: 0 1px 9px #000;
}

.chat-bio-gallery-container .photo-viewer-image-container .col-12 {
    bottom: 0;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%); 
}

@media (max-width: 1450px) {
    .chat-bio-gallery-container {
        width: 96%;
    }
}

@media (max-width: 1280px) {            
    .chat-gallery-column {
        line-height: .01;
        width: 32%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 -6px;
    }
    .chat-bio-gallery-container {
        flex-wrap: wrap;
    }
    .chat-bio-gallery-container .chat-gallery-column:nth-child(2n) img:last-of-type {
        object-fit: cover;
    }
}

</style>

<div class="chatroom-gallery-tabs hide">
    <input type="radio" id="tab-1" name="chatroom-gallery-tabs" checked>
    <input type="radio" id="tab-2" name="chatroom-gallery-tabs">
    <input type="radio" id="tab-3" name="chatroom-gallery-tabs">
    <input type="radio" id="tab-4" name="chatroom-gallery-tabs">
    
    <div class="responsive-tabs">
        <div class="tab-btns">
            <label for="tab-1" class="btn"><span class="blue-underline">Photos</span></label>
                    </div>
    </div>
    <div class="tab-info-wrap">
        <div class="tab-info chat-bio-photo-galleries-section">
            <style>
    .gallery-wrap {
        width: 90%;
        margin: auto;
    }
    .chat-galleries-modal-container {
        height: 91vh;
        display: none;
        position: fixed;
        z-index: 100;
        top: 50px;
        width: 100vw;
        left: 0;
        justify-content: center;
    }
    .chat-galleries-column img {
        max-width: 100%;
        box-shadow: 0 2px 7px #000;
    }
    .chat-galleries .d-flex.mt-md {
        gap: 8px;
    }
    .chat-galleries .model-screen-name {
        border-bottom: 1px solid #565654;
        letter-spacing: 1px;
        font-size: 18px;
        padding: 0 0 10px;
    }
    .light .chat-galleries .model-screen-name {
        border-bottom: 1px solid #b5b5b5;
    }
    .chat-galleries-column {
        line-height: .01;
        width: 16.5%;
    }
    .chat-bio-gallery-container {
        justify-content: flex-start;
    }
    .chat-bio-titles span {
        color: #00a9e7;
        padding: 0px 6px 4px;
        font-size: 15px;
        font-weight: 600;
        white-space: nowrap;
    }
    .blue-underline {
        border-bottom: 3px solid #00a9e7;
    }
    .chat-galleries-modal-container.d-flex {
        gap: 0px;
    }
    .chat-galleries-modal select, 
    .chat-galleries-modal textarea {
        background: #333;
        color: #eee;
        border: 0;
        padding: 4px;
        margin: 0 0 10px;
        border-radius: 5px;
        -webkit-appearance: none;
        font-family: 'Open Sans';
        font-size: 14px;
    }
    .light .chat-galleries-modal select, 
    .light .chat-galleries-modal textarea {
        background: #b7b7b7;
        color: #333;
    }
    .gallery-wrap i {
        position: relative;
        top: 2px;
    }
    .chat-galleries-comments {
        max-height: 65%;
        overflow-y: scroll;
        scrollbar-color:#aaa #222;
    }
    .chat-galleries-comment {
        border-top: 1px solid #565654;
    }
    .chat-galleries-comment:last-child {
        border-bottom: 1px solid #565654;
    }
    .light .chat-galleries-comment {
        border-top: 1px solid #b5b5b5;
        color: #555;
    }
    .light .chat-galleries-comment:last-child {
        border-bottom: 1px solid #b5b5b5;
    }
    .user-avatar figure {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-size: 100%;
    }
    .user-avatar p {
        font-size: 11px;
        font-weight: 700;
    }
    .chat-galleries-comments p.m-0.mt-xs {
        font-size: 13px;
    }
    .chat-galleries-modal {
        max-width: 80vw;
        display: flex;
        justify-content: space-around;
        background: rgba(0,0,0,.9);
        box-shadow: 0 2px 10px rgba(0,0,0,.94);
    }
    .light .chat-galleries-modal {
        background: rgba(255,255,255,.85);
        box-shadow: 0 2px 10px rgba(0,0,0,.34);
    }
    .chat-galleries-modal-container .close-btn{
        width: 27px;
        height: 27px;
        background: #565656;
        right: -10px;
        border-radius: 50%;
        color: #acacac;
        display: flex;
        justify-content: center;
        top: -11px;
        border: 2px solid rgba(0,0,0,.7);
    }
    .light .chat-galleries-modal-container .close-btn{
        background: #686868;
        color: #c0c0c0;
        border: 2px solid rgba(255,255,255,.7);
    }
    .chat-galleries-modal i {
        font-size: 23px;
    }
    .chat-galleries-modal i.icon-profile {
        font-size: 59px;
    }
    .light .chat-galleries-modal i.icon-profile {
        color: #777;
    }
    .chat-galleries-modal i.icon-calendar {
        font-size: 16px;
    }
    .chat-galleries-modal img {
        max-width: 81%;
        object-fit: cover;
    }

    .chat-galleries-comments::-webkit-scrollbar {
        appearance: none;
        background:#777;
        width: 8px;
    }

    .dark .chat-galleries-comments::-webkit-scrollbar {
        background:#222;
    }

    .dark .chat-galleries-comments::-webkit-scrollbar-thumb {
        background: #444; 
    }

    .dark .chat-galleries-comments::-webkit-scrollbar-track {
        background:  #222;
    }

    .dark .chat-galleries-comments::-webkit-scrollbar-corner {
        background: #222;
    }

    .dark .chat-galleries-comments::-webkit-scrollbar-track-piece {
        background: #222;
    }

    .dark .chat-galleries-comments::-webkit-resizer {
        background: #222;
    }

    .light .chat-galleries-comments::-webkit-scrollbar {
        background:#777;
    }

    .light .chat-galleries-comments::-webkit-scrollbar-thumb {
        background: #555; 
    }

    .light .chat-galleries-comments::-webkit-scrollbar-track {
        background:  #aaa;
    }

    .light .chat-galleries-comments::-webkit-scrollbar-corner {
        background: #999;
    }

    .light .chat-galleries-comments::-webkit-scrollbar-track-piece {
        background: #444;
    }

    .light .chat-galleries-comments::-webkit-resizer {
        background: #999;
    }

    #chatGalleryPop:checked ~ .chat-galleries-modal-container {
        display: flex !important;
    }
    @media (max-width: 1800px) {
        .chat-galleries-modal {
            max-width: 95vw;
        }
        .chat-galleries-modal .col-3.p-md {
            width: 31%;
        }
    }
    @media (max-width: 1500px) {
        .chat-galleries-modal select, .chat-galleries-modal textarea {
            width: 100%;
        }
    }
</style>

<div class="chat-galleries mt-sm">
    <div class="gallery-wrap">

        <button class="btn btn-sm primary mb-lg">Más <i class="icon-right"></i></button>
        <div>
            <div class="chat-bio-titles"><span class="blue-underline">Galería de fotos</span></div>
        </div>  
        <div class="d-flex mt-md chat-bio-galleries-container">
            <div class="chat-galleries-column">
                <img class="thumbnail" src="" alt=""><img class="thumbnail" src="" alt="">
            </div>
            <div class="chat-galleries-column">
                <img class="thumbnail" src="" alt=""><img class="thumbnail" src="" alt="">
            </div>
            <div class="chat-galleries-column">
                <img class="thumbnail" src="" alt=""><img class="thumbnail" src="" alt="">
            </div>
            <div class="chat-galleries-column">
                <img class="thumbnail" src="" alt=""><img class="thumbnail" src="" alt="">
            </div>
            <div class="chat-galleries-column">
                <img class="thumbnail" src="" alt=""><img class="thumbnail" src="" alt="">
            </div>
            <div class="chat-galleries-column">
                <img class="thumbnail" src="" alt=""><img class="thumbnail" src="" alt="">
            </div>
        </div>
        <button class="btn btn-sm primary mt-md">Más <i class="icon-right"></i></button>
        <input type="radio" id="chatGalleryPop" name="openClose">
        <input type="radio" id="closeGalleryPop" name="openClose">
        <div class="chat-galleries-modal-container hide">
            <div class="chat-galleries-modal relative">
                <div class="col-3 p-md">
                    <div class="model-screen-name text-uppercase text-center hide">Stiiven Dux</div>
                    <div class="chat-galleries-comment-area d-flex flex-column mb-lg">
                        <p class="text-center">Deja un comentario</p>
                        <select name="screenname">
                            <option value="username">username1</option>
                            <option value="username">username2</option>
                        </select>
                        <textarea class="p-sm" name="photo_review" cols="30" rows="5" placeholder="Enter Comment Here..."></textarea>
                        <button class="btn primary">Enviar</button>
                    </div>
                    <div class="chat-galleries-comments d-flex flex-column">
                        <div class="chat-galleries-comment  d-flex py-sm">
                            <div class="user-avatar">
                                <figure class="m-0 mt-md">
                                    <i class="icon-profile"></i>
                                </figure>
                                    <p class="text-center my-xs">nombre de usuario</p>
                            </div>      
                            <div class="col-10 ml-sm px-sm d-flex flex-column justify-content-center">
                                <div class="d-flex">
                                    <i class="icon-calendar"></i>
                                    <p class="my-0 ml-sm text-smaller">11.11.2021</p>
                                </div>
                                <p class="m-0 mt-xs">"This is the comment"</p>
                            </div>
                        </div>
                        <div class="chat-galleries-comment  d-flex py-sm">
                            <div class="user-avatar">
                                <figure class="m-0 mt-md">
                                    <i class="icon-profile"></i>
                                </figure>
                                    <p class="text-center my-xs">nombre de usuario</p>
                            </div>      
                            <div class="col-10 ml-sm px-sm d-flex flex-column justify-content-center">
                                <div class="d-flex">
                                    <i class="icon-calendar"></i>
                                    <p class="my-0 ml-sm text-smaller">11.11.2021</p>
                                </div>
                                <p class="m-0 mt-xs">"This is a longer comment with more text. Testing longer length stuff to see what this will look like"</p>
                            </div>
                        </div>
                        <div class="chat-galleries-comment  d-flex py-sm">
                            <div class="user-avatar">
                                <figure class="m-0 mt-md">
                                    <i class="icon-profile"></i>
                                </figure>
                                    <p class="text-center my-xs">nombre de usuario</p>
                            </div>      
                            <div class="col-10 ml-sm px-sm d-flex flex-column justify-content-center">
                                <div class="d-flex">
                                    <i class="icon-calendar"></i>
                                    <p class="my-0 ml-sm text-smaller">11.11.2021</p>
                                </div>
                                <p class="m-0 mt-xs">"This is the comment"</p>
                            </div>
                        </div>
                        <div class="chat-galleries-comment  d-flex py-sm">
                            <div class="user-avatar">
                                <figure class="m-0 mt-md">
                                    <i class="icon-profile"></i>
                                </figure>
                                    <p class="text-center my-xs">nombre de usuario</p>
                            </div>      
                            <div class="col-10 ml-sm px-sm d-flex flex-column justify-content-center">
                                <div class="d-flex">
                                    <i class="icon-calendar"></i>
                                    <p class="my-0 ml-sm text-smaller">11.11.2021</p>
                                </div>
                                <p class="m-0 mt-xs">"This is another testing comment. Testing out various lengths of comments"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <label for="closeGalleryPop" class="close-btn absolute"><i class="icon-x-plain"></i> </label>
            </div>
        </div>
    </div>
</div>        </div>
    </div>
</div>

<div class="mini-player-buttons ">
    <div class="mini-player-private col-6">
        <label for="startShowPanelOn" class="btn btn-xs primary col-12 scroll-all-the-way-to-top">Iniciar espectáculo</label>
        <label for="pledgePanelOn" class="btn btn-xs primary col-12 group-pledge-mini scroll-all-the-way-to-top">Compromiso grupal</label>
    </div>
    <div class="mini-player-tipping btn btn-xs col-6">
        <input type="radio" id="tipping-1" name="tipping-select">
        <input type="radio" id="tipping-2" name="tipping-select">
        <label for="tipping-1" title="Send a credit tip">
            Enviar una propina        </label>
        <div class="mini-player-tipping-options">
            <label for="tipping-2">
            <div class="tip-button tip-btn-modal" data-tip="10" title="Enviar un 10 credit tip">
                <span class="tip-bg"></span>
                <div class="tip-image tip-10"></div>
                <div class="tip-credit">Enviar 10 Créditos</div>
            </div>
            <div class="tip-button tip-btn-modal" data-tip="25" title="Enviar un 25credit tip">
                <span class="tip-bg"></span>
                <div class="tip-image tip-25"></div>
                <div class="tip-credit">Enviar 25 Créditos</div>
            </div>
            <div class="tip-button tip-btn-modal" data-tip="50" title="Enviar un 50 credit tip">
                <span class="tip-bg"></span>
                <div class="tip-image tip-50"></div>
                <div class="tip-credit">Enviar 50 Créditos</div>
            </div>
            <div class="tip-button tip-btn-modal" data-tip="100" title="Enviar un 100 credit tip">
                <span class="tip-bg"></span>
                <div class="tip-image tip-100"></div>
                <div class="tip-credit">Enviar 100 Créditos</div>
            </div>
            <div class="tip-button tip-btn-modal" data-tip="500" title="Enviar un 500 credit tip">
                <span class="tip-bg"></span>
                <div class="tip-image tip-500"></div>
                <div class="tip-credit">Enviar 500 Créditos</div>
            </div>
            <div class="tip-button tip-btn-modal" data-tip="1000" title="Enviar un 1000 credit tip">
                <span class="tip-bg"></span>
                <div class="tip-image tip-1000"></div>
                <div class="tip-credit">Enviar 1,000 Créditos</div>
            </div>
            <div class="tip-button tip-btn-modal tip-blue" data-tip="5000" title="Enviar un 5,000 credit tip">
                <span class="tip-bg"></span>
                <div class="tip-image tip-5000"></div>
                <div class="tip-credit">Enviar 5,000 Créditos</div>
            </div>
            <div class="tip-button tip-btn-modal tip-blue" data-tip="10000" title="Enviar un 10,000 credit tip">
                <span class="tip-bg"></span>
                <div class="tip-image tip-10000"></div>
                <div class="tip-credit">Enviar 10,000 Créditos</div>
            </div>
            <div class="tip-button tip-btn-modal tip-blue" data-tip="25000" title="Enviar un 25,000 credit tip">
                <span class="tip-bg"></span>
                <div class="tip-image tip-25000"></div>
                <div class="tip-credit">Enviar 25,000 Créditos</div>
            </div>
            <div class="tip-button tip-btn-modal tip-blue" data-tip="50000" title="Enviar un 50,000 credit tip">
                <span class="tip-bg"></span>
                <div class="tip-image tip-50000"></div>
                <div class="tip-credit">Enviar 50,000 Créditos</div>
            </div>
            </label>
        </div>
    </div>
</div>

		        
        <div class="col-12 text-center chatroom-footer">
    <a class="basement-link text-smaller" rel="nofollow" href="/2257.php" class="compliance" >18 Declaración de cumplimiento de los requisitos de mantenimiento de registros U. S. C. 2257</a>
    <a class="basement-link text-smaller" rel="nofollow" href="/privacy.php" >Privacy Policy</a>
    <a class="basement-link text-smaller" rel="nofollow" href="/privacy-ccpa.php" >CA-Privacy Policy</a>
    <a class="basement-link text-smaller" rel="nofollow" href="/dmca.php" >Copyright Policy</a>
    <a class="basement-link text-smaller" rel="nofollow" href="/terms.php" >Terms &amp; Conditions</a>

    
            <p class="text-smaller my-0">&copy; 1996 - 2024 VS3.COM, VS Media, Inc. All Rights Reserved.</p>
    </div>
<div class="spacer-sm"></div>
        

		

</div>

<div class="modal-container in-chat-modal notification-modal-wrap modal-spacing-update">
	<label class="visually-hidden" for="notificationModalOpen">Abrir notificación</label>
	<input type="radio" name="userControls" class="hide modal-control" id="notificationModalOpen">
	<label class="modal-shadow notification-modal-shadow" for="userControlsOff"><span class="visually-hidden">Close</span></label>
	<div class="modal-wrap">
		<div class="modal notification-modal">

			<div class="modal-header">
				<span class="notification-modal-title">Notificación</span>

								<div class="notification-modal-title-error">
					<i class="icon-alert"></i> Error				</div>

								<div class="notification-modal-title-warning">
					<i class="icon-alert"></i> Advertencia				</div>

								<div class="notification-modal-title-info">
					<i class="icon-info"></i> Atención				</div>

								<div class="notification-modal-title-success">
					<i class="icon-success"></i> éxito				</div>

								<div class="notification-modal-title-generic">
					<i class="icon-i"></i> Notificación				</div>

				<label class="close-modal" for="userControlsOff"><span class="visually-hidden">Close</span><i class="icon-x"></i></label>
			</div>

			<div class="modal-body">

								<div class="alert text-danger">
					<div class="notification-message error-notification-message"></div>
				</div>

								<div class="alert text-black">
					<div class="notification-message warning-notification-message"></div>
				</div>

								<div class="alert text-info">
					<div class="notification-message text-black info-notification-message"></div>
				</div>

								<div class="alert text-success">
					<div class="notification-message success-notification-message"></div>
				</div>

								<div class="text-generic">
					<div class="notification-message generic-notification-message"></div>
				</div>
            
                <div class="voyeur-error-modal hide">
                    <div class="alert warning-50 no-voyeurs-avail hide">
                        <div class="alert-title clearfix">
                            <i class="alert-icon"></i>
                            <span>No hay espectáculos de Voyeur disponiblese</span>
                        </div>
                        Please check back later when more shows are available.
                    </div>

                    <div class="voyeur-show-container">
                    </div>
                </div>                
			</div>

		</div>
	</div>
</div>

	
          










<div class="liveChat">

















</div>

</div>

<div class="main-body vod-section-homepage">
	<style>
	.videos-section-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 40px;
	}

	.video-item-container {
		width: 24.5%;
		margin: 5px .2%;
	}

	.video-thumb-container {
		
	}

	.video-thumb-container .rotatingVod {
		display: flex;
	}
	
	.video-thumb-container .rotatingVod .video-image {
		width: 100%;
		margin-bottom: -6px;
	}

	.videos-section-container .video-detail {
		margin-top: 0px;
		background-color: #121316;
		min-height: 91px;
	}
	
	.video-detail .video-detail-left {
		width: 100%;
		margin: 0;
		max-width: unset;
		flex: unset !important;
	}
	
	.video-detail .video-detail-left .video-detail-title {

	}
	
	.video-detail .video-detail-left .video-detail-model {

	}
	
	.video-detail .video-detail-left .video-detail-model a {
		color: #555 !important;
	}
	
	.video-detail .video-detail-middle {
		display: flex;
		justify-content: flex-end;
	}
	
	.video-detail .video-detail-right {
		display: flex;
	}
	
	/* .video-item-container .video-detail-top {
		flex-direction: column;
		justify-content: flex-start;
	} */

	.video-item-container .video-detail-item {
		margin-bottom: 3px !important;
	}

	.video-item-container .video-detail-item i {
		width: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.video-item-container .video-detail-top .video-detail-item:nth-child(2) {
		margin: 0;
		margin-left: 5px !important;
	}
	
	.video-item-container .video-detail-bottom .video-detail-item:nth-child(2) {
		margin: 0;
		margin-left: 5px !important;
	}
	
	/* .video-item-container .video-detail-bottom {
		flex-direction: column;
	} */

	.vod-home-section-title {
		margin-left: 10px;
	}

	.video-detail-item-rating-length {
		display: flex;
		align-items: center;
	}

	.video-detail-item-date-published {
		margin-top: 3px;
	}

	/* .xvt.xnxx-cams .chat-bottom-row {
		background-color: unset !important;
	}

	.xvt.xvideos-cams .chat-bottom-row {
		background-color: unset !important;
	}
	
	.whitelabel .chat-bottom-row {
		background-color: unset !important;
	}
	
	.chat-bottom-row {
		background-color: unset !important;
	} */
	
	.xvt.xnxx-cams .video-detail-model a {
		color: #ccc !important;
	}

	.xnxx-cams .vod-home-section-title .wl-color-main-text {
		color: #adcaf4 !important;
	}

	.vod-section-homepage {
		padding-top: 10px;
		margin-top: 30px !important;
	}
	
	.xnxx-cams .vod-section-homepage {
		border-top: 1px solid #024be8;
	}
	
	.xvideos-cams .vod-section-homepage {
		border-top: 1px solid #e8e8e8;
	}

	.whitelabel .mainBody.pageWidth.vod-section-homepage {
		margin: -10px auto 0px auto !important;
		padding: 0px 1%;
	}

	.whitelabel .vod-home-section-title {
		margin-left: 0px;
	}

	.whitelabel .video-item-container {
		margin: 10px 0;
	}
	
	.light.whitelabel .vod-section-homepage {
		border-top: 1px solid #ddd;
	}
	
	.dark.whitelabel .vod-section-homepage {
		border-top: 1px solid #444;
	}
	
	.dark .vod-section-homepage {
		border-top: 1px solid #444;
	}
	
	.dark.whitelabel .video-detail .video-detail-left .video-detail-model a {
		color: #ddd !important;
	}

	.xvc.light .video-detail {
		background-color: #DADADA !important;
	}
	
	.video-detail {
		display: flex;
		flex: 1;
		flex-direction: row;
		box-sizing: border-box;
		margin-top: 2px;
		padding: 10px;
		min-height: 74px;
	}

	.video-detail-left,
	.video-detail-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.video-detail-right {
		flex: 1 0 40% !important;
	}

	.video-detail-top,
	.video-detail-bottom {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.video-detail .video-detail-middle {
		display: flex;
		justify-content: flex-end;
	}

	.video-detail-item {
		display: flex;
		align-items: center;
		font-size: 10px !important;
	}

	.video-detail-item i {
		margin-right: 3px;
		font-size: 12px !important;
	}

	.flirt4free-header ~ .main-container .vod-section-homepage .video-detail .video-detail-left .video-detail-model a {
		color: #00a7e1 !important;
		text-decoration: unset;
	}

	.flirt4free-header ~ .main-container .vod-section-homepage .video-detail .video-detail-left .video-detail-title {
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		margin: 0;
		text-overflow: ellipsis;
		font-weight: 600;
		font-size: 13px;
		-webkit-line-clamp: 2;
	}

	@media screen and (max-width: 1200px) {
		.video-item-container {
			width: 24.5%%;
		}

		.vod-home-section-title .wl-color-main-text {
			margin-left: 0px;
		}

		.videos-section-container {
			justify-content: unset;
		}
	}

	@media screen and (max-width: 920px) {
		.video-item-container {
			width: 32.9%;
		}
	}

	@media screen and (max-width: 767px) {
		.video-item-container {
			width: 100%;
		}

		.vod-home-section-title {
			margin-left: 0px;
			margin-top: 30px;
			padding-bottom: 5px;
		}
	}
</style>

<h1 class="home-title-tags vod-home-section-title hide"><span class="wl-color-main-text">Trending</span> Videos</h1>

<div class="videos-section-container hide">
	<div class="video-item-container" data-video-item-cloneable="1">
		<div class="video-thumb-container">
			<a class="rotatingVod">
				<img class="video-image" alt="Group Chat: Amazing Sexy Gymnast Fucking Bareback" id="r_7870507" src="https://cdn5.vscdns.com/images/aspect/16x9.gif" style="background-image: url('https://cdn5.vscdns.com/videos/images/000/007/870/507/640x360.jpg');"/>
			</a>
		</div>

		<div class="video-detail">
		
			<div class="video-detail-left">
				<h3 class="video-detail-title">Group Chat: Amazing Sexy Gymnast Fucking Bareback</h3>
				<div class="video-detail-model">
					<a class="text-smaller" href="/videos/guys/models/kent-fisher-and-kennedy-fisher/">Kent Fisher &amp; Kennedy Fisher</a>
				</div>
			</div>

			<div class="video-detail-right">
				<div class="video-detail-top">
					<div class="video-detail-item">
						<i class="icon-eye" title="This video has been watched 6,718 times"></i>
						<span class="watch-times"></span>
					</div>
					<div class="video-detail-item">
						<i class="icon-coins" title="200 credits to watch this video"></i>
						<span class="credits-cost"></span>
					</div>
				</div>

				<div class="video-detail-middle">
					<div class="video-detail-item video-detail-item-date-published">
						<i class="icon-clapboard"></i> 
						<span class="date-published"></span>
					</div>
				</div>

				<div class="video-detail-bottom">
					<div class="video-detail-item-rating-length">
						<div class="video-detail-item">
							<i class="icon-thumbs-up thumbs-up-color"></i> 
							<span class="video-ratings"></span>
						</div>
						<div class="video-detail-item">
							<i class="icon-clock" title="This video is 30:00 long"></i>
							<span class="video-length"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div></div>


	<div class="recruitment-model-signup hide elements-to-show-after-homepage-render lazy">
		<div class="model-signup-inner main-body">
			<div class="model-signup-title">Webcam Models Wanted!</div>
			<div class="model-signup-text">Webcam modeling with XVideos Cams is an exciting way to make good money from the comfort and safety of your home.<br>All you need is a webcam, a computer, a stable internet connection, and your sexy flirtatious self..</div>
			<a href="/broadcasters.php" class="model-signup-button">GET STARTED TODAY</a>
		</div>
	</div>
<script>
	// just show lazy els if we are not on homepage
	document.addEventListener('DOMContentLoaded', function() {
		if (window.AppController == null) {

			var lazyEls = Array.prototype.slice.call(document.querySelectorAll('.elements-to-show-after-homepage-render'));

			lazyEls.forEach(function(el) {
				el.classList.remove('hide');
			});

		}
	});
</script>


<div class='clonableClickable' style="display:none">
   <div class='messageDiv'>
	   <a href='javascript:void(0)' id=''>
		   <span class='adminMessages' id=''>
			   <span class='promoContainer'>
				   <span class='promoText'>

				   </span>
			   </span>
		   </span>
	   </a>
   </div>
   <span class=''></span>
</div>

<div class='clonableNonClickable' style="display:none">
   <div class='messageDiv'>
	   <span class='adminMessages' id=''>
		   <span class='promoContainer'>
			   <span class='promoText'>

			   </span>
		   </span>
	   </span>
   </div>
   <span class=''></span>
</div>


<img src="/pixel/?random_number=12934067&mp_code=cx7id&identifier=xvt&page=index&type=live&service=girls" width="1" height="1" border="0" alt="" />

<script>
	window.VSMP = {};
</script>

	<script src="https://cdn5.vscdns.com/assets/js/vsmplayer/min/vsmplayer_2023_12_06_lpu5v2n0.min.js"></script>




	
		
	<script src="https://cdn5.vscdns.com/assets/js/vs-player/min/vs-player_2023_11_30_lplieg1y.min.js"></script>




<style>
    /** **/
    .recur-consent-field .toggle-check-box {
        min-width: 35px;
    }

    .form-elements label.recur-consent-field {
        height: unset;
    }
    /** VIP Package test css **/
    .cloneable-vip-product-test {
        width: 25%;
    }
    .package.vip-package-test {
        background: rgb(18,108,180);
        background: -moz-linear-gradient(180deg, rgba(18,108,180,1) 0%, rgba(18,151,213,1) 100%);
        background: -webkit-linear-gradient(180deg, rgba(18,108,180,1) 0%, rgba(18,151,213,1) 100%);
        background: linear-gradient(180deg, rgba(18,108,180,1) 0%, rgba(18,151,213,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#126cb4",endColorstr="#1297d5",GradientType=1);
        border-radius: 4px;
    }

    .vip-package-test .free-credits {
        color: rgba(0,0,0,0.7);
        filter: hue-rotate(45deg) brightness(1.2);
    }

    .vip-package-test .package-amount {
        border-bottom: none;
        width: 48%;
        display: inline-flex;
        flex-direction: column;
        margin: 0;
        padding: 20px 0 0;
    }

    .vip-package-test .package-amount span {
        text-transform: uppercase;
        margin: 5px 0;
    }

    .vip-package-test .buy-product-btn {
        margin: 10px 0 0;
    }

    .vip-package-test .vip-package-status {
        padding: 0;
        bottom: 17px;
        font-size: 31px;
        width: 43%;
        display: inline-flex;
        flex-direction: column;
        text-shadow: 0px 0px 15px rgba(255,255,255,0.8);
    }

    .vip-package-test .vip-package-status span {
        font-size: 14px;
        margin: 3px 0 0;
    }

    .vip-package-test .package-amount::before {
        content: "+";
        position: absolute;
        right: 0;
        left: 0;
        margin: 13px -16px 0 0;
    }

    .vip-package-test .tooltip span b {
        color: gold;
    }

    .vip-package-test i.icon-crown {
        margin: 0 0 3px;
    }

    .vip-package-test .tooltip.tip-left .tip {
        left: auto;
        right: 0;
        top: 50%;
        transform: translate(0%, 0%);
    }

    .vip-package-test i.icon-i {
        top: 2px;
        font-size: 24px;
        opacity: .7;
    }

    .vip-package-test a.tooltip .tip {
        width: 225px;
        white-space: normal;
        transform: translate(0, 8%);
        background-color: rgba(0,0,0,.85);
        top: 0;
        left: 0;
    }

    .vip-package-test .vip-duration {
        margin: auto;
        border-bottom: 1px solid #1278bd;
        padding: 0 0 10px;
        text-shadow: 0 0 15px #fff;
        font-weight: 400;
        font-size: 15px;
        width: 94%;
    }

    .vip-package-test span.free-vip-credits {
        font-size: 37px;
        font-weight: 700;
    }

    .cloneable-vip-product-test{
        color: #fff;
    }

    .cloneable-vip-product-test.edit-package {
        border-radius: .6em;
        position: relative;
        min-height: 240px;
        box-shadow: 10px 10px 35px rgba(0,0,0,0.1);
        width: 100%;
    }

    .edit-package .vip-package-test {
        height: 100%;
        color: #fff;
    }

    .edit-package .vip-package-test .price {
        margin: 8px 0 6px;
        font-size: 16px;
    }

    .edit-package .package-amount  {
        text-shadow: 0 0 15px rgba(255,255,255,0.8);
    }

    .whitelabel .vip-package-test .vip-duration,
    .wl .vip-package-test .vip-duration {
        border-bottom: 1px solid rgba(255,255,255,.18);
    }

    .whitelabel .billing-products .vip-package-test .package-amount {
        border-bottom: none;
    }

    .whitelabel .package.vip-package-test {
        background: linear-gradient(#d0d0d0 0%, #797979 100%);
        color: #333;
    }

    .xvc.whitelabel .package.vip-package-test {
        color: #fff;
    }

    .xvc .package.vip-package-test{
        background: #e43d82;
        background: linear-gradient(#de9fb6 0%, #e43d82 100%);
    }

    .xvideos-cams .package.vip-package-test {
        background: #b92201;
    }

    .dark .billing-modal .toggle-check-box {
        background-color: rgba(155,155,155,0.3);
    }

    .xvideos-cams .billing-modal .show-product .package.vip-product .package-amount {
        color: #fff;
    }

    .xvideos-cams .billing-products .package-amount {
        border-bottom: none;
    }

    .android.tablet.chat-room-opened #billingStep #billingProducts .cloneable-standard-product {
        width: 33.3% !important;
    }

    .android.tablet.chat-room-opened #billingStep #billingProducts .cloneable-vip-product {
        width: 33.3% !important;
    }

	.show-crypto-coin-view .crypto-coin-view {
		display: flex;
		justify-content: center;
	}

	.show-crypto-coin-view .crypto-coin-view .cloneable-crypto-coin {
		margin-bottom: 10px;
	}

	.show-crypto-coin-view .crypto-coin-view.billing-products {
		padding-left: 250px;
		justify-content: left;
	}

    .show-crypto-coin-view .cloneable-selected-standard-product {
        padding: 5px 0;
    }

	.show-crypto-coin-view .crypto-coin-view.billing-products .show-product {
		display: flex;
		flex: 0 0 330px;
		position: absolute;
		left: 10px;
		width: 250px;
	}

	.show-crypto-coin-view .cc-display {
		display: flex;
	}

	.show-crypto-qr-view .crypto-qr-view {
		flex-direction: row;
	}

    @media screen and (max-width: 767px) {
        .show-crypto-qr-view .crypto-qr-view {
            flex-direction: column;
        }

        .show-crypto-qr-view .crypto-qr-view .show-product .package {
            margin: 5px auto;
        }
    }

	.show-crypto-qr-view .crypto-qr-view .show-product .package .ghost-btn {
		display: none;
	}

	.show-crypto-qr-view .modal-footer .cc-area .btn-change-cc {
		display: none;
	}

	/* .show-crypto-coin-view .promo-code-link {
		display: none;
	} */

	.crypto-coin-screen-title {
		display: none;
	}

	.billing-modal .show-crypto-coin-view .modal-header .crypto-coin-screen-title {
		display: block;
	}

    .billing-modal .date-form-verify {
        display: inline-block;
        padding: 0px 0px;
    }
    .billing-modal .date-form-verify.dob-month {
        padding: 0px 4px;
    }

    .cloneable-cpf-form-element label,
    .dob-label-text label,
    .dob-label-text div {
        font-size: 14px;
        margin: 0;
        padding: 6px 2px 2px 0px;
        box-sizing: border-box;
        background-color: transparent;
        -webkit-appearance: none;
        font-size: calc(.2em + 12px);
        height: 2.15em;
        line-height: 1.3em;
        display: block;
        width: 100%;
    }

    #billingStep .process-segpay-panel {
        display: none;
    }

    #billingStep.process-segpay .process-segpay-panel {
        display: flex;
        justify-content: center;
	}
	
	.verify .dob-date {
		padding-left: 10px;
		width: 33%;
	}
	
	.verify .dob-month {
		width: 33%;
	}
	
	.verify .dob-year {
		padding-right: 5px;
		width: 33%;
	}

	.verify .dob-label-text label {
		width: 100%;
		padding-left: 10px;
		padding-bottom: 10px;
		line-height: initial;
		height: auto;
	}

	.verify .cloneable-cpf-form-element {
		padding-left: 10px !important;
		width: 50%;
		padding-right: 10px !important;
		padding-top: 15px !important;
		flex-grow: 1;
	}

	.verify [data-field-name="bill_addr"]{
		width: 50%;
		padding-top: 10px;
	}

	.verify .foot-note {
		width: 100%;
	}

    .show-all-payments-btn.info.btn {
        color: #0778ad !important;
        background-color: #ceedfc !important;
    }

    /* 
    * Commenting out causing errors
	.existing-method .existing-payments .show-product {
		width: 100%;
	}
    */

	@media screen and (max-width: 767px) {
		.verify .dob-date {
			padding-left: 5px;
		}

		.verify .dob-year {
			padding-right: 0px;
		}

		.verify .cloneable-cpf-form-element {
			padding-left: 5px !important;
			padding-right: 5px !important;
			width: 100%;
		}

		.verify .dob-label-text label {
			padding-left: 5px;
		}

		.verify [data-field-name="bill_addr"] {
			width: 100%;
		}
	}

    /* For mobile */
    @media screen and (max-width: 768px) {

        .cloneable-vip-product-test {
            width: 33%;
        }

        .xvideos-cams .vip-package-test .package-amount span {
            margin: 9px 0;
        }

        .xvideos-cams .billing-products .package-amount span {
            font-size: 15px;
        }
    }
    
    @media screen and (max-width: 600px) {

        .cloneable-vip-product-test {
            width: 50%;
        }

        .show-crypto-coin-view .crypto-coin-view.billing-products {
            height: unset;
            padding-left: 0;
        }

        .show-crypto-coin-view .crypto-coin-view.billing-products .show-product {
            position: relative;
            margin: auto;
            width: 100%;
            left: 0;
            flex: unset;
        }

        .vip-package-test .package-amount::before {
            font-size: 33px;
        }
        .vip-package-test .buy-product-btn {
            margin: 1px 0 0;
        }

        .vip-package-test .free-credits {
            top: 75px;
        }

        .vip-package-test .vip-package-status {
            font-size: 28px;
        }

        .vip-package-test .package-amount {
            padding: 7px 0 0;
            text-shadow: 0 0 15px rgba(255,255,255,.8);
            bottom: 10px;
        }

        .vip-package-test a.tooltip .tip {
            width: 184px;
            white-space: normal;
            left: unset;
            right: 0;
        }
        .vip-package-test .vip-package-status {
            bottom: 12px;
        }
        .vip-package-test .vip-duration {
            font-size: 13px;
            margin: 0 auto 10px;
            padding: 0 0 19px;
        }
        .add-new-card .form-elements label {
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
        }

        .cc-card-input .tooltip {
            position: static;
            white-space: normal;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .cc-card-input i {
            position: absolute;
            display: inline-block;
            right: 10px;
            top: unset;
            font-size: 22px;
            color: rgba(0,0,0,0.3);
        }
    }

    @media screen and (max-height: 740px) {
        .chat-room-opened #billingStep .modal {
            overflow-y: scroll;
            overflow-x: hidden;
        }
    }

    .billing-modal input[type="text"]::placeholder {
        color: #444 !important;
    }
    .billing-modal input[type="text"]::-moz-placeholder {
        color: #444 !important;
    }

    .billing-modal input[type="text"]::-ms-placeholder {
        color: #444 !important;
    }

    .billing-modal input[type="text"]::placeholder {
        color: #444 !important;
    }
    .phone .billing-products,
    .mobile .billing-products {
        flex-wrap: wrap;
    }

    .billing-products + .notice {
        display: none;
    }

    /*
    * New styles for .swipeable-products
    */
    .phone .swipeable-products.billing-products,
    .mobile .swipeable-products.billing-products {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        overflow-x: auto;
        gap: 5px;
        padding: 5px;
    }

    .phone .swipeable-products .package-item,
    .mobile .swipeable-products .package-item {
        display: flex;
        flex-direction: column;
        flex: 0 0 45%;
    }

    .phone .swipeable-products .package,
    .mobile .swipeable-products .package {
        height: calc(100% - 28px);
    }

    .phone .swipeable-products .foot-note,
    .mobile .swipeable-products .foot-note {
        font-size: 9px;
        line-height: 1.25;
    }

    .phone .swipeable-products.billing-products + .notice,
    .mobile .swipeable-products.billing-products + .notice {
        display: block;
    }

    .phone .swipeable-products .buy-product-btn,
    .mobile .swipeable-products .buy-product-btn,
    .phone .swipeable-products .vip-product .free-vip-credits,
    .mobile .swipeable-products .vip-product .free-vip-credits,
    .phone .swipeable-products .vip-product .package-amount span,
    .mobile .swipeable-products .vip-product .package-amount span {
        font-size: 10px;
    }

    /** Scan QR css **/
	.scanqr .tbl td {
		background: #257fab;
		border-bottom: 1px solid #2c517f;
		border-left: 1px solid #2c517f;
	}

	.scanqr .tbl.trans-details td {
		background: none;
		border-bottom: 1px solid #2d6a88;
	}

	.scanqr .qrbtn {
		display: inline-block;
		background-color: #7cc576;
		color: #fff;
		text-decoration: none;
		border: 3px solid #6ca756;
		height: 32px;
		line-height: 32px;
		padding: 0 20px 0 20px;
		border-radius: 2em;
		transition: all .3s ease-in-out;
	}

	.scanqr td a,
	.scanqr .tooltip {
		text-decoration: none;
		color: #fff;
	}

	.scanqr .icon-question {
		font-size: 20px;
	}

	.scanqr .nav-side {
		background-color: #257fab;
	}

	.scanqr .nav-side-item label>span {
		color: #ffffff;
	}

	.scanqr .nav-side-item li {
		padding: 10px 15px;
	}

	.scanqr .nav-side-item ul {
		background-color: #1a5482;
	}

	.scanqr .tbl-responsive {
		overflow: hidden;
	}

	.scanqr i.icon-collection {
		font-size: 24px;
	}

	#billingStep.show-crypto-qr-view .promo-code-link {
		display: none;
	}

	#billingStep.show-crypto-qr-view .cc-display {
		display: flex;
	}

	.computer .crypto-qr-view #bmQRDeepLink {
		display: none !important;
	}

    .cloneable-selected-standard-product .free-credits.hide ~ .price-area .price {
        margin-top: 20px;
        padding-bottom: 15px;
    }

    .billing-modal .choose-method .flex-grow {
        flex-shrink: unset;
    }

    .jockmenlivecom a.billing-modal-twitter-link,
    .penthousecamscom a.billing-modal-twitter-link {
        color: #000 !important;
    }
	
	#showAllPaymentsButton.show-all-payments-btn.btn {
		background-color: #2679a2;
		color: #fff;
		border-radius: 2em;
		padding: 0 20px;
		height: 28px;
		line-height: 28px;
		margin: 10px 0 0;
		opacity: .8;
		font-size: 13px;
		transition: opacity .3s;
	}

	.wl #showAllPaymentsButton.show-all-payments-btn.btn {
		background-color: #2679a2;
		color: #fff;
		border-radius: 2em !important;
		padding: 0 20px !important;
		height: 28px;
		line-height: 28px !important;
		margin: 10px 0 0 !important;
		opacity: .8;
		font-size: 13px !important;
		transition: opacity .3s !important;
	}

	.camstercom #showAllPaymentsButton.show-all-payments-btn.btn {
		background-color: #db2a64 !important;
		color: #fff !important;
	}
	
	.nakedcom #showAllPaymentsButton.show-all-payments-btn.btn {
		background-color: #cc2121 !important;
		color: #fff !important;
	}
	
	.camdollscom #showAllPaymentsButton.show-all-payments-btn.btn {
		background-color: #aa4965 !important;
		color: #fff !important;
	}
	
	#showAllPaymentsButton.show-all-payments-btn.btn:hover {
		opacity: 1;
	}
    
	.wl .payment-methods .payment-methods-form-wrap {
		max-height: unset;
	}
</style>


    

<div class="modal-container animate-zoom billing-modal">
    <input aria-label="hide modal control" type="checkbox" name="modalControl" class="hide modal-control" id="billingModal" autocomplete="off">
    <div class="modal-shadow"></div>
        <div id="billingStep" class="modal-wrap">        <div class="modal">

                        <div class="loading-cover">
                <i class="loading-v2 lg"></i>
                <div class="loading-cover-text"></div>
            </div>

            <div class="modal-header">
				<span class="products-screen-title">Elige un producto</span>
				<span class="crypto-coin-screen-title">Choose a Coin</span>
				<span class="choose-method-title">Elige un método de pago</span>
				<span class="add-new-card-title">Agregar nueva tarjeta</span>
				<span class="existing-method-title">Elige una cuenta de pago</span>
				<span class="verify-title">Confirma tu compra</span>
				<span class="by-mail-title">Paga por correo</span>
				<span class="hosted-page-title"></span>
				<span class="purchase-success-title">éxito</span>
				<label class="close-modal" for="billingModal"><i class="icon-x"></i><span class="visually-hidden">billing modal</span></label>
            </div>

            <div class="modal-body scrollbar-ghost">

				<div class="crypto-qr-view">
					<div class="show-product">

					</div>
					<div class="d-flex align-items-center flex-column scanqr">
						<nav class="nav-side">
							<div class="nav-side-item">
								<input type="checkbox" class="hide"  id="nav_item_bio">
								<label for="nav_item_bio">
									<span>Detalles de transacción</span>
									<i class="arrow-down"></i>
								</label>
								<ul>
									<li>
										<div class="tbl-responsive">
											<table class="tbl trans-details">
												<tr>
													<td class="bold">Importe:</td>
													<td id="bmqrAmount"></td>
												</tr>
												<tr>
													<td class="bold">Tipo de cambio:</td>
													<td id="bmqrExchangeRate"></td>
												</tr>
												<tr>
													<td class="bold"><span class="crypto-currency-type">BTC</span> Importe:</td>
													<td id="bmqrBtcAmount"></td>
												</tr>
												<tr>
													<td class="bold">Costo de red:</td>
													<td id="bmqrNetworkCost"></td>
												</tr>
												<tr>
													<td class="bold">Total de Envio:</td>
													<td id="bmqrTotalToSend"></td>
												</tr>
											</table>
											<p class="text-smaller text-center">Avoid sending directly from exchange. Send <span class="crypto-currency-type">BTC</span> Amount, not <span id="cryptoCurrencyText">USD</span> Importe!</p>
										</div>
									</li>
								</ul>
							</div>
						</nav>
						<p class="bold">Usa tu cámara para escanear el código QR o copia y pega la cantidad y la dirección que se muestra a continuación en tu billetera electrónica</p>
						<div class="spacer-xs"></div>
						<img style="width: 100%; max-width: 275px;" alt="bmQrCode" id="bmQrCodeImg">
						<div class="spacer-xs"></div>
						<p class="bold hide" id="bmZeroConfCont">For instant approval set tx fees to <span id="bmqrInstantApprove"></span></p>
						<div class="spacer-xs"></div>
						<div class="tbl-responsive">
							<table class="tbl">
								<tr>
									<td class="bold"><a href="javascript:;" class="tooltip tip-right">Importe:<span class="tip">This is the tool tip for the Amount</span></a></td>
									<td><span id="bmqrExactAmount"></span> (Asegúrate de enviar esta cantidad exacta)</td>
									<td class="bold"><a href="javascript:;" class="tooltip tip-left"><i class="icon-collection" id="bmQrCopyAmtLink"></i><span class="tip">Haz click para copiar la dirección</span></a></td>
								</tr>
								<tr>
									<td class="bold"><a href="javascript:;" class="tooltip tip-right">Dirección:<span class="tip">This is the tool tip for the Address</span></a></td>
									<td id="bmqrAddress"></td>
									<td class="bold"><a href="javascript:;" class="tooltip tip-left"><i class="icon-collection" id="bmQrCopyAddressLink"></i><span class="tip">Haz click para copiar la dirección</span></a></td>
								</tr>
							</table>
							<div class="spacer-sm"></div>
						</div>
						<a href="javascript:;" class="qrbtn" id="bmQRDeepLink" target="_blank">Abrir en billetera electrónica</a>
						<div class="spacer-sm"></div>
					</div>
				</div>

				<div class="crypto-coin-view flex-grid billing-products">
					<div class="show-product">

					</div>
				</div>

                <div class="pending-transaction-view-inner text-center">
					Tu pago está siendo procesado                    <div class="spacer-xs"></div>
                    <i class="loading-v2 lg"></i>
                    <div class="spacer-sm"></div>
                </div>


                                <div class="alert success hide">
                    <div class="alert-title clearfix">
                        <span>
                            <i class="icon-checkmark text-white"></i>
                            éxito                        </span>
                    </div>
                                    </div>

                <div class="alert danger hide">
                    <div class="alert-title clearfix">
                        <span>
                            <i class="icon-alert text-white"></i>
                            Error
                        </span>
                    </div>
                                    </div>

                <div class="alert info hide">
                    <div class="alert-title clearfix">
                        <span>
                            <i class="icon-i"></i>
                        </span>
                    </div>
                                    </div>
                

                                <div id="billingProducts" class="flex-grid billing-products"></div>

                <div class="notice px-md py-xs mt-sm text-center align-items-center justify-content-center">
                    <i class="icon-left"></i><i class="icon-left"></i>
                    <span class="mx-sm bold">Desliza para ver más productos</span>
                    <i class="icon-right"></i><i class="icon-right"></i>
                </div>

                <div class="charge-text charge-text-containers py-sm"></div>

                <div class="payment-methods text-center">
                    <div class="show-product">

                    </div>
                    <div class="flex-grow">
                        <div class="payment-methods-form-wrap">
                            <div class="flex-grid" id="paymentMethodsContainer" style="justify-content: center;">

                            </div>
                            <div class="form-elements">
                                <button id="showAllPaymentsButton" class="show-all-payments-btn btn">Show All Payment Methods</button>
                            </div>                            
                        </div>
                    </div>
                </div>

                <div class="existing-payments">

                    <div class="show-product">

                    </div>

                    <div class="tbl-responsive flex-grow">
                        <table class="tbl row-hover striped-even" role="presentation">
                            <tr id="addNewPaymentMethodRow">
                                <td colspan="2">
                                    <a href="#"><i class="icon-plus"></i> Agregar un nuevo método de pago</a>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>

                <div class="add-new-card">

                    <div class="show-product">


                    </div>
                    <div class="flex-grow">
                        <div class="add-new-card-form-wrap">
                            <div class="flex-grid">
                                <div class="col-12 text-center pt-0">
                                    <div class="cc-add-card-images">
                                        <div class="cc-card visa"></div>
                                        <div class="cc-card mastercard"></div>
                                        <div class="cc-card jcb"></div>
                                        <div class="cc-card diners-club"></div>
                                        <div class="cc-card discover"></div>
                                    </div>
                                </div>
                                <div class="col-6 col-12-sm form-elements">
                                    <input aria-label="first name" type="text" name="firstname" autocomplete="cc-given-name" placeholder="Primer nombre" required>
                                </div>
                                <div class="col-6 col-12-sm form-elements">
                                    <input aria-label="last name" type="text" name="lastname" autocomplete="cc-family-name" placeholder="Apellido" required>
                                </div>
                                <div class="col-6 col-6-sm form-elements">
                                    <div class="select-element">
                                        <select aria-label="select_drop_country" id="select_drop_country" name="country" autocomplete="country-name" required>
                                            <option>United States</option>
                                            <option>Select</option>
                                            <option>Select</option>
                                            <option>Select</option>
                                            <option>Select</option>
                                        </select>
                                        <div class="select-arrow"></div>
                                    </div>
                                </div>
                                <div class="col-6 col-6-sm form-elements">
                                    <label><span class="visually-hidden">ZIP or Postal Code</span><input type="text" name="zipcode" autocomplete="postal-code" placeholder="ZIP/Postal code" required></label>
                                </div>

                                <div class="col-12 text-center">
                                    <div class="line m-0"></div>
                                </div>

                                <div class="col-8 col-12-sm form-elements">
                                    <div class="cc-card-input">
                                        <input 
                                            aria-label="Credit Card Number" 
                                            type="text" 
                                            name="ccnum" 
                                            autocomplete="cc-number" 
                                            x-autocompletetype="cc-number" 
                                            pattern="\d*" 
                                            placeholder="Credit Card Number" 
                                            required
                                        >
                                        <span class="cc-card hide"></span>
                                    </div>
                                </div>
                                <div class="col-4 col-7-sm form-elements">
                                    <div class="cc-card-input">
                                        <label>
                                            <span class="visually-hidden">cvv number</span>
                                            <input 
                                                type="text" 
                                                name="cvv"
                                                autocomplete="cc-csc"
                                                placeholder="CVV2" 
                                                required
                                            >
                                            <a href="javascript:;" class="tooltip tip-top">
                                                <i class="icon-i"></i>
                                                <span class="tip text-center" style="white-space: normal;width: 100%;max-width: 220px">
                                                    <div class="cvv2-image"></div>
                                                    <b>Verificación de tarjeta(CVV2)</b><br>
                                                    El número CVV2 es un número especial impreso en tu tarjeta de crédito que provee protección extra contra fraudes                                                </span>
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6 col-6-sm form-elements">
                                    <div class="select-element">
                                        <select 
                                            aria-label="select month" 
                                            id="select_drop_month" 
                                            name="monthexpire" 
                                            autocomplete="cc-exp-month" 
                                            x-autocompletetype="cc-exp-month" 
                                            required
                                        >

                                        </select>
                                        <div class="select-arrow"></div>
                                    </div>
                                </div>
                                <div class="col-6 col-6-sm form-elements">
                                    <div class="select-element">
                                        <select 
                                            aria-label="select year" 
                                            id="select_drop_year" 
                                            name="yearexpire" 
                                            autocomplete="cc-exp-year" 
                                            x-autocompletetype="cc-exp-year" 
                                            required
                                        >

                                        </select>
                                        <div class="select-arrow"></div>
                                    </div>
                                </div>
                                <div class="col-12 form-elements">
                                    <div class="form-elements terms text-center">
                                        <input aria-label="agree to terms and conditions" type="checkbox" name="termsagree" class="hide">
                                        <span  id="creditCardTermsAgreementText">
											Yes, I have read and agree to the <a target="_blank" rel="noreferrer noopener" href="/terms.php">Terms &amp; Conditions</a> and the <a target="_blank" rel="noreferrer noopener" href="/privacy.php">Privacy Policy</a>.
                                        </span>
                                    </div>
                                    <div class="foot-note text-center mt-sm charge-text-containers"></div>
                                </div>
                                <div class="col-12 form-elements text-center">
                                    <div class="complete-purchase">
                                        <a href="#" class="btn success text-center" id="completePurchaseButton">Completar la compra</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="verify">
                    <div class="show-product">



                    </div>
                    <div class="flex-grow">
                        <div class="verify-form-wrap">
                            <div class="flex-grid" style="justify-content: center;">

                            </div>
                        </div>
                    </div>
                </div>

                <div class="by-mail">
                    <div class="show-product">



                    </div>
                    <div class="flex-grow">
                        <div class="by-mail-form-wrap">
                            <div class="flex-grid" style="justify-content: center;">
                                <div class="col-12 form-elements text-left">

										<p>If you would like to send us your payment by mail, we accept money orders, cashier's checks, and personal checks. For safety and tracking purposes, we are unable to accept cash</p>

										<p>Para comprar este producto por correo, por favor descargue el formulario de Pay by Mail que está aquí abajo y complete la información requerida. Se incluyen las instrucciones para enviarlo por correo</p>

										<p>Nombre de usuario: <span class="bold text-white" id="payByMailUsername"></span></p>

										<p>Importe: <span class="bold text-white" id="payByMailAmount"></span></p>

										<p>Número de créditos: <span class="bold text-white" id="payByMailCredits"></span></p>

                                        <div class="flex-center"><a href="https://cdn5.vscdns.com/pdf/payment-by-mail-form.pdf" target="_blank" class="ghost-btn">Descargar formulario de correo</a></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hosted-page">
                    <div class="show-product">



                    </div>
                    <div class="flex-grow">
                        <div class="hosted-page-form-wrap">
                            <div class="flex-grid" style="justify-content: center;">
                                <div class="col-12 form-elements text-center scrollbar-ghost" id="hostedPanelIframeContainer">



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="purchase-success">
                    <div class="verify-form-wrap">
                        <div class="success-message" >
                            <div class="d-flex">
                                <svg class="purchase-success-checkmark" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                    <circle class="purchase-success-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                                    <path class="purchase-success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                                <div id="successMessageContainer">
                                </div>
                            </div>
                                                    </div>
                        <div class="payment-product-container">
                            <div class="show-product">

                            </div>
                            <div class="payment-summary">
                                <div class="payment-summary-text">Resumen de pagos</div>
                                <div class="single-payment-line">
                                    <span>Cantidad de producto:</span>
                                    <span id="purchaseSuccessAmount"></span>
                                </div>
                                <div class="single-payment-line" id="purchaseSuccessTaxAmountContainer">
                                    <span>Cantidad de impuesto:</span>
                                    <span id="purchaseSuccessTaxAmount"></span>
                                </div>
                                <div class="total-line">
                                    <span>Total:</span>
                                    <span id="purchaseSuccessTotalAmount"></span>
                                </div>
                                <p class="py-sm mb-0 text-center text-smaller"><span id="purchaseSuccessBillingInfo"></span></p>
                            </div>
                        </div>
                    </div>
                         
                </div>

                <div class="process-segpay-panel">  
                    <i class="loading-v2 lg hide"></i>
                </div>

            </div>

            <div class="modal-footer">

                                <div id="promoCodeContainer" class="promo-container flex-grid hide">
                    <div class="col-7 col-7-md  col-6-sm text-right">
                        <span class="promo-input">
                            <i class="icon-promo"></i>
                            <input aria-label="promo code input" id="promoCodeInput" type="text" placeholder="Enter Promo Code Here" required>
                        </span>
                    </div>
                    <div class="col-5 col-5-md col-6-sm text-left">
                        <a id="applyPromoCodeButton" href="#" class="btn btn-sm primary">Aplicar</a>
                    </div>
                </div>

                                <div class="flex-grid cc-area">
                    <div class="col-3 col-3-md col-6-sm col-6-xs order-2-sm order-2-xs text-left">
                        <div class="promo-code-link" title="Add promo code">
                            <a href="#" id="togglePromoCodeContainer"><i class="icon-promo testClass"></i> Agregar código promocional</a>
                        </div>
                    </div>
                    <div class="col-6 col-6-md col-12-sm order-1-sm order-1-xs  text-center">

                        <div class="cc-display flex-grid">
                            <div class="col-5 col-8-md card-number text-left">
                            </div>
                            <div class="col-7 col-4-md text-right">
                                <a href="#" class="btn-change-cc" title="Cambiar el método de pago"><i class="icon-refresh"></i> Cambiar el método de pago</a>
                            </div>
                        </div>



                        
                    </div>
                    <div class="col-3 col-3-md col-6-sm col-6-xs order-3-sm  order-3-xs text-right">
                        <div class="help-link">
                            <a id="billingModalHelpLink" target="_blank" href="/support.php?"><i class="icon-support" title="Live support"></i> Ayuda</a>
                        </div>
                    </div>
                </div>

                <div id="pixelTrackingCodeContainer">

                </div>
            </div>
        </div>
    </div>
</div>




<div class="col-3 col-4-md col-6-sm cloneable-standard-product package-item hide text-center">
    <div class="package">
        <div class="package-amount">
        </div>
        <div class="free-credits">
        </div>
        <a href="#" class="buy-product-btn" aria-label="buy product"></a>
        <div class="d-flex justify-content-center align-items-center price-area">
        <div class="price"></div>
        <a href="javascript:;" class="tooltip alternate-currency-message ml-xs">
            <i class="icon-i"></i>
            <span class="tip">
                <div class="billing-info-icon-text"></div>
            </span>
        </a>
    </div>
    </div>
    <div class="foot-note"></div>
</div>


<div class="col-3 col-4-md col-6-sm text-center cloneable-vip-product-test package-item hide">
    <div class="package vip-package-test">
        <div class="col-12 d-flex text-right">
            <a href="javascript:;" class="tooltip col-12 no-decoration">
                <i class="icon-i relative pr-xs text-white"></i>
                <span class="tip">
					<i class="icon-success text-success"></i> Acceso completo instantáneo<br>
					<i class="icon-success text-success"></i> Fuente VIP Dorada<br>
					<i class="icon-success text-success"></i> Hasta 10 apodos reservados<br>
					<i class="icon-success text-success"></i> Email performers with attachments<br>
					<i class="icon-success text-success"></i> Vista previa más grande del video privado<br>
					<i class="icon-success text-success"></i> Desactivar a los usuarios sin membresía del chat (no usuarios grises)<br>
					<i class="icon-success text-success"></i> Acceso a foros VIP					<div class="line"></div>
					<b>Gratis</b> Acceso ilimitado a tus propios espectáculos grabados<br>
					<b>Gratis</b> 150 videos diarios disponibles durante 7días<br>
					<b>Gratis</b> 1 Hour Feature Shows and access to Archives<br>
					<b>Gratis</b> Acceso al archivo de videos destacados para adultos<br>
					<b>Gratis</b> Acceso a las galerías de fotos de modelos                </span>
            </a>
        </div>
        <div class="package-amount"><span class="free-vip-credits"></span> <span>Créditos</span></div>
        <div class="vip-package-status relative">
            <i class="icon-crown"></i>
                VIP
            <span> ESTADO</span>
        </div>
        <div class="vip-duration package-description">
        </div>
        <a href="#" class="buy-product-btn" aria-label="buy product"></a>
        <div class="d-flex justify-content-center align-items-center price-area">
            <div class="price">$39.95*</div>
            <a href="javascript:;" class="tooltip alternate-currency-message ml-xs">
                <i class="icon-i d-flex"></i>
                <span class="tip">
                    <div class="billing-info-icon-text"></div>
                </span>
            </a>
        </div>
    </div>

    <div class="foot-note"></div>
</div>

<div class="col-3 col-4-md col-6-sm text-center cloneable-vip-product package-item hide">

    <div class="package vip-product">

        <a href="javascript:;" class="tooltip tip-left">
            <i class="icon-i"></i>
            <span class="tip">
				<i class="icon-success text-success"></i> Acceso completo instantáneo<br>
				<i class="icon-success text-success"></i> Fuente VIP Dorada<br>
				<i class="icon-success text-success"></i> Hasta 10 apodos reservados<br>
				<i class="icon-success text-success"></i> Email performers with attachments<br>
				<i class="icon-success text-success"></i> Vista previa más grande del video privado<br>
				<i class="icon-success text-success"></i> Desactivar a los usuarios sin membresía del chat (no usuarios grises)<br>
				<i class="icon-success text-success"></i> Acceso a foros VIP<br>
				<div class="line"></div>
				<b>Gratis</b> Acceso ilimitado a tus propios espectáculos grabados<br>
				<b>Gratis</b> 150 videos diarios disponibles durante 7días<br>
				<b>Gratis</b> 1 Hour Feature Shows and access to Archives<br>
				<b>Gratis</b> Acceso al archivo de videos destacados para adultos<br>
				<b>Gratis</b> Acceso a las galerías de fotos de modelos            </span>
        </a>

        <div class="package-amount">
            <i class="icon-crown"></i>
            VIP
            <span class="package-description"></span>
            <div class="free-vip-credits"></div>
        </div>

        <a href="#" class="buy-product-btn" aria-label="buy product"></a>

        <div class="d-flex justify-content-center align-items-center price-area">
            <div class="price"></div>
            <a href="javascript:;" class="tooltip alternate-currency-message ml-xs">
                <i class="icon-i d-flex"></i>
                <span class="tip">
                    <div class="billing-info-icon-text"></div>
                </span>
            </a>
        </div>

    </div>

    <div class="foot-note"></div>

</div>

<div class="col-3 col-6-md text-center cloneable-showpass-product package-item hide">

    <div class="package showpass-product">

        <div class="package-amount">
            <i class="icon-show-marquee"></i>
            PASE            <span class="package-description"></span>
            <div class="free-showpass-credits"></div>
        </div>

        <a href="#" class="buy-product-btn" aria-label="buy product"></a>

        <div class="d-flex justify-content-center align-items-center price-area">
            <div class="price"></div>
            <a href="javascript:;" class="tooltip alternate-currency-message ml-xs">
                <i class="icon-i d-flex"></i>
                <span class="tip">
                    <div class="billing-info-icon-text"></div>
                </span>
            </a>
        </div>

    </div>

    <div class="foot-note"></div>

</div>

<div class="col-4 col-4-md col-6-sm cloneable-payment-method hide">
    <div class="payment-method-type">

        <div class="payment-logo"></div>

        <div class="payment-name"></div>

        <div class="payment-info">
            <a href="javascript:;" class="tooltip tip-left" aria-label="payment tooltip">
                <i class="icon-i"></i>
                <span class="tip"></span>
            </a>
        </div>

    </div>
</div>

<div class="hide col-4 col-4-md col-6-sm cloneable-crypto-coin">
	<div class="payment-method-type">
		<div class="payment-logo"></div>
		<div class="payment-name"></div>
	</div>
</div>

<table role="presentation">
    <tbody>
        <tr class="cloneable-payment-account hide">
            <td>
                <i class="icon-checkmark"></i>
                <div class="circle"></div>
                <div class="cc-card visa"></div>
                <span></span>
            </td>
            <td>
                <span class="is-blocked hide" style="color: red;font-weight: bold">BLOQUEADO</span>
            <td>

            <td class="text-right">
                <a href="/my-account/secure/payment-accounts.php" target="_blank" class="ghost-btn"><i class="icon-edit"></i> Administrar</a>
            </td>
        </tr>
    </tbody>
</table>


<div class="package text-center cloneable-selected-standard-product hide">
    <div class="package-amount">
        90
        <span>CRÉDITOS</span>
    </div>
    <div class="free-credits">100 Créditos <span>Gratis</span></div>
    <div class="d-flex justify-content-center align-items-center price-area">
            <div class="price">$10</div>
            <a href="javascript:;" class="tooltip alternate-currency-message ml-xs">
                <i class="icon-i d-flex"></i>
                <span class="tip">
                    <div class="billing-info-icon-text"></div>
                </span>
            </a>
        </div>
    <a href="#" class="ghost-btn">Cambiar</a>
</div>


<div class="package vip-product text-center cloneable-selected-vip-product hide">
    <a href="javascript:;" class="tooltip tip-bottom">
        <i class="icon-i"></i>
        <span class="tip">
			<i class="icon-success text-success"></i> Acceso completo instantáneo<br>
			<i class="icon-success text-success"></i> Fuente VIP Dorada<br>
			<i class="icon-success text-success"></i> Hasta 10 apodos reservados<br>
			<i class="icon-success text-success"></i> Email performers with attachments<br>
			<i class="icon-success text-success"></i> Vista previa más grande del video privado<br>
			<i class="icon-success text-success"></i> Desactivar a los usuarios sin membresía del chat (no usuarios grises)<br>
			<i class="icon-success text-success"></i> Acceso a foros VIP			<div class="line"></div>
			<b>Gratis</b> Acceso ilimitado a tus propios espectáculos grabados<br>
			<b>Gratis</b> 150 videos diarios disponibles durante 7días<br>
			<b>Gratis</b> 1 Hour Feature Shows and access to Archivess<br>
			<b>Gratis</b> Acceso al archivo de videos destacados para adultos<br>
			<b>Gratis</b> Acceso a las galerías de fotos de modelos        </span>
    </a>

    <div class="package-amount">
        <i class="icon-crown"></i>
        VIP
        <span class="package-description">30 días de membresía</span>
        <div class="free-vip-credits">MÁS 150 CRÉDITOS GRATIS!</div>
    </div>
    <div class="d-flex justify-content-center align-items-center price-area">
        <div class="price">$39.95*</div>
        <a href="javascript:;" class="tooltip alternate-currency-message ml-xs">
            <i class="icon-i d-flex"></i>
            <span class="tip">
                <div class="billing-info-icon-text"></div>
            </span>
        </a>
    </div>
    <a href="#" class="ghost-btn">Cambiar</a>
</div>

<div class="package showpass-product text-center cloneable-selected-showpass-product hide">
    <div class="package-amount">
        <i class="icon-show-marquee"></i>
        PASE        <span class="package-description"></span>
        <div class="free-showpass-credits"></div>
    </div>
    <div class="d-flex justify-content-center align-items-center price-area">
        <div class="price"></div>
        <a href="javascript:;" class="tooltip alternate-currency-message ml-xs">
            <i class="icon-i d-flex"></i>
            <span class="tip">
                <div class="billing-info-icon-text"></div>
            </span>
        </a>
    </div>
    <a href="#" class="ghost-btn">Cambiar</a>
</div>



<div class="col-6 col-6-sm form-elements cloneable-zip-code-form-element hide">
	<label>Código postal</label>
    <input type="text" name="zipcode" placeholder="ZIP/Postal code" required>
</div>

<div class="col-6 col-6-sm form-elements cloneable-dob-form-element hide">
    <div class="col-12">
        <div class="dob-label-text d-flex justify-content-center col-12 p-0 mt-md">
            <div class="col-9">Por favor ingresa tu fecha de nacimiento:</div>
        </div>
        <div class="d-flex">
            <div class="dob-month form-elements col-4 col-12-sm">
                <select name="dateMonth" id="dateMonth">
                <option value="Month" selected disabled>Mes</option>
                    <option value="1">January</option>
<option value="2">February</option>
<option value="3">March</option>
<option value="4">April</option>
<option value="5">May</option>
<option value="6">June</option>
<option value="7">July</option>
<option value="8">August</option>
<option value="9">September</option>
<option value="10">October</option>
<option value="11">November</option>
<option value="12">December</option>
                </select>
            </div>
            <div class="dob-date form-elements col-3 col-12-sm">
                <select name="dateDay" id="dateDay">
                    <option value="Date" selected disabled>Día</option>
                    <option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
                </select>
            </div>
            <div class="dob-year form-elements col-2 col-12-sm">
                <select name="dateYear" id="dateYear">
                    <option value="Year" selected disabled>Año</option>
                    <option value="2006">2006</option>
<option value="2005">2005</option>
<option value="2004">2004</option>
<option value="2003">2003</option>
<option value="2002">2002</option>
<option value="2001">2001</option>
<option value="2000">2000</option>
<option value="1999">1999</option>
<option value="1998">1998</option>
<option value="1997">1997</option>
<option value="1996">1996</option>
<option value="1995">1995</option>
<option value="1994">1994</option>
<option value="1993">1993</option>
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
<option value="1989">1989</option>
<option value="1988">1988</option>
<option value="1987">1987</option>
<option value="1986">1986</option>
<option value="1985">1985</option>
<option value="1984">1984</option>
<option value="1983">1983</option>
<option value="1982">1982</option>
<option value="1981">1981</option>
<option value="1980">1980</option>
<option value="1979">1979</option>
<option value="1978">1978</option>
<option value="1977">1977</option>
<option value="1976">1976</option>
<option value="1975">1975</option>
<option value="1974">1974</option>
<option value="1973">1973</option>
<option value="1972">1972</option>
<option value="1971">1971</option>
<option value="1970">1970</option>
<option value="1969">1969</option>
<option value="1968">1968</option>
<option value="1967">1967</option>
<option value="1966">1966</option>
<option value="1965">1965</option>
<option value="1964">1964</option>
<option value="1963">1963</option>
<option value="1962">1962</option>
<option value="1961">1961</option>
<option value="1960">1960</option>
<option value="1959">1959</option>
<option value="1958">1958</option>
<option value="1957">1957</option>
<option value="1956">1956</option>
<option value="1955">1955</option>
<option value="1954">1954</option>
<option value="1953">1953</option>
<option value="1952">1952</option>
<option value="1951">1951</option>
<option value="1950">1950</option>
<option value="1949">1949</option>
<option value="1948">1948</option>
<option value="1947">1947</option>
<option value="1946">1946</option>
<option value="1945">1945</option>
<option value="1944">1944</option>
<option value="1943">1943</option>
<option value="1942">1942</option>
<option value="1941">1941</option>
<option value="1940">1940</option>
<option value="1939">1939</option>
<option value="1938">1938</option>
<option value="1937">1937</option>
<option value="1936">1936</option>
<option value="1935">1935</option>
<option value="1934">1934</option>
<option value="1933">1933</option>
<option value="1932">1932</option>
<option value="1931">1931</option>
<option value="1930">1930</option>
<option value="1929">1929</option>
<option value="1928">1928</option>
<option value="1927">1927</option>
<option value="1926">1926</option>
<option value="1925">1925</option>
<option value="1924">1924</option>
<option value="1923">1923</option>
<option value="1922">1922</option>
<option value="1921">1921</option>
<option value="1920">1920</option>
<option value="1919">1919</option>
<option value="1918">1918</option>
<option value="1917">1917</option>
<option value="1916">1916</option>
<option value="1915">1915</option>
                </select>
            </div>
        </div>
    </div>

</div>

<div class="col-9 col-9-sm form-elements cloneable-cpf-form-element p-0 hide">
    <div class="col-12">
        <label>Por favor provea su número CPF:</label>
        <input type="text" name="cpf" placeholder="000.000.000-00" maxlength="14" required>
    </div>
</div>


<div class="col-4 col-7-sm form-elements cloneable-cvv-form-element hide">
    <div class="cc-card-input">
        <label></label>
        <input aria-label="cvv" type="text" name="cvv" placeholder="CVV2" required>
        <a href="javascript:;" class="tooltip tip-top">
            <i class="icon-i"></i>
            <span class="tip text-center" style="white-space: normal;width: 100%;max-width: 220px">
                <div class="cvv2-image"></div>
                <b>Card Verification(CVV2)</b><br>
                El número CVV2 es un número especial impreso en tu tarjeta de crédito que provee protección extra contra fraudes            </span>
        </a>
    </div>
</div>

<div class="col-12 form-elements cloneable-recur-consent-form-element hide mt-sm mb-sm">
    <div class="form-elements">
        <label class="input-label-field"></label>
        <label class="form-check-radio toggle-check recur-consent-field">
            <span class="visually-hidden">Consent</span>
            <input aria-label="recur consent" type="checkbox" name="recur_consent">
            <span class="toggle-check-box"></span>
            <span class="toggle-check-text field-text">

            </span>
        </label>
    </div>
</div>

<div class="col-12 form-elements cloneable-require-segpay-terms-form-element hide mt-sm mb-sm">
    <label></label>
    <div class="field-text text-center">
    </div>
    <input type="hidden" name="require_segpay_terms" value="1">
</div>

<div class="col-12 form-elements text-center cloneable-complete-purchase hide">
    <a href="#" class="btn success">Completar la compra</a>
</div>

<div class="billing-cloneable-verify-fields hide">
    <div data-field-name="firstname" class="col-6 col-12-sm form-elements hide">
        <label data-label="1">Primer nombre</label>
        <input data-input="1" type="text" placeholder="Primer nombre" required>
    </div>
    <div data-field-name="lastname" class="col-6 col-12-sm form-elements hide">
        <label data-label="1">Apellido</label>
        <input data-input="1" type="text" placeholder="Apellido" required>
    </div>
    <div data-field-name="bill_addr" class="col-6 col-12-sm form-elements hide">
        <label data-label="1">Dirección</label>
        <input data-input="1" type="text" placeholder="Dirección" required>
    </div>
    <div data-field-name="bill_addr_city" class="col-6 col-12-sm form-elements hide">
        <label data-label="1">Ciudad</label>
        <input data-input="1" type="text" placeholder="Ciudad" required>
    </div>
    <div data-field-name="bill_addr_district" class="col-6 col-12-sm form-elements hide">
        <label data-label="1">Distrito</label>
        <input data-input="1" type="text" placeholder="Distrito" required>
    </div>
    <div data-field-name="bill_addr_state" class="col-6 col-12-sm form-elements hide">
       <label data-label="1">Estado</label>
        <select data-input="1">
            <option value="-1" selected disabled>Seleccionar estado</option>
        </select>
    </div>
    <div data-field-name="bill_addr_zip" class="col-6 col-12-sm form-elements hide">
        <label data-label="1">Código postal</label>
        <input data-input="1" type="text" placeholder="Código postal" required>
    </div>
    <div data-field-name="bill_addr_country" class="col-6 col-12-sm form-elements hide">
        <label data-label="1">País</label>
        <select data-input="1">
            <option value="-1" selected disabled>Seleccione el país</option>
        </select>
    </div>
    <div data-field-name="email" class="col-6 col-12-sm form-elements hide">
        <label data-label="1">correo electrónico</label>
        <input data-input="1" type="email" placeholder="correo electrónico" autocomplete="email" required>
    </div>
</div>



<style>
	.customer-survey-page-container {
		min-height: 400px;
	}
	.whitelabel .customer-survey-page-container {
		padding: 0 0 50px 0;
	}

	.sending-survey-container {
		z-index: 99;
	}

	.survey-questions-container {
		max-height: unset; 
	}

	.survey-question {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		padding: 20px 0;
		border-bottom: 1px solid rgba(150,150,150,0.3);
	}

	.survey-question:last-child {
		border-bottom: 0;
	}

	.survey-question[data-question-type="comment"] {
		align-items: flex-start;
	}

	.form-elements.survey-question {
		margin: 0;
	}

	.survey-question p {
		margin: 0;
	}

	.survey-question.form-elements label.col-6 {
		width: 50%;
		height: unset;
	}

	.survey-comment-response {
		font-size: calc(12px + .1vw);
	}

	.survey-number {
		font-weight: 700;
	}

	.survey-rating-container .icon-star-solid {
		font-size: 18px;
		margin: 0 4px 0 0;
	}

	.beta-q-overlay-submit #betaQSubmit .beta-q-overlay-submit {
		background: #05cbe7;
		border: 0;
		margin: 0;
	}

	.beta-q-overlay-submit #betaQSubmit .beta-q-overlay-submit:hover {
		background: rgba(5,203,231,0.8);
	}

	.survey-success-response,
	.survey-error-response,
	.no-survey-message {
		width: 100% !important;
		box-sizing: border-box;
	}

	.beta-q-overlay-inner .survey-answers-container {
		height: 100%;
	}

	.beta-q-modal-container .modal-wrap .modal {
		background: #323641;
	}

	.beta-q-modal-header-text {
		font-size: 14px;
	}

	.beta-q-modal-container .beta-q-overlay-header {
		justify-content: space-between;
	}

	.beta-q-modal-container .form-elements label {
		height: unset;
	}

	.beta-q-overlay-right {
		color: #fff;
	}

	.beta-q-overlay-inner {
		max-height: 500px;
		overflow-y: auto;
	}

	.xvideos-cams .single-header-category.header-nav-item.beta-q-modal-header {
		font-size: 13px;
		height: 40px;
		display: flex;
		align-items: center;
		padding: 20px 20px 20px 5px !important;
		background-color: rgb(41 41 41);
		border-top: 1px solid #000 !important;
		color: #fff !important;
		max-height: unset;
		box-sizing: border-box;
		position: unset;
		width: 100%;
		animation: unset;
	}

	@media (max-width: 767px) {
		.survey-question.form-elements label.col-6 {
			width: 100%;
		}
		.survey-answers-container {
			margin: 8px 0 0 0 !important;
		}
	}
</style>

<input type="radio" name="modalControl" class="hide modal-control" id="beta_q_modal_off">
<div class="beta-q-modal-container modal-container animate-from-top">
	<input type="radio" name="modalControl" class="hide modal-control" id="beta_q_modal">
	<label class="visually-hidden" for="beta_q_modal"><span class="visually-hidden">modal control</span></label>
		<label class="modal-shadow" for="beta_q_modal_off"><span class="visually-hidden">Close</span></label>
	<div class="modal-wrap">
		<div class="modal">
			<div class="modal-body">
				<div class="beta-q-overlay">
					<div class="beta-q-overlay-right">
						<div class="beta-q-overlay-header d-flex">
							<div class="beta-q-modal-header-text">Customer Survey</div>
							<label class="beta-q-close-modal" for="beta_q_modal_off"><span class="visually-hidden">Close</span><i class="icon-x"></i></label>
						</div>

						<div class="fetching-survey-container hide">
							<span class="loading-text d-flex justify-content-center align-items-center" style="font-size: 16px;">Fetching survey <span>...</span></span>
						</div>

						<div class="sending-survey-container justify-content-center align-items-center flex-column hide">
							<i class="loading-v2 lg"></i>
						</div>

						<form class="beta-q-overlay-inner">

							<div class="form-elements clonable-survey-comment hide">
								<p>
									<span class="survey-number">1)</span>
									<span class="survey-question-text">How has your experience with the models today?</span>
								</p>
								<label>
									<span class="visually-hidden">Survey response</span>
									<textarea class="survey-comment-response" name="survey-comment-response"></textarea>
								</label>
							</div>

							<div class="form-elements clonable-survey-rating hide">
								<p>
									<span class="survey-number">2)</span>
									<span class="survey-question-text">How would you rate the quality of video streams today?</span>
								</p>
								<div class="d-flex mt-sm ml-md">
									<div class="survey-rating-container text-center" data-user-rating="">
										<i class="icon-star-solid" data-rating="1-star"></i>
										<i class="icon-star-solid" data-rating="2-star"></i>
										<i class="icon-star-solid" data-rating="3-star"></i>
										<i class="icon-star-solid" data-rating="4-star"></i>
										<i class="icon-star-solid" data-rating="5-star"></i>
									</div>
								</div>
							</div>

							<div class="clonable-survey-yes-no hide">
								<p>
									<span class="survey-number">3)</span>
									<span class="survey-question-text">Would you recommend the chatroom to a friend?</span>
								</p>

								<div class="d-flex mt-sm">

									<div class="d-flex justify-content-center align-items-center mr-sm ml-sm survey-yes-no-option">
										<input type="radio" value="yes" class="survey-yes-res survey-radio-option" id="survey-yes-input"> <label class="survey-yes-label" for="survey-yes-input">Yes</label>
									</div>

									<div class="d-flex justify-content-center align-items-center mr-sm ml-sm survey-yes-no-option">
										<input type="radio" value="no" class="survey-no-res survey-radio-option" id="survey-no-input"> <label class="survey-no-label" for="survey-no-input">No</label>
									</div>
								</div>
							</div>

														<div class="survey-questions-container"></div>

							<div class="beta-q-overlay-submit mt-md">
								<div id="betaQSubmit">
									<input type="submit" value="Submit" class="btn primary beta-q-overlay-submit"/>
								</div>
							</div>
						</form>

						<div class="alert success hide survey-success-response hide" style="width: 300px;">
							<div class="alert-title clearfix">
								<span>
									<i class="icon-checkmark"></i>
									Success!
								</span>
							</div>
							<span>Thank you for sending us your feedback!</span>
						</div>

						<div class="alert danger hide survey-error-response hide">
							<div class="alert-title clearfix">
								<span>
									<i class="icon-alert"></i>
									Error!
								</span>
							</div>
							<span>There was an issue with sending your feedback. Please try again.</span>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>

	
<script>
window.__homePageData__ = {
    'models': [
        {"room_status_char":"O","room_status":"In Open","topic":"I like to go crazy sometimes but I need someone that knows how to guide me there. Follow me @OdetteBensen","category_id":"24","category_name":"Blonde","category_id_2":"311","category_name_2":"Small Tits","category_id_3":"96","category_name_3":"Tattoos","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"62","num_supplemental":"45","pa_type":"pa","server_public_name":"chat001.vs3.com","server_private_name":"chat001.lan.vsmedia.net","video_host":"video-gpu002-dp-otp.vs3.com","video_ingest":"video-gpu002-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"43357","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UEBF","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"20","location":"","sample_image_id":"4480330","sample_image_width":"4024","sample_image_height":"3018","power_score":"739900","cph":"464.00","tagline":"Innocent look, naughty mind","percentile":"15","languages":"en","country_code":"o1","model_id":"1299124","is_feature":"0","is_scheduled":"1","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1299124.jpg","num_perf":"1","display":"Odette Bensen","model_name":"ODETTE_BENSEN","model_seo_name":"odette-bensen","power_score_xvc":"737400","power_score_xvt":"737400","scheduled_info":{"id":"120598","model_id":"1299124","service":"girls","title":"Dare for more  ","description":"And see  what  you can have , maybe you will  want more and more ","sample_image_id":"4466474","login_type_id":"29","recurring_show_id":"0","date_start":"2024-01-17 02:00:01","date_end":"2024-01-17 03:00:00","tz_offset":"0.0","status":"1","is_model_plugin":"0","platform_id":"1","sitekey":"all","domain":"all"},"geo_powerscore":675647,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/480\/4480330\/4480330"},{"room_status_char":"F","room_status":"In Private","topic":"","category_id":"185","category_name":"Girls Next Door","category_id_2":"393","category_name_2":"Glamour","category_id_3":"407","category_name_3":"Alternative","login_type_id":"196","login_type_title":"Welcome Day 50cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"20","multi_user_private":"N","wdm":"1","bulk_allowed":"N","num_users":"38","num_supplemental":"0","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu001-dp-de.vs3.com","video_ingest":"video-gpu001-dp-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"1600","browser_port":"39717","is_high_quality":"1","average_rating":"5","eye_color":"blue","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"KXKX","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"34","location":"","sample_image_id":"4466076","sample_image_width":"2048","sample_image_height":"1536","power_score":"746150","cph":"577.00","tagline":"Your next favorite blondie","percentile":"14","languages":"en","country_code":"o1","model_id":"1323587","is_feature":"0","is_scheduled":"0","is_new":"9","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1323587.jpg","num_perf":"1","display":"Alexxa A","model_name":"ALEXXA_A","model_seo_name":"alexxa-a","power_score_xvc":"746450","power_score_xvt":"746450","geo_powerscore":1360762,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/466\/4466076\/4466076"},{"room_status_char":"O","room_status":"In Open","topic":"Hey Hey Hey, Blonds like 2 have FUN!!! FUK wit da HUSTLE!!! IG @iamhollywoodalicee","category_id":"43","category_name":"Adult Stars","category_id_2":"90","category_name_2":"Squirters","category_id_3":"147","category_name_3":"Double Penetration","login_type_id":"1","login_type_title":"Standard 60cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"25","num_supplemental":"82","pa_type":"pa","server_public_name":"chat004.vs3.com","server_private_name":"chat004.lan.vsmedia.net","video_host":"video-gpu005-mojo-det.vs3.com","video_ingest":"video-gpu005-mojo-det.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"33817","is_high_quality":"1","average_rating":"5","eye_color":"grey","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"SNUZ","broadcaster_id":"648454","ref_broadcaster_id":"0","age":"26","location":"Hollywood CA","sample_image_id":"4489054","sample_image_width":"800","sample_image_height":"600","power_score":"850950","cph":"2895.00","tagline":"Exotic Caramel Hottie","percentile":"6","languages":"en","country_code":"us","model_id":"1030380","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1030380.jpg","num_perf":"1","display":"Hollywood Alicee","model_name":"HOLLYWOOD_ALICEE","model_seo_name":"hollywood-alicee","power_score_xvc":"850350","power_score_xvt":"850350","phone":{"id":"61990","model_id":"1030380","primary_ext":"183415","username":"MODEL_1030380","incoming_tel_num":"***********","country_code":"US","call_rate_id":"11","date_created":"2020-04-26","last_updated":"2023-04-20 10:53:06","status":"1","verified_phone":"1","cpm_cost":"100 Credits Per Minute"},"geo_powerscore":593920,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/489\/4489054\/4489054"},{"room_status_char":"O","room_status":"In Open","topic":"(h)","category_id":"73","category_name":"Big Boobs","category_id_2":"185","category_name_2":"Girls Next Door","category_id_3":"393","category_name_3":"Glamour","login_type_id":"41","login_type_title":"Combo 90cpm\/60cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"90","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"80","num_supplemental":"12","pa_type":"pa","server_public_name":"chat006.vs3.com","server_private_name":"chat006.lan.vsmedia.net","video_host":"video-gpu007-tss-de.vs3.com","video_ingest":"video-gpu007-tss-de.vs3.com","video_width":"1920","video_aspect_ratio":"16:9","video_bitrate_set":"4500","browser_port":"45099","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"","is_test_account":"N","studio":"NUPA","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"28","location":"","sample_image_id":"4489337","sample_image_width":"3024","sample_image_height":"2268","power_score":"976900","cph":"2812.00","tagline":"Romantic, natural and sexy are the attributes that best describe me!","percentile":"1","languages":"en,es,fr,it","country_code":"o1","model_id":"518819","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"Y","fetish_image_id":"4293264","service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/518819.jpg","num_perf":"1","display":"Devious Angell","model_name":"DEVIOUS_ANGELL","model_seo_name":"devious-angell","power_score_xvc":"976900","power_score_xvt":"976900","phone":{"id":"65659","model_id":"518819","primary_ext":"484972","username":"MODEL_518819","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"19","date_created":"2021-01-06","last_updated":"2021-01-06 06:24:18","status":"1","verified_phone":"1","cpm_cost":"80 Credits Per Minute"},"geo_powerscore":633047,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/489\/4489337\/4489337"},{"room_status_char":"O","room_status":"In Open","topic":"SALE for 01\/15,16,17  flash tits - 25 CREDITS","category_id":"24","category_name":"Blonde","category_id_2":"73","category_name_2":"Big Boobs","category_id_3":"373","category_name_3":"European Girls","login_type_id":"45","login_type_title":"Combo 75cpm\/50cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"75","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"67","num_supplemental":"75","pa_type":"pa","server_public_name":"chat007.vs3.com","server_private_name":"chat007.lan.vsmedia.net","video_host":"video-gpu005-tss-de.vs3.com","video_ingest":"video-gpu005-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"35859","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"DKLT","broadcaster_id":"50002","ref_broadcaster_id":"0","age":"26","location":"","sample_image_id":"4174993","sample_image_width":"1600","sample_image_height":"1200","power_score":"964025","cph":"1761.00","tagline":"naughtiest angel ever","percentile":"1","languages":"en","country_code":"o1","model_id":"1018147","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1018147.jpg","num_perf":"1","display":"Dakota Tender","model_name":"DAKOTA_TENDER","model_seo_name":"dakota-tender","power_score_xvc":"964025","power_score_xvt":"964025","phone":{"id":"69006","model_id":"1018147","primary_ext":"628672","username":"MODEL_1018147","incoming_tel_num":"************","country_code":"UA","call_rate_id":"9","date_created":"2021-09-22","last_updated":"2022-08-27 12:31:50","status":"0","verified_phone":"1","cpm_cost":"40 Credits Per Minute"},"geo_powerscore":617370,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/174\/4174993\/4174993"},{"room_status_char":"O","room_status":"In Open","topic":"Happy Dayes \u263a\ufe0f NEW Tip Toy ON \ud83d\udca6 ALL tippers receive FANCLUB \ud83d\udc65","category_id":"341","category_name":"American Girls","category_id_2":"93","category_name_2":"Big Butts","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"39","login_type_title":"Premiere 120cpm","login_group_id":"6","login_group_title":"Premiere","default_cpm":"120","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"46","num_supplemental":"76","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu006-mojo-det.vs3.com","video_ingest":"video-gpu006-mojo-det.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"0","browser_port":"38825","is_high_quality":0,"average_rating":"5","eye_color":"blue","is_xvc":"1","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"RABK","broadcaster_id":"622272","ref_broadcaster_id":"0","age":"99","location":"The Mayetrix","sample_image_id":"3740087","sample_image_width":"943","sample_image_height":"707","power_score":"957950","cph":"2935.00","tagline":"I am sweet, ambitious, and thotful","percentile":"1","languages":"en","country_code":"us","model_id":"995490","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"S","fetish_image_id":"3477017","service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/995490.jpg","num_perf":"1","display":"Maye Daye","model_name":"MAYE_DAYE","model_seo_name":"maye-daye","power_score_xvc":"957950","power_score_xvt":"957950","phone":{"id":"59414","model_id":"995490","primary_ext":"487562","username":"MODEL_995490","incoming_tel_num":"***********","country_code":"US","call_rate_id":"21","date_created":"2019-10-30","last_updated":"2023-01-31 23:13:53","status":"1","verified_phone":"1","cpm_cost":"90 Credits Per Minute"},"geo_powerscore":1553321,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"003\/740\/3740087\/3740087"},{"room_status_char":"O","room_status":"In Open","topic":"CHECK OUT my TIP TARGET on my BIO and let's go to Mexico together! (h) --> dream tip: 75,000 credits! <-- (key) (rainbow)","category_id":"25","category_name":"Brunette","category_id_2":"96","category_name_2":"Tattoos","category_id_3":"185","category_name_3":"Girls Next Door","login_type_id":"40","login_type_title":"Combo 120cpm\/80cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"120","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"32","num_supplemental":"107","pa_type":"pa","server_public_name":"chat009.vs3.com","server_private_name":"chat009.lan.vsmedia.net","video_host":"video-gpu002-dp-otp.vs3.com","video_ingest":"video-gpu002-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"1800","browser_port":"38621","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"WJJP","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"28","location":"Rivendell","sample_image_id":"4347690","sample_image_width":"6747","sample_image_height":"5060","power_score":"953200","cph":"1613.00","tagline":"It all started when I was born.","percentile":"1","languages":"en,es","country_code":"o1","model_id":"929631","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"Y","fetish_image_id":"4348020","service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/929631.jpg","num_perf":"1","display":"Sarah","model_name":"SARAH","model_seo_name":"sarah","power_score_xvc":"952900","power_score_xvt":"952900","phone":{"id":"61298","model_id":"929631","primary_ext":"324232","username":"MODEL_929631","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"17","date_created":"2020-03-17","last_updated":"2023-11-30 05:26:11","status":"1","verified_phone":"1","cpm_cost":"70 Credits Per Minute"},"geo_powerscore":630878,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/347\/4347690\/4347690"},{"room_status_char":"O","room_status":"In Open","topic":"True Pleasure Awaits: Dive Deeper For A Delightful Ride Using My PRIVATE DEAL CODES For EXTRA FREE MINUTES! \ud83d\udca6 X: @EveDevilish_","category_id":"90","category_name":"Squirters","category_id_2":"129","category_name_2":"Anal","category_id_3":"24","category_name_3":"Blonde","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"30","num_supplemental":"92","pa_type":"pa","server_public_name":"chat004.vs3.com","server_private_name":"chat004.lan.vsmedia.net","video_host":"video-gpu003-dp-otp.vs3.com","video_ingest":"video-gpu003-dp-otp.vs3.com","video_width":"1920","video_aspect_ratio":"16:9","video_bitrate_set":"4500","browser_port":"46181","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UEAK","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"30","location":"Heaven","sample_image_id":"4093755","sample_image_width":"3039","sample_image_height":"2279","power_score":"952400","cph":"2586.00","tagline":"When daddy's home, my panties are gone!","percentile":"1","languages":"en,de","country_code":"o1","model_id":"1162848","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"Y","fetish_image_id":"4349586","service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1162848.jpg","num_perf":"1","display":"Eve Devilish","model_name":"EVE_DEVILISH","model_seo_name":"eve-devilish","power_score_xvc":"952700","power_score_xvt":"952700","phone":{"id":"74071","model_id":"1162848","primary_ext":"707985","username":"MODEL_1162848","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"9","date_created":"2023-03-11","last_updated":"2023-10-07 23:48:29","status":"1","verified_phone":"1","cpm_cost":"40 Credits Per Minute"},"geo_powerscore":643049,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/093\/4093755\/4093755"},{"room_status_char":"O","room_status":"In Open","topic":"(h) CONTEST DAY (h) Break the limits, take in high risk, come, prove. I promise you wont regret being in my room(f) PVTOPEN ;) (h) LUSH ON(s) BUZZ ME :P X: DanileHensen GOAL: 10K supportme :P","category_id":"129","category_name":"Anal","category_id_2":"90","category_name_2":"Squirters","category_id_3":"9","category_name_3":"Latina","login_type_id":"45","login_type_title":"Combo 75cpm\/50cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"75","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"43","num_supplemental":"74","pa_type":"pa","server_public_name":"chat008.vs3.com","server_private_name":"chat008.lan.vsmedia.net","video_host":"video-gpu001-dp-bog.vs3.com","video_ingest":"video-gpu001-dp-bog.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"38337","is_high_quality":"1","average_rating":"5","eye_color":"hazel","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"","is_test_account":"N","studio":"TOMX","broadcaster_id":"60077","ref_broadcaster_id":"0","age":"23","location":"Medell\u00edn","sample_image_id":"4486886","sample_image_width":"2666","sample_image_height":"2000","power_score":"952125","cph":"561.00","tagline":"Good girls are bad girls, they just need a push.","percentile":"1","languages":"en,es","country_code":"co","model_id":"1299231","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1299231.jpg","num_perf":"1","display":"Danile Hensen","model_name":"Danile_Hensen","model_seo_name":"danile-hensen","power_score_xvc":"952125","power_score_xvt":"952125","phone":{"id":"75461","model_id":"1299231","primary_ext":"734309","username":"MODEL_1299231","incoming_tel_num":"************","country_code":"CO","call_rate_id":"19","date_created":"2023-09-11","last_updated":"2024-01-14 07:39:00","status":"1","verified_phone":"1","cpm_cost":"80 Credits Per Minute"},"geo_powerscore":646902,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/486\/4486886\/4486886"},{"room_status_char":"O","room_status":"In Open","topic":"Hi guys (H) Toys on(H) Follow me in X JuliaSummers19y Instagram julia_summers2021 (H) my dream tip 30k (H)","category_id":"129","category_name":"Anal","category_id_2":"393","category_name_2":"Glamour","category_id_3":"93","category_name_3":"Big Butts","login_type_id":"16","login_type_title":"Premiere 75cpm","login_group_id":"6","login_group_title":"Premiere","default_cpm":"75","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"36","num_supplemental":"77","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu006-mojo-det.vs3.com","video_ingest":"video-gpu006-mojo-det.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"1800","browser_port":"45341","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"EPN","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"22","location":"Ur Venezuelan queen","sample_image_id":"4483441","sample_image_width":"4116","sample_image_height":"3087","power_score":"945325","cph":"1005.00","tagline":"i am not only an angel face, i can to be dangerous, be careful or u can burn.","percentile":"1","languages":"en,es","country_code":"ve","model_id":"1099470","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1099470.jpg","num_perf":"1","display":"Julia Summers","model_name":"JULIA_SUMMERS","model_seo_name":"julia-summers","power_score_xvc":"945325","power_score_xvt":"945325","phone":{"id":"74928","model_id":"1099470","primary_ext":"910537","username":"MODEL_1099470","incoming_tel_num":"***********","country_code":"US","call_rate_id":"13","date_created":"2023-07-01","last_updated":"2023-12-12 11:28:19","status":"1","verified_phone":"1","cpm_cost":"50 Credits Per Minute"},"geo_powerscore":625587,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/483\/4483441\/4483441"},{"room_status_char":"O","room_status":"In Open","topic":"BIG CONTEST TODAY (S) Only with your support i can qualify !!! All contributors will be rewarded (S) (H)","category_id":"93","category_name":"Big Butts","category_id_2":"373","category_name_2":"European Girls","category_id_3":"343","category_name_3":"Bodybuilder","login_type_id":"40","login_type_title":"Combo 120cpm\/80cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"120","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"21","num_supplemental":"104","pa_type":"pa","server_public_name":"chat005.vs3.com","server_private_name":"chat005.lan.vsmedia.net","video_host":"video-gpu001-tss-de.vs3.com","video_ingest":"video-gpu001-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"40017","is_high_quality":"1","average_rating":"4.9","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"GHOJ","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"25","location":"In your mind","sample_image_id":"4443087","sample_image_width":"1124","sample_image_height":"843","power_score":"942550","cph":"1513.00","tagline":"CAUTION: You might get addicted to me!","percentile":"1","languages":"en","country_code":"ro","model_id":"969545","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"S","fetish_image_id":"4472106","service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/969545.jpg","num_perf":"1","display":"Amannda Skye","model_name":"AMANNDA_SKYE","model_seo_name":"amannda-skye","power_score_xvc":"942850","power_score_xvt":"942850","phone":{"id":"57459","model_id":"969545","primary_ext":"454581","username":"MODEL_969545","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"17","date_created":"2019-05-25","last_updated":"2021-08-09 19:52:08","status":"1","verified_phone":"1","cpm_cost":"70 Credits Per Minute"},"geo_powerscore":580513,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/443\/4443087\/4443087"},{"room_status_char":"O","room_status":"In Open","topic":"Hi guys!(h) Let's have some fun (h) twitter@MarylinF4F #LushToyON (h)PowerBoost for a smile?","category_id":"185","category_name":"Girls Next Door","category_id_2":"73","category_name_2":"Big Boobs","category_id_3":"93","category_name_3":"Big Butts","login_type_id":"41","login_type_title":"Combo 90cpm\/60cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"90","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"35","num_supplemental":"99","pa_type":"pa","server_public_name":"chat004.vs3.com","server_private_name":"chat004.lan.vsmedia.net","video_host":"video-gpu003-dp-otp.vs3.com","video_ingest":"video-gpu003-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"39809","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"Esca2","is_test_account":"N","studio":"OXBY","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"23","location":"Europe","sample_image_id":"4461618","sample_image_width":"2277","sample_image_height":"1708","power_score":"942500","cph":"2152.00","tagline":"Daddy's Princess","percentile":"1","languages":"en","country_code":"us","model_id":"1178240","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1178240.jpg","num_perf":"1","display":"Miss Marylin","model_name":"MISS_MARYLIN","model_seo_name":"miss-marylin","power_score_xvc":"942500","power_score_xvt":"942500","phone":{"id":"70766","model_id":"1178240","primary_ext":"714341","username":"MODEL_1178240","incoming_tel_num":"***********","country_code":"RU","call_rate_id":"11","date_created":"2022-03-14","last_updated":"2022-03-22 07:54:45","status":"1","verified_phone":"0","cpm_cost":"100 Credits Per Minute"},"geo_powerscore":1455221,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/461\/4461618\/4461618"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"25","category_name":"Brunette","category_id_2":"75","category_name_2":"College Girls","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"28","num_supplemental":"99","pa_type":"pa","server_public_name":"chat012.vs3.com","server_private_name":"chat012.lan.vsmedia.net","video_host":"video-gpu004-dp-otp.vs3.com","video_ingest":"video-gpu004-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"42161","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UEBF","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"33","location":"Romania","sample_image_id":"4477993","sample_image_width":"1280","sample_image_height":"960","power_score":"931425","cph":"766.00","tagline":"Smart and funny, your dangerous mix","percentile":"2","languages":"en","country_code":"o1","model_id":"1328506","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1328506.jpg","num_perf":"1","display":"Tory Sable","model_name":"TORY_SABLE","model_seo_name":"tory-sable","power_score_xvc":"931125","power_score_xvt":"931125","phone":{"id":"76022","model_id":"1328506","primary_ext":"477026","username":"MODEL_1328506","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"13","date_created":"2023-11-28","last_updated":"2023-11-28 04:02:00","status":"1","verified_phone":"1","cpm_cost":"50 Credits Per Minute"},"geo_powerscore":148682,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/477\/4477993\/4477993"},{"room_status_char":"O","room_status":"In Open","topic":"American Girl! Tip 10 Credits To Say Hi! ;)","category_id":"341","category_name":"American Girls","category_id_2":"73","category_name_2":"Big Boobs","category_id_3":"393","category_name_3":"Glamour","login_type_id":"43","login_type_title":"Premiere 100cpm","login_group_id":"6","login_group_title":"Premiere","default_cpm":"100","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"28","num_supplemental":"100","pa_type":"pa","server_public_name":"chat004.vs3.com","server_private_name":"chat004.lan.vsmedia.net","video_host":"video-gpu001-mojo-det.vs3.com","video_ingest":"video-gpu001-mojo-det.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"1200","browser_port":"45591","is_high_quality":0,"average_rating":"4.6","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"ACRPZ","broadcaster_id":"819703","ref_broadcaster_id":"625411","age":"25","location":"USA","sample_image_id":"4478793","sample_image_width":"1239","sample_image_height":"929","power_score":"930350","cph":"2158.00","tagline":"Show you things words cannot say","percentile":"2","languages":"en","country_code":"us","model_id":"1314452","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1314452.jpg","num_perf":"1","display":"Cecilia Blue","model_name":"Cecilia_Blue","model_seo_name":"cecilia-blue","power_score_xvc":"930350","power_score_xvt":"930350","phone":{"id":"75636","model_id":"1314452","primary_ext":"641231","username":"MODEL_1314452","incoming_tel_num":"***********","country_code":"US","call_rate_id":"17","date_created":"2023-10-04","last_updated":"2023-11-03 22:44:19","status":"1","verified_phone":"0","cpm_cost":"70 Credits Per Minute"},"geo_powerscore":1427811,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/478\/4478793\/4478793"},{"room_status_char":"O","room_status":"In Open","topic":"TW-NaomiBea_sweet (H) TIPTOYON (h) Support me with any coin if it's not difficult (H)","category_id":"75","category_name":"College Girls","category_id_2":"185","category_name_2":"Girls Next Door","category_id_3":"93","category_name_3":"Big Butts","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"25","num_supplemental":"124","pa_type":"pa","server_public_name":"chat004.vs3.com","server_private_name":"chat004.lan.vsmedia.net","video_host":"video-gpu003-tss-de.vs3.com","video_ingest":"video-gpu003-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"34129","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"OXBY","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"21","location":"Prague ","sample_image_id":"4470242","sample_image_width":"2063","sample_image_height":"1547","power_score":"924900","cph":"995.00","tagline":"I love it when a man treats me in a special way.","percentile":"2","languages":"en","country_code":"cz","model_id":"1180179","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1180179.jpg","num_perf":"1","display":"Naomi Bea","model_name":"NAOMI_BEA","model_seo_name":"naomi-bea","power_score_xvc":"924900","power_score_xvt":"924900","phone":{"id":"70918","model_id":"1180179","primary_ext":"602329","username":"MODEL_1180179","incoming_tel_num":"***********","country_code":"RU","call_rate_id":"13","date_created":"2022-03-28","last_updated":"2022-03-28 09:09:59","status":"1","verified_phone":"1","cpm_cost":"50 Credits Per Minute"},"geo_powerscore":614887,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/470\/4470242\/4470242"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"129","category_name":"Anal","category_id_2":"189","category_name_2":"Hairy Pussy","category_id_3":"411","category_name_3":"BDSM","login_type_id":"41","login_type_title":"Combo 90cpm\/60cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"90","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"15","num_supplemental":"121","pa_type":"pa","server_public_name":"chat002.vs3.com","server_private_name":"chat002.lan.vsmedia.net","video_host":"video-gpu004-vsm-lax.vs3.com","video_ingest":"video-gpu004-vsm-lax.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"39337","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UEAG","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"25","location":"Colombia","sample_image_id":"4477868","sample_image_width":"960","sample_image_height":"720","power_score":"924500","cph":"769.00","tagline":"I would love to experience new things with you. Feel me.","percentile":"2","languages":"en,es","country_code":"co","model_id":"1251474","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1251474.jpg","num_perf":"1","display":"Emilie Tumbler","model_name":"EMILIE_TUMBLER","model_seo_name":"emilie-tumbler","power_score_xvc":"924500","power_score_xvt":"924500","geo_powerscore":616202,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/477\/4477868\/4477868"},{"room_status_char":"O","room_status":"In Open","topic":"Happy Wednesday! (H) lifetime snap 999 cr","category_id":"25","category_name":"Brunette","category_id_2":"373","category_name_2":"European Girls","category_id_3":"93","category_name_3":"Big Butts","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"28","num_supplemental":"90","pa_type":"pa","server_public_name":"chat004.vs3.com","server_private_name":"chat004.lan.vsmedia.net","video_host":"video-gpu002-tss-de.vs3.com","video_ingest":"video-gpu002-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"39167","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"HIP","broadcaster_id":"50004","ref_broadcaster_id":"0","age":"29","location":"Europe","sample_image_id":"4441658","sample_image_width":"3022","sample_image_height":"2267","power_score":"922875","cph":"2107.00","tagline":"Good sense of humour, dirty mind and beautiful heart.","percentile":"2","languages":"en","country_code":"o1","model_id":"1245447","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1245447.jpg","num_perf":"1","display":"Jenn Dee","model_name":"JENN_DEE","model_seo_name":"jenn-dee","power_score_xvc":"922975","power_score_xvt":"922975","geo_powerscore":587988,"is_big":"YES - 16","is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/441\/4441658\/4441658"},{"room_status_char":"O","room_status":"In Open","topic":"HELLO GUYS (K)","category_id":"93","category_name":"Big Butts","category_id_2":"129","category_name_2":"Anal","category_id_3":"9","category_name_3":"Latina","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"42","num_supplemental":"62","pa_type":"pa","server_public_name":"chat012.vs3.com","server_private_name":"chat012.lan.vsmedia.net","video_host":"video-gpu012-mojo-mia.vs3.com","video_ingest":"video-gpu012-mojo-mia.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"36745","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"SUAU","broadcaster_id":"60077","ref_broadcaster_id":"0","age":"26","location":"MEDELLIN","sample_image_id":"4424477","sample_image_width":"3448","sample_image_height":"2586","power_score":"922300","cph":"1254.00","tagline":"","percentile":"2","languages":"en,es","country_code":"o1","model_id":"1199575","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1199575.jpg","num_perf":"1","display":"Jade Johansson","model_name":"JADE_JOHANSSON","model_seo_name":"jade-johansson","power_score_xvc":"922300","power_score_xvt":"922300","geo_powerscore":1382710,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/424\/4424477\/4424477"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"73","category_name":"Big Boobs","category_id_2":"92","category_name_2":"Strippers","category_id_3":"93","category_name_3":"Big Butts","login_type_id":"30","login_type_title":"Multi-User 70cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"70","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"30","num_supplemental":"98","pa_type":"pa","server_public_name":"chat010.vs3.com","server_private_name":"chat010.lan.vsmedia.net","video_host":"video-gpu014-mojo-mia.vs3.com","video_ingest":"video-gpu014-mojo-mia.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"38077","is_high_quality":"1","average_rating":"5","eye_color":"black","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"GFWI","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"22","location":"","sample_image_id":"4486018","sample_image_width":"1280","sample_image_height":"960","power_score":"892225","cph":"1020.00","tagline":"Sweet smell of temptation between us","percentile":"3","languages":"en,es","country_code":"o1","model_id":"1315184","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1315184.jpg","num_perf":"1","display":"Katt Souza","model_name":"KATT_SOUZA","model_seo_name":"katt-souza","power_score_xvc":"892225","power_score_xvt":"892225","geo_powerscore":560614,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/486\/4486018\/4486018"},{"room_status_char":"O","room_status":"In Open","topic":"Hi! Tip if u like and show will be hotter (h) 25-51-101 are the best ways to add some oil to this fire (k) 250 tipflood will neutralize my pussy","category_id":"6","category_name":"Ebony","category_id_2":"92","category_name_2":"Strippers","category_id_3":"93","category_name_3":"Big Butts","login_type_id":"161","login_type_title":"Standard 20cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"20","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"26","num_supplemental":"96","pa_type":"pa","server_public_name":"chat012.vs3.com","server_private_name":"chat012.lan.vsmedia.net","video_host":"video-gpu001-tss-de.vs3.com","video_ingest":"video-gpu001-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"0","browser_port":"39743","is_high_quality":0,"average_rating":"4.8","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"AAHWA","broadcaster_id":"778890","ref_broadcaster_id":"0","age":"21","location":"Hardland","sample_image_id":"4303938","sample_image_width":"2510","sample_image_height":"1882","power_score":"891000","cph":"917.00","tagline":"Hello, my name if Mika! I am here to make you happy and hope to get the same from you!","percentile":"3","languages":"en","country_code":"pl","model_id":"1245078","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1245078.jpg","num_perf":"1","display":"Mika Vendy","model_name":"MIKA_VENDY","model_seo_name":"mika-vendy","power_score_xvc":"891000","power_score_xvt":"891000","geo_powerscore":436514,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/303\/4303938\/4303938"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"90","category_name":"Squirters","category_id_2":"75","category_name_2":"College Girls","category_id_3":"311","category_name_3":"Small Tits","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"23","num_supplemental":"95","pa_type":"pa","server_public_name":"chat007.vs3.com","server_private_name":"chat007.lan.vsmedia.net","video_host":"video-gpu015-mojo-mia.vs3.com","video_ingest":"video-gpu015-mojo-mia.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"36305","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UKJV","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"18","location":"Medellin","sample_image_id":"4485388","sample_image_width":"5120","sample_image_height":"3840","power_score":"889900","cph":"335.00","tagline":"cold look burning heart","percentile":"3","languages":"en,es,fr,it","country_code":"us","model_id":"1318218","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1318218.jpg","num_perf":"1","display":"Juliana Saenz","model_name":"JULIANA_SAENZ","model_seo_name":"juliana-saenz","power_score_xvc":"889100","power_score_xvt":"889100","geo_powerscore":564177,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/485\/4485388\/4485388"},{"room_status_char":"P","room_status":"In Private","topic":"Happy HumpDay! How about we have some fun? #toyon!(K)(K)","category_id":"93","category_name":"Big Butts","category_id_2":"24","category_name_2":"Blonde","category_id_3":"129","category_name_3":"Anal","login_type_id":"42","login_type_title":"Combo 60cpm\/40cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"N","num_users":"18","num_supplemental":"0","pa_type":"pa","server_public_name":"chat007.vs3.com","server_private_name":"chat007.lan.vsmedia.net","video_host":"video-gpu001-dp-prg.vs3.com","video_ingest":"video-gpu001-dp-prg.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"46501","is_high_quality":"1","average_rating":"5","eye_color":"blue","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"SBHN","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"30","location":"","sample_image_id":"4488664","sample_image_width":"1000","sample_image_height":"750","power_score":"886850","cph":"940.00","tagline":"Spicy with the wildness you are looking for!","percentile":"4","languages":"en","country_code":"o1","model_id":"1336820","is_feature":"0","is_scheduled":"0","is_new":"16","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1336820.jpg","num_perf":"1","display":"Adara Bunny","model_name":"ADARA_BUNNY","model_seo_name":"adara-bunny","power_score_xvc":"888250","power_score_xvt":"888250","geo_powerscore":566235,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/488\/4488664\/4488664"},{"room_status_char":"O","room_status":"In Open","topic":"New here (FIRE) Top 3 tippers of the day will get a free private with me (H) Check out my private deals, boost me and follow me on X : GildaHeaton","category_id":"185","category_name":"Girls Next Door","category_id_2":"26","category_name_2":"Redhead","category_id_3":"96","category_name_3":"Tattoos","login_type_id":"42","login_type_title":"Combo 60cpm\/40cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"10","num_supplemental":"114","pa_type":"pa","server_public_name":"chat008.vs3.com","server_private_name":"chat008.lan.vsmedia.net","video_host":"video-gpu005-tss-de.vs3.com","video_ingest":"video-gpu005-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"34863","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UEAM","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"24","location":"In your deepest fantasy","sample_image_id":"4477609","sample_image_width":"6027","sample_image_height":"4521","power_score":"789263","cph":"169.00","tagline":"The angel of fire!","percentile":"10","languages":"en,de,it","country_code":"o1","model_id":"1330569","is_feature":"0","is_scheduled":"0","is_new":"5","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1330569.jpg","num_perf":"1","display":"Gilda Heaton","model_name":"GILDA_HEATON","model_seo_name":"gilda-heaton","power_score_xvc":"789461","power_score_xvt":"789461","geo_powerscore":1326564,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/477\/4477609\/4477609"},{"room_status_char":"O","room_status":"In Open","topic":"(h) Tonight, I'd like to ask you to support me in achieving my personal target of 3k credits (fire) (fire) Help me get so wet with my TOY ON (squirt)","category_id":"102","category_name":"Bisexual","category_id_2":"0","category_name_2":"","category_id_3":"0","category_name_3":"","login_type_id":"21","login_type_title":"Standard 50cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"50","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"10","num_supplemental":"117","pa_type":"pa","server_public_name":"chat010.vs3.com","server_private_name":"chat010.lan.vsmedia.net","video_host":"video-gpu005-dp-bog.vs3.com","video_ingest":"video-gpu005-dp-bog.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"35385","is_high_quality":"1","average_rating":"0","eye_color":"","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"KBRC","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"26","location":"","sample_image_id":"4488538","sample_image_width":"1333","sample_image_height":"1000","power_score":"788600","cph":"91.00","tagline":"","percentile":"10","languages":"en,es","country_code":"co","model_id":"1323894","is_feature":"0","is_scheduled":"0","is_new":"11","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1323894.jpg","num_perf":"1","display":"Melissa Bernard","model_name":"MELISSA_BERNARD","model_seo_name":"melissa-bernard","power_score_xvc":"788225","power_score_xvt":"788225","geo_powerscore":566075,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/488\/4488538\/4488538"},{"room_status_char":"O","room_status":"In Open","topic":"guys thanks for visiting me today","category_id":"9","category_name":"Latina","category_id_2":"393","category_name_2":"Glamour","category_id_3":"96","category_name_3":"Tattoos","login_type_id":"25","login_type_title":"Multi-User 30cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"30","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"7","num_supplemental":"100","pa_type":"pa","server_public_name":"chat009.vs3.com","server_private_name":"chat009.lan.vsmedia.net","video_host":"video-gpu013-mojo-mia.vs3.com","video_ingest":"video-gpu013-mojo-mia.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"41185","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"KBRT","broadcaster_id":"60077","ref_broadcaster_id":"0","age":"27","location":"","sample_image_id":"4488947","sample_image_width":"2394","sample_image_height":"1796","power_score":"788600","cph":"70.00","tagline":"Don't let life pass you by, waiting for things to happen.  Constantly remember that YOU HAVE DREAMS,","percentile":"10","languages":"en,es","country_code":"o1","model_id":"1334752","is_feature":"0","is_scheduled":"0","is_new":"13","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1334752.jpg","num_perf":"1","display":"Perla Sweet","model_name":"PERLA_SWEET","model_seo_name":"perla-sweet","power_score_xvc":"788225","power_score_xvt":"788225","geo_powerscore":600542,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/488\/4488947\/4488947"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"25","category_name":"Brunette","category_id_2":"75","category_name_2":"College Girls","category_id_3":"373","category_name_3":"European Girls","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"28","num_supplemental":"60","pa_type":"pa","server_public_name":"chat006.vs3.com","server_private_name":"chat006.lan.vsmedia.net","video_host":"video-gpu001-dp-prg.vs3.com","video_ingest":"video-gpu001-dp-prg.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"33507","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"","is_test_account":"N","studio":"KXKX","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"24","location":"Your heart","sample_image_id":"4486758","sample_image_width":"1166","sample_image_height":"874","power_score":"747875","cph":"231.00","tagline":"I always have something new when it comes to outfits and ways to make you have a great time!","percentile":"14","languages":"en","country_code":"o1","model_id":"1335352","is_feature":"0","is_scheduled":"0","is_new":"11","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1335352.jpg","num_perf":"1","display":"Tina Claire","model_name":"TINA_CLAIRE","model_seo_name":"tina-claire","power_score_xvc":"746875","power_score_xvt":"746875","geo_powerscore":548594,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/486\/4486758\/4486758"},{"room_status_char":"O","room_status":"In Open","topic":"DO U WANNA FUCK WITH US ? COME !!!","category_id":"25","category_name":"Brunette","category_id_2":"75","category_name_2":"College Girls","category_id_3":"8","category_name_3":"Fetish","login_type_id":"42","login_type_title":"Combo 60cpm\/40cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"31","num_supplemental":"86","pa_type":"pa","server_public_name":"chat008.vs3.com","server_private_name":"chat008.lan.vsmedia.net","video_host":"video-gpu001-vsm-lax.vs3.com","video_ingest":"video-gpu001-vsm-lax.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"46187","is_high_quality":"1","average_rating":"0","eye_color":"","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"KERL","broadcaster_id":"50004","ref_broadcaster_id":"0","age":"20","location":"Colombia","sample_image_id":"4488168","sample_image_width":"1333","sample_image_height":"999","power_score":"673225","cph":"688.00","tagline":"","percentile":"21","languages":"en","country_code":"co","model_id":"1336505","is_feature":"0","is_scheduled":"0","is_new":"18","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1336505.jpg","num_perf":"2","display":"Venus & Noah","model_name":"VENUS_AND_NOAH","model_seo_name":"venus-and-noah","power_score_xvc":"672625","power_score_xvt":"672625","geo_powerscore":502675,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/488\/4488168\/4488168"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"407","category_name":"Alternative","category_id_2":"8","category_name_2":"Fetish","category_id_3":"345","category_name_3":"Roleplay","login_type_id":"42","login_type_title":"Combo 60cpm\/40cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"17","num_supplemental":"0","pa_type":"pa","server_public_name":"chat007.vs3.com","server_private_name":"chat007.lan.vsmedia.net","video_host":"video-gpu003-dp-otp.vs3.com","video_ingest":"video-gpu003-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"34855","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"JZNB","broadcaster_id":"50002","ref_broadcaster_id":"0","age":"22","location":"Dream","sample_image_id":"4277930","sample_image_width":"1600","sample_image_height":"1200","power_score":"880925","cph":"676.00","tagline":"My body hot lines make you feel so much better","percentile":"4","languages":"en","country_code":"o1","model_id":"1161825","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1161825.jpg","num_perf":"1","display":"Marissa Craft","model_name":"MARISSA_CRAFT","model_seo_name":"marissa-craft","power_score_xvc":"880925","power_score_xvt":"880925","geo_powerscore":607943,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/277\/4277930\/4277930"},{"room_status_char":"O","room_status":"In Open","topic":"5.9k to tier#1\ud83d\ude1dNEW thrusting TipToy in&ON~50\u21f6\ud83c\udf52\/\ud83e\uddb6\ud83c\udffb~100\u21f6\ud83c\udf51~150\u21f6\ud83c\udfa1\/(pussy)~200\u21f6\ud83c\udf51NOpanty~350\u21f6naked\/(sucking)~400\u21f6\ud83c\udf51Spread~500\u21f6Snap\ud83d\udc7bFC~X@RoxyRogerz\ud83c\udf08DREAM TIP 30k","category_id":"341","category_name":"American Girls","category_id_2":"93","category_name_2":"Big Butts","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"179","login_type_title":"Premiere 120cpm\/60cpm","login_group_id":"6","login_group_title":"Premiere","default_cpm":"120","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"30","num_supplemental":"88","pa_type":"pa","server_public_name":"chat006.vs3.com","server_private_name":"chat006.lan.vsmedia.net","video_host":"video-gpu005-mojo-det.vs3.com","video_ingest":"video-gpu005-mojo-det.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"0","browser_port":"36103","is_high_quality":0,"average_rating":"5","eye_color":"blue","is_xvc":"1","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"RACM","broadcaster_id":"622301","ref_broadcaster_id":"0","age":"33","location":"Your Screen","sample_image_id":"4446515","sample_image_width":"1573","sample_image_height":"1179","power_score":"876900","cph":"1721.00","tagline":"I LOVE it when I catch you lookin at me ;)","percentile":"4","languages":"en","country_code":"us","model_id":"995526","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"Y","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/995526.jpg","num_perf":"1","display":"Roxy Rogerz","model_name":"ROXY_ROGERZ","model_seo_name":"roxy-rogerz","power_score_xvc":"876900","power_score_xvt":"876900","phone":{"id":"76055","model_id":"995526","primary_ext":"834396","username":"MODEL_995526","incoming_tel_num":"***********","country_code":"US","call_rate_id":"21","date_created":"2023-12-04","last_updated":"2023-12-04 03:18:53","status":"1","verified_phone":"1","cpm_cost":"90 Credits Per Minute"},"geo_powerscore":608365,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/446\/4446515\/4446515"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"393","category_name":"Glamour","category_id_2":"311","category_name_2":"Small Tits","category_id_3":"60","category_name_3":"Exotic","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"41","num_supplemental":"88","pa_type":"pa","server_public_name":"chat010.vs3.com","server_private_name":"chat010.lan.vsmedia.net","video_host":"video-gpu005-tss-ny.vs3.com","video_ingest":"video-gpu005-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"38223","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"ZJMB","broadcaster_id":"54679","ref_broadcaster_id":"0","age":"22","location":"South America","sample_image_id":"4458924","sample_image_width":"2666","sample_image_height":"2000","power_score":"871725","cph":"556.00","tagline":"I'm a good little girl, prove me wrong","percentile":"4","languages":"en,es","country_code":"co","model_id":"1246776","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1246776.jpg","num_perf":"1","display":"Alejandra Hunt","model_name":"ALEJANDRA_HUNT","model_seo_name":"alejandra-hunt","power_score_xvc":"871925","power_score_xvt":"871925","geo_powerscore":563460,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/458\/4458924\/4458924"},{"room_status_char":"O","room_status":"In Open","topic":"3 Day Contest- Day 3! (s) 13319\/ 25k and 50k cr Total Goals!","category_id":"8","category_name":"Fetish","category_id_2":"341","category_name_2":"American Girls","category_id_3":"137","category_name_3":"Domination","login_type_id":"39","login_type_title":"Premiere 120cpm","login_group_id":"6","login_group_title":"Premiere","default_cpm":"120","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"10","num_supplemental":"150","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu002-mojo-det.vs3.com","video_ingest":"video-gpu002-mojo-det.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"41097","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"FYVY","broadcaster_id":"267191","ref_broadcaster_id":"256239","age":"32","location":"California ","sample_image_id":"4329849","sample_image_width":"2667","sample_image_height":"2000","power_score":"866525","cph":"1426.00","tagline":"Here for a good time, not a long one.","percentile":"5","languages":"en","country_code":"us","model_id":"609535","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"S","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/609535.jpg","num_perf":"1","display":"Katharine Cane","model_name":"KATHARINE_CANE","model_seo_name":"katharine-cane","power_score_xvc":"866325","power_score_xvt":"866325","phone":{"id":"25475","model_id":"609535","primary_ext":"693479","username":"MODEL_609535","incoming_tel_num":"***********","country_code":"US","call_rate_id":"15","date_created":"2015-09-12","last_updated":"2022-01-25 00:07:17","status":"1","verified_phone":"1","cpm_cost":"60 Credits Per Minute"},"geo_powerscore":279535,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/329\/4329849\/4329849"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"75","category_name":"College Girls","category_id_2":"102","category_name_2":"Bisexual","category_id_3":"93","category_name_3":"Big Butts","login_type_id":"13","login_type_title":"Multi-User 10cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"10","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"12","num_supplemental":"123","pa_type":"pa","server_public_name":"chat001.vs3.com","server_private_name":"chat001.lan.vsmedia.net","video_host":"video-gpu008-tss-ny.vs3.com","video_ingest":"video-gpu008-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"40705","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"WMEF","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"27","location":"YOUR MIND","sample_image_id":"4487839","sample_image_width":"1200","sample_image_height":"900","power_score":"864125","cph":"187.00","tagline":"FANATICS OF THE FORBIDDEN","percentile":"5","languages":"en,es","country_code":"co","model_id":"1143277","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1143277.jpg","num_perf":"1","display":"Stefany Hernandez","model_name":"STEFANY_HERNANDEZ","model_seo_name":"stefany-hernandez","power_score_xvc":"869225","power_score_xvt":"869225","geo_powerscore":612120,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/487\/4487839\/4487839"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"341","category_name":"American Girls","category_id_2":"93","category_name_2":"Big Butts","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"41","login_type_title":"Combo 90cpm\/60cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"90","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"11","num_supplemental":"116","pa_type":"pa","server_public_name":"chat012.vs3.com","server_private_name":"chat012.lan.vsmedia.net","video_host":"video-gpu006-mojo-det.vs3.com","video_ingest":"video-gpu006-mojo-det.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"34029","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"","is_test_account":"N","studio":"APLE","broadcaster_id":"55039","ref_broadcaster_id":"0","age":"23","location":"USA","sample_image_id":"4436124","sample_image_width":"2944","sample_image_height":"2208","power_score":"860700","cph":"1643.00","tagline":"Shouldnt you be in my bed?","percentile":"5","languages":"en","country_code":"us","model_id":"966105","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/966105.jpg","num_perf":"1","display":"Bianca Bellucci","model_name":"BIANCA_BELLUCCI","model_seo_name":"bianca-bellucci","power_score_xvc":"860700","power_score_xvt":"860700","geo_powerscore":616136,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/436\/4436124\/4436124"},{"room_status_char":"O","room_status":"In Open","topic":"(H) Hi Love, Happy Titty-Day (H) Domi Toy On (squirt) Join My FanClub to unlock WHISPERS (CHAMP)Follow my Insta&Tiktok: @theofficialsophiasanchez:zap: Twitter: @sophiasanchezxx:blue_heart:","category_id":"73","category_name":"Big Boobs","category_id_2":"93","category_name_2":"Big Butts","category_id_3":"393","category_name_3":"Glamour","login_type_id":"216","login_type_title":"Premiere 150cpm\/120cpm","login_group_id":"6","login_group_title":"Premiere","default_cpm":"150","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"36","num_supplemental":"67","pa_type":"pa","server_public_name":"chat009.vs3.com","server_private_name":"chat009.lan.vsmedia.net","video_host":"video-gpu002-mojo-det.vs3.com","video_ingest":"video-gpu002-mojo-det.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"1600","browser_port":"41479","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"1","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"QZVH","broadcaster_id":"622113","ref_broadcaster_id":"0","age":"69","location":"Miami","sample_image_id":"4455917","sample_image_width":"3024","sample_image_height":"2268","power_score":"856550","cph":"3208.00","tagline":"20% Angel. 80% Devil. Down to Earth.","percentile":"5","languages":"en,es","country_code":"us","model_id":"995323","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/995323.jpg","num_perf":"1","display":"Sophia Sanchez","model_name":"SOPHIA_SANCHEZ","model_seo_name":"sophia-sanchez","power_score_xvc":"857850","power_score_xvt":"857850","phone":{"id":"59724","model_id":"995323","primary_ext":"566481","username":"MODEL_995323","incoming_tel_num":"***********","country_code":"US","call_rate_id":"11","date_created":"2019-11-21","last_updated":"2023-04-09 20:25:38","status":"1","verified_phone":"1","cpm_cost":"100 Credits Per Minute"},"geo_powerscore":1503682,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/455\/4455917\/4455917"},{"room_status_char":"O","room_status":"In Open","topic":"\ud83d\udc96Hello guys, send 10 Cr or powerboot and you will receive a generous prize. Add me to favorites and I will spoil you too\ud83d\udc96","category_id":"73","category_name":"Big Boobs","category_id_2":"129","category_name_2":"Anal","category_id_3":"90","category_name_3":"Squirters","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"5","num_supplemental":"108","pa_type":"pa","server_public_name":"chat007.vs3.com","server_private_name":"chat007.lan.vsmedia.net","video_host":"video-gpu001-tss-dfw.vs3.com","video_ingest":"video-gpu001-tss-dfw.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"43565","is_high_quality":"1","average_rating":"4.9","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"ABNAW","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"24","location":"Medellin","sample_image_id":"4481447","sample_image_width":"2581","sample_image_height":"1936","power_score":"855725","cph":"154.00","tagline":"What do you have in mind to have fun?  (=^\uff65^=)","percentile":"5","languages":"en,es","country_code":"co","model_id":"1331924","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1331924.jpg","num_perf":"1","display":"Alexa Kimm","model_name":"ALEXA_KIMM","model_seo_name":"alexa-kimm","power_score_xvc":"856525","power_score_xvt":"856525","phone":{"id":"76121","model_id":"1331924","primary_ext":"860209","username":"MODEL_1331924","incoming_tel_num":"************","country_code":"CO","call_rate_id":"3","date_created":"2023-12-15","last_updated":"2023-12-15 20:36:26","status":"1","verified_phone":"0","cpm_cost":"10 Credits Per Minute"},"geo_powerscore":576345,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/481\/4481447\/4481447"},{"room_status_char":"O","room_status":"In Open","topic":"(h) If you could read my mind, I'm pretty sure you would wish to be here! (fire) @ Toy On (foam) Make me wet with your vibes using my toy (fire)","category_id":"25","category_name":"Brunette","category_id_2":"75","category_name_2":"College Girls","category_id_3":"393","category_name_3":"Glamour","login_type_id":"29","login_type_title":"Multi-User 50cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"50","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"10","num_supplemental":"86","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu006-dp-bog.vs3.com","video_ingest":"video-gpu006-dp-bog.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"45895","is_high_quality":"1","average_rating":"0","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"KBRC","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"26","location":"","sample_image_id":"4483635","sample_image_width":"3877","sample_image_height":"2907","power_score":"800000","cph":"84.00","tagline":"I love simple pleasures; they are the last refuge of complicated men!","percentile":"9","languages":"en,es","country_code":"co","model_id":"1333593","is_feature":"0","is_scheduled":"0","is_new":"2","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1333593.jpg","num_perf":"1","display":"Zendaya Bonnet","model_name":"ZENDAYA_BONNET","model_seo_name":"zendaya-bonnet","power_score_xvc":"800000","power_score_xvt":"800000","geo_powerscore":1363020,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/483\/4483635\/4483635"},{"room_status_char":"O","room_status":"In Open","topic":"Just good vibes,please :)... TW @SierraKnigtht_ ,add me :)","category_id":"93","category_name":"Big Butts","category_id_2":"393","category_name_2":"Glamour","category_id_3":"25","category_name_3":"Brunette","login_type_id":"41","login_type_title":"Combo 90cpm\/60cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"90","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"20","num_supplemental":"92","pa_type":"pa","server_public_name":"chat009.vs3.com","server_private_name":"chat009.lan.vsmedia.net","video_host":"video-gpu001-dp-otp.vs3.com","video_ingest":"video-gpu001-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"1800","browser_port":"43565","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"","is_test_account":"N","studio":"WJJP","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"28","location":"Heaven","sample_image_id":"4485005","sample_image_width":"3044","sample_image_height":"2283","power_score":"848325","cph":"600.00","tagline":"The perfect lady with a hidden wild side !","percentile":"6","languages":"en,es","country_code":"o1","model_id":"1095357","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1095357.jpg","num_perf":"1","display":"Sierra Knight","model_name":"SIERRA_KNIGHT","model_seo_name":"sierra-knight","power_score_xvc":"846825","power_score_xvt":"846825","phone":{"id":"70003","model_id":"1095357","primary_ext":"144879","username":"MODEL_1095357","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"9","date_created":"2021-12-20","last_updated":"2021-12-20 02:34:26","status":"1","verified_phone":"1","cpm_cost":"40 Credits Per Minute"},"geo_powerscore":616207,"is_big":"YES - 36","is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/485\/4485005\/4485005"},{"room_status_char":"O","room_status":"In Open","topic":"A naughty attitude will lead to sexy things ! #lushin #vibeme","category_id":"102","category_name":"Bisexual","category_id_2":"25","category_name_2":"Brunette","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"1","login_type_title":"Standard 60cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"21","num_supplemental":"92","pa_type":"pa","server_public_name":"chat008.vs3.com","server_private_name":"chat008.lan.vsmedia.net","video_host":"video-gpu005-tss-de.vs3.com","video_ingest":"video-gpu005-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"33923","is_high_quality":"1","average_rating":"4.8","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"","is_test_account":"N","studio":"UEAE","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"31","location":"DreamLand","sample_image_id":"3743156","sample_image_width":"800","sample_image_height":"600","power_score":"848300","cph":"685.00","tagline":"Don\u2019t Worry, Be Happy!","percentile":"6","languages":"en","country_code":"o1","model_id":"1078906","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1078906.jpg","num_perf":"1","display":"Nicole Diva","model_name":"NICOLE_DIVA","model_seo_name":"nicole-diva","power_score_xvc":"848800","power_score_xvt":"848800","phone":{"id":"75828","model_id":"1078906","primary_ext":"347515","username":"MODEL_1078906","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"3","date_created":"2023-10-30","last_updated":"2023-11-23 02:01:53","status":"0","verified_phone":"1","cpm_cost":"10 Credits Per Minute"},"geo_powerscore":240947,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"003\/743\/3743156\/3743156"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"1","category_name":"Lesbian","category_id_2":"2","category_name_2":"Couples","category_id_3":"9","category_name_3":"Latina","login_type_id":"4","login_type_title":"Multi-User 60cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"32","num_supplemental":"83","pa_type":"pa","server_public_name":"chat004.vs3.com","server_private_name":"chat004.lan.vsmedia.net","video_host":"video-gpu003-mojo-det.vs3.com","video_ingest":"video-gpu003-mojo-det.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"42255","is_high_quality":"1","average_rating":"4.8","eye_color":"blue","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"VKJC","broadcaster_id":"156403","ref_broadcaster_id":"0","age":"21","location":"Colombia","sample_image_id":"4285800","sample_image_width":"800","sample_image_height":"600","power_score":"844400","cph":"364.00","tagline":"Created For You All! Fantasies into Reality! Visit us Virtually","percentile":"6","languages":"en,es,fr","country_code":"co","model_id":"1105821","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"Y","fetish_image_id":"3864992","service":"girls","is_group":"0","is_multiuser":"1","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1105821.jpg","num_perf":"1","display":"Mansion Girls","model_name":"Mansion_Girls","model_seo_name":"mansion-girls","power_score_xvc":"844400","power_score_xvt":"844400","phone":{"id":"67679","model_id":"1105821","primary_ext":"345098","username":"MODEL_1105821","incoming_tel_num":"************","country_code":"CO","call_rate_id":"15","date_created":"2021-05-27","last_updated":"2021-07-19 13:33:00","status":"1","verified_phone":"0","cpm_cost":"60 Credits Per Minute"},"geo_powerscore":632808,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/285\/4285800\/4285800"},{"room_status_char":"O","room_status":"In Open","topic":"(h)25-51-111 BEST WAY TO MAKE ME WET! TIPFLOOD TO START CUMSHOW(h)","category_id":"73","category_name":"Big Boobs","category_id_2":"75","category_name_2":"College Girls","category_id_3":"129","category_name_3":"Anal","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"37","num_supplemental":"69","pa_type":"pa","server_public_name":"chat001.vs3.com","server_private_name":"chat001.lan.vsmedia.net","video_host":"video-gpu007-tss-de.vs3.com","video_ingest":"video-gpu007-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"44821","is_high_quality":"1","average_rating":"5","eye_color":"blue","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"XPWN","broadcaster_id":"50002","ref_broadcaster_id":"0","age":"21","location":"Candy Land ","sample_image_id":"4407613","sample_image_width":"4032","sample_image_height":"3024","power_score":"843500","cph":"340.00","tagline":"#blonde #college #18 #anal #squirt #bigtits #bigass #lush #dildo #toy","percentile":"6","languages":"en","country_code":"o1","model_id":"1288250","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1288250.jpg","num_perf":"1","display":"Dina Banny","model_name":"DINA_BANNY","model_seo_name":"dina-banny","power_score_xvc":"841200","power_score_xvt":"841200","geo_powerscore":586638,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/407\/4407613\/4407613"},{"room_status_char":"O","room_status":"In Open","topic":"(c) Jerk it at Work Contest (c)   remaining to goal (s) Who will be my hero to achieve my goal? (h) Add me to favorite like (h) My dream tip 30k (s)","category_id":"9","category_name":"Latina","category_id_2":"90","category_name_2":"Squirters","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"46","num_supplemental":"55","pa_type":"pa","server_public_name":"chat005.vs3.com","server_private_name":"chat005.lan.vsmedia.net","video_host":"video-gpu004-dp-bog.vs3.com","video_ingest":"video-gpu004-dp-bog.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"46293","is_high_quality":"1","average_rating":"5","eye_color":"black","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"","is_test_account":"N","studio":"TQXB","broadcaster_id":"54679","ref_broadcaster_id":"0","age":"26","location":"South America","sample_image_id":"4280660","sample_image_width":"2919","sample_image_height":"2189","power_score":"837300","cph":"811.00","tagline":"a touch of glamor and sensuality","percentile":"7","languages":"en,es","country_code":"co","model_id":"1183736","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1183736.jpg","num_perf":"1","display":"Linda Hylton","model_name":"LINDA_HYLTON","model_seo_name":"linda-hylton","power_score_xvc":"842200","power_score_xvt":"842200","phone":{"id":"75462","model_id":"1183736","primary_ext":"775977","username":"MODEL_1183736","incoming_tel_num":"************","country_code":"CO","call_rate_id":"17","date_created":"2023-09-11","last_updated":"2023-09-11 21:57:38","status":"1","verified_phone":"0","cpm_cost":"70 Credits Per Minute"},"geo_powerscore":573827,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/280\/4280660\/4280660"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"1","category_name":"Lesbian","category_id_2":"291","category_name_2":"Foot Fetish","category_id_3":"90","category_name_3":"Squirters","login_type_id":"42","login_type_title":"Combo 60cpm\/40cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"19","num_supplemental":"105","pa_type":"pa","server_public_name":"chat012.vs3.com","server_private_name":"chat012.lan.vsmedia.net","video_host":"video-gpu005-tss-ny.vs3.com","video_ingest":"video-gpu005-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"38527","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"MSHB","broadcaster_id":"54679","ref_broadcaster_id":"0","age":"21","location":"South America","sample_image_id":"4488569","sample_image_width":"3777","sample_image_height":"2832","power_score":"831100","cph":"954.00","tagline":"Welcome to the world of pleasure, come and break your limits with us","percentile":"7","languages":"en,es","country_code":"co","model_id":"1331554","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1331554.jpg","num_perf":"2","display":"Ema & Alegra","model_name":"EMA_AND_ALEGRA","model_seo_name":"ema-and-alegra","power_score_xvc":"831700","power_score_xvt":"831700","geo_powerscore":555685,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/488\/4488569\/4488569"},{"room_status_char":"O","room_status":"In Open","topic":"hello (h)(f)(h)","category_id":"393","category_name":"Glamour","category_id_2":"26","category_name_2":"Redhead","category_id_3":"129","category_name_3":"Anal","login_type_id":"13","login_type_title":"Multi-User 10cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"10","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"7","num_supplemental":"124","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu016-mojo-mia.vs3.com","video_ingest":"video-gpu016-mojo-mia.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"38727","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UKJV","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"22","location":"Medellin","sample_image_id":"4471019","sample_image_width":"4762","sample_image_height":"3572","power_score":"828675","cph":"247.00","tagline":"I know the reason that someone smiled today.","percentile":"7","languages":"en,ru,es,fr,it","country_code":"co","model_id":"1162651","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1162651.jpg","num_perf":"1","display":"Anamaria Benitez","model_name":"ANAMARIA_BENITEZ","model_seo_name":"anamaria-benitez","power_score_xvc":"828875","power_score_xvt":"828875","phone":{"id":"71258","model_id":"1162651","primary_ext":"489613","username":"MODEL_1162651","incoming_tel_num":"************","country_code":"CO","call_rate_id":"7","date_created":"2022-05-04","last_updated":"2022-05-04 10:42:07","status":"1","verified_phone":"1","cpm_cost":"30 Credits Per Minute"},"geo_powerscore":1046777,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/471\/4471019\/4471019"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"393","category_name":"Glamour","category_id_2":"24","category_name_2":"Blonde","category_id_3":"373","category_name_3":"European Girls","login_type_id":"42","login_type_title":"Combo 60cpm\/40cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"8","num_supplemental":"123","pa_type":"pa","server_public_name":"chat008.vs3.com","server_private_name":"chat008.lan.vsmedia.net","video_host":"video-gpu001-dp-otp.vs3.com","video_ingest":"video-gpu001-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"1800","browser_port":"34021","is_high_quality":"1","average_rating":"4.6","eye_color":"blue","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"Rave","is_test_account":"N","studio":"WJJP","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"33","location":"Heaven","sample_image_id":"4128410","sample_image_width":"1600","sample_image_height":"1200","power_score":"824000","cph":"437.00","tagline":"Royal beauty seeks loyal subjects for real pleasure! (k)(k)(k)","percentile":"7","languages":"en","country_code":"o1","model_id":"782357","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/782357.jpg","num_perf":"1","display":"Vanessza","model_name":"VANESSZA","model_seo_name":"vanessza","power_score_xvc":"823400","power_score_xvt":"823400","geo_powerscore":1365109,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/128\/4128410\/4128410"},{"room_status_char":"O","room_status":"In Open","topic":"shall we play?","category_id":"25","category_name":"Brunette","category_id_2":"411","category_name_2":"BDSM","category_id_3":"75","category_name_3":"College Girls","login_type_id":"83","login_type_title":"Group Chat","login_group_id":"14","login_group_title":"Group Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"10","num_supplemental":"112","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu001-dp-otp.vs3.com","video_ingest":"video-gpu001-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"43535","is_high_quality":"1","average_rating":"4.6","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"VTQU","broadcaster_id":"50002","ref_broadcaster_id":"0","age":"21","location":"","sample_image_id":"4410118","sample_image_width":"696","sample_image_height":"522","power_score":"791350","cph":"135.00","tagline":"Hello everyone!","percentile":"10","languages":"en","country_code":"o1","model_id":"1124592","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1124592.jpg","num_perf":"1","display":"Sadie Creig","model_name":"SADIE_CREIG","model_seo_name":"sadie-creig","power_score_xvc":"794150","power_score_xvt":"794150","geo_powerscore":610110,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/410\/4410118\/4410118"},{"room_status_char":"O","room_status":"In Open","topic":"2000 BOOST = BOOOBIES flash\u2665\ufe0f     25cr - ultrahard\u2665\ufe0f  111cr My FAV pattern\u2665\ufe0f 250+floood great for orgasms\u2665\ufe0f","category_id":"75","category_name":"College Girls","category_id_2":"185","category_name_2":"Girls Next Door","category_id_3":"373","category_name_3":"European Girls","login_type_id":"103","login_type_title":"Standard 10cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"10","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"9","num_supplemental":"111","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu007-tss-de.vs3.com","video_ingest":"video-gpu007-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"35093","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"SMYV","broadcaster_id":"50002","ref_broadcaster_id":"0","age":"21","location":"Estonia","sample_image_id":"4445456","sample_image_width":"960","sample_image_height":"720","power_score":"822250","cph":"189.00","tagline":"Hey guys! Sweet and dangerous girl here is waiting just for you!","percentile":"7","languages":"en","country_code":"ee","model_id":"1098490","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"Y","fetish_image_id":"3854861","service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1098490.jpg","num_perf":"1","display":"Lexa More","model_name":"LEXA_MORE","model_seo_name":"lexa-more","power_score_xvc":"822250","power_score_xvt":"822250","geo_powerscore":619810,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/445\/4445456\/4445456"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"24","category_name":"Blonde","category_id_2":"102","category_name_2":"Bisexual","category_id_3":"373","category_name_3":"European Girls","login_type_id":"42","login_type_title":"Combo 60cpm\/40cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"14","num_supplemental":"133","pa_type":"pa","server_public_name":"chat006.vs3.com","server_private_name":"chat006.lan.vsmedia.net","video_host":"video-gpu003-dp-otp.vs3.com","video_ingest":"video-gpu003-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"38013","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UEAM","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"20","location":"Romania","sample_image_id":"4487808","sample_image_width":"6229","sample_image_height":"4672","power_score":"819950","cph":"423.00","tagline":"You may fall in love with me. Be careful !","percentile":"8","languages":"en,es","country_code":"ro","model_id":"1324594","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1324594.jpg","num_perf":"1","display":"Alma Aniston","model_name":"ALMA_ANISTON","model_seo_name":"alma-aniston","power_score_xvc":"819950","power_score_xvt":"819950","geo_powerscore":583934,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/487\/4487808\/4487808"},{"room_status_char":"O","room_status":"In Open","topic":"(rainbow) Hello, welcome to my room, I am here to let your imagination fly, enjoy the pleasures of life, making me part of your life is one of it. I hope meeting me is great. come here.(sweating)","category_id":"9","category_name":"Latina","category_id_2":"73","category_name_2":"Big Boobs","category_id_3":"93","category_name_3":"Big Butts","login_type_id":"1","login_type_title":"Standard 60cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"10","num_supplemental":"118","pa_type":"pa","server_public_name":"chat012.vs3.com","server_private_name":"chat012.lan.vsmedia.net","video_host":"video-gpu008-tss-ny.vs3.com","video_ingest":"video-gpu008-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"38501","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"","is_test_account":"N","studio":"FZRO","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"25","location":"Medellin","sample_image_id":"4414001","sample_image_width":"4000","sample_image_height":"3000","power_score":"809425","cph":"731.00","tagline":"Do not stay with the superficial, discover that there is beyond!!","percentile":"8","languages":"en,es","country_code":"o1","model_id":"1281462","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1281462.jpg","num_perf":"1","display":"Demy Rose","model_name":"DEMY_ROSE","model_seo_name":"demy-rose","power_score_xvc":"809525","power_score_xvt":"809525","phone":{"id":"75788","model_id":"1281462","primary_ext":"785571","username":"MODEL_1281462","incoming_tel_num":"************","country_code":"CO","call_rate_id":"19","date_created":"2023-10-24","last_updated":"2023-10-24 20:18:25","status":"1","verified_phone":"1","cpm_cost":"80 Credits Per Minute"},"geo_powerscore":614280,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/414\/4414001\/4414001"},{"room_status_char":"O","room_status":"In Open","topic":"(h)Treat me right and i will reward you(h)SUPREME GOAL-10k credits in a single tip(foam)(foam)Gets  10 minutes of Free private\/weekly-for one year!(foam)(foam)","category_id":"137","category_name":"Domination","category_id_2":"93","category_name_2":"Big Butts","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"47","num_supplemental":"59","pa_type":"pa","server_public_name":"chat001.vs3.com","server_private_name":"chat001.lan.vsmedia.net","video_host":"video-gpu004-dp-otp.vs3.com","video_ingest":"video-gpu004-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"37181","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"LQZV","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"37","location":"Eden","sample_image_id":"3910200","sample_image_width":"4266","sample_image_height":"3200","power_score":"802725","cph":"432.00","tagline":"new here.watch my moves and u will fall down hahhaha","percentile":"9","languages":"en","country_code":"ro","model_id":"946169","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/946169.jpg","num_perf":"1","display":"Eden Rae","model_name":"EDEN_RAE","model_seo_name":"eden-rae","power_score_xvc":"801825","power_score_xvt":"801825","phone":{"id":"55847","model_id":"946169","primary_ext":"627112","username":"MODEL_946169","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"3","date_created":"2019-03-23","last_updated":"2019-08-01 07:04:38","status":"0","verified_phone":"0","cpm_cost":"10 Credits Per Minute"},"geo_powerscore":625699,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"003\/910\/3910200\/3910200"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"75","category_name":"College Girls","category_id_2":"25","category_name_2":"Brunette","category_id_3":"9","category_name_3":"Latina","login_type_id":"29","login_type_title":"Multi-User 50cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"50","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"7","num_supplemental":"122","pa_type":"pa","server_public_name":"chat005.vs3.com","server_private_name":"chat005.lan.vsmedia.net","video_host":"video-gpu006-tss-ny.vs3.com","video_ingest":"video-gpu006-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"1800","browser_port":"43683","is_high_quality":"1","average_rating":"0","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"KBRC","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"19","location":"","sample_image_id":"4486439","sample_image_width":"3584","sample_image_height":"2688","power_score":"800000","cph":"103.00","tagline":"","percentile":"9","languages":"en","country_code":"co","model_id":"1335241","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1335241.jpg","num_perf":"1","display":"Sophie Bellucci","model_name":"SOPHIE_BELLUCCI","model_seo_name":"sophie-bellucci","power_score_xvc":"800000","power_score_xvt":"800000","geo_powerscore":1385883,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/486\/4486439\/4486439"},{"room_status_char":"O","room_status":"In Open","topic":"Guys, I'm only 1150cr away from my goal tonight, can you help me? any tips count(H)(letstip)","category_id":"93","category_name":"Big Butts","category_id_2":"393","category_name_2":"Glamour","category_id_3":"129","category_name_3":"Anal","login_type_id":"161","login_type_title":"Standard 20cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"20","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"6","num_supplemental":"135","pa_type":"pa","server_public_name":"chat005.vs3.com","server_private_name":"chat005.lan.vsmedia.net","video_host":"video-gpu005-tss-ny.vs3.com","video_ingest":"video-gpu005-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"33893","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"SYMD","broadcaster_id":"50004","ref_broadcaster_id":"0","age":"29","location":"Colombia","sample_image_id":"4457867","sample_image_width":"768","sample_image_height":"576","power_score":"799800","cph":"313.00","tagline":"I want to dawn on top of you, because by your side it would be very far \u2764\ufe0f","percentile":"9","languages":"en,es","country_code":"co","model_id":"1048256","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1048256.jpg","num_perf":"1","display":"Alissa Pitt","model_name":"ALISSA_PITT","model_seo_name":"alissa-pitt","power_score_xvc":"800300","power_score_xvt":"800300","phone":{"id":"63711","model_id":"1048256","primary_ext":"628217","username":"MODEL_1048256","incoming_tel_num":"************","country_code":"CO","call_rate_id":"5","date_created":"2020-08-24","last_updated":"2023-05-11 22:03:39","status":"1","verified_phone":"1","cpm_cost":"20 Credits Per Minute"},"geo_powerscore":637975,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/457\/4457867\/4457867"},{"room_status_char":"O","room_status":"In Open","topic":"Let's make it a perfect day !#Toys On !#play with me #sexy vibes (K)(K)(K)(K)","category_id":"373","category_name":"European Girls","category_id_2":"24","category_name_2":"Blonde","category_id_3":"185","category_name_3":"Girls Next Door","login_type_id":"45","login_type_title":"Combo 75cpm\/50cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"75","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"13","num_supplemental":"122","pa_type":"pa","server_public_name":"chat006.vs3.com","server_private_name":"chat006.lan.vsmedia.net","video_host":"video-gpu001-dp-de.vs3.com","video_ingest":"video-gpu001-dp-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"48119","is_high_quality":"1","average_rating":"4.9","eye_color":"blue","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"GHOJ","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"33","location":"","sample_image_id":"4449999","sample_image_width":"2343","sample_image_height":"1757","power_score":"799200","cph":"281.00","tagline":"Sandy blonde, with blue eyes, skinny in places, fat in others.","percentile":"10","languages":"en","country_code":"o1","model_id":"1203394","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1203394.jpg","num_perf":"1","display":"Emma Stark","model_name":"EMMA_STARK","model_seo_name":"emma-stark","power_score_xvc":"788225","power_score_xvt":"788225","geo_powerscore":1486667,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/449\/4449999\/4449999"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"25","category_name":"Brunette","category_id_2":"147","category_name_2":"Double Penetration","category_id_3":"199","category_name_3":"Chubby","login_type_id":"103","login_type_title":"Standard 10cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"10","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"6","num_supplemental":"99","pa_type":"pa","server_public_name":"chat001.vs3.com","server_private_name":"chat001.lan.vsmedia.net","video_host":"video-gpu007-tss-de.vs3.com","video_ingest":"video-gpu007-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"34363","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"RLPC","broadcaster_id":"629910","ref_broadcaster_id":"0","age":"36","location":"Poland","sample_image_id":"4163751","sample_image_width":"1035","sample_image_height":"776","power_score":"796150","cph":"145.00","tagline":"I wanna be your  best experiene in cyber world!","percentile":"9","languages":"en","country_code":"pl","model_id":"1141833","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1141833.jpg","num_perf":"1","display":"Claudia Sage","model_name":"CLAUDIA_SAGE","model_seo_name":"claudia-sage","power_score_xvc":"789750","power_score_xvt":"789750","geo_powerscore":564264,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/163\/4163751\/4163751"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"393","category_name":"Glamour","category_id_2":"73","category_name_2":"Big Boobs","category_id_3":"9","category_name_3":"Latina","login_type_id":"41","login_type_title":"Combo 90cpm\/60cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"90","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"15","num_supplemental":"117","pa_type":"pa","server_public_name":"chat006.vs3.com","server_private_name":"chat006.lan.vsmedia.net","video_host":"video-gpu006-dp-bog.vs3.com","video_ingest":"video-gpu006-dp-bog.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"33463","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"XEKN","broadcaster_id":"732971","ref_broadcaster_id":"0","age":"24","location":"medellin","sample_image_id":"4245746","sample_image_width":"4817","sample_image_height":"3613","power_score":"795825","cph":"674.00","tagline":"There's a little bit of devil in her  angel eyes","percentile":"9","languages":"en,es","country_code":"co","model_id":"1157259","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1157259.jpg","num_perf":"1","display":"Gia Cavanna","model_name":"GIA_CAVANNA","model_seo_name":"gia-cavanna","power_score_xvc":"794625","power_score_xvt":"794625","phone":{"id":"70267","model_id":"1157259","primary_ext":"257139","username":"MODEL_1157259","incoming_tel_num":"************","country_code":"CO","call_rate_id":"15","date_created":"2022-01-22","last_updated":"2022-01-22 22:04:39","status":"1","verified_phone":"1","cpm_cost":"60 Credits Per Minute"},"geo_powerscore":1367687,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/245\/4245746\/4245746"},{"room_status_char":"O","room_status":"In Open","topic":"Shall we play with my new toy? Today's goal is 1.9|5k credits! Add to your favorites!","category_id":"90","category_name":"Squirters","category_id_2":"311","category_name_2":"Small Tits","category_id_3":"345","category_name_3":"Roleplay","login_type_id":"167","login_type_title":"Combo 45cpm\/30cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"45","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"8","num_supplemental":"131","pa_type":"pa","server_public_name":"chat006.vs3.com","server_private_name":"chat006.lan.vsmedia.net","video_host":"video-gpu004-tss-de.vs3.com","video_ingest":"video-gpu004-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"47661","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"KOMC","broadcaster_id":"425335","ref_broadcaster_id":"0","age":"21","location":"Tallin","sample_image_id":"4489294","sample_image_width":"1319","sample_image_height":"989","power_score":"793925","cph":"595.00","tagline":"Party show Sexy Free Model Sugar Daddy","percentile":"9","languages":"en","country_code":"ee","model_id":"1129795","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1129795.jpg","num_perf":"1","display":"Lee Amy","model_name":"LEE_AMY","model_seo_name":"lee-amy","power_score_xvc":"799725","power_score_xvt":"799725","geo_powerscore":552396,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/489\/4489294\/4489294"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"393","category_name":"Glamour","category_id_2":"8","category_name_2":"Fetish","category_id_3":"90","category_name_3":"Squirters","login_type_id":"23","login_type_title":"Multi-User 20cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"20","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"8","num_supplemental":"128","pa_type":"pa","server_public_name":"chat010.vs3.com","server_private_name":"chat010.lan.vsmedia.net","video_host":"video-gpu005-tss-dfw.vs3.com","video_ingest":"video-gpu005-tss-dfw.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"39787","is_high_quality":"1","average_rating":"0","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"ZMIC","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"21","location":"medellin","sample_image_id":"4466705","sample_image_width":"910","sample_image_height":"682","power_score":"793100","cph":"85.00","tagline":"welcome to my room","percentile":"10","languages":"en,es","country_code":"co","model_id":"1248043","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1248043.jpg","num_perf":"1","display":"Cataleya D","model_name":"CATALEYA_D","model_seo_name":"cataleya-d","power_score_xvc":"339500","power_score_xvt":"339500","geo_powerscore":633995,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/466\/4466705\/4466705"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"8","category_name":"Fetish","category_id_2":"291","category_name_2":"Foot Fetish","category_id_3":"407","category_name_3":"Alternative","login_type_id":"42","login_type_title":"Combo 60cpm\/40cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"13","num_supplemental":"87","pa_type":"pa","server_public_name":"chat001.vs3.com","server_private_name":"chat001.lan.vsmedia.net","video_host":"video-gpu001-tss-de.vs3.com","video_ingest":"video-gpu001-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"44681","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"GHOJ","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"34","location":"Romania","sample_image_id":"4484165","sample_image_width":"1143","sample_image_height":"857","power_score":"605125","cph":"457.00","tagline":"An avalanche of emotions in the form of a woman","percentile":"30","languages":"en","country_code":"o1","model_id":"1333833","is_feature":"0","is_scheduled":"0","is_new":"14","is_fetish":"Y","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1333833.jpg","num_perf":"1","display":"Sheni Queen","model_name":"SHENI_QUEEN","model_seo_name":"sheni-queen","power_score_xvc":"606125","power_score_xvt":"606125","geo_powerscore":1350634,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/484\/4484165\/4484165"},{"room_status_char":"O","room_status":"In Open","topic":"I'm here... don't leave me waiting too long,,,(K)(K)","category_id":"9","category_name":"Latina","category_id_2":"393","category_name_2":"Glamour","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"41","login_type_title":"Combo 90cpm\/60cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"90","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"15","num_supplemental":"142","pa_type":"pa","server_public_name":"chat002.vs3.com","server_private_name":"chat002.lan.vsmedia.net","video_host":"video-gpu005-dp-bog.vs3.com","video_ingest":"video-gpu005-dp-bog.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"35761","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"TBXS","broadcaster_id":"54679","ref_broadcaster_id":"0","age":"31","location":"south america","sample_image_id":"4125548","sample_image_width":"3834","sample_image_height":"2876","power_score":"789600","cph":"1554.00","tagline":"Has an angel ever insisted you to sin? come and check","percentile":"10","languages":"en,es,fr,it","country_code":"co","model_id":"1007667","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1007667.jpg","num_perf":"1","display":"Valery Monnroy","model_name":"VALERY_MONNROY","model_seo_name":"valery-monnroy","power_score_xvc":"788225","power_score_xvt":"788225","phone":{"id":"59930","model_id":"1007667","primary_ext":"313862","username":"MODEL_1007667","incoming_tel_num":"************","country_code":"CO","call_rate_id":"13","date_created":"2019-12-03","last_updated":"2021-07-19 21:44:02","status":"1","verified_phone":"1","cpm_cost":"50 Credits Per Minute"},"geo_powerscore":626066,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/125\/4125548\/4125548"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"9","category_name":"Latina","category_id_2":"24","category_name_2":"Blonde","category_id_3":"75","category_name_3":"College Girls","login_type_id":"103","login_type_title":"Standard 10cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"10","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"12","num_supplemental":"101","pa_type":"pa","server_public_name":"chat002.vs3.com","server_private_name":"chat002.lan.vsmedia.net","video_host":"video-gpu001-tss-ny.vs3.com","video_ingest":"video-gpu001-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"39529","is_high_quality":"1","average_rating":"0","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"ABZAQ","broadcaster_id":"60077","ref_broadcaster_id":"0","age":"18","location":"Medell\u00edn","sample_image_id":"4489654","sample_image_width":"5333","sample_image_height":"4000","power_score":"625425","cph":"188.00","tagline":"Wake up your senses with me. Immerse yourself in a world of eroticism and seduction.","percentile":"27","languages":"en,es","country_code":"co","model_id":"1333289","is_feature":"0","is_scheduled":"0","is_new":"12","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1333289.jpg","num_perf":"1","display":"Samanta Salazar","model_name":"SAMANTA_SALAZAR","model_seo_name":"samanta-salazar","power_score_xvc":"630225","power_score_xvt":"630225","geo_powerscore":512115,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/489\/4489654\/4489654"},{"room_status_char":"O","room_status":"In Open","topic":"You deserve the best . That's why I'm here ;) ! #lushON :P","category_id":"137","category_name":"Domination","category_id_2":"24","category_name_2":"Blonde","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"19","login_type_title":"Standard 40cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"40","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"13","num_supplemental":"123","pa_type":"pa","server_public_name":"chat007.vs3.com","server_private_name":"chat007.lan.vsmedia.net","video_host":"video-gpu002-dp-de.vs3.com","video_ingest":"video-gpu002-dp-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"41327","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"SVMN","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"26","location":"Europe ","sample_image_id":"4486400","sample_image_width":"959","sample_image_height":"719","power_score":"788600","cph":"229.00","tagline":"I'd wish you the best. But I am the best .","percentile":"10","languages":"en","country_code":"o1","model_id":"1091783","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"Y","fetish_image_id":"4486400","service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1091783.jpg","num_perf":"1","display":"Crystal Chanel","model_name":"Crystal_Chanel","model_seo_name":"crystal-chanel","power_score_xvc":"788225","power_score_xvt":"788225","phone":{"id":"73971","model_id":"1091783","primary_ext":"201995","username":"MODEL_1091783","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"13","date_created":"2023-02-27","last_updated":"2023-06-02 03:33:54","status":"1","verified_phone":"1","cpm_cost":"50 Credits Per Minute"},"geo_powerscore":1502605,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/486\/4486400\/4486400"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"75","category_name":"College Girls","category_id_2":"73","category_name_2":"Big Boobs","category_id_3":"60","category_name_3":"Exotic","login_type_id":"15","login_type_title":"Premiere 70cpm","login_group_id":"6","login_group_title":"Premiere","default_cpm":"70","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"16","num_supplemental":"95","pa_type":"pa","server_public_name":"chat008.vs3.com","server_private_name":"chat008.lan.vsmedia.net","video_host":"video-gpu005-tss-ny.vs3.com","video_ingest":"video-gpu005-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"45853","is_high_quality":"1","average_rating":"4.8","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"","is_test_account":"N","studio":"XVCI","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"24","location":"Colombia ","sample_image_id":"4487753","sample_image_width":"2000","sample_image_height":"1500","power_score":"788600","cph":"460.00","tagline":"Tell me your deepest fantasies and I'll give you what you want.","percentile":"10","languages":"en,es","country_code":"o1","model_id":"1101358","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1101358.jpg","num_perf":"1","display":"Mya Blake","model_name":"MYA_BLAKE","model_seo_name":"mya-blake","power_score_xvc":"788225","power_score_xvt":"788225","phone":{"id":"68223","model_id":"1101358","primary_ext":"897196","username":"MODEL_1101358","incoming_tel_num":"************","country_code":"CO","call_rate_id":"15","date_created":"2021-07-13","last_updated":"2022-02-22 02:30:18","status":"1","verified_phone":"1","cpm_cost":"60 Credits Per Minute"},"geo_powerscore":1446593,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/487\/4487753\/4487753"},{"room_status_char":"O","room_status":"In Open","topic":"(h) Tonight, I'd like to ask you to support me in achieving my personal target of 6k credits (fire) (fire) Help me get so wet with my TOY ON (squirt)","category_id":"393","category_name":"Glamour","category_id_2":"60","category_name_2":"Exotic","category_id_3":"9","category_name_3":"Latina","login_type_id":"42","login_type_title":"Combo 60cpm\/40cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"7","num_supplemental":"116","pa_type":"pa","server_public_name":"chat008.vs3.com","server_private_name":"chat008.lan.vsmedia.net","video_host":"video-gpu005-dp-bog.vs3.com","video_ingest":"video-gpu005-dp-bog.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"1800","browser_port":"47167","is_high_quality":"1","average_rating":"4.3","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"KBRC","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"23","location":"Medellin ","sample_image_id":"4484549","sample_image_width":"5473","sample_image_height":"4105","power_score":"788600","cph":"111.00","tagline":"make u thinking about me in the naughties ways possibles is my hobby whats yours? try to make me wet","percentile":"10","languages":"en,es","country_code":"co","model_id":"1169134","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"Y","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1169134.jpg","num_perf":"1","display":"Kath Palmer","model_name":"Kath_Palmer","model_seo_name":"kath-palmer","power_score_xvc":"788225","power_score_xvt":"788225","geo_powerscore":1372510,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/484\/4484549\/4484549"},{"room_status_char":"O","room_status":"In Open","topic":"A vibe per day, keeps the doc away #LushOn","category_id":"73","category_name":"Big Boobs","category_id_2":"24","category_name_2":"Blonde","category_id_3":"393","category_name_3":"Glamour","login_type_id":"45","login_type_title":"Combo 75cpm\/50cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"75","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"21","num_supplemental":"102","pa_type":"pa","server_public_name":"chat002.vs3.com","server_private_name":"chat002.lan.vsmedia.net","video_host":"video-gpu002-dp-de.vs3.com","video_ingest":"video-gpu002-dp-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"36499","is_high_quality":"1","average_rating":"4.8","eye_color":"hazel","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"SVMN","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"35","location":"Europe","sample_image_id":"4472450","sample_image_width":"1774","sample_image_height":"1331","power_score":"788600","cph":"221.00","tagline":"Time to share good time together and enjoy each other step by step!","percentile":"10","languages":"en,fr,it","country_code":"o1","model_id":"1280691","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1280691.jpg","num_perf":"1","display":"Ava Reeves","model_name":"AVA_REEVES","model_seo_name":"ava-reeves","power_score_xvc":"788225","power_score_xvt":"788225","geo_powerscore":592788,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/472\/4472450\/4472450"},{"room_status_char":"O","room_status":"In Open","topic":"I HAVE A BIG SQUIRT TO YOU, I LOVE YOUR VIBRATION MY PUSSY WET (squirt)","category_id":"93","category_name":"Big Butts","category_id_2":"9","category_name_2":"Latina","category_id_3":"393","category_name_3":"Glamour","login_type_id":"42","login_type_title":"Combo 60cpm\/40cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"18","num_supplemental":"113","pa_type":"pa","server_public_name":"chat010.vs3.com","server_private_name":"chat010.lan.vsmedia.net","video_host":"video-gpu004-vsm-lax.vs3.com","video_ingest":"video-gpu004-vsm-lax.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"35393","is_high_quality":"1","average_rating":"4.7","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"8","interactive_name":"","is_test_account":"N","studio":"UZGO","broadcaster_id":"60077","ref_broadcaster_id":"0","age":"21","location":"Medellin","sample_image_id":"4467579","sample_image_width":"1344","sample_image_height":"1007","power_score":"788600","cph":"150.00","tagline":"I'm a fearless , sweet and funny woman, I would sing to make you have a good time","percentile":"10","languages":"en,es","country_code":"co","model_id":"1175253","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1175253.jpg","num_perf":"1","display":"Evelynn Luxx","model_name":"EVELYNN_LUXX","model_seo_name":"evelynn-luxx","power_score_xvc":"788225","power_score_xvt":"788225","phone":{"id":"70765","model_id":"1175253","primary_ext":"973266","username":"MODEL_1175253","incoming_tel_num":"************","country_code":"CO","call_rate_id":"5","date_created":"2022-03-13","last_updated":"2022-03-24 03:15:35","status":"1","verified_phone":"1","cpm_cost":"20 Credits Per Minute"},"geo_powerscore":597490,"is_big":"YES - 63","is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/467\/4467579\/4467579"},{"room_status_char":"O","room_status":"In Open","topic":"Lets have deep experiences & naughty times together\u2764 n do magic with our naked bodies\ud83d\ude08 10K GOAL! \ud83d\udc8b LUSH ON! Make my pussy drip\ud83d\udca6\ud83d\ude09 PVT OPEN 4 U\ud83d\udd25\ud83d\udc8b Fav me!\ud83d\udd25","category_id":"75","category_name":"College Girls","category_id_2":"407","category_name_2":"Alternative","category_id_3":"60","category_name_3":"Exotic","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"10","num_supplemental":"90","pa_type":"pa","server_public_name":"chat007.vs3.com","server_private_name":"chat007.lan.vsmedia.net","video_host":"video-gpu002-tss-ny.vs3.com","video_ingest":"video-gpu002-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"33347","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"XVCI","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"24","location":"Petiteland","sample_image_id":"4443255","sample_image_width":"2666","sample_image_height":"1999","power_score":"788600","cph":"260.00","tagline":"In a caml kind-hearted girl, always eager to please and serve with gentleness and respect","percentile":"10","languages":"en,es","country_code":"co","model_id":"1311021","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1311021.jpg","num_perf":"1","display":"Holly Reese","model_name":"HOLLY_REESE","model_seo_name":"holly-reese","power_score_xvc":"788225","power_score_xvt":"788225","geo_powerscore":1378265,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/443\/4443255\/4443255"},{"room_status_char":"O","room_status":"In Open","topic":"Hi! lets have fun! lush in xx","category_id":"75","category_name":"College Girls","category_id_2":"93","category_name_2":"Big Butts","category_id_3":"345","category_name_3":"Roleplay","login_type_id":"19","login_type_title":"Standard 40cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"40","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"1","num_supplemental":"120","pa_type":"pa","server_public_name":"chat001.vs3.com","server_private_name":"chat001.lan.vsmedia.net","video_host":"video-gpu008-tss-de.vs3.com","video_ingest":"video-gpu008-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"42955","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"DPFH","broadcaster_id":"50002","ref_broadcaster_id":"0","age":"20","location":"In your favorite dreams","sample_image_id":"4485763","sample_image_width":"1509","sample_image_height":"1132","power_score":"788600","cph":"126.00","tagline":"I will become your unique key to the door with pleasures!!","percentile":"10","languages":"en","country_code":"o1","model_id":"1262488","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1262488.jpg","num_perf":"1","display":"Violetta Wade","model_name":"VIOLETTA_WADE","model_seo_name":"violetta-wade","power_score_xvc":"788225","power_score_xvt":"788225","phone":{"id":"73643","model_id":"1262488","primary_ext":"345663","username":"MODEL_1262488","incoming_tel_num":"***********","country_code":"RU","call_rate_id":"3","date_created":"2023-01-20","last_updated":"2023-01-20 17:57:42","status":"1","verified_phone":"0","cpm_cost":"10 Credits Per Minute"},"geo_powerscore":1245106,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/485\/4485763\/4485763"},{"room_status_char":"O","room_status":"In Open","topic":"I want to have fun! and you?\ud83d\udd25Rate me 5\u2b50","category_id":"393","category_name":"Glamour","category_id_2":"75","category_name_2":"College Girls","category_id_3":"93","category_name_3":"Big Butts","login_type_id":"13","login_type_title":"Multi-User 10cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"10","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"2","num_supplemental":"111","pa_type":"pa","server_public_name":"chat008.vs3.com","server_private_name":"chat008.lan.vsmedia.net","video_host":"video-gpu004-dp-otp.vs3.com","video_ingest":"video-gpu004-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"46229","is_high_quality":"1","average_rating":"5","eye_color":"blue","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"DPFH","broadcaster_id":"50002","ref_broadcaster_id":"0","age":"24","location":"In your bed","sample_image_id":"4487203","sample_image_width":"5333","sample_image_height":"3999","power_score":"788600","cph":"320.00","tagline":"Life is like a zebra, but I want getting to know you to be the white stripe of our life","percentile":"10","languages":"en","country_code":"o1","model_id":"1304979","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1304979.jpg","num_perf":"1","display":"Lia Rubio","model_name":"LIA_RUBIO","model_seo_name":"lia-rubio","power_score_xvc":"788225","power_score_xvt":"788225","phone":{"id":"75174","model_id":"1304979","primary_ext":"396573","username":"MODEL_1304979","incoming_tel_num":"***********","country_code":"RU","call_rate_id":"5","date_created":"2023-08-03","last_updated":"2023-11-03 05:07:26","status":"1","verified_phone":"0","cpm_cost":"20 Credits Per Minute"},"geo_powerscore":112192,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/487\/4487203\/4487203"},{"room_status_char":"O","room_status":"In Open","topic":"Do you know how to make Samanta scream loudly from orgasm? (squirt) (squirt) (squirt) Use her pink toy vibrating in the pussy, it will make her very wet... #LUSHON ;) (squirt) (k)","category_id":"147","category_name":"Double Penetration","category_id_2":"75","category_name_2":"College Girls","category_id_3":"90","category_name_3":"Squirters","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"8","num_supplemental":"120","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu008-tss-de.vs3.com","video_ingest":"video-gpu008-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"35655","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"KOMC","broadcaster_id":"425335","ref_broadcaster_id":"0","age":"21","location":"Tallin","sample_image_id":"4488896","sample_image_width":"2266","sample_image_height":"1700","power_score":"788600","cph":"332.00","tagline":"A girl is like a flower - she needs to be looked after and fertilized, otherwise she will dry out.","percentile":"10","languages":"en","country_code":"ee","model_id":"1257467","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1257467.jpg","num_perf":"1","display":"Samanta Harris","model_name":"SAMANTA_HARRIS","model_seo_name":"samanta-harris","power_score_xvc":"788225","power_score_xvt":"788225","geo_powerscore":91049,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/488\/4488896\/4488896"},{"room_status_char":"O","room_status":"In Open","topic":"Come closer and kiss me on the right spot #LUSHON","category_id":"73","category_name":"Big Boobs","category_id_2":"24","category_name_2":"Blonde","category_id_3":"185","category_name_3":"Girls Next Door","login_type_id":"29","login_type_title":"Multi-User 50cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"50","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"15","num_supplemental":"120","pa_type":"pa","server_public_name":"chat007.vs3.com","server_private_name":"chat007.lan.vsmedia.net","video_host":"video-gpu008-tss-de.vs3.com","video_ingest":"video-gpu008-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"48019","is_high_quality":"1","average_rating":"4.2","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"SVMN","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"28","location":"","sample_image_id":"4389576","sample_image_width":"5973","sample_image_height":"4479","power_score":"788600","cph":"165.00","tagline":"I'm an open book that's always developing and evolving with every relationship I build!","percentile":"10","languages":"en","country_code":"o1","model_id":"1280692","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1280692.jpg","num_perf":"1","display":"Kylie Benton","model_name":"KYLIE_BENTON","model_seo_name":"kylie-benton","power_score_xvc":"788225","power_score_xvt":"788225","geo_powerscore":597024,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/389\/4389576\/4389576"},{"room_status_char":"O","room_status":"In Open","topic":"hello you(h)","category_id":"93","category_name":"Big Butts","category_id_2":"75","category_name_2":"College Girls","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"1","login_type_title":"Standard 60cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"13","num_supplemental":"117","pa_type":"pa","server_public_name":"chat005.vs3.com","server_private_name":"chat005.lan.vsmedia.net","video_host":"video-gpu007-mojo-mia.vs3.com","video_ingest":"video-gpu007-mojo-mia.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"35657","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"KBRT","broadcaster_id":"60077","ref_broadcaster_id":"0","age":"26","location":"","sample_image_id":"4489664","sample_image_width":"1536","sample_image_height":"1152","power_score":"788600","cph":"491.00","tagline":"One person can make all the difference","percentile":"10","languages":"en","country_code":"co","model_id":"1191417","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1191417.jpg","num_perf":"1","display":"Naomi Hudson","model_name":"NAOMI_HUDSON","model_seo_name":"naomi-hudson","power_score_xvc":"788225","power_score_xvt":"788225","geo_powerscore":1347695,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/489\/4489664\/4489664"},{"room_status_char":"O","room_status":"In Open","topic":"The time is today \ud83d\ude08\ud83d\udc45Start playing with my dildos\ud83c\udf46\ud83d\udca6Send me 20 credits and I'll give you a great sloppy blowjob\ud83d\ude08Choose the dildo\ud83d\udc45Follow me on Ig\ud83c\udf87","category_id":"75","category_name":"College Girls","category_id_2":"96","category_name_2":"Tattoos","category_id_3":"147","category_name_3":"Double Penetration","login_type_id":"13","login_type_title":"Multi-User 10cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"10","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"4","num_supplemental":"88","pa_type":"pa","server_public_name":"chat009.vs3.com","server_private_name":"chat009.lan.vsmedia.net","video_host":"video-gpu006-tss-ny.vs3.com","video_ingest":"video-gpu006-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"33691","is_high_quality":"1","average_rating":"5","eye_color":"hazel","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"YYZV","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"29","location":"colombia","sample_image_id":"4337534","sample_image_width":"2652","sample_image_height":"1989","power_score":"788600","cph":"106.00","tagline":"i am not only an angel face, i can to be dangerous, do u want to burn with me?","percentile":"11","languages":"en,de,ru,es,pl,cs,fr,it,nl","country_code":"co","model_id":"1253753","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1253753.jpg","num_perf":"1","display":"Victoria Becker","model_name":"VICTORIA_BECKER","model_seo_name":"victoria-becker","power_score_xvc":"788225","power_score_xvt":"788225","phone":{"id":"74260","model_id":"1253753","primary_ext":"584735","username":"MODEL_1253753","incoming_tel_num":"**********","country_code":"CO","call_rate_id":"7","date_created":"2023-03-30","last_updated":"2023-11-15 08:59:23","status":"1","verified_phone":"0","cpm_cost":"30 Credits Per Minute"},"geo_powerscore":623675,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/337\/4337534\/4337534"},{"room_status_char":"O","room_status":"In Open","topic":"Start your day with a red-haired beauty and luck will smile on you;) Don't forget to add me to your favorites(H)","category_id":"26","category_name":"Redhead","category_id_2":"147","category_name_2":"Double Penetration","category_id_3":"8","category_name_3":"Fetish","login_type_id":"165","login_type_title":"Combo 40cpm\/20cpm","login_group_id":"10","login_group_title":"Combo","default_cpm":"40","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"3","num_supplemental":"91","pa_type":"pa","server_public_name":"chat012.vs3.com","server_private_name":"chat012.lan.vsmedia.net","video_host":"video-gpu004-dp-otp.vs3.com","video_ingest":"video-gpu004-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"39537","is_high_quality":"1","average_rating":"5","eye_color":"green","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"KOMC","broadcaster_id":"425335","ref_broadcaster_id":"0","age":"21","location":"Tallin","sample_image_id":"4348590","sample_image_width":"1348","sample_image_height":"1011","power_score":"788600","cph":"204.00","tagline":"Did you know that blowjobs make you lose weight, let's check?=D","percentile":"11","languages":"en","country_code":"ee","model_id":"1253119","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1253119.jpg","num_perf":"1","display":"Wandy Hill","model_name":"WANDY_HILL","model_seo_name":"wandy-hill","power_score_xvc":"788225","power_score_xvt":"788225","geo_powerscore":561615,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/348\/4348590\/4348590"},{"room_status_char":"O","room_status":"In Open","topic":"I'm so excited,","category_id":"8","category_name":"Fetish","category_id_2":"24","category_name_2":"Blonde","category_id_3":"73","category_name_3":"Big Boobs","login_type_id":"13","login_type_title":"Multi-User 10cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"10","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"6","num_supplemental":"0","pa_type":"pa","server_public_name":"chat002.vs3.com","server_private_name":"chat002.lan.vsmedia.net","video_host":"video-gpu008-tss-dfw.vs3.com","video_ingest":"video-gpu008-tss-dfw.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"43843","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"EPN","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"23","location":"SAN JUAN ","sample_image_id":"4372650","sample_image_width":"800","sample_image_height":"600","power_score":"654600","cph":"192.00","tagline":"With a clean conscience and dirty desires.","percentile":"23","languages":"en,de,ru,es,fr,it","country_code":"pr","model_id":"1278840","is_feature":"0","is_scheduled":"0","is_new":"8","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1278840.jpg","num_perf":"1","display":"Bella Lovens","model_name":"BELLA_LOVENS","model_seo_name":"bella-lovens","power_score_xvc":"655600","power_score_xvt":"655600","geo_powerscore":592792,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/372\/4372650\/4372650"},{"room_status_char":"O","room_status":"In Open","topic":"the wtter, the better!","category_id":"25","category_name":"Brunette","category_id_2":"73","category_name_2":"Big Boobs","category_id_3":"373","category_name_3":"European Girls","login_type_id":"29","login_type_title":"Multi-User 50cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"50","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"11","num_supplemental":"87","pa_type":"pa","server_public_name":"chat005.vs3.com","server_private_name":"chat005.lan.vsmedia.net","video_host":"video-gpu002-dp-prg.vs3.com","video_ingest":"video-gpu002-dp-prg.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"37023","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"SVMN","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"34","location":"","sample_image_id":"4386672","sample_image_width":"5973","sample_image_height":"4480","power_score":"788600","cph":"125.00","tagline":"I might look innocent but wait until my devil horns comes out!","percentile":"11","languages":"en","country_code":"o1","model_id":"1257191","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1257191.jpg","num_perf":"1","display":"Amelie Dale","model_name":"AMELIE_DALE","model_seo_name":"amelie-dale","power_score_xvc":"788225","power_score_xvt":"788225","phone":{"id":"74787","model_id":"1257191","primary_ext":"298298","username":"MODEL_1257191","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"13","date_created":"2023-06-09","last_updated":"2023-06-09 05:56:53","status":"1","verified_phone":"1","cpm_cost":"50 Credits Per Minute"},"geo_powerscore":1245567,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/386\/4386672\/4386672"},{"room_status_char":"O","room_status":"In Open","topic":"welcome to my room.. enjoy my vib.. Goal today 3.000 CR-- DREAM TIP 5.000 CR.. for each 500 CR u speend i gif u 5 min free in pvt","category_id":"185","category_name":"Girls Next Door","category_id_2":"60","category_name_2":"Exotic","category_id_3":"24","category_name_3":"Blonde","login_type_id":"19","login_type_title":"Standard 40cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"40","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"9","num_supplemental":"122","pa_type":"pa","server_public_name":"chat005.vs3.com","server_private_name":"chat005.lan.vsmedia.net","video_host":"video-gpu002-tss-ny.vs3.com","video_ingest":"video-gpu002-tss-ny.vs3.com","video_width":"640","video_aspect_ratio":"16:9","video_bitrate_set":"600","browser_port":"35417","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"KBRT","broadcaster_id":"60077","ref_broadcaster_id":"0","age":"23","location":"South America","sample_image_id":"4344413","sample_image_width":"1137","sample_image_height":"853","power_score":"788600","cph":"157.00","tagline":"Im someone elegant, nice and naugthy. I like to enjoy the moment, meet and feel the vibe","percentile":"10","languages":"en,es","country_code":"co","model_id":"1215620","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"Y","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1215620.jpg","num_perf":"1","display":"Stefany Daniels","model_name":"STEFANY_DANIELS","model_seo_name":"stefany-daniels","power_score_xvc":"788225","power_score_xvt":"788225","phone":{"id":"74361","model_id":"1215620","primary_ext":"489091","username":"MODEL_1215620","incoming_tel_num":"************","country_code":"CO","call_rate_id":"3","date_created":"2023-04-12","last_updated":"2023-08-23 10:53:40","status":"0","verified_phone":"0","cpm_cost":"10 Credits Per Minute"},"geo_powerscore":554313,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/344\/4344413\/4344413"},{"room_status_char":"O","room_status":"In Open","topic":"Curly hair, sexy attitude, long sexy legs ... i think you know where this is going! Let me be your fantasy today!","category_id":"185","category_name":"Girls Next Door","category_id_2":"129","category_name_2":"Anal","category_id_3":"25","category_name_3":"Brunette","login_type_id":"4","login_type_title":"Multi-User 60cpm","login_group_id":"4","login_group_title":"Multi-User","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"9","num_supplemental":"114","pa_type":"pa","server_public_name":"chat005.vs3.com","server_private_name":"chat005.lan.vsmedia.net","video_host":"video-gpu002-tss-de.vs3.com","video_ingest":"video-gpu002-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"46647","is_high_quality":"1","average_rating":"5","eye_color":"blue","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UEBD","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"23","location":"Romania","sample_image_id":"4471181","sample_image_width":"800","sample_image_height":"600","power_score":"782475","cph":"338.00","tagline":"Good sense of humour and a dirty mind !","percentile":"11","languages":"en","country_code":"o1","model_id":"1319334","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"1","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1319334.jpg","num_perf":"1","display":"Anya Lobb","model_name":"ANYA_LOBB","model_seo_name":"anya-lobb","power_score_xvc":"783775","power_score_xvt":"783775","geo_powerscore":1570973,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/471\/4471181\/4471181"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"90","category_name":"Squirters","category_id_2":"189","category_name_2":"Hairy Pussy","category_id_3":"291","category_name_3":"Foot Fetish","login_type_id":"103","login_type_title":"Standard 10cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"10","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"8","num_supplemental":"95","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu001-tss-ny.vs3.com","video_ingest":"video-gpu001-tss-ny.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"45523","is_high_quality":"1","average_rating":"5","eye_color":"black","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UKJV","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"19","location":"Medellin","sample_image_id":"4488915","sample_image_width":"4873","sample_image_height":"3654","power_score":"781800","cph":"231.00","tagline":"Leaving a mark is making your absence more noticeable than your presence.","percentile":"11","languages":"en,es","country_code":"co","model_id":"1321768","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1321768.jpg","num_perf":"1","display":"Abby Taylors","model_name":"ABBY_TAYLORS","model_seo_name":"abby-taylors","power_score_xvc":"782000","power_score_xvt":"782000","geo_powerscore":632052,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/488\/4488915\/4488915"},{"room_status_char":"O","room_status":"In Open","topic":"","category_id":"373","category_name":"European Girls","category_id_2":"93","category_name_2":"Big Butts","category_id_3":"311","category_name_3":"Small Tits","login_type_id":"1","login_type_title":"Standard 60cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"10","num_supplemental":"92","pa_type":"pa","server_public_name":"chat008.vs3.com","server_private_name":"chat008.lan.vsmedia.net","video_host":"video-gpu005-tss-de.vs3.com","video_ingest":"video-gpu005-tss-de.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"37971","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"1","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"RERS","broadcaster_id":"625343","ref_broadcaster_id":"0","age":"29","location":"Europe","sample_image_id":"4459130","sample_image_width":"2306","sample_image_height":"1729","power_score":"778800","cph":"1371.00","tagline":"Do what makes you happy","percentile":"11","languages":"en","country_code":"o1","model_id":"1000460","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1000460.jpg","num_perf":"1","display":"Adalinda","model_name":"ADALINDA","model_seo_name":"adalinda","power_score_xvc":"779300","power_score_xvt":"779300","geo_powerscore":217970,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/459\/4459130\/4459130"},{"room_status_char":"O","room_status":"In Open","topic":"Its My Birthday Week Show Some Love and Spoil Me.... Last Day Of the Auto Win Contest 10,900 Till 1st Tier.","category_id":"90","category_name":"Squirters","category_id_2":"96","category_name_2":"Tattoos","category_id_3":"341","category_name_3":"American Girls","login_type_id":"49","login_type_title":"Premiere 140cpm","login_group_id":"6","login_group_title":"Premiere","default_cpm":"140","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"6","num_supplemental":"123","pa_type":"pa","server_public_name":"chat005.vs3.com","server_private_name":"chat005.lan.vsmedia.net","video_host":"video-gpu003-mojo-det.vs3.com","video_ingest":"video-gpu003-mojo-det.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"1600","browser_port":"36871","is_high_quality":"1","average_rating":"4.9","eye_color":"blue","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"JMID","broadcaster_id":"388389","ref_broadcaster_id":"0","age":"46","location":"Mid West ","sample_image_id":"3464796","sample_image_width":"3465","sample_image_height":"2599","power_score":"774725","cph":"1280.00","tagline":"A touch of wicked, A pinch of risqu\u00e9, Good girl gone bad, my poison is your remedy!","percentile":"11","languages":"en","country_code":"us","model_id":"761191","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"Y","fetish_image_id":"3757131","service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/761191.jpg","num_perf":"1","display":"Lizzy Storm","model_name":"LIZZY_STORM","model_seo_name":"lizzy-storm","power_score_xvc":"777125","power_score_xvt":"777125","phone":{"id":"40139","model_id":"761191","primary_ext":"446471","username":"MODEL_761191","incoming_tel_num":"**********","country_code":"US","call_rate_id":"17","date_created":"2017-05-18","last_updated":"2023-06-18 11:12:41","status":"1","verified_phone":"1","cpm_cost":"70 Credits Per Minute"},"geo_powerscore":596485,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"003\/464\/3464796\/3464796"},{"room_status_char":"O","room_status":"In Open","topic":"Hello everyone, welcome  ...kisses","category_id":"9","category_name":"Latina","category_id_2":"90","category_name_2":"Squirters","category_id_3":"92","category_name_3":"Strippers","login_type_id":"1","login_type_title":"Standard 60cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"60","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"14","num_supplemental":"95","pa_type":"pa","server_public_name":"chat012.vs3.com","server_private_name":"chat012.lan.vsmedia.net","video_host":"video-gpu016-mojo-mia.vs3.com","video_ingest":"video-gpu016-mojo-mia.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"35843","is_high_quality":"1","average_rating":"4.8","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"KYYL","broadcaster_id":"50004","ref_broadcaster_id":"0","age":"29","location":"Colombia","sample_image_id":"4084049","sample_image_width":"800","sample_image_height":"600","power_score":"766175","cph":"795.00","tagline":"Just  enjoy every moment and be always happy","percentile":"12","languages":"en,es","country_code":"co","model_id":"804935","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/804935.jpg","num_perf":"1","display":"Bridgette Malloy","model_name":"BRIDGETTE_MALLOY","model_seo_name":"bridgette-malloy","power_score_xvc":"765875","power_score_xvt":"765875","phone":{"id":"50391","model_id":"804935","primary_ext":"679495","username":"MODEL_804935","incoming_tel_num":"************","country_code":"CO","call_rate_id":"7","date_created":"2018-08-03","last_updated":"2021-08-26 00:01:18","status":"1","verified_phone":"1","cpm_cost":"30 Credits Per Minute"},"geo_powerscore":601200,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/084\/4084049\/4084049"},{"room_status_char":"O","room_status":"In Open","topic":"add me to your favorites so we can meet again (H)(K)","category_id":"89","category_name":"Lactating","category_id_2":"90","category_name_2":"Squirters","category_id_3":"147","category_name_3":"Double Penetration","login_type_id":"103","login_type_title":"Standard 10cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"10","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"15","num_supplemental":"89","pa_type":"pa","server_public_name":"chat007.vs3.com","server_private_name":"chat007.lan.vsmedia.net","video_host":"video-gpu006-tss-dfw.vs3.com","video_ingest":"video-gpu006-tss-dfw.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"47369","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"32","interactive_name":"","is_test_account":"N","studio":"UKJV","broadcaster_id":"50316","ref_broadcaster_id":"0","age":"23","location":"medellin","sample_image_id":"4484455","sample_image_width":"4921","sample_image_height":"3690","power_score":"765425","cph":"305.00","tagline":"He who has magic does not need tricks.","percentile":"12","languages":"en,de,ru,es,pl,cs,fr,it,jp,nl,tl","country_code":"us","model_id":"1103625","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/1103625.jpg","num_perf":"1","display":"Dahlia Nathasha","model_name":"DAHLIA_NATHASHA","model_seo_name":"dahlia-nathasha","power_score_xvc":"767125","power_score_xvt":"767125","phone":{"id":"68841","model_id":"1103625","primary_ext":"333610","username":"MODEL_1103625","incoming_tel_num":"**********","country_code":"CO","call_rate_id":"3","date_created":"2021-09-07","last_updated":"2023-03-08 17:56:34","status":"1","verified_phone":"0","cpm_cost":"10 Credits Per Minute"},"geo_powerscore":608385,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/484\/4484455\/4484455"},{"room_status_char":"O","room_status":"In Open","topic":"I`m putting you on my to do list (k) make it worth it (h)#toyon","category_id":"393","category_name":"Glamour","category_id_2":"373","category_name_2":"European Girls","category_id_3":"24","category_name_3":"Blonde","login_type_id":"5","login_type_title":"Party Chat","login_group_id":"5","login_group_title":"Party Chat","default_cpm":"0","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"4","num_supplemental":"98","pa_type":"pa","server_public_name":"chat003.vs3.com","server_private_name":"chat003.lan.vsmedia.net","video_host":"video-gpu001-dp-otp.vs3.com","video_ingest":"video-gpu001-dp-otp.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"32781","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"GHOJ","broadcaster_id":"50001","ref_broadcaster_id":"0","age":"32","location":"","sample_image_id":"4321256","sample_image_width":"1875","sample_image_height":"1407","power_score":"764125","cph":"510.00","tagline":"Let your dreams be your wings  and let me guide you to the unexplored parts of mine!","percentile":"12","languages":"en","country_code":"ro","model_id":"754321","is_feature":"0","is_scheduled":"0","is_new":"0","is_fetish":"N","fetish_image_id":0,"service":"girls","is_group":"0","is_multiuser":"0","image":"https:\/\/cdn5.vscdns.com\/images\/models\/90x90\/754321.jpg","num_perf":"1","display":"Jaqueline Merlot","model_name":"JAQUELINE_MERLOT","model_seo_name":"jaqueline-merlot","power_score_xvc":"763225","power_score_xvt":"763225","phone":{"id":"46617","model_id":"754321","primary_ext":"274184","username":"MODEL_754321","incoming_tel_num":"***********","country_code":"RO","call_rate_id":"13","date_created":"2018-03-14","last_updated":"2021-11-20 09:09:50","status":"1","verified_phone":"0","cpm_cost":"50 Credits Per Minute"},"geo_powerscore":1317787,"is_favorite":0,"is_notify_subscribed":0,"sample_long_id":"004\/321\/4321256\/4321256"},{"room_status_char":"O","room_status":"In Open","topic":"Hiya! Add me to your favourites and make me cum in pvt!Feet(50),FlashTits(100),AssInDoggy(150) #lovense #asian #bigtits #squirt #cumshow","category_id":"5","category_name":"Asian","category_id_2":"73","category_name_2":"Big Boobs","category_id_3":"393","category_name_3":"Glamour","login_type_id":"21","login_type_title":"Standard 50cpm","login_group_id":"1","login_group_title":"Standard","default_cpm":"50","multi_user_private":"N","wdm":"0","bulk_allowed":"Y","num_users":"8","num_supplemental":"98","pa_type":"pa","server_public_name":"chat004.vs3.com","server_private_name":"chat004.lan.vsmedia.net","video_host":"video-gpu002-dp-prg.vs3.com","video_ingest":"video-gpu002-dp-prg.vs3.com","video_width":"1280","video_aspect_ratio":"16:9","video_bitrate_set":"2200","browser_port":"36963","is_high_quality":"1","average_rating":"5","eye_color":"brown","is_xvc":"0","is_fotm":"0","is_model_of_week":"0","interactive":"0","interactive_name":"","is_test_account":"N","studio":"DLO","broadcaster_id":"50002","ref_broadcaster_id":"0","age":"27","location":"","sample_image_id":"4255847","sample_image_width":"1437","sample_image_height":"1077","power_score":"764100","cph":"227.00","tagline":"BEST Moan,Big Boobs,Ass,Voice,Petite Body,minds,from romantic to naughty ones ! Be  sweet with me !","percentile":"12","languages":"en","country_code":"