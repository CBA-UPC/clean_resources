<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="authoring-tool" content="Adobe_Animate_CC">
<title>Openbank</title>
<!-- write your code here -->
<meta name="ad.size" content="width=728px,height=90px">
<script type="text/javascript">
var clickTag = "https://www.openbank.es/deposito-plazo-fijo-12-meses";</script>
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script>
(function (cjs, an) {
var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];
(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];
	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}
	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}
	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:
function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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
(lib.txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC8C3").s().p("AgVAKIAGgCQADALAPgBQANAAAAgHQAAgEgCgCQgCgBgFAAIgOgCQgNgCAAgKQAAgGAGgEQAFgDAJAAQATAAADAMIgGACQgEgIgMgBQgNAAAAAIQgBAGAJABIAOACQAOABAAAKQAAAGgGAEQgFAEgKAAQgTAAgEgOg");
	this.shape.setTransform(340,-48.25);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC8C3").s().p("AgRASQgGgHgBgLQABgKAGgHQAHgGAKAAQALAAAHAFQAGAHABAKIAAADIgqAAQABAHAEAFQAFAFAIgBQANABAEgLIAGADQgGANgSAAQgKAAgHgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_1.setTransform(334.4,-48.25);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEC8C3").s().p("AAQAXIAAgXQAAgRgOAAQgHAAgGAFQgEAFAAAIIAAAWIgHAAIAAgsIAHAAIAAALQAFgMAOAAQATAAAAAVIAAAYg");
	this.shape_2.setTransform(328.5,-48.325);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC8C3").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgGAKAAQAMAAAGAGQAHAHAAAKQAAALgHAGQgGAHgMAAQgKAAgHgHgAgMgMQgFAEAAAIQAAAJAFAFQAEAEAIAAQAJAAAFgEQAFgFAAgJQAAgIgFgEQgFgFgJgBQgIABgEAFg");
	this.shape_3.setTransform(322.375,-48.25);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC8C3").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgVIAAgJIAHAAIAAAJg");
	this.shape_4.setTransform(318.225,-49.15);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEC8C3").s().p("AgQARQgHgGAAgLQAAgKAHgHQAGgGALAAQAUAAADARIgHABQgCgNgOAAQgIABgFAFQgEAEAAAIQAAAJAEAFQAFAEAIAAQANAAADgMIAHABQgCAIgGAFQgGAEgJAAQgLAAgGgHg");
	this.shape_5.setTransform(314.225,-48.25);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEC8C3").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgVIAAgJIAHAAIAAAJg");
	this.shape_6.setTransform(310.175,-49.15);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEC8C3").s().p("AgSAbQgGgGAAgLQAAgKAGgHQAIgGAKgBQAMAAAHALIAAgeIAGAAIAABBIgGAAIAAgKQgGAMgOAAQgKAAgHgHgAgNgDQgEAEAAAJQAAAIAFAFQAEAEAIABQAJgBAEgEQAFgEABgIIAAgCQgBgIgFgEQgEgFgJAAQgIAAgFAFg");
	this.shape_7.setTransform(305.55,-49.2);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEC8C3").s().p("AAQAXIAAgXQABgRgPAAQgIAAgFAFQgEAFAAAIIAAAWIgHAAIAAgsIAHAAIAAALQAFgMAOAAQATAAAAAVIAAAYg");
	this.shape_8.setTransform(299.6,-48.325);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEC8C3").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgGAKAAQAMAAAGAGQAHAHAAAKQAAALgHAGQgGAHgMAAQgKAAgHgHgAgMgMQgFAEAAAIQAAAJAFAFQAEAEAIAAQAJAAAFgEQAFgFAAgJQAAgIgFgEQgFgFgJgBQgIABgEAFg");
	this.shape_9.setTransform(293.475,-48.25);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEC8C3").s().p("AgWAZQgJgKAAgPQAAgOAJgKQAJgJAPAAQAMAAAIAHQAIAFACAMIgHAAQgCgIgGgFQgGgFgJABQgMgBgGAIQgIAHAAAMQAAAMAIAIQAGAHAMABQASAAAFgRIAHABQgGAWgYAAQgQAAgIgJg");
	this.shape_10.setTransform(286.95,-49.2);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEC8C3").s().p("AgSAVQgFgEAAgGQAAgGAFgEQAFgCALgCIASgBIAAgBQAAgNgPAAQgOAAgBALIgHAAQAAgHAHgFQAGgEAJAAQAVAAAAASIAAALQAAALACAGIgHAAIgBgKQgFALgQAAQgIAAgFgDgAgCACQgIABgDACQgDABAAAFQAAAHANAAQAIAAAFgEQAGgEAAgHIAAgDg");
	this.shape_11.setTransform(277.425,-48.25);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEC8C3").s().p("AgFAPIAAgYIgLAAIAAgGIALAAIAAgMIAFgCIAAAOIAQAAIAAAGIgQAAIAAAYQAAAJAKAAIAHgBIAAAGIgJABQgNAAAAgPg");
	this.shape_12.setTransform(272.575,-48.925);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEC8C3").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_13.setTransform(269.425,-49.275);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC8C3").s().p("AgWADIAAgZIAHAAIAAAYQAAAQAOAAQAIAAAEgGQAFgFAAgHIAAgWIAGAAIAAAsIgFAAIAAgLQgCAGgGADQgFADgGAAQgTAAgBgUg");
	this.shape_14.setTransform(265,-48.175);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEC8C3").s().p("AgWAKIAHgCQADALAPgBQANAAAAgHQAAgEgCgCQgCgBgFAAIgNgCQgOgCAAgKQABgGAFgEQAFgDAJAAQASAAAEAMIgGACQgDgIgNgBQgOAAABAIQAAAGAIABIAOACQANABAAAKQAAAGgEAEQgGAEgKAAQgTAAgFgOg");
	this.shape_15.setTransform(259.3,-48.25);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEC8C3").s().p("AARAXIAAgXQAAgRgPAAQgHAAgGAFQgEAFAAAIIAAAWIgHAAIAAgsIAHAAIAAALQAEgMAOAAQAUAAAAAVIAAAYg");
	this.shape_16.setTransform(253.55,-48.325);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEC8C3").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgGAKAAQAMAAAGAGQAHAHAAAKQAAALgHAGQgGAHgMAAQgKAAgHgHgAgMgMQgFAEAAAIQAAAJAFAFQAEAEAIAAQAJAAAFgEQAFgFAAgJQAAgIgFgEQgFgFgJgBQgIABgEAFg");
	this.shape_17.setTransform(247.425,-48.25);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEC8C3").s().p("AgWAZQgJgKAAgPQAAgOAJgKQAKgJAOAAQAMAAAJAHQAHAFACAMIgHAAQgCgIgGgFQgGgFgKABQgKgBgIAIQgGAHgBAMQABAMAGAIQAIAHAKABQAUAAAEgRIAHABQgGAWgZAAQgOAAgJgJg");
	this.shape_18.setTransform(240.9,-49.2);
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEC8C3").s().p("AgDAFIAAgJIAIAAIAAAJg");
	this.shape_19.setTransform(233.15,-46.5);
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEC8C3").s().p("AgRAbQgHgFgBgJIAHgBQACAPARAAQASAAAAgNQAAgMgSAAIgEAAIAAgFIAEAAQAQAAAAgMQAAgLgRAAQgIAAgEAEQgFAEAAAHIgGgBQAAgJAGgFQAHgGAKAAQAMAAAGAFQAGAEAAAIQAAAGgEAEQgEADgGABQAQABAAAOQAAAJgGAEQgHAGgMAAQgLAAgHgGg");
	this.shape_20.setTransform(228.875,-49.125);
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEC8C3").s().p("AgYAgIAAgGQAVgKAJgJQAGgGACgDQADgEAAgGQAAgFgEgFQgFgDgIAAQgHAAgEADQgFAEAAAHIABAFIgHgBIgBgFQAAgIAHgFQAGgGAKAAQAMAAAGAGQAGAFAAAIQAAAMgOAKQgKAKgOAGIAnAAIAAAGg");
	this.shape_21.setTransform(222.925,-49.2);
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEC8C3").s().p("AgTAoIAghOIAHAAIggBOg");
	this.shape_22.setTransform(217.7,-48.9);
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEC8C3").s().p("AAFAfIAAgyQgCADgDACQgDABgFAAIgDAAIAAgGIACAAQAGAAADgDQAEgDACgFIAGAAIAAA9g");
	this.shape_23.setTransform(213.025,-49.125);
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEC8C3").s().p("AAFAfIAAgyQgCADgDACQgDABgFAAIgDAAIAAgGIACAAQAGAAADgDQAEgDACgFIAGAAIAAA9g");
	this.shape_24.setTransform(209.225,-49.125);
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEC8C3").s().p("AgSAoIAfhOIAHAAIggBOg");
	this.shape_25.setTransform(205.4,-48.9);
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEC8C3").s().p("AgTAYQgIgJAAgPQAAgPAIgIQAHgJAMAAQANAAAHAJQAIAIAAAPQAAAPgIAJQgHAJgNAAQgMAAgHgJgAgOgTQgGAHAAAMQAAANAGAHQAFAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgFAHg");
	this.shape_26.setTransform(199.775,-49.125);
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEC8C3").s().p("AgRAbQgHgFgBgJIAHgBQACAPARAAQASAAAAgNQAAgMgSAAIgEAAIAAgFIAEAAQAQAAAAgMQAAgLgRAAQgIAAgEAEQgFAEAAAHIgGgBQAAgJAGgFQAHgGAKAAQAMAAAGAFQAGAEAAAIQAAAGgEAEQgEADgGABQAQABAAAOQAAAJgGAEQgHAGgMAAQgLAAgHgGg");
	this.shape_27.setTransform(193.425,-49.125);
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEC8C3").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_28.setTransform(186.175,-49.275);
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEC8C3").s().p("AgSAVQgFgEAAgGQAAgGAFgEQAFgCALgCIASgBIAAgBQAAgNgPAAQgOAAgBALIgHAAQAAgHAHgFQAGgEAJAAQAVAAAAASIAAALQAAALACAGIgHAAIgBgKQgFALgQAAQgIAAgFgDgAgCACQgIABgDACQgDABAAAFQAAAHANAAQAIAAAFgEQAGgEAAgHIAAgDg");
	this.shape_29.setTransform(181.925,-48.25);
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEC8C3").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgGAKAAQAMAAAGAGQAHAHAAAKQAAALgHAGQgGAHgMAAQgKAAgHgHgAgMgMQgFAEAAAIQAAAJAFAFQAEAEAIAAQAJAAAFgEQAFgFAAgJQAAgIgFgEQgFgFgJgBQgIABgEAFg");
	this.shape_30.setTransform(173.125,-48.25);
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEC8C3").s().p("AgFAPIAAgYIgLAAIAAgGIALAAIAAgMIAFgCIAAAOIAQAAIAAAGIgQAAIAAAYQAAAJAKAAIAHgBIAAAGIgJABQgNAAAAgPg");
	this.shape_31.setTransform(168.225,-48.925);
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEC8C3").s().p("AgQARQgHgGAAgLQAAgKAHgHQAGgGALAAQAUAAADARIgHABQgCgNgOAAQgIABgFAFQgEAEAAAIQAAAJAEAFQAFAEAIAAQANAAADgMIAHABQgCAIgGAFQgGAEgJAAQgLAAgGgHg");
	this.shape_32.setTransform(163.575,-48.25);
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEC8C3").s().p("AgRASQgGgHAAgLQAAgKAGgHQAHgGAKAAQALAAAHAFQAGAHAAAKIAAADIgpAAQABAHAEAFQAFAFAIgBQANABAEgLIAGADQgGANgSAAQgKAAgHgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_33.setTransform(157.85,-48.25);
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEC8C3").s().p("AgYAgIAAg9IAGAAIAAAJQADgFAGgDQAFgDAFAAQAMAAAFAGQAHAHAAALQAAAKgHAGQgGAHgLAAQgFAAgGgDQgFgDgCgEIAAAagAgMgUQgGAEAAAHIAAAEQAAAGAGAFQAEAEAIAAQAJAAAEgEQAFgFAAgIQAAgJgEgEQgGgFgIAAQgHAAgFAFg");
	this.shape_34.setTransform(152.15,-47.45);
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEC8C3").s().p("AgVAKIAGgCQADALAPgBQANAAAAgHQAAgEgCgCQgCgBgFAAIgOgCQgNgCAAgKQAAgGAGgEQAFgDAJAAQATAAADAMIgGACQgEgIgMgBQgNAAAAAIQgBAGAJABIAOACQAOABAAAKQAAAGgGAEQgFAEgKAAQgTAAgEgOg");
	this.shape_35.setTransform(146.05,-48.25);
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEC8C3").s().p("AgRASQgGgHgBgLQABgKAGgHQAHgGAKAAQALAAAHAFQAGAHABAKIAAADIgqAAQABAHAEAFQAFAFAIgBQANABAEgLIAGADQgGANgSAAQgKAAgHgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_36.setTransform(140.45,-48.25);
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEC8C3").s().p("AgMAXIAAgsIAGAAIAAANQACgHAEgDQADgEAHAAIADAAIAAAGIgCAAQgIAAgDAEQgGAGAAAKIAAATg");
	this.shape_37.setTransform(136.1,-48.3);
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEC8C3").s().p("AARAXIAAgXQgBgRgPAAQgGAAgFAFQgGAFAAAIIAAAWIgGAAIAAgsIAGAAIAAALQAGgMANAAQAUAAAAAVIAAAYg");
	this.shape_38.setTransform(127.85,-48.325);
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEC8C3").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgGAKAAQAMAAAGAGQAHAHAAAKQAAALgHAGQgGAHgMAAQgKAAgHgHgAgMgMQgFAEAAAIQAAAJAFAFQAEAEAIAAQAJAAAFgEQAFgFAAgJQAAgIgFgEQgFgFgJgBQgIABgEAFg");
	this.shape_39.setTransform(121.725,-48.25);
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEC8C3").s().p("AgQARQgHgGAAgLQAAgKAHgHQAGgGALAAQAUAAADARIgHABQgCgNgOAAQgIABgFAFQgEAEAAAIQAAAJAEAFQAFAEAIAAQANAAADgMIAHABQgCAIgGAFQgGAEgJAAQgLAAgGgHg");
	this.shape_40.setTransform(116.025,-48.25);
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEC8C3").s().p("AAPAhIgRgZIgNALIAAAOIgGAAIAAhBIAGAAIAAAsIAbgXIAJAAIgTAPIAVAdg");
	this.shape_41.setTransform(107.7,-49.275);
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEC8C3").s().p("AARAXIAAgXQAAgRgPAAQgIAAgFAFQgEAFAAAIIAAAWIgHAAIAAgsIAHAAIAAALQAEgMAOAAQAUAAAAAVIAAAYg");
	this.shape_42.setTransform(101.45,-48.325);
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEC8C3").s().p("AgSAVQgFgEAAgGQAAgGAFgEQAFgCALgCIASgBIAAgBQAAgNgPAAQgOAAgBALIgHAAQAAgHAHgFQAGgEAJAAQAVAAAAASIAAALQAAALACAGIgHAAIgBgKQgFALgQAAQgIAAgFgDgAgCACQgIABgDACQgDABAAAFQAAAHANAAQAIAAAFgEQAGgEAAgHIAAgDg");
	this.shape_43.setTransform(95.275,-48.25);
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEC8C3").s().p("AgSAXIgBAJIgFAAIAAhBIAGAAIAAAeQADgEAFgDQAFgEAHAAQAKABAHAGQAGAHAAAKQAAAKgHAHQgGAHgLAAQgOAAgFgLgAgNgDQgFAEAAAHIAAADQAAAIAFAEQAFAEAIABQAIgBAFgEQAFgFAAgIQAAgJgEgEQgFgEgJAAQgIAAgFAEg");
	this.shape_44.setTransform(89.55,-49.2);
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEC8C3").s().p("AAQAXIAAgXQABgRgQAAQgHAAgEAFQgFAFgBAIIAAAWIgGAAIAAgsIAGAAIAAALQAGgMAOAAQATAAAAAVIAAAYg");
	this.shape_45.setTransform(83.05,-48.325);
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEC8C3").s().p("AgQASQgIgHABgLQgBgKAIgHQAFgGALAAQAMAAAGAFQAGAHAAAKIAAADIgpAAQAAAHAFAFQAFAFAIgBQANABAFgLIAFADQgGANgRAAQgLAAgGgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_46.setTransform(76.95,-48.25);
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEC8C3").s().p("AgYAgIAAg9IAGAAIAAAJQADgFAFgDQAFgDAGAAQAMAAAFAGQAHAHAAALQAAAKgHAGQgGAHgLAAQgFAAgGgDQgGgDgCgEIAAAagAgMgUQgGAEAAAHIAAAEQAAAGAGAFQAFAEAHAAQAJAAAEgEQAFgFAAgIQAAgJgEgEQgGgFgIAAQgHAAgFAFg");
	this.shape_47.setTransform(71.25,-47.45);
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEC8C3").s().p("AgYAZQgJgKAAgPQAAgOAJgKQAKgJAOAAQAQAAAIAJQAKAKAAAOQAAAPgKAKQgIAJgQAAQgOAAgKgJgAgSgTQgHAHAAAMQAAANAHAHQAHAIALAAQAMAAAIgIQAGgHABgNQgBgMgGgHQgIgIgMABQgLgBgHAIg");
	this.shape_48.setTransform(64.1,-49.2);
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEC8C3").s().p("AARAXIAAgXQAAgRgPAAQgIAAgEAFQgGAFAAAIIAAAWIgGAAIAAgsIAGAAIAAALQAFgMAOAAQAUAAAAAVIAAAYg");
	this.shape_49.setTransform(54.3,-48.325);
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEC8C3").s().p("AgRASQgGgHgBgLQABgKAGgHQAHgGAKAAQALAAAHAFQAGAHABAKIAAADIgqAAQABAHAEAFQAFAFAIgBQANABAEgLIAGADQgGANgSAAQgKAAgHgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_50.setTransform(48.2,-48.25);
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEC8C3").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgGAKAAQAMAAAGAGQAHAHAAAKQAAALgHAGQgGAHgMAAQgKAAgHgHgAgMgMQgFAEAAAIQAAAJAFAFQAEAEAIAAQAJAAAFgEQAFgFAAgJQAAgIgFgEQgFgFgJgBQgIABgEAFg");
	this.shape_51.setTransform(39.425,-48.25);
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEC8C3").s().p("AgSAbQgGgGAAgLQAAgKAGgHQAIgGAKgBQANAAAFALIAAgeIAHAAIAABBIgGAAIAAgKQgGAMgOAAQgKAAgHgHgAgMgDQgFAEAAAJQAAAIAFAFQAFAEAHABQAIgBAGgEQAEgEAAgIIAAgCQAAgIgEgEQgGgFgIAAQgIAAgEAFg");
	this.shape_52.setTransform(33.1,-49.2);
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEC8C3").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_53.setTransform(28.925,-49.275);
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEC8C3").s().p("AgSAVQgFgEAAgGQAAgGAFgEQAFgCALgCIASgBIAAgBQAAgNgPAAQgOAAgBALIgHAAQAAgHAHgFQAGgEAJAAQAVAAAAASIAAALQAAALACAGIgHAAIgBgKQgFALgQAAQgIAAgFgDgAgCACQgIABgDACQgDABAAAFQAAAHANAAQAIAAAFgEQAGgEAAgHIAAgDg");
	this.shape_54.setTransform(24.675,-48.25);
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FEC8C3").s().p("AgWAKIAHgCQADALAPgBQANAAAAgHQAAgEgCgCQgCgBgEAAIgOgCQgOgCAAgKQABgGAEgEQAGgDAJAAQASAAAEAMIgGACQgDgIgNgBQgOAAAAAIQAAAGAJABIAOACQANABAAAKQAAAGgEAEQgGAEgKAAQgTAAgFgOg");
	this.shape_55.setTransform(19.1,-48.25);
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEC8C3").s().p("AgVADIAAgZIAGAAIAAAYQAAAQAOAAQAIAAAFgGQAEgFAAgHIAAgWIAHAAIAAAsIgHAAIAAgLQgCAGgFADQgFADgGAAQgUAAABgUg");
	this.shape_56.setTransform(10.25,-48.175);
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEC8C3").s().p("AgFAPIAAgYIgLAAIAAgGIALAAIAAgMIAFgCIAAAOIAQAAIAAAGIgQAAIAAAYQAAAJAKAAIAHgBIAAAGIgJABQgNAAAAgPg");
	this.shape_57.setTransform(5.275,-48.925);
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEC8C3").s().p("AARAXIAAgXQgBgRgPAAQgGAAgFAFQgGAFAAAIIAAAWIgGAAIAAgsIAGAAIAAALQAGgMANAAQAUAAAAAVIAAAYg");
	this.shape_58.setTransform(-2.65,-48.325);
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEC8C3").s().p("AgRASQgGgHAAgLQAAgKAGgHQAHgGAKAAQALAAAHAFQAGAHAAAKIAAADIgpAAQABAHAEAFQAFAFAIgBQANABAEgLIAGADQgGANgSAAQgKAAgHgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_59.setTransform(-8.75,-48.25);
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FEC8C3").s().p("AgFAPIAAgYIgLAAIAAgGIALAAIAAgMIAFgCIAAAOIAQAAIAAAGIgQAAIAAAYQAAAJAKAAIAHgBIAAAGIgJABQgNAAAAgPg");
	this.shape_60.setTransform(-13.575,-48.925);
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FEC8C3").s().p("AARAXIAAgXQgBgRgPAAQgGAAgFAFQgGAFAAAIIAAAWIgGAAIAAgsIAGAAIAAALQAFgMAOAAQAUAAAAAVIAAAYg");
	this.shape_61.setTransform(-18.5,-48.325);
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FEC8C3").s().p("AgRASQgGgHgBgLQABgKAGgHQAHgGAKAAQAMAAAGAFQAGAHABAKIAAADIgqAAQABAHAEAFQAFAFAIgBQANABAEgLIAGADQgGANgSAAQgKAAgHgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_62.setTransform(-24.6,-48.25);
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FEC8C3").s().p("AAfAXIAAgZQAAgPgNAAQgHAAgEAFQgEAEAAAHIAAAYIgFAAIAAgZQAAgPgNAAQgHAAgEAFQgEAFAAAHIAAAXIgGAAIAAgsIAGAAIAAAKQAEgLANAAQANAAACALQAFgLANAAQARAAAAAUIAAAZg");
	this.shape_63.setTransform(-31.875,-48.325);
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FEC8C3").s().p("AgQASQgIgHAAgLQAAgKAIgHQAFgGALAAQAMAAAGAFQAHAHgBAKIAAADIgpAAQAAAHAFAFQAFAFAIgBQANABAFgLIAFADQgGANgRAAQgLAAgGgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_64.setTransform(-39.4,-48.25);
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FEC8C3").s().p("AgMAXIAAgsIAGAAIAAANQACgHAEgDQAEgEAGAAIADAAIAAAGIgCAAQgIAAgEAEQgEAGAAAKIAAATg");
	this.shape_65.setTransform(-43.75,-48.3);
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FEC8C3").s().p("AgQARQgHgGAAgLQAAgKAHgHQAGgGALAAQAUAAADARIgHABQgCgNgOAAQgIABgFAFQgEAEAAAIQAAAJAEAFQAFAEAIAAQANAAADgMIAHABQgCAIgGAFQgGAEgJAAQgLAAgGgHg");
	this.shape_66.setTransform(-48.725,-48.25);
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FEC8C3").s().p("AARAXIAAgXQAAgRgQAAQgHAAgEAFQgGAFAAAIIAAAWIgGAAIAAgsIAGAAIAAALQAFgMAOAAQAUAAAAAVIAAAYg");
	this.shape_67.setTransform(-54.6,-48.325);
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FEC8C3").s().p("AgCAgIAAgsIAFAAIAAAsgAgDgVIAAgJIAHAAIAAAJg");
	this.shape_68.setTransform(-59.025,-49.15);
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FEC8C3").s().p("AgQASQgIgHABgLQgBgKAIgHQAFgGALAAQAMAAAGAFQAGAHAAAKIAAADIgpAAQAAAHAFAFQAFAFAIgBQANABAFgLIAFADQgGANgRAAQgLAAgGgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_69.setTransform(-66.15,-48.25);
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FEC8C3").s().p("AgWADIAAgZIAHAAIAAAYQAAAQAOAAQAIAAAEgGQAFgFAAgHIAAgWIAGAAIAAAsIgFAAIAAgLQgCAGgGADQgFADgGAAQgTAAgBgUg");
	this.shape_70.setTransform(-72.15,-48.175);
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FEC8C3").s().p("AASAgIAAgaQgCAEgFADQgFADgHAAQgKAAgHgHQgGgGAAgKQAAgLAGgHQAHgGAKAAQAOAAAGALIABgJIAFAAIAAA9gAgMgUQgFAEAAAJQAAAIAFAFQAFAEAHAAQAJAAAFgEQAFgFgBgGIAAgEQABgGgFgFQgGgFgIAAQgHAAgFAFg");
	this.shape_71.setTransform(-78.5,-47.45);
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FEC8C3").s().p("AgWAKIAHgCQADALAOAAQAOAAAAgJQAAgDgCgCQgCgBgEgBIgOgCQgOgBAAgJQABgHAEgDQAGgEAJAAQASAAAEANIgGACQgDgKgNABQgOAAAAAHQAAAGAJABIAOACQANABAAAKQAAAGgEAEQgGAEgKAAQgTAAgFgOg");
	this.shape_72.setTransform(323.3,-59.55);
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FEC8C3").s().p("AgRASQgHgHAAgLQAAgKAHgGQAHgHAKAAQAMAAAGAHQAHAGAAAKQAAALgHAHQgGAGgMAAQgKAAgHgGgAgMgNQgFAFAAAIQAAAJAFAEQAEAGAIAAQAJAAAFgGQAFgEAAgJQAAgIgFgFQgFgEgJAAQgIAAgEAEg");
	this.shape_73.setTransform(317.675,-59.55);
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FEC8C3").s().p("AgWAKIAHgCQADALAOAAQAOAAAAgJQAAgDgCgCQgCgBgEgBIgOgCQgOgBAAgJQABgHAEgDQAGgEAJAAQASAAAEANIgGACQgDgKgNABQgOAAAAAHQAAAGAJABIAOACQANABAAAKQAAAGgEAEQgGAEgKAAQgTAAgFgOg");
	this.shape_74.setTransform(312.05,-59.55);
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FEC8C3").s().p("AgQASQgIgGABgLQgBgLAIgHQAFgGALAAQAMAAAGAGQAGAFAAALIAAACIgpAAQAAAJAFAEQAFAEAIABQANAAAFgLIAFACQgGAOgRAAQgLAAgGgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_75.setTransform(306.45,-59.55);
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FEC8C3").s().p("AgMAXIAAgsIAGAAIAAAMQACgGAEgEQADgDAHAAIADAAIAAAGIgDAAQgHAAgEAFQgEAEgBALIAAATg");
	this.shape_76.setTransform(302.1,-59.6);
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FEC8C3").s().p("AgYAXQAAgHAIgDQgGgCAAgFQAAgGAIgCQgGgEAAgHQAAgIAFgDQAGgFAJAAQAGAAAFACQACgHAJAAIADAAIAAAFIgDAAQgGAAgCAFQAGADAAAIQAAAHgGAEQgFAEgJAAQgGAAgFgCQgFAAAAAEQAAAFAIAAIASAAQAPAAAAANQAAANgZAAQgYAAAAgMgAgSAWQAAAIASAAQASAAAAgIQAAgHgKAAIgQgBIgEAAQgGACAAAGgAgKgVQgEADAAAFQAAAFAEADQAEACAGAAQAGAAAEgCQADgDAAgFQAAgFgDgDQgEgDgGAAQgGAAgEADg");
	this.shape_77.setTransform(297.075,-58.95);
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FEC8C3").s().p("AARAXIAAgXQgBgRgPAAQgGAAgFAFQgGAFAAAIIAAAWIgGAAIAAgsIAGAAIAAALQAFgMAOAAQAUAAAAAVIAAAYg");
	this.shape_78.setTransform(291.1,-59.625);
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FEC8C3").s().p("AgCAfIAAgsIAFAAIAAAsgAgDgVIAAgKIAHAAIAAAKg");
	this.shape_79.setTransform(286.675,-60.45);
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FEC8C3").s().p("AgWAKIAHgCQADALAOAAQAOAAAAgJQAAgDgCgCQgCgBgEgBIgPgCQgMgBAAgJQAAgHAEgDQAGgEAJAAQATAAADANIgGACQgDgKgNABQgOAAAAAHQAAAGAJABIAOACQANABAAAKQAAAGgEAEQgGAEgKAAQgTAAgFgOg");
	this.shape_80.setTransform(279.75,-59.55);
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FEC8C3").s().p("AgRASQgHgHAAgLQAAgKAHgGQAHgHAKAAQAMAAAGAHQAHAGAAAKQAAALgHAHQgGAGgMAAQgKAAgHgGgAgMgNQgFAFAAAIQAAAJAFAEQAEAGAIAAQAJAAAFgGQAFgEAAgJQAAgIgFgFQgFgEgJAAQgIAAgEAEg");
	this.shape_81.setTransform(274.125,-59.55);
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FEC8C3").s().p("AgDAWIgVgsIAIAAIAPAhIABAGIABAAIABgGIAQghIAHAAIgVAsg");
	this.shape_82.setTransform(268.65,-59.55);
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FEC8C3").s().p("AgRASQgHgGAAgLQAAgLAHgHQAHgGAKAAQAMAAAGAGQAHAFAAALIAAACIgqAAQAAAJAFAEQAFAEAIABQANAAAEgLIAGACQgGAOgRAAQgLAAgHgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_83.setTransform(263.2,-59.55);
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FEC8C3").s().p("AgVADIAAgZIAGAAIAAAYQAAAQAOAAQAIAAAFgGQAEgFAAgHIAAgWIAHAAIAAAsIgHAAIAAgLQgCAGgFADQgFADgGAAQgTAAAAgUg");
	this.shape_84.setTransform(257.2,-59.475);
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FEC8C3").s().p("AARAXIAAgXQgBgRgPAAQgGAAgFAFQgGAFAAAIIAAAWIgGAAIAAgsIAGAAIAAALQAGgMANAAQAUAAAAAVIAAAYg");
	this.shape_85.setTransform(251.15,-59.625);
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FEC8C3").s().p("AgQASQgIgGAAgLQAAgLAIgHQAGgGAKAAQAMAAAGAGQAHAFAAALIAAACIgqAAQAAAJAFAEQAFAEAIABQANAAAEgLIAGACQgGAOgSAAQgKAAgGgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_86.setTransform(242.05,-59.55);
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FEC8C3").s().p("AgSAbQgGgHAAgLQAAgJAGgHQAIgHAKABQAMAAAHAKIAAgdIAGAAIAABAIgGAAIAAgJQgGALgOgBQgKAAgHgGgAgNgDQgEAEAAAIQAAAJAFAFQAEAFAIgBQAJABAEgFQAFgEABgIIAAgDQgBgHgFgEQgEgFgJAAQgIAAgFAFg");
	this.shape_87.setTransform(235.8,-60.5);
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FEC8C3").s().p("AgMAXIAAgsIAGAAIAAAMQACgGAEgEQADgDAHAAIADAAIAAAGIgDAAQgHAAgEAFQgEAEAAALIAAATg");
	this.shape_88.setTransform(228.4,-59.6);
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FEC8C3").s().p("AgQASQgIgGABgLQgBgLAIgHQAFgGALAAQAMAAAGAGQAHAFgBALIAAACIgpAAQAAAJAFAEQAFAEAIABQANAAAFgLIAFACQgGAOgRAAQgLAAgGgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_89.setTransform(223.3,-59.55);
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FEC8C3").s().p("AgSAbQgGgHAAgLQAAgJAGgHQAIgHAKABQANAAAFAKIAAgdIAHAAIAABAIgGAAIAAgJQgGALgOgBQgKAAgHgGgAgMgDQgFAEAAAIQAAAJAFAFQAFAFAHgBQAIABAGgFQAEgEAAgIIAAgDQAAgHgEgEQgGgFgIAAQgIAAgEAFg");
	this.shape_90.setTransform(217.05,-60.5);
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FEC8C3").s().p("AgQASQgIgGABgLQgBgLAIgHQAFgGALAAQAMAAAGAGQAHAFgBALIAAACIgpAAQAAAJAFAEQAFAEAIABQANAAAFgLIAFACQgGAOgRAAQgLAAgGgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_91.setTransform(211.25,-59.55);
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FEC8C3").s().p("AgQASQgHgHAAgLQAAgKAHgGQAGgHALAAQAUAAADAQIgHABQgCgMgOABQgIAAgFAEQgEAFAAAIQAAAJAEAEQAFAGAIAAQANgBADgLIAHABQgCAHgGAEQgGAFgJAAQgLAAgGgGg");
	this.shape_92.setTransform(205.625,-59.55);
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FEC8C3").s().p("AgRASQgHgHAAgLQAAgKAHgGQAHgHAKAAQAMAAAGAHQAHAGAAAKQAAALgHAHQgGAGgMAAQgKAAgHgGgAgMgNQgFAFAAAIQAAAJAFAEQAEAGAIAAQAJAAAFgGQAFgEAAgJQAAgIgFgFQgFgEgJAAQgIAAgEAEg");
	this.shape_93.setTransform(199.875,-59.55);
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FEC8C3").s().p("AgMAXIAAgsIAGAAIAAAMQACgGAEgEQADgDAHAAIADAAIAAAGIgDAAQgHAAgDAFQgFAEgBALIAAATg");
	this.shape_94.setTransform(195.45,-59.6);
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FEC8C3").s().p("AgYAgIAAg+IAGAAIAAAKQADgFAGgDQAFgDAFAAQAMAAAFAHQAHAGAAALQAAAKgHAHQgGAGgLAAQgFAAgGgDQgFgDgCgEIAAAagAgMgVQgGAFAAAIIAAACQAAAHAGAEQAEAFAIAAQAJAAAEgFQAFgEAAgIQAAgIgEgGQgGgEgIAAQgHAAgFAEg");
	this.shape_95.setTransform(190.4,-58.75);
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FEC8C3").s().p("AgQASQgIgGAAgLQAAgLAIgHQAFgGALAAQAMAAAGAGQAHAFgBALIAAACIgpAAQAAAJAFAEQAFAEAIABQANAAAFgLIAFACQgGAOgRAAQgLAAgGgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_96.setTransform(181.1,-59.55);
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FEC8C3").s().p("AgSAXIgBAJIgFAAIAAhAIAGAAIAAAeQADgFAFgEQAFgCAHAAQAKgBAGAHQAHAHAAAJQAAALgHAHQgHAGgKAAQgOAAgFgKgAgMgDQgGAEAAAHIAAADQAAAIAFAEQAFAFAIgBQAIABAFgFQAFgFAAgJQAAgIgEgEQgFgFgJAAQgIAAgEAFg");
	this.shape_97.setTransform(175.4,-60.5);
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FEC8C3").s().p("AgQASQgIgGAAgLQAAgLAIgHQAFgGALAAQAMAAAGAGQAHAFAAALIAAACIgqAAQABAJAEAEQAFAEAIABQANAAAFgLIAFACQgGAOgRAAQgLAAgGgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_98.setTransform(169.05,-59.55);
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FEC8C3").s().p("AgSAbQgGgHAAgLQAAgJAGgHQAIgHAKABQANAAAFAKIAAgdIAHAAIAABAIgGAAIAAgJQgGALgOgBQgKAAgHgGgAgMgDQgFAEAAAIQAAAJAFAFQAFAFAHgBQAJABAFgFQAEgEAAgIIAAgDQAAgHgEgEQgFgFgJAAQgIAAgEAFg");
	this.shape_99.setTransform(162.8,-60.5);
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FEC8C3").s().p("AgRASQgHgHAAgLQAAgKAHgGQAHgHAKAAQAMAAAGAHQAHAGAAAKQAAALgHAHQgGAGgMAAQgKAAgHgGgAgMgNQgFAFAAAIQAAAJAFAEQAEAGAIAAQAJAAAFgGQAFgEAAgJQAAgIgFgFQgFgEgJAAQgIAAgEAEg");
	this.shape_100.setTransform(153.975,-59.55);
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FEC8C3").s().p("AgFAPIAAgYIgLAAIAAgGIALAAIAAgMIAFgCIAAAOIAQAAIAAAGIgQAAIAAAYQAAAJAKAAIAHgBIAAAGIgJABQgNAAAAgPg");
	this.shape_101.setTransform(149.075,-60.225);
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FEC8C3").s().p("AgCAfIAAgsIAFAAIAAAsgAgDgVIAAgKIAHAAIAAAKg");
	this.shape_102.setTransform(145.975,-60.45);
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FEC8C3").s().p("AgWAKIAHgCQADALAOAAQAOAAAAgJQAAgDgCgCQgCgBgEgBIgOgCQgNgBAAgJQAAgHAEgDQAGgEAJAAQATAAADANIgGACQgDgKgNABQgOAAAAAHQAAAGAJABIAOACQANABAAAKQAAAGgEAEQgGAEgKAAQgTAAgFgOg");
	this.shape_103.setTransform(142.05,-59.55);
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FEC8C3").s().p("AgRAbQgHgHAAgLQAAgJAHgHQAHgHAKABQAMgBAGAHQAHAHAAAJQAAALgHAHQgGAGgMAAQgKAAgHgGgAgMgDQgFAEAAAIQAAAKAFAEQAEAFAIAAQAJAAAFgFQAFgEAAgKQAAgIgFgEQgFgFgJAAQgIAAgEAFgAgCgTIAKgNIAIAAIgNANg");
	this.shape_104.setTransform(136.425,-60.5);
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FEC8C3").s().p("AgYAgIAAg+IAGAAIAAAKQADgFAFgDQAFgDAGAAQAMAAAFAHQAHAGAAALQAAAKgHAHQgGAGgLAAQgFAAgGgDQgGgDgCgEIAAAagAgMgVQgGAFAAAIIAAACQAAAHAGAEQAFAFAHAAQAJAAAEgFQAFgEAAgIQAAgIgEgGQgGgEgIAAQgHAAgFAEg");
	this.shape_105.setTransform(130.65,-58.75);
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FEC8C3").s().p("AgRASQgGgGgBgLQABgLAGgHQAHgGAKAAQAMAAAGAGQAGAFABALIAAACIgqAAQABAJAEAEQAFAEAIABQANAAAEgLIAGACQgGAOgSAAQgKAAgHgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_106.setTransform(124.35,-59.55);
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FEC8C3").s().p("AgRAbQgHgHAAgLQAAgJAHgHQAGgHALABQAMAAAHAKIAAgdIAGAAIAABAIgGAAIAAgJQgGALgNgBQgLAAgGgGgAgNgDQgEAEAAAIQAAAJAFAFQAFAFAHgBQAJABAEgFQAGgEAAgIIAAgDQAAgHgGgEQgEgFgJAAQgHAAgGAFg");
	this.shape_107.setTransform(118.1,-60.5);
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FEC8C3").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_108.setTransform(110.925,-60.575);
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FEC8C3").s().p("AgQASQgIgGABgLQgBgLAIgHQAFgGALAAQAMAAAGAGQAHAFgBALIAAACIgpAAQAAAJAFAEQAFAEAIABQANAAAFgLIAFACQgGAOgRAAQgLAAgGgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_109.setTransform(106.75,-59.55);
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FEC8C3").s().p("AgSAbQgGgHAAgLQAAgJAGgHQAIgHAKABQANAAAFAKIAAgdIAHAAIAABAIgGAAIAAgJQgGALgOgBQgKAAgHgGgAgMgDQgFAEAAAIQAAAJAFAFQAFAFAHgBQAIABAGgFQAEgEAAgIIAAgDQAAgHgEgEQgGgFgIAAQgIAAgEAFg");
	this.shape_110.setTransform(100.5,-60.5);
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FEC8C3").s().p("AgRASQgGgGAAgLQAAgLAGgHQAHgGAKAAQALAAAHAGQAGAFAAALIAAACIgpAAQABAJAEAEQAFAEAIABQANAAAEgLIAGACQgGAOgSAAQgKAAgHgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_111.setTransform(91.7,-59.55);
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FEC8C3").s().p("AgFAPIAAgYIgLAAIAAgGIALAAIAAgMIAFgCIAAAOIAQAAIAAAGIgQAAIAAAYQAAAJAKAAIAHgBIAAAGIgJABQgNAAAAgPg");
	this.shape_112.setTransform(86.875,-60.225);
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FEC8C3").s().p("AgMAXIAAgsIAGAAIAAAMQACgGAEgEQADgDAHAAIADAAIAAAGIgDAAQgHAAgEAFQgEAEAAALIAAATg");
	this.shape_113.setTransform(83.5,-59.6);
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FEC8C3").s().p("AgRASQgHgHAAgLQAAgKAHgGQAHgHAKAAQAMAAAGAHQAHAGAAAKQAAALgHAHQgGAGgMAAQgKAAgHgGgAgMgNQgFAFAAAIQAAAJAFAEQAEAGAIAAQAJAAAFgGQAFgEAAgJQAAgIgFgFQgFgEgJAAQgIAAgEAEg");
	this.shape_114.setTransform(78.375,-59.55);
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FEC8C3").s().p("AgYAgIAAg+IAGAAIAAAKQADgFAFgDQAFgDAGAAQAMAAAFAHQAHAGAAALQAAAKgHAHQgGAGgLAAQgFAAgGgDQgGgDgCgEIAAAagAgMgVQgGAFAAAIIAAACQAAAHAGAEQAFAFAHAAQAJAAAEgFQAFgEAAgIQAAgIgEgGQgGgEgIAAQgHAAgFAEg");
	this.shape_115.setTransform(72.6,-58.75);
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FEC8C3").s().p("AAfAXIAAgZQAAgPgNAAQgHAAgEAFQgEAEAAAHIAAAYIgFAAIAAgZQAAgPgNAAQgHAAgEAFQgEAFAAAHIAAAXIgGAAIAAgsIAGAAIAAAKQAEgLANAAQANAAACALQAFgLANAAQARAAAAAUIAAAZg");
	this.shape_116.setTransform(64.775,-59.625);
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FEC8C3").s().p("AgCAfIAAgsIAFAAIAAAsgAgDgVIAAgKIAHAAIAAAKg");
	this.shape_117.setTransform(58.925,-60.45);
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FEC8C3").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_118.setTransform(53.425,-60.575);
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FEC8C3").s().p("AgXAgIAAg/IAvAAIAAAGIgoAAIAAAXIAmAAIAAAEIgmAAIAAAYIAoAAIAAAGg");
	this.shape_119.setTransform(49.075,-60.5);
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FEC8C3").s().p("AgDAFIAAgJIAIAAIAAAJg");
	this.shape_120.setTransform(41.45,-57.8);
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FEC8C3").s().p("AgKAnQAPgSAAgVQAAgVgPgQIAFgDQAHAIAFAKQAEAMAAAKQAAALgEALQgFALgHAIg");
	this.shape_121.setTransform(38.575,-60.2);
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FEC8C3").s().p("AgWAKIAHgCQADALAPAAQANAAAAgJQAAgDgCgCQgCgBgFgBIgNgCQgNgBgBgJQAAgHAGgDQAFgEAJAAQATAAADANIgGACQgDgKgNABQgNAAAAAHQAAAGAIABIAOACQANABAAAKQABAGgGAEQgFAEgKAAQgTAAgFgOg");
	this.shape_122.setTransform(34.65,-59.55);
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FEC8C3").s().p("AgRASQgGgGAAgLQAAgLAGgHQAHgGAKAAQALAAAHAGQAGAFAAALIAAACIgpAAQABAJAEAEQAFAEAIABQANAAAEgLIAGACQgGAOgSAAQgKAAgHgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_123.setTransform(29.05,-59.55);
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FEC8C3").s().p("AgWAKIAHgCQADALAPAAQANAAAAgJQAAgDgCgCQgCgBgFgBIgNgCQgOgBAAgJQABgHAFgDQAFgEAJAAQASAAAEANIgGACQgDgKgNABQgOAAAAAHQABAGAIABIAOACQANABAAAKQAAAGgEAEQgGAEgKAAQgTAAgFgOg");
	this.shape_124.setTransform(23.5,-59.55);
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FEC8C3").s().p("AgRASQgGgGAAgLQAAgLAGgHQAHgGAKAAQALAAAHAGQAGAFAAALIAAACIgpAAQABAJAEAEQAFAEAIABQANAAAEgLIAGACQgGAOgSAAQgKAAgHgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_125.setTransform(17.9,-59.55);
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FEC8C3").s().p("AAfAXIAAgZQAAgPgNAAQgHAAgEAFQgEAEAAAHIAAAYIgFAAIAAgZQAAgPgNAAQgHAAgEAFQgEAFAAAHIAAAXIgGAAIAAgsIAGAAIAAAKQAEgLANAAQANAAACALQAFgLANAAQARAAAAAUIAAAZg");
	this.shape_126.setTransform(10.625,-59.625);
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FEC8C3").s().p("AgTAYQgIgJAAgPQAAgPAIgIQAHgJAMAAQANAAAHAJQAIAIAAAPQAAAPgIAJQgHAJgNAAQgMAAgHgJgAgOgTQgGAHAAAMQAAANAGAHQAFAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgFAHg");
	this.shape_127.setTransform(-0.275,-60.425);
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FEC8C3").s().p("AAFAfIAAgyQgCADgDACQgDABgFAAIgDAAIAAgGIACAAQAGAAADgDQAEgDACgFIAGAAIAAA9g");
	this.shape_128.setTransform(-5.875,-60.425);
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FEC8C3").s().p("AgGAWQgEgLgBgLQAAgKAGgMQAEgKAHgIIAGADQgPAQgBAVQABAVAPASIgGACQgHgIgFgLg");
	this.shape_129.setTransform(-8.55,-60.2);
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FEC8C3").s().p("AgPAaQgHgHgCgLIgIAAIAAgFIAHAAIAAgDIAAgEIgHAAIAAgEIAIAAQACgLAIgGQAIgHAMAAQATAAAIAOIgGADQgHgLgOAAQgTAAgEASIAiAAIAAAEIgjAAIAAAEIAAADIAjAAIAAAFIgiAAQACAJAGAFQAGAFAJAAQAOAAAHgMIAGADQgIAPgTAAQgNAAgIgHg");
	this.shape_130.setTransform(-16.825,-60.425);
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FEC8C3").s().p("AgTAYQgIgJAAgPQAAgPAIgIQAHgJAMAAQANAAAHAJQAIAIAAAPQAAAPgIAJQgHAJgNAAQgMAAgHgJgAgOgTQgGAHAAAMQAAANAGAHQAFAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgFAHg");
	this.shape_131.setTransform(-26.475,-60.425);
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FEC8C3").s().p("AgTAYQgIgJAAgPQAAgPAIgIQAHgJAMAAQANAAAHAJQAIAIAAAPQAAAPgIAJQgHAJgNAAQgMAAgHgJgAgOgTQgGAHAAAMQAAANAGAHQAFAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgFAHg");
	this.shape_132.setTransform(-33.025,-60.425);
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FEC8C3").s().p("AgSAZQgHgJAAgQQAAgPAHgIQAHgJAMAAQAKAAAGAEQAHAFABAIIgHABQgDgMgOAAQgTAAAAAaIAAABQACgFAGgDQAGgDAHAAQALAAAGAGQAGAEAAALQAAAKgHAGQgHAGgKAAQgNAAgHgIgAgLAAQgFADgBAHQADARAQAAQAIAAAEgEQAFgFAAgHQAAgPgRAAQgHAAgGAEg");
	this.shape_133.setTransform(-39.325,-60.425);
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FEC8C3").s().p("AgQASQgIgGAAgLQAAgLAIgHQAFgGALAAQAMAAAGAGQAHAFAAALIAAACIgqAAQABAJAEAEQAFAEAIABQANAAAFgLIAFACQgGAOgRAAQgLAAgGgGgAgMgOQgEAEgBAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_134.setTransform(-48.3,-59.55);
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FEC8C3").s().p("AgSAbQgGgHAAgLQAAgJAGgHQAIgHAKABQANAAAFAKIAAgdIAHAAIAABAIgGAAIAAgJQgGALgOgBQgKAAgHgGgAgMgDQgFAEAAAIQAAAJAFAFQAFAFAHgBQAJABAFgFQAEgEAAgIIAAgDQAAgHgEgEQgFgFgJAAQgIAAgEAFg");
	this.shape_135.setTransform(-54.55,-60.5);
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FEC8C3").s().p("AgVAKIAGgCQADALAOAAQAOAAAAgJQAAgDgCgCQgCgBgFgBIgOgCQgNgBABgJQAAgHAEgDQAGgEAJAAQATAAADANIgGACQgDgKgNABQgNAAAAAHQgBAGAJABIAOACQAOABAAAKQgBAGgFAEQgFAEgKAAQgTAAgEgOg");
	this.shape_136.setTransform(-60.15,-59.55);
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FEC8C3").s().p("AgRASQgHgGAAgLQAAgLAHgHQAHgGAKAAQAMAAAGAGQAHAFAAALIAAACIgqAAQAAAJAFAEQAFAEAIABQANAAAEgLIAGACQgGAOgSAAQgKAAgHgGgAgMgOQgFAEAAAHIAjAAIAAAAQAAgHgFgEQgFgEgIAAQgHAAgFAEg");
	this.shape_137.setTransform(-65.75,-59.55);
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FEC8C3").s().p("AgdAgIAAg/IAbAAQAOAAAJAIQAJAJAAAOQAAAOgKAKQgIAIgOAAgAgWAaIAUAAQALAAAHgHQAGgIABgLQgBgLgGgIQgIgGgKAAIgUAAg");
	this.shape_138.setTransform(-71.95,-60.5);
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FEC8C3").s().p("AADAUIAAggIgDADIgFABIgBAAIAAgEIABAAQADAAACgCQADgCABgDIADAAIAAAng");
	this.shape_139.setTransform(-80.45,-62.475);
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FEC8C3").s().p("AgXAkIAAhFIARAAIAAASQACgJAGgFQAHgGAKAAIAFAAIAAARIgGgBQgLAAgGAHQgGAGAAAOIAAAcg");
	this.shape_140.setTransform(302.775,-86.25);
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FEC8C3").s().p("AgcAbQgLgJAAgSQAAgQALgKQALgKARAAQATAAALAJQAKAJAAARIAAAGIg+AAQABAIAGAFQAHAGAKAAQAQAAAHgMIAOAGQgLATgbAAQgSAAgLgKgAgPgUQgGAFgBAJIAsAAIAAgBQAAgIgGgFQgGgFgKAAQgJABgGAEg");
	this.shape_141.setTransform(294.625,-86.15);
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FEC8C3").s().p("AgeAqQgKgLAAgQQAAgQAKgKQALgKAPAAQATAAAJANIAAgrIARAAIAABlIgRAAIAAgNQgJAPgUAAQgPAAgKgKgAgQgCQgFAFgBAMQAAALAHAGQAGAHAKAAQAKAAAHgGQAFgGABgKIAAgEQAAgKgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_142.setTransform(284.8,-87.625);
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FEC8C3").s().p("AAVAkIAAgkQAAgVgTAAQgKAAgGAGQgGAHAAAJIAAAjIgSAAIAAhFIASAAIAAAPQAIgRAUAAQAfAAAAAhIAAAmg");
	this.shape_143.setTransform(275.375,-86.25);
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FEC8C3").s().p("AgfAgQgHgGgBgKQAAgKAJgGQAHgEASgBIAZgDIAAgBQAAgPgSAAQgSAAgCANIgSAAQABgLALgHQAJgHARAAQAjAAABAdIAAAUQAAAOACAIIgSAAIgBgMQgIAOgXAAQgNAAgIgFgAgDAEQgKABgDACQgEADAAAFQAAAKAQAAQAKAAAHgFQAHgFAAgJIAAgEg");
	this.shape_144.setTransform(265.5,-86.15);
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FEC8C3").s().p("AgLAXIAAghIgRAAIAAgMIARAAIAAgSIAQgHIAAAZIAYAAIAAAMIgYAAIAAAeQAAANANAAIALgBIAAAOQgGACgIAAQgaAAAAgZg");
	this.shape_145.setTransform(257.55,-87.3);
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FEC8C3").s().p("AAVAkIAAgkQAAgVgTAAQgKAAgGAGQgGAHAAAJIAAAjIgSAAIAAhFIASAAIAAAPQAIgRAUAAQAfAAAAAhIAAAmg");
	this.shape_146.setTransform(249.675,-86.25);
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FEC8C3").s().p("AgfAgQgIgGABgKQgBgKAJgGQAHgEASgBIAYgDIAAgBQAAgPgSAAQgRAAgBANIgTAAQABgLAKgHQALgHAPAAQAlAAgBAdIAAAUQAAAOACAIIgSAAIgBgMQgHAOgXAAQgNAAgIgFgAgDAEQgKABgDACQgEADAAAFQAAAKAQAAQAKAAAHgFQAHgFAAgJIAAgEg");
	this.shape_147.setTransform(239.8,-86.15);
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FEC8C3").s().p("AgdAsQgNgHgEgNIAQgIQAIAVAZAAQAZAAAAgOQAAgHgEgDQgFgEgKgBIgUgDQgegFAAgWQAAgOAMgIQALgIATAAQAkAAAKAZIgPAIQgHgSgZAAQgJAAgHADQgFAEAAAGQAAAHADACQAEAEAKABIAUADQAQADAHAFQAIAHAAANQAAAOgLAIQgMAKgVgBQgTABgNgJg");
	this.shape_148.setTransform(230,-87.6);
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FEC8C3").s().p("AgdAbQgMgKAAgRQAAgQAMgKQALgKASAAQATAAALAKQAMAKAAAQQAAARgMAKQgLAKgTAAQgSAAgLgKgAgQgRQgGAGAAALQAAALAGAHQAGAGAKAAQALAAAGgGQAGgHAAgLQAAgLgGgGQgGgGgLAAQgKAAgGAGg");
	this.shape_149.setTransform(215.825,-86.15);
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FEC8C3").s().p("AgoAyIAAhhIASAAIAAANQAIgPAUAAQAQAAAJAKQAKALAAAQQAAAQgKAKQgKAKgQAAQgIAAgIgDQgHgEgEgGIAAAngAgQgeQgGAGAAALIAAADQAAAKAGAFQAGAGAKAAQAKAAAGgGQAHgGAAgLQAAgLgHgGQgFgHgLAAQgJAAgHAGg");
	this.shape_150.setTransform(206.55,-84.875);
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FEC8C3").s().p("AglAFIAAgoIASAAIAAAmQgBATATAAQAKAAAGgHQAFgGAAgJIAAgjIASAAIAABFIgRAAIAAgPQgDAIgJAFQgHAEgJAAQgeAAAAgfg");
	this.shape_151.setTransform(196.25,-86.05);
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FEC8C3").s().p("AgXAkIAAhFIARAAIAAASQACgJAGgFQAHgGAKAAIAFAAIAAARIgGgBQgLAAgGAHQgGAGAAAOIAAAcg");
	this.shape_152.setTransform(188.825,-86.25);
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FEC8C3").s().p("AgmAlQgNgOAAgXQAAgWAPgPQAPgPAYAAQAUAAANAKQAMAJADANIgTADQgCgIgHgGQgJgGgMAAQgPAAgJAKQgKAKAAARQAAARAKAKQAJAKAPAAQAQAAAJgJQAHgGABgLIAAgBIgiAAIAAgNIAzAAIAAA1IgOAAIgCgRQgEAJgKAFQgKAFgMAAQgYAAgOgPg");
	this.shape_153.setTransform(179.175,-87.6);
	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FEC8C3").s().p("AgcAbQgLgJAAgSQAAgQALgKQALgKARAAQATAAALAJQAKAJAAARIAAAGIg+AAQABAIAGAFQAHAGAKAAQAQAAAHgMIAOAGQgLATgbAAQgSAAgLgKgAgPgUQgGAFgBAJIAsAAIAAgBQAAgIgGgFQgGgFgKAAQgJABgGAEg");
	this.shape_154.setTransform(164.425,-86.15);
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FEC8C3").s().p("AgeAqQgKgLAAgQQAAgQAKgKQALgKAQAAQARAAAKANIAAgrIARAAIAABlIgRAAIAAgNQgIAPgUAAQgQAAgKgKgAgQgCQgFAFAAAMQAAALAGAGQAGAHAJAAQALAAAGgGQAHgGAAgKIAAgEQgBgKgGgFQgGgGgLAAQgJAAgHAGg");
	this.shape_155.setTransform(154.6,-87.625);
	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FEC8C3").s().p("AgfAgQgIgGAAgKQAAgKAJgGQAHgEASgBIAYgDIAAgBQAAgPgSAAQgRAAgBANIgTAAQABgLAKgHQALgHAPAAQAlAAgBAdIAAAUQABAOABAIIgSAAIgBgMQgHAOgXAAQgNAAgIgFgAgDAEQgJABgEACQgEADAAAFQAAAKAQAAQAKAAAHgFQAHgFAAgJIAAgEg");
	this.shape_156.setTransform(140.7,-86.15);
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FEC8C3").s().p("AgIAyIAAhFIARAAIAABFgAgJgfIAAgSIATAAIAAASg");
	this.shape_157.setTransform(134.025,-87.625);
	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FEC8C3").s().p("AgcAbQgLgKAAgRQAAgQALgKQALgKATAAQAhAAAFAaIgSACQgDgOgSAAQgKAAgFAFQgHAGAAALQAAALAHAGQAFAGALABQARgBADgPIASAEQgDALgKAIQgKAGgPAAQgTAAgLgKg");
	this.shape_158.setTransform(127.45,-86.15);
	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FEC8C3").s().p("AAVAkIAAgkQAAgVgTAAQgKAAgGAGQgGAHAAAJIAAAjIgSAAIAAhFIASAAIAAAPQAIgRAUAAQAfAAAAAhIAAAmg");
	this.shape_159.setTransform(118.125,-86.25);
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FEC8C3").s().p("AgcAbQgLgJAAgSQAAgQALgKQALgKARAAQATAAALAJQAKAJAAARIAAAGIg+AAQABAIAGAFQAHAGAKAAQAQAAAHgMIAOAGQgLATgbAAQgSAAgLgKgAgPgUQgGAFgBAJIAsAAIAAgBQAAgIgGgFQgGgFgKAAQgJABgGAEg");
	this.shape_160.setTransform(108.475,-86.15);
	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FEC8C3").s().p("AgJAjIgghFIAUAAIATAuIACAIIADgIIAUguIATAAIggBFg");
	this.shape_161.setTransform(99.7,-86.15);
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FEC8C3").s().p("AgIAzIAAhlIARAAIAABlg");
	this.shape_162.setTransform(93.35,-87.725);
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FEC8C3").s().p("AgdAbQgMgKAAgRQAAgQAMgKQALgKASAAQATAAALAKQAMAKAAAQQAAARgMAKQgLAKgTAAQgSAAgLgKgAgQgRQgGAGAAALQAAALAGAHQAGAGAKAAQALAAAGgGQAGgHAAgLQAAgLgGgGQgGgGgLAAQgKAAgGAGg");
	this.shape_163.setTransform(86.625,-86.15);
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FEC8C3").s().p("AgkASIAMgGQAIANAUgBQARABAAgKQAAgDgDgCIgIgDIgUgCQgXgDAAgQQAAgKAJgGQAJgGAPAAQAcAAAJAQIgLAHQgIgLgSABQgQgBAAAJQAAAGAKABIAVADQAWADAAAQQAAALgIAGQgJAGgRAAQgdAAgKgTg");
	this.shape_164.setTransform(77.625,-86.15);
	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FEC8C3").s().p("AgfAgQgIgGAAgKQAAgKAJgGQAHgEASgBIAZgDIAAgBQgBgPgRAAQgSAAgBANIgTAAQABgLALgHQAKgHAQAAQAkAAAAAdIAAAUQAAAOABAIIgSAAIAAgMQgJAOgWAAQgNAAgIgFgAgDAEQgJABgEACQgEADAAAFQAAAKAQAAQAKAAAHgFQAHgFAAgJIAAgEg");
	this.shape_165.setTransform(64.1,-86.15);
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FEC8C3").s().p("AgIAzIAAhlIARAAIAABlg");
	this.shape_166.setTransform(57.45,-87.725);
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FEC8C3").s().p("AgjAxIAAgPIAIABQAOAAAFgMIABgDIgihEIAUAAIAVAuIABAHIAAAAIACgGIAUgvIATAAIghBIQgGAOgIAFQgHAHgNAAg");
	this.shape_167.setTransform(46.65,-84.7);
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FEC8C3").s().p("AgdAbQgMgKAAgRQAAgQAMgKQALgKASAAQATAAALAKQAMAKAAAQQAAARgMAKQgLAKgTAAQgSAAgLgKgAgQgRQgGAGAAALQAAALAGAHQAGAGAKAAQALAAAGgGQAGgHAAgLQAAgLgGgGQgGgGgLAAQgKAAgGAGg");
	this.shape_168.setTransform(33.275,-86.15);
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FEC8C3").s().p("AgeAqQgKgLAAgQQAAgQAKgKQALgKAQAAQARAAAJANIAAgrIASAAIAABlIgRAAIAAgNQgJAPgTAAQgQAAgKgKgAgPgCQgHAFABAMQAAALAGAGQAGAHAJAAQALAAAGgGQAHgGgBgKIAAgEQAAgKgGgFQgGgGgLAAQgKAAgFAGg");
	this.shape_169.setTransform(23.3,-87.625);
	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FEC8C3").s().p("AgIAzIAAhlIARAAIAABlg");
	this.shape_170.setTransform(16.6,-87.725);
	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FEC8C3").s().p("AgfAgQgHgGAAgKQAAgKAIgGQAIgEARgBIAYgDIAAgBQABgPgTAAQgRAAgCANIgSAAQABgLAKgHQAKgHAQAAQAkAAAAAdIAAAUQABAOACAIIgSAAIgBgMQgJAOgWAAQgNAAgIgFgAgDAEQgJABgEACQgEADAAAFQAAAKAQAAQAKAAAHgFQAHgFAAgJIAAgEg");
	this.shape_171.setTransform(9.7,-86.15);
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FEC8C3").s().p("AgoAyIAAhhIARAAIAAANQAJgPAUAAQAQAAAJAKQAKALAAAQQAAAQgKAKQgKAKgQAAQgIAAgIgDQgHgEgEgGIAAAngAgQgeQgGAGgBALIAAADQABAKAGAFQAGAGAKAAQAKAAAGgGQAHgGgBgLQABgLgHgGQgFgHgLAAQgJAAgHAGg");
	this.shape_172.setTransform(0.55,-84.875);
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FEC8C3").s().p("AgkASIAMgGQAIANAUgBQARABAAgKQAAgDgDgCIgIgDIgUgCQgXgDAAgQQAAgKAJgGQAJgGAPAAQAcAAAJAQIgLAHQgIgLgSABQgQgBAAAJQAAAGAKABIAVADQAWADAAAQQAAALgIAGQgJAGgRAAQgdAAgKgTg");
	this.shape_173.setTransform(-9.075,-86.15);
	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FEC8C3").s().p("AgcAbQgLgJAAgSQAAgQALgKQALgKARAAQATAAALAJQAKAJAAARIAAAGIg+AAQABAIAGAFQAHAGAKAAQAQAAAHgMIAOAGQgLATgbAAQgSAAgLgKgAgPgUQgGAFgBAJIAsAAIAAgBQAAgIgGgFQgGgFgKAAQgJABgGAEg");
	this.shape_174.setTransform(-17.875,-86.15);
	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FEC8C3").s().p("AgXAkIAAhFIARAAIAAASQACgJAGgFQAHgGAKAAIAFAAIAAARIgGgBQgLAAgGAHQgGAGAAAOIAAAcg");
	this.shape_175.setTransform(-25.025,-86.25);
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FEC8C3").s().p("AgIAzIAAhlIARAAIAABlg");
	this.shape_176.setTransform(-35.2,-87.725);
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FEC8C3").s().p("AgcAbQgLgJAAgSQAAgQALgKQALgKARAAQATAAALAJQAKAJAAARIAAAGIg+AAQABAIAGAFQAHAGAKAAQAQAAAHgMIAOAGQgLATgbAAQgSAAgLgKgAgPgUQgGAFgBAJIAsAAIAAgBQAAgIgGgFQgGgFgKAAQgJABgGAEg");
	this.shape_177.setTransform(-41.875,-86.15);
	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FEC8C3").s().p("AAVAkIAAgkQAAgVgTAAQgKAAgGAGQgGAHAAAJIAAAjIgSAAIAAhFIASAAIAAAPQAIgRAUAAQAfAAAAAhIAAAmg");
	this.shape_178.setTransform(-55.725,-86.25);
	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FEC8C3").s().p("AgdAbQgMgKAAgRQAAgQAMgKQALgKASAAQATAAALAKQAMAKAAAQQAAARgMAKQgLAKgTAAQgSAAgLgKgAgQgRQgGAGAAALQAAALAGAHQAGAGAKAAQALAAAGgGQAGgHAAgLQAAgLgGgGQgGgGgLAAQgKAAgGAGg");
	this.shape_179.setTransform(-65.425,-86.15);
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FEC8C3").s().p("AglAlQgOgOAAgXQAAgXAPgOQAOgPAZAAQAUAAANAKQANAKADAQIgUAEQgCgMgIgGQgIgGgMgBQgPAAgJALQgJAJAAARQAAAQAJAKQAJALAPAAQAMAAAIgGQAIgGADgLIATAEQgFAQgMAJQgNAJgUAAQgZAAgOgPg");
	this.shape_180.setTransform(-75.725,-87.6);
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FEC8C3").s().p("AgdAbQgMgKAAgRQAAgQAMgKQALgKASAAQATAAALAKQAMAKAAAQQAAARgMAKQgLAKgTAAQgSAAgLgKgAgQgRQgGAGAAALQAAALAGAHQAGAGAKAAQALAAAGgGQAGgHAAgLQAAgLgGgGQgGgGgLAAQgKAAgGAGg");
	this.shape_181.setTransform(157.725,-104.5);
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FEC8C3").s().p("AArAkIAAgmQAAgTgQAAQgIAAgFAFQgFAGAAAJIAAAlIgRAAIAAgmQAAgTgQAAQgIAAgFAFQgFAGAAAKIAAAkIgSAAIAAhFIARAAIAAAOQAHgQATAAQASAAAGAQQAIgQATAAQANAAAHAIQAHAHAAAQIAAAog");
	this.shape_182.setTransform(145.975,-104.6);
	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FEC8C3").s().p("AgIAyIAAhFIARAAIAABFgAgJgfIAAgSIATAAIAAASg");
	this.shape_183.setTransform(136.525,-105.975);
	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FEC8C3").s().p("AAUAjIgQgUIgEgGIgFAGIgQAUIgUAAIAfgjIgegiIAWAAIAPASIADAHIAAAAIAEgHIAPgSIAVAAIgdAiIAfAjg");
	this.shape_184.setTransform(130.125,-104.5);
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FEC8C3").s().p("AgfAuQgHgFgBgKQABgLAIgFQAIgFARgBIAZgDIAAgBQAAgOgSAAQgSAAgCAMIgSAAQABgLALgHQAJgGARAAQAjAAABAcIAAAUQAAAPACAIIgSAAIgBgNQgJAPgWAAQgNAAgIgGgAgDATQgJABgEACQgEADAAAFQAAAKAQAAQAKAAAHgFQAHgGAAgJIAAgDgAgFgeIARgVIATAAIgWAVg");
	this.shape_185.setTransform(120.95,-105.975);
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FEC8C3").s().p("AArAkIAAgmQAAgTgQAAQgIAAgFAFQgFAGAAAJIAAAlIgRAAIAAgmQAAgTgQAAQgIAAgFAFQgFAGAAAKIAAAkIgSAAIAAhFIARAAIAAAOQAHgQATAAQASAAAGAQQAIgQATAAQANAAAHAIQAHAHAAAQIAAAog");
	this.shape_186.setTransform(109.325,-104.6);
	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FEC8C3").s().p("AgcAbQgLgJAAgSQAAgQALgKQALgKARAAQATAAALAJQAKAJAAARIAAAGIg+AAQABAJAGAEQAHAGAKAAQAQAAAHgMIAOAGQgLATgbAAQgSAAgLgKgAgPgUQgGAFgBAJIAsAAIAAAAQAAgJgGgFQgGgFgKABQgJAAgGAEg");
	this.shape_187.setTransform(92.925,-104.5);
	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FEC8C3").s().p("AgLAXIAAghIgRAAIAAgNIARAAIAAgRIAQgHIAAAYIAYAAIAAANIgYAAIAAAeQAAANANAAIALgBIAAAOQgGACgIAAQgaAAAAgZg");
	this.shape_188.setTransform(85,-105.65);
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FEC8C3").s().p("AgXAkIAAhFIARAAIAAATQACgKAGgFQAHgGAKAAIAFAAIAAARIgGgBQgLAAgGAHQgGAGAAAOIAAAcg");
	this.shape_189.setTransform(79.325,-104.6);
	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FEC8C3").s().p("AgdAbQgMgKAAgRQAAgQAMgKQALgKASAAQATAAALAKQAMAKAAAQQAAARgMAKQgLAKgTAAQgSAAgLgKgAgQgRQgGAGAAALQAAALAGAHQAGAGAKAAQALAAAGgGQAGgHAAgLQAAgLgGgGQgGgGgLAAQgKAAgGAGg");
	this.shape_190.setTransform(71.125,-104.5);
	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FEC8C3").s().p("AgoAyIAAhhIARAAIAAANQAJgPAUAAQAQAAAJAKQAKALAAAQQAAAQgKAKQgKAKgQAAQgIAAgIgDQgHgEgEgGIAAAngAgQgeQgGAGgBALIAAADQABAKAGAFQAGAGAKAAQAKAAAHgGQAFgGAAgLQAAgLgFgGQgHgHgKAAQgKAAgGAGg");
	this.shape_191.setTransform(61.85,-103.225);
	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FEC8C3").s().p("AArAkIAAgmQAAgTgQAAQgIAAgFAFQgFAGAAAJIAAAlIgRAAIAAgmQAAgTgQAAQgIAAgFAFQgFAGAAAKIAAAkIgSAAIAAhFIARAAIAAAOQAHgQATAAQASAAAGAQQAIgQATAAQANAAAHAIQAHAHAAAQIAAAog");
	this.shape_192.setTransform(49.475,-104.6);
	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FEC8C3").s().p("AgIAyIAAhFIARAAIAABFgAgJgfIAAgSIATAAIAAASg");
	this.shape_193.setTransform(40.025,-105.975);
	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FEC8C3").s().p("AAVAkIAAgkQAAgVgTAAQgKAAgGAHQgGAGAAAJIAAAjIgSAAIAAhFIASAAIAAAPQAIgRAUAAQAfAAAAAhIAAAmg");
	this.shape_194.setTransform(28.625,-104.6);
	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FEC8C3").s().p("AgIAyIAAhFIARAAIAABFgAgJgfIAAgSIATAAIAAASg");
	this.shape_195.setTransform(21.425,-105.975);
	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FEC8C3").s().p("AgkASIAMgGQAIANAUgBQARABAAgKQAAgDgDgCIgIgDIgUgCQgXgDAAgQQAAgLAJgFQAJgGAPAAQAcAAAJAPIgLAIQgIgKgSAAQgQgBAAAJQAAAHAKAAIAVADQAWADAAAQQAAALgIAGQgJAGgRAAQgdAAgKgTg");
	this.shape_196.setTransform(15.025,-104.5);
	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FEC8C3").s().p("AgjAxIAAgPIAIABQAOAAAFgMIABgDIgihFIAUAAIAVAvIABAHIABAAIABgGIAUgwIATAAIghBJQgGAOgIAFQgHAHgNgBg");
	this.shape_197.setTransform(2.1,-103.05);
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FEC8C3").s().p("AgZAoQgMgKgEgRIgLAAIAAgJIAKAAIgBgFIABgDIgKAAIAAgJIALAAQADgRANgKQAOgKAUAAQAgAAAMAWIgRAHQgIgPgUAAQgYAAgGAXIAvAAIAAAJIgxAAIAAADIAAAFIAxAAIAAAJIgvAAQADAKAIAHQAIAGAMAAQATAAAJgPIAQAGQgNAYggAAQgUAAgNgLg");
	this.shape_198.setTransform(-12.325,-105.85);
	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FEC8C3").s().p("AADAxIAAhHQgEAHgPAAIgFAAIAAgQIAEAAQASAAAFgRIAPAAIAABhg");
	this.shape_199.setTransform(-26,-105.875);
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FEC8C3").s().p("AgcAbQgLgJAAgSQAAgQALgKQALgKARAAQATAAALAJQAKAJAAARIAAAGIg+AAQABAJAGAEQAHAGAKAAQAQAAAHgMIAOAGQgLATgbAAQgSAAgLgKgAgPgUQgGAFgBAJIAsAAIAAAAQAAgJgGgFQgGgFgKABQgJAAgGAEg");
	this.shape_200.setTransform(-37.675,-104.5);
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FEC8C3").s().p("AgeAqQgKgLAAgQQAAgQAKgKQALgKAPAAQATAAAIANIAAgrIASAAIAABlIgRAAIAAgNQgIAPgVAAQgPAAgKgKgAgPgCQgHAFAAAMQABALAGAGQAGAHAKAAQAKAAAHgGQAFgGAAgKIAAgEQABgKgHgFQgGgGgLAAQgKAAgFAGg");
	this.shape_201.setTransform(-47.5,-105.975);
	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FEC8C3").s().p("AgkASIAMgGQAIANAUgBQARABAAgKQAAgDgDgCIgIgDIgUgCQgXgDAAgQQAAgLAJgFQAJgGAPAAQAcAAAJAPIgLAIQgIgKgSAAQgQgBAAAJQAAAHAKAAIAVADQAWADAAAQQAAALgIAGQgJAGgRAAQgdAAgKgTg");
	this.shape_202.setTransform(-56.425,-104.5);
	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FEC8C3").s().p("AgcAbQgLgJAAgSQAAgQALgKQALgKARAAQATAAALAJQAKAJAAARIAAAGIg+AAQABAJAGAEQAHAGAKAAQAQAAAHgMIAOAGQgLATgbAAQgSAAgLgKgAgPgUQgGAFgBAJIAsAAIAAAAQAAgJgGgFQgGgFgKABQgJAAgGAEg");
	this.shape_203.setTransform(-65.225,-104.5);
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FEC8C3").s().p("AgwAyIAAhjIAtAAQAYAAAOANQAOAOAAAWQAAAWgOAOQgPAOgXAAgAgdAjIAZAAQAPAAAKgKQAJgKAAgPQAAgQgKgJQgJgJgPAAIgZAAg");
	this.shape_204.setTransform(-75.125,-105.975);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt4, new cjs.Rectangle(-83.4,-117,435.4,75.3), null);
