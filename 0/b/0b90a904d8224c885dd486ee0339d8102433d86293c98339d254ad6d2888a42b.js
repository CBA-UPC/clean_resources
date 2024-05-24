"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4195],{"0OT0":function(e,s,a){a.r(s),a.d(s,{default:);var n=a("Tim7"),t=a("jbFD"),r=a.n(t),i=(a("Oz0t"),a("QslU")),c=a("V67U"),o=a.n(c),d=a("11lP"),l=a("bBVy"),u=a("TQi8"),T=a("3Fx5"),S=a("gok9"),p=a("Bq7s"),m=a("XErn"),N=a("gPdi"),x="ma-TableTransactionListDesktop";function j(e){var s=e.transactions,a=(0,l.r)().i18n;return(0,i.jsx)("div",{className:""+x,children:null==s?void 0:s.map((function(e){return(0,i.jsxs)("div",{className:x+"Row",children:["HIGHLIGHTED_AD"===e.type?(0,i.jsx)("span",{className:x+"Row--concept",children:(0,N.UM)(a.t("AD_HIGHLIGHTED",{adId:e.adId}))}):(0,i.jsx)("span",{className:x+"Row--concept",children:e.concept}),(0,i.jsx)("span",{className:x+"Row--date",children:new Date(e.createdAt).toLocaleString("es")}),(0,i.jsx)("div",{className:x+"Row--amount",children:(0,N.UM)(a.t("CREDITS_TRANSACTIONS_LIST_AMOUNT",{amountStart:'<span className="'+x+"Row--amount--"+(e.amount>0?"positive":"negative")+'">',amountEnd:"</span>",transactionAmount:e.amount<0?e.amount:"+"+e.amount}))}),(0,i.jsx)("div",{children:(0,N.UM)(a.t("CREDITS_TRANSACTIONS_LIST_BALANCE",{boldStart:'<span className="'+x+'Row--balance">',boldEnd:"</span>",transactionBalance:e.balance}))})]})}))})}j.displayName="TableTransactionListDesktop",j.propTypes={transactions:o().object};var h="ma-TableTransactionListMobile";function _(e){var s=e.transactions,a=(0,l.r)().i18n;return(0,i.jsx)("div",{className:""+h,children:null==s?void 0:s.map((function(e,s){return(0,i.jsxs)(i.Fragment,{children:[4===s&&(0,i.jsx)(p.Z,{}),(0,i.jsxs)("div",{className:h+"Row",children:[(0,i.jsxs)("div",{children:["HIGHLIGHTED_AD"===e.type?(0,i.jsx)("p",{className:h+"Row--concept",children:(0,N.UM)(a.t("AD_HIGHLIGHTED",{adId:e.adId}))}):(0,i.jsx)("p",{className:h+"Row--concept",children:e.concept}),(0,i.jsx)("p",{className:h+"Row--date",children:new Date(e.createdAt).toLocaleString("es")})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:h+"Row--amount",children:(0,N.UM)(a.t("CREDITS_TRANSACTIONS_LIST_AMOUNT",{amountStart:'<span className="'+h+"Row--amount--"+(e.amount>0?"positive":"negative")+'">',amountEnd:"</span>",transactionAmount:e.amount<0?e.amount:"+"+e.amount}))}),(0,i.jsx)("p",{children:(0,N.UM)(a.t("CREDITS_TRANSACTIONS_LIST_BALANCE",{boldStart:'<span className="'+h+'Row--balance">',boldEnd:"</span>",transactionBalance:e.balance}))})]})]})]})}))})}_.displayName="TableTransactionListMobile",_.propTypes={transactions:o().object};var R=a("bPwt"),C=a("Yk0W"),I=function(e){var s=e.userId,a=e.children,n=(0,l.r)().domain,t=(0,C.Z)((function(){return n.get("get_user_transactions_user_use_case").execute({userId:s})})),r=t.isLoading,c=t.data,o=t.isError;return r?(0,i.jsx)(R.Z,{}):o?(0,i.jsx)("div",{}):a({transactions:c,isError:o,isLoading:r})},A=I;I.propTypes={userId:o().string.isRequired,children:o().node};var E="ma-TableTransactionList";function v(e){var s=e.transactions;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:E+"--desktop",children:(0,i.jsx)(j,{transactions:s})}),(0,i.jsx)("div",{className:E+"--mobile",children:(0,i.jsx)(_,{transactions:s})})]})}v.displayName="TableTransactionList",v.State=A,v.propTypes={transactions:o().object};var f=a("FhAj"),g=a("tLCh"),b="ma-BuyCreditsTransactions";function D(){var e=(0,l.r)(),s=e.i18n,a=e.domain;return(0,i.jsxs)("div",{className:""+b,children:[(0,i.jsx)("p",{className:b+"-title",children:s.t("CREDITS_TRANSACTIONS_NO_CREDITS_TITLE")}),(0,i.jsx)("p",{className:b+"-subtitle",children:s.t("CREDITS_TRANSACTIONS_PURCHASES_NO_CREDITS_SUBTITLE")}),(0,i.jsx)(f.ZP,{design:"solid",onClick:function(e){e.stopPropagation();var s=a.get("config").get("TRACKING_EVENTS_NAMES").RECHARGE_CREDITS_CLICKED,n=a.get("config").get("PAGES").CREDITS_TRANSACTIONS;a.get("call_link_tracking_use_case").execute({page:n,event:s,data:{hit_origin:"my credits transactions and recharges"}})},linkFactory:g.Z,link:!0,to:"/creditos/recargar",children:s.t("CREDITS_TRANSACTIONS_PURCHASES_NO_CREDITS_BUTTON")})]})}D.displayName="BuyCreditsTransactions",D.propTypes={};var y="ma-ContentCreditsTransactionsDesktop";function Z(e){var s=e.user,a=(0,l.r)().i18n,n=(0,T.tv)(),t=[{label:a.t("BREADCRUMB_MY_ADS"),url:a.t("LINK_MY_ADS")},{label:a.t("BREADCRUMB_CREDITS_TRANSACTIONS_PURCHASES")}];return(0,i.jsxs)("div",{className:""+y,children:[(0,i.jsx)("div",{className:y+"Breadcrumb",children:(0,i.jsx)(u.Z,{items:t,defaultIsExpanded:!0})}),(0,i.jsx)(m.ZP,{as:"h1",className:y+"Title",size:m.ZP.sizeTypes["2xl"],fontWeight:m.ZP.fontWeightTypes.bold,i18nKey:"CREDITS_TRANSACTIONS_PRUCHASES_TITLE"}),(0,i.jsxs)("div",{className:y+"Tabs",children:[(0,i.jsx)("div",{className:y+"TabsElement selected",children:(0,i.jsx)("span",{children:a.t("CREDITS_TRANSACTIONS_PRUCHASES_TAB1")})}),(0,i.jsx)("span",{className:y+"TabsElement",onClick:function(){return n.push(a.url("/creditos/facturas"))},children:a.t("CREDITS_TRANSACTIONS_PRUCHASES_TAB2")})]}),(0,i.jsx)("div",{className:y+"Body",children:(0,i.jsx)(v.State,{userId:s.userId,children:function(e){return e.transactions.length?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,(0,d.Z)({},e)),!e.isLoading&&(0,i.jsxs)("div",{children:[(0,i.jsx)(S.Z.State,{userId:s.userId,children:function(e){return(0,i.jsx)(S.Z,{user:s,billingData:e.data,refetch:e.refetch})}}),(0,i.jsx)(p.Z,{})]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)(S.Z.State,{userId:s.userId,children:function(e){return(0,i.jsx)(S.Z,{user:s,billingData:e.data,refetch:e.refetch})}}),(0,i.jsx)(p.Z,{})]})]})}})})]})}Z.displayName="ContentCreditsTransactionsDesktop",Z.propTypes={user:o().object.isRequired,data:o().object.isRequired,refetch:o().func.isRequired,transactions:o().array,isLoading:o().bool};var L="ma-ContentCreditsTransactionsMobile";function B(e){var s=e.user,a=(0,l.r)().i18n,n=(0,T.tv)(),t=[{label:a.t("BREADCRUMB_MY_ADS"),url:a.t("LINK_MY_ADS")},{label:a.t("BREADCRUMB_CREDITS_TRANSACTIONS_PURCHASES")}];return(0,i.jsxs)("div",{className:""+L,children:[(0,i.jsx)("div",{className:L+"Breadcrumb",children:(0,i.jsx)(u.Z,{items:t,defaultIsExpanded:!0})}),(0,i.jsx)(m.ZP,{as:"h1",className:L+"Title",size:m.ZP.sizeTypes["2xl"],fontWeight:m.ZP.fontWeightTypes.bold,i18nKey:"CREDITS_TRANSACTIONS_PRUCHASES_TITLE"}),(0,i.jsx)(S.Z.State,{userId:s.userId,children:function(e){return(0,i.jsx)(S.Z,{user:s,billingData:e.data,refetch:e.refetch})}}),(0,i.jsxs)("div",{className:L+"Tabs",children:[(0,i.jsx)("div",{className:L+"TabsElement selected",children:(0,i.jsx)("span",{children:a.t("CREDITS_TRANSACTIONS_PRUCHASES_TAB1")})}),(0,i.jsx)("span",{className:L+"TabsElement",onClick:children:a.t("CREDITS_TRANSACTIONS_PRUCHASES_TAB2")})]}),(0,i.jsx)("div",{className:L+"Body",children:(0,i.jsx)(v.State,{userId:s.userId,children:function(e){return e.transactions.length?(0,i.jsx)(v,(0,d.Z)({},e)):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{}),(0,i.jsx)(p.Z,{})]})}})})]})}B.displayName="ContentCreditsTransactionsMobile",B.propTypes={user:o().object.isRequired,data:o().object.isRequired,refetch:o().func.isRequired,transactions:o().array};var O="ma-ContentCreditsTransactions";function U(e){var s=e.user;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:O+"--desktop",children:(0,i.jsx)(Z,{user:s})}),(0,i.jsx)("div",{className:O+"--mobile",children:(0,i.jsx)(B,{user:s})})]})}U.displayName="ContentCreditsTransactions",U.propTypes={user:o().object.isRequired};var H=a("CjDN"),P=a("Bd1x"),M=a("9Y+p"),w=a("IBpw"),k=a("h8GR"),G=(0,H.Z)(U),F=function(e){var s=e.page,a=e.seoDefinition;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(P.Z,{isLargeWidth:!0,children:(0,i.jsxs)(M.Z,{children:[(0,i.jsx)(w.Z,{seoDefinition:a}),(0,i.jsx)(k.Z,{page:s}),(0,i.jsx)(P.Z.Header,{page:s}),(0,i.jsx)(P.Z.Body,{children:(0,i.jsx)(P.Z.MainContent,{children:(0,i.jsx)(G,{})})})]})}),(0,i.jsx)(P.Z.Footer,{})]})};F.displayName="CreditsTransactions",F.getInitialProps=function(){var e=(0,n.Z)(r().mark((function e(s){var a,n,t,i,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.context.domain,n=a.get("config").get("PAGES"),e.next=4,a.get("get_definition_by_page_seo_use_case").execute({page:n.CREDITS_TRANSACTIONS});case 4:return t=e.sent,i=t[0],c=t[1],i&&console.error(i),e.abrupt("return",{page:n.CREDITS_TRANSACTIONS,seoDefinition:c||{title:"HOME_SEO_TITLE",meta:[],link:[]}});case 9:case"end":return e.stop()}}),e)})));return ();var q=F},Viv2:]);