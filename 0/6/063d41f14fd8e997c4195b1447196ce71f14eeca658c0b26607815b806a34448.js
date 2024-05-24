var ID='00801218';var GID='147.83.130.27.1707755972';var Gtag='';var Tubos=new Array();Tubos[5]='127e';Tubos[1]='6ab8';Tubos[6]='6de1';Tubos[2]='8952';Tubos[3]='9206';Tubos[4]='acf4';Tubos[7]='dda9';Tubos[0]='f3d3';var Tubo='';var Tlen=Tubos.length;var i;for(i=0;i<Tlen;i++){if(i==Tlen-1){Tubo+=Tubos[i];}else{Tubo+=Tubos[i];}}function iscookie(Cname){var Cfl='0';var C=document.cookie;var Cc='';if(C.length>0){Ch=C.indexOf(Cname+'=');if(Ch !=-1){Ch+=Cname.length+1;Th=C.indexOf(';',Ch);if(Th==-1)Th=C.length;Cc=C.substring(Ch,Th);}else{Cfl='1';}}else{Cfl='1';}return[Cfl,Cc];}var UQname='UQrc'+ID;var UQ=0;var UQar=iscookie(UQname);if(UQar[0]==1){var T=new Date;T.setTime(T.getTime()+1000*60*60*3);Tg=T.toGMTString();document.cookie=UQname+'='+GID+'; expires='+Tg;UQ=parseInt(1);}else{UQ=parseInt(0);}if(navigator.cookieEnabled != true) {UQ=parseInt(0);}if(UQ==1){var Reff='';if(Gtag=='off'){Reff=escape(document.referrer);}else{Reff=escape(top.document.referrer);}var ERS=[/search\.yahoo\.co\.jp\/search/,/www\.google\.co\.jp\/search/];for(i=0;i<ERS.length;i++){if(Reff.search(ERS[i])!=-1){Tmp=Reff.split('%3F');Tmp=Tmp[0].split('?');Reff=Tmp[0];break;}}var Lines=new Array();Lines[0]='idname='+ID;Lines[1]='reff='+Reff;Lines[2]='tubo='+Tubo;var Line='';var Llen=Lines.length;for(i=0;i<Llen;i++){if(i==Llen-1){Line+=Lines[i];}else{Line+=Lines[i]+'&';}}document.write('<scr'+'ipt type=text/javascript src="//rc9.i2i.jp/bin/reff.php?'+Line+'"></scr'+'ipt>');}document.write(unescape("%3Cscript src='//rc9.i2i.jp/bin/imp.php?00801218&13&70' type='text/javascript' %3E%3C/script%3E"));var i2iRCDefined = true;
var i2i_non_icon_type = 4;

