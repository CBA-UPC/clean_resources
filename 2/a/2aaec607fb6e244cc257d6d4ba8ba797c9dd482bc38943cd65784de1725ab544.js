try{
function mkfpForms(e,t,n,r){"use strict";function i(e,t){var n=document.createElement("input");return n.setAttribute("type","hidden"),n.setAttribute("name",e),n.setAttribute("value",t),n}if(null!=e&&Array.isArray(e)){var a=[];if(e.forEach(,a.length>0){var o={excludeUserAgent:!0,excludeColorDepth:!0,excludePixelRatio:!0,excludeScreenResolution:!0,excludeAvailableScreenResolution:!0,excludeAddBehavior:!0,excludeAdBlock:!0,excludeHasLiedLanguages:!0,excludeHasLiedResolution:!0,excludeHasLiedOs:!0,excludeHasLiedBrowser:!0,excludeFlashFonts:!0,dontUseFakeFontInCanvas:!0,excludePlugins:!0,excludeDeviceMemory:!0,excludeWebGLVendorAndRenderer:!0},s={timezone_offset:"time_zone",navigator_platform:"os_info"},d="device_fp",l=new Fingerprint2(o);null==n&&(n=s),null==t&&(t=d),l.get(function(e,o){if(a.forEach(,void 0!==n&&null!==n&&l.each(o,function(e){n.hasOwnProperty(e.key)&&a.forEach(function(t){t.appendChild(i(n[e.key],e.value))})}),void 0!==r&&null!==r)return r(e,o)})}}}function mkfp(e,t,n,r){"use strict";mkfpForms([e],t,n,r)}!function(e,t,n){"use strict";t[e]=n()}("Fingerprint2",this,function(){"use strict";var e=return e.prototype={extend:get:function(e){var t=this,n={data:[],addPreprocessedComponent:;n=this.userAgentKey(n),n=this.languageKey(n),n=this.colorDepthKey(n),n=this.deviceMemoryKey(n),n=this.pixelRatioKey(n),n=this.hardwareConcurrencyKey(n),n=this.screenResolutionKey(n),n=this.availableScreenResolutionKey(n),n=this.timezoneOffsetKey(n),n=this.sessionStorageKey(n),n=this.localStorageKey(n),n=this.indexedDbKey(n),n=this.addBehaviorKey(n),n=this.openDatabaseKey(n),n=this.cpuClassKey(n),n=this.platformKey(n),n=this.doNotTrackKey(n),n=this.pluginsKey(n),n=this.canvasKey(n),n=this.webglKey(n),n=this.webglVendorAndRendererKey(n),n=this.adBlockKey(n),n=this.hasLiedLanguagesKey(n),n=this.hasLiedResolutionKey(n),n=this.hasLiedOsKey(n),n=this.hasLiedBrowserKey(n),n=this.touchSupportKey(n),n=this.customEntropyFunction(n),this.fontsKey(n,},customEntropyFunction:userAgentKey:function(e){return this.options.excludeUserAgent||e.addPreprocessedComponent({key:"user_agent",value:this.getUserAgent()}),e},getUserAgent:languageKey:colorDepthKey:deviceMemoryKey:function(e){return this.options.excludeDeviceMemory||e.addPreprocessedComponent({key:"device_memory",value:this.getDeviceMemory()}),e},getDeviceMemory:pixelRatioKey:function(e){return this.options.excludePixelRatio||e.addPreprocessedComponent({key:"pixel_ratio",value:this.getPixelRatio()}),e},getPixelRatio:screenResolutionKey:function(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)},getScreenResolution:availableScreenResolutionKey:getAvailableScreenResolution:function(e){var t;return window.screen.availWidth&&window.screen.availHeight&&(t=this.options.detectScreenOrientation?window.screen.availHeight>window.screen.availWidth?[window.screen.availHeight,window.screen.availWidth]:[window.screen.availWidth,window.screen.availHeight]:[window.screen.availHeight,window.screen.availWidth]),"undefined"!=typeof t&&e.addPreprocessedComponent({key:"available_resolution",value:t}),e},timezoneOffsetKey:sessionStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasSessionStorage()&&e.addPreprocessedComponent({key:"session_storage",value:1}),e},localStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasLocalStorage()&&e.addPreprocessedComponent({key:"local_storage",value:1}),e},indexedDbKey:addBehaviorKey:openDatabaseKey:cpuClassKey:function(e){return this.options.excludeCpuClass||e.addPreprocessedComponent({key:"cpu_class",value:this.getNavigatorCpuClass()}),e},platformKey:function(e){return this.options.excludePlatform||e.addPreprocessedComponent({key:"navigator_platform",value:this.getNavigatorPlatform()}),e},doNotTrackKey:function(e){return this.options.excludeDoNotTrack||e.addPreprocessedComponent({key:"do_not_track",value:this.getDoNotTrack()}),e},canvasKey:function(e){return!this.options.excludeCanvas&&this.isCanvasSupported()&&e.addPreprocessedComponent({key:"canvas",value:this.getCanvasFp()}),e},webglKey:function(e){return!this.options.excludeWebGL&&this.isWebGlSupported()&&e.addPreprocessedComponent({key:"webgl",value:this.getWebglFp()}),e},webglVendorAndRendererKey:adBlockKey:function(e){return this.options.excludeAdBlock||e.addPreprocessedComponent({key:"adblock",value:this.getAdBlock()}),e},hasLiedLanguagesKey:function(e){return this.options.excludeHasLiedLanguages||e.addPreprocessedComponent({key:"has_lied_languages",value:this.getHasLiedLanguages()}),e},hasLiedResolutionKey:function(e){return this.options.excludeHasLiedResolution||e.addPreprocessedComponent({key:"has_lied_resolution",value:this.getHasLiedResolution()}),e},hasLiedOsKey:function(e){return this.options.excludeHasLiedOs||e.addPreprocessedComponent({key:"has_lied_os",value:this.getHasLiedOs()}),e},hasLiedBrowserKey:function(e){return this.options.excludeHasLiedBrowser||e.addPreprocessedComponent({key:"has_lied_browser",value:this.getHasLiedBrowser()}),e},fontsKey:flashFontsKey:jsFontsKey:function(e,t){var n=this;return setTimeout(function(){var r=["monospace","sans-serif","serif"],i=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Garamond","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"],a=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];n.options.extendedJsFonts&&(i=i.concat(a)),i=i.concat(n.options.userDefinedFonts);var o="mmmmmmmmmmlli",s="72px",d=document.getElementsByTagName("body")[0],l=document.createElement("div"),u=document.createElement("div"),c={},h={},g=p=f=m=S=T=f();d.appendChild(l);for(var x=0,v=r.length;x<v;x++)c[r[x]]=T[x].offsetWidth,h[r[x]]=T[x].offsetHeight;var A=m();d.appendChild(u);for(var C=[],E=0,M=i.length;E<M;E++)S(A[i[E]])&&C.push(i[E]);d.removeChild(u),d.removeChild(l),e.addPreprocessedComponent({key:"js_fonts",value:C}),t(e)},1)},pluginsKey:getRegularPlugins:function(){var e=[];if(navigator.plugins)for(var t=0,n=navigator.plugins.length;t<n;t++)e.push(navigator.plugins[t]);var r=this.map(e,this);return this.pluginsShouldBeSorted()?r.sort():r},getIEPlugins:function(){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var t=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];e=this.map(t,}return navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e},pluginsShouldBeSorted:touchSupportKey:function(e){return this.options.excludeTouchSupport||e.addPreprocessedComponent({key:"touch_support",value:this.getTouchSupport()}),e},hardwareConcurrencyKey:hasSessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch(e){return!0}},hasIndexedDB:getHardwareConcurrency:function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"},getNavigatorCpuClass:function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},getNavigatorPlatform:getDoNotTrack:getTouchSupport:getCanvasFp:getWebglFp:function(){var e,t=n=if(e=this.getWebglCanvas(),!e)return null;var r=[],i="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",a="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o);var s=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW),o.itemSize=3,o.numItems=3;var d=e.createProgram(),l=e.createShader(e.VERTEX_SHADER);e.shaderSource(l,i),e.compileShader(l);var u=e.createShader(e.FRAGMENT_SHADER);return e.shaderSource(u,a),e.compileShader(u),e.attachShader(d,l),e.attachShader(d,u),e.linkProgram(d),e.useProgram(d),d.vertexPosAttrib=e.getAttribLocation(d,"attrVertex"),d.offsetUniform=e.getUniformLocation(d,"uniformOffset"),e.enableVertexAttribArray(d.vertexPosArray),e.vertexAttribPointer(d.vertexPosAttrib,o.itemSize,e.FLOAT,!1,0,0),e.uniform2f(d.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,o.numItems),null!=e.canvas&&r.push(e.canvas.toDataURL()),r.push("extensions:"+e.getSupportedExtensions().join(";")),r.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),r.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),r.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),r.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),r.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),r.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),r.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),r.push("webgl max anisotropy:"+n(e)),r.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),r.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),r.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),r.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),r.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),r.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),r.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),r.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),r.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),r.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),r.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),r.push("webgl red bits:"+e.getParameter(e.RED_BITS)),r.push("webgl renderer:"+e.getParameter(e.RENDERER)),r.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),r.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),r.push("webgl vendor:"+e.getParameter(e.VENDOR)),r.push("webgl version:"+e.getParameter(e.VERSION)),e.getShaderPrecisionFormat?(r.push("webgl vertex shader high float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision),r.push("webgl vertex shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin),r.push("webgl vertex shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax),r.push("webgl vertex shader medium float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision),r.push("webgl vertex shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin),r.push("webgl vertex shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax),r.push("webgl vertex shader low float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision),r.push("webgl vertex shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin),r.push("webgl vertex shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax),r.push("webgl fragment shader high float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision),r.push("webgl fragment shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin),r.push("webgl fragment shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax),r.push("webgl fragment shader medium float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision),r.push("webgl fragment shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin),r.push("webgl fragment shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax),r.push("webgl fragment shader low float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision),r.push("webgl fragment shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin),r.push("webgl fragment shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax),r.push("webgl vertex shader high int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision),r.push("webgl vertex shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin),r.push("webgl vertex shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax),r.push("webgl vertex shader medium int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision),r.push("webgl vertex shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin),r.push("webgl vertex shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax),r.push("webgl vertex shader low int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision),r.push("webgl vertex shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin),r.push("webgl vertex shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax),r.push("webgl fragment shader high int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision),r.push("webgl fragment shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin),r.push("webgl fragment shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax),r.push("webgl fragment shader medium int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision),r.push("webgl fragment shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin),r.push("webgl fragment shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax),r.push("webgl fragment shader low int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision),r.push("webgl fragment shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin),r.push("webgl fragment shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax),r.join("~")):r.join("~")},getWebglVendorAndRenderer:getAdBlock:getHasLiedLanguages:getHasLiedResolution:getHasLiedOs:function(){var e,t=navigator.userAgent.toLowerCase(),n=navigator.oscpu,r=navigator.platform.toLowerCase();e=t.indexOf("windows phone")>=0?"Windows Phone":t.indexOf("win")>=0?"Windows":t.indexOf("android")>=0?"Android":t.indexOf("linux")>=0?"Linux":t.indexOf("iphone")>=0||t.indexOf("ipad")>=0?"iOS":t.indexOf("mac")>=0?"Mac":"Other";var i;if(i="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,i&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if("undefined"!=typeof n){if(n=n.toLowerCase(),n.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(n.indexOf("linux")>=0&&"Linux"!==e&&"Android"!==e)return!0;if(n.indexOf("mac")>=0&&"Mac"!==e&&"iOS"!==e)return!0;if((n.indexOf("win")===-1&&n.indexOf("linux")===-1&&n.indexOf("mac")===-1)!=("Other"===e))return!0}return r.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e||((r.indexOf("linux")>=0||r.indexOf("android")>=0||r.indexOf("pike")>=0)&&"Linux"!==e&&"Android"!==e||((r.indexOf("mac")>=0||r.indexOf("ipad")>=0||r.indexOf("ipod")>=0||r.indexOf("iphone")>=0)&&"Mac"!==e&&"iOS"!==e||((r.indexOf("win")===-1&&r.indexOf("linux")===-1&&r.indexOf("mac")===-1)!=("Other"===e)||"undefined"==typeof navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e)))},getHasLiedBrowser:isCanvasSupported:isWebGlSupported:isIE:hasSwfObjectLoaded:hasMinFlashInstalled:addFlashDivNode:loadSwfAndDetectFonts:function(e){var t="___fp_swf_loaded";window[t]=var n=this.options.swfContainerId;this.addFlashDivNode();
var r={onReady:t},i={allowScriptAccess:"always",menu:"false"};window.swfobject.embedSWF(this.options.swfPath,n,"1","1","9.0.0",!1,r,i,{})},getWebglCanvas:each:map:x64Add:x64Multiply:x64Rotl:x64LeftShift:x64Xor:x64Fmix:x64hash128:,e.VERSION="1.5.1",e});
}catch(e){console.error(e);};