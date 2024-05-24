jQuery(document).ready(function(){cwauth.init();});;(function(cwauth,undefined){var wp_media_dialog_field;var timeout_interval;var timeout_idle_time=0;var timeout_warning_reached=false;cwauth.init=function(){d=new Date;gmtoffset=d.getTimezoneOffset()/60;document.cookie='gmtoffset='+gmtoffset;jQuery(".cwauth-settings h3").click(;jQuery(".tip-button").click(;jQuery(".cwauth-settings input, .cwauth-settings select").focus(function(e){e.preventDefault();var tip_warning=jQuery(this).parents(".has-tip").find(".tip-warning, .tip-info");if(tip_warning.length>0){tip_warning.fadeIn();jQuery(this).parents(".has-tip").find(".tip-message").fadeIn();}});jQuery("#cwauth-settings-sections-on").click(function(e){e.preventDefault();jQuery(".cwauth-settings h3").parent().find(".form-padding").slideDown();});jQuery("#cwauth-settings-sections-off").click(function(e){e.preventDefault();jQuery(".cwauth-settings h3").parent().find(".form-padding").slideUp();});jQuery("#cwauth-settings-tips-on").click(function(e){e.preventDefault();jQuery(".tip-message").fadeIn();});jQuery("#cwauth-settings-tips-off").click(;jQuery("#cwauth-login-form-new").click(function(e){jQuery("#cwauth-login-form-design").parents("tr").hide();jQuery("#cwauth-login-form-design-form").addClass('new-design');jQuery("#cwauth-login-form-design-form input").not(":button").val('');jQuery("#cwauth-login-form-design-form h4").text('New Design');jQuery("#cwauth-login-form-design-form").show();});jQuery("#cwauth-login-form-edit").click(function(e){var design_name=jQuery("#cwauth-login-form-design :selected").text();var designs=jQuery("[name=cwauth_login_form_designs]").val();var designs=JSON.parse(designs);var design=designs[design_name];if(design){jQuery("[name=cwauth_login_form_design_name]").val(design_name);jQuery("[name=cwauth_login_form_icon_set]").val(design.icon_set);jQuery("[name=cwauth_login_form_show_login]").val(design.show_login);jQuery("[name=cwauth_login_form_show_logout]").val(design.show_logout);jQuery("[name=cwauth_login_form_layout]").val(design.layout);jQuery("[name=cwauth_login_form_button_prefix]").val(design.button_prefix);jQuery("[name=cwauth_login_form_logged_out_title]").val(design.logged_out_title);jQuery("[name=cwauth_login_form_logged_in_title]").val(design.logged_in_title);jQuery("[name=cwauth_login_form_logging_in_title]").val(design.logging_in_title);jQuery("[name=cwauth_login_form_logging_out_title]").val(design.logging_out_title);jQuery("#cwauth-login-form-design").parents("tr").hide();jQuery("#cwauth-login-form-design-form").removeClass('new-design');jQuery("#cwauth-login-form-design-form h4").text('Edit Design');jQuery("#cwauth-login-form-design-form").show();}});jQuery("#cwauth-login-form-delete").click(function(e){var designs=jQuery("[name=cwauth_login_form_designs]").val();var designs=JSON.parse(designs);var old_design_name=jQuery("#cwauth-login-form-design :selected").text();jQuery("#cwauth-login-form-design option:contains('"+old_design_name+"')").remove();delete designs[old_design_name];jQuery("[name=cwauth_login_form_designs]").val(JSON.stringify(designs));});jQuery("#cwauth-login-form-ok").click(function(e){var new_design_name=jQuery("[name=cwauth_login_form_design_name]").val();jQuery("#cwauth-login-form-design-form .validation-warning").remove();if(!jQuery("#cwauth-login-form-design-name").val()){var validation_warning="<p id='validation-warning' class='validation-warning'>Design name cannot be empty.</span>";jQuery("#cwauth-login-form-design-name").parent().append(validation_warning);return;}
if(jQuery("#cwauth-login-form-design-form").hasClass('new-design')){if(jQuery("#cwauth-login-form-design option").text().indexOf(new_design_name)!=-1){var validation_warning="<p id='validation-warning' class='validation-warning'>Design name already exists! Please choose a different name.</span>";jQuery("#cwauth-login-form-design-name").parent().append(validation_warning);return;}
else{var designs=jQuery("[name=cwauth_login_form_designs]").val();var designs=JSON.parse(designs);designs[new_design_name]={};designs[new_design_name].icon_set=jQuery("[name=cwauth_login_form_icon_set]").val();designs[new_design_name].show_login=jQuery("[name=cwauth_login_form_show_login]").val();designs[new_design_name].show_logout=jQuery("[name=cwauth_login_form_show_logout]").val();designs[new_design_name].layout=jQuery("[name=cwauth_login_form_layout]").val();designs[new_design_name].button_prefix=jQuery("[name=cwauth_login_form_button_prefix]").val();designs[new_design_name].logged_out_title=jQuery("[name=cwauth_login_form_logged_out_title]").val();designs[new_design_name].logged_in_title=jQuery("[name=cwauth_login_form_logged_in_title]").val();designs[new_design_name].logging_in_title=jQuery("[name=cwauth_login_form_logging_in_title]").val();designs[new_design_name].logging_out_title=jQuery("[name=cwauth_login_form_logging_out_title]").val();jQuery("#cwauth-login-form-design").append(jQuery("<option></option>").text(new_design_name).attr("selected","selected"));jQuery("[name=cwauth_login_form_designs]").val(JSON.stringify(designs));jQuery("#cwauth-login-form-design").parents("tr").show();jQuery("#cwauth-login-form-design-form").hide();}}
else{var designs=jQuery("[name=cwauth_login_form_designs]").val();var designs=JSON.parse(designs);var old_design_name=jQuery("#cwauth-login-form-design :selected").text();jQuery("#cwauth-login-form-design option:contains('"+old_design_name+"')").remove();delete designs[old_design_name];designs[new_design_name]={};designs[new_design_name].icon_set=jQuery("[name=cwauth_login_form_icon_set]").val();designs[new_design_name].show_login=jQuery("[name=cwauth_login_form_show_login]").val();designs[new_design_name].show_logout=jQuery("[name=cwauth_login_form_show_logout]").val();designs[new_design_name].layout=jQuery("[name=cwauth_login_form_layout]").val();designs[new_design_name].button_prefix=jQuery("[name=cwauth_login_form_button_prefix]").val();designs[new_design_name].logged_out_title=jQuery("[name=cwauth_login_form_logged_out_title]").val();designs[new_design_name].logged_in_title=jQuery("[name=cwauth_login_form_logged_in_title]").val();designs[new_design_name].logging_in_title=jQuery("[name=cwauth_login_form_logging_in_title]").val();designs[new_design_name].logging_out_title=jQuery("[name=cwauth_login_form_logging_out_title]").val();jQuery("#cwauth-login-form-design").append(jQuery("<option></option>").text(new_design_name).attr("selected","selected"));jQuery("[name=cwauth_login_form_designs]").val(JSON.stringify(designs));jQuery("#cwauth-login-form-design").parents("tr").show();jQuery("#cwauth-login-form-design-form").hide();}});jQuery("#cwauth-login-form-cancel").click(function(e){jQuery("#cwauth-login-form-design").parents("tr").show();jQuery("#cwauth-login-form-design-form").hide();});jQuery("[name=cwauth_login_redirect]").change(function(){jQuery("[name=cwauth_login_redirect_url]").hide();jQuery("[name=cwauth_login_redirect_page]").hide();var val=jQuery(this).val();if(val=="specific_page"){jQuery("[name=cwauth_login_redirect_page]").show();}
else if(val=="custom_url"){jQuery("[name=cwauth_login_redirect_url]").show();}});jQuery("[name=cwauth_login_redirect]").change();jQuery("[name=cwauth_logout_redirect]").change(function(){jQuery("[name=cwauth_logout_redirect_url]").hide();jQuery("[name=cwauth_logout_redirect_page]").hide();var val=jQuery(this).val();if(val=="specific_page"){jQuery("[name=cwauth_logout_redirect_page]").show();}
else if(val=="custom_url"){jQuery("[name=cwauth_logout_redirect_url]").show();}});jQuery("[name=cwauth_logout_redirect]").change();jQuery('#cwauth_logo_image_button').click(function(e){e.preventDefault();wp_media_dialog_field=jQuery('#cwauth_logo_image');cwauth.selectMedia();});jQuery('#cwauth_bg_image_button').click(function(e){e.preventDefault();wp_media_dialog_field=jQuery('#cwauth_bg_image');cwauth.selectMedia();});jQuery("#cwauth-paypal-button").hover(function(){jQuery("#cwauth-heart").css("opacity","1");},;jQuery(".cwauth-unlink-account").click(function(event){event.preventDefault();var btn=jQuery(this);var cwauth_identity_row=btn.data("cwauth-identity-row");btn.hide();btn.after("<span> Please wait...</span>");var post_data={action:"cwauth_unlink_account",cwauth_identity_row:cwauth_identity_row,}
jQuery.ajax({type:"POST",url:cwauth_cvars.ajaxurl,data:post_data,success:function(json_response){var oresponse=JSON.parse(json_response);if(oresponse["result"]==1){btn.parent().fadeOut(1000,;}}});});jQuery(".cwauth-login-button").click(function(event){event.preventDefault();window.location=jQuery(this).attr("href");jQuery("#login #loginform").fadeOut();jQuery("#login #nav").fadeOut();jQuery("#login #backtoblog").fadeOut();jQuery(".message").fadeOut();jQuery(".cwauth-login-form .cwauth-login-button").not(this).addClass("loading-other");jQuery(".cwauth-login-form .cwauth-logout-button").addClass("loading-other");jQuery(this).addClass("loading");var logging_in_title=jQuery(this).parents(".cwauth-login-form").data("logging-in-title");jQuery(".cwauth-login-form #cwauth-title").text(logging_in_title);});jQuery(".cwauth-logout-button").click(function(event){jQuery("#login #loginform").fadeOut();jQuery("#login #nav").fadeOut();jQuery("#login #backtoblog").fadeOut();jQuery(this).addClass("loading");jQuery(".cwauth-login-form .cwauth-logout-button").not(this).addClass("loading-other");jQuery(".cwauth-login-form .cwauth-login-button").addClass("loading-other");var logging_out_title=jQuery(this).parents(".cwauth-login-form").data("logging-out-title");jQuery(".cwauth-login-form #cwauth-title").text(logging_out_title);});var msg=jQuery("#cwauth-result").html();if(msg){var status=jQuery('#cwauth-status').html();cwauth.notify(msg,status);}
if(cwauth_cvars.logged_in==='1'&&cwauth_cvars.logout_inactive_users!=='0'){jQuery(document).mousemove(function(e){timeout_idle_time=0;});jQuery(document).keypress(;timeout_interval=setInterval(cwauth.timeoutIncrement,60000);}
if(cwauth_cvars.hide_login_form==1){jQuery("#login #loginform").hide();jQuery("#login #nav").hide();jQuery("#login #backtoblog").hide();}
if(document.URL.indexOf("wp-login")>=0){if(cwauth_cvars.logo_image){jQuery(".login h1 a").css("background-image","url("+cwauth_cvars.logo_image+")");}
if(cwauth_cvars.bg_image){jQuery("body").css("background-image","url("+cwauth_cvars.bg_image+")");jQuery("body").css("background-size","cover");}}}
cwauth.timeoutIncrement=function(){var duration=cwauth_cvars.logout_inactive_users;if(timeout_idle_time==duration-1){timeout_idle_time+=1;cwauth.notify('Your session will expire in 1 minute due to inactivity.','error');}
else if(timeout_idle_time==duration){cwauth.notify('Logging out due to inactivity...','error');cwauth.processLogout();}}
cwauth.showTip=cwauth.selectMedia=function(){var custom_uploader;if(custom_uploader){custom_uploader.open();return;}
custom_uploader=wp.media.frames.file_frame=wp.media({title:'Choose Image',button:{text:'Choose Image'},multiple:false});custom_uploader.on('select',;custom_uploader.open();}
cwauth.notify=function(msg,status){jQuery(".cwauth-login-message").remove();jQuery('#cwauth-result').remove();jQuery('#cwauth-status').remove();var h="";h+="<div class='cwauth-login-message show "+status+"' style='text-align:center;line-height:1.5em;'><span>"+msg+"</span></div>";jQuery("body").prepend(h);setTimeout(function(){if(status!=='error'){if(typeof gtag!=="undefined"){gtag('event','login',{'event_category':'user'});}
jQuery(".cwauth-login-message").removeClass('show');}},8000);}
cwauth.dialog=function(msg){}
cwauth.processLogout=function(callback){var data={'action':'cwauth_logout',};jQuery.ajax({url:cwauth_cvars.ajaxurl,data:data,success:function(json){if(typeof gtag!=="undefined"){gtag('event','logout',{'event_category':'user','event_callback':loadPage});}
loadPage=});}})(window.cwauth=window.cwauth||{});
;/*! JsRender v1.0.2: http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
!function(e,t){"use strict";unction r(e,t){return ae(t)&&(t=n(e?e._d?e:n(s,e):s,t),t._d=(e&&e._d||0)+1),t}n u(e,t){t||e===!0||(t=e,e=void 0);var n,r,i,o,s=this,a="root"===t;if(e){if(o=t&&s.type===t&&s,!o)if(n=s.views,s._.useKey){for(r in n)if(o=t?n[r].get(e,t):n[r])break}else for(r=0,i=n.length;!o&&r<i;r++)o=t?n[r].get(e,t):n[r]}else if(a)o=s.root;else if(t)for(;s&&!o;)o=s.type===t?s:void 0,s=s.parent;else o=s.parent;return o||void 0}nction g(e,t,n,r){var i,o,a,d=0;if(1===n&&(r=1,n=void 0),t)for(o=t.split("."),a=o.length;e&&d<a;d++)i=e,e=o[d]?e[o[d]]:e;return n&&(n.lt=n.lt||d<a),void 0===e?r?s:"":r?function(){return e.apply(i,arguments)}:e}function v(n,r,i){var o,s,a,d,p,u,c,f=this,g=!ke&&arguments.length>1,v=f.ctx;if(n){if(f._||(p=f.index,f=f.tag),u=f,v&&v.hasOwnProperty(n)||(v=ue).hasOwnProperty(n)){if(a=v[n],"tag"===n||"tagCtx"===n||"root"===n||"parentTags"===n||f._.it===n)return a}else v=void 0;if((!ke&&f.tagCtx||f.linked)&&(a&&a._cxp||(f=f.tagCtx||ae(a)?f:(f=f.scope||f,!f.isTop&&f.ctx.tag||f),void 0!==a&&f.tagCtx&&(f=f.tagCtx.view.scope),v=f._ocps,a=v&&v.hasOwnProperty(n)&&v[n]||a,a&&a._cxp||!i&&!g||((v||(f._ocps=f._ocps||{}))[n]=a=[{_ocp:a,_vw:u,_key:n}],a._cxp={path:Te,ind:0,updateValue:)),d=a&&a._cxp)){if(arguments.length>2)return s=a[1]?fe._ceo(a[1].deps):[Te],s.unshift(a[0]),s._cxp=d,s;if(p=d.tagElse,c=a[1]?d.tag&&d.tag.cvtArgs?d.tag.cvtArgs(p,1)[d.ind]:a[1](a[0].data,a[0],fe):a[0]._ocp,g)return a&&c!==r&&fe._ucp(n,r,f,d),f;a=c}return a&&ae(a)&&(o=l(o,a)),o||a}}unction h(e,t,n,r){var o,s,a,d,p,u="number"==typeof n&&t.tmpl.bnds[n-1];if(void 0===r&&u&&u._lr&&(r=""),void 0!==r?n=r={props:{},args:[r]}:u&&(n=u(t.data,t,fe)),u=u._bd&&u,e||u){if(s=t._lc,o=s&&s.tag,n.view=t,!o){if(o=l(new fe._tg,{_:{bnd:u,unlinked:!0,lt:n.lt},inline:!s,tagName:":",convert:e,flow:!0,tagCtx:n,tagCtxs:[n],_is:"tag"}),d=n.args.length,d>1)for(p=o.bindTo=[];d--;)p.unshift(d);s&&(s.tag=o,o.linkCtx=s),n.ctx=Q(n.ctx,(s?s.view:t).ctx),i(o,n)}o._er=r&&a,o.ctx=n.ctx||o.ctx||{},n.ctx=void 0,a=o.cvtArgs()[0],o._er=r&&a}else a=n.args[0];return a=u&&t._.onRender?t._.onRender(a,t,o):a,void 0!=a?a:""}function _(e,t){var n,r,i,o,s,a,d,l=this;if(l.tagName){if(a=l,l=(a.tagCtxs||[l])[e||0],!l)return}else a=l.tag;if(s=a.bindFrom,o=l.args,(d=a.convert)&&""+d===d&&(d="true"===d?void 0:l.view.getRsc("converters",d)||S("Unknown converter: '"+d+"'")),d&&!t&&(o=o.slice()),s){for(i=[],n=s.length;n--;)r=s[n],i.unshift(b(l,r));t&&(o=i)}if(d){if(d=d.apply(a,i||o),void 0===d)return o;if(s=s||[0],n=s.length,de(d)&&d.length===n||(d=[d],s=[0],n=1),t)o=d;else for(;n--;)r=s[n],+r===r&&(o[r]=d[n])}return o}ction y(e,t,n,r,o,s){=t||ie;var d,l,p,u,c,f,g,m,h,w,y,k,C,T,j,A,N,P,R,F,V,$,M,I,D,J,U,q,K,L,B=0,H="",W=t._lc||!1,Z=t.ctx,z=n||t.tmpl,G="number"==typeof r&&t.tmpl.bnds[r-1];for("tag"===e._is?(d=e,e=d.tagName,r=d.tagCtxs,p=d.template):(l=t.getRsc("tags",e)||S("Unknown tag: {{"+e+"}} "),p=l.template),void 0===s&&G&&(G._lr=l.lateRender&&G._lr!==!1||G._lr)&&(s=""),void 0!==s?(H+=s,r=s=[{props:{},args:[],params:{props:{}}}]):G&&(r=G(t.data,t,fe)),g=r.length;B<g;B++)y=r[B],N=y.tmpl,(!W||!W.tag||B&&!W.tag.inline||d._er||N&&+N===N)&&(N&&z.tmpls&&(y.tmpl=y.content=z.tmpls[N-1]),y.index=B,y.ctxPrm=v,y.render=E,y.cvtArgs=_,y.bndArgs=x,y.view=t,y.ctx=Q(Q(y.ctx,l&&l.ctx),Z)),(n=y.props.tmpl)&&(y.tmpl=t._getTmpl(n),y.content=y.content||y.tmpl),d?W&&W.fn._lr&&(P=!!d.init):(d=new l._ctr,P=!!d.init,d.parent=f=Z&&Z.tag,d.tagCtxs=r,W&&(d.inline=!1,W.tag=d),d.linkCtx=W,(d._.bnd=G||W.fn)?(d._.ths=y.params.props["this"],d._.lt=r.lt,d._.arrVws={}):d.dataBoundOnly&&S(e+" must be data-bound:\n{^{"+e+"}}")),I=d.dataMap,y.tag=d,I&&r&&(y.map=r[B].map),d.flow||(k=y.ctx=y.ctx||{},u=d.parents=k.parentTags=Z&&Q(k.parentTags,Z.parentTags)||{},f&&(u[f.tagName]=f),u[d.tagName]=k.tag=d,k.tagCtx=y);if(!(d._er=s)){for(i(d,r[0]),d.rendering={rndr:d.rendering},B=0;B<g;B++){if(y=d.tagCtx=r[B],M=y.props,d.ctx=y.ctx,!B){if(P&&(d.init(y,W,d.ctx),P=void 0),y.args.length||y.argDefault===!1||d.argDefault===!1||(y.args=V=[y.view.data],y.params.args=["#data"]),T=a("bindTo"),void 0!==d.bindTo&&(d.bindTo=T),void 0!==d.bindFrom?d.bindFrom=a("bindFrom"):d.bindTo&&(d.bindFrom=d.bindTo=T),j=d.bindFrom||T,q=T.length,U=j.length,d._.bnd&&(K=d.linkedElement)&&(d.linkedElement=K=de(K)?K:[K],q!==K.length&&S("linkedElement not same length as bindTo")),(K=d.linkedCtxParam)&&(d.linkedCtxParam=K=de(K)?K:[K],U!==K.length&&S("linkedCtxParam not same length as bindFrom/bindTo")),j)for(d._.fromIndex={},d._.toIndex={},h=U;h--;)for(J=j[h],m=q;m--;)J===T[m]&&(d._.fromIndex[m]=h,d._.toIndex[h]=m);W&&(W.attr=d.attr=W.attr||d.attr||W._dfAt),c=d.attr,d._.noVws=c&&c!==Ke}if(V=d.cvtArgs(B),d.linkedCtxParam)for($=d.cvtArgs(B,1),m=U,L=d.constructor.prototype.ctx;m--;)(C=d.linkedCtxParam[m])&&(J=j[m],A=$[m],y.ctx[C]=fe._cp(L&&void 0===A?L[C]:A,void 0!==A&&b(y.params,J),y.view,d._.bnd&&{tag:d,cvt:d.convert,ind:m,tagElse:B}));(R=M.dataMap||I)&&(V.length||M.dataMap)&&(F=y.map,F&&F.src===V[0]&&!o||(F&&F.src&&F.unmap(),R.map(V[0],y,F,!d._.bnd),F=y.map),V=[F.tgt]),w=void 0,d.render&&(w=d.render.apply(d,V),t.linked&&w&&!Ee.test(w)&&(n={links:[]},n.render=n.fn=function(){return w},w=O(n,t.data,void 0,!0,t,void 0,void 0,d))),V.length||(V=[t]),void 0===w&&(D=V[0],d.contentCtx&&(D=d.contentCtx===!0?t:d.contentCtx(D)),w=y.render(D,!0)||(o?void 0:"")),H=H?H+(w||""):void 0!==w?""+w:void 0}d.rendering=d.rendering.rndr}return d.tagCtx=r[0],d.ctx=d.tagCtx.ctx,d._.noVws&&d.inline&&(H="text"===c?pe.html(H):""),G&&t._.onRender?t._.onRender(H,t,d):H}nction T(e,t,n){ar o,s,a,d=new fe._tg;if(ae(t)?t={depends:t.depends,render:t}:""+t===t&&(t={template:t}),s=t.baseTag){t.flow=!!t.flow,s=""+s===s?n&&n.tags[s]||ce[s]:s,s||S('baseTag: "'+t.baseTag+'" not found'),d=l(d,s);for(a in t)d[a]=r(s[a],t[a])}else d=l(d,t);return void 0!==(o=d.template)&&(d.template=""+o===o?le[o]||le(o):o),(i.prototype=d).constructor=d._ctr=i,n&&(d._parentTmpl=n),d}unction A(e,n,r,i){function o(n){var o,a;if(""+n===n||n.nodeType>0&&(s=n)){if(!s)if(/^\.\/[^\\:*?"<>]*$/.test(n))(a=le[e=e||n])?n=a:s=document.getElementById(n);else if(t.fn&&!fe.rTmpl.test(n))try{s=t(n,document)[0]}catch(d){}s&&("SCRIPT"!==s.tagName&&S(n+": Use script block, not "+s.tagName),i?n=s.innerHTML:(o=s.getAttribute(Be),o&&(o!==Qe?(n=le[o],delete le[o]):t.fn&&(n=t.data(s)[Qe])),o&&n||(e=e||(t.fn?Qe:n),n=A(e,s.innerHTML,r,i)),n.tmplName=e=e||o,e!==Qe&&(le[e]=n),s.setAttribute(Be,e),t.fn&&t.data(s,Qe,n))),s=void 0}else n.fn||(n=void 0);return n}var s,a,d=n=n||"";if(fe._html=pe.html,0===i&&(i=void 0,d=o(d)),i=i||(n.markup?n.bnds?l({},n):n:{}),i.tmplName=i.tmplName||e||"unnamed",r&&(i._parentTmpl=r),!d&&n.markup&&(d=o(n.markup))&&d.fn&&(d=d.markup),void 0!==d)return d.render||n.render?d.tmpls&&(a=d):(n=F(d,i),J(d.replace(Ne,"\\$&"),n)),a||(a=l(n),C(a)),a}ction F(e,n){var r,i=ve._wm||{},o={tmpls:[],links:{},bnds:[],_is:"template",render:E};return n&&(o=l(o,n)),o.markup=e,o.htmlTag||(r=Fe.exec(e),o.htmlTag=r?r[1].toLowerCase():""),r=i[o.htmlTag],r&&r!==i.div&&(o.markup=t.trim(o.markup)),o}function V(e,t){function n(i,o,s){var a,d,l,p=fe.onStore[e];if(i&&typeof i===Le&&!i.nodeType&&!i.markup&&!i.getTgt&&!("viewModel"===e&&i.getters||i.extend)){for(d in i)n(d,i[d],o);return o||oe}return i&&""+i!==i&&(s=o,o=i,i=void 0),l=s?"viewModel"===e?s:s[r]=s[r]||{}:n,a=t.compile,void 0===o&&(o=a?i:l[i],i=void 0),null===o?i&&delete l[i]:(a&&(o=a.call(l,i,o,s,0)||{},o._is=e),i&&(l[i]=o)),p&&p(i,o,s,a),o}var r=e+"s";oe[r]=n}nction E(e,t,n,r,i,o){var s,a,d,l,p,u,c,f,g=r,v="";if(t===!0?(n=t,t=void 0):typeof t!==Le&&(t=void 0),(d=this.tag)?(p=this,g=g||p.view,l=g._getTmpl(d.template||p.tmpl),arguments.length||(e=d.contentCtx&&ae(d.contentCtx)?e=d.contentCtx(e):g)):l=this,l){if(!r&&e&&"view"===e._is&&(g=e),g&&e===g&&(e=g.data),u=!g,ke=ke||u,g||((t=t||{}).root=e),!ke||ve.useViews||l.useViews||g&&g!==ie)v=O(l,e,t,n,g,i,o,d);else{if(g?(c=g.data,f=g.index,g.index=He):(g=ie,c=g.data,g.data=e,g.ctx=t),de(e)&&!n)for(s=0,a=e.length;s<a;s++)g.index=s,g.data=e[s],v+=l.fn(e[s],g,fe);else g.data=e,v+=l.fn(e,g,fe);g.data=c,g.index=f}u&&(ke=void 0)}return v}function O(e,t,n,r,i,o,s,a){ar p,u,c,f,g,v,m,h,_,b,x,w,y,C="";if(a&&(_=a.tagName,w=a.tagCtx,n=n?Q(n,a.ctx):a.ctx,e===i.content?m=e!==i.ctx._wrp?i.ctx._wrp:void 0:e!==w.content?e===a.template?(m=w.tmpl,n._wrp=w.content):m=w.content||i.content:m=i.content,w.props.link===!1&&(n=n||{},n.link=!1),(b=w.props.itemVar)&&("~"!==b[0]&&D("Use itemVar='~myItem'"),b=b.slice(1))),i&&(s=s||i._.onRender,y=n&&n.link===!1,y&&i._.nl&&(s=void 0),n=Q(n,i.ctx)),o===!0&&(v=!0,o=0),s&&a&&a._.noVws&&(s=void 0),h=s,s===!0&&(h=void 0,s=i._.onRender),n=e.helpers?Q(e.helpers,n):n,x=n,de(t)&&!r)for(c=v?i:void 0!==o&&i||new k(n,"array",i,t,e,o,s,m),c._.nl=y,i&&i._.useKey&&(c._.bnd=!a||a._.bnd&&a,c.tag=a),p=0,u=t.length;p<u;p++)b&&d(t[p]),f=new k(x,"item",c,t[p],e,(o||0)+p,s,c.content),f._.it=b,g=e.fn(t[p],f,fe),C+=c._.onRender?c._.onRender(g,f):g;else b&&d(t),c=v?i:new k(x,_||"data",i,t,e,o,s,m),c._.it=b,c.tag=a,c._.nl=y,C+=e.fn(t,c,fe);return a&&(c.tagElse=w.index,w.contentView=c),h?h(C,c):C}ction J(e,t,n,r,i){nction a(a,d,l,c,g,b,x,w,y,k,C,T){(x&&d||y&&!l||w&&":"===w.slice(-1)||k)&&D(a),b&&(g=":",c=Ke),y=y||n&&!i;var j,A,N,P=(d||n)&&[[]],R="",F="",V="",$="",M="",E="",O="",I="",S=!y&&!g;l=l||(w=w||"#data",g),o(T),v=T+a.length,x?f&&h.push(["*","\n"+w.replace(/^:/,"ret+= ").replace(Ae,"$1")+";\n"]):l?("else"===l&&(Re.test(w)&&D('For "{{else if expr}}" use "{{else expr}}"'),P=_[9]&&[[]],_[10]=e.substring(_[10],T),A=_[11]||_[0]||D("Mismatched: "+a),_=m.pop(),h=_[2],S=!0),w&&L(w.replace(je," "),P,t,n).replace(Pe,.slice(0,-1),P&&P[0]&&P.pop(),p=[l,c||!!r||u||"",S&&[],q($||(":"===l?"'#data',":""),M,E),q(F||(":"===l?"data,":""),R,V),O,I,j,N,P||0],h.push(p),S&&(m.push(_),_=p,_[10]=v,_[11]=A)):C&&(s(C!==_[0]&&C!==_[11]&&C,_[0]),_[10]=e.substring(_[10],T),_=m.pop()),s(!_&&C),h=_[2]}var d,l,p,u,c,f=ge.allowCode||t&&t.allowCode||me.allowCode===!0,g=[],v=0,m=[],h=g,_=[,,g];if(f&&t._is&&(t.allowCode=f),n&&(void 0!==r&&(e=e.slice(0,-r.length-2)+be),e=he+e+xe),s(m[0]&&m[0][2].pop()[0]),e.replace(re,a),o(e.length),(v=g[g.length-1])&&s(""+v!==v&&+v[10]===v[10]&&v[0]),n){for(l=B(g,e,n),c=[],d=g.length;d--;)c.unshift(g[d][9]);U(l,c)}else l=B(g,t);return l}nction K(e,t){return"\n\t"+(t?t+":{":"")+"args:["+e[0]+"],\n\tprops:{"+e[1]+"}"+(e[2]?",\n\tctx:{"+e[2]+"}":"")}function L(e,t,n,r){function i(i,p,b,x,w,y,k,C,T,j,A,N,P,R,F,V,$,M,E,O,I){function S(e,n,i,a,d,l,p,f){var g="."===i;if(i&&(w=w.slice(n.length),/^\.?constructor$/.test(f||w)&&D(e),g||(e=(j?(r?"":"(ltOb.lt=ltOb.lt||")+"(ob=":"")+(a?'view.ctxPrm("'+a+'")':d?"view":"data")+(j?")===undefined"+(r?"":")")+'?"":view._getOb(ob,"':"")+(f?(l?"."+l:a?"":d?"":"."+i)+(p||""):(f=a?"":d?l||"":i,"")),e+=f?"."+f:"",e=n+("view.data"===e.slice(0,9)?e.slice(5):e)+(j?(r?'"':'",ltOb')+(A?",1)":")"):"")),u)){if(K="_linkTo"===o?s=t._jsvto=t._jsvto||[]:c.bd,L=g&&K[K.length-1]){if(L._cpfn){for(;L.sb;)L=L.sb;L.bnd&&(w="^"+w.slice(1)),L.sb=w,L.bnd=L.bnd||"^"===w[0]}}else K.push(w);_[m]=O+(g?1:0)}return e}x&&!C&&(w=x+w),y=y||"",b=b||p||P,w=w||T,j&&(j=!/\)|]/.test(I[O-1]))&&(w=w.slice(1).split(".").join("^")),A=A||M||"";var U,q,K,L,B,Q=")";if("["===A&&(A="[j._sq(",Q=")]"),!k||l||d){if(u&&$&&!l&&!d&&m&&(U=_[m-1],I.length-1>O-(U||0))){if(U=I.slice(U,O+i.length),q!==!0)if(K=s||f[m-1].bd,L=K[K.length-1],L&&L.prm){for(;L.sb&&L.sb.prm;)L=L.sb;B=L.sb={path:L.sb,bnd:L.bnd}}else K.push(B={path:K.pop()});$=_e+":"+U+" onerror=''"+be,q=v[$],q||(v[$]=!0,v[$]=q=J($,n,!0)),q!==!0&&B&&(B._cpfn=q,B.prm=c.bd,B.bnd=B.bnd||B.path&&B.path.indexOf("^")>=0)}return l?(l=!R,l?i:P+'"'):d?(d=!F,d?i:P+'"'):(b?(_[m]=O++,c=f[++m]={bd:[]},b):"")+(E?m?"":(g=I.slice(g,O),(o?(o=a=s=!1,"\b"):"\b,")+g+(g=O+i.length,u&&t.push(c.bd=[]),"\b")):C?(m&&D(e),u&&t.pop(),o="_"+w,a=x,g=O+i.length,u&&(u=c.bd=t[o]=[],u.skp=!x),w+":"):w?w.split("^").join(".").replace(fe.rPath,S)+(A?(c=f[++m]={bd:[]},h[m]=Q,A):y):y?y:V?(V=h[m]||V,h[m]=!1,c=f[--m],V+(A?(c=f[++m],h[m]=Q,A):"")):N?(h[m]||D(e),","):p?"":(l=R,d=F,'"'))}D(e)}var o,s,a,d,l,p,u=t&&t[0],c={bd:u},f={0:c},g=0,v=(n?n.links:u&&(u.links=u.links||{}))||ie.tmpl.links,m=0,h={},_={};return"@"===e[0]&&(e=e.replace(De,".")),p=(e+(n?" ":"")).replace(fe.rPrm,i),!m&&p||D(e)}function B(e,t,n){var r,i,o,s,a,d,l,p,u,c,f,g,v,m,h,_,b,x,w,y,k,C,T,j,A,N,P,R,V,$,M,E,O,I=0,S=ve.useViews||t.useViews||t.tags||t.templates||t.helpers||t.converters,J="",q={},L=e.length;for(""+t===t?(x=n?'data-link="'+t.replace(je," ").slice(1,-1)+'"':t,t=0):(x=t.tmplName||"unnamed",t.allowCode&&(q.allowCode=!0),t.debug&&(q.debug=!0),f=t.bnds,b=t.tmpls),r=0;r<L;r++)if(i=e[r],""+i===i)J+='\n+"'+i+'"';else if(o=i[0],"*"===o)J+=";\n"+i[1]+"\nret=ret";else{if(s=i[1],k=!n&&i[2],a=K(i[3],"params")+"},"+K(v=i[4]),$=i[6],M=i[7],i[8]?(E="\nvar ob,ltOb={},ctxs=",O=";\nctxs.lt=ltOb.lt;\nreturn ctxs;"):(E="\nreturn ",O=""),C=i[10]&&i[10].replace(Ae,"$1"),(A="else"===o)?g&&g.push(i[9]):(R=i[5]||ge.debugMode!==!1&&"undefined",f&&(g=i[9])&&(g=[g],I=f.push(1))),S=S||v[1]||v[2]||g||/view.(?!index)/.test(v[0]),(N=":"===o)?s&&(o=s===Ke?">":s+o):(k&&(w=F(C,q),w.tmplName=x+"/"+o,w.useViews=w.useViews||S,B(k,w),S=w.useViews,b.push(w)),A||(y=o,S=S||o&&(!ce[o]||!ce[o].flow),j=J,J=""),T=e[r+1],T=T&&"else"===T[0]),V=R?";\ntry{\nret+=":"\n+",m="",h="",N&&(g||$||s&&s!==Ke||M)){if(P=new Function("data,view,j,u","// "+x+" "+ ++I+" "+o+E+"{"+a+"};"+O),P._er=R,P._tag=o,P._bd=!!g,P._lr=M,n)return P;U(P,g),_='c("'+s+'",view,',c=!0,m=_+I+",",h=")"}if(J+=N?(n?(R?"try{\n":"")+"return ":V)+(c?(c=void 0,S=u=!0,_+(P?(f[I-1]=P,I):"{"+a+"}")+")"):">"===o?(l=!0,"h("+v[0]+")"):(p=!0,"((v="+v[0]+")!=null?v:"+(n?"null)":'"")'))):(d=!0,"\n{view:view,content:false,tmpl:"+(k?b.length:"false")+","+a+"},"),y&&!T){if(J="["+J.slice(0,-1)+"]",_='t("'+y+'",view,this,',n||g){if(J=new Function("data,view,j,u"," // "+x+" "+I+" "+y+E+J+O),J._er=R,J._tag=y,g&&U(f[I-1]=J,g),J._lr=M,n)return J;m=_+I+",undefined,",h=")"}J=j+V+_+(g&&I||J)+")",g=0,y=0}R&&!T&&(S=!0,J+=";\n}catch(e){ret"+(n?"urn ":"+=")+m+"j._err(e,view,"+R+")"+h+";}"+(n?"":"ret=ret"))}J="// "+x+(q.debug?"\ndebugger;":"")+"\nvar v"+(d?",t=j._tag":"")+(u?",c=j._cnvt":"")+(l?",h=j._html":"")+(n?(i[8]?", ob":"")+";\n":',ret=""')+J+(n?"\n":";\nreturn ret;");try{J=new Function("data,view,j,u",J)}catch(Q){D("Compiled template code:\n\n"+J+'\n: "'+(Q.message||Q)+'"')}return t&&(t.fn=J,t.useViews=!!S),J}unction H(e,n){var r,i,o=n.map,s=o&&o.propsArr;if(!s){if(s=[],typeof e===Le||ae(e))for(r in e)i=e[r],r===se||!e.hasOwnProperty(r)||n.props.noFunctions&&t.isFunction(i)||s.push({key:r,prop:i});o&&(o.propsArr=o.options&&s)}return W(s,n)}function W(e,n){var r,i,o,s=n.tag,a=n.props,d=n.params.props,l=a.filter,p=a.sort,u=p===!0,c=parseInt(a.step),f=a.reverse?-1:1;if(!de(e))return e;if(u||p&&""+p===p?(r=e.map(function(e,t){return e=u?e:g(e,p),{i:t,v:""+e===e?e.toLowerCase():e}}),r.sort(,e=r.map():(p||f<0)&&!s.dataMap&&(e=e.slice()),ae(p)&&(e=e.sort(function(){return p.apply(n,arguments)})),f<0&&(!p||ae(p))&&(e=e.reverse()),e.filter&&l&&(e=e.filter(l,n),n.tag.onFilter&&n.tag.onFilter(n)),d.sorted&&(r=p||f<0?e:e.slice(),s.sorted?t.observable(s.sorted).refresh(r):n.map.sorted=r),i=a.start,o=a.end,(d.start&&void 0===i||d.end&&void 0===o)&&(i=o=0),isNaN(i)&&isNaN(o)||(i=+i||0,o=void 0===o||o>e.length?e.length:+o,e=e.slice(i,o)),c>1){for(i=0,o=e.length,r=[];i<o;i+=c)r.push(e[i]);e=r}return d.paged&&s.paged&&$observable(s.paged).refresh(e),e}function Z(e,n,r){var i=this.jquery&&(this[0]||S('Unknown template: "' + this.selector + '"')),o=i.getAttribute(Be);return E.call(o&&t.data(i)[Qe]||le(i),e,n,r)}ction Y(e){return""+e===e?e.replace(Ie,z):e}function ee(e){return""+e===e?e.replace(Se,G):e}var te=t===!1;t=t&&t.fn?t:e.jQuery;var ne,re,ie,oe,se,ae,de,le,pe,ue,ce,fe,ge,ve,me,he,_e,be,xe,we,ye,ke,Ce="v1.0.2",Te="_ocp",je=/[ \t]*(\r\n|\n|\r)/g,Ae=/\\(['"])/g,Ne=/['"\\]/g,Pe=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,Re=/^if\s/,Fe=/<(\w+)[>\s]/,Ve=/[\x00`><"'&=]/g,$e=/[\x00`><\"'&=]/,Me=/^on[A-Z]|^convert(Back)?$/,Ee=/^\#\d+_`[\s\S]*\/\d+_`$/,Oe=Ve,Ie=/[&<>]/g,Se=/&(amp|gt|lt);/g,De=/\[['"]?|['"]?\]/g,Je=0,Ue={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;","=":"&#61;"},qe={amp:"&",gt:">",lt:"<"},Ke="html",Le="object",Be="data-jsv-tmpl",Qe="jsvTmpl",He="For #index in nested block use #getIndex().",We={},Ze=e.jsrender,ze=Ze&&t&&!t.render,Ge={template:{compile:A},tag:{compile:T},viewModel:{compile:R},helper:{},converter:{}};if(oe={jsviews:Ce,sub:{rPath:/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,rPrm:/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,View:k,Err:d,tmplFn:J,parse:L,extend:l,extendCtx:Q,syntaxErr:D,onStore:{template:,addSetting:$,settings:{allowCode:!1},advSet:s,_thp:i,_gm:r,_tg:function(){},_cnvt:h,_tag:y,_er:S,_err:I,_cp:o,_sq:,settings:{delimiters:p,advanced:,map:M},(d.prototype=new Error).constructor=d,c.depends=f.depends="index",k.prototype={get:u,getIndex:f,ctxPrm:v,getRsc:w,_getTmpl:m,_getOb:g,_is:"view"},fe=oe.sub,me=oe.settings,!(Ze||t&&t.render)){for(ne in Ge)V(ne,Ge[ne]);if(pe=oe.converters,ue=oe.helpers,ce=oe.tags,fe._tg.prototype={baseApply:j,cvtArgs:_,bndArgs:x,ctxPrm:v},ie=fe.topView=new k,t){if(t.fn.render=Z,se=t.expando,t.observable){if(Ce!==(Ce=t.views.jsviews))throw"JsObservable requires JsRender "+Ce;l(fe,t.views.sub),oe.map=t.views.map}}else t={},te&&(e.jsrender=t),t.renderFile=t.__express=t.compile=t.isFunction=t.isArray=Array.isArray||fe._jq=t.jsrender=Ce;ge=fe.settings,ge.allowCode=!1,ae=t.isFunction,t.render=We,t.views=oe,t.templates=le=oe.templates;for(ye in ge)$(ye);(me.debugMode=function(e){return void 0===e?ge.debugMode:(ge.debugMode=e,ge.onError=e+""===e?function(){return e}:ae(e)?e:void 0,me)})(!1),ve=ge.advanced={useViews:!1,_jsv:!1},ce({"if":{render:function(e){var t=this,n=t.tagCtx,r=t.rendering.done||!e&&(n.args.length||!n.index)?"":(t.rendering.done=!0,void(t.selected=n.index));return r},contentCtx:!0,flow:!0},"for":{sortDataMap:M(W),init:function(e,t){var n,r,i,o=this,s=o.tagCtxs;for(n=s.length;n--;)r=s[n],i=r.params.props,r.argDefault=void 0===r.props.end||r.args.length>0,r.argDefault!==!1&&de(r.args[0])&&(void 0!==i.sort||i.start||i.end||i.step||i.filter||i.reverse)&&(r.props.dataMap=o.sortDataMap)},render:function(e){var t,n,r,i,o,s=this,a=s.tagCtx,d=a.argDefault===!1,l=a.props,p=d||a.args.length,u="",c=0;if(!s.rendering.done){if(t=p?e:a.view.data,d)for(d=l.reverse?"unshift":"push",i=+l.end,o=+l.step||1,t=[],r=+l.start||0;(i-r)*o>0;r+=o)t[d](r);void 0!==t&&(n=de(t),u+=a.render(t,!p||l.noIteration),c+=n?t.length:1),(s.rendering.done=c)&&(s.selected=a.index)}return u},flow:!0},props:{baseTag:"for",dataMap:M(H),init:s,flow:!0},include:{flow:!0},"*":{render:o,flow:!0},":*":{render:o,flow:!0},dbg:ue.dbg=pe.dbg=a}),pe({html:X,attr:X,encode:Y,unencode:ee,url:)}return ge=fe.settings,de=(t||Ze).isArray,me.delimiters("{{","}}","^"),ze&&Ze.views.sub._jq(t),t||Ze},window);
//# sourceMappingURL=jsrender.min.js.map

;/*!
 * Packery PACKAGED v2.1.2
 * Gapless, draggable grid layouts
 *
 * Licensed GPLv3 for open source use
 * or Packery Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2013-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,,function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,,"undefined"!=typeof window?window:this,,window,,window,,window,,window,,window,,window,,window,,window,;
;/*!
 * Infinite Scroll PACKAGED v3.0.4
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,l){function a(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,a){var h=l.data(a,i);if(!h)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var c=h[e];if(!c||"_"==e.charAt(0))return void s(r+" is not a valid method");var u=c.apply(h,n);o=void 0===o?u:o}),void 0!==o?o:t}function h(t,e){t.each(function(t,n){var o=l.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),l.data(n,i,o))})}l=l||e||t.jQuery,l&&(r.prototype.option||(r.prototype.option=function(t){l.isPlainObject(t)&&(this.options=l.extend(!0,this.options,t))}),l.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return a(this,t,e)}return h(this,t),this},n(l))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,,function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,,window,function(t,e,i){ar o=t.jQuery,r={};n.defaults={},n.create={},n.destroy={};var s=n.prototype;i.extend(s,e.prototype);var l=0;s.create=s.option=function(t){i.extend(this.options,t)},s.callOnInit=s.dispatchEvent=var a={initialized:function(t){return"on "+t},request:load:error:append:last:function(t,e){return"URL: "+e},history:pageIndex:;s.log=s.updateMeasurements=s.updateScroller=s.updateGetPath=s.updateGetPathTemplate=function(t){this.getPath=bind(this);var e=t.replace("{{#}}","(\\d\\d?\\d?)"),i=new RegExp(e),n=location.href.match(i);n&&(this.pageIndex=parseInt(n[1],10),this.log("pageIndex",[this.pageIndex,"template string"]))};var h=[/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,/^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,/(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/];return s.updateGetPathSelector=s.updateGetAbsolutePath=n.create.hideNav=n.destroy.hideNav=s.destroy=n.throttle=n.data=function(t){t=i.getQueryElement(t);var e=t&&t.infiniteScrollGUID;return e&&r[e]},n.setJQuery=function(t){o=t},i.htmlInit(n,"infinite-scroll"),o&&o.bridget&&o.bridget("infiniteScroll",n),n}),window,function(t,e){s=e.prototype;return e.defaults.loadOnScroll=!0,e.defaults.checkLastPage=!0,e.defaults.responseType="document",e.create.pageLoad=s.onScrollThresholdLoad=function(){this.options.loadOnScroll&&this.loadNextPage()},s.loadNextPage=s.onPageLoad=s.appendNextPage=s.appendItems=s.appendOutlayerItems=s.onAppendOutlayer=s.checkLastPage=s.lastPageReached=s.onPageError=e.create.prefill=s.prefill=s.getPrefillDistance=s.stopPrefill=e}),function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/scroll-watch",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,,function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/history",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,,function(t,e){"function"==typeof define&&define.amd?define("infinite-scroll/js/button",["./core","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,,window,,window,function(t){return t}),"undefined"!=typeof window?window:this,;
;/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
((jQuery);;
/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
();
;/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!;
;!(function(){var e,t,r,n=function(e){var t;return ,i=n((function(e,t){var r=sl("socket.io-client");e.exports=t=i;var n=t.managers={};.protocol=kl.protocol,t.connect=i,t.Manager=up,t.Socket=tp})),o=n((),s=n((function(e,t){(function(e){"use strict";t.Buffer=e,t.INSPECT_MAX_BYTES=50;nction n(t,n,i){if("string"==typeof t)return t,n);if(ArrayBuffer.isView(t))return s(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(D(t,ArrayBuffer)||t&&D(t.buffer,ArrayBuffer))return t,n,i);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(null!=o&&o!==t)return e.from(o,n,i);var l=t);if(l)return l;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return e.from(t[Symbol.toPrimitive]("string"),n,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}PPORT=),e.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(e.prototype,"parent",{enumerable:!0,get:function(){if(e.isBuffer(this))return this.buffer}}),Object.defineProperty(e.prototype,"offset",{enumerable:!0,get:),"undefined"!=typeof Symbol&&null!=Symbol.species&&e[Symbol.species]===e&&Object.defineProperty(e,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),e.poolSize=8192,e.from=e.prototype.__proto__=Uint8Array.prototype,e.__proto__=Uint8Array,e.alloc=e.allocUnsafe=function(e){return o(e)},e.allocUnsafeSlow=function(e){return o(e)},e.isBuffer=e.compare=e.isEncoding=e.concat=e.byteLength=u,e.prototype._isBuffer=!0,e.prototype.swap16=e.prototype.swap32=e.prototype.swap64=e.prototype.toString=e.prototype.toLocaleString=e.prototype.toString,e.prototype.equals=e.prototype.inspect=e.prototype.compare=e.prototype.includes=e.prototype.indexOf=function(e,t,r){return c(this,e,t,r,!0)},e.prototype.lastIndexOf=e.prototype.write=e.prototype.toJSON=var w=4096;n E(e,t,r,n,i){return t=+t,r>>>=0,i||F(e,0,r,4),Cn.write(e,t,r,n,23,4),r+4}.prototype.slice=e.prototype.readUIntLE=e.prototype.readUIntBE=e.prototype.readUInt8=e.prototype.readUInt16LE=e.prototype.readUInt16BE=e.prototype.readUInt32LE=e.prototype.readUInt32BE=e.prototype.readIntLE=e.prototype.readIntBE=e.prototype.readInt8=e.prototype.readInt16LE=e.prototype.readInt16BE=e.prototype.readInt32LE=e.prototype.readInt32BE=e.prototype.readFloatLE=function(e,t){return e>>>=0,t||C(e,4,this.length),Cn.read(this,e,!0,23,4)},e.prototype.readFloatBE=function(e,t){return e>>>=0,t||C(e,4,this.length),Cn.read(this,e,!1,23,4)},e.prototype.readDoubleLE=function(e,t){return e>>>=0,t||C(e,8,this.length),Cn.read(this,e,!0,52,8)},e.prototype.readDoubleBE=e.prototype.writeUIntLE=e.prototype.writeUIntBE=e.prototype.writeUInt8=e.prototype.writeUInt16LE=e.prototype.writeUInt16BE=e.prototype.writeUInt32LE=e.prototype.writeUInt32BE=e.prototype.writeIntLE=e.prototype.writeIntBE=e.prototype.writeInt8=e.prototype.writeInt16LE=e.prototype.writeInt16BE=e.prototype.writeInt32LE=e.prototype.writeInt32BE=e.prototype.writeFloatLE=function(e,t,r){return E(this,e,t,!0,r)},e.prototype.writeFloatBE=function(e,t,r){return E(this,e,t,!1,r)},e.prototype.writeDoubleLE=function(e,t,r){return O(this,e,t,!0,r)},e.prototype.writeDoubleBE=e.prototype.copy=e.prototype.fill=var U=/[^+/0-9A-Za-z-_]/g;ll(this,s({}).Buffer)})),a=e={};function u(){throw new Error("setTimeout has not been defined")};var p,d=[],f=!1,y=-1;ction b(){}a.nextTick=m.prototype.run=a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0};var w={exports:{}};(function(e,t){!function(e,t){"object"==typeof w.exports?w.exports=t():e.ES6Promise=t()}(this,(function(){"use strict";ar n=Array.isArray?Array.isArray:i=0,o=void 0,s=void 0,a=u="undefined"!=typeof window?window:void 0,l=u||{},c=l.MutationObserver||l.WebKitMutationObserver,p="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;ar f=new Array(1e3);ar g,v,m,b,w=void 0;w=function(){return e.nextTick(y)}:c?(v=0,m=new c(y),b=document.createTextNode(""),m.observe(b,{characterData:!0}),w=:d?((g=new MessageChannel).port1.onmessage=y,w=:w=void 0===u?):h();var k=Math.random().toString(36).substring(2);function P(){}function C(e,t,n){t.constructor===e.constructor&&n===_&&t.constructor.resolve===S?e,t):void 0===n?E(e,t):r(n)?e,t,n):E(e,t)};ar B=),I=);return I.prototype.then=_,I.all=I.race=I.resolve=S,I.reject=I._setScheduler=function(e){s=e},I._setAsap=I._asap=a,I.polyfill=I.Promise=I,I}))}).call(this,e,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});(w=w.exports).polyfill();var _,S={exports:{}};_=function(e){"use strict";var t="URLSearchParams"in self,r="Symbol"in self&&"iterator"in Symbol,n="FileReader"in self&&"Blob"in self&&),i="FormData"in self,o="ArrayBuffer"in self;if(o)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||pe.append=p.prototype.delete=p.prototype.get=p.prototype.has=p.prototype.set=p.prototype.forEach=p.prototype.keys=p.prototype.values=p.prototype.entries=r&&(p.prototype[Symbol.iterator]=p.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];rototype.clone=g.call(m.prototype),g.call(w.prototype),w.prototype.clone=w.error=var _=[301,302,303,307,308];w.redirect=e.DOMException=self.DOMException;try{new e.DOMException}catch(gc){e.DOMException=e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}.polyfill=!0,self.fetch||(self.fetch=S,self.Headers=p,self.Request=m,self.Response=w),e.Headers=p,e.Request=m,e.Response=w,e.fetch=S,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof S.exports?_(S.exports):_(this.WHATWGFetch={}),S=S.exports;var k=function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var C,A=function(){function e(e){var t=this;this.locale={strings:{},pluralize:,Array.isArray(e)?e.forEach((function(e){return t._apply(e)})):this._apply(e)}var t=e.prototype;return t._apply=function(e){if(e&&e.strings){var t=this.locale;this.locale=P({},t,{strings:P({},t.strings,e.strings)}),this.locale.pluralize=e.pluralize||t.pluralize}},t.interpolate=function(e,t){var r=String.prototype,n=r.split,i=r.replace,o=/\$/g,s=[e];for(var a in t)if("_"!==a&&k(t,a)){var u=t[a];"string"==typeof u&&(u=i.call(t[a],o,"$$$$")),s=l(s,new RegExp("%\\{"+a+"\\}","g"),u)}return s;function l(e,t,r){var i=[];return e.forEach((function(e){if("string"!=typeof e)return i.push(e);n.call(e,t).forEach(()})),i}},t.translate=t.translateArray=function(e,t){if(!k(this.locale.strings,e))throw new Error("missing string: "+e);var r=this.locale.strings[e];if("object"==typeof r){if(t&&void 0!==t.smart_count){var n=this.locale.pluralize(t.smart_count);return this.interpolate(r[n],t)}throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}")}return this.interpolate(r,t)},e}(),F=function(){var e={},t=e._fns={};return e.emit=function(e,r,n,i,o,s,a){var u=function(e){for(var r=t[e]?t[e]:[],n=e.indexOf(":"),i=-1===n?[e]:[e.substring(0,n),e.substring(n+1)],o=Object.keys(t),s=0,a=o.length;s<a;s++){var u=o[s];if("*"===u&&(r=r.concat(t[u])),2===i.length&&i[0]===u){r=r.concat(t[u]);break}}return r}(e);u.length&&function(e,t,r){for(var n=0,i=t.length;n<i&&t[n];n++)t[n].event=e,t[n].apply(t[n],r)}(e,u,[r,n,i,o,s,a])},e.on=e.once=e.off=e},E=O="object"==typeof window?window:self,U=Object.keys(O).length,R=E(((navigator.mimeTypes?navigator.mimeTypes.length:0)+navigator.userAgent.length).toString(36)+U.toString(36),4),T=function(){return R},x="undefined"!=typeof window&&(window.crypto||window.msCrypto)||"undefined"!=typeof self&&self.crypto;if(x){var D=Math.pow(2,32)-1;C=else C=Math.random;var B=C,I={},j=0,M=Math.pow(36,4);lug=z.isCuid=z.isSlug=z.fingerprint=T,I=z;var q={};(function(e){var t=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,u=s||a||Function("return this")(),l=Object.prototype.toString,c=Math.max,p=Math.min,d=function(){return u.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function f(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(h(e)){var s="function"==typeof e.valueOf?e.valueOf():e;e=h(s)?s+"":s}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var a=n.test(e);return a||i.test(e)?o(e.slice(2),a?2:8):r.test(e)?NaN:+e}q=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),function(e,t,r){var n,i,o,s,a,u,l=0,y=!1,g=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,o=i;return n=i=void 0,l=t,s=e.apply(o,r)}function b(e){var r=e-u;return void 0===u||r>=t||r<0||g&&e-l>=o}function w(){var e=d();if(b(e))return _(e);a=setTimeout(w,function(e){var r=t-(e-u);return g?p(r,o-(e-l)):r}(e))}function _(e){return a=void 0,v&&n?m(e):(n=i=void 0,s)}function S(){var e=d(),r=b(e);if(n=arguments,i=this,u=e,r){if(void 0===a)return function(e){return l=e,a=setTimeout(w,t),y?m(e):s}(u);if(g)return a=setTimeout(w,t),m(u)}return void 0===a&&(a=setTimeout(w,t)),s}return t=f(t)||0,h(r)&&(y=!!r.leading,o=(g="maxWait"in r)?c(f(r.maxWait)||0,t):o,v="trailing"in r?!!r.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=u=i=a=void 0},S.flush=function(){return void 0===a?s:_(d())},S}(e,t,{leading:n,maxWait:t,trailing:i})}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var H,V=function(e){if("number"!=typeof e||isNaN(e))throw new TypeError("Expected a number, got "+typeof e);var t=e<0,r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t&&(e=-e),e<1)return(t?"-":"")+e+" B";var n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),r.length-1);e=Number(e/Math.pow(1024,n));var i=r[n];return e>=10||e%1==0?(t?"-":"")+e.toFixed(0)+" "+i:(t?"-":"")+e.toFixed(1)+" "+i};.prototype.match=H=function(e,t,r){var n=new W(e,r||/[\/\.]/);return void 0!==t?n.match(t):n};var X,G=/[\/\+\.]/;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var K=function(){ar t=e.prototype;return t.getState=t.setState=function(e){var t=$({},this.state),r=$({},this.state,e);this.state=r,this._publish(t,r,e)},t.subscribe=t._publish=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.callbacks.forEach(()},e}();K.VERSION="1.2.4",X=var Y=J={md:"text/markdown",markdown:"text/markdown",mp4:"video/mp4",mp3:"audio/mp3",svg:"image/svg+xml",jpg:"image/jpeg",png:"image/png",gif:"image/gif",heic:"image/heic",heif:"image/heif",yaml:"text/yaml",yml:"text/yaml",csv:"text/csv",tsv:"text/tab-separated-values",tab:"text/tab-separated-values",avi:"video/x-msvideo",mks:"video/x-matroska",mkv:"video/x-matroska",mov:"video/quicktime",doc:"application/msword",docm:"application/vnd.ms-word.document.macroenabled.12",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",dot:"application/msword",dotm:"application/vnd.ms-word.template.macroenabled.12",dotx:"application/vnd.openxmlformats-officedocument.wordprocessingml.template",xla:"application/vnd.ms-excel",xlam:"application/vnd.ms-excel.addin.macroenabled.12",xlc:"application/vnd.ms-excel",xlf:"application/x-xliff+xml",xlm:"application/vnd.ms-excel",xls:"application/vnd.ms-excel",xlsb:"application/vnd.ms-excel.sheet.binary.macroenabled.12",xlsm:"application/vnd.ms-excel.sheet.macroenabled.12",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",xlt:"application/vnd.ms-excel",xltm:"application/vnd.ms-excel.template.macroenabled.12",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template",xlw:"application/vnd.ms-excel",txt:"text/plain",text:"text/plain",conf:"text/plain",log:"text/plain",pdf:"application/pdf"},Q=function Z(e){var t="";return e.replace(/[^A-Z0-9]/gi,(function(e){return t+="-"+e),"/"}))+t}var ee=function(e){var t="uppy";return"string"==typeof e.name&&(t+="-"+Z(e.name.toLowerCase())),void 0!==e.type&&(t+="-"+e.type),e.meta&&"string"==typeof e.meta.relativePath&&(t+="-"+Z(e.meta.relativePath.toLowerCase())),void 0!==e.data.size&&(t+="-"+e.data.size),void 0!==e.data.lastModified&&(t+="-"+e.data.lastModified),t},te=function(e){if(null==e&&(e="undefined"!=typeof navigator?navigator.userAgent:null),!e)return!0;var t=/Edge\/(\d+\.\d+)/.exec(e);if(!t)return!0;var r=t[1].split("."),n=r[0],i=r[1];return n=parseInt(n,10),i=parseInt(i,10),n<15||15===n&&i<15063||n>18||18===n&&i>=18218};function re(e){return 2!==e.length?0+e:e}var ne=function(){var e=new Date;return re(e.getHours().toString())+":"+re(e.getMinutes().toString())+":"+re(e.getSeconds().toString())},ie={justErrorsLogger:{debug:function(){},warn:function(){},error:function(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=console).error.apply(e,["[Uppy] ["+ne()+"]"].concat(r))}},debugLogger:{debug:function(){for(var e=console.debug||console.log,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.call.apply(e,[console,"[Uppy] ["+ne()+"]"].concat(r))},warn:function(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=console).warn.apply(e,["[Uppy] ["+ne()+"]"].concat(r))},error:function(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=console).error.apply(e,["[Uppy] ["+ne()+"]"].concat(r))}}},oe={exports:{}};!function(){"use strict";function e(){}(e,t,r,n,i,l){F++||(E=null!=i&&void 0!==i.ownerSVGElement,O=null!=e&&!("__preactattr_"in e));var p=function e(t,r,n,i,l){var c=t,p=E;if(null!=r&&"boolean"!=typeof r||(r=""),"string"==typeof r||"number"==typeof r)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||l)?t.nodeValue!=r&&(t.nodeValue=r):(c=document.createTextNode(r),t&&(t.parentNode&&t.parentNode.replaceChild(c,t),d(t,!0))),c.__preactattr_=!0,c;var h,y,v=r.nodeName;if("function"==typeof v)return t,r,n,i);if(E="svg"===v||"foreignObject"!==v&&E,v=String(v),(!t||!o(t,v))&&(h=v,(y=E?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h)).__n=h,c=y,t)){for(;t.firstChild;)c.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(c,t),d(t,!0)}var b=c.firstChild,w=c.__preactattr_,_=r.children;if(null==w){w=c.__preactattr_={};for(var S=c.attributes,k=S.length;k--;)w[S[k].name]=S[k].value}return!O&&_&&1===_.length&&"string"==typeof _[0]&&null!=b&&void 0!==b.splitText&&null==b.nextSibling?b.nodeValue!=_[0]&&(b.nodeValue=_[0]):(_&&_.length||null!=b)&&function(t,r,n,i,s){var u,l,c,p,h,f,y,g,v=t.childNodes,m=[],b={},w=0,_=0,S=v.length,k=0,P=r?r.length:0;if(0!==S)for(var C=0;C<S;C++){var A=v[C],F=A.__preactattr_;null!=(E=P&&F?A._component?A._component.__k:F.key:null)?(w++,b[E]=A):(F||(void 0!==A.splitText?!s||A.nodeValue.trim():s))&&(m[k++]=A)}if(0!==P)for(C=0;C<P;C++){var E;if(h=null,null!=(E=(p=r[C]).key))w&&void 0!==b[E]&&(h=b[E],b[E]=void 0,w--);else if(!h&&_<k)for(u=_;u<k;u++)if(void 0!==m[u]&&(f=l=m[u],g=s,"string"==typeof(y=p)||"number"==typeof y?void 0!==f.splitText:"string"==typeof y.nodeName?!f._componentConstructor&&o(f,y.nodeName):g||f._componentConstructor===y.nodeName)){h=l,m[u]=void 0,u===k-1&&k--,u===_&&_++;break}h=e(h,p,n,i),c=v[C],h&&h!==t&&h!==c&&(null==c?t.appendChild(h):h===c.nextSibling?a(c):t.insertBefore(h,c))}if(w)for(var C in b)void 0!==b[C]&&d(b[C],!1);for(;_<=k;)void 0!==(h=m[k--])&&d(h,!1)}(c,_,n,i,O||null!=w.dangerouslySetInnerHTML),c,r.attributes,w),E=p,c}(e,t,r,n,l);return i&&p.parentNode!==i&&i.appendChild(p),--F||(O=!1,l||c()),p},_=[],S=[],k="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,P=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,C=[],A=[],F=0,E=!1,O=!1,U={};r(b.prototype,{setState:forceUpdate:render:function(){}});var R={h:t,createElement:t,cloneElement:function(e,n){return t(e.nodeName,r(r({},e.attributes),n),arguments.length>2?[].slice.call(arguments,2):e.children)},Component:b,render:rerender:i,options:w};oe.exports=R}(),oe=oe.exports;var se=ae=function(e,t){return void 0===t&&(t=document),"string"==typeof e?t.querySelector(e):se(e)?e:void 0};function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var le,ce=function(){ar t=e.prototype;return t.getPluginState=t.setPluginState=function(e){var t,r=this.uppy.getState().plugins;this.uppy.setState({plugins:ue({},r,(t={},t[this.id]=ue({},r[this.id],e),t))})},t.setOptions=t.update=function(e){void 0!==this.el&&this._updateUI&&this._updateUI(e)},t.afterUpdate=function(){},t.onMount=function(){},t.mount=function(t,r){var n,i,o,s,a=this,u=r.id,l=ae(t);if(l)return this.isTargetDOMEl=!0,this.rerender=function(e){a.uppy.getPlugin(a.id)&&(a.el=oe.render(a.render(e),l,a.el),a.afterUpdate())},this._updateUI=(n=this.rerender,i=null,o=null,function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o=t,i||(i=Promise.resolve().then((function(){return i=null,n.apply(void 0,o)}))),i}),this.uppy.log("Installing "+u+" to a DOM element '"+t+"'"),this.opts.replaceTargetContent&&(l.innerHTML=""),this.el=oe.render(this.render(this.uppy.getState()),l),this.onMount(),this.el;if("object"==typeof t&&t instanceof e)s=t;else if("function"==typeof t){var c=t;this.uppy.iteratePlugins(()}if(s)return this.uppy.log("Installing "+u+" to "+s.id),this.parent=s,this.el=s.addTarget(r),this.onMount(),this.el;this.uppy.log("Not installing "+u);var p="Invalid target option given to "+u+".";throw new Error(p+="function"==typeof t?" The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.":"If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.")},t.render=function(e){throw new Error("Extend the render method to add your plugin to a DOM element")},t.addTarget=t.unmount=t.install=function(){},t.uninstall=function(){this.unmount()},e}();function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function de(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function he(e){var t="function"==typeof Map?new Map:void 0;return(he=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return fe(e,arguments,ge(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ye(n,e)})(e)}function fe(e,t,r){return(fe=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&ye(i,r.prototype),i}).apply(null,arguments)}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ve=ie.justErrorsLogger,me=ie.debugLogger,be=function(e){var t,r;eturn r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n}(he(Error)),we=function(){function e(e){var t=this;this.defaultLocale={strings:{addBulkFilesFailed:{0:"Failed to add %{smart_count} file due to an internal error",1:"Failed to add %{smart_count} files due to internal errors"},youCanOnlyUploadX:{0:"You can only upload %{smart_count} file",1:"You can only upload %{smart_count} files"},youHaveToAtLeastSelectX:{0:"You have to select at least %{smart_count} file",1:"You have to select at least %{smart_count} files"},exceedsSize2:"%{backwardsCompat} %{size}",exceedsSize:"This file exceeds maximum allowed size of",inferiorSize:"This file is smaller than the allowed size of %{size}",youCanOnlyUploadFileTypes:"You can only upload: %{types}",noNewAlreadyUploading:"Cannot add new files: already uploading",noDuplicates:"Cannot add the duplicate file '%{fileName}', it already exists",companionError:"Connection with Companion failed",companionUnauthorizeHint:"To unauthorize to your %{provider} account, please go to %{url}",failedToUpload:"Failed to upload %{file}",noInternetConnection:"No Internet connection",connectedToInternet:"Connected to the Internet",noFilesFound:"You have no files or folders here",selectX:{0:"Select %{smart_count}",1:"Select %{smart_count}"},selectAllFilesFromFolderNamed:"Select all files from folder %{name}",unselectAllFilesFromFolderNamed:"Unselect all files from folder %{name}",selectFileNamed:"Select file %{name}",unselectFileNamed:"Unselect file %{name}",openFolderNamed:"Open folder %{name}",cancel:"Cancel",logOut:"Log out",filter:"Filter",resetFilter:"Reset filter",loading:"Loading...",authenticateWithTitle:"Please authenticate with %{pluginName} to select files",authenticateWith:"Connect to %{pluginName}",emptyFolderAdded:"No files were added from empty folder",folderAdded:{0:"Added %{smart_count} file from %{folder}",1:"Added %{smart_count} files from %{folder}"}}};var r={id:"uppy",autoProceed:!1,allowMultipleUploads:!0,debug:!1,restrictions:{maxFileSize:null,minFileSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null},meta:{},onBeforeFileAdded:onBeforeUpload:store:X(),logger:ve};if(this.opts=pe({},r,e,{restrictions:pe({},r.restrictions,e&&e.restrictions)}),e&&e.logger&&e.debug?this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.","warning"):e&&e.debug&&(this.opts.logger=me),this.log("Using Core v"+this.constructor.VERSION),this.opts.restrictions.allowedFileTypes&&null!==this.opts.restrictions.allowedFileTypes&&!Array.isArray(this.opts.restrictions.allowedFileTypes))throw new TypeError("`restrictions.allowedFileTypes` must be an array");this.i18nInit(),this.plugins={},this.getState=this.getState.bind(this),this.getPlugin=this.getPlugin.bind(this),this.setFileMeta=this.setFileMeta.bind(this),this.setFileState=this.setFileState.bind(this),this.log=this.log.bind(this),this.info=this.info.bind(this),this.hideInfo=this.hideInfo.bind(this),this.addFile=this.addFile.bind(this),this.removeFile=this.removeFile.bind(this),this.pauseResume=this.pauseResume.bind(this),this._calculateProgress=q(this._calculateProgress.bind(this),500,{leading:!0,trailing:!0}),this.updateOnlineStatus=this.updateOnlineStatus.bind(this),this.resetProgress=this.resetProgress.bind(this),this.pauseAll=this.pauseAll.bind(this),this.resumeAll=this.resumeAll.bind(this),this.retryAll=this.retryAll.bind(this),this.cancelAll=this.cancelAll.bind(this),this.retryUpload=this.retryUpload.bind(this),this.upload=this.upload.bind(this),this.emitter=F(),this.on=this.on.bind(this),this.off=this.off.bind(this),this.once=this.emitter.once.bind(this.emitter),this.emit=this.emitter.emit.bind(this.emitter),this.preProcessors=[],this.uploaders=[],this.postProcessors=[],this.store=this.opts.store,this.setState({plugins:{},files:{},currentUploads:{},allowNewUpload:!0,capabilities:{uploadProgress:te(),individualCancellation:!0,resumableUploads:!1},totalProgress:0,meta:pe({},this.opts.meta),info:{isHidden:!0,type:"info",message:""}}),this._storeUnsubscribe=this.store.subscribe((),this.opts.debug&&"undefined"!=typeof window&&(window[this.opts.id]=this),this._addListeners()}var t,r,n=e.prototype;return n.on=function(e,t){return this.emitter.on(e,t),this},n.off=n.updateAll=n.setState=function(e){this.store.setState(e)},n.getState=function(){return this.store.getState()},n.setFileState=function(e,t){var r;if(!this.getState().files[e])throw new Error("Can\u2019t set state for "+e+" (the file could have been removed)");this.setState({files:pe({},this.getState().files,(r={},r[e]=pe({},this.getState().files[e],t),r))})},n.i18nInit=function(){this.translator=new A([this.defaultLocale,this.opts.locale]),this.locale=this.translator.locale,this.i18n=this.translator.translate.bind(this.translator),this.i18nArray=this.translator.translateArray.bind(this.translator)},n.setOptions=function(e){this.opts=pe({},this.opts,e,{restrictions:pe({},this.opts.restrictions,e&&e.restrictions)}),e.meta&&this.setMeta(e.meta),this.i18nInit(),e.locale&&this.iteratePlugins((function(e){e.setOptions()})),this.setState()},n.resetProgress=function(){var e={percentage:0,bytesUploaded:0,uploadComplete:!1,uploadStarted:null},t=pe({},this.getState().files),r={};Object.keys(t).forEach((function(n){var i=pe({},t[n]);i.progress=pe({},i.progress,e),r[n]=i})),this.setState({files:r,totalProgress:0}),this.emit("reset-progress")},n.addPreProcessor=function(e){this.preProcessors.push(e)},n.removePreProcessor=function(e){var t=this.preProcessors.indexOf(e);-1!==t&&this.preProcessors.splice(t,1)},n.addPostProcessor=function(e){this.postProcessors.push(e)},n.removePostProcessor=function(e){var t=this.postProcessors.indexOf(e);-1!==t&&this.postProcessors.splice(t,1)},n.addUploader=n.removeUploader=n.setMeta=function(e){var t=pe({},this.getState().meta,e),r=pe({},this.getState().files);Object.keys(r).forEach((function(t){r[t]=pe({},r[t],{meta:pe({},r[t].meta,e)})})),this.log("Adding metadata:"),this.log(e),this.setState({meta:t,files:r})},n.setFileMeta=function(e,t){var r=pe({},this.getState().files);if(r[e]){var n=pe({},r[e].meta,t);r[e]=pe({},r[e],{meta:n}),this.setState({files:r})}else this.log("Was trying to set metadata for a file that has been removed: ",e)},n.getFile=function(e){return this.getState().files[e]},n.getFiles=function(){var e=this.getState().files;return Object.keys(e).map((function(t){return e[t]}))},n._checkMinNumberOfFiles=function(e){var t=this.opts.restrictions.minNumberOfFiles;if(Object.keys(e).length<t)throw new be(""+this.i18n("youHaveToAtLeastSelectX",{smart_count:t}))},n._checkRestrictions=function(e,t){var r=this.opts.restrictions,n=r.maxFileSize,i=r.minFileSize,o=r.maxNumberOfFiles,s=r.allowedFileTypes;if(o&&Object.keys(e).length+1>o)throw new be(""+this.i18n("youCanOnlyUploadX",{smart_count:o}));if(s&&!s.some((function(e){return e.indexOf("/")>-1?!!t.type&&t.type.replace(/;.*?$/,""),e):"."===e[0]&&t.extension.toLowerCase()===e.substr(1).toLowerCase()}))){var a=s.join(", ");throw new be(this.i18n("youCanOnlyUploadFileTypes",{types:a}))}if(n&&null!=t.data.size&&t.data.size>n)throw new be(this.i18n("exceedsSize2",{backwardsCompat:this.i18n("exceedsSize"),size:V(n)}));if(i&&null!=t.data.size&&t.data.size<i)throw new be(this.i18n("inferiorSize",{size:V(i)}))},n._showOrLogErrorAndThrow=function(e,t){var r=void 0===t?{}:t,n=r.showInformer,i=void 0===n||n,o=r.file,s=void 0===o?null:o,a=r.throwErr,u=void 0===a||a,l="object"==typeof e?e.message:e,c="object"==typeof e&&e.details?e.details:"",p=l;if(c&&(p+=" "+c),e.isRestriction?(this.log(p),this.emit("restriction-failed",s,e)):this.log(p,"error"),i&&this.info({message:l,details:c},"error",5e3),u)throw"object"==typeof e?e:new Error(e)},n._assertNewUploadAllowed=function(e){!1===this.getState().allowNewUpload&&this._showOrLogErrorAndThrow(new be(this.i18n("noNewAlreadyUploading")),{file:e})},n._checkAndCreateFileStateObject=function(e,t){var r=Q(t);t.type=r;var n,i=this.opts.onBeforeFileAdded(t,e);!1===i&&this._showOrLogErrorAndThrow(new be("Cannot add the file because onBeforeFileAdded returned false."),{showInformer:!1,file:t}),"object"==typeof i&&i&&(t=i),n=t.name?t.name:"image"===r.split("/")[0]?r.split("/")[0]+"."+r.split("/")[1]:"noname";var o=Y(n).extension,s=t.isRemote||!1,a=ee(t);e[a]&&this._showOrLogErrorAndThrow(new be(this.i18n("noDuplicates",{fileName:n})),{file:t});var u=t.meta||{};u.name=n,u.type=r;var l=isFinite(t.data.size)?t.data.size:null,c={source:t.source||"",id:a,name:n,extension:o||"",meta:pe({},this.getState().meta,u),type:r,data:t.data,progress:{percentage:0,bytesUploaded:0,bytesTotal:l,uploadComplete:!1,uploadStarted:null},size:l,isRemote:s,remote:t.remote||"",preview:t.preview};try{this._checkRestrictions(e,c)}catch(gc){this._showOrLogErrorAndThrow(gc,{file:c})}return c},n._startIfAutoProceed=function(){var e=this;this.opts.autoProceed&&!this.scheduledAutoProceed&&(this.scheduledAutoProceed=setTimeout((,4))},n.addFile=function(e){var t;this._assertNewUploadAllowed(e);var r=this.getState().files,n=this._checkAndCreateFileStateObject(r,e);return this.setState({files:pe({},r,(t={},t[n.id]=n,t))}),this.emit("file-added",n),this.log("Added file: "+n.name+", "+n.id+", mime type: "+n.type),this._startIfAutoProceed(),n.id},n.addFiles=function(e){var t=this;this._assertNewUploadAllowed();for(var r=pe({},this.getState().files),n=[],i=[],o=0;o<e.length;o++)try{var s=this._checkAndCreateFileStateObject(r,e[o]);n.push(s),r[s.id]=s}catch(u){u.isRestriction||i.push(u)}if(this.setState({files:r}),n.forEach((function(e){t.emit("file-added",e)})),n.length>5?this.log("Added batch of "+n.length+" files"):Object.keys(n).forEach((function(e){t.log("Added file: "+n[e].name+"\n id: "+n[e].id+"\n type: "+n[e].type)})),n.length>0&&this._startIfAutoProceed(),i.length>0){var a="Multiple errors occurred while adding files:\n";i.forEach((),this.info({message:this.i18n("addBulkFilesFailed",{smart_count:i.length}),details:a},"error",5e3);var u=new Error(a);throw u.errors=i,u}},n.removeFiles=function(e,t){var r=this,n=this.getState(),i=n.files,o=n.currentUploads,s=pe({},i),a=pe({},o),u=Object.create(null);.forEach(();var c=[];Object.keys(a).forEach((function(e){var t=o[e].fileIDs.filter(l);0!==t.length?a[e]=pe({},o[e],{fileIDs:t}):c.push(e)})),c.forEach(();var p={currentUploads:a,files:s};0===Object.keys(s).length&&(p.allowNewUpload=!0,p.error=null),this.setState(p),this._calculateTotalProgress();var d=Object.keys(u);d.forEach((),d.length>5?this.log("Removed "+d.length+" files"):this.log("Removed files: "+d.join(", "))},n.removeFile=n.pauseResume=function(e){if(this.getState().capabilities.resumableUploads&&!this.getFile(e).uploadComplete){var t=!this.getFile(e).isPaused;return this.setFileState(e,{isPaused:t}),this.emit("upload-pause",e,t),t}},n.pauseAll=function(){var e=pe({},this.getState().files);Object.keys(e).filter((function(t){return!e[t].progress.uploadComplete&&e[t].progress.uploadStarted})).forEach((function(t){var r=pe({},e[t],{isPaused:!0});e[t]=r})),this.setState({files:e}),this.emit("pause-all")},n.resumeAll=function(){var e=pe({},this.getState().files);Object.keys(e).filter(().forEach((function(t){var r=pe({},e[t],{isPaused:!1,error:null});e[t]=r})),this.setState({files:e}),this.emit("resume-all")},n.retryAll=function(){var e=pe({},this.getState().files),t=Object.keys(e).filter(();if(t.forEach((function(t){var r=pe({},e[t],{isPaused:!1,error:null});e[t]=r})),this.setState({files:e,error:null}),this.emit("retry-all",t),0===t.length)return Promise.resolve({successful:[],failed:[]});var r=this._createUpload(t,{forceAllowNewUpload:!0});return this._runUpload(r)},n.cancelAll=function(){this.emit("cancel-all");var e=this.getState().files,t=Object.keys(e);t.length&&this.removeFiles(t,"cancel-all"),this.setState({totalProgress:0,error:null})},n.retryUpload=function(e){this.setFileState(e,{error:null,isPaused:!1}),this.emit("upload-retry",e);var t=this._createUpload([e],{forceAllowNewUpload:!0});return this._runUpload(t)},n.reset=function(){this.cancelAll()},n._calculateProgress=function(e,t){if(this.getFile(e.id)){var r=isFinite(t.bytesTotal)&&t.bytesTotal>0;this.setFileState(e.id,{progress:pe({},this.getFile(e.id).progress,{bytesUploaded:t.bytesUploaded,bytesTotal:t.bytesTotal,percentage:r?Math.round(t.bytesUploaded/t.bytesTotal*100):0})}),this._calculateTotalProgress()}else this.log("Not setting progress for a file that has been removed: "+e.id)},n._calculateTotalProgress=n._addListeners=function(){var e=this;this.on("error",(function(t){var r="Unknown error";t.message&&(r=t.message),t.details&&(r+=" "+t.details),e.setState({error:r})})),this.on("upload-error",(function(t,r,n){var i="Unknown error";if(r.message&&(i=r.message),r.details&&(i+=" "+r.details),e.setFileState(t.id,{error:i,response:n}),e.setState({error:r.message}),"object"==typeof r&&r.message){var o=new Error(r.message);o.details=r.message,r.details&&(o.details+=" "+r.details),o.message=e.i18n("failedToUpload",{file:t.name}),e._showOrLogErrorAndThrow(o,{throwErr:!1})}else e._showOrLogErrorAndThrow(r,{throwErr:!1})})),this.on("upload",(),this.on("upload-started",(function(t,r){e.getFile(t.id)?e.setFileState(t.id,{progress:{uploadStarted:Date.now(),uploadComplete:!1,percentage:0,bytesUploaded:0,bytesTotal:t.size}}):e.log("Not setting progress for a file that has been removed: "+t.id)})),this.on("upload-progress",this._calculateProgress),this.on("upload-success",(function(t,r){if(e.getFile(t.id)){var n=e.getFile(t.id).progress;e.setFileState(t.id,{progress:pe({},n,{uploadComplete:!0,percentage:100,bytesUploaded:n.bytesTotal}),response:r,uploadURL:r.uploadURL,isPaused:!1}),e._calculateTotalProgress()}else e.log("Not setting progress for a file that has been removed: "+t.id)})),this.on("preprocess-progress",(function(t,r){e.getFile(t.id)?e.setFileState(t.id,{progress:pe({},e.getFile(t.id).progress,{preprocess:r})}):e.log("Not setting progress for a file that has been removed: "+t.id)})),this.on("preprocess-complete",(function(t){if(e.getFile(t.id)){var r=pe({},e.getState().files);r[t.id]=pe({},r[t.id],{progress:pe({},r[t.id].progress)}),delete r[t.id].progress.preprocess,e.setState({files:r})}else e.log("Not setting progress for a file that has been removed: "+t.id)})),this.on("postprocess-progress",(function(t,r){e.getFile(t.id)?e.setFileState(t.id,{progress:pe({},e.getState().files[t.id].progress,{postprocess:r})}):e.log("Not setting progress for a file that has been removed: "+t.id)})),this.on("postprocess-complete",(function(t){if(e.getFile(t.id)){var r=pe({},e.getState().files);r[t.id]=pe({},r[t.id],{progress:pe({},r[t.id].progress)}),delete r[t.id].progress.postprocess,e.setState({files:r})}else e.log("Not setting progress for a file that has been removed: "+t.id)})),this.on("restored",(function(){e._calculateTotalProgress()})),"undefined"!=typeof window&&window.addEventListener&&(window.addEventListener("online",(function(){return e.updateOnlineStatus()})),window.addEventListener("offline",(function(){return e.updateOnlineStatus()})),setTimeout((function(){return e.updateOnlineStatus()}),3e3))},n.updateOnlineStatus=function(){void 0===window.navigator.onLine||window.navigator.onLine?(this.emit("is-online"),this.wasOffline&&(this.emit("back-online"),this.info(this.i18n("connectedToInternet"),"success",3e3),this.wasOffline=!1)):(this.emit("is-offline"),this.info(this.i18n("noInternetConnection"),"error",0),this.wasOffline=!0)},n.getID=n.use=function(e,t){if("function"!=typeof e)throw new TypeError("Expected a plugin class, but got "+(null===e?"null":typeof e)+". Please verify that the plugin was imported and spelled correctly.");var r=new e(this,t),n=r.id;if(this.plugins[r.type]=this.plugins[r.type]||[],!n)throw new Error("Your plugin must have an id");if(!r.type)throw new Error("Your plugin must have a type");var i=this.getPlugin(n);if(i){var o="Already found a plugin named '"+i.id+"'. Tried to use: '"+n+"'.\nUppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.";throw new Error(o)}return e.VERSION&&this.log("Using "+n+" v"+e.VERSION),this.plugins[r.type].push(r),r.install(),this},n.getPlugin=function(e){var t=null;return this.iteratePlugins((),t},n.iteratePlugins=n.removePlugin=function(e){this.log("Removing plugin "+e.id),this.emit("plugin-remove",e),e.uninstall&&e.uninstall();var t=this.plugins[e.type].slice(),r=t.indexOf(e);-1!==r&&(t.splice(r,1),this.plugins[e.type]=t);var n=this.getState();delete n.plugins[e.id],this.setState(n)},n.close=function(){var e=this;this.log("Closing Uppy instance "+this.opts.id+": removing all files and uninstalling plugins"),this.reset(),this._storeUnsubscribe(),this.iteratePlugins((function(t){e.removePlugin(t)}))},n.info=function(e,t,r){void 0===t&&(t="info"),void 0===r&&(r=3e3);var n="object"==typeof e;this.setState({info:{isHidden:!1,type:t,message:n?e.message:e,details:n?e.details:null}}),this.emit("info-visible"),clearTimeout(this.infoTimeoutID),this.infoTimeoutID=0!==r?setTimeout(this.hideInfo,r):void 0},n.hideInfo=function(){var e=pe({},this.getState().info,{isHidden:!0});this.setState({info:e}),this.emit("info-hidden")},n.log=n.run=n.restore=function(e){return this.log('Core: attempting to restore upload "'+e+'"'),this.getState().currentUploads[e]?this._runUpload(e):(this._removeUpload(e),Promise.reject(new Error("Nonexistent upload")))},n._createUpload=function(e,t){var r;void 0===t&&(t={});var n=t.forceAllowNewUpload,i=void 0!==n&&n,o=this.getState(),s=o.allowNewUpload,a=o.currentUploads;if(!s&&!i)throw new Error("Cannot create a new upload: already uploading.");var u=I();return this.emit("upload",{id:u,fileIDs:e}),this.setState({allowNewUpload:!1!==this.opts.allowMultipleUploads,currentUploads:pe({},a,(r={},r[u]={fileIDs:e,step:0,result:{}},r))}),u},n._getUpload=n.addResultData=function(e,t){var r;if(this._getUpload(e)){var n=this.getState().currentUploads,i=pe({},n[e],{result:pe({},n[e].result,t)});this.setState({currentUploads:pe({},n,(r={},r[e]=i,r))})}else this.log("Not setting result for an upload that has been removed: "+e)},n._removeUpload=function(e){var t=pe({},this.getState().currentUploads);delete t[e],this.setState({currentUploads:t})},n._runUpload=function(e){var t=this,r=this.getState().currentUploads[e].step,n=[].concat(this.preProcessors,this.uploaders,this.postProcessors),i=Promise.resolve();return n.forEach((function(n,o){o<r||(i=i.then((function(){var r,i=t.getState().currentUploads,s=i[e];if(s){var a=pe({},s,{step:o});return t.setState({currentUploads:pe({},i,(r={},r[e]=a,r))}),n(a.fileIDs,e)}})).then(())})),i.catch((function(r){t.emit("error",r,e),t._removeUpload(e)})),i.then((function(){var r=t.getState().currentUploads[e];if(r){var n=r.fileIDs.map((function(e){return t.getFile(e)})),i=n.filter((),o=n.filter(();t.addResultData(e,{successful:i,failed:o,uploadID:e})}})).then((function(){var r=t.getState().currentUploads;if(r[e]){var n=r[e].result;return t.emit("complete",n),t._removeUpload(e),n}})).then((function(r){return null==r&&t.log("Not setting result for an upload that has been removed: "+e),r}))},n.upload=function(){var e=this;this.plugins.uploader||this.log("No uploader type plugins are used","warning");var t=this.getState().files,r=this.opts.onBeforeUpload(t);return!1===r?Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false")):(r&&"object"==typeof r&&(t=r,this.setState({files:t})),Promise.resolve().then(().catch((function(t){e._showOrLogErrorAndThrow(t)})).then((function(){var r=e.getState().currentUploads,n=Object.keys(r).reduce((,[]),i=[];Object.keys(t).forEach(();var o=e._createUpload(i);return e._runUpload(o)})).catch(())},t=e,(r=[{key:"state",get:])&&de(t.prototype,r),e}();function _e(e){var t="function"==typeof Map?new Map:void 0;return(_e=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Se(e,arguments,Pe(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ke(n,e)})(e)}function Se(e,t,r){return(Se=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&ke(i,r.prototype),i}).apply(null,arguments)}function ke(e,t){return(ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Pe(e){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}we.VERSION="1.13.2",(le=.Uppy=we,le.Plugin=ce,le.debugLogger=me;var Ce=function(e){var t,r;function n(){var t;return(t=e.call(this,"Authorization required")||this).name="AuthError",t.isAuthError=!0,t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n}(_e(Error));Ue,Re,Te=function(e){var t,r;function n(t,r){var n;return void 0===r&&(r=null),(n=e.call(this,"This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.\n\nSource error: ["+t+"]")||this).isNetworkError=!0,n.request=r,n}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n}(Ae(Error)),xe=function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}ar Ie=(Re=Ue=function(){function e(e,t){this.uppy=e,this.opts=t,this.onReceiveResponse=this.onReceiveResponse.bind(this),this.allowedHeaders=["accept","content-type","uppy-auth-token"],this.preflightDone=!1}var t,r,n=e.prototype;return n.headers=function(){var e=this.opts.companionHeaders||this.opts.serverHeaders||{};return Promise.resolve(De({},this.defaultHeaders,e))},n._getPostResponseFunc=function(e){var t=this;return ,n.onReceiveResponse=function(e){var t,r=this.uppy.getState().companion||{},n=this.opts.companionUrl,i=e.headers;return i.has("i-am")&&i.get("i-am")!==r[n]&&this.uppy.setState({companion:De({},r,(t={},t[n]=i.get("i-am"),t))}),e},n._getUrl=function(e){return/^(https?:|)\/\//.test(e)?e:this.hostname+"/"+e},n._json=function(e){if(401===e.status)throw new Ce;if(e.status<200||e.status>300){var t="Failed request with status: "+e.status+". "+e.statusText;return e.json().then((function(e){throw t=e.message?t+" message: "+e.message:t,t=e.requestId?t+" request-Id: "+e.requestId:t,new Error(t)})).catch(()}return e.json()},n.preflight=function(e){var t=this;return this.preflightDone?Promise.resolve(this.allowedHeaders.slice()):fetch(this._getUrl(e),{method:"OPTIONS"}).then(().catch((function(e){return t.uppy.log("[CompanionClient] unable to make preflight request "+e,"warning"),t.preflightDone=!0,t.allowedHeaders.slice()}))},n.preflightAndHeaders=function(e){var t=this;return Promise.all([this.preflight(e),this.headers()]).then((function(e){var r=e[0],n=e[1];return Object.keys(n).forEach((function(e){-1===r.indexOf(e.toLowerCase())&&(t.uppy.log("[CompanionClient] excluding unallowed header "+e),delete n[e])})),n}))},n.get=function(e,t){var r=this;return this.preflightAndHeaders(e).then((function(t){return xe(r._getUrl(e),{method:"get",headers:t,credentials:"same-origin"})})).then(this._getPostResponseFunc(t)).then((function(e){return r._json(e)})).catch((function(t){return t=t.isAuthError?t:new Error("Could not get "+r._getUrl(e)+". "+t),Promise.reject(t)}))},n.post=function(e,t,r){var n=this;return this.preflightAndHeaders(e).then((function(r){return xe(n._getUrl(e),{method:"post",headers:r,credentials:"same-origin",body:JSON.stringify(t)})})).then(this._getPostResponseFunc(r)).then((function(e){return n._json(e)})).catch((function(t){return t=t.isAuthError?t:new Error("Could not post "+n._getUrl(e)+". "+t),Promise.reject(t)}))},n.delete=function(e,t,r){var n=this;return this.preflightAndHeaders(e).then((function(r){return xe(n.hostname+"/"+e,{method:"delete",headers:r,credentials:"same-origin",body:t?JSON.stringify(t):null})})).then(this._getPostResponseFunc(r)).then(().catch((function(t){return t=t.isAuthError?t:new Error("Could not delete "+n._getUrl(e)+". "+t),Promise.reject(t)}))},t=e,(r=[{key:"hostname",get:,{key:"defaultHeaders",get:function(){return{Accept:"application/json","Content-Type":"application/json","Uppy-Versions":"@uppy/companion-client="+e.VERSION}}}])&&Be(t.prototype,r),e}(),Ue.VERSION="1.5.4",Re),je={};function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}je.setItem=je.getItem=je.removeItem=var Le={RequestClient:Ie,Provider:function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).provider=r.provider,n.id=n.provider,n.name=n.opts.name||n.id.split("-").map(().join(" "),n.pluginId=n.opts.pluginId,n.tokenKey="companion-"+n.pluginId+"-auth-token",n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.headers=function(){return Promise.all([e.prototype.headers.call(this),this.getAuthToken()]).then((function(e){return Me({},e[0],{"uppy-auth-token":e[1]})}))},i.onReceiveResponse=function(t){t=e.prototype.onReceiveResponse.call(this,t);var r=this.uppy.getPlugin(this.pluginId),n=r.getPluginState().authenticated?401!==t.status:t.status<400;return r.setPluginState({authenticated:n}),t},i.setAuthToken=i.getAuthToken=i.authUrl=i.fileUrl=i.list=function(e){return this.get(this.id+"/list/"+(e||""))},i.logout=function(){var e=this;return this.get(this.id+"/logout").then(().then(()},n.initPlugin=function(e,t,r){if(e.type="acquirer",e.files=[],r&&(e.opts=Me({},r,t)),t.serverUrl||t.serverPattern)throw new Error("`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`");if(t.companionAllowedHosts){var n=t.companionAllowedHosts;if(!("string"==typeof n||Array.isArray(n)||n instanceof RegExp))throw new TypeError(e.id+': the option "companionAllowedHosts" must be one of string, Array, RegExp');e.opts.companionAllowedHosts=n}else/^(?!https?:\/\/).*$/i.test(t.companionUrl)?e.opts.companionAllowedHosts="https://"+t.companionUrl.replace(/^\/\//,""):e.opts.companionAllowedHosts=t.companionUrl;e.storage=e.opts.storage||je},n}(Ie),Socket:function(){function e(e){this.opts=e,this._queued=[],this.isOpen=!1,this.emitter=F(),this._handleMessage=this._handleMessage.bind(this),this.close=this.close.bind(this),this.emit=this.emit.bind(this),this.on=this.on.bind(this),this.once=this.once.bind(this),this.send=this.send.bind(this),e&&!1===e.autoOpen||this.open()}var t=e.prototype;return t.open=function(){var e=this;this.socket=new WebSocket(this.opts.target),this.socket.onopen=function(t){for(e.isOpen=!0;e._queued.length>0&&e.isOpen;){var r=e._queued[0];e.send(r.action,r.payload),e._queued=e._queued.slice(1)}},this.socket.onclose=this.socket.onmessage=this._handleMessage},t.close=t.send=function(e,t){this.isOpen?this.socket.send(JSON.stringify({action:e,payload:t})):this._queued.push({action:e,payload:t})},t.on=function(e,t){this.emitter.on(e,t)},t.emit=function(e,t){this.emitter.emit(e,t)},t.once=t._handleMessage=function(e){try{var t=JSON.parse(e.data);this.emit(t.action,t.payload)}catch(gc){console.log(gc)}},e}()},Ne=oe.h,ze=function(e){var t,r;eturn r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=Ne("span",{class:"uppy-Provider-authTitleName"},this.props.pluginName,Ne("br",null));return Ne("div",{class:"uppy-Provider-auth"},Ne("div",{class:"uppy-Provider-authIcon"},this.props.pluginIcon()),Ne("div",{class:"uppy-Provider-authTitle"},this.props.i18nArray("authenticateWithTitle",{pluginName:e})),Ne("button",{type:"button",class:"uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn",onclick:this.props.handleAuth,"data-uppy-super-focusable":!0},this.props.i18nArray("authenticateWith",{pluginName:this.props.pluginName})))},n}(oe.Component),qe={exports:{}};!function(){"use strict";var e={}.hasOwnProperty;e.exports?(t.default=t,qe.exports=t):window.classNames=t}(),qe=qe.exports;var He=oe.h,Ve=function(e){return He("span",null,He("button",{type:"button",class:"uppy-u-reset",onclick:e.getFolder},e.title),e.isLast?"":" / ")},We=oe.h,Xe=function(e){var t,r;=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.preventEnterPress=i.render=function(){var e=this;return We("div",{class:"uppy-ProviderBrowser-search"},We("input",{class:"uppy-u-reset uppy-ProviderBrowser-searchInput",type:"text",placeholder:this.props.i18n("filter"),"aria-label":this.props.i18n("filter"),onkeyup:this.preventEnterPress,onkeydown:this.preventEnterPress,onkeypress:this.preventEnterPress,oninput:value:this.props.filterInput}),We("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon uppy-ProviderBrowser-searchIcon",width:"12",height:"12",viewBox:"0 0 12 12"},We("path",{d:"M8.638 7.99l3.172 3.172a.492.492 0 1 1-.697.697L7.91 8.656a4.977 4.977 0 0 1-2.983.983C2.206 9.639 0 7.481 0 4.819 0 2.158 2.206 0 4.927 0c2.721 0 4.927 2.158 4.927 4.82a4.74 4.74 0 0 1-1.216 3.17zm-3.71.685c2.176 0 3.94-1.726 3.94-3.856 0-2.129-1.764-3.855-3.94-3.855C2.75.964.984 2.69.984 4.819c0 2.13 1.765 3.856 3.942 3.856z"})),this.props.filterInput&&We("button",{class:"uppy-u-reset uppy-ProviderBrowser-searchClose",type:"button","aria-label":this.props.i18n("resetFilter"),title:this.props.i18n("resetFilter"),onclick:this.props.filterQuery},We("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",viewBox:"0 0 19 19"},We("path",{d:"M17.318 17.232L9.94 9.854 9.586 9.5l-.354.354-7.378 7.378h.707l-.62-.62v.706L9.318 9.94l.354-.354-.354-.354L1.94 1.854v.707l.62-.62h-.706l7.378 7.378.354.354.354-.354 7.378-7.378h-.707l.622.62v-.706L9.854 9.232l-.354.354.354.354 7.378 7.378.708-.707-7.38-7.378v.708l7.38-7.38.353-.353-.353-.353-.622-.622-.353-.353-.354.352-7.378 7.38h.708L2.56 1.23 2.208.88l-.353.353-.622.62-.353.355.352.353 7.38 7.38v-.708l-7.38 7.38-.353.353.352.353.622.622.353.353.354-.353 7.38-7.38h-.708l7.38 7.38z"}))))},n}(oe.Component),Ge=oe.h;function $e(){return Ge("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:11,height:14.5,viewBox:"0 0 44 58"},Ge("path",{d:"M27.437.517a1 1 0 0 0-.094.03H4.25C2.037.548.217 2.368.217 4.58v48.405c0 2.212 1.82 4.03 4.03 4.03H39.03c2.21 0 4.03-1.818 4.03-4.03V15.61a1 1 0 0 0-.03-.28 1 1 0 0 0 0-.093 1 1 0 0 0-.03-.032 1 1 0 0 0 0-.03 1 1 0 0 0-.032-.063 1 1 0 0 0-.03-.063 1 1 0 0 0-.032 0 1 1 0 0 0-.03-.063 1 1 0 0 0-.032-.03 1 1 0 0 0-.03-.063 1 1 0 0 0-.063-.062l-14.593-14a1 1 0 0 0-.062-.062A1 1 0 0 0 28 .708a1 1 0 0 0-.374-.157 1 1 0 0 0-.156 0 1 1 0 0 0-.03-.03l-.003-.003zM4.25 2.547h22.218v9.97c0 2.21 1.82 4.03 4.03 4.03h10.564v36.438a2.02 2.02 0 0 1-2.032 2.032H4.25c-1.13 0-2.032-.9-2.032-2.032V4.58c0-1.13.902-2.032 2.03-2.032zm24.218 1.345l10.375 9.937.75.718H30.5c-1.13 0-2.032-.9-2.032-2.03V3.89z"}))}function Ke(){return Ge("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",style:{minWidth:16,marginRight:3},viewBox:"0 0 276.157 276.157"},Ge("path",{d:"M273.08 101.378c-3.3-4.65-8.86-7.32-15.254-7.32h-24.34V67.59c0-10.2-8.3-18.5-18.5-18.5h-85.322c-3.63 0-9.295-2.875-11.436-5.805l-6.386-8.735c-4.982-6.814-15.104-11.954-23.546-11.954H58.73c-9.292 0-18.638 6.608-21.737 15.372l-2.033 5.752c-.958 2.71-4.72 5.37-7.596 5.37H18.5C8.3 49.09 0 57.39 0 67.59v167.07c0 .886.16 1.73.443 2.52.152 3.306 1.18 6.424 3.053 9.064 3.3 4.652 8.86 7.32 15.255 7.32h188.487c11.395 0 23.27-8.425 27.035-19.18l40.677-116.188c2.11-6.035 1.43-12.164-1.87-16.816zM18.5 64.088h8.864c9.295 0 18.64-6.607 21.738-15.37l2.032-5.75c.96-2.712 4.722-5.373 7.597-5.373h29.565c3.63 0 9.295 2.876 11.437 5.806l6.386 8.735c4.982 6.815 15.104 11.954 23.546 11.954h85.322c1.898 0 3.5 1.602 3.5 3.5v26.47H69.34c-11.395 0-23.27 8.423-27.035 19.178L15 191.23V67.59c0-1.898 1.603-3.5 3.5-3.5zm242.29 49.15l-40.676 116.188c-1.674 4.78-7.812 9.135-12.877 9.135H18.75c-1.447 0-2.576-.372-3.02-.997-.442-.625-.422-1.814.057-3.18l40.677-116.19c1.674-4.78 7.812-9.134 12.877-9.134h188.487c1.448 0 2.577.372 3.02.997.443.625.423 1.814-.056 3.18z"}))}function Ye(){return Ge("svg",{"aria-hidden":"true",focusable:"false",style:{width:16,marginRight:4},viewBox:"0 0 58 58"},Ge("path",{d:"M36.537 28.156l-11-7a1.005 1.005 0 0 0-1.02-.033C24.2 21.3 24 21.635 24 22v14a1 1 0 0 0 1.537.844l11-7a1.002 1.002 0 0 0 0-1.688zM26 34.18V23.82L34.137 29 26 34.18z"}),Ge("path",{d:"M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 28H2v-9h8v9zm-8 2h8v9H2v-9zm10 10V8h34v42H12V40zm44-12h-8v-9h8v9zm-8 2h8v9h-8v-9zm8-22v9h-8V8h8zM2 8h8v9H2V8zm0 42v-9h8v9H2zm54 0h-8v-9h8v9z"}))}var Je=function(e){if(null!==e.itemIconString)switch(e.itemIconString){case"file":return Ge($e,null);case"folder":return Ge(Ke,null);case"video":return Ge(Ye,null);default:return Ge("img",{src:e.itemIconString})}},Qe=oe.h,Ze=function(e){return Qe("li",{class:e.className},Qe("div",{"aria-hidden":!0,class:"uppy-ProviderBrowserItem-fakeCheckbox "+(e.isChecked?"uppy-ProviderBrowserItem-fakeCheckbox--is-checked":"")}),Qe("button",{type:"button",class:"uppy-u-reset uppy-ProviderBrowserItem-inner",onclick:e.toggleCheckbox,role:"option","aria-label":e.isChecked?e.i18n("unselectFileNamed",{name:e.title}):e.i18n("selectFileNamed",{name:e.title}),"aria-selected":e.isChecked,"aria-disabled":e.isDisabled,"data-uppy-super-focusable":!0},e.itemIconEl,e.showTitles&&e.title))},et=oe.h,tt=function(e){return"folder"===e.type?e.isChecked?e.i18n("unselectAllFilesFromFolderNamed",{name:e.title}):e.i18n("selectAllFilesFromFolderNamed",{name:e.title}):e.isChecked?e.i18n("unselectFileNamed",{name:e.title}):e.i18n("selectFileNamed",{name:e.title})},rt=function(e){return et("li",{class:e.className},et("button",{type:"button",class:"uppy-u-reset uppy-ProviderBrowserItem-fakeCheckbox "+(e.isChecked?"uppy-ProviderBrowserItem-fakeCheckbox--is-checked":""),onClick:e.toggleCheckbox,id:e.id,role:"option","aria-label":tt(e),"aria-selected":e.isChecked,"aria-disabled":e.isDisabled,"data-uppy-super-focusable":!0}),"file"===e.type?et("label",{for:e.id,className:"uppy-u-reset uppy-ProviderBrowserItem-inner"},e.itemIconEl,e.showTitles&&e.title):et("button",{type:"button",class:"uppy-u-reset uppy-ProviderBrowserItem-inner",onclick:e.handleFolderClick,"aria-label":e.i18n("openFolderNamed",{name:e.title})},e.itemIconEl,e.showTitles&&et("span",null,e.title)))};ar it=oe.h,ot=function(e){var t=e.getItemIcon(),r=qe("uppy-ProviderBrowserItem",{"uppy-ProviderBrowserItem--selected":e.isChecked},{"uppy-ProviderBrowserItem--noPreview":"video"===t}),n=it(Je,{itemIconString:t});switch(e.viewType){case"grid":return it(Ze,nt({},e,{className:r,itemIconEl:n}));case"list":return it(rt,nt({},e,{className:r,itemIconEl:n}));default:throw new Error("There is no such type "+e.viewType)}};function st(){return(st=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var at=oe.h,ut=function(e,t){return{id:e.id,title:e.name,getItemIcon:function(){return e.icon},isChecked:t.isChecked(e),toggleCheckbox:function(r){return t.toggleCheckbox(r,e)},columns:t.columns,showTitles:t.showTitles,viewType:t.viewType,i18n:t.i18n}},lt=function(e){return e.folders.length||e.files.length?at("div",{class:"uppy-ProviderBrowser-body"},at("ul",{class:"uppy-ProviderBrowser-list",onscroll:e.handleScroll,role:"listbox",tabindex:"-1"},e.folders.map((function(t){return ot(st({},ut(t,e),{type:"folder",isDisabled:!!e.isChecked(t)&&e.isChecked(t).loading,handleFolderClick:function(){return e.handleFolderClick(t)}}))})),e.files.map((function(t){return ot(st({},ut(t,e),{type:"file",isDisabled:!1}))})))):at("div",{class:"uppy-Provider-empty"},e.i18n("noFilesFound"))},ct=oe.h,pt=function(e){return ct("div",{class:"uppy-ProviderBrowser-footer"},ct("button",{class:"uppy-u-reset uppy-c-btn uppy-c-btn-primary",onclick:e.done},e.i18n("selectX",{smart_count:e.selected})),ct("button",{class:"uppy-u-reset uppy-c-btn uppy-c-btn-link",onclick:e.cancel},e.i18n("cancel")))};function dt(){return(dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var ht,ft,yt=oe.h,gt=function(e){var t=e.folders,r=e.files;""!==e.filterInput&&(t=e.filterItems(e.folders),r=e.filterItems(e.files));var n=e.currentSelection.length;return yt("div",{class:qe("uppy-ProviderBrowser","uppy-ProviderBrowser-viewType--"+e.viewType)},yt("div",{class:"uppy-ProviderBrowser-header"},yt("div",{class:qe("uppy-ProviderBrowser-headerBar",!e.showBreadcrumbs&&"uppy-ProviderBrowser-headerBar--simple")},e.showBreadcrumbs&&function(e){return He("div",{class:"uppy-Provider-breadcrumbs"},He("div",{class:"uppy-Provider-breadcrumbsIcon"},e.breadcrumbsIcon),e.directories.map((function(t,r){return He(Ve,{key:t.id,getFolder:function(){return e.getFolder(t.id)},title:0===r?e.title:t.title,isLast:r+1===e.directories.length})})))}({getFolder:e.getFolder,directories:e.directories,breadcrumbsIcon:e.pluginIcon&&e.pluginIcon(),title:e.title}),yt("span",{class:"uppy-ProviderBrowser-user"},e.username),yt("button",{type:"button",onclick:e.logout,class:"uppy-u-reset uppy-ProviderBrowser-userLogout"},e.i18n("logOut")))),e.showFilter&&yt(Xe,e),yt(lt,{columns:[{name:"Name",key:"title"}],folders:t,files:r,activeRow:e.isActiveRow,sortByTitle:e.sortByTitle,sortByDate:e.sortByDate,isChecked:e.isChecked,handleFolderClick:e.getNextFolder,toggleCheckbox:e.toggleCheckbox,handleScroll:e.handleScroll,title:e.title,showTitles:e.showTitles,i18n:e.i18n,viewType:e.viewType}),n>0&&yt(pt,dt({selected:n},e)))},vt=oe.h,mt=function(e){return vt("div",{class:"uppy-Provider-loading"},vt("span",null,e.i18n("loading")))},bt=function(e){if(!e)return!1;var t=e.split("/")[1];return!!/^(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(t)};function wt(){return(wt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var _t,St=oe.h,kt=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.componentWillUnmount=function(){this.props.onUnmount()},i.render=n}(oe.Component),Pt=(ft=ht=function(){function e(e,t){this.plugin=e,this.provider=t.provider,this.opts=wt({},{viewType:"list",showTitles:!0,showFilter:!0,showBreadcrumbs:!0},t),this.addFile=this.addFile.bind(this),this.filterItems=this.filterItems.bind(this),this.filterQuery=this.filterQuery.bind(this),this.toggleSearch=this.toggleSearch.bind(this),this.getFolder=this.getFolder.bind(this),this.getNextFolder=this.getNextFolder.bind(this),this.logout=this.logout.bind(this),this.preFirstRender=this.preFirstRender.bind(this),this.handleAuth=this.handleAuth.bind(this),this.sortByTitle=this.sortByTitle.bind(this),this.sortByDate=this.sortByDate.bind(this),this.isActiveRow=this.isActiveRow.bind(this),this.isChecked=this.isChecked.bind(this),this.toggleCheckbox=this.toggleCheckbox.bind(this),this.handleError=this.handleError.bind(this),this.handleScroll=this.handleScroll.bind(this),this.listAllFiles=this.listAllFiles.bind(this),this.donePicking=this.donePicking.bind(this),this.cancelPicking=this.cancelPicking.bind(this),this.clearSelection=this.clearSelection.bind(this),this.render=this.render.bind(this),this.clearSelection(),this.plugin.setPluginState({authenticated:!1,files:[],folders:[],directories:[],activeRow:-1,filterInput:"",isSearchVisible:!1})}var t=e.prototype;return t.tearDown=function(){},t._updateFilesAndFolders=function(e,t,r){this.nextPagePath=e.nextPagePath,e.items.forEach((),this.plugin.setPluginState({folders:r,files:t})},t.preFirstRender=t.getFolder=function(e,t){var r=this;return this._loaderWrapper(this.provider.list(e),(function(n){var i,o=r.plugin.getPluginState(),s=function(t,r){for(var n=0;n<t.length;n++)if(i=t[n],e===i.id)return n;var i;return-1}(o.directories);i=-1!==s?o.directories.slice(0,s+1):o.directories.concat([{id:e,title:t}]),r.username=r.username?r.username:n.username,r._updateFilesAndFolders(n,[],[]),r.plugin.setPluginState({directories:i})}),this.handleError)},t.getNextFolder=function(e){this.getFolder(e.requestPath,e.name),this.lastCheckbox=void 0},t.addFile=function(e){var t={id:this.providerFileToId(e),source:this.plugin.id,data:e,name:e.name||e.id,type:e.mimeType,isRemote:!0,body:{fileId:e.id},remote:{companionUrl:this.plugin.opts.companionUrl,url:""+this.provider.fileUrl(e.requestPath),body:{fileId:e.id},providerOptions:this.provider.opts}},r=Q(t);r&&bt(r)&&(t.preview=e.thumbnail),this.plugin.uppy.log("Adding remote file");try{return this.plugin.uppy.addFile(t),!0}catch(gc){return gc.isRestriction||this.plugin.uppy.log(gc),!1}},t.removeFile=function(e){var t=this.plugin.getPluginState().currentSelection;this.plugin.setPluginState({currentSelection:t.filter(()})},t.logout=function(){var e=this;this.provider.logout().then((function(t){if(t.ok){if(!t.revoked){var r=e.plugin.uppy.i18n("companionUnauthorizeHint",{provider:e.plugin.title,url:t.manual_revoke_url});e.plugin.uppy.info(r,"info",7e3)}e.plugin.setPluginState({authenticated:!1,files:[],folders:[],directories:[]})}})).catch(this.handleError)},t.filterQuery=function(e){var t=this.plugin.getPluginState();this.plugin.setPluginState(wt({},t,{filterInput:e?e.target.value:""}))},t.toggleSearch=function(e){var t=this.plugin.getPluginState();this.plugin.setPluginState({isSearchVisible:!t.isSearchVisible,filterInput:""})},t.filterItems=function(e){var t=this.plugin.getPluginState();return t.filterInput&&""!==t.filterInput?e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.filterInput.toLowerCase())})):e},t.sortByTitle=function(){var e=wt({},this.plugin.getPluginState()),t=e.files,r=e.folders,n=e.sorting,i=t.sort((function(e,t){return"titleDescending"===n?t.name.localeCompare(e.name):e.name.localeCompare(t.name)})),o=r.sort((function(e,t){return"titleDescending"===n?t.name.localeCompare(e.name):e.name.localeCompare(t.name)}));this.plugin.setPluginState(wt({},e,{files:i,folders:o,sorting:"titleDescending"===n?"titleAscending":"titleDescending"}))},t.sortByDate=function(){var e=wt({},this.plugin.getPluginState()),t=e.files,r=e.folders,n=e.sorting,i=t.sort((function(e,t){var r=new Date(e.modifiedDate),i=new Date(t.modifiedDate);return"dateDescending"===n?r>i?-1:r<i?1:0:r>i?1:r<i?-1:0})),o=r.sort((function(e,t){var r=new Date(e.modifiedDate),i=new Date(t.modifiedDate);return"dateDescending"===n?r>i?-1:r<i?1:0:r>i?1:r<i?-1:0}));this.plugin.setPluginState(wt({},e,{files:i,folders:o,sorting:"dateDescending"===n?"dateAscending":"dateDescending"}))},t.sortBySize=function(){var e=wt({},this.plugin.getPluginState()),t=e.files,r=e.sorting;if(t.length&&this.plugin.getItemData(t[0]).size){var n=t.sort((function(e,t){var n=e.size,i=t.size;return"sizeDescending"===r?n>i?-1:n<i?1:0:n>i?1:n<i?-1:0}));this.plugin.setPluginState(wt({},e,{files:n,sorting:"sizeDescending"===r?"sizeAscending":"sizeDescending"}))}},t.isActiveRow=function(e){return this.plugin.getPluginState().activeRow===this.plugin.getItemId(e)},t.isChecked=function(e){return this.plugin.getPluginState().currentSelection.some((function(t){return t.id===e.id}))},t.addFolder=function(e){var t=this,r=this.providerFileToId(e),n=wt({},this.plugin.getPluginState().selectedFolders);if(!(r in n)||!n[r].loading)return n[r]={loading:!0,files:[]},this.plugin.setPluginState({selectedFolders:wt({},n)}),this.listAllFiles(e.requestPath).then((function(i){var o=0;i.forEach(();var s,a=i.map(t.providerFileToId);n[r]={loading:!1,files:a},t.plugin.setPluginState({selectedFolders:n}),s=i.length?t.plugin.uppy.i18n("folderAdded",{smart_count:o,folder:e.name}):t.plugin.uppy.i18n("emptyFolderAdded"),t.plugin.uppy.info(s)})).catch((function(e){var n=wt({},t.plugin.getPluginState().selectedFolders);delete n[r],t.plugin.setPluginState({selectedFolders:n}),t.handleError(e)}))},t.toggleCheckbox=function(e,t){e.stopPropagation(),e.preventDefault(),e.currentTarget.focus();var r=this.plugin.getPluginState(),n=r.folders,i=r.files,o=this.filterItems(n.concat(i));if(this.lastCheckbox&&e.shiftKey){var s,a=o.indexOf(this.lastCheckbox),u=o.indexOf(t);return s=a<u?o.slice(a,u+1):o.slice(u,a+1),void this.plugin.setPluginState({currentSelection:s})}this.lastCheckbox=t;var l=this.plugin.getPluginState().currentSelection;this.isChecked(t)?this.plugin.setPluginState({currentSelection:l.filter((function(e){return e.id!==t.id}))}):this.plugin.setPluginState({currentSelection:l.concat([t])})},t.providerFileToId=function(e){return ee({data:e,name:e.name||e.id,type:e.mimeType})},t.handleAuth=function(){var t=this,r=btoa(JSON.stringify({origin:"origin"in location?location.origin:location.protocol+"//"+location.hostname+(location.port?":"+location.port:"")})),n=encodeURIComponent("@uppy/provider-views="+e.VERSION),i=this.provider.authUrl()+"?state="+r+"&uppyVersions="+n,o=window.open(i,"_blank");window.addEventListener("message",(function e(r){if(t._isOriginAllowed(r.origin,t.plugin.opts.companionAllowedHosts)&&r.source===o){var n="string"==typeof r.data?JSON.parse(r.data):r.data;n.token?(o.close(),window.removeEventListener("message",e),t.provider.setAuthToken(n.token),t.preFirstRender()):t.plugin.uppy.log("did not receive token from auth window")}else t.plugin.uppy.log("rejecting event from "+r.origin+" vs allowed pattern "+t.plugin.opts.companionAllowedHosts)}))},t._isOriginAllowed=function(e,t){var r=function(e){return"string"==typeof e?new RegExp("^"+e+"$"):e instanceof RegExp?e:void 0};return(Array.isArray(t)?t.map(r):[r(t)]).filter(().some(()},t.handleError=function(e){var t=this.plugin.uppy;if(t.log(e.toString()),!e.isAuthError){var r=t.i18n("companionError");t.info({message:r,details:e.toString()},"error",5e3)}},t.handleScroll=function(e){var t=this,r=e.target.scrollHeight-(e.target.scrollTop+e.target.offsetHeight),n=this.nextPagePath||null;r<50&&n&&!this._isHandlingScroll&&(this.provider.list(n).then((function(e){var r=t.plugin.getPluginState(),n=r.files,i=r.folders;t._updateFilesAndFolders(e,n,i)})).catch(this.handleError).then((),this._isHandlingScroll=!0)},t.listAllFiles=function(e,t){var r=this;return void 0===t&&(t=null),t=t||[],new Promise((function(n,i){r.provider.list(e).then((function(e){e.items.forEach(();var o=e.nextPagePath||null;return o?r.listAllFiles(o,t).then((function(e){return n(e)})).catch((function(e){return i(e)})):n(t)})).catch((function(e){return i(e)}))}))},t.donePicking=function(){var e=this,t=this.plugin.getPluginState().currentSelection.map(();this._loaderWrapper(Promise.all(t),(function(){e.clearSelection()}),(function(){}))},t.cancelPicking=function(){this.clearSelection();var e=this.plugin.uppy.getPlugin("Dashboard");e&&e.hideAllPanels()},t.clearSelection=function(){this.plugin.setPluginState({currentSelection:[]})},t._loaderWrapper=function(e,t,r){var n=this;e.then((function(e){n.plugin.setPluginState({loading:!1}),t(e)})).catch((function(e){n.plugin.setPluginState({loading:!1}),r(e)})),this.plugin.setPluginState({loading:!0})},t.render=function(e,t){void 0===t&&(t={});var r=this.plugin.getPluginState(),n=r.authenticated;if(r.didFirstRender||this.preFirstRender(),this.plugin.getPluginState().loading)return St(kt,{onUnmount:this.clearSelection},St(mt,{i18n:this.plugin.uppy.i18n}));if(!n)return St(kt,{onUnmount:this.clearSelection},St(ze,{pluginName:this.plugin.title,pluginIcon:this.plugin.icon,handleAuth:this.handleAuth,i18n:this.plugin.uppy.i18n,i18nArray:this.plugin.uppy.i18nArray}));var i=wt({},this.opts,t),o=wt({},this.plugin.getPluginState(),{username:this.username,getNextFolder:this.getNextFolder,getFolder:this.getFolder,filterItems:this.filterItems,filterQuery:this.filterQuery,toggleSearch:this.toggleSearch,sortByTitle:this.sortByTitle,sortByDate:this.sortByDate,logout:this.logout,isActiveRow:this.isActiveRow,isChecked:this.isChecked,toggleCheckbox:this.toggleCheckbox,handleScroll:this.handleScroll,listAllFiles:this.listAllFiles,done:this.donePicking,cancel:this.cancelPicking,title:this.plugin.title,viewType:i.viewType,showTitles:i.showTitles,showFilter:i.showFilter,showBreadcrumbs:i.showBreadcrumbs,pluginIcon:this.plugin.icon,i18n:this.plugin.uppy.i18n});return St(kt,{onUnmount:this.clearSelection},St(gt,o))},e}(),ht.VERSION="1.7.6",ft);function Ct(){return(Ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var At=function(){function e(e){var t;this._store=e.store,this._id=e.id||I(),this._selector=e.selector||(t=this._id,function(e){return e.uppy[t]}),this.setState({})}var t=e.prototype;return t.setState=function(e){this._store.dispatch({type:"uppy/STATE_UPDATE",id:this._id,payload:e})},t.getState=t.subscribe=function(e){var t=this,r=this.getState();return this._store.subscribe((function(){var n=t.getState();if(r!==n){var i=function(e,t){var r=Object.keys(t),n={};return r.forEach((),n}(r,n);e(r,n,i),r=n}}))},e}();At.VERSION="1.2.4",(_t=function(e){return new At(e)}).STATE_UPDATE="uppy/STATE_UPDATE",_t.reducer=function(e,t){if(void 0===e&&(e={}),"uppy/STATE_UPDATE"===t.type){var r,n=Ct({},e[t.id],t.payload);return Ct({},e,((r={})[t.id]=n,r))}return e},_t.middleware=function(){return function(){return };var Ft=oe.h,Et=function(e){var t={color:"#838999",icon:Ft("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"25",height:"25",viewBox:"0 0 25 25"},Ft("g",{fill:"#A7AFB7","fill-rule":"nonzero"},Ft("path",{d:"M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"}),Ft("path",{d:"M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"})))};if(!e)return t;var r=e.split("/")[0],n=e.split("/")[1];return"text"===r?{color:"#5a5e69",icon:Ft("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"25",height:"25",viewBox:"0 0 25 25"},Ft("path",{d:"M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",fill:"#5A5E69","fill-rule":"nonzero"}))}:"image"===r?{color:"#686de0",icon:Ft("svg",{"aria-hidden":"true",focusable:"false",width:"25",height:"25",viewBox:"0 0 25 25"},Ft("g",{fill:"#686DE0","fill-rule":"evenodd"},Ft("path",{d:"M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z","fill-rule":"nonzero"}),Ft("path",{d:"M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z","fill-rule":"nonzero"}),Ft("circle",{cx:"7.5",cy:"9.5",r:"1.5"})))}:"audio"===r?{color:"#068dbb",icon:Ft("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"25",height:"25",viewBox:"0 0 25 25"},Ft("path",{d:"M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",fill:"#049BCF","fill-rule":"nonzero"}))}:"video"===r?{color:"#19af67",icon:Ft("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"25",height:"25",viewBox:"0 0 25 25"},Ft("path",{d:"M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",fill:"#19AF67","fill-rule":"nonzero"}))}:"application"===r&&"pdf"===n?{color:"#e25149",icon:Ft("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"25",height:"25",viewBox:"0 0 25 25"},Ft("path",{d:"M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",fill:"#E2514A","fill-rule":"nonzero"}))}:"application"===r&&-1!==["zip","x-7z-compressed","x-rar-compressed","x-gtar","x-apple-diskimage","x-diskcopy"].indexOf(n)?{color:"#00C469",icon:Ft("svg",{"aria-hidden":"true",focusable:"false",width:"25",height:"25",viewBox:"0 0 25 25"},Ft("path",{d:"M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",fill:"#00C469","fill-rule":"nonzero"}))}:t},Ot=oe.h,Ut=function(e){var t=e.file;if(t.preview)return Ot("img",{class:"uppy-Dashboard-Item-previewImg",alt:t.name,src:t.preview});var r=Et(t.type),n=r.color,i=r.icon;return Ot("div",{class:"uppy-Dashboard-Item-previewIconWrap"},Ot("span",{class:"uppy-Dashboard-Item-previewIcon",style:{color:n}},i),Ot("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-Dashboard-Item-previewIconBg",width:"58",height:"76",viewBox:"0 0 58 76"},Ot("rect",{fill:"#FFF",width:"58",height:"76",rx:"3","fill-rule":"evenodd"})))},Rt=oe.h,Tt=function(e){return Rt("div",{class:"uppy-Dashboard-Item-previewInnerWrap",style:{backgroundColor:Et(e.file.type).color}},e.showLinkToFileUploadResult&&e.file.uploadURL&&Rt("a",{class:"uppy-Dashboard-Item-previewLink",href:e.file.uploadURL,rel:"noreferrer noopener",target:"_blank","aria-label":e.file.meta.name}),Rt(Ut,{file:e.file}))},xt=oe.h;function Dt(e){return e.isUploaded?e.i18n("uploadComplete"):e.error?e.i18n("retryUpload"):e.resumableUploads?e.file.isPaused?e.i18n("resumeUpload"):e.i18n("pauseUpload"):e.individualCancellation?e.i18n("cancelUpload"):""}function Bt(e){return xt("div",{class:"uppy-Dashboard-Item-progress"},xt("button",{class:"uppy-u-reset uppy-Dashboard-Item-progressIndicator",type:"button","aria-label":Dt(e),title:Dt(e),onclick:function(){return function(e){e.isUploaded||(!e.error||e.hideRetryButton?e.resumableUploads&&!e.hidePauseResumeButton?e.pauseUpload(e.file.id):e.individualCancellation&&!e.hideCancelButton&&e.cancelUpload(e.file.id):e.retryUpload(e.file.id))}(e)}},e.children))}function It(e){var t=e.children;return xt("svg",{"aria-hidden":"true",focusable:"false",width:"70",height:"70",viewBox:"0 0 36 36",class:"uppy-c-icon uppy-Dashboard-Item-progressIcon--circle"},t)}function jt(e){var t=e.progress,r=2*Math.PI*15;return xt("g",null,xt("circle",{class:"uppy-Dashboard-Item-progressIcon--bg",r:"15",cx:"18",cy:"18","stroke-width":"2",fill:"none"}),xt("circle",{class:"uppy-Dashboard-Item-progressIcon--progress",r:"15",cx:"18",cy:"18",transform:"rotate(-90, 18, 18)","stroke-width":"2",fill:"none","stroke-dasharray":r,"stroke-dashoffset":r-r/100*t}))}var Mt=function(e){return e.file.progress.uploadStarted?e.isUploaded?xt("div",{class:"uppy-Dashboard-Item-progress"},xt("div",{class:"uppy-Dashboard-Item-progressIndicator"},xt(It,null,xt("circle",{r:"15",cx:"18",cy:"18",fill:"#1bb240"}),xt("polygon",{class:"uppy-Dashboard-Item-progressIcon--check",transform:"translate(2, 3)",points:"14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"})))):e.error&&!e.hideRetryButton?xt(Bt,e,xt("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",width:"28",height:"31",viewBox:"0 0 16 19"},xt("path",{d:"M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"}),xt("path",{d:"M7.9 3H10v2H7.9z"}),xt("path",{d:"M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"}),xt("path",{d:"M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"}))):e.resumableUploads&&!e.hidePauseResumeButton?xt(Bt,e,xt(It,null,xt(jt,{progress:e.file.progress.percentage}),e.file.isPaused?xt("polygon",{class:"uppy-Dashboard-Item-progressIcon--play",transform:"translate(3, 3)",points:"12 20 12 10 20 15"}):xt("g",{class:"uppy-Dashboard-Item-progressIcon--pause",transform:"translate(14.5, 13)"},xt("rect",{x:"0",y:"0",width:"2",height:"10",rx:"0"}),xt("rect",{x:"5",y:"0",width:"2",height:"10",rx:"0"})))):e.resumableUploads||!e.individualCancellation||e.hideCancelButton?xt("div",{class:"uppy-Dashboard-Item-progress"},xt("div",{class:"uppy-Dashboard-Item-progressIndicator"},xt(It,null,xt(jt,{progress:e.file.progress.percentage})))):xt(Bt,e,xt(It,null,xt(jt,{progress:e.file.progress.percentage}),xt("polygon",{class:"cancel",transform:"translate(2, 2)",points:"19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"}))):null},Lt=oe.h,Nt=function(e){var t=e.file,r=e.onClick;return t.error?Lt("span",{class:"uppy-Dashboard-Item-errorDetails","aria-label":t.error,"data-microtip-position":"bottom","data-microtip-size":"medium",role:"tooltip",onclick:r},"?"):null},zt=function(e){return Lt("div",{class:"uppy-Dashboard-Item-fileInfo","data-uppy-file-source":e.file.source},function(e){var t;return t=e.containerWidth<=352?35:e.containerWidth<=576?60:30,Lt("div",{class:"uppy-Dashboard-Item-name",title:e.file.meta.name},function(e,t){if(e.length<=t)return e;if(t<="...".length)return e.substr(0,t);var r=t-"...".length,n=Math.ceil(r/2),i=Math.floor(r/2);return e.substr(0,n)+"..."+e.substr(e.length-i)}(e.file.meta.name,t))}(e),Lt("div",{class:"uppy-Dashboard-Item-status"},function(e){return e.file.data.size&&Lt("div",{class:"uppy-Dashboard-Item-statusSize"},V(e.file.data.size))}(e),function(e){return e.file.source&&e.file.source!==e.id&&Lt("div",{class:"uppy-Dashboard-Item-sourceIcon"},e.acquirers.map((function(t){if(t.id===e.file.source)return function(e,t){return Lt("span",{title:t.i18n("fileSource",{name:e.name})},e.icon())}(t,e)})))}(e),Lt(Nt,{file:e.file,onClick:function(){alert(e.file.error)}})))},qt=oe.h;function Ht(e){var t=e.file,r=e.uploadInProgressOrComplete,n=e.metaFields,i=e.i18n,o=e.onClick;return!r&&n&&n.length>0?qt("button",{class:"uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--edit",type:"button","aria-label":i("editFile")+" "+t.meta.name,title:i("editFile"),onclick:function(){return o()}},qt("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"14",height:"14",viewBox:"0 0 14 14"},qt("g",{"fill-rule":"evenodd"},qt("path",{d:"M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z","fill-rule":"nonzero"}),qt("rect",{x:"1",y:"12.293",width:"11",height:"1",rx:".5"}),qt("path",{"fill-rule":"nonzero",d:"M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"})))):null}function Vt(e){var t=e.i18n,r=e.onClick;return qt("button",{class:"uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--remove",type:"button","aria-label":t("removeFile"),title:t("removeFile"),onclick:function(){return r()}},qt("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"18",height:"18",viewBox:"0 0 18 18"},qt("path",{d:"M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"}),qt("path",{fill:"#FFF",d:"M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"})))}var Wt=function(e,t){var r,n;(r=t.file.uploadURL,n=t.i18n("copyLinkToClipboardFallback"),n=n||"Copy the URL below",new Promise((function(e){var t=document.createElement("textarea");t.setAttribute("style",{position:"fixed",top:0,left:0,width:"2em",height:"2em",padding:0,border:"none",outline:"none",boxShadow:"none",background:"transparent"}),t.value=r,document.body.appendChild(t),t.select();var i=function(){document.body.removeChild(t),window.prompt(n,r),e()};try{return document.execCommand("copy")?(document.body.removeChild(t),e()):i()}catch(gc){return document.body.removeChild(t),i()}}))).then((function(){t.log("Link copied to clipboard."),t.info(t.i18n("copyLinkToClipboardSuccess"),"info",3e3)})).catch(t.log).then(()};function Xt(e){return qt("button",{class:"uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--copyLink",type:"button","aria-label":e.i18n("copyLink"),title:e.i18n("copyLink"),onclick:function(t){return Wt(t,e)}},qt("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"14",height:"14",viewBox:"0 0 14 12"},qt("path",{d:"M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"})))}var Gt=function(e){var t=e.file,r=e.uploadInProgressOrComplete,n=e.metaFields,i=e.showLinkToFileUploadResult,o=e.showRemoveButton,s=e.i18n,a=e.removeFile,u=e.toggleFileCard,l=e.log,c=e.info;return qt("div",{className:"uppy-Dashboard-Item-actionWrapper"},qt(Ht,{i18n:s,file:t,uploadInProgressOrComplete:r,metaFields:n,onClick:),i&&t.uploadURL?qt(Xt,{file:t,i18n:s,info:c,log:l}):null,o?qt(Vt,{i18n:s,info:e.info,log:e.log,onClick:):null)},$t=oe.h,Kt=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.shouldComponentUpdate=function(e){return!function(e,t){if(e===t)return!0;for(var r in e)if(!(r in t))return!1;for(var r in t)if(e[r]!==t[r])return!1;return!0}(this.props,e)},i.componentDidMount=function(){var e=this.props.file;e.preview||this.props.handleRequestThumbnail(e)},i.componentWillUnmount=function(){var e=this.props.file;e.preview||this.props.handleCancelThumbnail(e)},i.render=function(){var e=this.props.file,t=e.progress.preprocess||e.progress.postprocess,r=e.progress.uploadComplete&&!t&&!e.error,n=e.progress.uploadStarted||t,i=e.progress.uploadStarted&&!e.progress.uploadComplete||t,o=e.error||!1,s=(this.props.individualCancellation||!i)&&!r;r&&this.props.showRemoveButtonAfterComplete&&(s=!0);var a=qe({"uppy-Dashboard-Item":!0,"is-inprogress":i,"is-processing":t,"is-complete":r,"is-error":!!o,"is-resumable":this.props.resumableUploads,"is-noIndividualCancellation":!this.props.individualCancellation});return $t("div",{class:a,id:"uppy_"+e.id,role:this.props.role},$t("div",{class:"uppy-Dashboard-Item-preview"},$t(Tt,{file:e,showLinkToFileUploadResult:this.props.showLinkToFileUploadResult}),$t(Mt,{file:e,error:o,isUploaded:r,hideRetryButton:this.props.hideRetryButton,hideCancelButton:this.props.hideCancelButton,hidePauseResumeButton:this.props.hidePauseResumeButton,showRemoveButtonAfterComplete:this.props.showRemoveButtonAfterComplete,resumableUploads:this.props.resumableUploads,individualCancellation:this.props.individualCancellation,pauseUpload:this.props.pauseUpload,cancelUpload:this.props.cancelUpload,retryUpload:this.props.retryUpload,i18n:this.props.i18n})),$t("div",{class:"uppy-Dashboard-Item-fileInfoAndButtons"},$t(zt,{file:e,id:this.props.id,acquirers:this.props.acquirers,containerWidth:this.props.containerWidth,i18n:this.props.i18n}),$t(Gt,{file:e,metaFields:this.props.metaFields,showLinkToFileUploadResult:this.props.showLinkToFileUploadResult,showRemoveButton:s,uploadInProgressOrComplete:n,removeFile:this.props.removeFile,toggleFileCard:this.props.toggleFileCard,i18n:this.props.i18n,log:this.props.log,info:this.props.info})))},n}(oe.Component);function Yt(){return(Yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Jt=oe.h,Qt=oe.Component,Zt={position:"relative",width:"100%",minHeight:"100%"},er={position:"absolute",top:0,left:0,width:"100%",overflow:"visible"},tr=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).handleResize=function(){r.resize()},r.handleScroll=function(){r.setState({offset:r.base.scrollTop}),r.props.sync&&r.forceUpdate()},r.focusElement=null,r.state={offset:0,height:0},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.resize=i.componentWillUpdate=function(){this.base.contains(document.activeElement)&&(this.focusElement=document.activeElement)},i.componentDidUpdate=function(){this.focusElement&&this.focusElement.parentNode&&document.activeElement!==this.focusElement&&this.focusElement.focus(),this.focusElement=null,this.resize()},i.componentDidMount=i.componentWillUnmount=i.render=function(e){var t=e.data,r=e.rowHeight,n=e.renderRow,i=e.overscanCount,o=void 0===i?10:i,s=(e.sync,e,["data","rowHeight","renderRow","overscanCount","sync"])),a=this.state,u=a.offset,l=a.height,c=Math.floor(u/r),p=Math.floor(l/r);o&&(c=Math.max(0,c-c%o),p+=o);var d=c+p+4,h=t.slice(c,d),f=Yt({},Zt,{height:t.length*r}),y=Yt({},er,{top:c*r});return Jt("div",Yt({onScroll:this.handleScroll},s),Jt("div",{role:"presentation",style:f},Jt("div",{role:"presentation",style:y},h.map(n))))},n}(Qt);function rr(){return(rr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var nr=oe.h,ir=function(e){var t,r,n,i,o=0===e.totalFileCount,s=qe("uppy-Dashboard-files",{"uppy-Dashboard-files--noFiles":o}),a=1===e.itemsPerRow?71:200,u={id:e.id,error:e.error,i18n:e.i18n,log:e.log,info:e.info,acquirers:e.acquirers,resumableUploads:e.resumableUploads,individualCancellation:e.individualCancellation,hideRetryButton:e.hideRetryButton,hidePauseResumeButton:e.hidePauseResumeButton,hideCancelButton:e.hideCancelButton,showLinkToFileUploadResult:e.showLinkToFileUploadResult,showRemoveButtonAfterComplete:e.showRemoveButtonAfterComplete,isWide:e.isWide,metaFields:e.metaFields,retryUpload:e.retryUpload,pauseUpload:e.pauseUpload,cancelUpload:e.cancelUpload,toggleFileCard:e.toggleFileCard,removeFile:e.removeFile,handleRequestThumbnail:e.handleRequestThumbnail,handleCancelThumbnail:e.handleCancelThumbnail},l=(t=Object.keys(e.files),r=e.itemsPerRow,n=[],i=[],t.forEach((function(e,t){i.length<r?i.push(e):(n.push(i),i=[e])})),i.length&&n.push(i),n);return nr(tr,{class:s,role:"list",data:l,renderRow:function(t){return nr("div",{role:"presentation",key:t[0]},t.map((function(t){return nr(Kt,rr({key:t},u,{role:"listitem",file:e.files[t]}))})))},rowHeight:a})},or=oe.h,sr=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).triggerFileInputClick=function(){t.fileInput.click()},t.triggerFolderInputClick=function(){t.folderInput.click()},t.onFileInputChange=t.renderHiddenInput=function(e,r){return or("input",{class:"uppy-Dashboard-input",hidden:!0,"aria-hidden":"true",tabindex:-1,webkitdirectory:e,type:"file",name:"files[]",multiple:1!==t.props.maxNumberOfFiles,onchange:t.onFileInputChange,accept:t.props.allowedFileTypes,ref:r})},t.renderMyDeviceAcquirer=function(){return or("div",{class:"uppy-DashboardTab",role:"presentation","data-uppy-acquirer-id":"MyDevice"},or("button",{type:"button",class:"uppy-DashboardTab-btn",role:"tab",tabindex:0,"data-uppy-super-focusable":!0,onclick:t.triggerFileInputClick},or("svg",{"aria-hidden":"true",focusable:"false",width:"32",height:"32",viewBox:"0 0 32 32"},or("g",{fill:"none","fill-rule":"evenodd"},or("rect",{width:"32",height:"32",rx:"16",fill:"#2275D7"}),or("path",{d:"M21.973 21.152H9.863l-1.108-5.087h14.464l-1.246 5.087zM9.935 11.37h3.958l.886 1.444a.673.673 0 0 0 .585.316h6.506v1.37H9.935v-3.13zm14.898 3.44a.793.793 0 0 0-.616-.31h-.978v-2.126c0-.379-.275-.613-.653-.613H15.75l-.886-1.445a.673.673 0 0 0-.585-.316H9.232c-.378 0-.667.209-.667.587V14.5h-.782a.793.793 0 0 0-.61.303.795.795 0 0 0-.155.663l1.45 6.633c.078.36.396.618.764.618h13.354c.36 0 .674-.246.76-.595l1.631-6.636a.795.795 0 0 0-.144-.675z",fill:"#FFF"}))),or("div",{class:"uppy-DashboardTab-name"},t.props.i18n("myDevice"))))},t.renderBrowseButton=function(e,r){var n=t.props.acquirers.length;return or("button",{type:"button",class:"uppy-u-reset uppy-Dashboard-browse",onclick:r,"data-uppy-super-focusable":0===n},e)},t.renderDropPasteBrowseTagline=function(){var e=t.props.acquirers.length,r=t.props.fileManagerSelectionType,n=r.charAt(0).toUpperCase()+r.slice(1),i="browse",o="browse",s="browse";if("files"===r)try{i=t.props.i18n("browse"),o=t.props.i18n("browse"),s=t.props.i18n("browse")}catch(p){}try{o=t.props.i18n("browseFiles"),s=t.props.i18n("browseFolders")}catch(d){}var a,u=t.renderBrowseButton(i,t.triggerFileInputClick),l=t.renderBrowseButton(o,t.triggerFileInputClick),c=t.renderBrowseButton(s,t.triggerFolderInputClick);if(a=e>0?t.props.i18nArray("dropPasteImport"+n,{browseFiles:l,browseFolders:c,browse:u}):t.props.i18nArray("dropPaste"+n,{browseFiles:l,browseFolders:c,browse:u}),"files"===r)try{a=e>0?t.props.i18nArray("dropPasteImport",{browse:u}):t.props.i18nArray("dropPaste",{browse:u})}catch(h){}return or("div",{class:"uppy-Dashboard-AddFiles-title"},a)},t.renderAcquirer=function(e){return or("div",{class:"uppy-DashboardTab",role:"presentation","data-uppy-acquirer-id":e.id},or("button",{type:"button",class:"uppy-DashboardTab-btn",role:"tab",tabindex:0,"aria-controls":"uppy-DashboardContent-panel--"+e.id,"aria-selected":t.props.activePickerPanel.id===e.id,"data-uppy-super-focusable":!0,onclick:,e.icon(),or("div",{class:"uppy-DashboardTab-name"},e.name)))},t.renderAcquirers=function(e){var r=[].concat(e),n=r.splice(e.length-2,e.length);return or("div",{class:"uppy-Dashboard-AddFiles-list",role:"tablist"},t.renderMyDeviceAcquirer(),r.map((function(e){return t.renderAcquirer(e)})),or("span",{role:"presentation",style:"white-space: nowrap;"},n.map((function(e){return t.renderAcquirer(e)}))))},t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.renderPoweredByUppy=function(){var e=or("span",null,or("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon uppy-Dashboard-poweredByIcon",width:"11",height:"11",viewBox:"0 0 11 11"},or("path",{d:"M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z","fill-rule":"evenodd"})),or("span",{class:"uppy-Dashboard-poweredByUppy"},"Uppy")),t=this.props.i18nArray("poweredBy2",{backwardsCompat:this.props.i18n("poweredBy"),uppy:e});return or("a",{tabindex:"-1",href:"https://uppy.io",rel:"noreferrer noopener",target:"_blank",class:"uppy-Dashboard-poweredBy"},t)},i.render=function(){var e=this;return or("div",{class:"uppy-Dashboard-AddFiles"},this.renderHiddenInput(!1,(function(t){e.fileInput=t})),this.renderHiddenInput(!0,(function(t){e.folderInput=t})),this.renderDropPasteBrowseTagline(),this.props.acquirers.length>0&&this.renderAcquirers(this.props.acquirers),or("div",{class:"uppy-Dashboard-AddFiles-info"},this.props.note&&or("div",{class:"uppy-Dashboard-note"},this.props.note),this.props.proudlyDisplayPoweredByUppy&&this.renderPoweredByUppy(this.props)))},n}(oe.Component),ar=oe.h,ur=function(e){return ar("div",{class:qe("uppy-Dashboard-AddFilesPanel",e.className),"data-uppy-panelType":"AddFiles","aria-hidden":e.showAddFilesPanel},ar("div",{class:"uppy-DashboardContent-bar"},ar("div",{class:"uppy-DashboardContent-title",role:"heading","aria-level":"1"},e.i18n("addingMoreFiles")),ar("button",{class:"uppy-DashboardContent-back",type:"button",onclick:,e.i18n("back"))),ar(sr,e))},lr=function(e){var t=e.target.tagName;"INPUT"!==t&&"TEXTAREA"!==t?(e.preventDefault(),e.stopPropagation()):e.stopPropagation()},cr=oe.h,pr=function(e){return cr("div",{class:qe("uppy-DashboardContent-panel",e.className),role:"tabpanel","data-uppy-panelType":"PickerPanel",id:"uppy-DashboardContent-panel--"+e.activePickerPanel.id,onDragOver:lr,onDragLeave:lr,onDrop:lr,onPaste:lr},cr("div",{class:"uppy-DashboardContent-bar"},cr("div",{class:"uppy-DashboardContent-title",role:"heading","aria-level":"1"},e.i18n("importFrom",{name:e.activePickerPanel.name})),cr("button",{class:"uppy-DashboardContent-back",type:"button",onclick:e.hideAllPanels},e.i18n("done"))),cr("div",{class:"uppy-DashboardContent-panelBody"},e.getPlugin(e.activePickerPanel.id).render(e.state)))},dr=oe.h,hr=function(e){var t=this.props.files[this.props.fileCardFor];return dr("div",{class:qe("uppy-DashboardContent-panel",e.className),role:"tabpanel","data-uppy-panelType":"FileEditor",id:"uppy-DashboardContent-panel--editor"},dr("div",{class:"uppy-DashboardContent-bar"},dr("div",{class:"uppy-DashboardContent-title",role:"heading","aria-level":"1"},e.i18nArray("editing",{file:dr("span",{class:"uppy-DashboardContent-titleFile"},t.meta?t.meta.name:t.name)})),dr("button",{class:"uppy-DashboardContent-back",type:"button",onclick:e.hideAllPanels},e.i18n("done"))),dr("div",{class:"uppy-DashboardContent-panelBody"},e.editors.map((function(t){return e.getPlugin(t.id).render(e.state)}))))},fr=oe.h,yr="error",gr="waiting",vr="preprocessing",mr="uploading",br="postprocessing",wr="complete",_r="paused";function Sr(e){switch(function(e,t,r,n){if(void 0===n&&(n={}),e)return yr;if(t)return wr;if(r)return _r;for(var i=gr,o=Object.keys(n),s=0;s<o.length;s++){var a=n[o[s]].progress;if(a.uploadStarted&&!a.uploadComplete)return mr;a.preprocess&&i!==mr&&(i=vr),a.postprocess&&i!==mr&&i!==vr&&(i=br)}return i}(e.isAllErrored,e.isAllComplete,e.isAllPaused,e.files)){case"uploading":return e.i18n("uploadingXFiles",{smart_count:e.inProgressNotPausedFiles.length});case"preprocessing":case"postprocessing":return e.i18n("processingXFiles",{smart_count:e.processingFiles.length});case"paused":return e.i18n("uploadPaused");case"waiting":return e.i18n("xFilesSelected",{smart_count:e.newFiles.length});case"complete":return e.i18n("uploadComplete")}}var kr=function(e){var t=e.allowNewUpload;return t&&e.maxNumberOfFiles&&(t=e.totalFileCount<e.maxNumberOfFiles),fr("div",{class:"uppy-DashboardContent-bar"},e.isAllComplete||e.hideCancelButton?fr("div",null):fr("button",{class:"uppy-DashboardContent-back",type:"button",onclick:e.cancelAll},e.i18n("cancel")),fr("div",{class:"uppy-DashboardContent-title",role:"heading","aria-level":"1"},fr(Sr,e)),t?fr("button",{class:"uppy-DashboardContent-addMore",type:"button","aria-label":e.i18n("addMoreFiles"),title:e.i18n("addMoreFiles"),onclick:function(){return e.toggleAddFilesPanel(!0)}},fr("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"15",height:"15",viewBox:"0 0 15 15"},fr("path",{d:"M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"})),fr("span",{class:"uppy-DashboardContent-addMoreCaption"},e.i18n("addMore"))):fr("div",null))};function Pr(){return(Pr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Cr=oe.h,Ar=function(e){var t,r;function n(t){var r;(r=e.call(this,t)||this).saveOnEnter=function(e){if(13===e.keyCode){e.stopPropagation(),e.preventDefault();var t=r.props.files[r.props.fileCardFor];r.props.saveFileCard(r.state.formState,t.id)}},r.updateMeta=function(e,t){var n;r.setState({formState:Pr({},r.state.formState,(n={},n[t]=e,n))})},r.handleSave=function(){var e=r.props.fileCardFor;r.props.saveFileCard(r.state.formState,e)},r.handleCancel=function(){r.props.toggleFileCard()},r.renderMetaFields=function(){var e=r.props.metaFields||[],t={text:"uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input"};return e.map((function(e){var n="uppy-Dashboard-FileCard-input-"+e.id;return Cr("fieldset",{key:e.id,class:"uppy-Dashboard-FileCard-fieldset"},Cr("label",{class:"uppy-Dashboard-FileCard-label",for:n},e.name),void 0!==e.render?e.render({value:r.state.formState[e.id],onChange:fieldCSSClasses:t},Cr):Cr("input",{class:t.text,id:n,type:e.type||"text",value:r.state.formState[e.id],placeholder:e.placeholder,onkeyup:r.saveOnEnter,onkeydown:r.saveOnEnter,onkeypress:r.saveOnEnter,oninput:"data-uppy-super-focusable":!0}))}))};var n=r.props.files[r.props.fileCardFor],i=r.props.metaFields||[],o={};return i.forEach((function(e){o[e.id]=n.meta[e.id]||""})),r.state={formState:o},r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this,t=this.props.files[this.props.fileCardFor],r=this.props.canEditFile(t);return Cr("div",{class:qe("uppy-Dashboard-FileCard",this.props.className),"data-uppy-panelType":"FileCard",onDragOver:lr,onDragLeave:lr,onDrop:lr,onPaste:lr},Cr("div",{class:"uppy-DashboardContent-bar"},Cr("div",{class:"uppy-DashboardContent-title",role:"heading","aria-level":"1"},this.props.i18nArray("editing",{file:Cr("span",{class:"uppy-DashboardContent-titleFile"},t.meta?t.meta.name:t.name)})),Cr("button",{class:"uppy-DashboardContent-back",type:"button",title:this.props.i18n("finishEditingFile"),onclick:this.handleSave},this.props.i18n("done"))),Cr("div",{class:"uppy-Dashboard-FileCard-inner"},Cr("div",{class:"uppy-Dashboard-FileCard-preview",style:{backgroundColor:Et(t.type).color}},Cr(Ut,{file:t}),r&&Cr("button",{type:"button",class:"uppy-u-reset uppy-c-btn uppy-Dashboard-FileCard-edit",onClick:,this.props.i18n("editFile"))),Cr("div",{class:"uppy-Dashboard-FileCard-info"},this.renderMetaFields()),Cr("div",{class:"uppy-Dashboard-FileCard-actions"},Cr("button",{class:"uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",type:"button",onclick:this.handleSave},this.props.i18n("saveChanges")),Cr("button",{class:"uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",type:"button",onclick:this.handleCancel},this.props.i18n("cancel")))))},n}(oe.Component),Fr=oe.cloneElement,Er=oe.Component,Or="uppy-transition-slideDownUp",Ur=function(e){var t,r;=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.componentWillUpdate=function(e){var t=this,r=this.state.cachedChildren,n=e.children[0];if(r!==n){var i={cachedChildren:n};n&&!r&&(i.className=Or+"-enter",cancelAnimationFrame(this.animationFrame),clearTimeout(this.leaveTimeout),this.leaveTimeout=void 0,this.animationFrame=requestAnimationFrame((function(){t.base.getBoundingClientRect(),t.setState({className:Or+"-enter "+Or+"-enter-active"}),t.enterTimeout=setTimeout((function(){t.setState({className:""})}),250)}))),r&&!n&&void 0===this.leaveTimeout&&(i.cachedChildren=r,i.className=Or+"-leave",cancelAnimationFrame(this.animationFrame),clearTimeout(this.enterTimeout),this.enterTimeout=void 0,this.animationFrame=requestAnimationFrame((function(){t.setState({className:Or+"-leave "+Or+"-leave-active"}),t.leaveTimeout=setTimeout((,250)}))),this.setState(i)}},i.render=function(){var e=this.state,t=e.cachedChildren,r=e.className;return t?Fr(t,{className:qe(r,t.attributes.className)}):null},n}(Er),Rr=function(){var e=document.createElement("div");return"draggable"in e&&"ondragstart"in e&&"ondrop"in e&&"FormData"in window&&"FileReader"in window};function Tr(){return(Tr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var xr=oe.h,Dr="error",Br="waiting",Ir="preprocessing",jr="uploading",Mr="postprocessing",Lr="complete",Nr=function(e){var t,r=(t=e,{hours:Math.floor(t/3600)%24,minutes:Math.floor(t/60)%60,seconds:Math.floor(t%60)}),n=r.hours?r.hours+"h ":"",i=r.hours?("0"+r.minutes).substr(-2):r.minutes,o=i?i+"m":"",s=i?("0"+r.seconds).substr(-2):r.seconds;return""+n+o+(r.hours?"":i?" "+s+"s":s+"s")};function zr(){return(zr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var qr,Hr,Vr=oe.h,Wr=function(e){var t=qe("uppy-u-reset","uppy-c-btn","uppy-StatusBar-actionBtn","uppy-StatusBar-actionBtn--upload",{"uppy-c-btn-primary":e.uploadState===Br});return Vr("button",{type:"button",class:t,"aria-label":e.i18n("uploadXFiles",{smart_count:e.newFiles}),onclick:e.startUpload,"data-uppy-super-focusable":!0},e.newFiles&&e.isUploadStarted?e.i18n("uploadXNewFiles",{smart_count:e.newFiles}):e.i18n("uploadXFiles",{smart_count:e.newFiles}))},Xr=function(e){return Vr("button",{type:"button",class:"uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry","aria-label":e.i18n("retryUpload"),onclick:e.retryAll,"data-uppy-super-focusable":!0},Vr("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"8",height:"10",viewBox:"0 0 8 10"},Vr("path",{d:"M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"})),e.i18n("retry"))},Gr=function(e){return Vr("button",{type:"button",class:"uppy-u-reset uppy-StatusBar-actionCircleBtn",title:e.i18n("cancel"),"aria-label":e.i18n("cancel"),onclick:e.cancelAll,"data-uppy-super-focusable":!0},Vr("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"16",height:"16",viewBox:"0 0 16 16"},Vr("g",{fill:"none","fill-rule":"evenodd"},Vr("circle",{fill:"#888",cx:"8",cy:"8",r:"8"}),Vr("path",{fill:"#FFF",d:"M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"}))))},$r=function(e){var t=e.isAllPaused,r=(0,e.i18n)(t?"resume":"pause");return Vr("button",{title:r,"aria-label":r,class:"uppy-u-reset uppy-StatusBar-actionCircleBtn",type:"button",onclick:function(){return function(e){if(!e.isAllComplete)return e.resumableUploads?e.isAllPaused?e.resumeAll():e.pauseAll():e.cancelAll()}(e)},"data-uppy-super-focusable":!0},Vr("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"16",height:"16",viewBox:"0 0 16 16"},Vr("g",{fill:"none","fill-rule":"evenodd"},Vr("circle",{fill:"#888",cx:"8",cy:"8",r:"8"}),Vr("path",t?{fill:"#FFF",d:"M6 4.25L11.5 8 6 11.75z"}:{d:"M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z",fill:"#FFF"}))))},Kr=function(){return Vr("svg",{class:"uppy-StatusBar-spinner","aria-hidden":"true",focusable:"false",width:"14",height:"14"},Vr("path",{d:"M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0","fill-rule":"evenodd"}))},Yr=function(e){var t=Math.round(100*e.value);return Vr("div",{class:"uppy-StatusBar-content"},Vr(Kr,null),"determinate"===e.mode?t+"% \xb7 ":"",e.message)},Jr=function(e){return Vr("div",{class:"uppy-StatusBar-statusSecondary"},e.i18n("filesUploadedOfTotal",{complete:e.complete,smart_count:e.numUploads}))},Qr=function(e){var t=qe("uppy-u-reset","uppy-c-btn","uppy-StatusBar-actionBtn","uppy-StatusBar-actionBtn--uploadNewlyAdded");return Vr("div",{class:"uppy-StatusBar-statusSecondary"},Vr("div",{class:"uppy-StatusBar-statusSecondaryHint"},e.i18n("xMoreFilesAdded",{smart_count:e.newFiles})),Vr("button",{type:"button",class:t,"aria-label":e.i18n("uploadXFiles",{smart_count:e.newFiles}),onclick:e.startUpload},e.i18n("upload")))},Zr=q((function(e){var t=e.numUploads>1;return Vr("div",{class:"uppy-StatusBar-statusSecondary"},t&&e.i18n("filesUploadedOfTotal",{complete:e.complete,smart_count:e.numUploads}),Vr("span",{class:"uppy-StatusBar-additionalInfo"},t&&" \xb7 ",e.i18n("dataUploadedOfTotal",{complete:V(e.totalUploadedSize),total:V(e.totalSize)})," \xb7 ",e.i18n("xTimeLeft",{time:Nr(e.totalETA)})))}),500,{leading:!0,trailing:!0}),en=function(e){if(!e.isUploadStarted||e.isAllComplete)return null;var t=e.isAllPaused?e.i18n("paused"):e.i18n("uploading"),r=e.newFiles&&e.isUploadStarted;return Vr("div",{class:"uppy-StatusBar-content","aria-label":t,title:t},e.isAllPaused?null:Vr(Kr,null),Vr("div",{class:"uppy-StatusBar-status"},Vr("div",{class:"uppy-StatusBar-statusPrimary"},e.supportsUploadProgress?t+": "+e.totalProgress+"%":t),e.isAllPaused||r||!e.showProgressDetails?null:e.supportsUploadProgress?Vr(Zr,e):Vr(Jr,e),r?Vr(Qr,e):null))},tn=function(e){e.totalProgress;var t=e.i18n;return Vr("div",{class:"uppy-StatusBar-content",role:"status",title:t("complete")},Vr("div",{class:"uppy-StatusBar-status"},Vr("div",{class:"uppy-StatusBar-statusPrimary"},Vr("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-StatusBar-statusIndicator uppy-c-icon",width:"15",height:"11",viewBox:"0 0 15 11"},Vr("path",{d:"M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"})),t("complete"))))},rn=function(e){var t=e.error,r=(e.retryAll,e.hideRetryButton,e.i18n);return Vr("div",{class:"uppy-StatusBar-content",role:"alert",title:r("uploadFailed")},Vr("div",{class:"uppy-StatusBar-status"},Vr("div",{class:"uppy-StatusBar-statusPrimary"},Vr("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-StatusBar-statusIndicator uppy-c-icon",width:"11",height:"11",viewBox:"0 0 11 11"},Vr("path",{d:"M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"})),r("uploadFailed"))),Vr("span",{class:"uppy-StatusBar-details","aria-label":t,"data-microtip-position":"top-right","data-microtip-size":"medium",role:"tooltip",onclick:function(){var e=r("uploadFailed")+" \n\n "+t;alert(e)}},"?"))};function nn(){return(nn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function on(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var sn,an,un=(Hr=qr=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).startUpload=n.id=n.opts.id||"StatusBar",n.title="StatusBar",n.type="progressindicator",n.defaultLocale={strings:{uploading:"Uploading",upload:"Upload",complete:"Complete",uploadFailed:"Upload failed",paused:"Paused",retry:"Retry",retryUpload:"Retry upload",cancel:"Cancel",pause:"Pause",resume:"Resume",filesUploadedOfTotal:{0:"%{complete} of %{smart_count} file uploaded",1:"%{complete} of %{smart_count} files uploaded"},dataUploadedOfTotal:"%{complete} of %{total}",xTimeLeft:"%{time} left",uploadXFiles:{0:"Upload %{smart_count} file",1:"Upload %{smart_count} files"},uploadXNewFiles:{0:"Upload +%{smart_count} file",1:"Upload +%{smart_count} files"},xMoreFilesAdded:{0:"%{smart_count} more file added",1:"%{smart_count} more files added"}}},n.opts=nn({},{target:"body",hideUploadButton:!1,hideRetryButton:!1,hidePauseResumeButton:!1,hideCancelButton:!1,showProgressDetails:!1,hideAfterFinish:!0},r),n.i18nInit(),n.render=n.render.bind(on(n)),n.install=n.install.bind(on(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.setOptions=function(t){e.prototype.setOptions.call(this,t),this.i18nInit()},i.i18nInit=function(){this.translator=new A([this.defaultLocale,this.uppy.locale,this.opts.locale]),this.i18n=this.translator.translate.bind(this.translator),this.setPluginState()},i.getTotalSpeed=function(e){var t=0;return e.forEach((function(e){t+=function(e){if(!e.bytesUploaded)return 0;var t=new Date-e.uploadStarted;return e.bytesUploaded/(t/1e3)}(e.progress)})),t},i.getTotalETA=function(e){var t=this.getTotalSpeed(e);if(0===t)return 0;var r=e.reduce((function(e,t){return e+((r=t.progress).bytesTotal-r.bytesUploaded);var r}),0);return Math.round(r/t*10)/10},i.getUploadingState=function(e,t,r){if(e)return Dr;if(t)return Lr;for(var n=Br,i=Object.keys(r),o=0;o<i.length;o++){var s=r[i[o]].progress;if(s.uploadStarted&&!s.uploadComplete)return jr;s.preprocess&&n!==jr&&(n=Ir),s.postprocess&&n!==jr&&n!==Ir&&(n=Mr)}return n},i.render=function(e){var t=e.capabilities,r=e.files,n=e.allowNewUpload,i=e.totalProgress,o=e.error,s=Object.keys(r).map((function(e){return r[e]})),a=s.filter((),u=s.filter((function(e){return e.progress.uploadStarted})).filter((function(e){return e.isPaused})),l=s.filter((function(e){return e.progress.uploadComplete})),c=s.filter((function(e){return e.error})),p=s.filter((),d=p.filter((function(e){return!e.isPaused})),h=s.filter((function(e){return e.progress.uploadStarted||e.progress.preprocess||e.progress.postprocess})),f=s.filter((),y=this.getTotalETA(d),g=0,v=0;h.forEach((function(e){g+=e.progress.bytesTotal||0,v+=e.progress.bytesUploaded||0}));var m=h.length>0,b=100===i&&l.length===Object.keys(r).length&&0===f.length,w=o&&c.length===s.length,_=0!==p.length&&u.length===p.length,S=p.length>0,k=t.resumableUploads||!1,P=!1!==t.uploadProgress;return function(e){var t,r,n=e=e||{},i=n.newFiles,o=n.allowNewUpload,s=n.isUploadInProgress,a=n.isAllPaused,u=n.resumableUploads,l=n.error,c=n.hideUploadButton,p=n.hidePauseResumeButton,d=n.hideCancelButton,h=n.hideRetryButton,f=e.uploadState,y=e.totalProgress;if(f===Ir||f===Mr){var g=function(e){var t=[];Object.keys(e).forEach((function(r){var n=e[r].progress;n.preprocess&&t.push(n.preprocess),n.postprocess&&t.push(n.postprocess)}));var r=t[0];return{mode:r.mode,message:r.message,value:t.filter((function(e){return"determinate"===e.mode})).reduce((function(e,t,r,n){return e+t.value/n.length}),0)}}(e.files);"determinate"===(t=g.mode)&&(y=100*g.value),r=Yr(g)}else f===Lr?r=tn(e):f===jr?(e.supportsUploadProgress||(t="indeterminate",y=null),r=en(e)):f===Dr&&(y=void 0,r=rn(e));var v="number"==typeof y?y:100,m=f===Br&&e.hideUploadButton||f===Br&&!e.newFiles>0||f===Lr&&e.hideAfterFinish,b=!l&&i&&!s&&!a&&o&&!c,w=!d&&f!==Br&&f!==Lr,_=u&&!p&&f===jr,S=l&&!h,k="uppy-StatusBar-progress\n                           "+(t?"is-"+t:""),P=qe({"uppy-Root":e.isTargetDOMEl},"uppy-StatusBar","is-"+f);return Vr("div",{class:P,"aria-hidden":m},Vr("div",{class:k,style:{width:v+"%"},role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":y}),r,Vr("div",{class:"uppy-StatusBar-actions"},b?Vr(Wr,zr({},e,{uploadState:f})):null,S?Vr(Xr,e):null,_?Vr($r,e):null,w?Vr(Gr,e):null))}({error:o,uploadState:this.getUploadingState(w,b,e.files||{}),allowNewUpload:n,totalProgress:i,totalSize:g,totalUploadedSize:v,isAllComplete:b,isAllPaused:_,isAllErrored:w,isUploadStarted:m,isUploadInProgress:S,complete:l.length,newFiles:a.length,numUploads:h.length,totalETA:y,files:r,i18n:this.i18n,pauseAll:this.uppy.pauseAll,resumeAll:this.uppy.resumeAll,retryAll:this.uppy.retryAll,cancelAll:this.uppy.cancelAll,startUpload:this.startUpload,resumableUploads:k,supportsUploadProgress:P,showProgressDetails:this.opts.showProgressDetails,hideUploadButton:this.opts.hideUploadButton,hideRetryButton:this.opts.hideRetryButton,hidePauseResumeButton:this.opts.hidePauseResumeButton,hideCancelButton:this.opts.hideCancelButton,hideAfterFinish:this.opts.hideAfterFinish,isTargetDOMEl:this.isTargetDOMEl})},i.install=function(){var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=function(){this.unmount()},n}(le.Plugin),qr.VERSION="1.7.6",Hr);function ln(){return(ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}for(var cn=le.Plugin,pn=oe.h,dn=(an=sn=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).render=function(e){var t=e.info,r=t.isHidden,i=t.message,o=t.details;return pn("div",{class:"uppy uppy-Informer","aria-hidden":r},pn("p",{role:"alert"},i," ",o&&pn("span",{"aria-label":o,"data-microtip-position":"top-left","data-microtip-size":"medium",role:"tooltip",onclick:onMouseOver:onMouseLeave:,"?")))},n.type="progressindicator",n.id=n.opts.id||"Informer",n.title="Informer",n.opts=ln({},{},r),n}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.install=function(){var e=this.opts.target;e&&this.mount(e,this)},n}(cn),sn.VERSION="1.5.11",an),hn=function(e,t,r){var n=e.split(",")[1],i=t.mimeType||e.split(",")[0].split(":")[1].split(";")[0];null==i&&(i="plain/text");for(var o,s=atob(n),a=[],u=0;u<s.length;u++)a.push(s.charCodeAt(u));try{o=new Uint8Array(a)}catch(gc){return null}return r?new File([o],t.name||"",{type:i}):new Blob([o],{type:i})},fn=yn=Math.log2||gn={toByteArray:fromByteArray:,vn=[],mn=[],bn="undefined"!=typeof Uint8Array?Uint8Array:Array,wn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_n=0,Sn=wn.length;_n<Sn;++_n)vn[_n]=wn[_n],mn[wn.charCodeAt(_n)]=_n;["-".charCodeAt(0)]=62,mn["_".charCodeAt(0)]=63;var Cn={read:write:,An={exports:{}};(function(e,t,r){var n,i;n=this,i=function(n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});var r=["prototype","__proto__","caller","arguments","length","name"];Object.getOwnPropertyNames(t).forEach((function(n){-1===r.indexOf(n)&&e[n]!==t[n]&&(e[n]=t[n])})),t&&c(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,r){return(p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&c(i,r.prototype),i}).apply(null,arguments)}function d(e){var t="function"==typeof Map?new Map:void 0;return(d=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return p(e,arguments,l(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r g=Object.values||v=Object.entries||function(e){var t=[];for(var r in e)t.push([r,e[r]]);return t},m=Object.assign||function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach((),e},b=Object.fromEntries||function(e){var t={};return w(e).forEach((),t},w=Array.from||function(e){if(e instanceof A){var t=[];return e.forEach((),t}return Array.prototype.slice.call(e)};function _(e){return-1!==this.indexOf(e)}Array.prototype.includes||(Array.prototype.includes=_),String.prototype.includes||(String.prototype.includes=_),String.prototype.startsWith||(String.prototype.startsWith=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.substring(t,t+e.length)===e}),String.prototype.endsWith||(String.prototype.endsWith=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.length;return this.substring(t-e.length,t)===e});var S="undefined"!=typeof self?self:t,k=S.fetch||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(r,n){var i=new XMLHttpRequest;if(i.open("get",e,!0),i.responseType="arraybuffer",i.onerror=n,t.headers)for(var o in t.headers)i.setRequestHeader(o,t.headers[o]);i.onload=function(){r({ok:i.status>=200&&i.status<300,status:i.status,arrayBuffer:)},i.send(null)}))},P=function(e){var t=[];if(Object.defineProperties(t,{size:{get:function(){return this.length}},has:{value:,add:{value:,delete:{value:function(e){if(this.has(e)){var t=this.indexOf(e);this.splice(t,1)}}}}),Array.isArray(e))for(var r=0;r<e.length;r++)t.add(e[r]);return t},C=function(e){return new A(e)},A=void 0!==S.Map&&void 0!==S.Map.prototype.keys?S.Map:function(){function e(t){if(i(this,e),this.clear(),t)for(var r=0;r<t.length;r++)this.set(t[r][0],t[r][1])}return s(e,[{key:"clear",value:,{key:"get",value:,{key:"set",value:function(e,t){return this._map["map_"+e]=t,this._keys.indexOf(e)<0&&this._keys.push(e),this}},{key:"has",value:,{key:"delete",value:function(e){var t=this._keys.indexOf(e);return!(t<0||(delete this._map["map_"+e],this._keys.splice(t,1),0))}},{key:"keys",value:function(){return this._keys.slice(0)}},{key:"values",value:,{key:"entries",value:function(){var e=this;return this._keys.map(()}},{key:"forEach",value:function(e,t){for(var r=0;r<this._keys.length;r++)e.call(t,this._map["map_"+this._keys[r]],this._keys[r],this)}},{key:"size",get:function(){return this._keys.length}}]),e}(),F="undefined"!=typeof self?self:t,E="undefined"!=typeof navigator,O=E&&"undefined"==typeof HTMLImageElement,U=!(void 0===t||void 0===e||!e.versions||!e.versions.node),R=F.Buffer,T=!!R,x=function D(e){return void 0===e||(e instanceof A?0===e.size:0===g(e).filter(x).length)}function B(e){var t=new Error(e);throw delete t.stack,t}function I(e){var t=function(e){var t=0;return e.ifd0.enabled&&(t+=1024),e.exif.enabled&&(t+=2048),e.makerNote&&(t+=2048),e.userComment&&(t+=1024),e.gps.enabled&&(t+=512),e.interop.enabled&&(t+=100),e.ifd1.enabled&&(t+=1024),t+2048}(e);return e.jfif.enabled&&(t+=50),e.xmp.enabled&&(t+=2e4),e.iptc.enabled&&(t+=14e3),e.icc.enabled&&(t+=6e3),t}var j="undefined"!=typeof TextDecoder?new TextDecoder("utf-8"):void 0,M=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;if(i(this,e),"boolean"==typeof o&&(this.le=o),Array.isArray(t)&&(t=new Uint8Array(t)),0===t)this.byteOffset=0,this.byteLength=0;else if(t instanceof ArrayBuffer){void 0===n&&(n=t.byteLength-r);var s=new DataView(t,r,n);this._swapDataView(s)}else if(t instanceof Uint8Array||t instanceof DataView||t instanceof e){void 0===n&&(n=t.byteLength-r),(r+=t.byteOffset)+n>t.byteOffset+t.byteLength&&B("Creating view outside of available memory in ArrayBuffer");var a=new DataView(t.buffer,r,n);this._swapDataView(a)}else if("number"==typeof t){var u=new DataView(new ArrayBuffer(t));this._swapDataView(u)}else B("Invalid input argument for BufferView: "+t)}return s(e,null,[{key:"from",value:function(t,r){return t instanceof this&&t.le===r?t:new e(t,void 0,void 0,r)}}]),s(e,[{key:"_swapArrayBuffer",value:,{key:"_swapBuffer",value:,{key:"_swapDataView",value:,{key:"_lengthToEnd",value:,{key:"set",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return t instanceof DataView||t instanceof e?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t instanceof ArrayBuffer&&(t=new Uint8Array(t)),t instanceof Uint8Array||B("BufferView.set(): Invalid data argument."),this.toUint8().set(t,r),new n(this,r,t.byteLength)}},{key:"subarray",value:function(t,r){return new e(this,t,r=r||this._lengthToEnd(t))}},{key:"toUint8",value:,{key:"getUint8Array",value:function(e,t){return new Uint8Array(this.buffer,this.byteOffset+e,t)}},{key:"getString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.byteLength;return function(e){return j?j.decode(e):T?r.from(e).toString("utf8"):decodeURIComponent(escape(String.fromCharCode.apply(null,e)))}(this.getUint8Array(e,t))}},{key:"getUnicodeString",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.byteLength,r=[],n=0;n<t&&e+n<this.byteLength;n+=2)r.push(this.getUint16(e+n));return r.map((function(e){return String.fromCharCode(e)})).join("")}},{key:"getInt8",value:function(e){return this.dataView.getInt8(e)}},{key:"getUint8",value:function(e){return this.dataView.getUint8(e)}},{key:"getInt16",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getInt16(e,t)}},{key:"getInt32",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getInt32(e,t)}},{key:"getUint16",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getUint16(e,t)}},{key:"getUint32",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getUint32(e,t)}},{key:"getFloat32",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getFloat32(e,t)}},{key:"getFloat64",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getFloat64(e,t)}},{key:"getFloat",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getFloat32(e,t)}},{key:"getDouble",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.le;return this.dataView.getFloat64(e,t)}},{key:"getUintBytes",value:function(e,t,r){switch(t){case 1:return this.getUint8(e,r);case 2:return this.getUint16(e,r);case 4:return this.getUint32(e,r);case 8:return this.getUint64&&this.getUint64(e,r)}}},{key:"getUint",value:function(e,t,r){switch(t){case 8:return this.getUint8(e,r);case 16:return this.getUint16(e,r);case 32:return this.getUint32(e,r);case 64:return this.getUint64&&this.getUint64(e,r)}}},{key:"toString",value:,{key:"ensureChunk",value:function(){}}]),e}();function L(e,t){B("".concat(e," '").concat(t,"' was not loaded, try using full build of exifr."))}var N=function(e){eturn u(t,d(A)),s(t,[{key:"get",value:function(e,r){return this.has(e)||L(this.kind,e),r&&(e in r||this.kind,e),r[e].enabled||L(this.kind,e)),y(l(t.prototype),"get",this).call(this,e)}},{key:"keyList",value:]),t}(),z=new N("file parser"),q=new N("segment parser"),H=new N("file reader");function V(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(e.apply(this,t))}catch(e){return Promise.reject(e)}}}function W(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}var X=V((function(e){return new Promise((function(t,r){var n=new FileReader;n.onloadend=function(){return t(n.result||new ArrayBuffer)},n.onerror=r,n.readAsArrayBuffer(e)}))})),G=V((),$=V((function(e,t){return W(t(e),(function(e){return new M(e)}))})),K=V((function(e,t,r){var n=new(H.get(r))(e,t);return W(n.read(),(function(){return n}))})),Y=V((function(e,t,r,n){return H.has(r)?K(e,t,r):n?$(e,n):(B("Parser ".concat(r," is not loaded")),W())}));function J(e,t){return(r=e).startsWith("data:")||r.length>1e4?K(e,t,"base64"):E?Y(e,t,"url",G):U?K(e,t,"fs"):void B("Invalid input argument");var r}var Q=function(e){function t(){return i(this,t),f(this,l(t).apply(this,arguments))}return u(t,d(A)),s(t,[{key:"tagKeys",get:function(){return this.allKeys||(this.allKeys=w(this.keys())),this.allKeys}},{key:"tagValues",get:]),t}();function Z(e,t,r){var n=new Q,i=r;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=w(i));for(var o=0;o<i.length;o++){var s=i[o],a=s[0],u=s[1];n.set(a,u)}if(Array.isArray(t)){var l=t;Array.isArray(l)||("function"==typeof l.entries&&(l=l.entries()),l=w(l));for(var c=0;c<l.length;c++){var p=l[c];e.set(p,n)}}else e.set(t,n);return n}function ee(e,t,r){var n,i=e.get(t),o=r;Array.isArray(o)||("function"==typeof o.entries&&(o=o.entries()),o=w(o));for(var s=0;s<o.length;s++)n=o[s],i.set(n[0],n[1])}var te=C(),re=C(),ne=C(),ie=["chunked","firstChunkSize","firstChunkSizeNode","firstChunkSizeBrowser","chunkSize","chunkLimit"],oe=["jfif","xmp","icc","iptc"],se=["tiff"].concat(oe),ae=["ifd0","ifd1","exif","gps","interop"],ue=[].concat(se,ae),le=["makerNote","userComment"],ce=["translateKeys","translateValues","reviveValues","multiSegment"],pe=[].concat(ce,["sanitize","mergeOutput"]),de=function(){function e(){i(this,e)}return s(e,[{key:"translate",get:]),e}(),he=function(e){function t(e,r,n,o){var s;if(i(this,t),a(h(s=f(this,l(t).call(this))),"enabled",!1),a(h(s),"skip",P()),a(h(s),"pick",P()),a(h(s),"deps",P()),a(h(s),"translateKeys",!1),a(h(s),"translateValues",!1),a(h(s),"reviveValues",!1),s.key=e,s.enabled=r,s.parse=s.enabled,s.applyInheritables(o),s.canBeFiltered=ae.includes(e),s.canBeFiltered&&(s.dict=te.get(e)),void 0!==n)if(Array.isArray(n))s.parse=s.enabled=!0,s.canBeFiltered&&n.length>0&&s.translateTagSet(n,s.pick);else if("object"==typeof n){if(s.enabled=!0,s.parse=!1!==n.parse,s.canBeFiltered){var u=n.pick,c=n.skip;u&&u.length>0&&s.translateTagSet(u,s.pick),c&&c.length>0&&s.translateTagSet(c,s.skip)}s.applyInheritables(n)}else!0===n||!1===n?s.parse=s.enabled=n:B("Invalid options argument: ".concat(n));return s}return u(t,de),s(t,[{key:"needed",get:]),s(t,[{key:"applyInheritables",value:function(e){var t,r,n=ce;Array.isArray(n)||("function"==typeof n.entries&&(n=n.entries()),n=w(n));for(var i=0;i<n.length;i++)void 0!==(r=e[t=n[i]])&&(this[t]=r)}},{key:"translateTagSet",value:function(e,t){if(this.dict){var r,n,i=this.dict,o=i.tagKeys,s=i.tagValues,a=e;Array.isArray(a)||("function"==typeof a.entries&&(a=a.entries()),a=w(a));for(var u=0;u<a.length;u++)"string"==typeof(r=a[u])?(-1===(n=s.indexOf(r))&&(n=o.indexOf(Number(r))),-1!==n&&t.add(Number(o[n]))):t.add(r)}else{var l=e;Array.isArray(l)||("function"==typeof l.entries&&(l=l.entries()),l=w(l));for(var c=0;c<l.length;c++){var p=l[c];t.add(p)}}}},{key:"finalizeFilters",value:function(){!this.enabled&&this.deps.size>0?(this.enabled=!0,be(this.pick,this.deps)):this.enabled&&this.pick.size>0&&be(this.pick,this.deps)}}]),t}(),fe={jfif:!1,tiff:!0,xmp:!1,icc:!1,iptc:!1,ifd0:!0,ifd1:!1,exif:!0,gps:!0,interop:!1,makerNote:!1,userComment:!1,multiSegment:!1,skip:[],pick:[],translateKeys:!0,translateValues:!0,reviveValues:!0,sanitize:!0,mergeOutput:!0,silentErrors:!0,chunked:!0,firstChunkSize:void 0,firstChunkSizeNode:512,firstChunkSizeBrowser:65536,chunkSize:65536,chunkLimit:5},ye=C(),ge=function(e){function t(e){var r;return i(this,t),r=f(this,l(t).call(this)),!0===e?r.setupFromTrue():void 0===e?r.setupFromUndefined():Array.isArray(e)?r.setupFromArray(e):"object"==typeof e?r.setupFromObject(e):B("Invalid options argument ".concat(e)),void 0===r.firstChunkSize&&(r.firstChunkSize=E?r.firstChunkSizeBrowser:r.firstChunkSizeNode),r.mergeOutput&&(r.ifd1.enabled=!1),r.filterNestedSegmentTags(),r.traverseTiffDependencyTree(),r.checkLoadedPlugins(),r}return u(t,de),s(t,null,[{key:"useCached",value:function(e){var t=ye.get(e);return void 0!==t||(t=new this(e),ye.set(e,t)),t}}]),s(t,[{key:"setupFromUndefined",value:function(){var e,t=ie;Array.isArray(t)||("function"==typeof t.entries&&(t=t.entries()),t=w(t));for(var r=0;r<t.length;r++)this[e=t[r]]=fe[e];var n=pe;Array.isArray(n)||("function"==typeof n.entries&&(n=n.entries()),n=w(n));for(var i=0;i<n.length;i++)this[e=n[i]]=fe[e];var o=le;Array.isArray(o)||("function"==typeof o.entries&&(o=o.entries()),o=w(o));for(var s=0;s<o.length;s++)this[e=o[s]]=fe[e];var a=ue;Array.isArray(a)||("function"==typeof a.entries&&(a=a.entries()),a=w(a));for(var u=0;u<a.length;u++)this[e=a[u]]=new he(e,fe[e],void 0,this)}},{key:"setupFromTrue",value:function(){var e,t=ie;Array.isArray(t)||("function"==typeof t.entries&&(t=t.entries()),t=w(t));for(var r=0;r<t.length;r++)this[e=t[r]]=fe[e];var n=pe;Array.isArray(n)||("function"==typeof n.entries&&(n=n.entries()),n=w(n));for(var i=0;i<n.length;i++)this[e=n[i]]=fe[e];var o=le;Array.isArray(o)||("function"==typeof o.entries&&(o=o.entries()),o=w(o));for(var s=0;s<o.length;s++)this[e=o[s]]=!0;var a=ue;Array.isArray(a)||("function"==typeof a.entries&&(a=a.entries()),a=w(a));for(var u=0;u<a.length;u++)this[e=a[u]]=new he(e,!0,void 0,this)}},{key:"setupFromArray",value:function(e){var t,r=ie;Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=w(r));for(var n=0;n<r.length;n++)this[t=r[n]]=fe[t];var i=pe;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=w(i));for(var o=0;o<i.length;o++)this[t=i[o]]=fe[t];var s=le;Array.isArray(s)||("function"==typeof s.entries&&(s=s.entries()),s=w(s));for(var a=0;a<s.length;a++)this[t=s[a]]=fe[t];var u=ue;Array.isArray(u)||("function"==typeof u.entries&&(u=u.entries()),u=w(u));for(var l=0;l<u.length;l++)this[t=u[l]]=new he(t,!1,void 0,this);this.setupGlobalFilters(e,void 0,ae)}},{key:"setupFromObject",value:function(e){var t;ae.ifd0=ae.ifd0||ae.image,ae.ifd1=ae.ifd1||ae.thumbnail,m(this,e);var r=ie;Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=w(r));for(var n=0;n<r.length;n++)this[t=r[n]]=me(e[t],fe[t]);var i=pe;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=w(i));for(var o=0;o<i.length;o++)this[t=i[o]]=me(e[t],fe[t]);var s=le;Array.isArray(s)||("function"==typeof s.entries&&(s=s.entries()),s=w(s));for(var a=0;a<s.length;a++)this[t=s[a]]=me(e[t],fe[t]);var u=se;Array.isArray(u)||("function"==typeof u.entries&&(u=u.entries()),u=w(u));for(var l=0;l<u.length;l++)this[t=u[l]]=new he(t,fe[t],e[t],this);var c=ae;Array.isArray(c)||("function"==typeof c.entries&&(c=c.entries()),c=w(c));for(var p=0;p<c.length;p++)this[t=c[p]]=new he(t,fe[t],e[t],this.tiff);this.setupGlobalFilters(e.pick,e.skip,ae,ue),!0===e.tiff?this.batchEnableWithBool(ae,!0):!1===e.tiff?this.batchEnableWithUserValue(ae,e):Array.isArray(e.tiff)?this.setupGlobalFilters(e.tiff,void 0,ae):"object"==typeof e.tiff&&this.setupGlobalFilters(e.tiff.pick,e.tiff.skip,ae)}},{key:"batchEnableWithBool",value:function(e,t){var r=e;Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=w(r));for(var n=0;n<r.length;n++)this[r[n]].enabled=t}},{key:"batchEnableWithUserValue",value:function(e,t){var r=e;Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=w(r));for(var n=0;n<r.length;n++){var i=r[n],o=t[i];this[i].enabled=!1!==o&&void 0!==o}}},{key:"setupGlobalFilters",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;if(e&&e.length){var i=n;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=w(i));for(var o=0;o<i.length;o++)this[i[o]].enabled=!1;var s=ve(e,r);Array.isArray(s)||("function"==typeof s.entries&&(s=s.entries()),s=w(s));for(var a=0;a<s.length;a++){var u=s[a],l=u[0],c=u[1];be(this[l].pick,c),this[l].enabled=!0}}else if(t&&t.length){var p=ve(t,r);Array.isArray(p)||("function"==typeof p.entries&&(p=p.entries()),p=w(p));for(var d=0;d<p.length;d++){var h=p[d],f=h[0],y=h[1];be(this[f].skip,y)}}}},{key:"filterNestedSegmentTags",value:function(){var e=this.ifd0,t=this.exif,r=this.xmp,n=this.iptc,i=this.icc;this.makerNote?t.deps.add(37500):t.skip.add(37500),this.userComment?t.deps.add(37510):t.skip.add(37510),r.enabled||e.skip.add(700),n.enabled||e.skip.add(33723),i.enabled||e.skip.add(34675)}},{key:"traverseTiffDependencyTree",value:function(){var e=this,t=this.ifd0,r=this.exif,n=this.gps;this.interop.needed&&(r.deps.add(40965),t.deps.add(40965)),r.needed&&t.deps.add(34665),n.needed&&t.deps.add(34853),this.tiff.enabled=ae.some(()||this.makerNote||this.userComment;var i=ae;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=w(i));for(var o=0;o<i.length;o++)this[i[o]].finalizeFilters()}},{key:"checkLoadedPlugins",value:function(){var e=se;Array.isArray(e)||("function"==typeof e.entries&&(e=e.entries()),e=w(e));for(var t=0;t<e.length;t++){var r=e[t];this[r].enabled&&!q.has(r)&&L("segment parser",r)}}},{key:"onlyTiff",get:function(){var e=this;return!oe.map((function(t){return e[t].enabled})).some(()&&this.tiff.enabled}}]),t}();function ve(e,t){var r,n,i,o=[],s=t;Array.isArray(s)||("function"==typeof s.entries&&(s=s.entries()),s=w(s));for(var a=0;a<s.length;a++){n=s[a],r=[];var u=te.get(n);Array.isArray(u)||("function"==typeof u.entries&&(u=u.entries()),u=w(u));for(var l=0;l<u.length;l++)i=u[l],(e.includes(i[0])||e.includes(i[1]))&&r.push(i[0]);r.length&&o.push([n,r])}return o}unction be(e,t){var r=t;Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=w(r));for(var n=0;n<r.length;n++){var i=r[n];e.add(i)}}function we(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function _e(e,t){var r=e();return r&&r.then?r.then(t):t(r)}function Se(){}a(ge,"default",fe);var ke,Pe=function(){function e(t){i(this,e),a(this,"parsers",{}),this.options=ge.useCached(t)}return s(e,[{key:"setup",value:function(){if(!this.fileParser){var e=this.file,t=e.getUint16(0),r=z;Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=w(r));for(var n=0;n<r.length;n++){var i=r[n],o=i[0],s=i[1];if(s.canHandle(e,t))return this.fileParser=new s(this.options,this.file,this.parsers),e[o]=!0}B("Unknown file format")}}},{key:"read",value:function(e){try{var t=this;return we(function(e,t){return"string"==typeof e?J(e,t):E&&!O&&e instanceof HTMLImageElement?J(e.src,t):e instanceof Uint8Array||e instanceof ArrayBuffer||e instanceof DataView?new M(e):E&&e instanceof Blob?Y(e,t,"blob",X):void B("Invalid input argument")}(e,t.options),(function(e){t.file=e}))}catch(e){return Promise.reject(e)}}},{key:"parse",value:function(){try{var e=this;return e.setup(),we(e.fileParser.parse(),(function(){var t,r={},n=[],i=g(e.parsers).map((t=function(t){var i;return _e((function(){return e.options.silentErrors?(o=(r=function(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}((function(){return we(t.parse(),(function(e){i=e}))}),(function(e){n.push(e)})))&&r.then?r.then(o):o()):we(t.parse(),(function(e){i=e}));var r,o}),(function(){t.assignToOutput(r,i)}))},function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];try{return Promise.resolve(t.apply(this,e))}catch(e){return Promise.reject(e)}}));return we(Promise.all(i),(function(){return e.options.silentErrors&&n.length>0&&(r.errors=n),e.file.close&&e.file.close(),D(t=r)?void 0:t;var t}))}))}catch(e){return Promise.reject(e)}}},{key:"extractThumbnail",value:function(){try{var e=this;e.setup();var t,r=e.options,n=e.file,i=q.get("tiff",r);return _e((function(){if(!n.tiff)return function(e){var t=e();if(t&&t.then)return t.then(Se)}((function(){if(n.jpeg)return we(e.fileParser.getOrFindSegment("tiff"),(function(e){t=e}))}));t={start:0,type:"tiff"}}),(function(){if(void 0!==t)return we(e.fileParser.ensureSegmentChunk(t),(function(t){return we((e.parsers.tiff=new i(t,r,n)).extractThumbnail(),()}))}))}catch(e){return Promise.reject(e)}}}]),e}(),Ce=(ke=function(e,t){var r,n,i=new Pe(t);return n=function(){return i.parse()},(r=i.read(e))&&r.then||(r=Promise.resolve(r)),n?r.then(n):r},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(ke.apply(this,e))}catch(e){return Promise.reject(e)}}),Ae=Object.freeze({__proto__:null,parse:Ce,Exifr:Pe,fileParsers:z,segmentParsers:q,fileReaders:H,tagKeys:te,tagValues:re,tagRevivers:ne,createDictionary:Z,extendDictionary:ee,fetchUrlAsArrayBuffer:G,readBlobAsArrayBuffer:X,chunkedProps:ie,otherSegments:oe,segments:se,tiffBlocks:ae,segmentsAndBlocks:ue,tiffExtractables:le,inheritables:ce,allFormatters:pe,Options:ge});function Fe(){}var Ee=function(){function e(t,r,n){var o=this;i(this,e),a(this,"ensureSegmentChunk",(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(function(e){var t,r,n,i=e.start,s=e.size||65536;return t=function(){if(o.file.chunked)return (function(){if(!o.file.available(i,s))return (function(){return r=function(t){e.chunk=t},(t=o.file.readChunk(i,s))&&t.then||(t=Promise.resolve(t)),r?t.then(r):t;var t,r}),(function(t){B("Couldn't read segment: ".concat(JSON.stringify(e),". ").concat(t.message))})));e.chunk=o.file.subarray(i,s)}));o.file.byteLength>i+s?e.chunk=o.file.subarray(i,s):void 0===e.size?e.chunk=o.file.subarray(i):B("Segment unreachable: "+JSON.stringify(e))},r=function(){return e.chunk},(n=t())&&n.then?n.then(r):r()}.apply(this,t))}catch(e){return Promise.reject(e)}})),this.extendOptions&&this.extendOptions(t),this.options=t,this.file=r,this.parsers=n}return s(e,[{key:"createParser",value:function(e,t){var r=new(q.get(e))(t,this.options,this.file);return this.parsers[e]=r}}]),e}(),Oe=function(){function e(t){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;i(this,e),a(this,"errors",[]),a(this,"raw",C()),a(this,"handleError",(function(e){if(!r.options.silentErrors)throw e;r.errors.push(e.message)})),this.chunk=this.normalizeInput(t),this.file=o,this.type=this.constructor.type,this.globalOptions=this.options=n,this.localOptions=n[this.type],this.canTranslate=this.localOptions&&this.localOptions.translate}return s(e,[{key:"normalizeInput",value:],[{key:"findPosition",value:function(e,t){var r=e.getUint16(t+2)+2,n="function"==typeof this.headerLength?this.headerLength(e,t,r):this.headerLength,i=t+n,o=r-n;return{offset:t,length:r,headerLength:n,start:i,size:o,end:i+o}}},{key:"parse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new this(e,new ge(a({},this.type,t))).parse()}}]),s(e,[{key:"translate",value:function(){this.canTranslate&&(this.translated=this.translateBlock(this.raw,this.type))}},{key:"translateBlock",value:function(e,t){var r=ne.get(t),n=re.get(t),i=te.get(t),o=this.options[t],s=o.reviveValues&&!!r,a=o.translateValues&&!!n,u=o.translateKeys&&!!i,l={},c=e;Array.isArray(c)||("function"==typeof c.entries&&(c=c.entries()),c=w(c));for(var p=0;p<c.length;p++){var d=c[p],h=d[0],f=d[1];s&&r.has(h)?f=r.get(h)(f):a&&n.has(h)&&(f=this.translateValue(f,n.get(h))),u&&i.has(h)&&(h=i.get(h)||h),l[h]=f}return l}},{key:"translateValue",value:,{key:"assignToOutput",value:,{key:"assignObjectToOutput",value:function(e,t,r){if(this.globalOptions.mergeOutput)return m(e,r);e[t]?m(e[t],r):e[t]=r}},{key:"output",get:function(){return this.translated?this.translated:this.raw?b(this.raw):void 0}}]),e}();function Ue(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function Re(){}function Te(e,t){if(!t)return e&&e.then?e.then(Re):Promise.resolve()}function xe(e,t){var r=e();return r&&r.then?r.then(t):t(r)}(Oe,"headerLength",4),a(Oe,"type",void 0),a(Oe,"multiSegment",!1),a(Oe,"canHandle",();var Be=);ction Le(e,t){var r=q;Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=w(r));for(var n=0;n<r.length;n++){var i=r[n],o=i[0];if(i[1].canHandle(e,t))return o}}var Ne=function(e){function t(){var e,r;i(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return a(h(r=f(this,(e=l(t)).call.apply(e,[this].concat(o)))),"appSegments",[]),a(h(r),"jpegSegments",[]),a(h(r),"unknownSegments",[]),r}return u(t,Ee),s(t,[{key:"parse",value:function(){try{var e=this;return Ue(e.findAppSegments(),(function(){return Ue(e.readSegments(),(function(){e.mergeMultiSegments(),e.createParsers()}))}))}catch(e){return Promise.reject(e)}}},{key:"readSegments",value:function(){try{var e=this.appSegments.map(this.ensureSegmentChunk);return Te(Promise.all(e))}catch(e){return Promise.reject(e)}}},{key:"setupSegmentFinderArgs",value:function(e){var t=this;!0===e?(this.findAll=!0,this.wanted=P(q.keyList())):(e=void 0===e?q.keyList().filter((function(e){return t.options[e].enabled})):e.filter((),this.findAll=!1,this.remaining=P(e),this.wanted=P(e)),this.unfinishedMultiSegment=!1}},{key:"findAppSegments",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;try{var r=this;r.setupSegmentFinderArgs(t);var n=r.file,i=r.findAll,o=r.wanted,s=r.remaining;return xe((function(){if(!i&&r.file.chunked)return i=w(o).some((function(e){var t=q.get(e),n=r.options[e];return t.multiSegment&&n.multiSegment})),function(e){var t=function(){if(i)return Te(r.file.readWhole())}();if(t&&t.then)return t.then(Re)}()}),(function(){var t=!1;if(e=r._findAppSegments(e,n.byteLength,i,o,s),!r.options.onlyTiff)return function(){if(n.chunked){var i=!1;return function(e,t,r){for(var n;;){var i=e();if(Ie(i)&&(i=i.v),!i)return s;if(i.then){n=0;break}var o,s=r();if(s&&s.then){if(!Ie(s)){n=1;break}s=s.s}}var a=new Be,u=De.bind(null,a,2);return(0===n?i.then(c):1===n?s.then(l):o.then(p)).then(void 0,u),a;function(){return!t&&s.size>0&&!i&&(!!n.canReadNextChunk||!!r.unfinishedMultiSegment)}),0,(function(){var o=n.nextChunkOffset,s=r.appSegments.some((function(e){return!r.file.available(e.offset||e.start,e.length||e.size)}));return xe((function(){return Ue(e>o&&!s?n.readNextChunk(e):n.readNextChunk(o),()}),(function(){void 0===(e=r._findAppSegments(e,n.byteLength))&&(t=!0)}))}))}}()}))}catch(e){return Promise.reject(e)}}},{key:"_findAppSegments",value:function(e,t){t-=2;for(var r,n,i,o,s,a,u=this.file,l=this.findAll,c=this.wanted,p=this.remaining,d=this.options;e<t;e++)if(255===u.getUint8(e))if(Me(r=u.getUint8(e+1))){if(n=u.getUint16(e+2),(i=Le(u,e))&&c.has(i)&&(s=(o=q.get(i)).findPosition(u,e),a=d[i],s.type=i,this.appSegments.push(s),!l&&(o.multiSegment&&a.multiSegment?(this.unfinishedMultiSegment=s.chunkNumber<s.chunkCount,this.unfinishedMultiSegment||p.delete(i)):p.delete(i),0===p.size)))break;d.recordUnknownSegments&&((s=Oe.findPosition(u,e)).marker=r,this.unknownSegments.push(s)),e+=n+1}else if(je(r)){if(n=u.getUint16(e+2),218===r&&!1!==d.stopAfterSos)return;d.recordJpegSegments&&this.jpegSegments.push({offset:e,length:n,marker:r}),e+=n+1}return e}},{key:"mergeMultiSegments",value:function(){var e=this;if(this.appSegments.some((function(e){return e.multiSegment}))){var t=function(e,t){for(var r,n,i,o=C(),s=0;s<e.length;s++)n=(r=e[s]).type,o.has(n)?i=o.get(n):o.set(n,i=[]),i.push(r);return w(o)}(this.appSegments);this.mergedAppSegments=t.map((function(t){var r=t[0],n=t[1],i=q.get(r,e.options);return i.handleMultiSegments?{type:r,chunk:i.handleMultiSegments(n)}:n[0]}))}}},{key:"createParsers",value:function(){try{var e=this.mergedAppSegments||this.appSegments;Array.isArray(e)||("function"==typeof e.entries&&(e=e.entries()),e=w(e));for(var t=0;t<e.length;t++){var r=e[t],n=r.type,i=r.chunk;if(this.options[n].enabled){var o=this.parsers[n];if(o&&o.append);else if(!o){var s=new(q.get(n,this.options))(i,this.options,this.file);this.parsers[n]=s}}}return Ue()}catch(e){return Promise.reject(e)}}},{key:"getSegment",value:,{key:"getOrFindSegment",value:function(e){try{var t=this,r=t.getSegment(e);return xe((function(){if(void 0===r)return Ue(t.findAppSegments(0,[e]),()}),(function(){return r}))}catch(e){return Promise.reject(e)}}}],[{key:"canHandle",value:]),t}();function ze(){}function qe(e,t){if(!t)return e&&e.then?e.then(ze):Promise.resolve()}(Ne,"type","jpeg"),z.set("jpeg",Ne);var Ve=[void 0,1,1,2,4,8,1,1,2,4,8,4,8,4],We=function(e){function t(){return i(this,t),f(this,l(t).apply(this,arguments))}return u(t,e),s(t,[{key:"parse",value:function(){try{var e=this;e.parseHeader();var t=e.options;return He((function(){if(t.ifd0.enabled)return qe(e.parseIfd0Block())}),(function(){return He((function(){if(t.exif.enabled)return qe(e.safeParse("parseExifBlock"))}),(function(){return He((function(){if(t.gps.enabled)return qe(e.safeParse("parseGpsBlock"))}),(function(){return He((function(){if(t.interop.enabled)return qe(e.safeParse("parseInteropBlock"))}),(function(){return He((function(){if(t.ifd1.enabled)return qe(e.safeParse("parseThumbnailBlock"))}),(function(){return e.createOutput()}))}))}))}))}))}catch(e){return Promise.reject(e)}}},{key:"safeParse",value:function(e){var t=this[e]();return void 0!==t.catch&&(t=t.catch(this.handleError)),t}},{key:"findIfd0Offset",value:function(){void 0===this.ifd0Offset&&(this.ifd0Offset=this.chunk.getUint32(4))}},{key:"findIfd1Offset",value:function(){if(void 0===this.ifd1Offset){this.findIfd0Offset();var e=this.chunk.getUint16(this.ifd0Offset),t=this.ifd0Offset+2+12*e;this.ifd1Offset=this.chunk.getUint32(t)}}},{key:"parseBlock",value:function(e,t){var r=C();return this[t]=r,this.parseTags(e,t,r),r}},{key:"parseIfd0Block",value:function(){try{var e=this;if(e.ifd0)return;var t=e.file;return e.findIfd0Offset(),e.ifd0Offset<8&&B("Malformed EXIF data"),!t.chunked&&e.ifd0Offset>t.byteLength&&B("IFD0 offset points to outside of file.\nthis.ifd0Offset: ".concat(e.ifd0Offset,", file.byteLength: ").concat(t.byteLength)),He((function(){if(t.tiff)return qe(t.ensureChunk(e.ifd0Offset,I(e.options)))}),(function(){var t=e.parseBlock(e.ifd0Offset,"ifd0");if(0!==t.size)return e.exifOffset=t.get(34665),e.interopOffset=t.get(40965),e.gpsOffset=t.get(34853),e.xmp=t.get(700),e.iptc=t.get(33723),e.icc=t.get(34675),e.options.sanitize&&(t.delete(34665),t.delete(40965),t.delete(34853),t.delete(700),t.delete(33723),t.delete(34675)),t}))}catch(e){return Promise.reject(e)}}},{key:"parseExifBlock",value:function(){try{var e=this;if(e.exif)return;return He((function(){if(!e.ifd0)return qe(e.parseIfd0Block())}),(function(){if(void 0!==e.exifOffset)return He((function(){if(e.file.tiff)return qe(e.file.ensureChunk(e.exifOffset,I(e.options)))}),(function(){var t=e.parseBlock(e.exifOffset,"exif");return e.interopOffset||(e.interopOffset=t.get(40965)),e.makerNote=t.get(37500),e.userComment=t.get(37510),e.options.sanitize&&(t.delete(40965),t.delete(37500),t.delete(37510)),e.unpack(t,41728),e.unpack(t,41729),t}))}))}catch(e){return Promise.reject(e)}}},{key:"unpack",value:function(e,t){var r=e.get(t);r&&1===r.length&&e.set(t,r[0])}},{key:"parseGpsBlock",value:function(){try{var e=this;if(e.gps)return;return He((function(){if(!e.ifd0)return qe(e.parseIfd0Block())}),(function(){if(void 0!==e.gpsOffset){var t=e.parseBlock(e.gpsOffset,"gps");return t&&t.has(2)&&t.has(4)&&(t.set("latitude",Xe.apply(void 0,t.get(2).concat([t.get(1)]))),t.set("longitude",Xe.apply(void 0,t.get(4).concat([t.get(3)])))),t}}))}catch(e){return Promise.reject(e)}}},{key:"parseInteropBlock",value:function(){try{var e=this;if(e.interop)return;return He((function(){if(!e.ifd0)return qe(e.parseIfd0Block())}),(function(){return He((function(){if(void 0===e.interopOffset&&!e.exif)return qe(e.parseExifBlock())}),(function(){if(void 0!==e.interopOffset)return e.parseBlock(e.interopOffset,"interop")}))}))}catch(e){return Promise.reject(e)}}},{key:"parseThumbnailBlock",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var t=this;if(t.ifd1||t.ifd1Parsed)return;if(t.options.mergeOutput&&!e)return;return t.findIfd1Offset(),t.ifd1Offset>0&&(t.parseBlock(t.ifd1Offset,"ifd1"),t.ifd1Parsed=!0),t.ifd1}catch(e){return Promise.reject(e)}}},{key:"extractThumbnail",value:function(){try{var e=this;return e.headerParsed||e.parseHeader(),He((function(){if(!e.ifd1Parsed)return qe(e.parseThumbnailBlock(!0))}),(function(){if(void 0!==e.ifd1){var t=e.ifd1.get(513),r=e.ifd1.get(514);return e.chunk.getUint8Array(t,r)}}))}catch(e){return Promise.reject(e)}}},{key:"createOutput",value:function(){var e,t,r,n={},i=ae;Array.isArray(i)||("function"==typeof i.entries&&(i=i.entries()),i=w(i));for(var o=0;o<i.length;o++)if(!D(e=this[t=i[o]]))if(r=this.canTranslate?this.translateBlock(e,t):b(e),this.options.mergeOutput){if("ifd1"===t)continue;m(n,r)}else n[t]=r;return this.makerNote&&(n.makerNote=this.makerNote),this.userComment&&(n.userComment=this.userComment),n}},{key:"assignToOutput",value:function(e,t){if(this.globalOptions.mergeOutput)m(e,t);else{var r=v(t);Array.isArray(r)||("function"==typeof r.entries&&(r=r.entries()),r=w(r));for(var n=0;n<r.length;n++){var i=r[n],o=i[0],s=i[1];this.assignObjectToOutput(e,o,s)}}}},{key:"image",get:function(){return this.ifd0}},{key:"thumbnail",get:function(){return this.ifd1}}],[{key:"canHandle",value:function(e,t){return 225===e.getUint8(t+1)&&1165519206===e.getUint32(t+4)&&0===e.getUint16(t+8)}}]),t}(function(e){function t(){return i(this,t),f(this,l(t).apply(this,arguments))}return u(t,Oe),s(t,[{key:"parseHeader",value:function(){var e=this.chunk.getUint16();18761===e?this.le=!0:19789===e&&(this.le=!1),this.chunk.le=this.le,this.headerParsed=!0}},{key:"parseTags",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C(),n=this.options[t],i=n.pick,o=n.skip,s=(i=P(i)).size>0,a=0===o.size,u=this.chunk.getUint16(e);e+=2;for(var l=0;l<u;l++){var c=this.chunk.getUint16(e);if(s){if(i.has(c)&&(r.set(c,this.parseTag(e,c,t)),i.delete(c),0===i.size))break}else!a&&o.has(c)||r.set(c,this.parseTag(e,c,t));e+=12}return r}},{key:"parseTag",value:function(e,t,r){var n,i=this.chunk,o=i.getUint16(e+2),s=i.getUint32(e+4),a=Ve[o];if(a*s<=4?e+=8:e=i.getUint32(e+8),(o<1||o>13)&&B("Invalid TIFF value type. block: ".concat(r.toUpperCase(),", tag: ").concat(t.toString(16),", type: ").concat(o,", offset ").concat(e)),e>i.byteLength&&B("Invalid TIFF value offset. block: ".concat(r.toUpperCase(),", tag: ").concat(t.toString(16),", type: ").concat(o,", offset ").concat(e," is outside of chunk size ").concat(i.byteLength)),1===o)return i.getUint8Array(e,s);if(2===o)return""===(n=function(e){for(;e.endsWith("\0");)e=e.slice(0,-1);return e}(n=i.getString(e,s)).trim())?void 0:n;if(7===o)return i.getUint8Array(e,s);if(1===s)return this.parseTagValue(o,e);for(var u=new(function(e){switch(o){case 1:return Uint8Array;case 3:return Uint16Array;case 4:return Uint32Array;case 5:return Array;case 6:return Int8Array;case 8:return Int16Array;case 9:return Int32Array;case 10:return Array;case 11:return Float32Array;case 12:return Float64Array;default:return Array}}())(s),l=a,c=0;c<s;c++)u[c]=this.parseTagValue(o,e),e+=l;return u}},{key:"parseTagValue",value:function(e,t){var r=this.chunk;switch(e){case 1:return r.getUint8(t);case 3:return r.getUint16(t);case 4:return r.getUint32(t);case 5:return r.getUint32(t)/r.getUint32(t+4);case 6:return r.getInt8(t);case 8:return r.getInt16(t);case 9:return r.getInt32(t);case 10:return r.getInt32(t)/r.getInt32(t+4);case 11:return r.getFloat(t);case 12:return r.getDouble(t);case 13:return r.getUint32(t);default:B("Invalid tiff type ".concat(e))}}}]),t}());function Xe(e,t,r,n){var i=e+t/60+r/3600;return"S"!==n&&"W"!==n||(i*=-1),i}a(We,"type","tiff"),a(We,"headerLength",10),q.set("tiff",We);var Ge=Object.freeze({__proto__:null,default:Ae,parse:Ce,Exifr:Pe,fileParsers:z,segmentParsers:q,fileReaders:H,tagKeys:te,tagValues:re,tagRevivers:ne,createDictionary:Z,extendDictionary:ee,fetchUrlAsArrayBuffer:G,readBlobAsArrayBuffer:X,chunkedProps:ie,otherSegments:oe,segments:se,tiffBlocks:ae,segmentsAndBlocks:ue,tiffExtractables:le,inheritables:ce,allFormatters:pe,Options:ge});function $e(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}ar Ye=Ke((function(e){var t=new Pe(rt);return $e(t.read(e),(function(){return $e(t.parse(),(function(e){if(e&&e.ifd0)return e.ifd0[274]}))}))})),Je=Ke((function(e){var t=new Pe(tt);return $e(t.read(e),(function(){return $e(t.parse(),()}))})),Qe=Ke((function(e){return $e(this.thumbnail(e),(function(e){if(void 0!==e){var t=new Blob([e]);return URL.createObjectURL(t)}}))})),Ze=Ke((function(e){var t=new Pe(nt);return $e(t.read(e),(function(){return $e(t.extractThumbnail(),()}))})),et={ifd0:!1,ifd1:!1,exif:!1,gps:!1,interop:!1,sanitize:!1,reviveValues:!0,translateKeys:!1,translateValues:!1,mergeOutput:!1},tt=m({},et,{firstChunkSize:4e4,gps:[1,2,3,4]}),rt=m({},et,{firstChunkSize:4e4,ifd0:[274]}),nt=m({},et,{tiff:!1,ifd1:!0,mergeOutput:!1}),it={1:{dimensionSwapped:!1,scaleX:1,scaleY:1,deg:0,rad:0},2:{dimensionSwapped:!1,scaleX:-1,scaleY:1,deg:0,rad:0},3:{dimensionSwapped:!1,scaleX:1,scaleY:1,deg:180,rad:180*Math.PI/180},4:{dimensionSwapped:!1,scaleX:-1,scaleY:1,deg:180,rad:180*Math.PI/180},5:{dimensionSwapped:!0,scaleX:1,scaleY:-1,deg:90,rad:90*Math.PI/180},6:{dimensionSwapped:!0,scaleX:1,scaleY:1,deg:90,rad:90*Math.PI/180},7:{dimensionSwapped:!0,scaleX:1,scaleY:-1,deg:270,rad:270*Math.PI/180},8:{dimensionSwapped:!0,scaleX:1,scaleY:1,deg:270,rad:270*Math.PI/180}};if(n.rotateCanvas=!0,n.rotateCss=!0,"object"==typeof navigator){var ot=navigator.userAgent;if(ot.includes("iPad")||ot.includes("iPhone")){var st=ot.match(/OS (\d+)_(\d+)/),at=(st[0],st[1]),ut=st[2],lt=Number(at)+.1*Number(ut);n.rotateCanvas=lt<13.4,n.rotateCss=!1}if(ot.includes("Chrome/")){var ct=ot.match(/Chrome\/(\d+)/),pt=(ct[0],ct[1]);Number(pt)>=81&&(n.rotateCanvas=n.rotateCss=!1)}}function dt(){}var ht=function(e){function t(){var e,r;i(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return a(h(r=f(this,(e=l(t)).call.apply(e,[this].concat(o)))),"ranges",new ft),0!==r.byteLength&&r.ranges.add(0,r.byteLength),r}return u(t,M),s(t,[{key:"_tryExtend",value:function(e,t,r){if(0===e&&0===this.byteLength&&r){var n=new DataView(r.buffer||r,r.byteOffset,r.byteLength);this._swapDataView(n)}else{var i=e+t;if(i>this.byteLength){var o=this._extend(i).dataView;this._swapDataView(o)}}}},{key:"_extend",value:function(e){var t;t=T?R.allocUnsafe(e):new Uint8Array(e);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return t.set(new Uint8Array(this.buffer,this.byteOffset,this.byteLength),0),{uintView:t,dataView:r}}},{key:"subarray",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r=r||this._lengthToEnd(e),n&&this._tryExtend(e,r),this.ranges.add(e,r),y(l(t.prototype),"subarray",this).call(this,e,r)}},{key:"set",value:function(e,r){arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&this._tryExtend(r,e.byteLength,e);var n=y(l(t.prototype),"set",this).call(this,e,r);return this.ranges.add(r,n.byteLength),n}},{key:"ensureChunk",value:function(e,t){try{if(!this.chunked)return;if(this.ranges.available(e,t))return;return this.readChunk(e,t))}catch(e){return Promise.reject(e)}}},{key:"available",value:]),t}(),ft=function(){eturn s(e,[{key:"add",value:function(e,t){var r=e+t,n=this.list.filter((function(t){return yt(e,t.offset,r)||yt(e,t.end,r)}));if(n.length>0){e=Math.min.apply(Math,[e].concat(n.map((function(e){return e.offset})))),t=(r=Math.max.apply(Math,[r].concat(n.map((function(e){return e.end})))))-e;var i=n.shift();i.offset=e,i.length=t,i.end=r,this.list=this.list.filter(()}else this.list.push({offset:e,length:t,end:r})}},{key:"available",value:function(e,t){var r=e+t;return this.list.some(()}},{key:"length",get:function(){return this.list.length}}]),e}();unction gt(){}r bt=function(e){eturn u(t,e),s(t,[{key:"readWhole",value:function(){try{var e=this;return e.chunked=!1,mt(X(e.input),(function(t){e._swapArrayBuffer(t)}))}catch(e){return Promise.reject(e)}}},{key:"readChunked",value:function(){return this.chunked=!0,this.size=this.input.size,y(l(t.prototype),"readChunked",this).call(this)}},{key:"_readChunk",value:function(e,t){try{var r=this,n=t?e+t:void 0,i=r.input.slice(e,n);return mt(X(i),()}catch(e){return Promise.reject(e)}}}]),t}(function(e){function t(e,r){var n;return i(this,t),a(h(n=f(this,l(t).call(this,0))),"chunksRead",0),n.input=e,n.options=r,n}return u(t,ht),s(t,[{key:"readWhole",value:function(){try{return this.chunked=!1,vt(this.readChunk(this.nextChunkOffset))}catch(e){return Promise.reject(e)}}},{key:"readChunked",value:function(){try{return this.chunked=!0,vt(this.readChunk(0,this.options.firstChunkSize))}catch(e){return Promise.reject(e)}}},{key:"readNextChunk",value:function(e){try{if(void 0===e&&(e=this.nextChunkOffset),this.fullyRead)return this.chunksRead++,!1;var t=this.options.chunkSize;return r=this.readChunk(e,t),n=r&&r.then||(r=Promise.resolve(r)),n?r.then(n):r}catch(e){return Promise.reject(e)}var r,n}},{key:"readChunk",value:function(e,t){try{if(this.chunksRead++,0===(t=this.safeWrapAddress(e,t)))return;return this._readChunk(e,t)}catch(e){return Promise.reject(e)}}},{key:"safeWrapAddress",value:function(e,t){return void 0!==this.size&&e+t>this.size?Math.max(0,this.size-e):t}},{key:"read",value:,{key:"close",value:function(){}},{key:"nextChunkOffset",get:function(){if(0!==this.ranges.list.length)return this.ranges.list[0].length}},{key:"canReadNextChunk",get:,{key:"fullyRead",get:]),t}());H.set("blob",bt),n.Exifr=Pe,n.Options=ge,n.allFormatters=pe,n.chunkedProps=ie,n.createDictionary=Z,n.default=Ge,n.disableAllOptions=et,n.extendDictionary=ee,n.fetchUrlAsArrayBuffer=G,n.fileParsers=z,n.fileReaders=H,n.gps=Je,n.gpsOnlyOptions=tt,n.inheritables=ce,n.orientation=Ye,n.orientationOnlyOptions=rt,n.otherSegments=oe,n.parse=Ce,n.readBlobAsArrayBuffer=X,n.rotation=function(e){return $e(Ye(e),(function(e){return m({canvas:n.rotateCanvas,css:n.rotateCss},it[e])}))},n.rotations=it,n.segmentParsers=q,n.segments=se,n.segmentsAndBlocks=ue,n.tagKeys=te,n.tagRevivers=ne,n.tagValues=re,n.thumbnail=Ze,n.thumbnailOnlyOptions=nt,n.thumbnailUrl=Qe,n.tiffBlocks=ae,n.tiffExtractables=le,Object.defineProperty(n,"__esModule",{value:!0})},"object"==typeof An.exports?i(An.exports):i((n=n||self).exifr={})}).call(this,e,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},s({}).Buffer),An=An.exports;var Fn,En;function On(){return(On=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Un=(En=Fn=function(e){var t,r;function n(t,r){var n;if((n=e.call(this,t,r)||this).onFileAdded=function(e){e.preview||!bt(e.type)||e.isRemote||n.addToQueue(e.id)},n.onCancelRequest=n.onFileRemoved=function(e){var t=n.queue.indexOf(e.id);-1!==t&&n.queue.splice(t,1),e.preview&&fn(e.preview)&&URL.revokeObjectURL(e.preview)},n.onRestored=function(){var e=n.uppy.getState().files;Object.keys(e).forEach((function(e){var t=n.uppy.getFile(e);t.isRestored&&(t.preview&&!fn(t.preview)||n.addToQueue(t.id))}))},n.waitUntilAllProcessed=function(e){e.forEach((function(e){var t=n.uppy.getFile(e);n.uppy.emit("preprocess-progress",t,{mode:"indeterminate",message:n.i18n("generatingThumbnails")})}));var t=function(){e.forEach(()};return new Promise((function(e,r){n.queueProcessing?n.uppy.once("thumbnail:all-generated",():(t(),e())}))},n.type="modifier",n.id=n.opts.id||"ThumbnailGenerator",n.title="Thumbnail Generator",n.queue=[],n.queueProcessing=!1,n.defaultThumbnailDimension=200,n.defaultLocale={strings:{generatingThumbnails:"Generating thumbnails..."}},n.opts=On({},{thumbnailWidth:null,thumbnailHeight:null,waitForThumbnailsBeforeUpload:!1,lazy:!1},r),n.opts.lazy&&n.opts.waitForThumbnailsBeforeUpload)throw new Error("ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.");return n.i18nInit(),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.setOptions=function(t){e.prototype.setOptions.call(this,t),this.i18nInit()},i.i18nInit=function(){this.translator=new A([this.defaultLocale,this.uppy.locale,this.opts.locale]),this.i18n=this.translator.translate.bind(this.translator),this.setPluginState()},i.createThumbnail=function(e,t,r){var n=this,i=URL.createObjectURL(e.data),o=new Promise((function(e,t){var r=new Image;r.src=i,r.addEventListener("load",(),r.addEventListener("error",(function(e){URL.revokeObjectURL(i),t(e.error||new Error("Could not create thumbnail"))}))})),s=An.rotation(e.data).catch((function(e){return 1}));return Promise.all([o,s]).then((function(e){var i=e[0],o=e[1],s=n.getProportionalDimensions(i,t,r,o.deg),a=n.rotateImage(i,o),u=n.resizeImage(a,s.width,s.height);return n.canvasToBlob(u,"image/jpeg",80)})).then((function(e){return URL.createObjectURL(e)}))},i.getProportionalDimensions=function(e,t,r,n){var i=e.width/e.height;return 90!==n&&270!==n||(i=e.height/e.width),null!=t?{width:t,height:Math.round(t/i)}:null!=r?{width:Math.round(r*i),height:r}:{width:this.defaultThumbnailDimension,height:Math.round(this.defaultThumbnailDimension/i)}},i.protect=function(e){var t=e.width/e.height,r=Math.floor(Math.sqrt(5e6*t)),n=Math.floor(5e6/Math.sqrt(5e6*t));if(r>4096&&(r=4096,n=Math.round(r/t)),n>4096&&(n=4096,r=Math.round(t*n)),e.width>r){var i=document.createElement("canvas");i.width=r,i.height=n,i.getContext("2d").drawImage(e,0,0,r,n),e=i}return e},i.resizeImage=function(e,t,r){e=this.protect(e);var n=Math.ceil(yn(e.width/t));n<1&&(n=1);for(var i=t*Math.pow(2,n-1),o=r*Math.pow(2,n-1);n--;){var s=document.createElement("canvas");s.width=i,s.height=o,s.getContext("2d").drawImage(e,0,0,i,o),e=s,i=Math.round(i/2),o=Math.round(o/2)}return e},i.rotateImage=function(e,t){var r=e.width,n=e.height;90!==t.deg&&270!==t.deg||(r=e.height,n=e.width);var i=document.createElement("canvas");i.width=r,i.height=n;var o=i.getContext("2d");return o.translate(r/2,n/2),t.canvas&&(o.rotate(t.rad),o.scale(t.scaleX,t.scaleY)),o.drawImage(e,-e.width/2,-e.height/2,e.width,e.height),i},i.canvasToBlob=function(e,t,r){try{e.getContext("2d").getImageData(0,0,1,1)}catch(gc){if(18===gc.code)return Promise.reject(new Error("cannot read image, probably an svg with external resources"))}return e.toBlob?new Promise(().then((function(e){if(null===e)throw new Error("cannot read image, probably an svg with external resources");return e})):Promise.resolve().then((function(){return hn(e.toDataURL(t,r),{})})).then((function(e){if(null===e)throw new Error("could not extract blob, probably an old browser");return e}))},i.setPreviewURL=i.addToQueue=function(e){this.queue.push(e),!1===this.queueProcessing&&this.processQueue()},i.processQueue=function(){var e=this;if(this.queueProcessing=!0,this.queue.length>0){var t=this.uppy.getFile(this.queue.shift());return t?this.requestThumbnail(t).catch(().then((function(){return e.processQueue()})):void this.uppy.log("[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug","error")}this.queueProcessing=!1,this.uppy.log("[ThumbnailGenerator] Emptied thumbnail queue"),this.uppy.emit("thumbnail:all-generated")},i.requestThumbnail=function(e){var t=this;return bt(e.type)&&!e.isRemote?this.createThumbnail(e,this.opts.thumbnailWidth,this.opts.thumbnailHeight).then((function(r){t.setPreviewURL(e.id,r),t.uppy.log("[ThumbnailGenerator] Generated thumbnail for "+e.id),t.uppy.emit("thumbnail:generated",t.uppy.getFile(e.id),r)})).catch((function(r){t.uppy.log("[ThumbnailGenerator] Failed thumbnail for "+e.id+":","warning"),t.uppy.log(r,"warning"),t.uppy.emit("thumbnail:error",t.uppy.getFile(e.id),r)})):Promise.resolve()},i.install=function(){this.uppy.on("file-removed",this.onFileRemoved),this.opts.lazy?(this.uppy.on("thumbnail:request",this.onFileAdded),this.uppy.on("thumbnail:cancel",this.onCancelRequest)):(this.uppy.on("file-added",this.onFileAdded),this.uppy.on("restored",this.onRestored)),this.opts.waitForThumbnailsBeforeUpload&&this.uppy.addPreProcessor(this.waitUntilAllProcessed)},i.uninstall=function(){this.uppy.off("file-removed",this.onFileRemoved),this.opts.lazy?(this.uppy.off("thumbnail:request",this.onFileAdded),this.uppy.off("thumbnail:cancel",this.onCancelRequest)):(this.uppy.off("file-added",this.onFileAdded),this.uppy.off("restored",this.onRestored)),this.opts.waitForThumbnailsBeforeUpload&&this.uppy.removePreProcessor(this.waitUntilAllProcessed)},n}(le.Plugin),Fn.VERSION="1.6.7",En),Rn=function(e){if("string"==typeof e){var t=[].slice.call(document.querySelectorAll(e));return t.length>0?t:null}if("object"==typeof e&&se(e))return[e]},Tn=function(e){return Array.prototype.slice.call(e||[],0)},xn=function(e,t){var r=[],n=[];return Tn(e.items).forEach((function(e){var i=e.webkitGetAsEntry();i&&n.push(function e(n){return new Promise((function(i){if(n.isFile)n.file((function(e){var t;e.relativePath=(t=n).fullPath&&t.fullPath!=="/"+t.name?t.fullPath:null,r.push(e),i()}),();else if(n.isDirectory){!function e(t,r,n,i){var o=i.onSuccess;t.readEntries((function(i){var s=[].concat(r,i);i.length?setTimeout((function(){e(t,s,n,{onSuccess:o})}),0):o(s)}),()}(n.createReader(),[],t,{onSuccess:function(t){var r=t.map((function(t){return e(t)}));Promise.all(r).then((function(){return i()}))}})}}))}(i))})),Promise.all(n).then(()},Dn=function(e,t){var r=(void 0===t?{}:t).logDropError,n=void 0===r?function(){}:r;return e.items&&e.items[0]&&"webkitGetAsEntry"in e.items[0]?xn(e,n):e)},Bn=function(e,t){if(t){var r=e.querySelector('[data-uppy-paneltype="'+t+'"]');if(r)return r}return e},In=['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])','area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',"input:not([disabled]):not([inert]):not([aria-hidden])","select:not([disabled]):not([inert]):not([aria-hidden])","textarea:not([disabled]):not([inert]):not([aria-hidden])","button:not([disabled]):not([inert]):not([aria-hidden])",'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])','object:not([tabindex^="-"]):not([inert]):not([aria-hidden])','embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])','[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])','[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];function jn(e,t){var r=t[0];r&&(r.focus(),e.preventDefault())}function Mn(e,t,r){var n=Bn(r,t),i=Tn(n.querySelectorAll(In)),o=i.indexOf(document.activeElement);!n)?jn(e,i):e.shiftKey&&0===o?function(e,t){var r=t[t.length-1];r&&(r.focus(),e.preventDefault())}(e,i):e.shiftKey||o!==i.length-1||jn(e,i)}var Ln=Nn=function(e,t,r){null===t||Mn(e,t,r)},zn={exports:{}};(function(e){!function(e,t){"object"==typeof zn.exports?zn.exports=t():e.ResizeObserver=t()}(this,(function(){"use strict";var t=),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,n=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),i="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(n):o=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,a=),u=l=c=y(0,0,0,0);r h="undefined"!=typeof SVGGraphicsElement?r g=),v=m=),b="undefined"!=typeof WeakMap?new WeakMap:new t,w=return["observe","unobserve","disconnect"].forEach((),void 0!==n.ResizeObserver?n.ResizeObserver:w}))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),zn=zn.exports;var qn={};(function(e){var t=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,u=s||a||Function("return this")(),l=Object.prototype.toString,c=Math.max,p=Math.min,d=function(){return u.Date.now()};=).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});ar Vn,Wn,Xn=function Gn(){return(Gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function $n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Kn=le.Plugin,Yn=zn.default||zn,Jn=Xn.default||Xn;unction Zn(){return h("svg",{"aria-hidden":"true",focusable:"false",width:"30",height:"30",viewBox:"0 0 30 30"},h("path",{d:"M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"}))}var ei,ti,ri=(Wn=Vn=function(e){var t,r;function n(t,r){var n;(n=e.call(this,t,r)||this).setOptions=function(t){e.prototype.setOptions.call($n(n),t),n.i18nInit()},n.i18nInit=function(){n.translator=new A([n.defaultLocale,n.uppy.locale,n.opts.locale]),n.i18n=n.translator.translate.bind(n.translator),n.i18nArray=n.translator.translateArray.bind(n.translator),n.setPluginState()},n.removeTarget=function(e){var t=n.getPluginState().targets.filter(();n.setPluginState({targets:t})},n.addTarget=function(e){var t=e.id||e.constructor.name,r=e.title||t,i=e.type;if("acquirer"===i||"progressindicator"===i||"editor"===i){var o={id:t,name:r,type:i},s=n.getPluginState().targets.slice();return s.push(o),n.setPluginState({targets:s}),n.el}n.uppy.log("Dashboard: can only be targeted by plugins of types: acquirer, progressindicator, editor","error")},n.hideAllPanels=function(){var e={activePickerPanel:!1,showAddFilesPanel:!1,activeOverlayType:null,fileCardFor:null,showFileEditor:!1},t=n.getPluginState();t.activePickerPanel===e.activePickerPanel&&t.showAddFilesPanel===e.showAddFilesPanel&&t.showFileEditor===e.showFileEditor&&t.activeOverlayType===e.activeOverlayType||(console.log(e),n.setPluginState(e))},n.showPanel=function(e){var t=n.getPluginState().targets.filter(()[0];n.setPluginState({activePickerPanel:t,activeOverlayType:"PickerPanel"})},n.canEditFile=function(e){var t=n.getPluginState().targets;return n._getEditors(t).some(()},n.openFileEditor=function(e){var t=n.getPluginState().targets,r=n._getEditors(t);n.setPluginState({showFileEditor:!0,activeOverlayType:"FileEditor"}),r.forEach(()},n.openModal=function(){var e=Qn(),t=e.promise,r=e.resolve;return n.savedScrollPosition=window.pageYOffset,n.savedActiveElement=document.activeElement,n.opts.disablePageScrollWhenModalOpen&&document.body.classList.add("uppy-Dashboard-isFixed"),n.opts.animateOpenClose&&n.getPluginState().isClosing?n.el.addEventListener("animationend",(function e(){n.setPluginState({isHidden:!1}),n.el.removeEventListener("animationend",e,!1),r()}),!1):(n.setPluginState({isHidden:!1}),r()),n.opts.browserBackButtonClose&&n.updateBrowserHistory(),document.addEventListener("keydown",n.handleKeyDownInModal),n.uppy.emit("dashboard:modal-open"),t},n.closeModal=function(e){void 0===e&&(e={});var t=e.manualClose,r=void 0===t||t,i=n.getPluginState(),o=i.isHidden,s=i.isClosing;if(!o&&!s){var a=Qn(),u=a.promise,l=a.resolve;return n.opts.disablePageScrollWhenModalOpen&&document.body.classList.remove("uppy-Dashboard-isFixed"),n.opts.animateOpenClose?(n.setPluginState({isClosing:!0}),n.el.addEventListener("animationend",(function e(){n.setPluginState({isHidden:!0,isClosing:!1}),n.superFocus.cancel(),n.savedActiveElement.focus(),n.el.removeEventListener("animationend",e,!1),l()}),!1)):(n.setPluginState({isHidden:!0}),n.superFocus.cancel(),n.savedActiveElement.focus(),l()),document.removeEventListener("keydown",n.handleKeyDownInModal),r&&n.opts.browserBackButtonClose&&history.state&&history.state[n.modalName]&&history.go(-1),n.uppy.emit("dashboard:modal-closed"),u}},n.isModalOpen=function(){return!n.getPluginState().isHidden||!1},n.requestCloseModal=function(){return n.opts.onRequestCloseModal?n.opts.onRequestCloseModal():n.closeModal()},n.setDarkModeCapability=function(e){var t=n.uppy.getState().capabilities;n.uppy.setState({capabilities:Gn({},t,{darkMode:e})})},n.handleSystemDarkModeChange=function(e){var t=e.matches;n.uppy.log("[Dashboard] Dark mode is "+(t?"on":"off")),n.setDarkModeCapability(t)},n.toggleFileCard=function(e){e?n.uppy.emit("dashboard:file-edit-start"):n.uppy.emit("dashboard:file-edit-complete"),n.setPluginState({fileCardFor:e||null,activeOverlayType:e?"FileCard":null})},n.toggleAddFilesPanel=function(e){n.setPluginState({showAddFilesPanel:e,activeOverlayType:e?"AddFiles":null})},n.addFiles=function(e){var t=e.map((function(e){return{source:n.id,name:e.name,type:e.type,data:e,meta:{relativePath:e.relativePath||null}}}));try{n.uppy.addFiles(t)}catch(gc){n.uppy.log(gc)}},n.startListeningToResize=function(){n.resizeObserver=new Yn((function(e,t){var r=e[0].contentRect,i=r.width,o=r.height;n.uppy.log("[Dashboard] resized: "+i+" / "+o,"debug"),n.setPluginState({containerWidth:i,containerHeight:o,areInsidesReadyToBeVisible:!0})})),n.resizeObserver.observe(n.el.querySelector(".uppy-Dashboard-inner")),n.makeDashboardInsidesVisibleAnywayTimeout=setTimeout((function(){var e=n.getPluginState(),t=!n.opts.inline&&e.isHidden;e.areInsidesReadyToBeVisible||t||(n.uppy.log("[Dashboard] resize event didn't fire on time: defaulted to mobile layout","debug"),n.setPluginState({areInsidesReadyToBeVisible:!0}))}),1e3)},n.stopListeningToResize=n.recordIfFocusedOnUppyRecently=function(e){n.el.contains(e.target)?n.ifFocusedOnUppyRecently=!0:(n.ifFocusedOnUppyRecently=!1,n.superFocus.cancel())},n.updateBrowserHistory=function(){var e;history.state&&history.state[n.modalName]||history.pushState(Gn({},history.state,((e={})[n.modalName]=!0,e)),""),window.addEventListener("popstate",n.handlePopState,!1)},n.handlePopState=function(e){!n.isModalOpen()||e.state&&e.state[n.modalName]||n.closeModal({manualClose:!1}),!n.isModalOpen()&&e.state&&e.state[n.modalName]&&history.go(-1)},n.handleKeyDownInModal=function(e){27===e.keyCode&&n.requestCloseModal(e),9===e.keyCode&&Ln(e,n.getPluginState().activeOverlayType,n.el)},n.handleClickOutside=n.handlePaste=function(e){n.uppy.iteratePlugins((function(t){"acquirer"===t.type&&t.handleRootPaste&&t.handleRootPaste(e)}));var t=Tn(e.clipboardData.files);n.addFiles(t)},n.handleInputChange=function(e){e.preventDefault();var t=Tn(e.target.files);n.addFiles(t)},n.handleDragOver=function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",clearTimeout(n.removeDragOverClassTimeout),n.setPluginState({isDraggingOver:!0})},n.handleDragLeave=function(e){e.preventDefault(),e.stopPropagation(),clearTimeout(n.removeDragOverClassTimeout),n.removeDragOverClassTimeout=setTimeout((function(){n.setPluginState({isDraggingOver:!1})}),50)},n.handleDrop=function(e,t){e.preventDefault(),e.stopPropagation(),clearTimeout(n.removeDragOverClassTimeout),n.setPluginState({isDraggingOver:!1}),n.uppy.iteratePlugins(();var r=!1;Dn(e.dataTransfer,{logDropError:function(e){n.uppy.log(e,"error"),r||(n.uppy.info(e.message,"error"),r=!0)}}).then((function(e){e.length>0&&(n.uppy.log("[Dashboard] Files were dropped"),n.addFiles(e))}))},n.handleRequestThumbnail=function(e){n.opts.waitForThumbnailsBeforeUpload||n.uppy.emit("thumbnail:request",e)},n.handleCancelThumbnail=function(e){n.opts.waitForThumbnailsBeforeUpload||n.uppy.emit("thumbnail:cancel",e)},n.handleKeyDownInInline=function(e){9===e.keyCode&&Nn(e,n.getPluginState().activeOverlayType,n.el)},n.handlePasteOnBody=n.handleComplete=function(e){var t=e.failed;e.uploadID,n.opts.closeAfterFinish&&0===t.length&&n.requestCloseModal()},n.initEvents=function(){if(n.opts.trigger&&!n.opts.inline){var e=Rn(n.opts.trigger);e?e.forEach((function(e){return e.addEventListener("click",n.openModal)})):n.uppy.log("Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself","warning")}n.startListeningToResize(),document.addEventListener("paste",n.handlePasteOnBody),n.uppy.on("plugin-remove",n.removeTarget),n.uppy.on("file-added",n.hideAllPanels),n.uppy.on("dashboard:modal-closed",n.hideAllPanels),n.uppy.on("file-editor:complete",n.hideAllPanels),n.uppy.on("complete",n.handleComplete),document.addEventListener("focus",n.recordIfFocusedOnUppyRecently,!0),document.addEventListener("click",n.recordIfFocusedOnUppyRecently,!0),n.opts.inline&&n.el.addEventListener("keydown",n.handleKeyDownInInline)},n.removeEvents=function(){var e=Rn(n.opts.trigger);!n.opts.inline&&e&&e.forEach((),n.stopListeningToResize(),document.removeEventListener("paste",n.handlePasteOnBody),window.removeEventListener("popstate",n.handlePopState,!1),n.uppy.off("plugin-remove",n.removeTarget),n.uppy.off("file-added",n.hideAllPanels),n.uppy.off("dashboard:modal-closed",n.hideAllPanels),n.uppy.off("complete",n.handleComplete),document.removeEventListener("focus",n.recordIfFocusedOnUppyRecently),document.removeEventListener("click",n.recordIfFocusedOnUppyRecently),n.opts.inline&&n.el.removeEventListener("keydown",n.handleKeyDownInInline)},n.superFocusOnEachUpdate=function(){var e=n.el.contains(document.activeElement),t=document.activeElement===document.body||null===document.activeElement,r=n.uppy.getState().info.isHidden,i=!n.opts.inline;r&&(i||e||t&&n.ifFocusedOnUppyRecently)?n.superFocus(n.el,n.getPluginState().activeOverlayType):n.superFocus.cancel()},n.afterUpdate=function(){n.superFocusOnEachUpdate()},n.cancelUpload=n.saveFileCard=n._attachRenderFunctionToTarget=function(e){var t=n.uppy.getPlugin(e.id);return Gn({},e,{icon:t.icon||n.opts.defaultPickerIcon,render:t.render})},n._isTargetSupported=function(e){var t=n.uppy.getPlugin(e.id);return"function"!=typeof t.isSupported||t.isSupported()},n._getAcquirers=Jn((function(e){return e.filter(().map(n._attachRenderFunctionToTarget)})),n._getProgressIndicators=Jn((function(e){return e.filter((function(e){return"progressindicator"===e.type})).map(n._attachRenderFunctionToTarget)})),n._getEditors=Jn((function(e){return e.filter((function(e){return"editor"===e.type})).map(n._attachRenderFunctionToTarget)})),n.render=function(e){var t,r=n.getPluginState(),i=e.files,o=e.capabilities,s=e.allowNewUpload,a=Object.keys(i).filter((),u=Object.keys(i).filter((function(e){return i[e].progress.uploadStarted})),l=Object.keys(i).filter((function(e){return i[e].isPaused})),c=Object.keys(i).filter((),p=Object.keys(i).filter((function(e){return i[e].error})),d=Object.keys(i).filter((function(e){return!i[e].progress.uploadComplete&&i[e].progress.uploadStarted})),h=d.filter((),f=Object.keys(i).filter((),y=u.length>0,g=100===e.totalProgress&&c.length===Object.keys(i).length&&0===f.length,v=y&&p.length===u.length,m=0!==d.length&&l.length===d.length,b=n._getAcquirers(r.targets),w=n._getProgressIndicators(r.targets),_=n._getEditors(r.targets);return t="auto"===n.opts.theme?o.darkMode?"dark":"light":n.opts.theme,["files","folders","both"].indexOf(n.opts.fileManagerSelectionType)<0&&(n.opts.fileManagerSelectionType="files",console.error('Unsupported option for "fileManagerSelectionType". Using default of "'+n.opts.fileManagerSelectionType+'".')),function(e){var t=0===e.totalFileCount,r=e.containerWidth>576,n=qe({"uppy-Root":e.isTargetDOMEl,"uppy-Dashboard":!0,"uppy-Dashboard--animateOpenClose":e.animateOpenClose,"uppy-Dashboard--isClosing":e.isClosing,"uppy-Dashboard--isDraggingOver":e.isDraggingOver,"uppy-Dashboard--modal":!e.inline,"uppy-size--md":e.containerWidth>576,"uppy-size--lg":e.containerWidth>700,"uppy-size--xl":e.containerWidth>900,"uppy-size--height-md":e.containerHeight>400,"uppy-Dashboard--isAddFilesPanelVisible":e.showAddFilesPanel,"uppy-Dashboard--isInnerWrapVisible":e.areInsidesReadyToBeVisible}),i=1;e.containerWidth>900?i=5:e.containerWidth>700?i=4:e.containerWidth>576&&(i=3);var o=e.showSelectedFiles&&!t;return xr("div",{class:n,"data-uppy-theme":e.theme,"data-uppy-num-acquirers":e.acquirers.length,"data-uppy-drag-drop-supported":Rr(),"aria-hidden":e.inline?"false":e.isHidden,"aria-label":e.inline?e.i18n("dashboardTitle"):e.i18n("dashboardWindowTitle"),onpaste:e.handlePaste,onDragOver:e.handleDragOver,onDragLeave:e.handleDragLeave,onDrop:e.handleDrop},xr("div",{class:"uppy-Dashboard-overlay",tabindex:-1,onclick:e.handleClickOutside}),xr("div",{class:"uppy-Dashboard-inner","aria-modal":!e.inline&&"true",role:!e.inline&&"dialog",style:{width:e.inline&&e.width?e.width:"",height:e.inline&&e.height?e.height:""}},e.inline?null:xr("button",{class:"uppy-u-reset uppy-Dashboard-close",type:"button","aria-label":e.i18n("closeModal"),title:e.i18n("closeModal"),onclick:e.closeModal},xr("span",{"aria-hidden":"true"},"\xd7")),xr("div",{class:"uppy-Dashboard-innerWrap"},xr("div",{class:"uppy-Dashboard-dropFilesHereHint"},e.i18n("dropHint")),o&&xr(kr,e),o?xr(ir,Tr({},e,{itemsPerRow:i})):xr(sr,Tr({},e,{isSizeMD:r})),xr(Ur,null,e.showAddFilesPanel?xr(ur,Tr({key:"AddFiles"},e,{isSizeMD:r})):null),xr(Ur,null,e.fileCardFor?xr(Ar,Tr({key:"FileCard"},e)):null),xr(Ur,null,e.activePickerPanel?xr(pr,Tr({key:"Picker"},e)):null),xr(Ur,null,e.showFileEditor?xr(hr,Tr({key:"Editor"},e)):null),xr("div",{class:"uppy-Dashboard-progressindicators"},e.progressindicators.map(()))))}({state:e,isHidden:r.isHidden,files:i,newFiles:a,uploadStartedFiles:u,completeFiles:c,erroredFiles:p,inProgressFiles:d,inProgressNotPausedFiles:h,processingFiles:f,isUploadStarted:y,isAllComplete:g,isAllErrored:v,isAllPaused:m,totalFileCount:Object.keys(i).length,totalProgress:e.totalProgress,allowNewUpload:s,acquirers:b,theme:t,activePickerPanel:r.activePickerPanel,showFileEditor:r.showFileEditor,animateOpenClose:n.opts.animateOpenClose,isClosing:r.isClosing,getPlugin:n.uppy.getPlugin,progressindicators:w,editors:_,autoProceed:n.uppy.opts.autoProceed,id:n.id,closeModal:n.requestCloseModal,handleClickOutside:n.handleClickOutside,handleInputChange:n.handleInputChange,handlePaste:n.handlePaste,inline:n.opts.inline,showPanel:n.showPanel,hideAllPanels:n.hideAllPanels,log:n.uppy.log,i18n:n.i18n,i18nArray:n.i18nArray,removeFile:n.uppy.removeFile,uppy:n.uppy,info:n.uppy.info,note:n.opts.note,metaFields:r.metaFields,resumableUploads:o.resumableUploads||!1,individualCancellation:o.individualCancellation,isMobileDevice:o.isMobileDevice,pauseUpload:n.uppy.pauseResume,retryUpload:n.uppy.retryUpload,cancelUpload:n.cancelUpload,cancelAll:n.uppy.cancelAll,fileCardFor:r.fileCardFor,toggleFileCard:n.toggleFileCard,toggleAddFilesPanel:n.toggleAddFilesPanel,showAddFilesPanel:r.showAddFilesPanel,saveFileCard:n.saveFileCard,openFileEditor:n.openFileEditor,canEditFile:n.canEditFile,width:n.opts.width,height:n.opts.height,showLinkToFileUploadResult:n.opts.showLinkToFileUploadResult,fileManagerSelectionType:n.opts.fileManagerSelectionType,proudlyDisplayPoweredByUppy:n.opts.proudlyDisplayPoweredByUppy,hideCancelButton:n.opts.hideCancelButton,hideRetryButton:n.opts.hideRetryButton,hidePauseResumeButton:n.opts.hidePauseResumeButton,showRemoveButtonAfterComplete:n.opts.showRemoveButtonAfterComplete,containerWidth:r.containerWidth,containerHeight:r.containerHeight,areInsidesReadyToBeVisible:r.areInsidesReadyToBeVisible,isTargetDOMEl:n.isTargetDOMEl,parentElement:n.el,allowedFileTypes:n.uppy.opts.restrictions.allowedFileTypes,maxNumberOfFiles:n.uppy.opts.restrictions.maxNumberOfFiles,showSelectedFiles:n.opts.showSelectedFiles,handleRequestThumbnail:n.handleRequestThumbnail,handleCancelThumbnail:n.handleCancelThumbnail,isDraggingOver:r.isDraggingOver,handleDragOver:n.handleDragOver,handleDragLeave:n.handleDragLeave,handleDrop:n.handleDrop})},n.discoverProviderPlugins=function(){n.uppy.iteratePlugins((function(e){e&&!e.target&&e.opts&&e.opts.target===n.constructor&&n.addTarget(e)}))},n.install=function(){n.setPluginState({isHidden:!0,fileCardFor:null,activeOverlayType:null,showAddFilesPanel:!1,activePickerPanel:!1,showFileEditor:!1,metaFields:n.opts.metaFields,targets:[],areInsidesReadyToBeVisible:!1,isDraggingOver:!1});var e=n.opts,t=e.inline,r=e.closeAfterFinish;if(t&&r)throw new Error("[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.");n.uppy.opts.allowMultipleUploads&&r&&n.uppy.log("[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploads` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true","warning");var i=n.opts.target;i&&n.mount(i,$n(n)),(n.opts.plugins||[]).forEach((function(e){var t=n.uppy.getPlugin(e);t&&t.mount($n(n),t)})),n.opts.disableStatusBar||n.uppy.use(un,{id:n.id+":StatusBar",target:$n(n),hideUploadButton:n.opts.hideUploadButton,hideRetryButton:n.opts.hideRetryButton,hidePauseResumeButton:n.opts.hidePauseResumeButton,hideCancelButton:n.opts.hideCancelButton,showProgressDetails:n.opts.showProgressDetails,hideAfterFinish:n.opts.hideProgressAfterFinish,locale:n.opts.locale}),n.opts.disableInformer||n.uppy.use(dn,{id:n.id+":Informer",target:$n(n)}),n.opts.disableThumbnailGenerator||n.uppy.use(Un,{id:n.id+":ThumbnailGenerator",thumbnailWidth:n.opts.thumbnailWidth,waitForThumbnailsBeforeUpload:n.opts.waitForThumbnailsBeforeUpload,lazy:!n.opts.waitForThumbnailsBeforeUpload}),n.darkModeMediaQuery="undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;var o=!!n.darkModeMediaQuery&&n.darkModeMediaQuery.matches;n.uppy.log("[Dashboard] Dark mode is "+(o?"on":"off")),n.setDarkModeCapability(o),"auto"===n.opts.theme&&n.darkModeMediaQuery.addListener(n.handleSystemDarkModeChange),n.discoverProviderPlugins(),n.initEvents()},n.uninstall=function(){if(!n.opts.disableInformer){var e=n.uppy.getPlugin(n.id+":Informer");e&&n.uppy.removePlugin(e)}if(!n.opts.disableStatusBar){var t=n.uppy.getPlugin(n.id+":StatusBar");t&&n.uppy.removePlugin(t)}if(!n.opts.disableThumbnailGenerator){var r=n.uppy.getPlugin(n.id+":ThumbnailGenerator");r&&n.uppy.removePlugin(r)}(n.opts.plugins||[]).forEach((),"auto"===n.opts.theme&&n.darkModeMediaQuery.removeListener(n.handleSystemDarkModeChange),n.unmount(),n.removeEvents()},n.id=n.opts.id||"Dashboard",n.title="Dashboard",n.type="orchestrator",n.modalName="uppy-Dashboard-"+I(),n.defaultLocale={strings:{closeModal:"Close Modal",importFrom:"Import from %{name}",addingMoreFiles:"Adding more files",addMoreFiles:"Add more files",dashboardWindowTitle:"File Uploader Window (Press escape to close)",dashboardTitle:"File Uploader",copyLinkToClipboardSuccess:"Link copied to clipboard",copyLinkToClipboardFallback:"Copy the URL below",copyLink:"Copy link",fileSource:"File source: %{name}",done:"Done",back:"Back",addMore:"Add more",removeFile:"Remove file",editFile:"Edit file",editing:"Editing %{file}",finishEditingFile:"Finish editing file",saveChanges:"Save changes",cancel:"Cancel",myDevice:"My Device",dropPasteFiles:"Drop files here, paste or %{browseFiles}",dropPasteFolders:"Drop files here, paste or %{browseFolders}",dropPasteBoth:"Drop files here, paste, %{browseFiles} or %{browseFolders}",dropPasteImportFiles:"Drop files here, paste, %{browseFiles} or import from:",dropPasteImportFolders:"Drop files here, paste, %{browseFolders} or import from:",dropPasteImportBoth:"Drop files here, paste, %{browseFiles}, %{browseFolders} or import from:",dropHint:"Drop your files here",browseFiles:"browse files",browseFolders:"browse folders",uploadComplete:"Upload complete",uploadPaused:"Upload paused",resumeUpload:"Resume upload",pauseUpload:"Pause upload",retryUpload:"Retry upload",cancelUpload:"Cancel upload",xFilesSelected:{0:"%{smart_count} file selected",1:"%{smart_count} files selected"},uploadingXFiles:{0:"Uploading %{smart_count} file",1:"Uploading %{smart_count} files"},processingXFiles:{0:"Processing %{smart_count} file",1:"Processing %{smart_count} files"},poweredBy2:"%{backwardsCompat} %{uppy}",poweredBy:"Powered by"}};var i,o={target:"body",metaFields:[],trigger:"#uppy-select-files",inline:!1,width:750,height:550,thumbnailWidth:280,waitForThumbnailsBeforeUpload:!1,defaultPickerIcon:Zn,showLinkToFileUploadResult:!0,showProgressDetails:!1,hideUploadButton:!1,hideCancelButton:!1,hideRetryButton:!1,hidePauseResumeButton:!1,hideProgressAfterFinish:!1,note:null,closeModalOnClickOutside:!1,closeAfterFinish:!1,disableStatusBar:!1,disableInformer:!1,disableThumbnailGenerator:!1,disablePageScrollWhenModalOpen:!0,animateOpenClose:!0,fileManagerSelectionType:"files",proudlyDisplayPoweredByUppy:!0,onRequestCloseModal:function(){return n.closeModal()},showSelectedFiles:!0,showRemoveButtonAfterComplete:!1,browserBackButtonClose:!1,theme:"light"};return n.opts=Gn({},o,r),n.i18nInit(),n.superFocus=(i=!1,qn((function(e,t){var r=Bn(e,t),n=r.contains(document.activeElement);if(!n||!i){var o=r.querySelector("[data-uppy-super-focusable]");if(!n||o)if(o)o.focus({preventScroll:!0}),i=!0;else{var s=r.querySelector(In);s&&s.focus({preventScroll:!0}),i=!1}}}),260)),n.ifFocusedOnUppyRecently=!1,n.makeDashboardInsidesVisibleAnywayTimeout=null,n.removeDragOverClassTimeout=null,n}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n}(Kn),Vn.VERSION="1.12.7",Wn);function ni(){return(ni=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ii(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var oi,si,ai=le.Plugin,ui=oe.h,li=(ti=ei=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).type="acquirer",n.id=n.opts.id||"DragDrop",n.title="Drag & Drop",n.defaultLocale={strings:{dropHereOr:"Drop files here or %{browse}",browse:"browse"}},n.opts=ni({},{target:null,inputName:"files[]",width:"100%",height:"100%",note:null},r),n.isDragDropSupported=Rr(),n.removeDragOverClassTimeout=null,n.i18nInit(),n.onInputChange=n.onInputChange.bind(ii(n)),n.handleDragOver=n.handleDragOver.bind(ii(n)),n.handleDragLeave=n.handleDragLeave.bind(ii(n)),n.handleDrop=n.handleDrop.bind(ii(n)),n.addFiles=n.addFiles.bind(ii(n)),n.render=n.render.bind(ii(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.setOptions=function(t){e.prototype.setOptions.call(this,t),this.i18nInit()},i.i18nInit=function(){this.translator=new A([this.defaultLocale,this.uppy.locale,this.opts.locale]),this.i18n=this.translator.translate.bind(this.translator),this.i18nArray=this.translator.translateArray.bind(this.translator),this.setPluginState()},i.addFiles=function(e){var t=this,r=e.map((function(e){return{source:t.id,name:e.name,type:e.type,data:e,meta:{relativePath:e.relativePath||null}}}));try{this.uppy.addFiles(r)}catch(gc){this.uppy.log(gc)}},i.onInputChange=function(e){this.uppy.log("[DragDrop] Files selected through input");var t=Tn(e.target.files);this.addFiles(t),e.target.value=null},i.handleDrop=function(e,t){var r=this;e.preventDefault(),e.stopPropagation(),clearTimeout(this.removeDragOverClassTimeout),this.setPluginState({isDraggingOver:!1}),this.uppy.log("[DragDrop] Files were dropped"),Dn(e.dataTransfer,{logDropError:).then((function(e){return r.addFiles(e)}))},i.handleDragOver=function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",clearTimeout(this.removeDragOverClassTimeout),this.setPluginState({isDraggingOver:!0})},i.handleDragLeave=function(e){var t=this;e.preventDefault(),e.stopPropagation(),clearTimeout(this.removeDragOverClassTimeout),this.removeDragOverClassTimeout=setTimeout((,50)},i.renderHiddenFileInput=function(){var e=this,t=this.uppy.opts.restrictions;return ui("input",{class:"uppy-DragDrop-input",type:"file",hidden:!0,ref:function(t){e.fileInputRef=t},name:this.opts.inputName,multiple:1!==t.maxNumberOfFiles,accept:t.allowedFileTypes,onchange:this.onInputChange})},i.renderArrowSvg=function(){return ui("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon uppy-DragDrop-arrow",width:"16",height:"16",viewBox:"0 0 16 16"},ui("path",{d:"M11 10V0H5v10H2l6 6 6-6h-3zm0 0","fill-rule":"evenodd"}))},i.renderLabel=function(){return ui("div",{class:"uppy-DragDrop-label"},this.i18nArray("dropHereOr",{browse:ui("span",{class:"uppy-DragDrop-browse"},this.i18n("browse"))}))},i.renderNote=function(){return ui("span",{class:"uppy-DragDrop-note"},this.opts.note)},i.render=function(e){var t=this,r="uppy-Root\n      uppy-u-reset\n      uppy-DragDrop-container\n      "+(this.isDragDropSupported?"uppy-DragDrop--isDragDropSupported":"")+"\n      "+(this.getPluginState().isDraggingOver?"uppy-DragDrop--isDraggingOver":"")+"\n    ",n={width:this.opts.width,height:this.opts.height};return ui("button",{type:"button",class:r,style:n,onClick:onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop},this.renderHiddenFileInput(),ui("div",{class:"uppy-DragDrop-inner"},this.renderArrowSvg(),this.renderLabel(),this.renderNote()))},i.install=function(){this.setPluginState({isDraggingOver:!1});var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=function(){this.unmount()},n}(ai),ei.VERSION="1.4.19",ti);function ci(){return(ci=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function pi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var di,hi,fi=le.Plugin,yi=oe.h,gi=(si=oi=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).id=n.opts.id||"FileInput",n.title="File Input",n.type="acquirer",n.defaultLocale={strings:{chooseFiles:"Choose files"}},n.opts=ci({},{target:null,pretty:!0,inputName:"files[]"},r),n.i18nInit(),n.render=n.render.bind(pi(n)),n.handleInputChange=n.handleInputChange.bind(pi(n)),n.handleClick=n.handleClick.bind(pi(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.setOptions=function(t){e.prototype.setOptions.call(this,t),this.i18nInit()},i.i18nInit=function(){this.translator=new A([this.defaultLocale,this.uppy.locale,this.opts.locale]),this.i18n=this.translator.translate.bind(this.translator),this.i18nArray=this.translator.translateArray.bind(this.translator),this.setPluginState()},i.addFiles=function(e){var t=this,r=e.map(();try{this.uppy.addFiles(r)}catch(gc){this.uppy.log(gc)}},i.handleInputChange=function(e){this.uppy.log("[FileInput] Something selected through input...");var t=Tn(e.target.files);this.addFiles(t),e.target.value=null},i.handleClick=i.render=function(e){var t=this,r=this.uppy.opts.restrictions,n=r.allowedFileTypes?r.allowedFileTypes.join(","):null;return yi("div",{class:"uppy-Root uppy-FileInput-container"},yi("input",{class:"uppy-FileInput-input",style:this.opts.pretty&&{width:"0.1px",height:"0.1px",opacity:0,overflow:"hidden",position:"absolute",zIndex:-1},type:"file",name:this.opts.inputName,onchange:this.handleInputChange,multiple:1!==r.maxNumberOfFiles,accept:n,ref:function(e){t.input=e}}),this.opts.pretty&&yi("button",{class:"uppy-FileInput-btn",type:"button",onclick:this.handleClick},this.i18n("chooseFiles")))},i.install=function(){var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=function(){this.unmount()},n}(fi),oi.VERSION="1.4.17",si);function vi(){return(vi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var mi,bi,wi=le.Plugin,_i=oe.h,Si=(hi=di=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).id=n.opts.id||"ProgressBar",n.title="Progress Bar",n.type="progressindicator",n.opts=vi({},{target:"body",replaceTargetContent:!1,fixed:!1,hideAfterFinish:!0},r),n.render=n.render.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.render=function(e){var t=e.totalProgress||0,r=(0===t||100===t)&&this.opts.hideAfterFinish;return _i("div",{class:"uppy uppy-ProgressBar",style:{position:this.opts.fixed?"fixed":"initial"},"aria-hidden":r},_i("div",{class:"uppy-ProgressBar-inner",style:{width:t+"%"}}),_i("div",{class:"uppy-ProgressBar-percentage"},t))},i.install=function(){var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=function(){this.unmount()},n}(wi),di.VERSION="1.3.19",hi);function ki(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Pi,Ci,Ai=le.Plugin,Fi=Le.Provider,Ei=oe.h,Oi=(bi=mi=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).id=n.opts.id||"Dropbox",Fi.initPlugin(ki(n),r),n.title=n.opts.title||"Dropbox",n.icon=function(){return Ei("svg",{"aria-hidden":"true",focusable:"false",width:"32",height:"32",viewBox:"0 0 32 32"},Ei("g",{fill:"none","fill-rule":"evenodd"},Ei("rect",{fill:"#0D2481",width:"32",height:"32",rx:"16"}),Ei("path",{d:"M11 8l5 3.185-5 3.186-5-3.186L11 8zm10 0l5 3.185-5 3.186-5-3.186L21 8zM6 17.556l5-3.185 5 3.185-5 3.186-5-3.186zm15-3.185l5 3.185-5 3.186-5-3.186 5-3.185zm-10 7.432l5-3.185 5 3.185-5 3.186-5-3.186z",fill:"#FFF","fill-rule":"nonzero"})))},n.provider=new Fi(t,{companionUrl:n.opts.companionUrl,companionHeaders:n.opts.companionHeaders||n.opts.serverHeaders,provider:"dropbox",pluginId:n.id}),n.onFirstRender=n.onFirstRender.bind(ki(n)),n.render=n.render.bind(ki(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.install=function(){this.view=new Pt(this,{provider:this.provider});var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=function(){this.view.tearDown(),this.unmount()},i.onFirstRender=function(){return this.view.getFolder()},i.render=function(e){return this.view.render(e)},n}(Ai),mi.VERSION="1.4.15",bi),Ui=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.toggleCheckbox=function(t,r){t.stopPropagation(),t.preventDefault(),r.custom.isTeamDrive||r.custom.isSharedDrive||e.prototype.toggleCheckbox.call(this,t,r)},n}(Pt);function Ri(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ti,xi,Di=le.Plugin,Bi=Le.Provider,Ii=oe.h,ji=(Ci=Pi=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).id=n.opts.id||"GoogleDrive",n.title=n.opts.title||"Google Drive",Bi.initPlugin(Ri(n),r),n.title=n.opts.title||"Google Drive",n.icon=function(){return Ii("svg",{"aria-hidden":"true",focusable:"false",width:"32",height:"32",viewBox:"0 0 32 32"},Ii("g",{fill:"none","fill-rule":"evenodd"},Ii("rect",{fill:"#4285F4",width:"32",height:"32",rx:"16"}),Ii("path",{d:"M10.324 23.3l3-5.1H25l-3 5.1H10.324zM13 18.2l-3 5.1-3-5.1 5.839-9.924 2.999 5.1L13 18.2zm11.838-.276h-6L13 8h6l5.84 9.924h-.002z",fill:"#FFF"})))},n.provider=new Bi(t,{companionUrl:n.opts.companionUrl,companionHeaders:n.opts.companionHeaders||n.opts.serverHeaders,provider:"drive",pluginId:n.id}),n.onFirstRender=n.onFirstRender.bind(Ri(n)),n.render=n.render.bind(Ri(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.install=function(){this.view=new Ui(this,{provider:this.provider});var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=function(){this.view.tearDown(),this.unmount()},i.onFirstRender=i.render=function(e){return this.view.render(e)},n}(Di),Pi.VERSION="1.5.15",Ci);function Mi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Li,Ni,zi=le.Plugin,qi=Le.Provider,Hi=oe.h,Vi=(xi=Ti=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).id=n.opts.id||"Instagram",qi.initPlugin(Mi(n),r),n.title=n.opts.title||"Instagram",n.icon=function(){return Hi("svg",{"aria-hidden":"true",focusable:"false",width:"32",height:"32",viewBox:"0 0 32 32"},Hi("g",{fill:"none","fill-rule":"evenodd"},Hi("rect",{fill:"#E1306C",width:"32",height:"32",rx:"16"}),Hi("path",{d:"M16 8.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.392.144.745.374 1.036.673.299.29.529.644.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671a2.98 2.98 0 0 1-1.708 1.708c-.317.123-.794.27-1.671.31-.95.043-1.234.053-3.637.053s-2.688-.01-3.637-.053c-.877-.04-1.354-.187-1.671-.31a2.788 2.788 0 0 1-1.035-.673 2.788 2.788 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.949-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.144-.392.374-.745.673-1.036.29-.299.644-.529 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052zM16 7c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.419-.6.225-1.145.58-1.594 1.038-.458.45-.813.993-1.039 1.594-.222.572-.374 1.226-.418 2.184C7.01 13.25 7 13.556 7 16s.01 2.75.054 3.71c.044.959.196 1.613.419 2.185.226.6.58 1.145 1.038 1.594.45.458.993.813 1.594 1.038.572.223 1.227.375 2.184.419.96.044 1.267.054 3.711.054s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.602 4.602 0 0 0 2.632-2.632c.223-.572.375-1.226.419-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 23.49 8.51a4.412 4.412 0 0 0-1.594-1.039c-.572-.222-1.226-.374-2.184-.418C18.75 7.01 18.444 7 16 7zm0 4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.421a2.921 2.921 0 1 1 0-5.842 2.921 2.921 0 0 1 0 5.842zm4.875-6.671a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25z",fill:"#FFF"})))},n.provider=new qi(t,{companionUrl:n.opts.companionUrl,companionHeaders:n.opts.companionHeaders||n.opts.serverHeaders,provider:"instagram",pluginId:n.id}),n.onFirstRender=n.onFirstRender.bind(Mi(n)),n.render=n.render.bind(Mi(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.install=function(){this.view=new Pt(this,{provider:this.provider,viewType:"grid",showTitles:!1,showFilter:!1,showBreadcrumbs:!1});var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=function(){this.view.tearDown(),this.unmount()},i.onFirstRender=i.render=function(e){return this.view.render(e)},n}(zi),Ti.VERSION="1.4.15",xi);function Wi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Xi,Gi,$i=le.Plugin,Ki=Le.Provider,Yi=oe.h,Ji=(Ni=Li=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).id=n.opts.id||"OneDrive",Ki.initPlugin(Wi(n),r),n.title=n.opts.title||"OneDrive",n.icon=function(){return Yi("svg",{"aria-hidden":"true",focusable:"false",width:"32",height:"32",viewBox:"0 0 32 32"},Yi("g",{fill:"none","fill-rule":"evenodd"},Yi("rect",{width:"32",height:"32",rx:"16",fill:"#0262C0"}),Yi("g",{fill:"#FFF","fill-rule":"nonzero"},Yi("path",{d:"M24.157 22s1.492-.205 1.79-1.655a2.624 2.624 0 0 0 .03-.878c-.22-1.64-1.988-2.01-1.988-2.01s.307-1.765-1.312-2.69c-1.62-.925-3.1 0-3.1 0S18.711 13 16.366 13c-3.016 0-3.519 3.448-3.519 3.448S10 16.618 10 19.14c0 2.523 2.597 2.86 2.597 2.86h11.56z"}),Yi("path",{d:"M9.421 19.246c0-2.197 1.606-3.159 2.871-3.472.44-1.477 1.654-3.439 4.135-3.439H16.445c1.721 0 2.79.823 3.368 1.476a3.99 3.99 0 0 1 1.147-.171h.01l.03.002C21.017 13.5 20.691 10 16.757 10c-2.69 0-3.639 2.345-3.639 2.345s-1.95-1.482-3.955.567c-1.028 1.052-.79 2.669-.79 2.669S6 15.824 6 18.412C6 20.757 8.452 21 8.452 21h1.372a3.77 3.77 0 0 1-.403-1.754z"}))))},n.provider=new Ki(t,{companionUrl:n.opts.companionUrl,companionHeaders:n.opts.companionHeaders||n.opts.serverHeaders,provider:"onedrive",pluginId:n.id}),n.onFirstRender=n.onFirstRender.bind(Wi(n)),n.render=n.render.bind(Wi(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.install=function(){this.view=new Pt(this,{provider:this.provider});var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=function(){this.view.tearDown(),this.unmount()},i.onFirstRender=function(){return this.view.getFolder()},i.render=n}($i),Li.VERSION="1.1.15",Ni);function Qi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Zi=le.Plugin,eo=Le.Provider,to=oe.h,ro=(Gi=Xi=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).id=n.opts.id||"Facebook",eo.initPlugin(Qi(n),r),n.title=n.opts.title||"Facebook",n.icon=function(){return to("svg",{"aria-hidden":"true",focusable:"false",width:"32",height:"32",viewBox:"0 0 32 32"},to("g",{fill:"none","fill-rule":"evenodd"},to("rect",{width:"32",height:"32",rx:"16",fill:"#3C5A99"}),to("path",{d:"M17.842 26v-8.667h2.653l.398-3.377h-3.051v-2.157c0-.978.248-1.644 1.527-1.644H21V7.132A19.914 19.914 0 0 0 18.623 7c-2.352 0-3.963 1.574-3.963 4.465v2.49H12v3.378h2.66V26h3.182z",fill:"#FFF","fill-rule":"nonzero"})))},n.provider=new eo(t,{companionUrl:n.opts.companionUrl,companionHeaders:n.opts.companionHeaders||n.opts.serverHeaders,provider:"facebook",pluginId:n.id}),n.onFirstRender=n.onFirstRender.bind(Qi(n)),n.render=n.render.bind(Qi(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.install=function(){this.view=new Pt(this,{provider:this.provider});var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=i.onFirstRender=i.render=function(e){var t={};return this.getPluginState().files.length&&!this.getPluginState().folders.length&&(t.viewType="grid",t.showFilter=!1,t.showTitles=!1),this.view.render(e,t)},n}(Zi),Xi.VERSION="1.1.15",Gi);function no(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var io,oo,so=oe.h,ao=function(e){var t,r;=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.componentDidMount=i.handleKeyPress=function(e){13===e.keyCode&&this.props.addFile(this.input.value)},i.handleClick=i.render=function(){var e=this;return so("div",{class:"uppy-Url"},so("input",{class:"uppy-u-reset uppy-c-textInput uppy-Url-input",type:"text","aria-label":this.props.i18n("enterUrlToImport"),placeholder:this.props.i18n("enterUrlToImport"),onkeyup:this.handleKeyPress,ref:"data-uppy-super-focusable":!0}),so("button",{class:"uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Url-importButton",type:"button",onclick:this.handleClick},this.props.i18n("import")))},n}(oe.Component),uo=function(e,t,r){var n,i=Tn(e.items);switch(t){case"paste":if(i.some((function(e){return"file"===e.kind})))return;n=i.filter((function(e){return"string"===e.kind&&"text/plain"===e.type}));break;case"drop":n=i.filter(();break;default:throw new Error("isDropOrPaste must be either 'drop' or 'paste', but it's "+t)}n.forEach(()};function lo(){return(lo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function co(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var po=le.Plugin,ho=oe.h,fo=Le.RequestClient;function yo(){return ho("svg",{"aria-hidden":"true",focusable:"false",width:"32",height:"32",viewBox:"0 0 32 32"},ho("g",{fill:"none","fill-rule":"evenodd"},ho("rect",{fill:"#FF753E",width:"32",height:"32",rx:"16"}),ho("path",{d:"M22.788 15.389l-2.199 2.19a3.184 3.184 0 0 1-.513.437c-.806.584-1.686.876-2.638.876a4.378 4.378 0 0 1-3.519-1.752c-.22-.292-.146-.802.147-1.021.293-.22.806-.146 1.026.146.953 1.313 2.785 1.532 4.105.583a.571.571 0 0 0 .293-.292l2.199-2.189c1.1-1.167 1.1-2.992-.073-4.086a2.976 2.976 0 0 0-4.105 0l-1.246 1.24a.71.71 0 0 1-1.026 0 .703.703 0 0 1 0-1.022l1.246-1.24a4.305 4.305 0 0 1 6.083 0c1.833 1.605 1.906 4.451.22 6.13zm-7.183 5.035l-1.246 1.24a2.976 2.976 0 0 1-4.105 0c-1.172-1.094-1.172-2.991-.073-4.086l2.2-2.19.292-.291c.66-.438 1.393-.657 2.2-.584.805.146 1.465.51 1.905 1.168.22.292.733.365 1.026.146.293-.22.367-.73.147-1.022-.733-.949-1.76-1.532-2.859-1.678-1.1-.22-2.272.073-3.225.802l-.44.438-2.199 2.19c-1.686 1.75-1.612 4.524.074 6.202.88.803 1.979 1.241 3.078 1.241 1.1 0 2.199-.438 3.079-1.24l1.246-1.241a.703.703 0 0 0 0-1.022c-.294-.292-.807-.365-1.1-.073z",fill:"#FFF","fill-rule":"nonzero"})))}var go=(oo=io=function(e){var t,r;function n(t,r){var n;if((n=e.call(this,t,r)||this).id=n.opts.id||"Url",n.title=n.opts.title||"Link",n.type="acquirer",n.icon=n.defaultLocale={strings:{import:"Import",enterUrlToImport:"Enter URL to import a file",failedToFetch:"Companion failed to fetch this URL, please make sure it\u2019s correct",enterCorrectUrl:"Incorrect URL: Please make sure you are entering a direct link to a file"}},n.opts=lo({},{},r),n.i18nInit(),n.hostname=n.opts.companionUrl,!n.hostname)throw new Error("Companion hostname is required, please consult https://uppy.io/docs/companion");return n.getMeta=n.getMeta.bind(co(n)),n.addFile=n.addFile.bind(co(n)),n.handleRootDrop=n.handleRootDrop.bind(co(n)),n.handleRootPaste=n.handleRootPaste.bind(co(n)),n.client=new fo(t,{companionUrl:n.opts.companionUrl,companionHeaders:n.opts.companionHeaders||n.opts.serverHeaders}),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.setOptions=i.i18nInit=function(){this.translator=new A([this.defaultLocale,this.uppy.locale,this.opts.locale]),this.i18n=this.translator.translate.bind(this.translator),this.i18nArray=this.translator.translateArray.bind(this.translator),this.setPluginState()},i.getFileNameFromUrl=i.checkIfCorrectURL=function(e){if(!e)return!1;var t=e.match(/^([a-z0-9]+):\/\//)[1];return"http"===t||"https"===t},i.addProtocolToURL=i.getMeta=function(e){var t=this;return this.client.post("url/meta",{url:e}).then((function(e){if(e.error)throw t.uppy.log("[URL] Error:"),t.uppy.log(e.error),new Error("Failed to fetch the file");return e}))},i.addFile=function(e){var t=this;return e=this.addProtocolToURL(e),this.checkIfCorrectURL(e)?this.getMeta(e).then((function(r){return{source:t.id,name:t.getFileNameFromUrl(e),type:r.type,data:{size:r.size},isRemote:!0,body:{url:e},remote:{companionUrl:t.opts.companionUrl,url:t.hostname+"/url/get",body:{fileId:e,url:e},providerOptions:t.client.opts}}})).then((function(e){t.uppy.log("[Url] Adding remote file");try{t.uppy.addFile(e)}catch(gc){gc.isRestriction||t.uppy.log(gc)}})).catch((function(e){t.uppy.log(e),t.uppy.info({message:t.i18n("failedToFetch"),details:e},"error",4e3)})):(this.uppy.log("[URL] Incorrect URL entered: "+e),void this.uppy.info(this.i18n("enterCorrectUrl"),"error",4e3))},i.handleRootDrop=function(e){var t=this;uo(e.dataTransfer,"drop",(function(e){t.uppy.log("[URL] Adding file from dropped url: "+e),t.addFile(e)}))},i.handleRootPaste=function(e){var t=this;uo(e.clipboardData,"paste",()},i.render=i.install=function(){var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=n}(po),io.VERSION="1.5.11",oo),vo={"audio/mp3":"mp3","audio/ogg":"ogg","audio/webm":"webm","image/gif":"gif","image/heic":"heic","image/heif":"heif","image/jpeg":"jpg","image/png":"png","image/svg+xml":"svg","video/mp4":"mp4","video/ogg":"ogv","video/quicktime":"mov","video/webm":"webm","video/x-matroska":"mkv","video/x-msvideo":"avi"},mo=function(e){return e=e.replace(/;.*$/,""),vo[e]||null},bo=oe.h,wo=function(e){return bo("svg",{"aria-hidden":"true",focusable:"false",fill:"#0097DC",width:"66",height:"55",viewBox:"0 0 66 55"},bo("path",{d:"M57.3 8.433c4.59 0 8.1 3.51 8.1 8.1v29.7c0 4.59-3.51 8.1-8.1 8.1H8.7c-4.59 0-8.1-3.51-8.1-8.1v-29.7c0-4.59 3.51-8.1 8.1-8.1h9.45l4.59-7.02c.54-.54 1.35-1.08 2.16-1.08h16.2c.81 0 1.62.54 2.16 1.08l4.59 7.02h9.45zM33 14.64c-8.62 0-15.393 6.773-15.393 15.393 0 8.62 6.773 15.393 15.393 15.393 8.62 0 15.393-6.773 15.393-15.393 0-8.62-6.773-15.393-15.393-15.393zM33 40c-5.648 0-9.966-4.319-9.966-9.967 0-5.647 4.318-9.966 9.966-9.966s9.966 4.319 9.966 9.966C42.966 35.681 38.648 40 33 40z","fill-rule":"evenodd"}))},_o=oe.h,So=oe.h,ko=oe.h,Po=function(e){var t,r=e.recordingLengthSeconds,n=e.i18n,i=(t=r,Math.floor(t/60)+":"+String(t%60).padStart(2,0));return ko("div",{class:"uppy-Webcam-recordingLength","aria-label":n("recordingLength",{recording_length:i})},i)},Co=oe.h;ar Fo,Eo,Oo=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.componentDidMount=function(){this.props.onFocus()},i.componentWillUnmount=i.render=function(){var e,t,r,n=this.props.supportsRecording&&(Ao(this.props.modes,"video-only")||Ao(this.props.modes,"audio-only")||Ao(this.props.modes,"video-audio")),i=Ao(this.props.modes,"picture"),o=this.props.supportsRecording&&this.props.showRecordingLength;return Co("div",{class:"uppy uppy-Webcam-container"},Co("div",{class:"uppy-Webcam-videoContainer"},Co("video",{class:"uppy-Webcam-video  "+(this.props.mirror?"uppy-Webcam-video--mirrored":""),autoplay:!0,muted:!0,playsinline:!0,srcObject:this.props.src||""})),Co("div",{class:"uppy-Webcam-buttonContainer"},o?Po(this.props):null," ",i?(e=this.props,t=e.onSnapshot,r=e.i18n,_o("button",{class:"uppy-u-reset uppy-c-btn uppy-Webcam-button uppy-Webcam-button--picture",type:"button",title:r("takePicture"),"aria-label":r("takePicture"),onclick:t,"data-uppy-super-focusable":!0},wo())):null," ",n?function(e){var t=e.recording,r=e.onStartRecording,n=e.onStopRecording,i=e.i18n;return t?So("button",{class:"uppy-u-reset uppy-c-btn uppy-Webcam-button uppy-Webcam-button--video",type:"button",title:i("stopRecording"),"aria-label":i("stopRecording"),onclick:n,"data-uppy-super-focusable":!0},So("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"100",height:"100",viewBox:"0 0 100 100"},So("rect",{x:"15",y:"15",width:"70",height:"70"}))):So("button",{class:"uppy-u-reset uppy-c-btn uppy-Webcam-button uppy-Webcam-button--video",type:"button",title:i("startRecording"),"aria-label":i("startRecording"),onclick:r,"data-uppy-super-focusable":!0},So("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"100",height:"100",viewBox:"0 0 100 100"},So("circle",{cx:"50",cy:"50",r:"40"})))}(this.props):null))},n}(oe.Component),Uo=oe.h,Ro=function(e){return Uo("div",{class:"uppy-Webcam-permissons"},Uo("div",{class:"uppy-Webcam-permissonsIcon"},e.icon()),Uo("h1",{class:"uppy-Webcam-title"},e.hasCamera?e.i18n("allowAccessTitle"):e.i18n("noCameraTitle")),Uo("p",null,e.hasCamera?e.i18n("allowAccessDescription"):e.i18n("noCameraDescription")))};function To(){return(To=Object.assign||.apply(this,arguments)}ar Do=oe.h;function Bo(e){return"."===e[0]?J[e.slice(1)]:e}function Io(e){return/^video\/[^*]+$/.test(e)}ar Mo=(Eo=Fo=function(e){var t,r;function n(t,r){var n;(n=e.call(this,t,r)||this).mediaDevices=function(){if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)return navigator.mediaDevices;var e=navigator.mozGetUserMedia||navigator.webkitGetUserMedia;return e?{getUserMedia:function(t){return new Promise(()}}:null}(),n.supportsUserMedia=!!n.mediaDevices,n.protocol=location.protocol.match(/https/i)?"https":"http",n.id=n.opts.id||"Webcam",n.title=n.opts.title||"Camera",n.type="acquirer",n.icon=function(){return Do("svg",{"aria-hidden":"true",focusable:"false",width:"32",height:"32",viewBox:"0 0 32 32"},Do("g",{fill:"none","fill-rule":"evenodd"},Do("rect",{fill:"#03BFEF",width:"32",height:"32",rx:"16"}),Do("path",{d:"M22 11c1.133 0 2 .867 2 2v7.333c0 1.134-.867 2-2 2H10c-1.133 0-2-.866-2-2V13c0-1.133.867-2 2-2h2.333l1.134-1.733C13.6 9.133 13.8 9 14 9h4c.2 0 .4.133.533.267L19.667 11H22zm-6 1.533a3.764 3.764 0 0 0-3.8 3.8c0 2.129 1.672 3.801 3.8 3.801s3.8-1.672 3.8-3.8c0-2.13-1.672-3.801-3.8-3.801zm0 6.261c-1.395 0-2.46-1.066-2.46-2.46 0-1.395 1.065-2.461 2.46-2.461s2.46 1.066 2.46 2.46c0 1.395-1.065 2.461-2.46 2.461z",fill:"#FFF","fill-rule":"nonzero"})))},n.defaultLocale={strings:{smile:"Smile!",takePicture:"Take a picture",startRecording:"Begin video recording",stopRecording:"Stop video recording",allowAccessTitle:"Please allow access to your camera",allowAccessDescription:"In order to take pictures or record video with your camera, please allow camera access for this site.",noCameraTitle:"Camera Not Available",noCameraDescription:"In order to take pictures or record video, please connect a camera device",recordingStoppedMaxSize:"Recording stopped because the file size is about to exceed the limit",recordingLength:"Recording length %{recording_length}"}};var i={onBeforeSnapshot:countdown:!1,modes:["video-audio","video-only","audio-only","picture"],mirror:!0,facingMode:"user",preferredImageMimeType:null,preferredVideoMimeType:null,showRecordingLength:!1};return n.opts=To({},i,r),n.i18nInit(),n.install=n.install.bind(xo(n)),n.setPluginState=n.setPluginState.bind(xo(n)),n.render=n.render.bind(xo(n)),n._start=n._start.bind(xo(n)),n._stop=n._stop.bind(xo(n)),n._takeSnapshot=n._takeSnapshot.bind(xo(n)),n._startRecording=n._startRecording.bind(xo(n)),n._stopRecording=n._stopRecording.bind(xo(n)),n._oneTwoThreeSmile=n._oneTwoThreeSmile.bind(xo(n)),n._focus=n._focus.bind(xo(n)),n.webcamActive=!1,n.opts.countdown&&(n.opts.onBeforeSnapshot=n._oneTwoThreeSmile),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.setOptions=function(t){e.prototype.setOptions.call(this,To({},t,{videoConstraints:To({},this.opts.videoConstraints,null==t?void 0:t.videoConstraints)})),this.i18nInit()},i.i18nInit=function(){this.translator=new A([this.defaultLocale,this.uppy.locale,this.opts.locale]),this.i18n=this.translator.translate.bind(this.translator),this.i18nArray=this.translator.translateArray.bind(this.translator),this.setPluginState()},i.hasCameraCheck=function(){return this.mediaDevices?this.mediaDevices.enumerateDevices().then(():Promise.resolve(!1)},i.getConstraints=function(){var e,t=-1!==this.opts.modes.indexOf("video-audio")||-1!==this.opts.modes.indexOf("audio-only"),r=-1!==this.opts.modes.indexOf("video-audio")||-1!==this.opts.modes.indexOf("video-only")||-1!==this.opts.modes.indexOf("picture"),n=null!=(e=this.opts.videoConstraints)?e:{facingMode:this.opts.facingMode};return{audio:t,video:!!r&&n}},i._start=function(){var e=this;if(!this.supportsUserMedia)return Promise.reject(new Error("Webcam access not supported"));this.webcamActive=!0;var t=this.getConstraints();this.hasCameraCheck().then((function(r){return e.setPluginState({hasCamera:r}),e.mediaDevices.getUserMedia(t).then(().catch((function(t){e.setPluginState({cameraReady:!1,cameraError:t}),e.uppy.info(t.message,"error")}))}))},i._getMediaRecorderOptions=function(){var e={};if(MediaRecorder.isTypeSupported){var t=this.uppy.opts.restrictions,r=[];this.opts.preferredVideoMimeType?r=[this.opts.preferredVideoMimeType]:t.allowedFileTypes&&(r=t.allowedFileTypes.map(Bo).filter(Io));var n=r.filter(();n.length>0&&(e.mimeType=n[0])}return e},i._startRecording=function(){var e=this;this.recorder=new MediaRecorder(this.stream,this._getMediaRecorderOptions()),this.recordingChunks=[];var t=!1;this.recorder.addEventListener("dataavailable",(function(r){e.recordingChunks.push(r.data);var n=e.uppy.opts.restrictions;if(e.recordingChunks.length>1&&null!=n.maxFileSize&&!t){var i=e.recordingChunks.reduce((,0),o=(i-e.recordingChunks[0].size)/(e.recordingChunks.length-1)*3;i>Math.max(0,n.maxFileSize-o)&&(t=!0,e.uppy.info(e.i18n("recordingStoppedMaxSize"),"warning",4e3),e._stopRecording())}})),this.recorder.start(500),this.opts.showRecordingLength&&(this.recordingLengthTimer=setInterval((function(){var t=e.getPluginState().recordingLengthSeconds;e.setPluginState({recordingLengthSeconds:t+1})}),1e3)),this.setPluginState({isRecording:!0})},i._stopRecording=function(){var e=this;return new Promise((function(t,r){e.recorder.addEventListener("stop",(),e.recorder.stop(),e.opts.showRecordingLength&&(clearInterval(e.recordingLengthTimer),e.setPluginState({recordingLengthSeconds:0}))})).then((function(){return e.setPluginState({isRecording:!1}),e.getVideo()})).then((function(t){try{e.uppy.addFile(t)}catch(gc){gc.isRestriction||e.uppy.log(gc)}})).then((,()},i._stop=function(){this.stream&&(this.stream.getAudioTracks().forEach((function(e){e.stop()})),this.stream.getVideoTracks().forEach(()),this.webcamActive=!1,this.stream=null},i._getVideoElement=i._oneTwoThreeSmile=function(){var e=this;return new Promise((function(t,r){var n=e.opts.countdown,i=setInterval((function(){if(!e.webcamActive)return clearInterval(i),e.captureInProgress=!1,r(new Error("Webcam is not active"));n>0?(e.uppy.info(n+"...","warning",800),n--):(clearInterval(i),e.uppy.info(e.i18n("smile"),"success",1500),setTimeout((,1500))}),1e3)}))},i._takeSnapshot=function(){var e=this;this.captureInProgress||(this.captureInProgress=!0,this.opts.onBeforeSnapshot().catch((function(t){var r="object"==typeof t?t.message:t;return e.uppy.info(r,"error",5e3),Promise.reject(new Error("onBeforeSnapshot: "+r))})).then((function(){return e._getImage()})).then((function(t){e.captureInProgress=!1;try{e.uppy.addFile(t)}catch(gc){gc.isRestriction||e.uppy.log(gc)}}),())},i._getImage=function(){var e=this,t=this._getVideoElement();if(!t)return Promise.reject(new Error("No video element found, likely due to the Webcam tab being closed."));var r=t.videoWidth,n=t.videoHeight,i=document.createElement("canvas");i.width=r,i.height=n,i.getContext("2d").drawImage(t,0,0);var o=this.uppy.opts.restrictions,s=[];this.opts.preferredImageMimeType?s=[this.opts.preferredImageMimeType]:o.allowedFileTypes&&(s=o.allowedFileTypes.map(Bo).filter(jo));var a=s[0]||"image/jpeg",u=mo(a)||"jpg",l="cam-"+Date.now()+"."+u;return function(e,t,r){return e.toBlob?new Promise((function(n){e.toBlob(n,t,r)})):Promise.resolve().then((function(){return hn(e.toDataURL(t,r),{})}))}(i,a).then((function(t){return{source:e.id,name:l,data:new Blob([t],{type:a}),type:a}}))},i.getVideo=function(){var e=this.recordingChunks[0].type,t=mo(e);if(!t)return Promise.reject(new Error('Could not retrieve recording: Unsupported media type "'+e+'"'));var r="webcam-"+Date.now()+"."+t,n=new Blob(this.recordingChunks,{type:e}),i={source:this.id,name:r,data:new Blob([n],{type:e}),type:e};return Promise.resolve(i)},i._focus=function(){var e=this;this.opts.countdown&&setTimeout((function(){e.uppy.info(e.i18n("smile"),"success",1500)}),1e3)},i.render=function(){this.webcamActive||this._start();var e=this.getPluginState();return e.cameraReady&&e.hasCamera?Do(Oo,To({},e,{onSnapshot:this._takeSnapshot,onStartRecording:this._startRecording,onStopRecording:this._stopRecording,onFocus:this._focus,onStop:this._stop,i18n:this.i18n,modes:this.opts.modes,showRecordingLength:this.opts.showRecordingLength,supportsRecording:"function"==typeof MediaRecorder&&!!MediaRecorder.prototype&&"function"==typeof MediaRecorder.prototype.start,recording:e.isRecording,mirror:this.opts.mirror,src:this.stream})):Do(Ro,{icon:wo,i18n:this.i18n,hasCamera:e.hasCamera})},i.install=function(){this.setPluginState({cameraReady:!1,recordingLengthSeconds:0});var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=function(){this.stream&&this._stop(),this.unmount()},n}(le.Plugin),Fo.VERSION="1.7.0",Eo),Lo=oe.h,No=function(){return Lo("svg",{"aria-hidden":"true",focusable:"false",width:"32",height:"32",viewBox:"0 0 32 32"},Lo("g",{fill:"none","fill-rule":"evenodd"},Lo("rect",{fill:"#2C3E50",width:"32",height:"32",rx:"16"}),Lo("path",{d:"M24.182 9H7.818C6.81 9 6 9.742 6 10.667v10c0 .916.81 1.666 1.818 1.666h4.546V24h7.272v-1.667h4.546c1 0 1.809-.75 1.809-1.666l.009-10C26 9.742 25.182 9 24.182 9zM24 21H8V11h16v10z",fill:"#FFF","fill-rule":"nonzero"}),Lo("circle",{fill:"#FFF",cx:"16",cy:"16",r:"2"})))},zo=oe.h,qo=function(e){var t=e.recording,r=e.onStartRecording,n=e.onStopRecording,i=e.i18n;return t?zo("button",{class:"uppy-u-reset uppy-c-btn uppy-ScreenCapture-button uppy-ScreenCapture-button--video uppy-ScreenCapture-button--stop-rec",type:"button",title:i("stopCapturing"),"aria-label":i("stopCapturing"),onclick:n,"data-uppy-super-focusable":!0},zo("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"100",height:"100",viewBox:"0 0 100 100"},zo("rect",{x:"15",y:"15",width:"70",height:"70"}))):zo("button",{class:"uppy-u-reset uppy-c-btn uppy-ScreenCapture-button uppy-ScreenCapture-button--video",type:"button",title:i("startCapturing"),"aria-label":i("startCapturing"),onclick:r,"data-uppy-super-focusable":!0},zo("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"100",height:"100",viewBox:"0 0 100 100"},zo("circle",{cx:"50",cy:"50",r:"40"})))},Ho=oe.h,Vo=function(e){var t=e.recording,r=e.recordedVideo,n=e.onSubmit,i=e.i18n;return r&&!t?Ho("button",{class:"uppy-u-reset uppy-c-btn uppy-ScreenCapture-button uppy-ScreenCapture-button--submit",type:"button",title:i("submitRecordedFile"),"aria-label":i("submitRecordedFile"),onclick:n,"data-uppy-super-focusable":!0},Ho("svg",{"aria-hidden":"true",focusable:"false",class:"uppy-c-icon",width:"48",height:"48",viewBox:"0 0 48 48"},Ho("path",{d:"M0 0h48v48h-48z",fill:"none"}),Ho("path",{d:"M38.71 20.07c-1.36-6.88-7.43-12.07-14.71-12.07-5.78 0-10.79 3.28-13.3 8.07-6.01.65-10.7 5.74-10.7 11.93 0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zm-10.71 5.93v8h-8v-8h-6l10-10 10 10h-6z"}))):null};function Wo(){return(Wo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Xo=oe.h,Go=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={elapsedTime:0},r.wrapperStyle={width:"100%",height:"100%",display:"flex"},r.overlayStyle={position:"absolute",width:"100%",height:"100%",background:"black",opacity:.7},r.infoContainerStyle={marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto",zIndex:1,color:"white"},r.infotextStyle={marginLeft:"auto",marginRight:"auto",marginBottom:"1rem",fontSize:"1.5rem"},r.timeStyle={display:"block",fontWeight:"bold",marginLeft:"auto",marginRight:"auto",fontSize:"3rem",fontFamily:"Courier New"},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.startTimer=i.resetTimer=function(){clearTimeout(this.timer),this.setState({elapsedTime:0}),this.timerRunning=!1},i.timerTick=function(){var e=this;this.timer=setTimeout((function(){e.setState({elapsedTime:e.state.elapsedTime+1}),e.timerTick()}),1e3)},i.fmtMSS=function(e){return(e-(e%=60))/60+(e>9?":":":0")+e},i.render=function(){var e=Wo({},this.props),t=e.recording,r=e.i18n,n=this.fmtMSS(this.state.elapsedTime);return t&&!this.timerRunning&&this.startTimer(),!t&&this.timerRunning&&this.resetTimer(),t?Xo("div",{style:this.wrapperStyle},Xo("div",{style:this.overlayStyle}),Xo("div",{style:this.infoContainerStyle},Xo("div",{style:this.infotextStyle},r("recording")),Xo("div",{style:this.timeStyle},n))):null},n}(oe.Component),$o=oe.h,Ko=function(e){var t=e.streamActive,r=e.i18n;return t?$o("div",{title:r("streamActive"),"aria-label":r("streamActive"),class:"uppy-ScreenCapture-icon--stream uppy-ScreenCapture-icon--streamActive"},$o("svg",{"aria-hidden":"true",focusable:"false",width:"24",height:"24",viewBox:"0 0 24 24"},$o("path",{d:"M0 0h24v24H0z",opacity:".1",fill:"none"}),$o("path",{d:"M0 0h24v24H0z",fill:"none"}),$o("path",{d:"M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))):$o("div",{title:r("streamPassive"),"aria-label":r("streamPassive"),class:"uppy-ScreenCapture-icon--stream"},$o("svg",{"aria-hidden":"true",focusable:"false",width:"24",height:"24",viewBox:"0 0 24 24"},$o("path",{d:"M0 0h24v24H0z",opacity:".1",fill:"none"}),$o("path",{d:"M0 0h24v24H0z",fill:"none"}),$o("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"})))};function Yo(){return(Yo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Jo,Qo,Zo=oe.h,es=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.componentWillUnmount=function(){this.props.onStop()},i.render=function(){var e=this,t=this.props,r=t.recording,n=t.stream,i=t.recordedVideo,o={playsinline:!0};return(r||!i&&!r)&&(o.muted=!0,o.autoplay=!0,o.srcObject=n),i&&!r&&(o.muted=!1,o.controls=!0,o.src=i,this.videoElement&&(this.videoElement.srcObject=void 0)),Zo("div",{class:"uppy uppy-ScreenCapture-container"},Zo("div",{class:"uppy-ScreenCapture-videoContainer"},Zo(Ko,this.props),Zo("video",Yo({ref:function(t){return e.videoElement=t},class:"uppy-ScreenCapture-video"},o)),Zo(Go,this.props)),Zo("div",{class:"uppy-ScreenCapture-buttonContainer"},Zo(qo,this.props),Zo(Vo,this.props)))},n}(oe.Component);function ts(){return(ts=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function rs(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ns=oe.h,is=(Qo=Jo=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).mediaDevices=navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia&&window&&window.MediaRecorder?navigator.mediaDevices:null,n.protocol=location.protocol.match(/https/i)?"https":"http",n.id=n.opts.id||"ScreenCapture",n.title=n.opts.title||"Screencast",n.type="acquirer",n.icon=No,n.defaultLocale={strings:{startCapturing:"Begin screen capturing",stopCapturing:"Stop screen capturing",submitRecordedFile:"Submit captured video",streamActive:"Stream active",streamPassive:"Stream passive",micDisabled:"Microphone access denied by user",recording:"Recording"}},n.opts=ts({},{displayMediaConstraints:{video:{width:1280,height:720,frameRate:{ideal:3,max:5},cursor:"motion",displaySurface:"monitor"}},userMediaConstraints:{audio:!0},preferredVideoMimeType:"video/webm"},r),n.translator=new A([n.defaultLocale,n.uppy.locale,n.opts.locale]),n.i18n=n.translator.translate.bind(n.translator),n.i18nArray=n.translator.translateArray.bind(n.translator),n.install=n.install.bind(rs(n)),n.setPluginState=n.setPluginState.bind(rs(n)),n.render=n.render.bind(rs(n)),n.start=n.start.bind(rs(n)),n.stop=n.stop.bind(rs(n)),n.startRecording=n.startRecording.bind(rs(n)),n.stopRecording=n.stopRecording.bind(rs(n)),n.submit=n.submit.bind(rs(n)),n.streamInterrupted=n.streamInactivated.bind(rs(n)),n.captureActive=!1,n.capturedMediaFile=null,n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.install=function(){if(!this.mediaDevices)return this.uppy.log("Screen recorder access is not supported","error"),null;this.setPluginState({streamActive:!1,audioStreamActive:!1});var e=this.opts.target;e&&this.mount(e,this)},i.uninstall=i.start=function(){var e=this;if(!this.mediaDevices)return Promise.reject(new Error("Screen recorder access not supported"));this.captureActive=!0,this.selectAudioStreamSource(),this.selectVideoStreamSource().then((function(t){!1===t&&e.parent&&e.parent.hideAllPanels&&(e.parent.hideAllPanels(),e.captureActive=!1)}))},i.selectVideoStreamSource=function(){var e=this;return this.videoStream?new Promise((function(t){return t(e.videoStream)})):this.mediaDevices.getDisplayMedia(this.opts.displayMediaConstraints).then((function(t){return e.videoStream=t,e.videoStream.addEventListener("inactive",(function(t){e.streamInactivated()})),e.setPluginState({streamActive:!0}),t})).catch((function(t){return e.setPluginState({screenRecError:t}),e.userDenied=!0,setTimeout((function(){e.userDenied=!1}),1e3),!1}))},i.selectAudioStreamSource=function(){var e=this;return this.audioStream?new Promise(():this.mediaDevices.getUserMedia(this.opts.userMediaConstraints).then(().catch((function(t){return"NotAllowedError"===t.name&&e.uppy.info(e.i18n("micDisabled"),"error",5e3),!1}))},i.startRecording=function(){var e=this,t={};this.capturedMediaFile=null,this.recordingChunks=[];var r=this.opts.preferredVideoMimeType;this.selectVideoStreamSource().then((function(n){r&&MediaRecorder.isTypeSupported(r)&&mo(r)&&(t.mimeType=r);var i=[n.getVideoTracks()[0]];e.audioStream&&i.push(e.audioStream.getAudioTracks()[0]),e.outputStream=new MediaStream(i),e.recorder=new MediaRecorder(e.outputStream,t),e.recorder.addEventListener("dataavailable",(),e.recorder.start(),e.setPluginState({recording:!0})})).catch((function(t){e.uppy.log(t,"error")}))},i.streamInactivated=function(){var e=ts({},this.getPluginState()),t=e.recordedVideo,r=e.recording;t||r?r&&(this.uppy.log("Capture stream inactive \u2014 stop recording"),this.stopRecording()):this.parent&&this.parent.hideAllPanels&&this.parent.hideAllPanels(),this.videoStream=null,this.audioStream=null,this.setPluginState({streamActive:!1,audioStreamActive:!1})},i.stopRecording=function(){var e=this;return new Promise((function(t,r){e.recorder.addEventListener("stop",(function(){t()})),e.recorder.stop()})).then((function(){return e.setPluginState({recording:!1}),e.getVideo()})).then((function(t){e.capturedMediaFile=t,e.setPluginState({recordedVideo:URL.createObjectURL(t.data)})})).then((function(){e.recordingChunks=null,e.recorder=null}),(function(t){throw e.recordingChunks=null,e.recorder=null,t}))},i.submit=function(){try{this.capturedMediaFile&&this.uppy.addFile(this.capturedMediaFile)}catch(gc){gc.isRestriction||this.uppy.log(gc,"error")}},i.stop=function(){this.videoStream&&(this.videoStream.getVideoTracks().forEach((function(e){e.stop()})),this.videoStream.getAudioTracks().forEach((function(e){e.stop()})),this.videoStream=null),this.audioStream&&(this.audioStream.getAudioTracks().forEach((function(e){e.stop()})),this.audioStream.getVideoTracks().forEach((function(e){e.stop()})),this.audioStream=null),this.outputStream&&(this.outputStream.getAudioTracks().forEach((function(e){e.stop()})),this.outputStream.getVideoTracks().forEach((function(e){e.stop()})),this.outputStream=null),this.setPluginState({recordedVideo:null}),this.captureActive=!1},i.getVideo=function(){var e=this.recordingChunks[0].type,t=mo(e);if(!t)return Promise.reject(new Error('Could not retrieve recording: Unsupported media type "'+e+'"'));var r="screencap-"+Date.now()+"."+t,n=new Blob(this.recordingChunks,{type:e}),i={source:this.id,name:r,data:new Blob([n],{type:e}),type:e};return Promise.resolve(i)},i.render=function(e){var t=this.getPluginState();return t.streamActive||this.captureActive||this.userDenied||this.start(),ns(es,ts({},t,{onStartRecording:this.startRecording,onStopRecording:this.stopRecording,onStop:this.stop,onSubmit:this.submit,i18n:this.i18n,stream:this.videoStream}))},n}(le.Plugin),Jo.VERSION="1.0.8",Qo),os=ss={},as=Object.prototype.hasOwnProperty;.stringify=ss.parse=var cs={};(function(e){"use strict";var t=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,r=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,n=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");ar o=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],s={hash:1,query:1};rototype={set:toString:,l.extractProtocol=u,l.location=a,l.trimLeft=i,l.qs=ss,cs=l}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var ps=function(){function e(e){this.limit="number"!=typeof e||0===e?1/0:e,this.activeRequests=0,this.queuedHandlers=[]}var t=e.prototype;return t._call=function(e){var t=this;this.activeRequests+=1;var r,n=!1;try{r=e()}catch(gc){throw this.activeRequests-=1,gc}return{abort:function(){n||(n=!0,t.activeRequests-=1,r(),t._queueNext())},done:function(){n||(n=!0,t.activeRequests-=1,t._queueNext())}}},t._queueNext=function(){var e=this;Promise.resolve().then((function(){e._next()}))},t._next=function(){if(!(this.activeRequests>=this.limit)&&0!==this.queuedHandlers.length){var e=this.queuedHandlers.shift(),t=this._call(e.fn);e.abort=t.abort,e.done=t.done}},t._queue=function(e,t){var r=this;void 0===t&&(t={});var n={fn:e,priority:t.priority||0,abort:function(){r._dequeue(n)},done:function(){throw new Error("Cannot mark a queued request as done: this indicates a bug")}},i=function(e,t){for(var r=0;r<e.length;r++)if(i=e[r],n.priority>i.priority)return r;var i;return-1}(this.queuedHandlers);return-1===i?this.queuedHandlers.push(n):this.queuedHandlers.splice(i,0,n),n},t._dequeue=function(e){var t=this.queuedHandlers.indexOf(e);-1!==t&&this.queuedHandlers.splice(t,1)},t.run=function(e,t){return this.activeRequests<this.limit?this._call(e):this._queue(e,t)},t.wrapPromiseFunction=function(e,t){var r=this;return function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];var s,a=new Promise((function(n,o){s=r.run((function(){var t,r;try{r=Promise.resolve(e.apply(void 0,i))}catch(gc){r=Promise.reject(gc)}return r.then((function(e){t?o(t):(s.done(),n(e))}),(),),t)}));return a.abort=function(){s.abort()},a}},e}(),ds=hs=Object.prototype.hasOwnProperty,fs=q((function(e,t,r){var n=t.progress,i=t.bytesUploaded,o=t.bytesTotal;n&&(e.uppy.log("Upload progress: "+n),e.uppy.emit("upload-progress",r,{uploader:e,bytesUploaded:i,bytesTotal:o}))}),300,{leading:!0,trailing:!0}),ys=function(e){var t=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(e)[1];return(/^http:\/\//i.test(e)?"ws":"wss")+"://"+t},gs=function(){ar t=e.prototype;return t.on=function(e,t){return this._events.push([e,t]),this._emitter.on(e,t)},t.remove=function(){var e=this;this._events.forEach(()},e}(),vs=function(){function e(e,t){this._timeout=e,this._onTimedOut=t,this._isDone=!1,this._aliveTimer=null,this._onTimedOut=this._onTimedOut.bind(this)}var t=e.prototype;return t.progress=function(){this._isDone||this._timeout>0&&(this._aliveTimer&&clearTimeout(this._aliveTimer),this._aliveTimer=setTimeout(this._onTimedOut,this._timeout))},t.done=e}(),ms=function bs(){return(bs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var ws=Le.Provider,_s=Le.RequestClient,Ss=Le.Socket;function ks(e,t){return t||(t=new Error("Upload error")),"string"==typeof t&&(t=new Error(t)),t instanceof Error||(t=bs(new Error("Upload error"),{data:t})),ms(e)?t=new Te(t,e):(t.request=e,t)}var Ps,Cs,As=function(){function e(e,t){this.uppy=e,this.opts=bs({validateStatus:function(e,t,r){return e>=200&&e<300}},t),this.requests=t.__queue,this.uploaderEvents=Object.create(null),this.i18n=t.i18n}var t=e.prototype;return t._getOptions=function(e){var t=this.uppy.getState().xhrUpload,r=bs({},this.opts,t||{},e.xhrUpload||{},{headers:{}});return bs(r.headers,this.opts.headers),t&&bs(r.headers,t.headers),e.xhrUpload&&bs(r.headers,e.xhrUpload.headers),r},t.uploadFile=function(e,t,r){var n=this.uppy.getFile(e);if(n.error)throw new Error(n.error);return n.isRemote?this._uploadRemoteFile(n,t,r):this._uploadLocalFile(n,t,r)},t._addMetadata=function(e,t,r){(Array.isArray(r.metaFields)?r.metaFields:Object.keys(t)).forEach((function(r){e.append(r,t[r])}))},t._createFormDataUpload=function(e,t){var r=new FormData;this._addMetadata(r,e.meta,t);var n=function(e){return e.data.slice(0,e.data.size,e.meta.type)}(e);return e.name?r.append(t.fieldName,n,e.meta.name):r.append(t.fieldName,n),r},t._createBareUpload=function(e,t){return e.data},t._onFileRemoved=function(e,t){this.uploaderEvents[e].on("file-removed",(function(r){e===r.id&&t(r.id)}))},t._onRetry=function(e,t){this.uploaderEvents[e].on("upload-retry",(function(r){e===r&&t()}))},t._onRetryAll=function(e,t){var r=this;this.uploaderEvents[e].on("retry-all",(function(n){r.uppy.getFile(e)&&t()}))},t._onCancelAll=function(e,t){var r=this;this.uploaderEvents[e].on("cancel-all",(function(){r.uppy.getFile(e)&&t()}))},t._uploadLocalFile=function(e,t,r){var n=this,i=this._getOptions(e);return this.uppy.log("uploading "+t+" of "+r),new Promise((function(t,r){var o=i.formData?n._createFormDataUpload(e,i):n._createBareUpload(e,i),s=new XMLHttpRequest;n.uploaderEvents[e.id]=new gs(n.uppy);var a=new vs(i.timeout,(function(){s.abort(),l.done();var t=new Error(n.i18n("timedOut",{seconds:Math.ceil(i.timeout/1e3)}));n.uppy.emit("upload-error",e,t),r(t)})),u=I();s.upload.addEventListener("loadstart",(function(e){n.uppy.log("[AwsS3/XHRUpload] "+u+" started")})),s.upload.addEventListener("progress",(function(t){n.uppy.log("[AwsS3/XHRUpload] "+u+" progress: "+t.loaded+" / "+t.total),a.progress(),t.lengthComputable&&n.uppy.emit("upload-progress",e,{uploader:n,bytesUploaded:t.loaded,bytesTotal:t.total})})),s.addEventListener("load",(function(o){if(n.uppy.log("[AwsS3/XHRUpload] "+u+" finished"),a.done(),l.done(),n.uploaderEvents[e.id]&&(n.uploaderEvents[e.id].remove(),n.uploaderEvents[e.id]=null),i.validateStatus(o.target.status,s.responseText,s)){var c=i.getResponseData(s.responseText,s),p=c[i.responseUrlFieldName],d={status:o.target.status,body:c,uploadURL:p};return n.uppy.emit("upload-success",e,d),p&&n.uppy.log("Download "+e.name+" from "+p),t(e)}var h=i.getResponseData(s.responseText,s),f=ks(s,i.getResponseError(s.responseText,s)),y={status:o.target.status,body:h};return n.uppy.emit("upload-error",e,f,y),r(f)})),s.addEventListener("error",(function(t){n.uppy.log("[AwsS3/XHRUpload] "+u+" errored"),a.done(),l.done(),n.uploaderEvents[e.id]&&(n.uploaderEvents[e.id].remove(),n.uploaderEvents[e.id]=null);var o=ks(s,i.getResponseError(s.responseText,s));return n.uppy.emit("upload-error",e,o),r(o)})),s.open(i.method.toUpperCase(),i.endpoint,!0),s.withCredentials=i.withCredentials,""!==i.responseType&&(s.responseType=i.responseType),Object.keys(i.headers).forEach((function(e){s.setRequestHeader(e,i.headers[e])}));var l=n.requests.run((function(){return s.send(o),function(){a.done(),s.abort()}}),{priority:1});n._onFileRemoved(e.id,(function(){l.abort(),r(new Error("File removed"))})),n._onCancelAll(e.id,(function(){l.abort(),r(new Error("Upload cancelled"))}))}))},t._uploadRemoteFile=function(e,t,r){var n=this,i=this._getOptions(e);return new Promise((function(t,r){var o={};(Array.isArray(i.metaFields)?i.metaFields:Object.keys(e.meta)).forEach((function(t){o[t]=e.meta[t]})),new(e.remote.providerOptions.provider?ws:_s)(n.uppy,e.remote.providerOptions).post(e.remote.url,bs({},e.remote.body,{endpoint:i.endpoint,size:e.data.size,fieldname:i.fieldName,metadata:o,httpMethod:i.method,useFormData:i.formData,headers:i.headers})).then((function(o){var s=o.token,a=ys(e.remote.companionUrl),u=new Ss({target:a+"/api/"+s,autoOpen:!1});n.uploaderEvents[e.id]=new gs(n.uppy),n._onFileRemoved(e.id,(function(){u.send("pause",{}),l.abort(),t("upload "+e.id+" was removed")})),n._onCancelAll(e.id,(function(){u.send("pause",{}),l.abort(),t("upload "+e.id+" was canceled")})),n._onRetry(e.id,(function(){u.send("pause",{}),u.send("resume",{})})),n._onRetryAll(e.id,(function(){u.send("pause",{}),u.send("resume",{})})),u.on("progress",(function(t){return fs(n,t,e)})),u.on("success",(function(r){var o=i.getResponseData(r.response.responseText,r.response),s=o[i.responseUrlFieldName],a={status:r.response.status,body:o,uploadURL:s};return n.uppy.emit("upload-success",e,a),l.done(),n.uploaderEvents[e.id]&&(n.uploaderEvents[e.id].remove(),n.uploaderEvents[e.id]=null),t()})),u.on("error",(function(t){var o=t.response,s=o?i.getResponseError(o.responseText,o):bs(new Error(t.error.message),{cause:t.error});n.uppy.emit("upload-error",e,s),l.done(),n.uploaderEvents[e.id]&&(n.uploaderEvents[e.id].remove(),n.uploaderEvents[e.id]=null),r(s)}));var l=n.requests.run((function(){return u.open(),e.isPaused&&u.send("pause",{}),function(){return u.close()}}))})).catch((function(t){n.uppy.emit("upload-error",e,t),r(t)}))}))},e}(),Fs=function(e,t){var r,n=t.headers?t.headers["content-type"]:t.getResponseHeader("Content-Type");if("string"==typeof n){var i=(r=n,r.replace(/;.*$/,"")).toLowerCase();if("application/xml"===i||"text/xml"===i)return!0;if("text/html"===i&&/^<\?xml /.test(e))return!0}return!1};function Es(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Os(){return(Os=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Us="function"==typeof URL?URL:cs,Rs=Le.RequestClient;function Ts(e,t){var r=e.indexOf("<"+t+">"),n=e.indexOf("</"+t+">",r);return-1!==r&&-1!==n?e.slice(r+t.length+2,n):""}function xs(e){if(e&&e.error){var t=new Error(e.message);throw Os(t,e.error),t}return e}var Ds=!1,Bs=(Cs=Ps=function(e){var t,r;function n(t,r){var n;(n=e.call(this,t,r)||this).type="uploader",n.id=n.opts.id||"AwsS3",n.title="AWS S3",n.defaultLocale={strings:{timedOut:"Upload stalled for %{seconds} seconds, aborting."}};var i={timeout:3e4,limit:0,metaFields:[],getUploadParameters:n.getUploadParameters.bind(Es(n))};return n.opts=Os({},i,r),n.i18nInit(),n.client=new Rs(t,r),n.handleUpload=n.handleUpload.bind(Es(n)),n.requests=new ps(n.opts.limit),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.setOptions=function(t){e.prototype.setOptions.call(this,t),this.i18nInit()},i.i18nInit=function(){this.translator=new A([this.defaultLocale,this.uppy.locale,this.opts.locale]),this.i18n=this.translator.translate.bind(this.translator),this.setPluginState()},i.getUploadParameters=function(e){if(!this.opts.companionUrl)throw new Error("Expected a `companionUrl` option containing a Companion address.");var t=e.meta.name,r=e.meta.type,n={};this.opts.metaFields.forEach((function(t){null!=e.meta[t]&&(n[t]=e.meta[t].toString())}));var i=function e(t,r){var n=[];for(var i in t)if(hs.call(t,i)){var o,s=t[i],a=encodeURIComponent(i);o="object"==typeof s?e(s,r?r+"["+a+"]":a):(r?r+"["+a+"]":a)+"="+encodeURIComponent(s),n.push(o)}return n.join("&")}({filename:t,type:r,metadata:n});return this.client.get("s3/params?"+i).then(xs)},i.validateParameters=function(e,t){if("object"!=typeof t||!t||"string"!=typeof t.url||"object"!=typeof t.fields&&null!=t.fields||null!=t.method&&!/^(put|post)$/i.test(t.method)){var r=new TypeError("AwsS3: got incorrect result from 'getUploadParameters()' for file '"+e.name+"', expected an object '{ url, method, fields, headers }' but got '"+JSON.stringify(t)+"' instead.\nSee https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.");throw console.error(r),r}},i.handleUpload=function(e){var t=this,r=Object.create(null);function n(e){var t=e.id;k(r,t)&&r[t].abort()}this.uppy.on("file-removed",n),e.forEach((function(e){var r=t.uppy.getFile(e);t.uppy.emit("upload-started",r)}));var i=this.requests.wrapPromiseFunction((function(e){return t.opts.getUploadParameters(e)})),o=e.length;return ds(e.map((function(e,n){return r[e]=i(t.uppy.getFile(e)),r[e].then((function(i){delete r[e];var s=t.uppy.getFile(e);t.validateParameters(s,i);var a=i.method,u=void 0===a?"post":a,l=i.url,c=i.fields,p=i.headers,d={method:u,formData:"post"===u.toLowerCase(),endpoint:l,metaFields:c?Object.keys(c):[]};return p&&(d.headers=p),t.uppy.setFileState(s.id,{meta:Os({},s.meta,c),xhrUpload:d}),t._uploader.uploadFile(s.id,n,o)})).catch((function(n){delete r[e];var i=t.uppy.getFile(e);t.uppy.emit("upload-error",i,n)}))}))).then(()},i.install=function(){var e=this.uppy;this.uppy.addUploader(this.handleUpload);var t={fieldName:"file",responseUrlFieldName:"location",timeout:this.opts.timeout,__queue:this.requests,responseType:"text",getResponseData:this.opts.getResponseData||function(t,r){var n,i;return Fs(t,r)?{location:(n=r.responseURL,i=Ts(t,"Location"),n?new Us(i,n).toString():new Us(i).toString()),bucket:Ts(t,"Bucket"),key:Ts(t,"Key"),etag:Ts(t,"ETag")}:"POST"===this.method.toUpperCase()?(Ds||(e.log("[AwsS3] No response data found, make sure to set the success_action_status AWS SDK option to 201. See https://uppy.io/docs/aws-s3/#POST-Uploads","warning"),Ds=!0),{location:null}):r.responseURL?{location:r.responseURL.replace(/\?.*$/,"")}:{location:null}},getResponseError:function(e,t){if(Fs(e,t)){var r=Ts(e,"Message");return new Error(r)}}};t.i18n=this.i18n,this._uploader=new As(this.uppy,t)},i.uninstall=n}(le.Plugin),Ps.VERSION="1.7.0",Cs),Is={};function js(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ms(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ls(e,t,r){return t&&Ms(e.prototype,t),r&&Ms(e,r),e}function Ns(e){return(Ns=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function zs(e,t){return(zs=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function qs(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Hs(e,t,r){return(Hs="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ns(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}Object.defineProperty(Is,"__esModule",{value:!0});var Vs=),Ws=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&zs(e,t)}(i,Vs);var t,r,n=(t=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n,i,o=Ns(t);if(r){var s=Ns(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return n=this,!(i=e)||"object"!=typeof i&&"function"!=typeof i?qs(n):i});eturn Ls(i,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:]),i}(),Xs=);"undefined"!=typeof Symbol&&Symbol.toStringTag&&(Xs.prototype[Symbol.toStringTag]="AbortController",Ws.prototype[Symbol.toStringTag]="AbortSignal"),Is.AbortController=Xs,Is.AbortSignal=Ws;var Gs={},$s=Is.AbortController;Is.AbortSignal;Gs.AbortController=$s,Gs.createAbortError=function(e){void 0===e&&(e="Aborted");try{return new DOMException(e,"AbortError")}catch(r){var t=new Error(e);return t.name="AbortError",t}};var Ks=Gs.createAbortError;function Ys(){return(Ys=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Js=Gs.AbortController,Qs=Gs.createAbortError,Zs={limit:1,retryDelays:[0,1e3,3e3,5e3],getChunkSize:onStart:function(){},onProgress:function(){},onPartComplete:function(){},onSuccess:function(){},onError:;function ea(e){if("string"==typeof e)return parseInt(e,10);if("number"==typeof e)return e;throw new TypeError("Expected a number")}var ta,ra,na=function(){function e(e,t){this.options=Ys({},Zs,t),this.options.getChunkSize||(this.options.getChunkSize=Zs.getChunkSize),this.file=e,this.abortController=new Js,this.key=this.options.key||null,this.uploadId=this.options.uploadId||null,this.parts=[],this.createdPromise=Promise.reject(),this.isPaused=!1,this.partsInProgress=0,this.chunks=null,this.chunkState=null,this._initChunks(),this.createdPromise.catch((function(){}))}var t=e.prototype;return t._aborted=t._initChunks=function(){var e=[],t=this.options.getChunkSize(this.file),r=Math.max(5242880,Math.ceil(this.file.size/1e4)),n=Math.max(t,r);if(0===this.file.size)e.push(this.file);else for(var i=0;i<this.file.size;i+=n){var o=Math.min(this.file.size,i+n);e.push(this.file.slice(i,o))}this.chunks=e,this.chunkState=e.map(()},t._createUpload=function(){var e=this;return this.createdPromise=Promise.resolve().then((function(){return e.options.createMultipartUpload()})),this.createdPromise.then((function(t){if(e._aborted())throw Qs();if("object"!=typeof t||!t||"string"!=typeof t.uploadId||"string"!=typeof t.key)throw new TypeError("AwsS3/Multipart: Got incorrect result from `createMultipartUpload()`, expected an object `{ uploadId, key }`.");e.key=t.key,e.uploadId=t.uploadId,e.options.onStart(t),e._uploadParts()})).catch((function(t){e._onError(t)}))},t._resumeUpload=function(){var e=this;return Promise.resolve().then(().then((function(t){if(e._aborted())throw Qs();t.forEach((function(t){var r=t.PartNumber-1;e.chunkState[r]={uploaded:ea(t.Size),etag:t.ETag,done:!0},e.parts.some(()||e.parts.push({PartNumber:t.PartNumber,ETag:t.ETag})})),e._uploadParts()})).catch((function(t){e._onError(t)}))},t._uploadParts=function(){var e=this;if(!this.isPaused){var t=this.options.limit-this.partsInProgress;if(0!==t)if(this.chunkState.every((function(e){return e.done})))this._completeUpload();else{for(var r=[],n=0;n<this.chunkState.length;n++){var i=this.chunkState[n];if(!i.done&&!i.busy&&(r.push(n),r.length>=t))break}r.forEach((function(t){e._uploadPartRetryable(t).then((function(){e._uploadParts()}),(function(t){e._onError(t)}))}))}}},t._retryable=function(e){var t=this,r=e.before,n=e.attempt,i=e.after,o=this.options.retryDelays,s=this.abortController.signal;return r&&r(),function e(r){return n().catch((function(n){if(t._aborted())throw Qs();if(function(e){if(e.source&&"number"==typeof e.source.status){var t=e.source.status;return 0===t||409===t||423===t||t>=500&&t<600}return!1}(n)&&r<o.length)return(i=o[r],a={signal:s},new Promise((function(e,t){if(a&&a.signal&&a.signal.aborted)return t(Ks());function r(){clearTimeout(n),o(),t(Ks())}var n=setTimeout((function(){o(),e()}),i);function o(){a&&a.signal&&a.signal.removeEventListener("abort",r)}a&&a.signal&&a.signal.addEventListener("abort",r)}))).then(();var i,a;throw n}))}(0).then((,()},t._uploadPartRetryable=function(e){var t=this;return this._retryable({before:attempt:function(){return t._uploadPart(e)},after:)},t._uploadPart=function(e){var t=this,r=this.chunks[e];return this.chunkState[e].busy=!0,Promise.resolve().then((function(){return t.options.prepareUploadPart({key:t.key,uploadId:t.uploadId,body:r,number:e+1})})).then((function(e){if("object"!=typeof e||!e||"string"!=typeof e.url)throw new TypeError("AwsS3/Multipart: Got incorrect result from `prepareUploadPart()`, expected an object `{ url }`.");return e})).then((function(r){var n=r.url,i=r.headers;if(t._aborted())throw t.chunkState[e].busy=!1,Qs();return t._uploadPartBytes(e,n,i)}))},t._onPartProgress=function(e,t,r){this.chunkState[e].uploaded=ea(t);var n=this.chunkState.reduce((function(e,t){return e+t.uploaded}),0);this.options.onProgress(n,this.file.size)},t._onPartComplete=function(e,t){this.chunkState[e].etag=t,this.chunkState[e].done=!0;var r={PartNumber:e+1,ETag:t};this.parts.push(r),this.options.onPartComplete(r)},t._uploadPartBytes=function(e,t,r){var n,i=this,o=this.chunks[e],s=this.abortController.signal,a=new Promise((),u=new XMLHttpRequest;unction c(){u.abort()}return u.open("PUT",t,!0),r&&Object.keys(r).map((),u.responseType="text",s.addEventListener("abort",c),u.upload.addEventListener("progress",(),u.addEventListener("abort",(function(t){l(),i.chunkState[e].busy=!1,n.reject(Qs())})),u.addEventListener("load",(function(t){if(l(),i.chunkState[e].busy=!1,t.target.status<200||t.target.status>=300){var r=new Error("Non 2xx");return r.source=t.target,void n.reject(r)}i._onPartProgress(e,o.size,o.size);var s=t.target.getResponseHeader("ETag");null!==s?(i._onPartComplete(e,s),n.resolve()):n.reject(new Error("AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. Seee https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions."))})),u.addEventListener("error",(function(t){l(),i.chunkState[e].busy=!1;var r=new Error("Unknown error");r.source=t.target,n.reject(r)})),u.send(o),a},t._completeUpload=function(){var e=this;return this.parts.sort((),Promise.resolve().then((function(){return e.options.completeMultipartUpload({key:e.key,uploadId:e.uploadId,parts:e.parts})})).then((function(t){e.options.onSuccess(t)}),(function(t){e._onError(t)}))},t._abortUpload=function(){var e=this;this.abortController.abort(),this.createdPromise.then((,(function(){}))},t._onError=function(e){e&&"AbortError"===e.name||this.options.onError(e)},t.start=t.pause=function(){this.abortController.abort(),this.abortController=new Js,this.isPaused=!0},t.abort=function(e){if(void 0===e&&(e={}),!e.really)return this.pause();this._abortUpload()},e}();function ia(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oa(){return(oa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var sa=Le.Socket,aa=Le.Provider,ua=Le.RequestClient;function la(e){if(e&&e.error){var t=new Error(e.message);throw oa(t,e.error),t}return e}var ca=(ra=ta=function(e){var t,r;function n(t,r){var n;(n=e.call(this,t,r)||this).type="uploader",n.id=n.opts.id||"AwsS3Multipart",n.title="AWS S3 Multipart",n.client=new ua(t,r);var i={timeout:3e4,limit:0,retryDelays:[0,1e3,3e3,5e3],createMultipartUpload:n.createMultipartUpload.bind(ia(n)),listParts:n.listParts.bind(ia(n)),prepareUploadPart:n.prepareUploadPart.bind(ia(n)),abortMultipartUpload:n.abortMultipartUpload.bind(ia(n)),completeMultipartUpload:n.completeMultipartUpload.bind(ia(n))};return n.opts=oa({},i,r),n.upload=n.upload.bind(ia(n)),n.requests=new ps(n.opts.limit),n.uploaders=Object.create(null),n.uploaderEvents=Object.create(null),n.uploaderSockets=Object.create(null),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.resetUploaderReferences=function(e,t){void 0===t&&(t={}),this.uploaders[e]&&(this.uploaders[e].abort({really:t.abort||!1}),this.uploaders[e]=null),this.uploaderEvents[e]&&(this.uploaderEvents[e].remove(),this.uploaderEvents[e]=null),this.uploaderSockets[e]&&(this.uploaderSockets[e].close(),this.uploaderSockets[e]=null)},i.assertHost=function(e){if(!this.opts.companionUrl)throw new Error("Expected a `companionUrl` option containing a Companion address, or if you are not using Companion, a custom `"+e+"` implementation.")},i.createMultipartUpload=function(e){this.assertHost("createMultipartUpload");var t={};return Object.keys(e.meta).map((function(r){null!=e.meta[r]&&(t[r]=e.meta[r].toString())})),this.client.post("s3/multipart",{filename:e.name,type:e.type,metadata:t}).then(la)},i.listParts=function(e,t){var r=t.key,n=t.uploadId;this.assertHost("listParts");var i=encodeURIComponent(r);return this.client.get("s3/multipart/"+n+"?key="+i).then(la)},i.prepareUploadPart=function(e,t){var r=t.key,n=t.uploadId,i=t.number;this.assertHost("prepareUploadPart");var o=encodeURIComponent(r);return this.client.get("s3/multipart/"+n+"/"+i+"?key="+o).then(la)},i.completeMultipartUpload=function(e,t){var r=t.key,n=t.uploadId,i=t.parts;this.assertHost("completeMultipartUpload");var o=encodeURIComponent(r),s=encodeURIComponent(n);return this.client.post("s3/multipart/"+s+"/complete?key="+o,{parts:i}).then(la)},i.abortMultipartUpload=function(e,t){var r=t.key,n=t.uploadId;this.assertHost("abortMultipartUpload");var i=encodeURIComponent(r),o=encodeURIComponent(n);return this.client.delete("s3/multipart/"+o+"?key="+i).then(la)},i.uploadFile=function(e){var t=this;return new Promise((function(r,n){var i=new na(e.data,oa({createMultipartUpload:t.opts.createMultipartUpload.bind(t,e),listParts:t.opts.listParts.bind(t,e),prepareUploadPart:t.opts.prepareUploadPart.bind(t,e),completeMultipartUpload:t.opts.completeMultipartUpload.bind(t,e),abortMultipartUpload:t.opts.abortMultipartUpload.bind(t,e),getChunkSize:t.opts.getChunkSize?t.opts.getChunkSize.bind(t):null,onStart:function(r){var n=t.uppy.getFile(e.id);t.uppy.setFileState(e.id,{s3Multipart:oa({},n.s3Multipart,{key:r.key,uploadId:r.uploadId})})},onProgress:function(r,n){t.uppy.emit("upload-progress",e,{uploader:t,bytesUploaded:r,bytesTotal:n})},onError:function(r){t.uppy.log(r),t.uppy.emit("upload-error",e,r),o.done(),t.resetUploaderReferences(e.id),n(r)},onSuccess:function(n){var s={uploadURL:n.location};o.done(),t.resetUploaderReferences(e.id),t.uppy.emit("upload-success",e,s),n.location&&t.uppy.log("Download "+i.file.name+" from "+n.location),r(i)},onPartComplete:function(r){var n=t.uppy.getFile(e.id);n&&t.uppy.emit("s3-multipart:part-uploaded",n,r)},limit:t.opts.limit||5,retryDelays:t.opts.retryDelays||[]},e.s3Multipart));t.uploaders[e.id]=i,t.uploaderEvents[e.id]=new gs(t.uppy);var o=t.requests.run(();t.onFileRemove(e.id,(function(n){o.abort(),t.resetUploaderReferences(e.id,{abort:!0}),r("upload "+n.id+" was removed")})),t.onCancelAll(e.id,(function(){o.abort(),t.resetUploaderReferences(e.id,{abort:!0}),r("upload "+e.id+" was canceled")})),t.onFilePause(e.id,(function(e){e?(o.abort(),i.pause()):(o.abort(),o=t.requests.run((function(){return i.start(),function(){}})))})),t.onPauseAll(e.id,(function(){o.abort(),i.pause()})),t.onResumeAll(e.id,(function(){o.abort(),e.error&&i.abort(),o=t.requests.run((function(){return i.start(),function(){}}))})),e.isRestored||t.uppy.emit("upload-started",e,i)}))},i.uploadRemote=function(e){var t=this;return this.resetUploaderReferences(e.id),this.uppy.emit("upload-started",e),e.serverToken?this.connectToServerSocket(e):new Promise((function(r,n){new(e.remote.providerOptions.provider?aa:ua)(t.uppy,e.remote.providerOptions).post(e.remote.url,oa({},e.remote.body,{protocol:"s3-multipart",size:e.data.size,metadata:e.meta})).then((function(r){return t.uppy.setFileState(e.id,{serverToken:r.token}),e=t.uppy.getFile(e.id)})).then((function(e){return t.connectToServerSocket(e)})).then((function(){r()})).catch((function(r){t.uppy.emit("upload-error",e,r),n(r)}))}))},i.connectToServerSocket=function(e){var t=this;return new Promise((function(r,n){var i=e.serverToken,o=ys(e.remote.companionUrl),s=new sa({target:o+"/api/"+i,autoOpen:!1});t.uploaderSockets[e.id]=s,t.uploaderEvents[e.id]=new gs(t.uppy),t.onFileRemove(e.id,(function(n){a.abort(),s.send("pause",{}),t.resetUploaderReferences(e.id,{abort:!0}),r("upload "+e.id+" was removed")})),t.onFilePause(e.id,(function(e){e?(a.abort(),s.send("pause",{})):(a.abort(),a=t.requests.run((function(){return s.send("resume",{}),function(){}})))})),t.onPauseAll(e.id,(function(){a.abort(),s.send("pause",{})})),t.onCancelAll(e.id,(function(){a.abort(),s.send("pause",{}),t.resetUploaderReferences(e.id),r("upload "+e.id+" was canceled")})),t.onResumeAll(e.id,(function(){a.abort(),e.error&&s.send("pause",{}),a=t.requests.run(()})),t.onRetry(e.id,(function(){s.isOpen&&(s.send("pause",{}),s.send("resume",{}))})),t.onRetryAll(e.id,(function(){s.isOpen&&(s.send("pause",{}),s.send("resume",{}))})),s.on("progress",(function(r){return fs(t,r,e)})),s.on("error",(function(r){t.uppy.emit("upload-error",e,new Error(r.error)),t.resetUploaderReferences(e.id),a.done(),n(new Error(r.error))})),s.on("success",(function(n){var i={uploadURL:n.url};t.uppy.emit("upload-success",e,i),t.resetUploaderReferences(e.id),a.done(),r()}));var a=t.requests.run((function(){return s.open(),e.isPaused&&s.send("pause",{}),function(){}}))}))},i.upload=function(e){var t=this;if(0===e.length)return Promise.resolve();var r=e.map((function(e){var r=t.uppy.getFile(e);return r.isRemote?t.uploadRemote(r):t.uploadFile(r)}));return Promise.all(r)},i.onFileRemove=function(e,t){this.uploaderEvents[e].on("file-removed",(function(r){e===r.id&&t(r.id)}))},i.onFilePause=function(e,t){this.uploaderEvents[e].on("upload-pause",(function(r,n){e===r&&t(n)}))},i.onRetry=function(e,t){this.uploaderEvents[e].on("upload-retry",(function(r){e===r&&t()}))},i.onRetryAll=function(e,t){var r=this;this.uploaderEvents[e].on("retry-all",(function(n){r.uppy.getFile(e)&&t()}))},i.onPauseAll=function(e,t){var r=this;this.uploaderEvents[e].on("pause-all",(function(){r.uppy.getFile(e)&&t()}))},i.onCancelAll=function(e,t){var r=this;this.uploaderEvents[e].on("cancel-all",(function(){r.uppy.getFile(e)&&t()}))},i.onResumeAll=function(e,t){var r=this;this.uploaderEvents[e].on("resume-all",(function(){r.uppy.getFile(e)&&t()}))},i.install=function(){var e=this.uppy.getState().capabilities;this.uppy.setState({capabilities:oa({},e,{resumableUploads:!0})}),this.uppy.addUploader(this.upload)},i.uninstall=function(){var e=this.uppy.getState().capabilities;this.uppy.setState({capabilities:oa({},e,{resumableUploads:!1})}),this.uppy.removeUploader(this.upload)},n}(le.Plugin),ta.VERSION="1.8.6",ra),pa={exports:{}};(function(e){!function(e,t){"object"==typeof pa.exports?pa.exports=t(e):t(e)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:this,(function(e){"use strict";var t,r=(e=e||{}).Base64,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=n),o=String.fromCharCode,s=a=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,u=function(e){return e.replace(a,s)},l=c=e.btoa&&"function"==typeof e.btoa?function(t){return e.btoa(t)}:p=d=h=e.Uint8Array&&(t=;var f,y=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,g=v=m=b=e.atob&&"function"==typeof e.atob?function(t){return e.atob(t)}:w=_=if(e.Uint8Array&&(f=,e.Base64={VERSION:"2.6.2",atob:w,btoa:c,fromBase64:_,toBase64:h,utob:u,encode:h,encodeURI:btou:v,decode:_,noConflict:fromUint8Array:t,toUint8Array:f},"function"==typeof Object.defineProperty){var S=e.Base64.extendString=return e.Meteor&&(Base64=e.Base64),!!pa.exports&&(pa.exports.Base64=e.Base64),{Base64:e.Base64}}))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),pa=pa.exports;var da={};function ha(e){return(ha="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fa(e){var t="function"==typeof Map?new Map:void 0;return(fa=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return ya(e,arguments,ma(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),va(n,e)})(e)}nction va(e,t){return(va=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ma(e){return(ma=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(da,"__esModule",{value:!0}),da.default=void 0;var ba=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&va(e,t)}(n,fa(Error));var t,r=(t=n,function(){var e,r=ma(t);if(ga()){var n=ma(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){return!t||"object"!==ha(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,e)});function n(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=r.call(this,e)).originalRequest=o,t.originalResponse=s,t.causingError=i,null!=i&&(e+=", caused by ".concat(i.toString())),null!=o){var a=o.getHeader("X-Request-ID")||"n/a",u=o.getMethod(),l=o.getURL(),c=s?s.getStatus():"n/a",p=s?s.getBody()||"":"n/a";e+=", originated from request (method: ".concat(u,", url: ").concat(l,", response code: ").concat(c,", response text: ").concat(p,", request id: ").concat(a,")")}return t.message=e,t}return n}();da.default=ba;var wa={};Object.defineProperty(wa,"__esModule",{value:!0}),wa.enableDebugLog=wa.log=var _a=!1,Sa={};Object.defineProperty(Sa,"__esModule",{value:!0}),Sa.default=var ka={};Object.defineProperty(ka,"__esModule",{value:!0}),ka.default=void 0;var Pa=Fa(cs),Ca=Fa(da),Aa=Fa(Sa);function Fa(e){return e&&e.__esModule?e:{default:e}}function Ea(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oa(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ea(Object(r),!0).forEach((function(t){Ua(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ea(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ua(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ra(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Ta=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"resume"in r&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=r,this._urlStorage=this.options.urlStorage,this.file=t,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}var t,r,n;return t=e,n=[{key:"terminate",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;if("function"==typeof r||"function"==typeof n)throw new Error("tus: the terminate function does not accept a callback since v2 anymore; please use the returned Promise instead");var i=Ba("DELETE",t,r);return Ia(i,null,r).then((function(e){if(204!==e.getStatus())throw new Ca.default("tus: unexpected response while terminating upload",null,i,e)})).catch((function(n){if(n instanceof Ca.default||(n=new Ca.default("tus: failed to terminate upload",n,i,null)),!ja(n,0,r))throw n;var o=r.retryDelays[0],s=r.retryDelays.slice(1),a=Oa({},r,{retryDelays:s});return new Promise((function(e){return setTimeout(e,o)})).then(()}))}}],(r=[{key:"findPreviousUploads",value:,{key:"resumeFromPreviousUpload",value:,{key:"start",value:function(){var e=this,t=this.file;if(t)if(this.options.endpoint||this.options.uploadUrl){var r=this.options.retryDelays;null==r||"[object Array]"===Object.prototype.toString.call(r)?(this.options.parallelUploads>1&&["uploadUrl","uploadSize","uploadLengthDeferred"].forEach((),this.options.fingerprint(t,this.options).then((function(r){return null==r?(0,wa.log)("No fingerprint was calculated meaning that the upload cannot be stored in the URL storage."):(0,wa.log)("Calculated fingerprint: ".concat(r)),e._fingerprint=r,e._source?e._source:e.options.fileReader.openFile(t,e.options.chunkSize)})).then(().catch((function(t){e._emitError(t)}))):this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"))}else this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));else this._emitError(new Error("tus: no file or stream to upload provided"))}},{key:"_startParallelUpload",value:function(){var t=this,r=this._size=this._source.size,n=0;this._parallelUploads=[];var i=null!=this._parallelUploadUrls?this._parallelUploadUrls.length:this.options.parallelUploads,o=this._source.size,i,this._parallelUploadUrls);this._parallelUploadUrls=new Array(o.length);var s,a=o.map((function(i,s){var a=0;return t._source.slice(i.start,i.end).then((function(u){var l=u.value;return new Promise((function(u,c){var p=Oa({},t.options,{uploadUrl:i.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,metadata:{},headers:Oa({},t.options.headers,{"Upload-Concat":"partial"}),onSuccess:u,onError:c,onProgress:_onUploadUrlAvailable:),d=new e(l,p);d.start(),t._parallelUploads.push(d)}))}))}));Promise.all(a).then(().then((function(e){if(Da(e.getStatus(),200)){var r=e.getHeader("Location");null!=r?(t.url=Ma(t.options.endpoint,r),(0,wa.log)("Created upload at ".concat(t.url)),t._emitSuccess()):t._emitHttpError(s,e,"tus: invalid or missing Location header")}else t._emitHttpError(s,e,"tus: unexpected response while creating upload")})).catch((function(e){t._emitError(e)}))}},{key:"_startSingleUpload",value:function(){if(this.options.uploadLengthDeferred)this._size=null;else if(null!=this.options.uploadSize){if(this._size=+this.options.uploadSize,isNaN(this._size))return void this._emitError(new Error("tus: cannot convert `uploadSize` option into a number"))}else if(this._size=this._source.size,null==this._size)return void this._emitError(new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"));return this._aborted=!1,null!=this.url?((0,wa.log)("Resuming upload from previous URL: ".concat(this.url)),void this._resumeUpload()):null!=this.options.uploadUrl?((0,wa.log)("Resuming upload from provided URL: ".concat(this.options.url)),this.url=this.options.uploadUrl,void this._resumeUpload()):((0,wa.log)("Creating a new upload"),void this._createUpload())}},{key:"abort",value:function(t,r){var n=this;if("function"==typeof r)throw new Error("tus: the abort function does not accept a callback since v2 anymore; please use the returned Promise instead");return null!=this._parallelUploads&&this._parallelUploads.forEach((function(e){e.abort(t)})),null!==this._req&&(this._req.abort(),this._source.close()),this._aborted=!0,null!=this._retryTimeout&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),t&&null!=this.url?e.terminate(this.url,this.options).then((function(){return n._removeFromUrlStorage()})):Promise.resolve()}},{key:"_emitHttpError",value:function(e,t,r,n){this._emitError(new Ca.default(r,n,e,t))}},{key:"_emitError",value:function(e){var t=this;if(!this._aborted){if(null!=this.options.retryDelays&&(null!=this._offset&&this._offset>this._offsetBeforeRetry&&(this._retryAttempt=0),ja(e,this._retryAttempt,this.options))){var r=this.options.retryDelays[this._retryAttempt++];return this._offsetBeforeRetry=this._offset,void(this._retryTimeout=setTimeout((function(){t.start()}),r))}if("function"!=typeof this.options.onError)throw e;this.options.onError(e)}}},{key:"_emitSuccess",value:,{key:"_emitProgress",value:,{key:"_emitChunkComplete",value:,{key:"_createUpload",value:function(){var e=this;if(this.options.endpoint){var t=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?t.setHeader("Upload-Defer-Length",1):t.setHeader("Upload-Length",this._size);var r,n=xa(this.options.metadata);""!==n&&t.setHeader("Upload-Metadata",n),this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,r=this._addChunkToRequest(t)):r=this._sendRequest(t,null),r.then((function(r){if(Da(r.getStatus(),200)){var n=r.getHeader("Location");if(null!=n){if(e.url=Ma(e.options.endpoint,n),(0,wa.log)("Created upload at ".concat(e.url)),"function"==typeof e.options._onUploadUrlAvailable&&e.options._onUploadUrlAvailable(),0===e._size)return e._emitSuccess(),void e._source.close();e._saveUploadInUrlStorage(),e.options.uploadDataDuringCreation?e._handleUploadResponse(t,r):(e._offset=0,e._performUpload())}else e._emitHttpError(t,r,"tus: invalid or missing Location header")}else e._emitHttpError(t,r,"tus: unexpected response while creating upload")})).catch((function(r){e._emitHttpError(t,null,"tus: failed to create upload",r)}))}else this._emitError(new Error("tus: unable to create upload because no endpoint is provided"))}},{key:"_resumeUpload",value:function(){var e=this,t=this._openRequest("HEAD",this.url);this._sendRequest(t,null).then((function(r){var n=r.getStatus();if(!Da(n,200))return Da(n,400)&&e._removeFromUrlStorage(),423===n?void e._emitHttpError(t,r,"tus: upload is currently locked; retry later"):e.options.endpoint?(e.url=null,void e._createUpload()):void e._emitHttpError(t,r,"tus: unable to resume upload (new upload cannot be created without an endpoint)");var i=parseInt(r.getHeader("Upload-Offset"),10);if(isNaN(i))e._emitHttpError(t,r,"tus: invalid or missing offset value");else{var o=parseInt(r.getHeader("Upload-Length"),10);if(!isNaN(o)||e.options.uploadLengthDeferred){if("function"==typeof e.options._onUploadUrlAvailable&&e.options._onUploadUrlAvailable(),i===o)return e._emitProgress(o,o),void e._emitSuccess();e._offset=i,e._performUpload()}else e._emitHttpError(t,r,"tus: invalid or missing length value")}})).catch(()}},{key:"_performUpload",value:function(){var e,t=this;this._aborted||(this.options.overridePatchMethod?(e=this._openRequest("POST",this.url)).setHeader("X-HTTP-Method-Override","PATCH"):e=this._openRequest("PATCH",this.url),e.setHeader("Upload-Offset",this._offset),this._addChunkToRequest(e).then(().catch((function(r){t._aborted||t._emitHttpError(e,null,"tus: failed to upload chunk at offset "+t._offset,r)})))}},{key:"_addChunkToRequest",value:,{key:"_handleUploadResponse",value:,{key:"_openRequest",value:,{key:"_removeFromUrlStorage",value:,{key:"_saveUploadInUrlStorage",value:,{key:"_sendRequest",value:function(e){return Ia(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,this.options)}}])&&Ra(t.prototype,r),n&&Ra(t,n),e}();function xa(e){var t=[];for(var r in e)t.push(r+" "+pa.Base64.encode(e[r]));return t.join(",")}unction Ba(e,t,r){var n=r.httpStack.createRequest(e,t);n.setHeader("Tus-Resumable","1.0.0");var i=r.headers||{};for(var o in i)n.setHeader(o,i[o]);if(r.addRequestId){var s=(0,Aa.default)();n.setHeader("X-Request-ID",s)}return n}unction ja(e,t,r){if(null==r.retryDelays||t>=r.retryDelays.length||null==e.originalRequest)return!1;if(r&&"function"==typeof r.onShouldRetry)return r.onShouldRetry(e,t,r);var n,i=e.originalResponse?e.originalResponse.getStatus():0;return(!Da(i,400)||409===i||423===i)&&(n=!0,"undefined"!=typeof window&&"navigator"in window&&!1===window.navigator.onLine&&(n=!1),n)}a.defaultOptions={endpoint:null,uploadUrl:null,metadata:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,_onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:null,chunkSize:1/0,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null};var La=Ta;ka.default=La;var Na={};function za(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(Na,"__esModule",{value:!0}),Na.default=void 0;var qa=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,(r=[{key:"listAllUploads",value:,{key:"findUploadsByFingerprint",value:,{key:"removeUpload",value:function(e){return Promise.resolve()}},{key:"addUpload",value:])&&za(t.prototype,r),e}();Na.default=qa;var Ha={};function Va(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(Ha,"__esModule",{value:!0}),Ha.WebStorageUrlStorage=Ha.canStoreURLs=void 0;var Wa=!1;try{Wa="localStorage"in window;var Xa="tusSupport";localStorage.setItem(Xa,localStorage.getItem(Xa))}catch(Td){if(Td.code!==Td.SECURITY_ERR&&Td.code!==Td.QUOTA_EXCEEDED_ERR)throw Td;Wa=!1}var Ga=Wa;Ha.canStoreURLs=Ga;var $a=function(){ar t,r;return t=e,(r=[{key:"findAllUploads",value:,{key:"findUploadsByFingerprint",value:,{key:"removeUpload",value:,{key:"addUpload",value:,{key:"_findEntries",value:])&&Va(t.prototype,r),e}();Ha.WebStorageUrlStorage=$a;var Ka={};function Ya(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ja(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Qa(e,t,r){return t&&Ja(e.prototype,t),r&&Ja(e,r),e}Object.defineProperty(Ka,"__esModule",{value:!0}),Ka.default=void 0;var Za=);Ka.default=Za;var eu=),tu=),ru={};Object.defineProperty(ru,"__esModule",{value:!0}),ru.default=void 0;ru.default=var nu={};Object.defineProperty(nu,"__esModule",{value:!0}),nu.default=function(e){return new Promise(()};var iu={};Object.defineProperty(iu,"__esModule",{value:!0}),iu.default=void 0;iu.default=function(){return"undefined"!=typeof window&&(void 0!==window.PhoneGap||void 0!==window.Cordova||void 0!==window.cordova)};var ou={};Object.defineProperty(ou,"__esModule",{value:!0}),ou.default=function(e){return new Promise(()};var su={};Object.defineProperty(su,"__esModule",{value:!0}),su.default=void 0;var au=pu(ru),uu=pu(nu),lu=pu(iu),cu=pu(ou);function pu(e){return e&&e.__esModule?e:{default:e}}unction hu(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}ar yu=function(){eturn fu(e,[{key:"slice",value:function(e,t){if((0,lu.default)())return(0,cu.default)(this._file.slice(e,t));var r=this._file.slice(e,t);return Promise.resolve({value:r})}},{key:"close",value:function(){}}]),e}(),gu=function(){function e(t,r){du(this,e),this._chunkSize=r,this._buffer=void 0,this._bufferOffset=0,this._reader=t,this._done=!1}return fu(e,[{key:"slice",value:,{key:"_readUntilEnoughDataOrDone",value:,{key:"_getDataFromBuffer",value:,{key:"close",value:]),e}();ar mu=function(){eturn fu(e,[{key:"openFile",value:function(e,t){return(0,au.default)()&&e&&void 0!==e.uri?(0,uu.default)(e.uri).then((function(e){return new yu(e)})).catch(():"function"==typeof e.slice&&void 0!==e.size?Promise.resolve(new yu(e)):"function"==typeof e.read?(t=+t,isFinite(t)?Promise.resolve(new gu(e,t)):Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option"))):Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment"))}}]),e}();su.default=mu;var bu={};Object.defineProperty(bu,"__esModule",{value:!0}),bu.default=function(e,t){return(0,_u.default)()?Promise.resolve(function(e,t){var r=e.exif?JSON.stringify(e.exif)):"noexif";return["tus-rn",e.name||"noname",e.size||"nosize",r,t.endpoint].join("/")}(e,t)):Promise.resolve(["tus-br",e.name,e.type,e.size,e.lastModified,t.endpoint].join("-"))};var wu,_u=(wu=ru)&&wu.__esModule?wu:{default:wu},Su={};Object.defineProperty(Su,"__esModule",{value:!0}),Object.defineProperty(Su,"enableDebugLog",{enumerable:!0,get:function(){return wa.enableDebugLog}}),Object.defineProperty(Su,"canStoreURLs",{enumerable:!0,get:function(){return Ha.canStoreURLs}}),Object.defineProperty(Su,"HttpStack",{enumerable:!0,get:),Su.defaultOptions=Su.Upload=void 0;var ku=Eu(ka),Pu=Eu(Na),Cu=Eu(Ka),Au=Eu(su),Fu=Eu(bu);nction Uu(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ru(e,t){return(Ru=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Tu(e){return(Tu=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)} Iu=Du({},ku.default.defaultOptions,{httpStack:new Cu.default,fileReader:new Au.default,urlStorage:Ha.canStoreURLs?new Ha.WebStorageUrlStorage:new Pu.default,fingerprint:Fu.default});Su.defaultOptions=Iu;var ju=function(e){!o,ku.default);var t,r,n,i=(n=o,;function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this,o),t=Du({},Iu,{},t),i.call(this,e,t)}return t=o,r=[{key:"terminate",value:function(e,t,r){return t=Du({},Iu,{},t),ku.default.terminate(e,t,r)}}],null&&Uu(t.prototype,null),r&&Uu(t,r),o}();Su.Upload=ju;var Mu,Lu,Nu=window,zu=Nu.XMLHttpRequest,qu=Nu.Blob;zu&&qu&&qu.prototype.slice;function Hu(){return(Hu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Vu(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Wu=Le.Provider,Xu=Le.RequestClient,Gu=Le.Socket,$u={endpoint:"",uploadUrl:null,metadata:{},uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,overridePatchMethod:!1,headers:{},addRequestId:!1,chunkSize:1/0,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1},Ku=(Lu=Mu=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).type="uploader",n.id=n.opts.id||"Tus",n.title="Tus",n.opts=Hu({},{autoRetry:!0,resume:!0,useFastRemoteRetry:!0,limit:0,retryDelays:[0,1e3,3e3,5e3]},r),n.requests=new ps(n.opts.limit),n.uploaders=Object.create(null),n.uploaderEvents=Object.create(null),n.uploaderSockets=Object.create(null),n.handleResetProgress=n.handleResetProgress.bind(Vu(n)),n.handleUpload=n.handleUpload.bind(Vu(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.handleResetProgress=function(){var e=Hu({},this.uppy.getState().files);Object.keys(e).forEach((function(t){if(e[t].tus&&e[t].tus.uploadUrl){var r=Hu({},e[t].tus);delete r.uploadUrl,e[t]=Hu({},e[t],{tus:r})}})),this.uppy.setState({files:e})},i.resetUploaderReferences=function(e,t){if(void 0===t&&(t={}),this.uploaders[e]){var r=this.uploaders[e];r.abort(),t.abort&&setTimeout((,1e3),this.uploaders[e]=null}this.uploaderEvents[e]&&(this.uploaderEvents[e].remove(),this.uploaderEvents[e]=null),this.uploaderSockets[e]&&(this.uploaderSockets[e].close(),this.uploaderSockets[e]=null)},i.upload=function(e,t,r){var n=this;return this.resetUploaderReferences(e.id),new Promise((function(t,r){n.uppy.emit("upload-started",e);var i,o=Hu({},n.opts,e.tus||{}),s=Hu({},$u,o);delete s.resume,o.resume&&(s.storeFingerprintForResuming=!0),s.fingerprint=(i=e,function(e,t){if("undefined"!=typeof window&&(void 0!==window.PhoneGap||void 0!==window.Cordova||void 0!==window.cordova)||"undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase())return Su.defaultOptions.fingerprint(e,t);var r=["tus",i.id,t.endpoint].join("-");return Promise.resolve(r)}),s.onError=function(t){n.uppy.log(t);var i=t.originalRequest?t.originalRequest.getUnderlyingObject():null;ms(i)&&(t=new Te(t,i)),n.resetUploaderReferences(e.id),c.done(),n.uppy.emit("upload-error",e,t),r(t)},s.onProgress=s.onSuccess=function(){var r={uploadURL:l.url};n.resetUploaderReferences(e.id),c.done(),n.uppy.emit("upload-success",e,r),l.url&&n.uppy.log("Download "+l.file.name+" from "+l.url),t(l)};var a=u={};(Array.isArray(o.metaFields)?o.metaFields:Object.keys(e.meta)).forEach((),a(u,"type","filetype"),a(u,"name","filename"),s.metadata=u;var l=new Su.Upload(e.data,s);n.uploaders[e.id]=l,n.uploaderEvents[e.id]=new gs(n.uppy),o.resume&&l.findPreviousUploads().then((function(t){var r=t[0];r&&(n.uppy.log("[Tus] Resuming upload of "+e.id+" started at "+r.creationTime),l.resumeFromPreviousUpload(r))}));var c=n.requests.run((function(){return e.isPaused||Promise.resolve().then((function(){l.start()})),function(){}}));n.onFileRemove(e.id,(function(r){c.abort(),n.resetUploaderReferences(e.id,{abort:!!l.url}),t("upload "+r+" was removed")})),n.onPause(e.id,(function(e){e?(c.abort(),l.abort()):(c.abort(),c=n.requests.run((function(){return l.start(),function(){}})))})),n.onPauseAll(e.id,(),n.onCancelAll(e.id,(function(){c.abort(),n.resetUploaderReferences(e.id,{abort:!!l.url}),t("upload "+e.id+" was canceled")})),n.onResumeAll(e.id,(function(){c.abort(),e.error&&l.abort(),c=n.requests.run((function(){return l.start(),function(){}}))}))})).catch(()},i.uploadRemote=function(e,t,r){var n=this;this.resetUploaderReferences(e.id);var i=Hu({},this.opts);return e.tus&&Hu(i,e.tus),this.uppy.emit("upload-started",e),this.uppy.log(e.remote.url),e.serverToken?this.connectToServerSocket(e):new Promise((function(t,r){new(e.remote.providerOptions.provider?Wu:Xu)(n.uppy,e.remote.providerOptions).post(e.remote.url,Hu({},e.remote.body,{endpoint:i.endpoint,uploadUrl:i.uploadUrl,protocol:"tus",size:e.data.size,headers:i.headers,metadata:e.meta})).then((function(t){return n.uppy.setFileState(e.id,{serverToken:t.token}),e=n.uppy.getFile(e.id),n.connectToServerSocket(e)})).then((function(){t()})).catch(()}))},i.connectToServerSocket=function(e){var t=this;return new Promise((function(r,n){var i=e.serverToken,o=ys(e.remote.companionUrl),s=new Gu({target:o+"/api/"+i,autoOpen:!1});t.uploaderSockets[e.id]=s,t.uploaderEvents[e.id]=new gs(t.uppy),t.onFileRemove(e.id,(function(){a.abort(),s.send("pause",{}),s.send("cancel",{}),t.resetUploaderReferences(e.id),r("upload "+e.id+" was removed")})),t.onPause(e.id,(),t.onPauseAll(e.id,(),t.onCancelAll(e.id,(function(){a.abort(),s.send("pause",{}),s.send("cancel",{}),t.resetUploaderReferences(e.id),r("upload "+e.id+" was canceled")})),t.onResumeAll(e.id,(),t.onRetry(e.id,(function(){s.isOpen&&(s.send("pause",{}),s.send("resume",{}))})),t.onRetryAll(e.id,(),s.on("progress",(),s.on("error",(function(r){var i=r.error.message,o=Hu(new Error(i),{cause:r.error});t.opts.useFastRemoteRetry?s.close():(t.resetUploaderReferences(e.id),t.uppy.setFileState(e.id,{serverToken:null})),t.uppy.emit("upload-error",e,o),a.done(),n(o)})),s.on("success",();var a=t.requests.run(()}))},i.onReceiveUploadUrl=function(e,t){var r=this.uppy.getFile(e.id);r&&(r.tus&&r.tus.uploadUrl===t||(this.uppy.log("[Tus] Storing upload url"),this.uppy.setFileState(r.id,{tus:Hu({},r.tus,{uploadUrl:t})})))},i.onFileRemove=i.onPause=i.onRetry=i.onRetryAll=function(e,t){var r=this;this.uploaderEvents[e].on("retry-all",()},i.onPauseAll=function(e,t){var r=this;this.uploaderEvents[e].on("pause-all",(function(){r.uppy.getFile(e)&&t()}))},i.onCancelAll=function(e,t){var r=this;this.uploaderEvents[e].on("cancel-all",(function(){r.uppy.getFile(e)&&t()}))},i.onResumeAll=i.uploadFiles=function(e){var t=this,r=e.map((function(r,n){var i=n+1,o=e.length;return"error"in r&&r.error?Promise.reject(new Error(r.error)):r.isRemote?t.uploadRemote(r,i,o):t.upload(r,i,o)}));return ds(r)},i.handleUpload=i.install=function(){this.uppy.setState({capabilities:Hu({},this.uppy.getState().capabilities,{resumableUploads:!0})}),this.uppy.addUploader(this.handleUpload),this.uppy.on("reset-progress",this.handleResetProgress),this.opts.autoRetry&&this.uppy.on("back-online",this.uppy.retryAll)},i.uninstall=function(){this.uppy.setState({capabilities:Hu({},this.uppy.getState().capabilities,{resumableUploads:!1})}),this.uppy.removeUploader(this.handleUpload),this.opts.autoRetry&&this.uppy.off("back-online",this.uppy.retryAll)},n}(le.Plugin),Mu.VERSION="1.7.6",Lu),Yu=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ju=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],Qu=Zu=1e3,el=6e4,tl=864e5;function rl(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}var nl={};function il(e){var t;function r(){if(r.enabled){var e=r,n=+new Date,i=n-(t||n);e.diff=i,e.prev=t,e.curr=n,t=n;for(var o=new Array(arguments.length),s=0;s<o.length;s++)o[s]=arguments[s];o[0]=nl.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var a=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,(function(t,r){if("%%"===t)return t;a++;var n=nl.formatters[r];if("function"==typeof n){var i=o[a];t=n.call(e,i),o.splice(a,1),a--}return t})),nl.formatArgs.call(e,o),(r.log||nl.log||console.log.bind(console)).apply(e,o)}}return r.namespace=e,r.enabled=nl.enabled(e),r.useColors=nl.useColors(),r.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return nl.colors[Math.abs(r)%nl.colors.length]}(e),r.destroy=ol,"function"==typeof nl.init&&nl.init(r),nl.instances.push(r),r}function ol(){var e=nl.instances.indexOf(this);return-1!==e&&(nl.instances.splice(e,1),!0)}(nl=nl=il.debug=il.default=il).coerce=function(e){return e instanceof Error?e.stack||e.message:e},nl.disable=function(){nl.enable("")},nl.enable=function(e){var t;nl.save(e),nl.names=[],nl.skips=[];var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length;for(t=0;t<n;t++)r[t]&&("-"===(e=r[t].replace(/\*/g,".*?"))[0]?nl.skips.push(new RegExp("^"+e.substr(1)+"$")):nl.names.push(new RegExp("^"+e+"$")));for(t=0;t<nl.instances.length;t++){var i=nl.instances[t];i.enabled=nl.enabled(i.namespace)}},nl.enabled=function(e){if("*"===e[e.length-1])return!0;var t,r;for(t=0,r=nl.skips.length;t<r;t++)if(nl.skips[t].test(e))return!1;for(t=0,r=nl.names.length;t<r;t++)if(nl.names[t].test(e))return!0;return!1},nl.humanize=function(e,t){t=t||{};var r,n=typeof e;if("string"===n&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"days":case"day":case"d":return r*tl;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*r;case"minutes":case"minute":case"mins":case"min":case"m":return r*el;case"seconds":case"second":case"secs":case"sec":case"s":return r*Zu;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}(e);if("number"===n&&!1===isNaN(e))return t.long?rl(r=e,tl,"day")||rl(r,36e5,"hour")||rl(r,el,"minute")||rl(r,Zu,"second")||r+" ms":function(e){return e>=tl?Math.round(e/tl)+"d":e>=36e5?Math.round(e/36e5)+"h":e>=el?Math.round(e/el)+"m":e>=Zu?Math.round(e/Zu)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))},nl.instances=[],nl.names=[],nl.skips=[],nl.formatters={};var sl={};(function(e){function t(){var t;try{t=sl.storage.debug}catch(Td){}return!t&&void 0!==e&&"env"in e&&(t=e.env.DEBUG),t}(sl=sl=nl).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},sl.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+sl.humanize(this.diff),t){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var n=0,i=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(n++,"%c"===e&&(i=n))})),e.splice(i,0,r)}},sl.save=function(e){try{null==e?sl.storage.removeItem("debug"):sl.storage.debug=e}catch(Td){}},sl.load=t,sl.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},sl.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(Td){}}(),sl.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],sl.formatters.j=function(e){try{return JSON.stringify(e)}catch(gc){return"[UnexpectedJSONParseError]: "+gc.message}},sl.enable(t())}).call(this,e);var al=sl("socket.io-client:url"),ul=ar cl={};l=cl=pl.debug=pl.default=pl).coerce=cl.disable=function(){cl.enable("")},cl.enable=cl.enabled=cl.humanize=function(e,t){t=t||{};var r,n=typeof e;if("string"===n&&e.length>0)return e);if("number"===n&&!1===isNaN(e))return t.long?ll(r=e,864e5,"day")||ll(r,36e5,"hour")||ll(r,6e4,"minute")||ll(r,1e3,"second")||r+" ms":function(e){return e>=864e5?Math.round(e/864e5)+"d":e>=36e5?Math.round(e/36e5)+"h":e>=6e4?Math.round(e/6e4)+"m":e>=1e3?Math.round(e/1e3)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))},cl.instances=[],cl.names=[],cl.skips=[],cl.formatters={};var hl={};(function(e){hl=hl=cl).log=hl.formatArgs=hl.save=hl.load=t,hl.useColors=hl.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:),hl.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],hl.formatters.j=hl.enable(t())}).call(this,e);var fl={exports:{}};function yl(e){if(e)return function(e){for(var t in yl.prototype)e[t]=yl.prototype[t];return e}(e)}fl.exports=yl,yl.prototype.on=yl.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},yl.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this},yl.prototype.off=yl.prototype.removeListener=yl.prototype.removeAllListeners=yl.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r,n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var i=0;i<n.length;i++)if((r=n[i])===t||r.fn===t){n.splice(i,1);break}return this},yl.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),r=this._callbacks["$"+e];if(r)for(var n=0,i=(r=r.slice(0)).length;n<i;++n)r[n].apply(this,t);return this},yl.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},yl.prototype.hasListeners=function(e){return!!this.listeners(e).length},fl=fl.exports;var gl={}.toString,vl=Array.isArray||function(e){return"[object Array]"==gl.call(e)},ml={};(function(e){ml=var t="function"==typeof e&&"function"==typeof e.isBuffer,r="function"==typeof ArrayBuffer,n=).call(this,s({}).Buffer);var bl={},wl=Object.prototype.toString,_l="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===wl.call(Blob),Sl="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===wl.call(File);bl.deconstructPacket=bl.reconstructPacket=bl.removeBlobs=var kl={},Pl=hl("socket.io-parser");function Cl(){}kl.protocol=4,kl.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],kl.CONNECT=0,kl.DISCONNECT=1,kl.EVENT=2,kl.ACK=3,kl.ERROR=4,kl.BINARY_EVENT=5,kl.BINARY_ACK=6,kl.Encoder=Cl,kl.Decoder=El;var Al=kl.ERROR+'"encode error"';rototype.encode=fl(El.prototype),El.prototype.add=El.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},Ol.prototype.takeBinaryData=Ol.prototype.finishedReconstruction=var Rl={exports:{}};function Tl(e){if(e)return function(e){for(var t in Tl.prototype)e[t]=Tl.prototype[t];return e}(e)}Rl.exports=Tl,Tl.prototype.on=Tl.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},Tl.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this},Tl.prototype.off=Tl.prototype.removeListener=Tl.prototype.removeAllListeners=Tl.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r,n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var i=0;i<n.length;i++)if((r=n[i])===t||r.fn===t){n.splice(i,1);break}return this},Tl.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),r=this._callbacks["$"+e];if(r)for(var n=0,i=(r=r.slice(0)).length;n<i;++n)r[n].apply(this,t);return this},Tl.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},Tl.prototype.hasListeners=function(e){return!!this.listeners(e).length},Rl=Rl.exports;var xl=[].indexOf,Dl=Bl={encode:decode:,Il=Object.keys||jl={}.toString,Ml=Array.isArray||Ll={};(function(e){var t=Object.prototype.toString,r="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===t.call(Blob),n="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===t.call(File);Ll=).call(this,s({}).Buffer);var Nl=function zl(){}var ql,Hl,Vl,Wl=String.fromCharCode;=Zl=ec={};!);var tc={},rc=void 0!==rc?rc:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,nc=),ic=nc&&),oc=rc&&rc.prototype.append&&rc.prototype.getBlob;defined"!=typeof Blob&&(ac.prototype=Blob.prototype,uc.prototype=Blob.prototype),tc=nc?ic?Blob:uc:oc?ac:void 0;var lc,cc={};"undefined"!=typeof ArrayBuffer&&(lc=ec);var pc="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),dc="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),hc=pc||dc;cc.protocol=3;var fc=cc.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},yc=Il(fc),gc={type:"error",data:"parser error"};function vc(e,t,r){for(var n=new Array(e.length),i=e.length,r),o=s=0;s<e.length;s++)o(s,e[s],i)}cc.encodePacket=function(e,t,r,n){"function"==typeof t&&(n=t,t=!1),"function"==typeof r&&(n=r,r=null);var i=void 0===e.data?void 0:e.data.buffer||e.data;if("undefined"!=typeof ArrayBuffer&&i instanceof ArrayBuffer)return e,t,n);if(void 0!==tc&&i instanceof tc)return e,t,n);if(i&&i.base64)return e,n);var o=fc[e.type];return void 0!==e.data&&(o+=r?Ql(String(e.data),{strict:!1}):String(e.data)),n(""+o)},cc.encodeBase64Packet=cc.decodePacket=function(e,t,r){if(void 0===e)return gc;if("string"==typeof e){if("b"===e.charAt(0))return cc.decodeBase64Packet(e.substr(1),t);if(r&&!1===(e=function(e){try{e=Zl(e,{strict:!1})}catch(Td){return!1}return e}(e)))return gc;var n=e.charAt(0);return Number(n)==n&&yc[n]?e.length>1?{type:yc[n],data:e.substring(1)}:{type:yc[n]}:gc}n=new Uint8Array(e)[0];var i=Nl(e,1);return tc&&"blob"===t&&(i=new tc([i])),{type:yc[n],data:i}},cc.decodeBase64Packet=cc.encodePayload=cc.decodePayload=cc.encodePayloadAsArrayBuffer=cc.encodePayloadAsBlob=cc.decodePayloadAsBinary=var mc={};c=bc,Rl(bc.prototype),bc.prototype.onError=bc.prototype.open=bc.prototype.close=bc.prototype.send=bc.prototype.onOpen=bc.prototype.onData=bc.prototype.onPacket=bc.prototype.onClose=var wc={};try{wc="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(gc){wc=!1}var _c,Sc=kc=Pc={},Cc="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Ac={},Fc=0,Ec=0;r(;Ec<64;Ec++)Ac[Cc[Ec]]=Ec;Uc.encode=Oc,Uc.decode=Pc=Uc;var Rc=sl("engine.io-client:polling"),Tc=Dc,xc=null!=new Sc({xdomain:!1}).responseType;c(Dc,mc),Dc.prototype.name="polling",Dc.prototype.doOpen=function(){this.poll()},Dc.prototype.pause=Dc.prototype.poll=Dc.prototype.onData=Dc.prototype.doClose=Dc.prototype.write=Dc.prototype.uri=var Bc={},Ic=sl("engine.io-client:polling-xhr");function jc(){}((Bc=Mc).Request=Lc,kc(Mc,Tc),Mc.prototype.supportsBinary=!0,Mc.prototype.request=Mc.prototype.doWrite=Mc.prototype.doPoll=Rl(Lc.prototype),Lc.prototype.create=Lc.prototype.onSuccess=Lc.prototype.onData=Lc.prototype.onError=Lc.prototype.cleanup=Lc.prototype.onLoad=Lc.prototype.hasXDR=Lc.prototype.abort=function(){this.cleanup()},Lc.requestsCount=0,Lc.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",zc);else if("function"==typeof addEventListener){var Nc="onpagehide"in self?"pagehide":"unload";addEventListener(Nc,zc,!1)}ar qc={};(function(e){qc=s;var t,r=/\n/g,n=/\\n/g;s,Tc),s.prototype.supportsBinary=!1,s.prototype.doClose=s.prototype.doPoll=s.prototype.doWrite=).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Hc={};(function(e){var t,r,n=sl("engine.io-client:websocket");if("undefined"!=typeof WebSocket)t=WebSocket;else if("undefined"!=typeof self)t=self.WebSocket||self.MozWebSocket;else try{r=o({})}catch(Td){}var i=t||r;c=s,kc(s,mc),s.prototype.name="websocket",s.prototype.supportsBinary=!0,s.prototype.doOpen=s.prototype.addEventListeners=s.prototype.write=s.prototype.onClose=s.prototype.doClose=s.prototype.uri=s.prototype.check=).call(this,s({}).Buffer);var Vc={polling:;Vc.websocket=Hc;var Wc,Xc=sl("engine.io-client:socket");c=Gc,Gc.priorWebsocketSuccess=!1,Rl(Gc.prototype),Gc.protocol=cc.protocol,Gc.Socket=Gc,Gc.Transport=mc,Gc.transports=Vc,Gc.parser=cc,Gc.prototype.createTransport=Gc.prototype.open=Gc.prototype.setTransport=Gc.prototype.probe=Gc.prototype.onOpen=Gc.prototype.onPacket=Gc.prototype.onHandshake=Gc.prototype.onHeartbeat=Gc.prototype.setPing=Gc.prototype.ping=Gc.prototype.onDrain=Gc.prototype.flush=Gc.prototype.write=Gc.prototype.send=Gc.prototype.sendPacket=Gc.prototype.close=Gc.prototype.onError=Gc.prototype.onClose=Gc.prototype.filterUpgrades=var $c={};($c=Wc).parser=cc;var Kc={exports:{}};c.exports=Yc,Yc.prototype.on=Yc.prototype.addEventListener=Yc.prototype.once=Yc.prototype.off=Yc.prototype.removeListener=Yc.prototype.removeAllListeners=Yc.prototype.removeEventListener=Yc.prototype.emit=Yc.prototype.listeners=Yc.prototype.hasListeners=Kc=Kc.exports;var Jc=Qc=Zc=[].slice,ep=tp={},rp=sl("socket.io-client:socket");tp=tp=op;var np={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},ip=Kc.prototype.emit;c(op.prototype),op.prototype.subEvents=op.prototype.open=op.prototype.connect=op.prototype.send=op.prototype.emit=op.prototype.packet=op.prototype.onopen=op.prototype.onclose=op.prototype.onpacket=op.prototype.onevent=op.prototype.ack=op.prototype.onack=op.prototype.onconnect=op.prototype.emitBuffered=op.prototype.ondisconnect=op.prototype.destroy=op.prototype.close=op.prototype.disconnect=op.prototype.compress=function(e){return this.flags.compress=e,this},op.prototype.binary=var sp={};p=ap,ap.prototype.duration=ap.prototype.reset=ap.prototype.setMin=function(e){this.ms=e},ap.prototype.setMax=function(e){this.max=e},ap.prototype.setJitter=function(e){this.jitter=e};var up={},lp=sl("socket.io-client:manager"),cp=Object.prototype.hasOwnProperty;p=pp,pp.prototype.emitAll=pp.prototype.updateSocketIds=pp.prototype.generateId=Kc(pp.prototype),pp.prototype.reconnection=pp.prototype.reconnectionAttempts=function(e){return arguments.length?(this._reconnectionAttempts=e,this):this._reconnectionAttempts},pp.prototype.reconnectionDelay=function(e){return arguments.length?(this._reconnectionDelay=e,this.backoff&&this.backoff.setMin(e),this):this._reconnectionDelay},pp.prototype.randomizationFactor=function(e){return arguments.length?(this._randomizationFactor=e,this.backoff&&this.backoff.setJitter(e),this):this._randomizationFactor},pp.prototype.reconnectionDelayMax=pp.prototype.timeout=pp.prototype.maybeReconnectOnOpen=pp.prototype.open=pp.prototype.connect=pp.prototype.onopen=pp.prototype.onping=pp.prototype.onpong=pp.prototype.ondata=function(e){this.decoder.add(e)},pp.prototype.ondecoded=function(e){this.emit("packet",e)},pp.prototype.onerror=pp.prototype.socket=pp.prototype.destroy=pp.prototype.packet=pp.prototype.processPacketQueue=pp.prototype.cleanup=pp.prototype.close=pp.prototype.disconnect=pp.prototype.onclose=pp.prototype.reconnect=pp.prototype.onreconnect=var dp={exports:{}};function hp(e){if(e)return function(e){for(var t in hp.prototype)e[t]=hp.prototype[t];return e}(e)}dp.exports=hp,hp.prototype.on=hp.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},hp.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this},hp.prototype.off=hp.prototype.removeListener=hp.prototype.removeAllListeners=hp.prototype.removeEventListener=hp.prototype.emit=hp.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},hp.prototype.hasListeners=function(e){return!!this.listeners(e).length},dp=dp.exports;function fp(){return(fp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var yp,gp=["ASSEMBLY_UPLOADING","ASSEMBLY_EXECUTING","ASSEMBLY_COMPLETED"];ar mp=function(e){var t,r;function n(t){var r;return(r=e.call(this)||this).status=t,r.socket=null,r.pollInterval=null,r.closed=!1,r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.connect=o._onFinished=function(){this.emit("finished"),this.close()},o._connectSocket=function(){var e=this,t=this.status.websocket_url),r=(yp||(yp=i({})),yp).connect(t.origin,{transports:["websocket"],path:t.pathname});r.on("connect",(),r.on("connect_failed",(function(){e._onError(new Te("Transloadit Socket.io connection error")),e.socket=null})),r.on("error",(),r.on("assembly_finished",(function(){e._onFinished()})),r.on("assembly_upload_finished",(),r.on("assembly_uploading_finished",(function(){e.emit("executing")})),r.on("assembly_upload_meta_data_extracted",(),r.on("assembly_result_finished",(),r.on("assembly_error",(),this.socket=r},o._onError=function(e){this.emit("error",fp(new Error(e.message),e))},o._beginPolling=function(){var e=this;this.pollInterval=setInterval((function(){e.socket&&e.socket.connected||e._fetchStatus()}),2e3)},o._fetchStatus=function(e){var t=this,r=(void 0===e?{}:e).diff,n=void 0===r||r;return xe(this.status.assembly_ssl_url).then((function(e){return e.json()})).then((function(e){t.closed||(t.emit("status",e),n?t.updateStatus(e):t.status=e)})).catch((function(e){return t._onError(e)}))},o.update=o.updateStatus=o._diffStatus=function(e,t){var r=this,n=e.ok,i=t.ok;if(t.error&&!e.error)return this._onError(t);var o=vp(i,"ASSEMBLY_EXECUTING")&&!vp(n,"ASSEMBLY_EXECUTING");o&&this.emit("executing"),Object.keys(t.uploads).filter(().map((function(e){return t.uploads[e]})).forEach((function(e){r.emit("upload",e)})),o&&this.emit("metadata"),Object.keys(t.results).forEach((),vp(i,"ASSEMBLY_COMPLETED")&&!vp(n,"ASSEMBLY_COMPLETED")&&this.emit("finished")},o.close=function(){this.closed=!0,this.socket&&(this.socket.disconnect(),this.socket=null),clearInterval(this.pollInterval)},n}(dp),bp=function(){function e(e){void 0===e&&(e={}),this.opts=e,this._reportError=this._reportError.bind(this),this._headers={"Transloadit-Client":this.opts.client}}var t=e.prototype;return t.createAssembly=function(e){var t=this,r=(e.templateId,e.params),n=e.fields,i=e.signature,o=e.expectedFiles,s=new FormData;s.append("params","string"==typeof r?r:JSON.stringify(r)),i&&s.append("signature",i),Object.keys(n).forEach((function(e){s.append(e,n[e])})),s.append("num_expected_upload_files",o);var a=this.opts.service+"/assemblies";return xe(a,{method:"post",headers:this._headers,body:s}).then((function(e){return e.json()})).then((function(e){if(e.error){var t=new Error(e.error);throw t.details=e.message,t.assembly=e,e.assembly_id&&(t.details+=" Assembly ID: "+e.assembly_id),t}return e})).catch((function(e){return t._reportError(e,{url:a,type:"API_ERROR"})}))},t.reserveFile=function(e,t){var r=this,n=encodeURIComponent(t.size),i=e.assembly_ssl_url+"/reserve_file?size="+n;return xe(i,{method:"post",headers:this._headers}).then((function(e){return e.json()})).catch((function(n){return r._reportError(n,{assembly:e,file:t,url:i,type:"API_ERROR"})}))},t.addFile=function(e,t){var r=this;if(!t.uploadURL)return Promise.reject(new Error("File does not have an `uploadURL`."));var n=encodeURIComponent(t.size),i=encodeURIComponent(t.uploadURL),o="size="+n+"&filename="+encodeURIComponent(t.name)+"&fieldname=file&s3Url="+i,s=e.assembly_ssl_url+"/add_file?"+o;return xe(s,{method:"post",headers:this._headers}).then((function(e){return e.json()})).catch((function(n){return r._reportError(n,{assembly:e,file:t,url:s,type:"API_ERROR"})}))},t.cancelAssembly=function(e){var t=this,r=e.assembly_ssl_url;return xe(r,{method:"delete",headers:this._headers}).then((function(e){return e.json()})).catch((function(e){return t._reportError(e,{url:r,type:"API_ERROR"})}))},t.getAssemblyStatus=function(e){var t=this;return xe(e,{headers:this._headers}).then((function(e){return e.json()})).catch(()},t.submitError=function(e,t){var r=t.endpoint,n=t.instance,i=t.assembly,o=e.details?e.message+" ("+e.details+")":e.message;return xe("https://transloaditstatus.com/client_error",{method:"post",body:JSON.stringify({endpoint:r,instance:n,assembly_id:i,agent:"undefined"!=typeof navigator?navigator.userAgent:"",client:this.opts.client,error:o})}).then((function(e){return e.json()}))},t._reportError=function(e,t){if(!1===this.opts.errorReporting)throw e;var r={type:t.type};throw t.assembly&&(r.assembly=t.assembly.assembly_id,r.instance=t.assembly.instance),t.url&&(r.endpoint=t.url),this.submitError(e,r).catch((function(e){})),e},e}(),wp={};function _p(e){if(!e)throw new Error("Transloadit: The `params` option is required.");if("string"==typeof e)try{e=JSON.parse(e)}catch(gc){throw gc.message="Transloadit: The `params` option is a malformed JSON string: "+gc.message,gc}if(!e.auth||!e.auth.key)throw new Error("Transloadit: The `params.auth.key` option is required. You can find your Transloadit API key at https://transloadit.com/account/api-settings.")}var Sp=function(){function e(e,t){this.files=e,this.opts=t}var t=e.prototype;return t._normalizeAssemblyOptions=function(e,t){if(Array.isArray(t.fields)){var r=t.fields;t.fields={},r.forEach(()}return t.fields||(t.fields={}),t},t._getAssemblyOptions=function(e){var t=this,r=this.opts;return Promise.resolve().then((function(){return r.getAssemblyOptions(e,r)})).then((function(r){return t._normalizeAssemblyOptions(e,r)})).then((function(t){return _p(t.params),{fileIDs:[e.id],options:t}}))},t._dedupe=function(e){var t=Object.create(null);return e.forEach((function(e){var r,n=e.fileIDs,i=e.options,o=JSON.stringify(i);t[o]?(r=t[o].fileIDs).push.apply(r,n):t[o]={options:i,fileIDs:[].concat(n)}})),Object.keys(t).map((function(e){return t[e]}))},t.build=function(){var e=this,t=this.opts;return this.files.length>0?Promise.all(this.files.map((function(t){return e._getAssemblyOptions(t)}))).then((function(t){return e._dedupe(t)})):t.alwaysRunAssembly?Promise.resolve(t.getAssemblyOptions(null,t)).then((function(t){return _p(t.params),[{fileIDs:e.files.map((function(e){return e.id})),options:t}]})):Promise.resolve([])},e}();function kp(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(wp=Sp).validateParams=_p;var Pp,Cp,Ap=function(e){var t,r;function n(t,r){var n;return(n=e.call(this)||this)._uppy=t,n._assemblyIDs=r,n._remaining=r.length,n.promise=new Promise((function(e,t){n._resolve=e,n._reject=t})),n._onAssemblyComplete=n._onAssemblyComplete.bind(kp(n)),n._onAssemblyCancel=n._onAssemblyCancel.bind(kp(n)),n._onAssemblyError=n._onAssemblyError.bind(kp(n)),n._onImportError=n._onImportError.bind(kp(n)),n._addListeners(),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i._watching=i._onAssemblyComplete=function(e){this._watching(e.assembly_id)&&(this._uppy.log("[Transloadit] AssemblyWatcher: Got Assembly finish "+e.assembly_id),this.emit("assembly-complete",e.assembly_id),this._checkAllComplete())},i._onAssemblyCancel=i._onAssemblyError=function(e,t){this._watching(e.assembly_id)&&(this._uppy.log("[Transloadit] AssemblyWatcher: Got Assembly error "+e.assembly_id),this._uppy.log(t),this.emit("assembly-error",e.assembly_id,t),this._checkAllComplete())},i._onImportError=function(e,t,r){this._watching(e.assembly_id)&&this._onAssemblyError(e,r)},i._checkAllComplete=function(){this._remaining-=1,0===this._remaining&&(this._removeListeners(),this._resolve())},i._removeListeners=function(){this._uppy.off("transloadit:complete",this._onAssemblyComplete),this._uppy.off("transloadit:assembly-cancel",this._onAssemblyCancel),this._uppy.off("transloadit:assembly-error",this._onAssemblyError),this._uppy.off("transloadit:import-error",this._onImportError)},i._addListeners=n}(dp),Fp={};function Ep(){return(Ep=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Op(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}ar Rp="https://api2.transloadit.com/companion",Tp=/https?:\/\/api2(?:-\w+)?\.transloadit\.com\/companion/,xp=/https?:\/\/api2(?:-\w+)?\.transloadit\.com\/uppy-server/;Cp=Pp=function(e){var t,r;function n(t,r){var n;(n=e.call(this,t,r)||this).type="uploader",n.id=n.opts.id||"Transloadit",n.title="Transloadit",n.defaultLocale={strings:{creatingAssembly:"Preparing upload...",creatingAssemblyFailed:"Transloadit: Could not create Assembly",encoding:"Encoding..."}};var i={service:"https://api2.transloadit.com",errorReporting:!0,waitForEncoding:!1,waitForMetadata:!1,alwaysRunAssembly:!1,importFromUploadURLs:!1,signature:null,params:null,fields:{},getAssemblyOptions:Up,limit:0};n.opts=Ep({},i,r),n.i18nInit(),n._prepareUpload=n._prepareUpload.bind(Op(n)),n._afterUpload=n._afterUpload.bind(Op(n)),n._onError=n._onError.bind(Op(n)),n._onTusError=n._onTusError.bind(Op(n)),n._onCancelAll=n._onCancelAll.bind(Op(n)),n._onFileUploadURLAvailable=n._onFileUploadURLAvailable.bind(Op(n)),n._onRestored=n._onRestored.bind(Op(n)),n._getPersistentData=n._getPersistentData.bind(Op(n));var o=n.opts.getAssemblyOptions!==i.getAssemblyOptions;return n.opts.params?wp.validateParams(n.opts.params):o||wp.validateParams(null),n.client=new bp({service:n.opts.service,client:n._getClientVersion(),errorReporting:n.opts.errorReporting}),n.activeAssemblies={},n.assemblyWatchers={},n.completedFiles=Object.create(null),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.setOptions=function(t){e.prototype.setOptions.call(this,t),this.i18nInit()},i.i18nInit=function(){this.translator=new A([this.defaultLocale,this.uppy.locale,this.opts.locale]),this.i18n=this.translator.translate.bind(this.translator),this.i18nArray=this.translator.translateArray.bind(this.translator),this.setPluginState()},i._getClientVersion=function(){var e=this,t=["uppy-core:"+this.uppy.constructor.VERSION,"uppy-transloadit:"+this.constructor.VERSION,"uppy-tus:"+Ku.VERSION],r=function(r,n){var i=e.uppy.getPlugin(r);i&&t.push(n+":"+i.constructor.VERSION)};return this.opts.importFromUploadURLs&&(r("XHRUpload","uppy-xhr-upload"),r("AwsS3","uppy-aws-s3"),r("AwsS3Multipart","uppy-aws-s3-multipart")),r("Dropbox","uppy-dropbox"),r("Facebook","uppy-facebook"),r("GoogleDrive","uppy-google-drive"),r("Instagram","uppy-instagram"),r("OneDrive","uppy-onedrive"),r("Zoom","uppy-zoom"),r("Url","uppy-url"),t.join(",")},i._attachAssemblyMetadata=function(e,t){var r=Ep({},e.meta,{assembly_url:t.assembly_url,filename:e.name,fieldname:"file"}),n=Ep({},e.tus,{endpoint:t.tus_url,addRequestId:!0}),i=e.remote;if(e.remote&&xp.test(e.remote.companionUrl)){var o=new Error("The https://api2.transloadit.com/uppy-server endpoint was renamed to https://api2.transloadit.com/companion, please update your `companionUrl` options accordingly.");throw this.uppy.log(o),o}if(e.remote&&Tp.test(e.remote.companionUrl)){var s=t.companion_url.replace(/\/$/,""),a=e.remote.url.replace(e.remote.companionUrl,"").replace(/^\//,"");i=Ep({},e.remote,{companionUrl:s,url:s+"/"+a})}var u=Ep({},e,{transloadit:{assembly:t.assembly_id}});return this.opts.importFromUploadURLs||Ep(u,{meta:r,tus:n,remote:i}),u},i._createAssembly=function(e,t,r){var n=this;return this.uppy.log("[Transloadit] Create Assembly"),this.client.createAssembly({params:r.params,fields:r.fields,expectedFiles:e.length,signature:r.signature}).then((function(r){var i,o,s=new mp(r),a=s.status,u=a.assembly_id,l=n.getPluginState(),c=l.assemblies,p=l.uploadsAssemblies;n.setPluginState({assemblies:Ep({},c,(i={},i[u]=a,i)),uploadsAssemblies:Ep({},p,(o={},o[t]=[].concat(p[t],[u]),o))});var d=n.uppy.getState().files,h={};return e.forEach((function(e){h[e]=n._attachAssemblyMetadata(n.uppy.getFile(e),a)})),n.uppy.setState({files:Ep({},d,h)}),n.uppy.emit("transloadit:assembly-created",a,e),n.uppy.log("[Transloadit] Created Assembly "+u),s})).catch((function(e){throw e.message=n.i18n("creatingAssemblyFailed")+": "+e.message,e}))},i._createAssemblyWatcher=function(e,t,r){var n=this,i=new Ap(this.uppy,e);i.on("assembly-complete",(),i.on("assembly-error",(),this.assemblyWatchers[r]=i},i._shouldWaitAfterUpload=i._reserveFiles=function(e,t){var r=this;return Promise.all(t.map((function(t){var n=r.uppy.getFile(t);return r.client.reserveFile(e,n)})))},i._onFileUploadURLAvailable=function(e){var t=this;if(e&&e.transloadit&&e.transloadit.assembly){var r=this.getPluginState().assemblies[e.transloadit.assembly];this.client.addFile(r,e).catch(()}},i._findFile=function(e){for(var t=this.uppy.getFiles(),r=0;r<t.length;r++){var n=t[r];if(n.uploadURL===e.tus_upload_url)return n;if(n.tus&&n.tus.uploadUrl===e.tus_upload_url)return n;if(!e.is_tus_file&&n.name===e.name&&n.size===e.size)return n}},i._onFileUploadComplete=function(e,t){var r,n=this.getPluginState(),i=this._findFile(t);i?(this.setPluginState({files:Ep({},n.files,(r={},r[t.id]={assembly:e,id:i.id,uploadedFile:t},r))}),this.uppy.emit("transloadit:upload",t,this.getAssembly(e))):this.uppy.log("[Transloadit] Couldn\u2019t file the file, it was likely removed in the process")},i._onResult=function(e,t,r){var n=this.getPluginState(),i=n.files[r.original_id];r.localId=i?i.id:null;var o={result:r,stepName:t,id:r.id,assembly:e};this.setPluginState({results:[].concat(n.results,[o])}),this.uppy.emit("transloadit:result",t,r,this.getAssembly(e))},i._onAssemblyFinished=function(e){var t=this,r=e.assembly_ssl_url;this.client.getAssemblyStatus(r).then((function(e){var r,n=e.assembly_id,i=t.getPluginState();t.setPluginState({assemblies:Ep({},i.assemblies,(r={},r[n]=e,r))}),t.uppy.emit("transloadit:complete",e)}))},i._cancelAssembly=function(e){var t=this;return this.client.cancelAssembly(e).then(()},i._onCancelAll=function(){var e=this,t=this.getPluginState().uploadsAssemblies,r=Object.keys(t).reduce((,[]).map(();Promise.all(r).catch((function(t){e.uppy.log(t)}))},i._getPersistentData=function(e){var t,r=this.getPluginState(),n=r.assemblies,i=r.uploadsAssemblies;e(((t={})[this.id]={assemblies:n,uploadsAssemblies:i},t))},i._onRestored=function(e){var t=this,r=e&&e[this.id]?e[this.id]:{},n=r.assemblies||{},i=r.uploadsAssemblies||{};0!==Object.keys(i).length&&(this.restored=Promise.resolve().then((function(){var e,r,o;return e=n,r={},o=[],Object.keys(e).forEach((function(n){var i=e[n];i.uploads.forEach((function(e){var i=t._findFile(e);r[e.id]={id:i.id,assembly:n,uploadedFile:e}}));var s=t.getPluginState();Object.keys(i.results).forEach((function(e){i.results[e].forEach((function(t){var r=s.files[t.original_id];t.localId=r?r.id:null,o.push({id:t.id,result:t,stepName:e,assembly:n})}))}))})),t.setPluginState({assemblies:e,files:r,results:o,uploadsAssemblies:i}),function(){var e=t.getPluginState(),r=e.assemblies,n=e.uploadsAssemblies;Object.keys(n).forEach((function(e){var r=n[e],i=r.reduce((function(e,r){var n=t.getAssemblyFiles(r).map((function(e){return e.id}));return e.push.apply(e,n),e}),[]);t._createAssemblyWatcher(r,i,e)})),Object.keys(r).forEach((function(e){var n=new mp(r[e]);t._connectAssembly(n)}))}(),function(){var e=t.getPluginState().assemblies;return Promise.all(Object.keys(e).map(())}()})),this.restored.then(())},i._connectAssembly=function(e){var t=this,r=e.status.assembly_id;return this.activeAssemblies[r]=e,e.on("status",(function(e){var n,i=t.getPluginState().assemblies;t.setPluginState({assemblies:Ep({},i,(n={},n[r]=e,n))})})),e.on("upload",(function(e){t._onFileUploadComplete(r,e)})),e.on("error",(),e.on("executing",(),this.opts.waitForEncoding&&e.on("result",(),this.opts.waitForEncoding?e.on("finished",(function(){t._onAssemblyFinished(e.status)})):this.opts.waitForMetadata&&e.on("metadata",(function(){t._onAssemblyFinished(e.status)})),"ASSEMBLY_COMPLETE"===e.ok||(new Promise(().then((function(){t.uppy.log("[Transloadit] Socket is ready")})),e.connect()),e},i._prepareUpload=function(e,t){var r,n=this;(e=e.filter((function(e){return!e.error}))).forEach((function(e){var t=n.uppy.getFile(e);n.uppy.emit("preprocess-progress",t,{mode:"indeterminate",message:n.i18n("creatingAssembly")})}));var i=function(e){var r,i=e.fileIDs,o=e.options;return n._createAssembly(i,t,o).then((function(e){if(r=e,n.opts.importFromUploadURLs)return n._reserveFiles(e,i)})).then((function(){return i.forEach((function(e){var t=n.uppy.getFile(e);n.uppy.emit("preprocess-complete",t)})),r})).catch((function(e){throw i.forEach((function(t){var r=n.uppy.getFile(t);n.uppy.emit("preprocess-complete",r),n.uppy.emit("upload-error",r,e)})),e}))},o=this.getPluginState().uploadsAssemblies;this.setPluginState({uploadsAssemblies:Ep({},o,(r={},r[t]=[],r))});var s=e.map((function(e){return n.uppy.getFile(e)}));return new wp(s,this.opts).build().then((function(r){return Promise.all(r.map(i)).then((function(r){var i=r.map((function(e){return e.status.assembly_id}));n._createAssemblyWatcher(i,e,t),r.map((function(e){return n._connectAssembly(e)}))}))}),(function(t){throw e.forEach((function(e){var r=n.uppy.getFile(e);n.uppy.emit("preprocess-complete",r),n.uppy.emit("upload-error",r,t)})),t}))},i._afterUpload=function(e,t){var r=this,n=e.map((function(e){return r.uppy.getFile(e)}));e=n.filter((function(e){return!e.error})).map((function(e){return e.id}));var i=this.getPluginState();if(this.restored)return this.restored.then((function(){return r._afterUpload(e,t)}));var o=i.uploadsAssemblies[t];if(!this._shouldWaitAfterUpload()){o.forEach(();var s=o.map((function(e){return r.getAssembly(e)}));return this.uppy.addResultData(t,{transloadit:s}),Promise.resolve()}return 0===o.length?(this.uppy.addResultData(t,{transloadit:[]}),Promise.resolve()):(n.filter(().forEach((),this.assemblyWatchers[t].promise.then((function(){var e=o.map((function(e){return r.getAssembly(e)})),n=Ep({},r.getPluginState().uploadsAssemblies);delete n[t],r.setPluginState({uploadsAssemblies:n}),r.uppy.addResultData(t,{transloadit:e})})))},i._onError=function(e,t){var r=this;void 0===e&&(e=null),this.getPluginState().uploadsAssemblies[t].forEach(()},i._onTusError=function(e){if(e&&/^tus: /.test(e.message)){var t=e.originalRequest?e.originalRequest.getUnderlyingObject():null,r=t&&t.responseURL?t.responseURL:null;this.client.submitError(e,{url:r,type:"TUS_ERROR"}).then((function(e){}))}},i.install=function(){this.uppy.addPreProcessor(this._prepareUpload),this.uppy.addPostProcessor(this._afterUpload),this.uppy.on("error",this._onError),this.uppy.on("cancel-all",this._onCancelAll),this.uppy.on("upload-error",this._onTusError),this.opts.importFromUploadURLs?this.uppy.on("upload-success",this._onFileUploadURLAvailable):this.uppy.use(Ku,{storeFingerprintForResuming:!1,resume:!1,useFastRemoteRetry:!1,metaFields:["assembly_url","filename","fieldname"],limit:this.opts.limit}),this.uppy.on("restore:get-data",this._getPersistentData),this.uppy.on("restored",this._onRestored),this.setPluginState({assemblies:{},uploadsAssemblies:{},files:{},results:[]});var e=this.uppy.getState().capabilities;this.uppy.setState({capabilities:Ep({},e,{individualCancellation:!1})})},i.uninstall=function(){this.uppy.removePreProcessor(this._prepareUpload),this.uppy.removePostProcessor(this._afterUpload),this.uppy.off("error",this._onError),this.opts.importFromUploadURLs&&this.uppy.off("upload-success",this._onFileUploadURLAvailable);var e=this.uppy.getState().capabilities;this.uppy.setState({capabilities:Ep({},e,{individualCancellation:!0})})},i.getAssembly=function(e){return this.getPluginState().assemblies[e]},i.getAssemblyFiles=function(e){return this.uppy.getFiles().filter(()},n}(le.Plugin),Pp.VERSION="1.6.10",(Fp=Cp).COMPANION=Rp,Fp.UPPY_SERVER=Rp,Fp.COMPANION_PATTERN=/\.transloadit\.com$/;var Dp,Bp;function Ip(){return(Ip=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var jp=Le.Provider,Mp=Le.RequestClient,Lp=Le.Socket;function Np(e,t){return t||(t=new Error("Upload error")),"string"==typeof t&&(t=new Error(t)),t instanceof Error||(t=Ip(new Error("Upload error"),{data:t})),ms(e)?t=new Te(t,e):(t.request=e,t)}function zp(e){return e.data.slice(0,e.data.size,e.meta.type)}var qp=(Bp=Dp=function(e){var t,r;function n(t,r){var n;(n=e.call(this,t,r)||this).type="uploader",n.id=n.opts.id||"XHRUpload",n.title="XHRUpload",n.defaultLocale={strings:{timedOut:"Upload stalled for %{seconds} seconds, aborting."}};var i={formData:!0,fieldName:"files[]",method:"post",metaFields:null,responseUrlFieldName:"url",bundle:!1,headers:{},timeout:3e4,limit:0,withCredentials:!1,responseType:"",getResponseData:function(e,t){var r={};try{r=JSON.parse(e)}catch(gc){console.log(gc)}return r},getResponseError:function(e,t){var r=new Error("Upload error");return ms(t)&&(r=new Te(r,t)),r},validateStatus:function(e,t,r){return e>=200&&e<300}};if(n.opts=Ip({},i,r),n.i18nInit(),n.handleUpload=n.handleUpload.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n.opts.__queue instanceof ps?n.requests=n.opts.__queue:n.requests=new ps(n.opts.limit),n.opts.bundle&&!n.opts.formData)throw new Error("`opts.formData` must be true when `opts.bundle` is enabled.");return n.uploaderEvents=Object.create(null),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.setOptions=function(t){e.prototype.setOptions.call(this,t),this.i18nInit()},i.i18nInit=function(){this.translator=new A([this.defaultLocale,this.uppy.locale,this.opts.locale]),this.i18n=this.translator.translate.bind(this.translator),this.setPluginState()},i.getOptions=function(e){var t=this.uppy.getState().xhrUpload,r=Ip({},this.opts,t||{},e.xhrUpload||{},{headers:{}});return Ip(r.headers,this.opts.headers),t&&Ip(r.headers,t.headers),e.xhrUpload&&Ip(r.headers,e.xhrUpload.headers),r},i.addMetadata=function(e,t,r){(Array.isArray(r.metaFields)?r.metaFields:Object.keys(t)).forEach((function(r){e.append(r,t[r])}))},i.createFormDataUpload=function(e,t){var r=new FormData;this.addMetadata(r,e.meta,t);var n=zp(e);return e.name?r.append(t.fieldName,n,e.meta.name):r.append(t.fieldName,n),r},i.createBundledUpload=function(e,t){var r=this,n=new FormData,i=this.uppy.getState().meta;return this.addMetadata(n,i,t),e.forEach((function(e){var t=r.getOptions(e),i=zp(e);e.name?n.append(t.fieldName,i,e.name):n.append(t.fieldName,i)})),n},i.createBareUpload=function(e,t){return e.data},i.upload=function(e,t,r){var n=this,i=this.getOptions(e);return this.uppy.log("uploading "+t+" of "+r),new Promise((function(t,r){n.uppy.emit("upload-started",e);var o=i.formData?n.createFormDataUpload(e,i):n.createBareUpload(e,i),s=new XMLHttpRequest;n.uploaderEvents[e.id]=new gs(n.uppy);var a=new vs(i.timeout,(function(){s.abort(),l.done();var t=new Error(n.i18n("timedOut",{seconds:Math.ceil(i.timeout/1e3)}));n.uppy.emit("upload-error",e,t),r(t)})),u=I();s.upload.addEventListener("loadstart",(),s.upload.addEventListener("progress",(function(t){n.uppy.log("[XHRUpload] "+u+" progress: "+t.loaded+" / "+t.total),a.progress(),t.lengthComputable&&n.uppy.emit("upload-progress",e,{uploader:n,bytesUploaded:t.loaded,bytesTotal:t.total})})),s.addEventListener("load",(function(o){if(n.uppy.log("[XHRUpload] "+u+" finished"),a.done(),l.done(),n.uploaderEvents[e.id]&&(n.uploaderEvents[e.id].remove(),n.uploaderEvents[e.id]=null),i.validateStatus(o.target.status,s.responseText,s)){var c=i.getResponseData(s.responseText,s),p=c[i.responseUrlFieldName],d={status:o.target.status,body:c,uploadURL:p};return n.uppy.emit("upload-success",e,d),p&&n.uppy.log("Download "+e.name+" from "+p),t(e)}var h=i.getResponseData(s.responseText,s),f=Np(s,i.getResponseError(s.responseText,s)),y={status:o.target.status,body:h};return n.uppy.emit("upload-error",e,f,y),r(f)})),s.addEventListener("error",(function(t){n.uppy.log("[XHRUpload] "+u+" errored"),a.done(),l.done(),n.uploaderEvents[e.id]&&(n.uploaderEvents[e.id].remove(),n.uploaderEvents[e.id]=null);var o=Np(s,i.getResponseError(s.responseText,s));return n.uppy.emit("upload-error",e,o),r(o)})),s.open(i.method.toUpperCase(),i.endpoint,!0),s.withCredentials=i.withCredentials,""!==i.responseType&&(s.responseType=i.responseType),Object.keys(i.headers).forEach(();var l=n.requests.run((function(){return s.send(o),function(){a.done(),s.abort()}}));n.onFileRemove(e.id,(function(){l.abort(),r(new Error("File removed"))})),n.onCancelAll(e.id,()}))},i.uploadRemote=function(e,t,r){var n=this,i=this.getOptions(e);return new Promise((function(t,r){n.uppy.emit("upload-started",e);var o={};(Array.isArray(i.metaFields)?i.metaFields:Object.keys(e.meta)).forEach((function(t){o[t]=e.meta[t]})),new(e.remote.providerOptions.provider?jp:Mp)(n.uppy,e.remote.providerOptions).post(e.remote.url,Ip({},e.remote.body,{endpoint:i.endpoint,size:e.data.size,fieldname:i.fieldName,metadata:o,httpMethod:i.method,useFormData:i.formData,headers:i.headers})).then((function(o){var s=o.token,a=ys(e.remote.companionUrl),u=new Lp({target:a+"/api/"+s,autoOpen:!1});n.uploaderEvents[e.id]=new gs(n.uppy),n.onFileRemove(e.id,(function(){u.send("pause",{}),l.abort(),t("upload "+e.id+" was removed")})),n.onCancelAll(e.id,(function(){u.send("pause",{}),l.abort(),t("upload "+e.id+" was canceled")})),n.onRetry(e.id,(function(){u.send("pause",{}),u.send("resume",{})})),n.onRetryAll(e.id,(function(){u.send("pause",{}),u.send("resume",{})})),u.on("progress",(function(t){return fs(n,t,e)})),u.on("success",(function(r){var o=i.getResponseData(r.response.responseText,r.response),s=o[i.responseUrlFieldName],a={status:r.response.status,body:o,uploadURL:s};return n.uppy.emit("upload-success",e,a),l.done(),n.uploaderEvents[e.id]&&(n.uploaderEvents[e.id].remove(),n.uploaderEvents[e.id]=null),t()})),u.on("error",(function(t){var o=t.response,s=o?i.getResponseError(o.responseText,o):Ip(new Error(t.error.message),{cause:t.error});n.uppy.emit("upload-error",e,s),l.done(),n.uploaderEvents[e.id]&&(n.uploaderEvents[e.id].remove(),n.uploaderEvents[e.id]=null),r(s)}));var l=n.requests.run((function(){return u.open(),e.isPaused&&u.send("pause",{}),function(){return u.close()}}))})).catch((function(t){n.uppy.emit("upload-error",e,t),r(t)}))}))},i.uploadBundle=function(e){var t=this;return new Promise((function(r,n){var i=t.opts.endpoint,o=t.opts.method,s=t.uppy.getState().xhrUpload,a=t.createBundledUpload(e,Ip({},t.opts,s||{})),u=new XMLHttpRequest,l=new vs(t.opts.timeout,(function(){u.abort();var e=new Error(t.i18n("timedOut",{seconds:Math.ceil(t.opts.timeout/1e3)}));c(e),n(e)})),c=function(r){e.forEach((function(e){t.uppy.emit("upload-error",e,r)}))};u.upload.addEventListener("loadstart",(),u.upload.addEventListener("progress",(function(r){l.progress(),r.lengthComputable&&e.forEach((function(e){t.uppy.emit("upload-progress",e,{uploader:t,bytesUploaded:r.loaded/r.total*e.size,bytesTotal:e.size})}))})),u.addEventListener("load",(function(i){if(l.done(),t.opts.validateStatus(i.target.status,u.responseText,u)){var o=t.opts.getResponseData(u.responseText,u),s={status:i.target.status,body:o};return e.forEach((),r()}var a=t.opts.getResponseError(u.responseText,u)||new Error("Upload error");return a.request=u,c(a),n(a)})),u.addEventListener("error",(function(e){l.done();var r=t.opts.getResponseError(u.responseText,u)||new Error("Upload error");return c(r),n(r)})),t.uppy.on("cancel-all",(function(){l.done(),u.abort()})),u.open(o.toUpperCase(),i,!0),u.withCredentials=t.opts.withCredentials,""!==t.opts.responseType&&(u.responseType=t.opts.responseType),Object.keys(t.opts.headers).forEach((),u.send(a),e.forEach(()}))},i.uploadFiles=function(e){var t=this,r=e.map((function(r,n){var i=parseInt(n,10)+1,o=e.length;return r.error?Promise.reject(new Error(r.error)):r.isRemote?t.uploadRemote(r,i,o):t.upload(r,i,o)}));return ds(r)},i.onFileRemove=function(e,t){this.uploaderEvents[e].on("file-removed",(function(r){e===r.id&&t(r.id)}))},i.onRetry=function(e,t){this.uploaderEvents[e].on("upload-retry",(function(r){e===r&&t()}))},i.onRetryAll=function(e,t){var r=this;this.uploaderEvents[e].on("retry-all",(function(n){r.uppy.getFile(e)&&t()}))},i.onCancelAll=function(e,t){var r=this;this.uploaderEvents[e].on("cancel-all",(function(){r.uppy.getFile(e)&&t()}))},i.handleUpload=function(e){var t=this;if(0===e.length)return this.uppy.log("[XHRUpload] No files to upload!"),Promise.resolve();0!==this.opts.limit||this.opts.__queue||this.uppy.log("[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0","warning"),this.uppy.log("[XHRUpload] Uploading...");var r=e.map((function(e){return t.uppy.getFile(e)}));if(this.opts.bundle){if(r.some((function(e){return e.isRemote})))throw new Error("Can\u2019t upload remote files when bundle: true option is set");return this.uploadBundle(r)}return this.uploadFiles(r).then((function(){return null}))},i.install=function(){if(this.opts.bundle){var e=this.uppy.getState().capabilities;this.uppy.setState({capabilities:Ip({},e,{individualCancellation:!1})})}this.uppy.addUploader(this.handleUpload)},i.uninstall=function(){if(this.opts.bundle){var e=this.uppy.getState().capabilities;this.uppy.setState({capabilities:Ip({},e,{individualCancellation:!0})})}this.uppy.removeUploader(this.handleUpload)},n}(le.Plugin),Dp.VERSION="1.6.4",Bp),Hp={__esModule:!0};Hp.default=Yp,Hp.getFieldData=Jp;var Vp={"[object HTMLCollection]":!0,"[object NodeList]":!0,"[object RadioNodeList]":!0},Wp={button:!0,fieldset:!0,reset:!0,submit:!0},Xp={checkbox:!0,radio:!0},Gp=/^\s+|\s+$/g,$p=Array.prototype.slice,Kp=Object.prototype.toString;function Yp(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{trim:!1};if(!e)throw new Error("A form is required by getFormData, was given form="+e);for(var r={},n=void 0,i=[],o={},s=0,a=e.elements.length;s<a;s++){var u=e.elements[s];Wp[u.type]||u.disabled||(n=u.name||u.id)&&!o[n]&&(i.push(n),o[n]=!0)}for(var l=0,c=i.length;l<c;l++){var p=Jp(e,n=i[l],t);null!=p&&(r[n]=p)}return r}function Jp(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{trim:!1};if(!e)throw new Error("A form is required by getFieldData, was given form="+e);if(!t&&"[object String]"!==Kp.call(t))throw new Error("A field name is required by getFieldData, was given fieldName="+t);var n=e.elements[t];if(!n||n.disabled)return null;if(!Vp[Kp.call(n)])return Qp(n,r.trim);for(var i=[],o=!0,s=0,a=n.length;s<a;s++)if(!n[s].disabled){o&&"radio"!==n[s].type&&(o=!1);var u=Qp(n[s],r.trim);null!=u&&(i=i.concat(u))}return o&&1===i.length?i[0]:i.length>0?i:null}function Qp(e,t){var r=null,n=e.type;if("select-one"===n)return e.options.length&&(r=e.options[e.selectedIndex].value),r;if("select-multiple"===n){r=[];for(var i=0,o=e.options.length;i<o;i++)e.options[i].selected&&r.push(e.options[i].value);return 0===r.length&&(r=null),r}return"file"===n&&"files"in e?(e.multiple?0===(r=$p.call(e.files)).length&&(r=null):r=e.files[0],r):(Xp[n]?e.checked&&(r=e.value):r=t?e.value.replace(Gp,""):e.value,r)}Yp.getFieldData=Jp;var Zp,ed;function td(){return(td=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function rd(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var nd=le.Plugin,id=Hp.default||Hp,od=(ed=Zp=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).type="acquirer",n.id=n.opts.id||"Form",n.title="Form",n.opts=td({},{target:null,resultName:"uppyResult",getMetaFromForm:!0,addResultToForm:!0,multipleResults:!1,submitOnSuccess:!1,triggerUploadOnSubmit:!1},r),n.handleFormSubmit=n.handleFormSubmit.bind(rd(n)),n.handleUploadStart=n.handleUploadStart.bind(rd(n)),n.handleSuccess=n.handleSuccess.bind(rd(n)),n.addResultToForm=n.addResultToForm.bind(rd(n)),n.getMetaFromForm=n.getMetaFromForm.bind(rd(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.handleUploadStart=i.handleSuccess=function(e){this.opts.addResultToForm&&this.addResultToForm(e),this.opts.submitOnSuccess&&this.form.submit()},i.handleFormSubmit=function(e){var t=this;if(this.opts.triggerUploadOnSubmit){e.preventDefault();var r=Tn(e.target.elements),n=[];r.forEach((function(e){("BUTTON"===e.tagName||"INPUT"===e.tagName&&"submit"===e.type)&&!e.disabled&&(e.disabled=!0,n.push(e))})),this.uppy.upload().then((,(function(e){return n.forEach((function(e){e.disabled=!1})),Promise.reject(e)})).catch(()}},i.addResultToForm=function(e){this.uppy.log("[Form] Adding result to the original form:"),this.uppy.log(e);var t=this.form.querySelector('[name="'+this.opts.resultName+'"]');if(t)if(this.opts.multipleResults){var r;try{r=JSON.parse(t.value)}catch(gc){}Array.isArray(r)||(r=[]),r.push(e),t.value=JSON.stringify(r)}else t.value=JSON.stringify(e);else(t=document.createElement("input")).name=this.opts.resultName,t.type="hidden",this.opts.multipleResults?t.value=JSON.stringify([e]):t.value=JSON.stringify(e),this.form.appendChild(t)},i.getMetaFromForm=function(){var e=id(this.form);delete e[this.opts.resultName],this.uppy.setMeta(e)},i.install=function(){this.form=ae(this.opts.target),this.form&&"FORM"===this.form.nodeName?(this.form.addEventListener("submit",this.handleFormSubmit),this.uppy.on("upload",this.handleUploadStart),this.uppy.on("complete",this.handleSuccess)):this.uppy.log("Form plugin requires a <form> target element passed in options to operate, none was found","error")},i.uninstall=n}(nd),Zp.VERSION="1.3.20",ed),sd={},ad="undefined"!=typeof navigator&&"serviceWorker"in navigator,ud=function(){function e(e){this.ready=new Promise((function(e,t){ad?navigator.serviceWorker.controller?e():navigator.serviceWorker.addEventListener("controllerchange",(function(){e()})):t(new Error("Unsupported"))})),this.name=e.storeName}var t=e.prototype;return t.list=function(){var e=this,t={},r=new Promise((function(e,r){t.resolve=e,t.reject=r}));console.log("Loading stored blobs from Service Worker");var n=function r(n){if(n.data.store===e.name)switch(n.data.type){case"uppy/ALL_FILES":t.resolve(n.data.files),navigator.serviceWorker.removeEventListener("message",r)}};return this.ready.then((function(){navigator.serviceWorker.addEventListener("message",n),navigator.serviceWorker.controller.postMessage({type:"uppy/GET_FILES",store:e.name})})),r},t.put=function(e){var t=this;return this.ready.then((function(){navigator.serviceWorker.controller.postMessage({type:"uppy/ADD_FILE",store:t.name,file:e})}))},t.delete=function(e){var t=this;return this.ready.then((function(){navigator.serviceWorker.controller.postMessage({type:"uppy/REMOVE_FILE",store:t.name,fileID:e})}))},e}();ud.isSupported=ad,sd=ud;var ld={};function cd(){return(cd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var pd="undefined"!=typeof window&&(window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.OIndexedDB||window.msIndexedDB),dd=!!pd;function hd(e){var t=pd.open(e,3);return new Promise((function(e,r){t.onupgradeneeded=function(t){var r=t.target.result,n=t.currentTarget.transaction;if(t.oldVersion<2&&r.createObjectStore("files",{keyPath:"id"}).createIndex("store","store",{unique:!1}),t.oldVersion<3){var i=n.objectStore("files");i.createIndex("expires","expires",{unique:!1}),i.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var r=t.value;r.expires=Date.now()+864e5,t.update(r)}}}n.oncomplete=function(){e(r)}},t.onsuccess=function(t){e(t.target.result)},t.onerror=r}))}function fd(e){return new Promise((function(t,r){e.onsuccess=e.onerror=r}))}var yd=!1,gd=function(){function e(t){var r=this;this.opts=cd({dbName:"uppy-blobs",storeName:"default",expires:864e5,maxFileSize:10485760,maxTotalSize:314572800},t),this.name=this.opts.storeName;var n=yd?this.ready=n():(yd=!0,this.ready=e.cleanup().then(n,n))}var t=e.prototype;return t.key=t.list=function(){var e=this;return this.ready.then((function(t){return fd(t.transaction(["files"],"readonly").objectStore("files").index("store").getAll(IDBKeyRange.only(e.name)))})).then(()},t.get=function(e){var t=this;return this.ready.then((function(r){return fd(r.transaction(["files"],"readonly").objectStore("files").get(t.key(e)))})).then(()},t.getSize=function(){var e=this;return this.ready.then((function(t){var r=t.transaction(["files"],"readonly").objectStore("files").index("store").openCursor(IDBKeyRange.only(e.name));return new Promise((function(e,t){var n=0;r.onsuccess=function(t){var r=t.target.result;r?(n+=r.value.data.size,r.continue()):e(n)},r.onerror=function(){t(new Error("Could not retrieve stored blobs size"))}}))}))},t.put=function(e){var t=this;return e.data.size>this.opts.maxFileSize?Promise.reject(new Error("File is too big to store.")):this.getSize().then((function(e){return e>t.opts.maxTotalSize?Promise.reject(new Error("No space left")):t.ready})).then((function(r){return fd(r.transaction(["files"],"readwrite").objectStore("files").add({id:t.key(e.id),fileID:e.id,store:t.name,expires:Date.now()+t.opts.expires,data:e.data}))}))},t.delete=function(e){var t=this;return this.ready.then((function(r){return fd(r.transaction(["files"],"readwrite").objectStore("files").delete(t.key(e)))}))},e.cleanup=function(){return hd("uppy-blobs").then((function(e){var t=e.transaction(["files"],"readwrite").objectStore("files").index("expires").openCursor(IDBKeyRange.upperBound(Date.now()));return new Promise((function(r,n){t.onsuccess=function(t){var n=t.target.result;if(n){var i=n.value;console.log("[IndexedDBStore] Deleting record",i.fileID,"of size",V(i.data.size),"- expired on",new Date(i.expires)),n.delete(),n.continue()}else r(e)},t.onerror=n}))})).then((function(e){e.close()}))},e}();function vd(){return(vd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}d.isSupported=dd,ld=gd;var bd,wd,_d=!1,Sd=function(){function e(t){this.opts=vd({expires:864e5},t),this.name="uppyState:"+t.storeName,_d||(_d=!0,e.cleanup())}var t=e.prototype;return t.load=function(){var e=localStorage.getItem(this.name);if(!e)return null;var t=md(e);return t?t.metadata?t.metadata:(this.save(t),t):null},t.save=function(e){var t=Date.now()+this.opts.expires,r=JSON.stringify({metadata:e,expires:t});localStorage.setItem(this.name,r)},e.cleanup=function(){var e=function(){for(var e=[],t=0;t<localStorage.length;t++){var r=localStorage.key(t);/^uppyState:/.test(r)&&e.push(r.slice("uppyState:".length))}return e}(),t=Date.now();e.forEach((function(e){var r=localStorage.getItem("uppyState:"+e);if(!r)return null;var n=md(r);if(!n)return null;n.expires&&n.expires<t&&localStorage.removeItem("uppyState:"+e)}))},e}();function kd(){return(kd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Pd(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Cd,Ad,Fd=(wd=bd=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).type="debugger",n.id=n.opts.id||"GoldenRetriever",n.title="Golden Retriever",n.opts=kd({},{expires:864e5,serviceWorker:!1},r),n.MetaDataStore=new Sd({expires:n.opts.expires,storeName:t.getID()}),n.ServiceWorkerStore=null,n.opts.serviceWorker&&(n.ServiceWorkerStore=new sd({storeName:t.getID()})),n.IndexedDBStore=new ld(kd({expires:n.opts.expires},n.opts.indexedDB||{},{storeName:t.getID()})),n.saveFilesStateToLocalStorage=n.saveFilesStateToLocalStorage.bind(Pd(n)),n.loadFilesStateFromLocalStorage=n.loadFilesStateFromLocalStorage.bind(Pd(n)),n.loadFileBlobsFromServiceWorker=n.loadFileBlobsFromServiceWorker.bind(Pd(n)),n.loadFileBlobsFromIndexedDB=n.loadFileBlobsFromIndexedDB.bind(Pd(n)),n.onBlobsLoaded=n.onBlobsLoaded.bind(Pd(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.loadFilesStateFromLocalStorage=function(){var e=this.MetaDataStore.load();e&&(this.uppy.log("[GoldenRetriever] Recovered some state from Local Storage"),this.uppy.setState({currentUploads:e.currentUploads||{},files:e.files||{}}),this.savedPluginData=e.pluginData)},i.getWaitingFiles=function(){var e={};return this.uppy.getFiles().forEach((function(t){t.progress&&t.progress.uploadStarted||(e[t.id]=t)})),e},i.getUploadingFiles=function(){var e=this,t={},r=this.uppy.getState().currentUploads;return r&&Object.keys(r).forEach((function(n){r[n].fileIDs.forEach(()})),t},i.saveFilesStateToLocalStorage=function(){var e=kd(this.getWaitingFiles(),this.getUploadingFiles()),t={};this.uppy.emit("restore:get-data",(function(e){kd(t,e)}));var r=this.uppy.getState().currentUploads;this.MetaDataStore.save({currentUploads:r,files:e,pluginData:t})},i.loadFileBlobsFromServiceWorker=function(){var e=this;this.ServiceWorkerStore.list().then((function(t){var r=Object.keys(t).length;return r===e.uppy.getFiles().length?(e.uppy.log("[GoldenRetriever] Successfully recovered "+r+" blobs from Service Worker!"),e.uppy.info("Successfully recovered "+r+" files","success",3e3),e.onBlobsLoaded(t)):(e.uppy.log("[GoldenRetriever] No blobs found in Service Worker, trying IndexedDB now..."),e.loadFileBlobsFromIndexedDB())})).catch((function(t){e.uppy.log("[GoldenRetriever] Failed to recover blobs from Service Worker","warning"),e.uppy.log(t)}))},i.loadFileBlobsFromIndexedDB=function(){var e=this;this.IndexedDBStore.list().then((function(t){var r=Object.keys(t).length;if(r>0)return e.uppy.log("[GoldenRetriever] Successfully recovered "+r+" blobs from IndexedDB!"),e.uppy.info("Successfully recovered "+r+" files","success",3e3),e.onBlobsLoaded(t);e.uppy.log("[GoldenRetriever] No blobs found in IndexedDB")})).catch((function(t){e.uppy.log("[GoldenRetriever] Failed to recover blobs from IndexedDB","warning"),e.uppy.log(t)}))},i.onBlobsLoaded=function(e){var t=this,r=[],n=kd({},this.uppy.getState().files);Object.keys(e).forEach((function(i){var o=t.uppy.getFile(i);if(o){var s=kd({},o,{data:e[i],isRestored:!0});n[i]=s}else r.push(i)})),this.uppy.setState({files:n}),this.uppy.emit("restored",this.savedPluginData),r.length&&this.deleteBlobs(r).then((function(){t.uppy.log("[GoldenRetriever] Cleaned up "+r.length+" old files")})).catch((function(e){t.uppy.log("[GoldenRetriever] Could not clean up "+r.length+" old files","warning"),t.uppy.log(e)}))},i.deleteBlobs=function(e){var t=this,r=[];return e.forEach((function(e){t.ServiceWorkerStore&&r.push(t.ServiceWorkerStore.delete(e)),t.IndexedDBStore&&r.push(t.IndexedDBStore.delete(e))})),Promise.all(r)},i.install=function(){var e=this;this.loadFilesStateFromLocalStorage(),this.uppy.getFiles().length>0?this.ServiceWorkerStore?(this.uppy.log("[GoldenRetriever] Attempting to load files from Service Worker..."),this.loadFileBlobsFromServiceWorker()):(this.uppy.log("[GoldenRetriever] Attempting to load files from Indexed DB..."),this.loadFileBlobsFromIndexedDB()):(this.uppy.log("[GoldenRetriever] No files need to be loaded, only restoring processing state..."),this.onBlobsLoaded([])),this.uppy.on("file-added",(function(t){t.isRemote||(e.ServiceWorkerStore&&e.ServiceWorkerStore.put(t).catch((function(t){e.uppy.log("[GoldenRetriever] Could not store file","warning"),e.uppy.log(t)})),e.IndexedDBStore.put(t).catch((function(t){e.uppy.log("[GoldenRetriever] Could not store file","warning"),e.uppy.log(t)})))})),this.uppy.on("file-removed",(function(t){e.ServiceWorkerStore&&e.ServiceWorkerStore.delete(t.id).catch((function(t){e.uppy.log("[GoldenRetriever] Failed to remove file","warning"),e.uppy.log(t)})),e.IndexedDBStore.delete(t.id).catch((function(t){e.uppy.log("[GoldenRetriever] Failed to remove file","warning"),e.uppy.log(t)}))})),this.uppy.on("complete",(function(t){var r=t.successful,n=r.map((function(e){return e.id}));e.deleteBlobs(n).then(().catch((function(t){e.uppy.log("[GoldenRetriever] Could not remove "+r.length+" files that finished uploading","warning"),e.uppy.log(t)}))})),this.uppy.on("state-update",this.saveFilesStateToLocalStorage),this.uppy.on("restored",(function(){var t=e.uppy.getState().currentUploads;t&&Object.keys(t).forEach(()}))},n}(le.Plugin),bd.VERSION="1.3.19",wd);function Ed(){return(Ed=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Od(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ud=(Ad=Cd=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,t,r)||this).type="debugger",n.id=n.opts.id||"ReduxDevTools",n.title="Redux DevTools",n.opts=Ed({},{},r),n.handleStateChange=n.handleStateChange.bind(Od(n)),n.initDevTools=n.initDevTools.bind(Od(n)),n}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.handleStateChange=i.initDevTools=function(){var e=this;this.devTools=window.devToolsExtension.connect(),this.devToolsUnsubscribe=this.devTools.subscribe((function(t){if("DISPATCH"===t.type)switch(console.log(t.payload.type),t.payload.type){case"RESET":return void e.uppy.reset();case"IMPORT_STATE":var r=t.payload.nextLiftedState.computedStates;return e.uppy.store.state=Ed({},e.uppy.getState(),r[r.length-1].state),void e.uppy.updateAll(e.uppy.getState());case"JUMP_TO_STATE":case"JUMP_TO_ACTION":e.uppy.store.state=Ed({},e.uppy.getState(),JSON.parse(t.state)),e.uppy.updateAll(e.uppy.getState())}}))},i.install=function(){this.withDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__,this.withDevTools&&(this.initDevTools(),this.uppy.on("state-update",this.handleStateChange))},i.uninstall=function(){this.withDevTools&&(this.devToolsUnsubscribe(),this.uppy.off("state-update",this.handleStateUpdate))},n}(le.Plugin),Cd.VERSION="1.3.5",Ad),Rd={};Rd.Core=le,Rd.debugLogger=Rd.Core.debugLogger,Rd.server=Le,Rd.views={ProviderView:Pt},Rd.DefaultStore=X,Rd.ReduxStore=_t,Rd.Dashboard=ri,Rd.DragDrop=li,Rd.FileInput=gi,Rd.Informer=dn,Rd.ProgressBar=Si,Rd.StatusBar=un,Rd.Dropbox=Oi,Rd.GoogleDrive=ji,Rd.Instagram=Vi,Rd.OneDrive=Ji,Rd.Facebook=ro,Rd.Url=go,Rd.Webcam=Mo,Rd.ScreenCapture=is,Rd.AwsS3=Bs,Rd.AwsS3Multipart=ca,Rd.Transloadit=Fp,Rd.Tus=Ku,Rd.XHRUpload=qp,Rd.Form=od,Rd.GoldenRetriever=Fd,Rd.ReduxDevTools=Ud,Rd.ThumbnailGenerator=Un,Rd.locales={};return Rd}));
//# sourceMappingURL=uppy.min.js.map
;(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.vex = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2014-07-23
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

/* Copied from MDN:
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 */

if ("document" in window.self) {

  // Full polyfill for browsers with no classList support
  // Including IE < Edge missing SVGElement.classList
  if (!("classList" in document.createElement("_"))
    || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

  (window.self));

    } else {
    // There is full or partial native classList support, so just check if we need
    // to normalize the add/remove and toggle APIs.

    ());
  }
}

},{}],2:[function(require,module,exports){

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

},{}],3:[{}],4:[function(require,module,exports){
// get successful control from form and assemble into object
// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2

// types which indicate a submit action and are not successful controls
// these will be ignored
var k_r_submitter = /^(?:submit|button|image|reset|file)$/i;

// node names which could be successful controls
var k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;

// Matches bracket notation.
var brackets = /(\[[^\[\]]*\])/g;

// serializes form fields
// @param form MUST be an HTMLForm element
// @param options is an optional argument to configure the serialization. Default output
// with no options specified is a url encoded string
//    - hash: [true | false] Configure the output type. If true, the output will
//    be a js object.
//    - serializer: [function] Optional serializer function to override the default one.
//    The function takes 3 arguments (result, key, value) and should return new result
//    hash and url encoded str serializers are provided with this module
//    - disabled: [true | false]. If true serialize disabled fields.
//    - empty: [true | false]. If true serialize empty fields
function serialize(form, options) {
    if (typeof options != 'object') {
        options = { hash: !!options };
    }
    else if (options.hash === undefined) {
        options.hash = true;
    }

    var result = (options.hash) ? {} : '';
    var serializer = options.serializer || ((options.hash) ? hash_serializer : str_serialize);

    var elements = form && form.elements ? form.elements : [];

    //Object store each radio and set if it's empty or not
    var radio_store = Object.create(null);

    for (var i=0 ; i<elements.length ; ++i) {
        var element = elements[i];

        // ingore disabled fields
        if ((!options.disabled && element.disabled) || !element.name) {
            continue;
        }
        // ignore anyhting that is not considered a success field
        if (!k_r_success_contrls.test(element.nodeName) ||
            k_r_submitter.test(element.type)) {
            continue;
        }

        var key = element.name;
        var val = element.value;

        // we can't just use element.value for checkboxes cause some browsers lie to us
        // they say "on" for value when the box isn't checked
        if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {
            val = undefined;
        }

        // If we want empty elements
        if (options.empty) {
            // for checkbox
            if (element.type === 'checkbox' && !element.checked) {
                val = '';
            }

            // for radio
            if (element.type === 'radio') {
                if (!radio_store[element.name] && !element.checked) {
                    radio_store[element.name] = false;
                }
                else if (element.checked) {
                    radio_store[element.name] = true;
                }
            }

            // if options empty is true, continue only if its radio
            if (!val && element.type == 'radio') {
                continue;
            }
        }
        else {
            // value-less fields are ignored unless options.empty is true
            if (!val) {
                continue;
            }
        }

        // multi select boxes
        if (element.type === 'select-multiple') {
            val = [];

            var selectOptions = element.options;
            var isSelectedOptions = false;
            for (var j=0 ; j<selectOptions.length ; ++j) {
                var option = selectOptions[j];
                var allowedEmpty = options.empty && !option.value;
                var hasValue = (option.value || allowedEmpty);
                if (option.selected && hasValue) {
                    isSelectedOptions = true;

                    // If using a hash serializer be sure to add the
                    // correct notation for an array in the multi-select
                    // context. Here the name attribute on the select element
                    // might be missing the trailing bracket pair. Both names
                    // "foo" and "foo[]" should be arrays.
                    if (options.hash && key.slice(key.length - 2) !== '[]') {
                        result = serializer(result, key + '[]', option.value);
                    }
                    else {
                        result = serializer(result, key, option.value);
                    }
                }
            }

            // Serialize if no selected options and options.empty is true
            if (!isSelectedOptions && options.empty) {
                result = serializer(result, key, '');
            }

            continue;
        }

        result = serializer(result, key, val);
    }

    // Check for all empty radio buttons and serialize them with key=""
    if (options.empty) {
        for (var key in radio_store) {
            if (!radio_store[key]) {
                result = serializer(result, key, '');
            }
        }
    }

    return result;
}

function parse_keys(string) {
    var keys = [];
    var prefix = /^([^\[\]]*)/;
    var children = new RegExp(brackets);
    var match = prefix.exec(string);

    if (match[1]) {
        keys.push(match[1]);
    }

    while ((match = children.exec(string)) !== null) {
        keys.push(match[1]);
    }

    return keys;
}

function hash_assign(result, keys, value) {
    if (keys.length === 0) {
        result = value;
        return result;
    }

    var key = keys.shift();
    var between = key.match(/^\[(.+?)\]$/);

    if (key === '[]') {
        result = result || [];

        if (Array.isArray(result)) {
            result.push(hash_assign(null, keys, value));
        }
        else {
            // This might be the result of bad name attributes like "[][foo]",
            // in this case the original `result` object will already be
            // assigned to an object literal. Rather than coerce the object to
            // an array, or cause an exception the attribute "_values" is
            // assigned as an array.
            result._values = result._values || [];
            result._values.push(hash_assign(null, keys, value));
        }

        return result;
    }

    // Key is an attribute name and can be assigned directly.
    if (!between) {
        result[key] = hash_assign(result[key], keys, value);
    }
    else {
        var string = between[1];
        // +var converts the variable into a number
        // better than parseInt because it doesn't truncate away trailing
        // letters and actually fails if whole thing is not a number
        var index = +string;

        // If the characters between the brackets is not a number it is an
        // attribute name and can be assigned directly.
        if (isNaN(index)) {
            result = result || {};
            result[string] = hash_assign(result[string], keys, value);
        }
        else {
            result = result || [];
            result[index] = hash_assign(result[index], keys, value);
        }
    }

    return result;
}

// Object/hash encoding serializer.
function hash_serializer(result, key, value) {
    var matches = key.match(brackets);

    // Has brackets? Use the recursive assignment function to walk the keys,
    // construct any missing objects in the result tree and make the assignment
    // at the end of the chain.
    if (matches) {
        var keys = parse_keys(key);
        hash_assign(result, keys, value);
    }
    else {
        // Non bracket notation can make assignments directly.
        var existing = result[key];

        // If the value has been assigned already (for instance when a radio and
        // a checkbox have the same name attribute) convert the previous value
        // into an array before pushing into it.
        //
        // NOTE: If this requirement were removed all hash creation and
        // assignment could go through `hash_assign`.
        if (existing) {
            if (!Array.isArray(existing)) {
                result[key] = [ existing ];
            }

            result[key].push(value);
        }
        else {
            result[key] = value;
        }
    }

    return result;
}

// urlform encoding serializer
function str_serialize(result, key, value) {
    // encode newlines as \r\n cause the html spec says so
    value = value.replace(/(\r)?\n/g, '\r\n');
    value = encodeURIComponent(value);

    // spaces should be '+' rather than '%20'.
    value = value.replace(/%20/g, '+');
    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
}

module.exports = serialize;

},{}],5:[function(require,module,exports){
(function (global){
((function(){var define,module,exports;return (({1:[{}],2:[function(require,module,exports){
// get successful control from form and assemble into object
// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2

// types which indicate a submit action and are not successful controls
// these will be ignored
var k_r_submitter = /^(?:submit|button|image|reset|file)$/i;

// node names which could be successful controls
var k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;

// Matches bracket notation.
var brackets = /(\[[^\[\]]*\])/g;

// serializes form fields
// @param form MUST be an HTMLForm element
// @param options is an optional argument to configure the serialization. Default output
// with no options specified is a url encoded string
//    - hash: [true | false] Configure the output type. If true, the output will
//    be a js object.
//    - serializer: [function] Optional serializer function to override the default one.
//    The function takes 3 arguments (result, key, value) and should return new result
//    hash and url encoded str serializers are provided with this module
//    - disabled: [true | false]. If true serialize disabled fields.
//    - empty: [true | false]. If true serialize empty fields
function serialize(form, options) {
    if (typeof options != 'object') {
        options = { hash: !!options };
    }
    else if (options.hash === undefined) {
        options.hash = true;
    }

    var result = (options.hash) ? {} : '';
    var serializer = options.serializer || ((options.hash) ? hash_serializer : str_serialize);

    var elements = form && form.elements ? form.elements : [];

    //Object store each radio and set if it's empty or not
    var radio_store = Object.create(null);

    for (var i=0 ; i<elements.length ; ++i) {
        var element = elements[i];

        // ingore disabled fields
        if ((!options.disabled && element.disabled) || !element.name) {
            continue;
        }
        // ignore anyhting that is not considered a success field
        if (!k_r_success_contrls.test(element.nodeName) ||
            k_r_submitter.test(element.type)) {
            continue;
        }

        var key = element.name;
        var val = element.value;

        // we can't just use element.value for checkboxes cause some browsers lie to us
        // they say "on" for value when the box isn't checked
        if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {
            val = undefined;
        }

        // If we want empty elements
        if (options.empty) {
            // for checkbox
            if (element.type === 'checkbox' && !element.checked) {
                val = '';
            }

            // for radio
            if (element.type === 'radio') {
                if (!radio_store[element.name] && !element.checked) {
                    radio_store[element.name] = false;
                }
                else if (element.checked) {
                    radio_store[element.name] = true;
                }
            }

            // if options empty is true, continue only if its radio
            if (!val && element.type == 'radio') {
                continue;
            }
        }
        else {
            // value-less fields are ignored unless options.empty is true
            if (!val) {
                continue;
            }
        }

        // multi select boxes
        if (element.type === 'select-multiple') {
            val = [];

            var selectOptions = element.options;
            var isSelectedOptions = false;
            for (var j=0 ; j<selectOptions.length ; ++j) {
                var option = selectOptions[j];
                var allowedEmpty = options.empty && !option.value;
                var hasValue = (option.value || allowedEmpty);
                if (option.selected && hasValue) {
                    isSelectedOptions = true;

                    // If using a hash serializer be sure to add the
                    // correct notation for an array in the multi-select
                    // context. Here the name attribute on the select element
                    // might be missing the trailing bracket pair. Both names
                    // "foo" and "foo[]" should be arrays.
                    if (options.hash && key.slice(key.length - 2) !== '[]') {
                        result = serializer(result, key + '[]', option.value);
                    }
                    else {
                        result = serializer(result, key, option.value);
                    }
                }
            }

            // Serialize if no selected options and options.empty is true
            if (!isSelectedOptions && options.empty) {
                result = serializer(result, key, '');
            }

            continue;
        }

        result = serializer(result, key, val);
    }

    // Check for all empty radio buttons and serialize them with key=""
    if (options.empty) {
        for (var key in radio_store) {
            if (!radio_store[key]) {
                result = serializer(result, key, '');
            }
        }
    }

    return result;
}

function parse_keys(string) {
    var keys = [];
    var prefix = /^([^\[\]]*)/;
    var children = new RegExp(brackets);
    var match = prefix.exec(string);

    if (match[1]) {
        keys.push(match[1]);
    }

    while ((match = children.exec(string)) !== null) {
        keys.push(match[1]);
    }

    return keys;
}

function hash_assign(result, keys, value) {
    if (keys.length === 0) {
        result = value;
        return result;
    }

    var key = keys.shift();
    var between = key.match(/^\[(.+?)\]$/);

    if (key === '[]') {
        result = result || [];

        if (Array.isArray(result)) {
            result.push(hash_assign(null, keys, value));
        }
        else {
            // This might be the result of bad name attributes like "[][foo]",
            // in this case the original `result` object will already be
            // assigned to an object literal. Rather than coerce the object to
            // an array, or cause an exception the attribute "_values" is
            // assigned as an array.
            result._values = result._values || [];
            result._values.push(hash_assign(null, keys, value));
        }

        return result;
    }

    // Key is an attribute name and can be assigned directly.
    if (!between) {
        result[key] = hash_assign(result[key], keys, value);
    }
    else {
        var string = between[1];
        // +var converts the variable into a number
        // better than parseInt because it doesn't truncate away trailing
        // letters and actually fails if whole thing is not a number
        var index = +string;

        // If the characters between the brackets is not a number it is an
        // attribute name and can be assigned directly.
        if (isNaN(index)) {
            result = result || {};
            result[string] = hash_assign(result[string], keys, value);
        }
        else {
            result = result || [];
            result[index] = hash_assign(result[index], keys, value);
        }
    }

    return result;
}

// Object/hash encoding serializer.
function hash_serializer(result, key, value) {
    var matches = key.match(brackets);

    // Has brackets? Use the recursive assignment function to walk the keys,
    // construct any missing objects in the result tree and make the assignment
    // at the end of the chain.
    if (matches) {
        var keys = parse_keys(key);
        hash_assign(result, keys, value);
    }
    else {
        // Non bracket notation can make assignments directly.
        var existing = result[key];

        // If the value has been assigned already (for instance when a radio and
        // a checkbox have the same name attribute) convert the previous value
        // into an array before pushing into it.
        //
        // NOTE: If this requirement were removed all hash creation and
        // assignment could go through `hash_assign`.
        if (existing) {
            if (!Array.isArray(existing)) {
                result[key] = [ existing ];
            }

            result[key].push(value);
        }
        else {
            result[key] = value;
        }
    }

    return result;
}

// urlform encoding serializer
function str_serialize(result, key, value) {
    // encode newlines as \r\n cause the html spec says so
    value = value.replace(/(\r)?\n/g, '\r\n');
    value = encodeURIComponent(value);

    // spaces should be '+' rather than '%20'.
    value = value.replace(/%20/g, '+');
    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
}

module.exports = serialize;

},{}],3:[function(require,module,exports){
var domify = require('domify')
var serialize = require('form-serialize')

// Build DOM elements for the structure of the dialog
var buildDialogForm = function buildDialogForm (options) {
  var form = document.createElement('form')
  form.classList.add('vex-dialog-form')

  var message = document.createElement('div')
  message.classList.add('vex-dialog-message')
  message.appendChild(options.message instanceof window.Node ? options.message : domify(options.message))

  var input = document.createElement('div')
  input.classList.add('vex-dialog-input')
  input.appendChild(options.input instanceof window.Node ? options.input : domify(options.input))

  form.appendChild(message)
  form.appendChild(input)

  return form
}

// Take an array of buttons (see the default buttons below) and turn them into DOM elements
var buttonsToDOM = function buttonsToDOM (buttons) {
  var domButtons = document.createElement('div')
  domButtons.classList.add('vex-dialog-buttons')

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
    var domButton = document.createElement('button')
    domButton.type = button.type
    domButton.textContent = button.text
    domButton.classList.add(button.className)
    domButton.classList.add('vex-dialog-button')
    if (i === 0) {
      domButton.classList.add('vex-first')
    } else if (i === buttons.length - 1) {
      domButton.classList.add('vex-last')
    }
    // Attach click listener to button with closure
    (function (button) {
      domButton.addEventListener('click', function (e) {
        if (button.click) {
          button.click.call(this, e)
        }
      }.bind(this))
    }.bind(this)(button))

    domButtons.appendChild(domButton)
  }

  return domButtons
}

var plugin = function plugin (vex) {
  // Define the API first
  var dialog = {
    // Plugin name
    name: 'dialog',

    // Open
    open: function open (opts) {
      var options = Object.assign({}, this.defaultOptions, opts)

      // `message` is unsafe internally, so translate
      // safe default: HTML-escape the message before passing it through
      if (options.unsafeMessage && !options.message) {
        options.message = options.unsafeMessage
      } else if (options.message) {
        options.message = vex._escapeHtml(options.message)
      }

      // Build the form from the options
      var form = options.unsafeContent = buildDialogForm(options)

      // Open the dialog
      var dialogInstance = vex.open(options)

      // Quick comment - these options and appending buttons and everything
      // would preferably be done _before_ opening the dialog. However, since
      // they rely on the context of the vex instance, we have to do them
      // after. A potential future fix would be to differentiate between
      // a "created" vex instance and an "opened" vex instance, so any actions
      // that rely on the specific context of the instance can do their stuff
      // before opening the dialog on the page.

      // Override the before close callback to also pass the value of the form
      var beforeClose = options.beforeClose
      dialogInstance.options.beforeClose = function dialogBeforeClose () {
        // Only call the callback once - when the validation in beforeClose, if present, is true
        var shouldClose = beforeClose ? beforeClose() : true
        if (shouldClose) {
          options.callback(this.value || false)
        }
        // Return the result of beforeClose() to vex
        return shouldClose
      }.bind(dialogInstance)

      // Append buttons to form with correct context
      form.appendChild(buttonsToDOM.call(dialogInstance, options.buttons))

      // Attach form to instance
      dialogInstance.form = form

      // Add submit listener to form
      form.addEventListener('submit', options.onSubmit.bind(dialogInstance))

      // Optionally focus the first input in the form
      if (options.focusFirstInput) {
        var el = dialogInstance.contentEl.querySelector('button, input, textarea')
        if (el) {
          el.focus()
        }
      }

      // For chaining
      return dialogInstance
    },

    // Alert
    alert: function (options) {
      // Allow string as message
      if (typeof options === 'string') {
        options = {
          message: options
        }
      }
      options = Object.assign({}, this.defaultOptions, this.defaultAlertOptions, options)
      return this.open(options)
    },

    // Confirm
    confirm: function (options) {
      if (typeof options !== 'object' || typeof options.callback !== 'function') {
        throw new Error('dialog.confirm(options) requires options.callback.')
      }
      options = Object.assign({}, this.defaultOptions, this.defaultConfirmOptions, options)
      return this.open(options)
    },

    // Prompt
    prompt: function (options) {
      if (typeof options !== 'object' || typeof options.callback !== 'function') {
        throw new Error('dialog.prompt(options) requires options.callback.')
      }
      var defaults = Object.assign({}, this.defaultOptions, this.defaultPromptOptions)
      var dynamicDefaults = {
        unsafeMessage: '<label for="vex">' + vex._escapeHtml(options.label || defaults.label) + '</label>',
        input: '<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="' + vex._escapeHtml(options.placeholder || defaults.placeholder) + '" value="' + vex._escapeHtml(options.value || defaults.value) + '" autocomplete="on" />'
      }
      options = Object.assign(defaults, dynamicDefaults, options)
      // Pluck the value of the "vex" input field as the return value for prompt's callback
      // More closely mimics "window.prompt" in that a single string is returned
      var callback = options.callback
      options.callback = function promptCallback (value) {
        value = value[Object.keys(value)[0]]
        callback(value)
      }
      return this.open(options)
    }
  }

  // Now define any additional data that's not the direct dialog API
  dialog.buttons = {
    YES: {
      text: 'OK',
      type: 'submit',
      className: 'vex-dialog-button-primary',
      click: 
    },

    NO: {
      text: 'Cancel',
      type: 'button',
      className: 'vex-dialog-button-secondary',
      click: 
    }
  }

  dialog.defaultOptions = {
    callback: function () {},
    afterOpen: function () {},
    message: '',
    input: '',
    buttons: [
      dialog.buttons.YES,
      dialog.buttons.NO
    ],
    showCloseButton: false,
    onSubmit: function onDialogSubmit (e) {
      e.preventDefault()
      if (this.options.input) {
        this.value = serialize(this.form, { hash: true })
      }
      return this.close()
    },
    focusFirstInput: true
  }

  dialog.defaultAlertOptions = {
    buttons: [
      dialog.buttons.YES
    ]
  }

  dialog.defaultPromptOptions = {
    label: 'Prompt:',
    placeholder: '',
    value: ''
  }

  dialog.defaultConfirmOptions = {}

  return dialog
}

module.exports = plugin

},{"domify":1,"form-serialize":2}]},{},[3])(3)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"domify":2,"form-serialize":4}],6:[function(require,module,exports){
var vex = require('./vex')
vex.registerPlugin(require('vex-dialog'))
module.exports = vex

},{"./vex":7,"vex-dialog":5}],7:[function(require,module,exports){
// classList polyfill for old browsers
require('classlist-polyfill')
// Object.assign polyfill
require('es6-object-assign').polyfill()

// String to DOM function
var domify = require('domify')

// Use the DOM's HTML parsing to escape any dangerous strings
var escapeHtml = function escapeHtml (str) {
  if (typeof str !== 'undefined') {
    var div = document.createElement('div')
    div.appendChild(document.createTextNode(str))
    return div.innerHTML
  } else {
    return ''
  }
}

// Utility function to add space-delimited class strings to a DOM element's classList
var addClasses = function addClasses (el, classStr) {
  if (typeof classStr !== 'string' || classStr.length === 0) {
    return
  }
  var classes = classStr.split(' ')
  for (var i = 0; i < classes.length; i++) {
    var className = classes[i]
    if (className.length) {
      el.classList.add(className)
    }
  }
}

// Detect CSS Animation End Support
// https://github.com/limonte/sweetalert2/blob/99bd539f85e15ac170f69d35001d12e092ef0054/src/utils/dom.js#L194
var animationEndEvent = (function detectAnimationEndEvent () {
  var el = document.createElement('div')
  var eventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'animationend',
    'OAnimation': 'oanimationend',
    'msAnimation': 'MSAnimationEnd',
    'animation': 'animationend'
  }
  for (var i in eventNames) {
    if (el.style[i] !== undefined) {
      return eventNames[i]
    }
  }
  return false
})()

// vex base CSS classes
var baseClassNames = {
  vex: 'vex',
  content: 'vex-content',
  overlay: 'vex-overlay',
  close: 'vex-close',
  closing: 'vex-closing',
  open: 'vex-open'
}

// Private lookup table of all open vex objects, keyed by id
var vexes = {}
var globalId = 1

// Private boolean to assist the escapeButtonCloses option
var isEscapeActive = false

// vex itself is an object that exposes a simple API to open and close vex objects in various ways
var vex = {
  open: function open (opts) {
    // Check for usage of deprecated options, and log a warning
    var warnDeprecated = function warnDeprecated (prop) {
      console.warn('The "' + prop + '" property is deprecated in vex 3. Use CSS classes and the appropriate "ClassName" options, instead.')
      console.warn('See http://github.hubspot.com/vex/api/advanced/#options')
    }
    if (opts.css) {
      warnDeprecated('css')
    }
    if (opts.overlayCSS) {
      warnDeprecated('overlayCSS')
    }
    if (opts.contentCSS) {
      warnDeprecated('contentCSS')
    }
    if (opts.closeCSS) {
      warnDeprecated('closeCSS')
    }

    // The dialog instance
    var vexInstance = {}

    // Set id
    vexInstance.id = globalId++

    // Store internally
    vexes[vexInstance.id] = vexInstance

    // Set state
    vexInstance.isOpen = true

    // Close function on the vex instance
    // This is how all API functions should close individual vexes
    vexInstance.close = function instanceClose () {
      // Check state
      if (!this.isOpen) {
        return true
      }

      var options = this.options

      // escapeButtonCloses is checked first
      if (isEscapeActive && !options.escapeButtonCloses) {
        return false
      }

      // Allow the user to validate any info or abort the close with the beforeClose callback
      var shouldClose = (function shouldClose () {
        // Call before close callback
        if (options.beforeClose) {
          return options.beforeClose.call(this)
        }
        // Otherwise indicate that it's ok to continue with close
        return true
      }.bind(this)())

      // If beforeClose() fails, abort the close
      if (shouldClose === false) {
        return false
      }

      // Update state
      this.isOpen = false

      // Detect if the content el has any CSS animations defined
      var style = window.getComputedStyle(this.contentEl)
      function hasAnimationPre (prefix) {
        return style.getPropertyValue(prefix + 'animation-name') !== 'none' && style.getPropertyValue(prefix + 'animation-duration') !== '0s'
      }
      var hasAnimation = hasAnimationPre('') || hasAnimationPre('-webkit-') || hasAnimationPre('-moz-') || hasAnimationPre('-o-')

      // Define the function that will actually close the instance
      var close = function close () {
        if (!this.rootEl.parentNode) {
          return
        }
        // Run once
        this.rootEl.removeEventListener(animationEndEvent, close)
        this.overlayEl.removeEventListener(animationEndEvent, close)
        // Remove from lookup table (prevent memory leaks)
        delete vexes[this.id]
        // Remove the dialog from the DOM
        this.rootEl.parentNode.removeChild(this.rootEl)
        // Remove the overlay from the DOM
        this.bodyEl.removeChild(this.overlayEl);
        // Call after close callback
        if (options.afterClose) {
          options.afterClose.call(this)
        }
        // Remove styling from the body, if no more vexes are open
        if (Object.keys(vexes).length === 0) {
          document.body.classList.remove(baseClassNames.open)
        }
        //Give focus back to initial element
        if (options.giveBackFocus) {
          focusedElementBefore.focus();
        }
        document.querySelector(options.ariaContentMain).setAttribute('aria-hidden', false)
        
      }.bind(this)

      // Close the vex
      if (animationEndEvent && hasAnimation) {
        // Setup the end event listener, to remove the el from the DOM
        this.rootEl.addEventListener(animationEndEvent, close)
        this.overlayEl.addEventListener(animationEndEvent, close)
        // Add the closing class to the dialog, showing the close animation
        this.rootEl.classList.add(baseClassNames.closing)
        this.overlayEl.classList.add(baseClassNames.closing)
      } else {
        close()
      }

      return true
    }

    // Allow strings as content
    if (typeof opts === 'string') {
      opts = {
        content: opts
      }
    }

    // `content` is unsafe internally, so translate
    // safe default: HTML-escape the content before passing it through
    if (opts.unsafeContent && !opts.content) {
      opts.content = opts.unsafeContent
    } else if (opts.content) {
      opts.content = escapeHtml(opts.content)
    }

    // Store options on instance for future reference
    var options = vexInstance.options = Object.assign({}, vex.defaultOptions, opts)

    // Get Body Element
    var bodyEl = vexInstance.bodyEl = document.getElementsByTagName('body')[0];

    // vex root
    var rootEl = vexInstance.rootEl = document.createElement('div')
    rootEl.classList.add(baseClassNames.vex)
    addClasses(rootEl, options.className)

    // Overlay
    var overlayEl = vexInstance.overlayEl = document.createElement('div')
    overlayEl.classList.add(baseClassNames.overlay)
    overlayEl.tabIndex = -1
    addClasses(overlayEl, options.overlayClassName)
    if (options.overlayClosesOnClick) {
      rootEl.addEventListener('click', function overlayClickListener (e) {
        if (e.target === rootEl) {
          vexInstance.close()
        }
      })
    }
    bodyEl.appendChild(overlayEl)

    // Content
    var contentEl = vexInstance.contentEl = document.createElement('div')
    contentEl.classList.add(baseClassNames.content)
    contentEl.setAttribute('role', 'dialog')
    contentEl.setAttribute('aria-hidden', false)
    contentEl.setAttribute('aria-labelledBy', options.message)
    addClasses(contentEl, options.contentClassName)
    contentEl.appendChild(options.content instanceof window.Node ? options.content : domify(options.content))
    rootEl.appendChild(contentEl)

    //Accessibility features
    //Get initial element
    var focusedElementBefore = document.activeElement;
    
    document.querySelector(options.ariaContentMain).setAttribute('aria-hidden', true)
    
    var ifocusableElementsString = "a[href], area[href], input:not([disabled]), input:not([type='hidden']), select:not([disabled]), textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]"
    var ifocusableElements = contentEl.querySelectorAll(ifocusableElementsString)
    var ivisibleFocusableElements = ifocusableElements

 
	//setTimeout(function() { ivisibleFocusableElements.item(0).focus() }, 400);

    if (options.trapTabKey) {

      contentEl.onkeydown = function(event) {        
      	var focusableElementsString = "a[href], area[href], input:not([disabled]), input:not([type='hidden']), select:not([disabled]), textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]"
        var focusableElements = contentEl.querySelectorAll(focusableElementsString)
        var visibleFocusableElements = focusableElements

        //Tab key pressed
        if (event.which == 9) {
          
          var focusedElement = document.activeElement
          var numberOfFocusableELements = visibleFocusableElements.length
                
          var focusedElementIndex = Array.prototype.indexOf.call(visibleFocusableElements, focusedElement)
     
          if (event.shiftKey) {
            //back tab
            // if focused on first item and user preses back-tab, go to the last focusable item
            if (focusedElementIndex == 0) {
              visibleFocusableElements.item(numberOfFocusableELements - 1).focus()
              event.preventDefault()
            }
          } else {
            //forward tab
            // if focused on the last item and user preses tab, go to the first focusable item
            if (focusedElementIndex == numberOfFocusableELements - 1) {
              visibleFocusableElements.item(0).focus();
              event.preventDefault();
            }
          }
        }
      }
    }

    // Close button
    if (options.showCloseButton) {
      var closeEl = vexInstance.closeEl = document.createElement('a')
      var closeChild = document.createElement('i')
      closeEl.setAttribute('aria-label', 'close')
      closeEl.setAttribute('onclick', 'return false;')
      closeEl.setAttribute('href', '#')
      closeEl.classList.add(baseClassNames.close)
      addClasses(closeEl, options.closeClassName)
      addClasses(closeChild, 'fa fa-close')
      closeEl.addEventListener('click', vexInstance.close.bind(vexInstance))
      contentEl.appendChild(closeEl)
      closeEl.appendChild(closeChild)
    }

    // Add to DOM
    document.querySelector(options.appendLocation).appendChild(rootEl)
    if (options.showCloseButton) {
    	document.querySelector('.vex-close').focus();
    }
    // Call after open callback
    if (options.afterOpen) {
      options.afterOpen.call(vexInstance)
    }

    // Apply styling to the body
    document.body.classList.add(baseClassNames.open)

    // Return the created vex instance
    return vexInstance
  },

  // A top-level vex.close function to close dialogs by reference or id
  close: function close (vexOrId) {
    var id
    if (vexOrId.id) {
      id = vexOrId.id
    } else if (typeof vexOrId === 'string') {
      id = vexOrId
    } else {
      throw new TypeError('close requires a vex object or id string')
    }
    if (!vexes[id]) {
      return false
    }
    return vexes[id].close()
  },

  // Close the most recently created/opened vex
  closeTop: function closeTop () {
    var ids = Object.keys(vexes)
    if (!ids.length) {
      return false
    }
    return vexes[ids[ids.length - 1]].close()
  },

  // Close every vex!
  closeAll: function closeAll () {
    for (var id in vexes) {
      this.close(id)
    }
    return true
  },

  // A getter for the internal lookup table
  getAll: function getAll () {
    return vexes
  },

  // A getter for the internal lookup table
  getById: 
}

// Close top vex on escape
window.addEventListener('keyup', function vexKeyupListener (e) {
  if (e.keyCode === 27) {
    isEscapeActive = true
    vex.closeTop()
    isEscapeActive = false
  }
})

// Close all vexes on history pop state (useful in single page apps)
window.addEventListener('popstate', 

vex.defaultOptions = {
  content: '',
  showCloseButton: true,
  escapeButtonCloses: true,
  overlayClosesOnClick: true,
  appendLocation: 'body',
  className: '',
  overlayClassName: '',
  contentClassName: '',
  closeClassName: 'closeAria',
  closeAllOnPopState: true,
  giveBackFocus: true,
  trapTabKey: true,
  ariaContentMain: 'body > :not(.vex)'
}

// TODO Loading symbols?

// Include escapeHtml function on the library object
Object.defineProperty(vex, '_escapeHtml', {
  configurable: false,
  enumerable: false,
  writable: false,
  value: escapeHtml
})

// Plugin system!
vex.registerPlugin = function registerPlugin (pluginFn, name) {
  var plugin = pluginFn(vex)
  var pluginName = name || plugin.name
  if (vex[pluginName]) {
    throw new Error('Plugin ' + name + ' is already registered.')
  }
  vex[pluginName] = plugin
}

module.exports = vex

},{"classlist-polyfill":1,"domify":2,"es6-object-assign":3}]},{},[6])(6)
});
;/*
* iziToast | v1.4.0
* http://izitoast.marcelodolce.com
* by Marcelo Dolce.
*/
(function (root, factory) {
	if(typeof define === 'function' && define.amd) {
		define([], factory(root));
	} else if(typeof exports === 'object') {
		module.exports = factory(root);
	} else {
		root.iziToast = factory(root);
	}
})(typeof global !== 'undefined' ? global : window || this.window || this.global, function (root) {

	'use strict';

	//
	// Variables
	//
	var $iziToast = {},
		PLUGIN_NAME = 'iziToast',
		BODY = document.querySelector('body'),
		ISMOBILE = (/Mobi/.test(navigator.userAgent)) ? true : false,
		ISCHROME = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
		ISFIREFOX = typeof InstallTrigger !== 'undefined',
		ACCEPTSTOUCH = 'ontouchstart' in document.documentElement,
		POSITIONS = ['bottomRight','bottomLeft','bottomCenter','topRight','topLeft','topCenter','center'],
		THEMES = {
			info: {
				color: 'blue',
				icon: 'ico-info'
			},
			success: {
				color: 'green',
				icon: 'ico-success'
			},
			warning: {
				color: 'orange',
				icon: 'ico-warning'
			},
			error: {
				color: 'red',
				icon: 'ico-error'
			},
			question: {
				color: 'yellow',
				icon: 'ico-question'
			}
		},
		MOBILEWIDTH = 568,
		CONFIG = {};

	$iziToast.children = {};

	// Default settings
	var defaults = {
		id: null, 
		class: '',
		title: '',
		titleColor: '',
		titleSize: '',
		titleLineHeight: '',
		message: '',
		messageColor: '',
		messageSize: '',
		messageLineHeight: '',
		backgroundColor: '',
		theme: 'light', // dark
		color: '', // blue, red, green, yellow
		icon: '',
		iconText: '',
		iconColor: '',
		iconUrl: null,
		image: '',
		imageWidth: 50,
		maxWidth: null,
		zindex: null,
		layout: 1,
		balloon: false,
		close: true,
		closeOnEscape: false,
		closeOnClick: false,
		displayMode: 0,
		position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
		target: '',
		targetFirst: true,
		timeout: 5000,
		rtl: false,
		animateInside: true,
		drag: true,
		pauseOnHover: true,
		resetOnHover: false,
		progressBar: true,
		progressBarColor: '',
		progressBarEasing: 'linear',
		overlay: false,
		overlayClose: false,
		overlayColor: 'rgba(0, 0, 0, 0.6)',
		transitionIn: 'fadeInUp', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, flipInX
		transitionOut: 'fadeOut', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
		transitionInMobile: 'fadeInUp',
		transitionOutMobile: 'fadeOutDown',
		buttons: {},
		inputs: {},
		onOpening: function () {},
		onOpened: function () {},
		onClosing: function () {},
		onClosed: function () {}
	};

	//
	// Methods
	//


	/**
	 * Polyfill for remove() method
	 */
	if(!('remove' in Element.prototype)) {
	    Element.prototype.remove = 
	}

	/*
     * Polyfill for CustomEvent for IE >= 9
     * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
     */
    if(typeof window.CustomEvent !== 'function') {
        var CustomEventPolyfill = 

        CustomEventPolyfill.prototype = window.Event.prototype;

        window.CustomEvent = CustomEventPolyfill;
    }

	/**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists
	 * @private
	 * @param {Array|Object|NodeList} collection Collection of items to iterate
	 * @param {Function} callback Callback function for each iteration
	 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */
	var forEach = function (collection, callback, scope) {
		if(Object.prototype.toString.call(collection) === '[object Object]') {
			for (var prop in collection) {
				if(Object.prototype.hasOwnProperty.call(collection, prop)) {
					callback.call(scope, collection[prop], prop, collection);
				}
			}
		} else {
			if(collection){
				for (var i = 0, len = collection.length; i < len; i++) {
					callback.call(scope, collection[i], i, collection);
				}
			}
		}
	};

	/**
	 * Merge defaults with user options
	 * @private
	 * @param {Object} defaults Default settings
	 * @param {Object} options User options
	 * @returns {Object} Merged values of defaults and options
	 */
	var extend = function (defaults, options) {
		var extended = {};
		forEach(defaults, function (value, prop) {
			extended[prop] = defaults[prop];
		});
		forEach(options, ;
		return extended;
	};


	/**
	 * Create a fragment DOM elements
	 * @private
	 */
	var createFragElem = function(htmlStr) {
		var frag = document.createDocumentFragment(),
			temp = document.createElement('div');
		temp.innerHTML = htmlStr;
		while (temp.firstChild) {
			frag.appendChild(temp.firstChild);
		}
		return frag;
	};


	/**
	 * Generate new ID
	 * @private
	 */
	var generateId = function(params) {
		var newId = btoa(encodeURIComponent(params));
		return newId.replace(/=/g, "");
	};


	/**
	 * Check if is a color
	 * @private
	 */
	var isColor = function(color){
		if( color.substring(0,1) == '#' || color.substring(0,3) == 'rgb' || color.substring(0,3) == 'hsl' ){
			return true;
		} else {
			return false;
		}
	};


	/**
	 * Check if is a Base64 string
	 * @private
	 */
	var isBase64 = function(str) {
	    try {
	        return btoa(atob(str)) == str;
	    } catch (err) {
	        return false;
	    }
	};


	/**
	 * Drag method of toasts
	 * @private
	 */
	var drag = function() {
	    
	    return {
	        move: function(toast, instance, settings, xpos) {

	        	var opacity,
	        		opacityRange = 0.3,
	        		distance = 180;
	            
	            if(xpos !== 0){
	            	
	            	toast.classList.add(PLUGIN_NAME+'-dragged');

	            	toast.style.transform = 'translateX('+xpos + 'px)';

		            if(xpos > 0){
		            	opacity = (distance-xpos) / distance;
		            	if(opacity < opacityRange){
							instance.hide(extend(settings, { transitionOut: 'fadeOutRight', transitionOutMobile: 'fadeOutRight' }), toast, 'drag');
						}
		            } else {
		            	opacity = (distance+xpos) / distance;
		            	if(opacity < opacityRange){
							instance.hide(extend(settings, { transitionOut: 'fadeOutLeft', transitionOutMobile: 'fadeOutLeft' }), toast, 'drag');
						}
		            }
					toast.style.opacity = opacity;
			
					if(opacity < opacityRange){

						if(ISCHROME || ISFIREFOX)
							toast.style.left = xpos+'px';

						toast.parentNode.style.opacity = opacityRange;

		                this.stopMoving(toast, null);
					}
	            }

				
	        },
	        startMoving: function(toast, instance, settings, e) {

	            e = e || window.event;
	            var posX = ((ACCEPTSTOUCH) ? e.touches[0].clientX : e.clientX),
	                toastLeft = toast.style.transform.replace('px)', '');
	                toastLeft = toastLeft.replace('translateX(', '');
	            var offsetX = posX - toastLeft;

				if(settings.transitionIn){
					toast.classList.remove(settings.transitionIn);
				}
				if(settings.transitionInMobile){
					toast.classList.remove(settings.transitionInMobile);
				}
				toast.style.transition = '';

	            if(ACCEPTSTOUCH) {
	                document.ontouchmove = function(e) {
	                    e.preventDefault();
	                    e = e || window.event;
	                    var posX = e.touches[0].clientX,
	                        finalX = posX - offsetX;
                        drag.move(toast, instance, settings, finalX);
	                };
	            } else {
	                document.onmousemove = function(e) {
	                    e.preventDefault();
	                    e = e || window.event;
	                    var posX = e.clientX,
	                        finalX = posX - offsetX;
                        drag.move(toast, instance, settings, finalX);
	                };
	            }

	        },
	        stopMoving: function(toast, e) {

	            if(ACCEPTSTOUCH) {
	                document.ontouchmove = function() {};
	            } else {
	            	document.onmousemove = function() {};
	            }

				toast.style.opacity = '';
				toast.style.transform = '';

	            if(toast.classList.contains(PLUGIN_NAME+'-dragged')){
	            	
	            	toast.classList.remove(PLUGIN_NAME+'-dragged');

					toast.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
					setTimeout( 400);
	            }

	        }
	    };

	}();





	$iziToast.setSetting = 


	$iziToast.getSetting = 


	/**
	 * Destroy the current initialization.
	 * @public
	 */
	$iziToast.destroy = function () {

		forEach(document.querySelectorAll('.'+PLUGIN_NAME+'-overlay'), function(element, index) {
			element.remove();
		});

		forEach(document.querySelectorAll('.'+PLUGIN_NAME+'-wrapper'), function(element, index) {
			element.remove();
		});

		forEach(document.querySelectorAll('.'+PLUGIN_NAME), ;

		this.children = {};

		// Remove event listeners
		document.removeEventListener(PLUGIN_NAME+'-opened', {}, false);
		document.removeEventListener(PLUGIN_NAME+'-opening', {}, false);
		document.removeEventListener(PLUGIN_NAME+'-closing', {}, false);
		document.removeEventListener(PLUGIN_NAME+'-closed', {}, false);
		document.removeEventListener('keyup', {}, false);

		// Reset variables
		CONFIG = {};
	};

	/**
	 * Initialize Plugin
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.settings = function (options) {

		// Destroy any existing initializations
		$iziToast.destroy();

		CONFIG = options;
		defaults = extend(defaults, options || {});
	};


	/**
	 * Building themes functions.
	 * @public
	 * @param {Object} options User settings
	 */
	forEach(THEMES, function (theme, name) {

		$iziToast[name] = function (options) {

			var settings = extend(CONFIG, options || {});
			settings = extend(theme, settings || {});

			this.show(settings);
		};

	});


	/**
	 * Do the calculation to move the progress bar
	 * @private
	 */
	$iziToast.progress = function (options, $toast, callback) {


		var that = this,
			ref = $toast.getAttribute('data-iziToast-ref'),
			settings = extend(this.children[ref], options || {}),
			$elem = $toast.querySelector('.'+PLUGIN_NAME+'-progressbar div');

	    return {
	        start: function() {

	        	if(typeof settings.time.REMAINING == 'undefined'){

	        		$toast.classList.remove(PLUGIN_NAME+'-reseted');

		        	if($elem !== null){
						$elem.style.transition = 'width '+ settings.timeout +'ms '+settings.progressBarEasing;
						$elem.style.width = '0%';
					}

		        	settings.time.START = new Date().getTime();
		        	settings.time.END = settings.time.START + settings.timeout;
					settings.time.TIMER = setTimeout(function() {

						clearTimeout(settings.time.TIMER);

						if(!$toast.classList.contains(PLUGIN_NAME+'-closing')){

							that.hide(settings, $toast, 'timeout');

							if(typeof callback === 'function'){
								callback.apply(that);
							}
						}

					}, settings.timeout);			
		        	that.setSetting(ref, 'time', settings.time);
	        	}
	        },
	        pause: function() {

	        	if(typeof settings.time.START !== 'undefined' && !$toast.classList.contains(PLUGIN_NAME+'-paused') && !$toast.classList.contains(PLUGIN_NAME+'-reseted')){

        			$toast.classList.add(PLUGIN_NAME+'-paused');

					settings.time.REMAINING = settings.time.END - new Date().getTime();

					clearTimeout(settings.time.TIMER);

					that.setSetting(ref, 'time', settings.time);

					if($elem !== null){
						var computedStyle = window.getComputedStyle($elem),
							propertyWidth = computedStyle.getPropertyValue('width');

						$elem.style.transition = 'none';
						$elem.style.width = propertyWidth;					
					}

					if(typeof callback === 'function'){
						setTimeout(function() {
							callback.apply(that);						
						}, 10);
					}
        		}
	        },
	        resume: function() {

				if(typeof settings.time.REMAINING !== 'undefined'){

					$toast.classList.remove(PLUGIN_NAME+'-paused');

		        	if($elem !== null){
						$elem.style.transition = 'width '+ settings.time.REMAINING +'ms '+settings.progressBarEasing;
						$elem.style.width = '0%';
					}

		        	settings.time.END = new Date().getTime() + settings.time.REMAINING;
					settings.time.TIMER = setTimeout(function() {

						clearTimeout(settings.time.TIMER);

						if(!$toast.classList.contains(PLUGIN_NAME+'-closing')){

							that.hide(settings, $toast, 'timeout');

							if(typeof callback === 'function'){
								callback.apply(that);
							}
						}


					}, settings.time.REMAINING);

					that.setSetting(ref, 'time', settings.time);
				} else {
					this.start();
				}
	        },
	        reset: function(){

				clearTimeout(settings.time.TIMER);

				delete settings.time.REMAINING;

				that.setSetting(ref, 'time', settings.time);

				$toast.classList.add(PLUGIN_NAME+'-reseted');

				$toast.classList.remove(PLUGIN_NAME+'-paused');

				if($elem !== null){
					$elem.style.transition = 'none';
					$elem.style.width = '100%';
				}

				if(typeof callback === 'function'){
					setTimeout(function() {
						callback.apply(that);						
					}, 10);
				}
	        }
	    };

	};


	/**
	 * Close the specific Toast
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.hide = function (options, $toast, closedBy) {

		if(typeof $toast != 'object'){
			$toast = document.querySelector($toast);
		}		

		var that = this,
			settings = extend(this.children[$toast.getAttribute('data-iziToast-ref')], options || {});
			settings.closedBy = closedBy || null;

		delete settings.time.REMAINING;

		$toast.classList.add(PLUGIN_NAME+'-closing');

		// Overlay
		(function(){

			var $overlay = document.querySelector('.'+PLUGIN_NAME+'-overlay');
			if($overlay !== null){
				var refs = $overlay.getAttribute('data-iziToast-ref');		
					refs = refs.split(',');
				var index = refs.indexOf(String(settings.ref));

				if(index !== -1){
					refs.splice(index, 1);			
				}
				$overlay.setAttribute('data-iziToast-ref', refs.join());

				if(refs.length === 0){
					$overlay.classList.remove('fadeIn');
					$overlay.classList.add('fadeOut');
					setTimeout(function() {
						$overlay.remove();
					}, 700);
				}
			}

		})();

		if(settings.transitionIn){
			$toast.classList.remove(settings.transitionIn);
		} 

		if(settings.transitionInMobile){
			$toast.classList.remove(settings.transitionInMobile);
		}

		if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
			if(settings.transitionOutMobile)
				$toast.classList.add(settings.transitionOutMobile);
		} else {
			if(settings.transitionOut)
				$toast.classList.add(settings.transitionOut);
		}
		var H = $toast.parentNode.offsetHeight;
				$toast.parentNode.style.height = H+'px';
				$toast.style.pointerEvents = 'none';
		
		if(!ISMOBILE || window.innerWidth > MOBILEWIDTH){
			$toast.parentNode.style.transitionDelay = '0.2s';
		}

		try {
			var event = new CustomEvent(PLUGIN_NAME+'-closing', {detail: settings, bubbles: true, cancelable: true});
			document.dispatchEvent(event);
		} catch(ex){
			console.warn(ex);
		}

		setTimeout(function() {
			
			$toast.parentNode.style.height = '0px';
			$toast.parentNode.style.overflow = '';

			setTimeout(function(){
				
				delete that.children[settings.ref];

				$toast.parentNode.remove();

				try {
					var event = new CustomEvent(PLUGIN_NAME+'-closed', {detail: settings, bubbles: true, cancelable: true});
					document.dispatchEvent(event);
				} catch(ex){
					console.warn(ex);
				}

				if(typeof settings.onClosed !== 'undefined'){
					settings.onClosed.apply(null, [settings, $toast, closedBy]);
				}

			}, 1000);
		}, 200);


		if(typeof settings.onClosing !== 'undefined'){
			settings.onClosing.apply(null, [settings, $toast, closedBy]);
		}
	};

	/**
	 * Create and show the Toast
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.show = function (options) {

		var that = this;

		// Merge user options with defaults
		var settings = extend(CONFIG, options || {});
			settings = extend(defaults, settings);
			settings.time = {};

		if(settings.id === null){
			settings.id = generateId(settings.title+settings.message+settings.color);
		}

		if(settings.displayMode === 1 || settings.displayMode == 'once'){
			try {
				if(document.querySelectorAll('.'+PLUGIN_NAME+'#'+settings.id).length > 0){
					return false;
				}
			} catch (exc) {
				console.warn('['+PLUGIN_NAME+'] Could not find an element with this selector: '+'#'+settings.id+'. Try to set an valid id.');
			}
		}

		if(settings.displayMode === 2 || settings.displayMode == 'replace'){
			try {
				forEach(document.querySelectorAll('.'+PLUGIN_NAME+'#'+settings.id), ;
			} catch (exc) {
				console.warn('['+PLUGIN_NAME+'] Could not find an element with this selector: '+'#'+settings.id+'. Try to set an valid id.');
			}
		}

		settings.ref = new Date().getTime() + Math.floor((Math.random() * 10000000) + 1);

		$iziToast.children[settings.ref] = settings;

		var $DOM = {
			body: document.querySelector('body'),
			overlay: document.createElement('div'),
			toast: document.createElement('div'),
			toastBody: document.createElement('div'),
			toastTexts: document.createElement('div'),
			toastCapsule: document.createElement('div'),
			cover: document.createElement('div'),
			buttons: document.createElement('div'),
			inputs: document.createElement('div'),
			icon: !settings.iconUrl ? document.createElement('i') : document.createElement('img'),
			wrapper: null
		};

		$DOM.toast.setAttribute('data-iziToast-ref', settings.ref);
		$DOM.toast.appendChild($DOM.toastBody);
		$DOM.toastCapsule.appendChild($DOM.toast);

		// CSS Settings
		(function(){

			$DOM.toast.classList.add(PLUGIN_NAME);
			$DOM.toast.classList.add(PLUGIN_NAME+'-opening');
			$DOM.toastCapsule.classList.add(PLUGIN_NAME+'-capsule');
			$DOM.toastBody.classList.add(PLUGIN_NAME + '-body');
			$DOM.toastTexts.classList.add(PLUGIN_NAME + '-texts');

			if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
				if(settings.transitionInMobile)
					$DOM.toast.classList.add(settings.transitionInMobile);
			} else {
				if(settings.transitionIn)
					$DOM.toast.classList.add(settings.transitionIn);
			}

			if(settings.class){
				var classes = settings.class.split(' ');
				forEach(classes, ;
			}

			if(settings.id){ $DOM.toast.id = settings.id; }

			if(settings.rtl){
				$DOM.toast.classList.add(PLUGIN_NAME + '-rtl');
				$DOM.toast.setAttribute('dir', 'rtl');
			}

			if(settings.layout > 1){ $DOM.toast.classList.add(PLUGIN_NAME+'-layout'+settings.layout); }

			if(settings.balloon){ $DOM.toast.classList.add(PLUGIN_NAME+'-balloon'); }

			if(settings.maxWidth){
				if( !isNaN(settings.maxWidth) ){
					$DOM.toast.style.maxWidth = settings.maxWidth+'px';
				} else {
					$DOM.toast.style.maxWidth = settings.maxWidth;
				}
			}

			if(settings.theme !== '' || settings.theme !== 'light') {

				$DOM.toast.classList.add(PLUGIN_NAME+'-theme-'+settings.theme);
			}

			if(settings.color) { //#, rgb, rgba, hsl
				
				if( isColor(settings.color) ){
					$DOM.toast.style.background = settings.color;
				} else {
					$DOM.toast.classList.add(PLUGIN_NAME+'-color-'+settings.color);
				}
			}

			if(settings.backgroundColor) {
				$DOM.toast.style.background = settings.backgroundColor;
				if(settings.balloon){
					$DOM.toast.style.borderColor = settings.backgroundColor;				
				}
			}
		})();

		// Cover image
		(function(){
			if(settings.image) {
				$DOM.cover.classList.add(PLUGIN_NAME + '-cover');
				$DOM.cover.style.width = settings.imageWidth + 'px';

				if(isBase64(settings.image.replace(/ /g,''))){
					$DOM.cover.style.backgroundImage = 'url(data:image/png;base64,' + settings.image.replace(/ /g,'') + ')';
				} else {
					$DOM.cover.style.backgroundImage = 'url(' + settings.image + ')';
				}

				if(settings.rtl){
					$DOM.toastBody.style.marginRight = (settings.imageWidth + 10) + 'px';
				} else {
					$DOM.toastBody.style.marginLeft = (settings.imageWidth + 10) + 'px';				
				}
				$DOM.toast.appendChild($DOM.cover);
			}
		})();

		// Button close
		(function(){
			if(settings.close){
				
				$DOM.buttonClose = document.createElement('button');
				$DOM.buttonClose.type = 'button';
				$DOM.buttonClose.classList.add(PLUGIN_NAME + '-close');
				$DOM.buttonClose.addEventListener('click', function (e) {
					var button = e.target;
					that.hide(settings, $DOM.toast, 'button');
				});
				$DOM.toast.appendChild($DOM.buttonClose);
			} else {
				if(settings.rtl){
					$DOM.toast.style.paddingLeft = '18px';
				} else {
					$DOM.toast.style.paddingRight = '18px';
				}
			}
		})();

		// Progress Bar & Timeout
		(function(){

			if(settings.progressBar){
				$DOM.progressBar = document.createElement('div');
				$DOM.progressBarDiv = document.createElement('div');
				$DOM.progressBar.classList.add(PLUGIN_NAME + '-progressbar');
				$DOM.progressBarDiv.style.background = settings.progressBarColor;
				$DOM.progressBar.appendChild($DOM.progressBarDiv);
				$DOM.toast.appendChild($DOM.progressBar);
			}

			if(settings.timeout) {

				if(settings.pauseOnHover && !settings.resetOnHover){
					
					$DOM.toast.addEventListener('mouseenter', function (e) {
						that.progress(settings, $DOM.toast).pause();
					});
					$DOM.toast.addEventListener('mouseleave', function (e) {
						that.progress(settings, $DOM.toast).resume();
					});
				}

				if(settings.resetOnHover){

					$DOM.toast.addEventListener('mouseenter', function (e) {
						that.progress(settings, $DOM.toast).reset();
					});
					$DOM.toast.addEventListener('mouseleave', ;
				}
			}
		})();

		// Icon
		(function(){

			if(settings.iconUrl) {

				$DOM.icon.setAttribute('class', PLUGIN_NAME + '-icon');
				$DOM.icon.setAttribute('src', settings.iconUrl);

			} else if(settings.icon) {
				$DOM.icon.setAttribute('class', PLUGIN_NAME + '-icon ' + settings.icon);
				
				if(settings.iconText){
					$DOM.icon.appendChild(document.createTextNode(settings.iconText));
				}
				
				if(settings.iconColor){
					$DOM.icon.style.color = settings.iconColor;
				}				
			}

			if(settings.icon || settings.iconUrl) {

				if(settings.rtl){
					$DOM.toastBody.style.paddingRight = '33px';
				} else {
					$DOM.toastBody.style.paddingLeft = '33px';				
				}

				$DOM.toastBody.appendChild($DOM.icon);
			}

		})();

		// Title & Message
		(function(){
			if(settings.title.length > 0) {

				$DOM.strong = document.createElement('strong');
				$DOM.strong.classList.add(PLUGIN_NAME + '-title');
				$DOM.strong.appendChild(createFragElem(settings.title));
				$DOM.toastTexts.appendChild($DOM.strong);

				if(settings.titleColor) {
					$DOM.strong.style.color = settings.titleColor;
				}
				if(settings.titleSize) {
					if( !isNaN(settings.titleSize) ){
						$DOM.strong.style.fontSize = settings.titleSize+'px';
					} else {
						$DOM.strong.style.fontSize = settings.titleSize;
					}
				}
				if(settings.titleLineHeight) {
					if( !isNaN(settings.titleSize) ){
						$DOM.strong.style.lineHeight = settings.titleLineHeight+'px';
					} else {
						$DOM.strong.style.lineHeight = settings.titleLineHeight;
					}
				}
			}

			if(settings.message.length > 0) {

				$DOM.p = document.createElement('p');
				$DOM.p.classList.add(PLUGIN_NAME + '-message');
				$DOM.p.appendChild(createFragElem(settings.message));
				$DOM.toastTexts.appendChild($DOM.p);

				if(settings.messageColor) {
					$DOM.p.style.color = settings.messageColor;
				}
				if(settings.messageSize) {
					if( !isNaN(settings.titleSize) ){
						$DOM.p.style.fontSize = settings.messageSize+'px';
					} else {
						$DOM.p.style.fontSize = settings.messageSize;
					}
				}
				if(settings.messageLineHeight) {
					
					if( !isNaN(settings.titleSize) ){
						$DOM.p.style.lineHeight = settings.messageLineHeight+'px';
					} else {
						$DOM.p.style.lineHeight = settings.messageLineHeight;
					}
				}
			}

			if(settings.title.length > 0 && settings.message.length > 0) {
				if(settings.rtl){
					$DOM.strong.style.marginLeft = '10px';
				} else if(settings.layout !== 2 && !settings.rtl) {
					$DOM.strong.style.marginRight = '10px';	
				}
			}
		})();

		$DOM.toastBody.appendChild($DOM.toastTexts);

		// Inputs
		var $inputs;
		(function(){
			if(settings.inputs.length > 0) {

				$DOM.inputs.classList.add(PLUGIN_NAME + '-inputs');

				forEach(settings.inputs, function (value, index) {
					$DOM.inputs.appendChild(createFragElem(value[0]));

					$inputs = $DOM.inputs.childNodes;

					$inputs[index].classList.add(PLUGIN_NAME + '-inputs-child');

					if(value[3]){
						setTimeout(function() {
							$inputs[index].focus();
						}, 300);
					}

					$inputs[index].addEventListener(value[1], function (e) {
						var ts = value[2];
						return ts(that, $DOM.toast, this, e);
					});
				});
				$DOM.toastBody.appendChild($DOM.inputs);
			}
		})();

		// Buttons
		(function(){
			if(settings.buttons.length > 0) {

				$DOM.buttons.classList.add(PLUGIN_NAME + '-buttons');

				forEach(settings.buttons, function (value, index) {
					$DOM.buttons.appendChild(createFragElem(value[0]));

					var $btns = $DOM.buttons.childNodes;

					$btns[index].classList.add(PLUGIN_NAME + '-buttons-child');

					if(value[2]){
						setTimeout( 300);
					}

					$btns[index].addEventListener('click', function (e) {
						e.preventDefault();
						var ts = value[1];
						return ts(that, $DOM.toast, this, e, $inputs);
					});
				});
			}
			$DOM.toastBody.appendChild($DOM.buttons);
		})();

		if(settings.message.length > 0 && (settings.inputs.length > 0 || settings.buttons.length > 0)) {
			$DOM.p.style.marginBottom = '0';
		}

		if(settings.inputs.length > 0 || settings.buttons.length > 0){
			if(settings.rtl){
				$DOM.toastTexts.style.marginLeft = '10px';
			} else {
				$DOM.toastTexts.style.marginRight = '10px';
			}
			if(settings.inputs.length > 0 && settings.buttons.length > 0){
				if(settings.rtl){
					$DOM.inputs.style.marginLeft = '8px';
				} else {
					$DOM.inputs.style.marginRight = '8px';
				}
			}
		}

		// Wrap
		(function(){
			$DOM.toastCapsule.style.visibility = 'hidden';
			setTimeout(function() {
				var H = $DOM.toast.offsetHeight;
				var style = $DOM.toast.currentStyle || window.getComputedStyle($DOM.toast);
				var marginTop = style.marginTop;
					marginTop = marginTop.split('px');
					marginTop = parseInt(marginTop[0]);
				var marginBottom = style.marginBottom;
					marginBottom = marginBottom.split('px');
					marginBottom = parseInt(marginBottom[0]);

				$DOM.toastCapsule.style.visibility = '';
				$DOM.toastCapsule.style.height = (H+marginBottom+marginTop)+'px';

				setTimeout(function() {
					$DOM.toastCapsule.style.height = 'auto';
					if(settings.target){
						$DOM.toastCapsule.style.overflow = 'visible';
					}
				}, 500);

				if(settings.timeout) {
					that.progress(settings, $DOM.toast).start();
				}
			}, 100);
		})();

		// Target
		(function(){
			var position = settings.position;

			if(settings.target){

				$DOM.wrapper = document.querySelector(settings.target);
				$DOM.wrapper.classList.add(PLUGIN_NAME + '-target');

				if(settings.targetFirst) {
					$DOM.wrapper.insertBefore($DOM.toastCapsule, $DOM.wrapper.firstChild);
				} else {
					$DOM.wrapper.appendChild($DOM.toastCapsule);
				}

			} else {

				if( POSITIONS.indexOf(settings.position) == -1 ){
					console.warn('['+PLUGIN_NAME+'] Incorrect position.\nIt can be › ' + POSITIONS);
					return;
				}

				if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
					if(settings.position == 'bottomLeft' || settings.position == 'bottomRight' || settings.position == 'bottomCenter'){
						position = PLUGIN_NAME+'-wrapper-bottomCenter';
					}
					else if(settings.position == 'topLeft' || settings.position == 'topRight' || settings.position == 'topCenter'){
						position = PLUGIN_NAME+'-wrapper-topCenter';
					}
					else {
						position = PLUGIN_NAME+'-wrapper-center';
					}
				} else {
					position = PLUGIN_NAME+'-wrapper-'+position;
				}
				$DOM.wrapper = document.querySelector('.' + PLUGIN_NAME + '-wrapper.'+position);

				if(!$DOM.wrapper) {
					$DOM.wrapper = document.createElement('div');
					$DOM.wrapper.classList.add(PLUGIN_NAME + '-wrapper');
					$DOM.wrapper.classList.add(position);
					$DOM.wrapper.setAttribute('role', 'alert');
					document.body.appendChild($DOM.wrapper);
				}
				if(settings.position == 'topLeft' || settings.position == 'topCenter' || settings.position == 'topRight'){
					$DOM.wrapper.insertBefore($DOM.toastCapsule, $DOM.wrapper.firstChild);
				} else {
					$DOM.wrapper.appendChild($DOM.toastCapsule);
				}
			}

			if(!isNaN(settings.zindex)) {
				$DOM.wrapper.style.zIndex = settings.zindex;
			} else {
				console.warn('['+PLUGIN_NAME+'] Invalid zIndex.');
			}
		})();

		// Overlay
		(function(){

			if(settings.overlay) {

				if( document.querySelector('.'+PLUGIN_NAME+'-overlay.fadeIn') !== null ){

					$DOM.overlay = document.querySelector('.'+PLUGIN_NAME+'-overlay');
					$DOM.overlay.setAttribute('data-iziToast-ref', $DOM.overlay.getAttribute('data-iziToast-ref') + ',' + settings.ref);

					if(!isNaN(settings.zindex) && settings.zindex !== null) {
						$DOM.overlay.style.zIndex = settings.zindex-1;
					}

				} else {

					$DOM.overlay.classList.add(PLUGIN_NAME+'-overlay');
					$DOM.overlay.classList.add('fadeIn');
					$DOM.overlay.style.background = settings.overlayColor;
					$DOM.overlay.setAttribute('data-iziToast-ref', settings.ref);
					if(!isNaN(settings.zindex) && settings.zindex !== null) {
						$DOM.overlay.style.zIndex = settings.zindex-1;
					}
					document.querySelector('body').appendChild($DOM.overlay);
				}

				if(settings.overlayClose) {

					$DOM.overlay.removeEventListener('click', {});
					$DOM.overlay.addEventListener('click', function (e) {
						that.hide(settings, $DOM.toast, 'overlay');
					});
				} else {
					$DOM.overlay.removeEventListener('click', {});
				}
			}			
		})();

		// Inside animations
		(function(){
			if(settings.animateInside){
				$DOM.toast.classList.add(PLUGIN_NAME+'-animateInside');
			
				var animationTimes = [200, 100, 300];
				if(settings.transitionIn == 'bounceInLeft' || settings.transitionIn == 'bounceInRight'){
					animationTimes = [400, 200, 400];
				}

				if(settings.title.length > 0) {
					setTimeout(function(){
						$DOM.strong.classList.add('slideIn');
					}, animationTimes[0]);
				}

				if(settings.message.length > 0) {
					setTimeout(function(){
						$DOM.p.classList.add('slideIn');
					}, animationTimes[1]);
				}

				if(settings.icon || settings.iconUrl) {
					setTimeou}, animationTimes[2]);
				}

				var counter = 150;
				if(settings.buttons.length > 0 && $DOM.buttons) {

					setTimeout(function(){

						forEach($DOM.buttons.childNodes, function(element, index) {

							setTimeout(function(){
								element.classList.add('revealIn');
							}, counter);
							counter = counter + 150;
						});

					}, settings.inputs.length > 0 ? 150 : 0);
				}

				if(settings.inputs.length > 0 && $DOM.inputs) {
					counter = 150;
					forEach($DOM.inputs.childNodes, function(element, index) {

						setTimeou}, counter);
						counter = counter + 150;
					});
				}
			}
		})();

		settings.onOpening.apply(null, [settings, $DOM.toast]);

		try {
			var event = new CustomEvent(PLUGIN_NAME + '-opening', {detail: settings, bubbles: true, cancelable: true});
			document.dispatchEvent(event);
		} catch(ex){
			console.warn(ex);
		}

		setTimeout(function() {

			$DOM.toast.classList.remove(PLUGIN_NAME+'-opening');
			$DOM.toast.classList.add(PLUGIN_NAME+'-opened');

			try {
				var event = new CustomEvent(PLUGIN_NAME + '-opened', {detail: settings, bubbles: true, cancelable: true});
				document.dispatchEvent(event);
			} catch(ex){
				console.warn(ex);
			}

			settings.onOpened.apply(null, [settings, $DOM.toast]);
		}, 1000);

		if(settings.drag){

			if(ACCEPTSTOUCH) {

			    $DOM.toast.addEventListener('touchstart'}, false);

			    $DOM.toast.addEventListener('touchend'}, false);
			} else {

			    $DOM.toast.addEventListener('mousedown', function(e) {
			    	e.preventDefault();
			        drag.startMoving(this, that, settings, e);
			    }, false);

			    $DOM.toast.addEventListener('mouseup'}, false);
			}
		}

		if(settings.closeOnEscape) {

			document.addEventListener('keyup', function (evt) {
				evt = evt || window.event;
				if(evt.keyCode == 27) {
				    that.hide(settings, $DOM.toast, 'esc');
				}
			});
		}

		if(settings.closeOnClick) {
			$DOM.toast.addEventListener('click'});
		}

		that.toast = $DOM.toast;		
	};
	

	return $iziToast;
});