if (typeof(i2iAdDefined) == "undefined"){
function i2iCookieCk(Cname){Cfl='0';C=document.cookie;Cc='';
if(C.length>0){
Ch=C.indexOf(Cname+'=');if(Ch !=-1){Ch+=Cname.length+1;Th=C.indexOf(';',Ch);if(Th==-1)Th=C.length;Cc=C.substring(Ch,Th);}else{Cfl='1';}
}else{Cfl='1';}
return[Cfl,Cc];
}

function definedAlert(varID) {if (window[varID]){return true;}return false;}
var i2iAdTime = 30000,i2iSeoImg=0;

function i2iAdTimer(num){
ua = navigator.userAgent;
if(num==10){i2iAdChange(10);}else if(num==3){i2iAdChange(3);setTimeout("i2iAdTimer(10)",3000);}else if(num==2){
i2iAdChange(2);
if (i2iSeoImg != 1){setTimeout("i2iAdTimer(10)",3000);}else{setTimeout("i2iAdTimer(3)",3000);}}else if(num==1){i2iSeoImg = (i2iGetIdObj('prtaglink') && i2iGetIdObj('i2i-15a675c9be31438acfd-img1'))?1:0;i2iAdChange(1);setTimeout("i2iAdTimer(2)",i2iAdTime);}else{setTimeout("i2iAdTimer(1)",4500);}
}

function i2iSetShow(name,isShow){var objt = i2iGetIdObj(name);if (objt != null){objt.style.display= (isShow)?"block":"none";}}

function i2iAdChange(flg){
var objt;
switch(flg){
case 1:
i2iSetShow('i2iAdcon',false);i2iSetShow('i2iad3rd',true);break;
case 2:
i2iSetShow('i2iAdcon',false);i2iSetShow('i2iad3rd',false);i2iSeoView(1,true);break;
case 3:
i2iSeoView(2,true);break;
case 10:
default:
i2iSeoView(false);break;
}
}

function i2iSeoView(num,isShow){var isShow1 = isShow;var isShow2 = isShow;if (i2iSeoImg == 1){if (num == 1){isShow2 = false;}else{isShow1 = false;}}i2iSetShow("prtaglink",isShow1);i2iSetShow("i2i-15a675c9be31438acfd-img1",isShow2);}
function i2iAdview(i2i_icon_type){
if(i2i_icon_type=='2'){icon_ichi='right';icon_file='right_black.gif';}else if(i2i_icon_type=='3'){icon_ichi='left';icon_file='left_white.gif';}else if(i2i_icon_type=='4'){icon_ichi='right';icon_file='right_white.gif';}else{icon_ichi='left';icon_file='left_black.gif';}
var i2iads=[{rate:2,img:"//img.i2i.jp/all/ad/top/2013030456927.gif",link:"http://ad.i2idata.com/click.php?ad_id=1",imp:""},{rate:2,img:"//img.i2i.jp/all/ad/top/2012012678664.gif",link:"http://ad.i2idata.com/click.php?ad_id=2",imp:""},{rate:2,img:"//img.i2i.jp/all/ad/top/2012012657027.gif",link:"http://ad.i2idata.com/click.php?ad_id=3",imp:""},{rate:2,img:"//img.i2i.jp/all/ad/top/2012031485228.gif",link:"http://ad.i2idata.com/click.php?ad_id=4",imp:""},{rate:2,img:"//img.i2i.jp/all/ad/top/2012031410340.gif",link:"http://ad.i2idata.com/click.php?ad_id=5",imp:""},{rate:2,img:"//img.i2i.jp/all/ad/top/2012031691153.gif",link:"http://ad.i2idata.com/click.php?ad_id=6",imp:""}];var i2i_ad_len=12;var i2i_ad_img,i2i_ad_link,i2i_ad_imp,i2iTotal=0,t;var i2iRnd = Math.ceil( Math.random()*i2i_ad_len);
for (i=0;i<i2iads.length;i++){t=i2iads[i];i2iTotal+= t.rate;if (i2iRnd <= i2iTotal){i2i_ad_img = t.img;i2i_ad_link = t.link;i2i_ad_imp = t.imp;break;}}
document.write('<div id="i2iad3rd" style="position:absolute;display:none;top:0px;'+icon_ichi+':0px;width:180px;height:15px;z-index:58473;text-align:'+icon_ichi+';">');document.write('<a href='+i2i_ad_link+' target="_blank">');document.write('<img src='+i2i_ad_img+' border=0></a>');if (i2i_ad_imp){document.write('<img src='+i2i_ad_imp+' border=0>');}document.write('</div>');
document.write('<style>');document.write('#prtaglink{display:none;position:absolute;width:120px;height:15px;top:0px;'+icon_ichi+':0px;z-index:58473;}');document.write('</style>');
document.write('<style>');document.write('#i2i-15a675c9be31438acfd-wrap{width:35px!important;height:11px!important;white-space:nowrap!important;display:inline-block!important;}');document.write('#i2i-15a675c9be31438acfd-img1{display:none;position:absolute;width:80px;height:15px;top:0px;'+icon_ichi+':0px;z-index:58473;}');document.write('</style>');
document.write('<div id="i2iAdcon" style="position:absolute;top:0px;'+icon_ichi+':0px;width:50px;height:41px;z-index:58473;"><a href=http://www.i2i.jp/ target=_blank><img src="//img.i2i.jp/all/icon/'+icon_file+'" border=0></a></div>');
}
var UQname='i2iUpad';var UQzen='i2iZenkai';var i2iAdDefined = true;
if(!definedAlert('HARIconMultiFrag')){
UQar=i2iCookieCk(UQname);UQzenar=i2iCookieCk(UQzen);T=new Date;Tp=T.getTime()+1000*60*60*24*1;T.setTime(Tp);Tg=T.toGMTString();UQ=0;
if(UQzenar[0]==1){Num=parseInt(1);document.cookie=UQname+'='+Num+'; expires='+Tg;document.cookie=UQzen+'='+Tp+'; expires='+Tg;UQ=parseInt(1);
}else{Num=parseInt(UQar[1]);Num++;document.cookie=UQname+'='+Num+'; expires='+Tg;Nama=Num%1;if(Nama==0){UQ=parseInt(1);}}
if(UQ==1){if(!definedAlert('i2i_icon_type')){i2i_icon_type=i2i_non_icon_type;}if(i2i_icon_type==''){i2i_icon_type=i2i_non_icon_type;}
i2iAdview(i2i_icon_type);i2iAdTimer(0);}
HARIconMultiFrag='on';
}

}
