window._g=window._g||{};_g.shared={};void 0===window.console&&(window.console={log:function(b){}});
_g.shared.HTTP=new function(){var b=function(){return{headers:{},body:{}}},c=function(a){if(!a)return null;var d=b();d.body=a.responseText;d.headers[_g.HTTP.HEADER_STATUS]=a.status;d.responseText=a.responseText;d.status=a.status;return d};return{EXTENSION_HTML:".html",EXTENSION_JSON:".json",EXTENSION_RES:".res",HEADER_STATUS:"Status",HEADER_MESSAGE:"Message",HEADER_LOCATION:"Location",HEADER_PATH:"Path",PARAM_NO_CACHE:"cq_ck",get:function(a,d,b,g){a=_g.HTTP.getXhrHookedURL(_g.HTTP.externalize(a,!0));
if(void 0!=d)return _g.$.ajax({type:"GET",url:a,externalize:!1,encodePath:!1,hook:!1,complete:function(a,e){a=c(a);g||_g.HTTP.handleForbidden(a);d.call(b||this,this,"success"==e,a)}});try{var e=_g.$.ajax({type:"GET",url:a,async:!1,externalize:!1,encodePath:!1,hook:!1}),f=c(e);g||_g.HTTP.handleForbidden(f);return f}catch(k){return null}},post:function(a,d,b,c,h,f){a=_g.HTTP.externalize(a,!0);if(h=_g.HTTP.getXhrHook(a,"POST",b))a=h.url,b=h.params;if(void 0!=d)return _g.$.ajax({type:"POST",url:a,data:b,
externalize:!1,encodePath:!1,hook:!1,complete:function(a,b){var e=_g.HTTP.buildPostResponseFromHTML(a.responseText);f||_g.HTTP.handleForbidden(a);d.call(c||this,this,"success"==b,e)}});try{var e=_g.$.ajax({type:"POST",url:a,data:b,async:!1,externalize:!1,encodePath:!1,hook:!1}),g=_g.HTTP.buildPostResponseFromHTML(e.responseText);f||_g.HTTP.handleForbidden(e);return g}catch(m){return null}},getParameter:function(a,d){a=_g.HTTP.getParameters(a,d);return null!=a?a[0]:null},getParameters:function(a,d){var b=
[];if(!d)return null;d=encodeURIComponent(d);if(-1==a.indexOf("?"))return null;-1!=a.indexOf("#")&&(a=a.substring(0,a.indexOf("#")));a=a.substring(a.indexOf("?")+1);if(-1==a.indexOf(d))return null;a=a.split("\x26");for(var c=0;c<a.length;c++){var h=a[c].split("\x3d");h[0]==d&&b.push(1<h.length?decodeURIComponent(h[1]):"")}return 0<b.length?b:null},addParameter:function(a,d,b){if(b&&b instanceof Array){for(var c=0;c<b.length;c++)a=_g.HTTP.addParameter(a,d,b[c]);return a}c=-1==a.indexOf("?")?"?":"\x26";
var e=a.indexOf("#");if(0>e)return a+c+encodeURIComponent(d)+"\x3d"+encodeURIComponent(b);var f=a.substring(e);a=a.substring(0,e);return a+c+encodeURIComponent(d)+"\x3d"+encodeURIComponent(b)+f},setParameter:function(a,d,b){a=_g.HTTP.removeParameter(a,d);return _g.HTTP.addParameter(a,d,b)},removeParameter:function(a,d){var b="?"+encodeURIComponent(d)+"\x3d";d="\x26"+encodeURIComponent(d)+"\x3d";if(-1==a.indexOf(b))if(-1!=a.indexOf(d))b=d;else return a;d=a.indexOf(b);b=a.substring(0,d);d=a.indexOf("\x26",
d+1);var c="";-1!=d&&(c=a.substring(d),0==c.indexOf("\x26")&&(c=c.replace("\x26","?")));return b+c},removeParameters:Granite.HTTP.removeParameters,addSelector:function(a,d,b){b||(b=0);var c="",e=a.indexOf("?");-1==e&&(e=a.indexOf("#"));-1!=e&&(c=a.substring(e),a=a.substring(0,e));var f=a.lastIndexOf("/");e=a.substring(f);if(-1==e.indexOf("."+d+".")){a=a.substring(0,f);e=e.split(".");var k=f="";if(b>e.length-2||-1==b)b=e.length-2;for(var l=0;l<e.length;l++)f+=k+e[l],k=".",b==l&&(f+=k+d);return a+f+
c}return a},setSelector:function(a,b,c){var d="",e=a.indexOf("?");-1==e&&(e=a.indexOf("#"));-1!=e&&(d=a.substring(e),a=a.substring(0,e));e=_g.HTTP.getSelectors(a);var f=a.substring(a.lastIndexOf("."));a=a.substring(0,a.lastIndexOf("."));a=0<e.length?a.replace("."+e.join("."),""):a;if(0<e.length)for(var k=0;k<e.length;k++)a=c==k?a+("."+b):a+("."+e[k]);else a+="."+b;return a+f+d},addSelectors:function(a,b){var d=a;if(a&&b&&b.length)for(a=0;a<b.length;a++)d=_g.HTTP.addSelector(d,b[a],a);return d},getAnchor:function(a){return-1!=
a.indexOf("#")?a.substring(a.indexOf("#")+1):""},setAnchor:function(a,b){return _g.HTTP.removeAnchor(a)+"#"+b},removeAnchor:Granite.HTTP.removeAnchor,noCaching:function(a){return _g.HTTP.setParameter(a,_g.HTTP.PARAM_NO_CACHE,(new Date).valueOf())},buildPostResponseFromNode:function(a,d){if(!a)return null;void 0==d&&(d=b());for(var c=0;c<a.childNodes.length;c++){var g=a.childNodes[c];g.tagName&&(g.id&&(d.headers[g.id]=g.href?g.href:g.innerHTML),d=_g.HTTP.buildPostResponseFromNode(g,d))}return d},buildPostResponseFromHTML:function(a){var d=
b();try{void 0!=a.responseText?a=a.responseText:"string"!=typeof a&&(a=a.toString());var c=document.createElement("div");c.innerHTML=a;d=_g.HTTP.buildPostResponseFromNode(c,d)}catch(g){}return d},getCookie:function(a){var b=encodeURIComponent(a)+"\x3d";a=document.cookie;if(0<a.length){var c=a.indexOf(b);if(-1!=c)return c+=b.length,b=a.indexOf(";",c),-1==b&&(b=a.length),decodeURIComponent(a.substring(c,b))}return null},setCookie:function(a,b,c,g,h,f){"number"!=typeof g&&(g=7);if(0<g){var d=new Date;
d.setTime(d.getTime()+864E5*g)}else d=new Date(0);document.cookie=encodeURIComponent(a)+"\x3d"+encodeURIComponent(b)+"; "+(0!=g?"expires\x3d"+d.toGMTString()+"; ":"")+(h?"domain\x3d"+h+"; ":"")+(c?"path\x3d"+c:"")+(f?"; secure":"");return b},clearCookie:function(a,b,c,g){_g.HTTP.setCookie(a,"null",b||"",-1,c||"",g||"")},getSchemeAndAuthority:Granite.HTTP.getSchemeAndAuthority,getContextPath:Granite.HTTP.getContextPath,externalize:function(a,b){if("undefined"!=typeof G_IS_HOOKED&&G_IS_HOOKED(a))return a;
b&&(a=_g.HTTP.encodePathOfURI(a));return a=Granite.HTTP.externalize(a)},internalize:Granite.HTTP.internalize,getPath:Granite.HTTP.getPath,getSuffix:function(){return window.CQURLInfo&&CQURLInfo.suffix?CQURLInfo.suffix:null},getSelectors:function(a){if(!a&&window.CQURLInfo&&CQURLInfo.selectors)return CQURLInfo.selectors;var b=[];a=a||window.location.href;a=_g.HTTP.removeParameters(a);a=_g.HTTP.removeAnchor(a);if(a=a.substring(a.lastIndexOf("/")))if(a=a.split("."),2<a.length)for(var c=0;c<a.length;c++)0<
c&&c<a.length-1&&b.push(a[c]);return b},getExtension:function(a){if(!a&&window.CQURLInfo&&CQURLInfo.extension)return CQURLInfo.extension;a=a||window.location.href;a=_g.HTTP.removeParameters(a);a=_g.HTTP.removeAnchor(a);var b=a.lastIndexOf(".");if(0>b)return"";a=a.substring(b+1);b=a.indexOf("/");return 0>b?a:a.substring(0,b)},encodePathOfURI:Granite.HTTP.encodePathOfURI,encodePath:Granite.HTTP.encodePath,eval:Granite.HTTP.eval,isOkStatus:function(a){try{return 0==(new String(a)).indexOf("2")}catch(d){return!1}},
isOk:function(a){try{return _g.HTTP.isOkStatus(a.headers[_g.HTTP.HEADER_STATUS])}catch(d){return!1}},handleForbidden:function(a,b){try{return 403==a[_g.HTTP.HEADER_STATUS.toLowerCase()]?(Granite.HTTP.handleLoginRedirect(),!0):!1}catch(e){return!1}},getXhrHook:Granite.HTTP.getXhrHook,getXhrHookedURL:function(a,b,c){return(b=_g.HTTP.getXhrHook(a,b,c))?b.url:a},reloadHook:function(a){"undefined"!=typeof G_RELOAD_HOOK&&_g.$.isFunction(G_RELOAD_HOOK)&&(""!=CQURLInfo.selectorString&&(a=_g.HTTP.addSelector(a,
CQURLInfo.selectorString)),a=G_RELOAD_HOOK(a)||a);return a}}};_g.HTTP=_g.shared.HTTP;
_g.shared.Util=new function(){return{reload:function(b,c,a){b||(b=window);c||(c=_g.HTTP.noCaching(b.location.href));c=_g.HTTP.reloadHook(c);a?b.location.replace(c):b.location.href=c},load:function(b,c){_g.Util.reload(window,b,c)},open:function(b,c,a,d){c||(c=window);if(b)return b=_g.HTTP.reloadHook(b),a||(a=""),d||(d=""),c.open(b,a,d)},htmlEncode:function(b){return b?String(b).replace(/&/g,"\x26amp;").replace(/>/g,"\x26gt;").replace(/</g,"\x26lt;").replace(/"/g,"\x26quot;"):b},htmlDecode:function(b){return b?
String(b).replace(/&gt;/g,"\x3e").replace(/&lt;/g,"\x3c").replace(/&quot;/g,'"').replace(/&amp;/g,"\x26"):b},ellipsis:function(b,c,a){if(b&&b.length>c){if(a){a=b.substr(0,c-2);var d=Math.max(a.lastIndexOf(" "),a.lastIndexOf("."),a.lastIndexOf("!"),a.lastIndexOf("?"),a.lastIndexOf(";"));return-1==d||d<c-15?b.substr(0,c-3)+"...":a.substr(0,d)+"..."}return b.substr(0,c-3)+"..."}return b},patchText:Granite.Util.patchText,eval:function(b){return _g.HTTP.eval(b)},getTopWindow:Granite.Util.getTopWindow,
setIFrameMode:Granite.Util.setIFrameMode}};_g.Util=_g.shared.Util;
_g.shared.Sling=function(){return{SELECTOR_INFINITY:Granite.Sling.SELECTOR_INFINITY,CHARSET:Granite.Sling.CHARSET,STATUS:Granite.Sling.STATUS,STATUS_BROWSER:Granite.Sling.STATUS_BROWSER,OPERATION:Granite.Sling.OPERATION,OPERATION_DELETE:Granite.Sling.OPERATION_DELETE,OPERATION_MOVE:Granite.Sling.OPERATION_MOVE,DELETE_SUFFIX:Granite.Sling.DELETE_SUFFIX,TYPEHINT_SUFFIX:Granite.Sling.TYPEHINT_SUFFIX,COPY_SUFFIX:Granite.Sling.COPY_SUFFIX,MOVE_SUFFIX:Granite.Sling.MOVE_SUFFIX,ORDER:Granite.Sling.ORDER,
REPLACE:Granite.Sling.REPLACE,DESTINATION:Granite.Sling.DESTINATION,SAVE_PARAM_PREFIX:Granite.Sling.SAVE_PARAM_PREFIX,IGNORE_PARAM:Granite.Sling.IGNORE_PARAM,REQUEST_LOGIN_PARAM:Granite.Sling.REQUEST_LOGIN_PARAM,LOGIN_URL:Granite.Sling.LOGIN_URL,LOGOUT_URL:Granite.Sling.LOGOUT_URL,processBinaryData:function(b){if(b&&void 0!=b[":jcr:data"]){var c={};c.size=b[":jcr:data"];c.type=b["jcr:mimeType"];c.date=b["jcr:lastModified"];b=c}return b},getContentPath:function(b,c,a){c.lastIndexOf(".")>c.lastIndexOf("/")&&
(c=c.substr(0,c.indexOf(".",c.lastIndexOf("/"))));if(b)if(0==b.indexOf("/"))c=b;else{if(a)for(;0==b.indexOf("../");)b=b.substring(3),c=c.substring(0,c.lastIndexOf("/"));b=b.replace("./","");c=c+"/"+b}return c}}}();_g.Sling=_g.shared.Sling;
_g.shared.XSS=new function(){return{getXSSPropertyName:function(b){return b?_g.XSS.KEY_REGEXP.test(b)?b:b+_g.XSS.KEY_SUFFIX:""},getXSSRecordPropertyValue:function(b,c,a){var d="";b&&c&&(d=(d=b.get(this.getXSSPropertyName(c)))?d:this.getXSSValue(b.get(c)),a&&!isNaN(a)&&(d=_g.Util.ellipsis(d,a,!0)));return d},getXSSTablePropertyValue:function(b,c,a){var d="";b&&c&&(d=(d=b[this.getXSSPropertyName(c)])?d:this.getXSSValue(b[c]),a&&!isNaN(a)&&(d=_g.Util.ellipsis(d,a,!0)));return d},getXSSValue:function(b){return b?
_g.Util.htmlEncode(b):""},updatePropertyName:function(b,c){b&&c&&b[c]&&b.xssProtect&&!b.xssKeepPropName&&(b[c]=this.getXSSPropertyName(b[c]))},xssPropertyRenderer:function(b,c,a,d){return d&&d.dataIndex&&a&&a.data&&a.data[this.getXSSPropertyName(d.dataIndex)]?(b=a.data[this.getXSSPropertyName(d.dataIndex)],d.ellipsisLimit&&!isNaN(d.ellipsisLimit)&&(b=_g.Util.ellipsis(b,d.ellipsisLimit,!0)),b):b?b:""}}};_g.XSS=_g.shared.XSS;_g.XSS.KEY_SUFFIX="_xss";_g.XSS.KEY_REGEXP=new RegExp(_g.XSS.KEY_SUFFIX+"$");
_g.shared.I18n=Granite.I18n;_g.I18n=_g.shared.I18n;_g.shared.I18n.getMessage=Granite.I18n.get;_g.shared.I18n.getVarMessage=Granite.I18n.getVar;
_g.shared.String=new function(){return{startsWith:function(b,c){return null==b||null==c?null==b&&null==c:c.length>b.length?!1:0==b.toString().indexOf(c.toString())},endsWith:function(b,c){if(null==b||null==c)return null==b&&null==c;if(c.length>b.length)return!1;b=b.toString();c=c.toString();return b.lastIndexOf(c)==b.length-c.length},contains:function(b,c){if(null==b||null==c)return!1;b=b.toString();c=c.toString();return 0<=b.indexOf(c)}}};_g.String=_g.shared.String;
_g.shared.ClientSidePersistence=function(b){var c={PERSISTENCE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("ClientSidePersistence"),config:{},cache:null,getMode:function(){return this.config.mode},getWindow:function(){return this.config.window||_g.shared.Util.getTopWindow()},debug:function(){if(console){for(var a=this.getMap(),b="[ClientSidePersistence -\x3e mode\x3d"+this.getMode().name+", container\x3d"+(this.config.container||"")+"]\n",c=0,h=new RegExp("^"+this.config.container+
"/"),f=0,k=Object.keys(a).sort();f<k.length;f++){var l=k[f];if(!this.config.container||"string"!=typeof l||l.match(h)){var m=a[l];b+="-["+ ++c+"]-\x3e '"+l.replace(h,"")+"' \x3d '"+decodeURIComponent(m)+"'\n"}}c||(b+="(container is empty)");console.log(b)}},keyName:function(a){return(this.config.container?this.config.container+"/":"")+a},getKeys:function(){var a=this.getMap(),b=[];if(a)for(var c in a)this.config.container?0==c.indexOf(this.config.container+"/")&&(a=c.substring(this.config.container.length+
1),b.push(a)):b.push(c);return b},get:function(a){return(a=this.getMap()[this.keyName(a)])?decodeURIComponent(a):a},set:function(a,b){a="string"===typeof a?a.replace(/:=/g,""):"";var c={key:a};a=this.keyName(a);if(a.length){var d=[],e=this.getMap();c.action=e[a]?"update":"set";b?e[a]=encodeURIComponent(b):(c.action="remove",delete e[a]);for(var k in e)d.push(k+":\x3d"+e[k]);this.cache=e;this.write(d.join("|"));_g.$.extend(c,{value:b,mode:this.getMode().name,container:this.config.container});_g.$(_g.shared.ClientSidePersistence).trigger(_g.shared.ClientSidePersistence.EVENT_NAME,
c)}},getMap:function(){if(!this.cache||!this.config.useCache){for(var a=this.read().split("|"),b={},c=0;c<a.length;c++){var h=a[c].split(":\x3d"),f=h[0];f&&f.length&&(b[f]=h[1]||"")}this.cache=b}return this.cache},remove:function(a){this.set(a)},clearMap:function(){this.write()},read:function(){return this.config.mode.read(this)||""},write:function(a){this.config.mode.write(this,a||"")}};_g.$.extend(c.config,_g.shared.ClientSidePersistence.getDefaultConfig(),b);!1===c.config.useContainer&&(c.config.container=
null);var a="test-"+Math.random();if(c.config.mode===_g.shared.ClientSidePersistence.MODE_SESSION){b=!1;try{window.sessionStorage.setItem(a,a),window.sessionStorage.removeItem(a)}catch(d){b=!0}b&&(c.config.mode=_g.shared.ClientSidePersistence.MODE_LOCAL)}if(c.config.mode===_g.shared.ClientSidePersistence.MODE_LOCAL){b=!1;try{window.localStorage.setItem(a,a),window.localStorage.removeItem(a)}catch(d$0){b=!0}b&&(c.config.mode=_g.shared.ClientSidePersistence.MODE_WINDOW)}return c};
_g.shared.ClientSidePersistence.EVENT_NAME="ClientSidePersistence";_g.shared.ClientSidePersistence.MODE_SESSION={name:"session",read:function(b){return b.getWindow().sessionStorage.getItem(b.PERSISTENCE_NAME)},write:function(b,c){if(!Granite.OptOutUtil.isOptedOut())try{b.getWindow().sessionStorage.setItem(b.PERSISTENCE_NAME,c)}catch(a){}}};
_g.shared.ClientSidePersistence.MODE_LOCAL={name:"local",read:function(b){return b.getWindow().localStorage.getItem(b.PERSISTENCE_NAME)},write:function(b,c){if(!Granite.OptOutUtil.isOptedOut())try{b.getWindow().localStorage.setItem(b.PERSISTENCE_NAME,c)}catch(a){}}};_g.shared.ClientSidePersistence.decoratePersistenceName=function(b){return b};
_g.shared.ClientSidePersistence.MODE_WINDOW={name:"window",read:function(b){return b.getWindow().name},write:function(b,c){Granite.OptOutUtil.isOptedOut()||(b.getWindow().name=c)}};
_g.shared.ClientSidePersistence.MODE_COOKIE={COOKIE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("SessionPersistence"),name:"cookie",read:function(b){return _g.shared.ClientSidePersistence.CookieHelper.read(this.COOKIE_NAME)},write:function(b,c){if(!Granite.OptOutUtil.isOptedOut()||Granite.OptOutUtil.maySetCookie(this.COOKIE_NAME))c?_g.shared.ClientSidePersistence.CookieHelper.set(this.COOKIE_NAME,c,365):_g.shared.ClientSidePersistence.CookieHelper.erase(this.COOKIE_NAME)}};
_g.shared.ClientSidePersistence.getDefaultConfig=function(){return{window:_g.shared.Util.getTopWindow(),useCache:!1,container:null,mode:_g.shared.ClientSidePersistence.MODE_LOCAL}};
_g.shared.ClientSidePersistence.CookieHelper={set:function(b,c,a){var d="";a&&(d=new Date,d.setTime(d.getTime()+864E5*a),d="; expires\x3d"+d.toGMTString());c&&(c=encodeURIComponent(c));document.cookie=b+"\x3d"+c+d+"; path\x3d/"},read:function(b){b+="\x3d";for(var c=document.cookie.split(";"),a=0;a<c.length;a++){for(var d=c[a];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(b))return(b=d.substring(b.length,d.length))?decodeURIComponent(b):null}return null},erase:function(b){_g.shared.ClientSidePersistence.CookieHelper.set(b,
"",-1)}};_g.shared.ClientSidePersistence.clearAllMaps=function(){_g.$.each([_g.shared.ClientSidePersistence.MODE_COOKIE,_g.shared.ClientSidePersistence.MODE_LOCAL,_g.shared.ClientSidePersistence.MODE_SESSION,_g.shared.ClientSidePersistence.MODE_WINDOW],function(b,c){(new _g.shared.ClientSidePersistence({mode:c})).clearMap()})};_g.I18n.init();window.CQ=window.CQ||{};CQ.shared=_g.shared;CQ.Sling=CQ.shared.Sling;CQ.I18n=CQ.shared.I18n;G_XHR_HOOK=typeof CQ_XHR_HOOK!="undefined"?CQ_XHR_HOOK:undefined;
G_RELOAD_HOOK=typeof CQ_RELOAD_HOOK!="undefined"?CQ_RELOAD_HOOK:undefined;G_IS_HOOKED=typeof CQ_IS_HOOKED!="undefined"?CQ_IS_HOOKED:undefined;G_CONTENT_PATH=typeof CQ_CONTENT_PATH!="undefined"?CQ_CONTENT_PATH:undefined;
CQ.shared.Form=function(){var getDocumentLabelMap=function(){var contentFrame=parent.frames["ContentFrame"],doc=contentFrame!==undefined?contentFrame.contentDocument:document;var labelMap=new Object;var labelNodes=doc.getElementsByTagName("label");for(var i=0;i<labelNodes.length;i++){var forId=labelNodes[i].htmlFor;if(forId)labelMap[forId]=labelNodes[i]}return labelMap};var getLabelNodeTextContent=function(node){var text="";var walkTree=function(node){if(node.nodeType==3)text+=node.nodeValue;if(node.nodeName.toLowerCase()==
"select"||node.nodeName.toLowerCase()=="input"||node.nodeName.toLowerCase()=="textarea"||node.nodeName.toLowerCase()=="button")return;for(var i=0;node.childNodes&&i<node.childNodes.length;i++)walkTree(node.childNodes[i])};walkTree(node);return text};var getSectionIdForIndexedId=function(id){return id.replace(/-\d+$/,"")};var getLabelForId=function(id,documentLabelMap){if(!documentLabelMap)documentLabelMap=getDocumentLabelMap();if(documentLabelMap[id])return getLabelNodeTextContent(documentLabelMap[id]);
return null};var getDefaultValue=function(node){var defaultValue;var nodeName=node.nodeName.toLowerCase();var nodeType=hasAttribute(node,"type")?node.getAttribute("type"):undefined;if(nodeName=="input")if(nodeType=="radio"||nodeType=="checkbox"){if(hasAttribute(node,"checked"))defaultValue=node.getAttribute("value")}else if(node.type=="text")defaultValue=node.defaultValue;else defaultValue=node.value;else if(nodeName=="textarea")defaultValue=node.value;else if(nodeName=="option"&&hasAttribute(node,
"selected"))defaultValue=node.getAttribute("value");return defaultValue};var hasAttribute=function(el,attr){if(el==null)return false;return $CQ(el).attr(attr)!=undefined};return{searchArray:function(arr,testProperty,testValue){for(var i=0;i<arr.length;i++)if(arr[i][testProperty]&&arr[i][testProperty]==testValue)return arr[i];return null},getLabelForField:function(fieldNode,documentLabelMap){if(!documentLabelMap)documentLabelMap=getDocumentLabelMap();var id=fieldNode.getAttribute("id");if(id&&documentLabelMap[id])return getLabelNodeTextContent(documentLabelMap[id]);
var parent=fieldNode.parentNode;while(parent){if(parent.nodeName.toLowerCase()=="label")return getLabelNodeTextContent(parent);parent=parent.parentNode}return fieldNode.getAttribute("name")},getFields:function(){var contentFrame=parent.frames["ContentFrame"],doc=contentFrame!==undefined?contentFrame.contentDocument:document,documentLabelMap=getDocumentLabelMap();var fields=[];var visitNamedNode=function(node,inLocalNode,selector){var name=node.getAttribute("name");var nodeType=node.nodeName.toLowerCase();
var field;if(nodeType=="input"||nodeType=="textarea"){var controlType=hasAttribute(node,"type")?node.getAttribute("type").toLowerCase():"text";if(controlType=="button"||controlType=="submit"||controlType=="reset")return;field=CQ.shared.Form.searchArray(fields,"value",name);if(!field){fields.push({"text":CQ.shared.Form.getLabelForField(node,documentLabelMap),"value":name,"name":name,"enumeration":undefined,"local":inLocalNode,"selector":selector,"type":nodeType,"defaultValue":getDefaultValue(node),
"node":node});field=fields[fields.length-1]}if(controlType=="radio"||field.local&&controlType=="checkbox"){if(!field.enumeration){var inputId=node.getAttribute("id");if(inputId){var sectionId=getSectionIdForIndexedId(inputId);var sectionLabel=getLabelForId(sectionId,documentLabelMap);field.text=sectionLabel?sectionLabel:name}else field.text=name;field.enumeration=[]}field.enumeration.push({"text":CQ.shared.Form.getLabelForField(node,documentLabelMap),"value":node.getAttribute("value"),"defaultValue":getDefaultValue(node),
"node":node})}}else if(nodeType=="select"){fields.push({"text":CQ.shared.Form.getLabelForField(node,documentLabelMap),"value":name,"name":name,"enumeration":[],"local":inLocalNode,"type":nodeType,"selector":selector,"defaultValue":undefined,"node":node});field=fields[fields.length-1];var optionNodes=node.getElementsByTagName("option");for(var i=0;i<optionNodes.length;i++)field.enumeration.push({"text":optionNodes[i].innerHTML,"value":optionNodes[i].getAttribute("value"),"defaultValue":getDefaultValue(optionNodes[i]),
"node":optionNodes[i]})}};var walkTree=function(node,inLocalNode,selector){if(node.nodeName.toLowerCase()=="div"&&$CQ(node).children(".form_row").length>0){inLocalNode=true;selector=$CQ(node).attr("class").replace(/\s/g,".")}if(node.getAttribute&&node.getAttribute("name"))visitNamedNode(node,inLocalNode,selector);for(var i=0;node.childNodes&&i<node.childNodes.length;i++){var child=node.childNodes[i];if(child.nodeType==1)walkTree(child,inLocalNode,selector)}};walkTree(doc,false,undefined);return fields}}}();
CQ.shared.User=function(infoData){return{data:null,language:null,userPropsPath:null,getUserPropsUrl:function(){if(!this.userPropsPath)this.userPropsPath=CQ.shared.User.PROXY_URI;return this.userPropsPath},load:function(){var url=this.getUserPropsUrl();url=CQ.shared.HTTP.noCaching(url);var response=CQ.shared.HTTP.get(url);if(CQ.shared.HTTP.isOk(response))this.data=CQ.shared.Util.eval(response)},init:function(infoData,force){if(!this.initialized||force){if(infoData)this.data=infoData;else this.load();
this.initialized=true}return this.data},lazyInit:function(){this.lazyLoad=function(){this.load();this.initialized=true}},isInitialized:function(){return this.initialized},getLanguage:function(){if(!this.isInitialized()&&this.lazyLoad)this.lazyLoad.call(this);this.language=this.data&&this.data["preferences"]&&this.data["preferences"]["language"]?this.data["preferences"]["language"]:"en";return this.language}}}();CQ.shared.User.PROXY_URI=CQ.shared.HTTP.externalize("/libs/cq/security/userinfo"+CQ.shared.HTTP.EXTENSION_JSON);
CQ.shared.User.lazyInit();CQ.shared.I18n.init({locale:function(){return document.documentElement.lang||CQ.shared.User.getLanguage()},urlPrefix:"/libs/cq/i18n/dict."});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           dOfDirectors_cont","cT":"Container","id":"c2c5c8c4c1m1r1a1","sN":2,"aN":"c5c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_61" class="js-subm-uhf-nav-link" href="https://news.microsoft.com/leadership/?section=board-members" data-m='{"cN":"CatNav_Company_BoardOfDirectors_nav","id":"n1c2c5c8c4c1m1r1a1","sN":1,"aN":"c2c5c8c4c1m1r1a1"}'>Junta directiva</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Company_SeniorLeadership_cont","cT":"Container","id":"c3c5c8c4c1m1r1a1","sN":3,"aN":"c5c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_62" class="js-subm-uhf-nav-link" href="https://news.microsoft.com/leadership/?section=senior-leaders" data-m='{"cN":"CatNav_Company_SeniorLeadership_nav","id":"n1c3c5c8c4c1m1r1a1","sN":1,"aN":"c3c5c8c4c1m1r1a1"}'>Directivos s&#233;nior</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Company_Stories_cont","cT":"Container","id":"c4c5c8c4c1m1r1a1","sN":4,"aN":"c5c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_63" class="js-subm-uhf-nav-link" href="http://news.microsoft.com/stories/" data-m='{"cN":"CatNav_Company_Stories_nav","id":"n1c4c5c8c4c1m1r1a1","sN":1,"aN":"c4c5c8c4c1m1r1a1"}'>Historias</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Company_AlumniNetwork_cont","cT":"Container","id":"c5c5c8c4c1m1r1a1","sN":5,"aN":"c5c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_64" class="js-subm-uhf-nav-link" href="http://www.microsoftalumni.com/" data-m='{"cN":"CatNav_Company_AlumniNetwork_nav","id":"n1c5c5c8c4c1m1r1a1","sN":1,"aN":"c5c5c8c4c1m1r1a1"}'>Red de antiguos alumnos</a>
            
        </li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_65"  aria-expanded="false" data-m='{"cN":"CatNav_Values_nonnav","id":"nn6c8c4c1m1r1a1","sN":6,"aN":"c8c4c1m1r1a1"}'>Valores</button>

                                <ul class="" data-class-idn="" aria-hidden="true" data-m='{"cN":"Values_cont","cT":"Container","id":"c7c8c4c1m1r1a1","sN":7,"aN":"c8c4c1m1r1a1"}'>
        <li class="js-nav-menu single-link" data-m='{"cN":"Values_Overview_cont","cT":"Container","id":"c1c7c8c4c1m1r1a1","sN":1,"aN":"c7c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_66" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/about/values" data-m='{"cN":"CatNav_Values_Overview_nav","id":"n1c1c7c8c4c1m1r1a1","sN":1,"aN":"c1c7c8c4c1m1r1a1"}'>Informaci&#243;n general</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Company_Innovation_cont","cT":"Container","id":"c2c7c8c4c1m1r1a1","sN":2,"aN":"c7c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_67" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/research/" data-m='{"cN":"CatNav_Company_Innovation_nav","id":"n1c2c7c8c4c1m1r1a1","sN":1,"aN":"c2c7c8c4c1m1r1a1"}'>innovaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Diversity \u0026 Inclusion_cont","cT":"Container","id":"c3c7c8c4c1m1r1a1","sN":3,"aN":"c7c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_68" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/en-us/diversity/default.aspx" data-m='{"cN":"CatNav_Diversity \u0026 Inclusion_nav","id":"n1c3c7c8c4c1m1r1a1","sN":1,"aN":"c3c7c8c4c1m1r1a1"}'>Diversidad e inclusi&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Company_Corporatesocialresponsibility_cont","cT":"Container","id":"c4c7c8c4c1m1r1a1","sN":4,"aN":"c7c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_69" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/corporate-responsibility" data-m='{"cN":"CatNav_Company_Corporatesocialresponsibility_nav","id":"n1c4c7c8c4c1m1r1a1","sN":1,"aN":"c4c7c8c4c1m1r1a1"}'>Responsabilidad social corporativa</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Values_AI_cont","cT":"Container","id":"c5c7c8c4c1m1r1a1","sN":5,"aN":"c7c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_70" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/ai?activetab=pivot1:primaryr5" data-m='{"cN":"CatNav_Values_AI_nav","id":"n1c5c7c8c4c1m1r1a1","sN":1,"aN":"c5c7c8c4c1m1r1a1"}'>AI</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Company_TrustworthyComputing_cont","cT":"Container","id":"c6c7c8c4c1m1r1a1","sN":6,"aN":"c7c8c4c1m1r1a1"}'>
            <a id="c-shellmenu_71" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/trust-center" data-m='{"cN":"CatNav_Company_TrustworthyComputing_nav","id":"n1c6c7c8c4c1m1r1a1","sN":1,"aN":"c6c7c8c4c1m1r1a1"}'>Inform&#225;tica de confianza</a>
            
        </li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="single-link js-nav-menu uhf-menu-item">
                            <a id="c-shellmenu_72" class="c-uhf-nav-link" href="https://careers.microsoft.com/" data-m='{"cN":"CatNav_Careers_nav","id":"n8c8c4c1m1r1a1","sN":8,"aN":"c8c4c1m1r1a1"}'>Oportunidades de empleo</a>
                        </li>


                <li id="overflow-menu" class="overflow-menu x-hidden uhf-menu-item">
                        <div class="c-uhf-menu js-nav-menu">
        <button data-m='{"pid":"Más","id":"nn9c8c4c1m1r1a1","sN":9,"aN":"c8c4c1m1r1a1"}' type="button" aria-label="M&#225;s" aria-expanded="false">M&#225;s</button>
        <ul id="overflow-menu-list" aria-hidden="true" class="overflow-menu-list">
        </ul>
    </div>

                </li>
                            </ul>
            
        </nav>


            <div class="c-uhfh-actions" data-m='{"cN":"Header actions_cont","cT":"Container","id":"c9c4c1m1r1a1","sN":9,"aN":"c4c1m1r1a1"}'>
                <div class="wf-menu">        <nav id="uhf-c-nav" aria-label="Todo el menú de Microsoft" data-m='{"cN":"GlobalNav_cont","cT":"Container","id":"c1c9c4c1m1r1a1","sN":1,"aN":"c9c4c1m1r1a1"}'>
            <ul class="js-paddle-items">
                <li>
                    <div class="c-uhf-menu js-nav-menu">
                        <button type="button" class="c-button-logo all-ms-nav" aria-expanded="false" data-m='{"cN":"GlobalNav_More_nonnav","id":"nn1c1c9c4c1m1r1a1","sN":1,"aN":"c1c9c4c1m1r1a1"}'> <span>Todo Microsoft</span></button>
                        <ul class="f-multi-column f-multi-column-6" aria-hidden="true" data-m='{"cN":"More_cont","cT":"Container","id":"c2c1c9c4c1m1r1a1","sN":2,"aN":"c1c9c4c1m1r1a1"}'>
                                    <li class="c-w0-contr">
            <h2 class="c-uhf-sronly">Global</h2>
            <ul class="c-w0">
        <li class="js-nav-menu single-link" data-m='{"cN":"M365_cont","cT":"Container","id":"c1c2c1c9c4c1m1r1a1","sN":1,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_0" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-365" data-m='{"cN":"W0Nav_M365_nav","id":"n1c1c2c1c9c4c1m1r1a1","sN":1,"aN":"c1c2c1c9c4c1m1r1a1"}'>Microsoft 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Teams_cont","cT":"Container","id":"c2c2c1c9c4c1m1r1a1","sN":2,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="l0_Teams" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-teams/group-chat-software" data-m='{"cN":"W0Nav_Teams_nav","id":"n1c2c2c1c9c4c1m1r1a1","sN":1,"aN":"c2c2c1c9c4c1m1r1a1"}'>Teams</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Copilot_cont","cT":"Container","id":"c3c2c1c9c4c1m1r1a1","sN":3,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_2" class="js-subm-uhf-nav-link" href="https://copilot.microsoft.com/" data-m='{"cN":"W0Nav_Copilot_nav","id":"n1c3c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c2c1c9c4c1m1r1a1"}'>Copilot</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Windows_cont","cT":"Container","id":"c4c2c1c9c4c1m1r1a1","sN":4,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_3" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/windows/" data-m='{"cN":"W0Nav_Windows_nav","id":"n1c4c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c2c1c9c4c1m1r1a1"}'>Windows</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface_cont","cT":"Container","id":"c5c2c1c9c4c1m1r1a1","sN":5,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_4" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/surface" data-m='{"cN":"W0Nav_Surface_nav","id":"n1c5c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c2c1c9c4c1m1r1a1"}'>Surface</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_cont","cT":"Container","id":"c6c2c1c9c4c1m1r1a1","sN":6,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_5" class="js-subm-uhf-nav-link" href="https://www.xbox.com/" data-m='{"cN":"W0Nav_Xbox_nav","id":"n1c6c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c2c1c9c4c1m1r1a1"}'>Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Deals_cont","cT":"Container","id":"c7c2c1c9c4c1m1r1a1","sN":7,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_6" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/sale?icid=TopNavDealsSale" data-m='{"cN":"W0Nav_Deals_nav","id":"n1c7c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c2c1c9c4c1m1r1a1"}'>Ofertas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Small Business_cont","cT":"Container","id":"c8c2c1c9c4c1m1r1a1","sN":8,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="l0_SmallBusiness" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/business" data-m='{"cN":"W0Nav_Small Business_nav","id":"n1c8c2c1c9c4c1m1r1a1","sN":1,"aN":"c8c2c1c9c4c1m1r1a1"}'>Peque&#241;as empresas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Support_cont","cT":"Container","id":"c9c2c1c9c4c1m1r1a1","sN":9,"aN":"c2c1c9c4c1m1r1a1"}'>
            <a id="l1_support" class="js-subm-uhf-nav-link" href="https://support.microsoft.com/es-es" data-m='{"cN":"W0Nav_Support_nav","id":"n1c9c2c1c9c4c1m1r1a1","sN":1,"aN":"c9c2c1c9c4c1m1r1a1"}'>Soporte</a>
            
        </li>
            </ul>
        </li>

<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c10c2c1c9c4c1m1r1a1","sN":10,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_10-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c10c2c1c9c4c1m1r1a1"}'>Software</span>
    <button id="uhf-navbtn-shellmenu_10-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c10c2c1c9c4c1m1r1a1","sN":2,"aN":"c10c2c1c9c4c1m1r1a1"}'>Software</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_10-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_WindowsApps_cont","cT":"Container","id":"c3c10c2c1c9c4c1m1r1a1","sN":3,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_11" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/apps/windows?icid=CNavAppsWindowsApps" data-m='{"cN":"GlobalNav_More_Software_WindowsApps_nav","id":"n1c3c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c10c2c1c9c4c1m1r1a1"}'>Aplicaciones Windows</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_AI_cont","cT":"Container","id":"c4c10c2c1c9c4c1m1r1a1","sN":4,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_12" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/ai" data-m='{"cN":"GlobalNav_More_Software_AI_nav","id":"n1c4c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c10c2c1c9c4c1m1r1a1"}'>IA</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_OneDrive_cont","cT":"Container","id":"c5c10c2c1c9c4c1m1r1a1","sN":5,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_13" class="js-subm-uhf-nav-link" href="https://onedrive.live.com/about/es-es/" data-m='{"cN":"GlobalNav_More_Software_OneDrive_nav","id":"n1c5c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c10c2c1c9c4c1m1r1a1"}'>OneDrive</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Outlook_cont","cT":"Container","id":"c6c10c2c1c9c4c1m1r1a1","sN":6,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_14" class="js-subm-uhf-nav-link" href="https://outlook.live.com/owa/" data-m='{"cN":"GlobalNav_More_Software_Outlook_nav","id":"n1c6c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c10c2c1c9c4c1m1r1a1"}'>Outlook</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Skype_cont","cT":"Container","id":"c7c10c2c1c9c4c1m1r1a1","sN":7,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_15" class="js-subm-uhf-nav-link" href="https://www.skype.com/es/" data-m='{"cN":"GlobalNav_More_Software_Skype_nav","id":"n1c7c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c10c2c1c9c4c1m1r1a1"}'>Skype</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_OneNote_cont","cT":"Container","id":"c8c10c2c1c9c4c1m1r1a1","sN":8,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_16" class="js-subm-uhf-nav-link" href="https://www.onenote.com/?omkt=es-ES" data-m='{"cN":"GlobalNav_More_Software_OneNote_nav","id":"n1c8c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c8c10c2c1c9c4c1m1r1a1"}'>OneNote</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Microsoft Teams_cont","cT":"Container","id":"c9c10c2c1c9c4c1m1r1a1","sN":9,"aN":"c10c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_17" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-teams/group-chat-software" data-m='{"cN":"GlobalNav_More_Software_Microsoft Teams_nav","id":"n1c9c10c2c1c9c4c1m1r1a1","sN":1,"aN":"c9c10c2c1c9c4c1m1r1a1"}'>Microsoft Teams</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cN":"PCsAndDevices_cont","cT":"Container","id":"c11c2c1c9c4c1m1r1a1","sN":11,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_18-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"cN":"GlobalNav_PCsAndDevices_nonnav","id":"nn1c11c2c1c9c4c1m1r1a1","sN":1,"aN":"c11c2c1c9c4c1m1r1a1"}'>PCs y dispositivos</span>
    <button id="uhf-navbtn-shellmenu_18-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"cN":"GlobalNav_PCsAndDevices_nonnav","id":"nn2c11c2c1c9c4c1m1r1a1","sN":2,"aN":"c11c2c1c9c4c1m1r1a1"}'>PCs y dispositivos</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_18-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_ShopXbox_cont","cT":"Container","id":"c3c11c2c1c9c4c1m1r1a1","sN":3,"aN":"c11c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_19" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/xbox?icid=CNavDevicesXbox" data-m='{"cN":"GlobalNav_More_PCsAndDevices_ShopXbox_nav","id":"n1c3c11c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c11c2c1c9c4c1m1r1a1"}'>Comprar Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_Accessories_cont","cT":"Container","id":"c4c11c2c1c9c4c1m1r1a1","sN":4,"aN":"c11c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_20" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/accessories?icid=CNavDevicesAccessories" data-m='{"cN":"GlobalNav_More_PCsAndDevices_Accessories_nav","id":"n1c4c11c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c11c2c1c9c4c1m1r1a1"}'>Accesorios</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c12c2c1c9c4c1m1r1a1","sN":12,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_21-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c12c2c1c9c4c1m1r1a1"}'>Entretenimiento</span>
    <button id="uhf-navbtn-shellmenu_21-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c12c2c1c9c4c1m1r1a1","sN":2,"aN":"c12c2c1c9c4c1m1r1a1"}'>Entretenimiento</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_21-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_XboxGamePassUltimate_cont","cT":"Container","id":"c3c12c2c1c9c4c1m1r1a1","sN":3,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_22" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/p/xbox-game-pass-ultimate/cfq7ttc0khs0?WT.mc_id=CNavGamesXboxGamePassUltimate" data-m='{"cN":"GlobalNav_More_Entertainment_XboxGamePassUltimate_nav","id":"n1c3c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c12c2c1c9c4c1m1r1a1"}'>Xbox Game Pass Ultimate</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Products_DevicesAndXbox_Xbox Live Gold_cont","cT":"Container","id":"c4c12c2c1c9c4c1m1r1a1","sN":4,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_23" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/p/xbox-live-gold/cfq7ttc0k5dj?WT.mc_id=CNavGamesXboxLiveGold" data-m='{"cN":"GlobalNav_Products_DevicesAndXbox_Xbox Live Gold_nav","id":"n1c4c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c12c2c1c9c4c1m1r1a1"}'>Xbox Live Gold</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_XboxGames_cont","cT":"Container","id":"c5c12c2c1c9c4c1m1r1a1","sN":5,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_24" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/top-paid/games/xbox" data-m='{"cN":"GlobalNav_More_Entertainment_XboxGames_nav","id":"n1c5c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c12c2c1c9c4c1m1r1a1"}'>Xbox y juegos</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_PCGames_cont","cT":"Container","id":"c6c12c2c1c9c4c1m1r1a1","sN":6,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_25" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/games/windows?icid=CNavGamesWindowsGames" data-m='{"cN":"GlobalNav_More_Entertainment_PCGames_nav","id":"n1c6c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c12c2c1c9c4c1m1r1a1"}'>Juegos para PC</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_WindowsDigitalGames_cont","cT":"Container","id":"c7c12c2c1c9c4c1m1r1a1","sN":7,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_26" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/games/windows?icid=TopNavWindowsGames" data-m='{"cN":"GlobalNav_More_Entertainment_WindowsDigitalGames_nav","id":"n1c7c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c12c2c1c9c4c1m1r1a1"}'>Juegos para Windows</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_MoviesAndTV_cont","cT":"Container","id":"c8c12c2c1c9c4c1m1r1a1","sN":8,"aN":"c12c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_27" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/movies-and-tv?icid=TopNavMoviesAndTv" data-m='{"cN":"GlobalNav_More_Entertainment_MoviesAndTV_nav","id":"n1c8c12c2c1c9c4c1m1r1a1","sN":1,"aN":"c8c12c2c1c9c4c1m1r1a1"}'>Pel&#237;culas y TV</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c13c2c1c9c4c1m1r1a1","sN":13,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_28-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c13c2c1c9c4c1m1r1a1"}'>Empresas</span>
    <button id="uhf-navbtn-shellmenu_28-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c13c2c1c9c4c1m1r1a1","sN":2,"aN":"c13c2c1c9c4c1m1r1a1"}'>Empresas</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_28-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft_Cloud_cont","cT":"Container","id":"c3c13c2c1c9c4c1m1r1a1","sN":3,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_29" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-cloud" data-m='{"cN":"GlobalNav_More_Business_Microsoft_Cloud_nav","id":"n1c3c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c13c2c1c9c4c1m1r1a1"}'>Microsoft Cloud</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft Security_cont","cT":"Container","id":"c4c13c2c1c9c4c1m1r1a1","sN":4,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_30" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/security" data-m='{"cN":"GlobalNav_More_Business_Microsoft Security_nav","id":"n1c4c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c13c2c1c9c4c1m1r1a1"}'>Seguridad de Microsoft</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_Azure_cont","cT":"Container","id":"c5c13c2c1c9c4c1m1r1a1","sN":5,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_31" class="js-subm-uhf-nav-link" href="https://azure.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_Azure_nav","id":"n1c5c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c13c2c1c9c4c1m1r1a1"}'>Azure</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftDynamics365_cont","cT":"Container","id":"c6c13c2c1c9c4c1m1r1a1","sN":6,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_32" class="js-subm-uhf-nav-link" href="https://dynamics.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_Business_MicrosoftDynamics365_nav","id":"n1c6c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c13c2c1c9c4c1m1r1a1"}'>Dynamics 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft365forbusiness_cont","cT":"Container","id":"c7c13c2c1c9c4c1m1r1a1","sN":7,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_33" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/business" data-m='{"cN":"GlobalNav_More_Business_Microsoft365forbusiness_nav","id":"n1c7c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c13c2c1c9c4c1m1r1a1"}'>Microsoft 365 para empresas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftIndustry_cont","cT":"Container","id":"c8c13c2c1c9c4c1m1r1a1","sN":8,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_34" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/industry" data-m='{"cN":"GlobalNav_More_Business_MicrosoftIndustry_nav","id":"n1c8c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c8c13c2c1c9c4c1m1r1a1"}'>Microsoft Industry</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftPowerPlatform_cont","cT":"Container","id":"c9c13c2c1c9c4c1m1r1a1","sN":9,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_35" class="js-subm-uhf-nav-link" href="https://powerplatform.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_Business_MicrosoftPowerPlatform_nav","id":"n1c9c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c9c13c2c1c9c4c1m1r1a1"}'>Microsoft Power Platform</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Windows365_cont","cT":"Container","id":"c10c13c2c1c9c4c1m1r1a1","sN":10,"aN":"c13c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_36" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/windows-365" data-m='{"cN":"GlobalNav_More_Business_Windows365_nav","id":"n1c10c13c2c1c9c4c1m1r1a1","sN":1,"aN":"c10c13c2c1c9c4c1m1r1a1"}'>Windows 365</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c14c2c1c9c4c1m1r1a1","sN":14,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_37-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c14c2c1c9c4c1m1r1a1"}'>Desarrolladores y TI
