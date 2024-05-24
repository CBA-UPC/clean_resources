(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1530:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(164),o=(n(185),n(191)),l=n.n(o),i=n(697),s=n.n(i);t.default=function(){return r.a.createElement("section",{className:"error-page"},r.a.createElement(c.a,{href:"https://concept3d.com/"},r.a.createElement("img",{src:l.a,className:"error-logo",alt:"concept3d dark logo"})),r.a.createElement("h1",null,"Tour Builder"),r.a.createElement("h3",null,"The requested tour was not found"),r.a.createElement("p",null,"Ensure the correct URL for the tour has been entered,",r.a.createElement("br",null)," or the associated tour or account may be inactivate"),r.a.createElement("img",{src:s.a,className:"tour-not-found-image",alt:"A black and white cat sitting on a desktop computer"}))}},164:function(e,t,n){"use strict";var a=n(12),r=n(0),c=n.n(r),o=["handleClick","newTab","children"];t.a=function(e){var t=e.handleClick,n=e.newTab,r=e.children,l=Object(a.a)(e,o);return c.a.createElement("a",Object.assign({onClick:t,target:n?"_blank":null,rel:n?"noopener noreferrer":null},l),r)}},185:function(e,t,n){},191:function(e,t,n){e.exports=n.p+"static/media/logo_dark.05442d31.svg"},697:function(e,t,n){e.exports=n.p+"static/media/404.5f1747ec.jpg"}}]);ructor;t=Reflect.construct(i,arguments,l)}else t=i.apply(this,arguments);return n=this,!(c=t)||"object"!==a(c)&&"function"!==typeof c?Object(o.a)(n):c}}n.d(t,"a",function(){return c})},153:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return a})},1563:function(e,t,n){"use strict";n.r(t);var r=n(36),a=n(30),o=n(220),c=n(4),i=n(150),l=n(151),u=n(153),s=n(152),p=n(0),f=n.n(p),h=n(406),d=n(35),m=n(164),y=(n(1425),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleCheck=function(t){var n=t.target.name;e.setState(function(e){return Object(c.a)({},n,!e[n])})},e.timer=function(){var t=e.state,n=t.counter,r=t.optingIn,a=t.optingOut,o=e.props,c=o.history,i=o.auth;n?e.setState(function(e){return{counter:e.counter-1}}):(clearInterval(e.state.intervalId),r&&c.push("/home"),a&&i.logout())},e.skipCountdown=function(){e.setState({optingIn:!1,counter:null},function(){return e.props.history.push("/home")})},e.state={terms:!1,privacy:!1,optingOut:!1,optingIn:!1,counter:null},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.userCredentials.privacyPolicy;!e.userCredentials.privacyPolicy&&n&&this.setState(function(e){return{optingIn:!e.optingIn}}),e.userCredentials.privacyPolicy&&!n&&this.setState(function(e){return{optingOut:!e.optingOut}}),!t.optingIn&&this.state.optingIn&&this.setState({counter:5,intervalId:setInterval(this.timer,1e3)}),!t.optingOut&&this.state.optingOut&&this.setState({counter:10,intervalId:setInterval(this.timer,1e3)})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this.state,t=e.terms,n=e.privacy,r=e.optingOut,a=e.optingIn,o=e.counter,c=this.props,i=c.updateUserPrivacyPolicy,l=c.userCredentials,u={uid:localStorage.getItem("uid"),privacyPolicy:!0},s=f.a.createElement(f.a.Fragment,null,f.a.createElement("h3",null,"Opted Out"),f.a.createElement("p",null,"You have successfully opted out of the Concept3D Terms of Service and Privacy Policy. Access to TourBuilder will be unavailable, however you can opt back in at any time."),f.a.createElement("p",{className:"redirect"},"You will be logged out in ",f.a.createElement("span",{className:"count"},o)," ","seconds..."),f.a.createElement(d.a,{className:"opt-btn",handleClick:this.props.auth.logout},"Logout")),p=f.a.createElement(f.a.Fragment,null,f.a.createElement("h3",null,"Opted In"),f.a.createElement("p",null,"You have successfully opted in to the Concept3D Terms of Service and Privacy Policy."),f.a.createElement("p",{className:"redirect"},"You will be redirected to TourBuilder in"," ",f.a.createElement("span",{className:"count"},o)," seconds..."),f.a.createElement(d.a,{className:"opt-btn",handleClick:this.skipCountdown},"Continue")),y=f.a.createElement(f.a.Fragment,null,f.a.createElement("h3",null,"Privacy Settings"),f.a.createElement("p",null,"In order to access this content, you need to consent to Concept3D's privacy policy, including the use of cookies."),f.a.createElement(h.a,{wrapperClass:"checkbox-wrapper",type:"checkbox",name:"terms",id:"terms-btn",checked:t,handleChange:this.handleCheck},f.a.createElement("label",{className:"checkbox-label",htmlFor:"terms-btn"},"I consent to Concept3D's\xa0",f.a.createElement(m.a,{href:"https://concept3d.com/wp-content/uploads/2018/05/Tour-Builder-Terms-of-Service-20180508.pdf",newTab:!0},"Terms of Service"))),f.a.createElement(h.a,{wrapperClass:"checkbox-wrapper",type:"checkbox",name:"privacy",id:"privacy-btn",checked:n,handleChange:this.handleCheck},f.a.createElement("label",{className:"checkbox-label",htmlFor:"privacy-btn"},"I consent to Concept3D's data collection practices, including the use of cookies, stated in their\xa0",f.a.createElement(m.a,{href:"https://www.concept3d.com/wp-content/uploads/2019/03/Privacy-Policy-03262019.pdf",newTab:!0},"Privacy Policy"))),f.a.createElement(d.a,{className:"opt-in-btn",handleClick:function(){return i(u)},disabled:!t||!n},f.a.createElement("i",{className:"material-icons"},"check_circle"),"Opt In"));return f.a.createElement(f.a.Fragment,null,l.hasOwnProperty("privacyPolicy")?f.a.createElement("div",{id:"privacy",style:{backgroundColor:"white"}},f.a.createElement("div",{className:"content-wrapper"},a&&p,r&&s,!r&&!a&&y)):null)}}]),n}(p.Component));t.default=Object(r.c)(function(e){return{userCredentials:e.userCredentials}},function(e){return Object(a.b)({updateUserPrivacyPolicy:o.e},e)})(y)},164:function(e,t,n){"use strict";var r=n(12),a=n(0),o=n.n(a),c=["handleClick","newTab","children"];t.a=function(e){var t=e.handleClick,n=e.newTab,a=e.children,i=Object(r.a)(e,c);return o.a.createElement("a",Object.assign({onClick:t,target:n?"_blank":null,rel:n?"noopener noreferrer":null},i),a)}},166:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return r})},406:function(e,t,n){"use strict";var r=n(150),a=n(151),o=n(153),c=n(152),i=n(0),l=n.n(i),u=(n(428),function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).toggleHover=function(){e.setState(function(e){return{hovering:!e.hovering}})},e.state={hovering:!1},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.hovering,t=this.props,n=t.children,r=t.id,a=t.name,o=t.checked,c=void 0!==o&&o,i=t.handleChange,u=t.wrapperClass,s=t.tooltip;return l.a.createElement("div",{className:u,onMouseEnter:s?this.toggleHover:null,onMouseLeave:s?this.toggleHover:null},l.a.createElement("input",{tabIndex:0,type:"checkbox",name:a,id:r,checked:!!c,onChange:i}),n,e&&!c&&l.a.createElement("span",{className:"tooltip"},s))}}]),n}(i.Component));t.a=u},428:function(e,t,n){}}]);