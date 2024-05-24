(function(window,$){window.wp=window.wp||{};function wpMediaElement(){var settings={};function initialize(){var selectors=[];if(typeof _wpmejsSettings!=='undefined'){settings=$.extend(true,{},_wpmejsSettings);}
settings.classPrefix='mejs-';settings.success=settings.success||function(mejs){var autoplay,loop;if(mejs.rendererName&&-1!==mejs.rendererName.indexOf('flash')){autoplay=mejs.attributes.autoplay&&'false'!==mejs.attributes.autoplay;loop=mejs.attributes.loop&&'false'!==mejs.attributes.loop;if(autoplay){mejs.addEventListener('canplay',function(){mejs.play();},false);}
if(loop){mejs.addEventListener('ended',false);}}};settings.customError=function(media,node){if(-1!==media.rendererName.indexOf('flash')||-1!==media.rendererName.indexOf('flv')){return '<a href="'+node.src+'">'+mejsL10n.strings['mejs.download-file']+'</a>';}};if('undefined'===typeof settings.videoShortcodeLibrary||'mediaelement'===settings.videoShortcodeLibrary){selectors.push('.wp-video-shortcode');}
if('undefined'===typeof settings.audioShortcodeLibrary||'mediaelement'===settings.audioShortcodeLibrary){selectors.push('.wp-audio-shortcode');}
if(!selectors.length){return;}
$(selectors.join(', ')).not('.mejs-container').filter(.mediaelementplayer(settings);}
return{initialize:initialize};}
window.wp.mediaelement=new wpMediaElement();$(window.wp.mediaelement.initialize);})(window,jQuery);