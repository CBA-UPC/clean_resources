/*! highlight.js v9.15.9 | BSD3 License | git.io/hljslicense */
!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"==typeof exports||exports.nodeType?t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],):e(exports)}(function(n){var d=[],o=Object.keys,h={},c={},t=/^(no-?highlight|plain|text)$/i,l=/\blang(?:uage)?-([\w-]+)\b/i,r=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,a={case_insensitive:"cI",lexemes:"l",contains:"c",keywords:"k",subLanguage:"sL",className:"cN",begin:"b",beginKeywords:"bK",end:"e",endsWithParent:"eW",illegal:"i",excludeBegin:"eB",excludeEnd:"eE",returnBegin:"rB",returnEnd:"rE",relevance:"r",variants:"v",IDENT_RE:"IR",UNDERSCORE_IDENT_RE:"UIR",NUMBER_RE:"NR",C_NUMBER_RE:"CNR",BINARY_NUMBER_RE:"BNR",RE_STARTERS_RE:"RSR",BACKSLASH_ESCAPE:"BE",APOS_STRING_MODE:"ASM",QUOTE_STRING_MODE:"QSM",PHRASAL_WORDS_MODE:"PWM",C_LINE_COMMENT_MODE:"CLCM",C_BLOCK_COMMENT_MODE:"CBCM",HASH_COMMENT_MODE:"HCM",NUMBER_MODE:"NM",C_NUMBER_MODE:"CNM",BINARY_NUMBER_MODE:"BNM",CSS_NUMBER_MODE:"CSSNM",REGEXP_MODE:"RM",TITLE_MODE:"TM",UNDERSCORE_TITLE_MODE:"UTM",COMMENT:"C",beginRe:"bR",endRe:"eR",illegalRe:"iR",lexemesRe:"lR",terminators:"t",terminator_end:"tE"},N="</span>",v={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};n E(s){unction t(r,e){if(!r.compiled){if(r.compiled=!0,r.k=r.k||r.bK,r.k){ar n={};"string"==typeof r.k?a("keyword",r.k):o(r.k).forEach(,r.k=n}r.lR=c(r.l||/\w+/,!0),e&&(r.bK&&(r.b="\\b("+r.bK.split(" ").join("|")+")\\b"),r.b||(r.b=/\B|\b/),r.bR=c(r.b),r.endSameAsBegin&&(r.e=r.b),r.e||r.eW||(r.e=/\B|\b/),r.e&&(r.eR=c(r.e)),r.tE=l(r.e)||"",r.eW&&e.tE&&(r.tE+=(r.e?"|":"")+e.tE)),r.i&&(r.iR=c(r.i)),null==r.r&&(r.r=1),r.c||(r.c=[]),r.c=Array.prototype.concat.apply([],r.c.map(),r.c.forEach(,r.starts&&t(r.starts,e);var i=r.c.map(.concat([r.tE,r.i]).map(l).filter(Boolean);r.t=i.length?c(function(e,t){for(var r=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,n="",i=0;i<e.length;i++){var s=a,c=l(e[i]);for(0<i&&(n+=t);0<c.length;){var o=r.exec(c);if(null==o){n+=c;break}n+=c.substring(0,o.index),c=c.substring(o.index+o[0].length),"\\"==o[0][0]&&o[1]?n+="\\"+String(Number(o[1])+s):(n+=o[0],"("==o[0]&&a++)}}return n}(i,"|"),!0):{exec:}}(s)}function k(e,t,i,r){unction s(){b+=null!=u.sL?):function(){var e,t,r,a,n,i,s;if(!u.k)return y(p);for(a="",t=0,u.lR.lastIndex=0,r=u.lR.exec(p);r;)a+=y(p.substring(t,r.index)),n=u,i=r,void 0,s=l.cI?i[0].toLowerCase():i[0],(e=n.k.hasOwnProperty(s)&&n.k[s])?(m+=e[1],a+=c(e[0],y(r[0]))):a+=y(r[0]),t=u.lR.lastIndex,r=u.lR.exec(p);return a+y(p.substr(t))}(),p=""}unction a(e,t){if(p+=e,null==t)return s(),0;var r=function(e,t){var r,a,n;for(r=0,a=t.c.length;r<a;r++)if(w(t.c[r].bR,e))return t.c[r].endSameAsBegin&&(t.c[r].eR=(n=t.c[r].bR.exec(e)[0],new RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),t.c[r]}(t,u);if(r)return r.skip?p+=t:(r.eB&&(p+=t),s(),r.rB||r.eB||(p=t)),o(r),r.rB?0:t.length;var a=u,t);if(a){var n=u;for(n.skip?p+=t:(n.rE||n.eE||(p+=t),s(),n.eE&&(p=t));u.cN&&(b+=N),u.skip||u.sL||(m+=u.r),(u=u.parent)!==a.parent;);return a.starts&&(a.endSameAsBegin&&(a.starts.eR=a.eR),o(a.starts)),n.rE?0:t.length}if(t,u))throw new Error('Illegal lexeme "'+t+'" for mode "'+(u.cN||"<unnamed>")+'"');return p+=t,t.length||1}var l=M(e);if(!l)throw new Error('Unknown language: "'+e+'"');E(l);var n,u=r||l,d={},b="";for(n=u;n!==l;n=n.parent)n.cN&&(b=c(n.cN,"",!0)+b);var p="",m=0;try{for(var f,g,_=0;u.t.lastIndex=_,f=u.t.exec(t);)g=a(t.substring(_,f.index),f[0]),_=f.index+g;for(a(t.substr(_)),n=u;n.parent;n=n.parent)n.cN&&(b+=N);return{r:m,value:b,language:e,top:u}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:y(t)};throw e}}nction s(e){var t,r,a,n,i,s=e);u(s)||(v.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,i=t.textContent,a=s?k(s,i,!0):x(i),(r=m(t)).length&&((n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=a.value,a.value=function(e,t,r){var a=0,n="",i=[];;e.length||t.length;){var u=s();if(n+=y(r.substring(a,u[0].offset)),a=u[0].offset,u===e){for(i.reverse().forEach(o);l(u.splice(0,1)[0]),(u=s())===e&&u.length&&u[0].offset===a;);i.reverse().forEach(c)}else"start"===u[0].event?i.push(u[0].node):i.pop(),l(u.splice(0,1)[0])}return n+y(r.substr(a))}(r,m(n),i)),a.value=f(a.value),e.innerHTML=a.value,e.className=e.className,s,a.language),e.result={language:a.language,re:a.r},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.r}))}urn n.highlight=k,n.highlightAuto=x,n.fixMarkup=f,n.highlightBlock=s,n.configure=n.initHighlighting=g,n.initHighlightingOnLoad=n.registerLanguage=function(t,e){var r=h[t]=e(n);i(r),r.aliases&&r.aliases.forEach(},n.listLanguages=n.getLanguage=M,n.autoDetection=_,n.inherit=p,n.IR=n.IDENT_RE="[a-zA-Z]\\w*",n.UIR=n.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",n.NR=n.NUMBER_RE="\\b\\d+(\\.\\d+)?",n.CNR=n.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",n.BNR=n.BINARY_NUMBER_RE="\\b(0b[01]+)",n.RSR=n.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",n.BE=n.BACKSLASH_ESCAPE={b:"\\\\[\\s\\S]",r:0},n.ASM=n.APOS_STRING_MODE={cN:"string",b:"'",e:"'",i:"\\n",c:[n.BE]},n.QSM=n.QUOTE_STRING_MODE={cN:"string",b:'"',e:'"',i:"\\n",c:[n.BE]},n.PWM=n.PHRASAL_WORDS_MODE={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},n.C=n.COMMENT=n.CLCM=n.C_LINE_COMMENT_MODE=n.C("//","$"),n.CBCM=n.C_BLOCK_COMMENT_MODE=n.C("/\\*","\\*/"),n.HCM=n.HASH_COMMENT_MODE=n.C("#","$"),n.NM=n.NUMBER_MODE={cN:"number",b:n.NR,r:0},n.CNM=n.C_NUMBER_MODE={cN:"number",b:n.CNR,r:0},n.BNM=n.BINARY_NUMBER_MODE={cN:"number",b:n.BNR,r:0},n.CSSNM=n.CSS_NUMBER_MODE={cN:"number",b:n.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},n.RM=n.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[n.BE,{b:/\[/,e:/\]/,r:0,c:[n.BE]}]},n.TM=n.TITLE_MODE={cN:"title",b:n.IR,r:0},n.UTM=n.UNDERSCORE_TITLE_MODE={cN:"title",b:n.UIR,r:0},n.METHOD_GUARD={b:"\\.\\s*"+n.UIR,r:0},n.registerLanguage("apache",,n.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]};return{aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,r,{cN:"",b:/\\"/},{cN:"string",b:/'/,e:/'/},t]}}),n.registerLanguage("coffeescript",,n.registerLanguage("cpp",function(e){var t={cN:"keyword",b:"\\b[a-z\\d_]*_t\\b"},r={cN:"string",v:[{b:'(u8?|U|L)?"',e:'"',i:"\\n",c:[e.BE]},{b:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/},{b:"'\\\\?.",e:"'",i:"."}]},a={cN:"number",v:[{b:"\\b(0b[01']+)"},{b:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{b:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],r:0},n={cN:"meta",b:/#\s*[a-z]+\b/,e:/$/,k:{"meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef include"},c:[{b:/\\\n/,r:0},e.inherit(r,{cN:"meta-string"}),{cN:"meta-string",b:/<[^\n>]*>/,e:/$/,i:"\\n"},e.CLCM,e.CBCM]},i=e.IR+"\\s*\\(",s={keyword:"int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",built_in:"std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",literal:"true false nullptr NULL"},c=[t,e.CLCM,e.CBCM,a,r];return{aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],k:s,i:"</",c:c.concat([n,{b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:s,c:["self",t]},{b:e.IR+"::",k:s},{v:[{b:/=/,e:/;/},{b:/\(/,e:/\)/},{bK:"new throw return else",e:/;/}],k:s,c:c.concat([{b:/\(/,e:/\)/,k:s,c:c.concat(["self"]),r:0}]),r:0},{cN:"function",b:"("+e.IR+"[\\*&\\s]+)+"+i,rB:!0,e:/[{;=]/,eE:!0,k:s,i:/[^\w\s\*&]/,c:[{b:i,rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:s,r:0,c:[e.CLCM,e.CBCM,r,a,t,{b:/\(/,e:/\)/,k:s,r:0,c:["self",e.CLCM,e.CBCM,r,a,t]}]},e.CLCM,e.CBCM,n]},{cN:"class",bK:"class struct",e:/[{;:]/,c:[{b:/</,e:/>/,c:["self"]},e.TM]}]),exports:{preprocessor:n,strings:r,k:s}}}),n.registerLanguage("cs",function(e){var t={keyword:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",literal:"null false true"},r={cN:"number",v:[{b:"\\b(0b[01']+)"},{b:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{b:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],r:0},a={cN:"string",b:'@"',e:'"',c:[{b:'""'}]},n=e.inherit(a,{i:/\n/}),i={cN:"subst",b:"{",e:"}",k:t},s=e.inherit(i,{i:/\n/}),c={cN:"string",b:/\$"/,e:'"',i:/\n/,c:[{b:"{{"},{b:"}}"},e.BE,s]},o={cN:"string",b:/\$@"/,e:'"',c:[{b:"{{"},{b:"}}"},{b:'""'},i]},l=e.inherit(o,{i:/\n/,c:[{b:"{{"},{b:"}}"},{b:'""'},s]});i.c=[o,c,a,e.ASM,e.QSM,r,e.CBCM],s.c=[l,c,n,e.ASM,e.QSM,r,e.inherit(e.CBCM,{i:/\n/})];var u={v:[o,c,a,e.ASM,e.QSM]},d=e.IR+"(<"+e.IR+"(\\s*,\\s*"+e.IR+")*>)?(\\[\\])?";return{aliases:["csharp","c#"],k:t,i:/::/,c:[e.C("///","$",{rB:!0,c:[{cN:"doctag",v:[{b:"///",r:0},{b:"\x3c!--|--\x3e"},{b:"</?",e:">"}]}]}),e.CLCM,e.CBCM,{cN:"meta",b:"#",e:"$",k:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},u,r,{bK:"class interface",e:/[{;=]/,i:/[^\s:,]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"namespace",e:/[{;=]/,i:/[^\s:]/,c:[e.inherit(e.TM,{b:"[a-zA-Z](\\.?\\w)*"}),e.CLCM,e.CBCM]},{cN:"meta",b:"^\\s*\\[",eB:!0,e:"\\]",eE:!0,c:[{cN:"meta-string",b:/"/,e:/"/}]},{bK:"new return throw await else",r:0},{cN:"function",b:"("+d+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/\s*[{;=]/,eE:!0,k:t,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,r:0,c:[u,r,e.CBCM]},e.CLCM,e.CBCM]}]}}),n.registerLanguage("css",,n.registerLanguage("diff",,n.registerLanguage("http",,n.registerLanguage("ini",function(e){var t={cN:"string",c:[e.BE],v:[{b:"'''",e:"'''",r:10},{b:'"""',e:'"""',r:10},{b:'"',e:'"'},{b:"'",e:"'"}]};return{aliases:["toml"],cI:!0,i:/\S/,c:[e.C(";","$"),e.HCM,{cN:"section",b:/^\s*\[+/,e:/\]+/},{b:/^[a-z0-9\[\]_\.-]+\s*=\s*/,e:"$",rB:!0,c:[{cN:"attr",b:/[a-z0-9\[\]_\.-]+/},{b:/=/,eW:!0,r:0,c:[e.C(";","$"),e.HCM,{cN:"literal",b:/\bon|off|true|false|yes|no\b/},{cN:"variable",v:[{b:/\$[\w\d"][\w\d_]*/},{b:/\$\{(.*?)}/}]},t,{cN:"number",b:/([\+\-]+)?[\d]+_[\d_]+/},e.NM]}]}]}}),n.registerLanguage("java",Za-z]+"}]}}),n.registerLanguage("javascript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",r={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:r,c:[]},i={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,i,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:r,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,i,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:s}]}]},{cN:"",b:/\s/,e:/\s*/,skip:!0},{b:/</,e:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,sL:"xml",c:[{b:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},{b:/<[A-Za-z0-9\\._:-]+/,e:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,skip:!0,c:[{b:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor get set",e:/\{/,eE:!0}],i:/#(?!!)/}}),n.registerLangt,i:"\\S"}}),n.registerLanguage\w]+/},i]}}),n.registerLanr:0},t]}]}}),n.registerLanguageeB:!0}]}]}}),n.registerLangu^\\s\\}]"}}),n.registerLanguage("UIR,r:0}]}}),n.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},a={b:"->{",e:"}"},n={v:[{b:/\$\d/},{b:/[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},{b:/[\$%@][^\s\w{]/,r:0}]},i=[e.BE,r,n],s=[n,e.HCM,e.C("^\\=\\w","\\=cut",{eW:!0}),a,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"function",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",eE:!0,r:5,c:[e.TM]},{b:"-\\w\\b",r:0},{b:"^__DATA__$",e:"^__END__$",sL:"mojolicious",c:[{b:"^@@.*",e:"$",cN:"comment"}]}];return r.c=s,{aliases:["pl","pm"],l:/[\w\.]+/,k:t,c:a.c=s}}),n.registerLan:"=>"},a,n]}}),n.registerLanguage("properties",function(e){var t="[ \\t\\f]*",r="("+t+"[:=]"+t+"|[ \\t\\f]+)",a="([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",n="([^\\\\:= \\t\\f\\n]|\\\\.)+",i={e:r,r:0,starts:{cN:"string",e:/$/,r:0,c:[{b:"\\\\\\n"}]}};return{cI:!0,i:/\S/,c:[e.C("^\\s*[!#]","$"),{b:a+r,rB:!0,c:[{cN:"attr",b:a,endsParent:!0,r:0}],starts:i},{b:n+r,rB:!0,r:0,c:[{cN:"meta",b:n,endsParent:!0,r:0}],starts:i},{cN:"attr",r:0,b:n+t+"$"}]}}),n.registerLanguage("python",function(e){var t={keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",built_in:"Ellipsis NotImplemented",literal:"False None True"},r={cN:"meta",b:/^(>>>|\.\.\.) /},a={cN:"subst",b:/\{/,e:/\}/,k:t,i:/#/},n={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[e.BE,r],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[e.BE,r],r:10},{b:/(fr|rf|f)'''/,e:/'''/,c:[e.BE,r,a]},{b:/(fr|rf|f)"""/,e:/"""/,c:[e.BE,r,a]},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},{b:/(fr|rf|f)'/,e:/'/,c:[e.BE,a]},{b:/(fr|rf|f)"/,e:/"/,c:[e.BE,a]},e.ASM,e.QSM]},i={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},s={cN:"params",b:/\(/,e:/\)/,c:["self",r,i,n]};return a.c=[n,i,r],{aliases:["py","gyp","ipython"],k:t,i:/(<\/|->|\?)|=>/,c:[r,i,n,e.HCM,{v:[{cN:"function",bK:"def"},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,s,{b:/->/,eW:!0,k:"None"}]},{cN:"meta",b:/^[\t ]*@/,e:/$/},{b:/\b(print|exec)\(/}]}}),n.registerLanguage("ruby",function(e){var t="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},a={cN:"doctag",b:"@[A-Za-z]+"},n={b:"#<",e:">"},i=[e.C("#","$",{c:[a]}),e.C("^\\=begin","^\\=end",{c:[a],r:10}),e.C("^__END__","\\n$")],s={cN:"subst",b:"#\\{",e:"}",k:r},c={cN:"string",c:[e.BE,s],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{b:/<<(-?)\w+$/,e:/^\s*\w+$/}]},o={cN:"params",b:"\\(",e:"\\)",endsParent:!0,k:r},l=[c,n,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{b:"<\\s*",c:[{b:"("+e.IR+"::)?"+e.IR}]}].concat(i)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:t}),o].concat(i)},{b:e.IR+"::"},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":(?!\\s)",c:[c,{b:t}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{cN:"params",b:/\|/,e:/\|/,k:r},{b:"("+e.RSR+"|unless)\\s*",k:"unless",c:[n,{cN:"regexp",c:[e.BE,s],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(i),r:0}].concat(i);s.c=l;var u=[{b:/^\s*=>/,starts:{e:"$",c:o.c=l}},{cN:"meta",b:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",starts:{e:"$",c:l}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,i:/\/\*/,c:i.concat(u).concat(l)}}),n.registerLanL:"bash"}}]}}),n.registerLCM,t,e.HCM]}}),n});