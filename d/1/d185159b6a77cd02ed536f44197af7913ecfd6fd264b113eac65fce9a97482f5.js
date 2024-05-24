/* Empty file for Analytic Ping */dow.Promise);
  
  if (window.Promise) {
    var debounce = function debounce(func, delay) {
      var debounceTimer;
      return function () {
        var context = this;
        var args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
          return func.apply(context, args);
        }, delay);
      };
    };

    var replaceHeights = function(newHeight) {
      var slides = document.querySelectorAll('.cfaes-homepage-slide');
      slides.forEach(function(slide) {
        if (window.innerWidth < 640) {
          slide.style.height = newHeight + 'px';
          if (slide.classList.contains('is-image-slide')) {
            slide.querySelector('.cfaes-homepage-slideImage.is-mobile').style.height = newHeight + 'px';
          }
        } else {
          slide.style.height = '350px';
        }
      });
    };

    var calcSlideHeight = function(slide) {
      var isMarquee = slide.classList.contains('is-marquee-slide');
      var notCloned = !slide.classList.contains('slick-cloned');
      
      return new Promise(function(resolve, reject) {
        if (isMarquee && notCloned) {
          var image = slide.querySelector('.cfaes-homepage-slideImage img');
          var marquee = slide.querySelector('.cfaes-homepage-slideMarquee');
          if (!image.complete) {
            image.onload = function() {
              var newSlideHeight = image.offsetHeight + marquee.offsetHeight + (15 * 2);
              resolve(newSlideHeight);
            };
          } else {
            var newSlideHeight = image.offsetHeight + marquee.offsetHeight + (15 * 2);
            resolve(newSlideHeight);
          } 
        }
      });
    };

    var setSlideHeights = function(slides) {
      slides.forEach(function(slide) {
        calcSlideHeight(slide).then(function(value) {
          replaceHeights(value);
        });
      });
    };

    var slideshowInit = new Promise(function (resolve, reject) {
      var $slideshow = $('.cfaes-homepage-slideshow').slick({
        autoplay: true,
        autoplaySpeed: 5000
      });
      resolve($slideshow);
    });

    slideshowInit.then(function (value) {
      var slides = document.querySelectorAll('.cfaes-homepage-slide');
      setSlideHeights(slides);
      window.addEventListener('resize', debounce(function() {
        setSlideHeights(slides);
      }, 500)); 
    });
  } else {
    $('.cfaes-homepage-slideshow').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true
    });

    var areClipPathShapesSupported = function () {
      var base = 'clipPath';
      var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];
      var properties = [ base ];
      var testElement = document.createElement( 'testelement' );
      var attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

      for ( var i = 0, l = prefixes.length; i < l; i++ ) {
        var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!
        properties.push( prefixedProperty );
      }

      for ( var i = 0, l = properties.length; i < l; i++ ) {
        var property = properties[i];
        if ( testElement.style[property] === '' ) {
          testElement.style[property] = attribute;
          if ( testElement.style[property] !== '' ) {
            return true;
          }
        }
      }
      return false;
    };

    if (!areClipPathShapesSupported()) {
      $('body').addClass('no-clip-path-support');
    }
  }
})(jQuery);

