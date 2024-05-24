!function(v,f,o,c){"use strict";var g="media",t="b-"+g,l=t,m="iframe",h=g+"--player",p="is-"+t,y="."+h,r=y+":not(."+p+")",$=g+"__icon",u="."+$+"--play",b="is-playing",C="is-b-player-playing",a="data-",w=a+m+"-title",k=a+"b-url data-url",P="b-instagram",_=v.multimedia||!1;function e(a){var r,s,d,n,e=v(a),i=e.find(m),a=e.find(u);v.isElm(a)&&(r=v.attr(a,k),s=v.attr(a,w),d=e.hasClass(P),r&&v.sanitizer.isDangerous("src",r)||(v.remove(i),e.on("click."+t,u,function(a){if(a.preventDefault(),!r)return!1;_&&_.pause();var e,i="."+b+":not(."+P+")",t=v.find(c,i),l=this.parentNode;v.isElm(t)&&(i=v.find(c,i+" "+m),v.remove(i),t.className=t.className.replace(/(\S+)playing/,"")),v.addClass(l,b),d||(a=(l=a).target,e=v.closest(a,y),l=v.find(e,m),r=v.attr(a,k),s=v.attr(a,w),v.remove(l),window.setTimeout(function(){n||(n=v.create(m,"media__element"),v.attr(n,{src:r,allow:"autoplay; fullscreen",title:f.checkPlain(s)})),e.appendChild(n),v.addClass(c.body,C),v.trigger(o,"blazy:mediaPlaying",{player:e})}))}),e.on("click."+t,".media__icon--close",function(a){if(a.preventDefault(),d)return v.addClass(this,"visually-hidden"),!1;var e=this.parentNode,a=v.find(e,m);e.className.match(b)&&(e.className=e.className.replace(/(\S+)playing/,"")),v.remove(a),v.removeClass(c.body,C),v.trigger(o,"blazy:mediaStopped",{player:e})}),v.removeClass(c.body,C),e.addClass(p)))}f.theme.blazyMedia=function(a){var e=a.el||a.element,i=v(e),t=v.image.alt(e),l=v.parse(v.attr(e,"data-b-media data-"+g)),r=l.provider,s=l.token,d=v.toInt(l.width,640),n=v.image.ratio(l),o=i.attr("data-box-url"),c=e.href,m=i.attr("data-oembed-url",c,!0),p=g+"__element",y=a.imgClass?p+" "+a.imgClass:p,u=l.id?" media--"+l.id:"",b=l.playable||"iframe"===l.boxType?" "+h:"",e=f.t("Stop and close the video"),i=f.t("Load and play the video"),c="",p="",l="";return o&&(l+='<img src="$imgUrl" class="$imgClass" alt="$alt" loading="lazy" decoding="async" />'),b&&(r&&(c=' data-b-provider="'+r+'"'),s&&(p=' data-b-token="'+s+'"'),l+='<span class="$icon $icon--close" aria-label="$ariaClose"></span>',l+='<span class="$icon $icon--play" data-b-url="$oembed" data-iframe-title="$alt" aria-label="$ariaPlay"$bProvider$bToken></span>'),l='<div class="$md $idClass $md--switch $player $md--ratio $md--ratio--fluid" aria-live="polite" style="padding-bottom: $pad%">'+l+"</div>",a.unwrap||(l='<div class="$wrapper $wrapper--inline" style="width: $widthpx">'+l+"</div>"),v.template(l,{md:g,icon:$,ariaClose:f.checkPlain(e),ariaPlay:f.checkPlain(i),bProvider:c,bToken:p,idClass:u,player:b,pad:n,imgUrl:o,imgClass:y,alt:t,oembed:m,width:d,wrapper:g+"-wrapper"})},f.behaviors.blazyMedia={attach:detach:function(a,e,i){"unload"===i&&(v.removeClass(c.body,C),v.once.removeSafely(l,r,a))}}}(dBlazy,Drupal,this,this.document);