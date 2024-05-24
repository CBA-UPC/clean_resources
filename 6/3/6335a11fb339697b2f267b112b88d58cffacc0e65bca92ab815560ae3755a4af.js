var isMobile=(window.innerWidth<=768||false)
var isDesktop=(window.innerWidth>768||false)
var isOperaMini=(Object.prototype.toString.call(window.operamini)==='[object OperaMini]'||(navigator.userAgent.indexOf('Opera Mini')>-1))
var isUCBrowser=navigator.userAgent.indexOf('UCBrowser')>-1
var isSingle=jQuery('body').hasClass('single')
var isAndroid=navigator.userAgent.toLowerCase().indexOf('android')>-1
jQuery(document).ready(function($){$('#subscribe form').on('submit',function(){var email=$('#email',this).val()
var currentdate=new Date()
$.cookie('subscription-confirmed','no')
$.cookie('subscription-email',email)
$.cookie('subscription-date',Date.now)})
if(isMobile&&isSingle){$('.subscribebox').each(}
if(jQuery().sticky&&$(document).width()>=768){$('.toast-pop').sticky()}
var disqus_shortname=ipeApp.disqus
var ds_loaded=false
function loadDisqus(){if(isOperaMini){$('#comments').remove()
$(window).off('scroll','loadDisqus')}
if(isSingle&&ipeApp.disqus!==''&&!isOperaMini){var top=$('article.post').find('footer').offset().top
if(!ds_loaded&&$(window).scrollTop()+$(window).height()>top){ds_loaded=true;(function(){var dsq=document.createElement('script')
dsq.type='text/javascript'
dsq.async=true
dsq.src='//'+disqus_shortname+'.disqus.com/embed.js';(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(dsq)})()
if(isDesktop){(function(){var s=document.createElement('script')
s.async=true
s.type='text/javascript'
s.src='//'+disqus_shortname+'.disqus.com/count.js';(document.getElementsByTagName('HEAD')[0]||document.getElementsByTagName('BODY')[0]).appendChild(s)}())}}}}
$(window).scroll(loadDisqus)
loadDisqus()
$('a.dont-like').on('click',function(event){event.preventDefault()
var $related_clone=$('footer section.read-more').clone()
$related_clone.find('ul').attr('style','padding-left: 18px;')
$related_clone.find('.hot').attr('style','color: red;')
$related_clone.find('h4').attr('style','margin-top: 14px; border-bottom: 0px;')
$(this).parent().html($related_clone.html())})
if(isDesktop){$('a[href=\'#subscribe\']').on('click',function(event){event.preventDefault()
if($('header#main').hasClass('fixed')){$('html, body').animate({scrollTop:$('#subscribe').offset().top-100,},700)}else{$('html, body').animate({scrollTop:$('#subscribe').offset().top-$('#subscribe').height()
-90,},1200)}
$('#subscribe').find('#email').focus()})}
if(isMobile){$(document).on('click','.navbar-search',function(e){e.preventDefault()
var $searchdiv=$('.mobile-search')
if($('.ipea-m').length){if($('.mobile-search:visible').length){$('.ipea-m').animate({'padding-top':'0',},200,function(){$searchdiv.fadeOut('fast')})}else{$('.ipea-m').animate({'padding-top':'65px',},200,}}else{if($('.mobile-search:visible').length){$searchdiv.fadeOut('fast')}else{$searchdiv.fadeIn('fast')}}})
if(jQuery().mobileMenu){$('#category-menu').mobileMenu({defaultText:'Sex Story Categories',className:'categories-list-mobile',})}
if($('section#mobile .ipeadzone').height()>0){if(isOperaMini){$('header#main').css('padding-top','140px')}else{$('header#main').css('padding-top','65px')}}
$('.site-of-month .close').on('click',function(){var cookie_value=$(this).data('cookie')
document.cookie='ipe-site-of-month='+cookie_value+'; expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/'})
if(getCookie('ipe-site-of-month')!==$('.site-of-month .close').data('cookie')){$('.site-of-month').show()}}
$('#ipe-network-opener').on('click',function(){if($('#ipe-network').hasClass('in')){$(this).html('+')}else{$(this).html('-')}})
if(isDesktop){$(window).scroll(function(){var height=$(window).scrollTop()
if(isDesktop&&height>100){$('header#main').removeClass('container').addClass('fixed')}else{$('header#main').removeClass('fixed').addClass('container')}})
$(window).scroll(function(){if($(this).scrollTop()>1){$('#logo_container_div').addClass('headersticky')}
else{$('#logo_container_div').removeClass('headersticky')}})
if(jQuery().scrollTop){$(window).scroll(}
$('.go-top').click(}
$('button#jump').click(function(){if($('body').hasClass('search')){document.location.href=$('input#site_url').val()+'/page/'+$('input#page_number').val()+'/?s='+$('input#query').val();}else{document.location.href=$('input#site_url').val()+'/page/'+$('input#page_number').val()+'/'+$('input#query').val()}})})
function IPEA_loader_old($el,url){var min=$el.data('minw'),max=$el.data('maxw')
if(window.innerWidth>min&&window.innerWidth<max){var q=document.createElement('iframe')
q.src=url
q.name=$el.data('spot')
q.width=$el.data('width')
q.height=$el.data('height')
q.scrolling='no'
q.setAttribute('allowtransparency','true')
q.setAttribute('seamless','seamless')
q.setAttribute('frameborder','0')
q.setAttribute('class','IPEA-loaded')
$el.append(q)}}
function IPEA_loader($el,spot){var min=$el.data('minw'),max=$el.data('maxw'),q,url=isUCBrowser?spot.uc_url:spot.url,html=isUCBrowser?spot.uc_html:spot.html
if(window.innerWidth>min&&window.innerWidth<max){if(spot.html.indexOf('<script')==-1){$el[0].innerHTML=html}else{if(isOperaMini){q=document.createElement('iframe')
q.src=url
q.name=$el.data('spot')
q.width=$el.data('width')
q.height=$el.data('height')
q.scrolling='no'
q.setAttribute('allowtransparency','true')
q.setAttribute('seamless','seamless')
q.setAttribute('frameborder','0')
q.setAttribute('class','IPEA-loaded')
$el.append(q)
return}
q=document.createElement('iframe')
q.name=$el.data('spot')
q.width=$el.data('width')
q.height=$el.data('height')
q.setAttribute('style','border: 0;')
q.scrolling='no'
q.setAttribute('allowtransparency','true')
q.setAttribute('seamless','seamless')
q.setAttribute('frameborder','0')
q.setAttribute('class','IPEA-loaded')
$el.append(q)
try{var icw=q.contentDocument?q.contentDocument:(q.contentWindow?q.contentWindow.document:(q.document?q.document:false))
if(false!==typeof icw){icw.open()
icw.write(html)
icw.close()}else{q.src=url}}catch(err){q.src=url}
return}}}
function getCookie(cname){var name=cname+'='
var ca=document.cookie.split(';')
for(var i=0;i<ca.length;i++){var c=ca[i]
while(c.charAt(0)==' '){c=c.substring(1)}
if(c.indexOf(name)!=-1){return c.substring(name.length,c.length)}}
return ''}