(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC8C3").s().p("AAOAxIAAgaIg4AAIAAgHIA2hAIAMAAIAAA/IATAAIAAAIIgTAAIAAAagAAHgbIgcAgIgJAKIAsAAIAAgoIABgNIgBAAIgHALg");
	this.shape.setTransform(66.55,17.975);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC8C3").s().p("AgmAyIAAgJQAggQAQgPQAJgHADgGQAEgHAAgIQAAgKgGgGQgHgGgNAAQgLAAgHAGQgIAGAAAKIABAIIgKgCIgBgHQAAgNAKgIQAKgJAQAAQASAAAKAJQAJAIAAAOQAAASgVARQgQANgWAKIA9AAIAAAKg");
	this.shape_1.setTransform(57.325,17.875);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEC8C3").s().p("AgeAmQgMgOAAgYQAAgXAMgOQALgNATAAQAUAAAMANQALAOAAAXQAAAYgLAOQgMANgUAAQgTAAgLgNgAgXgeQgJALAAATQAAAUAJALQAIAMAPAAQAQAAAIgMQAJgLAAgUQAAgTgJgLQgIgLgQAAQgPAAgIALg");
	this.shape_2.setTransform(47.75,17.975);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC8C3").s().p("AgmAyIAAgJQAggQAQgPQAJgHADgGQAEgHAAgIQAAgKgGgGQgHgGgNAAQgLAAgHAGQgIAGAAAKIABAIIgKgCIgBgHQAAgNAKgIQAKgJAQAAQASAAAKAJQAJAIAAAOQAAASgVARQgQANgWAKIA9AAIAAAKg");
	this.shape_3.setTransform(38.025,17.875);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC8C3").s().p("AgdA9IAxh5IAKAAIgxB5g");
	this.shape_4.setTransform(29.9,18.35);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEC8C3").s().p("AgmAyIAAgJQAggQAQgPQAJgHADgGQAEgHAAgIQAAgKgGgGQgHgGgNAAQgLAAgHAGQgIAGAAAKIABAIIgKgCIgBgHQAAgNAKgIQAKgJAQAAQASAAAKAJQAJAIAAAOQAAASgVARQgQANgWAKIA9AAIAAAKg");
	this.shape_5.setTransform(21.625,17.875);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEC8C3").s().p("AgeAmQgMgOAAgYQAAgXAMgOQALgNATAAQAUAAAMANQALAOAAAXQAAAYgLAOQgMANgUAAQgTAAgLgNgAgXgeQgIALAAATQAAAUAIALQAJAMAOAAQAPAAAJgMQAIgLABgUQgBgTgIgLQgJgLgPAAQgOAAgJALg");
	this.shape_6.setTransform(12.05,17.975);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEC8C3").s().p("AgdA9IAxh5IAKAAIgxB5g");
	this.shape_7.setTransform(3.3,18.35);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEC8C3").s().p("AAOAxIAAgaIg4AAIAAgHIA2hAIAMAAIAAA/IATAAIAAAIIgTAAIAAAagAAHgbIgcAgIgJAKIAsAAIAAgoIAAgNIAAAAIgHALg");
	this.shape_8.setTransform(-5.05,17.975);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEC8C3").s().p("AAIAxIAAhOQgDAEgFACQgGADgHAAIgEAAIAAgKIACAAQAKAAAFgFQAHgEACgJIAJAAIAABhg");
	this.shape_9.setTransform(-13.3,17.975);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEC8C3").s().p("AgEAzIAAhlIAJAAIAABlg");
	this.shape_10.setTransform(-22.2,17.775);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEC8C3").s().p("AgbAcQgKgKAAgRQAAgSAKgKQALgJAQgBQASABAKAIQAKAJAAARIAAAFIhBAAQAAAMAIAHQAHAGANABQAUAAAIgQIAIADQgJAWgbAAQgSAAgKgKgAgTgWQgIAHAAALIA3AAIAAgBQgBgMgHgFQgIgHgMAAQgMABgHAGg");
	this.shape_11.setTransform(-28.7,19.35);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEC8C3").s().p("AgcAfQgIgFAAgJQAAgKAIgFQAHgFASgBIAcgCIAAgDQAAgTgYAAQgWAAgCAQIgLAAQABgLAKgHQAKgGAOgBQAiAAAAAdIAAATQAAAPACAJIgKAAIgBgOQgJARgZAAQgNgBgHgGgAgEADQgMABgFADQgEAEAAAFQgBANAVAAQANAAAJgGQAIgHAAgLIAAgFg");
	this.shape_12.setTransform(-42.45,19.35);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEC8C3").s().p("AgIAYIAAgnIgRAAIAAgIIARAAIAAgTIAIgEIAAAXIAaAAIAAAIIgaAAIAAAnQAAAOAPAAIALgBIAAAIQgGACgHAAQgWAAABgXg");
	this.shape_13.setTransform(-50,18.275);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC8C3").s().p("AgiAPIAKgCQAFAQAXAAQAVAAAAgNQAAgFgDgCQgDgDgHgBIgWgCQgVgDAAgPQAAgKAIgGQAJgFAOgBQAdABAFATIgJADQgFgOgVAAQgUAAAAAMQAAAJANACIAWACQAVADAAAPQAAALgIAFQgIAHgQAAQgdAAgIgXg");
	this.shape_14.setTransform(-57.125,19.35);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEC8C3").s().p("AgdAfQgHgFAAgJQAAgKAHgFQAIgFASgBIAcgCIAAgDQAAgTgXAAQgXAAgCAQIgKAAQAAgLAKgHQAKgGAPgBQAhAAAAAdIAAATQAAAPACAJIgKAAIgBgOQgJARgZAAQgNgBgIgGgAgEADQgMABgFADQgEAEAAAFQgBANAVAAQANAAAJgGQAIgHAAgLIAAgFg");
	this.shape_15.setTransform(-65.95,19.35);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEC8C3").s().p("AAhAyIAAguIhBAAIAAAuIgLAAIAAhjIALAAIAAAsIBBAAIAAgsIAMAAIAABjg");
	this.shape_16.setTransform(-76.4,17.875);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEC8C3").s().p("AAXAzIgagmIgVAQIAAAWIgKAAIAAhlIAKAAIAABEIArgkIAOAAIgeAYIAgAtg");
	this.shape_17.setTransform(316.225,-1.575);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEC8C3").s().p("AAZAkIAAglQAAgagXAAQgLABgIAHQgIAIAAAMIAAAjIgJAAIAAhFIAJAAIAAAQQAIgSAWAAQAfAAAAAgIAAAng");
	this.shape_18.setTransform(306.55,-0.1);
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEC8C3").s().p("AgdAfQgHgFAAgJQAAgKAHgFQAIgFASgBIAcgCIAAgDQAAgTgXAAQgXAAgCAQIgKAAQABgLAJgHQAKgGAPgBQAhAAAAAdIAAATQAAAPACAJIgLAAIgBgOQgIARgZAAQgMgBgJgGgAgEADQgMABgEADQgFAEgBAFQABANAUAAQANAAAIgGQAJgHAAgLIAAgFg");
	this.shape_19.setTransform(296.9,0);
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEC8C3").s().p("AgcAjIgBAPIgJAAIAAhlIAKAAIAAAvQAEgJAIgEQAJgFAKAAQAQAAAKAKQAKAKAAARQAAAQgLALQgKAKgQAAQgWAAgIgRgAgUgFQgIAGAAAMIAAAEQAAAMAIAGQAHAIANAAQANAAAHgIQAIgHAAgNQAAgOgHgGQgIgIgNAAQgMAAgIAIg");
	this.shape_20.setTransform(287.95,-1.45);
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEC8C3").s().p("AAZAkIAAglQABgagYAAQgMABgHAHQgIAIAAAMIAAAjIgKAAIAAhFIAKAAIAAAQQAIgSAWAAQAfAAgBAgIAAAng");
	this.shape_21.setTransform(277.9,-0.1);
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEC8C3").s().p("AgbAcQgKgKAAgRQAAgSAKgKQALgJAQgBQASABAKAIQAKAJAAARIAAAFIhBAAQAAAMAIAHQAIAGAMABQAUAAAIgQIAIADQgJAWgbAAQgSAAgKgKgAgTgWQgIAHAAALIA3AAIAAgBQgBgMgHgFQgIgHgMAAQgLABgIAGg");
	this.shape_22.setTransform(268.4,0);
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEC8C3").s().p("AgmAyIAAhhIAKAAIAAAQQAEgJAIgEQAJgFAKAAQAQAAAKAKQAKAKAAARQAAAQgKALQgLAKgQAAQgJAAgJgFQgIgEgEgHIAAApgAgUggQgIAHAAAMIAAAEQAAALAIAGQAIAIAMAAQANAAAIgIQAHgHAAgNQAAgNgHgHQgHgIgOAAQgMAAgIAIg");
	this.shape_23.setTransform(259.475,1.25);
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEC8C3").s().p("AglAmQgPgOAAgYQAAgXAPgPQAOgOAXAAQAYAAAOAOQAPAPAAAXQAAAYgPAPQgOAOgYAAQgXAAgOgPgAgdgfQgLAMAAATQAAAUALAMQAMALARAAQATAAALgLQALgMAAgUQAAgTgLgMQgLgLgTAAQgRAAgMALg");
	this.shape_24.setTransform(248.35,-1.475);
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEC8C3").s().p("AgdAfQgHgFAAgJQAAgKAHgFQAIgFASgBIAcgCIAAgDQAAgTgXAAQgWAAgDAQIgKAAQABgLAJgHQAKgGAPgBQAhAAAAAdIAAATQAAAPACAJIgKAAIgCgOQgIARgZAAQgMgBgJgGgAgEADQgMABgFADQgEAEAAAFQAAANAUAAQANAAAIgGQAJgHAAgLIAAgFg");
	this.shape_25.setTransform(233.2,0);
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEC8C3").s().p("AAFAfIAAgyIgFAEQgDACgFAAIgDAAIAAgGIACAAQAGAAADgEQAFgCABgGIAGAAIAAA+g");
	this.shape_26.setTransform(221.725,-4.55);
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEC8C3").s().p("AgiAPIAKgCQAFAQAXAAQAVAAAAgNQAAgFgDgCQgDgDgHgBIgWgCQgVgDAAgPQAAgKAIgGQAJgFAOgBQAdABAFATIgJADQgFgOgVAAQgUAAAAAMQAAAJANACIAWACQAVADAAAPQAAALgIAFQgIAHgQAAQgdAAgIgXg");
	this.shape_27.setTransform(216.025,0);
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEC8C3").s().p("AgbAcQgKgKAAgRQAAgSAKgKQALgJAQgBQASABAKAIQAKAJAAARIAAAFIhBAAQAAAMAIAHQAHAGANABQAVAAAHgQIAIADQgJAWgcAAQgQAAgLgKgAgTgWQgIAHAAALIA2AAIAAgBQAAgMgHgFQgIgHgMAAQgMABgHAGg");
	this.shape_28.setTransform(207.35,0);
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEC8C3").s().p("AgEAzIAAhlIAJAAIAABlg");
	this.shape_29.setTransform(200.95,-1.575);
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEC8C3").s().p("AgdAfQgHgFAAgJQAAgKAHgFQAIgFASgBIAcgCIAAgDQAAgTgXAAQgXAAgCAQIgKAAQABgLAJgHQAKgGAPgBQAhAAAAAdIAAATQAAAPACAJIgLAAIgBgOQgIARgZAAQgMgBgJgGgAgEADQgMABgFADQgEAEgBAFQABANAUAAQANAAAIgGQAJgHAAgLIAAgFg");
	this.shape_30.setTransform(194.3,0);
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEC8C3").s().p("AgiAEIAAgnIAKAAIAAAnQAAAXAWABQAMAAAIgJQAHgIAAgLIAAgjIAKAAIAABFIgJAAIAAgRQgEAJgIAFQgIAFgKAAQgeAAAAggg");
	this.shape_31.setTransform(184.925,0.1);
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEC8C3").s().p("AgiAPIAKgCQAFAQAXAAQAVAAAAgNQAAgFgDgCQgDgDgHgBIgWgCQgVgDAAgPQAAgKAIgGQAJgFAOgBQAdABAFATIgJADQgFgOgVAAQgUAAAAAMQAAAJANACIAWACQAVADAAAPQAAALgIAFQgIAHgQAAQgdAAgIgXg");
	this.shape_32.setTransform(176.025,0);
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEC8C3").s().p("AAaAkIAAglQAAgagYAAQgLABgIAHQgIAIAAAMIAAAjIgJAAIAAhFIAJAAIAAAQQAIgSAWAAQAfAAAAAgIAAAng");
	this.shape_33.setTransform(167.15,-0.1);
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEC8C3").s().p("AgbAcQgKgKAAgRQAAgSAKgKQAKgJARgBQASABAKAIQAKAJAAARIAAAFIhBAAQABAMAHAHQAIAGAMABQAUAAAHgQIAJADQgJAWgcAAQgRAAgKgKgAgTgWQgHAHgBALIA2AAIAAgBQABgMgJgFQgGgHgNAAQgLABgIAGg");
	this.shape_34.setTransform(157.65,0);
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEC8C3").s().p("AAwAkIAAgnQAAgYgUAAQgKAAgHAHQgGAGAAALIAAAnIgJAAIAAgoQAAgWgUgBQgKABgHAGQgGAIAAALIAAAlIgJAAIAAhFIAJAAIAAAPQAGgRAUAAQAUAAAEARQAIgRATAAQAbAAAAAfIAAAog");
	this.shape_35.setTransform(146.3,-0.1);
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEC8C3").s().p("AgiAPIAKgCQAFAQAXAAQAVAAAAgNQAAgFgDgCQgDgDgHgBIgWgCQgVgDAAgPQAAgKAIgGQAJgFAOgBQAdABAFATIgJADQgFgOgVAAQgUAAAAAMQAAAJANACIAWACQAVADAAAPQAAALgIAFQgIAHgQAAQgdAAgIgXg");
	this.shape_36.setTransform(130.225,0);
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEC8C3").s().p("AgcAcQgKgLAAgRQAAgQAKgLQALgJARgBQASABAKAJQALALAAAQQAAARgLALQgKAJgSABQgRgBgLgJgAgUgUQgIAHAAANQAAAOAIAHQAHAIANAAQANAAAIgIQAIgHAAgOQAAgNgIgHQgIgIgNAAQgNAAgHAIg");
	this.shape_37.setTransform(121.525,0);
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEC8C3").s().p("AgiAPIAKgCQAFAQAXAAQAVAAAAgNQAAgFgDgCQgDgDgHgBIgWgCQgVgDAAgPQAAgKAIgGQAJgFAOgBQAdABAFATIgJADQgFgOgVAAQgUAAAAAMQAAAJANACIAWACQAVADAAAPQAAALgIAFQgIAHgQAAQgdAAgIgXg");
	this.shape_38.setTransform(112.725,0);
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEC8C3").s().p("AgbAcQgKgKAAgRQAAgSAKgKQALgJAQgBQASABAKAIQAKAJAAARIAAAFIhBAAQAAAMAIAHQAHAGANABQAUAAAIgQIAIADQgJAWgbAAQgSAAgKgKgAgTgWQgIAHAAALIA3AAIAAgBQgBgMgHgFQgIgHgMAAQgMABgHAGg");
	this.shape_39.setTransform(104.05,0);
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEC8C3").s().p("AgTAkIAAhFIAJAAIAAAUQADgLAGgFQAGgGAKAAIAFAAIAAALIgFgBQgLAAgGAGQgIAJAAAQIAAAeg");
	this.shape_40.setTransform(97.325,-0.1);
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEC8C3").s().p("AgmAkQAAgLAMgEQgJgEAAgIQAAgJAMgDQgJgHAAgLQAAgLAIgHQAJgHAPAAQAJAAAIAEQADgMAPAAIAEAAIAAAJIgFAAQgJAAgDAGQAJAHAAALQAAALgJAGQgJAGgNAAQgKAAgIgCQgHABAAAGQAAAHALAAIAdAAQAXAAAAATQAAAWgmAAQgmAAAAgTgAgdAiQAAANAdAAQAcAAAAgNQAAgLgPAAIgbAAIgFAAQgKADAAAIgAgQghQgGAEAAAIQAAAHAGAFQAFAFALAAQAJAAAGgFQAGgEAAgIQAAgIgGgEQgGgFgJAAQgLAAgFAFg");
	this.shape_41.setTransform(89.525,0.925);
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEC8C3").s().p("AAZAkIAAglQABgagYAAQgMABgHAHQgIAIAAAMIAAAjIgKAAIAAhFIAKAAIAAAQQAIgSAWAAQAeAAAAAgIAAAng");
	this.shape_42.setTransform(80.25,-0.1);
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEC8C3").s().p("AgEAxIAAhFIAJAAIAABFgAgFggIAAgQIALAAIAAAQg");
	this.shape_43.setTransform(73.325,-1.425);
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEC8C3").s().p("AgcAcQgKgLAAgRQAAgQAKgLQALgJARgBQASABAKAJQALALAAAQQAAARgLALQgKAJgSABQgRgBgLgJgAgUgUQgIAHAAANQAAAOAIAHQAHAIANAAQANAAAIgIQAIgHAAgOQAAgNgIgHQgIgIgNAAQgNAAgHAIg");
	this.shape_44.setTransform(62.225,0);
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEC8C3").s().p("AgdAfQgHgFAAgJQAAgKAHgFQAIgFASgBIAcgCIAAgDQAAgTgXAAQgXAAgCAQIgKAAQAAgLAKgHQAKgGAPgBQAhAAAAAdIAAATQAAAPACAJIgKAAIgBgOQgJARgZAAQgNgBgIgGgAgEADQgMABgFADQgEAEAAAFQgBANAVAAQANAAAJgGQAIgHAAgLIAAgFg");
	this.shape_45.setTransform(48.35,0);
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEC8C3").s().p("AAaAkIAAglQAAgagYAAQgMABgHAHQgIAIAAAMIAAAjIgKAAIAAhFIAKAAIAAAQQAIgSAWAAQAeAAAAAgIAAAng");
	this.shape_46.setTransform(39.2,-0.1);
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEC8C3").s().p("AgEAxIAAhFIAJAAIAABFgAgFggIAAgQIALAAIAAAQg");
	this.shape_47.setTransform(32.275,-1.425);
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEC8C3").s().p("AAwAkIAAgnQAAgYgUAAQgKAAgHAHQgGAGAAALIAAAnIgJAAIAAgoQAAgWgUgBQgKABgHAGQgGAIAAALIAAAlIgJAAIAAhFIAJAAIAAAPQAGgRAUAAQAUAAAEARQAIgRATAAQAbAAAAAfIAAAog");
	this.shape_48.setTransform(23.45,-0.1);
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEC8C3").s().p("AgcAqQgKgKAAgRQAAgRAKgKQALgKARAAQASAAAKAKQALAKAAARQAAARgLAKQgKAKgSAAQgRAAgLgKgAgUgFQgIAGAAAOQAAANAIAHQAHAIANAAQANAAAIgIQAIgHAAgNQAAgOgIgGQgIgIgNAAQgNAAgHAIgAgEgeIAQgVIANAAIgUAVg");
	this.shape_49.setTransform(11.725,-1.45);
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEC8C3").s().p("AAaAkIAAglQAAgagYAAQgLABgIAHQgIAIAAAMIAAAjIgJAAIAAhFIAJAAIAAAQQAIgSAWAAQAfAAAAAgIAAAng");
	this.shape_50.setTransform(2.45,-0.1);
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEC8C3").s().p("AgiAEIAAgnIAKAAIAAAnQAAAXAWABQAMAAAIgJQAHgIAAgLIAAgjIAKAAIAABFIgJAAIAAgRQgEAJgIAFQgIAFgKAAQgeAAAAggg");
	this.shape_51.setTransform(-12.125,0.1);
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEC8C3").s().p("AgJAYIAAgnIgQAAIAAgIIAQAAIAAgTIAJgEIAAAXIAaAAIAAAIIgaAAIAAAnQAAAOAPAAIALgBIAAAIQgGACgHAAQgVAAgBgXg");
	this.shape_52.setTransform(-19.9,-1.075);
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEC8C3").s().p("AgTAkIAAhFIAJAAIAAAUQADgLAGgFQAGgGAKAAIAFAAIAAALIgFgBQgLAAgGAGQgIAJAAAQIAAAeg");
	this.shape_53.setTransform(-29.725,-0.1);
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEC8C3").s().p("AgbAcQgKgKAAgRQAAgSAKgKQALgJAQgBQASABAKAIQAKAJAAARIAAAFIhBAAQAAAMAIAHQAHAGANABQAUAAAIgQIAIADQgJAWgbAAQgSAAgKgKgAgTgWQgIAHAAALIA3AAIAAgBQgBgMgHgFQgIgHgMAAQgMABgHAGg");
	this.shape_54.setTransform(-37.7,0);
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FEC8C3").s().p("AgdAfQgHgFAAgJQAAgKAHgFQAIgFASgBIAcgCIAAgDQAAgTgXAAQgWAAgDAQIgKAAQABgLAJgHQAKgGAPgBQAhAAAAAdIAAATQAAAPACAJIgLAAIgBgOQgIARgZAAQgMgBgJgGgAgEADQgMABgFADQgEAEAAAFQAAANAUAAQANAAAIgGQAJgHAAgLIAAgFg");
	this.shape_55.setTransform(-46.8,0);
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEC8C3").s().p("AgTAkIAAhFIAJAAIAAAUQADgLAGgFQAGgGAKAAIAFAAIAAALIgFgBQgLAAgGAGQgIAJAAAQIAAAeg");
	this.shape_56.setTransform(-53.525,-0.1);
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEC8C3").s().p("AgIAYIAAgnIgRAAIAAgIIARAAIAAgTIAJgEIAAAXIAZAAIAAAIIgZAAIAAAnQAAAOAOAAIALgBIAAAIQgGACgHAAQgVAAAAgXg");
	this.shape_57.setTransform(-60.1,-1.075);
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEC8C3").s().p("AgEAzIAAhlIAJAAIAABlg");
	this.shape_58.setTransform(-69.6,-1.575);
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEC8C3").s().p("AAnAyIgMgbIg1AAIgMAbIgMAAIAthjIALAAIAtBjgAAYAOIgUgrIgEgKIgDAKIgTArIAuAAg");
	this.shape_59.setTransform(-77,-1.475);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(-84.4,-12.5,416.4,41), null);
