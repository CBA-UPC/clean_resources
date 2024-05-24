//-- Copyright 2010 AT Internet, All Rights Reserved.
//-- AT Internet Tag 4.0.001
var xt1='.midilibre-annonces.com',xtcode='',xt46='1',xt50='1',xt48='',xtdocl=false,xtud='undefined',xt2='0',xt3=3650,xtkwv='xtmc',xtkwp='xtnp',xtadch=new Array,xt4=new Array;xt4['sec']='20';xt4['rss']='20';xt4['epr']='20';xt4['erec']='20';xt4['adi']='20';xt4['adc']='20';xt4['al']='20';xt4['es']='20';xt4['ad']='20';
//do not modify below
var xtoid=new Array,xtkey=false,xt49=null,xt5=30,xw=window,xd=document,xtg=navigator,xtv=(xw.xtczv!=null)?'40001-'+xw.xtczv:'40001',xt1=xw.xtdmc?';domain='+xw.xtdmc:(xt1!='')?';domain='+xw.xt1:'',xt6=(xw.xtnv!=null)?xw.xtnv:xd,xt7=(xw.xtsd!=null)?xw.xtsd:'http://log',xt8=(xw.xtsite!=null)?xw.xtsite:0,xt9=(xw.xtn2!=null)?'&s2='+xw.xtn2:'',xtp=(xw.xtpage!=null)?xw.xtpage:'',xt10=xw.xto_force?xw.xto_force.toLowerCase():null,xt11=(xt8=='redirect')?true:false,xtdi=xw.xtdi?'&di='+xw.xtdi:'',xt12=xw.xtidp?'&idpays='+xw.xtidp:'',xt13=xw.xtidprov?'&idprov='+xw.xtidprov:'',xtm=(xw.xtparam!=null)?xw.xtparam:'';xt46=((typeof(xw.xtnopage)!='undefined')&&(xw.xtnopage=='1'))?'0':xt46;xt50=((typeof(xw.xtergo)!='undefined')&&(xw.xtergo=='0'))?'0':xt50;var xtclzone=((typeof(xw.scriptOnClickZone)!='undefined')&&(xt50=='1'))?xw.scriptOnClickZone:0,xt15=(xw.xt_orderid!=null)?xw.xt_orderid:'',xt17=(xw.xtidcart!=null)?xw.xtidcart:'',xt44=(xw.xtprod_load!=null)?'&pdtl='+xw.xtprod_load:'',xt47=(xw.xtcode!='')?'&code='+xw.xtcode:'';
if(xw.addEventListener){xw.addEventListener('unload',function(){},false);}else if(xw.attachEvent){xw.attachEvent('onunload',function(){});}
if(xd.addEventListener){xd.addEventListener('keydown',function(){xtkey=true},false);xd.addEventListener('keyup',function(){xtkey=false},false);}else if(xd.attachEvent){xd.attachEvent('onkeydown',function(){xtkey=true});xd.attachEvent('onkeyup',function(){xtkey=false});}
var xt18=(xw.roimt&&(xtm.indexOf('&roimt',0)<0))?'&roimt='+xw.roimt:'',xtmc=(xw.xtmc&&(xtm.indexOf('&mc',0)<0))?'&mc='+xw.xtmc:xtf3(xtkwv)?'&mc='+xtf3(xtkwv):xtf3('xtmc')?'&mc='+xtf3('xtmc'):'',xtcr=xtf3('xtcr')?'&mcrg='+xtf3('xtcr'):'',xtac=(xw.xtac&&(xtm.indexOf('&ac',0)<0))?'&ac='+xw.xtac:'',xtan=(xw.xtan&&(xtm.indexOf('&an',0)<0))?'&an='+xw.xtan:'',xtnp=(xw.xtnp&&(xtm.indexOf('&np',0)<0))?'&np='+xw.xtnp:xtf3(xtkwp)?'&np='+xtf3(xtkwp):'',xt19=((xw.xtprm!=null)&&(xtm.indexOf('&x',0)<0))?xw.xtprm:'';
xtm+=xt18+xtmc+xtcr+xtac+xtan+xtnp+xt19;try{var xt20=top.document.referrer;}catch(e){var xt20=xt6.referrer;};var xts=screen,xt21=new Date(),xt22=xt21.getTime()/(1000*3600);
function xtclURL(ch){return ch.replace(/%3C/g,'<').replace(/%3E/g,'>').replace(/[<>]/g,'');}
function xtf1(nom,xtenc){xtenc=((xtenc!=null)&&(xtenc!=xtud))?xtenc:'0';var arg=nom+'=',i=0;while(i<xd.cookie.length){var j=i+arg.length;if(xd.cookie.substring(i,j)==arg){return xtf2(j,xtenc);}i=xd.cookie.indexOf(' ',i)+1;if(i==0){break;}}return null;}
function xtf2(index,xtenc){var fin=xd.cookie.indexOf(';',index);if(fin==-1){fin=xd.cookie.length;};if(xtenc!='1'){return unescape(xtclURL(xd.cookie.substring(index,fin)));}else{return xtclURL(xd.cookie.substring(index,fin));}}if(typeof(xt_adch)=='function'){xt_adch();}
function xt_addchain(val,varch){xtvarch=varch?varch:'abmv';itemp=(!xtadch[xtvarch])?0:xtadch[xtvarch];itemp++;xtm+='&'+xtvarch+''+itemp+'='+val;xtadch[xtvarch]=itemp;}
function wck(p1,p2,p3,p4,fmt){p2=(fmt==0)?p2:escape(p2);xd.cookie=p1+'='+p2+';expires='+p3.toGMTString()+';path=/'+p4;}
function xtf3(param,chba){try{xtdeb=xt6.location.href;}catch(e){xtdeb=xw.location.href;}if((chba==null)||(chba==xtud)){var xturl=xtclURL(xtdeb.toLowerCase().replace(/%3d/g,'='));}else{var xturl=chba;};var xtpos=xturl.indexOf(param+'=');if(xtpos>0){var chq=xturl.substring(1,xturl.length),mq=chq.substring(chq.indexOf(param+'='),chq.length),pos3=mq.indexOf('&');if(pos3==-1)pos3=mq.indexOf('%26');if(pos3==-1)pos3=mq.length;return mq.substring(mq.indexOf('=')+1, pos3);}else{return null;}}
function xt_med(type,section,page,x1,x2,x3,x4,x5){xt_ajout=((type=='F')&&((x1==null)||(x1==xtud)))?'':(type=='M')?'&a='+x1+'&m1='+x2+'&m2='+x3+'&m3='+x4+'&m4='+x5:'&clic='+x1;xtf4(type,'&s2='+section+'&p='+page+xt_ajout,x2,x3);}
function xt_ad(x1,x2,x3){xtf4('AT','&atc='+x1+'&type=AT&patc='+xtp+'&s2atc='+xw.xtn2,x2,x3);}
function xt_adc(obj,x1,x2,x3){xtf4('AT','&atc='+x1+'&type=AT&patc='+xtp+'&s2atc='+xw.xtn2);var xtobj=null;if(obj.nodeName!='A'){var xelp=obj.parentNode;while(xelp){if(xelp.nodeName=='A'){xtobj=xelp;break;}xelp=xelp.parentNode;}}else{xtobj=obj;}if(xtobj){xtobj.target=xtobj.target||'_self';if(x2){xtobj.href=x2;if(x3){xtobj.target='_blank';}else{xtobj.target='_self';}}if(!xtkey){if(xtobj.target.toLowerCase()=='_self'){setTimeout('self.location.href="'+xtobj.href+'"',500);return false;}else if(xtobj.target.toLowerCase()=='_top'){setTimeout('top.location.href="'+xtobj.href+'"',500);return false;}else if(xtobj.target.toLowerCase()=='_parent'){setTimeout('parent.location.href="'+xtobj.href+'"',500);return false;}}}else if(x2){if(x3){setTimeout('(xw.open("'+x2+'","_blank")).focus();',500);}else{setTimeout('self.location.href="'+x2+'"',500);}}xtkey=false;return true;}
function xt_click(obj,type,n2,page,x1,x2,x3){xt_ajout=((type=='F')&&((x1==null)||(x1==xtud)))?'':'&clic='+x1;xtf4(type,'&s2='+n2+'&p='+page+xt_ajout);var xtobj=null;if(obj.nodeName!='A'){var xelp=obj.parentNode;while(xelp){if(xelp.nodeName=='A'){xtobj=xelp;break;}xelp=xelp.parentNode;}}else{xtobj=obj;}if(xtobj){xtobj.target=xtobj.target||'_self';if(x2){xtobj.href=x2;if(x3){xtobj.target='_blank';}else{xtobj.target='_self';}}if(!xtkey){if(xtobj.target.toLowerCase()=='_self'){setTimeout('self.location.href="'+xtobj.href+'"',500);return false;}else if(xtobj.target.toLowerCase()=='_top'){setTimeout('top.location.href="'+xtobj.href+'"',500);return false;}else if(xtobj.target.toLowerCase()=='_parent'){setTimeout('parent.location.href="'+xtobj.href+'"',500);return false;}}}else if(x2){if(x3){setTimeout('(xw.open("'+x2+'","_blank")).focus();',500);}else{setTimeout('self.location.href="'+x2+'"',500);}}xtkey=false;return true;}
function xt_form(obj,type,n2,page,x1,x2){xt_ajout=((type=='F')&&((x1==null)||(x1==xtud)))?'':'&clic='+x1;xtf4(type,'&s2='+n2+'&p='+page+xt_ajout);if(x2){setTimeout(function(){obj.submit();},500);}return false;}
function xt_rm(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14){var rmprm='&p='+x3+'&s2='+x2+'&type='+x1+'&a='+x4+'&m5='+x11+'&m6='+x12;rmprm+=((x5!=null)&&(x5!='0'))?'&'+x5:'';rmprm+=((x7!=null)&&(x4!='pause')&&(x4!='stop'))?'&m1='+x7+'&'+x8+'&m3='+x9+'&m4='+x10+'&m7='+x13+'&m8='+x14+'&prich='+xtp+'&s2rich='+xw.xtn2:'';rmprm+=((x6!=null)&&(x6!='0')&&(x7!=null))?'&rfsh='+x6:'';xtf4(x1,rmprm);if((x6!=null)&&(x6!='0')&&((x4=='play')||(x4=='play&buf=1')||(x4=='refresh'))){xtrmdl=(Math.floor(x6)>1500)?1500000:(Math.floor(x6)<5)?5000:Math.floor(x6)*1000;xtoid[x1]=xw.setTimeout("xt_rm('"+x1+"','"+x2+"','"+x3+"','refresh','0','"+x6+"',null,'"+x8+"','"+x9+"','"+x10+"','"+x11+"','"+x12+"')",xtrmdl);}else if(((x4=='pause')||(x4=='stop'))&&(xw.xtoid!=null)){xw.clearTimeout(xtoid[x1]);}}
function xtf4(x1,x2,x3,x4){if(((xtclzone==0)||(xtclzone==3)||(x1!='C'))&&(x1!='P')){var xt_img=new Image();var xt22=new Date();xt_im=xt7+'.xiti.com/hit.xiti?s='+xt8+x2+'&hl='+xt22.getHours()+'x'+xt22.getMinutes()+'x'+xt22.getSeconds();if(parseFloat(xtg.appVersion)>=4){xt_im+='&r='+xts.width+'x'+xts.height+'x'+xts.pixelDepth+'x'+xts.colorDepth;}xt_img.src=xt_im;xt_img.onload=function(){xt_img.onload=null;};}if((x3!=null)&&(x3!=xtud)&&(x1!='M')){if((x4=='')||(x4==null)){xd.location=x3}else{xfen=window.open(x3,'xfen','');xfen.focus();}}else{return;}}
function f_nb(a){a=a-Math.floor(a/100)*100;if(a<10){return '0'+a;}else{return a;}}
var xtidpg=f_nb(xt21.getHours())+''+f_nb(xt21.getMinutes())+''+f_nb(xt21.getSeconds())+''+xt_rd(7),xt23=0,xt16='',xt43=0;
function xt_addProduct(rg,pdt,qtt,unp,dsc,dscc){xt23++;xt16+='&pdt'+xt23+'=';xt16+=rg?rg+'::':'';xt16+=pdt?pdt:'';xt16+=qtt?'&qte'+xt23+'='+qtt:'';xt16+=unp?'&mt'+xt23+'='+unp:'';xt16+=dsc?'&dsc'+xt23+'='+dsc:'';xt16+=dscc?'&pcode'+xt23+'='+dscc:'';}
function xt_rd(nb){return Math.floor(Math.random()*Math.pow(10,nb));}
function xt_addProduct_v2(rg,pdt,qtt,unp,unpht,dsc,dscht,dscc,roimtp){xt23++;xt16+='&pdt'+xt23+'=';xt16+=rg?rg+'::':'';xt16+=pdt?pdt:'';xt16+=qtt?'&qte'+xt23+'='+qtt:'';xt16+=unp?'&mt'+xt23+'='+unp:'';xt16+=unpht?'&mtht'+xt23+'='+unpht:'';xt16+=dsc?'&dsc'+xt23+'='+dsc:'';xt16+=dscht?'&dscht'+xt23+'='+dscht:'';xt16+=roimtp?'&roimt'+xt23+'='+roimtp:'';xt16+=dscc?'&pcode'+xt23+'='+dscc:'';}
function xt_addProduct_load(rg,pdt,xv){if(pdt){xt43++;xt44+=(xt43==1)?'&pdtl=':'|';xt44+=rg?rg+'::':'';xt44+=pdt;xt44+=xv?';'+xv:'';}}if(typeof(xt_cart)=='function'){xt_cart();}else{xt16='';}
function xt_ParseUrl(hit,xtch,xtrefP,thit){var tabUrl=new Array;if(xtch.length>0){var xtlg=1600-xtrefP.length,i=0,j=0,xtch_prec='',xterr=0;while((xtch.length>xtlg)&&(xtch_prec!=xtch)&&(xterr==0)){xtch_prec=xtch;var xsep='&pdt';if(xtch.lastIndexOf(xsep,xtlg)<=0){if(xtch.lastIndexOf('&',xtlg)<=0){xterr=1}else{xsep='&';}}if(xterr==1){tabUrl[i]=xtch.substring(0,1600)+'&mherr=1';}else{tabUrl[i]=xtch.substring(0,xtch.lastIndexOf(xsep,xtlg));xtch=xtch.substring(xtch.lastIndexOf(xsep,xtlg),xtch.length);i++;xtlg=1600;}}if(xterr==0){tabUrl[i]=xtch;}for(j=0;j<=i;j++){if(i>0){tabUrl[j]+=((xt15!='')||(xt17!=''))?'&idhit='+(j+1)+'-'+(i+1)+'-'+xt8+'-'+xt15+'-'+xt17:'&mh='+(j+1)+'-'+(i+1)+'-'+xtidpg;}if(j>0){tabUrl[j]=((xt15!='')||(xt17!=''))?'s='+xt8+'&cmd='+xt15+'&idcart='+xt17+tabUrl[j]:'s='+xt8+tabUrl[j];}else{tabUrl[j]+=xtrefP;}if((thit=='')||(thit==null)){xd.write('<img width="1" height="1" src="'+hit+tabUrl[j]+'">');}else if(thit=='1'){var xt_img=new Image();xt_img.src=hit+tabUrl[j];xt_img.onload=function(){xt_img.onload=null;};}}}}
function xt_ParseUrl2(hit,xtcst,xtch,thit){var tabUrl=new Array;if(xtch.length>0){var xtlg=1600,i=0,j=0,xtch_prec='';while(xtch.length>xtlg && xtch_prec!=xtch){xtch_prec=xtch;var xsep='&p';tabUrl[i]=xtch.substring(0,xtch.lastIndexOf(xsep,xtlg));xtch=xtch.substring(xtch.lastIndexOf(xsep,xtlg),xtch.length);i++;}tabUrl[i]=xtch;for(j=0;j<=i;j++){if((thit=='')||(thit==null)){xd.write('<img width="1" height="1" src="'+hit+xtcst+tabUrl[j]+'">');}else{var xt_img=new Image();xt_img.src=hit+xtcst+tabUrl[j];xt_img.onload=function(){xt_img.onload=null;};}}}}
function xtestr(str,expr,pos){var xtid=null;try{xtid=str.match(expr)[pos-1];}catch(e){xtid=null}return xtid;}
if((xt8!=0)||(xt11)){if(xt48!=''){var xtvid=xtf1('xtvid');if(!xtvid){xtvid=xt21.getTime()+''+xt_rd(6);xt49=xtvid;}var xtexp=new Date();xtexp.setMinutes(xtexp.getMinutes()+30);wck('xtvid',xtvid,xtexp,'',1);}var xtpm='xtor'+ xt8,xtpmd='xtdate'+ xt8,xtpmc='xtocl'+ xt8,xtpan='xtan'+ xt8,xtpant='xtant'+ xt8,xt24=xtf3('xtor'),xtdtgo=xtf3('xtdt'),xt25=xtf3('xtref'),xt26=xtf3('xtan'),xt27=xtf3('an',xtm),xt28=xtf3('ac',xtm),xtocl=(xtf1(xtpmc)!=null)?xtf1(xtpmc):'$',xtord=(xtf1('xtgo')=='0')?xtf1('xtord'):null,xtgord=(xtf1('xtgo')!=null)?xtf1('xtgo'):'0',xtvrn=(xtf1('xtvrn')!=null)?xtf1('xtvrn'):'$',xtgmt=xt21.getTime()/60000,xtgo=(xtdtgo!=null)?(((xtgmt-xtdtgo)<30)&&(xtgmt-xtdtgo)>=0)?'2':'1':xtgord,xtpgt=(xtgord=='1')?'&pgt='+xtf1('xtord'):((xtgo=='1')&&(xt24!=null))?'&pgt='+xt24:'',xto=(xt10!=null)?xt10:((xt24!=null)&&(xtgo=='0'))?xt24:(!xt11)?xtord:null;
xto=((xtocl.indexOf('$'+xto+'$')<0)||(xtocl=='$'))?xto:null;var xtock=(xtgo=='0')?xto:(xtgord=='2')?xtf1('xtord'):(xtgo=='2')?xt24:null;
if(xtock!=null){tmpxto=xtock.substring(0,xtock.indexOf('-'));var xtdrm=xt4[tmpxto];}else{xtdrm='1';}if((xtdrm==null)||(xtdrm==xtud)){xtdrm=xt4['ad'];}if((xt26==null)&&(!xt11)){xt26=xtf1('xtanrd');}var xtanc=xtf1(xtpan),xtanct=xtf1(xtpant),xtxp=new Date(),xt29=new Date(),xt30=new Date();
if(!xt11){xtxp.setTime(xtxp.getTime()+(xtdrm*24*3600*1000));}else{xtxp.setTime(xtxp.getTime()+(xt5*1000));}xt30.setTime(xt30.getTime()+1800000);xt29.setTime(xt29.getTime()+(xt3*24*3600*1000));var xt31=(xt26!=null)?xt26.indexOf('-'):0,xtan2=(xt27!=null)?'':((xt26!=null)&&(xt31>0))?'&ac='+xt26.substring(0,xt31)+'&ant=0&an='+xt26.substring(xt31+1,xt26.length):(xtanc!=null)?'&anc='+xtanc+'&anct='+xtanct:'',xt32=(xtvrn.indexOf('$'+xt8+'$')<0)?'&vrn=1':'',xt35=((xtf3('xtatc')!=null)&&(xtf3('atc',xtm)==null))?'&atc='+xtf3('xtatc'):'';
if(xt32!=''){wck('xtvrn',xtvrn+xt8+'$',xt29,xt1,0);}xt32+=(xto==null)?'':'&xto='+xto;xt32+=xtan2+xtpgt+xt35;if(xt27!=null){wck(xtpan,xt28+'-'+xt27,xt29,xt1,1);wck(xtpant,'1',xt29,xt1,1);}else{if((xt26!=null)&&(xtanct!='1')){wck(xtpan,xt26,xt29,xt1,1);wck(xtpant,'0',xt29,xt1,1);}}
var xtor=xtf1(xtpm),xtor_duree=xtf1(xtpmd),xtdate2=(xtor_duree!=null)?new Date(xtor_duree):new Date(),xt34=xtdate2.getTime()/(1000*3600),xtecart=(Math.floor(xt22-xt34)>=0)?Math.floor(xt22-xt34):0;xt32+=(xtor==null)?'':'&xtor='+xtor+'&roinbh='+xtecart;var xt33='',Xt_r=(xt25!=null)?xt25.replace(/[<>]/g,''):xtf1('xtref');if(Xt_r==null){Xt_r=xt20.replace(/[<>]/g,'');}if (!xt11){if((xtock!=null)&&((xtocl.indexOf('$'+escape(xtock)+'$')<0)||(xtocl=='$'))){wck(xtpmc,xtocl+xtock+'$',xt30,xt1,1);}xt33+=xtg.javaEnabled()?'&jv=1':'&jv=0';var xtnav=xtg.appName+' '+xtg.appVersion,xtIE=(xtnav.indexOf('MSIE'));if(xtIE>=0){var xtvers=parseInt(xtnav.substr(xtIE+5));xtIE=true;}else{xtvers=parseFloat(xtg.appVersion);xtIE=false;}var xtnet=(xtnav.indexOf('Netscape')>=0),xtmac=(xtnav.indexOf('Mac')>=0),xtOP=(xtg.userAgent.indexOf('Opera')>=0);if((xtIE)&&(xtvers >=5)&&(!xtmac)&&(!xtOP)&&(!xt11)){try{xd.body.addBehavior('#default#clientCaps');}catch(e){}var xtconn='&cn='+xd.body.connectionType;xtconn+='&ul='+xd.body.UserLanguage;try{xd.body.addBehavior('#default#homePage');}catch(e){}var xthome='';try{xthome=(xd.body.isHomePage(location.href))?'&hm=1':'&hm=0';}catch(e){};var xtresr='&re='+xd.body.offsetWidth+'x'+xd.body.offsetHeight;}else{var xtconn='',xthome='';if(xtvers>=5){xtresr='&re='+xw.innerWidth+'x'+xw.innerHeight;}else{xtresr=''}}
if((xtnet)&&(xtvers >=4)||(xtOP)){var xtlang='&lng='+xtg.language;}else{if((xtIE)&&(xtvers >=4)&&(!xtOP)){var xtlang='&lng='+xtg.userLanguage;}else{xtlang='';}}wck('xtord','',xt21,xt1,1);if(xtock!=null){if((xtor==null)||(xt2=='1')){wck(xtpm,xtock,xtxp,xt1,1);wck(xtpmd,xt21,xtxp,xt1,1);}}var xthl='&hl='+xt21.getHours()+'x'+xt21.getMinutes()+'x'+xt21.getSeconds(),xt45=(xtdocl)?'&docl='+encodeURIComponent(xt6.location.href.replace(/&/g,'#ec#')):'',Xt_param='s='+xt8+xt9+'&p='+xtp+xthl+xtdi+xt12+xt13+xt32+xt45+xt47+xtm+xtconn+xthome+xtlang+'&vtag='+xtv+'&idp='+xtidpg;var xtvalCZ=xtf1('xtvalCZ',1);if(xtvalCZ!=null){Xt_param+=xtvalCZ;var xtdateo=new Date();xtdateo.setTime(xtdateo.getTime()-3600000);wck('xtvalCZ',xtvalCZ,xtdateo,xt1,1);}var Xt_id=xt7+'.xiti.com/hit.xiti?';if(xtvers >=4){xt33+='&r='+xts.width+'x'+xts.height+'x'+xts.pixelDepth+'x'+xts.colorDepth;}
var xtide=xtf1('xtide');if(xtock!=null){switch(tmpxto.toLowerCase()){case 'erec':case 'epr':case 'es':var xtmpide=xtestr(xtock,/(\[[^\]]*\])|([^\-]+)/g,6);if(xtmpide!=null){xtide=xtmpide;wck('xtide',xtide,xt29,'',1);}break;default:break;}}xt16+=((xt16!='')&&(xtide!=null))?'&ide='+xtide:'';Xt_param+=xt33+xtresr+xt16;var Xt_i=Xt_id+Xt_param+'&ref='+Xt_r.replace(/&/g,'$');if(xt49){Xt_param+='&lnk='+xt48+'&vid='+xt49;}xt_ParseUrl(Xt_id,Xt_param,'&ref='+Xt_r.replace(/&/g, '$'),xt46);if(xt44!=''){xt_ParseUrl2(Xt_id,'s='+xt8+'&type=PDT'+xthl,xt44,xt46);}}else{wck('xtgo',xtgo,xtxp,xt1,1);if(xt24!=null){wck('xtord',xt24,xtxp,xt1,1);}if(xt26!=null){wck('xtanrd',xt26,xtxp,xt1,1);}if(Xt_r!=''){wck('xtref',Xt_r.replace(/&/g,'$'),xtxp,xt1,0);}if(xw.xtloc!=null){xt6.location=xw.xtloc;}}}
(function(){if(typeof(xtscript)!='undefined'){var at=document.createElement('script');at.type='text/javascript';at.async=true;at.src=xtscript;(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]||document.getElementsByTagName('script')[0].parentNode).insertBefore(at,null);}})();
if((xtclzone>0)&&(typeof(xtNodesload)=='function')){xtNodesload();}er -1053px;
}
.idalgo_icon_goal{
    background-position:center -372px;
}
.idalgo_icon_yellow{
    background-position:center -403px;
}
.idalgo_icon_red{
    background-position:center -434px;
}
.idalgo_icon_penalty_in{background-position:center -682px;}
.idalgo_icon_penalty_out{background-position:center -713px;}
.idalgo_icon_yellowred{background-position:center -465px;}

