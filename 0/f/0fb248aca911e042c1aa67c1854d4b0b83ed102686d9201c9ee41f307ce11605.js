(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1040:function(t,e,r){"use strict";var o=r(338),n=r.n(o);e.default=n.a},1123:function(t,e,r){"use strict";r.r(e);var o=r(2),n=r(264),l=r(252),c={components:{PostItems:n.a},computed:{articles(){return this.$store.state.articlesN2cr.collections.listy_prezesa}},asyncData:t=>Object(o.a)((function*(){var{app:e,store:r}=t,o={pl:"Listy Prezesa Zarządu do Akcjonariuszy",en:"Letter of the CEO",alias:"listy_prezesa"};yield r.dispatch("articlesN2cr/getCollection",{tag:o[e.i18n.locale],alias:o.alias}),yield r.dispatch("configuratorN2cr/getConfig",{configName:"6741095801902144",hasTitle:!0}),yield r.dispatch("dynamicConfig/updateConfig",{page:{imgUrl:"https://holding.wpcdn.pl/backgrounds/7.jpg"}})}))(),head(){return Object(l.a)(this.$route.path,this.$t("seo.title"),this.$t("seo.desc"))},nuxtI18n:{paths:{en:"/investor/letters-ceo"}}},d=r(3),m=r(1040),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("post-items",{attrs:{posts:this.articles,urlName:"inwestor-listy-prezesa-zarzadu-id"}})],1)}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports},252:function(t,e,r){"use strict";e.a=(path,title,t)=>({title:title,link:[{rel:"canonical",href:"https://holding.wp.pl"+path}],meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t}]})},257:function(t,e,r){},260:function(t,e,r){"use strict";r(257)},264:function(t,e,r){"use strict";var o=r(21),n=r(66),l=r(41),c={components:{Linker:o.a},props:["posts","urlName"],data:()=>({getDateFromTimestamp:n.a,getImagePath:l.a}),updated(){INSPIRO.elements.gridLayoutRefresh()},methods:{cropText(text,t){var e=text.indexOf(" ",t);return-1===e?text:"".concat(text.substring(0,e+1),"...")}},watch:{posts(){INSPIRO.elements.gridLayoutRefresh()}}},d=(r(260),r(3)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"grid-layout post-3-columns m-b-30",attrs:{id:"blog","data-item":"post-item","data-layout":"fitRows"}},t._l(t.posts,(function(e,o){return r("div",{key:o,staticClass:"post-item border",class:e.class},[r("div",{staticClass:"post-item-wrap"},[e.article.image&&e.article.image.url?r("div",{staticClass:"post-image",style:{"background-image":"url("+t.getImagePath(e.article.image.url)+")"}}):t._e(),t._v(" "),r("div",{staticClass:"post-item-description"},[r("span",{staticClass:"post-meta-date"},[r("i",{staticClass:"fa fa-calendar-o"}),t._v(t._s(t.getDateFromTimestamp(e.article.publishedFrom)))]),t._v(" "),r("h2",[r("linker",{attrs:{link:{url:{name:t.urlName,params:{id:e.article.slug+"-"+e.article.id}}}}},[t._v(t._s(e.article.name))])],1),t._v(" "),r("div",{staticClass:"item",domProps:{innerHTML:t._s(t.cropText(e.article.lead,170))}}),t._v(" "),r("linker",{staticClass:"item-link",attrs:{link:{url:{name:t.urlName,params:{id:e.article.slug+"-"+e.article.id}}}}},[t._v(t._s(t.$t("index.seeMore"))+" "),r("i",{staticClass:"icon-chevron-right"})])],1)])])})),0),t._v(" "),0===t.posts.length?r("div",{staticClass:"empty-state"},[t._v("\n    Brak raportów w wybranym okresie\n  ")]):t._e()])}),[],!1,null,"0973c369",null);e.a=component.exports},338:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"pl":{"seo":{"title":"Listy Prezesa Zarządu do Akcjonariuszy","desc":"Listy Prezesa Zarządu do Akcjonariuszy"}},"en":{"seo":{"title":"Letters of the CEO","desc":"Letters of the CEO"}}}'),delete t.options._Ctor}}}]);ReviewError?m("p",o._b({class:[o.$style.comment__validation,"text-smallest"]},"p",o.dataTest("reviewError"),!1),[o._v("\n    Wpisz komentarz (od 5 do 5000 znaków)\n  ")]):o._e(),o._v(" "),o.isFormVisible?m("input",o._b({directives:[{name:"model",rawName:"v-model",value:o.nickContent,expression:"nickContent"}],class:[o.$style.comment__nick,"text-normal",(r={},r[o.$style.invalid]=o.isNickError,r)],attrs:{type:"text",placeholder:"Twoje imię lub nick"},domProps:{value:o.nickContent},on:{input:function(e){e.target.composing||(o.nickContent=e.target.value)}}},"input",o.dataTest("commentInput"),!1)):o._e(),o._v(" "),o.isNickError?m("p",o._b({class:[o.$style.comment__validation,"text-smallest"]},"p",o.dataTest("nickError"),!1),[o._v("\n    Wpisz imię lub nick (od 2 do 40 znaków)\n  ")]):o._e(),o._v(" "),o.isFormVisible?m("div",{class:[o.$style.comment__captcha,"text-gray text-smallest"]},[m("p",[o._v("\n      Wysyłając opinię akceptujesz\n      "),m("a",{attrs:{href:o.$config.TOTAL_URL+"/regulamin",target:"_blank"}},[o._v("regulamin")]),o._v(" zamieszczania opinii w serwisie.\n      Totalmoney.pl sp. z o.o. z siedzibą we Wrocławiu jest administratorem\n      Twoich danych osobowych dla celów związanych z korzystaniem z serwisu.\n      Administrator przetwarza Twoje dane osobowe, które podajesz lub pozostawiasz\n      w ramach zamieszczania opinii w serwisie. Przetwarzamy te dane w celu wykonania\n      umowy z Tobą, tą umową jest regulamin zamieszczania opinii w serwisie. Podstawą\n      prawną przetwarzania jest art. 6 ust. 1 lit b) RODO - niezbędność do wykonania\n      umowy, której stroną jest Ty. Masz prawo m.in. do żądania dostępu do danych,\n      sprostowania, usunięcia lub ograniczenia ich przetwarzania. Prawa te oraz sposób\n      ich realizacji opisaliśmy w\n      "),m("a",{attrs:{href:o.$config.TOTAL_URL+"/polityka-prywatnosci",target:"_blank"}},[o._v("polityce prywatności")]),o._v(". Tam też znajdziesz informacje\n      jak zakomunikować nam Twoją wolę skorzystania z tych praw.\n    ")]),o._v(" "),o._m(0)]):o._e(),o._v(" "),o.isFormVisible?m("Button",o._b({class:o.$style.comment__submit,attrs:{appearance:"secondary",type:"submit"}},"Button",o.dataTest("commentSubmit"),!1),[o._v("\n    Wyślij\n  ")]):o._e()],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n      Ta witryna jest chroniona przez reCAPTCHA, obowiązuje\n      "),n("a",{attrs:{href:"https://policies.google.com/privacy",target:"_blank"}},[e._v("\n        Polityka prywatności\n      ")]),e._v("\n      Google i\n      "),n("a",{attrs:{href:"https://policies.google.com/terms",target:"_blank"}},[e._v("\n        Warunki korzystania\n      ")]),e._v("\n      z usługi. Wysyłając komentarz akceptujesz regulamin zamieszczenia komentarza w serwisie.\n    ")])}],!1,(function(e){this.$style=_.default.locals||_.default}),null,null);t.default=component.exports}}]);())});return[()=>((e,t,n)=>Object.keys(e).reduce((r,a)=>{const o=Number(a);if(t.hasOwnProperty(o)){const a=e[o];r[n(o,a[0],a[1])]=t[o]}return r},{}))(n,t.nativeData,i),()=>(e=>Object.keys(e).reduce((t,n)=>{const r=Number(n);return t[e[r][0]]=r,t},{}))(n)]};t.default=({nativeContentPosition:e,nativeSlotPosition:t,children:n})=>{const[r,o]=f(e);return a.a.createElement(a.a.Fragment,null,n({nativeSlotPosition:t||o(),nativeContent:r()}))}},1389:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(0),a=n.n(r),o=Object.defineProperty,l=(e,t,n)=>(((e,t,n)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);const i=(e,t)=>typeof getComputedStyle<"u"?getComputedStyle(e,null).getPropertyValue(t):e.style.getPropertyValue(t),c=e=>i(e,"overflow")+i(e,"overflow-y")+i(e,"overflow-x");class s extends r.Component{constructor(e){super(e),l(this,"elementObserver"),l(this,"wrapper"),l(this,"lazyLoadHandler",e=>{var t,n;const{onContentVisible:r}=this.props,[a]=e,{isIntersecting:o}=a;if(o){this.setState({visible:!0},()=>{r&&r()});const e=null==(t=this.wrapper)?void 0:t.current;e&&e instanceof HTMLElement&&(null==(n=this.elementObserver)||n.unobserve(e))}}),this.elementObserver=null,this.wrapper=a.a.createRef(),this.state={visible:!1}}componentDidMount(){var e;this.getEventNode();const{offset:t,threshold:n}=this.props,r={rootMargin:"number"==typeof t?`${t}px`:t||"0px",threshold:n||0};this.elementObserver=new IntersectionObserver(this.lazyLoadHandler,r);const a=null==(e=this.wrapper)?void 0:e.current;a instanceof HTMLElement&&this.elementObserver.observe(a)}shouldComponentUpdate(e,t){return t.visible}componentWillUnmount(){var e,t;const n=null==(e=this.wrapper)?void 0:e.current;n&&n instanceof HTMLElement&&(null==(t=this.elementObserver)||t.unobserve(n))}getEventNode(){var e;return(e=>{if(!(e instanceof HTMLElement))return window;let t=e;for(;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(c(t)))return t;t=t.parentNode}return window})(null==(e=this.wrapper)?void 0:e.current)}render(){const{children:e,className:t,height:n,width:a,elementType:o}=this.props,{visible:l}=this.state,i={height:n,width:a},c=`LazyLoad${l?" is-visible":""}${t?` ${t}`:""}`;return Object(r.createElement)(o||"div",{className:c,style:i,ref:this.wrapper},l&&r.Children.only(e))}}l(s,"defaultProps",{elementType:"div",className:"",offset:0,threshold:0,width:null,onContentVisible:null,height:null})},1453:function(e,t,n){"use strict";var r=n(135),a=n.n(r),o=a.a.helpers,l={position:"left",ticks:{callback:a.a.Ticks.formatters.linear}},i=a.a.scaleService.getScaleConstructor("linear").extend({_parseValue:function(e){var t,n,r,a;return void 0!==e.c?(t=+this.getRightValue(e.l),n=+this.getRightValue(e.h),r=Math.min(t,n),a=Math.max(t,n)):(t=void 0,n=e=+this.getRightValue(e.y),r=e,a=e),{min:r,max:a,start:t,end:n}},determineDataLimits:function(){var e=this,t=e.chart,n=t.data.datasets,r=e.isHorizontal();e.min=null,e.max=null,o.each(n,(function(n,a){var l=t.getDatasetMeta(a);t.isDatasetVisible(a)&&function(t){return r?t.xAxisID===e.id:t.yAxisID===e.id}(l)&&o.each(n.data,(function(t,n){var r=e._parseValue(t);isNaN(r.min)||isNaN(r.max)||l.data[n].hidden||((null===e.min||r.min<e.min)&&(e.min=r.min),(null===e.max||e.max<r.max)&&(e.max=r.max))}))}));var a=.05*(e.max-e.min);e.min-=a,e.max+=a,this.handleTickRangeOptions()}});a.a.scaleService.registerScaleType("financialLinear",i,l);var c=a.a.helpers;a.a.defaults.financial={label:"",hover:{mode:"label"},scales:{xAxes:[{type:"time",distribution:"series",offset:!0,ticks:{major:{enabled:!0,fontStyle:"bold"},source:"data",maxRotation:0,autoSkip:!0,autoSkipPadding:75,sampleSize:100}}],yAxes:[{type:"financialLinear"}]},tooltips:{intersect:!1,mode:"index",callbacks:{label:function(e,t){var n=t.datasets[e.datasetIndex].data[e.index];return c.isNullOrUndef(n.y)?"O: "+n.o+"  H: "+n.h+"  L: "+n.l+"  C: "+n.c:a.a.defaults.global.tooltips.callbacks.label(e,t)}}}};var s=a.a.controllers.bar.extend({dataElementType:a.a.elements.Financial,_updateElementGeometry:function(e,t,n,r){var a=this,o=e._model,l=a._getValueScale(),i=l.getBasePixel(),c=l.isHorizontal(),s=a._ruler||a.getRuler(),u=a.calculateBarValuePixels(a.index,t,r),d=a.calculateBarIndexPixels(a.index,t,s,r),h=a.chart.data.datasets[a.index].data[t];o.horizontal=c,o.base=n?i:u.base,o.x=c?n?i:u.head:d.center,o.y=c?d.center:n?i:u.head,o.height=c?d.size:void 0,o.width=c?void 0:d.size,o.candleOpen=l.getPixelForValue(Number(h.o)),o.candleHigh=l.getPixelForValue(Number(h.h)),o.candleLow=l.getPixelForValue(Number(h.l)),o.candleClose=l.getPixelForValue(Number(h.c))},draw:function(){var e,t=this.chart.chart.ctx,n=this.getMeta().data,r=this.getDataset(),o=n.length,l=0;for(a.a.canvasHelpers.clipArea(t,this.chart.chartArea);l<o;++l)null==(e=r.data[l].o)||isNaN(e)||n[l].draw();a.a.canvasHelpers.unclipArea(t)}}),u=a.a.helpers;function d(e){var t=e._view,n=t.width/2,r=t.x-n,a=t.x+n;return{left:r,top:t.candleHigh,right:a,bottom:t.candleLow}}a.a.defaults.global.elements.financial={color:{up:"rgba(80, 160, 115, 1)",down:"rgba(215, 85, 65, 1)",unchanged:"rgba(90, 90, 90, 1)"}};var h=a.a.Element.extend({height:function(){var e=this._view;return e.base-e.y},inRange:function(e,t){var n=!1;if(this._view){var r=d(this);n=e>=r.left&&e<=r.right&&t>=r.top&&t<=r.bottom}return n},inLabelRange:function(e,t){if(!this._view)return!1;var n=d(this);return void 0!==this._view.width?e>=n.left&&e<=n.right:t>=n.top&&t<=n.bottom},inXRange:function(e){var t=d(this);return e>=t.left&&e<=t.right},inYRange:function(e){var t=d(this);return e>=t.top&&e<=t.bottom},getCenterPoint:function(){var e=this._view;return{x:e.x,y:(e.candleHigh+e.candleLow)/2}},getArea:function(){var e=this._view;return e.width*Math.abs(e.y-e.base)},tooltipPosition:function(){var e=this._view;return{x:e.x,y:(e.candleOpen+e.candleClose)/2}},hasValue:function(){var e=this._model;return u.isNumber(e.x)&&u.isNumber(e.candleOpen)&&u.isNumber(e.candleHigh)&&u.isNumber(e.candleLow)&&u.isNumber(e.candleClose)}}),f=a.a.helpers,p=a.a.defaults.global;function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5;return Math.round(e)-t}p.elements.candlestick=f.merge({},[p.elements.financial,{borderColor:p.elements.financial.color.unchanged,borderWidth:1}]);var b=h.extend({draw:function(){var e,t=this._chart.ctx,n=this._view,r=n.x,a=n.candleOpen,o=n.candleHigh,l=n.candleLow,i=n.candleClose,c=n.borderColor;"string"==typeof c&&(c={up:c,down:c,unchanged:c}),i<a?(e=f.getValueOrDefault(c?c.up:void 0,p.elements.candlestick.borderColor),t.fillStyle=f.getValueOrDefault(n.color?n.color.up:void 0,p.elements.candlestick.color.up)):i>a?(e=f.getValueOrDefault(c?c.down:void 0,p.elements.candlestick.borderColor),t.fillStyle=f.getValueOrDefault(n.color?n.color.down:void 0,p.elements.candlestick.color.down)):(e=f.getValueOrDefault(c?c.unchanged:void 0,p.elements.candlestick.borderColor),t.fillStyle=f.getValueOrDefault(n.color?n.color.unchanged:void 0,p.elements.candlestick.color.unchanged)),t.lineWidth=1,t.strokeStyle=f.getValueOrDefault(e,p.elements.candlestick.borderColor);var s=m(r);t.beginPath(),t.moveTo(s,m(o)),t.lineTo(s,m(Math.min(a,i))),t.moveTo(s,m(l)),t.lineTo(s,m(Math.max(a,i))),t.stroke();var u=[m(r-n.width/2),m(i),m(n.width,0),m(a-i,0)];t.fillRect.apply(t,u),t.strokeRect.apply(t,u),t.closePath()}});a.a.defaults.candlestick=a.a.helpers.merge({},a.a.defaults.financial),a.a.defaults._set("global",{datasets:{candlestick:a.a.defaults.global.datasets.bar}});a.a.controllers.candlestick=s.extend({dataElementType:b,updateElement:function(e,t,n){var r=this,a=r.getMeta(),o=r.getDataset(),l=r._resolveDataElementOptions(e,t);e._xScale=r.getScaleForId(a.xAxisID),e._yScale=r.getScaleForId(a.yAxisID),e._datasetIndex=r.index,e._index=t,e._model={datasetLabel:o.label||"",color:o.color,borderColor:o.borderColor,borderWidth:o.borderWidth},r._updateElementGeometry(e,t,n,l),e.pivot()}});var g=a.a.helpers,v=a.a.defaults.global;v.elements.ohlc=g.merge({},[v.elements.financial,{lineWidth:2,armLength:null,armLengthRatio:.8}]);var y=h.extend({draw:function(){var e=this._chart.ctx,t=this._view,n=t.x,r=t.candleOpen,a=t.candleHigh,o=t.candleLow,l=t.candleClose,i=g.getValueOrDefault(t.armLengthRatio,v.elements.ohlc.armLengthRatio),c=g.getValueOrDefault(t.armLength,v.elements.ohlc.armLength);null===c&&(c=t.width*i*.5),e.strokeStyle=l<r?g.getValueOrDefault(t.color?t.color.up:void 0,v.elements.ohlc.color.up):l>r?g.getValueOrDefault(t.color?t.color.down:void 0,v.elements.ohlc.color.down):g.getValueOrDefault(t.color?t.color.unchanged:void 0,v.elements.ohlc.color.unchanged),e.lineWidth=g.getValueOrDefault(t.lineWidth,v.elements.ohlc.lineWidth),e.beginPath(),e.moveTo(n,a),e.lineTo(n,o),e.moveTo(n-c,r),e.lineTo(n,r),e.moveTo(n+c,l),e.lineTo(n,l),e.stroke()}});a.a.defaults.ohlc=a.a.helpers.merge({},a.a.defaults.financial),a.a.defaults._set("global",{datasets:{ohlc:{barPercentage:1,categoryPercentage:1}}});a.a.controllers.ohlc=s.extend({dataElementType:y,updateElement:function(e,t,n){var r=this,a=r.getMeta(),o=r.getDataset(),l=r._resolveDataElementOptions(e,t);e._xScale=r.getScaleForId(a.xAxisID),e._yScale=r.getScaleForId(a.yAxisID),e._datasetIndex=r.index,e._index=t,e._model={datasetLabel:o.label||"",lineWidth:o.lineWidth,armLength:o.armLength,armLengthRatio:o.armLengthRatio,color:o.color},r._updateElementGeometry(e,t,n,l),e.pivot()}})}}]);