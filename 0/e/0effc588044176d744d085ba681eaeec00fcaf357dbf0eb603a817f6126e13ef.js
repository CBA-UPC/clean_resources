var adWidth = 728;
var adHeight = 90;
var frames = 0
var ifVidON = false;
var weather1Rule = false
var weather2Rule = false
var termsOn = false;

var copy1OUT = false;
var copy2OUT = false;
var copy3OUT = false;
var copy4OUT = false;
var copy5OUT = false;

var ctaVisible = false;

function setUpDynamic() {

	// Dynamic Content variables and sample values
    Enabler.setProfileId(10835744);
    var devDynamicContent = {};

    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad = [{}];
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0]._id = 0;
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].ID = 1;
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].Reporting_Label = "Default";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].exit_url = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].exit_url.Url = "https:";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].weather = "off";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].geo = "";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].is_active = true;
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].start_date = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].start_date.RawValue = "5/1/2023 0:00:00";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].start_date.UtcValue = 1682899200000;
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].end_date = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].end_date.RawValue = "6/30/2023 23:59:59";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].end_date.UtcValue = 1688169599000;
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].Search = "Default";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].loadBrand = "default";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].framesLoops = "2,1";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].logo = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].logo.Type = "file";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/23445842/23445842_20230418081107432_blank.png";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].vid_cue = "off,0,0,0,0";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].video = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].video.Type = "video";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].video.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/7de8ec368d344886/itag/18/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3827734441/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/8A0013D14F528A59C0F19AE8191F174BCD3D9359.173590903D2620734A77264B171D9BABA9256F60/key/ck2/file/file.mp4";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].additional_Img = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].additional_Img.Type = "file";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].additional_Img.Url = "https://s0.2mdn.net/ads/richmedia/studio/23445842/23445842_20230418081107432_blank.png";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].cta_style = "BUTTON 2|Left|Font2|20|#00008f|rgba(255, 255, 255, 1)|0px|2px solid #fff|10px|150|0px 0px 0px 0px rgba(0, 0, 0, 0.2)|BUTTON 2|Left|Font2|20|#fff|rgba(0, 0, 143, 1)|0px|2px solid #00008f|10px|150|0px 0px 0px 0px rgba(0, 0, 0, 0.2)|TRUE|absolute|0.9em|12px 10px auto auto";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].cta_pos = "0,0,0,0,0,0,0,0,0,0";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].terms_click = "|Left|Font1|0|transparent|0|0";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].terms = "";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frame1_con = "left,159,14,2,0,0,fade,1,1,0,0";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frame2_con = "left,183,14,0,0,0,fade,1,3,0,0";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frame3_con = "left,0,0,0,0,0,fade,0,0,0,0";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frame4_con = "left,0,0,0,0,0,fade,0,0,0,0";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frame5_con = "left,0,0,0,0,0,fade,0,0,0,0";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm1_copy = "<span style=\"font-family:Font2;color:#000;font-size:20px;line-height:1.2em;letter-spacing:0.02em;\">Nothing beats<\/span>";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm1_img = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm1_img.Type = "file";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm1_img.Url = "https://s0.2mdn.net/ads/richmedia/studio/23445842/23445842_20230418081107432_blank.png";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm2_copy = "<span style=\"font-family:Font3;color:#000;font-size:20px;line-height:1.2em;letter-spacing:0.02em;\">another escapade<\/span>";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm2_img = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm2_img.Type = "file";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm2_img.Url = "https://s0.2mdn.net/ads/richmedia/studio/23445842/23445842_20230418081107432_blank.png";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm3_copy = "";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm3_img = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm3_img.Type = "file";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm3_img.Url = "https://s0.2mdn.net/ads/richmedia/studio/23445842/23445842_20230418081107432_blank.png";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm4_copy = "";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm4_img = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm4_img.Type = "file";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm4_img.Url = "https://s0.2mdn.net/ads/richmedia/studio/23445842/23445842_20230418081107432_blank.png";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm5_copy = "";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm5_img = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm5_img.Type = "file";
    devDynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm5_img.Url = "https://s0.2mdn.net/ads/richmedia/studio/23445842/23445842_20230418081107432_blank.png";
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand = [{}];
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0]._id = 0;
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].ID = 1;
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].Reporting_Label = "default";
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].backgroundColour = "#00a664";
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font1_woff2 = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font1_woff2.Type = "file";
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font1_woff2.Url = "https://s0.2mdn.net/ads/richmedia/studio/23445842/23445842_20230503091329518_DINNextLTPro-Bold.woff2";
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font2_woff2 = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font2_woff2.Type = "file";
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font2_woff2.Url = "https://s0.2mdn.net/ads/richmedia/studio/23445842/23445842_20230503091333266_DINNextLTPro-Light.woff2";
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font3_woff2 = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font3_woff2.Type = "file";
    devDynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font3_woff2.Url = "https://s0.2mdn.net/ads/richmedia/studio/23445842/23445842_20230503091336639_DINNextLTPro-LightCondensed.woff2";
    devDynamicContent.Enterprise__Master_Template_2023_Display_geo = [{}];
    devDynamicContent.Enterprise__Master_Template_2023_Display_geo[0]._id = 0;
    devDynamicContent.Enterprise__Master_Template_2023_Display_geo[0].ID = 1;
    devDynamicContent.Enterprise__Master_Template_2023_Display_geo[0].Reporting_Label = "Default";
    devDynamicContent.Enterprise__Master_Template_2023_Display_geo[0].is_active = true;
    devDynamicContent.Enterprise__Master_Template_2023_Display_geo[0].copy = "your local Enterprise";
    devDynamicContent.Enterprise__Master_Template_2023_Display_geo[0].EHI_Brand = "";
    devDynamicContent.Enterprise__Master_Template_2023_Display_geo[0].Branch_URLs = {};
    devDynamicContent.Enterprise__Master_Template_2023_Display_geo[0].Branch_URLs.Url = "https://www.enterprise.co.uk/";
    devDynamicContent.Enterprise__Master_Template_2023_Display_geo[0].Branch_Station_Country = "";
    Enabler.setDevDynamicContent(devDynamicContent);
}

// ---------------------------------------------------------------------------------
// Dynamic Access
// ---------------------------------------------------------------------------------

function dynamic(){

    var geo = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].geo;
    var branchName = dynamicContent.Enterprise__Master_Template_2023_Display_geo[0].copy;
    var geoMarket = dynamicContent.Enterprise__Master_Template_2023_Display_geo[0].Branch_Station_Country;

// ---------------------------------------------------------------------------------
// Brand sheet
// ---------------------------------------------------------------------------------
	//window.loader.src = dynamicContent.Enterprise__Master_Template_2023_Display_brand[0].loader.Url;
    window.bgColour = dynamicContent.Enterprise__Master_Template_2023_Display_brand[0].backgroundColour
    //window.bgImg.src = dynamicContent.Enterprise__Master_Template_2023_Display_brand[0].backgroundImage.Url
	window.font1WOFF2 = dynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font1_woff2.Url
	window.font2WOFF2 = dynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font2_woff2.Url
	window.font3WOFF2 = dynamicContent.Enterprise__Master_Template_2023_Display_brand[0].font3_woff2.Url

    //document.getElementById("loaderCon").style.backgroundColor =  bgColour;