</span>
    <button id="uhf-navbtn-shellmenu_37-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c14c2c1c9c4c1m1r1a1","sN":2,"aN":"c14c2c1c9c4c1m1r1a1"}'>Desarrolladores y TI
</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_37-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_DeveloperCenter_cont","cT":"Container","id":"c3c14c2c1c9c4c1m1r1a1","sN":3,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_38" class="js-subm-uhf-nav-link" href="https://developer.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_DeveloperCenter_nav","id":"n1c3c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c14c2c1c9c4c1m1r1a1"}'>Centro para desarrolladores</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_Documentation_cont","cT":"Container","id":"c4c14c2c1c9c4c1m1r1a1","sN":4,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_39" class="js-subm-uhf-nav-link" href="https://learn.microsoft.com/docs/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_Documentation_nav","id":"n1c4c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c14c2c1c9c4c1m1r1a1"}'>Documentaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_MicrosoftLearn_cont","cT":"Container","id":"c5c14c2c1c9c4c1m1r1a1","sN":5,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_40" class="js-subm-uhf-nav-link" href="https://learn.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_MicrosoftLearn_nav","id":"n1c5c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c14c2c1c9c4c1m1r1a1"}'>Microsoft Learn</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_MicrosoftTechCommunity_cont","cT":"Container","id":"c6c14c2c1c9c4c1m1r1a1","sN":6,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_41" class="js-subm-uhf-nav-link" href="https://techcommunity.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_MicrosoftTechCommunity_nav","id":"n1c6c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c14c2c1c9c4c1m1r1a1"}'>Microsoft Tech Community</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_AzureMarketplace_cont","cT":"Container","id":"c7c14c2c1c9c4c1m1r1a1","sN":7,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_42" class="js-subm-uhf-nav-link" href="https://azuremarketplace.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_AzureMarketplace_nav","id":"n1c7c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c14c2c1c9c4c1m1r1a1"}'>Azure Marketplace</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_AppSource_cont","cT":"Container","id":"c8c14c2c1c9c4c1m1r1a1","sN":8,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_43" class="js-subm-uhf-nav-link" href="https://appsource.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_AppSource_nav","id":"n1c8c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c8c14c2c1c9c4c1m1r1a1"}'>AppSource</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_VisualStudio_cont","cT":"Container","id":"c9c14c2c1c9c4c1m1r1a1","sN":9,"aN":"c14c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_44" class="js-subm-uhf-nav-link" href="https://visualstudio.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_VisualStudio_nav","id":"n1c9c14c2c1c9c4c1m1r1a1","sN":1,"aN":"c9c14c2c1c9c4c1m1r1a1"}'>Visual Studio</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c15c2c1c9c4c1m1r1a1","sN":15,"aN":"c2c1c9c4c1m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_45-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c15c2c1c9c4c1m1r1a1"}'>Otro</span>
    <button id="uhf-navbtn-shellmenu_45-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c15c2c1c9c4c1m1r1a1","sN":2,"aN":"c15c2c1c9c4c1m1r1a1"}'>Otro</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_45-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Microsoft Rewards_cont","cT":"Container","id":"c3c15c2c1c9c4c1m1r1a1","sN":3,"aN":"c15c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_46" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/rewards" data-m='{"cN":"GlobalNav_More_Other_Microsoft Rewards_nav","id":"n1c3c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c3c15c2c1c9c4c1m1r1a1"}'>Microsoft Rewards </a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_FreeDownloadsAndSecurity_cont","cT":"Container","id":"c4c15c2c1c9c4c1m1r1a1","sN":4,"aN":"c15c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_47" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/download" data-m='{"cN":"GlobalNav_More_Other_FreeDownloadsAndSecurity_nav","id":"n1c4c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c4c15c2c1c9c4c1m1r1a1"}'>Seguridad y descargas gratuitas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Education_cont","cT":"Container","id":"c5c15c2c1c9c4c1m1r1a1","sN":5,"aN":"c15c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_48" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/education?icid=CNavMSCOML0_Studentsandeducation" data-m='{"cN":"GlobalNav_More_Other_Education_nav","id":"n1c5c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c5c15c2c1c9c4c1m1r1a1"}'>Educaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_GiftCards_cont","cT":"Container","id":"c6c15c2c1c9c4c1m1r1a1","sN":6,"aN":"c15c2c1c9c4c1m1r1a1"}'>
            <a id="shellmenu_49" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/gift-cards" data-m='{"cN":"GlobalNav_More_Other_GiftCards_nav","id":"n1c6c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c6c15c2c1c9c4c1m1r1a1"}'>Tarjetas regalo</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Licensing_cont","cT":"Container","id":"c7c15c2c1c9c4c1m1r1a1","sN":7,"aN":"c15c2c1c9c4c1m1r1a1"}'>
            <a id="Licensing" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/licensing/" data-m='{"cN":"GlobalNav_More_Other_Licensing_nav","id":"n1c7c15c2c1c9c4c1m1r1a1","sN":1,"aN":"c7c15c2c1c9c4c1m1r1a1"}'>Licenciamiento</a>
            
        </li>
    </ul>
    
