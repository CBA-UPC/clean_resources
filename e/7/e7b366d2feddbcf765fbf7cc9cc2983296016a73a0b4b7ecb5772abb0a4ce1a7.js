(function(exoDynamicParams) {!function(){try{var t=document.scripts[document.scripts.length-1].getAttribute("data-goal"),a=document.scripts[document.scripts.length-1].getAttribute("data-value")||null;if(null!=t){var e=new Array,n=0;const i=(new Date).toISOString().replace(/[-:.TZ]/g,"")+Math.floor(1e3*Math.random()).toString();for(var r=0;r<exoDynamicParams.aliases.length;r++){n++;var o="https://"+exoDynamicParams.aliases[r]+"/tag.php?goal="+t+"&stackUid="+i;a&&(o+="&value="+a),e[r]=new Image(1,1),e[r].src=o,e[r].onload=function(t){n--},e[r].onerror=try{document.body.appendChild(e[r])}catch(t){}}var c=20,s=setInterval((function(){if(n<1||c<1){clearInterval(s);var t=new CustomEvent("goals-done");document.dispatchEvent(t)}c--}),100)}}catch(t){}}();})({"aliases":["s.magsrv.com","s.opoxv.com","s.orbsrv.com","s.pemsrv.com","syndication.realsrv.com","s.zlink3.com"]})