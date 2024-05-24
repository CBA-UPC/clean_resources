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
*************************************************/X�ӭ���O7¤Vj:�J߬�W�f��ғ/��6[�XȉAJ�Q�8��B�%�T�'��l:*�g(�w�����s�T1���{H���#�n��h:b:����}4���q�^���WW��Jv�:�Y�2m�߈�]��5&}�>��w��;� w��f8�B����ь7�_3fQ��0b�'��{h(s���>�4�)�՝2��D-�f&?'���N����/L4h�Zȓ䊏I�	�So>V�.�����M$J��+�e�LRآ[�2K��7�G�^S\h�8�-����]]Y-eA�j�?X�ݼ�+*�Ҳh��h�Ȯ�O��<<�	e�r͐�#-���`V{�z�����m�8��(�yr�va�d��]^u�7c[�S�T��!kۓ�3��X���Ԙ���P�o��k�kW���o3�?�����y��&�N"~tUR�\-����b�m����NSi�H,/��^���z�-k�����\^;T .[��O������
�YKZ���J= !���ۊOb����|A$����6�ґv�����G��� _JW%��|��O��x=�G�8Go89?��(i��(Ix���=" �^"��z�;���n�������������WW�?S\v2���!m:�(�D�R�*��?VB���V)�)p�5�M��(��7zǎx��)�v���Rc���/3�����d| �,Z�;�3S,5�Aw�m)
�����uRl�����!��T=�E�D����}�od��N?�|������	�Z-�KZkQnk.�<؄e��c�w�yO�I,x�[L���z�-���� �[�w!��t�󴼿��	N����r�Rw��t:f Qǣ~t���&�ڶ����(�l�e$R6[~��2Yd�U��rlid�ӧ�8�-�ꒊ��r��P��j�ʷ�.�A�J��{��9���i#�.̐�uc�î�D��]����<��� K�&�)Y\[�4]:��������o*�c�o���g�T�I�d���QJS�Y���"�� ��������/����d��]n�%m�{�μ(��FU= RQ�%>DEi��`��A�6�4sC������L�m��Uy#��l�=N���0f�����	����N(4���>I�07W���7N'M^N��v>J/�#u//\��u��
��Q��L�7�P(�ZQ>��8�2ni<�\D[��h؝�u�d)�����T��(����Q̞�������󇭼(ͦ� �x�\z�.�E��?��z��N{y��hg���O������0m�w����b�M!�ο(�p�ur��Xp�}>;��(��@@q��V�h%-�-�ʬ-2&�1ZeQ�iX�b��k	K�*����Z�R'��6w��{Bh��hi�ZS���˲�-���:ĺ����Z�,p���_K!�د`9�[����_D%B{�.�[�3�_��?������}���[�'�Z� �.�����`�VD�JzЦ�[�V��$��K��� ��d�63A4��l��\��|.�³q<�a	���&��<i���.kb��OS�5���_�]�4��=��.�����@(>pM���O��o��_������ߗ/�(�W^ձ_���%��o8���fL ���vsh��7ZQ���m�_�U�tw���x���*Fb&w�C�ٺ�y�x�J9��{�z�y�K���X�:���^�t�{���c�;�{�{��F��aU��q���w�juD�(f� �#P �`*ꚕZ��z���R9g���'[]� ����{(J
/5{�!rF�X�i�i�z�R��ڝ���p���!�.��PI�X��I!?���T~.�8�>��)�BѪ8
�g�Jh�8� �2]�{"8��������z`o�N������_X��f��[�2cތ��3�	W � Vwn�k�3�b���)\e,�>oP��ڍ* R�5D�W�O���0�D��
�����ċ��p
�dK���W��֨H�����-r�UK���G �mlO��];���b��
wo3�*����)][rja�[�\�j�LG�l�����w�!��{Cf�p�9>� !�6u�K��~���`�m��<���$�}CE���e/.x=13	����:;k�[�D�`�����F�j$ǒ�T=b��k��/_��[�Z�]����Q!	?z5�=A�{�7�`#aR���OUf3O{�FG̐ZG�7;����֐fN��:��C�#w����{u/�0��� C^����έ`�0ξ��a'!�e�3���"���L�G���GO���	m�ĕ��'YР;�����%���U-�"���/1�1���a�߱QYWx����ʸ��UD%��O�{t��~���&=�p��Hb�:3�X"�Z�Fw�grt����}�T�Clu� ��;�]O��q��n^&Ǟ�Y�TH�c�yJ�U�I���6���`�1ь��5���%���Cv
���௪o���w0�捔�]3�a/Qd�2�T�'��G���Q��B����
s_$C�-�xrw#��%r�Z�:����C�Ă�}��:3��2�g�����Qƣ��[��[bI׮	����=��cB^�d�� /�r��o&]��2#҆u�X�Z��]Yo�4�x;�$[��<Og6Yws��
�@�3��<������~ls"p���H�� ��|W�1��F\'u����k�V������� }1������۔6�3��g�N:�1�*���5� �S+lB�M�Z�v]߫%T���������~77Ǻ��$���)�.��23��b�hؼ�V&BR��p����^�QD��<t'�1��<1/�pL9�iuZx���c��ɬ�j���
�n=���`5�4�i���F.���JAI��x��;ܮc<�d}�����Y����d��Q]|��B�q����q���|�$_���9�Ui;>��06oW�U��8��B7'#謴f�G�7�#�ژ!��e�"4J����.f!-6�ng�{��^3n�f_��R� �&1W	�YC�x�{�3UK�L�<i�d��Y���)B��r@/3��py@c��Qq!���ܠ��ݞ�A�ktSc:�V7n�V�信Qr�5Kdn�t��5�}W,p��-��r�G�����]/%q����j�V܁1��_M��%e��b��<�)9��'�����o��n6�bJ�E�v�g�-�����!r�c}���F��3�Ep���,�=����l:p��b܅3�S�j�2��.�C>ު�UV�m='$]S-y��p#n�����b�֔���:K�7GMT��=��ZC��,A�5*�x�՜��e�ת�Grf�[�-��^d��P.9�?B�G���dN�cc�nDh���찜�����q~� #x�1�F���DFE�0u�'x$�P�T$}�.�%���>��m:��F#��/N�4 �c���2�"W�;0<��/��|X�xІE�u�b��x�V�f����w�q����Y���i���L�%��#%�q|-|�'�mȩn��~�&���� ��/KՓ񯮶m9�c�cYޭpÄ�ܟ����7?iR�Z�>������D!nR��i��k��q�KV�+߲����3��[�2KeE4�L����V���*�!\�xbQ۰��c������I���$*��֤lL���X�C�+�D%��?̷S����=�K��)����v7������4pģ��RPi�	�ѽ�g{�;��Ɓj�g�O�uzݑ�K�c�(>@~�����!�^ެҴa�z7! ��:=��t9];�=�1�	p�X��Ԯ<I"6� wtj�����8��V�&&<�N=�p0]T�&��fޞ�<��p�9/n��s�"�t�A)J�_���6.��\k�$�<��tqܗX�)��f���4�C�/-�!�b���9P"�(Vݥ��v�S������\ �5�}���X�����P��L�&eA��Z�A,�Ee�]��s1u�PI�*O��8�A��D�/�9Ș������u��s�� _ȑָ�:�O����a�c��6@	l܁���3�ϕ�AP�����j̊IX�\-n�~����������>q��:G��ڑ����3}(|��\bo��k�.I��q��i_&��Cf'}f2���CR2 U��FBv��>��m�������z�e��������w��O�~Q�4�v�E����#��$$Nw�+��8�E:ެʌ��ϵ�y��NqO�i�A�C�F�5�6�&�@�/�G�~I��Av	�����"�;���<��_R
J�8Ghi5 ���B�vu��R�N�K�����&�O�������z�II' �sC|��U � a��Bٌ)f7s˫�l���8x.��p+>M��g���ʶ��A�ﶊ8ꄞXs�񽑘�~�>,C��4q��^�p��a�II�$�Z���> ^��U+'�ޔ[U�A�y[Ob���,�&�M)P��n��l�6���O�2���4���]�O�)��N�F��L�g:�� ^�#PҩS��Gl�gu�����1$$�x�Vx� IcK���}P��V��︿j5������L~�r�gyzjB��L5��6�V�a;LD�~�r$^UAO�b#(��cK}Y ��6�U�3gL�O����j�ަ:��Ȝ�%�3��ub��q1b�(�b��'��z��W9�H���!�B�D�=�,#�үIkqM8������n[��b�)�>w�8�V�Zg�Br��|�����^ B>�:l_ߝ%>�Xa$(���Sc񊮛Տ�|V�bO_���Ӡ�:7�DkH�e�?�'ب͓4��;���K^��0���^R��jv���]��J��;�h��^��d��	�8���T�{��[��Q��xdk�,1�{�f�ajU`�l	�/�W�P��y
�������$��h-%��,�_5�4�?D��e�8'���d<Xp�N�ܝ�l������nkc?l��L2�mR�k�2�����Z���a�@A�MC�HaAO�ߪ�����J����y	�_G!%q���q����7]5ߎ�Q��a�/:�%��?�����aXD����W;�^SUSB)tgQ�1D��=�4)@���h�I�� a6��jOT�ah�ƠW��ǖjK�5�@g���E������g?�=�;�8�u�gI�ڌ,+������/��]!ߺ`Ƌ,l�F>zi�]H4��Q�E����{�G�Q˥`�OB�M;��o\��g)�Ӄ�4�.\���R�W��A�Ϊ�p_���������K^��_�p;�<��@��Ձ;����;�}~�8�%���^B�	�j�����Ĳ�1I}��/�ZR`��ۮѷ�m%ժa�;-� �߾{�b��]V�/p����H�7�A��N�[���������t��
"�x�~�'WV�
�.�fs��+��#�&)���k7&wt���ɿJ�7��R3z�P��r�ohV����as�&�A M~�-O�4�̸�W;C�h�J%)�bx�o��{�b��0,Q �#<�m�/2�ӏ{.�K�G�(�0
x�ߚ�ZD��|u�Ӡ:'�vUؗFR��[�}�O��M���h�l�Ԡ:���tY��uz����j�T59-�#�S��5�|R^1Pn��<�2Y���FӐҰI|wIY�6�]B� Y�|?܈[�Q���Wo+ɚ7�}J׿֊w!}9A(0� ;�I�����)~Gi�#��g��l��m�������)$_�	�!K���З�䌽�r�S*y��*
������7�:6�`����AN�ȫ�\�+sk�ת�ϲc��k����|�?�/����," �,=<�y���2��U��������*n26m!�S#��x�By��<���!M�퍘)��(,�Z�ѓ�,��-��!��G<T��J���=n/u���-��b0����@J�{ՊB�W����lߪ)��=���O����8~P���H!tf1|�YJ���r����b��w�+��7l�T_k7E�{��RD�=Ǒ�Ko�O����Y�y���7��ʩ4C�\���%� ��
���@�ǟ���!�ݢ^=��������%с���NE�:
��� nA>��`(	/�W1��ȄVPA�\���w��|�r��^ @Ԑ�L22��$3�S��pP�	*(n��z�i��*��$2W���דE�v=����N��j��A�
��$�k�26PV���AUE����ts)h�Z���r�fM*g�AZ^lWkR����P�*��p1�QSQb����ը��0"�7❆ü^)�Φ@$T/x�$�Xb��:��
YʺbU%��෈���1TT�����b*R�����Шd2D�+4�-�	��r��EI������G���0�+�S�]�p硔����1:�<o>|���K.�' $"VN⊫*\7�n{H}$#��DI军*ݢ� �{A�"TJ��A�5"E��u4�+N��5i1,�f�Q$�
L�;�0J���j�W�O����N�-G�1�-W�|>8�0�(qZg�(��*��&3v���UjEg0Yl(�Bڎ��A�I��,�^}�ٰ6�v��\��e2+�B�`���B1r��~a��瀃9l�mN�@f����3/�d�M�(t�}q����t6�拊�f�I��f����o�7	&J�$i��)R�2K���x�{�NS@�\H����"���2��uU�Hu$#VW��T68N��-�'%DЪl>#-~��"�Ti]���Fg(-�7
v�fT5�U}�El�3,�|�v�~t�3��ue/�����xPI���6���r�ƕ����-���Vn���=TR��5-A�7���c�0��$���D��1��)9z#ԣ�ڌ&m��EM3"5�°�I�Qg�;&�7��S�Ȧ7��LX�T��)�6+i`$�*��ƄZ��H���ҚV�K�|�1�Ғ�^R�8��-#��l��n�B�:�8�MR�P�{Z�~�	_K�����W��r/,��R�k[��=�GvX>l�����&��u��p6��ޥ={�+{k��+'�� f"d*=��D�mw Eֵ�o�kDo.)��hmɬB��hW���^3�jn�}�NZ��ˇ�}C�wq�����P�	��Z;�\���y�m