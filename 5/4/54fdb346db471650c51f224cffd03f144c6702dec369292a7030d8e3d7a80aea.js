"use strict";(self.webpackChunkphotobucket_web=self.webpackChunkphotobucket_web||[]).push([[6234],{76234:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(39837),i=n(15861),a=n(29439),o=n(4942),s=n(64687),l=n.n(s),c=n(17592),d=n(61113),u=n(19536),p=n(24193),m=n(19860),h=n(24813),f=n(90421),x=n(44270),b=n(47313),g=n(58467),v=n(91345),k=n(86834),w=n(25258),Z=n(39437),y=n(53735),N=n(46417),j=(0,c.ZP)("div")((function(e){return(0,o.Z)({border:"1px dashed #999",margin:"20px",padding:"90px 20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},e.theme.breakpoints.down("sm"),{padding:0,border:"none"})})),E=(0,c.ZP)(d.Z)((function(e){return(0,o.Z)({fontSize:"20px",fontWeight:"bold",margin:"10px 0 20px"},e.theme.breakpoints.down("sm"),{margin:"20px 0 40px"})})),A=(0,c.ZP)("div")((function(e){return(0,o.Z)({marginLeft:"30px",width:"65%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column"},e.theme.breakpoints.down("sm"),{margin:0})})),S=(0,c.ZP)(u.Z)((function(e){return(0,o.Z)({width:"100%",marginBottom:"20px",backgroundColor:"#024b9e"},e.theme.breakpoints.down("sm"),{margin:0,display:"none"})})),T=(0,c.ZP)(p.Z)((function(e){return(0,o.Z)({marginRight:"20px",marginBottom:"10px",textTransform:"none"},e.theme.breakpoints.down("sm"),{width:"100%"})})),C=(0,c.ZP)("div")((function(e){return(0,o.Z)({marginLeft:"30px",width:"50%",textAlign:"center",marginTop:"20px"},e.theme.breakpoints.down("sm"),{marginLeft:0})}));function P(){var e,t=(0,b.useState)(y.A.UNSENT),n=(0,a.Z)(t,2),r=n[0],o=n[1],s=(0,m.Z)(),c=(0,Z.Z)(),u=(0,h.Z)(s.breakpoints.down("md")),p=(0,g.s0)(),P=(0,v.at)(),U=(0,x.$C)(),z="In order to use Photobucket, you must reset your password. For security purposes, please use the button below to send a password reset email to ".concat(null===P||void 0===P||null===(e=P.profile)||void 0===e?void 0:e.email,". Open your email then click that link to complete the process."),D=function(){var e=(0,i.Z)(l().mark((function e(){var t,n,i,a,s,d,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r!==y.A.SENT){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,null!==P&&void 0!==P&&null!==(t=P.profile)&&void 0!==t&&t.email){e.next=5;break}throw new f.ZR("graph/user-profile-email","No email found on user profile. Please try adding one with the button below");case 5:return o(y.A.SENT),a=(0,x.V1)(U,"firebaseEmail"),e.next=9,a({identifier:null===P||void 0===P||null===(n=P.profile)||void 0===n?void 0:n.email,action:"resetPassword"});case 9:if(s=e.sent,!(d=s.data).error){e.next=13;break}throw d.error;case 13:c.createAlert("Email sent to ".concat(null===P||void 0===P||null===(i=P.profile)||void 0===i?void 0:i.email),"success"),e.next=28;break;case 16:e.prev=16,e.t0=e.catch(2),w.Z.error(e.t0),o(y.A.UNSENT),u=e.t0,e.t1=u.code,e.next="graph/user-profile-email"===e.t1?24:26;break;case 24:return c.createAlert(u.message,"error"),e.abrupt("break",28);case 26:return c.createAlert("There was an error sending the email to your account.","error"),e.abrupt("break",28);case 28:case"end":return e.stop()}}),e,null,[[2,16]])})));return ();return(0,N.jsxs)(j,{style:{minHeight:"calc(100vh - 270px)"},children:[(0,N.jsx)(k.Z,{width:u?121:188,height:u?76:120}),(0,N.jsxs)(A,{children:[(0,N.jsx)(E,{variant:"h2",id:"secure-email-title","data-test":"secure-email-title",children:"Secure Your Account"}),(0,N.jsx)(S,{}),(0,N.jsx)(d.Z,{variant:"body1",children:z})]}),(0,N.jsxs)(C,{children:[(0,N.jsx)(T,{disabled:r===y.A.SENT,"data-test":"resetbtn-send-again",id:"resetbtn-send-again",size:"large",variant:"contained",onClick:D,children:"Send Email"}),(0,N.jsx)(T,{"data-test":"resetbtn-change-email",id:"resetbtn-change-email",size:"large",variant:"contained",onClick:function(){var e;p("/u/".concat(null===P||void 0===P||null===(e=P.profile)||void 0===e?void 0:e.username,"/s/profile"))},children:"Change Email Address"}),r===y.A.SENT&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d.Z,{variant:"h6",sx:{mb:1},children:"Didn\u2019t get an email?"}),(0,N.jsx)(T,{"data-test":"verifybtn-try-again",id:"verifybtn-try-again",size:"large",variant:"outlined",onClick:children:"Try again?"})]})]})]})}var U=n(70592);function z(){return(0,N.jsxs)(U.Z,{children:[(0,N.jsx)(r.Z,{title:"Verify your Email address"}),(0,N.jsx)(P,{})]})}},53735:]);