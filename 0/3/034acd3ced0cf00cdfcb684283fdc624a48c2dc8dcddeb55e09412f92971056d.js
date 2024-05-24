//Copyright VisiStat, Inc. dba KickFire 2021, All Rights Reserved.

var kftwiq;
var kftwiqpg;
var kftwiqsrc = document.currentScript;
var kfs = kftwiqsrc.src;
var kfTWIQ = kfs.substring(kfs.indexOf("?")+1);
var Hst = document.domain;
kftwiniq = new Image();
kftwiqpg = encodeURIComponent(document.URL);  
kftwiniq.src = '\/\/twin-iq.kickfire.com\/twin.php?TWIQ='+kfTWIQ+'&kftwiqpg='+kftwiqpg+'&Hst='+Hst+'&r='+Math.random();