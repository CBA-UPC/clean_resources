!function(){"use strict";unction b(){var a=document;return a.body.scrollHeight<a.documentElement.scrollHeight&&a.body.scrollHeight<a.documentElement.clientHeight&&a.body.offsetHeight===a.documentElement.offsetHeight?a.body.scrollHeight:Math.max(Math.max(a.body.offsetHeight,a.documentElement.offsetHeight),Math.max(Math.max(a.body.scrollHeight,a.documentElement.scrollHeight),Math.max(a.body.clientHeight,a.documentElement.clientHeight)))}function c(a){parent.postMessage&&(parent.postMessage('setIframeHeight::{ "iframeSrc": "'+document.location.href+'", "iframeId": "'+e+'", "iframeReferrer": "'+document.referrer+'", "height":'+a+" }","*"),parent.postMessage({sentinel:"amp",type:"embed-size",height:a},"*"))}function d(a){var b=void 0!==a.originalEvent?a.originalEvent.data:a.data;if(b+="",b.indexOf("::")&&(b=b.split("::"),2===b.length)){var c;try{c=JSON.parse(b[1])}catch(a){}if(c&&c!==b[1]){switch(b[0]){case"setIframeHeight:deepLink:changed":var d=new CustomEvent("setIframeHeight:deepLink:changed",{detail:c});window.dispatchEvent(d)}}}}if(window.parent&&parent!==self){window.iFrameChild=!0;var e=parseInt(99999999*Math.random());window.addEventListener("message",d),document.documentElement.style.height="auto",setInterval(a,350),a()}}();