// ---------------------------------------------------------------------------------
// Fonts & background colour
// ---------------------------------------------------------------------------------
    var cssAppend =

    "@font-face {"+
    "font-family: 'Font1';"+
    "font-style: normal;"+
    "font-variant: normal;"+
    "font-weight: normal;"+
    "font-kerning: normal;"+
    "letter-spacing: normal;"+
    "src: local('Font1'), local('Font1'),"+
      "url("+font1WOFF2+") format('woff2');}" +
     "@font-face {"+
     "font-family: 'Font2';"+
     "font-style: normal;"+
     "font-variant: normal;"+
     "font-weight: normal;"+
     "font-kerning: normal;"+
     "letter-spacing: normal;"+
    "src: local('Font2'), local('Font2'),"+
      "url("+font2WOFF2+") format('woff2');}" +
     "@font-face {"+
     "font-family: 'Font3';"+
     "font-style: normal;"+
     "font-variant: normal;"+
     "font-weight: normal;"+
     "font-kerning: normal;"+
     "letter-spacing: normal;"+
    "src: local('Font3'), local('Font3'),"+
      "url("+font3WOFF2+") format('woff2');}" +
      ".copy {position: absolute; color: #000; font-family:'Font1', Arial, sans-serif; font-style: normal; font-variant: normal; font-weight: normal; font-kerning: normal; letter-spacing: normal; text-rendering: geometricPrecision; font-size:16px; line-height: 1em; text-align: left; width:"+adWidth+"px; height: auto; top:0px; left:0px; z-index: 7;}" +
   //"#cta {position: absolute; font-family:'Font2', sans-serif; font-size: " + ctaSize + ";  line-height: 1em;text-align: center;color: " + ctaColour1 + ";background:" + ctaColour2 + "; height: " + ctaHeight + "; width: "+ctaWidth +";padding: 6px 10px 6px 10px; z-index: 50;}" +
      "#main-container{background:" + bgColour + "};" +
      "#loaderCon{background:" + bgColour + "};"

    // Need to add the "main" class to the "main container" in the index file

    var styleSheet = document.createElement("Style")
    styleSheet.type = "text/css"
    styleSheet.innerText = cssAppend
    document.head.appendChild(styleSheet)


    // ---------------------------------------------------------------------------------
    // MAIN AD
    // ---------------------------------------------------------------------------------

    if (geo == "on") {
        window.exitURL = dynamicContent.Enterprise__Master_Template_2023_Display_geo[0].Branch_URLs.Url;
    } else {
        window.exitURL = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].exit_url.Url;
    }

        // Frame Loop array
        window.framesLoopCon = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].framesLoops
        window.framesLoopConA = new Array();
        framesLoopConA = framesLoopCon.split(",");

            window.frames1 = framesLoopConA[0]
            window.loops1 = framesLoopConA[1]

            window.loops = parseInt(loops1, 10);
            frames = window.parseInt(frames1, 10);

        // Image Animation array
        window.frame1Con = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frame1_con
        var frame1ConA = new Array();
        frame1ConA = frame1Con.split(",");

            window.frm1CopyAlign = frame1ConA[0]
            window.frm1CopyTop = frame1ConA[1]
            window.frm1CopyLeft = frame1ConA[2]
            window.frm1CopyOut1 = frame1ConA[3]
            window.frm1ctaIN = frame1ConA[4]
            window.frm1TermsIN = frame1ConA[5]
            window.frm1ImgAn = frame1ConA[6]
            window.frm1ImgAnTime1 = frame1ConA[7]
            window.frm1Dwell = frame1ConA[8]
            window.frm1AddImgAn = frame1ConA[9]
            window.frm1AddImgAnTime1 = frame1ConA[10]
            // When using an array variable for time, it needs to be converted to a number not a string
            window.frm1ImgAnTime = parseInt(frm1ImgAnTime1, 10);
            window.frm1AddImgAnTime = parseInt(frm1AddImgAnTime1, 10);
            window.frm1CopyOut = parseInt(frm1CopyOut1, 10);

        window.frame2Con = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frame2_con
        var frame2ConA = new Array();
        frame2ConA = frame2Con.split(",");

            window.frm2CopyAlign = frame2ConA[0]
            window.frm2CopyTop = frame2ConA[1]
            window.frm2CopyLeft = frame2ConA[2]
            window.frm2CopyOut1 = frame2ConA[3]
            window.frm2ctaIN = frame2ConA[4]
            window.frm2TermsIN = frame2ConA[5]
            window.frm2ImgAn = frame2ConA[6]
            window.frm2ImgAnTime1 = frame2ConA[7]
            window.frm2Dwell = frame2ConA[8]
            window.frm2AddImgAn = frame2ConA[9]
            window.frm2AddImgAnTime1 = frame2ConA[10]

            window.frm2ImgAnTime = parseInt(frm2ImgAnTime1, 10);
            window.frm2AddImgAnTime = parseInt(frm2AddImgAnTime1, 10);
            window.frm2CopyOut = parseInt(frm2CopyOut1, 10);

        window.frame3Con = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frame3_con
        var frame3ConA = new Array();
        frame3ConA = frame3Con.split(",");

            window.frm3CopyAlign = frame3ConA[0]
            window.frm3CopyTop = frame3ConA[1]
            window.frm3CopyLeft = frame3ConA[2]
            window.frm3CopyOut1 = frame3ConA[3]
            window.frm3ctaIN = frame3ConA[4]
            window.frm3TermsIN = frame3ConA[5]
            window.frm3ImgAn = frame3ConA[6]
            window.frm3ImgAnTime1 = frame3ConA[7]
            window.frm3Dwell = frame3ConA[8]
            window.frm3AddImgAn = frame3ConA[9]
            window.frm3AddImgAnTime1 = frame3ConA[10]

            window.frm3ImgAnTime = parseInt(frm3ImgAnTime1, 10);
            window.frm3AddImgAnTime = parseInt(frm3AddImgAnTime1, 10);
            window.frm3CopyOut = parseInt(frm3CopyOut1, 10);

        window.frame4Con = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frame4_con
        var frame4ConA = new Array();
        frame4ConA = frame4Con.split(",");

            window.frm4CopyAlign = frame4ConA[0]
            window.frm4CopyTop = frame4ConA[1]
            window.frm4CopyLeft = frame4ConA[2]
            window.frm4CopyOut1 = frame4ConA[3]
            window.frm4ctaIN = frame4ConA[4]
            window.frm4TermsIN = frame4ConA[5]
            window.frm4ImgAn = frame4ConA[6]
            window.frm4ImgAnTime1 = frame4ConA[7]
            window.frm4Dwell = frame4ConA[8]
            window.frm4AddImgAn = frame4ConA[9]
            window.frm4AddImgAnTime1 = frame4ConA[10]

            window.frm4ImgAnTime = parseInt(frm4ImgAnTime1, 10);
            window.frm4AddImgAnTime = parseInt(frm4AddImgAnTime1, 10);
            window.frm4CopyOut = parseInt(frm4CopyOut1, 10);

        window.frame5Con = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frame5_con
        var frame5ConA = new Array();
        frame5ConA = frame5Con.split(",");

            window.frm5CopyAlign = frame5ConA[0]
            window.frm5CopyTop = frame5ConA[1]
            window.frm5CopyLeft = frame5ConA[2]
            window.frm5CopyOut1 = frame5ConA[3]
            window.frm5ctaIN = frame5ConA[4]
            window.frm5TermsIN = frame5ConA[5]
            window.frm5ImgAn = frame5ConA[6]
            window.frm5ImgAnTime1 = frame5ConA[7]
            window.frm5Dwell = frame5ConA[8]
            window.frm5AddImgAn = frame5ConA[9]
            window.frm5AddImgAnTime1 = frame5ConA[10]

            window.frm5ImgAnTime = parseInt(frm5ImgAnTime1, 10);
            window.frm5AddImgAnTime = parseInt(frm5AddImgAnTime1, 10);
            window.frm5CopyOut = parseInt(frm5CopyOut1, 10);

        window.videoCon = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].vid_cue
        var videoConA = new Array();
        videoConA = videoCon.split(",");

            window.videoON = videoConA[0]
            window.cue1 = videoConA[1]
            window.cue2 = videoConA[2]
            window.cue3 = videoConA[3]
            window.cue4 = videoConA[4]

        window.logo.src = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].logo.Url
        window.addImg.src = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].additional_Img.Url

        // CTA Style array
        window.ctaCon = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].cta_style
        var ctaConA = new Array();
        ctaConA = ctaCon.split("|");

            window.cta1OG = ctaConA[0]
            window.cta2OG = ctaConA[0]
            window.cta3OG = ctaConA[0]
            window.cta4OG= ctaConA[0]
            window.cta5OG = ctaConA[0]
            window.ctaFont = ctaConA[1]
            window.ctaSize = ctaConA[2]
            window.ctaColour1 = ctaConA[3]
            window.ctaColour2 = ctaConA[4]
            window.ctaRadius = ctaConA[5]
            window.ctaBorder = ctaConA[6]
            window.ctaPadding = ctaConA[7]
            window.ctaWidth = ctaConA[8]
            window.ctaShadow = ctaConA[9]
            window.cta1Hover = ctaConA[10]
            window.cta2Hover = ctaConA[10]
            window.cta3Hover = ctaConA[10]
            window.cta4Hover= ctaConA[10]
            window.cta5Hover= ctaConA[10]
            window.ctaFontHover = ctaConA[11]
            window.ctaSizeHover = ctaConA[12]
            window.ctaColour1Hover = ctaConA[13]
            window.ctaColour2Hover = ctaConA[14]
            window.ctaRadiusHover = ctaConA[15]
            window.ctaBorderHover = ctaConA[16]
            window.ctaPaddingHover = ctaConA[17]
            window.ctaWidthHover = ctaConA[18]
            window.ctaShadowHover = ctaConA[19]

            window.cta1.innerHTML = cta1OG
            window.cta2.innerHTML = cta2OG
            window.cta3.innerHTML = cta3OG
            window.cta4.innerHTML = cta4OG
            window.cta5.innerHTML = cta5OG

        // CTA Position array
        window.ctaPos = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].cta_pos
        var ctaPosA = new Array();
        ctaPosA = ctaPos.split(",");

            window.ctaFrm1top = ctaPosA[0]
            window.ctaFrm1left = ctaPosA[1]
            window.ctaFrm2top = ctaPosA[2]
            window.ctaFrm2left = ctaPosA[3]
            window.ctaFrm3top = ctaPosA[4]
            window.ctaFrm3left = ctaPosA[5]
            window.ctaFrm4top = ctaPosA[6]
            window.ctaFrm4left = ctaPosA[7]
            window.ctaFrm5top = ctaPosA[8]
            window.ctaFrm5left = ctaPosA[9]

        // Terms Click Style array
        window.termsClickCon = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].terms_click
        var termsClickConA = new Array();
        termsClickConA = termsClickCon.split("|");

            window.termsClickCopy = termsClickConA[0]
            window.termsClickAlign = termsClickConA[1]
            window.termsClickFont = termsClickConA[2]
            window.termsClickSize = termsClickConA[3]
            window.termsClickColour = termsClickConA[4]
            window.termsClickBottom = termsClickConA[5]
            window.termsClickLeft = termsClickConA[6]

            window.termsClick.innerHTML = termsClickCopy

        // Terms Style array
        window.termsCon = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].terms
        var termsConA = new Array();
        termsConA = termsCon.split("|");

            window.termsCopy = termsConA[0]
            window.termsAlign = termsConA[1]
            window.termsFont = termsConA[2]
            window.termsSize = termsConA[3]
            window.termsColour1 = termsConA[4]
            window.termsColour2 = termsConA[5]
            window.termsBorder = termsConA[6]
            window.termsShadow = termsConA[7]

            window.terms.innerHTML = termsCopy

        //window.termsClick.innerHTML = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].terms_click
        //window.terms.innerHTML = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].terms

        window.frm1Copy.innerHTML = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm1_copy
        window.frm2Copy.innerHTML = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm2_copy
        window.frm3Copy.innerHTML = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm3_copy
        window.frm4Copy.innerHTML = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm4_copy
        window.frm5Copy.innerHTML = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm5_copy

        window.frm1Img.src = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm1_img.Url
        window.frm2Img.src = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm2_img.Url
        window.frm3Img.src = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm3_img.Url
        window.frm4Img.src = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm4_img.Url
        window.frm5Img.src = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm5_img.Url

        var frm1CopyVar = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm1_copy
        var frm2CopyVar = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm2_copy
        var frm3CopyVar = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm3_copy
        var frm4CopyVar = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm4_copy
        var frm5CopyVar = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].frm5_copy
        
        
        resultGeo1 = frm1CopyVar.indexOf("{location}");
        resultGeo2 = frm2CopyVar.indexOf("{location}");
        resultGeo3 = frm3CopyVar.indexOf("{location}");
        resultGeo4 = frm4CopyVar.indexOf("{location}");
        resultGeo5 = frm5CopyVar.indexOf("{location}");


        
        if (resultGeo1 >= 1){
        
            var frm1CopyVar1 = frm1CopyVar.slice(0, resultGeo1) + branchName + " " + frm1CopyVar.slice((resultGeo1 + 10), frm1CopyVar.length); //10 refers to char length of {location}
            window.frm1Copy.innerHTML = frm1CopyVar1;
        }
        
        if (resultGeo2 >= 1){
            var frm2CopyVar1 = frm2CopyVar.slice(0, resultGeo2) + branchName + " " + frm2CopyVar.slice((resultGeo2 + 10), frm2CopyVar.length);
            window.frm2Copy.innerHTML = frm2CopyVar1;
        }
        
        if (resultGeo3 >= 1){
            var frm3CopyVar1 = frm3CopyVar.slice(0, resultGeo3) + branchName + " " + frm3CopyVar.slice((resultGeo3 + 10), frm3CopyVar.length);
            window.frm3Copy.innerHTML = frm3CopyVar1;
        }
        
        if (resultGeo4 >= 1){
            var frm4CopyVar1 = frm4CopyVar.slice(0, resultGeo4) + branchName + " " + frm4CopyVar.slice((resultGeo4 + 10), frm4CopyVar.length);
            window.frm4Copy.innerHTML = frm4CopyVar1;
        }
        
        if (resultGeo5 >= 1){
            var frm5CopyVar1 = frm1CopyVar.slice(0, resultGeo5) + branchName + " " + frm5CopyVar.slice((resultGeo5 + 10), frm5CopyVar.length);
            window.frm5Copy.innerHTML = frm5CopyVar1;
        }


        if (videoON == "ON"){
            ifVidON = true;
            var target1 = document.querySelector("#video-container-0");
            target1.innerHTML += '<video autoplay muted playsinline id="vid"></video>'
        }
}

