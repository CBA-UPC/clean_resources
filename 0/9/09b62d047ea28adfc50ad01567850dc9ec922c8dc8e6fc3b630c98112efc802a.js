(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[62],{423:function(e,t,n){"use strict";n.r(t),function(e){var s=n(3),r=n.n(s),i=n(37),o=n(13),c=n.n(o),a=n(1),u=n(964),p=n(0);class h extends r.a.PureComponent{onSubmit(t,n){t.preventDefault(),e.location=a.A.fantasyPlayers(this.props.device_id,n.join(","),this.props.league)}render(){const e=c()({page:!0,yahooSyncPage:!0});return(Object(p.jsx)(u.a,{className:e,items:this.props.fantasyTeams,onSubmit:this.onSubmit}))}}t.default=Object(i.b)((function(e){const{fantasyTeams:t,device_id:n,league:s}=e.user;return{device_id:n,fantasyTeams:t,league:s}}))(h)}.call(this,n(16))},964:function(e,t,n){"use strict";var s,r,i=n(2),o=n.n(i),c=n(3),a=n.n(c),u=n(13),p=n.n(u),h=n(21),m=n(0);ass d extends a.a.PureComponent{constructor(e){super(e),this.state={items:{}},this.onSubmit=this.onSubmit.bind(this),this.onInputChange=this.onInputChange.bind(this)}onSubmitnInputChange(e){const t=e.target,n=this.state.items;this.setState({items:b(b({},n),{},{[t.name]:t.checked})})}selectedItems(){const e=this.state.items;return Object.entries(e).reduce((e,t)=>{let[n,s]=t;return s?[...e,n]:e},[])}generateList(){return this.props.items.map((e,t)=>{const n=this.state.items[e.id]||!1;return(Object(m.jsxs)("div",{className:"formGroup",children:[Object(m.jsx)("input",{type:this.props.inputType,id:`option-${t}`,name:e.id,checked:n,onChange:this.onInputChange}),Object(m.jsx)("label",{htmlFor:`option-${t}`,children:e.name})]},`item-choice-${t}`))})}render(){const e=p()({itemSelect:!0,molecule:!0});return(Object(m.jsxs)(this.props.tag,{className:e,children:[s||(s=Object(m.jsx)("h4",{children:Object(m.jsx)("span",{children:"Select Teams to Import"})})),Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[this.generateList(),r||(r=Object(m.jsx)(h.Button,{children:"Import Players"}))]})})]}))}}d.defaultProps={tag:"div",items:[],inputType:"checkbox",onSubmit:,t.a=d}}]);
//# sourceMappingURL=https://static-assets.bleacherreport.net/js/yahooSyncPage-16b7ec2c.js.map