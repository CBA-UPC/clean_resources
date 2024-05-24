/*!
 _____         _
|  _  |_ _ ___| |_ ___ ___ _ _ _ ___
|   __| | |_ -|   |   | -_| | | |_ -|
|__|  |___|___|_|_|_|_|___|_____|___|
                          pushnews.eu
 */
const scriptSrc=document.currentScript.src;const filename=scriptSrc.substring(scriptSrc.lastIndexOf("/")+1);const urlParams=new URLSearchParams(filename.split("?")[1]);const appId=urlParams.get("appId");if(appId){if(document.getElementById("pushnews-launcher")){console.error("[IlabsPush] Cannot inject client config: script#pushnews-launcher already exists")}else{let url=`https://cdn.pn.vg/sites/${appId}.js`;const script=document.createElement("script");script.setAttribute("id","pushnews-launcher");const params={};urlParams.forEach(();script.setAttribute("data-parameters",JSON.stringify(params));script.setAttribute("src",url);script.setAttribute("async","true");if(document.head){document.head.appendChild(script)}else if(document.body){document.body.appendChild(script)}else{console.error("[IlabsPush] Cannot inject client config: head and body elements not found")}}}else{console.error("[IlabsPush] Cannot inject client config: appId not found")}