// ---------------------------------------------------------------------------------
// ADCON ARRAY
// ---------------------------------------------------------------------------------
function adCon(){
    addListeners1();
//Frame1
    TweenLite.to('#frm1Copy', 0, {top:frm1CopyTop,left:frm1CopyLeft})
    document.getElementById("frm1Copy").style.textAlign = frm1CopyAlign;
//Frame2
    TweenLite.to('#frm2Copy', 0, {top:frm2CopyTop,left:frm2CopyLeft})
    document.getElementById("frm2Copy").style.textAlign = frm2CopyAlign;
//Frame3
    TweenLite.to('#frm3Copy', 0, {top:frm3CopyTop,left:frm3CopyLeft})
    document.getElementById("frm3Copy").style.textAlign = frm3CopyAlign;
//Frame4
    TweenLite.to('#frm4Copy', 0, {top:frm4CopyTop,left:frm4CopyLeft})
    document.getElementById("frm4Copy").style.textAlign = frm4CopyAlign;
//Frame5
    TweenLite.to('#frm5Copy', 0, {top:frm5CopyTop,left:frm5CopyLeft})
    document.getElementById("frm5Copy").style.textAlign = frm5CopyAlign;

//cta style
    document.getElementById('cta1').style.fontFamily = ctaFont;
    document.getElementById('cta1').style.fontSize = ctaSize + "px";
    document.getElementById('cta1').style.color = ctaColour1;
    document.getElementById('cta1').style.background = ctaColour2;
    document.getElementById('cta1').style.borderRadius = ctaRadius + "px";
    document.getElementById('cta1').style.border = ctaBorder;
    document.getElementById('cta1').style.padding = ctaPadding;
    document.getElementById('cta1').style.boxShadow = ctaShadow;

    document.getElementById('cta2').style.fontFamily = ctaFont;
    document.getElementById('cta2').style.fontSize = ctaSize + "px";
    document.getElementById('cta2').style.color = ctaColour1;
    document.getElementById('cta2').style.background = ctaColour2;
    document.getElementById('cta2').style.borderRadius = ctaRadius + "px";
    document.getElementById('cta2').style.border = ctaBorder;
    document.getElementById('cta2').style.padding = ctaPadding;
    document.getElementById('cta2').style.boxShadow = ctaShadow;

    document.getElementById('cta3').style.fontFamily = ctaFont;
    document.getElementById('cta3').style.fontSize = ctaSize + "px";
    document.getElementById('cta3').style.color = ctaColour1;
    document.getElementById('cta3').style.background = ctaColour2;
    document.getElementById('cta3').style.borderRadius = ctaRadius + "px";
    document.getElementById('cta3').style.border = ctaBorder;
    document.getElementById('cta3').style.padding = ctaPadding;
    document.getElementById('cta3').style.boxShadow = ctaShadow;

    document.getElementById('cta4').style.fontFamily = ctaFont;
    document.getElementById('cta4').style.fontSize = ctaSize + "px";
    document.getElementById('cta4').style.color = ctaColour1;
    document.getElementById('cta4').style.background = ctaColour2;
    document.getElementById('cta4').style.borderRadius = ctaRadius + "px";
    document.getElementById('cta4').style.border = ctaBorder;
    document.getElementById('cta4').style.padding = ctaPadding;
    document.getElementById('cta4').style.boxShadow = ctaShadow;

    document.getElementById('cta5').style.fontFamily = ctaFont;
    document.getElementById('cta5').style.fontSize = ctaSize + "px";
    document.getElementById('cta5').style.color = ctaColour1;
    document.getElementById('cta5').style.background = ctaColour2;
    document.getElementById('cta5').style.borderRadius = ctaRadius + "px";
    document.getElementById('cta5').style.border = ctaBorder;
    document.getElementById('cta5').style.padding = ctaPadding;
    document.getElementById('cta5').style.boxShadow = ctaShadow;

    if (ctaWidth == "auto"){  
        document.getElementById('cta1').style.width = "auto";
    } else {
        document.getElementById('cta1').style.width = ctaWidth + "px";
    }

    if (ctaWidth == "auto"){  
        document.getElementById('cta2').style.width = "auto";
    } else {
        document.getElementById('cta2').style.width = ctaWidth + "px";
    }

    if (ctaWidth == "auto"){  
        document.getElementById('cta3').style.width = "auto";
    } else {
        document.getElementById('cta3').style.width = ctaWidth + "px";
    }

    if (ctaWidth == "auto"){  
        document.getElementById('cta4').style.width = "auto";
    } else {
        document.getElementById('cta4').style.width = ctaWidth + "px";
    }

    if (ctaWidth == "auto"){  
        document.getElementById('cta5').style.width = "auto";
    } else {
        document.getElementById('cta5').style.width = ctaWidth + "px";
    }

    //Terms Click style
    TweenLite.to('#termsClick', 0, {bottom:termsClickBottom,left:termsClickLeft})
    document.getElementById('termsClick').style.textAlign = termsClickAlign;
    document.getElementById('termsClick').style.fontFamily = termsClickFont;
    document.getElementById('termsClick').style.fontSize = termsClickSize + "px";
    document.getElementById('termsClick').style.color = termsClickColour;

    //Terms Style
    document.getElementById('terms').style.textAlign = termsAlign;
    document.getElementById('terms').style.fontFamily = termsFont;
    document.getElementById('terms').style.fontSize = termsSize + "px";
    document.getElementById('terms').style.color = termsColour1;
    document.getElementById('terms').style.background = termsColour2;
    document.getElementById('terms').style.borderTop = termsBorder;
    document.getElementById('terms').style.boxShadow = termsShadow;

//ZOOM ANIMATION
    if (frm1ImgAn == "zoom out"){

        TweenLite.to('#frm1Img', 0, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})
    }

    if (frm2ImgAn == "zoom out"){

        TweenLite.to('#frm2Img', 0, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})
    }

    if (frm3ImgAn == "zoom out"){

        TweenLite.to('#frm3Img', 0, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})
    }

    if (frm4ImgAn == "zoom out"){

        TweenLite.to('#frm4Img', 0, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})
    }

    if (frm5ImgAn == "zoom out"){

        TweenLite.to('#frm5Img', 0, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})
    }

    if (frm1ImgAn == "zoom in"){

        TweenLite.to('#frm1Img', 0, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})
    }

    if (frm2ImgAn == "zoom in"){

        TweenLite.to('#frm2Img', 0, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})
    }

    if (frm3ImgAn == "zoom in"){

        TweenLite.to('#frm3Img', 0, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})
    }

    if (frm4ImgAn == "zoom in"){

        TweenLite.to('#frm4Img', 0, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})
    }

    if (frm5ImgAn == "zoom in"){

        TweenLite.to('#frm5Img', 0, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})
    }

    //ADD IMG ZOOM ANIMATION
    if (frm1AddImgAn == "zoom out"){

        TweenLite.to('#addImg', 0, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})
    }

    if (frm2AddImgAn == "zoom out"){

        TweenLite.to('#addImg', 0, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})
    }

    if (frm3AddImgAn == "zoom out"){

        TweenLite.to('#addImg', 0, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})
    }

    if (frm4AddImgAn == "zoom out"){

        TweenLite.to('#addImg', 0, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})
    }

    if (frm5AddImgAn == "zoom out"){

        TweenLite.to('#addImg', 0, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})
    }

    if (frm1AddImgAn == "zoom in"){

        TweenLite.to('#addImg', 0, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})
    }

    if (frm2AddImgAn == "zoom in"){

        TweenLite.to('#addImg', 0, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})
    }

    if (frm3AddImgAn == "zoom in"){

        TweenLite.to('#addImg', 0, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})
    }

    if (frm4AddImgAn == "zoom in"){

        TweenLite.to('#addImg', 0, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})
    }

    if (frm5AddImgAn == "zoom in"){

        TweenLite.to('#addImg', 0, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})
    }

