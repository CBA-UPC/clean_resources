!function(){"use strict";const e="abtasty_executedCampaign",t=e=>{if((()=>{if(Object.prototype.hasOwnProperty.call(window,"ABTastyEditor")||(()=>{const e=!!document.getElementById("ABTastyPreviewBar"),t=location.href.includes("ab_project=preview");return e||t})())return!1;const e=ABTasty.getTestsOnPage()[TEST_ID];return!!e&&Object.keys(e.targetings.qaParameters).length>0})()){const t=(()=>{const e=(()=>{const{type:e}=DATA;return`${PACKAGE.replace("@abtasty/","")}${e?`_${e}`:""}`})();return`${e.charAt(0).toUpperCase()}${e.slice(1)}`.split("-").join(" ")})();window.console.log(`%c${t} - QA Mode for campaign ${TEST_ID}\n${e}`,"background-color: rgba(0, 127, 145, 1); color: rgba(247, 247, 247, 1)")}};let n,o=const{engagementGoal:r,customTarget:c,scrollTarget:s}=DATA,a=l=["scroll",{passive:!0}],i=()=>{const e=c?document.querySelector(s):window;e&&e.removeEventListener(...l)},d=e=>{t("Widget launch"),n=a(),(c?e:window).addEventListener(...l)},u=()=>{const e=(()=>{const e=c?document.querySelector(s):document.body.scrollTop>0?document.body:document.documentElement;return e?100*e.scrollTop/(Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)-(c?e.parentElement.clientHeight:window.innerHeight)):0})();n=n.filter(n=>{let{percentage:o,name:r}=n;return!(e>=o&&(ABTastyEvent(r,null,TEST_ID),t(`Goal "${r}" sent to campaign ${TEST_ID}.`),1))}),n.length||i()},g=()=>{const e=((e,t)=>{const n=let o=n();const r=[document.body||document.documentElement,{childList:!0,subtree:!0,attributes:!0}],c=s=a=new MutationObserver(()=>(o=n(),o&&!c()&&t(o)));return o?setTimeout(0):s(),{selector:e,clear:c,observe:s}})(c?s:"body",d);o=e.clear},m=e=>{let{detail:{campaignId:t}}=e;t===TEST_ID&&(g(),p())},T=()=>{window.removeEventListener(e,m),i(),o(),n=a(),window.addEventListener(e,m)},p=g(),p()}();