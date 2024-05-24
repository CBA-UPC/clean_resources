function addDataCollector(){
	var dt=new Date();
	var loc=location.href;
	var cat='anasayfa';
	var subcat='';
	if(loc.indexOf('/haber/')!=-1)cat='haber';
	else if(loc.indexOf('/liste/')!=-1)cat='liste';
	else if(loc.indexOf('/filmler/vizyondaki')!=-1)cat='vizyon';
	else if(loc.indexOf('/filmler/pekyakinda')!=-1)cat='yakinda';
	else if(loc.indexOf('/sinemasalonlari/')!=-1)cat='salon';
	else if(loc.indexOf('/fragman')!=-1)cat='fragman';
	else if(loc.indexOf('/en-iyi-filmler')!=-1)cat='en iyi filmler';
	else if(loc.indexOf('/elestiriler/')!=-1)cat='elestiri';
	else if(loc.indexOf('/diziler/')!=-1)cat='dizi';
	else if(loc.indexOf('/sanatci/')!=-1)cat='sanatci';
	else if(loc.indexOf('/film/')!=-1){
		cat='film';
		try{
			$('span[itemprop="genre"]').each(function(f){subcat+=','+$.trim($(this).text().toLowerCase());});
			if(subcat.length>0) subcat=subcat.substring(1);
		}catch(exo){
		}
	}else if(loc.indexOf('/dizi/')!=-1){
		cat='dizi';
		try{
			$('span[itemprop="genre"]').each(function(f){subcat+=','+$.trim($(this).text().toLowerCase());});
			if(subcat.length>0) subcat=subcat.substring(1);
		}catch(exo){
		}
	}
	
	var tm='midnight';
	if(dt.getHours()>17)tm='evening';
	else if(dt.getHours()>13)tm='afternoon';
	else if(dt.getHours()>11)tm='lunch';
	else if(dt.getHours()>7)tm='morning';
		var simg=document.createElement('IMG');
	simg.style.display='none';
	simg.src='https://samsungturkey.demdex.net/event?c_source=desktop&c_url='+encodeURIComponent(loc)+'&c_site=sinemalar&c_title='+encodeURIComponent(document.title)+'&c_category='+encodeURIComponent(cat)+'&c_subcategory='+encodeURIComponent(subcat)+'&c_day='+['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][dt.getDay()]+'&c_time='+tm;
	document.getElementsByTagName('body')[0].appendChild(simg);
}
addDataCollector();


for(var ix=1;ix<3;ix++)
	setTimeout(function(){if(typeof virgulPageAds.zones[57]!=="undefined")$($('.ep-adWrapper.ep-absolute video')).css('background-color','transparent');},2000*ix);

function catgg(){
var tpsm='';
if (document.featurePolicy.allowsFeature('attribution-reporting')) {
  tpsm+='atr:';
}

if ('runAdAuction' in navigator) {
  tpsm+='raa:';
}

if ('browsingTopics' in document) {
  tpsm+='bt:';
}

if ('HTMLFencedFrameElement' in window) {
  tpsm+='hffe:';
}

if ('sharedStorage' in window) {
  tpsm+='ss:';
}

if (window?.sharedStorage?.selectURL instanceof Function) {
  tpsm+='sss:';
}
if(tpsm=='')return;
var fsg=document.createElement('IMG');
fsg.style.display='none';
fsg.setAttribute('src','https://ng.virgul.com/tck/imp/639648fbe4b0c485ce2e6b8a?r=52470&scm=https&l=&t='+tpsm+'&cs='+new Date().getTime());
document.getElementsByTagName('BODY')[0].appendChild(fsg);
}
catgg();
if(location.href.indexOf('282653/buyuk-kacis')!=-1){
window.removePageskin=function () {};
window.loadPlayerAds=function(){return "{}";}
	$('.virgul-ad').remove();
window.appintv=setInterval(function(){
	if($('#newAdSkinClickUrl').html().length==0){
		$('.virgul-ad').remove();
		displayPageskin({
    "type": "pageskin",
    "pageskinType": "banner",
    "adId": "648054cae4b06e26996559de",
    "click": "https://ng.virgul.com/ct/648054cae4b06e26996559de?r=46@sinemalar_video_izlenme@sinemalar:video_izlenme&l=&info=&cs=1686210036761",
    "color": "ffffff",
    "resource": "46@sinemalar_video_izlenme@sinemalar:video_izlenme",
    "view": "<iframe allow=\"autoplay; geolocation; microphone; camera; gyroscope; accelerometer\" style=\"left:5px;height:100px;position:absolute;width:100px;z-index:2;top:120px\" id=\"a648054cae4b06e26996559de\" width=\"0\" height=\"0\" scrolling=\"no\" frameborder=\"0\" allowtransparency=\"1\" src=\"https://ng2.virgul.com/adview?a=648054cae4b06e26996559de&t=pageskin:46&r=46@sinemalar_video_izlenme@sinemalar:video_izlenme&l=&mt=1686210035504&vmn=648054cae4b06e26996559de___461800674750&ctt="+new Date().getTime()+"\"></iframe>",
    "background": "https://static.virgul.com/opt/ng/banner_648054cae4b06e26996559de_m171336_v2",
    "rightBackground": "",
    "left": "660",
    "mute": "0",
    "loop": false,
    "large": false,
    "noHead": false,
    "removeSelector": "",
    "secondClick": "https://ng.virgul.com/ct/648054cae4b06e26996559de?r=46@sinemalar_video_izlenme@sinemalar:video_izlenme&l=&info=&cs=1686210036761"
});
PLAYER_OBJECT.skipAd();
clearInterval(window.appintv);
	}
},1000);
}
window.addCssRules=function (cssRules, overRideExisting) {
	if (typeof overRideExisting == 'undefined')
		overRideExisting = false;
	var ruleAdd = null;
	var xb = document.styleSheets;
	for (var i = 0; i < xb.length; i++) {
		try {
			if (xb[i].ownerNode != null && xb[i].ownerNode.getAttribute('id') != null && xb[i].ownerNode.getAttribute('id') == 'virgulstyle') {
				ruleAdd = xb[i];
				break;
			}
		} catch (exo) {}
	}
	if(!ruleAdd){
		ruleAdd=document.createElement('STYLE');
		ruleAdd.setAttribute('id','virgulstyle');
		document.getElementsByTagName('BODY')[0].appendChild(ruleAdd);
		addCssRules(cssRules,overRideExisting);
		return;
	}
	var cssruleelm = (ruleAdd || document.styleSheets[document.styleSheets.length - 1]);
	if (typeof cssruleelm.insertRule != "undefined") {
		for (csr in cssRules) {
			if (overRideExisting) {
				for (var y = 0; y < cssruleelm.rules.length; y++) {
					if (cssruleelm.rules[y].selectorText == csr) {
						cssruleelm.removeRule(y--);
					}
				}
			}
			cssruleelm.insertRule(csr + '{' + cssRules[csr] + '}');
		}
	} else {
		for (csr in cssRules)
			cssruleelm.addRule(csr, cssRules[csr]);
	}
};
window.addCssRules({'#left-ad,#right-ad':'overflow:hidden'});