;
(self.AMP=self.AMP||[]).push({m:0,v:"2312191621000",n:"amp-position-observer",ev:"0.1",l:!0,f:function(t,i){!function(){.isArray;var o=Object.prototype;,t}o.hasOwnProperty,o.toString;var c="inside",l="bol:c}function p(t,i){return!(!t||!i)&&t.left==i.left&&t.top==i.top&&t.width==i.width&&t.height==i.height}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var d=self.__AMM=functI(t)}var i=t.prototype;return i.Ne=function(t){var i=this.xF;if(!(i&&p(i.positionRect,t.positionRect)&&p(i.viewportRect,t.viewportRect))){w(t.positionRect);var n,r,s=t.positionRect;t.relativePos=v(s,t.viewportRect),n=s,r=t.viewportRect,n.top<=r.bottom&&r.top<=n.bottom&&n.left<=r.right&&r.left<=n.right?(this.xF=t,this.De(t)):this.xF&&(this.xF=null,t.positionRect=null,this.De(t))}},i.update=function(t){var i=this;if(!t){if(0!=this.turn)return void this.turn--;0==this.fidelity&&(this.turn=4)}var n=this.Ro.getSize(),r=a(0,0,n.width,n.height);this.Ro.getClientRectAsync(this.element).ll})}))},t1}n),e}var P="amp-position-observer",T=functiot,n)}(u,t);var r,e,o=(n!s,t)});function u(t){var i;return(i=o.call(this,t)).Ye=null,i.dn=null,i.Ro=null,i.Er=!1,i.TF=0,i.$F=0,i.qF="0",i.CF="0",i.DF=0,i.NF=0,i.sn=null,i.zF=null,i.LF=null,i.VF=0,i._F=0,i.kF=!1,i.GF=!1,i}var p=u.prototype;return p.buildCalce")},p.Ls=function(){var t,i,n,r=this;this.zw(),this.Ye=(t=this.element,i="action",F(n=E(R(t)),i)?g(n,i):null),this.Ro=I(this.element),this.HF(),this.getAmpDoc().whenReady().then((function(){var t=r.JF();r.dn.observe(t,1,r.KF.bind(r))}))},p.QF=function(){var t="enter",i=B(this.win,"".concat(P,".").concat(t),{});this.Ye.trigger(this.element,t,i,1)},p.UF=function(){var t="exit",i=B(this.win,"".concat(P,".").concat(t),{});this.Ye.trigger(this.element,t,i,1)},p.WF=function(){var t=this.Ro.getScrollTop(),i={"start-scroll-offset":t,"end-scroll-offset":t+this._F,"initial-inview-percent":this.VF},n="scroll",r=B(this.win,"".concat(P,".").concat(n),{"percent":this.VF,"positionObserverData":i});this.Ye.trigger(this.element,n,r,1)},p.KF=function(t){if(!this.kF||!this.GF){var i=this.Er,n=this.sn&&this.sn.height;this.XF(t),this.sn=t.viewportRect,n!=t.viewportRect.height&&this.YF();var r,s=this.ZF(t.viewportRect),e=t.positionRect;e?(r=v(e,s),this.hf(e,s,r)):(this.Er=!1,r=t.relativePos),i&&!this.Er&&(this.VF=r==l?0:1,this.WF(),this.UF(),this.GF=!0),!i&&this.Er&&this.QF(),this.Er&&(this.tB(e,s),this.WF())}},p.hf=function(t,i,n){if(n!=c){var r="top"==n?this.TF:this.$F,s=t.height*r;this.Er=n==l?t.top<=i.bottom-s:t.bottom>=i.top+s}else this.Er=!0},p.tB=function(t,i){if(t){var n=t.height*this.$F+t.height*this.TF,r=i.height+t.height-n,s=Math.abs(t.top-this.DF-(i.height-t.height*this.$F));this.VF=s/r,this._F=r-s}}et")}t),t},p.nB=function(t){var i,i[0]}(t=f("number"==typeof(i=t)?i+"px":i&&/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(i)?/^\d+(\.\d+)?$/.test(i)?i+"px":i:void 0)),e="number"==typeof(n=r=parseFloat(t))&&isFinite(n)?r:void 0;return e?(x("px"==s||"vh"==s,"Only pixel or vh are valid as units for exclusion margins: "+t),"vh"==s&&(e=e/100*this.sn.height),e):0}t),i}.CF)}.DF)},p.XF=function(t){this.LF||(this.LF=t.viewportRect.height);var i=this.LF-t.viewportRect.height,n=0;Math.abs(i)<150?n=i:this.LF=null,t.viewportRect=a(t.viewportRect.left,t.viewportRect.top,t.viewportRect.width,t.viewportRect.height+n)},p.HF=function(){var t,i,n,r;this.dn||(t=this.getAmpDoc(),i="position-observer,n))}(E(r=R(t)),r,i,n),this.dn=j(this.element,"position-observer"))}ull}},u}(t.BaseElement);t.registerElement(P,T)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-position-observer-0.1.js.map