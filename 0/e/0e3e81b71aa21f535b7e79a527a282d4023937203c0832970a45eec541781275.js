import{g as l}from"./entry.Cu783cqS.js";const f=(o,t)=>{const e=new URLSearchParams(window.location.search);let a=!1;for(const r in t){let c=t[r];o==="add"?(e.set(r,t[r]),a=!0):c.forEach(s=>{e.has(s)&&(e.delete(s),a=!0)})}a&&l(`?${e.toString()}`,{replaceState:!0,keepFocus:!0,noScroll:!0})};export{f as u};