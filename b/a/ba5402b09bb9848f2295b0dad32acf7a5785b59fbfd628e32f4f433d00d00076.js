//ver=2
function getVars( query ) {
	var vars = [];
	if (!query) { return false; }
	query = query.replace(/^\?/g,"");
	var pairs = query.split("&");

	for (var i = 0; i < pairs.length; i++) {
		var pair = pairs[i].toString().split("=");
		if (pair.length) {
			pair[1] = ( pair[1] ) ? decodeURIComponent(pair[1]) : null;
			pair[0] = decodeURIComponent(pair[0]);
			if (pair[1] && (pair[0].indexOf("cthref") === 0 || pair[0].indexOf("url") === 0 || pair[0].indexOf("statichost") === 0) && pair[1].indexOf("//") === 0) {
				pair[1] = location.protocol + pair[1];
			}

			vars[pair[0]] = pair[1];
		}
	}
	return vars;
}

function extractBlock( id , query ) {
	//alert(id);
	var re = new RegExp("&"+id+"&(.*?)($|(&[\\w]{1}&))");
	if (query.match(re)) { return getVars(query.match(re)[1].toString()); }

	return false;
}

function applyParams( str ) {
	if (!str) { return; }
	var bs = []; var be = document.getElementsByTagName("body")[0]; var b = extractBlock("b",str);
	for (var i in b) {
		if (b.hasOwnProperty(i)) {
			try{ be.style[i] = b[i]; } catch(e) {}
		}
	}

	if (HttpGetVars.title) {
		document.title = HttpGetVars.title;
	}

	try { if (HttpGetVars.target || HttpGetVars.target.length > 0) {
		var head = document.getElementsByTagName('head')[0],
			baseNodes = document.getElementsByTagName('base');

		var base = (baseNodes.length !== 0) ? baseNodes[0] : head.appendChild(document.createElement('base'));
		base.target = HttpGetVars.target;
	} } catch(ex) {}
}

function parseVars( content, vars ) {
	if (typeof vars != "object") { return content; }

	for (var i in vars) {
		if (vars.hasOwnProperty(i)) {
			var reStr = "\\["+i+"\\]";
			var re = new RegExp( reStr, "g" );
			content = content.replace(re,vars[i]);

			var ereStr = "\\["+i+"\.e\\]";
			var ere = new RegExp( ereStr, "g" );
			content = content.replace(ere, encodeURIComponent(vars[i]));
		}
	}
	if (vars.gdpr) {
		content = content.replace(/\$\{GDPR\}/g, vars.gdpr);
	}
	if (vars.consent) {
		content = content.replace(/\$\{GDPR_CONSENT_\d+\}/g, vars.consent);
	}
	return content;
}

var HttpGetVars = getVars(location.search);
rmal\",\n    \"text-align\" : \"center\",\n    \"margin\" : \"20px auto 10px\",\n    \"background\" : \"#f2f2f2\",\n    \"padding-top\" : \"25px\",\n    \"padding-bottom\" : \"20px\"\n  }\n}","bR":[{"goal":7558052,"campaign":7558051,"target":"_blank","banner":{"id":755808800,"type":"HTML","width":300,"height":250,"target":null,"location":"[statichost]/banners/7558051/"},"measures":[],"urls":{"7558087":"https://ad.adverticum.net/C/7347250/7558052/755808800/1707499314641/firstclass.hu/7558087/?u=0000000"},"tracking":"https://ad.adverticum.net/t/?p=1707499314641&b=755808800&c&d=1&u=0000000&g=7558052&h=firstclass.hu&z=7347250","served":[1690800,1902958,1902989,7347250,7558051,7558052,7558087,755808800],"inscreen":false}],"dP":{"id":1587377,"params":null,"measures":[3377665]}},"7347260":{"zD":"{\n  \"title\" : \"Hirdetés\",\n  \"titleOrientation\" : \"TOP\",\n  \"titleStyle\" : {\n    \"color\" : \"#C0C0C0\",\n    \"font-weight\" : \"normal\",\n    \"font-style\" : \"normal\",\n    \"text-align\" : \"center\",\n    \"font-size\" : \"9px\",\n    \"line-height\" : \"15px\"\n  },\n  \"titleLinkTarget\" : \"_blank\",\n  \"style\" : {\n    \"font-weight\" : \"normal\",\n    \"font-style\" : \"normal\",\n    \"text-align\" : \"center\",\n    \"margin\" : \"20px auto 10px\"\n  }\n}","bR":[{"goal":7385713,"campaign":6356863,"target":"_blank","banner":{"id":737969400,"type":"DOCUMENT","width":640,"height":360,"target":null,"params":{},"location":"[statichost]/banners/6356863/","jsonSource":"[\"div\",[\"script\",{\"async\":\"async\",\"src\":\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8962558862962174\"}],\"\\n\\n\",[\"ins\",{\"class\":\"adsbygoogle\",\"style\":\"display:inline-block;width:640px;height:360px\",\"data-ad-client\":\"ca-pub-8962558862962174\",\"data-ad-slot\":\"8309850181\"}],\"\\n\",[\"script\",\"\\n     (adsbygoogle = window.adsbygoogle || []).push({});\\n\"],\"\\n\"]"},"measures":[],"urls":{"6356864":"https://ad.adverticum.net/C/7347260/7385713/737969400/1707499314641/firstclass.hu/6356864/?u=0000000"},"tracking":"https://ad.adverticum.net/t/?p=1707499314641&b=737969400&c&d=1&u=0000000&g=7385713&h=firstclass.hu&z=7347260","served":[1727072,6356863,6356864,7347260,7385713,737969400],"inscreen":false}],"dP":{"id":1587377,"params":null,"measures":[3377665]}}},"iZ":[],"mZ":{"7415697":[3377665],"7347218":[3377665],"7347219":[3377665],"7415734":[3377665]},"mR":{"3377665":{"t":"E","a":"VI","tF":1}},"test":{"s":1707499340747,"d":{}},"session":{"s":1707499340747},"cD":{"u":"0000000","h":""}});