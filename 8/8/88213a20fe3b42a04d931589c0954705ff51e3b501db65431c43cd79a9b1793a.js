(self.webpackChunk_cleverpush_cleverpush_js_sdk=self.webpackChunk_cleverpush_cleverpush_js_sdk||[]).push([[728],{8728:function(e,n,t){"use strict";t.r(n),t.d(n,{default:);var r=t(484),o=t(6610),i=t(5991),a=t(6156);9248);var l="delivered",u="clicked",d="closed",h="bounced",b="cleverpush-banner-opened",p="#close",f="showRow",m="showElement",B=function(){function e(n,t,r,i,s){(0,o.Z)(this,e),(0,a.Z)(this,"saveBannerClick",(function(e){var n=[];localStorage.getItem(b)?-1===(n=JSON.parse(localStorage.getItem(b))).indexOf(e)&&n.push(e):n.push(e),localStorage.setItem(b,JSON.stringify(n))})),this.webBanner=n,this.config=t,this.subscriptionManager=r,this.api=i,this.log=s,this.element=null,this.isVisible=!1,window.innerWidth<768&&this.webBanner.mobileStyle&&(this.webBanner.style=c(c({},this.webBanner.style),this.webBanner.mobileStyle)),this.contentWidth=Math.min(this.webBanner.style.width||600,window.innerWidth),this.previousHeight=0,n.testId&&(this.testId=n.testId)}return(0,i.Z)(e,[{key:"setIframeHeight",value:function(){this.iframe&&"100%"!==this.iframe.style.height&&this.iframe.contentWindow.document.body.scrollHeight!==this.previousHeight&&(this.iframe.style.height=0,this.iframe.style.height="".concat(this.iframe.contentWindow.document.body.scrollHeight,"px"),this.previousHeight=this.iframe.contentWindow.document.body.scrollHeight)}},{key:"show",value:function(){var e,n=this;this.isVisible=!0,this.element=document.createElement("div"),this.element.className="cleverpush-banner",this.element.id="cleverpush-banner-".concat(this.webBanner._id),this.element.innerHTML='\n      <div class="banner-content">\n        <button type="button" class="banner-close">&times;</button>\n        <iframe frameborder="0" scrolling="no" allowtransparency></iframe>\n      </div>\n    ';var t=document.body;if(this.webBanner.appendToSelector?t=document.querySelector(this.webBanner.appendToSelector):this.webBanner.darkenBackground&&document.body.classList.add("cleverpush-banner-open"),this.webBanner.customCss){var o=document.createElement("style");o.innerHTML=this.webBanner.customCss,document.head.appendChild(o)}if(null!==(e=this.webBanner)&&void 0!==e&&e.trackConversions)try{var i=this.webBanner._id,a=this.webBanner.testId||null,s={},c=sessionStorage.getItem("cleverpush-shown-web-banners");c&&(s=JSON.parse(c)),s[i]=a,sessionStorage.setItem("cleverpush-shown-web-banners",JSON.stringify(s))}catch(e){console.error("Error handling trackConversions:",e)}if(t){var d,h;if(t.appendChild(this.element),this.content=this.element.querySelector(".banner-content"),this.content){var b=this.webBanner.content||"";this.iframe=this.content.querySelector("iframe");var B=b.includes("<script");if(this.iframe){b+="\n          <style>\n            ".concat(B?"":"\n              body, body > table {\n                background-color: transparent !important;\n              }\n              html, body {\n                height: 100%;\n              }\n            ","\n            ").concat(this.webBanner.customCss||"","\n          </style>\n\n          <script").concat(this.webBanner.scriptNonce?' nonce="'.concat(this.webBanner.scriptNonce,'"'):"",">\n            var bannerId = '").concat(this.webBanner._id,"';\n            var isPreview = ").concat("PREVIEW"===this.config.env,";\n            var testId = '").concat(this.testId,"';\n            var oncePerClickOnly = ").concat(this.webBanner.oncePerClick,";\n            var closeBanners = function() {\n              for (var bannerIndex = 0; bannerIndex < window.top.CleverPush.webBanners.length; bannerIndex++) {\n                if (window.top.CleverPush.webBanners[bannerIndex].element) {\n                  window.top.CleverPush.webBanners[bannerIndex].element.style.display = 'none';\n                  window.top.document.body.classList.remove('cleverpush-banner-open');\n                  window.top.CleverPush.webBanners[bannerIndex].removeBounceListener();\n                }\n              }\n            };\n\n            var getBannerIndex = function(bannerId) {\n              return window.top.CleverPush.webBanners.findIndex(function(doc) { return doc.webBanner._id === bannerId; });\n            }\n\n            var openStory = function(url) {\n              for (var bannerIndex = 0; bannerIndex < window.top.CleverPush.webBanners.length; bannerIndex++) {\n                if (window.top.CleverPush.webBanners[bannerIndex].element) {\n                  var content = window.top.CleverPush.webBanners[bannerIndex].element.querySelector('.banner-content');\n                  if (content) {\n                    content.style.top = 0;\n                    content.style.right = 0;\n                    content.style.bottom = 0;\n                    content.style.left = 0;\n                    if (window.innerWidth < 768) {\n                      content.style.paddingTop = 0;\n                      content.style.paddingBottom = 0;\n                    }\n                    window.top.CleverPush.webBanners[bannerIndex].iframe.style.height = '100%';\n                  }\n                }\n              }\n              \n              document.body.style.display = 'flex';\n              document.body.style.alignItems = 'center';\n              document.body.style.justifyContent = 'center';\n\n              var mainTable = document.querySelector('body > table');\n              if (mainTable) {\n                mainTable.parentNode.removeChild(mainTable);\n              }\n\n              var script = document.createElement(\"script\");\n              var link = document.createElement(\"link\");\n              script.src = 'https://cdn.ampproject.org/amp-story-player-v0.js';\n              script.async = true;\n              script.onload = function() {\n                var ASPECT_RATIO = 0.6;\n                var playerEl = document.createElement('amp-story-player');\n                var height = 600;\n                var width = (height * ASPECT_RATIO) + 'px';\n\n                if (window.innerWidth < 768) {\n                  playerEl.style.width = '100%';\n                  playerEl.style.height = '100%';\n                } else {\n                  playerEl.style.width = width;\n                  playerEl.style.maxWidth = '100%';\n                  playerEl.style.height = height + 'px';\n                }\n                playerEl.style.margin = '0 auto';\n\n                document.body.appendChild(playerEl);\n\n                var a = document.createElement('a');\n                a.setAttribute('href', url);\n                playerEl.appendChild(a);\n\n                var player = new AmpStoryPlayer(window, playerEl);\n                setTimeout(() => {\n                  player.load();\n                }, 0);\n              };\n              link.href = 'https://cdn.ampproject.org/amp-story-player-v0.css';\n              link.rel = 'stylesheet';\n              link.type = 'text/css';\n              document.head.append(script, link);\n            };\n\n            var bannerCloseLinks = document.querySelectorAll('a[href=\"#close\"]');\n            for (var i = 0; i < bannerCloseLinks.length; i++) {\n              bannerCloseLinks[i].addEventListener('click', function(e) {\n                e.preventDefault();\n                closeBanners();\n              });\n            }\n\n            var bannerDoNothingLinks = document.querySelectorAll('a[href=\"#\"]');\n            for (var i = 0; i < bannerDoNothingLinks.length; i++) {\n              bannerDoNothingLinks[i].addEventListener('click', function(e) {\n                e.preventDefault();\n              });\n            }\n\n            var openStoryLinks = document.querySelectorAll('a[href*=\"#open-story\"]');\n            for (var i = 0; i < openStoryLinks.length; i++) {\n              openStoryLinks[i].addEventListener('click', function(e) {\n                e.preventDefault();\n                e.stopPropagation();\n                if (e.currentTarget) {\n                  openStory(e.currentTarget.href.split('#')[0]);\n                }\n              });\n            }\n\n            function showElement(elementId) {\n              var element = document.querySelector(elementId);\n              if (element) {\n                element.style.display = 'block';\n              }\n            }\n      \n            function hideElement(elementId) {\n              var element = document.querySelector(elementId);\n              if (element) {\n                document.body.style.setProperty('height', document.body.scrollHeight - element.clientHeight + 'px', 'important');\n                element.style.display = 'none';\n              }\n            }\n\n            var bannerButtons = document.querySelectorAll('a, button, input[type=\"submit\"], input[type=\"button\"]');\n            var clickedElementIds = {};\n            for (var i = 0; i < bannerButtons.length; i++) {\n              bannerButtons[i].addEventListener('click', function(e) {\n                if (e.currentTarget && e.currentTarget.href && e.currentTarget.href.indexOf('#open-story') >= 0) {\n                  return;\n                }\n\n                var bannerIndex = getBannerIndex(bannerId);\n\n                var elementId = e.currentTarget.id.split('element-')[1];\n\n                if (!elementId) {\n                  var buttonElement = e.currentTarget.closest('[id*=\"element-\"]');\n                  if (buttonElement && buttonElement.id) {\n                    elementId = buttonElement.id.split('element-')[1];\n                  }\n  \n                  var parentElement = e.target.parentElement;\n                  if (!elementId && parentElement && parentElement.id) {\n                    elementId = parentElement.id.split('-')[1];\n                  }\n                }\n                \n                if (oncePerClickOnly) {\n                  window.top.CleverPush.webBanners[bannerIndex].saveBannerClick(bannerId);\n                }\n                var webBannerButtons = [];\n                var webBanner = window.top.CleverPush.webBanners[bannerIndex];\n                (webBanner.webBanner.contentState.rows || []).forEach(function(row) {\n                  (row.cols || []).forEach(function(col) {\n                    var buttons = (col.elements || []).filter(function(webBannerButton) { \n                      return webBannerButton.type === 'button' || webBannerButton.type === 'image' || webBannerButton.type === 'html';\n                    });\n                    webBannerButtons = webBannerButtons.concat(buttons);\n\n                    (col.subRowCols || []).forEach((subRowCol) => {\n                      var subButtons = (subRowCol.elements || []).filter(function(webBannerButton) { \n                        return webBannerButton.type === 'button' || webBannerButton.type === 'image' || webBannerButton.type === 'html';\n                      });\n                      webBannerButtons = webBannerButtons.concat(subButtons);\n                    });\n                  });\n                });\n\n                var clickedButton = webBannerButtons.find(function(webBannerButton) {\n                  return webBannerButton.id === elementId;\n                });\n\n                var webBannerButtonActions = (clickedButton || {}).webBannerButtonActions || [];\n                webBannerButtonActions.forEach(function(action, index) {\n                  var rowId = '[id*=row-'+action.row+']';\n                  var elementId = '[id*=element-'+action.element+']';\n                  if (action.type === 'showRow' && action.row && clickedButton.url !== '#close') {\n                    showElement(rowId);\n                  } else if (action.type === 'hideRow' && action.row && clickedButton.url !== '#close') {\n                    hideElement(rowId);\n                  } else if (action.type === 'showElement' && action.element && clickedButton.url !== '#close') {\n                    showElement(elementId);\n                  } else if (action.type === 'hideElement' && action.element && clickedButton.url !== '#close') {\n                    hideElement(elementId);\n                  } else if (action.type === 'function' && action.function) {\n                    try {\n                      eval(action.function);\n                    } catch (err) {\n                      log.debug(err);\n                    }\n                    if (index === webBannerButtonActions.length - 1) {\n                      closeBanners();\n                    }\n                  } else {\n                    closeBanners();\n                  }\n                });\n\n                if (e.currentTarget && e.currentTarget.type === 'submit' && e.currentTarget.form && !e.currentTarget.form.checkValidity()) {\n                  return;\n                }\n\n                if (clickedButton && !clickedButton.dontCountClickStatistics && !clickedElementIds[elementId] && !isPreview) {\n                  window.top.CleverPush.api.trackWebBannerEvent('clicked', bannerId, elementId, testId);\n                  clickedElementIds[elementId] = true;\n                }\n\n                webBanner.setIframeHeight();\n                return true;\n              }, true);\n            }\n          <\/script>\n          "),this.iframe.contentWindow.document.write(b),this.iframe.contentWindow.document.close();var w=0;!function e(){window.requestAnimationFrame((function(){n.setIframeHeight(),(w+=1)<300&&setTimeout(e,100)}))}()}}var y=function(e){var t=n.iframe.contentWindow.document.querySelector(e);t&&(t.style.display="none")};if(((null===(d=this.webBanner)||void 0===d||null===(h=d.contentState)||void 0===h?void 0:h.rows)||[]).forEach((function(e){(e.cols||[]).forEach((function(e){(e.elements||[]).filter(().forEach((function(e){(e.webBannerButtonActions||[]).forEach((function(n){n.type===f&&n.row&&e.url!==p?y("[".concat("id*=row","-").concat(n.row,"]")):n.type===m&&n.element&&e.url!==p&&y("[".concat("id*=element","-").concat(n.element,"]"))}))}))}))})),this.webBanner.darkenBackground?this.element.style.backgroundColor="rgba(0,0,0,.75)":(this.element.style.pointerEvents="none",this.content.style.pointerEvents="initial"),this.content.style.backgroundColor="transparent",(void 0===this.webBanner.closeOnBackgroundClick||this.webBanner.closeOnBackgroundClick)&&this.element.addEventListener("click",(function(e){e.target===e.currentTarget&&(n.element.style.display="none",document.body.classList.remove("cleverpush-banner-open"),n.removeBounceListener())})),"object"===(0,r.Z)(this.webBanner.style)){for(var v in"top"===this.webBanner.style.align&&(this.content.style.top=0),"bottom"===this.webBanner.style.align&&(this.content.style.bottom=0),"left"===this.webBanner.style.align&&(this.content.style.left=0),"right"===this.webBanner.style.align&&(this.content.style.right=0),"top"===this.webBanner.style.align&&(delete this.webBanner.style.bottom,this.webBanner.style.top&&(this.content.style.maxHeight="calc(100vh - ".concat(this.webBanner.style.top,"px)"))),"bottom"===this.webBanner.style.align&&(delete this.webBanner.style.top,this.webBanner.style.bottom&&(this.content.style.maxHeight="calc(100vh - ".concat(this.webBanner.style.bottom,"px)"))),"left"===this.webBanner.style.align&&delete this.webBanner.style.right,"right"===this.webBanner.style.align&&delete this.webBanner.style.left,this.webBanner.style.backgroundImage&&!this.webBanner.style.backgroundPosition&&(this.webBanner.style.backgroundPosition="center"),this.webBanner.style.backgroundImage&&!this.webBanner.style.backgroundRepeat&&(this.webBanner.style.backgroundRepeat="no-repeat"),this.webBanner.style.backgroundImage&&!this.webBanner.style.backgroundSize&&(this.webBanner.style.backgroundSize="cover"),this.webBanner.style.backgroundImage&&!this.webBanner.style.backgroundAttachment&&(this.webBanner.style.backgroundAttachment="local"),this.webBanner.style)if(this.webBanner.style.hasOwnProperty(v)){var A=this.webBanner.style[v];"backgroundImage"===v&&A.indexOf("url(")<0&&(A="url(".concat(A,")")),this.content.style[v]="number"==typeof A?"".concat(A,"px"):A}this.webBanner.style.align&&"center"!==this.webBanner.style.align||(this.content.style.margin="15px auto 0",this.content.style.maxHeight="calc(100% - 30px)"),this.webBanner.style.fullWidth?this.content.style.width="100%":this.webBanner.style.align&&"center"!==this.webBanner.style.align?this.content.style.width="".concat(this.contentWidth,"px"):(this.content.style.left="50%",this.content.style.width="".concat(this.contentWidth,"px"),this.content.style.marginLeft="".concat(this.contentWidth/2*-1,"px"))}this.webBanner.linkEnabled&&this.webBanner.link&&(this.content.style.cursor="pointer",this.iframe.style.pointerEvents="none",this.content.addEventListener("click",(function(){"_top"===n.webBanner.linkTarget?top.location.href=n.webBanner.link:window.open(n.webBanner.link,"_blank"),n.webBanner._id&&"PREVIEW"!==n.config.env&&n.api.trackWebBannerEvent(u,n.webBanner._id,"",n.testId)}))),this.closeButton=this.element.querySelector(".banner-close"),this.closeButton&&(this.closeButton.addEventListener("click",this.onCloseClick.bind(this)),this.webBanner.style&&this.webBanner.style.color&&(this.closeButton.style.color=this.webBanner.style.color)),this.webBanner._id&&"PREVIEW"!==this.config.env&&(this.api.trackWebBannerEvent(l,this.webBanner._id,"",this.testId),this.addBounceListener())}}},{key:"addBounceListener",value:function(){var e=this;"function"!=typeof navigator.sendBeacon||this.bounceListener||(this.bounceListener=function(){var n=new Blob([JSON.stringify({bannerId:e.webBanner._id,testId:e.testId})],{type:"application/x-www-form-urlencoded"});navigator.sendBeacon("".concat(e.api.endpoint,"/web-banner/event/").concat(h),n)},window.addEventListener("unload",this.bounceListener))}},{key:"removeBounceListener",value:,{key:"onClick",value:function(e){if(e.preventDefault(),"function"==typeof this.onClickCallback&&this.onClickCallback(),this.webBanner._id&&"PREVIEW"!==this.config.env&&(this.api.trackWebBannerEvent(u,this.webBanner._id,"",this.testId),this.removeBounceListener()),this.element.style.display="none",document.body.classList.remove("cleverpush-banner-open"),this.webBanner.buttonUrl)try{window.open(this.webBanner.buttonUrl,"_blank")||(location.href=this.webBanner.buttonUrl)}catch(e){location.href=this.webBanner.buttonUrl}}},{key:"onCloseClick",value:function(e){e.preventDefault(),e.stopPropagation(),"function"==typeof this.onClickCallback&&this.onClickCallback(),this.isVisible=!1,this.element.style.display="none",document.body.classList.remove("cleverpush-banner-open"),this.webBanner._id&&"PREVIEW"!==this.config.env&&(this.api.trackWebBannerEvent(d,this.webBanner._id,"",this.testId),this.removeBounceListener()),this.webBanner.oncePerClick&&this.saveBannerClick(this.webBanner._id)}}]),e}()},1117:3645:7537:9248:3379:569:9216:3565:7795:4589:]);
//# sourceMappingURL=728.925a3ae280880bb142b6.js.map