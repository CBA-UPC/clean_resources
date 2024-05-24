var _yt_player={};(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 SPDX-License-Identifier: Apache-2.0
*/
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
/*


 The MIT License (MIT)

 Copyright (c) 2015-present Dan Abramov

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
'use strict';var ca,baa,caa,la,daa,na,eaa,pa,ta,va,za,gaa,haa,Ga,Ha,iaa,jaa,Ka,kaa,Na,Oa,Qa,laa,Ra,Xa,Ya,naa,oaa,qb,paa,sb,tb,ub,yb,zb,qaa,raa,Cb,taa,uaa,Ob,vaa,Vb,waa,xaa,Sb,yaa,zaa,Aaa,Caa,Baa,Daa,fc,Eaa,ic,kc,mc,xc,yc,Ac,Bc,Cc,Gc,Maa,Hc,Lc,Ic,Naa,Oaa,Paa,Qaa,Mc,Raa,Nc,Oc,Pc,Saa,Qc,Rc,Uaa,Vaa,Xaa,Yc,$c,$aa,ad,dd,aba,bba,md,cba,wd,yd,fba,gba,zd,lba,Fd,iba,kba,Dd,Cd,Nd,Od,mba,Pd,nba,Sd,Td,oba,Vd,Xd,Zd,be,vba,me,Cba,Aba,Bba,Eba,Fba,ve,Hba,Iba,Lba,Mba,ye,Be,Le,Oe,Qe,Nba,Oba,Pba,Qba,Ue,Ve,ff,Tba,Vba,
Uba,jf,pf,Wba,of,uf,Te,Hf,Yba,Jf,If,Re,Lf,Zba,Mf,Nf,Of,$ba,bca,dca,$f,ag,bg,hca,jca,dg,kca,cg,oca,Yf,fca,qca,nca,lca,mca,rca,pca,eg,ica,mg,tca,uca,vca,wca,xca,yca,zca,Aca,Bca,og,Cca,Gca,Hca,Ica,Nca,sg,Mca,Jca,Pca,Rca,Tca,ug,vg,Wca,xg,yg,Yca,Ag,zg,Zca,Bg,$ca,Cg,Dg,Rg,ada,Sg,bda,cda,Tg,Og,dda,Vg,Ug,Wg,Xg,Yg,Zg,$g,eda,gda,bh,hda,ida,ch,eh,vh,kda,lda,nda,oda,qda,wh,rda,xh,sda,yh,tda,zh,Ah,uda,Bh,Ch,Dh,vda,Gh,wda,xda,Ih,Jh,Kh,zda,Lh,Mh,Nh,Oh,Ada,Bda,Qh,Rh,Cda,Dda,Eda,Fda,Sh,ni,oi,Hda,pi,qi,ri,Jda,ui,vi,
Kda,Lda,ti,wi,Ida,si,xi,Mda,Nda,Oda,yi,zi,Ai,Bi,Pda,Wi,Yi,N,Sda,Rda,Uda,Vda,Zi,Wda,Xda,aj,bj,dj,cj,fj,ej,gj,jj,mj,Zda,$da,lj,aea,bea,yj,zj,Aj,Cj,Bj,cea,dea,Ej,Fj,Gj,Dj,Hj,Yda,eea,fea,Jj,Kj,Lj,kj,Mj,Nj,gea,Oj,hea,iea,Pj,jea,Qj,Rj,kea,Sj,lea,Uj,mea,Vj,Wj,Xj,Yj,Zj,xk,O,yk,zk,S,Ak,T,nea,Bk,Ck,Dk,Jk,sea,Kk,uea,wea,tea,vea,Lk,Ek,Mk,xea,yea,Ok,Cea,Dea,Eea,Qk,Fea,Gea,Fk,Hea,Bea,Tk,Uk,Vk,Wk,Xk,Yk,Jea,Kea,yl,Lea,zl,Al,Bl,Cl,Dl,El,Fl,Nea,Oea,Qea,Pea,Rea,Il,Jl,Kl,Tea,Uea,Vea,Ll,Ml,Nl,Ol,Rl,Sl,Xea,Wl,Yea,Bm,Cm,
Dm,Zea,$ea,Gm,afa,Hm,Im,dfa,Jm,Km,Lm,efa,Mm,gfa,Pm,Qm,Rm,Sm,Tm,Um,hfa,Xm,ifa,jfa,Vm,Wm,kfa,lfa,Zm,mfa,Ym,$m,nfa,bn,ofa,rfa,cn,dn,sfa,ufa,vfa,xfa,wfa,yfa,fn,zfa,Ln,Pn,Qn,Rn,Sn,Cfa,Tn,Un,Vn,Dfa,Efa,Ffa,Wn,Hfa,Xn,Ifa,Jfa,Mfa,Lfa,Kfa,Nfa,Ofa,Pfa,Qfa,Rfa,Ufa,Sfa,Zn,ao,bo,co,$n,Vfa,Wfa,eo,go,Xfa,ho,io,jo,Zfa,lo,aga,cga,dga,ega,oo,qo,fga,gga,hga,so,iga,kga,jga,lga,mga,pga,to,uo,vo,wo,xo,yo,zo,Ao,qga,Bo,Co,Do,Eo,Fo,uga,rga,Io,tga,Jo,sga,Ho,Go,up,wga,wp,vp,Bp,Cp,Ep,zga,Dp,Hp,Aga,Ip,xga,Dga,Ega,Fga,Lp,Mp,Np,
Gga,Op,Pp,Qp,Rp,Hga,Sp,Tp,Up,Iga,Jga,Vp,Kga,Wp,Nga,Oga,Pga,Qga,Lga,Xp,Yp,Zp,$p,Sga,Tga,Rga,aq,Uga,Vga,Wga,eq,Xga,fq,gq,Zga,$ga,hq,aha,iq,jq,kq,lq,mq,nq,oq,bha,pq,qq,cha,eha,dha,rq,fha,gha,hha,sq,nr,or,pr,qr,rr,sr,iha,tr,ur,vr,jha,lha,mha,xr,zr,yr,Br,Cr,Dr,oha,Er,pha,Fr,Gr,Hr,rha,sha,vha,tha,wha,Aha,Ir,zha,xha,Jr,Kr,Bha,Lr,Cha,Mr,Eha,Dha,Fha,Gha,Qr,Hha,Iha,Jha,Rr,Sr,Kha,Tr,Lha,Mha,Oha,Sha,Ur,Tha,Uha,Vha,Wha,Xha,Xr,Yha,Zha,$ha,ds,cs,bs,aia,bia,cia,es,fs,gs,eia,ls,ms,ns,fia,os,hia,iia,jia,ps,rs,ts,xs,
ys,Bs,lia,nia,mia,oia,pia,Hs,qia,ria,Is,sia,tia,uia,via,Ms,Ks,Ns,Os,Ps,wia,xia,yia,Qs,bt,ct,zia,Aia,Bia,dt,Cia,et,ft,Dia,Eia,Fia,Gia,Hia,Iia,gt,ht,it,kt,Lia,lt,mt,Mia,Kia,jt,Nia,nt,ot,pt,rt,qt,Oia,Pia,Qia,tt,Sia,ut,Uia,Via,Wia,Xia,Yia,Zia,$ia,aja,xt,zt,At,cja,bja,dja,eja,Ct,fja,Dt,gja,hja,Et,Ft,Gt,ija,Ht,It,jja,Jt,Kt,Lt,Mt,Nt,Ot,Pt,Qt,kja,lja,mja,nja,Rt,oja,qja,pja,Tt,Ut,sja,rja,xja,wja,Vt,yja,zja,Aja,Cja,Bja,Dja,Wt,Eja,Fja,Yt,Gja,Hja,Ija,Jja,Zt,Kja,$t,Lja,au,bu,Nja,cu,Oja,du,eu,Pja,Qja,fu,hu,Sja,
iu,Rja,Tja,Uja,Vja,Xja,ju,Yja,mu,nu,$ja,aka,dka,eka,ou,pu,qu,ru,tu,uu,vu,wu,xu,yu,zu,Au,Bu,ika,hka,jka,lka,kka,nka,gka,mka,fka,Cu,Du,pka,qka,rka,Hu,Iu,Ju,Eu,tka,Ku,oka,vka,wka,uka,Lu,Mu,Nu,Ou,xka,ska,yka,Pu,zka,Aka,Bka,Cka,Dka,Gka,Hka,Ika,Jka,Kka,Nka,Su,Pka,Ru,Uu,Qka,Vu,Xu,Yu,Rka,Ska,jv,Tka,Uka,kv,Vka,wv,tv,uv,vv,zv,yv,Wka,Bv,Xka,Zka,Cv,$ka,ala,gla,bla,Gv,Hv,lla,Iv,Jv,Kv,nla,Nv,ola,pla,Ov,rla,Qv,Rv,Sv,Tv,sla,Vv,Wv,Xv,Yv,$v,aw,ula,vla,dw,ew,fw,gw,hw,iw,wla,xla,yla,zla,Ala,Bla,jw,Cla,qw,Dla,Ela,Fla,
rw,uw,vw,ww,zw,Aw,Bw,Hla,Ew,Fw,Gw,Ila,Jla,Hw,Kla,Lla,Jw,Tla,Ula,Vla,Kw,Wla,Xla,Mw,ama,$la,Ow,bma,Qw,Rw,Sw,Tw,Uw,Vw,Ww,Xw,Yw,Zw,$w,ax,bx,cx,dx,ex,fx,gx,hx,ix,jx,kx,lx,mx,nx,ox,px,qx,rx,sx,tx,ux,vx,wx,xx,yx,zx,Ax,Bx,Cx,Dx,Ex,Fx,Gx,Hx,Ix,Yx,Zx,$x,ay,by,cy,dy,ey,fy,gy,hy,iy,jy,ky,ly,my,ny,oy,py,qy,ry,sy,ty,uy,vy,wy,yy,zy,Ay,By,Cy,Dy,Ey,Fy,Gy,Hy,cma,Iy,Jy,Ky,Ly,My,Ny,Oy,Py,Qy,Ry,Ty,Uy,Vy,Wy,Xy,Yy,Zy,$y,az,bz,cz,dz,ez,fz,gz,hz,iz,jz,kz,lz,mz,nz,oz,pz,qz,rz,sz,tz,uz,vz,wz,xz,yz,zz,Az,Bz,Cz,Dz,Ez,Fz,Gz,Hz,
Iz,Jz,Kz,Lz,Mz,Nz,Oz,Pz,Qz,Rz,Sz,Tz,Uz,Vz,Wz,Xz,Yz,Zz,$z,aA,bA,cA,dA,eA,fA,gA,hA,iA,jA,kA,dma,lA,ema,mA,nA,fma,oA,gma,pA,qA,rA,sA,vA,wA,xA,hma,yA,zA,AA,ima,BA,CA,DA,EA,jma,FA,GA,HA,IA,JA,kma,KA,lma,LA,mma,MA,NA,nma,OA,PA,QA,oma,pma,qma,rma,RA,SA,sma,TA,tma,uma,vma,wma,xma,UA,VA,yma,zma,WA,XA,Ama,YA,Bma,Cma,ZA,Dma,Ema,Fma,Gma,$A,aB,bB,cB,Hma,Ima,dB,Jma,Kma,Lma,Mma,eB,Nma,Oma,Pma,Qma,Rma,Sma,Tma,Uma,Vma,Wma,fB,Xma,gB,hB,Yma,Zma,iB,$ma,ana,bna,cna,dna,ena,fna,gna,jB,hna,ina,jna,kB,kna,lna,lB,oB,mna,
pB,qB,nna,rB,ona,sB,pna,tB,uB,qna,rna,vB,sna,tna,wB,una,vna,wna,xna,yna,zna,Ana,Bna,Cna,Dna,xB,Ena,Fna,yB,Gna,zB,AB,Hna,Ina,BB,Jna,Kna,CB,Lna,DB,Mna,EB,FB,GB,HB,Nna,IB,JB,KB,LB,Ona,MB,NB,Pna,Qna,OB,PB,QB,Rna,RB,Sna,Tna,Una,SB,Vna,Wna,Xna,TB,Yna,Zna,UB,VB,$na,WB,aoa,boa,XB,coa,YB,doa,eoa,foa,$B,bC,hoa,goa,ioa,joa,hC,iC,jC,kC,noa,mC,nC,ooa,oC,pC,poa,koa,qC,soa,voa,rC,xoa,zoa,xC,Aoa,Boa,Doa,Hoa,Foa,Goa,Ioa,Coa,AC,zC,Joa,CC,DC,EC,Loa,Moa,Noa,Ooa,Poa,Qoa,KC,Roa,MC,Soa,Toa,NC,Voa,Woa,QC,SC,Xoa,Yoa,TC,UC,
VC,WC,$oa,XC,bpa,apa,fpa,ZC,gpa,kpa,ipa,jpa,lpa,mpa,opa,npa,rpa,aD,spa,dD,tpa,upa,cD,eD,wpa,xpa,Apa,iD,Bpa,Cpa,jD,kD,lD,nD,Epa,Gpa,tD,Hpa,Ipa,Jpa,Kpa,Lpa,Opa,Ppa,Qpa,Npa,Rpa,Tpa,Vpa,AD,Wpa,DD,BD,GD,HD,Ypa,aqa,MD,ND,OD,PD,eqa,RD,gqa,hqa,iqa,UD,kqa,lqa,jqa,mqa,nqa,oqa,pqa,XD,qqa,$D,tqa,uqa,rqa,vqa,wqa,zqa,yqa,dE,sqa,Bqa,Cqa,gE,Dqa,Eqa,iE,jE,Fqa,Hqa,lE,Iqa,Jqa,Lqa,Nqa,oE,Oqa,Pqa,Qqa,Rqa,Sqa,Tqa,Uqa,Vqa,qE,Wqa,sE,Yqa,Zqa,$qa,ara,bra,cra,xE,fra,ira,yE,jra,lra,era,mra,nra,ora,gra,hra,tE,dra,wE,kra,vE,uE,
pra,qra,rra,sra,tra,ura,Ara,vra,BE,CE,DE,Dra,Fra,Era,Bra,Gra,Ira,GE,Kra,Nra,JE,Mra,Xra,Ora,Wra,NE,Yra,asa,OE,ME,Zra,$ra,bsa,QE,dsa,esa,fsa,gsa,hsa,isa,jsa,csa,lsa,msa,nsa,osa,psa,ssa,SE,TE,UE,usa,VE,vsa,wsa,XE,YE,zsa,ysa,Asa,Csa,Esa,Dsa,Hsa,Lsa,Jsa,iF,Osa,Qsa,hF,Psa,jF,kF,Rsa,Ssa,Tsa,mF,Vsa,pF,oF,qF,rF,sF,Xsa,Ysa,uF,Zsa,vF,ata,bta,cta,eta,fta,dta,yF,hta,gta,ita,zF,kta,AF,mta,BF,ota,CF,nta,DF,EF,rta,xta,zta,wta,vta,yta,HF,Ata,Ita,Eta,Fta,Gta,qta,Rta,Tta,Qta,Wta,Pta,GF,Vta,Dta,Hta,Sta,Bta,tta,sta,uta,
JF,Ota,QF,fua,eua,jua,mua,lua,oua,SF,TF,qua,rua,sua,tua,uua,vua,wua,VF,yua,zua,Aua,Bua,Cua,Dua,Eua,Gua,Hua,eG,Jua,Lua,Kua,Mua,Oua,Pua,Tua,Rua,Vua,Uua,Xua,Wua,fG,$pa,eva,bva,gva,mG,iva,lva,mva,nva,tva,xva,yva,Ava,zva,Bva,sG,Dva,rG,wva,vva,oG,zG,yG,CG,DG,FG,Fva,GG,JG,KG,Gva,Hva,Jva,Kva,Lva,Mva,Nva,Ova,Pva,Qva,Rva,Sva,Tva,QG,Uva,Vva,Xva,Yva,Zva,$va,awa,bwa,ewa,fwa,SG,TG,gwa,UG,hwa,WG,jwa,iwa,YG,ZG,$G,aH,kwa,bH,lwa,mwa,nwa,cH,owa,swa,pwa,rwa,qwa,twa,dH,uwa,vwa,wwa,xwa,eH,zwa,Cwa,Bwa,fH,Dwa,gH,hH,iH,kH,
lH,Ewa,Fwa,Gwa,mH,Hwa,Iwa,nH,Jwa,oH,rH,tH,Lwa,Kwa,vH,Mwa,Nwa,wH,xH,yH,zH,CH,Pwa,DH,EH,FH,GH,Qwa,Rwa,JH,Swa,KH,Wwa,Ywa,$wa,bxa,dxa,MH,exa,NH,fxa,ixa,jxa,PH,lxa,RH,SH,TH,nxa,UH,VH,WH,oxa,XH,mxa,pxa,YH,rxa,qxa,ZH,txa,$H,aI,cI,uxa,vxa,eI,fI,hI,tI,sI,xxa,gI,Axa,Bxa,Exa,Fxa,Gxa,Ixa,Dxa,Jxa,Kxa,Lxa,uI,zxa,Cxa,vI,Pxa,Rxa,yI,Sxa,zI,Txa,wI,Uxa,AI,Vxa,Qxa,BI,Xxa,CI,bya,$xa,Zxa,Yxa,dya,EI,FI,GI,HI,II,JI,KI,iya,MI,jya,lya,kya,mya,nya,oya,qya,pya,rya,uya,vya,OI,PI,wya,xya,yya,zya,Aya,Cya,Dya,QI,Bya,RI,Gya,Iya,
SI,TI,UI,Jya,VI,WI,Kya,Lya,Mya,Nya,Oya,Pya,XI,YI,ZI,$I,aJ,bJ,cJ,dJ,eJ,fJ,gJ,Qya,hJ,Rya,Sya,Tya,Uya,iJ,jJ,kJ,lJ,Vya,mJ,nJ,oJ,Wya,pJ,qJ,rJ,sJ,tJ,uJ,vJ,wJ,xJ,Xya,yJ,zJ,AJ,Yya,BJ,CJ,DJ,EJ,Zya,FJ,GJ,$ya,HJ,aza,IJ,bza,KJ,LJ,cza,MJ,NJ,OJ,JJ,PJ,QJ,RJ,eza,gza,hza,SJ,iza,TJ,jza,VJ,kza,lza,mza,pza,qza,rza,sza,tza,uza,nza,fK,xza,yza,zza,Aza,oza,Cza,XJ,Dza,Eza,hK,Fza,iK,ZJ,Gza,YJ,Bza,jK,Jza,Iza,aK,bK,lK,kK,Kza,mK,Lza,nK,Nza,Mza,oK,pK,qK,rK,sK,Pza,Qza,Sza,Tza,uK,vK,Wza,wK,$za,bAa,dAa,eAa,yK,gAa,hAa,jAa,kAa,lAa,
mAa,nAa,oAa,DK,EK,pAa,rAa,qAa,sAa,tAa,uAa,IK,KK,LK,MK,NK,OK,vAa,PK,QK,JK,RK,SK,yAa,zAa,xAa,CAa,DAa,EAa,FAa,GAa,HAa,IAa,JAa,KAa,LAa,MAa,NAa,OAa,PAa,QAa,RAa,SAa,TAa,UAa,VAa,WAa,XAa,UK,VK,YAa,WK,XK,ZAa,$Aa,aBa,bBa,cBa,dBa,eBa,YK,fBa,gBa,hBa,iBa,ZK,jBa,kBa,$K,lBa,mBa,nBa,aL,oBa,cL,qBa,rBa,sBa,dL,eL,fL,gL,hL,vBa,iL,jL,lL,xBa,yBa,zBa,nL,pL,ABa,sL,tL,CBa,DBa,uL,EBa,vL,FBa,xL,yL,zL,GBa,HBa,IBa,AL,BBa,BL,CL,DL,EL,FL,GL,JBa,HL,IL,JL,KL,LL,ML,NL,OL,PL,LBa,MBa,OBa,PBa,UL,RL,VL,QBa,RBa,SBa,TBa,WL,XL,UBa,VBa,WBa,
SL,XBa,YBa,YL,ZBa,aCa,bCa,$L,aM,bM,cM,dM,eCa,gM,iM,hM,gCa,jM,hCa,iCa,kCa,jCa,mM,lCa,mCa,oCa,nCa,nM,pCa,sCa,oM,tCa,vCa,qCa,rCa,pM,uCa,xCa,yCa,ACa,zCa,rM,CCa,DCa,ECa,GCa,FCa,HCa,ICa,KCa,JCa,LCa,MCa,NCa,OCa,PCa,QCa,RCa,SCa,TCa,UCa,VCa,WCa,XCa,YCa,ZCa,$Ca,aDa,uM,bDa,vM,wM,dDa,eDa,xM,fDa,yM,gDa,zM,hDa,AM,iDa,jDa,kDa,lDa,BM,mDa,nDa,oDa,CM,DM,EM,FM,GM,pDa,HM,IM,JM,qDa,KM,rDa,sDa,tDa,LM,MM,uDa,NM,vDa,OM,PM,Rza,wDa,xDa,QM,yDa,RM,SM,TM,UM,VM,WM,XM,YM,zDa,ZM,$M,ADa,BDa,CDa,DDa,aN,fN,FDa,KDa,NDa,LDa,PDa,QDa,
ODa,SDa,TDa,UDa,oN,YDa,$Da,cEa,dEa,eEa,pN,gEa,hEa,lEa,qN,mEa,iEa,nEa,rN,oEa,rEa,qEa,vEa,sEa,sN,tN,BEa,EEa,DEa,IEa,GEa,KEa,HEa,MEa,LEa,CEa,NEa,OEa,CN,FEa,PEa,DN,QEa,REa,UEa,XEa,VEa,$Ea,hFa,gFa,aFa,iFa,cFa,dFa,bFa,mFa,oFa,qFa,uFa,xFa,yFa,AFa,CFa,EFa,DFa,MFa,GFa,FFa,NFa,QFa,RFa,SFa,TFa,JN,ZDa,WFa,UFa,LN,YFa,ZFa,ON,bGa,cGa,aGa,PN,dGa,QN,RN,FK,SN,XDa,TN,eGa,AAa,fGa,UN,gGa,hGa,iGa,VN,WN,jGa,XN,YN,ZN,$N,aO,kGa,lGa,bO,mGa,nGa,cO,oGa,dO,qM,eO,fO,pGa,gO,qGa,rGa,aEa,$Fa,hO,GK,tK,EN,sGa,tGa,iO,AEa,BN,uGa,KN,
XFa,tFa,sFa,TEa,FN,vFa,zFa,BFa,wEa,OFa,vGa,jFa,eFa,jO,bEa,xGa,wGa,SEa,wFa,yGa,PFa,GN,xEa,zEa,pEa,rFa,pFa,ZEa,WEa,kEa,jEa,fEa,lFa,fFa,HFa,tEa,uEa,KFa,LFa,IFa,JFa,nFa,BGa,zGa,kO,AGa,lO,gK,$J,vza,WJ,CGa,mO,nO,oO,uO,EGa,wO,GGa,HGa,IGa,JGa,LGa,KGa,MGa,NGa,zO,CO,OGa,PGa,RGa,QGa,SGa,TGa,UGa,VGa,WGa,XGa,EO,FO,$Ga,GO,HO,aHa,bHa,cHa,dHa,IO,eHa,JO,fHa,gHa,KO,MO,QO,hHa,RO,SO,TO,UO,VO,WO,XO,YO,ZO,$O,aP,iHa,jHa,bP,cP,dP,eP,fP,gP,kHa,lHa,hP,lP,oHa,pHa,mP,rHa,qHa,sHa,tHa,oP,pP,qP,Y,vHa,rP,AHa,EHa,FHa,GHa,PHa,SHa,
XHa,YHa,vIa,wIa,xIa,ZHa,$Ha,fIa,CIa,jIa,kIa,HIa,FIa,JIa,KIa,GIa,LIa,NJa,SIa,OJa,TIa,UIa,AP,QJa,SJa,UJa,TJa,RJa,ZIa,pJa,qJa,YJa,$Ja,sJa,tJa,vJa,wJa,xJa,gKa,zJa,CJa,JJa,pKa,kKa,lKa,rKa,uKa,tKa,vKa,wKa,EKa,xKa,DP,BKa,KKa,LKa,MKa,NKa,OKa,RKa,WKa,zLa,yLa,HP,IP,JP,KP,LP,MP,GLa,OP,NP,ILa,ELa,FLa,JLa,HLa,PP,KLa,Zpa,MLa,LLa,OLa,QLa,SLa,TLa,ULa,RLa,VLa,$La,ZLa,SP,bMa,cMa,dMa,eMa,UP,TP,fMa,gMa,hMa,jMa,WP,kMa,YP,$P,lMa,aQ,bQ,mMa,qMa,sMa,rMa,uMa,BMa,CMa,dQ,tMa,pMa,oMa,nMa,hQ,eQ,gQ,mQ,nQ,FMa,GMa,oQ,lQ,KMa,HMa,
IMa,LMa,pQ,qQ,NMa,OMa,tQ,uQ,vQ,wQ,xQ,PMa,QMa,RMa,yQ,zQ,BQ,TMa,UMa,AQ,VMa,YMa,ZMa,CQ,$Ma,FQ,aNa,GQ,IQ,cNa,HQ,JQ,dNa,fNa,gNa,hNa,LQ,MQ,RQ,kNa,OQ,SQ,UQ,lNa,VQ,QQ,TQ,mNa,WQ,nNa,XQ,oNa,NQ,PQ,iNa,jNa,YQ,pNa,qNa,rNa,ZQ,$Q,aR,sNa,bR,cR,tNa,dR,uNa,eR,fR,gR,vNa,wNa,xNa,yNa,zNa,hR,ANa,BNa,CNa,DNa,ENa,FNa,iR,jR,GNa,kR,KNa,LNa,MNa,NNa,ONa,mR,nR,lR,HNa,PNa,QNa,RNa,SNa,oR,pR,TNa,qR,rR,UNa,VNa,sR,WNa,XNa,aOa,bOa,YNa,ZNa,$Na,cOa,tR,uR,vR,dOa,eOa,wR,xR,fOa,yR,gOa,iOa,hOa,zR,jOa,kOa,lOa,mOa,nOa,oOa,qOa,rOa,AR,sOa,uOa,
wOa,vOa,DR,zMa,fQ,AOa,BOa,COa,DOa,EOa,FOa,cQ,CR,GOa,ER,LOa,MOa,NOa,OOa,FR,SOa,POa,QOa,UOa,VOa,WOa,XOa,TOa,YOa,GR,HR,IR,ZOa,$Oa,JR,aPa,bPa,cPa,KR,JOa,ePa,AMa,vMa,gPa,MR,OR,PR,QR,RR,SR,NR,hPa,jPa,VR,mPa,kPa,oPa,pPa,nPa,lPa,qPa,rPa,sPa,aS,tPa,uPa,wPa,xPa,EMa,bS,yPa,BPa,iQ,CPa,DPa,EPa,wMa,yMa,cS,dS,eS,fS,GPa,HPa,gS,IPa,hS,iS,JPa,jS,KPa,kS,LPa,lS,mS,nS,oS,NPa,OPa,pS,PPa,QPa,MPa,qS,RPa,TPa,VPa,UPa,SPa,iQa,fQa,lQa,GS,HS,WPa,gQa,dK,ES,KS,mQa,OS,oQa,wS,PS,vS,pQa,eQa,SS,TS,sQa,tQa,uQa,vQa,wQa,xQa,yQa,US,zQa,
EQa,DQa,AQa,CQa,BQa,VS,FQa,WS,GQa,HQa,JQa,KQa,LQa,QQa,aT,bT,TQa,cT,dT,UQa,XQa,YQa,ZQa,$Qa,eT,bRa,fRa,gRa,nRa,rRa,kRa,lRa,tRa,nT,uRa,wRa,vRa,xRa,pT,sT,yRa,oT,zRa,tT,ARa,ERa,BRa,HRa,DRa,XRa,fSa,MT,gSa,iSa,URa,AT,hSa,FT,NT,SRa,kSa,jSa,OT,xT,VRa,pSa,lSa,mSa,nSa,oSa,qSa,QT,rSa,tSa,uSa,ST,vSa,wT,CT,sSa,YRa,CRa,bSa,XT,DT,dU,KT,fU,gU,ISa,JSa,LT,iU,KSa,jU,LSa,ET,kU,TRa,MSa,ASa,BT,LRa,NSa,JRa,IRa,FRa,nU,WSa,YSa,ZSa,qU,sU,tU,rU,$Sa,vU,aTa,bTa,wU,dTa,xU,fTa,gTa,eTa,hTa,kTa,mTa,oTa,pTa,rTa,qTa,DU,sTa,vTa,wTa,
OU,yTa,PU,zTa,CTa,DTa,FTa,ETa,GTa,BTa,ITa,HTa,LTa,JTa,KTa,OTa,PTa,QTa,RTa,NTa,TTa,UTa,STa,MTa,VTa,WTa,XTa,YTa,ZTa,$Ta,bUa,cUa,aUa,QU,dUa,eUa,gUa,fUa,hUa,jUa,iUa,kUa,lUa,mUa,nUa,pUa,qUa,oUa,SU,sUa,tUa,UU,uUa,YU,ZU,$U,aV,bV,vUa,cV,wUa,AUa,dV,eV,BUa,CUa,EUa,DUa,FUa,GUa,HUa,fV,gV,IUa,KUa,LUa,MUa,kV,SUa,RUa,lV,UUa,nV,oV,pV,VUa,WUa,XUa,YUa,ZUa,qV,aVa,$Ua,bVa,cVa,rV,sV,dVa,fVa,gVa,hVa,tV,iVa,uV,jVa,mVa,vV,kVa,pVa,nVa,oVa,lVa,wV,tVa,rVa,sVa,uVa,xV,vVa,wVa,xVa,yV,yVa,zVa,AVa,BV,zV,BVa,CV,CVa,EV,FV,EVa,DV,
GVa,GV,IV,HVa,JV,KV,LV,IVa,LVa,KVa,NV,OV,PV,OVa,MVa,NVa,QV,PVa,TVa,RVa,QVa,SVa,RV,VVa,WVa,SV,XVa,YVa,TV,cWa,aWa,bWa,UV,dWa,$Va,eWa,VV,WV,fWa,gWa,hWa,XV,iWa,jWa,kWa,lWa,mWa,nWa,oWa,rWa,pWa,sWa,tWa,uWa,vWa,xWa,gW,hW,yWa,zWa,fW,DWa,CWa,EWa,FWa,GWa,HWa,IWa,JWa,FPa,KWa,LWa,RWa,lW,UWa,XWa,WWa,VWa,PWa,QWa,MWa,NWa,SWa,mW,nW,ZWa,IU,lTa,pW,$Wa,bXa,aXa,TWa,dXa,eXa,fXa,rW,gXa,yW,iXa,jXa,kXa,mXa,lXa,nXa,zW,AW,oXa,rXa,sXa,CW,qXa,tXa,uXa,pXa,DW,vXa,GW,wXa,xXa,FW,yXa,zXa,AXa,BXa,DXa,CXa,FXa,GXa,EXa,JXa,HXa,JW,KW,
KXa,NW,OW,LXa,NXa,QW,MXa,OXa,PXa,QXa,SXa,RXa,UXa,TXa,VXa,TW,WXa,XXa,YXa,UW,VW,$Xa,ZXa,YW,WW,XW,aYa,bYa,ZW,$W,dYa,eYa,cYa,fYa,gYa,hYa,jYa,lYa,kYa,aX,mYa,nYa,iYa,sYa,tYa,uYa,xYa,wYa,vYa,yYa,zYa,bX,cX,AYa,BYa,CYa,DYa,FYa,dX,fX,EYa,GYa,HYa,IYa,JYa,KYa,hX,LYa,MYa,PYa,iX,QYa,OYa,jX,kX,RYa,SYa,UYa,WYa,TYa,VYa,mX,XYa,ZYa,$Ya,bZa,cZa,nX,oX,dZa,YYa,fZa,eZa,pX,qX,rX,hZa,gZa,sX,tX,iZa,jZa,uX,kZa,lZa,mZa,vX,nZa,wX,oZa,xX,NZa,OZa,PZa,RZa,SZa,TZa,QZa,VZa,UZa,WZa,ZZa,BX,a_a,$Za,XZa,YZa,b_a,c_a,CX,DX,d_a,e_a,f_a,
g_a,h_a,i_a,k_a,l_a,t_a,o_a,p_a,m_a,w_a,IX,x_a,B_a,LX,C_a,y_a,HX,OX,NX,JX,PX,F_a,G_a,QX,KX,u_a,E_a,MX,z_a,D_a,I_a,EX,RX,J_a,K_a,A_a,SX,TX,L_a,UX,M_a,XX,YX,N_a,O_a,Q_a,R_a,P_a,ZX,$X,S_a,T_a,U_a,V_a,W_a,Y_a,$_a,Z_a,X_a,b0a,a0a,aY,bY,c0a,e0a,f0a,cY,d0a,g0a,h0a,i0a,eY,hY,gY,k0a,j0a,l0a,iY,jY,m0a,n0a,p0a,o0a,q0a,r0a,s0a,lY,t0a,u0a,v0a,w0a,x0a,y0a,A0a,B0a,C0a,z0a,D0a,E0a,F0a,G0a,H0a,pY,J0a,qY,L0a,rY,K0a,O0a,P0a,N0a,sY,Q0a,tY,uY,vY,R0a,wY,T0a,U0a,V0a,xY,W0a,X0a,Y0a,Z0a,$0a,b1a,S0a,c1a,yY,d1a,e1a,f1a,g1a,
AY,h1a,i1a,j1a,o1a,s1a,q1a,l1a,DY,k1a,r1a,FY,u1a,t1a,GY,w1a,x1a,y1a,A1a,B1a,z1a,C1a,FVa,KY,D1a,E1a,LY,G1a,F1a,H1a,O1a,PY,P1a,QY,R1a,SY,RY,S1a,I1a,TY,U1a,V1a,X1a,UY,Y1a,VY,$1a,Z1a,WY,M1a,NY,a2a,b2a,c2a,d2a,e2a,J1a,L1a,OY,h2a,i2a,XY,ZY,$Y,j2a,k2a,l2a,m2a,n2a,YY,f2a,o2a,p2a,t2a,g2a,v2a,z2a,dZ,A2a,B2a,x2a,fZ,C2a,D2a,u2a,E2a,y2a,F2a,gZ,eZ,G2a,I2a,H2a,cZ,K2a,jZ,L2a,hZ,kZ,iZ,lZ,M2a,N2a,O2a,R2a,Q2a,T2a,U2a,S2a,oZ,nZ,W2a,X2a,Y2a,Z2a,$2a,b3a,a3a,c3a,qZ,rZ,d3a,sZ,e3a,g3a,j3a,h3a,i3a,yZ,CZ,l3a,DZ,m3a,n3a,o3a,
EZ,FZ,GZ,q3a,r3a,p3a,u3a,v3a,w3a,HZ,IZ,x3a,y3a,z3a,jRa,qRa,A3a,C3a,B3a,D3a,E3a,KZ,F3a,G3a,MZ,NZ,LZ,H3a,uZ,I3a,J3a,K3a,L3a,M3a,N3a,O3a,PZ,R3a,T3a,V3a,Y3a,c4a,e4a,f4a,d4a,g4a,h4a,i4a,RZ,k4a,l4a,SZ,m4a,n4a,o4a,p4a,q4a,r4a,s4a,t4a,u4a,v4a,w4a,TZ,y4a,z4a,A4a,UZ,VZ,WZ,XZ,YZ,ZZ,$Z,B4a,a_,C4a,H4a,K4a,L4a,M4a,N4a,e_,f_,J4a,G4a,O4a,c_,D4a,P4a,b_,d_,E4a,F4a,g_,Q4a,R4a,I4a,S4a,T4a,X4a,U4a,Y4a,Z4a,V4a,W4a,$4a,a5a,c5a,b5a,h_,h5a,f5a,g5a,d5a,i5a,i_,e5a,j_,k_,j5a,k5a,l5a,l_,n5a,o5a,m_,p5a,n_,q5a,r5a,s5a,t5a,v5a,
w5a,D5a,z5a,u5a,F5a,G5a,A5a,B5a,y5a,C5a,p_,x5a,E5a,M5a,K5a,J5a,I5a,H5a,r_,N5a,tZ,O5a,s_,t_,P5a,Q5a,R5a,u_,S5a,AZ,T5a,U5a,wZ,xZ,Y5a,w_,y_,Z5a,$5a,A_,x_,v_,B_,W5a,V5a,X5a,C_,b6a,c6a,a6a,d6a,vZ,e6a,z_,f6a,g6a,h6a,i6a,D_,j6a,s3a,t3a,k6a,l6a,E_,o6a,m6a,p6a,r6a,F_,s6a,t6a,u6a,H_,J_,w6a,x6a,B6a,z6a,C6a,D6a,y6a,A6a,v6a,E6a,F6a,J6a,L6a,M6a,K_,N6a,j4a,O6a,P6a,L_,Q6a,R6a,S6a,T6a,U6a,N_,a7a,$6a,S_,b7a,Z6a,e7a,f7a,g7a,i7a,j7a,k7a,l7a,m7a,n7a,p7a,q7a,r7a,o7a,V_,M_,s7a,t7a,T_,v7a,h7a,U_,w7a,x7a,A7a,B7a,y7a,z7a,
E7a,D7a,F7a,G7a,C7a,H7a,I7a,W_,J7a,K7a,L7a,O7a,N7a,M7a,X_,P7a,R7a,S7a,T7a,$_,a0,x4a,U7a,V7a,Y7a,X7a,W7a,Z7a,a8a,b8a,$7a,b0,d8a,e8a,f8a,k8a,j8a,l8a,n8a,L5a,g8a,i8a,h8a,m8a,zZ,o_,G_,o8a,p8a,q8a,r8a,s8a,Q7a,c0,I_,t8a,q6a,e0,f0,u8a,g0,v8a,w8a,x8a,y8a,z8a,A8a,C8a,B8a,E8a,F8a,J8a,G8a,I8a,K8a,i0,O8a,M8a,N8a,R8a,S8a,T8a,U8a,V8a,h0,W8a,Q8a,L8a,j0,X8a,H8a,Y8a,k0,$8a,a9a,b9a,Z8a,l0,e9a,d9a,h9a,g9a,f9a,i9a,j9a,m0,k9a,l9a,p9a,m9a,n9a,o9a,q9a,r9a,s9a,u9a,t9a,v9a,w9a,x9a,z9a,B9a,A9a,C9a,y9a,D9a,F9a,H9a,E9a,I9a,
J9a,L9a,K9a,M9a,G9a,p0,N9a,O9a,P9a,R9a,T9a,U9a,W9a,X9a,Y9a,Z9a,b$a,c$a,a$a,d$a,e$a,f$a,h$a,g$a,k$a,t0,aZ,i$a,j$a,l$a,w0,n$a,m$a,o$a,q$a,r$a,u$a,s$a,x$a,x0,t$a,y$a,y0,A$a,A0,C0,B$a,z0,C$a,D0,F$a,E$a,z$a,G$a,H$a,I$a,B0,J$a,E0,K$a,D$a,$9a,v0,bZ,M$a,r2a,q2a,N$a,s2a,O$a,P$a,Q$a,R$a,G0,S$a,U$a,V$a,W$a,T$a,X$a,Y$a,H0,Z$a,$$a,aab,bab,I0,cCa,cab,dab,eab,K0,hab,iab,M0,jab,kab,gab,L0,J0,fab,P0,O0,Q0,N0,oab,qab,sab,tab,vab,mab,rab,wab,nab,xab,yab,Aab,R0,Bab,zab,S0,Cab,pab,Dab,uab,lab,U0,Jab,Gab,Kab,Hab,Fab,Lab,
Eab,Oab,V0,Pab,Rab,TL,Uab,Wab,Xab,Yab,Z0,Zab,K1a,abb,$0,o0,bbb,dbb,$ab,IY,T0,ebb,fbb,e1,u7a,Vab,d1,W0,ibb,jbb,lbb,kbb,cbb,b1,mbb,g1,nbb,p1a,pbb,obb,c8a,n0,qbb,v1a,rbb,T1a,JVa,a1,sbb,ubb,tbb,n1a,vbb,xbb,hbb,Sab,zbb,ybb,c1,X0,Abb,h1,EY,Cbb,Dbb,Q1a,Ebb,Fbb,Gbb,m1a,f1,Z_,Hbb,Sbb,Nbb,Ubb,Mbb,Vbb,Lbb,j1,JY,$bb,Wbb,Ybb,Xbb,bcb,m1,n1,ecb,dcb,ccb,p1,Rbb,u1,gcb,t1,o1,icb,kcb,lcb,Obb,jcb,x1,mcb,Qbb,r1,fcb,q1,pcb,l1,qcb,scb,tcb,rcb,A1,hcb,B1,C1,ucb,s1,acb,ocb,ncb,vcb,wcb,xcb,ycb,v1,zcb,w1,Acb,Ccb,k1,D1,Zbb,Dcb,
Ecb,Pbb,z1,y1,Fcb,P2a,Gcb,Hcb,Icb,Jcb,E1,Lcb,Pcb,Scb,Ocb,Kcb,adb,bdb,cdb,edb,ddb,F1,G1,gdb,hdb,idb,wCa,fdb,fCa,kdb,jdb,H1,mdb,ldb,ndb,I1,J1,odb,K1,HN,pdb,MN,VFa,qdb,yEa,kM,lM,rdb,sdb,tdb,L1,vdb,wdb,M1,O1,P1,zdb,Adb,Q1,Bdb,xdb,ydb,Cdb,Ddb,Edb,Fdb,R1,Gdb,wAa,sM,Hdb,Idb,BAa,TK,Jdb,Kdb,Ldb,S1,Odb,Ndb,Pdb,T1,U1,Qdb,Rdb,N1,Sdb,Tdb,Udb,V1,W1,Vdb,X1,Y1,Wdb,Z1,$1,Xdb,a2,b2,Ydb,Zdb,BCa,c2,$db,beb,aeb,d2,e2,f2,ceb,deb,eeb,feb,geb,heb,ieb,keb,h2,jeb,leb,meb,neb,oeb,seb,peb,qeb,reb,ueb,web,xeb,yeb,veb,i2,zeb,
Aeb,Beb,Ceb,Deb,k2,Eeb,l2,m2,n2,Feb,Geb,Ieb,Jeb,Keb,Leb,Neb,Meb,Oeb,o2,p2,Reb,Peb,Qeb,q2,Teb,Ueb,r2,s2,Veb,t2,Xeb,u2,Yeb,Zeb,$eb,v2,w2,x2,afb,bfb,cfb,ffb,efb,y2,gfb,hfb,ifb,WDa,dfb,jfb,mfb,nfb,pfb,aaa,ka;ca=
g.da=
baa=
caa=
la=
daa=
na=
g.u=
eaa=
g.oa=
pa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.w=
ta=
va=
za=
g.z=
g.Aa=function(a){a.j=0};
g.Ba=
g.Ca=
g.Da=
g.Ea=
g.Fa=
gaa=
haa=
Ga=
Ha=
iaa=
jaa=
g.G=
g.Ia=
Ka=
kaa=
Na=
Oa=function(a){return a?a:Array.prototype.fill};
Qa=
laa=
Ra=function(a){return a?a:function(b,c){return laa(this,b,c).i}};
g.Ua=
Xa=
g.Va=
Ya=
g.bb=
g.cb=
g.fb=
naa=
oaa=
g.jb=
g.kb=
g.nb=function(){return Date.now()};
g.ob=
qb=function(a){return a};
paa=function(a){this.j=a};
sb=
tb=function(a,b){sb.call(this,a,3,b)};
ub=
g.vb=
g.wb=
g.I=
g.M=
yb=
zb=
qaa=function(){};
g.Ab=
g.Bb=
raa=
g.Db=
Cb=
g.Fb=
g.Gb=function(a,b){return 0<=saa(a,b)};
taa=
g.Ib=
g.Hb=
g.Jb=
uaa=
g.Kb=
g.Lb=
g.Nb=
g.Qb=
Ob=
vaa=
g.Ub=
Vb=
waa=
g.Yb=
xaa=
g.Zb=
Sb=
yaa=
g.$b=
g.dc=
zaa=
Aaa=
Caa=
Baa=
Daa=
fc=
Eaa=
g.hc=function(a){return/^[\s\xa0]*$/.test(a)};
ic=
g.jc=
kc=
g.oc=
mc=
g.pc=
xc=
yc=
Ac=
Bc=function(){return Ac()?!1:yc("Opera")};
Cc=
Gc=
Maa=
Hc=
Lc=
Ic=
Naa=
Oaa=
Paa=
Qaa=
Mc=
Raa=function(){return Mc()?"Android"===uc.platform:yc("Android")};
Nc=
Oc=
Pc=function(){return Mc()?"macOS"===uc.platform:yc("Macintosh")};
Saa=
Qc=
Rc=
Uaa=
Vaa=
g.Tc=
g.Wc=
Xaa=
Yc=
$c=function(a){return!(!a||!a[Yaa])};
$aa=
ad=
g.bd=
g.cd=
dd=
g.ed=
aba=
g.fd=
bba=
g.hd=
g.id=
g.jd=
g.kd=
md=
cba=
g.nd=
g.dba=
g.od=
g.pd=
g.qd=
g.rd=
g.vd=
wd=function(a){this.src=a;this.listeners={};this.j=0};
g.xd=
yd=
g.Bd=
fba=
gba=
zd=
lba=
Fd=
iba=
kba=
Dd=
Cd=
g.Kd=
Nd=
Od=
mba=
Pd=
g.Rd=function(){};
nba=
Sd=
Td=
oba=
Vd=
g.Wd=
Xd=
Zd=
g.$d=function(a){this.j=a};
g.ae=function(a){return a instanceof g.$d&&a.constructor===g.$d?a.j:"type_error:TrustedResourceUrl"};
be=function(a){var b=Vd();a=b?b.createScriptURL(a):a;return new g.$d(a,rba)};
g.he=function(a){this.j=a};
g.ie=function(a){return a instanceof g.he&&a.constructor===g.he?a.j:"type_error:SafeUrl"};
g.ke=
vba=
g.le=function(a){this.j=a};
me=function(a){return a instanceof g.le&&a.constructor===g.le?a.j:"type_error:SafeStyle"};
Cba=
Aba=
Bba=
g.se=function(a){this.j=a};
g.te=
Eba=
Fba=
g.ue=
ve=function(){};
Hba=
Iba=function(a){return me(a)};
g.Kba=
Lba=
Mba=
g.we=
g.xe=
ye=
g.Ae=
Be=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Ie=function(a,b){this.width=a;this.height=b};
g.Je=
g.Ke=function(a){return encodeURIComponent(String(a))};
Le=
g.Me=function(a){return a=ic(a)};
g.Ne=
Oe=
Qe=
Nba=
Oba=
Pba=
Qba=
Ue=
Ve=
g.We=
g.$e=
g.af=
g.Ze=
ff=
Tba=
Vba=
Uba=
jf=
pf=
Wba=
g.qf=function(a){return of(document,a)};
of=
g.rf=
g.sf=function(a,b){a.appendChild(b)};
g.tf=
uf=
g.vf=
g.zf=
g.Af=
Te=
g.Bf=
Hf=
Yba=
Jf=
If=
Re=
Lf=
Zba=
Mf=
Nf=function(){this.B=this.j=null};
Of=function(){this.next=this.scope=this.Ds=null};
g.Xf=
$ba=
bca=
g.Zf=
dca=
$f=
ag=
bg=
g.gca=
hca=
jca=
dg=
kca=
cg=
oca=
Yf=
fca=
qca=
nca=
lca=
mca=
rca=
pca=
eg=function(a){yb.call(this,a)};
ica=function(a,b,c){this.promise=a;this.resolve=b;this.reject=c};
g.fg=
g.gg=
mg=
g.ng=
tca=
uca=
vca=
wca=function(a){this.j=a;this.j.AG("/client_streamz/po/w/rl",{Ye:3,Xe:"mn"},{Ye:2,Xe:"ac"},{Ye:2,Xe:"sc"},{Ye:3,Xe:"rk"})};
xca=function(a){this.j=a;this.j.AG("/client_streamz/po/w/el",{Ye:3,Xe:"en"},{Ye:3,Xe:"rk"})};
yca=function(a){this.j=a;this.j.Bk("/client_streamz/po/w/cec",{Ye:2,Xe:"ec"},{Ye:3,Xe:"rk"})};
zca=function(a){this.j=a;this.j.Bk("/client_streamz/po/w/csc",{Ye:2,Xe:"cs"},{Ye:3,Xe:"rk"})};
Aca=function(a){this.j=a;this.j.Bk("/client_streamz/po/w/ctav",{Ye:3,Xe:"av"},{Ye:3,Xe:"rk"})};
Bca=function(a){this.j=a;this.j.Bk("/client_streamz/po/w/cwsc",{Ye:3,Xe:"su"},{Ye:3,Xe:"rk"})};
og=function(){throw Error("Invalid UTF8");};
Cca=
Gca=
Hca=
Ica=
g.pg=
g.qg=
g.rg=
Nca=
sg=
Mca=
Jca=
Pca=
Rca=
Tca=
ug=
vg=
Wca=
xg=
yg=
Yca=
Ag=
zg=
Zca=
Bg=
$ca=
Cg=
Dg=
Rg=
ada=
Sg=
bda=
cda=
Tg=
Og=
dda=
Vg=
Ug=
Wg=
Xg=
Yg=
Zg=
$g=
eda=
gda=
bh=
hda=
ida=
ch=
eh=
vh=
kda=
lda=function(a,b){this.B=a>>>0;this.j=b>>>0};
nda=function(a){if(!a)return mda||(mda=new lda(0,0));if(!/^\d+$/.test(a))return null;Tg(a);return new lda(Pg,Qg)};
oda=
qda=
wh=function(){this.j=[]};
rda=
xh=
sda=
yh=
tda=
zh=
Ah=
uda=
Bh=
Ch=
Dh=
vda=
Gh=
wda=
xda=function(a,b){Fh(b,(a|0)&-14591)};
Ih=
Jh=
Kh=
zda=
Lh=
Mh=
Nh=
Oh=
Ada=
Bda=
Qh=
Rh=
Cda=
Dda=
Eda=
Fda=
Sh=
ni=
oi=
Hda=
pi=function(a){return null==a?a:Hda(a)};
qi=
ri=
Jda=
ui=
vi=
Kda=
Lda=
ti=
wi=
Ida=
si=
xi=
Mda=
Nda=
Oda=
yi=
zi=
Ai=
Bi=
Pda=
Wi=
Yi=
N=
Sda=
Rda=
Uda=
Vda=
Zi=
Wda=
Xda=
aj=
bj=
dj=
cj=
fj=
ej=
gj=
jj=
mj=
Zda=
$da=
lj=
aea=function(a){return Mh(a,!0,!0,!0)};
bea=function(a){return Mh(a,!0,!0,!1)};
yj=
zj=
Aj=
Cj=
Bj=
cea=function(a){return a};
dea=
Ej=
Fj=
Gj=
Dj=
Hj=
Yda=
g.Ij=
eea=
fea=
Jj=
Kj=
Lj=
kj=
Mj=
Nj=
gea=
Oj=
hea=function(a,b,c,d,e){return mj(a,b,Ai,c,d,e)};
iea=
Pj=
jea=
Qj=
Rj=
kea=
Sj=
lea=
g.Tj=
Uj=
mea=
Vj=function(a,b,c){return fj(a,b,null==c?c:Eda(c))};
Wj=function(a,b,c){return fj(a,b,pi(c))};
Xj=
Yj=function(a,b,c){return fj(a,b,ui(c))};
Zj=
xk=function(a,b,c){return fj(a,b,Rh(c))};
O=
yk=
zk=
S=
Ak=
T=
nea=
Bk=
Ck=
Dk=
Jk=
sea=
Kk=function(){};
uea=
wea=
tea=
vea=
Lk=
Ek=
Mk=
xea=
yea=
Ok=
Cea=
Dea=function(a){return a.WK};
Eea=
Qk=
Fea=
Gea=
Fk=
Hea=
Bea=
Tk=function(a,b){return new Ch(a,b,!1,!1)};
Uk=
Vk=
Wk=
Xk=
Yk=function(a,b,c){b=qi(b);null!=b&&null!=b&&(Ah(a,c,0),sda(a.j,b))};
Jea=
Kea=
yl=
Lea=
zl=
Al=function(a){this.ea=N(a)};
Bl=function(a){this.ea=N(a)};
Cl=function(a){this.ea=N(a)};
Dl=function(a){this.ea=N(a)};
El=function(a){this.ea=N(a)};
Fl=function(a){this.ea=N(a)};
g.Mea=
Nea=
Oea=
Qea=
Pea=
Rea=
Il=
Jl=
Kl=
Tea=
Uea=
Vea=
Ll=function(a){this.ea=N(a)};
Ml=
Nl=function(a){this.ea=N(a)};
Ol=function(a){this.ea=N(a)};
g.Pl=
g.Ql=
Rl=
Sl=
g.Ul=
g.Vl=
g.Wea=
Xea=
Wl=
Yea=
Bm=
Cm=
Dm=
Zea=
g.Em=
$ea=
g.Fm=
Gm=
afa=
Hm=
Im=
dfa=
Jm=function(a){this.ea=N(a)};
Km=function(a){this.ea=N(a)};
Lm=function(a){this.ea=N(a)};
efa=
Mm=function(a){this.ea=N(a)};
gfa=
Pm=function(a){this.ea=N(a)};
Qm=function(a){this.ea=N(a)};
Rm=function(a){this.ea=N(a,4)};
Sm=function(a){this.ea=N(a,35)};
Tm=function(a){this.ea=N(a,19)};
Um=
hfa=function(a){this.ea=N(a)};
Xm=
ifa=
jfa=
Vm=
Wm=
kfa=function(a,b){gj(Zm(a),Mm,11)&&(a=$m(a),S(a,1,b))};
lfa=
Zm=
mfa=
Ym=
$m=
g.an=
nfa=function(){};
bn=
ofa=
rfa=
cn=function(){};
dn=function(){};
sfa=
g.en=
ufa=
vfa=
xfa=
wfa=
yfa=
fn=
zfa=
Ln=
g.Kn=
g.Mn=
g.Nn=
g.Bfa=
g.On=
Pn=function(){};
Qn=
Rn=
Sn=
Cfa=
Tn=
Un=function(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()};
Vn=
Dfa=function(){};
Efa=
Ffa=
Wn=
Hfa=
Xn=
Ifa=
Jfa=
Mfa=
Lfa=
Kfa=
Nfa=
Ofa=
Pfa=function(a){this.j=a;this.j.AG("/client_streamz/bg/fil",{Ye:3,Xe:"rk"},{Ye:3,Xe:"ke"})};
Qfa=function(a){this.j=a;this.j.Bk("/client_streamz/bg/fsc",{Ye:3,Xe:"rk"},{Ye:3,Xe:"ke"})};
Rfa=
Ufa=
Sfa=
Zn=
ao=
bo=function(){};
co=
$n=
Vfa=function(a){this.ea=N(a)};
Wfa=function(a){this.ea=N(a)};
eo=
g.fo=
go=
Xfa=function(){};
ho=function(a){this.j=a};
io=function(a){this.Fe=a};
jo=
Zfa=
g.ko=
lo=
aga=
cga=
dga=
g.no=
ega=
oo=
g.po=
qo=
fga=
gga=
g.ro=
hga=
so=
iga=function(){so.instance||(so.instance=new so);return so.instance};
kga=
jga=
lga=
mga=
pga=
to=function(a){this.ea=N(a)};
uo=function(a){this.ea=N(a)};
vo=function(a){this.ea=N(a)};
wo=function(a,b,c){this.client=a;this.cj=b;this.j=c};
xo=function(a){this.ea=N(a)};
yo=function(a,b,c){this.j=a;this.C=b;this.B=c};
zo=
Ao=
qga=
Bo=function(a){this.ea=N(a)};
Co=function(a){this.ea=N(a)};
Do=function(a){this.ea=N(a)};
Eo=function(a){this.ea=N(a)};
Fo=
uga=
rga=
Io=
tga=
Jo=
sga=function(a,b){for(var c=0;c<a.C.length;c++)a.C[c](b)};
Ho=function(a,b){for(var c=0;c<a.G.length;c++)a.G[c](b)};
Go=
g.tp=
up=
wga=
wp=
vp=
g.xp=
g.yp=
g.zp=
g.Ap=
Bp=
g.Fp=function(a,b,c){a.B.set(b,c)};
g.Gp=
Cp=
Ep=
zga=
Dp=
Hp=
Aga=
g.Bga=
Ip=
xga=
g.Cga=
g.Jp=
g.Kp=
Dga=
Ega=
Fga=
Lp=
Mp=
Np=
Gga=
Op=
Pp=
Qp=
Rp=
Hga=
Sp=
Tp=
Up=
Iga=
Jga=
Vp=
Kga=
Wp=
Nga=
Oga=
Pga=
Qga=
Lga=
Xp=
Yp=
Zp=
$p=
Sga=
Tga=
Rga=
aq=
Uga=
Vga=
Wga=
eq=
Xga=
fq=function(a){yb.call(this,a);this.name="TimerCancelledError"};
gq=
Zga=
$ga=
hq=
aha=
iq=
jq=
kq=
lq=
mq=function(a,b,c){jq.call(this,a);this.K=b;this.C="f";this.B="z";kq(this,c)};
nq=
oq=
bha=
pq=
qq=
cha=
eha=
dha=
rq=
fha=
gha=
hha=
sq=
nr=function(){this.B=null;this.j=!1};
or=
pr=function(){nr.call(this)};
qr=
rr=function(){this.j={};this.B=!0;this.C={}};
sr=
iha=
tr=
ur=
vr=
jha=
lha=
mha=function(){this.j=this.xt=null};
xr=function(){};
zr=
yr=
Br=
Cr=
Dr=
oha=function(){};
Er=
pha=
Fr=
Gr=
Hr=
rha=
sha=
vha=
tha=
wha=
Aha=
Ir=
zha=function(a,b,c){this.j=a;this.B=b;this.C=c};
xha=
Jr=
Kr=
Bha=
Lr=
Cha=
Mr=function(a,b){this.j=a;this.depth=b};
Eha=
Dha=
Fha=
Gha=
Qr=
Hha=
Iha=
Jha=function(){};
Rr=
Sr=function(a){this.ea=N(a)};
Kha=
Tr=
Lha=
Mha=
Oha=
Sha=
Ur=function(){return Er(Sha)};
Tha=
Uha=
Vha=
Wha=
Xha=
Xr=
Yha=
Zha=
$ha=
ds=
cs=
bs=
aia=
bia=
cia=function(a,b){return $ha(a,b)};
es=function(a,b){return ds(a,b)};
fs=
gs=
eia=
ls=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
ms=
ns=
fia=
os=
hia=
iia=
jia=
ps=
g.qs=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
rs=
g.us=
ts=
g.ws=
xs=
ys=
g.As=
Bs=
lia=
g.Cs=
nia=
g.Ds=
mia=
oia=
g.Es=
g.zs=
g.Fs=
pia=
g.Gs=
Hs=
qia=
ria=
Is=
sia=
tia=
uia=
via=
Ms=
Ks=function(){return Er(tia)};
Ns=
Os=
Ps=
wia=
xia=
yia=
Qs=
bt=
ct=
zia=
Aia=
Bia=
dt=
Cia=
et=
ft=
Dia=
Eia=
Fia=
Gia=
Hia=function(){this.j=0};
Iia=
gt=
ht=
it=function(a,b){return Kia(a,function(c){return c.j},void 0===b?!0:b)};
kt=function(a,b){return jt(a,b,function(c){return c.j})};
Lia=
lt=function(a,b){return jt(a,b,function(c){return c.C})};
mt=
Mia=
Kia=
jt=
Nia=
nt=
ot=
pt=
rt=
qt=
Oia=
Pia=
Qia=
tt=
Sia=
ut=
Uia=
Via=
Wia=
Xia=
Yia=
g.vt=function(){};
g.wt=
Zia=
$ia=
aja=
xt=
zt=
At=
cja=
bja=
dja=function(){this.B=this.j=""};
eja=function(){};
Ct=
fja=
Dt=
gja=
hja=
Et=function(){this.j=this.B=0};
Ft=
Gt=
ija=function(){this.C=!1};
Ht=
It=
jja=function(){};
Jt=function(){};
Kt=function(a,b,c,d){bt.call(this,a,b,c,d)};
Lt=
Mt=
Nt=
Ot=
Pt=
Qt=
kja=
lja=
mja=
nja=
Rt=
oja=
qja=
pja=
Tt=
Ut=
sja=
rja=
xja=
wja=
Vt=
yja=function(a){g.bd(a.j,function(b){1E5<b.C||++b.C})};
zja=function(a){g.bd(a.j,function(b){1E5<b.j||++b.j})};
Aja=function(a){g.bd(a.j,function(b){1E5<b.j||++b.j})};
Cja=function(a){g.bd(a.j,function(b){1E5<b.B||++b.B})};
Bja=
Dja=function(){this.j=[];this.B=[]};
Wt=
Eja=
Fja=
Yt=
Gja=
Hja=
Ija=
Jja=
Zt=function(){this.j=this.B=null};
Kja=
$t=
Lja=
au=
bu=
Nja=
cu=
Oja=
du=function(a){a=void 0===a?Ar:a;ct.call(this,new Os(a,2))};
eu=
Pja=
Qja=function(){};
fu=
hu=
Sja=
iu=
Rja=
Tja=
Uja=
Vja=
Xja=
ju=
Yja=
mu=
nu=
$ja=
aka=
dka=
eka=
ou=
pu=function(){};
qu=function(a){Ht.call(this,"fully_viewable_audible_half_duration_impression",a)};
ru=function(a){this.j=a};
tu=
uu=function(a){It.call(this,"measurable_impression",a)};
vu=function(){ru.apply(this,arguments)};
wu=function(a,b,c){Lt.call(this,a,b,c)};
xu=function(a){a=void 0===a?Ar:a;ct.call(this,new Os(a,2))};
yu=function(a,b,c){Lt.call(this,a,b,c)};
zu=
Au=
Bu=
ika=
hka=
jka=
lka=
kka=
nka=
gka=
mka=
fka=
Cu=
Du=
pka=
qka=
rka=
Hu=
Iu=
Ju=
Eu=
tka=
Ku=
oka=
vka=
wka=
uka=
Lu=function(a){Ht.call(this,"audio_audible",a)};
Mu=
Nu=function(){ru.apply(this,arguments)};
Ou=function(){};
xka=function(a){this.j=a};
ska=
yka=
Pu=
zka=
Aka=
Bka=
Cka=
Dka=
Gka=
Hka=
Ika=
Jka=
Kka=
Nka=
g.Qu=
Su=
Pka=
Ru=
Uu=
Qka=
Vu=
Xu=
Yu=
g.dv=
g.ev=
Rka=
Ska=
g.fv=
g.gv=
g.hv=
g.iv=
jv=
Tka=function(a,b){return new jv(a,b)};
Uka=
kv=
g.lv=
g.mv=
g.nv=
g.ov=
g.pv=
g.qv=
g.rv=
Vka=
wv=
tv=function(a){this.B=a};
uv=function(a){this.B=a};
vv=
g.xv=
zv=
yv=
g.Av=
Wka=
Bv=
Xka=
Zka=
Cv=
$ka=
ala=
gla=
bla=
g.Fv=
Gv=function(a,b,c,d,e,f,h,l){this.j=a;this.C=b;this.x1=c;this.y1=d;this.x2=e;this.y2=f;this.B=h;this.D=l};
Hv=
lla=
Iv=
Jv=
Kv=
g.Lv=
nla=
g.Mv=function(a){this.j=a};
Nv=function(a){this.j=a};
ola=function(a){this.data=a};
pla=
Ov=function(a){this.j=a};
g.qla=
g.Pv=function(a){this.j=a};
rla=function(){};
Qv=function(){};
Rv=function(a){this.j=a;this.B=null};
Sv=
Tv=function(){var a=null;try{a=g.Sa.localStorage||null}catch(b){}Rv.call(this,a)};
sla=
Vv=
Wv=
Xv=
Yv=
g.Zv=
$v=function(a,b){this.j=a;this.B=b};
aw=
ula=function(){aw.apply(this,arguments)};
g.bw=function(){};
vla=
dw=function(a){for(var b=a.length;0<=--b;)a[b]=0};
ew=
fw=
gw=
hw=
iw=
wla=
xla=
yla=
zla=
Ala=
Bla=
jw=
Cla=
qw=
Dla=
Ela=
Fla=
rw=
uw=
vw=
ww=
zw=
Aw=
Bw=
Hla=
Ew=
Fw=
Gw=
Ila=
Jla=
Hw=function(a,b,c,d,e){this.R6=a;this.n8=b;this.F8=c;this.m8=d;this.func=e};
Kla=
Lla=
Jw=
Tla=
Ula=
Vla=
Kw=
Wla=
Xla=
Mw=
ama=
g.Nw=
$la=
Ow=function(a){this.ea=N(a)};
bma=function(a){var b=a.split(""),c=[969830267,-1064223757,
60435517,613980870,515099195,b,
905165406,"/,)};",-1064223757,null,792846863,1925710081,-1411730935,192094972,868034284,
443109525,806663486,-1970905735,-22325417,b,
-1503367854,1620260404,1028691315,42860647,

function(d,e){e.push(d)},
1976305213,"/}}'",-1894407359,34023286,311595090,-775149980,1779378318,
184997359,

function(d){for(var e=d.length;e;)d.push(d.splice(--e,1)[0])},
1418307627,1307673292,1941588896,'\'"/"(,',null,-1589471364,698674406,171819214,null,"case",-1389811366,-875807932,-1332417600,1325178451,
1914690791,-1009233368,-1290828196,
888209661,
-1258521258,function(d){d.reverse()},
-1589471364,-449011893,-838397855,'\'"/"(,',973816613,1028691315,-361842601,-1906675849,
1818036548,-4499648,1465581804,950736507,372419866,133779620,1981703547,-1941434781,1158132836,-854232230,b,1533143334,1127579618,
-527341799,-878460892];c[11]=c;c[47]=c;c[51]=c;try{try{-3<=c[81]&&(0>c[53]?(((0,c[74])(c[11],c[26]),c[Math.pow(8,3)+165-589])(c[51]),c[16])(c[43],c[56]):(((0,c[88])(c[12],c[68]),c[16])(c[43],c[9]),c[88])(c[71],c[39])),0!=c[-50544+Math.pow(5,3)- -50436]&&(0,c[61])(c[5],c[40]),4==c[Math.pow(4,5)-1188+204]&&((((0,c[62])((0,c[50])((0,c[49])(),c[38],c[5]),c[50],(0,c[27])(),c[38],c[68]),(0,c[50])((0,c[27])(),c[38],c[5]),c[50])((0,c[27])(),c[38],c[84]),c[88])(c[32],c[68]),1)||((0,c[83])(c[68],c[70]),((0,c[16])(c[84],
c[135-57%Math.pow(6,3)]),c[88])(c[30],c[37471+-109*Math.pow(7,3)]),(0,c[61])(c[5],c[8]),c[25])(c[5])}catch(d){(0,c[88])(c[66],c[68]),(0,c[25])(c[79]),(0,c[61])(c[39],c[36])}try{7===c[new Date("1970-01-01T06:30:45.000+06:30")/1E3]?((((((0,c[50])((0,c[29])(),c[38],c[84]),(0,c[61])(c[84],c[31]),c[50])((0,c[49])(),c[38],c[68]),c[50])((0,c[27])(),c[38],c[68]),c[33])(c[new Date("1969-12-31T20:45:39.000-03:15")/1E3],c[55]),(0,c[88])(c[86],c[84]),c[88])(c[20],c[39]),c[50])((0,c[29])(),c[38],c[84])<<(0,c[50])((0,c[49])(),
c[38],c[5]):((((((0,c[25])(c[68]),c[33])(c[39],c[4]),(0,c[56])(c[0],c[86]),c[28])(c[34],c[77]),c[41])(c[Math.pow(2,1)-22386+22426],c[52]),c[31])((0,c[19])(c[1],c[84]),c[51],(0,c[82])(c[11+Math.pow(7,4)+new Date("1969-12-31T19:20:42.000-04:00")/1E3],c[15]),c[37]),c[8])(c[2],c[67])}catch(d){(0,c[371%Math.pow(1,1)- -79])(c[77],c[83])}try{c[63]>-166+170%Math.pow(6,4)&&(-1!==c[73]&&(((0,c[43])(c[33],c[69]),(0,c[57])(c[79],c[Math.pow(8,2)+41+-101]),c[11])(c[75],c[65]),1)||(0,c[51])((0,c[1318-161*Math.pow(8,
1)])(c[31],c[50]),c[56],(0,c[11])(c[75],c[26]),c[30],c[3],c[81])),-3<c[83]&&((0,c[56])(((((0,c[56])((0,c[2])(c[75]),c[35],c[22],c[67]),c[30])(c[0],c[50]),c[68])((0,c[69])(),c[80],c[22]),c[30])(c[5],c[75]),c[30],c[64],c[50]),1)||(0,c[56])((((((0,c[11])(c[50],c[10]),c[58])(c[52],c[39]),c[68])((0,c[69])(),c[80],c[195%Math.pow(8,3)+-114]),c[35])(c[81],c[76]),c[30])(c[55],c[50]),c[11],c[50],c[42]),3!==c[7]&&((0,c[11])(c[39],c[16]),[])||(0,c[30])(c[1],c[81]),c[42]<-4-Math.pow(6,3)%213?((((((((0,c[35])(c[81],
c[77]),c[57])(c[79],c[73]),c[56])((0,c[70])(c[50]),c[85],c[50],c[46]),(0,c[56])((0,c[11])(c[50],c[71]),c[11],c[75],c[29]),c[12])(c[81]),c[new Date("1969-12-31T14:00:25.000-10:00")/1E3])(c[79]),c[80])(c[41],c[50]),(0,c[34])(c[16],c[74]),(0,c[6])(c[16],c[91]),c[19])(c[83],c[38]),c[65])(c[83],c[16]):((((0,c[66])((0,c[54])((0,c[53])(),c[42],c[8]),c[55],c[9],c[41]),c[10+Math.pow(1,4)- -55])(((0,c[54])((0,c[56])(),c[42],c[41]),c[37])(c[43],c[79]),c[54],(0,c[53])(),c[42],c[8]),c[77])((0,c[55])(c[17],c[72]),
c[54],(0,c[66])((0,c[66])((0,c[55])(c[50],c[8]),c[55],c[73],c[43]),c[65],c[8],c[63]),(0,c[88])(),c[42],c[41]),c[66])(((0,c[54])((0,c[88])(),c[42],c[8]),c[65])(c[-261+38*Math.pow(2,3)],c[89]),c[87],c[8],c[32])}catch(d){((0,c[19])(c[83],c[21]),c[18])(c[83])|(0,c[52])(c[47]),(0,c[54])((0,c[33])(),c[42],c[8])}}catch(d){return"enhanced_except_oZoB3uX-_w8_"+a}return b.join("")};
g.Pw=function(a){this.name=a};
Qw=function(a){this.ea=N(a)};
Rw=function(a){this.ea=N(a)};
Sw=function(a){this.ea=N(a)};
Tw=function(a){this.ea=N(a)};
Uw=function(a){this.ea=N(a)};
Vw=function(a){this.ea=N(a)};
Ww=function(a){this.ea=N(a)};
Xw=function(a){this.ea=N(a)};
Yw=function(a){this.ea=N(a)};
Zw=function(a){this.ea=N(a)};
$w=function(a){this.ea=N(a)};
ax=function(a){this.ea=N(a)};
bx=function(a){this.ea=N(a)};
cx=function(a){this.ea=N(a)};
dx=function(a){this.ea=N(a)};
ex=function(a){this.ea=N(a)};
fx=function(a){this.ea=N(a)};
gx=function(a){this.ea=N(a)};
hx=function(a){this.ea=N(a)};
ix=function(a){this.ea=N(a)};
jx=function(a){this.ea=N(a)};
kx=function(a){this.ea=N(a)};
lx=function(a){this.ea=N(a)};
mx=function(a){this.ea=N(a)};
nx=function(a){this.ea=N(a)};
ox=function(a){this.ea=N(a)};
px=function(a){this.ea=N(a)};
qx=function(a){this.ea=N(a)};
rx=function(a){this.ea=N(a)};
sx=function(a){this.ea=N(a)};
tx=function(a){this.ea=N(a)};
ux=function(a){this.ea=N(a)};
vx=function(a){this.ea=N(a)};
wx=function(a){this.ea=N(a)};
xx=function(a){this.ea=N(a)};
yx=function(a){this.ea=N(a)};
zx=function(a){this.ea=N(a)};
Ax=function(a){this.ea=N(a)};
Bx=function(a){this.ea=N(a)};
Cx=function(a){this.ea=N(a)};
Dx=function(a){this.ea=N(a)};
Ex=function(a){this.ea=N(a)};
Fx=function(a){this.ea=N(a)};
Gx=function(a){this.ea=N(a)};
Hx=function(a){this.ea=N(a)};
Ix=function(a){this.ea=N(a)};
Yx=function(a){this.ea=N(a)};
Zx=function(a){this.ea=N(a)};
$x=function(a){this.ea=N(a)};
ay=function(a){this.ea=N(a)};
by=function(a){this.ea=N(a)};
cy=function(a){this.ea=N(a)};
dy=function(a){this.ea=N(a)};
ey=function(a){this.ea=N(a)};
fy=function(a){this.ea=N(a)};
gy=function(a){this.ea=N(a)};
hy=function(a){this.ea=N(a)};
iy=function(a){this.ea=N(a)};
jy=function(a){this.ea=N(a)};
ky=function(a){this.ea=N(a)};
ly=function(a){this.ea=N(a)};
my=function(a){this.ea=N(a)};
ny=function(a){this.ea=N(a)};
oy=function(a){this.ea=N(a)};
py=function(a){this.ea=N(a)};
qy=function(a){this.ea=N(a)};
ry=function(a){this.ea=N(a)};
sy=function(a){this.ea=N(a)};
ty=function(a){this.ea=N(a)};
uy=function(a){this.ea=N(a)};
vy=function(a){this.ea=N(a)};
wy=function(a){this.ea=N(a)};
yy=function(a){this.ea=N(a)};
zy=function(a){this.ea=N(a)};
Ay=function(a){this.ea=N(a)};
By=function(a){this.ea=N(a)};
Cy=function(a){this.ea=N(a)};
Dy=function(a){this.ea=N(a)};
Ey=function(a){this.ea=N(a)};
Fy=function(a){this.ea=N(a)};
Gy=function(a){this.ea=N(a)};
Hy=function(a){this.ea=N(a)};
cma=function(a,b){return Wj(a,1,b)};
Iy=function(a){this.ea=N(a)};
Jy=function(a){this.ea=N(a)};
Ky=function(a){this.ea=N(a)};
Ly=function(a){this.ea=N(a)};
My=function(a){this.ea=N(a)};
Ny=function(a){this.ea=N(a)};
Oy=function(a){this.ea=N(a)};
Py=function(a){this.ea=N(a)};
Qy=function(a){this.ea=N(a)};
Ry=function(a){this.ea=N(a)};
g.Sy=function(a){this.ea=N(a)};
Ty=function(a){this.ea=N(a)};
Uy=function(a){this.ea=N(a)};
Vy=function(a){this.ea=N(a)};
Wy=function(a){this.ea=N(a)};
Xy=function(a){this.ea=N(a)};
Yy=function(a){this.ea=N(a)};
Zy=function(a){this.ea=N(a)};
$y=function(a){this.ea=N(a)};
az=function(a){this.ea=N(a)};
bz=function(a){this.ea=N(a)};
cz=function(a){this.ea=N(a)};
dz=function(a){this.ea=N(a)};
ez=function(a){this.ea=N(a)};
fz=function(a){this.ea=N(a)};
gz=function(a){this.ea=N(a)};
hz=function(a){this.ea=N(a)};
iz=function(a){this.ea=N(a)};
jz=function(a){this.ea=N(a)};
kz=function(a){this.ea=N(a)};
lz=function(a){this.ea=N(a)};
mz=function(a){this.ea=N(a)};
nz=function(a){this.ea=N(a)};
oz=function(a){this.ea=N(a)};
pz=function(a){this.ea=N(a)};
qz=function(a){this.ea=N(a)};
rz=function(a){this.ea=N(a)};
sz=function(a){this.ea=N(a)};
tz=function(a){this.ea=N(a)};
uz=function(a){this.ea=N(a)};
vz=function(a){this.ea=N(a)};
wz=function(a){this.ea=N(a)};
xz=function(a){this.ea=N(a)};
yz=function(a){this.ea=N(a)};
zz=function(a){this.ea=N(a)};
Az=function(a){this.ea=N(a)};
Bz=function(a){this.ea=N(a)};
Cz=function(a){this.ea=N(a)};
Dz=function(a){this.ea=N(a)};
Ez=function(a){this.ea=N(a)};
Fz=function(a){this.ea=N(a)};
Gz=function(a){this.ea=N(a)};
Hz=function(a){this.ea=N(a)};
Iz=function(a){this.ea=N(a)};
Jz=function(a){this.ea=N(a)};
Kz=function(a){this.ea=N(a)};
Lz=function(a){this.ea=N(a)};
Mz=function(a){this.ea=N(a)};
Nz=function(a){this.ea=N(a)};
Oz=function(a){this.ea=N(a)};
Pz=function(a){this.ea=N(a)};
Qz=function(a){this.ea=N(a)};
Rz=function(a){this.ea=N(a)};
Sz=function(a){this.ea=N(a)};
Tz=function(a){this.ea=N(a)};
Uz=function(a){this.ea=N(a)};
Vz=function(a){this.ea=N(a)};
Wz=function(a){this.ea=N(a)};
Xz=function(a){this.ea=N(a)};
Yz=function(a){this.ea=N(a)};
Zz=function(a){this.ea=N(a)};
$z=function(a){this.ea=N(a)};
aA=function(a){this.ea=N(a)};
bA=function(a){this.ea=N(a)};
cA=function(a){this.ea=N(a)};
dA=function(a){this.ea=N(a)};
eA=function(a){this.ea=N(a)};
fA=function(a){this.ea=N(a)};
gA=function(a){this.ea=N(a)};
hA=function(a){this.ea=N(a)};
iA=function(a){this.ea=N(a)};
jA=function(a){this.ea=N(a)};
kA=function(a){this.ea=N(a)};
dma=function(a){this.ea=N(a)};
lA=function(a){this.ea=N(a)};
ema=function(a){this.ea=N(a)};
mA=function(a){this.ea=N(a)};
nA=function(a){this.ea=N(a)};
fma=function(a){this.ea=N(a)};
oA=function(a){this.ea=N(a)};
gma=function(a){this.ea=N(a)};
pA=function(a){this.ea=N(a)};
qA=function(a){this.ea=N(a)};
rA=function(a){this.ea=N(a)};
sA=function(a){this.ea=N(a)};
g.tA=function(a){this.ea=N(a)};
g.uA=function(a){this.ea=N(a)};
vA=function(a){this.ea=N(a)};
wA=function(a){this.ea=N(a)};
xA=function(a){this.ea=N(a)};
hma=function(a){this.ea=N(a)};
yA=function(a){this.ea=N(a)};
zA=function(a){this.ea=N(a)};
AA=function(a){this.ea=N(a)};
ima=function(a){this.ea=N(a)};
BA=function(a){this.ea=N(a)};
CA=function(a){this.ea=N(a)};
DA=function(a){this.ea=N(a)};
EA=function(a){this.ea=N(a)};
jma=function(a){this.ea=N(a)};
FA=function(a){this.ea=N(a)};
GA=function(a){this.ea=N(a)};
HA=function(a){this.ea=N(a)};
IA=function(a){this.ea=N(a)};
JA=function(a){this.ea=N(a)};
kma=function(a){this.ea=N(a)};
KA=function(a){this.ea=N(a)};
lma=function(a){this.ea=N(a)};
LA=function(a){this.ea=N(a)};
mma=function(a){this.ea=N(a)};
MA=function(a){this.ea=N(a)};
NA=function(a){this.ea=N(a)};
nma=function(a){this.ea=N(a)};
OA=function(a){this.ea=N(a)};
PA=function(a){this.ea=N(a)};
QA=function(a){this.ea=N(a)};
oma=function(a){this.ea=N(a)};
pma=function(a){this.ea=N(a)};
qma=function(a){this.ea=N(a)};
rma=function(a){this.ea=N(a)};
RA=function(a){this.ea=N(a)};
SA=function(a){this.ea=N(a)};
sma=function(a){this.ea=N(a)};
TA=function(a){this.ea=N(a)};
tma=function(a){this.ea=N(a)};
uma=function(a){this.ea=N(a)};
vma=function(a){this.ea=N(a)};
wma=function(a){this.ea=N(a)};
xma=function(a){this.ea=N(a)};
UA=function(a){this.ea=N(a)};
VA=function(a){this.ea=N(a)};
yma=function(a){this.ea=N(a)};
zma=function(a){this.ea=N(a)};
WA=function(a){this.ea=N(a)};
XA=function(a){this.ea=N(a)};
Ama=function(a){this.ea=N(a)};
YA=function(a){this.ea=N(a)};
Bma=function(a){this.ea=N(a)};
Cma=function(a){this.ea=N(a)};
ZA=function(a){this.ea=N(a)};
Dma=function(a){this.ea=N(a)};
Ema=function(a){this.ea=N(a)};
Fma=function(a){this.ea=N(a)};
Gma=function(a){this.ea=N(a)};
$A=function(a){this.ea=N(a)};
aB=function(a){this.ea=N(a)};
bB=function(a){this.ea=N(a)};
cB=function(a){this.ea=N(a)};
Hma=function(a){this.ea=N(a)};
Ima=function(a){this.ea=N(a)};
dB=function(a){this.ea=N(a)};
Jma=function(a){this.ea=N(a)};
Kma=function(a){this.ea=N(a)};
Lma=function(a){this.ea=N(a)};
Mma=function(a){this.ea=N(a)};
eB=function(a){this.ea=N(a)};
Nma=function(a){this.ea=N(a)};
Oma=function(a){this.ea=N(a)};
Pma=function(a){this.ea=N(a)};
Qma=function(a){this.ea=N(a)};
Rma=function(a){this.ea=N(a)};
Sma=function(a){this.ea=N(a)};
Tma=function(a){this.ea=N(a)};
Uma=function(a){this.ea=N(a)};
Vma=function(a){this.ea=N(a)};
Wma=function(a){this.ea=N(a)};
fB=function(a){this.ea=N(a)};
Xma=function(a){this.ea=N(a)};
gB=function(a){this.ea=N(a)};
hB=function(a){this.ea=N(a)};
Yma=function(a){this.ea=N(a)};
Zma=function(a){this.ea=N(a)};
iB=function(a){this.ea=N(a)};
$ma=function(a){this.ea=N(a)};
ana=function(a){this.ea=N(a)};
bna=function(a){this.ea=N(a)};
cna=function(a){this.ea=N(a)};
dna=function(a){this.ea=N(a)};
ena=function(a){this.ea=N(a)};
fna=function(a){this.ea=N(a)};
gna=function(a){this.ea=N(a)};
jB=function(a){this.ea=N(a)};
hna=function(a){this.ea=N(a)};
ina=function(a){this.ea=N(a)};
jna=function(a){this.ea=N(a)};
kB=function(a){this.ea=N(a)};
kna=function(a){this.ea=N(a)};
lna=function(a){this.ea=N(a)};
lB=function(a){this.ea=N(a)};
oB=function(a){this.ea=N(a)};
mna=function(a){this.ea=N(a)};
pB=function(a){this.ea=N(a)};
qB=function(a){this.ea=N(a)};
nna=function(a){this.ea=N(a)};
rB=function(a){this.ea=N(a)};
ona=function(a){this.ea=N(a)};
sB=function(a){this.ea=N(a)};
pna=function(a){this.ea=N(a)};
tB=function(a){this.ea=N(a)};
uB=function(a){this.ea=N(a)};
qna=function(a){this.ea=N(a)};
rna=function(a){this.ea=N(a)};
vB=function(a){this.ea=N(a)};
sna=function(a){this.ea=N(a)};
tna=function(a){this.ea=N(a)};
wB=function(a){this.ea=N(a)};
una=function(a){this.ea=N(a)};
vna=function(a){this.ea=N(a)};
wna=function(a){this.ea=N(a)};
xna=function(a){this.ea=N(a)};
yna=function(a){this.ea=N(a)};
zna=function(a){this.ea=N(a)};
Ana=function(a){this.ea=N(a)};
Bna=function(a){this.ea=N(a)};
Cna=function(a){this.ea=N(a)};
Dna=function(a){this.ea=N(a)};
xB=function(a){this.ea=N(a)};
Ena=function(a){this.ea=N(a)};
Fna=function(a){this.ea=N(a)};
yB=function(a){this.ea=N(a)};
Gna=function(a){this.ea=N(a)};
zB=function(a){this.ea=N(a)};
AB=function(a){this.ea=N(a)};
Hna=function(a){this.ea=N(a)};
Ina=function(a){this.ea=N(a)};
BB=
Jna=function(a){this.ea=N(a)};
Kna=function(a,b){Jj(a,aB,1,b)};
CB=function(a){this.ea=N(a)};
Lna=function(a,b){return Jj(a,aB,1,b)};
DB=function(a){this.ea=N(a)};
Mna=
EB=function(a){this.ea=N(a)};
FB=function(a){this.ea=N(a)};
GB=function(a){this.ea=N(a)};
HB=function(a){this.ea=N(a)};
Nna=function(a){this.ea=N(a)};
IB=function(a){this.ea=N(a)};
JB=
KB=function(a,b){return O(a,2,b)};
LB=function(a){this.ea=N(a)};
Ona=function(a){this.ea=N(a)};
MB=function(a){this.ea=N(a)};
NB=
Pna=function(a){this.ea=N(a)};
Qna=function(a){this.ea=N(a)};
OB=function(a){this.ea=N(a)};
PB=function(a){this.ea=N(a)};
QB=function(a){this.ea=N(a)};
Rna=function(a){this.ea=N(a)};
RB=function(a){this.ea=N(a)};
Sna=function(a){this.ea=N(a)};
Tna=function(a){this.ea=N(a)};
Una=function(a){this.ea=N(a)};
SB=function(a){this.ea=N(a)};
Vna=function(a){this.ea=N(a)};
Wna=function(a){this.ea=N(a)};
Xna=function(a){this.ea=N(a)};
TB=function(a){this.ea=N(a)};
Yna=function(a){this.ea=N(a)};
Zna=function(a){this.ea=N(a)};
UB=function(a){this.ea=N(a)};
VB=function(a){this.ea=N(a)};
$na=function(a){this.ea=N(a)};
WB=function(a){this.ea=N(a)};
aoa=function(a){this.ea=N(a)};
boa=function(a){this.ea=N(a)};
XB=function(a){this.ea=N(a,497)};
coa=function(a){this.ea=N(a)};
YB=function(a){this.ea=N(a)};
doa=function(a){this.ea=N(a)};
eoa=
foa=function(a){g.Ua("yt.ads.biscotti.lastId_",a)};
$B=
g.aC=
bC=
g.cC=
g.dC=
hoa=
goa=
ioa=
joa=
g.gC=
g.fC=
hC=
iC=
jC=
kC=
noa=
g.lC=
mC=function(a,b){return ooa(a,b||{},!0)};
nC=
ooa=
oC=
pC=
poa=
koa=
qC=
soa=
voa=
g.sC=
rC=
g.tC=function(a,b){"function"===typeof a&&(a=g.gC(a));return window.setTimeout(a,b)};
g.uC=
g.vC=function(a){window.clearTimeout(a)};
g.wC=function(a){window.clearInterval(a)};
xoa=
zoa=
xC=
g.yC=
Aoa=
Boa=
Doa=
Hoa=
Foa=
Goa=
Ioa=
Coa=
AC=
g.BC=
zC=
Joa=function(a){this.xhr=a};
CC=
DC=function(a){var b=new CC;a=void 0===a?null:a;b.C=2;b.B=void 0===a?null:a;return b};
EC=
g.HC=
g.IC=
g.Koa=
Loa=
g.U=
Moa=
Noa=
Ooa=
Poa=
Qoa=
KC=
Roa=
g.LC=function(){return g.JC("cobalt")};
MC=function(){return g.JC("cobalt")&&g.JC("appletv")};
Soa=function(){return g.JC("(ps3; leanback shell)")||g.JC("ps3")&&g.LC()};
Toa=
g.Uoa=
NC=function(){var a=/WebKit\/([0-9]+)/.exec(g.pc());return!!(a&&600<=parseInt(a[1],10))};
Voa=
Woa=
QC=
SC=
Xoa=
g.JC=
Yoa=
TC=
UC=
VC=
WC=
$oa=
XC=
bpa=
g.YC=
apa=
fpa=
ZC=
gpa=
kpa=
ipa=
jpa=
lpa=
mpa=
opa=
npa=
rpa=
aD=
spa=
dD=
tpa=
upa=
g.bD=
cD=
eD=
wpa=
xpa=
g.gD=
Apa=
g.hD=
iD=
Bpa=
Cpa=
jD=
kD=
lD=
g.mD=
nD=
Epa=
g.pD=
g.qD=
Gpa=
g.rD=
g.sD=function(){return g.qD("yt-remote-session-screen-id")};
tD=function(){this.I_=!0};
Hpa=function(){tD.instance||(tD.instance=new tD);return tD.instance};
Ipa=
Jpa=
Kpa=
Lpa=
g.uD=function(){Mpa||(Mpa=new Lpa);return Mpa};
g.vD=
Opa=
Ppa=
Qpa=
Npa=
Rpa=function(){var a=g.Sa.navigator;return a?a.connection:void 0};
Tpa=
Vpa=
g.xD=
g.zD=
g.yD=
AD=function(){this.j=new WeakMap};
g.CD=
Wpa=
DD=function(){AD.apply(this,arguments)};
g.ED=function(){DD.instance||(DD.instance=new DD);return DD.instance};
g.FD=function(){return!!g.Va("yt.scheduler.instance")};
BD=
GD=
HD=
Ypa=
aqa=
MD=
ND=
OD=
PD=
g.QD=
eqa=
RD=
gqa=
g.TD=
hqa=
iqa=function(a){return a};
UD=function(a){this.j=a};
g.VD=
kqa=function(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof g.VD?jqa(a,b,f,d,e):d(f)}catch(h){e(h)}};
lqa=
jqa=
mqa=
nqa=
g.WD=
oqa=
pqa=function(a,b){this.request=a;this.cursor=b};
XD=function(a){return g.WD(a).then(function(b){return b?new pqa(a,b):null})};
qqa=
g.ZD=
$D=
g.cE=
g.aE=
tqa=
uqa=
rqa=function(a){this.j=a};
g.eE=
vqa=
g.xqa=
wqa=
zqa=
yqa=
g.bE=
g.fE=
g.Aqa=
dE=
sqa=
Bqa=function(a){this.j=a};
g.hE=
Cqa=function(a,b){this.request=a;this.cursor=b};
gE=
Dqa=
Eqa=function(a,b,c){c=void 0===c?{}:c;return Dqa(a,b,c)};
iE=
jE=
Fqa=
g.kE=
Hqa=
lE=
Iqa=
Jqa=
Lqa=
Nqa=
oE=
g.pE=
Oqa=
Pqa=
Qqa=function(a,b,c){c=void 0===c?{}:c;return Pqa(a,b,!1,c)};
Rqa=
Sqa=
Tqa=
Uqa=
Vqa=
qE=
Wqa=
g.rE=function(a,b){return Wqa(a,b)};
sE=function(a){return g.kE(Xqa(),a)};
Yqa=
Zqa=
$qa=function(a){var b,c;return g.G(function(d){return 1==d.j?g.z(d,sE(a),2):3!=d.j?(b=d.B,c=void 0,g.z(d,g.aE(b,["coldConfigStore"],{mode:"readwrite",Ub:!0},function(e){return g.hE(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})};
ara=
bra=
cra=
xE=
fra=
ira=
yE=
jra=
lra=
era=
mra=
nra=
ora=
gra=
hra=
tE=function(a,b){a.B=b;g.Ua("yt.gcf.config.hotConfigGroup",a.B||null)};
dra=function(a,b){a.j=b;g.Ua("yt.gcf.config.coldConfigGroup",a.j||null)};
wE=function(a,b){a.coldHashData=b;g.Ua("yt.gcf.config.coldHashData",a.coldHashData||null)};
kra=
vE=function(){return g.Va("yt.gcf.config.hotConfigGroup")};
uE=function(){return g.Va("yt.gcf.config.coldConfigGroup")};
pra=
g.zE=
g.wra=
qra=
rra=
sra=
tra=
ura=
Ara=
vra=
BE=function(a,b){this.version=a;this.args=b};
CE=function(a,b){this.topic=a;this.j=b};
DE=
Dra=
Fra=
Era=
Bra=function(){return g.Va("ytPubsub2Pubsub2Instance")};
Gra=
Ira=
GE=
Kra=
Nra=
JE=
Mra=
Xra=
Ora=
Wra=
NE=
Yra=
asa=
OE=
ME=
Zra=
$ra=
bsa=
QE=function(a){return g.kE(bsa(),a)};
dsa=
esa=
fsa=
gsa=
hsa=
isa=
jsa=
csa=
lsa=
msa=
nsa=
g.RE=
osa=
psa=
ssa=
SE=
TE=function(){if(!SE.instance){var a=g.Va("yt.networkRequestMonitor.instance")||new SE;g.Ua("yt.networkRequestMonitor.instance",a);SE.instance=a}return SE.instance};
UE=function(){tsa||(tsa=new HD("yt.offline"));return tsa};
usa=
VE=
vsa=
g.WE=
wsa=
XE=
YE=
zsa=
ysa=
Asa=
g.ZE=
g.$E=
g.eF=
Csa=
g.fF=
g.gF=
Esa=
g.aF=function(){return g.Sa.ytPubsubPubsubInstance};
Dsa=
g.Isa=
Hsa=
Lsa=
Jsa=
iF=
Osa=
Qsa=
hF=
Psa=
jF=function(a){g.I.call(this);this.B=a};
kF=
Rsa=
Ssa=
Tsa=
mF=
g.nF=
g.Usa=
Vsa=
pF=
oF=
qF=
rF=function(a){this.name=a};
sF=function(a){this.key=a};
Xsa=
Ysa=
uF=
Zsa=
vF=function(){$sa||($sa=new Xsa);return $sa};
ata=
bta=
cta=
eta=
fta=
dta=
yF=
hta=
gta=
ita=function(a){xF&&a&&bta(a)};
zF=
kta=
AF=
mta=function(){lta||(lta=new AF);return lta};
BF=
ota=
CF=
nta=
DF=
EF=function(){var a=g.Va("yt.logging.ims");a||(a=new BF,g.Ua("yt.logging.ims",a));return a};
rta=
xta=
zta=
wta=
vta=
yta=
HF=
Ata=
Ita=
Eta=
Fta=
Gta=
qta=
Rta=
Tta=
Qta=
Wta=
Pta=
GF=
Vta=
Dta=
Hta=
Sta=
Bta=
tta=
sta=
uta=
JF=
Ota=
QF=
fua=
eua=
jua=
g.JD=
mua=
lua=
oua=
SF=
TF=
qua=function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,GB,72,UF,a);c?SF("visualElementShown",d,c,b):TF("visualElementShown",d,b)};
rua=function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,FB,73,UF,a);c?SF("visualElementHidden",d,c,b):TF("visualElementHidden",d,b)};
sua=function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,EB,78,UF,a);c?SF("visualElementGestured",d,c,b):TF("visualElementGestured",d,b)};
tua=function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,HB,208,UF,a);c?SF("visualElementStateChanged",d,c,b):TF("visualElementStateChanged",d,b)};
uua=function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,CB,156,UF,a);c?SF("screenCreated",d,c,b):TF("screenCreated",d,b)};
vua=function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,AB,202,UF,a);c?SF("playbackAssociated",d,c,b):TF("playbackAssociated",d,b)};
wua=function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,DB,215,UF,a);c?SF("visualElementAttached",d,c,b):TF("visualElementAttached",d,b)};
VF=function(a){this.j=a};
g.WF=
yua=
zua=
Aua=
Bua=
Cua=
g.XF=
Dua=
Eua=
g.YF=
Gua=
Hua=
eG=
Jua=
Lua=
Kua=
Mua=
Oua=
Pua=function(){this.gs=[];this.Wq=[]};
Tua=
Rua=
Vua=
Uua=
Xua=
Wua=
fG=
$pa=function(a){g.gG(a)};
g.hG=
g.gG=
eva=
bva=
gva=
mG=
iva=
g.nG=
lva=
mva=
nva=
tva=
g.qG=
g.uva=
xva=
yva=
Ava=
zva=
Bva=
sG=
Dva=
rG=
wva=
vva=
oG=
g.uG=
g.vG=
g.wG=
g.xG=
zG=
yG=
g.AG=
g.BG=function(a,b,c){for(var d in b)a.subscribe(d,b[d],c)};
CG=
DG=
g.EG=
FG=
Fva=
GG=
g.V=
g.HG=
g.IG=
JG=
KG=
Gva=
Hva=
g.LG=
g.MG=
g.Iva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,Y:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
Jva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Y:{d:"m 14.8,21.9 -4.2,-4.2 -1.4,1.4 5.6,5.6 12,-12 -1.4,-1.4 -10.6,10.6 z",fill:"#fff"}}]}};
g.NG=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},V:[{I:"path",Y:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.OG=
Kva=
Lva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Ac:!0,Y:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
Mva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Ac:!0,Y:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.PG=function(){return{I:"svg",Y:{height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",Y:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
Nva=function(){return{I:"svg",Y:{height:"100%",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Y:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]}};
Ova=function(){return{I:"svg",Y:{viewBox:"0 0 24 24"},V:[{I:"path",Y:{d:"M0 0h24v24H0z",fill:"none"}},{I:"path",Y:{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",fill:"#fff"}}]}};
Pva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",Y:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]}};
Qva=
Rva=function(){return{I:"svg",Y:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},V:[{I:"path",Y:{d:"M0 0h48v48H0z",fill:"none"}},{I:"path",Y:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]}};
Sva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",Y:{d:"m 17,23 h 2 V 17 H 17 Z M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 Z m 0,18 c -4.41,0 -8,-3.59 -8,-8 0,-4.41 3.59,-8 8,-8 4.41,0 8,3.59 8,8 0,4.41 -3.59,8 -8,8 z M 17,15 h 2 v -2 h -2 z"}}]}};
Tva=
QG=function(){return{I:"svg",Y:{height:"100%",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Y:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
Uva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Ac:!0,Y:{d:"M5,0 L9,0 L9,14 L5,14 L5,0 Z",fill:"#eaeaea"}}]}};
Vva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",Y:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.Wva=
Xva=
Yva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",Y:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
Zva=
$va=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,Y:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}};
awa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",Y:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
bwa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",Y:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
g.cwa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",Y:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"}}]}};
g.dwa=
g.RG=
ewa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ac:!0,S:"ytp-svg-fill",Y:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
fwa=
SG=
TG=
gwa=
UG=
hwa=
WG=
jwa=
iwa=
YG=
ZG=
$G=
aH=
kwa=
bH=
lwa=
mwa=
nwa=function(a,b,c){this.actionType=b;this.id=c;this.content=a};
cH=
owa=
swa=
pwa=
rwa=
qwa=
twa=
dH=
uwa=
vwa=function(a,b){if(b=b.content&&b.content.adFeedbackRenderer||null)a.B=new owa(a.api,a.layoutId,a.interactionLoggingClientData,a.gb),g.M(a,a.B),a.B.init(yG("ad-feedback-dialog"),b,a.macros),a.B.Ja(a.Ga),a.B.subscribe("a",function(){return a.oa("c")})};
wwa=
xwa=
eH=
zwa=
Cwa=
Bwa=
fH=
Dwa=
gH=
hH=
iH=
g.jH=
kH=
lH=
Ewa=
Fwa=
Gwa=
mH=
Hwa=
Iwa=
nH=
Jwa=
oH=
g.pH=function(a,b){this.state=a;this.hA=b};
rH=
g.sH=
tH=
Lwa=
Kwa=function(a){return"END_LINEAR_AD"===a.action||"END_LINEAR_AD_PLACEMENT"===a.action};
vH=
Mwa=
Nwa=
wH=
xH=
yH=
zH=
g.AH=
g.BH=
CH=
Pwa=
DH=function(a,b){this.B=a;this.j=b};
EH=
FH=
GH=
Qwa=
Rwa=
g.IH=
JH=
Swa=
KH=
g.Twa=
g.Uwa=
g.LH=
Wwa=function(a){Vwa=a&&a.data};
Ywa=function(a){Xwa=a&&a.data};
$wa=
bxa=
dxa=
MH=
exa=
NH=
fxa=
g.OH=
ixa=
jxa=
PH=
lxa=
g.QH=function(a){return"/youtubei/v1/"+lxa(a)};
RH=function(){};
SH=function(){};
TH=
nxa=
UH=function(a){a=TH(a);a.metadata||(a.metadata={});return a.metadata};
VH=function(a){a=TH(a);a.tick||(a.tick={});return a.tick};
WH=
oxa=
XH=
mxa=
pxa=
YH=
rxa=
qxa=
ZH=function(a){return sxa[a]||"LATENCY_ACTION_UNKNOWN"};
txa=
$H=function(){this.j=0};
aI=function(){$H.instance||($H.instance=new $H);return $H.instance};
cI=
uxa=
vxa=
eI=
fI=
hI=
tI=
sI=
xxa=
gI=
Axa=
Bxa=
Exa=
Fxa=
Gxa=
Ixa=
Dxa=
Jxa=
Kxa=
Lxa=
uI=
zxa=
Cxa=
vI=
Pxa=
Rxa=
yI=
Sxa=
g.xI=
zI=
Txa=
wI=
Uxa=
AI=
Vxa=
Qxa=
BI=
Xxa=
CI=
g.DI=
bya=
$xa=
Zxa=
Yxa=
dya=
EI=function(){};
FI=function(){};
GI=function(){};
HI=function(){};
II=function(){};
JI=function(){};
KI=function(a){this.j=a};
g.LI=
iya=
MI=function(){};
jya=
lya=
kya=
mya=
nya=
oya=
qya=
pya=
rya=
uya=
vya=
OI=
PI=function(){oya.apply(this,arguments)};
wya=function(){};
xya=
yya=function(a,b){this.Zj=a;this.qm=b};
zya=function(){};
Aya=function(){};
Cya=
Dya=
QI=
Bya=
RI=
Gya=
Iya=
SI=function(a){this.value=a};
TI=function(a){this.value=a};
UI=function(a){this.value=a};
Jya=function(a){this.value=a};
VI=function(a){this.value=a};
WI=function(a){this.value=a};
Kya=function(){SI.apply(this,arguments)};
Lya=function(a){this.value=a};
Mya=function(a){this.value=a};
Nya=function(a){this.value=a};
Oya=function(a){this.value=a};
Pya=function(a){this.value=a};
XI=function(a){this.value=a};
YI=function(a){this.value=a};
ZI=function(a){this.value=a};
$I=function(a){this.value=a};
aJ=function(a){this.value=a};
bJ=function(){SI.apply(this,arguments)};
cJ=function(a){this.value=a};
dJ=function(a){this.value=a};
eJ=function(a){this.value=a};
fJ=function(a){this.value=a};
gJ=function(a){this.value=a};
Qya=function(a){this.value=a};
hJ=function(a){this.value=a};
Rya=function(a){this.value=a};
Sya=function(a){this.value=a};
Tya=function(a){this.value=a};
Uya=function(a){this.value=a};
iJ=function(a){this.value=a};
jJ=function(a){this.value=a};
kJ=function(a){this.value=a};
lJ=function(a){this.value=a};
Vya=function(a){this.value=a};
mJ=function(a){this.value=a};
nJ=function(a){this.value=a};
oJ=function(a){this.value=a};
Wya=function(a){this.value=a};
pJ=function(a){this.value=a};
qJ=function(a){this.value=a};
rJ=function(a){this.value=a};
sJ=function(a){this.value=a};
tJ=function(a){this.value=a};
uJ=function(a){this.value=a};
vJ=function(a){this.value=a};
wJ=function(a){this.value=a};
xJ=function(a){this.value=a};
Xya=function(a){this.value=a};
yJ=function(a){this.value=a};
zJ=function(a){this.value=a};
AJ=function(a){this.value=a};
Yya=function(a){this.value=a};
BJ=function(a){this.value=a};
CJ=function(a){this.value=a};
DJ=function(a){this.value=a};
EJ=
Zya=function(a){this.value=a};
FJ=function(){SI.apply(this,arguments)};
GJ=function(){SI.apply(this,arguments)};
$ya=function(){SI.apply(this,arguments)};
HJ=function(){SI.apply(this,arguments)};
aza=function(a){this.value=a};
IJ=function(a){this.value=a};
bza=function(a){this.value=a};
KJ=
LJ=function(){return""};
cza=
MJ=function(a,b,c,d){d=void 0===d?!1:d;yb.call(this,a);this.Dk=c;this.Ku=d;this.args=[];b&&this.args.push(b)};
NJ=
OJ=
JJ=function(a,b){return a.j.has(b)};
PJ=
QJ=
RJ=
eza=
gza=
hza=
SJ=
iza=
TJ=
jza=
VJ=
kza=
lza=
mza=
pza=
qza=
rza=function(a,b,c){$J(a.jc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_SCHEDULED",b,c);a=g.u(a.Gd);for(var d=a.next();!d.done;d=a.next())d.value.Sh(b,c)};
sza=
tza=
uza=
nza=
fK=
xza=
yza=
zza=
Aza=
oza=
Cza=
XJ=
Dza=
Eza=
hK=
Fza=
iK=
ZJ=
Gza=
YJ=
Bza=
jK=
Jza=
Iza=function(a){switch(a){case "TRIGGER_CATEGORY_SLOT_ENTRY":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_ENTRY_TRIGGER";case "TRIGGER_CATEGORY_SLOT_EXPIRATION":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_EXPIRATION_TRIGGER";case "TRIGGER_CATEGORY_SLOT_FULFILLMENT":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_FULFILLMENT_TRIGGER";default:return"ADS_CLIENT_ERROR_MESSAGE_INVALID_TRIGGER"}};
aK=
bK=
lK=
kK=
Kza=
mK=
Lza=
nK=function(a){return new Lza(a)};
Nza=function(a){g.I.call(this);this.Wg=a;this.j=Mza(this)};
Mza=
oK=function(a){this.j=a};
pK=
qK=
rK=function(){this.listeners=new Set};
sK=function(){};
Pza=
Qza=
Sza=
Tza=
uK=
vK=
Wza=
wK=function(a){var b=void 0===b?!1:b;return uK(vK(a,Xza,null),a,b,"Trusted Stream URL")};
g.xK=function(a){var b=void 0===b?!1:b;return uK(vK(a,Yza,null),a,b,"Trusted Image URL")};
$za=function(a){var b=void 0===b?!1:b;return uK(vK(a,Zza,null),a,b,"Trusted Promoted Video Domain URL")};
bAa=
dAa=
eAa=
yK=
g.AK=
gAa=
hAa=
g.iAa=
g.BK=function(a){return"crn_"+a};
g.CK=
jAa=
kAa=
lAa=
mAa=function(a,b){this.callback=a;this.slot=b};
nAa=
oAa=function(){};
DK=
EK=function(){};
pAa=function(a,b,c,d,e,f){this.callback=a;this.slot=b;this.layout=c;this.j=d;this.Rb=e;this.eb=f};
rAa=
qAa=
sAa=
g.HK=
tAa=function(a,b,c){this.j=a;this.slot=b;this.layout=c};
uAa=
IK=
KK=
LK=
MK=
NK=
OK=
vAa=
PK=
QK=
JK=
RK=
SK=function(a,b){return a.j.has(b)};
yAa=
zAa=function(a,b,c){a.K=b;a.G=c};
xAa=
CAa=function(a,b,c,d,e){zG.call(this,"banner-image",a,b,c,d,e)};
DAa=function(a,b,c,d,e,f,h,l,m){IK.call(this,a,b,c,d);this.Oa=e;this.Xc=f;this.K=l;this.Cb=m;this.Lh=!0;this.D=null;this.G=PJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Xc().Gd.add(this);this.adPlacementConfig=PJ(c.Ca,"metadata_type_ad_placement_config");this.kb=new PK(c.Mb,this.Oa,this.adPlacementConfig,c.layoutId)};
EAa=function(){var a=["metadata_type_banner_image_layout_view_model","metadata_type_linked_player_bytes_layout_id"];QK().forEach(function(b){a.push(b)});
return{Id:a,Re:["LAYOUT_TYPE_COMPANION_WITH_IMAGE"]}};
FAa=function(a,b,c,d,e){zG.call(this,"action-companion",a,b,c,d,e)};
GAa=function(a,b,c,d,e,f,h,l){IK.call(this,a,b,c,d);this.Oa=e;this.Xc=f;this.K=l;this.Lh=!0;this.D=null;this.G=PJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Xc().Gd.add(this);a=PJ(c.Ca,"metadata_type_ad_placement_config");this.kb=new PK(c.Mb,this.Oa,a,c.layoutId)};
HAa=function(){var a=["metadata_type_action_companion_ad_renderer","metadata_type_linked_player_bytes_layout_id"];QK().forEach(function(b){a.push(b)});
return{Id:a,Re:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
IAa=function(a,b,c,d,e){zG.call(this,"image-companion",a,b,c,d,e)};
JAa=function(a,b,c,d,e,f,h,l){IK.call(this,a,b,c,d);this.Oa=e;this.Xc=f;this.K=l;this.Lh=!0;this.D=null;this.G=PJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Xc().Gd.add(this);a=PJ(c.Ca,"metadata_type_ad_placement_config");this.kb=new PK(c.Mb,this.Oa,a,c.layoutId)};
KAa=function(){var a=["metadata_type_image_companion_ad_renderer","metadata_type_linked_player_bytes_layout_id"];QK().forEach(function(b){a.push(b)});
return{Id:a,Re:["LAYOUT_TYPE_COMPANION_WITH_IMAGE"]}};
LAa=function(a,b,c,d,e){zG.call(this,"shopping-companion",a,b,c,d,e)};
MAa=function(a,b,c,d,e,f,h,l){IK.call(this,a,b,c,d);this.Oa=e;this.Xc=f;this.K=l;this.Lh=!0;this.D=null;this.G=PJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Xc().Gd.add(this);a=PJ(c.Ca,"metadata_type_ad_placement_config");this.kb=new PK(c.Mb,this.Oa,a,c.layoutId)};
NAa=function(){var a=["metadata_type_shopping_companion_carousel_renderer","metadata_type_linked_player_bytes_layout_id"];QK().forEach(function(b){a.push(b)});
return{Id:a,Re:["LAYOUT_TYPE_COMPANION_WITH_SHOPPING"]}};
OAa=
PAa=
QAa=
RAa=function(a,b,c,d,e,f){IK.call(this,a,b,c,d);this.Oa=e;this.Xc=f;this.Lh=!0;this.Xc().Gd.add(this);a=PJ(c.Ca,"metadata_type_ad_placement_config");this.kb=new PK(c.Mb,this.Oa,a,c.layoutId)};
SAa=function(){var a=["metadata_type_action_companion_ad_renderer"];QK().forEach(function(b){a.push(b)});
return{Id:a,Re:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
TAa=
UAa=
VAa=function(a,b,c,d,e){zG.call(this,"top-banner-image-text-icon-buttoned",a,b,c,d,e)};
WAa=
XAa=function(){var a=["metadata_type_top_banner_image_text_icon_buttoned_layout_view_model"];QK().forEach(function(b){a.push(b)});
return{Id:a,Re:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
UK=
VK=
YAa=function(){var a=["metadata_type_ad_action_interstitial_renderer"];QK().forEach(function(b){a.push(b)});
return{Id:a,Re:["LAYOUT_TYPE_ENDCAP"]}};
WK=function(a,b){return KJ(a,b.Id,b.Re)?!0:!1};
XK=function(a,b,c){this.j=a;this.Rb=b;this.eb=c};
ZAa=
$Aa=
aBa=function(){var a=["metadata_type_ads_engagement_panel_renderer","metadata_type_linked_player_bytes_layout_id"];QK().forEach(function(b){a.push(b)});
return{Id:a,Re:["LAYOUT_TYPE_PANEL_TEXT_ICON_IMAGE_TILES_BUTTON"]}};
bBa=
cBa=
dBa=function(a,b,c,d,e,f){this.qc=a;this.Oa=b;this.Xc=c;this.j=d;this.zb=e;this.Cb=f};
eBa=
YK=function(a,b,c,d){IK.call(this,a,b,c,d)};
fBa=function(a){this.qc=a};
gBa=function(a,b,c,d,e){this.callback=a;this.slot=b;this.layout=c;this.Oa=d;this.j=e;a=PJ(this.layout.Ca,"metadata_type_ad_placement_config");this.kb=new PK(c.Mb,this.Oa,a,c.layoutId)};
hBa=
iBa=
ZK=function(a,b,c,d){this.Da=a;this.Oa=b;this.j=c;this.zb=d};
jBa=
kBa=function(a,b,c,d,e,f,h,l){IK.call(this,a,b,c,d);this.Ia=e;this.Oa=f;this.K=h;this.G=l;this.D=!1;this.N=PJ(this.layout.Ca,"metadata_type_linked_player_bytes_layout_id")};
$K=
lBa=
mBa=
nBa=
aL=
oBa=
cL=
qBa=function(a,b,c,d,e,f){this.qc=a;this.Ia=b;this.Oa=c;this.B=d;this.j=e;this.Da=f};
rBa=function(a,b,c,d){this.Ia=a;this.Oa=b;this.Da=c;this.zb=d};
sBa=
dL=
eL=
fL=
gL=
hL=
g.uBa=
vBa=
iL=
jL=
lL=
xBa=
yBa=
zBa=
g.mL=function(){kD.apply(this,arguments)};
nL=
pL=
ABa=
sL=
tL=
CBa=function(a){return"H"===a.ub||"h"===a.ub};
DBa=function(a){return"9h"===a.ub||"(h"===a.ub};
uL=function(a){return"1"===a.ub||"1h"===a.ub};
EBa=function(a){return"mac3"===a.ub||"meac3"===a.ub||"m"===a.ub};
vL=function(a){return"MAC3"===a.ub||"MEAC3"===a.ub||"M"===a.ub};
g.wL=function(a){return 1===a.containerType};
FBa=
xL=function(a){return"application/x-mpegURL"===a.mimeType};
yL=
zL=
GBa=
HBa=function(a){return/(opus|mp4a|dtse|ac-3|ec-3|iamf)/.test(a)};
IBa=function(a){return/(vp9|vp09|vp8|avc1|av01)/.test(a)};
AL=function(a){return a.includes("vtt")||a.includes("text/mp4")};
BBa=
BL=
CL=
DL=
EL=
FL=
GL=
JBa=function(a,b){if(!a)return NaN;b=FL(a,b);return 0<=b?a.start(b):NaN};
HL=
IL=
JL=
KL=
LL=
ML=
NL=
OL=
PL=
LBa=
MBa=
OBa=
PBa=
UL=
RL=
VL=
QBa=
RBa=
SBa=
TBa=
WL=
XL=
UBa=
VBa=
WBa=
SL=
XBa=
YBa=
YL=
ZBa=
aCa=
bCa=
g.ZL=
$L=
aM=
bM=
cM=
dM=
g.qH=
g.dCa=
g.eM=
eCa=
g.fM=
gM=
iM=
hM=
gCa=
jM=
hCa=
iCa=function(){for(var a=["METADATA_TYPE_MEDIA_BREAK_LAYOUT_DURATION_MILLISECONDS"],b=g.u(QK()),c=b.next();!c.done;c=b.next())a.push(c.value);return{Id:a,Re:["LAYOUT_TYPE_MEDIA_BREAK"]}};
kCa=
jCa=
mM=
lCa=
mCa=
oCa=
nCa=
nM=
pCa=
sCa=
oM=
tCa=
vCa=
qCa=
rCa=
pM=
uCa=
xCa=
yCa=
ACa=
zCa=
rM=
CCa=
DCa=
ECa=
GCa=
FCa=
HCa=
ICa=
KCa=
JCa=
LCa=
MCa=
NCa=
OCa=
PCa=
QCa=function(a){SK(a,"impression")&&!SK(a,"seek")&&a.Ch("active_view_fully_viewable_audible_half_duration")};
RCa=function(a){SK(a,"impression")&&!SK(a,"seek")&&a.Ch("active_view_viewable")};
SCa=function(a){SK(a,"impression")&&!SK(a,"seek")&&a.Ch("audio_audible")};
TCa=
UCa=
VCa=function(a,b,c){var d;a.Oa.get().Ai("ads_qua","cpn."+PJ(a.layout.Ca,"metadata_type_content_cpn")+";acpn."+(null==(d=a.Wa.get().jf(2))?void 0:d.clientPlaybackNonce)+";qt."+b+";clr."+c)};
WCa=
XCa=
YCa=
ZCa=
$Ca=
aDa=
uM=
bDa=
vM=
wM=
dDa=
eDa=
xM=
fDa=
yM=
gDa=
zM=
hDa=
AM=
iDa=
jDa=
kDa=function(a,b,c,d,e,f,h,l,m,n){this.qc=a;this.Ia=b;this.Oa=c;this.D=d;this.zb=e;this.B=f;this.C=h;this.Cb=l;this.Da=m;this.j=n};
lDa=
BM=
mDa=
nDa=function(a,b,c,d,e,f){this.qc=a;this.Ia=b;this.Oa=c;this.B=d;this.Tm=e;this.j=f};
oDa=function(a,b,c,d,e,f,h){this.qc=a;this.Ia=b;this.Oa=c;this.B=d;this.Tm=e;this.j=f;this.Da=h};
CM=function(a,b){this.slotId=b;this.triggerType="TRIGGER_TYPE_AD_BREAK_STARTED";this.triggerId=a(this.triggerType)};
DM=
EM=function(a,b,c){this.Jr=b;this.triggerType="TRIGGER_TYPE_BEFORE_CONTENT_VIDEO_ID_STARTED";this.triggerId=c||a(this.triggerType)};
FM=function(a,b,c){this.j=b;this.triggerType="TRIGGER_TYPE_CLOSE_REQUESTED";this.triggerId=c||a(this.triggerType)};
GM=function(a,b,c,d){this.Jr=b;this.visible=c;this.triggerType="TRIGGER_TYPE_CONTENT_VIDEO_ID_ENDED";this.triggerId=d||a(this.triggerType)};
pDa=function(a){this.triggerType="TRIGGER_TYPE_DURATION_AFTER_MEDIA_PAUSED";this.triggerId=a(this.triggerType)};
HM=function(a,b,c){this.triggeringLayoutId=b;this.slotId=c;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_ACTIVE_AND_SLOT_ID_HAS_EXITED";this.triggerId=a(this.triggerType)};
IM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_ENTERED";this.triggerId=c||a(this.triggerType)};
JM=
qDa=
KM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_EXITED";this.triggerId=c||a(this.triggerType)};
rDa=function(a){this.triggerType="TRIGGER_TYPE_LIVE_STREAM_BREAK_ENDED";this.triggerId=a(this.triggerType)};
sDa=function(a){this.triggerType="TRIGGER_TYPE_LIVE_STREAM_BREAK_STARTED";this.triggerId=a(this.triggerType)};
tDa=function(a){this.triggerId=a;this.triggerType="TRIGGER_TYPE_MEDIA_RESUMED"};
LM=
MM=
uDa=function(a,b,c){this.Jr=b;this.j=c;this.triggerType="TRIGGER_TYPE_NOT_IN_MEDIA_TIME_RANGE";this.triggerId=a(this.triggerType)};
NM=
vDa=
OM=function(a,b,c){this.layoutId=b;this.triggerType="TRIGGER_TYPE_ON_LAYOUT_SELF_EXIT_REQUESTED";this.triggerId=c||a(this.triggerType)};
PM=function(a,b,c){this.j=b;this.triggerType="TRIGGER_TYPE_ON_NEW_PLAYBACK_AFTER_CONTENT_VIDEO_ID";this.triggerId=c||a(this.triggerType)};
Rza=function(a,b){this.opportunityType="OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED";this.associatedSlotId=b;this.triggerType="TRIGGER_TYPE_ON_OPPORTUNITY_TYPE_RECEIVED";this.triggerId=a(this.triggerType)};
wDa=
xDa=function(a,b,c){this.layoutId=b;this.offsetMs=c;this.triggerType="TRIGGER_TYPE_PROGRESS_PAST_MEDIA_TIME_WITH_OFFSET_RELATIVE_TO_LAYOUT_ENTER";this.triggerId=a(this.triggerType)};
QM=function(a,b){this.layoutId=b;this.triggerType="TRIGGER_TYPE_SEEK_BACKWARD_BEFORE_LAYOUT_ENTER_TIME";this.triggerId=a(this.triggerType)};
yDa=
RM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_SKIP_REQUESTED";this.triggerId=c||a(this.triggerType)};
SM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_ENTERED";this.triggerId=c||a(this.triggerType)};
TM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_EXITED";this.triggerId=c||a(this.triggerType)};
UM=function(a,b){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_FULFILLED_EMPTY";this.triggerId=a(this.triggerType)};
VM=function(a,b){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_FULFILLED_NON_EMPTY";this.triggerId=a(this.triggerType)};
WM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_SCHEDULED";this.triggerId=c||a(this.triggerType)};
XM=
YM=
zDa=
ZM=function(a,b,c,d){this.category=a;this.trigger=b;this.slot=c;this.layout=d};
$M=
ADa=
BDa=
CDa=
DDa=
aN=
fN=
FDa=
KDa=
NDa=
LDa=
PDa=
QDa=
ODa=
SDa=
TDa=
UDa=
oN=
YDa=
$Da=
cEa=
dEa=
eEa=
pN=
gEa=function(a,b,c,d,e,f,h,l){return null===b?new NJ("Invalid slot type when get discovery companion fromActionCompanionAdRenderer",{slotType:b,ActionCompanionAdRenderer:d}):[fEa(a,b,h,f,function(m){var n=m.slotId;m=l(m);var p=d.adLayoutLoggingData,q=new OJ([new TI(d),new XI(e)]);n=tK(c.eb.get(),"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",n);var r={layoutId:n,layoutType:"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",Ya:"core"};return{layoutId:n,layoutType:"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",Mb:new Map,
layoutExitNormalTriggers:[new PM(c.j,h)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Wc:[],Ya:"core",Ca:q,kc:m(r),adLayoutLoggingData:p}})]};
hEa=
lEa=
qN=
mEa=
iEa=
nEa=
rN=
oEa=
rEa=
qEa=
vEa=
sEa=
sN=
tN=
BEa=
EEa=
DEa=
IEa=
GEa=
KEa=
HEa=
MEa=
LEa=
CEa=
NEa=
OEa=
CN=
FEa=
PEa=
DN=
QEa=
REa=
UEa=
XEa=
VEa=
$Ea=
hFa=
gFa=
aFa=
iFa=
cFa=
dFa=
bFa=
mFa=
oFa=
qFa=
uFa=
xFa=
yFa=
AFa=
CFa=
EFa=
DFa=
MFa=
GFa=
FFa=
NFa=
QFa=
RFa=
SFa=
TFa=
JN=
ZDa=
WFa=
UFa=
LN=
YFa=
ZFa=
ON=
bGa=function(a,b){return aGa(a,b)};
cGa=
aGa=
PN=
dGa=
QN=
RN=function(a){g.I.call(this);this.j=a};
FK=
SN=
XDa=
TN=
eGa=
AAa=
fGa=function(a,b){this.callback=a;this.slot=b};
UN=function(){};
gGa=function(a,b,c){this.callback=a;this.slot=b;this.Ia=c};
hGa=
iGa=function(a,b,c){this.callback=a;this.slot=b;this.Ia=c};
VN=function(a){this.Ia=a};
WN=function(a){g.I.call(this);this.BL=a;this.Wb=new Map};
jGa=
XN=
YN=
ZN=function(a){g.I.call(this);this.j=a;this.Wb=new Map};
$N=
aO=
kGa=
lGa=
bO=
mGa=
nGa=
cO=
oGa=
dO=function(a){g.I.call(this);this.j=a;this.Lh=!0;this.Wb=new Map};
qM=
eO=
fO=
pGa=
gO=
qGa=
rGa=
aEa=
$Fa=
hO=
GK=function(a,b){if(g.aC("GENERATE_DETERMINSTIC_ADS_CONTROL_FLOW_IDS")){var c=a.B.get(b)||0;c++;a.B.set(b,c);return b+"_"+c}return g.nF(16)};
tK=
EN=
sGa=
tGa=
iO=
AEa=
BN=
uGa=
KN=
XFa=
tFa=
sFa=
TEa=
FN=
vFa=
zFa=
BFa=
wEa=
OFa=
vGa=
jFa=
eFa=
jO=
bEa=
xGa=
wGa=
SEa=
wFa=
yGa=
PFa=
GN=function(a){return"AD_PLACEMENT_KIND_START"===a.kind};
xEa=
zEa=
pEa=
rFa=
pFa=
ZEa=
WEa=
kEa=
jEa=
fEa=
lFa=
fFa=
HFa=
tEa=
uEa=
KFa=
LFa=
IFa=
JFa=
nFa=
BGa=
zGa=
kO=
AGa=
lO=
gK=
$J=
vza=
WJ=
CGa=
mO=
nO=function(){this.j=new Map};
oO=
uO=
EGa=
wO=
GGa=
HGa=function(){};
IGa=
JGa=function(){this.j=new HGa};
LGa=
KGa=
MGa=function(){};
NGa=
zO=
g.AO=function(a){this.D=a};
g.BO=
CO=
OGa=
PGa=
RGa=
QGa=
SGa=function(a){this.j=a};
TGa=
UGa=function(a){this.B=a};
VGa=
WGa=
XGa=
EO=
g.ZGa=
FO=
$Ga=
GO=
HO=
aHa=
bHa=
cHa=
dHa=
IO=
eHa=
JO=
fHa=
gHa=
KO=
MO=
g.OO=
QO=
hHa=
RO=
SO=
TO=
UO=
VO=
WO=
XO=
YO=
ZO=
$O=
aP=
iHa=
jHa=
bP=
cP=
dP=
eP=
fP=
gP=
kHa=
lHa=
hP=
g.iP=
g.jP=
g.kP=
lP=
oHa=
pHa=
mP=
rHa=
qHa=
sHa=
tHa=
oP=
pP=
qP=
Y=
vHa=
rP=
AHa=function(a){var b=new ix,c=0;try{var d=a.views;void 0!==d&&(S(b,1,uP[d]),c++);var e=a.driver;void 0!==e&&(S(b,2,lIa[e]),c++);var f=a.ctr;void 0!==f&&(S(b,3,uP[f]),c++);var h=a.avd;void 0!==h&&(S(b,4,uP[h]),c++);var l=a.impressions;void 0!==l&&(S(b,5,uP[l]),c++);var m=a.videoLength;void 0!==m&&(S(b,6,uP[m]),c++);return[c===Object.keys(a).length,b]}catch(n){return Y(n),[!1,void 0]}};
EHa=
FHa=
GHa=
PHa=
SHa=function(a){var b=new Ey,c=0;try{var d=a.attributionTag;void 0!==d&&(O(b,2,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
XHa=
YHa=
vIa=function(a){var b=new $x,c=0;try{var d=a.id;void 0!==d&&(O(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
wIa=function(a){var b=new by,c=0;try{var d=a.type;void 0!==d&&(S(b,1,yIa[d]),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
xIa=
ZHa=
$Ha=
fIa=
CIa=
jIa=
kIa=
HIa=
FIa=
JIa=function(a){var b=new gma,c=0;try{var d=a.effectBaseName;void 0!==d&&(O(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
KIa=function(a){var b=new oA,c=0;try{var d=a.resolutionWidth;void 0!==d&&(Wj(b,1,d),c++);var e=a.resolutionHeight;void 0!==e&&(Wj(b,2,e),c++);var f=a.frameRate;void 0!==f&&(xk(b,3,f),c++);var h=a.durationMs;void 0!==h&&(Zj(b,4,h),c++);return[c===Object.keys(a).length,b]}catch(l){return Y(l),[!1,void 0]}};
GIa=
LIa=function(a){var b=new dma,c=0;try{var d=a.previewWidth;void 0!==d&&(Wj(b,1,d),c++);var e=a.previewHeight;void 0!==e&&(Wj(b,2,e),c++);var f=a.fps;void 0!==f&&(Wj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return Y(h),[!1,void 0]}};
NJa=
SIa=function(a){var b=new Py,c=0;try{var d=a.datapushBuild;if(d){var e=OJa(d);e[0]&&(Jj(b,Ny,1,e[1]),c++)}return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
OJa=
TIa=
UIa=function(a){var b=new lma,c=0;try{var d=a.assetLoggingId;void 0!==d&&(O(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
AP=
QJa=
SJa=
UJa=function(a){var b=new Xz,c=0;try{var d=a.instructionOffset;void 0!==d&&(Yj(b,1,d),c++);var e=a.moduleIndex;void 0!==e&&(Wj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
TJa=
RJa=function(a){var b=new Uz,c=0;try{var d=a.moduleUuid;void 0!==d&&(zk(b,1,d),c++);var e=a.moduleName;void 0!==e&&(O(b,2,e),c++);var f=a.loadAddress;void 0!==f&&(Yj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return Y(h),[!1,void 0]}};
ZIa=function(a){var b=new iA,c=0;try{var d=a.key;void 0!==d&&(O(b,1,d),c++);var e=a.value;void 0!==e&&(O(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
pJa=function(a){var b=new zA,c=0;try{var d=a.serializedThrowable;void 0!==d&&(zk(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
qJa=
YJa=
$Ja=function(a){var b=new BA,c=0;try{var d=a.functionName;void 0!==d&&(O(b,1,d),c++);var e=a.source;void 0!==e&&(O(b,2,e),c++);var f=a.lineNumber;void 0!==f&&(Wj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return Y(h),[!1,void 0]}};
sJa=
tJa=
vJa=
wJa=
xJa=
gKa=
zJa=
CJa=
JJa=function(a){var b=new Zma,c=0;try{var d=a.itag;void 0!==d&&(Wj(b,1,d),c++);var e=a.startingByte;void 0!==e&&(Yj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
pKa=
kKa=function(a){var b=new Xna,c=0;try{var d=a.format;void 0!==d&&(Wj(b,1,d),c++);var e=a.isDownloaded;void 0!==e&&(Vj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
lKa=
rKa=
uKa=
tKa=function(a){var b=new Qna,c=0;try{var d=a.itag;void 0!==d&&(Wj(b,1,d),c++);var e=a.startingByte;void 0!==e&&(Yj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
vKa=
wKa=function(a){var b=new Rna,c=0;try{var d=a.externalVideoId;void 0!==d&&(O(b,1,d),c++);var e=a.videoSid;void 0!==e&&(Yj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
EKa=
xKa=
DP=
BKa=
KKa=
LKa=
MKa=
NKa=function(a){var b=new gB,c=0;try{var d=a.orchestrationActionId;void 0!==d&&(O(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
OKa=
RKa=
WKa=
zLa=
yLa=
HP=
IP=function(){HP.instance||(HP.instance=new HP);return HP.instance};
JP=function(){};
KP=
LP=function(){KP.instance||(KP.instance=new KP);return KP.instance};
MP=
GLa=
OP=
NP=
ILa=
ELa=
FLa=
JLa=
HLa=
PP=function(){};
KLa=
Zpa=
MLa=
LLa=
OLa=
QLa=
SLa=
TLa=
ULa=
RLa=
VLa=
g.WLa=
g.RP=
g.XLa=
g.YLa=
$La=
g.aMa=
ZLa=
SP=
bMa=
cMa=
dMa=
eMa=
UP=
TP=
fMa=function(a){g.pD("yt-player-watch-later-pending",a)};
gMa=
hMa=
g.iMa=
jMa=
g.VP=
WP=
kMa=
g.XP=
YP=
$P=
lMa=
aQ=
bQ=
mMa=
qMa=
sMa=
rMa=
uMa=
BMa=
CMa=
dQ=
tMa=
pMa=
oMa=
nMa=
hQ=
eQ=
gQ=
g.kQ=
mQ=
nQ=
FMa=
GMa=
oQ=
lQ=
KMa=
HMa=
IMa=
LMa=
pQ=
qQ=
g.rQ=
NMa=
OMa=
tQ=function(a){var b=a.data.getUint8(a.offset+a.j);a.j+=1;return b};
uQ=function(a){var b=a.data.getUint16(a.offset+a.j);a.j+=2;return b};
vQ=function(a){var b=a.data.getInt32(a.offset+a.j);a.j+=4;return b};
wQ=
xQ=
PMa=
QMa=
RMa=
yQ=
zQ=
BQ=
TMa=
UMa=
AQ=
VMa=
g.WMa=
g.XMa=
YMa=function(a,b){this.j=a;this.duration=b};
ZMa=
CQ=
$Ma=
FQ=
aNa=
GQ=
g.DQ=
g.bNa=
IQ=
g.EQ=
cNa=
HQ=
JQ=
dNa=
g.eNa=
fNa=
g.KQ=
gNa=
hNa=
LQ=
MQ=
RQ=
kNa=
OQ=
SQ=
UQ=
lNa=
VQ=
QQ=
TQ=
mNa=
WQ=
nNa=
XQ=
oNa=
NQ=
PQ=
iNa=
jNa=
YQ=
pNa=
qNa=
rNa=
ZQ=
$Q=
aR=
sNa=
bR=
cR=
tNa=
dR=
uNa=
eR=function(a){return 1===a.type||2===a.type};
fR=
gR=
vNa=
wNa=
xNa=
yNa=
zNa=
hR=
ANa=
BNa=
CNa=
DNa=
ENa=
FNa=
iR=
jR=
GNa=
kR=
g.INa=
KNa=
LNa=
MNa=
NNa=
ONa=
mR=
nR=
lR=
HNa=
PNa=
QNa=
RNa=
SNa=
oR=
pR=
TNa=
qR=
rR=
UNa=
VNa=
sR=
WNa=
XNa=
aOa=
bOa=
YNa=
ZNa=function(a,b){a.B[b]||(a.B[b]=new sR);return a.B[b]};
$Na=
cOa=
tR=
uR=
vR=
dOa=
eOa=
wR=
xR=function(a){return dHa(a.j)};
fOa=
yR=
gOa=
iOa=
hOa=
zR=
jOa=
kOa=
lOa=
mOa=
nOa=
oOa=
g.pOa=
qOa=
rOa=
AR=
sOa=
uOa=
g.BR=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
wOa=
g.xOa=
vOa=
DR=
zMa=
fQ=
AOa=function(a){return g.ed(a.j,function(b){return AL(b.info.mimeType)})};
BOa=function(a){return g.ed(a.j,function(b){return b.info.video?"EQUIRECTANGULAR"===b.info.video.projectionType:!1})};
COa=function(a){return g.ed(a.j,function(b){return b.info.video?"EQUIRECTANGULAR_THREED_TOP_BOTTOM"===b.info.video.projectionType:!1})};
DOa=function(a){return g.ed(a.j,function(b){return b.info.video?"MESH"===b.info.video.projectionType:!1})};
EOa=
FOa=
cQ=
CR=
GOa=
ER=
LOa=
MOa=function(a){return Js(a,function(b){return"FORMAT_STREAM_TYPE_OTF"===b.stream_type})?"FORMAT_STREAM_TYPE_OTF":"FORMAT_STREAM_TYPE_UNKNOWN"};
NOa=
OOa=
FR=
SOa=
POa=
QOa=function(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return"SPATIAL_AUDIO_TYPE_AMBISONICS_5_1";case "spatial_audio_type_ambisonics_quad":return"SPATIAL_AUDIO_TYPE_AMBISONICS_QUAD";case "spatial_audio_type_foa_with_non_diegetic":return"SPATIAL_AUDIO_TYPE_FOA_WITH_NON_DIEGETIC";default:return"SPATIAL_AUDIO_TYPE_NONE"}};
UOa=
VOa=
WOa=
XOa=
TOa=
YOa=
GR=function(a){return a.Kb?a.Kb-(a.K||a.timestampOffset):0};
HR=
IR=
ZOa=
$Oa=
JR=
aPa=
bPa=
cPa=
KR=
JOa=
ePa=
AMa=
vMa=
gPa=
MR=
OR=
PR=function(a){return"com.microsoft.playready"===a.keySystem};
QR=
RR=function(a){return"com.youtube.fairplay"===a.keySystem};
SR=function(a){return"com.youtube.fairplay.sbdl"===a.keySystem};
g.TR=function(a){return"fairplay"===a.flavor};
NR=
hPa=
jPa=
VR=
mPa=
kPa=
oPa=
pPa=
nPa=
lPa=
qPa=
rPa=
sPa=
g.UJ=function(a,b){return Number(a.flags[b])||0};
aS=
tPa=
uPa=
wPa=function(a){return vPa.then(a)};
xPa=
EMa=
bS=
yPa=
g.zPa=
BPa=
iQ=
CPa=
DPa=
EPa=
wMa=
yMa=
cS=
dS=function(){g.AO.apply(this,arguments)};
eS=
fS=
GPa=
HPa=
gS=
IPa=
hS=
iS=
JPa=
jS=
KPa=
kS=
LPa=
lS=
mS=
nS=
oS=
NPa=
OPa=
pS=
PPa=
QPa=
MPa=
qS=
RPa=
TPa=
VPa=
UPa=
SPa=
iQa=function(a,b,c,d,e){g.I.call(this);this.webPlayerContextConfig=b;this.El=d;this.csiServiceName=this.csiPageType="";this.userAge=NaN;this.uj=this.Bf=this.wb=this.rj=this.userDisplayName=this.userDisplayImage=this.Qi="";this.j={};this.dc={};this.controlsType="0";this.Qd=NaN;this.Kb=!1;this.Rf=(0,g.YD)();this.ac=0;this.Fl=this.Go=!1;this.Om=!0;this.preferGapless=this.Hm=this.Qf=this.C=this.Dl=this.Pf=!1;this.lh=[];a=a?g.qd(a):{};b&&b.csiPageType&&(this.csiPageType=b.csiPageType);b&&b.csiServiceName&&
(this.csiServiceName=b.csiServiceName);b&&b.preferGapless&&(this.preferGapless=b.preferGapless);this.experiments=new sPa(b?b.serializedExperimentIds:a.fexp,b?b.serializedExperimentFlags:a.fflags);this.forcedExperiments=b?b.serializedForcedExperimentIds:WC("",a.forced_experiments)||void 0;this.cspNonce=(null==b?0:b.cspNonce)?b.cspNonce:WC("",a.csp_nonce);Uza=this.L("web_player_deprecated_uvr_killswitch");try{var f=document.location.toString()}catch(R){f=""}this.Nf=f;this.ancestorOrigins=(d=window.location.ancestorOrigins)?
Array.from(d):[];this.D=TC(!1,b?b.isEmbed:a.is_embed);if(b&&b.device){if(d=b.device,d.androidOsExperience&&(this.j.caoe=""+d.androidOsExperience),d.brand&&(this.j.cbrand=d.brand),d.browser&&(this.j.cbr=d.browser),d.browserVersion&&(this.j.cbrver=d.browserVersion),d.cobaltReleaseVehicle&&(this.j.ccrv=""+d.cobaltReleaseVehicle),this.j.c=d.interfaceName||"WEB",this.j.cver=d.interfaceVersion||"html5",d.interfaceTheme&&(this.j.ctheme=d.interfaceTheme),this.j.cplayer=d.interfacePlayerType||"UNIPLAYER",
d.model&&(this.j.cmodel=d.model),d.network&&(this.j.cnetwork=d.network),d.os&&(this.j.cos=d.os),d.osVersion&&(this.j.cosver=d.osVersion),d.platform&&(this.j.cplatform=d.platform),f=aS(this.experiments,"html5_log_vss_extra_lr_cparams_freq"),"all"===f||"once"===f)d.chipset&&(this.dc.cchip=d.chipset),d.cobaltAppVersion&&(this.dc.ccappver=d.cobaltAppVersion),d.firmwareVersion&&(this.dc.cfrmver=d.firmwareVersion),d.deviceYear&&(this.dc.crqyear=d.deviceYear)}else this.j.c=a.c||"web",this.j.cver=a.cver||
"html5",this.j.cplayer="UNIPLAYER";this.loaderUrl=b?this.D||WPa(this)&&b.loaderUrl?b.loaderUrl||"":this.Nf:this.D||WPa(this)&&a.loaderUrl?WC("",a.loaderUrl):this.Nf;this.D&&g.Ua("yt.embedded_player.embed_url",this.loaderUrl);this.K=vK(this.loaderUrl,XPa,YPa);d=this.loaderUrl;var h=void 0===h?!1:h;this.Qo=uK(vK(d,ZPa,null),d,h,"Trusted Ad Domain URL");this.md=TC(!1,a.privembed);this.protocol=0===this.Nf.indexOf("http:")?"http":"https";this.Ga=Wza((b?b.customBaseYoutubeUrl:a.BASE_YT_URL)||"")||Wza(this.Nf)||
this.protocol+"://www.youtube.com/";h=b?b.eventLabel:a.el;d="detailpage";"adunit"===h?d=this.D?"embedded":"detailpage":"embedded"===h||this.K?d=UC(d,h,$Pa):h&&(d="embedded");this.Ka=d;Vsa();h=null;d=b?b.playerStyle:a.ps;f=g.Gb(aQa,d);!d||f&&!this.K||(h=d);this.playerStyle=h;this.ma=(this.N=g.Gb(aQa,this.playerStyle))&&"play"!==this.playerStyle&&"jamboard"!==this.playerStyle;this.Po=!this.ma;this.Ua=TC(!1,a.disableplaybackui);this.disablePaidContentOverlay=TC(!1,null==b?void 0:b.disablePaidContentOverlay);
this.disableSeek=TC(!1,null==b?void 0:b.disableSeek);this.enableSpeedOptions=(null==b?void 0:b.enableSpeedOptions)||(iL().defaultPlaybackRate?rS||g.RC||sS?g.UR&&Kv("20")||g.kL&&Kv("4")||g.tS&&Kv("11")||Voa():!(g.tS&&!g.JC("chrome")||rS||g.JC("android")||g.JC("silk")):!1);this.Ko=TC(!1,a.enable_faster_speeds);this.B=TC("blazer"===this.playerStyle,a.is_html5_mobile_device||b&&b.isMobileDevice);this.bb=QC()||SC();this.Oo=this.L("mweb_allow_background_playback")?!1:this.B&&!this.N;this.Xa=zBa();this.Cp=
g.bQa;var l;this.Gl=!!(null==b?0:null==(l=b.embedsHostFlags)?0:l.optOutApiDeprecation);var m;this.Jm=!!(null==b?0:null==(m=b.embedsHostFlags)?0:m.allowPfpImaIntegration);this.Mo=this.L("embeds_web_enable_ve_conversion_logging_tracking_no_allow_list");var n;b?void 0!==b.hideInfo&&(n=!b.hideInfo):n=a.showinfo;this.Mm=g.uS(this)&&!this.Gl||TC(!vS(this)&&!wS(this)&&!this.N,n);this.Hl=b?!!b.mobileIphoneSupportsInlinePlayback:TC(!1,a.playsinline);l=this.B&&cQa&&null!=xS&&0<xS&&2.3>=xS;m=b?b.useNativeControls:
a.use_native_controls;this.Z=g.uS(this)&&this.B;n=this.B&&!this.Z;m=g.yS(this)||!l&&TC(n,m)?"3":"1";n=b?b.controlsType:a.controls;this.controlsType="0"!==n&&0!==n?m:"0";this.zl=this.B;this.color=UC("red",b?b.progressBarColor:a.color,dQa);this.xp="3"===this.controlsType;this.Nc=!this.D;this.Nm=(m=!this.Nc&&!wS(this)&&!this.ma&&!this.N&&!vS(this))&&!this.xp&&"1"===this.controlsType;this.Ae=g.zS(this)&&m&&"0"===this.controlsType&&!this.Nm;this.qr=this.Bp=l;this.yd=("3"===this.controlsType||this.B||TC(!1,
a.use_media_volume))&&!this.Z;this.Pm=OC&&!g.Tc(601)?!1:!0;this.No=this.D||!1;this.od=wS(this)?"":(this.loaderUrl||a.post_message_origin||"").substring(0,128);this.widgetReferrer=WC("",b?b.widgetReferrer:a.widget_referrer);var p;b?b.disableCastApi&&(p=!1):p=a.enablecastapi;p=!this.K||TC(!0,p);l=!0;b&&b.disableMdxCast&&(l=!1);this.wj=this.L("enable_cast_for_web_unplugged")&&g.AS(this)&&l||this.L("enable_cast_on_music_web")&&g.HH(this)&&l||p&&l&&"1"===this.controlsType&&!this.B&&(wS(this)||g.zS(this)||
g.BS(this));this.ir=!!window.document.pictureInPictureEnabled||yBa();p=b?!!b.supportsAutoplayOverride:TC(!1,a.autoplayoverride);this.Oi=!(this.B&&!g.uS(this))&&!g.JC("nintendo wiiu")||p;p=b?!!b.enableMutedAutoplay:TC(!1,a.mutedautoplay);this.Ho=this.L("embeds_enable_muted_autoplay")&&g.uS(this);this.Pi=p&&!1;p=(wS(this)||vS(this))&&"blazer"===this.playerStyle;this.xj=b?!!b.disableFullscreen:!TC(!0,a.fs);l=g.YC(g.CS(this))&&g.uS(this);this.Sb=!this.xj&&(p||g.bD())&&!l;this.Gm=this.L("uniplayer_block_pip")&&
(KC()&&Kv(58)&&!SC()||mE);p=g.uS(this)&&!this.Gl;var q;b?void 0!==b.disableRelatedVideos&&(q=!b.disableRelatedVideos):q=a.rel;this.Xd=p||TC(!this.N,q);this.Km=TC(!1,b?b.enableContentOwnerRelatedVideos:a.co_rel);this.X=SC()&&0<xS&&4.4>=xS?"_top":"_blank";this.Sg=g.BS(this);this.vl=TC("blazer"===this.playerStyle,b?b.enableCsiLogging:a.enablecsi);switch(this.playerStyle){case "blogger":q="bl";break;case "gmail":q="gm";break;case "gac":q="ga";break;case "books":q="gb";break;case "docs":case "flix":q=
"gd";break;case "duo":q="gu";break;case "google-live":q="gl";break;case "google-one":q="go";break;case "play":q="gp";break;case "chat":q="hc";break;case "hangouts-meet":q="hm";break;case "photos-edu":case "picasaweb":q="pw";break;default:q="yt"}this.ra=q;this.Ba=WC("",b?b.authorizedUserIndex:a.authuser);this.Kc=g.uS(this)&&(this.md||!Loa()||this.bb);var r;b?void 0!==b.disableWatchLater&&(r=!b.disableWatchLater):r=a.showwatchlater;this.Ke=((q=!this.Kc)||!!this.Ba&&q)&&TC(!this.ma,this.K?r:void 0);
this.Cf=b?b.isMobileDevice||!!b.disableKeyboardControls:TC(!1,a.disablekb);this.loop=TC(!1,a.loop);this.pageId=WC("",b?b.initialDelegatedSessionId:a.pageid);this.Tq=TC(!0,a.canplaylive);this.ib=TC(!1,a.livemonitor);this.disableSharing=TC(this.N,b?b.disableSharing:a.ss);(r=b&&this.L("fill_video_container_size_override_from_wpcc")?b.videoContainerOverride:a.video_container_override)?(q=r.split("x"),2!==q.length?r=null:(r=Number(q[0]),q=Number(q[1]),r=isNaN(r)||isNaN(q)||0>=r*q?null:new g.Ie(r,q))):
r=null;this.Qm=r;this.mute=b?!!b.startMuted:TC(!1,a.mute);this.storeUserVolume=!this.mute&&TC("0"!==this.controlsType,b?b.storeUserVolume:a.store_user_volume);r=b?b.annotationsLoadPolicy:a.iv_load_policy;this.annotationsLoadPolicy="3"===this.controlsType?3:UC(void 0,r,DS);this.captionsLanguagePreference=b?b.captionsLanguagePreference||"":WC("",a.cc_lang_pref);r=UC(2,b?b.captionsLanguageLoadPolicy:a.cc_load_policy,DS);"3"===this.controlsType&&2===r&&(r=3);this.Ab=r;this.pj=b?b.hl||"en_US":WC("en_US",
a.hl);this.region=b?b.contentRegion||"US":WC("US",a.cr);this.hostLanguage=b?b.hostLanguage||"en":WC("en",a.host_language);this.Io=!this.md&&Math.random()<g.UJ(this.experiments,"web_player_api_logging_fraction");this.Za=!this.md;this.enabledEngageTypes=new Set;this.deviceIsAudioOnly=!(null==b||!b.deviceIsAudioOnly);this.Qd=VC(this.Qd,a.ismb);this.Po?(r=a.vss_host||"s.youtube.com","s.youtube.com"===r&&(r=eQa(this.Ga)||"www.youtube.com")):r="video.google.com";this.Rm=r;fQa(this,a,!0);this.Na=new cS;
g.M(this,this.Na);q=b?b.innertubeApiKey:WC("",a.innertube_api_key);p=b?b.innertubeApiVersion:WC("",a.innertube_api_version);r=b?b.innertubeContextClientVersion:WC("",a.innertube_context_client_version);q=g.aC("INNERTUBE_API_KEY")||q;p=g.aC("INNERTUBE_API_VERSION")||p;l=g.aC("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO");m=g.ZR(this);n="number"===typeof this.j.c?Number(this.j.c):Object.keys(WIa).indexOf(this.j.c);this.bl={innertubeApiKey:q,innertubeApiVersion:p,rI:l,BO:m,uX:n,innertubeContextClientVersion:g.aC("INNERTUBE_CONTEXT_CLIENT_VERSION")||
r,DO:this.hostLanguage,CO:this.region,vX:g.aC("INNERTUBE_HOST_OVERRIDE")||"",wX:!!g.aC("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),EO:!!g.aC("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1)};this.Jl=null!=window.WebKitPlaybackTargetAvailabilityEvent;this.G=new xPa(this.experiments,this.L("html5_force_hfr_support")?!0:dK(this)||Soa()||Toa()||gQa(this),g.kL&&g.Tc(56)||g.UR&&g.Tc(54)||this.L("html5_force_vp9_subsample_encryption_support")||gQa(this));r=this.Qd;q=new RPa(this.experiments);g.eK(this)&&
(q.D=!0,q.G=.1);r&&(q.B=r/8);q.C=480<=SP();this.schedule=new KPa(q,new rPa(this.experiments),e);g.M(this,this.schedule);var t;this.enableSafetyMode=null!=(t=null==b?void 0:b.initialEnableSafetyMode)?t:TC(!1,a.enable_safety_mode);e=this.Ua?!1:wS(this)&&"blazer"!==this.playerStyle;var v;b?null!=b.disableAutonav&&(v=!b.disableAutonav):v=a.allow_autonav;this.Le=TC(e,!this.ma&&v);this.sendVisitorIdHeader=b?!!b.sendVisitorIdHeader:TC(!1,a.send_visitor_id_header);var x;"docs"===this.playerStyle&&(b?x=b.disableNativeContextMenu:
x=a.disable_native_context_menu);this.disableNativeContextMenu=TC(!1,x);this.Lo=dK(this)&&this.L("enable_skip_intro_button");this.embedConfig=WC("",b?b.serializedEmbedConfig:a.embed_config);this.Ea=apa(a,g.uS(this));this.C="EMBEDDED_PLAYER_MODE_PFL"===this.Ea;this.embedsErrorLinks=!(null==b||!b.embedsErrorLinks);this.hk=TC(!1,a.full_window);var B;this.qb=this.L("web_player_chromeless_killswitch")?!g.AS(this)&&!ES(this)&&!0:!(null==(B=this.webPlayerContextConfig)?0:B.chromeless);var E;this.livingRoomAppMode=
UC("LIVING_ROOM_APP_MODE_UNSPECIFIED",a.living_room_app_mode||(null==b?void 0:null==(E=b.device)?void 0:E.livingRoomAppMode),hQa);var F;v=VC(NaN,null==b?void 0:null==(F=b.device)?void 0:F.deviceYear);isNaN(v)||(this.deviceYear=v);this.transparentBackground=b?!!b.transparentBackground:TC(!1,a.transparent_background);this.showMiniplayerButton=b?!!b.showMiniplayerButton:TC(!1,a.show_miniplayer_button);var H;this.L("embeds_web_enable_set_faux_fullscreen_in_public_api")&&g.uS(this)&&!(null==b?0:null==
(H=b.embedsHostFlags)?0:H.allowSetFauxFullscreen)?this.externalFullscreen=!1:this.externalFullscreen=b?!!b.externalFullscreen:TC(!1,a.external_fullscreen);this.showMiniplayerUiWhenMinimized=b?!!b.showMiniplayerUiWhenMinimized:TC(!1,a.use_miniplayer_ui);this.showInlinePreviewUi=b?!!b.showInlinePreviewUi:!1;this.Kl=TC(!1,a.showbackbutton);var P;this.Om=null!=(P=a.show_loop_video_toggle)?P:!0;this.fp=1E-4>Math.random();this.jl=a.onesie_hot_config||(null==b?0:b.onesieHotConfig)?new IPa(a.onesie_hot_config,
null==b?void 0:b.onesieHotConfig):void 0;this.isTectonic=b?!!b.isTectonic:!!a.isTectonic;this.playerCanaryState=c;this.playerCanaryStage=null==b?void 0:b.canaryStage;this.Of=new TPa;g.M(this,this.Of);this.Dl=TC(!1,a.force_gvi);this.datasyncId=(null==b?void 0:b.datasyncId)||g.aC("DATASYNC_ID");this.Ro=g.aC("LOGGED_IN",!1);this.sj=(null==b?void 0:b.allowWoffleManagement)||!1;this.Il=Infinity;this.livingRoomPoTokenId=null==b?void 0:b.livingRoomPoTokenId;this.L("html5_high_res_logging_always")?this.Qf=
!0:this.Qf=100*Math.random()<g.UJ(this.experiments,"html5_high_res_logging_percent");var Q;this.Hm=!!(null==b?0:null==(Q=b.embedsHostFlags)?0:Q.allowRcat);this.Im=!g.AS(this)&&!ES(this)};
g.CS=
fQa=
lQa=
g.FS=
GS=
HS=
g.yS=
g.ZR=function(a){return a.j.c};
g.eK=function(a){return/^TVHTML5/.test(g.ZR(a))};
WPa=function(a){return"TVHTML5_SIMPLY_EMBEDDED_PLAYER"===g.ZR(a)};
gQa=
g.IS=
dK=
g.JS=
ES=function(a){return"WEB_KIDS"===g.ZR(a)};
g.AS=function(a){return"WEB_UNPLUGGED"===g.ZR(a)};
KS=function(a){return"TVHTML5_UNPLUGGED"===g.ZR(a)};
g.cK=
g.HH=function(a){return"WEB_REMIX"===g.ZR(a)};
g.LS=
g.NS=
mQa=
OS=
oQa=
wS=function(a){return"detailpage"===a.Ka};
g.zS=function(a){return"embedded"===a.Ka};
PS=function(a){return"leanback"===a.Ka};
vS=function(a){return"adunit"===a.Ka||"gvn"===a.playerStyle};
g.BS=function(a){return"profilepage"===a.Ka};
g.uS=
pQa=
g.QS=
g.RS=
eQa=
SS=function(a){this.j=a};
TS=
sQa=
tQa=
uQa=
vQa=
wQa=
xQa=
yQa=
US=
zQa=
EQa=
DQa=
AQa=
CQa=
BQa=
VS=function(a,b){this.j=a;this.B=b};
FQa=
WS=function(a,b){this.j=a;this.B=b};
GQa=
HQa=
JQa=
KQa=
LQa=
g.XS=
g.ZS=
g.$S=
g.MQa=
g.YS=
QQa=
aT=
bT=
TQa=
cT=
dT=
UQa=
XQa=
YQa=
ZQa=
$Qa=
eT=
g.aRa=
g.fT=
g.gT=
bRa=
g.eRa=
fRa=
gRa=
g.iT=
g.hRa=
g.jT=
g.kT=
g.lT=
nRa=
g.oRa=
rRa=
g.mRa=
kRa=
lRa=
tRa=
nT=
uRa=
wRa=
vRa=
xRa=
g.rT=
pT=
g.qT=
sT=
yRa=
oT=
zRa=
tT=
ARa=
g.vT=
g.yT=
ERa=
BRa=
HRa=
DRa=
XRa=
fSa=
MT=
gSa=
iSa=
URa=
AT=
hSa=
g.QRa=
FT=
NT=
SRa=
kSa=
jSa=
OT=
xT=
VRa=
pSa=
lSa=
mSa=
nSa=
oSa=
qSa=
QT=
rSa=
g.RT=
tSa=
uSa=
ST=
g.TT=
vSa=
g.UT=
wT=
CT=
sSa=
YRa=
CRa=
bSa=
g.WT=
XT=
DT=
g.ZT=function(a){return!!a.j&&BOa(a.j)};
g.$T=function(a){return!!a.j&&COa(a.j)};
g.aU=function(a){return!!a.j&&DOa(a.j)};
g.PT=function(a){return!!a.j&&EOa(a.j)};
g.FSa=
g.GSa=
g.bU=function(a){return a.L("enable_wn_infocards")};
g.cU=
g.HSa=
dU=
g.eU=
KT=
fU=
gU=
ISa=
g.hU=
JSa=
LT=
iU=
KSa=
jU=
LSa=function(a){return a.enablePreroll&&a.enableServerStitchedDai};
ET=
kU=
g.lU=
TRa=
g.mU=
MSa=
ASa=
BT=
LRa=function(a){return a.L("html5_heartbeat_iff_heartbeat_params_filled")};
NSa=
JRa=
IRa=
FRa=
g.OSa=
nU=
g.HT=
g.oU=
g.pU=
g.PSa=
WSa=
YSa=
ZSa=
qU=
sU=function(a,b,c){a.state.X[b]=function(){return c.apply(a,g.Ia.apply(0,arguments))};
a.state.j.hasOwnProperty(b)||rU(a,b,c);a.state.Z.add(b)};
tU=
rU=
g.uU=
$Sa=
vU=
aTa=
bTa=
wU=
dTa=
xU=
fTa=
gTa=
eTa=
hTa=
kTa=
g.AU=
mTa=
oTa=
g.BU=
pTa=
rTa=
qTa=
DU=
g.EU=
sTa=
g.FU=
g.GU=
g.HU=
g.JU=
g.tTa=
g.LU=
g.uTa=
g.MU=
g.NU=
vTa=
wTa=
OU=
yTa=
PU=
zTa=
CTa=
DTa=function(a){return{Z4:ZO(a,2),videoId:XO(a,3),kS:UO(a,4)}};
FTa=
ETa=function(a){return{conditions:ZO(a,1),imb:UO(a,2)}};
GTa=function(a){return{BI:ZO(a,1)}};
BTa=function(a,b){var c;if(b.SK)for(c=0;c<b.SK.length;c++)hP(a,1,b.SK[c],HTa,1);if(b.GG)for(c=0;c<b.GG.length;c++)hP(a,2,b.GG[c],ITa,1);dP(a,5,b.w7)};
ITa=
HTa=function(a,b){dP(a,1,b.A0);dP(a,3,b.maxHeight);dP(a,4,b.maxWidth);dP(a,11,b.maxFramerate);dP(a,12,b.jw);eP(a,15,b.I7)};
LTa=
JTa=function(a){return{iv:WO(a,5),L7:VO(a,7)}};
KTa=function(a){return{videoId:XO(a,2)}};
OTa=
PTa=function(a,b){dP(a,1,b.type);fP(a,2,b.value)};
QTa=
RTa=function(a){return{hK:UO(a,1),iK:UO(a,2),seekSource:UO(a,3)}};
NTa=
TTa=function(a,b){dP(a,1,b.Ah);dP(a,2,b.KC);dP(a,3,b.Gr)};
UTa=function(a){return{Ah:UO(a,1),KC:UO(a,2),Gr:UO(a,3)}};
STa=
MTa=
VTa=function(a,b){gP(a,1,b.name);gP(a,2,b.value)};
WTa=function(a){return{minBandwidthBytesPerSec:UO(a,1),minReadaheadMs:UO(a,2)}};
XTa=
YTa=function(a){return{oZ:UO(a,1),nX:UO(a,2),body:WO(a,4)}};
ZTa=
$Ta=function(a){return{first:UO(a,1),JX:UO(a,2)}};
bUa=
cUa=
aUa=
QU=
dUa=function(a){return{itag:UO(a,1),lmt:UO(a,2),xtags:XO(a,3)}};
eUa=
gUa=
fUa=
hUa=function(a){return{token:XO(a,1),videoId:XO(a,2)}};
jUa=
iUa=function(a){return{ip:UO(a,1)}};
kUa=
lUa=
mUa=
nUa=
g.RU=function(a){this.tag=a};
pUa=function(a,b){oUa.apply(null,[6,a,b].concat(g.oa(g.Ia.apply(2,arguments))))};
qUa=
oUa=
SU=
sUa=
g.TU=
tUa=
UU=
uUa=
g.WU=
g.XU=
YU=function(a,b){a.updateValue("icon",b)};
g.VU=function(a,b){a.updateValue("label",b)};
ZU=
$U=
aV=function(a){g.I.call(this);this.api=a};
bV=
vUa=
cV=
wUa=
AUa=
dV=
eV=
BUa=
CUa=
EUa=
DUa=
FUa=
GUa=
HUa=
fV=
gV=
IUa=
g.hV=
g.iV=
KUa=
LUa=
MUa=
g.jV=
kV=
SUa=
RUa=
lV=
UUa=
nV=
oV=
pV=
VUa=function(a,b){var c;return null==(c=b.onEnter)?void 0:c.some(a.B)};
WUa=
XUa=
YUa=
ZUa=
qV=
aVa=
$Ua=
bVa=
cVa=
rV=
sV=
dVa=
fVa=
gVa=
hVa=
tV=
iVa=
uV=
jVa=
mVa=
vV=function(a,b){navigator.mediaSession.setActionHandler(a,b)};
kVa=
pVa=
nVa=
oVa=
lVa=
wV=
tVa=
rVa=
sVa=
uVa=
xV=
vVa=
wVa=
xVa=
yV=
yVa=
zVa=
AVa=
g.AV=
BV=
zV=
BVa=
CV=
CVa=
EV=
FV=
EVa=
DV=
GVa=
GV=
g.HV=
IV=
HVa=
JV=
KV=
LV=
IVa=
LVa=
KVa=
NV=
OV=
PV=
OVa=
MVa=
NVa=function(a){var b;return!(null==(b=a.j)||!b.Jb)};
QV=
PVa=
TVa=
RVa=
QVa=
SVa=
RV=
VVa=
WVa=
SV=
XVa=
YVa=
g.ZVa=
TV=
cWa=
aWa=
bWa=
UV=
dWa=
$Va=
eWa=
VV=
WV=function(){this.B=this.j=NaN};
fWa=
gWa=
hWa=
XV=
iWa=
jWa=
kWa=
lWa=
mWa=
g.YV=
nWa=
oWa=
rWa=
pWa=
g.$V=
g.aW=
sWa=function(){this.B=[];this.j=[]};
g.bW=
g.cW=
tWa=
g.dW=
g.eW=
uWa=
vWa=
g.wWa=
xWa=
gW=
hW=
yWa=
zWa=
fW=
g.AWa=
g.BWa=
g.iW=
DWa=
CWa=
EWa=
FWa=
GWa=
HWa=
IWa=
JWa=
FPa=
KWa=
LWa=
g.kW=function(a){return a.He.get("captions")};
RWa=
lW=
UWa=
XWa=
WWa=
VWa=
PWa=
g.OWa=
g.KU=function(a){return a.He.get("webgl")};
QWa=
MWa=
NWa=
SWa=
mW=
nW=function(a){return a.He.get("ad")};
ZWa=
IU=function(a){if(a.J.U().wj)return a.He.get("remote")};
g.oW=
lTa=function(a){if(a.J.U().qb)return a.He.get("ux")};
pW=
g.qW=function(a){return a.He.get("annotations_module")};
$Wa=
bXa=
aXa=
TWa=
dXa=
eXa=
fXa=
rW=
g.tW=
g.uW=
gXa=
g.vW=
g.wW=
yW=
iXa=
jXa=
kXa=
mXa=
lXa=
nXa=
zW=
AW=
oXa=
g.BW=
rXa=
sXa=
CW=
qXa=
tXa=
uXa=
pXa=
DW=
vXa=
g.EW=
GW=
wXa=
xXa=
FW=
yXa=
zXa=
AXa=
BXa=
DXa=
CXa=
g.IW=
FXa=
GXa=
EXa=
JXa=
HXa=
JW=
KW=
g.LW=
g.MW=
KXa=
NW=
OW=
LXa=
NXa=
QW=
MXa=
OXa=
g.RW=
PXa=
g.PW=
g.SW=
QXa=
SXa=
RXa=
UXa=
TXa=
VXa=
TW=
WXa=
XXa=
YXa=
UW=
VW=
$Xa=
ZXa=
YW=
WW=
XW=
aYa=
bYa=
ZW=
$W=
dYa=
eYa=
cYa=
fYa=
gYa=
hYa=
jYa=
lYa=
kYa=
aX=
mYa=
nYa=
iYa=
sYa=
tYa=
uYa=
xYa=
wYa=
vYa=
yYa=
zYa=
bX=
cX=
AYa=
BYa=
CYa=
DYa=
FYa=
dX=
fX=
EYa=
g.gX=
GYa=
HYa=
IYa=
JYa=
KYa=
hX=
LYa=
MYa=
PYa=
iX=
QYa=
OYa=
jX=
kX=
g.lX=
RYa=
SYa=
UYa=
WYa=
TYa=
VYa=
mX=
XYa=
ZYa=
$Ya=
bZa=
cZa=
nX=
oX=
dZa=
YYa=
fZa=
eZa=
pX=function(a){var b=a.api.U(),c=a.api.getVideoData();c=g.QS(b)+c.Nc;if(!g.uS(b))return c;b={};g.uU(a.api,"addEmbedsConversionTrackingParams",[b]);g.RP(b,"emb_ch_name_ex");return g.Fm(c,b)};
qX=
rX=
hZa=
gZa=
sX=
tX=
iZa=
jZa=
uX=
kZa=
lZa=
mZa=
vX=
nZa=
wX=
oZa=
xX=
g.yX=
NZa=
OZa=
g.zX=
PZa=
g.AX=
RZa=
SZa=
TZa=
QZa=
VZa=
UZa=
WZa=
ZZa=
BX=
a_a=
$Za=
XZa=
YZa=
b_a=
c_a=
CX=
DX=
d_a=
e_a=
f_a=
g.FX=
g_a=
h_a=
i_a=
k_a=
l_a=
t_a=
o_a=
p_a=
m_a=
g.GX=
w_a=
IX=
x_a=
B_a=
LX=
C_a=
y_a=
HX=
OX=
NX=
JX=
PX=
F_a=
G_a=
QX=
KX=
u_a=
E_a=
g.H_a=
MX=
z_a=
D_a=
I_a=
EX=
RX=
J_a=
K_a=
A_a=
SX=
TX=
L_a=
UX=
g.VX=
M_a=
g.WX=
XX=
YX=
N_a=
O_a=
Q_a=
R_a=
P_a=
ZX=
$X=
S_a=
T_a=
U_a=
V_a=
W_a=
Y_a=
$_a=
Z_a=
X_a=function(a){return a.toString()};
b0a=
a0a=
aY=
bY=
c0a=
e0a=
f0a=
cY=function(a,b){a.J.setOption("captions","track",b)};
d0a=
g0a=
h0a=
g.dY=
i0a=
g.fY=
eY=
hY=
gY=
k0a=
j0a=
l0a=
iY=
jY=
m0a=
n0a=
p0a=
o0a=
q0a=
r0a=
s0a=
lY=
t0a=
g.mY=
g.CU=
u0a=
v0a=
w0a=
x0a=
y0a=
A0a=
B0a=
C0a=
z0a=
D0a=
g.nY=
E0a=
F0a=
G0a=
H0a=
g.oY=
pY=
J0a=
qY=
L0a=
rY=
K0a=
O0a=
P0a=function(a){var b=a.D;a.D=[];return b};
N0a=function(a){return/.*(\.c\.youtube\.com|.*\.googlevideo\.com)/.test(a)};
sY=
Q0a=function(a,b){this.location=a;this.j=b};
tY=
uY=
vY=
R0a=
wY=
T0a=
U0a=
V0a=
xY=
W0a=
X0a=
Y0a=
Z0a=
$0a=
b1a=
S0a=
c1a=
yY=
d1a=
e1a=
f1a=
g1a=
AY=
h1a=function(){this.B=this.j=!1};
i1a=
g.BY=
j1a=
o1a=
s1a=
q1a=
l1a=
DY=
k1a=
r1a=
FY=
u1a=
t1a=
GY=
w1a=
x1a=
y1a=
A1a=function(a){var b=z1a();b&&document.addEventListener(b,a,!1)};
B1a=
z1a=
C1a=
FVa=
KY=
D1a=
E1a=
LY=function(a,b){return a.B.get(b)};
G1a=
F1a=
H1a=
g.MY=
O1a=
PY=
P1a=
QY=
R1a=
SY=
RY=
S1a=
I1a=
TY=function(a,b){a.dc=NaN;a.ac=null;a.Sb.stop();a.bb&&b&&T1a(a.bb);a.wb=null;a.bb=null};
U1a=
V1a=
X1a=
UY=
Y1a=
VY=
$1a=
Z1a=
WY=
g.W1a=
M1a=
NY=
a2a=
b2a=
c2a=
d2a=
e2a=
J1a=
L1a=
OY=
h2a=
i2a=
XY=
ZY=
$Y=
j2a=
k2a=
l2a=
m2a=
n2a=
YY=
f2a=
o2a=
p2a=
t2a=
g2a=
v2a=
z2a=
dZ=
A2a=
B2a=
x2a=
fZ=
C2a=
D2a=
u2a=
E2a=
y2a=
F2a=
gZ=
eZ=
G2a=
I2a=
H2a=
cZ=
K2a=
jZ=
L2a=
hZ=
kZ=
iZ=
lZ=
M2a=
N2a=
O2a=
R2a=
Q2a=
T2a=
U2a=
S2a=
oZ=
nZ=
W2a=
X2a=
Y2a=
Z2a=function(a,b){this.zd=a;this.policy=b;this.playbackRate=1};
$2a=
b3a=
a3a=
c3a=
qZ=
rZ=
d3a=
sZ=
e3a=
g3a=
j3a=
h3a=
i3a=
yZ=
CZ=
l3a=
DZ=
m3a=
n3a=
o3a=
EZ=
FZ=
GZ=
q3a=
r3a=
p3a=
u3a=
v3a=
w3a=
HZ=
IZ=
x3a=
y3a=
z3a=
jRa=function(a,b){var c,d,e;return g.G(function(f){if(1==f.j){if(!b)return f.return(b);c=JZ.Yt("woe");d=new g.AO(a.B);return g.z(f,d.encrypt(b,a.j),2)}e=f.B;JZ.Bs(c,Math.ceil(b.byteLength/16));return f.return(e)})};
qRa=
A3a=
C3a=
B3a=
D3a=
E3a=
KZ=
F3a=
G3a=
MZ=
NZ=
LZ=
H3a=
uZ=
I3a=
J3a=
K3a=
L3a=
M3a=
N3a=
O3a=
PZ=
R3a=
T3a=
V3a=
Y3a=
c4a=
e4a=
f4a=
d4a=
g4a=
h4a=
i4a=
RZ=
k4a=
l4a=
SZ=function(a){a.ma||(a.ma=(0,g.YD)(),jM("mb_s",a.ma,a.j))};
m4a=function(a){a.Ba||(a.Ba=(0,g.YD)(),jM("ovfs_rp",a.Ba,a.j))};
n4a=function(a){a.ra||(a.ra=(0,g.YD)(),jM("oafs_rp",a.ra,a.j))};
o4a=function(a){a.G||(a.G=(0,g.YD)(),jM("vda",a.G,a.j),a.D&&GD(g.ED(),4))};
p4a=
q4a=function(a){a.Ga||(a.Ga=(0,g.YD)(),jM("vis_a",a.Ga,a.j))};
r4a=function(a){a.N||(a.N=(0,g.YD)(),jM("ais_a",a.N,a.j))};
s4a=function(a){a.Na||(a.Na=(0,g.YD)(),jM("vrb_f",a.Na,a.j))};
t4a=
u4a=
v4a=
w4a=
TZ=
y4a=
z4a=
A4a=
UZ=
VZ=
WZ=function(a,b,c){this.audio=a;this.video=b;this.reason=c};
XZ=
YZ=
ZZ=
$Z=
B4a=
a_=
C4a=
H4a=
K4a=
L4a=
M4a=
N4a=
e_=
f_=
J4a=
G4a=
O4a=
c_=
D4a=
P4a=
b_=
d_=
E4a=
F4a=
g_=
Q4a=
R4a=
I4a=
S4a=
T4a=
X4a=
U4a=
Y4a=
Z4a=
V4a=
W4a=
$4a=
a5a=
c5a=
b5a=
h_=
h5a=
f5a=
g5a=
d5a=
i5a=
i_=
e5a=
j_=
k_=
j5a=
k5a=
l5a=function(a,b,c,d,e,f){this.ids=a;this.j=b;this.B=c;this.D=d;this.C=e;this.py=f};
l_=
n5a=
o5a=
m_=
p5a=
n_=
q5a=
r5a=
s5a=
t5a=
v5a=
w5a=
D5a=
z5a=
u5a=
F5a=
G5a=
A5a=
B5a=
y5a=
C5a=
p_=
x5a=
E5a=
M5a=
K5a=
J5a=
I5a=
H5a=
r_=
N5a=
tZ=
O5a=
s_=
t_=
P5a=
Q5a=
R5a=
u_=
S5a=
AZ=
T5a=
U5a=
wZ=
xZ=
Y5a=
w_=
y_=
Z5a=
$5a=
A_=
x_=
v_=
B_=
W5a=
V5a=
X5a=
C_=
b6a=
c6a=
a6a=
d6a=
vZ=
e6a=
z_=
f6a=
g6a=
h6a=
i6a=
D_=
j6a=
s3a=
t3a=
k6a=
l6a=
E_=
o6a=
m6a=
p6a=
r6a=
F_=
s6a=
t6a=
u6a=
H_=
J_=
w6a=
x6a=
B6a=
z6a=
C6a=
D6a=
y6a=
A6a=
v6a=
E6a=
F6a=
J6a=
L6a=
M6a=
K_=
N6a=
j4a=
O6a=
P6a=
L_=
Q6a=
R6a=
S6a=
T6a=
U6a=
N_=
g.X6a=
g.c7a=
a7a=
$6a=
S_=
b7a=
Z6a=
e7a=
f7a=
g7a=
i7a=
j7a=
k7a=
l7a=
m7a=
n7a=
p7a=
q7a=
r7a=
o7a=
V_=
M_=
s7a=
t7a=
T_=
v7a=
h7a=
U_=
w7a=
x7a=
A7a=
B7a=
y7a=
z7a=
E7a=
D7a=
F7a=
G7a=
C7a=
H7a=
I7a=
W_=
J7a=
K7a=
L7a=
O7a=
N7a=
M7a=
X_=
P7a=
g.Y_=
R7a=
S7a=
T7a=
$_=
a0=
x4a=
U7a=
V7a=
Y7a=
X7a=
W7a=
Z7a=
a8a=
b8a=
$7a=
b0=
d8a=
e8a=
f8a=
k8a=
j8a=
l8a=
n8a=
L5a=
g8a=
i8a=
h8a=
m8a=
zZ=
o_=
G_=
o8a=
p8a=
q8a=
r8a=
s8a=
Q7a=
c0=
I_=
t8a=
q6a=
g.d0=function(a){this.jd=a};
e0=function(){g.AG.apply(this,arguments)};
f0=
u8a=
g0=
v8a=
w8a=
x8a=
y8a=
z8a=
A8a=
C8a=
B8a=
E8a=
F8a=
J8a=
G8a=
I8a=
K8a=
i0=
O8a=
M8a=
N8a=
R8a=
S8a=
T8a=
U8a=
V8a=
h0=
W8a=
Q8a=
L8a=
j0=
X8a=
H8a=
Y8a=
k0=
$8a=
a9a=
b9a=
Z8a=
l0=function(){this.keys=[];this.values=[]};
e9a=
d9a=
h9a=
g9a=
f9a=
i9a=
j9a=
m0=
k9a=
l9a=
p9a=
m9a=
n9a=
o9a=
q9a=
r9a=
s9a=
u9a=
t9a=
v9a=
w9a=function(a,b,c,d,e){this.videoData=a;this.j=b;this.reason=c;this.B=d;this.token=e};
x9a=
z9a=
B9a=
A9a=
C9a=
y9a=
D9a=
F9a=
H9a=
E9a=
I9a=
J9a=
L9a=
K9a=
M9a=
G9a=
p0=
N9a=
O9a=
P9a=
R9a=
T9a=
U9a=
W9a=
X9a=function(a,b){dP(a,1,b.elapsedTimeMs);gP(a,3,b.videoDecoderName)};
Y9a=
g.s0=
g.r0=
Z9a=
b$a=
c$a=
a$a=
d$a=
e$a=
f$a=
h$a=
g$a=
k$a=
t0=
aZ=
i$a=
j$a=
l$a=
w0=
n$a=
m$a=function(a){g.wC(a.K);a.K=NaN};
o$a=
q$a=
r$a=
u$a=
s$a=
x$a=
x0=
t$a=
y$a=
y0=
A$a=
A0=
C0=
B$a=
z0=
C$a=
D0=
F$a=
E$a=
z$a=
G$a=
H$a=
I$a=
B0=
J$a=
E0=function(a,b,c){this.videoData=a;this.W=b;this.qa=c;this.j=void 0};
g.NN=
K$a=
D$a=
$9a=
v0=
g.F0=
bZ=
M$a=
r2a=
q2a=
N$a=
s2a=
O$a=
P$a=
Q$a=
R$a=
G0=
S$a=
U$a=
V$a=
W$a=
T$a=
X$a=
Y$a=
H0=
Z$a=
$$a=
aab=
bab=
I0=
cCa=
cab=function(a,b){this.videoData=a;this.j=b};
dab=
eab=
K0=
hab=
iab=
M0=
jab=
kab=
gab=
L0=
J0=
fab=
P0=
O0=
Q0=
N0=
oab=
qab=
sab=
tab=
vab=
mab=
rab=
wab=
nab=
xab=
yab=
Aab=
R0=
Bab=
zab=
S0=
Cab=
pab=
Dab=
uab=
lab=function(){};
U0=function(){this.j=this.started=!1};
Jab=
Gab=
Kab=
Hab=
Fab=
Lab=
Eab=
Oab=
V0=
Pab=
Rab=
g.Y0=
TL=
Uab=
Wab=
Xab=
Yab=
Z0=
g.HY=
Zab=
K1a=
abb=
$0=
o0=
bbb=
dbb=
$ab=
IY=
T0=
ebb=
fbb=
g.MV=
e1=
u7a=
g.gbb=
Vab=
d1=
W0=
ibb=
jbb=
lbb=
kbb=
cbb=
b1=
mbb=
g1=
nbb=
p1a=
pbb=
obb=
c8a=
n0=
qbb=
v1a=
rbb=
T1a=
JVa=
a1=
sbb=
ubb=
tbb=
n1a=
vbb=
xbb=
hbb=
Sab=
zbb=
ybb=
c1=
X0=
Abb=
h1=function(a){a.Ce&&(a.Ce.dispose(),a.Ce=null)};
EY=
Cbb=
Dbb=
Q1a=
Ebb=
Fbb=
Gbb=
m1a=
f1=
Z_=
Hbb=
g.i1=
Sbb=
Nbb=
Ubb=
Mbb=
Vbb=
Lbb=
j1=
JY=
$bb=
Wbb=
Ybb=
Xbb=
g.zU=
bcb=
m1=
n1=
ecb=
dcb=
ccb=
p1=
Rbb=
u1=
gcb=
t1=
o1=
icb=
kcb=
lcb=
Obb=
jcb=
x1=
mcb=
Qbb=
r1=
fcb=
q1=
pcb=
l1=
qcb=
scb=
tcb=
rcb=
A1=
hcb=
B1=
C1=
ucb=
s1=
acb=
ocb=
ncb=
vcb=
wcb=
xcb=
ycb=
v1=
zcb=
w1=
g.yU=
Acb=
Ccb=
k1=
D1=
Zbb=
Dcb=
Ecb=
Pbb=
z1=
y1=
Fcb=
P2a=
Gcb=
Hcb=
Icb=
Jcb=
E1=
Lcb=
Pcb=
Scb=
Ocb=
Kcb=
adb=function(a){this.Oa=a};
bdb=function(a){this.J=a};
cdb=function(a){this.Oa=a};
edb=
ddb=
F1=
G1=
gdb=
hdb=
idb=
wCa=
fdb=
fCa=function(a){switch(a){case "AD_PLACEMENT_KIND_START":return"LATENCY_AD_BREAK_TYPE_PREROLL";case "AD_PLACEMENT_KIND_MILLISECONDS":case "AD_PLACEMENT_KIND_COMMAND_TRIGGERED":case "AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED":return"LATENCY_AD_BREAK_TYPE_MIDROLL";case "AD_PLACEMENT_KIND_END":return"LATENCY_AD_BREAK_TYPE_POSTROLL";default:return"LATENCY_AD_BREAK_TYPE_UNKNOWN"}};
kdb=
jdb=
H1=
mdb=
ldb=
ndb=
I1=function(a){this.J=a};
J1=function(a){this.J=a};
odb=function(a){return a.J.U().L("enable_active_view_lr_shorts_video")};
K1=
HN=
pdb=function(a){return a.J.U().L("substitute_ad_cpn_macro_in_ssdai")};
MN=
VFa=function(a){return a.J.U().L("html5_enable_vod_slar_with_notify_pacf")};
qdb=
yEa=function(a){return a.J.U().experiments.ob("enable_desktop_player_underlay")};
kM=function(a){return a.J.U().experiments.ob("html5_load_ads_instead_of_cue")};
lM=function(a){return a.J.U().experiments.ob("html5_preload_ads")};
rdb=
sdb=
tdb=
L1=
vdb=
wdb=
M1=
O1=
P1=
zdb=
Adb=
Q1=
Bdb=
xdb=
ydb=
Cdb=function(){};
Ddb=
Edb=function(a,b,c){this.B=a;this.C=b;this.j=c};
Fdb=function(a){this.j=a};
R1=
Gdb=
wAa=
sM=
Hdb=
Idb=
BAa=
TK=
Jdb=
Kdb=
Ldb=
S1=
Odb=
Ndb=
Pdb=
T1=
U1=
Qdb=
Rdb=
N1=
Sdb=
Tdb=
Udb=
V1=function(a,b){g.nv(a.J.getRootNode(),b)};
W1=
Vdb=
X1=
Y1=function(a){this.j=a};
Wdb=
Z1=function(a){this.W=a};
$1=
Xdb=
a2=
b2=
Ydb=
Zdb=
BCa=
c2=
$db=
beb=
aeb=
d2=function(a){this.J=a};
e2=function(a){this.J=a};
f2=function(a){this.J=a};
ceb=function(a){this.J=a};
deb=
eeb=
feb=
geb=
heb=
ieb=
keb=
h2=
jeb=
leb=
meb=
neb=
oeb=
seb=
peb=
qeb=
reb=
ueb=
web=
xeb=
yeb=
veb=
i2=
zeb=
Aeb=
Beb=function(a,b){a=a.api.getRootNode();g.rv(a,"ytp-ad-overlay-open",b);g.rv(a,"ytp-ad-overlay-closed",!b)};
Ceb=
Deb=function(a){var b=g.af("html5-video-player");b&&g.rv(b,"ytp-ad-display-override",a)};
k2=
Eeb=
l2=
m2=
n2=
Feb=
Geb=
Ieb=
Jeb=
Keb=
Leb=
Neb=
Meb=
Oeb=
o2=
p2=
Reb=
Peb=function(a,b,c){var d=new o2(a.api,a.layoutId,a.interactionLoggingClientData,a.gb,a.D.bind(a));d.Ja(a.G);d.init(yG("survey-question-single-select"),b,c);a.api.U().L("supports_multi_step_on_desktop")?a.C=d:a.questions.push(d);g.M(a,d)};
Qeb=
q2=
Teb=
Ueb=function(a){var b=g.af("html5-video-player");b&&g.rv(b,"ytp-ad-display-override",a)};
r2=
s2=function(a,b,c,d){JG.call(this,a,{I:"img",S:"ytp-ad-avatar"},"ad-avatar",b,c,d);this.hide()};
Veb=
t2=
Xeb=
u2=function(a,b,c,d){JG.call(this,a,{I:"div",S:"ad-simple-attributed-string"},"ad-simple-attributed-string",b,c,d);this.hide()};
Yeb=
Zeb=
$eb=
v2=
w2=
x2=
afb=
bfb=
cfb=
ffb=
efb=
y2=
gfb=
hfb=
ifb=
WDa=
dfb=
jfb=
g.z2=
g.A2=
g.lfb=
g.B2=
mfb=
nfb=
g.C2=
pfb=
aaa=[];ka="function"==typeof Object.defineProperties?Object.defineProperty:
g.fa=caa(this);la("Symbol",;
la("Symbol.iterator",;
var qfb="function"==typeof Object.assign?Object.assign:
la("Object.assign",function(a){return a||qfb});
var faa="function"==typeof Object.create?Object.create:rfb=),sfb;
if("function"==typeof Object.setPrototypeOf)sfb=Object.setPrototypeOf;else{var tfb;a:{var ufb={a:!0},vfb={};try{vfb.__proto__=ufb;tfb=vfb.a;break a}catch(a){}tfb=!1}sfb=tfb?null}var sa=sfb;
ta.prototype.Z=function(a){this.B=a};
ta.prototype.return=
ta.prototype.La=function(a){this.j=a};
la("Reflect",;
la("Reflect.construct",function(){return rfb});
la("Reflect.setPrototypeOf",;
la("Promise",;
la("Object.setPrototypeOf",function(a){return a||sa});
la("WeakMap",;
la("Map",;
la("Array.prototype.keys",;
la("Array.prototype.find",function(a){return a?a:function(b,c){return kaa(this,b,c).QK}});
la("String.prototype.endsWith",;
la("String.prototype.startsWith",;
la("Number.isFinite",;
la("String.prototype.repeat",;
la("Set",;
la("Array.prototype.values",;
la("Math.trunc",;
la("Math.log2",;
la("Object.values",;
la("Object.is",;
la("Array.prototype.includes",;
la("String.prototype.includes",;
la("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
la("Number.isInteger",;
la("Number.isSafeInteger",;
la("Number.isNaN",;
la("Array.prototype.entries",;
la("Array.from",;
la("Array.prototype.fill",;
la("Int8Array.prototype.fill",Oa);la("Uint8Array.prototype.fill",Oa);la("Uint8ClampedArray.prototype.fill",Oa);la("Int16Array.prototype.fill",Oa);la("Uint16Array.prototype.fill",Oa);la("Int32Array.prototype.fill",Oa);la("Uint32Array.prototype.fill",Oa);la("Float32Array.prototype.fill",Oa);la("Float64Array.prototype.fill",Oa);la("Object.entries",;
la("globalThis",;
la("Math.imul",;
la("Promise.prototype.finally",;
la("Array.prototype.findIndex",function(a){return a?a:function(b,c){return kaa(this,b,c).i}});
la("Math.sign",;
la("WeakSet",;
la("String.prototype.replaceAll",;
la("String.prototype.padStart",;
la("Array.prototype.copyWithin",;
la("Int8Array.prototype.copyWithin",Qa);la("Uint8Array.prototype.copyWithin",Qa);la("Uint8ClampedArray.prototype.copyWithin",Qa);la("Int16Array.prototype.copyWithin",Qa);la("Uint16Array.prototype.copyWithin",Qa);la("Int32Array.prototype.copyWithin",Qa);la("Uint32Array.prototype.copyWithin",Qa);la("Float32Array.prototype.copyWithin",Qa);la("Float64Array.prototype.copyWithin",Qa);la("Array.prototype.findLastIndex",;
la("Int8Array.prototype.findLastIndex",Ra);la("Uint8Array.prototype.findLastIndex",Ra);la("Uint8ClampedArray.prototype.findLastIndex",Ra);la("Int16Array.prototype.findLastIndex",Ra);la("Uint16Array.prototype.findLastIndex",Ra);la("Int32Array.prototype.findLastIndex",Ra);la("Uint32Array.prototype.findLastIndex",Ra);la("Float32Array.prototype.findLastIndex",Ra);la("Float64Array.prototype.findLastIndex",Ra);
la("Math.clz32",;
la("Number.parseInt",;
la("String.raw",;var gn,eb,maa;gn=gn||{};g.Sa=this||self;eb="closure_uid_"+(1E9*Math.random()>>>0);maa=0;g.k=sb.prototype;g.k.I4=
g.k.m_=
g.k.EN=
g.k.q6=
g.k.clear=function(){this.j.clear()};
g.k.getKey=g.w(tb,sb);tb.prototype.D=g.w(ub,sb);ub.prototype.bj=g.k=g.I.prototype;g.k.Gx=!1;g.k.isDisposed=function(){return this.Gx};
g.k.dispose=
g.k.addOnDisposeCallback=
g.k.xa=g.ob(yb,Error);yb.prototype.name="CustomError";var Rba;g.ob(zb,yb);zb.prototype.name="AssertionError";g.Ab.prototype.stopPropagation=function(){this.B=!0};
g.Ab.prototype.preventDefault=function(){this.defaultPrevented=!0};var saa,Pr,Js;saa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:
g.wfb=Array.prototype.lastIndexOf?
g.cc=Array.prototype.forEach?
g.Bt=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:
g.Nr=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:
Pr=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:
Js=Array.prototype.some?
g.Or=Array.prototype.every?var ec={};var hba=);var xfb=Xa(1,!0),qc=Xa(610401301,!1);Xa(899588437,!1);var yfb=Xa(572417392,!0);Xa(2147483644,!1);Xa(2147483645,!1);Xa(2147483646,xfb);Xa(2147483647,!0);var tc=!!g.Va("yt.config_.EXPERIMENTS_FLAGS.html5_enable_client_hints_override");var lc=String.prototype.trim?function(a){return a.trim()}:Gaa=/&/g,Haa=/</g,Iaa=/>/g,Jaa=/"/g,Kaa=/'/g,Laa=/\x00/g,Faa=/[\x00&<>"']/;var uc,zfb=g.Sa.navigator;uc=zfb?zfb.userAgentData||null:null;Qc[" "]=function(){};var vs,pZ,Bcb,Afb,Bfb,Cfb,rS,sS,Dfb;g.tS=Bc();g.gf=Cc();g.nE=yc("Edge");g.MS=g.nE||g.gf;vs=yc("Gecko")&&!(kc(g.pc(),"WebKit")&&!yc("Edge"))&&!(yc("Trident")||yc("MSIE"))&&!yc("Edge");g.Xc=kc(g.pc(),"WebKit")&&!yc("Edge");pZ=Pc();Bcb=Saa();g.RC=Raa();Afb=Nc();Bfb=yc("iPad");Cfb=yc("iPod");rS=Oc();sS=kc(g.pc(),"KaiOS");
a:{var Efb="",Ffb=);
Ffb&&(Efb=Ffb?Ffb[1]:"");if(g.gf){var Gfb=Vaa();if(null!=Gfb&&Gfb>parseFloat(Efb)){Dfb=String(Gfb);break a}}Dfb=Efb}var Sc=Dfb,Taa={},Hfb;if(g.Sa.document&&g.gf){var Ifb=Vaa();Hfb=Ifb?Ifb:parseInt(Sc,10)||void 0}else Hfb=void 0;var Waa=Hfb;var IXa=Xaa("AnimationEnd"),QUa=Xaa("TransitionEnd");g.ob(Yc,g.Ab);var Jfb={2:"touch",3:"pen",4:"mouse"};
Yc.prototype.init=
Yc.prototype.stopPropagation=
Yc.prototype.preventDefault=var Yaa="closure_listenable_"+(1E6*Math.random()|0);var Zaa=0;var eba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.k=wd.prototype;g.k.add=
g.k.remove=
g.k.Kf=
g.k.lD=
g.k.hasListener=var Ed="closure_lm_"+(1E6*Math.random()|0),Id={},jba=0,Jd="__closure_events_fn_"+(1E9*Math.random()>>>0);g.ob(g.Kd,g.I);g.Kd.prototype[Yaa]=!0;g.k=g.Kd.prototype;g.k.addEventListener=
g.k.removeEventListener=
g.k.dispatchEvent=
g.k.xa=
g.k.Qa=function(a,b,c,d){return this.Ul.add(String(a),b,!1,c,d)};
g.k.II=
g.k.Qc=
g.k.lD=
g.k.hasListener=Od.prototype.get=var Xba=g.gf||g.Xc;var Kfb={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var Ud;g.Wd.prototype.toString=function(){return this.j};
var qba={},pba={};Zd("");g.$d.prototype.toString=
var rba={};var uba,je;g.he.prototype.toString=function(){return this.j.toString()};
var tba=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,sba=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Lfb;try{new URL("s://g"),Lfb=!0}catch(a){Lfb=!1}uba=Lfb;je={};g.re=new g.he("about:invalid#zClosurez",je);var mo={};g.le.prototype.toString=function(){return this.j.toString()};
var Dv=new g.le("",mo),yba=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),xba=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),wba=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),zba=/\/\*/;var Gba={};g.se.prototype.toString=function(){return this.j.toString()};
var Mfb=/^[a-zA-Z0-9-]+$/,Nfb={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},Ofb={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Dba=new g.se(g.Sa.trustedTypes&&g.Sa.trustedTypes.emptyHTML||"",Gba);var Nsa={};ve.prototype.toString=function(){return this.IZ.toString()};var Jba=Sd(;g.k=g.Ae.prototype;g.k.clone=function(){return new g.Ae(this.x,this.y)};
g.k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.k.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};g.k=g.Ie.prototype;g.k.clone=
g.k.area=
g.k.aspectRatio=
g.k.isEmpty=function(){return!this.area()};
g.k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.k.round=
g.k.scale=g.Pfb=String.prototype.repeat?var Sba={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.k=Re.prototype;g.k.Lb=function(a){return Ve(this.j,a)};
g.k.getElementsByTagName=
g.k.Ha=
g.k.createElement=function(a){return of(this.j,a)};
g.k.appendChild=g.sf;g.k.append=
g.k.canHaveChildren=
g.k.removeNode=g.vf;g.k.contains=g.Af;var Kf;Nf.prototype.add=
Nf.prototype.remove=
var cca=new Od(function(){return new Of},function(a){return a.reset()});
Of.prototype.set=
Of.prototype.reset=var Pf,Rf=!1,aca=new Nf;dca.prototype.reset=function(){this.context=this.B=this.C=this.j=null;this.D=!1};
var eca=new Od(function(){return new dca},function(a){a.reset()});
g.Zf.prototype.then=
g.Zf.prototype.$goog_Thenable=!0;g.k=g.Zf.prototype;g.k.wl=
g.k.catch=g.Zf.prototype.wl;g.k.cancel=
g.k.Eca=function(a){this.j=0;Yf(this,2,a)};
g.k.Fca=
g.k.Z5=
var sca=Mf;g.ob(eg,yb);eg.prototype.name="cancel";g.ob(g.fg,g.Kd);g.k=g.fg.prototype;g.k.enabled=!1;g.k.kd=null;g.k.setInterval=function(a){this.Yi=a;this.kd&&this.enabled?(this.stop(),this.start()):this.kd&&this.stop()};
g.k.oca=
g.k.start=
g.k.stop=
g.k.xa=g.w(g.ng,g.I);g.k=g.ng.prototype;g.k.sendIsolatedPayload=function(a){this.G=a;this.D=1};
g.k.Er=
g.k.Bk=function(a){var b=g.Ia.apply(1,arguments);this.B.has(a)||this.B.set(a,new tb(a,b))};
g.k.AG=
g.k.Lm=
g.k.xL=function(a,b){var c=g.Ia.apply(2,arguments),d=uca(this,a);d&&d instanceof tb&&(d.D(b,c),tca(this))};
g.k.bj=wca.prototype.bj=
xca.prototype.bj=function(a,b,c){this.j.bj("/client_streamz/po/w/el",a,b,c)};var uh=void 0,fh,jda="undefined"!==typeof TextDecoder,Fca,Eca="function"===typeof String.prototype.R7,Dca="undefined"!==typeof TextEncoder;var OC,PC;g.UR=Hc();OC=Nc()||yc("iPod");PC=yc("iPad");g.bQa=Naa();g.kL=Ic();g.SD=Lc()&&!Oc();var Kca={},tg=null,Lca=vs||g.Xc||"function"==typeof g.Sa.btoa;var Uca="undefined"!==typeof Uint8Array,Oca=!g.gf&&"function"===typeof btoa,Sca=/[-_.]/g,Qca={"-":"+",_:"/",".":"="},Vca,wg={};var Xca;xg.prototype.isEmpty=function(){return null==this.j};
xg.prototype.sizeBytes=var pea=!yfb,oea=!yfb;var fda="function"===typeof Uint8Array.prototype.slice,Pg=0,Qg=0,Iea;g.k=dda.prototype;g.k.init=
g.k.free=
g.k.clear=
g.k.reset=
g.k.advance=
var ah=[];bh.prototype.free=
bh.prototype.reset=
bh.prototype.advance=function(a){this.j.advance(a)};
var D2=[];var mda,pda;wh.prototype.length=function(){return this.j.length};
wh.prototype.end=var E2;E2="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,g.oa(Object.values({iIa:1,cIa:2,THa:4,BXa:8,AXa:16,GTa:32,Isa:64,Jbb:128,SEa:256,PEa:512,dIa:1024,tEa:2048,v9a:4096,uEa:8192})));var Hh=E2?ij=E2?Eh=E2?function(a){return a[E2]|0}:$i=E2?function(a){return a[E2]}:function(a){return a.Bn},Fh=E2?function(a,b){a[E2]=b;
return a}:var Ci={},yda={},Qfb,Tda=!yfb,hj,Rfb=[];Fh(Rfb,55);hj=Object.freeze(Rfb);var Ph,Pk,Ik;Object.freeze(new function(){});
Object.freeze(new function(){});var Gda=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;var Di,Xi,Qda;g.k=T.prototype;g.k.toJSON=
g.k.wk=
g.k.clone=
g.k.Lv=
g.k.XI=Ci;g.k.toString=var rea=Symbol(),Gk,Hk,Nk=Symbol(),Aea=Symbol(),Rk=Symbol(),Sk=Symbol(),Sfb=Tk(function(a,b,c){if(1!==a.B)return!1;Vk(b,c,Zg(a.j));return!0},Wk),Tfb=Tk(function(a,b,c){if(1!==a.B)return!1;
a=Zg(a.j);Vk(b,c,0===a?void 0:a);return!0},Wk),Ufb=Tk(function(a,b,c,d){if(1!==a.B)return!1;
Fj(b,c,d,Zg(a.j));return!0},Wk),Vfb=Tk(function(a,b,c){if(0!==a.B)return!1;
Vk(b,c,Vg(a.j));return!0},Xk),Wfb=Tk(function(a,b,c){if(0!==a.B)return!1;
a=Vg(a.j);Vk(b,c,0===a?void 0:a);return!0},Xk),Xfb=Tk(function(a,b,c,d){if(0!==a.B)return!1;
Fj(b,c,d,Vg(a.j));return!0},Xk),Yfb=Tk(function(a,b,c){if(0!==a.B)return!1;
Vk(b,c,Wg(a.j));return!0},Yk),Zfb=Tk(Yk),$fb=Tk(function(a,b,c,d){if(0!==a.B)return!1;
Fj(b,c,d,Wg(a.j));return!0},Yk),agb=Tk(function(a,b,c){if(1!==a.B)return!1;
Vk(b,c,Yg(a.j));return!0},,bgb=Uk(,cgb=Tk(function(a,b,c){if(0!==a.B)return!1;
Vk(b,c,$g(a.j));return!0},Jea),dgb=Tk(Jea),F2=Tk(function(a,b,c){if(2!==a.B)return!1;
Vk(b,c,vh(a));return!0},Kea),egb=Uk(function(a,b,c){if(2!==a.B)return!1;
a=vh(a);Bj(b,c,cea,a);return!0},,fgb=Tk(Kea),qea=new Ch(yl,!1,!0),zea=new Ch(yl,!1,!0),G2;
G2=new Ch(!0,!0);
var H2=new Ch(yl,!1,!0),ggb=Tk(,hgb=Uk(,I2=Tk(,igb=Tk(;g.w(Al,T);Al.yb=[1,2,3,4];g.w(Bl,T);var Hl=[1,2,3],jgb=[0,Hl,fgb,$fb,dgb];var kgb=[0,G2,[0,Sfb,Vfb]];g.w(Cl,T);var Gl=[1,2,3],lgb=[0,Gl,Xfb,Ufb,H2,kgb];g.w(Dl,T);Dl.yb=[1];var mgb=[0,G2,jgb,lgb];var ngb=[0,[1,2,3],H2,[0,F2,-1,cgb],H2,[0,F2,-1,Yfb,cgb],H2,[0,F2]];g.w(El,T);El.prototype.wq=
El.yb=[3,6,4];El.prototype.j=Lea([0,F2,ngb,egb,G2,mgb,agb,bgb]);g.w(Fl,T);Fl.yb=[1];var Sea={};g.k=Il.prototype;g.k.isEnabled=
g.k.set=
g.k.get=
g.k.remove=
g.k.mp=function(){return Jl(this).keys};
g.k.Yl=
g.k.isEmpty=
g.k.clear=
var GC=new Il("undefined"==typeof document?null:document);g.w(Ll,T);Ll.yb=[2];g.w(Ml,g.Kd);Ml.prototype.setInterval=
Ml.prototype.start=
Ml.prototype.stop=
Ml.prototype.tick=g.w(Nl,T);g.w(Ol,T);g.Pl.prototype.B=0;g.Pl.prototype.reset=
g.Pl.prototype.getValue=function(){return this.C};var Tl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),bfa=/#|$/,cfa=/[?&]($|#)/;g.w(Jm,T);Jm.prototype.eO=function(){return oi(dj(this,1))};g.w(Km,T);g.w(Lm,T);Lm.yb=[1];g.w(Mm,T);var ffa=["platform","platformVersion","architecture","model","uaFullVersion"],Om=new Lm,Nm=null;g.w(Pm,T);g.w(Qm,T);Qm.yb=[1,2,3,4,5];g.w(Rm,T);g.w(Sm,T);Sm.prototype.L=function(){return gj(this,Qm,7)};
Sm.prototype.BC=function(){return fj(this,16)};
Sm.yb=[3,20,27];g.w(Tm,T);Tm.prototype.vF=function(a){return S(this,2,a)};
Tm.yb=[3,5];g.w(Um,T);var ogb=zl(Um);Um.yb=[5,6];g.w(hfa,T);var J2;J2=new 175237375,{Vlb:0},hfa);g.w(Xm,g.I);g.k=Xm.prototype;g.k.xa=
g.k.dispatch=
g.k.log=
g.k.flush=function(a,b){var c=this;if(0===this.C.length)a&&a();else{var d=Date.now();if(this.Ga>d&&this.ma<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.eO?kfa(this.B,this.network.eO()):kfa(this.B,0));var e=this.B.build(this.C,this.G,this.X,this.ME,0,0);d={};d=(d["Content-Type"]="application/json+protobuf",d);var f=this.aD();f&&(d.Authorization=f);this.Z||(this.Z=.01>this.Na()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");
var h=this.Z;this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,h=Gm(h,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,h=Gm(h,"pageId",this.pageId));if(f&&this.Ea===f)b&&b("stale-auth-token");else{this.C=[];this.j.enabled&&this.j.stop();this.G=0;var l=e.wk(),m;this.K&&this.K.isSupported(l.length)&&(m=this.K.compress(l));var n={url:h,body:l,b5:1,Rw:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},p=q=r=
m?m.then(function(){r()}):r()}}}};
g.k.tN=
g.k.isRetryable=
Vm.prototype.vF=
Vm.prototype.build=nfa.prototype.wk=
var qfa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},pfa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;cn.prototype.C=null;cn.prototype.getOptions=var pgb;g.ob(dn,cn);dn.prototype.j=
dn.prototype.D=
pgb=new dn;g.ob(g.en,g.Kd);var Afa=/^https?$/i,qgb=["POST","PUT"],tfa=[];g.k=g.en.prototype;g.k.k5=
g.k.send=
g.k.oT=
g.k.abort=
g.k.xa=
g.k.cZ=
g.k.p$=function(){yfa(this)};
g.k.isActive=function(){return!!this.j};
g.k.isComplete=
g.k.getStatus=
g.k.getResponseHeader=
g.k.getLastError=Pn.prototype.send=
Pn.prototype.eO=function(){return 1};g.w(Qn,g.I);Qn.prototype.HV=
Qn.prototype.build=g.w(Rn,g.I);Rn.prototype.flush=g.w(Tn,Error);Tn.prototype.toString=
Tn.prototype.name="RpcError";Vn.prototype.done=
g.k=Dfa.prototype;g.k.gw=function(){};
g.k.cE=function(){};
g.k.gP=
g.k.cY=function(){};
g.k.ew=function(){};
g.k.aE=function(){};
g.k=Efa.prototype;g.k.gw=function(a){this.clientError.j.Lm("/client_streamz/po/w/cec",a,this.cj)};
g.k.cE=
g.k.gP=
g.k.cY=function(a){this.C.j.Lm("/client_streamz/po/w/csc",a,this.cj)};
g.k.ew=function(a){this.B.j.Lm("/client_streamz/po/w/ctav",a,this.cj)};
g.k.aE=var rgb,Gfa=null!=(rgb=Math.imul)?rgb:
Xn.prototype.wk=
Xn.prototype.ph=
var Yn=[196,200,224,18];Pfa.prototype.bj=function(a,b,c){this.j.bj("/client_streamz/bg/fil",a,b,c)};
Rfa.prototype.bj=var Tfa={toString:;ao.prototype.start=
ao.prototype.done=
bo.prototype.hP=function(){};
bo.prototype.cE=function(){};
bo.prototype.JI=function(){};
bo.prototype.Er=function(){};
co.prototype.hP=
co.prototype.cE=
co.prototype.JI=
co.prototype.Er=function(){this.j.Er()};g.w(Vfa,T);g.w(Wfa,T);g.w(eo,T);var oga=zl(eo);go.prototype.snapshot=
go.prototype.z_=
go.prototype.dispose=
go.prototype.isDisposed=function(){return this.j};g.w(ho,Xfa);ho.prototype.toString=function(){return this.j};var rYa=jo("tel"),pYa=jo("sms"),Yfa=[jo("data"),jo("http"),jo("https"),jo("mailto"),jo("ftp"),new io(],$fa="function"===typeof URL;var nga=na([""]);g.w(to,T);g.w(uo,T);g.w(vo,T);wo.prototype.TC=
wo.prototype.XV=
wo.prototype.ping=g.w(xo,T);var tgb=zl(xo);yo.prototype.OH=function(){return this.C};
yo.prototype.getMetadata=function(){return this.B};zo.prototype.getMetadata=function(){return this.j};
zo.prototype.OH=function(){return this.B};
zo.prototype.getStatus=function(){return null};Ao.prototype.getName=function(){return this.name};
Ao.prototype.getName=Ao.prototype.getName;var ugb=new Ao("/google.internal.waa.v1.Waa/Create",to,xo,function(a){return a.wk()},tgb);g.w(Bo,T);var vgb=zl(Bo);var sgb=new Ao("/google.internal.waa.v1.Waa/GenerateIT",uo,Bo,function(a){return a.wk()},vgb);g.w(Co,T);var wgb=new Ao("/google.internal.waa.v1.Waa/Ping",vo,Co,zl(Co));var Mga=Promise;g.w(Do,T);Do.prototype.getValue=g.w(Eo,T);var vga=zl(Eo);Eo.yb=[3];Fo.prototype.on=
Fo.prototype.removeListener=
Fo.prototype.cancel=function(){this.j.abort()};
Fo.prototype.cancel=Fo.prototype.cancel;Fo.prototype.removeListener=Fo.prototype.removeListener;Fo.prototype.on=Fo.prototype.on;g.ob(g.tp,cn);g.tp.prototype.j=
g.tp.prototype.D=Pd({});g.tp.prototype.setCredentialsMode=function(a){this.B=a};
g.ob(up,g.Kd);g.k=up.prototype;g.k.open=
g.k.send=
g.k.abort=
g.k.i7=
g.k.X6=
g.k.h7=
g.k.g7=
g.k.hI=
g.k.setRequestHeader=function(a,b){this.Z.append(a,b)};
g.k.getResponseHeader=
g.k.getAllResponseHeaders=
g.k.setCredentialsMode=function(a){this.G=a};
Object.defineProperty(up.prototype,"withCredentials",{get:function(){return"include"===this.G},
set:);g.xp.prototype.toString=
g.xp.prototype.resolve=
g.xp.prototype.clone=
var xgb=/[#\/\?@]/g,zgb=/[#\?:]/g,ygb=/[#\?]/g,yga=/[#\?@]/g,Agb=/#/g;g.k=Dp.prototype;g.k.add=
g.k.remove=
g.k.clear=
g.k.isEmpty=
g.k.forEach=
g.k.mp=
g.k.Yl=
g.k.set=
g.k.get=
g.k.toString=
g.k.clone=g.ob(g.Kp,g.I);var Bgb=[];g.k=g.Kp.prototype;g.k.Qa=
g.k.II=
g.k.Qc=
g.k.Kf=
g.k.xa=function(){g.Kp.Mf.xa.call(this);this.Kf()};
g.k.handleEvent=Ega.prototype.isInputValid=function(){return this.C};Lp.prototype.isInputValid=function(){return 3!=this.j};
Lp.prototype.tf=function(){return this.K};
Lp.prototype.yG=function(){return!0};
Lp.prototype.parse=Np.prototype.isInputValid=function(){return null===this.j};
Np.prototype.tf=function(){return this.j};
Np.prototype.yG=function(){return!1};
Np.prototype.parse=var Cgb={INIT:0,jC:1,SL:2,Qx:3,xB:4,wB:5,STRING:6,ML:7,ST:8,qU:9,rU:10,sU:11,xS:12,yS:13,zS:14,AS:15,ZT:16,aU:17,bU:18,l4:19,RL:20};g.k=Pp.prototype;g.k.isInputValid=
g.k.tf=function(){return this.X};
g.k.done=function(){return 2===this.G};
g.k.yG=function(){return!1};
g.k.parse=Rp.prototype.isInputValid=function(){return null===this.G};
Rp.prototype.tf=function(){return this.G};
Rp.prototype.yG=function(){return!1};
Rp.prototype.parse=Sp.prototype.gO=function(){return this.j};
Sp.prototype.getStatus=function(){return this.D};
Sp.prototype.ma=g.k=Iga.prototype;g.k.on=function(a,b){var c=this.B[a];c||(c=[],this.B[a]=c);c.push(b);return this};
g.k.addListener=
g.k.removeListener=
g.k.once=
g.k.o9=
g.k.X$=Kga.prototype.serverStreaming=Xp.prototype.create=function(a,b){return Wp(this.j,this.B+"/$rpc/google.internal.waa.v1.Waa/Create",a,b||{},ugb)};
Xp.prototype.ping=var Dgb=1,dq=new WeakMap;g.w(Yp,g.I);Yp.prototype.signal=
Yp.prototype.Iz=
g.w($p,g.I);g.k=$p.prototype;g.k.qM=
g.k.detach=
g.k.value=function(a){return this.promise(!0,a)};
g.k.Iz=function(){return this.PX};
g.k.next=
g.k.promise=
g.k.xa=
var bq=[],cq=!1;g.w(eq,g.I);eq.prototype.start=
eq.prototype.cancel=
eq.prototype.xa=
eq.prototype.clear=
g.fa.Object.defineProperties(eq.prototype,{K:{configurable:!0,enumerable:!0,get:function(){return 1===this.state}},
isCancelled:{configurable:!0,enumerable:!0,get:function(){return 2===this.state}},
isExpired:{configurable:!0,enumerable:!0,get:function(){return 3===this.state}},
tick:{configurable:!0,enumerable:!0,get:function(){return this.D}},
Z:{configurable:!0,enumerable:!0,get:,
sJ:{configurable:!0,enumerable:!0,get:function(){if(this.isDisposed())throw new gq("Cannot attach a signal to a disposed timer.");this.C||(null!=this.j||(this.j=new Yp(this)),this.C=this.j.signal());return this.C}},
KP:{configurable:!0,enumerable:!0,get:});
g.w(fq,yb);g.w(gq,yb);var Yga=globalThis.TextEncoder?new TextEncoder:void 0;g.w(iq,Error);g.w(jq,g.I);jq.prototype.G=
g.w(lq,jq);lq.prototype.j=
g.w(mq,jq);mq.prototype.j=function(){return this.K};
g.w(nq,jq);nq.prototype.j=function(){return sg(this.K)};
nq.prototype.G=function(){return this.K};
g.w(oq,jq);oq.prototype.j=
g.w(pq,jq);pq.prototype.j=
g.w(qq,g.I);g.k=qq.prototype;g.k.isReady=function(){return!!this.j};
g.k.ready=
g.k.TC=
g.k.prefetch=
g.k.start=var kha={NONE:0,cwa:1},Rha={f1:0,m2a:1,l2a:2,n2a:3},Vr={Q0:"a",zva:"d",VIDEO:"v"};sq.prototype.isVisible=var wr={Ssa:0,fCa:1},Pha={NONE:0,nHa:1,xEa:2};nr.prototype.getValue=function(){return this.B};
g.w(or,nr);or.prototype.C=
g.w(pr,nr);pr.prototype.C=function(a){null===this.B&&"number"===typeof a&&(this.B=a)};
g.w(qr,nr);qr.prototype.C=rr.prototype.disable=function(){this.B=!1};
rr.prototype.enable=function(){this.B=!0};
rr.prototype.isEnabled=function(){return this.B};
rr.prototype.reset=var Ls=document,Ar=window;var Tia=!g.gf&&!Lc();xr.prototype.now=function(){return 0};
xr.prototype.B=function(){return 0};
xr.prototype.C=function(){return 0};
xr.prototype.j=function(){return 0};g.w(zr,xr);zr.prototype.now=
zr.prototype.B=function(){return yr()&&Ar.performance.memory?Ar.performance.memory.totalJSHeapSize||0:xr.prototype.B.call(this)};
zr.prototype.C=function(){return yr()&&Ar.performance.memory?Ar.performance.memory.usedJSHeapSize||0:xr.prototype.C.call(this)};
zr.prototype.j=var nha=Sd(;oha.prototype.isVisible=Zd("csi.gstatic.com");Zd("googleads.g.doubleclick.net");Zd("partner.googleadservices.com");Zd("pubads.g.doubleclick.net");Zd("securepubads.g.doubleclick.net");Zd("tpc.googlesyndication.com");var qha={Xia:"allow-forms",Yia:"allow-modals",Zia:"allow-orientation-lock",aja:"allow-pointer-lock",bja:"allow-popups",cja:"allow-popups-to-escape-sandbox",dja:"allow-presentation",eja:"allow-same-origin",fja:"allow-scripts",gja:"allow-top-navigation",hja:"allow-top-navigation-by-user-activation"},uha=Sd(function(){return rha()});var yha=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");Jr.prototype.Pe=Qr.prototype.setInterval=function(a,b){return Ar.setInterval(a,b)};
Qr.prototype.clearInterval=function(a){Ar.clearInterval(a)};
Qr.prototype.setTimeout=function(a,b){return Ar.setTimeout(a,b)};
Qr.prototype.clearTimeout=function(a){Ar.clearTimeout(a)};g.w(Sr,T);Sr.prototype.j=Lea([0,Tfb,Wfb,-2,Zfb]);var Qha={F_a:1,x4:2,sTa:3};Sha.prototype.GQ=var K2=null;var Yr=g.Sa.performance,Egb=!!(Yr&&Yr.mark&&Yr.measure&&Yr.clearMarks),Wr=Sd(;
Xr.prototype.disable=
Xr.prototype.start=
Xr.prototype.end=Zha.prototype.jP=
g.w(bs,Uha);var $r,as,Zr=new Xr;$r=new 
as=new Zha;Ar&&Ar.document&&("complete"==Ar.document.readyState?aia():Zr.j&&Cr(Ar,"load",function(){aia()}));var dia=Date.now(),js=-1,hs=-1,uja,ks=-1,is=!1;g.k=ls.prototype;g.k.getHeight=function(){return this.bottom-this.top};
g.k.clone=
g.k.contains=
g.k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.k.scale=function(a,b){b="number"===typeof b?b:a;this.left*=a;this.right*=a;this.top*=b;this.bottom*=b;return this};os.prototype.Lb=function(){return this.N};var Fgb={currentTime:1,duration:2,isVpaid:4,volume:8,isYouTube:16,isPlaying:32},St={r4:"start",s1:"firstquartile",g4:"midpoint",s4:"thirdquartile",Y0:"complete",ERROR:"error",f4:"metric",PAUSE:"pause",o4:"resume",p4:"skip",w4:"viewable_impression",j4:"mute",v4:"unmute",t1:"fullscreen",q1:"exitfullscreen",W0:"bufferstart",V0:"bufferfinish",v1:"fully_viewable_audible_half_duration_impression",e4:"measurable_impression",O0:"abandon",o1:"engagedview",A1:"impression",b1:"creativeview",d4:"loaded",j1a:"progress",
CLOSE:"close",lsa:"collapse",EYa:"overlay_resize",FYa:"overlay_unmeasurable_impression",GYa:"overlay_unviewable_impression",IYa:"overlay_viewable_immediate_impression",HYa:"overlay_viewable_end_of_session_impression",e1:"custom_metric_viewable",R0:"audio_audible",T0:"audio_measurable",S0:"audio_impression"},Eka="start firstquartile midpoint thirdquartile resume loaded".split(" "),Fka=["start","firstquartile","midpoint","thirdquartile"],vja=["abandon"],lu={UNKNOWN:-1,r4:0,s1:1,g4:2,s4:3,Y0:4,f4:5,
PAUSE:6,o4:7,p4:8,w4:9,j4:10,v4:11,t1:12,q1:13,v1:14,e4:15,O0:16,o1:17,A1:18,b1:19,d4:20,e1:21,W0:22,V0:23,S0:27,T0:28,R0:29};var gia={eea:"addEventListener",zEa:"getMaxSize",AEa:"getScreenSize",BEa:"getState",CEa:"getVersion",f2a:"removeEventListener",oIa:"isViewable"};g.k=g.qs.prototype;g.k.clone=
g.k.contains=
g.k.getSize=function(){return new g.Ie(this.width,this.height)};
g.k.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.k.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.k.round=
g.k.scale=var kia={};tia.prototype.update=Ns.prototype.cancel=
Ns.prototype.schedule=g.k=Os.prototype;g.k.OB=function(){return!1};
g.k.initialize=
g.k.Zy=function(){return this.j.Ga};
g.k.AD=function(){return this.j.ma};
g.k.qj=
g.k.getName=function(){return this.j.Ta};
g.k.Ks=function(){return this.j.oW()};
g.k.oW=function(){return{}};
g.k.Dq=function(){return this.j.Z};
g.k.pT=
g.k.qT=
g.k.EW=function(){return this.D.j};
g.k.sample=function(){};
g.k.isActive=function(){return this.j.K};
g.k.lz=
g.k.Ss=
g.k.Op=function(){return this.X};
g.k.dispose=function(){this.Ea=!0};
g.k.isDisposed=function(){return this.Ea};g.k=bt.prototype;g.k.yL=function(){return!0};
g.k.qG=function(){};
g.k.dispose=
g.k.isDisposed=function(){return this.ma};
g.k.Ks=function(){return this.B.Ks()};
g.k.Dq=function(){return this.B.Dq()};
g.k.Zy=function(){return this.B.Zy()};
g.k.AD=function(){return this.B.AD()};
g.k.lz=function(){};
g.k.Ss=function(){this.Zr()};
g.k.Op=function(){return this.ra};g.k=ct.prototype;g.k.Dq=function(){return this.j.Dq()};
g.k.Zy=function(){return this.j.Zy()};
g.k.AD=function(){return this.j.AD()};
g.k.create=
g.k.rT=function(){return this.PB()};
g.k.PB=function(){return!1};
g.k.init=
g.k.lz=
g.k.Ss=function(){};
g.k.Op=function(){return!1};
g.k.dispose=function(){this.G=!0};
g.k.isDisposed=function(){return this.G};
g.k.Ks=function(){return{}};dt.prototype.add=Eia.prototype.toString=gt.prototype.update=var Jia=[1,.75,.5,.3,0];ht.prototype.update=nt.prototype.update=
nt.prototype.Qq=if(Ls&&Ls.URL){var Ggb=Ls.URL,Hgb;if(Hgb=!!Ggb){var Igb;a:{if(Ggb){var Jgb=RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");try{var L2=Jgb.exec(decodeURIComponent(Ggb));if(L2){Igb=L2[1]&&1<L2[1].length?L2[1].substring(1):"true";break a}}catch(a){}}Igb=""}Hgb=0<Igb.length}as.ER=!Hgb};var Kgb=new ls(0,0,0,0);var Ria=new ls(0,0,0,0);g.w(tt,g.I);g.k=tt.prototype;
g.k.xa=
g.k.Ns=
g.k.GQ=
g.k.Op=function(){return!1};
g.k.RH=function(){return new nt};
g.k.tj=function(){return this.TI};
g.k.tW=
g.k.Ra=
g.k.fS=
g.k.UN=function(){return new sq};
g.k.vM=
g.k.QM=
g.k.Mv=function(){return!1};
g.k.tK=function(){return this.M7||this.P7};
g.k.mw=function(){gs()};
g.k.bA=function(){gs()};
g.k.qp=function(){return 0};
g.k.Qq=function(){return this.TI.Qq()};
g.k.HW=
g.k.EH=function(){return 0};g.vt.prototype.next=function(){return g.M2};
g.M2={done:!0,value:void 0};g.vt.prototype.Ak=function(){return this};g.w(aja,sq);var N2=cja([void 0,1,2,3,4,8,16]),O2=cja([void 0,4,8,16]),Lgb={sv:"sv",v:"v",cb:"cb",e:"e",nas:"nas",msg:"msg","if":"if",sdk:"sdk",p:"p",p0:At("p0",O2),p1:At("p1",O2),p2:At("p2",O2),p3:At("p3",O2),cp:"cp",tos:"tos",mtos:"mtos",amtos:"amtos",mtos1:zt("mtos1",[0,2,4],!1,O2),mtos2:zt("mtos2",[0,2,4],!1,O2),mtos3:zt("mtos3",[0,2,4],!1,O2),mcvt:"mcvt",ps:"ps",scs:"scs",bs:"bs",vht:"vht",mut:"mut",a:"a",a0:At("a0",O2),a1:At("a1",O2),a2:At("a2",O2),a3:At("a3",O2),ft:"ft",dft:"dft",at:"at",dat:"dat",as:"as",
vpt:"vpt",gmm:"gmm",std:"std",efpf:"efpf",swf:"swf",nio:"nio",px:"px",nnut:"nnut",vmer:"vmer",vmmk:"vmmk",vmiec:"vmiec",nmt:"nmt",tcm:"tcm",bt:"bt",pst:"pst",vpaid:"vpaid",dur:"dur",vmtime:"vmtime",dtos:"dtos",dtoss:"dtoss",dvs:"dvs",dfvs:"dfvs",dvpt:"dvpt",fmf:"fmf",vds:"vds",is:"is",i0:"i0",i1:"i1",i2:"i2",i3:"i3",ic:"ic",cs:"cs",c:"c",c0:At("c0",O2),c1:At("c1",O2),c2:At("c2",O2),c3:At("c3",O2),mc:"mc",nc:"nc",mv:"mv",nv:"nv",qmt:At("qmtos",N2),qnc:At("qnc",N2),qmv:At("qmv",N2),qnv:At("qnv",N2),
raf:"raf",rafc:"rafc",lte:"lte",ces:"ces",tth:"tth",femt:"femt",femvt:"femvt",emc:"emc",emuc:"emuc",emb:"emb",avms:"avms",nvat:"nvat",qi:"qi",psm:"psm",psv:"psv",psfv:"psfv",psa:"psa",pnk:"pnk",pnc:"pnc",pnmm:"pnmm",pns:"pns",ptlt:"ptlt",pngs:"pings",veid:"veid",ssb:"ssb",ss0:At("ss0",O2),ss1:At("ss1",O2),ss2:At("ss2",O2),ss3:At("ss3",O2),dc_rfl:"urlsigs",obd:"obd",omidp:"omidp",omidr:"omidr",omidv:"omidv",omida:"omida",omids:"omids",omidpv:"omidpv",omidam:"omidam",omidct:"omidct",omidia:"omidia",
omiddc:"omiddc",omidlat:"omidlat",omiddit:"omiddit",nopd:"nopd"},Mgb=Object.assign({},Lgb,{avid:Pd("audio"),avas:"avas",vs:"vs"}),Ngb={atos:"atos",avt:zt("atos",[2]),davs:"davs",dafvs:"dafvs",dav:"dav",ss:"ss",0),
t:"t"};Et.prototype.getValue=function(){return this.B};
Et.prototype.update=g.w(Ft,nt);
Ft.prototype.update=ija.prototype.B=g.w(Ht,ija);Ht.prototype.j=function(){return!0};
Ht.prototype.K=function(){return!1};
Ht.prototype.getId=
Ht.prototype.toString=g.w(It,Ht);It.prototype.B=g.w(Jt,jja);Jt.prototype.B=function(){return null};
Jt.prototype.C=function(){return[]};g.w(Kt,bt);g.k=Kt.prototype;g.k.AM=
g.k.fV=
g.k.CX=
g.k.gV=function(){this.timestamp=gs()};
g.k.Zr=
g.k.getName=function(){return this.B.getName()};var Ogb=new ls(0,0,0,0);g.w(Lt,Kt);g.k=Lt.prototype;g.k.yL=
g.k.Ss=function(){Kt.prototype.Zr.call(this)};
g.k.gV=function(){};
g.k.AM=function(){};
g.k.Zr=function(){this.C();Kt.prototype.Zr.call(this)};
g.k.lz=var P2={},tja=(P2.firstquartile=0,P2.midpoint=1,P2.thirdquartile=2,P2.complete=3,P2);g.w(Nt,tt);g.k=Nt.prototype;g.k.Op=function(){return!0};
g.k.Gn=function(){return 2==this.ek};
g.k.tW=
g.k.Ra=
g.k.fS=
g.k.RH=function(){return new Ft};
g.k.tj=function(){return this.TI};
g.k.UN=function(){return new aja};
g.k.vM=
g.k.QM=
g.k.qp=function(){return 1};
g.k.getDuration=function(){return this.C};
g.k.HW=
g.k.EH=var Pgb=g.nb();Dja.prototype.reset=function(){this.j=[];this.B=[]};
var Xt=Er(Dja);g.w($t,ct);g.k=$t.prototype;g.k.getName=function(){return(this.B?this.B:this.j).getName()};
g.k.Ks=function(){return(this.B?this.B:this.j).Ks()};
g.k.Dq=
g.k.init=
g.k.dispose=
g.k.rT=function(){return Js(this.C,function(a){return a.OB()})};
g.k.PB=
g.k.rG=function(a,b,c){return new Kt(a,this.j,b,c)};
g.k.Ss=var Mja={threshold:[0,.3,.5,.75,1]};g.w(au,Kt);g.k=au.prototype;g.k.yL=
g.k.qG=
g.k.Zr=
g.k.AM=function(){};
g.k.CX=function(){return!1};
g.k.fV=function(){};
g.k.Ks=
g.k.getName=function(){return"nio"};g.w(du,ct);du.prototype.getName=function(){return"nio"};
du.prototype.PB=
du.prototype.rG=g.w(eu,Os);eu.prototype.EW=
eu.prototype.OB=fu.prototype.sample=
fu.prototype.D=
var gu=Er(fu);var Wja=null,Gu="",Fu=!1;var Zja=Yja().Yo,ku=Yja().bp;var bka={gCa:"visible",Pna:"audible",dab:"time",iab:"timetype"},cka={visible:function(a){return/^(100|[0-9]{1,2})$/.test(a)},
audible:function(a){return"0"==a||"1"==a},
timetype:
time:;
aka.prototype.setTime=g.w(ou,Ht);ou.prototype.getId=function(){return this.N};
ou.prototype.K=function(){return!0};
ou.prototype.j=g.w(pu,eja);pu.prototype.j=g.w(qu,Ht);qu.prototype.j=function(a){return nja(a)};g.w(ru,jja);g.w(tu,Ht);tu.prototype.j=g.w(uu,It);uu.prototype.j=g.w(vu,ru);vu.prototype.B=function(){return new uu(this.j)};
vu.prototype.C=g.w(wu,Lt);wu.prototype.C=
wu.prototype.getName=function(){return"gsv"};g.w(xu,ct);xu.prototype.getName=function(){return"gsv"};
xu.prototype.PB=function(){var a=Ks();Ur();return a.B&&!1};
xu.prototype.rG=function(a,b,c){return new wu(this.j,b,c)};g.w(yu,Lt);yu.prototype.C=
yu.prototype.getName=function(){return"nis"};g.w(zu,ct);zu.prototype.getName=function(){return"nis"};
zu.prototype.PB=
zu.prototype.rG=g.w(Au,Os);g.k=Au.prototype;g.k.OB=
g.k.oW=
g.k.Rt=
g.k.initialize=
g.k.pT=
g.k.qT=
g.k.dispose=function(){kka(this);Os.prototype.dispose.call(this)};var Nha=new "45378663");g.k=Cu.prototype;g.k.gH=
g.k.ZH=function(){};
g.k.bF=
g.k.lz=
g.k.Ss=function(){};
g.k.Op=function(){return!1};
g.k.k7=
g.k.t7=
g.k.pB=
g.k.tp=
g.k.o7=function(a){return Ku(a,"firstquartile",1)};
g.k.q7=
g.k.u7=
g.k.l7=
g.k.m7=
g.k.XZ=
g.k.s7=
g.k.p7=function(a,b){ut(a,!0);return this.pB(a,b||{},"fullscreen")};
g.k.n7=
g.k.xQ=
g.k.r7=
g.k.oO=
g.k.PW=function(){};
g.k.RQ=function(){};
g.k.SZ=function(){};
g.k.sT=function(){};
g.k.bN=function(){};
g.k.xV=
g.k.aN=function(){return new pu};g.w(Lu,Ht);Lu.prototype.j=function(a){return 4==a.EH()};g.w(Mu,It);Mu.prototype.j=g.w(Nu,ru);Nu.prototype.B=function(){return new Mu(this.j)};
Nu.prototype.C=g.w(Ou,eja);Ou.prototype.j=xka.prototype.B=function(){return g.Va(this.j)};g.w(Pu,Cu);g.k=Pu.prototype;g.k.ZH=
g.k.sT=
g.k.bN=
g.k.RQ=
g.k.SZ=
g.k.PW=function(){};
g.k.bF=
g.k.gH=
g.k.xV=
g.k.aN=
var Qgb=ds(193,Jka,void 0,uka);g.Ua("Goog_AdSense_Lidar_sendVastEvent",Qgb);var Rgb=es(194,;
g.Ua("Goog_AdSense_Lidar_getViewability",Rgb);var Sgb=ds(195,function(){return Iha()});
g.Ua("Goog_AdSense_Lidar_getUrlSignalsArray",Sgb);var Tgb=es(196,;
g.Ua("Goog_AdSense_Lidar_getUrlSignalsList",Tgb);var Oza=na(["//tpc.googlesyndication.com/sodar/",""]);var oLa={l3a:0,i3a:1,f3a:2,g3a:3,h3a:4,k3a:5,j3a:6};var toa=(new Date).getTime();var Lka="://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),Mka=/\bocr\b/;var Oka=/(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g;g.w(Su,g.Kd);Su.prototype.dispose=
Su.prototype.Oh=function(){return this.j};
Su.prototype.yf=Uu.prototype.set=
Uu.prototype.get=var Wu;g.ob(g.dv,g.I);g.k=g.dv.prototype;g.k.start=
g.k.stop=
g.k.isActive=function(){return null!=this.j};
g.k.Z2=
g.k.xa=function(){this.stop();g.dv.Mf.xa.call(this)};g.ob(g.fv,g.I);g.k=g.fv.prototype;g.k.QB=0;g.k.xa=
g.k.start=
g.k.stop=
g.k.isActive=function(){return 0!=this.QB};
g.k.tT=jv.prototype[Symbol.iterator]=
jv.prototype.next=tv.prototype.Ak=function(){return new uv(this.B())};
tv.prototype[Symbol.iterator]=function(){return new vv(this.B())};
tv.prototype.j=
g.w(uv,g.vt);uv.prototype.next=function(){return this.B.next()};
uv.prototype[Symbol.iterator]=function(){return new vv(this.B)};
uv.prototype.j=function(){return new vv(this.B)};
g.w(vv,tv);vv.prototype.next=function(){return this.C.next()};g.k=g.xv.prototype;g.k.Yl=
g.k.mp=
g.k.has=function(a){return yv(this.B,a)};
g.k.isEmpty=function(){return 0==this.size};
g.k.clear=
g.k.remove=function(a){return this.delete(a)};
g.k.delete=
g.k.get=
g.k.set=
g.k.forEach=
g.k.clone=function(){return new g.xv(this)};
g.k.keys=function(){return wv(this.Ak(!0)).j()};
g.k.values=function(){return wv(this.Ak(!1)).j()};
g.k.entries=
g.k.Ak=g.ob(g.Av,g.Kd);g.k=g.Av.prototype;g.k.isPlaying=
g.k.isPaused=
g.k.iJ=function(){this.Tl("begin")};
g.k.Yq=function(){this.Tl("end")};
g.k.onFinish=function(){this.Tl("finish")};
g.k.Tl=function(a){this.dispatchEvent(a)};var Ugb=Sd(;g.ob(Bv,g.Av);g.k=Bv.prototype;g.k.play=
g.k.Haa=
g.k.stop=
g.k.zL=
g.k.xa=
g.k.pause=function(){};var Yka={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0};Cv("Element","attributes")||Cv("Node","attributes");Cv("Element","innerHTML")||Cv("HTMLElement","innerHTML");Cv("Node","nodeName");Cv("Node","nodeType");Cv("Node","parentNode");Cv("Node","childNodes");Cv("HTMLElement","style")||Cv("Element","style");Cv("HTMLStyleElement","sheet");var ela=$ka("getPropertyValue"),fla=$ka("setProperty");Cv("Element","namespaceURI")||Cv("Node","namespaceURI");var dla={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0};var jla,ofb,ila,hla,kla;jla=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");ofb=RegExp("^[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.Vgb=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
g.Ev=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");ila=/^http:\/\/.*/;g.Wgb=RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)","i");hla=/\s+/;kla=/[\d\u06f0-\u06f9]/;Gv.prototype.clone=Iv.prototype.clone=function(){return new Iv(this.start,this.end)};
Iv.prototype.getLength=(();var mla=);g.ob(g.Lv,g.I);g.k=g.Lv.prototype;g.k.subscribe=
g.k.unsubscribe=
g.k.Eh=
g.k.oa=
g.k.clear=
g.k.xa=g.Mv.prototype.set=
g.Mv.prototype.get=
g.Mv.prototype.remove=function(a){this.j.remove(a)};g.ob(Nv,g.Mv);Nv.prototype.set=
Nv.prototype.B=
Nv.prototype.get=g.ob(Ov,Nv);Ov.prototype.set=
Ov.prototype.B=g.ob(g.Pv,Ov);g.ob(Qv,rla);Qv.prototype[Symbol.iterator]=
Qv.prototype.clear=g.ob(Rv,Qv);g.k=Rv.prototype;g.k.isAvailable=
g.k.set=
g.k.get=
g.k.remove=
g.k.Ak=
g.k.clear=function(){Sv(this);this.j.clear()};
g.k.key=g.ob(Tv,Rv);g.ob(sla,Rv);g.ob(Vv,Qv);var tla={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Uv=null;g.k=Vv.prototype;g.k.isAvailable=function(){return!!this.j};
g.k.set=
g.k.get=
g.k.remove=
g.k.Ak=
g.k.clear=g.ob(Yv,Qv);Yv.prototype.set=
Yv.prototype.get=
Yv.prototype.remove=
Yv.prototype.Ak=$v.prototype.getKey=function(){return this.j};
$v.prototype.getValue=function(){return this.B};
$v.prototype.clone=g.k=aw.prototype;g.k.ph=
g.k.remove=
g.k.Yl=function(){for(var a=this.j,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].getValue());return b};
g.k.mp=
g.k.clone=
g.k.isEmpty=
g.k.clear=g.w(ula,aw);g.bw.dh=void 0;g.bw.getInstance=
g.bw.prototype.j=0;var cw={},Xgb="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;cw.assign=
cw.DR=
var Ygb={vy:
aW:,Zgb={vy:
aW:;
cw.Rba=
cw.Rba();var $gb=!0;try{new Uint8Array(1)}catch(a){$gb=!1};var Cw={};Cw=for(var Dw={},Q2,ahb=[],R2=0;256>R2;R2++){Q2=R2;for(var bhb=0;8>bhb;bhb++)Q2=Q2&1?3988292384^Q2>>>1:Q2>>>1;ahb[R2]=Q2}Dw=var tw={};tw={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var lw=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ow=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Rla=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Gla=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],xw=Array(576);dw(xw);var yw=Array(60);dw(yw);var nw=Array(512);dw(nw);var kw=Array(256);dw(kw);var mw=Array(29);dw(mw);var pw=Array(30);dw(pw);var Ola,Pla,Qla,Nla=!1;var Iw;Iw=[new Hw(0,0,0,0,,
new Hw(4,4,8,4,Fw),new Hw(4,5,16,8,Fw),new Hw(4,6,32,32,Fw),new Hw(4,4,16,16,Gw),new Hw(8,16,32,32,Gw),new Hw(8,16,128,128,Gw),new Hw(8,32,128,256,Gw),new Hw(32,128,258,1024,Gw),new Hw(32,258,258,4096,Gw)];var Mla={};Mla=var Sla=Object.prototype.toString;
Jw.prototype.push=
Jw.prototype.Yq=var Lw="@@redux/INIT"+Kw(),Yla="@@redux/REPLACE"+Kw();var Zla="function"===typeof Symbol&&Symbol.observable||"@@observable";var chb=[0,ggb,-3,I2];g.w(Ow,T);Ow.prototype.getType=function(){return Uj(this,11)};
Ow.yb=[2,13,14];var m5a=);var Awa=new g.Pw("adInfoDialogEndpoint");var Fya=new g.Pw("adPingingEndpoint");var bL=new g.Pw("adActionInterstitialRenderer");var dhb=new g.Pw("adDurationRemainingRenderer");var kN=new g.Pw("adHoverTextButtonRenderer");var ywa=new g.Pw("adInfoDialogRenderer");var IN=new g.Pw("adMessageRenderer");var lN=new g.Pw("adPreviewRenderer");var JDa=new g.Pw("dismissablePanelTextPortraitImageRenderer");var ehb=new g.Pw("flyoutCtaRenderer");var pBa=new g.Pw("instreamAdPlayerOverlayRenderer");var fhb=new g.Pw("instreamAdPlayerUnderlayRenderer");var Heb=new g.Pw("instreamSurveyAdBackgroundImageRenderer");var RDa=new g.Pw("instreamSurveyAdPlayerOverlayRenderer");var dN=new g.Pw("instreamSurveyAdRenderer"),jN=new g.Pw("instreamSurveyAdSingleSelectQuestionRenderer"),iN=new g.Pw("instreamSurveyAdMultiSelectQuestionRenderer"),S2=new g.Pw("instreamSurveyAdAnswerRenderer"),ghb=new g.Pw("instreamSurveyAdAnswerNoneOfTheAboveRenderer");var bN=new g.Pw("instreamVideoAdRenderer");var hhb=new g.Pw("textOverlayAdContentRenderer"),ihb=new g.Pw("enhancedTextOverlayAdContentRenderer"),jhb=new g.Pw("imageOverlayAdContentRenderer");var MDa=new g.Pw("inPlayerAdLayoutRenderer");var GDa=new g.Pw("playerBytesAdLayoutRenderer");var hN=new g.Pw("playerUnderlayAdLayoutRenderer");var cN=new g.Pw("adIntroRenderer");var EDa=new g.Pw("playerBytesSequentialLayoutRenderer");var YEa=new g.Pw("slidingTextPlayerOverlayRenderer");var eN=new g.Pw("surveyTextInterstitialRenderer");var khb=new g.Pw("simpleAdBadgeRenderer");var tM=new g.Pw("skipAdRenderer"),lhb=new g.Pw("skipButtonRenderer");var VDa=new g.Pw("adSlotRenderer");var gN=new g.Pw("squeezebackPlayerSidePanelRenderer");var mhb=new g.Pw("timedPieCountdownRenderer");var nhb=new g.Pw("adAvatarViewModel");var ohb=new g.Pw("adButtonViewModel");var phb=new g.Pw("adPreviewViewModel");var qhb=new g.Pw("playerAdAvatarLockupCardButtonedViewModel");var rhb=new g.Pw("skipAdButtonViewModel");var shb=new g.Pw("skipAdViewModel");var thb=new g.Pw("visitAdvertiserLinkViewModel");g.w(Qw,T);g.w(Rw,T);g.w(Sw,T);g.w(Tw,T);g.w(Uw,T);Uw.prototype.clearVideo=function(){return fj(this,1)};
var wP=[1,2,3,4];var yHa={mja:0,kja:1,lja:2};var zHa={qja:0,pja:1,oja:2,nja:3};var DHa={Cna:0,Bna:1,Ana:2};var uP={wqa:0,xqa:1,uqa:2,tqa:3,rqa:4,vqa:5,sqa:6,qqa:7};var CHa={ora:0,nra:1,jra:2,fra:3,mra:4,pra:5,ira:6,dra:7,hra:8,lra:9,kra:10,qra:11,gra:12,rra:13};var qIa={Fra:0,tra:1,wra:2,Gra:3,ura:4,vra:5,Bra:6,Dra:7,yra:8,sra:9,Ara:10,Era:11,zra:12,xra:13,Cra:14};var BHa={Ova:0,Mva:1,Nva:2};var pIa={z2a:0,y2a:1,x2a:2,w2a:3};var oIa={G2a:0,A2a:1,B2a:5,C2a:6,E2a:2,F2a:3,D2a:4};var nIa={J2a:0,K2a:1,I2a:2,H2a:3};var mIa={O2a:0,M2a:1,N2a:2};var lIa={ihb:0,Wgb:1,ehb:2,Xgb:3,fhb:4,ahb:5,ghb:6,bhb:7,Zgb:8,Ygb:9,dhb:10,hhb:11,Vgb:12};g.w(Vw,T);Vw.prototype.getType=function(){return Uj(this,1)};g.w(Ww,T);g.w(Xw,T);g.w(Yw,T);g.w(Zw,T);g.w($w,T);g.w(ax,T);ax.prototype.j=function(a,b){return Cj(this,2,ni,a,b)};
ax.yb=[2];g.w(bx,T);bx.prototype.j=function(a,b){return Cj(this,3,ni,a,b)};
bx.yb=[3];g.w(cx,T);g.w(dx,T);g.w(ex,T);g.w(fx,T);g.w(gx,T);g.w(hx,T);g.w(ix,T);g.w(jx,T);g.w(kx,T);g.w(lx,T);var sP=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];var LHa={Uka:0,bka:2,Wka:3,cka:4,aka:5,Lka:6,Nka:58,oka:17,Rja:18,Qka:15,Ska:7,uka:8,zja:10,Aja:26,Uja:45,Yja:11,nka:14,Yka:16,vja:19,Bja:20,wja:21,Zka:22,Cja:23,Zja:25,rja:27,sja:53,ska:28,Tja:30,Dka:31,Oja:32,Dja:33,wka:34,pka:35,kka:36,xja:37,Jka:39,gka:41,lka:42,ika:43,hka:44,yja:40,Fka:46,Eka:49,Gka:50,jka:51,mka:52,Xka:54,Gja:57,Ija:91,Jja:93,Hja:92,Kka:60,Pja:67,tja:64,Vja:65,Kja:68,uja:69,vka:70,fka:71,dka:72,Nja:73,Mja:75,Vka:76,Cka:77,qka:78,Mka:79,Ika:80,Qja:81,Wja:82,Lja:83,Xja:84,Oka:85,
Hka:89,rka:86,zka:87,Aka:88,yka:90,xka:100,Fja:94,Eja:95,Bka:96,tka:97,Sja:98,Rka:99,Tka:101,Pka:102};var JHa={lla:0,dla:1,kla:2,fla:3,ela:4,jla:5,ila:6,hla:7,gla:8,mla:9};var IHa={ula:0,ola:1,nla:2,sla:3,wla:4,qla:5,rla:6,tla:7};var KHa={Gla:0,Cla:1,Bla:2,Ela:3,yla:4,xla:5,Dla:6,zla:7,Hla:8,Fla:9,Ala:10};var HHa={Ula:0,Tla:1,Sla:2};var MHa={cNa:0,VMa:1,YMa:2,yMa:3,aNa:4,lMa:5,RMa:6,BMa:7,bNa:8,uMa:9,OMa:10,vMa:11,TMa:12,WLa:13,FMa:14,DMa:15,EMa:16,SMa:17,HMa:18,QMa:19,PMa:20,LMa:21,qMa:22,XLa:23,CMa:24,JMa:25,sMa:26,rMa:27,IMa:28,YLa:29,MMa:30,xMa:31,ZMa:32,kMa:33,KMa:34,jMa:35,mMa:36,nMa:37,tMa:38,pMa:39,oMa:40,NMa:41,GMa:42,UMa:43,zMa:44,WMa:45,XMa:46,AMa:47,wMa:70,gMa:48,dMa:49,iMa:50,hMa:51,fMa:52,cMa:53,ZLa:54,eMa:55,bMa:56,aMa:57,ULa:58,TLa:59,SLa:60,MLa:61,RLa:62,NLa:63,OLa:64,LLa:65,PLa:66,VLa:67,QLa:68,KLa:69};var xHa={kqa:0,fqa:1,eqa:18,Vpa:2,Opa:3,Upa:9,Ppa:10,Spa:14,Qpa:4,Npa:5,Rpa:6,mqa:11,Tpa:12,Kpa:13,Jpa:15,Ypa:16,gqa:17,hqa:19,nqa:20,dqa:21,aqa:22,cqa:23,Mpa:24,iqa:25,Lpa:26,lqa:27,Zpa:28,bqa:29,Xpa:30,jqa:31,Wpa:7};var NHa={Qla:0,Rla:1,Lla:2,Mla:3,Nla:4,Ila:5,Kla:6,Ola:7,Pla:8,Jla:9};var tP={uma:0,ema:1,tma:3,qma:4,pma:5,fma:25,vma:6,cma:7,Wla:8,hma:9,Vla:12,gma:22,kma:23,lma:26,mma:27,nma:28,rma:24,oma:13,wma:14,jma:15,Xla:16,ama:17,Yla:18,Zla:19,bma:20,dma:21};g.w(mx,T);g.w(nx,T);nx.prototype.j=function(a,b){return Mj(this,1,mx,a,b)};
nx.yb=[1];g.w(ox,T);ox.prototype.j=function(a,b){return Cj(this,2,ni,a,b)};
ox.prototype.getMetrics=function(a){return mea(this,2,a)};
ox.yb=[2];g.w(px,T);var OHa=[1,2];g.mV=new g.Pw("browseEndpoint");var uhb=new g.Pw("confirmDialogEndpoint");var aua=new g.Pw("rawColdConfigGroup");var $ta=new g.Pw("rawHotConfigGroup");var tIa={D_a:0,C_a:1,y_a:2,w_a:3,z_a:4,x_a:5,B_a:6,A_a:7};g.uH=new g.Pw("commandExecutorCommand");g.w(qx,T);g.w(rx,T);g.w(sx,T);g.w(tx,T);var RHa=[1,2,3];g.w(ux,T);g.w(vx,T);vx.prototype.B=function(a,b){return Cj(this,1,yi,a,b)};
vx.prototype.j=function(a,b){return Cj(this,2,yi,a,b)};
vx.prototype.Ff=function(){return Oj(this,3)};
vx.yb=[1,2];g.w(wx,T);g.w(xx,T);xx.prototype.j=function(a,b){return Cj(this,1,ni,a,b)};
xx.prototype.getMetrics=function(a){return mea(this,1,a)};
xx.yb=[1];g.w(yx,T);g.w(zx,T);g.w(Ax,T);g.w(Bx,T);g.w(Cx,T);g.w(Dx,T);g.w(Ex,T);g.w(Fx,T);g.w(Gx,T);g.w(Hx,T);var aIa=[1,2],dIa=[3,4,5];g.w(Ix,T);Ix.prototype.getName=function(){return Oj(this,2)};g.w(Yx,T);g.w(Zx,T);g.w($x,T);$x.prototype.getId=function(){return Oj(this,1)};g.w(ay,T);ay.prototype.getType=function(){return oi(dj(this,1))};g.w(by,T);by.prototype.getType=function(){return oi(dj(this,1))};g.w(cy,T);cy.prototype.getType=function(){return oi(dj(this,1))};g.w(dy,T);var zP=[1,2,3,4];g.w(ey,T);g.w(fy,T);g.w(gy,T);var yP=[1,2,3,4];g.w(hy,T);g.w(iy,T);iy.prototype.j=function(a,b){return Mj(this,2,gy,a,b)};
iy.yb=[2];var xP=[3,4,5,6,7];g.w(jy,T);g.w(ky,T);var EIa=[1,2];g.w(ly,T);ly.prototype.getId=function(){return g.Ij(this,jy,2)};g.w(my,T);my.prototype.j=function(a,b){return Mj(this,2,ly,a,b)};
my.yb=[2];g.w(ny,T);ny.prototype.j=function(a,b){return Mj(this,1,ly,a,b)};
ny.prototype.B=function(a,b){return Mj(this,2,my,a,b)};
ny.yb=[1,2];g.w(oy,T);var THa=[1,2,3];g.w(py,T);g.w(qy,T);qy.prototype.j=function(a,b){return Cj(this,2,ni,a,b)};
qy.yb=[2];g.w(ry,T);g.w(sy,T);g.w(ty,T);g.w(uy,T);g.w(vy,T);g.w(wy,T);wy.prototype.j=function(a,b){return Cj(this,1,ni,a,b)};
wy.yb=[1];g.w(yy,T);g.w(zy,T);g.w(Ay,T);var sIa=[1,2,3];g.w(By,T);By.prototype.j=function(a,b){return Mj(this,1,Ay,a,b)};
By.yb=[1];g.w(Cy,T);g.w(Dy,T);g.w(Ey,T);g.w(Fy,T);Fy.prototype.j=function(a,b){return Mj(this,1,Ey,a,b)};
Fy.yb=[1];g.w(Gy,T);g.w(Hy,T);g.w(Iy,T);Iy.prototype.j=function(a,b){return Mj(this,1,Hy,a,b)};
Iy.yb=[1];g.w(Jy,T);Jy.prototype.j=function(a,b){return Mj(this,1,Hy,a,b)};
Jy.yb=[1];g.w(Ky,T);g.w(Ly,T);var WIa={Ufb:0,Ohb:1,kib:32,tib:61,Fib:67,vib:86,iib:42,lib:60,Vhb:62,rib:73,pib:76,xib:88,yib:90,Lib:99,fib:98,Rib:41,Sib:69,Tib:70,Uib:71,HTa:2,cUa:27,ANDROID:3,Cma:54,Dma:14,Lma:91,Ema:55,Fma:24,Gma:20,Hma:18,Jma:21,Nma:30,Qma:29,Rma:28,Sma:34,Mma:36,Ima:38,IOS:5,qHa:15,AHa:92,rHa:40,tHa:25,uHa:17,vHa:19,wHa:64,xHa:66,yHa:26,CHa:22,NHa:33,OHa:68,PHa:35,zHa:53,BHa:37,sHa:39,Wdb:7,afb:57,pfb:43,Afb:59,qfb:93,Pma:74,Hfb:75,Ifb:85,Jfb:65,Lfb:80,Mfb:8,Udb:10,Ofb:58,Nfb:63,Kfb:72,Oma:23,ujb:11,vjb:13,
Tra:12,Vdb:16,gib:56,uib:31,ETa:77,DEa:84,oib:87,FEa:89,EEa:94,JQa:95};var vhb={t4:0,CLASSIC:1,a4:2,B1:3,d1:4,i4:5,w1:6,vU:7};g.w(My,T);My.prototype.r6=function(){return g.Tj(this,3)};
My.prototype.z6=function(){return g.Tj(this,5)};
My.prototype.xr=function(a){return O(this,5,a)};g.w(Ny,T);g.w(Oy,T);g.w(Py,T);g.w(Qy,T);g.w(Ry,T);Ry.yb=[2];g.w(g.Sy,T);g.Sy.prototype.Js=ca(0);g.Sy.prototype.getPlayerType=function(){return Uj(this,36)};
g.Sy.prototype.setHomeGroupInfo=function(a){return Jj(this,Ry,81,a)};
g.Sy.prototype.clearLocationPlayabilityToken=function(){return fj(this,89)};
g.Sy.yb=[9,66,32,86,100,101];g.w(Ty,T);Ty.prototype.getKey=function(){return g.Tj(this,1)};
Ty.prototype.getValue=
var Uta=[2,3,4,5,6];g.w(Uy,T);Uy.yb=[15,26,28];g.w(Vy,T);Vy.yb=[5];g.w(Wy,T);Wy.prototype.setToken=function(a){return O(this,2,a)};g.w(Xy,T);Xy.prototype.setSafetyMode=function(a){return S(this,5,a)};
Xy.yb=[12];g.w(Yy,T);Yy.prototype.Sw=
Yy.yb=[12];var nN=new g.Pw("thumbnailLandscapePortraitRenderer");var BIa={n8a:0,i8a:1,l8a:2,m8a:3,j8a:4,k8a:5};var zIa={T8a:0,S8a:1,o8a:2,p8a:3,q8a:4,r8a:5,s8a:6,t8a:7,u8a:8,w8a:9,x8a:10,y8a:11,z8a:12,A8a:13,B8a:14,C8a:15,E8a:16,F8a:17,I8a:18,J8a:19,K8a:20,N8a:21,L8a:22,M8a:23,O8a:24,P8a:25,Q8a:26,R8a:27,H8a:28,v8a:29,D8a:30,G8a:31};var yIa={d9a:0,U8a:1,V8a:2,W8a:3,X8a:4,Y8a:5,Z8a:6,a9a:7,b9a:8,c9a:9,e9a:10};var AIa={i9a:0,g9a:1,h9a:2,f9a:3};var bIa={Vqa:0,Bqa:1,Wqa:2,Pqa:3,yqa:4,zqa:5,Nqa:6,Aqa:7,Lqa:8,Mqa:13,Fqa:9,Hqa:10,Kqa:11,Xqa:12,Dqa:14,Jqa:15,Gqa:16,Rqa:17,Oqa:18,Uqa:19,Sqa:20,Eqa:21,Tqa:22,Cqa:23,Iqa:24,Qqa:25};var cIa={cra:0,ara:1,Zqa:2,Yqa:3};var uIa={zab:0,xab:1,yab:2};var VHa={Jna:0,Hna:4,Gna:2,Ena:5,Fna:8,Ina:9,Dna:3,Kna:6,Lna:7};var WHa={Osa:0,Lsa:1,Msa:2,Psa:3,Qsa:4,Nsa:5};var UHa={rta:0,pta:8,mta:2,kta:5,lta:9,nta:3,jta:4,sta:6,tta:7,qta:10};var gIa={wia:0,uia:1,via:2,yia:3,zia:4,xia:5};var DIa={L0a:0,E0a:1,G0a:2,K0a:3,I0a:4,H0a:6,F0a:7,J0a:5};var whb={Sgb:0,Rgb:1,Mgb:2,Qgb:3,Ogb:4,Pgb:5,Ngb:6};var rIa={nhb:0,mhb:1,ohb:2};var hIa={Kgb:0,Bgb:1,Cgb:2,Dgb:3,Egb:4,Fgb:5,Ggb:6,Hgb:7,Igb:8,Jgb:9};var xhb={qhb:0,phb:1};var iIa={Y7a:0,L7a:1,X7a:2,M7a:3,N7a:4,R7a:5,Q7a:6,P7a:7,Z7a:8,J7a:9,K7a:10,W7a:11,V7a:12,U7a:13,O7a:14,T7a:15,S7a:16};var PJa={fda:0,dda:1,cda:2,eda:3};g.yhb=new g.Pw("changeEngagementPanelVisibilityAction");var hxa=new g.Pw("continuationCommand");g.zhb=new g.Pw("openPopupAction");g.T2=new g.Pw("webCommandMetadata");var cSa=new g.Pw("metadataBadgeRenderer");var gxa=new g.Pw("signalServiceEndpoint");var SKa={Nia:0,Oia:1,Jia:2,Mia:3,Kia:4,Lia:5};var TKa={Via:0,Sia:1,Pia:2,Uia:3,Wia:4,Ria:5,Qia:6,Tia:7};g.w(Zy,T);Zy.prototype.getType=function(){return Uj(this,1)};var FP={wIa:0,xIa:1,vIa:2,rIa:3,tIa:4,uIa:5,yIa:6,sIa:7};var Ahb={CTa:0,vTa:1,wTa:2,BTa:3,ATa:6,zTa:7,xTa:8,yTa:9,uTa:10};var Bhb={IUa:0,FUa:1,HUa:2,GUa:3,EUa:4};var Chb={iZa:0,TYa:1,jZa:2,hZa:3,gZa:4,fZa:5,eZa:6,WYa:7,UYa:8,aZa:9,nZa:10,VYa:11,cZa:12,lZa:13,mZa:14,dZa:15,ZYa:16,YYa:17,bZa:18,XYa:19,kZa:20};var QHa={rZa:0,qZa:86};var GP={e1a:0,d1a:1,V0a:2,S0a:3,U0a:4,f1a:5,b1a:6,Q0a:7,g1a:8,O0a:9,Z0a:10,h1a:11,a1a:12,R0a:13,N0a:14,T0a:15,X0a:16,W0a:17,Y0a:18,P0a:19};var Dhb={F7a:0,A7a:1,H7a:2,B7a:3,G7a:4,D7a:5,E7a:6,C7a:7};var kG=new g.Pw("innertubeCommand");var Web=new g.Pw("loggingDirectives");var Ehb={n1:0,j1:1,m1:2,l1:3};var cpa={n1:"EMBEDDED_PLAYER_MODE_UNKNOWN",j1:"EMBEDDED_PLAYER_MODE_DEFAULT",m1:"EMBEDDED_PLAYER_MODE_PFP",l1:"EMBEDDED_PLAYER_MODE_PFL"};var CSa=new g.Pw("channelThumbnailEndpoint");var BSa=new g.Pw("embeddedPlayerErrorMessageRenderer");var xSa=new g.Pw("embeddedPlayerOverlayVideoDetailsRenderer"),DSa=new g.Pw("embeddedPlayerOverlayVideoDetailsCollapsedRenderer"),ESa=new g.Pw("embeddedPlayerOverlayVideoDetailsExpandedRenderer");var $Ra=new g.Pw("embedsInfoPanelRenderer");var eIa={nPa:0,bPa:14,lPa:15,mPa:16,cPa:17,gPa:18,iPa:19,ePa:20,fPa:21,kPa:22,hPa:23,jPa:24,dPa:25};var Fhb=new g.Pw("feedbackEndpoint");var Ghb=new g.Pw("callToActionButtonViewModel");g.w($y,T);g.w(az,T);g.w(bz,T);var dKa=[1,2];var Hhb={GIa:0,HIa:1,FIa:2,AIa:3,zIa:4,BIa:5,DIa:6,CIa:7,EIa:8};var Ihb={bJa:0,PIa:1,aJa:2,ZIa:3,KIa:4,MIa:5,NIa:6,LIa:7,TIa:8,QIa:9,RIa:10,SIa:16,IIa:11,cJa:12,JIa:13,XIa:14,OIa:15,YIa:17,UIa:18,VIa:19,WIa:20};var Jhb={gJa:0,dJa:1,fJa:2,eJa:3};var Khb={QFa:0,xFa:1,RFa:8,IFa:16,JFa:17,MFa:2,KFa:3,LFa:4,AFa:5,yFa:6,zFa:7,PFa:9,NFa:10,OFa:11,HFa:12,EFa:13,GFa:14,FFa:15,DFa:18,BFa:19,CFa:20,wFa:21};var Lhb={KYa:0,LYa:1,JYa:2};var Mhb={RYa:0,NYa:1,PYa:2,MYa:3,OYa:4,QYa:5};var Nhb={vJa:0,mJa:1,nJa:2,oJa:3,tJa:4,qJa:5,rJa:6,pJa:7,sJa:8,lJa:9,uJa:10};var Ohb={TNa:0,PNa:1,CNa:2,ONa:3,xNa:4,MNa:5,LNa:6,KNa:7,WNa:8,ENa:9,yNa:10,FNa:11,GNa:12,zNa:13,JNa:14,VNa:15,INa:16,HNa:17,ANa:18,BNa:19,DNa:20,QNa:21,RNa:22,SNa:23,UNa:24,NNa:25};var Phb={sOa:0,oOa:9,iOa:8,uOa:1,zOa:2,xOa:3,yOa:13,pOa:4,kOa:21,lOa:20,mOa:5,eOa:6,dOa:7,gOa:14,fOa:15,BOa:17,COa:10,nOa:16,hOa:18,rOa:19,bOa:11,cOa:12,vOa:22,wOa:23,aOa:24,tOa:25,ZNa:26,AOa:27,jOa:28,qOa:29};var Qhb={jpa:0,hpa:1,ipa:2};var Rhb={oNa:0,gNa:1,jNa:2,mNa:3,hNa:4,eNa:5,kNa:6,lNa:7,dNa:8,nNa:9,iNa:10,fNa:11};var Shb={mpa:0,kpa:1,npa:2,lpa:3};var Thb=new g.Pw("interactionLoggingCommandMetadata");var xra={dib:"WEB_DISPLAY_MODE_UNKNOWN",Zhb:"WEB_DISPLAY_MODE_BROWSER",bib:"WEB_DISPLAY_MODE_MINIMAL_UI",cib:"WEB_DISPLAY_MODE_STANDALONE",aib:"WEB_DISPLAY_MODE_FULLSCREEN"};g.w(cz,T);g.w(dz,T);g.w(ez,T);ez.prototype.j=function(a,b){return Mj(this,1,dz,a,b)};
ez.yb=[1];var pLa={Tda:0,uda:1,Eda:2,Jda:3,Pda:4,Qda:5,Uda:6,Kda:7,tda:8,Bda:9,Ada:10,gda:11,Dda:12,pda:14,xda:15,Ida:16,Hda:17,Gda:43,Cda:18,vda:29,yda:19,mda:20,qda:21,Sda:22,hda:23,Wda:24,zda:25,nda:26,Mda:27,oda:28,Nda:30,Oda:31,Fda:32,Rda:33,ida:34,Lda:35,Xda:36,kda:37,lda:38,Vda:39,rda:40,sda:41,jda:42,wda:44};var Uhb={Dsa:0,Csa:1,Bsa:2};g.w(fz,T);g.w(gz,T);var Vhb={tga:0,lga:114,kfa:1,fga:4,gga:14,Wea:15,hga:17,Iea:6,Lea:7,Nea:8,Mea:9,Uea:5,Bfa:16,yfa:101,ega:20,dga:26,Tfa:28,afa:104,vea:105,vga:50,cga:88,Wfa:89,Yfa:90,Xfa:91,bfa:2,pfa:92,qfa:19,yea:25,oga:107,Kea:29,efa:93,gfa:94,ffa:95,qga:30,zfa:31,ofa:116,mfa:3,ifa:82,dfa:83,cfa:84,lfa:85,Vfa:11,wga:27,Cfa:10,kga:115,sea:12,uea:13,tea:49,rea:106,Gea:18,xfa:21,Rea:22,qea:23,aga:24,gea:32,vfa:33,lea:34,Dga:35,Dea:36,Jfa:37,Yea:38,nga:39,iga:40,jga:41,yga:42,Hea:43,rga:44,Xea:45,Qea:46,Dfa:47,Afa:48,
jfa:51,Vea:52,Jea:53,Ufa:54,Zea:55,xea:56,Cea:57,Eea:99,wea:58,Gfa:59,Sea:60,Hfa:61,Efa:62,sfa:63,Cga:64,zga:65,xga:66,Bga:67,Aga:68,fea:69,Ffa:70,Kfa:71,Lfa:72,Ofa:73,Pfa:74,Mfa:75,Nfa:117,Aea:76,Bea:77,nea:78,Fea:79,nfa:80,Tea:81,zea:86,pea:87,iea:97,hea:103,rfa:98,Ifa:100,mea:102,Sfa:108,Rfa:109,jea:110,oea:111,tfa:112,Qfa:113,Oea:118,pga:119,wfa:120,ufa:121,Pea:122,Zfa:123};var Whb={Sga:0,Mga:1,Oga:2,Qga:3,Kga:4,Fga:5,Hga:6,Jga:7,Pga:8,Gga:9,Iga:10,Nga:13,Rga:14,Ega:11,Lga:12};var Xhb={Pha:0,Vga:1,Wga:2,Yga:3,fha:4,Jha:42,Bha:9,Kha:10,dha:11,Hha:12,Gha:13,oha:43,Aha:14,pha:15,Nha:47,rha:46,wha:16,vha:17,Zga:18,Eha:19,cha:20,Fha:21,Oha:22,Lha:23,Mha:24,bha:25,Xga:26,Iha:27,tha:28,yha:38,zha:39,xha:49,Dha:5,qha:6,eha:7,jha:8,uha:29,Cha:30,sha:31,Tga:32,lha:33,iha:34,gha:35,Rha:36,nha:37,Qha:40,mha:41,Uga:44,hha:45,aha:48};var CKa={Vha:0,Uha:1,Sha:2,Tha:3};var AKa={Xsa:0,Usa:1,Tsa:2,Wsa:3,Vsa:4};var Yhb={Cta:0,Ata:1,xta:2,Bta:3,yta:4,zta:5};var Zhb={Fta:0,Dta:1,Eta:2};var $hb={Mta:0,Lta:1,Jta:2,Kta:3,Ita:4};var aib={Pta:0,Nta:1,Ota:2,Qta:3};var bib={Wta:0,Rta:1,Vta:2,Uta:3,Tta:4,Sta:5};var cib={eua:0,cua:1,Xta:2};var dib={aua:0,Yta:1,Zta:2};var eib={hua:0,fua:1,gua:2};var fib={xua:0,tua:1,sua:2,nua:3,rua:4,jua:5,kua:6,uua:7,oua:8,vua:9,qua:10,iua:11,pua:12,wua:13};var gib={Cua:0,Aua:1,Bua:2,zua:3,yua:4};var zKa={bLa:0,xKa:1,yKa:2,JJa:3,oKa:4,zKa:5,pKa:6,KJa:7,AKa:8,CJa:9,DJa:10,SJa:11,IJa:12,LJa:13,rKa:14,QJa:15,BJa:16,QKa:17,mKa:18,MJa:19,uKa:20,sKa:21,tKa:22,AJa:23,ZKa:25,PKa:26,GLa:61,eKa:35,WJa:36,UJa:37,aKa:38,ZJa:93,cKa:39,bKa:40,iKa:41,WKa:97,XKa:106,YKa:102,fKa:42,dKa:43,jKa:44,kKa:45,FJa:24,GJa:27,HJa:28,yLa:29,BLa:75,zLa:104,ALa:30,sLa:98,vLa:108,tLa:105,uLa:89,CLa:31,DLa:86,wLa:32,xLa:91,gLa:51,iLa:52,rLa:62,kLa:70,oLa:63,mLa:64,hLa:65,qLa:66,jLa:71,nLa:67,lLa:68,pLa:69,FLa:33,gKa:46,
hKa:47,RKa:49,SKa:50,TKa:94,JKa:77,CKa:78,BKa:79,DKa:80,qKa:53,cLa:54,eLa:55,dLa:56,LKa:112,KKa:57,MKa:101,OKa:110,NKa:96,fLa:58,vKa:59,wKa:60,EKa:72,FKa:107,IKa:84,GKa:92,OJa:73,UKa:74,EJa:76,aLa:81,VJa:82,VKa:83,XJa:85,YJa:95,ELa:87,nKa:88,RJa:90,HKa:99,TJa:100,NJa:103,PJa:109,lKa:111};var DKa={Z0:0,Yra:1,zJa:2,Jsa:3,m4:4,n4:5,j2a:6,Z2a:7,XZa:8,y4:9,Zra:10,Yha:11,bia:12,Ehb:13,qia:14,sia:15,jia:16,kia:17,cia:18,Qoa:19,Pwa:20,vGa:21,lHa:22,z4:23,hab:24,Xha:25,jSa:26,iSa:47,q4:27,Poa:28,i2a:29,xCa:30,uGa:31,Asa:32,vgb:33,ngb:34,kgb:35,tgb:36,ugb:37,pgb:38,qgb:39,sgb:40,mgb:41,lgb:42,gpa:43,b4:44,hoa:45,P0:46,cea:48,z1:49,Z$a:50,Lva:51,EOa:52,Zjb:53};var hib={QXa:0,FXa:1,KXa:2,IXa:3,JXa:4,EXa:5,OXa:6,PXa:7,DXa:8,MXa:9,GXa:10,HXa:11,LXa:12,NXa:13};var iib={VXa:0,WXa:1,RXa:2,SXa:3,UXa:4,TXa:5};var yKa={wYa:0,sYa:1,nYa:2,oYa:3,pYa:21,iYa:4,cYa:5,fYa:6,eYa:7,hYa:8,dYa:24,vYa:9,bYa:10,uYa:11,tYa:12,mYa:22,rYa:13,qYa:20,jYa:14,lYa:15,kYa:16,aYa:17,ZXa:19,gYa:18,YXa:23};var FKa={f7a:0,Z6a:1,a7a:14,c7a:15,e7a:20,d7a:21,N6a:2,V6a:3,S6a:4,T6a:5,K6a:6,W6a:7,R6a:8,O6a:9,M6a:10,Y6a:11,U6a:12,X6a:13,L6a:16,b7a:17,Q6a:18,P6a:19};var jib={r7a:0,q7a:1,j7a:2,k7a:3,o7a:4,n7a:5,p7a:6,l7a:7,m7a:8};var GKa={wcb:0,tcb:1,vcb:2,ucb:3,ncb:4,rcb:5,qcb:6,pcb:8,ocb:9,scb:7};var EP={Sdb:0,xcb:1,ddb:2,Mdb:3,Hdb:4,Gcb:5,odb:6,Tcb:7,vdb:8,ldb:9,Fdb:10,Jdb:11,xdb:12,Hcb:13,mdb:14,Rcb:15,Ecb:16,jdb:17,wdb:18,Idb:19,Ocb:20,Wcb:21,Qdb:22,Pdb:57,Vcb:23,Ncb:24,Fcb:25,Rdb:26,hdb:27,Kdb:28,Ldb:29,qdb:30,Odb:31,Qcb:32,ydb:33,adb:34,cdb:35,kdb:36,idb:37,Adb:38,ndb:39,Tdb:40,Xcb:41,Ycb:42,Zcb:43,Ccb:44,Bcb:45,Acb:46,ycb:58,zcb:59,Ddb:47,Edb:48,rdb:67,sdb:68,Scb:49,zdb:50,Cdb:51,Bdb:52,fdb:53,Lcb:54,Ndb:55,bdb:56,tdb:60,edb:61,Ucb:62,Gdb:63,Pcb:64,gdb:69,Icb:65,Dcb:66,Kcb:70,Jcb:71,
pdb:74,Mcb:72,udb:73};g.w(hz,T);g.w(iz,T);g.w(jz,T);jz.prototype.Mk=function(){return g.Tj(this,1)};g.w(kz,T);g.w(lz,T);g.w(mz,T);var IKa=[1,2];g.w(nz,T);nz.prototype.getType=function(){return Uj(this,1)};
var HKa=[3,4];g.w(oz,T);g.k=oz.prototype;g.k.ez=function(){return g.Tj(this,1)};
g.k.Q4=function(a,b){return Mj(this,2,nz,a,b)};
g.k.R4=function(a,b){return Mj(this,3,nz,a,b)};
g.k.P4=function(a,b){return Mj(this,4,nz,a,b)};
g.k.T4=function(a,b){return Mj(this,5,nz,a,b)};
g.k.S4=function(a,b){return Mj(this,6,nz,a,b)};
oz.yb=[2,3,4,5,6];g.w(pz,T);pz.prototype.getType=function(){return Uj(this,2)};
pz.prototype.j=function(a,b){return Cj(this,5,ni,a,b)};
pz.yb=[5];g.w(qz,T);qz.prototype.B=function(a,b){return Cj(this,2,ni,a,b)};
qz.prototype.j=function(a,b){return Mj(this,4,nz,a,b)};
qz.prototype.D=function(a,b){return Mj(this,5,nz,a,b)};
qz.prototype.C=function(a,b){return Mj(this,6,nz,a,b)};
qz.yb=[2,4,5,6];g.w(rz,T);rz.prototype.getType=function(){return Uj(this,2)};g.w(sz,T);sz.prototype.j=function(a,b){return Mj(this,1,rz,a,b)};
sz.yb=[1];g.w(tz,T);g.w(uz,T);uz.prototype.j=function(a,b){return Cj(this,1,ni,a,b)};
uz.yb=[1];g.w(vz,T);vz.prototype.j=function(a,b){return Cj(this,1,ni,a,b)};
vz.prototype.B=function(a,b){return Cj(this,2,ni,a,b)};
vz.yb=[1,2];g.w(wz,T);wz.prototype.j=function(a,b){return Mj(this,2,uz,a,b)};
wz.yb=[2];g.w(xz,T);g.w(yz,T);g.w(zz,T);zz.prototype.Mk=function(){return g.Tj(this,1)};
zz.prototype.j=function(a,b){return Mj(this,3,yz,a,b)};
zz.yb=[3];g.w(Az,T);Az.prototype.Xg=function(){return Uj(this,1)};g.w(Bz,T);Bz.prototype.tf=function(){return Uj(this,2)};g.w(Cz,T);g.w(Dz,T);g.w(Ez,T);Ez.prototype.getType=function(){return Uj(this,1)};
Ez.prototype.Mk=function(){return g.Tj(this,8)};g.w(Fz,T);Fz.prototype.Mk=function(){return g.Tj(this,1)};g.w(Gz,T);Gz.prototype.Mk=function(){return g.Tj(this,1)};g.w(Hz,T);Hz.prototype.Mk=function(){return g.Tj(this,1)};g.w(Iz,T);Iz.prototype.Mk=function(){return g.Tj(this,2)};
Iz.prototype.CH=function(){return g.Tj(this,4)};g.w(Jz,T);Jz.prototype.Mk=function(){return g.Tj(this,1)};g.w(Kz,T);Kz.prototype.Mk=function(){return g.Tj(this,1)};g.w(Lz,T);g.w(Mz,T);g.w(Nz,T);g.w(Oz,T);Oz.prototype.Mk=function(){return g.Tj(this,2)};g.w(Pz,T);g.w(Qz,T);g.w(Rz,T);var U2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];g.w(Sz,T);g.w(Tz,T);g.w(Uz,T);g.w(Vz,T);g.w(Wz,T);Wz.prototype.getState=function(){return Uj(this,1)};
Wz.prototype.Ec=function(a){return S(this,1,a)};g.w(Xz,T);g.w(Yz,T);Yz.prototype.j=function(a,b){return Mj(this,1,Xz,a,b)};
Yz.yb=[1];g.w(Zz,T);Zz.prototype.j=function(a,b){return Mj(this,2,Yz,a,b)};
Zz.prototype.B=function(a,b){return Mj(this,3,Vz,a,b)};
Zz.yb=[2,3];g.w($z,T);$z.prototype.B=function(a,b){return Mj(this,1,Zz,a,b)};
$z.prototype.j=function(a,b){return Mj(this,2,Uz,a,b)};
$z.yb=[1,2];g.w(aA,T);g.w(bA,T);g.w(cA,T);g.w(dA,T);dA.prototype.Wl=function(){return kea(this,4)};g.w(eA,T);eA.prototype.getStatus=function(){return Qj(this,2)};g.w(fA,T);g.w(gA,T);gA.prototype.setConfig=function(a){return Jj(this,fA,2,a)};g.w(hA,T);g.w(iA,T);iA.prototype.getKey=function(){return g.Tj(this,1)};
iA.prototype.getValue=function(){return g.Tj(this,2)};g.w(jA,T);g.w(kA,T);g.w(dma,T);g.w(lA,T);lA.prototype.j=function(a,b){return Mj(this,3,dma,a,b)};
lA.yb=[3];g.w(ema,T);g.w(mA,T);g.w(nA,T);g.k=nA.prototype;g.k.getSettings=function(){return g.Ij(this,mA,1)};
g.k.ih=function(a){return Jj(this,mA,1,a)};
g.k.getState=function(){return Uj(this,2)};
g.k.Ec=function(a){return S(this,2,a)};
g.k.Wl=function(){return Sj(this,3)};g.w(fma,T);g.w(oA,T);oA.prototype.Wl=function(){return Sj(this,4)};g.w(gma,T);g.w(pA,T);g.k=pA.prototype;g.k.getType=function(){return Uj(this,1)};
g.k.L4=function(a,b){return Mj(this,2,gma,a,b)};
g.k.Wl=function(){return Sj(this,6)};
g.k.getPlaybackRate=function(){return lea(this,7)};
g.k.setPlaybackRate=function(a){return xk(this,7,a)};
g.k.oR=function(a){Vj(this,8,a)};
pA.yb=[2];g.w(qA,T);qA.prototype.Wl=function(){return Sj(this,3)};g.w(rA,T);rA.prototype.j=function(a,b){return Mj(this,1,pA,a,b)};
rA.prototype.B=function(a,b){return Mj(this,2,qA,a,b)};
rA.yb=[1,2];g.w(sA,T);sA.prototype.getState=function(){return Uj(this,1)};
sA.prototype.Ec=function(a){return S(this,1,a)};g.w(g.tA,T);g.w(g.uA,T);g.uA.prototype.Sw=function(a){return S(this,1,a)};
g.uA.prototype.j=function(a,b){return Mj(this,4,rA,a,b)};
g.uA.prototype.Cv=ca(1);g.uA.yb=[4];g.w(vA,T);vA.prototype.Ff=function(){return Uj(this,4)};g.w(wA,T);wA.prototype.j=function(a,b){return Cj(this,1,ni,a,b)};
wA.prototype.Fg=
wA.yb=[1];g.w(xA,T);g.k=xA.prototype;g.k.oe=function(){return g.Tj(this,1)};
g.k.setVideoId=function(a){return O(this,1,a)};
g.k.getPlaylistId=function(){return g.Tj(this,2)};
g.k.getPlaylistIndex=function(){return Rj(this,3)};
g.k.Uj=function(){return g.Tj(this,4)};
g.k.getPlayerType=function(){return Uj(this,5)};g.w(hma,T);g.w(yA,T);yA.prototype.j=function(a,b){return Mj(this,4,iA,a,b)};
yA.prototype.B=function(a,b){return Cj(this,5,Jda,a,b)};
yA.yb=[4,5];g.w(zA,T);g.w(AA,T);g.w(ima,T);g.w(BA,T);BA.prototype.Ff=function(){return g.Tj(this,2)};g.w(CA,T);CA.prototype.j=function(a,b){return Mj(this,1,BA,a,b)};
CA.yb=[1];g.w(DA,T);DA.prototype.Ff=function(){return g.Tj(this,2)};g.w(EA,T);EA.prototype.j=function(a,b){return Mj(this,1,DA,a,b)};
EA.yb=[1];g.w(jma,T);var ZJa=[1,2,3];g.w(FA,T);FA.prototype.j=function(a,b){return Mj(this,1,jma,a,b)};
FA.yb=[1];g.w(GA,T);var jG=[2,3,4,5];g.w(HA,T);g.w(IA,T);g.w(JA,T);g.w(kma,T);g.w(KA,T);KA.prototype.Ck=function(a,b){return Mj(this,5,kma,a,b)};
KA.yb=[5];g.w(lma,T);g.w(LA,T);LA.prototype.j=function(a,b){return Mj(this,3,lma,a,b)};
LA.prototype.B=function(a,b){return Cj(this,4,ni,a,b)};
LA.yb=[3,4];g.w(mma,T);g.w(MA,T);MA.prototype.B=function(a,b){return Mj(this,19,Py,a,b)};
MA.prototype.j=function(a,b){return Mj(this,20,Oy,a,b)};
MA.yb=[19,20];g.w(NA,T);g.w(nma,T);g.w(OA,T);OA.prototype.j=function(a,b){return Mj(this,2,NA,a,b)};
OA.prototype.setConfig=
OA.prototype.C=function(a,b){return Mj(this,5,NA,a,b)};
OA.prototype.B=function(a,b){return Mj(this,9,bz,a,b)};
OA.yb=[2,5,9];g.w(PA,T);PA.prototype.Wl=function(){return kea(this,2)};g.w(QA,T);QA.prototype.j=function(a,b){return Mj(this,9,PA,a,b)};
QA.yb=[9];g.w(oma,T);g.w(pma,T);g.w(qma,T);g.w(rma,T);g.w(RA,T);RA.prototype.getType=function(){return Uj(this,2)};
RA.prototype.j=function(a,b){return Mj(this,3,rma,a,b)};
RA.yb=[3];g.w(SA,T);SA.prototype.j=function(a,b){return Mj(this,10,aA,a,b)};
SA.prototype.B=function(a,b){return Mj(this,17,QA,a,b)};
SA.yb=[10,17];g.w(sma,T);var MJa={xna:0,wna:1,tna:2,una:3,vna:4};var kib={Goa:0,Coa:1,Eoa:2,Doa:3,Foa:4};var lib={Ooa:0,Loa:1,Koa:2,Moa:3,Joa:4,Hoa:5,Ioa:6,Noa:7};g.w(TA,T);g.k=TA.prototype;g.k.Ff=function(){return g.Tj(this,2)};
g.k.Mk=function(){return g.Tj(this,3)};
g.k.K4=function(a,b){return Cj(this,10,ni,a,b)};
g.k.CH=function(){return g.Tj(this,7)};
g.k.Wl=function(){return Qj(this,11)};
TA.yb=[10];var cJa={Soa:0,Roa:1,Uoa:2,Toa:3};var bJa={epa:0,dpa:1,Woa:2,Xoa:3,Yoa:4,Zoa:5,bpa:6,cpa:7,Voa:8,apa:9};var rJa={Lwa:0,Mwa:3,Nwa:1,Kwa:2};var YIa={aya:0,Vwa:1,exa:2,gxa:3,jxa:4,kxa:5,pxa:6,qxa:7,rxa:8,sxa:9,txa:10,wxa:11,xxa:12,yxa:13,zxa:14,Axa:15,Fxa:16,Jxa:17,Kxa:18,Nxa:19,Pxa:20,Rxa:21,Sxa:22,Uxa:23,Wxa:24,bya:25,cya:26,Hxa:27,Xxa:28,Ixa:29,vxa:30,mxa:31,uxa:32,gya:33,iya:34,Uwa:35,bxa:36,Yxa:37,Zxa:38,fxa:39,Bxa:40,Cxa:51,axa:41,Wwa:42,hxa:43,Dxa:44,cxa:45,Gxa:46,Qxa:47,Zwa:48,Mxa:49,Exa:50,dxa:52,ixa:53,lxa:54,Txa:55,Vxa:56,eya:57,dya:58,Oxa:59,Xwa:60,nxa:61,Ywa:62,fya:63,hya:64,Lxa:65,oxa:66};var aJa={IBa:0,Jya:1,xAa:2,FBa:3,aCa:4,qAa:5,yAa:6,Sya:7,Vya:8,Uya:9,MAa:10,pAa:11,oAa:12,WAa:13,fBa:14,GBa:15,VBa:16,Rya:17,sya:18,Gza:19,gza:20,vAa:21,CAa:22,HBa:23,uya:24,xya:25,RAa:26,oza:116,Jza:27,Kza:28,LAa:29,Mya:30,Cza:31,uAa:32,KAa:33,qya:34,rya:35,oya:36,pya:37,zAa:38,AAa:39,ZAa:40,Qya:41,YBa:42,PAa:43,JAa:44,NAa:45,rAa:46,OAa:47,wza:48,bza:49,aza:160,cCa:50,Iza:51,Hza:52,dza:53,eza:54,CBa:55,BBa:56,ABa:57,DBa:58,lza:59,xza:60,UBa:61,VAa:62,QAa:63,TAa:64,BAa:65,Eza:69,Fza:121,bCa:70,Bza:71,
wBa:72,xBa:73,XAa:74,YAa:75,Aza:76,yza:77,IAa:78,HAa:80,lya:81,Cya:115,Aya:120,Bya:122,Iya:123,Mza:124,Lza:125,zya:126,jBa:127,hBa:128,iBa:129,ZBa:130,nya:131,yya:132,vya:133,Dza:152,vza:178,fza:179,SAa:181,uza:193,Pya:198,Pza:82,Rza:83,gAa:84,Sza:85,mAa:86,Qza:87,Uza:88,aAa:89,dAa:90,iAa:91,fAa:92,hAa:93,Oza:94,Vza:95,eAa:96,Xza:97,Wza:98,Nza:99,Tza:100,jAa:101,bAa:102,nAa:103,kAa:104,Yza:105,lAa:106,cAa:107,Zza:118,KBa:108,OBa:109,NBa:110,MBa:111,PBa:112,LBa:113,JBa:114,mya:134,wya:138,Dya:139,
Eya:140,Hya:141,Nya:142,Tya:144,Wya:165,Oya:143,cza:135,iza:145,jza:146,wAa:147,RBa:148,TBa:149,WBa:150,zBa:153,jya:154,SBa:155,XBa:156,tya:157,hza:158,kBa:159,qza:161,kya:162,gBa:163,EBa:164,pza:166,kza:167,GAa:168,nza:169,mza:170,FAa:171,UAa:172,rza:173,Gya:174,sza:175,eBa:176,tza:177,Kya:182,vBa:183,uBa:184,tAa:136,sAa:137,yBa:151,Yya:180,Zya:190,Xya:192,bBa:185,dBa:186,cBa:187,aBa:191,Fya:188,QBa:189,DAa:194,EAa:199,qBa:66,mBa:67,nBa:117,rBa:68,tBa:197,oBa:195,sBa:196,lBa:201,pBa:202,Lya:200};var mib={Xra:0,Wra:1,Ura:2,Vra:3};var ALa={O4a:0,z5a:1,F5a:2,j5a:3,k5a:4,l5a:5,H5a:39,I5a:6,D5a:7,y5a:50,G5a:69,A5a:70,B5a:71,t5a:74,m5a:32,n5a:44,o5a:33,E5a:8,p5a:9,q5a:10,s5a:11,r5a:12,v5a:73,w5a:77,x5a:78,C5a:84,u5a:85,P4a:56,Q4a:57,R4a:58,S4a:59,T4a:60,U4a:61,k6a:13,l6a:14,m6a:15,u6a:16,p6a:17,w6a:18,v6a:19,r6a:20,s6a:21,n6a:34,t6a:35,q6a:36,o6a:49,Y4a:37,Z4a:38,b5a:40,d5a:41,c5a:42,e5a:43,f5a:51,a5a:52,X4a:67,V4a:22,W4a:23,M5a:24,S5a:25,T5a:62,R5a:26,P5a:27,L5a:48,J5a:53,K5a:63,U5a:66,O5a:54,Q5a:68,V5a:72,N5a:76,h5a:64,g5a:65,
W5a:28,Z5a:29,Y5a:30,X5a:31,h6a:45,j6a:46,i6a:47,g6a:83,e6a:55,b6a:79,a6a:80,d6a:81,f6a:82,i5a:86};var xLa={y6a:0,z6a:1,x6a:2};var CLa={C6a:0,B6a:1,A6a:2};var BLa={J6a:0,H6a:1,F6a:2,I6a:3,D6a:4,E6a:5,G6a:6};var gLa={T$a:0,S$a:1,R$a:2};var fLa={X$a:0,V$a:1,U$a:2,W$a:3};g.w(tma,T);g.w(uma,T);g.w(vma,T);g.w(wma,T);g.w(xma,T);g.w(UA,T);UA.prototype.hasFeature=function(){return null!=oi(dj(this,2))};g.w(VA,T);VA.prototype.Uj=function(){return g.Tj(this,7)};g.w(yma,T);g.w(zma,T);g.w(WA,T);WA.prototype.getName=function(){return Uj(this,1)};
WA.prototype.getStatus=function(){return Uj(this,2)};
WA.prototype.getState=function(){return Uj(this,3)};
WA.prototype.Ec=function(a){return S(this,3,a)};g.w(XA,T);XA.prototype.j=function(a,b){return Mj(this,2,WA,a,b)};
XA.yb=[2];g.w(Ama,T);g.w(YA,T);YA.prototype.j=function(a,b){return Mj(this,1,XA,a,b)};
YA.prototype.B=function(a,b){return Mj(this,2,XA,a,b)};
YA.yb=[1,2];var wLa={jJa:0,hJa:1,iJa:2};var dLa={BPa:0,vPa:1,yPa:2,CPa:3,wPa:4,xPa:5,zPa:6,APa:7};var eLa={FPa:0,EPa:1,DPa:2};var cLa={JTa:0,KTa:1,ITa:2};var bLa={aUa:0,NTa:1,WTa:2,bUa:3,YTa:4,QTa:5,MTa:6,OTa:7,PTa:8,ZTa:9,XTa:10,RTa:11,UTa:12,VTa:13,TTa:14,STa:15,LTa:16};var ZKa={A9a:0,w9a:1,z9a:2,y9a:3,x9a:4};var YKa={E9a:0,C9a:1,D9a:2,B9a:3};var $Ka={L9a:0,H9a:1,J9a:2,F9a:3,K9a:4,G9a:5,I9a:6};var XKa={U9a:0,W9a:1,V9a:2,P9a:3,N9a:4,O9a:5,Z9a:6,Q9a:7,a$a:8,S9a:9,T9a:10,M9a:11,R9a:12,Y9a:13,X9a:14};var aLa={d$a:0,c$a:1,b$a:2};var kLa={leb:0,jeb:1,ieb:2,beb:3,feb:4,geb:5,Zdb:6,eeb:7,keb:8,neb:9,heb:10,Xdb:11,Ydb:12,meb:13};var jLa={peb:0,oeb:1};var tLa={seb:0,teb:1,qeb:2,reb:3};var rLa={Qeb:0,ueb:1,Peb:2,Oeb:3,Ueb:4,Teb:5,Neb:19,zeb:6,Beb:7,Jeb:8,Aeb:24,Meb:25,Keb:20,Deb:21,xeb:22,Leb:23,veb:9,yeb:10,Ceb:11,Eeb:12,Feb:13,Geb:14,Ieb:15,Heb:16,Reb:17,Seb:18};var lLa={Yeb:0,Xeb:1,Zeb:2,Veb:3,Web:4};var hLa={ofb:0,hfb:1,cfb:2,lfb:3,gfb:4,nfb:5,bfb:6,dfb:7,ifb:8,efb:9,jfb:10,kfb:11,ffb:12,mfb:13};var nLa={vfb:0,tfb:1,rfb:2,sfb:3,ufb:4};var mLa={zfb:0,wfb:1,xfb:2,yfb:3};var iLa={Dfb:0,Cfb:1,Bfb:2};var sLa={Gfb:0,Efb:1,Ffb:2};var uLa={bgb:0,agb:1,Zfb:2,Xfb:3,Yfb:4};var vLa={fgb:0,dgb:1,cgb:2,egb:3};var nib={usa:0,rsa:1,ssa:2,nsa:3,tsa:4,qsa:5};var VIa={aea:0,Yda:1,Zda:2};var uHa={u4:0,IGa:1,vEa:2,wEa:3,kJa:4,qUa:5,Ona:6};var BP={dva:0,Kua:101,Qua:102,Fua:103,Iua:104,Nua:105,Oua:106,Rua:107,Sua:108,Uua:109,Vua:110,cva:111,Pua:112,Lua:113,Tua:114,Xua:115,eva:116,Hua:117,Mua:118,fva:119,Yua:120,Zua:121,Jua:122,Gua:123,Wua:124,bva:125,ava:126};var XJa={pva:0,mva:1,nva:2,jva:3,kva:4,iva:5,ova:6};var oib={iwa:0,hwa:1,fwa:2,gwa:3};var pib={twa:0,rwa:1,kwa:2,qwa:3,jwa:4,nwa:5,pwa:6,swa:7,owa:8,mwa:9,lwa:10};var qib={vwa:0,wwa:1,uwa:2};g.w(Bma,T);g.w(Cma,T);g.w(ZA,T);ZA.prototype.getState=function(){return Qj(this,1)};
ZA.prototype.Ec=function(a){return Wj(this,1,a)};g.w(Dma,T);g.w(Ema,T);g.w(Fma,T);g.w(Gma,T);g.w($A,T);$A.prototype.oe=function(){return g.Tj(this,1)};
$A.prototype.setVideoId=function(a){return O(this,1,a)};g.w(aB,T);aB.prototype.setTrackingParams=function(a){return zk(this,1,a)};g.w(bB,T);bB.prototype.hasVe=function(){return gj(this,aB,2)};g.w(cB,T);cB.prototype.hasFeature=g.w(Hma,T);g.w(Ima,T);g.w(dB,T);dB.prototype.Ff=function(){return Uj(this,2)};
var rib=[1];g.w(Jma,T);g.w(Kma,T);g.w(Lma,T);g.w(Mma,T);g.w(eB,T);eB.prototype.getVideoAspectRatio=function(){return lea(this,2)};g.w(Nma,T);g.w(Oma,T);g.w(Pma,T);g.w(Qma,T);g.w(Rma,T);g.w(Sma,T);g.w(Tma,T);g.w(Uma,T);g.w(Vma,T);g.w(Wma,T);g.w(fB,T);fB.prototype.getId=function(){return g.Tj(this,1)};g.w(Xma,T);g.w(gB,T);g.w(hB,T);hB.prototype.j=function(a,b){return Mj(this,5,gB,a,b)};
hB.yb=[5];g.w(Yma,T);g.w(Zma,T);g.w(iB,T);iB.prototype.Uj=function(){return g.Tj(this,30)};
iB.prototype.j=function(a,b){return Mj(this,27,Zma,a,b)};
iB.yb=[27];g.w($ma,T);g.w(ana,T);g.w(bna,T);g.w(cna,T);var V2=[1,2,3,4];g.w(dna,T);g.w(ena,T);g.w(fna,T);g.w(gna,T);g.w(jB,T);jB.prototype.Wl=function(){return Sj(this,2)};g.w(hna,T);g.w(ina,T);g.w(jna,T);g.w(kB,T);g.w(kna,T);g.w(lna,T);g.w(lB,T);lB.prototype.j=function(a,b){return Cj(this,1,ni,a,b)};
lB.yb=[1];g.w(oB,T);oB.prototype.Ff=function(){return Uj(this,3)};g.w(mna,T);g.w(pB,T);g.w(qB,T);g.w(nna,T);g.w(rB,T);rB.prototype.j=function(a,b){return Mj(this,2,qB,a,b)};
rB.prototype.B=function(a,b){return Mj(this,3,qB,a,b)};
rB.yb=[2,3];g.w(ona,T);g.w(sB,T);g.w(pna,T);g.w(tB,T);tB.prototype.oe=function(){return g.Ij(this,sB,Gj(this,W2,2))};
tB.prototype.setVideoId=
tB.prototype.getPlaylistId=
var W2=[2,3,4,5,9];g.w(uB,T);uB.prototype.getType=function(){return Uj(this,1)};
uB.prototype.oe=function(){return g.Tj(this,3)};
uB.prototype.setVideoId=function(a){return O(this,3,a)};g.w(qna,T);g.w(rna,T);g.w(vB,T);var VKa=[3];g.w(sna,T);g.w(tna,T);g.w(wB,T);wB.prototype.tf=function(){return g.Tj(this,2)};g.w(una,T);g.w(vna,T);var sib=[1];g.w(wna,T);g.w(xna,T);g.w(yna,T);g.w(zna,T);g.w(Ana,T);g.w(Bna,T);g.w(Cna,T);g.w(Dna,T);g.w(xB,T);xB.prototype.getStarted=g.w(Ena,T);g.w(Fna,T);g.w(yB,T);yB.prototype.getDuration=function(){return Qj(this,2)};
yB.prototype.ll=g.w(Gna,T);g.w(zB,T);g.w(AB,T);AB.prototype.Uj=function(){return g.Tj(this,1)};g.w(Hna,T);g.w(Ina,T);g.w(BB,T);BB.prototype.jf=function(){return g.Ij(this,Hna,8)};
BB.prototype.v7=function(){return gj(this,Hna,8)};
BB.prototype.getVideoData=
BB.prototype.yF=
BB.yb=[4];g.w(Jna,T);g.w(CB,T);CB.prototype.j=function(a){return O(this,2,a)};g.w(DB,T);DB.prototype.j=function(a){return O(this,1,a)};
DB.yb=[3];g.w(EB,T);EB.prototype.j=function(a){return O(this,1,a)};
EB.prototype.hasVe=function(){return gj(this,aB,2)};g.w(FB,T);FB.prototype.j=function(a){return O(this,1,a)};
FB.prototype.hasVe=function(){return gj(this,aB,2)};g.w(GB,T);GB.prototype.j=function(a){return O(this,1,a)};
GB.prototype.hasVe=function(){return gj(this,aB,2)};g.w(HB,T);HB.prototype.j=function(a){return O(this,1,a)};
HB.prototype.hasVe=g.w(Nna,T);g.w(IB,T);IB.prototype.getId=function(){return g.Tj(this,2)};g.w(LB,T);LB.prototype.getVisibilityState=function(){return Uj(this,5)};
LB.yb=[16];g.w(Ona,T);g.w(MB,T);MB.prototype.getPlayerType=function(){return Uj(this,7)};
MB.prototype.oe=function(){return g.Tj(this,19)};
MB.prototype.setVideoId=function(a){return O(this,19,a)};
MB.yb=[112,83,118,68];g.w(Pna,T);g.w(Qna,T);g.w(OB,T);OB.prototype.oe=function(){return g.Tj(this,1)};
OB.prototype.setVideoId=function(a){return O(this,1,a)};
OB.prototype.j=function(a,b){return Mj(this,9,Qna,a,b)};
OB.yb=[9];g.w(PB,T);PB.prototype.j=function(a,b){return Mj(this,3,OB,a,b)};
PB.yb=[3];g.w(QB,T);QB.prototype.oe=function(){return g.Tj(this,1)};
QB.prototype.setVideoId=g.w(Rna,T);g.w(RB,T);RB.prototype.j=function(a,b){return Mj(this,1,QB,a,b)};
RB.prototype.B=function(a,b){return Mj(this,2,Rna,a,b)};
RB.yb=[1,2];g.w(Sna,T);g.w(Tna,T);g.w(Una,T);g.w(SB,T);SB.prototype.getId=function(){return g.Tj(this,1)};
SB.prototype.j=function(a,b){return Cj(this,2,yi,a,b)};
SB.prototype.setVideoIds=
SB.yb=[2];g.w(Vna,T);g.w(Wna,T);g.w(Xna,T);g.w(TB,T);TB.prototype.j=function(a,b){return Cj(this,9,ni,a,b)};
TB.yb=[9];g.w(Yna,T);g.w(Zna,T);g.w(UB,T);UB.prototype.getId=function(){return g.Tj(this,1)};
UB.prototype.j=function(a,b){return Mj(this,14,Xna,a,b)};
UB.prototype.B=function(a,b){return Mj(this,17,Yna,a,b)};
UB.yb=[14,17];g.w(VB,T);VB.prototype.B=function(a,b){return Mj(this,1,UB,a,b)};
VB.prototype.j=
VB.yb=[1,2];g.w($na,T);g.w(WB,T);WB.prototype.getOrigin=function(){return g.Tj(this,3)};
WB.prototype.Xg=g.w(aoa,T);g.w(boa,T);g.w(XB,T);
var UF=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];var tib={Iva:0,Fva:1,Eva:2,Hva:3,Gva:4,Cva:5,Dva:6};var uib={lDa:0,WCa:1,ZCa:2,XCa:3,cDa:4,YCa:5,HCa:6,hDa:7,QCa:8,ACa:9,RCa:10,dDa:11,aDa:12,JCa:13,FCa:14,ICa:15,kDa:16,BCa:17,CCa:18,iDa:19,KCa:20,GCa:21,gDa:22,rDa:23,qDa:24,mDa:25,SCa:26,bDa:27,sDa:28,LCa:29,yCa:30,oDa:31,nDa:32,PCa:33,wDa:34,OCa:35,eDa:36,vDa:37,TCa:38,fDa:39,NCa:40,MCa:41,ECa:42,VCa:43,uDa:44,jDa:45,pDa:46,UCa:47,zCa:48,DCa:49,tDa:50};var vib={hEa:0,SDa:1,VDa:2,TDa:3,YDa:4,UDa:5,HDa:6,dEa:7,MDa:8,zDa:9,NDa:10,ZDa:11,WDa:12,JDa:13,FDa:14,IDa:15,gEa:16,BDa:17,CDa:18,eEa:19,KDa:20,GDa:21,cEa:22,mEa:23,lEa:24,iEa:25,ODa:26,XDa:27,nEa:28,LDa:29,xDa:30,jEa:31,ADa:32,rEa:33,aEa:34,qEa:35,PDa:36,bEa:37,EDa:38,RDa:39,pEa:40,fEa:41,kEa:42,QDa:43,yDa:44,DDa:45,oEa:46};var wib={lGa:0,kGa:1,mGa:2};var mJa={ZEa:0,XEa:1,UEa:2,YEa:3,VEa:4,WEa:5};var xib={lFa:0,jFa:1,fFa:3,hFa:4,iFa:5,kFa:6,gFa:7};var yib={rFa:0,oFa:1,qFa:2,pFa:3,nFa:4,mFa:5};var zib={bGa:0,cGa:1,aGa:2,ZFa:3,YFa:4};var Aib={fGa:0,dGa:1,eGa:2};var Bib={rGa:0,sGa:1,tGa:2,qGa:3,oGa:4,pGa:5};var pva={cHa:0,JGa:1,PGa:2,QGa:4,WGa:8,RGa:16,SGa:32,bHa:64,aHa:128,LGa:256,NGa:512,UGa:1024,MGa:2048,OGa:4096,KGa:8192,TGa:16384,XGa:32768,VGa:65536,YGa:131072,ZGa:262144};var WJa={GHa:0,FHa:1,EHa:2,DHa:4};var VJa={LHa:0,IHa:1,JHa:2,MHa:3,KHa:4,HHa:5};var Cib={jCa:0,iCa:1,hCa:2};var Dib={JPa:0,IPa:1,HPa:2};var Eib={BQa:0,hQa:1,zQa:2,lQa:3,rQa:4,DQa:5,AQa:6,XPa:7,WPa:8,VPa:9,bQa:10,gQa:11,fQa:12,YPa:13,sQa:14,nQa:15,pQa:16,NPa:17,yQa:18,RPa:19,oQa:20,MPa:21,qQa:22,eQa:23,OPa:24,QPa:25,vQa:26,CQa:27,wQa:28,mQa:29,ZPa:30,cQa:31,dQa:32,UPa:33,EQa:34,SPa:35,aQa:36,tQa:37,PPa:38,KPa:39,TPa:41,kQa:42,uQa:43,xQa:44,iQa:45,jQa:46,LPa:47};var Fib={IQa:0,HQa:1,GQa:2,FQa:3};var iJa={zpa:0,ypa:1,xpa:2};var eJa={tRa:0,sRa:1,pRa:2,qRa:7,oRa:8,nRa:25,WQa:3,XQa:4,fRa:5,gRa:27,eRa:28,YQa:9,MQa:10,KQa:11,LQa:6,VQa:12,TQa:13,UQa:14,SQa:15,aRa:16,bRa:17,ZQa:18,dRa:19,cRa:20,PQa:26,QQa:21,OQa:22,RQa:23,NQa:24,vRa:34,uRa:35,xRa:39,wRa:29,kRa:30,lRa:32,mRa:33,iRa:36,jRa:38,hRa:37,rRa:31};var gJa={CRa:0,zRa:1,ARa:2,BRa:3,yRa:4};var fJa={IRa:0,GRa:1,HRa:2,ERa:3,FRa:4,DRa:5};var IIa={PRa:0,JRa:1,LRa:2,KRa:3,MRa:4,NRa:5,ORa:6,QRa:7};var jJa={pSa:0,kSa:1,oSa:2,mSa:3,nSa:4,lSa:5};var lJa={ASa:0,qSa:1,uSa:2,ySa:3,zSa:4,vSa:5,wSa:6,xSa:7,sSa:8,rSa:9,tSa:10};var kJa={ESa:0,BSa:1,CSa:2,DSa:3};var iKa={bwa:0,Yva:1,Zva:2,Vva:3,Wva:4,Xva:5};var nKa={JWa:0,IWa:1,BWa:2,GWa:3,CWa:4,FWa:5,HWa:6,EWa:7,DWa:8};var IJa={dXa:0,VWa:1,eXa:2,cXa:4,ZWa:8,YWa:16,XWa:32,aXa:64,WWa:128,bXa:256};var jKa={wXa:0,rXa:1,vXa:2,oXa:3,gXa:4,mXa:5,hXa:6,iXa:7,kXa:8,pXa:9,tXa:10,sXa:11,uXa:12,jXa:13,lXa:14,nXa:15,qXa:16,fXa:17};var FJa={yWa:0,vWa:1,wWa:2,xWa:3};var LJa={QWa:0,SWa:1,PWa:2,LWa:3,RWa:4,MWa:5,NWa:6,OWa:7};var OIa={Sfb:0,Gsa:1,tPa:2,vUa:3,xUa:4,yUa:5,sUa:6,qab:7,OUa:8,NUa:9,tUa:10,wUa:11,Ybb:12,eia:13,mia:14,fia:15,UZa:16,qWa:17,PUa:18,SUa:19,UWa:20,RUa:21,KWa:22,xXa:23,YUa:24,AWa:25,uUa:26,nab:27,o9a:28,q2a:29,Apa:30,Xjb:31,zWa:32};var NIa={Vfb:0,dea:1,zXa:2,yXa:3,SUCCESS:4,Y$a:5,kCa:6,e2a:7,eFa:9,Hsa:10,Dua:11,CANCELLED:12,p2a:13,p9a:14,u9a:15,ogb:16};var MIa={mcb:0,dcb:1,icb:2,hcb:3,ecb:4,fcb:5,Zbb:6,lcb:7,kcb:8,ccb:9,bcb:10,gcb:11,jcb:12,acb:13};var $Ia={JZa:0,xZa:1,BZa:2,zZa:3,IZa:4,AZa:5,EZa:6,DZa:7,CZa:8,yZa:9,FZa:10,GZa:11,HZa:12};var Gib={U_a:0,T_a:1,S_a:2};var Hib={X_a:0,V_a:1,W_a:2};var oJa={W1a:0,S1a:1,M1a:2,X1a:3,I1a:4,H1a:5,N1a:6,J1a:7,G1a:8,Q1a:9,O1a:10,P1a:11,R1a:12,L1a:13,K1a:14,F1a:15,V1a:16,U1a:17,T1a:18};var nJa={d2a:0,c2a:1,b2a:2,a2a:3,Y1a:4,Z1a:5};var dJa={u3a:0,s3a:1,t3a:3,p3a:4,q3a:2,r3a:5};var hJa={z3a:0,v3a:1,w3a:2,y3a:3,x3a:4,A3a:5};var Iib={H3a:0,I3a:1};var QKa={O3a:0,M3a:1,N3a:2,P3a:3};var Jib={i7a:0,g7a:1,h7a:2};var Kib={w$a:0,s$a:1,t$a:2,u$a:3,v$a:4};var KJa={u7a:0,s7a:1,t7a:2};var mKa={h8a:0,e8a:1,f8a:2,g8a:3};var AJa={Bma:0,Ama:1,yma:2,zma:3};var DJa={qna:0,jna:1,pna:2,mna:3,fna:4,gna:5,ena:6,lna:7,ona:8,ina:9,rna:10,sna:11,hna:12,nna:13,kna:14};var cKa={zoa:0,toa:1,woa:2,xoa:3,voa:4,yoa:5,Aoa:6,uoa:7};var uJa={hta:0,gta:1,ita:2};var RIa={Qfb:0,Ira:1,Jra:2,Hra:3,Kra:4};var QIa={Rfb:0,K_a:1,pZa:2};var fKa={tCa:0,pCa:1,lCa:2,sCa:3,nCa:4,qCa:5,oCa:6,mCa:7,rCa:8};var hKa={jGa:0,iGa:1,hGa:2};var bKa={sPa:0,rPa:1,qPa:2};var eKa={hUa:0,gUa:1,fUa:2};var aKa={V2a:0,T2a:1,U2a:2};var yJa={cab:0,bab:1,aab:2};var Lib={OOa:0,KOa:1,LOa:2,MOa:3,NOa:4,POa:5};var Mib={SZa:0,PZa:1,NZa:2,KZa:3,OZa:4,QZa:5,LZa:6,MZa:7,RZa:8,TZa:9};var Nib={zsa:0,vsa:5,ysa:4,wsa:2,xsa:3};var Oib={zbb:0,Zab:1,Dbb:2,Ebb:3,Bbb:4,Abb:16,Cbb:47,Uab:17,abb:33,Sab:35,Kab:36,Wab:34,xbb:38,Yab:45,fbb:8,Qab:39,Nab:40,Gab:41,Jab:42,Mab:43,Fab:46,Iab:44,Xab:5,ebb:6,wbb:7,vbb:9,Hab:10,ubb:11,Lab:12,tbb:13,Rab:14,dbb:15,cbb:18,bbb:19,Pab:20,Vab:21,Oab:22,qbb:23,sbb:24,jbb:25,rbb:26,gbb:27,mbb:28,hbb:29,lbb:30,nbb:31,kbb:32,obb:37,pbb:48};var Pib={Hbb:0,Gbb:1,Ibb:2};var PKa={Tjb:0,Ejb:1,Ljb:2,Kjb:3,Djb:4,Ujb:5,Rjb:6,Fjb:7,Gjb:8,Jjb:9,Ijb:12,Ajb:10,Sjb:11,Njb:13,Ojb:14,Vjb:15,Mjb:16,Pjb:17,Bjb:18,Qjb:19,Cjb:20,Wjb:21,Hjb:22};var JKa={gHa:0,eHa:1,fHa:2,dHa:3};g.w(coa,T);g.w(YB,T);YB.prototype.oe=function(){return Oj(this,Gj(this,LF,1))};
YB.prototype.setVideoId=
YB.prototype.getPlaylistId=
var LF=[1,2];g.w(doa,T);doa.yb=[3];var IT=new g.Pw("changeKeyedMarkersVisibilityCommand");var Qib=new g.Pw("changeMarkersVisibilityCommand");var eSa=new g.Pw("loadMarkersCommand");var aZa=new g.Pw("productListItemRenderer");var Rib=new g.Pw("shoppingOverlayRenderer");var ySa=new g.Pw("musicEmbeddedPlayerOverlayVideoDetailsRenderer");var Sib=new g.Pw("adFeedbackEndpoint");var Tib=new g.Pw("menuEndpoint");var qYa=new g.Pw("phoneDialerEndpoint");var oYa=new g.Pw("sendSmsEndpoint");var wSa=new g.Pw("copyTextEndpoint");var Uib=new g.Pw("webPlayerShareEntityServiceEndpoint");g.XG=new g.Pw("urlEndpoint");g.GT=new g.Pw("watchEndpoint");var Vib=new g.Pw("watchPlaylistEndpoint");var sKa={wpa:0,upa:1,tpa:2,rpa:3,spa:4};var HJa={MUa:0,KUa:1,LUa:2,JUa:3};var Wib={dVa:0,cVa:1,aVa:2,bVa:3};var Xib={hVa:0,eVa:1,fVa:2,gVa:3,iVa:4};var Yib={aWa:0,UVa:1,bWa:2,WVa:3,NVa:4,EVa:37,pVa:5,mVa:36,rVa:38,zVa:39,AVa:40,vVa:41,ZVa:42,sVa:27,JVa:31,LVa:6,OVa:7,PVa:8,QVa:9,RVa:10,SVa:11,VVa:29,tVa:30,KVa:32,DVa:12,CVa:13,oVa:14,IVa:15,jVa:16,lVa:35,qVa:43,uVa:28,GVa:17,FVa:18,HVa:19,YVa:20,yVa:25,nVa:33,cWa:21,BVa:22,xVa:26,dWa:46,wVa:34,MVa:44,XVa:45,TVa:23,kVa:24};var qKa={uWa:0,sWa:1,rWa:2,tWa:3};var CP={t9a:0,q9a:1,s9a:2,r9a:3};var PIa={Xbb:0,Lbb:1,Kbb:2,Qbb:3,Wbb:4,Mbb:5,Tbb:6,Rbb:7,Sbb:8,Nbb:9,Ubb:10,Obb:11,Vbb:12,Pbb:13};var EJa={TWa:0,ZUa:1,QUa:2,WUa:3,XUa:4,TUa:5,UUa:6,VUa:7};var Zib={D3a:0,C3a:1};var $ib={z$a:0,y$a:1,x$a:2,A$a:3};var ajb={D$a:0,C$a:1,B$a:2};var bjb={N$a:0,H$a:1,I$a:2,J$a:5,M$a:7,O$a:8,K$a:9,L$a:10};var cjb={G$a:0,F$a:1,E$a:2};var qVa=new g.Pw("compositeVideoOverlayRenderer");var djb=new g.Pw("miniplayerRenderer");var MRa=new g.Pw("playerMutedAutoplayOverlayRenderer"),NRa=new g.Pw("playerMutedAutoplayEndScreenRenderer");var VQa=new g.Pw("unserializedPlayerResponse"),ORa=new g.Pw("unserializedPlayerResponse");var oKa={pWa:0,mWa:1,kWa:2,jWa:3,iWa:4,hWa:5,lWa:6,oWa:7,gWa:8,nWa:9,fWa:10,eWa:11};var ejb=new g.Pw("playlistEditEndpoint");var X2;g.mN=new g.Pw("buttonRenderer");X2=new g.Pw("toggleButtonRenderer");var GJa={Tfb:0,HLa:4,X2a:1,aFa:2,doa:3,ILa:5,a3a:6,bFa:7,cFa:8,dFa:9};var HDa=new g.Pw("counterfactualRenderer");var fjb=new g.Pw("resolveUrlCommandMetadata");var gjb=new g.Pw("modifyChannelNotificationPreferenceEndpoint");var Eya=new g.Pw("pingingEndpoint");var hjb=new g.Pw("unsubscribeEndpoint");var wHa={Wfb:0,pTa:1,lTa:2,kTa:3,LSa:71,KSa:4,nTa:5,qTa:6,oTa:16,mTa:69,MSa:70,HSa:56,ISa:64,JSa:65,YSa:7,OSa:8,TSa:9,PSa:10,SSa:11,RSa:12,QSa:13,VSa:43,bTa:44,cTa:45,dTa:46,eTa:47,fTa:48,gTa:49,hTa:50,iTa:51,jTa:52,ZSa:53,aTa:54,XSa:63,NSa:14,WSa:15,USa:68,Nib:17,Wib:18,eib:19,Mib:20,zib:21,Oib:22,Whb:23,Hib:24,Cib:25,jib:26,Uhb:27,qib:28,Kib:29,Rhb:30,Qhb:31,Shb:32,Xhb:33,Iib:34,Gib:35,Aib:36,Eib:37,Pib:38,mib:39,Vib:40,sib:41,hib:42,Qib:55,Dib:66,pjb:67,wib:57,Jib:58,Yhb:59,Thb:60,nib:61,Bib:62};var ijb={q4a:0,s4a:1,h4a:2,Z3a:3,n4a:4,o4a:5,t4a:6,Q3a:7,R3a:8,X3a:9,j4a:10,a4a:11,e4a:12,c4a:13,d4a:14,f4a:15,g4a:19,T3a:16,m4a:17,k4a:18,V3a:20,b4a:21,S3a:22,r4a:23,Y3a:24,U3a:25,p4a:26,W3a:27,l4a:28,i4a:29};g.VT=new g.Pw("subscribeButtonRenderer");var jjb=new g.Pw("subscribeEndpoint");var BJa={y7a:0,w7a:1,x7a:2};var eVa=new g.Pw("buttonViewModel");var qLa={K4a:0,L4a:1,J4a:2,F4a:3,I4a:4,G4a:5,E4a:6,H4a:7};var IDa=new g.Pw("qrCodeRenderer");var XIa={isa:0,gsa:1,dsa:2,esa:3,fsa:4,hsa:5};var hQa={XOa:"LIVING_ROOM_APP_MODE_UNSPECIFIED",UOa:"LIVING_ROOM_APP_MODE_MAIN",TOa:"LIVING_ROOM_APP_MODE_KIDS",VOa:"LIVING_ROOM_APP_MODE_MUSIC",WOa:"LIVING_ROOM_APP_MODE_UNPLUGGED",SOa:"LIVING_ROOM_APP_MODE_GAMING"};var WRa=new g.Pw("autoplaySwitchButtonRenderer");var cRa,j_a,dRa,v_a;cRa=new g.Pw("decoratedPlayerBarRenderer");j_a=new g.Pw("chapteredPlayerBarRenderer");dRa=new g.Pw("multiMarkersPlayerBarRenderer");v_a=new g.Pw("chapterRenderer");g.n_a=new g.Pw("markerRenderer");var aSa=new g.Pw("desktopOverlayConfigRenderer");var ZRa=new g.Pw("gatedActionsOverlayViewModel");var r_a=new g.Pw("heatMarkerRenderer");var q_a=new g.Pw("heatmapRenderer");var TUa=new g.Pw("culturalMomentOverlayRenderer"),dSa=new g.Pw("watchToWatchTransitionRenderer");var zSa=new g.Pw("playlistPanelRenderer");var DVa=new g.Pw("speedmasterEduViewModel");var kjb=new g.Pw("suggestedActionTimeRangeTrigger"),ljb=new g.Pw("suggestedActionsRenderer"),mjb=new g.Pw("suggestedActionRenderer");var s_a=new g.Pw("timedMarkerDecorationRenderer");var njb={ojb:0,kjb:1,ljb:2,njb:3,mjb:4,jjb:5,ijb:6,ejb:7,gjb:8,hjb:9,fjb:10,ajb:11,Yib:12,Xib:13,djb:14,Zib:15,bjb:16,cjb:17};var vP={u4:0,USER:74,yna:459,TRACK:344,zna:493,Mna:419,lIa:494,qpa:337,MINUTE:237,HOUR:236,DAY:3,WEEK:78,qjb:248,MONTH:79,QUARTER:246,YEAR:247,BUa:382,AUa:383,zUa:384,eab:235,VIDEO:4,tjb:186,Rsa:126,r$a:127,Zsa:117,l1a:125,S2a:151,Ava:515,Ksa:6,GEa:132,LEa:154,JEa:222,KEa:155,HEa:221,IEa:156,q$a:209,p$a:210,Ahb:7,D1a:124,v7a:96,mUa:97,Lhb:93,rNa:574,Mhb:275,qoa:110,poa:120,R_a:121,yGa:72,thb:351,u4a:495,rhb:377,uhb:378,vCa:496,wCa:497,v4a:498,roa:381,shb:386,Nhb:387,dna:410,mHa:437,Swa:338,noa:380,
bea:352,uZa:113,vZa:114,Aab:82,Bab:112,yva:354,vab:21,cna:556,oZa:567,r2a:566,Fbb:568,Rva:523,Tva:375,Sva:514,gia:302,eta:136,zGa:85,Bia:22,wjb:23,Eab:252,Dab:253,xYa:562,dta:563,loa:254,dia:165,o$a:304,aIa:421,L2a:463,PLAYLIST:63,yhb:27,xhb:28,zhb:29,g$a:30,j$a:31,i$a:324,k$a:32,Boa:398,m$a:399,n$a:400,oUa:411,nUa:413,pUa:414,rUa:415,w1a:39,x1a:143,B1a:144,s1a:40,t1a:145,v1a:146,lhb:504,A1a:325,h_a:262,j_a:263,i_a:264,l_a:355,m_a:249,o_a:250,n_a:251,msa:46,E3a:49,G3a:50,Wha:62,uab:561,SRa:105,fIa:242,
n9a:397,a0a:83,tZa:135,Zma:87,bna:153,ana:187,Uma:89,Tma:88,Vma:139,Xma:91,Wma:104,Yma:137,Ora:99,hgb:100,kUa:326,rva:148,qva:149,e$a:150,f$a:395,Qna:166,Wna:199,Rna:534,Vna:167,Sna:168,aoa:169,boa:170,Tna:171,Una:172,Xna:179,Yna:180,coa:512,Zna:513,xgb:200,igb:476,ygb:213,Nna:191,k_a:192,e_a:305,f_a:306,q_a:329,a8a:327,b8a:328,a_a:195,b_a:197,wZa:301,VZa:223,WZa:224,YHa:227,pHa:396,mIa:356,gIa:490,nIa:394,Bpa:230,eoa:297,Tgb:298,XHa:342,Bva:346,dCa:245,Cab:261,CGa:265,HGa:266,DGa:267,AGa:268,BGa:269,
GGa:270,EGa:271,FGa:272,FOa:303,sNa:391,tNa:503,vNa:277,QOa:499,ROa:500,DOa:501,HOa:278,uNa:489,GOa:598,Bwa:332,Dwa:333,zwa:334,Cwa:335,Awa:336,Nra:340,RHa:341,khb:349,jhb:420,z1a:281,u1a:282,F3a:286,h$a:288,y1a:291,C1a:292,qNa:295,l$a:296,pNa:299,iia:417,qIa:308,xjb:309,yjb:310,zjb:311,s_a:590,t_a:591,ija:350,Agb:418,SFa:424,jgb:425,CUa:429,lUa:430,kIa:426,j9a:460,jUa:427,u2a:428,v2a:542,s2a:461,c8a:464,YRa:431,VRa:432,WRa:589,dSa:433,URa:434,aSa:435,bSa:436,XRa:438,cSa:439,eSa:453,ZRa:454,TRa:472,
Pfb:557,t2a:558,moa:559,ooa:560,joa:565,j0a:545,e0a:546,u0a:547,x0a:548,w0a:549,v0a:550,k0a:551,t0a:552,b0a:554,g0a:577,f0a:587,i0a:579,d0a:580,koa:583,z0a:584,A0a:586,m0a:516,n0a:544,o0a:553,p0a:570,r0a:571,l0a:572,s0a:573,q0a:588,y0a:585,DYa:592,BYa:593,CYa:594,AYa:595,Jhb:604,Hhb:605,Ihb:606,Khb:607,Ghb:608,mab:520,c0a:521,h0a:522,hIa:543,J_a:440,L_a:441,P_a:442,H_a:448,I_a:449,M_a:450,Q_a:451,O_a:491,POST:445,G_a:446,N_a:447,D0a:456,DUa:483,Aia:569,Esa:576,M0a:529,Fsa:581,wab:555,C0a:458,J3a:480,
K3a:502,L3a:482,SHa:452,x4a:465,y4a:466,Eua:467,B0a:468,Ewa:469,csa:470,bsa:471,QHa:475,uta:477,UHa:478,QEa:479,r_a:484,p_a:485,d_a:486,c_a:487,oia:488,ewa:492,Gwa:505,Qva:506,Bhb:507,yJa:508,OEa:509,REa:510,TEa:511,Lgb:524,vhb:530,c3a:531,Fwa:532,C4a:533,b3a:575,VHa:535,pIa:536,bIa:537,jIa:538,WHa:539,eIa:540,ZHa:541,uPa:578,Zha:582,v_a:596,bta:597,wNa:599,XNa:600,YNa:601,IOa:602,JOa:603,PODCAST:609,ata:610};var MMa=new g.Pw("cipher");var WQa=new g.Pw("playerVars");var PRa=new g.Pw("playerVars");var Y2=g.Sa.window,ojb,pjb,ZB=(null==Y2?void 0:null==(ojb=Y2.yt)?void 0:ojb.config_)||(null==Y2?void 0:null==(pjb=Y2.ytcfg)?void 0:pjb.data_)||{};g.Ua("yt.config_",ZB);var eC=[];var qoa=/^[\w.]*$/,moa={q:!0,search_query:!0},loa=String(iC);var roa=new 
g.Ua("yt.ads_.signals_.getAdSignalsString",;g.nb();var uoa="XMLHttpRequest"in g.Sa?null;var qjb="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");g.oa(qjb);var woa={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},yoa="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(g.oa(qjb)),Eoa=!1,Mcb=xC;g.w(zC,yb);CC.prototype.then=
CC.prototype.getValue=function(){return this.B};
CC.prototype.$goog_Thenable=!0;var FC=!1;var mE=OC||PC;var Zoa=/^([0-9\.]+):([0-9\.]+)$/;g.w(fpa,yb);fpa.prototype.name="BiscottiError";g.w(ZC,yb);ZC.prototype.name="BiscottiMissingError";var hpa={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},$C=null;var Msa=na(["data-"]),ppa={};var rjb=0,qpa=g.Xc?"webkit":vs?"moz":g.gf?"ms":g.tS?"o":"",sjb=g.Va("ytDomDomGetNextId")||
g.Ua("ytDomDomGetNextId",sjb);var vpa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};eD.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
eD.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
eD.prototype.stopImmediatePropagation=var fD=g.Sa.ytEventsEventsListeners||{};g.Ua("ytEventsEventsListeners",fD);var ypa=g.Sa.ytEventsEventsCounter||{count:0};g.Ua("ytEventsEventsCounter",ypa);var Dpa=Sd(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a}),zpa=Sd(;var Z2;Z2=window;g.YD=Z2.ytcsi&&Z2.ytcsi.now?Z2.ytcsi.now:Z2.performance&&Z2.performance.timing&&Z2.performance.now&&Z2.performance.timing.navigationStart?g.ob(jD,g.I);jD.prototype.X=
jD.prototype.Ns=
jD.prototype.ma=
jD.prototype.xa=g.w(kD,g.I);kD.prototype.T=
kD.prototype.Qc=
kD.prototype.xa=nD.prototype.clone=var XSa=["att/get"],qWa=["embedded_player"],tjb=["share/get_web_player_share_panel"],ujb=["feedback"],vjb=["notification/modify_channel_preference"],Mab=["player"],wjb=["browse/edit_playlist"],xjb=["subscription/subscribe"],yjb=["subscription/unsubscribe"],Qab=["next","unplugged/watch_next"];var Fpa;g.oD=Sd(function(){var a=new Tv;return a.isAvailable()?new g.Pv(a):null});
Fpa=Sd(;tD.prototype.bD=var AE={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var wD=g.Va("ytglobal.prefsUserPrefsPrefs_")||{};g.Ua("ytglobal.prefsUserPrefsPrefs_",wD);var Mpa;g.k=Lpa.prototype;g.k.get=
g.k.set=
g.k.remove=
g.k.save=
g.k.clear=function(){g.dba(wD)};
g.k.dump=
g.k.parse=var Spa={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},yra={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},zra={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Upa={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};g.w(g.xD,Error);AD.prototype.Ri=
AD.prototype.d5=g.Va("yt.scheduler.instance.timerIdMap_");g.w(DD,AD);DD.prototype.Lj=
DD.prototype.start=function(){var a=g.Va("yt.scheduler.instance.start");a&&a()};
DD.prototype.pause=
g.Tu=g.ED();HD.prototype.set=
HD.prototype.get=
HD.prototype.remove=var Xpa=);var KD=[],ID,LD=!1;var $2={},bqa=($2.AUTH_INVALID="No user identifier specified.",$2.EXPLICIT_ABORT="Transaction was explicitly aborted.",$2.IDB_NOT_SUPPORTED="IndexedDB is not supported.",$2.MISSING_INDEX="Index not created.",$2.MISSING_OBJECT_STORES="Object stores not created.",$2.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",$2.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",$2.UNKNOWN_ABORT=
"Transaction was aborted for unknown reasons.",$2.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",$2.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",$2.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",$2.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",$2),a3={},cqa=(a3.AUTH_INVALID="ERROR",a3.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",a3.EXPLICIT_ABORT="IGNORED",
a3.IDB_NOT_SUPPORTED="ERROR",a3.MISSING_INDEX="WARNING",a3.MISSING_OBJECT_STORES="ERROR",a3.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",a3.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",a3.QUOTA_EXCEEDED="WARNING",a3.QUOTA_MAYBE_EXCEEDED="WARNING",a3.UNKNOWN_ABORT="WARNING",a3.INCOMPATIBLE_DB_VERSION="WARNING",a3),b3={},dqa=(b3.AUTH_INVALID=!1,b3.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,b3.EXPLICIT_ABORT=!1,b3.IDB_NOT_SUPPORTED=!1,b3.MISSING_INDEX=!1,b3.MISSING_OBJECT_STORES=!1,b3.DB_DELETED_BY_MISSING_OBJECT_STORES=
!1,b3.DB_REOPENED_BY_MISSING_OBJECT_STORES=!1,b3.QUOTA_EXCEEDED=!1,b3.QUOTA_MAYBE_EXCEEDED=!0,b3.UNKNOWN_ABORT=!0,b3.INCOMPATIBLE_DB_VERSION=!1,b3);g.w(g.QD,g.xD);g.w(eqa,g.QD);g.w(RD,Error);var fqa=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];g.VD.all=
g.VD.resolve=
g.VD.reject=
g.VD.prototype.then=
g.VD.prototype.catch=function(a){return this.then(void 0,a)};g.k=pqa.prototype;g.k.advance=function(a){this.cursor.advance(a);return XD(this.request)};
g.k.continue=function(a){this.cursor.continue(a);return XD(this.request)};
g.k.continuePrimaryKey=
g.k.getKey=function(){return this.cursor.key};
g.k.UH=function(){return this.cursor.primaryKey};g.k=qqa.prototype;g.k.add=
g.k.clear=
g.k.close=
g.k.count=function(a,b){return g.aE(this,[a],{mode:"readonly",Ub:!0},function(c){return c.objectStore(a).count(b)})};
g.k.delete=function(a,b){return g.aE(this,[a],{mode:"readwrite",Ub:!0},function(c){return c.objectStore(a).delete(b)})};
g.k.get=
g.k.objectStoreNames=function(){return Array.from(this.j.objectStoreNames)};
g.k.getName=function(){return this.j.name};
g.k=rqa.prototype;g.k.add=
g.k.autoIncrement=function(){return this.j.autoIncrement};
g.k.clear=function(){return g.WD(this.j.clear()).then(function(){})};
g.k.count=function(a){return g.WD(this.j.count(a))};
g.k.delete=
g.k.get=function(a){return g.WD(this.j.get(a))};
g.k.index=
g.k.getName=function(){return this.j.name};
g.k.keyPath=function(){return this.j.keyPath};
dE.prototype.abort=
dE.prototype.objectStore=
g.k=Bqa.prototype;g.k.count=function(a){return g.WD(this.j.count(a))};
g.k.delete=
g.k.get=function(a){return g.WD(this.j.get(a))};
g.k.getKey=function(a){return g.WD(this.j.getKey(a))};
g.k.keyPath=function(){return this.j.keyPath};
g.k.unique=function(){return this.j.unique};
g.k=Cqa.prototype;g.k.advance=function(a){this.cursor.advance(a);return gE(this.request)};
g.k.continue=
g.k.delete=
g.k.getKey=function(){return this.cursor.key};
g.k.UH=function(){return this.cursor.primaryKey};
g.k.getValue=function(){return this.cursor.value};
g.k.update=jE.prototype.B=
jE.prototype.delete=
jE.prototype.open=var Gqa=new jE("YtIdbMeta",{Xq:{databases:{Vm:1}},upgrade:);var Mqa,Kqa=new function(){}(new function(){});new g.fo;g.w(qE,jE);qE.prototype.B=
qE.prototype.delete=var zjb={},Xqa=g.rE("ytGcfConfig",{Xq:(zjb.coldConfigStore={Vm:1},zjb.hotConfigStore={Vm:1},zjb),shared:!1,upgrade:
version:1});g.w(cra,g.I);cra.prototype.xa=xE.prototype.xr=var Ajb="undefined"!==typeof TextEncoder?new TextEncoder:null,Tra=Ajb?function(a){return Ajb.encode(a)}:BE.prototype.wk=function(){return{version:this.version,args:this.args}};CE.prototype.toString=function(){return this.topic};var Bjb=g.Va("ytPubsub2Pubsub2Instance")||new g.Lv;g.Lv.prototype.subscribe=g.Lv.prototype.subscribe;g.Lv.prototype.unsubscribeByKey=g.Lv.prototype.Eh;g.Lv.prototype.publish=g.Lv.prototype.oa;g.Lv.prototype.clear=g.Lv.prototype.clear;g.Ua("ytPubsub2Pubsub2Instance",Bjb);var EE=g.Va("ytPubsub2Pubsub2SubscribedKeys")||{};g.Ua("ytPubsub2Pubsub2SubscribedKeys",EE);var FE=g.Va("ytPubsub2Pubsub2TopicToKeys")||{};g.Ua("ytPubsub2Pubsub2TopicToKeys",FE);var Cra=g.Va("ytPubsub2Pubsub2IsAsync")||{};
g.Ua("ytPubsub2Pubsub2IsAsync",Cra);g.Ua("ytPubsub2Pubsub2SkipSubKey",null);var Jra=void 0,Hra=void 0;var Pra=g.dC("max_body_size_to_compress",5E5),Qra=g.dC("min_body_size_to_compress",500),IE=!0,LE=0,KE=0,Ura=g.dC("compression_performance_threshold_lr",250),Vra=g.dC("slow_compressions_before_abandon_count",4),Lra=!1,HE=new Map,Sra=1,Rra=!0;g.k=NE.prototype;g.k.writeThenSend=
g.k.sendThenWrite=
g.k.sendAndWrite=
g.k.mB=
g.k.DM=
g.k.FD=
g.k.bK=
g.k.fK=var PE;var dua={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var Cjb={},ksa=g.rE("ServiceWorkerLogsDatabase",{Xq:(Cjb.SWHealthLog={Vm:1},Cjb),shared:!0,upgrade:
version:1});var rsa={},qsa=0;SE.prototype.requestComplete=
SE.prototype.isEndpointCFR=
SE.prototype.removeParams=
SE.prototype.removeParams=SE.prototype.removeParams;SE.prototype.isEndpointCFR=SE.prototype.isEndpointCFR;SE.prototype.requestComplete=SE.prototype.requestComplete;SE.getInstance=TE;var tsa;g.w(VE,g.Kd);g.k=VE.prototype;g.k.Oh=function(){return this.j.Oh()};
g.k.nw=function(a){this.j.j=a};
g.k.P6=
g.k.T5=function(){this.B=!0};
g.k.Qa=function(a,b){return this.j.Qa(a,b)};
g.k.kK=
VE.prototype.sendNetworkCheckRequest=VE.prototype.kK;VE.prototype.listen=VE.prototype.Qa;VE.prototype.enableErrorFlushing=VE.prototype.T5;VE.prototype.getWindowStatus=VE.prototype.P6;VE.prototype.networkStatusHint=VE.prototype.nw;VE.prototype.isNetworkAvailable=VE.prototype.Oh;VE.getInstance=vsa;g.w(g.WE,g.Kd);g.WE.prototype.Oh=
g.WE.prototype.nw=
g.WE.prototype.kK=var xsa;g.w(XE,NE);XE.prototype.writeThenSend=function(a,b){b||(b={});g.zD()||(this.j=!1);NE.prototype.writeThenSend.call(this,a,b)};
XE.prototype.sendThenWrite=
XE.prototype.sendAndWrite=
XE.prototype.awaitInitialization=function(){return this.C.promise};var Bsa=g.Sa.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};g.Ua("ytNetworklessLoggingInitializationOptions",Bsa);g.ZE.prototype.isReady=var Djb,bF,dF;Djb=g.Sa.ytPubsubPubsubInstance||new g.Lv;bF=g.Sa.ytPubsubPubsubSubscribedKeys||{};dF=g.Sa.ytPubsubPubsubTopicToKeys||{};g.cF=g.Sa.ytPubsubPubsubIsSynchronous||{};g.Lv.prototype.subscribe=g.Lv.prototype.subscribe;g.Lv.prototype.unsubscribeByKey=g.Lv.prototype.Eh;g.Lv.prototype.publish=g.Lv.prototype.oa;g.Lv.prototype.clear=g.Lv.prototype.clear;g.Ua("ytPubsubPubsubInstance",Djb);g.Ua("ytPubsubPubsubTopicToKeys",dF);g.Ua("ytPubsubPubsubIsSynchronous",g.cF);
g.Ua("ytPubsubPubsubSubscribedKeys",bF);var Fsa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Gsa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Ksa={};g.w(jF,g.I);jF.prototype.append=
g.w(kF,jF);kF.prototype.Lb=function(){return this.j};g.w(Rsa,g.I);var lF=Date.now().toString();var Wsa={};var tF=Symbol("injectionDeps");rF.prototype.toString=function(){return"InjectionToken("+this.name+")"};
Xsa.prototype.resolve=var $sa;var wF=window;var xF=g.cC("web_enable_lifecycle_monitoring")&&0!==ata(),jta=g.cC("web_enable_lifecycle_monitoring");eta.prototype.cancel=g.k=yF.prototype;g.k.install=function(a){this.plugins.push(a);return this};
g.k.uninstall=
g.k.transition=
g.k.wba=
g.k.vba=
g.k.o_=
g.fa.Object.defineProperties(yF.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});var lta;g.w(AF,yF);AF.prototype.G=
AF.prototype.K=var Zta=[];g.Ua("yt.logging.transport.getScrapedGelPayloads",function(){return Zta});BF.prototype.storePayload=
BF.prototype.smartExtractMatchingEntries=
BF.prototype.extractMatchingEntries=
BF.prototype.getSequenceCount=
BF.prototype.getSequenceCount=BF.prototype.getSequenceCount;BF.prototype.extractMatchingEntries=BF.prototype.extractMatchingEntries;BF.prototype.smartExtractMatchingEntries=BF.prototype.smartExtractMatchingEntries;BF.prototype.storePayload=BF.prototype.storePayload;var Mta=g.dC("initial_gel_batch_timeout",2E3),Lta=g.dC("gel_queue_timeout_max_ms",6E4),Yta=Math.pow(2,16)-1,Nta=g.dC("gel_min_batch_size",5),KF=void 0,cua=new DF,bua=new DF,Kta=new DF,Jta=new DF,Cta,OF=!0,Xta=1,FF=new Map,NF=g.Sa.ytLoggingTransportTokensToCttTargetIds_||{};g.Ua("ytLoggingTransportTokensToCttTargetIds_",NF);var MF=g.Sa.ytLoggingTransportTokensToJspbCttTargetIds_||{};g.Ua("ytLoggingTransportTokensToJspbCttTargetIds_",MF);var IF={},pta=!1;var PF=g.Sa.ytLoggingGelSequenceIdObj_||{};g.Ua("ytLoggingGelSequenceIdObj_",PF);var hua,RF,iua,kua=g.ZE,gua=!1,nua=[];var pua=g.Sa.ytLoggingGelSequenceIdObj_||{};g.Ua("ytLoggingGelSequenceIdObj_",pua);var c3=g.Sa.ytLoggingDocDocumentNonce_;c3||(c3=g.nF(16),g.Ua("ytLoggingDocDocumentNonce_",c3));var Iua=c3;var Fua={f1:0,Lra:1,Ysa:2,PL:3,sva:4,Dhb:5,FTa:6,B3a:7,o1a:8,P2a:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};var xua=1;g.k=VF.prototype;g.k.getAsJson=
g.k.getAsJspb=
g.k.toString=
g.k.isClientVe=
g.k.getLoggingDirectives=function(){return this.j.loggingDirectives};g.Ua("yt_logging_screen.getRootVeType",Cua);g.Ua("yt_logging_screen.getCurrentCsn",g.YF);g.Ua("yt_logging_screen.getCttAuthInfo",eG);g.Ua("yt_logging_screen.setCurrentScreen",Jua);var Nua="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");var $ua=[{oP:function(a){return"Cannot read property '"+a.key+"'"},
EJ:{Error:[{Cj:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{Cj:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{Cj:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{Cj:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{Cj:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{Cj:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{Cj:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{oP:
EJ:{TypeError:[{Cj:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{Cj:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{Cj:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{Cj:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{Cj:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},
{Cj:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{oP:
EJ:{ReferenceError:[{Cj:/(.*) is not defined/,groups:["key"]},{Cj:/Can't find variable: (.*)/,groups:["key"]}]}}];var Sua={Wq:[],gs:[{callback:Oua,weight:500}]};var Qua;var iG=new g.Lv;var ava=new Set,Yua=0,dva=0,cva=0,Zua=[],fva=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var hva=new g.Pw("parallelCommand");var kva=new g.Pw("performOnceCommand");var jva=new g.Pw("serialCommand");var lG=void 0;g.w(nva,BE);var qva=new CE("screen-created",nva),tG=[],ova=Bva,Cva=0,pG=new Map,rva=new Map,sva=new Map;g.ob(g.AG,g.I);g.AG.prototype.subscribe=
g.AG.prototype.unsubscribe=
g.AG.prototype.Eh=
g.AG.prototype.oa=var V2a=16/9,Ejb=[.25,.5,.75,1,1.25,1.5,1.75,2],Fjb=Ejb.concat([3,4,5,6,7,8,9,10,15]);var Eva=1;g.w(g.EG,g.I);g.k=g.EG.prototype;
g.k.createElement=
g.k.Ha=function(a){return this.Kb[a]};
g.k.Ja=
g.k.detach=function(){g.vf(this.element)};
g.k.update=
g.k.updateValue=
g.k.xa=g.w(g.V,g.EG);g.k=g.V.prototype;g.k.ge=
g.k.show=
g.k.hide=
g.k.Jc=function(a){this.Z=a};
g.k.Qa=
g.k.T=
g.k.Qc=
g.k.focus=
g.k.xa=g.w(g.IG,g.V);g.IG.prototype.subscribe=function(a,b,c){return this.Ta.subscribe(a,b,c)};
g.IG.prototype.unsubscribe=function(a,b,c){return this.Ta.unsubscribe(a,b,c)};
g.IG.prototype.Eh=function(a){return this.Ta.Eh(a)};
g.IG.prototype.oa=var Gjb=new WeakSet;g.w(JG,g.IG);g.k=JG.prototype;g.k.bind=
g.k.init=
g.k.clear=function(){};
g.k.hide=
g.k.show=
g.k.onClick=
g.k.LZ=function(a){return a};
g.k.e3=
g.k.d3=
g.k.b3=
g.k.pF=
g.k.createServerVe=
g.k.logVisibility=
g.k.xa=g.w(TG,JG);
TG.prototype.init=
TG.prototype.clear=function(){this.hide()};
TG.prototype.onClick=g.w(UG,g.I);UG.prototype.xa=
UG.prototype.register=
var VG=null;g.w(YG,JG);
YG.prototype.init=
YG.prototype.hide=function(){this.button&&this.button.hide();this.B&&this.B.hide();JG.prototype.hide.call(this)};
YG.prototype.show=function(){this.button&&this.button.show();JG.prototype.show.call(this)};g.w($G,JG);
$G.prototype.init=
$G.prototype.clear=function(){this.hide()};g.w(aH,JG);g.k=aH.prototype;g.k.hide=
g.k.show=
g.k.init=
g.k.clear=function(){g.mD(this.j);this.hide()};
g.k.LP=function(){this.hide()};
g.k.AL=
g.k.MP=g.w(bH,JG);g.k=bH.prototype;
g.k.init=
g.k.onClick=
g.k.uT=
g.k.clear=function(){this.hide()};
g.k.toggleButton=
g.k.isToggled=function(){return this.j.checked};g.w(cH,kD);cH.prototype.K=g.w(owa,JG);g.k=owa.prototype;g.k.init=
g.k.clear=
g.k.hide=
g.k.show=
g.k.FY=
g.k.qaa=function(){this.hide()};
twa.prototype.Lb=function(){return this.j.element};
twa.prototype.isChecked=function(){return this.C.checked};g.w(dH,aH);dH.prototype.LP=function(a){aH.prototype.LP.call(this,a);this.api.onAdUxClicked("ad-mute-confirm-dialog-close-button")};
dH.prototype.AL=
dH.prototype.MP=g.w(uwa,JG);g.k=uwa.prototype;
g.k.init=
g.k.clear=
g.k.hide=
g.k.show=
g.k.vT=
g.k.R9=g.w(eH,YG);eH.prototype.init=
eH.prototype.hide=
eH.prototype.show=function(){this.button&&this.button.show();YG.prototype.show.call(this)};
eH.prototype.clear=function(){this.hide()};g.w(fH,JG);
fH.prototype.init=
fH.prototype.isTemplated=
fH.prototype.clear=function(){this.hide()};var Owa={seekableStart:0,seekableEnd:1,current:0};g.w(gH,JG);gH.prototype.clear=function(){this.dispose()};g.w(g.jH,g.I);g.k=g.jH.prototype;g.k.show=
g.k.hide=
g.k.sG=
g.k.stop=
g.k.xa=g.w(lH,gH);g.k=lH.prototype;
g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=
g.k.show=
g.k.Mp=function(){this.hide()};
g.k.Tn=g.w(Fwa,gH);g.k=Fwa.prototype;
g.k.init=
g.k.onClick=
g.k.Tn=
g.k.Mp=function(){this.clear()};
g.k.clear=function(){this.hide();this.api.removeEventListener("playerUnderlayVisibilityChange",this.wT.bind(this))};
g.k.show=function(){this.B&&this.B.show();gH.prototype.show.call(this)};
g.k.hide=
g.k.wT=g.w(Gwa,JG);g.k=Gwa.prototype;
g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=function(){this.C.hide();this.B.hide();JG.prototype.hide.call(this)};
g.k.show=
g.k.xT=
g.k.onClick=g.w(mH,g.I);g.k=mH.prototype;g.k.xa=function(){this.reset();g.I.prototype.xa.call(this)};
g.k.reset=
g.k.start=
g.k.zT=
g.k.yT=
g.k.UU=g.w(tH,gH);g.k=tH.prototype;
g.k.init=
g.k.clear=function(){this.Ka.reset();this.hide()};
g.k.hide=
g.k.onClick=
g.k.LZ=
g.k.show=
g.k.Mp=function(){this.oa("k")};
g.k.Tn=function(){};g.w(vH,gH);g.k=vH.prototype;
g.k.init=
g.k.show=
g.k.Mp=function(){};
g.k.clear=function(){this.B&&this.B.clear();this.C&&this.C.clear();iH(this);gH.prototype.hide.call(this)};
g.k.hide=function(){this.B&&this.B.hide();this.C&&this.C.hide();iH(this);gH.prototype.hide.call(this)};
g.k.Tn=g.w(Nwa,TG);Nwa.prototype.init=g.w(wH,JG);wH.prototype.init=
wH.prototype.clear=function(){this.hide()};g.w(xH,zG);g.w(yH,g.AG);g.k=yH.prototype;g.k.Wl=function(){return this.durationMs};
g.k.stop=function(){this.j&&this.Fd.Qc(this.j)};
g.k.Mc=
g.k.getProgressState=function(){return this.B};
g.k.f3=function(a){g.sH(a,2)&&this.oa("g")};g.w(zH,g.AG);g.k=zH.prototype;g.k.Wl=function(){return this.durationMs};
g.k.start=function(){this.j||(this.j=!0,this.mf.start())};
g.k.stop=
g.k.Mc=
g.k.getProgressState=function(){return this.B};g.w(CH,gH);g.k=CH.prototype;g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=function(){iH(this);gH.prototype.hide.call(this)};
g.k.Mp=function(){this.hide()};
g.k.Tn=
g.k.show=function(){hH(this);gH.prototype.show.call(this)};g.w(Pwa,fH);Pwa.prototype.onClick=DH.prototype.getLength=function(){return this.j-this.B};g.w(FH,g.IG);FH.prototype.Mc=
FH.prototype.onStateChange=g.w(GH,JG);
GH.prototype.init=
GH.prototype.clear=function(){this.hide()};JH.prototype.set=
JH.prototype.get=function(a){return this.j.get(a)};
JH.prototype.remove=function(a){this.j.remove(a)};var Vwa=null,Xwa=null,Zwa=null,axa=null;g.Ua("yt.www.ads.eventcache.getLastCompanionData",function(){return Vwa});
g.Ua("yt.www.ads.eventcache.getLastPlaShelfData",function(){return null});
g.Ua("yt.www.ads.eventcache.getLastUpdateEngagementPanelAction",function(){return Xwa});
g.Ua("yt.www.ads.eventcache.getLastChangeEngagementPanelVisibilityAction",function(){return Zwa});
g.Ua("yt.www.ads.eventcache.getLastScrollToEngagementPanelCommand",function(){return axa});var cxa=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);MH.prototype.handleResponse=
MH.prototype.replace=var Hjb=window.location.hostname.split(".").slice(-2).join("."),d3;NH.getInstance=
g.k=NH.prototype;
g.k.setLocationOnInnerTubeContext=
g.k.handleResponse=
g.k.clearLocationPlayabilityToken=
g.k.getCurrentPositionFromGeolocation=
g.k.createUnpluggedLocationInfo=
g.k.createLocationInfo=var e3={},kxa=(e3.WEB_UNPLUGGED="^unplugged/",e3.WEB_UNPLUGGED_ONBOARDING="^unplugged/",e3.WEB_UNPLUGGED_OPS="^unplugged/",e3.WEB_UNPLUGGED_PUBLIC="^unplugged/",e3.WEB_CREATOR="^creator/",e3.WEB_KIDS="^kids/",e3.WEB_EXPERIMENTS="^experiments/",e3.WEB_MUSIC="^music/",e3.WEB_REMIX="^music/",e3.WEB_MUSIC_EMBEDDED_PLAYER="^music/",e3.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",e3);RH.prototype.G=
g.fa.Object.defineProperties(RH.prototype,{D:{configurable:!0,enumerable:!0,get:function(){return!1}}});g.w(SH,RH);SH.prototype.G=
SH.prototype.C=function(){return[]};
SH.prototype.j=function(){};
SH.prototype.B=function(){};var Ijb={},Wxa=(Ijb.GET_DATASYNC_IDS=PH(SH),Ijb);var f3={},sxa=(f3.auto_search="LATENCY_ACTION_AUTO_SEARCH",f3.ad_to_ad="LATENCY_ACTION_AD_TO_AD",f3.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",f3["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",f3.app_startup="LATENCY_ACTION_APP_STARTUP",f3["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",f3["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",f3["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",f3["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
f3["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",f3["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",f3["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",f3["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",f3["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",f3["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",f3["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",f3["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",f3["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",f3["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",f3["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",f3["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",f3["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",f3["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",f3["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
f3["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",f3["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",f3["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",f3.browse="LATENCY_ACTION_BROWSE",f3.cast_splash="LATENCY_ACTION_CAST_SPLASH",f3.channels="LATENCY_ACTION_CHANNELS",f3.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",f3["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",f3["channel.comments"]=
"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",f3["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",f3["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",f3["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",f3["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",f3["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",f3["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",f3["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",
f3["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",f3["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",f3["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",f3["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",f3.chips="LATENCY_ACTION_CHIPS",f3.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",f3["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",f3["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
f3["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",f3.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",f3.embed="LATENCY_ACTION_EMBED",f3.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",f3.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",f3.explore="LATENCY_ACTION_EXPLORE",f3.home="LATENCY_ACTION_HOME",f3.library="LATENCY_ACTION_LIBRARY",f3.live="LATENCY_ACTION_LIVE",f3.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",f3.mini_app=
"LATENCY_ACTION_MINI_APP_PLAY",f3.onboarding="LATENCY_ACTION_ONBOARDING",f3.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",f3["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",f3["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",f3["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",f3["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",f3["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",f3["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",f3["owner.campaigns"]=
"LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",f3["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",f3["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",f3["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",f3["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",f3["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",f3["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",f3["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",
f3["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",f3["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",f3["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",f3["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",f3["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",f3["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",f3["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",f3.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",f3.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",f3.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",f3.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",f3["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",f3["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",f3["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",f3.prebuffer="LATENCY_ACTION_PREBUFFER",f3.prefetch="LATENCY_ACTION_PREFETCH",f3.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",f3.profile_switcher="LATENCY_ACTION_LOGIN",
f3.reel_watch="LATENCY_ACTION_REEL_WATCH",f3.results="LATENCY_ACTION_RESULTS",f3["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",f3.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",f3.search_ui="LATENCY_ACTION_SEARCH_UI",f3.search_suggest="LATENCY_ACTION_SUGGEST",f3.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",f3.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",f3.seek="LATENCY_ACTION_PLAYER_SEEK",f3.settings="LATENCY_ACTION_SETTINGS",f3.store="LATENCY_ACTION_STORE",f3.tenx="LATENCY_ACTION_TENX",
f3.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",f3.watch="LATENCY_ACTION_WATCH",f3.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",f3["watch,watch7"]="LATENCY_ACTION_WATCH",f3["watch,watch7_html5"]="LATENCY_ACTION_WATCH",f3["watch,watch7ad"]="LATENCY_ACTION_WATCH",f3["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",f3.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",f3.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",f3["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",f3["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",
f3["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",f3["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",f3["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",f3["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",f3["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",f3["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",f3["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",f3["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
f3["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",f3["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",f3["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",f3.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",f3.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",f3.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",f3.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",f3.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
f3);var W={LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE:269,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_COSTREAM_JOIN_FLOW:280,LATENCY_ACTION_COSTREAM_INVITE_FLOW:279,
LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER:277,LATENCY_ACTION_MINI_APP_PLAY:249,LATENCY_ACTION_DMA_CONSENT_FLOW:247,LATENCY_ACTION_GEL_FETCH:248,LATENCY_ACTION_GEL_JSPB_SERIALIZE:243,LATENCY_ACTION_GEL_COMPRESSION:215,LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE:204,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,
LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,
LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,
LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN:244,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,
LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,
LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_MOBILE_LIVE_NAV_MDE:231,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,
LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_DYNAMIC_CREATION_ASSET_IMAGE_DOWNLOAD:272,LATENCY_ACTION_DYNAMIC_CREATION_ASSET_VIDEO_DOWNLOAD:271,LATENCY_ACTION_DYNAMIC_CREATION_ASSET_AUDIO_DOWNLOAD:270,LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE_IMAGE:275,LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE_VIDEO:274,LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE_AUDIO:273,LATENCY_ACTION_GET_SHORTS_SOURCE_VIDEO:278,LATENCY_ACTION_SHORTS_AUTO_CROP_DATA_DOWNLOAD:267,LATENCY_ACTION_SHORTS_FETCH_DYNAMIC_ASSET:251,
LATENCY_ACTION_SHORTS_LOAD_PROJECT:234,LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING:229,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING_RECOMPOSITION:262,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD:240,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,
LATENCY_ACTION_SHORTS_RECOMPOSITION_TRANSCODING:264,LATENCY_ACTION_SHORTS_RECOMPOSITION:263,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT:239,LATENCY_ACTION_CREATION_MODES_MODE_SWITCH:236,LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT:235,LATENCY_ACTION_SWITCH_CAMERA:246,LATENCY_ACTION_OPEN_CAMERA:245,LATENCY_ACTION_MEDIA_ENGINE_TRANSCODE:250,LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME:242,
LATENCY_ACTION_MEDIA_ENGINE_EXPORT:241,LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA:233,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL:238,LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL:237,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,
LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,
LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT:219,LATENCY_ACTION_CREATOR_VIDEO_POLICY:217,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT:218,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_CLAIMS:216,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,
LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST:265,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,
LATENCY_ACTION_CREATOR_CMS_REPORTS:201,LATENCY_ACTION_CREATOR_CMS_RELEASES:226,LATENCY_ACTION_CREATOR_CMS_POLICIES:225,LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC:224,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_LICENSES:223,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES:252,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES:261,
LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS:222,LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY:253,LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS:214,LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES:254,LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES:209,LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY:208,LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP:207,LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA:205,LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES:212,LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES:206,LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY:282,
LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA:258,LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS:260,LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS:259,LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS:257,LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS:221,LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS:210,LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY:256,LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP:255,LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION:213,LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS:211,
LATENCY_ACTION_CREATOR_CMS_ASSETS:195,LATENCY_ACTION_CREATOR_CMS_ART_TRACKS:220,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CMS_ALLOWLIST:227,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,
LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS:228,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,
LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_PLAYLIST_AGGREGATION:266,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,
LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_NETWORK_INSTRUMENTATION:281,LATENCY_ACTION_IMAGE_LOAD:268,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_INFRASTRUCTURE_CONTAINER:276,LATENCY_ACTION_INLINE_TO_WATCH:232,LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH:230,
LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE]="LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";
W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";
W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_COSTREAM_JOIN_FLOW]="LATENCY_ACTION_COSTREAM_JOIN_FLOW";W[W.LATENCY_ACTION_COSTREAM_INVITE_FLOW]="LATENCY_ACTION_COSTREAM_INVITE_FLOW";W[W.LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER]="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER";
W[W.LATENCY_ACTION_MINI_APP_PLAY]="LATENCY_ACTION_MINI_APP_PLAY";W[W.LATENCY_ACTION_DMA_CONSENT_FLOW]="LATENCY_ACTION_DMA_CONSENT_FLOW";W[W.LATENCY_ACTION_GEL_FETCH]="LATENCY_ACTION_GEL_FETCH";W[W.LATENCY_ACTION_GEL_JSPB_SERIALIZE]="LATENCY_ACTION_GEL_JSPB_SERIALIZE";W[W.LATENCY_ACTION_GEL_COMPRESSION]="LATENCY_ACTION_GEL_COMPRESSION";W[W.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE]="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";W[W.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";
W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";
W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";
W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";
W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";
W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";
W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";
W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";
W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";
W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE]="LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";
W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_DYNAMIC_CREATION_ASSET_IMAGE_DOWNLOAD]="LATENCY_ACTION_DYNAMIC_CREATION_ASSET_IMAGE_DOWNLOAD";W[W.LATENCY_ACTION_DYNAMIC_CREATION_ASSET_VIDEO_DOWNLOAD]="LATENCY_ACTION_DYNAMIC_CREATION_ASSET_VIDEO_DOWNLOAD";W[W.LATENCY_ACTION_DYNAMIC_CREATION_ASSET_AUDIO_DOWNLOAD]="LATENCY_ACTION_DYNAMIC_CREATION_ASSET_AUDIO_DOWNLOAD";
W[W.LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE_IMAGE]="LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE_IMAGE";W[W.LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE_VIDEO]="LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE_VIDEO";W[W.LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE_AUDIO]="LATENCY_ACTION_DYNAMIC_CREATION_ASSET_GENERATE_AUDIO";W[W.LATENCY_ACTION_GET_SHORTS_SOURCE_VIDEO]="LATENCY_ACTION_GET_SHORTS_SOURCE_VIDEO";W[W.LATENCY_ACTION_SHORTS_AUTO_CROP_DATA_DOWNLOAD]="LATENCY_ACTION_SHORTS_AUTO_CROP_DATA_DOWNLOAD";
W[W.LATENCY_ACTION_SHORTS_FETCH_DYNAMIC_ASSET]="LATENCY_ACTION_SHORTS_FETCH_DYNAMIC_ASSET";W[W.LATENCY_ACTION_SHORTS_LOAD_PROJECT]="LATENCY_ACTION_SHORTS_LOAD_PROJECT";W[W.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING]="LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING_RECOMPOSITION]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING_RECOMPOSITION";
W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD]="LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD";
W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_RECOMPOSITION_TRANSCODING]="LATENCY_ACTION_SHORTS_RECOMPOSITION_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_RECOMPOSITION]="LATENCY_ACTION_SHORTS_RECOMPOSITION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";
W[W.LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT";W[W.LATENCY_ACTION_CREATION_MODES_MODE_SWITCH]="LATENCY_ACTION_CREATION_MODES_MODE_SWITCH";W[W.LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT";W[W.LATENCY_ACTION_SWITCH_CAMERA]="LATENCY_ACTION_SWITCH_CAMERA";W[W.LATENCY_ACTION_OPEN_CAMERA]="LATENCY_ACTION_OPEN_CAMERA";W[W.LATENCY_ACTION_MEDIA_ENGINE_TRANSCODE]="LATENCY_ACTION_MEDIA_ENGINE_TRANSCODE";
W[W.LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME]="LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME";W[W.LATENCY_ACTION_MEDIA_ENGINE_EXPORT]="LATENCY_ACTION_MEDIA_ENGINE_EXPORT";W[W.LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA]="LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA";W[W.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";W[W.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";
W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";W[W.LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";
W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";
W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";
W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";W[W.LATENCY_ACTION_CREATOR_VIDEO_POLICY]="LATENCY_ACTION_CREATOR_VIDEO_POLICY";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";
W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";
W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";W[W.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";W[W.LATENCY_ACTION_CREATOR_CMS_RELEASES]="LATENCY_ACTION_CREATOR_CMS_RELEASES";W[W.LATENCY_ACTION_CREATOR_CMS_POLICIES]="LATENCY_ACTION_CREATOR_CMS_POLICIES";
W[W.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";W[W.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";W[W.LATENCY_ACTION_CREATOR_CMS_LICENSES]="LATENCY_ACTION_CREATOR_CMS_LICENSES";W[W.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";W[W.LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES";W[W.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";
W[W.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";W[W.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES";W[W.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";W[W.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";W[W.LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY";
W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";
W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA";
W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";
W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";
W[W.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";W[W.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";
W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS]="LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";
W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_PLAYLIST_AGGREGATION]="LATENCY_ACTION_PLAYLIST_AGGREGATION";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";
W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";
W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_NETWORK_INSTRUMENTATION]="LATENCY_ACTION_NETWORK_INSTRUMENTATION";W[W.LATENCY_ACTION_IMAGE_LOAD]="LATENCY_ACTION_IMAGE_LOAD";
W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_INFRASTRUCTURE_CONTAINER]="LATENCY_ACTION_INFRASTRUCTURE_CONTAINER";W[W.LATENCY_ACTION_INLINE_TO_WATCH]="LATENCY_ACTION_INLINE_TO_WATCH";W[W.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH]="LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";
W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";
W[W.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";W[W.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var iI={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};iI[iI.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";iI[iI.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";iI[iI.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var jI={CONN_INVALID:31,CONN_WIRED:30,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};jI[jI.CONN_INVALID]="CONN_INVALID";jI[jI.CONN_WIRED]="CONN_WIRED";jI[jI.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";jI[jI.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";jI[jI.CONN_WIFI_METERED]="CONN_WIFI_METERED";
jI[jI.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";jI[jI.CONN_DISCO]="CONN_DISCO";jI[jI.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";jI[jI.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";jI[jI.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";jI[jI.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";jI[jI.CONN_WIFI]="CONN_WIFI";jI[jI.CONN_NONE]="CONN_NONE";jI[jI.CONN_UNKNOWN]="CONN_UNKNOWN";jI[jI.CONN_DEFAULT]="CONN_DEFAULT";
var kI={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};kI[kI.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
kI[kI.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";kI[kI.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";kI[kI.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";kI[kI.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";kI[kI.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";kI[kI.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
kI[kI.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";kI[kI.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";kI[kI.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";kI[kI.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";kI[kI.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";kI[kI.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";kI[kI.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";kI[kI.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
kI[kI.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";kI[kI.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";kI[kI.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";kI[kI.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";kI[kI.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";kI[kI.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";kI[kI.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";kI[kI.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
kI[kI.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";kI[kI.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";kI[kI.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";kI[kI.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var lI={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};
lI[lI.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";lI[lI.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";lI[lI.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";lI[lI.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";lI[lI.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";lI[lI.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";lI[lI.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";lI[lI.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var mI={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};mI[mI.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";mI[mI.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";mI[mI.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";mI[mI.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var nI={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
nI[nI.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";nI[nI.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var oI={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};oI[oI.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";oI[oI.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";oI[oI.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
oI[oI.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";oI[oI.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";oI[oI.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var pI={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};pI[pI.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";pI[pI.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";pI[pI.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";pI[pI.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var qI={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};qI[qI.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";qI[qI.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";qI[qI.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var rI={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};rI[rI.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
rI[rI.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";rI[rI.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var wxa="actionVisualElement spinnerInfo cacheAttempts resourceInfo preloadThumbnailInfo startupEdgeCaseInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo imageLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo mediaEngineMetadata miniAppInfo dynamicAssetFetchInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext creationModesContext cameraMetadata producerMediaAssetMetadata".split(" ");g.w(txa,BE);var Nxa=new CE("aft-recorded",txa);var bI=g.Sa.ytLoggingLatencyUsageStats_||{};g.Ua("ytLoggingLatencyUsageStats_",bI);$H.prototype.tick=
$H.prototype.info=
$H.prototype.jspbInfo=
$H.prototype.span=var g3=window,dI=g3.performance||g3.mozPerformance||g3.msPerformance||g3.webkitPerformance||new uxa;var Mxa=!1,yxa=!1,Hxa={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"},Oxa=(0,g.jb)(dI.clearResourceTimings||dI.webkitClearResourceTimings||dI.mozClearResourceTimings||dI.msClearResourceTimings||dI.oClearResourceTimings||g.Rd,dI);var Jjb=window;Jjb.ytcsi&&(Jjb.ytcsi.infoGel=g.xI,Jjb.ytcsi.tick=zI);var aya="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),cya=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];var gya=new rF("INNERTUBE_TRANSPORT_TOKEN");g.w(EI,RH);EI.prototype.C=function(){return xjb};
EI.prototype.j=function(a){return g.U(a,jjb)||void 0};
EI.prototype.B=
g.fa.Object.defineProperties(EI.prototype,{D:{configurable:!0,enumerable:!0,get:function(){return!0}}});g.w(FI,RH);FI.prototype.C=function(){return yjb};
FI.prototype.j=function(a){return g.U(a,hjb)||void 0};
FI.prototype.B=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
g.fa.Object.defineProperties(FI.prototype,{D:{configurable:!0,enumerable:!0,get:function(){return!0}}});g.w(GI,RH);GI.prototype.C=function(){return ujb};
GI.prototype.j=function(a){return g.U(a,Fhb)||void 0};
GI.prototype.B=
g.fa.Object.defineProperties(GI.prototype,{D:{configurable:!0,enumerable:!0,get:function(){return!0}}});g.w(HI,RH);HI.prototype.C=function(){return vjb};
HI.prototype.j=function(a){return g.U(a,gjb)||void 0};
HI.prototype.B=g.w(II,RH);II.prototype.C=function(){return wjb};
II.prototype.j=
II.prototype.B=g.w(JI,RH);JI.prototype.C=function(){return tjb};
JI.prototype.j=function(a){return g.U(a,Uib)};
JI.prototype.B=var Kjb=new rF("NETWORK_SLI_TOKEN");KI.prototype.fetch=
KI.prototype.handleResponse=
KI[tF]=[new sF(Kjb)];var fya=new rF("NETWORK_MANAGER_TOKEN");var eya;var UKa={Hia:0,Iia:1,Gia:2,Dia:3,Cia:4,Eia:5,Fia:6};var hya=["APP_STATE","PI"];MI.prototype.fetch=
MI.prototype.handleResponse=g.k=oya.prototype;g.k.initialize=
g.k.isInitialized=function(){return this.bG()};
g.k.getState=function(){return this.state};
g.k.isLoading=function(){return 2===this.state};
g.k.invoke=
g.k.dispose=
g.k.bG=function(){return!!this.j};
g.k.C0=function(a){return this.j.snapshot(a)};
g.k.D0=function(a){return this.j.z_(a)};
g.k.uR=
g.k.Ec=function(a){this.state=a};var tya=[],sya=!1;g.w(PI,oya);PI.prototype.uR=
PI.prototype.bG=
PI.prototype.C0=function(a){return OI().bgvmb(a)};
PI.prototype.D0=wya.prototype.wq=function(){return"crossDeviceProgressCommand"};
wya.prototype.Ps=yya.prototype.wq=function(){return"muteAdEndpoint"};
yya.prototype.Ps=zya.prototype.wq=function(){return"openPopupAction"};
zya.prototype.Ps=function(){};Aya.prototype.wq=function(){return"pingingEndpoint"};
Aya.prototype.Ps=function(){};var Hya={clickTrackingParams:!0,commandMetadata:!0,loggingUrls:!0};g.w(Cya,g.I);var Mdb={bda:"FINAL",P0:"AD_BREAK_LENGTH",aia:"AD_CPN",hia:"AH",lia:"AD_MT",pia:"ASR",tia:"AW",Qra:"NM",Rra:"NX",Sra:"NY",Z0:"CONN",fta:"CPN",Pva:"DV_VIEWABILITY",Hwa:"ERRORCODE",Qwa:"ERROR_MSG",Twa:"EI",z1:"GOOGLE_VIEWABILITY",nGa:"IAS_VIEWABILITY",xJa:"LACT",b4:"LIVE_TARGETING_CONTEXT",oPa:"I_X",pPa:"I_Y",RRa:"MT",gSa:"MIDROLL_POS",hSa:"MIDROLL_POS_MS",FSa:"MOAT_INIT",GSa:"MOAT_VIEWABILITY",m4:"P_H",YZa:"PV_H",ZZa:"PV_W",n4:"P_W",u_a:"TRIGGER_TYPE",Y2a:"SDKV",q4:"SLOT_POS",Q$a:"SURVEY_LOCAL_TIME_EPOCH_S",
P$a:"SURVEY_ELAPSED_MS",x4:"VIS",whb:"VIEWABILITY",Chb:"VED",y4:"VOL",Fhb:"WT",z4:"YT_ERROR_CODE"};Iya.prototype.wq=function(){return"urlEndpoint"};
Iya.prototype.Ps=SI.prototype.get=function(){return this.value};
g.w(TI,SI);TI.prototype.getType=function(){return"metadata_type_action_companion_ad_renderer"};
g.w(UI,SI);UI.prototype.getType=function(){return"metadata_type_top_banner_image_text_icon_buttoned_layout_view_model"};
g.w(Jya,SI);Jya.prototype.getType=function(){return"metadata_type_ads_engagement_panel_renderer"};
g.w(VI,SI);VI.prototype.getType=function(){return"metadata_type_ad_next_params"};
g.w(WI,SI);WI.prototype.getType=function(){return"metadata_type_ad_video_clickthrough_endpoint"};
g.w(Kya,SI);Kya.prototype.getType=function(){return"metadata_type_invideo_overlay_ad_renderer"};
g.w(Lya,SI);Lya.prototype.getType=function(){return"metadata_type_image_companion_ad_renderer"};
g.w(Mya,SI);Mya.prototype.getType=function(){return"metadata_type_banner_image_layout_view_model"};
g.w(Nya,SI);Nya.prototype.getType=function(){return"metadata_type_shopping_companion_carousel_renderer"};
g.w(Oya,SI);Oya.prototype.getType=function(){return"metadata_type_ad_info_ad_metadata"};
g.w(Pya,SI);Pya.prototype.getType=function(){return"metadata_ad_video_is_listed"};
g.w(XI,SI);XI.prototype.getType=function(){return"metadata_type_ad_placement_config"};
g.w(YI,SI);YI.prototype.getType=function(){return"metadata_type_ad_pod_info"};
g.w(ZI,SI);ZI.prototype.getType=function(){return"metadata_type_ad_pod_skip_index"};
g.w($I,SI);$I.prototype.getType=function(){return"metadata_type_ad_pod_skip_target"};
g.w(aJ,SI);aJ.prototype.getType=function(){return"metadata_type_ad_pod_skip_target_callback_ref"};
g.w(bJ,SI);bJ.prototype.getType=function(){return"metadata_type_ad_video_id"};
g.w(cJ,SI);cJ.prototype.getType=function(){return"metadata_type_content_cpn"};
g.w(dJ,SI);dJ.prototype.getType=function(){return"metadata_type_instream_ad_player_overlay_renderer"};
g.w(eJ,SI);eJ.prototype.getType=function(){return"metadata_type_player_overlay_layout_renderer"};
g.w(fJ,SI);fJ.prototype.getType=function(){return"metadata_type_player_underlay_renderer"};
g.w(gJ,SI);gJ.prototype.getType=function(){return"metadata_type_player_underlay_ad_slot_renderer"};
g.w(Qya,SI);Qya.prototype.getType=function(){return"metadata_type_shrunken_player_bytes_config"};
g.w(hJ,SI);hJ.prototype.getType=function(){return"metadata_type_ad_action_interstitial_renderer"};
g.w(Rya,SI);Rya.prototype.getType=function(){return"metadata_type_valid_survey_text_interstitial_renderer"};
g.w(Sya,SI);Sya.prototype.getType=function(){return"METADATA_TYPE_VALID_INSTREAM_SURVEY_AD_RENDERER_FOR_DAI"};
g.w(Tya,SI);Tya.prototype.getType=function(){return"METADATA_TYPE_VALID_INSTREAM_SURVEY_AD_RENDERER_FOR_VOD"};
g.w(Uya,SI);Uya.prototype.getType=function(){return"metadata_type_sliding_text_player_overlay_renderer"};
g.w(iJ,SI);iJ.prototype.getType=function(){return"metadata_type_linked_player_bytes_layout_id"};
g.w(jJ,SI);jJ.prototype.getType=function(){return"metadata_type_linked_in_player_layout_id"};
g.w(kJ,SI);kJ.prototype.getType=function(){return"metadata_type_linked_in_player_layout_type"};
g.w(lJ,SI);lJ.prototype.getType=function(){return"metadata_type_linked_in_player_slot_id"};
g.w(Vya,SI);Vya.prototype.getType=function(){return"metadata_type_player_bytes_callback"};
g.w(mJ,SI);mJ.prototype.getType=function(){return"metadata_type_player_bytes_callback_ref"};
g.w(nJ,SI);nJ.prototype.getType=function(){return"metadata_type_player_bytes_layout_controls_callback_ref"};
g.w(oJ,SI);oJ.prototype.getType=function(){return"metadata_type_sub_layouts"};
g.w(Wya,SI);Wya.prototype.getType=function(){return"metadata_type_cue_point"};
g.w(pJ,SI);pJ.prototype.getType=function(){return"metadata_type_video_length_seconds"};
g.w(qJ,SI);qJ.prototype.getType=function(){return"metadata_type_player_vars"};
g.w(rJ,SI);rJ.prototype.getType=function(){return"metadata_type_preload_player_vars"};
g.w(sJ,SI);sJ.prototype.getType=function(){return"metadata_type_sodar_extension_data"};
g.w(tJ,SI);tJ.prototype.getType=function(){return"metadata_type_layout_enter_ms"};
g.w(uJ,SI);uJ.prototype.getType=function(){return"metadata_type_layout_exit_ms"};
g.w(vJ,SI);vJ.prototype.getType=function(){return"metadata_type_media_sub_layout_index"};
g.w(wJ,SI);wJ.prototype.getType=function(){return"metadata_type_dai"};
g.w(xJ,SI);xJ.prototype.getType=function(){return"metadata_type_ad_intro"};
g.w(Xya,SI);Xya.prototype.getType=function(){return"metadata_type_client_forecasting_ad_renderer"};
g.w(yJ,SI);yJ.prototype.getType=function(){return"metadata_type_drift_recovery_ms"};
g.w(zJ,SI);zJ.prototype.getType=function(){return"metadata_type_fulfilled_layout"};
g.w(AJ,SI);AJ.prototype.getType=function(){return"metadata_type_ad_break_request_data"};
g.w(Yya,SI);Yya.prototype.getType=function(){return"metadata_type_ad_break_response_data"};
g.w(BJ,SI);BJ.prototype.getType=function(){return"metadata_type_remote_slots_data"};
g.w(CJ,SI);CJ.prototype.getType=function(){return"METADATA_TYPE_MEDIA_LAYOUT_DURATION_seconds"};
g.w(DJ,SI);DJ.prototype.getType=function(){return"METADATA_TYPE_MEDIA_BREAK_LAYOUT_DURATION_MILLISECONDS"};
g.w(EJ,SI);EJ.prototype.getType=function(){return"metadata_type_legacy_info_card_vast_extension"};
g.w(Zya,SI);Zya.prototype.getType=function(){return"metadata_type_valid_ad_message_renderer"};
g.w(FJ,SI);FJ.prototype.getType=function(){return"METADATA_TYPE_INTERACTIONS_AND_PROGRESS_LAYOUT_COMMANDS"};
g.w(GJ,SI);GJ.prototype.getType=function(){return"metadata_type_served_from_live_infra"};
g.w($ya,SI);$ya.prototype.getType=function(){return"metadata_type_survey_overlay"};
g.w(HJ,SI);HJ.prototype.getType=function(){return"metadata_type_active_view_traffic_type"};
g.w(aza,SI);aza.prototype.getType=function(){return"metadata_type_ssdai_ads_config"};
g.w(IJ,SI);IJ.prototype.getType=function(){return"metadata_type_eligible_for_ssap"};
g.w(bza,SI);bza.prototype.getType=function(){return"metadata_type_allow_pause_ad_break_request_slot_reschedule"};var wza=new Map([["TRIGGER_CATEGORY_LAYOUT_EXIT_NORMAL","normal"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_SKIPPED","skipped"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_MUTED","muted"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_INPUT_SUBMITTED","user_input_submitted"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_CANCELLED","user_cancelled"]]);var Hza=new Map([["TRIGGER_CATEGORY_LAYOUT_EXIT_NORMAL","trigger_category_layout_exit_normal"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_SKIPPED","trigger_category_layout_exit_user_skipped"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_MUTED","trigger_category_layout_exit_user_muted"],["TRIGGER_CATEGORY_SLOT_EXPIRATION","trigger_category_slot_expiration"],["TRIGGER_CATEGORY_SLOT_FULFILLMENT","trigger_category_slot_fulfillment"],["TRIGGER_CATEGORY_SLOT_ENTRY","trigger_category_slot_entry"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_INPUT_SUBMITTED",
"trigger_category_layout_exit_user_input_submitted"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_CANCELLED","trigger_category_layout_exit_user_cancelled"]]);g.w(MJ,yb);g.w(NJ,yb);new Promise(function(){});var fza=new Map([["unspecified","CONTROL_FLOW_MANAGER_LAYER_UNSPECIFIED"],["core","CONTROL_FLOW_MANAGER_LAYER_CORE"],["adapter","CONTROL_FLOW_MANAGER_LAYER_ADAPTER"],["surface","CONTROL_FLOW_MANAGER_LAYER_SURFACE"],["external","CONTROL_FLOW_MANAGER_LAYER_EXTERNAL"]]),dza=new Map([["normal",{Qw:"ADS_CLIENT_EVENT_TYPE_NORMAL_EXIT_LAYOUT_REQUESTED",Yw:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_NORMALLY"}],["skipped",{Qw:"ADS_CLIENT_EVENT_TYPE_SKIP_EXIT_LAYOUT_REQUESTED",Yw:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_SKIP"}],
["muted",{Qw:"ADS_CLIENT_EVENT_TYPE_MUTE_EXIT_LAYOUT_REQUESTED",Yw:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_MUTE"}],["abandoned",{Qw:"ADS_CLIENT_EVENT_TYPE_ABANDON_EXIT_LAYOUT_REQUESTED",Yw:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_ABANDON"}],["user_input_submitted",{Qw:"ADS_CLIENT_EVENT_TYPE_USER_INPUT_SUBMITTED_EXIT_LAYOUT_REQUESTED",Yw:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_USER_INPUT_SUBMITTED"}],["user_cancelled",{Qw:"ADS_CLIENT_EVENT_TYPE_USER_CANCELLED_EXIT_LAYOUT_REQUESTED",Yw:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_USER_CANCELLED"}],
["error",{Qw:"ADS_CLIENT_EVENT_TYPE_ABORTED_EXIT_LAYOUT_REQUESTED",Yw:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_ABORTED"}]]);g.w(lza,g.I);g.k=lza.prototype;g.k.ZN=function(a,b){return this.j.ZN(a,b)};
g.k.wh=
g.k.Xf=
g.k.Yf=
g.k.rJ=
g.k.Cc=
g.k.Tc=
g.k.xf=
g.k.xa=
g.k.Pg=Eza.prototype.isActive=g.w(Fza,g.I);g.k=Fza.prototype;g.k.ZN=
g.k.yh=function(a){a=ZJ(this,a);"not_scheduled"!==a.j&&kK(a.slot,a.j,"onSlotScheduled");a.j="scheduled"};
g.k.UC=
g.k.Xf=function(a){a=ZJ(this,a);"enter_requested"!==a.j&&kK(a.slot,a.j,"onSlotEntered");a.j="entered"};
g.k.rJ=
g.k.Yf=
g.k.Tc=g.w(Lza,g.I);Lza.prototype.get=g.w(Nza,g.I);Nza.prototype.C=function(){return this.j};oK.prototype.executeCommand=rK.prototype.addListener=function(a){this.listeners.add(a)};
rK.prototype.removeListener=function(a){this.listeners.delete(a)};var h3={},zK=(h3.AD_MARKER="ytp-ad-progress",h3.CHAPTER_MARKER="ytp-chapter-marker",h3.TIME_MARKER="ytp-time-marker",h3);var xUa=RegExp("^https?://([^.]*\\.moatads\\.com/|e[0-9]+\\.yt\\.srs\\.doubleverify\\.com|pagead2\\.googlesyndication\\.com/pagead/gen_204\\?id=yt3p&sr=1&|pm\\.adsafeprotected\\.com/youtube|pm\\.test-adsafeprotected\\.com/youtube|youtube[0-9]+\\.moatpixel\\.com/)"),Vza=RegExp("^https://([a-z]+\\.)?[0-9a-f]{1,63}\\.sslproxy\\.corp\\.google\\.com/|^https://([a-z]+\\.)?[a-z0-9\\-]{1,63}\\.demos\\.corp\\.google\\.com/|^https://[0-9a-f]{1,63}\\.proxy\\.googleprod\\.com/|^https?://(([-\\w]*www[-\\w]*\\.|[-\\w]*web[-\\w]*\\.|[-\\w]*canary[-\\w]*\\.|[-\\w]*dev[-\\w]*\\.|[-\\w]{1,3}\\.)+(corp\\.)?youtube(-nocookie|kids|education)?\\.com/|([A-Za-z0-9-]{1,63}\\.)*(youtube\\.googleapis\\.com)[.]?(:[0-9]+)?/|([a-z]+\\.)?[a-z0-9\\-]{1,63}\\.([a-z]{3}|i)\\.corp\\.google\\.com(:[0-9]+)?/|([a-z]+\\.)?[a-z0-9\\-]{1,63}\\.c\\.googlers\\.com(:[0-9]+)?/|(docs|drive)\\.google\\.com/(a/[^/\\\\%]+/|)|(music|music-green-qa|music-release-qa|yt-music-green\\.corp)\\.youtube\\.com/|(tv|tv-green-qa|tv-release-qa)\\.youtube\\.com/|[A-Za-z0-9-]+\\.prod\\.google\\.com(:[0-9]+)?/)"),
yUa=RegExp("^https?://(www\\.google\\.com/pagead/xsul|www\\.youtube\\.com/pagead/slav)"),cAa=RegExp("^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https?://(([A-Za-z0-9-]{1,63}\\.)*(corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|docs\\.google\\.com|drive\\.google\\.com|prod\\.google\\.com|currents\\.google\\.com|mail\\.google\\.com|youtube\\.com|youtubeeducation\\.com|youtube\\-nocookie\\.com|youtubekids\\.com)[.]?(:[0-9]+)?/|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$))"),
aAa=RegExp("^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https?://(([A-Za-z0-9-]{1,63}\\.)*(corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|prod\\.google\\.com|youtube\\.com|youtubekids\\.com)[.]?(:[0-9]+)?/|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$))"),Yza=RegExp("^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,z])?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(lh7\\-(eu|us)\\.((googleusercontent)|(google)))|((photos|testonly|work)\\.fife\\.usercontent\\.google)|([\\w\\-]+\\.fife\\.usercontent\\.google)|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz0\\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(dp[3-6]\\.googleusercontent\\.cn)|(dp4\\.googleusercontent\\.com)|((photos|drive)\\-image\\-(dev|qa)(-auth|-cookie)?\\.corp\\.google\\.com)|(photos\\-image\\-dev\\-dl\\-(auth|eu|us)\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?))\\/|^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https?://(([A-Za-z0-9-]{1,63}\\.)*(corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|docs\\.google\\.com|drive\\.google\\.com|googleplex\\.com|play\\.google\\.com|prod\\.google\\.com|currents\\.google\\.com|video\\.google\\.com|youtube\\.com|ytimg\\.com|ytimg\\.sandbox\\.google\\.com|chat\\.google\\.com)[.]?(:[0-9]+)?/|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$)|s2\\.googleusercontent\\.com/s2/favicons\\?|yt[3-4]\\.ggpht\\.com/)"),
zUa=RegExp("^https?.*#ocr$|^https?://(aksecure\\.imrworldwide\\.com/|cdn\\.imrworldwide\\.com/|secure\\-..\\.imrworldwide\\.com/)"),Zza=RegExp("^https?://(googleads\\.g\\.doubleclick\\.net/(aclk|pagead/conversion)|www\\.google\\.com/(aclk|pagead/conversion)|www\\.googleadservices\\.com/(aclk|pagead/(aclk|conversion))|www\\.youtube\\.com/pagead/conversion)"),Xza=RegExp("^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,z])?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(lh7\\-(eu|us)\\.((googleusercontent)|(google)))|((photos|testonly|work)\\.fife\\.usercontent\\.google)|([\\w\\-]+\\.fife\\.usercontent\\.google)|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz0\\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(dp[3-6]\\.googleusercontent\\.cn)|(dp4\\.googleusercontent\\.com)|((photos|drive)\\-image\\-(dev|qa)(-auth|-cookie)?\\.corp\\.google\\.com)|(photos\\-image\\-dev\\-dl\\-(auth|eu|us)\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?))\\/|^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https?://(([A-Za-z0-9-]{1,63}\\.)*(corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|docs\\.google\\.com|drive\\.google\\.com|googleplex\\.com|googlevideo\\.com|prod\\.google\\.com|lh3\\.photos\\.google\\.com|currents\\.google\\.com|mail\\.google\\.com|youtube\\.com|yt\\.akamaized\\.net|chat\\.google\\.com)[.]?(:[0-9]+)?/|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$)|([A-Za-z0-9-]{1,63}\\.)*c\\.lh3(-d[a-gyz]|-testonly)?\\.(googleusercontent|photos\\.google)\\.com/.*$)"),
ZPa=RegExp("^https?://(([A-Za-z0-9-]{1,63}\\.)*(imasdk\\.googleapis\\.com|2mdn\\.net|googlesyndication\\.com|corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|googleads\\.g\\.doubleclick\\.net|prod\\.google\\.com|static\\.doubleclick\\.net|static\\.googleadsserving\\.cn|studioapi\\.doubleclick\\.net|youtube\\.com|youtube\\.googleapis\\.com|youtube\\-nocookie\\.com|youtubekids\\.com|ytimg\\.com|ytimg\\.sandbox\\.google\\.com)[.]?(:[0-9]+)?/|lightbox-(demos|builder)\\.appspot\\.com/|s[01](qa)?\\.2mdn\\.net/ads/richmedia/studio/mu/templates/tetris|www\\.gstatic\\.com/doubleclick/studio/innovation/h5/layouts/tetris|www\\.gstatic\\.com/doubleclick/studio/innovation/ytplayer)"),
XPa=RegExp("^https://([A-Za-z0-9-]{1,63}\\.)*(crowdsource|datacompute)\\.google\\.com/|^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https://canvastester-3fd0b\\.appspot\\.com(/|$)|^https://narrative-news-cast-receiver-d\\.appspot\\.com(/|$)|^https://narrative-news-cast-receiver-f\\.appspot\\.com(/|$)|^https://one\\.google\\.com(/|$)|^https://www\\.google\\.com/culturalinstitute/manage/.*$|^https://www\\.gstatic\\.com/aog_howto|^https://www\\.gstatic\\.com/narrative_cast_receiver/news|^https?://(([A-Za-z0-9-]{1,63}\\.)*(imasdk\\.googleapis\\.com|corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|docs\\.google\\.com|drive\\.google\\.com|googleads\\.g\\.doubleclick\\.net|googleplex\\.com|play\\.google\\.com|prod\\.google\\.com|photos\\.google\\.com|get\\.google\\.com|currents\\.google\\.com|books\\.googleusercontent\\.com|play\\-books\\-autopush\\-sandbox\\.googleusercontent\\.com|play\\-books\\-canary\\-sandbox\\.googleusercontent\\.com|play\\-books\\-internal\\-sandbox\\.googleusercontent\\.com|play\\-books\\-staging\\-sandbox\\.googleusercontent\\.com|blogger\\.com|mail\\.google\\.com|survey\\.g\\.doubleclick\\.net|youtube\\.com|youtube\\.googleapis\\.com|youtubeeducation\\.com|youtube\\-nocookie\\.com|yt\\-web\\-embedded\\-player\\.appspot\\.com|youtubekids\\.com|vevo\\.com|chat\\.google\\.com|meet\\.google\\.com|artsandculture\\.google\\.com)[.]?(:[0-9]+)?(/|$)|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$)|(www\\.|encrypted\\.)?google\\.(cat|com(\\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))/(search|webhp)\\?|(www\\.|encrypted\\.)google\\.(cat|com(\\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))/?$|lightbox-(demos|builder)\\.appspot\\.com/|s0\\.2mdn\\.net/instream/html5/native/|s[01](qa)?\\.2mdn\\.net/ads/richmedia/studio/mu/templates/tetris|www\\.gstatic\\.com/doubleclick/studio/innovation/h5/layouts/tetris)"),
YPa=RegExp("^https?://([A-Za-z0-9-]{1,63}\\.)*(stadia\\.google\\.com)[.]?(:[0-9]+)?(/|$)"),Ljb=RegExp("^(https://photos\\.google\\.com|https://get\\.google\\.com|https://currents\\.google\\.com|https://mail\\.google\\.com|https://yt\\-web\\-embedded\\-player\\.appspot\\.com|http://yt\\-web\\-embedded\\-player\\.appspot\\.com|https://chat\\.google\\.com|https://one\\.google\\.com|https://artsandculture\\.google\\.com)$|^http://[0-9]+\\.[a-z0-9\\-_]+\\.[a-z0-9\\-_]+\\.[a-z0-9\\-_]+\\.([a-z]{2}|i)\\.borg\\.google\\.com(:[0-9]+)?$|^https://((autopush|beta-lookup|daily-[0-6]|manual-qual|preprod|stream)\\.)?meet\\.google\\.com$|^https://([A-Za-z0-9-]{1,63}\\.)*(crowdsource|datacompute)\\.google\\.com$|^https://([A-Za-z0-9-]{1,63}\\.)*(youtube|youtubekids|youtubeeducation)\\.com$|^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com$|^https://([A-Za-z0-9-]{1,63}\\.)+sandbox\\.google\\.com$|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com$|^https://(books|play-books-(autopush|canary|internal|staging)-sandbox)\\.googleusercontent\\.com$|^https://(draft|www|(www\\.)?dev\\.sandbox|(www\\.)?autopush\\.sandbox|(www\\.)?staging\\.sandbox|(www\\.)?restore\\.sandbox)\\.blogger\\.com$|^https://[0-9a-f]{1,63}\\.proxy\\.googleprod\\.com$|^https?://(((docs|m|sing|ss|sss|www)\\.)?drive\\.google\\.com$|([A-Za-z0-9-]{1,63}\\.)*c\\.googlers\\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\\.)*corp\\.google\\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\\.)*googleplex\\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\\.)*proxy\\.googlers\\.com(:[0-9]+)?$|(www\\.|encrypted\\.)google\\.(cat|com(\\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))/?$|[A-Za-z0-9-]+\\.prod\\.google\\.com(:[0-9]+)?$|docs\\.google\\.com$)"),
Mjb=RegExp("^(https://stadia\\.google\\.com)$");var Uza=!1;g.AK.prototype.getId=function(){return this.id};
g.AK.prototype.toString=
g.AK.prototype.contains=
var fAa=1;g.AK.prototype.getId=g.AK.prototype.getId;jAa.prototype.UC=
jAa.prototype.CM=function(){Tza(this.j)};lAa.prototype.UC=
lAa.prototype.CM=function(){Tza(this.j)};mAa.prototype.UC=
mAa.prototype.CM=oAa.prototype.build=g.w(DK,oAa);
DK.prototype.j=g.w(EK,oAa);EK.prototype.j=g.k=pAa.prototype;g.k.yc=function(){return this.slot};
g.k.tb=function(){return this.layout};
g.k.init=function(){};
g.k.release=function(){};
g.k.startRendering=
g.k.rf=g.w(IK,g.AG);g.k=IK.prototype;g.k.yc=function(){return this.B.slot};
g.k.tb=function(){return this.B.layout};
g.k.init=
g.k.release=
g.k.mO=function(){};
g.k.kO=function(){};
g.k.jO=function(){};
g.k.eI=function(){};
g.k.startRendering=
g.k.uK=
g.k.rf=
g.k.xa=
g.fa.Object.defineProperties(IK.prototype,{slot:{configurable:!0,enumerable:!0,get:function(){return this.B.slot}},
layout:{configurable:!0,enumerable:!0,get:function(){return this.B.layout}}});PK.prototype.Ch=
PK.prototype.Vc=
PK.prototype.ex=g.w(CAa,zG);g.w(DAa,IK);g.k=DAa.prototype;g.k.zg=function(a,b){LK("banner-image",a,this.K.get().Fj,this.Oa.get(),this.D,this.G,this.yc(),this.tb(),b)};
g.k.startRendering=function(a){KK(this.kb,this.yc(),this.tb(),this.callback,"metadata_type_banner_image_layout_view_model",function(b,c,d,e,f){return new CAa(b,c,d,e,f)},this.j);
IK.prototype.startRendering.call(this,a)};
g.k.Cc=
g.k.Tc=function(){};
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.xa=function(){this.Xc().Gd.delete(this);IK.prototype.xa.call(this)};g.w(FAa,zG);g.w(GAa,IK);g.k=GAa.prototype;g.k.zg=
g.k.startRendering=
g.k.Cc=
g.k.Tc=function(){};
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.xa=g.w(IAa,zG);g.w(JAa,IK);g.k=JAa.prototype;g.k.zg=function(a,b){LK("image-companion",a,this.K.get().Fj,this.Oa.get(),this.D,this.G,this.yc(),this.tb(),b)};
g.k.startRendering=function(a){KK(this.kb,this.yc(),this.tb(),this.callback,"metadata_type_image_companion_ad_renderer",function(b,c,d,e,f){return new IAa(b,c,d,e,f)},this.j);
IK.prototype.startRendering.call(this,a)};
g.k.Cc=function(a,b){b.layoutId===this.layout.layoutId?this.kb.Vc("impression"):this.G===b.layoutId&&(null===this.D?this.D=this.Oa.get().Wi():oH("OnLayoutEntered should set engagePingCallback, but it was not null",this.slot,this.layout))};
g.k.Tc=function(){};
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.xa=function(){this.Xc().Gd.delete(this);IK.prototype.xa.call(this)};g.w(LAa,zG);g.w(MAa,IK);g.k=MAa.prototype;g.k.zg=function(a,b){LK("shopping-companion",a,this.K.get().Fj,this.Oa.get(),this.D,this.G,this.yc(),this.tb(),b)};
g.k.startRendering=function(a){KK(this.kb,this.yc(),this.tb(),this.callback,"metadata_type_shopping_companion_carousel_renderer",function(b,c,d,e,f){return new LAa(b,c,d,e,f)},this.j);
IK.prototype.startRendering.call(this,a)};
g.k.Cc=function(a,b){b.layoutId===this.layout.layoutId?this.kb.Vc("impression"):this.G===b.layoutId&&(null===this.D?this.D=this.Oa.get().Wi():oH("OnLayoutEntered should set engagePingCallback, but it was not null",this.slot,this.layout))};
g.k.Tc=function(){};
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.xa=function(){this.Xc().Gd.delete(this);IK.prototype.xa.call(this)};g.w(RAa,IK);g.k=RAa.prototype;g.k.startRendering=function(a){KK(this.kb,this.yc(),this.tb(),this.callback,"metadata_type_action_companion_ad_renderer",function(b,c,d,e,f){return new FAa(b,c,d,e,f)},this.j);
IK.prototype.startRendering.call(this,a)};
g.k.Cc=function(){};
g.k.Tc=function(){};
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.xa=function(){this.Xc().Gd.delete(this);IK.prototype.xa.call(this)};
g.k.zg=function(){};g.k=TAa.prototype;g.k.yc=function(){return this.slot};
g.k.tb=function(){return this.layout};
g.k.init=
g.k.release=
g.k.startRendering=
g.k.rf=
g.k.Vk=
g.k.onVolumeChange=function(){};
g.k.yj=function(){};
g.k.uh=function(){};
g.k.Wk=function(){};
g.k.onFullscreenToggled=function(){};
g.k.zj=function(){};
g.k.Zi=function(){};
g.k.GY=
g.k.lA=function(){this.kb.Vc("active_view_measurable")};
g.k.mA=function(){this.kb.Vc("active_view_viewable")};
g.k.kA=function(){this.kb.Vc("active_view_fully_viewable_audible_half_duration")};
g.k.jA=function(){this.kb.Vc("audio_measurable")};
g.k.iA=function(){this.kb.Vc("audio_audible")};g.w(UAa,IK);g.k=UAa.prototype;g.k.init=
g.k.Fp=function(){this.D||this.Ia.get().resumeVideo(1)};
g.k.startRendering=
g.k.rf=
g.k.zg=
g.k.xa=function(){IK.prototype.xa.call(this)};g.w(VAa,zG);g.w(WAa,IK);g.k=WAa.prototype;g.k.startRendering=function(a){KK(this.kb,this.yc(),this.tb(),this.callback,"metadata_type_top_banner_image_text_icon_buttoned_layout_view_model",function(b,c,d,e,f){return new VAa(b,c,d,e,f)},this.j);
IK.prototype.startRendering.call(this,a)};
g.k.Cc=function(){};
g.k.Tc=function(){};
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.xa=function(){this.Xc().Gd.delete(this);IK.prototype.xa.call(this)};
g.k.zg=function(){};g.w(UK,zG);g.w(VK,IK);VK.prototype.init=
VK.prototype.startRendering=function(a){IK.prototype.startRendering.call(this,a);this.callback.Cc(this.slot,a)};
VK.prototype.zg=
VK.prototype.xa=function(){IK.prototype.xa.call(this)};XK.prototype.build=g.w(ZAa,zG);g.w($Aa,IK);g.k=$Aa.prototype;g.k.zg=function(a,b){LK("ads-engagement-panel",a,this.K.get().Fj,this.Oa.get(),this.D,this.G,this.yc(),this.tb(),b)};
g.k.startRendering=function(a){KK(this.kb,this.yc(),this.tb(),this.callback,"metadata_type_ads_engagement_panel_renderer",function(b,c,d,e,f){return new ZAa(b,c,d,e,f)},this.j);
IK.prototype.startRendering.call(this,a)};
g.k.Cc=function(a,b){b.layoutId===this.layout.layoutId?this.kb.Vc("impression"):this.G===b.layoutId&&(null===this.D?this.D=this.Oa.get().Wi():oH("OnLayoutEntered should set engagePingCallback, but it was not null",this.slot,this.layout))};
g.k.Tc=function(){};
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.xa=function(){this.Xc().Gd.delete(this);IK.prototype.xa.call(this)};g.w(bBa,IK);g.k=bBa.prototype;g.k.zg=function(a,b){LK("top-banner-image-text-icon-buttoned",a,this.K.get().Fj,this.Oa.get(),this.D,this.G,this.yc(),this.tb(),b)};
g.k.startRendering=function(a){KK(this.kb,this.yc(),this.tb(),this.callback,"metadata_type_top_banner_image_text_icon_buttoned_layout_view_model",function(b,c,d,e,f){return new VAa(b,c,d,e,f)},this.j);
IK.prototype.startRendering.call(this,a)};
g.k.Cc=function(a,b){if(b.layoutId===this.layout.layoutId){a=PJ(b.Ca,"metadata_type_top_banner_image_text_icon_buttoned_layout_view_model");b=wAa(this.Oa.get(),{adPlacementConfig:this.adPlacementConfig});var c;qK(this.Cb.get(),mG(null==(c=a.interaction)?void 0:c.onFirstVisible),this.layout.layoutId,b)}else this.G===b.layoutId&&(null===this.D?this.D=this.Oa.get().Wi():oH("OnLayoutEntered should set engagePingCallback, but it was not null",this.slot,this.layout))};
g.k.Tc=function(){};
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.xa=function(){this.Xc().Gd.delete(this);IK.prototype.xa.call(this)};dBa.prototype.build=g.w(eBa,zG);g.w(YK,IK);YK.prototype.init=
YK.prototype.zg=function(){};
YK.prototype.startRendering=
YK.prototype.xa=function(){IK.prototype.xa.call(this)};fBa.prototype.build=g.k=gBa.prototype;g.k.yc=function(){return this.slot};
g.k.tb=function(){return this.layout};
g.k.init=function(){};
g.k.release=function(){};
g.k.startRendering=function(a){a.layoutId!==this.layout.layoutId?this.callback.xf(this.slot,a,new MJ("Tried to start rendering an unknown layout, this adapter requires LayoutId: "+this.layout.layoutId+("and LayoutType: "+this.layout.layoutType),void 0,"ADS_CLIENT_ERROR_MESSAGE_UNKNOWN_LAYOUT"),"ADS_CLIENT_ERROR_TYPE_ENTER_LAYOUT_FAILED"):(this.callback.Cc(this.slot,a),this.kb.Vc("impression"),qM(this.j,a))};
g.k.rf=function(a,b){a.layoutId!==this.layout.layoutId?this.callback.xf(this.slot,a,new MJ("Tried to stop rendering an unknown layout, this adapter requires LayoutId: "+this.layout.layoutId+("and LayoutType: "+this.layout.layoutType),void 0,"ADS_CLIENT_ERROR_MESSAGE_UNKNOWN_LAYOUT"),"ADS_CLIENT_ERROR_TYPE_EXIT_LAYOUT_FAILED"):this.callback.Tc(this.slot,a,b)};g.k=iBa.prototype;g.k.yc=function(){return this.slot};
g.k.tb=function(){return this.layout};
g.k.init=function(){};
g.k.release=function(){};
g.k.startRendering=
g.k.rf=ZK.prototype.build=g.w(jBa,zG);g.w(kBa,IK);g.k=kBa.prototype;g.k.init=
g.k.Fp=function(){this.D||this.Ia.get().resumeVideo(2)};
g.k.startRendering=function(a){IK.prototype.startRendering.call(this,a);this.callback.Cc(this.slot,a);this.G.Vr=this};
g.k.rf=function(a,b){IK.prototype.rf.call(this,a,b);y2(this.G,this)};
g.k.zg=
g.k.xa=function(){IK.prototype.xa.call(this)};g.w($K,IK);g.k=$K.prototype;g.k.init=
g.k.Fp=function(){this.D||this.Ia.get().resumeVideo(2)};
g.k.startRendering=function(a){IK.prototype.startRendering.call(this,a);this.callback.Cc(this.slot,a);this.G.Vr=this};
g.k.rf=function(a,b){IK.prototype.rf.call(this,a,b);y2(this.G,this)};
g.k.zg=
g.k.xa=function(){IK.prototype.xa.call(this)};g.w(nBa,zG);g.w(aL,IK);g.k=aL.prototype;g.k.startRendering=
g.k.Zi=function(){};
g.k.zj=
g.k.onFullscreenToggled=function(){};
g.k.uh=function(){};
g.k.Wk=function(){};
g.k.yj=function(){};
g.k.onVolumeChange=function(){};
g.k.Vk=function(){};
g.k.zg=function(){};qBa.prototype.build=rBa.prototype.build=var Njb,i3,tBa;
Njb={jja:"ALREADY_PINNED_ON_A_DEVICE",AUTHENTICATION_EXPIRED:"AUTHENTICATION_EXPIRED",foa:"AUTHENTICATION_MALFORMED",goa:"AUTHENTICATION_MISSING",soa:"BAD_REQUEST",Epa:"CAST_SESSION_DEVICE_MISMATCHED",Fpa:"CAST_SESSION_VIDEO_MISMATCHED",Gpa:"CAST_TOKEN_EXPIRED",Hpa:"CAST_TOKEN_FAILED",Ipa:"CAST_TOKEN_MALFORMED",oqa:"CGI_PARAMS_MALFORMED",pqa:"CGI_PARAMS_MISSING",hva:"DEVICE_FALLBACK",Iwa:"GENERIC_WITH_LINK_AND_CPN",Jwa:"ERROR_HDCP",Owa:"LICENSE",Rwa:"VIDEO_UNAVAILABLE",sEa:"FORMAT_UNAVAILABLE",yEa:"GEO_FAILURE",
TFa:"HTML5_AUDIO_RENDERER_ERROR",UFa:"GENERIC_WITHOUT_LINK",VFa:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK",WFa:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK",XFa:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK_SHORT",gGa:"HTML5_SPS_UMP_STATUS_REJECTED",oHa:"INVALID_DRM_MESSAGE",m1a:"PURCHASE_NOT_FOUND",n1a:"PURCHASE_REFUNDED",g2a:"RENTAL_EXPIRED",o2a:"RETRYABLE_ERROR",m3a:"SERVER_ERROR",D4a:"SIGNATURE_EXPIRED",d8a:"STOPPED_BY_ANOTHER_PLAYBACK",k9a:"STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",l9a:"STREAMING_NOT_ALLOWED",
m9a:"STREAM_LICENSE_NOT_FOUND",oab:"TOO_MANY_REQUESTS",pab:"TOO_MANY_REQUESTS_WITH_LINK",rab:"TOO_MANY_STREAMS_PER_ENTITLEMENT",sab:"TOO_MANY_STREAMS_PER_USER",ggb:"UNSUPPORTED_DEVICE",zgb:"VIDEO_FORBIDDEN",Ugb:"VIDEO_NOT_FOUND"};i3={};
g.xW=(i3.ALREADY_PINNED_ON_A_DEVICE="Ya has descargado este v\u00eddeo en el n\u00famero m\u00e1ximo de dispositivos que permite el propietario de los derechos de autor. Tienes que eliminarlo de otro dispositivo para poder verlo en este.",i3.DEVICE_FALLBACK="Este v\u00eddeo no est\u00e1 disponible en este dispositivo.",i3.GENERIC_WITH_LINK_AND_CPN="Se ha producido un error. Vuelve a intentarlo m\u00e1s tarde. (ID de reproducci\u00f3n: $CPN) $BEGIN_LINKM\u00e1s informaci\u00f3n$END_LINK",i3.LICENSE=
"Se ha producido un error de licencia con este v\u00eddeo.",i3.VIDEO_UNAVAILABLE="El v\u00eddeo no est\u00e1 disponible",i3.FORMAT_UNAVAILABLE="Este v\u00eddeo no est\u00e1 disponible en esa calidad. Vuelve a intentarlo.",i3.GEO_FAILURE="Este v\u00eddeo no est\u00e1 disponible en tu pa\u00eds.",i3.HTML5_AUDIO_RENDERER_ERROR="No se ha podido procesar el audio. Reinicia tu ordenador.",i3.GENERIC_WITHOUT_LINK="Se ha producido un error. Vuelve a intentarlo m\u00e1s tarde.",i3.HTML5_NO_AVAILABLE_FORMATS_FALLBACK=
"No se admite este formato de v\u00eddeo.",i3.HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK="Tu navegador no reconoce ninguno de los formatos de v\u00eddeo disponibles por el momento. $BEGIN_LINKHaz clic aqu\u00ed para consultar las preguntas frecuentes sobre el v\u00eddeo HTML5$END_LINK.",i3.HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK_SHORT="Este navegador no puede reproducir este v\u00eddeo. $BEGIN_LINKM\u00e1s informaci\u00f3n$END_LINK",i3.HTML5_SPS_UMP_STATUS_REJECTED="Se ha producido un error. Actualiza la p\u00e1gina o vuelve a intentarlo m\u00e1s tarde. $BEGIN_LINKM\u00e1s informaci\u00f3n$END_LINK",
i3.INVALID_DRM_MESSAGE="El mensaje espec\u00edfico del sistema DRM no es v\u00e1lido.",i3.PURCHASE_NOT_FOUND="Este v\u00eddeo es de pago.",i3.PURCHASE_REFUNDED="Te hemos devuelto el importe de este v\u00eddeo.",i3.RENTAL_EXPIRED="El periodo de alquiler de este v\u00eddeo ha finalizado.",i3.CAST_SESSION_DEVICE_MISMATCHED="El dispositivo de la transmisi\u00f3n no coincide con el solicitado.",i3.CAST_SESSION_VIDEO_MISMATCHED="El v\u00eddeo de la transmisi\u00f3n no coincide con el solicitado.",i3.CAST_TOKEN_FAILED=
"La transmisi\u00f3n no est\u00e1 disponible. Actualiza la p\u00e1gina o vuelve a intentarlo m\u00e1s tarde.",i3.CAST_TOKEN_EXPIRED="La transmisi\u00f3n ha caducado. Actualiza la p\u00e1gina.",i3.CAST_TOKEN_MALFORMED="La transmisi\u00f3n no es v\u00e1lida. Actualiza la p\u00e1gina o vuelve a intentarlo m\u00e1s tarde.",i3.SERVER_ERROR="Se ha producido un error en el servidor interno. Vuelve a intentarlo m\u00e1s tarde.",i3.STOPPED_BY_ANOTHER_PLAYBACK="Tu cuenta est\u00e1 reproduciendo este v\u00eddeo en otra ubicaci\u00f3n. Vuelve a cargar esta p\u00e1gina para reanudar la reproducci\u00f3n.",
i3.STREAM_LICENSE_NOT_FOUND="Se ha interrumpido la reproducci\u00f3n del v\u00eddeo. Vuelve a intentarlo.",i3.STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED="En un periodo de 24 horas se han utilizado demasiados dispositivos o direcciones IP.",i3.STREAMING_NOT_ALLOWED="No se permite la reproducci\u00f3n porque el v\u00eddeo est\u00e1 fijado a otro dispositivo.",i3.RETRYABLE_ERROR="Se ha producido un error temporal en el servidor. Vuelve a intentarlo m\u00e1s tarde.",i3.TOO_MANY_REQUESTS="Inicia sesi\u00f3n para ver este v\u00eddeo.",
i3.TOO_MANY_REQUESTS_WITH_LINK="Haz clic en $BEGIN_LINKeste enlace$END_LINK para ver este v\u00eddeo en YouTube.",i3.TOO_MANY_STREAMS_PER_USER="Se ha detenido la reproducci\u00f3n porque se est\u00e1n viendo demasiados v\u00eddeos de la misma cuenta.",i3.TOO_MANY_STREAMS_PER_ENTITLEMENT="Se ha detenido la reproducci\u00f3n porque el v\u00eddeo se ha visto en demasiados dispositivos.",i3.UNSUPPORTED_DEVICE="La reproducci\u00f3n no es compatible con este dispositivo.",i3.VIDEO_FORBIDDEN="El acceso a este v\u00eddeo est\u00e1 prohibido.",
i3.VIDEO_NOT_FOUND="No es posible encontrar este v\u00eddeo.",i3);
tBa={300:"STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",301:"ALREADY_PINNED_ON_A_DEVICE",303:"STOPPED_BY_ANOTHER_PLAYBACK",304:"TOO_MANY_STREAMS_PER_USER",305:"TOO_MANY_STREAMS_PER_ENTITLEMENT",400:"VIDEO_NOT_FOUND",401:"GEO_FAILURE",402:"STREAMING_NOT_ALLOWED",403:"UNSUPPORTED_DEVICE",405:"VIDEO_FORBIDDEN",500:"PURCHASE_NOT_FOUND",501:"RENTAL_EXPIRED",502:"PURCHASE_REFUNDED",5E3:"BAD_REQUEST",5001:"CGI_PARAMS_MISSING",5002:"CGI_PARAMS_MALFORMED",5100:"AUTHENTICATION_MISSING",5101:"AUTHENTICATION_MALFORMED",
5102:"AUTHENTICATION_EXPIRED",5200:"CAST_TOKEN_MALFORMED",5201:"CAST_TOKEN_EXPIRED",5202:"CAST_TOKEN_FAILED",5203:"CAST_SESSION_VIDEO_MISMATCHED",5204:"CAST_SESSION_DEVICE_MISMATCHED",6E3:"INVALID_DRM_MESSAGE",7E3:"SERVER_ERROR",8E3:"RETRYABLE_ERROR"};var Ojb;var Pjb=g.pc(),Qjb=Pjb.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Qjb||2>Qjb.length)Ojb=void 0;else{var Rjb=Pjb.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);Ojb=Rjb&&6===Rjb.length?Number(Rjb[5].replace("_",".")):0}var zT=Ojb,sW=0<=zT;var wBa=!1;g.w(g.mL,kD);g.mL.prototype.T=var j3={},KOa=(j3.FAIRPLAY="fairplay",j3.PLAYREADY="playready",j3.WIDEVINE="widevine",j3.CLEARKEY=null,j3.FLASHACCESS=null,j3.UNKNOWN=null,j3.WIDEVINE_CLASSIC=null,j3);nL.prototype.isMultiChannelAudio=var k3={},jQ=(k3.WIDTH={name:"width",video:!0,valid:640,Cn:99999},k3.HEIGHT={name:"height",video:!0,valid:360,Cn:99999},k3.FRAMERATE={name:"framerate",video:!0,valid:30,Cn:9999},k3.BITRATE={name:"bitrate",video:!0,valid:3E5,Cn:2E9},k3.EOTF={name:"eotf",video:!0,valid:"bt709",Cn:"catavision"},k3.CHANNELS={name:"channels",video:!1,valid:2,Cn:99},k3.CRYPTOBLOCKFORMAT={name:"cryptoblockformat",video:!0,valid:"subsample",Cn:"invalidformat"},k3.DECODETOTEXTURE={name:"decode-to-texture",video:!0,valid:"false",
Cn:"nope"},k3.AV1_CODECS={name:"codecs",video:!0,valid:"av01.0.05M.08",Cn:"av99.0.05M.08"},k3.EXPERIMENTAL={name:"experimental",video:!0,valid:"allowed",Cn:"invalid"},k3);var Sjb=["h","H"],Tjb=["9","("],Ujb=["9h","(h"],Vjb=["8","*"],Wjb=["a","A"],Xjb=["o","O"],Yjb=["m","M"],Zjb=["mac3","MAC3"],$jb=["meac3","MEAC3"],l3={},fPa=(l3.h=Sjb,l3.H=Sjb,l3["9"]=Tjb,l3["("]=Tjb,l3["9h"]=Ujb,l3["(h"]=Ujb,l3["8"]=Vjb,l3["*"]=Vjb,l3.a=Wjb,l3.A=Wjb,l3.o=Xjb,l3.O=Xjb,l3.m=Yjb,l3.M=Yjb,l3.mac3=Zjb,l3.MAC3=Zjb,l3.meac3=$jb,l3.MEAC3=$jb,l3),akb=new Set("o O a ah A m M mac3 MAC3 meac3 MEAC3 so sa".split(" ")),xMa=new Set("m M mac3 MAC3 meac3 MEAC3".split(" "));var m3={},rL=(m3["0"]="f",m3["160"]="h",m3["133"]="h",m3["134"]="h",m3["135"]="h",m3["136"]="h",m3["137"]="h",m3["264"]="h",m3["266"]="h",m3["138"]="h",m3["298"]="h",m3["299"]="h",m3["304"]="h",m3["305"]="h",m3["214"]="h",m3["216"]="h",m3["374"]="h",m3["375"]="h",m3["140"]="a",m3["141"]="ah",m3["327"]="sa",m3["258"]="m",m3["380"]="mac3",m3["328"]="meac3",m3["161"]="H",m3["142"]="H",m3["143"]="H",m3["144"]="H",m3["222"]="H",m3["223"]="H",m3["145"]="H",m3["224"]="H",m3["225"]="H",m3["146"]="H",m3["226"]=
"H",m3["227"]="H",m3["147"]="H",m3["384"]="H",m3["376"]="H",m3["385"]="H",m3["377"]="H",m3["149"]="A",m3["261"]="M",m3["381"]="MAC3",m3["329"]="MEAC3",m3["598"]="9",m3["278"]="9",m3["242"]="9",m3["243"]="9",m3["244"]="9",m3["775"]="9",m3["776"]="9",m3["777"]="9",m3["778"]="9",m3["779"]="9",m3["780"]="9",m3["781"]="9",m3["782"]="9",m3["783"]="9",m3["247"]="9",m3["248"]="9",m3["353"]="9",m3["355"]="9",m3["356"]="9",m3["271"]="9",m3["577"]="9",m3["313"]="9",m3["579"]="9",m3["272"]="9",m3["302"]="9",
m3["303"]="9",m3["407"]="9",m3["408"]="9",m3["308"]="9",m3["315"]="9",m3["330"]="9h",m3["331"]="9h",m3["332"]="9h",m3["333"]="9h",m3["334"]="9h",m3["335"]="9h",m3["336"]="9h",m3["337"]="9h",m3["338"]="so",m3["600"]="o",m3["250"]="o",m3["251"]="o",m3["194"]="*",m3["195"]="*",m3["220"]="*",m3["221"]="*",m3["196"]="*",m3["197"]="*",m3["279"]="(",m3["280"]="(",m3["317"]="(",m3["318"]="(",m3["273"]="(",m3["274"]="(",m3["357"]="(",m3["358"]="(",m3["275"]="(",m3["359"]="(",m3["360"]="(",m3["276"]="(",m3["583"]=
"(",m3["584"]="(",m3["314"]="(",m3["585"]="(",m3["561"]="(",m3["277"]="(",m3["361"]="(h",m3["362"]="(h",m3["363"]="(h",m3["364"]="(h",m3["365"]="(h",m3["366"]="(h",m3["591"]="(h",m3["592"]="(h",m3["367"]="(h",m3["586"]="(h",m3["587"]="(h",m3["368"]="(h",m3["588"]="(h",m3["562"]="(h",m3["409"]="(",m3["410"]="(",m3["411"]="(",m3["412"]="(",m3["557"]="(",m3["558"]="(",m3["394"]="1",m3["395"]="1",m3["396"]="1",m3["397"]="1",m3["398"]="1",m3["399"]="1",m3["400"]="1",m3["401"]="1",m3["571"]="1",m3["402"]=
"1",m3["694"]="1h",m3["695"]="1h",m3["696"]="1h",m3["697"]="1h",m3["698"]="1h",m3["699"]="1h",m3["700"]="1h",m3["701"]="1h",m3["702"]="1h",m3["703"]="1h",m3["386"]="3",m3["387"]="w",m3["406"]="6",m3["645"]="(",m3["646"]="(",m3["647"]="(",m3["648"]="(",m3["649"]="(",m3["650"]="(",m3["651"]="(",m3["652"]="(",m3["653"]="(",m3["654"]="(",m3["655"]="(",m3["656"]="(",m3["657"]="(",m3["658"]="(",m3["659"]="(",m3["660"]="(",m3["661"]="(",m3["662"]="(",m3["663"]="(",m3["664"]="(",m3["665"]="(",m3["666"]="(",
m3["667"]="(",m3["668"]="(",m3["669"]="(",m3["670"]="(",m3["671"]="(",m3["672"]="(",m3["673"]="(",m3["674"]="(h",m3["675"]="(h",m3["676"]="(h",m3["677"]="(h",m3["678"]="(h",m3["679"]="(h",m3["680"]="(h",m3["681"]="(h",m3["682"]="(h",m3["683"]="(h",m3["684"]="(h",m3["685"]="(h",m3["686"]="(h",m3["687"]="(h",m3["688"]="A",m3["689"]="A",m3["690"]="A",m3["691"]="MEAC3",m3["773"]="i",m3);var n3={},HOa=(n3.STEREO_LAYOUT_UNKNOWN=0,n3.STEREO_LAYOUT_LEFT_RIGHT=1,n3.STEREO_LAYOUT_TOP_BOTTOM=2,n3);var o3,ZP;o3={};g.oL=(o3.auto=0,o3.tiny=144,o3.light=144,o3.small=240,o3.medium=360,o3.large=480,o3.hd720=720,o3.hd1080=1080,o3.hd1440=1440,o3.hd2160=2160,o3.hd2880=2880,o3.highres=4320,o3);ZP={0:"auto",144:"tiny",240:"small",360:"medium",480:"large",720:"hd720",1080:"hd1080",1440:"hd1440",2160:"hd2160",2880:"hd2880",4320:"highres"};var qL="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");pL.prototype.isHdr=sL.prototype.Qe=function(){return 2===this.containerType};
sL.prototype.isEncrypted=function(){return!!this.le};
sL.prototype.zi=function(){return!!this.audio};
sL.prototype.eh=function(){return!!this.video};g.w(LL,g.AG);g.k=LL.prototype;g.k.appendBuffer=
g.k.abort=function(){this.Od.abort()};
g.k.remove=
g.k.Kf=
g.k.clear=function(){this.Od.clear()};
g.k.kR=function(a,b){this.appendWindowStart=a;this.appendWindowEnd=b};
g.k.dO=function(){return this.timestampOffset+this.start};
g.k.ZC=function(){return this.appendWindowStart};
g.k.DH=function(){return this.appendWindowEnd};
g.k.Rp=function(a){this.timestampOffset=a};
g.k.Rc=function(){return this.timestampOffset};
g.k.gf=
g.k.Yj=function(){return this.Od.Yj()};
g.k.bI=function(){return this.Od.bI()};
g.k.hm=function(){return this.Od.hm()};
g.k.HO=function(){return this.Od.HO()};
g.k.Dy=function(){this.Od.Dy()};
g.k.Fz=function(a){return this.Od.Fz(a)};
g.k.uv=function(){return this.Od.uv()};
g.k.KH=function(){return this.Od.KH()};
g.k.dS=function(a,b){this.Od.dS(a,b)};
g.k.supports=function(a){return this.Od.supports(a)};
g.k.MH=function(){return this.Od.MH()};
g.k.isView=function(){return!0};
g.k.OG=
g.k.isLocked=
g.k.vc=
g.k.LH=function(){return this.Od.LH()};
g.k.jD=function(){return this.Od.jD()};
g.k.YN=function(){return this.Od.YN()};
g.k.xa=var q_=!1;g.w(ML,g.AG);g.k=ML.prototype;g.k.appendBuffer=
g.k.abort=
g.k.remove=
g.k.Kf=
g.k.clear=
g.k.ZC=
g.k.DH=function(){var a;return(null==(a=this.hc)?void 0:a.appendWindowEnd)||0};
g.k.kR=
g.k.dO=function(){return this.timestampOffset};
g.k.Rp=
g.k.Rc=
g.k.gf=
g.k.Yj=
g.k.hm=function(){return this.UG};
g.k.HO=
g.k.Dy=function(){this.UG=!1};
g.k.Fz=
g.k.uv=function(){return this.VD};
g.k.KH=function(){return this.ZO};
g.k.dS=
g.k.MH=function(){return this.Jf};
g.k.isView=function(){return!1};
g.k.supports=
g.k.OG=
g.k.isLocked=function(){return!1};
g.k.vc=
g.k.bI=
g.k.LH=
g.k.xa=
g.k.jD=function(){return this.containerType};
g.k.YN=function(){return this.QA};
var KBa=!1,bkb=!1;OL.prototype.dispose=
OL.prototype.isDisposed=function(){return this.B};
OL.prototype.toString=g.w(PL,g.I);g.k=PL.prototype;g.k.getDuration=
g.k.ll=
g.k.Ng=
g.k.Yj=
g.k.isAsync=
g.k.V$=
g.k.U$=function(){this.dispose()};
g.k.g3=
g.k.BM=
g.k.clear=
g.k.hm=
g.k.Fz=
var NBa=!1,QL=!1;WL.prototype.then=function(a,b){return this.promise.then(a,b)};
WL.prototype.resolve=function(a){this.bR(a)};
WL.prototype.reject=g.w(XL,g.I);g.k=XL.prototype;g.k.tG=function(){return this.resource};
g.k.oy=
g.k.yq=
g.k.playVideo=
g.k.seekTo=
g.k.Xn=
g.k.stopVideo=
g.k.fz=
g.k.yv=
g.k.vc=
g.k.hasError=
g.k.addEventListener=
g.k.removeEventListener=
g.k.dispatchEvent=
g.k.lN=function(){this.K=!1};
g.k.hN=
g.k.pV=
g.k.xa=
var dkb=!1,ekb=!1,ckb=!1,$Ba=!1;g.k=g.ZL.prototype;g.k.isPaused=function(){return g.qH(this,4)};
g.k.isPlaying=
g.k.isCued=
g.k.isError=function(){return g.qH(this,128)};
g.k.isSuspended=
g.k.PD=
g.k.toString=
var p3={},q3=(p3.BUFFERING="buffering-mode",p3.CUED="cued-mode",p3.ENDED="ended-mode",p3.PAUSED="paused-mode",p3.PLAYING="playing-mode",p3.SEEKING="seeking-mode",p3.UNSTARTED="unstarted-mode",p3);g.w(iM,g.I);g.k=iM.prototype;g.k.yc=function(){return this.slot};
g.k.tb=function(){return this.layout};
g.k.init=
g.k.release=
g.k.gr=function(){};
g.k.rr=function(){};
g.k.startRendering=
g.k.Cc=
g.k.qw=
g.k.dI=
g.k.WW=function(){this.ZG()};
g.k.NW=
g.k.OW=
g.k.kz=
g.k.Mk=function(){var a;return(null==(a=this.Wa.get().jf(1))?void 0:a.clientPlaybackNonce)||""};
g.k.CH=
g.k.rf=
g.k.Tc=
g.k.ez=function(){return this.layout.layoutId};
g.k.CN=function(){return this.Iu};
g.k.zj=
g.k.lA=function(){if("rendering"===this.Lc){this.kb.Vc("active_view_measurable");var a,b=(null==(a=hM(this))?void 0:a.activeViewMeasurableCommands)||[];pK(this.Cb.get(),b,this.layout.layoutId)}};
g.k.kA=function(){if("rendering"===this.Lc){this.kb.Vc("active_view_fully_viewable_audible_half_duration");var a,b=(null==(a=hM(this))?void 0:a.activeViewFullyViewableAudibleHalfDurationCommands)||[];pK(this.Cb.get(),b,this.layout.layoutId)}};
g.k.mA=function(){if("rendering"===this.Lc){this.kb.Vc("active_view_viewable");var a,b=(null==(a=hM(this))?void 0:a.activeViewViewableCommands)||[];pK(this.Cb.get(),b,this.layout.layoutId)}};
g.k.iA=function(){if("rendering"===this.Lc){this.kb.Vc("audio_audible");var a,b=(null==(a=hM(this))?void 0:a.activeViewAudioAudibleCommands)||[];pK(this.Cb.get(),b,this.layout.layoutId)}};
g.k.jA=
g.k.HG=
g.k.onFullscreenToggled=
g.k.onVolumeChange=
g.k.uh=function(){};
g.k.Wk=function(){};
g.k.yj=function(){};
g.k.Vk=function(){};
g.k.Ch=function(a){this.kb.Ch(a,!this.SD)};
g.k.Vc=function(a){this.kb.Vc(a,!this.SD)};
g.k.ex=
g.k.cf=g.w(hCa,iM);g.k=hCa.prototype;g.k.Ws=function(){};
g.k.Pt=
g.k.Zt=
g.k.PY=
g.k.QW=function(){};
g.k.gr=
g.k.rr=
g.k.cz=
g.k.Fr=function(){this.mf.stop()};
g.k.Mc=
g.k.QY=function(){};
g.k.Zi=function(){};g.w(mM,iM);g.k=mM.prototype;g.k.Ws=
g.k.Pt=
g.k.Zt=
g.k.PY=
g.k.QW=function(){this.ZG()};
g.k.cz=
g.k.YJ=function(){this.kb.Ch("clickthrough")};
g.k.Fr=
g.k.onCueRangeEnter=
g.k.QY=
g.k.onCueRangeExit=function(){};
g.k.Zi=
g.k.kz=g.w(nCa,g.I);g.k=nCa.prototype;g.k.init=
g.k.release=
g.k.pJ=function(){};
g.k.vJ=
g.k.uJ=
g.k.startRendering=
g.k.rf=
g.k.yc=function(){return this.slot};
g.k.tb=function(){return this.layout};
g.k.gr=function(){this.j.gr()};
g.k.rr=function(){this.j.rr()};
g.k.uA=
g.k.Cc=function(a,b){this.j.Cc(a,b)};
g.k.Tc=
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.Zi=function(a){this.j.Zi(a)};
g.k.zj=
g.k.onFullscreenToggled=function(a){this.j.onFullscreenToggled(a)};
g.k.uh=function(a){this.j.uh(a)};
g.k.yj=function(a){this.j.yj(a)};
g.k.onVolumeChange=function(){this.j.onVolumeChange()};
g.k.Vk=function(){};
g.k.Wk=function(){};g.w(nM,g.I);g.k=nM.prototype;g.k.init=
g.k.release=
g.k.startRendering=
g.k.rf=
g.k.Tc=
g.k.zj=
g.k.Wk=function(){};
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.Vk=function(){};
g.k.cf=g.w(pCa,nM);g.k=pCa.prototype;g.k.yc=function(){return this.slot};
g.k.tb=function(){return this.layout};
g.k.Ws=
g.k.Pt=
g.k.pJ=function(){};
g.k.vJ=
g.k.uJ=
g.k.gr=function(a,b){var c=this.B[this.j];b.layoutId!==oM(c,a,b)?oH("pauseLayout for a PlayerBytes layout that is not currently active",a,b):c.gr()};
g.k.rr=
g.k.uA=
g.k.Zt=
g.k.Y$=
g.k.Fr=
g.k.Cc=
g.k.Tc=
g.k.hY=
g.k.Zi=function(a){var b=this.B[this.j];b&&b.Zi(a)};
g.k.aZ=function(a){var b=this.B[this.j];b&&b.zj(a)};
g.k.MW=
g.k.onFullscreenToggled=
g.k.uh=function(a){var b=this.B[this.j];b&&b.uh(a)};
g.k.yj=
g.k.onVolumeChange=
g.k.aaa=
g.k.jF=
g.k.Z$=g.w(yCa,nM);g.k=yCa.prototype;g.k.yc=function(){return this.j.yc()};
g.k.tb=function(){return this.j.tb()};
g.k.Ws=function(){this.j.init()};
g.k.Pt=function(){this.j.release()};
g.k.gr=function(){this.j.gr()};
g.k.rr=function(){this.j.rr()};
g.k.uA=
g.k.Zt=function(a){this.j.startRendering(a)};
g.k.Fr=function(a,b){this.j.rf(a,b)};
g.k.Cc=
g.k.Tc=
g.k.hY=function(){this.j.dI()};
g.k.Zi=function(a){this.j.Zi(a)};
g.k.aZ=function(a){this.j.zj(a)};
g.k.MW=
g.k.onFullscreenToggled=function(a){this.j.onFullscreenToggled(a)};
g.k.uh=function(a){this.j.uh(a)};
g.k.yj=function(a){this.j.yj(a)};
g.k.onVolumeChange=function(){this.j.onVolumeChange()};g.k=rM.prototype;g.k.yc=function(){return this.slot};
g.k.tb=function(){return this.layout};
g.k.init=
g.k.release=
g.k.startRendering=
g.k.rf=
g.k.RY=function(){return!1};
g.k.JY=
g.k.Zi=
g.k.uh=function(){};
g.k.Wk=function(){};
g.k.yj=function(){};
g.k.onVolumeChange=function(){};
g.k.Vk=function(){};g.w(ECa,rM);g.k=ECa.prototype;g.k.Ws=
g.k.Pt=
g.k.Zt=
g.k.Fr=
g.k.pJ=
g.k.vJ=function(){};
g.k.uJ=function(){};
g.k.zY=function(){};
g.k.zj=function(){};
g.k.onFullscreenToggled=function(){};g.k=UCa.prototype;g.k.yc=function(){return this.slot};
g.k.tb=function(){return this.layout};
g.k.init=
g.k.release=
g.k.startRendering=
g.k.rf=
g.k.qw=function(){};
g.k.dI=function(){};
g.k.WW=function(){};
g.k.Zi=function(a){var b=this;if(this.Lc){if(SK(this.kb,"impression")){var c=N1(this.Ia.get()),d=PJ(this.layout.Ca,"metadata_type_video_length_seconds");MCa(this.kb,c,a,this.Lc.In,d,function(e){return void VCa(b,e,"tpaqe")})}this.Lc.In=a}};
g.k.zj=function(a){var b=this;if(this.Lc){MN(this.Da.get())||this.Lc.rF||(this.Lc.rF=!0,a=new g.pH(a.state,new g.ZL));var c=PJ(this.layout.Ca,"metadata_type_video_length_seconds"),d=this.Ia.get().getCurrentTimeSec(2,!1);JCa(this.kb,this.Lc.In,a,c,d,!MN(this.Da.get()),function(){return void WCa(b,"teosc")})}};
g.k.onFullscreenToggled=function(a){NCa(this.kb,a)};
g.k.uh=function(){};
g.k.Wk=function(){};
g.k.yj=function(){};
g.k.uA=
g.k.onVolumeChange=function(){};
g.k.Cc=function(){};
g.k.Tc=function(){};
g.k.gr=function(){};
g.k.rr=function(){};
g.k.YJ=function(){OCa(this.kb)};
g.k.lA=function(){PCa(this.kb)};
g.k.kA=function(){QCa(this.kb)};
g.k.mA=function(){RCa(this.kb)};
g.k.iA=function(){SCa(this.kb)};
g.k.jA=function(){TCa(this.kb)};
g.k.Vk=function(){};g.w(YCa,rM);g.k=YCa.prototype;
g.k.Ws=
g.k.Pt=
g.k.Zt=
g.k.Fr=
g.k.zY=
g.k.zj=
g.k.onFullscreenToggled=
g.k.YJ=function(){OCa(this.kb)};
g.k.lA=function(){PCa(this.kb)};
g.k.kA=function(){QCa(this.kb)};
g.k.mA=function(){RCa(this.kb)};
g.k.iA=function(){SCa(this.kb)};
g.k.jA=function(){TCa(this.kb)};aDa.prototype.build=uM.prototype.build=g.w(bDa,zG);g.w(vM,IK);vM.prototype.startRendering=
vM.prototype.zg=
vM.prototype.xa=function(){IK.prototype.xa.call(this)};var cDa=new g.Ie(320,63);g.w(fDa,zG);g.w(yM,IK);g.k=yM.prototype;g.k.Zi=function(){};
g.k.zj=function(){};
g.k.onFullscreenToggled=function(){};
g.k.uh=function(a){a&&$N(this.D,this.layout)};
g.k.Wk=function(){};
g.k.yj=
g.k.onVolumeChange=function(){};
g.k.ez=function(){return this.tb().layoutId};
g.k.CN=function(){return this.Iu};
g.k.zg=function(a){this.G.zg(a);"in_video_overlay_close_button"===a&&$N(this.D,this.layout)};
g.k.eI=function(a){"invideo-overlay"===a&&$N(this.D,this.layout)};
g.k.Fp=function(){this.G.Fp()};
g.k.startRendering=function(a){IK.prototype.startRendering.call(this,a);this.callback.Cc(this.slot,a);this.K.Vr=this};
g.k.rf=function(a,b){IK.prototype.rf.call(this,a,b);y2(this.K,this)};
g.k.init=function(){IK.prototype.init.call(this);Hdb(this.Oa.get(),this);this.Ia.get().addListener(this);this.j.push(new fDa(xM(this.layout),JK(this.kb),this.layout.layoutId,{adsClientData:this.layout.kc}))};
g.k.release=function(){IK.prototype.release.call(this);this.Ia.get().removeListener(this);Idb(this.Oa.get(),this)};
g.k.Vk=function(){};g.w(zM,IK);g.k=zM.prototype;g.k.init=
g.k.Fp=function(){this.G.Fp()};
g.k.startRendering=
g.k.rf=
g.k.zg=
g.k.kO=function(a){if("invideo-overlay"===a){a=pGa(this.N,this.layout);a=g.u(a);for(var b=a.next();!b.done;b=a.next())b.value.stop()}};
g.k.eI=
g.k.jO=
g.k.Zi=function(){};
g.k.zj=function(){};
g.k.onFullscreenToggled=function(){};
g.k.uh=
g.k.Wk=function(){};
g.k.yj=
g.k.onVolumeChange=function(){};
g.k.ez=
g.k.CN=function(){return this.Iu};
g.k.release=
g.k.Vk=function(){};AM.prototype.zg=
AM.prototype.Fp=g.w(iDa,zG);g.w(jDa,IK);g.k=jDa.prototype;g.k.init=function(){IK.prototype.init.call(this);this.Ia.get().addListener(this)};
g.k.startRendering=
g.k.Cc=function(){};
g.k.zg=
g.k.yj=
g.k.onVolumeChange=function(){};
g.k.Zi=function(){};
g.k.onFullscreenToggled=function(){};
g.k.uh=function(){};
g.k.Wk=function(){};
g.k.zj=function(){};
g.k.Vk=function(){};
g.k.xa=
g.k.release=kDa.prototype.build=lDa.prototype.build=g.w(BM,$K);BM.prototype.startRendering=nDa.prototype.build=oDa.prototype.build=SM.prototype.clone=function(a){var b=this;return new SM(function(){return b.triggerId},a)};TM.prototype.clone=function(a){var b=this;return new TM(function(){return b.triggerId},a)};UM.prototype.clone=function(a){var b=this;return new UM(function(){return b.triggerId},a)};VM.prototype.clone=function(a){var b=this;return new VM(function(){return b.triggerId},a)};WM.prototype.clone=function(a){var b=this;return new WM(function(){return b.triggerId},a)};XM.prototype.clone=g.w(oN,g.I);var JEa={layoutExitMuteTriggers:[],layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],Wc:[],layoutExitUserInputSubmittedTriggers:[]};var kFa={WVdDU7FEFNo:15,"c-6Sb-muKCY":6,"O9f9wIR-UI8":6,"JNL-wFYNAP0":15,dLYcTkdHPNA:15,ZdVP0_LJZUE:15,VXcUXyDNdEI:15,VGQ8C9uQc_I:15,"o2HqYt-U7YU":15,rwNqPgKVbus:15,ATgzDto2XcY:15,attyPCCLlC4:15,w3aSYOeWyYU:15,wZMtuR2zzRA:30,e3TvPYADCQA:15,eMOw2R8yUHg:15,"6lLyZenufEY":15,"4q_FdWfUxR4":15,"3NOPsNQV0zY":15,IcEJuv4zMSI:15,"8Eo9vaW_CqY":15,O0DMDUDJK88:15,wnboazT1Lio:15,ZfRdOlbXmog:5,"X-sKfjrb7uc":15,RCVZbiJbZA0:6,"7syqtZsUUwY":15,OrlZSFgzFVA:15,ulrgBGVttFg:15,"1qC82K99ecI":15,E9lmhFAK78w:30,QSJFJNk_VSg:15,
"i-8wX-g3FjI":30,vgSkhTaAP6U:15,iqslKcmG9zA:15,VkNDKDDDSWA:15,"2-Sj3oWDJCk":6,z4zsVPqUVnc:15,xKc7UMf8V4s:15,wwrWuIYPaDE:6,"_5NVge-Kmpk":6,"eUdn6DcJx-4":6,gxvBLc_C6Io:15,O40oPma0obU:15,"6xXRRLxj3DA":15,T5sMvex24Os:15,"74ccAT84jIY":15,"YTlgTC-KM2U":15,XxcipO9EBWc:15,zI7xwG4M62k:15,XrUrvpDMmOk:15,H5KIgG21WjA:15,R94pfM1wcac:6,"TD0-7fMqNOE":5,_evnWGoDAT8:15,Wov4GF3oUSM:6,DKcQEuGWmp4:15,kp4aH06VQBg:15,CI3LdgGodUw:15,lcQzcg6e73Y:15};var DS={YOa:1,ZOa:2,aPa:3,1:"LOAD_POLICY_ALWAYS",2:"LOAD_POLICY_BY_PREFERENCE",3:"LOAD_POLICY_BY_REQUEST"};g.w(LN,g.I);g.k=LN.prototype;g.k.RY=
g.k.JY=function(){};
g.k.jk=
g.k.Mn=
g.k.xa=var g2=["metadata_type_content_cpn","metadata_type_player_bytes_callback_ref","metadata_type_instream_ad_player_overlay_renderer","metadata_type_ad_placement_config"],fkb=["metadata_type_content_cpn","metadata_type_player_bytes_callback_ref","metadata_type_player_overlay_layout_renderer","metadata_type_ad_placement_config"];g.w(PN,g.I);g.k=PN.prototype;g.k.Cc=
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Xf=function(){};
g.k.Bi=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};
g.k.Tc=function(){};g.w(QN,g.I);QN.prototype.jk=
QN.prototype.Mn=function(){};g.w(RN,g.I);g.w(SN,g.I);SN.prototype.onCueRangeEnter=function(){};
SN.prototype.onCueRangeExit=
SN.prototype.jk=
SN.prototype.Mn=function(){};g.w(TN,g.I);g.k=TN.prototype;g.k.yh=function(){};
g.k.Ei=
g.k.Xf=function(){};
g.k.Bi=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=
g.k.Pg=
g.k.Cc=function(a,b){this.Fj.set(a,b)};
g.k.Tc=function(a){this.Fj.delete(a)};
g.k.wh=function(){};g.k=fGa.prototype;g.k.init=function(){};
g.k.yc=function(){return this.slot};
g.k.sH=function(){this.callback.Xf(this.slot)};
g.k.vH=
g.k.release=function(){};UN.prototype.build=g.k=gGa.prototype;g.k.init=function(){};
g.k.yc=function(){return this.slot};
g.k.sH=
g.k.vH=
g.k.release=function(){};g.k=hGa.prototype;g.k.init=function(){};
g.k.yc=function(){return this.slot};
g.k.sH=
g.k.vH=
g.k.release=function(){};g.k=iGa.prototype;g.k.init=function(){};
g.k.yc=function(){return this.slot};
g.k.sH=
g.k.vH=
g.k.release=VN.prototype.build=g.w(WN,g.I);WN.prototype.j=g.w(XN,WN);g.k=XN.prototype;g.k.zg=
g.k.mO=
g.k.fl=function(a,b,c,d){if(this.Wb.has(b.triggerId))throw new NJ("Tried to register duplicate trigger for slot.");if(!(b instanceof YM||b instanceof RM))throw new NJ("Incorrect TriggerType: Tried to register trigger of type "+b.triggerType+" in AdUxUpdateTriggerAdapter.");this.Wb.set(b.triggerId,new ZM(a,b,c,d))};
g.k.Bl=function(a){this.Wb.delete(a.triggerId)};
g.k.kO=function(){};
g.k.jO=function(){};
g.k.eI=function(){};g.w(YN,g.I);g.k=YN.prototype;
g.k.fl=
g.k.Bl=function(a){this.Wb.delete(a.triggerId)};
g.k.yh=function(a){this.G.add(a.slotId);for(var b=[],c=g.u(this.Wb.values()),d=c.next();!d.done;d=c.next())d=d.value,d.trigger instanceof WM&&a.slotId===d.trigger.triggeringSlotId&&b.push(d);0<b.length&&fK(this.j(),b)};
g.k.Ei=
g.k.Bi=
g.k.Xf=
g.k.Yf=
g.k.Ci=function(a){for(var b=[],c=g.u(this.Wb.values()),d=c.next();!d.done;d=c.next())d=d.value,d.trigger instanceof UM&&a.slotId===d.trigger.triggeringSlotId&&b.push(d);0<b.length&&fK(this.j(),b)};
g.k.Di=
g.k.Sh=function(a,b){this.K.add(b.layoutId)};
g.k.Pg=
g.k.Cc=
g.k.Tc=
g.k.wh=function(){};
g.k.jk=function(){this.D.clear()};
g.k.Mn=function(){};g.w(ZN,g.I);ZN.prototype.fl=function(a,b,c,d){if(this.Wb.has(b.triggerId))throw new NJ("Tried to register duplicate trigger for slot.");if(!(b instanceof FM))throw new NJ("Incorrect TriggerType: Tried to register trigger of type "+b.triggerType+" in CloseRequestedTriggerAdapter");this.Wb.set(b.triggerId,new ZM(a,b,c,d))};
ZN.prototype.Bl=function(a){this.Wb.delete(a.triggerId)};g.w(aO,g.I);aO.prototype.fl=
aO.prototype.Bl=function(a){this.Wb.delete(a.triggerId)};
aO.prototype.jk=
aO.prototype.Mn=g.w(bO,g.I);g.k=bO.prototype;
g.k.fl=
g.k.Bl=
g.k.onCueRangeEnter=
g.k.onCueRangeExit=
g.k.zj=
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.Cc=
g.k.Tc=
g.k.wh=function(){};
g.k.Zi=function(){};
g.k.onFullscreenToggled=function(){};
g.k.uh=function(){};
g.k.Wk=function(){};
g.k.yj=function(){};
g.k.onVolumeChange=function(){};
g.k.Vk=function(){};g.w(cO,g.I);g.k=cO.prototype;
g.k.fl=
g.k.Bl=
g.k.pJ=
g.k.vJ=function(){};
g.k.uJ=function(){};g.w(dO,g.I);g.k=dO.prototype;g.k.fl=function(a,b,c,d){if(this.Wb.has(b.triggerId))throw new NJ("Tried to register duplicate trigger for slot.");if(!(b instanceof OM))throw new NJ("Incorrect TriggerType: Tried to register trigger of type "+b.triggerType+" in OnLayoutSelfRequestedTriggerAdapter");this.Wb.set(b.triggerId,new ZM(a,b,c,d))};
g.k.Bl=function(a){this.Wb.delete(a.triggerId)};
g.k.Cc=function(){};
g.k.Tc=function(){};
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=function(){};g.w(eO,g.I);g.k=eO.prototype;g.k.wh=
g.k.fl=
g.k.Bl=
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.Cc=function(){};
g.k.Tc=function(){};g.w(fO,g.I);g.k=fO.prototype;g.k.fl=
g.k.Bl=
g.k.yh=function(){};
g.k.Ei=function(){};
g.k.Bi=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Ci=function(){};
g.k.Di=function(){};
g.k.Sh=function(){};
g.k.Pg=function(){};
g.k.wh=
g.k.Cc=
g.k.Tc=function(){};g.w(gO,g.I);gO.prototype.fl=function(a,b,c,d){if(this.Wb.has(b.triggerId))throw new NJ("Tried to register duplicate trigger for slot.");if(!(b instanceof CM))throw new NJ("Incorrect TriggerType: Tried to register trigger of type "+b.triggerType+" in VideoTransitionTriggerAdapter.");this.Wb.set(b.triggerId,new ZM(a,b,c,d))};
gO.prototype.Bl=function(a){this.Wb.delete(a.triggerId)};g.w(lO,g.I);lO.prototype.logEvent=function(a){this.j(a)};
lO.prototype.j=
lO.prototype.zR=function(){return this.Da.get().zR()};g.w(mO,lO);mO.prototype.j=nO.prototype.clear=function(){this.j.clear()};var DGa=!1,pO,qO,rO,sO,tO;g.w(uO,g.I);
uO.prototype.encrypt=
uO.prototype.mK=var FGa=!1;(function(){function a(d){for(var e=new Uint8Array(d.length),f=0;f<d.length;f++)e[f]=d[f];return e}
function b(d){return new Uint8Array(d)}
var c=new Uint8Array([1]);return 1===c.length&&1===c[0]?b:a})();
var vO;GGa.prototype.bj=
GGa.prototype.toString=function(){return""};
var xO=[20,100,500,2E3];g.k=JGa.prototype;g.k.isActive=function(){return!0};
g.k.sI=
g.k.Yt=
g.k.Bs=
g.k.qk=
g.k.bW=
g.k.toString=function(){return""};g.k=MGa.prototype;g.k.isActive=function(){return!1};
g.k.sI=function(){};
g.k.Yt=function(){};
g.k.Bs=function(){};
g.k.qk=
g.k.bW=function(){return{}};
g.k.toString=function(){return""};var r3,gkb,hkb,ikb,jkb,kkb,s3,yO,JZ,Tbb,YR;r3=new MGa;gkb=!!+bC("html5_enable_profiler");hkb=!!+bC("html5_onesie_enable_profiler");ikb=!!+bC("html5_offline_encryption_enable_profiler");jkb=!!+bC("html5_performance_impact_profiling_timer_ms");kkb=!!+bC("html5_drm_enable_profiler");s3=gkb||hkb||ikb||jkb||kkb?new JGa:r3;g.CY=gkb?s3:r3;yO=hkb?s3:r3;JZ=ikb?s3:r3;Tbb=jkb?s3:r3;YR=kkb?s3:r3;g.w(zO,g.I);zO.prototype.encrypt=
zO.prototype.mK=g.AO.prototype.encrypt=
g.AO.prototype.B=
g.AO.prototype.j=
g.AO.prototype.decrypt=function(a,b){return this.encrypt(a,b)};
g.w(g.BO,g.I);g.BO.prototype.encrypt=
g.BO.prototype.decrypt=function(a,b){return this.encrypt(a,b)};
CO.prototype.encrypt=
CO.prototype.decrypt=function(a,b){return this.encrypt(a,b)};
CO.prototype.isDisposed=function(){return this.B.isDisposed()};
CO.prototype.dispose=function(){this.B.dispose()};OGa.prototype.reset=
OGa.prototype.update=
var DO=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var lkb;lkb={};g.mkb=g.rE("yt-idb-pref-storage",{Xq:(lkb.prefs={Vm:1},lkb),shared:!1,upgrade:
version:1});EO.prototype.getState=function(){return this.store.getState()};
EO.prototype.dispatch=function(a){return this.store.dispatch(a)};
EO.prototype.subscribe=function(a){return this.store.subscribe(a)};
EO.prototype.replaceReducer=function(a){return this.store.replaceReducer(a)};
EO.prototype[Symbol.observable]=g.k=FO.prototype;g.k.getLength=function(){return this.totalLength};
g.k.append=
g.k.split=
g.k.isFocused=
g.k.focus=var NO,LO,PO;g.OZ=);
NO=Array(1024);LO=window.TextDecoder?new TextDecoder:void 0;PO=window.TextEncoder?new TextEncoder:void 0;for(var nHa={buttonEntity:358,captionTrack:225,channelHandle:275,commerceAcquisitionClientPayloadEntity:276,commerceCartListEntity:236,continuationTokenEntity:406,downloadQualityPickerEntity:202,downloadsPageRefreshTokenEntity:299,downloadsPageViewConfigurationEntity:264,downloadStatusEntity:141,emojiFountainDataEntity:393,emojiCustomizationSetEntity:496,fakeChannel:2,fakePlaylist:279,fakePlaylistEntryCollection:280,fakeVideo:182,fakeVideoDescription:278,featuredProductsEntity:392,flowStateEntity:252,
iconBadgeEntity:229,interstitialInteractionStateEntity:443,liveChatPollStateEntity:217,logoEntity:245,macroMarkerEntity:329,mainDownloadsLibraryEntity:158,mainDownloadsListEntity:164,mainPlaylistDownloadStateEntity:373,mainPlaylistEntity:306,mainPlaylistVideoEntity:368,mainVideoDownloadStateEntity:262,mainVideoEntity:261,markersEngagementPanelSyncEntity:196,markersVisibilityOverrideEntity:312,musicAlbumReleaseDetail:18,musicAlbumReleaseDownloadMetadataEntity:259,musicAlbumRelease:17,musicAlbumReleaseUserDetail:19,
musicArtistDetail:21,musicArtist:20,musicArtistUserDetail:22,musicDownloadsLibraryEntity:257,musicLibraryEdit:121,musicLibraryStatusEntity:318,musicPlaylist:24,musicPlaylistDownloadMetadataEntity:248,musicShare:100,musicTrackDetail:29,musicTrackDownloadMetadataEntity:234,musicTrack:28,musicTrackUserDetail:30,offlineOrchestrationActionWrapperEntity:169,offlineVideoPolicy:130,offlineVideoStreams:198,offlineabilityEntity:246,orchestrationWebSamplingEntity:242,pageHeaderEntity:495,pinnedProductEntity:273,
playbackData:119,quantityIncrementerEntity:356,playerStateEntity:323,refresh:148,saveToPlaylistListEntity:231,settingEntity:297,transfer:120,trendingOfferEntity:469,videoDownloadContextEntity:461,videoPlaybackPositionEntity:76,ytMainChannelEntity:152,ytMainDownloadedVideoEntity:155,ytMainVideoEntity:151},mHa={},nkb=g.u(Object.entries(nHa)),okb=nkb.next();!okb.done;okb=nkb.next()){var pkb=g.u(okb.value),qkb=pkb.next().value,rkb=pkb.next().value,skb=qkb,tkb=rkb;tkb&&(mHa[tkb]=skb)};var t3;t3={};g.ukb=(t3.INVALID_ENCODER_VERSION="Invalid encoder version",t3.KEY_CREATION_FAILED="Failed to create encoder key",t3.UNKNOWN_DECODE_ERROR="Failed to decode PES data",t3.UNKNOWN_ENCODE_ERROR="Failed to encode PES data",t3.WRONG_DATA_TYPE="Encoder cannot process the data type",t3);var nP=window.Yjb||"es";var DLa=[3611,27686,85013,23462,157557,42016,26926,51236,79148,50160,77504,153587,87907,18630,177018,177023,54445,80935,152172,184553,105675,150723,37521,147285,47786,98349,168271,168954,168277,168273,168270,123695,6827,29434,171388,7282,124448,196088,198104,32276,195115,195114,76278,200635,147868,147869,93911,106531,177843,27259,27262,27263,21759,160866,204249,204250,180626,177959,177957,180628,197878,171243,160789,171244,171241,171245,171242,180627,177960,177958,180629,197879,177565,197337,197336,
197338,198618,175492,198052,198051,197852,197976,175493,175494,175495,189254,175496,175497,38408,175498,175503,175504,175505,175506,175507,175508,80637,68727,68728,80353,80356,180635,74610,45707,83962,83970,46713,166591,89711,74612,179607,155792,93265,74611,131380,128979,139311,128978,131391,105350,139312,134800,131392,113533,93252,99357,94521,114252,113532,94522,94583,202371,88E3,139580,93253,93254,94387,94388,93255,97424,72502,110111,76019,117092,117093,89431,191831,110466,77240,60508,186091,148123,
148124,137401,137402,137046,73393,113534,92098,131381,84517,83759,162711,162712,80357,86113,72598,168413,72733,107349,124275,118203,200410,133275,160157,152569,156651,133274,160159,160158,133272,133273,133276,144507,143247,175994,156652,143248,143249,143250,143251,189892,189894,189893,156653,144401,117431,133797,153964,201133,201134,201135,201136,201137,128572,200411,200412,190337,133405,117429,117430,177950,174734,177951,201138,201139,201140,201141,201142,117432,173996,173995,174953,173994,173997,
120080,117259,178546,197891,156655,156654,121692,184846,185993,145656,156656,145655,145653,145654,145657,132972,133051,133658,132971,97615,181262,190762,143359,143356,143361,143358,143360,143357,142303,143353,172859,143354,144479,143355,31402,181590,133624,146477,133623,133622,133621,192418,84774,197993,160801,197995,95117,172721,150497,98930,98931,98932,153320,153321,43347,129889,197888,197889,149123,45474,100352,98443,117985,74613,155911,74614,64502,136032,74615,74616,122224,74617,77820,74618,93278,
93274,93275,93276,200688,200686,200687,199841,22110,29433,133798,132295,120541,82047,113550,75836,75837,192409,203221,42352,84512,76065,75989,51879,16623,32594,27240,32633,74858,156999,3945,16989,45520,25488,25492,25494,55760,14057,18451,57204,57203,17897,18198,17898,17909,43980,195529,189660,46220,11721,147994,49954,96369,3854,151633,56251,159108,181568,25624,152036,16906,99999,68172,47973,72773,26970,26971,96805,17752,73233,109512,22256,14115,22696,89278,89277,195745,109513,43278,43459,43464,89279,
43717,55764,22255,147912,89281,40963,43277,43442,91824,120137,186350,186351,96367,36850,72694,37414,36851,124863,121343,73491,54473,166861,43375,46674,143815,139095,144402,149968,149969,32473,72901,72906,50612,50613,50942,84938,84943,84939,84941,84944,84940,84942,35585,51926,79983,18921,57893,41182,135732,33424,22207,36229,22206,22205,44763,33427,67793,22182,37091,34650,50617,22287,25144,97917,62397,150871,150874,125598,137935,36961,108035,27426,27857,27846,27854,69692,61411,39299,38696,62520,36382,
108701,192682,50663,36387,14908,37533,105443,61635,62274,161670,133818,182119,65702,65703,65701,76256,196075,194768,194769,191885,194770,195350,195349,194771,166382,37671,49953,191389,187917,191390,179556,191402,191392,197826,191393,36216,28237,173718,39553,192547,29222,26107,38050,26108,120745,26109,26110,66881,28236,14586,160598,57929,74723,44098,173689,44099,23528,61699,134104,134103,198313,59149,181013,173191,173192,173193,101951,171502,196043,198305,97346,118051,95102,64882,119505,63595,63349,
95101,75240,27039,68823,21537,83464,75707,170215,83113,101952,101953,79610,125755,24402,24400,32925,193406,57173,183351,156421,122502,145268,138480,64423,64424,33986,100828,129089,21409,185612,135155,135156,135157,135158,158225,135159,135160,167651,135161,135162,135163,158226,158227,135164,135165,135166,11070,11074,17880,30709,30707,30711,30710,30708,185213,185273,146143,63648,63649,111059,5754,20445,151308,151152,130975,130976,191925,167637,197196,110386,113746,66557,183215,17310,28631,201935,21589,
164817,168011,154946,68012,162617,60480,184431,138664,194E3,141121,164502,31571,195002,141978,150105,150106,150107,150108,76980,41577,45469,38669,13768,13777,141842,62985,4724,59369,43927,43928,12924,197853,100355,56219,27669,10337,203648,203649,47896,122629,186204,139723,139722,121258,107598,127991,96639,107536,130169,96661,145188,96658,116646,159428,168611,168612,121122,96660,127738,127083,155281,162959,163566,186641,147842,104443,96659,147595,106442,182423,162776,134840,63667,63668,63669,130686,
147036,189810,78314,147799,174049,148649,55761,127098,134841,96368,67374,48992,146176,176105,49956,190190,31961,26388,23811,5E4,126250,96370,47355,47356,37935,45521,21760,83769,49977,49974,93497,93498,34325,140759,115803,123707,100081,35309,68314,25602,100339,170873,143516,178921,59018,18248,50625,9729,37168,37169,21667,16749,18635,39305,18046,53969,8213,93926,102852,110099,22678,69076,137575,139224,100856,154430,17736,3832,147111,55759,64031,93044,93045,170701,170702,194796,34388,167841,170419,17657,
17655,39579,39578,170412,77448,8196,11357,69877,8197,168501,156512,161613,156509,161612,161614,82039];var Ibb={adNotify:
biscottiBasedDetection:
adNotifyFilled:function(a){var b=new fz,c=0;try{var d=a.notifyCompositeType;void 0!==d&&(S(b,1,Uhb[d]),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}},
idbTransactionEnded:
idbUnexpectedlyClosed:function(a){var b=new Gna,c=0;try{var d=a.dbName;void 0!==d&&(O(b,1,d),c++);var e=a.dbVersion;void 0!==e&&(Wj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}},
flowEvent:
idbQuotaExceeded:function(a){var b=new Ena,c=0;try{var d=a.deviceStorageUsageMbytes;void 0!==d&&(Yj(b,1,d),c++);var e=a.deviceStorageQuotaMbytes;void 0!==e&&(Yj(b,2,e),c++);var f=a.isIframe;void 0!==f&&(Vj(b,3,f),c++);var h=a.isSw;void 0!==h&&(Vj(b,4,h),c++);var l=a.dbName;void 0!==l&&(O(b,5,l),c++);var m=a.objectStoreNames;void 0!==m&&(O(b,6,m),c++);var n=a.transactionCount;void 0!==n&&(Wj(b,7,n),c++);var p=a.transactionMode;void 0!==p&&(O(b,8,p),c++);return[c===Object.keys(a).length,b]}catch(q){return Y(q),
[!1,void 0]}},
idbTransactionAborted:function(a){var b=new Fna,c=0;try{var d=a.objectStoreNames;void 0!==d&&(O(b,1,d),c++);var e=a.hasWindowUnloaded;void 0!==e&&(Vj(b,2,e),c++);var f=a.transactionCount;void 0!==f&&(Wj(b,3,f),c++);var h=a.transactionDuration;void 0!==h&&(Wj(b,4,h),c++);var l=a.dbDuration;void 0!==l&&(Wj(b,5,l),c++);return[c===Object.keys(a).length,b]}catch(m){return Y(m),[!1,void 0]}},
streamzIncremented:function(a){var b=new $na,c=0;try{var d=a.serializedIncrementBatch;void 0!==d&&(zk(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}},
sliEventBatch:
playbackAssociated:
autoplayTriggered:function(a){var b=new Cma,c=0;try{var d=a.intentional;void 0!==d&&(Vj(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}},
webPlayerApiCalled:
embedsAdEvent:
embedsShouldRequestStorageAccessResult:function(a){var b=new Ema,c=0;try{var d=a.result;void 0!==d&&(Vj(b,1,d),c++);var e=a.returnsUndefined;void 0!==e&&(Vj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}},
embedsRequestStorageAccessState:function(a){var b=new Dma,c=0;try{var d=a.isCued;void 0!==d&&(Vj(b,1,d),c++);var e=a.isAutoplayBlocked;void 0!==e&&(Vj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}},
embedsRequestStorageAccessFailedState:
heartbeatActionPlayerHalted:function(a){var b=new Cna,c=0;try{var d=a.serializedServerContext;void 0!==d&&(zk(b,1,d),c++);var e=a.enforcedPolicyToHaltOnNetworkFailure;void 0!==e&&(Vj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}},
heartbeatActionPlayerTransitioned:function(a){var b=new Dna,c=0;try{var d=a.reason;void 0!==d&&(S(b,1,xib[d]),c++);var e=a.trigger;void 0!==e&&(S(b,2,yib[e]),c++);var f=a.serializedServerContext;void 0!==f&&(zk(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return Y(h),[!1,void 0]}},
embedsItpWatchLaterResult:function(a){var b=new Fma,c=0;try{var d=a.accepted;void 0!==d&&(Vj(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}},
html5PlayerHealthEvent:
adsClientStateChange:
offlineTransferStatusChanged:NJa,offlineStateSnapshot:,Jbb={adNotify:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;
Kj(d,gz,184,UF,a);c?SF("adNotify",d,c,b):TF("adNotify",d,b)},
biscottiBasedDetection:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,TA,439,UF,a);c?SF("biscottiBasedDetection",d,c,b):TF("biscottiBasedDetection",d,b)},
adNotifyFilled:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,fz,300,UF,a);c?SF("adNotifyFilled",d,c,b):TF("adNotifyFilled",d,b)},
idbTransactionEnded:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,yB,352,UF,a);c?SF("idbTransactionEnded",d,c,b):TF("idbTransactionEnded",d,b)},
idbUnexpectedlyClosed:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Gna,348,UF,a);c?SF("idbUnexpectedlyClosed",d,c,b):TF("idbUnexpectedlyClosed",d,b)},
flowEvent:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Ana,304,UF,a);c?SF("flowEvent",d,c,b):TF("flowEvent",d,b)},
idbQuotaExceeded:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Ena,351,UF,a);c?SF("idbQuotaExceeded",d,c,b):TF("idbQuotaExceeded",d,b)},
idbTransactionAborted:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Fna,353,UF,a);c?SF("idbTransactionAborted",d,c,b):TF("idbTransactionAborted",d,b)},
streamzIncremented:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,$na,126,UF,a);c?SF("streamzIncremented",d,c,b):TF("streamzIncremented",d,b)},
sliEventBatch:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,YA,344,UF,a);c?SF("sliEventBatch",d,c,b):TF("sliEventBatch",d,b)},
playbackAssociated:vua,autoplayTriggered:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Cma,209,UF,a);c?SF("autoplayTriggered",d,c,b):TF("autoplayTriggered",d,b)},
webPlayerApiCalled:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,WB,76,UF,a);c?SF("webPlayerApiCalled",d,c,b):TF("webPlayerApiCalled",d,b)},
embedsAdEvent:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Bma,327,UF,a);c?SF("embedsAdEvent",d,c,b):TF("embedsAdEvent",d,b)},
embedsShouldRequestStorageAccessResult:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Ema,251,UF,a);c?SF("embedsShouldRequestStorageAccessResult",d,c,b):TF("embedsShouldRequestStorageAccessResult",d,b)},
embedsRequestStorageAccessState:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Dma,256,UF,a);c?SF("embedsRequestStorageAccessState",d,c,b):TF("embedsRequestStorageAccessState",d,b)},
embedsRequestStorageAccessFailedState:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,ZA,257,UF,a);c?SF("embedsRequestStorageAccessFailedState",d,c,b):TF("embedsRequestStorageAccessFailedState",d,b)},
heartbeatActionPlayerHalted:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Cna,332,UF,a);c?SF("heartbeatActionPlayerHalted",d,c,b):TF("heartbeatActionPlayerHalted",d,b)},
heartbeatActionPlayerTransitioned:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Dna,330,UF,a);c?SF("heartbeatActionPlayerTransitioned",d,c,b):TF("heartbeatActionPlayerTransitioned",d,b)},
embedsItpWatchLaterResult:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Fma,266,UF,a);c?SF("embedsItpWatchLaterResult",d,c,b):TF("embedsItpWatchLaterResult",d,b)},
html5PlayerHealthEvent:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,xB,293,UF,a);c?SF("html5PlayerHealthEvent",d,c,b):TF("html5PlayerHealthEvent",d,b)},
adsClientStateChange:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,Rz,197,UF,a);c?SF("adsClientStateChange",d,c,b):TF("adsClientStateChange",d,b)},
offlineTransferStatusChanged:function(a,b,c){var d=g.cC("jspb_sparse_encoded_pivot")?new XB([{}]):new XB;Kj(d,iB,2,UF,a);c?SF("offlineTransferStatusChanged",d,c,b):TF("offlineTransferStatusChanged",d,b)},
offlineStateSnapshot:;HP.prototype.Sw=function(a){this.client=a};
HP.prototype.j=
HP.prototype.clear=JP.prototype.Sw=
JP.prototype.clear=g.k=KP.prototype;g.k.Sw=function(a){this.client=a};
g.k.yV=
g.k.clickCommand=
g.k.stateChanged=
g.k.visualElementStateChanged=PP.getInstance=
PP.prototype.estimate=
g.Ua("ytglobal.storageClass_",PP);Zpa.prototype.bE=function(a){this.handleError(a)};
Zpa.prototype.logEvent=var u3={},iRa=g.rE("yt-player-local-media",{Xq:(u3.index={Vm:2},u3.media={Vm:2},u3.captions={Vm:5},u3),shared:!1,upgrade:
version:5});var vkb={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},v3;a:{var w3=g.pc();w3=w3.toLowerCase();if(g.jc(w3,"android")){var wkb=w3.match(/android\s*(\d+(\.\d+)?)[^;|)]*[;)]/);if(wkb){var xkb=parseFloat(wkb[1]);if(100>xkb){v3=xkb;break a}}var ykb=w3.match("("+Object.keys(vkb).join("|")+")");v3=ykb?vkb[ykb[0]]:0}else v3=void 0}var xS=v3,cQa=0<=xS;var S9a=window;var NLa=Sd(;var PLa;g.NI=new PI;PLa=0;var QP={UV:function(a,b){a.splice(0,b)},
rb:
SE:function(a){a.reverse()}};var Nab=new Set(["embed_config","endscreen_ad_tracking","home_group_info","ic_track"]);var $Pa={ria:"adunit",gva:"detailpage",Uva:"editpage",dwa:"embedded",JLa:"leanback",Y_a:"previewpage",i1a:"profilepage",vU:"unplugged",g_a:"playlistoverview",I7a:"sponsorshipsoffer",w4a:"shortspage",MEa:"handlesclaiming",wGa:"immersivelivepage",vta:"creatormusic",xGa:"immersivelivepreviewpage"};var GRa={tva:1,xwa:2,PAUSED:3,1:"DISABLED",2:"ENABLED",3:"PAUSED"};var $R=jMa()?!0:"function"===typeof window.fetch&&window.ReadableStream&&window.AbortController&&!g.nE?!0:!1;g.VP.prototype.getLanguageInfo=function(){return this.Oc};
g.VP.prototype.getXtags=
g.VP.prototype.toString=function(){return this.Oc.name};
g.VP.prototype.getLanguageInfo=g.VP.prototype.getLanguageInfo;WP.prototype.isLocked=
WP.prototype.compose=
WP.prototype.D=
var zkb=g.XP("auto","hd1080",!1,"l"),c9a=g.XP("auto","large",!1,"l"),uT=g.XP("auto","auto",!1,"p");bQ.prototype.Hs=
bQ.prototype.dD=
bQ.prototype.getAvailableAudioTracks=function(){return this.audioTracks};var DMa=new Set(["356"]);g.w(mMa,g.I);mMa.prototype.xa=function(){g.I.prototype.xa.call(this)};g.kQ.prototype.set=
g.kQ.prototype.get=
g.kQ.prototype.Pe=function(){this.url||(this.url=KMa(this));return this.url};
g.kQ.prototype.clone=
var JMa=[bma];g.k=g.rQ.prototype;g.k.CL=function(a){this.segments.push(a)};
g.k.zn=
g.k.getDuration=function(a){return(a=this.dn(a))?a.duration:0};
g.k.jW=function(a){return this.getDuration(a)};
g.k.hn=
g.k.hf=
g.k.Ed=
g.k.PO=
g.k.Ms=
g.k.Ld=
g.k.iz=function(){return this.segments.length};
g.k.Xl=function(){return 0};
g.k.xi=
g.k.WH=function(a){return(a=this.dn(a))?a.sourceURL:""};
g.k.getStartTime=
g.k.GH=function(a){return this.getStartTime(a)+this.getDuration(a)};
g.k.YH=ca(3);g.k.isLoaded=function(){return 0<this.segments.length};
g.k.dn=
g.k.Wy=
g.k.append=
g.k.qW=function(){return 0};OMa.prototype.skip=function(a){this.j+=a};var x3={},Akb=(x3.predictStart="predictStart",x3.start="start",x3["continue"]="continue",x3.stop="stop",x3),SMa={EVENT_PREDICT_START:"predictStart",EVENT_START:"start",EVENT_CONTINUE:"continue",EVENT_STOP:"stop"};BQ.prototype.BD=
BQ.prototype.toString=LQ.prototype.En=YQ.prototype.set=
YQ.prototype.get=
YQ.prototype.Pe=ZQ.prototype.toString=cR.prototype.isEncrypted=function(){return this.j.info.isEncrypted()};
cR.prototype.eh=function(){return!!this.j.info.video};
cR.prototype.Kd=iR.prototype.Yy=function(){return this.j?this.j.Pe():""};
iR.prototype.Zo=
iR.prototype.Pk=
var JNa=!1;nR.prototype.Uj=
nR.prototype.Pk=oR.prototype.fg=function(){return!!this.j&&this.index.isLoaded()};
oR.prototype.Ez=function(){return!1};
oR.prototype.AT=function(a){return[a]};
oR.prototype.OA=g.w(pR,oR);g.k=pR.prototype;g.k.jm=function(){return!1};
g.k.Nv=function(){return!0};
g.k.ND=function(){return!1};
g.k.Ez=function(){return!this.G};
g.k.zv=
g.k.Hx=function(){return null};
g.k.RB=
g.k.zq=
g.k.lO=function(a){oOa(a)};
g.k.Sr=function(a){return 0===a.B?!0:this.index.Ed()>a.Pa&&this.index.hn()<=a.Pa+1};
g.k.update=
g.k.fg=
g.k.Tr=
g.k.TN=
g.k.zQ=function(){return!1};sR.prototype.update=
sR.prototype.getStreamTimeOffset=g.w(cOa,g.rQ);g.k=cOa.prototype;g.k.zn=
g.k.hn=
g.k.Ld=
g.k.Ms=
g.k.iz=
g.k.Ed=
g.k.vv=function(){return this.segments.length?this.segments[this.segments.length-1]:null};
g.k.CL=
g.k.JH=function(){return this.yp};
g.k.Wy=
g.k.dn=g.w(uR,pR);g.k=uR.prototype;g.k.ND=function(){return!0};
g.k.fg=function(){return!0};
g.k.Sr=
g.k.zv=function(){};
g.k.zq=
g.k.Tr=g.w(vR,oR);g.k=vR.prototype;g.k.jm=function(){return!1};
g.k.Nv=function(){return!1};
g.k.ND=function(){return!1};
g.k.zv=
g.k.Hx=function(){return null};
g.k.RB=
g.k.zq=
g.k.lO=
g.k.Sr=
g.k.TN=function(){return 0};
g.k.zQ=function(){return!1};g.k=g.pOa.prototype;g.k.zn=
g.k.Xl=function(a){return this.offsets[a]};
g.k.getStartTime=
g.k.GH=
g.k.YH=ca(2);g.k.hf=function(){return NaN};
g.k.getDuration=
g.k.jW=
g.k.hn=function(){return 0};
g.k.Ed=function(){return this.count-1};
g.k.PO=
g.k.Ms=
g.k.Ld=function(){return 0};
g.k.iz=function(){return this.count};
g.k.WH=function(){return""};
g.k.xi=
g.k.isLoaded=
g.k.qW=
g.k.resize=
g.k.cap=g.w(AR,oR);g.k=AR.prototype;g.k.zv=
g.k.lO=
g.k.qD=
g.k.AT=
g.k.OA=
g.k.Sr=
g.k.Hx=
g.k.RB=function(){return null};
g.k.zq=
g.k.jm=function(){return!0};
g.k.Nv=function(){return!0};
g.k.ND=function(){return!1};
g.k.TN=
g.k.zQ=var y3={},IOa=(y3.COLOR_PRIMARIES_BT709="bt709",y3.COLOR_PRIMARIES_BT2020="bt2020",y3.COLOR_PRIMARIES_UNKNOWN=null,y3.COLOR_PRIMARIES_UNSPECIFIED=null,y3),z3={},tOa=(z3.COLOR_TRANSFER_CHARACTERISTICS_BT709="bt709",z3.COLOR_TRANSFER_CHARACTERISTICS_BT2020_10="bt2020",z3.COLOR_TRANSFER_CHARACTERISTICS_SMPTEST2084="smpte2084",z3.COLOR_TRANSFER_CHARACTERISTICS_ARIB_STD_B67="arib-std-b67",z3.COLOR_TRANSFER_CHARACTERISTICS_UNKNOWN=null,z3.COLOR_TRANSFER_CHARACTERISTICS_UNSPECIFIED=null,z3);g.BR.prototype.getName=function(){return this.name};
g.BR.prototype.getId=function(){return this.id};
g.BR.prototype.getIsDefault=function(){return this.isDefault};
g.BR.prototype.toString=function(){return this.name};
g.BR.prototype.getName=g.BR.prototype.getName;g.BR.prototype.getId=g.BR.prototype.getId;g.BR.prototype.getIsDefault=g.BR.prototype.getIsDefault;var yOa=/action_display_post/;var zOa;g.w(DR,g.AG);g.k=DR.prototype;g.k.isLoading=function(){return 1===this.state};
g.k.im=function(){return 3===this.state};
g.k.zaa=
g.k.refresh=
g.k.resume=function(){TOa(this)};
g.k.Ne=
g.k.Ld=
g.k.getStreamTimeOffset=function(){return this.K};
g.k.hf=
var LR=null,Bkb,dPa=!(null==(Bkb=navigator.mediaCapabilities)||!Bkb.decodingInfo),ROa={commentary:1,alternate:2,dub:3,main:4};MR.prototype.clone=
MR.prototype.vc=function(){return{flavor:this.flavor,keySystem:this.keySystem}};
MR.prototype.oh=
var Ckb={},iPa=(Ckb.playready=["com.youtube.playready","com.microsoft.playready"],Ckb.widevine=["com.youtube.widevine.l3","com.widevine.alpha"],Ckb),A3={},P8a=(A3.widevine="DRM_SYSTEM_WIDEVINE",A3.fairplay="DRM_SYSTEM_FAIRPLAY",A3.playready="DRM_SYSTEM_PLAYREADY",A3),B3={},Dkb=(B3.widevine=1,B3.fairplay=2,B3.playready=3,B3);var WR;g.w(VR,g.I);
VR.prototype.initialize=
VR.prototype.L=var wbb={"":"LIVE_STREAM_MODE_UNKNOWN",dvr:"LIVE_STREAM_MODE_DVR",lp:"LIVE_STREAM_MODE_LP",post:"LIVE_STREAM_MODE_POST",window:"LIVE_STREAM_MODE_WINDOW",live:"LIVE_STREAM_MODE_LIVE"};var dQa={RED:"red",rjb:"white"};sPa.prototype.ob=var vPa=Promise.resolve(),APa=window.queueMicrotask?window.queueMicrotask.bind(window):wPa;xPa.prototype.canPlayType=
xPa.prototype.isTypeSupported=
var Fkb={'video/mp4; codecs="avc1.42001E, mp4a.40.2"':"maybe"},Gkb={"application/x-mpegURL":"maybe"},Ekb={"application/x-mpegURL":"maybe"};g.w(cS,g.AG);cS.prototype.add=
cS.prototype.remove=
cS.prototype.get=
cS.prototype.isEmpty=function(){return g.nd(this.items)};g.w(dS,g.AO);dS.prototype.j=function(a,b){var c=yO.Yt("oap");b=g.AO.prototype.j.call(this,a,b);yO.Bs(c,Math.ceil(a.length/16));return b};
dS.prototype.B=
g.w(eS,g.BO);eS.prototype.encrypt=
g.w(fS,CO);fS.prototype.encrypt=hS.prototype.Ck=
hS.prototype.Vi=iS.prototype.Ck=
iS.prototype.Vi=g.w(KPa,g.I);KPa.prototype.Ga=g.w(TPa,g.I);var aQa="blogger gac books docs duo flix google-live google-one play shopping chat hangouts-meet photos-edu picasaweb gmail jamboard".split(" "),kQa={Kma:"caoe",fpa:"cbrand",opa:"cbr",ppa:"cbrver",Mra:"cchip",jsa:"ccappver",ksa:"ccrv",uCa:"cfrmver",hHa:"c",kHa:"cver",jHa:"ctheme",iHa:"cplayer",rTa:"cmodel",eUa:"cnetwork",yYa:"cos",zYa:"cosver",sZa:"cplatform",k2a:"crqyear"};g.w(iQa,g.I);g.k=iQa.prototype;g.k.L=function(a){return this.experiments.ob(a)};
g.k.getWebPlayerContextConfig=function(){return this.webPlayerContextConfig};
g.k.getVideoUrl=
g.k.getVideoEmbedCode=
g.k.supportsGaplessAudio=
g.k.supportsGaplessShorts=
g.k.getPlayerType=function(){return this.j.cplayer};
g.k.Sc=function(){return this.Qf};
g.k.Ht=function(){this.L("html5_enable_lawnmower_messaging")};
var qQa=["www.youtube-nocookie.com","youtube.googleapis.com","www.youtubeeducation.com","youtubeeducation.com"],jQa=["EMBEDDED_PLAYER_LITE_MODE_UNKNOWN","EMBEDDED_PLAYER_LITE_MODE_NONE","EMBEDDED_PLAYER_LITE_MODE_FIXED_PLAYBACK_LIMIT","EMBEDDED_PLAYER_LITE_MODE_DYNAMIC_PLAYBACK_LIMIT"],nQa=[19];g.k=SS.prototype;g.k.oh=function(){return this.j};
g.k.SB=function(){return null};
g.k.kW=
g.k.iR=function(){};
g.k.getHeight=function(){return this.j.video.height};
var rQa=!1;sQa.prototype.build=
var Hkb="text";g.w(US,SS);US.prototype.kW=function(){return this.expiration};
US.prototype.SB=g.w(VS,SS);VS.prototype.SB=
VS.prototype.iR=g.w(WS,SS);WS.prototype.SB=var Ikb={},IQa=(Ikb.PLAYABILITY_ERROR_CODE_VIDEO_BLOCK_BY_MRM="mrm.blocked",Ikb.PLAYABILITY_ERROR_CODE_PERMISSION_DENIED="auth",Ikb);g.k=g.XS.prototype;g.k.getId=function(){return this.id};
g.k.getName=function(){return this.name};
g.k.isServable=function(){return this.j};
g.k.Pe=function(){return this.url};
g.k.toString=
g.k.Fe=var NQa={"ad-trueview-indisplay-pv":6,"ad-trueview-insearch":7},OQa={"ad-trueview-indisplay-pv":2,"ad-trueview-insearch":2},PQa=/^(\d*)_((\d*)_?(\d*))$/;var RQa={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"},SQa={120:"default.jpg",320:"mqdefault.jpg",480:"hqdefault.jpg",560:"pop1.jpg",640:"sddefault.jpg",854:"pop2.jpg",1280:"hq720.jpg"};var C3={},KRa=(C3.ALWAYS=1,C3.BY_REQUEST=3,C3.UNKNOWN=void 0,C3),D3={},RRa=(D3.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_UNKNOWN="UNKNOWN",D3.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_NORMAL="NORMAL",D3.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_LOW="LOW",D3.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_ULTRA_LOW="ULTRALOW",D3);var YGa;
YGa={entities:);
g.JT=new EO;eT.prototype.toString=g.fT.prototype.Yg=
g.fT.prototype.Ok=g.gT.prototype.Yg=
g.gT.prototype.Ok=var hT=void 0;iya("LMS",;var mT,pRa;mT=0;pRa=!1;g.sRa=/^([\w\-_]+)\|(\d+)(;[\w\-_]+)?\|(\d+)\|(\d+)$/;iya("LMDB",;g.w(nT,g.AG);nT.prototype.xa=g.k=g.rT.prototype;g.k.getHeight=function(){return this.height};
g.k.pW=ca(4);g.k.IH=function(){return this.frameCount};
g.k.isDefault=
g.k.isLoaded=function(a){return this.loaded.has(a)};
g.k.Pe=
g.k.wG=
g.k.Ix=
g.k.DL=
g.k.BT=function(){};g.w(sT,nT);sT.prototype.B=
sT.prototype.G=g.w(zRa,g.rT);g.k=zRa.prototype;g.k.IH=function(){return this.B.iz()};
g.k.wG=
g.k.Ix=function(){return this.B.Ed()};
g.k.DL=function(){return this.B.hn()};
g.k.BT=function(a){this.B=a};g.w(tT,sT);tT.prototype.B=
tT.prototype.G=g.w(g.vT,g.AG);g.k=g.vT.prototype;g.k.U=function(){return this.Fa};
g.k.L=function(a){return this.Fa.L(a)};
g.k.Ph=
g.k.hasSupportedAudio51Tracks=
g.k.KY=
g.k.nV=
g.k.vj=
g.k.Vj=
g.k.getStoryboardFormat=
g.k.Ne=
g.k.Ld=
g.k.getPlaylistSequenceForTime=
g.k.Fe=
g.k.Fv=
g.k.isLoaded=
g.k.Yg=
g.k.zc=
g.k.isOtf=
g.k.getAvailableAudioTracks=
g.k.getAudioTrack=
g.k.getPlayerResponse=function(){return this.playerResponse};
g.k.getWatchNextResponse=function(){return this.Ua};
g.k.getHeartbeatResponse=function(){return this.cC};
g.k.Ok=
g.k.KO=
g.k.getEmbeddedPlayerResponse=function(){return this.gi};
g.k.isAd=function(){return!!this.adFormat};
g.k.isDaiEnabled=
g.k.xR=
g.k.AF=
g.k.mM=function(){return BT(this,"html5_samsung_vp9_live")};
g.k.useInnertubeDrmService=function(){return!0};
g.k.va=function(a,b,c){this.oa("ctmp",a,b,c)};
g.k.XE=
g.k.hasProgressBarBoundaries=
g.k.Yc=
g.k.xa=var TSa={phone:"SMALL_FORM_FACTOR",tablet:"LARGE_FORM_FACTOR"},USa={android:"ANDROID","android.k":"ANDROID_KIDS","android.m":"ANDROID_MUSIC","android.up":"ANDROID_UNPLUGGED",youtube:"WEB","youtube.m":"WEB_REMIX","youtube.up":"WEB_UNPLUGGED",ytios:"IOS","ytios.k":"IOS_KIDS","ytios.m":"IOS_MUSIC","ytios.up":"IOS_UNPLUGGED"},VSa={desktop:"DESKTOP",phone:"MOBILE",tablet:"TABLET"},SSa={preroll:"BREAK_PREROLL",midroll:"BREAK_MIDROLL",postroll:"BREAK_POSTROLL"},QSa={0:"YT_KIDS_AGE_UP_MODE_UNKNOWN",1:"YT_KIDS_AGE_UP_MODE_OFF",
2:"YT_KIDS_AGE_UP_MODE_TWEEN",3:"YT_KIDS_AGE_UP_MODE_PRESCHOOL"},RSa={0:"MDX_CONTROL_MODE_UNKNOWN",1:"MDX_CONTROL_MODE_REMOTE",2:"MDX_CONTROL_MODE_VOICE"};g.w(qU,g.I);g.k=qU.prototype;g.k.handleExternalCall=
g.k.logApiCall=
g.k.oa=
g.k.Un=
g.k.jb=
g.k.xc=
g.k.ym=
g.k.L=
g.k.xa=g.w(vU,g.Lv);vU.prototype.oa=g.w(aTa,g.I);aTa.prototype.xa=var cTa=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));g.w(xU,qU);g.k=xU.prototype;g.k.getApiInterface=function(){return Array.from(this.state.Z)};
g.k.N4=function(a,b){this.L("web_player_split_event_bus")?this.state.N.subscribe(a,b):this.app.Lk.subscribe(a,b)};
g.k.hba=function(a,b){this.L("web_player_split_event_bus")?this.state.N.unsubscribe(a,b):this.app.Lk.unsubscribe(a,b)};
g.k.getPlayerState=function(a){return mcb(this.app,a)};
g.k.D6=function(){return mcb(this.app)};
g.k.Fba=
g.k.getCurrentTime=
g.k.s6=function(){return this.app.getCurrentTime(1)};
g.k.A6=
g.k.w6=
g.k.qK=
g.k.Sba=
g.k.dJ=
g.k.D8=function(){this.dJ(!1)};
g.k.LK=
g.k.Dca=
g.k.getPlayerMode=
g.k.AQ=
g.k.Gaa=
g.k.pauseVideo=
g.k.dca=
g.k.clearVideo=function(){};
g.k.getAvailablePlaybackRates=
g.k.getPlaybackQuality=
g.k.Nba=function(){};
g.k.getAvailableQualityLevels=
g.k.p6=
g.k.I6=function(){return this.GW()};
g.k.J6=function(){return 1};
g.k.getVideoLoadedFraction=function(a){return this.app.getVideoLoadedFraction(a)};
g.k.GW=function(){return this.getVideoLoadedFraction()};
g.k.M6=function(){return 0};
g.k.getSize=function(){var a=this.app.sb().getPlayerSize();return{width:a.width,height:a.height}};
g.k.setSize=
g.k.loadVideoById=
g.k.Z7=function(a,b,c){a=this.loadVideoById(a,b,c);B1(this.app,a,1)};
g.k.cueVideoById=function(a,b,c,d){a=wU(a,b,c);this.app.cueVideoByPlayerVars(a,d)};
g.k.z5=function(a,b,c){this.cueVideoById(a,b,c,1)};
g.k.loadVideoByUrl=
g.k.c8=
g.k.cueVideoByUrl=
g.k.B5=function(a,b,c){this.cueVideoByUrl(a,b,c,1)};
g.k.O6=
g.k.u6=function(){return this.app.getDebugText()};
g.k.getVideoEmbedCode=
g.k.J4=
g.k.removeCueRange=
g.k.loadPlaylist=function(a,b,c,d){this.app.loadPlaylist(a,b,c,d)};
g.k.Y7=
g.k.cuePlaylist=function(a,b,c,d){this.app.cuePlaylist(a,b,c,d)};
g.k.nextVideo=function(a,b){this.app.nextVideo(a,b)};
g.k.E8=function(){this.nextVideo();B1(this.app,!0,1)};
g.k.previousVideo=function(a){this.app.previousVideo(a)};
g.k.Raa=
g.k.playVideoAt=function(a){this.app.playVideoAt(a)};
g.k.Faa=
g.k.setShuffle=
g.k.setLoop=
g.k.F6=
g.k.getPlaylistIndex=
g.k.getPlaylistId=
g.k.XX=
g.k.j0=
g.k.qR=
g.k.B6=function(a,b,c){var d=g.zU(this.app,this.playerType);return d&&d.getVideoData().isPrivate&&this.app.U().D?{}:this.qR(a,b,c)};
g.k.VN=
g.k.getVolume=function(){return this.app.Mi.volume};
g.k.isMuted=
g.k.destroy=function(){this.app.dispose()};
g.k.logImaAdEvent=
g.k.mutedAutoplay=
g.k.preloadVideoById=
g.k.Oaa=
g.k.setFauxFullscreen=
g.k.Kba=g.w(hTa,xU);g.k=hTa.prototype;g.k.O4=function(a,b){this.L("web_player_split_event_bus")?this.state.D.subscribe(a,b):this.app.Lk.subscribe(a,b)};
g.k.jba=
g.k.cueVideoByPlayerVars=
g.k.A5=
g.k.loadVideoByPlayerVars=
g.k.b8=function(a,b,c,d){this.loadVideoByPlayerVars(kTa(this,a),b,c,d)};
g.k.preloadVideoByPlayerVars=
g.k.Paa=
g.k.a8=function(a,b,c){this.loadVideoById(a,b,c)};
g.k.d8=function(a,b,c){this.loadVideoByUrl(a,b,c)};
g.k.E6=function(a){return this.getPlayerState(a)};
g.k.FW=
g.k.seekBy=
g.k.Dba=
g.k.seekTo=
g.k.Gba=
g.k.getStoryboardFormat=function(){return this.app.getStoryboardFormat()};
g.k.t6=function(a,b){return this.getCurrentTime(a,b)};
g.k.TH=
g.k.getDuration=
g.k.x6=
g.k.L6=
g.k.loadModule=
g.k.unloadModule=
g.k.getOption=
g.k.getOptions=
g.k.setOption=
g.k.addCueRange=function(a,b,c,d,e){return vcb(this.app,a,b,c,d,e)};
g.k.getDebugText=function(a){return this.app.getDebugText(a)};
g.k.getCurrentBroadcastId=function(){return null};
g.k.handleGlobalKeyDown=
g.k.handleGlobalKeyUp=
g.k.setSizeStyle=function(a,b){this.app.setSizeStyle(a,b)};
g.k.showControls=function(){var a=g.AU(this);a&&a.showControls(!0)};
g.k.hideControls=
g.k.getVideoContentRect=
g.k.toggleFullscreen=
g.k.isFullscreen=function(){return this.app.isFullscreen()};
g.k.cancelPlayback=
g.k.getProgressState=
g.k.isInline=function(){return this.app.isInline()};
g.k.setInline=function(a){this.app.setInline(a)};
g.k.N6=
g.k.toggleSubtitles=function(){var a=g.kW(this.app.Db());a&&a.tca()};
g.k.getPlayerSize=
g.k.wakeUpControls=
g.k.setCenterCrop=function(a){this.app.sb().setCenterCrop(a)};
g.k.getLoopVideo=function(){return this.app.getLoopVideo()};
g.k.setLoopVideo=function(a){this.app.setLoopVideo(a)};
var iTa="BASE_URL BASE_YT_URL adformat adaptive_fmts allow_embed audio_only authuser autoplay cc_load_policy cpn dash dashmpd disable_native_context_menu disablekb docid el enable_faster_speeds enablecastapi end eventid external_fullscreen fmt_list hl hlsdvr hlsvp iurl iurlhq iurlmq length_seconds live_playback osig override_hl partnerid pause_at_start pipable player_response playsinline plid post_live_playback postid ps public raw_player_response rel show_loop_video_toggle start startSeconds status suggestedQuality timestamp title token ttsurl use_native_controls url_encoded_fmt_stream_map video_id videoId".split(" "),
jTa="adformat allow_embed authuser autohide autonav autoplay c cbr cbrver cc_load_policy controls cos cosver cr csi_page_type cver cyc dash dashmpd disablekb el enablecastapi enablecsi end external_fullscreen external_list fs hl host_language innertube_api_key innertube_api_version innertube_context_client_version iurl iurlhq iurlmq iv_load_policy jsapicallback length_seconds live_playback live_storyboard_spec loaderUrl osig override_hl pageid partnerid pipable player_params player_wide playsinline plid postid profile_picture ps rel show_miniplayer_button showinfo showwatchlater start startSeconds status storyboard_spec suggestedQuality timestamp title tkn token transparent_background ucid url_encoded_fmt_stream_map use_miniplayer_ui use_native_controls videoId video_id vss_host watermark".split(" ");var E3={},nTa=(E3["api.invalidparam"]=2,E3.auth=150,E3["drm.auth"]=150,E3["heartbeat.net"]=150,E3["heartbeat.servererror"]=150,E3["heartbeat.stop"]=150,E3["html5.unsupportedads"]=5,E3["fmt.noneavailable"]=5,E3["fmt.decode"]=5,E3["fmt.unplayable"]=5,E3["html5.missingapi"]=5,E3["html5.unsupportedlive"]=5,E3["drm.unavailable"]=5,E3["mrm.blocked"]=151,E3);g.w(g.BU,hTa);g.k=g.BU.prototype;g.k.isExternalMethodAvailable=
g.k.getBandwidthEstimate=
g.k.reportPlaybackIssue=
g.k.getInternalApi=
g.k.getInternalApiInterface=
g.k.queueNextVideo=
g.k.createSubtitlesModuleIfNeeded=function(){return this.app.createSubtitlesModuleIfNeeded()};
g.k.startSeekCsiAction=
g.k.seekToStreamTime=
g.k.getStreamTimeOffset=
g.k.seekToLiveHead=
g.k.requestSeekToWallTimeSeconds=
g.k.setVolume=
g.k.mute=function(a){this.dJ(void 0===a?!0:a)};
g.k.unMute=
g.k.syncVolume=
g.k.getAvailableQualityLabels=
g.k.channelSubscribed=function(){this.jb("SUBSCRIBE",this.app.Jd().Cl)};
g.k.channelUnsubscribed=
g.k.setScreenLayer=function(a){this.app.setScreenLayer(a)};
g.k.getCurrentPlaylistSequence=
g.k.getPlaylistSequenceForTime=
g.k.shouldSendVisibilityState=function(){return!0};
g.k.confirmYpcRental=
g.k.setHomeGroupInfo=function(a){this.app.U().homeGroupInfo=a};
g.k.setConnectedRemoteApps=
g.k.setLivingRoomAppMode=
g.k.setEnablePrivacyFilter=
g.k.togglePictureInPicture=function(){this.app.togglePictureInPicture()};
g.k.addUtcCueRange=
g.k.K6=
g.k.getAdState=function(){return this.app.getAdState()};
g.k.isNotServable=
g.k.supportsGaplessAudio=function(){return this.app.U().supportsGaplessAudio()};
g.k.supportsGaplessShorts=
g.k.enqueueVideoByPlayerVars=
g.k.clearQueue=function(){this.app.clearQueue()};
g.k.ri=
g.k.sendAbandonmentPing=
g.k.setAutonavState=
g.k.setAutonav=
g.k.setLoopRange=function(a){this.app.setLoopRange(a)};
g.k.getLoopRange=function(){return this.app.getLoopRange()};
g.k.hasSupportedAudio51Tracks=
g.k.setUserAudio51Preference=
g.k.getUserAudio51Preference=
g.k.setProximaLatencyPreference=
g.k.getProximaLatencyPreference=function(){var a=g.zU(this.app,this.playerType);return a?a.getProximaLatencyPreference():0};
g.k.isProximaLatencyEligible=
g.k.getAppState=function(){return this.app.getAppState()};
g.k.updateLastActiveTime=
g.k.setBlackout=function(a){this.app.setBlackout(a)};
g.k.setUserEngagement=
g.k.updateSubtitlesUserSettings=
g.k.getCaptionWindowContainerId=function(){var a=g.kW(this.app.Db());return a?a.getCaptionWindowContainerId():""};
g.k.toggleSubtitlesOn=
g.k.isSubtitlesOn=
g.k.getPlayerResponse=function(){var a=g.zU(this.app,this.playerType);return a?a.getVideoData().getPlayerResponse():null};
g.k.getEmbeddedPlayerResponse=
g.k.getWatchNextResponse=function(){var a=g.zU(this.app,this.playerType);return a?a.getVideoData().getWatchNextResponse():null};
g.k.getHeartbeatResponse=
g.k.getStoryboardFrame=
g.k.getStoryboardFrameIndex=
g.k.getStoryboardLevel=
g.k.getNumberOfStoryboardLevels=
g.k.a6=function(){return this.getAudioTrack()};
g.k.getAudioTrack=
g.k.setAudioTrack=
g.k.b6=
g.k.getAvailableAudioTracks=
g.k.getMaxPlaybackQuality=
g.k.getUserPlaybackQualityPreference=
g.k.getSubtitlesUserSettings=
g.k.resetSubtitlesUserSettings=
g.k.setMinimized=function(a){this.app.setMinimized(a)};
g.k.setOverlayVisibility=function(a){this.oa("overlayvisibilitychange",a)};
g.k.setInlinePreview=function(a){this.app.setInlinePreview(a)};
g.k.setGlobalCrop=
g.k.getVisibilityState=
g.k.isMutedByMutedAutoplay=function(){return this.app.cA};
g.k.setInternalSize=
g.k.Rc=
g.k.gg=function(){return this.app.gg()};
g.k.Mh=
g.k.setSafetyMode=function(a){this.app.U().enableSafetyMode=a};
g.k.canPlayType=function(a){return this.app.canPlayType(a)};
g.k.updatePlaylist=
g.k.updateVideoData=
g.k.updateEnvironmentData=
g.k.Iba=
g.k.productsInVideoVisibilityUpdated=function(a){this.oa("changeProductsInVideoVisibility",a)};
g.k.isAtLiveHead=
g.k.getVideoAspectRatio=function(){return this.app.sb().getVideoAspectRatio()};
g.k.getPreferredQuality=function(){var a=g.zU(this.app);return a?a.getPreferredQuality():"unknown"};
g.k.getPlaybackQualityLabel=
g.k.setPlaybackQualityRange=
g.k.onAdUxClicked=function(a,b){this.oa("aduxclicked",a,b)};
g.k.showAirplayPicker=function(){this.app.showAirplayPicker()};
g.k.dispatchReduxAction=function(a){g.JT.dispatch(a)};
g.k.changeMarkerVisibility=
g.k.highlightSettingsMenuItem=function(a){this.oa("highlightSettingsMenu",a)};
g.k.openSettingsMenuItem=function(a){this.oa("openSettingsMenuItem",a)};
g.k.M4=function(a,b){this.L("web_player_split_event_bus")?this.state.B.subscribe(a,b):this.app.Lk.subscribe(a,b)};
g.k.fba=function(a,b){this.L("web_player_split_event_bus")?this.state.B.unsubscribe(a,b):this.app.Lk.unsubscribe(a,b)};
g.k.getFeedbackProductData=function(){return this.app.getFeedbackProductData()};
g.k.qh=function(){return g.AU(this).qh()};
g.k.Bg=function(){return g.AU(this).Bg()};
g.k.lm=
g.k.Oe=function(){return this.ri().Oe()};
g.k.Ql=
g.k.Hh=function(){this.Oe().Hh()};
g.k.vO=function(){this.Oe().vO()};
g.k.Kh=function(){this.Oe().hide()};
g.k.wK=
g.k.CF=function(a,b){this.Oe().CF(a,b)};
g.k.Kt=
g.k.xF=function(a){this.Oe().oR(a)};
g.k.uy=function(a){this.ri().uy(a)};
g.k.NC=function(a,b){this.ri().NC(a,b)};
g.k.Ty=function(a,b){this.ri().Ty(a,b)};
g.k.mq=function(){this.ri().mq()};
g.k.pR=function(a,b){this.ri().pR(a,b)};
g.k.YA=ca(6);g.k.ZA=ca(8);g.k.Ar=ca(11);g.k.zr=ca(14);g.k.dF=function(a,b){this.ri().dF(a,b)};
g.k.ov=function(){this.ri().ov()};
g.k.getWebPlayerContextConfig=function(){return this.app.U().getWebPlayerContextConfig()};g.w(g.FU,g.BU);g.k=g.FU.prototype;g.k.Co=function(a,b,c,d,e,f,h){return this.app.Co(a,b,c,d,e,f,h)};
g.k.cD=function(){return this.app.cD()};
g.k.Gs=ca(16);g.k.Db=function(){return this.app.Db()};
g.k.uf=function(){var a=this.Db().He.get("endscreen");return!!a&&a.uf()};
g.k.getRootNode=function(){return this.sb().element};
g.k.U=function(){return this.app.U()};
g.k.gz=ca(18);g.k.jn=function(a){return this.app.jn(a)};
g.k.pp=
g.k.Vb=function(a){return this.app.Vb(a)};
g.k.sb=function(){return this.app.sb()};
g.k.getPlaylist=function(){return this.app.getPlaylist()};
g.k.getVideoData=
g.k.Vj=function(a){return this.app.Vj(a)};
g.k.Tv=function(){return this.app.Tv()};
g.k.isHdr=function(){var a=g.zU(this.app);return a?a.isHdr():!1};
g.k.QO=function(){return this.app.QO()};
g.k.Yc=
g.k.bB=function(a){this.app.bB(a)};
g.k.rg=function(a,b,c,d,e){this.app.Fg(a,b,c,d,e)};
g.k.Br=function(a,b){this.app.Br(a,b)};
g.k.playVideo=
g.k.stopVideo=function(a){g.zU(this.app,a).stopVideo()};
g.k.Xn=
g.k.addEventListener=function(a,b){this.L("web_player_split_event_bus")?this.state.C.subscribe(a,b):this.app.Lt.subscribe(a,b)};
g.k.removeEventListener=function(a,b){this.L("web_player_split_event_bus")?this.state.C.unsubscribe(a,b):this.app.Lt.unsubscribe(a,b)};
g.k.QE=function(a){this.app.QE(a)};
g.k.setPlaybackQuality=
g.k.Hs=
g.k.dD=
g.k.mD=ca(22);g.k.aK=
g.k.getVideoUrl=
g.k.nD=ca(24);g.k.Nn=ca(28);g.k.Wn=function(a){var b=g.zU(this.app);b&&b.Wn(a)};
g.k.Pz=function(a,b){this.Db().Pz(a,b)};
g.k.Ek=function(){var a=g.qW(this.Db());return!!a&&a.Ek()};
g.k.Uo=
g.k.WA=
g.k.VA=ca(29);g.k.zo=function(){var a=g.zU(this.app);a&&a.zo()};
g.k.lK=
g.k.un=
g.k.xn=function(){return this.app.xn()};
g.k.OD=
g.k.Ph=
g.k.KD=
g.k.isOrchestrationLeader=function(){return this.app.isOrchestrationLeader()};
g.k.Vt=function(){var a=g.zU(this.app);a&&a.Vt()};
g.k.sendVideoStatsEngageEvent=function(a,b,c){this.app.sendVideoStatsEngageEvent(a,c,b)};
g.k.sf=function(a,b,c){this.app.sy(a,b,c)};
g.k.Yn=function(a,b){this.app.cF(a,b)};
g.k.zf=
g.k.RF=function(){this.app.RF()};
g.k.Gg=
g.k.vp=
g.k.Fv=
g.k.getPlaybackRate=
g.k.setPlaybackRate=function(a,b){this.app.setPlaybackRate(a,b)};
g.k.qf=function(){return this.app.qf()};
g.k.wi=function(){return this.app.wi()};
g.k.Wi=function(a){return this.app.Wi(a)};
g.k.createClientVe=
g.k.createServerVe=
g.k.setTrackingParams=
g.k.logClick=
g.k.logVisibility=
g.k.hasVe=
g.k.destroyVe=
g.k.ud=function(){return g.zU(this.app)};
g.k.getPresentingPlayerType=function(a){return this.app.getPresentingPlayerType(a)};
g.k.LA=function(){this.app.LA()};
g.k.Oy=function(a,b){return this.app.Oy(a,b)};
g.k.Qp=function(a){this.app.Qp(a)};
g.k.Sz=function(){this.app.Sz()};
g.k.addPlayerResponseForAssociation=function(a){this.app.addPlayerResponseForAssociation(a)};
g.k.finishSegmentByCpn=function(a,b){return this.app.finishSegmentByCpn(a,b)};
g.k.qC=function(a,b,c,d,e,f,h){return this.app.qC(a,b,c,d,e,f,h)};
g.k.HD=function(a,b,c,d,e,f,h){return this.app.HD(a,b,c,d,e,f,h)};
g.k.Cz=function(){return this.app.Cz()};
g.k.It=function(a){this.app.It(a)};
g.k.Cy=
g.k.NK=
g.k.VF=function(a,b,c){this.app.VF(a,b,c)};
g.k.xv=function(){return this.app.xv()};
g.k.rH=
g.k.Rv=function(){return this.app.Rv()};
g.k.Hf=function(){return this.app.Hf()};
g.k.vt=function(a,b,c){return this.app.vt(a,b,c)};
g.k.va=
g.k.HP=function(a,b){this.oa("aduxmouseover",a,b)};
g.k.GP=function(a,b){this.oa("aduxmouseout",a,b)};
g.k.eQ=function(a,b){this.oa("muteadaccepted",a,b)};
g.k.QD=function(){return this.app.sb().QD()};
g.k.cB=function(a){this.app.sb().cB(a)};
g.k.Cr=
g.k.rR=function(a){this.app.rR(a)};
g.k.RI=
g.k.pu=
g.k.bO=function(){var a=g.zU(this.app);return a?a.bO():0};
g.k.oK=var xTa;g.w(wTa,tD);wTa.prototype.bD=var ATa=!1;g.RU.prototype.info=function(){};
g.RU.prototype.debug=function(){};
var rUa=new Map;SU.prototype.vA=
SU.prototype.aQ=function(){};
SU.prototype.lJ=function(){};
var Jkb=!1;g.w(g.TU,g.IG);g.k=g.TU.prototype;g.k.show=
g.k.hide=
g.k.rd=
g.k.cW=
g.k.RU=
g.k.Qb=
g.k.j3=
g.k.Xj=function(){return this.Jb&&4!==this.ma.state};g.w(uUa,g.TU);uUa.prototype.rd=g.w(g.WU,g.IG);g.WU.prototype.updateValue=var PUa={VL:14,bL:13,kU:12,nU:11,PL:10,WL:9,YK:8,XK:7,UL:6,SUBTITLES:5,AUDIO:4,TL:3,UT:2,REMOTE:1,tS:0,14:"STABLE_VOLUME",13:"CINEMATIC",12:"REMOTE_SELECT",11:"SIZE",10:"MINIPLAYER",9:"THREED",8:"AUTONAV",7:"ANNOTATIONS",6:"SPEED",5:"SUBTITLES",4:"AUDIO",3:"QUALITY",2:"LINKEDACCOUNT",1:"REMOTE",0:"CONTEXTMENU"};g.w(ZU,g.WU);ZU.prototype.Jc=
ZU.prototype.D=
ZU.prototype.onClick=g.w(aV,g.I);aV.prototype.L=function(a){return this.api.L(a)};g.w(bV,aV);bV.prototype.onVideoDataChange=
bV.prototype.setAccountLinkState=
bV.prototype.updateAccountLinkingConfig=g.w(wUa,aV);
wUa.prototype.B=g.w(CUa,aV);g.w(EUa,g.V);g.k=EUa.prototype;
g.k.TB=
g.k.CT=
g.k.onClick=
g.k.getValue=function(){return this.isChecked};
g.k.Jd=function(){return this.J.getVideoData(1)};g.w(HUa,aV);g.w(fV,g.WU);fV.prototype.onClick=
fV.prototype.getValue=function(){return this.checked};var NUa={VL:14,kU:13,nU:12,PL:11,WL:10,YK:9,TL:8,UL:7,SUBTITLES:6,AUDIO:5,XK:4,bL:3,UT:2,REMOTE:1,tS:0,14:"STABLE_VOLUME",13:"REMOTE_SELECT",12:"SIZE",11:"MINIPLAYER",10:"THREED",9:"AUTONAV",8:"QUALITY",7:"SPEED",6:"SUBTITLES",5:"AUDIO",4:"ANNOTATIONS",3:"CINEMATIC",2:"LINKEDACCOUNT",1:"REMOTE",0:"CONTEXTMENU"},OUa={VL:14,kU:13,nU:12,PL:11,WL:10,YK:9,bL:8,XK:7,AUDIO:6,SUBTITLES:5,UL:4,TL:3,UT:2,REMOTE:1,tS:0,14:"STABLE_VOLUME",13:"REMOTE_SELECT",12:"SIZE",11:"MINIPLAYER",10:"THREED",9:"AUTONAV",8:"CINEMATIC",
7:"ANNOTATIONS",6:"AUDIO",5:"SUBTITLES",4:"SPEED",3:"QUALITY",2:"LINKEDACCOUNT",1:"REMOTE",0:"CONTEXTMENU"};var JUa=["en-CA","en","es-MX","fr-CA"];g.w(kV,fV);kV.prototype.Ra=
kV.prototype.D=function(){g.pv(this.element,"ytp-menuitem-highlight-transition-enabled")};
kV.prototype.C=
kV.prototype.xa=function(){this.j&&this.Hb.hh(this);fV.prototype.xa.call(this)};g.w(SUa,aV);SUa.prototype.updateCinematicSettings=g.w(lV,g.V);lV.prototype.show=function(){g.V.prototype.show.call(this);this.api.logVisibility(this.element,!0)};
lV.prototype.hide=function(){g.V.prototype.hide.call(this);this.api.logVisibility(this.element,!1)};g.w(UUa,aV);UUa.prototype.j=g.w(nV,fV);nV.prototype.j=function(a){this.callback(a?1:0)};
nV.prototype.xa=g.w(oV,aV);oV.prototype.getDrcUserPreference=function(){return this.j};
oV.prototype.setDrcUserPreference=
oV.prototype.updateVideoData=g.w(pV,aV);pV.prototype.onVideoDataChange=
pV.prototype.B=function(a){return void 0!==a.embargo};
pV.prototype.xa=g.w(XUa,aV);
XUa.prototype.addEmbedsConversionTrackingParams=g.w(YUa,aV);g.w(qV,g.V);qV.prototype.show=
qV.prototype.onVideoDataChange=
qV.prototype.xa=function(){bVa(this);g.V.prototype.xa.call(this)};g.w(cVa,aV);g.w(rV,g.V);rV.prototype.onClick=
rV.prototype.Ra=g.w(sV,aV);sV.prototype.updateFullerscreenEduButtonSubtleModeState=
sV.prototype.updateFullerscreenEduButtonVisibility=g.w(dVa,g.V);g.w(gVa,aV);g.w(hVa,aV);g.w(tV,aV);tV.prototype.getSphericalProperties=
tV.prototype.setSphericalProperties=g.w(iVa,aV);g.k=iVa.prototype;g.k.createClientVe=
g.k.createServerVe=function(a,b,c){this.api.createServerVe(a,b,void 0===c?!1:c)};
g.k.setTrackingParams=function(a,b){this.api.setTrackingParams(a,b)};
g.k.logClick=function(a,b){this.api.logClick(a,b)};
g.k.logVisibility=function(a,b,c){this.api.logVisibility(a,b,c)};
g.k.hasVe=function(a){return this.api.hasVe(a)};
g.k.destroyVe=function(a){this.api.destroyVe(a)};g.w(uV,aV);uV.prototype.seekToChapterWithAnimation=
uV.prototype.seekToTimeWithAnimation=
uV.prototype.setMacroMarkers=g.w(mVa,aV);mVa.prototype.xa=g.w(wV,aV);wV.prototype.D=
wV.prototype.xa=g.w(uVa,aV);g.k=uVa.prototype;g.k.queueOfflineAction=
g.k.updateDownloadState=
g.k.pauseVideoDownload=
g.k.resumeVideoDownload=
g.k.isOrchestrationLeader=function(){return this.api.isOrchestrationLeader()};
g.k.refreshAllStaleEntities=g.w(xV,aV);xV.prototype.getAvailableQualityDataAndMessaging=
xV.prototype.getAvailableQualityData=g.w(yV,g.V);yV.prototype.Ra=
yV.prototype.onClick=function(){this.api.togglePictureInPicture()};g.w(yVa,aV);yVa.prototype.createButton=g.w(AVa,aV);g.w(g.AV,g.AG);g.k=g.AV.prototype;g.k.T=
g.k.cancel=
g.k.mw=
g.k.DT=
g.k.bA=
g.k.A8=
g.k.EL=
g.k.K5=
g.k.z8=
g.k.l3=
g.k.FL=
g.k.uca=
g.k.ET=
g.k.xa=g.w(CVa,g.V);CVa.prototype.Kh=g.w(EV,aV);EV.prototype.ra=
EV.prototype.Ga=
EV.prototype.N=
EV.prototype.K=function(){FV(this)};g.w(GVa,aV);GVa.prototype.onVideoDataChange=g.w(GV,g.Ab);GV.prototype.preventDefault=function(){g.Ab.prototype.preventDefault.call(this);this.j&&this.j.preventDefault()};
GV.prototype.stopPropagation=g.w(g.HV,XL);g.k=g.HV.prototype;g.k.Gu=function(){return!0};
g.k.isView=function(){return!1};
g.k.XQ=function(){return!1};
g.k.Lb=function(){return this.j};
g.k.Ff=function(){return this.j.src};
g.k.vG=
g.k.XJ=function(){this.j.removeAttribute("src")};
g.k.getPlaybackRate=
g.k.setPlaybackRate=
g.k.Ls=function(){return this.j.loop};
g.k.setLoop=function(a){this.j.loop=a};
g.k.canPlayType=function(a,b){return this.j.canPlayType(a,b)};
g.k.isPaused=function(){return this.j.paused};
g.k.Uf=function(){return this.j.seeking};
g.k.Nh=function(){return this.j.ended};
g.k.PH=function(){return this.j.muted};
g.k.XA=function(a){zBa();this.j.muted=a};
g.k.Bv=function(){return this.j.played||DL([],[])};
g.k.Ih=
g.k.rD=
g.k.uG=
g.k.getCurrentTime=function(){return this.j.currentTime};
g.k.setCurrentTime=function(a){this.j.currentTime=a};
g.k.getDuration=function(){return this.j.duration};
g.k.load=
g.k.pause=function(){this.j.pause()};
g.k.play=
g.k.yk=function(){return this.j.readyState};
g.k.QH=function(){return this.j.networkState};
g.k.Xg=function(){return this.j.error?this.j.error.code:null};
g.k.tf=
g.k.getVideoPlaybackQuality=
g.k.Mh=
g.k.Vt=
g.k.togglePictureInPicture=
g.k.Ns=
g.k.getSize=
g.k.setSize=function(a){g.Es(this.j,a)};
g.k.getVolume=function(){return this.j.volume};
g.k.setVolume=
g.k.pN=
g.k.setAttribute=function(a,b){this.j.setAttribute(a,b)};
g.k.removeAttribute=function(a){this.j.removeAttribute(a)};
g.k.hasAttribute=function(a){return this.j.hasAttribute(a)};
g.k.rC=ca(31);g.k.KF=ca(33);g.k.LF=ca(35);g.k.Ey=ca(37);g.k.QC=
g.k.Wr=
g.k.tD=
g.k.IO=
g.k.audioTracks=
g.k.xa=
g.k.mR=function(a){this.j.disableRemotePlayback=a};IV.prototype.add=
IV.prototype.forEach=
IV.prototype.clear=g.w(JV,g.I);JV.prototype.start=function(){this.B.start()};
JV.prototype.stop=function(){this.B.stop()};
JV.prototype.clear=
JV.prototype.sample=
var Kkb=new Set(["networkactivity"]);IVa.prototype.update=
IVa.prototype.clear=g.w(NV,g.V);g.w(PV,g.V);PV.prototype.show=
PV.prototype.hide=
PV.prototype.Ra=
PV.prototype.N=g.w(OVa,aV);g.w(QV,g.I);QV.prototype.j=
var Lkb=new Gv(0,0,.4,0,.2,1,1,1),UVa=/[0-9.-]+|[^0-9.-]+/g;g.w(RV,g.V);RV.prototype.onClick=
RV.prototype.Ra=g.w(VVa,aV);g.w(WVa,aV);SV.prototype.send=
SV.prototype.TC=
SV.prototype.XV=g.w(TV,aV);TV.prototype.xa=
TV.prototype.BN=
TV.prototype.tP=
TV.prototype.gS=g.w(eWa,aV);g.w(VV,g.I);VV.prototype.j=
VV.prototype.xa=WV.prototype.JP=
WV.prototype.reset=
WV.prototype.OP=g.k=fWa.prototype;g.k.reset=
g.k.tick=
g.k.Li=
g.k.ju=
g.k.infoGel=g.w(jWa,g.AG);g.k=jWa.prototype;g.k.Qk=
g.k.wp=
g.k.setShuffle=
g.k.Yg=
g.k.getLength=function(){return this.length};
g.k.findIndex=
g.k.onReady=
g.k.getPlaylistId=function(){return this.listId?this.listId.toString():null};
g.k.Ok=
g.k.xa=var ZV=new Map;g.w(g.aW,g.AG);g.k=g.aW.prototype;g.k.create=function(){};
g.k.load=function(){this.loaded=!0};
g.k.unload=function(){this.loaded=!1};
g.k.Gh=function(){};
g.k.ql=function(){return!0};
g.k.xa=function(){this.loaded&&this.unload();g.AG.prototype.xa.call(this)};
g.k.vc=
g.k.getOptions=g.w(g.dW,g.I);g.k=g.dW.prototype;g.k.ut=ca(40);g.k.Oz=function(){};
g.k.Kr=function(){};
g.k.Dv=function(){return""};
g.k.FQ=ca(41);g.k.xa=g.w(g.eW,g.dW);g.eW.prototype.ut=ca(39);g.eW.prototype.Oz=
g.eW.prototype.Dv=
g.eW.prototype.Kr=function(){this.j&&this.j.abort()};g.wWa.prototype.Ht=function(a){this.Fa.Ht(a)};g.Mkb=new Map;g.w(g.iW,g.dW);g.iW.prototype.ut=ca(38);
g.iW.prototype.Oz=
g.iW.prototype.Dv=
g.iW.prototype.Kr=function(){this.j&&this.j.abort()};DWa.prototype.reload=
g.kL||g.UR&&!g.JC("windows nt")||g.SD||g.nE||Qoa();var jW="WebAssembly"in window&&("instantiateStreaming"in window.WebAssembly||"instantiate"in window.WebAssembly);g.w(LWa,g.I);g.k=LWa.prototype;g.k.createSubtitlesModuleIfNeeded=
g.k.AF=function(){return this.J.getVideoData().AF()};
g.k.xR=function(){return this.J.getVideoData().xR()};
g.k.wV=
g.k.bH=
g.k.XM=
g.k.wi=function(){return this.B};
g.k.Cq=
g.k.Pz=
g.k.onVideoDataChange=
g.k.xa=
var F3={},cXa=(F3.ad="ad.js",F3.annotations_module="annotations_module.js",F3.asmjs="asmjs.js",F3.creatorendscreen="annotations_module.js",F3.embed="embed.js",F3.endscreen="endscreen.js",F3.heartbeat="heartbeat.js",F3.inline_preview="inline_preview.js",F3.kids="kids.js",F3.remote="remote.js",F3.miniplayer="miniplayer.js",F3.offline="offline.js",F3.captions="captions.js",F3.unplugged="unplugged.js",F3.ux="ux.js",F3.webgl="webgl.js",F3.ypc="ypc.js",F3.ypc_clickwrap="ypc_clickwrap.js",F3.yto="yto.js",
F3),YWa="ad annotations_module asmjs creatorendscreen embed endscreen heartbeat inline_preview kids remote miniplayer offline captions webgl ypc ypc_clickwrap yto unplugged ux".split(" ");g.w(eXa,g.AG);g.k=eXa.prototype;g.k.m3=
g.k.B8=
g.k.mw=
g.k.bA=
g.k.U7=function(){rW(this,1,!0)};
g.k.j6=
g.k.FT=
g.k.n3=
g.k.GT=
g.k.o3=
g.k.nu=
g.k.resize=
g.k.toString=g.w(g.tW,g.V);g.k=g.tW.prototype;g.k.Ica=
g.k.Ra=
g.k.show=
g.k.U6=
g.k.Qaa=g.w(g.uW,g.V);g.k=g.uW.prototype;g.k.show=
g.k.hide=
g.k.Yb=function(){g.gv(this.j)};
g.k.onStateChange=function(){g.gv(this.j)};
g.k.yaa=
g.k.zw=
g.k.Ra=
g.k.Nca=g.w(g.vW,g.V);g.vW.prototype.resize=function(){};
g.vW.prototype.B=
var hXa=/<a\s+href=["']([^"']+)["'](?:\s+target=["']([^"']+)["'])?>([^<>]+)<\/a>/;g.w(kXa,g.V);g.k=kXa.prototype;g.k.onClick=
g.k.onVideoDataChange=
g.k.q3=
g.k.rd=function(){this.D.show();this.J.oa("paidcontentoverlayvisibilitychange",!0);this.J.logVisibility(this.element,!0)};
g.k.Qb=g.w(zW,g.V);zW.prototype.hide=
zW.prototype.onStateChange=
zW.prototype.Ec=
zW.prototype.B=g.w(AW,g.TU);AW.prototype.onMutedAutoplayChange=
AW.prototype.lk=
AW.prototype.onClick=
AW.prototype.logClick=g.w(g.BW,g.mL);g.k=g.BW.prototype;g.k.init=
g.k.onVideoDataChange=
g.k.d$=
g.k.eB=
g.k.Wp=
g.k.PG=
g.k.nA=
g.k.IP=
g.k.H$=function(){this.VR=!0};
g.k.G$=
g.k.F$=
g.k.B$=
g.k.uO=function(){};
g.k.BF=function(){};
g.k.eF=function(){};
g.k.dF=function(){};
g.k.Hr=
g.k.C$=
g.k.yD=
g.k.D$=
g.k.E$=
g.k.Yb=
g.k.lk=
g.k.ZA=ca(7);g.k.PN=
g.k.Xp=
g.k.Dc=
g.k.mq=
g.k.onMutedAutoplayChange=
g.k.qh=function(){return!1};
g.k.Bg=
g.k.zI=
g.k.lm=function(){return this.FK};
g.k.pp=function(){return null};
g.k.hW=function(){return null};
g.k.un=
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=
g.k.Kt=function(){};
g.k.showControls=
g.k.nu=function(){};
g.k.cO=g.w(DW,g.AG);g.k=DW.prototype;g.k.Wl=
g.k.stop=
g.k.Mc=
g.k.getProgressState=function(){return this.B};
g.k.r3=function(a){g.sH(a,2)&&this.oa("g")};g.w(vXa,g.V);vXa.prototype.onClick=function(){this.J.xc("BACK_CLICKED")};g.w(g.EW,g.V);g.EW.prototype.show=
g.EW.prototype.hide=
g.EW.prototype.BF=g.w(yXa,g.V);g.k=yXa.prototype;g.k.xF=
g.k.rd=
g.k.Qb=
g.k.Xj=function(){return this.Jb&&4!==this.B.state};
g.k.xa=
g.k.B9=
g.k.i9=g.w(zXa,g.V);g.k=zXa.prototype;g.k.l0=
g.k.NR=
g.k.t3=
g.k.caa=
g.k.rd=
g.k.GL=
g.k.l5=
g.k.IT=
g.k.HT=
g.k.P9=function(){this.j&&this.j.stop()};
g.k.O9=function(){this.Qb()};
g.k.s3=
g.k.Qb=
g.k.Xj=
g.k.xa=var G3={},HW=(G3.BUTTON="ytp-button",G3.TITLE_NOTIFICATIONS="ytp-title-notifications",G3.TITLE_NOTIFICATIONS_ON="ytp-title-notifications-on",G3.TITLE_NOTIFICATIONS_OFF="ytp-title-notifications-off",G3.NOTIFICATIONS_ENABLED="ytp-notifications-enabled",G3);g.w(AXa,g.V);
AXa.prototype.onClick=g.Ua("yt.pubsub.publish",g.gF);g.w(g.IW,g.V);g.IW.prototype.D=function(){window.location.reload()};
g.IW.prototype.j=function(){g.nv(this.element,"ytp-sb-subscribed")};
g.IW.prototype.B=g.w(FXa,g.V);g.k=FXa.prototype;g.k.h9=
g.k.YQ=
g.k.isExpanded=
g.k.xH=
g.k.YG=
g.k.Ra=
g.k.Jc=g.w(KW,g.IG);KW.prototype.HY=function(){this.oa("size-change")};
KW.prototype.focus=function(){this.content.focus()};
KW.prototype.CY=g.w(g.LW,KW);g.k=g.LW.prototype;g.k.Uc=
g.k.hh=
g.k.dQ=function(){this.menuItems.oa("size-change")};
g.k.focus=
g.k.kp=function(){return this.items.length};g.w(NW,g.WU);NW.prototype.j=g.w(LXa,g.V);g.k=LXa.prototype;g.k.show=
g.k.hide=
g.k.u3=
g.k.v3=
g.k.Ra=g.w(NXa,g.LW);g.k=NXa.prototype;g.k.o5=function(){this.Hb.Qb()};
g.k.n9=
g.k.x9=
g.k.y9=
g.k.z9=function(){QW(this,this.J.getVideoUrl(!0,!0))&&FW(this.Td,QG());this.J.logClick(this.getVideoUrl.element);Rwa("COPY_PASTE",this.J.getVideoData().videoId,this.J.getPlaylistId()||"")};
g.k.A9=
g.k.onLoopChange=
g.k.I9=
g.k.x$=
g.k.Q$=
g.k.P$=
g.k.onVideoDataChange=
g.k.yF=
g.k.Jc=g.w(g.RW,g.TU);g.k=g.RW.prototype;g.k.show=
g.k.hide=
g.k.qB=
g.k.Bj=
g.k.w3=
g.k.focus=
g.k.xa=g.w(UXa,g.RW);g.k=UXa.prototype;g.k.y3=
g.k.iZ=function(){this.ra.stop()};
g.k.iaa=
g.k.cW=
g.k.show=
g.k.hide=
g.k.l9=
g.k.rd=
g.k.open=
g.k.t9=
g.k.onFullscreenToggled=function(){this.Qb();VXa(this)};
g.k.x3=function(){this.Qb()};g.w(TW,g.V);TW.prototype.onClick=
TW.prototype.Ra=
TW.prototype.Jc=function(a){g.V.prototype.Jc.call(this,a);this.api.logVisibility(this.element,this.visible&&a)};
TW.prototype.xa=function(){g.V.prototype.xa.call(this);g.pv(this.element,"ytp-copylink-button-visible")};g.w(UW,g.V);UW.prototype.show=function(){g.V.prototype.show.call(this);g.gv(this.B)};
UW.prototype.hide=
UW.prototype.eF=g.w(YW,g.V);g.k=YW.prototype;g.k.hJ=function(){};
g.k.oA=function(){};
g.k.fB=function(){return!0};
g.k.aca=
g.k.W5=
g.k.kJ=
g.k.Kca=
g.k.sK=
g.k.Dm=
g.k.JT=function(){this.enabled=!1;this.Dm()};
g.k.Jca=function(){this.Dm()};
g.k.e9=
g.k.w9=g.w($W,g.RW);$W.prototype.open=
$W.prototype.initialize=
$W.prototype.Uc=g.w(gYa,YW);g.k=gYa.prototype;g.k.Y9=
g.k.C9=
g.k.fB=function(){return!!this.j};
g.k.sK=function(){return!!this.j};
g.k.hJ=
g.k.oA=
g.k.JT=function(){this.MA();aX(this)};
g.k.Lba=
g.k.MA=
g.k.onVideoDataChange=
g.k.xa=g.w(sYa,g.V);sYa.prototype.onClick=g.w(tYa,g.TU);g.k=tYa.prototype;g.k.show=function(){g.TU.prototype.show.call(this);this.J.oa("infopaneldetailvisibilitychange",!0);this.J.logVisibility(this.element,!0);uYa(this,!0)};
g.k.hide=
g.k.getId=function(){return this.D};
g.k.kp=function(){return this.itemData.length};
g.k.onVideoDataChange=
g.k.xa=function(){this.hide();g.TU.prototype.xa.call(this)};g.w(xYa,g.V);g.k=xYa.prototype;g.k.onVideoDataChange=function(a,b){wYa(this,b);this.Ge&&zYa(this,this.Ge)};
g.k.B3=
g.k.IY=
g.k.A3=function(){this.B||this.rd();this.showControls=!0};
g.k.z3=
g.k.rd=function(){this.j&&!this.D&&(this.C.show(),this.J.oa("infopanelpreviewvisibilitychange",!0),this.J.logVisibility(this.element,!0))};
g.k.Qb=
g.k.Pba=var Nkb={"default":0,monoSerif:1,propSerif:2,monoSans:3,propSans:4,casual:5,cursive:6,smallCaps:7};Object.keys(Nkb).reduce(function(a,b){a[Nkb[b]]=b;return a},{});
var Okb={none:0,raised:1,depressed:2,uniform:3,dropShadow:4};Object.keys(Okb).reduce(function(a,b){a[Okb[b]]=b;return a},{});
var Pkb={normal:0,bold:1,italic:2,bold_italic:3};Object.keys(Pkb).reduce({});var Qkb,Rkb;Qkb=[{option:"#fff",text:"Blanco"},{option:"#ff0",text:"Amarillo"},{option:"#0f0",text:"Verde"},{option:"#0ff",text:"Cian"},{option:"#00f",text:"Azul"},{option:"#f0f",text:"Magenta"},{option:"#f00",text:"Rojo"},{option:"#080808",text:"Negro"}];Rkb=[{option:0,text:bX(0)},{option:.25,text:bX(.25)},{option:.5,text:bX(.5)},{option:.75,text:bX(.75)},{option:1,text:bX(1)}];
g.eX=[{option:"fontFamily",text:"Conjunto de fuentes",options:[{option:1,text:"Serif monoespaciada"},{option:2,text:"Serif proporcional"},{option:3,text:"Sans-Serif monoespaciada"},{option:4,text:"Sans-Serif proporcional"},{option:5,text:"Casual"},{option:6,text:"Cursiva"},{option:7,text:"Versalitas"}]},{option:"color",text:"Color de fuente",options:Qkb},{option:"fontSizeIncrement",text:"Tama\u00f1o de fuente",options:[{option:-2,text:bX(.5)},{option:-1,text:bX(.75)},{option:0,text:bX(1)},{option:1,
text:bX(1.5)},{option:2,text:bX(2)},{option:3,text:bX(3)},{option:4,text:bX(4)}]},{option:"background",text:"Color de fondo",options:Qkb},{option:"backgroundOpacity",text:"Opacidad del fondo",options:Rkb},{option:"windowColor",text:"Color de la ventana",options:Qkb},{option:"windowOpacity",text:"Opacidad de la ventana",options:Rkb},{option:"charEdgeStyle",text:"Estilo del borde de los caracteres",options:[{option:0,text:"Ninguno"},{option:4,text:"Sombra paralela"},{option:1,text:"Relieve"},{option:2,
text:"Hundido"},{option:3,text:"Contorno"}]},{option:"textOpacity",text:"Opacidad de la fuente",options:[{option:.25,text:bX(.25)},{option:.5,text:bX(.5)},{option:.75,text:bX(.75)},{option:1,text:bX(1)}]}];var Skb=[27,9,33,34,13,32,187,61,43,189,173,95,79,87,67,80,78,75,70,65,68,87,83,107,221,109,219];g.w(FYa,g.mL);g.k=FYa.prototype;
g.k.RW=
g.k.SW=
g.k.handleGlobalKeyUp=
g.k.handleGlobalKeyDown=
g.k.step=
g.k.Hr=
g.k.xa=function(){g.iv(this.D);g.mL.prototype.xa.call(this)};g.w(g.gX,g.V);g.gX.prototype.zr=ca(13);g.gX.prototype.Ra=
g.gX.prototype.Jc=function(a){g.V.prototype.Jc.call(this,a);this.J.logVisibility(this.element,this.visible&&a)};
g.gX.prototype.xa=function(){g.V.prototype.xa.call(this);g.pv(this.element,"ytp-overflow-button-visible")};g.w(GYa,g.TU);g.k=GYa.prototype;g.k.C3=
g.k.Qb=
g.k.show=
g.k.hide=
g.k.onFullscreenToggled=function(a){!a&&this.Xj()&&UU(this)};
g.k.isEmpty=function(){return 0===this.actionButtons.length};
g.k.focus=g.w(JYa,g.V);JYa.prototype.onClick=g.w(KYa,g.TU);g.k=KYa.prototype;g.k.show=
g.k.hide=
g.k.HL=
g.k.cK=
g.k.haa=
g.k.updatePlaylist=
g.k.focus=function(){this.selected.focus()};
g.k.xa=function(){this.hide();g.TU.prototype.xa.call(this)};g.w(hX,g.V);hX.prototype.hide=
hX.prototype.Ra=
hX.prototype.Jc=function(a){g.V.prototype.Jc.call(this,a);this.api.logVisibility(this.element,this.visible&&a)};
hX.prototype.j=g.w(LYa,g.V);g.k=LYa.prototype;g.k.E3=
g.k.D3=
g.k.L8=
g.k.r9=
g.k.F3=
g.k.uF=
g.k.Yb=
var NYa={"ytp-settings-button":g.dwa()};g.w(jX,g.V);jX.prototype.onStateChange=function(a){this.Ec(a.state)};
jX.prototype.Ec=
jX.prototype.onClick=g.w(kX,g.V);kX.prototype.onClick=
kX.prototype.j=
kX.prototype.Jc=function(a){g.V.prototype.Jc.call(this,a);this.api.logVisibility(this.element,this.visible&&a)};g.w(g.lX,g.V);g.k=g.lX.prototype;g.k.Ar=ca(10);g.k.onClick=
g.k.Ra=
g.k.Jc=function(a){g.V.prototype.Jc.call(this,a);this.api.logVisibility(this.element,this.visible&&a)};
g.k.xa=function(){g.V.prototype.xa.call(this);g.pv(this.element,"ytp-share-button-visible")};g.w(UYa,g.TU);g.k=UYa.prototype;g.k.G3=
g.k.Qb=
g.k.show=
g.k.i8=function(){this.Jb&&this.Ra()};
g.k.Ra=
g.k.onFullscreenToggled=
g.k.focus=function(){this.j.focus()};
g.k.xa=function(){g.TU.prototype.xa.call(this);VYa(this)};g.w(ZYa,YW);g.k=ZYa.prototype;g.k.xa=function(){dZa(this);YW.prototype.xa.call(this)};
g.k.hJ=
g.k.oA=
g.k.f$=function(a){this.Ba=a;this.Dm()};
g.k.onVideoDataChange=
g.k.fB=
g.k.kJ=
g.k.jg=
g.k.sf=g.w(fZa,g.V);
fZa.prototype.Ra=g.w(qX,g.TU);qX.prototype.show=function(){g.TU.prototype.show.call(this);this.j.start()};
qX.prototype.hide=function(){g.TU.prototype.hide.call(this);this.j.stop()};
qX.prototype.Rs=g.w(rX,g.V);rX.prototype.onClick=function(){this.J.Vt()};
rX.prototype.Ra=g.w(hZa,g.V);hZa.prototype.xa=function(){this.j=null;g.V.prototype.xa.call(this)};g.w(sX,g.V);sX.prototype.onClick=
sX.prototype.N=
sX.prototype.K=g.w(tX,sX);tX.prototype.onClickCommand=function(a){g.U(a,IT)&&this.Mc()};
tX.prototype.updateVideoData=
tX.prototype.Mc=g.w(uX,g.V);uX.prototype.G=
uX.prototype.Wf=
uX.prototype.K=
uX.prototype.hide=g.w(mZa,g.V);g.k=mZa.prototype;g.k.onClick=
g.k.yD=
g.k.TP=
g.k.uw=
g.k.g5=
g.k.disable=
g.k.Ra=
g.k.Am=
g.k.xa=g.w(vX,g.V);vX.prototype.onClick=g.w(wX,sX);wX.prototype.onClickCommand=
wX.prototype.updateVideoData=
wX.prototype.Mc=g.w(xX,g.V);xX.prototype.onClick=
xX.prototype.Ra=
xX.prototype.Jc=function(a){g.V.prototype.Jc.call(this,a);this.J.logVisibility(this.element,this.visible&&a)};g.w(g.yX,g.V);g.k=g.yX.prototype;g.k.KT=
g.k.Q9=
g.k.onVolumeChange=
g.k.setVolume=
g.k.Jc=function(a){g.V.prototype.Jc.call(this,a);this.J.logVisibility(this.element,this.visible&&a)};
var pZa=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",24.77," C",21.89,",",23.85," ",24,",",21.17," ",24,",",18," C",24,",",14.83," ",21.89,",",12.15," ",19,",",11.29," L",19,",",11.29," Z"],MZa=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",26.77," C",23.01,",",25.86," ",26,",",22.28," ",26,",",18," C",26,",",13.72," ",
23.01,",",10.14," ",19,",",9.23," L",19,",",11.29," Z"];g.w(g.zX,g.V);g.zX.prototype.onStateChange=function(a){this.Ec(a.state)};
g.zX.prototype.Ec=
g.zX.prototype.onVideoDataChange=
g.zX.prototype.Hr=g.w(g.AX,g.V);g.k=g.AX.prototype;g.k.onVideoDataChange=
g.k.IL=
g.k.onClick=
g.k.H3=
g.k.xa=g.w(VZa,g.V);g.k=VZa.prototype;g.k.J3=
g.k.KL=
g.k.JL=
g.k.I3=
g.k.sA=
g.k.play=
g.k.onExit=
g.k.Yb=
g.k.enable=
g.k.disable=
g.k.reset=
g.k.logVisibility=
g.k.xa=
g.w(XZa,g.V);g.w(YZa,g.V);g.w(b_a,g.V);g.w(CX,g.V);CX.prototype.Lb=e_a.prototype.update=g.w(f_a,g.V);g.w(g.FX,g.IG);g.k=g.FX.prototype;
g.k.n0=
g.k.Yb=
g.k.onClickCommand=
g.k.faa=
g.k.Mc=
g.k.K3=
g.k.Rs=
g.k.c7=function(){this.Rs("newdata",this.api.getVideoData())};
g.k.updateVideoData=
g.k.d7=
g.k.LT=
g.k.i$=
g.k.h$=
g.k.g$=
g.k.j$=
g.k.k$=
g.k.Kh=function(){this.tooltip.vO()};
g.k.EY=function(){this.Gb||(this.updateValue("clipstarticon",Kva()),this.updateValue("clipendicon",Kva()),g.nv(this.element,"ytp-clip-hover"))};
g.k.DY=
g.k.WJ=
g.k.Mca=
g.k.kba=
g.k.ov=function(a){this.B&&(this.B.onExit(null!=a),RX(this))};
g.k.uN=
g.k.xa=g.w(SX,g.V);SX.prototype.isActive=
SX.prototype.Ra=
SX.prototype.B=g.w(TX,g.V);TX.prototype.j=
TX.prototype.C=
TX.prototype.updateBadge=g.w(UX,fV);UX.prototype.isLoaded=
UX.prototype.Ra=
UX.prototype.onSelect=
UX.prototype.xa=function(){this.j&&this.Hb.hh(this);fV.prototype.xa.call(this)};g.w(g.VX,g.WU);g.k=g.VX.prototype;g.k.open=
g.k.Kj=
g.k.wM=
g.k.enable=
g.k.Jx=
g.k.kh=function(a){this.oa("select",a)};
g.k.zk=function(a){return a.toString()};
g.k.L3=
g.k.xa=g.w(XX,g.VX);XX.prototype.Ra=
XX.prototype.kh=
XX.prototype.j=function(a){return a.toString()};g.w(YX,fV);
YX.prototype.B=
YX.prototype.D=
YX.prototype.onSelect=
YX.prototype.xa=g.w(N_a,g.WU);N_a.prototype.onClick=g.w(O_a,g.VX);g.k=O_a.prototype;
g.k.UB=
g.k.NT=
g.k.kh=
g.k.open=
g.k.wM=
g.k.zk=g.w(ZX,g.V);g.k=ZX.prototype;g.k.init=
g.k.O3=
g.k.M3=
g.k.N3=
g.k.Uw=
g.k.focus=function(){this.Ga.focus()};g.w($X,ZX);$X.prototype.Ba=
$X.prototype.Uw=
$X.prototype.updateValues=g.w(U_a,g.IG);U_a.prototype.focus=function(){this.j.focus()};g.w(V_a,KW);g.w(W_a,g.VX);g.k=W_a.prototype;g.k.zk=
g.k.Ra=
g.k.Jx=
g.k.onPlaybackRateChange=
g.k.kh=g.w(b0a,g.VX);g.k=b0a.prototype;g.k.Kj=
g.k.getKey=
g.k.getOption=
g.k.zk=
g.k.kh=g.w(aY,g.LW);aY.prototype.ih=
aY.prototype.nk=g.w(bY,g.VX);bY.prototype.getKey=function(a){return a.languageCode};
bY.prototype.zk=
bY.prototype.kh=g.w(e0a,g.VX);g.k=e0a.prototype;g.k.getKey=
g.k.zk=
g.k.kh=
g.k.Ra=
g.k.P3=
g.k.nk=
g.k.O$=
g.k.xa=
g.k.open=g.w(g0a,g.RW);g.k=g0a.prototype;
g.k.initialize=
g.k.Uc=
g.k.hh=
g.k.rd=
g.k.Qb=
g.k.show=function(){g.RW.prototype.show.call(this);g.nv(this.J.getRootNode(),"ytp-settings-shown")};
g.k.hide=
g.k.jg=g.w(g.dY,g.V);g.dY.prototype.onClick=
g.dY.prototype.j=
g.dY.prototype.isEnabled=
g.dY.prototype.Ra=g.w(g.fY,g.V);g.k=g.fY.prototype;
g.k.Mc=
g.k.onLoopRangeChange=
g.k.uaa=function(){this.api.setLoopRange(null)};
g.k.onVideoDataChange=
g.k.updateVideoData=
g.k.onClick=
g.k.xa=function(){this.j&&this.j();g.V.prototype.xa.call(this)};g.w(k0a,g.V);g.k=k0a.prototype;g.k.uw=
g.k.OT=
g.k.S3=
g.k.Q3=
g.k.T$=
g.k.R3=
g.k.S$=
g.k.onVolumeChange=
g.k.oV=
g.k.xa=g.w(jY,g.V);
jY.prototype.onVideoDataChange=
jY.prototype.onClick=
jY.prototype.Yb=
jY.prototype.Jc=function(a){g.V.prototype.Jc.call(this,a);this.api.logVisibility(this.element,this.visible&&a)};g.w(m0a,g.mL);g.k=m0a.prototype;g.k.Wf=
g.k.nA=
g.k.T3=
g.k.hS=
g.k.Yb=
g.k.onVideoDataChange=
g.k.Lb=function(){return this.C.element};g.w(r0a,YW);g.k=r0a.prototype;g.k.hJ=
g.k.oA=
g.k.onVideoDataChange=
g.k.fB=function(){return this.enabled};
g.k.jg=
g.k.xa=function(){s0a(this);YW.prototype.xa.call(this)};var H3={},kY=(H3.CHANNEL_NAME="ytp-title-channel-name",H3.FULLERSCREEN_LINK="ytp-title-fullerscreen-link",H3.LINK="ytp-title-link",H3.SESSIONLINK="yt-uix-sessionlink",H3.SUBTEXT="ytp-title-subtext",H3.TEXT="ytp-title-text",H3.TITLE="ytp-title",H3);g.w(lY,g.V);lY.prototype.onClick=
lY.prototype.Ra=g.w(g.mY,g.V);g.k=g.mY.prototype;g.k.oR=
g.k.wK=
g.k.vO=
g.k.CF=
g.k.Hh=
g.k.MY=
g.k.X7=
g.k.Kh=
g.k.Ql=
g.k.xa=g.w(A0a,g.V);g.k=A0a.prototype;g.k.VB=
g.k.oe=
g.k.onClick=
g.k.zw=
g.k.Ra=
g.k.Jc=function(a){g.V.prototype.Jc.call(this,a);this.J.logVisibility(this.element,this.visible&&a)};g.w(g.nY,g.BW);g.k=g.nY.prototype;
g.k.init=
g.k.Oe=function(){return this.tooltip};
g.k.cO=function(){return this.Hg};
g.k.Ty=
g.k.NC=
g.k.eB=
g.k.YA=ca(5);g.k.Ar=ca(9);g.k.zr=ca(12);g.k.Wp=
g.k.Kt=
g.k.nA=
g.k.IP=
g.k.un=
g.k.uw=
g.k.qh=
g.k.showControls=
g.k.Yb=
g.k.PN=
g.k.Xp=
g.k.Dc=
g.k.handleGlobalKeyDown=
g.k.handleGlobalKeyUp=
g.k.mq=
g.k.pR=
g.k.v0=
g.k.k6=function(){G0a(this,this.api.getRootNode(),!0).focus()};
g.k.l6=
g.k.pp=
g.k.nu=function(){this.Lg.nu()};
g.k.uO=function(){this.Td.hide()};
g.k.BF=
g.k.eF=
g.k.dF=function(a,b){$Xa(this.ev,a,b)};
g.k.m9=
g.k.zw=function(){F0a(this)};
g.k.K9=
g.k.hW=function(){return this.contextMenu};
g.k.uy=
g.k.ov=g.w(g.oY,g.aW);g.oY.prototype.ql=function(){return!1};
g.oY.prototype.create=
g.oY.prototype.ri=function(){return this.chrome};var M0a=!1;g.w(pY,g.I);pY.prototype.C=
pY.prototype.load=
pY.prototype.N=
var I0a={Z_a:0,d3a:1,q1a:2,e3a:3,Hta:4,0:"PRIMARY",1:"SECONDARY",2:"RANDOM",3:"SENSITIVE_CONTENT",4:"C_YOUTUBE"};tY.prototype.xk=
tY.prototype.GE=function(){return this.Lf};g.w(vY,g.I);g.k=vY.prototype;g.k.tq=function(){return Array.from(this.xd.keys())};
g.k.Tt=
g.k.Ng=function(a){return this.xd.get(a).Ng};
g.k.Nh=
g.k.tA=
g.k.qn=
g.k.eA=
g.k.Hp=
g.k.xk=
g.k.Zk=
g.k.Zl=
g.k.xa=
var a1a=!1;var zY=[],Kbb=!1;g.u0=Sd(;g.w(AY,g.I);AY.prototype.K=
AY.prototype.G=
AY.prototype.xa=g.w(g.BY,XL);g.k=g.BY.prototype;g.k.isView=function(){return!0};
g.k.XQ=
g.k.Bv=function(){return KL(this.mediaElement.Bv(),this.start,this.end)};
g.k.Ih=function(){return KL(this.mediaElement.Ih(),this.start,this.end)};
g.k.rD=
g.k.getCurrentTime=
g.k.setCurrentTime=
g.k.getDuration=
g.k.play=
g.k.vc=
g.k.addEventListener=function(a,b){this.mediaElement.addEventListener(a,b)};
g.k.removeEventListener=function(a,b){this.mediaElement.removeEventListener(a,b)};
g.k.tG=function(){return this.mediaElement.tG()};
g.k.oy=function(a){this.mediaElement.oy(a)};
g.k.yq=function(){return this.mediaElement.yq()};
g.k.playVideo=function(){return this.mediaElement.playVideo()};
g.k.lN=function(){this.mediaElement.lN()};
g.k.hN=function(){this.mediaElement.hN()};
g.k.Gu=function(){return this.mediaElement.Gu()};
g.k.Lb=function(){return this.mediaElement.Lb()};
g.k.Ff=function(){return this.mediaElement.Ff()};
g.k.vG=function(a){this.mediaElement.vG(a)};
g.k.XJ=function(){this.mediaElement.XJ()};
g.k.getPlaybackRate=function(){return this.mediaElement.getPlaybackRate()};
g.k.setPlaybackRate=function(a){return this.mediaElement.setPlaybackRate(a)};
g.k.Ls=function(){return this.mediaElement.Ls()};
g.k.setLoop=function(a){this.mediaElement.setLoop(a)};
g.k.canPlayType=function(a,b){return this.mediaElement.canPlayType(a,b)};
g.k.isPaused=function(){return this.mediaElement.isPaused()};
g.k.Uf=function(){return this.mediaElement.Uf()};
g.k.Nh=function(){return this.mediaElement.Nh()};
g.k.PH=function(){return this.mediaElement.PH()};
g.k.XA=function(a){this.mediaElement.XA(a)};
g.k.uG=function(){return this.mediaElement.uG()};
g.k.load=function(){this.mediaElement.load()};
g.k.pause=function(){this.mediaElement.pause()};
g.k.yk=function(){return this.mediaElement.yk()};
g.k.QH=function(){return this.mediaElement.QH()};
g.k.Xg=function(){return this.mediaElement.Xg()};
g.k.tf=function(){return this.mediaElement.tf()};
g.k.getVideoPlaybackQuality=function(){return this.mediaElement.getVideoPlaybackQuality()};
g.k.Mh=function(){return this.mediaElement.Mh()};
g.k.Vt=function(){return this.mediaElement.Vt()};
g.k.togglePictureInPicture=function(){this.mediaElement.togglePictureInPicture()};
g.k.Ns=function(){return this.mediaElement.Ns()};
g.k.getSize=function(){return this.mediaElement.getSize()};
g.k.setSize=function(a){this.mediaElement.setSize(a)};
g.k.getVolume=function(){return this.mediaElement.getVolume()};
g.k.setVolume=function(a){this.mediaElement.setVolume(a)};
g.k.setAttribute=function(a,b){this.mediaElement.setAttribute(a,b)};
g.k.removeAttribute=function(a){this.mediaElement.removeAttribute(a)};
g.k.hasAttribute=function(a){return this.mediaElement.hasAttribute(a)};
g.k.rC=ca(30);g.k.KF=ca(32);g.k.LF=ca(34);g.k.Ey=ca(36);g.k.QC=function(){return this.mediaElement.QC()};
g.k.Wr=function(a){this.mediaElement.Wr(a)};
g.k.tD=function(a){return this.mediaElement.tD(a)};
g.k.IO=function(){return this.mediaElement.IO()};
g.k.stopVideo=function(){this.mediaElement.stopVideo()};
g.k.pN=function(a){this.mediaElement.pN(a)};
g.k.audioTracks=function(){return this.mediaElement.audioTracks()};
g.k.mR=function(a){this.mediaElement.mR(a)};g.w(j1a,g.I);g.k=j1a.prototype;g.k.getStatus=function(){return this.status};
g.k.Lu=
g.k.Kx=
g.k.SY=
g.k.Fg=
g.k.Oq=
g.k.xa=
g.k.QT=g.w(FY,g.I);FY.prototype.clearQueue=
FY.prototype.Rv=
FY.prototype.Oq=
FY.prototype.xa=g.w(C1a,g.AG);g.k=C1a.prototype;g.k.getVisibilityState=
g.k.Am=function(a){this.fullscreen!==a&&(this.fullscreen=a,this.jg())};
g.k.setMinimized=
g.k.setInline=function(a){this.inline!==a&&(this.inline=a,this.jg())};
g.k.aB=function(a){this.pictureInPicture!==a&&(this.pictureInPicture=a,this.jg())};
g.k.Mh=function(){return this.j};
g.k.isFullscreen=
g.k.bz=function(){return this.fullscreen};
g.k.gg=function(){return this.B};
g.k.isInline=function(){return this.inline};
g.k.isBackground=function(){return y1a()};
g.k.Zs=function(){return this.pictureInPicture};
g.k.Bz=function(){return!1};
g.k.jg=
g.k.xa=g.w(KY,g.I);KY.prototype.Jh=function(){return this.Fc||0};
KY.prototype.tv=
KY.prototype.Kf=
KY.prototype.xa=function(){this.Kf()};
g.w(F1a,g.I);g.k=F1a.prototype;g.k.Jh=function(){return this.Fc};
g.k.tv=function(){return this.B};
g.k.getType=function(){return this.type};
g.k.getVideoData=function(){return this.videoData};
g.k.Uj=function(){return this.videoData.clientPlaybackNonce};
g.k.yF=g.w(g.MY,g.I);g.k=g.MY.prototype;
g.k.onCueRangeEnter=
g.k.onCueRangeExit=
g.k.seekTo=
g.k.xa=
g.k.vR=
g.k.Pk=
g.k.aI=
g.k.Yy=
g.k.qF=
g.k.Wt=
g.k.aR=
g.k.UF=ca(43);
g.k.jQ=
g.k.fD=ca(45);g.k.Bq=function(){return this.qa.Bq()};
g.k.bE=function(a){this.qa.va("timelineerror",{e:a})};
g.k.xD=
g.k.cI=
g.k.Qs=
g.k.Ev=
g.k.It=
g.k.GN=function(){return this.ra};
g.k.Ft=
g.k.kN=
g.k.GR=
var N1a=0;g.w(h2a,g.I);g.k=h2a.prototype;g.k.addPlayerResponseForAssociation=
g.k.finishSegmentByCpn=
g.k.Ld=
g.k.Cz=
g.k.seekTo=
g.k.onCueRangeEnter=
g.k.GN=function(){return this.N};
g.k.xa=g.w(v2a,g.I);g.k=v2a.prototype;g.k.onCueRangeEnter=
g.k.onQueuedVideoLoaded=
g.k.seekTo=
g.k.lk=
g.k.isManifestless=
g.k.xa=
g.k.qe=function(a,b){this.j.qe(new fL(a,b))};
var w2a=0;var J2a="MWEB TVHTML5 TVHTML5_AUDIO TVHTML5_CAST TVHTML5_KIDS TVHTML5_FOR_KIDS TVHTML5_SIMPLY TVHTML5_SIMPLY_EMBEDDED_PLAYER TVHTML5_UNPLUGGED TVHTML5_VR TV_UNPLUGGED_CAST WEB WEB_CREATOR WEB_EMBEDDED_PLAYER WEB_EXPERIMENTS WEB_GAMING WEB_HEROES WEB_KIDS WEB_LIVE_STREAMING WEB_MUSIC WEB_MUSIC_ANALYTICS WEB_MUSIC_EMBEDDED_PLAYER WEB_REMIX WEB_UNPLUGGED WEB_UNPLUGGED_ONBOARDING WEB_UNPLUGGED_OPS WEB_UNPLUGGED_PUBLIC".split(" ");g.w(jZ,g.I);g.k=jZ.prototype;g.k.get=
g.k.set=
g.k.remove=
g.k.Kf=
g.k.xa=g.w(lZ,g.I);lZ.prototype.HH=
lZ.prototype.xa=g.w(N2a,g.I);N2a.prototype.xa=g.Tkb=Sd(;var I3;I3={};g.mZ=(I3.STOP_EVENT_PROPAGATION="html5-stop-propagation",I3.IV_DRAWER_ENABLED="ytp-iv-drawer-enabled",I3.IV_DRAWER_OPEN="ytp-iv-drawer-open",I3.MAIN_VIDEO="html5-main-video",I3.VIDEO_CONTAINER="html5-video-container",I3.VIDEO_CONTAINER_TRANSITIONING="html5-video-container-transitioning",I3.HOUSE_BRAND="house-brand",I3);g.w(R2a,g.V);g.k=R2a.prototype;g.k.Wr=
g.k.Dj=
g.k.fN=
g.k.lK=
g.k.resize=
g.k.Rs=function(a,b){this.updateVideoData(b)};
g.k.updateVideoData=
g.k.setGlobalCrop=
g.k.setCenterCrop=function(a){this.lV=a;this.resize()};
g.k.Am=function(){};
g.k.getPlayerSize=
g.k.Wj=
g.k.getVideoAspectRatio=
g.k.getVideoContentRect=
g.k.cB=function(a){this.EQ=a;this.resize()};
g.k.QD=function(){return this.LJ};
g.k.onMutedAutoplayChange=function(){nZ(this)};
g.k.setInternalSize=
g.k.xa=g.k=X2a.prototype;g.k.click=
g.k.createClientVe=
g.k.createServerVe=
g.k.destroyVe=
g.k.yV=
g.k.setTrackingParams=
g.k.hasVe=function(a){return this.elements.has(a)};Z2a.prototype.setPlaybackRate=
Z2a.prototype.getPlaybackRate=function(){return this.playbackRate};sZ.prototype.seek=
sZ.prototype.Uf=function(){return this.G};
sZ.prototype.tR=function(a){this.C=a};
var f3a=2/24;var k3a=0;g.k=CZ.prototype;g.k.Bw=
g.k.Jt=
g.k.Hu=
g.k.Zq=
g.k.yw=
g.k.Ur=
g.k.now=
var BZ;g.w(FZ,CZ);g.k=FZ.prototype;g.k.Ur=
g.k.Is=
g.k.yI=
g.k.CP=
g.k.Hu=
g.k.fJ=
g.k.Fn=
g.k.yW=
g.k.Ov=
g.k.VH=function(){return this.Za};
g.k.SQ=
g.k.FH=
g.k.WN=
g.k.zW=function(){return this.N};HZ.prototype.feed=
HZ.prototype.yf=
HZ.prototype.dispose=g.k=IZ.prototype;g.k.FN=function(){return 0};
g.k.JH=function(){return null};
g.k.nW=function(){return null};
g.k.jt=function(){return 1<=this.state};
g.k.isComplete=function(){return 3<=this.state};
g.k.im=function(){return 5===this.state};
g.k.onStateChange=function(){};
g.k.Ec=
g.k.eA=
g.k.isDisposed=
g.k.Kd=
g.k.dispose=
g.k.aO=function(){return 0};
g.k.Ys=function(){return!1};g.k=y3a.prototype;g.k.qA=
g.k.onError=
g.k.onDone=
g.k.Gv=
g.k.getResponseHeader=
g.k.eD=function(){return+this.getResponseHeader("content-length")};
g.k.pn=function(){return this.B};
g.k.Lw=function(){return 200<=this.status&&300>this.status&&!!this.B};
g.k.Rk=
g.k.Vw=function(){var a=this.j;this.j=new FO;return a};
g.k.GJ=function(){return this.j};
g.k.abort=function(){this.isDisposed=!0;this.xhr.abort()};
g.k.kB=function(){return!0};
g.k.SJ=function(){return this.C};
g.k.tf=function(){return""};g.k=A3a.prototype;
g.k.oF=
g.k.getResponseHeader=
g.k.abort=function(){};
g.k.Gv=function(){return!0};
g.k.eD=function(){return this.range.length};
g.k.pn=function(){return this.loaded};
g.k.Lw=function(){return!!this.loaded};
g.k.Rk=function(){return!!this.B.getLength()};
g.k.Vw=
g.k.GJ=function(){return this.B};
g.k.kB=function(){return!0};
g.k.SJ=function(){return!!this.error};
g.k.tf=function(){return this.error};g.k=C3a.prototype;g.k.start=
g.k.onDone=
g.k.getResponseHeader=function(a){return this.G?this.G.get(a):null};
g.k.Gv=function(){return!!this.G};
g.k.pn=function(){return this.B};
g.k.eD=function(){return+this.getResponseHeader("content-length")};
g.k.Lw=
g.k.Rk=function(){return!!this.j.getLength()};
g.k.Vw=
g.k.GJ=
g.k.isDisposed=function(){return this.K};
g.k.abort=
g.k.kB=function(){return!0};
g.k.SJ=function(){return this.N};
g.k.tf=function(){return this.errorMessage};g.k=D3a.prototype;g.k.onDone=
g.k.qA=
g.k.Wf=
g.k.Gv=
g.k.getResponseHeader=
g.k.eD=
g.k.pn=function(){return this.B};
g.k.Lw=
g.k.Rk=
g.k.Vw=
g.k.GJ=
g.k.abort=function(){this.isDisposed=!0;this.xhr.abort()};
g.k.kB=function(){return!1};
g.k.SJ=function(){return!1};
g.k.tf=function(){return""};g.w(KZ,g.I);g.k=KZ.prototype;g.k.nba=
g.k.oB=
g.k.canRetry=
g.k.Xg=function(){return this.lastError};
g.k.Av=function(){return this.j};
g.k.dispose=function(){this.B.dispose();g.I.prototype.dispose.call(this)};g.w(uZ,IZ);g.k=uZ.prototype;g.k.Aq=function(){return this.timing.requestNumber};
g.k.Pe=function(){return this.je.Pe()};
g.k.uq=
g.k.iW=function(){return r3a(this.timing)};
g.k.tf=function(){return this.xhr.tf()||""};
g.k.Ov=
g.k.Jt=
g.k.Bw=
g.k.Zq=
g.k.pO=
g.k.canRetry=
g.k.onStateChange=
g.k.oB=function(a){this.Hd.oB(a)};
g.k.VW=
g.k.Av=function(){return this.Hd.Av()};
g.k.dispose=
g.k.ly=
g.k.Ys=
g.k.xk=
g.k.Zk=
g.k.GE=
g.k.Zl=
g.k.vA=
g.k.yw=
g.k.pn=function(){return this.xhr.pn()};
g.k.FN=function(){return this.Gy};
g.k.Is=
g.k.yI=
g.k.aO=
g.k.JH=function(){this.xhr&&(this.yp=Number(this.xhr.getResponseHeader("X-Head-Seqnum")));return this.yp};
g.k.nW=
g.k.Xg=function(){return this.Hd.Xg()};
g.k.p8=g.w(PZ,CZ);g.k=PZ.prototype;g.k.Hu=
g.k.CP=
g.k.fJ=
g.k.zE=
g.k.sE=
g.k.zW=function(){return this.N};
g.k.FH=
g.k.WN=
g.k.Fn=function(){return 0<this.B};
g.k.Ur=
g.k.SQ=function(){};
g.k.VH=function(){return NaN};
g.k.yW=var J3={},G6a=(J3["1h"]=8,J3["9h"]=4,J3["1"]=8,J3["9"]=4,J3["("]=4,J3.h=2,J3.H=2,J3),K3={},H6a=(K3.o=3,K3.O=3,K3.so=3,K3.a=1,K3.ah=1,K3.A=1,K3.m=1,K3.M=1,K3.sa=1,K3.mac3=7,K3.MAC3=7,K3.meac3=5,K3.MEAC3=5,K3),L3={},I6a=(L3.o=0,L3.O=0,L3.a=0,L3.ah=0,L3.A=0,L3.m=1,L3.M=1,L3.mac3=1,L3.MAC3=1,L3.meac3=1,L3.MEAC3=1,L3.so=4,L3.sa=4,L3);var M3={},S3a=(M3["140"]={numChannels:2},M3["141"]={numChannels:2},M3["251"]={audioSampleRate:48E3,numChannels:2},M3["380"]={numChannels:6},M3["328"]={numChannels:6},M3),N3={},P3a=(N3["1"]='video/mp4; codecs="av01.0.08M.08"',N3["1h"]='video/mp4; codecs="av01.0.12M.10.0.110.09.16.09.0"',N3["9"]='video/webm; codecs="vp9"',N3["("]='video/webm; codecs="vp9"',N3["9h"]='video/webm; codecs="vp09.02.51.10.01.09.16.09.00"',N3.h='video/mp4; codecs="avc1.64001e"',N3.H='video/mp4; codecs="avc1.64001e"',N3.o=
'audio/webm; codecs="opus"',N3.a='audio/mp4; codecs="mp4a.40.2"',N3.ah='audio/mp4; codecs="mp4a.40.2"',N3.mac3='audio/mp4; codecs="ac-3"; channels=6',N3.meac3='audio/mp4; codecs="ec-3"; channels=6',N3),O3={},Q3a=(O3["337"]={width:3840,height:2160,bitrate:3E7,fps:30},O3["336"]={width:2560,height:1440,bitrate:15E6,fps:30},O3["335"]={width:1920,height:1080,bitrate:75E5,fps:30},O3["702"]={width:7680,height:4320,bitrate:4E7,fps:60},O3["701"]={width:3840,height:2160,bitrate:2E7,fps:60},O3["700"]={width:2560,
height:1440,bitrate:1E7,fps:60},O3["412"]={width:1920,height:1080,bitrate:85E5,fps:60,cryptoblockformat:"subsample"},O3["359"]={width:1920,height:1080,bitrate:8E6,fps:30,cryptoblockformat:"subsample"},O3["411"]={width:1920,height:1080,bitrate:3316E3,fps:60,cryptoblockformat:"subsample"},O3["410"]={width:1280,height:720,bitrate:4746E3,fps:60,cryptoblockformat:"subsample"},O3["409"]={width:1280,height:720,bitrate:1996E3,fps:60,cryptoblockformat:"subsample"},O3["360"]={width:1920,height:1080,bitrate:5331E3,
fps:30,cryptoblockformat:"subsample"},O3["358"]={width:1280,height:720,bitrate:3508E3,fps:30,cryptoblockformat:"subsample"},O3["357"]={width:1280,height:720,bitrate:3206E3,fps:30,cryptoblockformat:"subsample"},O3["274"]={width:1280,height:720,bitrate:1446E3,fps:30,cryptoblockformat:"subsample"},O3["315"]={width:3840,height:2160,bitrate:2E7,fps:60},O3["308"]={width:2560,height:1440,bitrate:1E7,fps:60},O3["303"]={width:1920,height:1080,bitrate:5E6,fps:60},O3["302"]={width:1280,height:720,bitrate:25E5,
fps:60},O3["299"]={width:1920,height:1080,bitrate:75E5,fps:60},O3["298"]={width:1280,height:720,bitrate:35E5,fps:60},O3["571"]={width:7680,height:4320,bitrate:3E7,fps:60},O3["401"]={width:3840,height:2160,bitrate:15E6,fps:60},O3["400"]={width:2560,height:1440,bitrate:75E5,fps:60},O3["399"]={width:1920,height:1080,bitrate:2E6,fps:60},O3["398"]={width:1280,height:720,bitrate:1E6,fps:60},O3["313"]={width:3840,height:2160,bitrate:8E6,fps:30},O3["271"]={width:2560,height:1440,bitrate:4E6,fps:30},O3["248"]=
{width:1920,height:1080,bitrate:2E6,fps:30},O3["247"]={width:1280,height:720,bitrate:15E5,fps:30},O3["137"]={width:1920,height:1080,bitrate:4E6,fps:30},O3["136"]={width:1280,height:720,bitrate:3E6,fps:30},O3["385"]={width:1920,height:1080,bitrate:6503313,fps:60},O3["376"]={width:1280,height:720,bitrate:5706960,fps:60},O3["384"]={width:1280,height:720,bitrate:3660979,fps:60},O3["225"]={width:1280,height:720,bitrate:5805E3,fps:30},O3["224"]={width:1280,height:720,bitrate:453E4,fps:30},O3["145"]={width:1280,
height:720,bitrate:2682052,fps:30},O3);var QZ,Z3a=[["337","336","335"],["702","701","700"],["315","308","303","302"],["299","298"],["571","401","400","399","398"],["313","271","248","247"],["137","136"]],$3a=[["411","410","409"],["360","358","357","274"],["385","376","384"],["225","224","145"]],a4a=["412","359"],b4a=[["140"],["251"],["380"],["328"]],P3={},W3a=(P3["398"]=["397","396","395","394"],P3["247"]=["244","243","242"],P3["136"]=["135","134","133","160"],P3["141"]=["140"],P3["251"]=["250"],P3),Q3={},X3a=(Q3["274"]=["317","273","318",
"280","279"],Q3["145"]=["144","222","223","143","142"],Q3["141"]=["149"],Q3["140"]=["149"],Q3["380"]=["381"],Q3["328"]=["329"],Q3),R3={},U3a=(R3["133"]=240,R3["134"]=360,R3["135"]=480,R3["136"]=720,R3["137"]=1080,R3["242"]=240,R3["243"]=360,R3["244"]=480,R3["247"]=720,R3["248"]=1080,R3["298"]=720,R3["299"]=1080,R3["302"]=720,R3["303"]=1080,R3["395"]=240,R3["396"]=360,R3["397"]=480,R3["398"]=720,R3["399"]=1080,R3);g.w(i4a,SU);g.k=i4a.prototype;g.k.lJ=
g.k.yE=
g.k.uE=
g.k.xE=function(a){a=RTa(new RO(a));this.Ib.xE(a)};
g.k.wE=function(a){a=aP(a,ZTa);this.Ib.wE(a)};
g.k.SP=
g.k.Ip=function(a){a=nUa(new RO(a));this.Ib.Ip(a)};
g.k.gQ=function(a){a=gUa(new RO(a));this.Ib.gQ(a)};
g.k.vE=function(a){a=jUa(new RO(a));this.Ib.vE(a)};
g.k.iQ=function(a){a={redirectUrl:XO(new RO(a),1)};this.Ib.iQ(a)};
g.k.YP=
g.k.Hp=
g.k.rA=function(a){this.Ib.rA(a)};
g.k.aQ=
g.k.zE=function(a){a={uM:UO(new RO(a),1)};this.Ib.zE(a)};
g.k.sE=
g.k.pA=function(a){this.Ib.pA(a)};
g.k.tm=g.w(RZ,g.I);g.k=RZ.prototype;g.k.Jt=
g.k.Bw=function(){};
g.k.Zq=
g.k.pO=
g.k.Zl=
g.k.vA=function(a,b){this.zba.vA(a,b)};
g.k.yw=
g.k.Ip=function(a){this.Ib.Ip(a)};
g.k.gQ=
g.k.jY=
g.k.vE=function(a){this.Ib.vE(a)};
g.k.iQ=
g.k.zE=function(a){this.Je instanceof PZ&&this.Je.zE(a)};
g.k.sE=
g.k.lQ=
g.k.SP=
g.k.xE=
g.k.pA=function(a){this.Ib.pA(a)};
g.k.uE=function(a,b,c){this.Ib.uE(a,b,c)};
g.k.yE=function(a){this.policy.Qf&&this.Ib.yE(a)};
g.k.wE=
g.k.tm=
g.k.canRetry=
g.k.dispose=
g.k.Ec=
g.k.Qv=function(){return this.info.Qv()};
g.k.tA=
g.k.Hp=function(a,b){this.hg.Hp(a,b)};
g.k.rA=function(a){this.requestIdentifier=a};
g.k.xk=function(a){return this.hg.xk(a)};
g.k.qn=function(a){return this.hg.qn(a)};
g.k.Zk=function(a){return this.hg.Zk(a)};
g.k.tq=function(){return this.hg.tq()};
g.k.Is=function(){return 1};
g.k.Aq=function(){return this.Je.requestNumber};
g.k.XN=function(){return this.requestIdentifier};
g.k.gW=function(){return this.clipId};
g.k.Pe=function(){return this.je.Pe()};
g.k.AY=function(){this.ly()};
g.k.ly=
g.k.isComplete=function(){return 3<=this.state};
g.k.FX=function(){return 3===this.state};
g.k.im=function(){return 5===this.state};
g.k.hX=function(){return this.isComplete()};
g.k.jt=function(){return 1<=this.state};
g.k.Ys=function(){return!1};
g.k.Av=function(){return 0};
g.k.fW=
g.k.VW=function(){};
g.k.BW=function(){return O6a(this.info)};
g.k.Xg=function(){return this.Hd.Xg()};
g.k.uq=l4a.prototype.tick=g.w(w4a,g.AG);g.k=w4a.prototype;
g.k.cQ=
g.k.bQ=
g.k.Ev=function(){this.G&&this.G.Ev()};
g.k.va=function(a,b){this.Aa.va(a,b)};
g.k.Cr=g.w(YZ,g.I);YZ.prototype.qo=C4a.prototype.mJ=
C4a.prototype.qo=T4a.prototype.RN=
T4a.prototype.Rp=function(a){this.timestampOffset=a};c5a.prototype.dispose=function(){this.ra=!0};
c5a.prototype.isDisposed=function(){return this.ra};
g.w(k_,Error);var Bbb=new Uint8Array([0,0,0,38,112,115,115,104,0,0,0,0,237,239,139,169,121,214,74,206,163,200,39,220,213,29,33,237,0,0,0,6,72,227,220,149,155,6]);n_.prototype.skip=
n_.prototype.Xl=function(){return this.offset};g.k=v5a.prototype;g.k.xW=function(){return this.B};
g.k.Qn=
g.k.Ik=
g.k.Tt=
g.k.qn=
g.k.zi=
g.k.getDuration=g.w(tZ,IZ);g.k=tZ.prototype;g.k.onStateChange=
g.k.uq=
g.k.iW=function(){return 0};
g.k.Ov=function(){return!0};
g.k.xk=function(){return this.hg.xk(this.formatId)};
g.k.GE=function(){return[]};
g.k.Zk=
g.k.Xg=function(){return this.lastError};
g.k.Av=function(){return 0};g.k=O5a.prototype;g.k.Qn=function(){return this.D.Qn()};
g.k.Tt=
g.k.getDuration=
g.k.Ik=
g.k.SN=function(){return this.D};
g.k.isRequestPending=
g.k.Rp=function(a){var b;null==(b=this.Z)||b.Rp(a)};g.w(E_,g.I);E_.prototype.OO=
E_.prototype.Ea=
E_.prototype.Qs=
E_.prototype.xa=
var n6a=2/24;g.w(J_,g.I);J_.prototype.qE=
J_.prototype.h_=
J_.prototype.qo=var K6a={WEB:1,MWEB:2,TVHTML5:7,WEB_UNPLUGGED:41,WEB_EMBEDDED_PLAYER:56,TVHTML5_AUDIO:57,TV_UNPLUGGED_CAST:58,TVHTML5_KIDS:59,WEB_MUSIC:61,WEB_CREATOR:62,TVHTML5_UNPLUGGED:65,WEB_REMIX:67,TVHTML5_SIMPLY:75,WEB_KIDS:76,TVHTML5_SIMPLY_EMBEDDED_PLAYER:85,WEB_MUSIC_EMBEDDED_PLAYER:86,WEB_MUSIC_ANALYTICS:31,WEB_GAMING:32,WEB_EXPERIMENTS:42,WEB_HEROES:60,WEB_UNPLUGGED_ONBOARDING:69,WEB_UNPLUGGED_OPS:70,WEB_UNPLUGGED_PUBLIC:71,TVHTML5_VR:72,TVHTML5_FOR_KIDS:93};K_.prototype.Qv=function(){return 1===this.requestType};
K_.prototype.JN=g.w(L_,g.I);L_.prototype.encrypt=
L_.prototype.decrypt=U6a.prototype.decrypt=var d7a=!!Uint8Array.prototype.copyWithin,O_=[],V6a=[],Y6a=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q_=[],P_=[],R_=[],W6a=[];g.w(f7a,SU);g.k=f7a.prototype;g.k.ZP=function(){this.pd.ZP()};
g.k.lJ=
g.k.pA=function(a){this.pd.WX=a};
g.k.WP=
g.k.Ht=function(a){this.L("html5_enable_lawnmower_messaging")&&(a=aP(a,FTa),this.pd.Ht(a))};
g.k.aQ=
g.k.YP=
g.k.Hp=
g.k.rA=function(a){this.pd.rA(a)};
g.k.fQ=
g.k.Ip=
g.k.Pd=function(a){this.pd.Pd(a)};
g.k.Li=function(a){return this.pd.Li(a)};
g.k.L=function(a){return this.pd.L(a)};g.w(V_,g.I);g.k=V_.prototype;g.k.gW=function(){return""};
g.k.tq=
g.k.Zk=
g.k.xk=function(a,b){var c;return(null==(c=M_(this,b))?void 0:c.xk(a))||[]};
g.k.qn=
g.k.Ec=function(a){this.state=a;this.notifySubscribers()};
g.k.Qv=function(){return!1};
g.k.Pd=function(a){this.qa.Pd(a)};
g.k.Li=function(a){return this.qa.Li(a)};
g.k.vA=function(a,b){this.wm.vA(a,b)};
g.k.QP=
g.k.fQ=
g.k.tA=
g.k.WP=function(a){this.Lz=a};
g.k.Ht=function(a){this.W.Ht(a)};
g.k.Ip=
g.k.ZP=
g.k.va=function(a,b,c){this.qa.va(a,b,void 0===c?!1:c)};
g.k.Hp=
g.k.rA=
g.k.fetch=
g.k.Bw=function(){this.Pd("orh_r")};
g.k.Jt=
g.k.Zq=
g.k.fW=function(){};
g.k.AY=
g.k.U=function(){return this.W};
g.k.L=function(a){return this.W.L(a)};
g.k.q8=
g.k.i5=
g.k.nO=
g.k.qj=
g.k.isComplete=
g.k.hX=
g.k.FX=function(){return!1};
g.k.im=
g.k.notifySubscribers=
g.k.BW=
g.k.xa=
g.k.Zl=
g.k.Aq=function(){return this.Je.requestNumber};
g.k.XN=function(a){return this.UZ.get(a)};g.w(x7a,g.I);g.k=x7a.prototype;g.k.dK=
g.k.NO=
g.k.Qs=
g.k.Ip=
g.k.vE=
g.k.lQ=
g.k.xE=
g.k.pA=
g.k.tm=function(a){this.Aa.tm(a)};
g.k.uE=
g.k.yE=function(){};
g.k.wE=
g.k.oe=
g.k.JN=
g.k.fI=
g.k.xa=J7a.prototype.yf=
J7a.prototype.clear=g.w(g.Y_,g.I);g.k=g.Y_.prototype;g.k.initialize=
g.k.resume=
g.k.Ry=
g.k.setAudioTrack=
g.k.setPlaybackRate=
g.k.qE=
g.k.fI=
g.k.SH=function(){return this.qa.SH()};
g.k.tm=function(a){this.qa.tm(a)};
g.k.jz=function(){return this.qa.jz()};
g.k.Vl=function(){return this.qa.Vl()};
g.k.nQ=function(a){this.qa.nQ(a)};
g.k.Laa=
g.k.yf=
g.k.kH=function(a){this.qa.kH(a)};
g.k.lH=function(a){this.qa.lH(a)};
g.k.KE=
g.k.U3=
g.k.V8=
g.k.xw=function(a){this.qa.xw(a)};
g.k.cQ=
g.k.bQ=
g.k.mJ=function(a){this.j.mJ(a)};
g.k.uD=ca(20);g.k.pK=
g.k.Xi=function(){return this.pc};
g.k.xI=
g.k.seek=
g.k.NO=
g.k.dK=function(a){this.ra.dK(a)};
g.k.getCurrentTime=function(){return this.currentTime};
g.k.IN=function(){return this.audioTrack.j.info};
g.k.LN=function(){return this.videoTrack.j.info};
g.k.HN=function(){return this.audioTrack.j.info.ub};
g.k.KN=
g.k.xa=
g.k.handleError=
g.k.vc=
g.k.Ik=
g.k.DN=function(){return qZ(this.Z)};
g.k.va=
g.k.oe=function(){return this.qa.oe()};
g.k.iq=
g.k.Rc=function(){return this.timestampOffset};
g.k.Uf=function(){return this.B.Uf()};
g.k.Ev=function(){this.G.Ev()};
g.k.qo=
g.k.qF=
g.k.Cr=
g.k.sW=function(){return this.manifest};
g.k.isOffline=
g.k.aF=function(a,b){this.qa.aF(a,b)};
g.k.WQ=
g.k.SI=
g.k.tR=
g.k.MM=function(){this.qa.MM()};
g.k.RI=
g.k.PQ=
g.k.Ot=function(){this.qa.Ot()};
g.k.Zn=function(a){this.qa.Zn(a)};
g.k.Pw=function(a){this.qa.Pw(a)};g.k=g.d0.prototype;g.k.Yy=function(a,b,c,d,e,f){return this.jd.Yy(a,b,c,d,e,f)};
g.k.aI=function(a,b,c,d,e,f){return this.jd.aI(a,b,c,d,e,f)};
g.k.cI=function(a){this.jd.cI(a)};
g.k.Qs=function(a,b){return this.jd.Qs(a,b)};
g.k.Ev=function(){this.jd.Ev()};
g.k.qF=
g.k.Wt=function(a,b){this.jd.Wt(a,b)};
g.k.aR=function(){this.jd.aR()};
g.k.fD=ca(44);g.k.Pk=function(a,b,c){this.jd.Pk(a,b,c)};
g.k.UF=ca(42);g.k.jQ=
g.k.vR=function(a){this.jd.vR(a)};
g.k.Ft=function(a){return this.jd.Ft(a)};
g.k.kN=function(a){return this.jd.kN(a)};g.w(e0,g.AG);g.w(f0,e0);f0.prototype.K=
f0.prototype.G=
f0.prototype.xa=g.w(g0,e0);
g0.prototype.D=
g0.prototype.xa=var S3={},D8a=(S3.DRM_TRACK_TYPE_AUDIO="AUDIO",S3.DRM_TRACK_TYPE_SD="SD",S3.DRM_TRACK_TYPE_HD="HD",S3.DRM_TRACK_TYPE_UHD1="UHD1",S3);g.w(z8a,g.I);g.w(F8a,g.AG);g.k=F8a.prototype;g.k.Gp=
g.k.error=
g.k.shouldRetry=
g.k.xa=
g.k.vc=
g.k.oh=
g.k.Pe=function(){return this.url};g.w(j0,g.I);g.k=j0.prototype;g.k.V3=
g.k.Gp=
g.k.ZY=
g.k.YY=
g.k.XY=
g.k.update=
g.k.xa=g.w(k0,g.I);g.k=k0.prototype;g.k.qM=
g.k.setServerCertificate=
g.k.createSession=
g.k.Y3=function(a){var b=b9a(this,a);b&&b.ZY(a)};
g.k.X3=function(a){var b=b9a(this,a);b&&b.YY(a)};
g.k.W3=
g.k.getMetrics=
g.k.xa=g.k=l0.prototype;g.k.get=
g.k.remove=
g.k.Kf=
g.k.set=
g.k.findIndex=g.w(e9a,g.AG);g.k=e9a.prototype;g.k.v9=
g.k.S9=
g.k.xw=
g.k.QU=
g.k.createSession=
g.k.UY=
g.k.VY=
g.k.gZ=
g.k.Gp=
g.k.jJ=function(a,b){this.isDisposed()||this.oa("ctmp",a,b)};
g.k.LY=
g.k.nJ=
g.k.wv=function(){return this.Z};
g.k.iS=
g.k.xa=
g.k.vc=
g.k.oh=
g.k.jj=g.w(l9a,g.I);g.k=l9a.prototype;g.k.pH=
g.k.AI=function(){return this.B};
g.k.handleError=
g.k.va=
g.k.qe=x9a.prototype.L=function(a){return this.W.L(a)};g.w(p0,g.I);p0.prototype.onError=
p0.prototype.send=
p0.prototype.xa=
var Ukb=/\bnet\b/;var Q9a=/[?&]cpn=/;var V9a=Math.pow(10,8);g.w(g.s0,g.I);g.k=g.s0.prototype;g.k.f7=
g.k.kD=function(){return this.Na};
g.k.oD=
g.k.wF=
g.k.ZE=
g.k.reportStats=
g.k.Ot=
g.k.Pw=function(a){this.wb=a};
g.k.n_=
g.k.AE=
g.k.mE=
g.k.Gt=ca(48);g.k.Wn=function(a){this.Ea=a};
g.k.onPlaybackRateChange=
g.k.Nn=ca(27);g.k.getPlayerState=
g.k.xa=
g.k.UJ=
g.k.va=
g.k.YE=
g.k.Nw=
g.k.resume=
var T3={},Vkb=(T3[5]="N",T3[-1]="N",T3[3]="B",T3[0]="EN",T3[2]="PA",T3[1]="PL",T3),q0=[];l$a.prototype.update=q$a.prototype.send=
q$a.prototype.B=
var U3={},w$a=(U3.LIVING_ROOM_APP_MODE_UNSPECIFIED=0,U3.LIVING_ROOM_APP_MODE_MAIN=1,U3.LIVING_ROOM_APP_MODE_KIDS=2,U3.LIVING_ROOM_APP_MODE_MUSIC=3,U3.LIVING_ROOM_APP_MODE_UNPLUGGED=4,U3.LIVING_ROOM_APP_MODE_GAMING=5,U3),V3={},v$a=(V3.EMBEDDED_PLAYER_MODE_UNKNOWN=0,V3.EMBEDDED_PLAYER_MODE_DEFAULT=1,V3.EMBEDDED_PLAYER_MODE_PFP=2,V3.EMBEDDED_PLAYER_MODE_PFL=3,V3),W3={},p$a=(W3[0]=0,W3[1]=1,W3[2]=2,W3[3]=3,W3);g.w(y0,g.I);g.k=y0.prototype;g.k.Wf=
g.k.xa=
g.k.vc=
g.k.pu=
g.k.Wi=J$a.prototype.isEmpty=E0.prototype.L=function(a){return this.W.L(a)};
E0.prototype.getCurrentTime=
E0.prototype.Ui=
var L$a={other:1,none:2,wifi:3,cellular:7,ethernet:30};g.w(g.F0,g.I);g.k=g.F0.prototype;g.k.Wf=
g.k.Wn=function(a){this.qoe&&this.qoe.Wn(a)};
g.k.qe=
g.k.AE=function(a){this.qoe&&this.qoe.AE(a)};
g.k.mE=function(a){this.qoe&&this.qoe.mE(a)};
g.k.onPlaybackRateChange=
g.k.Gt=ca(47);g.k.va=function(a,b,c){this.qoe&&this.qoe.va(a,b,c)};
g.k.YE=function(a,b,c){this.qoe&&this.qoe.YE(a,b,c)};
g.k.ZE=
g.k.Ot=function(){this.qoe&&this.qoe.Ot()};
g.k.Pw=function(a){this.qoe&&this.qoe.Pw(a)};
g.k.Nw=
g.k.Nn=ca(26);g.k.kD=
g.k.vc=
g.k.oD=function(){var a;return null==(a=this.qoe)?void 0:a.oD()};
g.k.wF=function(a,b){var c;null==(c=this.qoe)||c.wF(a,b)};
g.k.Wi=
g.k.pu=function(){this.j&&this.j.pu()};
g.k.getVideoData=function(){return this.provider.videoData};
g.k.resume=function(){this.qoe&&this.qoe.resume()};g.w(G0,g.I);G0.prototype.ZM=
G0.prototype.wc=g.w(H0,g.I);g.k=H0.prototype;g.k.sf=
g.k.Yn=
g.k.SC=
g.k.Vl=
g.k.reset=
g.k.zf=
g.k.RF=
g.k.tH=
g.k.wH=
g.k.Fo=
g.k.zX=
g.k.xa=
g.CY.sI(H0,{sf:"crmacr",tH:"crmncr",wH:"crmxcr",zX:"crmis",Yn:"crmrcr"});g.w(K0,g.AG);K0.prototype.Nq=function(){return this.N};
K0.prototype.xq=g.w(P0,g.I);P0.prototype.yf=
P0.prototype.qe=
P0.prototype.vc=
N0.prototype.reset=
N0.prototype.test=
N0.prototype.vc=g.w(oab,g.I);g.k=oab.prototype;g.k.setMediaElement=
g.k.getCurrentTime=
g.k.Ui=
g.k.xq=
g.k.isAtLiveHead=
g.k.Nq=function(){return!!this.B&&this.B.Nq()};
g.k.seekTo=
g.k.Ne=
g.k.Ld=
g.k.wN=
g.k.xI=
g.k.xa=
g.k.vc=
g.k.mQ=function(a){this.timestampOffset=a};
g.k.getStreamTimeOffset=
g.k.Rc=function(){return this.timestampOffset};
g.k.hf=
g.k.yv=
g.k.ww=
g.k.L=U0.prototype.jt=function(){return this.started};
U0.prototype.start=
U0.prototype.reset=var Iab=!1;g.w(g.Y0,g.AG);g.k=g.Y0.prototype;g.k.xa=
g.k.Nw=
g.k.HN=function(){var a;return null==(a=this.Aa)?void 0:a.HN()};
g.k.KN=function(){var a;return null==(a=this.Aa)?void 0:a.KN()};
g.k.LN=function(){var a;return null==(a=this.Aa)?void 0:a.LN()};
g.k.IN=
g.k.vj=function(){return this.videoData.vj()};
g.k.NH=function(){return this.Rz};
g.k.ZM=
g.k.getVideoData=function(){return this.videoData};
g.k.U=function(){return this.W};
g.k.wc=
g.k.xn=function(){return this.visibility};
g.k.qf=function(){return this.mediaElement};
g.k.IM=
g.k.pK=
g.k.gz=ca(17);g.k.isFullscreen=function(){return this.visibility.isFullscreen()};
g.k.isBackground=function(){return this.visibility.isBackground()};
g.k.sendAbandonmentPing=
g.k.zo=
g.k.rg=
g.k.Gg=
g.k.vp=
g.k.Nq=function(){return this.hd.Nq()};
g.k.isPlaying=function(){return this.playerState.isPlaying()};
g.k.PD=
g.k.getPlayerState=function(){return this.playerState};
g.k.getPlayerType=function(){return this.playerType};
g.k.getPreferredQuality=
g.k.mD=ca(21);g.k.isGapless=
g.k.setMediaElement=
g.k.Dj=
g.k.playVideo=
g.k.Zn=
g.k.Hs=function(){if(!this.Zf)return[];var a=z9a(this.Xk,this.Zf,this.wv());return this.Zf.j.Hs(a)};
g.k.dD=
g.k.wv=
g.k.HH=
g.k.getUserPlaybackQualityPreference=
g.k.hasSupportedAudio51Tracks=function(){return this.videoData.hasSupportedAudio51Tracks()};
g.k.setUserAudio51Preference=
g.k.getUserAudio51Preference=
g.k.setProximaLatencyPreference=
g.k.getProximaLatencyPreference=
g.k.isProximaLatencyEligible=function(){return this.videoData.isProximaLatencyEligible};
g.k.getAvailableAudioTracks=
g.k.getAudioTrack=
g.k.kE=
g.k.Ry=
g.k.yq=function(){return this.Sa};
g.k.xw=
g.k.nQ=
g.k.ww=
g.k.oJ=function(a){this.oa("localmediachange",a)};
g.k.qo=
g.k.AI=function(){return this.Kk.AI()};
g.k.handleError=function(a){this.Kk.handleError(a)};
g.k.pH=function(){return this.Kk.pH()};
g.k.SI=
g.k.pauseVideo=
g.k.stopVideo=
g.k.Xn=
g.k.seekTo=
g.k.getCurrentTime=function(){return this.hd.getCurrentTime()};
g.k.Ui=function(){return this.hd.Ui()};
g.k.xq=function(){return this.hd.xq()};
g.k.getPlaylistSequenceForTime=
g.k.fz=
g.k.hf=
g.k.getDuration=
g.k.sD=
g.k.aF=
g.k.yv=
g.k.vc=
g.k.addCueRange=
g.k.removeCueRange=
g.k.SC=
g.k.sy=function(a,b){this.ai.sf(a,b)};
g.k.cF=function(a){this.ai.Yn(a)};
g.k.Vl=
g.k.Mh=function(){return this.visibility.Mh()};
g.k.Vt=function(){this.mediaElement&&this.mediaElement.Vt()};
g.k.taa=
g.k.togglePictureInPicture=function(){this.mediaElement&&this.mediaElement.togglePictureInPicture()};
g.k.oQ=
g.k.P8=
g.k.Q8=
g.k.xD=
g.k.Mc=
g.k.T6=
g.k.kD=function(){return this.wc().kD()};
g.k.DN=
g.k.Dc=
g.k.oE=
g.k.hQ=function(){this.Tb.tick("qoes")};
g.k.wN=
g.k.nJ=
g.k.E9=
g.k.rE=
g.k.Gp=
g.k.G9=
g.k.ll=
g.k.jR=
g.k.Ne=
g.k.Ld=function(){return this.hd.Ld()};
g.k.Rc=function(){return this.hd?this.hd.Rc():0};
g.k.getStreamTimeOffset=
g.k.Bq=
g.k.setPlaybackRate=
g.k.getPlaybackRate=function(){return this.playbackRate};
g.k.getPlaybackQuality=
g.k.isHdr=
g.k.pu=function(){this.wc().pu()};
g.k.sendVideoStatsEngageEvent=
g.k.Wi=
g.k.isAtLiveHead=
g.k.xv=
g.k.Nn=ca(25);g.k.Gt=ca(46);g.k.Wn=function(a){this.wc().Wn(a)};
g.k.Ot=
g.k.Pw=
g.k.ZE=
g.k.wD=
g.k.setLoop=
g.k.Ls=
g.k.mQ=
g.k.Pd=function(a){this.Tb.tick(a)};
g.k.Li=function(a){return this.Tb.Li(a)};
g.k.ju=function(a){this.Tb.ju(a)};
g.k.va=function(a,b,c){c=void 0===c?!1:c;this.wc().va(a,b,c)};
g.k.XE=
g.k.qe=
g.k.YE=
g.k.kH=function(a){this.videoData.IW=!0;this.qe(new fL("sabr.fallback",a));n0(this,!0)};
g.k.lH=
g.k.getPlayerSize=function(){return this.DF.getPlayerSize()};
g.k.Wj=function(){return this.DF.Wj()};
g.k.wi=function(){return this.Tb};
g.k.Cq=function(){return this.Sd.Cq()};
g.k.getVolume=function(){return this.Sd.getVolume()};
g.k.LD=function(){return this.Sd.LD()};
g.k.isMuted=function(){return this.Sd.isMuted()};
g.k.Xy=function(){return this.Sd.Xy()};
g.k.iD=function(){return this.Sd.iD()};
g.k.YC=function(){return this.Sd.YC()};
g.k.L=
g.k.pM=
g.k.Cr=
g.k.Sc=function(){return this.W.Sc()};
g.k.SH=
g.k.oe=function(){return this.videoData.videoId};
g.k.jz=function(){return this.Sd.Cw};
g.k.Oq=function(){return this.Sd.Oq()};
g.k.WQ=
g.k.MM=
g.k.tm=
g.k.PQ=
g.k.BM=
g.k.Xi=function(){return this.pc};
g.k.wF=
g.k.oD=
g.k.bO=
g.k.oK=g.w(g.i1,g.I);g.i1.create=
g.k=g.i1.prototype;g.k.xn=function(){return this.visibility};
g.k.getVisibilityState=
g.k.jn=
g.k.Dj=
g.k.ud=function(){return this.xb};
g.k.LA=
g.k.Oy=
g.k.W8=
g.k.c$=
g.k.canPlayType=
g.k.U=function(){return this.W};
g.k.getVideoData=function(){return this.xb.getVideoData()};
g.k.uD=ca(19);g.k.Jd=function(){return this.Bb.getVideoData()};
g.k.getVideoLoadedFraction=
g.k.sb=function(){return this.template};
g.k.Db=function(){return this.Nd};
g.k.wi=function(){return this.Tb};
g.k.bB=
g.k.Cq=function(){return this.Nd.Cq()};
g.k.getVolume=
g.k.LD=function(){return this.Va.isFullscreen()};
g.k.isMuted=function(){return this.Va.isMuted()};
g.k.iD=
g.k.YC=
g.k.Xy=
g.k.bba=
g.k.BN=
g.k.gS=
g.k.tP=
g.k.rR=
g.k.QE=
g.k.setLoopVideo=
g.k.getLoopVideo=
g.k.setLoopRange=
g.k.getLoopRange=function(){return this.Gb};
g.k.jK=
g.k.setPlaybackRate=
g.k.getCurrentTime=
g.k.fz=
g.k.getDuration=
g.k.hf=
g.k.addPlayerResponseForAssociation=
g.k.finishSegmentByCpn=
g.k.fN=
g.k.getDebugText=
g.k.getFeedbackProductData=
g.k.getPresentingPlayerType=
g.k.Cz=
g.k.Vb=
g.k.getAppState=
g.k.oQ=
g.k.onLoadProgress=
g.k.W$=function(){this.Va.oa("playbackstalledatstart")};
g.k.onVideoProgress=
g.k.onAutoplayBlocked=function(){this.Va.xc("onAutoplayBlocked")};
g.k.m$=function(){this.Va.oa("progresssync")};
g.k.b$=function(){this.Va.xc("onPlaybackPauseAtStart")};
g.k.Y8=
g.k.lZ=
g.k.lk=
g.k.U8=
g.k.mE=
g.k.AE=
g.k.onVideoDataChange=
g.k.TG=
g.k.l$=
g.k.Qp=
g.k.Fg=
g.k.Br=
g.k.isAtLiveHead=
g.k.xv=
g.k.seekTo=
g.k.seekBy=
g.k.sA=
g.k.L$=
g.k.onAirPlayActiveChange=
g.k.onAirPlayAvailabilityChange=function(){this.Va.oa("airplayavailabilitychange");this.W.L("html5_external_airplay_events")&&this.Va.xc("onAirPlayAvailabilityChange",this.Va.KD())};
g.k.showAirplayPicker=
g.k.JP=function(){this.Va.oa("beginseeking")};
g.k.OP=function(){this.Va.oa("endseeking")};
g.k.getStoryboardFormat=function(a){return(a=g.zU(this,a))?m1(this,a).getVideoData().getStoryboardFormat():null};
g.k.Vj=
g.k.Hf=
g.k.qC=
g.k.HD=
g.k.It=function(a){var b;null==(b=this.ue)||b.It(a)};
g.k.Cy=
g.k.VF=
g.k.enqueueVideoByPlayerVars=
g.k.queueNextVideo=
g.k.rH=
g.k.Rv=function(){return this.Em.Rv()};
g.k.clearQueue=
g.k.loadVideoByPlayerVars=
g.k.preloadVideoByPlayerVars=
g.k.setMinimized=
g.k.setInline=function(a){this.visibility.setInline(a)};
g.k.setInlinePreview=
g.k.aB=
g.k.hV=
g.k.I$=
g.k.togglePictureInPicture=function(){var a=g.zU(this);a&&a.togglePictureInPicture()};
g.k.vt=
g.k.cueVideoByPlayerVars=
g.k.Co=
g.k.cuePlaylist=function(a,b,c,d){this.Pv=!0;ucb(this,a,b,c,d)};
g.k.loadPlaylist=
g.k.cD=
g.k.Gs=ca(15);
g.k.nextVideo=
g.k.previousVideo=
g.k.playVideoAt=
g.k.getPlaylist=function(){return this.playlist};
g.k.nD=ca(23);g.k.S8=function(a){this.Va.xc("onCueRangeEnter",a.getId())};
g.k.T8=
g.k.sy=
g.k.cF=
g.k.RF=
g.k.X8=
g.k.VP=
g.k.onApiChange=
g.k.N9=
g.k.mutedAutoplay=
g.k.onFullscreenChange=
g.k.Am=
g.k.isFullscreen=function(){return this.visibility.isFullscreen()};
g.k.bz=function(){return this.visibility.bz()};
g.k.z$=
g.k.F9=function(a){3!==this.getPresentingPlayerType()&&this.Va.oa("liveviewshift",a)};
g.k.playVideo=
g.k.pauseVideo=
g.k.stopVideo=
g.k.cancelPlayback=
g.k.sendVideoStatsEngageEvent=
g.k.Wi=
g.k.updatePlaylist=
g.k.setSizeStyle=
g.k.Tv=function(){return this.SO};
g.k.gg=function(){return this.visibility.gg()};
g.k.isInline=function(){return this.visibility.isInline()};
g.k.Zs=function(){return this.visibility.Zs()};
g.k.Bz=function(){return this.visibility.Bz()};
g.k.QO=function(){return this.w_};
g.k.getAdState=
g.k.y$=
g.k.Ph=function(){return this.Va.Ph()};
g.k.R$=
g.k.TY=
g.k.T9=
g.k.oE=function(){this.Va.xc("CONNECTION_ISSUE")};
g.k.rE=function(a){this.Va.oa("heartbeatparams",a)};
g.k.aK=
g.k.qf=function(){return this.mediaElement};
g.k.setBlackout=
g.k.V9=
g.k.onLoadedMetadata=function(){this.Va.xc("onLoadedMetadata")};
g.k.onDrmOutputRestricted=function(){this.Va.xc("onDrmOutputRestricted")};
g.k.pM=
g.k.Sz=function(){this.yX=!0};
g.k.xa=
g.k.L=function(a){return this.W.L(a)};
g.k.setScreenLayer=function(a){this.screenLayer=a};
g.k.getInternalApi=function(){return this.Va.getInternalApi()};
g.k.createSubtitlesModuleIfNeeded=function(){return this.Nd.createSubtitlesModuleIfNeeded()};
g.k.isOrchestrationLeader=
g.k.getVideoUrl=
g.k.Oq=function(){return this.Em.Oq()};
g.k.tm=
g.k.kE=
g.k.GR=
var X3={};var Ucb=/[&\?]action_proxy=1/,Tcb=/[&\?]token=([\w-]*)/,Vcb=/[&\?]video_id=([\w-]*)/,Wcb=/[&\?]index=([\d-]*)/,Xcb=/[&\?]m_pos_ms=([\d-]*)/,$cb=/[&\?]vvt=([\w-]*)/,Ncb="ca_type dt el flash u_tz u_his u_h u_w u_ah u_aw u_cd u_nplug u_nmime frm u_java bc bih biw brdim vis wgl".split(" "),Ycb="www.youtube-nocookie.com youtube-nocookie.com www.youtube-nocookie.com:443 youtube.googleapis.com www.youtubeedu.com www.youtubeeducation.com video.google.com redirector.gvt1.com".split(" "),Qcb={android:"ANDROID",
"android.k":"ANDROID_KIDS","android.m":"ANDROID_MUSIC","android.up":"ANDROID_UNPLUGGED",youtube:"WEB","youtube.m":"WEB_REMIX","youtube.up":"WEB_UNPLUGGED",ytios:"IOS","ytios.k":"IOS_KIDS","ytios.m":"IOS_MUSIC","ytios.up":"IOS_UNPLUGGED"},Rcb={desktop:"DESKTOP",phone:"MOBILE",tablet:"TABLET"},Zcb={FLAG_AUTO_CAPTIONS_DEFAULT_ON:66,FLAG_AUTOPLAY_DISABLED:140,FLAG_AUTOPLAY_EXPLICITLY_SET:141};E1.prototype.Pz=function(a){this.player.wi().tick(a)};
E1.prototype.fetch=
E1.prototype.reset=var Wkb={h2a:"replaceUrlMacros",CXa:"onAboutThisAdPopupClosed",eCa:"executeCommand"};adb.prototype.wq=function(){return"adPingingEndpoint"};
adb.prototype.Ps=bdb.prototype.wq=function(){return"changeEngagementPanelVisibilityAction"};
bdb.prototype.Ps=cdb.prototype.wq=function(){return"loggingUrls"};
cdb.prototype.Ps=g.w(edb,g.I);g.w(F1,g.I);g.k=F1.prototype;g.k.addListener=function(a){this.listeners.push(a)};
g.k.removeListener=function(a){this.listeners=this.listeners.filter(function(b){return b!==a})};
g.k.jk=
g.k.VP=
g.k.Mn=G1.prototype.HG=
G1.prototype.reset=function(){return new G1(this.J)};g.w(H1,g.I);H1.prototype.addCueRange=
H1.prototype.removeCueRange=
H1.prototype.onCueRangeEnter=function(a){if(this.j.has(a.id))this.j.get(a.id).listener.onCueRangeEnter(a.id)};
H1.prototype.onCueRangeExit=
g.w(ndb,g.AK);I1.prototype.QE=function(a){this.J.QE(a)};
I1.prototype.Un=J1.prototype.cf=
J1.prototype.zR=var udb=null;g.w(tdb,g.AG);tdb.prototype.NN=
g.Ua("ytads.bulleit.getVideoMetadata",function(a){return L1().NN(a)});
g.Ua("ytads.bulleit.triggerExternalActivityEvent",;g.k=M1.prototype;
g.k.Ch=
g.k.lA=function(a){var b;null==(b=this.j.get(a.queryId))||b.lA()};
g.k.kA=function(a){var b;null==(b=this.j.get(a.queryId))||b.kA()};
g.k.mA=function(a){var b;null==(b=this.j.get(a.queryId))||b.mA()};
g.k.iA=function(a){var b;null==(b=this.j.get(a.queryId))||b.iA()};
g.k.jA=Cdb.prototype.send=g.w(Edb,Cdb);var Xkb=na(["attributionsrc"]);
Fdb.prototype.send=R1.prototype.Wi=
R1.prototype.Ai=g.w(S1,g.I);g.k=S1.prototype;g.k.addListener=function(a){this.listeners.push(a)};
g.k.removeListener=function(a){this.listeners=this.listeners.filter(function(b){return b!==a})};
g.k.jk=
g.k.Mn=function(){};
g.k.jf=
g.k.saa=
g.k.M$=
g.k.xa=
g.k.Ai=g.w(T1,g.I);g.k=T1.prototype;g.k.jk=
g.k.Mn=function(){};
g.k.addListener=function(a){this.listeners.push(a)};
g.k.removeListener=function(a){this.listeners=this.listeners.filter(function(b){return b!==a})};
g.k.GY=function(){};
g.k.playVideo=function(){this.J.playVideo()};
g.k.pauseVideo=function(){this.J.pauseVideo()};
g.k.resumeVideo=
g.k.Gn=
g.k.getCurrentTimeSec=
g.k.getVolume=function(){return this.J.getVolume()};
g.k.isMuted=function(){return this.J.isMuted()};
g.k.getPresentingPlayerType=
g.k.getPlayerState=function(a){return this.J.getPlayerState(a)};
g.k.isFullscreen=function(){return this.J.isFullscreen()};
g.k.isAtLiveHead=function(){return this.J.isAtLiveHead()};
g.k.cB=function(a){this.J.cB(a)};
g.k.n$=
g.k.e$=
g.k.onFullscreenToggled=function(a){for(var b=g.u(this.listeners),c=b.next();!c.done;c=b.next())c.value.onFullscreenToggled(a)};
g.k.onVolumeChange=
g.k.uh=
g.k.Wk=function(a){for(var b=g.u(this.listeners),c=b.next();!c.done;c=b.next())c.value.Wk(a)};
g.k.Yb=
g.k.Vk=g.w(Vdb,g.I);g.w(X1,g.I);X1.prototype.xa=function(){this.Jn.isDisposed()||this.Jn.get().removeListener(this);g.I.prototype.xa.call(this)};Y1.prototype.fetch=g.w($1,g.I);g.k=$1.prototype;g.k.addListener=function(a){this.listeners.push(a)};
g.k.removeListener=function(a){this.listeners=this.listeners.filter(function(b){return b!==a})};
g.k.uK=
g.k.onAdUxClicked=
g.k.HP=function(a){a2(this,function(b){b.kO(a)})};
g.k.GP=function(a){a2(this,function(b){b.jO(a)})};
g.k.O8=b2.prototype.reduce=
b2.prototype.updateTime=function(){};g.w(c2,g.I);g.k=c2.prototype;
g.k.jk=
g.k.Mn=function(){};
g.k.addListener=function(a){this.listeners.push(a)};
g.k.removeListener=
g.k.Ft=
g.k.NP=
g.k.xa=d2.prototype.addPlayerResponseForAssociation=function(a){this.J.addPlayerResponseForAssociation(a)};g.k=f2.prototype;g.k.qC=
g.k.Cy=function(a,b){this.J.Cy(a,b)};
g.k.VF=function(a,b,c){this.J.VF(a,b,c)};
g.k.It=function(a){this.J.It(a)};
g.k.HD=
g.k.Cr=function(){return this.J.Cr()};
g.k.finishSegmentByCpn=function(a,b){this.J.finishSegmentByCpn(a,b)};g.w(deb,g.I);g.w(eeb,g.I);g.w(feb,g.I);g.w(geb,g.I);g.w(heb,g.I);g.w(ieb,g.I);g.w(keb,g.I);keb.prototype.C=function(){return this.B};g.w(leb,cH);
leb.prototype.D=g.w(meb,gH);g.k=meb.prototype;g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=function(){iH(this);gH.prototype.hide.call(this)};
g.k.show=function(){hH(this);gH.prototype.show.call(this)};
g.k.Mp=function(){this.hide()};
g.k.Tn=g.w(neb,JG);g.k=neb.prototype;
g.k.init=
g.k.clear=
g.k.show=function(){oeb(!0);this.actionButton&&this.actionButton.show();this.skipButton&&this.skipButton.show();this.B&&this.B.show();JG.prototype.show.call(this)};
g.k.hide=
g.k.rN=var teb={iconType:"CLOSE"},j2=new g.Ie(320,63);g.w(seb,JG);g.k=seb.prototype;
g.k.init=
g.k.clear=
g.k.daa=
g.k.jL=
g.k.M8=
g.k.eQ=
g.k.N8=g.w(Aeb,gH);g.k=Aeb.prototype;g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=
g.k.show=
g.k.Mp=function(){this.hide()};
g.k.Tn=g.w(Ceb,JG);g.k=Ceb.prototype;
g.k.init=
g.k.show=function(){Deb(!0);this.actionButton&&this.actionButton.show();JG.prototype.show.call(this)};
g.k.hide=
g.k.clear=
g.k.onClick=
g.k.FS=
g.k.TW=g.w(k2,JG);
k2.prototype.init=
k2.prototype.pF=
k2.prototype.onClick=
k2.prototype.clear=function(){this.hide()};g.w(Eeb,JG);Eeb.prototype.init=g.w(l2,TG);l2.prototype.init=
l2.prototype.onClick=g.w(m2,JG);
m2.prototype.init=
m2.prototype.clear=function(){this.hide()};g.w(n2,JG);n2.prototype.init=
n2.prototype.show=
n2.prototype.PZ=function(){};g.w(Keb,n2);g.k=Keb.prototype;g.k.init=
g.k.PZ=
g.k.onChange=
g.k.baa=
g.k.clear=function(){this.api.U().L("enable_hide_on_clear_in_survey_question_bulleit")?this.hide():this.dispose()};g.w(o2,n2);o2.prototype.init=
o2.prototype.clear=g.w(p2,JG);p2.prototype.init=
p2.prototype.clear=
p2.prototype.D=var Seb=na(['background-image:url("','");']);g.w(q2,JG);
q2.prototype.init=
q2.prototype.clear=function(){this.hide()};
q2.prototype.show=function(){Ueb(!0);JG.prototype.show.call(this)};
q2.prototype.hide=g.w(r2,gH);g.k=r2.prototype;
g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=function(){iH(this);gH.prototype.hide.call(this)};
g.k.show=function(){hH(this);gH.prototype.show.call(this)};
g.k.Mp=function(){this.hide()};
g.k.Tn=g.w(s2,JG);
s2.prototype.init=
s2.prototype.clear=function(){this.hide()};
s2.prototype.onClick=function(a){a.stopPropagation();JG.prototype.onClick.call(this,a)};g.w(t2,JG);
t2.prototype.init=
t2.prototype.clear=function(){this.hide()};
t2.prototype.onClick=function(a){a.stopPropagation();JG.prototype.onClick.call(this,a)};g.w(u2,JG);u2.prototype.init=
u2.prototype.clear=function(){this.hide()};
u2.prototype.onClick=g.w(Yeb,gH);g.k=Yeb.prototype;
g.k.init=
g.k.Tn=
g.k.Mp=function(){this.clear()};
g.k.onClick=
g.k.clear=
g.k.show=function(){this.adAvatar.show();this.headline.show();this.description.show();this.adButton.show();gH.prototype.show.call(this)};
g.k.hide=
g.k.GS=g.w(Zeb,JG);g.k=Zeb.prototype;
g.k.init=
g.k.onClick=
g.k.clear=function(){this.j.reset();this.hide()};
g.k.hide=function(){JG.prototype.hide.call(this)};
g.k.show=g.w($eb,gH);g.k=$eb.prototype;g.k.init=
g.k.show=function(){hH(this);gH.prototype.show.call(this)};
g.k.hide=
g.k.clear=
g.k.Mp=function(){this.hide()};
g.k.Tn=g.w(v2,JG);
v2.prototype.init=
v2.prototype.clear=function(){this.hide()};g.w(w2,JG);
w2.prototype.init=
w2.prototype.clear=function(){this.hide()};var Ykb="ad-attribution-bar ad-channel-thumbnail advertiser-name ad-preview ad-title skip-button visit-advertiser".split(" ").concat("shopping-companion action-companion image-companion ads-engagement-panel banner-image top-banner-image-text-icon-buttoned".split(" "));g.w(x2,cH);
x2.prototype.D=
x2.prototype.xa=g.w(bfb,g.aW);g.k=bfb.prototype;g.k.create=
g.k.load=
g.k.destroy=
g.k.unload=
g.k.ql=function(){return!1};
g.k.getAdState=
g.k.getOptions=
g.k.Gh=
g.k.Ft=
g.k.Fp=
g.k.executeCommand=g.Ua("yt.player.Application.create",g.i1.create);g.Ua("yt.player.Application.createAlternate",g.i1.create);Rua(Tua(),{Wq:[{Zz:/Unable to load player module/,weight:20},{Zz:/Failed to fetch/,weight:500},{Zz:/XHR API fetch failed/,weight:10},{Zz:/JSON parsing failed after XHR fetch/,weight:10},{Zz:/Retrying OnePlatform request/,weight:10},{Zz:/CSN Missing or undefined during playback association/,weight:100}]});var Zkb=g.Va("ytcsi.tick");Zkb&&Zkb("pe");g.$V("ad",bfb);var kfb=g.gf&&jfb();g.$kb=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.Ua("yt.msgs_",g.$kb);g.w(g.A2,g.I);g.A2.prototype.start=
g.A2.prototype.stop=
g.A2.prototype.next=g.w(g.B2,g.V);g.k=g.B2.prototype;g.k.DD=
g.k.C1=
g.k.show=
g.k.D1=
g.k.uw=
g.k.Yb=
g.k.onVideoDataChange=
g.k.scrollTo=})(_yt_player);
