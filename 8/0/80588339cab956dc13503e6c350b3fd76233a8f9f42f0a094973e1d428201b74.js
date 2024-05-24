<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="ad.size" id="adSize">
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <link rel="stylesheet" type="text/css" href="adlib.css">
        <link rel="stylesheet" type="text/css" href="adStyle.css">
        <link rel="preload" as="font" href="RealTextPro-Bold.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="RealTextPro-Book.woff2" type="font/woff2" crossorigin="anonymous">
        <script src="/879366/Enabler_01_250.js"></script>
        <script src="https://s0.2mdn.net/ads/studio/cached_libs/gsap_3.2.4_min.js"></script>
    </head>
    <style></style>
    <body>
        <div id="mainContent" class="mainContent">
            <img id="keyartContent" class="fullSize abs" adlib-image="baseImage" />
            <div id="Gradient" class="abs fullSize"></div>
            <img id="slugContent" class="abs fullSize" adlib-image="baseImage2" />
            <div id="FlexBox" class="abs">
                <div id="fluidContainer" class="abs">
                  <div id="copiesContainer" class="rel">
                      <div id="dummyLogo" class="rel">
                          <div id="logoContainer" class="rel">
                              <img id="logoContent" adlib-image="logo" class="rel" />
                          </div>                    
                      </div>
                      <div id="dummyBox" class="rel">
                        <!-- <span id="headlineContent1" adlib-text="frame1Headline"></span> -->
                        <div id="headlineContainer" class="rel">
                            <p id="headlineContent" class="rel fontRTPDemibold" adlib-text="frame1Headline"></p>
                        </div>
                        <div id="headlineContainer2" class="rel">
                            <p id="headlineContent2" class="rel fontRTPBold" adlib-text="frame1Headline2"></p>
                        </div>
                        <div id="ctaContainer" class="rel">
                            <p id="ctaContent" class="rel" adlib-text="ctaText"></p>
                        </div>
                      </div>
                    </div>
                    <div id="legalContainer" class="rel">
                        <p id="legalContent" adlib-text="legal"></p>
                    </div>
                </div>
            </div>
            <div id="exitButton" class="exitButton"></div>