</li>
                                                            <li class="f-multi-column-info">
                                    <a data-m='{"id":"n16c2c1c9c4c1m1r1a1","sN":16,"aN":"c2c1c9c4c1m1r1a1"}' href="https://www.microsoft.com/es-es/sitemap.aspx" aria-label="" class="c-glyph">Ver mapa del sitio</a>
                                </li>
                            
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
</div>
                            <form class="c-search" autocomplete="off" id="searchForm" name="searchForm" role="search" action="https://www.microsoft.com/es-es/search/explore" method="GET" data-seAutoSuggest='{"queryParams":{"market":"es-es","clientId":"7F27B536-CF6B-4C65-8638-A0F8CBDFCA65","sources":"Iris-Products,DCatAll-Products,Microsoft-Terms","filter":"+ClientType:StoreWeb","counts":"1,5,5"},"familyNames":{"Apps":"Aplicación","Books":"Libro","Bundles":"Pack","Devices":"Dispositivo","Fees":"Fee","Games":"Juego","MusicAlbums":"Álbum","MusicTracks":"Canción","MusicVideos":"Vídeo","MusicArtists":"Artista","OperatingSystem":"Sistema operativo","Software":"Software","Movies":"Película","TV":"Televisión","CSV":"Tarjeta de regalo","VideoActor":"Actor"}}' data-seautosuggestapi="https://www.microsoft.com/msstoreapiprod/api/autosuggest" data-m='{"cN":"GlobalNav_Search_cont","cT":"Container","id":"c3c1c9c4c1m1r1a1","sN":3,"aN":"c1c9c4c1m1r1a1"}' aria-expanded="false">
                                <input  id="cli_shellHeaderSearchInput" aria-label="B&#250;squeda ampliada" aria-autocomplete="list" aria-expanded="false" aria-controls="universal-header-search-auto-suggest-transparent" aria-owns="universal-header-search-auto-suggest-ul" type="search" name="q" role="combobox" placeholder="Buscar en Microsoft.com" data-m='{"cN":"SearchBox_nav","id":"n1c3c1c9c4c1m1r1a1","sN":1,"aN":"c3c1c9c4c1m1r1a1"}' data-toggle="tooltip" data-placement="right" title="Buscar en Microsoft.com" />
                                    <button id="search" aria-label="Buscar en Microsoft.com" class="c-glyph" data-m='{"cN":"Search_nav","id":"n2c3c1c9c4c1m1r1a1","sN":2,"aN":"c3c1c9c4c1m1r1a1"}' data-bi-mto="true" aria-expanded="false" disabled="disabled">
                                        <span role="presentation">Buscar</span>
                                        <span role="tooltip" class="c-uhf-tooltip c-uhf-search-tooltip">Buscar en Microsoft.com</span>
                                    </button>
                                <div class="m-auto-suggest" id="universal-header-search-auto-suggest-transparent" role="group">
                                    <ul class="c-menu" id="universal-header-search-auto-suggest-ul" aria-label="Sugerencias de b&#250;squeda" aria-hidden="true" data-bi-dnt="true" data-bi-mto="true" data-js-auto-suggest-position="default" role="listbox" data-tel="jsll" data-m='{"cN":"search suggestions_cont","cT":"Container","id":"c3c3c1c9c4c1m1r1a1","sN":3,"aN":"c3c1c9c4c1m1r1a1"}'></ul>
                                    <ul class="c-menu f-auto-suggest-no-results" aria-hidden="true" data-js-auto-suggest-postion="default" data-js-auto-suggest-position="default" role="listbox">
                                        <li class="c-menu-item"> <span tabindex="-1">Sin resultados</span></li>
                                    </ul>
                                </div>
                                
                            </form>
                        <button data-m='{"cN":"cancel-search","pid":"Cancelar Buscar","id":"nn4c1c9c4c1m1r1a1","sN":4,"aN":"c1c9c4c1m1r1a1"}' id="cancel-search" class="cancel-search" aria-label="Cancelar Buscar">
                            <span>Cancelar</span>
                        </button>
                        <div id="meControl" class="c-me"  data-signinsettings='{"containerId":"meControl","enabled":true,"headerHeight":48,"debug":false,"extensibleLinks":[],"userData":{"idp":"msa","firstName":"","lastName":"","memberName":"","cid":"","authenticatedState":"3"},"rpData":{"preferredIdp":"msa","msaInfo":{"signInUrl":"https://www.microsoft.com/about/onerf/signin?EEL=True\u0026pcexp=True","signOutUrl":"https://www.microsoft.com/about/onerf/signout?pcexp=True","meUrl":"https://login.live.com/me.srf?wa=wsignin1.0"},"aadInfo":{"signOutUrl":"https://www.microsoft.com/about/onerf/signout?pcexp=True","appId":"","siteUrl":"","blockMsaFed":true}}}' data-m='{"cN":"GlobalNav_Account_cont","cT":"Container","id":"c5c1c9c4c1m1r1a1","sN":5,"aN":"c1c9c4c1m1r1a1"}'>
                            <div class="msame_Header">
                                <div class="msame_Header_name st_msame_placeholder">Iniciar sesi&#243;n</div>
                            </div>
                            
                        </div>
                
            </div>
        </div>
        
        
    </div>
    
