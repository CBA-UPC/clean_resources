(function(_ds){var window=this;var D5=function(a,b,c){return a.g.then(function(d){const e=d[b];if(!e)throw Error(`Method not found: ${b}`);return e.apply(d,c)})},jta=class{constructor(a){this.g=a;a.then((0,_ds.Af)(this),()=>{},this)}},kta=function(a,b,c){const d=Array(arguments.length-2);for(var e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=E5(a,b).then(;return new jta(e)},F5={},E5=function(a,b){var c=F5[b];if(c)return c;c=(c=_ds.tf(b))?_ds.jn(c):(new _ds.en().then(function(){const d=_ds.tf(b);if(!d)throw Error(`Failed to load ${b} from ${a}`);return d});return F5[b]=c};var lta=class{(a){D5(this.g,"requestSurvey",arguments).v(()=>{},this)}j(a){D5(this.g,"presentSurvey",arguments).v(()=>{},this)}h(a){D5(this.g,"dismissSurvey",arguments).v(()=>{},this)}},G5=_ds.vi("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");E5(G5,"help.service.Lazy.create").v(;var H5=L5=function(){if(I5){let a;null==(a=J5)||a.h({surveyMetadata:{sessionId:I5}});return K5.promise}return Promise.resolve()},mta=async function(a){var b=await _ds.t();const c=_ds.x(b.getConfig(),18);var d=a.getAttribute("listnr-id");d?(b={locale:b.getLocale()||"en",apiKey:c},d=kta(G5,"help.service.Lazy.create",d,{apiKey:b.apiKey||b.apiKey,asxUiUri:b.asxUiUri||b.asxUiUri,environment:b.environment||b.environment,frdProductData:b.frdProductData||b.frdProductData,
frdProductDataSerializedJspb:b.aZ||b.frdProductDataSerializedJspb,helpCenterPath:b.helpCenterPath||b.helpCenterPath,locale:b.locale||b.locale||"es-419".replace(/-/g,"_"),nonce:b.nonce||b.nonce,productData:b.productData||b.productData,receiverUri:b.receiverUri||b.receiverUri,renderApiUri:b.renderApiUri||b.renderApiUri,theme:b.theme||b.theme,window:b.window||b.window}),J5=new lta(d),a.h=J5):console.warn('<devsite-hats-survey> missing attribute "listnr-id"')},nta=function(a,b){let c;null==(c=a.h)||c.j({productData:{customData:{pageUrl:_ds.E().toString()}},
surveyData:b,colorScheme:1,authuser:0,customZIndex:1E4,listener:{surveyPrompted:d=>{I5=d.sessionId||null;K5=new _ds.hf;M5=K5.g},surveyClosed:()=>{I5=N5=null;M5()}}})},P5=class extends _ds.C{constructor(a){super();this.h=null;a&&(this.h=J5=a)}async connectedCallback(){N5=this;const a=this.getAttribute("hats-id");a&&a!==O5&&(await L5(),this.h||await mta(this),O5=a,await this.un(a))}disconnectedCallback(){N5=null;_ds.Dn(ota,document.body,"devsite-page-changed",()=>{N5||(L5(),O5=null)})}async un(a){await _ds.t();
let b;null==(b=this.h)||b.m({triggerId:a,callback:c=>{c.surveyData&&nta(this,c.surveyData)},authuser:0,enableTestingMode:!1})}};P5.prototype.renderSurvey=P5.prototype.un;P5.prototype.disconnectedCallback=P5.prototype.disconnectedCallback;P5.prototype.connectedCallback=P5.prototype.connectedCallback;P5.closeCurrentSurvey=L5;P5.getTagName=H5;var O5=null,I5=null,N5=null,K5=new _ds.hf,M5=K5.g,ota=new _ds.G,J5=void 0;try{customElements.define(H5(),P5)}catch(a){console.warn("devsite.app.customElement.DevsiteHatsSurvey",a)};})(_ds_www);