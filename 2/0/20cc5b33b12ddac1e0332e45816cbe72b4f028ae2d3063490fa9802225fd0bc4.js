adOcean.isMobile = function () {
    return jQuery("body").outerWidth(true) < 641;
};

adOcean.getZoneElements = function () {
    return this.orderElements(this.getNonOrderedElements());
};

adOcean.getNonOrderedElements = function () {
    return jQuery(".adOceanZone");
};

adOcean.orderElements = function ($elements) {
    adOcean.normalizePriorityOfElements($elements);

    var priorityGroupedElements = [];
    $elements.each(function (i, e) {
        var $el = jQuery(e);
        var priority = $el.data('priority');

        if (priorityGroupedElements[priority] === undefined) {
            priorityGroupedElements[priority] = [];
        }
        priorityGroupedElements[priority].push($el);
    });

    var orderedElements = [];
    jQuery.each(priorityGroupedElements, function (priority, elements) {
        jQuery.each(elements, function (i, $el) {
            orderedElements.push($el);
        });
    });

    return orderedElements;
};

adOcean.normalizePriorityOfElements = function ($elements) {
    $elements.each(function (i, e) {
        var $el = jQuery(e);
        var priority = $el.data('priority');

        if (priority !== parseInt(priority, 10)) {
            priority = 100;
            $el.data('priority', priority);
        }
    });
};

adOcean.getMasterCode = function () {
    if (this.isMobile()) {
        return this.masterCodes.mobile.length ? this.masterCodes.mobile : this.globalTrackingId;
    }
    return this.masterCodes.desktop.length ? this.masterCodes.desktop : this.globalTrackingId;
};

adOcean.sendMaster = function (masterConfig = {id: this.getMasterCode()}) {
    if (!this.isMasterAlreadySent(masterConfig.id)) {
        this.mastersAlreadySent.push(masterConfig.id);
        ado.master(masterConfig);
    }
};

adOcean.getCustomCodesWithIdKeys = function () {
    var idsWIthMasters = {};
    if (typeof adOcean.customCodes !== 'undefined') {
        adOcean.customCodes.forEach(item => {
            idsWIthMasters[item.id] = {mobile: item.mobile, desktop: item.desktop};
        });
    }

    return idsWIthMasters;
};

adOcean.getZoneIdByDomId = function (domId) {
    if (!window.adOceanUrlZoneIdReplacements) {
        return domId;
    }

    var replaceMap = this.getMasterIdReplaceMap();
    if (replaceMap[domId]) {
        return replaceMap[domId];
    }
    return domId;
};

adOcean.getMasterIdReplaceMap = function () {
    var url = window.location.toString();
    var map = {};

    jQuery.each(adOceanUrlZoneIdReplacements, jQuery.proxy(function (urlPart, idPairs) {
        if (url.indexOf(urlPart) !== -1) {
            map = idPairs;
            return false;
        }
    }, this));

    return map;
};

adOcean.moveIfInterstitial = function ($el) {
    if (!$el.hasClass('adOceanInterstitial')) {
        return;
    }
    $el.detach().appendTo('body');
};

adOcean.sendSlave = function ($el, masterCode, keys, vars) {
    adOcean.moveIfInterstitial($el);

    var domId = $el.attr('id');
    var zoneId = this.getZoneIdByDomId(domId);

    $el.trigger('sendAdOceanSlave', {slaveId: zoneId, priority: $el.data('priority')});

    if (domId !== zoneId) {
        $el.attr('id', zoneId);
    }

    ado.slave(zoneId, {
            myMaster: masterCode,
            onServerEmission: function () {
                // zone id is valid
            },
            onServerEmissionEmpty: function () {
                // zone id is invalid or ad is empty
                adOcean.removeEmptyAdo($el);
                console.log("master: " + this.config.myMaster + " | slave: " + this.config.id + " | empty");
            },
            onLoad: function () {
                // ad loaded
                adOcean.showWrapper($el);
                console.log("master: " + this.config.myMaster + " | slave: " + this.config.id + " | loaded");
            },
            keys: keys,
            vars: vars
        }
    );
};

