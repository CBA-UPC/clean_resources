"use strict";(self.webpackChunk_klaviyo_onsite_modules=self.webpackChunk_klaviyo_onsite_modules||[]).push([[7542],{92822:function(n,e,o){var t=o(69899),r=(o(10053),o(44050)),i=o(28650),a=o(56623);const s=`${r.bl.url}${r.bl.clientGroups}`,l=(n,e,o)=>{const{_kx:t}=e;return(0,i.W)((()=>(({companyId:n,groupIds:e,_kx:o})=>{const t=e.sort();return fetch(`${s}/?company_id=${n}${((n,e)=>`&filter=any(id,[${n.map(().join(",")}]),equals(profile._kx,"${e}")`)(t,o)}`,{method:"GET",headers:{"Access-Control-Allow-Headers":"*","Content-Type":"application/json","X-Klaviyo-Onsite":"1",revision:"2023-11-15"}})})({companyId:n,_kx:t,groupIds:o})),5,1e3+1e3*Math.random(),[429]).then(()},c=(n,e)=>{if(!n||!Array.isArray(n))throw new Error("Invalid Input");window.klaviyo.isIdentified().then((()=>{let{$exchange_id:o}=(0,a.zy)();o||({_kx:o}=(0,a.oQ)()),o&&0!==n.length?window.klaviyo.account().then(().then((e=>{if(e&&o)return l(e,{_kx:o},n);throw new Error})).then((n=>{const{data:o}=n;e&&e(o.map(())})).catch((()=>{e&&e([])})):e([])}))};(()}},);