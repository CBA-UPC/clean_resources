.FZkjV{width:100%;margin-bottom:38px}.FZkjV:last-child{margin-bottom:0}.FZkjV.I1qRl{width:-webkit-max-content;width:-moz-max-content;width:max-content}.hF8Wr{font-family:var(--font-family);color:var(--color-title);padding:0 8px;font-size:1.3125rem;font-weight:700;line-height:1.2}.shOJA{justify-content:space-between;display:flex}.shOJA span{align-items:center;display:flex}.RO9wQ{width:300px}.Yc2Sp{top:var(--sticky-top,69px);color:var(--color-text);position:-webkit-sticky;position:sticky}.Yc2Sp.KLXOg .uOpMe,.Yc2Sp.KLXOg .sPIOx,.Yc2Sp.KLXOg .Ji4Ux{margin-bottom:8px}.Yc2Sp.KLXOg .ilSRe{margin:8px}.pNJPX{height:0;overflow:hidden}.QUxI1{flex-direction:column;align-items:flex-start;display:flex}.sPIOx,.Ji4Ux{margin-bottom:10px;text-decoration:none}.ilSRe{margin:10px}.uOpMe{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:100%;margin-bottom:10px;overflow:hidden}.u4K7k{background:rgba(var(--black),.07);color:rgba(var(--black),.8);border-radius:8px;padding:1em;line-height:1.3}.WIwsU{font-family:var(--font-family);font-size:1.125rem;font-weight:700;line-height:1.33333}.bneI9{font-family:var(--font-family);color:rgba(var(--black),.4);font-size:.78125rem;font-weight:400;line-height:1.52}.sCA8b{--icon-color-primary:#fff;vertical-align:middle;padding-right:18px}function(n){return t.cls=n,new p(t)})},u);return e.when.apply(e,t).then(function(){return 1===arguments.length?[arguments[0]]:Array.apply(null,arguments)})}).then(function(n){return r(u,n),t})}function r(n,t){n.accounts=t,n.idx=t.reduce(function(n,t){return n[t.uId]=t,n},{})}function i(t){var c={bo:v("bo")};t.goToSelectAcc=function(){window.location.href=n.path("/login/mus",c)},t.enterAsKnownAcc=function(t){window.location.href=n.path("/login/mus/"+t.uId,c)},t.enterAsUnknownAcc=function(){window.location.href=n.path("/login/mus/unknown",c)},t.clickEnterAsKnownAcc=function(n){var e=t.idx[this.dataset.id];e?t.enterAsKnownAcc(e):t.enterAsUnknownAcc()},t.clickEnterAsUnknownAcc=function(n){t.enterAsUnknownAcc()},t.rmAcc=function(c){function s(){var n=t.accounts.filter(function(n){return n.uId!==c});if(n.length>0){var e=t.container.querySelector(".mus-user[data-id='"+c+"']");e&&e.remove(),r(t,n)}else t.enterAsUnknownAcc()}e.ajax({type:"DELETE",url:n.path("/login/mus/"+c)}).then(function(){s()},function(n){404==n.status?(s(),n.processed=!0):console.log("Failed to delete account from UA: "+n.textStatus+" - "+n.responseText)})},t.clickRmAcc=function(n){var e=this.dataset.id;t.rmAcc(e)},t._delUserCls=function(t,c){e.ajax({type:"DELETE",url:n.path("/login/mus/"+t+"/cls")}).then(function(){c()},function(n){404==n.status?(c(),n.processed=!0):console.log("Failed to logout account UA: "+n.textStatus+" - "+n.responseText)})},t.logoutAcc=function(n){function e(){var e=t.accounts.map(function(t){if(t.uId==n){var e=new p(t);return e.cls=!1,e}return t});r(t,e),t.rerender()}t._delUserCls(n,e)},t.clickLogoutAcc=function(n){var e=this.dataset.id;t.logoutAcc(e)}}function a(n,t){for(var e=0;e<n.length;e++)t(n[e])}function l(n,e){var c=w(t.render(k,e));return a(c.querySelectorAll(".mus-button"),function(t){t.addEventListener("click",n.clickEnterAsKnownAcc)}),a(c.querySelectorAll(".mus-change-button"),function(t){t.addEventListener("click",n.clickEnterAsUnknownAcc)}),a(c.querySelectorAll(".mus-delete"),function(t){t.addEventListener("click",n.clickRmAcc)}),a(c.querySelectorAll(".mus-exit"),function(t){t.addEventListener("click",n.clickLogoutAcc)}),c}function d(n,e){var c=w(t.render(b,e));return a(c.querySelectorAll(".mus-back"),function(t){n.plural?t.addEventListener("click",n.goToSelectAcc):t.addEventListener("click",n.clickEnterAsUnknownAcc)}),c}function f(n){return{t:function(){return function(t,e){return n.translate(e(t))}},path:A,class:n.class,"show-icon":n.showIcon}}function h(n,t){var e=f(n);e.accounts=n.accounts;var c=l(n,e);t.insertBefore(c,t.firstChild),setTimeout(function(){t.querySelector(".mus-container").style.display="block"},200)}function m(n,t){var e=f(n);e.account=n.idx[n.currentUId],e["show-change"]=e.account||n.plural&&n.accounts&&n.accounts.length>0;var c=d(n,e);t.insertBefore(c,t.firstChild)}function p(n){this.uId="",this.dpNm="",this.dpId="",this.cls=!1,this.selected=!1,g.call(this,n),this.uAb=this.dpNm?this.dpNm.charAt(0):""}function v(n){n=n.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)"),e=t.exec(window.location.href);if(e)return e[2]?e[2]:""}function A(){return function(t,e){return n.path(e(t))}}function g(n){for(var t in n)this.hasOwnProperty(t)&&(this[t]=n[t])}function w(n){var t=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=n;e.firstChild;)t.appendChild(e.firstChild);return t}var k='<section class="mus-container {{class}}" style="display:none">   <div class="mus-section">       <div class="mus-accounts">       {{#accounts}}          <div class="mus-user" data-id="{{uId}}">            <button class="mus-button" data-id="{{uId}}">              <div class="mus-info">                {{#show-icon}}                  <div class="mus-user-letter">{{uAb}}</div>                {{/show-icon}}                <div class="mus-user-info-block">                  <p class="mus-user-name">{{dpNm}}</p>                  {{#dpId}}<p>{{dpId}}</p>{{/dpId}}                </div>              </div>            </button>            <div class="mus-status">               {{#cls}}<button class="mus-exit" data-id="{{uId}}">{{#t}}login.mus.logout{{/t}}</button>{{/cls}}               {{^cls}}<button class="mus-delete" data-id="{{uId}}">{{#t}}login.mus.rm{{/t}}</button>{{/cls}}            </div>          </div>       {{/accounts}}       </div>         <div class="mus-change-account">           <button class="mus-change-button">             <span>{{#t}}login.mus.add{{/t}}</span>           </button>         </div>   </div></section>',b='<div class="profile-name {{#account}}mus-has-acc{{/account}}{{^account}}mus-no-acc{{/account}} {{class}}">   {{#account}}     <div class="mus-info mus-info-profile-page">       {{#show-icon}}         <div class="mus-user-letter">{{uAb}}</div>       {{/show-icon}}       <div class="mus-user-info-block">        <p class="mus-user-name">{{{dpNm}}}</p>        {{#dpId}}<p>{{{dpId}}}</p>{{/dpId}}     </div>     </div>   {{/account}}   {{#show-change}}     <div class="text-center">       <button type="button" tabindex="1" class="btn btn-link mus-back">         {{#account}}           {{#t}}login.mus.inline.choose.other{{/t}}         {{/account}}         {{^account}}           {{#t}}login.mus.inline.choose.user{{/t}}         {{/account}}       </button>     </div>   {{/show-change}}</div>';return function(n){return new u(n)}});