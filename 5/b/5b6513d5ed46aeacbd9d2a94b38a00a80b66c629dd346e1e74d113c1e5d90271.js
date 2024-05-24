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
'use strict';var ca,baa,caa,la,daa,na,eaa,pa,ta,va,za,gaa,haa,Ga,Ha,iaa,jaa,Ja,kaa,Ma,Na,Pa,laa,Ra,Ya,$a,naa,oaa,qb,paa,sb,tb,ub,zb,Ab,qaa,raa,Db,taa,uaa,Pb,vaa,Xb,waa,xaa,Tb,yaa,zaa,Aaa,Caa,Baa,Daa,ec,Eaa,gc,ic,lc,uc,vc,xc,yc,zc,Dc,Maa,Ec,Ic,Fc,Naa,Oaa,Paa,Qaa,Jc,Raa,Kc,Mc,Nc,Saa,Oc,Qc,Uaa,Vaa,Xaa,Wc,Zc,$aa,$c,cd,aba,bba,ld,cba,xd,zd,fba,gba,Ad,lba,Hd,iba,kba,Fd,Dd,Nd,Od,mba,Sd,nba,Ud,Vd,oba,Xd,Zd,be,ee,uba,wba,ne,Dba,Bba,Cba,Fba,Gba,we,Iba,Jba,Mba,Nba,ze,Ce,Le,Oe,Pe,Oba,Pba,Qba,Rba,Xe,Ye,ef,Uba,
Wba,Vba,nf,sf,Xba,of,xf,Se,Ff,Zba,Lf,Kf,Re,Nf,$ba,Of,Pf,Qf,aca,cca,eca,Zf,$f,ag,ica,kca,cg,lca,bg,pca,Xf,gca,rca,oca,mca,nca,sca,qca,dg,jca,gg,uca,vca,wca,xca,yca,zca,Aca,Bca,Cca,rg,Dca,Hca,Ica,Jca,Oca,vg,Nca,Kca,Qca,Sca,Uca,xg,yg,Xca,Ag,Bg,Zca,Dg,Cg,$ca,Fg,ada,Gg,Hg,Rg,bda,Sg,cda,dda,Tg,Ig,Ug,Wg,Vg,Xg,Yg,Zg,$g,ah,eda,gda,ch,hda,ida,dh,eh,ph,kda,lda,nda,oda,qda,qh,rda,rh,sda,sh,tda,th,uh,uda,vh,wh,xh,vda,Ah,wda,xda,Ch,Dh,Eh,zda,Fh,Gh,Hh,Ih,Ada,Bda,Kh,Lh,Cda,Dda,Eda,Fda,Yh,Zh,$h,Hda,ai,bi,ci,Jda,fi,
gi,Kda,Lda,ei,hi,Ida,di,ii,Mda,Nda,Oda,ji,ki,li,mi,Pda,pi,Qi,N,Sda,Rda,Uda,Vda,Ri,Wda,Xda,Ti,Ui,Wi,Vi,Yi,Xi,Zi,bj,tj,Zda,$da,dj,aea,bea,uj,vj,wj,yj,xj,cea,dea,Aj,Bj,Cj,zj,Dj,Yda,eea,fea,Fj,Gj,Hj,cj,Ij,Jj,gea,Kj,hea,iea,Lj,jea,Mj,Nj,kea,Oj,lea,Qj,mea,Rj,Sj,Tj,Uj,qk,rk,O,sk,tk,R,uk,T,nea,vk,wk,xk,Dk,sea,Ek,uea,wea,tea,vea,Fk,yk,Gk,xea,yea,Ik,Cea,Dea,Eea,Kk,Fea,Gea,zk,Hea,Bea,Nk,Ok,Pk,Qk,Rk,Sk,Jea,Kea,yl,Lea,zl,Al,Bl,Cl,Dl,El,Fl,Nea,Oea,Qea,Pea,Rea,Il,Jl,Kl,Tea,Uea,Vea,Ll,Ml,Nl,Ol,Rl,Sl,Xea,Wl,Yea,Bm,
Cm,Dm,Zea,$ea,Gm,afa,Hm,Im,dfa,Jm,Km,Lm,efa,Mm,gfa,Pm,Qm,Rm,Sm,Tm,Um,hfa,Xm,ifa,jfa,Vm,Wm,kfa,lfa,Zm,mfa,Ym,$m,nfa,bn,ofa,rfa,cn,dn,sfa,ufa,vfa,xfa,wfa,yfa,fn,zfa,Nn,Rn,Sn,Tn,Un,Cfa,Vn,Wn,Xn,Dfa,Efa,Ffa,Yn,Hfa,Zn,Ifa,Jfa,Mfa,Lfa,Kfa,Nfa,Ofa,Pfa,Qfa,Rfa,Ufa,Sfa,ao,co,eo,fo,bo,Vfa,Wfa,go,io,Xfa,jo,ko,lo,Zfa,no,aga,cga,dga,ega,qo,so,fga,gga,hga,uo,iga,kga,jga,lga,mga,pga,vo,wo,xo,yo,zo,Ao,Bo,Co,qga,Do,Eo,Fo,Go,Ho,uga,rga,Ko,tga,Lo,sga,Jo,Io,xp,wga,zp,yp,Ep,Fp,Hp,zga,Gp,Kp,Aga,Lp,xga,Dga,Ega,Fga,Op,Pp,
Qp,Gga,Rp,Sp,Tp,Up,Hga,Vp,Wp,Xp,Iga,Jga,Yp,Kga,Zp,Nga,Oga,Pga,Qga,Lga,$p,aq,bq,cq,Sga,Tga,Rga,dq,Uga,Vga,Wga,hq,Xga,iq,jq,Zga,$ga,kq,aha,lq,mq,nq,oq,pq,qq,rq,sq,bha,tq,uq,cha,eha,dha,vq,fha,gha,hha,wq,xq,yq,pr,qr,rr,sr,iha,tr,ur,vr,jha,lha,mha,xr,zr,yr,Br,Cr,Dr,oha,Er,pha,Fr,Gr,Hr,rha,sha,vha,tha,wha,Aha,Ir,zha,xha,Jr,Kr,Bha,Lr,Cha,Mr,Eha,Dha,Fha,Gha,Qr,Hha,Iha,Jha,Rr,Sr,Kha,Tr,Lha,Mha,Oha,Sha,Ur,Tha,Uha,Vha,Wha,Xha,Xr,Yha,Zha,$ha,ds,cs,bs,aia,bia,cia,es,fs,gs,eia,ls,ms,ns,fia,os,hia,iia,jia,ps,rs,
ts,xs,ys,Bs,lia,nia,mia,oia,pia,Hs,qia,ria,Is,sia,tia,uia,via,Ms,Ks,Ns,Os,Ps,wia,xia,yia,Qs,$s,at,zia,Aia,Bia,bt,Cia,ct,dt,Dia,Eia,Fia,Gia,Hia,Iia,et,ft,gt,it,Lia,jt,kt,Mia,Kia,ht,Nia,lt,mt,nt,pt,ot,Oia,Pia,Qia,qt,Sia,rt,Uia,Via,Wia,Xia,Yia,Zia,$ia,aja,vt,wt,xt,cja,bja,dja,eja,At,fja,Bt,gja,hja,Ct,Dt,Et,ija,Ft,Gt,jja,Ht,It,Jt,Kt,Lt,Mt,Nt,Ot,kja,lja,mja,nja,Pt,oja,qja,pja,Rt,St,sja,rja,vja,yja,xja,Tt,zja,Aja,Bja,Dja,Cja,Eja,Ut,Fja,Gja,Wt,Hja,Ija,Jja,Kja,Xt,Lja,Yt,Mja,Zt,$t,Oja,au,Pja,bu,cu,Qja,Rja,
du,fu,Tja,gu,Sja,Uja,Vja,Wja,Yja,hu,Zja,ku,lu,aka,bka,eka,fka,mu,nu,ou,pu,qu,ru,tu,uu,vu,wu,xu,yu,zu,jka,ika,kka,mka,lka,oka,hka,nka,gka,Au,Bu,qka,rka,ska,Fu,Gu,Hu,Cu,uka,Iu,pka,wka,xka,vka,Ju,Ku,Lu,Mu,yka,tka,zka,Nu,Aka,Bka,Cka,Dka,Eka,Hka,Ika,Jka,Kka,Lka,Oka,Qu,Qka,Pu,Su,Rka,Tu,av,bv,Ska,Tka,iv,Uka,Vka,jv,Wka,vv,rv,tv,uv,yv,xv,Xka,Av,Yka,$ka,Bv,ala,bla,hla,dla,Fv,Gv,mla,Hv,Iv,Jv,ola,Mv,pla,qla,Nv,sla,Pv,Qv,Rv,Sv,tla,Uv,Vv,Wv,Xv,Zv,$v,vla,wla,cw,dw,ew,fw,gw,hw,xla,yla,zla,Ala,Bla,Cla,iw,Dla,pw,Ela,
Fla,Gla,qw,tw,uw,vw,yw,zw,Aw,Ila,Dw,Ew,Fw,Jla,Kla,Gw,Lla,Mla,Iw,Ula,Vla,Wla,Jw,Xla,Yla,Lw,bma,ama,Nw,cma,Pw,Qw,Rw,Sw,Tw,Uw,Vw,Ww,Xw,Yw,Zw,$w,ax,bx,cx,dx,ex,fx,gx,hx,ix,jx,kx,lx,mx,nx,ox,px,qx,rx,sx,tx,ux,vx,wx,xx,yx,zx,Ax,Bx,Cx,Dx,Ex,Fx,Gx,Yx,Zx,$x,ay,by,cy,dy,ey,fy,gy,hy,iy,jy,ky,ly,my,ny,oy,py,qy,ry,sy,ty,uy,vy,wy,yy,zy,Ay,By,Cy,Dy,Ey,Fy,Gy,Hy,Iy,dma,Jy,Ky,Ly,My,Ny,Oy,Py,Qy,Ry,Sy,Uy,Vy,Wy,Xy,Yy,Zy,$y,az,bz,cz,dz,ez,fz,gz,hz,iz,jz,kz,lz,mz,nz,oz,pz,qz,rz,sz,tz,uz,vz,wz,xz,yz,zz,Az,Bz,Cz,Dz,Ez,Fz,
Gz,Hz,Iz,Jz,Kz,Lz,Mz,Nz,Oz,Pz,Qz,Rz,Sz,Tz,Uz,Vz,Wz,Xz,ema,Yz,Zz,$z,fma,aA,gma,bA,cA,hma,dA,ima,eA,jma,kma,lma,fA,mma,gA,hA,nma,iA,oma,jA,kA,lA,mA,pA,qA,rA,pma,sA,tA,uA,qma,vA,wA,xA,yA,rma,zA,AA,BA,CA,DA,sma,EA,tma,FA,uma,GA,HA,vma,IA,JA,KA,wma,xma,yma,zma,LA,MA,Ama,NA,Bma,Cma,Dma,Ema,Fma,OA,PA,Gma,Hma,QA,RA,Ima,SA,Jma,Kma,TA,Lma,Mma,Nma,Oma,UA,VA,WA,XA,Pma,Qma,YA,Rma,Sma,Tma,Uma,ZA,Vma,Wma,Xma,Yma,Zma,$ma,ana,bna,cna,dna,$A,ena,aB,bB,fna,gna,cB,hna,ina,jna,kna,lna,mna,nna,ona,dB,pna,qna,rna,eB,sna,
tna,fB,gB,una,hB,iB,vna,jB,wna,kB,xna,lB,mB,yna,zna,pB,Ana,Bna,qB,Cna,Dna,Ena,Fna,Gna,Hna,Ina,Jna,Kna,Lna,rB,Mna,Nna,sB,Ona,tB,uB,Pna,Qna,vB,Rna,Sna,wB,Tna,xB,Una,yB,zB,AB,BB,Vna,CB,DB,EB,FB,Wna,GB,HB,Xna,Yna,IB,JB,KB,Zna,LB,$na,aoa,boa,MB,coa,doa,eoa,NB,foa,goa,OB,PB,hoa,QB,ioa,joa,RB,koa,SB,loa,moa,noa,UB,WB,poa,ooa,qoa,roa,bC,cC,dC,eC,voa,gC,hC,woa,iC,jC,xoa,soa,kC,Aoa,Doa,lC,Foa,Hoa,rC,Ioa,Joa,Loa,Poa,Noa,Ooa,Qoa,Koa,uC,tC,Roa,wC,xC,yC,Toa,Uoa,Voa,Woa,Xoa,Yoa,EC,Zoa,GC,$oa,apa,HC,cpa,dpa,KC,MC,
epa,fpa,NC,OC,PC,QC,hpa,RC,jpa,ipa,lpa,TC,opa,spa,qpa,rpa,tpa,upa,wpa,vpa,zpa,VC,Apa,YC,Bpa,Cpa,XC,ZC,Epa,Fpa,Ipa,cD,Jpa,Kpa,dD,eD,fD,hD,Mpa,Opa,nD,Ppa,Qpa,Rpa,Spa,Tpa,Wpa,Xpa,Ypa,Vpa,Zpa,aqa,cqa,uD,dqa,xD,vD,AD,BD,fqa,iqa,GD,HD,ID,JD,mqa,LD,oqa,pqa,qqa,OD,sqa,tqa,rqa,uqa,vqa,wqa,xqa,yqa,Aqa,TD,Dqa,Eqa,Bqa,Fqa,Gqa,Jqa,Iqa,XD,Cqa,Mqa,bE,Lqa,Nqa,Oqa,cE,dE,Pqa,Rqa,fE,Sqa,Tqa,Vqa,Xqa,iE,Yqa,Zqa,$qa,ara,bra,cra,dra,era,kE,fra,mE,hra,ira,jra,kra,lra,mra,rE,pra,sra,sE,tra,vra,ora,wra,xra,yra,qra,rra,nE,
nra,qE,ura,pE,oE,zra,Ara,Bra,Cra,Dra,Era,Kra,Fra,vE,wE,xE,Nra,Pra,Ora,Lra,Qra,Sra,AE,Ura,Xra,DE,Wra,gsa,Yra,fsa,HE,hsa,ksa,IE,GE,isa,jsa,lsa,KE,nsa,osa,psa,qsa,rsa,ssa,tsa,msa,vsa,wsa,xsa,ysa,zsa,Csa,ME,NE,OE,Esa,PE,Fsa,Gsa,RE,SE,Jsa,Isa,Ksa,Msa,Osa,Nsa,Rsa,Vsa,Tsa,cF,Ysa,$sa,bF,Zsa,dF,eF,ata,bta,cta,gF,eta,jF,iF,kF,lF,mF,gta,hta,oF,ita,pF,kta,lta,mta,ota,pta,nta,sF,rta,qta,sta,tF,uta,uF,wta,vF,yta,wF,xta,xF,yF,Bta,Hta,Jta,Gta,Fta,Ita,BF,Kta,Sta,Ota,Pta,Qta,Ata,aua,cua,$ta,fua,Zta,AF,eua,Nta,Rta,
bua,Lta,Dta,Cta,Eta,DF,Yta,KF,pua,oua,tua,wua,vua,yua,MF,NF,Aua,Bua,Cua,Dua,Eua,Fua,Gua,PF,Iua,Jua,Kua,Lua,Mua,Nua,Oua,Qua,Rua,TF,Tua,Vua,Uua,Wua,Yua,Zua,cva,ava,eva,dva,gva,fva,UF,hqa,ova,lva,qva,gG,sva,vva,wva,xva,Dva,Hva,Iva,Kva,Jva,Lva,mG,Nva,lG,Gva,Fva,iG,tG,sG,wG,xG,zG,Pva,AG,DG,EG,Qva,Rva,Tva,Uva,Vva,Wva,Xva,Yva,Zva,$va,awa,bwa,cwa,KG,dwa,ewa,gwa,hwa,iwa,jwa,kwa,lwa,owa,pwa,MG,NG,qwa,OG,rwa,QG,twa,swa,SG,TG,UG,VG,uwa,WG,vwa,wwa,xwa,XG,ywa,Cwa,zwa,Bwa,Awa,Dwa,YG,Ewa,Fwa,Gwa,Hwa,ZG,Jwa,Mwa,Lwa,
$G,Nwa,aH,bH,cH,eH,fH,Owa,Pwa,Qwa,gH,Rwa,Swa,hH,Twa,iH,lH,nH,Vwa,Uwa,pH,Wwa,Xwa,qH,rH,sH,tH,wH,Zwa,xH,yH,zH,AH,$wa,axa,DH,bxa,EH,fxa,hxa,jxa,lxa,nxa,GH,oxa,HH,pxa,qxa,txa,uxa,JH,wxa,xxa,LH,MH,NH,zxa,OH,PH,QH,Axa,RH,yxa,Bxa,SH,Dxa,Cxa,TH,Fxa,UH,VH,XH,Gxa,Hxa,ZH,$H,bI,nI,mI,Jxa,aI,Mxa,Nxa,Qxa,Rxa,Sxa,Uxa,Pxa,Vxa,Wxa,Xxa,oI,Lxa,Oxa,pI,aya,cya,sI,dya,tI,eya,qI,fya,uI,gya,bya,vI,iya,wI,nya,lya,kya,jya,pya,yI,zI,AI,BI,CI,DI,EI,qya,vya,GI,wya,xya,zya,yya,Aya,Bya,Cya,Eya,Dya,Fya,Iya,Jya,II,JI,Kya,Lya,Mya,
Nya,Oya,Qya,Rya,KI,Pya,LI,Uya,Wya,MI,NI,OI,Xya,PI,QI,Yya,Zya,$ya,aza,bza,cza,RI,SI,TI,UI,VI,WI,XI,YI,ZI,$I,aJ,dza,bJ,eza,fza,gza,hza,cJ,dJ,eJ,fJ,iza,gJ,hJ,iJ,jza,jJ,kJ,lJ,mJ,nJ,oJ,pJ,qJ,rJ,kza,sJ,tJ,uJ,lza,vJ,wJ,xJ,yJ,mza,zJ,AJ,nza,BJ,oza,CJ,pza,EJ,FJ,qza,GJ,HJ,IJ,DJ,JJ,KJ,LJ,sza,uza,vza,MJ,wza,NJ,xza,PJ,yza,zza,Aza,Dza,Eza,Fza,Gza,Hza,Iza,Bza,$J,Lza,Mza,Nza,Oza,Cza,Qza,RJ,Rza,Sza,bK,Tza,cK,TJ,Uza,SJ,Pza,dK,Xza,Wza,VJ,WJ,fK,eK,Yza,gK,Zza,hK,aAa,$za,iK,jK,kK,lK,mK,cAa,dAa,fAa,gAa,oK,pK,jAa,qK,nAa,
pAa,rAa,sAa,sK,uAa,vAa,xAa,yAa,zAa,AAa,BAa,CAa,xK,yK,DAa,FAa,EAa,GAa,HAa,IAa,CK,EK,FK,GK,HK,IK,JAa,JK,KK,DK,LK,MK,MAa,NAa,LAa,QAa,RAa,SAa,TAa,UAa,VAa,WAa,XAa,YAa,ZAa,$Aa,aBa,bBa,cBa,dBa,eBa,fBa,gBa,OK,hBa,iBa,jBa,kBa,PK,QK,lBa,RK,SK,mBa,nBa,oBa,pBa,qBa,rBa,sBa,TK,tBa,uBa,vBa,wBa,UK,xBa,yBa,VK,zBa,ABa,BBa,WK,CBa,YK,EBa,FBa,GBa,ZK,$K,aL,bL,cL,JBa,dL,eL,gL,LBa,MBa,NBa,iL,kL,OBa,nL,oL,QBa,RBa,pL,SBa,qL,TBa,sL,tL,uL,UBa,VBa,WBa,vL,PBa,wL,xL,yL,zL,AL,BL,XBa,CL,DL,EL,FL,GL,HL,IL,JL,KL,ZBa,$Ba,bCa,cCa,PL,
ML,QL,dCa,eCa,fCa,gCa,RL,SL,hCa,iCa,jCa,NL,kCa,lCa,TL,mCa,oCa,pCa,VL,WL,XL,YL,ZL,sCa,bM,dM,cM,uCa,eM,vCa,wCa,yCa,xCa,hM,zCa,ACa,CCa,BCa,iM,DCa,GCa,jM,HCa,JCa,ECa,FCa,kM,ICa,LCa,MCa,OCa,NCa,mM,QCa,RCa,SCa,UCa,TCa,VCa,WCa,YCa,XCa,ZCa,$Ca,aDa,bDa,cDa,dDa,eDa,fDa,gDa,hDa,iDa,jDa,kDa,lDa,mDa,nDa,oDa,pM,pDa,qM,rM,rDa,sDa,sM,tDa,tM,uDa,uM,vDa,vM,wDa,xDa,yDa,zDa,wM,ADa,BDa,CDa,xM,yM,zM,AM,BM,DDa,CM,DM,EM,EDa,FM,FDa,GDa,HDa,GM,HM,IDa,IM,JDa,JM,KM,eAa,KDa,LDa,LM,MDa,MM,NM,OM,PM,QM,RM,SM,TM,NDa,UM,VM,ODa,PDa,
QDa,RDa,WM,aN,TDa,YDa,aEa,ZDa,cEa,dEa,bEa,fEa,gEa,hEa,jN,kEa,mEa,pEa,qEa,rEa,lN,tEa,uEa,yEa,mN,zEa,vEa,AEa,nN,BEa,EEa,DEa,IEa,FEa,oN,pN,OEa,REa,QEa,VEa,TEa,XEa,UEa,ZEa,YEa,PEa,$Ea,aFa,rN,SEa,bFa,sN,cFa,dFa,gFa,jFa,hFa,mFa,uFa,tFa,nFa,vFa,pFa,qFa,oFa,zFa,BFa,DFa,HFa,KFa,LFa,NFa,PFa,RFa,QFa,ZFa,TFa,SFa,$Fa,cGa,dGa,eGa,fGa,FN,lEa,iGa,gGa,HN,kGa,lGa,KN,oGa,pGa,nGa,LN,qGa,MN,NN,zK,ON,jEa,PN,rGa,OAa,sGa,QN,tGa,uGa,vGa,RN,SN,wGa,TN,UN,VN,WN,XN,xGa,yGa,YN,zGa,AGa,ZN,BGa,$N,lM,aO,bO,CGa,cO,DGa,EGa,nEa,mGa,
FGa,dO,AK,nK,tN,GGa,HGa,eO,NEa,qN,IGa,GN,jGa,GFa,FFa,fFa,uN,IFa,MFa,OFa,JEa,aGa,JGa,wFa,rFa,fO,oEa,LGa,KGa,eFa,JFa,MGa,bGa,vN,KEa,MEa,CEa,EFa,CFa,lFa,iFa,xEa,wEa,sEa,yFa,sFa,UFa,GEa,HEa,XFa,YFa,VFa,WFa,AFa,PGa,NGa,gO,OGa,hO,aK,UJ,Jza,QJ,iO,jO,kO,qO,RGa,sO,TGa,UGa,VGa,WGa,YGa,XGa,ZGa,$Ga,vO,yO,aHa,bHa,dHa,cHa,eHa,fHa,gHa,hHa,iHa,jHa,AO,BO,mHa,CO,DO,nHa,oHa,pHa,qHa,EO,rHa,FO,sHa,tHa,GO,IO,MO,uHa,NO,OO,PO,QO,RO,SO,TO,UO,VO,WO,XO,vHa,wHa,YO,ZO,$O,aP,bP,cP,xHa,yHa,dP,hP,BHa,CHa,iP,EHa,DHa,FHa,GHa,kP,lP,
mP,Y,IHa,nP,NHa,RHa,SHa,THa,bIa,eIa,jIa,kIa,IIa,JIa,KIa,lIa,mIa,sIa,PIa,wIa,xIa,UIa,SIa,WIa,XIa,TIa,YIa,$Ja,eJa,aKa,fJa,gJa,wP,cKa,eKa,gKa,fKa,dKa,lJa,CJa,DJa,kKa,mKa,FJa,GJa,IJa,JJa,KJa,tKa,MJa,PJa,WJa,CKa,xKa,yKa,EKa,HKa,GKa,IKa,JKa,RKa,KKa,zP,OKa,XKa,YKa,ZKa,$Ka,aLa,dLa,iLa,MLa,LLa,DP,EP,FP,GP,HP,IP,TLa,KP,JP,VLa,RLa,SLa,WLa,ULa,LP,XLa,gqa,ZLa,YLa,aMa,cMa,eMa,fMa,gMa,dMa,hMa,mMa,lMa,OP,oMa,pMa,qMa,rMa,QP,PP,sMa,tMa,uMa,wMa,SP,xMa,UP,WP,yMa,XP,YP,zMa,DMa,FMa,EMa,HMa,OMa,PMa,$P,GMa,CMa,BMa,AMa,dQ,
aQ,cQ,iQ,jQ,SMa,TMa,kQ,hQ,XMa,UMa,VMa,YMa,lQ,mQ,$Ma,aNa,oQ,pQ,qQ,rQ,sQ,bNa,cNa,dNa,tQ,uQ,xQ,fNa,gNa,vQ,hNa,kNa,lNa,yQ,mNa,BQ,nNa,CQ,EQ,pNa,DQ,FQ,qNa,sNa,tNa,uNa,HQ,IQ,NQ,xNa,KQ,OQ,QQ,yNa,RQ,MQ,PQ,zNa,SQ,ANa,TQ,BNa,JQ,LQ,vNa,wNa,UQ,CNa,DNa,ENa,VQ,WQ,XQ,FNa,YQ,ZQ,GNa,$Q,HNa,aR,bR,cR,INa,JNa,KNa,LNa,MNa,dR,NNa,ONa,PNa,QNa,RNa,SNa,eR,fR,TNa,gR,XNa,YNa,ZNa,$Na,aOa,iR,jR,hR,UNa,bOa,cOa,dOa,eOa,kR,lR,fOa,mR,nR,gOa,hOa,oR,iOa,jOa,nOa,oOa,kOa,lOa,mOa,pOa,pR,qR,rR,qOa,rOa,sR,tR,sOa,uR,tOa,vOa,uOa,vR,wOa,xOa,
yOa,zOa,AOa,BOa,DOa,EOa,wR,FOa,HOa,JOa,IOa,zR,NOa,MMa,bQ,OOa,POa,QOa,ROa,SOa,TOa,ZP,yR,UOa,AR,ZOa,$Oa,aPa,bPa,BR,fPa,cPa,dPa,hPa,iPa,jPa,kPa,gPa,lPa,CR,DR,ER,mPa,nPa,FR,oPa,pPa,qPa,GR,XOa,sPa,NMa,IMa,uPa,IR,KR,LR,MR,NR,OR,JR,vPa,xPa,RR,APa,yPa,CPa,DPa,BPa,zPa,EPa,FPa,GPa,WR,HPa,IPa,KPa,LPa,RMa,YR,MPa,PPa,eQ,QPa,RPa,SPa,JMa,LMa,ZR,$R,aS,bS,UPa,VPa,cS,WPa,dS,eS,XPa,fS,YPa,gS,ZPa,hS,iS,jS,kS,aQa,bQa,lS,cQa,dQa,$Pa,mS,eQa,gQa,iQa,hQa,fQa,wQa,tQa,zQa,CS,DS,jQa,uQa,YJ,AS,GS,AQa,KS,CQa,sS,LS,rS,DQa,sQa,
OS,PS,GQa,HQa,IQa,JQa,KQa,LQa,MQa,QS,NQa,SQa,RQa,OQa,QQa,PQa,RS,TQa,SS,UQa,VQa,XQa,YQa,ZQa,dRa,XS,YS,gRa,ZS,$S,hRa,kRa,lRa,mRa,nRa,aT,pRa,tRa,uRa,BRa,FRa,yRa,zRa,HRa,jT,IRa,KRa,JRa,LRa,lT,oT,MRa,kT,NRa,pT,ORa,SRa,PRa,VRa,RRa,kSa,tSa,IT,uSa,wSa,hSa,wT,vSa,BT,JT,fSa,ySa,xSa,KT,tT,iSa,DSa,zSa,ASa,BSa,CSa,ESa,MT,FSa,HSa,ISa,OT,JSa,sT,yT,GSa,lSa,QRa,pSa,UT,zT,aU,cU,GT,dU,eU,WSa,XSa,HT,gU,YSa,hU,ZSa,AT,iU,gSa,$Sa,OSa,xT,ZRa,aTa,XRa,WRa,TRa,lU,jTa,lTa,mTa,oU,qU,rU,pU,nTa,tU,oTa,pTa,uU,rTa,vU,tTa,uTa,sTa,
vTa,yTa,ATa,CTa,DTa,FTa,ETa,BU,GTa,JTa,KTa,MU,MTa,NU,NTa,QTa,RTa,TTa,STa,UTa,PTa,WTa,VTa,ZTa,XTa,YTa,bUa,cUa,dUa,eUa,aUa,gUa,hUa,fUa,$Ta,iUa,jUa,kUa,lUa,mUa,nUa,pUa,qUa,oUa,OU,rUa,sUa,uUa,tUa,vUa,xUa,wUa,yUa,zUa,AUa,BUa,DUa,EUa,CUa,QU,GUa,HUa,SU,IUa,WU,XU,YU,ZU,$U,JUa,aV,KUa,OUa,bV,cV,PUa,QUa,SUa,RUa,TUa,UUa,VUa,dV,eV,WUa,YUa,ZUa,$Ua,iV,fVa,eVa,jV,hVa,kV,lV,iVa,mV,jVa,kVa,lVa,mVa,nVa,nV,pVa,oVa,qVa,rVa,oV,pV,sVa,uVa,vVa,wVa,qV,xVa,rV,yVa,BVa,sV,zVa,EVa,CVa,DVa,AVa,tV,IVa,GVa,HVa,JVa,uV,KVa,LVa,MVa,
vV,NVa,OVa,PVa,yV,wV,QVa,zV,RVa,BV,CV,TVa,AV,VVa,DV,FV,WVa,GV,HV,IV,XVa,$Va,ZVa,KV,LV,MV,cWa,aWa,bWa,NV,dWa,hWa,fWa,eWa,gWa,OV,jWa,kWa,PV,lWa,mWa,QV,rWa,pWa,qWa,RV,sWa,oWa,tWa,SV,TV,uWa,vWa,wWa,UV,xWa,yWa,zWa,AWa,BWa,CWa,DWa,GWa,EWa,HWa,IWa,JWa,KWa,MWa,dW,eW,NWa,OWa,cW,SWa,RWa,TWa,UWa,VWa,WWa,XWa,YWa,TPa,ZWa,$Wa,fXa,iW,iXa,lXa,kXa,jXa,dXa,eXa,aXa,bXa,gXa,jW,kW,nXa,GU,zTa,mW,oXa,qXa,pXa,hXa,sXa,tXa,uXa,oW,vXa,vW,xXa,yXa,zXa,BXa,AXa,CXa,wW,xW,DXa,GXa,HXa,zW,FXa,IXa,JXa,EXa,AW,DW,KXa,LXa,CW,MXa,NXa,
OXa,PXa,RXa,QXa,TXa,UXa,SXa,XXa,VXa,GW,HW,YXa,KW,LW,ZXa,aYa,NW,$Xa,bYa,cYa,dYa,fYa,eYa,hYa,gYa,iYa,QW,jYa,kYa,lYa,RW,SW,nYa,mYa,VW,TW,UW,oYa,pYa,WW,XW,rYa,sYa,qYa,tYa,uYa,vYa,xYa,zYa,yYa,YW,AYa,BYa,wYa,GYa,HYa,IYa,LYa,KYa,JYa,MYa,NYa,ZW,$W,OYa,PYa,QYa,RYa,TYa,aX,cX,SYa,UYa,VYa,WYa,XYa,YYa,eX,ZYa,$Ya,cZa,fX,dZa,bZa,gX,hX,eZa,fZa,hZa,jZa,gZa,iZa,jX,kZa,mZa,nZa,pZa,qZa,kX,lX,rZa,lZa,tZa,sZa,mX,nX,oX,vZa,uZa,pX,qX,wZa,xZa,rX,yZa,zZa,AZa,sX,BZa,tX,CZa,uX,a_a,b_a,c_a,e_a,f_a,g_a,d_a,i_a,h_a,j_a,m_a,yX,
o_a,n_a,k_a,l_a,p_a,q_a,zX,AX,r_a,s_a,t_a,u_a,v_a,w_a,y_a,z_a,H_a,C_a,D_a,A_a,K_a,FX,L_a,P_a,IX,Q_a,M_a,EX,LX,KX,GX,MX,T_a,U_a,NX,HX,I_a,S_a,JX,N_a,R_a,W_a,BX,OX,X_a,Y_a,O_a,PX,QX,Z_a,RX,$_a,UX,VX,a0a,b0a,d0a,e0a,c0a,WX,XX,f0a,g0a,h0a,i0a,j0a,l0a,n0a,m0a,k0a,p0a,o0a,YX,ZX,q0a,s0a,t0a,$X,r0a,u0a,v0a,w0a,bY,eY,dY,y0a,x0a,z0a,fY,gY,A0a,B0a,D0a,C0a,E0a,F0a,G0a,iY,H0a,I0a,J0a,K0a,L0a,M0a,O0a,P0a,Q0a,N0a,R0a,S0a,T0a,U0a,V0a,mY,X0a,nY,Z0a,oY,Y0a,b1a,c1a,a1a,pY,d1a,qY,rY,sY,e1a,tY,g1a,h1a,i1a,uY,j1a,k1a,
l1a,m1a,n1a,p1a,f1a,q1a,t1a,v1a,x1a,A1a,F1a,wY,G1a,H1a,I1a,J1a,yY,K1a,L1a,M1a,R1a,W1a,U1a,O1a,BY,T1a,N1a,V1a,DY,Y1a,X1a,EY,$1a,a2a,b2a,d2a,e2a,c2a,f2a,UVa,IY,g2a,h2a,JY,KY,i2a,LY,k2a,j2a,l2a,s2a,PY,t2a,QY,v2a,SY,RY,w2a,m2a,TY,y2a,z2a,B2a,UY,C2a,VY,E2a,D2a,WY,q2a,NY,F2a,G2a,H2a,I2a,J2a,n2a,p2a,OY,M2a,P2a,O2a,N2a,XY,YY,$Y,aZ,Q2a,R2a,S2a,T2a,U2a,ZY,K2a,V2a,W2a,$2a,L2a,b3a,f3a,eZ,g3a,h3a,d3a,gZ,i3a,j3a,a3a,k3a,e3a,l3a,hZ,fZ,m3a,o3a,n3a,dZ,q3a,kZ,r3a,iZ,lZ,jZ,mZ,s3a,t3a,u3a,x3a,w3a,z3a,A3a,y3a,pZ,oZ,C3a,
D3a,E3a,F3a,G3a,I3a,H3a,J3a,rZ,sZ,K3a,tZ,L3a,N3a,Q3a,O3a,P3a,zZ,DZ,S3a,EZ,T3a,U3a,V3a,FZ,GZ,HZ,X3a,Y3a,W3a,a4a,b4a,c4a,IZ,JZ,d4a,e4a,f4a,xRa,ERa,g4a,i4a,h4a,j4a,k4a,LZ,l4a,m4a,NZ,OZ,MZ,n4a,vZ,o4a,p4a,q4a,r4a,s4a,t4a,u4a,QZ,w4a,x4a,v4a,y4a,z4a,A4a,RZ,C4a,D4a,SZ,E4a,F4a,G4a,H4a,I4a,J4a,K4a,L4a,M4a,N4a,O4a,TZ,Q4a,S4a,T4a,U4a,UZ,VZ,WZ,XZ,YZ,ZZ,$Z,V4a,a_,W4a,X4a,b5a,e5a,f5a,g5a,h5a,e_,f_,d5a,a5a,i5a,c_,Y4a,k5a,b_,d_,Z4a,$4a,g_,l5a,m5a,c5a,j5a,n5a,o5a,s5a,p5a,t5a,u5a,q5a,r5a,v5a,w5a,y5a,x5a,h_,D5a,B5a,
C5a,z5a,E5a,i_,A5a,j_,k_,F5a,G5a,H5a,l_,J5a,K5a,m_,L5a,n_,M5a,N5a,O5a,P5a,R5a,S5a,Z5a,V5a,Q5a,a6a,b6a,W5a,X5a,U5a,Y5a,p_,T5a,$5a,h6a,f6a,e6a,d6a,c6a,r_,i6a,uZ,j6a,s_,t_,k6a,l6a,m6a,u_,n6a,BZ,o6a,p6a,xZ,yZ,t6a,w_,y_,u6a,v6a,A_,x_,v_,B_,r6a,q6a,s6a,C_,w6a,x6a,R4a,wZ,y6a,z_,z6a,A6a,B6a,C6a,D_,D6a,Z3a,$3a,E6a,F6a,E_,I6a,G6a,J6a,L6a,F_,M6a,N6a,O6a,H_,J_,Q6a,R6a,V6a,T6a,W6a,X6a,S6a,U6a,P6a,Y6a,Z6a,c7a,e7a,f7a,K_,g7a,B4a,h7a,i7a,L_,j7a,k7a,l7a,m7a,n7a,N_,u7a,t7a,S_,v7a,s7a,y7a,z7a,A7a,C7a,D7a,E7a,F7a,G7a,
H7a,J7a,K7a,L7a,I7a,V_,M_,M7a,N7a,T_,P7a,B7a,U_,Q7a,R7a,U7a,V7a,S7a,T7a,Y7a,X7a,Z7a,$7a,a8a,W7a,b8a,c8a,W_,d8a,e8a,f8a,g8a,j8a,i8a,h8a,X_,k8a,m8a,n8a,o8a,$_,a0,P4a,p8a,q8a,t8a,s8a,r8a,u8a,w8a,x8a,v8a,b0,z8a,A8a,B8a,G8a,F8a,H8a,J8a,g6a,C8a,E8a,D8a,I8a,AZ,o_,G_,K8a,L8a,M8a,N8a,O8a,l8a,c0,I_,P8a,K6a,e0,f0,Q8a,g0,R8a,S8a,T8a,U8a,V8a,W8a,Y8a,X8a,$8a,a9a,e9a,b9a,d9a,f9a,i0,j9a,h9a,i9a,m9a,n9a,o9a,p9a,q9a,h0,r9a,l9a,g9a,j0,s9a,c9a,t9a,k0,v9a,w9a,x9a,u9a,l0,A9a,z9a,D9a,C9a,B9a,E9a,F9a,m0,G9a,H9a,L9a,I9a,
J9a,K9a,M9a,N9a,O9a,Q9a,P9a,R9a,S9a,T9a,V9a,X9a,W9a,Y9a,U9a,Z9a,a$a,c$a,$9a,d$a,e$a,g$a,f$a,h$a,b$a,p0,i$a,j$a,k$a,m$a,o$a,p$a,r$a,s$a,t$a,u$a,x$a,y$a,w$a,z$a,A$a,B$a,D$a,C$a,G$a,t0,bZ,E$a,F$a,H$a,w0,J$a,I$a,K$a,M$a,N$a,Q$a,O$a,T$a,x0,P$a,U$a,y0,W$a,A0,C0,X$a,z0,Y$a,D0,aab,$$a,V$a,bab,cab,dab,B0,eab,E0,fab,Z$a,v$a,v0,cZ,hab,Y2a,X2a,iab,Z2a,jab,kab,lab,mab,G0,nab,pab,qab,rab,oab,sab,tab,H0,uab,vab,wab,xab,I0,qCa,yab,zab,Aab,K0,Dab,Eab,M0,Fab,Gab,Cab,L0,J0,Bab,P0,O0,Q0,N0,Kab,Mab,Oab,Pab,Rab,Iab,Nab,
Sab,Jab,Uab,Vab,Xab,R0,Yab,Wab,S0,Zab,Lab,$ab,Qab,Hab,U0,fbb,cbb,gbb,dbb,bbb,hbb,abb,kbb,V0,lbb,nbb,OL,pbb,rbb,sbb,tbb,Z0,ubb,o2a,wbb,$0,o0,xbb,zbb,vbb,GY,T0,Abb,Bbb,e1,O7a,qbb,d1,W0,Ebb,Fbb,Hbb,Gbb,ybb,b1,Ibb,g1,Jbb,S1a,Lbb,Kbb,y8a,n0,Mbb,Z1a,Nbb,x2a,YVa,a1,Obb,Qbb,Pbb,Q1a,Rbb,Tbb,Dbb,obb,Vbb,Ubb,c1,X0,Wbb,h1,CY,Ybb,Zbb,u2a,$bb,acb,bcb,P1a,f1,Z_,ccb,ncb,icb,qcb,hcb,rcb,gcb,j1,HY,wcb,scb,ucb,tcb,ycb,m1,n1,Bcb,Acb,zcb,p1,mcb,u1,Dcb,t1,o1,Fcb,Hcb,Icb,jcb,Gcb,x1,Jcb,lcb,r1,Ccb,q1,Mcb,l1,Ncb,Pcb,Qcb,
Ocb,A1,Ecb,B1,C1,Rcb,s1,xcb,Lcb,Kcb,Scb,Tcb,Ucb,Vcb,v1,Wcb,w1,Xcb,Zcb,k1,D1,vcb,$cb,adb,kcb,z1,y1,bdb,v3a,cdb,ddb,edb,fdb,E1,hdb,ldb,odb,kdb,gdb,xdb,ydb,zdb,Bdb,Adb,F1,G1,Ddb,Edb,Fdb,KCa,Cdb,tCa,Hdb,Gdb,H1,Jdb,Idb,Kdb,I1,J1,K1,wN,Ldb,IN,hGa,Mdb,LEa,fM,gM,Ndb,Odb,Pdb,L1,Rdb,Sdb,M1,O1,P1,Vdb,Wdb,Q1,Xdb,Tdb,Udb,Ydb,Zdb,$db,aeb,R1,beb,KAa,nM,ceb,deb,PAa,NK,eeb,feb,geb,S1,jeb,ieb,keb,T1,U1,leb,meb,N1,neb,oeb,peb,V1,W1,qeb,X1,Y1,reb,Z1,$1,seb,a2,b2,teb,ueb,PCa,c2,veb,xeb,web,d2,e2,f2,yeb,zeb,Aeb,Beb,Ceb,
Deb,Eeb,Geb,h2,Feb,Heb,Ieb,Jeb,Keb,Oeb,Leb,Meb,Neb,Qeb,Seb,Teb,Ueb,Reb,i2,Veb,Web,Xeb,Yeb,Zeb,k2,$eb,l2,m2,n2,afb,bfb,dfb,efb,ffb,gfb,ifb,hfb,jfb,o2,p2,mfb,kfb,lfb,q2,ofb,pfb,r2,s2,qfb,t2,sfb,u2,tfb,ufb,vfb,v2,w2,x2,wfb,xfb,yfb,Bfb,Afb,y2,Cfb,Dfb,Efb,iEa,zfb,Ffb,Ifb,Jfb,Lfb,aaa,ka;ca=
g.ea=
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
g.H=
g.Ia=
Ja=
kaa=
Ma=
Na=function(a){return a?a:Array.prototype.fill};
Pa=
laa=
Ra=function(a){return a?a:function(b,c){return laa(this,b,c).i}};
g.Ua=
Ya=
g.Va=
$a=
g.bb=
g.cb=
g.gb=
naa=
oaa=
g.jb=
g.kb=
g.ob=function(){return Date.now()};
g.pb=
qb=function(a){return a};
paa=function(a){this.j=a};
sb=
tb=function(a,b){sb.call(this,a,3,b)};
ub=
g.vb=
g.wb=
g.I=
g.M=
zb=
Ab=
qaa=function(){};
g.Bb=
g.Cb=
raa=
g.Eb=
Db=
g.Gb=
g.Hb=function(a,b){return 0<=saa(a,b)};
taa=
g.Jb=
g.Ib=
g.Kb=
uaa=
g.Lb=
g.Mb=
g.Ob=
g.Sb=
Pb=
vaa=
g.Wb=
Xb=
waa=
g.Zb=
xaa=
g.$b=
Tb=
yaa=
g.ac=
g.cc=
zaa=
Aaa=
Caa=
Baa=
Daa=
ec=
Eaa=
g.fc=function(a){return/^[\s\xa0]*$/.test(a)};
gc=
g.hc=
ic=
g.nc=
lc=
g.oc=
uc=
vc=
xc=
yc=function(){return xc()?!1:vc("Opera")};
zc=
Dc=
Maa=
Ec=
Ic=
Fc=
Naa=
Oaa=
Paa=
Qaa=
Jc=
Raa=function(){return Jc()?"Android"===tc.platform:vc("Android")};
Kc=
Mc=
Nc=function(){return Jc()?"macOS"===tc.platform:vc("Macintosh")};
Saa=
Oc=
Qc=
Uaa=
Vaa=
g.Sc=
g.Uc=
Xaa=
Wc=
Zc=function(a){return!(!a||!a[Yaa])};
$aa=
$c=
g.ad=
g.bd=
cd=
g.dd=
aba=
g.ed=
bba=
g.hd=
g.id=
g.jd=
g.kd=
ld=
cba=
g.nd=
g.dba=
g.od=
g.pd=
g.qd=
g.rd=
g.sd=
xd=
g.yd=
zd=
g.Bd=
fba=
gba=
Ad=
lba=
Hd=
iba=
kba=
Fd=
Dd=
g.Md=
Nd=
Od=
mba=
Sd=
g.Td=function(){};
nba=
Ud=
Vd=
oba=
Xd=
g.Yd=
Zd=
be=
g.ce=function(a){this.SZ=a};
g.de=function(a){return a instanceof g.ce&&a.constructor===g.ce?a.SZ:"type_error:TrustedResourceUrl"};
ee=function(a){var b=Xd();a=b?b.createScriptURL(a):a;return new g.ce(a,rba)};
g.je=function(a){this.RZ=a};
g.ke=function(a){return a instanceof g.je&&a.constructor===g.je?a.RZ:"type_error:SafeUrl"};
uba=
wba=
g.me=function(a){this.QZ=a};
ne=function(a){return a instanceof g.me&&a.constructor===g.me?a.QZ:"type_error:SafeStyle"};
Dba=
Bba=
Cba=
g.se=function(a){this.PZ=a};
g.te=
Fba=
Gba=
g.ue=
we=function(){};
Iba=
Jba=function(a){return ne(a)};
g.Lba=
Mba=
Nba=
g.xe=
g.ye=
ze=
g.Ae=
Ce=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.De=function(a,b){this.width=a;this.height=b};
g.Je=
g.Ke=function(a){return encodeURIComponent(String(a))};
Le=
g.Me=function(a){return a=gc(a)};
g.Ne=
Oe=
Pe=
Oba=
Pba=
Qba=
Rba=
Xe=
Ye=
g.Ze=
g.cf=
g.df=
g.$e=
ef=
Uba=
Wba=
Vba=
nf=
sf=
Xba=
g.tf=function(a){return of(document,a)};
of=
g.uf=
g.vf=function(a,b){a.appendChild(b)};
g.wf=
xf=
g.yf=
g.zf=
g.Df=
Se=
g.Ef=
Ff=
Zba=
Lf=
Kf=
Re=
Nf=
$ba=
Of=
Pf=function(){this.B=this.j=null};
Qf=
g.Wf=
aca=
cca=
g.Yf=
eca=
Zf=
$f=
ag=
g.hca=
ica=
kca=
cg=
lca=
bg=
pca=
Xf=
gca=
rca=
oca=
mca=
nca=
sca=
qca=
dg=function(a){zb.call(this,a)};
jca=function(a,b,c){this.promise=a;this.resolve=b;this.reject=c};
g.eg=
g.fg=
gg=
g.qg=
uca=
vca=
wca=
xca=function(a){this.j=a;this.j.DG("/client_streamz/po/w/rl",{Xe:3,We:"mn"},{Xe:2,We:"ac"},{Xe:2,We:"sc"},{Xe:3,We:"rk"})};
yca=function(a){this.j=a;this.j.DG("/client_streamz/po/w/el",{Xe:3,We:"en"},{Xe:3,We:"rk"})};
zca=function(a){this.j=a;this.j.Ck("/client_streamz/po/w/cec",{Xe:2,We:"ec"},{Xe:3,We:"rk"})};
Aca=function(a){this.j=a;this.j.Ck("/client_streamz/po/w/csc",{Xe:2,We:"cs"},{Xe:3,We:"rk"})};
Bca=function(a){this.j=a;this.j.Ck("/client_streamz/po/w/ctav",{Xe:3,We:"av"},{Xe:3,We:"rk"})};
Cca=function(a){this.j=a;this.j.Ck("/client_streamz/po/w/cwsc",{Xe:3,We:"su"},{Xe:3,We:"rk"})};
rg=function(){throw Error("Invalid UTF8");};
Dca=
Hca=
Ica=
Jca=
g.sg=
g.tg=
g.ug=
Oca=
vg=
Nca=
Kca=
Qca=
Sca=function(a){return Rca[a]||""};
Uca=
xg=
yg=
Xca=
Ag=
Bg=
Zca=
Dg=
Cg=
$ca=
Fg=
ada=
Gg=
Hg=
Rg=
bda=
Sg=
cda=
dda=
Tg=
Ig=
Ug=
Wg=
Vg=
Xg=
Yg=
Zg=
$g=
ah=
eda=
gda=
ch=
hda=
ida=
dh=
eh=
ph=
kda=
lda=function(a,b){this.B=a>>>0;this.j=b>>>0};
nda=function(a){if(!a)return mda||(mda=new lda(0,0));if(!/^\d+$/.test(a))return null;Tg(a);return new lda(Pg,Qg)};
oda=
qda=
qh=function(){this.j=[]};
rda=
rh=
sda=
sh=
tda=
th=
uh=
uda=
vh=
wh=function(a,b,c,d){this.bL=a;this.cL=b;this.j=c;this.Y0=d};
xh=
vda=
Ah=
wda=
xda=function(a,b){zh(b,(a|0)&-14591)};
Ch=
Dh=
Eh=
zda=
Fh=
Gh=
Hh=
Ih=
Ada=
Bda=
Kh=
Lh=
Cda=
Dda=
Eda=
Fda=
Yh=
Zh=
$h=
Hda=
ai=function(a){return null==a?a:Hda(a)};
bi=
ci=
Jda=
fi=
gi=
Kda=
Lda=
ei=
hi=
Ida=
di=
ii=
Mda=
Nda=
Oda=
ji=
ki=
li=
mi=
Pda=
pi=
Qi=
N=
Sda=
Rda=
Uda=
Vda=
Ri=
Wda=
Xda=
Ti=
Ui=
Wi=
Vi=
Yi=
Xi=
Zi=
bj=
tj=
Zda=
$da=
dj=
aea=function(a){return Gh(a,!0,!0,!0)};
bea=function(a){return Gh(a,!0,!0,!1)};
uj=
vj=
wj=
yj=
xj=
cea=function(a){return a};
dea=
Aj=
Bj=
Cj=
zj=
Dj=
Yda=
g.Ej=
eea=
fea=
Fj=
Gj=
Hj=
cj=
Ij=
Jj=
gea=
Kj=
hea=function(a,b,c,d,e){return tj(a,b,li,c,d,e)};
iea=
Lj=
jea=
Mj=
Nj=
kea=
Oj=
lea=
g.Pj=
Qj=
mea=
Rj=function(a,b,c){return Yi(a,b,null==c?c:Eda(c))};
Sj=function(a,b,c){return Yi(a,b,ai(c))};
Tj=
Uj=function(a,b,c){return Yi(a,b,fi(c))};
qk=
rk=function(a,b,c){return Yi(a,b,Lh(c))};
O=
sk=
tk=
R=
uk=
T=
nea=
vk=
wk=
xk=
Dk=
sea=
Ek=function(){};
uea=
wea=
tea=
vea=
Fk=
yk=
Gk=
xea=
yea=
Ik=
Cea=
Dea=function(a){return a.cL};
Eea=
Kk=
Fea=
Gea=
zk=
Hea=
Bea=
Nk=function(a,b){return new wh(a,b,!1,!1)};
Ok=
Pk=
Qk=
Rk=
Sk=
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
efa=function(a,b){Hj(a,Km,1,b)};
Mm=function(a){this.ea=N(a)};
gfa=
Pm=function(a){this.ea=N(a)};
Qm=function(a){this.ea=N(a)};
Rm=function(a){this.ea=N(a,4)};
Sm=function(a){this.ea=N(a,35)};
Tm=function(a){this.ea=N(a,19)};
Um=function(a){this.ea=N(a,7)};
hfa=function(a){this.ea=N(a)};
Xm=
ifa=
jfa=
Vm=
Wm=
kfa=function(a,b){Zi(Zm(a),Mm,11)&&(a=$m(a),R(a,1,b))};
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
Nn=
g.Mn=
g.On=
g.Pn=
g.Bfa=
g.Qn=
Rn=function(){};
Sn=
Tn=
Un=
Cfa=
Vn=
Wn=function(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()};
Xn=
Dfa=function(){};
Efa=
Ffa=
Yn=
Hfa=
Zn=
Ifa=
Jfa=
Mfa=
Lfa=
Kfa=
Nfa=
Ofa=
Pfa=function(a){this.j=a;this.j.DG("/client_streamz/bg/fil",{Xe:3,We:"rk"},{Xe:3,We:"ke"})};
Qfa=function(a){this.j=a;this.j.Ck("/client_streamz/bg/fsc",{Xe:3,We:"rk"},{Xe:3,We:"ke"})};
Rfa=
Ufa=
Sfa=
ao=
co=
eo=function(){};
fo=
bo=
Vfa=function(a){this.ea=N(a)};
Wfa=function(a){this.ea=N(a)};
go=
g.ho=
io=
Xfa=function(){};
jo=function(a){this.j=a};
ko=function(a){this.Ee=a};
lo=
Zfa=
g.mo=
no=
aga=
cga=
dga=
g.po=
ega=
qo=
g.ro=
so=
fga=
gga=
g.to=
hga=
uo=
iga=function(){uo.instance||(uo.instance=new uo);return uo.instance};
kga=
jga=
lga=
mga=
pga=
vo=function(a){this.ea=N(a)};
wo=function(a){this.ea=N(a)};
xo=function(a){this.ea=N(a)};
yo=function(a,b,c){this.client=a;this.ej=b;this.j=c};
zo=function(a){this.ea=N(a)};
Ao=function(a,b,c){this.j=a;this.C=b;this.B=c};
Bo=
Co=
qga=
Do=function(a){this.ea=N(a)};
Eo=function(a){this.ea=N(a)};
Fo=function(a){this.ea=N(a)};
Go=function(a){this.ea=N(a)};
Ho=
uga=
rga=
Ko=
tga=
Lo=
sga=function(a,b){for(var c=0;c<a.C.length;c++)a.C[c](b)};
Jo=function(a,b){for(var c=0;c<a.G.length;c++)a.G[c](b)};
Io=
g.Mo=
xp=
wga=
zp=
yp=
g.Ap=
g.Bp=
g.Cp=
g.Dp=
Ep=
g.Ip=
g.Jp=
Fp=
Hp=
zga=
Gp=
Kp=
Aga=
g.Bga=
Lp=
xga=
g.Cga=
g.Mp=
g.Np=
Dga=
Ega=
Fga=
Op=
Pp=
Qp=
Gga=
Rp=
Sp=
Tp=
Up=
Hga=
Vp=
Wp=
Xp=
Iga=
Jga=
Yp=
Kga=
Zp=
Nga=
Oga=
Pga=
Qga=
Lga=
$p=
aq=
bq=
cq=
Sga=
Tga=
Rga=
dq=
Uga=
Vga=
Wga=
hq=
Xga=
iq=function(a){zb.call(this,a);this.name="TimerCancelledError"};
jq=
Zga=
$ga=
kq=
aha=
lq=
mq=
nq=
oq=
pq=
qq=function(a,b,c){nq.call(this,a);this.K=b;this.C="f";this.B="z";oq(this,c)};
rq=
sq=
bha=
tq=
uq=
cha=
eha=
dha=
vq=
fha=
gha=
hha=
wq=
xq=function(){this.B=null;this.j=!1};
yq=
pr=function(){xq.call(this)};
qr=
rr=
sr=
iha=
tr=
ur=
vr=
jha=
lha=
mha=
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
os=function(a,b,c,d,e,f,h,l){this.D=a;this.N=b;this.C=c;this.K=d;this.j=e;this.G=f;this.B=h;this.Z=l};
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
$s=
at=
zia=
Aia=
Bia=
bt=
Cia=
ct=
dt=
Dia=
Eia=
Fia=
Gia=
Hia=function(){this.j=0};
Iia=
et=
ft=
gt=function(a,b){return Kia(a,function(c){return c.j},void 0===b?!0:b)};
it=function(a,b){return ht(a,b,function(c){return c.j})};
Lia=
jt=function(a,b){return ht(a,b,function(c){return c.C})};
kt=
Mia=
Kia=
ht=
Nia=
lt=
mt=
nt=
pt=
ot=
Oia=
Pia=
Qia=
qt=
Sia=
rt=
Uia=
Via=
Wia=
Xia=
Yia=
g.tt=function(){};
g.ut=
Zia=
$ia=
aja=
vt=
wt=
xt=
cja=
bja=
dja=function(){this.B=this.j=""};
eja=function(){};
At=
fja=
Bt=
gja=
hja=
Ct=function(){this.j=this.B=0};
Dt=
Et=
ija=function(){this.C=!1};
Ft=
Gt=
jja=function(){};
Ht=function(){};
It=function(a,b,c,d){$s.call(this,a,b,c,d)};
Jt=
Kt=
Lt=
Mt=
Nt=
Ot=
kja=
lja=
mja=
nja=
Pt=
oja=
qja=
pja=
Rt=
St=
sja=
rja=
vja=
yja=
xja=
Tt=
zja=function(a){g.ad(a.j,function(b){1E5<b.C||++b.C})};
Aja=function(a){g.ad(a.j,function(b){1E5<b.j||++b.j})};
Bja=function(a){g.ad(a.j,function(b){1E5<b.j||++b.j})};
Dja=function(a){g.ad(a.j,function(b){1E5<b.B||++b.B})};
Cja=
Eja=function(){this.j=[];this.B=[]};
Ut=
Fja=
Gja=
Wt=
Hja=
Ija=
Jja=
Kja=
Xt=function(){this.j=this.B=null};
Lja=
Yt=
Mja=
Zt=
$t=
Oja=
au=
Pja=
bu=function(a){a=void 0===a?Ar:a;at.call(this,new Os(a,2))};
cu=
Qja=
Rja=function(){};
du=
fu=
Tja=
gu=
Sja=
Uja=
Vja=
Wja=
Yja=
hu=
Zja=
ku=
lu=
aka=
bka=
eka=
fka=
mu=
nu=function(){};
ou=function(a){Ft.call(this,"fully_viewable_audible_half_duration_impression",a)};
pu=function(a){this.j=a};
qu=
ru=function(a){Gt.call(this,"measurable_impression",a)};
tu=function(){pu.apply(this,arguments)};
uu=function(a,b,c){Jt.call(this,a,b,c)};
vu=function(a){a=void 0===a?Ar:a;at.call(this,new Os(a,2))};
wu=function(a,b,c){Jt.call(this,a,b,c)};
xu=
yu=
zu=
jka=
ika=
kka=
mka=
lka=
oka=
hka=
nka=
gka=
Au=
Bu=
qka=
rka=
ska=
Fu=
Gu=
Hu=
Cu=
uka=
Iu=
pka=
wka=
xka=
vka=
Ju=function(a){Ft.call(this,"audio_audible",a)};
Ku=
Lu=function(){pu.apply(this,arguments)};
Mu=function(){};
yka=function(a){this.j=a};
tka=
zka=
Nu=
Aka=
Bka=
Cka=
Dka=
Eka=
Hka=
Ika=
Jka=
Kka=
Lka=
Oka=
g.Ou=
Qu=
Qka=
Pu=
Su=
Rka=
Tu=
av=
bv=
g.cv=
g.dv=
Ska=
Tka=
g.ev=
g.fv=
g.gv=
g.hv=
iv=
Uka=function(a,b){return new iv(a,b)};
Vka=
jv=
g.kv=
g.lv=
g.mv=
g.nv=
g.ov=
g.pv=
g.qv=
Wka=
vv=
rv=function(a){this.B=a};
tv=function(a){this.B=a};
uv=
g.wv=
yv=
xv=
g.zv=
Xka=
Av=
Yka=
$ka=
Bv=
ala=
bla=
hla=
dla=
g.Ev=
Fv=
Gv=
mla=
Hv=
Iv=
Jv=
g.Kv=
ola=
g.Lv=function(a){this.j=a};
Mv=function(a){this.j=a};
pla=function(a){this.data=a};
qla=
Nv=function(a){this.j=a};
g.rla=
g.Ov=function(a){this.j=a};
sla=function(){};
Pv=function(){};
Qv=function(a){this.j=a;this.B=null};
Rv=
Sv=function(){var a=null;try{a=g.Sa.localStorage||null}catch(b){}Qv.call(this,a)};
tla=
Uv=
Vv=
Wv=
Xv=
g.Yv=
Zv=function(a,b){this.j=a;this.B=b};
$v=
vla=function(){$v.apply(this,arguments)};
g.aw=function(){};
wla=
cw=function(a){for(var b=a.length;0<=--b;)a[b]=0};
dw=
ew=
fw=
gw=
hw=
xla=
yla=
zla=
Ala=
Bla=
Cla=
iw=
Dla=
pw=
Ela=
Fla=
Gla=
qw=
tw=
uw=
vw=
yw=
zw=
Aw=
Ila=
Dw=
Ew=
Fw=
Jla=
Kla=
Gw=function(a,b,c,d,e){this.h7=a;this.D8=b;this.W8=c;this.C8=d;this.func=e};
Lla=
Mla=
Iw=
Ula=
Vla=
Wla=
Jw=
Xla=
Yla=
Lw=
bma=
g.Mw=
ama=
Nw=function(a){this.ea=N(a)};
cma=function(a){var b=a.split(""),c=[function(){for(var d=64,e=[];++d-e.length-32;)switch(d){case 46:d=95;default:e.push(String.fromCharCode(d));case 94:case 95:case 96:break;case 123:d-=76;case 92:case 93:continue;case 58:d=44;case 91:}return e},
function(d){d.reverse()},
-199606995,-1431084974,-14811561,1741332235,
-285404089,248022845,-825913713,899800572,-866856232,1080183831,1801607191,634724963,-783522532,-2026612278,443186038,469292436,
"kl3EL",-37248917,

',,;]["(',-1752389959,-1714027780,-1782571074,-1025978513,916644481,-1504777610,1649297768,141962081,-150307296,-486482738,null,-1136333445,b,'}";[)',-1960420972,-1611077043,null,-752022603,-1501310119,1801298654,610434119,295586846,-1364935266,-469818867,-389056117,-1621429227,function(d,e){if(0!=d.length){e=(e%d.length+d.length)%d.length;var f=d[0];d[0]=d[e];d[e]=f}},

b,712483859,

400070862,-2121435666,141962081,1080183831,-1838811490,1551617885,-1397737297,-357389026,1791728276,


-2010194172,function(d,e){e.push(d)},

-2042825859,b,

-14811561,
-885216462,704747277,346080657,"-",309515085,

-1848881489,-1042224904,null,1679078778,"kl3EL",-285404089];c[35]=c;c[41]=c;c[87]=c;try{try{3!==c[50]&&(4==c[31]?((0,c[67])(c[37],c[27]),c[6])(c[35],c[36]):(0,c[23])((0,c[70])(c[44],c[87]),c[66],c[53],(0,c[68])(),c[81])),3!==c[42]&&(3>=c[11]?(((((0,c[75])(c[37],c[90]),c[6])(c[87],c[34]),c[-34720+Math.pow(4,1)- -34801])(c[67],c[79]),c[69])(c[60],c[9]),c[85])(c[67],c[83])>>>((((0,c[37])((((0,c[69])(c[2],c[51]),c[6])(c[9]),c[6])(c[82],c[32]),c[49],c[79],c[15]),c[56])(c[72],c[89]),c[9])(c[20],c[65]),
c[34])(c[3],c[24]):(0,c[55])(c[57],((0,c[34])(c[5],c[0]),c[66])(c[79],(0,c[80])(),c[43]),(((0,c[39])(c[79]),c[130-Math.pow(5,4)- -560])(c[5],c[70]),c[new Date("1969-12-31T20:46:06.000-03:15")/1E3])(c[79],(0,c[18])(),c[51]),((0,c[17])((((0,c[81])(c[59],c[7]),c[39])(c[3]),(0,c[66])(c[79],(0,c[21])(),c[43]),c[Math.pow(1,4)+-20976+21041])(c[-835- -149*Math.pow(6,1)],(0,c[21])(),c[43]),c[48],c[3]),c[39])(c[59]),c[91],c[68])),(7<=c[9]||((0,c[17])((0,c[66])(c[79],(0,c[80])(),c[51]),c[66],c[3],(0,c[80])(),
c[51]),0))&&(0,c[17])((0,c[86+Math.pow(3,1)-55])(c[45],c[50]),c[22],c[33],c[36])}catch(d){(0,c[54])((0,c[2])(c[Math.pow(3,5)-19-142],c[38])%(0,c[2])(c[82],c[-12615-Math.pow(5,3)+12770]),c[85],c[24])}finally{7>=c[51]&&(-3!==c[87]||((0,c[21])((((0,c[54])(((0,c[2])(c[82],c[1]),c[11])(c[4],(0,c[55])(),c[88]),c[2],c[24],c[0]),c[76])(c[40]),c[22])(c[405%Math.pow(8,1)- -14],c[Math.pow(5,1)+59925+-59848]),c[22],(0,c[54])((0,c[2])(c[40],c[34]),c[11],c[40],(0,c[Math.pow(2,4)%390- -9])(),c[88]),c[47],c[36])>>
(0,c[22])(c[29],c[82]),void 0))&&(((0,c[22])(c[90],c[36]),c[86])(c[22],(0,c[76])(c[4]),(0,c[26])(c[4],c[60]),(0,c[Math.pow(2,4)-13230+13290])(c[36]),(0,c[20])(c[49],c[25]),c[3],c[35]),(0,c[53])(c[35],c[11]),(0,c[80])(c[55],c[36]),c[37])(c[45],c[Math.pow(5,1)-249%(new Date("1969-12-31T22:36:00.000-01:30")/1E3)+279])}try{1>=c[40]&&(9<c[24]||(((0,c[75])(c[69])*(0,c[58])(c[22],c[2]),(0,c[38])(c[74],c[78]),(0,c[6])(c[24],c[67]),(0,c[2])(c[24],c[0]),c[54])((0,c[6])(c[36],c[74]),c[34],c[74]),((0,c[61])(c[74],
(0,c[16])(),c[15]),c[56])(c[86],c[26]),0))&&(0,c[56])(((((0,c[15])((0,c[55])(c[43],c[45]),c[59],c[1],c[Math.pow(1,3)- -20944-20935]),c[64])(c[21],(0,c[78])(),c[49]),c[63])(c[3],c[81]),c[64])(c[77],(0,c[19])(),c[41]),(0,c[15])((0,c[63])(c[43],c[26]),c[75],c[80],c[77]),c[15],(0,c[46])(c[3]),c[55],c[89],c[127289-53*Math.pow(7,4)]),-3>=c[36]&&(0,c[75])(c[30],c[3]),6!==c[0]&&(0,c[32])(c[21],c[69]),(7===c[76]||((0,c[63])(c[43],c[12]),(0,c[55])(c[1],c[73]),(0,c[37])(c[21]),0))&&(0,c[15])(((0,c[55])(c[1],
c[42]),c[64])(c[1],(0,c[38])(),c[Math.pow(4,5)+-12369- -11363]),c[55],c[89],c[33])}catch(d){(0,c[59])(c[89],c[0]),(0,c[37])(c[21]),(0,c[64])(c[21],(0,c[38])(),c[41]),(0,c[Math.pow(3,new Date("1970-01-01T05:45:03.000+05:45")/1E3)-26- -74])(c[44],c[77])}try{2!==c[87]&&(-8<c[36]||((0,c[59])(c[-21375-Math.pow(3,1)+21421],c[13]),0))&&(0,c[42])(c[48])}catch(d){(0,c[60])(c[6],c[63])}}catch(d){return"enhanced_except_qZoB1uX-_w8_"+a}return b.join("")};
g.Ow=function(a){this.name=a};
Pw=function(a){this.ea=N(a)};
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
Iy=function(a){this.ea=N(a)};
dma=function(a,b){return Sj(a,1,b)};
Jy=function(a){this.ea=N(a)};
Ky=function(a){this.ea=N(a)};
Ly=function(a){this.ea=N(a)};
My=function(a){this.ea=N(a)};
Ny=function(a){this.ea=N(a)};
Oy=function(a){this.ea=N(a)};
Py=function(a){this.ea=N(a)};
Qy=function(a){this.ea=N(a)};
Ry=function(a){this.ea=N(a)};
Sy=function(a){this.ea=N(a)};
g.Ty=function(a){this.ea=N(a)};
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
ema=function(a){this.ea=N(a)};
Yz=function(a){this.ea=N(a)};
Zz=function(a){this.ea=N(a)};
$z=function(a){this.ea=N(a)};
fma=function(a){this.ea=N(a)};
aA=function(a){this.ea=N(a)};
gma=function(a){this.ea=N(a)};
bA=function(a){this.ea=N(a)};
cA=function(a){this.ea=N(a)};
hma=function(a){this.ea=N(a)};
dA=function(a){this.ea=N(a)};
ima=function(a){this.ea=N(a)};
eA=function(a){this.ea=N(a)};
jma=function(a){this.ea=N(a)};
kma=function(a){this.ea=N(a)};
lma=function(a){this.ea=N(a)};
fA=function(a){this.ea=N(a)};
mma=function(a){this.ea=N(a)};
gA=function(a){this.ea=N(a)};
hA=function(a){this.ea=N(a)};
nma=function(a){this.ea=N(a)};
iA=function(a){this.ea=N(a)};
oma=function(a){this.ea=N(a)};
jA=function(a){this.ea=N(a)};
kA=function(a){this.ea=N(a)};
lA=function(a){this.ea=N(a)};
mA=function(a){this.ea=N(a)};
g.nA=function(a){this.ea=N(a)};
g.oA=function(a){this.ea=N(a)};
pA=function(a){this.ea=N(a)};
qA=function(a){this.ea=N(a)};
rA=function(a){this.ea=N(a)};
pma=function(a){this.ea=N(a)};
sA=function(a){this.ea=N(a)};
tA=function(a){this.ea=N(a)};
uA=function(a){this.ea=N(a)};
qma=function(a){this.ea=N(a)};
vA=function(a){this.ea=N(a)};
wA=function(a){this.ea=N(a)};
xA=function(a){this.ea=N(a)};
yA=function(a){this.ea=N(a)};
rma=function(a){this.ea=N(a)};
zA=function(a){this.ea=N(a)};
AA=function(a){this.ea=N(a)};
BA=function(a){this.ea=N(a)};
CA=function(a){this.ea=N(a)};
DA=function(a){this.ea=N(a)};
sma=function(a){this.ea=N(a)};
EA=function(a){this.ea=N(a)};
tma=function(a){this.ea=N(a)};
FA=function(a){this.ea=N(a)};
uma=function(a){this.ea=N(a)};
GA=function(a){this.ea=N(a)};
HA=function(a){this.ea=N(a)};
vma=function(a){this.ea=N(a)};
IA=function(a){this.ea=N(a)};
JA=function(a){this.ea=N(a)};
KA=function(a){this.ea=N(a)};
wma=function(a){this.ea=N(a)};
xma=function(a){this.ea=N(a)};
yma=function(a){this.ea=N(a)};
zma=function(a){this.ea=N(a)};
LA=function(a){this.ea=N(a)};
MA=function(a){this.ea=N(a)};
Ama=function(a){this.ea=N(a)};
NA=function(a){this.ea=N(a)};
Bma=function(a){this.ea=N(a)};
Cma=function(a){this.ea=N(a)};
Dma=function(a){this.ea=N(a)};
Ema=function(a){this.ea=N(a)};
Fma=function(a){this.ea=N(a)};
OA=function(a){this.ea=N(a)};
PA=function(a){this.ea=N(a)};
Gma=function(a){this.ea=N(a)};
Hma=function(a){this.ea=N(a)};
QA=function(a){this.ea=N(a)};
RA=function(a){this.ea=N(a)};
Ima=function(a){this.ea=N(a)};
SA=function(a){this.ea=N(a)};
Jma=function(a){this.ea=N(a)};
Kma=function(a){this.ea=N(a)};
TA=function(a){this.ea=N(a)};
Lma=function(a){this.ea=N(a)};
Mma=function(a){this.ea=N(a)};
Nma=function(a){this.ea=N(a)};
Oma=function(a){this.ea=N(a)};
UA=function(a){this.ea=N(a)};
VA=function(a){this.ea=N(a)};
WA=function(a){this.ea=N(a)};
XA=function(a){this.ea=N(a)};
Pma=function(a){this.ea=N(a)};
Qma=function(a){this.ea=N(a)};
YA=function(a){this.ea=N(a)};
Rma=function(a){this.ea=N(a)};
Sma=function(a){this.ea=N(a)};
Tma=function(a){this.ea=N(a)};
Uma=function(a){this.ea=N(a)};
ZA=function(a){this.ea=N(a)};
Vma=function(a){this.ea=N(a)};
Wma=function(a){this.ea=N(a)};
Xma=function(a){this.ea=N(a)};
Yma=function(a){this.ea=N(a)};
Zma=function(a){this.ea=N(a)};
$ma=function(a){this.ea=N(a)};
ana=function(a){this.ea=N(a)};
bna=function(a){this.ea=N(a)};
cna=function(a){this.ea=N(a)};
dna=function(a){this.ea=N(a)};
$A=function(a){this.ea=N(a)};
ena=function(a){this.ea=N(a)};
aB=function(a){this.ea=N(a)};
bB=function(a){this.ea=N(a)};
fna=function(a){this.ea=N(a)};
gna=function(a){this.ea=N(a)};
cB=function(a){this.ea=N(a)};
hna=function(a){this.ea=N(a)};
ina=function(a){this.ea=N(a)};
jna=function(a){this.ea=N(a)};
kna=function(a){this.ea=N(a)};
lna=function(a){this.ea=N(a)};
mna=function(a){this.ea=N(a)};
nna=function(a){this.ea=N(a)};
ona=function(a){this.ea=N(a)};
dB=function(a){this.ea=N(a)};
pna=function(a){this.ea=N(a)};
qna=function(a){this.ea=N(a)};
rna=function(a){this.ea=N(a)};
eB=function(a){this.ea=N(a)};
sna=function(a){this.ea=N(a)};
tna=function(a){this.ea=N(a)};
fB=function(a){this.ea=N(a)};
gB=function(a){this.ea=N(a)};
una=function(a){this.ea=N(a)};
hB=function(a){this.ea=N(a)};
iB=function(a){this.ea=N(a)};
vna=function(a){this.ea=N(a)};
jB=function(a){this.ea=N(a)};
wna=function(a){this.ea=N(a)};
kB=function(a){this.ea=N(a)};
xna=function(a){this.ea=N(a)};
lB=function(a){this.ea=N(a)};
mB=function(a){this.ea=N(a)};
yna=function(a){this.ea=N(a)};
zna=function(a){this.ea=N(a)};
pB=function(a){this.ea=N(a)};
Ana=function(a){this.ea=N(a)};
Bna=function(a){this.ea=N(a)};
qB=function(a){this.ea=N(a)};
Cna=function(a){this.ea=N(a)};
Dna=function(a){this.ea=N(a)};
Ena=function(a){this.ea=N(a)};
Fna=function(a){this.ea=N(a)};
Gna=function(a){this.ea=N(a)};
Hna=function(a){this.ea=N(a)};
Ina=function(a){this.ea=N(a)};
Jna=function(a){this.ea=N(a)};
Kna=function(a){this.ea=N(a)};
Lna=function(a){this.ea=N(a)};
rB=function(a){this.ea=N(a)};
Mna=function(a){this.ea=N(a)};
Nna=function(a){this.ea=N(a)};
sB=function(a){this.ea=N(a)};
Ona=function(a){this.ea=N(a)};
tB=function(a){this.ea=N(a)};
uB=function(a){this.ea=N(a)};
Pna=function(a){this.ea=N(a)};
Qna=function(a){this.ea=N(a)};
vB=function(a){this.ea=N(a)};
Rna=function(a){this.ea=N(a)};
Sna=
wB=function(a){this.ea=N(a)};
Tna=function(a,b){return Fj(a,VA,1,b)};
xB=function(a){this.ea=N(a)};
Una=
yB=function(a){this.ea=N(a)};
zB=function(a){this.ea=N(a)};
AB=function(a){this.ea=N(a)};
BB=function(a){this.ea=N(a)};
Vna=function(a){this.ea=N(a)};
CB=function(a){this.ea=N(a)};
DB=
EB=
FB=function(a){this.ea=N(a)};
Wna=function(a){this.ea=N(a)};
GB=function(a){this.ea=N(a)};
HB=
Xna=function(a){this.ea=N(a)};
Yna=function(a){this.ea=N(a)};
IB=function(a){this.ea=N(a)};
JB=function(a){this.ea=N(a)};
KB=function(a){this.ea=N(a)};
Zna=function(a){this.ea=N(a)};
LB=function(a){this.ea=N(a)};
$na=function(a){this.ea=N(a)};
aoa=function(a){this.ea=N(a)};
boa=function(a){this.ea=N(a)};
MB=function(a){this.ea=N(a)};
coa=function(a){this.ea=N(a)};
doa=function(a){this.ea=N(a)};
eoa=function(a){this.ea=N(a)};
NB=function(a){this.ea=N(a)};
foa=function(a){this.ea=N(a)};
goa=function(a){this.ea=N(a)};
OB=function(a){this.ea=N(a)};
PB=function(a){this.ea=N(a)};
hoa=function(a){this.ea=N(a)};
QB=function(a){this.ea=N(a)};
ioa=function(a){this.ea=N(a)};
joa=function(a){this.ea=N(a)};
RB=
koa=function(a){this.ea=N(a)};
SB=function(a){this.ea=N(a)};
loa=
moa=
noa=function(a){g.Ua("yt.ads.biscotti.lastId_",a)};
UB=
g.VB=
WB=
g.XB=
g.YB=
poa=
ooa=
qoa=
roa=
g.aC=
g.$B=
bC=
cC=
dC=
eC=
voa=
g.fC=
gC=function(a,b){return woa(a,b||{},!0)};
hC=
woa=
iC=
jC=
xoa=
soa=
kC=
Aoa=
Doa=
g.mC=
lC=
g.nC=function(a,b){"function"===typeof a&&(a=g.aC(a));return window.setTimeout(a,b)};
g.oC=
g.pC=function(a){window.clearTimeout(a)};
g.qC=function(a){window.clearInterval(a)};
Foa=
Hoa=
rC=
g.sC=
Ioa=
Joa=
Loa=
Poa=
Noa=
Ooa=
Qoa=
Koa=
uC=
g.vC=
tC=
Roa=function(a){this.xhr=a};
wC=
xC=function(a){var b=new wC;a=void 0===a?null:a;b.C=2;b.B=void 0===a?null:a;return b};
yC=
g.BC=
g.CC=
g.Soa=
Toa=
g.U=
Uoa=
Voa=
Woa=
Xoa=
Yoa=
EC=
Zoa=
g.FC=
GC=
$oa=function(){return g.DC("(ps3; leanback shell)")||g.DC("ps3")&&g.FC()};
apa=
g.bpa=
HC=function(){var a=/WebKit\/([0-9]+)/.exec(g.oc());return!!(a&&600<=parseInt(a[1],10))};
cpa=
dpa=
KC=
MC=
epa=function(){return g.DC("smart-tv")&&g.DC("samsung")};
g.DC=
fpa=
NC=
OC=
PC=
QC=
hpa=
RC=
jpa=
g.SC=
ipa=
lpa=
TC=
opa=
spa=
qpa=
rpa=
tpa=
upa=
wpa=
vpa=
zpa=
VC=
Apa=
YC=
Bpa=
Cpa=
g.WC=
XC=
ZC=
Epa=
Fpa=
g.aD=
Ipa=
g.bD=
cD=
Jpa=
Kpa=
dD=
eD=
fD=
g.gD=
hD=
Mpa=
g.jD=
g.kD=
Opa=
g.lD=
g.mD=function(){return g.kD("yt-remote-session-screen-id")};
nD=function(){this.U_=!0};
Ppa=function(){nD.instance||(nD.instance=new nD);return nD.instance};
Qpa=
Rpa=
Spa=
Tpa=
g.oD=function(){Upa||(Upa=new Tpa);return Upa};
g.pD=
Wpa=
Xpa=
Ypa=
Vpa=
Zpa=function(){var a=g.Sa.navigator;return a?a.connection:void 0};
aqa=
cqa=
g.rD=
g.tD=
g.sD=
uD=function(){this.j=new WeakMap};
g.wD=
dqa=
xD=function(){uD.apply(this,arguments)};
g.yD=function(){xD.instance||(xD.instance=new xD);return xD.instance};
g.zD=function(){return!!g.Va("yt.scheduler.instance")};
vD=
AD=
BD=
fqa=
iqa=
GD=
HD=
ID=
JD=
g.KD=
mqa=
LD=
oqa=
g.ND=
pqa=
qqa=function(a){return a};
OD=function(a){this.j=a};
g.PD=
sqa=function(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof g.PD?rqa(a,b,f,d,e):d(f)}catch(h){e(h)}};
tqa=
rqa=
uqa=
vqa=
g.QD=
wqa=
xqa=function(a,b){this.request=a;this.cursor=b};
yqa=function(a){return g.QD(a).then(function(b){return b?new xqa(a,b):null})};
g.zqa=function(a){a.cursor.continue(void 0);return yqa(a.request)};
Aqa=
g.SD=
TD=
g.WD=
g.UD=
Dqa=
Eqa=
Bqa=function(a){this.j=a};
g.YD=
Fqa=
g.Hqa=
Gqa=
Jqa=
Iqa=
g.VD=
g.ZD=
g.Kqa=
XD=
Cqa=
Mqa=function(a){this.j=a};
g.aE=
bE=function(a,b){this.request=a;this.cursor=b};
Lqa=
g.$D=
Nqa=
Oqa=function(a,b,c){c=void 0===c?{}:c;return Nqa(a,b,c)};
cE=
dE=
Pqa=
g.eE=
Rqa=
fE=
Sqa=
Tqa=
Vqa=
Xqa=
iE=
g.jE=
Yqa=
Zqa=
$qa=function(a,b,c){c=void 0===c?{}:c;return Zqa(a,b,!1,c)};
ara=
bra=
cra=
dra=
era=
kE=
fra=
g.lE=function(a,b){return fra(a,b)};
mE=function(a){return g.eE(gra(),a)};
hra=
ira=
jra=function(a){var b,c;return g.H(function(d){return 1==d.j?g.z(d,mE(a),2):3!=d.j?(b=d.B,c=void 0,g.z(d,g.UD(b,["coldConfigStore"],{mode:"readwrite",Tb:!0},function(e){return g.aE(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})};
kra=
lra=
mra=
rE=
pra=
sra=
sE=
tra=
vra=
ora=
wra=
xra=
yra=
qra=
rra=
nE=function(a,b){a.B=b;g.Ua("yt.gcf.config.hotConfigGroup",a.B||null)};
nra=function(a,b){a.j=b;g.Ua("yt.gcf.config.coldConfigGroup",a.j||null)};
qE=function(a,b){a.coldHashData=b;g.Ua("yt.gcf.config.coldHashData",a.coldHashData||null)};
ura=
pE=function(){return g.Va("yt.gcf.config.hotConfigGroup")};
oE=function(){return g.Va("yt.gcf.config.coldConfigGroup")};
zra=
g.tE=
g.Gra=
Ara=
Bra=
Cra=
Dra=
Era=
Kra=
Fra=
vE=function(a,b){this.version=a;this.args=b};
wE=function(a,b){this.topic=a;this.j=b};
xE=
Nra=
Pra=
Ora=
Lra=function(){return g.Va("ytPubsub2Pubsub2Instance")};
Qra=
Sra=
AE=
Ura=
Xra=
DE=
Wra=
gsa=
Yra=
fsa=
HE=
hsa=
ksa=
IE=
GE=
isa=
jsa=
lsa=
KE=function(a){return g.eE(lsa(),a)};
nsa=
osa=
psa=
qsa=
rsa=
ssa=
tsa=
msa=
vsa=
wsa=
xsa=
g.LE=
ysa=
zsa=
Csa=
ME=
NE=function(){if(!ME.instance){var a=g.Va("yt.networkRequestMonitor.instance")||new ME;g.Ua("yt.networkRequestMonitor.instance",a);ME.instance=a}return ME.instance};
OE=
Esa=
PE=
Fsa=
g.QE=
Gsa=
RE=
SE=
Jsa=
Isa=
Ksa=
g.TE=
g.UE=
g.ZE=
Msa=
g.$E=
g.aF=
Osa=
g.VE=
Nsa=
g.Ssa=
Rsa=
Vsa=
Tsa=
cF=
Ysa=
$sa=
bF=
Zsa=
dF=function(a){g.I.call(this);this.B=a};
eF=
ata=
bta=
cta=
gF=
g.hF=
g.dta=
eta=
jF=
iF=
kF=
lF=function(a){this.name=a};
mF=function(a){this.key=a};
gta=
hta=
oF=
ita=
pF=function(){jta||(jta=new gta);return jta};
kta=
lta=
mta=
ota=
pta=
nta=
sF=
rta=
qta=
sta=function(a){rF&&a&&lta(a)};
tF=
uta=
uF=
wta=function(){vta||(vta=new uF);return vta};
vF=
yta=
wF=
xta=
xF=
yF=function(){var a=g.Va("yt.logging.ims");a||(a=new vF,g.Ua("yt.logging.ims",a));return a};
Bta=
Hta=
Jta=
Gta=
Fta=
Ita=
BF=
Kta=
Sta=
Ota=
Pta=
Qta=
Ata=
aua=
cua=
$ta=
fua=
Zta=
AF=
eua=
Nta=
Rta=
bua=
Lta=
Dta=
Cta=
Eta=
DF=
Yta=
KF=
pua=
oua=
tua=
g.DD=
wua=
vua=
yua=
MF=
NF=
Aua=function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,AB,72,OF,a);c?MF("visualElementShown",d,c,b):NF("visualElementShown",d,b)};
Bua=function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,zB,73,OF,a);c?MF("visualElementHidden",d,c,b):NF("visualElementHidden",d,b)};
Cua=function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,yB,78,OF,a);c?MF("visualElementGestured",d,c,b):NF("visualElementGestured",d,b)};
Dua=function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,BB,208,OF,a);c?MF("visualElementStateChanged",d,c,b):NF("visualElementStateChanged",d,b)};
Eua=function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,wB,156,OF,a);c?MF("screenCreated",d,c,b):NF("screenCreated",d,b)};
Fua=function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,uB,202,OF,a);c?MF("playbackAssociated",d,c,b):NF("playbackAssociated",d,b)};
Gua=function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,xB,215,OF,a);c?MF("visualElementAttached",d,c,b):NF("visualElementAttached",d,b)};
PF=function(a){this.j=a};
g.QF=
Iua=
Jua=
Kua=
Lua=
Mua=
g.RF=
Nua=
Oua=
g.SF=
Qua=
Rua=
TF=
Tua=
Vua=
Uua=
Wua=
Yua=
Zua=function(){this.hs=[];this.Zq=[]};
cva=
ava=
eva=
dva=
gva=
fva=
UF=
hqa=function(a){g.VF(a)};
g.WF=
g.VF=
ova=
lva=
qva=
gG=
sva=
g.hG=
vva=
wva=
xva=
Dva=
g.kG=
g.Eva=
Hva=
Iva=
Kva=
Jva=
Lva=
mG=
Nva=
lG=
Gva=
Fva=
iG=
g.oG=
g.pG=
g.qG=
g.rG=
tG=
sG=
g.uG=
g.vG=function(a,b,c){for(var d in b)a.subscribe(d,b[d],c)};
wG=
xG=
g.yG=
zG=
Pva=
AG=
g.V=
g.BG=
g.CG=
DG=
EG=
Qva=
Rva=
g.FG=
g.GG=
g.Sva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ec:!0,Y:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
Tva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Y:{d:"m 14.8,21.9 -4.2,-4.2 -1.4,1.4 5.6,5.6 12,-12 -1.4,-1.4 -10.6,10.6 z",fill:"#fff"}}]}};
g.HG=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},V:[{I:"path",Y:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.IG=
Uva=
Vva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Ec:!0,Y:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
Wva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Ec:!0,Y:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.JG=function(){return{I:"svg",Y:{height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",Y:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
Xva=function(){return{I:"svg",Y:{height:"100%",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Y:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]}};
Yva=function(){return{I:"svg",Y:{viewBox:"0 0 24 24"},V:[{I:"path",Y:{d:"M0 0h24v24H0z",fill:"none"}},{I:"path",Y:{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",fill:"#fff"}}]}};
Zva=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ec:!0,S:"ytp-svg-fill",Y:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]}};
$va=
awa=function(){return{I:"svg",Y:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},V:[{I:"path",Y:{d:"M0 0h48v48H0z",fill:"none"}},{I:"path",Y:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]}};
bwa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ec:!0,S:"ytp-svg-fill",Y:{d:"m 17,23 h 2 V 17 H 17 Z M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 Z m 0,18 c -4.41,0 -8,-3.59 -8,-8 0,-4.41 3.59,-8 8,-8 4.41,0 8,3.59 8,8 0,4.41 -3.59,8 -8,8 z M 17,15 h 2 v -2 h -2 z"}}]}};
cwa=
KG=function(){return{I:"svg",Y:{height:"100%",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Y:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
dwa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},V:[{I:"path",Ec:!0,Y:{d:"M5,0 L9,0 L9,14 L5,14 L5,0 Z",fill:"#eaeaea"}}]}};
ewa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ec:!0,S:"ytp-svg-fill",Y:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.fwa=
gwa=
hwa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ec:!0,S:"ytp-svg-fill",Y:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
iwa=
jwa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ec:!0,Y:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}};
kwa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ec:!0,S:"ytp-svg-fill",Y:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
lwa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ec:!0,S:"ytp-svg-fill",Y:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
g.mwa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ec:!0,S:"ytp-svg-fill",Y:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"}}]}};
g.nwa=
g.LG=
owa=function(){return{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},V:[{I:"path",Ec:!0,S:"ytp-svg-fill",Y:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
pwa=
MG=
NG=
qwa=
OG=
rwa=
QG=
twa=
swa=
SG=
TG=
UG=
VG=
uwa=
WG=
vwa=
wwa=
xwa=function(a,b,c){this.actionType=b;this.id=c;this.content=a};
XG=
ywa=
Cwa=
zwa=
Bwa=
Awa=
Dwa=
YG=
Ewa=
Fwa=function(a,b){if(b=b.content&&b.content.adFeedbackRenderer||null)a.B=new ywa(a.api,a.layoutId,a.interactionLoggingClientData,a.gb),g.M(a,a.B),a.B.init(sG("ad-feedback-dialog"),b,a.macros),a.B.Ja(a.Ga),a.B.subscribe("a",function(){return a.oa("c")})};
Gwa=
Hwa=
ZG=
Jwa=
Mwa=
Lwa=
$G=
Nwa=
aH=
bH=
cH=
g.dH=
eH=
fH=
Owa=
Pwa=
Qwa=
gH=
Rwa=
Swa=
hH=
Twa=
iH=
g.jH=function(a,b){this.state=a;this.kA=b};
lH=
g.mH=
nH=
Vwa=
Uwa=
pH=
Wwa=
Xwa=
qH=
rH=
sH=
tH=
g.uH=
g.vH=
wH=
Zwa=
xH=function(a,b){this.B=a;this.j=b};
yH=
zH=
AH=
$wa=
axa=
g.CH=
DH=
bxa=
EH=
g.cxa=
g.dxa=
g.FH=
fxa=function(a){exa=a&&a.data};
hxa=function(a){gxa=a&&a.data};
jxa=
lxa=
nxa=
GH=
oxa=
HH=
pxa=
qxa=
g.IH=
txa=
uxa=
JH=
wxa=
g.KH=
xxa=function(){};
LH=function(){};
MH=function(){};
NH=
zxa=
OH=function(a){a=NH(a);a.metadata||(a.metadata={});return a.metadata};
PH=function(a){a=NH(a);a.tick||(a.tick={});return a.tick};
QH=
Axa=
RH=
yxa=
Bxa=
SH=
Dxa=
Cxa=
TH=
Fxa=
UH=
VH=function(){UH.instance||(UH.instance=new UH);return UH.instance};
XH=
Gxa=
Hxa=
ZH=
$H=
bI=
nI=
mI=
Jxa=
aI=
Mxa=
Nxa=
Qxa=
Rxa=
Sxa=
Uxa=
Pxa=
Vxa=
Wxa=
Xxa=
oI=
Lxa=
Oxa=
pI=
aya=
cya=
sI=
dya=
g.rI=
tI=
eya=
qI=
fya=
uI=
gya=
bya=
vI=
iya=
wI=
g.xI=
nya=
lya=
kya=
jya=
pya=
yI=function(){};
zI=function(){};
AI=function(){};
BI=function(){};
CI=function(){};
DI=function(){};
EI=function(a){this.j=a};
qya=
g.FI=
vya=
GI=function(){};
wya=
xya=
zya=
yya=
Aya=
Bya=
Cya=
Eya=
Dya=
Fya=
Iya=
Jya=
II=
JI=function(){Cya.apply(this,arguments)};
Kya=function(){};
Lya=
Mya=function(a,b){this.dk=a;this.pm=b};
Nya=function(){};
Oya=function(){};
Qya=
Rya=
KI=
Pya=
LI=
Uya=
Wya=
MI=function(a){this.value=a};
NI=function(a){this.value=a};
OI=function(a){this.value=a};
Xya=function(a){this.value=a};
PI=function(a){this.value=a};
QI=function(a){this.value=a};
Yya=function(){MI.apply(this,arguments)};
Zya=function(a){this.value=a};
$ya=function(a){this.value=a};
aza=function(a){this.value=a};
bza=function(a){this.value=a};
cza=function(a){this.value=a};
RI=function(a){this.value=a};
SI=function(a){this.value=a};
TI=function(a){this.value=a};
UI=function(a){this.value=a};
VI=function(a){this.value=a};
WI=
XI=function(a){this.value=a};
YI=function(a){this.value=a};
ZI=function(a){this.value=a};
$I=function(a){this.value=a};
aJ=function(a){this.value=a};
dza=function(a){this.value=a};
bJ=function(a){this.value=a};
eza=function(a){this.value=a};
fza=function(a){this.value=a};
gza=function(a){this.value=a};
hza=function(a){this.value=a};
cJ=function(a){this.value=a};
dJ=function(a){this.value=a};
eJ=function(a){this.value=a};
fJ=function(a){this.value=a};
iza=function(a){this.value=a};
gJ=function(a){this.value=a};
hJ=function(a){this.value=a};
iJ=function(a){this.value=a};
jza=function(a){this.value=a};
jJ=function(a){this.value=a};
kJ=function(a){this.value=a};
lJ=function(a){this.value=a};
mJ=function(a){this.value=a};
nJ=function(a){this.value=a};
oJ=function(a){this.value=a};
pJ=function(a){this.value=a};
qJ=function(a){this.value=a};
rJ=function(a){this.value=a};
kza=function(a){this.value=a};
sJ=function(a){this.value=a};
tJ=function(a){this.value=a};
uJ=function(a){this.value=a};
lza=function(a){this.value=a};
vJ=function(a){this.value=a};
wJ=function(a){this.value=a};
xJ=function(a){this.value=a};
yJ=function(){MI.apply(this,arguments)};
mza=function(a){this.value=a};
zJ=function(){MI.apply(this,arguments)};
AJ=function(){MI.apply(this,arguments)};
nza=function(){MI.apply(this,arguments)};
BJ=function(){MI.apply(this,arguments)};
oza=function(a){this.value=a};
CJ=function(a){this.value=a};
pza=function(a){this.value=a};
EJ=
FJ=function(){return""};
qza=
GJ=function(a,b,c,d){d=void 0===d?!1:d;zb.call(this,a);this.Ek=c;this.Ou=d;this.args=[];b&&this.args.push(b)};
HJ=
IJ=
DJ=function(a,b){return a.j.has(b)};
JJ=
KJ=
LJ=
sza=
uza=
vza=
MJ=
wza=
NJ=
xza=
PJ=
yza=
zza=
Aza=
Dza=
Eza=
Fza=function(a,b,c){UJ(a.hc,"ADS_CLIENT_EVENT_TYPE_LAYOUT_SCHEDULED",b,c);a=g.u(a.Fd);for(var d=a.next();!d.done;d=a.next())d.value.Qh(b,c)};
Gza=
Hza=
Iza=
Bza=
$J=
Lza=
Mza=
Nza=
Oza=
Cza=
Qza=
RJ=
Rza=
Sza=
bK=
Tza=
cK=
TJ=
Uza=
SJ=
Pza=
dK=
Xza=
Wza=function(a){switch(a){case "TRIGGER_CATEGORY_SLOT_ENTRY":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_ENTRY_TRIGGER";case "TRIGGER_CATEGORY_SLOT_EXPIRATION":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_EXPIRATION_TRIGGER";case "TRIGGER_CATEGORY_SLOT_FULFILLMENT":return"ADS_CLIENT_ERROR_MESSAGE_EMPTY_SLOT_FULFILLMENT_TRIGGER";default:return"ADS_CLIENT_ERROR_MESSAGE_INVALID_TRIGGER"}};
VJ=
WJ=
fK=
eK=
Yza=
gK=
Zza=
hK=function(a){return new Zza(a)};
aAa=function(a){g.I.call(this);this.Vg=a;this.j=$za(this)};
$za=
iK=function(a){this.j=a};
jK=
kK=
lK=function(){this.listeners=new Set};
mK=function(){};
cAa=
dAa=
fAa=
gAa=
oK=
pK=
jAa=
qK=function(a){var b=void 0===b?!1:b;return oK(pK(a,kAa,null),a,b,"Trusted Stream URL")};
g.rK=function(a){var b=void 0===b?!1:b;return oK(pK(a,lAa,null),a,b,"Trusted Image URL")};
nAa=function(a){var b=void 0===b?!1:b;return oK(pK(a,mAa,null),a,b,"Trusted Promoted Video Domain URL")};
pAa=
rAa=
sAa=
sK=
g.uK=
uAa=
vAa=
g.wAa=
g.vK=function(a){return"crn_"+a};
g.wK=function(a){return"crx_"+a};
xAa=
yAa=
zAa=
AAa=function(a,b){this.callback=a;this.slot=b};
BAa=function(a,b){return LJ(a,b.Jd,b.slotType)?!0:!1};
CAa=function(){};
xK=function(a,b,c,d,e,f,h){this.Rf=a;this.Cb=b;this.Xb=c;this.Da=d;this.Oa=e;this.Ia=f;this.Oc=h};
yK=function(){};
DAa=function(a,b,c,d,e,f){this.callback=a;this.slot=b;this.layout=c;this.j=d;this.Rb=e;this.bb=f};
FAa=
EAa=
GAa=
g.BK=
HAa=function(a,b,c){this.j=a;this.slot=b;this.layout=c};
IAa=
CK=
EK=
FK=
GK=
HK=
IK=
JAa=
JK=
KK=
DK=
LK=
MK=function(a,b){return a.j.has(b)};
MAa=
NAa=
LAa=
QAa=function(a,b,c,d,e){tG.call(this,"banner-image",a,b,c,d,e)};
RAa=function(a,b,c,d,e,f,h,l,m){CK.call(this,a,b,c,d);this.Oa=e;this.Wc=f;this.K=l;this.Ab=m;this.Kh=!0;this.D=null;this.G=JJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Wc().Fd.add(this);this.adPlacementConfig=JJ(c.Ca,"metadata_type_ad_placement_config");this.ob=new JK(c.Kb,this.Oa,this.adPlacementConfig,c.layoutId)};
SAa=function(){var a=["metadata_type_banner_image_layout_view_model","metadata_type_linked_player_bytes_layout_id"];KK().forEach(function(b){a.push(b)});
return{Jd:a,Qe:["LAYOUT_TYPE_COMPANION_WITH_IMAGE"]}};
TAa=function(a,b,c,d,e){tG.call(this,"action-companion",a,b,c,d,e)};
UAa=function(a,b,c,d,e,f,h,l){CK.call(this,a,b,c,d);this.Oa=e;this.Wc=f;this.K=l;this.Kh=!0;this.D=null;this.G=JJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Wc().Fd.add(this);a=JJ(c.Ca,"metadata_type_ad_placement_config");this.ob=new JK(c.Kb,this.Oa,a,c.layoutId)};
VAa=function(){var a=["metadata_type_action_companion_ad_renderer","metadata_type_linked_player_bytes_layout_id"];KK().forEach(function(b){a.push(b)});
return{Jd:a,Qe:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
WAa=function(a,b,c,d,e){tG.call(this,"image-companion",a,b,c,d,e)};
XAa=function(a,b,c,d,e,f,h,l){CK.call(this,a,b,c,d);this.Oa=e;this.Wc=f;this.K=l;this.Kh=!0;this.D=null;this.G=JJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Wc().Fd.add(this);a=JJ(c.Ca,"metadata_type_ad_placement_config");this.ob=new JK(c.Kb,this.Oa,a,c.layoutId)};
YAa=function(){var a=["metadata_type_image_companion_ad_renderer","metadata_type_linked_player_bytes_layout_id"];KK().forEach(function(b){a.push(b)});
return{Jd:a,Qe:["LAYOUT_TYPE_COMPANION_WITH_IMAGE"]}};
ZAa=function(a,b,c,d,e){tG.call(this,"shopping-companion",a,b,c,d,e)};
$Aa=function(a,b,c,d,e,f,h,l){CK.call(this,a,b,c,d);this.Oa=e;this.Wc=f;this.K=l;this.Kh=!0;this.D=null;this.G=JJ(c.Ca,"metadata_type_linked_player_bytes_layout_id");this.Wc().Fd.add(this);a=JJ(c.Ca,"metadata_type_ad_placement_config");this.ob=new JK(c.Kb,this.Oa,a,c.layoutId)};
aBa=function(){var a=["metadata_type_shopping_companion_carousel_renderer","metadata_type_linked_player_bytes_layout_id"];KK().forEach(function(b){a.push(b)});
return{Jd:a,Qe:["LAYOUT_TYPE_COMPANION_WITH_SHOPPING"]}};
bBa=
cBa=
dBa=
eBa=function(a,b,c,d,e,f){CK.call(this,a,b,c,d);this.Oa=e;this.Wc=f;this.Kh=!0;this.Wc().Fd.add(this);a=JJ(c.Ca,"metadata_type_ad_placement_config");this.ob=new JK(c.Kb,this.Oa,a,c.layoutId)};
fBa=function(){var a=["metadata_type_action_companion_ad_renderer"];KK().forEach(function(b){a.push(b)});
return{Jd:a,Qe:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
gBa=
OK=
hBa=
iBa=function(a,b,c,d,e){tG.call(this,"top-banner-image-text-icon-buttoned",a,b,c,d,e)};
jBa=
kBa=function(){var a=["metadata_type_top_banner_image_text_icon_buttoned_layout_view_model"];KK().forEach(function(b){a.push(b)});
return{Jd:a,Qe:["LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON"]}};
PK=
QK=
lBa=function(){var a=["metadata_type_ad_action_interstitial_renderer"];KK().forEach(function(b){a.push(b)});
return{Jd:a,Qe:["LAYOUT_TYPE_ENDCAP"]}};
RK=
SK=function(a,b,c){this.j=a;this.Rb=b;this.bb=c};
mBa=
nBa=
oBa=function(){var a=["metadata_type_ads_engagement_panel_renderer","metadata_type_linked_player_bytes_layout_id"];KK().forEach(function(b){a.push(b)});
return{Jd:a,Qe:["LAYOUT_TYPE_PANEL_TEXT_ICON_IMAGE_TILES_BUTTON"]}};
pBa=
qBa=
rBa=function(a,b,c,d,e,f){this.pc=a;this.Oa=b;this.Wc=c;this.j=d;this.yb=e;this.Ab=f};
sBa=
TK=function(a,b,c,d){CK.call(this,a,b,c,d)};
tBa=function(a){this.pc=a};
uBa=function(a,b,c,d,e){this.callback=a;this.slot=b;this.layout=c;this.Oa=d;this.j=e;a=JJ(this.layout.Ca,"metadata_type_ad_placement_config");this.ob=new JK(c.Kb,this.Oa,a,c.layoutId)};
vBa=
wBa=
UK=function(a,b,c,d){this.Da=a;this.Oa=b;this.j=c;this.yb=d};
xBa=
yBa=function(a,b,c,d,e,f,h,l){CK.call(this,a,b,c,d);this.Ia=e;this.Oa=f;this.K=h;this.G=l;this.D=!1;this.N=JJ(this.layout.Ca,"metadata_type_linked_player_bytes_layout_id")};
VK=
zBa=
ABa=
BBa=
WK=
CBa=
YK=
EBa=function(a,b,c,d,e,f){this.pc=a;this.Ia=b;this.Oa=c;this.B=d;this.j=e;this.Da=f};
FBa=function(a,b,c,d){this.Ia=a;this.Oa=b;this.Da=c;this.yb=d};
GBa=
ZK=
$K=
aL=
bL=
cL=
g.IBa=
JBa=
dL=
eL=
gL=
LBa=
MBa=
NBa=
g.hL=function(){eD.apply(this,arguments)};
iL=
kL=
OBa=
nL=
oL=
QBa=function(a){return"H"===a.tb||"h"===a.tb};
RBa=function(a){return"9h"===a.tb||"(h"===a.tb};
pL=function(a){return"1"===a.tb||"1h"===a.tb};
SBa=function(a){return"mac3"===a.tb||"meac3"===a.tb||"m"===a.tb};
qL=function(a){return"MAC3"===a.tb||"MEAC3"===a.tb||"M"===a.tb};
g.rL=function(a){return 1===a.containerType};
TBa=
sL=function(a){return"application/x-mpegURL"===a.mimeType};
tL=
uL=
UBa=
VBa=function(a){return/(opus|mp4a|dtse|ac-3|ec-3|iamf)/.test(a)};
WBa=function(a){return/(vp9|vp09|vp8|avc1|av01)/.test(a)};
vL=function(a){return a.includes("vtt")||a.includes("text/mp4")};
PBa=
wL=
xL=
yL=
zL=
AL=
BL=
XBa=function(a,b){if(!a)return NaN;b=AL(a,b);return 0<=b?a.start(b):NaN};
CL=
DL=
EL=
FL=
GL=
HL=
IL=
JL=
KL=
ZBa=
$Ba=
bCa=
cCa=
PL=
ML=
QL=
dCa=
eCa=
fCa=
gCa=
RL=
SL=
hCa=
iCa=
jCa=
NL=
kCa=
lCa=
TL=
mCa=
oCa=
pCa=
g.UL=
VL=
WL=
XL=
YL=
ZL=
g.kH=
g.rCa=
g.$L=
sCa=
g.aM=
bM=
dM=
cM=
uCa=
eM=
vCa=
wCa=function(){for(var a=["METADATA_TYPE_MEDIA_BREAK_LAYOUT_DURATION_MILLISECONDS"],b=g.u(KK()),c=b.next();!c.done;c=b.next())a.push(c.value);return{Jd:a,Qe:["LAYOUT_TYPE_MEDIA_BREAK"]}};
yCa=
xCa=
hM=
zCa=
ACa=
CCa=
BCa=
iM=
DCa=
GCa=
jM=
HCa=
JCa=
ECa=
FCa=
kM=
ICa=
LCa=
MCa=
OCa=
NCa=
mM=
QCa=
RCa=
SCa=
UCa=
TCa=
VCa=
WCa=
YCa=
XCa=
ZCa=
$Ca=
aDa=
bDa=
cDa=
dDa=function(a){MK(a,"impression")&&!MK(a,"seek")&&a.Ah("active_view_fully_viewable_audible_half_duration")};
eDa=function(a){MK(a,"impression")&&!MK(a,"seek")&&a.Ah("active_view_viewable")};
fDa=function(a){MK(a,"impression")&&!MK(a,"seek")&&a.Ah("audio_audible")};
gDa=
hDa=
iDa=function(a,b,c){var d;a.Oa.get().Ai("ads_qua","cpn."+JJ(a.layout.Ca,"metadata_type_content_cpn")+";acpn."+(null==(d=a.Wa.get().gf(2))?void 0:d.clientPlaybackNonce)+";qt."+b+";clr."+c)};
jDa=
kDa=
lDa=
mDa=
nDa=
oDa=
pM=
pDa=
qM=
rM=
rDa=
sDa=
sM=
tDa=
tM=
uDa=
uM=
vDa=
vM=
wDa=
xDa=
yDa=function(a,b,c,d,e,f,h,l,m,n){this.pc=a;this.Ia=b;this.Oa=c;this.D=d;this.yb=e;this.B=f;this.C=h;this.Ab=l;this.Da=m;this.j=n};
zDa=
wM=
ADa=
BDa=function(a,b,c,d,e,f){this.pc=a;this.Ia=b;this.Oa=c;this.B=d;this.Sm=e;this.j=f};
CDa=
xM=function(a,b){this.slotId=b;this.triggerType="TRIGGER_TYPE_AD_BREAK_STARTED";this.triggerId=a(this.triggerType)};
yM=
zM=function(a,b,c){this.Kr=b;this.triggerType="TRIGGER_TYPE_BEFORE_CONTENT_VIDEO_ID_STARTED";this.triggerId=c||a(this.triggerType)};
AM=function(a,b,c){this.j=b;this.triggerType="TRIGGER_TYPE_CLOSE_REQUESTED";this.triggerId=c||a(this.triggerType)};
BM=function(a,b,c,d){this.Kr=b;this.visible=c;this.triggerType="TRIGGER_TYPE_CONTENT_VIDEO_ID_ENDED";this.triggerId=d||a(this.triggerType)};
DDa=function(a){this.triggerType="TRIGGER_TYPE_DURATION_AFTER_MEDIA_PAUSED";this.triggerId=a(this.triggerType)};
CM=function(a,b,c){this.triggeringLayoutId=b;this.slotId=c;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_ACTIVE_AND_SLOT_ID_HAS_EXITED";this.triggerId=a(this.triggerType)};
DM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_ENTERED";this.triggerId=c||a(this.triggerType)};
EM=
EDa=
FM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_LAYOUT_ID_EXITED";this.triggerId=c||a(this.triggerType)};
FDa=function(a){this.triggerType="TRIGGER_TYPE_LIVE_STREAM_BREAK_ENDED";this.triggerId=a(this.triggerType)};
GDa=function(a){this.triggerType="TRIGGER_TYPE_LIVE_STREAM_BREAK_STARTED";this.triggerId=a(this.triggerType)};
HDa=function(a){this.triggerId=a;this.triggerType="TRIGGER_TYPE_MEDIA_RESUMED"};
GM=
HM=
IDa=function(a,b,c){this.Kr=b;this.j=c;this.triggerType="TRIGGER_TYPE_NOT_IN_MEDIA_TIME_RANGE";this.triggerId=a(this.triggerType)};
IM=
JDa=
JM=function(a,b,c){this.layoutId=b;this.triggerType="TRIGGER_TYPE_ON_LAYOUT_SELF_EXIT_REQUESTED";this.triggerId=c||a(this.triggerType)};
KM=function(a,b,c){this.j=b;this.triggerType="TRIGGER_TYPE_ON_NEW_PLAYBACK_AFTER_CONTENT_VIDEO_ID";this.triggerId=c||a(this.triggerType)};
eAa=function(a,b){this.opportunityType="OPPORTUNITY_TYPE_AD_BREAK_SERVICE_RESPONSE_RECEIVED";this.associatedSlotId=b;this.triggerType="TRIGGER_TYPE_ON_OPPORTUNITY_TYPE_RECEIVED";this.triggerId=a(this.triggerType)};
KDa=
LDa=function(a,b,c){this.layoutId=b;this.offsetMs=c;this.triggerType="TRIGGER_TYPE_PROGRESS_PAST_MEDIA_TIME_WITH_OFFSET_RELATIVE_TO_LAYOUT_ENTER";this.triggerId=a(this.triggerType)};
LM=function(a,b){this.layoutId=b;this.triggerType="TRIGGER_TYPE_SEEK_BACKWARD_BEFORE_LAYOUT_ENTER_TIME";this.triggerId=a(this.triggerType)};
MDa=
MM=function(a,b,c){this.triggeringLayoutId=b;this.triggerType="TRIGGER_TYPE_SKIP_REQUESTED";this.triggerId=c||a(this.triggerType)};
NM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_ENTERED";this.triggerId=c||a(this.triggerType)};
OM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_EXITED";this.triggerId=c||a(this.triggerType)};
PM=function(a,b){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_FULFILLED_EMPTY";this.triggerId=a(this.triggerType)};
QM=function(a,b){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_FULFILLED_NON_EMPTY";this.triggerId=a(this.triggerType)};
RM=function(a,b,c){this.triggeringSlotId=b;this.triggerType="TRIGGER_TYPE_SLOT_ID_SCHEDULED";this.triggerId=c||a(this.triggerType)};
SM=
TM=
NDa=
UM=
VM=
ODa=
PDa=
QDa=
RDa=
WM=
aN=
TDa=
YDa=
aEa=
ZDa=
cEa=
dEa=
bEa=
fEa=
gEa=
hEa=
jN=
kEa=
mEa=
pEa=
qEa=
rEa=
lN=
tEa=function(a,b,c,d,e,f,h,l){return null===b?new HJ("Invalid slot type when get discovery companion fromActionCompanionAdRenderer",{slotType:b,ActionCompanionAdRenderer:d}):[sEa(a,b,h,f,function(m){var n=m.slotId;m=l(m);var p=d.adLayoutLoggingData,q=new IJ([new NI(d),new RI(e)]);n=nK(c.bb.get(),"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",n);var r={layoutId:n,layoutType:"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",Ya:"core"};return{layoutId:n,layoutType:"LAYOUT_TYPE_COMPANION_WITH_ACTION_BUTTON",Kb:new Map,
layoutExitNormalTriggers:[new KM(c.j,h)],layoutExitSkipTriggers:[],layoutExitMuteTriggers:[],layoutExitUserInputSubmittedTriggers:[],Vc:[],Ya:"core",Ca:q,jc:m(r),adLayoutLoggingData:p}})]};
uEa=
yEa=
mN=
zEa=
vEa=
AEa=
nN=
BEa=
EEa=
DEa=
IEa=
FEa=
oN=
pN=
OEa=
REa=
QEa=
VEa=
TEa=
XEa=
UEa=
ZEa=
YEa=
PEa=
$Ea=
aFa=
rN=
SEa=
bFa=
sN=
cFa=
dFa=
gFa=
jFa=
hFa=
mFa=
uFa=
tFa=
nFa=
vFa=
pFa=
qFa=
oFa=
zFa=
BFa=
DFa=
HFa=
KFa=
LFa=
NFa=
PFa=
RFa=
QFa=
ZFa=
TFa=
SFa=
$Fa=
cGa=
dGa=
eGa=
fGa=
FN=
lEa=
iGa=
gGa=
HN=
kGa=
lGa=
KN=
oGa=function(a,b){return nGa(a,b)};
pGa=
nGa=
LN=
qGa=
MN=
NN=function(a){g.I.call(this);this.j=a};
zK=
ON=
jEa=
PN=
rGa=
OAa=
sGa=function(a,b){this.callback=a;this.slot=b};
QN=function(){};
tGa=function(a,b,c){this.callback=a;this.slot=b;this.Ia=c};
uGa=
vGa=function(a,b,c){this.callback=a;this.slot=b;this.Ia=c};
RN=function(a){this.Ia=a};
SN=function(a){g.I.call(this);this.JL=a;this.Vb=new Map};
wGa=
TN=
UN=
VN=function(a){g.I.call(this);this.j=a;this.Vb=new Map};
WN=
XN=
xGa=
yGa=
YN=
zGa=
AGa=
ZN=
BGa=
$N=function(a){g.I.call(this);this.j=a;this.Kh=!0;this.Vb=new Map};
lM=
aO=
bO=
CGa=
cO=
DGa=
EGa=
nEa=
mGa=
FGa=
dO=
AK=function(a,b){if(g.VB("GENERATE_DETERMINSTIC_ADS_CONTROL_FLOW_IDS")){var c=a.B.get(b)||0;c++;a.B.set(b,c);return b+"_"+c}return g.hF(16)};
nK=
tN=
GGa=
HGa=
eO=
NEa=
qN=
IGa=
GN=
jGa=
GFa=
FFa=
fFa=
uN=
IFa=
MFa=
OFa=
JEa=
aGa=
JGa=
wFa=
rFa=function(a){return null!=a};
fO=
oEa=
LGa=
KGa=
eFa=
JFa=
MGa=
bGa=
vN=function(a){return"AD_PLACEMENT_KIND_START"===a.kind};
KEa=
MEa=
CEa=
EFa=
CFa=
lFa=
iFa=
xEa=
wEa=
sEa=
yFa=
sFa=
UFa=
GEa=
HEa=
XFa=
YFa=
VFa=
WFa=
AFa=
PGa=
NGa=
gO=
OGa=
hO=
aK=
UJ=
Jza=
QJ=
iO=
jO=function(){this.j=new Map};
kO=
qO=
RGa=
sO=
TGa=
UGa=function(){};
VGa=
WGa=
YGa=
XGa=
ZGa=function(){};
$Ga=
vO=
g.wO=function(a){this.D=a};
g.xO=
yO=
aHa=
bHa=
dHa=
cHa=
eHa=function(a){this.j=a};
fHa=
gHa=function(a){this.B=a};
hHa=
iHa=
jHa=
AO=
g.lHa=
BO=
mHa=
CO=
DO=
nHa=
oHa=
pHa=
qHa=
EO=
rHa=
FO=
sHa=
tHa=
GO=
IO=
g.KO=
MO=
uHa=
NO=
OO=
PO=
QO=
RO=
SO=
TO=
UO=
VO=
WO=
XO=
vHa=
wHa=
YO=
ZO=
$O=
aP=
bP=
cP=
xHa=
yHa=
dP=
g.eP=
g.fP=
g.gP=
hP=
BHa=
CHa=
iP=
EHa=
DHa=
FHa=
GHa=
kP=
lP=
mP=
Y=
IHa=
nP=
NHa=function(a){var b=new hx,c=0;try{var d=a.views;void 0!==d&&(R(b,1,qP[d]),c++);var e=a.driver;void 0!==e&&(R(b,2,yIa[e]),c++);var f=a.ctr;void 0!==f&&(R(b,3,qP[f]),c++);var h=a.avd;void 0!==h&&(R(b,4,qP[h]),c++);var l=a.impressions;void 0!==l&&(R(b,5,qP[l]),c++);var m=a.videoLength;void 0!==m&&(R(b,6,qP[m]),c++);return[c===Object.keys(a).length,b]}catch(n){return Y(n),[!1,void 0]}};
RHa=
SHa=
THa=
bIa=function(a){var b=new lx,c=0;try{var d=a.metric;void 0!==d&&(R(b,1,rP[d]),c++);var e=a.comparisonMetric;void 0!==e&&(R(b,2,rP[e]),c++);var f=a.includeCumulative;void 0!==f&&(Rj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return Y(h),[!1,void 0]}};
eIa=function(a){var b=new Fy,c=0;try{var d=a.attributionTag;void 0!==d&&(O(b,2,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
jIa=
kIa=
IIa=function(a){var b=new ay,c=0;try{var d=a.id;void 0!==d&&(O(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
JIa=function(a){var b=new cy,c=0;try{var d=a.type;void 0!==d&&(R(b,1,LIa[d]),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
KIa=function(a){var b=new by,c=0;try{var d=a.type;void 0!==d&&(R(b,1,MIa[d]),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
lIa=
mIa=
sIa=
PIa=
wIa=
xIa=
UIa=
SIa=
WIa=function(a){var b=new oma,c=0;try{var d=a.effectBaseName;void 0!==d&&(O(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
XIa=function(a){var b=new iA,c=0;try{var d=a.resolutionWidth;void 0!==d&&(Sj(b,1,d),c++);var e=a.resolutionHeight;void 0!==e&&(Sj(b,2,e),c++);var f=a.frameRate;void 0!==f&&(rk(b,3,f),c++);var h=a.durationMs;void 0!==h&&(qk(b,4,h),c++);return[c===Object.keys(a).length,b]}catch(l){return Y(l),[!1,void 0]}};
TIa=
YIa=function(a){var b=new lma,c=0;try{var d=a.previewWidth;void 0!==d&&(Sj(b,1,d),c++);var e=a.previewHeight;void 0!==e&&(Sj(b,2,e),c++);var f=a.fps;void 0!==f&&(Sj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return Y(h),[!1,void 0]}};
$Ja=
eJa=function(a){var b=new Qy,c=0;try{var d=a.datapushBuild;if(d){var e=aKa(d);e[0]&&(Fj(b,Oy,1,e[1]),c++)}return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
aKa=
fJa=
gJa=function(a){var b=new tma,c=0;try{var d=a.assetLoggingId;void 0!==d&&(O(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
wP=
cKa=
eKa=
gKa=function(a){var b=new ema,c=0;try{var d=a.instructionOffset;void 0!==d&&(Uj(b,1,d),c++);var e=a.moduleIndex;void 0!==e&&(Sj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
fKa=
dKa=function(a){var b=new Vz,c=0;try{var d=a.moduleUuid;void 0!==d&&(tk(b,1,d),c++);var e=a.moduleName;void 0!==e&&(O(b,2,e),c++);var f=a.loadAddress;void 0!==f&&(Uj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return Y(h),[!1,void 0]}};
lJa=function(a){var b=new eA,c=0;try{var d=a.key;void 0!==d&&(O(b,1,d),c++);var e=a.value;void 0!==e&&(O(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
CJa=function(a){var b=new tA,c=0;try{var d=a.serializedThrowable;void 0!==d&&(tk(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
DJa=
kKa=
mKa=function(a){var b=new vA,c=0;try{var d=a.functionName;void 0!==d&&(O(b,1,d),c++);var e=a.source;void 0!==e&&(O(b,2,e),c++);var f=a.lineNumber;void 0!==f&&(Sj(b,3,f),c++);return[c===Object.keys(a).length,b]}catch(h){return Y(h),[!1,void 0]}};
FJa=
GJa=
IJa=function(a){var b=new HA,c=0;try{var d=a.className;void 0!==d&&(O(b,1,d),c++);var e=a.instanceNum;void 0!==e&&(Uj(b,2,e),c++);var f=a.instanceSizeBytes;void 0!==f&&(Uj(b,3,f),c++);var h=a.allocationNum;void 0!==h&&(Uj(b,4,h),c++);var l=a.deallocationNum;void 0!==l&&(Uj(b,5,l),c++);return[c===Object.keys(a).length,b]}catch(m){return Y(m),[!1,void 0]}};
JJa=
KJa=
tKa=
MJa=function(a){var b=new zma,c=0;try{var d=a.threadPoolName;void 0!==d&&(O(b,1,d),c++);var e=a.threadCount;void 0!==e&&(Sj(b,2,e),c++);var f=a.startedTaskCount;void 0!==f&&(Sj(b,3,f),c++);var h=a.finishedTaskCount;void 0!==h&&(Sj(b,4,h),c++);var l=a.runningTimeMs;void 0!==l&&(Uj(b,5,l),c++);var m=a.waitingTimeMs;void 0!==m&&(Uj(b,6,m),c++);var n=a.runCount;void 0!==n&&(Uj(b,7,n),c++);var p=a.runningPercent;void 0!==p&&(Sj(b,8,p),c++);return[c===Object.keys(a).length,b]}catch(q){return Y(q),[!1,void 0]}};
PJa=
WJa=function(a){var b=new gna,c=0;try{var d=a.itag;void 0!==d&&(Sj(b,1,d),c++);var e=a.startingByte;void 0!==e&&(Uj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
CKa=
xKa=function(a){var b=new eoa,c=0;try{var d=a.format;void 0!==d&&(Sj(b,1,d),c++);var e=a.isDownloaded;void 0!==e&&(Rj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
yKa=
EKa=
HKa=
GKa=function(a){var b=new Yna,c=0;try{var d=a.itag;void 0!==d&&(Sj(b,1,d),c++);var e=a.startingByte;void 0!==e&&(Uj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
IKa=
JKa=function(a){var b=new Zna,c=0;try{var d=a.externalVideoId;void 0!==d&&(O(b,1,d),c++);var e=a.videoSid;void 0!==e&&(Uj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
RKa=
KKa=
zP=
OKa=
XKa=
YKa=function(a){var b=new Mz,c=0;try{var d=a.startMs;void 0!==d&&(rk(b,1,d),c++);var e=a.endMs;void 0!==e&&(rk(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}};
ZKa=
$Ka=function(a){var b=new aB,c=0;try{var d=a.orchestrationActionId;void 0!==d&&(O(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
aLa=function(a){var b=new iB,c=0;try{var d=a.answerId;void 0!==d&&(Sj(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}};
dLa=
iLa=
MLa=
LLa=
DP=
EP=function(){DP.instance||(DP.instance=new DP);return DP.instance};
FP=function(){};
GP=
HP=function(){GP.instance||(GP.instance=new GP);return GP.instance};
IP=
TLa=
KP=
JP=
VLa=
RLa=
SLa=
WLa=
ULa=
LP=function(){};
XLa=
gqa=
ZLa=
YLa=
aMa=
cMa=
eMa=
fMa=
gMa=
dMa=
hMa=
g.iMa=
g.NP=
g.jMa=
g.kMa=
mMa=
g.nMa=
lMa=
OP=
oMa=
pMa=
qMa=
rMa=
QP=
PP=
sMa=
tMa=
uMa=
g.vMa=
wMa=
g.RP=
SP=
xMa=
g.TP=
UP=
WP=
yMa=
XP=
YP=
zMa=
DMa=
FMa=
EMa=
HMa=
OMa=
PMa=
$P=
GMa=
CMa=
BMa=
AMa=
dQ=
aQ=
cQ=
g.gQ=
iQ=
jQ=
SMa=
TMa=
kQ=
hQ=
XMa=
UMa=
VMa=
YMa=
lQ=
mQ=
g.nQ=
$Ma=
aNa=
oQ=function(a){var b=a.data.getUint8(a.offset+a.j);a.j+=1;return b};
pQ=function(a){var b=a.data.getUint16(a.offset+a.j);a.j+=2;return b};
qQ=function(a){var b=a.data.getInt32(a.offset+a.j);a.j+=4;return b};
rQ=
sQ=
bNa=
cNa=
dNa=
tQ=
uQ=function(a,b,c,d,e,f){this.startSecs=a;this.di=b;this.context=c;this.identifier=d;this.event=e;this.j=f};
xQ=
fNa=
gNa=
vQ=function(a,b){return Number(a.data[b])||0};
hNa=
g.iNa=
g.jNa=
kNa=function(a,b){this.j=a;this.duration=b};
lNa=
yQ=
mNa=
BQ=
nNa=
CQ=
g.zQ=
g.oNa=
EQ=
g.AQ=
pNa=
DQ=
FQ=
qNa=
g.rNa=
sNa=
g.GQ=
tNa=
uNa=
HQ=
IQ=
NQ=
xNa=
KQ=
OQ=
QQ=
yNa=
RQ=
MQ=
PQ=
zNa=
SQ=
ANa=
TQ=
BNa=
JQ=
LQ=
vNa=
wNa=
UQ=function(a){this.base=a;this.j={};this.url=""};
CNa=
DNa=
ENa=
VQ=
WQ=
XQ=
FNa=
YQ=
ZQ=
GNa=
$Q=
HNa=
aR=function(a){return 1===a.type||2===a.type};
bR=function(a){return 3===a.type||7===a.type};
cR=
INa=
JNa=
KNa=
LNa=
MNa=
dR=
NNa=
ONa=
PNa=
QNa=
RNa=
SNa=
eR=
fR=
TNa=
gR=
g.VNa=
XNa=
YNa=
ZNa=
$Na=
aOa=
iR=
jR=
hR=
UNa=
bOa=
cOa=
dOa=
eOa=
kR=
lR=
fOa=
mR=
nR=
gOa=
hOa=
oR=
iOa=function(a){var b=a.C;a.C=[];return b};
jOa=
nOa=
oOa=
kOa=
lOa=function(a,b){a.B[b]||(a.B[b]=new oR);return a.B[b]};
mOa=
pOa=
pR=
qR=
rR=
qOa=
rOa=
sR=
tR=function(a){return qHa(a.j)};
sOa=
uR=
tOa=
vOa=
uOa=
vR=
wOa=
xOa=
yOa=
zOa=
AOa=
BOa=
g.COa=
DOa=
EOa=
wR=
FOa=
HOa=
g.xR=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
JOa=
g.KOa=
IOa=
zR=
NOa=
MMa=
bQ=
OOa=function(a){return g.dd(a.j,function(b){return vL(b.info.mimeType)})};
POa=function(a){return g.dd(a.j,function(b){return b.info.video?"EQUIRECTANGULAR"===b.info.video.projectionType:!1})};
QOa=function(a){return g.dd(a.j,function(b){return b.info.video?"EQUIRECTANGULAR_THREED_TOP_BOTTOM"===b.info.video.projectionType:!1})};
ROa=function(a){return g.dd(a.j,function(b){return b.info.video?"MESH"===b.info.video.projectionType:!1})};
SOa=
TOa=
ZP=
yR=
UOa=
AR=
ZOa=
$Oa=function(a){return Js(a,function(b){return"FORMAT_STREAM_TYPE_OTF"===b.stream_type})?"FORMAT_STREAM_TYPE_OTF":"FORMAT_STREAM_TYPE_UNKNOWN"};
aPa=
bPa=
BR=
fPa=
cPa=
dPa=function(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return"SPATIAL_AUDIO_TYPE_AMBISONICS_5_1";case "spatial_audio_type_ambisonics_quad":return"SPATIAL_AUDIO_TYPE_AMBISONICS_QUAD";case "spatial_audio_type_foa_with_non_diegetic":return"SPATIAL_AUDIO_TYPE_FOA_WITH_NON_DIEGETIC";default:return"SPATIAL_AUDIO_TYPE_NONE"}};
hPa=
iPa=
jPa=
kPa=
gPa=
lPa=
CR=function(a){return a.Lb?a.Lb-(a.K||a.timestampOffset):0};
DR=
ER=
mPa=
nPa=
FR=
oPa=
pPa=
qPa=
GR=
XOa=
sPa=
NMa=
IMa=
uPa=
IR=
KR=
LR=function(a){return"com.microsoft.playready"===a.keySystem};
MR=
NR=function(a){return"com.youtube.fairplay"===a.keySystem};
OR=function(a){return"com.youtube.fairplay.sbdl"===a.keySystem};
g.PR=function(a){return"fairplay"===a.flavor};
JR=
vPa=
xPa=
RR=
APa=
yPa=
CPa=
DPa=
BPa=
zPa=
EPa=
FPa=
GPa=
g.OJ=
WR=
HPa=
IPa=
KPa=function(a){return JPa.then(a)};
LPa=
RMa=
YR=
MPa=
g.NPa=
PPa=
eQ=
QPa=
RPa=
SPa=
JMa=
LMa=
ZR=
$R=function(){g.wO.apply(this,arguments)};
aS=
bS=
UPa=
VPa=
cS=
WPa=
dS=
eS=
XPa=
fS=
YPa=
gS=
ZPa=
hS=
iS=
jS=
kS=
aQa=
bQa=
lS=
cQa=
dQa=
$Pa=
mS=
eQa=
gQa=
iQa=
hQa=
fQa=
wQa=
g.yS=
tQa=
zQa=
g.BS=
CS=
DS=
g.uS=
g.UR=function(a){return a.j.c};
g.ZJ=function(a){return/^TVHTML5/.test(g.UR(a))};
jQa=function(a){return"TVHTML5_SIMPLY_EMBEDDED_PLAYER"===g.UR(a)};
uQa=
g.ES=
YJ=
g.FS=
AS=function(a){return"WEB_KIDS"===g.UR(a)};
g.wS=function(a){return"WEB_UNPLUGGED"===g.UR(a)};
GS=function(a){return"TVHTML5_UNPLUGGED"===g.UR(a)};
g.XJ=
g.BH=function(a){return"WEB_REMIX"===g.UR(a)};
g.HS=
g.JS=
AQa=
KS=
CQa=
sS=function(a){return"detailpage"===a.Ka};
g.vS=function(a){return"embedded"===a.Ka};
LS=function(a){return"leanback"===a.Ka};
rS=function(a){return"adunit"===a.Ka||"gvn"===a.playerStyle};
g.xS=function(a){return"profilepage"===a.Ka};
g.qS=
DQa=
g.MS=
g.NS=
sQa=
OS=function(a){this.j=a};
PS=
GQa=
HQa=
IQa=
JQa=
KQa=
LQa=
MQa=
QS=
NQa=
SQa=
RQa=
OQa=
QQa=
PQa=
RS=function(a,b){this.j=a;this.B=b};
TQa=
SS=function(a,b){this.j=a;this.B=b};
UQa=
VQa=
XQa=
YQa=
ZQa=
g.TS=
g.VS=
g.WS=
g.$Qa=
g.US=
dRa=
XS=
YS=
gRa=
ZS=
$S=
hRa=
kRa=
lRa=
mRa=
nRa=
aT=
g.oRa=
g.bT=
g.cT=
pRa=
g.sRa=
tRa=
uRa=
g.eT=
g.vRa=
g.fT=
g.gT=
g.hT=
BRa=
g.CRa=
FRa=
g.ARa=
yRa=
zRa=
HRa=
jT=
IRa=
KRa=
JRa=
LRa=
g.nT=
lT=
g.mT=
oT=
MRa=
kT=
NRa=
pT=
ORa=
g.rT=
g.uT=
SRa=
PRa=
VRa=
RRa=
kSa=
tSa=
IT=
uSa=
wSa=
hSa=
wT=
vSa=
g.dSa=
BT=
JT=
fSa=
ySa=
xSa=
KT=
tT=
iSa=
DSa=
zSa=
ASa=
BSa=
CSa=
ESa=
MT=
FSa=
g.NT=
HSa=
ISa=
OT=
g.PT=
JSa=
g.QT=
sT=
yT=
GSa=
lSa=
QRa=
pSa=
g.TT=
UT=
zT=
g.VT=function(a){return!!a.j&&POa(a.j)};
g.WT=function(a){return!!a.j&&QOa(a.j)};
g.XT=function(a){return!!a.j&&ROa(a.j)};
g.LT=function(a){return!!a.j&&SOa(a.j)};
g.TSa=
g.USa=
g.ZT=function(a){return a.L("enable_wn_infocards")};
g.$T=
g.VSa=
aU=
g.bU=
cU=
GT=
dU=
eU=
WSa=
g.fU=
XSa=
HT=
gU=
YSa=
hU=
ZSa=function(a){return a.enablePreroll&&a.enableServerStitchedDai};
AT=
iU=
g.jU=
gSa=
g.kU=
$Sa=
OSa=
xT=
ZRa=function(a){return a.L("html5_heartbeat_iff_heartbeat_params_filled")};
aTa=
XRa=
WRa=
TRa=
g.bTa=
lU=
g.DT=
g.mU=
g.nU=
g.cTa=
jTa=
lTa=
mTa=
oU=
qU=function(a,b,c){a.state.W[b]=function(){return c.apply(a,g.Ia.apply(0,arguments))};
a.state.j.hasOwnProperty(b)||pU(a,b,c);a.state.Z.add(b)};
rU=
pU=
g.sU=
nTa=
tU=
oTa=
pTa=
uU=
rTa=
vU=
tTa=
uTa=
sTa=
vTa=
yTa=
g.yU=
ATa=
CTa=
g.zU=
DTa=
FTa=
ETa=
BU=
g.CU=
GTa=
g.DU=
g.EU=
g.FU=
g.HU=
g.HTa=
g.JU=
g.ITa=
g.KU=
g.LU=
JTa=
KTa=
MU=
MTa=
NU=
NTa=
QTa=
RTa=function(a){return{n5:VO(a,2),videoId:TO(a,3),qS:QO(a,4)}};
TTa=
STa=function(a){return{conditions:VO(a,1),Kmb:QO(a,2)}};
UTa=function(a){return{DI:VO(a,1)}};
PTa=function(a,b){var c;if(b.YK)for(c=0;c<b.YK.length;c++)dP(a,1,b.YK[c],VTa,1);if(b.JG)for(c=0;c<b.JG.length;c++)dP(a,2,b.JG[c],WTa,1);$O(a,5,b.M7)};
WTa=
VTa=function(a,b){$O(a,1,b.M0);$O(a,3,b.maxHeight);$O(a,4,b.maxWidth);$O(a,11,b.maxFramerate);$O(a,12,b.mw);aP(a,15,b.Y7)};
ZTa=
XTa=function(a){return{iv:SO(a,5),b8:RO(a,7)}};
YTa=function(a){return{videoId:TO(a,2)}};
bUa=
cUa=function(a,b){$O(a,1,b.type);bP(a,2,b.value)};
dUa=
eUa=function(a){return{mK:QO(a,1),nK:QO(a,2),seekSource:QO(a,3)}};
aUa=
gUa=function(a,b){$O(a,1,b.yh);$O(a,2,b.PC);$O(a,3,b.Hr)};
hUa=function(a){return{yh:QO(a,1),PC:QO(a,2),Hr:QO(a,3)}};
fUa=
$Ta=
iUa=function(a,b){cP(a,1,b.name);cP(a,2,b.value)};
jUa=function(a){return{minBandwidthBytesPerSec:QO(a,1),minReadaheadMs:QO(a,2)}};
kUa=
lUa=function(a){return{xZ:QO(a,1),xX:QO(a,2),body:SO(a,4)}};
mUa=
nUa=function(a){return{first:QO(a,1),UX:QO(a,2)}};
pUa=
qUa=
oUa=
OU=
rUa=function(a){return{itag:QO(a,1),lmt:QO(a,2),xtags:TO(a,3)}};
sUa=
uUa=
tUa=
vUa=function(a){return{token:TO(a,1),videoId:TO(a,2)}};
xUa=
wUa=
yUa=
zUa=
AUa=
BUa=
g.PU=function(a){this.tag=a};
DUa=function(a,b){CUa.apply(null,[6,a,b].concat(g.oa(g.Ia.apply(2,arguments))))};
EUa=
CUa=
QU=
GUa=
g.RU=
HUa=
SU=
IUa=
g.UU=
g.VU=
WU=function(a,b){a.updateValue("icon",b)};
g.TU=function(a,b){a.updateValue("label",b)};
XU=
YU=
ZU=function(a){g.I.call(this);this.api=a};
$U=
JUa=
aV=
KUa=
OUa=
bV=
cV=
PUa=
QUa=
SUa=
RUa=
TUa=
UUa=
VUa=
dV=
eV=
WUa=
g.fV=
g.gV=
YUa=
ZUa=
$Ua=
g.hV=
iV=
fVa=
eVa=
jV=
hVa=
kV=
lV=
iVa=
mV=
jVa=function(a,b){var c;return null==(c=b.onEnter)?void 0:c.some(a.B)};
kVa=
lVa=
mVa=
nVa=
nV=
pVa=
oVa=
qVa=
rVa=
oV=
pV=
sVa=
uVa=
vVa=
wVa=
qV=
xVa=
rV=
yVa=
BVa=
sV=function(a,b){navigator.mediaSession.setActionHandler(a,b)};
zVa=
EVa=
CVa=
DVa=
AVa=
tV=
IVa=
GVa=
HVa=
JVa=
uV=
KVa=
LVa=
MVa=
vV=
NVa=
OVa=
PVa=
g.xV=
yV=
wV=
QVa=
zV=
RVa=
BV=
CV=
TVa=
AV=
VVa=
DV=
g.EV=
FV=
WVa=
GV=
HV=
IV=
XVa=
$Va=
ZVa=
KV=
LV=
MV=
cWa=
aWa=
bWa=
NV=
dWa=
hWa=
fWa=
eWa=
gWa=
OV=
jWa=
kWa=
PV=
lWa=
mWa=
g.nWa=
QV=
rWa=
pWa=
qWa=
RV=
sWa=
oWa=
tWa=
SV=
TV=
uWa=
vWa=
wWa=
UV=
xWa=
yWa=
zWa=
AWa=
BWa=
g.VV=
CWa=
DWa=
GWa=
EWa=
g.XV=
g.YV=
HWa=function(){this.B=[];this.j=[]};
g.ZV=
g.$V=
IWa=
g.aW=
g.bW=
JWa=
KWa=
g.LWa=function(a){this.Fa=a;this.N=new JWa;this.Po=this.Oo=!1;this.Pm=2;this.ma=20971520;this.Ra=8388608;this.W=120;this.kd=62914560;this.Io=g.OJ(this.Fa.experiments,"html5_min_readbehind_secs");this.bF=g.OJ(this.Fa.experiments,"html5_min_readbehind_cap_secs");this.Ym=this.Fa.L("html5_offline_reset_media_stream_on_unresumable_slices");this.Ob=NaN;this.jp=this.fl=this.Cu=2;this.uj=1024*cW(this,"html5_request_size_min_kb",64);this.Ga=2097152;this.Ax=cW(this,"html5_bypass_contention_secs");this.Uo=1048576;
this.Hm=!1;this.tj=cW(this,"html5_repredict_interval_ms",1800);this.Zz=cW(this,"html5_head_miss_secs",5);this.gG=cW(this,"html5_min_upgrade_health_secs",10);this.fb=15;this.Nf=1;this.K=1.15;this.Z=1.05;this.wl=1;this.VF=cW(this,"html5_min_seconds_between_format_selections",8);this.Kz=cW(this,"html5_max_buffer_health_for_downgrade_secs",15);this.Km=cW(this,"html5_max_buffer_health_for_downgrade_prop",.5);this.wu=VR;this.Qi=this.ac=!1;this.Ri=6;this.B=!1;this.Rd=g.OJ(this.Fa.experiments,"html5_min_startup_buffered_media_duration_secs");
this.Qo=g.OJ(this.Fa.experiments,"html5_post_interrupt_readahead");this.Tx=this.Fa.L("html5_disable_classic_alr");this.Ro=g.OJ(this.Fa.experiments,"html5_probe_primary_delay_base_ms")||5E3;this.qx=100;this.Lg=10;this.iG=6;this.Nw=cW(this,"html5_ssdai_failure_retry_limit",3);this.Gm=this.Fa.experiments.kb("html5_clone_original_for_fallback_location");this.qj=cW(this,"html5_min_failures_to_delay_retry",1);this.yx=this.Fa.L("html5_apply_min_failures");this.Qf=!1;this.ub=g.OJ(this.Fa.experiments,"html5_subsegment_readahead_target_buffer_health_secs");
this.zj=g.OJ(this.Fa.experiments,"html5_subsegment_readahead_timeout_secs");this.kC=g.OJ(this.Fa.experiments,"html5_subsegment_readahead_min_buffer_health_secs");this.yj=g.OJ(this.Fa.experiments,"html5_subsegment_readahead_min_buffer_health_secs_on_timeout");this.lC=g.OJ(this.Fa.experiments,"html5_subsegment_readahead_min_load_speed");this.mx=g.OJ(this.Fa.experiments,"html5_subsegment_readahead_load_speed_check_interval");this.nC=g.OJ(this.Fa.experiments,"html5_subsegment_readahead_seek_latency_fudge");
this.Pi=cW(this,"html5_hopeless_secs",15);this.Jl=1;this.md=!1;this.bC=this.Fa.L("html5_restrict_streaming_xhr_on_sqless_requests");this.iA=g.OJ(this.Fa.experiments,"html5_max_headm_for_streaming_xhr");this.CB=this.Fa.L("html5_pipeline_manifestless_allow_nonstreaming");this.GB=this.Fa.L("html5_prefer_server_bwe3");this.Wy=this.Fa.L("html5_last_slice_transition");this.hC=this.Fa.L("html5_store_xhr_headers_readable");this.Wq=this.Cf=this.Tj=!1;this.Nm=g.OJ(this.Fa.experiments,"html5_max_drift_per_track_secs");
this.Ko=this.Fa.L("html5_no_placeholder_rollbacks");this.iC=this.Fa.L("html5_subsegment_readahead_enable_mffa");this.Ke=this.Fa.L("html5_allow_video_keyframe_without_audio");this.BB=this.Fa.L("html5_enable_vp9_fairplay");this.Jo=!1;this.Xa=!0;this.ze=this.Ka=this.Wb=!1;this.Fl=!0;this.Bp=!1;this.D="";this.Xx=1048576;this.je=[];this.ey=this.Fa.L("html5_woffle_resume");this.bl=this.Fa.L("html5_abs_buffer_health");this.qy=this.Fa.L("html5_interruption_resets_seeked_time");this.AA=g.OJ(this.Fa.experiments,
"html5_max_live_dvr_window_plus_margin_secs")||46800;this.Ea=!1;this.Gl=this.Fa.L("html5_explicitly_dispose_xhr");this.So=!1;this.ll=!this.Fa.L("html5_encourage_array_coalescing");this.Cm=!1;this.aC=this.Fa.L("html5_restart_on_unexpected_detach");this.nj=0;this.Kg="";this.py=this.Fa.L("html5_filter_non_efficient_formats_for_safari");this.Fa.L("html5_format_hybridization");this.wx=this.Fa.L("html5_abort_before_separate_init");this.dC=cpa();this.gC=this.Fa.L("html5_serialize_server_stitched_ad_request");
this.Cx=this.Fa.L("html5_skip_buffer_check_seek_to_head");this.Je=!1;this.zx=this.Fa.L("html5_attach_po_token_to_bandaid");this.Qm=g.OJ(this.Fa.experiments,"html5_max_redirect_response_length")||8192;this.wj=this.Fa.L("html5_rewrite_timestamps_for_webm");this.Za=this.Fa.L("html5_only_media_duration_for_discontinuities");this.ZB=g.OJ(this.Fa.experiments,"html5_resource_bad_status_delay_scaling")||1;this.Fa.L("html5_onesie_live");this.oC=this.Fa.L("html5_onesie_premieres");this.Zx=this.Fa.L("html5_drop_onesie_for_live_mode_mismatch");
this.jG=g.OJ(this.Fa.experiments,"html5_onesie_live_ttl_secs")||8;this.Mo=g.OJ(this.Fa.experiments,"html5_attach_num_random_bytes_to_bandaid");this.AB=g.OJ(this.Fa.experiments,"html5_onesie_request_timeout_ms")||3E3;this.tx=this.C=!1;this.Ba=this.Fa.L("html5_ssdai_use_post_for_media")&&this.Fa.L("gab_return_sabr_ssdai_config");this.oy=this.Fa.L("html5_ssdai_update_estimate_on_predict");this.qC=this.Fa.L("html5_use_post_for_media");this.Pb=this.Fa.L("html5_use_live_ump_heartbeat");this.Db=this.Fa.L("html5_use_sps_ump_part");
this.useUmp=this.Fa.L("html5_use_ump")||this.Pb||this.Db;this.Na=this.ra=!1;this.jb=this.Fa.L("html5_enable_drc_toggle_api")?!1:this.Fa.L("html5_enable_drc");this.JB=this.Fa.L("html5_reset_primary_stats_on_redirector_failure");this.Fa.L("html5_remap_to_original_host_when_redirected");this.Im=this.Pf=this.j=!1;this.Jc=this.Fa.L("html5_enable_sabr_format_selection");this.Qx=this.Fa.L("html5_iterative_seeking_buffered_time");this.jk=this.Fa.L("html5_use_network_error_code_enums");this.Ux=this.Fa.L("html5_disable_overlapping_requests");
this.G=!1;this.Mf=this.Fa.L("html5_disable_bandwidth_cofactors_for_sabr");this.enableServerDrivenRequestCancellation=this.Fa.L("html5_enable_server_driven_request_cancellation");this.ly=this.Fa.L("html5_enable_sabr_request_timing");this.Of=this.Fa.L("html5_enable_server_format_filter");this.Yx=this.Fa.L("html5_drc_edit_sync_workaround");this.gy=this.Fa.L("html5_enable_lawnmower");this.iy=this.Fa.L("html5_enable_lawnmower_messaging");this.Sx=this.Fa.Rc()?g.OJ(this.Fa.experiments,"html5_continuous_goodput_probe_interval_ms"):
0;this.Ay=g.OJ(this.Fa.experiments,"html5_jumbo_ull_nonstreaming_mffa_ms")||NaN;this.Lo=g.OJ(this.Fa.experiments,"html5_normal_latency_mffa_ms")||NaN;this.hG=g.OJ(this.Fa.experiments,"html5_mffa_ms_proxima_override")||this.Lo;this.cC=this.Fa.L("html5_retry_quota_exceeded_via_seek");this.Bu=this.Fa.L("html5_use_goodput_request_for_probing");this.Jz=this.Fa.L("html5_live_defrag_only_h264_playbacks");this.pz=this.Fa.L("html5_live_defrag_only_h264_formats");this.pC=this.Fa.L("html5_use_managed_media_source_buffering");
this.HB=this.Fa.L("html5_record_now");this.Bf=!1;this.Jm=g.OJ(this.Fa.experiments,"html5_drm_byterate_soft_cap");this.El=g.OJ(this.Fa.experiments,"html5_drm_live_byterate_soft_cap");this.Dl=g.OJ(this.Fa.experiments,"html5_drm_byterate_soft_cap_vp9");this.Il=this.To=!1;this.sx=this.Fa.L("html5_track_overshoot");this.qb=this.Fa.L("html5_sabr_report_request_cancellation_info");this.kh=this.No=this.lx=!1;this.Jw=this.Fa.L("html5_spoof_4k");this.Lb=!1;this.Ho=cW(this,"html5_min_media_duration_for_cabr_slice");
this.XE=this.ll?0:cW(this,"html5_min_media_duration_for_append_prop");this.IB=this.Fa.L("html5_remove_defrag_without_frame_level_streaming");this.Nc=this.Fa.L("html5_log_audio_switching_latency");this.Rx=this.Fa.L("html5_consume_all_buffered_bytes_one_poll");this.Wx=this.Fa.L("html5_disable_urgent_adaptation");this.xx=this.Fa.L("html5_apply_constraints_in_client_for_sabr");this.jy=this.Fa.L("html5_enable_sabr_max_byterate");this.Tq=this.Fa.L("html5_send_video_playback_ustreamer_config");this.Lm=cW(this,
"html5_max_discontinuity_rewrite_count");this.Om=cW(this,"html5_max_drift_seconds");this.Hl=cW(this,"html5_fixed_media_duration_for_request");this.fC=this.Fa.L("html5_sabr_use_init_selected_audio");this.Bx=this.Fa.L("html5_use_init_selected_audio");this.Ua=!1;this.xd=cW(this,"html5_sabr_request_limit_per_period");this.ox=!1;this.Fp=this.Fa.L("html5_sabr_hbr_reset_media_source");this.eC=this.Fa.L("html5_sabr_live_partial_segment")};
MWa=
dW=
eW=
NWa=
OWa=
cW=
g.PWa=
g.QWa=
g.fW=
SWa=
RWa=
TWa=
UWa=
VWa=
WWa=
XWa=
YWa=
TPa=
ZWa=
$Wa=
g.hW=function(a){return a.Ge.get("captions")};
fXa=
iW=
iXa=
lXa=
kXa=
jXa=
dXa=
g.cXa=
g.IU=function(a){return a.Ge.get("webgl")};
eXa=
aXa=
bXa=
gXa=
jW=
kW=function(a){return a.Ge.get("ad")};
nXa=
GU=function(a){if(a.J.U().yj)return a.Ge.get("remote")};
g.lW=
zTa=function(a){if(a.J.U().qb)return a.Ge.get("ux")};
mW=
g.nW=function(a){return a.Ge.get("annotations_module")};
oXa=
qXa=
pXa=
hXa=
sXa=
tXa=
uXa=
oW=
g.qW=
g.rW=
vXa=
g.sW=
g.tW=
vW=
xXa=
yXa=
zXa=
BXa=
AXa=
CXa=
wW=
xW=
DXa=
g.yW=
GXa=
HXa=
zW=
FXa=
IXa=
JXa=
EXa=
AW=
g.BW=
DW=
KXa=
LXa=
CW=
MXa=
NXa=
OXa=
PXa=
RXa=
QXa=
g.FW=
TXa=
UXa=
SXa=
XXa=
VXa=
GW=
HW=
g.IW=
g.JW=
YXa=function(a,b){return b.priority-a.priority};
KW=
LW=
ZXa=
aYa=
NW=
$Xa=
bYa=
g.OW=
cYa=
g.MW=
g.PW=
dYa=
fYa=
eYa=
hYa=
gYa=
iYa=
QW=
jYa=
kYa=
lYa=
RW=
SW=
nYa=
mYa=
VW=
TW=
UW=
oYa=
pYa=
WW=
XW=
rYa=
sYa=
qYa=
tYa=
uYa=
vYa=
xYa=
zYa=
yYa=
YW=
AYa=
BYa=
wYa=
GYa=
HYa=
IYa=
LYa=
KYa=
JYa=
MYa=
NYa=
ZW=
$W=
OYa=
PYa=
QYa=
RYa=
TYa=
aX=
cX=
SYa=
g.dX=
UYa=
VYa=
WYa=
XYa=
YYa=
eX=
ZYa=
$Ya=
cZa=
fX=
dZa=
bZa=
gX=
hX=
g.iX=
eZa=
fZa=
hZa=
jZa=
gZa=
iZa=
jX=
kZa=
mZa=
nZa=
pZa=
qZa=
kX=
lX=
rZa=
lZa=
tZa=
sZa=
mX=function(a){var b=a.api.U(),c=a.api.getVideoData();c=g.MS(b)+c.Nc;if(!g.qS(b))return c;b={};g.sU(a.api,"addEmbedsConversionTrackingParams",[b]);g.NP(b,"emb_ch_name_ex");return g.Fm(c,b)};
nX=
oX=
vZa=
uZa=
pX=
qX=
wZa=
xZa=
rX=
yZa=
zZa=
AZa=
sX=
BZa=
tX=
CZa=
uX=
g.vX=
a_a=
b_a=
g.wX=
c_a=
g.xX=
e_a=
f_a=
g_a=
d_a=
i_a=
h_a=
j_a=
m_a=
yX=
o_a=
n_a=
k_a=
l_a=
p_a=
q_a=
zX=
AX=
r_a=
s_a=
t_a=
g.CX=
u_a=
v_a=
w_a=
y_a=
z_a=
H_a=
C_a=
D_a=
A_a=
g.DX=
K_a=
FX=
L_a=
P_a=
IX=
Q_a=
M_a=
EX=
LX=
KX=
GX=
MX=
T_a=
U_a=
NX=
HX=
I_a=
S_a=
g.V_a=
JX=
N_a=
R_a=
W_a=
BX=
OX=
X_a=
Y_a=
O_a=
PX=
QX=
Z_a=
RX=
g.SX=
$_a=
g.TX=
UX=
VX=
a0a=
b0a=
d0a=
e0a=
c0a=
WX=
XX=
f0a=
g0a=
h0a=
i0a=
j0a=
l0a=
n0a=
m0a=
k0a=function(a){return a.toString()};
p0a=
o0a=
YX=
ZX=
q0a=
s0a=
t0a=
$X=function(a,b){a.J.setOption("captions","track",b)};
r0a=
u0a=
v0a=
g.aY=
w0a=
g.cY=
bY=
eY=
dY=
y0a=
x0a=
z0a=
fY=
gY=
A0a=
B0a=
D0a=
C0a=
E0a=
F0a=
G0a=
iY=
H0a=
g.jY=
g.AU=
I0a=
J0a=
K0a=
L0a=
M0a=
O0a=
P0a=
Q0a=
N0a=
R0a=
g.kY=
S0a=
T0a=
U0a=
V0a=
g.lY=
mY=
X0a=
nY=
Z0a=
oY=
Y0a=
b1a=
c1a=
a1a=function(a){return/.*(\.c\.youtube\.com|.*\.googlevideo\.com)/.test(a)};
pY=
d1a=function(a,b){this.location=a;this.j=b};
qY=
rY=
sY=
e1a=
tY=
g1a=
h1a=
i1a=
uY=
j1a=
k1a=
l1a=
m1a=
n1a=
p1a=
f1a=
q1a=
t1a=
v1a=
x1a=
A1a=
F1a=
wY=
G1a=
H1a=
I1a=
J1a=
yY=
K1a=function(){this.B=this.j=!1};
L1a=
g.zY=
M1a=
R1a=
W1a=
U1a=
O1a=
BY=
T1a=
N1a=
V1a=
DY=
Y1a=
X1a=
EY=
$1a=
a2a=
b2a=
d2a=function(a){var b=c2a();b&&document.addEventListener(b,a,!1)};
e2a=
c2a=
f2a=
UVa=
IY=
g2a=
h2a=
JY=
KY=function(a,b){return a.B.get(b)};
i2a=function(a,b,c){a.B.set(b,c)};
LY=
k2a=
j2a=
l2a=
g.MY=
s2a=
PY=
t2a=
QY=
v2a=
SY=
RY=
w2a=
m2a=
TY=function(a,b){a.ac=NaN;a.Wb=null;a.Lb.stop();a.Za&&b&&x2a(a.Za);a.ub=null;a.Za=null};
y2a=
z2a=
B2a=
UY=
C2a=
VY=
E2a=
D2a=
WY=
g.A2a=
q2a=
NY=
F2a=
G2a=
H2a=
I2a=
J2a=
n2a=
p2a=
OY=
M2a=
P2a=
O2a=
N2a=
XY=
YY=
$Y=
aZ=
Q2a=
R2a=
S2a=
T2a=
U2a=
ZY=
K2a=
V2a=
W2a=
$2a=function(a){return k2a(a.timeline,a.fg)};
L2a=
b3a=
f3a=
eZ=
g3a=
h3a=
d3a=
gZ=
i3a=
j3a=
a3a=
k3a=
e3a=
l3a=
hZ=
fZ=
m3a=
o3a=
n3a=
dZ=
q3a=
kZ=
r3a=
iZ=
lZ=
jZ=
mZ=
s3a=
t3a=
u3a=
x3a=
w3a=
z3a=
A3a=
y3a=
pZ=
oZ=
C3a=
D3a=
E3a=
F3a=
G3a=
I3a=
H3a=
J3a=
rZ=
sZ=
K3a=
tZ=
L3a=
N3a=
Q3a=
O3a=
P3a=
zZ=
DZ=
S3a=
EZ=
T3a=
U3a=
V3a=
FZ=
GZ=
HZ=
X3a=
Y3a=
W3a=
a4a=
b4a=
c4a=
IZ=
JZ=
d4a=
e4a=
f4a=
xRa=function(a,b){var c,d,e;return g.H(function(f){if(1==f.j){if(!b)return f.return(b);c=KZ.au("woe");d=new g.wO(a.B);return g.z(f,d.encrypt(b,a.j),2)}e=f.B;KZ.Cs(c,Math.ceil(b.byteLength/16));return f.return(e)})};
ERa=
g4a=
i4a=
h4a=
j4a=
k4a=
LZ=
l4a=
m4a=
NZ=
OZ=
MZ=
n4a=
vZ=
o4a=
p4a=
q4a=
r4a=
s4a=
t4a=
u4a=
QZ=
w4a=
x4a=function(a){return{kE:QO(a,1)}};
v4a=
y4a=
z4a=
A4a=
RZ=
C4a=
D4a=
SZ=function(a){a.ma||(a.ma=(0,g.RD)(),eM("mb_s",a.ma,a.j))};
E4a=function(a){a.Ba||(a.Ba=(0,g.RD)(),eM("ovfs_rp",a.Ba,a.j))};
F4a=function(a){a.ra||(a.ra=(0,g.RD)(),eM("oafs_rp",a.ra,a.j))};
G4a=function(a){a.G||(a.G=(0,g.RD)(),eM("vda",a.G,a.j),a.D&&AD(g.yD(),4))};
H4a=
I4a=function(a){a.Ga||(a.Ga=(0,g.RD)(),eM("vis_a",a.Ga,a.j))};
J4a=function(a){a.N||(a.N=(0,g.RD)(),eM("ais_a",a.N,a.j))};
K4a=function(a){a.Na||(a.Na=(0,g.RD)(),eM("vrb_f",a.Na,a.j))};
L4a=
M4a=
N4a=
O4a=
TZ=
Q4a=
S4a=
T4a=
U4a=
UZ=
VZ=
WZ=function(a,b,c){this.audio=a;this.video=b;this.reason=c};
XZ=
YZ=
ZZ=
$Z=
V4a=
a_=
W4a=
X4a=
b5a=
e5a=
f5a=
g5a=
h5a=
e_=
f_=
d5a=
a5a=
i5a=
c_=
Y4a=
k5a=
b_=
d_=
Z4a=
$4a=
g_=
l5a=
m5a=
c5a=
j5a=
n5a=
o5a=
s5a=
p5a=
t5a=
u5a=
q5a=
r5a=
v5a=
w5a=
y5a=
x5a=
h_=
D5a=
B5a=
C5a=
z5a=
E5a=
i_=
A5a=
j_=
k_=
F5a=
G5a=
H5a=
l_=
J5a=
K5a=
m_=
L5a=
n_=
M5a=
N5a=
O5a=
P5a=
R5a=
S5a=
Z5a=
V5a=
Q5a=
a6a=
b6a=
W5a=
X5a=
U5a=
Y5a=
p_=
T5a=
$5a=
h6a=
f6a=
e6a=
d6a=
c6a=
r_=
i6a=
uZ=
j6a=
s_=
t_=
k6a=
l6a=
m6a=
u_=
n6a=
BZ=
o6a=
p6a=
xZ=
yZ=
t6a=
w_=
y_=
u6a=
v6a=
A_=
x_=
v_=
B_=
r6a=
q6a=
s6a=
C_=
w6a=
x6a=
R4a=
wZ=
y6a=
z_=
z6a=
A6a=
B6a=
C6a=
D_=
D6a=
Z3a=
$3a=
E6a=
F6a=
E_=
I6a=
G6a=
J6a=
L6a=
F_=
M6a=
N6a=
O6a=
H_=
J_=
Q6a=
R6a=
V6a=
T6a=
W6a=
X6a=
S6a=
U6a=
P6a=
Y6a=
Z6a=
c7a=
e7a=
f7a=
K_=
g7a=
B4a=
h7a=
i7a=
L_=
j7a=
k7a=
l7a=
m7a=
n7a=
N_=
g.q7a=
g.w7a=
u7a=
t7a=
S_=
v7a=
s7a=
y7a=
z7a=
A7a=
C7a=
D7a=
E7a=
F7a=
G7a=
H7a=
J7a=
K7a=
L7a=
I7a=
V_=
M_=
M7a=
N7a=
T_=
P7a=
B7a=
U_=
Q7a=
R7a=
U7a=
V7a=
S7a=
T7a=
Y7a=
X7a=
Z7a=
$7a=
a8a=
W7a=
b8a=
c8a=
W_=
d8a=
e8a=
f8a=
g8a=
j8a=
i8a=
h8a=
X_=
k8a=
g.Y_=
m8a=
n8a=
o8a=
$_=
a0=
P4a=
p8a=
q8a=
t8a=
s8a=
r8a=
u8a=
w8a=
x8a=
v8a=
b0=
z8a=
A8a=
B8a=
G8a=
F8a=
H8a=
J8a=
g6a=
C8a=
E8a=
D8a=
I8a=
AZ=function(a,b,c){a.qa.seekTo(b,c)};
o_=
G_=
K8a=
L8a=
M8a=
N8a=
O8a=
l8a=
c0=
I_=
P8a=
K6a=
g.d0=function(a){this.hd=a};
e0=function(){g.uG.apply(this,arguments)};
f0=
Q8a=
g0=
R8a=
S8a=
T8a=
U8a=
V8a=
W8a=function(a,b,c){a.onSuccess=b;a.onError=c};
Y8a=
X8a=
$8a=
a9a=
e9a=
b9a=
d9a=
f9a=
i0=
j9a=
h9a=
i9a=
m9a=
n9a=
o9a=
p9a=
q9a=
h0=
r9a=
l9a=
g9a=
j0=
s9a=
c9a=
t9a=
k0=
v9a=
w9a=
x9a=
u9a=
l0=function(){this.keys=[];this.values=[]};
A9a=
z9a=
D9a=
C9a=
B9a=
E9a=
F9a=
m0=
G9a=
H9a=
L9a=
I9a=
J9a=
K9a=
M9a=
N9a=
O9a=
Q9a=
P9a=
R9a=
S9a=function(a,b,c,d,e){this.videoData=a;this.j=b;this.reason=c;this.B=d;this.token=e};
T9a=
V9a=
X9a=
W9a=
Y9a=
U9a=
Z9a=
a$a=
c$a=
$9a=
d$a=
e$a=
g$a=
f$a=
h$a=
b$a=
p0=
i$a=
j$a=
k$a=
m$a=
o$a=
p$a=
r$a=
s$a=function(a,b){$O(a,1,b.elapsedTimeMs);cP(a,3,b.videoDecoderName)};
t$a=
g.s0=
g.r0=
u$a=
x$a=
y$a=
w$a=
z$a=
A$a=
B$a=
D$a=
C$a=
G$a=
t0=
bZ=
E$a=
F$a=
H$a=
w0=
J$a=
I$a=function(a){g.qC(a.K);a.K=NaN};
K$a=
M$a=
N$a=
Q$a=
O$a=
T$a=
x0=
P$a=
U$a=
y0=
W$a=
A0=
C0=
X$a=
z0=
Y$a=
D0=
aab=
$$a=
V$a=
bab=
cab=
dab=
B0=
eab=
E0=function(a,b,c){this.videoData=a;this.X=b;this.qa=c;this.j=void 0};
g.JN=
fab=
Z$a=
v$a=
v0=
g.F0=
cZ=
hab=
Y2a=
X2a=
iab=
Z2a=
jab=
kab=
lab=
mab=
G0=
nab=
pab=
qab=
rab=
oab=
sab=
tab=
H0=
uab=
vab=
wab=
xab=
I0=
qCa=
yab=function(a,b){this.videoData=a;this.j=b};
zab=
Aab=
K0=
Dab=
Eab=
M0=
Fab=
Gab=
Cab=
L0=
J0=
Bab=
P0=
O0=
Q0=
N0=
Kab=
Mab=
Oab=
Pab=
Rab=
Iab=
Nab=
Sab=
Jab=
Uab=
Vab=
Xab=
R0=
Yab=
Wab=
S0=
Zab=
Lab=
$ab=
Qab=
Hab=function(){};
U0=
fbb=
cbb=
gbb=
dbb=
bbb=
hbb=
abb=
kbb=
V0=
lbb=
nbb=
g.Y0=
OL=
pbb=
rbb=
sbb=
tbb=
Z0=
g.FY=
ubb=
o2a=
wbb=
$0=
o0=
xbb=
zbb=
vbb=
GY=
T0=
Abb=
Bbb=
g.JV=
e1=
O7a=
g.Cbb=
qbb=
d1=
W0=
Ebb=
Fbb=
Hbb=
Gbb=
ybb=
b1=
Ibb=
g1=
Jbb=
S1a=
Lbb=
Kbb=
y8a=
n0=
Mbb=
Z1a=
Nbb=
x2a=
YVa=
a1=
Obb=
Qbb=
Pbb=
Q1a=
Rbb=
Tbb=
Dbb=
obb=
Vbb=
Ubb=
c1=
X0=
Wbb=
h1=function(a){a.Be&&(a.Be.dispose(),a.Be=null)};
CY=
Ybb=
Zbb=
u2a=
$bb=
acb=
bcb=
P1a=
f1=
Z_=
ccb=
g.i1=
ncb=
icb=
qcb=
hcb=
rcb=
gcb=
j1=
HY=
wcb=
scb=
ucb=
tcb=
g.xU=
ycb=
m1=
n1=
Bcb=
Acb=
zcb=
p1=
mcb=
u1=
Dcb=
t1=
o1=
Fcb=
Hcb=
Icb=
jcb=
Gcb=
x1=
Jcb=
lcb=
r1=
Ccb=
q1=
Mcb=
l1=
Ncb=
Pcb=
Qcb=
Ocb=
A1=
Ecb=
B1=
C1=
Rcb=
s1=
xcb=
Lcb=
Kcb=
Scb=
Tcb=
Ucb=
Vcb=
v1=
Wcb=
w1=
g.wU=
Xcb=
Zcb=
k1=
D1=
vcb=
$cb=
adb=
kcb=
z1=
y1=
bdb=
v3a=
cdb=
ddb=
edb=
fdb=
E1=
hdb=function(a,b,c,d){var e=void 0===c?{}:c;c=e.gH;var f=e.Te,h=e.cueProcessedMs;d=void 0===d?"":d;var l=a.player.getVideoData(1);e=a.player.U().Ko;var m={AD_BLOCK:a.j++,AD_BREAK_LENGTH:c?c.di:0,AUTONAV_STATE:fdb(a.player.U()),CA_TYPE:"image",CPN:l.clientPlaybackNonce,DRIFT_FROM_HEAD_MS:1E3*a.player.Av(),LACT:kF(),LIVE_INDEX:c?a.B++:1,LIVE_TARGETING_CONTEXT:c&&c.context?c.context:"",MIDROLL_POS:f?Math.round(f.start/1E3):0,MIDROLL_POS_MS:f?Math.round(f.start):0,VIS:a.player.getVisibilityState(),P_H:a.player.rb().Yj().height,
P_W:a.player.rb().Yj().width,YT_REMOTE:e?e.join(","):""},n=Aoa(zoa);Object.keys(n).forEach(;
""!==d&&(.1>Math.random()&&g.WF(Error("biscotti id requested")),m.BISCOTTI_ID=d);d={};xoa(b)&&(d.sts="19753",(c=a.player.U().forcedExperiments)&&(d.forced_experiments=c));var p=hC(g.Ou(b,m),d);a.player.getVideoData();return 2!==p.split("?").length?ag(Error("Invalid AdBreakInfo URL")):g.NS(a.player.U(),null==l?void 0:l.oauthToken).then(};
ldb=
odb=
kdb=
gdb=
xdb=function(a){this.Oa=a};
ydb=function(a){this.J=a};
zdb=function(a){this.Oa=a};
Bdb=
Adb=
F1=
G1=
Ddb=
Edb=
Fdb=
KCa=
Cdb=
tCa=function(a){switch(a){case "AD_PLACEMENT_KIND_START":return"LATENCY_AD_BREAK_TYPE_PREROLL";case "AD_PLACEMENT_KIND_MILLISECONDS":case "AD_PLACEMENT_KIND_COMMAND_TRIGGERED":case "AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED":return"LATENCY_AD_BREAK_TYPE_MIDROLL";case "AD_PLACEMENT_KIND_END":return"LATENCY_AD_BREAK_TYPE_POSTROLL";default:return"LATENCY_AD_BREAK_TYPE_UNKNOWN"}};
Hdb=
Gdb=
H1=
Jdb=
Idb=
Kdb=
I1=function(a){this.J=a};
J1=function(a){this.J=a};
K1=
wN=
Ldb=function(a){return a.J.U().L("substitute_ad_cpn_macro_in_ssdai")};
IN=
hGa=function(a){return a.J.U().L("html5_enable_vod_slar_with_notify_pacf")};
Mdb=
LEa=function(a){return a.J.U().experiments.kb("enable_desktop_player_underlay")};
fM=function(a){return a.J.U().experiments.kb("html5_load_ads_instead_of_cue")};
gM=function(a){return a.J.U().experiments.kb("html5_preload_ads")};
Ndb=
Odb=
Pdb=
L1=
Rdb=
Sdb=
M1=
O1=
P1=
Vdb=
Wdb=
Q1=
Xdb=
Tdb=
Udb=
Ydb=function(){};
Zdb=
$db=function(a,b,c){this.B=a;this.C=b;this.j=c};
aeb=function(a){this.j=a};
R1=
beb=
KAa=
nM=function(a,b){g.DD("adsClientStateChange",b)};
ceb=
deb=
PAa=
NK=
eeb=
feb=
geb=
S1=
jeb=
ieb=
keb=
T1=
U1=
leb=
meb=
N1=
neb=
oeb=
peb=
V1=function(a,b){g.mv(a.J.getRootNode(),b)};
W1=
qeb=
X1=
Y1=function(a){this.j=a};
reb=
Z1=function(a){this.X=a};
$1=
seb=
a2=
b2=
teb=
ueb=
PCa=
c2=
veb=
xeb=
web=
d2=function(a){this.J=a};
e2=function(a){this.J=a};
f2=function(a){this.J=a};
yeb=function(a){this.J=a};
zeb=
Aeb=
Beb=
Ceb=
Deb=
Eeb=
Geb=
h2=
Feb=
Heb=
Ieb=
Jeb=
Keb=function(a){var b=g.df("html5-video-player");b&&g.qv(b,"ytp-ad-display-override",a)};
Oeb=
Leb=
Meb=
Neb=
Qeb=
Seb=
Teb=
Ueb=
Reb=
i2=
Veb=function(a,b){a=a.api.getRootNode();g.qv(a,"ytp-ad-overlay-open",b);g.qv(a,"ytp-ad-overlay-closed",!b)};
Web=
Xeb=
Yeb=
Zeb=function(a){var b=g.df("html5-video-player");b&&g.qv(b,"ytp-ad-display-override",a)};
k2=
$eb=
l2=
m2=
n2=
afb=
bfb=
dfb=
efb=
ffb=
gfb=
ifb=
hfb=
jfb=
o2=
p2=
mfb=
kfb=function(a,b,c){var d=new o2(a.api,a.layoutId,a.interactionLoggingClientData,a.gb,a.D.bind(a));d.Ja(a.G);d.init(sG("survey-question-single-select"),b,c);a.api.U().L("supports_multi_step_on_desktop")?a.C=d:a.questions.push(d);g.M(a,d)};
lfb=
q2=
ofb=
pfb=
r2=
s2=function(a,b,c,d){DG.call(this,a,{I:"img",S:"ytp-ad-avatar"},"ad-avatar",b,c,d);this.hide()};
qfb=
t2=
sfb=
u2=function(a,b,c,d){DG.call(this,a,{I:"div",S:"ad-simple-attributed-string"},"ad-simple-attributed-string",b,c,d);this.hide()};
tfb=
ufb=
vfb=
v2=
w2=
x2=
wfb=
xfb=
yfb=
Bfb=
Afb=
y2=
Cfb=
Dfb=
Efb=
iEa=
zfb=
Ffb=
g.z2=
g.A2=
g.Hfb=
g.B2=
Ifb=
Jfb=
g.C2=
Lfb=
aaa=[];ka="function"==typeof Object.defineProperties?Object.defineProperty:
g.fa=caa(this);la("Symbol",;
la("Symbol.iterator",;
var Mfb="function"==typeof Object.assign?Object.assign:
la("Object.assign",function(a){return a||Mfb});
var faa="function"==typeof Object.create?Object.create:Nfb=),Ofb;
if("function"==typeof Object.setPrototypeOf)Ofb=Object.setPrototypeOf;else{var Pfb;a:{var Qfb={a:!0},Rfb={};try{Rfb.__proto__=Qfb;Pfb=Rfb.a;break a}catch(a){}Pfb=!1}Ofb=Pfb?null}var ra=Ofb;
ta.prototype.Z=function(a){this.B=a};
ta.prototype.return=
ta.prototype.La=function(a){this.j=a};
la("Reflect",;
la("Reflect.construct",function(){return Nfb});
la("Reflect.setPrototypeOf",;
la("Promise",;
la("Object.setPrototypeOf",function(a){return a||ra});
la("WeakMap",;
la("Map",;
la("Array.prototype.keys",;
la("Array.prototype.find",function(a){return a?a:function(b,c){return kaa(this,b,c).WK}});
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
la("Int8Array.prototype.fill",Na);la("Uint8Array.prototype.fill",Na);la("Uint8ClampedArray.prototype.fill",Na);la("Int16Array.prototype.fill",Na);la("Uint16Array.prototype.fill",Na);la("Int32Array.prototype.fill",Na);la("Uint32Array.prototype.fill",Na);la("Float32Array.prototype.fill",Na);la("Float64Array.prototype.fill",Na);la("Object.entries",;
la("globalThis",;
la("Math.imul",;
la("Promise.prototype.finally",;
la("String.prototype.padStart",;
la("Array.prototype.findIndex",function(a){return a?a:function(b,c){return kaa(this,b,c).i}});
la("Math.sign",;
la("WeakSet",;
la("String.prototype.replaceAll",;
la("Array.prototype.copyWithin",;
la("Int8Array.prototype.copyWithin",Pa);la("Uint8Array.prototype.copyWithin",Pa);la("Uint8ClampedArray.prototype.copyWithin",Pa);la("Int16Array.prototype.copyWithin",Pa);la("Uint16Array.prototype.copyWithin",Pa);la("Int32Array.prototype.copyWithin",Pa);la("Uint32Array.prototype.copyWithin",Pa);la("Float32Array.prototype.copyWithin",Pa);la("Float64Array.prototype.copyWithin",Pa);la("Array.prototype.findLastIndex",;
la("Int8Array.prototype.findLastIndex",Ra);la("Uint8Array.prototype.findLastIndex",Ra);la("Uint8ClampedArray.prototype.findLastIndex",Ra);la("Int16Array.prototype.findLastIndex",Ra);la("Uint16Array.prototype.findLastIndex",Ra);la("Int32Array.prototype.findLastIndex",Ra);la("Uint32Array.prototype.findLastIndex",Ra);la("Float32Array.prototype.findLastIndex",Ra);la("Float64Array.prototype.findLastIndex",Ra);
la("Math.clz32",;
la("Number.parseInt",;
la("String.raw",;var Ln,fb,maa;Ln=Ln||{};g.Sa=this||self;fb="closure_uid_"+(1E9*Math.random()>>>0);maa=0;g.k=sb.prototype;g.k.V4=
g.k.x_=
g.k.JN=
g.k.D6=
g.k.clear=function(){this.j.clear()};
g.k.xT=g.w(tb,sb);tb.prototype.D=g.w(ub,sb);ub.prototype.dj=g.k=g.I.prototype;g.k.Lx=!1;g.k.isDisposed=function(){return this.Lx};
g.k.dispose=
g.k.addOnDisposeCallback=
g.k.xa=g.pb(zb,Error);zb.prototype.name="CustomError";var Sba;g.pb(Ab,zb);Ab.prototype.name="AssertionError";g.Bb.prototype.stopPropagation=function(){this.B=!0};
g.Bb.prototype.preventDefault=function(){this.defaultPrevented=!0};var saa,Pr,Js;saa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:
g.Sfb=Array.prototype.lastIndexOf?
g.bc=Array.prototype.forEach?
g.zt=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:
g.Nr=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:
Pr=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:
Js=Array.prototype.some?
g.Or=Array.prototype.every?var dc={};var hba=);var Tfb=Ya(1,!0),pc=Ya(610401301,!1);Ya(899588437,!1);var Ufb=Ya(572417392,!0);Ya(2147483644,!1);Ya(2147483645,!1);Ya(2147483646,Tfb);Ya(2147483647,!0);var sc=!!g.Va("yt.config_.EXPERIMENTS_FLAGS.html5_enable_client_hints_override");var jc=String.prototype.trim?function(a){return a.trim()}:Gaa=/&/g,Haa=/</g,Iaa=/>/g,Jaa=/"/g,Kaa=/'/g,Laa=/\x00/g,Faa=/[\x00&<>"']/;var tc,Vfb=g.Sa.navigator;tc=Vfb?Vfb.userAgentData||null:null;Oc[" "]=function(){};var vs,qZ,Ycb,Wfb,Xfb,Yfb,nS,oS,Zfb;g.pS=yc();g.mf=zc();g.hE=vc("Edge");g.IS=g.hE||g.mf;vs=vc("Gecko")&&!(ic(g.oc(),"WebKit")&&!vc("Edge"))&&!(vc("Trident")||vc("MSIE"))&&!vc("Edge");g.Vc=ic(g.oc(),"WebKit")&&!vc("Edge");qZ=Nc();Ycb=Saa();g.LC=Raa();Wfb=Kc();Xfb=vc("iPad");Yfb=vc("iPod");nS=Mc();oS=ic(g.oc(),"KaiOS");
a:{var $fb="",agb=);
agb&&($fb=agb?agb[1]:"");if(g.mf){var bgb=Vaa();if(null!=bgb&&bgb>parseFloat($fb)){Zfb=String(bgb);break a}}Zfb=$fb}var Rc=Zfb,Taa={},cgb;if(g.Sa.document&&g.mf){var dgb=Vaa();cgb=dgb?dgb:parseInt(Rc,10)||void 0}else cgb=void 0;var Waa=cgb;var WXa=Xaa("AnimationEnd"),dVa=Xaa("TransitionEnd");g.pb(Wc,g.Bb);var egb={2:"touch",3:"pen",4:"mouse"};
Wc.prototype.init=
Wc.prototype.stopPropagation=
Wc.prototype.preventDefault=var Yaa="closure_listenable_"+(1E6*Math.random()|0);var Zaa=0;var eba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.k=xd.prototype;g.k.add=
g.k.remove=
g.k.yf=
g.k.qD=
g.k.hasListener=var Gd="closure_lm_"+(1E6*Math.random()|0),Kd={},jba=0,Ld="__closure_events_fn_"+(1E9*Math.random()>>>0);g.pb(g.Md,g.I);g.Md.prototype[Yaa]=!0;g.k=g.Md.prototype;g.k.addEventListener=
g.k.removeEventListener=
g.k.dispatchEvent=
g.k.xa=
g.k.Sa=function(a,b,c,d){return this.Tl.add(String(a),b,!1,c,d)};
g.k.KI=
g.k.Pc=
g.k.qD=
g.k.hasListener=Od.prototype.get=var Yba=g.mf||g.Vc;var fgb={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var Wd;g.Yd.prototype.toString=function(){return this.R_};
var qba={},pba={};be("");g.ce.prototype.toString=
var rba={};var vba,le;g.je.prototype.toString=function(){return this.RZ.toString()};
var tba=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,sba=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ggb;try{new URL("s://g"),ggb=!0}catch(a){ggb=!1}vba=ggb;le={};g.oe=new g.je("about:invalid#zClosurez",le);var oo={};g.me.prototype.toString=function(){return this.QZ.toString()};
var Cv=new g.me("",oo),zba=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),yba=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),xba=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),Aba=/\/\*/;var Hba={};g.se.prototype.toString=function(){return this.PZ.toString()};
var hgb=/^[a-zA-Z0-9-]+$/,igb={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},jgb={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Eba=new g.se(g.Sa.trustedTypes&&g.Sa.trustedTypes.emptyHTML||"",Hba);var Xsa={};we.prototype.toString=function(){return this.TZ.toString()};var Kba=Ud(;g.k=g.Ae.prototype;g.k.clone=function(){return new g.Ae(this.x,this.y)};
g.k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.k.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};g.k=g.De.prototype;g.k.clone=function(){return new g.De(this.width,this.height)};
g.k.area=
g.k.aspectRatio=
g.k.isEmpty=
g.k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.k.round=
g.k.scale=g.kgb=String.prototype.repeat?var Tba={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.k=Re.prototype;g.k.Jb=function(a){return Ye(this.j,a)};
g.k.getElementsByTagName=
g.k.Ha=
g.k.createElement=function(a){return of(this.j,a)};
g.k.appendChild=g.vf;g.k.append=
g.k.canHaveChildren=
g.k.removeNode=g.yf;g.k.contains=g.Df;var Mf;Pf.prototype.add=
Pf.prototype.remove=
var dca=new Od(function(){return new Qf},function(a){return a.reset()});
Qf.prototype.set=function(a,b){this.Es=a;this.scope=b;this.next=null};
Qf.prototype.reset=function(){this.next=this.scope=this.Es=null};var Rf,Tf=!1,bca=new Pf;eca.prototype.reset=function(){this.context=this.B=this.C=this.j=null;this.D=!1};
var fca=new Od(function(){return new eca},function(a){a.reset()});
g.Yf.prototype.then=
g.Yf.prototype.$goog_Thenable=!0;g.k=g.Yf.prototype;g.k.xl=
g.k.catch=g.Yf.prototype.xl;g.k.cancel=
g.k.Tca=function(a){this.j=0;Xf(this,2,a)};
g.k.Uca=
g.k.n6=
var tca=Of;g.pb(dg,zb);dg.prototype.name="cancel";g.pb(g.eg,g.Md);g.k=g.eg.prototype;g.k.enabled=!1;g.k.jd=null;g.k.setInterval=function(a){this.Zi=a;this.jd&&this.enabled?(this.stop(),this.start()):this.jd&&this.stop()};
g.k.Eca=
g.k.start=
g.k.stop=
g.k.xa=g.w(g.qg,g.I);g.k=g.qg.prototype;g.k.sendIsolatedPayload=function(a){this.G=a;this.D=1};
g.k.Fr=
g.k.Ck=function(a){var b=g.Ia.apply(1,arguments);this.B.has(a)||this.B.set(a,new tb(a,b))};
g.k.DG=
g.k.Mm=
g.k.FL=function(a,b){var c=g.Ia.apply(2,arguments),d=vca(this,a);d&&d instanceof tb&&(d.D(b,c),uca(this))};
g.k.dj=xca.prototype.dj=
yca.prototype.dj=function(a,b,c){this.j.dj("/client_streamz/po/w/el",a,b,c)};var oh=void 0,nh,jda="undefined"!==typeof TextDecoder,Gca,Fca="function"===typeof String.prototype.h8,Eca="undefined"!==typeof TextEncoder;var IC,JC;g.QR=Ec();IC=Kc()||vc("iPod");JC=vc("iPad");g.pQa=Naa();g.fL=Fc();g.MD=Ic()&&!Mc();var Lca={},wg=null,Mca=vs||g.Vc||"function"==typeof g.Sa.btoa;var Vca="undefined"!==typeof Uint8Array,Pca=!g.mf&&"function"===typeof btoa,Tca=/[-_.]/g,Rca={"-":"+",_:"/",".":"="},Wca,zg={};var Yca;Ag.prototype.isEmpty=function(){return null==this.j};
Ag.prototype.sizeBytes=var pea=!Ufb,oea=!Ufb;var fda="function"===typeof Uint8Array.prototype.slice,Pg=0,Qg=0,Iea;Ug.prototype.init=
Ug.prototype.free=
Ug.prototype.clear=
Ug.prototype.reset=
var bh=[];ch.prototype.free=
ch.prototype.reset=
var D2=[];var mda,pda;qh.prototype.length=function(){return this.j.length};
qh.prototype.end=var E2;E2="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,g.oa(Object.values({yIa:1,sIa:2,jIa:4,RXa:8,QXa:16,WTa:32,Ysa:64,hcb:128,iFa:256,fFa:512,tIa:1024,JEa:2048,T9a:4096,KEa:8192})));var Bh=E2?aj=E2?yh=E2?function(a){return a[E2]|0}:Si=E2?function(a){return a[E2]}:function(a){return a.Bn},zh=E2?function(a,b){a[E2]=b;
return a}:var ni={},yda={},lgb,Tda=!Ufb,$i,mgb=[];zh(mgb,55);$i=Object.freeze(mgb);var Jh,Jk,Ck;Object.freeze(new function(){});
Object.freeze(new function(){});var Gda=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;var oi,Pi,Qda;g.k=T.prototype;g.k.toJSON=
g.k.xk=
g.k.clone=
g.k.Ov=
g.k.ZI=ni;g.k.toString=var rea=Symbol(),Ak,Bk,Hk=Symbol(),Aea=Symbol(),Lk=Symbol(),Mk=Symbol(),ngb=Nk(function(a,b,c){if(1!==a.B)return!1;Pk(b,c,$g(a.j));return!0},Qk),ogb=Nk(function(a,b,c){if(1!==a.B)return!1;
a=$g(a.j);Pk(b,c,0===a?void 0:a);return!0},Qk),pgb=Nk(function(a,b,c,d){if(1!==a.B)return!1;
Bj(b,c,d,$g(a.j));return!0},Qk),qgb=Nk(function(a,b,c){if(0!==a.B)return!1;
Pk(b,c,Wg(a.j));return!0},Rk),rgb=Nk(function(a,b,c){if(0!==a.B)return!1;
a=Wg(a.j);Pk(b,c,0===a?void 0:a);return!0},Rk),sgb=Nk(function(a,b,c,d){if(0!==a.B)return!1;
Bj(b,c,d,Wg(a.j));return!0},Rk),tgb=Nk(function(a,b,c){if(0!==a.B)return!1;
Pk(b,c,Xg(a.j));return!0},Sk),ugb=Nk(Sk),vgb=Nk(function(a,b,c,d){if(0!==a.B)return!1;
Bj(b,c,d,Xg(a.j));return!0},Sk),wgb=Nk(function(a,b,c){if(1!==a.B)return!1;
Pk(b,c,Zg(a.j));return!0},,xgb=Ok(,ygb=Nk(function(a,b,c){if(0!==a.B)return!1;
Pk(b,c,ah(a.j));return!0},Jea),zgb=Nk(Jea),F2=Nk(function(a,b,c){if(2!==a.B)return!1;
Pk(b,c,ph(a));return!0},Kea),Agb=Ok(function(a,b,c){if(2!==a.B)return!1;
a=ph(a);xj(b,c,cea,a);return!0},,Bgb=Nk(Kea),qea=new wh(yl,!1,!0),zea=new wh(yl,!1,!0),G2;
G2=new wh(!0,!0);
var H2=new wh(yl,!1,!0),Cgb=Nk(,Dgb=Ok(,I2=Nk(function(a,b,c){b=ci(b);
null!=b&&null!=b&&(uh(a,c,0),rh(a.j,b))}),Egb=Nk(;g.w(Al,T);Al.xb=[1,2,3,4];g.w(Bl,T);var Hl=[1,2,3],Fgb=[0,Hl,Bgb,vgb,zgb];var Ggb=[0,G2,[0,ngb,qgb]];g.w(Cl,T);var Gl=[1,2,3],Hgb=[0,Gl,sgb,pgb,H2,Ggb];g.w(Dl,T);Dl.xb=[1];var Igb=[0,G2,Fgb,Hgb];var Jgb=[0,[1,2,3],H2,[0,F2,-1,ygb],H2,[0,F2,-1,tgb,ygb],H2,[0,F2]];g.w(El,T);El.prototype.zq=
El.xb=[3,6,4];El.prototype.j=Lea([0,F2,Jgb,Agb,G2,Igb,wgb,xgb]);g.w(Fl,T);Fl.xb=[1];var Sea={};g.k=Il.prototype;g.k.isEnabled=
g.k.set=
g.k.get=
g.k.remove=
g.k.vp=function(){return Jl(this).keys};
g.k.Xl=
g.k.isEmpty=
g.k.clear=
var AC=new Il("undefined"==typeof document?null:document);g.w(Ll,T);Ll.xb=[2];g.w(Ml,g.Md);Ml.prototype.setInterval=
Ml.prototype.start=
Ml.prototype.stop=
Ml.prototype.tick=g.w(Nl,T);g.w(Ol,T);g.Pl.prototype.B=0;g.Pl.prototype.reset=
g.Pl.prototype.getValue=function(){return this.C};var Tl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),bfa=/#|$/,cfa=/[?&]($|#)/;g.w(Jm,T);Jm.prototype.jO=function(){return $h(Wi(this,1))};g.w(Km,T);g.w(Lm,T);Lm.xb=[1];g.w(Mm,T);var ffa=["platform","platformVersion","architecture","model","uaFullVersion"],Om=new Lm,Nm=null;g.w(Pm,T);g.w(Qm,T);Qm.xb=[1,2,3,4,5];g.w(Rm,T);g.w(Sm,T);Sm.prototype.L=
Sm.prototype.GC=function(){return Yi(this,16)};
Sm.xb=[3,20,27];g.w(Tm,T);Tm.prototype.zF=function(a){return R(this,2,a)};
Tm.xb=[3,5];g.w(Um,T);var Kgb=zl(Um);Um.xb=[5,6];g.w(hfa,T);var J2=new 175237375,hfa);g.w(Xm,g.I);g.k=Xm.prototype;g.k.xa=
g.k.dispatch=
g.k.log=
g.k.flush=
g.k.yN=
g.k.isRetryable=
Vm.prototype.zF=function(a){this.j.zF(a);return this};
Vm.prototype.build=nfa.prototype.xk=
var qfa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},pfa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;cn.prototype.C=null;cn.prototype.getOptions=var Lgb;g.pb(dn,cn);dn.prototype.j=
dn.prototype.D=
Lgb=new dn;g.pb(g.en,g.Md);var Afa=/^https?$/i,Mgb=["POST","PUT"],tfa=[];g.k=g.en.prototype;g.k.x5=
g.k.send=
g.k.yT=
g.k.abort=
g.k.xa=
g.k.lZ=
g.k.F$=function(){yfa(this)};
g.k.isActive=function(){return!!this.j};
g.k.isComplete=
g.k.getStatus=
g.k.getResponseHeader=
g.k.getLastError=Rn.prototype.send=
Rn.prototype.jO=function(){return 1};g.w(Sn,g.I);Sn.prototype.TV=
Sn.prototype.build=g.w(Tn,g.I);Tn.prototype.flush=g.w(Vn,Error);Vn.prototype.toString=
Vn.prototype.name="RpcError";Xn.prototype.done=
g.k=Dfa.prototype;g.k.LI=function(){};
g.k.gE=function(){};
g.k.nP=
g.k.kY=function(){};
g.k.jw=function(){};
g.k.eE=function(){};
g.k=Efa.prototype;g.k.LI=function(a){this.clientError.j.Mm("/client_streamz/po/w/cec",a,this.ej)};
g.k.gE=
g.k.nP=
g.k.kY=function(a){this.C.j.Mm("/client_streamz/po/w/csc",a,this.ej)};
g.k.jw=function(a){this.B.j.Mm("/client_streamz/po/w/ctav",a,this.ej)};
g.k.eE=var Ngb,Gfa=null!=(Ngb=Math.imul)?Ngb:
Zn.prototype.xk=
Zn.prototype.oh=
var $n=[196,200,224,18];Pfa.prototype.dj=function(a,b,c){this.j.dj("/client_streamz/bg/fil",a,b,c)};
Rfa.prototype.dj=var Tfa={toString:;co.prototype.start=function(){this.startMillis=bo()};
co.prototype.done=
eo.prototype.oP=function(){};
eo.prototype.gE=function(){};
eo.prototype.MI=function(){};
eo.prototype.Fr=function(){};
fo.prototype.oP=
fo.prototype.gE=
fo.prototype.MI=
fo.prototype.Fr=function(){this.j.Fr()};g.w(Vfa,T);g.w(Wfa,T);g.w(go,T);var oga=zl(go);io.prototype.snapshot=
io.prototype.K_=
io.prototype.dispose=
io.prototype.isDisposed=function(){return this.j};g.w(jo,Xfa);jo.prototype.toString=function(){return this.j};var FYa=lo("tel"),DYa=lo("sms"),Yfa=[lo("data"),lo("http"),lo("https"),lo("mailto"),lo("ftp"),new ko(function(a){return/^[^:]*([/?#]|$)/.test(a)})],$fa="function"===typeof URL;var nga=na([""]);g.w(vo,T);g.w(wo,T);g.w(xo,T);yo.prototype.YC=
yo.prototype.iW=
yo.prototype.ping=g.w(zo,T);var Pgb=zl(zo);Ao.prototype.RH=function(){return this.C};
Ao.prototype.getMetadata=function(){return this.B};Bo.prototype.getMetadata=function(){return this.j};
Bo.prototype.RH=function(){return this.B};
Bo.prototype.getStatus=function(){return null};Co.prototype.getName=function(){return this.name};
Co.prototype.getName=Co.prototype.getName;var Qgb=new Co("/google.internal.waa.v1.Waa/Create",vo,zo,function(a){return a.xk()},Pgb);g.w(Do,T);var Rgb=zl(Do);var Ogb=new Co("/google.internal.waa.v1.Waa/GenerateIT",wo,Do,function(a){return a.xk()},Rgb);g.w(Eo,T);var Sgb=new Co("/google.internal.waa.v1.Waa/Ping",xo,Eo,function(a){return a.xk()},zl(Eo));var Mga=Promise;g.w(Fo,T);Fo.prototype.getValue=g.w(Go,T);var vga=zl(Go);Go.xb=[3];Ho.prototype.on=
Ho.prototype.removeListener=
Ho.prototype.cancel=function(){this.j.abort()};
Ho.prototype.cancel=Ho.prototype.cancel;Ho.prototype.removeListener=Ho.prototype.removeListener;Ho.prototype.on=Ho.prototype.on;g.pb(g.Mo,cn);g.Mo.prototype.j=
g.Mo.prototype.D=Sd({});g.Mo.prototype.setCredentialsMode=function(a){this.B=a};
g.pb(xp,g.Md);g.k=xp.prototype;g.k.open=
g.k.send=
g.k.abort=
g.k.y7=
g.k.n7=
g.k.x7=
g.k.w7=
g.k.jI=
g.k.setRequestHeader=function(a,b){this.Z.append(a,b)};
g.k.getResponseHeader=
g.k.getAllResponseHeaders=
g.k.setCredentialsMode=function(a){this.G=a};
Object.defineProperty(xp.prototype,"withCredentials",{get:function(){return"include"===this.G},
set:);g.Ap.prototype.toString=
g.Ap.prototype.resolve=
g.Ap.prototype.clone=function(){return new g.Ap(this)};
var Tgb=/[#\/\?@]/g,Vgb=/[#\?:]/g,Ugb=/[#\?]/g,yga=/[#\?@]/g,Wgb=/#/g;g.k=Gp.prototype;g.k.add=
g.k.remove=
g.k.clear=
g.k.isEmpty=
g.k.forEach=
g.k.vp=
g.k.Xl=
g.k.set=
g.k.get=
g.k.toString=
g.k.clone=g.pb(g.Np,g.I);var Xgb=[];g.k=g.Np.prototype;g.k.Sa=
g.k.KI=
g.k.Pc=
g.k.yf=
g.k.xa=function(){g.Np.Lf.xa.call(this);this.yf()};
g.k.handleEvent=Ega.prototype.isInputValid=function(){return this.C};Op.prototype.isInputValid=function(){return 3!=this.j};
Op.prototype.tf=function(){return this.K};
Op.prototype.BG=function(){return!0};
Op.prototype.parse=Qp.prototype.isInputValid=function(){return null===this.j};
Qp.prototype.tf=function(){return this.j};
Qp.prototype.BG=function(){return!1};
Qp.prototype.parse=var Ygb={INIT:0,mC:1,ZL:2,Vx:3,zB:4,yB:5,STRING:6,UL:7,fU:8,CU:9,DU:10,EU:11,ES:12,FS:13,GS:14,HS:15,lU:16,mU:17,nU:18,w4:19,YL:20};g.k=Sp.prototype;g.k.isInputValid=function(){return 3!=this.G};
g.k.tf=function(){return this.W};
g.k.done=function(){return 2===this.G};
g.k.BG=function(){return!1};
g.k.parse=Up.prototype.isInputValid=function(){return null===this.G};
Up.prototype.tf=function(){return this.G};
Up.prototype.BG=function(){return!1};
Up.prototype.parse=Vp.prototype.lO=function(){return this.j};
Vp.prototype.getStatus=function(){return this.D};
Vp.prototype.ma=g.k=Iga.prototype;g.k.on=function(a,b){var c=this.B[a];c||(c=[],this.B[a]=c);c.push(b);return this};
g.k.addListener=
g.k.removeListener=
g.k.once=
g.k.E9=
g.k.qaa=Kga.prototype.serverStreaming=$p.prototype.create=function(a,b){return Zp(this.j,this.B+"/$rpc/google.internal.waa.v1.Waa/Create",a,b||{},Qgb)};
$p.prototype.ping=var Zgb=1,gq=new WeakMap;g.w(aq,g.I);aq.prototype.signal=
aq.prototype.Lz=
g.w(cq,g.I);g.k=cq.prototype;g.k.vM=
g.k.detach=
g.k.value=function(a){return this.promise(!0,a)};
g.k.Lz=function(){return this.ZX};
g.k.next=
g.k.promise=
g.k.xa=
var eq=[],fq=!1;g.w(hq,g.I);hq.prototype.start=
hq.prototype.cancel=
hq.prototype.xa=
hq.prototype.clear=
g.fa.Object.defineProperties(hq.prototype,{K:{configurable:!0,enumerable:!0,get:function(){return 1===this.state}},
isCancelled:{configurable:!0,enumerable:!0,get:function(){return 2===this.state}},
isExpired:{configurable:!0,enumerable:!0,get:function(){return 3===this.state}},
tick:{configurable:!0,enumerable:!0,get:function(){return this.D}},
Z:{configurable:!0,enumerable:!0,get:,
xJ:{configurable:!0,enumerable:!0,get:function(){if(this.isDisposed())throw new jq("Cannot attach a signal to a disposed timer.");this.C||(null!=this.j||(this.j=new aq(this)),this.C=this.j.signal());return this.C}},
OP:{configurable:!0,enumerable:!0,get:});
g.w(iq,zb);g.w(jq,zb);var Yga=globalThis.TextEncoder?new TextEncoder:void 0;g.w(mq,Error);g.w(nq,g.I);nq.prototype.G=
g.w(pq,nq);pq.prototype.j=
g.w(qq,nq);qq.prototype.j=function(){return this.K};
g.w(rq,nq);rq.prototype.j=function(){return vg(this.K)};
rq.prototype.G=function(){return this.K};
g.w(sq,nq);sq.prototype.j=
g.w(tq,nq);tq.prototype.j=
g.w(uq,g.I);g.k=uq.prototype;g.k.isReady=function(){return!!this.j};
g.k.ready=
g.k.YC=
g.k.prefetch=
g.k.start=var kha={NONE:0,swa:1},Rha={z1:0,K2a:1,J2a:2,L2a:3},Vr={d1:"a",Pva:"d",VIDEO:"v"};wq.prototype.isVisible=var wr={jta:0,vCa:1},Pha={NONE:0,DHa:1,NEa:2};xq.prototype.getValue=function(){return this.B};
g.w(yq,xq);yq.prototype.C=
g.w(pr,xq);pr.prototype.C=function(a){null===this.B&&"number"===typeof a&&(this.B=a)};
g.w(qr,xq);qr.prototype.C=rr.prototype.disable=function(){this.B=!1};
rr.prototype.enable=function(){this.B=!0};
rr.prototype.isEnabled=function(){return this.B};
rr.prototype.reset=function(){this.j={};this.B=!0;this.C={}};var Ls=document,Ar=window;var Tia=!g.mf&&!Ic();xr.prototype.now=function(){return 0};
xr.prototype.B=function(){return 0};
xr.prototype.C=function(){return 0};
xr.prototype.j=function(){return 0};g.w(zr,xr);zr.prototype.now=
zr.prototype.B=function(){return yr()&&Ar.performance.memory?Ar.performance.memory.totalJSHeapSize||0:xr.prototype.B.call(this)};
zr.prototype.C=function(){return yr()&&Ar.performance.memory?Ar.performance.memory.usedJSHeapSize||0:xr.prototype.C.call(this)};
zr.prototype.j=var nha=Ud(;oha.prototype.isVisible=be("csi.gstatic.com");be("googleads.g.doubleclick.net");be("partner.googleadservices.com");be("pubads.g.doubleclick.net");be("securepubads.g.doubleclick.net");be("tpc.googlesyndication.com");var qha={mja:"allow-forms",nja:"allow-modals",oja:"allow-orientation-lock",pja:"allow-pointer-lock",qja:"allow-popups",rja:"allow-popups-to-escape-sandbox",sja:"allow-presentation",tja:"allow-same-origin",uja:"allow-scripts",vja:"allow-top-navigation",wja:"allow-top-navigation-by-user-activation"},uha=Ud(function(){return rha()});var yha=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");Jr.prototype.Oe=Qr.prototype.setInterval=function(a,b){return Ar.setInterval(a,b)};
Qr.prototype.clearInterval=function(a){Ar.clearInterval(a)};
Qr.prototype.setTimeout=function(a,b){return Ar.setTimeout(a,b)};
Qr.prototype.clearTimeout=function(a){Ar.clearTimeout(a)};g.w(Sr,T);Sr.prototype.j=Lea([0,ogb,rgb,-2,ugb]);var Qha={V_a:1,J4:2,ITa:3};Sha.prototype.MQ=var K2=null;var Yr=g.Sa.performance,$gb=!!(Yr&&Yr.mark&&Yr.measure&&Yr.clearMarks),Wr=Ud(;
Xr.prototype.disable=
Xr.prototype.start=
Xr.prototype.end=Zha.prototype.qP=
g.w(bs,Uha);var $r,as,Zr=new Xr;$r=new 
as=new Zha;Ar&&Ar.document&&("complete"==Ar.document.readyState?aia():Zr.j&&Cr(Ar,"load",function(){aia()}));var dia=Date.now(),js=-1,hs=-1,uja,ks=-1,is=!1;g.k=ls.prototype;g.k.getHeight=function(){return this.bottom-this.top};
g.k.clone=
g.k.contains=
g.k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.k.scale=function(a,b){b="number"===typeof b?b:a;this.left*=a;this.right*=a;this.top*=b;this.bottom*=b;return this};os.prototype.Jb=function(){return this.N};var ahb={currentTime:1,duration:2,isVpaid:4,volume:8,isYouTube:16,isPlaying:32},Qt={C4:"start",G1:"firstquartile",t4:"midpoint",E4:"thirdquartile",q1:"complete",ERROR:"error",s4:"metric",PAUSE:"pause",z4:"resume",A4:"skip",I4:"viewable_impression",v4:"mute",H4:"unmute",H1:"fullscreen",F1:"exitfullscreen",n1:"bufferstart",m1:"bufferfinish",I1:"fully_viewable_audible_half_duration_impression",r4:"measurable_impression",Z0:"abandon",E1:"engagedview",L1:"impression",t1:"creativeview",q4:"loaded",A1a:"progress",
CLOSE:"close",Dsa:"collapse",UYa:"overlay_resize",VYa:"overlay_unmeasurable_impression",WYa:"overlay_unviewable_impression",YYa:"overlay_viewable_immediate_impression",XYa:"overlay_viewable_end_of_session_impression",w1:"custom_metric_viewable",e1:"audio_audible",j1:"audio_measurable",f1:"audio_impression"},Fka="start firstquartile midpoint thirdquartile resume loaded".split(" "),Gka=["start","firstquartile","midpoint","thirdquartile"],wja=["abandon"],ju={UNKNOWN:-1,C4:0,G1:1,t4:2,E4:3,q1:4,s4:5,
PAUSE:6,z4:7,A4:8,I4:9,v4:10,H4:11,H1:12,F1:13,I1:14,r4:15,Z0:16,E1:17,L1:18,t1:19,q4:20,w1:21,n1:22,m1:23,f1:27,j1:28,e1:29};var gia={uea:"addEventListener",PEa:"getMaxSize",QEa:"getScreenSize",REa:"getState",SEa:"getVersion",D2a:"removeEventListener",EIa:"isViewable"};g.k=g.qs.prototype;g.k.clone=
g.k.contains=
g.k.getSize=
g.k.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.k.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.k.round=
g.k.scale=var kia={};tia.prototype.update=Ns.prototype.cancel=
Ns.prototype.schedule=g.k=Os.prototype;g.k.QB=function(){return!1};
g.k.initialize=
g.k.cz=function(){return this.j.Ga};
g.k.FD=function(){return this.j.ma};
g.k.sj=
g.k.getName=function(){return this.j.Ra};
g.k.Ms=function(){return this.j.yW()};
g.k.yW=function(){return{}};
g.k.Gq=function(){return this.j.Z};
g.k.zT=
g.k.AT=
g.k.OW=function(){return this.D.j};
g.k.sample=function(){};
g.k.isActive=function(){return this.j.K};
g.k.nz=
g.k.Us=
g.k.Sp=function(){return this.W};
g.k.dispose=function(){this.Ea=!0};
g.k.isDisposed=function(){return this.Ea};g.k=$s.prototype;g.k.GL=function(){return!0};
g.k.tG=function(){};
g.k.dispose=
g.k.isDisposed=function(){return this.ma};
g.k.Ms=function(){return this.B.Ms()};
g.k.Gq=function(){return this.B.Gq()};
g.k.cz=function(){return this.B.cz()};
g.k.FD=function(){return this.B.FD()};
g.k.nz=function(){};
g.k.Us=function(){this.gs()};
g.k.Sp=function(){return this.ra};g.k=at.prototype;g.k.Gq=function(){return this.j.Gq()};
g.k.cz=function(){return this.j.cz()};
g.k.FD=function(){return this.j.FD()};
g.k.create=
g.k.BT=
g.k.RB=function(){return!1};
g.k.init=
g.k.nz=
g.k.Us=function(){};
g.k.Sp=function(){return!1};
g.k.dispose=
g.k.isDisposed=function(){return this.G};
g.k.Ms=function(){return{}};bt.prototype.add=Eia.prototype.toString=et.prototype.update=var Jia=[1,.75,.5,.3,0];ft.prototype.update=lt.prototype.update=
lt.prototype.Sq=if(Ls&&Ls.URL){var bhb=Ls.URL,chb;if(chb=!!bhb){var dhb;a:{if(bhb){var ehb=RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");try{var L2=ehb.exec(decodeURIComponent(bhb));if(L2){dhb=L2[1]&&1<L2[1].length?L2[1].substring(1):"true";break a}}catch(a){}}dhb=""}chb=0<dhb.length}as.KR=!chb};var fhb=new ls(0,0,0,0);var Ria=new ls(0,0,0,0);g.w(qt,g.I);g.k=qt.prototype;
g.k.xa=
g.k.Ps=
g.k.MQ=
g.k.Sp=function(){return!1};
g.k.UH=function(){return new lt};
g.k.vj=function(){return this.VI};
g.k.FW=
g.k.Qa=
g.k.lS=
g.k.ZN=function(){return new wq};
g.k.AM=
g.k.VM=
g.k.Pv=function(){return!1};
g.k.zK=function(){return this.c8||this.f8};
g.k.ow=function(){gs()};
g.k.eA=
g.k.xp=function(){return 0};
g.k.Sq=function(){return this.VI.Sq()};
g.k.RW=
g.k.HH=function(){return 0};g.tt.prototype.next=function(){return g.M2};
g.M2={done:!0,value:void 0};g.tt.prototype.Bk=function(){return this};g.w(aja,wq);var N2=cja([void 0,1,2,3,4,8,16]),O2=cja([void 0,4,8,16]),ghb={sv:"sv",v:"v",cb:"cb",e:"e",nas:"nas",msg:"msg","if":"if",sdk:"sdk",p:"p",p0:xt("p0",O2),p1:xt("p1",O2),p2:xt("p2",O2),p3:xt("p3",O2),cp:"cp",tos:"tos",mtos:"mtos",amtos:"amtos",mtos1:wt("mtos1",[0,2,4],!1,O2),mtos2:wt("mtos2",[0,2,4],!1,O2),mtos3:wt("mtos3",[0,2,4],!1,O2),mcvt:"mcvt",ps:"ps",scs:"scs",bs:"bs",vht:"vht",mut:"mut",a:"a",a0:xt("a0",O2),a1:xt("a1",O2),a2:xt("a2",O2),a3:xt("a3",O2),ft:"ft",dft:"dft",at:"at",dat:"dat",as:"as",
vpt:"vpt",gmm:"gmm",std:"std",efpf:"efpf",swf:"swf",nio:"nio",px:"px",nnut:"nnut",vmer:"vmer",vmmk:"vmmk",vmiec:"vmiec",nmt:"nmt",tcm:"tcm",bt:"bt",pst:"pst",vpaid:"vpaid",dur:"dur",vmtime:"vmtime",dtos:"dtos",dtoss:"dtoss",dvs:"dvs",dfvs:"dfvs",dvpt:"dvpt",fmf:"fmf",vds:"vds",is:"is",i0:"i0",i1:"i1",i2:"i2",i3:"i3",ic:"ic",cs:"cs",c:"c",c0:xt("c0",O2),c1:xt("c1",O2),c2:xt("c2",O2),c3:xt("c3",O2),mc:"mc",nc:"nc",mv:"mv",nv:"nv",qmt:xt("qmtos",N2),qnc:xt("qnc",N2),qmv:xt("qmv",N2),qnv:xt("qnv",N2),
raf:"raf",rafc:"rafc",lte:"lte",ces:"ces",tth:"tth",femt:"femt",femvt:"femvt",emc:"emc",emuc:"emuc",emb:"emb",avms:"avms",nvat:"nvat",qi:"qi",psm:"psm",psv:"psv",psfv:"psfv",psa:"psa",pnk:"pnk",pnc:"pnc",pnmm:"pnmm",pns:"pns",ptlt:"ptlt",pngs:"pings",veid:"veid",ssb:"ssb",ss0:xt("ss0",O2),ss1:xt("ss1",O2),ss2:xt("ss2",O2),ss3:xt("ss3",O2),dc_rfl:"urlsigs",obd:"obd",omidp:"omidp",omidr:"omidr",omidv:"omidv",omida:"omida",omids:"omids",omidpv:"omidpv",omidam:"omidam",omidct:"omidct",omidia:"omidia",
omiddc:"omiddc",omidlat:"omidlat",omiddit:"omiddit",nopd:"nopd",co:"co"},hhb=Object.assign({},ghb,{avid:Sd("audio"),avas:"avas",vs:"vs"}),ihb={atos:"atos",avt:wt("atos",[2]),davs:"davs",dafvs:"dafvs",dav:"dav",ss:"ss",0),
t:"t"};Ct.prototype.getValue=function(){return this.B};
Ct.prototype.update=g.w(Dt,lt);
Dt.prototype.update=ija.prototype.B=g.w(Ft,ija);Ft.prototype.j=function(){return!0};
Ft.prototype.K=function(){return!1};
Ft.prototype.getId=
Ft.prototype.toString=g.w(Gt,Ft);Gt.prototype.B=g.w(Ht,jja);Ht.prototype.B=function(){return null};
Ht.prototype.C=g.w(It,$s);g.k=It.prototype;g.k.FM=
g.k.qV=
g.k.MX=
g.k.rV=
g.k.gs=
g.k.getName=function(){return this.B.getName()};var jhb=new ls(0,0,0,0);g.w(Jt,It);g.k=Jt.prototype;g.k.GL=
g.k.Us=function(){It.prototype.gs.call(this)};
g.k.rV=function(){};
g.k.FM=function(){};
g.k.gs=function(){this.C();It.prototype.gs.call(this)};
g.k.nz=var P2={},tja=(P2.firstquartile=0,P2.midpoint=1,P2.thirdquartile=2,P2.complete=3,P2);g.w(Lt,qt);g.k=Lt.prototype;g.k.Sp=function(){return!0};
g.k.Gn=function(){return 2==this.gk};
g.k.FW=
g.k.Qa=
g.k.lS=
g.k.UH=function(){return new Dt};
g.k.vj=function(){return this.VI};
g.k.ZN=function(){return new aja};
g.k.AM=
g.k.VM=
g.k.xp=function(){return 1};
g.k.getDuration=function(){return this.C};
g.k.RW=
g.k.HH=var khb=g.ob();Eja.prototype.reset=function(){this.j=[];this.B=[]};
var Vt=Er(Eja);g.w(Yt,at);g.k=Yt.prototype;g.k.getName=function(){return(this.B?this.B:this.j).getName()};
g.k.Ms=function(){return(this.B?this.B:this.j).Ms()};
g.k.Gq=
g.k.init=
g.k.dispose=
g.k.BT=function(){return Js(this.C,function(a){return a.QB()})};
g.k.RB=
g.k.uG=function(a,b,c){return new It(a,this.j,b,c)};
g.k.Us=var Nja={threshold:[0,.3,.5,.75,1]};g.w(Zt,It);g.k=Zt.prototype;g.k.GL=
g.k.tG=
g.k.gs=
g.k.FM=function(){};
g.k.MX=function(){return!1};
g.k.qV=function(){};
g.k.Ms=
g.k.getName=function(){return"nio"};g.w(bu,at);bu.prototype.getName=function(){return"nio"};
bu.prototype.RB=
bu.prototype.uG=g.w(cu,Os);cu.prototype.OW=
cu.prototype.QB=du.prototype.sample=
du.prototype.D=
var eu=Er(du);var Xja=null,Eu="",Du=!1;var $ja=Zja().gp,iu=Zja().ip;var cka={wCa:"visible",foa:"audible",Gab:"time",Jab:"timetype"},dka={visible:
audible:function(a){return"0"==a||"1"==a},
timetype:
time:;
bka.prototype.setTime=g.w(mu,Ft);mu.prototype.getId=function(){return this.N};
mu.prototype.K=function(){return!0};
mu.prototype.j=g.w(nu,eja);nu.prototype.j=g.w(ou,Ft);ou.prototype.j=function(a){return nja(a)};g.w(pu,jja);g.w(qu,Ft);qu.prototype.j=g.w(ru,Gt);ru.prototype.j=g.w(tu,pu);tu.prototype.B=function(){return new ru(this.j)};
tu.prototype.C=g.w(uu,Jt);uu.prototype.C=
uu.prototype.getName=function(){return"gsv"};g.w(vu,at);vu.prototype.getName=function(){return"gsv"};
vu.prototype.RB=function(){var a=Ks();Ur();return a.B&&!1};
vu.prototype.uG=function(a,b,c){return new uu(this.j,b,c)};g.w(wu,Jt);wu.prototype.C=
wu.prototype.getName=function(){return"nis"};g.w(xu,at);xu.prototype.getName=function(){return"nis"};
xu.prototype.RB=
xu.prototype.uG=g.w(yu,Os);g.k=yu.prototype;g.k.QB=
g.k.yW=
g.k.Tt=
g.k.initialize=
g.k.zT=
g.k.AT=
g.k.dispose=function(){lka(this);Os.prototype.dispose.call(this)};var Nha=new "45378663");g.k=Au.prototype;g.k.jH=
g.k.bI=function(){};
g.k.fF=
g.k.nz=
g.k.Us=function(){};
g.k.Sp=function(){return!1};
g.k.A7=
g.k.J7=
g.k.rB=
g.k.yp=
g.k.E7=function(a){return Iu(a,"firstquartile",1)};
g.k.G7=
g.k.K7=
g.k.B7=
g.k.C7=
g.k.i_=
g.k.I7=
g.k.F7=function(a,b){rt(a,!0);return this.rB(a,b||{},"fullscreen")};
g.k.D7=
g.k.BQ=
g.k.H7=
g.k.tO=
g.k.ZW=function(){};
g.k.XQ=function(){};
g.k.d_=function(){};
g.k.CT=function(){};
g.k.gN=function(){};
g.k.KV=
g.k.fN=function(){return new nu};g.w(Ju,Ft);Ju.prototype.j=g.w(Ku,Gt);Ku.prototype.j=g.w(Lu,pu);Lu.prototype.B=function(){return new Ku(this.j)};
Lu.prototype.C=g.w(Mu,eja);Mu.prototype.j=yka.prototype.B=function(){return g.Va(this.j)};g.w(Nu,Au);g.k=Nu.prototype;g.k.bI=
g.k.CT=
g.k.gN=
g.k.XQ=
g.k.d_=
g.k.ZW=function(){};
g.k.fF=
g.k.jH=
g.k.KV=
g.k.fN=
var lhb=ds(193,Kka,void 0,vka);g.Ua("Goog_AdSense_Lidar_sendVastEvent",lhb);var mhb=es(194,;
g.Ua("Goog_AdSense_Lidar_getViewability",mhb);var nhb=ds(195,;
g.Ua("Goog_AdSense_Lidar_getUrlSignalsArray",nhb);var ohb=es(196,;
g.Ua("Goog_AdSense_Lidar_getUrlSignalsList",ohb);var bAa=na(["//tpc.googlesyndication.com/sodar/",""]);var BLa={J3a:0,G3a:1,D3a:2,E3a:3,F3a:4,I3a:5,H3a:6};var Boa=(new Date).getTime();var Mka="://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),Nka=/\bocr\b/;var Pka=/(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g;g.w(Qu,g.Md);Qu.prototype.dispose=
Qu.prototype.Nh=function(){return this.j};
Qu.prototype.qf=Su.prototype.set=
Su.prototype.get=var $u;g.pb(g.cv,g.I);g.k=g.cv.prototype;g.k.start=
g.k.stop=
g.k.isActive=function(){return null!=this.j};
g.k.q3=
g.k.xa=g.pb(g.ev,g.I);g.k=g.ev.prototype;g.k.SB=0;g.k.xa=
g.k.start=
g.k.stop=
g.k.isActive=
g.k.DT=iv.prototype[Symbol.iterator]=
iv.prototype.next=rv.prototype.Bk=function(){return new tv(this.B())};
rv.prototype[Symbol.iterator]=function(){return new uv(this.B())};
rv.prototype.j=
g.w(tv,g.tt);tv.prototype.next=function(){return this.B.next()};
tv.prototype[Symbol.iterator]=function(){return new uv(this.B)};
tv.prototype.j=function(){return new uv(this.B)};
g.w(uv,rv);uv.prototype.next=function(){return this.C.next()};g.k=g.wv.prototype;g.k.Xl=
g.k.vp=
g.k.has=
g.k.isEmpty=function(){return 0==this.size};
g.k.clear=
g.k.remove=function(a){return this.delete(a)};
g.k.delete=
g.k.get=
g.k.set=
g.k.forEach=
g.k.clone=
g.k.keys=function(){return vv(this.Bk(!0)).j()};
g.k.values=function(){return vv(this.Bk(!1)).j()};
g.k.entries=
g.k.Bk=g.pb(g.zv,g.Md);g.k=g.zv.prototype;g.k.isPlaying=
g.k.isPaused=
g.k.nJ=function(){this.Sl("begin")};
g.k.gr=function(){this.Sl("end")};
g.k.onFinish=function(){this.Sl("finish")};
g.k.Sl=var phb=Ud(;g.pb(Av,g.zv);g.k=Av.prototype;g.k.play=
g.k.Xaa=
g.k.stop=
g.k.HL=
g.k.xa=
g.k.pause=function(){};var Zka={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0};Bv("Element","attributes")||Bv("Node","attributes");Bv("Element","innerHTML")||Bv("HTMLElement","innerHTML");Bv("Node","nodeName");Bv("Node","nodeType");Bv("Node","parentNode");Bv("Node","childNodes");Bv("HTMLElement","style")||Bv("Element","style");Bv("HTMLStyleElement","sheet");var fla=ala("getPropertyValue"),gla=ala("setProperty");Bv("Element","namespaceURI")||Bv("Node","namespaceURI");var ela={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0};var kla,Kfb,jla,ila,lla;kla=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");Kfb=RegExp("^[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.qhb=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
g.Dv=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");jla=/^http:\/\/.*/;g.rhb=RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)","i");ila=/\s+/;lla=/[\d\u06f0-\u06f9]/;Fv.prototype.clone=Hv.prototype.clone=function(){return new Hv(this.start,this.end)};
Hv.prototype.getLength=(();var nla=);g.pb(g.Kv,g.I);g.k=g.Kv.prototype;g.k.subscribe=
g.k.unsubscribe=
g.k.Ch=
g.k.oa=
g.k.clear=
g.k.xa=g.Lv.prototype.set=
g.Lv.prototype.get=
g.Lv.prototype.remove=g.pb(Mv,g.Lv);Mv.prototype.set=
Mv.prototype.B=
Mv.prototype.get=g.pb(Nv,Mv);Nv.prototype.set=
Nv.prototype.B=g.pb(g.Ov,Nv);g.pb(Pv,sla);Pv.prototype[Symbol.iterator]=
Pv.prototype.clear=g.pb(Qv,Pv);g.k=Qv.prototype;g.k.isAvailable=
g.k.set=
g.k.get=
g.k.remove=
g.k.Bk=
g.k.clear=
g.k.key=g.pb(Sv,Qv);g.pb(tla,Qv);g.pb(Uv,Pv);var ula={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Tv=null;g.k=Uv.prototype;g.k.isAvailable=function(){return!!this.j};
g.k.set=
g.k.get=
g.k.remove=
g.k.Bk=
g.k.clear=g.pb(Xv,Pv);Xv.prototype.set=
Xv.prototype.get=
Xv.prototype.remove=
Xv.prototype.Bk=Zv.prototype.getValue=function(){return this.B};
Zv.prototype.clone=g.k=$v.prototype;g.k.oh=
g.k.remove=
g.k.Xl=
g.k.vp=
g.k.clone=
g.k.isEmpty=
g.k.clear=g.w(vla,$v);g.aw.Zg=void 0;g.aw.getInstance=
g.aw.prototype.j=0;var bw={},shb="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;bw.assign=
bw.JR=
var thb={zy:
lW:,uhb={zy:
lW:;
bw.hca=
bw.hca();var vhb=!0;try{new Uint8Array(1)}catch(a){vhb=!1};var Bw={};Bw=for(var Cw={},Q2,whb=[],R2=0;256>R2;R2++){Q2=R2;for(var xhb=0;8>xhb;xhb++)Q2=Q2&1?3988292384^Q2>>>1:Q2>>>1;whb[R2]=Q2}Cw=var rw={};rw={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var kw=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],nw=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Sla=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Hla=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ww=Array(576);cw(ww);var xw=Array(60);cw(xw);var mw=Array(512);cw(mw);var jw=Array(256);cw(jw);var lw=Array(29);cw(lw);var ow=Array(30);cw(ow);var Pla,Qla,Rla,Ola=!1;var Hw;Hw=[new Gw(0,0,0,0,,
new Gw(4,4,8,4,Ew),new Gw(4,5,16,8,Ew),new Gw(4,6,32,32,Ew),new Gw(4,4,16,16,Fw),new Gw(8,16,32,32,Fw),new Gw(8,16,128,128,Fw),new Gw(8,32,128,256,Fw),new Gw(32,128,258,1024,Fw),new Gw(32,258,258,4096,Fw)];var Nla={};Nla=var Tla=Object.prototype.toString;
Iw.prototype.push=
Iw.prototype.gr=var Kw="@@redux/INIT"+Jw(),Zla="@@redux/REPLACE"+Jw();var $la="function"===typeof Symbol&&Symbol.observable||"@@observable";var yhb=[0,Cgb,-3,I2];g.w(Nw,T);Nw.prototype.getType=function(){return Qj(this,11)};
Nw.xb=[2,13,14];var I5a=);var Kwa=new g.Ow("adInfoDialogEndpoint");var Tya=new g.Ow("adPingingEndpoint");var XK=new g.Ow("adActionInterstitialRenderer");var zhb=new g.Ow("adDurationRemainingRenderer");var fN=new g.Ow("adHoverTextButtonRenderer");var Iwa=new g.Ow("adInfoDialogRenderer");var EN=new g.Ow("adMessageRenderer");var gN=new g.Ow("adPreviewRenderer");var XDa=new g.Ow("dismissablePanelTextPortraitImageRenderer");var Ahb=new g.Ow("flyoutCtaRenderer");var DBa=new g.Ow("instreamAdPlayerOverlayRenderer");var Bhb=new g.Ow("instreamAdPlayerUnderlayRenderer");var cfb=new g.Ow("instreamSurveyAdBackgroundImageRenderer");var eEa=new g.Ow("instreamSurveyAdPlayerOverlayRenderer");var ZM=new g.Ow("instreamSurveyAdRenderer"),eN=new g.Ow("instreamSurveyAdSingleSelectQuestionRenderer"),dN=new g.Ow("instreamSurveyAdMultiSelectQuestionRenderer"),S2=new g.Ow("instreamSurveyAdAnswerRenderer"),Chb=new g.Ow("instreamSurveyAdAnswerNoneOfTheAboveRenderer");var XM=new g.Ow("instreamVideoAdRenderer");var Dhb=new g.Ow("textOverlayAdContentRenderer"),Ehb=new g.Ow("enhancedTextOverlayAdContentRenderer"),Fhb=new g.Ow("imageOverlayAdContentRenderer");var $Da=new g.Ow("inPlayerAdLayoutRenderer");var UDa=new g.Ow("playerBytesAdLayoutRenderer");var cN=new g.Ow("playerUnderlayAdLayoutRenderer");var YM=new g.Ow("adIntroRenderer");var SDa=new g.Ow("playerBytesSequentialLayoutRenderer");var kFa=new g.Ow("slidingTextPlayerOverlayRenderer");var $M=new g.Ow("surveyTextInterstitialRenderer");var Ghb=new g.Ow("simpleAdBadgeRenderer");var oM=new g.Ow("skipAdRenderer"),Hhb=new g.Ow("skipButtonRenderer");var kN=new g.Ow("adSlotRenderer");var bN=new g.Ow("squeezebackPlayerSidePanelRenderer");var Ihb=new g.Ow("timedPieCountdownRenderer");var Jhb=new g.Ow("adAvatarViewModel");var Khb=new g.Ow("adButtonViewModel");var Lhb=new g.Ow("adPreviewViewModel");var Mhb=new g.Ow("playerAdAvatarLockupCardButtonedViewModel");var Nhb=new g.Ow("skipAdButtonViewModel");var Ohb=new g.Ow("skipAdViewModel");var Phb=new g.Ow("visitAdvertiserLinkViewModel");g.w(Pw,T);g.w(Qw,T);g.w(Rw,T);g.w(Sw,T);g.w(Tw,T);Tw.prototype.clearVideo=function(){return Yi(this,1)};
var sP=[1,2,3,4];var LHa={Bja:0,zja:1,Aja:2};var MHa={Fja:0,Eja:1,Dja:2,Cja:3};var QHa={Sna:0,Rna:1,Qna:2};var qP={Mqa:0,Nqa:1,Kqa:2,Jqa:3,Hqa:4,Lqa:5,Iqa:6,Gqa:7};var PHa={Era:0,Dra:1,zra:2,vra:3,Cra:4,Fra:5,yra:6,ura:7,xra:8,Bra:9,Ara:10,Gra:11,wra:12,Hra:13};var DIa={Vra:0,Jra:1,Mra:2,Wra:3,Kra:4,Lra:5,Rra:6,Tra:7,Ora:8,Ira:9,Qra:10,Ura:11,Pra:12,Nra:13,Sra:14};var OHa={fwa:0,dwa:1,ewa:2};var CIa={X2a:0,W2a:1,V2a:2,U2a:3};var BIa={e3a:0,Y2a:1,Z2a:5,a3a:6,c3a:2,d3a:3,b3a:4};var AIa={h3a:0,i3a:1,g3a:2,f3a:3};var zIa={m3a:0,k3a:1,l3a:2};var yIa={Ghb:0,vhb:1,Chb:2,whb:3,Dhb:4,zhb:5,Ehb:6,Ahb:7,yhb:8,xhb:9,Bhb:10,Fhb:11,uhb:12};g.w(Uw,T);Uw.prototype.getType=function(){return Qj(this,1)};g.w(Vw,T);g.w(Ww,T);g.w(Xw,T);g.w(Yw,T);g.w(Zw,T);g.w($w,T);$w.prototype.j=function(a,b){return yj(this,2,Zh,a,b)};
$w.xb=[2];g.w(ax,T);ax.prototype.j=function(a,b){return yj(this,3,Zh,a,b)};
ax.xb=[3];g.w(bx,T);g.w(cx,T);g.w(dx,T);g.w(ex,T);g.w(fx,T);g.w(gx,T);g.w(hx,T);g.w(ix,T);g.w(jx,T);g.w(kx,T);var oP=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];var YHa={nla:0,ska:2,qla:3,tka:4,rka:5,ela:6,gla:58,Eka:17,ika:18,jla:15,lla:7,Kka:8,Oja:10,Pja:26,lka:45,pka:11,Dka:14,sla:16,Kja:19,Qja:20,Lja:21,tla:22,Rja:23,qka:25,Gja:27,Hja:53,Ika:28,kka:30,Tka:31,fka:32,Sja:33,Mka:34,Fka:35,Aka:36,Mja:37,Zka:39,wka:41,Bka:42,yka:43,xka:44,Nja:40,Vka:46,Uka:49,Wka:50,zka:51,Cka:52,rla:54,Vja:57,Xja:91,Yja:93,Wja:92,dla:60,gka:67,Ija:64,mka:65,aka:68,Jja:69,Lka:70,vka:71,uka:72,dka:73,cka:75,ola:76,Ska:77,Gka:78,fla:79,Yka:80,hka:81,nka:82,bka:83,oka:84,hla:85,
Xka:89,Hka:86,Pka:87,Qka:88,Oka:90,Nka:100,Uja:94,Tja:95,Rka:96,Jka:97,jka:98,kla:99,mla:101,ila:102,Zja:103};var WHa={Dla:0,ula:1,Cla:2,xla:3,wla:4,Bla:5,Ala:6,zla:7,yla:8,Ela:9};var VHa={Lla:0,Gla:1,Fla:2,Jla:3,Mla:4,Hla:5,Ila:6,Kla:7};var XHa={Wla:0,Sla:1,Rla:2,Ula:3,Ola:4,Nla:5,Tla:6,Pla:7,Xla:8,Vla:9,Qla:10};var UHa={lma:0,kma:1,jma:2};var ZHa={sNa:0,lNa:1,oNa:2,OMa:3,qNa:4,BMa:5,hNa:6,RMa:7,rNa:8,KMa:9,eNa:10,LMa:11,jNa:12,mMa:13,VMa:14,TMa:15,UMa:16,iNa:17,XMa:18,gNa:19,fNa:20,bNa:21,GMa:22,nMa:23,SMa:24,ZMa:25,IMa:26,HMa:27,YMa:28,oMa:29,cNa:30,NMa:31,pNa:32,AMa:33,aNa:34,zMa:35,CMa:36,DMa:37,JMa:38,FMa:39,EMa:40,dNa:41,WMa:42,kNa:43,PMa:44,mNa:45,nNa:46,QMa:47,MMa:70,wMa:48,tMa:49,yMa:50,xMa:51,vMa:52,sMa:53,pMa:54,uMa:55,rMa:56,qMa:57,kMa:58,jMa:59,iMa:60,cMa:61,hMa:62,dMa:63,eMa:64,bMa:65,fMa:66,lMa:67,gMa:68,aMa:69};var KHa={Aqa:0,vqa:1,uqa:18,lqa:2,eqa:3,kqa:9,fqa:10,iqa:14,gqa:4,dqa:5,hqa:6,Cqa:11,jqa:12,aqa:13,Zpa:15,oqa:16,wqa:17,xqa:19,Dqa:20,tqa:21,qqa:22,sqa:23,cqa:24,yqa:25,bqa:26,Bqa:27,pqa:28,rqa:29,nqa:30,zqa:31,mqa:7};var $Ha={gma:0,hma:1,bma:2,cma:3,dma:4,Yla:5,ama:6,ema:7,fma:8,Zla:9};var pP={Kma:0,wma:1,Jma:3,Hma:4,Gma:5,xma:25,Lma:6,uma:7,nma:8,zma:9,mma:12,yma:22,Bma:23,Cma:26,Dma:27,Ema:28,Ima:24,Fma:13,Mma:14,Ama:15,oma:16,rma:17,pma:18,qma:19,tma:20,vma:21};g.w(lx,T);g.w(mx,T);mx.prototype.j=function(a,b){return Ij(this,1,lx,a,b)};
mx.xb=[1];g.w(nx,T);nx.prototype.j=function(a,b){return yj(this,2,Zh,a,b)};
nx.prototype.getMetrics=function(a){return mea(this,2,a)};
nx.xb=[2];g.w(ox,T);var aIa=[1,2];g.RT=new g.Ow("browseEndpoint");var Qhb=new g.Ow("confirmDialogEndpoint");var kua=new g.Ow("rawColdConfigGroup");var jua=new g.Ow("rawHotConfigGroup");var GIa={T_a:0,S_a:1,O_a:2,M_a:3,P_a:4,N_a:5,R_a:6,Q_a:7};g.oH=new g.Ow("commandExecutorCommand");g.w(px,T);g.w(qx,T);g.w(rx,T);g.w(sx,T);var dIa=[1,2,3];g.w(tx,T);g.w(ux,T);ux.prototype.B=function(a,b){return yj(this,1,ji,a,b)};
ux.prototype.j=function(a,b){return yj(this,2,ji,a,b)};
ux.prototype.Ff=function(){return Kj(this,3)};
ux.xb=[1,2];g.w(vx,T);g.w(wx,T);wx.prototype.j=
wx.prototype.getMetrics=
wx.xb=[1];g.w(xx,T);g.w(yx,T);g.w(zx,T);g.w(Ax,T);g.w(Bx,T);g.w(Cx,T);g.w(Dx,T);g.w(Ex,T);g.w(Fx,T);g.w(Gx,T);var nIa=[1,2],qIa=[3,4,5];g.w(Yx,T);Yx.prototype.getName=function(){return Kj(this,2)};g.w(Zx,T);g.w($x,T);g.w(ay,T);ay.prototype.getId=function(){return Kj(this,1)};g.w(by,T);by.prototype.getType=function(){return $h(Wi(this,1))};g.w(cy,T);cy.prototype.getType=function(){return $h(Wi(this,1))};g.w(dy,T);dy.prototype.getType=function(){return $h(Wi(this,1))};g.w(ey,T);var vP=[1,2,3,4];g.w(fy,T);g.w(gy,T);g.w(hy,T);var uP=[1,2,3,4];g.w(iy,T);g.w(jy,T);jy.prototype.j=function(a,b){return Ij(this,2,hy,a,b)};
jy.xb=[2];var tP=[3,4,5,6,7];g.w(ky,T);g.w(ly,T);var RIa=[1,2];g.w(my,T);my.prototype.getId=function(){return g.Ej(this,ky,2)};g.w(ny,T);ny.prototype.j=function(a,b){return Ij(this,2,my,a,b)};
ny.xb=[2];g.w(oy,T);oy.prototype.j=function(a,b){return Ij(this,1,my,a,b)};
oy.prototype.B=function(a,b){return Ij(this,2,ny,a,b)};
oy.xb=[1,2];g.w(py,T);var fIa=[1,2,3];g.w(qy,T);g.w(ry,T);ry.prototype.j=function(a,b){return yj(this,2,Zh,a,b)};
ry.xb=[2];g.w(sy,T);g.w(ty,T);g.w(uy,T);g.w(vy,T);g.w(wy,T);g.w(yy,T);yy.prototype.j=function(a,b){return yj(this,1,Zh,a,b)};
yy.xb=[1];g.w(zy,T);g.w(Ay,T);g.w(By,T);var FIa=[1,2,3];g.w(Cy,T);Cy.prototype.j=function(a,b){return Ij(this,1,By,a,b)};
Cy.xb=[1];g.w(Dy,T);g.w(Ey,T);g.w(Fy,T);g.w(Gy,T);Gy.prototype.j=function(a,b){return Ij(this,1,Fy,a,b)};
Gy.xb=[1];g.w(Hy,T);g.w(Iy,T);g.w(Jy,T);Jy.prototype.j=function(a,b){return Ij(this,1,Iy,a,b)};
Jy.xb=[1];g.w(Ky,T);Ky.prototype.j=function(a,b){return Ij(this,1,Iy,a,b)};
Ky.xb=[1];g.w(Ly,T);g.w(My,T);var iJa={tgb:0,mib:1,Iib:32,Rib:61,ejb:67,Tib:86,Gib:42,Jib:60,tib:62,Pib:73,Nib:76,Vib:88,Wib:90,kjb:99,Dib:98,Xib:100,qjb:41,rjb:69,sjb:70,tjb:71,XTa:2,sUa:27,ANDROID:3,Sma:54,Tma:14,bna:91,Uma:55,Vma:24,Wma:20,Xma:18,Zma:21,dna:30,gna:29,hna:28,ina:34,cna:36,Yma:38,IOS:5,GHa:15,QHa:92,HHa:40,JHa:25,KHa:17,LHa:19,MHa:64,NHa:66,OHa:26,SHa:22,dIa:33,eIa:68,fIa:35,PHa:53,RHa:37,IHa:39,yeb:7,yfb:57,Nfb:43,Yfb:59,Ofb:93,fna:74,fgb:75,ggb:85,hgb:65,jgb:80,kgb:8,veb:10,mgb:58,lgb:63,igb:72,ena:23,Tjb:11,
Ujb:13,ksa:12,xeb:16,Eib:56,Sib:31,UTa:77,TEa:84,Mib:87,VEa:89,UEa:94,ZQa:95};var Rhb={F4:0,CLASSIC:1,o4:2,M1:3,v1:4,u4:5,J1:6,HU:7};g.w(Ny,T);Ny.prototype.E6=function(){return g.Pj(this,3)};
Ny.prototype.N6=function(){return g.Pj(this,5)};
Ny.prototype.yr=function(a){return O(this,5,a)};g.w(Oy,T);g.w(Py,T);g.w(Qy,T);g.w(Ry,T);g.w(Sy,T);Sy.xb=[2];g.w(g.Ty,T);g.Ty.prototype.Ls=ca(0);g.Ty.prototype.getPlayerType=function(){return Qj(this,36)};
g.Ty.prototype.setHomeGroupInfo=function(a){return Fj(this,Sy,81,a)};
g.Ty.prototype.clearLocationPlayabilityToken=function(){return Yi(this,89)};
g.Ty.xb=[9,66,32,86,100,101];g.w(Uy,T);Uy.prototype.getValue=
var dua=[2,3,4,5,6];g.w(Vy,T);Vy.xb=[15,26,28];g.w(Wy,T);Wy.xb=[5];g.w(Xy,T);Xy.prototype.setToken=function(a){return O(this,2,a)};g.w(Yy,T);Yy.prototype.setSafetyMode=function(a){return R(this,5,a)};
Yy.xb=[12];g.w(Zy,T);Zy.prototype.Xw=
Zy.xb=[12];var iN=new g.Ow("thumbnailLandscapePortraitRenderer");var OIa={L8a:0,G8a:1,J8a:2,K8a:3,H8a:4,I8a:5};var MIa={r9a:0,q9a:1,M8a:2,N8a:3,O8a:4,P8a:5,Q8a:6,R8a:7,S8a:8,U8a:9,V8a:10,W8a:11,X8a:12,Y8a:13,Z8a:14,a9a:15,c9a:16,d9a:17,g9a:18,h9a:19,i9a:20,l9a:21,j9a:22,k9a:23,m9a:24,n9a:25,o9a:26,p9a:27,f9a:28,T8a:29,b9a:30,e9a:31};var LIa={B9a:0,s9a:1,t9a:2,u9a:3,v9a:4,w9a:5,x9a:6,y9a:7,z9a:8,A9a:9,C9a:10};var NIa={G9a:0,E9a:1,F9a:2,D9a:3};var oIa={nra:0,Rqa:1,ora:2,hra:3,Oqa:4,Pqa:5,fra:6,Qqa:7,cra:8,dra:13,Vqa:9,Xqa:10,ara:11,pra:12,Tqa:14,Zqa:15,Wqa:16,jra:17,gra:18,mra:19,kra:20,Uqa:21,lra:22,Sqa:23,Yqa:24,ira:25};var pIa={tra:0,sra:1,rra:2,qra:3};var HIa={Yab:0,Wab:1,Xab:2};var hIa={Zna:0,Xna:4,Wna:2,Una:5,Vna:8,Yna:9,Tna:3,aoa:6,boa:7};var iIa={fta:0,bta:1,dta:2,gta:3,hta:4,eta:5};var gIa={Hta:0,Fta:8,Dta:2,Bta:5,Cta:9,Eta:3,Ata:4,Ita:6,Jta:7,Gta:10};var tIa={Lia:0,Jia:1,Kia:2,Nia:3,Oia:4,Mia:5};var QIa={b1a:0,U0a:1,W0a:2,a1a:3,Y0a:4,X0a:6,V0a:7,Z0a:5};var Shb={rhb:0,qhb:1,lhb:2,phb:3,nhb:4,ohb:5,mhb:6};var EIa={Lhb:0,Khb:1,Mhb:2};var uIa={jhb:0,Zgb:1,ahb:2,bhb:3,dhb:4,ehb:5,fhb:6,ghb:7,hhb:8,ihb:9};var Thb={Ohb:0,Nhb:1};var vIa={w8a:0,j8a:1,v8a:2,k8a:3,l8a:4,p8a:5,o8a:6,n8a:7,x8a:8,h8a:9,i8a:10,u8a:11,t8a:12,s8a:13,m8a:14,r8a:15,q8a:16};var bKa={uda:0,sda:1,rda:2,tda:3};g.Uhb=new g.Ow("changeEngagementPanelVisibilityAction");var sxa=new g.Ow("continuationCommand");g.Vhb=new g.Ow("openPopupAction");g.T2=new g.Ow("webCommandMetadata");var qSa=new g.Ow("metadataBadgeRenderer");var rxa=new g.Ow("signalServiceEndpoint");var eLa={cja:0,dja:1,Yia:2,bja:3,Zia:4,aja:5};var fLa={kja:0,hja:1,eja:2,jja:3,lja:4,gja:5,fja:6,ija:7};g.w($y,T);$y.prototype.getType=function(){return Qj(this,1)};var BP={MIa:0,NIa:1,LIa:2,HIa:3,JIa:4,KIa:5,OIa:6,IIa:7};var Whb={STa:0,LTa:1,MTa:2,RTa:3,QTa:6,PTa:7,NTa:8,OTa:9,KTa:10};var Xhb={YUa:0,VUa:1,XUa:2,WUa:3,UUa:4};var Yhb={yZa:0,jZa:1,zZa:2,xZa:3,wZa:4,vZa:5,uZa:6,mZa:7,kZa:8,qZa:9,DZa:10,lZa:11,sZa:12,BZa:13,CZa:14,tZa:15,pZa:16,oZa:17,rZa:18,nZa:19,AZa:20};var cIa={HZa:0,GZa:86};var CP={v1a:0,u1a:1,m1a:2,j1a:3,l1a:4,w1a:5,t1a:6,h1a:7,x1a:8,f1a:9,q1a:10,y1a:11,s1a:12,i1a:13,e1a:14,k1a:15,o1a:16,n1a:17,p1a:18,g1a:19};var Zhb={d8a:0,Y7a:1,f8a:2,Z7a:3,e8a:4,b8a:5,c8a:6,a8a:7};var ZF=new g.Ow("innertubeCommand");var rfb=new g.Ow("loggingDirectives");var $hb={D1:0,A1:1,C1:2,B1:3};var kpa={D1:"EMBEDDED_PLAYER_MODE_UNKNOWN",A1:"EMBEDDED_PLAYER_MODE_DEFAULT",C1:"EMBEDDED_PLAYER_MODE_PFP",B1:"EMBEDDED_PLAYER_MODE_PFL"};var QSa=new g.Ow("channelThumbnailEndpoint");var PSa=new g.Ow("embeddedPlayerErrorMessageRenderer");var LSa=new g.Ow("embeddedPlayerOverlayVideoDetailsRenderer"),RSa=new g.Ow("embeddedPlayerOverlayVideoDetailsCollapsedRenderer"),SSa=new g.Ow("embeddedPlayerOverlayVideoDetailsExpandedRenderer");var nSa=new g.Ow("embedsInfoPanelRenderer");var rIa={DPa:0,rPa:14,BPa:15,CPa:16,sPa:17,wPa:18,yPa:19,uPa:20,vPa:21,APa:22,xPa:23,zPa:24,tPa:25};var aib=new g.Ow("feedbackEndpoint");var bib=new g.Ow("callToActionButtonViewModel");g.w(az,T);g.w(bz,T);g.w(cz,T);var qKa=[1,2];var cib={WIa:0,XIa:1,VIa:2,QIa:3,PIa:4,RIa:5,TIa:6,SIa:7,UIa:8};var dib={rJa:0,fJa:1,qJa:2,pJa:3,aJa:4,cJa:5,dJa:6,bJa:7,jJa:8,gJa:9,hJa:10,iJa:16,YIa:11,sJa:12,ZIa:13,nJa:14,eJa:15,oJa:17,kJa:18,lJa:19,mJa:20};var eib={wJa:0,tJa:1,vJa:2,uJa:3};var fib={gGa:0,NFa:1,hGa:8,YFa:16,ZFa:17,cGa:2,aGa:3,bGa:4,QFa:5,OFa:6,PFa:7,fGa:9,dGa:10,eGa:11,XFa:12,UFa:13,WFa:14,VFa:15,TFa:18,RFa:19,SFa:20,MFa:21};var gib={aZa:0,bZa:1,ZYa:2};var hib={hZa:0,dZa:1,fZa:2,cZa:3,eZa:4,gZa:5};var iib={LJa:0,CJa:1,DJa:2,EJa:3,JJa:4,GJa:5,HJa:6,FJa:7,IJa:8,BJa:9,KJa:10};var jib={jOa:0,fOa:1,SNa:2,eOa:3,NNa:4,cOa:5,bOa:6,aOa:7,mOa:8,UNa:9,ONa:10,VNa:11,WNa:12,PNa:13,ZNa:14,lOa:15,YNa:16,XNa:17,QNa:18,RNa:19,TNa:20,gOa:21,hOa:22,iOa:23,kOa:24,dOa:25};var kib={IOa:0,EOa:9,yOa:8,KOa:1,POa:2,NOa:3,OOa:13,FOa:4,AOa:21,BOa:20,COa:5,uOa:6,tOa:7,wOa:14,vOa:15,ROa:17,SOa:10,DOa:16,xOa:18,HOa:19,rOa:11,sOa:12,LOa:22,MOa:23,qOa:24,JOa:25,pOa:26,QOa:27,zOa:28,GOa:29};var lib={Apa:0,ypa:1,zpa:2};var mib={ENa:0,wNa:1,zNa:2,CNa:3,xNa:4,uNa:5,ANa:6,BNa:7,tNa:8,DNa:9,yNa:10,vNa:11};var nib={Dpa:0,Bpa:1,Epa:2,Cpa:3};var oib=new g.Ow("interactionLoggingCommandMetadata");var Hra={Bib:"WEB_DISPLAY_MODE_UNKNOWN",xib:"WEB_DISPLAY_MODE_BROWSER",zib:"WEB_DISPLAY_MODE_MINIMAL_UI",Aib:"WEB_DISPLAY_MODE_STANDALONE",yib:"WEB_DISPLAY_MODE_FULLSCREEN"};g.w(dz,T);g.w(ez,T);g.w(fz,T);fz.prototype.j=function(a,b){return Ij(this,1,ez,a,b)};
fz.xb=[1];var CLa={iea:0,Jda:1,Tda:2,Yda:3,eea:4,fea:5,jea:6,Zda:7,Ida:8,Qda:9,Pda:10,vda:11,Sda:12,Eda:14,Mda:15,Xda:16,Wda:17,Vda:43,Rda:18,Kda:29,Nda:19,Bda:20,Fda:21,hea:22,wda:23,mea:24,Oda:25,Cda:26,bea:27,Dda:28,cea:30,dea:31,Uda:32,gea:33,xda:34,aea:35,nea:36,zda:37,Ada:38,lea:39,Gda:40,Hda:41,yda:42,Lda:44};var pib={Tsa:0,Ssa:1,Rsa:2};g.w(gz,T);g.w(hz,T);var qib={Jga:0,Dga:114,zfa:1,xga:4,yga:14,mfa:15,zga:17,Xea:6,afa:7,cfa:8,bfa:9,kfa:5,Qfa:16,Nfa:101,wga:20,vga:26,jga:28,qfa:104,Kea:105,Kga:50,tga:88,nga:89,pga:90,oga:91,rfa:2,Efa:92,Ffa:19,Nea:25,Fga:107,Zea:29,ufa:93,wfa:94,vfa:95,Hga:30,Ofa:31,Dfa:116,Bfa:3,xfa:82,tfa:83,sfa:84,Afa:85,lga:11,Lga:27,Rfa:10,Cga:115,Hea:12,Jea:13,Iea:49,Gea:106,Vea:18,Mfa:21,gfa:22,Fea:23,rga:24,wea:32,Kfa:33,Aea:34,Sga:35,Sea:36,Yfa:37,ofa:38,Ega:39,Aga:40,Bga:41,Nga:42,Wea:43,Iga:44,nfa:45,ffa:46,Sfa:47,Pfa:48,
yfa:51,lfa:52,Yea:53,kga:54,pfa:55,Mea:56,Rea:57,Tea:99,Lea:58,Vfa:59,ifa:60,Wfa:61,Tfa:62,Hfa:63,Rga:64,Oga:65,Mga:66,Qga:67,Pga:68,vea:69,Ufa:70,Zfa:71,aga:72,ega:73,fga:74,cga:75,dga:117,Pea:76,Qea:77,Cea:78,Uea:79,Cfa:80,jfa:81,Oea:86,Eea:87,yea:97,xea:103,Gfa:98,Xfa:100,Bea:102,iga:108,hga:109,zea:110,Dea:111,Ifa:112,gga:113,dfa:118,Gga:119,Lfa:120,Jfa:121,efa:122,qga:123};var rib={hha:0,bha:1,dha:2,fha:3,Zga:4,Uga:5,Wga:6,Yga:7,eha:8,Vga:9,Xga:10,cha:13,gha:14,Tga:11,aha:12};var sib={eia:0,lha:1,mha:2,oha:3,vha:4,Yha:42,Qha:9,Zha:10,tha:11,Wha:12,Vha:13,Dha:43,Pha:14,Eha:15,cia:47,Gha:46,Lha:16,Kha:17,pha:18,Tha:19,sha:20,Uha:21,dia:22,aia:23,bia:24,rha:25,nha:26,Xha:27,Iha:28,Nha:38,Oha:39,Mha:49,Sha:5,Fha:6,uha:7,zha:8,Jha:29,Rha:30,Hha:31,iha:32,Aha:33,yha:34,wha:35,gia:36,Cha:37,fia:40,Bha:41,jha:44,xha:45,qha:48};var PKa={kia:0,jia:1,hia:2,iia:3};var NKa={pta:0,lta:1,kta:2,nta:3,mta:4};var tib={Sta:0,Qta:1,Nta:2,Rta:3,Ota:4,Pta:5};var uib={Vta:0,Tta:1,Uta:2};var vib={eua:0,cua:1,Zta:2,aua:3,Yta:4};var wib={hua:0,fua:1,gua:2,iua:3};var xib={qua:0,jua:1,pua:2,oua:3,nua:4,kua:5};var yib={wua:0,vua:1,rua:2};var zib={uua:0,sua:1,tua:2};var Aib={zua:0,xua:1,yua:2};var Bib={Nua:0,Jua:1,Iua:2,Dua:3,Hua:4,Bua:5,Cua:6,Kua:7,Eua:8,Lua:9,Gua:10,Aua:11,Fua:12,Mua:13};var Cib={Sua:0,Qua:1,Rua:2,Pua:3,Oua:4};var MKa={rLa:0,NKa:1,OKa:2,ZJa:3,EKa:4,PKa:5,FKa:6,aKa:7,QKa:8,SJa:9,TJa:10,iKa:11,YJa:12,bKa:13,HKa:14,gKa:15,RJa:16,gLa:17,CKa:18,cKa:19,KKa:20,IKa:21,JKa:22,QJa:23,pLa:25,fLa:26,WLa:61,uKa:35,mKa:36,kKa:37,qKa:38,pKa:93,sKa:39,rKa:40,yKa:41,mLa:97,nLa:106,oLa:102,vKa:42,tKa:43,zKa:44,AKa:45,VJa:24,WJa:27,XJa:28,OLa:29,RLa:75,PLa:104,QLa:30,ILa:98,LLa:108,JLa:105,KLa:89,SLa:31,TLa:86,MLa:32,NLa:91,wLa:51,yLa:52,HLa:62,ALa:70,ELa:63,CLa:64,xLa:65,GLa:66,zLa:71,DLa:67,BLa:68,FLa:69,VLa:33,wKa:46,
xKa:47,hLa:49,iLa:50,jLa:94,ZKa:77,SKa:78,RKa:79,TKa:80,GKa:53,sLa:54,uLa:55,tLa:56,bLa:112,aLa:57,cLa:101,eLa:110,dLa:96,vLa:58,LKa:59,MKa:60,UKa:72,VKa:107,YKa:84,WKa:92,eKa:73,kLa:74,UJa:76,qLa:81,lKa:82,lLa:83,nKa:85,oKa:95,ULa:87,DKa:88,hKa:90,XKa:99,jKa:100,dKa:103,fKa:109,BKa:111};var QKa={s1:0,rsa:1,PJa:2,Zsa:3,x4:4,y4:5,H2a:6,x3a:7,n_a:8,K4:9,ssa:10,oia:11,ria:12,cib:13,Fia:14,Hia:15,zia:16,Aia:17,sia:18,gpa:19,fxa:20,LGa:21,BHa:22,L4:23,Iab:24,mia:25,zSa:26,ySa:47,B4:27,fpa:28,G2a:29,NCa:30,KGa:31,Qsa:32,Tgb:33,Mgb:34,Jgb:35,Rgb:36,Sgb:37,Ogb:38,Pgb:39,Qgb:40,Lgb:41,Kgb:42,xpa:43,p4:44,xoa:45,b1:46,sea:48,K1:49,Cab:50,cwa:51,UOa:52,zkb:53};var Dib={gYa:0,VXa:1,aYa:2,YXa:3,ZXa:4,UXa:5,eYa:6,fYa:7,TXa:8,cYa:9,WXa:10,XXa:11,bYa:12,dYa:13};var Eib={lYa:0,mYa:1,hYa:2,iYa:3,kYa:4,jYa:5};var LKa={MYa:0,IYa:1,DYa:2,EYa:3,FYa:21,yYa:4,sYa:5,vYa:6,uYa:7,xYa:8,tYa:24,LYa:9,rYa:10,KYa:11,JYa:12,CYa:22,HYa:13,GYa:20,zYa:14,BYa:15,AYa:16,qYa:17,pYa:19,wYa:18,oYa:23};var SKa={D7a:0,x7a:1,y7a:14,A7a:15,C7a:20,B7a:21,l7a:2,t7a:3,q7a:4,r7a:5,i7a:6,u7a:7,p7a:8,m7a:9,k7a:10,w7a:11,s7a:12,v7a:13,j7a:16,z7a:17,o7a:18,n7a:19};var Fib={P7a:0,O7a:1,H7a:2,I7a:3,M7a:4,L7a:5,N7a:6,J7a:7,K7a:8};var TKa={Ucb:0,Rcb:1,Tcb:2,Scb:3,Lcb:4,Pcb:5,Ocb:6,Ncb:8,Mcb:9,Qcb:7};var AP={teb:0,Vcb:1,Bdb:2,neb:3,ieb:4,edb:5,Mdb:6,rdb:7,Tdb:8,Jdb:9,geb:10,keb:11,Vdb:12,fdb:13,Kdb:14,pdb:15,cdb:16,Hdb:17,Udb:18,jeb:19,mdb:20,udb:21,reb:22,qeb:57,tdb:23,ldb:24,ddb:25,seb:26,Fdb:27,leb:28,meb:29,Odb:30,peb:31,odb:32,Wdb:33,ydb:34,Adb:35,Idb:36,Gdb:37,Ydb:38,Ldb:39,ueb:40,vdb:41,wdb:42,xdb:43,adb:44,Zcb:45,Ycb:46,Wcb:58,Xcb:59,eeb:47,feb:48,Pdb:67,Qdb:68,qdb:49,Xdb:50,beb:51,Zdb:52,Ddb:53,jdb:54,oeb:55,zdb:56,Rdb:60,Cdb:61,sdb:62,heb:63,ndb:64,Edb:69,gdb:65,bdb:66,idb:70,hdb:71,
Ndb:74,kdb:72,Sdb:73};g.w(iz,T);g.w(jz,T);g.w(kz,T);kz.prototype.Mk=function(){return g.Pj(this,1)};g.w(lz,T);g.w(mz,T);g.w(nz,T);var VKa=[1,2];g.w(oz,T);oz.prototype.getType=function(){return Qj(this,1)};
var UKa=[3,4];g.w(pz,T);g.k=pz.prototype;g.k.gz=function(){return g.Pj(this,1)};
g.k.d5=function(a,b){return Ij(this,2,oz,a,b)};
g.k.e5=function(a,b){return Ij(this,3,oz,a,b)};
g.k.c5=function(a,b){return Ij(this,4,oz,a,b)};
g.k.g5=function(a,b){return Ij(this,5,oz,a,b)};
g.k.f5=function(a,b){return Ij(this,6,oz,a,b)};
pz.xb=[2,3,4,5,6];g.w(qz,T);qz.prototype.getType=function(){return Qj(this,2)};
qz.prototype.j=function(a,b){return yj(this,5,Zh,a,b)};
qz.xb=[5];g.w(rz,T);rz.prototype.B=function(a,b){return yj(this,2,Zh,a,b)};
rz.prototype.j=function(a,b){return Ij(this,4,oz,a,b)};
rz.prototype.D=function(a,b){return Ij(this,5,oz,a,b)};
rz.prototype.C=function(a,b){return Ij(this,6,oz,a,b)};
rz.xb=[2,4,5,6];g.w(sz,T);sz.prototype.getType=function(){return Qj(this,2)};g.w(tz,T);tz.prototype.j=function(a,b){return Ij(this,1,sz,a,b)};
tz.xb=[1];g.w(uz,T);g.w(vz,T);vz.prototype.j=function(a,b){return yj(this,1,Zh,a,b)};
vz.xb=[1];g.w(wz,T);wz.prototype.j=function(a,b){return yj(this,1,Zh,a,b)};
wz.prototype.B=function(a,b){return yj(this,2,Zh,a,b)};
wz.xb=[1,2];g.w(xz,T);xz.prototype.j=function(a,b){return Ij(this,2,vz,a,b)};
xz.xb=[2];g.w(yz,T);g.w(zz,T);g.w(Az,T);Az.prototype.Mk=function(){return g.Pj(this,1)};
Az.prototype.j=function(a,b){return Ij(this,3,zz,a,b)};
Az.xb=[3];g.w(Bz,T);Bz.prototype.Wg=function(){return Qj(this,1)};g.w(Cz,T);Cz.prototype.tf=function(){return Qj(this,2)};g.w(Dz,T);g.w(Ez,T);g.w(Fz,T);Fz.prototype.getType=function(){return Qj(this,1)};
Fz.prototype.Mk=function(){return g.Pj(this,8)};g.w(Gz,T);Gz.prototype.Mk=function(){return g.Pj(this,1)};g.w(Hz,T);Hz.prototype.Mk=function(){return g.Pj(this,1)};g.w(Iz,T);Iz.prototype.Mk=function(){return g.Pj(this,1)};g.w(Jz,T);Jz.prototype.Mk=function(){return g.Pj(this,2)};
Jz.prototype.FH=function(){return g.Pj(this,4)};g.w(Kz,T);Kz.prototype.Mk=function(){return g.Pj(this,1)};g.w(Lz,T);Lz.prototype.Mk=function(){return g.Pj(this,1)};g.w(Mz,T);g.w(Nz,T);g.w(Oz,T);g.w(Pz,T);Pz.prototype.Mk=function(){return g.Pj(this,2)};g.w(Qz,T);g.w(Rz,T);g.w(Sz,T);var U2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];g.w(Tz,T);g.w(Uz,T);g.w(Vz,T);g.w(Wz,T);g.w(Xz,T);Xz.prototype.getState=function(){return Qj(this,1)};
Xz.prototype.Dc=function(a){return R(this,1,a)};g.w(ema,T);g.w(Yz,T);Yz.prototype.j=function(a,b){return Ij(this,1,ema,a,b)};
Yz.xb=[1];g.w(Zz,T);Zz.prototype.j=function(a,b){return Ij(this,2,Yz,a,b)};
Zz.prototype.B=function(a,b){return Ij(this,3,Wz,a,b)};
Zz.xb=[2,3];g.w($z,T);$z.prototype.B=function(a,b){return Ij(this,1,Zz,a,b)};
$z.prototype.j=function(a,b){return Ij(this,2,Vz,a,b)};
$z.xb=[1,2];g.w(fma,T);g.w(aA,T);g.w(gma,T);g.w(bA,T);bA.prototype.Vl=function(){return kea(this,4)};g.w(cA,T);cA.prototype.getStatus=function(){return Mj(this,2)};g.w(hma,T);g.w(dA,T);dA.prototype.setConfig=function(a){return Fj(this,hma,2,a)};g.w(ima,T);g.w(eA,T);eA.prototype.getValue=function(){return g.Pj(this,2)};g.w(jma,T);g.w(kma,T);g.w(lma,T);g.w(fA,T);fA.prototype.j=function(a,b){return Ij(this,3,lma,a,b)};
fA.xb=[3];g.w(mma,T);g.w(gA,T);g.w(hA,T);g.k=hA.prototype;g.k.getSettings=function(){return g.Ej(this,gA,1)};
g.k.hh=function(a){return Fj(this,gA,1,a)};
g.k.getState=function(){return Qj(this,2)};
g.k.Dc=function(a){return R(this,2,a)};
g.k.Vl=function(){return Oj(this,3)};g.w(nma,T);g.w(iA,T);iA.prototype.Vl=function(){return Oj(this,4)};g.w(oma,T);g.w(jA,T);g.k=jA.prototype;g.k.getType=function(){return Qj(this,1)};
g.k.Y4=function(a,b){return Ij(this,2,oma,a,b)};
g.k.Vl=function(){return Oj(this,6)};
g.k.getPlaybackRate=function(){return lea(this,7)};
g.k.setPlaybackRate=function(a){return rk(this,7,a)};
g.k.uR=function(a){Rj(this,8,a)};
jA.xb=[2];g.w(kA,T);kA.prototype.Vl=function(){return Oj(this,3)};g.w(lA,T);lA.prototype.j=function(a,b){return Ij(this,1,jA,a,b)};
lA.prototype.B=function(a,b){return Ij(this,2,kA,a,b)};
lA.xb=[1,2];g.w(mA,T);mA.prototype.getState=function(){return Qj(this,1)};
mA.prototype.Dc=function(a){return R(this,1,a)};g.w(g.nA,T);g.w(g.oA,T);g.oA.prototype.Xw=function(a){return R(this,1,a)};
g.oA.prototype.j=function(a,b){return Ij(this,4,lA,a,b)};
g.oA.prototype.Fv=ca(1);g.oA.xb=[4];g.w(pA,T);pA.prototype.Ff=function(){return Qj(this,4)};g.w(qA,T);qA.prototype.j=function(a,b){return yj(this,1,Zh,a,b)};
qA.prototype.Fg=
qA.xb=[1];g.w(rA,T);g.k=rA.prototype;g.k.me=function(){return g.Pj(this,1)};
g.k.setVideoId=function(a){return O(this,1,a)};
g.k.getPlaylistId=function(){return g.Pj(this,2)};
g.k.getPlaylistIndex=function(){return Nj(this,3)};
g.k.Hh=function(){return g.Pj(this,4)};
g.k.getPlayerType=function(){return Qj(this,5)};g.w(pma,T);g.w(sA,T);sA.prototype.j=function(a,b){return Ij(this,4,eA,a,b)};
sA.prototype.B=function(a,b){return yj(this,5,Jda,a,b)};
sA.xb=[4,5];g.w(tA,T);g.w(uA,T);g.w(qma,T);g.w(vA,T);vA.prototype.Ff=function(){return g.Pj(this,2)};g.w(wA,T);wA.prototype.j=function(a,b){return Ij(this,1,vA,a,b)};
wA.xb=[1];g.w(xA,T);xA.prototype.Ff=function(){return g.Pj(this,2)};g.w(yA,T);yA.prototype.j=function(a,b){return Ij(this,1,xA,a,b)};
yA.xb=[1];g.w(rma,T);var lKa=[1,2,3];g.w(zA,T);zA.prototype.j=function(a,b){return Ij(this,1,rma,a,b)};
zA.xb=[1];g.w(AA,T);var YF=[2,3,4,5];g.w(BA,T);g.w(CA,T);g.w(DA,T);g.w(sma,T);g.w(EA,T);EA.prototype.Dk=function(a,b){return Ij(this,5,sma,a,b)};
EA.xb=[5];g.w(tma,T);g.w(FA,T);FA.prototype.j=function(a,b){return Ij(this,3,tma,a,b)};
FA.prototype.B=function(a,b){return yj(this,4,Zh,a,b)};
FA.xb=[3,4];g.w(uma,T);g.w(GA,T);GA.prototype.B=function(a,b){return Ij(this,19,Qy,a,b)};
GA.prototype.j=function(a,b){return Ij(this,20,Py,a,b)};
GA.xb=[19,20];g.w(HA,T);g.w(vma,T);g.w(IA,T);IA.prototype.j=function(a,b){return Ij(this,2,HA,a,b)};
IA.prototype.setConfig=
IA.prototype.C=function(a,b){return Ij(this,5,HA,a,b)};
IA.prototype.B=function(a,b){return Ij(this,9,cz,a,b)};
IA.xb=[2,5,9];g.w(JA,T);JA.prototype.Vl=function(){return kea(this,2)};g.w(KA,T);KA.prototype.j=function(a,b){return Ij(this,9,JA,a,b)};
KA.xb=[9];g.w(wma,T);g.w(xma,T);g.w(yma,T);g.w(zma,T);g.w(LA,T);LA.prototype.getType=function(){return Qj(this,2)};
LA.prototype.j=function(a,b){return Ij(this,3,zma,a,b)};
LA.xb=[3];g.w(MA,T);MA.prototype.j=function(a,b){return Ij(this,10,fma,a,b)};
MA.prototype.B=function(a,b){return Ij(this,17,KA,a,b)};
MA.xb=[10,17];g.w(Ama,T);var ZJa={Nna:0,Mna:1,Jna:2,Kna:3,Lna:4};var Gib={Woa:0,Soa:1,Uoa:2,Toa:3,Voa:4};var Hib={epa:0,bpa:1,apa:2,cpa:3,Zoa:4,Xoa:5,Yoa:6,dpa:7};g.w(NA,T);g.k=NA.prototype;g.k.Ff=function(){return g.Pj(this,2)};
g.k.Mk=function(){return g.Pj(this,3)};
g.k.X4=function(a,b){return yj(this,10,Zh,a,b)};
g.k.FH=function(){return g.Pj(this,7)};
g.k.Vl=function(){return Mj(this,11)};
NA.xb=[10];var pJa={ipa:0,hpa:1,kpa:2,jpa:3};var oJa={upa:0,tpa:1,mpa:2,npa:3,opa:4,ppa:5,rpa:6,spa:7,lpa:8,qpa:9};var EJa={bxa:0,cxa:3,dxa:1,axa:2};var kJa={qya:0,lxa:1,uxa:2,wxa:3,zxa:4,Axa:5,Fxa:6,Gxa:7,Hxa:8,Ixa:9,Jxa:10,Mxa:11,Nxa:12,Oxa:13,Pxa:14,Qxa:15,Vxa:16,Zxa:17,aya:18,dya:19,fya:20,hya:21,iya:22,kya:23,mya:24,rya:25,sya:26,Xxa:27,nya:28,Yxa:29,Lxa:30,Cxa:31,Kxa:32,wya:33,yya:34,kxa:35,rxa:36,oya:37,pya:38,vxa:39,Rxa:40,Sxa:51,qxa:41,mxa:42,xxa:43,Txa:44,sxa:45,Wxa:46,gya:47,pxa:48,cya:49,Uxa:50,txa:52,yxa:53,Bxa:54,jya:55,lya:56,uya:57,tya:58,eya:59,nxa:60,Dxa:61,oxa:62,vya:63,xya:64,bya:65,Exa:66};var nJa={YBa:0,Zya:1,NAa:2,VBa:3,qCa:4,GAa:5,OAa:6,iza:7,lza:8,kza:9,cBa:10,FAa:11,EAa:12,mBa:13,vBa:14,WBa:15,lCa:16,hza:17,Iya:18,Wza:19,wza:20,LAa:21,SAa:22,XBa:23,Kya:24,Nya:25,hBa:26,Fza:116,Zza:27,aAa:28,bBa:29,cza:30,Sza:31,KAa:32,aBa:33,Gya:34,Hya:35,Eya:36,Fya:37,PAa:38,QAa:39,pBa:40,gza:41,oCa:42,fBa:43,ZAa:44,dBa:45,HAa:46,eBa:47,Nza:48,rza:49,qza:160,sCa:50,Yza:51,Xza:52,tza:53,uza:54,SBa:55,RBa:56,QBa:57,TBa:58,Cza:59,Oza:60,kCa:61,lBa:62,gBa:63,jBa:64,RAa:65,Uza:69,Vza:121,rCa:70,Rza:71,
MBa:72,NBa:73,nBa:74,oBa:75,Qza:76,Pza:77,YAa:78,XAa:80,Bya:81,Sya:115,Qya:120,Rya:122,Yya:123,cAa:124,bAa:125,Pya:126,zBa:127,xBa:128,yBa:129,pCa:130,Dya:131,Oya:132,Lya:133,Tza:152,Mza:178,vza:179,iBa:181,Lza:193,fza:198,fAa:82,hAa:83,wAa:84,iAa:85,CAa:86,gAa:87,kAa:88,qAa:89,tAa:90,yAa:91,vAa:92,xAa:93,eAa:94,lAa:95,uAa:96,nAa:97,mAa:98,dAa:99,jAa:100,zAa:101,rAa:102,DAa:103,AAa:104,oAa:105,BAa:106,sAa:107,pAa:118,aCa:108,eCa:109,dCa:110,cCa:111,fCa:112,bCa:113,ZBa:114,Cya:134,Mya:138,Tya:139,
Uya:140,Xya:141,dza:142,jza:144,mza:165,eza:143,sza:135,yza:145,Aza:146,MAa:147,hCa:148,jCa:149,mCa:150,PBa:153,zya:154,iCa:155,nCa:156,Jya:157,xza:158,ABa:159,Hza:161,Aya:162,wBa:163,UBa:164,Gza:166,Bza:167,WAa:168,Eza:169,Dza:170,VAa:171,kBa:172,Iza:173,Wya:174,Jza:175,uBa:176,Kza:177,aza:182,LBa:183,KBa:184,JAa:136,IAa:137,OBa:151,oza:180,pza:190,nza:192,rBa:185,tBa:186,sBa:187,qBa:191,Vya:188,gCa:189,TAa:194,UAa:199,GBa:66,CBa:67,DBa:117,HBa:68,JBa:197,EBa:195,IBa:196,BBa:201,FBa:202,bza:200};var Iib={qsa:0,nsa:1,lsa:2,msa:3};var NLa={m5a:0,X5a:1,e6a:2,H5a:3,I5a:4,J5a:5,g6a:39,h6a:6,b6a:7,W5a:50,f6a:69,Y5a:70,Z5a:71,R5a:74,K5a:32,L5a:44,M5a:33,d6a:8,N5a:9,O5a:10,Q5a:11,P5a:12,T5a:73,U5a:77,V5a:78,a6a:84,S5a:85,n5a:56,o5a:57,p5a:58,q5a:59,r5a:60,s5a:61,I6a:13,J6a:14,K6a:15,S6a:16,N6a:17,U6a:18,T6a:19,P6a:20,Q6a:21,L6a:34,R6a:35,O6a:36,M6a:49,w5a:37,x5a:38,z5a:40,B5a:41,A5a:42,C5a:43,D5a:51,y5a:52,v5a:67,t5a:22,u5a:23,l6a:24,r6a:25,s6a:62,q6a:26,o6a:27,k6a:48,i6a:53,j6a:63,t6a:66,n6a:54,p6a:68,u6a:72,m6a:76,F5a:64,E5a:65,
v6a:28,y6a:29,x6a:30,w6a:31,F6a:45,H6a:46,G6a:47,E6a:83,C6a:55,A6a:79,z6a:80,B6a:81,D6a:82,G5a:86};var KLa={W6a:0,X6a:1,V6a:2};var PLa={a7a:0,Z6a:1,Y6a:2};var OLa={h7a:0,f7a:1,d7a:2,g7a:3,b7a:4,c7a:5,e7a:6};var tLa={wab:0,vab:1,uab:2};var sLa={Aab:0,yab:1,xab:2,zab:3};g.w(Bma,T);g.w(Cma,T);g.w(Dma,T);g.w(Ema,T);g.w(Fma,T);g.w(OA,T);OA.prototype.hasFeature=function(){return null!=$h(Wi(this,2))};g.w(PA,T);PA.prototype.Hh=function(){return g.Pj(this,7)};g.w(Gma,T);g.w(Hma,T);g.w(QA,T);QA.prototype.getName=function(){return Qj(this,1)};
QA.prototype.getStatus=function(){return Qj(this,2)};
QA.prototype.getState=function(){return Qj(this,3)};
QA.prototype.Dc=function(a){return R(this,3,a)};g.w(RA,T);RA.prototype.j=function(a,b){return Ij(this,2,QA,a,b)};
RA.xb=[2];g.w(Ima,T);g.w(SA,T);SA.prototype.j=function(a,b){return Ij(this,1,RA,a,b)};
SA.prototype.B=function(a,b){return Ij(this,2,RA,a,b)};
SA.xb=[1,2];var JLa={zJa:0,xJa:1,yJa:2};var qLa={RPa:0,LPa:1,OPa:2,SPa:3,MPa:4,NPa:5,PPa:6,QPa:7};var rLa={VPa:0,UPa:1,TPa:2};var pLa={ZTa:0,aUa:1,YTa:2};var oLa={qUa:0,dUa:1,mUa:2,rUa:3,oUa:4,gUa:5,cUa:6,eUa:7,fUa:8,pUa:9,nUa:10,hUa:11,kUa:12,lUa:13,jUa:14,iUa:15,bUa:16};var lLa={Y9a:0,U9a:1,X9a:2,W9a:3,V9a:4};var kLa={c$a:0,a$a:1,b$a:2,Z9a:3};var mLa={j$a:0,f$a:1,h$a:2,d$a:3,i$a:4,e$a:5,g$a:6};var jLa={s$a:0,u$a:1,t$a:2,n$a:3,l$a:4,m$a:5,x$a:6,o$a:7,y$a:8,q$a:9,r$a:10,k$a:11,p$a:12,w$a:13,v$a:14};var nLa={B$a:0,A$a:1,z$a:2};var xLa={Keb:0,Ieb:1,Heb:2,Ceb:3,Eeb:4,Feb:5,Beb:6,Deb:7,Jeb:8,Meb:9,Geb:10,zeb:11,Aeb:12,Leb:13};var wLa={Oeb:0,Neb:1};var GLa={Reb:0,Seb:1,Peb:2,Qeb:3};var ELa={ofb:0,Teb:1,nfb:2,mfb:3,sfb:4,rfb:5,lfb:19,Xeb:6,Zeb:7,hfb:8,Yeb:24,kfb:25,ifb:20,bfb:21,Veb:22,jfb:23,Ueb:9,Web:10,afb:11,cfb:12,dfb:13,efb:14,gfb:15,ffb:16,pfb:17,qfb:18};var yLa={wfb:0,vfb:1,xfb:2,tfb:3,ufb:4};var uLa={Mfb:0,Ffb:1,Afb:2,Jfb:3,Efb:4,Lfb:5,zfb:6,Bfb:7,Gfb:8,Cfb:9,Hfb:10,Ifb:11,Dfb:12,Kfb:13};var ALa={Tfb:0,Rfb:1,Pfb:2,Qfb:3,Sfb:4};var zLa={Xfb:0,Ufb:1,Vfb:2,Wfb:3};var vLa={bgb:0,agb:1,Zfb:2};var FLa={egb:0,cgb:1,dgb:2};var HLa={Agb:0,zgb:1,ygb:2,wgb:3,xgb:4};var ILa={Egb:0,Cgb:1,Bgb:2,Dgb:3};var Jib={Ksa:0,Hsa:1,Isa:2,Fsa:3,Jsa:4,Gsa:5};var hJa={qea:0,oea:1,pea:2};var HHa={G4:0,YGa:1,LEa:2,MEa:3,AJa:4,GUa:5,eoa:6};var xP={uva:0,ava:101,gva:102,Vua:103,Yua:104,dva:105,eva:106,hva:107,iva:108,kva:109,mva:110,tva:111,fva:112,bva:113,jva:114,ova:115,vva:116,Xua:117,cva:118,wva:119,pva:120,qva:121,Zua:122,Wua:123,nva:124,sva:125,rva:126};var jKa={Fva:0,Cva:1,Dva:2,Ava:3,Bva:4,zva:5,Eva:6};var Kib={ywa:0,xwa:1,vwa:2,wwa:3};var Lib={Jwa:0,Hwa:1,Awa:2,Gwa:3,zwa:4,Dwa:5,Fwa:6,Iwa:7,Ewa:8,Cwa:9,Bwa:10};var Mib={Lwa:0,Mwa:1,Kwa:2};g.w(Jma,T);g.w(Kma,T);g.w(TA,T);TA.prototype.getState=function(){return Mj(this,1)};
TA.prototype.Dc=function(a){return Sj(this,1,a)};g.w(Lma,T);g.w(Mma,T);g.w(Nma,T);g.w(Oma,T);g.w(UA,T);UA.prototype.me=function(){return g.Pj(this,1)};
UA.prototype.setVideoId=function(a){return O(this,1,a)};g.w(VA,T);VA.prototype.setTrackingParams=function(a){return tk(this,1,a)};g.w(WA,T);WA.prototype.hasVe=function(){return Zi(this,VA,2)};g.w(XA,T);XA.prototype.hasFeature=g.w(Pma,T);g.w(Qma,T);g.w(YA,T);YA.prototype.Ff=function(){return Qj(this,2)};
var Nib=[1];g.w(Rma,T);g.w(Sma,T);g.w(Tma,T);g.w(Uma,T);g.w(ZA,T);ZA.prototype.getVideoAspectRatio=function(){return lea(this,2)};g.w(Vma,T);g.w(Wma,T);g.w(Xma,T);g.w(Yma,T);g.w(Zma,T);g.w($ma,T);g.w(ana,T);g.w(bna,T);g.w(cna,T);g.w(dna,T);g.w($A,T);$A.prototype.getId=function(){return g.Pj(this,1)};g.w(ena,T);g.w(aB,T);g.w(bB,T);bB.prototype.j=function(a,b){return Ij(this,5,aB,a,b)};
bB.xb=[5];g.w(fna,T);g.w(gna,T);g.w(cB,T);cB.prototype.Hh=function(){return g.Pj(this,30)};
cB.prototype.j=function(a,b){return Ij(this,27,gna,a,b)};
cB.xb=[27];g.w(hna,T);g.w(ina,T);g.w(jna,T);g.w(kna,T);var V2=[1,2,3,4];g.w(lna,T);g.w(mna,T);g.w(nna,T);g.w(ona,T);g.w(dB,T);dB.prototype.Vl=function(){return Oj(this,2)};g.w(pna,T);g.w(qna,T);g.w(rna,T);g.w(eB,T);g.w(sna,T);g.w(tna,T);g.w(fB,T);fB.prototype.j=function(a,b){return yj(this,1,Zh,a,b)};
fB.xb=[1];g.w(gB,T);gB.prototype.Ff=function(){return Qj(this,3)};g.w(una,T);g.w(hB,T);g.w(iB,T);g.w(vna,T);g.w(jB,T);jB.prototype.j=function(a,b){return Ij(this,2,iB,a,b)};
jB.prototype.B=function(a,b){return Ij(this,3,iB,a,b)};
jB.xb=[2,3];g.w(wna,T);g.w(kB,T);g.w(xna,T);g.w(lB,T);lB.prototype.me=function(){return g.Ej(this,kB,Cj(this,W2,2))};
lB.prototype.setVideoId=
lB.prototype.getPlaylistId=
var W2=[2,3,4,5,9];g.w(mB,T);mB.prototype.getType=function(){return Qj(this,1)};
mB.prototype.me=function(){return g.Pj(this,3)};
mB.prototype.setVideoId=function(a){return O(this,3,a)};g.w(yna,T);g.w(zna,T);g.w(pB,T);var hLa=[3];g.w(Ana,T);g.w(Bna,T);g.w(qB,T);qB.prototype.tf=function(){return g.Pj(this,2)};g.w(Cna,T);g.w(Dna,T);var Oib=[1];g.w(Ena,T);g.w(Fna,T);g.w(Gna,T);g.w(Hna,T);g.w(Ina,T);g.w(Jna,T);g.w(Kna,T);g.w(Lna,T);g.w(rB,T);rB.prototype.getStarted=g.w(Mna,T);g.w(Nna,T);g.w(sB,T);sB.prototype.getDuration=function(){return Mj(this,2)};
sB.prototype.ql=g.w(Ona,T);g.w(tB,T);g.w(uB,T);uB.prototype.Hh=function(){return g.Pj(this,1)};g.w(Pna,T);g.w(Qna,T);g.w(vB,T);vB.prototype.gf=function(){return g.Ej(this,Pna,8)};
vB.prototype.L7=function(){return Zi(this,Pna,8)};
vB.prototype.getVideoData=
vB.prototype.CF=
vB.xb=[4];g.w(Rna,T);g.w(wB,T);wB.prototype.j=function(a){return O(this,2,a)};g.w(xB,T);xB.prototype.j=function(a){return O(this,1,a)};
xB.xb=[3];g.w(yB,T);yB.prototype.j=function(a){return O(this,1,a)};
yB.prototype.hasVe=function(){return Zi(this,VA,2)};g.w(zB,T);zB.prototype.j=function(a){return O(this,1,a)};
zB.prototype.hasVe=function(){return Zi(this,VA,2)};g.w(AB,T);AB.prototype.j=function(a){return O(this,1,a)};
AB.prototype.hasVe=function(){return Zi(this,VA,2)};g.w(BB,T);BB.prototype.j=function(a){return O(this,1,a)};
BB.prototype.hasVe=function(){return Zi(this,VA,2)};g.w(Vna,T);g.w(CB,T);CB.prototype.getId=function(){return g.Pj(this,2)};g.w(FB,T);FB.prototype.getVisibilityState=function(){return Qj(this,5)};
FB.xb=[16];g.w(Wna,T);g.w(GB,T);GB.prototype.getPlayerType=function(){return Qj(this,7)};
GB.prototype.me=function(){return g.Pj(this,19)};
GB.prototype.setVideoId=function(a){return O(this,19,a)};
GB.xb=[112,83,118,68];g.w(Xna,T);g.w(Yna,T);g.w(IB,T);IB.prototype.me=function(){return g.Pj(this,1)};
IB.prototype.setVideoId=function(a){return O(this,1,a)};
IB.prototype.j=function(a,b){return Ij(this,9,Yna,a,b)};
IB.xb=[9];g.w(JB,T);JB.prototype.j=function(a,b){return Ij(this,3,IB,a,b)};
JB.xb=[3];g.w(KB,T);KB.prototype.me=function(){return g.Pj(this,1)};
KB.prototype.setVideoId=function(a){return O(this,1,a)};g.w(Zna,T);g.w(LB,T);LB.prototype.j=function(a,b){return Ij(this,1,KB,a,b)};
LB.prototype.B=function(a,b){return Ij(this,2,Zna,a,b)};
LB.xb=[1,2];g.w($na,T);g.w(aoa,T);g.w(boa,T);g.w(MB,T);MB.prototype.getId=function(){return g.Pj(this,1)};
MB.prototype.j=function(a,b){return yj(this,2,ji,a,b)};
MB.prototype.setVideoIds=
MB.xb=[2];g.w(coa,T);g.w(doa,T);g.w(eoa,T);g.w(NB,T);NB.prototype.j=function(a,b){return yj(this,9,Zh,a,b)};
NB.xb=[9];g.w(foa,T);g.w(goa,T);g.w(OB,T);OB.prototype.getId=function(){return g.Pj(this,1)};
OB.prototype.j=function(a,b){return Ij(this,14,eoa,a,b)};
OB.prototype.B=function(a,b){return Ij(this,17,foa,a,b)};
OB.xb=[14,17];g.w(PB,T);PB.prototype.B=function(a,b){return Ij(this,1,OB,a,b)};
PB.prototype.j=function(a,b){return Ij(this,2,MB,a,b)};
PB.xb=[1,2];g.w(hoa,T);g.w(QB,T);QB.prototype.getOrigin=
QB.prototype.Wg=function(){return Mj(this,6)};g.w(ioa,T);g.w(joa,T);g.w(RB,T);
var OF=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];var Pib={Yva:0,Vva:1,Uva:2,Xva:3,Wva:4,Sva:5,Tva:6};var Qib={BDa:0,mDa:1,pDa:2,nDa:3,sDa:4,oDa:5,XCa:6,xDa:7,gDa:8,QCa:9,hDa:10,tDa:11,qDa:12,ZCa:13,VCa:14,YCa:15,ADa:16,RCa:17,SCa:18,yDa:19,aDa:20,WCa:21,wDa:22,HDa:23,GDa:24,CDa:25,iDa:26,rDa:27,IDa:28,bDa:29,OCa:30,EDa:31,DDa:32,fDa:33,MDa:34,eDa:35,uDa:36,LDa:37,jDa:38,vDa:39,dDa:40,cDa:41,UCa:42,lDa:43,KDa:44,zDa:45,FDa:46,kDa:47,PCa:48,TCa:49,JDa:50};var Rib={xEa:0,iEa:1,lEa:2,jEa:3,oEa:4,kEa:5,XDa:6,tEa:7,cEa:8,PDa:9,dEa:10,pEa:11,mEa:12,ZDa:13,VDa:14,YDa:15,wEa:16,RDa:17,SDa:18,uEa:19,aEa:20,WDa:21,sEa:22,CEa:23,BEa:24,yEa:25,eEa:26,nEa:27,DEa:28,bEa:29,NDa:30,zEa:31,QDa:32,HEa:33,qEa:34,GEa:35,fEa:36,rEa:37,UDa:38,hEa:39,FEa:40,vEa:41,AEa:42,gEa:43,ODa:44,TDa:45,EEa:46};var Sib={BGa:0,AGa:1,CGa:2};var zJa={pFa:0,nFa:1,kFa:2,oFa:3,lFa:4,mFa:5};var Tib={BFa:0,zFa:1,vFa:3,xFa:4,yFa:5,AFa:6,wFa:7};var Uib={HFa:0,EFa:1,GFa:2,FFa:3,DFa:4,CFa:5};var Vib={rGa:0,sGa:1,qGa:2,pGa:3,oGa:4};var Wib={vGa:0,tGa:1,uGa:2};var Xib={HGa:0,IGa:1,JGa:2,GGa:3,EGa:4,FGa:5};var zva={sHa:0,ZGa:1,fHa:2,gHa:4,mHa:8,hHa:16,iHa:32,rHa:64,qHa:128,bHa:256,dHa:512,kHa:1024,cHa:2048,eHa:4096,aHa:8192,jHa:16384,nHa:32768,lHa:65536,oHa:131072,pHa:262144};var iKa={WHa:0,VHa:1,UHa:2,THa:4};var hKa={bIa:0,YHa:1,ZHa:2,cIa:3,aIa:4,XHa:5};var Yib={zCa:0,yCa:1,xCa:2};var Zib={ZPa:0,YPa:1,XPa:2};var $ib={RQa:0,xQa:1,PQa:2,BQa:3,HQa:4,TQa:5,QQa:6,nQa:7,mQa:8,lQa:9,rQa:10,wQa:11,vQa:12,oQa:13,IQa:14,DQa:15,FQa:16,dQa:17,OQa:18,hQa:19,EQa:20,cQa:21,GQa:22,uQa:23,eQa:24,gQa:25,LQa:26,SQa:27,MQa:28,CQa:29,pQa:30,sQa:31,tQa:32,kQa:33,UQa:34,iQa:35,qQa:36,JQa:37,fQa:38,aQa:39,jQa:41,AQa:42,KQa:43,NQa:44,yQa:45,zQa:46,bQa:47};var ajb={YQa:0,XQa:1,WQa:2,VQa:3};var vJa={Ppa:0,Opa:1,Npa:2};var rJa={JRa:0,IRa:1,FRa:2,GRa:7,ERa:8,DRa:25,mRa:3,nRa:4,vRa:5,wRa:27,uRa:28,oRa:9,cRa:10,aRa:11,bRa:6,lRa:12,jRa:13,kRa:14,iRa:15,qRa:16,rRa:17,pRa:18,tRa:19,sRa:20,fRa:26,gRa:21,eRa:22,hRa:23,dRa:24,LRa:34,KRa:35,NRa:39,MRa:29,ARa:30,BRa:32,CRa:33,yRa:36,zRa:38,xRa:37,HRa:31};var tJa={SRa:0,PRa:1,QRa:2,RRa:3,ORa:4};var sJa={YRa:0,WRa:1,XRa:2,URa:3,VRa:4,TRa:5};var VIa={fSa:0,ZRa:1,bSa:2,aSa:3,cSa:4,dSa:5,eSa:6,gSa:7};var wJa={FSa:0,ASa:1,ESa:2,CSa:3,DSa:4,BSa:5};var yJa={QSa:0,GSa:1,KSa:2,OSa:3,PSa:4,LSa:5,MSa:6,NSa:7,ISa:8,HSa:9,JSa:10};var xJa={USa:0,RSa:1,SSa:2,TSa:3};var vKa={rwa:0,pwa:1,qwa:2,mwa:3,nwa:4,owa:5};var AKa={ZWa:0,YWa:1,RWa:2,WWa:3,SWa:4,VWa:5,XWa:6,UWa:7,TWa:8};var VJa={tXa:0,lXa:1,uXa:2,sXa:4,pXa:8,oXa:16,nXa:32,qXa:64,mXa:128,rXa:256};var wKa={MXa:0,HXa:1,LXa:2,EXa:3,wXa:4,CXa:5,xXa:6,yXa:7,AXa:8,FXa:9,JXa:10,IXa:11,KXa:12,zXa:13,BXa:14,DXa:15,GXa:16,vXa:17};var SJa={OWa:0,LWa:1,MWa:2,NWa:3};var YJa={gXa:0,iXa:1,fXa:2,bXa:3,hXa:4,cXa:5,dXa:6,eXa:7};var aJa={qgb:0,Wsa:1,JPa:2,LUa:3,NUa:4,OUa:5,IUa:6,Pab:7,eVa:8,dVa:9,JUa:10,MUa:11,wcb:12,uia:13,Cia:14,via:15,k_a:16,GWa:17,fVa:18,iVa:19,kXa:20,hVa:21,aXa:22,NXa:23,oVa:24,QWa:25,KUa:26,Mab:27,M9a:28,O2a:29,Qpa:30,xkb:31,PWa:32};var $Ia={ugb:0,tea:1,PXa:2,OXa:3,SUCCESS:4,Bab:5,ACa:6,C2a:7,uFa:9,Xsa:10,Tua:11,CANCELLED:12,N2a:13,N9a:14,S9a:15,Ngb:16};var ZIa={Kcb:0,Bcb:1,Gcb:2,Fcb:3,Ccb:4,Dcb:5,xcb:6,Jcb:7,Icb:8,Acb:9,zcb:10,Ecb:11,Hcb:12,ycb:13};var mJa={ZZa:0,NZa:1,RZa:2,PZa:3,YZa:4,QZa:5,UZa:6,TZa:7,SZa:8,OZa:9,VZa:10,WZa:11,XZa:12};var bjb={k0a:0,j0a:1,i0a:2};var cjb={n0a:0,l0a:1,m0a:2};var BJa={u2a:0,p2a:1,c2a:2,v2a:3,Y1a:4,X1a:5,d2a:6,Z1a:7,W1a:8,m2a:9,g2a:10,l2a:11,n2a:12,b2a:13,a2a:14,V1a:15,s2a:16,r2a:17,q2a:18,f2a:19,i2a:20,h2a:21,j2a:22,k2a:23,e2a:24,t2a:25,o2a:26};var AJa={B2a:0,A2a:1,z2a:2,y2a:3,w2a:4,x2a:5};var qJa={S3a:0,Q3a:1,R3a:3,N3a:4,O3a:2,P3a:5};var uJa={X3a:0,T3a:1,U3a:2,W3a:3,V3a:4,Y3a:5};var djb={f4a:0,g4a:1};var cLa={m4a:0,k4a:1,l4a:2,n4a:3};var ejb={G7a:0,E7a:1,F7a:2};var fjb={U$a:0,Q$a:1,R$a:2,S$a:3,T$a:4};var XJa={S7a:0,Q7a:1,R7a:2};var zKa={F8a:0,C8a:1,D8a:2,E8a:3};var NJa={Rma:0,Qma:1,Oma:2,Pma:3};var QJa={Gna:0,zna:1,Fna:2,Cna:3,vna:4,wna:5,una:6,Bna:7,Ena:8,yna:9,Hna:10,Ina:11,xna:12,Dna:13,Ana:14};var pKa={Poa:0,Joa:1,Moa:2,Noa:3,Loa:4,Ooa:5,Qoa:6,Koa:7};var HJa={yta:0,xta:1,zta:2};var dJa={ogb:0,Yra:1,Zra:2,Xra:3,bsa:4};var cJa={pgb:0,a0a:1,FZa:2};var sKa={JCa:0,FCa:1,BCa:2,ICa:3,DCa:4,GCa:5,ECa:6,CCa:7,HCa:8};var uKa={zGa:0,yGa:1,xGa:2};var oKa={IPa:0,HPa:1,GPa:2};var rKa={xUa:0,wUa:1,vUa:2};var nKa={t3a:0,r3a:1,s3a:2};var LJa={Fab:0,Eab:1,Dab:2};var gjb={ePa:0,aPa:1,bPa:2,cPa:3,dPa:4,fPa:5};var hjb={i_a:0,f_a:1,d_a:2,a_a:3,e_a:4,g_a:5,b_a:6,c_a:7,h_a:8,j_a:9};var ijb={Psa:0,Lsa:5,Osa:4,Msa:2,Nsa:3};var jjb={Xbb:0,zbb:1,bcb:2,ccb:3,Zbb:4,Ybb:16,acb:47,tbb:17,Abb:33,sbb:35,kbb:36,vbb:34,Wbb:38,xbb:45,Fbb:8,qbb:39,nbb:40,fbb:41,jbb:42,mbb:43,ebb:46,hbb:44,wbb:5,Ebb:6,Vbb:7,Ubb:9,gbb:10,Tbb:11,lbb:12,Sbb:13,rbb:14,Dbb:15,Cbb:18,Bbb:19,pbb:20,ubb:21,obb:22,Pbb:23,Rbb:24,Ibb:25,Qbb:26,Gbb:27,Lbb:28,Hbb:29,Kbb:30,Mbb:31,Jbb:32,Nbb:37,Obb:48};var kjb={fcb:0,ecb:1,gcb:2};var bLa={tkb:0,ekb:1,lkb:2,kkb:3,dkb:4,ukb:5,rkb:6,fkb:7,gkb:8,jkb:9,ikb:12,Zjb:10,skb:11,nkb:13,okb:14,vkb:15,mkb:16,pkb:17,akb:18,qkb:19,bkb:20,wkb:21,hkb:22};var WKa={wHa:0,uHa:1,vHa:2,tHa:3};g.w(koa,T);g.w(SB,T);SB.prototype.me=function(){return Kj(this,Cj(this,FF,1))};
SB.prototype.setVideoId=
SB.prototype.getPlaylistId=
var FF=[1,2];g.w(loa,T);loa.xb=[3];var ET=new g.Ow("changeKeyedMarkersVisibilityCommand");var ljb=new g.Ow("changeMarkersVisibilityCommand");var sSa=new g.Ow("loadMarkersCommand");var oZa=new g.Ow("productListItemRenderer");var mjb=new g.Ow("shoppingOverlayRenderer");var MSa=new g.Ow("musicEmbeddedPlayerOverlayVideoDetailsRenderer");var njb=new g.Ow("adFeedbackEndpoint");var ojb=new g.Ow("menuEndpoint");var EYa=new g.Ow("phoneDialerEndpoint");var CYa=new g.Ow("sendSmsEndpoint");var KSa=new g.Ow("copyTextEndpoint");var pjb=new g.Ow("webPlayerShareEntityServiceEndpoint");g.RG=new g.Ow("urlEndpoint");g.CT=new g.Ow("watchEndpoint");var qjb=new g.Ow("watchPlaylistEndpoint");var FKa={Mpa:0,Lpa:1,Kpa:2,Ipa:3,Jpa:4};var UJa={cVa:0,aVa:1,bVa:2,ZUa:3};var rjb={tVa:0,sVa:1,qVa:2,rVa:3};var sjb={xVa:0,uVa:1,vVa:2,wVa:3,yVa:4};var tjb={qWa:0,kWa:1,rWa:2,mWa:3,dWa:4,UVa:37,FVa:5,CVa:36,HVa:38,PVa:39,QVa:40,LVa:41,pWa:42,IVa:27,ZVa:31,bWa:6,eWa:7,fWa:8,gWa:9,hWa:10,iWa:11,lWa:29,JVa:30,aWa:32,TVa:12,SVa:13,EVa:14,YVa:15,zVa:16,BVa:35,GVa:43,KVa:28,WVa:17,VVa:18,XVa:19,oWa:20,OVa:25,DVa:33,sWa:21,RVa:22,NVa:26,tWa:46,MVa:34,cWa:44,nWa:45,jWa:23,AVa:24};var DKa={KWa:0,IWa:1,HWa:2,JWa:3};var yP={R9a:0,O9a:1,Q9a:2,P9a:3};var bJa={vcb:0,jcb:1,icb:2,ocb:3,ucb:4,kcb:5,rcb:6,pcb:7,qcb:8,lcb:9,scb:10,mcb:11,tcb:12,ncb:13};var RJa={jXa:0,pVa:1,gVa:2,mVa:3,nVa:4,jVa:5,kVa:6,lVa:7};var ujb={b4a:0,a4a:1};var vjb={X$a:0,W$a:1,V$a:2,Y$a:3};var wjb={bab:0,aab:1,Z$a:2};var xjb={pab:0,hab:1,iab:2,jab:5,oab:7,qab:8,mab:9,nab:10};var yjb={eab:0,dab:1,cab:2};var FVa=new g.Ow("compositeVideoOverlayRenderer");var zjb=new g.Ow("miniplayerRenderer");var $Ra=new g.Ow("playerMutedAutoplayOverlayRenderer"),aSa=new g.Ow("playerMutedAutoplayEndScreenRenderer");var iRa=new g.Ow("unserializedPlayerResponse"),bSa=new g.Ow("unserializedPlayerResponse");var BKa={FWa:0,CWa:1,AWa:2,zWa:3,yWa:4,xWa:5,BWa:6,EWa:7,wWa:8,DWa:9,vWa:10,uWa:11};var Ajb=new g.Ow("playlistEditEndpoint");var X2;g.hN=new g.Ow("buttonRenderer");X2=new g.Ow("toggleButtonRenderer");var TJa={sgb:0,XLa:4,v3a:1,qFa:2,toa:3,YLa:5,y3a:6,rFa:7,sFa:8,tFa:9};var VDa=new g.Ow("counterfactualRenderer");var Bjb=new g.Ow("resolveUrlCommandMetadata");var Cjb=new g.Ow("modifyChannelNotificationPreferenceEndpoint");var Sya=new g.Ow("pingingEndpoint");var Djb=new g.Ow("unsubscribeEndpoint");var JHa={vgb:0,FTa:1,BTa:2,ATa:3,bTa:71,aTa:4,DTa:5,GTa:6,ETa:16,CTa:69,cTa:70,XSa:56,YSa:64,ZSa:65,oTa:7,eTa:8,jTa:9,fTa:10,iTa:11,hTa:12,gTa:13,lTa:43,rTa:44,sTa:45,tTa:46,uTa:47,vTa:48,wTa:49,xTa:50,yTa:51,zTa:52,pTa:53,qTa:54,nTa:63,dTa:14,mTa:15,kTa:68,mjb:17,vjb:18,Cib:19,ljb:20,Yib:21,njb:22,uib:23,gjb:24,bjb:25,Hib:26,sib:27,Oib:28,jjb:29,pib:30,oib:31,qib:32,vib:33,hjb:34,fjb:35,Zib:36,djb:37,ojb:38,Kib:39,ujb:40,Qib:41,Fib:42,pjb:55,cjb:66,Ojb:67,Uib:57,ijb:58,wib:59,rib:60,Lib:61,ajb:62};var Ejb={O4a:0,Q4a:1,F4a:2,x4a:3,L4a:4,M4a:5,R4a:6,o4a:7,p4a:8,v4a:9,H4a:10,y4a:11,C4a:12,A4a:13,B4a:14,D4a:15,E4a:19,r4a:16,K4a:17,I4a:18,t4a:20,z4a:21,q4a:22,P4a:23,w4a:24,s4a:25,N4a:26,u4a:27,J4a:28,G4a:29};g.ST=new g.Ow("subscribeButtonRenderer");var Fjb=new g.Ow("subscribeEndpoint");var OJa={W7a:0,U7a:1,V7a:2};var tVa=new g.Ow("buttonViewModel");var DLa={i5a:0,j5a:1,h5a:2,d5a:3,g5a:4,e5a:5,c5a:6,f5a:7};var WDa=new g.Ow("qrCodeRenderer");var jJa={Asa:0,ysa:1,vsa:2,wsa:3,xsa:4,zsa:5};var vQa={nPa:"LIVING_ROOM_APP_MODE_UNSPECIFIED",kPa:"LIVING_ROOM_APP_MODE_MAIN",jPa:"LIVING_ROOM_APP_MODE_KIDS",lPa:"LIVING_ROOM_APP_MODE_MUSIC",mPa:"LIVING_ROOM_APP_MODE_UNPLUGGED",iPa:"LIVING_ROOM_APP_MODE_GAMING"};var jSa=new g.Ow("autoplaySwitchButtonRenderer");var qRa,x_a,rRa,J_a;qRa=new g.Ow("decoratedPlayerBarRenderer");x_a=new g.Ow("chapteredPlayerBarRenderer");rRa=new g.Ow("multiMarkersPlayerBarRenderer");J_a=new g.Ow("chapterRenderer");g.B_a=new g.Ow("markerRenderer");var oSa=new g.Ow("desktopOverlayConfigRenderer");var mSa=new g.Ow("gatedActionsOverlayViewModel");var F_a=new g.Ow("heatMarkerRenderer");var E_a=new g.Ow("heatmapRenderer");var gVa=new g.Ow("culturalMomentOverlayRenderer"),rSa=new g.Ow("watchToWatchTransitionRenderer");var NSa=new g.Ow("playlistPanelRenderer");var SVa=new g.Ow("speedmasterEduViewModel");var Gjb=new g.Ow("suggestedActionTimeRangeTrigger"),Hjb=new g.Ow("suggestedActionsRenderer"),Ijb=new g.Ow("suggestedActionRenderer");var G_a=new g.Ow("timedMarkerDecorationRenderer");var Jjb={Njb:0,Jjb:1,Kjb:2,Mjb:3,Ljb:4,Ijb:5,Hjb:6,Djb:7,Fjb:8,Gjb:9,Ejb:10,zjb:11,xjb:12,wjb:13,Cjb:14,yjb:15,Ajb:16,Bjb:17};var rP={G4:0,USER:74,Ona:459,TRACK:344,Pna:493,coa:419,BIa:494,Hpa:337,MINUTE:237,HOUR:236,DAY:3,WEEK:78,Pjb:248,MONTH:79,QUARTER:246,YEAR:247,RUa:382,QUa:383,PUa:384,Hab:235,VIDEO:4,Sjb:186,ita:126,P$a:127,rta:117,C1a:125,q3a:151,Qva:515,ata:6,WEa:132,bFa:154,ZEa:222,aFa:155,XEa:221,YEa:156,O$a:209,N$a:210,Yhb:7,T1a:124,T7a:96,CUa:97,jib:93,HNa:574,kib:275,Goa:110,Foa:120,h0a:121,OGa:72,Rhb:351,S4a:495,Phb:377,Shb:378,LCa:496,MCa:497,T4a:498,Hoa:381,Qhb:386,lib:387,tna:410,CHa:437,ixa:338,Doa:380,
rea:352,KZa:113,LZa:114,Zab:82,abb:112,Ova:354,Uab:21,sna:556,EZa:567,P2a:566,dcb:568,iwa:523,kwa:375,jwa:514,wia:302,vta:136,PGa:85,Qia:22,Vjb:23,dbb:252,cbb:253,NYa:562,uta:563,Boa:254,tia:165,M$a:304,qIa:421,j3a:463,PLAYLIST:63,Whb:27,Vhb:28,Xhb:29,E$a:30,H$a:31,G$a:324,I$a:32,Roa:398,K$a:399,L$a:400,EUa:411,DUa:413,FUa:414,HUa:415,M1a:39,N1a:143,R1a:144,I1a:40,J1a:145,L1a:146,Jhb:504,Q1a:325,x_a:262,z_a:263,y_a:264,B_a:355,C_a:249,E_a:250,D_a:251,Esa:46,c4a:49,e4a:50,lia:62,Sab:561,iSa:105,vIa:242,
L9a:397,q0a:83,JZa:135,pna:87,rna:153,qna:187,kna:89,jna:88,lna:139,nna:91,mna:104,ona:137,fsa:99,Ggb:100,AUa:326,Hva:148,Gva:149,C$a:150,D$a:395,goa:166,moa:199,hoa:534,loa:167,ioa:168,qoa:169,roa:170,joa:171,koa:172,noa:179,ooa:180,soa:512,poa:513,Vgb:200,Hgb:476,Wgb:213,doa:191,A_a:192,u_a:305,v_a:306,G_a:329,y8a:327,z8a:328,q_a:195,r_a:197,MZa:301,l_a:223,m_a:224,oIa:227,FHa:396,CIa:356,wIa:490,DIa:394,Rpa:230,uoa:297,shb:298,nIa:342,Rva:346,tCa:245,bbb:261,SGa:265,XGa:266,TGa:267,QGa:268,RGa:269,
WGa:270,UGa:271,VGa:272,VOa:303,INa:391,JNa:503,LNa:277,gPa:499,hPa:500,TOa:501,XOa:278,KNa:489,WOa:598,Rwa:332,Twa:333,Pwa:334,Swa:335,Qwa:336,esa:340,hIa:341,Ihb:349,Hhb:420,P1a:281,K1a:282,d4a:286,F$a:288,O1a:291,S1a:292,GNa:295,J$a:296,FNa:299,yia:417,GIa:308,Wjb:309,Xjb:310,Yjb:311,I_a:590,J_a:591,xja:350,Ygb:418,iGa:424,Igb:425,SUa:429,BUa:430,AIa:426,H9a:460,zUa:427,S2a:428,T2a:542,Q2a:461,A8a:464,oSa:431,lSa:432,mSa:589,tSa:433,kSa:434,qSa:435,rSa:436,nSa:438,sSa:439,uSa:453,pSa:454,jSa:472,
ngb:557,R2a:558,Coa:559,Eoa:560,zoa:565,z0a:545,u0a:546,K0a:547,N0a:548,M0a:549,L0a:550,A0a:551,J0a:552,r0a:554,w0a:577,v0a:587,y0a:579,t0a:580,Aoa:583,P0a:584,Q0a:586,C0a:516,D0a:544,E0a:553,F0a:570,H0a:571,B0a:572,I0a:573,G0a:588,O0a:585,TYa:592,RYa:593,SYa:594,QYa:595,hib:604,fib:605,gib:606,iib:607,eib:608,Lab:520,s0a:521,x0a:522,xIa:543,Z_a:440,b0a:441,f0a:442,X_a:448,Y_a:449,c0a:450,g0a:451,e0a:491,POST:445,W_a:446,d0a:447,T0a:456,TUa:483,Pia:569,Usa:576,d1a:529,Vsa:581,Vab:555,S0a:458,h4a:480,
i4a:502,j4a:482,iIa:452,V4a:465,W4a:466,Uua:467,R0a:468,Uwa:469,usa:470,tsa:471,gIa:475,Kta:477,kIa:478,gFa:479,H_a:484,F_a:485,t_a:486,s_a:487,Dia:488,uwa:492,Wwa:505,hwa:506,Zhb:507,OJa:508,eFa:509,hFa:510,jFa:511,khb:524,Thb:530,A3a:531,Vwa:532,a5a:533,z3a:575,lIa:535,FIa:536,rIa:537,zIa:538,mIa:539,uIa:540,pIa:541,KPa:578,pia:582,L_a:596,tta:597,MNa:599,nOa:600,oOa:601,YOa:602,ZOa:603,PODCAST:609,sta:610};var ZMa=new g.Ow("cipher");var jRa=new g.Ow("playerVars");var cSa=new g.Ow("playerVars");var Y2=g.Sa.window,Kjb,Ljb,TB=(null==Y2?void 0:null==(Kjb=Y2.yt)?void 0:Kjb.config_)||(null==Y2?void 0:null==(Ljb=Y2.ytcfg)?void 0:Ljb.data_)||{};g.Ua("yt.config_",TB);var ZB=[];var yoa=/^[\w.]*$/,uoa={q:!0,search_query:!0},toa=String(cC);var zoa=new 
g.Ua("yt.ads_.signals_.getAdSignalsString",;g.ob();var Coa="XMLHttpRequest"in g.Sa?function(){return new XMLHttpRequest}:null;var Mjb="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");g.oa(Mjb);var Eoa={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Goa="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(g.oa(Mjb)),Moa=!1,idb=rC;g.w(tC,zb);wC.prototype.then=
wC.prototype.getValue=function(){return this.B};
wC.prototype.$goog_Thenable=!0;var zC=!1;var gE=IC||JC;var gpa=/^([0-9\.]+):([0-9\.]+)$/;g.w(lpa,zb);lpa.prototype.name="BiscottiError";g.w(TC,zb);TC.prototype.name="BiscottiMissingError";var ppa={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},UC=null;var Wsa=na(["data-"]),xpa={};var Njb=0,ypa=g.Vc?"webkit":vs?"moz":g.mf?"ms":g.pS?"o":"",Ojb=g.Va("ytDomDomGetNextId")||
g.Ua("ytDomDomGetNextId",Ojb);var Dpa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};ZC.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ZC.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ZC.prototype.stopImmediatePropagation=var $C=g.Sa.ytEventsEventsListeners||{};g.Ua("ytEventsEventsListeners",$C);var Gpa=g.Sa.ytEventsEventsCounter||{count:0};g.Ua("ytEventsEventsCounter",Gpa);var Lpa=Ud(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a}),Hpa=Ud(;var Z2;Z2=window;g.RD=Z2.ytcsi&&Z2.ytcsi.now?Z2.ytcsi.now:Z2.performance&&Z2.performance.timing&&Z2.performance.now&&Z2.performance.timing.navigationStart?g.pb(dD,g.I);dD.prototype.W=
dD.prototype.Ps=
dD.prototype.ma=
dD.prototype.xa=g.w(eD,g.I);eD.prototype.T=
eD.prototype.Pc=
eD.prototype.xa=hD.prototype.clone=var kTa=["att/get"],FWa=["embedded_player"],Pjb=["share/get_web_player_share_panel"],Qjb=["feedback"],Rjb=["notification/modify_channel_preference"],ibb=["player"],Sjb=["browse/edit_playlist"],Tjb=["subscription/subscribe"],Ujb=["subscription/unsubscribe"],mbb=["next","unplugged/watch_next"];var Npa;g.iD=Ud(function(){var a=new Sv;return a.isAvailable()?new g.Ov(a):null});
Npa=Ud(;nD.prototype.gD=var uE={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var qD=g.Va("ytglobal.prefsUserPrefsPrefs_")||{};g.Ua("ytglobal.prefsUserPrefsPrefs_",qD);var Upa;g.k=Tpa.prototype;g.k.get=
g.k.set=
g.k.remove=
g.k.save=
g.k.clear=function(){g.dba(qD)};
g.k.dump=
g.k.parse=var $pa={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Ira={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Jra={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},bqa={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};g.w(g.rD,Error);uD.prototype.Si=function(a,b){return vD(a,1,b)};
uD.prototype.r5=g.Va("yt.scheduler.instance.timerIdMap_");g.w(xD,uD);xD.prototype.Nj=
xD.prototype.start=function(){var a=g.Va("yt.scheduler.instance.start");a&&a()};
xD.prototype.pause=
g.Ru=g.yD();BD.prototype.set=
BD.prototype.get=
BD.prototype.remove=var eqa=);var ED=[],CD,FD=!1;var $2={},jqa=($2.AUTH_INVALID="No user identifier specified.",$2.EXPLICIT_ABORT="Transaction was explicitly aborted.",$2.IDB_NOT_SUPPORTED="IndexedDB is not supported.",$2.MISSING_INDEX="Index not created.",$2.MISSING_OBJECT_STORES="Object stores not created.",$2.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",$2.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",$2.UNKNOWN_ABORT=
"Transaction was aborted for unknown reasons.",$2.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",$2.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",$2.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",$2.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",$2),a3={},kqa=(a3.AUTH_INVALID="ERROR",a3.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",a3.EXPLICIT_ABORT="IGNORED",
a3.IDB_NOT_SUPPORTED="ERROR",a3.MISSING_INDEX="WARNING",a3.MISSING_OBJECT_STORES="ERROR",a3.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",a3.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",a3.QUOTA_EXCEEDED="WARNING",a3.QUOTA_MAYBE_EXCEEDED="WARNING",a3.UNKNOWN_ABORT="WARNING",a3.INCOMPATIBLE_DB_VERSION="WARNING",a3),b3={},lqa=(b3.AUTH_INVALID=!1,b3.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,b3.EXPLICIT_ABORT=!1,b3.IDB_NOT_SUPPORTED=!1,b3.MISSING_INDEX=!1,b3.MISSING_OBJECT_STORES=!1,b3.DB_DELETED_BY_MISSING_OBJECT_STORES=
!1,b3.DB_REOPENED_BY_MISSING_OBJECT_STORES=!1,b3.QUOTA_EXCEEDED=!1,b3.QUOTA_MAYBE_EXCEEDED=!0,b3.UNKNOWN_ABORT=!0,b3.INCOMPATIBLE_DB_VERSION=!1,b3);g.w(g.KD,g.rD);g.w(mqa,g.KD);g.w(LD,Error);var nqa=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];g.PD.all=
g.PD.resolve=
g.PD.reject=
g.PD.prototype.then=
g.PD.prototype.catch=g.k=Aqa.prototype;g.k.add=
g.k.clear=
g.k.close=
g.k.count=function(a,b){return g.UD(this,[a],{mode:"readonly",Tb:!0},function(c){return c.objectStore(a).count(b)})};
g.k.delete=function(a,b){return g.UD(this,[a],{mode:"readwrite",Tb:!0},function(c){return c.objectStore(a).delete(b)})};
g.k.get=
g.k.objectStoreNames=
g.k.getName=function(){return this.j.name};
g.k=Bqa.prototype;g.k.add=
g.k.autoIncrement=function(){return this.j.autoIncrement};
g.k.clear=function(){return g.QD(this.j.clear()).then(function(){})};
g.k.count=function(a){return g.QD(this.j.count(a))};
g.k.delete=
g.k.get=function(a){return g.QD(this.j.get(a))};
g.k.index=
g.k.getName=function(){return this.j.name};
g.k.keyPath=function(){return this.j.keyPath};
XD.prototype.abort=
XD.prototype.objectStore=
g.k=Mqa.prototype;g.k.count=function(a){return g.QD(this.j.count(a))};
g.k.delete=
g.k.get=function(a){return g.QD(this.j.get(a))};
g.k.keyPath=function(){return this.j.keyPath};
g.k.unique=function(){return this.j.unique};
bE.prototype.delete=
bE.prototype.getValue=function(){return this.cursor.value};
bE.prototype.update=dE.prototype.B=
dE.prototype.delete=
dE.prototype.open=var Qqa=new dE("YtIdbMeta",{er:{databases:{Um:1}},upgrade:);var Wqa,Uqa=new function(){}(new function(){});new g.ho;g.w(kE,dE);kE.prototype.B=
kE.prototype.delete=var Vjb={},gra=g.lE("ytGcfConfig",{er:(Vjb.coldConfigStore={Um:1},Vjb.hotConfigStore={Um:1},Vjb),shared:!1,upgrade:
version:1});g.w(mra,g.I);mra.prototype.xa=rE.prototype.yr=var Wjb="undefined"!==typeof TextEncoder?new TextEncoder:null,csa=Wjb?function(a){return Wjb.encode(a)}:vE.prototype.xk=function(){return{version:this.version,args:this.args}};wE.prototype.toString=function(){return this.topic};var Xjb=g.Va("ytPubsub2Pubsub2Instance")||new g.Kv;g.Kv.prototype.subscribe=g.Kv.prototype.subscribe;g.Kv.prototype.unsubscribeByKey=g.Kv.prototype.Ch;g.Kv.prototype.publish=g.Kv.prototype.oa;g.Kv.prototype.clear=g.Kv.prototype.clear;g.Ua("ytPubsub2Pubsub2Instance",Xjb);var yE=g.Va("ytPubsub2Pubsub2SubscribedKeys")||{};g.Ua("ytPubsub2Pubsub2SubscribedKeys",yE);var zE=g.Va("ytPubsub2Pubsub2TopicToKeys")||{};g.Ua("ytPubsub2Pubsub2TopicToKeys",zE);var Mra=g.Va("ytPubsub2Pubsub2IsAsync")||{};
g.Ua("ytPubsub2Pubsub2IsAsync",Mra);g.Ua("ytPubsub2Pubsub2SkipSubKey",null);var Tra=void 0,Rra=void 0;var Zra=g.YB("max_body_size_to_compress",5E5),$ra=g.YB("min_body_size_to_compress",500),CE=!0,FE=0,EE=0,dsa=g.YB("compression_performance_threshold_lr",250),esa=g.YB("slow_compressions_before_abandon_count",4),Vra=!1,BE=new Map,bsa=1,asa=!0;g.k=HE.prototype;g.k.writeThenSend=
g.k.sendThenWrite=
g.k.sendAndWrite=
g.k.oB=
g.k.IM=
g.k.JD=
g.k.gK=
g.k.kK=var JE;var nua={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
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
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var Yjb={},usa=g.lE("ServiceWorkerLogsDatabase",{er:(Yjb.SWHealthLog={Um:1},Yjb),shared:!0,upgrade:
version:1});var Bsa={},Asa=0;ME.prototype.requestComplete=
ME.prototype.isEndpointCFR=
ME.prototype.removeParams=
ME.prototype.removeParams=ME.prototype.removeParams;ME.prototype.isEndpointCFR=ME.prototype.isEndpointCFR;ME.prototype.requestComplete=ME.prototype.requestComplete;ME.getInstance=NE;var Dsa;g.w(PE,g.Md);g.k=PE.prototype;g.k.Nh=function(){return this.j.Nh()};
g.k.pw=function(a){this.j.j=a};
g.k.f7=
g.k.g6=function(){this.B=!0};
g.k.Sa=function(a,b){return this.j.Sa(a,b)};
g.k.pK=
PE.prototype.sendNetworkCheckRequest=PE.prototype.pK;PE.prototype.listen=PE.prototype.Sa;PE.prototype.enableErrorFlushing=PE.prototype.g6;PE.prototype.getWindowStatus=PE.prototype.f7;PE.prototype.networkStatusHint=PE.prototype.pw;PE.prototype.isNetworkAvailable=PE.prototype.Nh;PE.getInstance=Fsa;g.w(g.QE,g.Md);g.QE.prototype.Nh=
g.QE.prototype.pw=
g.QE.prototype.pK=var Hsa;g.w(RE,HE);RE.prototype.writeThenSend=function(a,b){b||(b={});g.tD()||(this.j=!1);HE.prototype.writeThenSend.call(this,a,b)};
RE.prototype.sendThenWrite=
RE.prototype.sendAndWrite=
RE.prototype.awaitInitialization=function(){return this.C.promise};var Lsa=g.Sa.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};g.Ua("ytNetworklessLoggingInitializationOptions",Lsa);g.TE.prototype.isReady=var Zjb,WE,YE;Zjb=g.Sa.ytPubsubPubsubInstance||new g.Kv;WE=g.Sa.ytPubsubPubsubSubscribedKeys||{};YE=g.Sa.ytPubsubPubsubTopicToKeys||{};g.XE=g.Sa.ytPubsubPubsubIsSynchronous||{};g.Kv.prototype.subscribe=g.Kv.prototype.subscribe;g.Kv.prototype.unsubscribeByKey=g.Kv.prototype.Ch;g.Kv.prototype.publish=g.Kv.prototype.oa;g.Kv.prototype.clear=g.Kv.prototype.clear;g.Ua("ytPubsubPubsubInstance",Zjb);g.Ua("ytPubsubPubsubTopicToKeys",YE);g.Ua("ytPubsubPubsubIsSynchronous",g.XE);
g.Ua("ytPubsubPubsubSubscribedKeys",WE);var Psa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Qsa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Usa={};g.w(dF,g.I);dF.prototype.append=
g.w(eF,dF);eF.prototype.Jb=function(){return this.j};g.w(ata,g.I);var fF=Date.now().toString();var fta={};var nF=Symbol("injectionDeps");lF.prototype.toString=
gta.prototype.resolve=var jta;var qF=window;var rF=g.XB("web_enable_lifecycle_monitoring")&&0!==kta(),tta=g.XB("web_enable_lifecycle_monitoring");ota.prototype.cancel=g.k=sF.prototype;g.k.install=
g.k.uninstall=
g.k.transition=
g.k.Mba=
g.k.Lba=
g.k.z_=
g.fa.Object.defineProperties(sF.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});var vta;g.w(uF,sF);uF.prototype.G=
uF.prototype.K=var iua=[];g.Ua("yt.logging.transport.getScrapedGelPayloads",function(){return iua});vF.prototype.storePayload=
vF.prototype.smartExtractMatchingEntries=
vF.prototype.extractMatchingEntries=
vF.prototype.getSequenceCount=
vF.prototype.getSequenceCount=vF.prototype.getSequenceCount;vF.prototype.extractMatchingEntries=vF.prototype.extractMatchingEntries;vF.prototype.smartExtractMatchingEntries=vF.prototype.smartExtractMatchingEntries;vF.prototype.storePayload=vF.prototype.storePayload;var Wta=g.YB("initial_gel_batch_timeout",2E3),Vta=g.YB("gel_queue_timeout_max_ms",6E4),hua=Math.pow(2,16)-1,Xta=g.YB("gel_min_batch_size",5),EF=void 0,mua=new xF,lua=new xF,Uta=new xF,Tta=new xF,Mta,IF=!0,gua=1,zF=new Map,HF=g.Sa.ytLoggingTransportTokensToCttTargetIds_||{};g.Ua("ytLoggingTransportTokensToCttTargetIds_",HF);var GF=g.Sa.ytLoggingTransportTokensToJspbCttTargetIds_||{};g.Ua("ytLoggingTransportTokensToJspbCttTargetIds_",GF);var CF={},zta=!1;var JF=g.Sa.ytLoggingGelSequenceIdObj_||{};g.Ua("ytLoggingGelSequenceIdObj_",JF);var rua,LF,sua,uua=g.TE,qua=!1,xua=[];var zua=g.Sa.ytLoggingGelSequenceIdObj_||{};g.Ua("ytLoggingGelSequenceIdObj_",zua);var c3=g.Sa.ytLoggingDocDocumentNonce_;c3||(c3=g.hF(16),g.Ua("ytLoggingDocDocumentNonce_",c3));var Sua=c3;var Pua={z1:0,csa:1,qta:2,XL:3,Iva:4,bib:5,VTa:6,Z3a:7,F1a:8,n3a:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};var Hua=1;g.k=PF.prototype;g.k.getAsJson=
g.k.getAsJspb=
g.k.toString=
g.k.isClientVe=
g.k.getLoggingDirectives=function(){return this.j.loggingDirectives};g.Ua("yt_logging_screen.getRootVeType",Mua);g.Ua("yt_logging_screen.getCurrentCsn",g.SF);g.Ua("yt_logging_screen.getCttAuthInfo",TF);g.Ua("yt_logging_screen.setCurrentScreen",Tua);var Xua="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");var jva=[{vP:function(a){return"Cannot read property '"+a.key+"'"},
JJ:{Error:[{Ej:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{Ej:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{Ej:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{Ej:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{Ej:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{Ej:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{Ej:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{vP:
JJ:{TypeError:[{Ej:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{Ej:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{Ej:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{Ej:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{Ej:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},
{Ej:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{vP:
JJ:{ReferenceError:[{Ej:/(.*) is not defined/,groups:["key"]},{Ej:/Can't find variable: (.*)/,groups:["key"]}]}}];var bva={Zq:[],hs:[{callback:Yua,weight:500}]};var $ua;var XF=new g.Kv;var kva=new Set,hva=0,nva=0,mva=0,iva=[],pva=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var rva=new g.Ow("parallelCommand");var uva=new g.Ow("performOnceCommand");var tva=new g.Ow("serialCommand");var fG=void 0;g.w(xva,vE);var Ava=new wE("screen-created",xva),nG=[],yva=Lva,Mva=0,jG=new Map,Bva=new Map,Cva=new Map;g.pb(g.uG,g.I);g.uG.prototype.subscribe=
g.uG.prototype.unsubscribe=
g.uG.prototype.Ch=
g.uG.prototype.oa=var B3a=16/9,$jb=[.25,.5,.75,1,1.25,1.5,1.75,2],akb=$jb.concat([3,4,5,6,7,8,9,10,15]);var Ova=1;g.w(g.yG,g.I);g.k=g.yG.prototype;
g.k.createElement=
g.k.Ha=function(a){return this.Pb[a]};
g.k.Ja=
g.k.detach=function(){g.yf(this.element)};
g.k.update=
g.k.updateValue=
g.k.xa=g.w(g.V,g.yG);g.k=g.V.prototype;g.k.Yd=
g.k.show=
g.k.hide=
g.k.Ic=function(a){this.Z=a};
g.k.Sa=
g.k.T=
g.k.Pc=
g.k.focus=
g.k.xa=g.w(g.CG,g.V);g.CG.prototype.subscribe=function(a,b,c){return this.Ra.subscribe(a,b,c)};
g.CG.prototype.unsubscribe=function(a,b,c){return this.Ra.unsubscribe(a,b,c)};
g.CG.prototype.Ch=function(a){return this.Ra.Ch(a)};
g.CG.prototype.oa=var bkb=new WeakSet;g.w(DG,g.CG);g.k=DG.prototype;g.k.bind=
g.k.init=
g.k.clear=function(){};
g.k.hide=
g.k.show=
g.k.onClick=
g.k.WZ=function(a){return a};
g.k.t3=
g.k.s3=
g.k.r3=
g.k.tF=
g.k.createServerVe=
g.k.logVisibility=
g.k.xa=g.w(NG,DG);
NG.prototype.init=
NG.prototype.clear=function(){this.hide()};
NG.prototype.onClick=g.w(OG,g.I);OG.prototype.xa=
OG.prototype.register=
var PG=null;g.w(SG,DG);
SG.prototype.init=
SG.prototype.hide=function(){this.button&&this.button.hide();this.B&&this.B.hide();DG.prototype.hide.call(this)};
SG.prototype.show=function(){this.button&&this.button.show();DG.prototype.show.call(this)};g.w(UG,DG);
UG.prototype.init=
UG.prototype.clear=function(){this.hide()};g.w(VG,DG);g.k=VG.prototype;g.k.hide=
g.k.show=
g.k.init=
g.k.clear=function(){g.gD(this.j);this.hide()};
g.k.PP=function(){this.hide()};
g.k.IL=
g.k.QP=g.w(WG,DG);g.k=WG.prototype;
g.k.init=
g.k.onClick=
g.k.ET=
g.k.clear=function(){this.hide()};
g.k.toggleButton=
g.k.isToggled=function(){return this.j.checked};g.w(XG,eD);XG.prototype.K=g.w(ywa,DG);g.k=ywa.prototype;g.k.init=
g.k.clear=
g.k.hide=
g.k.show=
g.k.PY=
g.k.Gaa=function(){this.hide()};
Dwa.prototype.Jb=function(){return this.j.element};
Dwa.prototype.isChecked=function(){return this.C.checked};g.w(YG,VG);YG.prototype.PP=function(a){VG.prototype.PP.call(this,a);this.api.onAdUxClicked("ad-mute-confirm-dialog-close-button")};
YG.prototype.IL=
YG.prototype.QP=g.w(Ewa,DG);g.k=Ewa.prototype;
g.k.init=
g.k.clear=
g.k.hide=
g.k.show=
g.k.FT=
g.k.h$=g.w(ZG,SG);ZG.prototype.init=
ZG.prototype.hide=
ZG.prototype.show=function(){this.button&&this.button.show();SG.prototype.show.call(this)};
ZG.prototype.clear=function(){this.hide()};g.w($G,DG);
$G.prototype.init=
$G.prototype.isTemplated=
$G.prototype.clear=function(){this.hide()};var Ywa={seekableStart:0,seekableEnd:1,current:0};g.w(aH,DG);aH.prototype.clear=function(){this.dispose()};g.w(g.dH,g.I);g.k=g.dH.prototype;g.k.show=
g.k.hide=
g.k.vG=
g.k.stop=
g.k.xa=g.w(fH,aH);g.k=fH.prototype;
g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=
g.k.show=
g.k.Qp=function(){this.hide()};
g.k.Un=g.w(Pwa,aH);g.k=Pwa.prototype;
g.k.init=
g.k.onClick=
g.k.Un=
g.k.Qp=function(){this.clear()};
g.k.clear=function(){this.hide();this.api.removeEventListener("playerUnderlayVisibilityChange",this.GT.bind(this))};
g.k.show=function(){this.B&&this.B.show();aH.prototype.show.call(this)};
g.k.hide=
g.k.GT=g.w(Qwa,DG);g.k=Qwa.prototype;
g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=function(){this.C.hide();this.B.hide();DG.prototype.hide.call(this)};
g.k.show=
g.k.HT=
g.k.onClick=g.w(gH,g.I);g.k=gH.prototype;g.k.xa=function(){this.reset();g.I.prototype.xa.call(this)};
g.k.reset=
g.k.start=
g.k.JT=
g.k.IT=
g.k.fV=g.w(nH,aH);g.k=nH.prototype;
g.k.init=
g.k.clear=function(){this.Ka.reset();this.hide()};
g.k.hide=
g.k.onClick=
g.k.WZ=
g.k.show=
g.k.Qp=function(){this.oa("k")};
g.k.Un=function(){};g.w(pH,aH);g.k=pH.prototype;
g.k.init=
g.k.show=
g.k.Qp=function(){};
g.k.clear=function(){this.B&&this.B.clear();this.C&&this.C.clear();cH(this);aH.prototype.hide.call(this)};
g.k.hide=function(){this.B&&this.B.hide();this.C&&this.C.hide();cH(this);aH.prototype.hide.call(this)};
g.k.Un=g.w(Xwa,NG);Xwa.prototype.init=g.w(qH,DG);qH.prototype.init=
qH.prototype.clear=function(){this.hide()};g.w(rH,tG);g.w(sH,g.uG);g.k=sH.prototype;g.k.Vl=function(){return this.durationMs};
g.k.stop=function(){this.j&&this.Ed.Pc(this.j)};
g.k.Mc=
g.k.getProgressState=function(){return this.B};
g.k.u3=function(a){g.mH(a,2)&&this.oa("g")};g.w(tH,g.uG);g.k=tH.prototype;g.k.Vl=function(){return this.durationMs};
g.k.start=
g.k.stop=
g.k.Mc=
g.k.getProgressState=function(){return this.B};g.w(wH,aH);g.k=wH.prototype;g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=function(){cH(this);aH.prototype.hide.call(this)};
g.k.Qp=function(){this.hide()};
g.k.Un=
g.k.show=function(){bH(this);aH.prototype.show.call(this)};g.w(Zwa,$G);Zwa.prototype.onClick=xH.prototype.getLength=function(){return this.j-this.B};g.w(zH,g.CG);zH.prototype.Mc=
zH.prototype.onStateChange=g.w(AH,DG);
AH.prototype.init=
AH.prototype.clear=function(){this.hide()};DH.prototype.set=
DH.prototype.get=function(a){return this.j.get(a)};
DH.prototype.remove=function(a){this.j.remove(a)};var exa=null,gxa=null,ixa=null,kxa=null;g.Ua("yt.www.ads.eventcache.getLastCompanionData",function(){return exa});
g.Ua("yt.www.ads.eventcache.getLastPlaShelfData",function(){return null});
g.Ua("yt.www.ads.eventcache.getLastUpdateEngagementPanelAction",function(){return gxa});
g.Ua("yt.www.ads.eventcache.getLastChangeEngagementPanelVisibilityAction",function(){return ixa});
g.Ua("yt.www.ads.eventcache.getLastScrollToEngagementPanelCommand",function(){return kxa});var mxa=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);GH.prototype.handleResponse=
GH.prototype.replace=var ckb=window.location.hostname.split(".").slice(-2).join("."),d3;HH.getInstance=
g.k=HH.prototype;
g.k.setLocationOnInnerTubeContext=
g.k.handleResponse=
g.k.clearLocationPlayabilityToken=
g.k.getCurrentPositionFromGeolocation=
g.k.createUnpluggedLocationInfo=
g.k.createLocationInfo=var e3={},vxa=(e3.WEB_UNPLUGGED="^unplugged/",e3.WEB_UNPLUGGED_ONBOARDING="^unplugged/",e3.WEB_UNPLUGGED_OPS="^unplugged/",e3.WEB_UNPLUGGED_PUBLIC="^unplugged/",e3.WEB_CREATOR="^creator/",e3.WEB_KIDS="^kids/",e3.WEB_EXPERIMENTS="^experiments/",e3.WEB_MUSIC="^music/",e3.WEB_REMIX="^music/",e3.WEB_MUSIC_EMBEDDED_PLAYER="^music/",e3.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",e3);xxa.prototype.G=
g.fa.Object.defineProperties(xxa.prototype,{D:{configurable:!0,enumerable:!0,get:function(){return!1}}});
g.w(LH,xxa);g.w(MH,LH);MH.prototype.G=
MH.prototype.C=function(){return[]};
MH.prototype.B=function(){};
MH.prototype.j=function(){};var dkb={},hya=(dkb.GET_DATASYNC_IDS=JH(MH),dkb);var f3={},Exa=(f3.auto_search="LATENCY_ACTION_AUTO_SEARCH",f3.ad_to_ad="LATENCY_ACTION_AD_TO_AD",f3.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",f3["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",f3.app_startup="LATENCY_ACTION_APP_STARTUP",f3["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",f3["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",f3["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",f3["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
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
W[W.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";W[W.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var cI={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};cI[cI.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";cI[cI.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";cI[cI.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var dI={CONN_INVALID:31,CONN_WIRED:30,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};dI[dI.CONN_INVALID]="CONN_INVALID";dI[dI.CONN_WIRED]="CONN_WIRED";dI[dI.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";dI[dI.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";dI[dI.CONN_WIFI_METERED]="CONN_WIFI_METERED";
dI[dI.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";dI[dI.CONN_DISCO]="CONN_DISCO";dI[dI.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";dI[dI.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";dI[dI.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";dI[dI.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";dI[dI.CONN_WIFI]="CONN_WIFI";dI[dI.CONN_NONE]="CONN_NONE";dI[dI.CONN_UNKNOWN]="CONN_UNKNOWN";dI[dI.CONN_DEFAULT]="CONN_DEFAULT";
var eI={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};eI[eI.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
eI[eI.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";eI[eI.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";eI[eI.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";eI[eI.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";eI[eI.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";eI[eI.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
eI[eI.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";eI[eI.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";eI[eI.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";eI[eI.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";eI[eI.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";eI[eI.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";eI[eI.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";eI[eI.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
eI[eI.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";eI[eI.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";eI[eI.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";eI[eI.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";eI[eI.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";eI[eI.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";eI[eI.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";eI[eI.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
eI[eI.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";eI[eI.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";eI[eI.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";eI[eI.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var fI={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};
fI[fI.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";fI[fI.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";fI[fI.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";fI[fI.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";fI[fI.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";fI[fI.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";fI[fI.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";fI[fI.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var gI={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};gI[gI.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";gI[gI.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";gI[gI.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";gI[gI.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var hI={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
hI[hI.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";hI[hI.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var iI={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};iI[iI.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";iI[iI.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";iI[iI.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
iI[iI.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";iI[iI.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";iI[iI.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var jI={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};jI[jI.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";jI[jI.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";jI[jI.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";jI[jI.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var kI={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};kI[kI.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";kI[kI.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";kI[kI.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var lI={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};lI[lI.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
lI[lI.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";lI[lI.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Ixa="actionVisualElement spinnerInfo cacheAttempts resourceInfo preloadThumbnailInfo startupEdgeCaseInfo startupInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo imageLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo mediaEngineMetadata miniAppInfo dynamicAssetFetchInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext creationModesContext cameraMetadata producerMediaAssetMetadata".split(" ");g.w(Fxa,vE);var Zxa=new wE("aft-recorded",Fxa);var WH=g.Sa.ytLoggingLatencyUsageStats_||{};g.Ua("ytLoggingLatencyUsageStats_",WH);UH.prototype.tick=
UH.prototype.info=
UH.prototype.jspbInfo=
UH.prototype.span=var g3=window,YH=g3.performance||g3.mozPerformance||g3.msPerformance||g3.webkitPerformance||new Gxa;var Yxa=!1,Kxa=!1,Txa={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"},$xa=(0,g.jb)(YH.clearResourceTimings||YH.webkitClearResourceTimings||YH.mozClearResourceTimings||YH.msClearResourceTimings||YH.oClearResourceTimings||g.Td,YH);var ekb=window;ekb.ytcsi&&(ekb.ytcsi.infoGel=g.rI,ekb.ytcsi.tick=tI);var mya="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),oya=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];var tya=new lF("INNERTUBE_TRANSPORT_TOKEN");g.w(yI,LH);yI.prototype.C=function(){return Tjb};
yI.prototype.B=function(a){return g.U(a,Fjb)||void 0};
yI.prototype.j=
g.fa.Object.defineProperties(yI.prototype,{D:{configurable:!0,enumerable:!0,get:function(){return!0}}});g.w(zI,LH);zI.prototype.C=function(){return Ujb};
zI.prototype.B=function(a){return g.U(a,Djb)||void 0};
zI.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
g.fa.Object.defineProperties(zI.prototype,{D:{configurable:!0,enumerable:!0,get:function(){return!0}}});g.w(AI,LH);AI.prototype.C=function(){return Qjb};
AI.prototype.B=function(a){return g.U(a,aib)||void 0};
AI.prototype.j=
g.fa.Object.defineProperties(AI.prototype,{D:{configurable:!0,enumerable:!0,get:function(){return!0}}});g.w(BI,LH);BI.prototype.C=function(){return Rjb};
BI.prototype.B=function(a){return g.U(a,Cjb)||void 0};
BI.prototype.j=g.w(CI,LH);CI.prototype.C=function(){return Sjb};
CI.prototype.B=
CI.prototype.j=g.w(DI,LH);DI.prototype.C=function(){return Pjb};
DI.prototype.B=function(a){return g.U(a,pjb)};
DI.prototype.j=var fkb=new lF("NETWORK_SLI_TOKEN");EI.prototype.fetch=
EI.prototype.handleResponse=
EI[nF]=[new mF(fkb)];var sya=new lF("NETWORK_MANAGER_TOKEN");var rya;var gLa={Wia:0,Xia:1,Via:2,Sia:3,Ria:4,Tia:5,Uia:6};var uya=["APP_STATE","PI"];GI.prototype.fetch=
GI.prototype.handleResponse=g.k=Cya.prototype;g.k.initialize=
g.k.isInitialized=function(){return this.eG()};
g.k.getState=function(){return this.state};
g.k.isLoading=function(){return 2===this.state};
g.k.invoke=
g.k.dispose=
g.k.eG=function(){return!!this.j};
g.k.O0=function(a){return this.j.snapshot(a)};
g.k.P0=function(a){return this.j.K_(a)};
g.k.AR=
g.k.Dc=function(a){this.state=a};var Hya=[],Gya=!1;g.w(JI,Cya);JI.prototype.AR=
JI.prototype.eG=
JI.prototype.O0=function(a){return II().bgvmb(a)};
JI.prototype.P0=Kya.prototype.zq=function(){return"crossDeviceProgressCommand"};
Kya.prototype.Rs=Mya.prototype.zq=function(){return"muteAdEndpoint"};
Mya.prototype.Rs=Nya.prototype.zq=function(){return"openPopupAction"};
Nya.prototype.Rs=function(){};Oya.prototype.zq=function(){return"pingingEndpoint"};
Oya.prototype.Rs=function(){};var Vya={clickTrackingParams:!0,commandMetadata:!0,loggingUrls:!0};g.w(Qya,g.I);var heb={qda:"FINAL",b1:"AD_BREAK_LENGTH",qia:"AD_CPN",xia:"AH",Bia:"AD_MT",Eia:"ASR",Iia:"AW",hsa:"NM",isa:"NX",jsa:"NY",s1:"CONN",wta:"CPN",gwa:"DV_VIEWABILITY",Xwa:"ERRORCODE",gxa:"ERROR_MSG",jxa:"EI",K1:"GOOGLE_VIEWABILITY",DGa:"IAS_VIEWABILITY",NJa:"LACT",p4:"LIVE_TARGETING_CONTEXT",EPa:"I_X",FPa:"I_Y",hSa:"MT",wSa:"MIDROLL_POS",xSa:"MIDROLL_POS_MS",VSa:"MOAT_INIT",WSa:"MOAT_VIEWABILITY",x4:"P_H",o_a:"PV_H",p_a:"PV_W",y4:"P_W",K_a:"TRIGGER_TYPE",w3a:"SDKV",B4:"SLOT_POS",sab:"SURVEY_LOCAL_TIME_EPOCH_S",
rab:"SURVEY_ELAPSED_MS",J4:"VIS",Uhb:"VIEWABILITY",aib:"VED",K4:"VOL",dib:"WT",L4:"YT_ERROR_CODE"};Wya.prototype.zq=function(){return"urlEndpoint"};
Wya.prototype.Rs=MI.prototype.get=function(){return this.value};
g.w(NI,MI);NI.prototype.getType=function(){return"metadata_type_action_companion_ad_renderer"};
g.w(OI,MI);OI.prototype.getType=function(){return"metadata_type_top_banner_image_text_icon_buttoned_layout_view_model"};
g.w(Xya,MI);Xya.prototype.getType=function(){return"metadata_type_ads_engagement_panel_renderer"};
g.w(PI,MI);PI.prototype.getType=function(){return"metadata_type_ad_next_params"};
g.w(QI,MI);QI.prototype.getType=function(){return"metadata_type_ad_video_clickthrough_endpoint"};
g.w(Yya,MI);Yya.prototype.getType=function(){return"metadata_type_invideo_overlay_ad_renderer"};
g.w(Zya,MI);Zya.prototype.getType=function(){return"metadata_type_image_companion_ad_renderer"};
g.w($ya,MI);$ya.prototype.getType=function(){return"metadata_type_banner_image_layout_view_model"};
g.w(aza,MI);aza.prototype.getType=function(){return"metadata_type_shopping_companion_carousel_renderer"};
g.w(bza,MI);bza.prototype.getType=function(){return"metadata_type_ad_info_ad_metadata"};
g.w(cza,MI);cza.prototype.getType=function(){return"metadata_ad_video_is_listed"};
g.w(RI,MI);RI.prototype.getType=function(){return"metadata_type_ad_placement_config"};
g.w(SI,MI);SI.prototype.getType=function(){return"metadata_type_ad_pod_info"};
g.w(TI,MI);TI.prototype.getType=function(){return"metadata_type_ad_pod_skip_index"};
g.w(UI,MI);UI.prototype.getType=function(){return"metadata_type_ad_pod_skip_target"};
g.w(VI,MI);VI.prototype.getType=function(){return"metadata_type_ad_pod_skip_target_callback_ref"};
g.w(WI,MI);WI.prototype.getType=function(){return"metadata_type_ad_video_id"};
g.w(XI,MI);XI.prototype.getType=function(){return"metadata_type_content_cpn"};
g.w(YI,MI);YI.prototype.getType=function(){return"metadata_type_instream_ad_player_overlay_renderer"};
g.w(ZI,MI);ZI.prototype.getType=function(){return"metadata_type_player_overlay_layout_renderer"};
g.w($I,MI);$I.prototype.getType=function(){return"metadata_type_player_underlay_renderer"};
g.w(aJ,MI);aJ.prototype.getType=function(){return"metadata_type_player_underlay_ad_slot_renderer"};
g.w(dza,MI);dza.prototype.getType=function(){return"metadata_type_shrunken_player_bytes_config"};
g.w(bJ,MI);bJ.prototype.getType=function(){return"metadata_type_ad_action_interstitial_renderer"};
g.w(eza,MI);eza.prototype.getType=function(){return"metadata_type_valid_survey_text_interstitial_renderer"};
g.w(fza,MI);fza.prototype.getType=function(){return"METADATA_TYPE_VALID_INSTREAM_SURVEY_AD_RENDERER_FOR_DAI"};
g.w(gza,MI);gza.prototype.getType=function(){return"METADATA_TYPE_VALID_INSTREAM_SURVEY_AD_RENDERER_FOR_VOD"};
g.w(hza,MI);hza.prototype.getType=function(){return"metadata_type_sliding_text_player_overlay_renderer"};
g.w(cJ,MI);cJ.prototype.getType=function(){return"metadata_type_linked_player_bytes_layout_id"};
g.w(dJ,MI);dJ.prototype.getType=function(){return"metadata_type_linked_in_player_layout_id"};
g.w(eJ,MI);eJ.prototype.getType=function(){return"metadata_type_linked_in_player_layout_type"};
g.w(fJ,MI);fJ.prototype.getType=function(){return"metadata_type_linked_in_player_slot_id"};
g.w(iza,MI);iza.prototype.getType=function(){return"metadata_type_player_bytes_callback"};
g.w(gJ,MI);gJ.prototype.getType=function(){return"metadata_type_player_bytes_callback_ref"};
g.w(hJ,MI);hJ.prototype.getType=function(){return"metadata_type_player_bytes_layout_controls_callback_ref"};
g.w(iJ,MI);iJ.prototype.getType=function(){return"metadata_type_sub_layouts"};
g.w(jza,MI);jza.prototype.getType=function(){return"metadata_type_cue_point"};
g.w(jJ,MI);jJ.prototype.getType=function(){return"metadata_type_video_length_seconds"};
g.w(kJ,MI);kJ.prototype.getType=function(){return"metadata_type_player_vars"};
g.w(lJ,MI);lJ.prototype.getType=function(){return"metadata_type_preload_player_vars"};
g.w(mJ,MI);mJ.prototype.getType=function(){return"metadata_type_sodar_extension_data"};
g.w(nJ,MI);nJ.prototype.getType=function(){return"metadata_type_layout_enter_ms"};
g.w(oJ,MI);oJ.prototype.getType=function(){return"metadata_type_layout_exit_ms"};
g.w(pJ,MI);pJ.prototype.getType=function(){return"metadata_type_media_sub_layout_index"};
g.w(qJ,MI);qJ.prototype.getType=function(){return"metadata_type_dai"};
g.w(rJ,MI);rJ.prototype.getType=function(){return"metadata_type_ad_intro"};
g.w(kza,MI);kza.prototype.getType=function(){return"metadata_type_client_forecasting_ad_renderer"};
g.w(sJ,MI);sJ.prototype.getType=function(){return"metadata_type_drift_recovery_ms"};
g.w(tJ,MI);tJ.prototype.getType=function(){return"metadata_type_fulfilled_layout"};
g.w(uJ,MI);uJ.prototype.getType=function(){return"metadata_type_ad_break_request_data"};
g.w(lza,MI);lza.prototype.getType=function(){return"metadata_type_ad_break_response_data"};
g.w(vJ,MI);vJ.prototype.getType=function(){return"metadata_type_remote_slots_data"};
g.w(wJ,MI);wJ.prototype.getType=function(){return"METADATA_TYPE_MEDIA_LAYOUT_DURATION_seconds"};
g.w(xJ,MI);xJ.prototype.getType=function(){return"METADATA_TYPE_MEDIA_BREAK_LAYOUT_DURATION_MILLISECONDS"};
g.w(yJ,MI);yJ.prototype.getType=function(){return"metadata_type_legacy_info_card_vast_extension"};
g.w(mza,MI);mza.prototype.getType=function(){return"metadata_type_valid_ad_message_renderer"};
g.w(zJ,MI);zJ.prototype.getType=function(){return"METADATA_TYPE_INTERACTIONS_AND_PROGRESS_LAYOUT_COMMANDS"};
g.w(AJ,MI);AJ.prototype.getType=function(){return"metadata_type_served_from_live_infra"};
g.w(nza,MI);nza.prototype.getType=function(){return"metadata_type_survey_overlay"};
g.w(BJ,MI);BJ.prototype.getType=function(){return"metadata_type_active_view_traffic_type"};
g.w(oza,MI);oza.prototype.getType=function(){return"metadata_type_ssdai_ads_config"};
g.w(CJ,MI);CJ.prototype.getType=function(){return"metadata_type_eligible_for_ssap"};
g.w(pza,MI);pza.prototype.getType=function(){return"metadata_type_allow_pause_ad_break_request_slot_reschedule"};var Kza=new Map([["TRIGGER_CATEGORY_LAYOUT_EXIT_NORMAL","normal"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_SKIPPED","skipped"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_MUTED","muted"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_INPUT_SUBMITTED","user_input_submitted"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_CANCELLED","user_cancelled"]]);var Vza=new Map([["TRIGGER_CATEGORY_LAYOUT_EXIT_NORMAL","trigger_category_layout_exit_normal"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_SKIPPED","trigger_category_layout_exit_user_skipped"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_MUTED","trigger_category_layout_exit_user_muted"],["TRIGGER_CATEGORY_SLOT_EXPIRATION","trigger_category_slot_expiration"],["TRIGGER_CATEGORY_SLOT_FULFILLMENT","trigger_category_slot_fulfillment"],["TRIGGER_CATEGORY_SLOT_ENTRY","trigger_category_slot_entry"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_INPUT_SUBMITTED",
"trigger_category_layout_exit_user_input_submitted"],["TRIGGER_CATEGORY_LAYOUT_EXIT_USER_CANCELLED","trigger_category_layout_exit_user_cancelled"]]);g.w(GJ,zb);g.w(HJ,zb);new Promise(function(){});var tza=new Map([["unspecified","CONTROL_FLOW_MANAGER_LAYER_UNSPECIFIED"],["core","CONTROL_FLOW_MANAGER_LAYER_CORE"],["adapter","CONTROL_FLOW_MANAGER_LAYER_ADAPTER"],["surface","CONTROL_FLOW_MANAGER_LAYER_SURFACE"],["external","CONTROL_FLOW_MANAGER_LAYER_EXTERNAL"]]),rza=new Map([["normal",{Vw:"ADS_CLIENT_EVENT_TYPE_NORMAL_EXIT_LAYOUT_REQUESTED",gx:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_NORMALLY"}],["skipped",{Vw:"ADS_CLIENT_EVENT_TYPE_SKIP_EXIT_LAYOUT_REQUESTED",gx:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_SKIP"}],
["muted",{Vw:"ADS_CLIENT_EVENT_TYPE_MUTE_EXIT_LAYOUT_REQUESTED",gx:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_MUTE"}],["abandoned",{Vw:"ADS_CLIENT_EVENT_TYPE_ABANDON_EXIT_LAYOUT_REQUESTED",gx:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_ABANDON"}],["user_input_submitted",{Vw:"ADS_CLIENT_EVENT_TYPE_USER_INPUT_SUBMITTED_EXIT_LAYOUT_REQUESTED",gx:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_USER_INPUT_SUBMITTED"}],["user_cancelled",{Vw:"ADS_CLIENT_EVENT_TYPE_USER_CANCELLED_EXIT_LAYOUT_REQUESTED",gx:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_USER_CANCELLED"}],
["error",{Vw:"ADS_CLIENT_EVENT_TYPE_ABORTED_EXIT_LAYOUT_REQUESTED",gx:"ADS_CLIENT_EVENT_TYPE_LAYOUT_EXITED_ABORTED"}]]);g.w(zza,g.I);g.k=zza.prototype;g.k.eO=function(a,b){return this.j.eO(a,b)};
g.k.uh=
g.k.Xf=
g.k.Yf=
g.k.wJ=
g.k.Bc=
g.k.Sc=
g.k.xf=
g.k.xa=
g.k.Pg=Sza.prototype.isActive=g.w(Tza,g.I);g.k=Tza.prototype;g.k.eO=
g.k.wh=function(a){a=TJ(this,a);"not_scheduled"!==a.j&&eK(a.slot,a.j,"onSlotScheduled");a.j="scheduled"};
g.k.ZC=
g.k.Xf=function(a){a=TJ(this,a);"enter_requested"!==a.j&&eK(a.slot,a.j,"onSlotEntered");a.j="entered"};
g.k.wJ=
g.k.Yf=
g.k.Sc=g.w(Zza,g.I);Zza.prototype.get=g.w(aAa,g.I);aAa.prototype.C=function(){return this.j};iK.prototype.executeCommand=lK.prototype.addListener=function(a){this.listeners.add(a)};
lK.prototype.removeListener=function(a){this.listeners.delete(a)};var h3={},tK=(h3.AD_MARKER="ytp-ad-progress",h3.CHAPTER_MARKER="ytp-chapter-marker",h3.TIME_MARKER="ytp-time-marker",h3);var LUa=RegExp("^https?://([^.]*\\.moatads\\.com/|e[0-9]+\\.yt\\.srs\\.doubleverify\\.com|pagead2\\.googlesyndication\\.com/pagead/gen_204\\?id=yt3p&sr=1&|pm\\.adsafeprotected\\.com/youtube|pm\\.test-adsafeprotected\\.com/youtube|youtube[0-9]+\\.moatpixel\\.com/)"),iAa=RegExp("^https://([a-z]+\\.)?[0-9a-f]{1,63}\\.sslproxy\\.corp\\.google\\.com/|^https://([a-z]+\\.)?[a-z0-9\\-]{1,63}\\.demos\\.corp\\.google\\.com/|^https://[0-9a-f]{1,63}\\.proxy\\.googleprod\\.com/|^https?://(([-\\w]*www[-\\w]*\\.|[-\\w]*web[-\\w]*\\.|[-\\w]*canary[-\\w]*\\.|[-\\w]*dev[-\\w]*\\.|[-\\w]{1,3}\\.)+(corp\\.)?youtube(-nocookie|kids|education)?\\.com/|([A-Za-z0-9-]{1,63}\\.)*(youtube\\.googleapis\\.com)[.]?(:[0-9]+)?/|([a-z]+\\.)?[a-z0-9\\-]{1,63}\\.([a-z]{3}|i)\\.corp\\.google\\.com(:[0-9]+)?/|([a-z]+\\.)?[a-z0-9\\-]{1,63}\\.c\\.googlers\\.com(:[0-9]+)?/|(docs|drive)\\.google\\.com/(a/[^/\\\\%]+/|)|(music|music-green-qa|music-release-qa|yt-music-green\\.corp)\\.youtube\\.com/|(tv|tv-green-qa|tv-release-qa)\\.youtube\\.com/|[A-Za-z0-9-]+\\.prod\\.google\\.com(:[0-9]+)?/)"),
MUa=RegExp("^https?://(www\\.google\\.com/pagead/xsul|www\\.youtube\\.com/pagead/slav)"),qAa=RegExp("^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https?://(([A-Za-z0-9-]{1,63}\\.)*(corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|docs\\.google\\.com|drive\\.google\\.com|prod\\.google\\.com|currents\\.google\\.com|mail\\.google\\.com|youtube\\.com|youtubeeducation\\.com|youtube\\-nocookie\\.com|youtubekids\\.com)[.]?(:[0-9]+)?/|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$))"),
oAa=RegExp("^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https?://(([A-Za-z0-9-]{1,63}\\.)*(corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|prod\\.google\\.com|youtube\\.com|youtubekids\\.com)[.]?(:[0-9]+)?/|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$))"),lAa=RegExp("^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,z])?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(lh7\\-(eu|us)\\.((googleusercontent)|(google)))|((photos|testonly|work)\\.fife\\.usercontent\\.google)|([\\w\\-]+\\.fife\\.usercontent\\.google)|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz0\\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(dp[3-6]\\.googleusercontent\\.cn)|(dp4\\.googleusercontent\\.com)|((photos|drive|contribution)\\-image\\-(dev|qa)(-auth|-cookie)?\\.corp\\.google\\.com)|(photos\\-image\\-dev\\-dl\\-(auth|eu|us)\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?))\\/|^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https?://(([A-Za-z0-9-]{1,63}\\.)*(corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|docs\\.google\\.com|drive\\.google\\.com|googleplex\\.com|play\\.google\\.com|prod\\.google\\.com|currents\\.google\\.com|video\\.google\\.com|youtube\\.com|ytimg\\.com|ytimg\\.sandbox\\.google\\.com|chat\\.google\\.com)[.]?(:[0-9]+)?/|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$)|s2\\.googleusercontent\\.com/s2/favicons\\?|yt[3-4]\\.ggpht\\.com/)"),
NUa=RegExp("^https?.*#ocr$|^https?://(aksecure\\.imrworldwide\\.com/|cdn\\.imrworldwide\\.com/|secure\\-..\\.imrworldwide\\.com/)"),mAa=RegExp("^https?://(googleads\\.g\\.doubleclick\\.net/(aclk|pagead/conversion)|www\\.google\\.com/(aclk|pagead/conversion)|www\\.googleadservices\\.com/(aclk|pagead/(aclk|conversion))|www\\.youtube\\.com/pagead/conversion)"),kAa=RegExp("^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,z])?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(lh7\\-(eu|us)\\.((googleusercontent)|(google)))|((photos|testonly|work)\\.fife\\.usercontent\\.google)|([\\w\\-]+\\.fife\\.usercontent\\.google)|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz0\\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(dp[3-6]\\.googleusercontent\\.cn)|(dp4\\.googleusercontent\\.com)|((photos|drive|contribution)\\-image\\-(dev|qa)(-auth|-cookie)?\\.corp\\.google\\.com)|(photos\\-image\\-dev\\-dl\\-(auth|eu|us)\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?))\\/|^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https?://(([A-Za-z0-9-]{1,63}\\.)*(corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|docs\\.google\\.com|drive\\.google\\.com|googleplex\\.com|googlevideo\\.com|prod\\.google\\.com|lh3\\.photos\\.google\\.com|currents\\.google\\.com|mail\\.google\\.com|youtube\\.com|yt\\.akamaized\\.net|chat\\.google\\.com)[.]?(:[0-9]+)?/|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$)|([A-Za-z0-9-]{1,63}\\.)*c\\.lh3(-d[a-gyz]|-testonly)?\\.(googleusercontent|photos\\.google)\\.com/.*$)"),
mQa=RegExp("^https?://(([A-Za-z0-9-]{1,63}\\.)*(imasdk\\.googleapis\\.com|2mdn\\.net|googlesyndication\\.com|corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|googleads\\.g\\.doubleclick\\.net|prod\\.google\\.com|static\\.doubleclick\\.net|static\\.googleadsserving\\.cn|studioapi\\.doubleclick\\.net|youtube\\.com|youtube\\.googleapis\\.com|youtube\\-nocookie\\.com|youtubekids\\.com|ytimg\\.com|ytimg\\.sandbox\\.google\\.com)[.]?(:[0-9]+)?/|lightbox-(demos|builder)\\.appspot\\.com/|s[01](qa)?\\.2mdn\\.net/ads/richmedia/studio/mu/templates/tetris|www\\.gstatic\\.com/doubleclick/studio/innovation/h5/layouts/tetris|www\\.gstatic\\.com/doubleclick/studio/innovation/ytplayer)"),
kQa=RegExp("^https://([A-Za-z0-9-]{1,63}\\.)*(crowdsource|datacompute)\\.google\\.com/|^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https://canvastester-3fd0b\\.appspot\\.com(/|$)|^https://narrative-news-cast-receiver-d\\.appspot\\.com(/|$)|^https://narrative-news-cast-receiver-f\\.appspot\\.com(/|$)|^https://one\\.google\\.com(/|$)|^https://www\\.google\\.com/culturalinstitute/manage/.*$|^https://www\\.gstatic\\.com/aog_howto|^https://www\\.gstatic\\.com/narrative_cast_receiver/news|^https?://(([A-Za-z0-9-]{1,63}\\.)*(imasdk\\.googleapis\\.com|corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|docs\\.google\\.com|drive\\.google\\.com|googleads\\.g\\.doubleclick\\.net|googleplex\\.com|play\\.google\\.com|prod\\.google\\.com|photos\\.google\\.com|get\\.google\\.com|currents\\.google\\.com|books\\.googleusercontent\\.com|play\\-books\\-autopush\\-sandbox\\.googleusercontent\\.com|play\\-books\\-canary\\-sandbox\\.googleusercontent\\.com|play\\-books\\-internal\\-sandbox\\.googleusercontent\\.com|play\\-books\\-staging\\-sandbox\\.googleusercontent\\.com|blogger\\.com|mail\\.google\\.com|survey\\.g\\.doubleclick\\.net|youtube\\.com|youtube\\.googleapis\\.com|youtubeeducation\\.com|youtube\\-nocookie\\.com|yt\\-web\\-embedded\\-player\\.appspot\\.com|youtubekids\\.com|vevo\\.com|chat\\.google\\.com|meet\\.google\\.com|artsandculture\\.google\\.com)[.]?(:[0-9]+)?(/|$)|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$)|(www\\.|encrypted\\.)?google\\.(cat|com(\\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))/(search|webhp)\\?|(www\\.|encrypted\\.)google\\.(cat|com(\\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))/?$|lightbox-(demos|builder)\\.appspot\\.com/|s0\\.2mdn\\.net/instream/html5/native/|s[01](qa)?\\.2mdn\\.net/ads/richmedia/studio/mu/templates/tetris|www\\.gstatic\\.com/doubleclick/studio/innovation/h5/layouts/tetris)"),
lQa=RegExp("^https?://([A-Za-z0-9-]{1,63}\\.)*(stadia\\.google\\.com)[.]?(:[0-9]+)?(/|$)"),gkb=RegExp("^(https://photos\\.google\\.com|https://get\\.google\\.com|https://currents\\.google\\.com|https://mail\\.google\\.com|https://yt\\-web\\-embedded\\-player\\.appspot\\.com|http://yt\\-web\\-embedded\\-player\\.appspot\\.com|https://chat\\.google\\.com|https://one\\.google\\.com|https://artsandculture\\.google\\.com)$|^http://[0-9]+\\.[a-z0-9\\-_]+\\.[a-z0-9\\-_]+\\.[a-z0-9\\-_]+\\.([a-z]{2}|i)\\.borg\\.google\\.com(:[0-9]+)?$|^https://((autopush|beta-lookup|daily-[0-6]|manual-qual|preprod|stream)\\.)?meet\\.google\\.com$|^https://([A-Za-z0-9-]{1,63}\\.)*(crowdsource|datacompute)\\.google\\.com$|^https://([A-Za-z0-9-]{1,63}\\.)*(youtube|youtubekids|youtubeeducation)\\.com$|^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com$|^https://([A-Za-z0-9-]{1,63}\\.)+sandbox\\.google\\.com$|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com$|^https://(books|play-books-(autopush|canary|internal|staging)-sandbox)\\.googleusercontent\\.com$|^https://(draft|www|(www\\.)?dev\\.sandbox|(www\\.)?autopush\\.sandbox|(www\\.)?staging\\.sandbox|(www\\.)?restore\\.sandbox)\\.blogger\\.com$|^https://[0-9a-f]{1,63}\\.proxy\\.googleprod\\.com$|^https?://(((docs|m|sing|ss|sss|www)\\.)?drive\\.google\\.com$|([A-Za-z0-9-]{1,63}\\.)*c\\.googlers\\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\\.)*corp\\.google\\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\\.)*googleplex\\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\\.)*proxy\\.googlers\\.com(:[0-9]+)?$|(www\\.|encrypted\\.)google\\.(cat|com(\\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))/?$|[A-Za-z0-9-]+\\.prod\\.google\\.com(:[0-9]+)?$|docs\\.google\\.com$)"),
hkb=RegExp("^(https://stadia\\.google\\.com)$");var hAa=!1;g.uK.prototype.getId=function(){return this.id};
g.uK.prototype.toString=
g.uK.prototype.contains=
var tAa=1;g.uK.prototype.getId=g.uK.prototype.getId;xAa.prototype.ZC=
xAa.prototype.HM=function(){gAa(this.j)};zAa.prototype.ZC=
zAa.prototype.HM=AAa.prototype.ZC=
AAa.prototype.HM=CAa.prototype.build=g.w(xK,CAa);
xK.prototype.j=g.w(yK,CAa);yK.prototype.j=g.k=DAa.prototype;g.k.wc=function(){return this.slot};
g.k.sb=function(){return this.layout};
g.k.init=function(){};
g.k.release=function(){};
g.k.startRendering=
g.k.rf=g.w(CK,g.uG);g.k=CK.prototype;g.k.wc=function(){return this.B.slot};
g.k.sb=function(){return this.B.layout};
g.k.init=
g.k.release=
g.k.rO=function(){};
g.k.pO=function(){};
g.k.oO=function(){};
g.k.gI=function(){};
g.k.startRendering=
g.k.AK=
g.k.rf=
g.k.xa=
g.fa.Object.defineProperties(CK.prototype,{slot:{configurable:!0,enumerable:!0,get:function(){return this.B.slot}},
layout:{configurable:!0,enumerable:!0,get:function(){return this.B.layout}}});JK.prototype.Ah=
JK.prototype.Tc=
JK.prototype.kx=g.w(QAa,tG);g.w(RAa,CK);g.k=RAa.prototype;g.k.zg=function(a,b){FK("banner-image",a,this.K.get().Hj,this.Oa.get(),this.D,this.G,this.wc(),this.sb(),b)};
g.k.startRendering=function(a){EK(this.ob,this.wc(),this.sb(),this.callback,"metadata_type_banner_image_layout_view_model",function(b,c,d,e,f){return new QAa(b,c,d,e,f)},this.j);
CK.prototype.startRendering.call(this,a)};
g.k.Bc=function(a,b){if(b.layoutId===this.layout.layoutId){a=JJ(b.Ca,"metadata_type_banner_image_layout_view_model");b=KAa(this.Oa.get(),{adPlacementConfig:this.adPlacementConfig});var c;kK(this.Ab.get(),gG(null==(c=a.interaction)?void 0:c.onFirstVisible),this.layout.layoutId,b)}else this.G===b.layoutId&&(null===this.D?this.D=this.Oa.get().Xi():iH("OnLayoutEntered should set engagePingCallback, but it was not null",this.slot,this.layout))};
g.k.Sc=function(){};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.xa=function(){this.Wc().Fd.delete(this);CK.prototype.xa.call(this)};g.w(TAa,tG);g.w(UAa,CK);g.k=UAa.prototype;g.k.zg=function(a,b){FK("action-companion",a,this.K.get().Hj,this.Oa.get(),this.D,this.G,this.wc(),this.sb(),b)};
g.k.startRendering=function(a){EK(this.ob,this.wc(),this.sb(),this.callback,"metadata_type_action_companion_ad_renderer",function(b,c,d,e,f){return new TAa(b,c,d,e,f)},this.j);
CK.prototype.startRendering.call(this,a)};
g.k.Bc=function(a,b){b.layoutId===this.layout.layoutId?this.ob.Tc("impression"):this.G===b.layoutId&&(null===this.D?this.D=this.Oa.get().Xi():iH("OnLayoutEntered should set engagePingCallback, but it was not null",this.slot,this.layout))};
g.k.Sc=function(){};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.xa=function(){this.Wc().Fd.delete(this);CK.prototype.xa.call(this)};g.w(WAa,tG);g.w(XAa,CK);g.k=XAa.prototype;g.k.zg=function(a,b){FK("image-companion",a,this.K.get().Hj,this.Oa.get(),this.D,this.G,this.wc(),this.sb(),b)};
g.k.startRendering=function(a){EK(this.ob,this.wc(),this.sb(),this.callback,"metadata_type_image_companion_ad_renderer",function(b,c,d,e,f){return new WAa(b,c,d,e,f)},this.j);
CK.prototype.startRendering.call(this,a)};
g.k.Bc=function(a,b){b.layoutId===this.layout.layoutId?this.ob.Tc("impression"):this.G===b.layoutId&&(null===this.D?this.D=this.Oa.get().Xi():iH("OnLayoutEntered should set engagePingCallback, but it was not null",this.slot,this.layout))};
g.k.Sc=function(){};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.xa=function(){this.Wc().Fd.delete(this);CK.prototype.xa.call(this)};g.w(ZAa,tG);g.w($Aa,CK);g.k=$Aa.prototype;g.k.zg=function(a,b){FK("shopping-companion",a,this.K.get().Hj,this.Oa.get(),this.D,this.G,this.wc(),this.sb(),b)};
g.k.startRendering=function(a){EK(this.ob,this.wc(),this.sb(),this.callback,"metadata_type_shopping_companion_carousel_renderer",function(b,c,d,e,f){return new ZAa(b,c,d,e,f)},this.j);
CK.prototype.startRendering.call(this,a)};
g.k.Bc=function(a,b){b.layoutId===this.layout.layoutId?this.ob.Tc("impression"):this.G===b.layoutId&&(null===this.D?this.D=this.Oa.get().Xi():iH("OnLayoutEntered should set engagePingCallback, but it was not null",this.slot,this.layout))};
g.k.Sc=function(){};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.xa=function(){this.Wc().Fd.delete(this);CK.prototype.xa.call(this)};g.w(eBa,CK);g.k=eBa.prototype;g.k.startRendering=function(a){EK(this.ob,this.wc(),this.sb(),this.callback,"metadata_type_action_companion_ad_renderer",function(b,c,d,e,f){return new TAa(b,c,d,e,f)},this.j);
CK.prototype.startRendering.call(this,a)};
g.k.Bc=function(){};
g.k.Sc=function(){};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.xa=function(){this.Wc().Fd.delete(this);CK.prototype.xa.call(this)};
g.k.zg=function(){};g.k=gBa.prototype;g.k.wc=function(){return this.slot};
g.k.sb=function(){return this.layout};
g.k.init=
g.k.release=
g.k.startRendering=
g.k.rf=
g.k.Vk=
g.k.onVolumeChange=function(){};
g.k.Aj=function(){};
g.k.rh=function(){};
g.k.Wk=function(){};
g.k.onFullscreenToggled=function(){};
g.k.Bj=function(){};
g.k.bj=function(){};
g.k.QY=
g.k.oA=function(){this.ob.Tc("active_view_measurable")};
g.k.pA=function(){this.ob.Tc("active_view_viewable")};
g.k.nA=function(){this.ob.Tc("active_view_fully_viewable_audible_half_duration")};
g.k.mA=function(){this.ob.Tc("audio_measurable")};
g.k.lA=g.w(hBa,CK);g.k=hBa.prototype;g.k.init=
g.k.Ip=function(){this.D||this.Ia.get().resumeVideo(1)};
g.k.startRendering=
g.k.rf=
g.k.zg=
g.k.xa=function(){CK.prototype.xa.call(this)};g.w(iBa,tG);g.w(jBa,CK);g.k=jBa.prototype;g.k.startRendering=function(a){EK(this.ob,this.wc(),this.sb(),this.callback,"metadata_type_top_banner_image_text_icon_buttoned_layout_view_model",function(b,c,d,e,f){return new iBa(b,c,d,e,f)},this.j);
CK.prototype.startRendering.call(this,a)};
g.k.Bc=function(){};
g.k.Sc=function(){};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.xa=function(){this.Wc().Fd.delete(this);CK.prototype.xa.call(this)};
g.k.zg=function(){};g.w(PK,tG);g.w(QK,CK);QK.prototype.init=
QK.prototype.startRendering=function(a){CK.prototype.startRendering.call(this,a);this.callback.Bc(this.slot,a)};
QK.prototype.zg=
QK.prototype.xa=function(){CK.prototype.xa.call(this)};SK.prototype.build=g.w(mBa,tG);g.w(nBa,CK);g.k=nBa.prototype;g.k.zg=function(a,b){FK("ads-engagement-panel",a,this.K.get().Hj,this.Oa.get(),this.D,this.G,this.wc(),this.sb(),b)};
g.k.startRendering=function(a){EK(this.ob,this.wc(),this.sb(),this.callback,"metadata_type_ads_engagement_panel_renderer",function(b,c,d,e,f){return new mBa(b,c,d,e,f)},this.j);
CK.prototype.startRendering.call(this,a)};
g.k.Bc=
g.k.Sc=function(){};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.xa=function(){this.Wc().Fd.delete(this);CK.prototype.xa.call(this)};g.w(pBa,CK);g.k=pBa.prototype;g.k.zg=
g.k.startRendering=
g.k.Bc=
g.k.Sc=function(){};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.xa=rBa.prototype.build=g.w(sBa,tG);g.w(TK,CK);TK.prototype.init=
TK.prototype.zg=function(){};
TK.prototype.startRendering=
TK.prototype.xa=function(){CK.prototype.xa.call(this)};tBa.prototype.build=g.k=uBa.prototype;g.k.wc=function(){return this.slot};
g.k.sb=function(){return this.layout};
g.k.init=function(){};
g.k.release=function(){};
g.k.startRendering=function(a){a.layoutId!==this.layout.layoutId?this.callback.xf(this.slot,a,new GJ("Tried to start rendering an unknown layout, this adapter requires LayoutId: "+this.layout.layoutId+("and LayoutType: "+this.layout.layoutType),void 0,"ADS_CLIENT_ERROR_MESSAGE_UNKNOWN_LAYOUT"),"ADS_CLIENT_ERROR_TYPE_ENTER_LAYOUT_FAILED"):(this.callback.Bc(this.slot,a),this.ob.Tc("impression"),lM(this.j,a))};
g.k.rf=function(a,b){a.layoutId!==this.layout.layoutId?this.callback.xf(this.slot,a,new GJ("Tried to stop rendering an unknown layout, this adapter requires LayoutId: "+this.layout.layoutId+("and LayoutType: "+this.layout.layoutType),void 0,"ADS_CLIENT_ERROR_MESSAGE_UNKNOWN_LAYOUT"),"ADS_CLIENT_ERROR_TYPE_EXIT_LAYOUT_FAILED"):this.callback.Sc(this.slot,a,b)};g.k=wBa.prototype;g.k.wc=function(){return this.slot};
g.k.sb=function(){return this.layout};
g.k.init=function(){};
g.k.release=function(){};
g.k.startRendering=
g.k.rf=UK.prototype.build=g.w(xBa,tG);g.w(yBa,CK);g.k=yBa.prototype;g.k.init=
g.k.Ip=function(){this.D||this.Ia.get().resumeVideo(2)};
g.k.startRendering=function(a){CK.prototype.startRendering.call(this,a);this.callback.Bc(this.slot,a);this.G.Wr=this};
g.k.rf=function(a,b){CK.prototype.rf.call(this,a,b);y2(this.G,this)};
g.k.zg=
g.k.xa=function(){CK.prototype.xa.call(this)};g.w(VK,CK);g.k=VK.prototype;g.k.init=
g.k.Ip=
g.k.startRendering=
g.k.rf=
g.k.zg=
g.k.xa=g.w(BBa,tG);g.w(WK,CK);g.k=WK.prototype;g.k.startRendering=
g.k.bj=function(){};
g.k.Bj=
g.k.onFullscreenToggled=function(){};
g.k.rh=function(){};
g.k.Wk=function(){};
g.k.Aj=function(){};
g.k.onVolumeChange=function(){};
g.k.Vk=function(){};
g.k.zg=EBa.prototype.build=FBa.prototype.build=var ikb,i3,HBa;
ikb={yja:"ALREADY_PINNED_ON_A_DEVICE",AUTHENTICATION_EXPIRED:"AUTHENTICATION_EXPIRED",voa:"AUTHENTICATION_MALFORMED",woa:"AUTHENTICATION_MISSING",Ioa:"BAD_REQUEST",Upa:"CAST_SESSION_DEVICE_MISMATCHED",Vpa:"CAST_SESSION_VIDEO_MISMATCHED",Wpa:"CAST_TOKEN_EXPIRED",Xpa:"CAST_TOKEN_FAILED",Ypa:"CAST_TOKEN_MALFORMED",Eqa:"CGI_PARAMS_MALFORMED",Fqa:"CGI_PARAMS_MISSING",yva:"DEVICE_FALLBACK",Ywa:"GENERIC_WITH_LINK_AND_CPN",Zwa:"ERROR_HDCP",exa:"LICENSE",hxa:"VIDEO_UNAVAILABLE",IEa:"FORMAT_UNAVAILABLE",OEa:"GEO_FAILURE",
jGa:"HTML5_AUDIO_RENDERER_ERROR",kGa:"GENERIC_WITHOUT_LINK",lGa:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK",mGa:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK",nGa:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK_SHORT",wGa:"HTML5_SPS_UMP_STATUS_REJECTED",EHa:"INVALID_DRM_MESSAGE",D1a:"PURCHASE_NOT_FOUND",E1a:"PURCHASE_REFUNDED",E2a:"RENTAL_EXPIRED",M2a:"RETRYABLE_ERROR",K3a:"SERVER_ERROR",b5a:"SIGNATURE_EXPIRED",B8a:"STOPPED_BY_ANOTHER_PLAYBACK",I9a:"STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",J9a:"STREAMING_NOT_ALLOWED",
K9a:"STREAM_LICENSE_NOT_FOUND",Nab:"TOO_MANY_REQUESTS",Oab:"TOO_MANY_REQUESTS_WITH_LINK",Qab:"TOO_MANY_STREAMS_PER_ENTITLEMENT",Rab:"TOO_MANY_STREAMS_PER_USER",Fgb:"UNSUPPORTED_DEVICE",Xgb:"VIDEO_FORBIDDEN",thb:"VIDEO_NOT_FOUND"};i3={};
g.uW=(i3.ALREADY_PINNED_ON_A_DEVICE="\u0412\u044b \u0443\u0436\u0435 \u0441\u043a\u0430\u0447\u0430\u043b\u0438 \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432, \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0430\u0432\u043e\u043e\u0431\u043b\u0430\u0434\u0430\u0442\u0435\u043b\u0435\u043c. \u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u0437\u0434\u0435\u0441\u044c, \u043e\u0442\u043a\u0440\u0435\u043f\u0438\u0442\u0435 \u0435\u0433\u043e \u043e\u0442 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430.",i3.DEVICE_FALLBACK=
"\u0412\u0438\u0434\u0435\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043d\u0430 \u044d\u0442\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.",i3.GENERIC_WITH_LINK_AND_CPN="\u041e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435. \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f: $CPN. $BEGIN_LINK\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...$END_LINK",
i3.LICENSE="\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043e \u0438\u0437-\u0437\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0435\u0439.",i3.VIDEO_UNAVAILABLE="\u041e\u0448\u0438\u0431\u043a\u0430",i3.FORMAT_UNAVAILABLE="\u042d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0432 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",
i3.GEO_FAILURE="\u042d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0435.",i3.HTML5_AUDIO_RENDERER_ERROR="\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0430\u0443\u0434\u0438\u043e. \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440.",
i3.GENERIC_WITHOUT_LINK="\u041e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",i3.HTML5_NO_AVAILABLE_FORMATS_FALLBACK="\u042d\u0442\u043e\u0442 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u0438\u0434\u0435\u043e \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f",i3.HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK="\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0435\u0442 \u043d\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0432\u0438\u0434\u0435\u043e\u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432. $BEGIN_LINK\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043e \u0432\u0438\u0434\u0435\u043e HTML5.$END_LINK",
i3.HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK_SHORT="\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043e \u0432 \u044d\u0442\u043e\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043d\u0435\u043b\u044c\u0437\u044f. $BEGIN_LINK\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435\u2026$END_LINK",i3.HTML5_SPS_UMP_STATUS_REJECTED="\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435. $BEGIN_LINK\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435\u2026$END_LINK",
i3.INVALID_DRM_MESSAGE="\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b DRM.",i3.PURCHASE_NOT_FOUND="\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u044d\u0442\u043e\u0433\u043e \u0432\u0438\u0434\u0435\u043e.",
i3.PURCHASE_REFUNDED="\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u0439 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432.",i3.RENTAL_EXPIRED="\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u043a\u0430\u0442\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u043e\u0441\u044c.",i3.CAST_SESSION_DEVICE_MISMATCHED="\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 \u0441\u0435\u0430\u043d\u0441\u0435 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u043c\u0443.",
i3.CAST_SESSION_VIDEO_MISMATCHED="\u0412\u0438\u0434\u0435\u043e \u0432 \u0441\u0435\u0430\u043d\u0441\u0435 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u043e\u043c\u0443.",i3.CAST_TOKEN_FAILED="\u0421\u0435\u0430\u043d\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",
i3.CAST_TOKEN_EXPIRED="\u0412\u0440\u0435\u043c\u044f \u0441\u0435\u0430\u043d\u0441\u0430 \u0438\u0441\u0442\u0435\u043a\u043b\u043e. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.",i3.CAST_TOKEN_MALFORMED="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0430\u043d\u0441. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",
i3.SERVER_ERROR="\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",i3.STOPPED_BY_ANOTHER_PLAYBACK="\u0412\u0438\u0434\u0435\u043e \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u0430\u0448\u0435\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440.",
i3.STREAM_LICENSE_NOT_FOUND="\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0440\u0432\u0430\u043d\u043e. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.",i3.STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED="\u0417\u0430 \u0441\u0443\u0442\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432/IP-\u0430\u0434\u0440\u0435\u0441\u043e\u0432.",
i3.STREAMING_NOT_ALLOWED="\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0432\u0438\u0434\u0435\u043e \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u043e \u043a \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443.",i3.RETRYABLE_ERROR="\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435.",
i3.TOO_MANY_REQUESTS="\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442.",i3.TOO_MANY_REQUESTS_WITH_LINK="\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0438\u0434\u0435\u043e \u043d\u0430 YouTube, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e $BEGIN_LINK\u044d\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435$END_LINK.",
i3.TOO_MANY_STREAMS_PER_USER="\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0435\u043e, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0438\u0445\u0441\u044f \u043a \u043e\u0434\u043d\u043e\u043c\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443.",
i3.TOO_MANY_STREAMS_PER_ENTITLEMENT="\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e.",i3.UNSUPPORTED_DEVICE=
"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u043c.",i3.VIDEO_FORBIDDEN="\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0438\u0434\u0435\u043e \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d.",i3.VIDEO_NOT_FOUND="\u041d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0439\u0442\u0438 \u0432\u0438\u0434\u0435\u043e.",
i3);
HBa={300:"STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",301:"ALREADY_PINNED_ON_A_DEVICE",303:"STOPPED_BY_ANOTHER_PLAYBACK",304:"TOO_MANY_STREAMS_PER_USER",305:"TOO_MANY_STREAMS_PER_ENTITLEMENT",400:"VIDEO_NOT_FOUND",401:"GEO_FAILURE",402:"STREAMING_NOT_ALLOWED",403:"UNSUPPORTED_DEVICE",405:"VIDEO_FORBIDDEN",500:"PURCHASE_NOT_FOUND",501:"RENTAL_EXPIRED",502:"PURCHASE_REFUNDED",5E3:"BAD_REQUEST",5001:"CGI_PARAMS_MISSING",5002:"CGI_PARAMS_MALFORMED",5100:"AUTHENTICATION_MISSING",5101:"AUTHENTICATION_MALFORMED",5102:"AUTHENTICATION_EXPIRED",
5200:"CAST_TOKEN_MALFORMED",5201:"CAST_TOKEN_EXPIRED",5202:"CAST_TOKEN_FAILED",5203:"CAST_SESSION_VIDEO_MISMATCHED",5204:"CAST_SESSION_DEVICE_MISMATCHED",6E3:"INVALID_DRM_MESSAGE",7E3:"SERVER_ERROR",8E3:"RETRYABLE_ERROR"};var jkb;var kkb=g.oc(),lkb=kkb.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!lkb||2>lkb.length)jkb=void 0;else{var mkb=kkb.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);jkb=mkb&&6===mkb.length?Number(mkb[5].replace("_",".")):0}var vT=jkb,pW=0<=vT;var KBa=!1;g.w(g.hL,eD);g.hL.prototype.T=var j3={},YOa=(j3.FAIRPLAY="fairplay",j3.PLAYREADY="playready",j3.WIDEVINE="widevine",j3.CLEARKEY=null,j3.FLASHACCESS=null,j3.UNKNOWN=null,j3.WIDEVINE_CLASSIC=null,j3);iL.prototype.isMultiChannelAudio=var k3={},fQ=(k3.WIDTH={name:"width",video:!0,valid:640,Cn:99999},k3.HEIGHT={name:"height",video:!0,valid:360,Cn:99999},k3.FRAMERATE={name:"framerate",video:!0,valid:30,Cn:9999},k3.BITRATE={name:"bitrate",video:!0,valid:3E5,Cn:2E9},k3.EOTF={name:"eotf",video:!0,valid:"bt709",Cn:"catavision"},k3.CHANNELS={name:"channels",video:!1,valid:2,Cn:99},k3.CRYPTOBLOCKFORMAT={name:"cryptoblockformat",video:!0,valid:"subsample",Cn:"invalidformat"},k3.DECODETOTEXTURE={name:"decode-to-texture",video:!0,valid:"false",
Cn:"nope"},k3.AV1_CODECS={name:"codecs",video:!0,valid:"av01.0.05M.08",Cn:"av99.0.05M.08"},k3.EXPERIMENTAL={name:"experimental",video:!0,valid:"allowed",Cn:"invalid"},k3);var nkb=["h","H"],okb=["9","("],pkb=["9h","(h"],qkb=["8","*"],rkb=["a","A"],skb=["o","O"],tkb=["m","M"],ukb=["mac3","MAC3"],vkb=["meac3","MEAC3"],l3={},tPa=(l3.h=nkb,l3.H=nkb,l3["9"]=okb,l3["("]=okb,l3["9h"]=pkb,l3["(h"]=pkb,l3["8"]=qkb,l3["*"]=qkb,l3.a=rkb,l3.A=rkb,l3.o=skb,l3.O=skb,l3.m=tkb,l3.M=tkb,l3.mac3=ukb,l3.MAC3=ukb,l3.meac3=vkb,l3.MEAC3=vkb,l3),wkb=new Set("o O a ah A m M mac3 MAC3 meac3 MEAC3 so sa".split(" ")),KMa=new Set("m M mac3 MAC3 meac3 MEAC3".split(" "));var m3={},mL=(m3["0"]="f",m3["160"]="h",m3["133"]="h",m3["134"]="h",m3["135"]="h",m3["136"]="h",m3["137"]="h",m3["264"]="h",m3["266"]="h",m3["138"]="h",m3["298"]="h",m3["299"]="h",m3["304"]="h",m3["305"]="h",m3["214"]="h",m3["216"]="h",m3["374"]="h",m3["375"]="h",m3["140"]="a",m3["141"]="ah",m3["327"]="sa",m3["258"]="m",m3["380"]="mac3",m3["328"]="meac3",m3["161"]="H",m3["142"]="H",m3["143"]="H",m3["144"]="H",m3["222"]="H",m3["223"]="H",m3["145"]="H",m3["224"]="H",m3["225"]="H",m3["146"]="H",m3["226"]=
"H",m3["227"]="H",m3["147"]="H",m3["384"]="H",m3["376"]="H",m3["385"]="H",m3["377"]="H",m3["149"]="A",m3["261"]="M",m3["381"]="MAC3",m3["329"]="MEAC3",m3["598"]="9",m3["278"]="9",m3["242"]="9",m3["243"]="9",m3["244"]="9",m3["775"]="9",m3["776"]="9",m3["777"]="9",m3["778"]="9",m3["779"]="9",m3["780"]="9",m3["781"]="9",m3["782"]="9",m3["783"]="9",m3["247"]="9",m3["248"]="9",m3["353"]="9",m3["355"]="9",m3["356"]="9",m3["271"]="9",m3["577"]="9",m3["313"]="9",m3["579"]="9",m3["272"]="9",m3["302"]="9",
m3["303"]="9",m3["407"]="9",m3["408"]="9",m3["308"]="9",m3["315"]="9",m3["330"]="9h",m3["331"]="9h",m3["332"]="9h",m3["333"]="9h",m3["334"]="9h",m3["335"]="9h",m3["336"]="9h",m3["337"]="9h",m3["338"]="so",m3["600"]="o",m3["250"]="o",m3["251"]="o",m3["194"]="*",m3["195"]="*",m3["220"]="*",m3["221"]="*",m3["196"]="*",m3["197"]="*",m3["279"]="(",m3["280"]="(",m3["317"]="(",m3["318"]="(",m3["273"]="(",m3["274"]="(",m3["357"]="(",m3["358"]="(",m3["275"]="(",m3["359"]="(",m3["360"]="(",m3["276"]="(",m3["583"]=
"(",m3["584"]="(",m3["314"]="(",m3["585"]="(",m3["561"]="(",m3["277"]="(",m3["361"]="(h",m3["362"]="(h",m3["363"]="(h",m3["364"]="(h",m3["365"]="(h",m3["366"]="(h",m3["591"]="(h",m3["592"]="(h",m3["367"]="(h",m3["586"]="(h",m3["587"]="(h",m3["368"]="(h",m3["588"]="(h",m3["562"]="(h",m3["409"]="(",m3["410"]="(",m3["411"]="(",m3["412"]="(",m3["557"]="(",m3["558"]="(",m3["394"]="1",m3["395"]="1",m3["396"]="1",m3["397"]="1",m3["398"]="1",m3["399"]="1",m3["400"]="1",m3["401"]="1",m3["571"]="1",m3["402"]=
"1",m3["694"]="1h",m3["695"]="1h",m3["696"]="1h",m3["697"]="1h",m3["698"]="1h",m3["699"]="1h",m3["700"]="1h",m3["701"]="1h",m3["702"]="1h",m3["703"]="1h",m3["386"]="3",m3["387"]="w",m3["406"]="6",m3["645"]="(",m3["646"]="(",m3["647"]="(",m3["648"]="(",m3["649"]="(",m3["650"]="(",m3["651"]="(",m3["652"]="(",m3["653"]="(",m3["654"]="(",m3["655"]="(",m3["656"]="(",m3["657"]="(",m3["658"]="(",m3["659"]="(",m3["660"]="(",m3["661"]="(",m3["662"]="(",m3["663"]="(",m3["664"]="(",m3["665"]="(",m3["666"]="(",
m3["667"]="(",m3["668"]="(",m3["669"]="(",m3["670"]="(",m3["671"]="(",m3["672"]="(",m3["673"]="(",m3["674"]="(h",m3["675"]="(h",m3["676"]="(h",m3["677"]="(h",m3["678"]="(h",m3["679"]="(h",m3["680"]="(h",m3["681"]="(h",m3["682"]="(h",m3["683"]="(h",m3["684"]="(h",m3["685"]="(h",m3["686"]="(h",m3["687"]="(h",m3["688"]="A",m3["689"]="A",m3["690"]="A",m3["691"]="MEAC3",m3["773"]="i",m3);var n3={},VOa=(n3.STEREO_LAYOUT_UNKNOWN=0,n3.STEREO_LAYOUT_LEFT_RIGHT=1,n3.STEREO_LAYOUT_TOP_BOTTOM=2,n3);var o3,VP;o3={};g.jL=(o3.auto=0,o3.tiny=144,o3.light=144,o3.small=240,o3.medium=360,o3.large=480,o3.hd720=720,o3.hd1080=1080,o3.hd1440=1440,o3.hd2160=2160,o3.hd2880=2880,o3.highres=4320,o3);VP={0:"auto",144:"tiny",240:"small",360:"medium",480:"large",720:"hd720",1080:"hd1080",1440:"hd1440",2160:"hd2160",2880:"hd2880",4320:"highres"};var lL="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");kL.prototype.isHdr=nL.prototype.Pe=
nL.prototype.isEncrypted=function(){return!!this.ke};
nL.prototype.zi=function(){return!!this.audio};
nL.prototype.dh=function(){return!!this.video};g.w(GL,g.uG);g.k=GL.prototype;g.k.appendBuffer=
g.k.abort=function(){this.Pd.abort()};
g.k.remove=
g.k.yf=
g.k.clear=
g.k.qR=
g.k.iO=function(){return this.timestampOffset+this.start};
g.k.eD=function(){return this.appendWindowStart};
g.k.GH=function(){return this.appendWindowEnd};
g.k.Vp=function(a){this.timestampOffset=a};
g.k.Qc=function(){return this.timestampOffset};
g.k.cf=
g.k.bk=function(){return this.Pd.bk()};
g.k.dI=function(){return this.Pd.dI()};
g.k.gm=function(){return this.Pd.gm()};
g.k.MO=function(){return this.Pd.MO()};
g.k.Gy=function(){this.Pd.Gy()};
g.k.Iz=function(a){return this.Pd.Iz(a)};
g.k.xv=function(){return this.Pd.xv()};
g.k.NH=function(){return this.Pd.NH()};
g.k.jS=function(a,b){this.Pd.jS(a,b)};
g.k.supports=function(a){return this.Pd.supports(a)};
g.k.PH=function(){return this.Pd.PH()};
g.k.isView=function(){return!0};
g.k.SG=
g.k.isLocked=
g.k.uc=
g.k.OH=function(){return this.Pd.OH()};
g.k.oD=function(){return this.Pd.oD()};
g.k.dO=function(){return this.Pd.dO()};
g.k.xa=var q_=!1;g.w(HL,g.uG);g.k=HL.prototype;g.k.appendBuffer=
g.k.abort=
g.k.remove=
g.k.yf=
g.k.clear=
g.k.eD=
g.k.GH=function(){var a;return(null==(a=this.dc)?void 0:a.appendWindowEnd)||0};
g.k.qR=
g.k.iO=function(){return this.timestampOffset};
g.k.Vp=
g.k.Qc=
g.k.cf=
g.k.bk=
g.k.gm=function(){return this.XG};
g.k.MO=
g.k.Gy=function(){this.XG=!1};
g.k.Iz=
g.k.xv=function(){return this.ZD};
g.k.NH=function(){return this.eP};
g.k.jS=
g.k.PH=function(){return this.Jf};
g.k.isView=function(){return!1};
g.k.supports=
g.k.SG=function(){return!this.bk()};
g.k.isLocked=function(){return!1};
g.k.uc=
g.k.dI=
g.k.OH=
g.k.xa=
g.k.oD=function(){return this.containerType};
g.k.dO=function(){return this.SA};
var YBa=!1,xkb=!1;JL.prototype.dispose=
JL.prototype.isDisposed=function(){return this.B};
JL.prototype.toString=function(){return"MediaResource {"+this.resource+"}"};g.w(KL,g.I);g.k=KL.prototype;g.k.getDuration=
g.k.ql=
g.k.Og=
g.k.bk=
g.k.isAsync=
g.k.oaa=
g.k.naa=function(){this.dispose()};
g.k.v3=
g.k.GM=
g.k.clear=
g.k.gm=
g.k.Iz=
var aCa=!1,LL=!1;RL.prototype.then=function(a,b){return this.promise.then(a,b)};
RL.prototype.resolve=function(a){this.hR(a)};
RL.prototype.reject=function(a){this.b_(a)};g.w(SL,g.I);g.k=SL.prototype;g.k.wG=function(){return this.resource};
g.k.vy=
g.k.Bq=
g.k.playVideo=
g.k.seekTo=
g.k.Yn=
g.k.stopVideo=
g.k.iz=
g.k.Bv=
g.k.uc=
g.k.hasError=
g.k.addEventListener=
g.k.removeEventListener=
g.k.dispatchEvent=
g.k.qN=function(){this.K=!1};
g.k.mN=
g.k.AV=
g.k.xa=
var zkb=!1,Akb=!1,ykb=!1,nCa=!1;g.k=g.UL.prototype;g.k.isPaused=function(){return g.kH(this,4)};
g.k.isPlaying=
g.k.isCued=
g.k.isError=function(){return g.kH(this,128)};
g.k.isSuspended=function(){return g.kH(this,512)};
g.k.TD=
g.k.toString=
var p3={},q3=(p3.BUFFERING="buffering-mode",p3.CUED="cued-mode",p3.ENDED="ended-mode",p3.PAUSED="paused-mode",p3.PLAYING="playing-mode",p3.SEEKING="seeking-mode",p3.UNSTARTED="unstarted-mode",p3);g.w(dM,g.I);g.k=dM.prototype;g.k.wc=function(){return this.slot};
g.k.sb=function(){return this.layout};
g.k.init=
g.k.release=
g.k.lr=function(){};
g.k.vr=function(){};
g.k.startRendering=
g.k.Bc=
g.k.ww=
g.k.fI=
g.k.gX=function(){this.cH()};
g.k.XW=
g.k.YW=
g.k.mz=
g.k.Mk=function(){var a;return(null==(a=this.Wa.get().gf(1))?void 0:a.clientPlaybackNonce)||""};
g.k.FH=
g.k.rf=
g.k.Sc=
g.k.gz=function(){return this.layout.layoutId};
g.k.HN=function(){return this.Ku};
g.k.Bj=
g.k.oA=function(){if("rendering"===this.Lc){this.ob.Tc("active_view_measurable");var a,b=(null==(a=cM(this))?void 0:a.activeViewMeasurableCommands)||[];jK(this.Ab.get(),b,this.layout.layoutId)}};
g.k.nA=function(){if("rendering"===this.Lc){this.ob.Tc("active_view_fully_viewable_audible_half_duration");var a,b=(null==(a=cM(this))?void 0:a.activeViewFullyViewableAudibleHalfDurationCommands)||[];jK(this.Ab.get(),b,this.layout.layoutId)}};
g.k.pA=function(){if("rendering"===this.Lc){this.ob.Tc("active_view_viewable");var a,b=(null==(a=cM(this))?void 0:a.activeViewViewableCommands)||[];jK(this.Ab.get(),b,this.layout.layoutId)}};
g.k.lA=function(){if("rendering"===this.Lc){this.ob.Tc("audio_audible");var a,b=(null==(a=cM(this))?void 0:a.activeViewAudioAudibleCommands)||[];jK(this.Ab.get(),b,this.layout.layoutId)}};
g.k.mA=
g.k.KG=
g.k.onFullscreenToggled=
g.k.onVolumeChange=
g.k.rh=function(){};
g.k.Wk=function(){};
g.k.Aj=function(){};
g.k.Vk=function(){};
g.k.Ah=function(a){this.ob.Ah(a,!this.WD)};
g.k.Tc=function(a){this.ob.Tc(a,!this.WD)};
g.k.kx=
g.k.Ze=g.w(vCa,dM);g.k=vCa.prototype;g.k.Ys=function(){};
g.k.Rt=
g.k.du=
g.k.YY=
g.k.aX=function(){};
g.k.lr=
g.k.vr=function(){yCa(this);dM.prototype.YW.call(this)};
g.k.fz=
g.k.Gr=function(){this.lf.stop()};
g.k.Mc=
g.k.ZY=function(){};
g.k.bj=function(){};g.w(hM,dM);g.k=hM.prototype;g.k.Ys=
g.k.Rt=
g.k.du=
g.k.YY=
g.k.aX=function(){this.cH()};
g.k.fz=
g.k.dK=function(){this.ob.Ah("clickthrough")};
g.k.Gr=
g.k.onCueRangeEnter=
g.k.ZY=
g.k.onCueRangeExit=function(){};
g.k.bj=
g.k.mz=g.w(BCa,g.I);g.k=BCa.prototype;g.k.init=
g.k.release=
g.k.uJ=function(){};
g.k.AJ=
g.k.zJ=
g.k.startRendering=
g.k.rf=
g.k.wc=function(){return this.slot};
g.k.sb=function(){return this.layout};
g.k.lr=function(){this.j.lr()};
g.k.vr=function(){this.j.vr()};
g.k.xA=
g.k.Bc=function(a,b){this.j.Bc(a,b)};
g.k.Sc=
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.bj=function(a){this.j.bj(a)};
g.k.Bj=
g.k.onFullscreenToggled=function(a){this.j.onFullscreenToggled(a)};
g.k.rh=function(a){this.j.rh(a)};
g.k.Aj=function(a){this.j.Aj(a)};
g.k.onVolumeChange=function(){this.j.onVolumeChange()};
g.k.Vk=function(){};
g.k.Wk=function(){};g.w(iM,g.I);g.k=iM.prototype;g.k.init=
g.k.release=
g.k.startRendering=
g.k.rf=
g.k.Sc=
g.k.Bj=
g.k.Wk=function(){};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.Vk=function(){};
g.k.Ze=g.w(DCa,iM);g.k=DCa.prototype;g.k.wc=function(){return this.slot};
g.k.sb=function(){return this.layout};
g.k.Ys=
g.k.Rt=
g.k.uJ=function(){};
g.k.AJ=
g.k.zJ=
g.k.lr=function(a,b){var c=this.B[this.j];b.layoutId!==jM(c,a,b)?iH("pauseLayout for a PlayerBytes layout that is not currently active",a,b):c.lr()};
g.k.vr=
g.k.xA=
g.k.du=
g.k.raa=
g.k.Gr=
g.k.Bc=
g.k.Sc=
g.k.pY=
g.k.bj=function(a){var b=this.B[this.j];b&&b.bj(a)};
g.k.jZ=function(a){var b=this.B[this.j];b&&b.Bj(a)};
g.k.WW=
g.k.onFullscreenToggled=
g.k.rh=function(a){var b=this.B[this.j];b&&b.rh(a)};
g.k.Aj=
g.k.onVolumeChange=
g.k.taa=
g.k.nF=
g.k.saa=g.w(MCa,iM);g.k=MCa.prototype;g.k.wc=function(){return this.j.wc()};
g.k.sb=function(){return this.j.sb()};
g.k.Ys=function(){this.j.init()};
g.k.Rt=function(){this.j.release()};
g.k.lr=function(){this.j.lr()};
g.k.vr=function(){this.j.vr()};
g.k.xA=
g.k.du=function(a){this.j.startRendering(a)};
g.k.Gr=function(a,b){this.j.rf(a,b)};
g.k.Bc=function(a,b){this.j.Bc(a,b)};
g.k.Sc=
g.k.pY=function(){this.j.fI()};
g.k.bj=function(a){this.j.bj(a)};
g.k.jZ=function(a){this.j.Bj(a)};
g.k.WW=function(a,b,c){this.j.ww(a,b,c)};
g.k.onFullscreenToggled=function(a){this.j.onFullscreenToggled(a)};
g.k.rh=function(a){this.j.rh(a)};
g.k.Aj=function(a){this.j.Aj(a)};
g.k.onVolumeChange=function(){this.j.onVolumeChange()};g.k=mM.prototype;g.k.wc=function(){return this.slot};
g.k.sb=function(){return this.layout};
g.k.init=
g.k.release=
g.k.startRendering=
g.k.rf=
g.k.aZ=function(){return!1};
g.k.TY=
g.k.bj=
g.k.rh=function(){};
g.k.Wk=function(){};
g.k.Aj=function(){};
g.k.onVolumeChange=function(){};
g.k.Vk=function(){};g.w(SCa,mM);g.k=SCa.prototype;g.k.Ys=
g.k.Rt=
g.k.du=
g.k.Gr=
g.k.uJ=
g.k.AJ=function(){};
g.k.zJ=function(){};
g.k.IY=function(){};
g.k.Bj=function(){};
g.k.onFullscreenToggled=function(){};g.k=hDa.prototype;g.k.wc=function(){return this.slot};
g.k.sb=function(){return this.layout};
g.k.init=
g.k.release=
g.k.startRendering=
g.k.rf=
g.k.ww=function(){};
g.k.fI=function(){};
g.k.gX=function(){};
g.k.bj=function(a){var b=this;if(this.Lc){if(MK(this.ob,"impression")){var c=N1(this.Ia.get()),d=JJ(this.layout.Ca,"metadata_type_video_length_seconds");$Ca(this.ob,c,a,this.Lc.In,d,function(e){return void iDa(b,e,"tpaqe")})}this.Lc.In=a}};
g.k.Bj=function(a){var b=this;if(this.Lc){IN(this.Da.get())||this.Lc.vF||(this.Lc.vF=!0,a=new g.jH(a.state,new g.UL));var c=JJ(this.layout.Ca,"metadata_type_video_length_seconds"),d=this.Ia.get().getCurrentTimeSec(2,!1);XCa(this.ob,this.Lc.In,a,c,d,!IN(this.Da.get()),function(){return void jDa(b,"teosc")})}};
g.k.onFullscreenToggled=function(a){aDa(this.ob,a)};
g.k.rh=function(){};
g.k.Wk=function(){};
g.k.Aj=function(){};
g.k.xA=
g.k.onVolumeChange=function(){};
g.k.Bc=function(){};
g.k.Sc=function(){};
g.k.lr=function(){};
g.k.vr=function(){};
g.k.dK=function(){bDa(this.ob)};
g.k.oA=function(){cDa(this.ob)};
g.k.nA=function(){dDa(this.ob)};
g.k.pA=function(){eDa(this.ob)};
g.k.lA=function(){fDa(this.ob)};
g.k.mA=function(){gDa(this.ob)};
g.k.Vk=function(){};g.w(lDa,mM);g.k=lDa.prototype;
g.k.Ys=
g.k.Rt=
g.k.du=
g.k.Gr=
g.k.IY=
g.k.Bj=
g.k.onFullscreenToggled=
g.k.dK=function(){bDa(this.ob)};
g.k.oA=function(){cDa(this.ob)};
g.k.nA=function(){dDa(this.ob)};
g.k.pA=function(){eDa(this.ob)};
g.k.lA=function(){fDa(this.ob)};
g.k.mA=function(){gDa(this.ob)};oDa.prototype.build=pM.prototype.build=g.w(pDa,tG);g.w(qM,CK);qM.prototype.startRendering=
qM.prototype.zg=
qM.prototype.xa=function(){CK.prototype.xa.call(this)};var qDa=new g.De(320,63);g.w(tDa,tG);g.w(tM,CK);g.k=tM.prototype;g.k.bj=function(){};
g.k.Bj=function(){};
g.k.onFullscreenToggled=function(){};
g.k.rh=function(a){a&&WN(this.D,this.layout)};
g.k.Wk=function(){};
g.k.Aj=
g.k.onVolumeChange=function(){};
g.k.gz=function(){return this.sb().layoutId};
g.k.HN=function(){return this.Ku};
g.k.zg=function(a){this.G.zg(a);"in_video_overlay_close_button"===a&&WN(this.D,this.layout)};
g.k.gI=function(a){"invideo-overlay"===a&&WN(this.D,this.layout)};
g.k.Ip=function(){this.G.Ip()};
g.k.startRendering=function(a){CK.prototype.startRendering.call(this,a);this.callback.Bc(this.slot,a);this.K.Wr=this};
g.k.rf=function(a,b){CK.prototype.rf.call(this,a,b);y2(this.K,this)};
g.k.init=function(){CK.prototype.init.call(this);ceb(this.Oa.get(),this);this.Ia.get().addListener(this);this.j.push(new tDa(sM(this.layout),DK(this.ob),this.layout.layoutId,{adsClientData:this.layout.jc}))};
g.k.release=function(){CK.prototype.release.call(this);this.Ia.get().removeListener(this);deb(this.Oa.get(),this)};
g.k.Vk=function(){};g.w(uM,CK);g.k=uM.prototype;g.k.init=
g.k.Ip=function(){this.G.Ip()};
g.k.startRendering=function(a){CK.prototype.startRendering.call(this,a);this.callback.Bc(this.slot,a);this.K.Wr=this};
g.k.rf=function(a,b){CK.prototype.rf.call(this,a,b);y2(this.K,this)};
g.k.zg=
g.k.pO=function(a){if("invideo-overlay"===a){a=CGa(this.N,this.layout);a=g.u(a);for(var b=a.next();!b.done;b=a.next())b.value.stop()}};
g.k.gI=
g.k.oO=
g.k.bj=function(){};
g.k.Bj=function(){};
g.k.onFullscreenToggled=function(){};
g.k.rh=
g.k.Wk=function(){};
g.k.Aj=
g.k.onVolumeChange=function(){};
g.k.gz=
g.k.HN=function(){return this.Ku};
g.k.release=
g.k.Vk=function(){};vM.prototype.zg=
vM.prototype.Ip=function(){this.j||this.Ia.get().resumeVideo(1)};g.w(wDa,tG);g.w(xDa,CK);g.k=xDa.prototype;g.k.init=function(){CK.prototype.init.call(this);this.Ia.get().addListener(this)};
g.k.startRendering=
g.k.Bc=function(){};
g.k.zg=
g.k.Aj=
g.k.onVolumeChange=function(){};
g.k.bj=function(){};
g.k.onFullscreenToggled=function(){};
g.k.rh=function(){};
g.k.Wk=function(){};
g.k.Bj=function(){};
g.k.Vk=function(){};
g.k.xa=function(){CK.prototype.xa.call(this)};
g.k.release=yDa.prototype.build=zDa.prototype.build=g.w(wM,VK);wM.prototype.startRendering=BDa.prototype.build=CDa.prototype.build=NM.prototype.clone=function(a){var b=this;return new NM(function(){return b.triggerId},a)};OM.prototype.clone=function(a){var b=this;return new OM(function(){return b.triggerId},a)};PM.prototype.clone=function(a){var b=this;return new PM(function(){return b.triggerId},a)};QM.prototype.clone=function(a){var b=this;return new QM(function(){return b.triggerId},a)};RM.prototype.clone=function(a){var b=this;return new RM(function(){return b.triggerId},a)};SM.prototype.clone=g.w(jN,g.I);var WEa={layoutExitMuteTriggers:[],layoutExitNormalTriggers:[],layoutExitSkipTriggers:[],Vc:[],layoutExitUserInputSubmittedTriggers:[]};var xFa={WVdDU7FEFNo:15,"c-6Sb-muKCY":6,"O9f9wIR-UI8":6,"JNL-wFYNAP0":15,dLYcTkdHPNA:15,ZdVP0_LJZUE:15,VXcUXyDNdEI:15,VGQ8C9uQc_I:15,"o2HqYt-U7YU":15,rwNqPgKVbus:15,ATgzDto2XcY:15,attyPCCLlC4:15,w3aSYOeWyYU:15,wZMtuR2zzRA:30,e3TvPYADCQA:15,eMOw2R8yUHg:15,"6lLyZenufEY":15,"4q_FdWfUxR4":15,"3NOPsNQV0zY":15,IcEJuv4zMSI:15,"8Eo9vaW_CqY":15,O0DMDUDJK88:15,wnboazT1Lio:15,ZfRdOlbXmog:5,"X-sKfjrb7uc":15,RCVZbiJbZA0:6,"7syqtZsUUwY":15,OrlZSFgzFVA:15,ulrgBGVttFg:15,"1qC82K99ecI":15,E9lmhFAK78w:30,QSJFJNk_VSg:15,
"i-8wX-g3FjI":30,vgSkhTaAP6U:15,iqslKcmG9zA:15,VkNDKDDDSWA:15,"2-Sj3oWDJCk":6,z4zsVPqUVnc:15,xKc7UMf8V4s:15,wwrWuIYPaDE:6,"_5NVge-Kmpk":6,"eUdn6DcJx-4":6,gxvBLc_C6Io:15,O40oPma0obU:15,"6xXRRLxj3DA":15,T5sMvex24Os:15,"74ccAT84jIY":15,"YTlgTC-KM2U":15,XxcipO9EBWc:15,zI7xwG4M62k:15,XrUrvpDMmOk:15,H5KIgG21WjA:15,R94pfM1wcac:6,"TD0-7fMqNOE":5,_evnWGoDAT8:15,Wov4GF3oUSM:6,DKcQEuGWmp4:15,kp4aH06VQBg:15,CI3LdgGodUw:15,lcQzcg6e73Y:15};var zS={oPa:1,pPa:2,qPa:3,1:"LOAD_POLICY_ALWAYS",2:"LOAD_POLICY_BY_PREFERENCE",3:"LOAD_POLICY_BY_REQUEST"};g.w(HN,g.I);g.k=HN.prototype;g.k.aZ=
g.k.TY=function(){};
g.k.lk=
g.k.Mn=
g.k.xa=var g2=["metadata_type_content_cpn","metadata_type_player_bytes_callback_ref","metadata_type_instream_ad_player_overlay_renderer","metadata_type_ad_placement_config"],Bkb=["metadata_type_content_cpn","metadata_type_player_bytes_callback_ref","metadata_type_player_overlay_layout_renderer","metadata_type_ad_placement_config"];g.w(LN,g.I);g.k=LN.prototype;g.k.Bc=
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Xf=function(){};
g.k.Ci=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.Sc=function(){};g.w(MN,g.I);MN.prototype.lk=
MN.prototype.Mn=function(){};g.w(NN,g.I);g.w(ON,g.I);ON.prototype.onCueRangeEnter=function(){};
ON.prototype.onCueRangeExit=
ON.prototype.lk=
ON.prototype.Mn=function(){};g.w(PN,g.I);g.k=PN.prototype;g.k.wh=function(){};
g.k.Fi=
g.k.Xf=function(){};
g.k.Ci=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=
g.k.Pg=
g.k.Bc=function(a,b){this.Hj.set(a,b)};
g.k.Sc=function(a){this.Hj.delete(a)};
g.k.uh=function(){};g.k=sGa.prototype;g.k.init=function(){};
g.k.wc=function(){return this.slot};
g.k.vH=function(){this.callback.Xf(this.slot)};
g.k.yH=
g.k.release=function(){};QN.prototype.build=g.k=tGa.prototype;g.k.init=function(){};
g.k.wc=function(){return this.slot};
g.k.vH=
g.k.yH=
g.k.release=function(){};g.k=uGa.prototype;g.k.init=function(){};
g.k.wc=function(){return this.slot};
g.k.vH=
g.k.yH=
g.k.release=function(){};g.k=vGa.prototype;g.k.init=function(){};
g.k.wc=function(){return this.slot};
g.k.vH=
g.k.yH=
g.k.release=RN.prototype.build=g.w(SN,g.I);SN.prototype.j=g.w(TN,SN);g.k=TN.prototype;g.k.zg=
g.k.rO=
g.k.il=function(a,b,c,d){if(this.Vb.has(b.triggerId))throw new HJ("Tried to register duplicate trigger for slot.");if(!(b instanceof TM||b instanceof MM))throw new HJ("Incorrect TriggerType: Tried to register trigger of type "+b.triggerType+" in AdUxUpdateTriggerAdapter.");this.Vb.set(b.triggerId,new UM(a,b,c,d))};
g.k.Bl=function(a){this.Vb.delete(a.triggerId)};
g.k.pO=function(){};
g.k.oO=function(){};
g.k.gI=function(){};g.w(UN,g.I);g.k=UN.prototype;
g.k.il=
g.k.Bl=function(a){this.Vb.delete(a.triggerId)};
g.k.wh=function(a){this.G.add(a.slotId);for(var b=[],c=g.u(this.Vb.values()),d=c.next();!d.done;d=c.next())d=d.value,d.trigger instanceof RM&&a.slotId===d.trigger.triggeringSlotId&&b.push(d);0<b.length&&$J(this.j(),b)};
g.k.Fi=
g.k.Ci=
g.k.Xf=
g.k.Yf=
g.k.Di=function(a){for(var b=[],c=g.u(this.Vb.values()),d=c.next();!d.done;d=c.next())d=d.value,d.trigger instanceof PM&&a.slotId===d.trigger.triggeringSlotId&&b.push(d);0<b.length&&$J(this.j(),b)};
g.k.Ei=
g.k.Qh=function(a,b){this.K.add(b.layoutId)};
g.k.Pg=
g.k.Bc=
g.k.Sc=
g.k.uh=function(){};
g.k.lk=function(){this.D.clear()};
g.k.Mn=function(){};g.w(VN,g.I);VN.prototype.il=function(a,b,c,d){if(this.Vb.has(b.triggerId))throw new HJ("Tried to register duplicate trigger for slot.");if(!(b instanceof AM))throw new HJ("Incorrect TriggerType: Tried to register trigger of type "+b.triggerType+" in CloseRequestedTriggerAdapter");this.Vb.set(b.triggerId,new UM(a,b,c,d))};
VN.prototype.Bl=function(a){this.Vb.delete(a.triggerId)};g.w(XN,g.I);XN.prototype.il=
XN.prototype.Bl=function(a){this.Vb.delete(a.triggerId)};
XN.prototype.lk=
XN.prototype.Mn=g.w(YN,g.I);g.k=YN.prototype;
g.k.il=
g.k.Bl=
g.k.onCueRangeEnter=
g.k.onCueRangeExit=
g.k.Bj=
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.Bc=
g.k.Sc=
g.k.uh=function(){};
g.k.bj=function(){};
g.k.onFullscreenToggled=function(){};
g.k.rh=function(){};
g.k.Wk=function(){};
g.k.Aj=function(){};
g.k.onVolumeChange=function(){};
g.k.Vk=function(){};g.w(ZN,g.I);g.k=ZN.prototype;
g.k.il=
g.k.Bl=
g.k.uJ=
g.k.AJ=function(){};
g.k.zJ=function(){};g.w($N,g.I);g.k=$N.prototype;g.k.il=function(a,b,c,d){if(this.Vb.has(b.triggerId))throw new HJ("Tried to register duplicate trigger for slot.");if(!(b instanceof JM))throw new HJ("Incorrect TriggerType: Tried to register trigger of type "+b.triggerType+" in OnLayoutSelfRequestedTriggerAdapter");this.Vb.set(b.triggerId,new UM(a,b,c,d))};
g.k.Bl=function(a){this.Vb.delete(a.triggerId)};
g.k.Bc=function(){};
g.k.Sc=function(){};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};g.w(aO,g.I);g.k=aO.prototype;g.k.uh=
g.k.il=function(a,b,c,d){if(this.Vb.has(b.triggerId))throw new HJ("Tried to register duplicate trigger for slot.");if(!(b instanceof eAa))throw new HJ("Incorrect TriggerType: Tried to register trigger of type "+b.triggerType+" in OpportunityEventTriggerAdapter");this.Vb.set(b.triggerId,new UM(a,b,c,d))};
g.k.Bl=function(a){this.Vb.delete(a.triggerId)};
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.Bc=function(){};
g.k.Sc=function(){};g.w(bO,g.I);g.k=bO.prototype;g.k.il=
g.k.Bl=
g.k.wh=function(){};
g.k.Fi=function(){};
g.k.Ci=function(){};
g.k.Xf=function(){};
g.k.Yf=function(){};
g.k.Di=function(){};
g.k.Ei=function(){};
g.k.Qh=function(){};
g.k.Pg=function(){};
g.k.uh=function(){};
g.k.Bc=
g.k.Sc=function(){};g.w(cO,g.I);cO.prototype.il=
cO.prototype.Bl=g.w(hO,g.I);hO.prototype.logEvent=function(a){this.j(a)};
hO.prototype.j=
hO.prototype.FR=g.w(iO,hO);iO.prototype.j=jO.prototype.clear=function(){this.j.clear()};var QGa=!1,lO,mO,nO,oO,pO;g.w(qO,g.I);
qO.prototype.encrypt=
qO.prototype.rK=var SGa=!1;(function(){function a(d){for(var e=new Uint8Array(d.length),f=0;f<d.length;f++)e[f]=d[f];return e}
function b(d){return new Uint8Array(d)}
var c=new Uint8Array([1]);return 1===c.length&&1===c[0]?b:a})();
var rO;TGa.prototype.dj=
TGa.prototype.toString=function(){return""};
var tO=[20,100,500,2E3];g.k=WGa.prototype;g.k.isActive=function(){return!0};
g.k.uI=
g.k.au=
g.k.Cs=
g.k.rk=
g.k.mW=
g.k.toString=function(){return""};g.k=ZGa.prototype;g.k.isActive=function(){return!1};
g.k.uI=function(){};
g.k.au=function(){};
g.k.Cs=function(){};
g.k.rk=
g.k.mW=
g.k.toString=function(){return""};var r3,Ckb,Dkb,Ekb,Fkb,Gkb,s3,uO,KZ,pcb,TR;r3=new ZGa;Ckb=!!+WB("html5_enable_profiler");Dkb=!!+WB("html5_onesie_enable_profiler");Ekb=!!+WB("html5_offline_encryption_enable_profiler");Fkb=!!+WB("html5_performance_impact_profiling_timer_ms");Gkb=!!+WB("html5_drm_enable_profiler");s3=Ckb||Dkb||Ekb||Fkb||Gkb?new WGa:r3;g.AY=Ckb?s3:r3;uO=Dkb?s3:r3;KZ=Ekb?s3:r3;pcb=Fkb?s3:r3;TR=Gkb?s3:r3;g.w(vO,g.I);vO.prototype.encrypt=
vO.prototype.rK=g.wO.prototype.encrypt=
g.wO.prototype.B=
g.wO.prototype.j=
g.wO.prototype.decrypt=function(a,b){return this.encrypt(a,b)};
g.w(g.xO,g.I);g.xO.prototype.encrypt=
g.xO.prototype.decrypt=function(a,b){return this.encrypt(a,b)};
yO.prototype.encrypt=
yO.prototype.decrypt=
yO.prototype.isDisposed=function(){return this.B.isDisposed()};
yO.prototype.dispose=function(){this.B.dispose()};aHa.prototype.reset=
aHa.prototype.update=
var zO=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var Hkb;Hkb={};g.Ikb=g.lE("yt-idb-pref-storage",{er:(Hkb.prefs={Um:1},Hkb),shared:!1,upgrade:
version:1});AO.prototype.getState=function(){return this.store.getState()};
AO.prototype.dispatch=function(a){return this.store.dispatch(a)};
AO.prototype.subscribe=function(a){return this.store.subscribe(a)};
AO.prototype.replaceReducer=function(a){return this.store.replaceReducer(a)};
AO.prototype[Symbol.observable]=g.k=BO.prototype;g.k.getLength=function(){return this.totalLength};
g.k.append=
g.k.split=
g.k.isFocused=
g.k.focus=var JO,HO,LO;g.PZ=);
JO=Array(1024);HO=window.TextDecoder?new TextDecoder:void 0;LO=window.TextEncoder?new TextEncoder:void 0;for(var AHa={buttonEntity:358,captionTrack:225,channelHandle:275,commerceAcquisitionClientPayloadEntity:276,commerceCartListEntity:236,continuationTokenEntity:406,downloadQualityPickerEntity:202,downloadsPageRefreshTokenEntity:299,downloadsPageViewConfigurationEntity:264,downloadStatusEntity:141,emojiFountainDataEntity:393,emojiCustomizationSetEntity:496,fakeChannel:2,fakePlaylist:279,fakePlaylistEntryCollection:280,fakeVideo:182,fakeVideoDescription:278,featuredProductsEntity:392,flowStateEntity:252,
iconBadgeEntity:229,interstitialInteractionStateEntity:443,liveChatPollStateEntity:217,logoEntity:245,macroMarkerEntity:329,mainDownloadsLibraryEntity:158,mainDownloadsListEntity:164,mainPlaylistDownloadStateEntity:373,mainPlaylistEntity:306,mainPlaylistVideoEntity:368,mainVideoDownloadStateEntity:262,mainVideoEntity:261,markersEngagementPanelSyncEntity:196,markersVisibilityOverrideEntity:312,musicAlbumReleaseDetail:18,musicAlbumReleaseDownloadMetadataEntity:259,musicAlbumRelease:17,musicAlbumReleaseUserDetail:19,
musicArtistDetail:21,musicArtist:20,musicArtistUserDetail:22,musicDownloadsLibraryEntity:257,musicLibraryEdit:121,musicLibraryStatusEntity:318,musicPlaylist:24,musicPlaylistDownloadMetadataEntity:248,musicShare:100,musicTrackDetail:29,musicTrackDownloadMetadataEntity:234,musicTrack:28,musicTrackUserDetail:30,offlineOrchestrationActionWrapperEntity:169,offlineVideoPolicy:130,offlineVideoStreams:198,offlineabilityEntity:246,orchestrationWebSamplingEntity:242,pageHeaderEntity:495,pinnedProductEntity:273,
playbackData:119,quantityIncrementerEntity:356,playerStateEntity:323,refresh:148,saveToPlaylistListEntity:231,settingEntity:297,transfer:120,trendingOfferEntity:469,videoDownloadContextEntity:461,videoPlaybackPositionEntity:76,ytMainChannelEntity:152,ytMainDownloadedVideoEntity:155,ytMainVideoEntity:151},zHa={},Jkb=g.u(Object.entries(AHa)),Kkb=Jkb.next();!Kkb.done;Kkb=Jkb.next()){var Lkb=g.u(Kkb.value),Mkb=Lkb.next().value,Nkb=Lkb.next().value,Okb=Mkb,Pkb=Nkb;Pkb&&(zHa[Pkb]=Okb)};var t3;t3={};g.Qkb=(t3.INVALID_ENCODER_VERSION="Invalid encoder version",t3.KEY_CREATION_FAILED="Failed to create encoder key",t3.UNKNOWN_DECODE_ERROR="Failed to decode PES data",t3.UNKNOWN_ENCODE_ERROR="Failed to encode PES data",t3.WRONG_DATA_TYPE="Encoder cannot process the data type",t3);var jP=window.ykb||"ru";var QLa=[3611,27686,85013,23462,157557,42016,26926,51236,79148,50160,77504,153587,87907,18630,177018,177023,54445,80935,152172,184553,105675,150723,37521,147285,47786,98349,168271,168954,168277,168273,168270,123695,6827,29434,171388,7282,124448,196088,198104,32276,195115,195114,76278,200635,147868,147869,93911,106531,177843,27259,27262,27263,21759,160866,204249,204250,180626,177959,177957,180628,205716,197878,171243,160789,171244,171241,171245,171242,180627,177960,177958,180629,205717,197879,177565,
197337,197336,197338,198618,175492,198052,198051,197852,197976,175493,175494,175495,189254,175496,175497,38408,175498,175503,175504,175505,175506,175507,175508,80637,68727,68728,80353,80356,180635,74610,45707,83962,83970,46713,166591,89711,74612,179607,155792,93265,74611,131380,128979,139311,128978,131391,105350,139312,134800,131392,113533,93252,99357,94521,114252,113532,94522,94583,202371,88E3,139580,93253,93254,94387,94388,93255,97424,72502,110111,76019,117092,117093,89431,191831,110466,77240,60508,
186091,148123,148124,137401,137402,137046,73393,113534,92098,131381,84517,83759,162711,162712,80357,86113,72598,168413,72733,107349,124275,118203,200410,133275,160157,152569,156651,133274,160159,160158,133272,133273,133276,144507,143247,175994,156652,143248,143249,143250,143251,189892,189894,189893,156653,144401,117431,133797,153964,201133,201134,201135,201136,201137,128572,200411,200412,190337,133405,117429,117430,177950,174734,177951,201138,201139,201140,201141,201142,117432,173996,173995,174953,
173994,173997,120080,117259,178546,197891,156655,156654,121692,184846,185993,145656,156656,145655,145653,145654,145657,132972,133051,133658,132971,97615,181262,190762,143359,143356,143361,143358,143360,143357,142303,143353,172859,143354,144479,143355,31402,181590,133624,146477,133623,133622,133621,192418,84774,197993,160801,197995,95117,172721,150497,98930,98931,98932,153320,153321,43347,129889,197888,197889,149123,45474,100352,98443,117985,74613,155911,74614,64502,136032,74615,74616,122224,74617,
77820,74618,93278,93274,93275,93276,200688,200686,200687,199841,22110,29433,133798,132295,120541,82047,113550,75836,75837,192409,203221,42352,84512,76065,75989,51879,16623,32594,27240,32633,74858,156999,3945,16989,45520,25488,25492,25494,55760,14057,18451,57204,57203,17897,18198,17898,17909,43980,195529,189660,46220,11721,147994,49954,96369,3854,151633,56251,205192,159108,181568,25624,152036,16906,99999,68172,47973,72773,26970,26971,96805,17752,73233,109512,22256,14115,22696,89278,89277,195745,109513,
43278,43459,43464,89279,43717,55764,22255,147912,89281,40963,43277,43442,91824,120137,186350,186351,96367,36850,72694,37414,36851,124863,121343,73491,54473,166861,43375,46674,143815,139095,144402,149968,149969,32473,72901,72906,50612,50613,50942,84938,84943,84939,84941,84944,84940,84942,35585,51926,79983,18921,57893,41182,135732,33424,22207,36229,22206,22205,44763,33427,67793,22182,37091,34650,50617,22287,25144,97917,62397,150871,150874,125598,137935,36961,108035,27426,27857,27846,27854,69692,61411,
39299,38696,62520,36382,108701,192682,50663,36387,14908,37533,105443,61635,62274,161670,133818,182119,65702,65703,65701,76256,196075,194768,194769,191885,194770,195350,195349,194771,166382,37671,49953,204572,191389,204574,187917,191390,179556,191402,191392,197826,191393,204573,36216,28237,173718,39553,192547,29222,26107,38050,26108,120745,26109,26110,66881,28236,14586,160598,57929,74723,44098,173689,44099,23528,61699,134104,134103,198313,59149,181013,173191,173192,173193,101951,171502,196043,198305,
97346,118051,95102,64882,119505,63595,63349,95101,75240,27039,68823,21537,83464,75707,170215,83113,101952,101953,79610,125755,24402,24400,32925,193406,57173,183351,156421,122502,145268,138480,64423,64424,33986,100828,129089,21409,185612,135155,135156,135157,135158,158225,135159,135160,167651,135161,135162,135163,158226,158227,135164,135165,135166,11070,11074,17880,30709,30707,30711,30710,30708,185213,185273,146143,63648,63649,111059,5754,20445,151308,151152,130975,130976,191925,167637,197196,110386,
113746,66557,183215,17310,28631,201935,21589,164817,168011,154946,68012,162617,60480,184431,138664,194E3,141121,164502,31571,195002,141978,150105,150106,150107,150108,76980,41577,45469,38669,13768,13777,141842,62985,4724,59369,43927,43928,12924,197853,100355,56219,27669,10337,203648,203649,47896,122629,186204,139723,139722,121258,107598,127991,96639,107536,130169,96661,145188,96658,116646,159428,168611,168612,121122,96660,127738,127083,155281,162959,163566,186641,147842,104443,96659,147595,106442,
182423,162776,134840,63667,63668,63669,130686,147036,189810,78314,147799,174049,148649,55761,127098,134841,96368,67374,48992,146176,176105,49956,190190,31961,26388,23811,5E4,126250,96370,47355,47356,37935,45521,21760,83769,49977,49974,93497,93498,34325,140759,115803,123707,100081,35309,68314,25602,100339,170873,143516,178921,59018,18248,50625,9729,37168,37169,21667,16749,18635,39305,18046,53969,8213,93926,102852,110099,22678,69076,137575,139224,100856,154430,17736,3832,147111,55759,64031,93044,93045,
170701,170702,194796,34388,167841,170419,17657,17655,39579,39578,170412,77448,8196,11357,69877,8197,168501,156512,161613,156509,161612,161614,82039];var dcb={adNotify:
biscottiBasedDetection:
adNotifyFilled:
idbTransactionEnded:
idbUnexpectedlyClosed:function(a){var b=new Ona,c=0;try{var d=a.dbName;void 0!==d&&(O(b,1,d),c++);var e=a.dbVersion;void 0!==e&&(Sj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}},
flowEvent:
idbQuotaExceeded:
idbTransactionAborted:
streamzIncremented:function(a){var b=new hoa,c=0;try{var d=a.serializedIncrementBatch;void 0!==d&&(tk(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}},
sliEventBatch:
playbackAssociated:
autoplayTriggered:function(a){var b=new Kma,c=0;try{var d=a.intentional;void 0!==d&&(Rj(b,1,d),c++);return[c===Object.keys(a).length,b]}catch(e){return Y(e),[!1,void 0]}},
webPlayerApiCalled:
embedsAdEvent:
embedsShouldRequestStorageAccessResult:function(a){var b=new Mma,c=0;try{var d=a.result;void 0!==d&&(Rj(b,1,d),c++);var e=a.returnsUndefined;void 0!==e&&(Rj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}},
embedsRequestStorageAccessState:function(a){var b=new Lma,c=0;try{var d=a.isCued;void 0!==d&&(Rj(b,1,d),c++);var e=a.isAutoplayBlocked;void 0!==e&&(Rj(b,2,e),c++);return[c===Object.keys(a).length,b]}catch(f){return Y(f),[!1,void 0]}},
embedsRequestStorageAccessFailedState:
heartbeatActionPlayerHalted:
heartbeatActionPlayerTransitioned:
embedsItpWatchLaterResult:
html5PlayerHealthEvent:
adsClientStateChange:
offlineTransferStatusChanged:$Ja,offlineStateSnapshot:,ecb={adNotify:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;
Gj(d,hz,184,OF,a);c?MF("adNotify",d,c,b):NF("adNotify",d,b)},
biscottiBasedDetection:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,NA,439,OF,a);c?MF("biscottiBasedDetection",d,c,b):NF("biscottiBasedDetection",d,b)},
adNotifyFilled:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,gz,300,OF,a);c?MF("adNotifyFilled",d,c,b):NF("adNotifyFilled",d,b)},
idbTransactionEnded:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,sB,352,OF,a);c?MF("idbTransactionEnded",d,c,b):NF("idbTransactionEnded",d,b)},
idbUnexpectedlyClosed:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Ona,348,OF,a);c?MF("idbUnexpectedlyClosed",d,c,b):NF("idbUnexpectedlyClosed",d,b)},
flowEvent:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Ina,304,OF,a);c?MF("flowEvent",d,c,b):NF("flowEvent",d,b)},
idbQuotaExceeded:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Mna,351,OF,a);c?MF("idbQuotaExceeded",d,c,b):NF("idbQuotaExceeded",d,b)},
idbTransactionAborted:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Nna,353,OF,a);c?MF("idbTransactionAborted",d,c,b):NF("idbTransactionAborted",d,b)},
streamzIncremented:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,hoa,126,OF,a);c?MF("streamzIncremented",d,c,b):NF("streamzIncremented",d,b)},
sliEventBatch:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,SA,344,OF,a);c?MF("sliEventBatch",d,c,b):NF("sliEventBatch",d,b)},
playbackAssociated:Fua,autoplayTriggered:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Kma,209,OF,a);c?MF("autoplayTriggered",d,c,b):NF("autoplayTriggered",d,b)},
webPlayerApiCalled:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,QB,76,OF,a);c?MF("webPlayerApiCalled",d,c,b):NF("webPlayerApiCalled",d,b)},
embedsAdEvent:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Jma,327,OF,a);c?MF("embedsAdEvent",d,c,b):NF("embedsAdEvent",d,b)},
embedsShouldRequestStorageAccessResult:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Mma,251,OF,a);c?MF("embedsShouldRequestStorageAccessResult",d,c,b):NF("embedsShouldRequestStorageAccessResult",d,b)},
embedsRequestStorageAccessState:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Lma,256,OF,a);c?MF("embedsRequestStorageAccessState",d,c,b):NF("embedsRequestStorageAccessState",d,b)},
embedsRequestStorageAccessFailedState:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,TA,257,OF,a);c?MF("embedsRequestStorageAccessFailedState",d,c,b):NF("embedsRequestStorageAccessFailedState",d,b)},
heartbeatActionPlayerHalted:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Kna,332,OF,a);c?MF("heartbeatActionPlayerHalted",d,c,b):NF("heartbeatActionPlayerHalted",d,b)},
heartbeatActionPlayerTransitioned:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Lna,330,OF,a);c?MF("heartbeatActionPlayerTransitioned",d,c,b):NF("heartbeatActionPlayerTransitioned",d,b)},
embedsItpWatchLaterResult:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Nma,266,OF,a);c?MF("embedsItpWatchLaterResult",d,c,b):NF("embedsItpWatchLaterResult",d,b)},
html5PlayerHealthEvent:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,rB,293,OF,a);c?MF("html5PlayerHealthEvent",d,c,b):NF("html5PlayerHealthEvent",d,b)},
adsClientStateChange:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,Sz,197,OF,a);c?MF("adsClientStateChange",d,c,b):NF("adsClientStateChange",d,b)},
offlineTransferStatusChanged:function(a,b,c){var d=g.XB("jspb_sparse_encoded_pivot")?new RB([{}]):new RB;Gj(d,cB,2,OF,a);c?MF("offlineTransferStatusChanged",d,c,b):NF("offlineTransferStatusChanged",d,b)},
offlineStateSnapshot:;DP.prototype.Xw=function(a){this.client=a};
DP.prototype.j=
DP.prototype.clear=FP.prototype.Xw=
FP.prototype.clear=g.k=GP.prototype;g.k.Xw=function(a){this.client=a};
g.k.LV=
g.k.clickCommand=
g.k.stateChanged=
g.k.visualElementStateChanged=LP.getInstance=
LP.prototype.estimate=
g.Ua("ytglobal.storageClass_",LP);gqa.prototype.fE=function(a){this.handleError(a)};
gqa.prototype.logEvent=var u3={},wRa=g.lE("yt-player-local-media",{er:(u3.index={Um:2},u3.media={Um:2},u3.captions={Um:5},u3),shared:!1,upgrade:
version:5});var Rkb={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},v3;a:{var w3=g.oc();w3=w3.toLowerCase();if(g.hc(w3,"android")){var Skb=w3.match(/android\s*(\d+(\.\d+)?)[^;|)]*[;)]/);if(Skb){var Tkb=parseFloat(Skb[1]);if(100>Tkb){v3=Tkb;break a}}var Ukb=w3.match("("+Object.keys(Rkb).join("|")+")");v3=Ukb?Rkb[Ukb[0]]:0}else v3=void 0}var tS=v3,qQa=0<=tS;var n$a=window;var $La=Ud(;var bMa;g.HI=new JI;bMa=0;var MP={An:
xY:
BR:;var jbb=new Set(["embed_config","endscreen_ad_tracking","home_group_info","ic_track"]);var nQa={Gia:"adunit",xva:"detailpage",lwa:"editpage",twa:"embedded",ZLa:"leanback",o0a:"previewpage",z1a:"profilepage",HU:"unplugged",w_a:"playlistoverview",g8a:"sponsorshipsoffer",U4a:"shortspage",cFa:"handlesclaiming",MGa:"immersivelivepage",Lta:"creatormusic",NGa:"immersivelivepreviewpage"};var URa={Jva:1,Nwa:2,PAUSED:3,1:"DISABLED",2:"ENABLED",3:"PAUSED"};var VR=wMa()?!0:"function"===typeof window.fetch&&window.ReadableStream&&window.AbortController&&!g.hE?!0:!1;g.RP.prototype.getLanguageInfo=function(){return this.Kc};
g.RP.prototype.getXtags=
g.RP.prototype.toString=function(){return this.Kc.name};
g.RP.prototype.getLanguageInfo=g.RP.prototype.getLanguageInfo;SP.prototype.isLocked=
SP.prototype.compose=
SP.prototype.D=
var Vkb=g.TP("auto","hd1080",!1,"l"),y9a=g.TP("auto","large",!1,"l"),qT=g.TP("auto","auto",!1,"p");YP.prototype.Js=
YP.prototype.iD=
YP.prototype.getAvailableAudioTracks=function(){return this.audioTracks};var QMa=new Set(["356"]);g.w(zMa,g.I);zMa.prototype.xa=g.gQ.prototype.set=
g.gQ.prototype.get=
g.gQ.prototype.Oe=function(){this.url||(this.url=XMa(this));return this.url};
g.gQ.prototype.clone=
var WMa=[cma];g.k=g.nQ.prototype;g.k.KL=function(a){this.segments.push(a)};
g.k.yn=
g.k.getDuration=function(a){return(a=this.cn(a))?a.duration:0};
g.k.tW=
g.k.fn=
g.k.df=
g.k.Dd=
g.k.UO=
g.k.Os=
g.k.Md=
g.k.kz=function(){return this.segments.length};
g.k.Wl=function(){return 0};
g.k.xi=
g.k.YH=function(a){return(a=this.cn(a))?a.sourceURL:""};
g.k.getStartTime=
g.k.JH=function(a){return this.getStartTime(a)+this.getDuration(a)};
g.k.aI=ca(3);g.k.isLoaded=
g.k.cn=
g.k.Yy=
g.k.append=
g.k.BW=function(){return 0};aNa.prototype.skip=var x3={},Wkb=(x3.predictStart="predictStart",x3.start="start",x3["continue"]="continue",x3.stop="stop",x3),eNa={EVENT_PREDICT_START:"predictStart",EVENT_START:"start",EVENT_CONTINUE:"continue",EVENT_STOP:"stop"};xQ.prototype.GD=
xQ.prototype.toString=HQ.prototype.En=UQ.prototype.set=
UQ.prototype.get=
UQ.prototype.Oe=VQ.prototype.toString=ZQ.prototype.isEncrypted=
ZQ.prototype.dh=
ZQ.prototype.Ld=eR.prototype.bz=
eR.prototype.hp=
eR.prototype.Pk=
var WNa=!1;jR.prototype.Hh=
jR.prototype.Pk=kR.prototype.gg=function(){return!!this.j&&this.index.isLoaded()};
kR.prototype.Hz=function(){return!1};
kR.prototype.KT=function(a){return[a]};
kR.prototype.QA=g.w(lR,kR);g.k=lR.prototype;g.k.im=function(){return!1};
g.k.Qv=function(){return!0};
g.k.RD=function(){return!1};
g.k.Hz=
g.k.Cv=
g.k.Mx=function(){return null};
g.k.TB=
g.k.Cq=
g.k.qO=
g.k.Tr=function(a){return 0===a.B?!0:this.index.Dd()>a.Pa&&this.index.fn()<=a.Pa+1};
g.k.update=
g.k.gg=
g.k.Ur=
g.k.YN=
g.k.DQ=function(){return!1};oR.prototype.update=
oR.prototype.getStreamTimeOffset=g.w(pOa,g.nQ);g.k=pOa.prototype;g.k.yn=
g.k.fn=
g.k.Md=
g.k.Os=
g.k.kz=
g.k.Dd=
g.k.yv=
g.k.KL=
g.k.MH=function(){return this.Cp};
g.k.Yy=
g.k.cn=g.w(qR,lR);g.k=qR.prototype;g.k.RD=function(){return!0};
g.k.gg=function(){return!0};
g.k.Tr=
g.k.Cv=function(){};
g.k.Cq=
g.k.Ur=g.w(rR,kR);g.k=rR.prototype;g.k.im=function(){return!1};
g.k.Qv=function(){return!1};
g.k.RD=function(){return!1};
g.k.Cv=
g.k.Mx=function(){return null};
g.k.TB=
g.k.Cq=
g.k.qO=
g.k.Tr=
g.k.YN=function(){return 0};
g.k.DQ=function(){return!1};g.k=g.COa.prototype;g.k.yn=
g.k.Wl=
g.k.getStartTime=
g.k.JH=
g.k.aI=ca(2);g.k.df=
g.k.getDuration=
g.k.tW=
g.k.fn=function(){return 0};
g.k.Dd=function(){return this.count-1};
g.k.UO=
g.k.Os=
g.k.Md=function(){return 0};
g.k.kz=function(){return this.count};
g.k.YH=function(){return""};
g.k.xi=
g.k.isLoaded=
g.k.BW=
g.k.resize=
g.k.cap=g.w(wR,kR);g.k=wR.prototype;g.k.Cv=
g.k.qO=
g.k.vD=
g.k.KT=
g.k.QA=
g.k.Tr=
g.k.Mx=
g.k.TB=function(){return null};
g.k.Cq=
g.k.im=function(){return!0};
g.k.Qv=function(){return!0};
g.k.RD=function(){return!1};
g.k.YN=
g.k.DQ=var y3={},WOa=(y3.COLOR_PRIMARIES_BT709="bt709",y3.COLOR_PRIMARIES_BT2020="bt2020",y3.COLOR_PRIMARIES_UNKNOWN=null,y3.COLOR_PRIMARIES_UNSPECIFIED=null,y3),z3={},GOa=(z3.COLOR_TRANSFER_CHARACTERISTICS_BT709="bt709",z3.COLOR_TRANSFER_CHARACTERISTICS_BT2020_10="bt2020",z3.COLOR_TRANSFER_CHARACTERISTICS_SMPTEST2084="smpte2084",z3.COLOR_TRANSFER_CHARACTERISTICS_ARIB_STD_B67="arib-std-b67",z3.COLOR_TRANSFER_CHARACTERISTICS_UNKNOWN=null,z3.COLOR_TRANSFER_CHARACTERISTICS_UNSPECIFIED=null,z3);g.xR.prototype.getName=function(){return this.name};
g.xR.prototype.getId=function(){return this.id};
g.xR.prototype.getIsDefault=function(){return this.isDefault};
g.xR.prototype.toString=function(){return this.name};
g.xR.prototype.getName=g.xR.prototype.getName;g.xR.prototype.getId=g.xR.prototype.getId;g.xR.prototype.getIsDefault=g.xR.prototype.getIsDefault;var LOa=/action_display_post/;var MOa;g.w(zR,g.uG);g.k=zR.prototype;g.k.isLoading=function(){return 1===this.state};
g.k.hm=function(){return 3===this.state};
g.k.Paa=
g.k.refresh=
g.k.resume=
g.k.Me=
g.k.Md=
g.k.getStreamTimeOffset=function(){return this.K};
g.k.df=
var HR=null,Xkb,rPa=!(null==(Xkb=navigator.mediaCapabilities)||!Xkb.decodingInfo),ePa={commentary:1,alternate:2,dub:3,main:4};IR.prototype.clone=
IR.prototype.uc=
IR.prototype.nh=
var Ykb={},wPa=(Ykb.playready=["com.youtube.playready","com.microsoft.playready"],Ykb.widevine=["com.youtube.widevine.l3","com.widevine.alpha"],Ykb),A3={},k9a=(A3.widevine="DRM_SYSTEM_WIDEVINE",A3.fairplay="DRM_SYSTEM_FAIRPLAY",A3.playready="DRM_SYSTEM_PLAYREADY",A3),B3={},Zkb=(B3.widevine=1,B3.fairplay=2,B3.playready=3,B3);var SR;g.w(RR,g.I);
RR.prototype.initialize=
RR.prototype.L=var Sbb={"":"LIVE_STREAM_MODE_UNKNOWN",dvr:"LIVE_STREAM_MODE_DVR",lp:"LIVE_STREAM_MODE_LP",post:"LIVE_STREAM_MODE_POST",window:"LIVE_STREAM_MODE_WINDOW",live:"LIVE_STREAM_MODE_LIVE"};var rQa={RED:"red",Qjb:"white"};GPa.prototype.kb=var JPa=Promise.resolve(),OPa=window.queueMicrotask?window.queueMicrotask.bind(window):KPa;LPa.prototype.canPlayType=
LPa.prototype.isTypeSupported=
var alb={'video/mp4; codecs="avc1.42001E, mp4a.40.2"':"maybe"},blb={"application/x-mpegURL":"maybe"},$kb={"application/x-mpegURL":"maybe"};g.w(ZR,g.uG);ZR.prototype.add=
ZR.prototype.remove=
ZR.prototype.get=
ZR.prototype.isEmpty=g.w($R,g.wO);$R.prototype.j=function(a,b){var c=uO.au("oap");b=g.wO.prototype.j.call(this,a,b);uO.Cs(c,Math.ceil(a.length/16));return b};
$R.prototype.B=
g.w(aS,g.xO);aS.prototype.encrypt=
g.w(bS,yO);bS.prototype.encrypt=dS.prototype.Dk=
dS.prototype.Wi=eS.prototype.Dk=
eS.prototype.Wi=g.w(YPa,g.I);YPa.prototype.Ga=g.w(gQa,g.I);var oQa="blogger gac books docs duo flix google-live google-one play shopping chat hangouts-meet photos-edu picasaweb gmail jamboard".split(" "),yQa={ana:"caoe",wpa:"cbrand",Fpa:"cbr",Gpa:"cbrver",dsa:"cchip",Bsa:"ccappver",Csa:"ccrv",KCa:"cfrmver",xHa:"c",AHa:"cver",zHa:"ctheme",yHa:"cplayer",HTa:"cmodel",uUa:"cnetwork",OYa:"cos",PYa:"cosver",IZa:"cplatform",I2a:"crqyear"};g.w(wQa,g.I);g.k=wQa.prototype;g.k.L=function(a){return this.experiments.kb(a)};
g.k.getWebPlayerContextConfig=function(){return this.webPlayerContextConfig};
g.k.getVideoUrl=
g.k.getVideoEmbedCode=
g.k.supportsGaplessAudio=
g.k.supportsGaplessShorts=
g.k.getPlayerType=
g.k.Rc=function(){return this.Pf};
g.k.Kt=
var EQa=["www.youtube-nocookie.com","youtube.googleapis.com","www.youtubeeducation.com","youtubeeducation.com"],xQa=["EMBEDDED_PLAYER_LITE_MODE_UNKNOWN","EMBEDDED_PLAYER_LITE_MODE_NONE","EMBEDDED_PLAYER_LITE_MODE_FIXED_PLAYBACK_LIMIT","EMBEDDED_PLAYER_LITE_MODE_DYNAMIC_PLAYBACK_LIMIT"],BQa=[19];g.k=OS.prototype;g.k.nh=function(){return this.j};
g.k.UB=
g.k.uW=
g.k.oR=function(){};
g.k.getHeight=
var FQa=!1;GQa.prototype.build=
var clb="text";g.w(QS,OS);QS.prototype.uW=function(){return this.expiration};
QS.prototype.UB=g.w(RS,OS);RS.prototype.UB=
RS.prototype.oR=g.w(SS,OS);SS.prototype.UB=var dlb={},WQa=(dlb.PLAYABILITY_ERROR_CODE_VIDEO_BLOCK_BY_MRM="mrm.blocked",dlb.PLAYABILITY_ERROR_CODE_PERMISSION_DENIED="auth",dlb);g.k=g.TS.prototype;g.k.getId=function(){return this.id};
g.k.getName=function(){return this.name};
g.k.isServable=function(){return this.j};
g.k.Oe=function(){return this.url};
g.k.toString=
g.k.Ee=var aRa={"ad-trueview-indisplay-pv":6,"ad-trueview-insearch":7},bRa={"ad-trueview-indisplay-pv":2,"ad-trueview-insearch":2},cRa=/^(\d*)_((\d*)_?(\d*))$/;var eRa={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"},fRa={120:"default.jpg",320:"mqdefault.jpg",480:"hqdefault.jpg",560:"pop1.jpg",640:"sddefault.jpg",854:"pop2.jpg",1280:"hq720.jpg"};var C3={},YRa=(C3.ALWAYS=1,C3.BY_REQUEST=3,C3.UNKNOWN=void 0,C3),D3={},eSa=(D3.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_UNKNOWN="UNKNOWN",D3.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_NORMAL="NORMAL",D3.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_LOW="LOW",D3.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_ULTRA_LOW="ULTRALOW",D3);var kHa;
kHa={entities:);
g.FT=new AO;aT.prototype.toString=g.bT.prototype.Xg=
g.bT.prototype.Ok=g.cT.prototype.Xg=
g.cT.prototype.Ok=var dT=void 0;vya("LMS",;var iT,DRa;iT=0;DRa=!1;g.GRa=/^([\w\-_]+)\|(\d+)(;[\w\-_]+)?\|(\d+)\|(\d+)$/;vya("LMDB",;g.w(jT,g.uG);jT.prototype.xa=g.k=g.nT.prototype;g.k.getHeight=function(){return this.height};
g.k.zW=ca(4);g.k.LH=function(){return this.frameCount};
g.k.isDefault=
g.k.isLoaded=function(a){return this.loaded.has(a)};
g.k.Oe=
g.k.zG=
g.k.Nx=
g.k.LL=
g.k.LT=function(){};g.w(oT,jT);oT.prototype.B=
oT.prototype.G=g.w(NRa,g.nT);g.k=NRa.prototype;g.k.LH=function(){return this.B.kz()};
g.k.zG=
g.k.Nx=function(){return this.B.Dd()};
g.k.LL=
g.k.LT=g.w(pT,oT);pT.prototype.B=
pT.prototype.G=g.w(g.rT,g.uG);g.k=g.rT.prototype;g.k.U=function(){return this.Fa};
g.k.L=
g.k.Oh=
g.k.hasSupportedAudio51Tracks=
g.k.UY=
g.k.yV=
g.k.xj=
g.k.Xj=
g.k.getStoryboardFormat=
g.k.Me=
g.k.Md=
g.k.getPlaylistSequenceForTime=
g.k.Ee=
g.k.Iv=
g.k.isLoaded=
g.k.Xg=
g.k.zc=
g.k.isOtf=
g.k.getAvailableAudioTracks=
g.k.getAudioTrack=
g.k.getPlayerResponse=function(){return this.playerResponse};
g.k.getWatchNextResponse=function(){return this.Ra};
g.k.getHeartbeatResponse=function(){return this.eC};
g.k.Ok=
g.k.PO=
g.k.getEmbeddedPlayerResponse=
g.k.isAd=
g.k.isDaiEnabled=
g.k.ER=
g.k.EF=
g.k.rM=
g.k.useInnertubeDrmService=
g.k.va=function(a,b,c){this.oa("ctmp",a,b,c)};
g.k.Rw=
g.k.hasProgressBarBoundaries=
g.k.Xc=
g.k.xa=var gTa={phone:"SMALL_FORM_FACTOR",tablet:"LARGE_FORM_FACTOR"},hTa={android:"ANDROID","android.k":"ANDROID_KIDS","android.m":"ANDROID_MUSIC","android.up":"ANDROID_UNPLUGGED",youtube:"WEB","youtube.m":"WEB_REMIX","youtube.up":"WEB_UNPLUGGED",ytios:"IOS","ytios.k":"IOS_KIDS","ytios.m":"IOS_MUSIC","ytios.up":"IOS_UNPLUGGED"},iTa={desktop:"DESKTOP",phone:"MOBILE",tablet:"TABLET"},fTa={preroll:"BREAK_PREROLL",midroll:"BREAK_MIDROLL",postroll:"BREAK_POSTROLL"},dTa={0:"YT_KIDS_AGE_UP_MODE_UNKNOWN",1:"YT_KIDS_AGE_UP_MODE_OFF",
2:"YT_KIDS_AGE_UP_MODE_TWEEN",3:"YT_KIDS_AGE_UP_MODE_PRESCHOOL"},eTa={0:"MDX_CONTROL_MODE_UNKNOWN",1:"MDX_CONTROL_MODE_REMOTE",2:"MDX_CONTROL_MODE_VOICE"};g.w(oU,g.I);g.k=oU.prototype;g.k.handleExternalCall=
g.k.logApiCall=
g.k.oa=
g.k.Vn=
g.k.ib=
g.k.xc=
g.k.xm=
g.k.L=
g.k.xa=g.w(tU,g.Kv);tU.prototype.oa=g.w(oTa,g.I);oTa.prototype.xa=var qTa=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));g.w(vU,oU);g.k=vU.prototype;g.k.getApiInterface=function(){return Array.from(this.state.Z)};
g.k.a5=function(a,b){this.L("web_player_split_event_bus")?this.state.N.subscribe(a,b):this.app.Lk.subscribe(a,b)};
g.k.zba=function(a,b){this.L("web_player_split_event_bus")?this.state.N.unsubscribe(a,b):this.app.Lk.unsubscribe(a,b)};
g.k.getPlayerState=function(a){return Jcb(this.app,a)};
g.k.S6=function(){return Jcb(this.app)};
g.k.Vba=
g.k.getCurrentTime=
g.k.F6=function(){return this.app.getCurrentTime(1)};
g.k.O6=
g.k.J6=function(){return this.app.getDuration(1)};
g.k.vK=
g.k.ica=
g.k.gJ=
g.k.U8=function(){this.gJ(!1)};
g.k.RK=
g.k.Sca=
g.k.getPlayerMode=
g.k.EQ=
g.k.Waa=
g.k.pauseVideo=
g.k.tca=
g.k.clearVideo=function(){};
g.k.getAvailablePlaybackRates=
g.k.getPlaybackQuality=
g.k.dca=function(){};
g.k.getAvailableQualityLevels=
g.k.C6=function(){return this.getAvailableQualityLevels(1)};
g.k.X6=function(){return this.QW()};
g.k.Y6=function(){return 1};
g.k.getVideoLoadedFraction=function(a){return this.app.getVideoLoadedFraction(a)};
g.k.QW=function(){return this.getVideoLoadedFraction()};
g.k.b7=function(){return 0};
g.k.getSize=function(){var a=this.app.rb().getPlayerSize();return{width:a.width,height:a.height}};
g.k.setSize=
g.k.loadVideoById=
g.k.p8=function(a,b,c){a=this.loadVideoById(a,b,c);B1(this.app,a,1)};
g.k.cueVideoById=function(a,b,c,d){a=uU(a,b,c);this.app.cueVideoByPlayerVars(a,d)};
g.k.M5=function(a,b,c){this.cueVideoById(a,b,c,1)};
g.k.loadVideoByUrl=
g.k.s8=
g.k.cueVideoByUrl=
g.k.O5=function(a,b,c){this.cueVideoByUrl(a,b,c,1)};
g.k.d7=
g.k.H6=function(){return this.app.getDebugText()};
g.k.getVideoEmbedCode=
g.k.W4=
g.k.removeCueRange=function(a){return Ucb(this.app,a)};
g.k.loadPlaylist=function(a,b,c,d){this.app.loadPlaylist(a,b,c,d)};
g.k.o8=
g.k.cuePlaylist=function(a,b,c,d){this.app.cuePlaylist(a,b,c,d)};
g.k.nextVideo=function(a,b){this.app.nextVideo(a,b)};
g.k.V8=function(){this.nextVideo();B1(this.app,!0,1)};
g.k.previousVideo=function(a){this.app.previousVideo(a)};
g.k.jba=
g.k.playVideoAt=function(a){this.app.playVideoAt(a)};
g.k.Vaa=
g.k.setShuffle=
g.k.setLoop=
g.k.U6=
g.k.getPlaylistIndex=
g.k.getPlaylistId=
g.k.hY=
g.k.w0=
g.k.wR=
g.k.P6=function(a,b,c){var d=g.xU(this.app,this.playerType);return d&&d.getVideoData().isPrivate&&this.app.U().D?{}:this.wR(a,b,c)};
g.k.aO=
g.k.getVolume=function(){return this.app.Ni.volume};
g.k.isMuted=function(){return this.app.Ni.muted};
g.k.destroy=function(){this.app.dispose()};
g.k.logImaAdEvent=
g.k.mutedAutoplay=
g.k.preloadVideoById=
g.k.eba=
g.k.setFauxFullscreen=
g.k.aca=g.w(vTa,vU);g.k=vTa.prototype;g.k.b5=function(a,b){this.L("web_player_split_event_bus")?this.state.D.subscribe(a,b):this.app.Lk.subscribe(a,b)};
g.k.Aba=function(a,b){this.L("web_player_split_event_bus")?this.state.D.unsubscribe(a,b):this.app.Lk.unsubscribe(a,b)};
g.k.cueVideoByPlayerVars=
g.k.N5=
g.k.loadVideoByPlayerVars=
g.k.r8=function(a,b,c,d){this.loadVideoByPlayerVars(yTa(this,a),b,c,d)};
g.k.preloadVideoByPlayerVars=
g.k.fba=
g.k.q8=function(a,b,c){this.loadVideoById(a,b,c)};
g.k.t8=function(a,b,c){this.loadVideoByUrl(a,b,c)};
g.k.T6=function(a){return this.getPlayerState(a)};
g.k.PW=
g.k.seekBy=
g.k.Tba=
g.k.seekTo=
g.k.Wba=
g.k.getStoryboardFormat=function(){return this.app.getStoryboardFormat()};
g.k.G6=function(a,b){return this.getCurrentTime(a,b)};
g.k.WH=
g.k.getDuration=
g.k.K6=function(a,b){return this.getDuration(a,b)};
g.k.a7=function(a){return this.getVideoLoadedFraction(a)};
g.k.loadModule=
g.k.unloadModule=
g.k.getOption=
g.k.getOptions=
g.k.setOption=
g.k.addCueRange=function(a,b,c,d,e){return Scb(this.app,a,b,c,d,e)};
g.k.getDebugText=function(a){return this.app.getDebugText(a)};
g.k.getCurrentBroadcastId=function(){return null};
g.k.handleGlobalKeyDown=
g.k.handleGlobalKeyUp=
g.k.setSizeStyle=function(a,b){this.app.setSizeStyle(a,b)};
g.k.showControls=function(){var a=g.yU(this);a&&a.showControls(!0)};
g.k.hideControls=
g.k.getVideoContentRect=
g.k.toggleFullscreen=
g.k.isFullscreen=function(){return this.app.isFullscreen()};
g.k.cancelPlayback=
g.k.getProgressState=
g.k.isInline=function(){return this.app.isInline()};
g.k.setInline=function(a){this.app.setInline(a)};
g.k.c7=
g.k.toggleSubtitles=function(){var a=g.hW(this.app.Bb());a&&a.Ica()};
g.k.getPlayerSize=
g.k.wakeUpControls=function(){var a=g.yU(this);a&&a.pu()};
g.k.setCenterCrop=function(a){this.app.rb().setCenterCrop(a)};
g.k.getLoopVideo=function(){return this.app.getLoopVideo()};
g.k.setLoopVideo=function(a){this.app.setLoopVideo(a)};
var wTa="BASE_URL BASE_YT_URL adformat adaptive_fmts allow_embed audio_only authuser autoplay cc_load_policy cpn dash dashmpd disable_native_context_menu disablekb docid el enable_faster_speeds enablecastapi end eventid external_fullscreen fmt_list hl hlsdvr hlsvp iurl iurlhq iurlmq length_seconds live_playback osig override_hl partnerid pause_at_start pipable player_response playsinline plid post_live_playback postid ps public raw_player_response rel show_loop_video_toggle start startSeconds status suggestedQuality timestamp title token ttsurl use_native_controls url_encoded_fmt_stream_map video_id videoId".split(" "),
xTa="adformat allow_embed authuser autohide autonav autoplay c cbr cbrver cc_load_policy controls cos cosver cr csi_page_type cver cyc dash dashmpd disablekb el enablecastapi enablecsi end external_fullscreen external_list fs hl host_language innertube_api_key innertube_api_version innertube_context_client_version iurl iurlhq iurlmq iv_load_policy jsapicallback length_seconds live_playback live_storyboard_spec loaderUrl osig override_hl pageid partnerid pipable player_params player_wide playsinline plid postid profile_picture ps rel show_miniplayer_button showinfo showwatchlater start startSeconds status storyboard_spec suggestedQuality timestamp title tkn token transparent_background ucid url_encoded_fmt_stream_map use_miniplayer_ui use_native_controls videoId video_id vss_host watermark".split(" ");var E3={},BTa=(E3["api.invalidparam"]=2,E3.auth=150,E3["drm.auth"]=150,E3["heartbeat.net"]=150,E3["heartbeat.servererror"]=150,E3["heartbeat.stop"]=150,E3["html5.unsupportedads"]=5,E3["fmt.noneavailable"]=5,E3["fmt.decode"]=5,E3["fmt.unplayable"]=5,E3["html5.missingapi"]=5,E3["html5.unsupportedlive"]=5,E3["drm.unavailable"]=5,E3["mrm.blocked"]=151,E3);g.w(g.zU,vTa);g.k=g.zU.prototype;g.k.isExternalMethodAvailable=
g.k.getBandwidthEstimate=
g.k.reportPlaybackIssue=
g.k.getInternalApi=
g.k.getInternalApiInterface=function(){return g.id(this.state.j)};
g.k.queueNextVideo=
g.k.createSubtitlesModuleIfNeeded=function(){return this.app.createSubtitlesModuleIfNeeded()};
g.k.startSeekCsiAction=
g.k.seekToStreamTime=
g.k.getStreamTimeOffset=function(){var a=g.xU(this.app,1);return a?a.getStreamTimeOffset():0};
g.k.seekToLiveHead=
g.k.requestSeekToWallTimeSeconds=
g.k.setVolume=
g.k.mute=function(a){this.gJ(void 0===a?!0:a)};
g.k.unMute=
g.k.syncVolume=
g.k.getAvailableQualityLabels=
g.k.channelSubscribed=function(){this.ib("SUBSCRIBE",this.app.Kd().Cl)};
g.k.channelUnsubscribed=
g.k.setScreenLayer=function(a){this.app.setScreenLayer(a)};
g.k.getCurrentPlaylistSequence=
g.k.getPlaylistSequenceForTime=
g.k.shouldSendVisibilityState=function(){return!0};
g.k.confirmYpcRental=
g.k.setHomeGroupInfo=function(a){this.app.U().homeGroupInfo=a};
g.k.setConnectedRemoteApps=function(a){this.app.U().Ko=a};
g.k.setLivingRoomAppMode=
g.k.setEnablePrivacyFilter=
g.k.togglePictureInPicture=function(){this.app.togglePictureInPicture()};
g.k.addUtcCueRange=
g.k.Z6=
g.k.getAdState=function(){return this.app.getAdState()};
g.k.isNotServable=
g.k.supportsGaplessAudio=function(){return this.app.U().supportsGaplessAudio()};
g.k.supportsGaplessShorts=function(){return this.app.U().supportsGaplessShorts()};
g.k.enqueueVideoByPlayerVars=
g.k.clearQueue=function(){this.app.clearQueue()};
g.k.ri=
g.k.sendAbandonmentPing=function(){var a=g.xU(this.app);a&&a.sendAbandonmentPing()};
g.k.setAutonavState=
g.k.setAutonav=
g.k.setLoopRange=function(a){this.app.setLoopRange(a)};
g.k.getLoopRange=function(){return this.app.getLoopRange()};
g.k.hasSupportedAudio51Tracks=
g.k.setUserAudio51Preference=
g.k.getUserAudio51Preference=
g.k.setProximaLatencyPreference=
g.k.getProximaLatencyPreference=function(){var a=g.xU(this.app,1);return a?a.getProximaLatencyPreference():0};
g.k.isProximaLatencyEligible=
g.k.getAppState=function(){return this.app.getAppState()};
g.k.updateLastActiveTime=function(){iF()};
g.k.setBlackout=function(a){this.app.setBlackout(a)};
g.k.setUserEngagement=
g.k.updateSubtitlesUserSettings=
g.k.getCaptionWindowContainerId=function(){var a=g.hW(this.app.Bb());return a?a.getCaptionWindowContainerId():""};
g.k.toggleSubtitlesOn=
g.k.isSubtitlesOn=
g.k.getPlayerResponse=function(a){return(a=g.xU(this.app,a))?a.getVideoData().getPlayerResponse():null};
g.k.R6=function(){return this.getPlayerResponse(1)};
g.k.getEmbeddedPlayerResponse=
g.k.getWatchNextResponse=function(a){return(a=g.xU(this.app,a))?a.getVideoData().getWatchNextResponse():null};
g.k.e7=function(){return this.getWatchNextResponse(1)};
g.k.getHeartbeatResponse=
g.k.M6=function(){return this.getHeartbeatResponse(1)};
g.k.getStoryboardFrame=
g.k.getStoryboardFrameIndex=
g.k.getStoryboardLevel=
g.k.getNumberOfStoryboardLevels=
g.k.y6=function(){return this.getAudioTrack(1)};
g.k.getAudioTrack=
g.k.setAudioTrack=
g.k.B6=
g.k.getAvailableAudioTracks=
g.k.getMaxPlaybackQuality=
g.k.getUserPlaybackQualityPreference=
g.k.getSubtitlesUserSettings=
g.k.resetSubtitlesUserSettings=
g.k.setMinimized=function(a){this.app.setMinimized(a)};
g.k.setOverlayVisibility=function(a){this.oa("overlayvisibilitychange",a)};
g.k.setInlinePreview=function(a){this.app.setInlinePreview(a)};
g.k.setGlobalCrop=function(a){this.app.rb().setGlobalCrop(a)};
g.k.getVisibilityState=
g.k.isMutedByMutedAutoplay=function(){return this.app.fA};
g.k.setInternalSize=
g.k.Qc=function(){var a=g.xU(this.app);return a?a.Qc():0};
g.k.hg=function(){return this.app.hg()};
g.k.Lh=
g.k.setSafetyMode=
g.k.canPlayType=function(a){return this.app.canPlayType(a)};
g.k.updatePlaylist=
g.k.updateVideoData=
g.k.updateEnvironmentData=
g.k.Yba=
g.k.productsInVideoVisibilityUpdated=function(a){this.oa("changeProductsInVideoVisibility",a)};
g.k.isAtLiveHead=
g.k.getVideoAspectRatio=function(){return this.app.rb().getVideoAspectRatio()};
g.k.getPreferredQuality=function(){var a=g.xU(this.app);return a?a.getPreferredQuality():"unknown"};
g.k.getPlaybackQualityLabel=
g.k.setPlaybackQualityRange=
g.k.onAdUxClicked=function(a,b){this.oa("aduxclicked",a,b)};
g.k.showAirplayPicker=function(){this.app.showAirplayPicker()};
g.k.dispatchReduxAction=function(a){g.FT.dispatch(a)};
g.k.changeMarkerVisibility=
g.k.highlightSettingsMenuItem=function(a){this.oa("highlightSettingsMenu",a)};
g.k.openSettingsMenuItem=
g.k.Z4=function(a,b){this.L("web_player_split_event_bus")?this.state.B.subscribe(a,b):this.app.Lk.subscribe(a,b)};
g.k.yba=function(a,b){this.L("web_player_split_event_bus")?this.state.B.unsubscribe(a,b):this.app.Lk.unsubscribe(a,b)};
g.k.getFeedbackProductData=function(){return this.app.getFeedbackProductData()};
g.k.ph=function(){return g.yU(this).ph()};
g.k.Bg=function(){return g.yU(this).Bg()};
g.k.jm=
g.k.Ne=
g.k.Pl=
g.k.Fh=function(){this.Ne().Fh()};
g.k.AO=function(){this.Ne().AO()};
g.k.Jh=function(){this.Ne().hide()};
g.k.CK=
g.k.GF=function(a,b){this.Ne().GF(a,b)};
g.k.Nt=
g.k.BF=function(a){this.Ne().uR(a)};
g.k.yy=
g.k.SC=function(a,b){this.ri().SC(a,b)};
g.k.Vy=function(a,b){this.ri().Vy(a,b)};
g.k.tq=function(){this.ri().tq()};
g.k.vR=function(a,b){this.ri().vR(a,b)};
g.k.aB=ca(6);g.k.bB=ca(8);g.k.Br=ca(11);g.k.Ar=ca(14);g.k.hF=function(a,b){this.ri().hF(a,b)};
g.k.vv=
g.k.getWebPlayerContextConfig=function(){return this.app.U().getWebPlayerContextConfig()};g.w(g.DU,g.zU);g.k=g.DU.prototype;g.k.Do=function(a,b,c,d,e,f,h){return this.app.Do(a,b,c,d,e,f,h)};
g.k.hD=function(){return this.app.hD()};
g.k.Is=ca(16);g.k.Bb=function(){return this.app.Bb()};
g.k.uf=function(){var a=this.Bb().Ge.get("endscreen");return!!a&&a.uf()};
g.k.getRootNode=function(){return this.rb().element};
g.k.U=function(){return this.app.U()};
g.k.jz=ca(18);g.k.hn=function(a){return this.app.hn(a)};
g.k.wp=
g.k.Ub=function(a){return this.app.Ub(a)};
g.k.rb=function(){return this.app.rb()};
g.k.getPlaylist=function(){return this.app.getPlaylist()};
g.k.getVideoData=
g.k.Xj=function(a){return this.app.Xj(a)};
g.k.Wv=function(){return this.app.Wv()};
g.k.isHdr=function(){var a=g.xU(this.app);return a?a.isHdr():!1};
g.k.VO=function(){return this.app.VO()};
g.k.Xc=
g.k.dB=function(a){this.app.dB(a)};
g.k.vg=function(a,b,c,d,e){this.app.Fg(a,b,c,d,e)};
g.k.Cr=function(a,b){this.app.Cr(a,b)};
g.k.playVideo=
g.k.stopVideo=function(a){g.xU(this.app,a).stopVideo()};
g.k.Yn=
g.k.addEventListener=function(a,b){this.L("web_player_split_event_bus")?this.state.C.subscribe(a,b):this.app.Ot.subscribe(a,b)};
g.k.removeEventListener=
g.k.VE=function(a){this.app.VE(a)};
g.k.setPlaybackQuality=
g.k.Js=
g.k.iD=
g.k.rD=ca(22);g.k.fK=
g.k.getVideoUrl=
g.k.sD=ca(24);g.k.Nn=ca(28);g.k.Xn=function(a){var b=g.xU(this.app);b&&b.Xn(a)};
g.k.Sz=
g.k.Fk=function(){var a=g.nW(this.Bb());return!!a&&a.Fk()};
g.k.Xo=
g.k.YA=
g.k.XA=ca(29);g.k.Ao=function(){var a=g.xU(this.app);a&&a.Ao()};
g.k.qK=
g.k.qn=
g.k.vn=function(){return this.app.vn()};
g.k.SD=
g.k.Oh=
g.k.OD=
g.k.isOrchestrationLeader=function(){return this.app.isOrchestrationLeader()};
g.k.Xt=
g.k.sendVideoStatsEngageEvent=function(a,b,c){this.app.sendVideoStatsEngageEvent(a,c,b)};
g.k.sf=function(a,b,c){this.app.Nu(a,b,c)};
g.k.Zn=function(a,b){this.app.gF(a,b)};
g.k.zf=
g.k.UF=function(){this.app.UF()};
g.k.Gg=
g.k.zp=
g.k.Iv=
g.k.getPlaybackRate=
g.k.setPlaybackRate=function(a,b){this.app.setPlaybackRate(a,b)};
g.k.nf=function(){return this.app.nf()};
g.k.wi=function(){return this.app.wi()};
g.k.Xi=function(a){return this.app.Xi(a)};
g.k.createClientVe=
g.k.createServerVe=
g.k.setTrackingParams=
g.k.logClick=
g.k.logVisibility=
g.k.hasVe=
g.k.destroyVe=
g.k.rd=function(){return g.xU(this.app)};
g.k.getPresentingPlayerType=function(a){return this.app.getPresentingPlayerType(a)};
g.k.NA=function(){this.app.NA()};
g.k.Qy=function(a,b){return this.app.Qy(a,b)};
g.k.Up=function(a){this.app.Up(a)};
g.k.Vz=function(){this.app.Vz()};
g.k.addPlayerResponseForAssociation=function(a){this.app.addPlayerResponseForAssociation(a)};
g.k.finishSegmentByCpn=function(a,b){return this.app.finishSegmentByCpn(a,b)};
g.k.vC=function(a,b,c,d,e,f,h){return this.app.vC(a,b,c,d,e,f,h)};
g.k.LD=function(a,b,c,d,e,f,h){return this.app.LD(a,b,c,d,e,f,h)};
g.k.Fz=function(){return this.app.Fz()};
g.k.Lt=function(a){this.app.Lt(a)};
g.k.Fy=
g.k.TK=
g.k.YF=function(a,b,c){this.app.YF(a,b,c)};
g.k.Av=function(){return this.app.Av()};
g.k.uH=
g.k.Uv=function(){return this.app.Uv()};
g.k.Hf=function(){return this.app.Hf()};
g.k.At=function(a,b,c){return this.app.At(a,b,c)};
g.k.va=
g.k.LP=function(a,b){this.oa("aduxmouseover",a,b)};
g.k.KP=function(a,b){this.oa("aduxmouseout",a,b)};
g.k.iQ=
g.k.UD=function(){return this.app.rb().UD()};
g.k.eB=function(a){this.app.rb().eB(a)};
g.k.Dr=
g.k.xR=function(a){this.app.xR(a)};
g.k.TI=
g.k.vu=
g.k.gO=
g.k.tK=var LTa;g.w(KTa,nD);KTa.prototype.gD=var OTa=!1;g.PU.prototype.info=function(){};
g.PU.prototype.debug=function(){};
var FUa=new Map;QU.prototype.yA=
QU.prototype.eQ=function(){};
QU.prototype.qJ=function(){};
var elb=!1;g.w(g.RU,g.CG);g.k=g.RU.prototype;g.k.show=
g.k.hide=
g.k.qd=
g.k.nW=
g.k.cV=
g.k.Qb=
g.k.w3=
g.k.Zj=function(){return this.Ib&&4!==this.ma.state};g.w(IUa,g.RU);IUa.prototype.qd=function(){g.RU.prototype.qd.call(this);this.dialog.focus()};g.w(g.UU,g.CG);g.UU.prototype.updateValue=var cVa={cM:14,hL:13,wU:12,zU:11,XL:10,dM:9,eL:8,dL:7,bM:6,SUBTITLES:5,AUDIO:4,aM:3,hU:2,REMOTE:1,AS:0,14:"STABLE_VOLUME",13:"CINEMATIC",12:"REMOTE_SELECT",11:"SIZE",10:"MINIPLAYER",9:"THREED",8:"AUTONAV",7:"ANNOTATIONS",6:"SPEED",5:"SUBTITLES",4:"AUDIO",3:"QUALITY",2:"LINKEDACCOUNT",1:"REMOTE",0:"CONTEXTMENU"};g.w(XU,g.UU);XU.prototype.Ic=
XU.prototype.D=
XU.prototype.onClick=g.w(ZU,g.I);ZU.prototype.L=function(a){return this.api.L(a)};g.w($U,ZU);$U.prototype.onVideoDataChange=
$U.prototype.setAccountLinkState=
$U.prototype.updateAccountLinkingConfig=g.w(KUa,ZU);
KUa.prototype.B=g.w(QUa,ZU);g.w(SUa,g.V);g.k=SUa.prototype;
g.k.VB=
g.k.NT=
g.k.onClick=
g.k.getValue=function(){return this.isChecked};
g.k.Kd=g.w(VUa,ZU);g.w(dV,g.UU);dV.prototype.onClick=
dV.prototype.getValue=function(){return this.checked};var aVa={cM:14,wU:13,zU:12,XL:11,dM:10,eL:9,aM:8,bM:7,SUBTITLES:6,AUDIO:5,dL:4,hL:3,hU:2,REMOTE:1,AS:0,14:"STABLE_VOLUME",13:"REMOTE_SELECT",12:"SIZE",11:"MINIPLAYER",10:"THREED",9:"AUTONAV",8:"QUALITY",7:"SPEED",6:"SUBTITLES",5:"AUDIO",4:"ANNOTATIONS",3:"CINEMATIC",2:"LINKEDACCOUNT",1:"REMOTE",0:"CONTEXTMENU"},bVa={cM:14,wU:13,zU:12,XL:11,dM:10,eL:9,hL:8,dL:7,AUDIO:6,SUBTITLES:5,bM:4,aM:3,hU:2,REMOTE:1,AS:0,14:"STABLE_VOLUME",13:"REMOTE_SELECT",12:"SIZE",11:"MINIPLAYER",10:"THREED",9:"AUTONAV",8:"CINEMATIC",
7:"ANNOTATIONS",6:"AUDIO",5:"SUBTITLES",4:"SPEED",3:"QUALITY",2:"LINKEDACCOUNT",1:"REMOTE",0:"CONTEXTMENU"};var XUa=["en-CA","en","es-MX","fr-CA"];g.w(iV,dV);iV.prototype.Qa=
iV.prototype.D=function(){g.ov(this.element,"ytp-menuitem-highlight-transition-enabled")};
iV.prototype.C=
iV.prototype.xa=function(){this.j&&this.Gb.gh(this);dV.prototype.xa.call(this)};g.w(fVa,ZU);fVa.prototype.updateCinematicSettings=g.w(jV,g.V);jV.prototype.show=function(){g.V.prototype.show.call(this);this.api.logVisibility(this.element,!0)};
jV.prototype.hide=function(){g.V.prototype.hide.call(this);this.api.logVisibility(this.element,!1)};g.w(hVa,ZU);hVa.prototype.j=g.w(kV,dV);kV.prototype.j=function(a){this.callback(a?1:0)};
kV.prototype.xa=g.w(lV,ZU);lV.prototype.getDrcUserPreference=function(){return this.j};
lV.prototype.setDrcUserPreference=
lV.prototype.updateVideoData=g.w(mV,ZU);mV.prototype.onVideoDataChange=
mV.prototype.B=function(a){return void 0!==a.embargo};
mV.prototype.xa=g.w(lVa,ZU);
lVa.prototype.addEmbedsConversionTrackingParams=g.w(mVa,ZU);g.w(nV,g.V);nV.prototype.show=
nV.prototype.onVideoDataChange=
nV.prototype.xa=g.w(rVa,ZU);g.w(oV,g.V);oV.prototype.onClick=
oV.prototype.Qa=g.w(pV,ZU);
pV.prototype.updateFullerscreenEduButtonSubtleModeState=
pV.prototype.updateFullerscreenEduButtonVisibility=g.w(sVa,g.V);g.w(vVa,ZU);g.w(wVa,ZU);g.w(qV,ZU);qV.prototype.getSphericalProperties=
qV.prototype.setSphericalProperties=g.w(xVa,ZU);g.k=xVa.prototype;g.k.createClientVe=
g.k.createServerVe=function(a,b,c){this.api.createServerVe(a,b,void 0===c?!1:c)};
g.k.setTrackingParams=function(a,b){this.api.setTrackingParams(a,b)};
g.k.logClick=function(a,b){this.api.logClick(a,b)};
g.k.logVisibility=function(a,b,c){this.api.logVisibility(a,b,c)};
g.k.hasVe=function(a){return this.api.hasVe(a)};
g.k.destroyVe=function(a){this.api.destroyVe(a)};g.w(rV,ZU);rV.prototype.seekToChapterWithAnimation=
rV.prototype.seekToTimeWithAnimation=
rV.prototype.setMacroMarkers=g.w(BVa,ZU);BVa.prototype.xa=g.w(tV,ZU);tV.prototype.D=
tV.prototype.xa=g.w(JVa,ZU);g.k=JVa.prototype;g.k.queueOfflineAction=
g.k.updateDownloadState=
g.k.pauseVideoDownload=
g.k.resumeVideoDownload=
g.k.isOrchestrationLeader=function(){return this.api.isOrchestrationLeader()};
g.k.refreshAllStaleEntities=g.w(uV,ZU);uV.prototype.getAvailableQualityDataAndMessaging=
uV.prototype.getAvailableQualityData=g.w(vV,g.V);vV.prototype.Qa=
vV.prototype.onClick=function(){this.api.togglePictureInPicture()};g.w(NVa,ZU);NVa.prototype.createButton=g.w(PVa,ZU);g.w(g.xV,g.uG);g.k=g.xV.prototype;g.k.T=
g.k.cancel=
g.k.ow=
g.k.OT=
g.k.eA=
g.k.Q8=
g.k.ML=
g.k.X5=function(a){a.preventDefault()};
g.k.P8=
g.k.x3=
g.k.NL=
g.k.Jca=
g.k.PT=
g.k.xa=g.w(RVa,g.V);RVa.prototype.Jh=g.w(BV,ZU);BV.prototype.ra=
BV.prototype.Ga=
BV.prototype.N=
BV.prototype.K=function(){CV(this)};g.w(VVa,ZU);VVa.prototype.onVideoDataChange=g.w(DV,g.Bb);DV.prototype.preventDefault=function(){g.Bb.prototype.preventDefault.call(this);this.j&&this.j.preventDefault()};
DV.prototype.stopPropagation=g.w(g.EV,SL);g.k=g.EV.prototype;g.k.Iu=function(){return!0};
g.k.isView=function(){return!1};
g.k.dR=function(){return!1};
g.k.Jb=function(){return this.j};
g.k.Ff=function(){return this.j.src};
g.k.yG=
g.k.cK=function(){this.j.removeAttribute("src")};
g.k.getPlaybackRate=
g.k.setPlaybackRate=
g.k.Ns=function(){return this.j.loop};
g.k.setLoop=function(a){this.j.loop=a};
g.k.canPlayType=function(a,b){return this.j.canPlayType(a,b)};
g.k.isPaused=function(){return this.j.paused};
g.k.Tf=function(){return this.j.seeking};
g.k.Mh=function(){return this.j.ended};
g.k.SH=function(){return this.j.muted};
g.k.ZA=function(a){NBa();this.j.muted=a};
g.k.Ev=function(){return this.j.played||yL([],[])};
g.k.Gh=
g.k.wD=
g.k.xG=
g.k.getCurrentTime=function(){return this.j.currentTime};
g.k.setCurrentTime=function(a){this.j.currentTime=a};
g.k.getDuration=function(){return this.j.duration};
g.k.load=
g.k.pause=function(){this.j.pause()};
g.k.play=
g.k.zk=function(){return this.j.readyState};
g.k.TH=function(){return this.j.networkState};
g.k.Wg=function(){return this.j.error?this.j.error.code:null};
g.k.tf=
g.k.getVideoPlaybackQuality=
g.k.Lh=
g.k.Xt=
g.k.togglePictureInPicture=
g.k.Ps=
g.k.getSize=function(){return g.Fs(this.j)};
g.k.setSize=function(a){g.Es(this.j,a)};
g.k.getVolume=function(){return this.j.volume};
g.k.setVolume=
g.k.uN=
g.k.setAttribute=function(a,b){this.j.setAttribute(a,b)};
g.k.removeAttribute=function(a){this.j.removeAttribute(a)};
g.k.hasAttribute=function(a){return this.j.hasAttribute(a)};
g.k.wC=ca(31);g.k.NF=ca(33);g.k.OF=ca(35);g.k.Hy=ca(37);g.k.VC=function(){return YC(this.j)};
g.k.Xr=
g.k.yD=
g.k.NO=
g.k.audioTracks=
g.k.xa=
g.k.sR=function(a){this.j.disableRemotePlayback=a};FV.prototype.add=
FV.prototype.forEach=
FV.prototype.clear=g.w(GV,g.I);GV.prototype.start=function(){this.B.start()};
GV.prototype.stop=function(){this.B.stop()};
GV.prototype.clear=
GV.prototype.sample=
var flb=new Set(["networkactivity"]);XVa.prototype.update=
XVa.prototype.clear=g.w(KV,g.V);g.w(MV,g.V);MV.prototype.show=
MV.prototype.hide=
MV.prototype.Qa=
MV.prototype.N=g.w(cWa,ZU);g.w(NV,g.I);NV.prototype.j=
var glb=new Fv(0,0,.4,0,.2,1,1,1),iWa=/[0-9.-]+|[^0-9.-]+/g;g.w(OV,g.V);OV.prototype.onClick=
OV.prototype.Qa=g.w(jWa,ZU);g.w(kWa,ZU);PV.prototype.send=
PV.prototype.YC=
PV.prototype.iW=g.w(QV,ZU);QV.prototype.xa=
QV.prototype.GN=
QV.prototype.AP=
QV.prototype.mS=g.w(tWa,ZU);g.w(SV,g.I);SV.prototype.j=
SV.prototype.xa=TV.prototype.NP=
TV.prototype.reset=function(){this.j=this.B=NaN};
TV.prototype.SP=g.k=uWa.prototype;g.k.reset=function(){pI(this.timerName)};
g.k.tick=
g.k.Mi=
g.k.nu=
g.k.infoGel=g.w(yWa,g.uG);g.k=yWa.prototype;g.k.Qk=
g.k.Ap=
g.k.setShuffle=
g.k.Xg=
g.k.getLength=function(){return this.length};
g.k.findIndex=
g.k.onReady=
g.k.getPlaylistId=function(){return this.listId?this.listId.toString():null};
g.k.Ok=
g.k.xa=var WV=new Map;g.w(g.YV,g.uG);g.k=g.YV.prototype;g.k.create=function(){};
g.k.load=function(){this.loaded=!0};
g.k.unload=function(){this.loaded=!1};
g.k.Eh=function(){};
g.k.rl=function(){return!0};
g.k.xa=function(){this.loaded&&this.unload();g.uG.prototype.xa.call(this)};
g.k.uc=function(){return{}};
g.k.getOptions=function(){return[]};g.w(g.aW,g.I);g.k=g.aW.prototype;g.k.zt=ca(40);g.k.Rz=function(){};
g.k.Lr=function(){};
g.k.Gv=function(){return""};
g.k.LQ=ca(41);g.k.xa=function(){this.Lr();g.I.prototype.xa.call(this)};g.w(g.bW,g.aW);g.bW.prototype.zt=ca(39);g.bW.prototype.Rz=
g.bW.prototype.Gv=
g.bW.prototype.Lr=function(){this.j&&this.j.abort()};g.LWa.prototype.Kt=function(a){this.Fa.Kt(a)};g.hlb=new Map;g.w(g.fW,g.aW);g.fW.prototype.zt=ca(38);
g.fW.prototype.Rz=
g.fW.prototype.Gv=
g.fW.prototype.Lr=function(){this.j&&this.j.abort()};SWa.prototype.reload=
g.fL||g.QR&&!g.DC("windows nt")||g.MD||g.hE||Yoa();var gW="WebAssembly"in window&&("instantiateStreaming"in window.WebAssembly||"instantiate"in window.WebAssembly);g.w($Wa,g.I);g.k=$Wa.prototype;g.k.createSubtitlesModuleIfNeeded=
g.k.EF=function(){return this.J.getVideoData().EF()};
g.k.ER=function(){return this.J.getVideoData().ER()};
g.k.JV=
g.k.eH=
g.k.cN=
g.k.wi=function(){return this.B};
g.k.Fq=
g.k.Sz=
g.k.onVideoDataChange=
g.k.xa=
var F3={},rXa=(F3.ad="ad.js",F3.annotations_module="annotations_module.js",F3.asmjs="asmjs.js",F3.creatorendscreen="annotations_module.js",F3.embed="embed.js",F3.endscreen="endscreen.js",F3.heartbeat="heartbeat.js",F3.inline_preview="inline_preview.js",F3.kids="kids.js",F3.remote="remote.js",F3.miniplayer="miniplayer.js",F3.offline="offline.js",F3.captions="captions.js",F3.unplugged="unplugged.js",F3.ux="ux.js",F3.webgl="webgl.js",F3.ypc="ypc.js",F3.ypc_clickwrap="ypc_clickwrap.js",F3.yto="yto.js",
F3),mXa="ad annotations_module asmjs creatorendscreen embed endscreen heartbeat inline_preview kids remote miniplayer offline captions webgl ypc ypc_clickwrap yto unplugged ux".split(" ");g.w(tXa,g.uG);g.k=tXa.prototype;g.k.y3=
g.k.S8=
g.k.ow=
g.k.eA=
g.k.k8=function(){oW(this,1,!0)};
g.k.u6=
g.k.QT=
g.k.z3=
g.k.RT=
g.k.A3=
g.k.pu=
g.k.resize=
g.k.toString=g.w(g.qW,g.V);g.k=g.qW.prototype;g.k.Xca=
g.k.Qa=
g.k.show=
g.k.k7=
g.k.hba=g.w(g.rW,g.V);g.k=g.rW.prototype;g.k.show=
g.k.hide=
g.k.Yb=function(){g.fv(this.j)};
g.k.onStateChange=function(){g.fv(this.j)};
g.k.Oaa=
g.k.Bw=
g.k.Qa=
g.k.dda=g.w(g.sW,g.V);g.sW.prototype.resize=function(){};
g.sW.prototype.B=
var wXa=/<a\s+href=["']([^"']+)["'](?:\s+target=["']([^"']+)["'])?>([^<>]+)<\/a>/;g.w(zXa,g.V);g.k=zXa.prototype;g.k.onClick=
g.k.onVideoDataChange=function(a,b){BXa(this,b);this.Fe&&CXa(this,this.Fe)};
g.k.B3=
g.k.qd=function(){this.D.show();this.J.oa("paidcontentoverlayvisibilitychange",!0);this.J.logVisibility(this.element,!0)};
g.k.Qb=g.w(wW,g.V);wW.prototype.hide=
wW.prototype.onStateChange=function(a){this.Dc(a.state)};
wW.prototype.Dc=
wW.prototype.B=g.w(xW,g.RU);xW.prototype.onMutedAutoplayChange=
xW.prototype.nk=
xW.prototype.onClick=
xW.prototype.logClick=g.w(g.yW,g.hL);g.k=g.yW.prototype;g.k.init=
g.k.onVideoDataChange=
g.k.t$=function(){this.onVideoDataChange("newdata",this.api.getVideoData())};
g.k.gB=
g.k.aq=
g.k.TG=
g.k.qA=
g.k.MP=
g.k.X$=function(){this.bS=!0};
g.k.W$=
g.k.V$=
g.k.R$=
g.k.zO=function(){};
g.k.FF=function(){};
g.k.iF=function(){};
g.k.hF=function(){};
g.k.Ir=
g.k.S$=
g.k.DD=
g.k.T$=
g.k.U$=
g.k.Yb=
g.k.nk=
g.k.bB=ca(7);g.k.UN=
g.k.bq=
g.k.Cc=
g.k.tq=
g.k.onMutedAutoplayChange=function(a){this.yO=a;this.aq()};
g.k.ph=function(){return!1};
g.k.Bg=
g.k.BI=
g.k.jm=function(){return this.LK};
g.k.wp=function(){return null};
g.k.rW=function(){return null};
g.k.qn=
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Nt=function(){};
g.k.showControls=
g.k.pu=function(){};
g.k.hO=function(){return null};g.w(AW,g.uG);g.k=AW.prototype;g.k.Vl=
g.k.stop=
g.k.Mc=
g.k.getProgressState=function(){return this.B};
g.k.C3=g.w(g.BW,g.V);g.BW.prototype.show=function(){g.V.prototype.show.call(this);g.fv(this.j)};
g.BW.prototype.hide=
g.BW.prototype.FF=g.w(MXa,g.V);g.k=MXa.prototype;g.k.BF=
g.k.qd=
g.k.Qb=
g.k.Zj=function(){return this.Ib&&4!==this.B.state};
g.k.xa=
g.k.R9=function(){g.aF("iv-button-mouseover")};
g.k.y9=g.w(NXa,g.V);g.k=NXa.prototype;g.k.y0=
g.k.TR=
g.k.E3=
g.k.vaa=
g.k.qd=
g.k.OL=
g.k.y5=
g.k.TT=
g.k.ST=
g.k.f$=function(){this.j&&this.j.stop()};
g.k.e$=function(){this.Qb()};
g.k.D3=function(){this.Qb()};
g.k.Qb=
g.k.Zj=
g.k.xa=var G3={},EW=(G3.BUTTON="ytp-button",G3.TITLE_NOTIFICATIONS="ytp-title-notifications",G3.TITLE_NOTIFICATIONS_ON="ytp-title-notifications-on",G3.TITLE_NOTIFICATIONS_OFF="ytp-title-notifications-off",G3.NOTIFICATIONS_ENABLED="ytp-notifications-enabled",G3);g.w(OXa,g.V);
OXa.prototype.onClick=g.Ua("yt.pubsub.publish",g.aF);g.w(g.FW,g.V);g.FW.prototype.D=function(){window.location.reload()};
g.FW.prototype.j=function(){g.mv(this.element,"ytp-sb-subscribed")};
g.FW.prototype.B=g.w(TXa,g.V);g.k=TXa.prototype;g.k.x9=
g.k.eR=
g.k.isExpanded=
g.k.BH=
g.k.bH=
g.k.Qa=
g.k.Ic=function(a){g.V.prototype.Ic.call(this,a);this.api.logVisibility(this.j,this.D&&a)};g.w(HW,g.CG);HW.prototype.RY=function(){this.oa("size-change")};
HW.prototype.focus=function(){this.content.focus()};
HW.prototype.LY=function(){this.oa("back")};g.w(g.IW,HW);g.k=g.IW.prototype;g.k.Uc=
g.k.gh=
g.k.hQ=function(){this.menuItems.oa("size-change")};
g.k.focus=
g.k.tp=function(){return this.items.length};g.w(KW,g.UU);KW.prototype.j=g.w(ZXa,g.V);g.k=ZXa.prototype;g.k.show=
g.k.hide=
g.k.F3=
g.k.G3=
g.k.Qa=g.w(aYa,g.IW);g.k=aYa.prototype;g.k.B5=function(){this.Gb.Qb()};
g.k.D9=
g.k.N9=
g.k.O9=
g.k.P9=function(){NW(this,this.J.getVideoUrl(!0,!0))&&CW(this.Td,KG());this.J.logClick(this.getVideoUrl.element);axa("COPY_PASTE",this.J.getVideoData().videoId,this.J.getPlaylistId()||"")};
g.k.Q9=
g.k.onLoopChange=
g.k.Y9=
g.k.N$=
g.k.haa=
g.k.faa=
g.k.onVideoDataChange=
g.k.CF=
g.k.Ic=g.w(g.OW,g.RU);g.k=g.OW.prototype;g.k.show=
g.k.hide=
g.k.sB=
g.k.Dj=
g.k.H3=
g.k.focus=
g.k.xa=g.w(hYa,g.OW);g.k=hYa.prototype;g.k.J3=
g.k.rZ=function(){this.ra.stop()};
g.k.Aaa=
g.k.nW=
g.k.show=
g.k.hide=
g.k.B9=
g.k.qd=
g.k.open=
g.k.J9=
g.k.onFullscreenToggled=function(){this.Qb();iYa(this)};
g.k.I3=function(){this.Qb()};g.w(QW,g.V);QW.prototype.onClick=
QW.prototype.Qa=
QW.prototype.Ic=function(a){g.V.prototype.Ic.call(this,a);this.api.logVisibility(this.element,this.visible&&a)};
QW.prototype.xa=function(){g.V.prototype.xa.call(this);g.ov(this.element,"ytp-copylink-button-visible")};g.w(RW,g.V);RW.prototype.show=
RW.prototype.hide=
RW.prototype.iF=g.w(VW,g.V);g.k=VW.prototype;g.k.mJ=function(){};
g.k.rA=function(){};
g.k.hB=function(){return!0};
g.k.qca=
g.k.k6=
g.k.pJ=
g.k.Zca=
g.k.yK=
g.k.Dm=
g.k.UT=
g.k.Yca=
g.k.u9=
g.k.M9=g.w(XW,g.OW);XW.prototype.open=
XW.prototype.initialize=
XW.prototype.Uc=g.w(uYa,VW);g.k=uYa.prototype;g.k.o$=
g.k.S9=
g.k.hB=function(){return!!this.j};
g.k.yK=function(){return!!this.j};
g.k.mJ=
g.k.rA=
g.k.UT=
g.k.bca=
g.k.OA=
g.k.onVideoDataChange=
g.k.xa=g.w(GYa,g.V);GYa.prototype.onClick=g.w(HYa,g.RU);g.k=HYa.prototype;g.k.show=function(){g.RU.prototype.show.call(this);this.J.oa("infopaneldetailvisibilitychange",!0);this.J.logVisibility(this.element,!0);IYa(this,!0)};
g.k.hide=
g.k.getId=function(){return this.D};
g.k.tp=function(){return this.itemData.length};
g.k.onVideoDataChange=
g.k.xa=function(){this.hide();g.RU.prototype.xa.call(this)};g.w(LYa,g.V);g.k=LYa.prototype;g.k.onVideoDataChange=
g.k.M3=
g.k.SY=
g.k.L3=function(){this.B||this.qd();this.showControls=!0};
g.k.K3=
g.k.qd=function(){this.j&&!this.D&&(this.C.show(),this.J.oa("infopanelpreviewvisibilitychange",!0),this.J.logVisibility(this.element,!0))};
g.k.Qb=
g.k.fca=var ilb={"default":0,monoSerif:1,propSerif:2,monoSans:3,propSans:4,casual:5,cursive:6,smallCaps:7};Object.keys(ilb).reduce(function(a,b){a[ilb[b]]=b;return a},{});
var jlb={none:0,raised:1,depressed:2,uniform:3,dropShadow:4};Object.keys(jlb).reduce(function(a,b){a[jlb[b]]=b;return a},{});
var klb={normal:0,bold:1,italic:2,bold_italic:3};Object.keys(klb).reduce({});var llb,mlb;llb=[{option:"#fff",text:"\u0411\u0435\u043b\u044b\u0439"},{option:"#ff0",text:"\u0416\u0435\u043b\u0442\u044b\u0439"},{option:"#0f0",text:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439"},{option:"#0ff",text:"\u0413\u043e\u043b\u0443\u0431\u043e\u0439"},{option:"#00f",text:"\u0421\u0438\u043d\u0438\u0439"},{option:"#f0f",text:"\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439"},{option:"#f00",text:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439"},{option:"#080808",text:"\u0427\u0435\u0440\u043d\u044b\u0439"}];
mlb=[{option:0,text:ZW(0)},{option:.25,text:ZW(.25)},{option:.5,text:ZW(.5)},{option:.75,text:ZW(.75)},{option:1,text:ZW(1)}];
g.bX=[{option:"fontFamily",text:"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e \u0448\u0440\u0438\u0444\u0442\u043e\u0432",options:[{option:1,text:"\u041c\u043e\u043d\u043e\u0448\u0438\u0440\u0438\u043d\u043d\u044b\u0439 \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438"},{option:2,text:"\u041f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438"},{option:3,text:"\u041c\u043e\u043d\u043e\u0448\u0438\u0440\u0438\u043d\u043d\u044b\u0439 \u0431\u0435\u0437 \u0437\u0430\u0441\u0435\u0447\u0435\u043a"},
{option:4,text:"\u041f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u0435\u0437 \u0437\u0430\u0441\u0435\u0447\u0435\u043a"},{option:5,text:"\u041e\u0431\u044b\u0447\u043d\u044b\u0439"},{option:6,text:"\u041a\u0443\u0440\u0441\u0438\u0432"},{option:7,text:"\u041c\u0430\u043b\u044b\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u044b\u0435"}]},{option:"color",text:"\u0426\u0432\u0435\u0442 \u0448\u0440\u0438\u0444\u0442\u0430",options:llb},{option:"fontSizeIncrement",
text:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",options:[{option:-2,text:ZW(.5)},{option:-1,text:ZW(.75)},{option:0,text:ZW(1)},{option:1,text:ZW(1.5)},{option:2,text:ZW(2)},{option:3,text:ZW(3)},{option:4,text:ZW(4)}]},{option:"background",text:"\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430",options:llb},{option:"backgroundOpacity",text:"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u0444\u043e\u043d\u0430",options:mlb},{option:"windowColor",
text:"\u0426\u0432\u0435\u0442 \u043e\u043a\u043d\u0430",options:llb},{option:"windowOpacity",text:"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u043e\u043a\u043d\u0430",options:mlb},{option:"charEdgeStyle",text:"\u0421\u0442\u0438\u043b\u044c \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",options:[{option:0,text:"\u0411\u0435\u0437 \u043a\u043e\u043d\u0442\u0443\u0440\u0430"},{option:4,text:"\u0421 \u0442\u0435\u043d\u044c\u044e"},
{option:1,text:"\u041f\u0440\u0438\u043f\u043e\u0434\u043d\u044f\u0442\u044b\u0439"},{option:2,text:"\u0423\u0442\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0439"},{option:3,text:"\u0413\u0440\u0430\u043d\u0438\u0446\u044b"}]},{option:"textOpacity",text:"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u0448\u0440\u0438\u0444\u0442\u0430",options:[{option:.25,text:ZW(.25)},{option:.5,text:ZW(.5)},{option:.75,text:ZW(.75)},{option:1,text:ZW(1)}]}];var nlb=[27,9,33,34,13,32,187,61,43,189,173,95,79,87,67,80,78,75,70,65,68,87,83,107,221,109,219];g.w(TYa,g.hL);g.k=TYa.prototype;
g.k.bX=
g.k.cX=
g.k.handleGlobalKeyUp=
g.k.handleGlobalKeyDown=
g.k.step=
g.k.Ir=
g.k.xa=g.w(g.dX,g.V);g.dX.prototype.Ar=ca(13);g.dX.prototype.Qa=
g.dX.prototype.Ic=function(a){g.V.prototype.Ic.call(this,a);this.J.logVisibility(this.element,this.visible&&a)};
g.dX.prototype.xa=function(){g.V.prototype.xa.call(this);g.ov(this.element,"ytp-overflow-button-visible")};g.w(UYa,g.RU);g.k=UYa.prototype;g.k.N3=
g.k.Qb=
g.k.show=
g.k.hide=
g.k.onFullscreenToggled=function(a){!a&&this.Zj()&&SU(this)};
g.k.isEmpty=function(){return 0===this.actionButtons.length};
g.k.focus=g.w(XYa,g.V);XYa.prototype.onClick=g.w(YYa,g.RU);g.k=YYa.prototype;g.k.show=
g.k.hide=
g.k.PL=
g.k.hK=
g.k.zaa=
g.k.updatePlaylist=
g.k.focus=function(){this.selected.focus()};
g.k.xa=function(){this.hide();g.RU.prototype.xa.call(this)};g.w(eX,g.V);eX.prototype.hide=
eX.prototype.Qa=
eX.prototype.Ic=function(a){g.V.prototype.Ic.call(this,a);this.api.logVisibility(this.element,this.visible&&a)};
eX.prototype.j=g.w(ZYa,g.V);g.k=ZYa.prototype;g.k.P3=
g.k.O3=
g.k.c9=
g.k.H9=
g.k.Q3=
g.k.yF=
g.k.Yb=
var aZa={"ytp-settings-button":g.nwa()};g.w(gX,g.V);gX.prototype.onStateChange=function(a){this.Dc(a.state)};
gX.prototype.Dc=
gX.prototype.onClick=g.w(hX,g.V);hX.prototype.onClick=
hX.prototype.j=
hX.prototype.Ic=function(a){g.V.prototype.Ic.call(this,a);this.api.logVisibility(this.element,this.visible&&a)};g.w(g.iX,g.V);g.k=g.iX.prototype;g.k.Br=ca(10);g.k.onClick=
g.k.Qa=
g.k.Ic=function(a){g.V.prototype.Ic.call(this,a);this.api.logVisibility(this.element,this.visible&&a)};
g.k.xa=g.w(hZa,g.RU);g.k=hZa.prototype;g.k.R3=
g.k.Qb=
g.k.show=
g.k.y8=
g.k.Qa=
g.k.onFullscreenToggled=
g.k.focus=function(){this.j.focus()};
g.k.xa=g.w(mZa,VW);g.k=mZa.prototype;g.k.xa=
g.k.mJ=
g.k.rA=
g.k.v$=
g.k.onVideoDataChange=
g.k.hB=
g.k.pJ=
g.k.og=
g.k.sf=g.w(tZa,g.V);
tZa.prototype.Qa=g.w(nX,g.RU);nX.prototype.show=function(){g.RU.prototype.show.call(this);this.j.start()};
nX.prototype.hide=
nX.prototype.Ts=g.w(oX,g.V);oX.prototype.onClick=function(){this.J.Xt()};
oX.prototype.Qa=g.w(vZa,g.V);vZa.prototype.xa=g.w(pX,g.V);pX.prototype.onClick=
pX.prototype.N=
pX.prototype.K=g.w(qX,pX);qX.prototype.onClickCommand=function(a){g.U(a,ET)&&this.Mc()};
qX.prototype.updateVideoData=
qX.prototype.Mc=g.w(rX,g.V);rX.prototype.G=
rX.prototype.Wf=
rX.prototype.K=
rX.prototype.hide=g.w(AZa,g.V);g.k=AZa.prototype;g.k.onClick=
g.k.DD=
g.k.XP=
g.k.xw=
g.k.u5=
g.k.disable=
g.k.Qa=
g.k.zm=
g.k.xa=g.w(sX,g.V);sX.prototype.onClick=g.w(tX,pX);tX.prototype.onClickCommand=
tX.prototype.updateVideoData=
tX.prototype.Mc=g.w(uX,g.V);uX.prototype.onClick=
uX.prototype.Qa=
uX.prototype.Ic=function(a){g.V.prototype.Ic.call(this,a);this.J.logVisibility(this.element,this.visible&&a)};g.w(g.vX,g.V);g.k=g.vX.prototype;g.k.VT=
g.k.g$=
g.k.onVolumeChange=
g.k.setVolume=
g.k.Ic=
var DZa=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",24.77," C",21.89,",",23.85," ",24,",",21.17," ",24,",",18," C",24,",",14.83," ",21.89,",",12.15," ",19,",",11.29," L",19,",",11.29," Z"],EZa=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",26.77," C",23.01,",",25.86," ",26,",",22.28," ",26,",",18," C",26,",",13.72," ",
23.01,",",10.14," ",19,",",9.23," L",19,",",11.29," Z"];g.w(g.wX,g.V);g.wX.prototype.onStateChange=
g.wX.prototype.Dc=
g.wX.prototype.onVideoDataChange=
g.wX.prototype.Ir=g.w(g.xX,g.V);g.k=g.xX.prototype;g.k.onVideoDataChange=
g.k.QL=
g.k.onClick=
g.k.S3=
g.k.xa=g.w(i_a,g.V);g.k=i_a.prototype;g.k.U3=
g.k.SL=
g.k.RL=
g.k.T3=
g.k.vA=
g.k.play=
g.k.onExit=
g.k.Yb=
g.k.enable=
g.k.disable=
g.k.reset=
g.k.logVisibility=
g.k.xa=
g.w(k_a,g.V);g.w(l_a,g.V);g.w(p_a,g.V);g.w(zX,g.V);zX.prototype.Jb=s_a.prototype.update=g.w(t_a,g.V);g.w(g.CX,g.CG);g.k=g.CX.prototype;
g.k.A0=
g.k.Yb=
g.k.onClickCommand=
g.k.yaa=
g.k.Mc=
g.k.V3=
g.k.Ts=
g.k.s7=
g.k.updateVideoData=
g.k.t7=
g.k.XT=
g.k.y$=
g.k.x$=
g.k.w$=
g.k.z$=
g.k.A$=
g.k.Jh=function(){this.tooltip.AO()};
g.k.OY=function(){this.Fb||(this.updateValue("clipstarticon",Uva()),this.updateValue("clipendicon",Uva()),g.mv(this.element,"ytp-clip-hover"))};
g.k.MY=
g.k.bK=
g.k.cda=
g.k.Bba=
g.k.vv=function(a){this.B&&(this.B.onExit(null!=a),OX(this))};
g.k.zN=
g.k.xa=g.w(PX,g.V);PX.prototype.isActive=
PX.prototype.Qa=
PX.prototype.B=g.w(QX,g.V);QX.prototype.j=
QX.prototype.C=
QX.prototype.updateBadge=g.w(RX,dV);RX.prototype.isLoaded=
RX.prototype.Qa=
RX.prototype.onSelect=
RX.prototype.xa=g.w(g.SX,g.UU);g.k=g.SX.prototype;g.k.open=
g.k.Mj=
g.k.BM=
g.k.enable=
g.k.Ox=
g.k.jh=function(a){this.oa("select",a)};
g.k.Ak=function(a){return a.toString()};
g.k.W3=
g.k.xa=g.w(UX,g.SX);UX.prototype.Qa=
UX.prototype.jh=
UX.prototype.j=function(a){return a.toString()};g.w(VX,dV);
VX.prototype.B=
VX.prototype.D=
VX.prototype.onSelect=
VX.prototype.xa=function(){this.j&&this.Gb.gh(this);dV.prototype.xa.call(this)};g.w(a0a,g.UU);a0a.prototype.onClick=g.w(b0a,g.SX);g.k=b0a.prototype;
g.k.WB=
g.k.ZT=
g.k.jh=
g.k.open=
g.k.BM=
g.k.Ak=g.w(WX,g.V);g.k=WX.prototype;g.k.init=
g.k.Z3=
g.k.X3=
g.k.Y3=
g.k.Zw=
g.k.focus=function(){this.Ga.focus()};g.w(XX,WX);XX.prototype.Ba=
XX.prototype.Zw=
XX.prototype.updateValues=g.w(h0a,g.CG);h0a.prototype.focus=function(){this.j.focus()};g.w(i0a,HW);g.w(j0a,g.SX);g.k=j0a.prototype;g.k.Ak=
g.k.Qa=
g.k.Ox=
g.k.onPlaybackRateChange=
g.k.jh=g.w(p0a,g.SX);g.k=p0a.prototype;g.k.Mj=
g.k.aU=function(a){return a.option.toString()};
g.k.getOption=function(a){return this.settings[a]};
g.k.Ak=
g.k.jh=g.w(YX,g.IW);YX.prototype.hh=
YX.prototype.pk=function(a,b){this.oa("settingChange",a,b)};g.w(ZX,g.SX);ZX.prototype.j=function(a){return a.languageCode};
ZX.prototype.Ak=
ZX.prototype.jh=g.w(s0a,g.SX);g.k=s0a.prototype;g.k.XB=
g.k.Ak=
g.k.jh=
g.k.Qa=
g.k.a4=
g.k.pk=
g.k.eaa=
g.k.xa=function(){g.hv(this.N);g.SX.prototype.xa.call(this)};
g.k.open=g.w(u0a,g.OW);g.k=u0a.prototype;
g.k.initialize=
g.k.Uc=
g.k.gh=
g.k.qd=
g.k.Qb=
g.k.show=function(){g.OW.prototype.show.call(this);g.mv(this.J.getRootNode(),"ytp-settings-shown")};
g.k.hide=
g.k.og=g.w(g.aY,g.V);g.aY.prototype.onClick=
g.aY.prototype.j=
g.aY.prototype.isEnabled=
g.aY.prototype.Qa=g.w(g.cY,g.V);g.k=g.cY.prototype;
g.k.Mc=
g.k.onLoopRangeChange=
g.k.Kaa=function(){this.api.setLoopRange(null)};
g.k.onVideoDataChange=
g.k.updateVideoData=
g.k.onClick=
g.k.xa=function(){this.j&&this.j();g.V.prototype.xa.call(this)};g.w(y0a,g.V);g.k=y0a.prototype;g.k.xw=
g.k.bU=
g.k.e4=
g.k.b4=
g.k.maa=
g.k.d4=
g.k.jaa=
g.k.onVolumeChange=
g.k.zV=
g.k.xa=function(){g.V.prototype.xa.call(this);g.ov(this.K,"ytp-volume-slider-active")};g.w(gY,g.V);
gY.prototype.onVideoDataChange=
gY.prototype.onClick=
gY.prototype.Yb=
gY.prototype.Ic=function(a){g.V.prototype.Ic.call(this,a);this.api.logVisibility(this.element,this.visible&&a)};g.w(A0a,g.hL);g.k=A0a.prototype;g.k.Wf=
g.k.qA=
g.k.f4=
g.k.nS=
g.k.Yb=
g.k.onVideoDataChange=
g.k.Jb=function(){return this.C.element};g.w(F0a,VW);g.k=F0a.prototype;g.k.mJ=
g.k.rA=function(){this.enabled=!1;this.N.hide()};
g.k.onVideoDataChange=
g.k.hB=function(){return this.enabled};
g.k.og=
g.k.xa=function(){G0a(this);VW.prototype.xa.call(this)};var H3={},hY=(H3.CHANNEL_NAME="ytp-title-channel-name",H3.FULLERSCREEN_LINK="ytp-title-fullerscreen-link",H3.LINK="ytp-title-link",H3.SESSIONLINK="yt-uix-sessionlink",H3.SUBTEXT="ytp-title-subtext",H3.TEXT="ytp-title-text",H3.TITLE="ytp-title",H3);g.w(iY,g.V);iY.prototype.onClick=
iY.prototype.Qa=g.w(g.jY,g.V);g.k=g.jY.prototype;g.k.uR=
g.k.CK=
g.k.AO=
g.k.GF=
g.k.Fh=
g.k.WY=
g.k.n8=
g.k.Jh=
g.k.Pl=
g.k.xa=g.w(O0a,g.V);g.k=O0a.prototype;g.k.YB=
g.k.me=
g.k.onClick=
g.k.Bw=
g.k.Qa=
g.k.Ic=function(a){g.V.prototype.Ic.call(this,a);this.J.logVisibility(this.element,this.visible&&a)};g.w(g.kY,g.yW);g.k=g.kY.prototype;
g.k.init=
g.k.Ne=function(){return this.tooltip};
g.k.hO=function(){return this.Hg};
g.k.Vy=
g.k.SC=
g.k.gB=
g.k.aB=ca(5);g.k.Br=ca(9);g.k.Ar=ca(12);g.k.aq=
g.k.Nt=
g.k.qA=
g.k.MP=
g.k.qn=
g.k.xw=
g.k.ph=
g.k.showControls=
g.k.Yb=
g.k.UN=
g.k.bq=
g.k.Cc=
g.k.handleGlobalKeyDown=
g.k.handleGlobalKeyUp=
g.k.tq=
g.k.vR=
g.k.H0=
g.k.v6=function(){U0a(this,this.api.getRootNode(),!0).focus()};
g.k.w6=
g.k.wp=
g.k.pu=function(){this.Mg.pu()};
g.k.zO=function(){this.Td.hide()};
g.k.FF=
g.k.iF=
g.k.hF=function(a,b){nYa(this.qv,a,b)};
g.k.C9=
g.k.Bw=function(){T0a(this)};
g.k.a$=
g.k.rW=function(){return this.contextMenu};
g.k.yy=
g.k.vv=g.w(g.lY,g.YV);g.lY.prototype.rl=function(){return!1};
g.lY.prototype.create=
g.lY.prototype.ri=function(){return this.chrome};var $0a=!1;g.w(mY,g.I);mY.prototype.C=
mY.prototype.load=
mY.prototype.N=
var W0a={p0a:0,B3a:1,H1a:2,C3a:3,Xta:4,0:"PRIMARY",1:"SECONDARY",2:"RANDOM",3:"SENSITIVE_CONTENT",4:"C_YOUTUBE"};qY.prototype.yk=
qY.prototype.LE=function(){return this.Kf};g.w(sY,g.I);g.k=sY.prototype;g.k.xq=function(){return Array.from(this.wd.keys())};
g.k.Vt=
g.k.Og=function(a){return this.wd.get(a).Og};
g.k.Mh=
g.k.wA=
g.k.pn=
g.k.hA=
g.k.Kp=
g.k.yk=
g.k.Zk=
g.k.Yl=
g.k.xa=
var o1a=!1;var I3={},$6a=(I3["1h"]=8,I3["9h"]=4,I3["1"]=8,I3["9"]=4,I3["("]=4,I3.h=2,I3.H=2,I3),J3={},a7a=(J3.o=3,J3.O=3,J3.so=3,J3.a=1,J3.ah=1,J3.A=1,J3.m=1,J3.M=1,J3.sa=1,J3.mac3=7,J3.MAC3=7,J3.meac3=5,J3.MEAC3=5,J3),K3={},b7a=(K3.o=0,K3.O=0,K3.a=0,K3.ah=0,K3.A=0,K3.m=1,K3.M=1,K3.mac3=1,K3.MAC3=1,K3.meac3=1,K3.MEAC3=1,K3.so=4,K3.sa=4,K3);var L3={},u1a=(L3["140"]={numChannels:2},L3["141"]={numChannels:2},L3["251"]={audioSampleRate:48E3,numChannels:2},L3["380"]={numChannels:6},L3["328"]={numChannels:6},L3),M3={},r1a=(M3["1"]='video/mp4; codecs="av01.0.08M.08"',M3["1h"]='video/mp4; codecs="av01.0.12M.10.0.110.09.16.09.0"',M3["9"]='video/webm; codecs="vp9"',M3["("]='video/webm; codecs="vp9"',M3["9h"]='video/webm; codecs="vp09.02.51.10.01.09.16.09.00"',M3.h='video/mp4; codecs="avc1.64001e"',M3.H='video/mp4; codecs="avc1.64001e"',M3.o=
'audio/webm; codecs="opus"',M3.a='audio/mp4; codecs="mp4a.40.2"',M3.ah='audio/mp4; codecs="mp4a.40.2"',M3.mac3='audio/mp4; codecs="ac-3"; channels=6',M3.meac3='audio/mp4; codecs="ec-3"; channels=6',M3),N3={},s1a=(N3["337"]={width:3840,height:2160,bitrate:3E7,fps:30},N3["336"]={width:2560,height:1440,bitrate:15E6,fps:30},N3["335"]={width:1920,height:1080,bitrate:75E5,fps:30},N3["702"]={width:7680,height:4320,bitrate:4E7,fps:60},N3["701"]={width:3840,height:2160,bitrate:2E7,fps:60},N3["700"]={width:2560,
height:1440,bitrate:1E7,fps:60},N3["412"]={width:1920,height:1080,bitrate:85E5,fps:60,cryptoblockformat:"subsample"},N3["359"]={width:1920,height:1080,bitrate:8E6,fps:30,cryptoblockformat:"subsample"},N3["411"]={width:1920,height:1080,bitrate:3316E3,fps:60,cryptoblockformat:"subsample"},N3["410"]={width:1280,height:720,bitrate:4746E3,fps:60,cryptoblockformat:"subsample"},N3["409"]={width:1280,height:720,bitrate:1996E3,fps:60,cryptoblockformat:"subsample"},N3["360"]={width:1920,height:1080,bitrate:5331E3,
fps:30,cryptoblockformat:"subsample"},N3["358"]={width:1280,height:720,bitrate:3508E3,fps:30,cryptoblockformat:"subsample"},N3["357"]={width:1280,height:720,bitrate:3206E3,fps:30,cryptoblockformat:"subsample"},N3["274"]={width:1280,height:720,bitrate:1446E3,fps:30,cryptoblockformat:"subsample"},N3["315"]={width:3840,height:2160,bitrate:2E7,fps:60},N3["308"]={width:2560,height:1440,bitrate:1E7,fps:60},N3["303"]={width:1920,height:1080,bitrate:5E6,fps:60},N3["302"]={width:1280,height:720,bitrate:25E5,
fps:60},N3["299"]={width:1920,height:1080,bitrate:75E5,fps:60},N3["298"]={width:1280,height:720,bitrate:35E5,fps:60},N3["571"]={width:7680,height:4320,bitrate:3E7,fps:60},N3["401"]={width:3840,height:2160,bitrate:15E6,fps:60},N3["400"]={width:2560,height:1440,bitrate:75E5,fps:60},N3["399"]={width:1920,height:1080,bitrate:2E6,fps:60},N3["398"]={width:1280,height:720,bitrate:1E6,fps:60},N3["313"]={width:3840,height:2160,bitrate:8E6,fps:30},N3["271"]={width:2560,height:1440,bitrate:4E6,fps:30},N3["248"]=
{width:1920,height:1080,bitrate:2E6,fps:30},N3["247"]={width:1280,height:720,bitrate:15E5,fps:30},N3["137"]={width:1920,height:1080,bitrate:4E6,fps:30},N3["136"]={width:1280,height:720,bitrate:3E6,fps:30},N3["385"]={width:1920,height:1080,bitrate:6503313,fps:60},N3["376"]={width:1280,height:720,bitrate:5706960,fps:60},N3["384"]={width:1280,height:720,bitrate:3660979,fps:60},N3["225"]={width:1280,height:720,bitrate:5805E3,fps:30},N3["224"]={width:1280,height:720,bitrate:453E4,fps:30},N3["145"]={width:1280,
height:720,bitrate:2682052,fps:30},N3);var vY,B1a=[["337","336","335"],["702","701","700"],["315","308","303","302"],["299","298"],["571","401","400","399","398"],["313","271","248","247"],["137","136"]],C1a=[["411","410","409"],["360","358","357","274"],["385","376","384"],["225","224","145"]],D1a=["412","359"],E1a=[["140"],["251"],["380"],["328"]],ocb="781 780 779 777 776 775 244 243 242".split(" "),O3={},y1a=(O3["398"]=["397","396","395","394"],O3["247"]=["244","243","242"],O3["136"]=["135","134","133","160"],O3["141"]=["140"],O3["251"]=
["250"],O3),P3={},z1a=(P3["274"]=["317","273","318","280","279"],P3["145"]=["144","222","223","143","142"],P3["141"]=["149"],P3["140"]=["149"],P3["380"]=["381"],P3["328"]=["329"],P3),Q3={},w1a=(Q3["133"]=240,Q3["134"]=360,Q3["135"]=480,Q3["136"]=720,Q3["137"]=1080,Q3["242"]=240,Q3["243"]=360,Q3["244"]=480,Q3["247"]=720,Q3["248"]=1080,Q3["298"]=720,Q3["299"]=1080,Q3["302"]=720,Q3["303"]=1080,Q3["395"]=240,Q3["396"]=360,Q3["397"]=480,Q3["398"]=720,Q3["399"]=1080,Q3);var xY=[],fcb=!1;g.u0=Ud(;g.w(yY,g.I);yY.prototype.K=
yY.prototype.G=
yY.prototype.xa=function(){this.j=null;g.I.prototype.xa.call(this)};g.w(g.zY,SL);g.k=g.zY.prototype;g.k.isView=function(){return!0};
g.k.dR=
g.k.Ev=function(){return FL(this.mediaElement.Ev(),this.start,this.end)};
g.k.Gh=function(){return FL(this.mediaElement.Gh(),this.start,this.end)};
g.k.wD=
g.k.getCurrentTime=
g.k.setCurrentTime=
g.k.getDuration=
g.k.play=
g.k.uc=
g.k.addEventListener=function(a,b){this.mediaElement.addEventListener(a,b)};
g.k.removeEventListener=function(a,b){this.mediaElement.removeEventListener(a,b)};
g.k.wG=function(){return this.mediaElement.wG()};
g.k.vy=function(a){this.mediaElement.vy(a)};
g.k.Bq=function(){return this.mediaElement.Bq()};
g.k.playVideo=function(){return this.mediaElement.playVideo()};
g.k.qN=function(){this.mediaElement.qN()};
g.k.mN=function(){this.mediaElement.mN()};
g.k.Iu=function(){return this.mediaElement.Iu()};
g.k.Jb=function(){return this.mediaElement.Jb()};
g.k.Ff=function(){return this.mediaElement.Ff()};
g.k.yG=function(a){this.mediaElement.yG(a)};
g.k.cK=function(){this.mediaElement.cK()};
g.k.getPlaybackRate=function(){return this.mediaElement.getPlaybackRate()};
g.k.setPlaybackRate=function(a){return this.mediaElement.setPlaybackRate(a)};
g.k.Ns=function(){return this.mediaElement.Ns()};
g.k.setLoop=function(a){this.mediaElement.setLoop(a)};
g.k.canPlayType=function(a,b){return this.mediaElement.canPlayType(a,b)};
g.k.isPaused=function(){return this.mediaElement.isPaused()};
g.k.Tf=function(){return this.mediaElement.Tf()};
g.k.Mh=function(){return this.mediaElement.Mh()};
g.k.SH=function(){return this.mediaElement.SH()};
g.k.ZA=function(a){this.mediaElement.ZA(a)};
g.k.xG=function(){return this.mediaElement.xG()};
g.k.load=function(){this.mediaElement.load()};
g.k.pause=function(){this.mediaElement.pause()};
g.k.zk=function(){return this.mediaElement.zk()};
g.k.TH=function(){return this.mediaElement.TH()};
g.k.Wg=function(){return this.mediaElement.Wg()};
g.k.tf=function(){return this.mediaElement.tf()};
g.k.getVideoPlaybackQuality=function(){return this.mediaElement.getVideoPlaybackQuality()};
g.k.Lh=function(){return this.mediaElement.Lh()};
g.k.Xt=function(){return this.mediaElement.Xt()};
g.k.togglePictureInPicture=function(){this.mediaElement.togglePictureInPicture()};
g.k.Ps=function(){return this.mediaElement.Ps()};
g.k.getSize=function(){return this.mediaElement.getSize()};
g.k.setSize=function(a){this.mediaElement.setSize(a)};
g.k.getVolume=function(){return this.mediaElement.getVolume()};
g.k.setVolume=function(a){this.mediaElement.setVolume(a)};
g.k.setAttribute=function(a,b){this.mediaElement.setAttribute(a,b)};
g.k.removeAttribute=function(a){this.mediaElement.removeAttribute(a)};
g.k.hasAttribute=function(a){return this.mediaElement.hasAttribute(a)};
g.k.wC=ca(30);g.k.NF=ca(32);g.k.OF=ca(34);g.k.Hy=ca(36);g.k.VC=function(){return this.mediaElement.VC()};
g.k.Xr=function(a){this.mediaElement.Xr(a)};
g.k.yD=function(a){return this.mediaElement.yD(a)};
g.k.NO=function(){return this.mediaElement.NO()};
g.k.stopVideo=function(){this.mediaElement.stopVideo()};
g.k.uN=function(a){this.mediaElement.uN(a)};
g.k.audioTracks=function(){return this.mediaElement.audioTracks()};
g.k.sR=function(a){this.mediaElement.sR(a)};g.w(M1a,g.I);g.k=M1a.prototype;g.k.getStatus=function(){return this.status};
g.k.Pu=
g.k.Px=
g.k.bZ=
g.k.Fg=
g.k.kt=
g.k.xa=
g.k.dU=function(a){g.mH(a,128)&&this.Fg("player-error-event")};g.w(DY,g.I);DY.prototype.clearQueue=
DY.prototype.Uv=function(){return!this.j};
DY.prototype.kt=
DY.prototype.xa=function(){EY(this);g.I.prototype.xa.call(this)};g.w(f2a,g.uG);g.k=f2a.prototype;g.k.getVisibilityState=
g.k.zm=function(a){this.fullscreen!==a&&(this.fullscreen=a,this.og())};
g.k.setMinimized=function(a){this.B!==a&&(this.B=a,this.og())};
g.k.setInline=function(a){this.inline!==a&&(this.inline=a,this.og())};
g.k.cB=
g.k.Lh=function(){return this.j};
g.k.isFullscreen=
g.k.ez=function(){return this.fullscreen};
g.k.hg=function(){return this.B};
g.k.isInline=function(){return this.inline};
g.k.isBackground=function(){return b2a()};
g.k.jt=function(){return this.pictureInPicture};
g.k.Ez=function(){return!1};
g.k.og=
g.k.xa=g.w(IY,g.I);IY.prototype.Ih=function(){return this.yc||0};
IY.prototype.wv=
IY.prototype.yf=
IY.prototype.xa=function(){this.yf()};
g.w(j2a,g.I);g.k=j2a.prototype;g.k.Ih=function(){return this.yc};
g.k.wv=function(){return this.B};
g.k.getType=function(){return this.type};
g.k.getVideoData=function(){return this.videoData};
g.k.Hh=function(){return this.videoData.clientPlaybackNonce};
g.k.CF=g.w(g.MY,g.I);g.k=g.MY.prototype;
g.k.onCueRangeEnter=
g.k.onCueRangeExit=
g.k.seekTo=
g.k.xa=
g.k.CR=
g.k.Pk=
g.k.cI=
g.k.bz=
g.k.uF=
g.k.Yt=
g.k.gR=
g.k.XF=ca(43);
g.k.nQ=
g.k.kD=ca(45);g.k.Eq=function(){return this.qa.Eq()};
g.k.fE=function(a){this.qa.va("timelineerror",{e:a})};
g.k.CD=
g.k.eI=
g.k.Ss=
g.k.Hv=
g.k.Lt=
g.k.LN=function(){return this.ra};
g.k.It=
g.k.pN=
g.k.MR=
var r2a=0;g.w(M2a,g.I);g.k=M2a.prototype;g.k.addPlayerResponseForAssociation=
g.k.finishSegmentByCpn=
g.k.Md=
g.k.Fz=
g.k.seekTo=
g.k.onCueRangeEnter=
g.k.LN=function(){return this.ma};
g.k.xa=g.w(b3a,g.I);g.k=b3a.prototype;g.k.onCueRangeEnter=
g.k.onQueuedVideoLoaded=
g.k.seekTo=
g.k.nk=
g.k.isManifestless=
g.k.xa=
g.k.oe=
var c3a=0;var p3a="MWEB TVHTML5 TVHTML5_AUDIO TVHTML5_CAST TVHTML5_KIDS TVHTML5_FOR_KIDS TVHTML5_SIMPLY TVHTML5_SIMPLY_EMBEDDED_PLAYER TVHTML5_UNPLUGGED TVHTML5_VR TV_UNPLUGGED_CAST WEB WEB_CREATOR WEB_EMBEDDED_PLAYER WEB_EXPERIMENTS WEB_GAMING WEB_HEROES WEB_KIDS WEB_LIVE_STREAMING WEB_MUSIC WEB_MUSIC_ANALYTICS WEB_MUSIC_EMBEDDED_PLAYER WEB_REMIX WEB_UNPLUGGED WEB_UNPLUGGED_ONBOARDING WEB_UNPLUGGED_OPS WEB_UNPLUGGED_PUBLIC".split(" ");g.w(kZ,g.I);g.k=kZ.prototype;g.k.get=
g.k.set=
g.k.remove=
g.k.yf=
g.k.xa=g.w(mZ,g.I);mZ.prototype.KH=
mZ.prototype.xa=g.w(t3a,g.I);t3a.prototype.xa=g.olb=Ud(;var R3;R3={};g.nZ=(R3.STOP_EVENT_PROPAGATION="html5-stop-propagation",R3.IV_DRAWER_ENABLED="ytp-iv-drawer-enabled",R3.IV_DRAWER_OPEN="ytp-iv-drawer-open",R3.MAIN_VIDEO="html5-main-video",R3.VIDEO_CONTAINER="html5-video-container",R3.VIDEO_CONTAINER_TRANSITIONING="html5-video-container-transitioning",R3.HOUSE_BRAND="house-brand",R3);g.w(x3a,g.V);g.k=x3a.prototype;g.k.Xr=
g.k.Fj=
g.k.kN=
g.k.qK=
g.k.resize=
g.k.Ts=function(a,b){this.updateVideoData(b)};
g.k.updateVideoData=
g.k.setGlobalCrop=
g.k.setCenterCrop=function(a){this.wV=a;this.resize()};
g.k.zm=function(){};
g.k.getPlayerSize=
g.k.Yj=
g.k.getVideoAspectRatio=
g.k.getVideoContentRect=
g.k.eB=function(a){this.KQ=a;this.resize()};
g.k.UD=function(){return this.QJ};
g.k.onMutedAutoplayChange=function(){oZ(this)};
g.k.setInternalSize=
g.k.xa=g.k=D3a.prototype;g.k.click=
g.k.createClientVe=
g.k.createServerVe=
g.k.destroyVe=
g.k.LV=
g.k.setTrackingParams=
g.k.hasVe=function(a){return this.elements.has(a)};F3a.prototype.setPlaybackRate=
F3a.prototype.getPlaybackRate=function(){return this.playbackRate};tZ.prototype.seek=
tZ.prototype.Tf=function(){return this.G};
tZ.prototype.zR=function(a){this.C=a};
var M3a=2/24;var R3a=0;g.k=DZ.prototype;g.k.Dw=
g.k.Mt=
g.k.Ju=
g.k.ir=
g.k.Aw=
g.k.Vr=
g.k.now=
var CZ;g.w(GZ,DZ);g.k=GZ.prototype;g.k.Vr=
g.k.Ks=
g.k.AI=
g.k.HP=
g.k.Ju=
g.k.jJ=
g.k.Fn=
g.k.KW=
g.k.Rv=
g.k.XH=function(){return this.fb};
g.k.YQ=
g.k.IH=
g.k.bO=
g.k.LW=function(){return this.N};IZ.prototype.feed=
IZ.prototype.qf=
IZ.prototype.dispose=function(){this.j=new BO};g.k=JZ.prototype;g.k.KN=function(){return 0};
g.k.MH=function(){return null};
g.k.xW=function(){return null};
g.k.ot=function(){return 1<=this.state};
g.k.isComplete=function(){return 3<=this.state};
g.k.hm=function(){return 5===this.state};
g.k.onStateChange=function(){};
g.k.Dc=
g.k.hA=
g.k.isDisposed=
g.k.Ld=
g.k.dispose=
g.k.fO=function(){return 0};
g.k.gt=function(){return!1};g.k=e4a.prototype;g.k.tA=
g.k.onError=function(){this.C=!0;this.onDone()};
g.k.onDone=function(){this.isDisposed||(this.G=!0,this.Hb.ir())};
g.k.Jv=
g.k.getResponseHeader=
g.k.jD=function(){return+this.getResponseHeader("content-length")};
g.k.jn=function(){return this.B};
g.k.Ow=function(){return 200<=this.status&&300>this.status&&!!this.B};
g.k.Rk=
g.k.ax=function(){var a=this.j;this.j=new BO;return a};
g.k.LJ=function(){return this.j};
g.k.abort=function(){this.isDisposed=!0;this.xhr.abort()};
g.k.mB=function(){return!0};
g.k.XJ=function(){return this.C};
g.k.tf=function(){return""};g.k=g4a.prototype;
g.k.sF=
g.k.getResponseHeader=
g.k.abort=function(){};
g.k.Jv=function(){return!0};
g.k.jD=function(){return this.range.length};
g.k.jn=function(){return this.loaded};
g.k.Ow=function(){return!!this.loaded};
g.k.Rk=function(){return!!this.B.getLength()};
g.k.ax=
g.k.LJ=function(){return this.B};
g.k.mB=function(){return!0};
g.k.XJ=function(){return!!this.error};
g.k.tf=function(){return this.error};g.k=i4a.prototype;g.k.start=
g.k.onDone=
g.k.getResponseHeader=
g.k.Jv=function(){return!!this.G};
g.k.jn=function(){return this.B};
g.k.jD=function(){return+this.getResponseHeader("content-length")};
g.k.Ow=
g.k.Rk=function(){return!!this.j.getLength()};
g.k.ax=
g.k.LJ=
g.k.isDisposed=function(){return this.K};
g.k.abort=
g.k.mB=function(){return!0};
g.k.XJ=function(){return this.N};
g.k.tf=function(){return this.errorMessage};g.k=j4a.prototype;g.k.onDone=
g.k.tA=
g.k.Wf=
g.k.Jv=
g.k.getResponseHeader=
g.k.jD=
g.k.jn=function(){return this.B};
g.k.Ow=
g.k.Rk=
g.k.ax=
g.k.LJ=
g.k.abort=
g.k.mB=function(){return!1};
g.k.XJ=function(){return!1};
g.k.tf=function(){return""};g.w(LZ,g.I);g.k=LZ.prototype;g.k.Eba=
g.k.qB=
g.k.canRetry=
g.k.Wg=function(){return this.lastError};
g.k.Dv=function(){return this.j};
g.k.dispose=function(){this.B.dispose();g.I.prototype.dispose.call(this)};g.w(vZ,JZ);g.k=vZ.prototype;g.k.Dq=function(){return this.timing.requestNumber};
g.k.Oe=function(){return this.Zd.Oe()};
g.k.yq=
g.k.sW=function(){return Y3a(this.timing)};
g.k.tf=function(){return this.xhr.tf()||""};
g.k.Rv=
g.k.Mt=
g.k.Dw=
g.k.ir=
g.k.uO=
g.k.canRetry=
g.k.onStateChange=
g.k.qB=function(a){this.Gd.qB(a)};
g.k.fX=
g.k.Dv=function(){return this.Gd.Dv()};
g.k.dispose=
g.k.uy=
g.k.gt=
g.k.yk=
g.k.Zk=
g.k.LE=
g.k.Yl=
g.k.yA=
g.k.Aw=
g.k.jn=function(){return this.xhr.jn()};
g.k.KN=function(){return this.Jy};
g.k.Ks=
g.k.AI=
g.k.fO=
g.k.MH=function(){this.xhr&&(this.Cp=Number(this.xhr.getResponseHeader("X-Head-Seqnum")));return this.Cp};
g.k.xW=
g.k.Wg=function(){return this.Gd.Wg()};
g.k.F8=g.w(QZ,DZ);g.k=QZ.prototype;g.k.Ju=
g.k.HP=
g.k.jJ=
g.k.EE=
g.k.xE=
g.k.LW=function(){return this.N};
g.k.IH=
g.k.bO=
g.k.Fn=function(){return 0<this.B};
g.k.Vr=
g.k.YQ=function(){};
g.k.XH=function(){return NaN};
g.k.KW=g.w(A4a,QU);g.k=A4a.prototype;g.k.qJ=
g.k.DE=
g.k.zE=
g.k.CE=function(a){a=eUa(new NO(a));this.Hb.CE(a)};
g.k.BE=function(a){a=XO(a,mUa);this.Hb.BE(a)};
g.k.WP=
g.k.Lp=function(a){a=BUa(new NO(a));this.Hb.Lp(a)};
g.k.kQ=function(a){a=uUa(new NO(a));this.Hb.kQ(a)};
g.k.AE=function(a){a=xUa(new NO(a));this.Hb.AE(a)};
g.k.mQ=function(a){a={redirectUrl:TO(new NO(a),1)};this.Hb.mQ(a)};
g.k.cQ=
g.k.Kp=
g.k.uA=function(a){this.Hb.uA(a)};
g.k.eQ=
g.k.EE=function(a){a={zM:QO(new NO(a),1)};this.Hb.EE(a)};
g.k.xE=
g.k.sA=function(a){this.Hb.sA(a)};
g.k.qm=g.w(RZ,g.I);g.k=RZ.prototype;g.k.Mt=
g.k.Dw=function(){};
g.k.ir=
g.k.uO=
g.k.Yl=
g.k.yA=function(a,b){this.Pba.yA(a,b)};
g.k.Aw=
g.k.Lp=function(a){this.Hb.Lp(a)};
g.k.kQ=
g.k.rY=
g.k.AE=function(a){this.Hb.AE(a)};
g.k.mQ=
g.k.EE=function(a){this.Ie instanceof QZ&&this.Ie.EE(a)};
g.k.xE=
g.k.pQ=
g.k.WP=
g.k.CE=
g.k.sA=function(a){this.Hb.sA(a)};
g.k.zE=function(a,b,c){this.Hb.zE(a,b,c)};
g.k.DE=function(a){this.policy.Of&&this.Hb.DE(a)};
g.k.BE=
g.k.qm=
g.k.canRetry=
g.k.dispose=
g.k.Dc=
g.k.Tv=function(){return this.info.Tv()};
g.k.wA=
g.k.Kp=function(a,b){this.jg.Kp(a,b)};
g.k.uA=function(a){this.requestIdentifier=a};
g.k.yk=function(a){return this.jg.yk(a)};
g.k.pn=function(a){return this.jg.pn(a)};
g.k.Zk=function(a){return this.jg.Zk(a)};
g.k.xq=function(){return this.jg.xq()};
g.k.Ks=function(){return 1};
g.k.Dq=function(){return this.Ie.requestNumber};
g.k.cO=function(){return this.requestIdentifier};
g.k.qW=function(){return this.clipId};
g.k.Oe=function(){return this.Zd.Oe()};
g.k.JY=function(){this.uy()};
g.k.uy=
g.k.isComplete=function(){return 3<=this.state};
g.k.QX=function(){return 3===this.state};
g.k.hm=function(){return 5===this.state};
g.k.rX=function(){return this.isComplete()};
g.k.ot=function(){return 1<=this.state};
g.k.gt=function(){return!1};
g.k.Dv=function(){return 0};
g.k.pW=
g.k.fX=function(){};
g.k.MW=function(){return h7a(this.info)};
g.k.Wg=function(){return this.Gd.Wg()};
g.k.yq=D4a.prototype.tick=g.w(O4a,g.uG);g.k=O4a.prototype;
g.k.gQ=
g.k.fQ=
g.k.Hv=function(){this.K&&this.K.Hv()};
g.k.va=function(a,b){this.Aa.va(a,b)};
g.k.Dr=g.w(YZ,g.I);YZ.prototype.uo=X4a.prototype.rJ=
X4a.prototype.uo=o5a.prototype.WN=
o5a.prototype.Vp=function(a){this.timestampOffset=a};y5a.prototype.dispose=function(){this.ra=!0};
y5a.prototype.isDisposed=function(){return this.ra};
g.w(k_,Error);var Xbb=new Uint8Array([0,0,0,38,112,115,115,104,0,0,0,0,237,239,139,169,121,214,74,206,163,200,39,220,213,29,33,237,0,0,0,6,72,227,220,149,155,6]);n_.prototype.skip=function(a){this.offset+=a};
n_.prototype.Wl=function(){return this.offset};g.k=R5a.prototype;g.k.JW=function(){return this.B};
g.k.Rn=function(){return this.B.length?this.B[this.B.length-1]:null};
g.k.Jk=
g.k.Vt=
g.k.pn=
g.k.zi=function(){return!!this.K.info.audio};
g.k.getDuration=function(){return this.K.index.Os()};g.w(uZ,JZ);g.k=uZ.prototype;g.k.onStateChange=
g.k.yq=
g.k.sW=function(){return 0};
g.k.Rv=function(){return!0};
g.k.yk=function(){return this.jg.yk(this.formatId)};
g.k.LE=function(){return[]};
g.k.Zk=
g.k.Wg=function(){return this.lastError};
g.k.Dv=function(){return 0};g.k=j6a.prototype;g.k.Rn=function(){return this.D.Rn()};
g.k.Vt=
g.k.getDuration=
g.k.Jk=function(){wZ(this);this.D.Jk()};
g.k.XN=function(){return this.D};
g.k.isRequestPending=
g.k.Vp=function(a){var b;null==(b=this.Z)||b.Vp(a)};g.w(E_,g.I);E_.prototype.TO=
E_.prototype.Ea=
E_.prototype.Ss=
E_.prototype.xa=function(){g.I.prototype.xa.call(this)};
var H6a=2/24;g.w(J_,g.I);J_.prototype.vE=
J_.prototype.s_=
J_.prototype.uo=var d7a={WEB:1,MWEB:2,TVHTML5:7,WEB_UNPLUGGED:41,WEB_EMBEDDED_PLAYER:56,TVHTML5_AUDIO:57,TV_UNPLUGGED_CAST:58,TVHTML5_KIDS:59,WEB_MUSIC:61,WEB_CREATOR:62,TVHTML5_UNPLUGGED:65,WEB_REMIX:67,TVHTML5_SIMPLY:75,WEB_KIDS:76,TVHTML5_SIMPLY_EMBEDDED_PLAYER:85,WEB_MUSIC_EMBEDDED_PLAYER:86,WEB_MUSIC_ANALYTICS:31,WEB_GAMING:32,WEB_EXPERIMENTS:42,WEB_HEROES:60,WEB_UNPLUGGED_ONBOARDING:69,WEB_UNPLUGGED_OPS:70,WEB_UNPLUGGED_PUBLIC:71,TVHTML5_VR:72,TVHTML5_FOR_KIDS:93};K_.prototype.Tv=function(){return 1===this.requestType};
K_.prototype.ON=g.w(L_,g.I);L_.prototype.encrypt=
L_.prototype.decrypt=n7a.prototype.decrypt=var x7a=!!Uint8Array.prototype.copyWithin,O_=[],o7a=[],r7a=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q_=[],P_=[],R_=[],p7a=[];g.w(z7a,QU);g.k=z7a.prototype;g.k.dQ=function(){this.od.dQ()};
g.k.qJ=
g.k.sA=
g.k.aQ=
g.k.Kt=function(a){this.L("html5_enable_lawnmower_messaging")&&(a=XO(a,TTa),this.od.Kt(a))};
g.k.eQ=
g.k.cQ=
g.k.Kp=
g.k.uA=function(a){this.od.uA(a)};
g.k.jQ=
g.k.Lp=
g.k.Qd=function(a){this.od.Qd(a)};
g.k.Mi=function(a){return this.od.Mi(a)};
g.k.L=function(a){return this.od.L(a)};g.w(V_,g.I);g.k=V_.prototype;g.k.qW=function(){return""};
g.k.xq=
g.k.Zk=
g.k.yk=function(a,b){var c;return(null==(c=M_(this,b))?void 0:c.yk(a))||[]};
g.k.pn=
g.k.Dc=function(a){this.state=a;this.notifySubscribers()};
g.k.Tv=function(){return!1};
g.k.Qd=function(a){this.qa.Qd(a)};
g.k.Mi=function(a){return this.qa.Mi(a)};
g.k.yA=function(a,b){this.tm.yA(a,b)};
g.k.UP=
g.k.jQ=
g.k.wA=
g.k.aQ=function(a){this.Oz=a};
g.k.Kt=function(a){this.X.Kt(a)};
g.k.Lp=
g.k.dQ=
g.k.va=function(a,b,c){this.qa.va(a,b,void 0===c?!1:c)};
g.k.Kp=
g.k.uA=
g.k.fetch=
g.k.Dw=function(){this.Qd("orh_r")};
g.k.Mt=
g.k.ir=
g.k.pW=function(){};
g.k.JY=
g.k.U=function(){return this.X};
g.k.L=function(a){return this.X.L(a)};
g.k.G8=
g.k.v5=
g.k.sO=
g.k.sj=
g.k.isComplete=
g.k.rX=
g.k.QX=function(){return!1};
g.k.hm=function(){return 5===this.state};
g.k.notifySubscribers=
g.k.MW=
g.k.xa=
g.k.Yl=
g.k.Dq=function(){return this.Ie.requestNumber};
g.k.cO=function(a){return this.f_.get(a)};g.w(R7a,g.I);g.k=R7a.prototype;g.k.iK=
g.k.SO=
g.k.Ss=
g.k.Lp=
g.k.AE=
g.k.pQ=
g.k.CE=
g.k.sA=
g.k.qm=function(a){this.Aa.qm(a)};
g.k.zE=
g.k.DE=function(){};
g.k.BE=
g.k.me=
g.k.ON=
g.k.hI=
g.k.xa=e8a.prototype.qf=
e8a.prototype.clear=g.w(g.Y_,g.I);g.k=g.Y_.prototype;g.k.initialize=
g.k.resume=
g.k.Ty=
g.k.setAudioTrack=
g.k.setPlaybackRate=
g.k.vE=
g.k.hI=
g.k.VH=function(){return this.qa.VH()};
g.k.qm=function(a){this.qa.qm(a)};
g.k.lz=function(){return this.qa.lz()};
g.k.Ul=function(){return this.qa.Ul()};
g.k.rQ=function(a){this.qa.rQ(a)};
g.k.bba=
g.k.qf=
g.k.nH=function(a){this.qa.nH(a)};
g.k.oH=function(a){this.qa.oH(a)};
g.k.PE=
g.k.g4=
g.k.l9=
g.k.zw=function(a){this.qa.zw(a)};
g.k.gQ=
g.k.fQ=
g.k.rJ=function(a){this.j.rJ(a)};
g.k.zD=ca(20);g.k.uK=
g.k.Yi=function(){return this.lc};
g.k.zI=
g.k.seek=
g.k.SO=
g.k.iK=function(a){this.ma.iK(a)};
g.k.getCurrentTime=function(){return this.currentTime};
g.k.NN=function(){return this.audioTrack.j.info};
g.k.QN=function(){return this.videoTrack.j.info};
g.k.MN=function(){return this.audioTrack.j.info.tb};
g.k.PN=
g.k.xa=
g.k.handleError=
g.k.uc=
g.k.Jk=
g.k.IN=
g.k.va=
g.k.me=function(){return this.qa.me()};
g.k.lq=
g.k.Qc=function(){return this.timestampOffset};
g.k.Tf=function(){return this.B.Tf()};
g.k.Hv=function(){this.G.Hv()};
g.k.uo=
g.k.uF=
g.k.Dr=
g.k.EW=function(){return this.manifest};
g.k.isOffline=
g.k.eF=function(a,b){this.qa.eF(a,b)};
g.k.cR=
g.k.UI=
g.k.zR=
g.k.SM=function(){this.qa.SM()};
g.k.TI=
g.k.VQ=
g.k.Sw=function(){this.qa.Sw()};
g.k.ao=function(a){this.qa.ao(a)};
g.k.Uw=function(a){this.qa.Uw(a)};g.k=g.d0.prototype;g.k.bz=function(a,b,c,d,e,f){return this.hd.bz(a,b,c,d,e,f)};
g.k.cI=
g.k.eI=function(a){this.hd.eI(a)};
g.k.Ss=
g.k.Hv=function(){this.hd.Hv()};
g.k.uF=
g.k.Yt=
g.k.gR=function(){this.hd.gR()};
g.k.kD=ca(44);g.k.Pk=
g.k.XF=ca(42);g.k.nQ=
g.k.CR=function(a){this.hd.CR(a)};
g.k.It=function(a){return this.hd.It(a)};
g.k.pN=function(a){return this.hd.pN(a)};g.w(e0,g.uG);g.w(f0,e0);f0.prototype.K=
f0.prototype.G=
f0.prototype.xa=g.w(g0,e0);
g0.prototype.D=
g0.prototype.xa=var S3={},Z8a=(S3.DRM_TRACK_TYPE_AUDIO="AUDIO",S3.DRM_TRACK_TYPE_SD="SD",S3.DRM_TRACK_TYPE_HD="HD",S3.DRM_TRACK_TYPE_UHD1="UHD1",S3);g.w(V8a,g.I);g.w(a9a,g.uG);g.k=a9a.prototype;g.k.Jp=
g.k.error=
g.k.shouldRetry=
g.k.xa=
g.k.uc=
g.k.nh=
g.k.Oe=function(){return this.url};g.w(j0,g.I);g.k=j0.prototype;g.k.i4=
g.k.Jp=
g.k.iZ=
g.k.hZ=
g.k.gZ=function(){this.K&&this.K()};
g.k.update=
g.k.xa=g.w(k0,g.I);g.k=k0.prototype;g.k.vM=
g.k.setServerCertificate=
g.k.createSession=
g.k.m4=function(a){var b=x9a(this,a);b&&b.iZ(a)};
g.k.l4=function(a){var b=x9a(this,a);b&&b.hZ(a)};
g.k.j4=
g.k.getMetrics=
g.k.xa=g.k=l0.prototype;g.k.get=
g.k.remove=
g.k.yf=
g.k.set=
g.k.findIndex=g.w(A9a,g.uG);g.k=A9a.prototype;g.k.L9=
g.k.i$=
g.k.zw=
g.k.bV=
g.k.createSession=
g.k.dZ=
g.k.eZ=
g.k.pZ=
g.k.Jp=
g.k.oJ=function(a,b){this.isDisposed()||this.oa("ctmp",a,b)};
g.k.VY=
g.k.sJ=
g.k.zv=function(){return this.Z};
g.k.oS=
g.k.xa=
g.k.uc=
g.k.nh=
g.k.mj=g.w(H9a,g.I);g.k=H9a.prototype;g.k.sH=function(){return!!this.bE};
g.k.CI=function(){return this.B};
g.k.handleError=
g.k.va=
g.k.oe=T9a.prototype.L=function(a){return this.X.L(a)};g.w(p0,g.I);p0.prototype.onError=
p0.prototype.send=
p0.prototype.xa=
var plb=/\bnet\b/;var l$a=/[?&]cpn=/;var q$a=Math.pow(10,8);g.w(g.s0,g.I);g.k=g.s0.prototype;g.k.v7=
g.k.pD=function(){return this.Na};
g.k.tD=function(){return{HA:this.HA,IA:this.IA}};
g.k.AF=function(a,b){this.HA=a;this.IA=b};
g.k.dF=
g.k.reportStats=
g.k.Sw=
g.k.Uw=function(a){this.ub=a};
g.k.y_=
g.k.FE=
g.k.rE=
g.k.Jt=ca(48);g.k.Xn=function(a){this.Ea=a};
g.k.onPlaybackRateChange=
g.k.Nn=ca(27);g.k.getPlayerState=
g.k.xa=
g.k.ZJ=
g.k.va=
g.k.cF=
g.k.Qw=
g.k.resume=
var T3={},qlb=(T3[5]="N",T3[-1]="N",T3[3]="B",T3[0]="EN",T3[2]="PA",T3[1]="PL",T3),q0=[];H$a.prototype.update=M$a.prototype.send=
M$a.prototype.B=
var U3={},S$a=(U3.LIVING_ROOM_APP_MODE_UNSPECIFIED=0,U3.LIVING_ROOM_APP_MODE_MAIN=1,U3.LIVING_ROOM_APP_MODE_KIDS=2,U3.LIVING_ROOM_APP_MODE_MUSIC=3,U3.LIVING_ROOM_APP_MODE_UNPLUGGED=4,U3.LIVING_ROOM_APP_MODE_GAMING=5,U3),V3={},R$a=(V3.EMBEDDED_PLAYER_MODE_UNKNOWN=0,V3.EMBEDDED_PLAYER_MODE_DEFAULT=1,V3.EMBEDDED_PLAYER_MODE_PFP=2,V3.EMBEDDED_PLAYER_MODE_PFL=3,V3),W3={},L$a=(W3[0]=0,W3[1]=1,W3[2]=2,W3[3]=3,W3);g.w(y0,g.I);g.k=y0.prototype;g.k.Wf=
g.k.xa=
g.k.uc=
g.k.vu=
g.k.Xi=eab.prototype.isEmpty=E0.prototype.L=function(a){return this.X.L(a)};
E0.prototype.getCurrentTime=
E0.prototype.Vi=
var gab={other:1,none:2,wifi:3,cellular:7,ethernet:30};g.w(g.F0,g.I);g.k=g.F0.prototype;g.k.Wf=
g.k.Xn=function(a){this.qoe&&this.qoe.Xn(a)};
g.k.oe=
g.k.FE=function(a){this.qoe&&this.qoe.FE(a)};
g.k.rE=function(a){this.qoe&&this.qoe.rE(a)};
g.k.onPlaybackRateChange=
g.k.Jt=ca(47);g.k.va=function(a,b,c){this.qoe&&this.qoe.va(a,b,c)};
g.k.cF=function(a,b,c){this.qoe&&this.qoe.cF(a,b,c)};
g.k.dF=
g.k.Sw=function(){this.qoe&&this.qoe.Sw()};
g.k.Uw=
g.k.Qw=
g.k.Nn=ca(26);g.k.pD=
g.k.uc=
g.k.tD=
g.k.AF=
g.k.Xi=
g.k.vu=function(){this.j&&this.j.vu()};
g.k.getVideoData=function(){return this.provider.videoData};
g.k.resume=g.w(G0,g.I);G0.prototype.eN=
G0.prototype.vc=g.w(H0,g.I);g.k=H0.prototype;g.k.sf=
g.k.Zn=
g.k.XC=
g.k.Ul=
g.k.reset=
g.k.zf=
g.k.UF=
g.k.wH=
g.k.zH=
g.k.Go=
g.k.JX=
g.k.xa=
g.AY.uI(H0,{sf:"crmacr",wH:"crmncr",zH:"crmxcr",JX:"crmis",Zn:"crmrcr"});g.w(K0,g.uG);K0.prototype.Qq=function(){return this.N};
K0.prototype.Aq=g.w(P0,g.I);P0.prototype.qf=
P0.prototype.oe=
P0.prototype.uc=
N0.prototype.reset=
N0.prototype.test=
N0.prototype.uc=g.w(Kab,g.I);g.k=Kab.prototype;g.k.setMediaElement=
g.k.getCurrentTime=
g.k.Vi=
g.k.Aq=
g.k.isAtLiveHead=
g.k.Qq=
g.k.seekTo=
g.k.Me=
g.k.Md=
g.k.BN=
g.k.zI=
g.k.xa=
g.k.uc=
g.k.qQ=function(a){this.timestampOffset=a};
g.k.getStreamTimeOffset=
g.k.Qc=function(){return this.timestampOffset};
g.k.df=
g.k.Bv=
g.k.yw=
g.k.L=U0.prototype.ot=function(){return this.started};
U0.prototype.start=function(){this.started=!0};
U0.prototype.reset=function(){this.j=this.started=!1};var ebb=!1;g.w(g.Y0,g.uG);g.k=g.Y0.prototype;g.k.xa=
g.k.Qw=
g.k.MN=function(){var a;return null==(a=this.Aa)?void 0:a.MN()};
g.k.PN=function(){var a;return null==(a=this.Aa)?void 0:a.PN()};
g.k.QN=function(){var a;return null==(a=this.Aa)?void 0:a.QN()};
g.k.NN=function(){var a;return null==(a=this.Aa)?void 0:a.NN()};
g.k.xj=function(){return this.videoData.xj()};
g.k.QH=function(){return this.Uz};
g.k.eN=
g.k.getVideoData=function(){return this.videoData};
g.k.U=function(){return this.X};
g.k.vc=
g.k.vn=function(){return this.visibility};
g.k.nf=function(){return this.mediaElement};
g.k.OM=
g.k.uK=
g.k.jz=ca(17);g.k.isFullscreen=function(){return this.visibility.isFullscreen()};
g.k.isBackground=function(){return this.visibility.isBackground()};
g.k.sendAbandonmentPing=
g.k.Ao=
g.k.vg=
g.k.Gg=
g.k.zp=
g.k.Qq=function(){return this.fd.Qq()};
g.k.isPlaying=function(){return this.playerState.isPlaying()};
g.k.TD=
g.k.getPlayerState=function(){return this.playerState};
g.k.getPlayerType=function(){return this.playerType};
g.k.getPreferredQuality=
g.k.rD=ca(21);g.k.isGapless=function(){return!!this.mediaElement&&this.mediaElement.isView()};
g.k.setMediaElement=
g.k.Fj=
g.k.playVideo=
g.k.ao=
g.k.Js=function(){if(!this.Zf)return[];var a=V9a(this.Xk,this.Zf,this.zv());return this.Zf.j.Js(a)};
g.k.iD=
g.k.zv=
g.k.KH=
g.k.getUserPlaybackQualityPreference=
g.k.hasSupportedAudio51Tracks=function(){return this.videoData.hasSupportedAudio51Tracks()};
g.k.setUserAudio51Preference=
g.k.getUserAudio51Preference=
g.k.setProximaLatencyPreference=
g.k.getProximaLatencyPreference=
g.k.isProximaLatencyEligible=function(){return this.videoData.isProximaLatencyEligible};
g.k.getAvailableAudioTracks=
g.k.getAudioTrack=
g.k.pE=
g.k.Ty=
g.k.Bq=function(){return this.Ta};
g.k.zw=
g.k.rQ=
g.k.yw=
g.k.tJ=function(a){this.oa("localmediachange",a)};
g.k.uo=
g.k.CI=function(){return this.Kk.CI()};
g.k.handleError=function(a){this.Kk.handleError(a)};
g.k.sH=function(){return this.Kk.sH()};
g.k.UI=
g.k.pauseVideo=
g.k.stopVideo=
g.k.Yn=
g.k.seekTo=
g.k.getCurrentTime=function(){return this.fd.getCurrentTime()};
g.k.Vi=function(){return this.fd.Vi()};
g.k.Aq=function(){return this.fd.Aq()};
g.k.getPlaylistSequenceForTime=
g.k.iz=
g.k.df=
g.k.getDuration=
g.k.xD=
g.k.eF=
g.k.Bv=
g.k.uc=
g.k.addCueRange=
g.k.removeCueRange=
g.k.XC=function(a,b){return this.ai.XC(a,b)};
g.k.Nu=function(a,b){this.ai.sf(a,b)};
g.k.gF=function(a){this.ai.Zn(a)};
g.k.Ul=
g.k.Lh=function(){return this.visibility.Lh()};
g.k.Xt=function(){this.mediaElement&&this.mediaElement.Xt()};
g.k.Jaa=function(){a1(this)};
g.k.togglePictureInPicture=function(){this.mediaElement&&this.mediaElement.togglePictureInPicture()};
g.k.sQ=
g.k.g9=
g.k.h9=
g.k.CD=
g.k.Mc=
g.k.j7=
g.k.pD=function(){return this.vc().pD()};
g.k.IN=
g.k.Cc=
g.k.tE=
g.k.lQ=function(){this.Sb.tick("qoes")};
g.k.BN=function(){this.fd.BN()};
g.k.sJ=
g.k.U9=
g.k.wE=function(a){this.oa("heartbeatparams",a)};
g.k.Jp=
g.k.W9=
g.k.ql=
g.k.pR=
g.k.Me=
g.k.Md=function(){return this.fd.Md()};
g.k.Qc=function(){return this.fd?this.fd.Qc():0};
g.k.getStreamTimeOffset=function(){return this.fd?this.fd.getStreamTimeOffset():0};
g.k.Eq=
g.k.setPlaybackRate=
g.k.getPlaybackRate=function(){return this.playbackRate};
g.k.getPlaybackQuality=
g.k.isHdr=
g.k.vu=function(){this.vc().vu()};
g.k.sendVideoStatsEngageEvent=
g.k.Xi=
g.k.isAtLiveHead=
g.k.Av=
g.k.Nn=ca(25);g.k.Jt=ca(46);g.k.Xn=function(a){this.vc().Xn(a)};
g.k.Sw=function(){this.vc().Sw()};
g.k.Uw=function(a){this.vc().Uw(a)};
g.k.dF=function(a){this.vc().dF(a)};
g.k.BD=
g.k.setLoop=
g.k.Ns=
g.k.qQ=
g.k.Qd=function(a){this.Sb.tick(a)};
g.k.Mi=function(a){return this.Sb.Mi(a)};
g.k.nu=function(a){this.Sb.nu(a)};
g.k.va=function(a,b,c){c=void 0===c?!1:c;this.vc().va(a,b,c)};
g.k.Rw=
g.k.oe=
g.k.cF=
g.k.nH=function(a){this.videoData.SV=!0;this.oe(new aL("sabr.fallback",a));n0(this,!0)};
g.k.oH=
g.k.getPlayerSize=function(){return this.HF.getPlayerSize()};
g.k.Yj=function(){return this.HF.Yj()};
g.k.wi=function(){return this.Sb};
g.k.Fq=function(){return this.Hd.Fq()};
g.k.getVolume=function(){return this.Hd.getVolume()};
g.k.PD=function(){return this.Hd.PD()};
g.k.isMuted=function(){return this.Hd.isMuted()};
g.k.Zy=function(){return this.Hd.Zy()};
g.k.nD=function(){return this.Hd.nD()};
g.k.dD=function(){return this.Hd.dD()};
g.k.L=function(a){return this.X.L(a)};
g.k.uM=
g.k.Dr=
g.k.Rc=function(){return this.X.Rc()};
g.k.VH=
g.k.me=function(){return this.videoData.videoId};
g.k.lz=function(){return this.Hd.Ew};
g.k.kt=function(){return this.Hd.kt()};
g.k.cR=
g.k.SM=function(){this.tB=0};
g.k.qm=function(a){this.Hd.qm(a)};
g.k.VQ=function(a,b){var c;null==(c=this.Aa)||c.VQ(a,b)};
g.k.GM=
g.k.Yi=function(){return this.lc};
g.k.AF=function(a,b){this.vc().AF(a,b)};
g.k.tD=function(){return this.vc().tD()};
g.k.gO=function(){return this.videoData.JU};
g.k.tK=function(a){this.videoData.JU=a};g.w(g.i1,g.I);g.i1.create=
g.k=g.i1.prototype;g.k.vn=function(){return this.visibility};
g.k.getVisibilityState=function(a,b,c,d,e,f){return this.visibility.getVisibilityState(a,b,c,d,e,f)};
g.k.hn=
g.k.Fj=
g.k.rd=function(){return this.wb};
g.k.NA=
g.k.Qy=
g.k.m9=
g.k.s$=
g.k.canPlayType=function(a){return eL(a)};
g.k.U=function(){return this.X};
g.k.getVideoData=function(){return this.wb.getVideoData()};
g.k.zD=ca(19);g.k.Kd=function(){return this.zb.getVideoData()};
g.k.getVideoLoadedFraction=
g.k.rb=function(){return this.template};
g.k.Bb=function(){return this.Od};
g.k.wi=function(){return this.Sb};
g.k.dB=
g.k.Fq=function(){return this.Od.Fq()};
g.k.getVolume=
g.k.PD=function(){return this.Va.isFullscreen()};
g.k.isMuted=function(){return this.Va.isMuted()};
g.k.nD=
g.k.dD=
g.k.Zy=
g.k.uba=
g.k.GN=
g.k.mS=function(){this.EA&&this.EA.mS()};
g.k.AP=function(a){return this.EA?this.EA.AP(a):""};
g.k.xR=function(a){this.EA=a};
g.k.VE=
g.k.setLoopVideo=
g.k.getLoopVideo=function(){return this.wb.Ns()};
g.k.setLoopRange=
g.k.getLoopRange=function(){return this.Fb};
g.k.oK=
g.k.setPlaybackRate=
g.k.getCurrentTime=
g.k.iz=
g.k.getDuration=
g.k.df=
g.k.addPlayerResponseForAssociation=function(a){this.lc&&this.lc.addPlayerResponseForAssociation(a)};
g.k.finishSegmentByCpn=
g.k.kN=
g.k.getDebugText=
g.k.getFeedbackProductData=
g.k.getPresentingPlayerType=
g.k.Fz=
g.k.Ub=
g.k.getAppState=function(){return this.appState};
g.k.sQ=
g.k.onLoadProgress=
g.k.paa=function(){this.Va.oa("playbackstalledatstart")};
g.k.onVideoProgress=
g.k.onAutoplayBlocked=function(){this.Va.xc("onAutoplayBlocked")};
g.k.C$=function(){this.Va.oa("progresssync")};
g.k.r$=function(){this.Va.xc("onPlaybackPauseAtStart")};
g.k.o9=
g.k.uZ=function(a){3!==this.getPresentingPlayerType()&&this.Va.oa("presentingplayerstatechange",a)};
g.k.nk=
g.k.k9=
g.k.rE=
g.k.FE=
g.k.onVideoDataChange=
g.k.WG=
g.k.B$=
g.k.Up=
g.k.Fg=
g.k.Cr=function(a,b){this.zb.handleError(new aL(a,b))};
g.k.isAtLiveHead=
g.k.Av=
g.k.seekTo=
g.k.seekBy=
g.k.vA=function(){this.Va.xc("SEEK_COMPLETE")};
g.k.baa=
g.k.onAirPlayActiveChange=function(){this.Va.oa("airplayactivechange");this.X.L("html5_external_airplay_events")&&this.Va.xc("onAirPlayActiveChange",this.Va.Lh())};
g.k.onAirPlayAvailabilityChange=
g.k.showAirplayPicker=
g.k.NP=function(){this.Va.oa("beginseeking")};
g.k.SP=function(){this.Va.oa("endseeking")};
g.k.getStoryboardFormat=function(a){return(a=g.xU(this,a))?m1(this,a).getVideoData().getStoryboardFormat():null};
g.k.Xj=
g.k.Hf=
g.k.vC=
g.k.LD=
g.k.Lt=function(a){var b;null==(b=this.qe)||b.Lt(a)};
g.k.Fy=
g.k.YF=
g.k.enqueueVideoByPlayerVars=
g.k.queueNextVideo=
g.k.uH=
g.k.Uv=function(){return this.Em.Uv()};
g.k.clearQueue=
g.k.loadVideoByPlayerVars=
g.k.preloadVideoByPlayerVars=
g.k.setMinimized=
g.k.setInline=function(a){this.visibility.setInline(a)};
g.k.setInlinePreview=
g.k.cB=
g.k.sV=
g.k.Y$=
g.k.togglePictureInPicture=
g.k.At=
g.k.cueVideoByPlayerVars=
g.k.Do=
g.k.cuePlaylist=function(a,b,c,d){this.Sv=!0;Rcb(this,a,b,c,d)};
g.k.loadPlaylist=
g.k.hD=
g.k.Is=ca(15);
g.k.nextVideo=
g.k.previousVideo=
g.k.playVideoAt=
g.k.getPlaylist=function(){return this.playlist};
g.k.sD=ca(23);g.k.i9=function(a){this.Va.xc("onCueRangeEnter",a.getId())};
g.k.j9=
g.k.Nu=
g.k.gF=
g.k.UF=
g.k.n9=
g.k.ZP=
g.k.onApiChange=
g.k.d$=
g.k.mutedAutoplay=
g.k.onFullscreenChange=
g.k.zm=
g.k.isFullscreen=function(){return this.visibility.isFullscreen()};
g.k.ez=function(){return this.visibility.ez()};
g.k.P$=
g.k.V9=
g.k.playVideo=
g.k.pauseVideo=
g.k.stopVideo=
g.k.cancelPlayback=
g.k.sendVideoStatsEngageEvent=
g.k.Xi=
g.k.updatePlaylist=
g.k.setSizeStyle=
g.k.Wv=function(){return this.XO};
g.k.hg=function(){return this.visibility.hg()};
g.k.isInline=function(){return this.visibility.isInline()};
g.k.jt=function(){return this.visibility.jt()};
g.k.Ez=function(){return this.visibility.Ez()};
g.k.VO=function(){return this.H_};
g.k.getAdState=
g.k.O$=
g.k.Oh=function(){return this.Va.Oh()};
g.k.iaa=
g.k.cZ=function(){this.Fj();j1(this)};
g.k.j$=
g.k.tE=function(){this.Va.xc("CONNECTION_ISSUE")};
g.k.wE=function(a){this.Va.oa("heartbeatparams",a)};
g.k.fK=
g.k.nf=function(){return this.mediaElement};
g.k.setBlackout=
g.k.l$=
g.k.onLoadedMetadata=function(){this.Va.xc("onLoadedMetadata")};
g.k.onDrmOutputRestricted=function(){this.Va.xc("onDrmOutputRestricted")};
g.k.uM=
g.k.Vz=function(){this.IX=!0};
g.k.xa=
g.k.L=function(a){return this.X.L(a)};
g.k.setScreenLayer=function(a){this.screenLayer=a};
g.k.getInternalApi=function(){return this.Va.getInternalApi()};
g.k.createSubtitlesModuleIfNeeded=function(){return this.Od.createSubtitlesModuleIfNeeded()};
g.k.isOrchestrationLeader=
g.k.getVideoUrl=
g.k.kt=function(){return this.Em.kt()};
g.k.qm=
g.k.pE=
g.k.MR=
var X3={};var qdb=/[&\?]action_proxy=1/,pdb=/[&\?]token=([\w-]*)/,rdb=/[&\?]video_id=([\w-]*)/,sdb=/[&\?]index=([\d-]*)/,tdb=/[&\?]m_pos_ms=([\d-]*)/,wdb=/[&\?]vvt=([\w-]*)/,jdb="ca_type dt el flash u_tz u_his u_h u_w u_ah u_aw u_cd u_nplug u_nmime frm u_java bc bih biw brdim vis wgl".split(" "),udb="www.youtube-nocookie.com youtube-nocookie.com www.youtube-nocookie.com:443 youtube.googleapis.com www.youtubeedu.com www.youtubeeducation.com video.google.com redirector.gvt1.com".split(" "),mdb={android:"ANDROID",
"android.k":"ANDROID_KIDS","android.m":"ANDROID_MUSIC","android.up":"ANDROID_UNPLUGGED",youtube:"WEB","youtube.m":"WEB_REMIX","youtube.up":"WEB_UNPLUGGED",ytios:"IOS","ytios.k":"IOS_KIDS","ytios.m":"IOS_MUSIC","ytios.up":"IOS_UNPLUGGED"},ndb={desktop:"DESKTOP",phone:"MOBILE",tablet:"TABLET"},vdb={FLAG_AUTO_CAPTIONS_DEFAULT_ON:66,FLAG_AUTOPLAY_DISABLED:140,FLAG_AUTOPLAY_EXPLICITLY_SET:141};E1.prototype.Sz=
E1.prototype.fetch=
E1.prototype.reset=function(){this.B=this.j=1};var rlb={F2a:"replaceUrlMacros",SXa:"onAboutThisAdPopupClosed",uCa:"executeCommand"};xdb.prototype.zq=function(){return"adPingingEndpoint"};
xdb.prototype.Rs=ydb.prototype.zq=function(){return"changeEngagementPanelVisibilityAction"};
ydb.prototype.Rs=zdb.prototype.zq=function(){return"loggingUrls"};
zdb.prototype.Rs=g.w(Bdb,g.I);g.w(F1,g.I);g.k=F1.prototype;g.k.addListener=function(a){this.listeners.push(a)};
g.k.removeListener=function(a){this.listeners=this.listeners.filter(function(b){return b!==a})};
g.k.lk=
g.k.ZP=
g.k.Mn=G1.prototype.KG=
G1.prototype.reset=function(){return new G1(this.J)};g.w(H1,g.I);H1.prototype.addCueRange=
H1.prototype.removeCueRange=
H1.prototype.onCueRangeEnter=function(a){if(this.j.has(a.id))this.j.get(a.id).listener.onCueRangeEnter(a.id)};
H1.prototype.onCueRangeExit=
g.w(Kdb,g.uK);I1.prototype.VE=function(a){this.J.VE(a)};
I1.prototype.Vn=J1.prototype.Ze=
J1.prototype.FR=var Qdb=null;g.w(Pdb,g.uG);Pdb.prototype.SN=
g.Ua("ytads.bulleit.getVideoMetadata",function(a){return L1().SN(a)});
g.Ua("ytads.bulleit.triggerExternalActivityEvent",;g.k=M1.prototype;
g.k.Ah=
g.k.oA=function(a){var b;null==(b=this.j.get(a.queryId))||b.oA()};
g.k.nA=function(a){var b;null==(b=this.j.get(a.queryId))||b.nA()};
g.k.pA=function(a){var b;null==(b=this.j.get(a.queryId))||b.pA()};
g.k.lA=function(a){var b;null==(b=this.j.get(a.queryId))||b.lA()};
g.k.mA=Ydb.prototype.send=g.w($db,Ydb);var slb=na(["attributionsrc"]);
aeb.prototype.send=R1.prototype.Xi=
R1.prototype.Ai=g.w(S1,g.I);g.k=S1.prototype;g.k.addListener=function(a){this.listeners.push(a)};
g.k.removeListener=function(a){this.listeners=this.listeners.filter(function(b){return b!==a})};
g.k.lk=
g.k.Mn=function(){};
g.k.gf=
g.k.Iaa=
g.k.caa=
g.k.xa=
g.k.Ai=g.w(T1,g.I);g.k=T1.prototype;g.k.lk=
g.k.Mn=function(){};
g.k.addListener=function(a){this.listeners.push(a)};
g.k.removeListener=function(a){this.listeners=this.listeners.filter(function(b){return b!==a})};
g.k.QY=function(){};
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
g.k.eB=function(a){this.J.eB(a)};
g.k.D$=
g.k.u$=
g.k.onFullscreenToggled=function(a){for(var b=g.u(this.listeners),c=b.next();!c.done;c=b.next())c.value.onFullscreenToggled(a)};
g.k.onVolumeChange=
g.k.rh=
g.k.Wk=function(a){for(var b=g.u(this.listeners),c=b.next();!c.done;c=b.next())c.value.Wk(a)};
g.k.Yb=
g.k.Vk=g.w(qeb,g.I);g.w(X1,g.I);X1.prototype.xa=function(){this.Jn.isDisposed()||this.Jn.get().removeListener(this);g.I.prototype.xa.call(this)};Y1.prototype.fetch=g.w($1,g.I);g.k=$1.prototype;g.k.addListener=function(a){this.listeners.push(a)};
g.k.removeListener=function(a){this.listeners=this.listeners.filter(function(b){return b!==a})};
g.k.AK=
g.k.onAdUxClicked=
g.k.LP=function(a){a2(this,function(b){b.pO(a)})};
g.k.KP=function(a){a2(this,function(b){b.oO(a)})};
g.k.f9=b2.prototype.reduce=
b2.prototype.updateTime=function(){};g.w(c2,g.I);g.k=c2.prototype;
g.k.lk=
g.k.Mn=function(){};
g.k.addListener=function(a){this.listeners.push(a)};
g.k.removeListener=
g.k.It=
g.k.RP=
g.k.xa=d2.prototype.addPlayerResponseForAssociation=function(a){this.J.addPlayerResponseForAssociation(a)};g.k=f2.prototype;g.k.vC=
g.k.Fy=function(a,b){this.J.Fy(a,b)};
g.k.YF=function(a,b,c){this.J.YF(a,b,c)};
g.k.Lt=function(a){this.J.Lt(a)};
g.k.LD=
g.k.Dr=function(){return this.J.Dr()};
g.k.finishSegmentByCpn=function(a,b){this.J.finishSegmentByCpn(a,b)};g.w(zeb,g.I);g.w(Aeb,g.I);g.w(Beb,g.I);g.w(Ceb,g.I);g.w(Deb,g.I);g.w(Eeb,g.I);g.w(Geb,g.I);Geb.prototype.C=function(){return this.B};g.w(Heb,XG);
Heb.prototype.D=g.w(Ieb,aH);g.k=Ieb.prototype;g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=function(){cH(this);aH.prototype.hide.call(this)};
g.k.show=function(){bH(this);aH.prototype.show.call(this)};
g.k.Qp=function(){this.hide()};
g.k.Un=g.w(Jeb,DG);g.k=Jeb.prototype;
g.k.init=
g.k.clear=
g.k.show=function(){Keb(!0);this.actionButton&&this.actionButton.show();this.skipButton&&this.skipButton.show();this.B&&this.B.show();DG.prototype.show.call(this)};
g.k.hide=
g.k.wN=var Peb={iconType:"CLOSE"},j2=new g.De(320,63);g.w(Oeb,DG);g.k=Oeb.prototype;
g.k.init=
g.k.clear=
g.k.waa=
g.k.pL=
g.k.d9=
g.k.iQ=
g.k.e9=g.w(Web,aH);g.k=Web.prototype;g.k.init=
g.k.clear=function(){this.hide()};
g.k.hide=
g.k.show=
g.k.Qp=function(){this.hide()};
g.k.Un=g.w(Yeb,DG);g.k=Yeb.prototype;
g.k.init=
g.k.show=function(){Zeb(!0);this.actionButton&&this.actionButton.show();DG.prototype.show.call(this)};
g.k.hide=
g.k.clear=
g.k.onClick=
g.k.MS=
g.k.dX=g.w(k2,DG);
k2.prototype.init=
k2.prototype.tF=
k2.prototype.onClick=
k2.prototype.clear=function(){this.hide()};g.w($eb,DG);$eb.prototype.init=g.w(l2,NG);l2.prototype.init=
l2.prototype.onClick=g.w(m2,DG);
m2.prototype.init=
m2.prototype.clear=function(){this.hide()};g.w(n2,DG);n2.prototype.init=
n2.prototype.show=
n2.prototype.a_=function(){};g.w(ffb,n2);g.k=ffb.prototype;g.k.init=
g.k.a_=
g.k.onChange=
g.k.uaa=
g.k.clear=function(){this.api.U().L("enable_hide_on_clear_in_survey_question_bulleit")?this.hide():this.dispose()};g.w(o2,n2);o2.prototype.init=
o2.prototype.clear=g.w(p2,DG);p2.prototype.init=
p2.prototype.clear=
p2.prototype.D=var nfb=na(['background-image:url("','");']);g.w(q2,DG);
q2.prototype.init=
q2.prototype.clear=function(){this.hide()};
q2.prototype.show=function(){pfb(!0);DG.prototype.show.call(this)};
q2.prototype.hide=g.w(r2,aH);g.k=r2.prototype;
g.k.init=function(a,b){aH.prototype.init.call(this,a,b,{});if(b.durationMilliseconds){if(0>b.durationMilliseconds){g.VF(Error("DurationMilliseconds was specified incorrectly in AdPreview with a value of: "+b.durationMilliseconds));return}this.B=b.durationMilliseconds}else this.B=this.j.Vl();var c;if(null==(c=b.previewText)||!c.text||g.fc(b.previewText.text))g.VF(Error("No text is returned for AdPreview."));else{this.G=b.previewText;b.previewText.isTemplated||g.Ef(this.C,b.previewText.text);var d;
if((null==(d=this.api.getVideoData(1))?0:d.Dl)&&b.previewImage){var e,f;(a=(null==(f=Bya((null==(e=b.previewImage)?void 0:e.sources)||[],52,!1))?void 0:f.url)||"")&&a.length?(this.previewImage=new g.CG({I:"img",S:"ytp-preview-ad__image",Y:{src:"{{imageUrl}}"}}),this.previewImage.updateValue("imageUrl",a),g.M(this,this.previewImage),this.previewImage.Ja(this.element)):g.VF(Error("Failed to get imageUrl in AdPreview."))}else this.C.classList.add("ytp-preview-ad__text--padding--wide")}};
g.k.clear=function(){this.hide()};
g.k.hide=function(){cH(this);aH.prototype.hide.call(this)};
g.k.show=function(){bH(this);aH.prototype.show.call(this)};
g.k.Qp=function(){this.hide()};
g.k.Un=g.w(s2,DG);
s2.prototype.init=
s2.prototype.clear=function(){this.hide()};
s2.prototype.onClick=function(a){a.stopPropagation();DG.prototype.onClick.call(this,a)};g.w(t2,DG);
t2.prototype.init=
t2.prototype.clear=function(){this.hide()};
t2.prototype.onClick=function(a){a.stopPropagation();DG.prototype.onClick.call(this,a)};g.w(u2,DG);u2.prototype.init=
u2.prototype.clear=function(){this.hide()};
u2.prototype.onClick=g.w(tfb,aH);g.k=tfb.prototype;
g.k.init=
g.k.Un=
g.k.Qp=function(){this.clear()};
g.k.onClick=
g.k.clear=
g.k.show=function(){this.adAvatar.show();this.headline.show();this.description.show();this.adButton.show();aH.prototype.show.call(this)};
g.k.hide=
g.k.NS=g.w(ufb,DG);g.k=ufb.prototype;
g.k.init=
g.k.onClick=
g.k.clear=function(){this.j.reset();this.hide()};
g.k.hide=function(){DG.prototype.hide.call(this)};
g.k.show=g.w(vfb,aH);g.k=vfb.prototype;g.k.init=
g.k.show=function(){bH(this);aH.prototype.show.call(this)};
g.k.hide=
g.k.clear=
g.k.Qp=function(){this.hide()};
g.k.Un=g.w(v2,DG);
v2.prototype.init=
v2.prototype.clear=function(){this.hide()};g.w(w2,DG);
w2.prototype.init=function(a,b,c,d){DG.prototype.init.call(this,a,b,{});b.skipOrPreview&&(c=b.skipOrPreview,a=g.U(c,Ohb),c=g.U(c,Lhb),a?(this.Yt=new vfb(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,this.j),g.M(this,this.Yt),this.Yt.Ja(this.D),this.Yt.init(sG("skip-ad"),a)):c&&(this.C=new r2(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,this.j,1),g.M(this,this.C),this.C.Ja(this.D),this.C.init(sG("ad-preview"),c),this.C.transition.show(100)));b.playerAdCard&&(a=
g.U(b.playerAdCard,Mhb))&&(this.playerAdCard=new tfb(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,this.j),g.M(this,this.playerAdCard),this.playerAdCard.Ja(this.G),this.playerAdCard.init(sG("ad-avatar-lockup-card"),a));b.adBadgeRenderer&&(a=g.U(b.adBadgeRenderer,Ghb))&&(this.adBadge=new qH(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,!0),g.M(this,this.adBadge),this.adBadge.Ja(this.B),this.adBadge.init(sG("simple-ad-badge"),a,this.macros));b.adDurationRemaining&&
(a=g.U(b.adDurationRemaining,zhb))&&(this.adDurationRemaining=new wH(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,this.j,d.videoAdDurationSeconds),g.M(this,this.adDurationRemaining),this.adDurationRemaining.Ja(this.B),this.adDurationRemaining.init(sG("ad-duration-remaining"),a,this.macros));b.adInfoRenderer&&(d=g.U(b.adInfoRenderer,fN))&&(this.adInfoButton=new ZG(this.api,this.layoutId,this.interactionLoggingClientData,this.gb,this.element),g.M(this,this.adInfoButton),this.adInfoButton.Ja(this.B),
this.adInfoButton.init(sG("ad-info-hover-text-button"),d,this.macros));b.visitAdvertiserLink&&(b=g.U(b.visitAdvertiserLink,Phb))&&(this.visitAdvertiserLink=new v2(this.api,this.layoutId,this.interactionLoggingClientData,this.gb),g.M(this,this.visitAdvertiserLink),this.visitAdvertiserLink.Ja(this.B),this.visitAdvertiserLink.init(sG("visit-advertiser-link"),b));this.show()};
w2.prototype.clear=function(){this.hide()};var tlb="ad-attribution-bar ad-channel-thumbnail advertiser-name ad-preview ad-title skip-button visit-advertiser".split(" ").concat("shopping-companion action-companion image-companion ads-engagement-panel banner-image top-banner-image-text-icon-buttoned".split(" "));g.w(x2,XG);
x2.prototype.D=
x2.prototype.xa=g.w(xfb,g.YV);g.k=xfb.prototype;g.k.create=
g.k.load=
g.k.destroy=
g.k.unload=
g.k.rl=function(){return!1};
g.k.getAdState=
g.k.getOptions=function(){return Object.values(rlb)};
g.k.Eh=
g.k.It=
g.k.Ip=
g.k.executeCommand=g.Ua("yt.player.Application.create",g.i1.create);g.Ua("yt.player.Application.createAlternate",g.i1.create);ava(cva(),{Zq:[{cA:/Unable to load player module/,weight:20},{cA:/Failed to fetch/,weight:500},{cA:/XHR API fetch failed/,weight:10},{cA:/JSON parsing failed after XHR fetch/,weight:10},{cA:/Retrying OnePlatform request/,weight:10},{cA:/CSN Missing or undefined during playback association/,weight:100}]});var ulb=g.Va("ytcsi.tick");ulb&&ulb("pe");g.XV("ad",xfb);var Gfb=g.mf&&Ffb();g.vlb=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.Ua("yt.msgs_",g.vlb);g.w(g.A2,g.I);g.A2.prototype.start=
g.A2.prototype.stop=
g.A2.prototype.next=g.w(g.B2,g.V);g.k=g.B2.prototype;g.k.ID=function(){return 0<this.suggestionData.length};
g.k.N1=
g.k.show=function(){g.V.prototype.show.call(this);Jfb(this)};
g.k.O1=
g.k.xw=
g.k.Yb=
g.k.onVideoDataChange=
g.k.scrollTo=})(_yt_player);