//SLIDE ANIMATION
    if (frm1AddImgAn == "slide in left"){

        TweenLite.to('#addImg', 0, {left:adWidth})

    } else if (frm1AddImgAn == "slide in right"){

        TweenLite.to('#addImg', 0, {left:-adWidth})

    } else if (frm1AddImgAn == "slide in top"){

        TweenLite.to('#addImg', 0, {top:-adHeight})

    } else if (frm1AddImgAn == "slide in bottom"){

        TweenLite.to('#addImg', 0, {top:adHeight})
    }

    if (frm2AddImgAn == "slide in left"){

        TweenLite.to('#addImg', 0, {left:adWidth})

    } else if (frm2AddImgAn == "slide in right"){

        TweenLite.to('#addImg', 0, {left:-adWidth})

    } else if (frm2AddImgAn == "slide in top"){

    TweenLite.to('#addImg', 0, {top:-adHeight})

    } else if (frm2AddImgAn == "slide in bottom"){

        TweenLite.to('#addImg', 0, {top:adHeight})
    }

    if (frm3AddImgAn == "slide in left"){

        TweenLite.to('#addImg', 0, {left:adWidth})

    } else if (frm3AddImgAn == "slide in right"){

        TweenLite.to('#addImg', 0, {left:-adWidth})

    } else if (frm3AddImgAn == "slide in top"){

        TweenLite.to('#addImg', 0, {top:-adHeight})

    } else if (frm3AddImgAn == "slide in bottom"){

        TweenLite.to('#addImg', 0, {top:adHeight})
    }

    if (frm4AddImgAn == "slide in left"){

        TweenLite.to('#addImg', 0, {left:adWidth})

    } else if (frm4AddImgAn == "slide in right"){

        TweenLite.to('#addImg', 0, {left:-adWidth})

    } else if (frm4AddImgAn == "slide in top"){

        TweenLite.to('#addImg', 0, {top:-adHeight})

    } else if (frm4AddImgAn == "slide in bottom"){

        TweenLite.to('#addImg', 0, {top:adHeight})
    }

    if (frm5AddImgAn == "slide in left"){

        TweenLite.to('#addImg', 0, {left:adWidth})

    } else if (frm5AddImgAn == "slide in right"){

        TweenLite.to('#addImg', 0, {left:-adWidth})

    } else if (frm5AddImgAn == "slide in top"){

        TweenLite.to('#addImg', 0, {top:-adHeight})

    } else if (frm1AddImgAn == "slide in bottom"){

        TweenLite.to('#addImg', 0, {top:adHeight})
    }

show1()

}

// ---------------------------------------------------------------------------------
// Doubleclick Main
// ---------------------------------------------------------------------------------

var creative = {};

function preInit1() {
	setupDom();

	if (Enabler.isInitialized()) {
		init1();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT,init1);
	}
}

function setupDom() {
	creative.dom = {};
	creative.dom.mainContainer = document.getElementById('main-container');
	//creative.dom.loader = document.getElementById('loader');

	creative.dom.logo = document.getElementById('logo');

    creative.dom.cta1 = document.getElementById('cta1');
    creative.dom.cta2 = document.getElementById('cta2');
    creative.dom.cta3 = document.getElementById('cta3');
    creative.dom.cta4 = document.getElementById('cta4');
    creative.dom.cta5 = document.getElementById('cta5');

	creative.dom.terms = document.getElementById('terms');
	creative.dom.termsClick = document.getElementById('termsClick');

	creative.dom.addImg = document.getElementById('addImg');
	//creative.dom.bgImg = document.getElementById('bgImg');

	creative.dom.frm1Copy = document.getElementById('frm1Copy');
	creative.dom.frm1Img = document.getElementById('frm1Img');

	creative.dom.frm2Copy = document.getElementById('frm2Copy');
	creative.dom.frm2Img = document.getElementById('frm2Img');

	creative.dom.frm3Copy = document.getElementById('frm3Copy');
	creative.dom.frm3Img = document.getElementById('frm3Img');

	creative.dom.frm4Copy = document.getElementById('frm4Copy');
	creative.dom.frm4Img = document.getElementById('frm4Img');

	creative.dom.frm5Copy = document.getElementById('frm5Copy');
	creative.dom.frm5Img = document.getElementById('frm5Img');

	creative.dom.vidContainer = document.getElementById('video-container-0');

	creative.dom.exit = document.getElementById('exit');

}

function init1() {
	addListeners();
	setUpDynamic();
	dynamic();

	if (Enabler.isVisible()) {
		show();
	}
	else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
	}
}

function addListeners(){
  //console.log("vents")
	creative.dom.exit.addEventListener('click', exitClickHandler);

    creative.dom.mainContainer.addEventListener('mouseover', ctaMouseOver);
    creative.dom.mainContainer.addEventListener('mouseout', ctaMouseOut);

    if (ifVidON == true){
      creative.dom.vid.addEventListener('ended', videoEndHandler0, false);
    }

}

function addListeners1(){
    if (terms.innerHTML == ""){
      document.getElementById("termsClick").style.zIndex = "999"
    }
    else {
      creative.dom.termsClick.addEventListener('mouseover', termsMouseOver);
      creative.dom.termsClick.addEventListener("touchStart", termsMouseOver, false);
      creative.dom.termsClick.addEventListener('mouseout', termsMouseOut);
      creative.dom.termsClick.addEventListener("touchEnd", termsMouseOut);
    }
}

function ctaMouseOver(){

    window.cta1.innerHTML = cta1Hover
    window.cta2.innerHTML = cta2Hover
    window.cta3.innerHTML = cta3Hover
    window.cta4.innerHTML = cta4Hover
    window.cta5.innerHTML = cta5Hover

    TweenLite.to('#cta1', 0.3, {ease:Power1.easeInOut,fontFamily:ctaFontHover,fontSize:ctaSizeHover,color:ctaColour1Hover,background:ctaColour2Hover,borderRadius:ctaRadiusHover,border:ctaBorderHover,padding:ctaPaddingHover,width:ctaWidthHover,boxShadow:ctaShadowHover,})
    TweenLite.to('#cta2', 0.3, {ease:Power1.easeInOut,fontFamily:ctaFontHover,fontSize:ctaSizeHover,color:ctaColour1Hover,background:ctaColour2Hover,borderRadius:ctaRadiusHover,border:ctaBorderHover,padding:ctaPaddingHover,width:ctaWidthHover,boxShadow:ctaShadowHover})
    TweenLite.to('#cta3', 0.3, {ease:Power1.easeInOut,fontFamily:ctaFontHover,fontSize:ctaSizeHover,color:ctaColour1Hover,background:ctaColour2Hover,borderRadius:ctaRadiusHover,border:ctaBorderHover,padding:ctaPaddingHover,width:ctaWidthHover,boxShadow:ctaShadowHover})
    TweenLite.to('#cta4', 0.3, {ease:Power1.easeInOut,fontFamily:ctaFontHover,fontSize:ctaSizeHover,color:ctaColour1Hover,background:ctaColour2Hover,borderRadius:ctaRadiusHover,border:ctaBorderHover,padding:ctaPaddingHover,width:ctaWidthHover,boxShadow:ctaShadowHover})
    TweenLite.to('#cta5', 0.3, {ease:Power1.easeInOut,fontFamily:ctaFontHover,fontSize:ctaSizeHover,color:ctaColour1Hover,background:ctaColour2Hover,borderRadius:ctaRadiusHover,border:ctaBorderHover,padding:ctaPaddingHover,width:ctaWidthHover,boxShadow:ctaShadowHover})

}

function ctaMouseOut(){

    window.cta1.innerHTML = cta1OG
    window.cta2.innerHTML = cta2OG
    window.cta3.innerHTML = cta3OG
    window.cta4.innerHTML = cta4OG
    window.cta5.innerHTML = cta5OG

    TweenLite.to('#cta1', 0.3, {ease:Power1.easeInOut,fontFamily:ctaFont,fontSize:ctaSize,color:ctaColour1,background:ctaColour2,borderRadius:ctaRadius,border:ctaBorder,padding:ctaPadding,width:ctaWidth,boxShadow:ctaShadow})
    TweenLite.to('#cta2', 0.3, {ease:Power1.easeInOut,fontFamily:ctaFont,fontSize:ctaSize,color:ctaColour1,background:ctaColour2,borderRadius:ctaRadius,border:ctaBorder,padding:ctaPadding,width:ctaWidth,boxShadow:ctaShadow})
    TweenLite.to('#cta3', 0.3, {ease:Power1.easeInOut,fontFamily:ctaFont,fontSize:ctaSize,color:ctaColour1,background:ctaColour2,borderRadius:ctaRadius,border:ctaBorder,padding:ctaPadding,width:ctaWidth,boxShadow:ctaShadow})
    TweenLite.to('#cta4', 0.3, {ease:Power1.easeInOut,fontFamily:ctaFont,fontSize:ctaSize,color:ctaColour1,background:ctaColour2,borderRadius:ctaRadius,border:ctaBorder,padding:ctaPadding,width:ctaWidth,boxShadow:ctaShadow})
    TweenLite.to('#cta5', 0.3, {ease:Power1.easeInOut,fontFamily:ctaFont,fontSize:ctaSize,color:ctaColour1,background:ctaColour2,borderRadius:ctaRadius,border:ctaBorder,padding:ctaPadding,width:ctaWidth,boxShadow:ctaShadow})

}