adOcean.sendPlacement = function ($el) {
    var domId = $el.attr('id');
    var zoneId = this.getZoneIdByDomId(domId).replace('ado-', '');

    if (domId !== zoneId) {
        $el.attr('id', zoneId);
    }

    ado.placement({id: zoneId});
};

adOcean.removeEmptyAdo = function ($el) {
    var event = jQuery.Event('preRemove.adOcean');
    $el.trigger(event);
    if (event.isDefaultPrevented()) {
        return;
    }

    var removeClosestSelector = $el.data('removeClosest');
    if (removeClosestSelector) {
        $el.closest(removeClosestSelector).remove();
    }

    $el.trigger('postRemove.adOcean');
};

adOcean.showWrapper = function ($el) {
    var event = jQuery.Event('preShow.adOcean');
    $el.trigger(event);
    if (event.isDefaultPrevented()) {
        return;
    }

    $el.closest('.et_pb_module, .banner-container, .eads_banner_areas').removeClass('hidden d-none');
    $el.trigger('postShow.adOcean');
};

adOcean.removeStrategies = {
    'forced': function (el) {
        return true;
    }
};

adOcean.shouldBeSentStrategies = {
    'default': function (el) {
        var isMobile = adOcean.isMobile();
        if (isMobile && el.hasClass('adOceanMobile')) {
            return true;
        }

        return !!(!isMobile && el.hasClass('adOceanDesktop'));
    }
};

adOcean.isMasterAlreadySent = function (masterId) {
    return this.mastersAlreadySent.indexOf(masterId) !== -1;
};

adOcean.isPageNsfw = function () {
    return document.querySelector('meta[name="nfsw"]') && document.querySelector('meta[name="nfsw"]').getAttribute('content') === 'true';
};

adOcean.getKeywordsMeta = function () {
    var tags = document.querySelector('meta[name="keywords"]') ? document.querySelector('meta[name="keywords"]').getAttribute('content').split(',') : [];
    var tagsInArticleDom = document.querySelectorAll('.tags .tag');
    if (tagsInArticleDom.length) {
        tagsInArticleDom.forEach((tag) => {
            if (tag.querySelector('*')) {
                if (tags.indexOf(tag.querySelector('*').innerHTML) === -1) {
                    tags.push(tag.querySelector('*').innerHTML);
                }
            } else if (tags.indexOf(tag.innerHTML) === -1) {
                tags.push(tag.innerHTML);
            }
        });
    }

    return tags;
};

adOcean.getSiteUserIdFromCookie = function () {
    var cookie = document.cookie.split(';').filter((item) => {
        return item.indexOf('_vid') !== -1;
    });

    if (cookie.length) {
        return cookie[0].split('=')[1];
    }

    return null;
};

