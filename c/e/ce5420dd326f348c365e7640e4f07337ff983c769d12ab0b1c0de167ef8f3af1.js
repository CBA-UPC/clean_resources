for(var m=new Uint8Array(256),p=0;256>p;p++)m[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;m[254]=m[254]=1;
function aa(a){var b,c,f=a.length,d=0;for(b=0;b<f;b++){var e=a.charCodeAt(b);if(55296===(e&64512)&&b+1<f){var g=a.charCodeAt(b+1);56320===(g&64512)&&(e=65536+(e-55296<<10)+(g-56320),b++)}d+=128>e?1:2048>e?2:65536>e?3:4}var k=new q(d);for(b=c=0;c<d;b++)e=a.charCodeAt(b),55296===(e&64512)&&b+1<f&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(e=65536+(e-55296<<10)+(g-56320),b++)),128>e?k[c++]=e:(2048>e?k[c++]=192|e>>>6:(65536>e?k[c++]=224|e>>>12:(k[c++]=240|e>>>18,k[c++]=128|e>>>12&63),k[c++]=128|e>>>6&63),
k[c++]=128|e&63);return k};var q,r,t,u;function ba(a,b,c){b=void 0===b?null:b;c=void 0===c?null:c;for(var f=Array.prototype.slice.call(arguments,1);f.length;){var d=f.shift();if(d){if("object"!==typeof d)throw new TypeError(d+"must be non-object");for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}}return a}function v(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a}
(function(a){a?(q=Uint8Array,r=Uint16Array,t=u=:(r=q=Array,t=u=})("undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&
"undefined"!==typeof Int32Array);var w={Fa:{2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}};function x(a,b){a.ja=w.Fa[b];return b}unction z(a){var b=a.state,c=b.pending;c>a.j&&(c=a.j);0!==c&&(t(a.ka,b.m,b.la,c,a.da),a.da+=c,b.la+=c,a.xa+=c,a.j-=c,b.pending-=c,0===b.pending&&(b.la=0))}
nction H(a){var b=a.u,c;do{var f=a.Ja-a.b-a.a;if(a.a>=b+(b-262)){t(a.window,a.window,b,b,0);a.ba-=b;a.a-=b;a.D-=b;var d=c=a.oa;do{var e=a.head[--d];a.head[d]=e>=b?e-b:0}while(--c);d=c=b;do e=a.J[--d],a.J[d]=e>=b?e-b:0;while(--c);f+=b}if(0===a.h.v)break;d=a.h;c=a.window;e=a.a+a.b;var g=d.v;g>f&&(g=f);0===g?c=0:(d.v-=g,t(c,d.input,d.Z,g,e),1===d.state.o?d.f=na(d.f,c,g,e):2===d.state.o&&(d.f=I(d.f,c,g,e)),d.Z+=g,d.$+=g,c=g);a.b+=c;if(3<=a.b+a.A)for(f=a.a-a.A,a.g=a.window[f],a.g=(a.g<<a.O^a.window[f+
1])&a.N;a.A&&!(a.g=(a.g<<a.O^a.window[f+3-1])&a.N,a.J[f&a.V]=a.head[a.g],a.head[a.g]=f,f++,a.A--,3>a.b+a.A););}while(262>a.b&&0!==a.h.v)}
r Q;
Q=[new O(0,0,0,0,,new O(4,4,8,4,J),new O(4,5,16,8,J),new O(4,6,32,32,J),new O(4,4,16,16,N),new O(8,16,32,32,N),new O(8,16,128,128,N),new O(8,32,128,256,N),new O(32,128,258,1024,
N),new O(32,258,258,4096,N)];
function oa(){this.h=null;this.status=0;this.m=null;this.o=this.pending=this.la=this.F=0;this.c=null;this.G=0;this.method=8;this.ha=-1;this.V=this.ya=this.u=0;this.window=null;this.Ja=0;this.head=this.J=null;this.Ea=this.Ba=this.K=this.level=this.wa=this.Da=this.B=this.b=this.ba=this.a=this.Y=this.Ga=this.i=this.D=this.O=this.N=this.L=this.oa=this.g=0;this.w=new r(1146);this.X=new r(122);this.s=new r(78);y(this.w);y(this.X);y(this.s);this.za=this.na=this.pa=null;this.M=new r(16);this.l=new r(573);
y(this.l);this.aa=this.P=0;this.depth=new r(573);y(this.depth);this.C=this.H=this.A=this.matches=this.ea=this.R=this.fa=this.I=this.ia=this.va=0}
function pa(a){if(!a||!a.state)return a?x(a,-2):-2;var b=a.state;if(!a.ka||!a.input&&0!==a.v)return x(a,0===a.j?-5:-2);b.h=a;b.ha=4;if(42===b.status)if(2===b.o)a.f=0,F(b,31),F(b,139),F(b,8),b.c?(F(b,(b.c.text?1:0)+(b.c.T?2:0)+(b.c.S?4:0)+(b.c.name?8:0)+(b.c.ra?16:0)),F(b,b.c.time&255),F(b,b.c.time>>8&255),F(b,b.c.time>>16&255),F(b,b.c.time>>24&255),F(b,9===b.level?2:2<=b.K||2>b.level?4:0),F(b,b.c.Xa&255),b.c.S&&b.c.S.length&&(F(b,b.c.S.length&255),F(b,b.c.S.length>>8&255)),b.c.T&&(a.f=I(a.f,b.m,b.pending,
0)),b.G=0,b.status=69):(F(b,0),F(b,0),F(b,0),F(b,0),F(b,0),F(b,9===b.level?2:2<=b.K||2>b.level?4:0),F(b,3),b.status=113);else{var c=8+(b.ya-8<<4)<<8;c|=(2<=b.K||2>b.level?0:6>b.level?1:6===b.level?2:3)<<6;0!==b.a&&(c|=32);b.status=113;G(b,c+(31-c%31));0!==b.a&&(G(b,a.f>>>16),G(b,a.f&65535));a.f=1}if(69===b.status)if(b.c.S){for(c=b.pending;b.G<(b.c.S.length&65535)&&(b.pending!==b.F||(b.c.T&&b.pending>c&&(a.f=I(a.f,b.m,b.pending-c,c)),z(a),c=b.pending,b.pending!==b.F));)F(b,b.c.S[b.G]&255),b.G++;b.c.T&&
b.pending>c&&(a.f=I(a.f,b.m,b.pending-c,c));b.G===b.c.S.length&&(b.G=0,b.status=73)}else b.status=73;if(73===b.status)if(b.c.name){c=b.pending;do{if(b.pending===b.F&&(b.c.T&&b.pending>c&&(a.f=I(a.f,b.m,b.pending-c,c)),z(a),c=b.pending,b.pending===b.F)){var f=1;break}f=b.G<b.c.name.length?b.c.name.charCodeAt(b.G++)&255:0;F(b,f)}while(0!==f);b.c.T&&b.pending>c&&(a.f=I(a.f,b.m,b.pending-c,c));0===f&&(b.G=0,b.status=91)}else b.status=91;if(91===b.status)if(b.c.ra){c=b.pending;do{if(b.pending===b.F&&(b.c.T&&
b.pending>c&&(a.f=I(a.f,b.m,b.pending-c,c)),z(a),c=b.pending,b.pending===b.F)){f=1;break}f=b.G<b.c.ra.length?b.c.ra.charCodeAt(b.G++)&255:0;F(b,f)}while(0!==f);b.c.T&&b.pending>c&&(a.f=I(a.f,b.m,b.pending-c,c));0===f&&(b.status=103)}else b.status=103;103===b.status&&(b.c.T?(b.pending+2>b.F&&z(a),b.pending+2<=b.F&&(F(b,a.f&255),F(b,a.f>>8&255),a.f=0,b.status=113)):b.status=113);if(0!==b.pending&&(z(a),0===a.j))return b.ha=-1,0;if(666===b.status&&0!==a.v)return x(a,-5);if(0!==a.v||0!==b.b||666!==b.status){if(2===
b.K)a:{for(;0!==b.b||(H(b),0!==b.b);)if(b.i=0,c=K(b,0,b.window[b.a]),b.b--,b.a++,c&&(A(b,!1),0===b.h.j)){c=1;break a}b.A=0;A(b,!0);c=0===b.h.j?3:4}else if(3===b.K)a:{var d;for(c=b.window;!(258>=b.b&&(H(b),0===b.b));){b.i=0;if(3<=b.b&&0<b.a){var e=b.a-1;f=c[e];if(f===c[++e]&&f===c[++e]&&f===c[++e]){for(d=b.a+258;f===c[++e]&&f===c[++e]&&f===c[++e]&&f===c[++e]&&f===c[++e]&&f===c[++e]&&f===c[++e]&&f===c[++e]&&e<d;);b.i=258-(d-e);b.i>b.b&&(b.i=b.b)}}3<=b.i?(f=K(b,1,b.i-3),b.b-=b.i,b.a+=b.i,b.i=0):(f=K(b,
0,b.window[b.a]),b.b--,b.a++);if(f&&(A(b,!1),0===b.h.j)){c=1;break a}}b.A=0;A(b,!0);c=0===b.h.j?3:4}else c=Q[b.level].Oa(b,4);if(3===c||4===c)b.status=666;if(1===c||3===c)return 0===a.j&&(b.ha=-1),0;if(2===c&&(C(b,0,3),ha(b,0,0),z(a),0===a.j))return b.ha=-1,0}if(0>=b.o)return 1;2===b.o?(F(b,a.f&255),F(b,a.f>>8&255),F(b,a.f>>16&255),F(b,a.f>>24&255),F(b,a.$&255),F(b,a.$>>8&255),F(b,a.$>>16&255),F(b,a.$>>24&255)):(G(b,a.f>>>16),G(b,a.f&65535));z(a);0<b.o&&(b.o=-b.o);return 0!==b.pending?0:1}
for(var qa,R,ra=[],S=0;256>S;S++){R=S;for(var sa=0;8>sa;sa++)R=R&1?3988292384^R>>>1:R>>>1;ra[S]=R}qa=ra;function I(a,b,c,f){c=f+c;for(a^=-1;f<c;f++)a=a>>>8^qa[(a^b[f])&255];return a^-1};var ta=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],T=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ua=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ea=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],D=Array(576);y(D);var E=Array(60);y(E);var V=Array(512);y(V);var W=Array(256);y(W);var va=Array(29);y(va);var X=Array(30);y(X);ar xa,ya,za;
n ha(a,b,c){la(a);Y(a,c);Y(a,~c);t(a.m,a.window,b,c,a.pending);a.pending+=c}unction B(a,b){var c=b.Aa,f=b.U.Ha,d=b.U.Ca,e=b.U.La,g,k=-1;a.P=0;a.aa=573;for(g=0;g<e;g++)0!==c[2*g]?(a.l[++a.P]=k=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.P;){var l=a.l[++a.P]=2>k?++k:0;c[2*l]=1;a.depth[l]=0;a.R--;d&&(a.ea-=f[2*l+1])}b.ca=k;for(g=a.P>>1;1<=g;g--)Fa(a,c,g);l=e;do g=a.l[1],a.l[1]=a.l[a.P--],Fa(a,c,1),f=a.l[1],a.l[--a.aa]=g,a.l[--a.aa]=f,c[2*l]=c[2*g]+c[2*f],a.depth[l]=(a.depth[g]>=a.depth[f]?a.depth[g]:a.depth[f])+1,c[2*g+1]=c[2*f+1]=l,a.l[1]=l++,Fa(a,c,1);while(2<=a.P);a.l[--a.aa]=a.l[1];
g=b.Aa;l=b.ca;var h=b.U.Ha,L=b.U.Ca,P=b.U.Na,M=b.U.Ma,n=b.U.Ta,U=0;for(e=0;15>=e;e++)a.M[e]=0;g[2*a.l[a.aa]+1]=0;for(f=a.aa+1;573>f;f++)if(d=a.l[f],e=g[2*g[2*d+1]+1]+1,e>n&&(e=n,U++),g[2*d+1]=e,!(d>l)){a.M[e]++;var fa=0;d>=M&&(fa=P[d-M]);var Ba=g[2*d];a.R+=Ba*(e+fa);L&&(a.ea+=Ba*(h[2*d+1]+fa))}if(0!==U){do{for(e=n-1;0===a.M[e];)e--;a.M[e]--;a.M[e+1]+=2;a.M[n]--;U-=2}while(0<U);for(e=n;0!==e;e--)for(d=a.M[e];0!==d;)h=a.l[--f],h>l||(g[2*h+1]!==e&&(a.R+=(e-g[2*h+1])*g[2*h],g[2*h+1]=e),d--)}Da(c,k,a.M)}
ar Ga=!1;function na(a,b,c,f){var d=a&65535|0;a=a>>>16&65535|0;for(var e;0!==c;){e=2E3<c?2E3:c;c-=e;do d=d+b[f++]|0,a=a+d|0;while(--e);d%=65521;a%=65521}return d|a<<16|0};function Ha(){this.input=null;this.$=this.v=this.Z=0;this.ka=null;this.xa=this.j=this.da=0;this.ja="";this.state=null;this.sa=2;this.f=0};var Ia=Object.prototype.toString;
function Ja(a){if(!(this instanceof Ja))return new Ja(a);a=this.ma=ba({level:1,method:8,Ka:65536,W:15,Ua:9,K:0,Ia:""},a||{});a.raw&&0<a.W?a.W=-a.W:a.Wa&&0<a.W&&16>a.W&&(a.W+=16);this.ua=0;this.ja="";this.qa=!1;this.L=[];this.ta=null;this.h=new Ha;this.h.j=0;var b=this.h;var c=a.level,f=a.method,d=a.W,e=a.Ua,g=a.K;if(b){var k=1;-1===c&&(c=6);0>d?(k=0,d=-d):15<d&&(k=2,d-=16);if(1>e||9<e||8!==f||8>d||15<d||0>c||9<c||0>g||4<g)b=x(b,-2);else{8===d&&(d=9);var l=new oa;b.state=l;l.h=b;l.o=k;l.c=null;l.ya=
d;l.u=1<<l.ya;l.V=l.u-1;l.L=e+7;l.oa=1<<l.L;l.N=l.oa-1;l.O=~~((l.L+3-1)/3);l.window=new q(2*l.u);l.head=new r(l.oa);l.J=new r(l.u);l.ia=1<<e+6;l.F=4*l.ia;l.m=new q(l.F);l.fa=l.ia;l.va=3*l.ia;l.level=c;l.K=g;l.method=f;if(b&&b.state){b.$=b.xa=0;b.sa=2;c=b.state;c.pending=0;c.la=0;0>c.o&&(c.o=-c.o);c.status=c.o?42:113;b.f=2===c.o?0:1;c.ha=0;if(!Ga){f=Array(16);for(e=g=0;28>e;e++)for(va[e]=g,d=0;d<1<<ta[e];d++)W[g++]=e;W[g-1]=e;for(e=g=0;16>e;e++)for(X[e]=g,d=0;d<1<<T[e];d++)V[g++]=e;for(g>>=7;30>e;e++)for(X[e]=
g<<7,d=0;d<1<<T[e]-7;d++)V[256+g++]=e;for(d=0;15>=d;d++)f[d]=0;for(d=0;143>=d;)D[2*d+1]=8,d++,f[8]++;for(;255>=d;)D[2*d+1]=9,d++,f[9]++;for(;279>=d;)D[2*d+1]=7,d++,f[7]++;for(;287>=d;)D[2*d+1]=8,d++,f[8]++;Da(D,287,f);for(d=0;30>d;d++)E[2*d+1]=5,E[2*d]=Ca(d,5);xa=new wa(D,ta,257,286,15);ya=new wa(E,T,0,30,15);za=new wa([],ua,0,19,7);Ga=!0}c.pa=new Aa(c.w,xa);c.na=new Aa(c.X,ya);c.za=new Aa(c.s,za);c.H=0;c.C=0;ka(c);c=0}else c=x(b,-2);0===c&&(b=b.state,b.Ja=2*b.u,y(b.head),b.wa=Q[b.level].Sa,b.Ba=
Q[b.level].Pa,b.Ea=Q[b.level].Va,b.Da=Q[b.level].Ra,b.a=0,b.D=0,b.b=0,b.A=0,b.i=b.B=2,b.Y=0,b.g=0);b=c}}else b=-2;if(0!==b)throw Error(w[b]);a.Qa&&(b=this.h)&&b.state&&2===b.state.o&&(b.state.c=a.Qa);if(a.ga){var h;"string"===typeof a.ga?h=aa(a.ga):"[object ArrayBuffer]"===Ia.call(a.ga)?h=new Uint8Array(a.ga):h=a.ga;a=this.h;e=h;g=e.length;if(a&&a.state)if(h=a.state,b=h.o,2===b||1===b&&42!==h.status||h.b)b=-2;else{1===b&&(a.f=na(a.f,e,g,0));h.o=0;g>=h.u&&(0===b&&(y(h.head),h.a=0,h.D=0,h.A=0),c=new q(h.u),
t(c,e,g-h.u,h.u,0),e=c,g=h.u);c=a.v;f=a.Z;d=a.input;a.v=g;a.Z=0;a.input=e;for(H(h);3<=h.b;){e=h.a;g=h.b-2;do h.g=(h.g<<h.O^h.window[e+3-1])&h.N,h.J[e&h.V]=h.head[h.g],h.head[h.g]=e,e++;while(--g);h.a=e;h.b=2;H(h)}h.a+=h.b;h.D=h.a;h.A=h.b;h.b=0;h.i=h.B=2;h.Y=0;a.Z=f;a.input=d;a.v=c;h.o=b;b=0}else b=-2;if(0!==b)throw Error(w[b]);}}function Ka(a,b){0===b&&("string"===a.ma.Ia?a.ta=a.L.join(""):a.ta=u(a.L));a.L=[];a.ua=b;a.ja=a.h.ja};function La(a,b){b.namespace="quantum_worker";b.token=a.token;return b}
self.onmessage=function(a){var b=a.data;if(b&&"object"==typeof b&&"quantum_worker"==b.namespace){var c=b.action,f=b.token;if(void 0==c||void 0==f)throw Error("Quantum Web Worker unable to handle message as it is incomplete. Event:",a);switch(c){case "compress":var d=b.input;a=new Ja(null);a:if(c=a.h,f=a.ma.Ka,!a.qa){"string"===typeof d?c.input=aa(d):"[object ArrayBuffer]"===Ia.call(d)?c.input=new Uint8Array(d):c.input=d;c.Z=0;c.v=c.input.length;do{0===c.j&&(c.ka=new q(f),c.da=0,c.j=f);d=pa(c);if(1!==
d&&0!==d){Ka(a,d);a.qa=!0;break a}if(0===c.j||0===c.v)if("string"===a.ma.Ia){var e=v(c.ka,c.da),g=a;var k=e;e=e.length;e||(e=k.length);if(65537>e&&(k.subarray||!k.subarray))k=String.fromCharCode.apply(null,v(k,e));else{for(var l="",h=0;h<e;h++)l+=String.fromCharCode(k[h]);k=l}g.L.push(k)}else g=v(c.ka,c.da),a.L.push(g)}while((0<c.v||0===c.j)&&1!==d);(c=a.h)&&c.state?(f=c.state.status,42!==f&&69!==f&&73!==f&&91!==f&&103!==f&&113!==f&&666!==f?d=x(c,-2):(c.state=null,d=113===f?x(c,-3):0)):d=-2;Ka(a,
d);a.qa=!0}if(a.ua)throw a.ja||w.Fa[a.ua];postMessage(La(b,{compressed:a.ta}));break;case "install":postMessage(La(b,{ready:!0}));break;default:console.warn("Unknown action sent to Quantum Web Worker:",b)}}else console.warn("Quantum Web Worker received non-standard request",a)};