</header>




    </div>
        </div>

                    <script>window.performance && performance.mark && performance.mark("HeaderAreaEnd")</script>
            <script>window.performance && performance.measure && performance.measure("HeaderAreaDuration", "HeaderAreaBegin", "HeaderAreaEnd");</script>

        </div>
    
    
            <script>window.performance && performance.mark && performance.mark("MainAreaBegin")</script>
    <section id="primaryArea"  role="main" tabindex="-1" style="outline: none" data-m='{"cN":"primaryArea 1","cT":"Area_coreuiArea","id":"a2Body","sN":2,"aN":"Body"}'>
                <div id="primaryR1"    class="pad-hero"  data-grid="container" data-region-key="primaryr1" data-m='{"cN":"primaryR1 1","cT":"Region_coreui-region","id":"r1a2","sN":1,"aN":"a2"}' >

    <div  id="coreui-hero-7enwkdp" data-m='{"cN":"R1Hero 1","cT":"Module_coreui-hero","id":"m1r1a2","sN":1,"aN":"r1a2"}'  data-module-id="Authoring.AllModules|primaryR1|coreui-region|coreui-hero-7enwkdp|coreui-hero">
        
            <div class="m-hero ">
                            <div >
                        <section role="presentation" class="m-hero-item f-medium f-x-left f-y-center context-game theme-dark f-mask-40" 
                 data-m='{"cN":"PromotionalItem","cT":"Container","id":"c1m1r1a2","sN":1,"aN":"m1r1a2"}'
                 >
                <picture>
                    <source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQox?ver=cb27&amp;q=90&amp;m=6&amp;h=303&amp;w=539&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(max-width:539px)" /><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQox?ver=cb27&amp;q=90&amp;m=6&amp;h=431&amp;w=767&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:540px) and (max-width:767px)" /><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQox?ver=cb27&amp;q=90&amp;m=6&amp;h=609&amp;w=1083&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:768px) and (max-width:1083px)" /><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQox?ver=cb27&amp;q=90&amp;m=6&amp;h=472&amp;w=1259&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:1084px) and (max-width:1399px)" /><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQox?ver=cb27&amp;q=90&amp;m=6&amp;h=600&amp;w=1600&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:1400px) and (max-width:1778px)" /><source srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQox?ver=cb27&amp;q=90&amp;m=6&amp;h=600&amp;w=1600&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" /><img class="slider lazypreload" alt="Tres excursionistas atraviesan una montaña nevada bajo un cielo estrellado" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQox?ver=cb27&amp;q=90&amp;m=6&amp;h=600&amp;w=1600&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" />
                </picture>
            <div >
                <div>
