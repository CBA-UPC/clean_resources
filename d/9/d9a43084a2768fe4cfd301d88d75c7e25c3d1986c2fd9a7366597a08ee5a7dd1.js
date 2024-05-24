(function($){var reEscape=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\"].join("|\\")+")","g");function fnFormatResult(value,data,currentValue){var pattern="("+currentValue.replace(reEscape,"\\$1")+")";return value.replace(new RegExp(pattern,"gi"),"<strong>$1</strong>");}function Autocomplete(el,options){this.el=$(el);this.el.attr("autocomplete","off");this.suggestions=[];this.data=[];this.badQueries=[];this.selectedIndex=-1;this.currentValue=this.el.val();this.intervalId=0;this.cachedResponse=[];this.onChangeInterval=null;this.ignoreValueChange=false;this.serviceUrl=options.serviceUrl;this.serviceType=options.serviceType||"json";this.isLocal=false;this.options={autoSubmit:false,minChars:1,maxHeight:300,deferRequestBy:0,width:0,highlight:true,params:{},fnFormatResult:fnFormatResult,delimiter:null,zIndex:9999};this.initialize();this.setOptions(options);}$.fn.suggest=function(options){return new Autocomplete(this.get(0)||$("<input />"),options);};Autocomplete.prototype={killerFn:null,initialize:function(){var me,uid,autocompleteElId;me=this;uid=Math.floor(Math.random()*1048576).toString(16);autocompleteElId="Autocomplete_"+uid;this.killerFn=function(e){if($(e.target).parents(".autocomplete").size()===0){me.killSuggestions();me.disableKillerFn();}};if(!this.options.width){this.options.width=this.el.width()+10;}this.mainContainerId="AutocompleteContainter_"+uid;if(!this.el.attr("id")){this.el.attr("id",autocompleteElId+"_owner");}this.el.after('<div id="'+this.mainContainerId+'" style="position:absolute;z-index:9999;"><div class="autocomplete-w1"><span id="'+autocompleteElId+'_status" class="autocomplete-status" role="status" aria-live="polite">Suggestions enabled.</span><div class="autocomplete" id="'+autocompleteElId+'" aria-hidden="true" aria-owner="'+this.el.attr("id")+'" style="display:none; width:300px;"></div></div></div>');this.el.attr("role","textbox");this.el.attr("aria-multiline","false");this.el.attr("aria-autocomplete","list");this.el.attr("aria-haspopup","true");this.el.attr("aria-owns",autocompleteElId);this.container=$("#"+autocompleteElId);$("#"+this.mainContainerId).css({width:this.options.width});this.livestatus=$("#"+autocompleteElId+"_status");this.livestatus.css({width:this.options.width-20});this.fixPosition();if(window.opera){this.el.keypress(function(e){me.onKeyPress(e);});}else{this.el.keydown(function(e){me.onKeyPress(e);});}this.el.keyup(;this.el.blur(function(){me.enableKillerFn();});this.el.focus(function(){me.fixPosition();});(function(){var winWidth=$(window).width(),winHeight=$(window).height(),beenResized=false,handleResize=function(){var newWinWidth=$(window).width(),newWinHeight=$(window).height();if(beenResized&&newWinWidth==winWidth&&newWinHeight==winHeight){return;}beenResized=true;me.fixPosition();winWidth=newWinWidth;winHeight=newWinHeight;};$(window).resize(handleResize);$(window).resize();}());},setOptions:function(options){var o=this.options;$.extend(o,options);if(o.lookup){this.isLocal=true;if($.isArray(o.lookup)){o.lookup={suggestions:o.lookup,data:[]};}}$("#"+this.mainContainerId).css({zIndex:o.zIndex});this.container.css({maxHeight:o.maxHeight+"px",width:o.width});},clearCache:disable:function(){this.disabled=true;},enable:fixPosition:function(){var offset=this.el.offset(),width=this.el.width();$("#"+this.mainContainerId).css({top:(offset.top+this.el.innerHeight())+"px",left:offset.left+"px",width:width});},enableKillerFn:function(){var me=this;$(document).bind("click",me.killerFn);},disableKillerFn:killSuggestions:function(){var me=this;this.stopKillSuggestions();this.intervalId=window.setInterval(300);},stopKillSuggestions:onKeyPress:function(e){if(this.disabled||!this.enabled){return;}switch(e.keyCode){case 27:this.el.val(this.currentValue);this.hide();break;case 9:case 13:if(this.selectedIndex===-1){this.hide();return;}this.select(this.selectedIndex);if(e.keyCode===9){return;}break;case 38:this.moveUp();break;case 40:this.moveDown();break;default:return;}e.stopImmediatePropagation();e.preventDefault();},onKeyUp:function(e){if(this.disabled){return;}switch(e.keyCode){case 38:case 40:return;}clearInterval(this.onChangeInterval);if(this.currentValue!==this.el.val()){if(this.options.deferRequestBy>0){var me=this;this.onChangeInterval=setInterval(this.options.deferRequestBy);}else{this.onValueChange();}}},onValueChange:function(){clearInterval(this.onChangeInterval);this.currentValue=this.el.val();var q=this.getQuery(this.currentValue);this.selectedIndex=-1;if(this.ignoreValueChange){this.ignoreValueChange=false;return;}if(q===""||q.length<this.options.minChars){this.hide();}else{this.getSuggestions(q.toLowerCase());}},getQuery:function(val){var d,arr;d=this.options.delimiter;if(!d){return $.trim(val);}arr=val.split(d);return $.trim(arr[arr.length-1]);},getSuggestionsLocal:function(q){var ret,arr,len,val,i;arr=this.options.lookup;len=arr.suggestions.length;ret={suggestions:[],data:[]};q=q.toLowerCase();for(i=0;i<len;i++){val=arr.suggestions[i];if(val.toLowerCase().indexOf(q)===0){ret.suggestions.push(val);ret.data.push(arr.data[i]);}}return ret;},getSuggestions:function(q){var cr,me;cr=this.isLocal?this.getSuggestionsLocal(q):this.cachedResponse[q];if(cr&&$.isArray(cr.suggestions)){this.suggestions=cr.suggestions;this.data=cr.data;this.suggest();}else{if(!this.isBadQuery(q)){me=this;me.options.params.q=q;$.ajax({url:this.serviceUrl,dataType:this.serviceType,data:me.options.params,success:);}}},isBadQuery:function(q){var i=this.badQueries.length;while(i--){if(q.indexOf(this.badQueries[i])===0){return true;}}return false;},hide:function(){this.enabled=false;this.selectedIndex=-1;this.container.attr("aria-hidden","true").hide();},suggest:function(){if(this.suggestions.length===0){this.livestatus.text("0 suggestions.");this.hide();return;}var me,len,div,f,v,i,s,mOver,mClick;me=this;len=this.suggestions.length;f=this.options.fnFormatResult;v=this.getQuery(this.currentValue);mOver=function(xi){return function(){me.activate(xi);};};mClick=this.container.hide().empty();for(i=0;i<len;i++){s=this.suggestions[i];div=$((me.selectedIndex===i?'<div class="selected"':"<div")+' title="'+s+'">'+f(s,this.data[i],v)+"</div>");div.mouseover(mOver(i));div.click(mClick(i));this.container.append(div);}this.enabled=true;this.container.attr("aria-hidden","false").show();this.livestatus.text(len+" suggestions.");},processResponse:function(json,query){var response={query:null,suggestions:[],data:[]},tmp,i,length;try{tmp=json;response.query=query;if(tmp&&tmp.length&&tmp.length==2){response.suggestions=tmp[1];}}catch(err){return;}if(!$.isArray(response.data)){response.data=[];}if(!this.options.noCache){this.cachedResponse[response.query]=response;if(response.suggestions.length===0){this.badQueries.push(response.query);}}if(response.query===this.getQuery(this.currentValue)){this.suggestions=response.suggestions;this.data=response.data;this.suggest();}},activate:function(index){var divs,activeItem;divs=this.container.children();if(this.selectedIndex!==-1&&divs.length>this.selectedIndex){$(divs.get(this.selectedIndex)).removeClass();}this.selectedIndex=index;if(this.selectedIndex!==-1&&divs.length>this.selectedIndex){activeItem=divs.get(this.selectedIndex);$(activeItem).addClass("selected");}return activeItem;},deactivate:function(div,index){div.className="";if(this.selectedIndex===index){this.selectedIndex=-1;}},select:function(i){var selectedValue,f;selectedValue=this.suggestions[i];if(selectedValue){this.el.val(selectedValue);if(this.options.autoSubmit){f=this.el.parents("form");if(f.length>0){$("#suggested",f).attr("value","true");f.trigger("submit");}}this.ignoreValueChange=true;this.hide();this.onSelect(i);}},moveUp:function(){if(this.selectedIndex===-1){return;}if(this.selectedIndex===0){this.container.children().get(0).className="";this.selectedIndex=-1;this.el.val(this.currentValue);return;}this.adjustScroll(this.selectedIndex-1);},moveDown:function(){if(this.selectedIndex===(this.suggestions.length-1)){return;}this.adjustScroll(this.selectedIndex+1);},adjustScroll:function(i){var activeItem,offsetTop,upperBound,lowerBound;activeItem=this.activate(i);offsetTop=activeItem.offsetTop;upperBound=this.container.scrollTop();lowerBound=upperBound+this.options.maxHeight-25;if(offsetTop<upperBound){this.container.scrollTop(offsetTop);}else{if(offsetTop>lowerBound){this.container.scrollTop(offsetTop-this.options.maxHeight+25);}}this.el.val(this.getValue(this.suggestions[i]));},onSelect:function(i){var me,fn,s,d;me=this;fn=me.options.onSelect;s=me.suggestions[i];d=me.data[i];me.el.val(me.getValue(s));if($.isFunction(fn)){fn(s,d,me.el);}},getValue:function(value){var del,currVal,arr,me;me=this;del=me.options.delimiter;if(!del){return value;}currVal=me.currentValue;arr=currVal.split(del);if(arr.length===1){return value;}return currVal.substr(0,currVal.length-arr[arr.length-1].length)+value;}};}(jQuery));jQuery(function($){var common_settings={serviceUrl:"http://www.loc.gov/search/suggest/",seviceType:"json",minChars:2,delimiter:/(,|;)\s*/,zIndex:9999,deferRequestBy:100,noCache:false,autoSubmit:true};if(!window.LOCSuggest){LOCSuggest=$.extend({},common_settings);}else{LOCSuggest=$.extend({},common_settings,LOCSuggest);}var auto;auto=$("input.locsuggest").suggest(LOCSuggest);auto.enable();$("head").append("<style>.autocomplete-w1 { position:absolute; top:0px; left:0px; margin:8px 0 0 6px; /* IE6 fix: */ _background:none; _margin:0; }.autocomplete { border:1px solid #999; background:#FFF; cursor:default; text-align:left; max-height:350px; overflow:auto; margin:-6px 6px 6px -6px; _height:350px;  _margin:0; _overflow-x:hidden; }.autocomplete .selected { background:#F0F0F0; }.autocomplete div { padding:2px 5px; white-space:nowrap; }.autocomplete strong { font-weight:normal; color:#3399FF; }.autocomplete-status { font-weight:normal; font-size:10px; color:#fff;  float:right; text-align:right; position:absolute; top:-999px; left:-999px;}</style><!--[if lte IE 7]><style>.autocomplete-status {  margin:-40px 15px 0 0;}</style><![endif]-->");});