(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Capa_1_copia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC8C3").s().p("Ag6BKIAAiTIB0AAIAAAVIhYAAIAAApIBUAAIAAAUIhUAAIAAAsIBZAAIAAAVg");
	this.shape.setTransform(398.925,-22.1);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC8C3").s().p("AA0BKIgPgkIhJAAIgPAkIgeAAIBCiTIAfAAIBCCTgAAcASIgWg1IgGgRIAAAAIgFARIgWA1IA3AAg");
	this.shape_1.setTransform(382.525,-22.1);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEC8C3").s().p("AgNBKIAAh9Ig3AAIAAgWICJAAIAAAWIg3AAIAAB9g");
	this.shape_2.setTransform(366.975,-22.1);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC8C3").s().p("AAUBCQgMgKAAgSQAAgSAMgKQAMgKAUAAQATAAAMAKQAMALAAARQAAASgMALQgMAKgTAAQgUAAgMgLgAAjAVQgGAGAAALQAAALAGAGQAGAGALAAQAKAAAFgGQAGgGAAgLQAAgKgGgGQgFgGgKAAQgLAAgGAFgAhDBNIBxiZIAWAAIhxCZgAhSgJQgMgLAAgSQAAgRAMgLQAMgKAUAAQATAAAMAKQAMALAAASQAAASgMAKQgMAKgTAAQgUAAgMgKgAhDg2QgGAGAAAKQAAALAGAGQAGAGALAAQAKAAAGgGQAGgGAAgKQAAgLgGgGQgGgGgKAAQgLAAgGAGg");
	this.shape_3.setTransform(343.225,-22.025);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC8C3").s().p("AgpBAQgQgLgEgUIAbgEQADALAJAHQAJAGANAAQAQAAAJgIQAJgIAAgPQAAgPgIgHQgJgIgQAAQgYAAgJAVIgZgDIAJhUIBmAAIAAAWIhRAAIgFAqQAMgTAdAAQAZAAAOAOQAOANAAAYQAAAYgRAOQgRAPgcAAQgZAAgQgLg");
	this.shape_4.setTransform(319.575,-21.775);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEC8C3").s().p("AgyA4QgSgUAAgkQAAgjASgUQATgVAfAAQAgAAATAVQASAUAAAjQAAAkgSAUQgTAVggAAQgfAAgTgVgAgdgoQgLAPAAAZQAAAaALAPQALAPASAAQATAAALgPQALgPAAgaQAAgZgLgPQgLgPgTAAQgSAAgLAPg");
	this.shape_5.setTransform(304.6,-21.95);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEC8C3").s().p("AgOATQAJgDAEgFQACgEAAgHIAAAAIgQAAIAAgeIAfAAIAAAcQAAANgFAHQgGAJgNAEg");
	this.shape_6.setTransform(293.675,-14.575);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEC8C3").s().p("AgtBAQgQgNgCgWIAcgCQACAdAiAAQAigBAAgYQAAgYgiAAIgMAAIAAgSIALAAQAfAAAAgWQAAgVgfgBQghABgBAeIgbgFQABgVAQgMQARgNAbgBQAdABAPAKQAPALAAATQAAANgJAJQgIAIgPACQAlAEAAAfQAAAUgRAMQgQAMgeAAQgcABgSgNg");
	this.shape_7.setTransform(283.225,-21.95);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEC8C3").s().p("AglAwQgQgJgGgTIAQgDQAJAbAoAAQAmAAAAgTQAAgIgHgEQgGgFgPgBIghgDQgkgEAAgYQAAgPAOgJQAOgIAZAAQAvAAAMAhIgPAEQgKgYgjAAQgkAAAAASQAAAIAGAEQAGADAOACIAgADQAVACAJAGQAJAHAAAOQAAAhg2AAQgbAAgQgJg");
	this.shape_8.setTransform(260.375,-19.575);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEC8C3").s().p("AgyA1IAAhpIBkAAIAAANIhVAAIAAAgIBSAAIAAAMIhSAAIAAAkIBWAAIAAAMg");
	this.shape_9.setTransform(247.55,-19.575);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEC8C3").s().p("AglAwQgQgJgGgTIAQgDQAJAbAoAAQAmAAAAgTQAAgIgHgEQgGgFgPgBIghgDQgkgEAAgYQAAgPAOgJQAOgIAZAAQAvAAAMAhIgPAEQgKgYgjAAQgkAAAAASQAAAIAGAEQAGADAOACIAgADQAVACAJAGQAJAHAAAOQAAAhg2AAQgbAAgQgJg");
	this.shape_10.setTransform(233.875,-19.575);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEC8C3").s().p("AgyA1IAAhpIBkAAIAAANIhUAAIAAAgIBSAAIAAAMIhSAAIAAAkIBVAAIAAAMg");
	this.shape_11.setTransform(221.05,-19.575);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEC8C3").s().p("AA5A1IAAhTIAAgKIAAAAIgFAIIguBVIgNAAIgthVIgEgIIgBAAIABAKIAABTIgOAAIAAhpIAYAAIArBSIADAIIAAAAIADgIIAshSIAYAAIAABpg");
	this.shape_12.setTransform(205.4,-19.575);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEC8C3").s().p("Ag1A2IAAgNQAzgRASgNQAKgHAFgFQAEgHAAgIQAAgLgIgGQgJgIgSABQgQAAgJAGQgKAIAAANIABAGIgPgCIgBgHQAAgPANgLQAPgLAWAAQAZAAAOALQALALAAAPQAAAUgaAPQgYAPgbAHIBRAAIAAANg");
	this.shape_13.setTransform(184.075,-19.65);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC8C3").s().p("AAKA0IAAhQQgIAKgUAAIgFAAIAAgMIADAAQAMAAAIgHQAIgFAEgJIAMAAIAABng");
	this.shape_14.setTransform(173.625,-19.45);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEC8C3").s().p("AArA1IhPhRQgGgFgBgEIgBAAIAAAMIAABOIgOAAIAAhpIATAAIBMBPQAGAFACAFIAAAAIAAgNIAAhMIAOAAIAABpg");
	this.shape_15.setTransform(156.9,-19.575);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEC8C3").s().p("AgyA1IAAhpIBkAAIAAANIhUAAIAAAgIBRAAIAAAMIhRAAIAAAkIBVAAIAAAMg");
	this.shape_16.setTransform(142.95,-19.575);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEC8C3").s().p("Ag1A1IAAhpIBEAAQASAAAKAJQALAJAAAPQAAAQgLAIQgNAKgTAAIgxAAIAAAmgAgmACIAyAAQAMAAAHgFQAHgGAAgKQAAgKgHgFQgHgFgMAAIgyAAg");
	this.shape_17.setTransform(130.3,-19.575);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEC8C3").s().p("AgyApQgTgQAAgZQAAgYATgQQAUgQAeAAQAfAAAUAQQATAQAAAYQAAAZgTAQQgUAQgfAAQgeAAgUgQgAgmgfQgPAMAAATQAAAUAPAMQAPAMAXAAQAYAAAPgMQAPgMAAgUQAAgTgPgMQgPgMgYAAQgXAAgPAMg");
	this.shape_18.setTransform(115.725,-19.575);
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEC8C3").s().p("AgyApQgTgQAAgZQAAgYATgQQAUgQAeAAQAfAAAUAQQATAQAAAYQAAAZgTAQQgUAQgfAAQgeAAgUgQgAgmgfQgPAMAAATQAAAUAPAMQAPAMAXAAQAYAAAPgMQAPgMAAgUQAAgTgPgMQgPgMgYAAQgXAAgPAMg");
	this.shape_19.setTransform(94.525,-19.575);
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEC8C3").s().p("AgHA1IAAhcIgyAAIAAgNIBzAAIAAANIgyAAIAABcg");
	this.shape_20.setTransform(81.075,-19.575);
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEC8C3").s().p("AgHA1IAAhpIAPAAIAABpg");
	this.shape_21.setTransform(72.625,-19.575);
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEC8C3").s().p("AglAwQgQgJgGgTIAQgDQAJAbAoAAQAmAAAAgTQAAgIgHgEQgGgFgPgBIghgDQgkgEAAgYQAAgPAOgJQAOgIAZAAQAvAAAMAhIgPAEQgKgYgjAAQgkAAAAASQAAAIAGAEQAGADAOACIAgADQAVACAJAGQAJAHAAAOQAAAhg2AAQgbAAgQgJg");
	this.shape_22.setTransform(63.275,-19.575);
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEC8C3").s().p("AgyAzQgTgPAAgZQAAgZATgQQAUgPAegBQAfABAUAPQATAQAAAZQAAAZgTAPQgUAQgfAAQgeAAgUgQgAgmgVQgPAMAAAUQAAATAPAMQAPANAXAAQAYAAAPgNQAPgMAAgTQAAgUgPgMQgPgMgYAAQgXAAgPAMgAgHgyIAWgQIASAAIgZAQg");
	this.shape_23.setTransform(49.325,-20.6);
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEC8C3").s().p("Ag1A1IAAhpIBEAAQASAAALAJQAKAJAAAPQAAAQgLAIQgNAKgTAAIgwAAIAAAmgAglACIAxAAQAMAAAHgFQAHgGAAgKQAAgKgHgFQgHgFgMAAIgxAAg");
	this.shape_24.setTransform(36.05,-19.575);
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEC8C3").s().p("AgyA1IAAhpIBkAAIAAANIhUAAIAAAgIBSAAIAAAMIhSAAIAAAkIBVAAIAAAMg");
	this.shape_25.setTransform(22.6,-19.575);
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEC8C3").s().p("Ag+A1IAAhpIA9AAQAcAAASANQASANAAAZQAAAZgTAPQgRAOgcAAgAguApIAuAAQAVAAANgLQANgLAAgUQAAgTgOgKQgNgJgXAAIgrAAg");
	this.shape_26.setTransform(9.025,-19.575);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-1,-37.6,414,30.400000000000002), null);
