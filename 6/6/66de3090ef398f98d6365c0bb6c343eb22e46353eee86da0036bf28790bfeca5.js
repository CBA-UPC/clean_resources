"use strict";(self.webpackChunkcomb_trade=self.webpackChunkcomb_trade||[]).push([[82360,86061],{93595:(t,e,r)=>{r.d(e,{Z:()=>b});var a=r(15671),_=r(43144),n=r(53640),i=r(60136),o=r(87363),p=r.n(o),Z=r(43709),s=r(14300),l=r(83437),c=r(64558),d=r(45892),u=r(64566),v=r(34319),x=r(95898),f=r(45263),m=function(t){function e(){return(0,a.Z)(this,e),(0,n.Z)(this,e,arguments)}return(0,i.Z)(e,t),(0,_.Z)(e,[{key:"render",value:function(){var t=v.Z.sideTab,e=x.Z.isDoubleCols,r=x.Z.colors;return(0,f.jsx)(c.Z,{when:!e,children:(0,f.jsxs)(l.Z.Segmented,{className:"height-auto margin-top-12",average:!0,hideContent:!0,color:r[t],size:l.Z.SIZE.sm,activeId:t,onChange:u.Z.setSideTab,children:[(0,f.jsx)(l.Z.TabPane,{tab:(0,s.O4)("spot_orderplace_tab_buy"),id:d.VW.BUY}),(0,f.jsx)(l.Z.TabPane,{tab:(0,s.O4)("trading_arb_order_confirm_content_common_sell"),id:d.VW.SELL})]})})}}]),e}(p().Component);const b=(0,Z.observer)(m)},35823:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r(48327).Z},40294:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});const a=r(97406).default},97406:(t,e,r)=>{r.r(e),r.d(e,{default:()=>b});var a=r(15671),_=r(43144),n=r(53640),i=r(60136),o=r(87363),p=r.n(o),Z=r(43709),s=r(91585),l=r(93595),c=r(77658),d=r(93877),u=r(35823),v=r(11954),x=r(31659),f=r(45263),m=function(t){function e(){return(0,a.Z)(this,e),(0,n.Z)(this,e,arguments)}return(0,i.Z)(e,t),(0,_.Z)(e,[{key:"render",value:function(){return(0,f.jsxs)(p().Fragment,{children:[(0,f.jsx)(s.Z,{}),(0,f.jsx)(l.Z,{}),(0,f.jsx)(x.Z,{}),(0,f.jsx)(c.Z,{})]})}}]),e}(p().Component);const b=(0,d.Lx)({Action:u.Z,Store:v.Z})((0,Z.observer)(m))},11954:(t,e,r)=>{r.d(e,{Z:()=>K});var a=r(1413),_=r(44925),n=r(49142),i=r(4942),o=r(15671),p=r(43144),Z=r(53640),s=r(97326),l=r(60136),c=(r(43612),r(27821)),d=r(54222),u=r(63673),v=d.GZ.PX_LIMIT,x=d.GZ.PX_SPREAD,f=d.GZ.ALL_SZ,m=d.GZ.AVG_SZ,b=d.GZ.TIME_INTERVAL,w=d.GZ.PX_VAR,M=(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},x,{field:x,langKey:"trade_twap_botpopup_title_twap_variance"}),w,{field:w,langKey:"trade_twap_bot_title_price_var"}),v,{field:v,langKey:"trade_twap_botpopup_title_twap_price_limit"}),b,{field:b,langKey:"trade_twap_botpopup_title_twap_interval"}),m,{field:m,langKey:"trade_twap_botpopup_title_twap_average_amount"}),f,{field:f,langKey:"trade_twap_botpopup_title_twap_total_amount"}),G=r(60244),I=r(36783),P=d.GZ.PX_LIMIT,g=d.GZ.PX_SPREAD,h=d.GZ.PX_LIMIT_MAX,A=d.GZ.PX_LIMIT_MIN,T=d.GZ.ALL_SZ,E=d.GZ.AVG_SZ,R=d.GZ.PX_SPREAD_MAX,j=d.GZ.PX_SPREAD_MIN,L=d.GZ.PX_VAR,O=d.GZ.RECOM_VAR,V=d.GZ.PX_TYPE,S=d.GZ.ALL_SZ_MAX,X=d.GZ.ALL_SZ_MIN,y=d.GZ.PX_VAR_MAX,C=d.GZ.PX_VAR_MIN,k=d.GZ.TIME_INTERVAL,N=d.GZ.TIME_INTERVAL_MAX,D=d.GZ.TIME_INTERVAL_MIN,F=d.GZ.TIME_INTERVAL_RECOM,K=function(t){function e(){var t;return(0,o.Z)(this,e),(t=(0,Z.Z)(this,e)).form=(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},g,""),L,""),P,""),E,""),T,""),V,u.g8.SPREAD),k,""),t.slider=(0,i.Z)({},T,0),t.cvtPriceFields=[g,P],t.cvtSizeFields=[E,T],t.cvtPerFields=[L],t.errors=(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},g,""),L,""),P,""),E,""),T,""),L,""),k,""),(0,c.makeObservable)((0,s.Z)(t),{form:c.override,slider:c.override,cvtPriceFields:c.observable,cvtSizeFields:c.observable,cvtPerFields:c.observable,valid:c.computed,errors:c.override,isPxVar:c.computed,fields:c.override}),t}return(0,l.Z)(e,t),(0,p.Z)(e,[{key:"valid",get:function(){var t,e=I.Z.config,r=e.pxMax,a=e.pxMin,_=e.amountMax,n=e.amountMin,o=e.pxPercentageMax,p=e.pxPercentageMin,Z=e.pxRangeMax,s=e.pxRangeMin,l=e.timeIntervalMax,c=e.timeIntervalMin,d=e.pxPercentageRec,u=e.timeIntervalRec;return t={},(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)(t,R,Z),j,s),y,o),C,p),h,r),A,a),S,_),X,n),N,l),D,c),(0,i.Z)((0,i.Z)(t,O,d),F,u)}},{key:"isPxVar",get:function(){return this.form[V]===u.g8.VAR}},{key:"fields",get:function(){var t=M[g],e=M[L],r=(0,_.Z)(M,[g,L].map(n.Z));return this.isPxVar?(0,a.Z)((0,i.Z)({},L,e),r):(0,a.Z)((0,i.Z)({},g,t),r)}}]),e}(G.Z)},31659:(t,e,r)=>{r.d(e,{Z:()=>V});var a=r(15671),_=r(43144),n=r(53640),i=r(60136),o=r(87363),p=r.n(o),Z=r(43709),s=r(56871),l=r(14300),c=r(54222),d=r(67851),u=r(19708),v=r(45263),x=c.GZ.ALL_SZ,f=c.GZ.AVG_SZ;function m(){return(0,v.jsxs)(p().Fragment,{children:[(0,v.jsx)(u.Z,{title:(0,l.O4)("twap_orderplace_title3_set_total_avg_amount")}),(0,v.jsx)(d.Z,{field:f,preText:(0,l.O4)("trade_twap_botpopup_title_twap_average_amount"),preDescription:(0,l.O4)("trade_twap_botpopup_tooltip_twap_average_amount")}),(0,v.jsx)(d.Z,{field:x,preText:(0,l.O4)("trade_twap_botpopup_title_twap_total_amount"),preDescription:(0,l.O4)("trade_twap_botpopup_tooltip_twap_total_amount")})]})}r(11244);var b=r(72365),w=r(16345),M=r(93877),G=c.GZ.TIME_INTERVAL,I=c.GZ.TIME_INTERVAL_RECOM,P=function(t){function e(){return(0,a.Z)(this,e),(0,n.Z)(this,e,arguments)}return(0,i.Z)(e,t),(0,_.Z)(e,[{key:"render",value:function(){var t=this.context.store.valid;return(0,v.jsxs)(p().Fragment,{children:[(0,v.jsx)(u.Z,{title:(0,l.O4)("twap_orderplace_title2_set_time_interval")}),(0,v.jsx)(w.Z,{field:G,placeholder:"".concat((0,l.O4)("trade_twap_botpopup_title_twap_recommend")," ").concat(t[I]),preText:(0,l.O4)("trade_twap_botpopup_title_twap_interval"),preDescription:(0,l.O4)("trade_twap_botpopup_tooltip_twap_interval"),suffix:(0,v.jsx)(b.Z,{text:(0,l.O4)("twap_orderplace_input_interval_second"),isSuffix:!0})})]})}}]),e}(p().Component);const g=(0,M.Yr)((0,Z.observer)(P));var h=r(40128),A=r(63672),T=c.GZ.PX_LIMIT,E=c.GZ.RECOM_VAR,R=c.GZ.PX_TYPE,j=function(t){function e(){return(0,a.Z)(this,e),(0,n.Z)(this,e,arguments)}return(0,i.Z)(e,t),(0,_.Z)(e,[{key:"render",value:function(){var t=this.context.store,e=t.form,r=t.valid[E];return(0,v.jsxs)(p().Fragment,{children:[(0,v.jsx)(u.Z,{title:(0,l.O4)("twap_orderplace_title1_set_price_range")}),(0,v.jsx)(A.Z,{pxType:e[R],preText:(0,l.O4)("trade_twap_botpopup_title_twap_variance"),preDescription:(0,l.O4)("trade_twap_botpopup_tooltip_twap_variance"),placeholder:r?"".concat((0,l.O4)("trade_twap_botpopup_title_twap_recommend")," ").concat(100*r):""}),(0,v.jsx)(h.Z,{field:T,preText:(0,l.O4)("trade_twap_botpopup_title_twap_price_limit"),preDescription:(0,l.O4)("trade_twap_botpopup_tooltip_twap_price_limit")})]})}}]),e}(p().Component);const L=(0,M.Yr)((0,Z.observer)(j));var O=function(t){function e(){return(0,a.Z)(this,e),(0,n.Z)(this,e,arguments)}return(0,i.Z)(e,t),(0,_.Z)(e,[{key:"render",value:function(){return(0,v.jsxs)(p().Fragment,{children:[(0,v.jsx)(L,{}),(0,v.jsx)(g,{}),(0,v.jsx)(m,{}),(0,v.jsx)(s.Z,{})]})}}]),e}(p().Component);const V=(0,Z.observer)(O)}}]);
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/comb-trade/common/Twap-Margin.fd5ba019.js.mapround:var(--okd-color-background-surface-primary);--okd-alert-normal-title-color:var(--okd-color-content-primary);--okd-alert-normal-icon-color:var(--okd-color-content-primary);--okd-alert-normal-desc-color:var(--okd-color-content-secondary);--okd-alert-normal-action-color:var(--okd-color-content-primary);--okd-alert-normal-link-color:var(--okd-color-content-secondary);--okd-alert-normal-accent-color:var(--okd-color-content-primary);--okd-alert-success-background:rgba(49,189,101,.08);--okd-alert-success-title-color:var(--okd-color-content-primary);--okd-alert-success-icon-color:var(--okd-color-semantic-positive);--okd-alert-success-desc-color:var(--okd-color-content-secondary);--okd-alert-success-action-color:var(--okd-color-content-primary);--okd-alert-success-link-color:var(--okd-color-content-secondary);--okd-alert-success-accent-color:var(--okd-color-semantic-positive);--okd-alert-info-background:var(--okd-color-background-surface-primary);--okd-alert-info-title-color:var(--okd-color-content-primary);--okd-alert-info-icon-color:var(--okd-color-content-primary);--okd-alert-info-desc-color:var(--okd-color-content-secondary);--okd-alert-info-action-color:var(--okd-color-content-primary);--okd-alert-info-link-color:var(--okd-color-content-secondary);--okd-alert-info-accent-color:var(--okd-color-content-primary);--okd-alert-warn-background:rgba(255,177,23,.08);--okd-alert-warn-title-color:var(--okd-color-content-primary);--okd-alert-warn-icon-color:var(--okd-color-semantic-notice);--okd-alert-warn-desc-color:var(--okd-color-content-secondary);--okd-alert-warn-action-color:var(--okd-color-content-primary);--okd-alert-warn-link-color:var(--okd-color-content-secondary);--okd-alert-warn-accent-color:var(--okd-color-semantic-notice);--okd-alert-error-background:rgba(235,75,109,.08);--okd-alert-error-title-color:var(--okd-color-content-primary);--okd-alert-error-icon-color:var(--okd-color-semantic-negative);--okd-alert-error-desc-color:var(--okd-color-content-secondary);--okd-alert-error-action-color:var(--okd-color-content-primary);--okd-alert-error-link-color:var(--okd-color-content-secondary);--okd-alert-error-accent-color:var(--okd-color-semantic-negative);--okd-alert-box-padding-vertical:8px;--okd-alert-box-padding-horizontal:16px;--okd-alert-box-border-radius:8px;--okd-alert-accent-width:4px;--okd-alert-title-font-size:var(--okd-font-size-md);--okd-alert-title-line-height:var(--okd-line-height-md);--okd-alert-text-font-size:12px;--okd-alert-text-line-height:var(--okd-line-height-md);--okd-alert-action-font-size:12px;--okd-alert-action-line-height:var(--okd-line-height-md);--okd-alert-icon-tip-size:20px;--okd-alert-icon-close-size:20px;--okd-alert-close-color:var(--okd-color-gray-300);--okd-alert-box-margin-left:8px;--okd-alert-desc-margin-top:4px;--okd-alert-action-box-margin-top:8px;--okd-alert-action-box-margin-bottom:0px;--okd-alert-action-margin-left:16px}.theme-dark{--okd-alert-normal-background:var(--okd-color-background-surface-primary);--okd-alert-normal-title-color:var(--okd-color-content-primary);--okd-alert-normal-icon-color:var(--okd-color-content-primary);--okd-alert-normal-desc-color:var(--okd-color-content-secondary);--okd-alert-normal-action-color:var(--okd-color-content-primary);--okd-alert-normal-link-color:var(--okd-color-content-secondary);--okd-alert-normal-accent-color:var(--okd-color-content-primary);--okd-alert-success-background:rgba(37,167,80,.08);--okd-alert-success-title-color:var(--okd-color-content-primary);--okd-alert-success-icon-color:var(--okd-color-semantic-positive);--okd-alert-success-desc-color:var(--okd-color-content-secondary);--okd-alert-success-action-color:var(--okd-color-content-primary);--okd-alert-success-link-color:var(--okd-color-content-secondary);--okd-alert-success-accent-color:var(--okd-color-semantic-positive);--okd-alert-info-background:var(--okd-color-background-surface-primary);--okd-alert-info-title-color:var(--okd-color-content-primary);--okd-alert-info-icon-color:var(--okd-color-content-primary);--okd-alert-info-desc-color:var(--okd-color-content-secondary);--okd-alert-info-action-color:var(--okd-color-content-primary);--okd-alert-info-link-color:var(--okd-color-content-secondary);--okd-alert-info-accent-color:var(--okd-color-content-primary);--okd-alert-warn-background:rgba(255,177,23,.08);--okd-alert-warn-title-color:var(--okd-color-content-primary);--okd-alert-warn-icon-color:var(--okd-color-semantic-notice);--okd-alert-warn-desc-color:var(--okd-color-content-secondary);--okd-alert-warn-action-color:var(--okd-color-content-primary);--okd-alert-warn-link-color:var(--okd-color-content-secondary);--okd-alert-warn-accent-color:var(--okd-color-semantic-notice);--okd-alert-error-background:rgba(202,63,100,.08);--okd-alert-error-title-color:var(--okd-color-content-primary);--okd-alert-error-icon-color:var(--okd-color-semantic-negative);--okd-alert-error-desc-color:var(--okd-color-content-secondary);--okd-alert-error-action-color:var(--okd-color-content-primary);--okd-alert-error-link-color:var(--okd-color-content-secondary);--okd-alert-error-accent-color:var(--okd-color-semantic-negative);--okd-alert-box-padding-vertical:8px;--okd-alert-box-padding-horizontal:16px;--okd-alert-box-border-radius:8px;--okd-alert-accent-width:4px;--okd-alert-title-font-size:var(--okd-font-size-md);--okd-alert-title-line-height:var(--okd-line-height-md);--okd-alert-text-font-size:12px;--okd-alert-text-line-height:var(--okd-line-height-md);--okd-alert-action-font-size:12px;--okd-alert-action-line-height:var(--okd-line-height-md);--okd-alert-icon-tip-size:20px;--okd-alert-icon-close-size:20px;--okd-alert-close-color:var(--okd-color-gray-300);--okd-alert-box-margin-left:8px;--okd-alert-desc-margin-top:4px;--okd-alert-action-box-margin-top:8px;--okd-alert-action-box-margin-bottom:0px;--okd-alert-action-margin-left:16px}.theme-oklink{--okd-alert-normal-background:var(--okd-color-gray-050);--okd-alert-normal-title-color:var(--okd-color-gray-900);--okd-alert-normal-icon-color:var(--okd-color-gray-700);--okd-alert-normal-desc-color:var(--okd-color-gray-800);--okd-alert-normal-action-color:var(--okd-color-gray-900);--okd-alert-normal-link-color:var(--okd-color-gray-900);--okd-alert-normal-accent-color:var(--okd-color-gray-700);--okd-alert-success-background:var(--okd-color-green-050);--okd-alert-success-title-color:var(--okd-color-text-amplifed);--okd-alert-success-icon-color:var(--okd-color-fq-positive);--okd-alert-success-desc-color:var(--okd-color-gray-700);--okd-alert-success-action-color:var(--okd-color-purple-900);--okd-alert-success-link-color:var(--okd-color-text-amplifed);--okd-alert-success-accent-color:var(--okd-color-green-700);--okd-alert-info-background:var(--okd-color-background-2);--okd-alert-info-title-color:var(--okd-color-text-amplifed);--okd-alert-info-icon-color:var(--okd-color-fq-neutral);--okd-alert-info-desc-color:var(--okd-color-gray-700);--okd-alert-info-action-color:var(--okd-color-purple-900);--okd-alert-info-link-color:var(--okd-color-text-amplifed);--okd-alert-info-accent-color:var(--okd-color-purple-700);--okd-alert-warn-background:var(--okd-color-orange-050);--okd-alert-warn-title-color:var(--okd-color-text-amplifed);--okd-alert-warn-icon-color:var(--okd-color-fq-warning);--okd-alert-warn-desc-color:var(--okd-color-gray-700);--okd-alert-warn-action-color:var(--okd-color-purple-900);--okd-alert-warn-link-color:var(--okd-color-text-amplifed);--okd-alert-warn-accent-color:var(--okd-color-orange-700);--okd-alert-error-background:var(--okd-color-red-050);--okd-alert-error-title-color:var(--okd-color-text-amplifed);--okd-alert-error-icon-color:var(--okd-color-fq-critical);--okd-alert-error-desc-color:var(--okd-color-gray-700);--okd-alert-error-action-color:var(--okd-color-purple-900);--okd-alert-error-link-color:var(--okd-color-text-amplifed);--okd-alert-error-accent-color:var(--okd-color-red-700);--okd-alert-box-padding-vertical:8px;--okd-alert-box-padding-horizontal:16px;--okd-alert-box-border-radius:8px;--okd-alert-accent-width:4px;--okd-alert-title-font-size:var(--okd-font-size-md);--okd-alert-title-line-height:var(--okd-line-height-md);--okd-alert-text-font-size:var(--okd-font-size-md);--okd-alert-text-line-height:var(--okd-line-height-md);--okd-alert-action-font-size:12px;--okd-alert-action-line-height:var(--okd-line-height-md);--okd-alert-icon-tip-size:20px;--okd-alert-icon-close-size:20px;--okd-alert-close-color:var(--okd-color-gray-300);--okd-alert-box-margin-left:8px;--okd-alert-desc-margin-top:4px;--okd-alert-action-box-margin-top:8px;--okd-alert-action-box-margin-bottom:0px;--okd-alert-action-margin-left:16px}.okui-alert{border-radius:var(--okd-alert-box-border-radius);box-sizing:border-box;display:inline-flex;padding:var(--okd-alert-box-padding-vertical) var(--okd-alert-box-padding-horizontal);position:relative;width:100%}.okui-alert.closable{padding-left:44px}.okui-alert *{box-sizing:border-box}.okui-alert .okui-alert-icon{align-items:center;display:flex;font-size:20px;font-size:var(--okd-alert-icon-tip-size,20px);height:20px;height:var(--okd-alert-icon-tip-size,20px);justify-content:center;width:20px;width:var(--okd-alert-icon-tip-size,20px)}.okui-alert-msg-box{display:flex;flex-direction:column;flex-grow:1}.okui-alert-icon+.okui-alert-msg-box{margin-right:15px;margin-right:var(--okd-alert-box-margin-left,15px)}.okui-alert-title{font-size:var(--okd-alert-title-font-size);font-weight:500;line-height:var(--okd-alert-title-line-height)}.okui-alert-desc{font-size:var(--okd-alert-text-font-size);font-weight:400;line-height:var(--okd-alert-text-line-height)}.okui-alert-title+.okui-alert-desc{margin-top:4px;margin-top:var(--okd-alert-desc-margin-top,4px)}.okui-alert-link{font-weight:500;text-decoration:none}.okui-alert-desc-list{-webkit-padding-start:17px;-moz-padding-start:17px;-webkit-margin-before:4px;-webkit-margin-after:0;margin-block-end:0;margin-block-start:4px;padding-inline-start:17px}.okui-alert-action-box{margin-bottom:8px;margin-bottom:var(--okd-alert-action-box-margin-bottom,8px);margin-top:21px;margin-top:var(--okd-alert-action-box-margin-top,21px)}.okui-alert-action{background:transparent;border:0;cursor:pointer;font-family:inherit;font-size:var(--okd-alert-action-font-size);font-weight:500;line-height:var(--okd-alert-action-line-height);outline:0;padding:0}.okui-alert-action+.okui-alert-action{margin-right:32px;margin-right:var(--okd-alert-action-margin-left,32px)}.okui-alert .okui-alert-close{cursor:pointer;font-size:20px;font-size:var(--okd-alert-icon-close-size,20px);left:12px;line-height:1;position:absolute}.okui-alert.normal-alert{background:var(--okd-alert-normal-background)}.okui-alert.normal-alert .okui-alert-icon{color:var(--okd-alert-normal-icon-color)}.okui-alert.normal-alert .okui-alert-title{color:var(--okd-alert-normal-title-color)}.okui-alert.normal-alert .okui-alert-desc{color:var(--okd-alert-normal-desc-color)}.okui-alert.normal-alert .okui-alert-close{color:var(--okd-color-gray-300);color:var(--okd-alert-close-color,var(--okd-color-gray-300))}.okui-alert.normal-alert .okui-alert-link{border-bottom:1px solid var(--okd-alert-normal-link-color);color:var(--okd-alert-normal-link-color);text-decoration:none}.okui-alert.normal-alert .okui-alert-action{color:var(--okd-alert-normal-action-color)}.okui-alert.success-alert{background:var(--okd-alert-success-background)}.okui-alert.success-alert .okui-alert-icon{color:var(--okd-alert-success-icon-color)}.okui-alert.success-alert .okui-alert-title{color:var(--okd-alert-success-title-color)}.okui-alert.success-alert .okui-alert-desc{color:var(--okd-alert-success-desc-color)}.okui-alert.success-alert .okui-alert-close{color:var(--okd-color-gray-300);color:var(--okd-alert-close-color,var(--okd-color-gray-300))}.okui-alert.success-alert .okui-alert-link{border-bottom:1px solid var(--okd-alert-success-link-color);color:var(--okd-alert-success-link-color);text-decoration:none}.okui-alert.success-alert .okui-alert-action{color:var(--okd-alert-success-action-color)}.okui-alert.info-alert{background:var(--okd-alert-info-background)}.okui-alert.info-alert .okui-alert-icon{color:var(--okd-alert-info-icon-color)}.okui-alert.info-alert .okui-alert-title{color:var(--okd-alert-info-title-color)}.okui-alert.info-alert .okui-alert-desc{color:var(--okd-alert-info-desc-color)}.okui-alert.info-alert .okui-alert-close{color:var(--okd-color-gray-300);color:var(--okd-alert-close-color,var(--okd-color-gray-300))}.okui-alert.info-alert .okui-alert-link{border-bottom:1px solid var(--okd-alert-info-link-color);color:var(--okd-alert-info-link-color);text-decoration:none}.okui-alert.info-alert .okui-alert-action{color:var(--okd-alert-info-action-color)}.okui-alert.warn-alert{background:var(--okd-alert-warn-background)}.okui-alert.warn-alert .okui-alert-icon{color:var(--okd-alert-warn-icon-color)}.okui-alert.warn-alert .okui-alert-title{color:var(--okd-alert-warn-title-color)}.okui-alert.warn-alert .okui-alert-desc{color:var(--okd-alert-warn-desc-color)}.okui-alert.warn-alert .okui-alert-close{color:var(--okd-color-gray-300);color:var(--okd-alert-close-color,var(--okd-color-gray-300))}.okui-alert.warn-alert .okui-alert-link{border-bottom:1px solid var(--okd-alert-warn-link-color);color:var(--okd-alert-warn-link-color);text-decoration:none}.okui-alert.warn-alert .okui-alert-action{color:var(--okd-alert-warn-action-color)}.okui-alert.error-alert{background:var(--okd-alert-error-background)}.okui-alert.error-alert .okui-alert-icon{color:var(--okd-alert-error-icon-color)}.okui-alert.error-alert .okui-alert-title{color:var(--okd-alert-error-title-color)}.okui-alert.error-alert .okui-alert-desc{color:var(--okd-alert-error-desc-color)}.okui-alert.error-alert .okui-alert-close{color:var(--okd-color-gray-300);color:var(--okd-alert-close-color,var(--okd-color-gray-300))}.okui-alert.error-alert .okui-alert-link{border-bottom:1px solid var(--okd-alert-error-link-color);color:var(--okd-alert-error-link-color);text-decoration:none}.okui-alert.error-alert .okui-alert-action{color:var(--okd-alert-error-action-color)}.theme-dark,:root{--okd-hyperlink-primary-default-color:var(--okd-color-content-primary);--okd-hyperlink-primary-default-icon-color:var(--okd-color-content-primary);--okd-hyperlink-primary-default-underline-color:var(--okd-color-content-primary);--okd-hyperlink-primary-hover-color:var(--okd-color-content-secondary);--okd-hyperlink-primary-hover-icon-color:var(--okd-color-content-secondary);--okd-hyperlink-primary-hover-underline-color:var(--okd-color-content-secondary);--okd-hyperlink-secondary-default-color:var(--okd-color-content-primary);--okd-hyperlink-secondary-default-icon-color:var(--okd-color-content-primary);--okd-hyperlink-secondary-default-underline-color:var(--okd-color-content-primary);--okd-hyperlink-secondary-hover-color:var(--okd-color-content-secondary);--okd-hyperlink-secondary-hover-icon-color:var(--okd-color-content-secondary);--okd-hyperlink-secondary-hover-underline-color:var(--okd-color-content-secondary);--okd-hyperlink-xs-font-size:12px;--okd-hyperlink-sm-font-size:14px;--okd-hyperlink-md-font-size:16px;--okd-hyperlink-lg-font-size:18px;--okd-hyperlink-xs-icon-font-size:12px;--okd-hyperlink-sm-icon-font-size:16px;--okd-hyperlink-md-icon-font-size:16px;--okd-hyperlink-lg-icon-font-size:16px;--okd-hyperlink-xs-line-height:16px;--okd-hyperlink-sm-line-height:16px;--okd-hyperlink-md-line-height:20px;--okd-hyperlink-lg-line-height:24px;--okd-hyperlink-medium-font-weight:500;--okd-hyperlink-medium-hover-font-weight:500;--okd-hyperlink-muted-font-weight:400;--okd-hyperlink-muted-hover-font-weight:400;--okd-hyperlink-amplified-font-weight:600;--okd-hyperlink-amplified-hover-font-weight:600;--okd-hyperlink-xs-icon-margin-left:0px;--okd-hyperlink-sm-icon-margin-left:0px;--okd-hyperlink-md-icon-margin-left:0px;--okd-hyperlink-lg-icon-margin-left:0px;--okd-hyperlink-reversed-default-color:var(--okd-color-content-inverse);--okd-hyperlink-reversed-default-icon-color:var(--okd-color-content-inverse);--okd-hyperlink-reversed-default-underline-color:var(--okd-color-content-inverse);--okd-hyperlink-reversed-hover-color:var(--okd-color-content-inverse);--okd-hyperlink-reversed-hover-icon-color:var(--okd-color-content-inverse);--okd-hyperlink-reversed-hover-underline-color:var(--okd-color-content-inverse)}.theme-oklink{--okd-hyperlink-primary-default-color:var(--okd-color-purple-900);--okd-hyperlink-primary-default-icon-color:var(--okd-color-purple-900);--okd-hyperlink-primary-default-underline-color:var(--okd-color-purple-900);--okd-hyperlink-primary-hover-color:var(--okd-color-purple-700);--okd-hyperlink-primary-hover-icon-color:var(--okd-color-purple-700);--okd-hyperlink-primary-hover-underline-color:var(--okd-color-purple-700);--okd-hyperlink-secondary-default-color:var(--okd-color-gray-700);--okd-hyperlink-secondary-default-icon-color:var(--okd-color-gray-700);--okd-hyperlink-secondary-default-underline-color:var(--okd-color-gray-700);--okd-hyperlink-secondary-hover-color:var(--okd-color-gray-900);--okd-hyperlink-secondary-hover-icon-color:var(--okd-color-gray-900);--okd-hyperlink-secondary-hover-underline-color:var(--okd-color-gray-900);--okd-hyperlink-xs-font-size:12px;--okd-hyperlink-sm-font-size:14px;--okd-hyperlink-md-font-size:16px;--okd-hyperlink-lg-font-size:18px;--okd-hyperlink-xs-icon-font-size:12px;--okd-hyperlink-sm-icon-font-size:16px;--okd-hyperlink-md-icon-font-size:16px;--okd-hyperlink-lg-icon-font-size:16px;--okd-hyperlink-xs-line-height:16px;--okd-hyperlink-sm-line-height:16px;--okd-hyperlink-md-line-height:20px;--okd-hyperlink-lg-line-height:24px;--okd-hyperlink-medium-font-weight:500;--okd-hyperlink-medium-hover-font-weight:500;--okd-hyperlink-muted-font-weight:400;--okd-hyperlink-muted-hover-font-weight:400;--okd-hyperlink-amplified-font-weight:600;--okd-hyperlink-amplified-hover-font-weight:600;--okd-hyperlink-xs-icon-margin-left:0px;--okd-hyperlink-sm-icon-margin-left:0px;--okd-hyperlink-md-icon-margin-left:0px;--okd-hyperlink-lg-icon-margin-left:0px}.okui-hyperlink-xs .okui-hyperlink-text{font-size:var(--okd-hyperlink-xs-font-size);line-height:var(--okd-hyperlink-xs-line-height)}.okui-hyperlink-xs .icon-arrow{font-size:var(--okd-hyperlink-xs-icon-font-size);margin-right:var(--okd-hyperlink-xs-icon-margin-left)}.okui-hyperlink-sm .okui-hyperlink-text{font-size:var(--okd-hyperlink-sm-font-size);line-height:var(--okd-hyperlink-sm-line-height)}.okui-hyperlink-sm .icon-arrow{font-size:var(--okd-hyperlink-sm-icon-font-size);margin-right:var(--okd-hyperlink-sm-icon-margin-left)}.okui-hyperlink-md .okui-hyperlink-text{font-size:var(--okd-hyperlink-md-font-size);line-height:var(--okd-hyperlink-md-line-height)}.okui-hyperlink-md .icon-arrow{font-size:var(--okd-hyperlink-md-icon-font-size);margin-right:var(--okd-hyperlink-md-icon-margin-left)}.okui-hyperlink-lg .okui-hyperlink-text{font-size:var(--okd-hyperlink-lg-font-size);line-height:var(--okd-hyperlink-lg-line-height)}.okui-hyperlink-lg .icon-arrow{font-size:var(--okd-hyperlink-lg-icon-font-size);margin-right:var(--okd-hyperlink-lg-icon-margin-left)}.okui-hyperlink-muted{font-weight:var(--okd-hyperlink-muted-font-weight)}.okui-hyperlink-muted:hover{font-weight:var(--okd-hyperlink-muted-hover-font-weight)}.okui-hyperlink-medium{font-weight:var(--okd-hyperlink-medium-font-weight)}.okui-hyperlink-medium:hover{font-weight:var(--okd-hyperlink-medium-hover-font-weight)}.okui-hyperlink-amplified{font-weight:var(--okd-hyperlink-amplified-font-weight)}.okui-hyperlink-amplified:hover{font-weight:var(--okd-hyperlink-amplified-hover-font-weight)}.okui-hyperlink-primary{color:var(--okd-hyperlink-primary-default-color)}.okui-hyperlink-primary .icon-arrow{color:var(--okd-hyperlink-primary-default-icon-color)}.okui-hyperlink-primary:hover{color:var(--okd-hyperlink-primary-hover-color)}.okui-hyperlink-primary:hover .okui-hyperlink-text{text-decoration:underline}.okui-hyperlink-primary:hover .icon-arrow{color:var(--okd-hyperlink-primary-hover-icon-color)}.okui-hyperlink-primary a,.okui-hyperlink-primary a:active,.okui-hyperlink-primary a:visited{color:var(--okd-hyperlink-primary-default-color)}.okui-hyperlink-secondary{color:var(--okd-hyperlink-secondary-default-color)}.okui-hyperlink-secondary .icon-arrow{color:var(--okd-hyperlink-secondary-default-icon-color)}.okui-hyperlink-secondary:hover{color:var(--okd-hyperlink-secondary-hover-color)}.okui-hyperlink-secondary:hover .okui-hyperlink-text{text-decoration:underline}.okui-hyperlink-secondary:hover .icon-arrow{color:var(--okd-hyperlink-secondary-hover-icon-color)}.okui-hyperlink-secondary a,.okui-hyperlink-secondary a:active,.okui-hyperlink-secondary a:visited{color:var(--okd-hyperlink-secondary-default-color)}.okui-hyperlink-reversed{color:var(--okd-hyperlink-reversed-default-color)}.okui-hyperlink-reversed .icon-arrow{color:var(--okd-hyperlink-reversed-default-icon-color)}.okui-hyperlink-reversed:hover{color:var(--okd-hyperlink-reversed-hover-color)}.okui-hyperlink-reversed:hover .okui-hyperlink-text{text-decoration:underline}.okui-hyperlink-reversed:hover .icon-arrow{color:var(--okd-hyperlink-reversed-hover-icon-color)}.okui-hyperlink-reversed a,.okui-hyperlink-reversed a:active,.okui-hyperlink-reversed a:visited{color:var(--okd-hyperlink-reversed-default-color)}.okui-hyperlink-text{text-decoration:none}.okui-hyperlink-underline .okui-hyperlink-text{text-decoration:underline}.okui-hyperlink-no-hover-underline:hover .okui-hyperlink-text{text-decoration:none}.okui-hyperlink{align-items:center;cursor:pointer;display:inline-flex}.okui-hyperlink .icon-arrow{font-weight:inherit}.index_notificationArea__xq77J{max-width:380px;min-width:380px}.Content_container__K728R{font-size:12px}.Content_item__zbyq1{align-items:center;display:flex;flex-direction:row;justify-content:space-between}.Content_item__zbyq1 .Content_itemLabel__a5VAH{margin-left:10px}.Content_item__zbyq1 .Content_checkbox__8RMVV{margin-left:0}.Content_splitLine__Ea\+of{border-bottom:1px solid var(--okd-color-gray-100);margin:16px 0;width:100%}.Content_layoutItem__iJoAM{background:var(--okd-color-background-3);border:1px solid var(--okd-color-background-3);border-radius:3px;box-sizing:border-box;cursor:pointer;height:92px;padding:7px 11px;width:82px}.Content_layoutItem__iJoAM:hover{border-color:var(--okd-color-gray-400)}.Content_layoutItem__iJoAM.Content_selected__cgS8S{border-color:var(--okd-color-gray-900)}.Content_layoutItem__iJoAM.Content_margin8__GGjAR{margin:0 8px}.Content_layoutContentWrap__hEjlK{background:var(--okd-color-background-1);border-radius:2px;box-sizing:border-box;height:100%;padding:4px}.Content_layoutContent__1nieb{background:var(--okd-color-background-2);border-radius:2px;box-sizing:border-box;color:var(--okd-color-text-amplifed);font-weight:700;padding:4px}.Content_activeLabel__j4DxC{display:inline-block;margin-left:4px}.Content_activeLabel__j4DxC:after{background:var(--okd-color-text-amplifed);content:"";display:block;height:2px;transform:translate(-4px);width:10px}.Content_inactiveLabel__-naKb{color:var(--okd-color-gray-400)}.Content_layout1__Gh7zn .Content_layoutContent__1nieb{height:100%}.Content_layout2__zgVjL .Content_layoutContent__1nieb{height:32px}.Content_layout2__zgVjL .Content_layoutContent__1nieb:first-child{margin-bottom:4px}.Content_layout3__HerJB{align-items:center;display:flex;flex-direction:row;justify-content:space-between}.Content_layout3__HerJB .Content_layoutContent__1nieb{height:100%;padding:4px 0;text-align:center;width:22px}.Content_layout3__HerJB .Content_layoutContent__1nieb:first-child{margin-left:4px}.index_container__nqVNz{align-items:center;display:flex;height:100%;padding-left:16px}.index_popDescBox__QByoC:not(.index_null__3Axz\+){background:var(--okd-color-background-2);padding:16px}.index_icon__6btq8:not(.index_null__3Axz\+){border-radius:6px;color:var(--okd-color-text-amplifed);cursor:pointer;display:block;font-size:22px;line-height:22px;padding:4px}.index_activeIcon__avjHG,.index_icon__6btq8:not(.index_null__3Axz\+):hover{background-color:var(--comb-trade-sidebar-icon-hover-bg)}.submit-btn-box{display:flex;justify-content:space-between}.submit-btn-box .submit-btn{flex:1 1}.submit-btn-box .submit-btn .submit-btn-content{display:flex;flex-wrap:wrap;justify-content:center}.submit-btn-box .submit-btn .submit-btn-content .amount-btn{font-size:12px;margin-right:4px}.submit-btn-box .submit-btn .submit-btn-content .demo-btn{font-size:12px;margin-right:4px;opacity:.4}.submit-btn-box .submit-btn.left-btn{margin-left:6px}.submit-btn-box .submit-btn.right-btn{margin-right:6px}.submit-btn-box .submit-btn.is-md.left-btn{margin-left:8px}.submit-btn-box .submit-btn.is-md.right-btn{margin-right:8px}.place-order-popup .place-order-inner-common{background-color:var(--comb-trade-place-order-submit-btn-sticky-bg);border-radius:6px}.place-order-popup .place-order-inner-common .place-order-form-box .submit-btn-box-container{background-color:var(--comb-trade-place-order-submit-btn-sticky-bg);bottom:0;margin:24px -2px 0;padding:8px 0 12px;position:-webkit-sticky;position:sticky}.place-order-pupup-title{background-color:var(--comb-trade-place-order-submit-btn-sticky-bg);cursor:-webkit-grab;cursor:grab}.setting-icon.popup-setting{border-radius:3px;color:var(--okd-color-gray-400);cursor:pointer;font-size:22px;left:50px;padding:2px;position:absolute;top:11px}.setting-icon.popup-setting:hover{background-color:var(--okd-color-background-surface-primary);border-radius:4px;color:var(--okd-color-gray-900)}.status-alert{border-radius:0!important}.status-alert-msg{color:var(--okd-color-fq-warning);font-size:14px;font-weight:400;line-height:20px;padding-left:26px}.status-alert-title{font-weight:500;margin-left:12px}.status-alert.box-padding{margin-bottom:1px;padding:12px 16px}.trade-box .trade-header-box .operation-box{align-items:center;display:flex}.trade-box .trade-header-box .ticker-opera{align-items:center;display:flex;justify-content:space-between;white-space:nowrap}.trade-box .trade-header-box .ticker-opera i{font-size:18px}.trade-box .trade-header-box .optionSetting{align-items:center;display:flex;gap:0 16px;min-width:177px}@media (min-width:768px){.trade-box .trade-header-box .optionSetting{min-height:46px}}.trade-box .trade-header-box .ticker-btn{color:var(--comb-color-icon-2);cursor:pointer;margin-right:12px;padding:10px 0;position:relative}.trade-box .trade-header-box .ticker-btn>span{color:var(--okd-color-text-secondary);margin-left:8px;margin-right:6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.trade-box .trade-header-box .ticker-btn.ticker-trading-btn{font-size:22px}.trade-box .trade-header-box .vertical-separator{background:var(--okd-color-line-secondary);height:12px;margin-right:4px;width:1px}.self .operation-box,.self .ticker-opera{align-items:center;display:flex}.self .ticker-opera{justify-content:space-between;white-space:nowrap}.self .ticker-opera i{font-size:18px}.self .optionSetting{align-items:center;display:flex;gap:0 16px;min-width:177px}@media (min-width:768px){.self .optionSetting{min-height:46px}}.self .ticker-btn{color:var(--comb-color-icon-2);cursor:pointer;margin-right:12px;padding:10px 0;position:relative}.self .ticker-btn>span{color:var(--okd-color-text-secondary);margin-left:8px;margin-right:6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.self .ticker-btn.ticker-trading-btn{font-size:22px}.self .vertical-separator{background:var(--okd-color-line-secondary);height:12px;margin-right:4px;width:1px}.trade-box .trade-header-box .strategy-select-box{align-items:center;color:var(--okd-color-text-light);display:flex;font-size:14px;line-height:16px;margin-left:8px;white-space:nowrap}.trade-box .trade-header-box .tools-arrow-icon{font-size:12px}.trade-box .trade-header-box .down-arrow{transform:rotate(-90deg)}.trade-box .trade-header-box{background:var(--okd-color-background-1);color:var(--okd-color-text-amplifed);display:flex;flex-direction:column}.trade-box .trade-header-box .header-left,.trade-box .trade-header-box .trade-row-box{align-items:center;display:flex;flex-direction:row;justify-content:space-between}@media (max-width:767px){.trade-box .trade-header-box .trade-row-box{border-bottom:1px solid var(--okd-color-gray-050);padding:0 16px}.trade-box .trade-header-box .trade-row-box.show-simple{align-items:flex-start;flex-direction:column}}@media (min-width:768px){.trade-box .trade-header-box .trade-row-box{border-bottom:none;padding:5px 24px}.trade-box .trade-header-box .trade-row-box.option-padding{padding:0 12px}}.flex{display:flex}.flex-col{flex-direction:column}.gap-x-4{-webkit-column-gap:4px;-moz-column-gap:4px;column-gap:4px}.gap-8{gap:8px}.gap-2{gap:2px}.gap-y-8{row-gap:8px}.gap-y-12{row-gap:12px}.items-center{align-items:center}.justify-center{justify-content:center}.justify-start{justify-content:start}.p-2{padding:2px}.p-4{padding:4px}.px-16{padding-left:16px;padding-right:16px}.py-0{padding-bottom:0;padding-top:0}.pt-8{padding-top:8px}.pb-16{padding-bottom:16px}.text-12{font-size:12px}.text-14{font-size:14px}.text-16{font-size:16px}.font-500{font-weight:500}.font-normal{font-weight:400}.cursor-pointer{cursor:pointer}body::-webkit-scrollbar{background-color:var(--okd-color-background-1);box-shadow:none;display:block;width:8px}body::-webkit-scrollbar-thumb{background-color:var(--okd-color-gray-200);border-radius:8px}body::-webkit-scrollbar-track{background-color:initial;box-shadow:none}.home-container{min-height:calc(100vh - 48px)}.home-container .trade-box{background-color:var(--comb-bg-main);color:var(--okd-color-text-amplifed);min-height:calc(100vh - 49px);overflow:hidden;padding-top:1px;position:relative}@media (min-width:768px){.home-container .chart-trade-box{display:flex;flex-direction:column;height:calc(100vh - 49px);min-height:400px;min-width:375px}.home-container .chart-trade-box .trade-panel-box{flex-grow:1}}.home-container .trade-panel-box{display:grid;grid-template-columns:100%;min-height:calc(100vh - 96px);width:100%}