//
function termsMouseOver(){

    var termsHeight = document.getElementById("terms").clientHeight
    var termsTop = adHeight - termsHeight

    if (frameNum == 1){
    if (frm1TermsIN == 1){
        TweenLite.to('#termsClick', 0.3, {opacity:0})
        TweenLite.to('#terms', 0.3, {top:termsTop, opacity:1})
        tl.kill();
        termsOn = true;
    }
    }

    if (frameNum == 2){
    if (frm1TermsIN == 1){
        TweenLite.to('#termsClick', 0.3, {opacity:0})
        TweenLite.to('#terms', 0.3, {top:termsTop, opacity:1})
        tl.kill();
        termsOn = true;
    }
    }

    if (frameNum == 3){
    if (frm2TermsIN == 1){
        TweenLite.to('#termsClick', 0.3, {opacity:0})
        TweenLite.to('#terms', 0.3, {top:termsTop, opacity:1})
        tl.kill();
        termsOn = true;
    }
    }

    if (frameNum == 4){
    if (frm3TermsIN == 1){
        TweenLite.to('#termsClick', 0.3, {opacity:0})
        TweenLite.to('#terms', 0.3, {top:termsTop, opacity:1})
        tl.kill();
        termsOn = true;
    }
    }

    if (frameNum == 5){
    if (frm4TermsIN == 1){
        TweenLite.to('#termsClick', 0.3, {opacity:0})
        TweenLite.to('#terms', 0.3, {top:termsTop, opacity:1})
        tl.kill();
        termsOn = true;
    }
    }

    if (frameNum == 6){
    if (frm5TermsIN == 1){
        TweenLite.to('#termsClick', 0.3, {opacity:0})
        TweenLite.to('#terms', 0.3, {top:termsTop, opacity:1})
        tl.kill();
        termsOn = true;
    }
    }
}

function termsMouseOut(){
    if (termsOn == true){
        TweenLite.to('#termsClick', 0.3, {opacity:1})
        TweenLite.to('#terms', 0.3, {top:adHeight, opacity:0})
        tl.resume();
        termsOn = false;
    }
}

function startMuted0(e) {
    ////console.log("startMuted")
    // Leaving the listener can cause issues on Chrome / Firefox
    if (creative.dom.hasCanPlay) {
        creative.dom.vid.removeEventListener('canplay', startMuted0);
        creative.dom.hasCanPlay = false;
    }
    // If paused then play
    creative.dom.vid.volume = 0; // Muted by default
    creative.dom.vid.currentTime = 0;
    creative.dom.vid.play();
}

function stopHandler0(e) {
    //Enabler.counter("Video 0 stopped", true);
    creative.dom.vid.currentTime = 0;
    creative.dom.vid.pause();
    creative.isClick0 = true;
    ////console.log("videoStop")
}

function videoEndHandler0(e) {
    //var videoLength = vid.duration;

    //creative.dom.vid.currentTime = videoLength;
    document.getElementById('vid').pause();
    //creative.isClick0 = true;
    //creative.dom.vid.style.opacity = 0;

    console.log("videoEnd")
}



function show1(){

    if (ifVidON == true){

        var t = setInterval(function () {
            var elem = ((document.getElementById('vid')) ? true:false);

            if (elem){

//if (document.getElementById("vid").innerHTML.length > 0){
//console.log("vid exists")
//if (creative.dom.vid.length > 0) {
                clearInterval(t);
                frameNum = 1
                cardIn = false;

                creative.dom.vid = document.getElementById('vid');

// Create the element
                var script = document.createElement("script");

// Add script content
                    if (weather1Rule == true){

                    script.innerHTML = "window.vid.src = dynamicContent.Enterprise__Master_Template_2023_Display_AdRule1[0].video.Progressive_Url; Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {studio.video.Reporter.attach('video_1', creative.dom.vid); creative.dom.vid.addEventListener('ended', videoEndHandler0, false); vidListener()});";

                    } else if (weather2Rule == true) {

                    script.innerHTML = "window.vid.src = dynamicContent.Enterprise__Master_Template_2023_Display_AdRule2[0].video.Progressive_Url; Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {studio.video.Reporter.attach('video_1', creative.dom.vid); creative.dom.vid.addEventListener('ended', videoEndHandler0, false); vidListener()});";

                    } else {

                    script.innerHTML = "window.vid.src = dynamicContent.Enterprise__Master_Template_2023_Display_Ad[0].video.Progressive_Url; Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {studio.video.Reporter.attach('video_1', creative.dom.vid); creative.dom.vid.addEventListener('ended', videoEndHandler0, false); vidListener()});";

                    }
// Append
                document.head.appendChild(script);

    //var vidFunc = "window.vid.src = dynamicContent.RDG__Dynamic__2018_Ad_2019[0].video.Progressive_Url; Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {studio.video.Reporter.attach('video_1', creative.dom.vid); creative.dom.vid.addEventListener('ended', videoEndHandler0, false); vidListener()});"
    //var str = vidFunc.split('"').join('')
    //console.log(str)

                creative.dom.vid.currentTime = 0;
  //creative.dom.vid.play();

                showVideoAn();
            }
        }, 50);

    } else {

        animation()
    }
    ctaVisible = false;
}



// ---------------------------------------------------------------------------------
// URL
// ---------------------------------------------------------------------------------

preInit1();

// ---------------------------------------------------------------------------------
// VIDEO CUE POINTS
// ---------------------------------------------------------------------------------

function showVideoAn() {
    //var videoLength = creative.dom.vid.duration;
    //console.log("video")

    if (creative.autoplay0) {
        if (creative.dom.vid.readyState >= 2) {
            startMuted0(null);
            // TweenLite.to(creative.dom.preloadShape, 1, {autoAlpha:0});
        } else {
            creative.dom.hasCanPlay = true;
            creative.dom.vid.addEventListener('canplay', startMuted0, false);
            // TweenLite.to(creative.dom.preloadShape, 1, {autoAlpha:0});
        }
    }

    creative.dom.vid.style.visibility = 'visible';
    animationVid()

    var cuePoints = [
    {
        "point":0.20,
        "fired":false
    },
    {
        "point":cue1,
        "fired":false
    },
    {
        "point":cue2,
        "fired":false
    },
    {
        "point":cue3,
        "fired":false
    },
    {
        "point":cue4,
        "fired":false
    }];

    var onRender = function(){

    if (frames == "2"){

      cuePoints[2].fired = true;
      cuePoints[3].fired = true;
      cuePoints[4].fired = true;

    }

    if (frames == "3") {

      cuePoints[3].fired = true;
      cuePoints[4].fired = true;

    }

    if (frames == "4") {

      cuePoints[4].fired = true;

    }

        if (!creative.dom.vid.paused) {
            // //console.log(creative.dom.video0.vid.currentTime);

             if
            (creative.dom.vid.currentTime > cuePoints[0].point && cuePoints[0].fired === false) {
                cuePoints[0].fired = true;
                ////console.log( "Copy 1 Fade In - 0.3sec");
                tl.play('start');
            }
            else if
            (creative.dom.vid.currentTime > cuePoints[1].point && cuePoints[1].fired === false) {
                cuePoints[1].fired = true;
                ////console.log(  "Copy 1 Fade Out - 0.3sec");
                tl.play('frm2');
            }
            else if
            (creative.dom.vid.currentTime > cuePoints[2].point && cuePoints[2].fired === false) {
                cuePoints[2].fired = true;
                ////console.log("Copy 2 Fade In - 0.3sec");
                tl.play('frm3');
            }
            else if
            (creative.dom.vid.currentTime > cuePoints[3].point && cuePoints[3].fired === false) {
                cuePoints[3].fired = true;
                ////console.log("Copy 2 Fade Out - 0.3sec");
                tl.play('frm4');
            }
            else if
            (creative.dom.vid.currentTime > cuePoints[4].point && cuePoints[4].fired === false) {
                cuePoints[4].fired = true;
                ////console.log("Endframe animation start");
                tl.play('frm5');
            }
        }
        requestAnimationFrame(onRender);
    }
    requestAnimationFrame(onRender);
}




// ---------------------------------------------------------------------------------
// TIMELINE ANIMATION
// ---------------------------------------------------------------------------------

function loop(){
    //console.log(counter + " " + loops)
    if (counter <= loops ){

        show()
    }

}

var counter = 1;
var frameNum = 1;