(lib.txt_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#001479").s().p("AgrAUIAMgEQAGAVAdAAQAbAAAAgQQABgHgEgCQgEgEgKgCIgcgCQgbgEAAgVQABgMAKgGQALgIATAAQAlAAAHAZIgNAEQgGgTgbAAQgZAAAAAQQAAALAQAEIAdADQAbADAAAUQgBANgJAHQgLAIgVAAQgmAAgIgcg");
	this.shape.setTransform(98.3,17);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#001479").s().p("AglA8QgJgIAAgMQAAgMAJgHQAKgHAWgCIAlgDIAAgDQAAgYgfAAQgcAAgDAVIgOAAQACgOAMgIQANgJASAAQAsAAAAAjIAAAZQAAAVACALIgNAAIgBgTQgMAWgfAAQgRAAgKgHgAgGAWQgPACgGAEQgGAEgBAIQABAQAaAAQAQAAAMgIQALgJAAgOIAAgGgAgEgoIAWgaIARAAIgbAag");
	this.shape_1.setTransform(86.9,15.125);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#001479").s().p("AA9AuIAAgzQAAgdgZAAQgOAAgIAIQgIAIAAAOIAAAyIgMAAIAAg0QAAgcgZAAQgNAAgIAJQgJAJAAAPIAAAvIgMAAIAAhZIAMAAIAAAUQAIgWAZAAQAaAAAGAWQAKgWAZAAQAjAAAAAnIAAA0g");
	this.shape_2.setTransform(72.275,16.875);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001479").s().p("AgZAuIAAhZIALAAIAAAZQAFgMAIgIQAIgHAMAAIAHAAIAAANIgGAAQgOAAgIAIQgLALABAVIAAAmg");
	this.shape_3.setTransform(54.05,16.875);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001479").s().p("AgjAjQgNgMAAgWQAAgXANgNQANgMAWAAQAXAAANALQANAMAAAVIAAAHIhUAAQABAPAJAJQAKAJAQgBQAbAAAJgUIALAFQgMAbgjAAQgXAAgNgNgAgZgdQgJAJgBAOIBGAAIAAAAQABgPgLgIQgJgIgQAAQgPAAgKAIg");
	this.shape_4.setTransform(43.8,17);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#001479").s().p("AgkAuIgCASIgLAAIAAiCIANAAIAAA8QAFgKALgGQALgGANAAQAVAAANANQAMANAAAVQAAAVgNANQgNAOgVAAQgcAAgLgVgAgagHQgKAIAAAPIAAAGQAAAPAKAJQAKAJAQAAQARAAAJgJQAKgKAAgRQABgSgKgIQgJgKgSAAQgPAAgLAKg");
	this.shape_5.setTransform(32.3,15.125);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#001479").s().p("AglApQgKgHAAgMQAAgNAKgHQAKgGAWgBIAlgEIAAgDQAAgZgeAAQgdABgDAVIgOAAQABgPANgIQAMgJAUAAQArAAAAAkIAAAZQAAAUADALIgPAAIgBgTQgLAWggAAQgQAAgKgHgAgFAEQgQABgGAEQgGAEAAAJQgBAQAbAAQARAAALgJQALgJAAgOIAAgGg");
	this.shape_6.setTransform(19.45,17);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#001479").s().p("Ag5AYIAPgCQAHAhAnAAQAnAAAAgYQgBgLgGgGQgHgFgQgCIgcgFQgkgEAAgdQAAgRAOgJQANgKAYAAQAxAAAHAnIgPADQgFgegkAAQgRAAgJAGQgKAGAAALQAAAKAGAFQAHAGAOACIAcAEQATADAJAHQALAJgBAQQAAARgNAKQgOALgaAAQg1AAgIgsg");
	this.shape_7.setTransform(7.05,15.125);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt_btn, new cjs.Rectangle(-1.4,1.5,107.30000000000001,26.7), null);
