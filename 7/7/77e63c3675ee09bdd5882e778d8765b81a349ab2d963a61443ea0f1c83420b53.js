"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e435083d-e97d-52ec-8a7f-e8659eeac307")}catch(e){}}();
(self.webpackChunkpanel_ui=self.webpackChunkpanel_ui||[]).push([[9843],{24339:(C,P,o)=>{o.d(P,{g:()=>g});var d=o(69263),n=o(34357),l=o(50635),u=o(22560);let g=(()=>{class w{constructor(a){this.store=a,this.passwordMinNumber=this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>r.minNumber)),this.passwordMinLength=this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>r.minLength)),this.passwordMaxLength=this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>r.maxLength)),this.passwordMinLowerCase=this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>r.minLowercase)),this.passwordMinUpperCase=this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>r.minUppercase)),this.passwordAllowedSymbol=this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>r.allowedSymbols))}validationRegex(a){return new RegExp("^(?=.*?[A-Z])(?=(.*[A-Z]){"+a.minUppercase+",})(?=(.*[a-z]){"+a.minLowercase+",})(?=(.*[\\d]){"+a.minNumber+",})(?=(.*["+this.escapeRegexp(a.allowedSymbols)+"]){"+a.minSymbol+",})(?!.*\\s).{"+a.minLength+","+a.maxLength+"}$")}hasMinLength(a,r){return r?.length>=a.minLength}hasMaxLength(a,r){return r?.length<=a.maxLength}hasLowerCase(a){return this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>new RegExp("(?:[^a-z]*[a-z]){"+r.minLowercase+",}.*").test(a)))}hasUppercase(a){return this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>new RegExp("(?:[^A-Z]*[A-Z]){"+r.minUppercase+",}.*").test(a)))}hasNumber(a){return this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>new RegExp("(?:[^0-9]*[0-9]){"+r.minNumber+",}.*").test(a)))}hasAllowedSymbol(a){return this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>new RegExp("(.*["+this.escapeRegexp(r.allowedSymbols)+"]){"+r.minSymbol+",}.*").test(a)&&new RegExp("^[\\da-zA-Z"+this.escapeRegexp(r.allowedSymbols)+"]*$").test(a)))}isLengthValid(a){return this.store.pipe((0,d.Ys)(n.Ww),(0,l.U)(r=>this.hasMinLength(r,a)&&this.hasMaxLength(r,a)))}escapeRegexp(a){return a.replace(/[-\\[\]]/g,"\\$&")}}return w.\u0275fac=function(a){return new(a||w)(u.LFG(d.yh))},w.\u0275prov=u.Yz7({token:w,factory:w.\u0275fac,providedIn:"root"}),w})()},32456:(C,P,o)=>{o.d(P,{I6:()=>x,Oj:()=>a,V_:()=>_});var d=o(69263),n=o(79168),l=o(42297),u=o(47181),g=o(50464),w=o(51709),f=o(71256);const a="login",r={loading:!1,loaded:!1},Z=(0,d.Lq)(r,(0,d.on)(n.Qb,l.P2,n.uq,l.N7,l.G6,g.x$,f.y1,w.c0,c=>({...c,loading:!0})),(0,d.on)(n.he,l.vN,n.vM,n.Ev,l.Q7,l.X,g.Qp,f.zZ,w.Fo,c=>({...c,loaded:!0,loading:!1})),(0,d.on)(n.oo,l.UT,g.pw,f.hM,w.D2,c=>({...c,loaded:!1,loading:!1})),(0,d.on)(u.Pl,(c,L)=>({...r})));function x(c,L){return Z(c,L)}const m=(0,d.ZF)(a),_=(0,d.P1)(m,c=>c.loading);(0,d.P1)(m,c=>c.loaded)},49843:(C,P,o)=>{o.r(P),o.d(P,{PasswordEnforcementModule:()=>ts});var d=o(94666),n=o(2508),l=o(84522),u=o(75074),g=o(57822),w=o(68562),f=o(38699),a=o(53547),r=o(93167),Z=o(10538),x=o(49525),m=o(50635),_=o(53158),T=o(68951),c=o(69263),L=o(10745),h=o(50464),F=o(98996),N=o(79168),U=o(78199),R=o(72822),S=o(93681),s=o(22560),I=o(78481),W=o(72667);let Y=(()=>{class e{constructor(t,i,v,ns){this.actions$=t,this.authGateway=i,this.store=v,this.secureGateway=ns,this.createTokenFromResetPassword$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(h.x$),(0,Z.M)(this.store.pipe((0,c.Ys)(F.bs))),(0,x.z)(([E,y])=>this.authGateway.createTokenFromResetPassword({...E,fingerprint:y}).pipe((0,m.U)(h.Qp),(0,_.K)(A=>(0,L.of)((0,h.pw)(A))))))),this.createTokenFromResetPasswordError$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(h.pw),(0,m.U)(E=>(0,U.Sj)({message:{key:"unknown-error"},title:{key:"error"}})))),this.redirectCreateTokenFromResetPasswordSuccess$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(h.Qp),(0,m.U)(N.Uk))),this.updatePasswordEnforcement$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(h.Dn),(0,Z.M)(this.store.pipe((0,c.Ys)(R.kp))),(0,x.z)(([E,y])=>this.secureGateway.updateSecurePasswordEnforcement(y,E.passwordEnforcement).pipe((0,m.U)(A=>(0,h.qf)({user:A})),(0,_.K)(A=>(0,L.of)((0,h.P2)(A))),(0,T.R)(this.actions$.pipe((0,r.l4)(S.d))))))),this.updatePasswordEnforcementSuccess$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(h.qf),(0,m.U)(()=>(0,U.BY)({title:{key:"success"},message:{key:"password_enforcement_set_successfully"}})))),this.updatePasswordEnforcementError$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(h.P2),(0,m.U)(E=>(0,U.Sj)({message:{key:"set_password_enforcement_error"},title:{key:"error"}}))))}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(r.eX),s.LFG(I.ko),s.LFG(c.yh),s.LFG(W.a0))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})();var V=o(70204),D=o(94971),J=o(34357),K=o(32456),Q=o(24339),$=o(20355);function G(e,p){1&e&&(s.TgZ(0,"mat-error"),s._uU(1),s.ALo(2,"translate"),s.qZA()),2&e&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"password_required")))}const B=function(e,p){return{min:e,max:p}};function j(e,p){if(1&e&&(s.TgZ(0,"mat-error"),s._uU(1),s.ALo(2,"translate"),s.ALo(3,"async"),s.ALo(4,"async"),s.qZA()),2&e){const t=s.oxw();s.xp6(1),s.hij(" ",s.xi3(2,1,"password_length",s.WLB(8,B,s.lcZ(3,4,t.passwordMinLength),s.lcZ(4,6,t.passwordMaxLength)))," ")}}const M=function(e){return{min:e}};function b(e,p){if(1&e&&(s.TgZ(0,"mat-error"),s._uU(1),s.ALo(2,"translate"),s.ALo(3,"async"),s.qZA()),2&e){const t=s.oxw();s.xp6(1),s.hij(" ",s.xi3(2,1,"password_uppercase",s.VKq(6,M,s.lcZ(3,4,t.passwordMinUpperCase)))," ")}}function z(e,p){if(1&e&&(s.TgZ(0,"mat-error"),s._uU(1),s.ALo(2,"translate"),s.ALo(3,"async"),s.qZA()),2&e){const t=s.oxw();s.xp6(1),s.hij(" ",s.xi3(2,1,"password_lowercase",s.VKq(6,M,s.lcZ(3,4,t.passwordMinLowerCase)))," ")}}function H(e,p){if(1&e&&(s.TgZ(0,"mat-error"),s._uU(1),s.ALo(2,"translate"),s.ALo(3,"async"),s.qZA()),2&e){const t=s.oxw();s.xp6(1),s.hij(" ",s.xi3(2,1,"password_number",s.VKq(6,M,s.lcZ(3,4,t.passwordMinNumber)))," ")}}const q=function(e){return{symbols:e}};function X(e,p){if(1&e&&(s.TgZ(0,"mat-error"),s._uU(1),s.ALo(2,"translate"),s.ALo(3,"async"),s.qZA()),2&e){const t=s.oxw();s.xp6(1),s.hij(" ",s.xi3(2,1,"allowed_symbol",s.VKq(6,q,s.lcZ(3,4,t.passwordAllowedSymbol)))," ")}}function k(e,p){1&e&&(s.TgZ(0,"mat-error"),s._uU(1),s.ALo(2,"translate"),s.qZA()),2&e&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"password_confirmation_required")))}function ss(e,p){1&e&&(s.TgZ(0,"mat-error"),s._uU(1),s.ALo(2,"translate"),s.qZA()),2&e&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"password_not_equals")))}const O=function(e){return[e]},es=[{path:"",component:(()=>{class e{constructor(t,i){this._passwordValidator=t,this.store=i,this.hide=!0,this.NavigationRoute=D.r,this.loading=this.store.pipe((0,c.Ys)(K.V_))}ngOnInit(){this.store.pipe((0,c.Ys)(J.Ww)).subscribe(t=>this.changePasswordForm=new n.nJ({oldPassword:new n.p4("",[n.kI.required]),newPassword:new n.p4("",[n.kI.required,n.kI.minLength(t.minLength),n.kI.maxLength(t.maxLength),n.kI.pattern(this._passwordValidator.validationRegex(t))]),confirmNewPassword:new n.p4("",[n.kI.required])}))}resetPassword(){this.store.dispatch((0,h.x$)(this.changePasswordForm.value))}isPasswordRequired(){return this.changePasswordForm.get("oldPassword").touched&&this.changePasswordForm.get("oldPassword").hasError("required")}isPasswordLengthValid(){return this._passwordValidator.isLengthValid(this.changePasswordForm.value.newPassword).pipe((0,m.U)(t=>t||!this.changePasswordForm.get("newPassword").touched))}passwordHasLowercase(){return this._passwordValidator.hasLowerCase(this.changePasswordForm.value.newPassword).pipe((0,m.U)(t=>t||!this.changePasswordForm.get("newPassword").touched))}passwordHasUppercase(){return this._passwordValidator.hasUppercase(this.changePasswordForm.value.newPassword).pipe((0,m.U)(t=>t||!this.changePasswordForm.get("newPassword").touched))}passwordHasNumber(){return this._passwordValidator.hasNumber(this.changePasswordForm.value.newPassword).pipe((0,m.U)(t=>t||!this.changePasswordForm.get("newPassword").touched))}passwordHasAllowedSymbol(){return this._passwordValidator.hasAllowedSymbol(this.changePasswordForm.value.newPassword).pipe((0,m.U)(t=>t||!this.changePasswordForm.get("newPassword").touched))}confirmPasswordRequired(){return this.changePasswordForm.get("newPassword").valid&&this.changePasswordForm.get("confirmNewPassword").touched&&this.changePasswordForm.get("confirmNewPassword").hasError("required")}passwordsSimilar(){return!this.changePasswordForm.get("confirmNewPassword").touched||this.changePasswordForm.get("newPassword").value===this.changePasswordForm.get("confirmNewPassword").value}get passwordMinNumber(){return this._passwordValidator.passwordMinNumber}get passwordMinLength(){return this._passwordValidator.passwordMinLength}get passwordMaxLength(){return this._passwordValidator.passwordMaxLength}get passwordMinLowerCase(){return this._passwordValidator.passwordMinLowerCase}get passwordMinUpperCase(){return this._passwordValidator.passwordMinUpperCase}get passwordAllowedSymbol(){return this._passwordValidator.passwordAllowedSymbol}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(Q.g),s.Y36(c.yh))},e.\u0275cmp=s.Xpm({type:e,selectors:[["edns-password-enforcement"]],decls:58,vars:63,consts:[[1,"align-self-center","login-content","flex-fill","d-flex","flex-column"],[1,"icon-signin"],[3,"name","formGroup","submit"],["appearance","outline",1,"w-100","password","no-padding"],["matInput","",3,"type","formControlName"],["matSuffix","",3,"click"],["appearance","outline",1,"w-100","no-padding"],[1,"error-container"],[4,"ngIf"],[1,"btn-container","actions"],["data-cy","reset-new-password-button",1,"btn-principal","w-100",3,"isLoading","disabled"],[1,"actions"],[3,"routerLink"],[1,"icon-usersettings"],[1,"icon-sharedaccess"]],template:function(t,i){1&t&&(s.TgZ(0,"div",0)(1,"h1"),s._UZ(2,"i",1),s._uU(3),s.ALo(4,"translate"),s.qZA(),s.TgZ(5,"form",2),s.NdJ("submit",function(){return i.resetPassword()}),s.TgZ(6,"p"),s._uU(7),s.ALo(8,"translate"),s.qZA(),s.TgZ(9,"mat-form-field",3)(10,"mat-label"),s._uU(11),s.ALo(12,"translate"),s.qZA(),s._UZ(13,"input",4),s.TgZ(14,"mat-icon",5),s.NdJ("click",function(){return i.hide=!i.hide}),s._uU(15),s.qZA()(),s.TgZ(16,"mat-form-field",3)(17,"mat-label"),s._uU(18),s.ALo(19,"translate"),s.qZA(),s._UZ(20,"input",4),s.TgZ(21,"mat-icon",5),s.NdJ("click",function(){return i.hide=!i.hide}),s._uU(22),s.qZA()(),s.TgZ(23,"mat-form-field",6)(24,"mat-label"),s._uU(25),s.ALo(26,"translate"),s.qZA(),s._UZ(27,"input",4),s.TgZ(28,"mat-icon",5),s.NdJ("click",function(){return i.hide=!i.hide}),s._uU(29),s.qZA()(),s.TgZ(30,"div",7),s.YNc(31,G,3,3,"mat-error",8),s.YNc(32,j,5,11,"mat-error",8),s.ALo(33,"async"),s.YNc(34,b,4,8,"mat-error",8),s.ALo(35,"async"),s.YNc(36,z,4,8,"mat-error",8),s.ALo(37,"async"),s.YNc(38,H,4,8,"mat-error",8),s.ALo(39,"async"),s.YNc(40,X,4,8,"mat-error",8),s.ALo(41,"async"),s.YNc(42,k,3,3,"mat-error",8),s.YNc(43,ss,3,3,"mat-error",8),s.qZA(),s.TgZ(44,"div",9)(45,"edns-button",10),s.ALo(46,"async"),s._uU(47),s.ALo(48,"translate"),s.qZA()()(),s.TgZ(49,"div",11)(50,"a",12),s._UZ(51,"i",13),s._uU(52),s.ALo(53,"translate"),s.qZA(),s.TgZ(54,"a",12),s._UZ(55,"i",14),s._uU(56),s.ALo(57,"translate"),s.qZA()()()),2&t&&(s.xp6(3),s.Oqu(s.lcZ(4,31,"reset_new_password")),s.xp6(2),s.Q6J("name",i.changePasswordForm)("formGroup",i.changePasswordForm),s.xp6(2),s.Oqu(s.lcZ(8,33,"reset_password_description")),s.xp6(4),s.Oqu(s.lcZ(12,35,"oldPassword")),s.xp6(2),s.Q6J("type",i.hide?"password":"text")("formControlName","oldPassword"),s.xp6(2),s.Oqu(i.hide?"visibility_off":"visibility"),s.xp6(3),s.Oqu(s.lcZ(19,37,"newPassword")),s.xp6(2),s.Q6J("type",i.hide?"password":"text")("formControlName","newPassword"),s.xp6(2),s.Oqu(i.hide?"visibility_off":"visibility"),s.xp6(3),s.Oqu(s.lcZ(26,39,"confirmNewPassword")),s.xp6(2),s.Q6J("type",i.hide?"password":"text")("formControlName","confirmNewPassword"),s.xp6(2),s.Oqu(i.hide?"visibility_off":"visibility"),s.xp6(2),s.Q6J("ngIf",i.isPasswordRequired()),s.xp6(1),s.Q6J("ngIf",!s.lcZ(33,41,i.isPasswordLengthValid())),s.xp6(2),s.Q6J("ngIf",!s.lcZ(35,43,i.passwordHasUppercase())),s.xp6(2),s.Q6J("ngIf",!s.lcZ(37,45,i.passwordHasLowercase())),s.xp6(2),s.Q6J("ngIf",!s.lcZ(39,47,i.passwordHasNumber())),s.xp6(2),s.Q6J("ngIf",!s.lcZ(41,49,i.passwordHasAllowedSymbol())),s.xp6(2),s.Q6J("ngIf",i.confirmPasswordRequired()),s.xp6(1),s.Q6J("ngIf",!i.passwordsSimilar()),s.xp6(2),s.Q6J("isLoading",i.loading)("disabled",i.changePasswordForm.invalid||s.lcZ(46,51,i.loading)),s.xp6(2),s.hij(" ",s.lcZ(48,53,"save")," "),s.xp6(3),s.Q6J("routerLink",s.VKq(59,O,"/"+i.NavigationRoute.LOGIN_ROOT)),s.xp6(2),s.hij("",s.lcZ(53,55,"standardLogin")," "),s.xp6(2),s.Q6J("routerLink",s.VKq(61,O,i.NavigationRoute.LOGIN_SHARED_ACCESS)),s.xp6(2),s.hij("",s.lcZ(57,57,"sharedAccesslogin")," "))},dependencies:[d.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,u.TO,u.KE,u.hX,u.R9,g.Hw,a.yS,w.Nt,$.r,d.Ov,f.X$],styles:["[_nghost-%COMP%]{display:contents}.error-container[_ngcontent-%COMP%]{text-align:left}form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;text-align:left;margin:20px 0 40px}"]}),e})()}];let os=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[a.Bz.forChild(es),a.Bz]}),e})();var rs=o(17548);let ts=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[d.ez,n.u5,n.UX,u.lN,g.Ps,f.aw,a.Bz,V.n,w.c,l.ot,os,r.sQ.forFeature([Y]),rs.h]}),e})()}}]);
//# debugId=e435083d-e97d-52ec-8a7f-e8659eeac307