var Profile = {} || new Object();
Profile = {
    data : null,
    siteId : 4,
	trackUri: 'ng.virgul.com',
	token:'',
	func:null,
	userId:'',
    init : function(cfg) {
        if(cfg&&cfg.siteId) Profile.siteId = cfg.siteId;
		if(cfg&&cfg.trackUri) Profile.trackUri=cfg.trackUri;
		var ck=Profile.cookie('vnetusrcokie');
		var ind=ck.indexOf('__');
		if(ind!=-1) Profile.userId=ck.substring(ind+2);
     },
	 cookie: function(u,d,e) {if(typeof(d)!="undefined"){if(e){var b=new Date();b.setTime(b.getTime()+(e*24*60*60*1000));var a="; expires="+b.toGMTString()}else{var a=""}document.cookie=u+"="+d+a+"; path=/"}else{var nameEQ = u + '=';var ca = document.cookie.split(';');for(var i=0;i < ca.length;i++) {var c = ca[i];while (c.charAt(0)==' ') c = c.substring(1,c.length);if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);}return '';}},
    userCookie:function(ct){
	   Profile.userId=ct.noktaId;
	   Profile.cookie('vnetusrcokie',Profile.token+'__'+Profile.userId,30);
	   if(Profile.func) Profile.func(); },
 	vnetCookieModifierWithCheck: function(){
		var accessToken = Profile.data.authResponse.accessToken != undefined ? Profile.data.authResponse.accessToken : '';
		try{
			var ck=Profile.cookie('vnetusrcokie');
			var ind=ck.indexOf('__');
			if(ind==-1||ck.substring(0,ind)!=accessToken){
				$('body').append('<scr'+'ipt id="vrglcookimod" type="text/javascript" async="true" src="https://'+Profile.trackUri
					+'/push.php?call=Profile.userCookie&siteId='+Profile.siteId+'&accessToken='+accessToken+'"></scri'+'pt>');
				Profile.token=accessToken;
			} else {
				Profile.userId=ck.substring(ind+2);
				if(Profile.func) Profile.func();
			}
		}catch(e){
			//console.log(e.toString());
		}
	},
    createProxyCookie : function(_data, _fn) {
        Profile.data = _data;        
		if (_fn && typeof(_fn) === "function") { Profile.func=_fn; }	
		Profile.vnetCookieModifierWithCheck();	
    },
    createProxyCookieWithCheck : function(_data, _fn) {
        Profile.data = _data;        
		if (_fn && typeof(_fn) === "function") { Profile.func=_fn; }		
		Profile.vnetCookieModifierWithCheck();	
    }
};
 