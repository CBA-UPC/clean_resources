import{isFunction as M}from"../base/croco.js";import{mediaQuery as S,isRTLEnabled as X}from"../base/config.js";export function onTouchSwipe(t,l,{desktopEnabled:o=false,maxY:u=60,lockScroll:i=false}={}){let m=0;let h=0;let p=0;let v=0;let g=false;let L=false;const j=30;const k=S.desktopOnly.matches;function Y(){return Math.abs(p-m)>Math.abs(v-h)}if(t){t.addEventListener(o&&k?"mousedown":"touchstart",e=>{if(!e.target.classList.contains("js-no-swipe")){const t=e.touches?e.touches[0]:e;m=t.screenX;h=t.screenY;g=true;if(l&&M(l.start)){l.start(e)}}},true);document.addEventListener(o&&k?"mousemove":"touchmove",e=>{if(g){const t=e.touches?e.touches[0]:e;p=t.screenX;v=t.screenY;if(i&&!L&&Y()){L=true}if(!i||L){l&&M(l.move)&&l.move(e,p-m);L&&e.preventDefault()}}},{capture:true,passive:!i});document.addEventListener(o&&k?"mouseup":"touchend",e=>{if(g){g=false;L=false;const t=Y();const o=p>m+j;const i=p<m-j;if(t&&l&&M(l.drop)){l.drop(e,p-m)}else if(t&&(o||i)&&v>h-u&&v<h+u){if(p>m&&!X()){l&&M(l.left)&&l.left(e)}else{l&&M(l.right)&&l.right(e)}}else{l&&M(l.reset)&&l.reset(e)}m=0;h=0;p=0;v=0;l&&M(l.end)&&l.end(e)}},true)}}