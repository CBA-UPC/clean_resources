"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8681,83744],{89291:(t,e,i)=>{i.d(e,{Z:()=>o});var n=i(27641);function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){(0,n.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const o={getMedia:function(t){var e=this.getMediaNode(t);return e?JSON.parse(e.textContent):{}},getMediaNode:getOtherMediaDataOfSameParentNodes:function(t,e,i){var n=[],a=this.getMediaNode(t);if(a){var s=a.closest("[".concat(e,"]"));if(s){var o=s.querySelectorAll('[data-media-id]:not([data-media-id="'.concat(t,'"])'));i=i>0?i:o.length,o.forEach((function(t,e){e<i&&n.push(JSON.parse(t.textContent))}))}}return n},setMediaAddPreviousMediaToAutomaticPlaylist:function(t){var e={addPreviousMediaToAutomaticPlaylist:arguments.length>1&&void 0!==arguments[1]&&arguments[1]};this.setMediaContent(t,e)},setMediaContent:function(t,e){var i=document.querySelector('[data-media-id="'.concat(t,'"]')),n=s(s({},JSON.parse(i.textContent)),e);i.textContent=JSON.stringify(n)}}},99440:(t,e,i)=>{i.d(e,{Z:()=>n});const n=(0,i(20771).Q_)("currentNotifications",{state:actions:{showNotify:function(t){var e=this;if(t.text){var i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=Math.trunc(16*Math.random());return("x"===t?e:3&e|8).toString(16)}));t.type&&!["success","error","warning","info"].includes(t.type)||(t.type="info"),Object.keys(this.notifications).length>0&&(this.notifications={}),this.notifications[i]=t,setTimeout((,t.timeout||5e3)}},removeNotify:})},76366:(t,e,i)=>{i.d(e,{Z:()=>p});var n=i(27641),a=i(62559),s=i(20771),o=i(99440),l=i(19565),r=i(75712),c=i(19327);function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){(0,n.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var y=const p=(0,s.Q_)("playlist",{state:function(){return{isOpen:!1,manualPlaylist:(0,l._aR)("manualPlaylist",[]),automaticPlaylist:(0,l._aR)("automaticPlaylist",[]),shouldPlayFirstElement:!1}},getters:{playlist:function(t){return[].concat((0,a.Z)(t.manualPlaylist),(0,a.Z)(t.automaticPlaylist))}},actions:d(d({},(0,s.nv)(o.Z,["showNotify"])),{},{togglePlaylist:openPlaylist:function(){this.isOpen=!0,window.addEventListener("click",this.maybeClose),c.Z.publish("player.playlist.show")},closePlaylist:maybeClose:function(t){var e=new Set(document.querySelectorAll("[data-open-playlist-area]"));!t.composedPath().some(()&&this.closePlaylist()},listToUse:addToPlaylist:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.isInPlaylist=!0,this.listToUse(t.isInAutomaticPlaylist).push(t),e&&this.showNotify({text:(0,r.Z)("playlist.added.confirmation").replace("%start_u%",'<span class="t-td-und">').replace("%end_u%","</span>"),onClick:this.openPlaylist,icon:"picto-check"})},removeFromPlaylist:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.getMediaInPlaylist(t),n=this.listToUse(null==i?void 0:i.isInAutomaticPlaylist),a=n.findIndex((function(e){return y(e,t)}));n.splice(a,1),e&&this.showNotify({text:(0,r.Z)("playlist.removed.confirmation").replace("%start_u%",'<span class="t-td-und">').replace("%end_u%","</span>"),onClick:this.openPlaylist,icon:"picto-close-red"})},removeAllAutoFromPlaylist:function(){var t=this;(0,a.Z)(this.automaticPlaylist).forEach(()},rewritePlaylist:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=this.listToUse(n);a.length=0,t.forEach(()},getMediaInPlaylist:function(t){return(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?this.manualPlaylist:this.playlist).find(()},isMediaInPlaylist:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!!this.getMediaInPlaylist(t,e)},shouldPlayFirstElementInPlaylist:)})},83744:8681:(t,e,i)=>{i.r(e),i.d(e,{default:);var n=i(49458),a={key:0,class:"a-playlist-btn__label"},s={key:1,class:"a-playlist-btn__label"};var o=i(62559),l=i(27641),r=i(20771),c=i(76366),u=i(19327),d=i(89291);nst f={name:"AddToPlaylist",props:{mediaId:{type:String,default:""},mediaImage:{type:String,default:""},mediaDuration:{type:String,default:""},mediaPubdate:{type:String,default:""},showLabel:{type:Boolean,default:!0},btnClasses:{type:Array,default:,classAdd:{type:String,default:"a-playlist-btn--add"},classRemove:{type:String,default:"a-playlist-btn--remove"}},data:function(){return{mediaJson:void 0,iconAdd:"picto-playlist-add",iconRemove:"picto-playlist-remove"}},computed:p(p({},(0,r.Kc)(c.Z)),{},{getClasses:function(){var t=(0,o.Z)(this.btnClasses);return t.push(this.isCurrentMediaInPlaylist?this.classRemove:this.classAdd),t.filter(()},icon:dataPlaylist:isCurrentMediaInPlaylist:),methods:p(p({},(0,r.nv)(c.Z,["addToPlaylist","removeFromPlaylist","isMediaInPlaylist","shouldPlayFirstElementInPlaylist"])),{},{pushItemInPlaylist:function(){this.mediaJson=d.Z.getMedia(this.mediaId),this.mediaJson.diffusion.duration=this.mediaDuration,this.mediaJson.diffusion.pubdate=this.mediaPubdate,this.mediaJson.isInAutomaticPlaylist=!1,this.addToPlaylist(this.mediaJson),u.Z.publish("player.playlist.add",{media:this.mediaJson}),u.Z.publish("player.playlist.preloadMedia",{mediaId:this.mediaJson.mediaId})},removeItemFromPlaylist:function(){this.removeFromPlaylist(this.mediaId),u.Z.publish("player.playlist.remove",{mediaId:this.mediaId}),u.Z.publish("player.playlist.update")},click:function(){this.shouldPlayFirstElementInPlaylist(!0),this.isCurrentMediaInPlaylist?this.removeItemFromPlaylist():this.pushItemInPlaylist()}})};const h=(0,i(83744).Z)(f,[["render",function(t,e,i,o,l,r){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{class:(0,n.normalizeClass)(r.getClasses),type:"button","data-open-playlist-area":"",onClick:e[0]||(e[0]=(0,n.withModifiers)((,["stop","prevent"]))},[(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)("a-svg a-svg--".concat(r.icon))},null,2),!r.isCurrentMediaInPlaylist&&i.showLabel?((0,n.openBlock)(),(0,n.createElementBlock)("span",a,(0,n.toDisplayString)(t.$translate("playlist.add.cta")),1)):r.isCurrentMediaInPlaylist&&i.showLabel?((0,n.openBlock)(),(0,n.createElementBlock)("span",s,(0,n.toDisplayString)(t.$translate("playlist.remove.cta")),1)):(0,n.createCommentVNode)("",!0)],2)}]])}}]);