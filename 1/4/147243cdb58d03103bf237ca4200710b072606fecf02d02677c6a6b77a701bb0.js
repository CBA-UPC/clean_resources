var ASCDP=window.ASCDP||{};ASCDP.adS=ASCDP.adS||{},ASCDP.adS.moveSky=function(g){ASCDP.adS.loadModules(["calcY","floatSky","getScrollTop","getContWidth","getWinHeight","addCSS","delCSS"],function(){var i,o,a,n,e=ASCDP.pageSet,l=ASCDP.adS,t=l.getScrollTop(),r=0,d=l.getContWidth();if(g.posY=l.calcY(g.adSlot,g.adSlot.offsetTop),g.tempName.match(/fireplace|wallpaper/)&&g.dockDown&&(g.posY+=g.crea1.height),e.navi&&0!==e.navi.length)for(var p=0;p<e.navi.length;p++)if((o=document.querySelector(e.navi[p]))&&(n=window.getComputedStyle(o),parseInt(n.width)>=d&&"none"!==n.display)){r=parseInt(n.height);break}if(g.moveEl)if(0===g.moveEl.length&&("sitebar"===g.tempName?"fixed"!==g.stickiness||e.floatSky?g.moveEl.push(g.contId+"_i"+g.insertionId+"_rightBar"):g.moveEl.push(g.contId+"_i"+g.insertionId+"_siteBar"):g.moveEl.push(g.tempName.match(/native.*renderer/i)||g.isIO?g.contId+"_bannerCont":"div_utif_"+g.contId)),"absolute"===g.stickiness||e.floatSky&&"fixed"===g.stickiness&&g.tempName.match(/sitebar|bridge|twoface/i))for(i=0;i<g.moveEl.length;i++)!(a=document.getElementById(g.moveEl[i]))||!(S=window.getComputedStyle(a))||parseInt(S.height)>l.getWinHeight()&&t+l.getWinHeight()>document.body.clientHeight||l.floatSky(g,a,o);else if(!g.tempName.match(/sitebar|bridge|twoface/i))for(i=0;i<g.moveEl.length;i++)if(a=document.getElementById(g.moveEl[i])){var S=window.getComputedStyle(a),m=parseInt(S.marginTop),s="margin-top: "+m+"px!important;",c='[id="'+g.moveEl[i]+'"] {position:fixed!important; top: 0px!important;}',f=S.position;if(t<g.posY&&"fixed"===f)a.style.left="auto",g.xtraCSS=g.xtraCSS.replace(c+"#"+g.moveEl[i]+" {"+s+"}",""),0!==m?l.delCSS(c+"#"+g.moveEl[i]+" {"+s+"}"):l.delCSS(c);else if(t>=g.posY&&t>=l.calcY(a,a.offsetTop)&&(-1<g.contId.indexOf("sky")||g.tempName.match(/wallpaper|fireplace/i)||"fixed"!==f)){let e=g.crea1&&g.crea1.cut||0,t=o&&parseInt(n.width)>d&&r!==m;g.crea1.options&&g.crea1.options.fallback&&("right"===g.crea1.options.expandDir||"left"===g.crea1.options.expandDir&&a.style.width!==g.crea1.options.expWidth+"px")&&(e=0),a.style.left=a.parentNode.getBoundingClientRect().left-e+"px","fixed"===f.position&&!t||(g.xtraCSS=g.xtraCSS.replace(c,""),g.tempName.match(/wallpaper|fireplace/i)||(g.masterSlot.parentNode.style.width=g.crea1.width),g.masterSlot.parentNode.style.minHeight="1px",l.delCSS(c),t&&(l.delCSS("#"+g.moveEl[i]+" {"+s+"}"),c+="#"+g.moveEl[i]+" {margin-top: "+r+"px!important;}"),l.addCSS(c),g.xtraCSS=g.xtraCSS+c)}}})};