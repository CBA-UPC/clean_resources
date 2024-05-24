importScripts('https://s-eu-1.pushpushgo.com/5c8f662e37cbb0000dc49dc9/worker.js');

if (self.navigator.platform !== 'iPhone') {
  var CACHE_NAME = 'pudelek-cache-v2';
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          return cache.addAll(['/']);
        })
    );
  });

  self.addEventListener('fetch', function(event) {
    if (event.request.destination !== 'font') {
      return
    }
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }

          var fetchRequest = event.request.clone();
          return fetch(fetchRequest).then(
            function(response) {
              if(!response || response.status !== 200) {
                return response;
              }

              var responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
              return response;
            }
          );
        }
      )
    );
  });
}
s = new cjs.Rectangle(0,0,84,163);


(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,200);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,2);


(lib.Image_0 = function() {
	this.initialize(img.Image_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,105);


(lib.Image_1_1 = function() {
	this.initialize(img.Image_1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,250);


(lib.flowers = function() {
	this.initialize(img.flowers);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,23);


(lib.PACK_1 = function() {
	this.initialize(img.PACK_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,315);


(lib.PACK_2 = function() {
	this.initialize(img.PACK_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,317);


(lib.PACK_3 = function() {
	this.initialize(img.PACK_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,277);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApmIAIAAv/ITNAAIAAP/g");
	mask.setTransform(61.45,51.225);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCED4F").s().p("Ao7hbQAAgOAJgKQAJgKANAAIQugmQANAAAKAJQAKAKAAAOIAJD+IxuAog");
	this.shape.setTransform(62.4987,17.3238);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB2B1D").s().p("AogF3QgKgJgBgOIgXqXQgBgOAKgKQAJgKAOgBIQrglQAOgBALAKQAKAJAAAOIAXKXQABAOgKAKQgJAKgOABIwrAlIgDAAQgMAAgJgJg");
	this.shape_1.setTransform(64.0283,63.0535);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("AomnQQgOABgJANQgJANAAATIAfNtQABATAKAMQAKANAOgBIQrglQAOAAAJgOQAKgNgBgTIgfttQAAgSgLgNQgKgNgOABg");
	this.shape_2.setTransform(63.6284,51.2276);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AocHqQgKgMgBgTIgfttQAAgTAJgNQAJgNAOgBIQrglQAOgBAKANQALANAAASIAfNtQABATgKANQgJAOgOAAIwrAlIgCAAQgNAAgJgMg");
	this.shape_3.setTransform(63.6284,51.2276);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(4.4,0,118.5,102.5), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApmIAIAAv/ITNAAIAAP/g");
	mask.setTransform(61.45,51.225);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BB2F26").ss(1.1,0,0,4).p("AjVBzIGrjl");
	this.shape.setTransform(84.725,68.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgOA5QAPgfAGgQQgGAEgFAAQgJAAgFgIQgFgGAAgSQAAgRAEgIQAGgNANAAQAPAAAFANQAEAIAAASQAAAagQAhIgHAPgAgIgTQAAAUAIAAQAKAAAAgVQAAgWgKAAQgIAAAAAXg");
	this.shape_1.setTransform(90.3,69.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgOA5IAVgvQgGAEgEAAQgKAAgGgIQgEgHAAgRQAAgRAEgIQAFgNAOAAQAOAAAHANQADAJAAARQAAAYgQAjIgIAPgAgJgTQABAUAIAAQAJAAAAgVQAAgWgJAAQgIAAgBAXg");
	this.shape_2.setTransform(83.95,69.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AgJASIAJglIAKAEIgLAjg");
	this.shape_3.setTransform(79.6,75.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgTAsQgEgIAAgRQAAgTAHgTQAEgNAMgXIAOAAIgKAVIgKAbQAGgFAFgBQAKABAGAJQADAHAAASQAAARgEAHQgFAKgOAAQgOAAgGgMgAgGAFQgCAGAAAKQAAAXAJAAQAIgBABgVQAAgMgDgFQgCgEgEAAQgFAAgCAEg");
	this.shape_4.setTransform(75.25,69.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AibBZIAAiyIE3AAIAACyg");
	this.shape_5.setTransform(82.775,69.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRA3QgHgHAAgLIABgCIAOAAQABANAIAAQAHAAACgFIABgKIAAgSQgFAMgJAAQgVAAAAgrQAAgSADgKQAEgQAOAAQAIAAAGAMIAAgLIAQAAIAABaQAAAQgFAHQgHAHgOAAQgLAAgGgGgAgJgNQAAAaAKAAQAJAAAAgRIAAgNQABgdgLAAQgJAAAAAhg");
	this.shape_6.setTransform(114.1,89.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKBGIgWgqIAAAqIgPAAIAAiLIAPAAIAABaIATgkIASAAIgWAmIAZAvg");
	this.shape_7.setTransform(108.225,84.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrBXIBKitIAOAAIhLCtg");
	this.shape_8.setTransform(100.3,86.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoBmQAdg0AMgUQgJAFgJAAQgXAAgOgWQgNgRAAgYQAAggATgUQAUgWAeAAQAfABASAVQARAVAAAeQAAAbgSApIghA/gAgPgeQAAAbAPAAQAPAAAAgbQAAgcgPAAQgPAAAAAcg");
	this.shape_9.setTransform(73.875,47);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBmQAdg0AMgUQgJAFgJAAQgXAAgOgWQgNgRAAgYQAAggATgUQAUgWAeAAQAfABASAVQARAVAAAeQAAAbgSApIghA/gAgPgeQAAAbAPAAQAPAAAAgbQAAgcgPAAQgPAAAAAcg");
	this.shape_10.setTransform(58.375,47);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiTDXIBziaQAggqANgYQAXgrAAgiQAAgOgGgLQgHgNgNAAQgaAAAAA0IAAAPIhvAAIAAgPQAAg/AngpQAngqA9AAQA9AAAlAoQAmAmAAA9QAAA2giA2QgbAqgyAvQAagCBPgBIAABgg");
	this.shape_11.setTransform(34.575,58.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AgeBEIgBgnQAGAIAJAAQAMAAgBgSIgDhZIAlgBIADBgQABARgEAKQgJATgZABQgNAAgMgEg");
	this.shape_12.setTransform(108.7841,17.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AgkhEIBEgCIACAhIghABIABAUIAdgBIABAfIgdABIABAVIAggBIACAiIhGACg");
	this.shape_13.setTransform(101.1,17.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgUhFIAkgBIAFCLIglACg");
	this.shape_14.setTransform(93.625,17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AgyhDIAkgBIATAwIANAiQgGgfAAgUIgBggIAkgBIAECKIgkABIgPgnIgPgnQAEAYAAAUIABAjIgkABg");
	this.shape_15.setTransform(84.7,18);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AgZhEIAtgCIAjCKIgnABIgEgSIgYABIgDASIgnABgAgIAWIAPAAQgHgngBgTg");
	this.shape_16.setTransform(73.425,18.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AgRgjIgVABIgBghIBOgDIABAhIgUABIADBqIglABg");
	this.shape_17.setTransform(63.975,18.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AAWhTIAXgBIhBCoIgXABgAAYBIQgKgMgBgTQAAgTAJgMQAJgLARAAQARgBAKAKQAKALABATQAAATgIAMQgJANgRAAIgCABQgRAAgJgLgAAxAWQgIAAACATQAAASAHAAQAIgBgCgTQAAgRgGAAIgBAAgAhKgIQgKgLgBgTQgBgUAKgLQAJgMARgBQARgBAKAMQAKAMABASQAAATgIAMQgJAMgRAAIgCABQgRAAgJgLgAg3gmQAAASAHAAQAIgBgCgTQAAgRgHAAQgIAAACATg");
	this.shape_18.setTransform(45.5716,18.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AgUgEQAHgRANgWIg5ACIgBgnIB1gFIhECpIgwABg");
	this.shape_19.setTransform(30.725,18.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("Ag1BKIAEgnQAUAKAQAAQAKAAAFgFQAHgGAAgJQgBgSgaABQgNAAgQAHIAKhhIBSgDIABAnIguACIgDATIAGgBQAWAAAOAOQAOAOABAVQABAagSASQgSASgZABIgEAAQgVAAgWgMg");
	this.shape_20.setTransform(18.3276,19.0787);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(13,9.6,103.7,85.60000000000001), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A4bGIIAAsPMAw2AAAIAAMPg");
	mask_1.setTransform(156.35,39.175);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbBpIAAgEQAHgCADgIQACgHAAgSIAAhGQAAgNgDgFQgCgEgHgDIAAgEIAogSIADACIAABzQAAARACAIQADAIAHACIAAAEgAgQhEQgGgGAAgJQAAgJAGgGQAGgGAJAAQAJAAAFAGQAGAGAAAJQAAAJgGAGQgGAGgIAAQgJAAgGgGg");
	this.shape_4.setTransform(232.325,27.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzA9QgWgVAAgjQAAgkAZgZQAZgXAhAAQAYAAAQAFQAPAGAAAGQAAAIgHAGQgGAHgIAAQgMAAghghQgUADgNASQgMARAAAWQAAAeASATQARAUAdAAQAfAAAWgZIADAEQgfAugrAAQgeAAgVgTg");
	this.shape_5.setTransform(221.175,30.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BoIgOAUIgDAAIAAjLQAAgMgDgGQgCgEgHgDIAAgEIAogSIAEADIAABtQAdgSAVAAQAgAAAVAXQASAUAAAeQAAAlgWAYQgYAZglAAQghAAgUgXgAgmgJIAABOQAAATAQAQQAQAQARAAQAqAAAAg3QAAgdgNgYQgQgggeAAQgQAAgQALg");
	this.shape_6.setTransform(203.7,25.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BGQgMgMAAgTQgBgVAWgOQAOgJAkgKIAhgKQAAgqgnAAQgcAAgWAaIgEgDQAdgjAoAAQA3AAAAA6IAAA7QAAARACAHQADAIAHADIAAAEIgeAAQgNAAAAgMIAAg0QgHAdgQASQgQAUgXAAQgSAAgMgKgAgBgLQgsALAAAdQAAAOAJAIQAIAGAMAAQAVAAANgYQANgWAAgXIAAgIg");
	this.shape_7.setTransform(186.9,30.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhVBtIAAgFQAIgCACgIQADgHAAgRIAAiKQAAgSgDgHQgCgHgIgDIAAgEIBNAAQBEgBAAApQAAAng0AJQAlABAVAPQATAPAAAYQABAegYAUQgbAXg0AAgAgnBMQAAASADAFQADAEAKAAIAIAAQAgAAAQgPQAQgPAAgaQAAgdgQgQQgSgRggAAIgWAAgAgngUIAbAAQAQAAAKgMQAJgLAAgRQAAgTgNgMQgNgMgYAAIgMAAg");
	this.shape_8.setTransform(169.202,27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcBwIAAgEQAHgDADgIQACgHAAgRIAAg+QAAgUgJgLQgJgMgRAAQgSAAgaAVIAABUQAAARACAHQADAIAIADIAAAEIg5AAIAAgEQAHgDADgIQADgHAAgRIAAhIQAAgMgEgFQgCgEgHgDIAAgEIApgSIADADIAAAaQAigcAdAAQAvAAABAyIAABDQAAARACAHQADAIAHADIAAAEgAgehFIAfghQAIgJAHAAQAGAAAHAEQAHAEAAAEQAAAFgMAFIg1AWg");
	this.shape_9.setTransform(144.55,26.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxA+QgYgVAAgkQAAgkAagZQAXgXAgAAQAdAAASASQAQAQABAWIh1AAIAAAJQAAAeARATQASAUAcAAQAfAAAXgZIACAEQgfAugrAAQgcAAgVgSgAggg8QgJAMgDAUIBUAAQgDgTgLgNQgMgNgPgBIgBAAQgSAAgMAOg");
	this.shape_10.setTransform(127.3,30.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBpIAAgEQAHgCADgIQACgHAAgSIAAhGQAAgNgDgFQgCgEgHgDIAAgEIAogSIADACIAABzQAAARACAIQADAIAHACIAAAEgAgQhEQgGgGAAgJQAAgJAGgGQAGgGAJAAQAJAAAFAGQAGAGAAAJQAAAJgGAGQgGAGgIAAQgJAAgGgGg");
	this.shape_11.setTransform(115.725,27.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5BOIAAgDIBNiTIgcAAQgPAAgKAIQgLAIgHAUIgEAAIAGgoIBpAAIAAADIhNCRIAhAAQAmAAAFgrIAEAAIgCAxg");
	this.shape_12.setTransform(105.65,30.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhhBtIAAgFQAHgCADgIQACgHAAgRIAAiKQAAgSgCgHQgDgHgHgDIAAgEIBNAAQA8gBAgAkQAaAcAAApQAAAygeAeQgfAggyAAgAg0BRQAAAMAEAFQAEAFAMAAIARAAQAmAAATgVQAUgWAAgxQAAgxgZgfQgcgigwAAIgNAAg");
	this.shape_13.setTransform(88.075,27.3);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(78.3,13.1,156.89999999999998,25.4), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A4bGIIAAsPMAw2AAAIAAMPg");
	mask_1.setTransform(156.35,39.175);

	// Layer_3
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag9BGQgNgMAAgTQAAgVAWgOQAPgJAigKIAigKQgBgqgnAAQgbAAgWAaIgDgDQAdgjAnAAQA3AAAAA6IAAA7QAAARADAHQACAIAIADIAAAEIggAAQgMAAAAgMIAAg0QgHAdgQASQgQAUgXAAQgSAAgMgKgAgBgLQgrALgBAdQABAOAIAIQAJAGAMAAQATAAAPgYQALgWABgXIAAgIg");
	this.shape_21.setTransform(209.25,60.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA4B9QgZAAgUglIgYgxIgXAXIAAAYQAAARADAIQACAIAIACIAAAEIg5AAIAAgEQAIgCACgIQADgHAAgSIAAijQAAgNgDgFQgDgEgHgDIAAgEIApgSIADACIAACxIAwgwQAOgNADgKQACgIgGgCIAAgDIAoAAIAAAFQgVAGgRARIgUATIAlBDQALATAGAHQAJAKALAAIAAAEg");
	this.shape_22.setTransform(193.325,55.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPB/QgcAAgUgXQgSgWAAgeQAAglAXgXQAYgYAnAAQASAAAPAHIAAg2QAAgNgDgFQgDgEgHgDIAAgEIApgSIAEACIAADQQAAASACAHQADAIAHACIAAAEIggAAQgMAAAAgMIAAgNQgYAdgcAAIgBAAgAgpgIQgJANAAAWQAAAeAKAWQAPAeAcAAQATAAAQgSIAAhEQAAgSgNgOQgPgRgRAAQgXAAgLASg");
	this.shape_23.setTransform(175.675,55.8254);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag9BGQgNgMAAgTQAAgVAWgOQAPgJAigKIAigKQgBgqgnAAQgbAAgWAaIgDgDQAcgjAoAAQA3AAAAA6IAAA7QAAARADAHQACAIAIADIAAAEIggAAQgMAAAAgMIAAg0QgHAdgQASQgQAUgXAAQgSAAgMgKgAgBgLQgrALgBAdQABAOAIAIQAIAGAMAAQAUAAAPgYQALgWABgXIAAgIg");
	this.shape_24.setTransform(158.85,60.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbBpIAAgEQAHgCADgIQACgHAAgSIAAhGQAAgNgDgFQgCgEgHgDIAAgEIAogSIADACIAABzQAAARACAIQADAIAHACIAAAEgAgQhEQgGgGAAgJQAAgJAGgGQAGgGAJAAQAJAAAFAGQAGAGAAAJQAAAJgGAGQgGAGgIAAQgJAAgGgGg");
	this.shape_25.setTransform(147.425,57.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag6BNIAAgCIBOiSIgcAAQgPgBgKAIQgKAIgIAVIgEgBIAGgoIBpAAIAAADIhNCSIAhAAQAmAAAFgsIADAAIgBAwg");
	this.shape_26.setTransform(137.35,60.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhhBsIAAgDQAHgDADgIQACgHAAgRIAAiKQAAgSgCgGQgDgJgHgCIAAgFIBNAAQA8AAAgAkQAaAcAAApQAAAxgeAgQgfAegyAAgAg0BRQAAAMAEAFQAEAFAMABIARAAQAlgBATgVQAUgXAAgwQAAgxgZgfQgbgigxABIgMAAg");
	this.shape_27.setTransform(119.8004,57.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbBpIAAgEQAHgCADgIQACgIAAgRIAAhGQAAgNgDgFQgCgEgHgDIAAgEIAogSIADACIAABzQAAASACAHQADAIAHACIAAAEgAgQhEQgGgGAAgJQAAgJAGgGQAGgGAJAAQAJAAAFAGQAGAGAAAJQAAAJgGAGQgGAGgIAAQgJAAgGgGg");
	this.shape_28.setTransform(99.175,57.625);

	var maskedShapeInstanceList = [this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(96.4,43.1,120.29999999999998,25.499999999999993), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A/EMWIAA4sMA+IAAAIAAYsg");
	mask_2.setTransform(208.7,88.9);

	// Layer_3
	this.instance = new lib.Group_1();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(9.9,9.9,397.70000000000005,158.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/EMXIAA4tMA+JAAAIAAYtg");
	mask.setTransform(198.85,79.05);

	// Layer_3
	this.instance = new lib.Group_0_1();
	this.instance.setTransform(322.9,9.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(322.9,9.3,74.80000000000001,148.79999999999998), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqNNfIAA69IUaAAIAAa9g");
	mask.setTransform(65.35,86.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC2E26").s().p("AAmB4QgRgTAAgaQAAgdAQgSQAVgWAmAAQAlAAAWAWQARASAAAbQABAcgTATQgVAWglAAQgkAAgWgWgABJA0QgHAJAAAMQgBAPALAKQAJAHAMAAQAMAAAJgJQAKgKAAgNQAAgOgKgIQgJgIgMAAQgPAAgJAJgAhiCKICgkUIAkAAIigEUgAiagbQgSgSAAgaQABgdARgSQATgXAmAAQAmAAAWAXQASASAAAbQgBAbgRATQgWAWgmAAQgkAAgVgWgAh2hfQgJAJAAANQAAAPALAIQAHAIAOAAQAMAAAKgJQAJgJAAgNQAAgNgKgLQgJgHgMAAQgPAAgIAJg");
	this.shape.setTransform(99.25,85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC2E26").s().p("AiUCoIAQhhQAVAVAbAMQAdAOAfAAQAfAAATgUQAQgRAAgYQAAgagTgRQgWgTgxAAQgoAAghAQIAijWIDPAAIAABYIiKAAIgGAsQASgDANAAQBCAAAnAoQAlAjAAA6QAAA9gmAnQgsAthQAAQhOAAg5gkg");
	this.shape_1.setTransform(59.85,92.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC2E26").s().p("AirDIIC2k3IimAAIAAhYIFHAAIjlGPg");
	this.shape_2.setTransform(31.05,91.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC2E26").s().p("AgPBDIAAhhIAfAAIAABhgAgNgoQgEgEAAgHQAAgGAEgEQAFgFAIAAQAJAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgJAAQgIAAgFgFg");
	this.shape_3.setTransform(117.525,109.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC2E26").s().p("AgdAYQgJgJAAgOQAAgOAJgKQAMgLARAAQASAAAKALQALAKAAAPIAAADIguAAQAAAGADAEQACACACAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIADgEIAfAAQgCAHgFAEQgLANgTAAQgTAAgLgLgAgEgOQgCACAAAFIAOAAQAAgEgDgDQgCgCgDAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_4.setTransform(111.075,109.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC2E26").s().p("AgPAzIAAhAIAfAAIAABAgAgNgYQgEgEAAgHQAAgFAEgFQAFgFAIAAQAJAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgJAAQgIAAgFgFg");
	this.shape_5.setTransform(104.575,107.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC2E26").s().p("AAGAiIAAgjIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgCACAAAEIAAAiIghAAIAAhBIAgAAIAAADQAAAEgBADIABAAQAEgFAEgDQAEgEAIAAQAIAAAIAGQAGAHABANIAAApg");
	this.shape_6.setTransform(98,109.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC2E26").s().p("AgdAbQgKgKABgRQAAgQAKgKQAHgIAMAAQAKAAAIAKIAAAAIgBgGIAAgCIAfAAIAABBIgfAAIACgIIgBAAQgJAKgKAAQgLAAgIgIgAgEgGQgDADAAADQAAAEADADQADACABAAQAEAAACgCQADgDAAgEQAAgEgCgCQgCgCgEAAQgDAAgCACg");
	this.shape_7.setTransform(89.05,109.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC2E26").s().p("AgQAtIAAgpIgIAAIAAgYIAIAAIAAgXIAeAAIAAAXIAMAAIAAAYIgMAAIAAApg");
	this.shape_8.setTransform(82.1,108.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC2E26").s().p("AgaBEIAAhgIAdAAIAAADIgBAGIAAABIABAAIAHgIQAHgEAGAAQALAAAIAHQAJAKAAAQQAAARgKAKQgHAIgKAAQgHAAgGgEIgHgHIgBAAQACAFAAAIIAAAcgAAGgDQgDADAAAEQAAAFADADQACACAEAAQACAAADgCQADgDAAgFQAAgEgDgDQgBgCgFAAQgDAAgCACgAiRBEIAUgnIgcg5IAiAAIAIAbIABAHIABAAIABgIIAIgaIAhAAIgsBggAE7AbQgIgHAAgLIAAglIAgAAIAAAiQAAADABACQABABAAAAQAAAAABAAQAAABABAAQABAAAAAAQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAgBQACgBAAgEIAAgiIAgAAIAAAkQAAALgIAIQgKALgUAAQgTAAgKgLgADgAfQgKgKAAgRQAAgRAKgKQAIgHAKAAQAHAAAFAEIAHAGIABAAIgBgJIAAgkIAfAAIAABlIgeAAIAAgDIABgHIgBAAQgEAFgEADQgGAEgHAAQgKAAgHgHgAD4gFQgDAEAAADQAAAFADADQADADADAAQADAAACgCQADgDAAgFQAAgEgDgDQgCgCgEAAIgFABgACHAbQgKgKAAgOQAAgNAKgJQALgLATAAQATAAALALQAKAJAAANQAAAOgKAKQgKALgUAAQgUAAgKgLgACfgDQgDADAAADQAAAGADABQACADAEAAQAEAAACgDQADgBAAgGQAAgDgDgDQgCgCgEAAQgEAAgCACgAkkAgIgEgBIAIgUIAEACQAGAFAHAAIAFgBIABgDIgBgCIgFgCIgFAAQgGgBgFgFQgFgEAAgHQAAgLAJgGQAJgGANAAQANAAAMAGIgIASIgGgEQgEgCgFAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIABACIAKACQAJACAEADQAEAGAAAGQAAAKgGAGQgJAJgQAAQgOAAgMgGgAnSAeQgKgLAAgPQAAgRALgJQAIgIALAAQALAAAHAKIABgBIgBgFIAAgCIAfAAIAABAIgfAAIAAgCIABgGIgBAAQgIAKgLAAQgLAAgIgIgAm5gDQgDADAAADQAAAEADADQACACADAAQAEAAACgCQADgDAAgEQAAgDgDgDQgCgCgDAAQgEAAgCACgAHsAkIAAgoIgIABIAAgZIAIAAIAAgXIAfAAIAAAXIALAAIAAAZIgLgBIAAAogAG6AkIgNgYIgBAAIAAAYIggAAIAAhlIAgAAIAAA9IABAAIAAgBIAMgXIAlAAIgYAeIAaAigAA/AkIAAhAIAgAAIAAAEIgBAEIABAAQADgFAFgDQAGgDAJAAIAAAgQgHgCgDAAQgFAAgEACQgEADAAAGIAAAagAjjAkIAAgEIAUgfIAGgFIAAgBIgGABIgRAAIAAgYIBDAAIAAADIgVAfIgFAFIAAABIAFgBIAUAAIAAAZgAlTAkIAAgkQAAgCgCgCIgDgBQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgCABAAAEIAAAiIggAAIAAhAIAfAAIAAADIgBAHIAAAAIAJgJQAGgDAGAAQAJAAAHAGQAHAHAAAMIAAApgAoNAkIAAgoIgIABIAAgZIAIAAIAAgXIAgAAIAAAXIAKAAIAAAZIgKgBIAAAogAlmguIARgVIAQALIgUARg");
	this.shape_9.setTransform(64.725,59.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC2E26").s().p("AguCYIAAjDIBeAAIAADDgAgohJQgMgNAAgTQAAgRAMgNQAPgPAZgBQAaABAPAPQAMANAAARQAAATgMANQgOAOgbAAQgaAAgOgOg");
	this.shape_10.setTransform(112.575,26.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC2E26").s().p("AhbCHIgRgFIAWhDQAKAKARAHQATAIAQAAQAYgBAMgNQALgKACgVIABgTIgBAAQgIAOgNAJQgNAIgVAAQgiABgYgYQgcgeAAgvQAAgWAIgWQAIgXAPgOQAWgWAhABQAVgBALAJQAMAJALAPIABAAQgBgIAAgHIAAgMIBcAAIAAC3QAAAWgFAQQgHARgQARQgjAjhAABQgtAAgkgOgAgQhAQgHAHAAANQAAALAGAHQAJAJALAAQAKAAAGgGQAIgIAAgMQABgPgIgHQgJgHgJAAQgKgBgIAJg");
	this.shape_11.setTransform(92.5,36.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC2E26").s().p("AhXBFQgXgXAAgfIAAhyIBfAAIAABoQAAALAEAEQAEAFAHAAQAHAAAEgFQAFgEAAgLIAAhoIBfAAIAABvQAAAhgWAWQggAig5AAQg4gBgfgfg");
	this.shape_12.setTransform(66.825,31.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC2E26").s().p("AhQBmIAAjDIBfAAIAAAMQAAAGgDAHIACAAQAJgQAPgIQASgKAZABIAABkQgRgLgMAAQgQAAgKAJQgMAJAAATIAABNg");
	this.shape_13.setTransform(45.675,31.1205);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC2E26").s().p("AhXCGQgOgOgJgXQgGgWAAgWQAAg0AegdQAVgWAgAAQAUAAAQAKQAJAHALAOIAEAAQgFgPAAgNIAAhsIBgAAIAAExIhdAAIAAgJQABgKADgMIgEAAQgIAQgNAJQgQAMgYAAQgfgBgUgVgAgOAaQgKAIAAAPQAAAPAKAJQAHAHAIAAQAKAAAGgGQAKgIAAgQQAAgPgLgJQgGgGgJAAQgKgBgFAHg");
	this.shape_14.setTransform(22.15,26.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(10.4,10.8,108.89999999999999,105), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiekBIEIgaIA0IdIkHAag");
	mask.setTransform(15.85,28.375);

	// Layer_3
	this.instance = new lib.Image_1_1();
	this.instance.setTransform(0,2.55,0.218,0.218,-5.4998);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,31.7,56.8), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqNNfIAA69IUaAAIAAa9g");
	mask.setTransform(65.35,86.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEC53").s().p("AoLM/QgxAAgjgjQgigiAAgxIAA4HISNAAQAxAAAiAiQAjAkAAAwIAAYHg");
	this.shape.setTransform(64.2,83.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,128.4,166.2), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqNNfIAA69IUaAAIAAa9g");
	mask.setTransform(65.35,86.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC2E26").s().p("AoLCbQglAAgfgWQgogcgIgwQgCgKAAgLIAAi+ISNAAQAvAAAjAhQAiAhACAwIAADDg");
	this.shape.setTransform(64.2,150.775);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,135.3,128.4,31), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqNNfIAA69IUaAAIAAa9g");
	mask.setTransform(65.35,86.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAjQgCgCAAgDQAAgEACgEQACgDAFgDIgGAAIAAgGQgGAIgJAAQgMAAgIgJQgHgHAAgLQAAgNAIgIQAHgIALAAQAKAAAGAHIAAgFIATAAIAAA0IgFAAIgEADQgDADAAACQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQADAAADgDIgDAKQgCADgFAAQgGAAgDgEgAgHgSQgEADAAAFQAAAFAEAEQADACAEAAQAGAAADgCQAEgDAAgGQAAgEgEgEQgEgEgFABQgEgBgDAEg");
	this.shape.setTransform(120.375,159.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJA5IAAhQIASAAIAABQgAgHglQgDgDAAgFQAAgEADgDQAEgEADAAQAEAAAEAEQADADAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_1.setTransform(115.325,157.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAUQgIgIAAgMQAAgLAIgIQAIgIANAAQAGAAAGADIAAAPQgFgDgFAAQgGAAgDAEQgDADAAAFQAAAFADAEQADAEAGAAQAGAAAEgEIAAAQQgGADgHAAQgMAAgIgIg");
	this.shape_2.setTransform(111.275,158.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAUQgHgIAAgLQAAgNAIgIQAHgIAMAAQAKABAFAGIAAgEIATAAIAAA0IgTAAIAAgGQgGAIgKAAQgKAAgJgJgAgHgHQgEADAAAEQAAAGAEADQAEADAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgEgEgEAAQgEAAgEAEg");
	this.shape_3.setTransform(105.05,158.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAGArIgSgVIAAAVIgTAAIAAhVIATAAIAAAzIARgSIAaAAIgaAYIAcAcg");
	this.shape_4.setTransform(98.8,156.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJArIAAg0IASAAIAAA0gAgHgXQgDgDAAgFQAAgEADgDQADgEAEAAQAEAAADAEQADADAAAEQAAAFgDADQgDADgEAAQgEAAgDgDg");
	this.shape_5.setTransform(93.4,156.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIArIAAhVIASAAIAABVg");
	this.shape_6.setTransform(90.3,156.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeApIAAhPIATAAIAAAGQAGgIAJAAQALAAAIAIQAIAIAAAMQAAAMgIAIQgIAIgKAAQgJAAgHgHIAAAggAgIgUQgEAEAAAEQAAAFAEAEQADADAFAAQAFAAADgDQAEgEAAgFQAAgFgEgDQgDgEgFAAQgFAAgDAEg");
	this.shape_7.setTransform(85.225,159.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAUQgHgIAAgLQAAgMAIgJQAHgIAMAAQAJABAGAGIAAgEIATAAIAAA0IgTAAIAAgGQgFAIgLAAQgLAAgIgJgAgHgHQgEADAAAEQAAAGAEADQADADAEAAQAGAAADgDQAEgEAAgFQAAgEgEgDQgDgEgGAAQgEAAgDAEg");
	this.shape_8.setTransform(77.825,158.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAlIAAAFIgTAAIAAhVIATAAIAAAmQAGgHAJAAQALAAAIAIQAIAGAAAOQAAANgIAIQgIAHgLAAQgJAAgGgHgAgIAHQgEAFAAAEQAAAGAEADQADADAFAAQAFAAADgEQAEgDAAgFQAAgFgEgEQgDgDgFAAQgFAAgDADg");
	this.shape_9.setTransform(68.125,156.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAUQgEgFAAgKIAAgfIATAAIAAAcQAAAFADADQACACADAAQAEAAADgCQACgDABgFIAAgcIATAAIAAAfQAAAKgGAFQgHAIgPAAQgQAAgIgIg");
	this.shape_10.setTransform(60.95,158.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJArIAAhVIASAAIAABVg");
	this.shape_11.setTransform(55.95,156.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAkQgCgDAAgDQAAgEACgEQACgDAFgDIgGAAIAAgGQgGAIgJAAQgLAAgJgIQgHgIAAgLQAAgMAIgJQAIgIAKAAQAKAAAGAHIAAgFIATAAIAAA0IgFAAIgEAEQgDABAAADQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIADABQADAAADgCIgDAKQgCACgFAAQgGAAgDgDgAgHgSQgEAEAAAFQAAAFAEADQADADAEAAQAGAAADgDQAEgDAAgFQAAgFgEgEQgDgDgGAAQgDAAgEADg");
	this.shape_12.setTransform(104.725,147.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLAjIAAgkIgGAAIAAgQIAGAAIAAgRIATAAIAAARIAKAAIAAAQIgKAAIAAAkg");
	this.shape_13.setTransform(99.4,145.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAbIAAg0IATAAIAAAJQACgFAFgDQAEgCAGAAIADABIAAARQgDgBgFAAQgGAAgCACQgEAFAAAGIAAAXg");
	this.shape_14.setTransform(95.1,146.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAUQgIgIAAgMQAAgMAIgIQAIgIALAAQAKAAAFAHIAAgFIATAAIAAA0IgTAAIAAgFQgFAHgKABQgLAAgIgJgAgHgIQgEAEAAAEQAAAFAEADQAEAEAEAAQAFAAADgEQAEgDAAgFQAAgFgEgDQgEgDgEAAQgEAAgEADg");
	this.shape_15.setTransform(88.775,146.15);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(55,141.8,68.5,21.69999999999999), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqNNfIAA69IUaAAIAAa9g");
	mask.setTransform(65.35,86.325);

	// Layer_3
	this.instance = new lib.Group();
	this.instance.setTransform(24.75,120.65);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(24.8,120.7,43,33.999999999999986), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqNNfIAA69IUaAAIAAa9g");
	mask.setTransform(65.35,86.325);

	// Layer_3
	this.instance = new lib.Group_0();
	this.instance.setTransform(0.55,115.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0.6,115.4,38,57.29999999999998), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ajbg8IFsh0IBLDuIlsBzg");
	mask_3.setTransform(22,17.675);

	// Layer_3
	this.instance_1 = new lib.Image_0();
	this.instance_1.setTransform(0,11.55,0.2392,0.2378,-17.5003);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(0,0.1,44,35.3), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgEAAIAIgCIABACIgIADg");
	mask_1.setTransform(0.5,0.325);

	// Layer_3
	this.instance_1 = new lib.Image_1();
	this.instance_1.setTransform(0,0.3,0.1929,0.1887,-18.8335);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,1,0.7), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgmwAM7IAA51MBNgAAAIAAZ1g");
	mask_2.setTransform(248.05,82.675);

	// Layer_3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EC3424").s().p("AhkBfIBjiKIhUAAIAAgzIC7AAIhjCKIBaAAIAAAzg");
	this.shape_29.setTransform(466.45,62.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EC3424").s().p("AglBgQgUgGgQgQQgcgcAAgtQAAgsAdgeQAagcAuAAQAxAAAaAdQAbAdAAAvIAAAHIiNAAQAAATAMANQALAMATAAQAPAAAKgFQAHgEAGgMIA6AGQgJAegbASQgYAOglAAQgXAAgQgGgAgaguQgIAIgDANIBTAAQgFgPgIgHQgMgLgRAAQgRAAgNAMg");
	this.shape_30.setTransform(444.55,62.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EC3424").s().p("AhlBfIBjiKIhTAAIAAgzIC7AAIhjCKIBaAAIAAAzg");
	this.shape_31.setTransform(422.65,62.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EC3424").s().p("AhEBiIAAi+IA9AAIAAAeQAJgSAOgJQAOgIATAAQAKAAAKADIgDA6QgNgHgPAAQgTAAgMANQgOAQAAAiIAABOg");
	this.shape_32.setTransform(405.375,62.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EC3424").s().p("AhsCUIAAkgIA+AAIAAAWQAWgcAlAAQAoAAAbAbQAcAcAAAuQAAAtgeAfQgZAZgnAAQgoAAgUgdIAAB5gAgkhQQgOAQAAATQAAAUANAOQAPAOAUAAQARAAAPgNQAPgNAAgXQAAgUgOgPQgOgNgTABQgUgBgOAOg");
	this.shape_33.setTransform(384.2,66.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EC3424").s().p("AgECAQgJgJAAgOQAAgMAHgMQAGgKAHgHQgaAAgSgFQgUgGgQgQQgdgdAAgqQABgwAdgcQAbgcAuAAQAwAAAbAdQAbAbAAAyIAAAHIiOAAQABASAKANQAMAMAUAAQAQAAAIgGQAIgEAFgKIA7AEQgFATgOAOQgJAJgRAKQgUAKgFAHQgJAIABAKQAAAHAFAFQAEAEAIAAQALAAAKgGIgHAhQgNAHgQAAQgSAAgKgLgAgahTQgIAKgDALIBTAAQgGgPgHgIQgMgKgRgBQgSAAgMANg");
	this.shape_34.setTransform(350.2,66.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EC3424").s().p("AgeDLIAAkgIA8AAIAAEggAgYiNQgLgKAAgPQAAgPALgLQAKgKAOAAQAPAAAKAKQALALAAAPQAAAPgLAKQgKALgPAAQgOAAgKgLg");
	this.shape_35.setTransform(333.1,61.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EC3424").s().p("AguBJQgdgdAAgsQAAgsAfgeQAdgbArAAQAZAAAXALIAAA4QgRgPgXAAQgVAAgOAOQgNAOAAAVQAAAVAMANQAOAQAXAAQAWAAARgPIAAA3QgVAMgcAAQgrAAgegdg");
	this.shape_36.setTransform(318.325,62.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EC3424").s().p("AhSBHQgPgOgHgUQgHgSAAgTQAAgSAHgSQAHgUAPgOQAegfA0AAQA0AAAfAfQAPAOAHAUQAHASAAASQAAATgHASQgHAUgPAOQgfAfg0AAQg0AAgegfgAgigjQgOAOAAAVQAAAWAOAOQANAOAVAAQAVAAAOgOQANgOAAgWQAAgWgNgNQgPgOgUAAQgVAAgNAOg");
	this.shape_37.setTransform(297.05,62.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EC3424").s().p("ABeBiIAAhhQAAgagHgKQgJgKgOAAQgPAAgJALQgJAMAAAZIAABfIg8AAIAAhiQAAgcgLgKQgHgHgNAAQgOAAgHAHQgNAMAAAaIAABiIg9AAIAAi+IA9AAIAAAWQATgbAjAAQAVAAAPAJQAOAIAIASQAIgOARgKQAQgLAYAAQAiAAATASQAUATAAAmIAAB4g");
	this.shape_38.setTransform(266.8,62.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EC3424").s().p("AhSBHQgOgOgIgUQgHgSAAgTQAAgSAHgSQAIgUAOgOQAegfA0AAQA1AAAfAfQAcAcAAAqQAAArgcAcQgfAfg1AAQg0AAgegfgAghgjQgOANgBAWQABAWAOAOQANAOAUAAQAVAAAOgOQAOgOAAgWQAAgWgOgNQgOgOgVAAQgUAAgNAOg");
	this.shape_39.setTransform(236.6,62.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EC3424").s().p("AhEBiIAAi+IA9AAIAAAeQAJgSAOgJQAOgIATAAQAKAAAKADIgDA6QgNgHgPAAQgTAAgMANQgOAQAAAiIAABOg");
	this.shape_40.setTransform(217.975,62.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EC3424").s().p("AhsCUIAAkgIA+AAIAAAWQAXgcAkAAQAoAAAbAbQAdAcgBAuQAAAtgdAfQgaAZgnAAQgnAAgVgdIAAB5gAgkhQQgOAPAAAUQAAAVAOANQAOAOAVAAQARAAAPgNQAPgNgBgXQAAgUgOgPQgOgNgSABQgVgBgOAOg");
	this.shape_41.setTransform(196.8,66.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EC3424").s().p("AgeDLIAAkgIA9AAIAAEggAgYiNQgLgKAAgPQAAgPALgLQAKgKAOAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgOAAgKgLg");
	this.shape_42.setTransform(168.625,61.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EC3424").s().p("AhMBJQgVgUAAglIAAhyIA+AAIAABpQAAAVAKAJQALAJAOAAQAQAAAKgJQAKgJAAgVIAAhpIA+AAIAABvQAAATgDAMQgFARgNAMQgZAZg0AAQgzAAgZgZg");
	this.shape_43.setTransform(151,62.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EC3424").s().p("AAwBhIgwhsIgvBsIgmAAIhfi+IBDAAIAxBkIAxhnIAfAAIAxBnIAxhkIBDAAIhfC+g");
	this.shape_44.setTransform(121.075,62.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EC3424").s().p("AhiCQIBDh6IhbilIBHAAIA1BnIA0hnIBFAAIiYEfg");
	this.shape_45.setTransform(90.725,67.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EC3424").s().p("AgmB+IAAiMIgWAAIAAgxIAWAAIAAg+IA8AAIAAA+IAnAAIAAAxIgnAAIAACMg");
	this.shape_46.setTransform(71.6,59.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EC3424").s().p("AAaCcIhIhSIAABSIg+AAIAAk3IA+AAIAAC+IBDhFIBRAAIhaBVIBhBpg");
	this.shape_47.setTransform(53.95,56.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EC3424").s().p("AhQBJQgbgegBgqQAAgvAdgdQAbgaAoAAQAnAAAUAcIAAgVIA9AAIAAC9Ig9AAIAAgXQgTAeglAAQgrAAgcgdgAgegiQgOAOgBAUQABAUANAOQAOAPAVAAQASAAAOgOQAPgNAAgWQgBgWgOgNQgNgNgUAAQgTAAgOAOg");
	this.shape_48.setTransform(27.7,62.375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EC3424").s().p("AgXB4IAAiUIAvAAIAACUgAgThHQgIgIAAgMQAAgMAIgIQAJgIAKAAQAMAAAIAIQAIAIAAAMQAAAMgIAIQgIAIgMAAQgKAAgJgIg");
	this.shape_49.setTransform(473.05,97.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EC3424").s().p("AgXCeIAAjgIAvAAIAADggAgThtQgIgIAAgMQAAgMAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_50.setTransform(464.2,101.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EC3424").s().p("AgjA5QgYgWABgjQgBgiAZgXQAXgVAhAAQAUAAARAIIAAAsQgOgMgRAAQgRAAgKALQgKAKAAARQAAAQAJALQALAMASAAQAQAAAOgMIAAArQgPAJgWAAQgiAAgXgWg");
	this.shape_51.setTransform(452.7,102.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EC3424").s().p("Ag+A5QgVgXAAghQAAgkAWgXQAVgUAfAAQAdAAARAVIAAgQIAvAAIAACTIgvAAIAAgSQgPAXgcAAQgjAAgVgWgAgXgaQgLALAAAPQAAAQAKAKQALAMAQAAQAPAAAKgKQAMgLAAgRQAAgPgLgMQgLgKgQAAQgPAAgKALg");
	this.shape_52.setTransform(435.65,102.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EC3424").s().p("AAUB5Ig4hAIAABAIgwAAIAAjxIAwAAIAACTIA1g1IA/AAIhHBCIBMBRg");
	this.shape_53.setTransform(418.75,97.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EC3424").s().p("AgXB4IAAiUIAvAAIAACUgAgThHQgIgIAAgMQAAgMAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_54.setTransform(404,97.475);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EC3424").s().p("AgXB5IAAjxIAvAAIAADxg");
	this.shape_55.setTransform(395.4,97.325);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EC3424").s().p("AhTBzIAAjgIAvAAIAAASQASgXAbAAQAgAAAVAVQAXAXAAAjQAAAjgYAXQgTAVggAAQgeAAgQgXIAABegAgbg9QgMALAAAQQAAAPALALQALAKAQAAQANAAAMgJQAMgLgBgRQAAgQgLgLQgKgKgPAAQgQAAgKALg");
	this.shape_56.setTransform(381.75,105.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EC3424").s().p("Ag+A5QgWgXAAghQAAgkAXgXQAVgUAfAAQAdAAARAVIAAgQIAwAAIAACTIgwAAIAAgSQgPAXgcAAQgjAAgVgWgAgXgaQgLALAAAPQAAAQAKAKQALAMAQAAQAPAAAKgKQAMgLAAgRQAAgQgLgLQgLgKgQAAQgQAAgJALg");
	this.shape_57.setTransform(361.475,102.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EC3424").s().p("AAmBLIgmhTIgkBTIgeAAIhKiTIA1AAIAmBOIAmhQIAYAAIAmBQIAmhOIA0AAIhJCTg");
	this.shape_58.setTransform(330.625,101.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EC3424").s().p("AhMBwIA0hfIhHiBIA4AAIApBRIAohRIA2AAIh2Dgg");
	this.shape_59.setTransform(299.6,105.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EC3424").s().p("AgdBiIAAhtIgRAAIAAgmIARAAIAAgwIAvAAIAAAwIAdAAIAAAmIgdAAIAABtg");
	this.shape_60.setTransform(284.675,99.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EC3424").s().p("Ag1BMIAAiUIAwAAIAAAYQAHgOALgHQAKgGAQAAQAIAAAHADIgCAsQgMgFgKAAQgPAAgJAKQgLAMAAAbIAAA8g");
	this.shape_61.setTransform(273.4,101.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EC3424").s().p("Ag5A6QgWgWAAgjQAAgiAXgYQAVgVAjAAQAmAAAVAWQAVAWAAAlIAAAFIhuAAQAAAQAJAKQAJAJAPAAQAMAAAHgEQAGgEAEgJIAtAFQgHAZgVAMQgSALgdAAQglAAgWgVgAgUgjQgGAGgDAKIBAAAQgEgMgFgFQgKgJgNAAQgOAAgJAKg");
	this.shape_62.setTransform(257.4,102.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EC3424").s().p("AgiB7IAAhuIgRAAIAAglIARAAIAAgdQABgiAQgSQAQgRAZAAQANAAAOAFIAAAqQgJgGgJAAQgJAAgFAGQgGAHABATIAAAZIAmAAIAAAlIgmAAIAABug");
	this.shape_63.setTransform(243.5,97.125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EC3424").s().p("AhAA3QgWgWgBghQABggAWgWQAZgYAnAAQAoAAAZAYQAXAWAAAgQAAAhgXAWQgYAYgpAAQgoAAgYgYgAgagbQgLALAAAQQAAAQALAMQAKALAQAAQAQAAALgLQALgLAAgRQAAgQgLgLQgKgKgRAAQgQAAgKAKg");
	this.shape_64.setTransform(228.3,102.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EC3424").s().p("Ag4A6QgXgWAAgjQAAgiAXgYQAWgVAiAAQAmAAAVAWQAVAWAAAlIAAAFIhuAAQAAAQAJAKQAJAJAPAAQAMAAAHgEQAGgEAEgJIAuAFQgJAZgUAMQgRALgeAAQglAAgVgVgAgUgjQgGAGgCAKIBAAAQgEgMgGgFQgJgJgOAAQgNAAgKAKg");
	this.shape_65.setTransform(202.275,102.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EC3424").s().p("AgXB4IAAiUIAvAAIAACUgAgThHQgIgIAAgMQAAgMAIgIQAJgIAKAAQALAAAJAIQAIAIAAAMQAAAMgIAIQgJAIgLAAQgKAAgJgIg");
	this.shape_66.setTransform(188.95,97.475);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EC3424").s().p("AAcBMIAAhMQAAgUgIgJQgHgGgMAAQgLAAgHAIQgKAJAAASIAABMIgwAAIAAiTIAwAAIAAASQARgWAcAAQAcAAAPAPQAPAPAAAcIAABdg");
	this.shape_67.setTransform(175.275,101.825);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EC3424").s().p("Ag4A6QgXgWAAgjQAAgiAXgYQAVgVAjAAQAmAAAVAWQAVAWAAAlIAAAFIhuAAQAAAQAJAKQAJAJAPAAQALAAAIgEQAGgDAEgKIAuAFQgJAagUALQgRALgeAAQglAAgVgVgAgUgjQgHAHgBAJIBAAAQgEgLgGgGQgJgJgOAAQgNAAgKAKg");
	this.shape_68.setTransform(157.075,102.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EC3424").s().p("AgXB5IAAjxIAvAAIAADxg");
	this.shape_69.setTransform(143.95,97.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EC3424").s().p("AgeBiIAAhtIgQAAIAAgmIAQAAIAAgwIAvAAIAAAwIAeAAIAAAmIgeAAIAABtg");
	this.shape_70.setTransform(135,99.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EC3424").s().p("Ag4A6QgXgWAAgjQAAgiAXgYQAWgVAiAAQAlAAAWAWQAVAWAAAlIAAAFIhuAAQAAAQAJAKQAJAJAOAAQANAAAHgEQAGgEAEgJIAuAFQgIAZgVAMQgRALgeAAQglAAgVgVgAgUgjQgGAGgCAKIA/AAQgDgMgGgFQgJgJgOAAQgNAAgKAKg");
	this.shape_71.setTransform(121.2,102.025);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EC3424").s().p("AgXB4IAAiUIAvAAIAACUgAgThHQgIgIAAgMQAAgMAIgIQAIgIALAAQALAAAJAIQAIAIAAAMQAAAMgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_72.setTransform(107.85,97.475);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EC3424").s().p("AAlBLIglhTIgkBTIgeAAIhKiTIA0AAIAnBOIAlhQIAZAAIAlBQIAnhOIA0AAIhKCTg");
	this.shape_73.setTransform(89.425,101.925);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EC3424").s().p("Ag9BkIAUggQAHAHAKAEQAIAFAMgBQAJAAAFgDQAFgEAAgFQAAgGgGgDQgEgDgJgDIgMgDQgPgEgJgJQgLgMAAgPQAAgVAOgNQAQgPAcAAQAcAAAVAMIgSAeQgOgHgNAAQgJAAgDADQgDADAAADQAAAFAEADIAOAEIAMAFQAQAEAJAIQALALAAARQAAAZgPAPQgQARgfAAQglAAgYgWgAgQhGIAogyIAfAVIgzAtg");
	this.shape_74.setTransform(68.725,97.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EC3424").s().p("AhMBwIA0hfIhHiBIA3AAIApBRIAphRIA2AAIh2Dgg");
	this.shape_75.setTransform(52.725,105.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EC3424").s().p("AAlBLIglhTIgkBTIgeAAIhKiTIA0AAIAnBOIAlhQIAZAAIAlBQIAnhOIA0AAIhKCTg");
	this.shape_76.setTransform(29.225,101.925);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFED3D").s().p("AZeL9Mg1PAAAQkjAAjOi8QjNi8gBkKIAAkhQABj6DBixQDCixESAAMA1LAAAQAUgBArgBQCqACCbA+QCWA6ByBqQB0BqA/CJQBBCPgBCaIgJMJg");
	this.shape_77.setTransform(248.05,77.25);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFED3D").s().p("A+lLHQiZg5h1hpQh2hphBiKQhEiOgCicIAAgIQAAibBBiOQA/iJB0hqQBzhqCVg7QCbg9CqgCQAqAAAVACMA1LAAAQESAADCCxQDBCxAAD6IAAEhQAAEKjNC7QjOC8kjAAMg1QAAAIgIABQimAAiZg6g");
	this.shape_78.setTransform(248.05,76.8519);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFED3D").s().p("AioMAQigAAiSg+QiNg8hthtQhthsg7iOQg/iSABifQAAiYA6iLQA5iHBohnQBnhoCHg5QCLg7CYAAISJAAIAAX/g");
	this.shape_79.setTransform(315.5,76.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFED3D").s().p("AgIL9QirgCicg+QiWg8hzhrQh0hrg+iLQhAiPABicQACicBEiOQBCiKB1hpQB2hpCXg5QCeg7CqACQCrABCbA+QCXA8B0BsQByBrA/CKQBBCQgDCbIgJMBg");
	this.shape_80.setTransform(411.95,77.2481);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EC3424").s().p("EggAALGQhTgFAKgUQAJgSBWgkIH1izQGEiLDOhyQEgifAKiNIACgnQAKiUBIiEQBGiAB1heQB1hfCTgvQCXgxCiAJIQqA9QAiAAAcACQCpALCXBGQCRBDBsBxQBrBwA2CNQA3CRgKCaIg+MGg");
	this.shape_81.setTransform(275.0847,82.7302);

	var maskedShapeInstanceList = [this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,496.1,165.4), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ArVKuIAA1bIWrAAIAAVbg");
	mask_1.setTransform(72.6,68.625);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAsIgNgbIAAAbIgKAAIAAhXIAKAAIAAA4IAMgWIALAAIgPAXIARAeg");
	this.shape_1.setTransform(114.775,101.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAAQAAgaANAAQAFgBADAIIAAgHIAKAAIAAA1IgKAAIAAgHQgDAHgFAAQgNAAAAgbgAgFgCIAAAFQAAAQAFAAQAHAAAAgQIAAgFQAAgPgHAAQgFAAAAAPg");
	this.shape_2.setTransform(110.225,103.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAnIAAhMIAKAAIAAAHQAEgHAFAAQANAAABAbQAAAagOAAQgFAAgEgGIAAAdgAgGgMIAAAFQABAPAFAAQAGAAAAgPIAAgGQAAgPgGAAQgFAAgBAQg");
	this.shape_3.setTransform(106.25,104.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAAQAAgaAQAAQARAAAAAaQAAAcgRgBQgQABAAgcgAgFgCIAAAFQAAAPAGAAQAFAAABgPIAAgFQgBgPgFAAQgGAAAAAPg");
	this.shape_4.setTransform(102,103.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbA2IAvhsIAIAAIgvBsg");
	this.shape_5.setTransform(97.3,102.95);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(94.5,97.5,22.099999999999994,11), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ArVKuIAA1bIWrAAIAAVbg");
	mask_1.setTransform(72.6,68.625);

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCED4F").s().p("AoZgqQgBgSAJgNQAJgMANgBIPxgjQANAAAKAMQAKAMAAARIAECkIwwAmIAAAAIgEikg");
	this.shape_16.setTransform(64.8986,13.6741);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CB2B1D").s().p("An6HrQgKgKgBgQIget8QgBgQAJgLQAJgLANAAIPqgjQANgBAJALQAKAKAAAQIAfN8QABAQgJALQgJALgNAAIvqAjIgBAAQgMAAgJgKg");
	this.shape_17.setTransform(66.7249,75.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.5,0,0,4).p("AJ9GtIidAAIgcwHIABgMQABgTgBgKQgDgRgJgJQgLgKgUABIvwAgQgQABgLANQgLANAAASIAnR0QAAARAMANQALAOARgBIA0gCIAABjIR2AAg");
	this.shape_18.setTransform(74.0739,68.6406);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("An5KnIAAhjIg0ACQgRABgLgOQgMgNAAgRIgnx0QAAgSALgNQALgNAQgBIPwggQAUgBALAKQAJAJADARQABAKgBATIgBAMIAcQHICdAAIAAD6g");
	this.shape_19.setTransform(74.0739,68.6406);

	var maskedShapeInstanceList = [this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(9,0,129.8,137.3), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ArVKuIAA1bIWrAAIAAVbg");
	mask_1.setTransform(72.6,68.625);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCED4F").s().p("AozB2IAAjrIRnAAIAADrg");
	this.shape.setTransform(80.6,124.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDgOIAIAAIACAzIgJAAgAgGgdQAAgHAGAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAGgGABQgGAAAAgGg");
	this.shape_1.setTransform(88.65,57.945);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEgZIAIAAIAEBIIgJABgAgGgoQAAgHAGAAQAGAAgBAHQAAAGgFAAQgHAAABgGg");
	this.shape_2.setTransform(86.6,59.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLABQgBgaAPgBQAFAAACACIABAKQgCgDgDAAQgIABACAQQAAASAHAAQADgBACgCIAAAJQgDADgEAAIgBAAQgNAAgCgag");
	this.shape_3.setTransform(84.2436,59.1755);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAAQgCgZANgBQAGAAADAHIAAgGIAJgBIACAzIgKABIAAgHQgDAIgFAAIgBAAQgMAAAAgbgAgGgCIABAGQAAAOAFAAQAIAAgCgPIAAgFQAAgPgGAAQgGAAAAAPg");
	this.shape_4.setTransform(80.5672,59.3254);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSgpIAKAAIACA2IAKgWIALgBIgNAYIARAcIgMAAIgNgZIABAZIgKABg");
	this.shape_5.setTransform(76.775,57.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBAlIgCgzIAIAAIACAzgAgGgdQAAgHAGAAQAFAAABAHQAAAGgGAAQgGAAAAgGg");
	this.shape_6.setTransform(73.4,58.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFgpIAIgBIADBUIgIABg");
	this.shape_7.setTransform(71.425,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAmIgDhJIAKAAIAAAHQADgIAFAAQANgBAAAcQACAZgNAAQgFAAgEgGIABAcgAAAgbQgDAAgBAGQgBAEAAAFIAAAGQAAAOAGAAQAGAAAAgOIgBgHQAAgPgGAAIAAABg");
	this.shape_8.setTransform(68.3828,60.7996);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAAQgCgZANgBQAGAAADAHIAAgGIAJAAIACAyIgJABIgBgHQgDAIgFAAIAAAAQgNAAAAgbgAAAgRQgGAAAAAPIABAGQAAAOAFAAQAGAAAAgPIAAgFQAAgPgGAAIAAAAg");
	this.shape_9.setTransform(64.2172,59.8755);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAaIgOgxIAKgBIAHAkIABgNIAEgYIAGAAIAHAlIAFglIAJgBIgKA0IgHAAIgHgdIgBgIQABAKgEAbg");
	this.shape_10.setTransform(56.85,60.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCALIgQguIALgBIAIAkIAIgkIAJAAIgSBJIgJAAg");
	this.shape_11.setTransform(49.65,61.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAhIgCgrIgFAAIAAgHIAFAAIgBgPIAJAAIAAAOIAGAAIAAAHIgFABIACArg");
	this.shape_12.setTransform(46.3,59.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJgYIAJgBIAAAHQADgIAHAAIAAAKIgBAAQgJAAAAAMIABAeIgJABg");
	this.shape_13.setTransform(43.7,60.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPABQgBgaAQgBQAOAAACAbIgVABQAAARAGgBQAHAAgCgKIAJAAQAAAHgBADQgDAIgKABIAAAAQgPAAgBgagAgFgMIgBAIIAMAAQgCgOgEAAQgEABgBAFg");
	this.shape_14.setTransform(40.272,60.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFAAIgFAAIAAgHIAEgBIAAgSQgBgQALAAIAGABIABAKIgEgBQgFAAAAAHIABARIAIAAIAAAHIgIABIACArIgIAAg");
	this.shape_15.setTransform(36.95,59.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPABQgBgaAQgBQAPAAABAaQABAagQABIgBAAQgOAAgBgagAAAgRQgFAAAAAPIAAAFQAAAPAGAAQAHAAgCgPIAAgFQAAgPgGAAIAAAAg");
	this.shape_16.setTransform(33.675,60.9263);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLAWQgCgDgBgKIgBgiIAJAAIABAeIABAEQAAAJAFgBQAEAAABgEIAAgIIgBgeIAKgBIABAiQABASgRABQgHAAgEgFg");
	this.shape_17.setTransform(94.5529,48.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAlIgBgyIAIgBIACAzgAgGgdQAAgHAGAAQAFAAABAHQAAAGgGAAQgGAAAAgGg");
	this.shape_18.setTransform(91.35,47.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAbIgCgzIAJAAIAAAGQAFgHAFgBQAKAAABAPIABAlIgJAAIgBghIgBgHQgCgDgDAAQgFAAAAALIABAhg");
	this.shape_19.setTransform(88.35,48.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPABQAAgaAPgBQAOAAACAbIgVABIABAKQACAHADgBQAGAAAAgKIAJAAQAAAGgCAEQgDAIgKABIAAAAQgPAAgBgagAAAgSQgFAAAAAOIALAAIgBgJQgCgFgDAAIAAAAg");
	this.shape_20.setTransform(84.325,48.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCAqIgDhTIAIAAIADBTg");
	this.shape_21.setTransform(81.275,47.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDgKIgGAAIAAgHIAFgBIAAgOIAIgBIABAPIAFAAIAAAIIgFAAIACArIgJABg");
	this.shape_22.setTransform(79,48.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPABQAAgaAPgBQAOAAACAcIgVAAIABAKQACAHADAAQAGAAAAgLIAJAAQAAAGgCAFQgDAIgKAAIAAAAQgPAAgBgagAAAgRQgFAAAAANIALAAQgCgNgEAAIAAAAg");
	this.shape_23.setTransform(75.975,49.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgBAlIgCgzIAIAAIACAzgAgGgdQAAgDACgCQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAGAAAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgGAAAAgGg");
	this.shape_24.setTransform(72.895,48.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAbIgOgzIAKAAIAEAWIADAOIABgNIAEgYIAGAAIAHAkIAFgkIAJAAIgKAzIgHAAIgHgdIAAgIIgEAmg");
	this.shape_25.setTransform(69.175,49.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAlIAAgJQAEADAEAAQAFAAAAgHQAAgEgHgGQgJgGAAgIQAAgFAEgEQADgEAFgBQAFAAAEACIAAAJQgDgCgEAAQgGABABAEQAAADAHAGQAIAGABAJQAAAHgEAEQgEAEgFAAIgBAAQgDAAgFgCgAgFgXIAJgPIAIAEIgMAOg");
	this.shape_26.setTransform(64.9528,48.2792);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCALIgPguIAKgBIAIAkIAIgkIAJgBIgSBKIgJABg");
	this.shape_27.setTransform(61.25,50.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKAbIgOgzIAKAAIAEAWIADAOIABgNIAEgXIAGgBIAFAZIACALIAFgkIAJAAIgKAzIgHAAIgHgdIAAgIIgEAmg");
	this.shape_28.setTransform(56.375,49.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPABQgBgaAQgBQAPAAABAaQABAagQABIgBAAQgOAAgBgagAAAgRQgFAAAAAPIAAAFQAAAPAGAAQAHAAgCgPIAAgFIgBgJQgCgGgDAAIAAAAg");
	this.shape_29.setTransform(49.1749,50.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPgjIAJAAIAAAGQAEgHAFAAQAIgBADALQACAFAAAMQAAAZgMAAQgEAAgEgGIABAbIgKABgAgFgMIAAAFQACAPAEAAQAFgBAAgNIAAgHQgCgPgEAAQgFABAAAPg");
	this.shape_30.setTransform(45.125,51.2989);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgPAAQgCgZANgBQAGAAADAHIAAgGIAJgBIACAzIgKABIAAgHQgDAIgFAAIgBAAQgMAAAAgbgAgGgCIABAGQAAAOAFAAQAIAAgCgPIAAgFQAAgPgGAAQgGAAAAAPg");
	this.shape_31.setTransform(38.2672,50.4754);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPgYIAJAAIABAGQAEgHAFgBQALAAAAAOIABAmIgJAAIgBghQgBgKgFAAQgFAAAAALIABAgIgJABg");
	this.shape_32.setTransform(34.125,50.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPABQgBgaAQgBQAOAAACAcIgVAAQAAARAGAAQAHAAgCgLIAJAAQAAAHgBAEQgDAIgKAAIAAAAQgPAAgBgagAAAgRQgEAAgBAFIgBAIIAMAAQgCgNgEAAIAAAAg");
	this.shape_33.setTransform(30.1186,50.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQACQgBgoAWgBQAFAAAEACIAAAKQgEgCgDAAQgIAAgCAMQgCAFAAANQACAdANAAIAGgCIABAJQgFADgEAAIgBAAQgWAAgBgmg");
	this.shape_34.setTransform(26.2205,49.5763);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhABVIAHgvQAWAOAUAAQALAAAHgGQAJgGAAgKQAAgWggAAQgQAAgSAHIAPhyIBhAAIAAAuIg4AAIgDAWIAIAAQAZAAAQASQAQAQABAaQAAAfgXAUQgVAUgfAAQgcAAgagPg");
	this.shape_35.setTransform(80.65,78.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgxBPQgQgUAAgeQAAgbASgmIAgg/IA3AAIgoBHQAJgFAJAAQAXAAANAVQAMARAAAYQAAAfgSAUQgTAUgeAAQgeAAgSgVgAgNAeQAAAcANAAQAPAAAAgcQAAgagPAAQgNAAAAAag");
	this.shape_36.setTransform(65.575,78.375);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(24.2,43.1,112.8,92.80000000000001), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArVKuIAA1bIWrAAIAAVbg");
	mask.setTransform(72.6,68.625);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgfBDIAAgnQAGAIAJAAQAMAAAAgRIAAhZIAkAAIAABgQAAASgEAIQgKATgYAAQgMAAgNgEg");
	this.shape.setTransform(125.375,124.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgiBGIAAiLIBFAAIAAAhIggAAIAAAVIAdAAIAAAeIgdAAIAAAWIAgAAIAAAhg");
	this.shape_1.setTransform(117.325,124.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgSBGIAAiLIAlAAIAACLg");
	this.shape_2.setTransform(109.4,124.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AANBGQgXhBgFgOIADAsIAAAjIgkAAIAAiLIAkAAIASAxIALAiQgEghAAgRIAAghIAkAAIAACLg");
	this.shape_3.setTransform(100.025,124.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AAQBGIgDgRIgZAAIgDARIgnAAIAiiLIAtAAIAeCLgAAAgPIgHAlIAPAAIgHg5g");
	this.shape_4.setTransform(88.025,124.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AgSBGIAAhpIgVAAIAAgiIBPAAIAAAiIgVAAIAABpg");
	this.shape_5.setTransform(78.525,124.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AASA9QgIgKAAgQQAAgQAIgJQAJgKAOAAQAOAAAJAKQAHAKAAAPQAAAPgHALQgJAKgOAAQgPAAgIgKgAAjAkQAAAPAFAAQAHAAAAgQQAAgPgHAAQgFAAAAAQgAgnBGIA8iLIATAAIg7CLgAg+gIQgIgKAAgQQAAgRAIgJQAJgKAOAAQAOAAAJAKQAHAKAAAQQAAAPgHALQgJAJgOAAQgPAAgIgJgAgtgiQAAAQAFAAQAHAAAAgQQAAgPgHgBQgFAAAAAQg");
	this.shape_6.setTransform(61.5,124.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AgmAwQgLgUAAgcQAAgcALgUQANgXAZAAQAagBANAZQALATAAAcQAAAcgKATQgNAagaAAQgagBgNgYgAgLgEIAAARIADAQQACALAGAAQAMAAAAgkIAAgIQAAgjgMAAQgLAAAAAjg");
	this.shape_7.setTransform(48.175,124.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AgtA9IAFgiQAPAKAOAAQAJAAAFgEQAFgEABgIQgBgPgVAAQgMAAgNAEIALhQIBEAAIAAAhIgnAAIgCAPIAFAAQASAAALANQAMAMAAASQAAAWgQAOQgPAOgVAAQgUAAgTgKg");
	this.shape_8.setTransform(37,124.175);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(32.4,116.8,96.19999999999999,14.500000000000014), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ArVKuIAA1bIWrAAIAAVbg");
	mask_1.setTransform(72.6,68.625);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BB2F26").ss(1,0,0,4).p("AihBXIFDis");
	this.shape.setTransform(71.325,98.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgOA5QASgnADgIQgFAEgGAAQgJAAgFgIQgFgHAAgRQAAgRAEgIQAFgNAOAAQAPAAAGANQADAJAAARQAAAZgQAiIgHAPgAgJgTQAAAUAJAAQAJAAAAgVQAAgWgJAAQgJAAAAAXg");
	this.shape_1.setTransform(80.125,98.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgYA5IAPghQAMgYAEgOQADgJAAgGQAAgOgKAAQgGAAgCAKIAAAPIgPAAIAAgEQAAgQAEgIQAGgKAOAAQAYAAAAAcQAAAUgSAgIgKAUIAbAAIAAANg");
	this.shape_2.setTransform(73.675,98.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AgJASIAIglIALADIgMAkg");
	this.shape_3.setTransform(68.8,104.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgYAfIAAgDIAOAAIAAADQAAANAKABQAJgBAAgVQAAgTgMAAIgEAAIAAgLQAKAAADgFQADgDAAgLQAAgRgJAAQgHAAAAASIgPAAIAAgCQAAgPAEgGQAGgJAMAAQAXAAAAAeQAAANgEAIQgCADgGADQAIABACAEQAEAIAAAMQAAAggaAAQgXABAAgbg");
	this.shape_4.setTransform(64.375,98.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiOBSIAAiiIEdAAIAACig");
	this.shape_5.setTransform(72.225,98.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C0412").s().p("AgRAqIgNgHIAJgSQAJAJALgBQAEAAADgDQACgCAAgDQAAgDgDgCIgKgEIgFgCQgJgCgEgEQgFgEAAgKQAAgMAHgIQAIgIANgBQAMgBANAHIgIARQgHgFgHAAQgEAAgCADQgCACAAADIABADIAGAEIAHACQAKACAFAFQAGAFAAAJQABANgIAIQgIAJgPABQgLAAgGgCg");
	this.shape_6.setTransform(96.2556,31.9188);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C0412").s().p("AgLgpIAUAAIADBSIgUABg");
	this.shape_7.setTransform(90.525,32.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C0412").s().p("AgKgWIgRABIgBgTIA5gCIAAATIgRAAIACBBIgVABg");
	this.shape_8.setTransform(85.4,32.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C0412").s().p("AgNgpIAWgBIAjBSIgXABIgGgOIgdABIgGAOIgXABgAgJALIASAAIgKgag");
	this.shape_9.setTransform(78.625,32.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C0412").s().p("AgjgpIAigBQAMAAAHAHQAHAHABAMQAAAMgGAEQgFAFgGACIAbAhIgbABIgVggIABAhIgVABgAgNgYIABAVIAEAAQAHgCACgDQADgCAAgFQAAgEgDgCQgCgEgIAAg");
	this.shape_10.setTransform(70.075,32.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C0412").s().p("AgdAgQgNgLAAgTQgBgSAMgMQALgNAUgBQANgBAKAGQAKAGAFALIgUAJQgDgGgDgCQgGgEgGAAQgIABgFAFQgIAIABALQAAALAIAGQAGAHAIgBQAHAAAFgEQAEgEABgFIgSAAIgBgQIArgBQACAYgOANQgKAKgTABIgBAAQgSAAgMgLg");
	this.shape_11.setTransform(60.7315,33.0933);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C0412").s().p("AgaAiQgIgIAAgMQAAgOALgQIASgZIAYgBIgWAdIALgDQALAAAIAHQAIAIAAALQABANgJAJQgKALgQAAIgBAAQgQAAgKgJgAgJAEQgEADAAAFQAAAGAEAEQAEAEAFAAQAFAAAFgFQADgDAAgGQAAgFgEgEQgEgDgFAAQgFAAgEAEg");
	this.shape_12.setTransform(49.78,33.6013);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C0412").s().p("AgHAIIgTABIAAgPIATAAIgBgTIAPgBIABATIATAAIAAAOIgTABIABATIgPAAg");
	this.shape_13.setTransform(42.725,33.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C0412").s().p("AgaAiQgIgIAAgMQgBgOAMgQIASgaIAYAAIgWAdQAGgDAEAAQAMAAAIAHQAHAHABAMQAAAOgIAIQgJAKgRABIgBAAQgRAAgJgJgAAAAAQgFAAgEADQgEAEAAAFQABAHADADQAEAEAFAAQAGgBAEgEQADgEAAgFQgBgGgDgDQgEgDgEAAIgBAAg");
	this.shape_14.setTransform(35.774,34.1013);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C0412").s().p("AgLghIASgBIAcBCIgTABIgEgLIgXABIgEALIgUABgAgHAJIAOAAIgIgVg");
	this.shape_15.setTransform(92.15,20.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0C0412").s().p("AggggIASgBIABAcIATgcIAWgBIgaAhIAfAiIgXABIgXgdIABAeIgRAAg");
	this.shape_16.setTransform(84.775,20.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0C0412").s().p("AgiggIASAAIAgAnIgBgoIARgBIADBDIgRABIghgoIABApIgSAAg");
	this.shape_17.setTransform(76.6,20.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0C0412").s().p("AgZAaQgLgKAAgPQgBgOAKgKQALgLAQAAQAPgBALAKQALAKAAAPQABAOgKALQgLAKgQABQgQAAgKgKgAgNgLQgFAFAAAHQAAAHAGAGQAGAFAHgBQAIAAAFgFQAFgGAAgHQAAgHgGgFQgFgFgIAAQgIAAgFAGg");
	this.shape_18.setTransform(68.175,21.1455);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0C0412").s().p("AgcggIAbgBQAKgBAGAGQAGAGAAAJQAAAKgFADQgDAEgGABIAWAbIgVABIgRgZIABAaIgSAAgAgKgTIAAAQIAEAAQAFAAACgDQACgDAAgDQAAgDgCgCQgDgDgFAAg");
	this.shape_19.setTransform(61.175,21.4179);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0C0412").s().p("AgdggIAXgBQARAAAJAIQAKAJAAAPQABAOgJAJQgJALgPAAIgZABgAgKATIAEAAQAIAAAFgGQAFgEAAgJQgBgKgFgEQgEgEgJgBIgEAAg");
	this.shape_20.setTransform(54.03,21.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0C0412").s().p("AgTggIAlgCIAAAPIgTABIAAALIATgBIAAAOIgSABIAAAMIAUgBIAAAPIglABg");
	this.shape_21.setTransform(47.75,21.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0C0412").s().p("AgJghIARgBIACBEIgQABg");
	this.shape_22.setTransform(43.3,22);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0C0412").s().p("AgaghIAagBQAKABAFAFQAEAEAAAIQABAEgCAEQgCAEgEACQAGAAAEACQAFAFAAAIQAAAJgFAEQgGAIgMAAIgbABgAgGAUIAEAAQAHAAADgDQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIgCgFQgDgDgHABIgEAAgAgHgGIADgBQAEAAACgCQABgBAAgDIgBgFQgCgCgEABIgDAAg");
	this.shape_23.setTransform(38.5273,22.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0C0412").s().p("AAMApQgDgCAAgDQAAgEACgDQADgDADgCIgFgMIgYABIgEAMIgSABIAXhEIATgBIAbBCIgKABIgEADQgCAEAAABIABACQAAAAABAAQAAAAAAABQAAAAABAAQAAAAABAAIAFgCIgCAJIgHACQgFAAgCgDgAgHAAIAOAAIgIgVg");
	this.shape_24.setTransform(110.075,9.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0C0412").s().p("AgMAgQgDgCgEgEIALgNQABAEACACIADABIACgBQACgCAAgFIgCguIASAAIACAtQAAALgGAGQgFAHgKAAIgBAAQgFAAgFgDg");
	this.shape_25.setTransform(103.775,8.9536);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0C0412").s().p("AgOAaQgKgKgCgOQAAgOAKgLQAKgKAOgBQAJAAAHADIABAVQgGgHgKAAQgIABgDAEQgFAFAAAIQAAAIAGAFQADAEAJAAQAIAAAHgHIAAAUQgJAEgFAAIgCAAQgOAAgKgJg");
	this.shape_26.setTransform(98.45,9.0763);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0C0412").s().p("AgLghIASgBIAcBCIgTABIgEgLIgXAAIgFAMIgTABgAgHAJIAOgBIgIgUg");
	this.shape_27.setTransform(92.05,9.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0C0412").s().p("AggggIASgBIABAdIATgdIAWgBIgaAhIAfAiIgXABIgXgdIABAdIgSABg");
	this.shape_28.setTransform(84.675,9.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0C0412").s().p("AgJghIAQAAIADBDIgRAAg");
	this.shape_29.setTransform(79,9.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0C0412").s().p("AgUghIASAAIACA0IAUgBIABAPIgmABg");
	this.shape_30.setTransform(75.225,9.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0C0412").s().p("AgZggIAbgBQAKgBAHAGQAGAGABAKQAAAMgFAFQgGAFgLABIgKAAIABAXIgSABgAgHgCIAGAAIAHgCQACgCAAgFQAAgDgDgDQgCgCgEAAIgGAAg");
	this.shape_31.setTransform(69.575,10.1433);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0C0412").s().p("AgLghIATgBIAcBCIgTABIgFgLIgYABIgEALIgSABgAgHAJIAOAAIgHgVg");
	this.shape_32.setTransform(62.75,10.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0C0412").s().p("AABgSIgaABIgBgPIA4gCIgeA1IAcgBIABAPIg6ACg");
	this.shape_33.setTransform(53.825,10.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0C0412").s().p("AgZAaQgLgKAAgPQgBgOAKgKQALgLAQAAQAPgBALAKQALAJABAQQAAAOgKALQgKAKgRABQgQAAgKgKgAAAgRQgIAAgFAGQgFAFAAAHQAAAIAGAEQAFAGAIgBQAIAAAFgFQAFgGAAgHQAAgGgGgGQgGgFgHAAIAAAAg");
	this.shape_34.setTransform(44.4957,10.9955);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0C0412").s().p("AggggIASAAIABAcIATgdIAWgBIgaAhIAfAhIgXABIgXgcIABAdIgSABg");
	this.shape_35.setTransform(37.325,11.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0C0412").s().p("AgUghIASAAIACA0IAUgBIAAAPIglABg");
	this.shape_36.setTransform(31.25,11.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0C0412").s().p("AgHACIgagiIAVAAIANASIALgTIAWgBIgYAjIABAhIgRABg");
	this.shape_37.setTransform(25.025,11.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0C0412").s().p("AgHgSIgPABIAAgPIAtgCIAAAQIgNAAIABA0IgQABg");
	this.shape_38.setTransform(18.9,11.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FCED4F").s().p("Aoch4IQxglIAIEUIwvAng");
	this.shape_39.setTransform(65.225,28.375);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(11.2,5.3,108.1,103.10000000000001), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Aj1lHIG6gfIAxKuIm7Afg");
	mask_2.setTransform(24.55,35.9);

	// Layer_3
	this.instance_2 = new lib.Image();
	this.instance_2.setTransform(0,3.1,0.3443,0.3443,-3.9999);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0,0,49.1,71.8), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ap0EQIAAofITpAAIAAIfg");
	mask_3.setTransform(62.925,27.175);

	// Layer_3
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B22A27").s().p("AgXAdQgKgLAAgRQAAgRALgLQAKgKANAAQAPAAAIAKQAKAJAAAUIAAACIgyAAQABAKAFAEQAEAFAIAAQAGAAAFgEQAFgDACgFIAOAIQgFAIgHAGQgIAFgNAAQgOAAgKgJgAgKgSQgEADgBAGIAgAAQAAgFgFgFQgEgDgHAAQgGgBgFAFg");
	this.shape_82.setTransform(87.725,37.95);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B22A27").s().p("AgHA4IAAhHIAPAAIAABHgAgKgtQAAgKAKAAQAFAAADADQADADAAAEQAAALgLAAQgKAAAAgLg");
	this.shape_83.setTransform(81.725,35.925);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B22A27").s().p("AAOAlIAAgnQAAgNgEgDQgDgDgGAAQgGAAgDAEQgGAFABAOIAAAjIgRAAIAAhHIARAAIAAAHQAIgJAKAAQAOAAAIAKQAEAGAAANIAAAsg");
	this.shape_84.setTransform(75.7,37.85);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B22A27").s().p("AgIA+IAAh7IAQAAIAAB7g");
	this.shape_85.setTransform(69.65,35.325);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B22A27").s().p("AgbAbQgKgLgBgQQABgQAKgLQAMgKAPAAQARAAAKAKQAMALAAAQQAAAQgMALQgKALgRAAQgPAAgMgLgAgNgRQgIAHABAKQgBAKAHAHQAFAGAJAAQAKAAAFgGQAHgHAAgKQAAgKgIgHQgFgFgJAAQgIAAgFAFg");
	this.shape_86.setTransform(63.8,37.95);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B22A27").s().p("AAAgEIgTAtIgmhLIATAAIATAnIATgtIAUAtIATgnIATAAIgmBLg");
	this.shape_87.setTransform(53.425,37.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B22A27").s().p("AgaAbQgLgLAAgQQAAgQALgLQAKgKAQAAQAQAAALAKQALALAAAQQAAAQgLALQgLALgQAAQgPAAgLgLgAgOgRQgGAHAAAKQAAAKAFAHQAGAGAJAAQAKAAAGgGQAFgHAAgKQAAgKgGgHQgGgFgJAAQgIAAgGAFg");
	this.shape_88.setTransform(43.425,37.95);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B22A27").s().p("AgbA0QgIgLgBgQQAAgRALgKQAKgKAOAAQANAAAIALIAAg9IARAAIAAB7IgRAAIAAgHQgJAJgMAAQgQAAgKgLgAgNAJQgGAHAAAJQAAAKAGAGQAGAHAIAAQAIAAAFgFQAHgHAAgKQAAgMgHgGQgFgGgIAAQgIAAgGAHg");
	this.shape_89.setTransform(34.2,35.425);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B22A27").s().p("AgNBSIAAhzIAbAAIAABzgAgKg3QgEgEgBgHQABgGAEgFQAFgEAFAAQAGAAAFAEQAFAFAAAGQAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_90.setTransform(89.5,19.275);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B22A27").s().p("AghAdQgLgMAAgQQAAgRAMgNQALgLARAAQAMAAAKAKIAAgHIAbAAIAABMIgbAAIAAgJQgIALgPAAQgQAAgMgMgAgKgMQgGAGAAAGQAAAHAGAGQAGAFAFAAQAHAAAFgGQAGgEAAgIQAAgGgGgGQgFgFgHAAQgGAAgFAFg");
	this.shape_91.setTransform(80.475,19.675);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B22A27").s().p("AgoAnIAkg2IgfAAIAAgXIBMAAIgkA2IAgAAIAAAXg");
	this.shape_92.setTransform(70.875,19.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B22A27").s().p("AghAgIAKgTQAGAEAFACQAFACAGAAQAEAAACgCIABgEIgBgDIgGgDIgHgCQgKgCgEgFQgFgEAAgIQAAgLAHgIQAKgJARAAQAKAAAPAFIgKASQgHgEgHAAQgEAAgDABQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAABAAIAOAEQAJACADAEQAGAFAAAJQAAAMgIAIQgKAJgSAAQgQAAgPgJg");
	this.shape_93.setTransform(63.325,19.675);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B22A27").s().p("AgeAeQgMgMAAgSQAAgRAMgMQAMgLASAAQATAAAMAKQALANABATIAAADIg5AAQAAAIAFAFQAEADAGABIAJgCQAEgDABgDIAbAAQgDAKgHAHQgLAKgUAAQgUAAgLgLgAgJgSQgEADAAAFIAeAAQgBgFgDgDQgFgFgHABQgFgBgFAFg");
	this.shape_94.setTransform(54.6,19.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B22A27").s().p("AgMA/IAAhNIAaAAIAABNgAgKgjQgFgFAAgGQAAgGAFgFQAFgFAFABQAHgBAEAFQAEAFABAGQgBAHgEAEQgEAFgHgBQgFABgFgFg");
	this.shape_95.setTransform(47.4,17.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B22A27").s().p("AAmAnIAAgmQAAgMgEgEQgDgCgEAAQgEAAgEADQgFAFAAAJIAAAnIgbAAIAAgmQAAgMgDgEQgDgDgGAAQgEAAgDADQgFAFAAALIAAAmIgcAAIAAhMIAcAAIAAAJQAJgKAOAAQAJAAAFADQAHAEAEAHQAEgHAGgEQAHgDAJAAQAOAAAIAHQAHAGAAAPIAAAxg");
	this.shape_96.setTransform(37.525,19.625);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F5DF43").s().p("Ag+EDIo2h1QBHjZDGhzQDGhzDfAvII3B2QhHDYjGBzQiNBSiaAAQg/AAhAgOg");
	this.shape_97.setTransform(62.925,27.1771);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B22A27").s().p("AgjEIIpAg8QAxjfC6iGQC6iGDiAYIJAA8QgxDfi6CGQieByi8AAQggAAgigEg");
	this.shape_98.setTransform(62.9,27.1686);

	var maskedShapeInstanceList = [this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,125.9,54.4), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("At6OzIAA9lIb1AAIAAdlg");
	mask_4.setTransform(89.05,94.7);

	// Layer_3
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6A120A").s().p("AtzuyIbuAAQg3DAAADKQAADAA0C/QozAsnbEuQnQEokUHag");
	this.shape_99.setTransform(89.05,94.7);

	var maskedShapeInstanceList = [this.shape_99];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_99).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0,0,178.1,189.4), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("ArpJJIAAyRIXTAAIAASRg");
	mask_5.setTransform(74.625,58.475);

	// Layer_3
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FCEE4F").s().p("ArppIIWdAAQgMBTAAAqQAAD6BCDuQmbAgmACRQl2CNlCDug");
	this.shape_100.setTransform(74.625,58.475);

	var maskedShapeInstanceList = [this.shape_100];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_100).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0,0,149.3,117), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AsTKUIAA0nIYnAAIAAUng");
	mask_6.setTransform(78.775,65.975);

	// Layer_3
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#A32318").s().p("AsMqTIX4AAIgOBMQgMBTAAAqQAAD6BCDuQmcAgl/CRQl2CNlDDuQghAcgyAug");
	this.shape_101.setTransform(78.775,65.975);

	var maskedShapeInstanceList = [this.shape_101];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0,0,157.6,132), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AswLUIAA2nIZhAAIAAWng");
	mask_7.setTransform(81.725,72.425);

	// Layer_3
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6A120A").s().p("AsprPQMmACMNgGQgUB8AACCQAADhA7DWQnWAkmqDIQmeDClDFEQAAtyAHoxg");
	this.shape_102.setTransform(81.725,72.425);

	var maskedShapeInstanceList = [this.shape_102];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0,0,163.5,144.9), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AtdMbIAA41Ia7AAIAAY1g");
	mask_8.setTransform(86.175,79.475);

	// Layer_3
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A32318").s().p("AtdsaIasAAIgZA7QgTCoAABWQAADhA7DWQnXAlmpDHQmeDClEFFQg1A8gkAWg");
	this.shape_103.setTransform(86.175,79.475);

	var maskedShapeInstanceList = [this.shape_103];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0,0,172.4,159), null);


(lib.Symbol1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ar2EHQhtAAhNhNQhNhNAAhtIAAAAQAAhsBNhNQBNhNBtAAIXtAAQBtAABNBNQBNBNAABsIAAAAQAABthNBNQhNBNhtAAg");
	this.shape.setTransform(102.2,18.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,-7.4,204.4,52.5), null);


(lib.cta_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#88C927","#368D00","#368D00","#57AF58"],[0,0.357,0.655,1],-80,0,80,0).s().p("ApdC0QhQAAg5g0Qg5g1AAhLIAAAAQAAhKA5g1QA5g0BQAAIS7AAQBQAAA5A0QA5A1AABKIAAAAQAABLg5A1Qg5A0hQAAg");
	this.shape.setTransform(80,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,36);


(lib.cta_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("ApdizIS7AAQBRAAA4A0QA5A1AABKIAAAAQAABLg5A1Qg4A0hRAAIy7AAQhRAAg5g0Qg4g1AAhLIAAAAQAAhKA4g1QA5g0BRAAg");
	this.shape.setTransform(80,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,164,40);


(lib.cta_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ageg8IA9A9Ig7A8");
	this.shape.setTransform(3.125,6.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,8.3,14.3);


(lib.ClipGroup_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("ApuCGIAAkLITdAAIAAELg");
	mask_9.setTransform(62.275,13.4);

	// Layer_3
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFF34A").s().p("AAOAcIgRAAQgDAEgEAAQgDAAgCgCQgDgCAAgEQAAgDADgCIgLgsIgJAAIAAgGIAOAAIADAMIA2AAIgKAkIgFAAQADAAADADQACABAAADQAAAEgCACQgDACgDAAQgEAAgDgEgAASAYIgBAAIABABQAAABAAABQAAAAABABQAAAAABAAQAAABABAAQAEAAAAgFQAAgDgEAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABgAgMAWQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAAFAEAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIABgBIgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgBAAgAgJASQAEAAACAEIARAAQADgFAEAAIgeAAgAgMANIAkAAIAIgbIg0gBg");
	this.shape_104.setTransform(119.225,18.55);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFF34A").s().p("AAQAZIgVAAQAAAFgFAAQgFAAgBgGQAAgDADgBIgMguIgJAAIAAgDIALAAIAEAMIA2ABIgKAfIgkAAIABAEIAAAAQAFAAAAAEIAVAAQABgEAEAAQAGAAAAAFQAAAGgGAAQgEAAgBgFg");
	this.shape_105.setTransform(119.2,18.55);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#DA3832").s().p("AgkAkQgPgPAAgVQAAgVAPgOQAPgQAVAAQAVAAAPAQQAPAOABAVQgBAVgPAPQgPAPgVABQgVgBgPgPg");
	this.shape_106.setTransform(119.4,18.05);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#DA3832").s().p("AgPAcIAAg3IAfAAIAAAMIgRAAIAAAKIAQAAIAAALIgQAAIAAAKIARAAIAAAMg");
	this.shape_107.setTransform(58.4,2.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#DA3832").s().p("AALAcIgLgfIgKAfIgQAAIgQg3IAPAAIAKAjIAMgjIALAAIAMAjIAJgjIAQAAIgRA3g");
	this.shape_108.setTransform(52.1,2.975);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DA3832").s().p("AgMAcQgFgCgEgFQgEgDgDgGQgCgGAAgGQAAgFACgGQADgGAEgDQAEgEAFgDQAGgCAGAAQAHAAAGACQAEACAGAFQAEAEACAFQACAFAAAGQAAAHgCAFQgCAFgEAEQgGAFgEACQgGACgHAAQgGAAgGgCgAgFgNIgFADIgEAFIgBAFIABAGIAEAFIAFADQADACACAAIAGgCQADAAACgDIAEgFIABgGQAAgCgBgDIgEgFQgCgDgDAAIgGgCQgCAAgDACg");
	this.shape_109.setTransform(44.575,2.975);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DA3832").s().p("AAHAcIgSgYIAAAYIgPAAIAAg3IAPAAIAAAXIARgXIATAAIgXAbIAYAcg");
	this.shape_110.setTransform(38.95,2.975);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DA3832").s().p("AAOAcIgbghIAAAhIgOAAIAAg3IAOAAIAbAhIAAghIAOAAIAAA3g");
	this.shape_111.setTransform(32.475,2.975);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DA3832").s().p("AgMAcQgEgCgGgFQgEgEgCgFQgCgFAAgHQAAgGACgFQACgFAEgEQAGgFAEgCQAGgCAGAAQAIAAAEACQAGACAEAFQAEADADAGQACAGAAAFQAAAGgCAGQgDAGgEADQgEAFgGACQgEACgIAAQgGAAgGgCgAgFgNQgDAAgCADIgEAFQgBADAAACIABAGIAEAFQACADADAAIAFACQAEAAACgCQADgBACgCIAEgFIABgGIgBgFIgEgFQgCgCgDgBQgCgCgEAAIgFACg");
	this.shape_112.setTransform(25.775,2.975);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#DA3832").s().p("AAGAcIgNgVIAAAVIgQAAIAAg3IAXAAQAFAAADABIAFAEIAEAFIABAHQAAAGgDAEQgDAEgGABIASAXgAgHgCIACAAQAEAAABgCQADgBAAgEQAAgDgDgCQgBgCgEAAIgCAAg");
	this.shape_113.setTransform(20.2,2.975);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#DA3832").s().p("AgYAcIAAg3IAWAAQAFAAAFACQAFADAEADQAEAEACAFQACAFAAAFQAAAGgCAFQgCAFgEAEIgJAGQgFACgFAAgAgJAQIADAAIAGgBIAFgEQADgCAAgDIABgGIgBgFIgDgFIgFgEIgGgBIgDAAg");
	this.shape_114.setTransform(14.625,2.975);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#DA3832").s().p("AgPAcIAAg3IAfAAIAAAMIgQAAIAAAKIAPAAIAAALIgPAAIAAAKIAQAAIAAAMg");
	this.shape_115.setTransform(9.65,2.975);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#DA3832").s().p("AgGAcIAAg3IANAAIAAA3g");
	this.shape_116.setTransform(6.325,2.975);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#DA3832").s().p("AgVAcIAAg3IAVAAQAJAAADADQAEAEAAAHQAAAEgBADIgFAFIAFABIAEADIACAEIABAFQAAAEgCADIgEAFQgCADgEAAIgIABgAgGARIADAAQAFAAACgCQADgBAAgDQAAgDgDgCQgCgBgFAAIgDAAgAgGgFIADAAQAGAAAAgGQAAgFgGAAIgDAAg");
	this.shape_117.setTransform(2.725,2.975);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#221F20").s().p("AgMA0IAAhnIAaAAIAABng");
	this.shape_118.setTransform(109.85,13.65);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#221F20").s().p("AgEAzQgKgEgIgIQgHgHgFgKQgEgMAAgKQgBgLAFgKQAFgLAHgGQAHgGALgFQAJgFAKAAIAMACIANAEIAAAgQgKgLgNAAQgFAAgGACIgIAGIgGAJQgCAEAAAGQAAAHACAEQADAGADADQADAFAFABQAEACAHAAQANAAAKgLIAAAhIgDABIgMACIgKABQgKAAgJgDg");
	this.shape_119.setTransform(103.2,13.65);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#221F20").s().p("AglA9IAMgVQAFAFAGACQAGADAGAAQAFAAADgDQAEgDAAgEIgBgEIgDgDIgEgDIgRgGIgJgGQgEgCgDgGQgCgFAAgGQAAgHACgIQAEgGAEgEQAEgEAHgDQAIgCAGgBQAGABAKACIAQAGIgLAVIgJgFIgIgCQgFAAgDADQgDACAAAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIADACIANAFQANAEAGAHQAGAIAAALQAAAIgCAHQgEAHgEAEQgHAFgGACQgIADgIgBQgTAAgRgLgAgKgzIAWgVIAOAOIgaASg");
	this.shape_120.setTransform(94.6,11.85);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#221F20").s().p("AgWAzQgKgFgIgHQgIgIgEgJQgEgJAAgNQAAgLAEgJQAEgKAIgHQAIgJAKgDQAKgEAMgBQAMABALAEQAKADAIAJQAIAHAEAKQAEAKAAAKQAAAMgEAKQgEAJgIAIQgIAHgKAFQgLADgMAAQgLAAgLgDgAgKgZQgGACgDAEIgHAJQgCAEAAAGQAAAHACAEQACAFAFAEQADAFAGABQAEACAGAAQAGAAAFgCQAFgBAEgFQAFgDABgGQADgGAAgFQAAgFgDgFIgGgJQgFgEgEgCQgGgCgFAAQgFAAgFACg");
	this.shape_121.setTransform(84.2,13.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#221F20").s().p("AAZA0Igxg+IAAA+IgbAAIAAhnIAbAAIAxA+IAAg+IAbAAIAABng");
	this.shape_122.setTransform(71.85,13.65);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#221F20").s().p("AgsA0IAAhnIAnAAQAKAAAJAFQAJAEAHAHQAIAJADAHQAEAKAAAJQAAAKgEAJQgEAKgHAHQgFAGgLAFQgJAFgKAAgAgRAdIAGAAQAFAAAGgCQAGgDADgEQAEgDACgGQACgGAAgFQAAgEgCgGQgCgFgEgEQgDgEgGgDQgFgCgGAAIgGAAg");
	this.shape_123.setTransform(60.825,13.65);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#221F20").s().p("AACA/QgCgEAAgFQAAgFABgEIAJgIIgmAAIAAhnIA5AAIAAAYIgeAAIAAARIAdAAIAAAWIgdAAIAAARIAeAAIAAAXQgFgBgEACQgCABgDACIgCAEIAAACQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAIgDIgEAOIgFACIgFAAQgHABgEgEg");
	this.shape_124.setTransform(51.775,15.15);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#221F20").s().p("AguA0IAwhQIgnAAIAAgXIBUAAIgwBQIArAAIAAAXg");
	this.shape_125.setTransform(43.225,13.65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#221F20").s().p("AgFAzQgJgEgIgIQgHgGgFgLQgFgKABgMQgBgLAFgKQAFgKAGgHQAHgGALgFQAKgFAKAAQAGABAGABIAMAEIAAAgQgJgLgNAAQgGAAgGACQgFACgCAEQgEAEgCAFQgCAEAAAGQAAAHACAEQACAGAEADQACAEAFACQAFACAGAAQANAAAKgLIAAAhIgOADIgKABQgKAAgKgDg");
	this.shape_126.setTransform(34.15,13.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#221F20").s().p("AguA0IAwhQIgnAAIAAgXIBUAAIgwBQIArAAIAAAXg");
	this.shape_127.setTransform(25.025,13.65);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#221F20").s().p("AglArIALgVQAHAFAFACQAGADAGAAQAFAAADgDQAEgDAAgEIgBgEIgDgDIgFgDIgQgGIgJgGQgEgCgCgFQgDgFAAgHQAAgHADgIQADgGAEgEQADgEAIgDQAHgCAHgBQAHABAIACQAHABAJAFIgKAVIgIgFIgJgCQgFAAgDADQgDACAAAEQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIADADIANAFQANAEAGAGQAGAIAAALQAAAIgDAHQgDAHgFAEQgGAFgGACQgJADgHgBQgTAAgRgLg");
	this.shape_128.setTransform(16.1,13.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#221F20").s().p("AgXAzQgIgEgKgIQgGgHgFgKQgEgJAAgNQAAgLAEgJQAFgLAGgGQAKgJAIgDQALgEAMgBQAMABAKAEQALAEAIAIQAIAHAEAKQAEAKAAAKQAAAMgEAKQgEAJgIAIQgIAHgLAFQgKADgMAAQgMAAgLgDgAgKgZQgGACgDAEIgHAJQgCAEAAAGQAAAHACAEQACAFAFAEQADAFAGABQAEACAGAAQAGAAAFgCQAFgBAEgFQAEgDADgGQACgGAAgFQAAgFgCgFQgDgFgEgEQgEgEgFgCQgGgCgFAAQgEAAgGACg");
	this.shape_129.setTransform(5.7,13.65);

	var maskedShapeInstanceList = [this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0,0,124.6,23.2), null);


(lib.Mieszaj_Dowolnie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_7();
	this.instance.setTransform(52.45,22.7,0.8339,0.8339,0,0,0,62.9,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,105,45.5);


(lib.ClipGroup_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("Egg9AOVIAA8pMBB7AAAIAAcpg");
	mask_10.setTransform(210.95,91.675);

	// Layer_3
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#2F795E").s().p("Ak1J3IJr1AImYWTg");
	this.shape_130.setTransform(372.2,96.55);

	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(213.35,96.05,1,1,0,0,0,203.5,86.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#26483E").s().p("A/EMWIAA4gMA+IgAMInEYsg");
	this.shape_131.setTransform(208.7,88.9);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.setTransform(211,92,1,1,0,0,0,211,92);

	var maskedShapeInstanceList = [this.shape_130,this.instance,this.shape_131,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_131},{t:this.instance},{t:this.shape_130}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0,0,421.9,183.4), null);


(lib.ClipGroup_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgDACIAGgCIACACg");
	mask.setTransform(0.5,0.2);

	// Layer_3
	this.instance = new lib.ClipGroup_0_1();
	this.instance.setTransform(0.5,0.3,1,1,0,0,0,0.5,0.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_1, new cjs.Rectangle(0.1,0.1,0.9,0.30000000000000004), null);


(lib.ClipGroup_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ajbg8IFsh0IBLDtIlsB0g");
	mask_1.setTransform(22,17.675);

	// Layer_3
	this.instance = new lib.ClipGroup_1_3();
	this.instance.setTransform(22,17.7,1,1,0,0,0,22,17.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_2, new cjs.Rectangle(0,0,44,35.4), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiekBIEIgZIA0IcIkHAZg");
	mask.setTransform(15.85,28.325);

	// Layer_3
	this.instance = new lib.ClipGroup_9();
	this.instance.setTransform(15.8,28.4,1,1,0,0,0,15.8,28.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(0,0,31.7,56.7), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	mask_11.graphics.p("AqNN+IAA77IUaAAIAAb7g");
	mask_11.setTransform(65.35,89.375);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_10();
	this.instance_2.setTransform(65.3,86.3,1,1,0,0,0,65.3,86.3);

	this.instance_3 = new lib.ClipGroup_1_0();
	this.instance_3.setTransform(19.45,144.4,1,1,0,0,0,15.8,28.4);

	this.instance_4 = new lib.ClipGroup_2_1();
	this.instance_4.setTransform(65.3,89.7,1,1,0,0,0,65.3,89.7);

	this.instance_5 = new lib.ClipGroup_3_2();
	this.instance_5.setTransform(46.05,137.1,1,1,0,0,0,22,17.7);

	this.instance_6 = new lib.ClipGroup_4();
	this.instance_6.setTransform(65.3,86.3,1,1,0,0,0,65.3,86.3);

	this.instance_7 = new lib.ClipGroup_5();
	this.instance_7.setTransform(65.3,86.3,1,1,0,0,0,65.3,86.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAGArIgSgVIAAAVIgTAAIAAhVIATAAIAAAzIARgSIAZAAIgZAYIAbAcg");
	this.shape_132.setTransform(82.525,144.475);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgcAaIAZgkIgVAAIAAgQIA1AAIgaAlIAWAAIAAAPg");
	this.shape_133.setTransform(73,146.15);

	this.instance_8 = new lib.ClipGroup_6();
	this.instance_8.setTransform(65.3,86.3,1,1,0,0,0,65.3,86.3);

	this.instance_9 = new lib.ClipGroup_7_1();
	this.instance_9.setTransform(27,113.25,1,1,0,0,0,0.5,0.3);

	this.instance_10 = new lib.ClipGroup_8();
	this.instance_10.setTransform(65.3,86.3,1,1,0,0,0,65.3,86.3);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.shape_132,this.shape_133,this.instance_8,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_133},{t:this.shape_132},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0,0,130.7,178.8), null);


(lib.ClipGroup_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Aj0lEIG5geIAwKmIm6Agg");
	mask_4.setTransform(24.55,36.25);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_0_2();
	this.instance_2.setTransform(24.6,35.9,1,1,0,0,0,24.6,35.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_4, new cjs.Rectangle(0.1,0.7,49,71.1), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	mask_12.graphics.p("ArVKuIAA1bIWrAAIAAVbg");
	mask_12.setTransform(72.6,68.625);

	// Layer_3
	this.instance_11 = new lib.ClipGroup_6_1();
	this.instance_11.setTransform(72.6,68.6,1,1,0,0,0,72.6,68.6);

	this.instance_12 = new lib.ClipGroup_1_4();
	this.instance_12.setTransform(120.7,53.45,1,1,0,0,0,24.6,35.9);

	this.instance_13 = new lib.ClipGroup_2_2();
	this.instance_13.setTransform(72.6,68.6,1,1,0,0,0,72.6,68.6);

	this.instance_14 = new lib.ClipGroup_3_1();
	this.instance_14.setTransform(72.6,68.6,1,1,0,0,0,72.6,68.6);

	this.instance_15 = new lib.ClipGroup_4_1();
	this.instance_15.setTransform(72.6,68.6,1,1,0,0,0,72.6,68.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AggDOIAAk6IgtAAIAAhhICbAAIAAGbg");
	this.shape_134.setTransform(42.125,89.175);

	this.instance_16 = new lib.ClipGroup_5_1();
	this.instance_16.setTransform(72.6,68.6,1,1,0,0,0,72.6,68.6);

	var maskedShapeInstanceList = [this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.shape_134,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.shape_134},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0,0,145.2,137.3), null);


(lib.mc_E4_blur = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_15();
	this.instance.setTransform(86.2,79.5,1,1,0,0,0,86.2,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_E4_blur, new cjs.Rectangle(0,0,172.4,159), null);


(lib.mc_E2_blur = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_13();
	this.instance.setTransform(78.8,66,1,1,0,0,0,78.8,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_E2_blur, new cjs.Rectangle(0,0,157.6,132), null);


(lib.gph_bgX2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	mask.setTransform(150,300);

	// E1_yellow
	this.instance = new lib.ClipGroup_12();
	this.instance.setTransform(71.6,40.5,1,1,0,0,0,74.6,58.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// E5_ret
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxVDSIAAmjMAirAAAIAAGjg");
	this.shape.setTransform(191.4038,10.3282,1.0123,1.0632);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// E2_blur
	this.instance_1 = new lib.mc_E2_blur();
	this.instance_1.setTransform(73.8,47,1,1,0,0,0,78.8,66);
	this.instance_1.filters = [new cjs.BlurFilter(13, 13, 3)];
	this.instance_1.cache(-2,-2,162,136);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// E3
	this.instance_2 = new lib.ClipGroup_14();
	this.instance_2.setTransform(76.7,53.4,1,1,0,0,0,81.7,72.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// E4_blur
	this.instance_3 = new lib.mc_E4_blur();
	this.instance_3.setTransform(77.2,60.5,1,1,0,0,0,86.2,79.5);
	this.instance_3.filters = [new cjs.BlurFilter(13, 13, 3)];
	this.instance_3.cache(-2,-2,176,163);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// E5
	this.instance_4 = new lib.ClipGroup_11();
	this.instance_4.setTransform(80,75.7,1,1,0,0,0,89,94.7);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// circles
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B0402").s().p("AnpHpQjJjLAAkeQAAkeDJjLQDLjKEeABQEegBDLDKQDKDLAAEeQAAEejKDLQjLDKkeAAQkeAAjLjKg");
	this.shape_1.setTransform(-29.875,326.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B0402").s().p("EgLSA4YQkAkBAAlsQAAlrEAkBQEBkBFsAAQFqAAEBEBQEAEBAAFrQAAFskAEBQkBEBlqAAQlsAAkBkBgEgHoglbQj8j9AAlkQAAlkD8j9QD8j7FkAAQFkAAD7D7QD9D9gBFkQABFkj9D9Qj7D8lkAAQlkAAj8j8g");
	this.shape_2.setTransform(282.95,318.975);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// BG
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20705").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_3.setTransform(150,300);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.gph_bgX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	mask.setTransform(150,300);

	// E1_yellow
	this.instance = new lib.ClipGroup_12();
	this.instance.setTransform(71.6,40.5,1,1,0,0,0,74.6,58.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// E5_ret
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxVDSIAAmjMAirAAAIAAGjg");
	this.shape.setTransform(191.4038,10.3282,1.0123,1.0632);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// E2_blur
	this.instance_1 = new lib.mc_E2_blur();
	this.instance_1.setTransform(73.8,47,1,1,0,0,0,78.8,66);
	this.instance_1.filters = [new cjs.BlurFilter(13, 13, 3)];
	this.instance_1.cache(-2,-2,162,136);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// E3
	this.instance_2 = new lib.ClipGroup_14();
	this.instance_2.setTransform(76.7,53.4,1,1,0,0,0,81.7,72.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// E4_blur
	this.instance_3 = new lib.mc_E4_blur();
	this.instance_3.setTransform(77.2,60.5,1,1,0,0,0,86.2,79.5);
	this.instance_3.filters = [new cjs.BlurFilter(13, 13, 3)];
	this.instance_3.cache(-2,-2,176,163);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// E5
	this.instance_4 = new lib.ClipGroup_11();
	this.instance_4.setTransform(80,75.7,1,1,0,0,0,89,94.7);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// circles
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B0402").s().p("AnpHpQjJjLAAkeQAAkeDJjKQDLjKEeAAQEeAADLDKQDKDKAAEeQAAEejKDLQjLDKkeAAQkeAAjLjKg");
	this.shape_1.setTransform(-48.875,247.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B0402").s().p("EgLSA4YQkAkBAAlsQAAlrEAkBQEBkBFsAAQFqAAEBEBQEAEBAAFrQAAFskAEBQkBEBlqAAQlsAAkBkBgEgHoglbQj8j9AAlkQAAlkD8j9QD8j7FkAAQFkAAD7D7QD9D9gBFkQABFkj9D9Qj7D8lkAAQlkAAj8j8g");
	this.shape_2.setTransform(282.95,318.975);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// BG
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20705").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_3.setTransform(150,300);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.gph_bg4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	mask.setTransform(150,300);

	// E1_yellow
	this.instance = new lib.ClipGroup_12();
	this.instance.setTransform(71.6,40.5,1,1,0,0,0,74.6,58.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// E5_ret
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxVDSIAAmjMAirAAAIAAGjg");
	this.shape.setTransform(191.4038,10.3282,1.0123,1.0632);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// E2_blur
	this.instance_1 = new lib.mc_E2_blur();
	this.instance_1.setTransform(73.8,47,1,1,0,0,0,78.8,66);
	this.instance_1.filters = [new cjs.BlurFilter(13, 13, 3)];
	this.instance_1.cache(-2,-2,162,136);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// E3
	this.instance_2 = new lib.ClipGroup_14();
	this.instance_2.setTransform(76.7,53.4,1,1,0,0,0,81.7,72.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// E4_blur
	this.instance_3 = new lib.mc_E4_blur();
	this.instance_3.setTransform(77.2,60.5,1,1,0,0,0,86.2,79.5);
	this.instance_3.filters = [new cjs.BlurFilter(13, 13, 3)];
	this.instance_3.cache(-2,-2,176,163);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// E5
	this.instance_4 = new lib.ClipGroup_11();
	this.instance_4.setTransform(80,75.7,1,1,0,0,0,89,94.7);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// circles
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B0402").s().p("EALfA4YQkAkBAAlsQAAlrEAkBQECkBFrAAQFrAAEBEBQEBEBAAFrQAAFskBEBQkBEBlrAAQlrAAkCkBgEgjugDGQjJjLAAkeQAAkeDJjLQDLjKEfAAQEeAADLDKQDKDLAAEeQAAEejKDLQjLDKkeAAQkfAAjLjKgEAP7glbQj7j9AAlkQAAlkD7j9QD8j7FlAAQFkAAD8D7QD8D9AAFkQAAFkj8D9Qj8D8lkAAQllAAj8j8g");
	this.shape_1.setTransform(132.1,318.975);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20705").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_2.setTransform(150,300);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.cta_6copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol1copy();
	this.instance.setTransform(88.05,30.45,0.79,0.79,0,0,0,102.3,26.2);
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-2,-9,208,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,-1.1,175,56);


(lib.CTAGreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BaIAAgaIBKhcIhCAAIAAgYIBoAAIAAAXIhNBfIBQAAIAAAYgAgRg8IAOgdIAdAAIgaAdg");
	this.shape.setTransform(37.175,-1.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BIIAAiOIA1AAQAQAAAKACQAMAEAKAJQAJAKAEANQAFAOAAAUQAAARgFANQgFAQgKAJQgHAIgNADQgKADgOABgAgeAwIAVAAQALgBAGgBQAHgCAEgEQAFgEADgJQADgLAAgQQAAgQgDgIQgDgJgFgGQgGgEgHgCQgGgCgRAAIgNAAg");
	this.shape_1.setTransform(24.1,0.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBIIgchqIgbBqIggAAIgiiOIAeAAIAVBhIAahhIAiAAIAZBjIAWhjIAdAAIgiCOg");
	this.shape_2.setTransform(7.15,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoBIIgMghIg4AAIgMAhIgfAAIA4iOIAeAAIA5COgAATAPIgTg1IgTA1IAmAAg");
	this.shape_3.setTransform(-8.525,0.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeBIIgVggQgKgQgFgEQgDgFgFgCQgFgBgKAAIgFAAIAAA8IgdAAIAAiOIA8AAQAXgBAKAEQAKAEAHAKQAFAKABAMQgBAQgIALQgKAJgTAEQAKAFAFAHQAHAGAKAQIASAdgAgigKIAVAAQATAAAGgCQAFgCADgEQADgEAAgHQAAgHgEgFQgEgEgHgBIgUgBIgWAAg");
	this.shape_4.setTransform(-22.3,0.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2BIIAAiOIAvAAQAZAAAIACQAMADAJAKQAIALAAASQAAAMgFAJQgFAJgHAFQgHAFgIABQgKACgTABIgTAAIAAA2gAgZgGIAQAAQAQAAAGgCQAGgCADgFQADgFAAgGQAAgIgEgFQgFgFgHgCQgFgBgPAAIgOAAg");
	this.shape_5.setTransform(-36.675,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA9QgOgMgDgYIAcgDQADAOAHAHQAIAGAMAAQAOAAAHgFQAHgGAAgIQAAgFgCgDQgDgEgIgDIgWgGQgXgGgKgIQgNgLAAgRQAAgLAGgJQAHgKALgFQAMgFAQAAQAaAAAOAMQAOAMAAATIgdABQgBgKgHgFQgGgFgLAAQgMAAgIAFQgEADAAAGQAAAFAEAEQAGAEAUAFQAVAFAKAGQAKAFAGAIQAFAJAAAOQAAAMgGALQgHAKgNAGQgMAFgTAAQgaAAgPgNg");
	this.shape_6.setTransform(-50.475,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.instance = new lib.cta_3("synched",0);
	this.instance.setTransform(58.6,0.35,1,1,0,0,0,3.1,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_6
	this.instance_1 = new lib.cta_4("synched",0);
	this.instance_1.setTransform(0,0,1,1,0,0,0,80,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_7
	this.instance_2 = new lib.cta_5("synched",0);
	this.instance_2.setTransform(0,0,1,1,0,0,0,80,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_2
	this.instance_3 = new lib.cta_6copy("synched",0);
	this.instance_3.setTransform(0.5,8.75,1,1,0,0,0,87.3,27);
	this.instance_3.alpha = 0.3984;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTAGreen, new cjs.Rectangle(-84.5,-20,174,55.6), null);


(lib.BIEDRONKOWQ_Osz_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_16();
	this.instance.setTransform(73.9,15.9,1.1893,1.1893,0,0,0,62.3,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AorgTIRXAAIxXAng");
	this.shape.setTransform(65.9854,29.2748,1.1893,1.1893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.2,148.1,31.9);


(lib.gph_Tela3copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txts_CURVAS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAuQAFAAACgCIABgEIABgGIAAhBIAMAAIAABGQAAAKgGAEQgFAFgKAAgAgBgsIAAgNIAMAAIAAANg");
	this.shape.setTransform(237.575,466.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAeQgEgCgCgEIgCgGIgBgHIAAgVIABgHIACgGQACgEAEgCQAFgDAFAAQAFAAADACIAGAEQAGAGAAAIIAAARIgZAAIAAAJQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQAAABAAAAQABAAAAABQABAAABAAQAAAAAAAAQADAAACgCIABgEIAOAAQAAAIgGAFIgGAFIgIABQgFAAgFgDgAgDgRQgCACAAADIAAAIIALAAIAAgIQAAgDgBgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_1.setTransform(233.9,466.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAtIAAg/IANAAIAAA/gAgGgfIAAgNIANAAIAAANg");
	this.shape_2.setTransform(229.8,465.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAGAhIAAgsQAAgEgBgCQgCgBgDAAQgDAAgBABIgBAHIAAArIgNAAIAAhAIANAAIAAAGIAFgEQACgCAEAAIAFAAIAEADIADAFIABAHIAAAxg");
	this.shape_3.setTransform(225.575,466.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAgQgCAAgCgCIgDgFQgCgEAAgFIABgKQABgEADgCQABgCAFgCIAJgBIABAAIABAAIACAAIACAAIAAgGQAAgEgCgCQgBgCgDAAIgFACQgCABAAAEIgNAAQABgJAFgFQADgDAEgBQADgCAEAAIAHABIAGAEIAFAHQABADAAAFIAAAsIgNAAIAAgGIgBAAIgEAFQgCACgFAAgAgDAGQgDACAAAFQAAAEACACQACADACAAQADAAACgDQACgCAAgEIAAgIIgEgBQgDAAgDACg");
	this.shape_4.setTransform(220.15,466.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIAqQgEAAgDgCIgEgDIgDgFIAAgFIAAgmIgHAAIAAgLIAHAAIAAgTIAMAAIAAATIAIAAIAAALIgIAAIAAAiIAAAEIABACIADABIAEAAIAAAMg");
	this.shape_5.setTransform(215.975,465.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADArQgDgCAAgFIAAgIQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFIAAAIQAAAFgDACQgDADgFAAQgEAAgDgDgAAIAaIgBADIAAAGIABACIACABIADgBIABgCIAAgGIgBgDIgDgBIgCABgAgTAtIAehZIAJAAIgeBZgAgRgTQgDgDAAgEIAAgJQAAgEADgDQADgDAFAAQAFAAADADQACADAAAEIAAAJQAAAEgCADQgDACgFAAQgFAAgDgCgAgMgkIgBACIAAAGIABADIADABIACgBIABgDIAAgGIgBgCIgCgBIgDABg");
	this.shape_6.setTransform(208.925,465.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAtIgHgEIgEgGQgBgEAAgEIAAg0QAAgFABgEIAEgGIAHgEIAGgBIAHABIAGAEIAFAGQABAEAAAFIAAA0QAAAEgBAEIgFAGIgGAEIgHABIgGgBgAgEgeQgBACAAADIAAA0QAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAg0QAAgDgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_7.setTransform(203.775,465.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAsIgHgDIgEgHQgBgDAAgFIAAgDIANAAIAAADQAAADABACQACACACAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCAAgDIAAgVQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAIgCABIgCAAIgBACIAAACIgMAAIAAgxIAkAAIAAANIgYAAIAAAYIAEgDIAFgBQAHAAAEAEQAEAEAAAHIAAAXQAAAFgBADIgFAHIgGADIgHABIgGgBg");
	this.shape_8.setTransform(198.475,465.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGgKIANAAIAAAMIgNAJg");
	this.shape_9.setTransform(191.4,469.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAHIAAgNIALAAIAAANg");
	this.shape_10.setTransform(188.45,469.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAIAtIgKgcIgGAKIAAASIgNAAIAAhZIANAAIAAA1IAOgbIANAAIgPAZIATAmg");
	this.shape_11.setTransform(184.55,465.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAgQgCAAgCgCIgEgFQgBgEAAgFIABgKQABgEACgCQADgCADgCIAJgBIACAAIACAAIABAAIACAAIAAgGQAAgEgBgCQgCgCgEAAIgDACQgCABgBAEIgMAAQAAgJAGgFQACgDADgBQAEgCADAAIAIABIAGAEIAEAHQACADAAAFIAAAsIgNAAIAAgGIAAAAIgGAFQgBACgFAAgAgDAGQgDACAAAFQAAAEACACQABADADAAQADAAACgDQACgCAAgEIAAgIIgDgBQgEAAgDACg");
	this.shape_12.setTransform(178.8,466.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAuIAAhaIANAAIAAAGIAFgFQABgBAFAAQAIAAADAFIACAGIAAAJIAAAYIAAAJQgBAGgFAEQgCABgFAAQgEAAgCgBQgDgCgCgEIAAAhgAgEgeQgBADAAAEIAAAYQAAACABACQABABAAAAQABABAAAAQABAAABAAQAAAAAAAAQAEAAABgCIABgFIAAgXQAAgEgBgDQgCgBgDAAQAAAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_13.setTransform(173.475,468.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAeQgDgCgDgEIgCgGIgBgHIAAgVIABgHIACgGQADgEADgCQAFgDAFAAQAGAAAEADQAEACADAEIACAGIAAAHIAAAVIAAAHIgCAGQgDAEgEACQgEADgGAAQgFAAgFgDgAgDgRQgCACAAADIAAAZQAAADACACQAAABAAAAQABAAAAABQABAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQACgCgBgDIAAgZQABgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_14.setTransform(168.1,466.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAuIAQhbIAKAAIgPBbg");
	this.shape_15.setTransform(163.75,465.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAFAtQgEAAgBgCQgCgDgCgDQgBgDgBgHIAAgVIgGAGIAAgJIAGgFIAAgrIANAAIAAAgIAGgGIAAAJIgGAGIAAAfQAAADABACIAFACIAAALIgIAAg");
	this.shape_16.setTransform(160.5,465.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAgIAAgKIAUgqIgSAAIAAgLIAhAAIAAAKIgUApIAUAAIAAAMg");
	this.shape_17.setTransform(156.8,466.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAuIAOgmIAAAAIgBAAIgEABQgDAAgDgDQgDgBgCgCIgBgDIgBgDIAAgFIAAgJIAAgIIAAgFIABgDIACgDQACgEAEgCQAFgCAEAAQAFAAAEACQAFACACAEIACADIABADIAAAFIAAAIIAAAGIAAAFIgBADIgBADIgRAugAgEgeQgBACAAADIAAARQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQABAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgRQAAgDgCgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_18.setTransform(148.925,465.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAuIAAgNIAWgqQACgEAAgCIAAgHIAAgDIgBgEIgBgCIgEgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBACAAADIAAAHIgNAAIAAgHQAAgEABgDIAEgHIAGgEQAEgBADAAQAFAAAEABIAGAFIADAHIABAJIAAAGIAAAEIgCAEIgCAFIgSAjIAWAAIAAAOg");
	this.shape_19.setTransform(143.625,465.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFgKIALAAIAAAMIgLAJg");
	this.shape_20.setTransform(139.5,469.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAtQgDgBgDgCIgFgGQgBgEAAgFIAAgIIANAAIAAAHQAAADABACQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQADAAACgCQABgCAAgDIAAgNQAAgFgCgCIgDgBIgEgBIAAgKIAHgBQACgCAAgFIAAgMQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgDAAQgDAAgBACIgBAEIAAAIIgNAAIAAgIQAAgEABgDIAEgGIAGgEIAHgCQAFAAAEACIAFAEIACADIACAEIABANIAAAHIgBAFIgCADIgFADIAFADIACAEIABAFIAAAIIAAAIIgBAEIgBAEIgBADIgGAGQgEACgGAAIgGgBg");
	this.shape_21.setTransform(135.375,465.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGAVIAAgNIANAAIAAANgAgGgHIAAgNIANAAIAAANg");
	this.shape_22.setTransform(128.3,467.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAgQgDAAgCgCIgDgFQgCgEAAgFIABgKQABgEACgCQADgCAEgCIAJgBIABAAIABAAIACAAIACAAIAAgGQAAgEgBgCQgCgCgDAAIgFACQgBABgBAEIgMAAQAAgJAFgFQADgDADgBQAEgCAEAAIAHABIAGAEIAEAHQACADAAAFIAAAsIgNAAIAAgGIAAAAIgGAFQgBACgFAAgAgDAGQgDACAAAFQAAAEACACQABADADAAQADAAACgDQACgCAAgEIAAgIIgEgBQgDAAgDACg");
	this.shape_23.setTransform(124.15,466.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAGAhIAAgsQAAgEgBgCQgCgBgDAAQgDAAgBABIgBAHIAAArIgNAAIAAhAIANAAIAAAGIAFgEQACgCAEAAIAFAAIAEADIADAFIABAHIAAAxg");
	this.shape_24.setTransform(118.825,466.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAhIAAhAIANAAIAAAHQADgDADgCQAEgCAGAAIAAANIgEAAIgFAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAIgDAFIgBAHIAAAlg");
	this.shape_25.setTransform(114.3,466.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAgQgDAAgCgCIgDgFQgCgEAAgFIABgKQABgEACgCQADgCAEgCIAJgBIABAAIABAAIACAAIACAAIAAgGQAAgEgBgCQgCgCgDAAIgFACQgBABgBAEIgMAAQAAgJAFgFQADgDADgBQAEgCAEAAIAHABIAGAEIAFAHQABADAAAFIAAAsIgNAAIAAgGIAAAAIgGAFQgBACgFAAgAgDAGQgDACAAAFQAAAEACACQABADADAAQADAAACgDQACgCAAgEIAAgIIgEgBQgDAAgDACg");
	this.shape_26.setTransform(109.3,466.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AACAtQgDAAgCgCQgDgDgBgDQgCgDAAgHIAAhIIAMAAIAABIQAAADACACIAFACIAAALIgIAAg");
	this.shape_27.setTransform(105.475,465.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKAgIgEgDQgCgBgBgEIgBgHIAAgxIANAAIAAAsQAAAEABACQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQAEAAABgCQABgCAAgFIAAgrIANAAIAABAIgNAAIAAgGIgFAFQgCABgEAAIgFAAg");
	this.shape_28.setTransform(101.025,466.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgFAtIgGgDIgFgGQgCgEAAgGIANAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACACACAAQABAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQABgCAAgDIAAgNQgCAEgDABQgCABgEAAQgIAAgDgFIgCgGIAAgIIAAgYIAAgKQABgHAFgDQACgBAFAAIAEAAIACABIADADIACADIAAgHIANAAIAABIIgBAHQgBADgCADQgDACgDACQgEACgFAAIgFgBgAgEgeQgBACAAAEIAAAYIABAFQABACADAAQADAAACgCQABgCAAgDIAAgYQAAgDgBgDQgCgCgDAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_29.setTransform(95.525,468.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKAeQgDgCgDgEIgCgGIAAgHIAAgVIAAgHIACgGQADgEADgCQAFgDAFAAQAEAAAEACIAGAEQAGAGgBAIIAAARIgZAAIAAAJQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQAAABAAAAQABAAAAABQABAAABAAQAAAAAAAAQADAAACgCIACgEIAMAAQABAIgGAFIgGAFIgIABQgFAAgFgDgAgDgRQgCACgBADIAAAIIANAAIAAgIQAAgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_30.setTransform(90.15,466.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOAhIAAhAIANAAIAAAHQADgDAEgCQADgCAGAAIAAANIgEAAIgEAAQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAIgDAFIgBAHIAAAlg");
	this.shape_31.setTransform(85.75,466.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJAgQgDAAgCgCIgDgFQgCgEAAgFIABgKQABgEACgCQADgCAEgCIAIgBIACAAIABAAIACAAIACAAIAAgGQAAgEgBgCQgCgCgEAAIgEACQgBABgBAEIgMAAQAAgJAFgFQADgDADgBQAEgCADAAIAIABIAGAEIAFAHQABADAAAFIAAAsIgNAAIAAgGIAAAAIgGAFQgBACgFAAgAgDAGQgDACAAAFQAAAEACACQABADADAAQADAAACgDQACgCAAgEIAAgIIgEgBQgDAAgDACg");
	this.shape_32.setTransform(77.8,466.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAGAhIAAgsQAAgEgBgCQgCgBgDAAQgDAAgBABIgBAHIAAArIgNAAIAAhAIANAAIAAAGIAFgEQACgCAEAAIAFAAIAEADIADAFIABAHIAAAxg");
	this.shape_33.setTransform(72.475,466.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgJAeQgEgCgDgEIgCgGIAAgHIAAgVIAAgHIACgGQADgEAEgCQAEgDAFAAQAEAAAEACIAGAEQAGAGgBAIIAAARIgZAAIAAAJQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQAAABAAAAQABAAAAABQABAAABAAQAAAAAAAAQAEAAABgCIACgEIAMAAQABAIgGAFIgGAFIgIABQgFAAgEgDgAgDgRQgDACAAADIAAAIIANAAIAAgIQAAgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_34.setTransform(67.1,466.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGAtQgEgBgDgDQgEgCgBgEQgCgEAAgGIAAgxQAAgFABgDQACgEADgDQACgDAFgBQADgCAEAAQAJAAAGAGQADADABAEQACAEAAAFIAAAFIgNAAIAAgFQAAgDgDgDQgCgDgDAAQgEAAgBADQgCADAAAFIAAAtQAAAEACACQABADAEAAIADAAIACgCIACgDIABgEIAAgFIANAAIAAAGQAAAEgCAEIgEAHQgDADgEABQgDACgFAAIgGgBg");
	this.shape_35.setTransform(61.65,465.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAuQAFAAACgCIABgEIABgGIAAhBIAMAAIAABGQAAAKgGAEQgFAFgKAAgAgBgsIAAgNIAMAAIAAANg");
	this.shape_36.setTransform(286.375,454.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAeQgEgCgDgEIgCgGIAAgHIAAgVIAAgHIACgGQADgEAEgCQAEgDAFAAQAEAAAEACIAGAEQAGAGgBAIIAAARIgZAAIAAAJQAAABABAAQAAABAAAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAAAAAAAAQADAAACgCIACgEIAMAAQABAIgGAFIgGAFIgIABQgFAAgEgDgAgDgRQgDACAAADIAAAIIANAAIAAgIQAAgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_37.setTransform(282.75,454.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgGAtIAAg/IANAAIAAA/gAgGgfIAAgNIANAAIAAANg");
	this.shape_38.setTransform(278.7,452.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAGAgIAAgrQAAgEgBgBQgCgDgDAAQgDAAgBADIgBAGIAAAqIgNAAIAAg/IANAAIAAAHIAFgGQACgBAEAAIAFAAIAEADIADAFIABAHIAAAwg");
	this.shape_39.setTransform(274.525,454.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AATAgIAAgrQAAgEgBgBQgCgDgDAAQgEAAgBADQgCACAAAEIAAAqIgMAAIAAgrQAAgEgBgBQgCgDgDAAQgEAAgBADIgBAGIAAAqIgNAAIAAg/IANAAIAAAHIAFgGQADgBAEAAQAEAAACABIAFAFIAFgFQADgCAFABIAFAAIAFADIADAFQABADAAAEIAAAwg");
	this.shape_40.setTransform(267.775,454.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AADArQgDgCAAgFIAAgIQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFIAAAIQAAAFgDACQgDADgFAAQgEAAgDgDgAAIAaIgBADIAAAGIABACIACABIADgBIABgCIAAgGIgBgDIgDgBIgCABgAgTAtIAehZIAJAAIgeBZgAgRgTQgDgDAAgEIAAgJQAAgEADgDQADgDAFAAQAFAAADADQACADAAAEIAAAJQAAAEgCADQgDACgFAAQgFAAgDgCgAgMgkIgBACIAAAGIABADIADABIACgBIABgDIAAgGIgBgCIgCgBIgDABg");
	this.shape_41.setTransform(258.325,452.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGAtIgHgEIgEgGQgBgEAAgEIAAg0QAAgFABgEIAEgGIAHgEIAGgBIAHABIAGAEIAFAGQABAEAAAFIAAA0QAAAEgBAEIgFAGIgGAEIgHABIgGgBgAgEgeQgBACAAADIAAA0QAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQABAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAg0QAAgDgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_42.setTransform(253.225,452.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGAtIgHgFIgEgGQgBgDAAgEIAAgFIANAAIAAAEQAAADABACQACACACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQABgCAAgDIAAgVQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAIgCABIgCABIgBABIAAACIgMAAIAAgwIAkAAIAAAMIgYAAIAAAYIAEgDIAFgBQAHAAAEAEQAEAEAAAHIAAAYQAAAEgBADIgFAGIgGAFIgHABIgGgBg");
	this.shape_43.setTransform(247.975,452.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgFgKIAMAAIAAAMIgMAJg");
	this.shape_44.setTransform(241,457.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_45.setTransform(238.1,456.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAIAtIgKgcIgHAKIAAASIgMAAIAAhZIAMAAIAAA1IAPgbIANAAIgPAZIATAmg");
	this.shape_46.setTransform(234.25,452.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJAgQgDAAgCgCIgDgFQgCgEAAgFIABgKQABgEACgCQADgCAEgCIAJgBIABAAIABAAIACAAIACAAIAAgGQAAgEgBgCQgCgCgDAAIgFACQgBABgBAEIgMAAQAAgJAFgFQADgDADgBQAEgCAEAAIAHABIAGAEIAFAHQABADAAAFIAAAsIgNAAIAAgGIAAAAIgGAFQgBACgFAAgAgDAGQgDACAAAFQAAAEACACQABADADAAQADAAACgDQACgCAAgEIAAgIIgEgBQgDAAgDACg");
	this.shape_47.setTransform(228.55,454.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgSAuIAAhaIANAAIAAAGIAFgFQABgCAFABQAIgBADAHIACAFIAAAIIAAAZIAAAJQgBAHgFADQgCABgFAAQgEAAgCgBQgDgCgCgEIAAAhgAgEgdQgBACAAADIAAAZQAAACABADQABAAAAAAQABABAAAAQABAAABAAQAAABAAAAQAEgBABgCIABgFIAAgXQAAgEgBgCQgCgDgDAAQAAAAAAABQgBAAgBAAQAAAAgBABQAAAAgBABg");
	this.shape_48.setTransform(223.275,455.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgJAeQgEgCgDgEIgCgGIAAgHIAAgVIAAgHIACgGQADgEAEgCQAEgDAFAAQAGAAAEADQAEACADAEIACAGIAAAHIAAAVIAAAHIgCAGQgDAEgEACQgEADgGAAQgFAAgEgDgAgDgRQgCACgBADIAAAZQABADACACQAAABAAAAQABABAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABgBQACgCAAgDIAAgZQAAgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_49.setTransform(217.95,454.075);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMAuIAQhbIAKAAIgQBbg");
	this.shape_50.setTransform(213.65,452.775);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAFAtQgDgBgCgCQgCgCgCgDQgBgEgBgFIAAgWIgGAGIAAgJIAGgFIAAgqIANAAIAAAfIAGgGIAAAJIgGAFIAAAgQAAAEABABIAFABIAAANIgIgBg");
	this.shape_51.setTransform(210.45,452.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgRAgIAAgKIAUgqIgSAAIAAgLIAhAAIAAAKIgUApIAUAAIAAAMg");
	this.shape_52.setTransform(206.8,454.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgOAtIAOglIAAAAIgBAAIgEABQgDAAgDgCQgDgCgCgDIgBgCIgBgDIAAgFIAAgJIAAgIIAAgEIABgEIACgDQACgEAEgDQAFgBAEAAQAFAAAEABQAFADACAEIACADIABAEIAAAEIAAAIIAAAHIAAAEIgBAEIgBACIgRAtgAgEgeQgBACAAADIAAARQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABABABAAQAAAAAAAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgRQAAgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_53.setTransform(199.025,452.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgSAtIAAgLIAWgrQACgEAAgDIAAgFIAAgEIgBgDIgBgDIgEgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQgBABAAAEIAAAHIgNAAIAAgHQAAgEABgEIAEgGIAGgEQAEgBADAAQAFAAAEABIAGAFIADAIIABAIIAAAFIAAAFIgCAEIgCAFIgSAkIAWAAIAAAMg");
	this.shape_54.setTransform(193.775,452.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgFgKIAMAAIAAAMIgMAJg");
	this.shape_55.setTransform(189.7,457.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGAtQgDgBgDgCIgFgGQgBgEAAgFIAAgIIANAAIAAAHQAAADABACQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQADAAACgCQABgCAAgDIAAgNQAAgFgCgCIgDgBIgEgBIAAgKIAHgBQACgCAAgFIAAgMQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgDAAQgDAAgBACIgBAEIAAAIIgNAAIAAgIQAAgEABgDIAEgGIAGgEIAHgCQAFAAAEACIAFAEIACADIACAEIABANIAAAHIgBAFIgCADIgFADIAFADIACAEIABAFIAAAIIAAAIIgBAEIgBAEIgBADIgGAGQgEACgGAAIgGgBg");
	this.shape_56.setTransform(185.625,452.775);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgFAVIAAgNIALAAIAAANgAgFgHIAAgNIALAAIAAANg");
	this.shape_57.setTransform(178.65,455.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAAAsQgEgEAAgFIABgFQABgDACgCIACgDIAFgEIAAAAIAAgGIAAAAIgGAFQgBACgFAAIgEgBQgDAAgCgCIgDgFQgCgEAAgFIABgJQABgEACgDQADgCAEgCIAJgBIABAAIABAAIACAAIACAAIAAgGQAAgEgBgCQgCgCgDAAIgFACQgBABgBAEIgMAAQAAgJAFgFQADgDADgBQAEgCAEAAIAHABIAGAEIAFAHQABADAAAFIAAAsIgHAAIgGAAIAGAAIgGAIQgCAEAAAEQAAADACACQAAABABAAQABAAAAAAQABABAAAAQABAAAAAAIAEgBIADgBIACAFIgFACIgHABQgGAAgCgDgAgDgHQgDACAAAFQAAADACACQABADADAAQADAAACgDQACgCAAgDIAAgIIgEgBQgDAAgDACg");
	this.shape_58.setTransform(174.55,455.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAIAtIgKgcIgGAKIAAASIgOAAIAAhZIAOAAIAAA1IAOgbIANAAIgPAZIASAmg");
	this.shape_59.setTransform(169.6,452.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgRAsIAAgLIAUgpIgSAAIAAgMIAhAAIAAALIgUApIAUAAIAAAMgAgFgeIAAgNIAKAAIAAANg");
	this.shape_60.setTransform(164.25,452.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgFAtIAAg/IALAAIAAA/gAgFgfIAAgNIALAAIAAANg");
	this.shape_61.setTransform(160.55,452.775);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAGAgIAAgrQAAgEgBgBQgCgDgDAAQgDAAgBADIgBAGIAAAqIgNAAIAAg/IANAAIAAAHIAFgGQACgBAEAAIAFAAIAEADIADAFIABAHIAAAwg");
	this.shape_62.setTransform(156.375,454.05);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAAAsIgFgFIAAAGIgNAAIAAhZIANAAIAAAfIAFgEQACgCAEAAQAEAAADACIAEAEQACACAAADIAAAKIAAAYIAAAIIgCAFQgDAGgIABQgFAAgBgCgAgEgEQgBACAAACIAAAZQAAADABADQACACACAAQADAAACgCQABgDAAgEIAAgXIgBgFQgBgCgEAAQAAAAAAAAQgBAAgBAAQAAABgBAAQAAABgBAAg");
	this.shape_63.setTransform(150.925,452.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgKAeQgDgCgDgEIgCgGIgBgHIAAgVIABgHIACgGQADgEADgCQAFgDAFAAQAGAAAEADQAEACADAEIACAGIAAAHIAAAVIAAAHIgCAGQgDAEgEACQgEADgGAAQgFAAgFgDgAgDgRQgCACAAADIAAAZQAAADACACQAAABAAAAQABABAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABgBQACgCgBgDIAAgZQABgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_64.setTransform(145.6,454.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgQAnIgCgFIAAgIIAAgYIAAgKQABgGAFgDQACgCAFAAQAEAAACACIAFAEIAAgfIANAAIAABZIgNAAIAAgGIgCADIgDACIgCABIgEABQgIgBgDgGgAgEgEIgBAFIAAAXQAAAEABADQACACACAAQADAAACgCQABgDAAgDIAAgZQAAgCgBgCQgCgCgDAAQgDAAgBACg");
	this.shape_65.setTransform(137.375,452.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgJAeQgEgCgDgEIgCgGIAAgHIAAgVIAAgHIACgGQADgEAEgCQAEgDAFAAQAFAAADACIAGAEQAFAGABAIIAAARIgZAAIAAAJQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQABAAABAAQAAAAAAAAQADAAACgCIABgEIAOAAQgBAIgFAFIgGAFIgIABQgFAAgEgDgAgEgRQgBACAAADIAAAIIALAAIAAgIQAAgDgCgCQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_66.setTransform(132.05,454.075);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgRAgIAAgKIAUgqIgSAAIAAgLIAhAAIAAAKIgUApIAUAAIAAAMg");
	this.shape_67.setTransform(127.15,454.075);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgOAgIAAg/IANAAIAAAHQACgEAEgCQAFgBAFAAIAAANIgEgBIgEABQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABIgCADIgBAIIAAAkg");
	this.shape_68.setTransform(123.15,454.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgSAuIAAhaIANAAIAAAGIAFgFQABgCAFABQAIgBADAHIACAFIAAAIIAAAZIAAAJQgBAHgFADQgCABgFAAQgEAAgCgBQgDgCgCgEIAAAhgAgEgdQgBACAAADIAAAZQAAACABADQABAAAAAAQABABAAAAQABAAABAAQAAABAAAAQAEgBABgCIABgFIAAgXQAAgEgBgCQgCgDgDAAQAAAAAAABQgBAAgBAAQAAAAgBABQAAAAgBABg");
	this.shape_69.setTransform(118.125,455.35);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgFAtIAAg/IALAAIAAA/gAgFgfIAAgNIALAAIAAANg");
	this.shape_70.setTransform(111.05,452.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAGAgIAAgrQAAgEgBgBQgCgDgDAAQgDAAgBADIgBAGIAAAqIgNAAIAAg/IANAAIAAAHIAFgGQACgBAEAAIAFAAIAEADIADAFIABAHIAAAwg");
	this.shape_71.setTransform(106.875,454.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgQAnIgCgFIAAgIIAAgYIAAgKQABgGAFgDQACgCAFAAQAEAAACACIAFAEIAAgfIANAAIAABZIgNAAIAAgGIgCADIgDACIgCABIgEABQgIgBgDgGgAgEgEIgBAFIAAAXQAAAEABADQACACACAAQADAAACgCQABgDAAgDIAAgZQAAgCgBgCQgCgCgDAAQgDAAgBACg");
	this.shape_72.setTransform(101.425,452.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgGAtIgHgEIgEgGQgBgEAAgEIAAg0QAAgFABgEIAEgGIAHgEIAGgBIAHABIAGAEIAFAGQABAEAAAFIAAA0QAAAEgBAEIgFAGIgGAEIgHABIgGgBgAgEgeQgBACAAADIAAA0QAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQABAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAg0QAAgDgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_73.setTransform(93.175,452.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgGAtQgDgBgDgCIgFgGQgBgEAAgFIAAgIIANAAIAAAHQAAADABACQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQADAAACgCQABgCAAgDIAAgNQAAgFgCgCIgDgBIgEgBIAAgKIAHgBQACgCAAgFIAAgMQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgDAAQgDAAgBACIgBAEIAAAIIgNAAIAAgIQAAgEABgDIAEgGIAGgEIAHgCQAFAAAEACIAFAEIACADIACAEIABANIAAAHIgBAFIgCADIgFADIAFADIACAEIABAFIAAAIIAAAIIgBAEIgBAEIgBADIgGAGQgEACgGAAIgGgBg");
	this.shape_74.setTransform(87.925,452.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgRAgIAAgKIAUgqIgSAAIAAgLIAhAAIAAAKIgUApIAUAAIAAAMg");
	this.shape_75.setTransform(80.1,454.075);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgJAgQgDAAgCgCIgDgFQgCgEAAgFIABgKQABgEACgCQACgCAFgCIAJgBIABAAIABAAIACAAIACAAIAAgGQAAgEgCgCQgBgCgDAAIgFACQgBABgBAEIgMAAQAAgJAFgFQADgDAEgBQADgCAEAAIAHABIAGAEIAFAHQABADAAAFIAAAsIgNAAIAAgGIAAAAIgFAFQgCACgFAAgAgDAGQgDACAAAFQAAAEACACQACADACAAQADAAACgDQACgCAAgEIAAgIIgEgBQgDAAgDACg");
	this.shape_76.setTransform(72.3,454.075);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAGAgIAAgrQAAgEgBgBQgCgDgDAAQgDAAgBADIgBAGIAAAqIgNAAIAAg/IANAAIAAAHIAFgGQACgBAEAAIAFAAIAEADIADAFIABAHIAAAwg");
	this.shape_77.setTransform(67.025,454.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgJAeQgEgCgDgEIgCgGIAAgHIAAgVIAAgHIACgGQADgEAEgCQAEgDAFAAQAEAAAEACIAGAEQAGAGgBAIIAAARIgZAAIAAAJQAAABABAAQAAABAAAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAAAAAAAAQAEAAABgCIACgEIAMAAQABAIgGAFIgGAFIgIABQgFAAgEgDgAgDgRQgDACAAADIAAAIIANAAIAAgIQAAgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_78.setTransform(61.7,454.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgJAeQgEgCgDgEIgCgGIAAgHIAAgVIAAgHIACgGQADgEAEgCQAEgDAFAAQAFAAADACIAGAEQAFAGAAAJIgMAAQAAgEgCgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCACAAADIAAAaQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQAAAAAAAAQAEAAABgCIACgEIAMAAQAAAIgFAFIgGAFIgIABQgFAAgEgDg");
	this.shape_79.setTransform(56.675,454.075);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgJAgQgDAAgCgCIgDgFQgCgEAAgFIABgKQABgEACgCQACgCAFgCIAJgBIABAAIABAAIACAAIACAAIAAgGQAAgEgCgCQgBgCgDAAIgFACQgCABAAAEIgMAAQAAgJAFgFQADgDAEgBQADgCAEAAIAHABIAGAEIAFAHQABADAAAFIAAAsIgNAAIAAgGIgBAAIgEAFQgCACgFAAgAgDAGQgDACAAAFQAAAEACACQACADACAAQADAAACgDQACgCAAgEIAAgIIgEgBQgDAAgDACg");
	this.shape_80.setTransform(48.35,454.075);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgRAgIAAgKIAUgqIgSAAIAAgLIAhAAIAAAKIgUApIAUAAIAAAMg");
	this.shape_81.setTransform(43.5,454.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgMAcIgEgGQgCgEAAgEIAMAAIACAFQABACADAAQADAAACgCQACgCAAgDQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgCgCgDgBIgGgCQgGgDgDgDQgEgFAAgGQAAgEACgEIAEgGIAGgEIAHgBIAHACQADABADACIADAGQACAEAAAEIgMAAQgBgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABIAAADQABACAEABIAHADQAHADADAEQACAFAAAGQAAAEgBADQgBAEgDACIgGAFIgIABQgHAAgFgFg");
	this.shape_82.setTransform(38.725,454.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgRAsIAAgLIAUgpIgSAAIAAgMIAhAAIAAALIgUApIAUAAIAAAMgAgFgeIAAgNIAKAAIAAANg");
	this.shape_83.setTransform(33.95,452.925);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgFAtIAAg/IALAAIAAA/gAgFgfIAAgNIALAAIAAANg");
	this.shape_84.setTransform(30.25,452.775);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAGAgIAAgrQAAgEgBgBQgCgDgDAAQgDAAgBADIgBAGIAAAqIgNAAIAAg/IANAAIAAAHIAFgGQACgBAEAAIAFAAIAEADIADAFIABAHIAAAwg");
	this.shape_85.setTransform(26.075,454.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgKAuQAFAAACgCIABgEIABgGIAAhBIAMAAIAABGQAAAKgGAEQgFAFgKAAgAgBgsIAAgNIAMAAIAAANg");
	this.shape_86.setTransform(21.475,454.075);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgKAgQgCAAgCgCIgEgFQgBgEAAgFIABgKQABgEADgCQACgCADgCIAJgBIACAAIACAAIABAAIACAAIAAgGQAAgEgBgCQgCgCgEAAIgDACQgCABgBAEIgNAAQABgJAGgFQACgDADgBQAEgCADAAIAIABIAGAEIAEAHQACADAAAFIAAAsIgNAAIAAgGIAAAAIgGAFQgBACgFAAgAgDAGQgDACAAAFQAAAEACACQACADACAAQADAAACgDQACgCAAgEIAAgIIgDgBQgEAAgDACg");
	this.shape_87.setTransform(17.8,454.075);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAKAtIgSg1IgBAAIAAA1IgNAAIAAhZIANAAIASA1IABAAIAAg1IANAAIAABZg");
	this.shape_88.setTransform(12.175,452.775);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_89.setTransform(213.85,519.925);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgLAmQgDgBgDgCQgCgCgBgEQgCgEAAgGQAAgHABgEQABgGACgCQADgDAFgCQAEgBAHAAIACAAIABAAIACAAIACAAIAAgIQAAgEgBgCQgCgCgFgBQgCAAgCACQgCADgBADIgPAAQABgKAGgHQADgDAEgBQAEgCAEAAQAGAAADACQAFABADADQADADACAFQABAEABAGIAAA0IgQAAIAAgIQgDAFgDACQgCACgGAAgAgDAHQgEACAAAHQAAAEACACQACAEADAAQAEAAACgDQACgCAAgFIAAgLIgEAAQgEAAgDACg");
	this.shape_90.setTransform(209.05,516.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAKA2IgNghIgIALIAAAWIgPAAIAAhqIAPAAIAAA/IABAAIARghIAQAAIgSAfIAVAtg");
	this.shape_91.setTransform(203.3,515.35);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAIAnIAAg0QAAgEgCgDQgCgCgEAAQgDAAgCACQgCAEAAAFIAAAyIgPAAIAAhMIAPAAIAAAIIABAAQACgEADgCQADgCAFgBIAGABQADACACACQACACABADQACAEAAAFIAAA6g");
	this.shape_92.setTransform(196.575,516.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgJIAAgYIABgIQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAIIAAAYIgBAJQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgVQgDADAAAEIAAAdQAAAEADACQACACACAAQADAAADgCQABgCAAgEIAAgdQAAgEgBgDQgDgCgDAAQgCAAgCACg");
	this.shape_93.setTransform(190.325,516.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgRAnIAAhMIAPAAIAAAJQAEgEAFgDQAEgCAHgBIAAARIgFgBIgFABIgFACIgDAGQgCACAAAGIAAAsg");
	this.shape_94.setTransform(185.275,516.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgTAuIgCgFIgBgKIAAgeIAAgKQABgJAHgDQACgCAGAAQAFAAACACQAEACACAEIABAAIAAgmIAPAAIAABqIgPAAIAAgHIgDADIgDADIgDABIgFABQgKAAgDgIgAgFgFQgCADAAACIAAAcQAAAFACACQACADADAAQADAAACgCQADgDAAgEIAAgdQAAgDgDgDQgCgCgDAAQgDABgCACg");
	this.shape_95.setTransform(179.425,515.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgJIAAgYIABgIQAAgEACgDQADgFAFgDQAFgDAGAAQAFAAAFACQAEACADADQAGAGAAALIAAAUIgeAAIAAAKQAAADADACQACACACAAQAEAAACgCIABgFIAQAAQAAAKgGAGQgDADgFACQgEACgFAAQgGAAgFgDgAgEgVQgDADAAAEIAAAJIAOAAIAAgJQAAgEgBgDQgDgCgDAAQgCAAgCACg");
	this.shape_96.setTransform(173.175,516.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIAOAAIAABMgAgGglIAAgPIAOAAIAAAPg");
	this.shape_97.setTransform(168.5,515.35);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgYA2IAAhqIAXAAQAGAAAFACQAFACAEAEQADADACAGIABAKIAAADIgBAIIgCAFQgCAEgGADQAGACACAFQADAFAAAJIAAAFQAAAPgHAHQgHAIgOAAgAgIAmIAGAAIAHgBIAEgEIABgFIABgIIgBgHIgCgFIgEgDIgGgBIgGAAgAgIgIIAHAAQAGgBADgEQADgDAAgHQAAgIgDgDQgDgEgHAAIgGAAg");
	this.shape_98.setTransform(163.375,515.35);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgLAmQgDgBgDgCQgCgCgBgEQgCgEgBgGQAAgHACgEQABgGADgCQACgDAFgCQAFgBAGAAIABAAIACAAIACAAIACAAIAAgIQAAgEgBgCQgCgCgFgBQgCAAgCACQgCADgBADIgPAAQAAgKAHgHQADgDAEgBQAFgCADAAQAFAAAEACQAFABADADQADADACAFQACAEAAAGIAAA0IgQAAIAAgIQgDAFgDACQgCACgGAAgAgDAHQgEACAAAHQAAAEACACQACAEADAAQAEAAACgDQACgCAAgFIAAgLIgEAAQgEAAgDACg");
	this.shape_99.setTransform(153.5,516.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgLA3QAFAAADgDIABgFIAAgHIAAhNIAPAAIAABTQAAAMgIAFQgGAGgKAAgAgCg0IAAgQIAPAAIAAAQg");
	this.shape_100.setTransform(148.4,516.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgJIAAgYIABgIQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAIIAAAYIgBAJQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgVQgDADAAAEIAAAdQAAAEADACQACACACAAQADAAADgCQABgCAAgEIAAgdQAAgEgBgDQgDgCgDAAQgCAAgCACg");
	this.shape_101.setTransform(144.175,516.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAUA2IAAhBIgBAAIgPAtIgGAAIgQgtIAAAAIAABBIgPAAIAAhqIAOAAIATA4IAAAAIAUg4IAOAAIAABqg");
	this.shape_102.setTransform(136.7,515.35);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgJIAAgYIABgIQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAIIAAAYIgBAJQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgVQgDADAAAEIAAAdQAAAEADACQACACACAAQADAAADgCQABgCAAgEIAAgdQAAgEgBgDQgDgCgDAAQgCAAgCACg");
	this.shape_103.setTransform(125.925,516.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAKAyQgFAAgEgCIgEgEIgDgGIgBgGIAAguIgIAAIAAgMIAIAAIAAgWIAOAAIAAAWIAJAAIAAAMIgJAAIAAApIAAAFIACACIADABIAEAAIAAAPg");
	this.shape_104.setTransform(121.025,515.75);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAIAnIAAg0QAAgEgCgDQgCgCgEAAQgDAAgCACQgCAEAAAFIAAAyIgPAAIAAhMIAPAAIAAAIIABAAQACgEADgCQADgCAFgBIAGABQADACACACQACACABADQACAEAAAFIAAA6g");
	this.shape_105.setTransform(116.125,516.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgJIAAgYIABgIQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAIIAAAYIgBAJQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgVQgDADAAAEIAAAdQAAAEADACQACACACAAQADAAADgCQABgCAAgEIAAgdQAAgEgBgDQgDgCgDAAQgCAAgCACg");
	this.shape_106.setTransform(109.875,516.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAKA2IgNghIgIALIAAAWIgOAAIAAhqIAOAAIAAA/IABAAIARghIAPAAIgSAfIAXAtg");
	this.shape_107.setTransform(104.05,515.35);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgLAmQgDgBgCgCQgDgCgCgEQgBgEAAgGQgBgHACgEQABgGACgCQADgDAFgCQAFgBAGAAIACAAIABAAIACAAIACAAIAAgIQAAgEgCgCQgBgCgEgBQgCAAgDACQgDADAAADIgPAAQABgKAGgHQADgDAEgBQAEgCAFAAQAEAAAFACQAEABADADQADADACAFQACAEgBAGIAAA0IgPAAIAAgIQgDAFgDACQgCACgGAAgAgEAHQgDACAAAHQAAAEACACQACAEADAAQAEAAACgDQACgCAAgFIAAgLIgEAAQgEAAgEACg");
	this.shape_108.setTransform(94.05,516.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAIAnIAAg0QAAgEgCgDQgCgCgEAAQgDAAgCACQgCAEAAAFIAAAyIgPAAIAAhMIAPAAIAAAIIABAAQACgEADgCQADgCAFgBIAGABQADACACACQACACABADQACAEAAAFIAAA6g");
	this.shape_109.setTransform(87.925,516.85);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F7E601").s().p("AgBApIAAg+IgRAAIAJgTIAcAAIAABRg");
	this.shape_110.setTransform(290.15,21.975);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F7E601").s().p("AgWAfQgIgLAAgUQAAgTAIgMQAJgKANgBQAOABAJAKQAIAMAAAUQAAAUgJAKQgHAMgPAAQgNAAgJgMgAgHgSQgCAFAAANQgBAaAKAAQALAAAAgaQAAgZgLAAQgFAAgCAHg");
	this.shape_111.setTransform(283.7,22);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F7E601").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQAEADAAAEQAAAFgEADQgEADgEAAQgEAAgDgDg");
	this.shape_112.setTransform(278.35,25.125);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F7E601").s().p("AgWAfQgIgLAAgUQAAgTAIgMQAJgKANgBQAOABAJAKQAIAMAAAUQAAAUgJAKQgHAMgPAAQgNAAgJgMgAgHgSQgCAFAAANQAAAaAJAAQALAAAAgaQAAgZgLAAQgEAAgDAHg");
	this.shape_113.setTransform(273,22);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F7E601").s().p("AgfApIAkgqQAHgIgBgGQAAgEgCgDQgDgCgFAAQgJAAgBANIAAABIgTAAIAAAAQAAgOAJgJQAHgHANgBQAPAAAIAIQAIAHAAALQAAAMgMALIgOAQIAZAAIAAARg");
	this.shape_114.setTransform(265.65,21.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F7E601").s().p("AgSAJIAAgRIAlAAIAAARg");
	this.shape_115.setTransform(259.675,23.225);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F7E601").s().p("AgBApIAAg+IgRAAIAJgTIAcAAIAABRg");
	this.shape_116.setTransform(252.8,21.975);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F7E601").s().p("AgWAfQgIgLAAgUQAAgTAIgMQAJgKANgBQAOABAJAKQAIAMAAAUQAAAUgJAKQgHAMgPAAQgNAAgJgMgAgHgSQgCAFAAANQgBAaAKAAQALAAAAgaQAAgZgLAAQgEAAgDAHg");
	this.shape_117.setTransform(246.35,22);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F7E601").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQAEADAAAEQAAAFgEADQgEADgEAAQgEAAgDgDg");
	this.shape_118.setTransform(241,25.125);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F7E601").s().p("AgXAkQgHgGgBgMQAAgJAFgGQAFgEAHgBQgNgEAAgNQAAgLAHgFQAIgHAMAAQANAAAHAHQAIAFAAALQAAANgOAEQAJABAEAEQAFAGgBAJQABAMgJAGQgIAHgPAAQgOAAgJgHgAgHAIQgDACAAAGQAAAEADAEQADACAEAAQAFAAADgCQADgEAAgEQAAgGgDgCQgDgDgFgBQgEABgDADgAgGgZQgDACAAAFQAAAEADADQADACADAAQAFAAACgCQACgDABgEQAAgKgKAAQgDAAgDADg");
	this.shape_119.setTransform(235.65,22);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F7E601").s().p("AgBApIAAg+IgRAAIAKgTIAbAAIAABRg");
	this.shape_120.setTransform(227.8,21.975);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F7E601").s().p("AgKApIAAglIgdgsIAaAAIALAVIACAHIADgHIALgVIAaAAIgdAsIAAAlg");
	this.shape_121.setTransform(217.9,21.95);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F7E601").s().p("AgKApIAAg+IgSAAIAAgTIA5AAIAAATIgSAAIAAA+g");
	this.shape_122.setTransform(211.35,21.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F7E601").s().p("AgbAhQgQgNAAgUQAAgRANgNQANgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgPAAgMgKgAgOgQQgHAHAAAJQAAALAGAGQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_123.setTransform(203.275,21.95);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F7E601").s().p("AgfApIAAhRIAYAAQARAAAHACQALAGAAAMQAAAIgDADQgEAEgIADQAJABAFAEQAFAGAAAIQAAAOgLAGQgFACgIACIgQAAgAgLAYIAIAAQAHAAADgBQAEgDAAgFQAAgFgEgCQgDgBgHgBIgIAAgAgLgIIAFAAQAGAAAEgBQADgBAAgFQAAgGgEgCIgJgBIgFAAg");
	this.shape_124.setTransform(194.725,21.95);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F7E601").s().p("AgbAhQgQgNAAgUQAAgRANgNQANgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgPAAgMgKgAgOgQQgHAHAAAJQAAALAGAGQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_125.setTransform(185.725,21.95);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F7E601").s().p("AgdAfIAKgRQAKAMAJgBQAEAAADgBQACgDAAgEQAAgFgDgCQgDgCgGgCQgMgDgFgEQgFgFAAgJQAAgMAHgIQAIgHAMAAQAOAAAKAHIgHAQQgHgGgIgBQgEABgCACQgDACAAACQAAAFAEACQABABAIABQALAEAFAFQAGAFAAAKQAAANgIAIQgJAIgNAAQgRAAgMgMg");
	this.shape_126.setTransform(177.425,21.95);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F7E601").s().p("AgbAhQgQgNAAgUQAAgRANgNQANgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgPAAgMgKgAgOgQQgHAHAAAJQAAALAGAGQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_127.setTransform(165.725,21.95);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F7E601").s().p("AgkApIAAhRIAUAAIAUABQAKACAHAFQAQALAAAVQAAAWgQALQgHAFgJACIgSABgAgOAXIADAAQAMgBAHgFQAGgFAAgMQAAgLgGgGQgHgFgMAAIgDAAg");
	this.shape_128.setTransform(156.6,21.95);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAGA5QgLAAgHgHQgFgHAAgKIAAhZIATAAIAABYQABAIAHAAIAIAAIAAARg");
	this.shape_129.setTransform(139.7,406.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AABA5IAAhbIgWAVIAAgXIAWgUIAVAAIAABxg");
	this.shape_130.setTransform(128.7,406.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgLgXIAXAAIAAAeIgXARg");
	this.shape_131.setTransform(119.35,412.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgbAjQgGgHAAgMQAAgKAHgGQAHgHAOAAIATAAIAAgEQAAgNgPAAQgKAAgGAHIgNgNQAGgGAHgDQAGgDALAAQAiAAAAAeIAAA2IgUAAIAAgHQgIAIgLAAQgOAAgIgIgAgNAQQAAAKAMAAQAHAAAEgEQAEgDAAgIIAAgEIgPAAQgMAAAAAJg");
	this.shape_132.setTransform(112.825,408.025);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAOAqIAAgxQAAgIgFgEQgDgDgGAAQgFAAgDADQgFAEAAAIIAAAxIgVAAIAAhSIAVAAIAAAIQAIgJAMAAQAMAAAHAHQAJAJAAAPIAAA0g");
	this.shape_133.setTransform(104.475,407.975);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgJA5IAAhQIAUAAIAABQgAgJgnIAAgRIAUAAIAAARg");
	this.shape_134.setTransform(97.85,406.475);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAGA5QgLAAgGgHQgGgHAAgKIAAhZIATAAIAABYQAAAIAIAAIAIAAIAAARg");
	this.shape_135.setTransform(93.55,406.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgZAgQgFgFgDgIQgCgHAAgMQAAgLACgHQADgIAFgFQAKgLAPAAQAQAAAKALQAFAFADAIQABAHAAALQAAAMgBAHQgCAIgGAFQgKALgQAAQgPAAgKgLgAgJgTQgEAEAAAPQAAAQAEAEQAEAEAFAAQAGAAADgEQAGgEAAgQQAAgPgGgEQgDgEgGAAQgFAAgEAEg");
	this.shape_136.setTransform(86.55,408.025);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgoA5IAAhxIAoAAQAWAAAMARQAFAGABALIABAWIgBAYQgBAKgFAHQgMAQgWAAgAgSAlIARAAQAKAAAFgHQADgEABgGIABgUIgBgTQgBgGgDgEQgFgHgKAAIgRAAg");
	this.shape_137.setTransform(77.375,406.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgbAjQgGgHAAgMQAAgKAHgGQAHgHAOAAIATAAIAAgEQAAgNgPAAQgKAAgGAHIgNgNQAGgGAHgDQAGgDALAAQAiAAAAAeIAAA2IgUAAIAAgHQgIAIgLAAQgOAAgIgIgAgNAQQAAAKAMAAQAHAAAEgEQAEgDAAgIIAAgEIgPAAQgMAAAAAJg");
	this.shape_138.setTransform(64.125,408.025);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAOAqIAAgxQAAgIgFgEQgDgDgGAAQgFAAgDADQgFAEAAAIIAAAxIgVAAIAAhSIAVAAIAAAIQAIgJAMAAQAMAAAHAHQAJAJAAAPIAAA0g");
	this.shape_139.setTransform(55.775,407.975);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgfAqIAAgQIAkgwIgiAAIAAgTIA9AAIAAAQIglAwIAlAAIAAATg");
	this.shape_140.setTransform(47.525,408.025);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgTAiQgMgLAAgXQAAgWAMgLQAJgJAPAAQARAAALAMIgPAOQgGgHgHAAQgGAAgFAGQgEAFAAAMQAAANAEAGQAFAFAGAAQAHAAAGgHIAPAOQgLAMgRAAQgPAAgJgJg");
	this.shape_141.setTransform(40.3,408.025);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgjAAQAAgTAKgLQAKgMAPAAQARAAAKAMQAJALAAASIAAAIIgzAAQAAAIAFAFQAFAFAIAAQAKAAAIgIIANANQgHAGgGADQgIAEgLAAQglAAAAgrgAAQgHQAAgFgCgEQgEgIgKAAQgJAAgEAIQgCAEAAAFIAfAAIAAAAg");
	this.shape_142.setTransform(32.125,408.025);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAGA5QgLAAgHgHQgFgHAAgKIAAhZIAUAAIAABYQAAAIAHAAIAIAAIAAARg");
	this.shape_143.setTransform(25.65,406.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAdA5IAAhCIgVArIgPAAIgVgrIAABCIgXAAIAAhxIAWAAIAdA9IAdg9IAXAAIAABxg");
	this.shape_144.setTransform(16.5,406.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAUA0QgHgFAAgLIAAgQQAAgKAHgGQAGgEAKgBQAKABAHAEQAHAGAAAKIAAAQQAAALgHAFQgHAGgKAAQgKAAgGgGgAAcAVIAAAOQAAAJAIAAQAIAAAAgJIAAgOQAAgJgIAAQgIAAAAAJgAgiA5IA0hxIARAAIg1BxgAg0gDQgHgGABgKIAAgQQgBgLAHgFQAGgGAKAAQALAAAGAGQAHAFAAALIAAAQQAAAKgHAGQgGAFgLAAQgKAAgGgFgAgsgjIAAAPQABAKAHgBQAJABAAgKIAAgPQAAgIgJgBQgHABgBAIg");
	this.shape_145.setTransform(118.5,390.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgYAwQgJgHgBgQIAVAAQACAOALAAQAGAAAEgEQAEgFAAgMQAAgTgNAAQgLAAgDAIIgSAAIAAg/IA/AAIAAATIgtAAIAAAYQAHgGAJAAQAOAAAIAIQAKAKAAATQAAALgCAGQgCAHgGAGQgKAJgPAAQgQAAgIgJg");
	this.shape_146.setTransform(107.65,390.55);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgLgYIAXAAIAAAfIgXASg");
	this.shape_147.setTransform(101.25,396.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AABA5IAAhaIgWAUIAAgXIAWgUIAVAAIAABxg");
	this.shape_148.setTransform(94.4,390.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgKA5IAAhdIgeAAIAAgUIBRAAIAAAUIgeAAIAABdg");
	this.shape_149.setTransform(82.725,390.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AATA5IAAgwIgmAAIAAAwIgVAAIAAhxIAVAAIAAAuIAmAAIAAguIAWAAIAABxg");
	this.shape_150.setTransform(72.9,390.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgdAuQgMgLAAgRIAAhKIAXAAIAABJQAAAKAEAFQAGAFAIAAQAJAAAFgFQAGgFAAgKIAAhJIAWAAIAABKQAAARgMALQgMALgSAAQgRAAgMgLg");
	this.shape_151.setTransform(62.3,390.55);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgZAgQgGgFgCgIQgBgHAAgMQAAgLABgHQACgIAGgFQAKgLAPAAQAQAAAKALQAFAFADAIQACAHAAALQAAAMgCAHQgDAIgFAFQgKALgQAAQgPAAgKgLgAgIgTQgGAEAAAPQAAAQAGAEQADAEAFAAQAGAAAEgEQAEgEAAgQQAAgPgEgEQgEgEgGAAQgFAAgDAEg");
	this.shape_152.setTransform(49.35,392.025);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAMA5IgTgiIgJAJIAAAZIgVAAIAAhxIAVAAIAAA/IAaghIAaAAIgeAhIAgAyg");
	this.shape_153.setTransform(41.25,390.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgjAAQAAgTAKgLQAKgMAPAAQARAAAKAMQAJALAAASIAAAIIgzAAQAAAIAFAFQAFAFAIAAQAKAAAIgIIANANQgHAGgGADQgIAEgLAAQglAAAAgrgAAQgHQAAgFgCgEQgEgIgKAAQgJAAgEAIQgCAEAAAFIAfAAIAAAAg");
	this.shape_154.setTransform(32.125,392.025);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAGA5QgLAAgHgHQgFgHAAgKIAAhZIAUAAIAABYQAAAIAHAAIAIAAIAAARg");
	this.shape_155.setTransform(25.65,390.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAdA5IAAhCIgVArIgPAAIgVgrIAABCIgXAAIAAhxIAWAAIAdA9IAdg9IAXAAIAABxg");
	this.shape_156.setTransform(16.5,390.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_157.setTransform(254.85,504.925);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAKA2IgNgiIgHAMIAAAWIgQAAIAAhrIAQAAIAAA/IAAAAIARggIAQAAIgSAfIAVAtg");
	this.shape_158.setTransform(250.45,500.35);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgLAmQgDAAgDgDQgCgCgBgEQgCgEAAgHQgBgGACgEQABgFACgDQAEgDAEgBQAEgCAHAAIACAAIABAAIACAAIACAAIAAgHQAAgEgCgDQgBgCgFAAQgBAAgDACQgDACAAADIgPAAQABgKAGgGQADgEAEgBQAEgCAEAAQAGAAADACQAFABADADQADADACAEQABAFABAGIAAA0IgQAAIAAgIQgDAEgDACQgCADgGAAgAgDAHQgEADAAAGQAAAEACADQACADADAAQAEgBACgCQACgDAAgEIAAgKIgEgBQgEAAgDACg");
	this.shape_159.setTransform(243.8,501.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgWA2IAAhqIAPAAIAAAHIAGgGQACgCAGAAQAJAAAEAIIACAFIABAKIAAAeIgBALQgBAHgGAEQgDACgFAAQgFAAgCgCQgEgCgCgEIgBAAIAAAmgAgFgjQgCADAAAEIAAAdQAAADADADQACACACAAQAEgBACgCQACgDAAgDIAAgbQAAgFgCgDQgCgCgEAAQgCAAgDACg");
	this.shape_160.setTransform(237.725,503.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgIIAAgYIABgJQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAJIAAAYIgBAIQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgUQgDACAAAEIAAAdQAAAEADADQACACACAAQADAAADgCQABgDAAgEIAAgdQAAgEgBgCQgDgCgDAAQgCAAgCACg");
	this.shape_161.setTransform(231.525,501.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgWA2IAAgPIAbgzQACgEAAgCIABgIIAAgEIgBgEIgDgDIgEgBQgCAAgCACQgCACAAAEIAAAJIgQAAIAAgJQAAgFACgEQACgEADgDIAHgFQAEgCAEAAQAGAAAFACQAEACADAEQACAEACAFIABAKIAAAGIgBAFIgBAFIgDAGIgWAqIAbAAIAAAQg");
	this.shape_162.setTransform(222.225,500.325);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAAA2IAAhaIgOALIAAgQIAOgMIAPAAIAABrg");
	this.shape_163.setTransform(215.725,500.35);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgWAHIAAgOIAtAAIAAAOg");
	this.shape_164.setTransform(206.775,501.55);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgHA2IAAhMIAPAAIAABMgAgHglIAAgQIAPAAIAAAQg");
	this.shape_165.setTransform(198.75,500.35);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgLA2QAGAAACgCIABgFIABgGIAAhOIAOAAIAABTQgBALgGAGQgGAGgLAAgAgBg1IAAgPIAOAAIAAAPg");
	this.shape_166.setTransform(195,501.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFIgCgHIgBgIIAAgYIABgJIACgHQADgFAFgDQAFgDAGAAQAFAAAEACQAFACADADQAGAHAAALIgQAAQAAgGgBgBQgCgCgEAAQgCAAgCACQgCACgBAEIAAAeQABADACADQACACACAAQAEgBACgCIABgFIAQAAQAAAKgHAGQgCADgFACQgEACgFAAQgGAAgFgDg");
	this.shape_167.setTransform(191.05,501.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgIIAAgYIABgJQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAJIAAAYIgBAIQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgUQgDACAAAEIAAAdQAAAEADADQACACACAAQADAAADgCQABgDAAgEIAAgdQAAgEgBgCQgDgCgDAAQgCAAgCACg");
	this.shape_168.setTransform(184.775,501.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAXAnIAAg0QgBgFgBgCQgCgCgEAAQgEAAgCACQgBAEgBAEIAAAzIgOAAIAAg0QAAgFgCgCQgBgCgEAAQgFAAgBACQgCAEAAAEIAAAzIgPAAIAAhMIAPAAIAAAIIABAAQACgEADgCQADgDAGAAQAFAAACADIAGAFIAGgFQADgDAHAAIAFABQADABADADQACACABADQACAEAAAFIAAA6g");
	this.shape_169.setTransform(177.1,501.85);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgIIAAgYIABgJQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAJIAAAYIgBAIQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgUQgDACAAAEIAAAdQAAAEADADQACACACAAQADAAADgCQABgDAAgEIAAgdQAAgEgBgCQgDgCgDAAQgCAAgCACg");
	this.shape_170.setTransform(169.375,501.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgRAnIAAhMIAPAAIAAAIQAEgEAFgCQAEgDAHAAIAAARIgFgBIgFAAIgFADIgDAGQgCADAAAFIAAAsg");
	this.shape_171.setTransform(164.375,501.85);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgWA2IAAhqIAPAAIAAAHIAGgGQACgCAGAAQAJAAAEAIIACAFIABAKIAAAeIgBALQgBAHgGAEQgDACgFAAQgFAAgCgCQgEgCgCgEIgBAAIAAAmgAgFgjQgCADAAAEIAAAdQAAADADADQACACACAAQAEgBACgCQACgDAAgDIAAgbQAAgFgCgDQgCgCgEAAQgCAAgDACg");
	this.shape_172.setTransform(158.575,503.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgIIAAgYIABgJQAAgEACgDQADgFAFgDQAFgDAGAAQAFAAAFACQAEACADADQAGAHAAAKIAAAUIgeAAIAAAKQAAADADADQACACACAAQAEgBACgCIABgFIAQAAQAAAKgGAGQgDADgFACQgEACgFAAQgGAAgFgDgAgEgUQgDACAAAEIAAAJIAOAAIAAgJQAAgEgBgCQgDgCgDAAQgCAAgCACg");
	this.shape_173.setTransform(149.125,501.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgHA2IAAhMIAPAAIAABMgAgHglIAAgQIAPAAIAAAQg");
	this.shape_174.setTransform(144.5,500.35);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgOAhQgEgDgCgEQgCgFAAgFIAPAAIACAGQACACADABQADAAADgCQADgDAAgEQAAgDgCgCQgCgCgEgCIgGgDQgIgDgEgDQgEgGAAgIQAAgFACgEQACgEADgDQADgDAEgBQAEgCAEAAQAEAAAEACIAHAFIAFAGQABAEAAAFIgOAAQAAgDgDgCQgCgCgDgBQgDAAgCADQgBACAAADIABAEQABACAEACIAIAEQAJADADAFQADAFAAAHIgCAJQgBAEgDADQgDADgFACQgEACgFAAQgIAAgGgGg");
	this.shape_175.setTransform(139.975,501.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgIIAAgYIABgJQAAgEACgDQADgFAFgDQAFgDAGAAQAFAAAFACQAEACADADQAGAHAAAKIAAAUIgeAAIAAAKQAAADADADQACACACAAQAEgBACgCIABgFIAQAAQAAAKgGAGQgDADgFACQgEACgFAAQgGAAgFgDgAgEgUQgDACAAAEIAAAJIAOAAIAAgJQAAgEgBgCQgDgCgDAAQgCAAgCACg");
	this.shape_176.setTransform(134.075,501.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgRAnIAAhMIAPAAIAAAIQAEgEAFgCQAEgDAHAAIAAARIgFgBIgFAAIgFADIgDAGQgCADAAAFIAAAsg");
	this.shape_177.setTransform(129.075,501.85);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAKA2IgNgiIgIAMIAAAWIgPAAIAAhrIAPAAIAAA/IABAAIARggIAQAAIgSAfIAVAtg");
	this.shape_178.setTransform(123.65,500.35);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgIIAAgYIABgJQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAJIAAAYIgBAIQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgUQgDACAAAEIAAAdQAAAEADADQACACACAAQADAAADgCQABgDAAgEIAAgdQAAgEgBgCQgDgCgDAAQgCAAgCACg");
	this.shape_179.setTransform(117.075,501.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAJAmIgJgsIAAAAIgIAsIgNAAIgShLIAQAAIAJAuIABAAIAIguIALAAIAIAuIABAAIAJguIAQAAIgSBLg");
	this.shape_180.setTransform(106.575,501.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgUA1IAAgOIADAAIAFgBIACgDIADgFIACgLIgVhIIAQAAIAKAwIAAAAIALgwIAPAAIgVBYQgCAGgCADQgBAEgDACIgGACIgGABg");
	this.shape_181.setTransform(96.2,503.45);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAIAnIAAg0QAAgFgCgCQgCgCgEAAQgDAAgCACQgCAEAAAEIAAAzIgPAAIAAhMIAPAAIAAAIIABAAQACgEADgCQADgDAFAAIAGABQADABACADQACACABADQACAEAAAFIAAA6g");
	this.shape_182.setTransform(90.175,501.85);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgUAmIAAgMIAYgyIgWAAIAAgNIAnAAIAAAMIgXAxIAXAAIAAAOg");
	this.shape_183.setTransform(84.4,501.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFIgCgHIgBgIIAAgYIABgJIACgHQADgFAFgDQAFgDAGAAQAFAAAEACQAFACADADQAGAHAAALIgQAAQAAgGgBgBQgCgCgEAAQgCAAgCACQgCACgBAEIAAAeQABADACADQACACACAAQAEgBACgCIABgFIAQAAQAAAKgHAGQgCADgFACQgEACgFAAQgGAAgFgDg");
	this.shape_184.setTransform(79,501.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AAAA0QgFgEAAgGIABgHIADgFIAEgEIAFgEIAIAAQgFAEgCAFQgDAFAAAFQAAADADACQACACACAAIAFAAIADgBIACAFIgFACIgJABQgGAAgDgDgAgLAWQgDgBgCgCQgDgCgCgEQgCgEAAgHQABgFABgFQABgFADgDQADgDAEgCQAEgBAHAAIACAAIABAAIACAAIACAAIAAgIQAAgEgCgCQgBgDgEAAQgCAAgDACQgDACAAAEIgPAAQABgKAGgHQADgDAEgBQAFgCAEAAQAEAAAFABQAEACADADQADADACAEQABAFAAAGIAAA0IgHAAIgIAAIAAgIQgDAEgDACQgCADgGAAgAgEgIQgDACAAAGQAAAEACACQACADADAAQAEAAACgCQACgDAAgEIAAgKIgEAAQgEAAgEACgAAIAWg");
	this.shape_185.setTransform(72.65,503.525);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAGA1QgEAAgCgDQgDgDgCgEQgBgDgBgIIAAgZIgHAHIAAgLIAHgGIAAgyIAPAAIAAAlIAHgHIAAALIgHAHIAAAlQAAAEABACQACABAEABIAAAOIgJgBg");
	this.shape_186.setTransform(68,500.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAKAyQgFgBgEgBIgEgFIgDgFIgBgGIAAgtIgIAAIAAgNIAIAAIAAgWIAOAAIAAAWIAJAAIAAANIgJAAIAAAoIAAAFIACACIADABIAEAAIAAAPg");
	this.shape_187.setTransform(61.375,500.75);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgGglIAAgQIANAAIAAAQg");
	this.shape_188.setTransform(58.05,500.35);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AAXAnIAAg0QgBgFgBgCQgCgCgEAAQgEAAgCACQgCAEAAAEIAAAzIgNAAIAAg0QAAgFgDgCQgCgCgDAAQgFAAgCACQgBAEAAAEIAAAzIgPAAIAAhMIAPAAIAAAIIAAAAQADgEADgCQAEgDAFAAQAEAAADADIAFAFIAHgFQADgDAHAAIAFABQADABACADQADACACADQABAEAAAFIAAA6g");
	this.shape_189.setTransform(51.75,501.85);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgGglIAAgQIANAAIAAAQg");
	this.shape_190.setTransform(45.45,500.35);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgWA2IAAhrIAPAAIAABbIAeAAIAAAQg");
	this.shape_191.setTransform(41,500.35);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F7E601").s().p("AgcAgQgFgFgCgIIgBgRIAAgrIAWAAIAAAsQABALADAEQACAGAIAAQAJgBADgGQACgFAAgOIAAgnIAWAAIAAAvQAAATgIAJQgJAIgTAAQgUAAgIgKg");
	this.shape_192.setTransform(261.05,11.05);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F7E601").s().p("AAKApIgZglIAAAlIgWAAIAAhRIAWAAIAAAlIAZglIAaAAIgfAoIAhApg");
	this.shape_193.setTransform(252.975,10.95);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#F7E601").s().p("AgKApIAAg+IgSAAIAAgTIA5AAIAAATIgSAAIAAA+g");
	this.shape_194.setTransform(245.1,10.95);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F7E601").s().p("AAHApIgSggIAAAgIgVAAIAAhRIAZAAIAOABQAIABAEADQAKAHAAANQAAATgTAEIAWAhgAgLgBIAFAAQAMAAAAgKQAAgHgDgCQgDgDgGAAIgFAAg");
	this.shape_195.setTransform(238.7,10.95);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F7E601").s().p("AAUApIgEgPIgfAAIgEAPIgWAAIAchRIAbAAIAcBRgAAMAKIgJgaIgDgLIgCALIgIAaIAWAAg");
	this.shape_196.setTransform(230.4,10.95);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F7E601").s().p("AANApIgKgjIgDgKIgCAKIgKAjIgVAAIgXhRIAXAAIAJAnIADALIADgLIAKgnIARAAIAKAnIADAJIAAACIADgLIAJgnIAXAAIgXBRg");
	this.shape_197.setTransform(220.675,10.95);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F7E601").s().p("AgmApIApg/IggAAIAAgSIBEAAIgpA/IAkAAIAAASg");
	this.shape_198.setTransform(211.225,10.95);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F7E601").s().p("AgTAfQgLgNAAgSQAAgSALgMQAMgMARAAQAKAAAMAFIAAAZQgJgKgKAAQgKAAgGAGQgFAHgBAJQABAKAFAHQAGAHAKAAQAKgBAJgJIAAAYQgMAFgKAAQgRAAgMgMg");
	this.shape_199.setTransform(203.85,10.95);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#F7E601").s().p("AgkApIAAhRIATAAIAVABQAJABAIAFQAQAMAAAVQAAAWgQAMQgHAEgJACIgSABgAgOAXIAEAAQALAAAHgGQAGgFAAgMQAAgLgGgGQgHgFgLAAIgEAAg");
	this.shape_200.setTransform(192.4,10.95);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F7E601").s().p("AgbAiQgQgOAAgUQAAgRANgMQANgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgPAAgMgJgAgOgQQgHAHAAAJQAAAKAGAHQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_201.setTransform(182.925,10.95);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_202.setTransform(264.85,588.525);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_203.setTransform(262.075,589.325);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_204.setTransform(257.925,589.325);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgNAQQgGgFABgLQAAgLAGgFQAFgFAHAAQAJAAAFAGQAFAGAAAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_205.setTransform(253.75,589.325);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_206.setTransform(249.375,589.275);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQACgFADgCQAFgDAEAAQADAAADABQADACACADIAAgVIAHAAIAAA4IgGAAIAAgFQgFAGgHAAQgEAAgEgDgAgGgEQgEAEAAAIQAAAIAEADQADAEAEAAQAEAAADgDQAEgEAAgIQAAgIgEgDQgDgEgEAAQgEAAgDADg");
	this.shape_207.setTransform(244.8,588.575);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQADAEAEAAQAFAAACgCQADgCACgFIAHABQgCAHgEADQgFAEgIAAQgHAAgFgGgAAMgDQgBgFgCgDQgDgEgGAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_208.setTransform(240.55,589.325);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgVAZIgFAFIAJAAIATAAIAAAGg");
	this.shape_209.setTransform(236.35,589.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_210.setTransform(232.475,589.325);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgWAZIgEAFIAJAAIATAAIAAAGg");
	this.shape_211.setTransform(228.35,589.325);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_212.setTransform(224.325,589.325);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_213.setTransform(220.15,589.325);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_214.setTransform(216.625,589.325);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAEAAQAFAAACgCQADgCACgFIAHABQgCAHgEADQgFAEgIAAQgHAAgFgGgAAMgDQgBgFgCgDQgDgEgGAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_215.setTransform(213.1,589.325);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgHAAIgOgpIAIAAIAHAXIACAJIACgIIAHgYIAGAAIAHAXIACAIIABgIIAIgXIAHAAIgOApg");
	this.shape_216.setTransform(208,589.325);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_217.setTransform(202.95,589.325);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AAJAdIgNgVIgFAEIAAARIgHAAIAAg5IAHAAIAAAgIAPgQIAJAAIgPAPIARAag");
	this.shape_218.setTransform(199,588.525);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_219.setTransform(194.575,589.275);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_220.setTransform(190.15,589.325);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_221.setTransform(186.925,589.275);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQACgFADgCQAFgDAEAAQAEAAADABQACACACADIAAgVIAHAAIAAA4IgGAAIAAgFQgFAGgHAAQgEAAgEgDgAgHgEQgDAEAAAIQABAIADADQADAEAEAAQAEAAADgDQAEgEAAgIQAAgIgEgDQgDgEgFAAQgDAAgEADg");
	this.shape_222.setTransform(182.95,588.575);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAAMgDQAAgFgDgDQgEgEgFAAQgEAAgDADQgDAEAAAFIAWAAIAAAAg");
	this.shape_223.setTransform(178.7,589.325);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_224.setTransform(175.65,588.525);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgKAXIAAAFIgHAAIAAg4IAIAAIAAAUQADgFAHAAQADAAAEABQADACACADIAEAGIABAIQAAALgFAFQgGAGgGAAQgHAAgEgGgAgHgDQgDADAAAHQAAAIACADQADAFAFAAQAEAAAEgEQADgEAAgIQAAgHgDgEQgDgDgFAAQgDAAgEAEg");
	this.shape_225.setTransform(172.65,588.575);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgKAdIAQg5IAFAAIgQA5g");
	this.shape_226.setTransform(169.25,588.55);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgDAdIAAg5IAGAAIAAA5g");
	this.shape_227.setTransform(167.25,588.525);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAGAAAEADQADACACAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_228.setTransform(164.35,590.075);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_229.setTransform(160.95,591);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_230.setTransform(157.6,589.325);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AAJAdIgNgVIgFAEIAAARIgHAAIAAg5IAHAAIAAAgIAPgQIAJAAIgPAPIARAag");
	this.shape_231.setTransform(153.65,588.525);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_232.setTransform(149.225,589.275);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgCAFgFACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgEAEg");
	this.shape_233.setTransform(144.8,589.325);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_234.setTransform(141.575,589.275);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQACgFADgCQAEgDAFAAQADAAADABQADACACADIAAgVIAHAAIAAA4IgGAAIAAgFQgFAGgHAAQgEAAgEgDgAgGgEQgEAEAAAIQABAIADADQADAEAEAAQAEAAADgDQAEgEAAgIQAAgIgEgDQgDgEgFAAQgDAAgDADg");
	this.shape_235.setTransform(137.6,588.575);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEADAAQAFAAADgCQACgCABgFIAIABQgCAHgEADQgFAEgIAAQgHAAgFgGgAAMgDQAAgFgDgDQgEgEgFAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_236.setTransform(133.35,589.325);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_237.setTransform(130.3,588.525);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgKAXIAAAFIgHAAIAAg4IAIAAIAAAUQADgFAHAAQADAAAEABQAEACABADIAEAGIABAIQAAALgFAFQgGAGgGAAQgHAAgEgGgAgHgDQgEADABAHQAAAIACADQADAFAFAAQAFAAADgEQADgEAAgIQAAgHgDgEQgDgDgFAAQgDAAgEAEg");
	this.shape_238.setTransform(127.3,588.575);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_239.setTransform(123.95,591);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgHAAIgNgpIAHAAIAGAXIADAJIACgIIAHgYIAGAAIAHAXIABAIIACgIIAIgXIAHAAIgOApg");
	this.shape_240.setTransform(119.9,589.325);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgIAAIgMgpIAHAAIAGAXIADAJIACgIIAHgYIAGAAIAHAXIABAIIACgIIAIgXIAGAAIgMApg");
	this.shape_241.setTransform(114.15,589.325);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgIAAIgMgpIAHAAIAGAXIADAJIACgIIAHgYIAGAAIAGAXIACAIIADgIIAHgXIAGAAIgMApg");
	this.shape_242.setTransform(108.4,589.325);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgOASQgEgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQACgDAEgBQAFgCAEAAQAFAAADACQAEABACACIABAFIABAGIAAAIIAAANIACAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgLADg");
	this.shape_243.setTransform(101.15,589.325);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_244.setTransform(96.775,589.275);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgPAcIgBgGIAFAAIAEgBIACgCIACgFIABgCIgQgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgFgBg");
	this.shape_245.setTransform(90.4,590.175);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAAAbIgDgDQgBgCAAgGIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIABAEIABABIACABIADgBIABAHIgFAAIgFgBg");
	this.shape_246.setTransform(87.3,588.625);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_247.setTransform(85.125,589.275);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAAMgDQAAgFgDgDQgEgEgEAAQgEAAgDADQgEAEAAAFIAWAAIAAAAg");
	this.shape_248.setTransform(81.3,589.325);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgFAdIAAgjIgGAAIAAgGIAGAAIAAgEIABgGQABgDADgCQABgBAFAAIAGAAIgBAHIgEgBQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQgCABAAAEIAAADIAIAAIAAAGIgIAAIAAAjg");
	this.shape_249.setTransform(78.175,588.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_250.setTransform(74.7,589.325);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgPAcIgBgGIAFAAIAEgBIACgCIACgFIABgCIgQgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgFgBg");
	this.shape_251.setTransform(68.35,590.175);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgDAdIAAgXIgFAFIAAgHIAFgEIAAgcIAGAAIAAAXIAGgEIAAAGIgGADIAAAdg");
	this.shape_252.setTransform(65.425,588.525);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgNAYQgFgGgBgKQABgLAGgGQAGgEAGAAQAIAAAGAFQAGAGgBAJQAAAIgCAFQgDAEgEADQgEACgGAAQgHAAgGgFgAgIgDQgDADAAAIQAAAHADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgDQgDgEgGAAQgEAAgEAEgAgDgRIAEgLIAJAAIgIALg");
	this.shape_253.setTransform(62.35,588.575);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgLAaQgFgDAAgHIAHABQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQADACAEAAQAEAAADgCQADgCABgEIAAgJQgEAGgHAAQgIAAgEgGQgFgHAAgHQAAgGACgFQACgFAEgDQAEgDAFAAQAHAAAFAGIAAgFIAGAAIAAAjQAAAKgCAEQgCAEgEACQgEADgGAAQgHAAgEgEgAgHgTQgDAEAAAHQAAAIADADQAEAEADAAQAFAAAEgEQADgDAAgHQAAgIgEgEQgDgEgFAAQgDAAgEAEg");
	this.shape_254.setTransform(57.825,590.125);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAJAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAFAAQAEAAACgCQADgCACgFIAHABQgCAHgEADQgFAEgHAAQgJAAgEgGgAAMgDQgBgFgCgDQgDgEgFAAQgFAAgCADQgEAEgBAFIAXAAIAAAAg");
	this.shape_255.setTransform(53.55,589.325);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgWAZIgEAFIAJAAIATAAIAAAGg");
	this.shape_256.setTransform(49.35,589.325);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_257.setTransform(45.475,589.325);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgWAZIgEAFIAJAAIATAAIAAAGg");
	this.shape_258.setTransform(41.35,589.325);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgKAbQgGgCgCgFQgDgEgBgGIAHAAIADAHQACADAEABQAEABADAAIAIgBIAFgDIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgDgEgBIgJgDIgLgCQgEgCgCgEQgCgDAAgEQAAgEACgEQACgEAFgCQAFgBAFAAQAGAAAFACQAFABACAFQADADAAAGIgHAAQgBgFgDgDQgDgDgHAAQgGAAgDADQgDACAAADQAAAEACACQACABAJACIAMAFQAFABADADQACAEAAAEQAAAFgDAEQgCAEgFACQgFACgGAAQgHABgFgDg");
	this.shape_259.setTransform(36.675,588.55);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_260.setTransform(226.25,581.85);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AAIAVIgGgYIgCgHIgHAfIgHAAIgOgpIAIAAIAHAXIACAJIACgIIAHgYIAGAAIAHAXIACAIIACgIIAHgXIAHAAIgOApg");
	this.shape_261.setTransform(222.2,580.175);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgNAYQgFgGgBgKQABgLAGgGQAGgEAGAAQAIAAAGAFQAGAGgBAJQAAAIgCAFQgDAEgEADQgEACgGAAQgHAAgGgFgAgIgDQgDADAAAIQAAAHADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgDQgDgEgGAAQgEAAgEAEgAgDgRIAEgLIAJAAIgIALg");
	this.shape_262.setTransform(217.15,579.425);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_263.setTransform(212.925,580.175);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDAEgBQADgCAFAAQAFAAAEACQADABACACIACAFIAAAGIAAAIIABANIABAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_264.setTransform(208.75,580.175);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQADACACAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAAEgEQADgEAAgHQAAgIgDgEQgEgEgEAAQgEAAgDAFg");
	this.shape_265.setTransform(204.5,580.925);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgDABgDQABgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQACgDAEgBQAFgCAEAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIAAANIACAFIgHAAQgCgCAAgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgKADg");
	this.shape_266.setTransform(199.95,580.175);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgSAVIAAgGIAagdIgIAAIgQAAIAAgGIAhAAIAAAFIgVAZIgFAFIAJAAIATAAIAAAGg");
	this.shape_267.setTransform(195.75,580.175);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgOASQgEgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQACgDAEgBQAFgCAEAAQAFAAADACQAEABACACIABAFIABAGIAAAIIAAANIACAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgLADg");
	this.shape_268.setTransform(189.35,580.175);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgDAdIAAgpIAHAAIAAApgAgDgTIAAgJIAHAAIAAAJg");
	this.shape_269.setTransform(186.3,579.375);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_270.setTransform(183.225,580.125);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgDABgDQABgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQACgDAEgBQAFgCAEAAQAFAAADACQAEABACACIABAFIABAGIAAAIIAAANIACAFIgHAAQgCgCAAgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgDACIAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgKADg");
	this.shape_271.setTransform(178.8,580.175);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAADADQAFACACAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgEAFg");
	this.shape_272.setTransform(174.55,580.925);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_273.setTransform(171.175,580.125);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAIAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEAEAAQAEAAADgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAAMgDQAAgFgDgDQgEgEgEAAQgEAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_274.setTransform(167.35,580.175);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgSAVIAAgGIAagdIgIAAIgQAAIAAgGIAhAAIAAAFIgVAZIgFAFIAJAAIASAAIAAAGg");
	this.shape_275.setTransform(163.15,580.175);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_276.setTransform(159.275,580.175);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgPAcIgBgGIAFAAIAEgBIACgCIACgFIABgCIgQgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgFgBg");
	this.shape_277.setTransform(155.2,581.025);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgIAAIgMgpIAHAAIAGAXIADAJIACgIIAHgYIAGAAIAGAXIACAIIADgIIAHgXIAGAAIgMApg");
	this.shape_278.setTransform(150.25,580.175);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgEAEg");
	this.shape_279.setTransform(143,580.175);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgDgFQgCgFAAgGQAAgHACgEQACgFAFgCQAEgDAEAAQAEAAADABQACACACADIAAgVIAHAAIAAA4IgHAAIAAgFQgDAGgIAAQgEAAgEgDgAgHgEQgCAEAAAIQgBAIAEADQADAEAEAAQAFAAADgDQADgEAAgIQAAgIgDgDQgEgEgEAAQgEAAgEADg");
	this.shape_280.setTransform(138.45,579.425);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgPAcIgBgGIAFAAIAEgBIACgCIACgFIABgCIgQgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgFgBg");
	this.shape_281.setTransform(132.25,581.025);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_282.setTransform(128.025,580.125);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_283.setTransform(123.75,580.925);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AABAdIgCgCIgBgCIgBgDIACgFIABgDIABAAIAFgBIgDADIgBAEIABADQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIACAAIACgBIAAAFIgGACIgDgBgAABAOIgBAAIABgBIAGAAIgBAAIgFABgAAAAOQgIAAgFgGQgFgGAAgJQAAgKAFgGQAGgGAIAAQAIAAAFAGQAFAGAAAKIAAACIgeAAQAAAGAEADQAEAEAEAAQAEAAADgCQACgCABgEIAIAAQgCAHgFADQgCACgEABIABAAIgGAAIgBABgAgHgUQgDAEAAAFIAWAAQAAgFgDgDQgEgEgEAAQgEAAgEADgAAGANIAAAAg");
	this.shape_284.setTransform(119.2,580.975);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIAAAEIABABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_285.setTransform(115.95,579.475);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_286.setTransform(112.775,580.175);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgNAQQgFgFAAgLQAAgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQAEgEAAgIQAAgHgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_287.setTransform(108.6,580.175);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQABgFAFgCQAEgDAEAAQADAAADABQAEACABADIAAgVIAHAAIAAA4IgGAAIAAgFQgEAGgIAAQgEAAgEgDgAgGgEQgDAEgBAIQAAAIAEADQADAEAEAAQAFAAADgDQADgEAAgIQAAgIgDgDQgEgEgEAAQgEAAgDADg");
	this.shape_288.setTransform(104.05,579.425);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIABAEIAAABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_289.setTransform(98.75,579.475);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AAIAdIgMgVIgFAEIAAARIgHAAIAAg5IAHAAIAAAgIAPgQIAJAAIgPAPIARAag");
	this.shape_290.setTransform(95.85,579.375);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgIAUIgGgEIgCgFIAAgHIAAgYIAHAAIAAAWIABAHQAAADACACQACABAEAAQACAAADgBQADgCAAgDIABgIIAAgVIAIAAIAAAoIgHAAIAAgGQgFAHgGAAQgFAAgCgBg");
	this.shape_291.setTransform(91.4,580.225);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQACgFADgCQAFgDAEAAQADAAADABQADACACADIAAgVIAHAAIAAA4IgGAAIAAgFQgFAGgHAAQgEAAgEgDgAgGgEQgEAEAAAIQAAAIAEADQADAEAEAAQAEAAADgDQAEgEAAgIQAAgIgEgDQgDgEgEAAQgEAAgDADg");
	this.shape_292.setTransform(86.85,579.425);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_293.setTransform(82.6,580.175);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_294.setTransform(79.375,580.125);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_295.setTransform(75.25,579.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// pricetag_etc
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(75.05,196,0.2658,0.2658,0,0,0,248.5,82.8);

	this.instance_1 = new lib.ClipGroup_19();
	this.instance_1.setTransform(73.3,299.4,1.01,1.01,0,0,0,72.6,68.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// PACK
	this.instance_2 = new lib.PACK_2();
	this.instance_2.setTransform(147,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// BIEDRONKOWQ_Osz_2
	this.instance_3 = new lib.BIEDRONKOWQ_Osz_2("synched",0);
	this.instance_3.setTransform(72.5,24.1,0.8854,0.8854,0,0,0,74,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// CTA_Green
	this.instance_4 = new lib.CTAGreen();
	this.instance_4.setTransform(150.05,555.6,0.7189,0.7189,0,0,0,0.1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// BG
	this.instance_5 = new lib.gph_bgX("synched",0);
	this.instance_5.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.gph_Tela2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txts_CURVAS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAuQAFAAACgCIABgEIABgGIAAhBIAMAAIAABGQAAAKgGAEQgFAFgKAAgAgBgsIAAgNIAMAAIAAANg");
	this.shape.setTransform(248.275,456.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAeQgFgCgCgEIgCgGIAAgHIAAgVIAAgHIACgGQACgEAFgCQAEgDAFAAQAFAAADACIAGAEQAFAGAAAIIAAARIgZAAIAAAJQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQABAAABAAQAAAAAAAAQAEAAABgCIACgEIAMAAQAAAIgFAFIgGAFIgIABQgFAAgEgDgAgEgRQgCACAAADIAAAIIANAAIAAgIQAAgDgDgCQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_1.setTransform(244.75,456.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAtIAAg/IANAAIAAA/gAgGgfIAAgNIANAAIAAANg");
	this.shape_2.setTransform(240.8,455.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAGAhIAAgsQAAgEgBgCQgCgBgDAAQgDAAgBABIgBAHIAAArIgNAAIAAhAIANAAIAAAGIAFgEQACgCAEgBIAFABIAEADIADAFIABAHIAAAxg");
	this.shape_3.setTransform(236.725,456.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAgQgDAAgCgCIgEgFQgBgEAAgFIABgKQABgEACgCQADgCADgCIAJgBIACAAIACAAIABAAIACAAIAAgGQAAgEgBgCQgCgCgEAAIgDACQgCABgBAEIgMAAQAAgJAGgFQACgDADgBQAEgCADAAIAIABIAGAEIAEAHQACADAAAFIAAAsIgNAAIAAgGIAAAAIgGAFQgBACgFAAgAgDAGQgDACAAAFQAAAEACACQABADADAAQADAAACgDQACgCAAgEIAAgIIgDgBQgEAAgDACg");
	this.shape_4.setTransform(231.45,456.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIAqQgEAAgDgBIgEgEIgDgFIAAgFIAAgmIgHAAIAAgKIAHAAIAAgUIAMAAIAAAUIAIAAIAAAKIgIAAIAAAiIAAAEIABACIADABIAEAAIAAAMg");
	this.shape_5.setTransform(227.425,455.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADArQgDgCAAgFIAAgIQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFIAAAIQAAAFgDACQgDADgFAAQgEAAgDgDgAAIAaIgBADIAAAGIABACIACABIADgBIABgCIAAgGIgBgDIgDgBIgCABgAgTAtIAehZIAJAAIgeBZgAgRgTQgDgDAAgEIAAgJQAAgEADgDQADgDAFAAQAFAAADADQACADAAAEIAAAJQAAAEgCADQgDACgFAAQgFAAgDgCgAgMgkIgBACIAAAGIABADIADABIACgBIABgDIAAgGIgBgCIgCgBIgDABg");
	this.shape_6.setTransform(220.125,455.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAtIAVhNIgNAAIAAAKIgLAAIAAgWIAlAAIAAANIgVBMg");
	this.shape_7.setTransform(214.575,455.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAsIgHgDIgEgHQgBgDAAgFIAAgDIANAAIAAADQAAADABACQACACACAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQABgCAAgDIAAgVQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIgCAAIgCAAIgBACIAAACIgMAAIAAgxIAkAAIAAAMIgYAAIAAAZIAEgDIAFgBQAHAAAEAEQAEAEAAAHIAAAXQAAAFgBADIgFAHIgGADIgHABIgGgBg");
	this.shape_8.setTransform(209.425,455.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGgKIANAAIAAAMIgNAJg");
	this.shape_9.setTransform(202.1,459.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAtIgGgDIgFgGQgCgEAAgFIANAAQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQACACACAAQABAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQABgCAAgDIAAgNQgCADgDACQgCACgEgBQgIAAgDgFIgCgFIAAgJIAAgYIAAgKQABgHAFgDQACgBAFAAIAEABIACAAIADADIACADIAAgGIANAAIAABHIgBAHQgBADgCACQgDAEgDABQgEACgFAAIgFgBgAgEgeQgBACAAAEIAAAYIABAFQABACADAAQADAAACgCQABgCAAgDIAAgYQAAgEgBgCQgCgCgDAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_10.setTransform(198.025,458.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAIAtIgKgcIgGAKIAAASIgOAAIAAhZIAOAAIAAA1IAOgbIANAAIgPAZIASAmg");
	this.shape_11.setTransform(193,455.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAuIAQhbIAKAAIgQBbg");
	this.shape_12.setTransform(187.8,455.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAFAtQgEAAgBgCQgCgCgCgEQgCgDABgHIAAgVIgHAFIAAgJIAHgEIAAgrIALAAIAAAgIAHgGIAAAJIgHAGIAAAfQAAADACACIAFACIAAALIgIAAg");
	this.shape_13.setTransform(184.15,455.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAgIAAgKIAUgqIgSAAIAAgLIAhAAIAAAKIgUApIAUAAIAAAMg");
	this.shape_14.setTransform(180.6,456.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAuIAOgnIAAAAIgBABIgEABQgDgBgDgCQgDgBgCgCIgBgDIgBgDIAAgFIAAgJIAAgIIAAgFIABgDIACgDQACgEAEgCQAFgCAEAAQAFAAAEACQAFACACAEIACADIABADIAAAFIAAAIIAAAGIAAAFIgBADIgBADIgRAugAgEgeQgBACAAADIAAARQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQABAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgRQAAgDgCgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_15.setTransform(172.475,455.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAuIAOgnIAAAAIgBABIgEABQgDgBgDgCQgDgBgCgCIgBgDIgBgDIAAgFIAAgJIAAgIIAAgFIABgDIACgDQACgEAEgCQAFgCAEAAQAFAAAEACQAFACACAEIACADIABADIAAAFIAAAIIAAAGIAAAFIgBADIgBADIgRAugAgEgeQgBACAAADIAAARQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQABAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgRQAAgDgCgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_16.setTransform(167.325,455.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFgKIALAAIAAAMIgLAJg");
	this.shape_17.setTransform(163.35,459.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAsQgEgDgCgEIgCgDIgBgDIAAgFIAAgIIAAgHIAAgEIABgDIABgEIAQgtIAOAAIgOAmIAAABIACgBIADgBQAEAAADACQADACABADIACABIABAEIAAAGIAAAIIAAAIIAAAFIgBADIgCADQgCAEgFADQgEABgFAAQgEAAgFgBgAgEAFQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIAAARQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQABABABAAQAAAAAAAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgRQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_18.setTransform(159.375,455.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFAVIAAgNIALAAIAAANgAgFgHIAAgNIALAAIAAANg");
	this.shape_19.setTransform(224.2,445.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAgQgDAAgCgCIgEgFQgBgEAAgFIABgKQABgEACgCQADgCADgCIAJgBIACAAIACAAIABAAIACAAIAAgGQAAgEgBgCQgCgCgEAAIgDACQgCABgBAEIgMAAQAAgJAGgFQACgDADgBQAEgCADAAIAIABIAGAEIAEAHQACADAAAFIAAAsIgNAAIAAgGIAAAAIgGAFQgBACgFAAgAgDAGQgDACAAAFQAAAEACACQABADADAAQADAAACgDQACgCAAgEIAAgIIgDgBQgEAAgDACg");
	this.shape_20.setTransform(220.2,444.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAGAgIAAgrQAAgDgBgCQgCgCgDAAQgDAAgBACIgBAGIAAAqIgNAAIAAg/IANAAIAAAHIAFgGQACgCAEAAIAFABIAEADIADAFIABAHIAAAwg");
	this.shape_21.setTransform(215.025,444.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAgIAAg/IANAAIAAAHQADgEAEgCQAEgCAFAAIAAAOIgEAAIgEAAQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABIgCADIgBAHIAAAlg");
	this.shape_22.setTransform(210.65,444.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAgQgCAAgCgCIgEgFQgBgEAAgFIABgKQABgEACgCQADgCADgCIAJgBIACAAIACAAIABAAIACAAIAAgGQAAgEgBgCQgCgCgEAAIgDACQgCABgBAEIgMAAQAAgJAGgFQACgDADgBQAEgCADAAIAIABIAGAEIAEAHQACADAAAFIAAAsIgNAAIAAgGIAAAAIgGAFQgBACgFAAgAgDAGQgDACAAAFQAAAEACACQABADADAAQADAAACgDQACgCAAgEIAAgIIgDgBQgEAAgDACg");
	this.shape_23.setTransform(205.8,444.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AACAtQgDgBgCgBQgDgDgBgDQgCgEAAgFIAAhIIAMAAIAABHQAAAEACABIAFACIAAAMIgIgBg");
	this.shape_24.setTransform(202.125,443.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAgIgEgDQgCgCgBgCIgBgIIAAgwIANAAIAAArQAAAEABACQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAEAAABgDQABgCAAgEIAAgqIANAAIAAA/IgNAAIAAgGIgFAFQgCABgEABIgFgBg");
	this.shape_25.setTransform(197.825,444.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAtIgGgEIgFgFQgCgEAAgFIANAAQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQACACACAAQABAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQABgCAAgDIAAgNQgCADgDACQgCABgEABQgIAAgDgHIgCgEIAAgJIAAgXIAAgLQABgGAFgDQACgCAFAAIAEABIACABIADACIACACIAAgFIANAAIAABHIgBAGQgBAEgCACQgDADgDACQgEACgFAAIgFgBgAgEgeQgBADAAAEIAAAXIABAEQABADADAAQADAAACgCQABgCAAgDIAAgYQAAgEgBgCQgCgCgDAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_26.setTransform(192.475,446.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAeQgEgCgDgEIgCgGIAAgHIAAgVIAAgHIACgGQADgEAEgCQAEgDAFAAQAEAAAEACIAGAEQAGAGgBAIIAAARIgZAAIAAAJQAAABABAAQAAABAAAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAAAAAAAAQAEAAABgCIACgEIAMAAQABAIgGAFIgGAFIgIABQgFAAgEgDgAgDgRQgDACAAADIAAAIIANAAIAAgIQAAgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_27.setTransform(187.25,444.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAgIAAg/IANAAIAAAHQACgEAEgCQAFgCAFAAIAAAOIgEAAIgEAAQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABIgCADIgBAHIAAAlg");
	this.shape_28.setTransform(183,444.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgJAgQgDAAgCgCIgDgFQgCgEAAgFIABgKQABgEACgCQACgCAFgCIAJgBIABAAIABAAIACAAIACAAIAAgGQAAgEgCgCQgBgCgDAAIgFACQgBABgBAEIgMAAQAAgJAFgFQADgDAEgBQADgCAEAAIAHABIAGAEIAFAHQABADAAAFIAAAsIgNAAIAAgGIAAAAIgFAFQgCACgFAAgAgDAGQgDACAAAFQAAAEACACQACADACAAQADAAACgDQACgCAAgEIAAgIIgEgBQgDAAgDACg");
	this.shape_29.setTransform(175.35,444.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAGAgIAAgrQAAgDgBgCQgCgCgDAAQgDAAgBACIgBAGIAAAqIgNAAIAAg/IANAAIAAAHIAFgGQACgCAEAAIAFABIAEADIADAFIABAHIAAAwg");
	this.shape_30.setTransform(170.175,444.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKAeQgDgCgDgEIgCgGIgBgHIAAgVIABgHIACgGQADgEADgCQAFgDAFAAQAEAAAEACIAGAEQAGAGgBAIIAAARIgYAAIAAAJQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAAAAAAAAQADAAACgCIACgEIAMAAQABAIgGAFIgGAFIgIABQgFAAgFgDgAgDgRQgCACAAADIAAAIIAMAAIAAgIQAAgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_31.setTransform(164.95,444.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAtQgEgBgDgDQgDgCgCgEQgCgEAAgGIAAgxQAAgFABgDQACgEADgDQADgDADgBQAEgCAEAAQAJAAAGAGQADADABAEQACAEAAAFIAAAFIgNAAIAAgFQAAgDgDgDQgCgDgDAAQgEAAgBADQgCADAAAFIAAAtQAAAEACACQABADAEAAIADAAIACgCIACgDIABgEIAAgFIANAAIAAAGQAAAEgCAEIgEAHQgDADgEABQgDACgFAAIgGgBg");
	this.shape_32.setTransform(159.65,443.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKAuQAFAAACgCIABgEIABgGIAAhBIAMAAIAABGQAAAKgGAEQgFAFgKAAgAgBgsIAAgNIAMAAIAAANg");
	this.shape_33.setTransform(248.125,432.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKAeQgDgCgDgEIgCgGIgBgHIAAgVIABgHIACgGQADgEADgCQAFgDAFAAQAEAAAEACIAGAEQAGAGgBAIIAAARIgYAAIAAAJQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQABAAABAAQAAAAAAAAQADAAACgCIABgEIANAAQABAIgGAFIgGAFIgIABQgFAAgFgDgAgDgRQgCACAAADIAAAIIALAAIAAgIQABgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_34.setTransform(244.6,432.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgFAtIAAg/IALAAIAAA/gAgFgfIAAgNIALAAIAAANg");
	this.shape_35.setTransform(240.65,431.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAGAhIAAgsQAAgDgBgDQgCgCgDAAQgDAAgBACIgBAHIAAArIgNAAIAAhAIANAAIAAAHIAFgGQACgBAEAAIAFAAIAEADIADAFIABAHIAAAxg");
	this.shape_36.setTransform(236.575,432.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AATAhIAAgsQAAgDgBgDQgCgCgDAAQgEAAgBACQgCADAAAEIAAArIgMAAIAAgsQAAgDgBgDQgCgCgDAAQgEAAgBACIgBAHIAAArIgNAAIAAhAIANAAIAAAHIAFgGQADgBAEAAQAEAAACABIAFAFIAFgFQADgCAFABIAFAAIAFADIADAFQABADAAAEIAAAxg");
	this.shape_37.setTransform(229.925,432.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AADArQgDgCAAgFIAAgIQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFIAAAIQAAAFgDACQgDADgFAAQgEAAgDgDgAAIAaIgBADIAAAGIABACIACABIADgBIABgCIAAgGIgBgDIgDgBIgCABgAgTAtIAehZIAJAAIgeBZgAgRgTQgDgDAAgEIAAgJQAAgEADgDQADgDAFAAQAFAAADADQACADAAAEIAAAJQAAAEgCADQgDACgFAAQgFAAgDgCgAgMgkIgBACIAAAGIABADIADABIACgBIABgDIAAgGIgBgCIgCgBIgDABg");
	this.shape_38.setTransform(220.125,431.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAtIAVhNIgNAAIAAAKIgLAAIAAgWIAlAAIAAANIgVBMg");
	this.shape_39.setTransform(214.575,431.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGAsIgHgDIgEgHQgBgDAAgFIAAgDIANAAIAAADQAAADABACQACACACAAQABAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQABgCAAgDIAAgVQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAIgCABIgCABIgBABIAAACIgMAAIAAgxIAkAAIAAANIgYAAIAAAYIAEgDIAFgBQAHAAAEAEQAEAEAAAHIAAAXQAAAFgBADIgFAHIgGADIgHACIgGgCg");
	this.shape_40.setTransform(209.425,431.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGgKIANAAIAAAMIgNAJg");
	this.shape_41.setTransform(202.1,435.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFAtIgGgDIgFgGQgCgEAAgGIANAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACACACAAQABAAABAAQABAAAAAAQABgBAAAAQABgBAAAAQABgCAAgDIAAgNQgCAEgDABQgCACgEAAQgIgBgDgFIgCgGIAAgIIAAgXIAAgLQABgGAFgEQACgBAFAAIAEAAIACABIADADIACADIAAgHIANAAIAABIIgBAGQgBAEgCADQgDADgDABQgEACgFAAIgFgBgAgEgeQgBADAAAEIAAAXIABAFQABACADAAQADAAACgCQABgCAAgDIAAgYQAAgDgBgDQgCgCgDAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_42.setTransform(198.025,434.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAIAtIgKgcIgGAKIAAASIgOAAIAAhZIAOAAIAAA1IAOgbIANAAIgPAZIASAmg");
	this.shape_43.setTransform(193,431.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgMAuIAQhbIAKAAIgQBbg");
	this.shape_44.setTransform(187.8,431.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAFAtQgEgBgBgCQgCgCgCgDQgCgDABgGIAAgWIgHAGIAAgJIAHgFIAAgrIALAAIAAAgIAHgGIAAAJIgHAGIAAAfQAAADACACIAFABIAAANIgIgBg");
	this.shape_45.setTransform(184.15,431.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRAgIAAgKIAUgqIgSAAIAAgLIAhAAIAAAKIgUApIAUAAIAAAMg");
	this.shape_46.setTransform(180.6,432.825);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgOAuIAOgmIAAAAIgBAAIgEABQgDAAgDgCQgDgCgCgDIgBgCIgBgDIAAgFIAAgJIAAgIIAAgEIABgEIACgDQACgEAEgDQAFgBAEAAQAFAAAEABQAFADACAEIACADIABAEIAAAEIAAAIIAAAHIAAAEIgBAEIgBACIgRAugAgEgeQgBACAAADIAAARQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAAAAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgRQAAgDgCgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_47.setTransform(172.475,431.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgOAuIAOgmIAAAAIgBAAIgEABQgDAAgDgCQgDgCgCgDIgBgCIgBgDIAAgFIAAgJIAAgIIAAgEIABgEIACgDQACgEAEgDQAFgBAEAAQAFAAAEABQAFADACAEIACADIABAEIAAAEIAAAIIAAAHIAAAEIgBAEIgBACIgRAugAgEgeQgBACAAADIAAARQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAAAAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgRQAAgDgCgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_48.setTransform(167.325,431.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgFgKIALAAIAAAMIgLAJg");
	this.shape_49.setTransform(163.35,435.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJArQgEgCgCgEIgCgDIgBgDIAAgFIAAgHIAAgHIAAgFIABgDIABgEIAQgtIAOAAIgOAnIAAAAIACgBIADAAQAEAAADACQADABABACIACADIABADIAAAGIAAAJIAAAHIAAAFIgBADIgCADQgCAEgFACQgEACgFABQgEgBgFgCgAgEAFQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAABIAAAQQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQABAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgQQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAABgBAAQAAABgBAAg");
	this.shape_50.setTransform(159.375,431.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgFAVIAAgNIALAAIAAANgAgFgHIAAgNIALAAIAAANg");
	this.shape_51.setTransform(242.65,421.95);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBAsQgDgEAAgFIABgFQAAgDACgCIADgDIAFgEIAAAAIAAgGIAAAAIgGAFQgBACgFAAIgEgBQgDAAgCgCIgEgFQgBgEAAgFIABgJQABgEACgDQADgCADgCIAJgBIACAAIACAAIABAAIACAAIAAgGQAAgEgBgCQgCgCgEAAIgDACQgCABgBAEIgMAAQAAgJAGgFQACgDADgBQAEgCADAAIAIABIAGAEIAEAHQACADAAAFIAAAsIgHAAIgGAAIAGAAIgGAIQgCAEAAAEQAAADACACQAAABABAAQABAAAAAAQABABAAAAQABAAAAAAIAEgBIADgBIACAFIgFACIgHABQgGAAgDgDgAgDgHQgDACAAAFQAAADACACQABADADAAQADAAACgDQACgCAAgDIAAgIIgDgBQgEAAgDACg");
	this.shape_52.setTransform(238.65,422.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAIAtIgKgcIgHAKIAAASIgMAAIAAhZIAMAAIAAA1IAPgbIANAAIgPAZIATAmg");
	this.shape_53.setTransform(233.8,419.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgRAsIAAgLIAUgpIgSAAIAAgMIAhAAIAAALIgUApIAUAAIAAAMgAgFgeIAAgNIALAAIAAANg");
	this.shape_54.setTransform(228.55,419.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgGAtIAAg/IANAAIAAA/gAgGgfIAAgNIANAAIAAANg");
	this.shape_55.setTransform(224.95,419.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAGAhIAAgsQAAgEgBgCQgCgBgDAAQgDAAgBABIgBAHIAAArIgNAAIAAhAIANAAIAAAGIAFgEQACgCAEgBIAFABIAEADIADAFIABAHIAAAxg");
	this.shape_56.setTransform(220.875,420.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAAAsIgFgFIAAAGIgNAAIAAhaIANAAIAAAhIAFgGQACgBAEAAQAEAAADABIAEAFQACABAAAEIAAAJIAAAZIAAAIIgCAGQgDAFgIAAQgFABgBgCgAgEgEQgBACAAACIAAAZQAAADABADQACACACAAQADAAACgCQABgDAAgEIAAgYIgBgEQgBgCgEAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_57.setTransform(215.525,419.55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgKAeQgDgCgDgEIgCgGIAAgHIAAgVIAAgHIACgGQADgEADgCQAFgDAFAAQAGAAAEADQAEACADAEIACAGIAAAHIAAAVIAAAHIgCAGQgDAEgEACQgEADgGAAQgFAAgFgDgAgDgRQgCACgBADIAAAZQABADACACQAAABAAAAQABAAAAABQABAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQACgCAAgDIAAgZQAAgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_58.setTransform(210.3,420.825);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgQAoIgCgGIAAgIIAAgZIAAgJQABgHAFgDQACgBAFAAQAEAAACABIAFAGIAAghIANAAIAABaIgNAAIAAgGIgCADIgDACIgCABIgEAAQgIAAgDgFgAgEgEIgBAEIAAAYQAAAEABADQACACACAAQADAAACgCQABgDAAgDIAAgZQAAgCgBgCQgCgCgDAAQgDAAgBACg");
	this.shape_59.setTransform(202.275,419.55);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgJAeQgFgCgCgEIgCgGIAAgHIAAgVIAAgHIACgGQACgEAFgCQAEgDAFAAQAFAAADACIAGAEQAFAGAAAIIAAARIgZAAIAAAJQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQABAAABAAQAAAAAAAAQAEAAABgCIACgEIAMAAQAAAIgFAFIgGAFIgIABQgFAAgEgDgAgEgRQgCACAAADIAAAIIANAAIAAgIQAAgDgDgCQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_60.setTransform(197.05,420.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgRAgIAAgKIAUgqIgSAAIAAgLIAhAAIAAAKIgUApIAUAAIAAAMg");
	this.shape_61.setTransform(192.25,420.825);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgOAhIAAhAIANAAIAAAHQADgDAEgCQADgCAGgBIAAAOIgEAAIgEAAQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAIgDAFIgBAGIAAAmg");
	this.shape_62.setTransform(188.35,420.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgSAuIAAhaIANAAIAAAGIAFgFQABgCAFAAQAIABADAFIACAGIAAAJIAAAYIAAAJQgBAGgFAEQgCABgFAAQgEAAgCgBQgDgCgCgDIAAAggAgEgeQgBADAAAEIAAAYQAAADABABQABABAAAAQABABAAAAQABAAABAAQAAAAAAAAQAEAAABgCIABgFIAAgXQAAgEgBgDQgCgBgDAAQAAAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_63.setTransform(183.425,422.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgJAgQgDAAgCgCIgDgFQgCgEAAgFIABgKQABgEACgCQACgCAFgCIAJgBIABAAIABAAIACAAIACAAIAAgGQAAgEgCgCQgBgCgDAAIgFACQgBABgBAEIgMAAQAAgJAFgFQADgDAEgBQADgCAEAAIAHABIAGAEIAFAHQABADAAAFIAAAsIgNAAIAAgGIAAAAIgFAFQgCACgFAAgAgDAGQgDACAAAFQAAAEACACQACADACAAQADAAACgDQACgCAAgEIAAgIIgEgBQgDAAgDACg");
	this.shape_64.setTransform(175.35,420.825);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAGAhIAAgsQAAgEgBgCQgCgBgDAAQgDAAgBABIgBAHIAAArIgNAAIAAhAIANAAIAAAGIAFgEQACgCAEgBIAFABIAEADIADAFIABAHIAAAxg");
	this.shape_65.setTransform(170.175,420.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgKAeQgDgCgDgEIgCgGIgBgHIAAgVIABgHIACgGQADgEADgCQAFgDAFAAQAEAAAEACIAGAEQAGAGgBAIIAAARIgYAAIAAAJQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQAAABAAAAQABAAAAABQABAAABAAQAAAAAAAAQADAAACgCIACgEIAMAAQABAIgGAFIgGAFIgIABQgFAAgFgDgAgDgRQgCACAAADIAAAIIAMAAIAAgIQAAgDgCgCQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABg");
	this.shape_66.setTransform(164.95,420.825);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGAtQgEgBgDgDQgDgCgCgEQgCgEAAgGIAAgxQAAgFABgDQACgEADgDQADgDADgBQAEgCAEAAQAJAAAGAGQADADABAEQACAEAAAFIAAAFIgNAAIAAgFQAAgDgDgDQgCgDgDAAQgEAAgBADQgCADAAAFIAAAtQAAAEACACQABADAEAAIADAAIACgCIACgDIABgEIAAgFIANAAIAAAGQAAAEgCAEIgEAHQgDADgEABQgDACgFAAIgGgBg");
	this.shape_67.setTransform(159.65,419.525);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7E601").s().p("AgBApIAAg+IgRAAIAJgTIAcAAIAABRg");
	this.shape_68.setTransform(290.15,21.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F7E601").s().p("AgWAfQgIgLAAgUQAAgTAIgMQAJgKANgBQAOABAJAKQAIAMAAAUQAAAUgJAKQgHAMgPAAQgNAAgJgMgAgHgSQgCAFAAANQgBAaAKAAQALAAAAgaQAAgZgLAAQgFAAgCAHg");
	this.shape_69.setTransform(283.7,22);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7E601").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQAEADAAAEQAAAFgEADQgEADgEAAQgEAAgDgDg");
	this.shape_70.setTransform(278.35,25.125);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F7E601").s().p("AgWAfQgIgLAAgUQAAgTAIgMQAJgKANgBQAOABAJAKQAIAMAAAUQAAAUgJAKQgHAMgPAAQgNAAgJgMgAgHgSQgCAFAAANQAAAaAJAAQALAAAAgaQAAgZgLAAQgEAAgDAHg");
	this.shape_71.setTransform(273,22);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F7E601").s().p("AgfApIAkgqQAHgIgBgGQAAgEgCgDQgDgCgFAAQgJAAgBANIAAABIgTAAIAAAAQAAgOAJgJQAHgHANgBQAPAAAIAIQAIAHAAALQAAAMgMALIgOAQIAZAAIAAARg");
	this.shape_72.setTransform(265.65,21.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F7E601").s().p("AgSAJIAAgRIAlAAIAAARg");
	this.shape_73.setTransform(259.675,23.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F7E601").s().p("AgBApIAAg+IgRAAIAJgTIAcAAIAABRg");
	this.shape_74.setTransform(252.8,21.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F7E601").s().p("AgWAfQgIgLAAgUQAAgTAIgMQAJgKANgBQAOABAJAKQAIAMAAAUQAAAUgJAKQgHAMgPAAQgNAAgJgMgAgHgSQgCAFAAANQgBAaAKAAQALAAAAgaQAAgZgLAAQgEAAgDAHg");
	this.shape_75.setTransform(246.35,22);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F7E601").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQAEADAAAEQAAAFgEADQgEADgEAAQgEAAgDgDg");
	this.shape_76.setTransform(241,25.125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F7E601").s().p("AgXAkQgHgGgBgMQAAgJAFgGQAFgEAHgBQgNgEAAgNQAAgLAHgFQAIgHAMAAQANAAAHAHQAIAFAAALQAAANgOAEQAJABAEAEQAFAGgBAJQABAMgJAGQgIAHgPAAQgOAAgJgHgAgHAIQgDACAAAGQAAAEADAEQADACAEAAQAFAAADgCQADgEAAgEQAAgGgDgCQgDgDgFgBQgEABgDADgAgGgZQgDACAAAFQAAAEADADQADACADAAQAFAAACgCQACgDABgEQAAgKgKAAQgDAAgDADg");
	this.shape_77.setTransform(235.65,22);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F7E601").s().p("AgBApIAAg+IgRAAIAKgTIAbAAIAABRg");
	this.shape_78.setTransform(227.8,21.975);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F7E601").s().p("AgKApIAAglIgdgsIAaAAIALAVIACAHIADgHIALgVIAaAAIgdAsIAAAlg");
	this.shape_79.setTransform(217.9,21.95);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F7E601").s().p("AgKApIAAg+IgSAAIAAgTIA5AAIAAATIgSAAIAAA+g");
	this.shape_80.setTransform(211.35,21.95);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F7E601").s().p("AgbAhQgQgNAAgUQAAgRANgNQANgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgPAAgMgKgAgOgQQgHAHAAAJQAAALAGAGQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_81.setTransform(203.275,21.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F7E601").s().p("AgfApIAAhRIAYAAQARAAAHACQALAGAAAMQAAAIgDADQgEAEgIADQAJABAFAEQAFAGAAAIQAAAOgLAGQgFACgIACIgQAAgAgLAYIAIAAQAHAAADgBQAEgDAAgFQAAgFgEgCQgDgBgHgBIgIAAgAgLgIIAFAAQAGAAAEgBQADgBAAgFQAAgGgEgCIgJgBIgFAAg");
	this.shape_82.setTransform(194.725,21.95);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F7E601").s().p("AgbAhQgQgNAAgUQAAgRANgNQANgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgPAAgMgKgAgOgQQgHAHAAAJQAAALAGAGQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_83.setTransform(185.725,21.95);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F7E601").s().p("AgdAfIAKgRQAKAMAJgBQAEAAADgBQACgDAAgEQAAgFgDgCQgDgCgGgCQgMgDgFgEQgFgFAAgJQAAgMAHgIQAIgHAMAAQAOAAAKAHIgHAQQgHgGgIgBQgEABgCACQgDACAAACQAAAFAEACQABABAIABQALAEAFAFQAGAFAAAKQAAANgIAIQgJAIgNAAQgRAAgMgMg");
	this.shape_84.setTransform(177.425,21.95);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F7E601").s().p("AgbAhQgQgNAAgUQAAgRANgNQANgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgPAAgMgKgAgOgQQgHAHAAAJQAAALAGAGQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_85.setTransform(165.725,21.95);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F7E601").s().p("AgkApIAAhRIAUAAIAUABQAKACAHAFQAQALAAAVQAAAWgQALQgHAFgJACIgSABgAgOAXIADAAQAMgBAHgFQAGgFAAgMQAAgLgGgGQgHgFgMAAIgDAAg");
	this.shape_86.setTransform(156.6,21.95);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F7E601").s().p("AgcAgQgFgFgCgIIgBgRIAAgrIAWAAIAAAsQABALADAEQACAGAIAAQAJgBADgGQACgFAAgOIAAgnIAWAAIAAAvQAAATgIAJQgJAIgTAAQgUAAgIgKg");
	this.shape_87.setTransform(261.05,11.05);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F7E601").s().p("AAKApIgZglIAAAlIgWAAIAAhRIAWAAIAAAlIAZglIAaAAIgfAoIAhApg");
	this.shape_88.setTransform(252.975,10.95);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F7E601").s().p("AgKApIAAg+IgSAAIAAgTIA5AAIAAATIgSAAIAAA+g");
	this.shape_89.setTransform(245.1,10.95);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F7E601").s().p("AAHApIgSggIAAAgIgVAAIAAhRIAZAAIAOABQAIABAEADQAKAHAAANQAAATgTAEIAWAhgAgLgBIAFAAQAMAAAAgKQAAgHgDgCQgDgDgGAAIgFAAg");
	this.shape_90.setTransform(238.7,10.95);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F7E601").s().p("AAUApIgEgPIgfAAIgEAPIgWAAIAchRIAbAAIAcBRgAAMAKIgJgaIgDgLIgCALIgIAaIAWAAg");
	this.shape_91.setTransform(230.4,10.95);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F7E601").s().p("AANApIgKgjIgDgKIgCAKIgKAjIgVAAIgXhRIAXAAIAJAnIADALIADgLIAKgnIARAAIAKAnIADAJIAAACIADgLIAJgnIAXAAIgXBRg");
	this.shape_92.setTransform(220.675,10.95);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F7E601").s().p("AgmApIApg/IggAAIAAgSIBEAAIgpA/IAkAAIAAASg");
	this.shape_93.setTransform(211.225,10.95);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F7E601").s().p("AgTAfQgLgNAAgSQAAgSALgMQAMgMARAAQAKAAAMAFIAAAZQgJgKgKAAQgKAAgGAGQgFAHgBAJQABAKAFAHQAGAHAKAAQAKgBAJgJIAAAYQgMAFgKAAQgRAAgMgMg");
	this.shape_94.setTransform(203.85,10.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F7E601").s().p("AgkApIAAhRIATAAIAVABQAJABAIAFQAQAMAAAVQAAAWgQAMQgHAEgJACIgSABgAgOAXIAEAAQALAAAHgGQAGgFAAgMQAAgLgGgGQgHgFgLAAIgEAAg");
	this.shape_95.setTransform(192.4,10.95);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F7E601").s().p("AgbAiQgQgOAAgUQAAgRANgMQANgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgPAAgMgJgAgOgQQgHAHAAAJQAAAKAGAHQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_96.setTransform(182.925,10.95);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgEA7IAKgYIAPAAIgHAYgAgjgPQAAgUAKgLQAKgMAPAAQARAAAKAMQAJALAAASIAAAJIgzAAQAAAIAFAEQAFAFAIAAQAKAAAIgIIANANQgHAGgGADQgIAEgLAAQglAAAAgqgAAQgXQAAgFgCgEQgEgIgKAAQgJAAgEAIQgCAEAAAFIAfAAIAAAAg");
	this.shape_97.setTransform(210.975,404.625);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgfAvIANgNQAHAGAJABQAHgBAFgFQAEgEAAgIIAAgJQgHAJgMAAQgNAAgHgIQgFgFgCgIQgCgGAAgMQAAgNACgHQACgIAFgFQAHgIANAAQALAAAJAJIAAgIIAUAAIAABPQAAAQgKAJQgKAKgQAAQgTAAgLgLgAgKgfQgCAEAAALQAAAKACAEQACAGAIAAQAIAAADgGQADgFAAgJQAAgLgDgEQgDgHgIAAQgIAAgCAHg");
	this.shape_98.setTransform(202.2,404.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgbAjQgGgHAAgMQAAgKAHgGQAHgHAOAAIATAAIAAgEQAAgNgPAAQgKAAgGAHIgNgNQAGgGAHgDQAGgDALAAQAiAAAAAeIAAA2IgUAAIAAgHQgIAIgLAAQgOAAgIgIgAgNAQQAAAKAMAAQAHAAAEgEQAEgDAAgIIAAgEIgPAAQgMAAAAAJg");
	this.shape_99.setTransform(193.675,403.025);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AARAqIgRg0IgQA0IgRAAIgahTIAWAAIANAzIARgzIAPAAIARAzIANgzIAWAAIgZBTg");
	this.shape_100.setTransform(183.825,403.025);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgbAjQgGgHAAgMQAAgKAHgGQAHgHAOAAIATAAIAAgEQAAgNgPAAQgKAAgGAHIgNgNQAGgGAHgDQAGgDALAAQAiAAAAAeIAAA2IgUAAIAAgHQgIAIgLAAQgOAAgIgIgAgNAQQAAAKAMAAQAHAAAEgEQAEgDAAgIIAAgEIgPAAQgMAAAAAJg");
	this.shape_101.setTransform(169.975,403.025);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAOAqIAAgxQAAgIgFgEQgDgDgGAAQgFAAgDADQgFAEAAAIIAAAxIgVAAIAAhSIAVAAIAAAIQAIgJAMAAQAMAAAHAHQAJAJAAAPIAAA0g");
	this.shape_102.setTransform(161.625,402.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAmAqIAAgxQAAgIgFgEQgDgDgGAAQgFAAgEADQgFAEABAHIAAAyIgVAAIAAgxQABgIgFgEQgDgDgGAAQgGAAgDADQgFAEAAAIIAAAxIgVAAIAAhSIAUAAIAAAIQAJgJANAAQANAAAIALQAKgLAPAAQANAAAHAHQAJAJAAAPIAAA0g");
	this.shape_103.setTransform(271.35,386.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgZAjQgJgJAAgPIAAg0IAVAAIAAAxQAAAIAFAEQADAEAFAAQAGAAADgEQAFgEAAgIIAAgxIAVAAIAABSIgVAAIAAgHQgIAIgLAAQgNAAgHgHg");
	this.shape_104.setTransform(259.875,387.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgKA5IAAhQIAVAAIAABQgAgKgnIAAgRIAVAAIAAARg");
	this.shape_105.setTransform(253.35,385.475);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAmAqIAAgxQAAgIgEgEQgEgDgFAAQgGAAgEADQgEAEgBAHIAAAyIgTAAIAAgxQgBgIgEgEQgDgDgGAAQgGAAgEADQgEAEAAAIIAAAxIgVAAIAAhSIAVAAIAAAIQAIgJAMAAQAOAAAIALQAJgLAPAAQAOAAAHAHQAJAJAAAPIAAA0g");
	this.shape_106.setTransform(244.4,386.975);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgjAAQAAgTAKgLQAKgMAPAAQARAAAKAMQAJALAAASIAAAIIgzAAQAAAIAFAFQAFAFAIAAQAKAAAIgIIANANQgHAGgGADQgIAEgLAAQglAAAAgrgAAQgHQAAgFgCgEQgEgIgKAAQgJAAgEAIQgCAEAAAFIAfAAIAAAAg");
	this.shape_107.setTransform(233.175,387.025);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgdAqIAAhSIAUAAIAAAIQAIgJAMAAQAMAAAHAIIgPAQQgFgFgGAAQgEAAgEADQgEAFAAAHIAAAxg");
	this.shape_108.setTransform(225.95,386.975);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgiA6IAAhxIAUAAIAAAIQAJgKALABQANAAAIAHQAEAGADAJQABAIAAAMQAAANgBAGQgDAKgEAFQgIAIgNAAQgMAAgHgJIAAAngAgKgeQgDAEAAAMQAAAMADAEQADAIAHgBQAIABAEgIQACgEAAgMQAAgMgCgEQgEgIgIABQgHgBgDAIg");
	this.shape_109.setTransform(217.65,388.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgcA5IAAgSIAFAAQAEgBADgBQABgCACgEIADgKIgchNIAWAAIARAzIAQgzIAWAAIgkBgQgDAHgCADQgHAHgLAAg");
	this.shape_110.setTransform(205.75,388.55);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAOAqIAAgxQAAgIgFgEQgDgDgGAAQgFAAgDADQgFAEAAAIIAAAxIgVAAIAAhSIAVAAIAAAIQAIgJAMAAQAMAAAHAHQAJAJAAAPIAAA0g");
	this.shape_111.setTransform(197.475,386.975);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgbAjQgGgHAAgMQAAgKAHgGQAHgHAOAAIATAAIAAgEQAAgNgPAAQgKAAgGAHIgNgNQAGgGAHgDQAGgDALAAQAiAAAAAeIAAA2IgUAAIAAgHQgIAIgLAAQgOAAgIgIgAgNAQQAAAKAMAAQAHAAAEgEQAEgDAAgIIAAgEIgPAAQgMAAAAAJg");
	this.shape_112.setTransform(188.575,387.025);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAOAqIAAgxQAAgIgFgEQgDgDgGAAQgFAAgDADQgFAEAAAIIAAAxIgVAAIAAhSIAVAAIAAAIQAIgJAMAAQAMAAAHAHQAJAJAAAPIAAA0g");
	this.shape_113.setTransform(180.225,386.975);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgbAjQgGgHAAgMQAAgKAHgGQAHgHAOAAIATAAIAAgEQAAgNgPAAQgKAAgGAHIgNgNQAGgGAHgDQAGgDALAAQAiAAAAAeIAAA2IgUAAIAAgHQgIAIgLAAQgOAAgIgIgAgNAQQAAAKAMAAQAHAAAEgEQAEgDAAgIIAAgEIgPAAQgMAAAAAJg");
	this.shape_114.setTransform(171.325,387.025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgoA5IAAhxIAsAAQARAAAJAJQAJAIAAAPQAAAIgEAIQgEAFgGADQAQAGAAASQAAAQgKAIQgJAJgQAAgAgSAlIAWAAQAHAAAEgEQAEgEAAgGQAAgGgEgEQgEgEgHAAIgWAAgAgSgKIAVAAQAGAAAEgEQAEgDAAgGQAAgGgEgEQgEgDgGAAIgVAAg");
	this.shape_115.setTransform(162.475,385.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgDAdIAAgpIAGAAIAAApgAgDgTIAAgJIAGAAIAAAJg");
	this.shape_116.setTransform(264.35,588.825);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_117.setTransform(261.575,589.625);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_118.setTransform(257.425,589.625);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgEAEg");
	this.shape_119.setTransform(253.25,589.625);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_120.setTransform(248.875,589.575);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgDgFQgCgFAAgGQAAgHACgEQADgFAEgCQADgDAFAAQADAAAEABQADACABADIAAgVIAHAAIAAA4IgHAAIAAgFQgDAGgIAAQgEAAgEgDgAgHgEQgCAEAAAIQgBAIAEADQADAEAEAAQAFAAADgDQADgEAAgIQAAgIgDgDQgEgEgEAAQgEAAgEADg");
	this.shape_121.setTransform(244.3,588.875);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCACgFIAHABQgCAHgFADQgEAEgHAAQgIAAgGgGgAAMgDQAAgFgDgDQgEgEgEAAQgFAAgCADQgEAEgBAFIAXAAIAAAAg");
	this.shape_122.setTransform(240.05,589.625);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgWAZIgEAFIAJAAIASAAIAAAGg");
	this.shape_123.setTransform(235.85,589.625);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_124.setTransform(231.975,589.625);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgSAVIAAgGIAagdIgIAAIgQAAIAAgGIAhAAIAAAFIgVAZIgFAFIAJAAIASAAIAAAGg");
	this.shape_125.setTransform(227.85,589.625);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_126.setTransform(223.825,589.625);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgNAQQgFgFAAgLQAAgLAGgFQAGgFAGAAQAJAAAFAGQAGAGgBAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEAAgIQAAgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_127.setTransform(219.65,589.625);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_128.setTransform(216.125,589.625);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCACgFIAHABQgCAHgFADQgEAEgHAAQgIAAgGgGgAAMgDQAAgFgDgDQgEgEgEAAQgFAAgCADQgEAEgBAFIAXAAIAAAAg");
	this.shape_129.setTransform(212.6,589.625);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgIAAIgMgpIAHAAIAGAXIADAJIACgIIAHgYIAGAAIAGAXIACAIIADgIIAHgXIAGAAIgMApg");
	this.shape_130.setTransform(207.5,589.625);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgNAQQgGgFABgLQAAgLAGgFQAFgFAHAAQAJAAAFAGQAFAGAAAJQABAHgDAFQgDAFgEACQgFADgFAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_131.setTransform(202.45,589.625);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAJAdIgNgVIgFAEIAAARIgHAAIAAg5IAHAAIAAAgIAQgQIAJAAIgQAPIARAag");
	this.shape_132.setTransform(198.5,588.825);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_133.setTransform(194.075,589.575);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_134.setTransform(189.65,589.625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_135.setTransform(186.425,589.575);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQABgFAFgCQAEgDAEAAQADAAADABQAEACABADIAAgVIAHAAIAAA4IgGAAIAAgFQgEAGgIAAQgEAAgEgDgAgGgEQgDAEAAAIQAAAIADADQADAEAEAAQAEAAAEgDQADgEAAgIQAAgIgDgDQgEgEgEAAQgEAAgDADg");
	this.shape_136.setTransform(182.45,588.875);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAJAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAFAAQAEAAACgCQADgCACgFIAHABQgCAHgEADQgFAEgHAAQgJAAgEgGgAAMgDQgBgFgCgDQgDgEgFAAQgFAAgCADQgEAEgBAFIAXAAIAAAAg");
	this.shape_137.setTransform(178.2,589.625);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDAdIAAgpIAGAAIAAApgAgDgTIAAgJIAGAAIAAAJg");
	this.shape_138.setTransform(175.15,588.825);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgKAXIAAAFIgHAAIAAg4IAHAAIAAAUQAEgFAGAAQAEAAAEABQAEACACADIADAGIABAIQAAALgFAFQgFAGgIAAQgGAAgEgGgAgHgDQgDADAAAHQAAAIABADQAEAFAFAAQAFAAACgEQAEgEAAgIQAAgHgDgEQgEgDgEAAQgEAAgDAEg");
	this.shape_139.setTransform(172.15,588.875);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgKAeIAPg6IAGAAIgPA6g");
	this.shape_140.setTransform(168.75,588.85);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAGAAIAAA5g");
	this.shape_141.setTransform(166.75,588.825);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAADADQAEACADAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgEAFg");
	this.shape_142.setTransform(163.85,590.375);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_143.setTransform(160.45,591.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIABANIABAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgKADg");
	this.shape_144.setTransform(157.1,589.625);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAIAdIgMgVIgFAEIAAARIgHAAIAAg5IAHAAIAAAgIAQgQIAJAAIgQAPIARAag");
	this.shape_145.setTransform(153.15,588.825);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_146.setTransform(148.725,589.575);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGAAAJQAAAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_147.setTransform(144.3,589.625);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_148.setTransform(141.075,589.575);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgDgFQgCgFAAgGQAAgHACgEQACgFAFgCQAEgDAEAAQAEAAADABQACACACADIAAgVIAHAAIAAA4IgHAAIAAgFQgDAGgIAAQgEAAgEgDgAgGgEQgDAEAAAIQgBAIAEADQADAEAEAAQAFAAADgDQADgEAAgIQAAgIgDgDQgEgEgEAAQgEAAgDADg");
	this.shape_149.setTransform(137.1,588.875);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgGAJAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAFAAQADAAADgCQADgCACgFIAHABQgCAHgEADQgFAEgHAAQgJAAgFgGgAAMgDQgBgFgCgDQgDgEgFAAQgFAAgCADQgEAEgBAFIAXAAIAAAAg");
	this.shape_150.setTransform(132.85,589.625);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgDAdIAAgpIAGAAIAAApgAgDgTIAAgJIAGAAIAAAJg");
	this.shape_151.setTransform(129.8,588.825);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgKAXIAAAFIgHAAIAAg4IAHAAIAAAUQAFgFAFAAQAFAAADABQAEACACADIADAGIABAIQAAALgFAFQgFAGgIAAQgGAAgEgGgAgHgDQgDADgBAHQAAAIACADQAEAFAFAAQAFAAACgEQAEgEAAgIQAAgHgDgEQgDgDgFAAQgDAAgEAEg");
	this.shape_152.setTransform(126.8,588.875);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_153.setTransform(123.45,591.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAIAVIgGgYIgCgHIgHAfIgIAAIgMgpIAHAAIAHAXIACAJIACgIIAHgYIAGAAIAGAXIADAIIACgIIAHgXIAGAAIgMApg");
	this.shape_154.setTransform(119.4,589.625);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAIAVIgGgYIgCgHIgHAfIgHAAIgOgpIAIAAIAHAXIACAJIACgIIAHgYIAGAAIAGAXIADAIIACgIIAHgXIAGAAIgMApg");
	this.shape_155.setTransform(113.65,589.625);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAIAVIgGgYIgCgHIgHAfIgHAAIgOgpIAIAAIAHAXIACAJIACgIIAHgYIAGAAIAHAXIACAIIACgIIAHgXIAHAAIgOApg");
	this.shape_156.setTransform(107.9,589.625);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQADgCAFAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_157.setTransform(100.65,589.625);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_158.setTransform(96.275,589.575);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgOAcIgBgGIAEAAIADgBIADgCIACgFIABgCIgQgoIAHAAIAJAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgEgBg");
	this.shape_159.setTransform(89.9,590.475);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIAAAEIABABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_160.setTransform(86.8,588.925);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_161.setTransform(84.625,589.575);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAEAAQAFAAACgCQADgCACgFIAHABQgCAHgEADQgFAEgIAAQgHAAgFgGgAAMgDQgBgFgCgDQgDgEgGAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_162.setTransform(80.8,589.625);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgFAdIAAgjIgGAAIAAgGIAGAAIAAgEIABgGQABgDADgBQABgCAFAAIAGABIgBAFIgEAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQgCACAAAEIAAADIAIAAIAAAGIgIAAIAAAjg");
	this.shape_163.setTransform(77.675,588.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgNAQQgGgFABgLQAAgLAGgFQAFgFAHAAQAJAAAFAGQAFAGAAAJQABAHgDAFQgDAFgEACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_164.setTransform(74.2,589.625);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgOAcIgBgGIADAAIAEgBIADgCIACgFIABgCIgQgoIAHAAIAJAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgEgBg");
	this.shape_165.setTransform(67.85,590.475);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgDAdIAAgXIgFAFIAAgHIAFgEIAAgcIAGAAIAAAXIAGgEIAAAGIgGADIAAAdg");
	this.shape_166.setTransform(64.925,588.825);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgNAYQgGgGABgKQgBgLAHgGQAGgEAGAAQAIAAAGAFQAFAGABAJQgBAIgCAFQgCAEgFADQgEACgGAAQgHAAgGgFgAgHgDQgEADAAAIQAAAHAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgDQgDgEgGAAQgEAAgDAEgAgDgRIAFgLIAJAAIgJALg");
	this.shape_167.setTransform(61.85,588.875);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgLAaQgFgDAAgHIAHABQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQADACAEAAQAEAAADgCQADgCABgEIAAgJQgEAGgHAAQgIAAgEgGQgFgHAAgHQAAgGACgFQACgFAEgDQAEgDAFAAQAHAAAFAGIAAgFIAGAAIAAAjQAAAKgCAEQgCAEgEACQgEADgGAAQgHAAgEgEgAgHgTQgDAEAAAHQAAAIADADQAEAEADAAQAFAAAEgEQADgDAAgHQAAgIgEgEQgDgEgFAAQgDAAgEAEg");
	this.shape_168.setTransform(57.325,590.425);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAIAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEAEAAQAEAAADgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAAMgDQAAgFgDgDQgEgEgEAAQgEAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_169.setTransform(53.05,589.625);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgSAVIAAgGIAagdIgIAAIgQAAIAAgGIAhAAIAAAFIgVAZIgFAFIAJAAIASAAIAAAGg");
	this.shape_170.setTransform(48.85,589.625);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_171.setTransform(44.975,589.625);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgSAVIAAgGIAagdIgIAAIgQAAIAAgGIAhAAIAAAFIgVAZIgFAFIAJAAIASAAIAAAGg");
	this.shape_172.setTransform(40.85,589.625);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgKAbQgGgCgCgEQgDgFgBgGIAHgBIADAHQACADAEACQAEABADABIAIgBIAFgEIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQgBgCgEgBIgJgDIgLgDQgEgCgCgDQgCgDAAgEQAAgEACgEQACgEAFgCQAFgBAFAAQAGAAAFABQAFADACAEQADADAAAGIgHAAQgBgGgDgDQgDgCgHAAQgGAAgDACQgDADAAAEQAAACACACQACADAJACIAMADQAFABADAEQACADAAAGQAAAEgDAEQgCAEgFACQgFACgGABQgHAAgFgDg");
	this.shape_173.setTransform(36.175,588.85);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_174.setTransform(225.75,581.85);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgIAAIgMgpIAHAAIAGAXIADAJIACgIIAHgYIAGAAIAHAXIABAIIACgIIAIgXIAHAAIgNApg");
	this.shape_175.setTransform(221.7,580.175);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgNAYQgGgGABgKQgBgLAHgGQAGgEAGAAQAIAAAGAFQAFAGABAJQgBAIgCAFQgCAEgFADQgEACgGAAQgHAAgGgFgAgHgDQgEADAAAIQAAAHAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgDQgDgEgGAAQgEAAgDAEgAgDgRIAFgLIAJAAIgJALg");
	this.shape_176.setTransform(216.65,579.425);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_177.setTransform(212.425,580.175);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgOASQgEgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQACgDAEgBQAFgCAEAAQAFAAADACQAEABACACIABAFIABAGIAAAIIAAANIACAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgLADg");
	this.shape_178.setTransform(208.25,580.175);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQADgDACgCQADgBADAAQAFAAAEADQAFACACAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgCgCgCgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgEAFg");
	this.shape_179.setTransform(204,580.925);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_180.setTransform(199.45,580.175);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgWAZIgEAFIAJAAIATAAIAAAGg");
	this.shape_181.setTransform(195.25,580.175);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQADgCAFAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_182.setTransform(188.85,580.175);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgCAdIAAgpIAFAAIAAApgAgCgTIAAgJIAFAAIAAAJg");
	this.shape_183.setTransform(185.8,579.375);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_184.setTransform(182.725,580.125);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_185.setTransform(178.3,580.175);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQACgDAEgCQACgBADAAQAFAAAEADQAFACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgEgCgBgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAADgEQADgEABgHQgBgIgDgEQgDgEgEAAQgEAAgEAFg");
	this.shape_186.setTransform(174.05,580.925);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_187.setTransform(170.675,580.125);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAEAAQAFAAACgCQADgCACgFIAHABQgCAHgEADQgFAEgIAAQgHAAgFgGgAAMgDQgBgFgCgDQgDgEgGAAQgDAAgDADQgEAEgBAFIAXAAIAAAAg");
	this.shape_188.setTransform(166.85,580.175);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgWAZIgEAFIAJAAIATAAIAAAGg");
	this.shape_189.setTransform(162.65,580.175);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_190.setTransform(158.775,580.175);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgOAcIgBgGIADAAIAEgBIADgCIACgFIABgCIgQgoIAHAAIAJAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgEgBg");
	this.shape_191.setTransform(154.7,581.025);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAIAVIgGgYIgCgHIgHAfIgHAAIgOgpIAIAAIAHAXIACAJIACgIIAHgYIAGAAIAHAXIACAIIABgIIAIgXIAHAAIgOApg");
	this.shape_192.setTransform(149.75,580.175);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgNAQQgGgFABgLQgBgLAHgFQAFgFAHAAQAIAAAGAGQAFAGAAAJQAAAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_193.setTransform(142.5,580.175);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQACgFADgCQAFgDAEAAQAEAAADABQACACACADIAAgVIAHAAIAAA4IgGAAIAAgFQgFAGgHAAQgEAAgEgDgAgHgEQgDAEAAAIQABAIADADQADAEAEAAQAEAAADgDQAEgEAAgIQAAgIgEgDQgDgEgFAAQgDAAgEADg");
	this.shape_194.setTransform(137.95,579.425);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgOAcIgBgGIADAAIAEgBIADgCIACgFIABgCIgQgoIAHAAIAJAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgEgBg");
	this.shape_195.setTransform(131.75,581.025);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_196.setTransform(127.525,580.125);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAAEADQAEACACAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQACADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgDAFg");
	this.shape_197.setTransform(123.25,580.925);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAAAdIgBgCIgBgCIgBgDIABgFIACgDQgIAAgEgGQgGgGAAgJQAAgKAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAKIAAACIgeAAQABAGADADQADAEAEAAQAFAAACgCQADgCACgEIAHAAQgCAHgEADQgDACgEABIAAAAIgEAAIgCABIAAAAIAGgBIgCADIgCAEIABADQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIACgBIAAAFIgFACIgEgBgAgGgUQgEAEgBAFIAXAAQgBgFgCgDQgDgEgGAAQgDAAgDADgAAAAOIACgBIAEAAIAAAAIgGABgAAGANIAAAAg");
	this.shape_198.setTransform(118.7,580.975);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIABAEIABABIACABIADgBIABAHIgFAAIgFgBg");
	this.shape_199.setTransform(115.45,579.475);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_200.setTransform(112.275,580.175);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_201.setTransform(108.1,580.175);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgDgFQgCgFAAgGQAAgHACgEQACgFAFgCQADgDAFAAQAEAAADABQADACABADIAAgVIAHAAIAAA4IgHAAIAAgFQgEAGgHAAQgEAAgEgDgAgHgEQgCAEAAAIQAAAIADADQADAEAEAAQAFAAADgDQADgEAAgIQAAgIgDgDQgEgEgFAAQgDAAgEADg");
	this.shape_202.setTransform(103.55,579.425);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIAAAEIACABIACABIADgBIABAHIgFAAIgFgBg");
	this.shape_203.setTransform(98.25,579.475);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AAJAdIgNgVIgFAEIAAARIgHAAIAAg5IAHAAIAAAgIAQgQIAJAAIgQAPIARAag");
	this.shape_204.setTransform(95.35,579.375);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgJAUIgEgEIgCgFIgBgHIAAgYIAHAAIAAAWIAAAHQABADADACQACABACAAQADAAACgBQADgCABgDIACgIIAAgVIAHAAIAAAoIgGAAIAAgGQgGAHgHAAQgDAAgEgBg");
	this.shape_205.setTransform(90.9,580.225);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgDgFQgCgFAAgGQAAgHACgEQADgFAEgCQADgDAFAAQADAAAEABQADACABADIAAgVIAHAAIAAA4IgHAAIAAgFQgDAGgIAAQgEAAgEgDgAgHgEQgCAEAAAIQgBAIAEADQADAEAEAAQAFAAADgDQADgEAAgIQAAgIgDgDQgEgEgEAAQgEAAgEADg");
	this.shape_206.setTransform(86.35,579.425);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_207.setTransform(82.1,580.175);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_208.setTransform(78.875,580.125);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgVAdIAAg5IAVAAIAIABQAFABADACQADACABADQACAEAAAEQAAAHgFAEQgEAFgNAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgIgBIgNAAg");
	this.shape_209.setTransform(74.75,579.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// pricetag
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(82.75,421.3,1.0816,1.0816,0,0,0,61.6,51.2);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(85.9,424.3,1.0816,1.0816,0,0,0,64.5,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// PACK
	this.instance_2 = new lib.PACK_1();
	this.instance_2.setTransform(0,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// BIEDRONKOWQ_Osz_2
	this.instance_3 = new lib.BIEDRONKOWQ_Osz_2("synched",0);
	this.instance_3.setTransform(72.5,24.1,0.8854,0.8854,0,0,0,74,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// CTA_Green
	this.instance_4 = new lib.CTAGreen();
	this.instance_4.setTransform(150.05,554.6,0.7189,0.7189,0,0,0,0.1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// BG
	this.instance_5 = new lib.gph_bg4("synched",0);
	this.instance_5.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.gph_Tela1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txts_CURVAs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA1IAAgzIgmg2IAhAAIATAdIATgdIAiAAIgoA2IAAAzg");
	this.shape.setTransform(168.175,155.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguA1IAAhpIAlAAQAaAAAPAOQAPAPAAAXQAAAXgOAOQgQAQgYAAgAgSAeIAGAAQAOAAAIgIQAIgIAAgOQAAgOgJgIQgGgHgOAAIgHAAg");
	this.shape_1.setTransform(158.1,155.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA1IgGgSIgmAAIgHASIgeAAIAphpIAeAAIAoBpgAAMAOIgMghIgKAhIAWAAg");
	this.shape_2.setTransform(146.975,155.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdA1IAAhpIAcAAIAABSIAgAAIAAAXg");
	this.shape_3.setTransform(138.3,155.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpAoQgRgQAAgYQAAgXARgQQARgQAYAAQAaAAAQAQQARAQAAAXQAAAYgRAQQgQAQgaAAQgYAAgRgQgAgVgTQgIAIAAALQAAAMAIAIQAJAJAMAAQANAAAIgJQAJgIAAgMQAAgLgJgIQgJgJgMAAQgMAAgJAJg");
	this.shape_4.setTransform(127.975,155.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOA1IgjguIAAAuIgcAAIAAhpIAcAAIAAAsIAhgsIAiAAIgqAyIAuA3g");
	this.shape_5.setTransform(116.7,155.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeA1IAAhpIA8AAIAAAXIggAAIAAASIAfAAIAAAWIgfAAIAAATIAgAAIAAAXg");
	this.shape_6.setTransform(107.3,155.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA1IAxhSIgpAAIAAgXIBXAAIgxBSIAsAAIAAAXg");
	this.shape_7.setTransform(98.5,155.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAoQgQgRAAgXQAAgVAQgRQARgQAXAAQALAAAOAFIAAAhQgKgLgPAAQgLgBgHAIQgJAIAAAMQAAANAJAIQAGAIAMgBQAOAAALgLIAAAhQgPAGgJgBQgYAAgRgPg");
	this.shape_8.setTransform(89.125,155.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNA1IAAhpIAbAAIAABpg");
	this.shape_9.setTransform(78.9,155.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNA1IAAhpIAbAAIAABpg");
	this.shape_10.setTransform(70.9,155.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOA1IgjguIAAAuIgcAAIAAhpIAcAAIAAAsIAhgsIAiAAIgrAyIAvA3g");
	this.shape_11.setTransform(63.65,155.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWA1IAAgnIgPAJIAAgWIAPgIIAAgtIAaAAIAAAjIARgKIAAAWIgRAJIAAAaIAiAAIAAAXg");
	this.shape_12.setTransform(53.9,155.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOA1IAAgzIgmg2IAhAAIATAdIATgdIAiAAIgoA2IAAAzg");
	this.shape_13.setTransform(45.275,155.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAKA1IgagpIAAApIgcAAIAAhpIAsAAQAQAAAJAJQAJAJAAAPQAAAOgIAHQgHAGgIACIAiArgAgQgFIAGAAQAIAAAEgEQAEgDAAgGQAAgFgEgEQgDgEgJAAIgGAAg");
	this.shape_14.setTransform(36.05,155.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaA1IgGgSIgmAAIgHASIgeAAIAphpIAeAAIAoBpgAAMAOIgMghIgKAhIAWAAg");
	this.shape_15.setTransform(25.175,155.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoA1IAAhpIApAAQAQAAAHAIQAHAHAAANQAAAHgDAGQgEAGgFACQAJABAGAFQAHAHAAAMQAAANgIAIQgKAKgTAAgAgMAgIAGAAQANAAAEgFQACgCAAgFQAAgEgDgDQgEgEgMAAIgGAAgAgMgKIAFAAQAHAAADgEQACgCAAgFQAAgEgCgDQgDgDgHAAIgFAAg");
	this.shape_16.setTransform(15.175,155.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdA1IAAhpIAcAAIAABSIAfAAIAAAXg");
	this.shape_17.setTransform(122.35,171.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeA1IAAhpIA9AAIAAAXIghAAIAAASIAfAAIAAAWIgfAAIAAATIAhAAIAAAXg");
	this.shape_18.setTransform(114.85,171.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AguA1IAAhpIAlAAQAaAAAPAOQAPAPAAAXQAAAXgOAOQgRAQgXAAgAgSAeIAFAAQAPAAAIgIQAIgIAAgOQAAgOgIgIQgIgHgNAAIgHAAg");
	this.shape_19.setTransform(105.7,171.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdA1IAAhpIA8AAIAAAXIggAAIAAASIAdAAIAAAWIgdAAIAAATIAgAAIAAAXg");
	this.shape_20.setTransform(96.55,171.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AATA1IgTg9IgUA9IgcAAIgghpIAdAAIASBEIAXhEIAVAAIAVBEIAUhEIAdAAIgiBpg");
	this.shape_21.setTransform(84.625,171.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLALQgFgEAAgHQAAgGAFgFQAFgEAGgBQAHAAAFAGQAFAEAAAGQAAAHgFAEQgFAFgHABQgGgBgFgFg");
	this.shape_22.setTransform(71.025,175.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeA1IAAhpIA9AAIAAAXIghAAIAAASIAfAAIAAAWIgfAAIAAATIAhAAIAAAXg");
	this.shape_23.setTransform(65.25,171.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAZIAUgxIAXAAIgbAxg");
	this.shape_24.setTransform(152.95,144.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAaA1IgGgSIgmAAIgHASIgeAAIAphpIAeAAIAoBpgAAMAOIgMghIgKAhIAWAAg");
	this.shape_25.setTransform(145.525,139.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAOA1IgjguIAAAuIgcAAIAAhpIAcAAIAAAsIAhgsIAiAAIgrAyIAvA3g");
	this.shape_26.setTransform(135.05,139.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgvA1IAxhSIgpAAIAAgXIBXAAIgxBSIAsAAIAAAXg");
	this.shape_27.setTransform(124.25,139.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYAoQgQgRAAgXQAAgVAQgRQARgRAXAAQALABAOAFIAAAhQgKgMgPAAQgLAAgHAIQgJAIAAAMQAAANAJAIQAGAIAMAAQAOAAALgMIAAAhQgPAGgJAAQgYAAgRgQg");
	this.shape_28.setTransform(114.825,139.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeA1IAAhpIA9AAIAAAXIghAAIAAASIAfAAIAAAWIgfAAIAAATIAhAAIAAAXg");
	this.shape_29.setTransform(106.75,139.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgeA1IAAhpIAcAAIAABSIAhAAIAAAXg");
	this.shape_30.setTransform(99.55,139.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAnA1IgIg8IgZA8IgLAAIgYg8IgJA8IgcAAIAShpIAcAAIAUA3IAXg3IAcAAIAQBpg");
	this.shape_31.setTransform(88.425,139.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeA1IAAhpIA9AAIAAAXIghAAIAAASIAfAAIAAAWIgfAAIAAATIAhAAIAAAXg");
	this.shape_32.setTransform(74.35,139.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNA1IAAhpIAbAAIAABpg");
	this.shape_33.setTransform(68,139.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWA0QgIgDgIgFIALgXQAMALANAAQAGAAAEgEQACgCAAgEQAAgEgDgDQgCgCgKgDIgIgDQgKgDgFgEQgGgHAAgMQAAgQAKgKQAKgKAQAAQARAAAQAJIgLAVQgJgHgJAAQgGAAgCADQgDADAAADQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAGACIAIACQAOAEAFAHQAHAGAAAMQAAARgKAKQgLALgTAAQgMAAgJgEg");
	this.shape_34.setTransform(61.275,139.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAaA1IgGgSIgmAAIgHASIgeAAIAphpIAeAAIAoBpgAAMAOIgMghIgKAhIAWAAg");
	this.shape_35.setTransform(51.325,139.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMA1IAAhSIgYAAIAAgXIBIAAIAAAXIgWAAIAABSg");
	this.shape_36.setTransform(42.2,139.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgoA1IAAhpIAsAAQARAAAKAJQAKAKAAAQQAAARgKAJQgJAJgRAAIgRAAIAAAjgAgMgDIAJAAQAHAAAEgEQAEgDAAgHQAAgGgEgDQgDgEgHAAIgKAAg");
	this.shape_37.setTransform(34.375,139.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgeA1IAAhpIA8AAIAAAXIggAAIAAASIAfAAIAAAWIgfAAIAAATIAgAAIAAAXg");
	this.shape_38.setTransform(131.6,123.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNA1IAAhpIAbAAIAABpg");
	this.shape_39.setTransform(125.25,123.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAOA1IgjguIAAAuIgcAAIAAhpIAcAAIAAAsIAhgsIAiAAIgrAyIAvA3g");
	this.shape_40.setTransform(117.95,123.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNA1IAAhSIgWAAIAAgXIBIAAIAAAXIgXAAIAABSg");
	this.shape_41.setTransform(108.4,123.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgWA0QgIgDgIgFIALgXQAMALANAAQAGAAAEgEQACgCAAgEQAAgEgDgDQgCgCgKgDIgIgDQgKgDgFgEQgGgHAAgMQAAgQAKgKQAKgKAQAAQARAAAQAJIgLAVQgJgHgJAAQgGAAgCADQgDADAAADQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAGACIAIACQAOAEAFAHQAHAGAAAMQAAARgKAKQgLALgTAAQgMAAgJgEg");
	this.shape_42.setTransform(100.425,123.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOA1IAAgzIgmg2IAhAAIATAdIATgdIAiAAIgoA2IAAAzg");
	this.shape_43.setTransform(91.075,123.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgvA1IAxhSIgpAAIAAgXIBYAAIgyBSIAsAAIAAAXg");
	this.shape_44.setTransform(81.25,123.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgWA0QgIgDgIgFIALgXQAMALANAAQAGAAAEgEQACgCAAgEQAAgEgDgDQgCgCgKgDIgIgDQgKgDgFgEQgGgHAAgMQAAgQAKgKQAKgKAQAAQARAAAQAJIgLAVQgJgHgJAAQgGAAgCADQgDADAAADQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQADADAGACIAIACQAOAEAFAHQAHAGAAAMQAAARgKAKQgLALgTAAQgMAAgJgEg");
	this.shape_45.setTransform(71.975,123.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AATA1IgTg9IgUA9IgcAAIgghpIAdAAIASBEIAXhEIAVAAIAVBEIAUhEIAdAAIgiBpg");
	this.shape_46.setTransform(59.625,123.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAOAAIAAAPg");
	this.shape_47.setTransform(212.2,519.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgLAmQgDgBgCgCQgDgCgBgEQgDgEAAgGQAAgHACgEQABgGADgCQADgDAEgCQAFgBAGAAIABAAIACAAIACAAIACAAIAAgIQAAgEgBgCQgCgCgEgBQgCAAgDACQgCADgBADIgPAAQAAgKAHgHQADgDAEgBQAFgCAEAAQAEAAAFACQAEABADADQADADACAFQACAEAAAGIAAA0IgQAAIAAgIQgDAFgDACQgCACgGAAgAgEAHQgDACAAAHQAAAEACACQACAEADAAQAEAAACgDQACgCAAgFIAAgLIgEAAQgEAAgEACg");
	this.shape_48.setTransform(207.4,516.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAKA2IgNghIgHALIAAAWIgQAAIAAhqIAQAAIAAA/IAAAAIASghIAPAAIgSAfIAWAtg");
	this.shape_49.setTransform(201.65,515.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAIAnIAAg0QAAgEgCgDQgCgCgEAAQgDAAgCACQgCAEAAAFIAAAyIgPAAIAAhMIAPAAIAAAIIABAAQACgEADgCQADgCAFgBIAGABQADACACACQACACABADQACAEAAAFIAAA6g");
	this.shape_50.setTransform(194.925,516.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgJIAAgYIABgIQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAIIAAAYIgBAJQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgVQgDADAAAEIAAAdQAAAEADACQACACACAAQADAAADgCQABgCAAgEIAAgdQAAgEgBgDQgDgCgDAAQgCAAgCACg");
	this.shape_51.setTransform(188.675,516.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgRAnIAAhMIAPAAIAAAJQAEgEAFgDQAEgCAHgBIAAARIgFgBIgFABIgFACIgDAGQgCACAAAGIAAAsg");
	this.shape_52.setTransform(183.625,516.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgTAuIgCgFIgBgKIAAgeIAAgKQABgJAHgDQACgCAGAAQAFAAACACQAEACACAEIABAAIAAgmIAPAAIAABqIgPAAIAAgHIgDADIgDADIgDABIgFABQgKAAgDgIgAgFgFQgCADAAACIAAAcQAAAFACACQACADADAAQADAAACgCQADgDAAgEIAAgdQAAgDgDgDQgCgCgDAAQgDABgCACg");
	this.shape_53.setTransform(177.775,515.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgJIAAgYIABgIQAAgEACgDQADgFAFgDQAFgDAGAAQAFAAAFACQAEACADADQAGAGAAALIAAAUIgeAAIAAAKQAAADADACQACACACAAQAEAAACgCIABgFIAQAAQAAAKgGAGQgDADgFACQgEACgFAAQgGAAgFgDgAgEgVQgDADAAAEIAAAJIAOAAIAAgJQAAgEgBgDQgDgCgDAAQgCAAgCACg");
	this.shape_54.setTransform(171.525,516.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgGglIAAgPIANAAIAAAPg");
	this.shape_55.setTransform(166.85,515.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYA2IAAhqIAXAAQAGAAAFACQAFACAEAEQADADACAGIABAKIAAADIgBAIIgCAFQgCAEgGADQAGACACAFQADAFAAAJIAAAFQAAAPgHAHQgHAIgOAAgAgIAmIAGAAIAHgBIAEgEIABgFIABgIIgBgHIgCgFIgEgDIgGgBIgGAAgAgIgIIAHAAQAGgBADgEQADgDAAgHQAAgIgDgDQgDgEgHAAIgGAAg");
	this.shape_56.setTransform(161.725,515.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgLAmQgDgBgCgCQgDgCgCgEQgCgEAAgGQABgHABgEQABgGADgCQADgDAEgCQAFgBAGAAIACAAIABAAIACAAIACAAIAAgIQAAgEgCgCQgBgCgEgBQgCAAgDACQgDADAAADIgPAAQABgKAGgHQADgDAEgBQAFgCAEAAQAEAAAFACQAEABADADQADADACAFQABAEAAAGIAAA0IgPAAIAAgIQgDAFgDACQgCACgGAAgAgEAHQgDACAAAHQAAAEACACQACAEADAAQAEAAACgDQACgCAAgFIAAgLIgEAAQgEAAgEACg");
	this.shape_57.setTransform(151.85,516.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgLA3QAFAAADgDIABgFIABgHIAAhNIANAAIAABTQAAAMgGAFQgHAGgKAAgAgBg0IAAgQIANAAIAAAQg");
	this.shape_58.setTransform(146.75,516.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgJIAAgYIABgIQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAIIAAAYIgBAJQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgVQgDADAAAEIAAAdQAAAEADACQACACACAAQADAAADgCQABgCAAgEIAAgdQAAgEgBgDQgDgCgDAAQgCAAgCACg");
	this.shape_59.setTransform(142.525,516.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AATA2IAAhBIAAAAIgPAtIgGAAIgQgtIAAAAIAABBIgQAAIAAhqIAQAAIASA4IAAAAIAUg4IAPAAIAABqg");
	this.shape_60.setTransform(135.05,515.35);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKA0QgFgEAAgGIABgHIADgFIAEgEIAFgEQgGAAgEgDQgFgDgCgEQgCgDAAgEIgBgIIAAgZIABgIQAAgEACgDQADgFAFgDQAFgDAGAAQAFAAAFACQAEABADAEQAGAGAAALIAAAVIgeAAIAAAJQAAADADACQACACACAAQAEAAACgCIABgFIAQAAQAAAKgGAGQgFAFgHABQgEAEgBAFQgDAFAAAFQAAADACACQACACADAAIAEAAIAEgBIACAFIgGACIgIABQgGAAgEgDgAgEglQgDACAAAFIAAAJIAOAAIAAgJQAAgFgBgCQgDgCgDAAQgCAAgCACg");
	this.shape_61.setTransform(124.275,518.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAKAyQgFAAgEgCIgEgEIgDgGIgBgGIAAguIgIAAIAAgMIAIAAIAAgWIAOAAIAAAWIAJAAIAAAMIgJAAIAAApIAAAFIACACIADABIAEAAIAAAPg");
	this.shape_62.setTransform(119.375,515.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgRAnIAAhMIAPAAIAAAJQAEgEAFgDQAEgCAHgBIAAARIgFgBIgFABIgFACIgDAGQgCACAAAGIAAAsg");
	this.shape_63.setTransform(115.625,516.85);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgLAmQgDgBgCgCQgDgCgCgEQgBgEAAgGQgBgHACgEQABgGACgCQADgDAFgCQAFgBAGAAIACAAIABAAIACAAIACAAIAAgIQAAgEgCgCQgBgCgEgBQgCAAgDACQgDADAAADIgPAAQABgKAGgHQADgDAEgBQAEgCAFAAQAEAAAFACQAEABADADQADADACAFQACAEgBAGIAAA0IgPAAIAAgIQgDAFgDACQgCACgGAAgAgDAHQgEACAAAHQAAAEACACQACAEADAAQAEAAACgDQACgCAAgFIAAgLIgEAAQgEAAgDACg");
	this.shape_64.setTransform(109.8,516.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAKA2IgNghIgIALIAAAWIgOAAIAAhqIAOAAIAAA/IABAAIARghIAPAAIgSAfIAXAtg");
	this.shape_65.setTransform(104.05,515.35);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgLAmQgDgBgCgCQgDgCgCgEQgBgEAAgGQgBgHACgEQABgGACgCQADgDAFgCQAFgBAGAAIACAAIABAAIACAAIACAAIAAgIQAAgEgCgCQgBgCgEgBQgCAAgDACQgDADAAADIgPAAQABgKAGgHQADgDAEgBQAEgCAFAAQAEAAAFACQAEABADADQADADACAFQACAEgBAGIAAA0IgPAAIAAgIQgDAFgDACQgCACgGAAgAgEAHQgDACAAAHQAAAEACACQACAEADAAQAEAAACgDQACgCAAgFIAAgLIgEAAQgEAAgEACg");
	this.shape_66.setTransform(94.05,516.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAIAnIAAg0QAAgEgCgDQgCgCgEAAQgDAAgCACQgCAEAAAFIAAAyIgPAAIAAhMIAPAAIAAAIIABAAQACgEADgCQADgCAFgBIAGABQADACACACQACACABADQACAEAAAFIAAA6g");
	this.shape_67.setTransform(87.925,516.85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7E601").s().p("AgBApIAAg+IgRAAIAJgTIAcAAIAABRg");
	this.shape_68.setTransform(290.15,21.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F7E601").s().p("AgWAfQgIgLAAgUQAAgTAIgMQAJgKANgBQAOABAJAKQAIAMAAAUQAAAUgJAKQgHAMgPAAQgNAAgJgMgAgHgSQgCAFAAANQgBAaAKAAQALAAAAgaQAAgZgLAAQgFAAgCAHg");
	this.shape_69.setTransform(283.7,22);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7E601").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQAEADAAAEQAAAFgEADQgEADgEAAQgEAAgDgDg");
	this.shape_70.setTransform(278.35,25.125);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F7E601").s().p("AgWAfQgIgLAAgUQAAgTAIgMQAJgKANgBQAOABAJAKQAIAMAAAUQAAAUgJAKQgHAMgPAAQgNAAgJgMgAgHgSQgCAFAAANQAAAaAJAAQALAAAAgaQAAgZgLAAQgEAAgDAHg");
	this.shape_71.setTransform(273,22);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F7E601").s().p("AgfApIAkgqQAHgIgBgGQAAgEgCgDQgDgCgFAAQgJAAgBANIAAABIgTAAIAAAAQAAgOAJgJQAHgHANgBQAPAAAIAIQAIAHAAALQAAAMgMALIgOAQIAZAAIAAARg");
	this.shape_72.setTransform(265.65,21.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F7E601").s().p("AgSAJIAAgRIAlAAIAAARg");
	this.shape_73.setTransform(259.675,23.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F7E601").s().p("AgBApIAAg+IgRAAIAJgTIAcAAIAABRg");
	this.shape_74.setTransform(252.8,21.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F7E601").s().p("AgWAfQgIgLAAgUQAAgTAIgMQAJgKANgBQAOABAJAKQAIAMAAAUQAAAUgJAKQgHAMgPAAQgNAAgJgMgAgHgSQgCAFAAANQgBAaAKAAQALAAAAgaQAAgZgLAAQgEAAgDAHg");
	this.shape_75.setTransform(246.35,22);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F7E601").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQAEADAAAEQAAAFgEADQgEADgEAAQgEAAgDgDg");
	this.shape_76.setTransform(241,25.125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F7E601").s().p("AgXAkQgHgGgBgMQAAgJAFgGQAFgEAHgBQgNgEAAgNQAAgLAHgFQAIgHAMAAQANAAAHAHQAIAFAAALQAAANgOAEQAJABAEAEQAFAGgBAJQABAMgJAGQgIAHgPAAQgOAAgJgHgAgHAIQgDACAAAGQAAAEADAEQADACAEAAQAFAAADgCQADgEAAgEQAAgGgDgCQgDgDgFgBQgEABgDADgAgGgZQgDACAAAFQAAAEADADQADACADAAQAFAAACgCQACgDABgEQAAgKgKAAQgDAAgDADg");
	this.shape_77.setTransform(235.65,22);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F7E601").s().p("AgBApIAAg+IgRAAIAKgTIAbAAIAABRg");
	this.shape_78.setTransform(227.8,21.975);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F7E601").s().p("AgKApIAAglIgdgsIAaAAIALAVIACAHIADgHIALgVIAaAAIgdAsIAAAlg");
	this.shape_79.setTransform(217.9,21.95);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F7E601").s().p("AgKApIAAg+IgSAAIAAgTIA5AAIAAATIgSAAIAAA+g");
	this.shape_80.setTransform(211.35,21.95);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F7E601").s().p("AgbAhQgQgNAAgUQAAgRANgNQANgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgPAAgMgKgAgOgQQgHAHAAAJQAAALAGAGQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_81.setTransform(203.275,21.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F7E601").s().p("AgfApIAAhRIAYAAQARAAAHACQALAGAAAMQAAAIgDADQgEAEgIADQAJABAFAEQAFAGAAAIQAAAOgLAGQgFACgIACIgQAAgAgLAYIAIAAQAHAAADgBQAEgDAAgFQAAgFgEgCQgDgBgHgBIgIAAgAgLgIIAFAAQAGAAAEgBQADgBAAgFQAAgGgEgCIgJgBIgFAAg");
	this.shape_82.setTransform(194.725,21.95);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F7E601").s().p("AgbAhQgQgNAAgUQAAgRANgNQANgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgPAAgMgKgAgOgQQgHAHAAAJQAAALAGAGQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_83.setTransform(185.725,21.95);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F7E601").s().p("AgdAfIAKgRQAKAMAJgBQAEAAADgBQACgDAAgEQAAgFgDgCQgDgCgGgCQgMgDgFgEQgFgFAAgJQAAgMAHgIQAIgHAMAAQAOAAAKAHIgHAQQgHgGgIgBQgEABgCACQgDACAAACQAAAFAEACQABABAIABQALAEAFAFQAGAFAAAKQAAANgIAIQgJAIgNAAQgRAAgMgMg");
	this.shape_84.setTransform(177.425,21.95);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F7E601").s().p("AgbAhQgQgNAAgUQAAgRANgNQANgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgPAAgMgKgAgOgQQgHAHAAAJQAAALAGAGQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_85.setTransform(165.725,21.95);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F7E601").s().p("AgkApIAAhRIAUAAIAUABQAKACAHAFQAQALAAAVQAAAWgQALQgHAFgJACIgSABgAgOAXIADAAQAMgBAHgFQAGgFAAgMQAAgLgGgGQgHgFgMAAIgDAAg");
	this.shape_86.setTransform(156.6,21.95);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgKA9QAEgQACgQQABgQAAgQQAAgPgCgOQgCgOgDgOIAFAAIAGAOIAGAQIADAQIACAOIgCAQIgDAQQgFARgHAMg");
	this.shape_87.setTransform(271.15,501.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAWAnIAAg0QABgFgCgCQgCgCgEAAQgEAAgCACQgBAEAAAEIAAAzIgOAAIAAg0QAAgFgCgCQgCgCgFAAQgEAAgCACQgBAEAAAEIAAAzIgPAAIAAhMIAPAAIAAAIIAAAAQADgEADgCQAEgDAFAAQAFAAACADIAFAFIAHgFQADgDAGAAIAGABQADABACADQADACACADQABAEAAAFIAAA6g");
	this.shape_88.setTransform(264.8,501.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgIIAAgYIABgJQAAgEACgDQADgFAFgDQAFgDAGAAQAFAAAFACQAEACADADQAGAHAAAKIAAAUIgeAAIAAAKQAAADADADQACACACAAQAEgBACgCIABgFIAQAAQAAAKgGAGQgDADgFACQgEACgFAAQgGAAgFgDgAgEgUQgDACAAAEIAAAJIAOAAIAAgJQAAgEgBgCQgDgCgDAAQgCAAgCACg");
	this.shape_89.setTransform(257.075,501.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAKAyQgFgBgEgBIgEgFIgDgFIgBgGIAAgtIgIAAIAAgNIAIAAIAAgWIAOAAIAAAWIAJAAIAAANIgJAAIAAAoIAAAFIACACIADABIAEAAIAAAPg");
	this.shape_90.setTransform(252.225,500.75);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgLAmQgDAAgDgDQgCgCgCgEQgBgEAAgHQgBgGACgEQABgFACgDQAEgDAEgBQAEgCAHAAIACAAIABAAIACAAIACAAIAAgHQAAgEgCgDQgBgCgFAAQgBAAgDACQgDACAAADIgPAAQABgKAGgGQADgEAEgBQAEgCAEAAQAGAAADACQAFABADADQADADACAEQABAFAAAGIAAA0IgPAAIAAgIQgDAEgDACQgCADgGAAgAgDAHQgEADAAAGQAAAEACADQACADADAAQAEgBACgCQACgDAAgEIAAgKIgEgBQgEAAgDACg");
	this.shape_91.setTransform(247.4,501.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgBAzIgGgFIAAAHIgPAAIAAhqIAPAAIAAAmIABAAQACgEAEgCQACgCAFAAQAFAAADACIAFAFIACAGIABAMIAAAdIgBAKIgCAGQgEAHgJAAQgGAAgCgDgAgEgFQgDACAAADIAAAdQAAAFACACQADACACABQAEAAACgEQACgCAAgFIAAgbQAAgDgCgDQgCgCgEAAQgCAAgCACg");
	this.shape_92.setTransform(241.325,500.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgLAmQgDAAgDgDQgCgCgBgEQgCgEAAgHQAAgGABgEQABgFACgDQADgDAFgBQAFgCAGAAIABAAIACAAIACAAIACAAIAAgHQAAgEgBgDQgCgCgFAAQgCAAgCACQgCACgBADIgPAAQAAgKAHgGQADgEAEgBQAFgCADAAQAGAAADACQAFABADADQADADACAEQABAFABAGIAAA0IgQAAIAAgIQgDAEgDACQgCADgGAAgAgDAHQgEADAAAGQAAAEACADQACADADAAQAEgBACgCQACgDAAgEIAAgKIgEgBQgEAAgDACg");
	this.shape_93.setTransform(235.05,501.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgRAnIAAhMIAPAAIAAAIQAEgEAFgCQAEgDAHAAIAAARIgFgBIgFAAIgFADIgDAGQgCADAAAFIAAAsg");
	this.shape_94.setTransform(230.125,501.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgUAmIAAgMIAYgyIgWAAIAAgNIAnAAIAAAMIgYAxIAYAAIAAAOg");
	this.shape_95.setTransform(221.6,501.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgHA1QgEgBgDgDQgDgDgCgEQgDgEAAgHIAAgIIAQAAIAAAIQAAADACADQACACACAAQAEAAACgCQACgDAAgEIAAgPQAAgGgDgCIgDgCIgGAAIAAgNQAGAAADgBQADgCAAgGIAAgOQAAgDgCgCQgCgCgEAAQgDAAgCACIgBAFIAAAJIgQAAIAAgJQAAgEACgFQACgEADgDIAHgFIAIgBQAHAAAEACQAEACACADIADAEIACAEIABAPIAAAJIgBAFIgDAEIgGAEIAGADIADAFIABAGIAAAJIAAAJIgBAGIgBAEIgCADQgDAFgEACQgFADgHAAIgHgBg");
	this.shape_96.setTransform(212.725,500.375);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_97.setTransform(204.85,504.925);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgOAhQgEgDgCgEQgCgFAAgFIAPAAIACAGQACACADABQADAAADgCQADgDAAgEQAAgDgCgCQgCgCgEgCIgGgDQgIgDgEgDQgEgGAAgIQAAgFACgEQACgEADgDQADgDAEgBQAEgCAEAAQAEAAAEACIAHAFIAFAGQABAEAAAFIgOAAQAAgDgDgCQgCgCgDgBQgDAAgCADQgBACAAADIABAEQABACAEACIAIAEQAJADADAFQADAFAAAHQAAAFgCAEQgBAEgDADQgDADgFACQgEACgFAAQgIAAgGgGg");
	this.shape_98.setTransform(200.325,501.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAKA2IgNgiIgHAMIAAAWIgPAAIAAhrIAPAAIAAA/IAAAAIASggIAOAAIgSAfIAXAtg");
	this.shape_99.setTransform(194.7,500.35);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgLAmQgDAAgCgDQgDgCgBgEQgDgEAAgHQAAgGACgEQABgFADgDQADgDAEgBQAFgCAGAAIABAAIACAAIACAAIACAAIAAgHQAAgEgBgDQgCgCgEAAQgCAAgDACQgCACgBADIgPAAQAAgKAHgGQADgEAEgBQAFgCAEAAQAEAAAEACQAFABADADQADADACAEQACAFAAAGIAAA0IgQAAIAAgIQgDAEgDACQgCADgGAAgAgEAHQgDADAAAGQAAAEACADQACADADAAQAEgBACgCQACgDAAgEIAAgKIgEgBQgEAAgEACg");
	this.shape_100.setTransform(188.05,501.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAWAnIAAg0QAAgFgBgCQgCgCgEAAQgEAAgCACQgCAEAAAEIAAAzIgNAAIAAg0QAAgFgDgCQgCgCgDAAQgFAAgCACQgBAEAAAEIAAAzIgPAAIAAhMIAPAAIAAAIIAAAAQADgEADgCQADgDAGAAQAEAAADADIAFAFIAHgFQADgDAHAAIAFABQADABACADQADACACADQABAEAAAFIAAA6g");
	this.shape_101.setTransform(180.45,501.85);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAHA9IgHgOQgEgIgCgHIgDgRIgBgPIABgOIADgRQAFgQAIgNIAEAAQgEAPgBARQgCAQAAARQAAAPACAOQACAOADANg");
	this.shape_102.setTransform(174.1,501.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAJAmIgJgsIAAAAIgIAsIgNAAIgShLIAQAAIAJAuIABAAIAIguIALAAIAIAuIABAAIAJguIAQAAIgSBLg");
	this.shape_103.setTransform(164.475,501.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgLAzQgFgDgDgFQgCgDAAgEIgBgIIAAgZIABgIQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAIIAAAZIgBAIQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgFQgDACAAADIAAAeQAAAEADADQACACACAAQADAAADgCQABgDAAgEIAAgeQAAgDgBgCQgDgCgDAAQgCAAgCACgAgJggIANgVIAQAAIgUAVg");
	this.shape_104.setTransform(157.175,500.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAKAyQgFgBgEgBIgEgFIgDgFIgBgGIAAgtIgIAAIAAgNIAIAAIAAgWIAOAAIAAAWIAJAAIAAANIgJAAIAAAoIAAAFIACACIADABIAEAAIAAAPg");
	this.shape_105.setTransform(152.325,500.75);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAKA2IgNgiIgIAMIAAAWIgPAAIAAhrIAPAAIAAA/IABAAIARggIAQAAIgSAfIAVAtg");
	this.shape_106.setTransform(147.85,500.35);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgMAmQgDgCgCgCQgCgCgCgDIgBgJIAAg6IAPAAIAAA0QAAAEACACQACADADAAQAEAAACgDQACgDAAgFIAAgyIAPAAIAABMIgPAAIAAgIIgBAAQgCAEgEACQgCACgFABIgGgBg");
	this.shape_107.setTransform(141.175,501.95);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgTAvIgCgGIgBgKIAAgdIAAgMQABgHAHgEQACgCAGAAQAFAAACACQAEACACAEIABAAIAAgmIAPAAIAABqIgPAAIAAgHIgDADIgDACIgDACIgFABQgKAAgDgHgAgFgFQgCADAAADIAAAbQAAAFACACQACAEADAAQADgBACgCQADgCAAgFIAAgdQAAgDgDgCQgCgCgDAAQgDAAgCACg");
	this.shape_108.setTransform(134.875,500.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgIIAAgYIABgJQAAgEACgDQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQACADAAAEIABAJIAAAYIgBAIQAAAEgCADQgDAFgFADQgFADgHAAQgGAAgFgDgAgEgUQgDACAAAEIAAAdQAAAEADADQACACACAAQADAAADgCQABgDAAgEIAAgdQAAgEgBgCQgDgCgDAAQgCAAgCACg");
	this.shape_109.setTransform(128.675,501.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgRAnIAAhMIAPAAIAAAIQAEgEAFgCQAEgDAHAAIAAARIgFgBIgFAAIgFADIgDAGQgCADAAAFIAAAsg");
	this.shape_110.setTransform(123.675,501.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgWA2IAAhqIAPAAIAAAHIAGgGQACgCAGAAQAJAAAEAIIACAFIABAKIAAAeIgBALQgBAHgGAEQgDACgFAAQgFAAgCgCQgEgCgCgEIgBAAIAAAmgAgFgjQgCADAAAEIAAAdQAAADADADQACACACAAQAEgBACgCQACgDAAgDIAAgbQAAgFgCgDQgCgCgEAAQgCAAgDACg");
	this.shape_111.setTransform(117.875,503.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgKAzQgFgDgDgFIgCgDIgBgEIAAgFIgBgJIABgIIAAgGIABgEIABgEIATg1IARAAIgRAtIAAABIADgCIAEAAQAEAAADACQAEACACADIABACIABAFIABAHIAAAKIAAAJIgBAFIgBAEIgCADQgDAFgEADQgGADgGAAQgFAAgFgDgAgEAFQgCACAAAEIAAAUQAAADACADQACACACAAQADAAACgCQADgDAAgDIAAgUQAAgEgDgCQgCgBgDAAQgCAAgCABg");
	this.shape_112.setTransform(108.425,500.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgWAHIAAgOIAtAAIAAAOg");
	this.shape_113.setTransform(99.025,501.55);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgUA1IAAgOIAEAAIADgBIAEgDIACgFIACgLIgUhIIAQAAIAJAwIABAAIAKgwIAQAAIgXBYQAAAGgDADQgBAEgDACIgGACIgGABg");
	this.shape_114.setTransform(89.75,503.45);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAIAnIAAg0QAAgFgCgCQgCgCgEAAQgDAAgCACQgCAEAAAEIAAAzIgPAAIAAhMIAPAAIAAAIIABAAQACgEADgCQADgDAFAAIAGABQADABACADQACACABADQACAEAAAFIAAA6g");
	this.shape_115.setTransform(83.725,501.85);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAIAnIAAg0QAAgFgCgCQgCgCgEAAQgDAAgCACQgCAEAAAEIAAAzIgPAAIAAhMIAPAAIAAAIIABAAQACgEADgCQADgDAFAAIAGABQADABACADQACACABADQACAEAAAFIAAA6g");
	this.shape_116.setTransform(77.425,501.85);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgLAkQgFgDgDgFQgCgDAAgEIgBgIIAAgYIABgJQAAgEACgDQADgFAFgDQAFgDAGAAQAFAAAFACQAEACADADQAGAHAAAKIAAAUIgeAAIAAAKQAAADADADQACACACAAQAEgBACgCIABgFIAQAAQAAAKgGAGQgDADgFACQgEACgFAAQgGAAgFgDgAgEgUQgDACAAAEIAAAJIAOAAIAAgJQAAgEgBgCQgDgCgDAAQgCAAgCACg");
	this.shape_117.setTransform(71.225,501.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgGA2IAAhMIANAAIAABMgAgGglIAAgQIANAAIAAAQg");
	this.shape_118.setTransform(66.6,500.35);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgUAmIAAgMIAYgyIgWAAIAAgNIAnAAIAAAMIgXAxIAXAAIAAAOg");
	this.shape_119.setTransform(62.35,501.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgTAvIgCgGIgBgKIAAgdIAAgMQABgHAHgEQACgCAGAAQAFAAACACQAEACACAEIABAAIAAgmIAPAAIAABqIgPAAIAAgHIgDADIgDACIgDACIgFABQgKAAgDgHgAgFgFQgCADAAADIAAAbQAAAFACACQACAEADAAQADgBACgCQADgCAAgFIAAgdQAAgDgDgCQgCgCgDAAQgDAAgCACg");
	this.shape_120.setTransform(56.625,500.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAKAyQgFgBgEgBIgEgFIgDgFIgBgGIAAgtIgIAAIAAgNIAIAAIAAgWIAOAAIAAAWIAJAAIAAANIgJAAIAAAoIAAAFIACACIADABIAEAAIAAAPg");
	this.shape_121.setTransform(48.375,500.75);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgHA2IAAhMIAPAAIAABMgAgHglIAAgQIAPAAIAAAQg");
	this.shape_122.setTransform(45.05,500.35);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAXAnIAAg0QAAgFgCgCQgCgCgEAAQgEAAgCACQgCAEABAEIAAAzIgPAAIAAg0QAAgFgCgCQgBgCgFAAQgDAAgCACQgCAEAAAEIAAAzIgPAAIAAhMIAPAAIAAAIIABAAQACgEADgCQADgDAGAAQAEAAADADIAGAFIAGgFQADgDAGAAIAGABQADABADADQACACABADQACAEAAAFIAAA6g");
	this.shape_123.setTransform(38.75,501.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgHA2IAAhMIAPAAIAABMgAgHglIAAgQIAPAAIAAAQg");
	this.shape_124.setTransform(32.45,500.35);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgWA2IAAhrIAQAAIAABbIAdAAIAAAQg");
	this.shape_125.setTransform(28,500.35);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F7E601").s().p("AgcAgQgFgFgCgIIgBgRIAAgrIAWAAIAAAsQABALADAEQACAGAIAAQAJgBADgGQACgFAAgOIAAgnIAWAAIAAAvQAAATgIAJQgJAIgTAAQgUAAgIgKg");
	this.shape_126.setTransform(261.05,11.05);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F7E601").s().p("AAKApIgZglIAAAlIgWAAIAAhRIAWAAIAAAlIAZglIAaAAIgfAoIAhApg");
	this.shape_127.setTransform(252.975,10.95);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F7E601").s().p("AgKApIAAg+IgSAAIAAgTIA5AAIAAATIgSAAIAAA+g");
	this.shape_128.setTransform(245.1,10.95);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F7E601").s().p("AAHApIgSggIAAAgIgVAAIAAhRIAZAAIAOABQAIABAEADQAKAHAAANQAAATgTAEIAWAhgAgLgBIAFAAQAMAAAAgKQAAgHgDgCQgDgDgGAAIgFAAg");
	this.shape_129.setTransform(238.7,10.95);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F7E601").s().p("AAUApIgEgPIgfAAIgEAPIgWAAIAchRIAbAAIAcBRgAAMAKIgJgaIgDgLIgCALIgIAaIAWAAg");
	this.shape_130.setTransform(230.4,10.95);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F7E601").s().p("AANApIgKgjIgDgKIgCAKIgKAjIgVAAIgXhRIAXAAIAJAnIADALIADgLIAKgnIARAAIAKAnIADAJIAAACIADgLIAJgnIAXAAIgXBRg");
	this.shape_131.setTransform(220.675,10.95);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F7E601").s().p("AgmApIApg/IggAAIAAgSIBEAAIgpA/IAkAAIAAASg");
	this.shape_132.setTransform(211.225,10.95);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F7E601").s().p("AgTAfQgLgNAAgSQAAgSALgMQAMgMARAAQAKAAAMAFIAAAZQgJgKgKAAQgKAAgGAGQgFAHgBAJQABAKAFAHQAGAHAKAAQAKgBAJgJIAAAYQgMAFgKAAQgRAAgMgMg");
	this.shape_133.setTransform(203.85,10.95);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F7E601").s().p("AgkApIAAhRIATAAIAVABQAJABAIAFQAQAMAAAVQAAAWgQAMQgHAEgJACIgSABgAgOAXIAEAAQALAAAHgGQAGgFAAgMQAAgLgGgGQgHgFgLAAIgEAAg");
	this.shape_134.setTransform(192.4,10.95);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F7E601").s().p("AgbAiQgQgOAAgUQAAgRANgMQANgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgPAAgMgJgAgOgQQgHAHAAAJQAAAKAGAHQAGAHAJAAQAJAAAGgHQAHgHAAgKQAAgJgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_135.setTransform(182.925,10.95);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_136.setTransform(264.85,588.825);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_137.setTransform(262.075,589.625);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_138.setTransform(257.925,589.625);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgNAQQgGgFABgLQAAgLAGgFQAFgFAHAAQAJAAAFAGQAFAGAAAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_139.setTransform(253.75,589.625);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_140.setTransform(249.375,589.575);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQACgFADgCQAFgDAEAAQADAAADABQADACACADIAAgVIAHAAIAAA4IgGAAIAAgFQgFAGgHAAQgEAAgEgDgAgGgEQgEAEAAAIQAAAIAEADQADAEAEAAQAEAAADgDQAEgEAAgIQAAgIgEgDQgDgEgEAAQgEAAgDADg");
	this.shape_141.setTransform(244.8,588.875);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQADAEAEAAQAFAAACgCQADgCACgFIAHABQgCAHgEADQgFAEgIAAQgHAAgFgGgAAMgDQgBgFgCgDQgDgEgGAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_142.setTransform(240.55,589.625);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgVAZIgFAFIAJAAIATAAIAAAGg");
	this.shape_143.setTransform(236.35,589.625);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_144.setTransform(232.475,589.625);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgWAZIgEAFIAJAAIATAAIAAAGg");
	this.shape_145.setTransform(228.35,589.625);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_146.setTransform(224.325,589.625);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_147.setTransform(220.15,589.625);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_148.setTransform(216.625,589.625);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAEAAQAFAAACgCQADgCACgFIAHABQgCAHgEADQgFAEgIAAQgHAAgFgGgAAMgDQgBgFgCgDQgDgEgGAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_149.setTransform(213.1,589.625);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgHAAIgOgpIAIAAIAHAXIACAJIACgIIAHgYIAGAAIAHAXIACAIIABgIIAIgXIAHAAIgOApg");
	this.shape_150.setTransform(208,589.625);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_151.setTransform(202.95,589.625);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAJAdIgNgVIgFAEIAAARIgHAAIAAg5IAHAAIAAAgIAPgQIAJAAIgPAPIARAag");
	this.shape_152.setTransform(199,588.825);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_153.setTransform(194.575,589.575);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_154.setTransform(190.15,589.625);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_155.setTransform(186.925,589.575);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQACgFADgCQAFgDAEAAQAEAAADABQACACACADIAAgVIAHAAIAAA4IgGAAIAAgFQgFAGgHAAQgEAAgEgDgAgHgEQgDAEAAAIQABAIADADQADAEAEAAQAEAAADgDQAEgEAAgIQAAgIgEgDQgDgEgFAAQgDAAgEADg");
	this.shape_156.setTransform(182.95,588.875);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAAMgDQAAgFgDgDQgEgEgFAAQgEAAgDADQgDAEAAAFIAWAAIAAAAg");
	this.shape_157.setTransform(178.7,589.625);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_158.setTransform(175.65,588.825);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgKAXIAAAFIgHAAIAAg4IAIAAIAAAUQADgFAHAAQADAAAEABQADACACADIAEAGIABAIQAAALgFAFQgGAGgGAAQgHAAgEgGgAgHgDQgDADAAAHQAAAIACADQADAFAFAAQAEAAAEgEQADgEAAgIQAAgHgDgEQgDgDgFAAQgDAAgEAEg");
	this.shape_159.setTransform(172.65,588.875);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgKAeIAQg6IAFAAIgQA6g");
	this.shape_160.setTransform(169.25,588.85);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgDAdIAAg5IAGAAIAAA5g");
	this.shape_161.setTransform(167.25,588.825);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAGAAAEADQADACACAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_162.setTransform(164.35,590.375);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_163.setTransform(160.95,591.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_164.setTransform(157.6,589.625);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAJAdIgNgVIgFAEIAAARIgHAAIAAg5IAHAAIAAAgIAPgQIAJAAIgPAPIARAag");
	this.shape_165.setTransform(153.65,588.825);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_166.setTransform(149.225,589.575);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgCAFgFACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgEAEg");
	this.shape_167.setTransform(144.8,589.625);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_168.setTransform(141.575,589.575);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQACgFADgCQAEgDAFAAQADAAADABQADACACADIAAgVIAHAAIAAA4IgGAAIAAgFQgFAGgHAAQgEAAgEgDgAgGgEQgEAEAAAIQABAIADADQADAEAEAAQAEAAADgDQAEgEAAgIQAAgIgEgDQgDgEgFAAQgDAAgDADg");
	this.shape_169.setTransform(137.6,588.875);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEADAAQAFAAADgCQACgCABgFIAIABQgCAHgEADQgFAEgIAAQgHAAgFgGgAAMgDQAAgFgDgDQgEgEgFAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_170.setTransform(133.35,589.625);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_171.setTransform(130.3,588.825);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgKAXIAAAFIgHAAIAAg4IAIAAIAAAUQADgFAHAAQADAAAEABQAEACABADIAEAGIABAIQAAALgFAFQgGAGgGAAQgHAAgEgGgAgHgDQgEADABAHQAAAIACADQADAFAFAAQAFAAADgEQADgEAAgIQAAgHgDgEQgDgDgFAAQgDAAgEAEg");
	this.shape_172.setTransform(127.3,588.875);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_173.setTransform(123.95,591.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgHAAIgNgpIAHAAIAGAXIADAJIACgIIAHgYIAGAAIAHAXIABAIIACgIIAIgXIAHAAIgOApg");
	this.shape_174.setTransform(119.9,589.625);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgIAAIgMgpIAHAAIAGAXIADAJIACgIIAHgYIAGAAIAHAXIABAIIACgIIAIgXIAGAAIgMApg");
	this.shape_175.setTransform(114.15,589.625);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgIAAIgMgpIAHAAIAGAXIADAJIACgIIAHgYIAGAAIAGAXIACAIIADgIIAHgXIAGAAIgMApg");
	this.shape_176.setTransform(108.4,589.625);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgOASQgEgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQACgDAEgBQAFgCAEAAQAFAAADACQAEABACACIABAFIABAGIAAAIIAAANIACAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgLADg");
	this.shape_177.setTransform(101.15,589.625);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_178.setTransform(96.775,589.575);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgPAcIgBgGIAFAAIAEgBIACgCIACgFIABgCIgQgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgFgBg");
	this.shape_179.setTransform(90.4,590.475);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAAAbIgDgDQgBgCAAgGIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIABAEIABABIACABIADgBIABAHIgFAAIgFgBg");
	this.shape_180.setTransform(87.3,588.925);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_181.setTransform(85.125,589.575);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAAMgDQAAgFgDgDQgEgEgEAAQgEAAgDADQgEAEAAAFIAWAAIAAAAg");
	this.shape_182.setTransform(81.3,589.625);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgFAdIAAgjIgGAAIAAgGIAGAAIAAgEIABgGQABgDADgBQABgCAFAAIAGABIgBAFIgEAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQgCACAAAEIAAADIAIAAIAAAGIgIAAIAAAjg");
	this.shape_183.setTransform(78.175,588.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_184.setTransform(74.7,589.625);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgPAcIgBgGIAFAAIAEgBIACgCIACgFIABgCIgQgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgFgBg");
	this.shape_185.setTransform(68.35,590.475);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgDAdIAAgXIgFAFIAAgHIAFgEIAAgcIAGAAIAAAXIAGgEIAAAGIgGADIAAAdg");
	this.shape_186.setTransform(65.425,588.825);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgNAYQgFgGgBgKQABgLAGgGQAGgEAGAAQAIAAAGAFQAGAGgBAJQAAAIgCAFQgDAEgEADQgEACgGAAQgHAAgGgFgAgIgDQgDADAAAIQAAAHADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgDQgDgEgGAAQgEAAgEAEgAgDgRIAEgLIAJAAIgIALg");
	this.shape_187.setTransform(62.35,588.875);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgLAaQgFgDAAgHIAHABQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQADACAEAAQAEAAADgCQADgCABgEIAAgJQgEAGgHAAQgIAAgEgGQgFgHAAgHQAAgGACgFQACgFAEgDQAEgDAFAAQAHAAAFAGIAAgFIAGAAIAAAjQAAAKgCAEQgCAEgEACQgEADgGAAQgHAAgEgEgAgHgTQgDAEAAAHQAAAIADADQAEAEADAAQAFAAAEgEQADgDAAgHQAAgIgEgEQgDgEgFAAQgDAAgEAEg");
	this.shape_188.setTransform(57.825,590.425);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAJAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAFAAQAEAAACgCQADgCACgFIAHABQgCAHgEADQgFAEgHAAQgJAAgEgGgAAMgDQgBgFgCgDQgDgEgFAAQgFAAgCADQgEAEgBAFIAXAAIAAAAg");
	this.shape_189.setTransform(53.55,589.625);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgWAZIgEAFIAJAAIATAAIAAAGg");
	this.shape_190.setTransform(49.35,589.625);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_191.setTransform(45.475,589.625);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgRAVIAAgGIAZgdIgIAAIgQAAIAAgGIAhAAIAAAFIgWAZIgEAFIAJAAIATAAIAAAGg");
	this.shape_192.setTransform(41.35,589.625);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgKAbQgGgCgCgEQgDgFgBgGIAHgBIADAHQACADAEACQAEABADABIAIgBIAFgEIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQgBgCgEgBIgJgDIgLgDQgEgCgCgDQgCgDAAgEQAAgEACgEQACgEAFgCQAFgBAFAAQAGAAAFABQAFADACAEQADADAAAGIgHAAQgBgGgDgDQgDgCgHAAQgGAAgDACQgDADAAAEQAAACACACQACADAJACIAMADQAFABADAEQACADAAAGQAAAEgDAEQgCAEgFACQgFACgGABQgHAAgFgDg");
	this.shape_193.setTransform(36.675,588.85);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_194.setTransform(230.65,581.85);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAIAVIgGgYIgCgHIgHAfIgHAAIgOgpIAIAAIAHAXIACAJIACgIIAHgYIAGAAIAGAXIADAIIACgIIAHgXIAGAAIgMApg");
	this.shape_195.setTransform(226.6,580.175);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgNAYQgFgGAAgKQAAgLAGgGQAGgEAGAAQAIAAAGAFQAGAGgBAJQAAAIgCAFQgDAEgEADQgFACgFAAQgHAAgGgFgAgIgDQgDADAAAIQAAAHADAEQAEAEAEAAQAFAAAEgEQAEgEAAgIQAAgHgEgDQgEgEgFAAQgEAAgEAEgAgDgRIAEgLIAJAAIgIALg");
	this.shape_196.setTransform(221.55,579.425);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_197.setTransform(217.325,580.175);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQADgCAFAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_198.setTransform(213.15,580.175);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAGAAAEADQADACACAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_199.setTransform(208.9,580.925);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIABANIABAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_200.setTransform(204.35,580.175);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgSAVIAAgGIAagdIgIAAIgQAAIAAgGIAhAAIAAAFIgVAZIgFAFIAJAAIASAAIAAAGg");
	this.shape_201.setTransform(200.15,580.175);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgOASQgEgDAAgFQAAgDABgDQABgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQACgDAEgBQAEgCAFAAQAFAAADACQAEABACACIABAFIABAGIAAAIIAAANIACAFIgHAAQgCgCAAgDIgHAEIgHACQgHAAgDgEgAgBADIgGABIgDACIAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgLADg");
	this.shape_202.setTransform(193.75,580.175);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgCAdIAAgpIAGAAIAAApgAgCgTIAAgJIAGAAIAAAJg");
	this.shape_203.setTransform(190.7,579.375);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_204.setTransform(187.625,580.125);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIAAANIACAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_205.setTransform(183.2,580.175);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAAEADQADACADAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAAEgEQADgEAAgHQAAgIgDgEQgEgEgEAAQgEAAgDAFg");
	this.shape_206.setTransform(178.95,580.925);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_207.setTransform(175.575,580.125);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAAMgDQAAgFgDgDQgEgEgEAAQgEAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_208.setTransform(171.75,580.175);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgSAVIAAgGIAagdIgIAAIgQAAIAAgGIAhAAIAAAFIgVAZIgFAFIAJAAIASAAIAAAGg");
	this.shape_209.setTransform(167.55,580.175);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_210.setTransform(163.675,580.175);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgPAcIgBgGIAEAAIAFgBIACgCIACgFIAAgCIgPgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgFgBg");
	this.shape_211.setTransform(159.6,581.025);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AAJAVIgHgYIgCgHIgHAfIgIAAIgMgpIAHAAIAGAXIADAJIACgIIAHgYIAGAAIAGAXIACAIIACgIIAIgXIAGAAIgMApg");
	this.shape_212.setTransform(154.65,580.175);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_213.setTransform(147.4,580.175);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQABgFAFgCQAEgDAEAAQADAAADABQAEACABADIAAgVIAHAAIAAA4IgHAAIAAgFQgDAGgIAAQgEAAgEgDgAgGgEQgDAEAAAIQAAAIADADQADAEAEAAQAEAAAEgDQADgEAAgIQAAgIgDgDQgEgEgEAAQgEAAgDADg");
	this.shape_214.setTransform(142.85,579.425);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAAMgDQAAgFgDgDQgEgEgFAAQgEAAgDADQgDAEAAAFIAWAAIAAAAg");
	this.shape_215.setTransform(136.4,580.175);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_216.setTransform(132.025,580.125);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AAKAVIAAgYIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgDAAgEADQgDADAAAIIAAAVIgHAAIAAgoIAGAAIAAAGQAFgHAIAAQADAAADABQAEACABACIACAFIABAHIAAAYg");
	this.shape_217.setTransform(127.625,580.125);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAADADQAEACADAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgEAFg");
	this.shape_218.setTransform(123.35,580.925);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AABAdIgCgCIgCgCIAAgDIABgFIACgDIABAAIAFgBIgCADIgCAEIABADQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIADgBIAAAFIgGACIgDgBgAABAOIgBAAIACgBIAEAAIAAAAIgFABgAAAAOQgIAAgEgGQgGgGAAgJQAAgKAGgGQAEgGAJAAQAHAAAGAGQAFAGAAAKIAAACIgeAAQABAGADADQADAEAFAAQAEAAACgCQADgCACgEIAHAAQgCAHgEADQgDACgEABIAAAAIgEAAIgCABgAgGgUQgEAEgBAFIAXAAQgBgFgCgDQgDgEgFAAQgFAAgCADgAAGANIAAAAg");
	this.shape_219.setTransform(118.8,580.975);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIABAEIABABIACABIADgBIABAHIgFAAIgFgBg");
	this.shape_220.setTransform(115.55,579.475);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgLASQgEgDgBgHIAHgBQAAAEADADQADACADAAQAFAAADgCQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgHgDIgKgDQgDgBgCgCQgBgDAAgDIABgFQABgCADgCIAEgCIAGgBQAEAAAEACQADABACADIADAGIgHABQgBgDgCgCQgCgCgEAAQgEAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABADQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIALADQADAAABADQACACAAAEQAAADgCADQgCADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_221.setTransform(112.375,580.175);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_222.setTransform(108.2,580.175);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgDgFQgCgFAAgGQAAgHACgEQADgFADgCQAEgDAFAAQAEAAADABQADACABADIAAgVIAHAAIAAA4IgHAAIAAgFQgEAGgHAAQgEAAgEgDgAgHgEQgCAEAAAIQAAAIADADQADAEAEAAQAEAAADgDQAEgEAAgIQAAgIgEgDQgDgEgFAAQgDAAgEADg");
	this.shape_223.setTransform(103.65,579.425);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgOAcIgCgGIAFAAIADgBIADgCIACgFIABgCIgQgoIAIAAIAIAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgCACgEAAIgEgBg");
	this.shape_224.setTransform(97.45,581.025);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAAAbIgDgDIgBgIIAAgXIgFAAIAAgGIAFAAIAAgKIAGgEIAAAOIAHAAIAAAGIgHAAIAAAXIAAAEIABABIADABIADgBIABAHIgFAAIgFgBg");
	this.shape_225.setTransform(94.35,579.475);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AAJAdIgNgVIgFAEIAAARIgHAAIAAg5IAHAAIAAAgIAPgQIAJAAIgPAPIARAag");
	this.shape_226.setTransform(91.45,579.375);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgJAUIgEgEIgDgFIAAgHIAAgYIAHAAIAAAWIAAAHQABADACACQADABACAAQADAAADgBQADgCAAgDIABgIIAAgVIAIAAIAAAoIgHAAIAAgGQgFAHgGAAQgEAAgEgBg");
	this.shape_227.setTransform(87,580.225);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgIAaQgEgCgCgFQgDgFAAgGQAAgHADgEQABgFAFgCQAEgDAEAAQADAAADABQAEACABADIAAgVIAHAAIAAA4IgGAAIAAgFQgEAGgIAAQgEAAgEgDgAgGgEQgDAEgBAIQAAAIAEADQADAEAEAAQAFAAADgDQADgEAAgIQAAgIgDgDQgEgEgEAAQgEAAgDADg");
	this.shape_228.setTransform(82.45,579.425);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgCAFgFACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_229.setTransform(78.2,580.175);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAGAAIAAAGIAEgGQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEAAADACIgCAHIgFgCIgEACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAEAAAEIAAAVg");
	this.shape_230.setTransform(74.975,580.125);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgDgBIgHgBIgOAAg");
	this.shape_231.setTransform(70.85,579.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Mieszaj_Dowolnie
	this.instance = new lib.Mieszaj_Dowolnie("synched",0);
	this.instance.setTransform(53.6,214.4,0.81,0.81,0,0,0,52.6,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// banner
	this.instance_1 = new lib.ClipGroup_18();
	this.instance_1.setTransform(239,109.8,0.855,0.855,0,0,0,65.5,89.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// TXT_dzien_babci
	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(255.1,442.1,0.4215,0.4215,0,0,0,156.8,39.5);

	this.instance_3 = new lib.ClipGroup_1_1();
	this.instance_3.setTransform(255.1,442.1,0.4215,0.4215,0,0,0,156.8,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// flowers
	this.instance_4 = new lib.flowers();
	this.instance_4.setTransform(217,460);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// green
	this.instance_5 = new lib.ClipGroup_17();
	this.instance_5.setTransform(256.8,451.8,0.3232,0.3232,0,0,180,211,92.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// PACK
	this.instance_6 = new lib.PACK_3();
	this.instance_6.setTransform(3,199);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// BIEDRONKOWQ_Osz_2
	this.instance_7 = new lib.BIEDRONKOWQ_Osz_2("synched",0);
	this.instance_7.setTransform(72.5,24.1,0.8854,0.8854,0,0,0,74,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// CTA_Green
	this.instance_8 = new lib.CTAGreen();
	this.instance_8.setTransform(150.05,555.6,0.7189,0.7189,0,0,0,0.1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// BG
	this.instance_9 = new lib.gph_bgX2("synched",0);
	this.instance_9.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325,600);


// stage content:
(lib.WP_300x600_18_01_2024_thursday_before_18_v1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Tela_3_copy_copy
	this.instance = new lib.gph_Tela1("synched",0);
	this.instance.setTransform(450,300,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(878).to({_off:false},0).to({x:150},10,cjs.Ease.quadInOut).wait(112));

	// Tela_2_copy_copy
	this.instance_1 = new lib.gph_Tela3copy("synched",0);
	this.instance_1.setTransform(450,300,1,1,0,0,0,150,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(768).to({_off:false},0).to({x:150},10,cjs.Ease.quadInOut).to({_off:true},111).wait(111));

	// Tela_1_copy_copy
	this.instance_2 = new lib.gph_Tela2("synched",0);
	this.instance_2.setTransform(450,300,1,1,0,0,0,150,300);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(659).to({_off:false},0).to({x:150},10,cjs.Ease.quadInOut).to({_off:true},110).wait(221));

	// Tela_3_copy
	this.instance_3 = new lib.gph_Tela1("synched",0);
	this.instance_3.setTransform(450,300,1,1,0,0,0,150,300);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(548).to({_off:false},0).to({x:150},10,cjs.Ease.quadInOut).to({_off:true},112).wait(330));

	// Tela_2_copy
	this.instance_4 = new lib.gph_Tela3copy("synched",0);
	this.instance_4.setTransform(450,300,1,1,0,0,0,150,300);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(438).to({_off:false},0).to({x:150},10,cjs.Ease.quadInOut).to({_off:true},111).wait(441));

	// Tela_1_copy
	this.instance_5 = new lib.gph_Tela2("synched",0);
	this.instance_5.setTransform(450,300,1,1,0,0,0,150,300);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(329).to({_off:false},0).to({x:150},10,cjs.Ease.quadInOut).to({_off:true},110).wait(551));

	// Tela_3
	this.instance_6 = new lib.gph_Tela1("synched",0);
	this.instance_6.setTransform(450,300,1,1,0,0,0,150,300);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219).to({_off:false},0).to({x:150},10,cjs.Ease.quadInOut).to({_off:true},111).wait(660));

	// Tela_2
	this.instance_7 = new lib.gph_Tela3copy("synched",0);
	this.instance_7.setTransform(450,300,1,1,0,0,0,150,300);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(109).to({_off:false},0).to({x:150},10,cjs.Ease.quadInOut).to({_off:true},111).wait(770));

	// Tela_1
	this.instance_8 = new lib.gph_Tela2("synched",0);
	this.instance_8.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},120).wait(880));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,506,300);
// library properties:
lib.properties = {
	id: '249EBE4F76714781A8F33A27647D19C8',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1705496668000", id:"Image"},
		{src:"images/Image_0.png?1705496668000", id:"Image_0"},
		{src:"images/Image_1_1.png?1705496668000", id:"Image_1_1"},
		{src:"images/flowers.png?1705496668000", id:"flowers"},
		{src:"images/PACK_1.png?1705496668000", id:"PACK_1"},
		{src:"images/PACK_2.png?1705496668000", id:"PACK_2"},
		{src:"images/PACK_3.png?1705496668000", id:"PACK_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['249EBE4F76714781A8F33A27647D19C8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;