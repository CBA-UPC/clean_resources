"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4462],{77738:function(e,t,n){ction a(e){if(void 0===e)return NaN;if(null===e)return 0;if("boolean"==typeof e)return e?1:0;if("number"==typeof e)return e;if("symbol"==typeof e||"bigint"==typeof e)throw TypeError("Cannot convert symbol/bigint to number");return Number(e)}function o(e){return!isFinite(e)||Math.abs(e)>8.64*1e15?NaN:function(e){var t=a(e);if(isNaN(t)||c(t,-0))return 0;if(isFinite(t))return t;var n=Math.floor(Math.abs(t));return(t<0&&(n=-n),c(n,-0))?0:n}(e)}turn D(Math.floor(e/36e5),24)}function O(e){return D(Math.floor(e/6e4),60)}unction A(e,t,n){if("function"!=typeof e)return!1;if(null==n?void 0:n.boundTargetFunction)return t instanceof(null==n?void 0:n.boundTargetFunction);if("object"!=typeof t)return!1;var r=e.prototype;if("object"!=typeof r)throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");return Object.prototype.isPrototypeOf.call(r,t)}nction B(e,t,n,r){if(void 0!==e){if(isNaN(e=Number(e))||e<t||e>n)throw RangeError("".concat(e," is outside of range [").concat(t,", ").concat(n,"]"));return Math.floor(e)}return r}unction x(e,t,n,r,u){if("object"!=typeof e)throw TypeError("Options must be an object");var a=e[t];if(void 0!==a){if("boolean"!==n&&"string"!==n)throw TypeError("invalid type");if("boolean"===n&&(a=Boolean(a)),"string"===n&&(a=i(a)),void 0!==r&&!r.filter(.length)throw RangeError("".concat(a," is not within ").concat(r.join(", ")));return a}return u}function M(e){if(void 0===e)return Object.create(null);if("object"==typeof e)return e;throw TypeError("Options must be an object")}n.r(t),n.d(t,{ArrayCreate:function(){return s},CanonicalizeLocaleList:function(){return r},CanonicalizeTimeZoneName:function(){return u},CoerceOptionsToObject:function(){return T},ComputeExponent:function(){return eu},ComputeExponentForMagnitude:function(){return ee},CurrencyDigits:function(){return ei},DateFromTime:function(){return C},Day:function(){return m},DayFromYear:function(){return d},DayWithinYear:function(){return h},DaysInYear:function(){return b},FormatNumericToParts:function(){return eg},FormatNumericToString:function(){return er},GetNumberOption:function(){return I},GetOption:function(){return x},GetOptionsObject:function(){return M},HasOwnProperty:function(){return f},HourFromTime:function(){return S},InLeapYear:function(){return F},InitializeNumberFormat:function(){return eb},IsSanctionedSimpleUnitIdentifier:function(){return U},IsValidTimeZoneName:function(){return G},IsWellFormedCurrencyCode:function(){return W},IsWellFormedUnitIdentifier:function(){return Y},MinFromTime:function(){return O},MonthFromTime:function(){return E},OrdinaryHasInstance:function(){return A},PartitionNumberPattern:function(){return em},PartitionPattern:function(){return eh},RangePatternType:function(){return j},SANCTIONED_UNITS:function(){return k},SIMPLE_UNITS:function(){return R},SameValue:function(){return c},SecFromTime:function(){return w},SetNumberFormatDigitOptions:function(){return ev},SetNumberFormatUnitOptions:function(){return ey},SupportedLocales:function(){return eF},TimeClip:function(){return o},TimeFromYear:function(){return y},ToNumber:function(){return a},ToObject:function(){return l},ToRawFixed:function(){return en},ToRawPrecision:function(){return et},ToString:function(){return i},Type:function(){return p},WeekDay:function(){return g},YearFromTime:function(){return v},_formatToParts:function(){return ef},defineProperty:function(){return Q},getInternalSlot:function(){return V},getMagnitude:function(){return $},getMultiInternalSlots:function(){return q},invariant:function(){return X},isLiteralPart:function(){return J},isMissingLocaleDataError:function(){return eC},msFromTime:function(){return N},removeUnitNamespace:function(){return _},setInternalSlot:function(){return H},setMultiInternalSlots:);var j,L,P,k=["angle-degree","area-acre","area-hectare","concentr-percent","digital-bit","digital-byte","digital-gigabit","digital-gigabyte","digital-kilobit","digital-kilobyte","digital-megabit","digital-megabyte","digital-petabyte","digital-terabit","digital-terabyte","duration-day","duration-hour","duration-millisecond","duration-minute","duration-month","duration-second","duration-week","duration-year","length-centimeter","length-foot","length-inch","length-kilometer","length-meter","length-mile-scandinavian","length-mile","length-millimeter","length-yard","mass-gram","mass-kilogram","mass-ounce","mass-pound","mass-stone","temperature-celsius","temperature-fahrenheit","volume-fluid-ounce","volume-gallon","volume-liter","volume-milliliter"];ar R=k.map(_);r z=/[^A-Z]/;unction Y(e){if(U(e=e.replace(/([A-Z])/g,))return!0;var t=e.split("-per-");if(2!==t.length)return!1;var n=t[0],r=t[1];return!!(U(n)&&U(r))}ion q(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var u=e.get(t);if(!u)throw TypeError("".concat(t," InternalSlot has not been initialized"));return n.reduce(Object.create(null))}function J(e){return"literal"===e.type}ction et(e,t,n){var r,u,i,a;if(0===e)r=Z("0",n),u=0,i=0;else{var o=e.toString(),l=o.indexOf("e"),c=o.split("e"),s=c[0],f=c[1],p=s.replace(".","");if(l>=0&&p.length<=n)u=+f,r=p+Z("0",n-p.length),i=e;else{var D=(u=$(e))-n+1,m=Math.round(d(e,D));d(m,n-1)>=10&&(u+=1,m=Math.floor(m/10)),r=m.toString(),i=d(m,n-1-u)}}if(u>=n-1?(r+=Z("0",u-n+1),a=u+1):u>=0?(r="".concat(r.slice(0,u+1),".").concat(r.slice(u+1)),a=u+1):(r="0.".concat(Z("0",-u-1)).concat(r),a=1),r.indexOf(".")>=0&&n>t){for(var g=n-t;g>0&&"0"===r[r.length-1];)r=r.slice(0,-1),g--;"."===r[r.length-1]&&(r=r.slice(0,-1))}return{formattedString:r,roundedNumber:i,integerDigitsCount:a};function en(e,t,n){var r,u,i=Math.round(e*Math.pow(10,n));if(i<1e21)r=i.toString();else{var a=(r=i.toString()).split("e"),o=a[0],l=a[1];r=o.replace(".",""),r+=Z("0",Math.max(+l-r.length+1,0))}if(0!==n){var c=r.length;c<=n&&(r=Z("0",n+1-c)+r,c=n+1);var s=r.slice(0,c-n),f=r.slice(c-n);r="".concat(s,".").concat(f),u=s.length}else u=r.length;for(var p=n-t;p>0&&"0"===r[r.length-1];)r=r.slice(0,-1),p--;return"."===r[r.length-1]&&(r=r.slice(0,-1)),{formattedString:r,roundedNumber:i/Math.pow(10,n),integerDigitsCount:u}} ea={adlm:["\uD83A\uDD50","\uD83A\uDD51","\uD83A\uDD52","\uD83A\uDD53","\uD83A\uDD54","\uD83A\uDD55","\uD83A\uDD56","\uD83A\uDD57","\uD83A\uDD58","\uD83A\uDD59"],ahom:["\uD805\uDF30","\uD805\uDF31","\uD805\uDF32","\uD805\uDF33","\uD805\uDF34","\uD805\uDF35","\uD805\uDF36","\uD805\uDF37","\uD805\uDF38","\uD805\uDF39"],arab:["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],arabext:["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],bali:["᭐","᭑","᭒","᭓","᭔","᭕","᭖","᭗","᭘","᭙"],beng:["০","১","২","৩","৪","৫","৬","৭","৮","৯"],bhks:["\uD807\uDC50","\uD807\uDC51","\uD807\uDC52","\uD807\uDC53","\uD807\uDC54","\uD807\uDC55","\uD807\uDC56","\uD807\uDC57","\uD807\uDC58","\uD807\uDC59"],brah:["\uD804\uDC66","\uD804\uDC67","\uD804\uDC68","\uD804\uDC69","\uD804\uDC6A","\uD804\uDC6B","\uD804\uDC6C","\uD804\uDC6D","\uD804\uDC6E","\uD804\uDC6F"],cakm:["\uD804\uDD36","\uD804\uDD37","\uD804\uDD38","\uD804\uDD39","\uD804\uDD3A","\uD804\uDD3B","\uD804\uDD3C","\uD804\uDD3D","\uD804\uDD3E","\uD804\uDD3F"],cham:["꩐","꩑","꩒","꩓","꩔","꩕","꩖","꩗","꩘","꩙"],deva:["०","१","२","३","४","५","६","७","८","९"],diak:["\uD806\uDD50","\uD806\uDD51","\uD806\uDD52","\uD806\uDD53","\uD806\uDD54","\uD806\uDD55","\uD806\uDD56","\uD806\uDD57","\uD806\uDD58","\uD806\uDD59"],fullwide:["０","１","２","３","４","５","６","７","８","９"],gong:["\uD807\uDDA0","\uD807\uDDA1","\uD807\uDDA2","\uD807\uDDA3","\uD807\uDDA4","\uD807\uDDA5","\uD807\uDDA6","\uD807\uDDA7","\uD807\uDDA8","\uD807\uDDA9"],gonm:["\uD807\uDD50","\uD807\uDD51","\uD807\uDD52","\uD807\uDD53","\uD807\uDD54","\uD807\uDD55","\uD807\uDD56","\uD807\uDD57","\uD807\uDD58","\uD807\uDD59"],gujr:["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"],guru:["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"],hanidec:["〇","一","二","三","四","五","六","七","八","九"],hmng:["\uD81A\uDF50","\uD81A\uDF51","\uD81A\uDF52","\uD81A\uDF53","\uD81A\uDF54","\uD81A\uDF55","\uD81A\uDF56","\uD81A\uDF57","\uD81A\uDF58","\uD81A\uDF59"],hmnp:["\uD838\uDD40","\uD838\uDD41","\uD838\uDD42","\uD838\uDD43","\uD838\uDD44","\uD838\uDD45","\uD838\uDD46","\uD838\uDD47","\uD838\uDD48","\uD838\uDD49"],java:["꧐","꧑","꧒","꧓","꧔","꧕","꧖","꧗","꧘","꧙"],kali:["꤀","꤁","꤂","꤃","꤄","꤅","꤆","꤇","꤈","꤉"],khmr:["០","១","២","៣","៤","៥","៦","៧","៨","៩"],knda:["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯"],lana:["᪀","᪁","᪂","᪃","᪄","᪅","᪆","᪇","᪈","᪉"],lanatham:["᪐","᪑","᪒","᪓","᪔","᪕","᪖","᪗","᪘","᪙"],laoo:["໐","໑","໒","໓","໔","໕","໖","໗","໘","໙"],lepc:["᪐","᪑","᪒","᪓","᪔","᪕","᪖","᪗","᪘","᪙"],limb:["᥆","᥇","᥈","᥉","᥊","᥋","᥌","᥍","᥎","᥏"],mathbold:["\uD835\uDFCE","\uD835\uDFCF","\uD835\uDFD0","\uD835\uDFD1","\uD835\uDFD2","\uD835\uDFD3","\uD835\uDFD4","\uD835\uDFD5","\uD835\uDFD6","\uD835\uDFD7"],mathdbl:["\uD835\uDFD8","\uD835\uDFD9","\uD835\uDFDA","\uD835\uDFDB","\uD835\uDFDC","\uD835\uDFDD","\uD835\uDFDE","\uD835\uDFDF","\uD835\uDFE0","\uD835\uDFE1"],mathmono:["\uD835\uDFF6","\uD835\uDFF7","\uD835\uDFF8","\uD835\uDFF9","\uD835\uDFFA","\uD835\uDFFB","\uD835\uDFFC","\uD835\uDFFD","\uD835\uDFFE","\uD835\uDFFF"],mathsanb:["\uD835\uDFEC","\uD835\uDFED","\uD835\uDFEE","\uD835\uDFEF","\uD835\uDFF0","\uD835\uDFF1","\uD835\uDFF2","\uD835\uDFF3","\uD835\uDFF4","\uD835\uDFF5"],mathsans:["\uD835\uDFE2","\uD835\uDFE3","\uD835\uDFE4","\uD835\uDFE5","\uD835\uDFE6","\uD835\uDFE7","\uD835\uDFE8","\uD835\uDFE9","\uD835\uDFEA","\uD835\uDFEB"],mlym:["൦","൧","൨","൩","൪","൫","൬","൭","൮","൯"],modi:["\uD805\uDE50","\uD805\uDE51","\uD805\uDE52","\uD805\uDE53","\uD805\uDE54","\uD805\uDE55","\uD805\uDE56","\uD805\uDE57","\uD805\uDE58","\uD805\uDE59"],mong:["᠐","᠑","᠒","᠓","᠔","᠕","᠖","᠗","᠘","᠙"],mroo:["\uD81A\uDE60","\uD81A\uDE61","\uD81A\uDE62","\uD81A\uDE63","\uD81A\uDE64","\uD81A\uDE65","\uD81A\uDE66","\uD81A\uDE67","\uD81A\uDE68","\uD81A\uDE69"],mtei:["꯰","꯱","꯲","꯳","꯴","꯵","꯶","꯷","꯸","꯹"],mymr:["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"],mymrshan:["႐","႑","႒","႓","႔","႕","႖","႗","႘","႙"],mymrtlng:["꧰","꧱","꧲","꧳","꧴","꧵","꧶","꧷","꧸","꧹"],newa:["\uD805\uDC50","\uD805\uDC51","\uD805\uDC52","\uD805\uDC53","\uD805\uDC54","\uD805\uDC55","\uD805\uDC56","\uD805\uDC57","\uD805\uDC58","\uD805\uDC59"],nkoo:["߀","߁","߂","߃","߄","߅","߆","߇","߈","߉"],olck:["᱐","᱑","᱒","᱓","᱔","᱕","᱖","᱗","᱘","᱙"],orya:["୦","୧","୨","୩","୪","୫","୬","୭","୮","୯"],osma:["\uD801\uDCA0","\uD801\uDCA1","\uD801\uDCA2","\uD801\uDCA3","\uD801\uDCA4","\uD801\uDCA5","\uD801\uDCA6","\uD801\uDCA7","\uD801\uDCA8","\uD801\uDCA9"],rohg:["\uD803\uDD30","\uD803\uDD31","\uD803\uDD32","\uD803\uDD33","\uD803\uDD34","\uD803\uDD35","\uD803\uDD36","\uD803\uDD37","\uD803\uDD38","\uD803\uDD39"],saur:["꣐","꣑","꣒","꣓","꣔","꣕","꣖","꣗","꣘","꣙"],segment:["\uD83E\uDFF0","\uD83E\uDFF1","\uD83E\uDFF2","\uD83E\uDFF3","\uD83E\uDFF4","\uD83E\uDFF5","\uD83E\uDFF6","\uD83E\uDFF7","\uD83E\uDFF8","\uD83E\uDFF9"],shrd:["\uD804\uDDD0","\uD804\uDDD1","\uD804\uDDD2","\uD804\uDDD3","\uD804\uDDD4","\uD804\uDDD5","\uD804\uDDD6","\uD804\uDDD7","\uD804\uDDD8","\uD804\uDDD9"],sind:["\uD804\uDEF0","\uD804\uDEF1","\uD804\uDEF2","\uD804\uDEF3","\uD804\uDEF4","\uD804\uDEF5","\uD804\uDEF6","\uD804\uDEF7","\uD804\uDEF8","\uD804\uDEF9"],sinh:["෦","෧","෨","෩","෪","෫","෬","෭","෮","෯"],sora:["\uD804\uDCF0","\uD804\uDCF1","\uD804\uDCF2","\uD804\uDCF3","\uD804\uDCF4","\uD804\uDCF5","\uD804\uDCF6","\uD804\uDCF7","\uD804\uDCF8","\uD804\uDCF9"],sund:["᮰","᮱","᮲","᮳","᮴","᮵","᮶","᮷","᮸","᮹"],takr:["\uD805\uDEC0","\uD805\uDEC1","\uD805\uDEC2","\uD805\uDEC3","\uD805\uDEC4","\uD805\uDEC5","\uD805\uDEC6","\uD805\uDEC7","\uD805\uDEC8","\uD805\uDEC9"],talu:["᧐","᧑","᧒","᧓","᧔","᧕","᧖","᧗","᧘","᧙"],tamldec:["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯"],telu:["౦","౧","౨","౩","౪","౫","౬","౭","౮","౯"],thai:["๐","๑","๒","๓","๔","๕","๖","๗","๘","๙"],tibt:["༠","༡","༢","༣","༤","༥","༦","༧","༨","༩"],tirh:["\uD805\uDCD0","\uD805\uDCD1","\uD805\uDCD2","\uD805\uDCD3","\uD805\uDCD4","\uD805\uDCD5","\uD805\uDCD6","\uD805\uDCD7","\uD805\uDCD8","\uD805\uDCD9"],vaii:["ᘠ","ᘡ","ᘢ","ᘣ","ᘤ","ᘥ","ᘦ","ᘧ","ᘨ","ᘩ"],wara:["\uD806\uDCE0","\uD806\uDCE1","\uD806\uDCE2","\uD806\uDCE3","\uD806\uDCE4","\uD806\uDCE5","\uD806\uDCE6","\uD806\uDCE7","\uD806\uDCE8","\uD806\uDCE9"],wcho:["\uD838\uDEF0","\uD838\uDEF1","\uD838\uDEF2","\uD838\uDEF3","\uD838\uDEF4","\uD838\uDEF5","\uD838\uDEF6","\uD838\uDEF7","\uD838\uDEF8","\uD838\uDEF9"]},eo=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,el=RegExp("^".concat(eo.source)),ec=RegExp("".concat(eo.source,"$")),es=/[#0](?:[\.,][#0]+)*/g;function ef(e,t,n,r){var u,i,a=e.sign,o=e.exponent,l=e.magnitude,c=r.notation,s=r.style,f=r.numberingSystem,p=t.numbers.nu[0],D=null;if("compact"===c&&l&&(D=function(e,t,n,r,u,i,a){var o,l,c=e.roundedNumber,s=e.sign,f=String(Math.pow(10,e.magnitude)),p=n.numbers.nu[0];if("currency"===r&&"name"!==i){var D=n.numbers.currency,m=null===(o=(D[a]||D[p]).short)||void 0===o?void 0:o[f];if(!m)return null;l=eD(t,c,m)}else{var D=n.numbers.decimal,g=(D[a]||D[p])[u][f];if(!g)return null;l=eD(t,c,g)}return"0"===l?null:l=ep(l,s).replace(/([^\s;\-\+\d¤]+)/g,"{c:$1}").replace(/0+/,"0")}(e,n,t,s,r.compactDisplay,r.currencyDisplay,f)),"currency"===s&&"name"!==r.currencyDisplay){var m=t.currencies[r.currency];if(m)switch(r.currencyDisplay){case"code":u=r.currency;break;case"symbol":u=m.symbol;break;default:u=m.narrow}else u=r.currency}if(D)i=D;else if("decimal"===s||"unit"===s||"currency"===s&&"name"===r.currencyDisplay)i=ep((t.numbers.decimal[f]||t.numbers.decimal[p]).standard,a);else if("currency"===s){var g=t.numbers.currency[f]||t.numbers.currency[p];i=ep(g[r.currencySign],a)}else i=ep(t.numbers.percent[f]||t.numbers.percent[p],a);var d=es.exec(i)[0];if(i=i.replac"$1"),"currency"===s&&"name"!==r.currencyDisplay){var g=t.numbers.currency[f]||t.numbers.currency[p],y=g.currencySpacing.afterInsertBetween;y&&!ec.test(u)&&(i=i.replace("\xa4{0}","\xa4".concat(y,"{0}")));var v=g.currencySpacing.beforeInsertBetween;v&&!el.test(u)&&(i=i.replace("{0}\xa4","{0}".concat(v,"\xa4")))}for(var b=i.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g),h=[],F=t.numbers.symbols[f]||t.numbers.symbols[p],E=0;E<b.length;E++){var C=b[E];if(C)switch(C){case"{0}":h.push.apply(h,function(e,t,n,r,u,i,a){var o,l,c=[],s=t.formattedString,f=t.roundedNumber;if(isNaN(f))return[{type:"nan",value:s}];if(!isFinite(f))return[{type:"infinity",value:s}];var p=ea[u];p&&(s=s.replace(/\d/g,function(e){return p[+e]||e}));var D=s.indexOf(".");if(D>0?(o=s.slice(0,D),l=s.slice(D+1)):o=s,i&&("compact"!==n||f>=1e4)){var m=e.group,g=[],d=a.split(".")[0].split(","),y=3,v=3;d.length>1&&(y=d[d.length-1].length),d.length>2&&(v=d[d.length-2].length);var b=o.length-y;if(b>0){for(g.push(o.slice(b,b+y)),b-=v;b>0;b-=v)g.push(o.slice(b,b+v));g.push(o.slice(0,b+v))}else g.push(o);for(;g.length>0;){var h=g.pop();c.push({type:"integer",value:h}),g.length>0&&c.push({type:"group",value:m})}}else c.push({type:"integer",value:o});if(void 0!==l&&c.push({type:"decimal",value:e.decimal},{type:"fraction",value:l}),("scientific"===n||"engineering"===n)&&isFinite(f)){c.push({type:"exponentSeparator",value:e.exponential}),r<0&&(c.push({type:"exponentMinusSign",value:e.minusSign}),r=-r);var F=en(r,0,0);c.push({type:"exponentInteger",value:F.formattedString})}return c}(F,e,c,o,f,!D&&r.useGrouping,d));break;case"-":h.push({type:"minusSign",value:F.minusSign});break;case"+":h.push({type:"plusSign",value:F.plusSign});break;case"%":h.push({type:"percentSign",value:F.percentSign});break;case"\xa4":h.push({type:"currency",value:u});break;default:/^\{c:/.test(C)?h.push({type:"compact",value:C.substring(3,C.length-1)}):h.push({type:"literal",value:C})}}switch(s){case"currency":if("name"!==r.currencyDisplay)return h;var S=(t.numbers.currency[f]||t.numbers.currency[p]).unitPattern,O=void 0,w=t.currencies[r.currency];O=w?eD(n,e.roundedNumber*Math.pow(10,o),w.displayName):r.currency;for(var A=S.split(/(\{[01]\})/g),N=[],T=0;T<A.length;T++){var C=A[T];switch(C){case"{0}":N.push.apply(N,h);break;case"{1}":N.push({type:"currency",value:O});break;default:C&&N.push({type:"literal",value:C})}}return N;case"unit":var B=r.unit,I=r.unitDisplay,x=t.units.simple[B],S=void 0;if(x)S=eD(n,e.roundedNumber*Math.pow(10,o),t.units.simple[B][I]);else{var M=B.split("-per-"),j=M[0],L=M[1];x=t.units.simple[j];var P=eD(n,e eD(e,t,n){return n[e.select(t)]||n.other}function em(e,t,n){var r,u,i,a=n.getInternalSlots,o=a(e),l=o.pl,s=o.dataLocaleData,f=o.numberiplay=a,r.currencySign=o),"unit"===u&&(r.unit=l,r.unitDisplay=c)}function ev(e,t,n,r,u){var i=I(t,"minimumIntegerDigits",1,21,1),a=t.minimumFractionDigits,o=t.maximumFractionDigits,l=t.minimumSignificantDigits,c=t.maximumSignificantDigits;if(e.minimumIntegerDigits=i,void 0!==l||void 0!==c)e.roundingType="significantDigits",l=B(l,1,21,1),c=B(c,l,21,21),e.minimumSignificantDigits=l,e.maximumSignificantDigits=c;else if(void 0!==a||void 0!==o){e.roundingType="fractionDigits";var s=Math.max(a=B(a,0,20,n),r);o=B(o,a,20,s),e.minimumFractionDigits=a,e.maximumFractionDigits=o}else"compact"===u?e.roundingType="compactRounding":(e.roundingType="fractionDigits",e.minimumFractionDigits=n,e.maximumFractionDigits=r)}function eb(e,t,n,u){var i,a,o=u.getInternalSlots,l=u.localeData,c=u.availableLocales,s=u.numberingSystemNames,f=u.getDefaultLocale,p=u.currencyDigitsData,D=r(t),m=T(n),g=Object.create(null),d=x(m,"localeMatcher","string",["lookup","best fit"],"best fit");g.localeMatcher=d;var y=x(m,"numberingSystem","string",void 0,void 0);if(void 0!==y&&0>s.indexOf(y))throw RangeError("Invalid numberingSystems: ".concat(y));g.nu=y;var v=(0,ed.ResolveLocale)(c,isplay","strintDisplay=S);var O=x(m,"u","always","exceptZero"],"auto");return h.signDisplay=w,e}function eh(e){for(var t=[],n=e.indexOf("{"),r=0,u=0,i=e.length;n<e.length&&n>-1;)X((r=e.indexOf("}",n))>n,"Invalid pattern ".concat(e)),n>u&&t.push({type:"literal",value:e.substring(u,n)}),t.push({type:e.substring(n+1,r),value:void 0}),u=r+1,n=e.indexOf("{",u);return u<i&&t.push({type:"literal",value:e.substring(u,i)}),t}function eF(e,t,n){return void 0!==n&&x(n=l(n),"localeMatcher","string",["lookup","best fit"],"best fit"),(0,ed.LookupSupportedLocales)(e,t)}var eE=n(70655);function eC(e){return"MISSING_LOCALE_DATA"===e.type}L=Error,(0,eE.__extends)(function(){var e=null!==L&&L.apply(this,arguments)||this;return e.type="MISSING_LOCALE_DATA",e},L),(P=j||(j={})).startRange="startRange",P.shared="shared",P.endRange="endRange"},64354:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.GetOperands=void 0;var r=n(77738);t.GetOperands=funcailing:a}}},30468:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.InitializePluralRules=void 0;var r=n(77738),u=n(999cardinal","ordinal"],"cardinal"),(0,r.SetNumberFormatDigitOptions)(m,D,0,3,"standard");var d=(0,u.n){Object.defineProperty(t,"__esModule",{value:!0}),t.ResolvePlural=void 0;var r=n(77738),u=n(64354);t.ResolvePlural=function(e,t,n){var i=n.getInternalSlots,a=n.PluralRuleSelect,o=i(e);if((0,r.invariant)("Object"===(0,r.Type)(o),"pl has to be an object"),(0,r.invariant)("initializedPluralRules"in o,"pluralrules must be initialttedString;return a(l,c,t,(0,u.GetOperands)(s))}},86930:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=new WeakMap;t.default=function(e){var t=n.get(e);return t||(t=Object.create(null),n.set(e,t)),t}},64109:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.PluralRules=void 0;var r=n(70655),u=n(77738),i=n(30468),a=n(1737),o=(0,r.__importDefault)(n(86930));fu 0))throw TypeErrorxtensionKeys:e.relevaaultLocale:e.getDefauedOptions");var t=Object.create(null),n=(0,o.default)(this);return t.locale=n.locale,t.type=n.type,["minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"].forEach(function(e){var r=ategories=(0,r.__spreadArray)([],e.localeData[t.locale].categories[t.type],!0),t},e.prototype.select=function(e){l(this,"select");var t=(0,u.ToNumber)(e);return(0,a.ResolvePlural)(this,t,{getInternalSlots:o.default,PluralRuleSelect:c})},e.prototype.toString=function(){return"[object Intl.PluralRules]"},e.supportedLocalesOf=function(t,n){return(0,u.SupportedLocales)(e.availableLocales,(0,u.CanonicalizeLocaleList)(t),n)},e.__addLocaleData=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r=0;r<t.length;r++){var u=t[r],i=u.data,a=u.locale;e.localeData[a]=i,e.availableLocales.add(a),e.__defaultLocale||(e.__defaultLocale=a)}},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=new Set,e.__defaultLocale="",e.relevantExtensionKeys=[],e.polyfilled=!0,e}();t.PluralRules=s;try{"undefined"!=typeof Symbol&&Object.defineProperty(s.prototype,Symbol.toStringTag,{value:"Intl.PluralRules",writable:!1,enumerable:!1,configurable:!0});try{Object.defineProperty(s,"length",{value:0,writable:!1,enumerable:!1,configurable:!0})}catch(f){}Object.defineProperty(s.prototype.constructor,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(s.supportedLocalesOf,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch(p){}},74462:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(64109);(0,n(77208).shouldPolyfill)()&&Object.defineProperty(Intl,"PluralRules",{value:r.PluralRules,writable:!0,enumerable:!1,configurable:!0})}}]);