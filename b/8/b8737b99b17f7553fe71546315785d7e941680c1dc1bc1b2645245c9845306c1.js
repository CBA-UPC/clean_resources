/*! 20240125-18-RELEASE */

!function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);const t={DIV:1,P:1,ARTICLE:1,SECTION:1,I:1,EM:1,STRONG:1},e="div, p, article, section, i, em, strong",n=40;let o=null,r=null,l=null;function c(t){return Array.prototype.slice.call(t)}function i(t=.6){const e=a();if(!e||!e.length)return;const n=u(e),o=s(n,t);return{articleElement:o,taboolaContainers:e,lowestContainer:n}}function a(){const t=[];return document.querySelectorAll(".trc_related_container").forEach(l=>{e(l)||n(l)||o(l)||r(l)||t.push(l)}),t;function e(t){const e="Explore More"===t.getAttribute("data-parent-placement-name")&&TRC.dom.closest(t,'[data-parent-placement-name="Explore More"]'),n=t.getAttribute("data-placement-name")&&t.getAttribute("data-placement-name").indexOf("Explore More")>-1&&TRC.dom.closest(t,'[data-placement-name*="Explore More"]'),o=t&&TRC.dom.closest(t,'[id^="tbl-explore-more"]')||!1;return e||n||o}function n(t){return t&&(TRC.dom.closest(t,".tbl-next-up-inner")||TRC.dom.closest(t,'[id*="next-up"]'))}function o(t){return t&&TRC.dom.closest(t,".tbl-vignette")}function r(t){return!t||!t.querySelector("[data-item-id]")}}function u(t){return t.map(t=>({container:t,top:E(t)})).sort((t,e)=>e.top-t.top).shift().container}function s(t,e){const n=d(t),o=e*n,r=m(o,t);return r}function d(t){const e=[],n=document.body.children;l=t&&t.id||null;for(let o=0;o<document.body.childElementCount&&(e.push(n[o]),!TRC.dom.isAncestor(n[o],t));++o);return f(e)}function f(t){let e=0;return t.forEach(t=>{e+=p(t)}),e}function m(t,e){let n=document.body;for(;n.childElementCount;){const o=T(n,e);if(!(o.length>t))return 0===o.length&&void 0===o.el?n&&n.parentElement:n;n=o.el}return n}function p(n){let o=0;if(t[n.nodeName]&&(o=g(n)),n.querySelectorAll){const t=c(n.querySelectorAll(e)),r=h(t);r.forEach(t=>{t.offsetParent&&(o+=g(t))})}return o}function h(t){let e=!1,n=null;for(let o=0;o<t.length;o++)if(t[o]&&t[o].id&&l&&t[o].id.indexOf(l)>-1){e=!0,n=o;break}return!0===e&&null!==n?t.slice(0,n):t}function g(t){let e=0;return A(t)&&C(t)&&t.childNodes.forEach(t=>{3===t.nodeType?e+=t.textContent.trim().length:"A"===t.nodeName&&t.innerText&&t.innerText.length>n&&(e+=t.textContent.trim().length)}),e}function A(t){return!(t&&o&&o.contains(t))&&(!t||!t.hasAttribute("data-google-query-id")||(o=t,!1))}function C(t){return!(t&&r&&r.contains(t))&&(!(t&&t.classList&&t.classList.length>0&&t.classList.contains("trc_related_container")||t.hasAttribute("data-parent-placement-name"))||(r=t,!1))}function T(t,e){let n,o=0;const r=t.childNodes;for(let l=0;l<r.length;++l){const t=p(r[l]);if(o<t&&(n=r[l],o=t),TRC.dom.isAncestor(r[l],e))break}return{el:n,length:o}}function E(t){return t.getBoundingClientRect().top+window.pageYOffset}TRC.ArticleDetection={detectArticle:i,getAllTextLengthInElement:p},window._trcIsUTactive&&(TRC.ArticleDetection.getTaboolaContainers=a,TRC.ArticleDetection.isNotGoogleDFPAd=A,TRC.ArticleDetection.isNotTaboolaAd=C)}();nymousUser(){var isAnonumousUser=$('#isAnonumousUser').val();if(isAnonumousUser==1){$('#btn').val('Login & Comment');$('#isAnonumousUser').val(0)}else{$('#btn').val('Post your comment');$('#isAnonumousUser').val(1)}}$().ready(function(){ if($.cookie('anonymous-name')!=null){ $('#name').val($.cookie('anonymous-name'))}if($.cookie('anonymous-email')!=null){$('#email').val($.cookie('anonymous-email'))}if($.cookie('parentcid-'+'story-khabar-india-4965842')!=null){setTimeout(function(){setCommentReplyText($.cookie("parentcid-story-khabar-india-4965842"),"","story-khabar-india-4965842")},1000)}var userLoggedin='';var enabledEmailOnComments='1';
    setTimeout(function(){$('#loading').hide();$('#comment_widget').show();var height=$('#comment_widget').outerHeight(true);},500);
    //jQuery.getScript('//connect.facebook.net/en_UK/all.js',function(){window.FB.init({appId:'195553365041',})})
    });
    //(function(){var po=document.createElement('script');po.type='text/javascript';po.async=true;po.src='https://apis.google.com/js/client:plusone.js?onload=render';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s)})();
    function adjHeight(){
        var height=$('#comment_widget').outerHeight(true);if(0 && gadget360 == '0'){ $('#ndtvSocialCommentForm',parent.document).height(height) }else{ parent.postMessage($('#comment_widget').outerHeight(true) + 50,"*"); }
        window.parent.postMessage({sentinel: '_commentamp',type: 'embed-size',height: $('.comments_txt ul').outerHeight(true) + 250,'_id':'ndtvSocialCommentForm'}, '*');
        
    }
