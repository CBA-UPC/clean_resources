"use strict";(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[8359],{72935:(e,t,s)=>{s.d(t,{ZP:()=>l,e$:()=>i,eW:()=>n});var a=s(56494),r=s(96832);const n=(e,t)=>0===t.map((({value:t})=>new RegExp(t).test(e))).filter(().length,i=(e,t)=>{let s;for(let a=0;a<t.length;a+=1)if(!new RegExp(t[a].value).test(e)){s=t[a].invalid;break}return s};function l(e){const[t,s]=(0,r.useState)({lengthTest:null,caseTest:null,digitTest:null});return{passwordValidationResults:t,doPasswordChecks:t=>{const r={lengthTest:null,caseTest:null,digitTest:null},n=Object.keys(r);for(let s=0;s<n.length;s+=1)(0,a.OZ)(t)||(r[n[s]]=new RegExp(e[s].value).test(t));s(r)}}}},81410:(e,t,s)=>{s.d(t,{EH:()=>g,Ss:()=>p,UP:);var a=s(46255),r=s(34853);const n=({type:e})=>"valid"===e?(0,r.tZ)("svg",{"aria-hidden":"true",fill:"none",height:"14",viewBox:"0 0 14 14",width:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,r.tZ)("path",{d:"M7.00065 0.333008C3.32065 0.333008 0.333984 3.31967 0.333984 6.99967C0.333984 10.6797 3.32065 13.6663 7.00065 13.6663C10.6807 13.6663 13.6673 10.6797 13.6673 6.99967C13.6673 3.31967 10.6807 0.333008 7.00065 0.333008ZM5.19398 9.85968L2.80065 7.46634C2.54065 7.20634 2.54065 6.78634 2.80065 6.52634C3.06065 6.26634 3.48065 6.26634 3.74065 6.52634L5.66732 8.44634L10.254 3.85967C10.514 3.59967 10.934 3.59967 11.194 3.85967C11.454 4.11967 11.454 4.53967 11.194 4.79967L6.13398 9.85968C5.88065 10.1197 5.45398 10.1197 5.19398 9.85968Z",fill:"#46815A"})}):"invalid"===e?(0,r.tZ)("svg",{"aria-hidden":"true",fill:"none",height:"14",viewBox:"0 0 14 14",width:"14",xmlns:"http://www.w3.org/2000/svg",children:(0,r.tZ)("path",{d:"M7.00065 0.333008C3.32065 0.333008 0.333984 3.31967 0.333984 6.99967C0.333984 10.6797 3.32065 13.6663 7.00065 13.6663C10.6807 13.6663 13.6673 10.6797 13.6673 6.99967C13.6673 3.31967 10.6807 0.333008 7.00065 0.333008ZM7.00065 7.66634C6.63398 7.66634 6.33398 7.36634 6.33398 6.99967V4.33301C6.33398 3.96634 6.63398 3.66634 7.00065 3.66634C7.36732 3.66634 7.66732 3.96634 7.66732 4.33301V6.99967C7.66732 7.36634 7.36732 7.66634 7.00065 7.66634ZM7.66732 9.66634C7.66732 10.0345 7.36884 10.333 7.00065 10.333C6.63246 10.333 6.33398 10.0345 6.33398 9.66634C6.33398 9.29815 6.63246 8.99967 7.00065 8.99967C7.36884 8.99967 7.66732 9.29815 7.66732 9.66634Z",fill:"#A82700"})}):(0,r.tZ)("svg",{"aria-hidden":"true",fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:(0,r.tZ)("path",{d:"M6.26892 10.0936L4.39434 8.21897C4.18366 8.00828 3.84331 8.00828 3.63263 8.21897C3.42194 8.42966 3.42194 8.77 3.63263 8.98069L5.89077 11.2388C6.10146 11.4495 6.4418 11.4495 6.65248 11.2388L12.3681 5.52325C12.5788 5.31256 12.5788 4.97222 12.3681 4.76153C12.1574 4.55084 11.817 4.55084 11.6064 4.76153L6.26892 10.0936Z",fill:"#717277"})}),i=(0,a.Z)("p",{target:"eghzb2i5"})((({status:e})=>({fontSize:"1.2rem",color:null===e?"#717277":e?"#46815A":"#A82700"})),""),l=(0,a.Z)("p",{target:"eghzb2i4"})((,""),d=(0,a.Z)("div",{target:"eghzb2i3"})({name:"d3qjqk",styles:"margin-bottom:1.6rem"}),o=(0,a.Z)("div",{target:"eghzb2i2"})({name:"1r9xdqo",styles:"display:flex;flex-direction:column;justify-content:flex-start"}),h=(0,a.Z)("div",{target:"eghzb2i1"})({name:"12wxv1k",styles:"display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;gap:.4rem"}),c=(0,a.Z)("div",{target:"eghzb2i0"})({name:"135rqze",styles:"height:1.6rem;width:1.6rem"}),u=({status:e,dataTest:t})=>null===e?(0,r.tZ)(n,{"data-test":`${t}-neutral`,type:"neutral"}):e?(0,r.tZ)(n,{"data-test":`${t}-valid`,type:"valid"}):(0,r.tZ)(n,{"data-test":`${t}-invalid`,type:"invalid"}),p=(e,t)=>{const s={lengthTest:t("8 to 32 characters"),caseTest:t("an upper case and lower case letter"),digitTest:t("a number (0-9)")};let a;const r=Object.entries(e);for(let e=0;e<r.length;e+=1)if(!1===r[e][1]){[a]=r[e];break}return a?`${t("Password must have")} ${s[a]}`:void 0},w="password-checks",g=({passwordValidationResults:e,translate:t})=>{const s={lengthTest:t("8 to 32 characters"),caseTest:t("an upper case and lower case letter"),digitTest:t("a number (0-9)")},a={lengthTest:{neutral:`: ${t("Password must have eight to thiry two characters")}`,error:`: ${t("Error")} - ${t("Password doesn't have eight to thirty two characters")}`,success:`: ${t("Success")}: ${t("Password has eight to thirty two characters")}`},caseTest:{neutral:`: ${t("Password must have an uppercase and lower case letter")}`,error:`: ${t("Error")} - ${t("Password doesn't have an upper case and lower case letter")}`,success:`: ${t("Success")} - ${t("Password has an upper case and lower case letter")}`},digitTest:{neutral:`: ${t("Password must have a number between zero and nine")}`,error:`: ${t("Error")} - ${t("Password doesn't have a number between zero and nine")}`,success:`: ${t("Success")} - ${t("password has a number between zero and nine")}`}};return(0,r.BX)(d,{children:[(0,r.BX)(i,{status:null,style:{marginBottom:"0.4rem"},children:[t("Password must have"),":"]}),(0,r.tZ)(o,{"aria-atomic":"true","aria-live":"assertive",id:w,children:Object.keys(e).map((n=>{const d=n.replace(/[A-Z]/g,(),o=n,p=null===e[o]?"neutral":e[o]?"success":"error";return(0,r.BX)(h,{children:[(0,r.tZ)(c,{children:(0,r.tZ)(u,{dataTest:d,status:e[o]})}),(0,r.BX)("div",{children:[(0,r.tZ)(i,{"aria-hidden":"true","data-test":`${d}-helper-text`,status:e[o],children:t(s[o])}),(0,r.tZ)(l,{"aria-relevant":"text",tabIndex:0,children:t(a[o][p])})]})]},n)}))})]})}}}]);
//# sourceMappingURL=8359.www.js.map