(lib.riesgo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Capa_3_copia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212123").s().p("AgNAJIAAgMIAFgFIARAAIAFAFIAAAMgAgKgCIAAAJIAVAAIAAgJIgEgCIgNAAg");
	this.shape.setTransform(393.7263,44.1393,2.377,2.377);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212123").s().p("AgWASIAAgjIAtAAIAAAjg");
	this.shape_1.setTransform(393.7263,49.9036,2.377,2.377);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#212123").s().p("AgNAJIAAgMIAFgFIARAAIAFAFIAAAMgAgKgCIAAAJIAVAAIAAgJIgEgCIgNAAg");
	this.shape_2.setTransform(379.2266,44.1393,2.377,2.377);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#212123").s().p("AgWASIAAgjIAtAAIAAAjg");
	this.shape_3.setTransform(379.2266,49.9036,2.377,2.377);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDAEIAAgIIAHAAIAAAIg");
	this.shape_4.setTransform(541.775,68.15);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAJIAFgBQAEAJAMAAQANAAAAgHQAAgBgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgNgCQgMgBAAgIQAAgGAFgDQAFgEAIAAQARAAADAMIgFABQgEgIgLAAQgMAAAAAHQAAAFAIACIAMABQAMABAAAJQABAGgFAEQgFADgKAAQgQAAgEgNg");
	this.shape_5.setTransform(538.25,66.55);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPARQgGgHAAgKQAAgKAGgFQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFADQAEAFAHAAQAMgBAEgIIAFACQgFAMgQAAQgKAAgGgFgAgKgNQgFAEAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEADg");
	this.shape_6.setTransform(533.175,66.55);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAVIAAgWQAAgOgOAAQgGAAgFAEQgEAFAAAGIAAAVIgGAAIAAgoIAGAAIAAAKQAFgLAMAAQASAAAAATIAAAWg");
	this.shape_7.setTransform(527.875,66.5);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAQQgGgGAAgKQAAgJAGgGQAHgGAJAAQALAAAGAGQAGAGAAAJQAAAKgGAGQgGAGgLAAQgJAAgHgGgAgLgLQgEAEgBAHQABAIAEAEQAEAFAHAAQAIAAAEgFQAFgEAAgIQAAgHgFgEQgEgFgIAAQgHAAgEAFg");
	this.shape_8.setTransform(522.3,66.55);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_9.setTransform(518.525,65.725);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPAQQgGgGAAgKQAAgJAGgGQAHgGAJAAQASAAADAPIgGABQgCgLgNAAQgHAAgEAFQgFAEAAAHQAAAIAFAEQAEAFAHAAQAMAAADgLIAGABQgBAHgGAEQgGAEgIAAQgJAAgHgGg");
	this.shape_10.setTransform(514.85,66.55);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQATQgFgDABgGQgBgGAFgDQAEgCALgBIAQgCIAAgBQAAgLgOAAQgNAAgBAJIgGAAQAAgGAGgEQAGgEAIAAQATAAAAARIAAAKIACAOIgGAAIgBgIQgFAKgOAAQgHAAgFgDgAgCABQgHABgCACQgDACgBAEQAAAHANAAQAGAAAFgEQAGgEAAgGIAAgDg");
	this.shape_11.setTransform(509.55,66.55);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAUIAAgEIAegfIgdAAIAAgEIAlAAIAAAEIgeAfIAfAAIAAAEg");
	this.shape_12.setTransform(504.675,66.55);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_13.setTransform(501.175,65.725);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_14.setTransform(498.925,65.625);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQATQgEgDgBgGQABgGAEgDQAEgCAKgBIARgCIAAgBQAAgLgOAAQgMAAgCAJIgGAAQABgGAFgEQAGgEAIAAQAUAAAAARIAAAKIABAOIgHAAIAAgIQgFAKgOAAQgIAAgEgDgAgCABQgHABgDACQgCACAAAEQgBAHAMAAQAHAAAGgEQAFgEAAgGIAAgDg");
	this.shape_15.setTransform(495,66.55);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPAVIAAgWQAAgOgOAAQgGAAgFAEQgEAFAAAGIAAAVIgGAAIAAgoIAGAAIAAAKQAFgLAMAAQASAAAAATIAAAWg");
	this.shape_16.setTransform(489.675,66.5);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPARQgGgHAAgKQAAgKAGgFQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFADQAEAFAHAAQAMgBAEgIIAFACQgFAMgQAAQgKAAgGgFgAgKgNQgFAEAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEADg");
	this.shape_17.setTransform(484.125,66.55);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAdIAAg4IAGAAIAAAJQADgFAEgCQAFgDAGAAQAJAAAGAGQAGAGAAAKQAAAJgGAGQgGAGgKAAQgFAAgFgDQgFgDgCgEIAAAYgAgLgTQgFAFAAAHIAAACQAAAGAFAEQAEAEAHAAQAIAAAEgEQAFgEAAgHQAAgIgFgFQgEgEgIAAQgGAAgFAEg");
	this.shape_18.setTransform(478.925,67.275);
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAQQgGgGAAgKQAAgJAGgGQAHgGAJAAQALAAAGAGQAGAGAAAJQAAAKgGAGQgGAGgLAAQgJAAgHgGgAgLgLQgFAEAAAHQAAAIAFAEQAFAFAGAAQAIAAAFgFQAEgEAAgIQAAgHgEgEQgFgFgIAAQgGAAgFAFg");
	this.shape_19.setTransform(470.5,66.55);
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAJIAHgBQACAJANAAQAMAAAAgHQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgMgCQgNgBAAgIQAAgGAFgDQAFgEAIAAQARAAADAMIgGABQgCgIgMAAQgMAAAAAHQAAAFAIACIANABQALABABAJQgBAGgEAEQgFADgJAAQgRAAgFgNg");
	this.shape_20.setTransform(462.7,66.55);
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgPARQgGgHAAgKQAAgKAGgFQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFADQAEAFAHAAQAMgBAEgIIAFACQgFAMgQAAQgKAAgGgFgAgKgNQgFAEAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEADg");
	this.shape_21.setTransform(457.625,66.55);
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAPAVIAAgWQAAgOgOAAQgGAAgFAEQgEAFAAAGIAAAVIgGAAIAAgoIAGAAIAAAKQAFgLAMAAQASAAAAATIAAAWg");
	this.shape_22.setTransform(452.325,66.5);
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgJAHgGQAFgGAKAAQAKAAAHAGQAGAGAAAJQAAAKgGAGQgHAGgKAAQgKAAgFgGgAgLgLQgFAEABAHQgBAIAFAEQAEAFAHAAQAIAAAFgFQAEgEAAgIQAAgHgEgEQgFgFgIAAQgHAAgEAFg");
	this.shape_23.setTransform(446.75,66.55);
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_24.setTransform(442.975,65.725);
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAJIAGgBQADAJANAAQAMAAAAgHQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgMgCQgNgBAAgIQAAgGAFgDQAFgEAIAAQARAAADAMIgGABQgCgIgMAAQgMAAAAAHQAAAFAIACIANABQAMABgBAJQAAAGgEAEQgFADgJAAQgRAAgFgNg");
	this.shape_25.setTransform(439.4,66.55);
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_26.setTransform(435.825,65.725);
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAcAVIAAgXQAAgNgMAAQgGAAgDADQgEAEAAAHIAAAWIgFAAIAAgXQAAgNgMAAQgGAAgDAEQgEAEAAAHIAAAVIgGAAIAAgoIAGAAIAAAJQADgKAMAAQAMAAACAKQAEgKAMAAQAQAAAAASIAAAXg");
	this.shape_27.setTransform(430.675,66.5);
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgJAHgGQAFgGAKAAQAKAAAHAGQAGAGAAAJQAAAKgGAGQgHAGgKAAQgKAAgFgGgAgLgLQgFAEABAHQgBAIAFAEQAEAFAHAAQAIAAAFgFQAEgEAAgIQAAgHgEgEQgFgFgIAAQgHAAgEAFg");
	this.shape_28.setTransform(423.8,66.55);
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgOAQQgHgGAAgKQAAgJAHgGQAFgGAKAAQASAAADAPIgGABQgCgLgNAAQgHAAgFAFQgDAEAAAHQAAAIAEAEQAEAFAHAAQAMAAADgLIAGABQgCAHgFAEQgGAEgIAAQgKAAgFgGg");
	this.shape_29.setTransform(418.6,66.55);
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQATQgFgDAAgGQAAgGAFgDQAFgCAJgBIARgCIAAgBQAAgLgOAAQgNAAgBAJIgGAAQAAgGAGgEQAGgEAIAAQAUAAgBARIAAAKIABAOIgGAAIAAgIQgFAKgOAAQgHAAgFgDgAgCABQgHABgDACQgDACAAAEQAAAHAMAAQAHAAAGgEQAFgEAAgGIAAgDg");
	this.shape_30.setTransform(410.6,66.55);
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAJIAHgBQACAJANAAQAMAAAAgIQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgMgCQgNgBAAgJQAAgFAFgEQAFgDAIAAQARAAADAMIgGABQgCgIgMAAQgMAAAAAHQAAAFAIACIAMABQANABAAAJQAAAGgFADQgFAEgJAAQgRAAgFgNg");
	this.shape_31.setTransform(555.65,56.75);
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgJAHgGQAFgGAKAAQALAAAGAGQAGAGAAAJQAAAKgGAGQgGAGgLAAQgKAAgFgGgAgLgLQgEAEAAAHQAAAIAEAEQAFAFAGAAQAIAAAEgFQAFgEAAgIQAAgHgFgEQgEgFgIAAQgGAAgFAFg");
	this.shape_32.setTransform(550.55,56.75);
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgEAOIAAgWIgKAAIAAgFIAKAAIAAgLIAFgDIAAAOIAOAAIAAAFIgOAAIAAAWQAAAIAIAAIAGgBIAAAGIgHABQgMAAAAgOg");
	this.shape_33.setTransform(546.075,56.125);
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPARQgGgHAAgKQAAgKAGgFQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFADQAEAFAHAAQAMAAAEgJIAFABQgFANgQAAQgKAAgGgFgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_34.setTransform(541.775,56.75);
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIAlIAAgFIAFAAQAFAAAAgJIAAgrIAGAAIAAAsQAAANgKAAIgGAAgAACgbIAAgJIAHAAIAAAJg");
	this.shape_35.setTransform(537.575,56.775);
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgTADIAAgXIAFAAIAAAXQAAANANAAQAHAAAEgFQAEgFABgGIAAgUIAFAAIAAAoIgFAAIAAgKQgCAGgFACQgEADgGAAQgRAAAAgSg");
	this.shape_36.setTransform(534.1,56.8);
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTAJIAGgBQADAJAMAAQANAAAAgIQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgNgCQgMgBAAgJQAAgFAFgEQAFgDAIAAQARAAADAMIgFABQgEgIgLAAQgMAAAAAHQAAAFAIACIAMABQAMABAAAJQABAGgFADQgFAEgKAAQgQAAgEgNg");
	this.shape_37.setTransform(528.9,56.75);
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAPAVIAAgWQAAgOgOAAQgGAAgFAEQgEAFAAAHIAAAUIgGAAIAAgoIAGAAIAAAKQAFgLAMAAQASAAAAATIAAAWg");
	this.shape_38.setTransform(521.025,56.7);
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgQAbQgEgDgBgFQABgHAEgCQAFgEAJgBIARgBIAAgBQAAgKgOAAQgMAAgCAIIgGAAQAAgFAGgEQAGgFAIAAQAUABAAAPIAAALIAAAPIgGAAIAAgIQgFAKgOAAQgHgBgFgDgAgCAKQgHAAgDACQgCADAAADQgBAIAMgBQAHAAAGgEQAFgEAAgFIAAgDgAgBgRIAKgNIAHAAIgMANg");
	this.shape_39.setTransform(515.35,55.9);
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAOIAAgWIgKAAIAAgFIAKAAIAAgLIAFgDIAAAOIAOAAIAAAFIgOAAIAAAWQAAAIAIAAIAGgBIAAAGIgHABQgMAAAAgOg");
	this.shape_40.setTransform(510.925,56.125);
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUAJIAHgBQACAJANAAQAMAAAAgIQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgMgCQgNgBAAgJQAAgFAFgEQAFgDAIAAQARAAADAMIgGABQgCgIgMAAQgMAAAAAHQAAAFAIACIANABQALABABAJQgBAGgEADQgFAEgJAAQgRAAgFgNg");
	this.shape_41.setTransform(506.8,56.75);
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgPARQgGgHAAgKQAAgKAGgFQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFADQAEAFAHAAQAMAAAEgJIAFABQgFANgQAAQgKAAgGgFgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_42.setTransform(501.725,56.75);
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgQAQQgGgGAAgKQAAgJAGgGQAHgGAJAAQAKAAAHAGQAGAGAAAJQAAAKgGAGQgHAGgKAAQgJAAgHgGgAgLgLQgFAEAAAHQAAAIAFAEQAFAFAGAAQAIAAAFgFQAEgEAAgIQAAgHgEgEQgFgFgIAAQgGAAgFAFg");
	this.shape_43.setTransform(493.8,56.75);
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQAYQgGgGAAgJQAAgKAGgFQAGgHAKAAQAMAAAFAKIAAgbIAGAAIAAA7IgGAAIAAgIQgFAKgMAAQgKAAgGgHgAgLgDQgEADAAAJQAAAHAEAFQAEAEAHAAQAIAAAFgEQAEgEAAgHIAAgDQAAgGgEgEQgFgEgIAAQgHAAgEAEg");
	this.shape_44.setTransform(488.025,55.9);
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_45.setTransform(484.275,55.925);
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEAOIAAgWIgKAAIAAgFIAKAAIAAgLIAFgDIAAAOIAOAAIAAAFIgOAAIAAAWQAAAIAIAAIAGgBIAAAGIgHABQgMAAAAgOg");
	this.shape_46.setTransform(481.325,56.125);
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgLAVIAAgoIAGAAIAAAMQABgHAEgCQADgEAGAAIADAAIAAAGIgDAAQgGAAgDADQgFAGAAAJIAAARg");
	this.shape_47.setTransform(478.325,56.7);
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPARQgGgHAAgKQAAgKAGgFQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFADQAEAFAHAAQAMAAAEgJIAFABQgFANgQAAQgKAAgGgFgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_48.setTransform(473.675,56.75);
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgCAUIgUgnIAHAAIAOAdIABAFIACgFIAOgdIAHAAIgUAng");
	this.shape_49.setTransform(468.775,56.75);
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAPAVIAAgWQAAgOgOAAQgGAAgFAEQgEAFAAAHIAAAUIgGAAIAAgoIAGAAIAAAKQAFgLAMAAQASAAAAATIAAAWg");
	this.shape_50.setTransform(463.725,56.7);
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_51.setTransform(459.675,55.925);
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_52.setTransform(454.725,55.825);
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgQASQgEgDgBgFQABgGAEgDQAEgCAKgBIARgBIAAgCQAAgLgOAAQgNAAgBAJIgGAAQABgGAFgEQAGgEAIAAQATAAABARIAAAKIABAOIgHAAIAAgIQgFAKgOAAQgIAAgEgEgAgCABQgHABgDACQgCACAAADQAAAIALAAQAIAAAEgEQAGgEAAgGIAAgDg");
	this.shape_53.setTransform(450.8,56.75);
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgWAdIAAg4IAGAAIAAAJQADgFAEgCQAFgDAGAAQAJAAAGAGQAGAGAAAKQAAAJgGAGQgGAGgKAAQgFAAgFgDQgFgDgCgEIAAAYgAgLgTQgFAFAAAHIAAACQAAAGAFAEQAEAEAHAAQAIAAAEgEQAFgEAAgHQAAgIgFgFQgEgEgIAAQgGAAgFAEg");
	this.shape_54.setTransform(445.575,57.475);
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_55.setTransform(441.375,55.925);
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgPAQQgGgGAAgKQAAgJAGgGQAHgGAJAAQASAAADAPIgGABQgDgLgMAAQgHAAgEAFQgFAEAAAHQABAIAEAEQAEAFAHAAQAMAAADgLIAGABQgCAHgFAEQgFAEgJAAQgJAAgHgGg");
	this.shape_56.setTransform(437.7,56.75);
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAPAVIAAgWQAAgOgOAAQgGAAgFAEQgEAFAAAHIAAAUIgGAAIAAgoIAGAAIAAAKQAFgLAMAAQASAAAAATIAAAWg");
	this.shape_57.setTransform(432.425,56.7);
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_58.setTransform(428.375,55.925);
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgLAVIAAgoIAGAAIAAAMQABgHAEgCQADgEAGAAIADAAIAAAGIgDAAQgGAAgDADQgFAGAAAJIAAARg");
	this.shape_59.setTransform(425.925,56.7);
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgWAdIAAg4IAGAAIAAAJQADgFAEgCQAFgDAGAAQAJAAAGAGQAGAGAAAKQAAAJgGAGQgGAGgKAAQgFAAgFgDQgFgDgCgEIAAAYgAgLgTQgFAFAAAHIAAACQAAAGAFAEQAEAEAHAAQAIAAAEgEQAFgEAAgHQAAgIgFgFQgEgEgIAAQgGAAgFAEg");
	this.shape_60.setTransform(421.275,57.475);
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_61.setTransform(414.375,55.825);
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgPARQgGgHAAgKQAAgKAGgFQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFADQAEAFAHAAQAMAAAEgJIAFABQgFANgQAAQgKAAgGgFgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_62.setTransform(410.575,56.75);
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgQAQQgGgGAAgKQAAgJAGgGQAHgGAJAAQAKAAAHAGQAGAGAAAJQAAAKgGAGQgHAGgKAAQgJAAgHgGgAgLgLQgFAEAAAHQAAAIAFAFQAFAEAGgBQAIABAFgEQAEgFAAgIQAAgHgEgEQgFgFgIAAQgGAAgFAFg");
	this.shape_63.setTransform(554.55,46.95);
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgQAYQgGgGAAgJQAAgKAGgFQAGgHAKAAQAMAAAFAKIAAgbIAGAAIAAA7IgGAAIAAgJQgFALgMgBQgKABgGgHgAgLgDQgEADAAAJQAAAHAEAFQAEAEAHAAQAIAAAFgEQAEgFAAgGIAAgCQAAgIgEgDQgFgEgIAAQgHAAgEAEg");
	this.shape_64.setTransform(548.775,46.1);
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgJAHgGQAFgGAKAAQAKAAAHAGQAGAGAAAJQAAAKgGAGQgHAGgKAAQgKAAgFgGgAgLgLQgFAEABAHQgBAIAFAFQAEAEAHgBQAIABAFgEQAEgFAAgIQAAgHgEgEQgFgFgIAAQgHAAgEAFg");
	this.shape_65.setTransform(543.5,46.95);
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgEAOIAAgWIgKAAIAAgFIAKAAIAAgLIAFgDIAAAOIAOAAIAAAFIgOAAIAAAWQAAAIAIAAIAGgBIAAAGIgHABQgMAAAAgOg");
	this.shape_66.setTransform(539.025,46.325);
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgPAQQgGgFAAgLQAAgKAGgFQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFAEQAEAEAHgBQAMABAEgJIAFABQgFANgQAAQgKAAgGgGgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_67.setTransform(532.025,46.95);
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgQAYQgGgGAAgJQAAgKAGgFQAGgHAKAAQAMAAAFAKIAAgbIAGAAIAAA7IgGAAIAAgJQgFALgMgBQgKABgGgHgAgLgDQgEADAAAJQAAAHAEAFQAEAEAHAAQAIAAAFgEQAEgFAAgGIAAgCQAAgIgEgDQgFgEgIAAQgHAAgEAEg");
	this.shape_68.setTransform(526.325,46.1);
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgQAQQgGgGAAgKQAAgJAGgGQAHgGAJAAQALAAAGAGQAGAGAAAJQAAAKgGAGQgGAGgLAAQgJAAgHgGgAgLgLQgEAEgBAHQABAIAEAFQAEAEAHgBQAIABAEgEQAFgFAAgIQAAgHgFgEQgEgFgIAAQgHAAgEAFg");
	this.shape_69.setTransform(518.35,46.95);
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgPAQQgGgFAAgLQAAgKAGgFQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFAEQAEAEAHgBQAMABAEgJIAFABQgFANgQAAQgKAAgGgGgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_70.setTransform(510.375,46.95);
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEAOIAAgWIgKAAIAAgFIAKAAIAAgLIAFgDIAAAOIAOAAIAAAFIgOAAIAAAWQAAAIAIAAIAGgBIAAAGIgHABQgMAAAAgOg");
	this.shape_71.setTransform(505.975,46.325);
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgLAVIAAgoIAGAAIAAAMQABgHAEgCQADgEAGAAIADAAIAAAGIgDAAQgGAAgDADQgFAGAAAJIAAARg");
	this.shape_72.setTransform(502.975,46.9);
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgQASQgFgDABgFQgBgGAFgDQAEgCALgBIAQgBIAAgBQAAgMgOAAQgMAAgCAJIgGAAQABgGAFgEQAGgEAIAAQATAAAAARIAAAKIABAOIgFAAIgBgIQgFAKgOAAQgIAAgEgEgAgCABQgHABgCACQgEACAAADQAAAIANAAQAGAAAFgEQAGgEAAgGIAAgDg");
	this.shape_73.setTransform(498.2,46.95);
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgWAdIAAg4IAGAAIAAAJQADgFAEgCQAFgDAGAAQAJAAAGAGQAGAGAAAKQAAAJgGAGQgGAGgKAAQgFAAgFgDQgFgDgCgEIAAAYgAgLgTQgFAFAAAHIAAACQAAAGAFAEQAEAEAHAAQAIAAAEgEQAFgEAAgHQAAgIgFgFQgEgEgIAAQgGAAgFAEg");
	this.shape_74.setTransform(492.975,47.675);
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgQASQgEgDAAgFQAAgGAEgDQAEgCAKgBIARgBIAAgBQAAgMgOAAQgNAAgBAJIgGAAQABgGAFgEQAGgEAIAAQATAAABARIAAAKIABAOIgHAAIAAgIQgFAKgOAAQgHAAgFgEgAgCABQgHABgCACQgDACAAADQAAAIAMAAQAGAAAFgEQAGgEAAgGIAAgDg");
	this.shape_75.setTransform(484.45,46.95);
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAVIAAgWQAAgOgOAAQgGAAgFAEQgEAFAAAHIAAAUIgGAAIAAgoIAGAAIAAAKQAFgLAMAAQASAAAAATIAAAWg");
	this.shape_76.setTransform(479.125,46.9);
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTADIAAgXIAFAAIAAAXQAAANANAAQAHAAAEgFQAEgFABgGIAAgUIAFAAIAAAoIgFAAIAAgKQgCAGgFACQgEADgGAAQgRAAAAgSg");
	this.shape_77.setTransform(473.35,47);
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgPAQQgGgFAAgLQAAgKAGgFQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFAEQAEAEAHgBQAMABAEgJIAFABQgFANgQAAQgKAAgGgGgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_78.setTransform(465.275,46.95);
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgQAYQgGgGAAgJQAAgKAGgFQAGgHAKAAQAMAAAFAKIAAgbIAGAAIAAA7IgGAAIAAgJQgFALgMgBQgKABgGgHgAgLgDQgEADAAAJQAAAHAEAFQAEAEAHAAQAIAAAFgEQAEgFAAgGIAAgCQAAgIgEgDQgFgEgIAAQgHAAgEAEg");
	this.shape_79.setTransform(459.575,46.1);
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgQASQgFgDABgFQgBgGAFgDQAEgCALgBIAQgBIAAgBQAAgMgOAAQgNAAgBAJIgGAAQAAgGAGgEQAGgEAIAAQATAAAAARIAAAKIACAOIgGAAIgBgIQgFAKgOAAQgHAAgFgEgAgCABQgHABgCACQgDACgBADQAAAIANAAQAGAAAFgEQAGgEAAgGIAAgDg");
	this.shape_80.setTransform(451.5,46.95);
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgQAYQgGgGAAgJQAAgKAGgFQAGgHAKAAQAMAAAFAKIAAgbIAGAAIAAA7IgGAAIAAgJQgFALgMgBQgKABgGgHgAgLgDQgEADAAAJQAAAHAEAFQAEAEAHAAQAIAAAFgEQAEgFAAgGIAAgCQAAgIgEgDQgFgEgIAAQgHAAgEAEg");
	this.shape_81.setTransform(445.775,46.1);
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgQASQgFgDAAgFQAAgGAFgDQAFgCAKgBIAQgBIAAgBQAAgMgOAAQgNAAgBAJIgGAAQAAgGAGgEQAGgEAIAAQAUAAgBARIAAAKIABAOIgFAAIgBgIQgFAKgOAAQgHAAgFgEgAgCABQgHABgDACQgDACAAADQABAIALAAQAIAAAFgEQAFgEAAgGIAAgDg");
	this.shape_82.setTransform(440.4,46.95);
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgWAdIAAg4IAGAAIAAAJQADgFAEgCQAFgDAGAAQAJAAAGAGQAGAGAAAKQAAAJgGAGQgGAGgKAAQgFAAgFgDQgFgDgCgEIAAAYgAgLgTQgFAFAAAHIAAACQAAAGAFAEQAEAEAHAAQAIAAAEgEQAFgEAAgHQAAgIgFgFQgEgEgIAAQgGAAgFAEg");
	this.shape_83.setTransform(435.175,47.675);
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_84.setTransform(430.975,46.125);
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgOAQQgHgGAAgKQAAgJAHgGQAFgGAKAAQASAAADAPIgGABQgDgLgMAAQgHAAgFAFQgDAEAAAHQgBAIAFAFQAEAEAHgBQAMABADgLIAGABQgBAHgGAEQgFAEgJAAQgKAAgFgGg");
	this.shape_85.setTransform(427.3,46.95);
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_86.setTransform(423.625,46.125);
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgEAOIAAgWIgKAAIAAgFIAKAAIAAgLIAFgDIAAAOIAOAAIAAAFIgOAAIAAAWQAAAIAIAAIAGgBIAAAGIgHABQgMAAAAgOg");
	this.shape_87.setTransform(420.675,46.325);
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAPAVIAAgWQAAgOgOAAQgGAAgFAEQgEAFAAAHIAAAUIgGAAIAAgoIAGAAIAAAKQAFgLAMAAQASAAAAATIAAAWg");
	this.shape_88.setTransform(416.275,46.9);
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgQASQgFgDAAgFQAAgGAFgDQAFgCAJgBIARgBIAAgBQAAgMgOAAQgNAAgBAJIgGAAQAAgGAGgEQAGgEAIAAQAUAAgBARIAAAKIABAOIgGAAIAAgIQgFAKgOAAQgHAAgFgEgAgCABQgHABgDACQgDACAAADQAAAIAMAAQAHAAAGgEQAFgEAAgGIAAgDg");
	this.shape_89.setTransform(410.6,46.95);
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAPAVIAAgVQAAgPgOAAQgGAAgFAEQgEAFAAAHIAAAUIgGAAIAAgoIAGAAIAAAKQAFgLAMAAQASAAAAATIAAAWg");
	this.shape_90.setTransform(567.375,37.1);
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgPAZQgHgGAAgKQAAgKAHgGQAFgFAKgBQALABAGAFQAGAGAAAKQAAAKgGAGQgGAFgLAAQgKAAgFgFgAgLgDQgEADAAAJQAAAHAEAFQAFAEAGAAQAIAAAEgEQAFgFAAgHQAAgJgFgDQgEgEgIAAQgGAAgFAEgAgCgRIAKgNIAHAAIgMANg");
	this.shape_91.setTransform(561.8,36.3);
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgCAdIAAgoIAFAAIAAAogAgCgTIAAgJIAFAAIAAAJg");
	this.shape_92.setTransform(558.025,36.325);
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgPAQQgGgGAAgKQAAgJAGgGQAHgGAJAAQASAAADAQIgGAAQgDgLgMAAQgHABgEAEQgFAEAAAHQABAIAEAFQAEADAHAAQAMAAADgKIAGABQgBAHgGAEQgGAEgIAAQgJAAgHgGg");
	this.shape_93.setTransform(554.35,37.15);
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgTADIAAgXIAFAAIAAAWQAAAOANAAQAHAAAEgFQAEgFABgGIAAgUIAFAAIAAAoIgFAAIAAgKQgCAGgFACQgEADgGAAQgRAAAAgSg");
	this.shape_94.setTransform(548.95,37.2);
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_95.setTransform(545.075,36.225);
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgJAHgGQAFgGAKAAQAKAAAHAGQAGAGAAAJQAAAKgGAGQgHAGgKAAQgKAAgFgGgAgLgLQgFAEABAHQgBAIAFAFQAEADAHAAQAIAAAFgDQAEgFAAgIQAAgHgEgEQgFgEgIgBQgHABgEAEg");
	this.shape_96.setTransform(541.25,37.15);
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgCAVIgUgpIAHAAIAOAeIABAFIACgFIAOgeIAHAAIgUApg");
	this.shape_97.setTransform(536.275,37.15);
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgPAQQgGgFAAgLQAAgJAGgGQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFAEQAEADAHAAQAMABAEgKIAFACQgFANgQAAQgKAAgGgGgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_98.setTransform(531.325,37.15);
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgQAZQgGgGAAgKQAAgKAGgGQAGgFAKgBQAMAAAFAKIAAgbIAGAAIAAA7IgGAAIAAgJQgFALgMgBQgKAAgGgFgAgLgDQgEADAAAJQAAAHAEAFQAEAEAHAAQAIAAAFgEQAEgFAAgGIAAgCQAAgIgEgDQgFgEgIAAQgHAAgEAEg");
	this.shape_99.setTransform(525.625,36.3);
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgQASQgFgDABgFQgBgGAFgDQAEgCALgBIAQgBIAAgBQAAgMgOAAQgMAAgCAJIgGAAQABgGAFgEQAGgEAIAAQATAAAAARIAAAKIABAPIgFAAIgBgJQgFAKgOAAQgIAAgEgEgAgCABQgHABgCACQgEACAAADQAAAIANAAQAGAAAFgEQAGgEAAgGIAAgDg");
	this.shape_100.setTransform(517.55,37.15);
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_101.setTransform(513.825,36.225);
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgQAQQgGgGAAgKQAAgJAGgGQAHgGAJAAQAKAAAHAGQAGAGAAAJQAAAKgGAGQgHAGgKAAQgJAAgHgGgAgLgLQgFAEAAAHQAAAIAFAFQAFADAGAAQAIAAAFgDQAEgFAAgIQAAgHgEgEQgFgEgIgBQgGABgFAEg");
	this.shape_102.setTransform(507.3,37.15);
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgPAQQgGgFAAgLQAAgJAGgGQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFAEQAEADAHAAQAMABAEgKIAFACQgFANgQAAQgKAAgGgGgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_103.setTransform(499.325,37.15);
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgEAOIAAgWIgKAAIAAgFIAKAAIAAgLIAFgDIAAAOIAOAAIAAAFIgOAAIAAAWQAAAIAIAAIAGgBIAAAGIgHABQgMAAAAgOg");
	this.shape_104.setTransform(494.925,36.525);
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgQASQgEgDgBgFQABgGAEgDQAEgCAKgBIARgBIAAgBQAAgMgOAAQgMAAgCAJIgGAAQABgGAFgEQAGgEAIAAQAUAAAAARIAAAKIABAPIgHAAIAAgJQgFAKgOAAQgIAAgEgEgAgCABQgHABgDACQgCACAAADQgBAIAMAAQAHAAAGgEQAFgEAAgGIAAgDg");
	this.shape_105.setTransform(490.5,37.15);
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgOAQQgHgGAAgKQAAgJAHgGQAFgGAKAAQASAAADAQIgGAAQgDgLgMAAQgHABgFAEQgDAEAAAHQgBAIAFAFQAEADAHAAQAMAAADgKIAGABQgBAHgGAEQgFAEgJAAQgKAAgFgGg");
	this.shape_106.setTransform(485.35,37.15);
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgUAJIAGgCQADAKANAAQAMAAAAgIQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgEAAIgNgCQgMgBAAgJQAAgFAFgEQAFgDAIAAQARAAADALIgGACQgDgIgLAAQgMAAAAAHQAAAFAIACIANABQAMABgBAJQAAAGgEADQgFAEgJAAQgRAAgFgNg");
	this.shape_107.setTransform(480.35,37.15);
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgPAQQgGgFAAgLQAAgJAGgGQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFAEQAEADAHAAQAMABAEgKIAFACQgFANgQAAQgKAAgGgGgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_108.setTransform(475.275,37.15);
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgLAVIAAgoIAGAAIAAAMQABgHAEgCQADgEAGAAIADAAIAAAGIgDgBQgGABgDADQgFAGAAAJIAAARg");
	this.shape_109.setTransform(471.375,37.1);
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgEIgDAAIAAgJIAIAAIAAAIQgBAEgBADQgCADgDABg");
	this.shape_110.setTransform(465.55,39.275);
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgJAHgGQAFgGAKAAQALAAAGAGQAGAGAAAJQAAAKgGAGQgGAGgLAAQgKAAgFgGgAgLgLQgFAEABAHQgBAIAFAFQAFADAGAAQAIAAAEgDQAFgFAAgIQAAgHgFgEQgEgEgIgBQgGABgFAEg");
	this.shape_111.setTransform(461.8,37.15);
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgTAJIAFgCQAEAKAMAAQANAAAAgIQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgEAAIgNgCQgMgBAAgJQAAgFAFgEQAFgDAIAAQARAAADALIgFACQgEgIgLAAQgMAAAAAHQAAAFAIACIANABQAMABgBAJQABAGgFADQgFAEgKAAQgQAAgEgNg");
	this.shape_112.setTransform(456.7,37.15);
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_113.setTransform(453.125,36.225);
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgJAHgGQAFgGAKAAQALAAAGAGQAGAGAAAJQAAAKgGAGQgGAGgLAAQgKAAgFgGgAgLgLQgEAEAAAHQAAAIAEAFQAFADAGAAQAIAAAEgDQAFgFAAgIQAAgHgFgEQgEgEgIgBQgGABgFAEg");
	this.shape_114.setTransform(449.3,37.15);
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgQAUIgBAJIgFAAIAAg7IAGAAIAAAbQACgEAFgCQAFgEAGAAQAJABAGAFQAGAGAAAKQAAAKgGAGQgGAFgKAAQgMABgFgLgAgLgDQgFADAAAIIAAACQAAAGAFAFQAEAEAHAAQAIAAAEgFQAFgEAAgHQAAgJgFgDQgEgEgIAAQgGAAgFAEg");
	this.shape_115.setTransform(444.025,36.3);
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAcAVIAAgXQAAgNgMAAQgGAAgDADQgEAFAAAGIAAAWIgFAAIAAgXQAAgNgMAAQgGAAgDAEQgEAEAAAHIAAAVIgGAAIAAgoIAGAAIAAAJQADgKAMAAQAMAAACAKQAEgKAMAAQAQAAAAARIAAAYg");
	this.shape_116.setTransform(436.875,37.1);
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgPAQQgGgFAAgLQAAgJAGgGQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFAEQAEADAHAAQAMABAEgKIAFACQgFANgQAAQgKAAgGgGgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_117.setTransform(430.025,37.15);
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgPAQQgGgFAAgLQAAgJAGgGQAGgGAJAAQALAAAGAFQAFAGAAAJIAAACIglAAQAAAIAFAEQAEADAHAAQAMABAEgKIAFACQgFANgQAAQgKAAgGgGgAgKgMQgFADAAAHIAfAAIAAAAQAAgHgEgEQgEgDgIAAQgGAAgEAEg");
	this.shape_118.setTransform(424.825,37.15);
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgLAVIAAgoIAGAAIAAAMQABgHAEgCQADgEAGAAIADAAIAAAGIgDgBQgGABgDADQgFAGAAAJIAAARg");
	this.shape_119.setTransform(420.925,37.1);
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_120.setTransform(415.075,36.225);
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgVAdIAAg5IAqAAIAAAFIgkAAIAAAUIAjAAIAAAFIgjAAIAAAVIAlAAIAAAGg");
	this.shape_121.setTransform(411.125,36.3);
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgUAVIAAgHIAbgaIgaAAIAAgHIAnAAIAAAHIgaAZIAbAAIAAAIg");
	this.shape_122.setTransform(454.85,21.4);
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgQAQQgHgGABgKQgBgJAHgGQAGgFAKAAQALAAAGAEQAHAGAAAKIAAADIgkAAQAAAFADADQAFADAFAAQAKAAAEgHIAIADQgHAMgQAAQgJAAgHgGgAgJgLQgDADAAAFIAZAAIAAAAQAAgGgEgCQgDgDgGAAQgFAAgEADg");
	this.shape_123.setTransform(449.8,21.4);
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgSAYQgFgGAAgJQAAgJAGgGQAGgGAJAAQAKAAAGAIIAAgZIAKAAIAAA6IgKAAIAAgHQgFAIgMAAQgJAAgGgGgAgJgBQgDADAAAHQAAAGADAEQAEAEAFAAQAHAAADgEQAEgDAAgGIAAgCQAAgGgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_124.setTransform(444.05,20.525);
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgEAdIAAgoIAJAAIAAAogAgFgSIAAgKIALAAIAAAKg");
	this.shape_125.setTransform(440.125,20.525);
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgWADIAAgXIALAAIAAAWQAAALALAAQAFAAAEgEQADgEAAgFIAAgUIAKAAIAAAoIgKAAIAAgJQgCAFgEADQgFACgFAAQgSAAAAgSg");
	this.shape_126.setTransform(436,21.45);
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAOAdIAAgXQgGAIgKAAQgJAAgHgGQgFgGAAgIQAAgLAGgGQAFgFAKAAQALAAAFAIIABgHIAJAAIAAA4gAgJgRQgDADAAAIQAAAGADADQAEADAFAAQAGABAFgEQADgDAAgFIAAgCQAAgHgEgDQgEgDgGgBQgFABgEADg");
	this.shape_127.setTransform(430.1,22.15);
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgEAdIAAgoIAJAAIAAAogAgFgSIAAgKIALAAIAAAKg");
	this.shape_128.setTransform(426.175,20.525);
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgEAeIAAg7IAJAAIAAA7g");
	this.shape_129.setTransform(423.725,20.475);
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgQAQQgGgGgBgKQABgJAGgGQAGgFAKAAQALAAAHAEQAFAGAAAKIAAADIgkAAQABAFAEADQAEADAFAAQAKAAADgHIAJADQgHAMgPAAQgKAAgHgGgAgIgLQgEADgBAFIAaAAIAAAAQAAgGgDgCQgEgDgGAAQgFAAgDADg");
	this.shape_130.setTransform(417.25,21.4);
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgRAYQgGgGAAgJQAAgJAGgGQAGgGAJAAQALAAAEAIIAAgZIALAAIAAA6IgKAAIAAgHQgFAIgMAAQgIAAgGgGgAgIgBQgEADAAAHQAAAGAEAEQADAEAGAAQAFAAAEgEQAEgDAAgGIAAgCQAAgGgEgDQgDgDgHAAQgFAAgDADg");
	this.shape_131.setTransform(411.5,20.525);
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgVAKIAHgEQAFAJALAAQAKgBAAgFQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgFgBIgLgCQgOgBAAgKQAAgGAFgEQAGgCAIAAQARgBAFAKIgHADQgFgFgKAAQgJAAAAAEQAAAFAGAAIAMACQANABAAAJQAAAHgFADQgFAEgKAAQgRAAgGgMg");
	this.shape_132.setTransform(403.675,21.4);
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgSASQgEgDAAgGQAAgFAFgEQAEgBAKgBIAOgCIAAAAQAAgJgKAAQgKgBgBAIIgLAAQABgHAGgEQAGgDAJAAQAVAAAAARIAAAKQAAAJABAFIgKAAIgBgIQgFAJgNAAQgHAAgFgEgAgBADQgGAAgCACQgBAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAFAJABQAGAAAEgDQAEgEAAgEIAAgDg");
	this.shape_133.setTransform(398.425,21.4);
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgHANIAAgSIgJAAIAAgIIAJAAIAAgKIAKgEIAAAOIAOAAIAAAIIgOAAIAAARQAAAHAIAAIAGAAIAAAIIgJABQgOAAgBgPg");
	this.shape_134.setTransform(393.8,20.725);
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgNAVIAAgoIAKAAIAAALQACgGACgDQAEgDAGAAIADAAIAAAKIgDgBQgHAAgEAEQgCAEgBAIIAAAQg");
	this.shape_135.setTransform(390.5,21.35);
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgQAQQgGgGgBgKQABgJAGgGQAGgFAKAAQALAAAHAEQAFAGAAAKIAAADIgkAAQABAFAEADQAEADAFAAQAKAAADgHIAJADQgHAMgPAAQgKAAgHgGgAgIgLQgEADgBAFIAaAAIAAAAQAAgGgDgCQgEgDgGAAQgFAAgDADg");
	this.shape_136.setTransform(385.75,21.4);
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgEAeIAAg7IAJAAIAAA7g");
	this.shape_137.setTransform(381.875,20.475);
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAVAdIgGgOIgcAAIgGAOIgMAAIAag5IALAAIAaA5gAALAHIgIgUIgDgGIgBAGIgJAUIAVAAg");
	this.shape_138.setTransform(377.35,20.55);
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgxA0QgSgTgBghQAAghATgSQATgSAggBQAaAAASALQARAKAEATIgTADQgJgcglAAQgYAAgOAPQgOAOAAAaIAAAAIAAAEQAHgMAPgIQAPgHAUAAQAdAAARAMQAPALAAAXQABAUgTAOQgSANgcAAQghAAgUgSgAgdAAQgOAJgDAPQALAgAngBQAVAAAMgJQAMgIAAgPQABgfguAAQgTAAgOAIg");
	this.shape_139.setTransform(92.9,24.55);
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("Ag1BTIBXilIAUAAIhYClg");
	this.shape_140.setTransform(78.325,25.05);
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BEBEBE").s().p("AANBCIAAhmQgKAOgaAAIgHAAIAAgRIAEAAQAQAAAKgHQAKgHAFgMIAQAAIAACDg");
	this.shape_141.setTransform(66.025,24.55);
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_142.setTransform(153,68.325);
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_143.setTransform(149.475,66.825);
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgVAUQAAgGAHgCQgFgCAAgFQAAgFAHgBQgFgEAAgGQAAgHAEgDQAFgEAIAAQAFAAAFACQABgHAIAAIADABIAAAEIgDAAQgFAAgCAEQAFADAAAHQAAAGgFADQgEADgIAAQgFAAgEgBQgFAAAAAEQAAAEAHAAIAPAAQAOAAAAAKQAAANgWAAQgVAAAAgLgAgPATQAAAHAPAAQAQAAAAgHQAAgGgJAAIgOAAIgDgBQgFACAAAFgAgJgSQgDACAAAFQAAAEADACQAEADAFAAQAFAAADgDQAEgCAAgEQAAgFgEgCQgDgDgFAAQgFAAgEADg");
	this.shape_144.setTransform(144.525,67.325);
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_145.setTransform(139.675,66.825);
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAEAEAHAAQAMAAADgJIAFACQgGAMgOAAQgKAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQAAgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_146.setTransform(134.85,66.825);
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_147.setTransform(131.375,66.025);
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgEQADgDAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAJIAAAQg");
	this.shape_148.setTransform(129.025,66.75);
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgEQADgDAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAJIAAAQg");
	this.shape_149.setTransform(123.275,66.75);
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_150.setTransform(118.875,66.825);
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgRAbIAAgFIACAAQAKABADgKIABgBIgUgmIAHAAIAOAcIABAEIAAAAIABgEIAOgcIAFAAIgTAoQgCAHgEADQgEAEgGAAg");
	this.shape_151.setTransform(114.15,67.6);
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_152.setTransform(109.325,66.825);
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAaAUIAAgVQAAgNgLAAQgGAAgDAEQgDADAAAGIAAAVIgFAAIAAgWQABgMgMAAQgFAAgEAEQgDADAAAHIAAAUIgGAAIAAgmIAFAAIAAAIQAEgJAKAAQAMAAACAJQAEgJALAAQAPAAAAARIAAAWg");
	this.shape_153.setTransform(103.05,66.75);
	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_154.setTransform(95.425,65.925);
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAFAEAGAAQAMAAADgJIAFACQgFAMgPAAQgJAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQABgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_155.setTransform(91.8,66.825);
	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgPAXQgFgGgBgJQABgIAFgGQAGgGAJAAQALAAAFAJIAAgZIAGAAIAAA4IgGAAIAAgJQgFAKgMAAQgIAAgGgGgAgLgDQgDAEAAAHQAAAIADADQAFAFAGAAQAIAAAEgEQAEgEAAgGIAAgDQAAgGgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_156.setTransform(86.4,66);
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgPAWQgGgIAAgOQAAgNAGgHQAGgIAKAAQAIAAAGAFQAFADABAHIgFABQgDgKgMAAQgRAAAAAWIAAABQACgEAFgCQAFgEAGAAQAJABAGAFQAFADAAAJQAAAJgGAFQgFAGgKAAQgKgBgGgGgAgJAAQgFACgBAHQADAOANABQAHAAAEgEQAEgEAAgHQAAgMgPAAQgGAAgEADg");
	this.shape_157.setTransform(78.725,66.05);
	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgQAiIAbhDIAGAAIgbBDg");
	this.shape_158.setTransform(74.075,66.25);
	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgPAWQgGgIAAgOQAAgNAGgHQAGgIAKAAQAIAAAGAFQAFADABAHIgFABQgDgKgMAAQgRAAAAAWIAAABQACgEAFgCQAFgEAGAAQAJABAGAFQAFADAAAJQAAAJgGAFQgFAGgKAAQgKgBgGgGgAgJAAQgFACgBAHQADAOANABQAHAAAEgEQAEgEAAgHQAAgMgPAAQgGAAgEADg");
	this.shape_159.setTransform(69.425,66.05);
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgSAbIAAgFIAEAAQAIABAEgKIABgBIgUgmIAHAAIAOAcIAAAEIABAAIACgEIAMgcIAHAAIgTAoQgDAHgEADQgEAEgGAAg");
	this.shape_160.setTransform(62,67.6);
	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_161.setTransform(54.725,66.825);
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgVAUQAAgGAHgCQgFgCAAgFQAAgFAHgBQgFgEAAgGQAAgHAEgDQAFgEAIAAQAFAAAFACQABgHAIAAIADABIAAAEIgDAAQgFAAgCAEQAFADAAAHQAAAGgFADQgEADgIAAQgFAAgEgBQgFAAAAAEQAAAEAHAAIAPAAQAOAAAAAKQAAANgWAAQgVAAAAgLgAgPATQAAAHAPAAQAQAAAAgHQAAgGgJAAIgOAAIgDgBQgFACAAAFgAgJgSQgDACAAAFQAAAEADACQAEADAFAAQAFAAADgDQAEgCAAgEQAAgFgEgCQgDgDgFAAQgFAAgEADg");
	this.shape_162.setTransform(49.825,67.325);
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_163.setTransform(44.975,66.825);
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAFgFAJAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAFAEAGAAQAMAAADgJIAFACQgFAMgPAAQgJAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQABgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_164.setTransform(40.15,66.825);
	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_165.setTransform(36.625,66.025);
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgEQADgDAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAJIAAAQg");
	this.shape_166.setTransform(34.325,66.75);
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgEQADgDAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAJIAAAQg");
	this.shape_167.setTransform(28.575,66.75);
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_168.setTransform(24.125,66.825);
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAFAAAFIAAAUIgGAAIAAgmIAFAAIAAAJQAFgKAMAAQARAAAAASIAAAVg");
	this.shape_169.setTransform(19.025,66.75);
	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAEAEAHAAQAMAAADgJIAFACQgGAMgOAAQgKAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQAAgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_170.setTransform(13.8,66.825);
	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAbAUIAAgVQgBgNgKAAQgHAAgCAEQgEADAAAGIAAAVIgEAAIAAgWQAAgMgMAAQgFAAgEAEQgDADAAAHIAAAUIgGAAIAAgmIAFAAIAAAIQAEgJAKAAQAMAAACAJQAEgJALAAQAPAAAAARIAAAWg");
	this.shape_171.setTransform(7.5,66.75);
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_172.setTransform(160.075,56.175);
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAEAEAHAAQAMAAADgJIAFACQgGAMgOAAQgKAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQAAgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_173.setTransform(156.45,57.075);
	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgPAXQgGgFAAgKQAAgIAGgGQAGgFAJgBQALAAAFAJIAAgZIAFAAIAAA4IgEAAIAAgIQgGAJgLAAQgKAAgFgGgAgKgDQgFADAAAIQAAAHAFAFQAEAEAGAAQAHAAAFgEQAEgEAAgGIAAgDQAAgHgEgDQgFgDgHAAQgGAAgEADg");
	this.shape_174.setTransform(151.05,56.25);
	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_175.setTransform(143.475,57.075);
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgCAUIgTgnIAHAAIANAdIABAFIAAAAIACgFIANgdIAHAAIgTAng");
	this.shape_176.setTransform(138.775,57.05);
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_177.setTransform(135.475,56.275);
	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgEANIAAgVIgKAAIAAgFIAKAAIAAgKIAFgCIAAAMIAOAAIAAAFIgOAAIAAAVQgBAIAJAAIAGgBIAAAFIgHABQgMAAAAgNg");
	this.shape_178.setTransform(132.7,56.475);
	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_179.setTransform(128.475,57.075);
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgOAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQARAAADAPIgGAAQgCgKgMAAQgHAAgEAEQgEAEAAAHQAAAHAEAEQAEAFAHAAQALAAADgKIAGAAQgCAHgFAEQgFAEgIAAQgJAAgGgGg");
	this.shape_180.setTransform(123.625,57.075);
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_181.setTransform(120.125,56.275);
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgPAXQgFgFgBgKQABgIAFgGQAGgFAJgBQALAAAFAJIAAgZIAGAAIAAA4IgGAAIAAgIQgFAJgMAAQgIAAgGgGgAgLgDQgDADAAAIQAAAHADAFQAFAEAGAAQAIAAAEgEQAEgEAAgGIAAgDQAAgHgEgDQgFgDgHAAQgGAAgFADg");
	this.shape_182.setTransform(116.1,56.25);
	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAgmIAFAAIAAAKQAFgLAMAAQARAAAAASIAAAVg");
	this.shape_183.setTransform(111.025,57);
	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_184.setTransform(107.175,56.275);
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgPAVQgGgHAAgOQAAgMAGgIQAGgHAKAAQAIAAAGADQAFAEABAHIgFABQgDgLgMAAQgRAAAAAXIAAABQACgEAFgDQAFgDAGAAQAJAAAGAGQAFADAAAJQAAAIgGAGQgFAGgKgBQgKABgGgIgAgJAAQgFADgBAGQADAPANAAQAHAAAEgFQAEgDAAgHQAAgMgPAAQgGAAgEADg");
	this.shape_185.setTransform(100.925,56.3);
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgQAiIAbhDIAGAAIgbBDg");
	this.shape_186.setTransform(96.275,56.5);
	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAEAbIAAgrQgBACgDACQgDABgEAAIgCAAIAAgFIABAAQAFAAADgDQAEgDABgEIAFAAIAAA1g");
	this.shape_187.setTransform(92.225,56.3);
	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_188.setTransform(85.925,57.075);
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgPAXQgGgFAAgKQAAgIAGgGQAGgFAJgBQALAAAFAJIAAgZIAFAAIAAA4IgEAAIAAgIQgGAJgLAAQgKAAgFgGgAgKgDQgFADAAAIQAAAHAFAFQAEAEAGAAQAHAAAFgEQAEgEAAgGIAAgDQAAgHgEgDQgFgDgHAAQgGAAgEADg");
	this.shape_189.setTransform(80.4,56.25);
	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAgmIAFAAIAAAKQAFgLAMAAQARAAAAASIAAAVg");
	this.shape_190.setTransform(75.325,57);
	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAEAEAHAAQALAAAEgJIAFACQgFAMgQAAQgIAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQAAgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_191.setTransform(70.1,57.075);
	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_192.setTransform(66.575,56.275);
	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_193.setTransform(63.175,57.075);
	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgDAHIADgDIAAgEIgDAAIAAgJIAHAAIAAAIQAAAEgBADQgCACgDACg");
	this.shape_194.setTransform(57.25,59.075);
	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_195.setTransform(53.675,57.075);
	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgEANIAAgVIgKAAIAAgFIAKAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQAAAIAJAAIAGgBIAAAFIgHABQgMAAAAgNg");
	this.shape_196.setTransform(49.45,56.475);
	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgOAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQARAAADAPIgGAAQgCgKgMAAQgHAAgEAEQgEAEAAAHQAAAHAEAEQAEAFAHAAQALAAADgKIAGAAQgCAHgFAEQgFAEgIAAQgJAAgGgGg");
	this.shape_197.setTransform(45.425,57.075);
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgTACIAAgVIAGAAIAAAVQAAAOAMAAQAHgBAEgFQAEgDAAgHIAAgTIAFAAIAAAmIgFAAIAAgKQgCAFgEAEQgFACgFAAQgQAAgBgSg");
	this.shape_198.setTransform(40.3,57.1);
	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgPAXQgFgFgBgKQABgIAFgGQAGgFAJgBQALAAAFAJIAAgZIAFAAIAAA4IgFAAIAAgIQgFAJgMAAQgIAAgGgGgAgLgDQgDADAAAIQAAAHADAFQAFAEAGAAQAIAAAEgEQAEgEAAgGIAAgDQAAgHgEgDQgFgDgHAAQgGAAgFADg");
	this.shape_199.setTransform(34.75,56.25);
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_200.setTransform(29.725,57.075);
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgGAEgDQADgDAFAAIADABIAAAEIgCAAQgHAAgCAFQgFAEAAAIIAAARg");
	this.shape_201.setTransform(25.975,57);
	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgVAbIAAg1IAGAAIAAAJQACgFAFgCQAFgCAFgBQAJABAFAFQAGAGAAAJQAAAJgGAFQgGAGgJAAQgFAAgEgDQgFgCgCgEIAAAWgAgLgSQgEAEAAAHIAAADQAAAFAEAEQAFAEAGAAQAHAAAFgEQAEgFAAgGQAAgIgEgEQgEgDgIAAQgGAAgFADg");
	this.shape_202.setTransform(21.575,57.75);
	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_203.setTransform(15.025,56.175);
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAFgFAJAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQAMAAADgJIAFACQgFAMgQAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQgBgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_204.setTransform(11.4,57.075);
	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgPAXQgGgFABgKQgBgIAGgGQAGgFAJgBQALAAAFAJIAAgZIAGAAIAAA4IgFAAIAAgIQgGAJgMAAQgJAAgFgGgAgKgDQgEADgBAIQABAHAEAFQAEAEAGAAQAHAAAFgEQAEgEAAgGIAAgDQAAgHgEgDQgFgDgHAAQgHAAgDADg");
	this.shape_205.setTransform(6,56.25);
	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_206.setTransform(150.825,47.325);
	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgVAUQAAgGAHgCQgFgCAAgFQAAgFAHgBQgFgEAAgGQAAgHAEgDQAFgEAIAAQAFAAAFACQABgHAIAAIADABIAAAEIgDAAQgFAAgCAEQAFADAAAHQAAAGgFADQgEADgIAAQgFAAgEgBQgFAAAAAEQAAAEAHAAIAPAAQAOAAAAAKQAAANgWAAQgVAAAAgLgAgPATQAAAHAPAAQAQAAAAgHQAAgGgJAAIgOAAIgDgBQgFACAAAFgAgJgSQgDACAAAFQAAAEADACQAEADAFAAQAFAAADgDQAEgCAAgEQAAgFgEgCQgDgDgFAAQgFAAgEADg");
	this.shape_207.setTransform(145.925,47.825);
	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_208.setTransform(141.075,47.325);
	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAEAEAHAAQALAAAEgJIAFACQgFAMgQAAQgIAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQAAgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_209.setTransform(136.25,47.325);
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_210.setTransform(132.725,46.525);
	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgDQADgEAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAJIAAAQg");
	this.shape_211.setTransform(130.425,47.25);
	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_212.setTransform(124.875,46.425);
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgkAAQABAHAEAEQAEAEAHAAQAMAAADgJIAFACQgGAMgOAAQgKAAgFgGgAgKgMQgEADgBAHIAeAAIAAgBQABgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_213.setTransform(121.25,47.325);
	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgPAXQgGgGAAgJQAAgJAGgFQAGgGAJABQALAAAFAIIAAgZIAFAAIAAA3IgEAAIAAgIQgGAKgLAAQgJAAgGgGgAgLgCQgEACAAAIQAAAHAEAEQAFAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgGgEgDQgFgFgHAAQgGAAgFAFg");
	this.shape_214.setTransform(115.85,46.5);
	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_215.setTransform(108.275,47.325);
	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgCATIgTglIAHAAIANAcIABAFIAAAAIACgFIANgcIAHAAIgTAlg");
	this.shape_216.setTransform(103.575,47.3);
	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_217.setTransform(100.275,46.525);
	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgEANIAAgVIgKAAIAAgFIAKAAIAAgKIAFgCIAAAMIANAAIAAAFIgNAAIAAAVQgBAIAJAAIAFgBIAAAFIgGABQgMAAAAgNg");
	this.shape_218.setTransform(97.5,46.725);
	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_219.setTransform(93.275,47.325);
	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgOAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQARAAADAPIgGAAQgCgKgMAAQgHAAgEAEQgEAEAAAHQAAAHAEAEQAEAFAHAAQALAAADgKIAGAAQgCAHgFAEQgFAEgIAAQgJAAgGgGg");
	this.shape_220.setTransform(88.425,47.325);
	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_221.setTransform(84.925,46.525);
	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgPAXQgFgGgBgJQABgJAFgFQAGgGAJABQALAAAFAIIAAgZIAGAAIAAA3IgGAAIAAgIQgFAKgMAAQgIAAgGgGgAgLgCQgDACAAAIQAAAHADAEQAFAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgGgEgDQgFgFgHAAQgHAAgEAFg");
	this.shape_222.setTransform(80.9,46.5);
	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAgmIAFAAIAAAJQAFgKAMAAQARAAAAASIAAAVg");
	this.shape_223.setTransform(75.825,47.25);
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_224.setTransform(71.975,46.525);
	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_225.setTransform(66.025,47.325);
	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAFAEAGAAQAMAAADgJIAFACQgFAMgPAAQgJAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQABgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_226.setTransform(61.2,47.325);
	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_227.setTransform(53.675,47.325);
	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgDQADgEAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAJIAAAQg");
	this.shape_228.setTransform(49.925,47.25);
	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAFgFAJAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQAMAAADgJIAFACQgGAMgPAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQgBgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_229.setTransform(45.5,47.325);
	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AAbAUIAAgWQAAgMgMAAQgFAAgEADQgDAEAAAGIAAAVIgFAAIAAgWQAAgMgLAAQgFAAgEADQgEAFABAGIAAAUIgGAAIAAgmIAFAAIAAAIQAEgJAKAAQAMAAACAJQAEgJALAAQAPAAAAARIAAAWg");
	this.shape_230.setTransform(39.25,47.25);
	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgTALIAAgVIAGAAIAAAVQAAANAMAAQAHAAAEgFQAEgEAAgGIAAgTIAGAAIAAAmIgGAAIAAgKQgCAFgEADQgEADgGAAQgRAAAAgSgAgCgQIAJgMIAHAAIgLAMg");
	this.shape_231.setTransform(32.5,46.475);
	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAgmIAFAAIAAAJQAFgKAMAAQARAAAAASIAAAVg");
	this.shape_232.setTransform(27.325,47.25);
	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAFgFAJAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQAMAAADgJIAFACQgFAMgQAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQgBgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_233.setTransform(19.5,47.325);
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgEANIAAgVIgKAAIAAgFIAKAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQAAAIAIAAIAHgBIAAAFIgHABQgMAAAAgNg");
	this.shape_234.setTransform(15.35,46.725);
	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_235.setTransform(11.425,47.325);
	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgUAbIAAg2IAoAAIAAAGIghAAIAAATIAgAAIAAAEIggAAIAAAVIAiAAIAAAEg");
	this.shape_236.setTransform(6.45,46.5);
	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_237.setTransform(343.85,69.075);
	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_238.setTransform(340.325,67.575);
	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgEANIAAgVIgJAAIAAgFIAJAAIAAgKIAEgCIAAAMIAOAAIAAAFIgOAAIAAAVQABAIAHAAIAGgBIAAAFIgHABQgLAAAAgNg");
	this.shape_239.setTransform(336.05,66.975);
	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_240.setTransform(333.425,66.775);
	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgPAXQgGgGABgJQgBgJAGgFQAGgGAJABQALAAAFAIIAAgZIAFAAIAAA3IgEAAIAAgIQgGAKgLAAQgKAAgFgGgAgKgCQgFACAAAIQAAAHAFAEQAEAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgGgEgDQgFgFgHAAQgGAAgEAFg");
	this.shape_241.setTransform(329.35,66.75);
	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgOAYQgGgGAAgKQAAgJAGgGQAGgEAIAAQAKgBAGAFQAFAFAAAJIAAACIgkAAQABAIAEADQAFAEAGAAQALAAAEgJIAFACQgGAMgPAAQgJAAgFgFgAgKgEQgEADgBAGIAfAAIAAAAQAAgGgFgDQgEgDgHgBQgGABgEADgAgBgRIAJgLIAHAAIgMALg");
	this.shape_242.setTransform(324.4,66.75);
	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgDQADgEAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAJIAAAQg");
	this.shape_243.setTransform(320.675,67.5);
	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgOAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQARAAADAPIgGAAQgCgKgMAAQgHAAgEAEQgEAEAAAHQAAAHAEAEQAEAFAHAAQALAAADgKIAGAAQgCAHgFAEQgFAEgIAAQgJAAgGgGg");
	this.shape_244.setTransform(316.375,67.575);
	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAEAEAHAAQAMAAADgJIAFACQgGAMgOAAQgKAAgFgGgAgKgMQgEADAAAHIAdAAIAAgBQABgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_245.setTransform(308.9,67.575);
	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgPAXQgGgGAAgJQAAgJAGgFQAGgGAJABQALAAAFAIIAAgZIAFAAIAAA3IgEAAIAAgIQgGAKgLAAQgJAAgGgGgAgLgCQgEACAAAIQAAAHAEAEQAFAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgGgEgDQgFgFgHAAQgGAAgFAFg");
	this.shape_246.setTransform(303.5,66.75);
	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgPAXQgFgGAAgJQAAgJAFgFQAGgGAJABQALAAAFAIIAAgZIAGAAIAAA3IgGAAIAAgIQgFAKgMAAQgJAAgFgGgAgLgCQgDACAAAIQAAAHADAEQAFAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgGgEgDQgFgFgHAAQgHAAgEAFg");
	this.shape_247.setTransform(295.45,66.75);
	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_248.setTransform(290.375,67.575);
	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgPAXQgFgGgBgJQABgJAFgFQAGgGAJABQALAAAFAIIAAgZIAGAAIAAA3IgGAAIAAgIQgFAKgMAAQgIAAgGgGgAgLgCQgDACAAAIQAAAHADAEQAFAFAGAAQAIAAAEgEQAEgEAAgHIAAgCQAAgGgEgDQgFgFgHAAQgGAAgFAFg");
	this.shape_249.setTransform(284.95,66.75);
	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_250.setTransform(281.375,66.775);
	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgEANIAAgVIgKAAIAAgFIAKAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQAAAIAIAAIAHgBIAAAFIgHABQgMAAAAgNg");
	this.shape_251.setTransform(278.6,66.975);
	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAgmIAFAAIAAAJQAFgKAMAAQARAAAAASIAAAVg");
	this.shape_252.setTransform(274.375,67.5);
	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAFgFAJAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQAMAAADgJIAFACQgGAMgPAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQgBgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_253.setTransform(269.15,67.575);
	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_254.setTransform(261.525,67.575);
	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgPAXQgGgGABgJQgBgJAGgFQAGgGAJABQALAAAFAIIAAgZIAFAAIAAA3IgEAAIAAgIQgGAKgLAAQgKAAgFgGgAgKgCQgFACAAAIQAAAHAFAEQAEAFAGAAQAIAAAEgEQAEgEAAgHIAAgCQAAgGgEgDQgFgFgHAAQgHAAgDAFg");
	this.shape_255.setTransform(256.1,66.75);
	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_256.setTransform(250.975,67.575);
	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgOAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQARAAADAPIgGAAQgCgKgMAAQgHAAgEAEQgEAEAAAHQAAAHAEAEQAEAFAHAAQALAAADgKIAGAAQgCAHgFAEQgFAEgIAAQgJAAgGgGg");
	this.shape_257.setTransform(246.125,67.575);
	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAgmIAFAAIAAAJQAFgKAMAAQARAAAAASIAAAVg");
	this.shape_258.setTransform(238.525,67.5);
	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgkAAQABAHAEAEQAEAEAHAAQAMAAADgJIAFACQgGAMgOAAQgKAAgFgGgAgKgMQgEADgBAHIAeAAIAAgBQABgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_259.setTransform(233.3,67.575);
	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAEAEAHAAQALAAAEgJIAFACQgFAMgQAAQgIAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQAAgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_260.setTransform(225.8,67.575);
	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgEANIAAgVIgKAAIAAgFIAKAAIAAgKIAFgCIAAAMIANAAIAAAFIgNAAIAAAVQgBAIAJAAIAFgBIAAAFIgGABQgMAAAAgNg");
	this.shape_261.setTransform(221.6,66.975);
	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAgmIAFAAIAAAJQAFgKAMAAQARAAAAASIAAAVg");
	this.shape_262.setTransform(217.425,67.5);
	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_263.setTransform(212.075,67.575);
	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgEANIAAgVIgKAAIAAgFIAKAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQAAAIAJAAIAGgBIAAAFIgHABQgMAAAAgNg");
	this.shape_264.setTransform(207.85,66.975);
	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_265.setTransform(205.175,66.775);
	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_266.setTransform(201.775,67.575);
	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_267.setTransform(196.975,67.575);
	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgVAcIAAg1IAGAAIAAAIQACgEAFgDQAFgDAFABQAJgBAFAGQAGAFAAAKQAAAIgGAGQgGAGgJAAQgFAAgEgDQgFgCgCgEIAAAXgAgLgRQgEAEAAAGIAAACQAAAGAEAEQAFAEAGAAQAHAAAFgFQAEgEAAgGQAAgIgEgDQgEgFgIAAQgGAAgFAFg");
	this.shape_268.setTransform(191.975,68.25);
	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAEAEAHAAQALAAAEgJIAFACQgGAMgPAAQgIAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQAAgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_269.setTransform(186.55,67.575);
	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgPAXQgFgGAAgJQAAgJAFgFQAGgGAJABQALAAAFAIIAAgZIAGAAIAAA3IgGAAIAAgIQgFAKgMAAQgJAAgFgGgAgLgCQgDACAAAIQAAAHADAEQAFAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgGgEgDQgFgFgHAAQgHAAgEAFg");
	this.shape_270.setTransform(181.15,66.75);
	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgEQADgDAFAAIADAAIAAAGIgCAAQgHAAgCAEQgFAEAAAJIAAAQg");
	this.shape_271.setTransform(347.325,57.75);
	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_272.setTransform(342.925,57.825);
	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgVAcIAAg1IAGAAIAAAIQACgFAFgCQAFgDAFAAQAJAAAFAGQAGAGAAAJQAAAIgGAGQgGAGgJAAQgFAAgEgDQgFgCgCgEIAAAXgAgLgSQgEAFAAAGIAAADQAAAFAEAEQAFAEAGAAQAHAAAFgEQAEgEAAgHQAAgHgEgFQgEgEgIAAQgGAAgFAEg");
	this.shape_273.setTransform(337.925,58.5);
	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgNAWQgGgFgCgLIgGAAIAAgDIAFAAIAAgDIAAgDIgFAAIAAgEIAGAAQACgJAHgGQAHgFAKgBQARAAAGAMIgFADQgFgJgNAAQgRAAgDAPIAeAAIAAAEIgeAAIgBADIABADIAeAAIAAADIgeAAQACAJAFADQAFAFAIAAQANAAAFgKIAFACQgGAOgRAAQgLAAgHgHg");
	this.shape_274.setTransform(329.325,57.05);
	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgRAVQgGgIAAgNQAAgNAGgHQAHgIAKAAQALAAAHAIQAGAHAAANQAAANgGAIQgHAIgLAAQgKAAgHgIgAgNgRQgEAHAAAKQAAALAEAGQAFAHAIgBQAIABAFgHQAFgGAAgLQAAgKgFgHQgFgFgIAAQgIAAgFAFg");
	this.shape_275.setTransform(321.05,57.05);
	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgRAVQgGgIAAgNQAAgNAGgHQAHgIAKAAQALAAAHAIQAGAHAAANQAAANgGAIQgHAIgLAAQgKAAgHgIgAgNgRQgEAHAAAKQAAALAEAGQAFAHAIgBQAJABAEgHQAFgGAAgLQAAgKgFgHQgEgFgJAAQgIAAgFAFg");
	this.shape_276.setTransform(315.4,57.05);
	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgRAVQgGgIAAgNQAAgNAGgHQAGgIALAAQALAAAGAIQAHAHAAANQAAANgHAIQgGAIgLAAQgLAAgGgIgAgMgRQgFAHAAAKQAAALAFAGQAEAHAIgBQAIABAFgHQAFgGAAgLQAAgKgFgHQgFgFgIAAQgIAAgEAFg");
	this.shape_277.setTransform(309.75,57.05);
	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_278.setTransform(305.9,59.325);
	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgRAVQgGgIAAgNQAAgNAGgHQAHgIAKAAQALAAAHAIQAGAHAAANQAAANgGAIQgHAIgLAAQgKAAgHgIgAgNgRQgEAHAAAKQAAALAEAGQAFAHAIgBQAIABAFgHQAFgGAAgLQAAgKgFgHQgFgFgIAAQgIAAgFAFg");
	this.shape_279.setTransform(302.05,57.05);
	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgRAVQgGgIAAgNQAAgNAGgHQAGgIALAAQALAAAGAIQAHAHAAANQAAANgHAIQgGAIgLAAQgLAAgGgIgAgMgRQgFAHAAAKQAAALAFAGQAEAHAIgBQAJABAEgHQAFgGAAgLQAAgKgFgHQgEgFgJAAQgIAAgEAFg");
	this.shape_280.setTransform(296.45,57.05);
	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AAEAbIAAgrQgBACgDACQgDABgEAAIgCAAIAAgFIABAAQAFAAADgDQAEgDABgEIAFAAIAAA1g");
	this.shape_281.setTransform(291.575,57.05);
	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQALAAAEgJIAFACQgGAMgPAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQAAgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_282.setTransform(285.25,57.825);
	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgPAXQgGgGABgJQgBgIAGgGQAGgGAJAAQALAAAFAJIAAgZIAFAAIAAA4IgEAAIAAgIQgGAJgLAAQgKAAgFgGgAgKgDQgFAEAAAHQAAAIAFAEQAEAEAGAAQAHAAAFgEQAEgEAAgGIAAgDQAAgGgEgEQgFgEgHAAQgGAAgEAEg");
	this.shape_283.setTransform(279.85,57);
	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_284.setTransform(272.475,57.825);
	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAEAEAHAAQALAAAEgJIAFACQgFAMgQAAQgIAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQAAgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_285.setTransform(267.65,57.825);
	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_286.setTransform(260.125,57.825);
	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgPAXQgGgGABgJQgBgIAGgGQAGgGAJAAQALAAAFAJIAAgZIAFAAIAAA4IgEAAIAAgIQgGAJgLAAQgKAAgFgGgAgKgDQgFAEAAAHQAAAIAFAEQAEAEAGAAQAHAAAFgEQAEgEAAgGIAAgDQAAgGgEgEQgFgEgHAAQgGAAgEAEg");
	this.shape_287.setTransform(254.65,57);
	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_288.setTransform(249.575,57.825);
	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgSAUIAAgFIAcgdIgbAAIAAgEIAjAAIAAAEIgcAdIAdAAIAAAFg");
	this.shape_289.setTransform(244.95,57.8);
	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_290.setTransform(241.625,57.025);
	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgEANIAAgVIgJAAIAAgFIAJAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQABAIAHAAIAHgBIAAAFIgIABQgLAAAAgNg");
	this.shape_291.setTransform(238.85,57.225);
	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAFAAAFIAAAUIgGAAIAAgmIAFAAIAAAJQAFgKAMAAQARAAAAASIAAAVg");
	this.shape_292.setTransform(234.625,57.75);
	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_293.setTransform(229.275,57.825);
	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgEQADgDAFAAIADAAIAAAGIgCAAQgHAAgCAEQgFAEAAAJIAAAQg");
	this.shape_294.setTransform(225.525,57.75);
	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_295.setTransform(221.025,57.825);
	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgVAUQAAgGAHgCQgFgCAAgFQAAgFAHgBQgFgEAAgGQAAgHAEgDQAFgEAIAAQAFAAAFACQABgHAIAAIADABIAAAEIgDAAQgFAAgCAEQAFADAAAHQAAAGgFADQgEADgIAAQgFAAgEgBQgFAAAAAEQAAAEAHAAIAPAAQAOAAAAAKQAAANgWAAQgVAAAAgLgAgPATQAAAHAPAAQAQAAAAgHQAAgGgJAAIgOAAIgDgBQgFACAAAFgAgJgSQgDACAAAFQAAAEADACQAEADAFAAQAFAAADgDQAEgCAAgEQAAgFgEgCQgDgDgFAAQgFAAgEADg");
	this.shape_296.setTransform(216.125,58.325);
	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_297.setTransform(208.525,57.825);
	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAaAUIAAgVQABgNgLAAQgHAAgCAEQgEADAAAGIAAAVIgEAAIAAgWQgBgMgKAAQgHAAgDAEQgDADgBAHIAAAUIgFAAIAAgmIAFAAIAAAJQAEgKALAAQALAAACAKQAEgKALAAQAPAAAAARIAAAWg");
	this.shape_298.setTransform(202.2,57.75);
	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_299.setTransform(197.125,57.025);
	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAOAUIgLgOIgDgDIgCADIgMAOIgGAAIARgUIgQgSIAHAAIAKAMIACADIADgDIAKgMIAHAAIgRASIASAUg");
	this.shape_300.setTransform(193.825,57.8);
	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgPAaQgFgEAAgEQAAgGAFgDQAEgDAKgBIAPgBIAAgCQAAgJgNAAQgMAAgBAIIgGAAQAAgFAGgEQAFgEAIAAQASABAAAOIAAALQAAAJACAFIgGAAIgBgIQgFAJgNAAQgHAAgEgDgAgCAKQgGAAgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDgAgBgQIAJgMIAHAAIgLAMg");
	this.shape_301.setTransform(188.975,57);
	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAbAUIAAgVQgBgNgKAAQgHAAgCAEQgEADAAAGIAAAVIgEAAIAAgWQAAgMgMAAQgGAAgDAEQgDADAAAHIAAAUIgGAAIAAgmIAFAAIAAAJQAEgKALAAQALAAACAKQAEgKALAAQAPAAAAARIAAAWg");
	this.shape_302.setTransform(182.65,57.75);
	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAFAEAGAAQALAAAEgJIAFACQgFAMgPAAQgJAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQABgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_303.setTransform(325.8,48.025);
	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgEANIAAgVIgJAAIAAgFIAJAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQABAIAHAAIAHgBIAAAFIgIABQgLAAAAgNg");
	this.shape_304.setTransform(321.65,47.425);
	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgGAEgDQADgDAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAJIAAAQg");
	this.shape_305.setTransform(318.775,47.95);
	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_306.setTransform(314.375,48.025);
	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgVAcIAAg1IAGAAIAAAIQACgEAFgDQAFgCAFAAQAJgBAFAGQAGAGAAAJQAAAJgGAFQgGAGgJAAQgFAAgEgDQgFgCgCgEIAAAXgAgLgRQgEAEAAAGIAAACQAAAGAEAEQAFAEAGAAQAHAAAFgFQAEgDAAgHQAAgHgEgEQgEgFgIAAQgGAAgFAFg");
	this.shape_307.setTransform(309.375,48.7);
	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AAbAUIAAgVQAAgNgMAAQgFAAgEADQgDAEAAAGIAAAVIgFAAIAAgWQAAgMgLAAQgFAAgEADQgEAEABAHIAAAUIgGAAIAAgmIAFAAIAAAIQAEgJAKAAQAMAAACAJQAEgJALAAQAPAAAAARIAAAWg");
	this.shape_308.setTransform(302.6,47.95);
	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_309.setTransform(297.525,47.225);
	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_310.setTransform(292.875,47.125);
	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAEAEAHAAQALAAAEgJIAFACQgFAMgQAAQgIAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQAAgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_311.setTransform(289.25,48.025);
	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgDAHIADgDIAAgEIgDAAIAAgJIAHAAIAAAIQAAAEgCADQgBACgCACg");
	this.shape_312.setTransform(283.2,50.025);
	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_313.setTransform(279.625,48.025);
	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgGAEgDQADgDAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAJIAAAQg");
	this.shape_314.setTransform(275.875,47.95);
	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAFgFAJAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAFAEAGAAQAMAAADgJIAFACQgFAMgPAAQgJAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQABgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_315.setTransform(271.45,48.025);
	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAFAAAFIAAAUIgGAAIAAgmIAFAAIAAAJQAFgKAMAAQARAAAAASIAAAVg");
	this.shape_316.setTransform(266.425,47.95);
	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_317.setTransform(262.575,47.225);
	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgPAXQgFgFAAgKQAAgIAFgGQAGgGAJABQALgBAFAJIAAgZIAGAAIAAA4IgGAAIAAgJQgFAKgMAAQgJAAgFgGgAgLgCQgDADAAAHQAAAIADADQAFAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgGgEgDQgFgFgHAAQgHAAgEAFg");
	this.shape_318.setTransform(258.55,47.2);
	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAFAAAFIAAAUIgGAAIAAgmIAFAAIAAAJQAFgKAMAAQARAAAAASIAAAVg");
	this.shape_319.setTransform(250.925,47.95);
	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQALAAAEgJIAFACQgGAMgPAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQAAgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_320.setTransform(245.65,48.025);
	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_321.setTransform(238.325,48.025);
	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_322.setTransform(233.475,48.025);
	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgEANIAAgVIgKAAIAAgFIAKAAIAAgKIAFgCIAAAMIANAAIAAAFIgNAAIAAAVQgBAIAJAAIAFgBIAAAFIgGABQgMAAAAgNg");
	this.shape_323.setTransform(229.25,47.425);
	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_324.setTransform(226.575,47.225);
	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_325.setTransform(223.175,48.025);
	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgPAXQgGgFAAgKQAAgIAGgGQAGgGAJABQAKgBAGAGQAGAGAAAIQAAAKgGAFQgGAGgKAAQgJAAgGgGgAgLgCQgEADAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgDQgFgFgHAAQgGAAgFAFgAgCgQIAJgMIAHAAIgLAMg");
	this.shape_326.setTransform(218.375,47.2);
	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgVAcIAAg1IAGAAIAAAIQACgEAFgDQAFgCAFAAQAJgBAFAGQAGAGAAAJQAAAJgGAFQgGAGgJAAQgFAAgEgDQgFgCgCgEIAAAXgAgLgRQgEAEAAAGIAAACQAAAGAEAEQAFAEAGAAQAHAAAFgFQAEgDAAgHQAAgHgEgEQgEgFgIAAQgGAAgFAFg");
	this.shape_327.setTransform(213.375,48.7);
	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAFgFAJAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQAMAAADgJIAFACQgGAMgPAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQgBgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_328.setTransform(207.95,48.025);
	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgPAXQgGgFABgKQgBgIAGgGQAGgGAJABQALgBAFAJIAAgZIAFAAIAAA4IgEAAIAAgJQgGAKgLAAQgKAAgFgGgAgKgCQgFADAAAHQAAAIAFADQAEAFAGAAQAIAAAEgEQAEgEAAgHIAAgCQAAgGgEgDQgFgFgHAAQgHAAgDAFg");
	this.shape_329.setTransform(202.55,47.2);
	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_330.setTransform(194.875,48.025);
	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgGAEgDQADgDAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAJIAAAQg");
	this.shape_331.setTransform(191.175,47.95);
	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_332.setTransform(186.625,48.025);
	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgWAcIAAg2IAaAAQAJAAAFADQAEAFAAAIQABAHgGAEQgFAFgJAAIgTAAIAAAWgAgQAAIATAAQAGAAADgCQAEgDAAgFQAAgGgEgCQgDgDgGgBIgTAAg");
	this.shape_333.setTransform(181.75,47.2);
	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_334.setTransform(358.4,39.775);
	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_335.setTransform(356.275,37.375);
	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_336.setTransform(352.625,38.275);
	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AAOAcIAAgVQAAgNgNAAQgGAAgEAEQgEADAAAHIAAAUIgGAAIAAgmIAFAAIAAAJQAFgKAMAAQARAAAAARIAAAWgAABgUQgDgDgCAAQgEAAgBAFIgEAAQABgJAIAAQAEAAACADQAEADACAAQAEAAABgFIAEABQgBAIgIAAQgDAAgEgDg");
	this.shape_337.setTransform(347.525,37.425);
	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_338.setTransform(342.175,38.275);
	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgVAbIAAg1IAGAAIAAAJQACgFAFgCQAFgCAFgBQAJABAFAFQAGAGAAAJQAAAIgGAGQgGAGgJAAQgFAAgEgDQgFgCgCgEIAAAWgAgLgSQgEAFAAAGIAAADQAAAFAEAEQAFAEAGAAQAHAAAFgEQAEgFAAgGQAAgHgEgFQgEgDgIAAQgGAAgFADg");
	this.shape_339.setTransform(337.175,38.95);
	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_340.setTransform(331.975,38.275);
	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgUAcIAAg2IAoAAIAAAEIgiAAIAAATIAhAAIAAAFIghAAIAAAUIAjAAIAAAGg");
	this.shape_341.setTransform(327,37.45);
	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_342.setTransform(318.975,38.275);
	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgEANIAAgVIgJAAIAAgFIAJAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQABAIAHAAIAHgBIAAAFIgIABQgLAAAAgNg");
	this.shape_343.setTransform(314.7,37.675);
	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_344.setTransform(312.075,37.475);
	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgPAXQgFgGAAgJQAAgIAFgGQAGgFAJgBQALAAAFAJIAAgZIAGAAIAAA4IgGAAIAAgIQgFAJgMAAQgJAAgFgGgAgLgDQgDAEAAAHQAAAHADAFQAFAEAGAAQAHAAAFgEQAEgEAAgGIAAgDQAAgGgEgEQgFgDgHAAQgHAAgEADg");
	this.shape_345.setTransform(308.05,37.45);
	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgOAXQgGgFAAgJQAAgKAGgFQAFgGAJAAQAKABAFAEQAGAFAAAIIAAAEIgjAAQAAAGAEAEQAEAEAHAAQAMAAADgJIAFACQgGAMgOAAQgKAAgFgGgAgKgEQgEADAAAGIAdAAIAAgBQABgEgFgEQgEgEgHABQgGgBgEAEgAgCgQIAKgMIAGAAIgLAMg");
	this.shape_346.setTransform(303.05,37.45);
	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgGAEgDQADgDAFAAIADABIAAAEIgCAAQgHAAgCAFQgFAEAAAIIAAARg");
	this.shape_347.setTransform(299.325,38.2);
	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgTAVQgIgIAAgNQAAgMAIgIQAIgIANAAQAKAAAHAFQAHAFACAKIgHABQgBgIgFgEQgGgEgIAAQgJAAgGAHQgGAGAAAKQAAALAGAGQAGAHAJAAQAQAAAEgPIAGABQgFATgVAAQgMAAgIgIg");
	this.shape_348.setTransform(294.325,37.425);
	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAFAEAGAAQALAAAEgJIAFACQgFAMgPAAQgJAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQABgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_349.setTransform(286.2,38.275);
	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgPAXQgFgGgBgJQABgIAFgGQAGgFAJgBQALAAAFAJIAAgZIAGAAIAAA4IgGAAIAAgIQgFAJgMAAQgIAAgGgGgAgLgDQgDAEAAAHQAAAHADAFQAFAEAGAAQAIAAAEgEQAEgEAAgGIAAgDQAAgGgEgEQgFgDgHAAQgHAAgEADg");
	this.shape_350.setTransform(280.8,37.45);
	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_351.setTransform(273.425,38.275);
	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQALAAAEgJIAFACQgGAMgPAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQAAgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_352.setTransform(268.6,38.275);
	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgPAXQgGgGABgJQgBgIAGgGQAGgFAJgBQALAAAFAJIAAgZIAFAAIAAA4IgEAAIAAgIQgGAJgLAAQgKAAgFgGgAgKgDQgFAEAAAHQAAAHAFAFQAEAEAGAAQAHAAAFgEQAEgEAAgGIAAgDQAAgGgEgEQgFgDgHAAQgGAAgEADg");
	this.shape_353.setTransform(263.2,37.45);
	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_354.setTransform(258.125,38.275);
	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgPAXQgFgGAAgJQAAgIAFgGQAGgFAJgBQALAAAFAJIAAgZIAGAAIAAA4IgGAAIAAgIQgFAJgMAAQgJAAgFgGgAgKgDQgEAEAAAHQAAAHAEAFQAEAEAGAAQAHAAAFgEQAEgEAAgGIAAgDQAAgGgEgEQgFgDgHAAQgHAAgDADg");
	this.shape_355.setTransform(252.7,37.45);
	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_356.setTransform(249.125,37.475);
	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgEANIAAgVIgJAAIAAgFIAJAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQABAIAHAAIAHgBIAAAFIgHABQgMAAAAgNg");
	this.shape_357.setTransform(246.3,37.675);
	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAFAAAFIAAAUIgGAAIAAgmIAFAAIAAAKQAFgLAMAAQARAAAAASIAAAVg");
	this.shape_358.setTransform(242.125,38.2);
	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgUAcIAAg2IApAAIAAAEIgiAAIAAATIAgAAIAAAFIggAAIAAAUIAiAAIAAAGg");
	this.shape_359.setTransform(236.7,37.45);
	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAFgFAJAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAFAEAGAAQAMAAADgJIAFACQgFAMgPAAQgJAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQABgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_360.setTransform(228.7,38.275);
	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgPAXQgFgGgBgJQABgIAFgGQAGgFAJgBQALAAAFAJIAAgZIAFAAIAAA4IgFAAIAAgIQgFAJgMAAQgIAAgGgGgAgLgDQgDAEAAAHQAAAHADAFQAFAEAGAAQAIAAAEgEQAEgEAAgGIAAgDQAAgGgEgEQgFgDgHAAQgGAAgFADg");
	this.shape_361.setTransform(223.3,37.45);
	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_362.setTransform(216.325,38.275);
	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_363.setTransform(211.675,38.275);
	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgEANIAAgVIgJAAIAAgFIAJAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQABAIAHAAIAHgBIAAAFIgIABQgLAAAAgNg");
	this.shape_364.setTransform(207.6,37.675);
	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_365.setTransform(205.125,37.475);
	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgSAIIAFgBQADAJAMAAQAMAAAAgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgLgCQgMgBAAgIQAAgGAFgDQAEgDAIAAQAQAAADALIgFACQgDgIgLAAQgLAAAAAGQAAAFAHABIAMACQALABAAAIQAAAGgEADQgFAEgIAAQgQAAgEgNg");
	this.shape_366.setTransform(201.925,38.275);
	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgPAXQgGgGAAgJQAAgIAGgGQAGgFAJgBQAKABAGAFQAGAGAAAIQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgDQgEAEAAAHQAAAIAEAEQAFAEAGAAQAHAAAFgEQAEgEAAgIQAAgHgEgEQgFgDgHAAQgGAAgFADgAgCgQIAJgMIAHAAIgLAMg");
	this.shape_367.setTransform(197.325,37.45);
	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgVAbIAAg1IAGAAIAAAJQACgFAFgCQAFgCAFgBQAJABAFAFQAGAGAAAJQAAAIgGAGQgGAGgJAAQgFAAgEgDQgFgCgCgEIAAAWgAgLgSQgEAFAAAGIAAADQAAAFAEAEQAFAEAGAAQAHAAAFgEQAEgFAAgGQAAgHgEgFQgEgDgIAAQgGAAgFADg");
	this.shape_368.setTransform(192.475,38.95);
	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAFgFAJAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQAMAAADgJIAFACQgGAMgPAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQgBgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_369.setTransform(187.25,38.275);
	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgZAcIAAg2IAYAAQAMAAAHAGQAIAIAAAMQAAANgIAHQgIAIgLAAgAgTAWIASAAQAIAAAGgGQAHgGAAgKQAAgKgHgGQgFgFgKgBIgRAAg");
	this.shape_370.setTransform(182.1,37.45);
	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAFAFQAGAFAAAJIAAACIgjAAQAAAHAEAEQAEAEAHAAQALAAAEgJIAFACQgGAMgPAAQgIAAgGgGgAgKgMQgEADAAAHIAdAAIAAgBQAAgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_371.setTransform(343.15,28.525);
	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgPAXQgGgGABgJQgBgJAGgFQAGgFAJAAQALAAAFAIIAAgZIAFAAIAAA3IgEAAIAAgIQgGAKgLAAQgKAAgFgGgAgKgCQgFACAAAIQAAAHAFAEQAEAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgHgEgCQgFgEgHgBQgGABgEAEg");
	this.shape_372.setTransform(337.9,27.7);
	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_373.setTransform(330.625,28.525);
	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgFAcIAAgmIAFAAIAAAmgAgFgQIAFgLIAGAAIgGALg");
	this.shape_374.setTransform(327.6,27.625);
	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgEANIAAgVIgJAAIAAgFIAJAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQABAIAHAAIAHgBIAAAFIgIABQgLAAAAgNg");
	this.shape_375.setTransform(324.7,27.925);
	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAgmIAFAAIAAAKQAFgLAMAAQARAAAAASIAAAVg");
	this.shape_376.setTransform(320.675,28.45);
	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_377.setTransform(315.475,28.525);
	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgDQADgEAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAIIAAARg");
	this.shape_378.setTransform(311.975,28.45);
	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_379.setTransform(307.625,28.525);
	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgTAVQgIgIAAgNQAAgMAIgIQAIgIANAAQAKAAAHAFQAGAFACAHIgGABQgCgFgEgEQgGgEgIAAQgJAAgGAHQgGAGAAAKQAAALAGAGQAGAHAJAAQAKAAAGgGQAFgFAAgHIAAgCIgVAAIAAgEIAbAAIAAAcIgFAAIgBgKQgCAFgGADQgGADgIAAQgLAAgIgIg");
	this.shape_380.setTransform(302.025,27.675);
	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQALAAAEgJIAFACQgGAMgPAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQAAgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_381.setTransform(294.25,28.525);
	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgPAXQgGgGABgJQgBgJAGgFQAGgFAJAAQALAAAFAIIAAgZIAGAAIAAA3IgGAAIAAgIQgFAKgMAAQgJAAgFgGgAgKgCQgEACgBAIQABAHAEAEQAEAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgHgEgCQgFgEgHgBQgHABgDAEg");
	this.shape_382.setTransform(289.05,27.7);
	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_383.setTransform(281.875,28.525);
	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgPAXQgGgGAAgJQAAgJAGgFQAGgFAJAAQALAAAFAIIAAgZIAFAAIAAA3IgEAAIAAgIQgGAKgLAAQgKAAgFgGgAgKgCQgFACAAAIQAAAHAFAEQAEAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgHgEgCQgFgEgHgBQgGABgEAEg");
	this.shape_384.setTransform(276.6,27.7);
	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAgmIAFAAIAAAKQAFgLAMAAQARAAAAASIAAAVg");
	this.shape_385.setTransform(271.675,28.45);
	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgLgLQgEAEAAAHQAAAHAEAFQAFAEAGAAQAHAAAFgEQAEgFAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_386.setTransform(266.575,28.525);
	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgUAbIAAg2IApAAIAAAGIgiAAIAAATIAgAAIAAAEIggAAIAAAZg");
	this.shape_387.setTransform(261.825,27.7);
	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_388.setTransform(255.675,27.625);
	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_389.setTransform(252.125,28.525);
	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_390.setTransform(244.875,28.525);
	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgPAXQgFgGAAgJQAAgJAFgFQAGgFAJAAQALAAAFAIIAAgZIAGAAIAAA3IgGAAIAAgIQgFAKgMAAQgJAAgFgGgAgLgCQgDACAAAIQAAAHADAEQAFAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgHgEgCQgFgEgHgBQgHABgEAEg");
	this.shape_391.setTransform(239.65,27.7);
	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_392.setTransform(236.275,27.725);
	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgKAUIAAgmIAFAAIAAALQABgFAEgDQADgEAFAAIADAAIAAAGIgCAAQgHAAgCADQgFAFAAAIIAAARg");
	this.shape_393.setTransform(234.125,28.45);
	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgOAPQgGgFAAgKQAAgJAGgGQAGgFAIAAQAKAAAGAFQAFAFAAAJIAAACIgkAAQABAHAEAEQAFAEAGAAQALAAAEgJIAFACQgGAMgPAAQgJAAgFgGgAgKgMQgEADgBAHIAfAAIAAgBQAAgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_394.setTransform(229.9,28.525);
	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AAOAcIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAg3IAGAAIAAAaQAEgKAMAAQARAAAAASIAAAVg");
	this.shape_395.setTransform(225.075,27.625);
	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgPAXQgFgGgBgJQABgJAFgFQAGgFAJAAQALAAAFAIIAAgZIAGAAIAAA3IgGAAIAAgIQgFAKgMAAQgIAAgGgGgAgLgCQgDACAAAIQAAAHADAEQAFAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgHgEgCQgFgEgHgBQgHABgEAEg");
	this.shape_396.setTransform(219.5,27.7);
	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_397.setTransform(214.575,28.525);
	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgPAXQgGgGABgJQgBgJAGgFQAGgFAJAAQALAAAFAIIAAgZIAFAAIAAA3IgEAAIAAgIQgGAKgLAAQgKAAgFgGgAgKgCQgFACAAAIQAAAHAFAEQAEAFAGAAQAHAAAFgEQAEgEAAgHIAAgCQAAgHgEgCQgFgEgHgBQgGABgEAEg");
	this.shape_398.setTransform(206.95,27.7);
	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgPARQgFgDAAgFQAAgFAFgDQAEgCAKgBIAPgBIAAgCQAAgKgNAAQgMAAgBAJIgGAAQAAgGAGgEQAFgEAIAAQASAAAAAQIAAAKQAAAJACAEIgGAAIgBgIQgFAKgNAAQgHAAgEgEgAgCABQgGABgDACQgDACAAADQAAAHAMAAQAGAAAFgEQAFgDAAgGIAAgDg");
	this.shape_399.setTransform(202.025,28.525);
	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgPAXQgGgGABgJQgBgJAGgFQAGgFAJAAQALAAAFAIIAAgZIAGAAIAAA3IgGAAIAAgIQgFAKgMAAQgJAAgFgGgAgKgCQgEACgBAIQABAHAEAEQAEAFAGAAQAIAAAEgEQAEgEAAgHIAAgCQAAgHgEgCQgFgEgHgBQgHABgDAEg");
	this.shape_400.setTransform(196.8,27.7);
	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgCAbIAAgmIAFAAIAAAmgAgCgSIAAgIIAFAAIAAAIg");
	this.shape_401.setTransform(193.425,27.725);
	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgEANIAAgVIgKAAIAAgFIAKAAIAAgKIAEgCIAAAMIAPAAIAAAFIgPAAIAAAVQAAAIAIAAIAHgBIAAAFIgHABQgMAAAAgNg");
	this.shape_402.setTransform(190.85,27.925);
	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AAOAUIAAgUQAAgOgNAAQgGAAgEAEQgEAEAAAHIAAATIgGAAIAAgmIAFAAIAAAKQAFgLAMAAQARAAAAASIAAAVg");
	this.shape_403.setTransform(186.825,28.45);
	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgUAbIAAg2IApAAIAAAGIgiAAIAAATIAgAAIAAAEIggAAIAAAVIAiAAIAAAEg");
	this.shape_404.setTransform(181.6,27.7);
	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(1,1,1).p("APTldIAAK7AvSldIAAK7");
	this.shape_405.setTransform(267.675,43.9);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	// Capa_2_copia
	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(1,1,1).p("EgtqAFfMBbVAAAIAAq9MglTAAAIAAAAIiGAAIpMAAIgCAAMgquAAAg");
	this.shape_406.setTransform(286.45,43.975);
	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("EgtrAFfIAAq9MAqvAAAIACAAIJMAAICGAAIAAAAMAlTAAAIAAK9g");
	this.shape_407.setTransform(286.45,43.975);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_407},{t:this.shape_406}]}).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.riesgo, new cjs.Rectangle(-6.9,7.9,586.6999999999999,72.19999999999999), null);
