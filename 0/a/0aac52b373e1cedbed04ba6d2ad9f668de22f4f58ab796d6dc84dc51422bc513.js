<!DOCTYPE html>
<!-- saved from url=(0048)https://try.abtasty.com/cross-domain-iframe.html -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
  <title>AB Tasty CDT</title>
  <script type="text/javascript">
    (function(){window.onmessage=function(e){if(!e||typeof e.data!=="string")return;var payload=null;try{payload=JSON.parse(e.data)}catch(e){return}if(!payload||!payload.identifier||!payload.method||!payload.key)return;try{var data=getData(payload.identifier);switch(payload.method){case"set":data[payload.key]=payload.value;localStorage.setItem(payload.identifier,JSON.stringify(data));break;case"get":var result={key:payload.key,value:data[payload.key]||""};window.parent.postMessage(JSON.stringify(result),"*");break;case"remove":if(!data[payload.key])break;delete data[payload.key];localStorage.setItem(payload.identifier,JSON.stringify(dabreak}}catch(e){if(payload.method==="get"){var result={key:payload.key,value:""};window.parent.postMessage(JSON.stringify(result),"*")}}};function getData(identifier){var datas=localStorage.getItem(identifier);return datas?JSON.parse(datas):{}}})();
  </script>
</head>

<body>


</body></html>