adOcean.initZones = function () {

    var masterCode = this.getMasterCode(); // needed for not custom slaves
    var vars = {nsfw: adOcean.isPageNsfw(), mwid: adOcean.getSiteUserIdFromCookie()};
    var customCodes = this.getCustomCodesWithIdKeys();

    jQuery.each(this.getZoneElements(), jQuery.proxy(function (i, el) {
        if (this.shouldBeSentStrategies.default(el)) {
            var zoneElement = jQuery(el);
            if (zoneElement[0].id.indexOf('ado-') !== -1) {
                adOcean.sendPlacement(zoneElement);
            } else if (customCodes.hasOwnProperty(zoneElement[0].id)) {
                if (adOcean.isMobile() && customCodes[zoneElement[0].id].mobile.length) {
                    adOcean.sendMaster({id: customCodes[zoneElement[0].id].mobile, keys: adOcean.getKeywordsMeta(), vars: vars});
                    adOcean.sendSlave(zoneElement, customCodes[zoneElement[0].id].mobile);
                } else if (customCodes[zoneElement[0].id].desktop.length) {
                    adOcean.sendMaster({id: customCodes[zoneElement[0].id].desktop, keys: adOcean.getKeywordsMeta(), vars: vars});
                    adOcean.sendSlave(zoneElement, customCodes[zoneElement[0].id].desktop);
                }
            } else if (masterCode && masterCode.length) {
                adOcean.sendMaster({id: masterCode, keys: adOcean.getKeywordsMeta(), vars: vars});
                adOcean.sendSlave(zoneElement, masterCode, adOcean.getKeywordsMeta(), vars);
            }
            return true;
        }

        var removeStrategy = el.data('removeStrategy');
        if (typeof removeStrategy === 'undefined') {
            return true;
        }

        if (adOcean.removeStrategies[removeStrategy](el)) {
            adOcean.removeEmptyAdo(el);
        }

    }, this));
};

