(()=>{"use strict";var r=Uint8Array,e=Uint16Array,n=Int32Array,t=new r([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),a=new r([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new r([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=i=s(t,2),f=i.b,c=i.r;f[28]=258,c[258]=28;for(var l=s(a,0),u=(l.b,l.r),h=new e(32768),v=0;v<32768;++v){var d=(43690&v)>>1|(21845&v)<<1;d=(61680&(d=(52428&d)>>2|(13107&d)<<2))>>4|(3855&d)<<4,h[v]=((65280&d)>>8|(255&d)<<8)>>1}var g=p=new r(288);for(v=0;v<144;++v)p[v]=8;for(v=144;v<256;++v)p[v]=9;for(v=256;v<280;++v)p[v]=7;for(v=280;v<288;++v)p[v]=8;var w=new r(32);for(v=0;v<32;++v)w[v]=5;var m=g(p,9,0),y=g(w,5,0),M=b=function(e,n,t){return(null==n||n<0)&&(n=0),(null==t||t>e.length)&&(t=e.length),new r(e.subarray(n,t))},C=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],k=x=function(r,e,n){n<<=7&e;var t=e/8|0;r[t]|=n,r[t+1]|=n>>8},S=function(r,e,n){n<<=7&e;var t=e/8|0;r[t]|=n,r[t+1]|=n>>8,r[t+2]|=n>>16},T=function(n,t){for(var a=[],o=0;o<n.length;++o)n[o]&&a.push({s:o,f:n[o]});var s=a.length,i=a.slice();if(!s)return{t:O,l:0};if(1==s){var f=new r(a[0].s+1);return f[a[0].s]=1,{t:f,l:1}}a.sort((),a.push({s:-1,f:25001});var c=a[0],l=a[1],u=0,h=1,v=2;for(a[0]={s:-1,f:c.f+l.f,l:c,r:l};h!=s-1;)c=a[a[u].f<a[v].f?u++:v++],l=a[u!=h&&a[u].f<a[v].f?u++:v++],a[h++]={s:-1,f:c.f+l.f,l:c,r:l};var d=i[0].s;for(o=1;o<s;++o)i[o].s>d&&(d=i[o].s);var g=new e(d+1),p=E(a[h-1],g,0);if(p>t){o=0;var w=0,m=p-t,y=1<<m;for(i.sort(();o<s;++o){var M=i[o].s;if(!(g[M]>t))break;w+=y-(1<<p-g[M]),g[M]=t}for(w>>=m;w>0;){var b=i[o].s;g[b]<t?w-=1<<t-g[b]++-1:++o}for(;o>=0&&w;--o){var C=i[o].s;g[C]==t&&(--g[C],++w)}p=t}return{t:new r(g),l:p}},E=R=function(r){for(var n=r.length;n&&!r[--n];);for(var t=new e(++n),a=0,o=r[0],s=1,i=function(r){t[a++]=r},f=1;f<=n;++f)if(r[f]==o&&f!=n)++s;else{if(!o&&s>2){for(;s>138;s-=138)i(32754);s>2&&(i(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(i(o),--s;s>6;s-=6)i(8304);s>2&&(i(s-3<<5|8208),s=0)}for(;s--;)i(o);s=1,o=r[f]}return{c:t.subarray(0,a),n:n}},U=A=function(r,e,n){var t=n.length,a=M(e+2);r[a]=255&t,r[a+1]=t>>8,r[a+2]=255^r[a],r[a+3]=255^r[a+1];for(var o=0;o<t;++o)r[a+o+4]=n[o];return 8*(a+4+t)},q=function(r,n,s,i,f,c,l,u,h,v,d){x(n,d++,s),++f[256];for(var M=T(f,15),b=M.t,C=M.l,k=T(c,15),E=k.t,q=k.l,D=R(b),O=D.c,P=D.n,j=R(E),z=j.c,F=j.n,L=new e(19),I=0;I<O.length;++I)++L[31&O[I]];for(I=0;I<z.length;++I)++L[31&z[I]];for(var J=T(L,7),N=J.t,B=J.l,G=19;G>4&&!N[o[G-1]];--G);var H,K,Q,V,W=v+5<<3,X=U(f,p)+U(c,w)+l,Y=U(f,b)+U(c,E)+l+14+3*G+U(L,N)+2*L[16]+3*L[17]+7*L[18];if(h>=0&&W<=X&&W<=Y)return A(n,d,r.subarray(h,h+v));if(x(n,d,1+(Y<X)),d+=2,Y<X){H=g(b,C,0),K=b,Q=g(E,q,0),V=E;var Z=g(N,B,0);x(n,d,P-257),x(n,d+5,F-1),x(n,d+10,G-4),d+=14;for(I=0;I<G;++I)x(n,d+3*I,N[o[I]]);d+=3*G;for(var $=[O,z],_=0;_<2;++_){var rr=$[_];for(I=0;I<rr.length;++I){var er=31&rr[I];x(n,d,Z[er]),d+=N[er],er>15&&(x(n,d,rr[I]>>5&127),d+=rr[I]>>12)}}}else H=m,K=p,Q=y,V=w;for(I=0;I<u;++I){var nr=i[I];if(nr>255){S(n,d,H[(er=nr>>18&31)+257]),d+=K[er+257],er>7&&(x(n,d,nr>>23&31),d+=t[er]);var tr=31&nr;S(n,d,Q[tr]),d+=V[tr],tr>3&&(S(n,d,nr>>5&8191),d+=a[tr])}else S(n,d,H[nr]),d+=K[nr]}return S(n,d,H[256]),d+K[256]},D=new n([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),O=new r(0),P=function(o,s,i,f,l,h){var v=h.z||o.length,d=new r(f+v+5*(1+Math.ceil(v/7e3))+l),g=d.subarray(f,d.length-l),p=h.l,w=7&(h.r||0);if(s){w&&(g[0]=h.r>>3);for(var m=D[s-1],y=m>>13,C=8191&m,k=(1<<i)-1,x=h.p||new e(32768),S=h.h||new e(k+1),T=Math.ceil(i/3),E=2*T,R=U=new n(25e3),O=new e(288),P=new e(32),j=0,z=0,F=h.i||0,L=0,I=h.w||0,J=0;F+2<v;++F){var N=R(F),B=32767&F,G=S[N];if(x[B]=G,S[N]=B,I<=F){var H=v-F;if((j>7e3||L>24576)&&(H>423||!p)){w=q(o,g,0,U,O,P,z,L,J,F-J,w),L=j=z=0,J=F;for(var K=0;K<286;++K)O[K]=0;for(K=0;K<30;++K)P[K]=0}var Q=2,V=0,W=C,X=B-G&32767;if(H>2&&N==R(F-X))for(var Y=Math.min(y,H)-1,Z=Math.min(32767,F),$=Math.min(258,H);X<=Z&&--W&&B!=G;){if(o[F+Q]==o[F+Q-X]){for(var _=0;_<$&&o[F+_]==o[F+_-X];++_);if(_>Q){if(Q=_,V=X,_>Y)break;var rr=Math.min(X,_-2),er=0;for(K=0;K<rr;++K){var nr=F-X+K&32767,tr=nr-x[nr]&32767;tr>er&&(er=tr,G=nr)}}}X+=(B=G)-(G=x[B])&32767}if(V){U[L++]=268435456|c[Q]<<18|u[V];var ar=31&c[Q],or=31&u[V];z+=t[ar]+a[or],++O[257+ar],++P[or],I=F+Q,++j}else U[L++]=o[F],++O[o[F]]}}for(F=Math.max(F,I);F<v;++F)U[L++]=o[F],++O[o[F]];w=q(o,g,p,U,O,P,z,L,J,F-J,w),p||(h.r=7&w|g[w/8|0]<<3,w-=7,h.h=S,h.p=x,h.i=F,h.w=I)}else{for(F=h.w||0;F<v+p;F+=65535){var sr=F+65535;sr>=v&&(g[w/8|0]=p,sr=v),w=A(g,w+1,o.subarray(F,sr))}h.i=v}return b(d,0,f+M(w)+l)},j=function(){var r=1,e=0;return{p:d:function(){return(255&(r%=65521))<<24|(65280&r)<<8|(255&(e%=65521))<<8|e>>8}}},z=function(e,n,t,a,o){if(!o&&(o={l:1},n.dictionary)){var s=n.dictionary.subarray(-32768),i=new r(s.length+e.length);i.set(s),i.set(e,s.length),e=i,o.w=s.length}return P(e,null==n.level?6:n.level,null==n.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+n.mem,t,a,o)},F=L=function(r,e){var n=e.level,t=0==n?0:n<6?1:9==n?3:2;if(r[0]=120,r[1]=t<<6|(e.dictionary&&32),r[1]|=31-(r[0]<<8|r[1])%31,e.dictionary){var a=j();a.p(e.dictionary),F(r,2,a.d())}};function I(r,e){e||(e={});var n=j();n.p(r);var t=z(r,e,e.dictionary?6:2,4);return L(t,e),F(t,t.length-4,n.d()),t}var J="undefined"!=typeof TextEncoder&&new TextEncoder,N="undefined"!=typeof TextDecoder&&new TextDecoder;try{N.decode(O,{stream:!0}),1}catch(r){}var B=unction"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout;class K{constructor(r){this.worker=r,this.worker.addEventListener("message",,this.worker.addEventListener("messageerror",,setTimeout(}eiveMessage(r){switch(r.type){case"ping":this.sendPongMessage();break;case"record-snapshot-request":this.receiveRecordSnapshotRequest(r.payload)}}receiveRecordSnapshotRequest(r){const{id:e,snapshot:n}=r,t={id:e,compressedData:null,cssUrls:null,error:null};try{t.compressedData=K.compress(n),t.cssUrls=K.extractCssUrls(n)}catch(r){t.compressedData=null,t.cssUrls=null,t.error=r}this.sendRecordShapshotResponse(t)}static compress(r){return H(I(G(JSON.stringify(r)),{level:1}),!0)}static extractCssUrls(r){const e=[];return function r(n){if(n)for(const[t,a]of Object.entries(n)){const o="href"===t,s="string"==typeof a&&!!a.length;if(o&&s){const r=a.includes(".css"),t="text/css"===n.type;if(r||t){const r=a.replace(/['"]/g,"");e.push(r)}}else"object"==typeof a&&null!==a&&r(a)}}(r),e}}new K(self)})();