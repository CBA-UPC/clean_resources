<!-- PageImp data not found -->t,n,r,o,i,u,c,a,f,d={},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={id:e,loaded:!1,exports:{}},r=!0;try{d[e].call(n.exports,n,n.exports,s),r=!1}finally{r&&delete l[e]}return n.loaded=!0,n.exports}s.m=d,s.amdD=function(){throw Error("define cannot be used indirect")},e=[],s.O=function(t,n,r,o){if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var u=1/0,i=0;i<e.length;i++){for(var n=e[i][0],r=e[i][1],o=e[i][2],c=!0,a=0;a<n.length;a++)u>=o&&Object.keys(s.O).every(function(e){return s.O[e](n[a])})?n.splice(a--,1):(c=!1,o<u&&(u=o));if(c){e.splice(i--,1);var f=r();void 0!==f&&(t=f)}}return t},s.F={},s.E=function(e){Object.keys(s.F).map(function(t){s.F[t](e)})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce(function(t,n){return s.f[n](e,t),t},[]))},s.u=function(e){return"static/chunks/"+(238===e?"freemode-slider":e)+"."+({238:"106b61bed6eec9fa",441:"52d2fbcf8d0e0489"})[e]+".js"},s.miniCssF=function(e){return"static/chunks/freemode-slider.a470365e.chunk.css"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="_N_E:",s.l=function(e,r,o,i){if(t[e]){t[e].push(r);return}if(void 0!==o)for(var u,c,a=document.getElementsByTagName("script"),f=0;f<a.length;f++){var d=a[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){u=d;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.setAttribute("data-webpack",n+o),u.src=s.tu(e)),t[e]=[r];var l=function(n,r){u.onerror=u.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(r)}),n)return n(r)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.tt=function(){return void 0===r&&(r={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("nextjs#bundler",r))),r},s.tu=function(e){return s.tt().createScriptURL(e)},s.p="/_next/",o=function(e,t,n,r){var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,a=Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=c,o.parentNode.removeChild(o),r(a)}},o.href=t,document.head.appendChild(o),o},i=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}for(var u=document.getElementsByTagName("style"),r=0;r<u.length;r++){var o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},u={272:0},s.f.miniCss=function(e,t){u[e]?t.push(u[e]):0!==u[e]&&({238:1})[e]&&t.push(u[e]=new Promise(function(t,n){var r=s.miniCssF(e),u=s.p+r;if(i(r,u))return t();o(e,u,t,n)}).then(function(){u[e]=0},function(t){throw delete u[e],t}))},c={272:0,941:0},s.f.j=function(e,t){var n=s.o(c,e)?c[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(/^(238|272|941)$/.test(e))c[e]=0;else{var r=new Promise(function(t,r){n=c[e]=[t,r]});t.push(n[2]=r);var o=s.p+s.u(e),i=Error();s.l(o,function(t){if(s.o(c,e)&&(0!==(n=c[e])&&(c[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}},"chunk-"+e,e)}}},s.F.j=function(e){if((!s.o(c,e)||void 0===c[e])&&!/^(238|272|941)$/.test(e)){c[e]=null;var t=document.createElement("link");s.nc&&t.setAttribute("nonce",s.nc),t.rel="prefetch",t.as="script",t.href=s.p+s.u(e),document.head.appendChild(t)}},s.O.j=function(e){return 0===c[e]},a=function(e,t){var n,r,o=t[0],i=t[1],u=t[2],a=0;if(o.some(function(e){return 0!==c[e]})){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(u)var f=u(s)}for(e&&e(t);a<o.length;a++)r=o[a],s.o(c,r)&&c[r]&&c[r][0](),c[r]=0;return s.O(f)},(f=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}();nter}.ANKuUleziQ47Ezrd{padding:8px 22px;display:flex;align-items:center;justify-content:center}.ANKuUleziQ47Ezrd .HuFdKQbC1DEAMfHG{text-align:center;width:auto}.ANKuUleziQ47Ezrd .vNws4_gaJkIf8ULU{margin-top:0}.ANKuUleziQ47Ezrd .H2b96zVzUdwxdYzV{flex-shrink:0}.cH2keTEx2cIiNl7N{display:none}.nett5LDx4UksELr8{padding:8px 0}.xLXJDmzdooIgMo0o{flex:1 1 auto;width:100%;padding:16px 0 0;box-sizing:border-box;overflow:hidden auto;text-align:left}.NkDAsY8X8qICSrdB{margin:0}.aqXSoox9yM8hgsqs{overflow:hidden}.Hf6ZNYYB84YZ9sIp,.XyXO94mcuaAan1dN{text-align:left;white-space:nowrap}.BeyFFAWAuoYw8nW1{display:block}.BeyFFAWAuoYw8nW1,.XyXO94mcuaAan1dN{overflow:hidden;text-overflow:ellipsis}.Zn7HLxFUVeon9FEL{display:none}.H67X5dNXxaE2tJ3m{display:block}@media (min-width:576px){.OqI51TOf820TqDRr{display:block}}@media (min-width:768px){.x0UkYPIdYq87XEWW{display:block}}@media (min-width:992px){.YVnsOs72WZUF8kQq{display:block}}@media (min-width:1200px){.IOizdZ1iS2AXrFRg{display:block}}.dAG_YoqvkQ8pqDKM{margin-left:8px}.JxjYXXcDYUUIVcJr{box-sizing:border-box}.UiiLCp26WvE2VyPa .BeyFFAWAuoYw8nW1,.UiiLCp26WvE2VyPa .dAG_YoqvkQ8pqDKM,.UiiLCp26WvE2VyPa .pU0xko9o9uYzEkqP{opacity:.6}.UiiLCp26WvE2VyPa:hover{color:#0073ff;border-color:rgba(0,115,255,.2)}.lOoXXnxPjokwSNoO,.lOoXXnxPjokwSNoO:hover{color:#0073ff;border:1px solid rgba(0,115,255,0);border-image:initial;background-color:rgba(0,115,255,.1)}.lOoXXnxPjokwSNoO .BeyFFAWAuoYw8nW1,.lOoXXnxPjokwSNoO .dAG_YoqvkQ8pqDKM,.lOoXXnxPjokwSNoO:hover .BeyFFAWAuoYw8nW1,.lOoXXnxPjokwSNoO:hover .dAG_YoqvkQ8pqDKM{color:#808999}.UiiLCp26WvE2VyPa .lOoXXnxPjokwSNoO,.UiiLCp26WvE2VyPa .lOoXXnxPjokwSNoO:hover{color:#0073ff;border-color:rgba(0,115,255,0)}.yh1rKbm2Mz8qSBqn.NkDAsY8X8qICSrdB{text-align:left}@media (min-width:576px){.r5AYzRlHW4mdg1eC.NkDAsY8X8qICSrdB{text-align:left}}@media (min-width:768px){.fzVVSXusDs_HFpmE.NkDAsY8X8qICSrdB{text-align:left}}@media (min-width:992px){.pqw3exB1sItmSkFN.NkDAsY8X8qICSrdB{text-align:left}}@media (min-width:1200px){.Uj37yXBwogl_SkNi.NkDAsY8X8qICSrdB{text-align:left}}.n0ZSBmFo2KcfD2ao{align-self:stretch}.gBCpyhGBA0B8QXSC{width:auto}.ZMRw2up8sFQzpf8S{opacity:.6}.ITMUH0iXeAlrodLw{padding:8px 20px}.GbCOgDvhhVEpXeHj{padding:16px}.fNqy2zOHRjk4LPRg{margin:0 -20px;padding:8px 20px;width:auto}.y__633Ph_BMPytp2{z-index:999;position:relative}@media (min-width:992px){.lc5szK7HmeQvcV7q{max-width:146px}}@media (max-width:992px){.lc5szK7HmeQvcV7q{max-width:123px}}.dO8KVNLh8YFw20kI{padding:10px 4px;cursor:pointer}.ljsANxGlil8JrmN_{margin-right:0}.hiiwJF6SADke06qS{font-size:17px;line-height:20px;font-weight:700;margin-left:-16px}.Q72LyS_8sI9Y4CE6{margin-left:-6px;opacity:.6}.espgk7lfLSsF5fJi{width:32px;height:32px}@media (max-width:990px){.hiiwJF6SADke06qS{height:22px;margin-left:-14px}.espgk7lfLSsF5fJi{height:20px}}.A5HNZUUIwgItXL75{display:flex;text-align:center;width:100%}.A5HNZUUIwgItXL75.xhAp7cyydoVlhr7d{padding-top:16px;display:block}.J16eOlMeSUUeuZrx{flex:1 1 0}.J16eOlMeSUUeuZrx+.J16eOlMeSUUeuZrx{margin-left:16px}.ec8YSYDcqZsYmNKb{padding:20px 16px}.aOQouk933IQ6n_b7{position:absolute;top:8px;right:8px}.tTmOf2vgiyA6XV8q{align-self:stretch;position:relative;padding-top:1px;box-sizing:border-box}.tTmOf2vgiyA6XV8q.j0us1IzT82cBm_R9{align-items:center;display:flex}.CX7gFfDAOQQjFU0i.tTmOf2vgiyA6XV8q.j0us1IzT82cBm_R9{align-items:normal;display:block}@media (min-width:576px){._SZbIqZ6Sg8shw7v.tTmOf2vgiyA6XV8q.j0us1IzT82cBm_R9{align-items:normal;display:block}}@media (min-width:768px){.Tw3mWTfgdbM1iUlR.tTmOf2vgiyA6XV8q.j0us1IzT82cBm_R9{align-items:normal;display:block}}@media (min-width:992px){.dpM8TX5PlNIAsaKX.tTmOf2vgiyA6XV8q.j0us1IzT82cBm_R9{align-items:normal;display:block}}@media (min-width:1200px){.XTH1GJX_A7gDhvWl.tTmOf2vgiyA6XV8q.j0us1IzT82cBm_R9{align-items:normal;display:block}}.ZJ82wi4EaykCxExV{opacity:.6}.ZJ82wi4EaykCxExV:hover{opacity:1}.ZJ82wi4EaykCxExV:after{content:"";display:block;position:absolute;top:-4px;bottom:-4px;right:-12px;left:0;border-top-right-radius:6px;border-bottom-right-radius:6px}.prALY6N95FYX_Mkf .ZJ82wi4EaykCxExV:after{top:-8px;bottom:-8px;right:-16px}@media (min-width:576px){.Oixwwq3OoyU0KFXJ .ZJ82wi4EaykCxExV:after{top:-8px;bottom:-8px;right:-16px}}@media (min-width:768px){.ldxczn8jDcsrMtKb .ZJ82wi4EaykCxExV:after{top:-8px;bottom:-8px;right:-16px}}@media (min-width:992px){.T_0Jg7tiWzcq2ipG .ZJ82wi4EaykCxExV:after{top:-8px;bottom:-8px;right:-16px}}@media (min-width:1200px){.PenbU6hepGwpD69N .ZJ82wi4EaykCxExV:after{top:-8px;bottom:-8px;right:-16px}}.pT7QFpDzfrwCZvQ9{display:flex;flex-direction:column}.pQZF68M_MFIrSS4T{display:flex;margin-left:auto}.zHR9voVxAdoHyauf{display:flex;padding-right:8px;margin-left:8px}.tKqFD_E3nH85uTD9{padding-right:8px}.tW0LhoRnyEytMnEK{margin-bottom:16px}.h1gvNTE4UeYyG2H3{display:flex;margin-bottom:12px;align-items:center;cursor:pointer}.h1gvNTE4UeYyG2H3.ms7AZOU72S4M7nVQ{cursor:default}.h1gvNTE4UeYyG2H3.ms7AZOU72S4M7nVQ .lYxBQ_GUOaUjMUaf,.h1gvNTE4UeYyG2H3.ms7AZOU72S4M7nVQ .zHR9voVxAdoHyauf{opacity:.4}.h1gvNTE4UeYyG2H3.yV6ZBhFF2yQ78lvI{margin-top:-4px;margin-bottom:12px}.h1gvNTE4UeYyG2H3.yV6ZBhFF2yQ78lvI .zHR9voVxAdoHyauf{padding:4px 8px;border-radius:6px}.h1gvNTE4UeYyG2H3.yV6ZBhFF2yQ78lvI .pQZF68M_MFIrSS4T{margin-top:4px}.lYxBQ_GUOaUjMUaf{color:#808999;margin-right:8px}.qrGeJm_ej8rvIvSu{padding-right:0}._tXcTbLjYCcQu1D6{margin-right:0}.AEsPnNr_FLgMbfsc{margin-right:0;display:inline-flex}.GU_nQ8bNlMEnYbXZ{display:inline-block;vertical-align:top;overflow:hidden;height:20px;flex-grow:0;flex-shrink:0;margin-left:-8px;margin-bottom:-2px;margin-right:4px;padding-left:4px}.GU_nQ8bNlMEnYbXZ.hEYgoJU5GgXTlTjx{height:16px;margin-top:2px}.ybA_PMFvSM9_ivUb{z-index:999;position:relative}.wE63Z8Sqhko8lrAi label:last-child{margin-bottom:0}@media (min-width:992px){.NaiTlFugMRsvQpNr{max-width:265px}}@media (max-width:992px){.NaiTlFugMRsvQpNr{overflow:hidden scroll;max-height:380px}}.EPImMyii52QXsM6V{position:fixed;background:#fff;padding:20px;border-radius:6px;box-shadow:0 5px 19px -1px #c3cfdf;z-index:2}.EPImMyii52QXsM6V:before{content:"";position:absolute;top:-4px;left:25%;width:20px;height:20px;background-color:#fff;transform:rotate(45deg)}.mMrLAdK05eM1yHVx:before{top:calc(100% - 16px)}.Ky8rudzSmqA660Jz{position:absolute;right:4px;top:4px;color:#c3cfdf;cursor:pointer}.d8KRrBGTaiE98d4t{background:#fff;max-width:920px;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.d8KRrBGTaiE98d4t::-webkit-scrollbar{display:none}.kHobJAspt8Y7_RmI{display:grid;grid-template-columns:repeat(6,max-content);gap:8px;background:#fff;z-index:2}@media (max-width:768px){.uEu2Mx7NVass90bM{position:fixed;left:0;top:0;width:100vw;padding:8px;background:#fff;box-shadow:0 1px 0 rgba(75,106,166,.16);z-index:11;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.uEu2Mx7NVass90bM::-webkit-scrollbar{display:none}}.PPKud9n8XJ4qnaEj{display:flex;align-items:center;justify-content:center;background:#dceeff;border-radius:5px;overflow:hidden;padding:0 5px}.Tr8WPOAYAElZB2En{cursor:pointer}.CB79Tj7A64wOEjhd{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+PHBhdGggZD0iTTQyLjIgNjIuMDIzYTUuMjk3IDUuMjk3IDAgMDEuNTMgMy43NTggNC4xNiA0LjE2IDAgMDEtLjExNS40MDMgNC41NzIgNC41NzIgMCAwMS00LjIxNyAzLjAzN2wtMjAuNDYuNzYyYy0zLjM0NS4xNi02LjY0NS0uODMtOS4zNS0yLjgwMy0uMTc0LS4xMzItLjM1LS4yNzQtLjUyMi0uNDA5YTEwLjMwMiAxMC4zMDIgMCAwMS0uNTQ5LS40NzIgMTQuNDk3IDE0LjQ5NyAwIDAxLTQuNTAxLTguNTc3TC4xNiAzOS4yNjlhOC4zMTQgOC4zMTQgMCAwMS40OTQtNC44NTcgNy45MjcgNy45MjcgMCAwMTMuMTAzLTMuNTI4IDEwLjA2NCAxMC4wNjQgMCAwMTYuMDUtMS40NjJsOC4xNC41NDlhNC45ODcgNC45ODcgMCAwMTQuNDg3IDMuNjQybDQuMzIgMjAuODEyYTYuNDU3IDYuNDU3IDAgMDAzLjcwNiA0LjE4M2wxMS43NCAzLjQxNXoiIGZpbGw9IiM1M0NGQ0IiLz48cGF0aCBkPSJNNS4wNiAzMC4yMDRjMS40OTktLjYzIDMuMTI1LS44OTggNC43NDgtLjc4Mmw4LjEzOC41NDlhNC45ODcgNC45ODcgMCAwMTQuNDg4IDMuNjQybDQuMzIgMjAuODEyYTYuNDU2IDYuNDU2IDAgMDAzLjcwNiA0LjE4M2wxMS43NCAzLjQwNGMuMDQxLjA2OS4xMDcuMi4xODEuMzZsLTIwLjgxNC42MjVBMTQuNzU4IDE0Ljc1OCAwIDAxNy45MDEgNTEuMzg4TDUuMDYgMzAuMjA0eiIgZmlsbD0iIzUwQjRCQyIvPjxwYXRoIGQ9Ik0zOC4zNDQgMzQuMTI0bC0yLjMyNy0uNDEyLTkuNTUtLjI0Ny4xMjMtMTIuNzYzIDExLjc3My00LjMyMy0uMDIgMTcuNzQ1eiIgZmlsbD0iIzg0MkQ0NCIvPjxwYXRoIGQ9Ik0yNS4yMzcgMjEuNjloMi45NTJ2Ni41NDRoLTIuOTUyVjIxLjY5eiIgZmlsbD0iI0VCODg2QyIvPjxwYXRoIGQ9Ik0yMC4xMjQgMTIuMjVhMi4yMyAyLjIzIDAgMDExLjE3Ny4wMzljLjQwNy4xMy43NzcuMzU1IDEuMDguNjU1Ljg1Ny00LjExNCA0LjE1MS03LjE3IDguMDk2LTcuMTcgNC41OTEgMCA4LjMxNyA0LjE0OCA4LjMxNyA5LjI2NiAwIDUuMTE5LTMuNzI2IDkuMjY5LTguMzE3IDkuMjY5LTMuNjQ2IDAtNi43MzUtMi42Mi03Ljg2LTYuMjU0LS4zMy4yMDMtLjcwOS4zMTItMS4wOTcuMzE1LTEuNDk0IDAtMi45NTQtMS44MjctMi45MDItMy41NjYuMDMzLS45OTMuNTU1LTIuMjggMS41MDYtMi41NTN6IiBmaWxsPSIjRkZBQTgzIi8+PHBhdGggZD0iTTM0Ljk0NSAxOC42M2EyNy4xMzYgMjcuMTM2IDAgMDEtNi4yMy4wMjcgMy4xMTYgMy4xMTYgMCAxMDYuMjMtLjAyNnoiIGZpbGw9IiNBRjNDNDciLz48cGF0aCBkPSJNMjcuNzYxIDE0LjgzN2MwIC42MzQuMzc5IDEuMTQ0Ljg0NSAxLjE0NC40NjYgMCAuODQyLS41MS44NDItMS4xNDQgMC0uNjMzLS4zNzgtMS4xNDQtLjg0Mi0xLjE0NC0uNDY0IDAtLjg0NS41MTMtLjg0NSAxLjE0NHpNMzUuMDU1IDE0LjgzN2MwIC42MzQuMzc4IDEuMTQ0Ljg0NSAxLjE0NC40NjYgMCAuODQyLS41MS44NDItMS4xNDQgMC0uNjMzLS4zNzktMS4xNDQtLjg0Mi0xLjE0NC0uNDY0IDAtLjg0NS41MTMtLjg0NSAxLjE0NHpNMjkuNDU5IDEyLjYxM2EuMjc0LjI3NCAwIDAwLjE2LS4wNTMuMjc0LjI3NCAwIDAwLjA2NS0uMzggMS40ODMgMS40ODMgMCAwMC0xLjA5Ny0uNjA3IDEuNTAzIDEuNTAzIDAgMDAtMS4yMTMuNTY1LjI3NS4yNzUgMCAwMC40MzYuMzM1Ljk1OS45NTkgMCAwMS43NS0uMzUxLjk0NS45NDUgMCAwMS42OC4zNzUuMjc1LjI3NSAwIDAwLjIxOS4xMTZ6TTM2LjgzMiAxMi42MTNhLjI3NC4yNzQgMCAwMC4xNi0uMDUzLjI3NC4yNzQgMCAwMC4wNjUtLjM4IDEuNDgzIDEuNDgzIDAgMDAtMS4wOTctLjYwNyAxLjUwMiAxLjUwMiAwIDAwLTEuMjEzLjU2NS4yNzQuMjc0IDAgMDAuNDIuMzMyLjg4NS44ODUgMCAwMTEuNDMuMDI3LjI3Ni4yNzYgMCAwMC4yMzUuMTE2eiIgZmlsbD0iIzdGMjYzRiIvPjxwYXRoIGQ9Ik0yMC4xMjQgMTIuMjVjLjM4OS0uMDkyLjc5Ni0uMDc5IDEuMTc3LjAzOS40MDcuMTMuNzc3LjM1NSAxLjA4MS42NTUuNjk3LTMuMzQ5IDMuMDE3LTYuMDAxIDUuOTg4LTYuODU3LTEuMzcyIDEuMzMzLTMuMjkyIDMuNzY2LTMuNjgxIDcuMjQyLS4wODIuNzI0LS42NzUgNi43NTMgMy41NjYgOS42MzZhOC4wMTggOC4wMTggMCAwMDMuMzEgMS4yNjdjLS4zNjIuMDU2LS43My4wODYtMS4wOTcuMDg4LTMuNjQ1IDAtNi43MzQtMi42Mi03Ljg1OC02LjI1NC0uMzMuMjAzLS43MS4zMTItMS4wOTguMzE1LTEuNDk1IDAtMi45NTQtMS44MjctMi45MDItMy41NjYuMDQxLTEuMDA0LjU2My0yLjI5IDEuNTE0LTIuNTY0eiIgZmlsbD0iI0VCODg2QyIvPjxwYXRoIGQ9Ik0zMy43NzYgMTguNzQzaC4wMmEyLjM5NSAyLjM5NSAwIDAxLTEuOCAxLjA0IDIuNDE4IDIuNDE4IDAgMDEtMS45OTctMS4wMTJoLjAzYy42MDQuMDM1IDEuMjQuMDU3IDEuOTIuMDUyLjY4LS4wMDYgMS4yNTEtLjAzNiAxLjgyNy0uMDh6IiBmaWxsPSIjRjJFM0U1Ii8+PHBhdGggZD0iTTE4LjcwOSA1LjA0NWE1LjExOSA1LjExOSAwIDAxNC40NDQtMi43OThBMi4xMjggMi4xMjggMCAwMTIzLjcuNmEyLjA5MiAyLjA5MiAwIDAxMS40ODctLjZjMi40MzMuMDUxIDcuNzggMCA4LjA2NyAwYTguNjIgOC42MiAwIDAxMS43MTcuNGMyLjgxLjk2MiA0LjM0MyAzLjE0NiA0LjkzOCAzLjk4OGExMi42MTggMTIuNjE4IDAgMDEyLjE5NCA2Ljk3NXYxOC43NDFhNS43ODggNS43ODggMCAwMS0xLjc1OCAzLjE4N2MtLjQwMy4zNTQtMS4zNDEgMS4xNzQtMS45ODMuODM3LS41NDktLjI5My0uNTQ5LTEuMjY3LS41NDktMS40MVYxMy4xMTJjLjAxNy0uMzk1LjA2My0yLjYyNS0xLjM0Ny00LjUyYTYuMDIzIDYuMDIzIDAgMDAtLjc3LS44NTEgNi4yNjMgNi4yNjMgMCAwMC0xLjYyNy0xLjA1NiA4LjA0MyA4LjA0MyAwIDAwLTIuOTE5LS42ODkgOC4xMjUgOC4xMjUgMCAwMC0yLjEuMTNjLjAyNy4yMS40IDMuMzMyLTIuMDQ0IDUuMzk4YTYuMTM3IDYuMTM3IDAgMDEtNC42MTQgMS4zNDFoLS4xMDdhMi43MTggMi43MTggMCAwMC0uOTktLjU3OSAyLjI5NiAyLjI5NiAwIDAwLTEuMTc0LS4wMzVjLS45NTguMjc0LTEuNDc2IDEuNTc3LTEuNTA2IDIuNTU2LS4wNDcgMS43MzQgMS40MTIgMy41NjYgMi45MDQgMy41NjZhMi4xMzUgMi4xMzUgMCAwMDEuMDk4LS4zMTggOS4zNSA5LjM1IDAgMDAyLjYyIDQuMTY2djYuMDM1aDEuMzg0Yy4xMDEgMS44OC4yMDYgMy43NjguMzE2IDUuNjY1LTMuNDYyLS4zNDMtNi4wNzYtMS4xOC03LjIwMy0yLjA3MWE0LjcgNC43IDAgMDEtMS4wOTgtMS4yNyA0LjA3NyA0LjA3NyAwIDAxLS40NzEtMS45OFY2Ljk2NmE1LjE2IDUuMTYgMCAwMS41NDMtMS45MjJ6IiBmaWxsPSIjQTQ0MzRDIi8+PHBhdGggZD0iTTQxLjM0NCA1MS4zMTJhLjgyMi44MjIgMCAwMC41NjYtMS40MTkgMTYuNDIyIDE2LjQyMiAwIDAxLTQuNDIyLTcuMDU1Yy0uODg2LTIuODI1LTEuODU3LTcuNDk0LTIuODgzLTEzLjg4MmEuODI0LjgyNCAwIDAwLTEuNjI0LjI3NGMxLjA0IDYuNDYzIDIuMDI3IDExLjIxIDIuOTM4IDE0LjExMy4wODUuMjc0LjE1My40OC4yMjguNjg4YTE4LjA1IDE4LjA1IDAgMDA0LjYzIDcuMDY2LjgyMy44MjMgMCAwMC41NjcuMjE1eiIgZmlsbD0iI0VCODg2QyIvPjxwYXRoIGQ9Ik0yMC4wOCAyOC42OWExMC45MDQgMTAuOTA0IDAgMDExMy4zODEtLjEyNCA5Ljk1NSA5Ljk1NSAwIDAwMS40ODEgNS45NjkgMy4xNDggMy4xNDggMCAwMS0xLjY0NSAyLjYzNmwuNDk5IDExLjQ4NUgyMi4wODNjMS4xLTQuNTY5IDEuMTM2LTkuMzMuMTA0LTEzLjkxNWEyOS43MiAyOS43MiAwIDAwLTIuMTA2LTYuMDUxeiIgZmlsbD0iI0RGMTk0MCIvPjxwYXRoIGQ9Ik0yNi40MjUgMjYuMzQyYTEwLjc0NCAxMC43NDQgMCAwMTMuNDQ1LjQzYy4zOTggMS4yMDcuOTk2IDMuNTM2LjA1MiA0LjU1LS40MjguNDY1LTEuMDUuNTItMS40OC41NS0yLjA5NC4xODYtMy43NDgtMS43NDItNC41My0yLjY1NmExMC4wMiAxMC4wMiAwIDAxLTEuMzMtMi4wMSAxMC44MiAxMC44MiAwIDAxMy44NDMtLjg2NHoiIGZpbGw9IiNFQjg4NkMiLz48cGF0aCBkPSJNMjUuNTI1IDQ1LjI1YzMuNDM1IDAgNi4zNTYtNy44MTMgOC4zLTEzLjk0bDQuMzktMS42NDdhLjgyMy44MjMgMCAwMC0uNTc2LTEuNTQxbC00Ljc3NiAxLjc4M2EuODIyLjgyMiAwIDAwLS40OTYuNTI0Yy0xLjE5NCAzLjc5Ni0yLjM2IDYuODU3LTMuNDYyIDkuMDc2LTEuOTM0IDMuOTA2LTMuMTI1IDQuMTE1LTMuNDQzIDQuMDkzaC0uMDc2Yy0uNjQtLjExOC0yLjgxNS0xLjQzNS00LjAyNy0xMy40NzRhLjgyNy44MjcgMCAwMC0xLjY0Ni4xNjVjLjYxNCA2LjA5OCAxLjgzOCAxNC4yOCA1LjM2NSAxNC45MjcuMDc3LjAxNi4xNTUuMDI3LjIzMy4wMzNoLjIxNHoiIGZpbGw9IiNGRkFBODMiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGg0MnY0MEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPgo=) no-repeat;background-size:contain;height:40px;width:42px;margin-right:12px}.Gn1BfEEy6HseUrxw{width:auto;margin:0;line-height:1}.Cky9BV3Sfpk_RpGC{display:grid;gap:12px;margin-bottom:24px}.lKzkC8R0pvMI9EpH{display:flex;flex-wrap:wrap;gap:8px}.yNm7ONXHOGosnipb{margin:0}.VH_qeTql1VAde8uR{display:none}.NlSZBWLUhE0GXlI0{display:grid;gap:12px}.NlSZBWLUhE0GXlI0 .J_uCgHTAeLY2Zu08{padding:16px;display:grid;gap:16px}.Rug7QRCrwTQUdwjJ{margin-right:10px;color:#808999}.ke_JziiS2Ex758fW{display:flex;flex-wrap:nowrap;align-items:center;gap:4px}@media (max-width:576px){.ke_JziiS2Ex758fW{margin-top:-2px}}.Mfwiv7joJIiRMQPT{margin:22px 0 33px}.Mfwiv7joJIiRMQPT label a{display:inline;text-decoration:none;color:#0073ff;cursor:pointer}.Mfwiv7joJIiRMQPT label a:hover{color:#ff4169}.Mfwiv7joJIiRMQPT .U7tTeBXtVhkKXBTA{margin-top:8px;color:#ff4169;font-size:13px}@media (max-width:992px){.Mfwiv7joJIiRMQPT{margin:22px 0 33px}}.Mfwiv7joJIiRMQPT .tutu-widget-comments h2{margin-left:0}.Mfwiv7joJIiRMQPT .tutu-widget-comments__form{border-radius:12px}@media (max-width:576px){.Mfwiv7joJIiRMQPT .tutu-widget-comments__form{border-radius:8px}}.Mfwiv7joJIiRMQPT .tutu-widget-comments__form__field{padding:10px;box-shadow:none}.Mfwiv7joJIiRMQPT .tutu-widget-comments-form-message__success{margin-left:0}.Mfwiv7joJIiRMQPT .tutu-widget-comments__form__row__note{color:#808999}.Mfwiv7joJIiRMQPT .tutu-widget-comments__form__row__txt{display:none}.Mfwiv7joJIiRMQPT .tutu-widget-comments__form__row._button{background-color:#f0f4f8}.Mfwiv7joJIiRMQPT .tutu-widget-comments__form__row._button._disabled{opacity:.6}.Mfwiv7joJIiRMQPT .tutu-widget-comments__form__row._button._disabled input{cursor:not-allowed;pointer-events:auto}.Mfwiv7joJIiRMQPT .tutu-widget-comments__frame._new .tutu-widget-comments__frame__door{margin-left:36px}.Mfwiv7joJIiRMQPT .tutu-widget-comments__list li{border-radius:12px;background-color:#fff}@media (max-width:576px){.Mfwiv7joJIiRMQPT .tutu-widget-comments__list li{border-radius:8px}}.Mfwiv7joJIiRMQPT .tutu-widget-comments__list__info__date{color:#808999}.Mfwiv7joJIiRMQPT .tutu-widget-comments__list__answer{border-top-color:#808999}.Mfwiv7joJIiRMQPT .tutu-widget-comments__list__info__item._estimate{color:#808999}.Mfwiv7joJIiRMQPT .tutu-widget-comments__more span{background:none;border:1px solid rgba(0,115,255,.4);color:#0073ff;padding:8px;height:auto}.Mfwiv7joJIiRMQPT .tutu-widget-comments__more span:hover{background:none;border-color:rgba(255,65,105,.4);color:#ff4169}.Mfwiv7joJIiRMQPT .tutu-widget-comments__form__button{background-image:linear-gradient(123deg,#00dcff,#0073ff 72%,#aa5aff);color:#fff;padding:10px;border-radius:6px;cursor:pointer}.Mfwiv7joJIiRMQPT .tutu-widget-comments__form__button:hover{background-image:linear-gradient(115deg,#00dcff,#0073ff 57%,#aa5aff 79%,#ff4169)}@media (max-width:425px){.Mfwiv7joJIiRMQPT .tutu-widget-comments__form__row__note{display:none}}.xiaQCKkxlK8LnL1m{margin:0;display:block}@media (max-width:576px){.xiaQCKkxlK8LnL1m{font-size:17px;line-height:20px;margin:0 0 6px}}.w2NJm1f2QSwyi0JQ{position:relative}._1AsQ_HxRbocG8BM{display:inline-block;vertical-align:middle;margin-left:5px;color:#0073ff;cursor:pointer}.o4cj6BOFoAAU3kpC{display:none}.o4cj6BOFoAAU3kpC.pgHIamQq9b0PNv2h{display:block}.V_tMyX1QS4X_IY7X{margin-bottom:8px}.PV1MXSPk01o5cDKC{margin:0 0 8px}.Ukd21MXLBwQ7leHG{margin-top:15px}.lq1Ie18gZfAUZmpp{display:grid;justify-items:center;padding:36px 0;background-color:#fff}.rWwttDWe01AoSQ2A{position:relative;min-height:120px;width:100%;margin-bottom:12px}.rWwttDWe01AoSQ2A img{object-fit:contain}.uY6IVlYEopkNvQoK{box-shadow:none;padding:0 24px;display:flex;min-height:156px}.zYsXS6itki03hZIw{position:relative;align-self:stretch;min-width:356px;background-repeat:no-repeat;background-size:cover;background-position:50% 0}.zYsXS6itki03hZIw .DyxU0saax5IszgC9{object-fit:contain}.wEK4DgSipOkUrguh{align-self:center;padding:24px 34px}.X6QdvY7JbE_ItX_4{margin-bottom:6px}.Nrmo0jiznTIIhXTl{display:block}.zXXMTOpn5DEH6sbX{display:block;text-decoration:none;color:#000}.dOGUpJmcNlgyezfh{padding-left:0;overflow:hidden;color:#fff;cursor:pointer;background:#08122d;border:none}.apn5XEVckhgGkpD4{max-width:300px;margin:0}.dfO2nWkLRoU5p18_{padding:0 7px}@media (max-width:768px){.uY6IVlYEopkNvQoK{padding:0}.wEK4DgSipOkUrguh{padding:24px}.Nrmo0jiznTIIhXTl{display:none}}@media (max-width:650px){.uY6IVlYEopkNvQoK{flex-direction:column;min-height:auto;position:relative}.uY6IVlYEopkNvQoK:before{content:"";display:block;position:absolute;top:100px;left:0;right:0;border:1px solid #f4f6f9}.zYsXS6itki03hZIw{min-width:auto;height:100px;background-size:contain}.wEK4DgSipOkUrguh{padding:12px 16px 14px}.X6QdvY7JbE_ItX_4{display:block;font-size:16px;text-align:center;margin:0}}.NT54KwOVsUpJt1Ps{position:relative}.Ryh_W4IVio0kJKtv{position:absolute;right:0;top:0;padding:8px;cursor:pointer}.VJlP7Kwr4ssNgcYb{position:relative;cursor:pointer;display:inline-flex;align-items:center;height:16px;width:16px}.BlUztTZMpr8MHif5{display:inline-block;margin:0 0 0 5px}.rJvOgU5OyPoMnpbT{margin:0 0 8px;width:auto}.uzeCI07Bfr4o85Q6{margin:0}@media (min-width:576px){.S3gakVmVgO8vk34r{max-width:250px}.rJvOgU5OyPoMnpbT{margin:0}}.Au7cIaesnIoHa3S0,.voqrIuPjlEomqqQQ{display:grid;gap:12px}.Bb5vBOJN0QN9cm9K{width:220px;height:124px;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE0IiBoZWlnaHQ9IjEwNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuMSAxMDAuN0gxOTNjMS40IDAgMi41LjkgMi41IDJzLTEuMSAyLTIuNSAySDExLjFjLTEuNCAwLTIuNS0uOS0yLjUtMi0uMS0xLjEgMS4xLTIgMi41LTJ6IiBmaWxsPSIjRTdFREY0Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MC43IDEwMC40YzYuMS4xIDExLTQuOCAxMS4xLTEwLjkuMS02LjEtNC44LTExLTEwLjktMTEuMS02LjEtLjEtMTEgNC44LTExLjEgMTAuOSAwIDYgNC45IDExIDEwLjkgMTEuMXpNMTYwLjcgMTAxLjNjNi4xLjEgMTEtNC44IDExLjEtMTAuOS4xLTYuMS00LjgtMTEtMTAuOS0xMS4xLTYuMS0uMS0xMSA0LjgtMTEuMSAxMC45LS4xIDYuMSA0LjggMTEgMTAuOSAxMS4xeiIgZmlsbD0iIzAwMCIvPjxwYXRoIG9wYWNpdHk9Ii41IiBkPSJNOTEuNCA0NC41aDEyYzQuNCAwIDggMy42IDggOHY0YzAgNC40LTMuNiA4LTggOGgtMTJjLTQuNCAwLTgtMy42LTgtOHYtNGMwLTQuNSAzLjUtOCA4LTh6TTEzMS40IDQ0LjZoMTJjNC40IDAgOCAzLjYgOCA4djRjMCA0LjQtMy42IDgtOCA4aC0xMmMtNC40IDAtOC0zLjYtOC04di00YzAtNC41IDMuNS04IDgtOHpNNTEuNCA0NC40aDEyYzQuNCAwIDggMy42IDggOHY0YzAgNC40LTMuNiA4LTggOGgtMTJjLTQuNCAwLTgtMy42LTgtOHYtNGMwLTQuNCAzLjUtOCA4LTh6TTExLjQgNDQuM2gxMmM0LjQgMCA4IDMuNiA4IDh2NGMwIDQuNC0zLjYgOC04IDhoLTEyYy00LjQgMC04LTMuNi04LTh2LTRjMC00LjQgMy41LTggOC04eiIgZmlsbD0iI0MzQ0ZERiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuOSA2NS42djIzLjJjMCAxLjEuOSAyIDIgMmwxNzQgMS43YzEuMSAwIDItLjkgMi0yVjY3LjdsLTE3OC0yLjF6IiBmaWxsPSIjODA4ODk5Ii8+PHBhdGggb3BhY2l0eT0iLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzAuNiAxNmMwLTQuNC0zLjUtOC03LjktOC4xTDkuOSA3LjhzLS44IDEtMS4zIDEuOWMtLjUuOC0xLjUgMi43LTIuMiA1LjYtLjMgMS4xLS42IDIuMy0uOSAzLjktLjQgMi4xLS44IDQuNy0xIDYuOS0uNiA1LjUtLjkgMTAuNy0xLjEgMTUuNi0uMSA0LjItLjEgMTItLjEgMTJsMTkgLjJjNC40IDAgOC0zLjUgOC4xLTcuOWwuMi0zMHoiIGZpbGw9IiNDM0NGREYiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTQ2LjcgOC4xbDIwIC4yYzQuNCAwIDggMy43IDcuOSA4LjFsLS4zIDMwYzAgNC40LTMuNyA4LTguMSA3LjlsLTIwLS4yYy00LjQgMC04LTMuNy03LjktOC4xbC4zLTMwYzAtNC40IDMuNi03LjkgOC4xLTcuOXpNOTAuNiA4LjZsMjAgLjJjNC40IDAgOCAzLjcgNy45IDguMWwtLjMgMzBjMCA0LjQtMy43IDgtOC4xIDcuOWwtMjAtLjJjLTQuNCAwLTgtMy43LTcuOS04LjFsLjMtMzBjLjEtNC40IDMuNy04IDguMS03Ljl6IiBmaWxsPSIjQzNDRkRGIi8+PHBhdGggb3BhY2l0eT0iLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI2LjYgMTYuOWMwLTQuNCAzLjctOCA4LjEtNy45bDU4LjguNnMzLjUgMi44IDUgMTcuNWMuMSAxLjIuNCA0LjQuNSA1LjUuNiA4LjcuMiAyMyAuMiAyM2wtNjQuOS0uN2MtNC40IDAtOC0zLjctNy45LTguMWwuMi0yOS45eiIgZmlsbD0iI0MzQ0ZERiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEwLjIgNTQuN2wtMjAtLjJjLTQuNCAwLTgtMy43LTcuOS04LjFsLjMtMzBjMC00LjQgMy43LTggOC4xLTcuOWwyMCAuMmM0LjQgMCA4IDMuNyA3LjkgOC4xbC0uMyAzMGMtLjEgNC40LTMuNyA4LTguMSA3Ljl6bS00NC0uNGwtMjAtLjJjLTQuNCAwLTgtMy43LTcuOS04LjFsLjMtMzBjMC00LjQgMy43LTggOC4xLTcuOWwyMCAuMmM0LjQgMCA4IDMuNyA3LjkgOC4xbC0uMyAzMGMtLjEgNC40LTMuNyA3LjktOC4xIDcuOXptMTMyLjkgMS41di0uMmwtNjQuOS0uNmMtNC40IDAtOC0zLjctNy45LTguMWwuMy0zMGMwLTQuNCAzLjctOCA4LjEtNy45bDU4LjguNkMxODcuMiAyLjMgMTczIDEuNCAxNzMgMS40TDMwLjYgMFMxNi4zLjYgOS45IDcuOGwxMi44LjFjNC40IDAgOCAzLjcgNy45IDguMWwtLjMgMzBjMCA0LjQtMy43IDgtOC4xIDcuOWwtMTktLjJ2LjJsLS4zIDI1LjhjMCA0LjQgMy41IDggNy45IDguMWw2IC4xYy42LTcuMyA2LjctMTIuOSAxNC4xLTEyLjkgNy40LjEgMTMuNCA1LjkgMTMuOCAxMy4xbDU4IC42Yy42LTcuMyA2LjctMTIuOSAxNC4xLTEyLjkgNy40LjEgMTMuNCA1LjkgMTMuOCAxMy4xbDU5IC42aDFjNC40IDAgOC0zLjUgOC4xLTcuOWwuNC0yNS44eiIgZmlsbD0iI0MzQ0ZERiIvPjxwYXRoIGQ9Ik0zLjUgNzAuN2g0YzEuOSAwIDMuNSAxLjYgMy41IDMuNXMtMS42IDMuNS0zLjUgMy41aC00Yy0xLjkgMC0zLjUtMS42LTMuNS0zLjUgMC0yIDEuNi0zLjUgMy41LTMuNXoiIGZpbGw9IiNBMEFDQzAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguMSA2Ny44YzEuNyAwIDMtMS4zIDMtM3MtMS4zLTMtMy0zLTMgMS4zLTMgM2MwIDEuNiAxLjMgMi45IDMgM3oiIGZpbGw9IiNFN0VERjQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwNS45IDE5Ljl2LS4yLjJ6bTIuOS4xYzAtLjEtLjEtLjEtLjEtLjItLjItMS45LS44LTIuOC0xLjQtMy43LS4zLS40LS44LTEtMS40LTEuNS0uNi0uNS0xLjQtMS0yLjItMS4zLTEuMS0uNS0yLjktLjUtMi45LS41bC01LjctLjFjLjMuOC43IDEuOCAxLjEgM2g0LjdzMS41IDAgMi43LjljLjUuNCAxIC45IDEuMyAxLjQuMi4zLjQuNy41IDEgLjEuMS4xLjQuMi43IDAgLjEgMCAuMi4xLjMtMi41LjYtNC40IDIuOS00LjQgNS42bC0uMiAxNi4zYzAgMy4yIDIuNiA1LjkgNS44IDUuOSAzLjIgMCA1LjktMi42IDUuOS01LjhsLjItMTYuM2MuMS0yLjctMS43LTUtNC4yLTUuN3oiIGZpbGw9IiNDM0NGREYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4Ni40IDczLjZjMi44IDAgNS0yLjIgNS00LjkgMC0yLjgtMi4yLTUtNC45LTUtMi44IDAtNSAyLjItNSA0LjktLjEgMi43IDIuMSA0LjkgNC45IDV6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOTAuNCA2OS44Yy0uNC0xLjYtMi0yLjYtMy43LTIuMi0xLjMuMy0yLjIgMS41LTIuMiAyLjdsMiAuNC0xLjYgMS40Yy43IDEuMSAyIDEuNiAzLjMgMS4zIDEuNi0uMyAyLjYtMiAyLjItMy42eiIgZmlsbD0iIzAwMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQzLjkgNzIuOWMyLjggMCA1LTIuMiA1LTQuOSAwLTIuOC0yLjItNS00LjktNS0yLjggMC01IDIuMi01IDQuOS0uMSAyLjcgMi4xIDQuOSA0LjkgNXoiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0Ny44IDY5LjFjLS40LTEuNi0yLTIuNi0zLjctMi4yLTEuMy4zLTIuMiAxLjUtMi4yIDIuN2wyIC40LTEuNiAxLjRjLjcgMS4xIDIgMS42IDMuMyAxLjMgMS43LS4zIDIuNi0yIDIuMi0zLjZ6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTE1OS41IDgwLjQwMnMxLjMtMyA2LTMuMWM0LjEtLjEgNiAyLjkgNiAyLjkiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzOS4xIDE5LjJ2LS4xLjF6TTEzNCAxMmwtMTQuNC0uMSAzLjIgMyAxMS40LjFzMS41IDAgMi44LjljLjUuNCAxIC45IDEuNCAxLjQuMi4zLjQuNy41IDEgLjEuMS4xLjQuMi43IDAgLjEgMCAuMi4xLjMtMi42LjYtNC41IDMtNC42IDUuOGwtLjIgMTZjMCAzLjMgMi42IDYgNS45IDYuMSAzLjMgMCA2LTIuNiA2LjEtNS45bC4yLTE2YzAtMi44LTEuOC01LjEtNC40LTUuOHYtLjJjLS4zLTEuOS0uOC0yLjgtMS40LTMuNy0uMy0uNC0uOC0xLTEuNC0xLjUtLjYtLjUtMS40LTEtMi4zLTEuNC0xLjMtLjYtMy4xLS43LTMuMS0uN3oiIGZpbGw9IiNDM0NGREYiLz48cGF0aCBvcGFjaXR5PSIuNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNzAuNiA0NC4yYy0uNi42LTEuNi42LTIuMiAwLS42LS42LS42LTEuNiAwLTIuMmwxOC40LTE4LjFjLjYtLjYgMS42LS42IDIuMiAwIC42LjYuNiAxLjYgMCAyLjJsLTE4LjQgMTguMXpNMTU4LjYgNDQuMWMtLjYuNi0xLjYuNi0yLjIgMC0uNi0uNi0uNi0xLjYgMC0yLjJsMTguNC0xOC4xYy42LS42IDEuNi0uNiAyLjIgMCAuNi42LjYgMS42IDAgMi4ybC0xOC40IDE4LjF6TTE1OC43IDMyLjFjLS42LjYtMS42LjYtMi4yIDAtLjYtLjYtLjYtMS42IDAtMi4ybDYuMy02LjJjLjYtLjYgMS42LS42IDIuMiAwIC42LjYuNiAxLjYgMCAyLjJsLTYuMyA2LjJ6TTE4My42IDQ0LjNjLS42LjYtMS42LjYtMi4yIDAtLjYtLjYtLjYtMS42IDAtMi4ybDYuMy02LjJjLjYtLjYgMS42LS42IDIuMiAwIC42LjYuNiAxLjYgMCAyLjJsLTYuMyA2LjJ6TTkzLjcgMzEuNGMtLjYuNi0xLjYuNi0yLjIgMC0uNi0uNi0uNi0xLjYgMC0yLjJsNi4zLTYuMmMuNi0uNiAxLjYtLjYgMi4yIDAgLjYuNi42IDEuNiAwIDIuMmwtNi4zIDYuMnpNOTIuNiA0My40Yy0uNi42LTEuNi42LTIuMiAwLS42LS42LS42LTEuNiAwLTIuMmwxOC40LTE4LjFjLjYtLjYgMS42LS42IDIuMiAwIC42LjYuNiAxLjYgMCAyLjJMOTIuNiA0My40ek01MC43IDMxYy0uNi42LTEuNi42LTIuMiAwLS42LS42LS42LTEuNiAwLTIuMmw2LjMtNi4yYy42LS42IDEuNi0uNiAyLjIgMCAuNi42LjYgMS42IDAgMi4yTDUwLjcgMzF6TTQ4LjYgNDNjLS42LjYtMS42LjYtMi4yIDAtLjYtLjYtLjYtMS42IDAtMi4ybDE4LjQtMTguMWMuNi0uNiAxLjYtLjYgMi4yIDAgLjYuNi42IDEuNiAwIDIuMkw0OC42IDQzek05LjYgNDIuNmMtLjYuNi0xLjYuNi0yLjIgMC0uNi0uNi0uNi0xLjYgMC0yLjJsMTguNC0xOC4xYy42LS42IDEuNi0uNiAyLjIgMCAuNi42LjYgMS42IDAgMi4yTDkuNiA0Mi42ek0xMS43IDMwLjZjLS42LjYtMS42LjYtMi4yIDAtLjYtLjYtLjYtMS42IDAtMi4ybDYuMy02LjJjLjYtLjYgMS42LS42IDIuMiAwIC42LjYuNiAxLjYgMCAyLjJsLTYuMyA2LjJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTYuNyAxMDAuOGM2LjEuMSAxMS00LjggMTEuMS0xMC45LjEtNi4xLTQuOC0xMS0xMC45LTExLjEtNi4xLS4xLTExIDQuOC0xMS4xIDEwLjktLjEgNi4xIDQuOSAxMS4xIDEwLjkgMTEuMXoiIGZpbGw9IiMwMDAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExNi44IDk2LjhjMy45IDAgNy0zLjEgNy4xLTYuOSAwLTMuOS0zLjEtNy02LjktNy4xLTMuOSAwLTcgMy4xLTcuMSA2LjktLjEgMy45IDMgNy4xIDYuOSA3LjF6IiBmaWxsPSIjQzhEM0RBIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC43IDEwMGM2LjEuMSAxMS00LjggMTEuMS0xMC45LjEtNi4xLTQuOC0xMS0xMC45LTExLjEtNi4xLS4xLTExIDQuOC0xMS4xIDEwLjkgMCA2IDQuOSAxMSAxMC45IDExLjF6IiBmaWxsPSIjMDAwIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC44IDk2YzMuOSAwIDctMy4xIDcuMS02LjkgMC0zLjktMy4xLTctNi45LTcuMS0zLjkgMC03IDMuMS03LjEgNi45LS4xIDMuOSAzIDcgNi45IDcuMXoiIGZpbGw9IiNDOEQzREEiLz48L3N2Zz4K) no-repeat;margin:0 auto}.u2B_JrpMcUv0kwvB{position:relative}.NTRydypjJ68HNfhx{visibility:hidden}.PrVYOLYDymI2y7qp{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;justify-content:center}.vDclMuViXQedgLa8{align-items:center}.BfFwJcL0GjYvGZZO{font-size:17px;font-weight:700}.TKL_Ld1bQIMLES3E{opacity:.5;cursor:default}.k6TQfqomY9oZOBhG{display:flex;align-items:center}.aE586tivbs9nleTS{display:inline-flex;height:100%;align-items:center;min-width:0}.aE586tivbs9nleTS.PHm5msdPMeIquhA3{cursor:pointer}.OG8qcbYpvMgdqwlW{font-weight:700}.tGAOVPpH8CgpzOLr{overflow:hidden;white-space:nowrap;margin-left:5px}.tGAOVPpH8CgpzOLr.yO9ifedTfOw1MFfj{color:inherit;cursor:default;margin-left:0}.GVMcrz37z9Y1lRQA{overflow:hidden;white-space:nowrap;max-width:65px}.Ca4e4GpA_kg17yzc,.eiyM2tG_oGQKylnz{display:none}@media (max-width:992px){.GVMcrz37z9Y1lRQA{text-overflow:ellipsis}.eiyM2tG_oGQKylnz{display:inline-block}}._lzzAWivTsVTWpfw{display:none}.qLjO0SJF7ILpOBmE{position:relative}.qLjO0SJF7ILpOBmE:before{content:"";background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA0OCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS4wMzA4IDkuNDU0MjNDMTYuNjQwMSAxMC4wOTQ4IDE0LjEyNSA4LjUzMjUxIDEzLjQ0MTggNS45ODI0N0w0Ljc0ODQzIDguMzExODRDMi4zNTc3NiA4Ljk1MjQyIDAuOTYwODEgMTEuNTYyOSAxLjY0NDA5IDE0LjExM0wxMS41ODI3IDUxLjIwNDVDMTIuMjY2IDUzLjc1NDYgMTQuNzc0OSA1NS4yOTM3IDE3LjE2NTUgNTQuNjUzMUwyNS44NTg5IDUyLjMyMzdDMjUuMTc1NiA0OS43NzM3IDI2LjU3ODcgNDcuMTg2NCAyOC45Njk0IDQ2LjU0NThDMzEuMzYwMSA0NS45MDUyIDMzLjg2ODkgNDcuNDQ0MyAzNC41NTg0IDUwLjAxNzVMNDMuMjUxNyA0Ny42ODgyQzQ1LjY0MjQgNDcuMDQ3NiA0Ny4wMzk0IDQ0LjQzNzEgNDYuMzU2MSA0MS44ODdMMzYuNDE3NCA0Ljc5NTQ5QzM1LjczNDEgMi4yNDU0NCAzMy4yMTkxIDAuNjgzMTUzIDMwLjgyODQgMS4zMjM3M0wyMi4xMzUxIDMuNjUzMUMyMi44MTg0IDYuMjAzMTQgMjEuNDIxNCA4LjgxMzY2IDE5LjAzMDggOS40NTQyM1oiIGZpbGw9IiMwMDczRkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi4zNzEgMTUuNTM2N0MyMi4zNDAxIDE1LjMxNTYgMjIuMDI1MiAxNS4zMDM1IDIxLjk3NzUgMTUuNTIxNkwxOC41NDAzIDMxLjI0MjJDMTguNTA4MyAzMS4zODg2IDE4LjY0MjcgMzEuNTE2OSAxOC43ODc0IDMxLjQ3ODFMMjQuMTc0NyAzMC4wMzQ2TDI1LjYyOTIgNDAuNDYzM0MyNS42NiA0MC42ODQ0IDI1Ljk3NSA0MC42OTY1IDI2LjAyMjcgNDAuNDc4NEwyOS40NTk5IDI0Ljc1NzhDMjkuNDkxOSAyNC42MTE0IDI5LjM1NzUgMjQuNDgzMSAyOS4yMTI3IDI0LjUyMTlMMjMuODI1NSAyNS45NjU0TDIyLjM3MSAxNS41MzY3WiIgZmlsbD0iI0ZGRUU1NSIvPgo8L3N2Zz4K) no-repeat;background-size:contain;width:16px;height:20px;display:block}.p2JQ96pbGkddOFXQ{display:flex;justify-content:center;background:none;padding:0;cursor:pointer}@media (max-width:992px){.p2JQ96pbGkddOFXQ{justify-content:flex-end}}.UPH3U1i44z0ovnLw{position:relative}.gISY4z0czQLqcCwc{display:flex}.gISY4z0czQLqcCwc:not(:last-child) .WYlZoo0zTI_HOmHU:before{background:#e7edf4;content:"";width:2px;height:100%;display:block;position:absolute;top:7px;right:-2px}.gISY4z0czQLqcCwc.rZxrbuFJzcun8QTG .VTDBTG_F8kHZjlRy,.gISY4z0czQLqcCwc.rZxrbuFJzcun8QTG .ZLfA1IhNmsYmxRMF{opacity:.4}.WYlZoo0zTI_HOmHU{padding:3px 12px 0 0;position:relative;width:50px;min-width:50px;margin:0 14px 0 0}.WYlZoo0zTI_HOmHU:after{background:#c3cfdf;content:"";border-radius:6px;width:6px;height:6px;display:block;position:absolute;top:7px;right:-4px}.ZLfA1IhNmsYmxRMF{padding-bottom:16px}.F02bGtU10M4aff3_,.bW3vauoxYoirsQIy{margin:0}.zLCUlbbRtyAo9Kb7{display:flex;align-items:center}.y3Ax4TDYYwfvVgRZ{margin-right:5px}.tQTWc6OeMJgWW7eL{display:flex}.xUeYpGVflC4oiCLq{margin-right:8px}.T47Q5OSCDKYxLI8M{pointer-events:none}.MnXplHpfSL0oA2z5{margin-top:20px}.Z6_wD1TIvrwkQA_E{z-index:15}.noHUoazxtMUHeDmp{z-index:1;width:48px;height:48px;padding:12px}@media (max-width:576px){.QfAIJfBE1p8ZigkV{margin-bottom:8px}}.JL5JTswUv0QbyHMo{display:inline-flex;min-width:26px}.nnNlONqEPmU74viU,.wcOoBqc5kfYnRGdO{width:12px;height:12px;border-radius:50%}.nnNlONqEPmU74viU{background:#5ac82c;position:relative}.nnNlONqEPmU74viU:before{left:60%;background:#93d724}.nnNlONqEPmU74viU:after,.nnNlONqEPmU74viU:before{content:"";width:12px;height:12px;border-radius:50%;position:absolute}.nnNlONqEPmU74viU:after{left:120%;background:#c6ed2a}.oolo0ox_oYqCdZ0V{display:inline-flex;height:100%;align-items:center;min-width:0;cursor:pointer;position:relative}.H8ZIxu6M2qc_akEO{overflow:hidden;white-space:nowrap;margin-left:5px}.s9FasHBc7vIHojz6{margin-bottom:8px}.s9FasHBc7vIHojz6:last-of-type{margin-bottom:0}.TssfD3TESM0X1PQQ{border-bottom:none;padding-bottom:0}.SiBslt5WQfQsCyPE{width:100%;padding-right:40px;margin-bottom:16px}.fjiQHPkM498Ecuch{padding:20px}@media (min-width:992px){.oolo0ox_oYqCdZ0V{height:56px}.SiBslt5WQfQsCyPE{margin-bottom:8px}.WKeeoB_G9wovmuUi{display:none}.TT5nuciosHE0zyB9{margin-top:-4px;margin-right:-6px}}._LfAOZQkgUQQMCXb{display:flex;flex-flow:row wrap;border-top:1px solid #c3cfdf;align-items:center;height:56px}._LfAOZQkgUQQMCXb td{padding:0}._LfAOZQkgUQQMCXb:first-child{border-top:none}.rbKI_9ddGdgXVJ1I{height:auto}tr.rbKI_9ddGdgXVJ1I{padding:10px 0}.Z1fVMTR9VUsBXPtH{display:inline-block;cursor:pointer}.tUvoOTDGoGY6f_zS{display:block}.mm9Qmkwz8i4wVhdf{display:flex;flex-flow:row wrap;align-items:center;margin:8px 0 16px}.aGtaZuna9kEC3zA1{flex-basis:50%}.ehb7qEDRVL8ixsWn{flex-basis:50%;text-align:right}.La6EWZ9u0goy3fEr{order:1;font-weight:700;flex-basis:80px;display:grid;grid-template-columns:auto 1fr;align-items:center;gap:16px;margin-right:16px}.y0bI3FoSmQVtgKhn{order:2;font-weight:700;flex-basis:80px}.QSjBNGrLCY4fVghM{order:3;flex-basis:80px}.XWZWom1gBYsOmc5q{order:4;width:65px;position:relative}.XWZWom1gBYsOmc5q:before{content:"";position:absolute;right:0;top:1px;bottom:1px;width:32px;background:linear-gradient(270deg,#fff,hsla(0,0%,100%,0))}.VYWTeOxd7U5iE3JI{order:5;flex:1;min-width:0;position:relative}.VYWTeOxd7U5iE3JI:before{content:"";position:absolute;right:0;top:1px;bottom:1px;width:32px;background:linear-gradient(270deg,#fff,hsla(0,0%,100%,0))}.lFZBFoDSU4ugdzRu{order:6;flex-basis:120px}.bT2gGyFwfQ5QTCop{order:7;flex-basis:30px}.Y6hCS9yy5u4JAAnC{order:8;flex-basis:160px;display:flex;justify-content:flex-end}.Y6hCS9yy5u4JAAnC.vGqyYcqYQqoVr0gQ{text-align:right}.wXyb6gm7m24a6_nD{order:9;flex-basis:100%;color:#a0acc0}.OwUPY0nml90suy7I{order:10;flex-basis:100%}@media (min-width:992px){.EKbrDThqhcQ_9sXi{background:#fff;padding:0 16px;margin:0;border-radius:12px;height:auto;border-top:none}.EKbrDThqhcQ_9sXi .VYWTeOxd7U5iE3JI:before{content:"";position:absolute;right:0;top:1px;bottom:1px;width:32px;background:linear-gradient(270deg,#fff,hsla(0,0%,100%,0))}.EKbrDThqhcQ_9sXi+._LfAOZQkgUQQMCXb{border-top:none}._LfAOZQkgUQQMCXb .VYWTeOxd7U5iE3JI,._LfAOZQkgUQQMCXb td.XWZWom1gBYsOmc5q{padding-right:10px}.bT2gGyFwfQ5QTCop.kNA8dstWR8wh3Yjh{flex-basis:5px}.i4oYhjKv9AE5wGY_{height:56px}.Z1fVMTR9VUsBXPtH{display:inline-flex;width:100%;height:56px;align-items:center}.Y6hCS9yy5u4JAAnC.JWn6Yiotrt8oRbDn{flex-basis:120px}.Zz2icu_6y_cL37KW{border-top:1px solid #c3cfdf;padding:12px 0 0;margin:0}.FElr2g5gvHI99VdM{display:none}.mm9Qmkwz8i4wVhdf{align-itemtd><td class="Y6hCS9yy5u4JAAnC vGqyYcqYQqoVr0gQ"><span class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="no_results_how_to_buy"><span class="BfFwJcL0GjYvGZZO">от<!-- --> <!-- -->2380<!-- --> <!-- -->₽</span></span></td><td class="wXyb6gm7m24a6_nD"><div class="Zz2icu_6y_cL37KW"><a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="departure_station" href="/avtovokzaly/Moskva_Mezhdunarodnyj_avtovokzal_Salarevo/"><span>Международный автовокзал Саларьево</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Москва</span></a> – <a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="arrival_station" href="/avtovokzaly/Minsk_Avtovokzal_Tsentralnyj/"><span>Автовокзал Центральный</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Минск</span></a></div></td><td class="OwUPY0nml90suy7I"><div class="mm9Qmkwz8i4wVhdf"><div class="aGtaZuna9kEC3zA1"><span class="o-link o-link-default xUeYpGVflC4oiCLq o-text-inline o-text-paragraphMedium" data-ti="route_link">Маршрут</span></div><div class="ehb7qEDRVL8ixsWn"><div class=""><span class="o-link o-link-secondary o-text-inline o-text-paragraphSmall" data-ti="report_error"><noindex>Увидели ошибку?</noindex></span></div></div></div></td></tr><tr class="_LfAOZQkgUQQMCXb EKbrDThqhcQ_9sXi" itemscope="" itemType="http://schema.org/Offer" data-ti="offer"><td class="La6EWZ9u0goy3fEr"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="departure_time">21:30</span></td><td class="y0bI3FoSmQVtgKhn"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="arrival_time">07:30</span></td><td class="QSjBNGrLCY4fVghM"><span data-ti="duration">10 ч</span></td><td class="VYWTeOxd7U5iE3JI"><div class="k6TQfqomY9oZOBhG i4oYhjKv9AE5wGY_ undefined"><div class="aE586tivbs9nleTS PHm5msdPMeIquhA3"><span class="Uy0ImcWNf1YsKMaB tkftSZgKkzI41Kwu SwC6D9w6Xp4Sja_o UWkRFRGbbMAeQxkX OG8qcbYpvMgdqwlW" itemProp="aggregateRating" itemscope="" itemType="http://schema.org/AggregateRating" data-ti="carrier_rating_score"><span class="hWN6uCtrcZ0yCSBJ wS1sooofrbUSI3OA" style="background-color:#5AC82C"></span><meta itemProp="bestRating" content="10"/><meta itemProp="ratingCount" content="9"/><span class="VV7Cghm9_UUUUpNh" itemProp="itemReviewed" itemscope="" itemType="https://schema.org/Organization"><span itemProp="name">Минсктранс</span></span></span><span class="o-link o-link-default tGAOVPpH8CgpzOLr o-text-inline o-text-paragraphMedium" data-ti="carrier_name">Минсктранс</span></div></div></td><td class="lFZBFoDSU4ugdzRu V47zuv_QdsIy18ri"><span class="x7V8DIrpBHsD8eCC"><span class="NxiSiVEt3bo72_3b"><span class="">пт</span><span>, </span></span><span class="NxiSiVEt3bo72_3b"><span class="DcnaawT0vwQvcq2w">вс</span></span></span></td><td class="bT2gGyFwfQ5QTCop"></td><td class="Y6hCS9yy5u4JAAnC vGqyYcqYQqoVr0gQ"><span class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="no_results_how_to_buy"><span class="BfFwJcL0GjYvGZZO">от<!-- --> <!-- -->2380<!-- --> <!-- -->₽</span></span></td><td class="wXyb6gm7m24a6_nD"><div class="Zz2icu_6y_cL37KW"><a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="departure_station" href="/avtovokzaly/Moskva_Mezhdunarodnyj_avtovokzal_Severnye_Vorota/"><span>Международный автовокзал Северные Ворота</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Москва</span></a> – <a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="arrival_station" href="/avtovokzaly/Minsk_Avtovokzal_Tsentralnyj/"><span>Автовокзал Центральный</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Минск</span></a></div></td><td class="OwUPY0nml90suy7I"><div class="mm9Qmkwz8i4wVhdf"><div class="aGtaZuna9kEC3zA1"><span class="o-link o-link-default xUeYpGVflC4oiCLq o-text-inline o-text-paragraphMedium" data-ti="route_link">Маршрут</span></div><div class="ehb7qEDRVL8ixsWn"><div class=""><span class="o-link o-link-secondary o-text-inline o-text-paragraphSmall" data-ti="report_error"><noindex>Увидели ошибку?</noindex></span></div></div></div></td></tr><tr class="_LfAOZQkgUQQMCXb EKbrDThqhcQ_9sXi" itemscope="" itemType="http://schema.org/Offer" data-ti="offer"><td class="La6EWZ9u0goy3fEr"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="departure_time">21:45</span></td><td class="y0bI3FoSmQVtgKhn"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="arrival_time">08:35</span></td><td class="QSjBNGrLCY4fVghM"><span data-ti="duration">10 ч 50 м</span></td><td class="VYWTeOxd7U5iE3JI"><div class="oolo0ox_oYqCdZ0V" data-ti="alternative_carriers_trigger"><div class="JL5JTswUv0QbyHMo" data-ti="alternative_carriers_rating"><span class="nnNlONqEPmU74viU"></span></div><span class="o-link o-link-default H8ZIxu6M2qc_akEO o-text-inline o-text-paragraphMedium" data-ti="link">2 перевозчика</span></div></td><td class="lFZBFoDSU4ugdzRu"><span class="x7V8DIrpBHsD8eCC"><span class="NxiSiVEt3bo72_3b">ежедневно</span></span></td><td class="bT2gGyFwfQ5QTCop"><div data-ti="eticket_available"><div data-ti="eticket" class="qLjO0SJF7ILpOBmE p2JQ96pbGkddOFXQ"></div></div></td><td class="Y6hCS9yy5u4JAAnC"><div data-ti="target_wrapper"><div class="o-button o-button-expanded" data-ti="order-button-outer"><button class="order-group-element o-button-wrapper o-button-medium o-button-primary" data-ti="order-button" variant="primary"><div class="o-button-slotContent" data-ti="order-button-slot-content"><div><span class="o-text-inline o-text-paragraphMedium">Купить от 2043 ₽</span></div></div></button></div></div></td><td class="wXyb6gm7m24a6_nD"><div class="Zz2icu_6y_cL37KW"><a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="departure_station" href="/avtovokzaly/Moskva_Mezhdunarodnyj_avtovokzal_Salarevo/"><span>Международный автовокзал Саларьево</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Москва</span></a> – <a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="arrival_station" href="/avtovokzaly/Minsk_Avtovokzal_Tsentralnyj/"><span>Автовокзал Центральный</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Минск</span></a></div></td><td class="OwUPY0nml90suy7I"><div class="mm9Qmkwz8i4wVhdf"><div class="aGtaZuna9kEC3zA1"><span class="o-link o-link-default xUeYpGVflC4oiCLq o-text-inline o-text-paragraphMedium" data-ti="route_link">Маршрут</span></div><div class="ehb7qEDRVL8ixsWn"><div class=""><span class="o-link o-link-secondary o-text-inline o-text-paragraphSmall" data-ti="report_error"><noindex>Увидели ошибку?</noindex></span></div></div></div></td></tr><tr class="_LfAOZQkgUQQMCXb EKbrDThqhcQ_9sXi" itemscope="" itemType="http://schema.org/Offer" data-ti="offer"><td class="La6EWZ9u0goy3fEr"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="departure_time">22:00</span></td><td class="y0bI3FoSmQVtgKhn"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="arrival_time">08:10</span></td><td class="QSjBNGrLCY4fVghM"><span data-ti="duration">10 ч 10 м</span></td><td class="VYWTeOxd7U5iE3JI"><div class="k6TQfqomY9oZOBhG i4oYhjKv9AE5wGY_ undefined"><div class="aE586tivbs9nleTS PHm5msdPMeIquhA3"><span class="Uy0ImcWNf1YsKMaB tkftSZgKkzI41Kwu SwC6D9w6Xp4Sja_o UWkRFRGbbMAeQxkX OG8qcbYpvMgdqwlW" itemProp="aggregateRating" itemscope="" itemType="http://schema.org/AggregateRating" data-ti="carrier_rating_score"><span class="hWN6uCtrcZ0yCSBJ wS1sooofrbUSI3OA" style="background-color:#5AC82C"></span><meta itemProp="bestRating" content="10"/><meta itemProp="ratingCount" content="9"/><span class="VV7Cghm9_UUUUpNh" itemProp="itemReviewed" itemscope="" itemType="https://schema.org/Organization"><span itemProp="name">СОДО Визит-Тур</span></span></span><span class="o-link o-link-default tGAOVPpH8CgpzOLr o-text-inline o-text-paragraphMedium" data-ti="carrier_name">СОДО Визит-Тур</span></div></div></td><td class="lFZBFoDSU4ugdzRu"><span class="x7V8DIrpBHsD8eCC"><span class="NxiSiVEt3bo72_3b">ежедневно</span></span></td><td class="bT2gGyFwfQ5QTCop"><div data-ti="eticket_available"><div data-ti="eticket" class="qLjO0SJF7ILpOBmE p2JQ96pbGkddOFXQ"></div></div></td><td class="Y6hCS9yy5u4JAAnC"><div data-ti="target_wrapper"><div class="o-button o-button-expanded" data-ti="order-button-outer"><button class="order-group-element o-button-wrapper o-button-medium o-button-primary" data-ti="order-button" variant="primary"><div class="o-button-slotContent" data-ti="order-button-slot-content"><div><span class="o-text-inline o-text-paragraphMedium">Купить от 2444 ₽</span></div></div></button></div></div></td><td class="wXyb6gm7m24a6_nD"><div class="Zz2icu_6y_cL37KW"><a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="departure_station" href="/avtovokzaly/Moskva_Avtostantsiya_Novoyasenevskaya/"><span>Автостанция Новоясеневская</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Москва</span></a> – <a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="arrival_station" href="/avtovokzaly/Minsk_Avtovokzal_Tsentralnyj/"><span>Автовокзал Центральный</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Минск</span></a></div></td><td class="OwUPY0nml90suy7I"><div class="mm9Qmkwz8i4wVhdf"><div class="aGtaZuna9kEC3zA1"><span class="o-link o-link-default xUeYpGVflC4oiCLq o-text-inline o-text-paragraphMedium" data-ti="route_link">Маршрут</span></div><div class="ehb7qEDRVL8ixsWn"><div class=""><span class="o-link o-link-secondary o-text-inline o-text-paragraphSmall" data-ti="report_error"><noindex>Увидели ошибку?</noindex></span></div></div></div></td></tr><tr class="_LfAOZQkgUQQMCXb EKbrDThqhcQ_9sXi" itemscope="" itemType="http://schema.org/Offer" data-ti="offer"><td class="La6EWZ9u0goy3fEr"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="departure_time">22:30</span></td><td class="y0bI3FoSmQVtgKhn"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="arrival_time">07:45</span></td><td class="QSjBNGrLCY4fVghM"><span data-ti="duration">9 ч 15 м</span></td><td class="VYWTeOxd7U5iE3JI"><div class="k6TQfqomY9oZOBhG i4oYhjKv9AE5wGY_ undefined"><div class="aE586tivbs9nleTS PHm5msdPMeIquhA3"><span class="Uy0ImcWNf1YsKMaB tkftSZgKkzI41Kwu SwC6D9w6Xp4Sja_o UWkRFRGbbMAeQxkX OG8qcbYpvMgdqwlW" itemProp="aggregateRating" itemscope="" itemType="http://schema.org/AggregateRating" data-ti="carrier_rating_score"><span class="hWN6uCtrcZ0yCSBJ wS1sooofrbUSI3OA" style="background-color:#5AC82C"></span><meta itemProp="bestRating" content="10"/><meta itemProp="ratingCount" content="9"/><span class="VV7Cghm9_UUUUpNh" itemProp="itemReviewed" itemscope="" itemType="https://schema.org/Organization"><span itemProp="name">Intercars Europe</span></span></span><span class="o-link o-link-default tGAOVPpH8CgpzOLr o-text-inline o-text-paragraphMedium" data-ti="carrier_name">Intercars Europe</span></div></div></td><td class="lFZBFoDSU4ugdzRu"><span class="x7V8DIrpBHsD8eCC"><span class="NxiSiVEt3bo72_3b">ежедневно</span></span></td><td class="bT2gGyFwfQ5QTCop"><div data-ti="eticket_available"><div data-ti="eticket" class="qLjO0SJF7ILpOBmE p2JQ96pbGkddOFXQ"></div></div></td><td class="Y6hCS9yy5u4JAAnC"><div data-ti="target_wrapper"><div class="o-button o-button-expanded" data-ti="order-button-outer"><button class="order-group-element o-button-wrapper o-button-medium o-button-primary" data-ti="order-button" variant="primary"><div class="o-button-slotContent" data-ti="order-button-slot-content"><div><span class="o-text-inline o-text-paragraphMedium">Купить от 1967 ₽</span></div></div></button></div></div></td><td class="wXyb6gm7m24a6_nD"><div class="Zz2icu_6y_cL37KW"><a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="departure_station" href="/avtovokzaly/Moskva_Mezhdunarodnyj_avtovokzal_Salarevo/"><span>Международный автовокзал Саларьево</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Москва</span></a> – <a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="arrival_station" href="/avtovokzaly/Minsk_Avtovokzal_Tsentralnyj/"><span>Автовокзал Центральный</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Минск</span></a></div></td><td class="OwUPY0nml90suy7I"><div class="mm9Qmkwz8i4wVhdf"><div class="aGtaZuna9kEC3zA1"><span class="o-link o-link-default xUeYpGVflC4oiCLq o-text-inline o-text-paragraphMedium" data-ti="route_link">Маршрут</span></div><div class="ehb7qEDRVL8ixsWn"><div class=""><span class="o-link o-link-secondary o-text-inline o-text-paragraphSmall" data-ti="report_error"><noindex>Увидели ошибку?</noindex></span></div></div></div></td></tr><tr class="_LfAOZQkgUQQMCXb EKbrDThqhcQ_9sXi" itemscope="" itemType="http://schema.org/Offer" data-ti="offer"><td class="La6EWZ9u0goy3fEr"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="departure_time">22:30</span></td><td class="y0bI3FoSmQVtgKhn"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="arrival_time">09:30</span></td><td class="QSjBNGrLCY4fVghM"><span data-ti="duration">11 ч</span></td><td class="VYWTeOxd7U5iE3JI"><div class="k6TQfqomY9oZOBhG i4oYhjKv9AE5wGY_ undefined"><div class="aE586tivbs9nleTS PHm5msdPMeIquhA3"><span class="Uy0ImcWNf1YsKMaB tkftSZgKkzI41Kwu SwC6D9w6Xp4Sja_o UWkRFRGbbMAeQxkX OG8qcbYpvMgdqwlW" itemProp="aggregateRating" itemscope="" itemType="http://schema.org/AggregateRating" data-ti="carrier_rating_score"><span class="hWN6uCtrcZ0yCSBJ wS1sooofrbUSI3OA" style="background-color:#5AC82C"></span><meta itemProp="bestRating" content="10"/><meta itemProp="ratingCount" content="9"/><span class="VV7Cghm9_UUUUpNh" itemProp="itemReviewed" itemscope="" itemType="https://schema.org/Organization"><span itemProp="name">Стройтур</span></span></span><span class="o-link o-link-default tGAOVPpH8CgpzOLr o-text-inline o-text-paragraphMedium" data-ti="carrier_name">Стройтур</span></div></div></td><td class="lFZBFoDSU4ugdzRu V47zuv_QdsIy18ri"><span class="x7V8DIrpBHsD8eCC"><span class="NxiSiVEt3bo72_3b"><span class="">пн</span></span></span></td><td class="bT2gGyFwfQ5QTCop"></td><td class="Y6hCS9yy5u4JAAnC vGqyYcqYQqoVr0gQ"><span class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="no_results_how_to_buy"><span class="BfFwJcL0GjYvGZZO">от<!-- --> <!-- -->2401<!-- --> <!-- -->₽</span></span></td><td class="wXyb6gm7m24a6_nD"><div class="Zz2icu_6y_cL37KW"><a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="departure_station" href="/avtovokzaly/Moskva_Avtovokzal_Tsentralnyj/"><span>Автовокзал Центральный (Щелковский)</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Москва</span></a> – <a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="arrival_station" href="/avtovokzaly/Minsk_Avtovokzal_Tsentralnyj/"><span>Автовокзал Центральный</span><span class="_lzzAWivTsVTWpfw">, <!-- -->Минск</span></a></div></td><td class="OwUPY0nml90suy7I"><div class="mm9Qmkwz8i4wVhdf"><div class="aGtaZuna9kEC3zA1"><span class="o-link o-link-default xUeYpGVflC4oiCLq o-text-inline o-text-paragraphMedium" data-ti="route_link">Маршрут</span></div><div class="ehb7qEDRVL8ixsWn"><div class=""><span class="o-link o-link-secondary o-text-inline o-text-paragraphSmall" data-ti="report_error"><noindex>Увидели ошибку?</noindex></span></div></div></div></td></tr></tbody></table></div></div></div><div class="objoqgV4fb0lNacX h4YPd91OWHYtboDV"><span class="o-text-paragraph o-text-paragraphMedium"><span class="o-text-inline o-text-header o-text-headerSmall" data-ti="last_changes_title">Мы внесли последние изменения в расписание 8 ноября 2023</span><div><span>С тех пор, насколько нам известно, изменений не было.</span><span data-ti="report_error"> <!-- -->Если вы нашли ошибку в расписании -<!-- --> <div class="dDw1457kf4QhfqZ1"><div class=""><span class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="link">сообщите нам</span></div></div></span></div></span></div></div><div class="g8tOsHkAecSc3lCj"><div id="observable-questionAnswer"><h3 class="ZV9f9NnoEg0ll61b o-text-paragraph o-text-header o-text-headerSmall">Ответы на частые вопросы</h3><ul class="ryiQRanl1fgYBetj" data-ti="text_description"><li class="c4chTdNBVso29tH8"><a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="link" rel="nofollow" target="_blank" href="https://www.tutu.ru/2read/bus/bus_faq/#35">🐱 Как перевезти питомца?</a></li><li class="c4chTdNBVso29tH8"><a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="link" rel="nofollow" target="_blank" href="https://www.tutu.ru/2read/bus/bus_faq/#25">🕔 Откуда и когда отправится автобус?</a></li><li class="c4chTdNBVso29tH8"><a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="link" rel="nofollow" target="_blank" href="https://www.tutu.ru/2read/bus/bus_faq/#17">👛 А скидки на билеты есть?</a></li></ul><div class="LVbgQWi1SP8577pJ"><div class="Gk19c2ZtwkoQtlAr"><h4 class="o-text-inline o-text-header o-text-headerExtraSmall" data-ti="FAQ_title">Можно не печатать билет?</h4><span class="o-text-paragraph o-text-paragraphMedium" data-ti="FAQ_text">Билеты со знаком <span class="V7I251cJ7sQ0jDRn"></span> можно показать со смартфона. Если этого значка нет, маршрутную квитанцию нужно обязательно распечатать.</span></div><div class="Gk19c2ZtwkoQtlAr"><h4 class="o-text-inline o-text-header o-text-headerExtraSmall" data-ti="FAQ_title">По каким документам можно купить билет на сайте?</h4><span class="o-text-paragraph o-text-paragraphMedium" data-ti="FAQ_text">Билеты на автобус можно купить по: российскому паспорту, свидетельству о рождении, иностранному документу, заграничному паспорту РФ.</span></div><div class="Gk19c2ZtwkoQtlAr"><h4 class="o-text-inline o-text-header o-text-headerExtraSmall" data-ti="FAQ_title">Я ошибся в паспортных данных пассажира. Что делать?</h4><span class="o-text-paragraph o-text-paragraphMedium" data-ti="FAQ_text">Ошибки в данных пассажира не допускаются. <a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="link" target="_blank" rel="nofollow" href="https://www.tutu.ru/2read/bus/bus_ticket_refund/">Сдайте</a> билет с ошибкой и купите новый.</span></div></div><div class="ryiQRanl1fgYBetj"><a class="o-link o-link-default o-text-inline o-text-paragraphMedium" data-ti="link" rel="nofollow" target="_blank" href="https://www.tutu.ru/2read/bus/bus_faq">Больше полезных вопросов и ответов</a></div></div></div><div class="Mfwiv7joJIiRMQPT"><style>
	.tutu-widget-comments { font: 15px/20px Arial; color: #000000; }

	.tutu-widget-comments h2 {
		font-size: 18px;
		line-height: 20px;
		font-weight: bold;
		margin: 0 0 17px 15px;
		padding:0;
	}

	.tutu-widget-comments h3 {
		font-size: 15px;
		line-height: 17px;
		font-weight: bold;
		margin: 0 0 8px 0;
		padding:0;
	}

	.tutu-widget-comments h3._green { color: #3c9c01; }

	.tutu-widget-comments__frame { margin-bottom: 17px; }
	.tutu-widget-comments__frame__door {
		display: inline-block;
		font: 15px Arial;
		text-align: center;
		color: #000000;
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
		padding: 7px 10px 7px 10px;
		margin-left: 15px;
		border-radius: 4px;
		background: linear-gradient(to bottom, #faf9f7, #f0efeb 50%, #e5e4df 50%, #dedcd4);
		border-left: 1px solid #dadad7;
		border-right: 1px solid #dadad7;
		border-top: 1px solid #f0f0ef;
		border-bottom: 1px solid #d4d4d3;
		cursor: pointer;
	}

	.tutu-widget-comments__frame._open .tutu-widget-comments__form { display: block; }
	.tutu-widget-comments__frame._open .tutu-widget-comments__frame__door { display: none; }

	.tutu-widget-comments__frame._new { margin-bottom: 25px; }
	.tutu-widget-comments__frame._new .tutu-widget-comments__frame__door {
		color: #336699;
		border: 0 none;
		border-bottom: 1px dotted #336699;
		text-shadow: none;
		background: none;
		margin-left: 47px;
		padding: 0;
		border-radius: 0;
	}

	.tutu-widget-comments-form-message__success {
		margin-left: 12px;
		padding: 0 0 5px 35px;
		background: url("//questions.tutu.ru/img/success.svg") no-repeat 0 3px;
		background-size: 27px 27px;
	}


	.tutu-widget-comments__form {
		display: none;
		padding: 8px 15px 0 15px;
		border-radius: 4px;
		background-color: #ffffff;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
	}


	.tutu-widget-comments__form__row {
		position: relative;
		margin-bottom: 10px;
	}
	.tutu-widget-comments__form__row._button {
		margin: 20px -15px 0 -15px;
		padding: 24px 15px;
		background: #f3f5da;
		border-bottom-right-radius: 4px;
		border-bottom-left-radius: 4px;
	}

	.tutu-widget-comments__form__row._button._disabled { position: relative; opacity: 0.4; }
	.tutu-widget-comments__form__row._button._disabled:before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.tutu-widget-comments__form__row._button input,
	.tutu-widget-comments__form__row__txt {
		display: inline-block;
		vertical-align: middle;
	}

	.tutu-widget-comments__form__row__txt {
		color: #9fa08f;
		margin-left: 10px;
	}

	.tutu-widget-comments__form__row__note {
		position: absolute;
		bottom: 15px;
		left: 196px;
		right: 0;
		width: 51px;
		padding-left: 33px;
		font-size: 11px;
		line-height: 15px;
		color: #9e9e9e;
		background: url("//questions.tutu.ru/img/bg.png") no-repeat 0 6px;
	}

	.tutu-widget-comments__form__row__name {
		font-size: 13px;
		line-height: 15px;
		margin-bottom: 5px;
	}

	.tutu-widget-comments__form__row__field { display: inline-block; position: relative; }

	.tutu-widget-comments__form__field {
		font: 15px Arial;
		color:#000000;
		padding: 5px 10px 3px 10px;
		outline: none;
		border: 1px solid #e9e9e9;
		background: #ffffff;
		border-radius: 4px;
		box-shadow: inset 0 2px 3px 0 rgba(135, 135, 135, 0.25);
		box-sizing: border-box;
	}

	.tutu-widget-comments__form__field._name { width: 180px; }
	.tutu-widget-comments__form__field._email { width: 215px; }

	.tutu-widget-comments__form__row._textarea .tutu-widget-comments__form__row__field { display: block; }
	.tutu-widget-comments__form__row._textarea .tutu-widget-comments__form__field {
		max-width: 410px;
		width: 100%;
		height: 100px;
	}


	.form__field::-webkit-input-placeholder { color:#aaaaaa; }
	.form__field::-moz-placeholder          { color:#aaaaaa; }/* Firefox 19+ */
	.form__field:-ms-input-placeholder      { color:#aaaaaa; }

	input:focus::-webkit-input-placeholder {color: transparent !important;}
	input:focus::-moz-placeholder          {color: transparent !important;}
	input:focus:-ms-input-placeholder      {color: transparent !important;}

	textarea:focus::-webkit-input-placeholder {color: transparent !important;}
	textarea:focus::-moz-placeholder          {color: transparent !important;}
	textarea:focus:-ms-input-placeholder      {color: transparent !important;}

	.tutu-widget-comments__form__button {
		display: inline-block;
		font: 16px Arial;
		text-align: center;
		color: #ffffff;
		text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);
		padding: 7px 10px 7px 10px;
		outline: none;
		border-radius: 4px;
		box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5);
		background: linear-gradient(to bottom,  #30a2da 0%,#0971b3 25%,#045893 51%,#0665a4 77%,#005889 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		border: 0 none;
	}


	.tutu-widget-comments__form__row._error { z-index: 1; }

	.tutu-widget-comments__form__row__field__error {
		display: none;
		position: absolute;
		top: 32px;
		left: 0;
		right: 0;
		font-size: 12px;
		line-height: 15px;
		color: #1a1a1a;
		padding: 9px 12px;
		background: #ffe471;
		box-shadow: 0 4px 5px 0 rgba(65, 97, 124, 0.1), 0 4px 11px 1px rgba(65, 97, 124, 0.4), 0 0 1px 1px rgba(65, 97, 124, 0.1);
		box-sizing: border-box;
		border-radius: 4px;
	}

	.tutu-widget-comments__form__row__field__error:before {
		content: ' ';
		position: absolute;
		top: -10px;
		left: 50%;
		width: 0;
		height: 0;
		margin-left: -5px;
		border: 5px solid transparent;
		border-bottom-color: #ffe471;
	}

	.tutu-widget-comments__form__row._error .tutu-widget-comments__form__field {
		border-color: transparent;
		background: #fffce0;
		border-radius: 4px;
		box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5), inset 0 1px 4px 0 #ffcd00;
	}

	.tutu-widget-comments__form__row._textarea._error .tutu-widget-comments__form__row__field__error { top: 85px; }

	.tutu-widget-comments__form__argee {
		display: inline-block;
		font-size: 13px;
		line-height: 15px;
	}

	.tutu-widget-comments__form__argee > a { color: #336699; }

	.tutu-widget-comments__form__argee > input {
		display: inline-block;
		vertical-align: top;
		margin: 0 5px 0 0;
		padding: 0;
	}





	.tutu-widget-comments__list { margin-bottom: 17px; padding: 0; }
	.tutu-widget-comments__list li {
		display: block;
		padding: 7px 15px 20px 15px;
		border-radius: 4px;
		border: 1px solid #dddddd;
		margin-bottom: 9px;
		list-style:none;
	}

	.tutu-widget-comments__list li p { margin: 15px 0; font-size: 15px; }
	.tutu-widget-comments__list li a { color: #369; text-decoration: underline; cursor: pointer; }

	.tutu-widget-comments__list__info {
		font-size: 0;
		margin-bottom: 1px;
	}

	.tutu-widget-comments__list__info__item {
		display: inline-block;
		vertical-align: top;
		width: 50%;
		font-size: 15px;
	}

	.tutu-widget-comments__list__info__date { color: #ababab; }
	.tutu-widget-comments__list__info__name { margin-left: 5px; font-weight: bold; }

	.tutu-widget-comments__list__info__item._estimate {
		text-align: right;
		color: #ababab;
	}

	.tutu-widget-comments__list__info__item._estimate span {
		display: inline-block;
		vertical-align: middle;
		margin-left: 9px;
		padding-left: 19px;
		cursor: pointer;
	}

	.tutu-widget-comments__list__info__item._estimate ._plus {
		color: #3c9c01;
		background: url("//questions.tutu.ru/img/plus.svg") no-repeat 0 0;
	}
	.tutu-widget-comments__list__info__item._estimate ._minus {
		color: #c53c0c;
		background: url("//questions.tutu.ru/img/minus.svg") no-repeat 0 5px;
	}

	.tutu-widget-comments__list__info__item._estimate ._disabled {
		opacity: 0.2;
	}

	.tutu-widget-comments__list__answer {
		margin-top: 11px;
		padding: 12px 0 0 20px;
		border-top: 1px solid #dddddd;
	}
	.tutu-widget-comments__list__answer .tutu-widget-comments__list__info__name {
		padding-left: 55px;
		font-weight: normal;
		width: 65px;
		height: 20px;
		background: url("//questions.tutu.ru/img/black_small_text.svg") no-repeat 0 0;
		background-size: contain;
		display: inline-block;
	}

	.tutu-widget-comments__more { text-align: center; }
	.tutu-widget-comments__more._hide { display: none; }
	.tutu-widget-comments__more span {
		display: inline-block;
		font-size: 15px;
		line-height: 29px;
		height: 29px;
		padding: 0 10px;
		color: #356a9f;
		border-radius: 4px;
		border: solid 1px #afc5d9;
		cursor: pointer;
	}

	.tutu-widget-comments__box._noUsefull h3,
	.tutu-widget-comments__box._noUsefull .tutu-widget-comments__list._usefull { display: none; }

	@media (min-width: 370px) {
		.tutu-widget-comments__form__row__note {
			bottom: 4px;
			left: 222px;
			font-size: 13px;
			line-height: 18px;
			width: auto;
		}
	}
</style>

<div class="tutu-widget-comments">
	<h2>Вопросы, советы и отзывы пользователей</h2>
		<div id="tutu-widget-comments-form-box" class="tutu-widget-comments__frame _open">
		<div id="tutu-widget-comments-form-door" class="tutu-widget-comments__frame__door">Написать комментарий</div>
		<div id="tutu-widget-comments-form-add" class="tutu-widget-comments__form">
			<h3>Напишите комментарий</h3>			<div class="tutu-widget-comments__form__row">
				<div class="tutu-widget-comments__form__row__name">Как вас зовут?</div>
				<div class="tutu-widget-comments__form__row__field">
					<input type="text" name="name" id="tutu-widget-comments-form-add-name" value=""
						   class="tutu-widget-comments__form__field _name"/>
					<div class="tutu-widget-comments__form__row__field__error js-error-message"></div>
				</div>
			</div>
							<div class="tutu-widget-comments__form__row">
					<div class="tutu-widget-comments__form__row__name">Электронная почта</div>
					<div class="tutu-widget-comments__form__row__field">
						<input type="text" name="email" id="tutu-widget-comments-form-add-email" value=""
							class="tutu-widget-comments__form__field _email"/>
						<div class="tutu-widget-comments__form__row__field__error js-error-message"></div>
					</div>
					<div class="tutu-widget-comments__form__row__note">можно не указывать</div>
				</div>
						<div class="tutu-widget-comments__form__row _textarea">
				<div class="tutu-widget-comments__form__row__name">Ваш вопрос, совет или отзыв</div>
				<div class="tutu-widget-comments__form__row__field">
                <textarea name="comment" id="tutu-widget-comments-form-add-comment" cols="30" rows="10"
						  placeholder=""
						  class="tutu-widget-comments__form__field"></textarea>
					<div class="tutu-widget-comments__form__row__field__error js-error-message"></div>
				</div>
			</div>
			<div class="tutu-widget-comments__form__row">
				<label class="tutu-widget-comments__form__argee">
					<input type="checkbox" value="" name="isAgree" id="tutu-widget-comments-form-add-agree" />
					Я ознакомлен и согласен с <a href="https://www.tutu.ru/poezda/content/rules_feedback_short/" id="tutu-widget-comments-form-add-agreement-link" target="_blank">правилами размещения</a> и даю <a href="https://www.tutu.ru/2read/legal_information/agreement_geography/" target="_blank">согласие на обработку моих персональных данных</a>
				</label>
			</div>
			<div id="tutu-widget-comments-form-button" class="tutu-widget-comments__form__row _button _disabled">
				<input type="button" value="Опубликовать" id="tutu-widget-comments-form-submit" class="tutu-widget-comments__form__button" disabled/>
				<div class="tutu-widget-comments__form__row__txt">Спасибо! Ваш вопрос отправлен на модерацию. После проверки он будет виден другим пользователям.</div>
			</div>
		</div>
	</div>
		<div id="tutu-widget-comments-frame" class="tutu-widget-comments__box _noUsefull">
		<ul class="tutu-widget-comments__list" id="tutu-widget-comments-list">
                            <li id="B3pDe4oBhEB90WzSGQMq">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">09.09.2023 21:45</span>
            <span class="tutu-widget-comments__list__info__name">Николай:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="B3pDe4oBhEB90WzSGQMq">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">1</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>Планирую прилететь из Казахстана в Москву и от туда на автобусе до Минска. <br />
<br />
Если самолёт задержится, то я не успею на автобус, я могу взять билет с плавающей датой, что бы если не успею, поехать на следующий день? Или как лучше поступить</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">11.09.2023 15:06</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Николай.<br />У нас нет билетов с плавающей датой отправления. Рекомендуем заложить на пересадку больше времени.&nbsp;</p></p>
        </div>
    </li>
                            <li id="KCE7OIoBLEtdzHxjtV1C">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">27.08.2023 21:22</span>
            <span class="tutu-widget-comments__list__info__name">Юлия:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="KCE7OIoBLEtdzHxjtV1C">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>Подскажите, пожалуйста, с Саларьево по маршруту Москва Минск можно ли проводить собаку мелкой породы и на каких условиях, а также стоимость билета</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">29.08.2023 16:32</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Юлия.<br />Как правило, собаку можно перевозить в переноске без приобретения отдельного места, если правилами перевозчика это допускается. Для путешествия за границу нужен ветеринарный паспорт с отметками о сделанных прививках и справка о состоянии здоровья животного. При этом прививка от бешенства должна быть сделана не позднее чем за 2 месяца и не ранее чем за год до поездки.<br />Возможность, условия и стоимость провоза собаки вы можете уточнить у перевозчика конкретного рейса по телефону. <br />Цену билета Москва &mdash; Минск на взрослого пассажира можно увидеть в выдаче на конкретную дату в графе &laquo;Цена от&raquo;.&nbsp;<br /><br /></p></p>
        </div>
    </li>
                            <li id="4cHa04kB1hbgDl9MSoch">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">08.08.2023 09:34</span>
            <span class="tutu-widget-comments__list__info__name">Надежда:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="4cHa04kB1hbgDl9MSoch">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>При покупке билета не правильно была указана электронная почта и номера заказа у меня нет,как можно узнать номер заказа?</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">08.08.2023 09:44</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Надежда.<br />Вы можете обратиться в наш контакт-центр по телефонам: 7 (499) 715-44-05, 8 (800) 505-56-39 (бесплатные звонки по России).</p></p>
        </div>
    </li>
                            <li id="zwmlHYkBLEtdzHxj-DQr">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">04.07.2023 00:26</span>
            <span class="tutu-widget-comments__list__info__name">Юлия:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="zwmlHYkBLEtdzHxj-DQr">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>Здравствуйте, нужно ли доплачивать за багаж? Если да, то сколько, и какое максимальное количество вещей можно взять с собой ?</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">04.07.2023 13:18</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Юлия.<br />В салоне автобуса можно бесплатно провезти одну ручную кладь, длина, ширина и высота которой в сумме не превышают 120 см. Также бесплатно можно провезти одну пару лыж в чехле, детские санки, детскую коляску. <br />В багажном отделении (за дополнительную плату) можно провезти максимум две сумки (чемодана). Длина, ширина и высота каждой из них не должны превышать 180 см.<br />Плату за провоз багажа устанавливает перевозчик &mdash; обычно это около 10% от цены билета. <br />Но перевозчик может устанавливать и свои требования к провозу багажа. Рекомендуем заранее уточнить правила провоза багажа у перевозчика или позвонить в наш контакт-центр по телефонам: 7 (499) 715-44-05, 8 (800) 505-56-39 (бесплатные звонки по России).</p></p>
        </div>
    </li>
                            <li id="JT2hF4kB1hbgDl9MDmlg">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">02.07.2023 20:22</span>
            <span class="tutu-widget-comments__list__info__name">Анна:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="JT2hF4kB1hbgDl9MDmlg">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">1</span>
        </div>
    </div>
	<p>Добрый день! На сайте ecolines указано, что рейсы Москва-Минск временно не осуществляются. Как у вас продаются билеты на их рейсы?</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">03.07.2023 10:58</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Анна.<br />Мы не продаём билеты перевозчика Ecolines на рейсы в направлении Москва &mdash; Минск.&nbsp;</p></p>
        </div>
    </li>
                            <li id="ACbzAIkB1hbgDl9MMdlY">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">28.06.2023 10:41</span>
            <span class="tutu-widget-comments__list__info__name">Надежда:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="ACbzAIkB1hbgDl9MMdlY">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">1</span>
        </div>
    </div>
	<p>Могу ли я, выехать в РБ из РФ, гражданка Украины, имея ВНЖ РФ.</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">29.06.2023 09:16</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Надежда.<br />Имея ВНЖ России, вы можете попасть в РБ через сухопутные пункты пропуска:&nbsp;Юховичи (Витебская область) &ndash; Долосцы (Псковская область),&nbsp;Езерище &ndash; Невель,&nbsp;Лиозно &ndash; Кругловка (Смоленская область),&nbsp;Редьки &ndash; Красная горка,&nbsp;Звенчатка (Могилевская область) &ndash; Дубовичка,&nbsp;Селище (Гомельская область) &ndash; Новозыбков (Брянская область).<br />Уточнить, какие автобусы следут через эти пункты, можно у перевозчиков по контактным телефонам.</p></p>
        </div>
    </li>
                            <li id="_QfDcIgB1hbgDl9MWnCl">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">31.05.2023 10:43</span>
            <span class="tutu-widget-comments__list__info__name">Валерий:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="_QfDcIgB1hbgDl9MWnCl">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">1</span>
            <span class="_minus js-comment-minus " data-type="m">1</span>
        </div>
    </div>
	<p>При покупке билета подал не тот электронный адрес</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">31.05.2023 10:56</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Валерий.<br />Если вы ошиблись в адресе электронной почты, напишите письмо на bus@tutu.ru, укажите в нем номер своего заказа и корректный электронный адрес или телефон. После этого мы пришлем вам билет.</p></p>
        </div>
    </li>
                            <li id="ov1A9oYB1hbgDl9MmZxl">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">18.03.2023 22:44</span>
            <span class="tutu-widget-comments__list__info__name">Михаил:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="ov1A9oYB1hbgDl9MmZxl">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">1</span>
            <span class="_minus js-comment-minus " data-type="m">1</span>
        </div>
    </div>
	<p>Как вернуть деньги за билет</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">19.03.2023 10:51</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Михаил.<br />Если автобус еще не&nbsp;отправился, вы&nbsp;можете оформить возврат в&nbsp;личном кабинете на&nbsp;нашем сайте. В&nbsp;мобильном приложении нужно зайти в&nbsp;раздел &laquo;Заказы&raquo; (предварительно авторизоваться). Другой способ оформить возврат&nbsp;&mdash; найти в&nbsp;электронной почте письмо от&nbsp;нашей компании с&nbsp;вашим билетом и&nbsp;из&nbsp;письма&nbsp;оформить возврат. Перед подтверждением возврата вы увидите, какая сумма вернется и будут ли удержаны сборы.&nbsp;Более подробно с правилами возврата билета можно ознакомиться в нашей статье <a href="https://www.tutu.ru/2read/bus/bus_ticket_refund/#page_content_start" target="_blank" rel="noopener noreferrer">Как вернуть билет</a>.</p></p>
        </div>
    </li>
                            <li id="1uBa9IYBLEtdzHxjCO0e">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">18.03.2023 13:53</span>
            <span class="tutu-widget-comments__list__info__name">Марина:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="1uBa9IYBLEtdzHxjCO0e">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">3</span>
        </div>
    </div>
	<p>Здравствуйте у меня паспорт на вид на жительство иностранного гражданина я могу выезжать вРБ</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">19.03.2023 10:49</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Марина.<br />Выезжать из РФ в РБ через сухопутную границу могут только граждане этих стран. Уточнить возможность въезда в Беларусь по вашим документам можно по телефону горячей линии Государственного пограничного комитета Республики Беларусь: +375 17 329-18-98.</p></p>
        </div>
    </li>
                            <li id="99-p34YBLEtdzHxjD4Oo">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">14.03.2023 13:27</span>
            <span class="tutu-widget-comments__list__info__name">Ширин:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="99-p34YBLEtdzHxjD4Oo">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">2</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>Чтобы поехат в Минск на автобусе гр.РФ нуженли основание ,  и какие документы проверяют</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">14.03.2023 15:35</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте.<br />Граждане РФ могут въезжать в РБ любым видом транспорта без веской причины. Для поездки нужет только внутренний или заграничный паспорт гражданина РФ. Предоставлять тест ПЦР при въезде не нужно.</p></p>
        </div>
    </li>
                            <li id="8t3ewoYBLEtdzHxjF4ue">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">08.03.2023 23:16</span>
            <span class="tutu-widget-comments__list__info__name">Ширин:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="8t3ewoYBLEtdzHxjF4ue">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>Чтобы поехат с Москвы в Минск на автобусе  гр России требуется основание  . И какие   документы проверяют.</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">09.03.2023 14:12</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте.<br />Граждане России могут въезжать в Беларусь любым видом транспорта без веской причины. Въехать можно по заграничному или внутреннему российскому паспорту.&nbsp;</p></p>
        </div>
    </li>
                            <li id="-9AYDIYBLEtdzHxjo95n">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">01.02.2023 11:29</span>
            <span class="tutu-widget-comments__list__info__name">Зулфия:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="-9AYDIYBLEtdzHxjo95n">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>Добрый день.  гр РФ  нужно ли основание чтобы поехат в Минск на автобусе и какие документы проверяют</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">01.02.2023 12:25</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Зулфия.<br />Для въезда в РБ на автобусе гражданам РФ не нужны основания. Для въезда понадобится только внутренний паспорт гражданина РФ или загранпаспорт.</p></p>
        </div>
    </li>
                            <li id="U63kKIQBLEtdzHxjkdDJ">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">30.10.2022 15:36</span>
            <span class="tutu-widget-comments__list__info__name">Сергей:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="U63kKIQBLEtdzHxjkdDJ">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">1</span>
            <span class="_minus js-comment-minus " data-type="m">1</span>
        </div>
    </div>
	<p>Билет на руках, водитель может забрать с другой остановки которая по пути?</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">30.10.2022 15:44</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Сергей.<br />Попробуйте согласовать этот вопрос с перевозчиком по контактным телефонам, указанным в вашем билете.</p></p>
        </div>
    </li>
                            <li id="f6rO-YMBLEtdzHxjPn6d">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">21.10.2022 12:09</span>
            <span class="tutu-widget-comments__list__info__name">Айбек:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="f6rO-YMBLEtdzHxjPn6d">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>Добрый день! Я гр. РФ. Если на автобусе поеду до Минска на границе Росии проверяет своих граждан по базе? Спасибо!!</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">24.10.2022 13:29</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте, Айбек.<br />Этот вопрос вы можете уточнить в Погранслужбе ФСБ РФ по справочному телефону 8 (495) 626-77-40 (с 09.00 до 18.00 по рабочим дням) или по телефону доверия (495) 914-43-69 (круглосуточно).</p></p>
        </div>
    </li>
                            <li id="DovSgoIBLEtdzHxjhT17">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">09.08.2022 16:36</span>
            <span class="tutu-widget-comments__list__info__name">Дмитрий:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="DovSgoIBLEtdzHxjhT17">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>Добрый день! У меня на руках РВП в Московской области город Раменское, и загранпаспорт, я гражданин Украины, Луганская область. Я имею право купить билет в Минск на автобус? Спасибо</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">09.08.2022 17:03</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Дмитрий, добрый день.<br />Уточнить возможность въезда в РБ из РФ гражданина Украины вы можете уточнить по телефону горячей линии Государственного пограничного комитета Республики Беларусь: +375 17 329-18-98.</p></p>
        </div>
    </li>
                            <li id="opKleIIB1hbgDl9M2Gv3">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">07.08.2022 17:11</span>
            <span class="tutu-widget-comments__list__info__name">Andrey:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="opKleIIB1hbgDl9M2Gv3">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">1</span>
        </div>
    </div>
	<p>Добрый день! Правильно понимаю, что граждане Казахстана не могут купить билет на автобус или ж/д транспорт в Минск? Везде стоит информация &quot;собые условия паспортного режима пересечения пропускного пункта (только с паспортами РБ и РФ)&quot;</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">09.08.2022 10:35</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Андрей, добрый день.<br />Въезд иностранных граждан в РБ через сухопутные пункты пропуска разрешен без предоставления теста ПЦР или сертификата о вакцинации. Условия въезда вы можете уточнить по телефону горячей линии Государственного пограничного комитета Республики Беларусь: +375 17 329-18-98.</p></p>
        </div>
    </li>
                            <li id="z5HuVIIB1hbgDl9M_nnU">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">31.07.2022 18:45</span>
            <span class="tutu-widget-comments__list__info__name">Таисия:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="z5HuVIIB1hbgDl9M_nnU">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">1</span>
        </div>
    </div>
	<p>Здравствуйте! Я гражданка ДНР, но ещё использую паспорт Украины, другого паспорта нет, и  в настоящее время нахожусь в Москве. Можно ли мне выехать на мою Родину, в Беларусь, для решения вопроса о наследстве? Какие ещё документы для поездки нужны? Спасибо.</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">08.08.2022 08:00</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Таисия, добрый день.<br />Возможность въезда в Беларусь по паспорту гражданина Украины в вашей ситуации можно по телефону горячей линии Государственного пограничного комитета Республики Беларусь: +375 17 329-18-98.</p></p>
        </div>
    </li>
                            <li id="sJEYSoIB1hbgDl9M3jET">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">29.07.2022 16:15</span>
            <span class="tutu-widget-comments__list__info__name">Никита:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="sJEYSoIB1hbgDl9M3jET">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>Можно ли будет оплатить наличными ?</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">10.08.2022 16:20</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Никита, здравствуйте.<br />Оплатить билеты на нашем сайте можно с помощью российских банковских карт МИР, Visa, Visa Electron, MasterCard, Maestro.&nbsp;<br />Для приобретения билетов за наличный расчет вы можете обратиться в кассу автовокзала.</p></p>
        </div>
    </li>
                            <li id="yJBoQYIB1hbgDl9MN_Zj">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">27.07.2022 23:45</span>
            <span class="tutu-widget-comments__list__info__name">Майрамбек:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="yJBoQYIB1hbgDl9MN_Zj">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">0</span>
        </div>
    </div>
	<p>Я гражданин Кыргызстан  Я в Москве на автобусе Минск по ехать  можно?</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">01.08.2022 20:12</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Здравствуйте.<br />Въезд иностранных граждан в РБ через сухопутные пункты пропуска разрешен без предоставления теста ПЦР или сертификата о вакцинации.&nbsp;</p></p>
        </div>
    </li>
                            <li id="hITqPYIBLEtdzHxj6qHT">
    <div class="tutu-widget-comments__list__info">
        <div class="tutu-widget-comments__list__info__item _inf">
            <span class="tutu-widget-comments__list__info__date">27.07.2022 07:29</span>
            <span class="tutu-widget-comments__list__info__name">Рома:</span>
        </div>
        <div class="tutu-widget-comments__list__info__item _estimate" data-id="hITqPYIBLEtdzHxj6qHT">
            Полезность:
            <span class="_plus js-comment-plus " data-type="p">0</span>
            <span class="_minus js-comment-minus " data-type="m">1</span>
        </div>
    </div>
	<p>Здравствуйте на границе проверяют паспорта и печати ставить? Не гражданин РФ и рб</p>
            <div class="tutu-widget-comments__list__answer">
            <div class="tutu-widget-comments__list__info">
                <div class="tutu-widget-comments__list__info__item _inf">
                    <span class="tutu-widget-comments__list__info__date">12.08.2022 13:49</span>
                    <span class="tutu-widget-comments__list__info__name">:</span>
                </div>
            </div>
			<p><p>Роман, добрый день.<br />Уточнить правила прохождения пограничного контроля вы можете в Погранслужбе ФСБ РФ по справочному телефону 8 (495) 626-77-40 (с 09.00 до 18.00 по рабочим дням) или по телефону доверия (495) 914-43-69 (круглосуточно) и по телефону горячей линии Государственного пограничного комитета Республики Беларусь: +375 17 329-18-98.</p></p>
        </div>
    </li>
            		</ul>
			<div id="tutu-widget-comments-more" data-page="1" class="tutu-widget-comments__more"><span>Показать еще</span></div>
	</div>
</div>

<script>
	(function() {
		var contentOrigin = "bus_questions",
			pageUrl = "https://bus.tutu.ru/расписание_автобусов/Москва/Минск/",
			host = "questions.tutu.ru",
			recordsOnPage = 20		;

		var widget = {

			api: function(type, url, data, callback, failback) {

				if (typeof callback != "function") {
					return;
				}
				if (typeof failback != "function") {
					return;
				}

				var prefix = "";
				if (location.protocol == 'https:') {
					prefix = 's';
				}

				var xmlhttp = new XMLHttpRequest();

				xmlhttp.open(type, "http" + prefix + "://" + host + url);
				xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				xmlhttp.withCredentials = true;
				xmlhttp.send(JSON.stringify(data));

				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4) {

						if(xmlhttp.status == 200 || xmlhttp.status == 201) {
							var response = JSON.parse(xmlhttp.responseText);
							if (response.success) {
								callback(response);
							} else {
								failback({ status: 400, error: response.errors});
							}

						} else {
							failback({ status: xmlhttp.status, error: JSON.parse(xmlhttp.responseText)});
						}
					}
				};

			},

			sendComment: function(){
				var widget = this,

					formBox = document.getElementById("tutu-widget-comments-form-box"),
					formDoor = document.getElementById("tutu-widget-comments-form-door"),
					buttonBox = document.getElementById("tutu-widget-comments-form-button"),
					buttonSubmit = document.getElementById("tutu-widget-comments-form-submit"),

					isAgree = document.getElementById("tutu-widget-comments-form-add-agree"),
                    isAgreementLink = document.getElementById("tutu-widget-comments-form-add-agreement-link"),

					messageSuccess = document.createElement('div'),
					messageError
				;

				if(isAgree !== null) {
					isAgree.addEventListener('change', function(){

						if (this.checked) {
							buttonBox.classList.remove("_disabled");
							buttonSubmit.disabled = false;
						} else {
							buttonBox.classList.add("_disabled");
							buttonSubmit.disabled = true;
						}
					});
				}

				if(buttonSubmit !== null) {
					buttonSubmit.addEventListener("click", function(event) {
						var fieldsForm = {
								user_name:  document.getElementById("tutu-widget-comments-form-add-name"),
								user_email: document.getElementById("tutu-widget-comments-form-add-email"),
								comment: document.getElementById("tutu-widget-comments-form-add-comment"),
                                agreement_link: document.getElementById("tutu-widget-comments-form-add-agreement-link")
							},

							data = {
								userName: fieldsForm.user_name.value,
								userEmail: fieldsForm.user_email !== null ? fieldsForm.user_email.value : '',
								questionText: fieldsForm.comment.value,
                                agreementLink: fieldsForm.agreement_link.getAttribute('href'),
								pageUrl: pageUrl
							}
						;

						function showError(row, text, isView) {
							row.classList.add("_error");
							messageError = row.getElementsByClassName("js-error-message");
							messageError[0].innerHTML = text;
							messageError[0].style.display = isView ? 'block' : 'none';
						}

						buttonBox.classList.add("_disabled");

						if (fieldsForm.user_name.value && fieldsForm.comment.value) {
							widget.api("POST", "/front/"+contentOrigin, data, function(response){
								var answer = "<b>Спасибо! Ваш комментарий отправлен на модерацию.</b><br />После проверки он станет виден другим пользователям."; 
								// if(!!fieldsForm.user_email.value) {
								// 	answer+= 'Уведомление об ответе на вопрос придет на указанную эл. почту.';
								// }
								
								fieldsForm.user_name.value = "";
								fieldsForm.user_email.value = "";
								fieldsForm.comment.value = "";

								formBox.classList.remove("_open");
								formBox.classList.