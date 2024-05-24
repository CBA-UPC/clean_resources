/*
	The goa variable is the objectified version of the GET parameters that are recieved.

	To get clickTag: goa.clickTAG / goa.clickTag / goa.cthref

	<a id="clickTAG" href="" onclick="document.getElementById('clickTAG').href=goa.clickTAG">CT</a>

	To use close function: window[goa.closeFUNCTION]();

	<!-- To close primary banner is used as sidekick or if primary too -->
	<div id="close" onclick="window[goa.closeFUNCTION]();">CLOSE</div>

	<!-- To close primary banner is used as sidekick or if primary too, if closeFUNCTION is set to default ("closeFunction") -->
	<div id="close" onclick="closeFunction();">CLOSE</div>

	Of course all the above works with pure javascript too!
*/
(function () {

	window.goa = {};

	window.location.search.split('?')[1].split('&').forEach(function ( keyValue, index ) {
		var pair = keyValue.split('=');
		goa[pair[0]] = decodeURIComponent(pair[1]);
	});

	window[goa.openFUNCTION] = function () { window.top.postMessage(goa.primaryZoneID +'.open', '*'); };
	window[goa.closeFUNCTION] = function () { window.top.postMessage(goa.primaryZoneID +'.close', '*'); };
	window[goa.hideFUNCTION] = 

	window.addEventListener('message', function ( e ) {
		if (typeof window[e.data] === 'function') window[e.data]();
	});

	if (goa.measures) {

		var measureList = goa.measures;
		measureList.split(',').forEach(function ( measureName, i ) {

			window[measureName] = function ( amount ) {
				window.top.postMessage(goa.primaryZoneID +'.measure.' + measureName.replace('_', '.') + ( amount ? '(' + amount + ')' : ''), '*');
			};
		});
	}
})();
