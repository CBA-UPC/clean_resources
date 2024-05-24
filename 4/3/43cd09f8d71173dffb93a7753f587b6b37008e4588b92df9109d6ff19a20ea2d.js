import{S as y}from"./chunk.HDLULROG-24721c13.js";import{s as m,g as c}from"./chunk.H437TPPF-d2f2afca.js";import{s as h,a as d,w as u}from"./chunk.KRRLOROJ-71726c0b.js";import{i as w,E as _,J as r,K as A,n as l,L as v,F as C,H as x,N as k,x as p,G as S}from"./index-ea800fad.js";var H=w`
  ${_}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,s=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),t=class extends C{constructor(){super(...arguments),this.hasSlotController=new x(this,"icon","suffix"),this.localize=new k(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await h(this.base),this.base.hidden=!1;const{keyframes:o,options:e}=c(this,"alert.show",{dir:this.localize.dir()});await d(this.base,o,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await h(this.base);const{keyframes:o,options:e}=c(this,"alert.hide",{dir:this.localize.dir()});await d(this.base,o,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,u(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,u(this,"sl-after-hide")}async toast(){return new Promise(o=>{s.parentElement===null&&document.body.append(s),s.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{s.removeChild(this),o(),s.querySelector("sl-alert")===null&&s.remove()},{once:!0})})}render(){return p`
      <div
        part="base"
        class=${S({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?p`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};t.styles=H;t.dependencies={"sl-icon-button":y};r([A('[part~="base"]')],t.prototype,"base",2);r([l({type:Boolean,reflect:!0})],t.prototype,"open",2);r([l({type:Boolean,reflect:!0})],t.prototype,"closable",2);r([l({reflect:!0})],t.prototype,"variant",2);r([l({type:Number})],t.prototype,"duration",2);r([v("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1);r([v("duration")],t.prototype,"handleDurationChange",1);m("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});m("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});t.define("sl-alert");const f=class g{constructor(){this.visibleAlertCount=0}showError(e,i,a){this.show("danger",e,i),a&&console.error("Error alert shown. Exception details:",a)}get hasVisibleAlerts(){return this.visibleAlertCount>0}show(e,i,a){const n=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:g.durationMs,innerHTML:this.getAlertHtml(e,i,a)});document.body.append(n);const b=n.toast();this.visibleAlertCount++,b.finally(()=>this.visibleAlertCount--)}getAlertHtml(e,i,a){return`
            <sl-icon name="${this.getIcon(e)}" slot="icon"></sl-icon>
            <strong>${i}</strong>
            <p>${a||""}</p>
        `}getIcon(e){switch(e){case"danger":return"exclamation-octagon";case"warning":return"exclamation-triangle";case"primary":return"info-circle";case"success":return"check2-circle";default:return"gear"}}};f.durationMs=1e4;let z=f;const I=new z;export{I as alertService};
edBtn1{text-align:center;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;border:1px solid #628224;background-image:url(../gradient.svg);background-size:100% 200%;background-repeat:repeat-x;background-position:0 0;background:#9fcb4b;background:-moz-linear-gradient(top,rgba(159,203,75,1) 0,rgba(131,190,40,1) 50%,rgba(114,179,20,1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(159,203,75,1)),color-stop(50%,rgba(131,190,40,1)),color-stop(100%,rgba(114,179,20,1)));background:-webkit-linear-gradient(top,rgba(159,203,75,1) 0,rgba(131,190,40,1) 50%,rgba(114,179,20,1) 100%);background:-o-linear-gradient(top,rgba(159,203,75,1) 0,rgba(131,190,40,1) 50%,rgba(114,179,20,1) 100%);background:-ms-linear-gradient(top,rgba(159,203,75,1) 0,rgba(131,190,40,1) 50%,rgba(114,179,20,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#9fcb4b',endColorstr='#72b314',GradientType=0);background:linear-gradient(top,rgba(159,203,75,1) 0,rgba(131,190,40,1) 50%,rgba(114,179,20,1) 100%)}.roundedSecondBottom div,.firstBottom div,.thirdBottom div{border-top:1px solid #fff}.thirdBottom .roundedBtn2{text-align:center;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;border:1px solid #c9c9c9;background-image:url(../gradient.svg);background-size:100% 200%;background-repeat:repeat-x;background-position:0 100%;background:#e8e8e8;background:-moz-linear-gradient(top,rgba(232,232,232,1) 0,rgba(218,218,218,1) 50%,rgba(205,205,205,1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(232,232,232,1)),color-stop(50%,rgba(218,218,218,1)),color-stop(100%,rgba(205,205,205,1)));background:-webkit-linear-gradient(top,rgba(232,232,232,1) 0,rgba(218,218,218,1) 50%,rgba(205,205,205,1) 100%);background:-o-linear-gradient(top,rgba(232,232,232,1) 0,rgba(218,218,218,1) 50%,rgba(205,205,205,1) 100%);background:-ms-linear-gradient(top,rgba(232,232,232,1) 0,rgba(218,218,218,1) 50%,rgba(205,205,205,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e8e8e8',endColorstr='#cdcdcd',GradientType=0);background:linear-gradient(top,rgba(232,232,232,1) 0,rgba(218,218,218,1) 50%,rgba(205,205,205,1) 100%)}.roundedBtn1 div{border:1px solid #77bc16;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;line-height:29px;padding:0 10px;clear:both}.roundedBtn1 span{text-shadow:1px 1px 1px #7eb027;filter:dropshadow(color=#7eb027,offx=1,offy=1);color:#fff;font-size:20px;font-weight:normal}.roundedBtn2 div{border:1px solid #d0d0d0;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;line-height:20px;padding:0 10px;clear:both}.roundedBtn2 span{text-shadow:0 1px 1px 0 #ccc;filter:dropshadow(color=#aeaeae,offx=-1,offy=0);color:#6f6f6f;font-size:14px;font-weight:normal}.featuresList .bottomLine{background:0}.bottomLine td{background:0;border:0 aqua none}.firstBottom{border-bottom:1px solid #b5c4cd;border-left:1px solid #b5c4cd;height:47px;margin-bottom:10px;background:#f8f8f8}.thirdBottom{margin-bottom:10px;border-bottom:1px solid #b5c4cd;border-right:1px solid #b5c4cd;height:47px;background:#f8f8f8}.featuresList .firstBottom tr{background:0}.lshadow{background:-moz-linear-gradient(left,rgba(255,255,255,0) 97%,rgba(159,165,168,0.3) 100%);background:-webkit-gradient(linear,left top,right top,color-stop(97%,rgba(255,255,255,0)),color-stop(100%,rgba(159,165,168,0.3)));background:-webkit-linear-gradient(left,rgba(255,255,255,0) 97%,rgba(159,165,168,0.3) 100%);background:-o-linear-gradient(left,rgba(255,255,255,0) 97%,rgba(159,165,168,0.3) 100%);background:-ms-linear-gradient(left,rgba(255,255,255,0) 97%,rgba(159,165,168,0.3) 100%);background:linear-gradient(left,rgba(255,255,255,0) 97%,rgba(159,165,168,0.3) 100%);max-width:571px}.rshadow{border-left:1px #a8a8a8 solid !important;border-right:1px solid #b5c4cd;background:-moz-linear-gradient(left,rgba(159,165,168,0.3) 0,rgba(255,255,255,0.15) 5%,rgba(255,255,255,0) 10%);background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(159,165,168,0.3)),color-stop(5%,rgba(255,255,255,0.15)),color-stop(10%,rgba(255,255,255,0)));background:-webkit-linear-gradient(left,rgba(159,165,168,0.3) 0,rgba(255,255,255,0.15) 5%,rgba(255,255,255,0) 10%);background:-o-linear-gradient(left,rgba(159,165,168,0.3) 0,rgba(255,255,255,0.15) 5%,rgba(255,255,255,0) 10%);background:-ms-linear-gradient(left,rgba(159,165,168,0.3) 0,rgba(255,255,255,0.15) 5%,rgba(255,255,255,0) 10%);background:linear-gradient(left,rgba(159,165,168,0.3) 0,rgba(255,255,255,0.15) 5%,rgba(255,255,255,0) 10%)}.bshadow{box-shadow:0 1px 5px #9fa5a8;z-index:99;position:relative}.innerBorder{padding:3px 10px;min-height:25px;height:auto !important;height:25px}.underS{display:block;margin-top:3px}.featuresList td.centerCol{border-left:1px #a8a8a8 solid !important;border-bottom:1px #c7d1af solid !important}.selectBox{color:#545454;font-size:16px;font-weight:bold;text-align:center}.btnMiddle{display:-moz-inline-box;-moz-box-orient:vertical;display:inline-block;border-top:0 solid aqua !important;vertical-align:middle}.bl-button span.bl-signup{padding:0 55px 0 30px;font-size:15px}.signup-blue span{background:url('/features/images/blue_signup_button.gif?2953265714') right center no-repeat}.boxSize{min-height:440px;height:auto !important;height:100%}#tabBlock{width:703px;border-width:1px;border-color:#ededed;border-style:solid solid dashed;-webkit-border-top-left-radius:5px;-webkit-border-top-right-radius:5px;-moz-border-radius-topleft:5px;-moz-border-radius-topright:5px;border-top-left-radius:5px;border-top-right-radius:5px;background:#f3f3f3;background:-moz-linear-gradient(top,rgba(243,243,243,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(243,243,243,1)),color-stop(20%,rgba(255,255,255,1)),color-stop(100%,rgba(255,255,255,1)));background:-webkit-linear-gradient(top,rgba(243,243,243,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);background:-o-linear-gradient(top,rgba(243,243,243,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);background:-ms-linear-gradient(top,rgba(243,243,243,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f3f3f3',endColorstr='#ffffff',GradientType=0);background:linear-gradient(top,rgba(243,243,243,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%)}.no_cornersl{-webkit-border-top-left-radius:5px;-moz-border-radius-topleft:5px;border-top-left-radius:5px;border-left:1px solid #fff !important}.no_cornersr{-webkit-border-top-right-radius:5px;-moz-border-radius-topright:5px;border-top-right-radius:5px;border-right:1px solid #fff !important}#sidebar{width:235px;height:100%;border-width:1px;border-color:#ededed;border-style:solid solid dashed;background:#fff;padding:1px;-webkit-border-top-left-radius:5px;-moz-border-radius-topleft:5px;border-top-left-radius:5px}.innerSide{padding:6px 10px;-webkit-border-top-left-radius:5px;-moz-border-radius-topleft:5px;border-top-left-radius:5px;background:#f3f3f3;background:-moz-linear-gradient(top,rgba(243,243,243,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(243,243,243,1)),color-stop(20%,rgba(255,255,255,1)),color-stop(100%,rgba(255,255,255,1)));background:-webkit-linear-gradient(top,rgba(243,243,243,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);background:-o-linear-gradient(top,rgba(243,243,243,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);background:-ms-linear-gradient(top,rgba(243,243,243,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f3f3f3',endColorstr='#ffffff',GradientType=0);background:linear-gradient(top,rgba(243,243,243,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%)}.topLable{color:#5a5a5a;font-size:13px;font-weight:bold;margin-bottom:10px}.testbl{clear:both;border-bottom:1px dotted #d5d5d5;padding:10px 0}.testbl img{border:1px solid #c6c6c6;margin:5px 10px 0 0}.feed{display:block;color:#666;text-align:justify;font-size:11px;line-height:19px}.quote{color:#494949;font-family:"Trebuchet MS",sans-serif}.idTabs{margin:0;padding:0;width:auto}.idTabs li{float:left;list-style:none outside none;min-width:175px;width:175px;border-right:1px solid #ededed}.idTabs a{background:none repeat scroll 0 0 #f3f7ff;display:block;font-size:12px;margin:0;padding:6px 10px;text-decoration:underline;border-top:1px solid #fff;border-bottom:1px solid #ededed;text-align:center;outline:0}.idTabs a.selected{background:#ebebeb;background:-moz-linear-gradient(top,rgba(235,235,235,1) 0,rgba(248,248,248,1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(235,235,235,1)),color-stop(100%,rgba(248,248,248,1)));background:-webkit-linear-gradient(top,rgba(235,235,235,1) 0,rgba(248,248,248,1) 100%);background:-o-linear-gradient(top,rgba(235,235,235,1) 0,rgba(248,248,248,1) 100%);background:-ms-linear-gradient(top,rgba(235,235,235,1) 0,rgba(248,248,248,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ebebeb',endColorstr='#f8f8f8',GradientType=0);background:linear-gradient(top,rgba(235,235,235,1) 0,rgba(248,248,248,1) 100%);border-bottom:0 solid snow;border-left:1px solid #fff;border-right:1px solid #fff;font-size:13px;font-weight:bold;color:#5a5a5a;cursor:default;margin-bottom:0;text-decoration:none;-moz-outline-style:none;outline:0}#tabBlock div{clear:left;padding:15px 10px 8px}.tabs-container{background:#f8f8f8;background:-moz-linear-gradient(top,rgba(248,248,248,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(248,248,248,1)),color-stop(20%,rgba(255,255,255,1)),color-stop(100%,rgba(255,255,255,1)));background:-webkit-linear-gradient(top,rgba(248,248,248,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);background:-o-linear-gradient(top,rgba(248,248,248,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);background:-ms-linear-gradient(top,rgba(248,248,248,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f8f8f8',endColorstr='#ffffff',GradientType=0);background:linear-gradient(top,rgba(248,248,248,1) 0,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 100%);border-color:#fff;border-style:solid;border-width:0 1px;padding:1em 8px;line-height:22px}.que img{padding:10px 0}.que ul{margin:0}.langPanel{display:block;position:relative;right:10px;top:10px;z-index:999;width:175px}.followonfb{display:block;margin-top:15px}