.idalgo_icon_close{background-position:center -1364px;}

.idalgo_icon_minus{background-position:center -1217px;}
.idalgo_icon_plus{background-position:center -1248px;}

.idalgo_icon_dark_square_minus{background-position:center -629px;}
.idalgo_icon_dark_square_plus{background-position:center -660px;}

.idalgo_icon_navigation_prev_slim{background-position:center -3999px}
.idalgo_icon_navigation_next_slim{background-position:center -4030px}

.idalgo_icon_navigation_prev{background-position:center -2015px}
.idalgo_icon_navigation_next{background-position:center -1953px}
.idalgo_icon_navigation_calendar_close{background-position:center -2077px}
.idalgo_icon_navigation_calendar_prev{background-position:center -2139px}
.idalgo_icon_navigation_calendar_next{background-position:center -2108px}

.idalgo_icon_button_play_off{background-position:center -2764px}
.idalgo_icon_button_play_off:hover{background-position:center -2702px}
.idalgo_icon_button_play_on{background-position:center -2702px}

.idalgo_icon_button_pause_off{background-position:center -2888px}
.idalgo_icon_button_pause_off:hover{background-position:center -2826px}
.idalgo_icon_button_pause_on{background-position:center -2826px}

.idalgo_icon_button_nav_off{background-position:center -2983px}
.idalgo_icon_button_nav_off:hover{background-position:center -2952px}
.idalgo_icon_button_nav_on{background-position:center -2952px}

