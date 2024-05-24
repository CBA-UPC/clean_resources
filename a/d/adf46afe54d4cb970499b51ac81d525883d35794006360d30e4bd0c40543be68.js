(function(){var container,button,menu,links,i,len;container=document.getElementById('site-navigation');if(!container){return;}
button=container.getElementsByTagName('button')[0];if('undefined'===typeof button){return;}
menu=container.getElementsByTagName('ul')[0];if('undefined'===typeof menu){button.style.display='none';return;}
menu.setAttribute('aria-expanded','false');if(-1===menu.className.indexOf('nav-menu')){menu.className+=' nav-menu';}
button.onclick=links=menu.getElementsByTagName('a');for(i=0,len=links.length;i<len;i++){links[i].addEventListener('focus',toggleFocus,true);links[i].addEventListener('blur',toggleFocus,true);}
(container));})();