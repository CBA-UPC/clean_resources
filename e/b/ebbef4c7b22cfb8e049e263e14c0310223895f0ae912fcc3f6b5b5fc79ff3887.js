//Comscore
window._comscore = window._comscore || [];
_comscore.push({
    c1: "2",
    c2: '23384447',
    cs_ucfr: 0
});
var script = document.createElement('script');
script.async = true;
script.type = 'text/javascript';
script.src = (document.location.protocol === "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(script, node);
){for(var i=0;i<modules.length;i++){var module=modules[i];module&&"object"==typeof module&&"function"==typeof module.init?module.init():module&&"function"==typeof module&&module()}},this.log=function(){if(window.console){var args=Array.prototype.slice.call(arguments);args.unshift("[OUTKICK.Articles]");try{return window.console.log.apply(window.console,args)}catch(err){}}}}});
Modulr.define("outkick.article:main",["require","jquery","helper","cdn"],function(require,$,Helper,CDN){var MODULES_INIT=["outkick.shared:modules/social-share-buttons","outkick.shared:modules/outkick-tooltip","outkick.article:modules/jw-player-scripts"];0<MODULES_INIT.length&&require(MODULES_INIT,function(){var args=Array.prototype.slice.call(arguments);Helper.execModules(args)})});
Modulr.define("outkick.article:modules/jw-player-scripts",["require","jquery","lodash","helper"],function(require,$,_,Helper){return new function(){var script=document.createElement("script");script.src=`https://cdn.jwplayer.com/libraries/${window.innerWidth<=600?"ZZoOaN5D":601<window.innerWidth&&window.innerWidth<1024?"bl37PYGe":"cCt9bCNX"}.js`,document.head.appendChild(script)}});
!function(Modulr,FNC){var config;Modulr.getInstance("outkick.article")||(config={instance:"outkick.article",baseDomain:FNC.CDN.domain,baseUrl:"/static/orion/scripts/outkick/article/app",masterFile:"/static/orion/scripts/core/utils/modulr/master.js",paths:{},packages:["core.plugins","core.components","core.templates","outkick.shared"],shim:{jquery:{src:"/static/orion/scripts/core/utils/jquery/core.js",exports:"jQuery"},lodash:{src:"/static/orion/scripts/core/utils/lodash.js",exports:"_"},modernizr:{src:"/static/orion/scripts/core/utils/modernizr.js",exports:"Modernizr"},"jquery.cookie":{src:"/static/orion/scripts/core/utils/jquery/plugins/cookie.js",exports:"jQuery.cookie"}}},(Modulr=Modulr.config(config)).define("cdn",function(){return FNC.CDN}),Modulr.define("isa",function(){return FNC.ISA}),Modulr.require(["main"]))}(window.Modulr,window.FNC);