function animationVid(){

    //console.log("animation")
    counter++
    frameNum = 1

    TweenLite

    tl = new TimelineMax();

    tl.addLabel('start')

    tl.to('#frm1,#frm2,#frm3,#frm4,#frm5,#cta1,#cta2,#cta3,#cta4,#cta5,#termsClick',0, {opacity:0})
    tl.to('#frm1Copy,#frm2Copy,#frm3Copy,#frm4Copy,#frm5Copy,#terms,#addImg',0, {opacity:0})
    tl.to('#frm1Img,#frm2Img,#frm3Img,#frm4Img,#frm5Img,#addImg',0, {opacity:0})
    tl.to('#cta1',0, {top:ctaFrm1top, left:ctaFrm1left})
    tl.to('#cta2',0, {top:ctaFrm2top, left:ctaFrm2left})
    tl.to('#cta3',0, {top:ctaFrm3top, left:ctaFrm3left})
    tl.to('#cta4',0, {top:ctaFrm4top, left:ctaFrm4left})
    tl.to('#cta5',0, {top:ctaFrm5top, left:ctaFrm5left})

    tl.to('#loaderCon',0.5, {opacity:0})
    tl.to('#logo',0.5, {opacity:1},"-=0.5")

    tl.addLabel('frm1');

    tl.to('#frm1',0, {opacity:1},"-=0.5")
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm1Copy',0.5, {opacity:1,top:frm1CopyTop})
    tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm1TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 2
    })

    tl.pause()

    tl.addLabel('frm2');
    tl.call(copyINOUT, [], this,"+=" + frm1Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(addImgAn, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm2',0, {opacity:1})
    tl.call(imgAn, [], this)


    tl.to('#frm2Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm2TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 3
    })

    tl.pause()
    tl.addLabel('frm3');
    tl.call(copyINOUT, [], this,"+=" + frm2Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm3',0, {opacity:1})
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm3Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm3TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 4
    })

    tl.pause()
    tl.addLabel('frm4');
    tl.call(copyINOUT, [], this,"+=" + frm3Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm4',0, {opacity:1})
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm4Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm4TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 5
    })

    tl.pause()
    tl.addLabel('frm5');
    tl.call(copyINOUT, [], this,"+=" + frm4Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm5',0, {opacity:1})
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm5Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm5TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 6
    })
    //tl.call(loop, [], this, "+=" + frm5Dwell)


}

function animation(){

    //console.log("animation")
    counter++
    frameNum = 1

    TweenLite

    tl = new TimelineMax();

    tl.to('#frm1,#frm2,#frm3,#frm4,#frm5,#cta1,#cta2,#cta3,#cta4,#cta5,#termsClick',0, {opacity:0})
    tl.to('#frm1Copy,#frm2Copy,#frm3Copy,#frm4Copy,#frm5Copy,#terms,#addImg',0, {opacity:0})
    tl.to('#frm1Img,#frm2Img,#frm3Img,#frm4Img,#frm5Img,#addImg',0, {opacity:0})
    tl.to('#cta1',0, {top:ctaFrm1top, left:ctaFrm1left})
    tl.to('#cta2',0, {top:ctaFrm2top, left:ctaFrm2left})
    tl.to('#cta3',0, {top:ctaFrm3top, left:ctaFrm3left})
    tl.to('#cta4',0, {top:ctaFrm4top, left:ctaFrm4left})
    tl.to('#cta5',0, {top:ctaFrm5top, left:ctaFrm5left})

    tl.to('#loaderCon',0.5, {opacity:0})
    tl.to('#logo',0.5, {opacity:1},"-=0.5")

    if (frames == 5){
    //tl.addLabel('start')

    tl.addLabel('frm1');

    tl.to('#frm1',0, {opacity:1},"-=0.5")
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm1Copy',0.5, {opacity:1})
    tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm1TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 2
    })


    tl.addLabel('frm2');
    tl.call(copyINOUT, [], this,"+=" + frm1Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(addImgAn, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm2',0, {opacity:1})
    tl.call(imgAn, [], this)


    tl.to('#frm2Copy',0.5, {opacity:1})

    tl.to('#termsClick',0.5, {opacity:frm2TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 3
    })


    tl.addLabel('frm3');
    tl.call(copyINOUT, [], this,"+=" + frm2Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm3',0, {opacity:1})
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm3Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm3TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 4
    })


    tl.addLabel('frm4');
    tl.call(copyINOUT, [], this,"+=" + frm3Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm4',0, {opacity:1})
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm4Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm4TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 5
    })


    tl.addLabel('frm5');
    tl.call(copyINOUT, [], this,"+=" + frm4Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm5',0, {opacity:1})
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm5Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm5TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 6
    })
    tl.call(loop, [], this, "+=" + frm5Dwell)

    } else if (frames == 4) {

    tl.addLabel('frm1');

    tl.to('#frm1',0, {opacity:1},"-=0.5")
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm1Copy',0.5, {opacity:1})
    tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm1TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 2
    })


    tl.addLabel('frm2');
    tl.call(copyINOUT, [], this,"+=" + frm1Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(addImgAn, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm2',0, {opacity:1})
    tl.call(imgAn, [], this)


    tl.to('#frm2Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm2TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 3
    })


    tl.addLabel('frm3');
    tl.call(copyINOUT, [], this,"+=" + frm2Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm3',0, {opacity:1})
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm3Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm3TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 4
    })


    tl.addLabel('frm4');
    tl.call(copyINOUT, [], this,"+=" + frm3Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm4',0, {opacity:1})
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm4Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm4TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 5
    })
    tl.call(loop, [], this, "+=" + frm4Dwell)

    } else if (frames == 3) {

    tl.addLabel('frm1');

    tl.to('#frm1',0, {opacity:1},"-=0.5")
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm1Copy',0.5, {opacity:1})
    tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm1TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 2
    })


    tl.addLabel('frm2');
    tl.call(copyINOUT, [], this,"+=" + frm1Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(addImgAn, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm2',0, {opacity:1})
    tl.call(imgAn, [], this)


    tl.to('#frm2Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm2TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 3
    })


    tl.addLabel('frm3');
    tl.call(copyINOUT, [], this,"+=" + frm2Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm3',0, {opacity:1})
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm3Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm3TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 4
    })
    tl.call(loop, [], this, "+=" + frm3Dwell)

    } else if (frames == 2) {

    tl.addLabel('frm1');

    tl.to('#frm1',0, {opacity:1},"-=0.5")
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm1Copy',0.5, {opacity:1})
    tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm1TermsIN},"-=0.5")
    tl.add(function(){
    frameNum = 2
    })


    tl.addLabel('frm2');
    tl.call(copyINOUT, [], this,"+=" + frm1Dwell )
    //tl.call(imgAn1, [], this)
    tl.call(addImgAn, [], this)
    tl.call(ctaVis, [], this)
    tl.to('#frm2',0, {opacity:1})
    tl.call(imgAn, [], this)


    tl.to('#frm2Copy',0.5, {opacity:1})
    //tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm2TermsIN},"-=0.5")
    tl.add(
    tl.call(loop, [], this, "+=" + frm2Dwell)

    } else {

    tl.addLabel('frm1');

    tl.to('#frm1',0, {opacity:1},"-=0.5")
    tl.call(imgAn, [], this)
    tl.call(addImgAn, [], this)

    tl.to('#frm1Copy',0.5, {opacity:1})
    tl.call(ctaVis, [], this,"-=0.5")
    tl.to('#termsClick',0.5, {opacity:frm1TermsIN},"-=0.5")

    tl.call(loop, [], this, "+=" + frm1Dwell)
}

}

// ---------------------------------------------------------------------------------
// CTA VIS
// ---------------------------------------------------------------------------------

function ctaVis(){

    //console.log(frm5ctaIN)

    tl = new TimelineMax();

    if (frameNum == 1){

      if (frm1ctaIN == "1" & ctaVisible == false){

        tl.to('#cta1',0.3, {opacity:frm1ctaIN})
        ctaVisible = true

      } else if (frm1ctaIN == "1" & ctaVisible == true){

        tl.to('#cta1',0.3, {opacity:frm1ctaIN})

        ctaVisible = true

    } else if (frm1ctaIN == "0" & ctaVisible == false){

      ctaVisible = false

    } else if (frm1ctaIN == "0" & ctaVisible == true){

      ctaVisible = false

      }
    }

    if (frameNum == 2){

      if (frm2ctaIN == "1" & ctaVisible == false){

        tl.to('#cta2',0.5, {opacity:frm2ctaIN})
        ctaVisible = true

      } else if (frm2ctaIN == "1" & ctaVisible == true){
      tl.to('#cta2',0.5, {opacity:frm2ctaIN})
      tl.to('#cta1',0.5, {opacity:0},"-=0.1")

        ctaVisible = true

    } else if (frm2ctaIN == "0" & ctaVisible == false){

      ctaVisible = false

    } else if (frm2ctaIN == "0" & ctaVisible == true){

      tl.to('#cta1',0.5, {opacity:0})
      ctaVisible = false

      }
    }

    if (frameNum == 3){

      if (frm3ctaIN == "1" & ctaVisible == false){

        tl.to('#cta3',0.5, {opacity:frm3ctaIN})
        ctaVisible = true

      } else if (frm3ctaIN == "1" & ctaVisible == true){

        tl.to('#cta3',0.5, {opacity:frm3ctaIN})
        tl.to('#cta2',0.5, {opacity:0},"-=0.1")

        ctaVisible = true

    } else if (frm3ctaIN == "0" & ctaVisible == false){

      ctaVisible = false

    } else if (frm3ctaIN == "0" & ctaVisible == true){

      tl.to('#cta2',0.5, {opacity:0})
      ctaVisible = false

      }
    }

    if (frameNum == 4){

      if (frm4ctaIN == "1" & ctaVisible == false){

        tl.to('#cta4',0.5, {opacity:frm4ctaIN})
        ctaVisible = true
      //  console.log("cta in + false")
      } else if (frm4ctaIN == "1" & ctaVisible == true){

      //  console.log("cta in + true")

        tl.to('#cta4',0.5, {opacity:frm4ctaIN})
        tl.to('#cta3',0.5, {opacity:0},"-=0.1")

        ctaVisible = true

    } else if (frm4ctaIN == "0" & ctaVisible == false){

    //  console.log("cta out + false")

      ctaVisible = false

    } else if (frm4ctaIN == "0" & ctaVisible == true){
      //console.log("cta out + true")

      tl.to('#cta3',0.5, {opacity:0})
      ctaVisible = false

      }
    }

    if (frameNum == 5){

      if (frm5ctaIN == "1" & ctaVisible == false){

        tl.to('#cta5',0.5, {opacity:frm5ctaIN})
        ctaVisible = true

      } else if (frm5ctaIN == "1" & ctaVisible == true){

        tl.to('#cta5',0.5, {opacity:frm5ctaIN})
        tl.to('#cta4',0.5, {opacity:0},"-=0.1")


        ctaVisible = true

    } else if (frm5ctaIN == "0" & ctaVisible == false){

      ctaVisible = false

    } else if (frm5ctaIN == "0" & ctaVisible == true){

      tl.to('#cta4',0.5, {opacity:0})
      ctaVisible = false

      }
    }

}

