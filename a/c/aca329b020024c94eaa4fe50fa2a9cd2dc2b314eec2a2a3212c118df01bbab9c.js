!function(a,l,s,o){s.modules({"webengage/notification-layouts/notification-layout-~184fc0b7":[function(o,e,t){"use strict";var r=s.require("webengage/animate"),n=(s.require("webengage/dom"),s.require("webengage/events")),y=s.require("webengage/colors"),i=s.require("webengage/async");e.exports={getStaticStyles:function(){return""+o("../../../makeup/make-up-widget/wfonts/style.css")+o("../../../makeup/make-up-widget/sass/layouts/notification-layout-~184fc0b7.scss")},getStyles:function(o){var e=y.addHash(o.config),t=o.layoutAttributes,i=e.hideLogo?"none":"inline-block",r=y.lighterColor(e.backgroundColor,.05),n=y.darkerColor(e.c2aBackgroundColor,.2),a=(y.lighterColor(e.c2aBackgroundColor,.1),y.darkerColor(e.c2aBackgroundColor,.1)),l=(y.darkerColor(e.c2aBackgroundColor,.2),y.darkerColor(e.c2aBackgroundColor,.3)),s=a,c=e.titleColor,d=e.backgroundColor,p=y.lighterColor(c,.05),g=y.darkerColor(c,.1),u=y.darkerColor(d,.1),f=y.lighterColor(g,.05),b=y.isColorTooLight(e.backgroundColor)?"#333333":"#FFFFFF",m=t.show_rounded_corner?t.show_rounded_corner:"true",h="float:right; margin-top:20px; margin-left:10px;",w="",x=parseInt(t.width)+"px";return w="true"===m?"-moz-border-radius:5px; -webkit-border-radius:5px; border-radius:5px;":"-moz-border-radius:none; -webkit-border-radius:none; border-radius:none;","BOTTOM"===t.button_alignment?h="margin:0 auto; margin-top:10px;margin-bottom:10px;":"LEFT"===t.button_alignment?h="float:left; margin-top:20px; margin-right:10px;":"TOP"===t.button_alignment&&(h="margin:0 auto; margin-top:10px;"),"body{font-family         : "+e.fontFamily+";}\na,a:hover,a:active,a:visited{color               : "+e.c2aBackgroundColor+";text-decoration     : underline;}\n.backdrop{height              : 100%;width               : 100%;opacity             : 0.9;filter              : alpha(opacity=90);background-color    : "+t.modal_background+";position            : fixed;}\n.wrapper-outer{height              : 100%;width               : 100%;top                 : 0;left                : 0;position            : absolute;}\n.wrapper{vertical-align       : middle;margin               : 0 auto;width                : "+x+";margin-top           : 200px}\n.container{width               : auto;background-color    : "+e.backgroundColor+";border-color        : "+e.borderColor+";"+w+"}\n.title{color               : "+e.titleColor+";text-shadow         : 1px 1px "+r+";}\n.close{background-color    : "+c+";color               : "+d+";text-shadow         : 1px 1px "+p+";border              : 1px solid "+e.borderColor+";}\n.close:hover{background-color    : "+g+";color               : "+u+";text-shadow         : 1px 1px "+f+";}\n.description{color               : "+e.descriptionColor+";}\n.callToAction {"+h+"}\n.callToAction button{color               : "+e.c2aTextColor+";text-shadow         : 0 1px 0  "+e.c2aBackgroundColor+";border-color        : "+n+";background-color    : "+e.c2aBackgroundColor+";}\n.callToAction button:hover,.callToAction button:active {text-shadow         : 0 1px 0  "+s+";border-color        : "+l+";background-color    : "+a+";}\n.powered-by{display             : "+i+";}\ni.power-by-svg{color               : "+b+";}"},getMarkUp:function(o){var e,t,i,r,n,a=o.config,l=o.showTitle,s=(o.title,""),c="",d=o.layoutAttributes;if(o.actions&&o.actions.length){for(var p=0,g=o.actions.length;p<g;p++)if(o.actions[p].isPrime){i=o.actions[p].actionText,t=o.actions[p].actionEId,e=o.actions[p].actionLink;break}var u="<div id='"+o._formContainer+"' class='callToAction'><form target='_top' action='https://"+o.appHost+"/json/notification.html?action=save' id='"+o._form+"' method='POST'><button id='"+t+"' data-action-id='"+t+"' type='button'>"+i+"</button></form></div>";e&&("BOTTOM"===d.button_alignment?c=u:s=u)}return n=a.hideLogo?"":"style='display: inline-block !important'",r=l&&o.title?"":"style='display:none'","<div class='backdrop'></div><div class='wrapper-outer'><div dir='"+o.direction+"' class='wrapper'><div id='"+o._container+"' class='container'><a id='"+o._close+"' class='close'><i class='wewidgeticon we_close'></i></a><div class='title-container' "+r+"><span class='title'>"+o.title+"</span></div>"+s+"<div class='description'>"+o.description+"</div>"+c+"<div class='clear'></div><div class='powered-by' "+n+"><a target='_blank' href='"+o.webengageHost+"/?ref="+o.licenseCode+"&feature=notification' title='Powered by WebEngage, click to get yours'><i class='wewidgeticon we_full power-by-svg icon-extra-large'></i></a></div><div class='clear'></div></div></div></div>"},show:function(o,e){var t=e.dom,i=e.frame;t.css.applyCss(i,{"z-index":t.css.getMaxZIndex()+1}),this.resizeOnOrientationChange(e),r.fadeIn(o.body)},hide:selector:{close:".close"},positionNotification:function(o){var e,t,i=o.data,r=o.parentDom,n=o.dom,a=o.frame,l=(n.queryOne("body"),i.layoutAttributes);"BOTTOM_RIGHT"===l.alignment||"BOTTOM_LEFT"===l.alignment?t="BOTTOM_RIGHT"===l.alignment?"right":"left":t="TOP_RIGHT"===l.alignment?"right":"left",e={position:"fixed",visibility:"visible",height:"100%",width:"100%",we_top:"0px"},"right"==t?e.we_right="0px":e.we_left="0px",r.css.applyCss(a,e)},closeModalOnClickBackdrop:function(o){var e=o.dom,t=e.queryOne(".wrapper-outer"),i=o.data;n.bind(t,"click",function(o){-1<(o.target||o.srcElement).className.indexOf("wrapper-outer")&&"false"!==i.layoutAttributes.modal_close&&e.queryOne(".close").click()})},resize:function(o,e){var t=o.dom,i=Math.max(t.css.getWindowHeight()/2-t.css.getElementHeight(t.queryOne(".wrapper"))/2,10)+"px";t.css.applyCss(t.queryOne(".wrapper"),{"margin-top":i}),"function"==typeof e&&e()},resizeOnOrientationChange:function(o){var e=this;if(void 0===a.orientation){var t=function(){return 0<a.outerWidth?a.outerWidth>a.outerHeight?90:0:l.body.offsetWidth>l.body.offsetHeight?90:0},i=t(),r=-1;n.bind(a,"resize",function(){(i=t())!=r&&(r=i,e.resize(o))})}else n.bind(a,"orientationchange",},loadResources:function(o,e){var t=o.dom.query("img");0<t.length?i.mapParallel(t,function(o,e){n.bind(o,"load",},e):e()},update:function(o,e){var t=this;this.positionNotification(o),this.closeModalOnClickBackdrop(o),this.loadResources(o,},init:function(o,e){var t=o.dom,i=t.queryOne("body");t.addClass(i,"transparent"),this.update(o,e)}}},{"../../../makeup/make-up-widget/sass/layouts/notification-layout-~184fc0b7.scss":"makeup/make-up-widget/sass/layouts/notification-layout-~184fc0b7.scss","../../../makeup/make-up-widget/wfonts/style.css":"makeup/make-up-widget/wfonts/style.css"}],"makeup/make-up-widget/sass/layouts/notification-layout-~184fc0b7.scss":[function(o,e,t){e.exports=".title,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}.close,.close:hover,.powered-by a,.powered-by a:hover{text-decoration:none}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;vertical-align:baseline}ol,ul{list-style:none;padding:0;margin:0}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}html{background:0 0}body{font-family:Arial,sans-serif;background-color:transparent;color:#333;font-size:13px;line-height:16px}ol li,ul li{margin-left:20px}ul li{list-style-type:circle}ol li{list-style-type:decimal}.clear{clear:both}.transparent{-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0}.wrapper{font-size:inherit;overflow:visible}.container{padding:10px;border:1px solid #666;background-color:#f5f5f5;width:500px;overflow:visible;position:relative}.title{font-size:22px;line-height:26px;font-weight:400;text-shadow:1px 1px #fff;overflow:hidden}.close{height:30px;width:30px;background-repeat:no-repeat;background-position:0 0;position:absolute;top:-15px;right:-15px;font-size:16px;line-height:16px;background-color:#666;color:#fff;text-shadow:1px 1px #000;-moz-border-radius:20px;-webkit-border-radius:20px;border-radius:20px;cursor:pointer;border:1px solid #bbb}.close:hover{background-color:#c00}.close i,.close span{display:inline-block;font-size:8px;margin:11px}.description{line-height:15px;font-size:13px;color:#666;margin-top:7px;overflow:hidden}.description p{margin-bottom:10px}.callToAction{text-align:center;overflow:hidden}.callToAction button{background-color:#eee;border:1px solid #ccc;border-bottom:1px solid #bbb;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;color:#333;font-size:11px;font-weight:700;line-height:1;padding:8px;text-align:center;text-shadow:0 1px 0 #eee}.callToAction button:active,.callToAction button:hover{background-color:#ddd;border:1px solid #bbb;border-bottom:1px solid #999;cursor:pointer;text-shadow:0 1px 0 #ddd}.powered-by{float:right;display:none;margin-top:3px;margin-right:3px}.powered-by a{position:relative;display:inline-block}.rtl{float:left}.icon-extra-large:before{vertical-align:-10%;font-size:2.3em}.icon-large:before{vertical-align:-10%;font-size:1.5em}.icon-mid:before{vertical-align:-10%;font-size:1em}.icon-small:before{vertical-align:-10%;font-size:.75em}"},{}],"makeup/make-up-widget/wfonts/style.css":[{}]},{},[])}(window,document,webengage);