<h1 class="c-heading">Empoderamiento de los dem&#225;s</h1>        <div class="c-paragraph"><p>Nuestra misión es dotar de medios a todas las personas y organizaciones del planeta para que sean más productivas.</p></div>
                </div>
            </div>
            
        </section>

            </div>

            </div>

















    </div>
        </div>
        <div id="primaryR2"    class="pad-content-placement"  data-grid="container" data-region-key="primaryr2" data-m='{"cN":"primaryR2 1","cT":"Region_coreui-region","id":"r2a2","sN":2,"aN":"a2"}' >

    <div  id="coreui-contenthighlight-wvyxkux" data-m='{"cN":"R2ContentHighlight 1","cT":"Module_coreui-contenthighlight","id":"m1r2a2","sN":1,"aN":"r2a2"}'  data-module-id="Authoring.AllModules|primaryR2|coreui-region|coreui-contenthighlight-wvyxkux|coreui-contenthighlight">
        


<div class="m-content-placement x-clearfix content-highlight">
		<div data-grid="col-12 stack-3">
			<div data-grid="col-6 pad-6x">
				<div data-grid="col-6">
	<div class="m-content-placement-item f-size-medium">

		<h2 class="c-heading">Nuestra empresa</h2>        <div class="c-paragraph"><p>Conoce todo acerca de Microsoft: datos de la empresa, noticias, nuestras oficinas en todo el mundo, etc.</p></div>
<a 
               class="c-call-to-action c-glyph"
               aria-label="Explora el mundo de Microsoft"
               data-m='{"cN":"Explora el mundo de Microsoft","cT":"0","id":"n1m1r2a2","sN":1,"aN":"m1r2a2"}'
href="https://www.microsoft.com/es-es/about/company"               
                 >
                <span>Explora el mundo de Microsoft</span>
            </a>

	</div>
				</div>
				<div data-grid="col-6">
	<div class="m-content-placement-item f-size-medium">

		<h2 class="c-heading">Qui&#233;nes somos</h2>        <div class="c-paragraph"><p>Conoce a algunos de nuestros empleados, explora historias interesantes y conoce a los directivos que dan forma a nuestra visión.</p></div>
<a 
               class="c-call-to-action c-glyph"
               aria-label="Conoce a los empleados de Microsoft"
               data-m='{"cN":"Conoce a los empleados de Microsoft","cT":"0","id":"n2m1r2a2","sN":2,"aN":"m1r2a2"}'
href="https://www.microsoft.com/es-es/about/people"               
                 >
                <span>Conoce a los empleados de Microsoft</span>
            </a>

	</div>
				</div>
			</div>
			<div data-grid="col-6 pad-6x">
				<div data-grid="col-6">
	<div class="m-content-placement-item f-size-medium">

		<h2 class="c-heading">Qu&#233; valoramos</h2>        <div class="c-paragraph"><p>Descubre cómo utilizamos la tecnología para crear plataformas y recursos que contribuyan a lograr un impacto positivo duradero.</p></div>
<a 
               class="c-call-to-action c-glyph"
               aria-label="Más información sobre nuestros valores"
               data-m='{"cN":"Más información sobre nuestros valores","cT":"0","id":"n3m1r2a2","sN":3,"aN":"m1r2a2"}'
