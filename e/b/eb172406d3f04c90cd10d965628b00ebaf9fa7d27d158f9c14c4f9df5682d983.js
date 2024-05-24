"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92423,83744],{89291:(t,e,i)=>{i.d(e,{Z:()=>r});var n=i(27641);function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){(0,n.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const r={getMedia:function(t){var e=this.getMediaNode(t);return e?JSON.parse(e.textContent):{}},getMediaNode:getOtherMediaDataOfSameParentNodes:function(t,e,i){var n=[],a=this.getMediaNode(t);if(a){var o=a.closest("[".concat(e,"]"));if(o){var r=o.querySelectorAll('[data-media-id]:not([data-media-id="'.concat(t,'"])'));i=i>0?i:r.length,r.forEach((function(t,e){e<i&&n.push(JSON.parse(t.textContent))}))}}return n},setMediaAddPreviousMediaToAutomaticPlaylist:function(t){var e={addPreviousMediaToAutomaticPlaylist:arguments.length>1&&void 0!==arguments[1]&&arguments[1]};this.setMediaContent(t,e)},setMediaContent:function(t,e){var i=document.querySelector('[data-media-id="'.concat(t,'"]')),n=o(o({},JSON.parse(i.textContent)),e);i.textContent=JSON.stringify(n)}}},99440:(t,e,i)=>{i.d(e,{Z:()=>n});const n=(0,i(20771).Q_)("currentNotifications",{state:actions:{showNotify:function(t){var e=this;if(t.text){var i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=Math.trunc(16*Math.random());return("x"===t?e:3&e|8).toString(16)}));t.type&&!["success","error","warning","info"].includes(t.type)||(t.type="info"),Object.keys(this.notifications).length>0&&(this.notifications={}),this.notifications[i]=t,setTimeout((,t.timeout||5e3)}},removeNotify:})},76366:(t,e,i)=>{i.d(e,{Z:()=>f});var n=i(27641),a=i(62559),o=i(20771),r=i(99440),s=i(19565),l=i(75712),c=i(19327);function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){(0,n.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var y=const f=(0,o.Q_)("playlist",{state:function(){return{isOpen:!1,manualPlaylist:(0,s._aR)("manualPlaylist",[]),automaticPlaylist:(0,s._aR)("automaticPlaylist",[]),shouldPlayFirstElement:!1}},getters:{playlist:function(t){return[].concat((0,a.Z)(t.manualPlaylist),(0,a.Z)(t.automaticPlaylist))}},actions:d(d({},(0,o.nv)(r.Z,["showNotify"])),{},{togglePlaylist:openPlaylist:function(){this.isOpen=!0,window.addEventListener("click",this.maybeClose),c.Z.publish("player.playlist.show")},closePlaylist:maybeClose:function(t){var e=new Set(document.querySelectorAll("[data-open-playlist-area]"));!t.composedPath().some(()&&this.closePlaylist()},listToUse:addToPlaylist:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.isInPlaylist=!0,this.listToUse(t.isInAutomaticPlaylist).push(t),e&&this.showNotify({text:(0,l.Z)("playlist.added.confirmation").replace("%start_u%",'<span class="t-td-und">').replace("%end_u%","</span>"),onClick:this.openPlaylist,icon:"picto-check"})},removeFromPlaylist:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.getMediaInPlaylist(t),n=this.listToUse(null==i?void 0:i.isInAutomaticPlaylist),a=n.findIndex((function(e){return y(e,t)}));n.splice(a,1),e&&this.showNotify({text:(0,l.Z)("playlist.removed.confirmation").replace("%start_u%",'<span class="t-td-und">').replace("%end_u%","</span>"),onClick:this.openPlaylist,icon:"picto-close-red"})},removeAllAutoFromPlaylist:function(){var t=this;(0,a.Z)(this.automaticPlaylist).forEach(()},rewritePlaylist:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=this.listToUse(n);a.length=0,t.forEach(()},getMediaInPlaylist:function(t){return(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?this.manualPlaylist:this.playlist).find(()},isMediaInPlaylist:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!!this.getMediaInPlaylist(t,e)},shouldPlayFirstElementInPlaylist:)})},83744:92423:(t,e,i)=>{i.r(e),i.d(e,{default:);var n=i(49458);var a=i(27641),o=i(20771),r=i(76366),s=i(56712),l=i(3658),c=i(89291),u=i(40395);r f=(0,l.Z)();const p={name:"AddMultipleMediaToPlaylist",mixins:[(0,u.Z)(f,"",!1)],props:{mediaIdToPlay:{type:String,required:!0},maxMediaWillBeAddedToPlaylist:{type:Number,required:!0},playFirstMedia:{type:Boolean,default:!0},addFirstMedia:{type:Boolean,default:!1}},data:methods:y(y(y({},(0,o.nv)(r.Z,["isMediaInPlaylist","addToPlaylist","shouldPlayFirstElementInPlaylist"])),(0,o.nv)(s.Z,["updateInitTime","updateIsAuto"])),{},{addOtherMediaToPlaylist:function(){var t=this;c.Z.getOtherMediaDataOfSameParentNodes(this.mediaIdToPlay,"data-add-multiple-editions-to-playlist",this.maxMediaWillBeAddedToPlaylist).forEach((function(e){t.isMediaInPlaylist(e.mediaId)||(e.diffusion.image=e.mediaImage,e.isInAutomaticPlaylist=!1,t.addToPlaylist(e,!1))})),this.updateIsAuto(!1),this.shouldPlayFirstElementInPlaylist(!1),this.updateInitTime(0),this.playOrPause({newMedia:this.mediaIdToPlay,isChapter:!0})}})};const h=(0,i(83744).Z)(p,[["render",function(t,e,i,a,o,r){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:"button",onClick:e[0]||(e[0]=(0,n.withModifiers)((,["stop","prevent"]))},[(0,n.renderSlot)(t.$slots,"default")])}]])}}]);