(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC8C3").s().p("An4B2IgBgBIAAitQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIAYAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAANQAOgSAZAAQAZAAASASQASATAAAaQAAAcgSATQgSASgZAAQgPAAgLgGIgBgDIAAgWQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAJAHANAAQAQAAAKgMQAKgLAAgRQAAgPgKgLQgKgMgQAAQgOAAgLAJQgLAKAAAOIAAB4IgBABgAA1AxQgSgSAAgdQAAgaASgTQARgSAbAAQAYAAAOASIAAgNQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAXAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAB3QAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgXAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIAAhCQAAgOgLgKQgKgJgOAAQgRAAgKAMQgKALAAAPQAAARAKALQAKAMARAAQAMAAAJgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAAWQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgLAGgOAAQgbAAgRgSgAhJAxIAAAOQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgYAAIgBgBIAAiwIABgBIAYAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAB6QAAAOAKAJQALAKAOAAQAQAAAKgMQAKgLAAgRQAAgPgKgLQgKgMgQAAQgMAAgJAHQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgVIABgCQAMgHAOAAQAaAAARASQARATAAAaQAAAcgRATQgRASgaAAQgYAAgOgSgAlfAxQgSgSAAgdQAAgcARgRQARgSAbAAQAaAAAQASQAQARAAAcIAAAJIgBABIhNAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBgGABgLIACgBIAzAAQgGgegZAAQgRAAgJANQgJAMABAQQAAARAKALQAKAMASAAQASAAAQgNIACABIAMARQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgVAQgdAAQgcAAgRgSgAqrApQgagaAAgoQAAgmAYgaQAYgaAmgCIABABIAAAZQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQgZADgPASQgQASAAAaQAAAcASASQASASAcAAQAbAAASgSQASgSAAgcQAAgagQgSQgPgSgZgDQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgZIABgBQAmACAYAaQAYAaAAAmQAAAogaAaQgaAagpAAQgqAAgagagAGLBAIgCgBIgogzIgMAAIAAAzQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgYAAIgBgBIAAiwIABgBIAYAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAABmIAMAAIAnguIACgBIAdAAIACABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgxA4IAzA9QAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAgAEOBAIgBgBIAAhCQAAghgdAAQgOAAgJAJQgJAJAAAPIAABCIgBABIgYAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAh3QAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIAYAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAANQANgSAYAAQAWAAAOAOQAOANAAAWIAABLQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAgAiRBAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAhCQAAgQgHgIQgIgJgNAAQgOAAgIAJQgKAJAAAPIAABCQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgXAAIgCgBIAAh3QAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIAXAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAANQANgSAYAAQAXAAAOAOQANANAAAWIAABLIgBABgAKLgKQgKAKgOAAQgRAAgJgNQgJgNAAgRIAAgEQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIASAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAAEQAAAWANAAQANAAAAgWIAAgEIABgBIATAAIABABIAAAEQAAAWAOAAQANAAAAgWIAAgPIhyAAQgJAAAAAGQgDAYgQAOQgQAOgYAAQgYAAgRgRQgRgRAAgYQAAgZARgRQARgRAYAAQAfAAASAaQABAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgIADgGAIQgBABAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgLgSgVAAQgPAAgLALQgLALAAAQQAAAPALALQALALAPAAQAPgBAKgIQALgJABgPQACgLAJgIQAIgHAMAAICGAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAjQAAARgJANQgJANgRAAQgPAAgJgKg");
	this.shape.setTransform(70.975,11.825);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,142,23.7), null);
