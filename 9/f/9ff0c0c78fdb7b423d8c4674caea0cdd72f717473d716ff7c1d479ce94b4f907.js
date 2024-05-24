var Eventos = {
	LOADED: "loaded",
	getSingleton: (function() { 
		var singleton;
		var listeners = {};
		return function() {
			if (!singleton) {
				singleton = {
					addEventListener:function(type, callback, scope) {
						var args = [];
						var numOfArgs = arguments.length;
						for(var i=0; i<numOfArgs; i++){
							args.push(arguments[i]);
						}		
						args = args.length > 3 ? args.splice(3, args.length-1) : [];
						if(typeof listeners[type] != "undefined") {
							listeners[type].push({scope:scope, callback:callback, args:args});
						} else {
							listeners[type] = [{scope:scope, callback:callback, args:args}];
						}
					},
					dispatchEventListener:function(type, target) {
						var numOfListeners = 0;
						var event = {
							type:type,
							target:target
						};
						var args = [];
						var numOfArgs = arguments.length;
						for(var i=0; i<numOfArgs; i++){
							args.push(arguments[i]);
						};				
						args = args.length > 2 ? args.splice(2, args.length-1) : [];
						args = [event].concat(args);
						if(typeof listeners[type] != "undefined") {
							var numOfCallbacks = listeners[type].length;
							for(var i=0; i<numOfCallbacks; i++) {
								var listener = listeners[type][i];
								if(listener && listener.callback) {					
									var concatArgs = args.concat(listener.args);
									listener.callback.apply(listener.scope, concatArgs);
									numOfListeners += 1;
								}
							}
						}
					}
          		}
        	}
        	return singleton;
		};
	}())
};