(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-12"],{5277:(n,t,r)=>{r.d(t,{Z:()=>v});var a=r(5238);var e=r(5239);var u=r(5276);function o(n){return n.innerRadius}function c(n){return n.outerRadius}function i(n){return n.startAngle}ction v(){var n=function(){var n,e,o=+t.apply(this,arguments),c=+r.apply(this,arguments),i=h.apply(this,arguments)-u.ou,f=s.apply(this,arguments)-u.ou,l=(0,u.Wn)(f-i),Z=f>i;if(g||(g=n=(0,a.ET)()),c<o&&(e=c,c=o,o=e),c>u.Ho){if(l>u.BZ-u.Ho)g.moveTo(c*(0,u.mC)(i),c*(0,u.O$)(i)),g.arc(0,0,c,i,f,!Z),o>u.Ho&&(g.moveTo(o*(0,u.mC)(f),o*(0,u.O$)(f)),g.arc(0,0,o,f,i,Z));else{var d=i,m=f,H=i,A=f,M=l,b=l,O=x.apply(this,arguments)/2,$=O>u.Ho&&(p?+p.apply(this,arguments):(0,u._b)(o*o+c*c)),C=(0,u.VV)((0,u.Wn)(c-o)/2,+v.apply(this,arguments)),R=C,T=C,V,_;if($>u.Ho){var k=(0,u.ZR)($/o*(0,u.O$)(O)),B=(0,u.ZR)($/c*(0,u.O$)(O));(M-=2*k)>u.Ho?(k*=Z?1:-1,H+=k,A-=k):(M=0,H=A=(i+f)/2),(b-=2*B)>u.Ho?(B*=Z?1:-1,d+=B,m-=B):(b=0,d=m=(i+f)/2)}var W=c*(0,u.mC)(d),w=c*(0,u.O$)(d),F=o*(0,u.mC)(A),K=o*(0,u.O$)(A);if(C>u.Ho){var N=c*(0,u.mC)(m),P=c*(0,u.O$)(m),q=o*(0,u.mC)(H),E=o*(0,u.O$)(H),I;if(l<u.pi&&(I=function(n,t,r,a,e,o,c,i){var f=r-n,l=a-t,y=c-e,v=i-o,p=v*f-y*l;if(!(p*p<u.Ho))return p=(y*(t-o)-v*(n-e))/p,[n+p*f,t+p*l]}(W,w,q,E,N,P,F,K))){var j=W-I[0],z=w-I[1],D=N-I[0],G=P-I[1],J=1/(0,u.O$)((0,u.Kh)((j*D+z*G)/((0,u._b)(j*j+z*z)*(0,u._b)(D*D+G*G)))/2),L=(0,u._b)(I[0]*I[0]+I[1]*I[1]);R=(0,u.VV)(C,(o-L)/(J-1)),T=(0,u.VV)(C,(c-L)/(J+1))}}b>u.Ho?T>u.Ho?(V=y(q,E,W,w,c,T,Z),_=y(N,P,F,K,c,T,Z),g.moveTo(V.cx+V.x01,V.cy+V.y01),T<C?g.arc(V.cx,V.cy,T,(0,u.fv)(V.y01,V.x01),(0,u.fv)(_.y01,_.x01),!Z):(g.arc(V.cx,V.cy,T,(0,u.fv)(V.y01,V.x01),(0,u.fv)(V.y11,V.x11),!Z),g.arc(0,0,c,(0,u.fv)(V.cy+V.y11,V.cx+V.x11),(0,u.fv)(_.cy+_.y11,_.cx+_.x11),!Z),g.arc(_.cx,_.cy,T,(0,u.fv)(_.y11,_.x11),(0,u.fv)(_.y01,_.x01),!Z))):(g.moveTo(W,w),g.arc(0,0,c,d,m,!Z)):g.moveTo(W,w),o>u.Ho&&M>u.Ho?R>u.Ho?(V=y(F,K,N,P,o,-R,Z),_=y(W,w,q,E,o,-R,Z),g.lineTo(V.cx+V.x01,V.cy+V.y01),R<C?g.arc(V.cx,V.cy,R,(0,u.fv)(V.y01,V.x01),(0,u.fv)(_.y01,_.x01),!Z):(g.arc(V.cx,V.cy,R,(0,u.fv)(V.y01,V.x01),(0,u.fv)(V.y11,V.x11),!Z),g.arc(0,0,o,(0,u.fv)(V.cy+V.y11,V.cx+V.x11),(0,u.fv)(_.cy+_.y11,_.cx+_.x11),Z),g.arc(_.cx,_.cy,R,(0,u.fv)(_.y11,_.x11),(0,u.fv)(_.y01,_.x01),!Z))):g.arc(0,0,o,A,H,Z):g.lineTo(F,K)}}else g.moveTo(0,0);if(g.closePath(),n)return g=null,n+""||null};var t=o,r=c,v=(0,e.Z)(0),p=null,h=i,s=f,x=l,g=null;return n.centroid=n.innerRadius=function(r){return arguments.length?(t="function"==typeof r?r:(0,e.Z)(+r),n):t},n.outerRadius=function(t){return arguments.length?(r="function"==typeof t?t:(0,e.Z)(+t),n):r},n.cornerRadius=function(t){return arguments.length?(v="function"==typeof t?t:(0,e.Z)(+t),n):v},n.padRadius=n.startAngle=function(t){return arguments.length?(h="function"==typeof t?t:(0,e.Z)(+t),n):h},n.endAngle=function(t){return arguments.length?(s="function"==typeof t?t:(0,e.Z)(+t),n):s},n.padAngle=function(t){return arguments.length?(x="function"==typeof t?t:(0,e.Z)(+t),n):x},n.context=n}},5276:(n,t,r)=>{r.d(t,{BZ:()=>p,Fp:()=>o,Ho:()=>l,Kh:()=>h,O$:()=>i,VV:()=>c,Wn:()=>a,ZR:()=>s,_b:()=>f,fv:()=>e,mC:()=>u,ou:()=>v,pi:()=>y});var a=Math.abs;var e=Math.atan2;var u=Math.cos;var o=Math.max;var c=Math.min;var i=Math.sin;var f=Math.sqrt;var l=1e-12;var y=Math.PI;var v=y/2;var p=2*y;5275:(n,t,r)=>{r.d(t,{Z:);var a=r(5237);var e=r(5239);r c=r(5276);function i(){var n=function(n){var e,u=(n=(0,a.Z)(n)).length,o,v,p=0,h=Array(u),s=Array(u),x=+f.apply(this,arguments),g=Math.min(c.BZ,Math.max(-c.BZ,l.apply(this,arguments)-x)),Z,d=Math.min(Math.abs(g)/u,y.apply(this,arguments)),m=d*(g<0?-1:1),H;for(e=0;e<u;++e)(H=s[h[e]=e]=+t(n[e],e,n))>0&&(p+=H);for(null!=r?h.sort(function(n,t){return r(s[n],s[t])}):null!=i&&h.sort(,e=0,v=p?(g-u*m)/p:0;e<u;++e,x=Z)Z=x+((H=s[o=h[e]])>0?H*v:0)+m,s[o]={data:n[o],index:e,value:H,startAngle:x,endAngle:Z,padAngle:d};return s};var t=o,r=u,i=null,f=(0,e.Z)(0),l=(0,e.Z)(c.BZ),y=(0,e.Z)(0);return n.value=function(r){return arguments.length?(t="function"==typeof r?r:(0,e.Z)(+r),n):t},n.sortValues=function(t){return arguments.length?(r=t,i=null,n):r},n.sort=n.startAngle=function(t){return arguments.length?(f="function"==typeof t?t:(0,e.Z)(+t),n):f},n.endAngle=function(t){return arguments.length?(l="function"==typeof t?t:(0,e.Z)(+t),n):l},n.padAngle=n}}}]);