<!--             <img id="guide" class='abs fullSize' src="Guide.png"/> -->
        </div>
    </body>
    <script>           
        /***************************************
            DO NOT DELETE VARIABLES BELOW
        ***************************************/
        var creativeSize = '300x250'; // Set the width and height of the ad.
        var devDynamicContent = {}; // Variable for studio invocation code.
        var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i); // This is to check if the unit is running in mobile so the event to be used is touchend        
        /**************************************/
        var defaultValues = {  
            trigger:"Bold",
            baseImage:"BaseImage.png",
            baseImage2:"slug.png",
            logo:"logo.png",
            frame1Headline:"Lorem ipsum dolor sit amet",
            frame1Headline2:"Lorem ipsum dolor sit amet, id",
            ctaText:"Lorem ipsum dolor sit amet",
            ctaColor1:"#016BF8",
            ctaColor2:"#FFFFFF",
            cssAttrib:"/* CSS STYLE */",
            legal:"Lorem ipsum dolor sit amet, id modo forensibus pro, duo omnis tacimates ea. Sed ne summo vol",
            landingPage:"https://www.apps.disneyplus.com/",
            customVariable:"Black",
            customVariable2:"0.9",
            uiElement1:"?",
        };
        var possibleValues = {
            trigger:"Bold, Book",
        }
        var imageElementSizes  = {
            logo:[125,69],
        }
        let exitValue;
        function exitCall() {
            Enabler.exitOverride("MainClick", Adlib.utmParser(exitValue));
        }
        var videoCuePoint = [
            //"cuePoint:funcName" ex. "1:firstAninmation" please do not included the parenthesis after the function name.
        ]
        function initDynamic() {
            if (checkEnvironment() === 'tools') {
                for (var i=0;i<Object.keys(defaultValues).length;i++) {
                    Object.keys(defaultValues)[i];
                }
            } else {
                // paste studio invocation code here, and delete the devDynamicContent declaration as it is already declared outside this function.
                
    Enabler.setProfileId(10870720);

devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed = [{}];
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0]._id = 0;
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].id = 1;
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].Reporting_Label = "6553927c209e6143111553cf-655b17e7209e617a4d96c5fb7505d64a54e061b7acd54ccd58b49dc43500b635_14";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].Variant_name = "DIS_IndianaJones_US_EN_V1";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].Active = true;
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].Weights = 1;
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].isDefault = true;
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].Custom = {};
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].Custom.Url = "";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].frame1Headline = "";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].frame1Headline2 = "Now streaming";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].baseImage = {};
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].baseImage.Url = "https://cdn.ad-lib.io/v3/partners/63a33218011c425f5c042734/assets/singleFiles/654915bdf04daa2dcbf90234/original/IndianaDoD_DIS_SMRTLY_Key_US-EN_160x600_%402X.jpg";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].baseImage2 = {};
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].baseImage2.Url = "https://cdn.ad-lib.io/v2/partners/63a33218011c425f5c042734/assets/concepts/645e457e81d20e1662d46ef2/templates/647713a40d4657fdfc353a2b/content/slug.png";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].cssAttrib = "#legalContainer{top: 1px !important;}";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].ctaColor1 = "#016BF8";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].ctaColor2 = "#FFFFFF";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].ctaText = "Sign Up Now";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].customVariable = "Black";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].customVariable2 = "0";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].landingPage = {};
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].landingPage.Url = "https://www.disneyplus.com/";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].legal = "\u00A9 2023 & TM Lucasfilm Ltd. Must be 18+ to subscribe.";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].logo = {};
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].logo.Url = "https://cdn.ad-lib.io/v2/partners/63a33218011c425f5c042734/assets/concepts/645e457e81d20e1662d46ef2/templates/647713a40d4657fdfc353a2b/content/logo.png";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].trigger = "Bold";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].uiElement1 = "N\/A";
devDynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].Variation_name = "DIS_IndianaJones_US_EN_V1_160x600_fallback";
Enabler.setDevDynamicContent(devDynamicContent);
            Adlib.assignInvocationCode(); // DO NOT DELETE THIS CODE, This will automatically assign invocation code to defaultValues
            if (dynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].isDefault) {
                console.log("NT Exit Value: landingPage")
                exitValue = dynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].landingPage.Url;
            } else {
                console.log("Targeted Exit Value: Custom")
                exitValue = dynamicContent.Disney_Streaming_FY23_Indiana_Jones_DoD_Iberia_AdLib_Feed[0].Custom.Url;
            }
            }
        }
        function populate() {  
            if(defaultValues.trigger.replace(/<[^>]*>?/gm, '') == "Bold"){
                headlineContent.setAttribute("class","rel fontRTPDemibold");
                headlineContent2.setAttribute("class","rel fontRTPBold");

       ?/gm, ''))){
                    headlineContainer.style.display = "none";
                    ctaContainer.style.top = "-6px";
                    headlineContainer2.style.top = "-1px";
                }
            }else if(defaultValues.trigger.replace(/<[^>]*>?/gm, '') == "Book");
                headlineContent.style.fontSize = "12px";
                headlineContent.style.letterSpacing = "0.004em";

                headlineContent2.setAttribute("class","rel fontRTPBook");
                headlineContent2.style.fontSize = "12px";
                headlineContent2.style.letterSpacing = "0.004em";

                ctaContainer.style.top = "-2px";

                if(Adlib.isEmpty(defaultValues.frame1Headline.replace(/<[^>]*>?/gm, ''))){
    t;
            
            headlineContent2.innerHTML = "XXX";
            heightCounter3 = headlineContent2.offsetHeight;
            
            // Adlib.preloadDelay = 100;
            // Adlib.fpsSettings(60); // uncomment this if you want to change the FPS used in the creative          
            Adlib.populateElements(); // DO NOT DELETE THIS. automatically assign the defaultValues to the elements within the ad.
            /*****************************************
            If you need to manually assign a defaultValue to a style of an element, add it below.
            *****************************************/
            let temp = defaultValues.frame1Headline.replace(/\[/g,"<span style='font-family:RTPBold'>")
            let temp2 = temp.replace(/]/g,"</span>")
            document.querySelector("#headlineContent").innerHTML = temp2;
        };
    /*-----------------------------------------------------------------

        DO NOT MODIFY ANYTHING BELOW THIS COMMENT
    
    -----------------------------------------------------------------*/
        window.gwd = window.gwd || {};
        gwd.auto_PauseBtnClick = function(event) {
            gsap.globalTimeline.pause(); 
        }
        gwd.auto_PlayBtnClick  = function(event) {
            gsap.globalTimeline.resume(); 
        }
        window.onload = function() {
            (Enabler.isInitialized()) ? enablerInitHandler() : Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
        }   
        function enablerInitHandler() {
            initDynamic();
            setTimeout(function() {
                Adlib.createAd(creativeSize);
            }, 100);
            // this is from engineering team. this is strictly required
            var event = new CustomEvent("adinitialized");
            document.dispatchEvent(event);
        }
        // function for checking serving environment either studio or non studio
        function checkEnvironment() {
            let retVal;
            ( !Enabler.isServingInLiveEnvironment() ) ? retVal = 'tools': retVal = 'studio';
            return retVal;
        }
        (function () {
            if ( typeof window.CustomEvent === "function" ) return false; //If not IE
            function CustomEvent ( event, params ) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        })();
    </script>
    <script src="textFit.js"></script>
    <script src="adlibUtils-v3.js"></script>
    <script src="animation.js"></script>
</html>