/* Script:ESI%20RR%20Collection - ScriptInstance:32819e95f2884f4d93128424c20250b7 - CompiledAt:2023-10-31 17:27:30 */

console.log("! v13");var Sponsored_Content_Article_RHR_Multi="9c171be028c944999463e1135dd447c3";var devSites=["indy-uat-web.independent.co.uk","indy-dev-web.independent.co.uk","indy-web-dev.brightsites.co.uk","indy-web-uat.brightsites.co.uk","indy-web-prod.brightsites.co.uk","drewtest"];var onDev=false;for(var index=0;index<devSites.length;index++){if(window.location.href.indexOf(devSites[index])>0){console.log("!! on Dev!");onDev=true;break}}if(window.location.href.indexOf("feature-indy-premium")>0){(function(){var compiledTemplate0="";if(window.innerWidth<1e3){var location_placement=".body-content p:nth-last-child(6)";if(document.getElementsByClassName(location_placement).length==0){location_placement=".body-content p:nth-last-child(5)"}if(document.getElementsByClassName(location_placement).length==0){location_placement=".body-content p:nth-last-child(7)"}if(document.getElementsByClassName(location_placement).length==0){location_placement=".body-content p:nth-last-child(4)"}if(document.getElementsByClassName(location_placement).length==0){location_placement=".body-content p:nth-last-child(8)"}}else{var location_placement="#main > aside > div:nth-child(6)"}templates();window.NATIVEADS=window.NATIVEADS||{};window.NATIVEADS_QUEUE=window.NATIVEADS_QUEUE||[];var q=function(){return window.NATIVEADS_QUEUE};q().push(["setPropertyID","NA-EVENSTANSPONFEAT-11239234"]);q().push(["insertPreview",{label:"Indy Staging Preview",unit:{server:"polarpmp",deal:"esi_market",placement:"indy_web"},location:location_placement,infoText:"",infoButtonText:"",collectionSize:5,template:{collection:compiledTemplate0},onRender:function($element,data){var elements=document.querySelectorAll("#main > aside > div:nth-child(7)");elements[0].outerHTML="";if(document.body.clientWidth<500){document.getElementById("polar_sidebar_placement").style.padding="0 20px"}},onFill:function(data){},onError:function(error){console.log(error)}}]);q().push(["injectCSS",[""," #polar_sidebar_placement img.creative_image {","    width: 100px;","    height: 66px;","    float: left;","    margin-right: 10px;","}","","#polar_sidebar_placement .creative {","    width: 100%;","    clear: both;","    margin-bottom: 10px;","    min-height: 66px;","}","","#polar_sidebar_placement .creative:hover .creative_title {","    color: #dc062b;","}","","#polar_sidebar_placement .creative_title {","    color: #281e1e;","    font-family: Independent Serif,serif;","    font-size: 15px;","    font-weight: bold;","    font-style: normal;","    font-stretch: normal;","    line-height: normal;","    letter-spacing: normal;","}","","#polar_sidebar_placement .header {","    font-size: 20px;","    text-transform: uppercase;","    /* font-weight: 800; */","    line-height: 1.14;","    /* font-family: 'Fira Sans', Helvetica, Arial, sans-serif; */","    letter-spacing: 1.14px;","    margin: auto;","    font-weight: 500;","}","","#polar_sidebar_placement .header:after {",'    content: ""; ',"    display: block; ","    width: 113%; ","    height: 4px; ","    margin: 2px 0 8px -6.5%; ","    mix-blend-mode: multiply; ","    background: #dc062b; ","}","","@media only screen and (max-width: 999px) {","  #polar_sidebar_placement{","    border-right: solid 0.25px #ddd;","    border-left: solid 1px #ddd;","    padding: 0 7.5px;","    width: 310px;","    float: left;","    margin-right: 10px;","  }","}","","@media only screen and (max-width: 460px) {","  #polar_sidebar_placement{","    width: 100%;","  }","}",""].join("\n"),"head"]);function templates(){compiledTemplate0=function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function",escapeExpression=this.escapeExpression,helperMissing=helpers.helperMissing,self=this;function program1(depth0,data){var buffer="",stack1,stack2,options;buffer+='\n              <div class="';if(stack1=helpers.nameInCollection){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.nameInCollection;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+' creative">\n                <a href="';if(stack1=helpers.link){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.link;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\n                  <img class="creative_image" loading="lazy" src="';options={hash:{width:100,height:66,autocrop:1},data:data};buffer+=escapeExpression((stack1=helpers.getThumbHref||depth0.getThumbHref,stack1?stack1.call(depth0,options):helperMissing.call(depth0,"getThumbHref",options)))+'">\n                    <div class="creative_title">';if(stack2=helpers.title){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.title;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}buffer+=escapeExpression(stack2)+"</div>\n                </a>\n              </div>\n            ";return buffer}buffer+='      <div id="polar_sidebar_placement">\n        <div class="header">Sponsored features</div>\n        <div class="creatives">\n            ';stack1=helpers.each.call(depth0,depth0.creatives,{hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\n        </div>\n      </div>\n";return buffer}}})()}else if(onDev){(function(){console.log("! on indy DEV BRIGHTSITES");window.NATIVEADS=window.NATIVEADS||{};window.NATIVEADS_QUEUE=window.NATIVEADS_QUEUE||[];var q=function(){return window.NATIVEADS_QUEUE};q().push(["setPropertyID","NA-EVENSTANSPONFEAT-11239234"]);q().push(["insertPreviewCollection",{label:"Independent - Article - Sponsored Features",unit:{server:"polarpmp",deal:"esi_market",placement:"indy_web"},location:".sponsored-features",infoText:"",infoButtonText:"",collectionSize:5,template:{collection:Sponsored_Content_Article_RHR_Multi},onRender:function($element,data){},onFill:function(data){console.log("! on indy DEV BRIGHTSITES fill ",data)},onError:function(error){console.log("! on indy DEV BRIGHTSITES RC - err ",error)}}])})()}else if(window.location.href.indexOf("independent.co.uk")>0){(function(){console.log("! on indy PROD");window.NATIVEADS=window.NATIVEADS||{};window.NATIVEADS_QUEUE=window.NATIVEADS_QUEUE||[];var q=function(){return window.NATIVEADS_QUEUE};q().push(["setPropertyID","NA-EVENSTANSPONFEAT-11239234"]);q().push(["insertPreviewCollection",{label:"Independent - Article - Sponsored Features",unit:{server:"polarpmp",deal:"esi_market",placement:"indy_web"},location:".sponsored-features",infoText:"",infoButtonText:"",collectionSize:5,template:{collection:Sponsored_Content_Article_RHR_Multi},onRender:onFill:function(data){console.log("! on indy PROD fill ",data)},onError:])})()}else if(window.location.href.indexOf("homesandproperty.co.uk")>0){(function(){var compiledTemplate0="";templates();window.NATIVEADS=window.NATIVEADS||{};window.NATIVEADS_QUEUE=window.NATIVEADS_QUEUE||[];var q=function(){return window.NATIVEADS_QUEUE};q().push(["setPropertyID","NA-HOMEPROPSPONFEAT-11239235"]);q().push(["insertPreview",{label:"Homes and Property - Article - Sponsored Features",unit:{server:"polarpmp",deal:"esi_market",placement:"homes_web"},location:".layout-component.layout-component-ines-sponsored-features-sidebar.article-list",infoText:"",infoButtonText:"",collectionSize:5,template:{collection:compiledTemplate0},onRender:onFill:function(data){},onError:function(error){}}]);q().push(["injectCSS","#polar_sidebar_placement img.creative_image { width: 100px; height: 66px; float: left; margin-right: 10px; } #polar_sidebar_placement .creative { width: 100%; clear: both; margin-bottom: 10px; min-height: 66px; } #polar_sidebar_placement .creative:hover .creative_title { color: #71c4ca; } #polar_sidebar_placement .creative_title { color: #777;     font-size: 17px;    font-weight: 400;    line-height: 19px; } #polar_sidebar_placement .header { font-size: 22px; text-transform: uppercase; font-weight: 800; line-height: 24px; margin-bottom: 16px;} #polar_sidebar_placement .header:before { content: '\\e000';    font-family: ines !important;    font-style: normal !important;    font-weight: 400 !important;    font-variant: normal !important;    text-transform: none !important;    speak: none;    line-height: 1;    -webkit-font-smoothing: antialiased;    -moz-osx-font-smoothing: grayscale;    background: 0 0;    color: #71c4ca;    float: left;    width: 1em;    padding-top: 0; margin-right: 5px}","head"]);function templates(){compiledTemplate0=function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function",escapeExpression=this.escapeExpression,helperMissing=helpers.helperMissing,self=this;function program1(depth0,data){var buffer="",stack1,stack2,options;buffer+='\n              <div class="';if(stack1=helpers.nameInCollection){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.nameInCollection;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+' creative">\n                <a href="';if(stack1=helpers.link){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.link;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\n                  <img class="creative_image" loading="lazy" src="';options={hash:{width:100,height:66,autocrop:1},data:data};buffer+=escapeExpression((stack1=helpers.getThumbHref||depth0.getThumbHref,stack1?stack1.call(depth0,options):helperMissing.call(depth0,"getThumbHref",options)))+'">\n                    <div class="creative_title">';if(stack2=helpers.title){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.title;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}buffer+=escapeExpression(stack2)+"</div>\n                </a>\n              </div>\n            ";return buffer}buffer+='      <div id="polar_sidebar_placement">\n        <div class="header">Sponsored Features</div>\n        <div class="creatives">\n            ';stack1=helpers.each.call(depth0,depth0.creatives,{hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\n        </div>\n      </div>\n";return buffer}}})()}else if(/standard.co.uk|standard(.*).brightsites.co.uk/.test(window.location.href)){console.log("! on e.s. PROD");(function(){var compiledTemplate0="";var location_placement="#main > aside > div:nth-child(6)";if(document.body.clientWidth<500){location_placement="#footer"}templates();window.NATIVEADS=window.NATIVEADS||{};window.NATIVEADS_QUEUE=window.NATIVEADS_QUEUE||[];var q=q().push(["setPropertyID","NA-EVENSTANARTI-11238783"]);q().push(["insertPreview",{label:"Evening Standard - Article - Sponsored Features",unit:{server:"polarpmp",deal:"esi_market",placement:"standard_web"},location:"#polar-sidebar-sponsored",infoText:"",infoButtonText:"",collectionSize:5,template:{collection:compiledTemplate0},onRender:function($element,data){$element.next().css("display","none")},onFill:function(data){},onError:]);var esi_Section="standard_web_top_"+document.querySelector("meta[property='article:section']").getAttribute("content").replace(/ /g,"_");if(document.querySelector("meta[property='article:subsection']")!=null){var esi_SubSection="standard_web_top_"+document.querySelector("meta[property='article:subsection']").getAttribute("content").replace(/ /g,"_")}if(esi_SubSection=="standard_web_top_Travel"){q().push(["insertPreview",{label:"ESI - Article - Top",unit:{server:"polarpmp",deal:"esi_market",placement:esi_SubSection},location:"#polarArticle",infoText:"",infoButtonText:"",template:"9055a1f9a88d4ff8ab395be44d0f0608",onRender:function($element,data){},onFill:function(data){},onError:function(error){}}])}else{q().push(["insertPreview",{label:"ESI - Article - Top",unit:{server:"polarpmp",deal:"esi_market",placement:esi_Section},location:"#polarArticle",infoText:"",infoButtonText:"",template:"9055a1f9a88d4ff8ab395be44d0f0608",onRender:onFill:function(data){},onError:])}q().push(["injectCSS","#polar_sidebar_placement .creatives {margin-bottom: 20px;} #polar_sidebar_placement img.creative_image { width: 100px; height: 66px; float: left; margin-right: 10px; } #polar_sidebar_placement .creative { width: 100%; clear: both; margin-bottom: 10px; min-height: 66px; } #polar_sidebar_placement .creative a, #polar_sidebar_placement .creative a:hover {color: #dc062b; text-decoration: none;} #polar_sidebar_placement .creative:hover .creative_title { color: #dc062b; text-decoration: none;} #polar_sidebar_placement .creative_title { color: #000;color: #000; font-family: Standard Text, serif; font-size: 18px; text-decoration: none; line-height: 22px; display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;} #polar_sidebar_placement .header { font-size: 22px; text-transform: none; line-height: 33px; font-family: Standard Sans, sans-serif; display: table; margin: 0 0 5px 0; font-weight: 500;  } #polar_sidebar_placement .header::first-letter {text-transform: capitalize;}","head"]);function templates(){compiledTemplate0=function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function",escapeExpression=this.escapeExpression,helperMissing=helpers.helperMissing,self=this;function program1(depth0,data){var buffer="",stack1,stack2,options;buffer+='\n              <div class="';if(stack1=helpers.nameInCollection){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.nameInCollection;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+' creative">\n                <a href="';if(stack1=helpers.link){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.link;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\n                  <img class="creative_image" loading="lazy" src="';options={hash:{width:100,height:66,autocrop:0},data:data};buffer+=escapeExpression((stack1=helpers.getThumbHref||depth0.getThumbHref,stack1?stack1.call(depth0,options):helperMissing.call(depth0,"getThumbHref",options)))+'">\n                    <div class="creative_title">';if(stack2=helpers.title){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.title;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}buffer+=escapeExpression(stack2)+"</div>\n                </a>\n              </div>\n            ";return buffer}buffer+='      <div id="polar_sidebar_placement">\n        <div class="header">Sponsored Features</div>\n        <div class="creatives">\n            ';stack1=helpers.each.call(depth0,depth0.creatives,{hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\n        </div>\n      </div>\n";return buffer}}})()}(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=d.location.protocol;if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.type="text/javascript";js.async=true;js.src=(p=="https:"?p:"http:")+"//plugin.mediavoice.com/plugin.js";fjs.parentNode.insertBefore(js,fjs)})(document,"script","nativeads-plugin");