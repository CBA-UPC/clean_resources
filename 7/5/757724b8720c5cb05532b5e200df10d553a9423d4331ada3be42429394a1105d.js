
(function(w,d,sitekey){if(typeof Array.prototype.forEach==='undefined'){return;}
var mailingRecaptchaNodes=d.querySelectorAll('.jMailingRecaptcha');if(mailingRecaptchaNodes.length===0){return;}
if(typeof w.CCMRecaptchaOnLoad==='undefined'){w.CCMRecaptchaOnLoad=function(){for(var i=0,l=w.CCMRecaptchaData.onLoadBuffer.length;i<l;i++){var handler=w.CCMRecaptchaData.onLoadBuffer.shift();try{typeof handler==='function'&&(handler());}catch(error){console.error('Error when executing CCMRecaptcha callback',error);}}};}
if(typeof w.CCMRecaptchaData==='undefined'){w.CCMRecaptchaData={onLoadBuffer:[],apiLoading:false};}
var forEachForm=function(cb)
{[].forEach.call(mailingRecaptchaNodes,function(placeholder)
{var form=(function(el){while((el=el.parentElement)&&el.nodeName!=='FORM');return el;})(placeholder);if(form.nodeName==='BODY'){return;}
cb(form,placeholder);});},loadRecaptchaAPI=function()
{w.CCMRecaptchaData.apiLoading=true;var node=d.createElement('script');node.src='https://www.google.com/recaptcha/api.js?onload=CCMRecaptchaOnLoad&render=explicit';node.async=true;node.defer=true;d.getElementsByTagName('head')[0].appendChild(node);},enableRecaptcha=function()
{var rcheckableTypes=/^(?:checkbox|radio)$/i,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i,ajaxCallback=function(opts){opts.form.setAttribute('alreadySubmit','true');if(this.readyState===4&&this.status===200)
{var data=JSON.parse(this.responseText);if(data.status==='ok')
{var container=d.createElement('div'),ifrmCont=d.createElement('div'),ifrm=d.createElement('iframe'),closebtn=d.createElement('a'),closeimg=d.createElement('img'),targetUrl=data.url;closebtn.setAttribute('class','app_close');closebtn.onclick=closebtn.appendChild(closeimg);container.setAttribute('class','jMailingRecaptchaIframeContainer');ifrm.setAttribute('src',targetUrl);container.appendChild(ifrmCont);ifrmCont.appendChild(closebtn);ifrmCont.appendChild(ifrm);d.body.appendChild(container);}}},ajaxPost=function(opts)
{var url=opts.form.action,xhr=new XMLHttpRequest(),isTokenInjected=false,params=[].filter.call(opts.form.elements,function(el){return el.name&&!el.disabled&&rsubmittable.test(el.nodeName)&&!rsubmitterTypes.test(el.type)&&(el.checked||!rcheckableTypes.test(el.type));}).map(function(el){if(el.name==='g-recaptcha-response'){isTokenInjected=true;}
return encodeURIComponent(el.name)+'='+encodeURIComponent(el.value);}),gaEventLabel=[];if(!isTokenInjected){params.push('g-recaptcha-response='+encodeURIComponent(opts.token));}
var typePage=typeof dataLayer!=='undefined'?(dataLayer[0].typePage||dataLayer[0].pageCategory||''):'';gaEventLabel.push(typePage);var level1=typeof dataLayer!=='undefined'?(dataLayer[0].level1||''):'';gaEventLabel.push(level1);var position=typeof opts.form.dataset.position!=='undefined'?opts.form.dataset.position:'';gaEventLabel.push(position);params.push('gaeventlabel='+encodeURIComponent(gaEventLabel.join('_')));params=params.join('&');xhr.open('POST',url);xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');xhr.onload=ajaxCallback.bind(xhr,opts);xhr.send(params);};forEachForm(function(form,placeholder)
{var idWidgetCaptcha=grecaptcha.render(placeholder,{'sitekey':sitekey,'callback':'size':'invisible','badge':'inline'});form.addEventListener('submit',function(e){e.preventDefault();if(form.querySelectorAll('input[type=hidden][name="lists[]"]').length===0){if(form.querySelectorAll('input[type=checkbox][name="lists[]"]:checked').length===0){return false;}}
this.getAttribute('alreadySubmit')&&grecaptcha.reset(idWidgetCaptcha);grecaptcha.execute(idWidgetCaptcha);return false;});if(form.forceSubmit){form.forceSubmit=false;grecaptcha.execute(idWidgetCaptcha);}});};if(typeof grecaptcha==='undefined')
{w.CCMRecaptchaData.onLoadBuffer.push(enableRecaptcha);if(!w.CCMRecaptchaData.apiLoading)
{forEachForm(function(form)
{var onFormSubmit=function(e){e.preventDefault();if(typeof grecaptcha==='undefined'){form.forceSubmit=true;return;}
form.removeEventListener('submit',onFormSubmit);},onFormFocus=function(e){if(e.target.nodeName==='INPUT'){if(typeof grecaptcha==='undefined'&&!CCMRecaptchaData.apiLoading){loadRecaptchaAPI();}
form.removeEventListener('focus',onFormFocus,true);}};if(typeof form.elements.email!=='undefined'){form.elements.email.required=true;}
form.addEventListener('submit',onFormSubmit);form.addEventListener('focus',onFormFocus,true);});}}
else
{enableRecaptcha();}})(window,document,'6LfcECcUAAAAANw9v7LQYqYsrkQmseAxos7r8wQP');