a.p+"c/"+({0:"slidercontrol-jfe",1:"timing",2:"fileupload",3:"relevantid",4:"matrix",5:"slider",6:"mc",7:"te",8:"scoring",9:"hotspot",10:"hl",11:"cs",12:"ro",13:"fancybox",14:"toc",15:"ss",16:"db",17:"recaptchav3",18:"draw",19:"hmap",20:"pgr",21:"meta",22:"captcha",23:"response-summary",24:"mp",25:"preview",26:"mockForm",27:"sbs",28:"dd",29:"jsApi",30:"slide",31:"flip",32:"fade",33:"barrel-roll",34:"focus-handler",38:"prototype",39:"advance-button-template"}[e]||e)+"."+{0:"536fe91a6b15d3dd90d3",1:"7ac17a8bb681d41d88cd",2:"6b064af97b8e223fa653",3:"6cc1a1d6af8a6c0eef40",4:"a3cc3e1b5b9f98311c1b",5:"c41d9fb56cb127b8320c",6:"47e64f25073834543fb7",7:"407876f293eb6773b886",8:"2a903cb0b863d9b01d90",9:"2ac59f811f4685dd0e05",10:"ec7dc63984cdd1d35435",11:"8e7e42aa8eeb79361fa1",12:"384995d9a804e9f757eb",13:"860caacf05669601df86",14:"0b7b076029e46011f93d",15:"c6c61733715dc5f51a98",16:"e682e671da0e1ae948fb",17:"7e71f876f17ecc06b903",18:"82a3c4f0a78684762d2f",19:"7f71933ff4e5422f9ea3",20:"4cfd23aa3826597516c5",21:"05d7f566d636db6c78b8",22:"f1c9aa148eb9f34dc889",23:"33efe183f41b9170dacf",24:"9e5fce679d68730a2a22",25:"573497891b25ae4d765c",26:"5e67fcabcbd1351da92c",27:"3706f67302a3ceebdb3a",28:"4254dc8f9afa6fbd830c",29:"5ee0a9ddf77a7899abc4",30:"fdcb268837ebb46858af",31:"307581adb42d25e68256",32:"60d77dbd7e14f2f11a5b",33:"8c42194a89e3f586d103",34:"e1e41ff5cff918b5ad0a",38:"45d699cfb71157c2bc5a",39:"9enction(){return e};return a.d(c,"a",c),c},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="",a.oe=function(e){throw console.error(e),e}}([]);</script>
  <script src="/jfe/static/dist/vendor.50397b8d9ede0752e9a7.js" crossorigin="anonymous"></script>
  <script src="/jfe/static/dist/jfe.8325e0500695538e7f2c.js" crossorigin="anonymous"></script>

<link href="/jfe/themes/templated-skins/qualtrics.base:osu.6800176968:null/version-1704925370881-b496b5/stylesheet.css" rel="stylesheet">

<link id="rtlStyles" rel="stylesheet" type="text/css">
<style id="customStyles"></style>

<style>
.JFEScope .questionFocused   .advanceButtonContainer {transition:opacity .3s!important;visibility:unset;opacity:1}
.JFEScope .questionUnfocused .advanceButtonContainer, .advanceButtonContainer {transition:opacity .3s!important;visibility:hidden;opacity:0}
.Skin .Bipolar .bipolar-mobile-header, .Skin .Bipolar .desktop .bipolar-mobile-header, .Skin .Bipolar .mobile .ColumnLabelHeader {display: none}

 /* Hide mobile preview scrollbar for Chrome, Safari and Opera */
html.MobilePreviewFrame::-webkit-scrollbar { display: none; }

/* Hide mobile preview scrollbar for IE and Edge */
html.MobilePreviewFrame { -ms-overflow-style: none; scrollbar-width: none; }
</style>
<style type="text/css">.accessibility-hidden{height:0;width:0;overflow:hidden;position:absolute;left:-999px}</style>
<div id="polite-announcement" class="accessibility-hidden" aria-live="polite" aria-atomic="true"></div>
<div id="assertive-announcement" class="accessibility-hidden" aria-live="assertive" role="alert" aria-atomic="true"></div>
<script type="text/javascript">
  (function () {
    var o = {};
    try {
        Object.defineProperty(o,'compat',{value:true,writable:true,enumerable:true,configurable:true});
    } catch (e) {};
    if (o.compat !== true || document.addEventListener === undefined) {
      window.location.pathname = '/jfe/incompatibleBrowser';
    }
  })();
  QSettings.ab = false;
  document.title = "Office of Marketing and Communications Digital Accessibility Request";
  
  (function(s) {
    QSettings.bootstrapSkin = s;
    var sp = document.getElementById('skinPrefetch');
    if (sp) {
      sp.innerHTML = s;
    }
  })("\n<meta name=\"HandheldFriendly\" content=\"true\" />\n<meta name = \"viewport\" content = \"user-scalable = yes, maximum-scale=10, minimum-scale=1, initial-scale = 1, width = device-width\" />\n<div class='Skin'>\n\t<div id=\"Overlay\"></div>\n\t<div id=\"Wrapper\">\n\n\t\t<div class='SkinInner'>\n\t\t\t<div id='LogoContainer'>\n\t\t\t\t<div id='Logo'><img src=\"https://jfe-cdn.qualtrics.com/themes/skins/osu/osu5/version-1534905121706-84d626/files/logo.png\" /></div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div id='HeaderContainer'>\n\t\t\t\t\n\t\t\t\t<div id='Header'>{~Header~}</div>\n\t\t\t</div>\n\t\t\t<div id='SkinContent'>\n\t\t\t\t<div id='Questions'>{~Question~}</div>\n\t\t\t\t<div id='Buttons'>{~Buttons~}</div>\n\t\t\t</div>\n\t\t\t<div id='ProgressBar'>{~ProgressBar~}</div>\n\t\t</div>\n\t\t<div id='Footer'>{~Footer~}</div>\n\t\t\n\t\t<div id='PushStickyFooter'></div>\n\t</div>\n\t<div id=\"Plug\" style=\"display:block !important;\"><a href=\"https://www.qualtrics.com/powered-by-qualtrics/?utm_source=internal%2Binitiatives&utm_medium=survey%2Bpowered%2Bby%2Bqualtrics&utm_content={~BrandID~}&utm_survey_id={~SurveyID~}\" target=\"_blank\" aria-label=\"{~PlugLabel~}\">{~Plug~}</a></div>\n</div>\n<script>Qualtrics.SurveyEngine.addOnload(Qualtrics.uniformLabelHeight);<\/script>\n\n<script>\n//TM6 Question Text Cell Padding\n\t//JFE\n\tPage.on('ready:imagesLoaded',function() {\n\t\tvar t = jQuery(\".QuestionText table\");\n\t  for (i=0; i<t.length; i++) {\n\t    if (t[i].cellPadding != undefined) {\n\t      var p = t[i].cellPadding + \"px\";\n\t      t.eq(i).find(\"th\").css(\"padding\",p);\n\t      t.eq(i).find(\"td\").css(\"padding\",p);\n\t    }\n\t  }\n\t});\n\t//SE\n\tjQuery(window).load(function() {\n\t\tif (jQuery(\"div\").hasClass(\"JFE\") == false) {\n\t    var t = jQuery(\".QuestionText table\");\n\t    for (i=0; i<t.length; i++) {\n\t      if (t[i].cellPadding != undefined) {\n\t        var p = t[i].cellPadding + \"px\";\n\t        t.eq(i).find(\"th\").css(\"padding\",p);\n\t        t.eq(i).find(\"td\").css(\"padding\",p);\n\t      }\n\t    }\n\t\t};\n\t});\n//TM21 iOS Text Box Width Fix\n\t//JFE\n\tPage.on('ready:imagesLoaded',function() {\n\t\tfunction isIE () {\n\t  \tvar myNav = navigator.userAgent.toLowerCase();\n\t  \treturn (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;\n\t\t}\n\t\tif (!isIE()) {\n\t\t\tvar mq = window.matchMedia( \"(max-width: 480px)\" );\n\t\t\tif (mq.matches == true) {\n\t\t\t\tjQuery(\".Skin .MC .TextEntryBox\").css(\"width\",\"100%\");\n\t\t\t\tjQuery(\".Skin .TE .ESTB .InputText\").css(\"width\",\"100%\");\n\t\t\t\tjQuery(\".Skin .TE .FORM .InputText\").css(\"width\",\"100%\");\n\t\t\t\tjQuery(\".Skin .TE .ML .InputText\").css(\"width\",\"100%\");\n\t\t\t\tjQuery(\".Skin .TE .PW .InputText\").css(\"width\",\"100%\");\n\t\t\t\tjQuery(\".Skin .TE .SL .InputText\").css(\"width\",\"100%\");\n\t\t\t};\n\t\t};\n\t});\n\t//SE\n\tjQuery(window).load(function() {\n\t\tfunction isIE () {\n\t  \tvar myNav = navigator.userAgent.toLowerCase();\n\t  \treturn (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;\n\t\t}\n\t\tif (!isIE()) {\n\t\t\tvar mq = window.matchMedia( \"(max-width: 480px)\" );\n\t\t\tif (jQuery(\"div\").hasClass(\"JFE\") == false && mq.matches == true) {\n\t\t\t\tjQuery(\".Skin .MC .TextEntryBox\").css(\"width\",\"100%\");\n\t\t\t\tjQuery(\".Skin .TE .ESTB .InputText\").css(\"width\",\"100%\");\n\t\t\t\tjQuery(\".Skin .TE .FORM .InputText\").css(\"width\",\"100%\");\n\t\t\t\tjQuery(\".Skin .TE .ML .InputText\").css(\"width\",\"100%\");\n\t\t\t\tjQuery(\".Skin .TE .PW .InputText\").css(\"width\",\"100%\");\n\t\t\t\tjQuery(\".Skin .TE .SL .InputText\").css(\"width\",\"100%\");\n\t\t\t};\n\t\t};\n\t});\n<\/script>\n<script>\n//Wrapping up those pesky SE labels like Christmas\njQuery(window).load(function() {\n\t\tif (jQuery(\"div\").hasClass(\"JFE\") == false) {\n\t    var mcs = jQuery(\".Skin .MC span.LabelWrapper\");\n\t\t\tfor (i = 0; i < mcs.length; i++) {\n\t\t\t\tmcs.eq(i).find(\"label\").wrapInner(\"<span></span>\");\n\t\t\t}\n\t};\n});\n<\/script>\n<script>\n\tPage.on('ready:imagesLoaded',function() {\n\tif (jQuery(\".ProgressBarContainer label\").length != 0  && jQuery(\".SystemEndOfSurvey\").length == 0){\njQuery(\"#ProgressBar\").addClass(\"verbose\");\n\t}\n\t});\n<\/script>\n\n");
  
  
    (function() {
      var fv = document.createElement('link');
      fv.type = 'image/x-icon';
      fv.rel = 'icon';
      fv.href = "https://osu.az1.qualtrics.com/brand-management/brand-assets/osu/favicon.ico";
      document.getElementsByTagName('head')[0].appendChild(fv);
    }());
  
  
</script>
    <script type="text/javascript">
      (function(appData) {
        if (appData && typeof appData === 'object' && '__jfefeRenderDocument' in appData) {
          var doc = appData.__jfefeRenderDocument

          if (doc === 'incompatible') {
            window.location = '/jfe/incompatibleBrowser';
            return
          }

          window.addEventListener('load', function() {
            // farewell jfe
            delete window.QSettings
            delete window.webpackJsonp
            delete window.jQuery
            delete window.ErrorWatcher
            delete window.onLoadCaptcha
            delete window.experimental
            delete window.Page

            var keys = Object.keys(window);
            for (let i in keys) {
              var name = keys[i];
              if (name.indexOf('jQuery') === 0) {
                delete window[name];
                break;
              }
            }

            document.open();
            document.write(doc);
            document.close();
          })
        } else {
          // prevent document.write from replacing the entire page
          window.document.write = function() {
            log.error('document.write is not allowed and has been disabled.');
          };

          QSettings.setPT(true, appData);
        }
      })({"FormSessionID":"FS_7z6hEIDs6Xh5yFR","QuestionIDs":["QID9","QID3","QID5","QID6","QID7","QID8"],"QuestionDefinitions":{"QID9":{"DefaultChoices":false,"DataExportTag":"Q1","QuestionType":"DB","Selector":"TB","Configuration":{"QuestionDescriptionOption":"UseText"},"ChoiceOrder":[],"Validation":{"Settings":{"Type":"None"}},"GradingData":[],"Language":{"EN":{"QuestionText":"<div>The Ohio State University strives to maintain an accessible and welcoming environment for individuals with disabilities. Your feedback is critical to helping the university achieve its goal of seamless access.</div>\n\n<div>&nbsp;</div>\n\n<div>Please use this form if you need assistance with websites or digital content.</div>\n\n<div>&nbsp;</div>\n\n<div>If you have difficulty using this form, you can <a href=\"mailto:websupport@osu.edu?subject=ADA-assistance\">send an email instead</a>.</div>"}},"NextChoiceId":4,"NextAnswerId":1,"QuestionID":"QID9","DataVisibility":{"Private":false,"Hidden":false},"SurveyLanguage":"EN"},"QID3":{"DefaultChoices":false,"DataExportTag":"Q2","QuestionType":"TE","Selector":"SL","Configuration":{"QuestionDescriptionOption":"UseText"},"Validation":{"Settings":{"ForceResponse":"ON","ForceResponseType":"ON","Type":"None"}},"GradingData":[],"Language":{"EN":{"QuestionText":"Name"}},"NextChoiceId":4,"NextAnswerId":1,"SearchSource":{"AllowFreeResponse":"false"},"QuestionID":"QID3","DataVisibility":{"Private":false,"Hidden":false},"SurveyLanguage":"EN"},"QID5":{"DefaultChoices":false,"DataExportTag":"Q3","QuestionType":"TE","Selector":"SL","Configuration":{"QuestionDescriptionOption":"UseText"},"Validation":{"Settings":{"ForceResponse":"ON","ForceResponseType":"ON","Type":"ContentType","MinChars":"1","ContentType":"ValidEmail","ValidDateType":"DateWithFormat","ValidPhoneType":"ValidUSPhone","ValidZipType":"ValidUSZip","ValidNumber":{"Min":"","Max":"","NumDecimals":""}}},"GradingData":[],"Language":{"EN":{"QuestionText":"<div>Email address</div>"}},"NextChoiceId":4,"NextAnswerId":1,"SearchSource":{"AllowFreeResponse":"false"},"QuestionID":"QID5","DataVisibility":{"Private":false,"Hidden":false},"SurveyLanguage":"EN"},"QID6":{"DefaultChoices":false,"DataExportTag":"Q4","QuestionType":"MC","Selector":"MAVR","SubSelector":"TX","Configuration":{"QuestionDescriptionOption":"UseText"},"Choices":{"1":{"Display":"Student"},"2":{"Display":"Faculty"},"3":{"Display":"Staff"},"4":{"Display":"Public"}},"ChoiceOrder":[1,2,3,4],"Validation":{"Settings":{"ForceResponse":"ON","ForceResponseType":"ON","Type":"None"}},"GradingData":[],"Language":{"EN":{"QuestionText":"What is your relationship to the University?","Choices":{"1":{"Display":"Student"},"2":{"Display":"Faculty"},"3":{"Display":"Staff"},"4":{"Display":"Public"}}}},"NextChoiceId":5,"NextAnswerId":1,"QuestionID":"QID6","DataVisibility":{"Private":false,"Hidden":false},"SurveyLanguage":"EN"},"QID7":{"DefaultChoices":false,"DataExportTag":"Q5","QuestionType":"TE","Selector":"SL","Configuration":{"QuestionDescriptionOption":"UseText"},"Validation":{"Settings":{"ForceResponse":"ON","ForceResponseType":"ON","Type":"None"}},"GradingData":[],"Language":{"EN":{"QuestionText":"Tell us the product or website that you are having trouble accessing."}},"NextChoiceId":4,"NextAnswerId":1,"SearchSource":{"AllowFreeResponse":"false"},"QuestionID":"QID7","DataVisibility":{"Private":false,"Hidden":false},"SurveyLanguage":"EN"},"QID8":{"DefaultChoices":false,"DataExportTag":"Q6","QuestionType":"TE","Selector":"ML","Configuration":{"QuestionDescriptionOption":"UseText"},"Validation":{"Settings":{"ForceResponse":"ON","ForceResponseType":"ON","Type":"None"}},"GradingData":[],"Language":{"EN":{"QuestionText":"Describe the issue we can help you with."}},"NextChoiceId":4,"NextAnswerId":1,"SearchSource":{"AllowFreeResponse":"false"},"QuestionID":"QID8","DataVisibility":{"Private":false,"Hidden":false},"SurveyLanguage":"EN"}},"NextButton":null,"PreviousButton":false,"Count":6,"Skipped":0,"NotDisplayed":0,"LanguageSelector":null,"Messages":{"ModalDialogMessages":{"UnansweredQuestion":"There is 1 unanswered question on this page","UnansweredQuestions":"There are %1 unanswered questions on this page","ContinueQuestion":"Would you like to continue?","AnswerQuestion":"Answer the Question","AnswerQuestions":"Answer the Questions","ContinueWithoutAnswering":"Continue Without Answering","RequestResponseTitle":"Response Requested","Continue":"Continue","ModifyAnswers":"Modify Answers","PDPQuestionDialogSingle":"It looks like you may have entered some sensitive information in a question","PDPQuestionDialogMultiple":"It looks like you may have entered some sensitive information in %1 questions"},"PoweredByQualtrics":"Powered by Qualtrics","PoweredByQualtricsLabel":"Powered by Qualtrics: Learn more about Qualtrics in a new tab","A11yNextPage":"You are on the next page","A11yPageLoaded":"Page Loaded","A11yPageLoading":"Page is loading","A11yPrevPage":"You are on the previous page","FailedToReachServer":"We were unable to connect to our servers. Please check your internet connection and try again.","ConnectionError":"Connection Error","IPDLError":"Sorry, an unexpected error occurred.","Retry":"Retry","Cancel":"Cancel","Language":"Language","Done":"Done","AutoAdvanceLabel":"or press Enter","DecimalSeparator":"Please exclude commas and if necessary use a point as a decimal separator.","BipolarPreference":"Select this answer if you prefer %1 over %2 by %3 points.","BipolarNoPreference":"Select this answer if you have no preference between %1 and %2.","Blank":"Blank","CaptchaRequired":"Answering the captcha is required to proceed","MCMSB_Instructions":"To select multiple options in a row, click and drag your mouse or hold down Shift when selecting. To select non-sequential options, hold down Control (on a PC) or Command (on a Mac) when clicking. To deselect an option, hold down Control or Command and click on a selected option.","MLDND_Instructions":"Drag and drop each item from the list into a bucket.","PGR_Instructions":"Drag and drop items into groups. Within each group, rank items by dragging and dropping them into place.","ROSB_Instructions":"Select items and then rank them by clicking the arrows to move each item up and down."},"IsPageMessage":false,"ErrorCode":null,"PageMessageTranslations":{},"CurrentLanguage":"EN","FallbackLanguage":"EN","QuestionRuntimes":{"QID9":{"Highlight":false,"ID":"QID9","Type":"DB","Selector":"TB","SubSelector":null,"ErrorMsg":null,"TerminalAuthError":false,"Valid":false,"MobileFirst":false,"QuestionTypePluginProperties":null,"CurrentMultiPageQuestionIndex":0,"Displayed":true,"PreValidation":{"Settings":{"Type":"None"}},"IsAutoAuthFailure":false,"ErrorSeverity":null,"PDPErrorMsg":null,"PDPError":null,"QuestionText":"<div>The Ohio State University strives to maintain an accessible and welcoming environment for individuals with disabilities. Your feedback is critical to helping the university achieve its goal of seamless access.</div>\n\n<div>&nbsp;</div>\n\n<div>Please use this form if you need assistance with websites or digital content.</div>\n\n<div>&nbsp;</div>\n\n<div>If you have difficulty using this form, you can <a href=\"mailto:websupport@osu.edu?subject=ADA-assistance\">send an email instead</a>.</div>","Active":true},"QID3":{"Highlight":false,"ID":"QID3","Type":"TE","Selector":"SL","SubSelector":null,"ErrorMsg":null,"TerminalAuthError":false,"Valid":false,"MobileFirst":false,"QuestionTypePluginProperties":null,"CurrentMultiPageQuestionIndex":0,"Displayed":true,"PreValidation":{"Settings":{"ForceResponse":"ON","ForceResponseType":"ON","Type":"None"}},"MinChars":null,"MaxChars":null,"IsAutoAuthFailure":false,"ErrorSeverity":null,"PDPErrorMsg":null,"PDPError":null,"QuestionText":"Name","Active":true},"QID5":{"Highlight":false,"ID":"QID5","Type":"TE","Selector":"SL","SubSelector":null,"ErrorMsg":null,"TerminalAuthError":false,"Valid":false,"MobileFirst":false,"QuestionTypePluginProperties":null,"CurrentMultiPageQuestionIndex":0,"Displayed":true,"PreValidation":{"Settings":{"ForceResponse":"ON","ForceResponseType":"ON","Type":"ContentType","MinChars":"1","ContentType":"ValidEmail","ValidDateType":"DateWithFormat","ValidPhoneType":"ValidUSPhone","ValidZipType":"ValidUSZip","ValidNumber":{"Min":"","Max":"","NumDecimals":""}}},"MinChars":null,"MaxChars":null,"IsAutoAuthFailure":false,"ErrorSeverity":null,"PDPErrorMsg":null,"PDPError":null,"QuestionText":"<div>Email address</div>","Active":true},"QID6":{"Highlight":false,"ID":"QID6","Type":"MC","Selector":"MAVR","SubSelector":"TX","ErrorMsg":null,"TerminalAuthError":false,"Valid":false,"MobileFirst":false,"QuestionTypePluginProperties":null,"CurrentMultiPageQuestionIndex":0,"Displayed":true,"PreValidation":{"Settings":{"ForceResponse":"ON","ForceResponseType":"ON","Type":"None"}},"Choices":{"1":{"ID":"1","RecodeValue":"1","VariableName":"1","Text":"","Display":"Student","InputWidth":null,"Exclusive":false,"Selected":false,"Password":false,"TextEntry":false,"TextEntrySize":"Small","TextEntryLength":null,"InputHeight":null,"Error":null,"ErrorMsg":null,"PDPErrorMsg":null,"PDPError":null,"Displayed":true},"2":{"ID":"2","RecodeValue":"2","VariableName":"2","Text":"","Display":"Faculty","InputWidth":null,"Exclusive":false,"Selected":false,"Password":false,"TextEntry":false,"TextEntrySize":"Small","TextEntryLength":null,"InputHeight":null,"Error":null,"ErrorMsg":null,"PDPErrorMsg":null,"PDPError":null,"Displayed":true},"3":{"ID":"3","RecodeValue":"3","VariableName":"3","Text":"","Display":"Staff","InputWidth":null,"Exclusive":false,"Selected":false,"Password":false,"TextEntry":false,"TextEntrySize":"Small","TextEntryLength":null,"InputHeight":null,"Error":null,"ErrorMsg":null,"PDPErrorMsg":null,"PDPError":null,"Displayed":true},"4":{"ID":"4","RecodeValue":"4","VariableName":"4","Text":"","Display":"Public","InputWidth":null,"Exclusive":false,"Selected":false,"Password":false,"TextEntry":false,"TextEntrySize":"Small","TextEntryLength":null,"InputHeight":null,"Error":null,"ErrorMsg":null,"PDPErrorMsg":null,"PDPError":null,"Displayed":true}},"ChoiceOrder":["1","2","3","4"],"ChoiceTextPosition":"Left","IsAutoAuthFailure":false,"ErrorSeverity":null,"PDPErrorMsg":null,"PDPError":null,"QuestionText":"What is your relationship to the University?","ExistingChoices":{},"ProcessedDisplayChoiceOrder":["1","2","3","4"],"ChoiceOrderSetup":true,"Active":true},"QID7":{"Highlight":false,"ID":"QID7","Type":"TE","Selector":"SL","SubSelector":null,"ErrorMsg":null,"TerminalAuthError":false,"Valid":false,"MobileFirst":false,"QuestionTypePluginProperties":null,"CurrentMultiPageQuestionIndex":0,"Displayed":true,"PreValidation":{"Settings":{"ForceResponse":"ON","ForceResponseType":"ON","Type":"None"}},"MinChars":null,"MaxChars":null,"IsAutoAuthFailure":false,"ErrorSeverity":null,"PDPErrorMsg":null,"PDPError":null,"QuestionText":"Tell us the product or website that you are having trouble accessing.","Active":true},"QID8":{"Highlight":false,"ID":"QID8","Type":"TE","Selector":"ML","SubSelector":null,"ErrorMsg":null,"TerminalAuthError":false,"Valid":false,"MobileFirst":false,"QuestionTypePluginProperties":null,"CurrentMultiPageQuestionIndex":0,"Displayed":true,"PreValidation":{"Settings":{"ForceResponse":"ON","ForceResponseType":"ON","Type":"None"}},"MinChars":null,"MaxChars":null,"IsAutoAuthFailure":false,"ErrorSeverity":null,"PDPErrorMsg":null,"PDPError":null,"QuestionText":"Describe the issue we can help you with.","Active":true}},"IsEOS":false,"FailedValidation":false,"PDPValidationFailureQuestionIDs":[],"BlockID":"BL_byf4KUuls3glim2","FormTitle":"Office of Marketing and Communications Digital Accessibility Request","SurveyMetaDescription":"Use this survey to report accessibility issues on any Office of Marketing and Communications products or content. ","TableOfContents":null,"UseTableOfContents":false,"SM":{"BaseServiceURL":"https://osu.az1.qualtrics.com","SurveyVersionID":"9223370350681132511","JFEVersionID":"e1c1ad07b6079f545d276ef6435a833883390dee","BrandDataCenterURL":"https://sjc1.qualtrics.com","XSRFToken":"BKKoWNzAganjizZ2hWAZCw","StartDate":"2024-01-31 22:07:24","StartDateRaw":1706738844781,"BrandID":"osu","SurveyID":"SV_exG3iaOF1c2xr1Q","BrowserName":"Firefox","BrowserVersion":"45.0","OS":"Windows NT 6.1","UserAgent":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0","LastUserAgent":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0","QueryString":"","IP":"147.83.130.27","URL":"https://osu.az1.qualtrics.com/jfe/form/SV_exG3iaOF1c2xr1Q","BaseHostURL":"https://osu.az1.qualtrics.com","ProxyURL":"https://osu.az1.qualtrics.com/jfe/form/SV_exG3iaOF1c2xr1Q","JFEDataCenter":"jfe7","dataCenterPath":"jfe7","IsPreview":false,"LinkType":"anonymous","EDFromRequest":[],"FormSessionID":"FS_7z6hEIDs6Xh5yFR"},"ED":{"SID":"SV_exG3iaOF1c2xr1Q","SurveyID":"SV_exG3iaOF1c2xr1Q","Q_URL":"https://osu.az1.qualtrics.com/jfe/form/SV_exG3iaOF1c2xr1Q","UserAgent":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0","Q_CHL":"anonymous","Q_LastModified":1686661578,"Q_Language":"EN"},"PostToStartED":{},"FormRuntime":null,"RuntimePayload":"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","TransactionID":1,"ReplacesOutdated":false,"EOSRedirectURL":null,"RedirectURL":null,"SaveOnPageUnload":true,"ProgressPercent":0,"ProgressBarText":"Survey Completion","ProgressAccessibleText":"Current Progress","FormOptions":{"BackButton":false,"SaveAndContinue":true,"SurveyProtection":"PublicSurvey","BallotBoxStuffingPrevention":false,"NoIndex":"Yes","SecureResponseFiles":true,"SurveyExpiration":"None","SurveyTermination":"DisplayMessage","Header":"<p id=\"published-survey-anonymous-link\"><span style=\"color:#ffffff;\">Advancement Digital Accessibility Request</span></p>\n","Footer":"","ProgressBarDisplay":"None","PartialData":"+1 week","ValidationMessage":null,"PreviousButton":{"Display":"←"},"NextButton":{"Display":"→"},"SurveyTitle":"Office of Marketing and Communications Digital Accessibility Request","SkinLibrary":"osu","SkinType":"templated","Skin":"qualtrics.base:osu.6800176968:null","NewScoring":1,"EOSMessage":"MS_0vzz8H2blvNC5Xo","ShowExportTags":false,"CollectGeoLocation":false,"SurveyMetaDescription":"Use this survey to report accessibility issues on any Office of Marketing and Communications products or content. ","PasswordProtection":"No","AnonymizeResponse":"No","RefererCheck":"No","RecaptchaV3":false,"ConfirmStart":false,"AutoConfirmStart":false,"RelevantID":false,"UseCustomSurveyLinkCompletedMessage":null,"SurveyLinkCompletedMessage":null,"SurveyLinkCompletedMessageLibrary":null,"ResponseSummary":"No","EOSMessageLibrary":"UR_6YGy6BaTbJ8RgsB","EOSRedirectURL":"http://","EmailThankYou":true,"ThankYouEmailMessageLibrary":"UR_6YGy6BaTbJ8RgsB","ThankYouEmailMessage":"MS_8Dt15CFe63Oi1Ho","ValidateMessage":false,"ValidationMessageLibrary":null,"InactiveSurvey":"DefaultMessage","PartialDeletion":null,"PartialDataCloseAfter":"LastActivity","InactiveMessageLibrary":null,"InactiveMessage":null,"AvailableLanguages":{"EN":[]},"headerLid":"","headerMid":"","ProtectSelectionIds":true,"SurveyName":"OMC Digital Accessibility Request","CustomStyles":{"customCSS":""},"SurveyLanguage":"EN","ActiveResponseSet":"RS_5BkqTNcL0e04P7o","SurveyStartDate":"-0001-11-30 06:59:56","SurveyExpirationDate":"-0001-11-30 06:59:56","SurveyCreationDate":"2022-08-31 16:52:18","SkinOptions":{"Version":3,"AnyDeviceSupport":true,"Icons":{"favicon":"https://osu.az1.qualtrics.com/brand-management/brand-assets/osu/favicon.ico","appleTouchIcon":"","ogImage":""},"BrandingOnly":{"header":"","footer":"","css":""},"ProgressBarPosition":"top","Logo":"https://jfe-cdn.qualtrics.com/themes/skins/osu/osu5/version-1534905121706-84d626/files/logo.png","LogoPosition":"left","LogoBanner":false,"QuestionsContainer":false,"MCButtonChoices":false,"NPSMobileVertical":false,"LayoutSpacing":0.5,"FallbackSkin":false},"SkinBaseCss":"/jfe/themes/templated-skins/qualtrics.base:osu.6800176968:null/version-1704925370881-b496b5/stylesheet.css","PageTransition":"none","Favicon":"https://osu.az1.qualtrics.com/brand-management/brand-assets/osu/favicon.ico","CustomLanguages":null,"SurveyTimezone":"America/Denver","LinkType":"anonymous","Language":"EN","Languages":null,"DefaultLanguages":{"AR":"العربية","ASM":"অসমীয়া","AZ-AZ":"Azərbaycan dili","BEL":"Беларуская","BG":"Български","BS":"Bosanski","BN":"বাংলা","CA":"Català","CEB":"Bisaya","CKB":"كوردي","CS":"Čeština","CY":"Cymraeg","DA":"Dansk","DE":"Deutsch","EL":"Ελληνικά","EN":"English","EN-GB":"English (United Kingdom)","EN_GB":"English (Great Britain)","EO":"Esperanto","ES":"Español (América Latina)","ES-ES":"Español","ET":"Eesti","FA":"فارسی","FI":"Suomi","FR":"Français","FR-CA":"Français (Canada)","GU":"ગુજરાતી ","HE":"עברית","HI":"हिन्दी","HIL":"Hiligaynon","HR":"Hrvatski","HU":"Magyar","HYE":"Հայերեն","ID":"Bahasa Indonesia","ISL":"Íslenska","IT":"Italiano","JA":"日本語","KAN":"ಕನ್ನಡ","KAT":"ქართული","KAZ":"Қазақ","KM":"ភាសាខ្មែរ","KO":"한국어","LV":"Latviešu","LT":"Lietuviškai","MAL":"മലയാളം","MAR":"मराठी","MK":"Mакедонски","MN":"Монгол","MS":"Bahasa Malaysia","MY":"မြန်မာဘာသာ","NE":"नेपाली","NL":"Nederlands","NO":"Norsk","ORI":"ଓଡ଼ିଆ ଭାଷା","PA-IN":"ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ)","PL":"Polski","PT":"Português","PT-BR":"Português (Brasil)","RI-GI":"Rigi","RO":"Română","RU":"Русский","SIN":"සිංහල","SK":"Slovenčina","SL":"Slovenščina","SO":"Somali","SQI":"Shqip","SR":"Srpski","SR-ME":"Crnogorski","SV":"Svenska","SW":"Kiswahili","TA":"தமிழ்","TEL":"తెలుగు","TGL":"Tagalog","TH":"ภาษาไทย","TR":"Tϋrkçe","UK":"Українська","UR":"اردو","VI":"Tiếng Việt","ZH-S":"简体中文","ZH-T":"繁體中文","Q_DEV":"Developer"},"ThemeURL":"//co1.qualtrics.com/WRQualtricsShared/"},"Header":"<p id=\"published-survey-anonymous-link\"><span style=\"color:#ffffff;\">Advancement Digital Accessibility Request</span></p>\n","HeaderMessages":{},"Footer":"","FooterMessages":{},"HasJavaScript":false,"IsSystemMessage":false,"FeatureFlags":{"JFE_BlockPrototypeJS":false},"TransformData":{},"AllowJavaScript":true,"NextButtonAriaLabel":"Next","PreviousButtonAriaLabel":"Previous","BrandType":"Academic","FilteredEDKeys":[],"CookieActions":{"Set":[],"Clear":[]}})
    </script>
  </body>
</html>
