![function(e,i,t){var n,a;!0,this,(0",h,{})},function(e,i,t){"use strict";t.r(i);var n=function e(i){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.spot=+i.spot||0,this.spaceid=+i.spaceid||859,this.labels=i.labels||"",this.ad_tags=i.ad_tags||"",this.src=i.src||"",this.pid=i.pid||"",this.width=+i.width||300,this.height=+i.height||250,this.add="",this.spot_id=+i.spot_id||0,i.source&&(this.src=i.source),i.idzone?(this.idzone=+i.idzone,this.zone="tc_pab"):860===this.spaceid?(this.idzone=3830823,this.zone="tc_pab_300x100"):1688===this.spaceid||1690===this.spaceid||1694===this.spaceid?(this.idzone=3830823,this.zone="1x1"):861===this.spaceid?(this.idzone=3830821,this.zone="tc_pab_728x90"):914===this.spaceid?(this.idzone=3851925,this.zone="tc_pab_728x90_lifestyle"):915===this.spaceid?(this.idzone=3851927,this.zone="tc_pab_300x100_lifestyle"):916===this.spaceid?(this.idzone=3851929,this.zone="tc_pab_300x250_lifestyle"):917===this.spaceid?(this.idzone=3851935,this.zone="tc_pab_728x90_streaming"):918===this.spaceid?(this.idzone=3851937,this.zone="tc_pab_300x100_streaming"):919===this.spaceid?(this.idzone=3851941,this.zone="tc_pab_300x250_streaming"):920===this.spaceid?(this.idzone=3864602,this.zone="tc_pab_728x90_manga"):921===this.spaceid?(this.idzone=3864604,this.zone="tc_pab_300x100_manga"):922===this.spaceid?(this.idzone=3864608,this.zone="tc_pab_300x250_manga"):1018===this.spaceid?(this.idzone=3902668,this.zone="tc_pab_900x250"):1011===this.spaceid?(this.idzone=3902652,this.zone="tc_pab_315x300"):1010===this.spaceid?(this.idzone=3902650,this.zone="tc_pab_160x600"):1012===this.spaceid?(this.idzone=3902654,this.zone="tc_pab_160x600_streaming"):1013===this.spaceid?(this.idzone=3902658,this.zone="tc_pab_160x600_manga"):1014===this.spaceid?(this.idzone=3902660,this.zone="tc_pab_160x600_lifestyle"):1015===this.spaceid?(this.idzone=3902662,this.zone="tc_pab_315x300_lifestyle"):1016===this.spaceid?(this.idzone=3902664,this.zone="tc_pab_315x300_streaming"):1017===this.spaceid?(this.idzone=3902666,this.zone="tc_pab_315×300_manga"):1019===this.spaceid?(this.idzone=3902670,this.zone="tc_pab_900x250_manga"):1020===this.spaceid?(this.idzone=3902674,this.zone="tc_pab_900x250_lifestyle"):1021===this.spaceid?(this.idzone=3902678,this.zone="tc_pab_900x250_streaming"):(this.idzone=3830819,this.zone="tc_pab_300x250"),i.min_cpm&&(this.add=this.add+"&min_cpm="+i.min_cpm),i.back_url&&(this.add=this.add+"&back_url="+encodeURIComponent(i.back_y,n)}}var r=func=null}var i,t,n;return i=e,(t=[{key:"ssp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i="https://rtbbnr.com/get/?go=1&data=",t={imp:[{secure:e.secure,ext:{spot:this.banner.spot,id:this.banner.spaceid,labels:this.banner.labels,site_id:parseInt(this.banner.spot),type:"banner",spaceid:this.banner.spaceid,spot_id:this.banner.spot_id,idzone:this.banner.idzone,zone:this.banner.zone,ad_tags:this.banner.ad_tags,title:"",subid:this.banner.src,mo:e.device.model,ve:e.device.vendor,utm1:e.utm1,utm2:this.banner.spot.toString(),utm3:this.banner.pid,utm4:""},banner:{w:this.banner.width,h:this.banner.height}}],site:{id:this.banner.spot.toString(),page:e.page},device:e.resolution,user:{id:e.fingerprint},ext:{dt:Date.now()}};return this.element=document.createElement("iframe"),this.element.src=i+btoa(JSON.stringify(t))+this.banner.add,this.element.style="padding:0;margin:0;border:0;",this.element.marginheight="0",this.element.marginwidth="0",this.element.scrolling="no",this.element.width=this.banner.width,this.element.height=this.banner.height,this.element.setAttribute("allowtransparency",!0),this.element.frameBorder="no",this.element}}])&&a(i.prototype,t),n&&a(i,n),e}();var o=t(0),s=t.n(o);var d,l=t(1),c=t.n(l),u=window.top!==window.self;(d=localStorage.getItem("tfprt"),d?Promise.resolve(d):s.a.getPromise().then((function(e){var i=ee.key})).value[0]+(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),t=s.a.x64hash128(i,31);return localStorage.setItem("tfprt",t),t}))).then((function(e){var i={fingerprint:e,resolution:{w:screen&&screen.width||window.outerWidth,h:screen&&screen.height||window.outerHeight},device:(new c.a).getDevice(),secure:"https:"===location.protocol?1:0,title:u?"":document.title,utm1:u?"tcban_i":"tcban_s",page:u?document.referrer:document.URL};if(void 0!==window.__tcscl)window.__tcbns=[],window.__tcscl.getScripts().forEach((function(e){var t=Object.assign({},e.dataset),a=new r(new n(t));window.__tcbns.push(a),e.parentNode.insertBefore(a.ssp(i),e)}));else{var t=new r(new n(function(){var e=window.location.search;if(""===e)return{};e=e.substr(1);var i={};return e.split("&").fot[1])})),i}()));document.body.appendChild(t.ssp(i))}}))}]);