// ---------------------------------------------------------------------------------
// IMAGE ANIMATION
// ---------------------------------------------------------------------------------

function imgAn(){


    if (frameNum == 1){

        //console.log(frameNum)

        if (frm1ImgAn == "fade"){

	       TweenLite.to('#frm1Img', frm1ImgAnTime, {opacity:1})

        } else if (frm1ImgAn == "zoom in"){

	       TweenLite.to('#frm1Img', 0.5, {opacity:1})
	       TweenLite.to('#frm1Img', frm1ImgAnTime, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})

        } else if (frm1ImgAn == "zoom out"){

	       TweenLite.to('#frm1Img', 0.5, {opacity:1})
	       TweenLite.to('#frm1Img', frm1ImgAnTime, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})

        } else if (frm1ImgAn == "png"){

	       var tl1 = new TimelineMax();
	       TweenLite.to('#frm1Img',0, {y:0,opacity:1})
		      var frm1AddImgLength = document.getElementById("frm1Img").clientHeight;
		      var frm1AddImgAct = frm1AddImgLength - adHeight;
		      var frm1AddImgFrames = frm1AddImgAct/adHeight;

            tl1.to("#frm1Img", frm1ImgAnTime, { ease: SteppedEase.config(frm1AddImgFrames), y: -frm1AddImgAct});

        }

    }

    if (frameNum == 2){

        //console.log(frameNum)

        if (frm2ImgAn == "fade"){

            TweenLite.to('#frm2Img', frm2ImgAnTime, {opacity:1})

        } else if (frm2ImgAn == "zoom in"){

            TweenLite.to('#frm2Img', 0.5, {opacity:1})
            TweenLite.to('#frm2Img', frm2ImgAnTime, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})

        } else if (frm2ImgAn == "zoom out"){

            TweenLite.to('#frm2Img', 0.5, {opacity:1})
            TweenLite.to('#frm2Img', frm2ImgAnTime, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})

        } else if (frm2ImgAn == "png"){

        var tl2 = new TimelineMax();
        TweenLite.to('#frm2Img',0, {y:0,opacity:1})
        var frm2AddImgLength = document.getElementById("frm2Img").clientHeight;
        var frm2AddImgAct = frm2AddImgLength - adHeight;
        var frm2AddImgFrames = frm2AddImgAct/adHeight;
        tl2.to("#frm2Img", frm2ImgAnTime, { ease: SteppedEase.config(frm2AddImgFrames), y: -frm2AddImgAct});

        }

    }

    if (frameNum == 3){

        //console.log(frameNum)

        if (frm3ImgAn == "fade"){

            TweenLite.to('#frm3Img', frm3ImgAnTime, {opacity:1})

        } else if (frm3ImgAn == "zoom in"){

            TweenLite.to('#frm3Img', 0.5, {opacity:1})
            TweenLite.to('#frm3Img', frm3ImgAnTime, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})

        } else if (frm3ImgAn == "zoom out"){

            TweenLite.to('#frm3Img', 0.5, {opacity:1})
            TweenLite.to('#frm3Img', frm3ImgAnTime, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})

        } else if (frm3ImgAn == "png"){

            var tl3 = new TimelineMax();
            TweenLite.to('#frm3Img',0, {y:0,opacity:1})
            var frm3AddImgLength = document.getElementById("frm3Img").clientHeight;
            var frm3AddImgAct = frm3AddImgLength - adHeight;
            var frm3AddImgFrames = frm3AddImgAct/adHeight;
            tl3.to("#frm3Img", frm3ImgAnTime, { ease: SteppedEase.config(frm3AddImgFrames), y: -frm3AddImgAct});
        }

    }

    if (frameNum == 4){

        //console.log(frameNum)

        if (frm4ImgAn == "fade"){

            TweenLite.to('#frm4Img', frm4ImgAnTime, {opacity:1})

        } else if (frm4ImgAn == "zoom in"){

            TweenLite.to('#frm4Img', 0.5, {opacity:1})
            TweenLite.to('#frm4Img', frm4ImgAnTime, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})

        } else if (frm4ImgAn == "zoom out"){

            TweenLite.to('#frm4Img', 0.5, {opacity:1})
            TweenLite.to('#frm4Img', frm4ImgAnTime, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})

        } else if (frm4ImgAn == "png"){

            var tl4 = new TimelineMax();
            TweenLite.to('#frm4Img',0, {y:0,opacity:1})
            var frm4AddImgLength = document.getElementById("frm4Img").clientHeight;
            var frm4AddImgAct = frm4AddImgLength - adHeight;
            var frm4AddImgFrames = frm4AddImgAct/adHeight;
            tl4.to("#frm4Img", frm4ImgAnTime, { ease: SteppedEase.config(frm4AddImgFrames), y: -frm4AddImgAct});
        }

    }

    if (frameNum == 5){

        //console.log(frameNum)

        if (frm5ImgAn == "fade"){

            TweenLite.to('#frm5Img', frm5ImgAnTime, {opacity:1})

        } else if (frm5ImgAn == "zoom in"){

            TweenLite.to('#frm5Img', 0.5, {opacity:1})
            TweenLite.to('#frm5Img', frm5ImgAnTime, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})

        } else if (frm5ImgAn == "zoom out"){

            TweenLite.to('#frm5Img', 0.5, {opacity:1})
            TweenLite.to('#frm5Img', frm5ImgAnTime, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})

        } else if (frm5ImgAn == "png"){

            var tl5 = new TimelineMax();
            TweenLite.to('#frm5Img',0, {y:0,opacity:1})
            var frm5AddImgLength = document.getElementById("frm5Img").clientHeight;
            var frm5AddImgAct = frm5AddImgLength - adHeight;
            var frm5AddImgFrames = frm5AddImgAct/adHeight;
            tl5.to("#frm5Img", frm5ImgAnTime, { ease: SteppedEase.config(frm5AddImgFrames), y: -frm5AddImgAct});
        }
    }

}

/*function imgAn1(){


    if (frameNum == 2){

        //console.log(frameNum)

        if (frm1ImgAn == "png"){

        TweenLite.to('#frm1Img',0, {opacity:0})

        }

    }

    if (frameNum == 3){

        //console.log(frameNum)

        if (frm2ImgAn == "png"){

            TweenLite.to('#frm2Img',0, {opacity:0})

        }

    }

    if (frameNum == 4){

        //console.log(frameNum)

        if (frm3ImgAn == "png"){

            TweenLite.to('#frm3Img',0, {opacity:0})

        }

    }

    if (frameNum == 5){

        //console.log(frameNum)

        if (frm4ImgAn == "png"){

            TweenLite.to('#frm4Img',0, {opacity:0})

        }
    }

}*/

// ---------------------------------------------------------------------------------
// DETERMINES COPY FRAMES STAY ON THROUGH MULTIPLE FRAMES - NOT 0 OR 1 ANYMORE! THE FRAME NUMBER -1 is the frame COPY GOES OUT (FOR EG: FRAME 2 COPY STAYS TO FRAME 4, IN THE ARRAY PUT 3)
// ---------------------------------------------------------------------------------

function copyINOUT(){

    var frm1CopyOutAct = frm1CopyOut +1
    var frm2CopyOutAct = frm2CopyOut +1
    var frm3CopyOutAct = frm3CopyOut +1
    var frm4CopyOutAct = frm4CopyOut +1
    var frm5CopyOutAct = frm5CopyOut +1

//console.log(frameNum)
//console.log(frm1CopyOut)
//console.log(frm1CopyOutAct)

    if (frm1CopyOut == 0 & frameNum == 2){

        TweenLite.to('#frm1Copy',0.5, {opacity:0})

            copy1OUT = true

    } else if (frm1CopyOutAct == frameNum){
            //console.log("copy1 out with specific frame")
        TweenLite.to('#frm1Copy',0.5, {opacity:0})
        copy1OUT = true

    } else if (copy1OUT == false & frameNum == 2) {
            //console.log("copy1 stays")
        TweenLite.to('#frm1Copy',0.5, {opacity:1})

    }


        if (frm2CopyOut == 0 & frameNum == 3){
                //console.log("copy2 out")
        TweenLite.to('#frm2Copy',0.5, {opacity:0})
        copy21OUT = true

    } else if (frm2CopyOutAct == frameNum){
            //console.log("copy2 out with specific frame")
        TweenLite.to('#frm2Copy',0.5, {opacity:0})
        copy2OUT = true

    } else if (copy2OUT == false & frameNum == 3) {
            //console.log("copy1 stays")
        TweenLite.to('#frm2Copy',0.5, {opacity:1})

    }

       if (frm3CopyOut == 0 & frameNum == 4){

        TweenLite.to('#frm3Copy',0.5, {opacity:0})
        copy3OUT = true

    } else if (frm3CopyOutAct == frameNum){


        TweenLite.to('#frm3Copy',0.5, {opacity:0})
            copy3OUT = true

    } else if (copy3OUT == false & frameNum == 4) {

        TweenLite.to('#frm3Copy',0.5, {opacity:1})

    }

       if (frm4CopyOut == 0 & frameNum == 5){

        TweenLite.to('#frm4Copy',0.5, {opacity:0})
        copy4OUT = true

    } else if (frm4CopyOutAct == frameNum){

        TweenLite.to('#frm4Copy',0.5, {opacity:0})
        copy4OUT = true

    } else if (copy4OUT == false & frameNum == 5) {

        TweenLite.to('#frm4Copy',0.5, {opacity:1})

    }

       if (frm5CopyOut == 0 & frameNum == 6){

        TweenLite.to('#frm5Copy',0.5, {opacity:0})
        copy5OUT = true

    } else if (frm5CopyOutAct == frameNum){

        TweenLite.to('#frm5Copy',0.5, {opacity:0})
        copy5OUT = true

    } else if (copy5OUT == false & frameNum == 6) {

        TweenLite.to('#frm5Copy',0.5, {opacity:1})

    }


}

