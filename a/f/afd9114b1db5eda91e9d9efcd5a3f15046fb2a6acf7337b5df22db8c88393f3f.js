iU.prototype={locationInfo:{},sLocation:"",rd:"rd=",beacon:"/oo/nk/m.gif?",go:function(){this.setLocationInfo(),null!=document.referrer&&""!=document.referrer&&this.setReferInfo();for(var o in this.locationInfo)this.sLocation+=o+"="+encodeURIComponent(this.locationInfo[o])+"&";var t=new Image;this.rd+=Math.random(),t.src=this.beacon+this.sLocation+this.rd},setLocationInfo:function(){this.locationInfo.host=document.location.hostname,this.locationInfo.path=document.location.pathname,null!=document.location.search.substr(1)&&""!=document.location.search.substr(1)&&(this.locationInfo.query=document.location.search.substr(1))},setReferInfo:function(){var o=document.referrer.substr(0,document.referrer.indexOf("://")+3),t=document.referrer.substr(o.length,document.referrer.length),n=t.split("/"),r=n[0];if(this.locationInfo.rhost=r,this.locationInfo.rpath=t.substr(this.locationInfo.rhost.length,t.length),-1!=t.indexOf("?")){var e=t.split("?");rquery=e[1],params=rquery.split("&");for(var a=0;a<params.length;a++){var s=params[a];param=s.split("="),("q"==param[0]||"as_q"==param[0]||"p"==param[0]||"MT"==param[0])&&(sSearchWord=param[1].replace("+"," "))}}}};