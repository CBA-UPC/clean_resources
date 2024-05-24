"use strict";(globalThis.webpackChunk_indeed_homepage_frontend_react=globalThis.webpackChunk_indeed_homepage_frontend_react||[]).push([[2609],{4947:(e,t,s)=>{s.r(t),s.d(t,{default:);var a=s(40),n=s.n(a),r=s(3928),o=s(1708),i=e=>{var{messages:t,status:s}=e;return"OK"===s&&t&&t.length>0?e:Promise.reject()},l=s(5828),c=s(1981),m=s(8857),d=(e,t)=>{if(!(t.length<1)){var s=[],a=[];t.forEach(((e,t)=>{s.push(e.msgTk),a.push(t)})),(0,l.I)({tk:e,moduleName:m.GQ.MESSAGES,itemNames:s,position:a})}},g=s(2418),u=s(1230);const p=e=>{var{headerItem:t}=e,{i18n:s}=(0,g.b)();return n().createElement(u.Box,{"data-cy":"jobsearch-MessagesHeader","aria-label":s.pgettext("messages carousel","messages"),sx:{mr:4,ml:4,pt:2,justifyContent:"space-between",display:"flex"}},n().createElement(u.Text,{sx:{fontSize:"18px",fontWeight:"bold",color:"neutral.1000"},"data-cy":"jobsearch-MessagesHeader-primaryText"},t.primaryText),n().createElement(u.TextLink,{href:t.link,sx:{fontSize:1,textDecoration:"none",color:"primary.800",border:"none",lineHeight:2},"data-cy":"jobsearch-MessagesHeader-viewAll"},t.secondaryText))};var h=s(6223),v=s(2812);const f=e=>{var{sender:t,snippet:s,formattedAge:r,handleClick:o,callToActionButton:i,viewMessageLink:l,isActive:c,forwardedRef:m,singleMessage:d}=e,g=(0,a.useRef)(!0);(0,a.useEffect)((()=>{!g.current&&m&&c?m.focus():g.current=!1}),[c,g,m]);var p=n().createElement(u.Box,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%"}},n().createElement(u.Box,{"data-cy":"jobsearch-MessageDetail-sender",sx:{fontSize:2,mb:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},t),n().createElement(u.Box,{"data-cy":"jobsearch-MessageDetail-snippet",sx:{fontSize:1,color:"neutral.700",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},s),n().createElement(u.Box,{"data-cy":"jobsearch-MessageDetail-footer",sx:{display:"flex",justifyContent:"space-between",mb:2,mt:2}},i&&n().createElement(u.ButtonLink,{href:l,size:"sm",variant:"secondary",tabIndex:c?0:-1,sx:{fontSize:1,lineHeight:"loose"},"data-cy":"jobsearch-MessageDetail-cta",onClick:o},v.ZP.pgettext('Message Detail "reply" button text',"Reply now")),n().createElement(u.Box,{"data-cy":"jobsearch-MessageDetail-age",sx:{fontSize:1,color:"neutral.700",alignSelf:"center"}},r)));return i?n().createElement(u.Box,{sx:{pt:3,pr:4,pb:2,pl:4,ml:d?4:1,mr:d?4:0,flexGrow:1,border:e=>"1px solid ".concat(e.colors.neutral[300]),borderRadius:"md",display:"flex",flexDirection:"row",justifyContent:"space-between"}},p):n().createElement(u.ButtonLink,{onClick:o,variant:"secondary",href:l,sx:{mr:d?4:1,ml:d?4:0,flexGrow:1,display:"flex",flexDirection:"row",justifyContent:"space-between",fontWeight:"normal",borderColor:"neutral.300",cursor:"pointer"}},p)};var b=(e,t)=>()=>{((e,t)=>{(0,c.W0)({tk:t,moduleName:m.GQ.MESSAGES,itemNames:[e]})})(e,t)};const x=e=>{var{mobtk:t,msgTk:s}=e,a=b(s,t);return n().createElement(f,Object.assign({handleClick:a},e))};const M=e=>{var{messages:t,mobtk:s,callToActionButton:a}=e,[r,o]=n().useState(0),i=n().useRef([]);if(1===t.length)return n().createElement(u.Box,{sx:{mt:3,mb:3}},n().createElement(x,Object.assign({mobtk:s,callToActionButton:a,singleMessage:!0},t[0])));var l=t.map(((e,t)=>n().createElement(u.Box,{"data-cy":"jobsearch-MessagesCarousel-messageDetailContainer",sx:{pr:1,"&:last-child":{pr:0},ml:0===t?4:0},key:e.msgTk,ref:e=>!i.current.includes(e)&&i.current.push(e),role:"group",tabIndex:r===t?0:-1},n().createElement(x,Object.assign({callToActionButton:a,mobtk:s,isActive:r===t,forwardedRef:i.current[t]},e)))));return n().createElement(u.Box,{"data-cy":"jobsearch-MessagesCarousel",sx:{mt:4,pr:4,mb:4,'div[aria-roledescription="slide"]':{opacity:1},'div:has(> button[aria-disabled="true"])':{display:"none"}}},n().createElement(h.Z,{items:l,variant:"peek",showCharacterCounter:!1,showDots:!1,positionControl:"outside",onIndexChange:))};var E=s(199),C=e=>{var{messages:t,headerItem:s,callToActionButton:r,mobtk:o}=e,[i,l]=(0,a.useState)(!0);return(0,a.useEffect)((),!t||0===t.length?n().createElement(u.Box,{"data-testid":"jobsearch-Messages--empty",sx:{display:"none"}}):n().createElement(u.Box,{sx:{overflow:"hidden","@keyframes fade-in-top-messages":{from:{maxHeight:0,overflow:"hidden",mb:0},to:{maxHeight:"1000px",overflow:"visible"}},animation:i?"fade-in-top-messages ease-in 0.8s forwards":""},onAnimationEnd:"data-cy":"jobsearch-Messages"},n().createElement(p,{headerItem:s}),n().createElement(M,{messages:t,mobtk:o,callToActionButton:r}))},T=(0,s(6216).Zk)(30);class k extends a.Component{omponentDidMount(){var{messagingServiceClient:e,imsMigrationEnabled:t}=this.props;return e||t?this.fetchAndLogMessagesMessaging():this.fetchAndLogMessagesInbox()}fetchAndLogMessagesInbox(){var{getMessagesLink:e,mobtk:t}=this.props;return(e=>(0,o.uz)(e,{credentials:"include"}).then(i).catch(())(e).then((e=>{e&&(this.setState(e),d(t,e.messages))}))}onvertStringToTimestampuildMsgsConversationSidqlToLegacyParticipants(e,t){return e.map((e=>({userFullName:e.participantName,currentUser:e.accountKey===t?1:0})))}gqlConversationResponseToIMessagingResponse(e,t){var s,a,n;return{lastMessageTimestampMs:this.convertStringToTimestamp(null===(s=e.lastEvent)||void 0===s?void 0:s.publicationDateTime),previewSnippet:null===(a=e.lastEvent)||void 0===a?void 0:a.messagePreview,sid:this.buildMsgsConversationSid(e.id),topic:"",userFullName:"",metadata:{lastMessageIsReminder:!1},unreadMessageCount:null===(n=e.userReadsInfo)||void 0===n?void 0:n.unreadCount,participants:this.gqlToLegacyParticipants(e.participants,t)}}fetchAndLogMessagesMessaging(){var{messagingServiceClient:e,mobtk:t,oneGraphClient:s,imsMigrationEnabled:a}=this.props;return a?s.fetchConversations().then((e=>{var s,a,n,r,o;if(this.isResponseValid(e)){var i=(null===(n=null===(a=null===(s=null==e?void 0:e.data)||void 0===s?void 0:s.currentUser)||void 0===a?void 0:a.account)||void 0===n?void 0:n.id)||null,l=((null===(o=null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.findConversations)||void 0===o?void 0:o.conversations)||[]).map(();this.setState({messages:this.convertToInboxMessages({data:l})},(()=>{d(t,this.state.messages)}))}})):e.jobseekers.v2.getConversations(["MESSAGE"]).then((e=>{e&&e.data&&this.setState({messages:this.convertToInboxMessages(e.data)},(()=>{d(t,this.state.messages)}))}))}convertToInboxMessages(e){var{baseMessagingWebUrl:t,maxMessages:s,senderPrefix:a}=this.props,n=e.data||[],r=(new Date).getTime();return n.filter((e=>!(r-e.lastMessageTimestampMs>T)&&(!e.metadata.lastMessageIsReminder&&0!==e.unreadMessageCount))).sort(().map((e=>{var s,n,o=e.participants.find((),i=r-e.lastMessageTimestampMs;return{msgTk:e.sid,subject:e.topic,sender:o&&a+o.userFullName,snippet:e.previewSnippet,viewMessageLink:"".concat(t,"/conversations/").concat(e.sid,"/?from=homepage_messagesModule"),formattedAge:(s=i,n=parseInt((s/864e5).toFixed(0),10),0!==n?n:1)}})).slice(0,s||n.length)}render(){var{messages:e}=this.state,{headerItem:t,mobtk:s,callToActionButton:a}=this.props;return n().createElement(g.Z.Consumer,null,(r=>{var{i18n:o}=r,i=e.map((e=>Object.assign(Object.assign({},e),{formattedAge:o.npgettext("Messages age","{0} day ago","{0} days ago",e.formattedAge,[e.formattedAge])})));return n().createElement(C,{messages:i,headerItem:t,mobtk:s,callToActionButton:a})}))}}var y=s(8147),A=e=>{if(!e)return null;var{cookies:t,userAgent:s,options:a}=e,n={BASE_URL:a.baseUrl,DEFAULT_TIMEOUT:a.defaultTimeout,XSRF_COOKIE_NAME:a.xsrfCookieName,XSRF_HEADER_NAME:a.xsrfHeaderName,CLIENT_APP:a.clientApp,LOCALE_COUNTRY:a.localeCountry,LOCALE_LANGUAGE:a.localeLanguage,PAGELOAD_TK:""};return new r.hN(n,t,s)};const w=()=>n().createElement(g.Z.Consumer,null,(e=>{var{initialData:t}=e,{messagesModel:s,messagingServiceClientParameters:a,oneGraphClientModel:r,imsMigrationEnabled:o,baseMessagingWebUrl:i,mobtk:l,ctk:c,country:m}=t;if(k&&s){var{headerItem:d,callToActionButton:g,getMessagesLink:u}=s,p=new y.Z(null==r?void 0:r.url,null==r?void 0:r.apiKey,c,m,!0);return n().createElement(k,{mobtk:l,headerItem:d,callToActionButton:g,getMessagesLink:u,messagingServiceClient:A(a),baseMessagingWebUrl:i,maxMessages:a&&a.maxMessages,senderPrefix:a&&a.senderPrefix,oneGraphClient:p,imsMigrationEnabled:o})}return null}))}}]);
//# sourceMappingURL=LazyMessagesWrapper.es6.js.map