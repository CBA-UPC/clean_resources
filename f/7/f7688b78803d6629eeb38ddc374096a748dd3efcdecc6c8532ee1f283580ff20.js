(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[1520],{10793:(e,t,r)=>{"use strict";r.d(t,{f:()=>l});var i=r(76955),n=r(52377),a=r(5154),s=r.n(a),o=r(54285);class l extends i.PureComponent{constructor(e){super(e),this.handleClick=this.handleClick.bind(this),this.handleInview=this.handleInview.bind(this),this.startListen=this.startListen.bind(this),this.stopListen=this.stopListen.bind(this),this.inviewTracked=!1,this.tapTracked=!1}static get defaultProps(){return{activate:["tap"],algorithmId:"",bloggerAmebaId:"",categories:[],categoryId:"",subCategoryId:"",children:null,contentId:"",disable:!1,displayPosition:"",entryId:"",orderId:"",pageId:"",sectionId:"",serviceId:"",tagName:"",tapLogger:s(),viewLogger:s()}}componentDidMount(){this.startListen()}componentDidUpdate(){this.startListen()}et params(){var{algorithmId:e,bloggerAmebaId:t,categoryId:r,subCategoryId:i,contentId:n,displayPosition:a,pageId:s,entryId:o,orderId:l,sectionId:c,serviceId:p,tagName:d}=this.props;return{algorithmId:e,bloggerAmebaId:t,categories:this.props.categories.filter((),categoryId:r,subCategoryId:i,contentId:n,displayPosition:a,pageId:s,entryId:o,orderId:l,sectionId:c,serviceId:p,tagName:d}}startListen(){-1===this.props.activate.indexOf("view")||this.inviewTracked||(l.intersectionListener||(l.intersectionListener=(0,o.T)({})),this.stopListen(),this.trigger=n.findDOMNode(this),this.trigger&&!this.unlisten&&(this.unlisten=l.intersectionListener.listen(this.trigger,(e=>{(e.isIntersecting||e.intersectionRatio>0)&&(this.stopListen(),this.handleInview())}))))}andleClick(e){var t=i.Children.only(this.props.children).props.onClick;t&&t(e),this.props.tapLogger(this.params)}ender(){if(this.props.disable)return this.props.children;var e=this.props.children;return-1!==this.props.activate.indexOf("tap")&&(e=i.cloneElement(e,{onClick:this.handleClick})),e}}l.displayName="Tracker"},1520:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var i=r(66062),n=r(76955),a=r(66948),s=r(97175),o=r(55382),l=r.n(o),c=r(45525),p=r(71977),d=r.n(p),u=r(78168),g=r(10793),h=e=>{var{alt:t="Facebook",size:r=32}=e;return n.createElement("img",{alt:t,height:r,src:"".concat(window.process.env.HTTP_PATH_STAT,"/ameba_profile/image/facebook_icon.png"),width:r})};const m=n.memo(h);var f=e=>{var{alt:t="Instagram",size:r=32}=e;return n.createElement("img",{alt:t,height:r,src:"".concat(window.process.env.HTTP_PATH_STAT,"/ameba_profile/image/instagram_icon.png"),width:r})};const v=n.memo(f);var b=e=>{var{alt:t="Twitter",size:r=32}=e;return n.createElement("img",{alt:t,height:r,src:"".concat(window.process.env.HTTP_PATH_STAT,"/ameba_profile/image/twitter_icon.png"),width:r})};const y=n.memo(b);var I=r(73614),w=r(73724),_=r(31058),k=r(18043),T=r(73013),O=r.n(T),x=function L(){return(L=(0,i.Z)((function*(e){var{dispatch:t,match:r}=e,{amebaId:i}=r.params;yield t((0,I.jr)(i))}))).apply(this,arguments)}var P=e=>{var{useTrackTapLog:t=w.Z}=e,r=x(e,["useTrackTapLog"]),i=t(),{bloggerAmebaId:a,sns:s,site:o}=r,c=["twitter","facebook","instagram"];s.sort(();var p={twitter:{logName:"twitter-icon",serviceName:"Twitter",serviceIcon:n.createElement(y,null)},facebook:{logName:"facebook-icon",serviceName:"Facebook",serviceIcon:n.createElement(m,null)},instagram:{logName:"instagram-icon",serviceName:"Instagram",serviceIcon:n.createElement(v,null)}};return 0!==s.length||o.url?n.createElement("div",{className:O().Container},s.length>0&&n.createElement("div",{className:O().Sns},s.map((e=>n.createElement(g.f,{activate:["tap"],bloggerAmebaId:a,key:e.type,sectionId:p[e.type].logName,tapLogger:i},n.createElement("a",{"aria-label":"".concat(p[e.type].serviceName,"\u30a2\u30ab\u30a6\u30f3\u30c8\u3078\u9077\u79fb\u3059\u308b"),className:O().SnsItem,href:e.url,rel:"noreferrer",target:"_blank"},p[e.type].serviceIcon))))),!!o.url&&n.createElement(g.f,{activate:["tap"],bloggerAmebaId:a,contentId:o.url,sectionId:"text-link",tapLogger:i},n.createElement("a",{className:l()(O().Site,k.Mq),href:o.url,rel:"noreferrer",target:"_blank"},n.createElement(d(),{"aria-label":"\u5916\u90e8\u30ea\u30f3\u30af\u3078\u9077\u79fb\u3059\u308b",className:O().SiteIcon,height:18,width:18}),n.createElement("p",{className:O().SiteText},o.profile||o.url)))):null};const C=(0,u.ee)((0,a.$j)(((e,t)=>{var{match:r}=t,{amebaId:i}=r.params,n=(0,_.bw)(e,i),a=((null==n?void 0:n.sns_sites)||[]).filter((),s=a.filter(().map((),o=a.find(();return{bloggerAmebaId:i,sns:s,site:{profile:null==o?void 0:o.profile,url:(null==o?void 0:o.url)||""}}})),(0,c.w1)(O()),(0,s.provideHooks)({defer:))(n.memo(P))},85819:(e,t,r)=>{"use strict";r.d(t,{I:()=>n});var i=r(66948),n=,73724:(e,t,r)=>{"use strict";r.d(t,{Z:);var i=r(76955),n=r(85819),a=r(5563);function s(){var e=(0,n.I)();return(0,i.useCallback)((,[e])}},71977:function(e,t,r){"use strict";var i=this&&this.__assign||n=this&&this.__createBinding||(Object.create?,a=this&&this.__setModuleDefault||(Object.create?,s=this&&this.__importStar||Object.defineProperty(t,"__esModule",{value:!0});var o=s(r(76955));t.default=,75563:(e,t,r)=>{var i=r(18300)(();i.push([e.id,"._h_JOg8Ah{display:flex;flex-direction:column;padding:8px 16px 12px;row-gap:18px}._2JovdU6i{align-items:center;column-gap:18px;display:flex}._16pTkZBv{border-radius:50%}._2clCkTCj{align-items:center;color:rgba(8, 18, 26, 0.61);column-gap:6px;display:flex;font-size:13px;font-weight:700;line-height:1.4}._3yoRIoZu{flex-shrink:0}._sqfWwrey{overflow-wrap:break-word}",""]),i.locals={Container:"_h_JOg8Ah",Sns:"_2JovdU6i",SnsItem:"_16pTkZBv",Site:"_2clCkTCj",SiteIcon:"_3yoRIoZu",SiteText:"_sqfWwrey"},e.exports=i},73013:(e,t,r)=>{var i=r(75563),n=Object.assign||a=Object.defineProperty||"string"==typeof i&&(i=[[e.id,i,""]]),e.exports=function(e){var t=n({},e.locals||{});return a(t,"_",{value:),a(t,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),t}(i)}}]);