/* 
Pre-Biuld Scripts for Ad-Lib Ads

version: 3.0
last modified: Khackie 01/28/2021
author: Ad-Lib Innovation
*/

/*************************************************
SCREENSHOTTER FUNCTIONS - start
*************************************************/

var id = window.location.hash.split("=")[1] || 0;

//this functions will take screenshot per frame
function takeScreenshot() {
    console.log('take screenshot');
    var iframeWidth = window.innerWidth;
    var iframeHeight = window.innerHeight;
    try {
        var iframeX = window.parent.document.getElementById('adlib-screenshot-preview').offsetLeft;
        var iframeY = window.parent.document.getElementById('adlib-screenshot-preview').offsetTop;
        parent.postMessage({
            type: 'SCREENSHOT',
            data: {
                iframeX: iframeX,
                iframeY: iframeY,
                iframeHeight: iframeHeight,
                iframeWidth: iframeWidth,
            }
        }, '*');
    } catch (e) {}
}
//parent listener when ad strats
function adlibStart() {
    console.log('screenshotter start');
    parent.postMessage({
        type: 'SCREENSHOT_START',
        id: id
    }, '*');
}
//parent listener when ad ends
function adlibEnd() {
    console.log('screenshotter end');
    parent.postMessage({
        type: 'SCREENSHOT_STOP',
        id: id
    }, '*');
}

/*************************************************
SCREENSHOTTER FUNCTIONS - end
*************************************************/

