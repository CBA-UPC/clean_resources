!this,(()=>(this.dmpJsonp=this.dmpJsonp||[]).push([[721],{3102:4334:3421:3253:(e,t,n)=>{"use strict";n.d(t,{Ym:()=>s,ZP:()=>r,kA:()=>d,t:()=>l});var i=n(5913),a=n(3828);const o={destroyCampaignImmediatly:!1,monitorCampaign:!1,resetIas:!0};function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;switch((arguments.length>1?arguments[1]:void 0).type){case i.Z.AD_LOADED:return{...e,resetIas:!1,monitorCampaign:!0};case i.Z.AD_ERROR:case i.Z.AD_LINEAR_STOPPED:case i.Z.AD_SKIPPED:case i.Z.AD_STOPPED:return{...e,destroyCampaignAsync:!0,monitorCampaign:!1};case a.S:return o;default:return e}}const s=e=>e.ias.destroyCampaignAsync,l=e=>e.ias.monitorCampaign,d=e=>e.ias.resetIas},9905:(e,t,n)=>{"use strict";n.d(t,{M:()=>a,i:()=>i});const i="KILL_MOAT",a="LOAD_MOAT"},1857:(e,t,n)=>{"use strict";n.d(t,{Nw:()=>l,ZP:()=>r,q1:()=>s});var i=n(9905),a=n(3828);const o={shouldLoad:!1,dataLayerEnabled:!1};function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;switch((arguments.length>1?arguments[1]:void 0).type){case i.M:return{...e,shouldLoad:!0,dataLayerEnabled:!0};case i.i:return{...e,shouldLoad:!1};case a.S:return o;default:return e}}const s=e=>e.moat.shouldLoad,l=e=>e.moat.dataLayerEnabled},1858:(e,t,n)=>{"use strict";n.d(t,{R1:()=>b,Aj:()=>U,P3:()=>M});var i=n(3012),a=n(5913),o=n(4238),r=n(8540),s=n(1623),l=n(3844),d=n(8134),c=n(1346),u=n(1427),_=n(8520),E=n(6391),A=n(5931),p=n(4753),D=n(6765),m=n(2631),R=n(4746),T=n(4579),g=n(9299);const S=var h=n(4622),I=n(4784),P=n(6187),O=n(6685),v=n(2989),f=n(1697);const y=L=N=var C=n(436),w=n(4755);let b=null;async function M(){const{AdEvents:e,initAdStack:t,resetAdStack:T,adEventEmitter:g}=await n.e(124).then(n.bind(n,4323)).catch((()=>{throw new Error("Couldn't load advertising chunk")})),{selector:y,syncSelector:L}=N((0,l.bh)(),g),M=window.dm.mainNode,Z=$(M);!function(e,t,n){const i={[t.AD_BREAK_WILL_START]:a.Z.AD_BREAK_WILL_START,[t.AD_BUFFER_FINISH]:a.Z.AD_BUFFER_FINISH,[t.AD_BUFFER_START]:a.Z.AD_BUFFER_START,[t.AD_CLICK]:a.Z.AD_CLICK,[t.AD_COMPANIONS_RECEIVED]:a.Z.AD_COMPANIONS_RECEIVED,[t.AD_ERROR]:a.Z.AD_ERROR,[t.AD_IMA_SDK_LOADED]:a.Z.AD_IMA_SDK_LOADED,[t.AD_IMPRESSION]:a.Z.AD_IMPRESSION,[t.AD_LINEAR_SLOT_ENDED]:a.Z.AD_LINEAR_SLOT_ENDED,[t.AD_LINEAR_SLOT_STARTED]:a.Z.AD_LINEAR_SLOT_STARTED,[t.AD_LINEAR_STARTED]:a.Z.AD_LINEAR_STARTED,[t.AD_LINEAR_STOPPED]:a.Z.AD_LINEAR_STOPPED,[t.AD_LINEAR_WILL_START]:a.Z.AD_LINEAR_WILL_START,[t.AD_LOADED]:a.Z.AD_LOADED,[t.AD_LOG]:a.Z.AD_LOG,[t.AD_NON_LINEAR_DISPLAY_STARTED]:a.Z.NON_LINEAR_DISPLAY_STARTED,[t.AD_NON_LINEAR_WILL_START]:a.Z.AD_NON_LINEAR_WILL_START,[t.AD_POD_ERROR]:a.Z.AD_POD_ERROR,[t.AD_SDK_READY]:a.Z.AD_SDK_READY,[t.AD_SKIPPED]:a.Z.AD_SKIPPED,[t.AD_SKIP_REQUESTED]:a.Z.SKIP_AD_REQUESTED,[t.AD_SLOT_INJECTED]:a.Z.AD_SLOT_INJECTED,[t.AD_STACK_ERROR]:a.Z.AD_STACK_ERROR,[t.AD_STARTED]:a.Z.AD_STARTED,[t.AD_STOPPED]:a.Z.AD_STOPPED,[t.AD_VIDEO_COMPLETE]:a.Z.AD_VIDEO_COMPLETE,[t.AD_VIDEO_SKIPPABLE_REMAINING_TIME]:a.Z.AD_VIDEO_SKIPPABLE_REMAINING_TIME,[t.AD_VIDEO_SKIPPABLE_STATE]:a.Z.AD_VIDEO_SKIPPABLE_STATE,[t.AD_VIDEO_START]:a.Z.AD_VIDEO_START,[t.AD_VIDEO_VOLUME_CHANGED]:a.Z.AD_VIDEO_VOLUME_CHANGED,[t.AD_VMAP_RECEIVED]:a.Z.VMAP_RECEIVED,[t.AD_VMAP_REQUESTED]:a.Z.VMAP_REQUESTED,[t.IMA_NATIVE_AD_REQUESTED]:a.Z.IMA_AD_REQUESTED,[t.IMA_NATIVE_AD_STOPPED]:a.Z.IMA_AD_STOPPED,[t.PLAYER_API_DEL_KEYS_CUST_CONFIG]:a.Z.API_DEL_KEYS_CUST_CONFIG,[t.PLAYER_API_SET_CUST_CONFIG]:a.Z.API_SET_CUST_CONFIG,[t.PLAYER_CONTENT_SIZE_CHANGED]:a.Z.CONTENT_SIZE_CHANGED,[t.PLAYER_ERROR]:a.Z.ERROR_PLAYER,[t.PLAYER_GDPR_CONSENT_COLLECTION_REQUESTED]:a.Z.GDPR_CONSENT_COLLECTION_REQUESTED,[t.PLAYER_GDPR_CONSENT_COLLECTION_RESOLVED]:a.Z.GDPR_CONSENT_COLLECTION_RESOLVED,[t.PLAYER_HEAVYADSINTERVENTION_CHANGED]:a.Z.PLAYER_HEAVYADSINTERVENTION_CHANGED,[t.PLAYER_IMA_NATIVE_EVENT]:a.Z.IMA_NATIVE_EVENT,[t.PLAYER_LOAD_VIDEO]:a.Z.LOAD_VIDEO,[t.PLAYER_PAUSE_REQUESTED]:a.Z.PAUSE_REQUESTED,[t.PLAYER_PLAY_REQUESTED]:a.Z.PLAY_REQUESTED,[t.PLAYER_SCHEDULER_END_SEQUENCE]:a.Z.SCHEDULER_END_SEQUENCE,[t.PLAYER_SEEK_REQUESTED]:a.Z.SEEK_REQUESTED,[t.PLAYER_SEQUENCE_ENDED]:a.Z.SEQUENCE_ENDED,[t.PLAYER_TOGGLE_PLAYBACK_REQUESTED]:a.Z.TOGGLE_PLAYBACK_REQUESTED,[t.PLAYER_VIDEO_DURATION_CHANGE]:a.Z.VIDEO_DURATION_CHANGE,[t.PLAYER_VIDEO_ENDED]:a.Z.VIDEO_ENDED,[t.PLAYER_VIDEO_PAUSE]:a.Z.VIDEO_PAUSE,[t.PLAYER_VIDEO_PLAYING]:a.Z.VIDEO_PLAYING,[t.PLAYER_VIDEO_PLAY]:a.Z.VIDEO_PLAY,[t.PLAYER_VIDEO_TIME_UPDATE]:a.Z.VIDEO_TIME_UPDATE,[t.PLAYER_VIDEO_VOLUME_CHANGED]:a.Z.VIDEO_VOLUME_CHANGED};for(const[t,a]of Object.entries(i))n.addEventListener(t,(),e.on(a,();c.tY.on((),w.U.on(()}(Z,e,g),b=await t({config:i.Z,injectStyles:C.f,playerSizeAPI:d.b,playerAPI:{createError:r.T,getStore:l.bh,getPlayerVolume:getFullscreenState:getVideoSettings:getVideoState:isRealAutoplay:getPlaybackState:getNativeSdkCapabilities:getChromecastStatus:getSequenceState:getCcpaToLeoParam:S,dispatchFromPlayer:s.Pj,onFallbackToVideoContent:getMetadata:,eventBus:{getEventBusPayload:I.gq,createEventBusEvent:I.i5,sendEventToEventBus:I.z2}}).catch((),Z.on(a.Z.LOAD_VIDEO,T)}const U=,3714:(e,t,n)=>{"use strict";n.d(t,{Js:()=>T,L1:()=>u,X2:()=>_,Yd:()=>g,ZP:()=>s,au:()=>R,b3:()=>p,ds:()=>E,ep:()=>D,fP:()=>l,jE:()=>A,ou:()=>c,xU:()=>m,xV:()=>d});var i=n(2279),a=n(5913),o=n(3828);const r={creativeType:null,isAdSlotRunning:!1,displayedCompanion:null,companions:null,adType:null,isNonLinearDisplayRunning:!1,isSkippable:!1,hasStarted:!1,skippableRemainingTime:0,currentTime:0,adEndedReason:null,adError:null,duration:0};function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.Z.AD_LOADED:return{...e,creativeType:t.creativeType,adType:t.adType};case a.Z.AD_LINEAR_WILL_START:return{...e,isAdSlotRunning:!0};case a.Z.AD_COMPANIONS_RECEIVED:return{...e,companions:t.companionAds,displayedCompanion:t.displayedCompanion};case a.Z.AD_NON_LINEAR_DISPLAY_STARTED:return{...e,isNonLinearDisplayRunning:t.isNonLinearDisplayRunning};case a.Z.AD_VIDEO_SKIPPABLE_STATE:return{...e,isSkippable:t.adSkippable};case a.Z.AD_STARTED:return{...e,hasStarted:!0};case a.Z.AD_VIDEO_SKIPPABLE_REMAINING_TIME:return{...e,skippableRemainingTime:t.time};case a.Z.VIDEO_TIME_UPDATE:return e.isAdSlotRunning?{...e,currentTime:t.time}:e;case a.Z.VIDEO_DURATION_CHANGE:return e.isAdSlotRunning?{...e,duration:t.duration}:e;case a.Z.RESET_CURRENT_AD_BREAK:case o.S:return r;case a.Z.SET_AD_FALLBACK:case a.Z.AD_BREAK_STARTED:case a.Z.AD_SKIPPED:case a.Z.AD_STOPPED:case a.Z.AD_ERROR:return{...r,...t.adError&&{adError:t.adError},isAdSlotRunning:e.isAdSlotRunning};case a.Z.AD_LINEAR_STOPPED:return{...e,adEndedReason:t.reason};case a.Z.AD_LINEAR_SLOT_ENDED:return{...e,isAdSlotRunning:!1};default:return e}}const l=e=>"nonlinear"===e.ads.creativeType,d=e=>e.ads.isAdSlotRunning,c=e=>e.ads.hasStarted,u=e=>"audio"===e.ads.adType,_=e=>e.ads.isNonLinearDisplayRunning,E=e=>e.ads.isSkippable,A=e=>e.ads.skippableRemainingTime,p=e=>e.ads.currentTime,D=e=>e.ads.companions,m=e=>e.ads.adEndedReason,R=e=>e.ads.adError,T=e=>e.ads.duration,g=(0,i.P1)([d,u,e=>e.ads.displayedCompanion],()},1623:3578:7633:9986:7149:4622:1543:(e,t,n)=>{"use strict";n.d(t,{AU:()=>o,MA:()=>a,P0:()=>i});const i="DISPLAY_AUTOSKIP",a="PLAYER_INTERACTION",o="PLAYER_RESET_INTERACTION"},2631:9235:6534:(e,t,n)=>{"use strict";n.d(t,{Ei:()=>a,LG:()=>o,NX:()=>r,ey:()=>i});const i="IDLE",a="PRESSED",o="CONNECTING",r="ACTIVE"},1346:4746:93:9877:8002:4579:9299:5647:(e,t,n)=>{"use strict";n.d(t,{$7:()=>o,B1:()=>a,j8:()=>i});const i="CLOSE_DIALOG_CONSENT",a="DIALOG_CONSENT_CLOSED",o="UPDATE_CCPA_CONSENT_STRING"},5653:9628:4279:817:1799:5341:5586:6120:4784:7511:2675:(e,t,n)=>{"use strict";n.d(t,{gq:()=>D,Au:()=>g});var i=n(3012),a=n(6391),o=n(3844),r=n(66),s=n(2989),l=n(5727),d=n(7511),c=n(3299),u=n(6685),_=n(6765),E=n(1427),A=n(5586),p=n(8520);const D=m=R=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,o.bh)().getState();const{info:t}=function(){let{state:e=(0,o.bh)().getState()}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=i.Z.window().navigator.connection,n=(0,r.dJ)(e),c=window.dm.mainNode;return{info:{visitor:{id:window.DMP_V1ST,user_xid:(0,r.fi)(e),ip:null,traffic_segment:window.DMP_TS,as_number:(0,r.yZ)(e),continent:(0,r.p6)(e),country:(0,r.Uk)(e),region:(0,r.PP)(e),city:null,referer:window.DMP_REFERER,onsite:window.DMP_ONSITE,timezone_offset:window.dmp_getTimezoneOffset()},player:{type:"photon",version:i.Z.getPlayerVersion(),secure:!0,env:(0,r.aF)(e),embedder:i.Z.getEmbedder(),embedder_hostname:i.Z.getEmbedderHostname(),instance_uuid:i.Z.getInstanceUuid(),is_geo:(0,r.Kf)(e),is_geo2:window.DMP_IS_GEO2,topdomain:window.DMP_TOPDOMAIN.length>0?window.DMP_TOPDOMAIN:null,x_requested_with:(0,r.E_)(e),config:i.Z.getTrackablePlayerSettings()},view:{collection_xid:(0,l.TK)(e),queue_mode:(0,l.b2)(e),video_index:a.t.value,width:c.offsetWidth,height:c.offsetHeight,is_fullscreen:(0,s.i0)(e),display_mode:(0,d.P)(e)},browser:{user_agent:i.Z.window().navigator.userAgent,os_family:n.os_family,os_name:n.os_name,ua_family:n.ua_family,ua_name:n.ua_name,ua_version:n.ua_version,flash_version:"N/A",locale:i.Z.getEffectiveLocale(),data_saver_detected:!(!t||!t.saveData)&&t.saveData,effective_connection_type:t&&t.effectiveType?t.effectiveType:null,cookies_available:window.DMP_COOKIES_3RD_PARTY_AVAILABLE},app:{id:window.DMP_APP,type:window.DMP_CLIENT_TYPE,is_native:window.DMP_IS_NATIVE_APP,sdk_version:window.DMP_SDK_VERSION},device:{type:n.type,width:window.DMP_VIEWPORT_SIZE?window.DMP_VIEWPORT_SIZE.width:null,height:window.DMP_VIEWPORT_SIZE?window.DMP_VIEWPORT_SIZE.height:null},publisher:{xid:window.DMP_PUBLISHER.xid,type:window.DMP_PUBLISHER.type}}}}({state:e}),{info:n={}}=window.DMP_NEON_TRACKING_DATA,{app:c,device:u,visitor:_}=t,{app:A,landing:p,visitor:D}=n;return{...t,app:{...c,...A},device:{...u},player:{...t.player,config:i.Z.getTrackablePlayerSettings()},view:{...t.view,volume:(0,E.C0)(e),is_active_tab:"visible"===document.visibilityState},landing:p,visitor:{..._,...D}}};let T=null;const g=S=h=,8143:4238:2989:7281:1945:(e,t,n)=>{"use strict";n.d(t,{JB:()=>i,NO:()=>a,bY:()=>o});const i="TOUCH_ACTIVATION",a="MOUSE_ACTIVATION",o="KEYBOARD_ACTIVATION"},209:3748:3358:(e,t,n)=>{"use strict";n.d(t,{w:()=>i,y:()=>a});const i="touch",a="desktop"},9954:6038:5931:6685:(e,t,n)=>{"use strict";n.d(t,{$d:()=>_,D6:()=>M,Dn:()=>Q,EI:()=>R,FW:()=>u,GH:()=>J,Gx:()=>p,Ie:()=>pe,J7:()=>m,Kz:()=>x,M$:()=>V,MZ:()=>_e,PW:()=>Ee,Pc:()=>ue,SN:()=>A,Te:()=>se,Tf:()=>F,Uz:()=>ie,V$:()=>ce,W3:()=>k,YG:()=>b,YO:()=>L,Yb:()=>y,ZP:()=>s,Zy:()=>j,_T:()=>C,bI:()=>O,cr:()=>De,cw:()=>ee,cx:()=>de,db:()=>P,ek:()=>oe,gE:()=>h,gP:()=>W,gQ:()=>U,gp:()=>B,hg:()=>K,nh:()=>ae,o7:()=>D,pH:()=>Z,q$:()=>$,rb:()=>X,sE:()=>te,sO:()=>I,tw:()=>re,uU:()=>N,vT:()=>le,vX:()=>T,wD:()=>z,wc:()=>E,wq:()=>G,xj:()=>ne,yB:()=>v,yV:()=>q,yk:);var i=n(5913),a=n(8482),o=n(3828);const r={};function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.Z.LOAD_VIDEO:return t.video===e.access_id&&t.interactionType===a.xR?e:{...r,info:e.info};case o.S:case i.Z.CONTENT_OFFAIR:return t.metadata;case i.Z.ERROR_PLAYER:return"metadata"===t.from&&t.extra&&t.extra.metadata?t.extra.metadata:e;default:return e}}const l={screenname:"",url:null,id:null},d={id:null,watermark_image_url:null,watermark_link_url:null},c={},u=_=e=>e.metadata.access_id||null,E=e=>e.metadata.end_time||0,A=e=>e.metadata.filmstrip_url||null,p=e=>e.metadata.seeker_url||null,D=e=>e.metadata.id||null,m=R=e=>e.metadata.live_dvr_window||0,T=e=>e.metadata.media_type||null,g=e=>e.metadata&&e.metadata.owner||l,S=h=I=e=>e.metadata.start_time||null,P=O=v=f=e=>e.metadata.subtitles||{},y=e=>f(e).data||{},L=N=e=>f(e).enable||!1,C=e=>e.metadata.title||"",w=e=>e.metadata.ui||{},b=e=>w(e).highlight||null,M=e=>w(e).watermark_url||null,U=e=>w(e).watermark_link_url||null,Z=e=>w(e).logo,V=e=>e.metadata.url||null,k=e=>e.metadata.advertising||{},G=e=>k(e).custom_target||null,Y=e=>e.metadata.reporting||{},H=e=>Y(e).ias||{},B=e=>H(e).anid||null,x=e=>H(e).partner||null,Q=e=>Y(e).estat||!1,F=e=>e.metadata.tags||[],K=e=>e.metadata.live_show_viewers||null,q=e=>S(e).id,j=e=>S(e).watermark_image_url,W=e=>S(e).watermark_link_url,z=e=>g(e).id,$=e=>g(e).username,X=e=>g(e).screenname,J=e=>g(e).url,ee=te=ne=e=>e.metadata.duration||0,ie=e=>e.metadata.audience_url||null,ae=e=>e.metadata.view_id||null,oe=e=>e.metadata.private||!1,re=e=>e.metadata.protected_delivery||!1,se=e=>e.metadata.created_time||0,le=e=>e.metadata.is_password_protected||!1,de=ce=ue=e=>e.metadata.channel,_e=e=>e.metadata.explicit||!1,Ee=e=>e.metadata.partner,Ae=e=>e.metadata.verified||!1,pe=e=>e.metadata.is_created_for_kids,De=e=>e.metadata.detected_language||""},3273:6074:(e,t,n)=>{"use strict";n.d(t,{S:()=>i,q:()=>a});const i="NOTIFY_PES_PIP_CHANGED",a="PLAYER_VISIBILITY"},8520:3828:(e,t,n)=>{"use strict";n.d(t,{S:()=>i});const i="VIDEO_SELECTED"},4755:480:(e,t,n)=>{"use strict";n.d(t,{$0:()=>u,CA:()=>d,I5:()=>s,IT:()=>l,ZP:()=>r,yT:()=>c});var i=n(5913),a=n(3828);const o={hasPlayedOnce:!1,hasPausedOnce:!1,videoSelected:!1,areComponentsReady:!1,loadVideoData:null};function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.Z.VIDEO_PLAYING:return{...e,hasPlayedOnce:!0};case i.Z.VIDEO_PAUSE:return{...e,hasPausedOnce:!0};case a.S:return{...e,videoSelected:!0,loadVideoData:null};case i.Z.LOAD_VIDEO:return{...e,videoSelected:!1,loadVideoStartTime:Date.now(),loadVideoData:t};case i.Z.COMPONENTS_READY:return{...e,areComponentsReady:!0};default:return e}}const s=e=>e.player.loadVideoStartTime,l=e=>e.player.hasPlayedOnce,d=e=>e.player.videoSelected,c=e=>e.player.areComponentsReady,u=e=>e.player.loadVideoData},746:(e,t,n)=>{"use strict";n.d(t,{t:()=>a,z:()=>i});const i="SUBSCRIBE_PLAYER_DATA_LAYER",a="UNSUBSCRIBE_PLAYER_DATA_LAYER"},8094:(e,t,n)=>{"use strict";n.d(t,{Wx:()=>_,ZP:()=>u,eZ:()=>E});var i=n(6774),a=n.n(i),o=n(4334),r=n(5913),s=n(746),l=n(8143),d=n(3828);const c={eventSource:[],subscribers:[]};function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.k3.CLICK_THRU:case o.k3.DURATION_CHANGE:case o.k3.ERROR:case o.k3.EXPANDED_CHANGE:case o.k3.IMPRESSION:case o.k3.INTERACTION:case o.k3.LINEAR_CHANGE:case o.k3.LOG:case o.k3.PAUSED:case o.k3.PLAYING:case o.k3.REMAINING_TIME_CHANGE:case o.k3.RESIZE_AD_REQUESTED:case o.k3.SKIPPABLE_STATE_CHANGE:case o.k3.SKIPPED:case o.k3.STARTED:case o.k3.STOPPED:case o.k3.USER_ACCEPT:case o.k3.USER_CLOSE:case o.k3.USER_MINIMIZE:case o.k3.VIDEO_COMPLETE:case o.k3.VIDEO_FIRST_QUARTILE:case o.k3.VIDEO_MIDPOINT:case o.k3.VIDEO_START:case o.k3.VIDEO_THIRD_QUARTILE:case o.k3.VOLUME_CHANGE:case o.k3.BUFFER_START:case o.k3.BUFFER_FINISH:case l.Gy:case l.kw:case r.Z.AD_ERROR:case r.Z.AD_IMPRESSION:case r.Z.AD_LOADED:case r.Z.AD_SKIPPED:case r.Z.AD_STOPPED:case r.Z.AD_VIDEO_START:case r.Z.AD_VIDEO_COMPLETE:case r.Z.VIDEO_PAUSE:case r.Z.VIDEO_PLAY:case r.Z.VIDEO_VOLUME_CHANGED:{const n=e.eventSource.length;return n>0&&a()(e.eventSource[n-1],t)?e:{...e,eventSource:e.eventSource.concat(t)}}case s.z:{const{name:n,events:i,callback:a,options:o={}}=t;return e.subscribers.find(()?e:{...e,subscribers:e.subscribers.concat({name:n,events:i,callback:a,options:o})}}case s.t:return{...e,subscribers:e.subscribers.filter((e=>e.name!==t.name))};case d.S:return{...e,eventSource:[]};default:return e}}const _=e=>e.playerDataLayer.eventSource,E=e=>e.playerDataLayer.subscribers},5101:3143:(e,t,n)=>{"use strict";n.d(t,{d:()=>i});const i="PLAYER_SIZE_CHANGED"},8134:5675:7784:(e,t,n)=>{"use strict";n.d(t,{w:()=>i});const i="SET_GA_CLIENT_ID"},3299:4716:(e,t,n)=>{"use strict";n.d(t,{mR:()=>T,ZG:()=>R,o2:()=>E,TT:()=>v,av:()=>_,$2:()=>O,wJ:()=>p,lZ:()=>A,x_:()=>P,AW:()=>I,sF:()=>D,wd:()=>g,mH:()=>m,di:()=>S});var i=n(8482);const a=["seekbar","double_tap","keyboard","back_to_live"],o=e=>a.indexOf(e)>-1;var r=n(5913),s=n(9934),l=n(4802),d=n(8520),c=n(3828);unction _(){return(0,s.d)({type:r.Z.PAUSE_REQUESTED,interactionType:i.xR})}ion R(e){return(0,s.d)({type:r.Z.GESTURE_START,gestureType:e})}nction S(e){let{metadata:t,videoSettings:n,interactionType:i,restStats:a}=e;return{type:c.S,metadata:t,videoSettings:n,interactionType:i,restStats:a}}const h=I=h((),P=h(();function O(){return(0,s.d)({type:r.Z.PLAY_REQUESTED,interactionType:i.xR})},9934:2186:66:600:6765:4753:(e,t,n)=>{"use strict";n.d(t,{Yy:()=>E,ZP:()=>d,bR:()=>R,gd:()=>_,kX:()=>D,kt:()=>A,o4:()=>p,oj:()=>m,xf:()=>u});var i=n(5913),a=n(3828);const o="ready",r="running",s="ended",l={step:null,isAdSlot:!1,canAttachVideoSlot:!0,isVideoSlot:!1,isLoadingNext:!1,isSchedulerEnabled:!1,isReplay:!1,isReloadingLiveAfterPause:!1};function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.Z.LOAD_VIDEO:return{...e,isAdSlot:!1,isVideoSlot:!1,isSchedulerEnabled:!1,isReplay:!!t.isReplay,isReloadingLiveAfterPause:Boolean(t.isReloadingLiveAfterPause)};case a.S:return{...e,isSchedulerEnabled:!0};case i.Z.ERROR_DISPLAY_REQUESTED:return{...e,isLoadingNext:!1};case i.Z.SEQUENCE_READY:return{...e,step:o};case i.Z.GDPR_CONSENT_COLLECTION_REQUESTED:case i.Z.SEQUENCE_STARTED:return{...e,step:r};case i.Z.SEQUENCE_ENDED:return{...e,step:null!==e.step?s:null};case i.Z.AD_LINEAR_SLOT_STARTED:return{...e,isAdSlot:!0,canAttachVideoSlot:!1};case i.Z.AD_LINEAR_WILL_START:return{...e,canAttachVideoSlot:!0};case i.Z.AD_LINEAR_SLOT_ENDED:return{...e,isAdSlot:!1};case i.Z.VIDEO_SLOT_STARTED:return{...e,isVideoSlot:!0};case i.Z.VIDEO_SLOT_ENDED:return{...e,isVideoSlot:!1};default:return e}}const c=e=>e.sequence.step,u=e=>c(e)===o,_=E=e=>e.sequence.isAdSlot,A=e=>e.sequence.canAttachVideoSlot,p=e=>e.sequence.isVideoSlot,D=e=>e.sequence.isSchedulerEnabled,m=e=>e.sequence.isReplay,R=e=>e.sequence.isReloadingLiveAfterPause},6187:(e,t,n)=>{"use strict";n.d(t,{K7:()=>l,MG:()=>s,ZP:()=>r});var i=n(5913),a=n(3828);const o={autoplay:!1,start:0};function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.Z.LOAD_VIDEO:case a.S:return{...t.videoSettings};case i.Z.SEQUENCE_READY:return{...e,autoplay:Boolean(t.willStartImmediately)};default:return e}}const s=e=>e.videoSettings.autoplay,l=e=>e.videoSettings.start},3844:(e,t,n)=>{"use strict";n.d(t,{xC:()=>ce,bh:()=>de});var i=n(6983),a=n(3894),o=n(2186),r=n(9934),s=n(93),l=n(66),d=n(2989),c=n(5913),u=n(3358);const _={current:u.y,currentFrom:"default"};var E=n(6038);const A={streamLoaded:!1,isOffair:!1,edgeDelay:null,audience:0,isInitialSeekDone:!1};var p=n(6685),D=n(8520),m=n(480),R=n(5101),T=n(673),g=n(5582);const S={},h={videoList:[],currentIndex:0,videoListType:"",hasBeenRefreshed:!1,refreshRecommendations:!1};var I=n(4753),P=n(3299),O=n(3748);const v={messages:[],currentTime:0,imaLoaded:!1},f=y=var L=n(3421),N=n(3714),C=n(9235),w=n(6534);const b={button:null,isAvailable:!1,status:w.ey};var M=n(5647);const U={request:"",opened:!1,gdprConsentCollectionRequested:!1,gdprConsentCollectionHandled:!1,ccpaConsentString:null};var Z=n(600),V=n(3253),k=n(6074);const G={isRunning:!1,hasPipBanner:!1,hasRequestedPipNative:!1,isSmallViewportDisplay:!1,isExpanded:!1,isPipCustomPosition:!1,uiActionOrigin:null,screenId:null,pipPositionX:null,pipPositionY:null,pipTransformSmallViewportCollapsed:null,playerIsInViewport:!1};var Y=n(1857),H=n(3828);const B={required:!1,videoId:null};var x=n(8094),Q=n(6765),F=n(2464);const K={code:-1,codeRequested:null,disableRequested:!1,enableRequested:!1};var q=n(6187),j=n(6529);const W={},z={interactionType:null,isReadyToUpdate:!1};var $=n(5341),X=n(5675);const J={},ee={touch:(0,n(8480).o)(),nativeSdk:{}},te={apiControls:null};var ne=n(1543);const ie={isVisible:!1,hasInteractedOnPlayer:!1},ae={adConsole:adEventsAdapter:L.Z,autoskip:capabilities:chromecast:context:l.ZP,dataRequest:Z.Z,ads:N.ZP,consent:controls:chunks:s.Z,error:$.Z,fullscreen:d.ii,interaction:O.ZP,interactionMode:ias:V.ZP,live:metadata:p.ZP,moat:Y.ZP,password:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.Z.LOAD_VIDEO:return B;case c.Z.PASSWORD_REQUIRED:return{...e,required:!0,videoId:t.id};case H.S:return{...e,required:!1};default:return e}},pesPip:playback:D.ZP,player:m.ZP,playerDataLayer:x.ZP,playerSize:R.ZP,quality:Q.ZP,suggestedContent:scaling:sequence:I.ZP,settings:P.ZP,subtitles:videoSettings:q.ZP,volume:menuSettings:,oe=("undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0})||i.qC)((0,i.md)(a.Z,(,o.ZP,r.f));let re,se=null;e=ce({});const de=()=>se;2464:(e,t,n)=>{"use strict";n.d(t,{B9:()=>r,C6:()=>s,D:()=>a,S0:()=>l,eB:()=>i,vI:()=>o});const i="SUBTITLES_CHANGED",a="SUBTITLES_LANGUAGE_CHANGE_REQUESTED",o="SUBTITLES_LANGUAGE_CHANGE_REQUEST_HANDLED",r="SUBTITLE_DISABLE_REQUESTED",s="SUBTITLE_ENABLE_REQUESTED",l="SUBTITLES_VISIBILITY_CHANGE_REQUEST_HANDLED"},5582:(e,t,n)=>{"use strict";n.d(t,{T:()=>r,by:()=>i,k4:()=>a,ti:()=>o});const i="VIDEO_LIST_TYPE",a="VIDEO_LIST",o="RESET_REFRESH_RECOMMENDATIONS",r="RESET_REFRESH_SUGGESTED_CONTENT"},673:5727:2968:2726:4748:(e,t,n)=>{"use strict";n.d(t,{I:()=>a});var i=n(3844);const a=e=>{const t=new Set;return{on:off:e=>{t.delete(e)},emit:function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];e&&(0,i.bh)().dispatch("function"==typeof e?e(...a):{type:e,...a[0]}),t.forEach(()},clear:}},9456:2345:7966:4802:(e,t,n)=>{"use strict";.d(t,{s:()=>i})},1697:436:8480:1427:6081:(e,t,n)=>{"use strict";n.r(t),n(8432);var i=n(2345),a=n(3844),o=n(1623),r=n(7633),s=n(3578),l=n(9986),d=n(6074),c=n(7784),u=n(9954),_=n(3012),E=n(6529),A=n(5913);const p="border-radius: 0.125rem; padding: 0.0625rem 0.1875rem; color: #000000; background: #55c7ff;",D="border-radius: 0.125rem; padding: 0.0625rem 0.1875rem; color: #000000; background: #55c7ff33;",m={local:"border-radius: 0.125rem; padding: 0.0625rem 0.1875rem; color: #000000; background: #dd3727;",prod:"border-radius: 0.125rem; padding: 0.0625rem 0.1875rem; color: #000000; background: #8cd62c;",other:"border-radius: 0.125rem; padding: 0.0625rem 0.1875rem; color: #000000; background: #f99136;"},R=new URL(document.location.href);var T=n(9178);const g={catchUserAction,S=window.dmp_getLogger("PerfBasics"),h=window.dmp_getLogger("PerfBasics","LCP"),I=window.dmp_getLogger("PerfBasics","CLS");var P=n(1858),O=n(5586),v=n(7966),f=n(1697),y=n(7149),L=n(6685),N=n(8520),C=n(4753),w=n(4755);const b=window.dmp_getLogger("Bootstrapper"),M=window.dmp_getLogger("NeonData"),U=window.dm.mainNode,Z=window.__PLAYER_CONFIG__,V=k=G=(async()=>{var e,t;if(!Z)throw new Error("window.__PLAYER_CONFIG__ is missing");await((),_.Z.set(Z);let n=!1,i=!0,Y=0,H=0,B=NaN,x=NaN,Q=NaN,F=!1,K=!1,q=null,j=!1,W=[],z=null,X="fit",J=null;const ee=()=>{(0,o.T7)(A.Z.VIDEO_VOLUME_CHANGED,{muted:!0})},te=ne={"set-ads-config":"setCustConfig","toggle-muted":"toggleMuted","watch-on-site":"watchOnSite","set-prop":"setProp"};_.Z.context("is_dm_network")&&ze: 90%"),console.groupEnd()}(),b.log("Settings:",_.Z.settings()),b.log("Context:",_.Z.context()),b.log("Player:",null==(e=window)||null==(t=e.__PLAYER_CONFIG__)?void 0:t.player),b.log("Internal data:",Object.keys(window).filter((e=>eect.assign(e,{[t]:window[t]})),{})),(0,r.T)("adDuration",{get:()=>B}),(0,r.T)("adRunning",{get:()=>j}),(0,r.T)("autoplay",{get:()=>!1}),(0,r.T)("bufferedTime",{get:()=>H}),(0,r.T)("duration",{get:()=>Q}),(0,r.T)("ended",{get:()=>n}),(0,r.T)("error",{get:()=>null}),(0,r.T)("paused",{get:()=>i}),(0,r.T)("presentationMode",{get:()=>"inline"}),(0,r.T)("qualities",{getT)("ready",{get:()=>(0,s.f)()}),(0,r.T)("seeking",{ge}),(0,r.T)("type",{get:()=>{}}),(0,r.T)("video",{get:()=>J}),(0,r.T)("videoDuration",{get),(0"true"===e||!0===e?ee():te()}}),(0,r.T)("volume",{get:()=>1,set:e=>{const t=parseFloat(e);(0,o.T7)(A.Z.VIDEO_VOLUME_CHANGED,{volume:t})}}),(0,r.T)("currentTime",{get:()=>Y,set:e=>{const t=parseFloat(e);(0,o.T7)(A.Z.SEEK_REQUESTED,{time:t})}}),(0,.QUALITY_CHANGE_REQUESTED,t)}}),(0,rNGE_REQUESTED,{controls:!1})}}),(0,r.TGE_REQUESTED,{chromecast:K})}}),(0,r.NGE_REQUESTED,{scaleMo,(0,P_CHANGE_REQUESTElid API method: ".DEO,{...n,refreshConfig:!0})})),(0,r.l)("setCustConfig",(e=>{(0,o.T7)(A.Z.API_SET_CUST_CONFIG,e)})),(0,r.l)("play",(()=>{(0,o.T7)(A.Z.PLAY_REQUESTED)})),(0,r.l)("pause",(()=>{(0,o.T7)(A.Z.PAUSE_REQUESTED)})),(0,r.l)("togglePlay",(()=>{(0,o.T7)(A.Z.TOGGLE_PLAYBACK_A.Z.SEEK_REQUESTED,{time:t})})),(0,r.l)("mute",ee),(0,r.l)("unmut.l)("toggleMuted",(()=>{enst n=(0,y.iq)(t);(0,e=>({type:c.w,value:e}))(t))})),(0,r.l=>{window.dmp_setEmbedder(e)}ction(U,window.dm.videoNode)})),(e=>({type:d.S,value:e}))(e))})),(0,r.l)("nw.DMP_VIEWPORT_SIZE.height=n})),(0,r.l)ch((t=e,{type:d.q,value:t}))})),(0,r.l)("initPesPipChunk",(()=>{(0,o.T7)(A.Z.INIT_PES_PIP_CHU.PES_PLAYER_STATE_REQUESTED)})),(0,rndow.DMP_NEON_TRACKING_DATA)}O_VOLUME_CHANGED,.T7)(A.Z.IMA_NATIVE_CHANGE_REQUESTED,{speed:t})})),(0,o.P7)();const ie=function(){reteturn $(U).off(...arguments)}t)=>{(0,o.Pj)(l.eM,{info:t})})),TA,(()=>{n=!1,(0,o.Pj)(l.l}=n;J=t(i),(0,o.Pj)(l.fd,J)})),w.U.on((e=>{let{metadata:n}=e;J=t(n),(0,o.Pj)(l.fd,J)})),ie(A.Z.SPEED_CHANGE_CONFIRMED,((e,t)=>{let{speed:n}=t;(0,o.Pj)(l.bZ,n),o.Pj)(j?l.PG:l.MH,{time:n})}),H=n,(0,o.Pj)(l.ad,{time:n})})),(0,o.Pj)(l.qI,{duration:Q}e,(0,o.Pj)(l.NZ,{quality:n})})(0,o.Pj)(l.hl,{qualities:n})})),ie(A.Z.PLAYBACK_READY,(()=>{(0,o.Pj)(l.jt)})j)(l.PE,{status:d,reasonYING,(()=>{j||(0,o.Pj)(l.Z$)})),ie(A.Z.VIDEO_PLAY,(()=>{i=!1,(0,o.Pj)(j?l.WE>{i=!0,(0,o.Pj)(j?l.Ax:l.E7)})),ie(A.Z.VIDEO_START,(()=>{(0,o.Pj)(l.Om)})),ie(A.Z.VIDEO_ENDED,(()=>{(0,o.Pj)(l.Kq)})),ie(A.Z.VIDEO_SEEKING,((e,t)=>{let{time:n}=t;n=V(n),F=!0,(0,o.Pj)(l.hL,{timF=!1,(0,o.Pj)(l.kL,{time:n})})),ie(A.Z.VIDEO_WAITING,(()=>{(0,o.Pj)(l.hs)type:s,position:r,adData:d})r=e.message}(0,o.Pjj)(l.Rt,{type:n,posificationScripts:t}:{},...n})})),ie(A.Z.AD_IMPRESSION,(()=>{(0,o.Pj)(l.TO)})),ie(A.Z.AD_BUFFER_START,(()=>{(0,o.Pj)(l.yj)})),ie(A.Z.AD_BUFFER_FINISH,(()=>{(0,o.Pj)(l.LX)})),ie(A.Z.AD_BREAK_WILL_START,((e,t)=>{let{position:n}=t;(0,o.Pj)(l.bo,{positF=!1,j=!1,:etjuR),ae(A.Z.SEQUENCE_ENDED,r)};ie(A.Z.SEQUENCE_STARTED,(0,o.Pj)(l.WH,{scaleMode:X})})),ie(A.Z.SHARE_REQUESTED,((e,t)=>{let{url:n,shortUrl:i}=t;(0,o.Pj)(l.cd,{url:n,shortUrl:i}OW.name,"'")),(0,o.Pj)(l.OW)})),ie(A.Z.GESTURE_START,(()=>{(0,o.Pj)(l.V)})),ie(A.Z.GESTURE_END,(()=>{(0,o.Pj)(l.Pj)(l.FH,{url:n,infoType:i})})),ie(A.Z.WATERMARK_REQUESTED,(()=>{(0,o.Pj)(l.Zm)})),io.Pj)(l.Xn,{companionAds:n})})),ie(A.Z.CONTENT_SIZE_CHANGED,((e,t)=>{(0,o.Pj)(l.rw,t)})),ie(A.ZrState:n}=t;(0,o.Pj)(l.uc,n)})),ie(A.Z.PLAYER_VIDEOLIST_CHANGE,(()=>{(0,o.Pj)(l.wk)})),ie(A.Z.PLAYER_HEAVYADSINTERVENTION_CHANGED,((e,t)=>{(0,o.Pj)(l.zA,tED,((e,t)=>{(0,o.Pj)(l.OcSTOPPED,(()=>{(0,o.Pj)(e.on(A.Z.COMPONENTS_READY,n)})($(U)),b.log("Injecting HTML5 Player..."),window.dm supported in your browser")}();const oe=_.Z.getEffectiveLocale();b.log("Effective locale: ".concat(oe)),document.documentElement.lang=oe;const re=(await Promise.all([k(),G()]))[1],{initialize:se}=re;await se(),window.dm.perf.playerInjection.end(),(0,u.Yz)(),(0,o.ir)(),b.log("playerInjector}u.in,extrTREAMn s(eturn~:return a;default:return s}}},5913:(e,t,n)=>{"use stroncat(t).concat(i));return n}({AD_BLOCKER_DETECTED:null,AD_BREAK_WILL_START:null,AD_BUFFER_START:null,AD_BUFFER_FINISH:null,AD_COMPANIONS_RECEIVED:null,AD_CLICK:null,AD_ERROR:null,AD_IMA_SDK_LOADED:null,AD_IMPRESSION:null,AD_LINEAR_WILL_START:null,AD_LINEAR_STARTED:null,AD_LINEAR_STOPPED:null,AD_LINEAR_SLOT_ENDED:null,AD_LINEAR_SLOT_STARTED:null,AD_LOADED:null,AD_LOG:null,AD_NON_LINEAR_WILL_STOP:null,NON_LINEAR_DISPLAY_STARTED:null,AD_POD_ERROR:null,AD_DATA_UPDATED:null,AD_SDK_READY:null,AD_SKIPPED:null,AD_SLOT_INJECTED:null,START_AD_FALLBACK:null,SET_CURRENT_AD_BREAK:null,RESET_CURRENT_AD_BREAK:null,AD_STACK_ERROR:null,AD_STARTED:null,AD_STOPPED:null,AD_VIDEO_COMPLETE:null,AD_VIDEO_SKIPPABLE_REMAINING_TIME:null,AD_VIDEO_SKIPPABLE_STATE:null,AD_VIDEO_START:null,AD_VIDEO_VOLUME_CHANGED:null,PES_PLAYER_STATE_DISPATCHED:null,PES_PLAYER_STATE_REQUESTED:null,API_DEL_KEYS_CUST_CONFIG:null,API_SET_CUST_CONFIG:null,AUTOPLAY_RESOLUTION:null,CAN_PLAY_ONE_SOURCE:null,NATIVE_SDK_CAPABILITIES:null,CHANGE_CURRENT_INTERACTION_MODE:null,COMPONENTS_READY:null,CONTENT_OFFAIR:null,CONTENT_SIZE_CHANGED:null,CONTROLS_CHANGE_REQUESTED:null,DEBUG_UPDATED:null,DIALOG_CONSENT_OPENED:null,ERROR_DISPLAY_REQUESTED:null,ERROR_PLAYER:null,GDPR_CONSENT_COLLECTION_REQUESTED:null,GDPR_CONSENT_COLLECTION_RESOLVED:null,GESTURE_END:null,GESTURE_START:null,GOT_CONSENT:null,GRAPH_REQUESTED:null,INFO_REQUESTED:null,INIT_PES_PIP_CHUNK:null,LIVE_EDGE_DELAY_CHANGED:null,LOAD_VIDEO:null,LOOP_CHANGE_REQUESTED:null,PARTNERLOGO_CLICKED:null,PASSWORD_REQUIRED:null,PAUSE_REQUESTED:null,PLAY_REQUESTED:null,PLAYBACK_READY:null,PLAYBACK_READY_REQUESTED:null,PLAYER_VIDEOLIST_CHANGE:null,PLAYER_HEAVYADSINTERVENTION_CHANGED:null,IMA_AD_REQUESTED:null,IMA_AD_STOPPED:null,IMA_NATIVE_EVENT:null,QUALITIES_AVAILABLE:null,QUALITY_CHANGE_CONFIRMED:null,QUALITY_CHANGE_REQUESTED:null,QUALITY_CHANGED:null,QUALITY_STATS_REQUESTED:null,QUALITY_STATS_RESPONDED:null,SCHEDULER_END_SEQUENCE:null,SEEK_REQUESTED:null,SEQUENCE_ENDED:null,SEQUENCE_READY:null,SEQUENCE_STARTED:null,SHARE_REQUESTED:null,SHOW_CONSENT_DIALOG:null,SKIP_AD_REQUESTED:null,SPEED_CHANGE_CONFIRMED:null,SPEED_CHANGE_REQUESTED:null,STREAM_TECH_CHANGE:null,SUPPORT_PROBED:null,SUBTITLES_AVAILABLE:null,TOGGLE_PLAYBACK_REQUESTED:null,VIDEO_BUFFER_UPDATE:null,VIDEO_BUFFERING:null,VIDEO_CAN_PLAY:null,VIDEO_DURATION_CHANGE:null,VIDEO_ENDED:null,VIDEO_LOADED_DATA:null,VIDEO_LOADED_METADATA:null,VIDEO_PAUSE:null,VIDEO_PLAY:null,VIDEO_PLAYING:null,VIDEO_REBUFFERING:null,VIDEO_SEEKED:null,VIDEO_SEEKING:null,VIDEO_SLOT_ENDED:null,VIDEO_SLOT_STARTED:null,VIDEO_START:null,VIDEO_STEADYPLAY:null,VIDEO_TIME_UPDATE:null,VIDEO_VOLUME_CHANGED:null,VIDEO_WAITING:null,VMAP_RECEIVED:null,WATERMARK_REQUESTED:null,SCALE_MODE_CHANGE_REQUESTED:null,SCALE_MODE_CHANGED:null,VMAP_[i,a,="Mut(...n{retuz\d+>40),t(1107),t(6081)))),e.O()}])));