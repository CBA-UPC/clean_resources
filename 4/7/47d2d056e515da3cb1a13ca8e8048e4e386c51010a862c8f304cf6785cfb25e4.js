(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[4116],{10793:(t,e,i)=>{"use strict";i.d(e,{f:()=>c});var o=i(76955),n=i(52377),a=i(5154),s=i.n(a),r=i(54285);class c extends o.PureComponent{constructor(t){super(t),this.handleClick=this.handleClick.bind(this),this.handleInview=this.handleInview.bind(this),this.startListen=this.startListen.bind(this),this.stopListen=this.stopListen.bind(this),this.inviewTracked=!1,this.tapTracked=!1}static get defaultProps(){return{activate:["tap"],algorithmId:"",bloggerAmebaId:"",categories:[],categoryId:"",subCategoryId:"",children:null,contentId:"",disable:!1,displayPosition:"",entryId:"",orderId:"",pageId:"",sectionId:"",serviceId:"",tagName:"",tapLogger:s(),viewLogger:s()}}componentDidMount(){this.startListen()}componentDidUpdate(){this.startListen()}componentWillUnmount(){this.stopListen()}get params(){var{algorithmId:t,bloggerAmebaId:e,categoryId:i,subCategoryId:o,contentId:n,displayPosition:a,pageId:s,entryId:r,orderId:c,sectionId:p,serviceId:l,tagName:d}=this.props;return{algorithmId:t,bloggerAmebaId:e,categories:this.props.categories.filter((),categoryId:i,subCategoryId:o,contentId:n,displayPosition:a,pageId:s,entryId:r,orderId:c,sectionId:p,serviceId:l,tagName:d}}startListen(){-1===this.props.activate.indexOf("view")||this.inviewTracked||(c.intersectionListener||(c.intersectionListener=(0,r.T)({})),this.stopListen(),this.trigger=n.findDOMNode(this),this.trigger&&!this.unlisten&&(this.unlisten=c.intersectionListener.listen(this.trigger,(t=>{(t.isIntersecting||t.intersectionRatio>0)&&(this.stopListen(),this.handleInview())}))))}andleClick(t){var e=o.Children.only(this.props.children).props.onClick;e&&e(t),this.props.tapLogger(this.params)}ender(){if(this.props.disable)return this.props.children;var t=this.props.children;return-1!==this.props.activate.indexOf("tap")&&(t=o.cloneElement(t,{onClick:this.handleClick})),t}}c.displayName="Tracker"},14116:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>V});var o,n,a,s,r,c,p,l,d,h,u,k,f=i(3e4),w=i(66062),g=(i(91938),i(76955)),m=i(55382),b=i.n(m),v=i(66948),I=i(97175),C=i(29466),y=i.n(C),x=i(45525),F=i(73614),L=i(5563),T=i(45250),A=i.n(T),_=i(63605),B=i.n(_),N=i(19008),O=(0,x.w1)(B())((a=n=class extends g.Component{constructor(t){super(t),this.handleClick=this.handleClick.bind(this),this.handleMount=this.handleMount.bind(this)}componentDidMount(){setImmediate((()=>{this.handleMount()}))}shouldComponentUpdate(t){return this.props.caption!==t.caption||this.props.twitterAccount!==t.twitterAccount||!y()(this.props.onClick,t.onClick)}componentDidUpdate(){setImmediate((()=>{this.handleMount()}))}componentWillUnmount(){window.twttr&&window.twttr.widgets&&window.twttr.events.unbind("follow",this.handleClick)}ecuteTwitterScript(){(0,N.v)("https://platform.twitter.com/widgets.js").then((()=>{window.twttr&&window.twttr.widgets&&(window.twttr.widgets.load(),window.twttr.events.bind("follow",this.handleClick))})).catch((t=>{console.error(t)}))}render(){return(0,f.Z)("div",{className:B().Block},void 0,(0,f.Z)("a",{className:"twitter-follow-button","data-lang":"ja","data-show-count":"false","data-show-screen-name":"false","data-size":"large",href:"https://twitter.com/".concat(this.props.twitterAccount)},void 0,"\u30d5\u30a9\u30ed\u30fc\u3059\u308b"),(0,f.Z)("div",{className:B().Caption},void 0,this.props.caption))}},n.displayName="SpTweetButton",o=a))||o,Z=i(68751),j=i(10726),M=i.n(j),S=(0,x.w1)(M())((c=r=class extends g.Component{omponentDidMount(){setImmediate((()=>{this.handleMount()}))}shouldComponentUpdate(t){return this.props.buttonType!==t.buttonType||this.props.caption!==t.caption||this.props.layout!==t.layout||this.props.size!==t.size||this.props.facebookAccount!==t.facebookAccount||!y()(this.props.onClick,t.onClick)}omponentWillUnmount(){window.FB&&window.FB.Event&&(window.FB.Event.unsubscribe("edge.create",this.handleLikeClick),window.FB.Event.unsubscribe("edge.remove",this.handleCancelClick))}handleLikeClick(t,e){this.props.onClick&&this.props.onClick("like",t,e)}handleCancelClick(t,e){this.props.onClick&&this.props.onClick("cancel",t,e)}handleMount(){(0,Z.$O)().then((()=>{window.FB&&window.FB.XFBML&&window.FB.Event&&(window.FB.XFBML.parse(),window.FB.Event.subscribe("edge.create",this.handleLikeClick),window.FB.Event.subscribe("edge.remove",this.handleCancelClick))})).catch(()}render(){var t=this.props.layout||"button_count",e=this.props.size||"large";return(0,f.Z)("div",{className:"left"===this.props.buttonType?M().LeftButtonBlock:M().Block},void 0,(0,f.Z)("div",{className:"fb-like","data-action":"like","data-href":"https://www.facebook.com/".concat(this.props.facebookAccount),"data-layout":t,"data-share":"false","data-show-faces":"false","data-size":e}),this.props.caption?(0,f.Z)("div",{className:M().Caption},void 0,this.props.caption):"")}},r.displayName="SpFacebookButton",s=c))||s,P=i(18043),z=i(10793),D=(0,x.w1)(A())((d=l=class extends g.Component{houldComponentUpdate(t){return this.props.amebaId!==t.amebaId||this.props.facebookAccount!==t.facebookAccount||this.props.isFacebook!==t.isFacebook||this.props.isOfficial!==t.isOfficial||this.props.nickname!==t.nickname||this.props.pageType!==t.pageType||!y()(this.props.trackTapLog,t.trackTapLog)||!y()(this.props.trackViewLog,t.trackViewLog)||this.props.twitterAccount!==t.twitterAccount}handleFacebookLikeClick(t){var e={contentId:this.props.amebaId,pageId:this.props.pageType,sectionId:t?"".concat(t,"-facebook-page"):null,serviceId:this.props.isOfficial?"official":null};this.props.trackTapLog(e)}handleTwitterFollowClick(){var t={contentId:this.props.amebaId,pageId:this.props.pageType,sectionId:"follow-twitter",serviceId:this.props.isOfficial?"official":null};this.props.trackTapLog(t)}render(){if(this.props.isFacebook||""!==this.props.facebookAccount&&""===this.props.twitterAccount){var t="https://www.facebook.com/".concat(this.props.facebookAccount,"/"),e="https://graph.facebook.com/".concat(this.props.facebookAccount,"/picture?width=72&height=72");return(0,f.Z)("div",{},void 0,(0,f.Z)("p",{className:A().FacebookHeading},void 0,"Facebook\u306b\u3044\u3044\u306d\uff01\u3092\u3057\u3066\u5fdc\u63f4\u3057\u3088\u3046\u266a"),(0,f.Z)("div",{className:b()(A().FacebookBlock,P.ex,P.$d,P.KS)},void 0,(0,f.Z)(z.f,{activate:["tap","view"],contentId:this.props.amebaId,pageId:this.props.pageType,sectionId:"browse-facebook-page",serviceId:this.props.isOfficial?"official":"general",tapLogger:this.props.trackTapLog,viewLogger:this.props.trackViewLog},void 0,(0,f.Z)("a",{href:t},void 0,(0,f.Z)("img",{alt:this.props.nickname,className:b()(A().FacebookImage),src:e}))),(0,f.Z)("div",{className:A().FacebookText},void 0,(0,f.Z)("p",{},void 0,(0,f.Z)("b",{className:A().FacebookName},void 0,this.props.nickname),"\u3055\u3093\u304c\u516c\u5f0fFacebook\u3092\u66f4\u65b0\u4e2d\uff01"),(0,f.Z)("div",{className:A().Buttons},void 0,(0,f.Z)(S,{buttonType:"left",facebookAccount:this.props.facebookAccount,onClick:this.handleFacebookLikeClick})))))}return""===this.props.facebookAccount&&""!==this.props.twitterAccount?(0,f.Z)("div",{className:b()(A().Block,P.KS,P.$d)},void 0,(0,f.Z)("p",{className:A().Heading},void 0,"Twitter\u3067\u3082\u60c5\u5831\u304c\u53d7\u3051\u53d6\u308c\u307e\u3059"),(0,f.Z)("div",{className:A().Buttons},void 0,(0,f.Z)(O,{caption:"".concat(this.props.nickname," \u516c\u5f0fTwitter\u3092\u30d5\u30a9\u30ed\u30fc\u3059\u308b"),twitterAccount:this.props.twitterAccount,onClick:this.handleTwitterFollowClick}))):(0,f.Z)("div",{className:b()(A().Block,P.KS,P.$d)},void 0,(0,f.Z)("p",{className:A().Heading},void 0,"\u30d6\u30ed\u30b0\u306e\u66f4\u65b0\u60c5\u5831\u3092\u53d7\u3051\u53d6\u308b"),(0,f.Z)("div",{className:A().Buttons},void 0,(0,f.Z)(O,{caption:"Twitter\u3067\u53d7\u3051\u53d6\u308b",twitterAccount:this.props.twitterAccount,onClick:this.handleTwitterFollowClick}),(0,f.Z)(S,{caption:"Facebook\u3067\u53d7\u3051\u53d6\u308b",facebookAccount:this.props.facebookAccount,onClick:this.handleFacebookLikeClick})))}},l.displayName="SpFollowButtons",p=d))||p,U=i(86123),E=i.n(U);function H(){return(H=(0,w.Z)((function*(t){var{dispatch:e,match:i}=t,{params:o}=i,n=o.amebaId;yield e((0,F.Rs)(n))}))).apply(this,arguments)}var V=(0,v.$j)((function(t,e){var{match:i}=e,{params:o,route:n}=i,a=o.amebaId,s=t.bloggerState.bloggerMap[a]||{},r=(s.attribute||{}).isOfficial,c=(s.profile||{}).nickname||"",p=s.official||{},l=p.facebook_account||"",d=p.twitter_account||"",h=n.pageType;return{amebaId:a,appName:t.deviceState.appName,facebookAccount:l,isOfficial:r,nickname:c,pageType:h,twitterAccount:d}}),{trackTapLog:L.XI,trackViewLog:L.iG})(h=(0,I.provideHooks)({defer:)(h=(0,x.w1)(E())((k=u=class extends g.Component{shouldComponentUpdate(t){return this.props.amebaId!==t.amebaId||this.props.appName!==t.appName||this.props.facebookAccount!==t.facebookAccount||this.props.isOfficial!==t.isOfficial||this.props.nickname!==t.nickname||this.props.pageType!==t.pageType||!y()(this.props.trackTapLog,t.trackTapLog)||!y()(this.props.trackViewLog,t.trackViewLog)||this.props.twitterAccount!==t.twitterAccount}render(){return this.props.facebookAccount||this.props.twitterAccount?(0,f.Z)("div",{className:b()(E().Block,P.Qx,P.hn,P.iJ,P.$d)},void 0,(0,f.Z)(D,{amebaId:this.props.amebaId,facebookAccount:this.props.facebookAccount,isFacebook:"facebook"===this.props.appName,isOfficial:this.props.isOfficial,nickname:this.props.nickname,pageType:this.props.pageType,trackTapLog:this.props.trackTapLog,trackViewLog:this.props.trackViewLog,twitterAccount:this.props.twitterAccount})):null}},u.displayName="SpEntryDetailSnsFollow",h=k))||h)||h)||h},68751:(t,e,i)=>{"use strict";i.d(e,{$O:()=>a,lZ:);var o=i(19008),n="311629842256842",a=(()=>{var t;return()=>(t||(t=(0,o.v)("https://connect.facebook.net/ja_JP/sdk.js").then((()=>{if(!window.FB||!window.FB.init)throw new Error("window.FB does not exist");window.FB.init({appId:n,version:"v14.0",xfbml:!1})})).catch(()),t)})()},11383:(t,e,i)=>{var o=i(18300)((function(t){return t[1]}));o.push([t.id,"._3jNPVHdI{flex-grow:1;padding:6px 12px 0;width:100%}._3jNPVHdI,._e4AsXYMj{text-align:center}._e4AsXYMj{color:#999;font-size:11px;margin:.5rem 0 0}._15mOM5s0{padding:3px 0 0;text-align:left}",""]),o.locals={Block:"_3jNPVHdI",Caption:"_e4AsXYMj",LeftButtonBlock:"_15mOM5s0"},t.exports=o},93266:(t,e,i)=>{var o=i(18300)((function(t){return t[1]}));o.push([t.id,"._2ZcPMENg{border-top:1px solid #ccc}._3bnP1FDa{color:#333;font-size:13px;margin:1.5rem 0 .5rem;text-align:center}._2MFzzZXu{display:flex;justify-content:space-between}._1sl210D3{color:#3b5998;font-size:13px;font-weight:700;padding-bottom:8px}._3RcrApwa{align-items:center;display:flex;padding:8px 0}._2B09039t{height:72px;min-width:72px;width:72px}._3jvmlPc2{font-size:14px;line-height:20px;line-height:1.25rem;padding-left:16px}._31rnT5HW{font-weight:700}",""]),o.locals={Block:"_2ZcPMENg",Heading:"_3bnP1FDa",Buttons:"_2MFzzZXu",FacebookHeading:"_1sl210D3",FacebookBlock:"_3RcrApwa",FacebookImage:"_2B09039t",FacebookText:"_3jvmlPc2",FacebookName:"_31rnT5HW"},t.exports=o},88404:(t,e,i)=>{var o=i(18300)((function(t){return t[1]}));o.push([t.id,"._2nzx36JT{flex-grow:1;padding:6px 12px 0;width:100%}._2nzx36JT,._23ya1hiF{text-align:center}._23ya1hiF{color:#999;font-size:11px;margin:5px 0 0}",""]),o.locals={Block:"_2nzx36JT",Caption:"_23ya1hiF"},t.exports=o},60849:(t,e,i)=>{var o=i(18300)(();o.push([t.id,"._U6r6KR_4{padding:1rem 1rem .5rem}",""]),o.locals={Block:"_U6r6KR_4"},t.exports=o},10726:(t,e,i)=>{var o=i(11383),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},a=Object.defineProperty||function(t,e,i){t[e]=i.value};"string"==typeof o&&(o=[[t.id,o,""]]),t.exports=function(t){var e=n({},t.locals||{});return a(e,"_",{value:function(){return t}}),a(e,"toString",{value:function(){return"function"==typeof t.toString?t.toString():""}}),e}(o)},45250:(t,e,i)=>{var o=i(93266),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},a=Object.defineProperty||function(t,e,i){t[e]=i.value};"string"==typeof o&&(o=[[t.id,o,""]]),t.exports=function(t){var e=n({},t.locals||{});return a(e,"_",{value:function(){return t}}),a(e,"toString",{value:function(){return"function"==typeof t.toString?t.toString():""}}),e}(o)},63605:(t,e,i)=>{var o=i(88404),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},a=Object.defineProperty||function(t,e,i){t[e]=i.value};"string"==typeof o&&(o=[[t.id,o,""]]),t.exports=function(t){var e=n({},t.locals||{});return a(e,"_",{value:function(){return t}}),a(e,"toString",{value:function(){return"function"==typeof t.toString?t.toString():""}}),e}(o)},86123:(t,e,i)=>{var o=i(60849),n=Object.assign||a=Object.defineProperty||"string"==typeof o&&(o=[[t.id,o,""]]),t.exports=function(t){var e=n({},t.locals||{});return a(e,"_",{value:),a(e,"toString",{value:function(){return"function"==typeof t.toString?t.toString():""}}),e}(o)}}]);