(lib.botonsobre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));
	// txt_btn
	this.instance = new lib.txt_btn();
	this.instance.setTransform(95.8,20.2,1,1,0,0,0,52.2,14);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({_off:true},1).wait(6));
	// txt2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC8C3").s().p("AgsAUIANgEQAGAVAeAAQAbAAAAgQQAAgHgEgCQgEgEgJgBIgcgDQgbgEAAgUQAAgNALgGQAKgIATAAQAlAAAHAZIgMAEQgHgTgaAAQgaAAAAAQQAAALARADIAcAEQAbADgBAUQABANgLAHQgKAIgUAAQgmAAgKgcg");
	this.shape.setTransform(141.9,23.2);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC8C3").s().p("AglA8QgKgIAAgMQAAgMAKgHQAJgHAYgCIAkgDIAAgDQAAgYgeAAQgdAAgDAVIgOAAQACgOAMgIQAMgJAUAAQArAAAAAjIAAAZQAAAVADALIgPAAIgBgTQgKAWghAAQgQAAgKgHgAgFAWQgQACgGAEQgHAEABAIQAAAQAaAAQAQAAAMgIQALgJAAgOIAAgGgAgEgoIAWgaIAQAAIgaAag");
	this.shape_1.setTransform(130.5,21.325);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEC8C3").s().p("AA9AuIAAgzQAAgdgZAAQgOAAgIAIQgIAIAAAOIAAAyIgMAAIAAg0QAAgcgZAAQgNAAgIAJQgJAJAAAPIAAAvIgMAAIAAhZIAMAAIAAAUQAIgWAZAAQAaAAAGAWQAKgWAZAAQAjAAAAAnIAAA0g");
	this.shape_2.setTransform(115.875,23.075);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC8C3").s().p("AgZAuIAAhZIAMAAIAAAZQADgMAJgIQAIgHAMAAIAHAAIAAANIgGAAQgPAAgHAIQgLALAAAVIAAAmg");
	this.shape_3.setTransform(97.65,23.075);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC8C3").s().p("AgiAjQgOgLAAgXQAAgXAOgNQAMgMAWAAQAXAAANALQANAMAAAVIAAAHIhTAAQAAAPAKAJQAJAJARgBQAaAAAJgUIALAFQgMAbgjAAQgXAAgMgNgAgYgcQgKAIAAAOIBGAAIAAgBQAAgOgLgIQgJgIgQAAQgPAAgJAJg");
	this.shape_4.setTransform(87.4,23.2);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEC8C3").s().p("AgkAuIgCASIgLAAIAAiCIANAAIAAA8QAFgKALgGQALgGANAAQAVAAANANQAMANAAAVQAAAVgNANQgNAOgVAAQgdAAgKgVgAgagHQgKAIAAAPIAAAGQAAAPAKAJQAKAJAQAAQAQAAALgJQAKgKAAgRQAAgSgKgIQgJgKgRAAQgQAAgLAKg");
	this.shape_5.setTransform(75.9,21.325);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEC8C3").s().p("AglApQgJgHAAgMQAAgNAJgHQAKgGAWgBIAlgEIAAgCQAAgagfAAQgcAAgDAWIgOAAQACgOAMgJQANgJASAAQAsAAAAAkIAAAZQAAAUACALIgNAAIgBgTQgMAWgfAAQgRAAgKgHgAgGAEQgPABgGAEQgGAEgBAJQABAPAaAAQAQABAMgJQALgJAAgNIAAgHg");
	this.shape_6.setTransform(63.05,23.2);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEC8C3").s().p("Ag4AYIAPgCQAGAhAoAAQAmAAgBgYQABgLgIgGQgGgFgQgCIgcgFQgkgEAAgdQAAgRAOgJQANgKAYAAQAxAAAIAnIgPADQgHgegjAAQgRAAgKAGQgJAGAAALQAAAKAHAFQAFAGAPACIAbAEQAUADAKAHQAJAJABAQQAAARgOAKQgOALgZAAQg2AAgHgsg");
	this.shape_7.setTransform(50.65,21.325);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(16));
	// masc (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AruEOQglAAAAgrIAAnFQAAgrAlAAIZHAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_1 = new cjs.Graphics().p("ArtEOQglAAAAgrIAAnFQAAgrAlAAIZHAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_2 = new cjs.Graphics().p("ArmEOQglAAAAgrIAAnFQAAgrAlAAIZHAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_3 = new cjs.Graphics().p("ArTEOQgmAAAAgrIAAnFQAAgrAmAAIZHAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AquEOQgmAAAAgrIAAnFQAAgrAmAAIZHAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_5 = new cjs.Graphics().p("ApyEOQglAAAAgrIAAnFQAAgrAlAAIZHAAQAmAAAAArIAAHFQAAArgmAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AoXEOQglAAAAgrIAAnFQAAgrAlAAIZHAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AmZEOQglAAAAgrIAAnFQAAgrAlAAIZHAAQAmAAAAArIAAHFQAAArgmAAg");
	var mask_graphics_8 = new cjs.Graphics().p("Aj8EOQglAAAAgrIAAnFQAAgrAlAAIZHAAQAmAAAAArIAAHFQAAArgmAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah9EOQglAAAAgrIAAnFQAAgrAlAAIZHAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AgjEOQglAAAAgrIAAnFQAAgrAlAAIZHAAQAmAAAAArIAAHFQAAArgmAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AAZEOQgkAAAAgrIAAnFQAAgrAkAAIZIAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AA+EOQglAAAAgrIAAnFQAAgrAlAAIZIAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_13 = new cjs.Graphics().p("ABREOQglAAAAgrIAAnFQAAgrAlAAIZIAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_14 = new cjs.Graphics().p("ABYEOQglAAAAgrIAAnFQAAgrAlAAIZIAAQAlAAAAArIAAHFQAAArglAAg");
	var mask_graphics_15 = new cjs.Graphics().p("ABZEOQglAAAAgrIAAnFQAAgrAlAAIZIAAQAlAAAAArIAAHFQAAArglAAg");
	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:89.415,y:22.9307}).wait(1).to({graphics:mask_graphics_1,x:89.5145,y:22.9307}).wait(1).to({graphics:mask_graphics_2,x:90.2114,y:22.9307}).wait(1).to({graphics:mask_graphics_3,x:92.103,y:22.9307}).wait(1).to({graphics:mask_graphics_4,x:95.7865,y:22.9307}).wait(1).to({graphics:mask_graphics_5,x:101.8594,y:22.9307}).wait(1).to({graphics:mask_graphics_6,x:110.919,y:22.9307}).wait(1).to({graphics:mask_graphics_7,x:123.5625,y:22.9307}).wait(1).to({graphics:mask_graphics_8,x:139.2674,y:22.9307}).wait(1).to({graphics:mask_graphics_9,x:151.911,y:22.9307}).wait(1).to({graphics:mask_graphics_10,x:160.9705,y:22.9307}).wait(1).to({graphics:mask_graphics_11,x:167.0434,y:22.9307}).wait(1).to({graphics:mask_graphics_12,x:170.727,y:22.9307}).wait(1).to({graphics:mask_graphics_13,x:172.6185,y:22.9307}).wait(1).to({graphics:mask_graphics_14,x:173.3154,y:22.9307}).wait(1).to({graphics:mask_graphics_15,x:173.415,y:22.9307}).wait(1));
	// Capa_5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEC8C3").s().p("Ap3DhQhJAAg1g1Qg0g0AAhKIAAhbQAAhKA0g1QA1g0BJAAITvAAQBJAAA0A0QA1A1AABKIAABbQAABKg1A0Qg0A1hJAAg");
	this.shape_8.setTransform(95,22.5);
	var maskedShapeInstanceList = [this.shape_8];
	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(16));
	// Capa_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FEC8C3").ss(1,1,1).p("Ap3jgITvAAQBKAAA0A0QA0A1AABKIAABbQAABKg0A0Qg0A1hKAAIzvAAQhKAAg0g1Qg0g0AAhKIAAhbQAAhKA0g1QA0g0BKAAg");
	this.shape_9.setTransform(95,22.5);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#001479").s().p("Ap3DhQhJAAg1g1Qg0g0AAhKIAAhbQAAhKA0g1QA1g0BJAAITvAAQBJAAA0A0QA1A1AABKIAABbQAABKg1A0Qg0A1hJAAg");
	this.shape_10.setTransform(95,22.5);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(16));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,-1,164,47);
