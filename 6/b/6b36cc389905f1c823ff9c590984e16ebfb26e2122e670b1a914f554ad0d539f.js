(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{Dsxl:function(e,t,n){"use strict";var r,o,a;o=[t,n("FdF9"),n("17x9")],void 0===(a="function"==typeof(r=function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n),a=c(r);tion(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return p(m(n=f(this,(e=d(t)).call.apply(e,[this].concat(o)))),"onResize",(function(){n.rafId&&window.cancelAnimationFrame(n.rafId),n.rafId=window.requestAnimationFrame(n.update.bind(m(n)))})),p(m(n),"onToggled",(function(e){"function"==typeof n.props.onToggled&&setTimeout((,0)})),p(m(n),"onTruncated",(function(){"function"==typeof n.props.onTruncated&&setTimeout((function(){return n.props.onTruncated()}),0)})),p(m(n),"onCalculated",(function(){"function"==typeof n.props.onCalculated&&setTimeout((,0)})),p(m(n),"update",(),n}var r,a,c;return t,e),r=t,(a=[{key:"componentDidMount",value:,{key:"componentWillUnmount",value:,{key:"measureWidth",value:function(e){return Math.ceil(this.canvas.measureText(e).width)}},{key:"getRenderText",value:function(){var e=this.props,t=(e.containerClassName,e.element,e.line),r=(e.onCalculated,e.onTruncated,e.onToggled,e.text),a=e.textElement,c=e.textTruncateChild,i=e.truncateText,s=e.maxCalculateTimes,u=l(e,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),f=this.scope.getBoundingClientRect().width;if(0===f)return null;if(f>=this.measureWidth(r))return this.onToggled(!1),(0,n.createElement)(a,u,r);var d="";if(c&&"string"==typeof c.type){var m=c.type;(m.indexOf("span")>=0||m.indexOf("a")>=0)&&(d=c.props.children)}for(var h=1,p=r.length,b="",y=0,v=0,g=t,O=0,j=!1,w=!1,x=0,T=-1,k="",C=0;g-- >0;){for(k=g?"":i+(d?" "+d:"");h<=p;){if(b=r.substr(v,h),!((O=this.measureWidth(b+k))<f)){do{if(C++>=s)break;b=r.substr(v,h),g||h--," "===b[b.length-1]&&(b=r.substr(v,h-1)),j&&(T=b.lastIndexOf(" "))>-1?(h=T,g&&h++,b=r.substr(v,h)):(h--,b=r.substr(v,h)),O=this.measureWidth(b+k)}while(O>=f&&b.length>0);v+=h;break}-1===(y=r.indexOf(" ",h+1))?(h+=1,j=!1):(j=!0,h=y)}if(h>=p){v=p;break}j&&!w&&-1===r.substr(x,h).indexOf(" ")&&(w=-1===r.substr(x,h).indexOf(" "),g--),x=h+1}return v===p?(this.onToggled(!1),(0,n.createElement)(a,u,r)):(this.onTruncated(),this.onToggled(!0),o.default.createElement("span",u,(0,n.createElement)(a,u,r.substr(0,v)+i+" "),c))}},{key:"render",value:function(){var e=this,t=this.props,r=t.element,o=t.text,a=t.style,c=void 0===a?{}:a,i=t.containerClassName,s=t.line,u=(t.onCalculated,t.onTruncated,t.onToggled,t.textElement),f=(t.textTruncateChild,t.truncateText,t.maxCalculateTimes,l(t,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"])),d=c.fontWeight,m=c.fontStyle,h=c.fontSize,p=c.fontFamily,b=this.scope&&s?this.getRenderText():(0,n.createElement)(u,f,o),y={ref:className:i,style:{overflow:"hidden",fontWeight:d,fontStyle:m,fontSize:h,fontFamily:p}};return this.scope&&this.onCalculated(),(0,n.createElement)(r,y,b)}}])&&u(r.prototype,a),c&&u(r,c),t}(n.Component);p(b,"propTypes",{containerClassName:a.default.string,element:a.default.string,line:a.default.oneOfType([a.default.number,a.default.bool]),onCalculated:a.default.func,onTruncated:a.default.func,onToggled:a.default.func,text:a.default.string,textElement:a.default.node,textTruncateChild:a.default.node,truncateText:a.default.string,maxCalculateTimes:a.default.number}),p(b,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"…",maxCalculateTimes:10}),t.default=b,e.exports=t.default})?r.apply(t,o):r)||(e.exports=a)},UThr:function(e,t,n){"use strict";n.r(t);n("2B1R"),n("J30X"),n("pNMO"),n("4Brf"),n("07d7"),n("0oug"),n("4mDm"),n("PKPk"),n("3bBZ"),n("+2oP"),n("sMBO"),n("pjDv"),n("rB9j");var r=n("2mXy"),o=n("vLDF"),a=n("MOxe"),c=n("yCFz"),i=n("WXW8"),l=n("FdF9"),s=n("61kH");function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}(e,t)}(e,t)}(}t.default=function(){var e=i.a.getGroupAlgorithm("recipeCenterBottomBox"),t=u(Object(a.useState)([]),2),n=t[0],f=t[1],d=Object(c.a)().callMeasurementEvent,m=i.a.getRecipeRecommendationAlgorithmNumber(e),h=i.a.getAlgorithmBlockTitle(e),p=s.j?2:3;Object(l.useEffect)((function(){d({category:"rekomendacje",action:"view",label:"centr_dolny",ec0:"rekomendacje",ec1:"centr_dolny",ec2:"view",ec3:null,ec4:m}),f(i.a.getRecipesForAlgorithm(e,p))}),[]);var b=function(e){d({category:"rekomendacje",action:"klik",label:"centr_dolny",ec0:"rekomendacje",ec1:"centr_dolny",ec2:"klik",ec3:e,ec4:m})};return Object(r.h)(r.Fragment,null,Object(r.h)("div",{class:"common--title--container -recommended"},Object(r.h)("h2",{class:"common--title -small commonTitle "},null==h?void 0:h.text," ",Object(r.h)("span",{class:"highlight--dtp text-primary"},null==h?void 0:h.highlighted)," ")),Object(r.h)("div",{class:"recommended--recipes"},Object(r.h)("div",{class:"recommended--component"},Object(r.h)("div",{class:"content mt-0 xl:mt-8"},Object(r.h)("div",{class:"row"},null==n?void 0:n.map((function(e,t){return Object(r.h)("div",{key:t,class:"w-1/2 lg:w-1/3 recommended--col"},Object(r.h)(o.a,{recipe:e,noMobileAvatar:!0,onClickMeasure:b}))})))))))}},vLDF:function(e,t,n){"use strict";n("sMBO"),n("pNMO"),n("4Brf"),n("2B1R"),n("mRH6"),n("J30X"),n("07d7"),n("0oug"),n("4mDm"),n("PKPk"),n("3bBZ"),n("+2oP"),n("pjDv"),n("rB9j");var r=n("2mXy"),o=n("Dsxl"),a=n.n(o),c=n("19K9"),i=n("MOxe"}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t,n=e.recipe,o=e.noMobileAvatar,s=e.onClickMeasure,u=l(Object(i.useState)(!1),2),f=u[0],d=u[1];Object(i.useEffect)}),[n]);return Object(r.h)("div",{class:"recipe--block--container"},Object(r.h)("div",{class:"recipe--block",onClick:function(){return e=n.url,void(s&&s(e));var e}},Object(r.h)("a",{href:n.url,class:"img"},n.photoPath?Object(r.h)("picture",null,Object(r.h)("img",{src:n.photoPath,"data-src":n.photoPath,alt:n.name,class:"lazyLoad img--llo",loading:"lazy"})):Object(r.h)("div",{class:"categories--block"},Object(r.h)("span",{style:{backgroundImage:'url("'.concat(n.recipeCategory.photoPath,'")')},class:"icon"}))),n.contestIcon&&Object(r.h)("div",{className:"recipe--contest--info"},Object(r.h)("div",{className:"background"},Object(r.h)("img",{src:n.contestIcon,alt:"Konkurs"})),Object(r.h)("span",{className:"text--info"},"Przepis bierze udzial w konkursie")),Object(r.h)("div",{class:"recipe--block--content ".concat(o?"-mobilerow":"")},Object(r.h)(c.a,{name:n.user.name,url:n.user.url,photoPath:n.user.photoPath}),Object(r.h)("div",{class:"category"},n.recipeCategory.name),Object(r.h)("h3",{class:"title"},Object(r.h)("a",{class:"link",href:n.url},n.name))),Object(r.h)("div",{class:"recipe--hover--content ".concat(f?"-show":"")},Object(r.h)("div",{class:"category"},n.recipeCategory.name),Object(r.h)("div",{class:"title"},n.name),Object(r.h)("p",{class:"text"},Object(r.h)(a.a,{line:6,element:"span",truncateText:"…",text:n.description})),Object(r.h)("div",{class:"categories"},n.tags&&n.tags.map((function(e){return Object(r.h)("a",{href:e.link,class:"link"},e.name)}))),Object(r.h)("p",{class:"seen"},"Odsłon: ",n.visitCount))),Object(r.h)("div",{className:"show--hover"},Object(r.h)("button",{className:"link",onC!f)}},f?Object(r.h)("span",{className:"icon-arrow-down icon"}):Object(r.h)("span",{className:"icon-arrow-up icon"}))),Object(r.h)("div",{class:"line--mobile"}),Object(r.h)("div",{class:"recipe--block--numbers"},Object(r.h)("div",{class:"row items-center justify-between flex-nowrap"},Object(r.h)("div",{class:"w-auto"},Object(r.h)("div",{class:"block--number -recipe"},Object(r.h)("div",{class:"icon--time"},Object(r.h)("span",{class:"icon-time"})),Object(r.h)("span",{class:"hidden sm:block"},null===(t=n.recipeTime)||void 0===t?void 0:t.label),Object(r.h)("span",{class:"sm:hidden"},n.recipeTimeMobile))),Object(r.h)("div",{class:"w-auto"},Object(r.h)("div",{class:"block--number justify-end"},n.likesCount,Object(r.h)("div",{class:"icon--thumb"},Object(r.h)("span",{class:"icon-thumb"})))))))}}}]);