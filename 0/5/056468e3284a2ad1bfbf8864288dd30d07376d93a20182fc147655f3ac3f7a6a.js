let parentDiv2,truvidScript2,doc2, insertBefore2;
truvidScript2 = document.createElement('script');truvidScript2.setAttribute("data-pid","5099");truvidScript2.async = true; truvidScript2.type = 'text/javascript';truvidScript2.src = '//go.trvdp.com/init/6967.js';
if (window.frameElement){
  doc2 = window.frameElement.ownerDocument;
}
else{
  doc2 = document;
}
parentDiv1 = doc2.getElementById("chr-content");
if(parentDiv1)
{
parentDiv1.parentNode.insertBefore(truvidScript2,parentDiv1);  
}
Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}button{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}@mixin dark-mode{background-color: #222; color: #d9d9d9; a {color: #fff; &:hover {text-decoration: underline; color: #ee730a;}} .lds-ring div {border-color: #999 transparent transparent;} .font-red {color: #b20f03;} .big-button,.pow-button {background-color: #4693ff; color: #1d1d1d;} #challenge-success-text {background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjZDlkOWQ5IiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4);}}@mixin light-mode{background-color: transparent; color: #313131; a {color: #0051c3; &:hover {text-decoration: underline; color: #ee730a;}} .lds-ring div {border-color: #595959 transparent transparent;} .font-red {color: #fc574a;} .big-button,.pow-button {border-color: #003681; background-color: #003681; color: #fff;} #challenge-success-text {background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=);}}@media (prefers-color-scheme: dark){body{@include dark-mode;}}body{display:flex;flex-direction:column;min-height:100vh;&.no-js{.loading-spinner{visibility:hidden}.challenge-running{display:none}}&.dark{@include dark-mode;}&.light{@include light-mode;}}a{transition:color .15s ease;background-color:transparent;text-decoration:none;color:#0051c3;&:hover{text-decoration:underline;color:#ee730a}}.main-content{margin:8rem auto;width:100%;max-width:60rem}.heading-favicon{margin-right:.5rem;width:2rem;height:2rem}@media (width <= 720px){.main-content{margin-top:4rem}.heading-favicon{width:1.5rem;height:1.5rem}}.main-content,.footer{padding-right:1.5rem;padding-left:1.5rem}.main-wrapper{display:flex;flex:1;flex-direction:column;align-items:center}.font-red{color:#b20f03}.spacer{margin:2rem 0}.h1{line-height:3.75rem;font-size:2.5rem;font-weight:500}.h2{line-height:2.25rem;font-size:1.5rem;font-weight:500}.core-msg{line-height:2.25rem;font-size:1.5rem;font-weight:400}.body-text{line-height:1.25rem;font-size:1rem;font-weight:400}@media (width <= 720px){.h1{line-height:1.75rem;font-size:1.5rem}.h2{line-height:1.5rem;font-size:1.25rem}.core-msg{line-height:1.5rem;font-size:1rem}}#challenge-error-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+);background-repeat:no-repeat;background-size:contain;padding-left:34px}#challenge-success-text{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJNMTMgMGExMyAxMyAwIDEgMCAwIDI2IDEzIDEzIDAgMCAwIDAtMjZtMCAyNGExMSAxMSAwIDEgMSAwLTIyIDExIDExIDAgMCAxIDAgMjIiLz48cGF0aCBmaWxsPSIjMzEzMTMxIiBkPSJtMTAuOTU1IDE2LjA1NS0zLjk1LTQuMTI1LTEuNDQ1IDEuMzg1IDUuMzcgNS42MSA5LjQ5NS05LjYtMS40Mi0xLjQwNXoiLz48L3N2Zz4=);background-repeat:no-repeat;background-size:contain;padding-left:42px}.text-center{text-align:center}.big-button{transition-duration:.2s;transition-property:background-color,border-color,color;transition-timing-function:ease;border:.063rem solid #0051c3;border-radius:.313rem;padding:.375rem 1rem;line-height:1.313rem;font-size:.875rem;&:hover{cursor:pointer}}.captcha-prompt:not(.hidden){display:flex}@media (width <= 720px){.captcha-prompt:not(.hidden){flex-wrap:wrap;justify-content:center}}.pow-button{margin:2rem 0;background-color:#0051c3;color:#fff;&:hover{border-color:#003681;background-color:#003681;color:#fff}}.footer{margin:0 auto;width:100%;max-width:60rem;line-height:1.125rem;font-size:.75rem}.footer-inner{border-top:1px solid #d9d9d9;padding-top:1rem;padding-bottom:1rem}.clearfix{&:after{display:table;clear:both;content:""}.column{float:left;padding-right:1.5rem;width:50%}}.diagnostic-wrapper{margin-bottom:.5rem}.footer .ray-id{text-align:center;code{font-family:monaco,courier,monospace}}.core-msg,.zone-name-title{overflow-wrap:break-word:flex;flex-wrap:wrap;justify-content:center}.clearfix:after{display:initial;clear:none;text-align:center;content:none}.column{padding-bottom:2rem}.clearfix .column{float:none;padding:0;width:auto;word-break:keep-all}.zone-name-title{margin-bottom:1rem}}.loading-spinner{height:76.391px}.lds-ring{display:inline-block;position:relative;width:1.875rem;height:1.875rem;div{box-sizing:border-box;display:block;position:absolute;border:.3rem solid #595959;border-radius:50%;border-color:#313131 transparent transparent;width:1.875rem;height:1.875rem;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;&:nth-child(1){animation-delay:-.45s}&:nth-child(2){animation-delay:-.3s}&:nth-child(3){animation-delay:-.15s}}}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){body,.main-wrapper{display:block}}</style><meta http-equiv="refresh" content="375"></head><body class="no-js"><div class="main-wrapper" role="main"><div class="main-content"><noscript><div id="challenge-error-title"><div class="h2"><span id="challenge-error-text">Enable JavaScript and cookies to continue</span></div></div></noscript></div></div><script>(function(){window._cf_chl_opt={cvId: '3',cZone: "top1novels.com",cType: 'interactive',cNounce: '16038',cRay: '851023033d2e2186',cHash: 'ba0959f8c110b0d',cUPMDTk: "\/novels\/the-cult-leader-in-the-clergy-academy\/chapter-98?__cf_chl_tk=U.uMJIjzhW58OvKR2ehgMCx7_nc4oh5MEbSoYE.FjG8-1707188362-0-gaNycGzNDNA",cFPWv: 'g',cTTimeMs: '1000',cMTimeMs: '375000',cTplV: 5,cTplB: 'cf',cK: "visitor-time",fa: "\/novels\/the-cult-leader-in-the-clergy-academy\/chapter-98?__cf_chl_f_tk=U.uMJIjzhW58OvKR2ehgMCx7_nc4oh5MEbSoYE.FjG8-1707188362-0-gaNycGzNDNA",md: "n7qYIfTQbOYkzECTUNVxElGYOeVLb4Vyn_2EW2q1Skw-1707188362-1-AbPuD6TE6O3T0N1YutERKAT3Xi1V3Zun2ZSJ0dRFxNCKR0RvIUr1n-Aw_Etdy5Jdmm3xnafcIhZv8QLjMwoj1NFmp1yi2ljjbXGjxvRwKIMCmQg2CUkFh5mrKLAwo1XyqGN5X0vFAeNr74hcgHiOPVDVWosNaVwwzRlDRMZiEn88ZnxtKHKCYRHDXH7SghGunNDGhjRfpz8H38EX0Ngd9QsjqG745ogde5UtROW8xDlRPpJaiMi_1JcROm5j6dVd2hSHCvX-JTvLefDqV_yg1RmyFixRGOcMVPp1-xu6MBKnbq0yeK-tWp5XuzrIgMFUs_nacjxOIDYWHxiCToGtyjbIamRATsdZX_wmdJYlXdTYMHsWwxFSoyv_k8JZhLhih3_8U_e_S8Q9_KOrgrguoeTszOj3h3YvpZK4tjPJyr8oI0MuFL-m-yyKtDffXnM79ao_kQAXDmuLQZjWnjHUi3iljE92utldkP8stPgsJEaKgorKOsv3ifjbr57jHoOtnSyGHSetbskqYDGJwYwa6n2XkbSa8fs6ojkTg4u7_PXTedUOPrmOv6aP1MVWnTSNLv032d1bpx7mlD3U15K7ZmOgcHTenebm3AeIb_I7VhpaYdzBKKVNabKJPQDmqKLXhLePbxlW__0TeBXc0bn18_bU7dSJWcJj9-Fh8BGh999L9cXhp0ULpHi8nVVoCnYuv8zM_Y4S5cAScrqfGXDYBrQNWQsyaRmqURZsxODvj-t62CUUDQY-WAclghITmN3r-e3keIIiikT2GcCbDRrDYh2UcsYatcglmgQzvEMOoQO4mXS7JVeQB_qowqkfeWM89-v_tb7q_mHWNpUzFO0YW6wuJElYv2lopWPBpkG6yVqF-pU6hFcOTGgpi3YGgFOjWiwc2NnMPsajkLgZe87HxXeoURK6B-BdCnzf0xfNXANK6MurdSqDnW21KhiW3kHu8ppVbP2hrwZQiMWAAcW34s9uSIGIYg3fGMx7ySc74NyoVC83zs1qWFeFohlDcVTika5_iRfswjoSOdOmPxST0wG2kF_WEwcSVThXTEG3H-xIVwezn6ZmVOR3OXSrTdHXJNaU7dN6xfJCd1RmTusi5OxncBtyWKZwoa0yK4Gs-jEo54f7nMtSqBt6q47WymtlRpVxUFMS8rPgHQkONb5hXxrp1_FayuOvlDQHRqYhT2AOumgqF8xCOBEvBx1bWQKiipU-DZ5bY2FJGwxHgpSnmjR-qCNHyWOQpe66lskXN-OOWG-EG6hFf_zOUD6xZ9XR2CWS94InvQx7Nv9MZK1hX4OKpCBZpDy61DwecsncL9eYZoB-FXtll5qchdvUGvUqtkvMPX1y0GFm5x1y8Y2da9grgaIyZbV3uRd5eON0HZKrt6Et9q04CMIU9FxRQD9FqKAOgaurUWuQ136-ToVVUMBXgPshLwBFYjAUUrixuokNWtU-LIQDHO3nbaLT5TLa7iylD1dcLzeZ-hngVH5ne_RZUQ3Lh_BNHAJt5zriEsminG8uqx_6TtIMEhqAApDbmqXENr0tiag0RRl6WLdTs-Pv97l487_Kok11Z-aSrYqGPD3IRXICefham7u4-oLXaXhAQbUoo4dFzJKTApmG68iZLrL89Fhc5ZUxjoZS4Pp8X6q20598Pi8pCuB0CMDYU9EUNYXQHUDD25OOlzzQ-e6NmIPToSKZAMo0kmhPehIkgeeJM_CtHBP6srlB4zbxTXZ01rgyRLEVxplNArbQdKoeRdqiRpd14H8UhZTXUimuuxV-OKuDWzjyzn447uatBoRQLPrNv9ZV5hPFTehlXWi6RF3bbtPLzic-u8ZaFu6jqg3I8UXcn6QlirV37q-Z2vkhE2iAQwLpU-AEkImXtQEgkXTylebTnqbmSqpmxiwVcE1kjHeK-vVTSwE1AOs7_VDsXPc7jZeebt7ZWFf-MqTH4lu67PmLKJbrvFpwhdtkUSQ0c04OY2ZDyZ6bf_eqhuHY0Sh3KbrNpp-NlWXUtrhYYVHOB1nYz5mFsDE_p-wce97Zpnjk3vMsBbs_BJ7YTC2GvtBOKfsWegUwL7wogFGiuVkEE9fi6Pxxqc5VYYa-YKXFZNpFiwzXXOQBuaBXRW66kBLalC3WR98yuWhEEY3x7speZ3kiCxIXwrTdtvA5xHniGn3Wpp1syNNz6R1PrP2SLM5p7GOZT5ezvAqk7y2rX5GsULBt9fHH6_luD2hL76PwrcYc6Q1rt_4E22jgX_d2y4wAvCIO9LfZKYV7lhydMN0z8SzbVfQzBsT9aOGQBkB2-scipyJj7mI2prxQIp0TwGsry4fkFg0PQ6t3Dv2vg3WoeyCwqWp04GwNtZDdKd0XDtZc2Tqsn09q0pplEu-VrNscADr7a6xgSZjLUc4ZQoPL9jOKtVx9oyKwRJ1ebIWYb2H0ViYTsVMmt3zlJoLVyyW7qUfu7HMBEzS2M2qSrdaAPqIVJLGD-leo5d_bvhxmNlHpi2oOrF7ez_koVZc4xRFxhShR4V4Ziq-UzVAGQpKXfFZnmlV8XKGe6dgz6HNwV7egQkQJdm0pkUlRkpgClFAWJmFnss0NJpt5WwHOQpky-qdM-HXoPhVIniRY18IudEfJ-0tJo-WdPBFq387iKa7i-1SoUhRMnSXhluTm6w8OAqIm2uhlAXTBT4kezLlXxEG1uBEGWfAsBNv5xSF8K2JzF-Pc_LYg19bOL_-dbnWOqRpqLoTG1Pwslbb2DJ8znpIWmUlgs5ALsfMck1BMN6r8w4p9mzjSRiaKMaY3JAMLxqAX14o4DKkn2h1deaAWPBzoGmcSSjvvoD-Bg3AArqwjFCww1aMVB7UCKLfc077vTk10xLskQhTvXGPCnnha1KyS7XggFbjsrHy1q2dDLVhRPzqpOVeGki3kKEtbXl1-74aJkxK8hI2hKP8IM6w-X1iTl_49Bk2Rwweg4m-3q0rCuDg1bXvDqlbYOdgA2GGLXxLMyI_EsZPimK4RFLWnPieKKZcBlgYbsV7__LQtYJ3VLs1uCrd__CSx3q-_qMoEFYtsEPgiqakzr-K__oHVQYXONVZfEFMAPIOY28exeKqpibDAEors8Bw3DxfMCwE6KcHOFZ9Sh8x5dm_GYnA09arZhum2UFojNEl74Mhes10Ahg7SmJX-_7FY7LjAMCMMwTG8Hqbmb_Zt9mg1g0WJoEgDaBjQwjXfCf9X-x9_xxljuAlEfAQVMZ1g1gI",cRq: {ru: 'aHR0cHM6Ly90b3Axbm92ZWxzLmNvbS9ub3ZlbHMvdGhlLWN1bHQtbGVhZGVyLWluLXRoZS1jbGVyZ3ktYWNhZGVteS9jaGFwdGVyLTk4',ra: 'TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgNi4xOyBXT1c2NDsgcnY6NDUuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC80NS4w',rm: 'R0VU',d: '2EakWqGPpvf0vC5y969aJ7UrJuNH+WT5s7DUVKSiMOs88/p6K2GnD8qjJUFe8ONeXXXQ5MjJK1JZMb7gf5PSWJC0EOkmwgYy1zcSEmIR8j5f7z55gdO0UYTOGa7i3FJ/QqB6cm2gGYl2PBcWAJ9HJxl4YMKc72Tmyz02BlsyNGwRakpeOx9Fj7xOm1DWTiasJ6UOEPTBYuI/fRIjntStYi6TgIuktRE9/ZhlfrYkq/AkRkeMy9F+aBW9akfCMz8PjPVS2ngI7SAJwHkz6aWuViCRNoDSIE56/77rByahZRtbkLOrKm50rD8MWlC8fNAh8pkblFYH4sIjWE/7ZwsoOoCol2goksf2ZHn2icFi1oQkrECslalNHVDBAmhMItVCSIK5FKTvAPUNFFbcQt9ONdzch8jdaR4gQZ0zmVDr+4UeWFBew5fUp3ju+i7tYb2jXdlOg3PQClO4KOqYZWiP49S+OvucIfe5o/AoVDkN26+F/nt/7LYk+qnzphyO2m+wbvm8kSFYKkasLhAKMQ8zkRYQlhRpEytW4/EJFAPd8MgE4A1qLf3tBJOYLlHR2f4Y0nox3KV0T7bxFS5SlZHeEQ==',t: 'MTcwNzE4ODM2Mi43NjIwMDA=',cT: Math.floor(Date.now() / 1000),m: 'MuNWMhWgmS35Og0+///8VuXINAl25k/CwYf4FqBDFFA=',i1: 'OJFW3q5ihToS7mg/iqo4Iw==',i2: '9uw4KqryWNmY66pZnFzk/Q==',zh: '2yzeUSxfbeVhvKpwkpMu94KJZyu5NnI26T3oZFf8YCE=',uh: 'wuTXTOnLAeHZ1pu4MPfYN2m+aF4ZjFpylH5Ml5+UhCE=',hh: 'yxnLoFczjhdKmViWfm7vKnCaEF5IiLFQrLzh/Y9wYmk=',}};var cpo = document.createElement('script');cpo.src = '/cdn-cgi/challenge-platform/h/g/orchestrate/chl_page/v1?ray=851023033d2e2186';window._cf_chl_opt.cOgUHash = location.hash === '' && location.href.indexOf('#') !== -1 ? '#' : location.hash;window._cf_chl_opt.cOgUQuery = location.search === '' && location.href.slice(0, location.href.length - window._cf_chl_opt.cOgUHash.length).indexOf('?') !== -1 ? '?' : location.search;if (window.history && window.history.replaceState) {var ogU = location.pathname + window._cf_chl_opt.cOgUQuery + window._cf_chl_opt.cOgUHash;history.replaceState(null, null, "\/novels\/the-cult-leader-in-the-clergy-academy\/chapter-98?__cf_chl_rt_tk=U.uMJIjzhW58OvKR2ehgMCx7_nc4oh5MEbSoYE.FjG8-1707188362-0-gaNycGzNDNA" + window._cf_chl_opt.cOgUHash);cpo.onload = function() {history.replaceState(null, null, ogU);}}document.getElementsByTagName('head')[0].appendChild(cpo);}());</script></body></html>