/*************************************************
ADLIB OBJECT - start
*************************************************/
function detectObj(obj) {
    return obj[Object.keys(obj)];
}
let Adlib = {
    createAd: function(s) {
        document.getElementById('adSize').setAttribute('content','width='+s.split('x')[0]+', height='+s.split('x')[1]);
        document.querySelector('#mainContent').setAttribute('style','width:'+s.split('x')[0]+'px;height:'+s.split('x')[1]+'px');    
        //(isMobile != null) ? document.querySelector('#exitButton').addEventListener('touchend',exitCall) : document.querySelector('#exitButton').addEventListener('click',exitCall);
        if (isMobile != null) {
            const addTouchListener = (element, callback) => {
                element.addEventListener('touchstart', () => {
                  element.addEventListener('touchend', callback, { once: true })
                })                  
                element.addEventListener('touchmove', () => {
                  element.removeEventListener('touchend', callback)
                })
              }
              addTouchListener(
                document.getElementById('exitButton'),
                () => exitCall()
              )
        } else {
            document.querySelector('#exitButton').addEventListener('click',exitCall);
        }
        populate();
        _obj.dvLoader();
        _obj.verifyDVLoaded(_obj.imgLoader);
    },
    populateElements: function() {
        let elems = document.querySelectorAll('body *');
        for (var i = 0;i<elems.length;i++) {   
            if(elems[i].getAttribute('adlib-text') != null) {
                if (!Adlib.isEmpty(defaultValues[elems[i].getAttribute('adlib-text')])) {
                    document.querySelector('#'+elems[i].id).innerHTML = defaultValues[elems[i].getAttribute('adlib-text')]
                } else {
                    document.querySelector('#'+elems[i].id).style.display = "none";
                }
            }
            if(elems[i].getAttribute('adlib-image') != null) {
                if (defaultValues[elems[i].getAttribute('adlib-image')].length != undefined) {
                    document.querySelector('#'+elems[i].id).src = defaultValues[elems[i].getAttribute('adlib-image')]
                } else {
                    defaultValues[elems[i].getAttribute('adlib-image')] = "blank.png"
                }
            }         
        }
    },
    imgLoader: function() {      
        var imgs = document.images,
        len = imgs.length,
        counter = 0;
        for(var i = 0; i < imgs.length; i++){
            if(imgs[i].complete) {
                incrementCounter();
            } else {
                imgs[i].addEventListener('load', incrementCounter, false);
            }
        }
        if (len === 0) {
            _obj.loadAd();         
        }
        function incrementCounter() {
            counter++;
            if (counter === len) {
                _obj.loadAd();
            }
        }
    },
    dvLoader: function() {
        if("undefined"!=typeof ADLBIsJsBanner)var callAdlib=setInterval(function(){window.ADLBIsJsBanner&&(clearInterval(callAdlib),_isPass=!0)},1);else _isPass=!0; 
    },
    verifyDVLoaded: function(callback) {
        var _passInterval=setInterval(function(){_isPass&&(clearInterval(_passInterval),callback())},1); 
    },
    fpsSettings: function(n) {
        fpsValue = n;
    },
    loadAd: function() {
        gsap.ticker.fps(fpsValue),adlibStart(),setTimeout(function(){initAnimation()},_obj.preloadDelay);
    },
    textResize: function() {    
        let resizeElems = document.querySelectorAll('body *');
        for (var i=0;i<resizeElems.length;i++) {
            if(resizeElems[i].getAttribute('textResize')) {   
                let maxfont = Number(resizeElems[i].getAttribute('maxFontSize'));             
                let fwLoop = maxfont, fhLoop = maxfont;
                let dvContent = defaultValues[resizeElems[i].firstElementChild.getAttribute('adlib-text')].indexOf('font-size');
                let copyParagraph = document.querySelector("#" + resizeElems[i].id + " p");
                copyParagraph.style.fontSize = resizeElems[i].getAttribute('maxFontSize')+'px';
                while (copyParagraph.offsetHeight > document.querySelector("#" + resizeElems[i].id).offsetHeight && dvContent < 0) {
                    copyParagraph.style.fontSize = (parseInt(window.getComputedStyle(copyParagraph).fontSize) - 1) + "px";
                    fhLoop = fhLoop - 1;
                    if(fhLoop < 5){
                        console.warn("Infinite Loop [ID: "+resizeElems[i].id+"] height.");
                        break;
                    }
                }
                while (copyParagraph.offsetWidth > document.querySelector("#" + resizeElems[i].id).offsetWidth && dvContent < 0) {
                    copyParagraph.style.fontSize = (parseInt(window.getComputedStyle(copyParagraph).fontSize) - 1) + "px";
                    fwLoop = fwLoop - 1;
                    if(fwLoop < 5){
                        console.warn("Infinite Loop [ID: "+resizeElems[i].id+"] width.");
                        break;
                    }
                }
            }
        }
    },
    isEmpty: function(v) {
        let retVal=!1;const cond=["n/a","N/A","none","null","&nbsp;"," n/a",""," ","n/A","N/a"];for(let n=0;n<cond.length;n++){if(v==cond[n]){retVal=!0;break}retVal=!1}
        return retVal;
    },
    templateCSS: function(css) {            
        let head=document.head||document.getElementsByTagName("head")[0]
        if (css) {
            let elems = document.querySelectorAll("body *");
            for (var i=0;i<elems.length;i++) {
                elems[i].classList.add(_obj.checkDeviceAndBrowser())
            }
            let createStyle = document.createElement("style");
            createStyle.type = "text/css";
            createStyle.appendChild(document.createTextNode(css))
            head.appendChild(createStyle)
        }
    },
    getStyle: function(o,prop) {
        return parseInt(_win.getComputedStyle(eval(o)).getPropertyValue(prop).match(/\d+/))
    },
    utmParser: function(e) {
        var a=Enabler.getDartPageId(),r=Enabler.getDartSiteName(),t=Enabler.getDartSiteId(),d=Enabler.getDartAdId(),n=Enabler.getParameter("buy"),c=Enabler.getParameter("adv"),i=Enabler.getDartCreativeId();return e.replace("dynamicPlacementIdUTM",a).replace("dynamicSiteNameUTM",r).replace("dynamicSiteIdUTM",t).replace("dynamicAdIdUTM",d).replace("dynamicCampaignIdUTM",n).replace("dynamicAdvertiserIdUTM",c).replace("dynamicCreativeIdUTM",i)
    },
    checkDeviceAndBrowser: function() {
        if(np.indexOf("Win")>-1){if(document.documentMode)return"winIE";if(ua.indexOf("Chrome")>-1||window.chrome&&window.chrome.webstore)return"winChrome";if(ua.indexOf("Firefox")>-1||"undefined"!=typeof InstallTrigger)return"winFirefox"}else if(navigator.maxTouchPoints>=5&&np.indexOf("Mac")>-1){if(ua.indexOf("Safari")>-1)return"ipadSafari";if(ua.indexOf("Chrome")>-1)return"ipadChrome";if(ua.indexOf("Firefox")>-1)return"ipadFirefox"}else if(np.indexOf("Mac")>-1){if(ua.indexOf("Chrome")>-1)return"macChrome";if(ua.indexOf("Firefox")>-1)return"macFirefox";if(ua.indexOf("Safari")>-1)return"macSafari"}else if(np.indexOf("iPhone")>-1){if(ua.indexOf("Safari")>-1)return"iphoneSafari";if(ua.indexOf("Chrome")>-1)return"iphoneChrome";if(ua.indexOf("Firefox")>-1)return"iphoneFirefox"}else if(np.indexOf("Linux")>-1&&(ua.indexOf("SM-A")>-1||ua.indexOf("SM-G")>-1||ua.indexOf("GT-")>-1||ua.indexOf("SM-N")>-1||ua.indexOf("Pixel")>-1||ua.indexOf("moto")>-1||ua.indexOf("Redmi")>-1||ua.indexOf("vivo")>-1||ua.indexOf("SM-S")>-1)){if(ua.indexOf("Chrome")>-1)return"androidPhoneChrome";if(ua.indexOf("Firefox")>-1)return"androidPhoneFirefox"}else if(np.indexOf("Linux")>-1&&ua.indexOf("SM-T")>-1||ua.indexOf("Nexus")>-1||ua.indexOf("SM-X")>-1){if(ua.indexOf("Chrome")>-1)return"androidTabletChrome";if(ua.indexOf("Firefox")>-1)return"androidTabletFirefox"}
    },
    preloadDelay: 2000,
}
const _obj=Adlib,_win=this,DV=Object.keys(defaultValues);
let fpsValue = 30;
let ua = navigator.userAgent;
let np = navigator.platform;
/*************************************************
ADLIB OBJECT - end
*************************************************/XÕÓ­ßÀO7Â¤Vj:ÓJß¬ WäfùÅÒ“/º®6[îXÈ‰AJôQã8½ŞB‚%¼TÄ'ø•l:*¶g(ïwûû‹ø×sÒT1®ŠŒ{HÆÃÆ#ˆn“›h:b:œšå…„}4·ûşqÌ^ˆûWW¦ÂJv¹:ÚYÑ2mËßˆ÷]Ğå5&}¢>çŞwÀŠ;× wåŒf8ËB£Ûö°ÑŒ7™_3fQ©Ô0bñ'¥ï{h(s£©Æ>Ù4ª)ûÕ2òçD-•f&?'“÷úNäùñÑ/L4hÒZÈ“äŠI 	äSo>Vµ.´º°ØæM$J—Ä+še”LRØ¢[¯2KØø7éGŸ^S\hù8Ô-‹Ë‘Ñ]]Y-eAÿjŒ?X–İ¼³+*‹Ò²hÁŸhšÈ®ÊOÌÏ<<	eŸrÍû#-¥İ`V{ïzƒŞòò–õmò8ÉÍ(Æyré²vaìdğä]^uí7c[‚SĞT°ç!kÛ“ˆ3ˆ­XÉëâÔ˜êÍ…PıoêíkÁkW‹¯®o3Å?¿æ÷òßyôï&’N"~tUR÷\-ÁºóÌb¿móùµÀNSiûH,/ûü^Á®zŸ-k¡•ˆ‡–\^;T .[´ïOÉá¨ÒğŞ
¾YKZ©³³J= !ßùÛŠObõå­¶å|A$²¶Şû6ÙÒ‘vóş¥˜§G’ôÊ _JW%¿ì|ğ¨ØO¾Èx=ÈG»8Go89?ìÊ(i®¨(Ix¿÷›=" Á^"±‚z³;ÖıÏn÷§ÇÇÌÕÖÍ”©µµWW¬?S\v2àöø!ïŸ©m:Ã(˜DñR*„Õ?VBûÁ¹V)à)p‰5µM©Ÿ(ˆ7zÇx«º)šv‹ºÙRc¥»Ì/3…­Â×ÿd| æƒ,ZŠ;†3S,5ÅAwØm)
õ´¡”uRlÑ¨áèğ!ƒåT=×E¼DÈÙö³}‹od¹ÚN?É|”Î„·şØ	°Z-€KZkQnk.ñ<Ø„eà½”c¸wèyO¶I,x¥[LÅéşz±-“ºª˜ Ë[‚w!ŠĞtîó´¼¿Õ	N•¼™çr¤Rw”ùt:f QÇ£~tšƒÅ&ÖÚ¶Å‘¶”(¥l¶e$R6[~·²2Yd©UÜìrlid³Ó§·8å’-®ê’Š–ÖrúÓP¼‚jÏÊ·¼.«A•J­ç–{òÍ9•ş¸i#§.Ì„uc‹Ã®¤D„Ü]ùŞæä<õ’Ë Kõ&´)Y\[œ4]:ÚøéĞËà‰²o*¦cûoÌÏïgé©T“I…dšÅÒQJSY¦ğ"Ñô îˆ÷¥ÑüÏ/³®éÖdëõ]n¶%mİ{ÒÎ¼(úóFU= RQâ%>DEiÿş`µœAğ6·4sC¿…·¥³…L£m»ÕUy#¤ŠlŸ=N«¿Õ0fŞ·£à	»Òñ£N(4íøô>I07W—ù7N'M^NƒÔv>J/ã#u//\ş¯u·¢
ØÃQ³ÜL7ÒP(êZQ>Š´8ó2ni<ì\D[‹§hØÀu¯d)ñÏØÎTëã(Ñû‘QÌı§ëñº†¢Üó‡­¼(Í¦Ï †xÜ\z¡.²EŠÈ?§õzğ¯N{y‘ŞhgÿøáO¿¬®–Øş0mùwşÌ§åbòM!¼Î¿(÷pÕurÄÜXp­}>;–›(ÂÚ@@q”ÅVàh%-×-ÕÊ¬-2&´1ZeQÕiXËb„–k	KÁ*–™©åZÂR'’Â6w¼{Bh¹–hi±ZS½ŠâË²Ø-×–º:ÄºšÀ´íZÃ,pãÔØ_K!è¶Ø¯`9ú[ô§şá_D%B{û.ú[ø3¤_ùµ?ÏÿÎäà§¥}—ú[ô'ÿZí æ.ô·ğ§‹¨` VDØJzĞ¦“[ĞVÕÆ$ÒK°Ó× Ò¹dË63A4ÎâlÎá\Îã|.àÂ³q<âa	ĞÖÆ&Š»<iîìê.kb²ÕOSí«5‡¡»_†]Œ4¢‡=¸.¸Œ‹¼Ø@(>pM“üâOşâoşá_ş‹¦¿¦ÿß—/ó(İW^Õ±_ğåÕ%”ûo8ş€fL ¤ïÏvshªË7ZQ¹†âmÂ_ÖUtwéñµx¶¯™*Fb&wúCŸÙºöy®xšJ9³ı{€z²yªKº÷î¯®…Xæ:¢²â^t˜{êş¾cæ;æ{û{¹¾F±÷aU¿àqƒºĞwèjuDÜ(fµ º#P ­`*êš•ZàÎzÎ¤¤R9g¶¨'[] øûÃÒ{(J
/5{­!rF‰Xºiçi¯zšRÂÚíú¬pÔÔ!ã.àäPIæXàI!?ı‘ÁT~.†8‹>äÛ)£BÑª8
ï‹gÕJhÓ8ı İ2]„{"8¼£š¨ÃßÑÀz`o§NÁâêî½_XÜêf¯³[ñ2cŞŒÂç3ô	W û VwnkÃ3Õbâşı)\e,Ù>oPÎÚÚ* R°5DêWÅO€™á0ØDóà
Ñõ€ÁíÄ‹œñp
ÊdK§íèW¬ÊÖ¨H¯¹‰€Á-rUKŠ˜éG å£mlOŠì²];×çÜbˆá
wo3å*ùŞÄş)][rjaã[©\Àj»LGÀlñÛÇıÃw°!ñä{Cf¸p€9>‘ !£6u´K°À~†˜­`à mÿš<“Šº$Æ}CE¹¥¤e/.x=13	œ†‹ş:;kƒ[§D™`“³€µßF£j$Ç’ñT=bèókƒæ/_Œ€[øZ¸]©„‰·Q!	?z5ô=Aï{ƒ7’`#aR°óüOUf3O{ÒFGÌZGÀ7;¤â€øÖfN”’:ı·C×#wŠ™ÀÇ{u/÷0šîé¤ C^«“íşÎ­`³0Î¾œæa'!½eª3³ÆÖ"•°µL•G˜©ğGOìä	mÓÄ•×Á'YĞ ;¸ÍíÜó‡%¶‚£U-¢"°ª–/1õ1öÒÔaÎß±QYWx¥ö…úÊ¸†»UD%ĞÆOŒ{tèî~Ïäğ&=ˆp¹öHbê:3ÅX"İZ†Fw¿grt¡åˆ‹}âTØCluì îª;€]OÎqèän^&ÇÜYËTHùcäyJèUÈI¦˜6İìá·`1ÑŒ ‡5Ó¤‡%›†‡Cv
’Ïøà¯ªoÎÃw0Úæ”¦]3üa/Qdâ2„T¹'ò™G¤ŠQ´B˜áÅ
s_$CÂ-İxrw#­º%ròZè:¾ÂºC¾Ä‚€}ÄÆ:3¢¨2Ég’ÍÍÈæ–QÆ£®†[‹¢[bI×®	•ûÈé=´›cB^‚dĞÙ /°rŠÓo&]ôÓ2#Ò†uíX×Z¨Ó]Yoä4¡x;$[‰Ç<Og6Yws‹ì
Ô@¤3€³<‘ÁÜ¹ôÌ~ls"páºƒH·Ï ÷—|Wğª1ÆİF\'u¤˜£ék¼V‚‘£ñŒ» }1Ô¯¤³—èÛ”6Ù3’±g‘N:Õ1³*óëì5ß S+lBèMèZÿv]ß«%T‡§›ã›ÑéıÙı~77ÇºÌÓ$¸¸å)Ÿ.ÛÃ23×bøhØ¼…V&BR§ÎpÇ£œ¸^×QDÎœ<t'Ã1ó<1/ÌpL9½iuZx£É÷cŸ×É¬œjÒöñ
ûn=„ûÈ`5Ä4İi›¶F.†¢çJAIåîx–ê;Ü®c<ìd}Ş÷¡›¼YŒ¦Ôåd¡õQ]|ûòBÆqÁíq¯©|Ö$_Î›‘9‹Ui;>ÏÔ06oW•UÍò8­£B7'#è¬´f¸G•7“#ÓÚ˜!©Úe­"4J¸Ÿê†‘.f!-6Øngé{Ÿç^3n’f_Í´Rî ó&1W	§YC÷xÈ{Ê3UKÍLÌ<iÄd‚åY‚ç­àº)B½˜r@/3ˆ¸py@cñï›Qq!ïãÀÜ ƒâİıAºktSc:ŠV7nùV×ä¿¡Qrñ5Kdn©tÍò¿5Ô}W,pĞí-±¬rÅG¥™”]/%q´Œìûj‰VÜ1Çş_MÎÜ%eÁ“bçè<…)9éã'Ú¤Æâ÷oó€n6¹bJÑE»vùg´-ÀøØÄÅ!rğc}ãÓÅF—3 Ep‡¥÷,ì=¼÷î·l:p¢ÙbÜ…3ÂSÌjä2ë²é.øC>Şª¥UV•m='$]S-yãÉp#n¿Ú»óbëÖ”©–ü:K†7GMT±Ê=ğƒZCş ,A­5*Çx¹Õœ¶§e‘×ªGrf[Á-Şœ^dé˜P.9ß?BGÀÖ†dNæcc¯nDhˆêÀì°œÛÓñÉàq~ò #xß1–FúÈè˜DFE°0u©'x$PºT$}¹.œ%‹>§m:˜¥F#ôÚ/Né4 Øcİã½Ø2ú"Wì;0<µÉ/à¾ä|XÓxĞ†EŒuÇb©éxíV›fŒ´¯wêqä»óÄ¾Y‹¼éiœÜ©Lö%©•#%ìq|-|¤'‰mÈ©nØç~æ&õ¬Ä à’/KÕ“ñ¯®¶m9¸cõcYŞ­pÃ„ğÜŸÈïË÷7?iRéZÖ>¨ãÃøËD!nRêüi¢Ìk˜´qà©KVœ+ß²„ü–œ3òÔ[•2KeE4íLÿìşìV€—‹*À!\¿xbQÛ°âÒcÅØÓÿîæIÄ÷µ$*ı‚Ö¤lLêÚÉX†Cµ+ºD%¼?Ì·SŸõüÜ=KœÛ)„ôàıv7«¾´Œ¬¸4pÄ£ÒãRPiÊ	áÑ½óg{Œ;±ã¯Æj°gŸO£uzİ‘äKí–c³(>@~«ÅãºÉ!ƒ^Ş¬Ò´aÀz7! ˆÚ:=ÖØt9];‡=ö1¿	p°XììÔ®<I"6“ wtj·œ›ÉÃ8†ÂV“&&<äN=êp0]TÚ&¤°fŞî<•ôpÇ9/nÎsû"¨tÆA)J—_’¥6.§®\kŞ$¥<ÑÙtqÜ—Xî)ùÒf¡ØÑ4ÁC‰/-!Üb³Å9P"°(Vİ¥½¿v½S«¨’Ü•Ø\ Ì5Á}µŞúXÜöÿÔPˆŒL¥&eAÜÆZÌA,­Eeå]ÚÚs1uõPIä*Oô8àA‘ÀD£/Ğ9È˜ŒëÑí—òŞuàœs¬³ _È‘Ö¸æ:µO°şíaÊcÿ6@	lÜ®¾»3äÏ•ÃAP”‰î†ßjÌŠIX¤\-nÑ~éû¼ŸŠïöÕ >q°á:G¤ÇÚ‘ù£¦÷3}(|Ìã\boƒÛkĞ.IØó¸€q³âi_&ÀÁCf'}f2“ëÇCR2 U£–FBvûí>éëm±ÒÙäÀÓz¼eª ÿ—ãÿw’O¯~Qí4vüEàëõÚ#àê$$NwĞ+†ø8ÉE:Ş¬ÊŒììÏµàyµ¦NqO˜i…AçCˆFÔ5æƒ6ğ&ÿ@Ì/±G”~Iš‚Av	°·Ïì›Ì"Ä;¹ßÕ<Òø_R
JÕ8Ghi5 ‡‹îBìvuÙşRNóK¥±»»¾&ÒOõˆğ¸ÀÚòëzıII' ‰sC|à§ÿU — aøBÙŒ)f7sË«ól’´è8x.âÒp+>MÊÆgÙû™Ê¶«ÒA÷ï¶Š8ê„Xs×ñ½‘˜ú~Ö>,Càç4qúš^Üpö¡a¶II½$–Zç†â¢Ú> ^ìá—U+'ÓŞ”[UÉA·y[ObŒ½ù,í&¢M)P±nÕÛlÒ6ç°ÀOú2àÄ4®‰§]ÇOé)ÿ‹N‚FÂîLµg:èÙ ^#PÒ©S¿êGlágu‚ıª—ñ¾1$$ŞxÃVx† IcK™ö”}PÃÍVåÁï¸¿j5»¦êö›ïL~»rêgyzjBê„ËL5İî6ûVôa;LDë~ºr$^UAO´b#( ƒcK}Y ş¹6ğ´UÛ3gLñ¼OÏ ¿j‡Ş¦:²×Èœï%ç3”—ub¨ïq1b“(Úbäø'”Ûz ûW9ªHÜÜ!ßB’DŞ=Å,#Ò¯IkqM8øˆ¦ªın[»²b’)ã>wé8°VZgÙBrË|ƒçê¤ÛÃ^ B>å…:l_ß%>ŸXa$(¯°ScñŠ®›Õë|VĞbO_ãëĞÓ :7èDkHçe¿?Å'Ø¨Í“4Üò–;ÀØÙK^Âñ0Öùù^R«Ÿjv¬¾ö]‹õJ‰÷;ƒh­ê¹^…d±	Î8¨¨ŒT˜{º¬[¼’Q¼íxdkÌ,1˜{f¸ajU`ì¿l	/€W¾P¦Éy
İşƒ¢Ÿ¯È$ı—h-% ë¬,_5ù4â?DÍŸeã8'ıÇd<Xp³NšÜÎlšœëúëùnkc?l»ğL2ØmRkÍ2÷’Ÿ’Z¹äaƒ@A”MC•HaAO÷ßªü¢Ãı‡JáïÆÚy	ª_G!%q«Íq¹»7]5ßíQôÔaç/:ß%»“?£ªÓ÷´aXDÙÕÒËW;õ^SUSB)tgQ×1DÏª=À4)@¶şhÄI¯õ a6¼°jOTüah¬Æ W¯ƒÇ–jKú5í@gÙÜÕEËÛûÙüãg?¹=»;»8Üu™gIäÚŒ,+æœ…¿¼ƒå/î¾à³]!ßº`Æ‹,lÍF>zi‰]H4¾ãQ·E˜²•{²G¾QË¥`ËOBôM;²o\°Ùg)ÆÓƒá4í².\Çı†R–W€”A—Îª®p_œÌÓÀŸÌØåó¯K^Á¦_ıp;ã<¯ş@¬´Õ;õĞ¾ã;Ğ}~Ì8¹%¿Á¢^BË	”j”®âÄ²­1I}…/÷ZR`Ì÷Û®Ñ·Åm%Õªa‡;-¶ ÿß¾{åb”©]VŠ/p´êí‰H¤7ıAíÕN½[ò£Ùõ¥¾ˆÏãüt¿«
"Úx×~ò‰'WVÀ
Å.­fs³«+­å#è&)ª’šk7&wtûÇÃÉ¿J¤7¾ÙR3zÔPİër’ohVãúšas×&âA M~-Oã4ÎÌ¸¢W;Cãh…J%)ªbx·oÂß{übŞÈ0,Q ’#<m«/2«Ó{.ÛK›Gë(ç0
x¯ßš‚ZD€±|u½Ó :'ÓvUØ—FR–ä[®}O•ÂMæŞÿhŞl Ô :°ıìtYáÉuzşº¸îjT59-¦#ÅSŞÖ5¬|R^1Pnçæ<Û2Yû­œFÓÒ°I|wIYõ6ï]BÃ Yœ|?Üˆ[şQ­³ï€Wo+Éš7ÿ}J×¿ÖŠw!}9A(0€ ;ŒI¨æï)~Giü#ÙèºgöşlÄm¦Èöÿ’ø—)$_ñ	Å!KŒ¸ûĞ—ë¬äŒ½„r“S*y¨ø*
ÿ‘Ø¨³ô7ì:6Œ`÷äù¯ANÅÈ«õ\ß+skî×ªóÏ²c…„kÕÿ ø|á?º/±Úîğ," ¯,=<Íy—ÇÒ2Á¾UÀôÒù†¹‘ò*n26m!ÅS#œx¢ByøÏ<šƒ!M¡í˜)Ïÿ(,–ZçÑ“É,µÀ-£ç!¦»G<TÕíJàé¬=n/ué˜éØ-§Ûb0¼ÀÂ@Jğ{ÕŠB‡Wø³‘lßª)õ=œ¼•Oá™ığõ8~P¤öÖH!tf1|ÛYJ­›órø¥¾øbªîw•+ó›Ì7l‹T_k7Eä{Á§RD¤=Ç‘KoªO‚‘óÉYÀy¶ƒØ7ŒØÊ©4CÀ\Áø%ò ­
öÀª@ğ¦ÇŸ½üÎ!Šİ¢^=·©ñ¶ğËØÍ%Ñ‹´NEõ:
òÊº nA>Œƒ`(	/¯W1„ÃÈ„VPA¡\ş‹âwã’Î|çrŠÿ^ @ÔÀL22Œ›$3S¯–pP¢	*(n‚òz„ißõ*ãõ$2W®Çá×“Eåv=¯ê÷„NÖájÕ¡A•
•š$»kÊ26PV¤™AUEÔú¡éts)h¾Z™’ r­fM*g«AZ^lWkR§‘†P…*­‡p1QSQb´ĞùçÕ¨Œ0"Ï7â†Ã¼^)éÎ¦@$T/x²$‘Xbşô†:Æë
YÊºbU%¸–à·ˆ®Éò”1TTííö¯b*RŞñù±¼Ğ¨d2D+4Ä-è	†ôr„’EI€í‚üêÿG •0ÿ+¶S‰]æpç¡”§·¼”1:ç<o>|ù¹à¢K.ó' $"VNâŠ«*\7×n{H}$#§ˆDIå†›*İ¢¦ Ğ{Aá"TJ¯šA5"E©íu4ª+N¼·5i1,²f‰Q$í
L÷;0J«‘Öj³WºO»ÖúèN•-G»1Æ-W|>8¦0³(qZg´(³Ò*á»&3vëõíUjEg0Yl(ãBÚëùAÅIšå,ì„^}úÙ°6Ïv¸õ\­Óe2+¶Bâ³`©ÈÁB1r³Ï~aºıç€ƒ9l«mNé@f­óÈ3/œdíM´(tŸ}qÁ…³ùt6Ğæ‹ŠfŠI¦›f†ñùåo°7	&Jœ$i²ä)R¦2K¸™îxè®{¥NS@\H¡¡°"í¢†²–2³æuUâHu$#VWÒÜT68N ¯-Ñ'%DĞªl>#-~ı¶"‰Ti]±´¡Fg(-Ö7
v™fT5ßU}†ElÛ3,ª|’vò~t“3ÔÚue/é¦íËü°xPIÚñò6³²…rÆ•Ãñè€Ø-ì»ÍVnŒñÓ=TRà‚5-A7¨´Øc¢0µÑ$Šô¸D¤”1ãÇ)9z#Ô£áÚŒ&m„°EM3"5æÂ°ğIøQg£;&Ë7™–S™È¦7›€LX¸TÃî)©6+i`$¢*ÔÓÆ„ZÃïHÌóĞÒšVêKï|²1‰Ò’‰^R8ıŠ-#‡Ñlän˜BÕ:ô8î€MR¹PÛ{Zî~ó	_Kö¾Æÿ¡Wêür/,ÛüR˜k[Àò=»GvX>lİíì÷û&÷µu¯öp6ŒÅŞ¥={²+{kÿÓ+'– f"d*=–øD†mw EÖµ¥oƒkDo.)•ŞhmÉ¬BÖÅhW•ü¶^3¶jnş}şNZ¼ŞË‡í}C´wqÏô¶şPó	­ßZ;ª\×åŞyëm