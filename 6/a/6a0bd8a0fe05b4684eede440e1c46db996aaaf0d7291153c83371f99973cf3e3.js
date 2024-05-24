"use strict";(function(win){var version='1.0';var ofs='offset',cl='client';var noop=var testedOnce=false;var testExecuting=false;var isOldIEevents=(win.addEventListener===undefined);var _options={loopDelay:50,maxLoop:5,debug:true,found:noop,notfound:noop,complete:noop}
var AjaxHelper=function(opts){var xhr=new XMLHttpRequest();this.success=opts.success||noop;this.fail=opts.fail||noop;var me=this;var method=opts.method||'get';this.abort=xhr.onreadystatechange=stateChange;start();}
var BlockListTracker=var listeners=[];var baitNode=null;var quickBait={cssClass:'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links'};var baitTriggers={nullProps:[ofs+'Parent'],zeroProps:[]};baitTriggers.zeroProps=[ofs+'Height',ofs+'Left',ofs+'Top',ofs+'Width',ofs+'Height',cl+'Height',cl+'Width'];var exeResult={quick:null,remote:null};var findResult=null;var timerIds={test:0,download:0};function attachEventListener(dom,eventName,handler){if(isOldIEevents){dom.attachEvent('on'+eventName,handler);}
else{dom.addEventListener(eventName,handler,false);}}
var ajaxDownloads=[];function loadExecuteUrl(url){var ajax,result;blockLists.addUrl(url);ajax=new AjaxHelper({url:url,success:function(data){log('downloaded file '+url);result=blockLists.setResult(url,'success',data);try{var intervalId=0,retryCount=0;var tryExecuteTest=if(findResult==true){return;}
if(tryExecuteTest(result.data)){return;}
else{log('Pause before test execution');intervalId=setInterval(250);}}
catch(ex){log(ex.message+' url: '+url,true);}},fail:);ajaxDownloads.push(ajax);}
function beginTest(bait){log('start beginTest');if(findResult==true){return;}
testExecuting=true;castBait(bait);exeResult.quick='testing';timerIds.test=setTimeout(function(){reelIn(bait,1);},5);}
function castBait(bait){var i,d=document,b=d.body;var t;var baitStyle='width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;'
if(bait==null||typeof(bait)=='string'){log('invalid bait being cast');return;}
if(bait.style!=null){baitStyle+=bait.style;}
baitNode=makeEl('div',{'class':bait.cssClass,'style':baitStyle});log('adding bait node to DOM');b.appendChild(baitNode);for(i=0;i<baitTriggers.nullProps.length;i++){t=baitNode[baitTriggers.nullProps[i]];}
for(i=0;i<baitTriggers.zeroProps.length;i++){t=baitNode[baitTriggers.zeroProps[i]];}}
function reelIn(bait,attemptNum){var i,k,v;var body=document.body;var found=false;if(baitNode==null){log('recast bait');castBait(bait||quickBait);}
if(typeof(bait)=='string'){log('invalid bait used',true);if(clearBaitNode()){setTimeout(function(){testExecuting=false;},5);}
return;}
if(timerIds.test>0){clearTimeout(timerIds.test);timerIds.test=0;}
if(body.getAttribute('abp')!==null){log('found adblock body attribute');found=true;}
for(i=0;i<baitTriggers.nullProps.length;i++){if(baitNode[baitTriggers.nullProps[i]]==null){found=true;log('found adblock null attr: '+baitTriggers.nullProps[i]);break;}
if(found==true){break;}}
for(i=0;i<baitTriggers.zeroProps.length;i++){if(found==true){break;}
if(baitNode[baitTriggers.zeroProps[i]]==0){found=true;log('found adblock zero attr: '+baitTriggers.zeroProps[i]);}}
if(window.getComputedStyle!==undefined){var baitTemp=window.getComputedStyle(baitNode,null);if(baitTemp.getPropertyValue('display')=='none'||baitTemp.getPropertyValue('visibility')=='hidden'){found=true;log('found adblock computedStyle indicator');}}
testedOnce=true;if(found||attemptNum++>=_options.maxLoop){findResult=found;log('exiting test loop - value: '+findResult);notifyListeners();if(clearBaitNode()){setTimeout(5);}}
else{timerIds.test=setTimeout(_options.loopDelay);}}
function clearBaitNode(){if(baitNode===null){return true;}
try{if(isFunc(baitNode.remove)){baitNode.remove();}
document.body.removeChild(baitNode);}
catch(ex){}
baitNode=null;return true;}
function notifyListeners(){var i,funcs;if(findResult===null){return;}
for(i=0;i<listeners.length;i++){funcs=listeners[i];try{if(funcs!=null){if(isFunc(funcs['complete'])){funcs['complete'](findResult);}
if(findResult&&isFunc(funcs['found'])){funcs['found']();}
else if(findResult===false&&isFunc(funcs['notfound'])){funcs['notfound']();}}}
catch(ex){log('Failure in notify listeners '+ex.Message,true);}}}
function attachOrFire(){var fireNow=false;var fn;if(document.readyState){if(document.readyState=='complete'){fireNow=true;}}
fn=if(fireNow){fn();}
else{attachEventListener(win,'load',fn);}}
var blockLists;var impl={version:version,init:function(options){var k,v,funcs;if(!options){return;}
funcs={complete:noop,found:noop,notfound:noop};for(k in options){if(options.hasOwnProperty(k)){if(k=='complete'||k=='found'||k=='notFound'){funcs[k.toLowerCase()]=options[k];}
else{_options[k]=options[k];}}}
listeners.push(funcs);blockLists=new BlockListTracker();attachOrFire();}}
win['adblockDetector']=impl;})(window);