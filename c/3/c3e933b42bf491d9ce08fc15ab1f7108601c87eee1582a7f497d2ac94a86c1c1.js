function openshopperapproved(e){var nonwin=(navigator.appName!='Microsoft Internet Explorer')?'yes':'no';var h=screen.availHeight-90;var w=940;if(window.innerWidth<1400){w=620}
window.open(this.href,'shopperapproved','location='+nonwin+',scrollbars=yes,width='+w+',height='+h+',menubar=no,toolbar=no');if(e.stopPropagation)e.stopPropagation();return false;}
(function(){var seals=document.getElementsByClassName('shopperlink');for(var i=0,end=seals.length;i<end;i++){seals[i].onclick=openshopperapproved;}})();