(self.webpackChunkTranslations=self.webpackChunkTranslations||[]).push([[5085],{4204:(x,b,p)=>{"use strict";p.d(b,{_:()=>u});var u=(()},4654:(x,b,p)=>{"use strict";p.d(b,{jz:()=>A,ZM:()=>y,vH:()=>v,tY:()=>_,eQ:()=>l});var u=p(7582),d=p(2313),g=p(9646),f=p(8306);ar a=p(2268),F=p(5e3),B=p(9808);const w={translation:{key:a.N.transferKeys.translate,dir:"i18n"},speller:{key:a.N.transferKeys.speller,dir:"i18n-speller"},contact:{key:a.N.transferKeys.contact,dir:"i18n-misc"},extension:{key:a.N.transferKeys.misc,dir:"i18n-misc"},favourites:{key:a.N.transferKeys.favourites,dir:"i18n-vocabulary"}};let h=class{constructor(C,D,R,k){this.http=C,this.appStateService=D,this.platformId=R,this.page=k,this.isBrowser=(0,B.NF)(this.platformId)}getTranslation(C){if(!C)return(0,g.of)({});const D=(0,d.Cb)(this.page.key+C),R=this.appStateService.getState();return R&&R[D]?new f.y(:this.isBrowser?new i(this.http,`${a.N.staticDirectory?"/"+a.N.staticDirectory:""}/assets/${this.page.dir}/`,".json").getTranslation(C):new f.y(k=>{k.next({}),k.complete()})}};function l(M,C,D){return new h(M,C,D,w.translation)}function A(M,C,D){return new h(M,C,D,w.contact)}function y(M,C,D){return new h(M,C,D,w.extension)}function _(M,C,D){return new h(M,C,D,w.speller)}function v(M,C,D){return new h(M,C,D,w.favourites)}h=(0,u.gn)([(0,u.fM)(2,(0,F.tBr)(F.Lbi))],h)},2233:(x,b,p)=>{"use strict";p.d(b,{WT:()=>g,m7:()=>f,xX:()=>i});var u=p(7579),d=p(5e3),g=(()=>((g||(g={})).SourceBox="source-box",g))(),f=(();let i=(()=>{class a{turn a.\u0275fac=function(B){return new(B||a)},a.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},5044:(x,b,p)=>{"use strict";p.d(b,{M:()=>h});var u=p(9808),d=p(2803),g=p(7429),f=p(1296),i=p(5e3),a=p(4218);const F=let B=(()=>{class l{nClicknResize(){window.innerHeight!==this.height&&this.close(),window.innerWidth<768&&"translate"===this.page&&this.close()}onScroll(){this.el.nativeElement.getBoundingClientRect().top<62&&this.close()}close(){this.closeCallback()}}return l.\u0275fac=l.\u0275cmp=i.Xpm({type:l,selectors:[["app-rephrase-button-bubble"]],hostBindings:inputs:{closeCallback:"closeCallback",text:"text",page:"page"},decls:9,vars:7,consts:[[1,"rephrase-button-bubble",3,"ngClass"],[1,"rephrase-button-bubble__content"],[1,"rephrase-button-bubble__icon"],["width","44","height","44","viewBox","0 0 44 44","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M12.8335 30.7955L12.8335 32.0841L9.16687 35.7507L9.16687 32.0841L9.16687 30.5744L9.16687 30.5409L9.1681 30.5073C9.63543 17.7445 13.7334 11.1185 18.132 7.75279C20.2996 6.09421 22.4493 5.30102 24.0778 4.92405C24.8916 4.73565 25.5781 4.65043 26.0773 4.61271C26.5821 4.57457 26.9101 4.58541 26.8917 4.58541C29.502 4.58541 31.563 5.0573 32.9682 6.10788C34.5083 7.25933 35.0052 8.90994 34.7823 10.4982C34.5751 11.9745 33.7701 13.3532 32.8151 14.4294C31.8484 15.5187 30.5838 16.4628 29.2233 16.9867C28.035 17.4443 26.4499 17.8374 25.1305 18.1243C25.4185 18.7341 25.6572 19.5177 25.5736 20.3872C25.46 21.5698 24.788 22.562 23.7 23.2602C22.6469 23.9361 21.307 24.0513 20.3984 24.1295L20.3322 24.1352L20.1205 24.1533C19.1291 24.238 18.2563 24.3126 17.3919 24.5774C16.5243 24.8432 15.6908 25.2992 14.9304 26.1907C14.1725 27.0793 13.4093 28.4932 12.8335 30.7955ZM21.5775 15.0769L21.579 15.0767L21.5867 15.0754L21.6202 15.0698L21.7551 15.0469C21.8737 15.0265 22.0473 14.9962 22.2636 14.9569C22.6967 14.8783 23.2976 14.7643 23.9681 14.6233C25.3427 14.3343 26.8897 13.9562 27.9057 13.565C28.6362 13.2837 29.4315 12.718 30.0726 11.9956C30.7253 11.2602 31.0759 10.5253 31.1512 9.98858C31.2108 9.56387 31.1172 9.30216 30.7726 9.04452C30.2931 8.68603 29.1754 8.25208 26.8917 8.25208L26.8655 8.2517C26.7978 8.2504 26.6392 8.24737 26.3536 8.26895C26.0152 8.29452 25.5148 8.35501 24.9047 8.49625C23.6852 8.77855 22.0387 9.38039 20.3602 10.6648C17.9588 12.5022 15.2914 15.8978 13.8518 22.2547C14.6569 21.6974 15.4931 21.3242 16.318 21.0715C17.5752 20.6865 18.8242 20.582 19.762 20.5036L20.0166 20.4821C21.1466 20.3845 21.5439 20.2871 21.7195 20.1744C21.8374 20.0988 21.8957 20.0442 21.9224 20.0126C21.9202 19.9924 21.9147 19.9593 21.901 19.9115C21.8736 19.8158 21.8212 19.6892 21.7343 19.535C21.5561 19.219 21.2987 18.9026 21.058 18.6464C20.9427 18.5237 20.8419 18.4262 20.7731 18.362C20.7389 18.3301 20.7132 18.3071 20.6984 18.294L20.6853 18.2825L20.6848 18.2821L17.6534 15.7186L21.5773 15.0769L21.5773 15.0769L21.5774 15.0769L21.5775 15.0769ZM21.942 19.9808C21.9436 19.9809 21.9412 19.9883 21.9304 20.0026C21.9351 19.9878 21.9405 19.9807 21.942 19.9808ZM15.0584 36.1706C17.5342 35.2704 18.9198 35.0418 19.7783 35.0647C20.5468 35.0852 20.9413 35.3004 21.5359 35.6249L21.5661 35.6414C22.2563 36.0178 23.1065 36.462 24.565 36.4971C25.9489 36.5305 27.8148 36.1967 30.6125 35.2642C31.2129 35.064 31.5374 34.4151 31.3372 33.8148C31.1371 33.2144 30.4882 32.89 29.8879 33.0901C27.1856 33.9908 25.614 34.23 24.6203 34.2061C23.7012 34.184 23.2337 33.9406 22.6635 33.6295L22.6009 33.5954C21.9626 33.2465 21.1627 32.8092 19.8393 32.7739C18.5494 32.7395 16.8412 33.0839 14.2753 34.017C13.6806 34.2332 13.3738 34.8907 13.59 35.4854C13.8063 36.0801 14.4637 36.3869 15.0584 36.1706Z","fill","white"],[1,"rephrase-button-bubble__text",3,"innerHTML"],[1,"rephrase-button-bubble__close",3,"name","click"],[1,"rephrase-button-bubble__arrow"]],template:function(y,_){1&y&&(i.TgZ(0,"div",0)(1,"div",1)(2,"span",2),i.O4$(),i.TgZ(3,"svg",3),i._UZ(4,"path",4),i.qZA()(),i.kcU(),i._UZ(5,"span",5),i.ALo(6,"translate"),i.qZA(),i.TgZ(7,"app-icon",6),i.NdJ("click",,i.qZA(),i._UZ(8,"span",7),i.qZA()),2&y&&(i.Q6J("ngClass",i.VKq(5,F,"translate"===_.page)),i.xp6(5),i.Q6J("innerHTML",i.lcZ(6,3,_.text),i.oJD),i.xp6(2),i.Q6J("name","icon-close"))},directives:[u.mk,f.o],pipes:[a.X$],styles:['[_nghost-%COMP%]   .rephrase-button-bubble[_ngcontent-%COMP%]{width:333px;box-sizing:border-box;display:flex;flex-direction:column;border-radius:10px;padding:20px;background:#8d5abf}[_nghost-%COMP%]   .rephrase-button-bubble__content[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:flex-start}[_nghost-%COMP%]   .rephrase-button-bubble__icon[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .rephrase-button-bubble__text[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:16px;line-height:24px;overflow:hidden}[_nghost-%COMP%]   .rephrase-button-bubble__arrow[_ngcontent-%COMP%]{align-self:center;position:relative}[_nghost-%COMP%]   .rephrase-button-bubble__arrow[_ngcontent-%COMP%]:after{content:"";position:absolute;width:16px;height:16px;top:10px;left:-4px;background:#8d5abf;border-radius:4px;transform:rotate(45deg)}[_nghost-%COMP%]   .rephrase-button-bubble__close[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px}[_nghost-%COMP%]   .rephrase-button-bubble__close[_ngcontent-%COMP%]    >span{width:16px;height:16px}[_nghost-%COMP%]   .rephrase-button-bubble__close[_ngcontent-%COMP%]    >span>svg>path{fill:#fff}[_nghost-%COMP%]   .rephrase-button-bubble__close[_ngcontent-%COMP%]    >span:before{color:#fff}[_nghost-%COMP%]   .rephrase-button-bubble__close[_ngcontent-%COMP%]:hover{cursor:pointer}@media only screen and (max-width: 1023px){[_nghost-%COMP%]   .rephrase-button-bubble__arrow[_ngcontent-%COMP%]{align-self:end;position:relative}[_nghost-%COMP%]   .rephrase-button-bubble__arrow[_ngcontent-%COMP%]:after{left:-40px}[_nghost-%COMP%]   .rephrase-button-bubble__page-translate[_ngcontent-%COMP%] > .rephrase-button-bubble__arrow[_ngcontent-%COMP%]{align-self:center;position:relative}[_nghost-%COMP%]   .rephrase-button-bubble__page-translate[_ngcontent-%COMP%] > .rephrase-button-bubble__arrow[_ngcontent-%COMP%]:after{content:"";position:absolute;width:16px;height:16px;top:10px;left:-4px;background:#8d5abf;border-radius:4px;transform:rotate(45deg)}}@media only screen and (max-width: 767px){[_nghost-%COMP%]   .rephrase-button-bubble__page-translate[_ngcontent-%COMP%]{display:none}}']}),l})(),h=(()=>{class l{sitionStrategy(y){var _;const v=this._overlayPositionBuilder.flexibleConnectedTo(y).withLockedPosition(!0).withViewportMargin(0).withPositions([{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom",offsetY:-15},{originX:"start",originY:"top",overlayX:"center",overlayY:"bottom",offsetY:-15},{originX:"end",originY:"top",overlayX:"center",overlayY:"bottom",offsetY:-15}]);null===(_=this.overlayRef)||void 0===_||_.updatePositionStrategy(v)}pen(y,_,v){if(!y||this._doc.querySelector(".docs-promo-popin"))return;this.clear();const M=new d.X_({scrollStrategy:this._overlay.scrollStrategies.reposition({scrollThrottle:0})});this.overlayRef=this._overlay.create(M),this.overlayRef.hostElement.style.zIndex="9999",this.positionStrategy(y);const C=this.overlayRef.attach(new g.C5(B));C.instance.closeCallback=this.clear.bind(this),C.instance.text=_,v&&(C.instance.page=v)}}return l.\u0275fac=function(y){return new(y||l)(i.LFG(u.K0),i.LFG(d.aV),i.LFG(d.wJ))},l.\u0275prov=i.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},9004:(x,b,p)=>{"use strict";p.d(b,{V:()=>d});var u=p(5e3);let d=(()=>{class g{constructor(){this.key={rephraseQuantity:"reverso__quantity-rephrase",editTargetBox:"reverso__quantity-edit-target",rephraseClick:"reverso__quantity-rephrase-click",rephraseReplace:"reverso__quantity-rephrase-replace",translate:"reverso__quantity-translate",messageAboutUkrainian:"reverso__is-show-message-about-Ukrainian",usedSpellerLang:"reverso__used_",recentSourceLanguages:"reverso__recent-source-langs",recentTargetLanguages:"reverso__recent-target-langs",pronounceQuantity:"reverso__quantity-pronounce",favouritesQuantity:"reverso__quantity-favourites",grammarCheckSuggestion:"reverso__quantity-click-suggestion"}}getRephraseQuantity(){var i,a;return Number(null!==(a=null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.rephraseQuantity))&&void 0!==a?a:0)}plusRephraseQuantity(){this.setRephraseQuantity(this.getRephraseQuantity()+1)}setRephraseQuantity(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.rephraseQuantity,String(i))}removeRephraseQuantity(){var i;null===(i=window.localStorage)||void 0===i||i.removeItem(this.key.rephraseQuantity)}getEditTargetBox(){var i,a;return Number(null!==(a=null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.editTargetBox))&&void 0!==a?a:0)}plusEditTargetBox(){this.setEditTargetBox(this.getEditTargetBox()+1)}setEditTargetBox(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.editTargetBox,String(i))}removeEditTargetBox(){var i;null===(i=window.localStorage)||void 0===i||i.removeItem(this.key.editTargetBox)}getRephraseClick(){var i,a;return Number(null!==(a=null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.rephraseClick))&&void 0!==a?a:0)}plusRephraseClick(){this.setRephraseClick(this.getRephraseClick()+1)}setRephraseClick(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.rephraseClick,String(i))}removeRephraseClick(){var i;null===(i=window.localStorage)||void 0===i||i.removeItem(this.key.rephraseClick)}getRephraseReplace(){var i,a;return Number(null!==(a=null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.rephraseReplace))&&void 0!==a?a:0)}plusRephraseReplace(){this.setRephraseReplace(this.getRephraseReplace()+1)}setRephraseReplace(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.rephraseReplace,String(i))}removeRephraseReplace(){var i;null===(i=window.localStorage)||void 0===i||i.removeItem(this.key.rephraseReplace)}getTranslate(){var i,a;return Number(null!==(a=null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.translate))&&void 0!==a?a:0)}plusTranslate(){this.setTranslate(this.getTranslate()+1)}setTranslate(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.translate,String(i))}removeTranslate(){var i;null===(i=window.localStorage)||void 0===i||i.removeItem(this.key.translate)}getMessageAboutUkrainian(){var i;return window.localStorage?null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.messageAboutUkrainian):(new Date).toISOString()}setMessageAboutUkrainian(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.messageAboutUkrainian,String(i))}removeMessageAboutUkrainian(){var i;null===(i=window.localStorage)||void 0===i||i.removeItem(this.key.messageAboutUkrainian)}setUsedSpellerLang(i,a){var F;null===(F=window.localStorage)||void 0===F||F.setItem(this.key.usedSpellerLang+i,String(a))}getUsedSpellerLang(i){var a,F;return null!==(F=Number(null===(a=window.localStorage)||void 0===a?void 0:a.getItem(this.key.usedSpellerLang+i)))&&void 0!==F?F:0}static setSpellerVisitCount(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(g.visitCount,String(i))}static getSpellerVisitCount(){var i,a;return Number(null!==(a=null===(i=null==window?void 0:window.localStorage)||void 0===i?void 0:i.getItem(g.visitCount))&&void 0!==a?a:0)}static setNewLangPromoShown(){var i;null===(i=window.localStorage)||void 0===i||i.setItem(g.newLangPromoShown,String(!0))}static getNewLangPromoShown(){var i;return Boolean(null===(i=null==window?void 0:window.localStorage)||void 0===i?void 0:i.getItem(g.newLangPromoShown))}setRecentSourceLangs(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.recentSourceLanguages,i)}getRecentSourceLangs(){var i;return null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.recentSourceLanguages)}setRecentTargetLangs(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.recentTargetLanguages,i)}getRecentTargetLangs(){var i;return null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.recentTargetLanguages)}getPronounceQuantity(){var i,a;return Number(null!==(a=null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.pronounceQuantity))&&void 0!==a?a:0)}plusPronounceQuantity(){this.setPronounceQuantity(this.getPronounceQuantity()+1)}setPronounceQuantity(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.pronounceQuantity,String(i))}getFavouritesQuantity(){var i,a;return Number(null!==(a=null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.favouritesQuantity))&&void 0!==a?a:0)}plusFavouritesQuantity(){this.setFavouritesQuantity(this.getFavouritesQuantity()+1)}setFavouritesQuantity(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.favouritesQuantity,String(i))}getGrammarRephraseSuggestionClickQuantity(){var i,a;return Number(null!==(a=null===(i=window.localStorage)||void 0===i?void 0:i.getItem(this.key.grammarCheckSuggestion))&&void 0!==a?a:0)}plusGrammarRephraseSuggestionClickQuantityetGrammarRephraseSuggestionClickQuantity(i){var a;null===(a=window.localStorage)||void 0===a||a.setItem(this.key.grammarCheckSuggestion,String(i))}}return g.visitCount="reverso__speller-visit-count",g.newLangPromoShown="reverso__speller-new-lang-promo-shown",g.\u0275fac=function(i){return new(i||g)},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},7156:(x,b,p)=>{"use strict";p.d(b,{d:()=>d});var u=p(5e3);let d=(()=>{class g{urn g.\u0275fac=function(i){return new(i||g)},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},9401:(x,b,p)=>{"use strict";p.d(b,{Fp:()=>g,Mz:()=>a,mY:()=>F});const u=/[\x41-\x5A\x61-\x7A\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,d=["/","*","=","\xb1","\xd7","\xf7","+",":","&","|","#","^","%",'"',"@","(",")","[","]","{","}",",",".",";","?","\xbf","!","\xa1","\xab","\xbb","<",">","\u20ac","$","\xa3","\xa5","\xae","\xa9","~","\xb5","\u0192","\u3001","\u3002","\u30fb","\u300c","\u300d","\u300e","\u300f","\u301d","\u301f"];function g(B){return B.split("").filter(h=>d.includes(h)).length>0||/\d/g.test(a(B))}function a(B){return function i(B){if(0===B.trim().length)return"";const w=B.length-B.split("").reverse().join("").search(u);return-1===w?"":B.slice(0,w).trim()}(function f(B){if(0===B.trim().length)return"";const w=B.search(u);return-1===w?"":B.slice(w).trim()}(B))}function F(B){return d.forEach(,B}},6618:(x,b,p)=>{"use strict";function u(d,g){const f=[.6,.7,.8,.9,1],i=new IntersectionObserver(function(a){const F=a[0];F.isIntersecting&&F.intersectionRatio>=f[0]&&(d(g),i.disconnect())},{threshold:f});return i}p.d(b,{k:()=>u})},9872:(x,b,p)=>{"use strict";p.d(b,{GY:()=>B});const u="[\\u3041-\\u3096\\u309D-\\u309F]|\\uD82C\\uDC01|\\uD83C\\uDE00",d="[\\u30A1-\\u30FA\\u30FD-\\u30FF\\u31F0-\\u31FF\\u32D0-\\u32FE\\u3300-\\u3357\\uFF66-\\uFF6F\\uFF71-\\uFF9D]|\\uD82C\\uDC00",f=/[\u0E00-\u0E7F]/,i=h=>new RegExp(u+"|"+d+"|[\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u3005\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uF900-\\uFA6D\\uFA70-\\uFAD9]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1]|\\uD87E[\\uDC00-\\uDE1D]").test(h),F=B=h=>{let l=new RegExp("/s| |&nbsp;|\r|\n");(i(h)||F(h))&&(l=new RegExp(""));const A=h.split(l).filter(;return i(h)||F(h)?Math.ceil(A.length/((h=>new RegExp(u+"|"+d).test(h))(h)||F(h)?3:2)):A.length}},4498:(x,b)=>{var p,u=["al","adj","assn","Ave","BSc","MSc","Cell","Ch","Co","cc","Corp","Dem","Dept","ed","eg","Eq","Eqs","est","est","etc","Ex","ext","Fig","fig","Figs","figs","i.e","ie","Inc","inc","Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Sept","Oct","Nov","Dec","jr","mi","Miss","Mrs","Mr","Ms","Mol","mt","mts","no","Nos","PhD","MD","BA","MA","MM","pl","pop","pp","Prof","Dr","pt","Ref","Refs","Rep","repr","rev","Sec","Secs","Sgt","Col","Gen","Rep","Sen","Gov","Lt","Maj","Capt","St","Sr","sr","Jr","jr","Rev","Sun","Mon","Tu","Tue","Tues","Wed","Th","Thu","Thur","Thurs","Fri","Sat","trans","Univ","Viz","Vol","vs","v"];b.setAbbreviations=var d=b.isCapitalized=b.isSentenceStarter=b.isCommonAbbreviation=b.isTimeAbbreviation=function(f,i){return("a.m."===f||"p.m."===f)&&"day"===i.replace(/\W+/g,"").slice(-3).toLowerCase()},b.isDottedAbbreviation=b.isCustomAbbreviation=b.isNameAbbreviation=var g=b.isNumber=b.isPhoneNr=function(f){return f.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/)},b.isURL=b.isConcatenated=function(f){var i=0;return!(!((i=f.indexOf("."))>-1||(i=f.indexOf("!"))>-1||(i=f.indexOf("?"))>-1)||!f.charAt(i+1).match(/[a-zA-Z].*/))&&[f.slice(0,i),f.slice(i+1)]},b.isBoundaryChar=,4816:x=>{x.exports=,7090:(x,b)=>{b.endsWithChar=b.endsWith=,6691:(x,b,p)=>{var u=p(4816),d=p(7090),g=p(4498),f=" @~@ ",i=f.trim(),a=new RegExp("\\S",""),F=new RegExp("\\n+|[-#=_+*]{4,}","g"),B=new RegExp("\\S+|\\n","g");b.Q=function(w,h){if(!w||"string"!=typeof w||!w.length)return[];if(!a.test(w))return[];var v,M,l={newline_boundaries:!1,html_boundaries:!1,html_boundaries_tags:["p","div","ul","ol"],sanitize:!1,allowed_tags:!1,preserve_whitespace:!1,abbreviations:null};if("boolean"==typeof h)l.newline_boundaries=!0;else for(var A in h)l[A]=h[A];if(g.setAbbreviations(l.abbreviations),l.newline_boundaries&&(w=w.replace(F,f)),l.html_boundaries){var y="(<br\\s*\\/?>|<\\/("+l.html_boundaries_tags.join("|")+")>)",_=new RegExp(y,"g");w=w.replace(_,"$1"+f)}(l.sanitize||l.allowed_tags)&&(l.allowed_tags||(l.allowed_tags=[""]),w=u(w,{allowedTags:l.allowed_tags}));var C=0,D=0,R=[],k=[],S=[];if(!(v=l.preserve_whitespace?(M=w.split(/(<br\s*\/?>|\S+|\n+)/)).filter(:w.trim().match(B))||!v.length)return[];for(var E=0,V=v.length;E<V;E++)if(C++,S.push(v[E]),~v[E].indexOf(",")&&(C=0),g.isBoundaryChar(v[E])||d.endsWithChar(v[E],"?!")||v[E]===i)(l.newline_boundaries||l.html_boundaries)&&v[E]===i&&S.pop(),k.push(S),C=0,S=[];else if((d.endsWithChar(v[E],'"')||d.endsWithChar(v[E],"\u201d"))&&(v[E]=v[E].slice(0,-1)),d.endsWithChar(v[E],".")){if(E+1<V){if(2===v[E].length&&isNaN(v[E].charAt(0))||g.isCommonAbbreviation(v[E]))continue;if(g.isSentenceStarter(v[E+1])){if(g.isTimeAbbreviation(v[E],v[E+1])||g.isNameAbbreviation(C,v.slice(E,6))||g.isNumber(v[E+1])&&g.isCustomAbbreviation(v[E]))continue}else if(d.endsWith(v[E],"..")||g.isDottedAbbreviation(v[E])||g.isNameAbbreviation(C,v.slice(E,5)))continue}k.push(S),S=[],C=0}else(D=v[E].indexOf("."))>-1&&(g.isNumber(v[E],D)||g.isDottedAbbreviation(v[E])||g.isURL(v[E])||g.isPhoneNr(v[E]))||(R=g.isConcatenated(v[E]))&&(S.pop(),S.push(R[0]),k.push(S),C=0,(S=[]).push(R[1]));return S.length&&k.push(S),(k=k.filter().slice(1).reduce([k[0]]).map(}},9042:(x,b,p)=>{"use strict";.d(b,{Ar:()=>f,GK:()=>u,iQ:()=>g,kt:()=>w,tj:()=>a});const d="inline",g=["row","column","row-reverse","column-reverse"];0:(x,b,p)=>{"use strict";p.d(b,{Bs:()=>R,FL:()=>_e,IR:()=>y,Ot:()=>be,QI:()=>S,RK:()=>E,WU:()=>C,g5:()=>M,iR:()=>me,wY:()=>D,yB:()=>Z});var u=p(5e3),d=p(9808),g=p(1135),f=p(8306),i=p(6451),a=p(7579),F=p(9042),B=p(9300),w=p(8505);const l={provide:u.tb,useFactory:function h(s,o){return()=>{if((0,d.NF)(o)){const e=Array.from(s.querySelectorAll(`[class*=${A}]`)),t=/\bflex-layout-.+?\b/g;e.forEach(}}},deps:[d.K0,u.Lbi],multi:!0},A="flex-layout-";let y=(();et v=(()=>{eturn s.\u0275fac=s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const M={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[],multiplier:void 0,defaultUnit:"px",detectLayoutDisplay:!1},C=new u.OlP("Flex Layout token, config options for the library",{providedIn:"root",factory:),D=new u.OlP("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),R=new u.OlP("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:);t E=(()=>{class s{pplyStyleToElement(e,t,r=null){let n={};"string"==typeof t&&(n[t]=r,t=n),n=this.layoutConfig.disableVendorPrefixes?t:(0,F.GK)(t),this._applyMultiValueStyleToElement(n,e)}applyStyleToElements(e,t=[]){const r=this.layoutConfig.disableVendorPrefixes?e:(0,F.GK)(e);t.forEach(}getFlowDirection(e){const t="flex-direction";let r=this.lookupStyle(e,t);return[r||"row",this.lookupInlineStyle(e,t)||(0,d.PM)(this._platformId)&&this._serverModuleLoaded?r:""]}okupInlineStyle(e,t){return(0,d.NF)(this._platformId)?e.style.getPropertyValue(t):e,t)}lookupStyle(e,t,r=!1){let n="";return e&&((n=this.lookupInlineStyle(e,t))||((0,d.NF)(this._platformId)?r||(n=getComputedStyle(e).getPropertyValue(t)):this._serverModuleLoaded&&(n=this._serverStylesheet.getStyleForElement(e,t)))),n?n.trim():""}_applyMultiValueStyleToElement(e,t){Object.keys(e).sort().forEach(r=>{const n=e[r],c=Array.isArray(n)?n:[n];c.sort();for(let m of c)m=m?m+"":"",(0,d.NF)(this._platformId)||!this._serverModuleLoaded?(0,d.NF)(this._platformId)?t.style.setProperty(r,m):W(t,r,m):this._serverStylesheet.addStyleToElement(t,r,m)})}}return s.\u0275fac=s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();j=(()=>{class s{erve(e,t=!1){if(e&&e.length){const r=this._observable$.pipe((0,B.h)(),n=new f.y(;return(0,i.T)(n,r)}return this._observable$}registerQuery(e){const t=Array.isArray(e)?e:[e],r=[];return function re(s,o){const e=s.filter(;if(e.length>0){const t=e.join(", ");try{const r=o.createElement("style");r.setAttribute("type","text/css"),r.styleSheet||r.appendChild(o.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${t} {.fx-query-test{ }}\n`)),o.head.appendChild(r),e.forEach(}catch(r){console.error(r)}}}(t,this._document),t.forEach(,r}uildMQL(e){return function se(s,o){return o&&window.matchMedia("all").addListener?window.matchMedia(s):{matches:"all"===s||""===s,media:s,addListener:()=>{},removeListener:onchange:null,addEventListener(){},removeEventListenerdispatchEvent:}(e,(0,d.NF)(this._platformId))}}return s.\u0275fac=s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const $={},ne=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.98px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.98px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.98px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.98px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.98px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.98px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.98px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.98px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.98px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],K="(orientation: portrait) and (max-width: 599.98px)",H="(orientation: landscape) and (max-width: 959.98px)",Y="(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)",G="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)",z="(orientation: portrait) and (min-width: 840px)",q="(orientation: landscape) and (min-width: 1280px)",O={HANDSET:`${K}, ${H}`,TABLET:`${Y} , ${G}`,WEB:`${z}, ${q} `,HANDSET_PORTRAIT:`${K}`,TABLET_PORTRAIT:`${Y} `,WEB_PORTRAIT:`${z}`,HANDSET_LANDSCAPE:`${H}`,TABLET_LANDSCAPE:`${G}`,WEB_LANDSCAPE:`${q}`},ae=[{alias:"handset",priority:2e3,mediaQuery:O.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:O.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:O.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:O.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:O.TABLET_LANDSCAPE},{alias:"tablet.portrait",priority:2100,mediaQuery:O.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:O.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:O.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:O.WEB_PORTRAIT,overlapping:!0}],oe=/(\.|-|_)/g;onst de=new u.OlP("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:()=>{const s=(0,u.f3M)(R),o=(0,u.f3M)(C),e=[].concat.apply([],(s||[]).map();return function he(s,o=[]){const e={};return s.forEach(,o.forEach(t=>{e[t.alias]?(0,F.kt)(e[t.alias],t):e[t.alias]=t}),function ce(s){return s.forEach(,s}(Object.keys(e).map(t=>e[t]))}((o.disableDefaultBps?[]:ne).concat(o.addOrientationBps?ae:[]),e)}});let U=(()=>{eturn s.\u0275fac=s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const Q="print",pe={alias:Q,mediaQuery:Q,priority:1e3};let fe=(()=>{eturn s.\u0275fac=s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();et Z=(()=>{class s{constructor(e,t,r){this.matchMedia=e,this.breakpoints=t,this.hook=r,this._useFallbacks=!0,this._activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new a.x,this.observeActivations()}e(e,t){return this.subject.asObservable().pipe((0,B.h)()}xtraTriggers(e,t,r){if(r&&r.length){let n=this.watcherMap.get(e);if(n||(n=new Map,this.watcherMap.set(e,n)),!n.get(t)){const m=(0,i.T)(...r).subscribe(;n.set(t,m)}}}findByQuery(e){return this.breakpoints.findByQuery(e)}getActivatedValues(e,t){for(let n=0;n<this.activatedBreakpoints.length;n++){const m=e.get(this.activatedBreakpoints[n].alias);if(m&&(void 0===t||m.has(t)&&null!=m.get(t)))return m}if(!this._useFallbacks)return;const r=e.get("");return void 0===t||r&&r.has(t)?r:void 0}observeActivations(){const e=this.breakpoints.items.map(;this.hook.registerBeforeAfterPrintHooks(this),this.matchMedia.observe(this.hook.withPrintQuery(e)).pipe((0,w.b)(this.hook.interceptEvents(this)),(0,B.h)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}}return s.\u0275fac=s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();et me=(()=>{class s{Direction(e,t=!1){if(e){const[r,n]=this.styler.getFlowDirection(e);if(!n&&t){const c=(0,F.Ar)(r);this.styler.applyStyleToElements(c,[e])}return r.trim()}return"row"}urn s.\u0275fac=s.\u0275dir=u.lG2({type:s,features:[u.TTD]}),s})(););