!);var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@b474a6ad4354f4ba5fde672fa4e9c2c267684761"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[2589],{11974:(e,t,i)=>{i.r(t),i.d(t,{default:);var s=i(50209),n=i.n(s),r=i(52980),o=i(98724),a=i(66129),p=i(32468),l=i(63665),d=i(71417),u=i(22979),g=i(85795),h=i(59215),c=i(80224),b=i(55015),f=i(51211),m=i(32387),v=i(29860),x=i(48352),P=i(2629);class y extends d.lb{constructor(){super(...arguments),n()(this,"apiHelper",(0,g.ZP)(this.props.appContext.apiFetch)),n()(this,"render",()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(v.Z,{title:this.props.appContext._c("Title of the Inbox page","Inbox | Tumblr")}),(0,P.jsx)(x.Z,{page:m.H.analyticsPageName}),(0,P.jsx)(r.Z,{activePage:p.vS.inbox,children:(0,P.jsx)(a.Z,{sidebarProps:{page:p.vS.inbox},timelineProps:{endpointApiRequest:this.getApiRequest(),getObjectsFromResponse:this.getObjectsFromResponse,getInitialPage:this.getInitialTimeline,emptyView:this.getEmptyView(),onPagination:this.onPagination,getPrevLink:this.getPrevLink,getNextLink:this.getNextLink,overridePresentationStyle:this.props.deviceContext.isMobile?b.Z.inboxMobile:b.Z.inboxDesktop,displayMode:u.mt.List,updateUrlFromCurrentPageLink:this.updateQueryParamFromPagination,initialLoader:(0,P.jsx)(o.w,{}),id:"inbox"},timelineWrapperClassName:"qocOj"})})]})),n()(this,"getApiRequest",()=>{var e,t=new URLSearchParams(null===(e=this.props.location)||void 0===e?void 0:e.search),i=t.get("offset"),s=t.get("sort");return this.apiHelper.getInboxSubmissions({offset:i,sort:s})}),n()(this,"updateQueryParamFromPagination",e=>{var t=this.props,i=t.location.search,s=t.navigate,n=null==e?void 0:e.substring(null==e?void 0:e.indexOf("?")),r=n&&new URLSearchParams(n).get("offset")||"0",o=new URLSearchParams(i);o.set("offset",r),s({search:`?${o}`})}),n()(this,"getInitialTimeline",,n()(this,"onPagination",e=>{var t=e.requestType;return[l.vO.Initial,l.vO.Refresh].includes(t)&&this.props.pollerContext.rerequestPoll()}),n()(this,"getObjectsFromResponse",e=>{var t=e.response;return(0,c.w)(t.posts)}),n()(this,"getNextLink",e=>{var t;return null===(t=e.response.links)||void 0===t?void 0:t.next}),n()(this,"getPrevLink",,n()(this,"getEmptyView",()=>{var e=this.props.appContext._t;return(0,P.jsx)(f.Z,{message:e("You have no messages"),cta:e("Learn more."),ctaLink:"https://tumblr.zendesk.com/hc/en-us/articles/231857368-Submit"})})}}let w=(0,h.Bg)(y,{appContext:!0,deviceContext:!0,pollerContext:!0})}}]);