jQuery(function ($) {
    if (!ado) {
        return;
    }

    adOcean.initZones();
});
ch(function(elem,index){if(elem[key]===value&&ret===-1){ret=index}})}else{arr.forEach(function(elem,index){if(JSON.stringify(elem)===JSON.stringify(obj)&&ret===-1){ret=index}})}return ret},arrayShuffle:function(array){"use strict";var j,x,i=array.length;while(i){j=parseInt(Math.random()*i,10);i-=1;x=array[i];array[i]=array[j];array[j]=x}return array},arrayContains:function(array,elem){"use strict";return array.indexOf(elem)>-1},arrayGetProperties:function(arr,prop){"use strict";var i,output=[];for(i=0;i<arr.length;i+=1){if(arr[i].hasOwnProperty(prop)){output.push(arr[i][prop])}else{output.push(null)}}return output},objectIsEquals:function(a,b){"use strict";return JSON.stringify(a)===JSON.stringify(b)},objectExtend:function(obj1,obj2){"use strict";var i;for(i in obj2){if(obj2.hasOwnProperty(i)){obj1[i]=obj2[i]}}return obj1},objectIsValid:function(obj,rules,reporting){"use strict";var that=this,req,prop,rule,output=true;if(rules.hasOwnProperty("required")){for(req in rules.required){if(!obj.hasOwnProperty(rules.required[req])){if(reporting===true||reporting==="log"){that.error('Hianyzik az "'+rules.required[req]+'" parameter')}else if(reporting==="die"){that.die('Hianyzik az "'+rules.required[req]+'" parameter')}output=false}}}for(prop in rules){if(prop==="required"){continue}if(rules.hasOwnProperty(prop)){for(rule in rules[prop]){if(!that.isDefined(that[rule])){that.die('Nincsen "'+rule+'" szabály a validatorban')}if(rules.required.indexOf(prop)>-1&&!that[rule](obj[prop])){if(reporting===true||reporting==="log"){that.error('A(z) "'+prop+'" property nem '+rule)}else if(reporting==="die"){that.die('A(z) "'+prop+'" property nem '+rule)}output=false}}}}return output},objectDotReference:function(obj,str){"use strict";var i;str=str.split(".");for(i=0;i<str.length;i+=1){if(obj.hasOwnProperty(str[i])){obj=obj[str[i]]}else{obj=""}}return obj},stringToAbcArray:function(str){"use strict";var alphabetLower=Utils.alphabetLower,tempString=str.replace(/\s/g,"_"),stringArray=[];while(tempString.length>0){if(Utils.arrayContains(alphabetLower,tempString.substr(0,3).toLocaleLowerCase())){stringArray.push(tempString.substr(0,3));tempString=tempString.substr(3)}else if(Utils.arrayContains(alphabetLower,tempString.substr(0,2).toLocaleLowerCase())){stringArray.push(tempString.substr(0,2));tempString=tempString.substr(2)}else{stringArray.push(tempString[0]);tempString=tempString.substr(1)}}return stringArray},stringToSlug:function(str){"use strict";var char,i=0,result="",l=str.length,specialCharsMap={"Á":"A","Â":"A","Ä":"A","Ç":"C","É":"E","Ë":"E","Í":"I","Î":"I","Ó":"O","Ô":"O","Ö":"O","Õ":"O","Ú":"U","Ü":"U","Û":"U","Ý":"Y","á":"a","â":"a","ä":"a","ç":"c","é":"e","ë":"e","í":"i","î":"i","ó":"o","ô":"o","ö":"o","õ":"o","ú":"u","ü":"u","û":"u","ý":"y"};while(i<l){char=str[i];if(specialCharsMap[char]){char=specialCharsMap[char]}result+=char;i+=1}result=result.replace(/[\.]/g,"");result=result.replace(/[\s]/g,"-");result=result.replace(/\-+/g,"-");result=result.toLowerCase();return result},stringMassReplace:function(str,obj,tags){"use strict";var code,opentag="",closetag="",pattern="",template=str;if(typeof tags==="string"){opentag=tags[0];closetag=tags[1]||tags[0]}if(opentag==="["){opentag="\\"+opentag}if(closetag==="]"){closetag="\\"+closetag}for(code in obj){if(obj.hasOwnProperty(code)){pattern=new RegExp(opentag+code+closetag,"g");template=template.replace(pattern,obj[code])}}return template},escapeParam:function(str){"use strict";var match=str.match(/<|>/g);if(!this.isString(str)||match&&match.length>0){return""}return str.replace(/"/g,"&quot;").replace(/'/g,"&#039;")},urlParseQuery:function(url,paramName){"use strict";url=url||this.url.full;var params={},tempArray=url.split("?"),queryString,tokens,re=/[?&]?([^=]+)=([^&]*)/g;paramName=paramName||"";if(tempArray.length<=1){return""}queryString=tempArray[1].split("#")[0];tokens=re.exec(queryString);while(tokens){params[decodeURIComponent(tokens[1])]=this.escapeParam(decodeURIComponent(tokens[2]));tokens=re.exec(queryString)}if(paramName){return params[paramName]||""}return params},urlGetParam:function(paramName){"use strict";return this.urlParseQuery(this.url.full,paramName)},urlUpdateQueryParam:function(url,obj){"use strict";var urlSegments=url.split("?"),urlBase=urlSegments[0],urlQuery=urlSegments[1],urlObj={},temp="",newQuery="",queryArray,qMark="",i,o,newparam;if(urlQuery){queryArray=urlQuery.split("&");for(i=0;i<queryArray.length;i+=1){o=queryArray[i].split("=");urlObj[o[0]]=o[1]}}this.objectExtend(urlObj,obj);for(newparam in urlObj){if(urlObj.hasOwnProperty(newparam)&&urlObj[newparam]!==""&&urlObj[newparam]!==null){newQuery+=temp+newparam+"="+urlObj[newparam];temp="&";qMark="?"}}return urlBase+qMark+newQuery},locationUpdateQueryParam:function(obj){"use strict";window.history.pushState({},"",this.urlUpdateQueryParam(this.url.full,obj))},urlAddSegment:function(url,param){"use strict";var returnUrl=url.replace(/\/$/,""),p;if(typeof param==="object"){for(p in param){if(Object.prototype.hasOwnProperty.call(param,p)){returnUrl+="/"+p+"/"+param[p]}}}else{returnUrl+="/"+param}return returnUrl},urlSegmentArray:function(url){"use strict";url=url||this.url.full;return url.replace(/(^http[s]?:\/\/)|(:\d*)|(\/$)/g,"").split(/\/|\?|#/g)},urlGetParts:function(options,urlStr){"use strict";urlStr=urlStr||this.url.path+this.url.search+this.url.hash;var path=urlStr,signHash=urlStr.lastIndexOf("#"),signQuestion=urlStr.lastIndexOf("?"),signDot=urlStr.lastIndexOf("."),hasSign=signHash!==-1||signQuestion!==-1,searchArray=urlStr.split("?"),hashArray=urlStr.split("#"),partCikkId,partExt="",params="",hash="",out="",lastSlash,tempArray;if(hasSign){if(signQuestion!==-1){path=urlStr.substring(0,signQuestion)}else{path=urlStr.substring(0,signHash)}}if(path.slice(-1)==="/"){path=path.substring(0,path.length-1)}lastSlash=path.lastIndexOf("/");partCikkId=path.substring(lastSlash+1);if(signDot!==-1){partCikkId=partCikkId.substring(0,partCikkId.lastIndexOf("."));partExt=path.substring(signDot+1)}if(typeof options==="string"){options=options.split(" ")}if(typeof options==="object"){if(this.arrayContains(options,"path")){out+=path}if(this.arrayContains(options,"cikkid")){out+=partCikkId}if(this.arrayContains(options,"ext")){if(options.length>1&&partExt!==""){out+="."}out+=partExt}if(searchArray[1]!==undefined){tempArray=searchArray[1].split("#");params=tempArray[0]}if(this.arrayContains(options,"params")){out+=options.length>1&&params!==""?"?":"";out+=params}if(hashArray[1]!==undefined){hash=hashArray[1]}if(this.arrayContains(options,"hash")){out+=options.length>1&&hash!==""?"#":"";out+=hash}}return out},urlGetDomain:function(urlStr){"use strict";var urlArray=this.urlSegmentArray(urlStr),domainParts=urlArray[0].split("."),pattern=/^(\d{1,3}\.?){4}$/;if(domainParts.length===1){return domainParts[0]}if(domainParts.length===4&&pattern.test(urlArray[0])){return urlArray[0]}if(domainParts.length>=2){if(urlArray[0].indexOf("she.")>-1||urlArray[0].indexOf("gphirek.")>-1||urlArray[0].indexOf("sulilife.")>-1){return urlArray[0]}else{return domainParts[domainParts.length-2]+"."+domainParts[domainParts.length-1]}}return urlArray[0].replace("www.","")},matchGetNth:function(regex,subject,index){"use strict";var match=subject.match(regex);return match&&match.length>index&&match[index]||""},matchGetFirst:function(regex,subject){"use strict";return this.matchGetNth(regex,subject,0)},viewportWidth:function(){"use strict";return Math.max(document.documentElement.clientWidth,window.innerWidth||0)},viewportHeight:function(){"use strict";return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},viewportGetName:function(width,obj){"use strict";var wp,ret;width=width!==undefined?width:this.viewportWidth();obj=obj!==undefined?obj:this.defaultBreakpoints;for(wp in obj){if(Object.prototype.hasOwnProperty.call(obj,wp)){if(obj[wp]<=width){ret=wp}else{break}}}return ret},configGet:function(param){"use strict";if(param===undefined){return this.pageConfig}if(Object.prototype.hasOwnProperty.call(this.pageConfig,param)){return this.pageConfig[param]}return false},xmlChildNodeText:function(xml,elem){"use strict";return xml.children(elem).text()},warn:function(msg){if(typeof console!=="undefined"&&console.warn){console.warn(msg)}},error:function(msg){if(typeof console!=="undefined"&&console.error){console.error(msg)}},die:function(msg){throw new Error(msg)}};var Helpers={domainDatas:[{name:"Origo",url:"origo.hu",class:"origo",secure:true},{name:"Life",url:"life.hu",class:"life",secure:true},{name:"She.hu",url:"she.life.hu",class:"she",secure:true},{name:"Reblog",url:"reblog.hu",class:"reblog",secure:true},{name:"Gphirek",url:"gphirek.origo.hu",class:"gphirek",secure:true},{name:"Travelo",url:"travelo.hu",class:"travelo",secure:true}],resizeWhiteList:["facebook.com","twitter.com","instagram.com"],resizeWideScreen:["tv2play.hu"],resizeFrames(item){const source=item.getAttribute("src")||"";if(this.resizeWhiteList.some(wL=>source.indexOf(wL)>-1))return;if(this.resizeWideScreen.some(wS=>source.indexOf(wS)>-1)){$(item).closest(".cikk-obj").addClass("resized-obj");item.style.aspectRatio="16 / 9";return}if(source.indexOf("iframely.net")>-1){$(item).closest(".cikk-obj").addClass("resized-obj");const parent=item.parentElement;const bottom=parent?.style.paddingBottom.replace("%","")||"56.25";parent?.removeAttribute("style");parent?.parentElement?.removeAttribute("style");item.setAttribute("style","");item.style.aspectRatio=`100 / ${bottom}`;return}const width=(item.getAttribute("width")||item.style.width.replace("px","")).trim();const height=(item.getAttribute("height")||item.style.height.replace("px","")).trim();if(width.indexOf("%")>-1||height.indexOf("%")>-1){return}$(item).closest(".cikk-obj").addClass("resized-obj");item.style.aspectRatio=`${width} / ${height}`},hashForImageserver:function(url){if(url.indexOf("cdn.nwmgroups.hu")!==-1||typeof sha1!=="function"){return url}var cleanUrl=url.replace(/http(s)?:\/\//,"").replace("//","/"),cleanUrlShort=cleanUrl.substr(0,cleanUrl.lastIndexOf("/")),hasParams=cleanUrl.indexOf("?")!==-1?true:false,cleanUrlParams=hasParams?encodeURIComponent(cleanUrl.substr(cleanUrl.indexOf("?"))):"",cleanUrlReplaced=hasParams?cleanUrl.substr(0,cleanUrl.indexOf("?"))+cleanUrlParams:cleanUrl,hash=sha1("imgservice-"+cleanUrlShort+"/");return"https://imgsrv.origos.hu/"+hash+"/"+cleanUrlReplaced},render:function(tpl,view,partials){let p={};if(typeof partials!=="undefined"){for(const prop in partials){if(Object.prototype.hasOwnProperty.call(partials,prop)){p[prop]=$(partials[prop]).html()}}}return Mustache.render(tpl,view,p)},buildPartials:function(partials){if(typeof partials==="undefined")return undefined;let p={};for(const partial in partials){if(Object.hasOwnProperty.call(partials,partial)){const partialTpl=document.querySelector(partials[partial]);if(partialTpl===null)continue;p[partial]=partialTpl.innerHTML}}return p},insertMustache:function(options){const target=typeof options.target!=="undefined"?document.querySelector(options.target):null;const tplType=options.tplType||"selector";const tpl=tplType==="selector"?document.querySelector(options.tpl)?.innerHTML||"":options.tpl;const mode=options.mode||"append";if(tpl==="")return;const rendered=Mustache.render(tpl,options.view,this.buildPartials(options.partials));if(mode==="getStr"){return rendered}const fragment=document.createRange().createContextualFragment(rendered);if(mode==="getFragment"){return fragment}if(target===null)return;switch(mode){case"before":target.before(fragment);break;case"append":target.append(fragment);break;case"after":target.after(fragment);break;default:break}},getRandomItemsFromArray:function(array,items){const randomArray=[];for(let i=0;i<items;i++){let randomItem=Math.floor(Math.random()*array.length);randomArray.push(array[randomItem]);array.splice(randomItem,1)}return randomArray},normalizeTags:function(array){return array.map(function(item){return item.toLowerCase()})},isTagValid:function(tag){if(typeof window.exclusionTags==="undefined"){return false}return Utils.arrayContains(this.normalizeTags(window.exclusionTags),tag)}};
//# sourceMappingURL=utils.min.js.map