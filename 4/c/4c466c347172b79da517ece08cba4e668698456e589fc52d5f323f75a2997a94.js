(function(){
	
	var debug = false;
	
	var addListener = function(el , name, fn, useCapture){
		if(el.attachEvent){
		
		   el.attachEvent("on" + name, fn);

	    } else if(el.addEventListener){
	    	
	    	el.addEventListener(name, fn, !!useCapture);
	    	
	    } else {
	    	el["on" + name] = fn
	    }
		
	}
	
	var ready = function(fn) {
		if(!document.attachEvent){
			document.readyState != 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);
		} else {
			document.readyState == "complete" ? fn() : document.attachEvent('onreadystatechange', ;
		}
	}
	
	var URLEdit = function(url){
		
		if(!url) url = location.href;
		
		var getUrlParams = function(params) {
			params = params.split("?");
			params = params.length>1 ? params[1] : params[0];
			params = params.split("&");
			if(params.length==1 && !params[0].length) return [];
			var ret = [];
			for(var i=0;i<params.length;i++){
				var params1 = params[i];
				params1 = params1.split("=");
				if(params1.length>1) params1 = [decodeURIComponent(params1[0]), decodeURIComponent(params1.slice(1).join("="))];
				else params1 = [decodeURIComponent(params1[0])];
				params[i] = params1;
			}
			return params;
		}
		
		var encodeParams = function(p){
			for(var i=0;i<p.length;i++){
				var p1 = p[i];
				var p2 = [encodeURIComponent(p1[0])];
				if(p1.length>1) p2.push(encodeURIComponent(p1[1]));
				p[i] = p2.join("=");
			}
			return p.join("&");
		}
		
		
		var parser = document.createElement('a');
		parser.setAttribute("href", url);
		
		this.protocol = parser.protocol.substring(0, parser.protocol.length -1);
		this.hostname = parser.hostname;
		this.port = parser.port;
		this.pathname = parser.pathname;
		if(this.pathname && this.pathname.length && this.pathname[0]!="/") this.pathname = "/"+this.pathname;
		this.hash = parser.hash.substring(1);
		this.params = getUrlParams(parser.search);
		
		me = this;
		
		this.param = function(name, val){
			var found = false;
			for(var i=0;i<this.params.length;i++){
				var param1 = this.params[i];
				if(param1[0]==name){ param1[1] = val; found = true; }
			}
			if(!found) this.params.push([name, val]);
		}
		
		this.toString = function(){
			var ret = me.protocol + "://" + me.hostname;
			if(me.port && me.port!="80" && me.port!="443" && me.port!="0") ret += ":" + me.port;
			ret += me.pathname;
			if(me.params){
				var params1 = encodeParams(me.params);
				if(params1.length > 0) ret += "?" + params1;
			}
			if(me.hash) ret += "#" + me.hash;
			return ret;
		}
		
	}
	
	var LazyElements = function(args){
		
		this.elementsStart = [];
		this.callbacks = [];
		this.overscroll = 0;
		this.needsFocus = false;
		var debug = false;
		var me = this;
		var skip = args && args.skip ? args.skip : 0;

		var findPos = function(obj) {
			var none = 1000000000;
			if(!obj) return none;
			var curtop = 0;
			if(obj.style.display == "none") return none;
			if (obj.offsetParent) {
				do {
					if(obj.style.display == "none") return none;
					curtop += obj.offsetTop;
				} while (obj = obj.offsetParent);
			}
			return curtop;
		}
		
		var binarySearch = function(comparator, filter) {
		  var low = 0, high = this.length - 1,
		      i, comparison;
		  while (comparator(this[i]) != 0 && low <= high) {
		    i = Math.floor((low + high) / 2);
		    comparison = comparator(this[i]);
		    if (comparison < 0) { low = i + 1; continue; };
		    if (comparison > 0) { high = i - 1; continue; };
		  }
		  var ret = [];
		  i=low;
		  while(i<=high && comparator(this[i]) == 0){ 
			  if(filter(this[i])){
				  ret.push(i);
			  }
			  i++;
		  }
		  return ret;
		};
		
		var getScroll = function(win){
			if(!win) win = window; var doc = window.document;
		    return {x: win.pageXOffset || doc.scrollLeft, y: win.pageYOffset || doc.scrollTop};
		};
		
		var getScreenBounds = function(){
			var scroll = getScroll();
			scroll = scroll.y || 0;
			var min1 = scroll - me.overscroll;
			var max1 = scroll + window.innerHeight + me.overscroll;
			return [min1, max1];
		}
		
		this.isVisible = function(el1){
			var visible = true;
			while(el1){
				if(el1.style.display == "none"){visible = false; break} 
				el1 = el1.offsetParent;
			}
			return visible;
		}
		
		this.sort = function(){
			this.elementsStart.sort(;
		}
		
		this.addElements = function(els, onlyVisible){
			var els1 = [];
			for(var i=0;i<els.length;i++){
				var el1 = els[i];
				if(this.isVisible(el1)){
					if(onlyVisible) el1.__lazyOnlyVisible = true;
					els1.push(el1);
				}
			}
			this.elementsStart = this.elementsStart.concat(els1);
			this.sort();
			this.checkAppear();
		}
		
		this.addAppearCallback = 		
		this.setMininterval = 		
		this.setNeedsFocus = function(needsFocus){
			this.needsFocus = needsFocus;
			var me = this;
			if(needsFocus && !me.__onFocusCB){
				me.__onFocusCB = addListener(document, "focus", function(){
					me.checkAppear();
				});
			}
		}

		this.setOverscroll = function(overscroll){
			var before = this.overscroll || 0;
			this.overscroll = overscroll;
			if(this.lastBounds){
				this.lastBounds[0]+=before;
				this.lastBounds[1]-=before;
				this.lastBounds[0]-=overscroll;
				this.lastBounds[1]+=overscroll;
			}
		}
		
		this.checkAppear = function(){
			if(skip>0) return;
			if(!this.lastBounds) this.lastBounds = getScreenBounds();
			if(!this.min) return;
			var now = new Date().getTime();
			if(this.last && (now-this.last)<this.min){
				var me = this;
				if(debug) console.log("timeout", this.timeout!==undefined);
				if(this.timeout===undefined){
					if(debug) console.log("aspetto", this.last+this.min-now);
					this.timeout = setTimeout( this.last+this.min-now);
				}
				return;
			}
			delete this.timeout;
			this.last = now;
			
			if(debug) console.log("checkAppear", new Date().toString());
			if(this.needsFocus && (document.hasFocus && !document.hasFocus() )) return;
			
			var bounds = getScreenBounds();
			var min1 = bounds[0];
			var max1 = bounds[1];
			var lastBounds = this.lastBounds;
			this.lastBounds = [min1, max1];
			if(lastBounds && !isNaN(lastBounds[0]) && lastBounds[0]<min1) min1 = lastBounds[0];
			if(lastBounds && !isNaN(lastBounds[1]) && lastBounds[1]>max1) max1 = lastBounds[1];
			
			var elementsVisibile = []; var elementsHidden = [];
			
			this.sort();
			var aboveElements = binarySearch.call(this.elementsStart,  function(el1){
				var pos1 = findPos(el1);
				if(el1.__lazyOnlyVisible===true){
					return pos1 >= min1 && pos1 <= max1;
				}
				else return pos1 <= max1; 
			}); 
			var removedEls = [];
			for(var i=aboveElements.length-1;i>=0;i--){
				var removed = this.elementsStart.splice(aboveElements[i], 1)[0];
				removedEls.unshift(removed);
			}
			for(var i=0;i<removedEls.length;i++){
				var removed = removedEls[i];
				for(var j=0; j<this.callbacks.length; j++){
					var cb = this.callbacks[j];
					try { cb(removed); } catch(e){};
				}
			}
		}
		
		var addListener = function(el , name, fn){
			if(el.attachEvent){

			 return el.attachEvent("on" + name, fn);

			} else if(el.addEventListener){

				return el.addEventListener(name, fn, 0);

			} else {
				el["on" + name] = fn
			}
		}
		
		var onScroll= function(cb, interval){
			var scrolled = false;
			
			if(!onScroll.callbacks){
				onScroll.callbacks = [];
				
				addListener(window, "scroll", function(){
					if(skip>0) skip--;
					else scrolled = true;
				});
				
				var last = null;
				var interval = interval || 300;
				var scrollCallbacks = function(){
					if(scrolled && (last == null || new Date().getTime() > (last + interval))){
						last = new Date().getTime();
						for(var i=onScroll.callbacks.length-1;i>=0;i--){
							var cb = onScroll.callbacks[i];
							try { cb(); } catch(e){}
						}
						scrolled = false;
					}
					setTimeout(scrollCallbacks, interval);
				}
				setTimeout(scrollCallbacks, interval);
			}
			onScroll.callbacks.push(cb);
			
		}
		this.onScroll = onScroll;
		
		this.checkOnScroll = 		
	};

	var fillCache = function(mapping, cache){
		if(!cache.mappingArray){
			if(mapping instanceof Array){	
				cache.mappingArray = mapping;
			} else {
				var arr = [];
				for(var k in mapping){
					if(mapping[k] instanceof Array) arr.push([k].concat(mapping[k]));
					else arr.push([k,mapping[k]]);
				}
				cache.mappingArray = arr;
			}
		}
		if(!cache.type){
			cache.type = {};
			for(var i=0;i<cache.mappingArray.length;i++){
				var m1 = cache.mappingArray[i];
				if(m1[2]) cache.type[""+i] = m1[2];
				else cache.type[""+i] = "link";
			}			
		}
		if(!cache.args){
			cache.args = {};
			for(var i=0;i<cache.mappingArray.length;i++){
				var m1 = cache.mappingArray[i];
				cache.args[""+i] = m1.slice(3);
			}			
		}
		if(!cache.mapping){
			cache.mapping = {};
			for(var i=0;i<cache.mappingArray.length;i++){
				var m1 = cache.mappingArray[i];
				var selectors = m1[1];
				var elements = document.querySelectorAll(selectors);
				if(!elements) elements = [];
				var args = cache.args[""+i];
				if(args && args[0] && args[0].reset){
					var elements1 = []; var elements2 = [];
					for(var j=0;j<elements.length;j++){
						var el1 = elements[j];
						var el2 = elements[(j+1)%elements.length];
						elements2.push(el1);
						if(args[0].reset(el1,el2)){
							elements1.push(elements2); elements2 = [];
						}
					}
					elements1.push(elements2);
					elements = elements1;
				} else elements = [elements];
				cache.mapping[""+i] = elements;
			}
		}
	}
	
	var is = function(el, elements){
		for(var i=0;i<elements.length;i++){
			var res1 = elements[i];
			if(res1 === el) return (i+1);
		}
		return 0;
	}

	var getRefParameter = function(el, mapping, cache, type){
		fillCache(mapping, cache);
		for(var i=0;i<cache.mappingArray.length;i++){
			var ma1 = cache.mappingArray[i];
			var k = ma1[0];
			if(type && (!ma1[2] || ma1[2]!=type)) continue;
			
			var elements1 = cache.mapping[""+i];
			for(var j=0;j<elements1.length;j++){
				var elements = elements1[j];
				var idx = is(el, elements);
				if(elements && idx){
					return (elements.length > 1 || window.refAnchors===false) ? {ref: k, refIdx: ""+i, idx: idx} : {ref: k, refIdx: i};
				}
			}
		}
		return null;
	}
	
	var conditionFulfilled = function(found, cache){
		if(!found || found.refIdx === undefined || !cache || !cache.mappingArray) return false;
		var arr1 = cache.mappingArray[found.refIdx];
		
		if(arr1[2] == "appear") var params = arr1[3];
		else if(arr1[2] == "click") var params = arr1[4];
		else return true;
		
		if(!params || !params.condition || params.condition.constructor !== Function) return true;
		else {
			try { return params.condition(); } 
			catch(e){ return false; }
		}
		
	}
	
	var checkSuffix = function(found, cache){
		if(!found || found.refIdx === undefined || !cache || !cache.mappingArray) return null;
		var arr1 = cache.mappingArray[found.refIdx];
		
		if(arr1[2] == "appear") var params = arr1[3];
		else if(arr1[2] == "click") var params = arr1[4];
		else return null;
		
		if(!params || !params.suffix || params.suffix.constructor !== Function) return null;
		else {
			try { var suff = params.suffix(); return suff; } 
			catch(e){}
		}
		return null;
	}
	
	var checkTransform = function(found, cache, el, a1){
		var args = cache.args[found.refIdx];
		var transform = null;
		if(args && args[0] && args[0].transform) transform = args[0].transform;
		if(args && args[1] && args[1].transform) transform = args[1].transform;
		if(transform) transform(found, cache, el, a1);
	}
	
	var querySelectorScoped = function(el, selector){
		var id = el.id; var hadid = true;
		if(!id){ 
			hadid = false; 
			id = "querySelectorScoped"; 
			el.setAttribute("id", id); 
		}
		selector = selector.split(",");
		for(var i=0;i<selector.length; i++) selector[i] = "#" + id + " " + selector[i];
		selector = selector.join(",");
		var ret = document.querySelectorAll(selector);
		if(!hadid) el.removeAttribute("id");
		return ret;
	}

	var addRef = function(url, refP, refA, cache){
		if(!url || !url.match(/(https?:)?\/\//)) return url;
		
		var params = null;
		if(cache && refP && cache.mappingArray && cache.mappingArray[refP.refIdx] && cache.mappingArray[refP.refIdx][3]){
			params = cache.mappingArray[refP.refIdx][3];
		}
		
		if(window.refVersion===undefined){
			refP = refP.idx && refP.ref + refP.idx || refP.ref;
			if(refA && window.refAnchors!==false) refP += "-"+refA;
			var pageType = window.pageType || window.webtrekkPageConfig && webtrekkPageConfig.pageType;
			var t=""
			if(pageType=="dettaglio_articolo" || pageType=="dettaglio_content") t="n"; 
			else if(pageType=="dettaglio_foto") t = "f";
			else if(pageType=="dettaglio_video") t = "v";
			
			refP = t + refP;
		}
		else refP = refP.ref;
		if(window.refPrefix) refP = refPrefix + refP;
		
		var pname = "ref";
		if(params && params.param) pname = params.param;
		
		var u = new URLEdit(url);
		u.param(pname,refP);
		return u.toString();
	}

	var addRefParameter = function(ev){
		var mapping = window.refMappingZone;
		if(mapping && (ev.target || ev.srcElement)){

        		var changed = false;
        		var el = ev.target || ev.srcElement;
        		var href1 = null;
        		var a1 = null;
        		var anchors = [];
        		var found = null;
        		var foundEl = null;
        		var cache = {};
				while(el){
					var href = el.nodeName.toLowerCase() == "a" ? el.getAttribute("href") : null;
					if(!href1 && href){
						
						a1 = el;
						var href1 = href;				
					}
					if(!found){
						
						var refP = getRefParameter(el, mapping, cache)
						if(refP){
							anchors = querySelectorScoped(el, "a");
							found = refP; 
							foundEl = el;
						}
						
					}
					if(href1 && found) break;
					el = el.parentElement;
				}
				if(found && cache.type[found.refIdx] == "click"){
					
					var unload = cache.args[found.refIdx] && cache.args[found.refIdx][0] && cache.args[found.refIdx][0] == "unload" || undefined;
					checkTransform(found, cache, foundEl);
					if(window.WebTrekkUtil && WebTrekkUtil.sendEvent) WebTrekkUtil.sendEvent(found.ref, undefined, undefined, unload);
					
				} else if(found && href1){
					var a1idx = null;
					for(var i=0;i<anchors.length;i++) if(anchors[i]===a1) {a1idx = (i+1); break;}
					checkTransform(found, cache, foundEl, a1);
					if(found.ref){
						a1.setAttribute("href",  addRef(href1, found, a1idx, cache) );
					}
				}
		
		}
	}
	
	var cache = {};
	
	var checkNewElements = function(){
		var mapping = window.refMappingZone;
		if(mapping){
			cache = {};
			var found = getRefParameter(document.body, mapping, cache);
			var appearKeys = [];
			for(var i=0;i<cache.mappingArray.length;i++){
				var refIdx = i+"";
				if(cache.type[refIdx]=="appear"){
					appearKeys.push(i);
				}
			}
			var newels = [];
			for(var i=0;i<appearKeys.length;i++){
				var ak1 = appearKeys[i];
				var elements1 = cache.mapping[ak1+""];
				for(var j=0;j<elements1.length;j++){
					var elements = elements1[j];
					for(var k=0;k<elements.length;k++){
						var el1 = elements[k];
						if(!el1.getAttribute("data-ctr-appear") && !el1.getAttribute("data-ctr-ref")){
							el1.setAttribute("data-ctr-ref", cache.mappingArray[ak1][0]);
							newels.push(el1);
						}
					}
				}
			}
			LazyElements.addElements(newels, true);
		}
	};
	
	ready(function(){
		addListener(document.body, "mousedown", addRefParameter, true);
	});
	
	LazyElements = new LazyElements({skip: 1})
	LazyElements.setNeedsFocus(true);
	LazyElements.setMininterval(5000);
	LazyElements.checkOnScroll(1000)
	
	LazyElements.addAppearCallback(function(el){
		el.setAttribute("data-ctr-appear", true);
		var mapping = window.refMappingZone;
		if(mapping){
			var found = getRefParameter(el, mapping, cache, "appear");
			if(conditionFulfilled(found, cache)){
				var suff = checkSuffix(found, cache);
				if(suff!=null && found.ref){
					found.ref +=suff;
				}
				checkTransform(found, cache, el);
				var name = found.ref;
				if(window.WebTrekkUtil && WebTrekkUtil.sendEvent && name) WebTrekkUtil.sendEvent(name);
			}
		}
	})
	
	addListener(window, "load", checkNewElements);
	window.refTracking = {}
	window.refTracking.checkNewElements = 

})();