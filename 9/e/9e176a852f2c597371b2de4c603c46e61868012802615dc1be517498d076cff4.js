import{aQ as T,u,aV as x,az as B}from"./_boot.d47e607d.js";const M=T.injectEndpoints({endpoints:o=>({getProtectionById:o.query({query:transformResponse:)})}),k=(o,t)=>t?!o.isProtectionConfigured:!0,O=()=>{const o=u(x),t=u(B);return M.useGetProtectionByIdQuery({orderId:o==null?void 0:o.id},{skip:k(t,o)})};var l=/iPhone/i,c=/iPod/i,f=/iPad/i,b=/\biOS-universal(?:.+)Mac\b/i,p=/\bAndroid(?:.+)Mobile\b/i,h=/Android/i,n=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,d=/Silk/i,i=/Windows Phone/i,v=/\bWindows(?:.+)ARM\b/i,m=/BlackBerry/i,y=/BB10/i,P=/Opera Mini/i,g=/\b(CriOS|Chrome)(?:.+)Mobile/i,w=/Mobile(?:.+)Firefox\b/i,A=function(o){return typeof o!="undefined"&&o.platform==="MacIntel"&&typeof o.maxTouchPoints=="number"&&o.maxTouchPoints>1&&typeof MSStream=="undefined"};unction z(o){var t={userAgent:"",platform:"",maxTouchPoints:0};!o&&typeof navigator!="undefined"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof o=="string"?t.userAgent=o:o&&o.userAgent&&(t={userAgent:o.userAgent,platform:o.platform,maxTouchPoints:o.maxTouchPoints||0});var a=t.userAgent,s=a.split("[FBAN");typeof s[1]!="undefined"&&(a=s[0]),s=a.split("Twitter"),typeof s[1]!="undefined"&&(a=s[0]);var e=I(a),r={apple:{phone:e(l)&&!e(i),ipod:e(c),tablet:!e(l)&&(e(f)||A(t))&&!e(i),universal:e(b),device:(e(l)||e(c)||e(f)||e(b)||A(t))&&!e(i)},amazon:{phone:e(n),tablet:!e(n)&&e(d),device:e(n)||e(d)},android:{phone:!e(i)&&e(n)||!e(i)&&e(p),tablet:!e(i)&&!e(n)&&!e(p)&&(e(d)||e(h)),device:!e(i)&&(e(n)||e(d)||e(p)||e(h))||e(/\bokhttp\b/i)},windows:{phone:e(i),tablet:e(v),device:e(i)||e(v)},other:{blackberry:e(m),blackberry10:e(y),opera:e(P),firefox:e(w),chrome:e(g),device:e(m)||e(y)||e(P)||e(w)||e(g)},any:!1,phone:!1,tablet:!1};return r.any=r.apple.device||r.android.device||r.windows.device||r.other.device,r.phone=r.apple.phone||r.android.phone||r.windows.phone,r.tablet=r.apple.tablet||r.android.tablet||r.windows.tablet,r}export{z as i,O as u};