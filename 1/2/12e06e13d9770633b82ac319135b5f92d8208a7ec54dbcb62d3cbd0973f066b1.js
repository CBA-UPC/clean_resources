<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>MGV Target</title>
</head>
<body>
<script>
(function(){try{var a;try{a="localStorage"in window&&null!==window.localStorage&&"postMessage"in window&&null!==window.postMessage}catch(b){a=!1}if(a&&window.top&&window.top!==window){var c=decodeURIComponent(window.location.hash.slice(1)).split("|"),d=decodeURIComponent(c[0]),e=c[1],f=/\d+/.test(c[2])&&c[2],g=/^[a-z0-9]+$/i.test(c[3])&&c[3],h=g&&"mt.g."+g,i=h&&window.localStorage.getItem(h),j=f+g;if(!d||!g||!f||!j||!e)window.parent.postMessage("mterr",d||"*");else if(i)window.parent.postMessage(j+","+i,d);else{window.localStorage.setItem(h,
e);var k=window.localStorage.getItem(h);window.parent.postMessage(j+","+k,d)}}}catch(l){};})();
</script>
</body>
</html>