.idalgo_icon_menu{background-position:center -2611px;}

.idalgo_button_twitter{background-position:center -3193px;}
.idalgo_button_square_twitter{background-position:center -3348px;}

.idalgo_icon_flat_minus{background-position:center -3410px;}
.idalgo_icon_flat_plus{background-position:center -3379px}

.idalgo_icon_arrow_down{background-position:center -2673px;}
.idalgo_icon_arrow_right{background-position:center -2115px;}
.idalgo_icon_arrow_up{background-position:center -3569px;}

/*.idalgo_sprite_twitter {*/
    /*background-image:url('//si0.twimg.com/images/dev/cms/intents/icons/sprites/everything-spritev2.png');*/
    /*background-repeat:no-repeat;*/
    /*width:30px;*/
    /*height:30px;*/
    /*overflow:hidden;*/
/*}*/

.idalgo_icon_yellow_small{
    background-position:center -2298px;
}
.idalgo_icon_red_small{
    background-position:center -2330px;
}
.idalgo_icon_team_qualify{
    background-position:center -3695px;
}

.idalgo_icon_close_small {background-position:center -1767px;}

.idalgo_icon_football {background-position:center -372px;}
.idalgo_icon_basketball {background-position:center -3720px;}

.idalgo_icon_filter {background-position: center -4062px;}


