nvg90679.config({"acc": "90679", "account": "90679", "version": 7, "ext": ["nvg90679.getH1=function(){var e=document.getElementsByTagName('h1');return e.length&&this.reqParms?void(this.reqParms.h1=escape(function e(n){return n.children.length?e(n.children[0]):'IMG'==n.tagName?n.alt||'':n.innerText}(e[0]))):''},nvg90679.getH1();", "window.nvgGetSegment=function(n){return nvg90679.getSegment(n)},window.ltgc=function(n){return nvg90679.getSegment(n)};"], "tmc": ["nvgAccountID.sendAnalyticsData=function({attrs:a,events:t}){nvgAccountID.include('https://cdnjs.cloudflare.com/ajax/libs/jsencrypt/3.2.1/jsencrypt.min.js');var n=this.acc,c=this.usr;if(n&&c){const o=new Date;let e=[];Array.isArray(t)&&t.map(t=>{'string'==typeof t&&e.push({event_code:t,created_at:o.toISOString(),user_agent:window.navigator.userAgent,page_url:window.location.href})});let s={account_id:n,cookie_id:c,attributes:{},events:e};const r='https://cdp.navegg.com';fetch(`${r}/api/accounts/whoami/${n}/`).then(t=>t.json()).then(t=>{const e=new JSEncrypt;for(var n in e.setPublicKey(t.public_key),a){var c=e.encrypt(a[n]);s.attributes[n]=c}let o={method:'POST',headers:{'Content-Type':'application/json'}};o.body=JSON.stringify(s),fetch(`${r}/api/customers/v1/`,o).then(t=>t.json()).then(t=>(console.log('customer success added!',t),t)).catch(t=>console.error(t))}).catch(t=>console.log(`Some error occurs, ${t}`))}};"], "wct": true, "wla": true, "wst": false, "uqt": 5});