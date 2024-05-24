function loadCMP(){
	raCMPObject = window.top.__cmp;
	if(window.self!=window.top){
		current = window.parent;
		let i=0;
		while(current!=window.top){
			if (typeof current.__cmp === 'undefined'){
				current=current.parent;
				i++
				if(i>20){
					break;
				}
			}else{
				var raCMPObject = current.__cmp;
				break;
			}
		}
		if (typeof raCMPObject === 'undefined') {
			var raCMPObject = current.__cmp;
		}
	}else{
		if (typeof __cmp != "undefined") {
			raCMPObject = __cmp;
		}
	}

	if (typeof raCMPObject === 'undefined') {
			raCMPObject = window.top.__tcfapi;
			if(window.self!=window.top){
				current = window.parent;
				let i=0;
				while(current!=window.top){
					if (typeof current.__tcfapi === 'undefined'){
						current=current.parent;
						i++
						if(i>20){
							break;
						}
					}else{
						var raCMPObject = current.__tcfapi;
						break;
					}
				}
				if (typeof raCMPObject === 'undefined') {
					var raCMPObject = current.__tcfapi;
				}
			}else{
				if (typeof __tcfapi != "undefined") {
					raCMPObject = __tcfapi;
				}
			}
		
			if (typeof raCMPObject === 'undefined') {
				//DONOTHING
			}else{
				window.top.__tcfapi('getTCData', 2, (tcData, success) => { if(success) { 
					var raEuconsent = tcData.tcString; 
					if(raEuconsent!="" && raEuconsent != null){
						let raSyncIframe = document.createElement('iframe');
						raSyncIframe.width=0;
						raSyncIframe.height=0;
						raSyncIframe.frameBorder=0;
						raSyncIframe.scrolling='no';
						raSyncIframe.src='https://sync.richaudience.com/b3adde1f4bbb31c3485562d6e3ddceb4/?consentString='+raEuconsent+"&st=2";
						document.body.appendChild(raSyncIframe);						
					}
					
				}});
			}
	}else{
		raCMPObject('getConsentData', null, ;
		
		function raPrepareCall(cmpObject){ 
			if (typeof cmpObject.consentData === 'undefined') {
				console.log("UNDEFINED");			
			}else{
				var raEuconsent = cmpObject.consentData;
			
				if(raEuconsent!="" && raEuconsent != null){
					let raSyncIframe = document.createElement('iframe');
					raSyncIframe.width=0;
					raSyncIframe.height=0;
					raSyncIframe.frameBorder=0;
					raSyncIframe.scrolling='no';
					raSyncIframe.src='https://sync.richaudience.com/b3adde1f4bbb31c3485562d6e3ddceb4/?consentString='+raEuconsent+"&st=1";
					document.body.appendChild(raSyncIframe);
				}	 
			}
		}
	}	
}

loadCMP();