.idalgo_sprite.idalgo_icon_all_sport_on {background-position:center -4588px}
.idalgo_sprite.idalgo_icon_all_sport_off {background-position:center -4619px}
.idalgo_sprite.idalgo_icon_motor_sport_on {background-position:center -4650px}
.idalgo_sprite.idalgo_icon_motor_sport_off {background-position:center -4681px}
.idalgo_sprite.idalgo_icon_tennis_sport_on {background-position:center -4712px}
.idalgo_sprite.idalgo_icon_tennis_sport_off {background-position:center -4743px}
.idalgo_sprite.idalgo_icon_football_sport_on {background-position:center -4774px}
.idalgo_sprite.idalgo_icon_football_sport_off {background-position:center -4805px}

/* Module/Pattern/CSS/Standing.css ********************************************************/
div.div_idalgo_content_standing{position:relative;}
div.div_idalgo_content_standing_content{
    padding-bottom:1px;
    position:relative;
    z-index:0;
}
div.div_idalgo_content_standing_content ul.ul_idalgo_nav_tab > li {width:24%;}
div.div_idalgo_content_standing_content ul.ul_idalgo_nav_tab > li:first-child {margin-left:2%;}
div.div_idalgo_content_standing_content ul.ul_idalgo_nav_tab > li > a {
    height:25px;
    line-height:27px;
    text-overflow: ellipsis;
}

div.div_idalgo_content_standing_content ul.ul_idalgo_nav_tab_standing_group > li > a {
    height:20px;
    line-height:20px;
    text-overflow: ellipsis;
    white-space:nowrap
}

