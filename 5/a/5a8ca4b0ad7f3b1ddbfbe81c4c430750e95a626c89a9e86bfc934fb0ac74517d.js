var y=Object.defineProperty;var p=var d=import{v as o}from"./video.es-884b1ac8.js";import"./index-172e3f67.js";import"./extends-f1833ec7.js";const v=o.getComponent("MenuButton"),f=o.getComponent("Menu"),g=o.getComponent("Component"),B=o.dom;function C(i){return typeof i!="string"?i:i.charAt(0).toUpperCase()+i.slice(1)}class I extends v{eateMenu(){const e=new f(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){const t=B.createEl("li",{className:"vjs-menu-title",innerHTML:C(this.options_.title),tabIndex:-1}),s=new g(this.player_,{el:t});this.hideThreshold_+=1,e.addItem(s)}return this.items=this.createItems(),this.items&&this.items.forEach(,e}}const q=o.getComponent("MenuItem");class _ extends q{andleClick(){this.qualityButton.items.forEach(,this.plugin.setQuality(this.item.value),this.selected(!0)}}const Q={},b=o.getPlugin("plugin");class j extends b{constructor(t,s){super(t,s);d(this,"onAddQualityLevel",()=>{const{player:t}=this,l=t.qualityLevels().levels_||[],n=[];l.forEach(u=>{const{width:a,height:h}=u,r=a>h?h:a;if(r&&!n.filter(.length){const c=this.getQualityMenuItem({label:`${r}p`,value:r});n.push(c)}}),n.sort((u,a)=>typeof u!="object"||typeof a!="object"||u.item.value<a.item.value?-1:u.item.value>a.item.value?1:0),n.push(this.getQualityMenuItem({label:t.localize("Auto"),value:"auto",selected:!0})),this._qualityButton&&(this._qualityButton.createItems=this._qualityButton.update())});this.player=t,this.config=o.obj.merge(Q,s),o.browser.IS_SAFARI||(t.addClass("vjs-vhs-quality-selector"),this.player.qualityLevels?(this.createQualityButton(),this.bindPlayerEvents()):console.error("VHS quality selection plugin requires quality levels to be available"))}bindPlayerEventsreateQualityButton(){const{player:t}=this;this._qualityButton=new I(t);const s=t.controlBar.children().length-2,l=t.controlBar.addChild(this._qualityButton,{componentClass:"qualitySelector"},this.config.placementIndex||s);if(l.addClass("vjs-quality-selector"),this.config.displayCurrentQuality)this.setButtonInnerText("auto");else{const n=` ${this.config.vjsIconClass||"vjs-icon-hd"}`;l.menuButton_.$(".vjs-icon-placeholder").className+=n}l.removeClass("vjs-hidden")}etQualityMenuItem(t){const{player:s}=this;return new _(s,t,this._qualityButton,this)}setQuality(t){const s=this.player.qualityLevels();this._currentQuality=t,this.config.displayCurrentQuality&&this.setButtonInnerText(t==="auto"?t:`${t}p`);for(let l=0;l<s.length;++l){const{width:n,height:u}=s[l],a=n>u?u:n;s[l].enabled=a===t||t==="auto"}this._qualityButton.unpressButton()}let m=!1;const w=()=>{m||(o.registerPlugin("vhsQualitySelector",j),m=!0)};export{w as register};
//# sourceMappingURL=videoPlugins-493b6ceb.js.map