(lib.boton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#001479").s().p("AgsAUIANgEQAGAVAeAAQAbAAAAgQQAAgHgEgCQgEgEgJgBIgcgDQgbgEAAgUQAAgNALgGQAKgIATAAQAlAAAHAZIgMAEQgHgTgaAAQgaAAAAAQQAAALARADIAcAEQAbADgBAUQABANgLAHQgKAIgUAAQgmAAgKgcg");
	this.shape.setTransform(141.9,23.2);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#001479").s().p("AglA8QgKgIAAgMQAAgMAKgHQAJgHAYgCIAkgDIAAgDQAAgYgeAAQgdAAgDAVIgOAAQACgOAMgIQAMgJAUAAQArAAAAAjIAAAZQAAAVADALIgPAAIgBgTQgKAWghAAQgQAAgKgHgAgFAWQgQACgGAEQgHAEABAIQAAAQAaAAQAQAAAMgIQALgJAAgOIAAgGgAgEgoIAWgaIAQAAIgaAag");
	this.shape_1.setTransform(130.5,21.325);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#001479").s().p("AA9AuIAAgzQAAgdgZAAQgOAAgIAIQgIAIAAAOIAAAyIgMAAIAAg0QAAgcgZAAQgNAAgIAJQgJAJAAAPIAAAvIgMAAIAAhZIAMAAIAAAUQAIgWAZAAQAaAAAGAWQAKgWAZAAQAjAAAAAnIAAA0g");
	this.shape_2.setTransform(115.875,23.075);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001479").s().p("AgZAuIAAhZIAMAAIAAAZQADgMAJgIQAIgHAMAAIAHAAIAAANIgGAAQgPAAgHAIQgLALAAAVIAAAmg");
	this.shape_3.setTransform(97.65,23.075);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001479").s().p("AgiAjQgOgLAAgXQAAgXAOgNQAMgMAWAAQAXAAANALQANAMAAAVIAAAHIhTAAQAAAPAKAJQAJAJARgBQAaAAAJgUIALAFQgMAbgjAAQgXAAgMgNgAgYgcQgKAIAAAOIBGAAIAAgBQAAgOgLgIQgJgIgQAAQgPAAgJAJg");
	this.shape_4.setTransform(87.4,23.2);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#001479").s().p("AgkAuIgCASIgLAAIAAiCIANAAIAAA8QAFgKALgGQALgGANAAQAVAAANANQAMANAAAVQAAAVgNANQgNAOgVAAQgdAAgKgVgAgagHQgKAIAAAPIAAAGQAAAPAKAJQAKAJAQAAQAQAAALgJQAKgKAAgRQAAgSgKgIQgJgKgRAAQgQAAgLAKg");
	this.shape_5.setTransform(75.9,21.325);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#001479").s().p("AglApQgJgHAAgMQAAgNAJgHQAKgGAWgBIAlgEIAAgCQAAgagfAAQgcAAgDAWIgOAAQACgOAMgJQANgJASAAQAsAAAAAkIAAAZQAAAUACALIgNAAIgBgTQgMAWgfAAQgRAAgKgHgAgGAEQgPABgGAEQgGAEgBAJQABAPAaAAQAQABAMgJQALgJAAgNIAAgHg");
	this.shape_6.setTransform(63.05,23.2);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#001479").s().p("Ag4AYIAPgCQAGAhAoAAQAmAAgBgYQABgLgIgGQgGgFgQgCIgcgFQgkgEAAgdQAAgRAOgJQANgKAYAAQAxAAAIAnIgPADQgHgegjAAQgRAAgKAGQgJAGAAALQAAAKAHAFQAFAGAPACIAbAEQAUADAKAHQAJAJABAQQAAARgOAKQgOALgZAAQg2AAgHgsg");
	this.shape_7.setTransform(50.65,21.325);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEC8C3").s().p("Ap3DhQhJAAg1g1Qg0g0AAhKIAAhbQAAhKA0g1QA1g0BJAAITvAAQBJAAA0A0QA1A1AABKIAABbQAABKg1A0Qg0A1hJAAg");
	this.shape_8.setTransform(95,22.5);
	this.instance = new lib.botonsobre();
	this.instance.setTransform(150,22.5,1,1,0,0,0,150,22.5);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEC8C3").s().p("AgsAUIANgEQAGAVAeAAQAbAAAAgQQAAgHgEgCQgEgEgJgBIgcgDQgbgEAAgUQAAgNALgGQAKgIATAAQAlAAAHAZIgMAEQgHgTgaAAQgaAAAAAQQAAALARADIAcAEQAbADgBAUQABANgLAHQgKAIgUAAQgmAAgKgcg");
	this.shape_9.setTransform(141.9,23.2);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEC8C3").s().p("AglA8QgKgIAAgMQAAgMAKgHQAJgHAYgCIAkgDIAAgDQAAgYgeAAQgdAAgDAVIgOAAQACgOAMgIQAMgJAUAAQArAAAAAjIAAAZQAAAVADALIgPAAIgBgTQgKAWghAAQgQAAgKgHgAgFAWQgQACgGAEQgHAEABAIQAAAQAaAAQAQAAAMgIQALgJAAgOIAAgGgAgEgoIAWgaIAQAAIgaAag");
	this.shape_10.setTransform(130.5,21.325);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEC8C3").s().p("AA9AuIAAgzQAAgdgZAAQgOAAgIAIQgIAIAAAOIAAAyIgMAAIAAg0QAAgcgZAAQgNAAgIAJQgJAJAAAPIAAAvIgMAAIAAhZIAMAAIAAAUQAIgWAZAAQAaAAAGAWQAKgWAZAAQAjAAAAAnIAAA0g");
	this.shape_11.setTransform(115.875,23.075);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEC8C3").s().p("AgZAuIAAhZIAMAAIAAAZQADgMAJgIQAIgHAMAAIAHAAIAAANIgGAAQgPAAgHAIQgLALAAAVIAAAmg");
	this.shape_12.setTransform(97.65,23.075);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEC8C3").s().p("AgiAjQgOgLAAgXQAAgXAOgNQAMgMAWAAQAXAAANALQANAMAAAVIAAAHIhTAAQAAAPAKAJQAJAJARgBQAaAAAJgUIALAFQgMAbgjAAQgXAAgMgNgAgYgcQgKAIAAAOIBGAAIAAgBQAAgOgLgIQgJgIgQAAQgPAAgJAJg");
	this.shape_13.setTransform(87.4,23.2);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC8C3").s().p("AgkAuIgCASIgLAAIAAiCIANAAIAAA8QAFgKALgGQALgGANAAQAVAAANANQAMANAAAVQAAAVgNANQgNAOgVAAQgdAAgKgVgAgagHQgKAIAAAPIAAAGQAAAPAKAJQAKAJAQAAQAQAAALgJQAKgKAAgRQAAgSgKgIQgJgKgRAAQgQAAgLAKg");
	this.shape_14.setTransform(75.9,21.325);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEC8C3").s().p("AglApQgJgHAAgMQAAgNAJgHQAKgGAWgBIAlgEIAAgCQAAgagfAAQgcAAgDAWIgOAAQACgOAMgJQANgJASAAQAsAAAAAkIAAAZQAAAUACALIgNAAIgBgTQgMAWgfAAQgRAAgKgHgAgGAEQgPABgGAEQgGAEgBAJQABAPAaAAQAQABAMgJQALgJAAgNIAAgHg");
	this.shape_15.setTransform(63.05,23.2);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEC8C3").s().p("Ag4AYIAPgCQAGAhAoAAQAmAAgBgYQABgLgIgGQgGgFgQgCIgcgFQgkgEAAgdQAAgRAOgJQANgKAYAAQAxAAAIAnIgPADQgHgegjAAQgRAAgKAGQgJAGAAALQAAAKAHAFQAFAGAPACIAbAEQAUADAKAHQAJAJABAQQAAARgOAKQgOALgZAAQg2AAgHgsg");
	this.shape_16.setTransform(50.65,21.325);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FEC8C3").ss(1,1,1).p("ApyjcITlAAQBKAAAzA1QA0A1AABKIAABRQAABLg0AzQg0A2hJAAIzlAAQhKAAg0g2Qg0g0AAhKIAAhRQAAhKA0g1QA0g1BKAAg");
	this.shape_17.setTransform(95,22.45);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF00FF").s().p("EgkHAF7IAAr1MBIPAAAIAAL1g");
	this.shape_18.setTransform(-25.1,24.575);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_18}]},1).wait(1));
	this._renderFirstFrame();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.3,-13.3,462.4,75.8);
// stage content:
(lib._728x90_DP_DV360_RON_DEPOSITO_OPEN6MESES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.actionFrames = [0,359];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
	}
	this.frame_359 = function() {
		this.stop()
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(359).call(this.frame_359).wait(1));
	// endoso
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC8C3").s().p("AjEBPIAAhcQAOgEAMAAQAlAAAAAiQAAATgJAJQgJAKgSAAIgMgCIAAAagAi1gEIAAAtIALABQAWAAABgYQgBgXgXAAgAo4AuQgVgLAAgQQAAgMALgIQAMgKARgFQAAAKAFAHIAWAmQAEAGAAAEIABgCQAJgPgJgQIgSgfQgJgPAJgQIABgBQABAFACAEIAbAuQADAEABAGIABgCQAJgPgJgPIgSggQgKgPAKgQIABgBQABAFACAEIAXAnQADAHABAHQATAFAKAKQAMAIAAAMQAAAQgVALQgVAMgeAAQgeAAgVgMgAgUAyQgBgGADgHQALAFANAAQAUAAgBgMQAAgGgDgEQgFgDgJgEIgHgDQgKgFgEgFQgHgGABgKQAAgaAfAAQAOAAALAEQAAAHgDAHQgJgEgNAAQgQAAAAAMQAAAJANAGIAIACQAMAFAGAHQAGAGAAAKQAAAMgJAHQgJAHgRAAQgQAAgKgFgAmSAqQgNgOAAgWQAAgWAOgNQANgNAYAAQAPAAALAEIgDANQgKgDgNAAQgRAAgJAJQgJAJAAAQQAAARAKAKQAIAJAQAAIANgBIAAgnIAPAAIAAAwQgMAFgSAAQgWAAgNgNgAHbASQAAgQAIgJQAIgKASAAQAPAAAHAJQAIAIgBANIAAALIgvAAQACASATAAQANAAAMgFIgDAOQgJAEgNAAQglAAAAglgAHqAMIAhAAQAAgRgQAAQgPAAgCARgAGXAuQgIgKAAgRQAAgSAKgJQAKgJASAAIALABIAAgXQAFgCAKAAIAABeIgOAAIgBgJQgFALgOAAQgOAAgIgJgAGeATQABAYASAAQAJAAAGgGIAAgoIgMgCQgVAAgBAYgAEAAuQgIgKAAgRQAAgkAmAAQAOAAALAEIAABCIgOAAIAAgIQgHAKgMAAQgOAAgIgJgAEHATQAAAYATAAQAJAAAFgFIAAgqIgKgBQgXAAAAAYgADNAgIAAhGQAHgDAIAAIAAAaIAXAAIgBANIgWAAIAAAgQAAAMALAAQAGAAAGgCIgCANQgGACgGAAQgYAAAAgXgAA7AuQgJgKABgRQAAgSAJgJQAKgJASAAQAPAAALAEIAABCIgOAAIgBgIQgGAKgNAAQgOAAgHgJgABBATQABAYASAAQAJAAAGgFIAAgqIgLgBQgWAAgBAYgAhzAsQgJgJAAgQQAAgRAKgJQAJgKARAAQAQAAAKAKQAIAJAAAPQAAASgJAKQgKAKgRAAQgQAAgJgLgAhtASQAAAYAUAAQAUAAAAgYQAAgXgUAAQgUAAAAAXgAkQAdIAAgtIAPAAIAAAqQAAAIAEAEQACAEAJAAQAIAAAHgFIAAg1IAPAAIAABFIgOAAIAAgJQgJALgMAAQgZAAAAgagAInA1IAAhCQAMgEAOAAIANAAQAAAHgBAGIgMgBIgLABIAAA5gAF1A1IAAgrQAAgIgEgDQgEgEgLAAIgMACIAAA4IgOAAIAAhCQAOgEANAAQARAAAIAGQAHAHAAAMIAAAtgACvA1IAAgrQAAgIgEgDQgEgEgKAAIgMACIAAA4IgPAAIAAhCQAPgEAMAAQASAAAIAGQAHAHAAAMIAAAtgAlAA1IAAhCQAMgEANAAIAOAAQgBAHgBAGIgLgBIgLABIAAA5g");
	this.shape.setTransform(69,71.125);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));
	// marco
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#041478").ss(1,1,1).p("Eg43gG/MBxvAAAIAAN/MhxvAAAg");
	this.shape_1.setTransform(364.025,44.725);
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));
	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(71.4,25.35,0.8318,0.8318,0,0,0,71.5,16.2);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));
	// riesgo
	this.instance_1 = new lib.riesgo();
	this.instance_1.setTransform(294.55,69.75,0.95,0.95,0,0,0,131.2,49.5);
	this.instance_1.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:49.75,alpha:1},16,cjs.Ease.cubicOut).wait(64).to({y:39.75,alpha:0},18,cjs.Ease.cubicInOut).to({_off:true},1).wait(261));
	// txt1
	this.instance_2 = new lib.txt1();
	this.instance_2.setTransform(303.25,40.7,1,1,0,0,0,139.2,-11.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({y:30.7,alpha:1},20,cjs.Ease.cubicInOut).wait(80).to({y:18.7,alpha:0},18,cjs.Ease.cubicOut).to({_off:true},1).wait(104).to({_off:false,y:10.7},0).wait(9).to({y:40.7},0).to({y:30.7,alpha:1},20,cjs.Ease.cubicOut).wait(13));
	// txt3
	this.instance_3 = new lib.txt3();
	this.instance_3.setTransform(304.7,24.05,1,1,0,0,0,57.3,-36.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({_off:false},0).to({y:14.05,alpha:1},20,cjs.Ease.cubicInOut).wait(80).to({y:2.05,alpha:0},18,cjs.Ease.cubicOut).to({_off:true},1).wait(104).to({_off:false,y:4.05},0).wait(9).to({y:24.05},0).to({y:14.05,alpha:1},20,cjs.Ease.cubicOut).wait(13));
	// boton
	this.instance_4 = new lib.boton();
	this.instance_4.setTransform(666.35,59.3,0.5539,0.5539,0,0,0,95.4,23.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.boton(), 3);
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({_off:false},0).to({y:65.8,alpha:1},18,cjs.Ease.cubicInOut).wait(262));
	// txt4
	this.instance_5 = new lib.txt4();
	this.instance_5.setTransform(304.7,107.55,1,1,0,0,0,57.3,-28.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(205).to({_off:false},0).to({y:95.55,alpha:1},17,cjs.Ease.cubicOut).wait(96).to({y:88.55,alpha:0},17,cjs.Ease.cubicOut).to({_off:true},1).wait(24));
	this._renderFirstFrame();
}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363.1,29.6,365.9,68.80000000000001);
// library properties:
lib.properties = {
	id: 'C545A1CD1C664B8FAA04A6D1F8FAAE42',
	width: 728,
	height: 90,
	fps: 24,
	color: "#001479",
	opacity: 1.00,
	manifest: [],
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
an.compositions['C545A1CD1C664B8FAA04A6D1F8FAAE42'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}
})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
</script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("C545A1CD1C664B8FAA04A6D1F8FAAE42");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib._728x90_DP_DV360_RON_DEPOSITO_OPEN6MESES();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
</script>
<!-- write your code here -->
<script type="text/javascript">
    
  (function() {
    var MAX_URL_PARAM_LENGTH = 34;
    var CLICK_X_URL_KEY = 'nx';
    var CLICK_Y_URL_KEY = 'ny';
    var CREATIVE_DIMENSIONS_KEY = 'dim';
    var AD_URL_PARAM = '&adurl=';

    var relegateNavigation = '';
    var urlParamMap = {};

    var isNewtonTokenSet = false;
    var isTurtleXAdClick = false;
    var reportingIds = {};

    urlParamMap[CLICK_X_URL_KEY] = null;
    urlParamMap[CLICK_Y_URL_KEY] = null;
    urlParamMap[CREATIVE_DIMENSIONS_KEY] = null;

    var handleClickTagMessage = function(e) {
      try {
        var eventData = JSON.parse(e.data);
      } catch (err) {
        return;
      }
      if (eventData.isInitClickTag) {
        if (eventData.clickTags) {
          for (var i = 0; i < eventData.clickTags.length; i++) {
            var clkTag = eventData.clickTags[i];
            window[clkTag.name] = clkTag.url;

            if (clkTag.eTldPlusOne) {
              eTldPlusOnes[clkTag.url] = clkTag.eTldPlusOne;
            }
            if (clkTag.reportingId) {
              reportingIds[clkTag.url] = clkTag.reportingId;
            }
          }
        } else if (eventData.clickTag) {
          window.clickTag = eventData.clickTag;
        }
        relegateNavigation = eventData.relegateNavigation;
      }
      if (isNewtonEnabled(eventData) && !isNewtonTokenSet) {
        var newtonOt2Token = eventData.newtonOt2Token;
        enableAttributionReportingApi(newtonOt2Token);
      }
      if (eventData.isTurtleXAdClick) {
        isTurtleXAdClick = true;
      }
    };

    var isNewtonEnabled = function(eventData) {
      return 'newtonOt2Token' in eventData;
    }

    var enableAttributionReportingApi = function(originTrialToken) {
      if (/Chrome/.test(window.navigator.userAgent)) {
        var meta = document.createElement('meta');
        meta.httpEquiv = 'origin-trial';
        meta.content = String(originTrialToken);
        document.getElementsByTagName('head')[0].appendChild(meta);
        isNewtonTokenSet = true;
      }
    };

    var storeClickCoordinates = function(e) {
      urlParamMap[CLICK_X_URL_KEY] = Math.round(e.clientX);
      urlParamMap[CLICK_Y_URL_KEY] = Math.round(e.clientY);
    };

    var getCreativeDimensions = function() {
      return window.innerWidth + 'x' + window.innerHeight;
    }

    var getExitClickParams = function(e) {
      urlParamMap[CREATIVE_DIMENSIONS_KEY] = getCreativeDimensions();

      var exitParams = '';
      for (var key in urlParamMap) {
        exitParams += '&' + key + '=';
        if (urlParamMap[key] !== null) {
          exitParams += urlParamMap[key];
        }
      }
      return exitParams;
    }

    var appendExitClickParams = function(url) {
      var adUrlIndex = url.toLowerCase().indexOf(AD_URL_PARAM);
      var paramsToBeAdded = getExitClickParams();
      if (adUrlIndex > -1 && paramsToBeAdded.length <= MAX_URL_PARAM_LENGTH) {
        url = url.substr(0, adUrlIndex) + paramsToBeAdded +
          url.substr(adUrlIndex);
      };
      return url;
    };

    if (open.call) {
      window.open = function(open) {
        return function(url, name, features) {
          if (isTurtleXAdClick && !!reportingIds[url]) {
            var message = {
              'reportingId': reportingIds[url],
              'clickX': urlParamMap[CLICK_X_URL_KEY],
              'clickY': urlParamMap[CLICK_Y_URL_KEY],
              'creativeDims': getCreativeDimensions()
              };
            parent.postMessage(JSON.stringify(message), '*');
          }
          url = appendExitClickParams(url);
          if (relegateNavigation === 'parent') {
            var message = {'clickTag': url, 'isPostClickTag': true};
            parent.postMessage(JSON.stringify(message), '*');
          } else {
            var args = [url, name];
            var windowFeatures = '';

            if (features) {
              windowFeatures = windowFeatures.concat(features);
            }
            if (isNewtonTokenSet &&
                !!document.featurePolicy?.allowedFeatures().includes(
                  'attribution-reporting')) {
              if (features) {
                if (!features.includes('attributionsrc')) {
                  windowFeatures = windowFeatures.concat(features, ', attributionsrc');
                }
              } else {
                windowFeatures = windowFeatures.concat('attributionsrc');
              }
            }

            if (windowFeatures) {
              args.push(windowFeatures);
            }
            open.apply(window,args);
          }
        };
      }(window.open);
    }

    if (window.addEventListener) {
      window.addEventListener(
          'message', handleClickTagMessage, false);
      window.addEventListener('mousedown', storeClickCoordinates, true);
    } else {
      window.attachEvent('onmessage', handleClickTagMessage);
    }
  })();
    
  </script></head>
<body onload="init();" style="margin:0px;">
	<a href="javascript:window.open(window.clickTag)">
		<div id="animation_container" style="background-color:rgba(0, 20, 121, 1.00); width:728px; height:90px">
			<canvas id="canvas" width="728" height="90" style="position: absolute; display: block; background-color:rgba(0, 20, 121, 1.00);"></canvas>
			<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:728px; height:90px; position: absolute; left: 0px; top: 0px; display: block;">
			</div>
		</div>
	</a>
</body>
</html>