href="https://www.microsoft.com/es-es/about/values"               
                 >
                <span>M&#225;s informaci&#243;n sobre nuestros valores</span>
            </a>

	</div>
				</div>
				<div data-grid="col-6">
	<div class="m-content-placement-item f-size-medium">

		<h2 class="c-heading">Contacta con nosotros</h2>        <div class="c-paragraph">Habla con nosotros. Estamos aquí para ayudarte.</div>
<a 
               class="c-call-to-action c-glyph"
               aria-label="Obtén la ayuda que necesitas"
               data-m='{"cN":"Obtén la ayuda que necesitas","cT":"0","id":"n4m1r2a2","sN":4,"aN":"m1r2a2"}'
href="https://support.microsoft.com/es-es/contactus/"               
                 >
                <span>Obt&#233;n la ayuda que necesitas</span>
            </a>

	</div>
				</div>
			</div>
		</div>
</div>



    </div>
        </div>
        <div id="primaryR3"      data-grid="container" data-region-key="primaryr3" data-m='{"cN":"primaryR3 1","cT":"Region_coreui-region","id":"r3a2","sN":3,"aN":"a2"}' >

    <div  id="coreui-areaheading-kgfly85" data-m='{"cN":"R2AreaHeading 1","cT":"Module_coreui-areaheading","id":"m1r3a2","sN":1,"aN":"r3a2"}'  data-module-id="Authoring.AllModules|primaryR3|coreui-region|coreui-areaheading-kgfly85|coreui-areaheading">
        <div class="m-area-heading">

        <h2 class="c-heading">Programas y proyectos destacados</h2>
        
        
        