ul.ul_idalgo_content_standing{position:relative;display:block;padding:0}
li.li_idalgo_content_standing{
    position:relative;display:block;
    width:100%;height:2.5em;line-height:2.5em;
    border-bottom:1px solid #d4d4d4
}
li.li_idalgo_content_standing:last-child{border-bottom-width:0}
li.li_idalgo_content_standing:nth-child(even){background-color:#f5f5f5}
li.li_idalgo_content_standing:hover,
li.li_idalgo_content_standing.idalgo_team_hover{background-color:#F1F1F1}
li.li_idalgo_content_standing_head:hover{background-color:transparent}

div.div_idalgo_content_standing_line{
    position:relative;display:block;
    height:100%;left:0;
    margin-right:475px;
}

div.div_idalgo_content_standing_line>span,
div.div_idalgo_content_standing_line>div{position:absolute;display:block;top:0;height:100%;text-align:center;font-size:0.75em;font-weight:bold}
li.li_idalgo_content_standing_head div.div_idalgo_content_standing_line>span{font-size:0.6875em;color:#333333}

    span.span_idalgo_content_standing_win_txt,
    span.span_idalgo_content_standing_draw_txt,
    span.span_idalgo_content_standing_lost_txt {
        position:absolute;display:block;
        top:50%;margin-top:-10px;
        left:50%;margin-left:-10px;
        width: 20px;height: 20px;
        line-height: 20px;
        color: #ffffff;
    }

    span.span_idalgo_content_standing_win_txt{background-color: #4db103}
    span.span_idalgo_content_standing_draw_txt{background-color: #ffc90e}
    span.span_idalgo_content_standing_lost_txt{background-color: #bd362f}

    span.span_idalgo_content_standing_position{left:0;width:30px;color:#949494}
    div.div_idalgo_content_standing_pos{left:30px;width:10px;}
    span.span_idalgo_content_standing_logo{left:40px;width:30px}
        a.a_idalgo_content_standing_logo{position:relative;display:block;width:100%;height:100%;text-align:center}
            img.img_idalgo_content_standing_logo{
                position:absolute;display:block;
                width:20px;height:20px;
                top:50%;margin-top:-10px;
                left:50%;margin-left: -10px;
            }
div.div_idalgo_content_standing_line div.div_idalgo_content_standing_name{
        width:100%;
        left:70px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight:normal
    }
a.a_idalgo_content_standing_name + span{margin-left:5px;padding:3px}
div.div_idalgo_content_standing_name[data-prefered="1"] a.a_idalgo_content_standing_name{color:#195226}

    span.span_idalgo_content_standing_points,
    span.span_idalgo_content_standing_percent{left:70px;margin-left:100%;width:35px;color:#141b4d}
    span.span_idalgo_content_standing_played{left:105px;margin-left:100%;width:30px}

    span.span_idalgo_content_standing_win{left:135px;margin-left:100%;width:30px}
    span.span_idalgo_content_standing_draw{left:165px;margin-left:100%;width:30px}
    span.span_idalgo_content_standing_lost{left:195px;margin-left:100%;width:30px}
    span.span_idalgo_content_standing_for{left:225px;margin-left:100%;width:45px}
    span.span_idalgo_content_standing_against{left:270px;margin-left:100%;width:45px}
    span.span_idalgo_content_standing_dif{left:315px;margin-left:100%;width:40px}
    span.span_idalgo_content_standing_form{left:355px;margin-left:100%;width:80px}
    span.span_idalgo_content_standing_next_global{left:445px;margin-left:100%;width:30px}
div.div_idalgo_content_standing_line span.span_idalgo_content_standing_last_global{display:none}

span.span_idalgo_content_standing_next {
    position: absolute;display:block;
    background-color:#ffffff;
    width:20px;height:20px;
    top:50%;margin-top:-10px;
    left:50%;margin-left:-10px;
    line-height:20px;
    border:1px solid #d4d4d4;
    text-align:center;
    border-radius:50%;
}


/* GESTION DES COULEURS */
div.div_idalgo_content_standing_pos_1,
div.div_idalgo_content_standing_pos_2,
div.div_idalgo_content_standing_pos_3,
div.div_idalgo_content_standing_pos_4{
    background-color:#195226;
}
div.div_idalgo_content_standing_pos_10,
div.div_idalgo_content_standing_pos_9{
    background-color:#333333;
}
ul.ul_idalgo_content_standing div.div_idalgo_content_standing_pos div.div_idalgo_content_standing_pos_background{
    height:100%;
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    top: 0;
}
div.div_idalgo_content_standing_pos_2 div.div_idalgo_content_standing_pos_background{
    background-color:#ffffff;
    -webkit-opacity:0.5;
       -moz-opacity:0.5;
         -o-opacity:0.5;
            opacity:0.5;
    filter:alpha(opacity=50);
}
div.div_idalgo_content_standing_pos_3 div.div_idalgo_content_standing_pos_background{
    background-color:#ffffff;
    -webkit-opacity:0.7;
       -moz-opacity:0.7;
         -o-opacity:0.7;
            opacity:0.7;
    filter:alpha(opacity=70);
}
div.div_idalgo_content_standing_pos_4 div.div_idalgo_content_standing_pos_background{
    background-color:#ffffff;
    -webkit-opacity:0.9;
       -moz-opacity:0.9;
         -o-opacity:0.9;
            opacity:0.9;
    filter:alpha(opacity=90);
}
div.div_idalgo_content_standing_pos_9 div.div_idalgo_content_standing_pos_background{
    background-color:#ffffff;
    -webkit-opacity:0.6;
       -moz-opacity:0.6;
         -o-opacity:0.6;
            opacity:0.6;
    filter:alpha(opacity=60);
}

/** Etat de forme synt&eacute;tique **/
div.div_idalgo_content_standing_form_detail div,
div.div_idalgo_content_standing_form_detail span{position: relative}
span.span_idalgo_content_standing_next,
div.div_idalgo_content_standing_form,
span.span_idalgo_content_standing_last {cursor:pointer;}

div.div_idalgo_content_standing_form{top:50%;margin-top:-10px}
span.span_idalgo_content_standing_form ul.ul_idalgo_content_standing_form_syntetic {
    display:block;
    position:relative;
    padding: 6px;
    height: 8px;
    width: 60px;
    z-index: 10;
    margin:0 auto;
    box-sizing:content-box
}

span.span_idalgo_content_standing_form ul.ul_idalgo_content_standing_form_syntetic li { display:block;float:left;width:5px;height:5px;margin-left: 5px;margin-right: 1px;}
span.span_idalgo_content_standing_form ul.ul_idalgo_content_standing_form_syntetic li a {display:block;float:left;width:5px;height:5px;padding:0;clear:none;border:none;border-radius:50%}

li.li_idalgo_content_standing_line_selected span.span_idalgo_content_standing_next{
    border: 2px solid #141b4d;
}

/** Etat de forme d&eacute;taill&eacute; */
div.div_idalgo_content_standing_form_detail {
    position:absolute;display:block;
    right:0;top:28px;
    width:290px;
    z-index: 100;
}
ul.ul_idalgo_content_standing_form_detail {
    display:block;
    position: relative;
    border: 1px solid #d4d4d4;
    border-top: 2px solid #141b4d;
    background-color: #ffffff;
    box-shadow: 1px 1px 3px #d4d4d4;
}

ul.ul_idalgo_content_standing_form_detail li {
    display:block;
    position: relative;
    width:100%;height:25px;
    line-height:25px;
    border-bottom: 1px solid #d4d4d4;
    clear:both;
    cursor: pointer;
}

ul.ul_idalgo_content_standing_form_detail li span {
    float:left;
    display:block;
    font-weight: normal;
    font-size: 0.75em;
}

span.span_idalgo_content_standing_form_detail_status {
    width:5px;
    height:5px;
    border-radius:50%;
    margin-top: 10px;
    margin-left: 7px;
    margin-right: 7px;
    border:0 none;
    left:0
}
span.span_idalgo_content_standing_form_detail_status.button_idalgo_status_other {
    border:1px solid #d4d4d4;
}

span.span_idalgo_content_standing_form_detail_day {
    width:10%;
}

ul.ul_idalgo_content_standing_form_detail li span.span_idalgo_content_standing_form_detail_score {
    width:20%;
    font-weight: bold;
    text-align: center;
}

span.span_idalgo_content_standing_form_detail_teams {
    width:60%;
    text-align: left;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden
}

ul.ul_idalgo_content_standing_form_detail li.li_idalgo_content_standing_to_come_title span {
    font-weight:bold;
    text-align: left;
    text-indent: 22px;
}

/* CONFERENCES (MLS) */
div.div_idalgo_content_standing[data-conference] li.li_idalgo_content_standing{
    display:none;background-color:transparent}

div.div_idalgo_content_standing[data-conference] li.li_idalgo_content_standing_head,
div.div_idalgo_content_standing[data-conference="1"] li.li_idalgo_content_standing[data-conference="1"],
div.div_idalgo_content_standing[data-conference="2"] li.li_idalgo_content_standing[data-conference="2"]{
    display:block}

div.div_idalgo_content_standing ul.ul_idalgo_nav{display:block;margin-bottom:20px}


span.span_idalgo_content_standing_current {
    color:#ffffff;padding:0 5px;margin-left:5px}

/* Liste team (frize) */
div.div_idalgo_content_standing ul.ul_idalgo_content_standing_group_list_team{
    position:relative;
    display:block;
    height:2em;
    text-align:right;
    padding:0 10px 10px 0;
    overflow:visible;
    margin-top: 60px;
}
div.div_idalgo_content_standing li.li_idalgo_content_standing_group_list_team{
    position:relative;
    display:block;
    float:left;
    line-height:2em;
    text-align:center;
    white-space:nowrap;
    overflow: visible;
    font-size: 0.8em;
    height:4em
}
div.div_idalgo_content_standing ul.ul_idalgo_content_standing_group_list_team_small li.li_idalgo_content_standing_group_list_team{
    width:15%;
}

div.div_idalgo_content_standing a.a_idalgo_content_standing_group_list_team{
    position:relative;
    line-height:1em;
    padding-left:25px;
    vertical-align:middle;
    padding: 0;
    display: block;
    padding-top: 10px;
    white-space: normal;
}

div.div_idalgo_content_standing img.img_idalgo_content_standing_group_list_team{
    position:absolute;
    top: -42px;
    left: 0;
    right: 0;
    height:40px;
    margin: auto;
}

/* Module/Rugby/CSS/Standing.css **********************************************************/
div.div_idalgo_content_rugby_standing{
    position:relative;
    z-index:0
}
div.div_idalgo_content_standing_content_content_button {
    display:block;
    height:30px;
    line-height:30px;
}

button.button_idalgo_content_standing_content_content {
    position:relative;
    float:right;
    width:25%;
    max-width:25%;
    height:25px;
    border-collapse: collapse;
    border:1px solid #d4d4d4;
    background-repeat: no-repeat;
    background-color: #f5f5f5;
    cursor:pointer;
}
button.button_idalgo_content_standing_content_content:hover{border-color: #F1F1F1}

span.span_idalgo_content_standing_content_content_vnd,
span.span_idalgo_content_standing_content_content_goal{
    vertical-align:top;line-height:23px
}

span.span_idalgo_content_standing_content_content_picto {
    background-position:center -778px;
    display:block;
    width:20px;
    height:25px;
    position:absolute;
    right:0;
    top:0;
}

span.span_idalgo_content_standing_bd > span.idalgo_sprite_rugby {
    position:absolute;display:block;
    width:30px;height:30px;
    left:50%;margin-left:-15px;
    top:50%;margin-top:-15px;
    background-position: center -1705px;
}
span.span_idalgo_content_standing_bo > span.idalgo_sprite_rugby {
    position:absolute;display:block;
    width:30px;height:30px;
    left:50%;margin-left:-15px;
    top:50%;margin-top:-15px;
    background-position: center -1674px;
}

div.div_idalgo_content_standing_vnd span.span_idalgo_content_standing_content_content_vnd{display:none}
div.div_idalgo_content_standing_goal span.span_idalgo_content_standing_content_content_goal{display:none}
div.div_idalgo_content_standing_vnd span.span_idalgo_content_standing_for,
div.div_idalgo_content_standing_vnd span.span_idalgo_content_standing_against,
div.div_idalgo_content_standing_vnd span.span_idalgo_content_standing_dif{display:none}

div.div_idalgo_content_standing_goal span.span_idalgo_content_standing_win,
div.div_idalgo_content_standing_goal span.span_idalgo_content_standing_draw,
div.div_idalgo_content_standing_goal span.span_idalgo_content_standing_lost{display:none}

    span.span_idalgo_content_standing_bo{left:135px;margin-left:100%;width:40px}
    span.span_idalgo_content_standing_bd{left:175px;margin-left:100%;width:40px}

div.div_idalgo_content_rugby_standing ul.ul_idalgo_content_standing_bonus span.span_idalgo_content_standing_win,
div.div_idalgo_content_rugby_standing ul.ul_idalgo_content_standing_bonus span.span_idalgo_content_standing_for{left:215px;margin-left:100%;width:40px}
div.div_idalgo_content_rugby_standing ul.ul_idalgo_content_standing_bonus span.span_idalgo_content_standing_draw,
div.div_idalgo_content_rugby_standing ul.ul_idalgo_content_standing_bonus span.span_idalgo_content_standing_against{left:255px;margin-left:100%;width:40px}
div.div_idalgo_content_rugby_standing ul.ul_idalgo_content_standing_bonus span.span_idalgo_content_standing_lost,
div.div_idalgo_content_rugby_standing ul.ul_idalgo_content_standing_bonus span.span_idalgo_content_standing_dif{left:295px;margin-left:100%;width:40px}

li.li_idalgo_content_result_group ul.ul_idalgo_content_standing_bonus[data-sport="rugby"] span.span_idalgo_content_standing_win{left:215px;margin-left:100%;width:40px}
li.li_idalgo_content_result_group ul.ul_idalgo_content_standing_bonus[data-sport="rugby"] span.span_idalgo_content_standing_draw{left:255px;margin-left:100%;width:40px}
li.li_idalgo_content_result_group ul.ul_idalgo_content_standing_bonus[data-sport="rugby"] span.span_idalgo_content_standing_lost{left:295px;margin-left:100%;width:40px}
li.li_idalgo_content_result_group ul.ul_idalgo_content_standing_bonus[data-sport="rugby"] span.span_idalgo_content_standing_for{left:335px;margin-left:100%;width:40px}
li.li_idalgo_content_result_group ul.ul_idalgo_content_standing_bonus[data-sport="rugby"] span.span_idalgo_content_standing_against{left:375px;margin-left:100%;width:40px}
li.li_idalgo_content_result_group ul.ul_idalgo_content_standing_bonus[data-sport="rugby"] span.span_idalgo_content_standing_dif{left:415px;margin-left:100%;width:40px}

/* Module/Pattern/CSS/WidgetStanding.css **************************************************/
div.div_idalgo_widget_standing{position:relative;display:block}
div.div_idalgo_content_standing_content_content{position:relative;display:block}
div.div_idalgo_content_standing_content_content_standing{position:relative}


div.div_idalgo_widget_standing div.div_idalgo_content_standing_line{margin-right:210px;}
    div.div_idalgo_widget_standing span.span_idalgo_content_standing_position{left:0;width:20px;color:#949494}
    div.div_idalgo_widget_standing div.div_idalgo_content_standing_pos{left:20px;width:10px;}
    div.div_idalgo_widget_standing span.span_idalgo_content_standing_logo{left:30px;width:20px}
            div.div_idalgo_widget_standing img.img_idalgo_content_standing_logo{
                width:15px;height:15px;
                top:50%;margin-top:-8px;
                left:50%;margin-left: -8px;
            }
div.div_idalgo_widget_standing div.div_idalgo_content_standing_line div.div_idalgo_content_standing_name{left:50px}
    div.div_idalgo_widget_standing span.span_idalgo_content_standing_points,
    div.div_idalgo_widget_standing span.span_idalgo_content_standing_percent{left:50px;width:40px}
    div.div_idalgo_widget_standing span.span_idalgo_content_standing_played{left:90px;width:25px}
    div.div_idalgo_widget_standing span.span_idalgo_content_standing_form{left:115px;width:75px;margin-left:100%}
div.div_idalgo_widget_standing div.div_idalgo_content_standing_line span.span_idalgo_content_standing_next_global{display:none}
div.div_idalgo_widget_standing div.div_idalgo_content_standing_line span.span_idalgo_content_standing_last_global{display:block;left:190px;margin-left:100%;width:20px}
        span.span_idalgo_content_standing_last {
            position:absolute;display:block;
            top:50%;left:50%;
            width:15px;height:15px;
            margin-top:-8px;margin-left:-8px;
            background-position: center -2115px;
        }

    li.li_idalgo_content_standing_line_selected span.span_idalgo_content_standing_last{background-position: center -2674px}

div.div_idalgo_widget_standing  span.span_idalgo_content_standing_form ul.ul_idalgo_content_standing_form_syntetic {
    top:4px;
    padding:3px;
}

div.div_idalgo_widget_standing ul.ul_idalgo_content_standing_form_detail{margin-top:12px;right:0}

div.div_idalgo_widget_standing div.div_idalgo_content_standing_line div.div_idalgo_content_standing_name
    span.button_idalgo_status_draw{margin-left:5px;padding:0 2px}

div.div_idalgo_widget_standing div.div_idalgo_content_standing_form_detail {
    width: 100%;
}

/* CONFERENCES (MLS) */
div.div_idalgo_widget_standing[data-conference] li.li_idalgo_content_standing{
    display:none;background-color:transparent}

div.div_idalgo_widget_standing[data-conference] li.li_idalgo_content_standing_head,
div.div_idalgo_widget_standing[data-conference="1"] li.li_idalgo_content_standing[data-conference="1"],
div.div_idalgo_widget_standing[data-conference="2"] li.li_idalgo_content_standing[data-conference="2"]{
    display:block}

div.div_idalgo_widget_standing div.div_idalgo_content_standing_conference ul.ul_idalgo_nav{
    display:block;margin-bottom:20px;list-style:none;padding:0}
div.div_idalgo_widget_standing div.div_idalgo_content_standing_conference li.li_idalgo_left{
    width:50%}
div.div_idalgo_widget_standing div.div_idalgo_content_standing_conference li.li_idalgo_left a{
    font-size:0.75em}

/* CUSTOM GROUPS */
div.div_idalgo_widget_standing ul.ul_idalgo_nav_tab_standing_group{
    border:none;
    display:flex;
    flex-wrap:wrap;
    justify-content:center
}
div.div_idalgo_widget_standing ul.ul_idalgo_nav_tab_standing_group > li:first-child{
    margin-left:0
}
div.div_idalgo_widget_standing ul.ul_idalgo_nav_tab_standing_group > li{
    display:flex;
    float:none;
    margin-left:5px;
    margin-bottom:5px;
    justify-content:space-around;
    width:fit-content !important
}
div.div_idalgo_widget_standing ul.ul_idalgo_nav_tab_standing_group > li > a{
    display:flex;
    align-items:center;
    padding:2px 10px;
    border-radius:4px
}
div.div_idalgo_widget_standing ul.ul_idalgo_nav_tab_standing_group > li > a:hover{
    border-bottom-color:#d4d4d4
}
div.div_idalgo_widget_standing ul.ul_idalgo_nav_tab_standing_group > li > a.a_idalgo_active{
    background-color:#195226;
    color:#ffffff;
    border-color:#195226
}

/* Module/Common/CSS/MainDomAScore.css ****************************************************/

/*a.a_idalgo_content_match_score span{
  float:left;
}

span.span_idalgo_score_part_left{
  margin-left:20%;
  margin-right:10%;
}
span.span_idalgo_score_part_center{
  margin-right:10%;
}
span.span_idalgo_score_part_right{

}*/

span.span_idalgo_score_part_left{
    position:absolute;
    right:50%;top:0;
    margin-right:6px;
}
span.span_idalgo_score_part_center{
    display:block;
    position:absolute;
    top:0;left:0;
    width:100%;
    height:100%;
    text-align:center;
    overflow:hidden;
}
span.span_idalgo_score_part_right{
    position:absolute;
    left:50%;top:0;
    margin-left:6px;
}
span.span_idalgo_background_score_head_to_head{
    position:absolute;
    width:30px;height:28px;
    background-position:center -807px;
    z-index:1;
    top:50%;left:50%;
    margin-left:-15px;
    margin-top:-14px;
    overflow:hidden;
}
span.span_idalgo_score_time {
    font-weight: normal;
    display:block;
    position:absolute;
    top:0;left:0;
    width:100%;
    height:100%;
    text-align:center;
    overflow:hidden;
    margin:0;
}

div.div_idalgo_score_penalty_part{
    position:absolute;display:block;
    width:100%;height:1.35em;line-height:1.35em;
    left:0;
    top:2.25em;
}

/* Module/Common/CSS/MainDomButton.css ****************************************************/

.button_idalgo {
  display: inline-block;
  margin-bottom: 0;
  padding:0;
  color: #333333;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255,255,255, 0.75);
  vertical-align: middle;
  font:0.6875em/2.7272em Roboto,arial,sans-serif;
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  cursor: pointer;
  height:2.9090em;
  overflow:hidden;
  font-weight:bold;
  text-overflow:ellipsis;
  text-overflow:'.';
  white-space:nowrap
}
.button_idalgo:hover,
.button_idalgo:active{
  background-color: #f5f5f5;
}
.button_idalgo.active{
  background-color: #f5f5f5;
  outline: 0;
}
.div_idalgo_container .button_idalgo_selected{color:#195226;}

.button_idalgo_status_win{
  background-color: #4db103;
  background-image: -moz-linear-gradient(top, #62c462, #4db103);
  background-image: -ms-linear-gradient(top, #62c462, #4db103);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#62c462), to(#4db103));
  background-image: -webkit-linear-gradient(top, #62c462, #4db103);
  background-image: -o-linear-gradient(top, #62c462, #4db103);
  background-image: linear-gradient(top, #62c462, #4db103);
}
.button_idalgo_status_win:hover{
  background-color: #4db103;
}

.button_idalgo_status_lost{
  background-color: #bd362f;
  background-image: -moz-linear-gradient(top, #ee5f5b, #bd362f);
  background-image: -ms-linear-gradient(top, #ee5f5b, #bd362f);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ee5f5b), to(#bd362f));
  background-image: -webkit-linear-gradient(top, #ee5f5b, #bd362f);
  background-image: -o-linear-gradient(top, #ee5f5b, #bd362f);
  background-image: linear-gradient(top, #ee5f5b, #bd362f);
}
.button_idalgo_status_lost:hover{
  background-color: #bd362f;
}

.button_idalgo_status_draw{
  background-color: #ffc90e;
  background-image: -moz-linear-gradient(top, #ffc90e, #ffc90e);
  background-image: -ms-linear-gradient(top, #ffc90e, #ffc90e);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffc90e), to(#ffc90e));
  background-image: -webkit-linear-gradient(top, #ffc90e, #ffc90e);
  background-image: -o-linear-gradient(top, #ffc90e, #ffc90e);
  background-image: linear-gradient(top, #ffc90e, #ffc90e);
}
.button_idalgo_status_draw:hover{
  background-color: #ffc90e;
}

.button_idalgo_status_other {
  background-color: #d4d4d4;
}

/* Module/Common/CSS/MainDomTable.css *****************************************************/

.div_idalgo_widget table,
.div_idalgo_container table{
    background-color:transparent;
    border-collapse:collapse;
    border-spacing:0px;
    width:100%;
}
div.div_idalgo_container table tbody tr:hover,
div.div_idalgo_container table tbody tr.hover{
    background-color: #F1F1F1;
}
.table_idalgo_content_simple tbody{
    border-top:1px solid #949494;
}

.table_idalgo_content_simple thead{
    border-top:0 none;
}

/** Tableau avec affichage de fond une fois sur deux **/
table.table_idalgo_content_alternate{
    border-collapse:separate;
}
table.table_idalgo_content_alternate tbody{
    border-collapse:separate;
}
table.table_idalgo_content_alternate thead tr{
    height:30px;
    text-align:center;
}
table.table_idalgo_content_alternate tbody tr{
    height:30px;
    line-height:30px;
    text-align:center;
}
table.table_idalgo_content_alternate tbody tr:nth-child(odd){
    height:28px;
    line-height:28px;
    background-color: #f5f5f5;
}
table.table_idalgo_content_alternate tbody tr td{
    border:none;
    padding:0;
    margin:0;
}
table.table_idalgo_content_alternate tbody tr:nth-child(odd) td{
    border-width:1px 0 1px 0;
    border-style:solid;
    border-color:#d4d4d4;
}

/* Module/Rugby/CSS/MainPicture.css *******************************************************/

.idalgo_sprite_rugby{
    background-image:url('/idalgo/cache/media/sprite_rugby_left.png');
    background-repeat:no-repeat;
    width:30px;
    height:30px;
    overflow:hidden;
}

    .idalgo_content_action_logo_penalty_goal_in,
    .idalgo_content_action_logo_small_penalty_goal_in{background-position:center -279px;}
    .idalgo_content_action_logo_penalty_goal_out,
    .idalgo_content_action_logo_small_penalty_goal_out{background-position:center -310px;}

    .idalgo_content_action_logo_small_try{background-position:center -620px;}
    .idalgo_content_action_logo_small_try_team{background-position:center -1488px;}
    .idalgo_content_action_logo_small_try_penalty{background-position:center -1581px;}
    .idalgo_content_action_logo_small_penalty_in{background-position:center -682px;}
    .idalgo_content_action_logo_small_penalty_out{background-position:center -775px;}
    .idalgo_content_action_logo_small_conversion_in{background-position:center -651px;}
    .idalgo_content_action_logo_small_conversion_out{background-position:center -744px;}
    .idalgo_content_action_logo_small_drop_in{background-position:center -713px;}
    .idalgo_content_action_logo_small_drop_out{background-position:center -806px;}
    .idalgo_content_action_logo_small_video{background-position:center -1395px;}
    
    .idalgo_content_action_logo_small_local_try{background-position:center -837px;}
    .idalgo_content_action_logo_small_local_try_team{background-position:center -1550px;}
    .idalgo_content_action_logo_small_local_try_penalty{background-position:center -1643px;}
    .idalgo_content_action_logo_small_local_penalty_in{background-position:center -899px;}
    .idalgo_content_action_logo_small_local_penalty_out{background-position:center -992px;}
    .idalgo_content_action_logo_small_local_conversion_in{background-position:center -868px;}
    .idalgo_content_action_logo_small_local_conversion_out{background-position:center -961px;}
    .idalgo_content_action_logo_small_local_drop_in{background-position:center -930px;}
    .idalgo_content_action_logo_small_local_drop_out{background-position:center -1023px;}
    .idalgo_content_action_logo_small_local_video{background-position:center -1426px;}
    
    .idalgo_content_action_logo_small_visitor_try{background-position:center -1054px;}
    .idalgo_content_action_logo_small_visitor_try_team{background-position:center -1519px;}
    .idalgo_content_action_logo_small_visitor_try_penalty{background-position:center -1612px;}
    .idalgo_content_action_logo_small_visitor_penalty_in{background-position:center -1116px;}
    .idalgo_content_action_logo_small_visitor_penalty_out{background-position:center -1209px;}
    .idalgo_content_action_logo_small_visitor_conversion_in{background-position:center -1085px;}
    .idalgo_content_action_logo_small_visitor_conversion_out{background-position:center -1178px;}
    .idalgo_content_action_logo_small_visitor_drop_in{background-position:center -1147px;}
    .idalgo_content_action_logo_small_visitor_drop_out{background-position:center -1240px;}
    .idalgo_content_action_logo_small_visitor_video{background-position:center -1457px;}

    .idalgo_content_action_logo_small_yellow{background-position:center -1271px;}
    .idalgo_content_action_logo_small_yellowred{background-position:center -1333px;}
    .idalgo_content_action_logo_small_red{background-position:center -1302px;}
    .idalgo_content_action_logo_small_substitute{background-position:center -1364px;}

    .idalgo_content_action_logo_try{background-position:center 0px;}
    .idalgo_content_action_logo_essai{background-position:center -341px;}
    .idalgo_content_action_logo_point{background-position:center 0px;}
    .idalgo_content_action_logo_try_collective{background-position:center -1488px;}
    .idalgo_content_action_logo_try_penalty{background-position:center -1581px;}
    .idalgo_content_action_logo_conversion_in{background-position:center -372px;}
    .idalgo_content_action_logo_penalite_in{background-position:center -403px;}
    .idalgo_content_action_logo_penalite_out{background-position:center -496px;}
    .idalgo_content_action_logo_yellow{background-position:center -124px;}
    .idalgo_content_action_logo_yellowred{background-position:center -186px;}
    .idalgo_content_action_logo_red{background-position:center -155px;}
    .idalgo_content_action_logo_drop_in{background-position:center -434px;}
    .idalgo_content_action_logo_drop_out{background-position:center -527px;}
    .idalgo_content_action_logo_substitute{background-position:center -217px;}
    .idalgo_content_action_logo_substitute_local{background-position:center -217px;}
    .idalgo_content_action_logo_substitute_visitor{background-position:center -248px;}
    
    .idalgo_content_action_logo_transformation_in {background-position: center -285px}
    .idalgo_content_action_logo_transformation_out {background-position: center -317px}

    .idalgo_bonus_try{background-position:center -1674px;}
    .idalgo_bonus_defense{background-position:center -1705px;}
    
    .idalgo_icon_rugby_sport{background-position:center -8px}

    .idalgo_icon_rugby_sport_on {background-position:center -1867px}
    .idalgo_icon_rugby_sport_off{background-position:center -1927px}

/* Module/Pattern/CSS/Responsive480/Standing.css ******************************************/
div.div_idalgo_content_standing_content_content{position:relative;display:block}
div.div_idalgo_content_standing_content_content_standing{position:relative}

div.div_idalgo_content_standing_line{margin-right:115px}

    span.span_idalgo_content_standing_position{left:0;width:20px;color:#949494}
    div.div_idalgo_content_standing_pos{left:20px;width:8px;}
    span.span_idalgo_content_standing_logo{left:30px;width:20px}
            img.img_idalgo_content_standing_logo{
                width:15px;height:15px;
                top:50%;margin-top:-8px;
                left:50%;margin-left: -8px;
            }
div.div_idalgo_content_standing_line div.div_idalgo_content_standing_name{left:50px}

    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_points,
    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_percent{left:50px;width:40px}
    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_played{left:90px;width:25px}

    div.div_idalgo_content_standing_line div.div_idalgo_content_standing_pos,
    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_win,
    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_draw,
    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_lost,
    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_for,
    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_against,
    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_dif,
    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_form{display:none}

    div.div_idalgo_content_standing_line span.span_idalgo_content_standing_next_global{display:none}
    span.span_idalgo_content_standing_last_global{left:175px;margin-left:100%;width:20px}
        span.span_idalgo_content_standing_last {
            position:absolute;display:block;
            top:50%;left:50%;
            width:15px;height:15px;
            margin-top:-8px;margin-left:-8px;
            background-position: center -2115px;
        }

    li.li_idalgo_content_standing_selected span.span_idalgo_content_standing_last{background-position: center -2674px}

/* List Team (frize) */
ul.ul_idalgo_content_standing_group_list_team{height:1px}
ul.ul_idalgo_content_standing_group_list_team_small li.li_idalgo_content_result_group_list_team{height:1px}
a.a_idalgo_content_standing_group_list_team{color:transparent}

li.li_idalgo_content_standing_group_list_team{height:2em}

/* Module/Rugby/CSS/Responsive480/Standing.css ********************************************/
/* Standing - Responsive 480 */
div.div_idalgo_content_standing_content_content_button,
div.div_idalgo_content_rugby_standing span.span_idalgo_content_standing_bo,
div.div_idalgo_content_rugby_standing span.span_idalgo_content_standing_bd{display:none;}

/* Customer/Rugbyrama/Rugby/Common/CSS/Main.css *******************************************/
div#article-texte div.div_idalgo_container {font-size:1em}

div#idalgo-1 div.div_idalgo_widget{z-index :4}
div#idalgo-2 div.div_idalgo_widget{z-index :3}
div#idalgo-3 div.div_idalgo_widget{z-index :2}
div#idalgo-4 div.div_idalgo_widget{z-index :1}

/*********************************** STRUCTURE GENERALE ***********************************/
body{
    margin: 0;
}
div.div_idalgo_content_full{
    display:flex;
    flex-direction:row
}
div.div_idalgo_content{
    flex:1 1 auto
}
div.div_idalgo_aside{
    flex:0 0 310px;
    margin-left: 20px;
}
div.div_idalgo_aside > div{
    margin-bottom:20px;
}

h1.h1_idalgo span.h1_idalgo_title{font-size:0.7em}

span.span_idalgo_widget_statistic_podium_name,
span.span_idalgo_widget_statistic_podium_team_name{font-family:open sans, sans-serif}

.article-full__body-content .div_idalgo_container ul{
    list-style-type:none;
    padding:0;
    margin:0
}
.article-full__body-content .div_idalgo_container ul > li {
    list-style-type:none
}

/***** Page stats - todo remove ****/
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_goal,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_point,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_try{
    margin-bottom:80px
}
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_goal .idalgo_title_format3,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_point .idalgo_title_format3,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_try .idalgo_title_format3{
    margin-bottom:0
}
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_goal .idalgo_title_format3 img,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_point .idalgo_title_format3 img,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_try .idalgo_title_format3 img,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_goal .idalgo_title_format3 h3,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_point .idalgo_title_format3 h3,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_try .idalgo_title_format3 h3{
    display:none
}
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_goal .idalgo_title_format3 h2,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_point .idalgo_title_format3 h2,
div.div_idalgo_content div.div_idalgo_widget_rugby_statistic_player_try .idalgo_title_format3 h2{
    text-align:center;
    margin:0
}