</script><script src='https://drop.ndtv.com/ndtv/khabar/js/transliteration.I.js' type='text/javascript'></script><script type='text/javascript'>
    google.load("elements", "1", {packages: "transliteration"});
    function onLoad() {
        var options = {sourceLanguage: google.elements.transliteration.LanguageCode.ENGLISH, destinationLanguage: google.elements.transliteration.LanguageCode.HINDI, shortcutKey: 'ctrl+g', transliterationEnabled: true};
        var control = new google.elements.transliteration.TransliterationControl(options);
        control.makeTransliteratable(['comment']);
    }
    google.setOnLoadCallback(onLoad);
</script><script type="text/javascript">var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-11243047-2']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();</script><style> :root {--vj-cl-rg1: rgba(0, 0, 0, 0.17);--vj-cl-rg2: rgba(255, 255, 255, 0.9);--vj-cl-dr7: #2674d6; } </style><style>
    .newcomment_list ul li,form,li,p,ul{list-style-type:none}body{font-family:Roboto,Arial,Helvetica,sans-serif;padding:0;margin:0;height:100%;overflow:hidden}.comment_widget{width:100%;overflow:hidden}.comment_widget a{color:#000;text-decoration:none}.comment_widget .comment_head{width:100%;float:left;margin-top:7px;margin-bottom:15px}.comment_widget .comment_head i{width:24px;height:22px;margin:-3px 7px 0 0;vertical-align:middle;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEFGODdCQzBENEZEMTFFNzk1NDFGMjkwQjhBNUZEMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEFGODdCQzFENEZEMTFFNzk1NDFGMjkwQjhBNUZEMTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QUY4N0JCRUQ0RkQxMUU3OTU0MUYyOTBCOEE1RkQxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QUY4N0JCRkQ0RkQxMUU3OTU0MUYyOTBCOEE1RkQxNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl23e2sAAADZSURBVHjaYrz54Ln2kXO3m169++TPwMDAzEAd8I+fh3Ojs4VWAbOmhdfedx+/GgMFORioBxh//voj9/bDVweWT1++6zLQBnADQ8WUiYG2gJHWFjCMWjBqwagFw8WCfzQ0/x8THw/nLiDjLQ0MfyUmxLuFycVCKxXIOEKET34D8X8iDf8DdPgmGyO1VMb///8T7aTLt5/0bT10MRbIFIGJVSR7M1ItknVVZcoTA2zT2VlZHhPrG1JT0W9xYb71mRFOvsBgXQvkfyWoAxREZGKhzQcvTCWkDiDAACHnhM162KuWAAAAAElFTkSuQmCC) no-repeat;display:inline-block}.comment_widget .comment_head span{display:inline-block;font-family:Merriweather,serif;font-size:18px;font-weight:900}.comment_widget .comment_head p{display:block;margin-top:5px;font-size:13px;font-weight:400}.comment_widget .comment_login{width:100%;float:left;margin-bottom:15px;display:none}.comment_widget .new_commentwrap{padding:0;position:relative;float:left;height:50px}.comment_widget .new_commentwrap .com_head{margin:0;float:left;width:100%}.comment_widget .new_commentwrap .com_head .com_socialwrap{width:calc(100% + 20px);float:left;box-sizing:border-box}.comment_widget .new_commentwrap .com_head>span{text-align:left;width:100%;float:left;height:25px;color:#2B2B2B;font-size:13px}.comment_widget .new_commentwrap .com_head .com_socialwrap a{display:inline-block;position:relative;margin:0 8px 0 0;color:#fff;cursor:pointer;text-align:center;padding:6px 9px;font-size:12px;border-radius:30px;background-color:#919191;border-bottom:2px solid #6d6d6d;-webkit-transition:padding .2s,font-size .2s,margin .2s;transition:padding .2s,font-size .2s,margin .2s}.comment_widget .new_commentwrap .com_head .com_socialwrap a:hover{padding:6px 11px;font-size:14px;margin:-2px 8px 0 0}.comment_widget .new_commentwrap .com_head .com_socialwrap a:last-child{margin-right:0}.comment_widget .new_commentwrap .com_head .com_socialwrap .com_fbook{background-color:#475993;border-color:#445385;left:116px}.comment_widget .new_commentwrap .com_head .com_socialwrap .com_twitter{background-color:#76a9ea;border-color:#729dd3;left:64px}.comment_widget .new_commentwrap .com_head .com_socialwrap .com_gplus{background-color:#f34a38;border-color:#da4f3f;right:20px}.comment_widget .new_commentwrap .com_head .com_socialwrap .com_anony{background-color:#919191;border-color:#898989;right:100px}.comment_widget .new_comment_box{width:100%;float:left;padding:0;margin:0;background:0 0}.comment_widget .loginbutton{float:left;width:100%;color:#069;text-align:center;margin-bottom:10px}.comment_widget .loginbutton input{float:none;color:#fff;cursor:pointer;padding:3px 15px;font-size:15px;text-transform:uppercase;font-weight:400;font-family:Roboto,Arial,Helvetica,sans-serif;text-decoration:none;position:relative;width:auto;height:30px;background-color:#757575;border:none;border-radius:30px;border-bottom:2px solid #6d6d6d;transition:all .2s ease;-webkit-appearance:none}.comment_widget .loginbutton input:hover{transform:scale(1.1)}.comment_widget .comments_content,.comment_widget .comments_txt,.comment_widget .comments_txt ul,.comment_widget .comments_txt ul li{width:100%}.comment_widget .comments_txt ul li{list-style-type:none;margin-bottom:20px}.comment_widget .comments_txt ul li span{display:inline-block;text-transform:uppercase}.comment_widget .comments_txt ul li>div>span{font-size:12px}.comment_widget .comments_txt ul li span strong{font-weight:900}.comment_widget .comments_txt ul li span a{color:#000}.comment_widget .comments_txt ul li li{margin:15px 0 0;padding:0 0 0 15px;box-sizing:border-box}.comment_widget .comments_txt ul li p{font-size:13px;font-family:Merriweather,serif;font-weight:400;line-height:18px}#anonymous-login input,.write_box_widget textarea{font-family:Roboto,Arial,Helvetica,sans-serif;resize:none;-webkit-appearance:none;box-sizing:border-box}.comment_widget .comments_txt{height: calc(100vh - 150px);padding-right:5px;margin-bottom:10px;overflow:hidden;overflow-y:auto;box-sizing:border-box}::-webkit-scrollbar-track{border-radius:7px;background-color:#ececec}::-webkit-scrollbar{width:7px;height:7px;border-radius:7px;background-color:#c1c1c1}::-webkit-scrollbar-thumb{border-radius:7px;background-color:#c1c1c1}form,li,p,ul{margin:0;padding:0}.comment_widget .comments_txt::-webkit-scrollbar-corner{background-color:transparent}.comment_widget .comment_error{font-size:13px;font-weight:400;color:red;margin-bottom:10px}.comment_widget .morecomment_bot{width:100%;float:left;text-align:center;margin-top:15px;height:30px}.comment_widget .morecomment_bot span{font-size:13px;background:#ddd;border-radius:20px;padding:5px 10px;line-height:0}.comment_widget .morecomment_bot span a{color:#000}.write_box_widget{width:calc(100% - 10px);float:left;margin-bottom:10px}.write_box_widget textarea{width:100%;height:30px;line-height:18px;margin:0 0 10px;padding:5px 8px;border-radius:3px;border:1px solid #ddd;font-size:13px}#anonymous-login input:focus,.write_box_widget textarea:focus{border:1px solid #a6c8ff;outline:0}#anonymous-login input::placeholder,.write_box_widget textarea::placeholder{color:#666}#afcommentbtn{display:none}.sortby{width:calc(100% - 10px);display:block;float:left;margin:0 0 15px;padding:0 1px 0 0;border-bottom:1px solid #e5e5e5;box-sizing:border-box;text-align:right}.sortby .select-style{width:40%;float:right;overflow:hidden;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGM0RFMzczMTI1OTExRThBRkVFQThCQzQ1MUU5MzMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGM0RFMzc0MTI1OTExRThBRkVFQThCQzQ1MUU5MzMzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUYzREUzNzExMjU5MTFFOEFGRUVBOEJDNDUxRTkzMzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUYzREUzNzIxMjU5MTFFOEFGRUVBOEJDNDUxRTkzMzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7FKT03AAAAVUlEQVR42myM0QnAMAhEY/4dwp3MALqeQzmEA9heIKWUPlDO83SaWd+Mv8JuVtVw9x4f4GG3k6ra70/Q8KAJDay1mpm3xmVEEPQTACKyh8yk410CDACFL0Vd3nxk7AAAAABJRU5ErkJggg==) 100% 50% no-repeat;position:relative}.sortby .select-style:after{width:30px;height:23px;background:#fff;content:"";position:absolute;left:0;top:0}.sortby .select-style select{padding:5px 10px 6px;width:100%;border:none;box-shadow:none;background:0 0;-webkit-appearance:none;text-transform:uppercase;direction:rtl;text-align:right;font-size:11px}.sortby .select-style select option{direction:rtl;text-align:right;-webkit-appearance:none;width:100%;padding:0}.sortby .select-style select:focus{outline:0;-webkit-appearance:none}.dateline{padding-top:10px}.dateline span{color:grey;font-size:11px;margin:0}.com_interactives{background-color:#fff;border:1px solid #ddd;margin:5px 0 0;display:table}.com_interactives span{position:relative;padding:3px 6px 6px;margin-bottom:0;text-align:center;border-right:solid 1px #ddd;box-sizing:border-box;font-weight:400;line-height:13px}.com_interactives span:last-child{border-right:none}.com_interactives a{font-size:11px;color:#000}.ra_response{font-size:13px;color:#666;margin:5px 0 10px;background-color:#f5f5f5;float:left;padding:5px;width:100%;box-sizing:border-box}.com_interactives span.liked{font-weight:700;font-size:11px;padding:0}.com_user_text{width:100%;margin:5px 0 0}#anonymous-login,.after_login{width:100%;float:left;margin-bottom:10px}#anonymous-login{background:0 0;padding:0;margin-bottom:10px!important}#anonymous-login input{width:48%;height:30px;line-height:18px;padding:5px 8px;border-radius:3px;border:1px solid #ddd;font-size:13px}#anonymous-login input:last-child{float:right}.after_login ul{margin:0;padding:0;float:left;width:100%}.after_login ul li{width:70%;float:left;font-size:12px;font-weight:400;color:#000;display:table}.subs_login,.user_icon{display:table-cell;vertical-align:middle}.sign_out,.sign_out:before,a.member{display:inline-block}.avtar{width:36px;height:36px;border-radius:100%}.subs_login{width:100%;padding-left:10px;box-sizing:border-box;line-height:14px}.email_subc{text-align:right;margin-top:4px}.email_icon{float:right;margin-left:5px}#comment-reply,.newcomment_list,.newcomment_list ul,.newcommentlist_wrap{float:left;width:100%}a.member{font-weight:700}a.email-sub,a.logout{color:#326891;font-weight:400}#comment-reply{margin-bottom:5px}.newcommentlist_wrap{background:#f5f5f5;padding:10px;margin-bottom:10px;box-sizing:border-box}.newcomment_list ul li span{display:inline-block;text-transform:uppercase}.newcomment_list ul li>div>span{font-size:12px}.newcomment_list ul li span strong{font-weight:900}.newcomment_list ul li span a{color:#000}.newcomment_list ul li p{font-size:13px;font-family:Merriweather,serif;font-weight:400;line-height:18px}a.btn_cancel{float:right;text-align:right;color:#326891;position:relative;margin-right:-10px}.sign_out{margin-left:5px;position:relative}.sign_out:before{content:"|";color:inherit;margin-right:5px}.replycomt{color:#474747;float:left;font-size:12px;line-height:1.5em;width:100%}#subscription{font-size:12px;color:#666;margin-bottom:3px}#subscription a{color:#326891}.comment_logindetail{font-size:12px;margin-bottom:10px;background:#f5f5f5;padding:5px;float:left}#confirmEmail{width:47%}.comment_logindetail input{padding:2px 5px;border-radius:3px;border:1px solid #ddd;font-size:12px;-webkit-appearance:none}.comment_logindetail input:focus{outline:0;-webkit-appearance:none}@media screen and (max-device-width:768px){.comment_widget .new_commentwrap .com_head .com_socialwrap a,.write_box_widget textarea{font-size:14px}body{font-family:-apple-system,Arial,Helvetica,sans-serif}.comment_widget .comment_head span,.comment_widget .comments_txt ul li p,.comment_widget .loginbutton input,.newcomment_list ul li p,.write_box_widget textarea{font-family:inherit}.comment_widget .comments_txt{height:auto!important;max-height:none;padding-right:0;margin-bottom:0}.comment_widget .comment_head i{margin:-2px 7px 0 0}.comment_widget .comment_error,.comment_widget .new_commentwrap .com_head>span{font-size:15px}.sortby,.write_box_widget{width:100%}.sortby{height:24px}.sortby .select-style select{font-size:12px}.comment_widget .comments_txt ul li p,.newcomment_list ul li p{font-size:15px;line-height:20px}.comment_widget .comments_txt ul li>div>span,.newcomment_list ul li>div>span{font-size:13px}.ra_response{font-size:15px;line-height:20px}.com_interactives span{padding:3px 6px 5px}.com_interactives a,.dateline span{font-size:12px}.comment_widget .morecomment_bot span{font-size:15px;padding:7px 15px}.after_login ul li,.comment_logindetail{font-size:13px}.comment_widget .comments_txt ul li{margin-bottom:25px}.subs_login{line-height:16px}}
    @media screen and (max-device-width:768px) {.comment_widget .comments_txt {max-height: inherit !important;overflow: auto !important;} #anonymous-login input:focus, .write_box_widget textarea:focus { color: #dadada;}.comment_widget .morecomment_bot span {font-size: 13px;background: #000;border-radius: 20px;padding: 5px 10px;line-height: 0;}.comment_widget .morecomment_bot span a { color: #999;}}
    .comment_widget .success {color:#249224}
</style><style>
    .comment_widget .vew_mre-btn {
    padding: 0 0px 20px;
    background-color:transparent;
    float: none;
    height: auto;
    padding-bottom: 10px;
}
.comment_widget .vew_mre-btn > span{
    display:block;
    padding:0;
    background-color:transparent;
    margin-bottom: 10px;
}
.comment_widget .vew_btn-lnk {
    background-color: var(--vj-cl-rg2);
    border: 1px solid var(--vj-cl-rg1);
    box-shadow: 0 2px 2px var(--vj-cl-rg1);
    border-radius: 6px;
    display: block;
    padding: 7px 20px;
    text-align: center;
    width: 70%;
    margin: 0px auto;
}
.comment_widget .vew_mre-btn .vew_btn-txt {
    color: var(--vj-cl-dr7);
    display: inline-block;
    font-size: 17px;
    font-weight: 700;
    vertical-align: middle;
    position: relative;
    background: transparent;
    line-height: 1;
}
.comment_widget .vew_btn-txt:after {
    border-right: 2px solid var(--vj-cl-dr7);
    border-bottom: 2px solid var(--vj-cl-dr7);
    content: "";
    height: 9px;
    line-height: 1;
    text-align: center;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 9px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 6px;
    position: relative;
    top: -3px;
}
</style></head><body><div class="comment_widget" id="comment_widget"><div class="comment_head"><i></i><span>Be the first one to comment on this story</span></div><div class="write_box_widget" id="write_box_widget"><div id="comment-reply"></div><form action="" id="comment-form" method="post" onsubmit=" checkSubscription('https://social.ndtv.com/ajax/', 'story-khabar-india-4965842'); return doValidation('story-khabar-india-4965842');"><div style="display:none;"><input type="hidden" name="page_title" value="हेमंत सोरेन अपने भाई-भाभी को छोड़कर पत्नी कल्पना सोरेन को क्यों बनाना चाहते हैं  CM? जानें एक्सपर्ट की राय" /><br /><input type="hidden" name="page_url" value="https://ndtv.in/india/why-hemant-soren-want-to-wife-kalpana-soren-as-jharkhand-cm-instead-of-his-brother-4965842"/><br /><input type="hidden" name="identifier" value="story-khabar-india-4965842"/><br /><input type="hidden" name="ctype" value="story"/><br /><input type="hidden" name="parent-site" value="ndtv"/><br /><input type="hidden" name="token" value="277f2f3eb66f40b1714781211f3d2e17f234e3b79eb869bcbab879cab80eb81a"/><br /><input type="hidden" name="submit" value="Post" /></div><div style="display:none"><div id="subscription" style="padding-top:3px;float: left; display:none;"></div></div><div style="display:none;" id="confirm-email" class="comment_logindetail"><div style="float:left;margin-bottom: 5px;"><label>To subscribe to email notification for comments, please add your email address.</label></div><div style="clear:both;"></div><label>Email </label><input type="text" name="confirmEmail" id="confirmEmail" size="30" value="" /><input type="button" name="confirm" value="Verify" onclick="javascript:sendVerificationEmail('https://social.ndtv.com/ajax/', '', 'https://ndtv.in/india/why-hemant-soren-want-to-wife-kalpana-soren-as-jharkhand-cm-instead-of-his-brother-4965842', 'story-khabar-india-4965842');"><input type="button" name="cancel" value="Cancel" onclick="javascript:cancelVerification();"><span class="loading-img" style="display:none;padding-right:158px;float:right;"><img src="//drop.ndtv.com/social/static/loading.gif" /></span></div><div id="anonymous-login" style="display: none;margin-bottom: 5px;" class="comment_logindetail"><input type="hidden" name="isAnonumousUser" id ="isAnonumousUser" value="0"><input type="text" name="anonumousCheck" id ="anonumousCheck" value="" style="display: none;"><input type="text" id ="name" name="name" value="" placeholder="Name" class=""/><input type="text"  id ="email" name="email" placeholder="Email" value="" class=""/></div><input type="hidden" name="parentid" id="parentid" value="0" /><div class="clear"></div><div class="new_comment_box"><textarea name="comment" id="comment" rows="1" cols="10" placeholder="Share your thoughts."></textarea><div class="comment_error response_comment" id="response"  style="display:none;"></div><div class="clear"></div><div class="comment_login"><p class="loginbutton"><input name="submit" id="btnNew" type="submit" value="Post Comment" /></p><div id="afcommentbtn"><div class="new_commentwrap" id="comment_widget_form"><div class="com_head"><span>Comment via</span><div class="com_socialwrap"><a href="javascript:void(0);" onclick="clearReplyNew();window.open('https://social.ndtv.com/ajax/login-facebook.php?gadget360=1','sharer','toolbar=0,status=0,width=830,height=530');$('#anonymous-login').hide();" class="com_fbook">Facebook</a><a href="javascript:void(0);" onclick="clearReplyNew();window.open('https://social.ndtv.com/ajax/login-twitter.php?gadget360=1','sharer','toolbar=0,status=0,width=830,height=530');$('#anonymous-login').hide();" class="com_twitter">Twitter</a><a href="javascript:void(0);" onclick="clearReplyNew();window.open('https://social.ndtv.com/ajax/login-google.php?gadget360=1','sharer','toolbar=0,status=0,width=830,height=530');$('#anonymous-login').hide();" class="com_gplus">Google+</a><a href="javascript:void(0);" onclick="clearReplyNew();$('#isAnonumousUser').val(1);$('#afcommentbtn').html('');doValidation('story-khabar-india-4965842');" class="com_user">Anonymous</a></div></div></div><script>setTimeout(adjHeight, 1500);</script></div></div></div></form></div><div class="sortby"><div class="select-style"><select name="comment_sort" placeholder="Sort By" onchange="javascript:getSortUrl( self.location, this.value)"><option value="newest"  selected=selected >Latest</option><option value="oldest" >Oldest</option><option value="likes" >Most Liked</option></select></div></div><div class="comments_content" id="comment_list_dv" ><div class="comments_txt"><ul><li id="dontshow">Be the first one to Comment.</li></div></div></div><link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Roboto:400,400i,500,500i,900,900i&display=swap" rel="stylesheet"><script>var _sf_startpt=(new Date()).getTime()</script><script src="https://cdn.ndtv.com/c/jquery-3.6.0.min.js"></script><script>
var j = jQuery.noConflict();
j(document).ready( function() {
j(".write_box_widget textarea").on('mouseup',	function () {
	j(this).animate({ height: "10em" }, 300);
	j(".comments_txt").css({ height: "50vh" }, 100);
	j('.comment_login').show('fast', function () {
          var cmntBxPos = $(".comments_txt").offset().top + 10;
                    j(".comments_txt").css({ height: 'calc(100vh - ' + cmntBxPos + 'px)' }, 100);
               });
        setTimeout(adjHeight, 1000);
        
});		
j("#btnNew").on('click', function () {
        if(j('#comment_widget_form').length!=0){
            j("#btnNew").hide();
        }
	j('#commentbtn').hide();
	j('#afcommentbtn').show();
	j('#afcommentbtn .com_socialwrap a.com_fbook').animate({
		left: "0",
	  }, 400 );
	j('#afcommentbtn .com_socialwrap a.com_twitter').animate({
		left: "0",
	  }, 470 );
	j('#afcommentbtn .com_socialwrap a.com_gplus').animate({
		right: "0",
	  }, 470 );
	j('#afcommentbtn .com_socialwrap a.com_anony').animate({
		right: "0",
	  }, 400 );
    setTimeout(adjHeight, 1000);  
});		
j("#comment_widget").on('mouseup', function(e)
{
	var subject = j("#write_box_widget"); 	
	if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
	{			
		j('#comment').animate({ height: "30px" }, 0);
		j('.comment_login').hide();				
                var cmntBxPos = $(".comments_txt").position().top;
                
                                j(".comments_txt").css({ height: 'calc(100vh - ' + cmntBxPos + 'px)' }, 100);
                	}
        setTimeout(adjHeight, 1000);
});
	
/*Selectbox*/
j(".custom-select").each(function() {
  var classes = j(this).attr("class"),
	  id      = j(this).attr("id"),
	  name    = j(this).attr("name");
  var template =  '<div class="' + classes + '">';
	  template += '<span class="custom-select-trigger">' + j(this).attr("placeholder") + '</span>';
	  template += '<div class="custom-options">';
	  j(this).find("option").each(function() {
		template += '<span class="custom-option ' + j(this).attr("class") + '" data-value="' + j(this).attr("value") + '">' + j(this).html() + '</span>';
	  });
  template += '</div></div>';
  
  j(this).wrap('<div class="custom-select-wrapper"></div>');
  j(this).hide();
  j(this).after(template);
});

});
setTimeout(adjHeight, 1500);
</script></body></html>