// ---------------------------------------------------------------------------------
// ADDITIONAL IMAGE FADING IN/OUT PER FRAME
// ---------------------------------------------------------------------------------


/*function addImgAn(){

    if (frameNum == 1){

        if (frm1AddImgIN == 1){

            TweenLite.to('#addImg',0.5, {opacity:1})
            TweenLite.to('#addImg',0.5, {left:0,top:0})

        } else {

            TweenLite.to('#addImg',0.5, {opacity:frm1AddImgIN})

        }

    }


    if (frameNum == 2){

        if (frm2AddImgIN == 1){

            TweenLite.to('#addImg',0.5, {opacity:1})
            TweenLite.to('#addImg',0.5, {left:0,top:0})

        } else {

            TweenLite.to('#addImg',0.5, {opacity:frm2AddImgIN})

        }

    }

    if (frameNum == 3){

        if (frm3AddImgIN == 1){

            TweenLite.to('#addImg',0.5, {opacity:1})
            TweenLite.to('#addImg',0.5, {left:0,top:0})

        } else {

            TweenLite.to('#addImg',0.5, {opacity:frm3AddImgIN})

        }

    }

    if (frameNum == 4){

        if (frm4AddImgIN == 1){

            TweenLite.to('#addImg',0.5, {opacity:1})
            TweenLite.to('#addImg',0.5, {left:0,top:0})

        } else {

            TweenLite.to('#addImg',0.5, {opacity:frm4AddImgIN})

        }

    }

    if (frameNum == 5){

        if (frm5AddImgIN == 1){

            TweenLite.to('#addImg',0.5, {opacity:1})
            TweenLite.to('#addImg',0.5, {left:0,top:0})

        } else {

            TweenLite.to('#addImg',0.5, {opacity:frm5AddImgIN})

        }

    }

}*/

function addImgAn(){


    if (frameNum == 1){

        //console.log(frameNum)

        if (frm1AddImgAn == "0"){

            TweenLite.to('#addImg',0.5, {opacity:0})

        } else if (frm1AddImgAn == "fade"){

	       TweenLite.to('#addImg', frm1AddImgAnTime, {opacity:1})

        } else if (frm1AddImgAn == "zoom in"){

	       TweenLite.to('#addImg', 0.5, {opacity:1})
	       TweenLite.to('#addImg', frm1AddImgAnTime, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})

        } else if (frm1AddImgAn == "zoom out"){

	       TweenLite.to('#addImg', 0.5, {opacity:1})
	       TweenLite.to('#addImg', frm1AddImgAnTime, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})

        } else if (frm1AddImgAn == "png"){

	       var tl1Add = new TimelineMax();
	       TweenLite.to('#addImg',0, {x:0,opacity:1})
		      var frm1AddImgLength1 = document.getElementById("addImg").clientWidth;
		      var frm1AddImgAct1 = frm1AddImgLength1 - adWidth;
		      var frm1AddImgFrames1 = frm1AddImgAct/adWidth;

            tl1Add.to("#addImg", frm1AddImgAnTime, { ease: SteppedEase.config(frm1AddImgFrames1), x: -frm1AddImgAct1});

        }

    }

    if (frameNum == 2){

        //console.log(frameNum)

        if (frm2AddImgAn == "0"){

            TweenLite.to('#addImg',0.5, {opacity:0})

        } else if (frm2AddImgAn == "fade"){

	       TweenLite.to('#addImg', frm2AddImgAnTime, {opacity:1})

        } else if (frm2AddImgAn == "zoom in"){

	       TweenLite.to('#addImg', 0.5, {opacity:1})
	       TweenLite.to('#addImg', frm2AddImgAnTime, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})

        } else if (frm2AddImgAn == "zoom out"){

	       TweenLite.to('#addImg', 0.5, {opacity:1})
	       TweenLite.to('#addImg', frm2AddImgAnTime, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})

        } else if (frm2AddImgAn == "png"){

	       var tl2Add = new TimelineMax();
	       TweenLite.to('#addImg',0, {x:0,opacity:1})
		      var frm2AddImgLength1 = document.getElementById("addImg").clientWidth;
		      var frm2AddImgAct1 = frm2AddImgLength1 - adWidth;
		      var frm2AddImgFrames1 = frm2AddImgAct/adWidth;

            tl2Add.to("#addImg", frm2AddImgAnTime, { ease: SteppedEase.config(frm2AddImgFrames1), x: -frm2AddImgAct1});

        }

    }

    if (frameNum == 3){

        //console.log(frameNum)

        if (frm3AddImgAn == "0"){

            TweenLite.to('#addImg',0.5, {opacity:0})

        } else if (frm3AddImgAn == "fade"){

	       TweenLite.to('#addImg', frm3AddImgAnTime, {opacity:1})

        } else if (frm3AddImgAn == "zoom in"){

	       TweenLite.to('#addImg', 0.5, {opacity:1})
	       TweenLite.to('#addImg', frm3AddImgAnTime, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})

        } else if (frm3AddImgAn == "zoom out"){

	       TweenLite.to('#addImg', 0.5, {opacity:1})
	       TweenLite.to('#addImg', frm3AddImgAnTime, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})

        } else if (frm3AddImgAn == "png"){

	       var tl3Add = new TimelineMax();
	       TweenLite.to('#addImg',0, {x:0,opacity:1})
		      var frm3AddImgLength1 = document.getElementById("addImg").clientWidth;
		      var frm3AddImgAct1 = frm3AddImgLength1 - adWidth;
		      var frm3AddImgFrames1 = frm3AddImgAct/adWidth;

            tl3Add.to("#addImg", frm3AddImgAnTime, { ease: SteppedEase.config(frm3AddImgFrames1), x: -frm3AddImgAct1});

        }

    }

    if (frameNum == 4){

        //console.log(frameNum)

        if (frm4AddImgAn == "0"){

            TweenLite.to('#addImg',0.5, {opacity:0})

        } else if (frm4AddImgAn == "fade"){

	       TweenLite.to('#addImg', frm4AddImgAnTime, {opacity:1})

        } else if (frm4AddImgAn == "zoom in"){

	       TweenLite.to('#addImg', 0.5, {opacity:1})
	       TweenLite.to('#addImg', frm4AddImgAnTime, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})

        } else if (frm4AddImgAn == "zoom out"){

	       TweenLite.to('#addImg', 0.5, {opacity:1})
	       TweenLite.to('#addImg', frm4AddImgAnTime, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})

        } else if (frm4AddImgAn == "png"){

	       var tl4Add = new TimelineMax();
	       TweenLite.to('#addImg',0, {x:0,opacity:1})
		      var frm4AddImgLength1 = document.getElementById("addImg").clientWidth;
		      var frm4AddImgAct1 = frm4AddImgLength1 - adWidth;
		      var frm4AddImgFrames1 = frm4AddImgAct/adWidth;

            tl4Add.to("#addImg", frm4AddImgAnTime, { ease: SteppedEase.config(frm4AddImgFrames1), x: -frm4AddImgAct1});

        }

    }

    if (frameNum == 5){

        //console.log(frameNum)

        if (frm5AddImgAn == "0"){

            TweenLite.to('#addImg',0.5, {opacity:0})

        } else if (frm5AddImgAn == "fade"){

	       TweenLite.to('#addImg', frm5AddImgAnTime, {opacity:1})

        } else if (frm5AddImgAn == "zoom in"){

	       TweenLite.to('#addImg', 0.5, {opacity:1})
	       TweenLite.to('#addImg', frm5AddImgAnTime, {scaleX:1.2, scaleY:1.2, transformOrigin:"50% 50%"})

        } else if (frm5AddImgAn == "zoom out"){

	       TweenLite.to('#addImg', 0.5, {opacity:1})
	       TweenLite.to('#addImg', frm5AddImgAnTime, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"})

        } else if (frm5AddImgAn == "png"){

	       var tl5Add = new TimelineMax();
	       TweenLite.to('#addImg',0, {x:0,opacity:1})
		      var frm5AddImgLength1 = document.getElementById("addImg").clientWidth;
		      var frm5AddImgAct1 = frm5AddImgLength1 - adWidth;
		      var frm5AddImgFrames1 = frm5AddImgAct/adWidth;

            tl5Add.to("#addImg", frm5AddImgAnTime, { ease: SteppedEase.config(frm5AddImgFrames1), x: -frm5AddImgAct1});

        }

    }

}