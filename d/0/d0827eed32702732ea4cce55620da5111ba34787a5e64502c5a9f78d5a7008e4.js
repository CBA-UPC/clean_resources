"use strict";(self.webpackChunkphotobucket_web=self.webpackChunkphotobucket_web||[]).push([[6737],{86737:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(4942),a=n(15861),i=n(1413),o=n(29439),s=n(64687),l=n.n(s),u=n(47825),c=n(90891),d=n(51767),m=n(90421),p=n(44270),h=n(47313),f=n(58467),x=n(45328),b=n(79894),g=n(39837),k=n(51748),v=n(6007),E=n(36504),Z=n(69616),w=n(14640),j=n(26581),S=n(42659),y=n(7676),A=n(35378),F=n(46417);function L(){var e,t=(0,h.useState)({}),n=(0,o.Z)(t,2),s=n[0],L=n[1],I=(0,h.useState)({}),T=(0,o.Z)(I,2),M=T[0],N=T[1],_=(0,h.useState)(A.p.FORM),D=(0,o.Z)(_,2),O=D[0],C=D[1],R=(0,h.useRef)(null),G=(0,h.useState)(!1),P=(0,o.Z)(G,2),W=P[0],B=P[1],U=(0,d.useFlag)("isFirebaseMagicLinkEnabled"),q=(0,f.TH)(),z=(0,m.Mq)(),H=(0,p.$C)(z),V=function(){var e=(0,a.Z)(l().mark((function e(t){var n,a,i,o,u,c,d;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,n=s.email){e.next=6;break}throw new k.Z("Email is required","email");case 6:return B(!0),a=(0,p.V1)(H,"firebaseEmail"),e.next=10,a({identifier:n,action:t});case 10:if(i=e.sent,o=i.data,!(u=o.error)){e.next=15;break}throw u;case 15:localStorage.setItem("_pb_linkSignInEmail",n),C(A.p.EMAIL_SENT),e.next=32;break;case 19:e.prev=19,e.t0=e.catch(2),c=e.t0,d="login"===t?"magic link":"password reset",e.t1=c.code,e.next="RequiredParameterException"===e.t1?26:"auth/too-many-requests"===e.t1||"auth/invalid-email"===e.t1||"auth/invalid-identifier"===e.t1||"auth/user-not-found"===e.t1||"auth/import-failed"===e.t1?28:30;break;case 26:return N((0,r.Z)({},c.parameterName,c.message)),e.abrupt("break",32);case 28:return C(A.p.EMAIL_SENT),e.abrupt("break",32);case 30:B(!1),N({error:"There was an error sending the ".concat(d," email. Please resubmit your username or email address.")});case 32:case"end":return e.stop()}}),e,null,[[2,19]])})));return ();return(0,F.jsxs)(v.Z,{onSubmit:children:[(0,F.jsx)(g.Z,{title:"Forgot Password"}),O===A.p.FORM&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(w.Z,{sx:{marginBottom:"4px !important"},children:"Forgot your password?"}),(0,F.jsx)(y.Z,{sx:{mb:2},children:"Enter the email on your account and we will sent you a password reset link."}),(0,F.jsx)(E.uI,{title:"Failed to send link",body:M.error}),(0,F.jsx)(x.Z,{disabled:W,htmlFor:"username",children:"Email/Username"}),(0,F.jsx)(b.Z,{id:"username",autoFocus:!0,"data-test":"username",disabled:W,error:Boolean(M.email),fullWidth:!0,helperText:M.email,margin:"dense",name:"email",onKeyUp:function(e){var t;(e.preventDefault(),"Enter"===e.key)&&(null===(t=R.current)||void 0===t||t.focus())},onChange:function(e){var t=(0,i.Z)({},s),n=e.target.name;t[n]=e.target.value,L(t);var r=(0,i.Z)({},M);delete r[n],delete r.error,N(r),B(!1)},required:!0,placeholder:"name@gmail.com",type:"email",variant:"outlined"}),(0,F.jsx)(Z.Z,{ref:R,name:"resetPassword","data-test":"submit",disabled:W,fullWidth:!0,sx:{mb:3},variant:"contained",onClick:function(){return V("resetPassword")},children:"Reset Password"}),U&&(0,F.jsxs)(F.Fragment,{children:[!W&&(0,F.jsx)(S.D,{id:"loginLink","data-test":"send-link",onClick:to:"",children:"Send me a magic link"}),W&&(0,F.jsx)(S.A,{id:"loginLink","data-test":"send-link",to:"",children:"Send me a magic link"}),(0,F.jsx)(u.Z,{maxWidth:!1,sx:{my:2}})]}),(0,F.jsx)(S.D,{"data-test":"return-to-login",to:"/auth/login".concat(q.search),children:"Return to Login"})]}),O===A.p.EMAIL_SENT&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(w.Z,{sx:{marginBottom:"4px !important"},children:"Email Sent"}),(0,F.jsxs)(y.Z,{sx:{textOverflow:"ellipsis",whiteSpace:"break-spaces",overflow:"hidden"},children:[null!==(e=s.email)&&void 0!==e&&e.includes("@")?"We've sent an email to ".concat(s.email,"."):"We've sent an email to the address associated with ".concat(s.email,"."),(0,F.jsx)("br",{})]}),(0,F.jsx)(Z.Z,{ref:R,name:"forgot-password-try-again",color:"primary",fullWidth:!0,sx:{my:3},variant:"contained",onClick:function(){L({}),N({}),C(A.p.FORM),B(!1)},children:"Send another email"}),(0,F.jsxs)(j.Z,{children:["Having trouble?",(0,F.jsxs)(c.Z,{underline:"none",sx:{my:2,fontSize:"14px"},target:"_blank",href:"https://support.photobucket.com/hc/en-us/categories/4404271347732-Account-Recovery",children:[" ","Visit help center"]})]})]})]})}},42659:function(e,t,n){n.d(t,{A:function(){return o},D:function(){return i}});var r=n(4906),a=n(2135),i=(0,r.Z)(a.rU)((),o=(0,r.Z)(a.rU)((function(e){return{color:e.theme.palette.customGrey[500],fontSize:"14px",pointerEvents:"none",textDecoration:"none"}}))},7676:function(e,t,n){var r=n(61113),a=n(4906);t.Z=(0,a.Z)(r.Z)((function(e){return{color:e.theme.palette.customGrey[500],fontSize:"14px",lineHeight:"20px",fontWeight:"400px",mb:"16px"}}))},35378:function(e,t,n){var r,a;n.d(t,{C:function(){return a},p:),r||(r={})),a||(a={}))}}]);