</div>



    </div>
    <div  id="coreui-contentplacement-1zee9f7" data-m='{"cN":"R2ContentPlacement 1","cT":"Module_coreui-contentplacement","id":"m2r3a2","sN":2,"aN":"r3a2"}'  data-module-id="Authoring.AllModules|primaryR3|coreui-region|coreui-contentplacement-1zee9f7|coreui-contentplacement">
        
        <div class="m-content-placement x-clearfix">
        <div data-grid="col-12 stack-3">
            <div data-grid="col-6 pad-6x">
                <div data-grid="col-6">
    <section role="presentation" class="m-content-placement-item f-size-medium"
             data-m='{"cN":"Explorar En cifras","cT":"Container","id":"c1m2r3a2","sN":1,"aN":"m2r3a2"}'
             >
                <picture>
                    <source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQoD?ver=efd9&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(max-width:539px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQoD?ver=efd9&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:540px) and (max-width:767px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQoD?ver=efd9&amp;q=90&amp;m=6&amp;h=278&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:768px) and (max-width:1083px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQoD?ver=efd9&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:1084px) and (max-width:1399px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQoD?ver=efd9&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:1400px) and (max-width:1778px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQoD?ver=efd9&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" /><img class="lazyload" alt="" title="" src="//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQoD?ver=efd9&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" />
                </picture>
<h3 class="c-heading">Sostenibilidad en cifras</h3>        <div class="c-paragraph"><p>Microsoft tendrá una huella de carbono negativa en 2030. Echa una mirada interactiva a otras formas en que nuestra empresa está mejorando nuestro impacto medioambiental.</p></div>
<a 
               class="c-call-to-action c-glyph"
               aria-label="Explorar En cifras"
               data-m='{"cN":"Explorar En cifras","cT":"0","id":"n1c1m2r3a2","sN":1,"aN":"c1m2r3a2"}'
href=" https://news.microsoft.com/sustainability-by-the-numbers/es/home"               
                 >
                <span>Explorar En cifras</span>
            </a>
        
    </section>
                </div>
                <div data-grid="col-6">
    <section role="presentation" class="m-content-placement-item f-size-medium"
             data-m='{"cN":"Más información sobre nuestro enfoque","cT":"Container","id":"c2m2r3a2","sN":2,"aN":"m2r3a2"}'
             >
                <picture>
                    <source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBo?ver=e113&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(max-width:539px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBo?ver=e113&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:540px) and (max-width:767px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBo?ver=e113&amp;q=90&amp;m=6&amp;h=278&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:768px) and (max-width:1083px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBo?ver=e113&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:1084px) and (max-width:1399px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBo?ver=e113&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:1400px) and (max-width:1778px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBo?ver=e113&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" /><img class="lazyload" alt="Un árbol solitario que crece en un lago con montañas al fondo." src="//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBo?ver=e113&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" />
                </picture>
<h3 class="c-heading">Responsabilidad social corporativa</h3>        <div class="c-paragraph"><p>Creemos que la tecnología es una poderosa fuerza para el bien y trabajamos para promover un futuro sostenible en el que todos tengan acceso a los beneficios y las oportunidades que crea.</p></div>
<a 
               class="c-call-to-action c-glyph"
               aria-label="Más información sobre nuestro enfoque"
               data-m='{"cN":"Más información sobre nuestro enfoque","cT":"0","id":"n1c2m2r3a2","sN":1,"aN":"c2m2r3a2"}'
href="https://www.microsoft.com/en-us/corporate-responsibility/"               
                 >
                <span>M&#225;s informaci&#243;n sobre nuestro enfoque</span>
            </a>
        
    </section>
                </div>
            </div>
            <div data-grid="col-6 pad-6x">
                <div data-grid="col-6">
    <section role="presentation" class="m-content-placement-item f-size-medium"
             data-m='{"cN":"Visita la página web de noticias de Microsoft","cT":"Container","id":"c3m2r3a2","sN":3,"aN":"m2r3a2"}'
             >
                <picture>
                    <source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBr?ver=df21&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(max-width:539px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBr?ver=df21&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:540px) and (max-width:767px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBr?ver=df21&amp;q=90&amp;m=6&amp;h=278&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:768px) and (max-width:1083px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBr?ver=df21&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:1084px) and (max-width:1399px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBr?ver=df21&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:1400px) and (max-width:1778px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBr?ver=df21&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" /><img class="lazyload" alt="Una profesora que sonríe y se ríe con dos niños pequeños en una clase" src="//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HZBr?ver=df21&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" />
                </picture>
<h3 class="c-heading">Historias</h3>        <div class="c-paragraph"><p>En Microsoft, nos inspiran personas de todo el mundo que usan la tecnología para hacer cosas imaginativas, innovadoras y que cambian la vida. Compartimos sus historias.</p></div>
<a 
               class="c-call-to-action c-glyph"
               aria-label="Visita la página web de noticias de Microsoft"
               data-m='{"cN":"Conoce sus historias","cT":"0","id":"n1c3m2r3a2","sN":1,"aN":"c3m2r3a2"}'
href="https://news.microsoft.com/"               
                 >
                <span>Conoce sus historias</span>
            </a>
        
    </section>
                </div>
                <div data-grid="col-6">
    <section role="presentation" class="m-content-placement-item f-size-medium"
             data-m='{"cN":"Descubre Microsoft AI","cT":"Container","id":"c4m2r3a2","sN":4,"aN":"m2r3a2"}'
             >
                <picture>
                    <source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4I2av?ver=8d4b&amp;q=90&amp;m=6&amp;h=276&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(max-width:539px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4I2av?ver=8d4b&amp;q=90&amp;m=6&amp;h=195&amp;w=348&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:540px) and (max-width:767px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4I2av?ver=8d4b&amp;q=90&amp;m=6&amp;h=278&amp;w=494&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:768px) and (max-width:1083px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4I2av?ver=8d4b&amp;q=90&amp;m=6&amp;h=157&amp;w=279&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:1084px) and (max-width:1399px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4I2av?ver=8d4b&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" media="(min-width:1400px) and (max-width:1778px)" /><source data-srcset="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4I2av?ver=8d4b&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" /><img class="lazyload" alt="Un pequeño espacio de oficina futurista y colorido en el centro de un parque en las afueras de una gran ciudad" src="//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif" data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4I2av?ver=8d4b&amp;q=90&amp;m=6&amp;h=201&amp;w=358&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true" />
                </picture>
<h3 class="c-heading">Microsoft AI</h3>        <div class="c-paragraph"><p>Cuando se diseña pensando en las personas, la IA puede ampliar tus capacidades, liberarte para realizar tareas más creativas y estratégicas y ayudar a que tú y tu organización consigáis más resultados.</p></div>
<a 
               class="c-call-to-action c-glyph"
               aria-label="Descubre Microsoft AI"
               data-m='{"cN":"Descubre Microsoft AI","cT":"0","id":"n1c4m2r3a2","sN":1,"aN":"c4m2r3a2"}'
href="https://www.microsoft.com/es-mx/ai?activetab=pivot1%3aprimaryr5"               
                 >
                <span>Descubre Microsoft AI</span>
            </a>
        
    </section>
                </div>
            </div>
        </div>
        </div>













    </div>
        </div>
        <div id="primaryR20"    class="pad-social"  data-grid="container" data-region-key="primaryr20" data-m='{"cN":"primaryR20 1","cT":"Region_coreui-region","id":"r4a2","sN":4,"aN":"a2"}' >

    <div  id="coreui-socialfollow-t1te3ga" data-m='{"cN":"R20SocialFollow 1","cT":"Module_coreui-socialfollow","id":"m1r4a2","sN":1,"aN":"r4a2"}'  data-module-id="Authoring.AllModules|primaryR20|coreui-region|coreui-socialfollow-t1te3ga|coreui-socialfollow">
        <section role="region" class="m-social f-horizontal f-follow" aria-label="síguenos en las redes sociales" itemscope itemtype="http://schema.org/Organization">
    <span>Follow Microsoft</span>
    <ul>
        <li>
            <a data-m='{"id":"n1m1r4a2","sN":1,"aN":"m1r4a2"}' itemprop="sameAs" href="https://www.facebook.com/Microsoft" aria-label="Síguenos en Facebook" title="Seguir en Facebook se abre en una pesta&#241;a nueva" target=&quot;_blank&quot;>
                <picture>
                    <source type="image/svg+xml" srcset="//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/2532198d/coreui.statics/images/social/facebook.svg">
                    <img src="//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/85288795/coreui.statics/images/social/facebook.png" alt="Facebook">
                </picture>
            </a>
        </li>
        <li>
            <a data-m='{"id":"n2m1r4a2","sN":2,"aN":"m1r4a2"}' itemprop="sameAs" href="https://twitter.com/microsoft" aria-label="Síguenos en Twitter" title="Seguir en Twitter se abre en una pesta&#241;a nueva" target=&quot;_blank&quot;>
                <picture>
                    <source type="image/svg+xml" srcset="//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/6f40299c/coreui.statics/images/social/twitter.svg">
                    <img src="//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/93690392/coreui.statics/images/social/twitter.png" alt="Twitter">
                </picture>
            </a>
        </li>
        <li>
            <a data-m='{"id":"n3m1r4a2","sN":3,"aN":"m1r4a2"}' itemprop="sameAs" href="https://www.linkedin.com/company/microsoft" aria-label="Síguenos en LinkedIn" title="Seguir en LinkedIn se abre en una pesta&#241;a nueva" target=&quot;_blank&quot;>
                <picture>
                    <source type="image/svg+xml" srcset="//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/413bd4a8/coreui.statics/images/social/linkedin.svg">
                    <img src="//www.microsoft.com/onerfstatics/marketingsites-eas-prod/_h/b23f9ba2/coreui.statics/images/social/linkedin.png" alt="LinkedIn">
                </picture>
            </a>
        </li>
    </ul>
    <button data-m='{"pid":"Show additional social media links","id":"nn4m1r4a2","sN":4,"aN":"m1r4a2"}' class="c-glyph" aria-label="Show additional social media links" aria-hidden="true" data-js-toggle="false"></button>
</section>
    </div>
        </div>

    </section>
        <script>window.performance && performance.mark && performance.mark("MainAreaEnd")</script>
            <script>window.performance && performance.measure && performance.measure("MainAreaDuration", "MainAreaBegin", "MainAreaEnd");</script>

    
        <div role="presentation"
             id="footerArea"
             
             data-m='{"cN":"footerArea 1","cT":"Area_coreuiArea","id":"a3Body","sN":3,"aN":"Body"}'
             class="x-hidden-print uhf">
                    <script>window.performance && performance.mark && performance.mark("FooterAreaBegin")</script>

                    <div id="footerRegion"      data-region-key="footerregion" data-m='{"cN":"footerRegion 1","cT":"Region_coreui-region","id":"r1a3","sN":1,"aN":"a3"}' >

    <div  id="coreui-universalfooter-1incwzs" data-m='{"cN":"footer1 1","cT":"Module_coreui-universalfooter","id":"m1r1a3","sN":1,"aN":"r1a3"}'  data-module-id="Authoring.AllModules|footerRegion|coreui-region|coreui-universalfooter-1incwzs|coreui-universalfooter">
        



<footer id="uhf-footer" class="c-uhff context-uhf"  data-uhf-mscc-rq="false" data-footer-footprint="/MSAbout/MSaboutFooter, fromService: False" data-m='{"cN":"Uhf footer_cont","cT":"Container","id":"c1m1r1a3","sN":1,"aN":"m1r1a3"}'>
        <nav class="c-uhff-nav" aria-label="V&#237;nculos de recursos de pie de p&#225;gina" data-m='{"cN":"Footer nav_cont","cT":"Container","id":"c1c1m1r1a3","sN":1,"aN":"c1m1r1a3"}'>
            
                <div class="c-uhff-nav-row">
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn1_cont","cT":"Container","id":"c1c1c1m1r1a3","sN":1,"aN":"c1c1m1r1a3"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Novedades</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Surface Laptop Studio 2 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/Surface-Laptop-Studio-2/8rqr54krf1dz" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptopStudio2_nav","id":"n1c1c1c1m1r1a3","sN":1,"aN":"c1c1c1m1r1a3"}'>Surface Laptop Studio 2</a>
                            </li>
                            <li>
                                <a aria-label="Surface Laptop Go 3 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/Surface-Laptop-Go-3/8p0wwgj6c6l2" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptopGo3_nav","id":"n2c1c1c1m1r1a3","sN":2,"aN":"c1c1c1m1r1a3"}'>Surface Laptop Go 3</a>
                            </li>
                            <li>
                                <a aria-label="Surface Pro 9 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/surface-pro-9/93VKD8NP4FVK" data-m='{"cN":"Footer_WhatsNew_NewSurfacePro8_nav","id":"n3c1c1c1m1r1a3","sN":3,"aN":"c1c1c1m1r1a3"}'>Surface Pro 9</a>
                            </li>
                            <li>
                                <a aria-label="Surface Laptop 5 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/surface-laptop-5/8XN49V61S1BN" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptop2_nav","id":"n4c1c1c1m1r1a3","sN":4,"aN":"c1c1c1m1r1a3"}'>Surface Laptop 5</a>
                            </li>
                            <li>
                                <a aria-label="Surface Studio 2+ Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/surface-studio-2plus/8VLFQC3597K4" data-m='{"cN":"Footer_WhatsNew_SurfaceStudio_nav","id":"n5c1c1c1m1r1a3","sN":5,"aN":"c1c1c1m1r1a3"}'>Surface Studio 2+</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Novedades" class="c-uhff-link" href="https://www.microsoft.com/microsoft-365" data-m='{"cN":"Footer_WhatsNew_Microsoft365_nav","id":"n6c1c1c1m1r1a3","sN":6,"aN":"c1c1c1m1r1a3"}'>Microsoft 365</a>
                            </li>
                            <li>
                                <a aria-label="Aplicaciones de Windows 11 Novedades" class="c-uhff-link" href="https://www.microsoft.com/windows/windows-11-apps" data-m='{"cN":"Footer_WhatsNew_Windows_11_apps_nav","id":"n7c1c1c1m1r1a3","sN":7,"aN":"c1c1c1m1r1a3"}'>Aplicaciones de Windows 11</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn2_cont","cT":"Container","id":"c2c1c1m1r1a3","sN":2,"aN":"c1c1m1r1a3"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Microsoft Store</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Perfil de la cuenta Microsoft Store" class="c-uhff-link" href="https://account.microsoft.com/" data-m='{"cN":"Footer_StoreandSupport_AccountProfile_nav","id":"n1c2c1c1m1r1a3","sN":1,"aN":"c2c1c1m1r1a3"}'>Perfil de la cuenta</a>
                            </li>
                            <li>
                                <a aria-label="Centro de descarga Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/es-es/download" data-m='{"cN":"Footer_StoreandSupport_DownloadCenter_nav","id":"n2c2c1c1m1r1a3","sN":2,"aN":"c2c1c1m1r1a3"}'>Centro de descarga</a>
                            </li>
                            <li>
                                <a aria-label="Soporte de Microsoft Store Microsoft Store" class="c-uhff-link" href="https://go.microsoft.com/fwlink/?linkid=2139749" data-m='{"cN":"Footer_StoreandSupport_SalesAndSupport_nav","id":"n3c2c1c1m1r1a3","sN":3,"aN":"c2c1c1m1r1a3"}'>Soporte de Microsoft Store</a>
                            </li>
                            <li>
                                <a aria-label="Devoluciones Microsoft Store" class="c-uhff-link" href="https://support.microsoft.com/es-es/help/10558/microsoft-store-returning-items-bought-for-exchange-refund" data-m='{"cN":"Footer_StoreandSupport_Returns_nav","id":"n4c2c1c1m1r1a3","sN":4,"aN":"c2c1c1m1r1a3"}'>Devoluciones</a>
                            </li>
                            <li>
                                <a aria-label="Seguimiento de pedidos Microsoft Store" class="c-uhff-link" href="https://account.microsoft.com/orders" data-m='{"cN":"Footer_StoreandSupport_OrderTracking_nav","id":"n5c2c1c1m1r1a3","sN":5,"aN":"c2c1c1m1r1a3"}'>Seguimiento de pedidos</a>
                            </li>
                            <li>
                                <a aria-label="Reciclar  Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/recycling?icid=GlobalFooterNav" data-m='{"cN":"Footer_Recyclying_nav","id":"n6c2c1c1m1r1a3","sN":6,"aN":"c2c1c1m1r1a3"}'>Reciclar </a>
                            </li>
                            <li>
                                <a aria-label="Garant&#237;as comerciales Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/aboutwarranties?icid=GlobalFooterNav" data-m='{"cN":"Footer_Warranties_nav","id":"n7c2c1c1m1r1a3","sN":7,"aN":"c2c1c1m1r1a3"}'>Garant&#237;as comerciales</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn3_cont","cT":"Container","id":"c3c1c1m1r1a3","sN":3,"aN":"c1c1m1r1a3"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Educaci&#243;n</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Microsoft Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education" data-m='{"cN":"Footer_Education_MicrosoftInEducation_nav","id":"n1c3c1c1m1r1a3","sN":1,"aN":"c3c1c1m1r1a3"}'>Microsoft Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Dispositivos para educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/devices/overview" data-m='{"cN":"Footer_Education_DevicesforEducation_nav","id":"n2c3c1c1m1r1a3","sN":2,"aN":"c3c1c1m1r1a3"}'>Dispositivos para educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Teams para Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/products/teams" data-m='{"cN":"Footer_Education_MicrosoftTeamsforEducation_nav","id":"n3c3c1c1m1r1a3","sN":3,"aN":"c3c1c1m1r1a3"}'>Microsoft Teams para Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/buy-license/microsoft365" data-m='{"cN":"Footer_Education_Microsoft365Education_nav","id":"n4c3c1c1m1r1a3","sN":4,"aN":"c3c1c1m1r1a3"}'>Microsoft 365 Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Office Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/products/office" data-m='{"cN":"Footer_Education_Office Education_nav","id":"n5c3c1c1m1r1a3","sN":5,"aN":"c3c1c1m1r1a3"}'>Office Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Formaci&#243;n y desarrollo de educadores Educaci&#243;n" class="c-uhff-link" href="https://education.microsoft.com/" data-m='{"cN":"Footer_Education_EducatorTrainingDevelopment_nav","id":"n6c3c1c1m1r1a3","sN":6,"aN":"c3c1c1m1r1a3"}'>Formaci&#243;n y desarrollo de educadores</a>
                            </li>
                            <li>
                                <a aria-label="Ofertas para estudiantes y padres Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/student" data-m='{"cN":"Footer_Education_DealsForStudentsandParents_nav","id":"n7c3c1c1m1r1a3","sN":7,"aN":"c3c1c1m1r1a3"}'>Ofertas para estudiantes y padres</a>
                            </li>
                            <li>
                                <a aria-label="Azure para estudiantes Educaci&#243;n" class="c-uhff-link" href="https://azure.microsoft.com/es-es/free/students/" data-m='{"cN":"Footer_Education_Azureforstudents_nav","id":"n8c3c1c1m1r1a3","sN":8,"aN":"c3c1c1m1r1a3"}'>Azure para estudiantes</a>
                            </li>

                        </ul>
                        
                    </div>
                </div>
                <div class="c-uhff-nav-row">
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn4_cont","cT":"Container","id":"c4c1c1m1r1a3","sN":4,"aN":"c1c1m1r1a3"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Empresas
</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Microsoft Cloud Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/microsoft-cloud" data-m='{"cN":"Footer_Business_Microsoft_Cloud_nav","id":"n1c4c1c1m1r1a3","sN":1,"aN":"c4c1c1m1r1a3"}'>Microsoft Cloud</a>
                            </li>
                            <li>
                                <a aria-label="Seguridad de Microsoft Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/security" data-m='{"cN":"Footer_Business_Microsoft Security_nav","id":"n2c4c1c1m1r1a3","sN":2,"aN":"c4c1c1m1r1a3"}'>Seguridad de Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Azure Empresas
" class="c-uhff-link" href="https://azure.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftAzure_nav","id":"n3c4c1c1m1r1a3","sN":3,"aN":"c4c1c1m1r1a3"}'>Azure</a>
                            </li>
                            <li>
                                <a aria-label="Dynamics 365 Empresas
" class="c-uhff-link" href="https://dynamics.microsoft.com/es-es/" data-m='{"cN":"Footer_Business_MicrosoftDynamics365_nav","id":"n4c4c1c1m1r1a3","sN":4,"aN":"c4c1c1m1r1a3"}'>Dynamics 365</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/microsoft-365/business/" data-m='{"cN":"Footer_Business_M365_nav","id":"n5c4c1c1m1r1a3","sN":5,"aN":"c4c1c1m1r1a3"}'>Microsoft 365</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Industry Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/industry" data-m='{"cN":"Footer_Business_MicrosoftIndustry_nav","id":"n6c4c1c1m1r1a3","sN":6,"aN":"c4c1c1m1r1a3"}'>Microsoft Industry</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Teams Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/microsoft-teams/group-chat-software" data-m='{"cN":"Footer_Business_Microsoft365_nav","id":"n7c4c1c1m1r1a3","sN":7,"aN":"c4c1c1m1r1a3"}'>Microsoft Teams</a>
                            </li>
                            <li>
                                <a aria-label="Peque&#241;as empresas Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/business" data-m='{"cN":"Footer_Business-SmallBusiness_nav","id":"n8c4c1c1m1r1a3","sN":8,"aN":"c4c1c1m1r1a3"}'>Peque&#241;as empresas</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn5_cont","cT":"Container","id":"c5c1c1m1r1a3","sN":5,"aN":"c1c1m1r1a3"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Desarrolladores y TI</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Centro para desarrolladores Desarrolladores y TI" class="c-uhff-link" href="https://developer.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_DeveloperCenter_nav","id":"n1c5c1c1m1r1a3","sN":1,"aN":"c5c1c1m1r1a3"}'>Centro para desarrolladores</a>
                            </li>
                            <li>
                                <a aria-label="Documentaci&#243;n Desarrolladores y TI" class="c-uhff-link" href="https://learn.microsoft.com/docs/" data-m='{"cN":"Footer_DeveloperAndIT_Documentation_nav","id":"n2c5c1c1m1r1a3","sN":2,"aN":"c5c1c1m1r1a3"}'>Documentaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Learn Desarrolladores y TI" class="c-uhff-link" href="https://learn.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftLearn_nav","id":"n3c5c1c1m1r1a3","sN":3,"aN":"c5c1c1m1r1a3"}'>Microsoft Learn</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Tech Community Desarrolladores y TI" class="c-uhff-link" href="https://techcommunity.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftTechCommunity_nav","id":"n4c5c1c1m1r1a3","sN":4,"aN":"c5c1c1m1r1a3"}'>Microsoft Tech Community</a>
                            </li>
                            <li>
                                <a aria-label="Azure Marketplace Desarrolladores y TI" class="c-uhff-link" href="https://azuremarketplace.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_AzureMarketplace_nav","id":"n5c5c1c1m1r1a3","sN":5,"aN":"c5c1c1m1r1a3"}'>Azure Marketplace</a>
                            </li>
                            <li>
                                <a aria-label="AppSource Desarrolladores y TI" class="c-uhff-link" href="https://appsource.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_AppSource_nav","id":"n6c5c1c1m1r1a3","sN":6,"aN":"c5c1c1m1r1a3"}'>AppSource</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Power Platform Desarrolladores y TI" class="c-uhff-link" href="https://powerplatform.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_Power Platform_nav","id":"n7c5c1c1m1r1a3","sN":7,"aN":"c5c1c1m1r1a3"}'>Microsoft Power Platform</a>
                            </li>
                            <li>
                                <a aria-label="Visual Studio Desarrolladores y TI" class="c-uhff-link" href="https://visualstudio.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftVisualStudio_nav","id":"n8c5c1c1m1r1a3","sN":8,"aN":"c5c1c1m1r1a3"}'>Visual Studio</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn6_cont","cT":"Container","id":"c6c1c1m1r1a3","sN":6,"aN":"c1c1m1r1a3"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Compa&#241;&#237;a
</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Oportunidades de empleo Compa&#241;&#237;a
" class="c-uhff-link" href="https://careers.microsoft.com/" data-m='{"cN":"Footer_Company_Careers_nav","id":"n1c6c1c1m1r1a3","sN":1,"aN":"c6c1c1m1r1a3"}'>Oportunidades de empleo</a>
                            </li>
                            <li>
                                <a aria-label="Acerca de Microsoft Compa&#241;&#237;a
" class="c-uhff-link" href="https://www.microsoft.com/es-es/about" data-m='{"cN":"Footer_Company_AboutMicrosoft_nav","id":"n2c6c1c1m1r1a3","sN":2,"aN":"c6c1c1m1r1a3"}'>Acerca de Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Noticias de la compa&#241;&#237;a Compa&#241;&#237;a
" class="c-uhff-link" href="https://news.microsoft.com/es-es" data-m='{"cN":"Footer_Company_CompanyNews_nav","id":"n3c6c1c1m1r1a3","sN":3,"aN":"c6c1c1m1r1a3"}'>Noticias de la compa&#241;&#237;a</a>
                            </li>
                            <li>
                                <a aria-label="Privacidad en Microsoft Compa&#241;&#237;a
" class="c-uhff-link" href="https://privacy.microsoft.com/es-es" data-m='{"cN":"Footer_Company_PrivacyAtMicrosoft_nav","id":"n4c6c1c1m1r1a3","sN":4,"aN":"c6c1c1m1r1a3"}'>Privacidad en Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Inversores Compa&#241;&#237;a
" class="c-uhff-link" href="https://www.microsoft.com/investor/default.aspx" data-m='{"cN":"Footer_Company_Investors_nav","id":"n5c6c1c1m1r1a3","sN":5,"aN":"c6c1c1m1r1a3"}'>Inversores</a>
                            </li>
                            <li>
                                <a aria-label="Sostenibilidad  Compa&#241;&#237;a
" class="c-uhff-link" href="https://www.microsoft.com/es-es/sustainability/" data-m='{"cN":"Footer_Company_Sustainability_nav","id":"n6c6c1c1m1r1a3","sN":6,"aN":"c6c1c1m1r1a3"}'>Sostenibilidad </a>
                            </li>

                        </ul>
                        
                    </div>
                </div>
        </nav>
    <div class="c-uhff-base">
                <a id="locale-picker-link" aria-label="Selector de idiomas del contenido. Actualmente definido en Espa&#241;ol (Espa&#241;a, alfabetizaci&#243;n internacional)" class="c-uhff-link c-uhff-lang-selector c-glyph glyph-world" href="https://www.microsoft.com/en-us/about/locale?absoluteReturnUrl=https%3a%2f%2fwww.microsoft.com%2fes-es%2fabout" data-m='{"cN":"locale_picker(ES)_nav","id":"n7c1c1m1r1a3","sN":7,"aN":"c1c1m1r1a3"}'>Espa&#241;ol (Espa&#241;a, alfabetizaci&#243;n internacional)</a>

            <a data-m='{"id":"n8c1c1m1r1a3","sN":8,"aN":"c1c1m1r1a3"}' href="https://aka.ms/yourcaliforniaprivacychoices" class='c-uhff-link c-uhff-ccpa'>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" xml:space="preserve" height="16" width="43">
            <title>Icono de exclusi&#243;n de la Ley de privacidad de los consumidores de California (CCPA)</title>
            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/>
            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"/>
            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"/>
            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"/>
        </svg>
        <span>Tus opciones de privacidad</span>
    </a>

        <noscript>
                <a data-m='{"id":"n9c1c1m1r1a3","sN":9,"aN":"c1c1m1r1a3"}' href="https://aka.ms/yourcaliforniaprivacychoices" class='c-uhff-link c-uhff-ccpa'>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" xml:space="preserve" height="16" width="43">
            <title>Icono de exclusi&#243;n de la Ley de privacidad de los consumidores de California (CCPA)</title>
            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/>
            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"/>
            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"/>
            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"/>
        </svg>
        <span>Tus opciones de privacidad</span>
    </a>

        </noscript>
        <nav aria-label="V&#237;nculos corporativos de Microsoft">
            <ul class="c-list f-bare" data-m='{"cN":"Corp links_cont","cT":"Container","id":"c10c1c1m1r1a3","sN":10,"aN":"c1c1m1r1a3"}'>
                                <li  id="c-uhff-footer_contactus">
                    <a class="c-uhff-link" href="https://go.microsoft.com/?linkid=9813837" data-mscc-ic="false" data-m='{"cN":"Footer_ContactUs_nav","id":"n1c10c1c1m1r1a3","sN":1,"aN":"c10c1c1m1r1a3"}'>Contacte con Microsoft</a>
                </li>
                <li  id="c-uhff-footer_privacyandcookies">
                    <a class="c-uhff-link" href="https://go.microsoft.com/?linkid=9813838" data-mscc-ic="false" data-m='{"cN":"Footer_PrivacyandCookies_nav","id":"n2c10c1c1m1r1a3","sN":2,"aN":"c10c1c1m1r1a3"}'>Privacidad</a>
                </li>
                <li class=" x-hidden" id="c-uhff-footer_managecookies">
                    <a class="c-uhff-link" href="#" data-mscc-ic="false" data-m='{"cN":"Footer_ManageCookies_nav","id":"n3c10c1c1m1r1a3","sN":3,"aN":"c10c1c1m1r1a3"}'>Gestionar cookies</a>
                </li>
                <li  id="c-uhff-footer_termsofuse">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?LinkID=530144" data-mscc-ic="false" data-m='{"cN":"Footer_TermsOfUse_nav","id":"n4c10c1c1m1r1a3","sN":4,"aN":"c10c1c1m1r1a3"}'>Condiciones de uso </a>
                </li>
                <li  id="c-uhff-footer_trademarks">
                    <a class="c-uhff-link" href="https://www.microsoft.com/trademarks" data-mscc-ic="false" data-m='{"cN":"Footer_Trademarks_nav","id":"n5c10c1c1m1r1a3","sN":5,"aN":"c10c1c1m1r1a3"}'>Marcas registradas</a>
                </li>
                <li  id="c-uhff-footer_aboutourads">
                    <a class="c-uhff-link" href="https://choice.microsoft.com/" data-mscc-ic="false" data-m='{"cN":"Footer_AboutourAds_nav","id":"n6c10c1c1m1r1a3","sN":6,"aN":"c10c1c1m1r1a3"}'>Sobre nuestra publicidad</a>
                </li>

                <li>&#169; Microsoft 2024</li>
                
            </ul>
        </nav>
    </div>
    
</footer>

<script id="uhf-footer-ccpa">
    const globalPrivacyControlEnabled = navigator.globalPrivacyControl;

    const GPC_DataSharingOptIn = (globalPrivacyControlEnabled) ? false : checkThirdPartyAdsOptOutCookie();

    function checkThirdPartyAdsOptOutCookie() {
        try {
            const ThirdPartyAdsOptOutCookieName = '3PAdsOptOut';
            var cookieValue = getCookie(ThirdPartyAdsOptOutCookieName);
            return cookieValue != 1;
        } catch {
            return true;
        }
    }

    function getCookie(cookieName) {
        var cookieValue = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
        return (cookieValue) ? cookieValue[2] : '';
    }
</script>





    </div>
        </div>

                    <script>window.performance && performance.mark && performance.mark("FooterAreaEnd")</script>
            <script>window.performance && performance.measure && performance.measure("FooterAreaDuration", "FooterAreaBegin", "FooterAreaEnd");</script>

        </div>
    
    
    
    
    <script>if(require(["jqReady!","window","document","location","deferExec!"],function(){window.location.host.indexOf("businessstore.microsoft.com")!=-1&&msCommonShell&&(msCommonShell.as={callback:function(){}})}),window.location.host.indexOf("businessstore.microsoft.com")!=-1){var p=document.createElement("nav");x=document.getElementById("headerUniversalHeader");x.insertBefore(p,x.firstChild);p.outerHTML="<nav id=uhf-g-nav><\/nav>"}require(["jqReady!","deferExec!"],function(n){n("[data-ocms-id] .m-content-placement section a, [data-ocms-id] .m-content-placement section").removeAttr("data-js-href").removeAttr("href").bind("mouseup click mousedown",function(n){n.stopImmediatePropagation();n.preventDefault()})});require(["jqReady!","deferExec!"],function(n){n("[data-ocms-id] .m-hyperlink-group-content-placement section a, [data-ocms-id] .m-hyperlink-group-content-placement section").removeAttr("data-js-href").removeAttr("href").bind("mouseup click mousedown",function(n){n.stopImmediatePropagation();n.preventDefault()})});location.href.toLowerCase().indexOf("collections/blackfridaybrowsealldeals")>0&&require(["jqReady!","deferExec!"],function(n){n("source,img",n(".m-product-placement-item:not(.context-movie)").removeClass("contex-app,context-game").addClass("context-movie")).each(function(){var t=n(this),r=t.is("img")?"src":"srcset",u="data-"+r,i=t.attr(u);i&&(i=i.replace("&h=170","&h=124"),t.attr(u,i),t.is(".lazyloaded")&&t.attr(r,i))})});require(["jqReady!"],function(n){if(document.body.className.indexOf("s_swiftkey")>0){var t=document.documentElement.lang;if(["ar-eg","pt-br","tr-tr","se-se","es-es","de-de"].indexOf(t)!=-1)return;n('body.s_swiftkey .c-call-to-action[aria-label="download_app"]').html('<img src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2dKBu" alt="Download on the app store" height=50>').attr("class","margin-bottom-10").attr("style","display:block");n('body.s_swiftkey .c-call-to-action[aria-label="download_play"]').html('<img src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2dCNN" alt="Get it on google play" height=50>').attr("class","margin-bottom-10").attr("style","display:block")}});require(["jqReady!"],function(n){document.body.className.indexOf("s_microsoftpix")>0&&n('body.s_microsoftpix .c-call-to-action[aria-label="download_app"]').html('<img src="https://swiftkey.com/images/misc/stores/app/en.png" alt="Download on the app store" height=50>').attr("class","margin-bottom-10").attr("style","display:block")});require(["selectMenu","htmlExtensions"],function(n,t){n.SelectMenu.prototype.setSelectedItem=function(n){if(!n||!this.element)return!1;var i=t.selectFirstElement('li[id="'+n+'"] > a',this.element)||t.selectFirstElement('li[id="'+n+'"] > span',this.element);return i?this.onItemSelected(i,!1,!1):!1}});require(["jqReady!"],function(n){document.body.className.indexOf("s_hololens")>0&&n("#content-links").children().eq(1).attr("ID","hololens-addtocard")});require(["jqReady!"],function(n){n(".s_airband .m-content-placement .m-content-placement-item, .s_airband .m-hero .m-hero-item, .s_ai .m-multi-hero .m-multi-hero-item").each(function(){var t=n(this).find("a.c-call-to-action").first();if(t.length>0&&t[0].hasAttribute("data-js-dialog-show")){n(this).css("cursor","pointer");t.on("click",function(n){n.stopPropagation()});n(this).on("click",function(){t[0].click()});n(this).on("mousedown",function(){t[0].mousedown()})}})});require(["jqReady!"],function(n){if(document.body.className.indexOf("s_corporate-responsibility")>0){n(document).on("click",".dropdown",function(){var i=n(this);t(i)});n(document).on("keydown",".dropdown",function(i){var r=i.keyCode?i.keyCode:i.which,u;(r===13||r===32)&&(u=n(this),t(u))});setTimeout(function(){var t=n(".c-select-menu").find("button");n.each(t,function(t){var i=n(this).attr("id"),r=i+"-"+t;n(this).attr("id",r);t++})},4e3);function t(t){var i=t,t=i.find(".dropdown-list").val(),s=i.find(".dropdown-list  option:selected").data("btntext"),c=i.find(".dropdown-list  option:selected").data("arialabel"),e=i.find("select").val(),h=i.find(".dropdown-list  option:selected").data("btnarialabel"),o,r,u,f;e=="0"||e==null?(o=n(".c-select-menu").val(),n(".c-select-menu").find("button").attr("aria-label",o),i.next(".cta-link-btn").css("display","none")):(i.next(".cta-link-btn").css("display","inline-block"),i.next(".cta-link-btn").attr("href",t),i.next(".cta-link-btn").attr("aria-label",h),i.next(".cta-link-btn").find("span").html(s),r="",n(".c-select-menu > ul > li").each(function(){return r=n(this).find("span[aria-selected=true]").text(),r!=""?!1:void 0}),u=n(".c-select-menu").find("button").text(),u==r&&(n(".dropdown-list option:contains("+u+")").attr("selected","true"),f=n(".dropdown-list option:selected").data("arialabel"),n(".dropdown-list").attr("aria-label",f),n(".c-select-menu").find("button").attr("aria-label",f)))}}});require(["jqReady!"],function(n){document.body.className.indexOf("s_swiftkey")>0&&(n('body.s_swiftkey .c-call-to-action[aria-label="download_app"]').html('<img src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2dFpu" alt="app store" height=50>').attr("class","margin-bottom-10").attr("style","display:block"),n('body.s_swiftkey .c-call-to-action[aria-label="download_play"]').html('<img src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2dFpt" alt="google play" height=50>').attr("class","margin-bottom-10").attr("style","display:block"))});</script>


    
</body>
</html>



