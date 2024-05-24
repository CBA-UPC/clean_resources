<!doctype>
<html>
<head></head>
<body>
<script>
    (function(){
        !function(a,b,c,d,e,f,g,h,i,j,k,l){a[f]=a[f]||[],k=a[f];try{k.push(a.localStorage)}catch(a){}try{k.push(a.sessionStorage)}catch(a){}k.push({setItem:function(a,d,s,e,f,g,r){r="",e=new Date,f=typeof d,g="object"===f&&"undefined"!==f?JSON.stringify({v:d}):d,e.setTime(e.getTime()+1e11);for(key in s){if(key.toLowerCase() == "secure" && s[key] && location.protocol != "https:") {delete s[key];continue;}r+=key+"="+s[key]+";"}b[c]=a+"="+encodeURIComponent(g)+"; expires="+e.toUTCString()+"; path=/;"+r;},getItem:function(a){for(var f=a+"=",g=b[c].split(";"),h="",j={},k=0;k<g[d];k++){for(var m=g[k];" "==m.charAt(0);)m=m[e](1,m[d]);if(0===m.indexOf(f)){if(h=decodeURIComponent(m[e](f[d],m[d])),"{"==h[e](0,1))try{if("v"in(j=JSON.parse(h)))return j.v}catch(a){return h}return"undefined"==h?l:h}}return null}}),k.get=function(a,b){for(i=0;i<k[d];i++)if(b=k[i]){try{b=b.getItem(a)}catch(a){}if(b)return k.set(a,b),b}},k.set=function(a,b,s){for(i=0;i<k[d];i++)if(result=k[i],result)try{result.setItem(a,b,s)}catch(a){}}}(window,document,"cookie","length","substring","APC");
        var userId = false;
        userId = APC.get("apuid");
        var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (typeof userId !== "string" || !pattern.test(userId)){
            var newUserId = '';
            APC.set("apuid", newUserId, {secure: true, sameSite: 'none'});
            userId = APC.get("apuid");
            if (newUserId != userId) {
                return;
            }
        }
        parent.window.postMessage("user_id_" + userId, document.referrer ? document.referrer : "*");
        parent.window.postMessage("init_conversion_tracker", document.referrer ? document.referrer : "*");
    })();
</script>
OK

</body>
</html>

