.octopus-container {
    cursor: pointer;
    position: relative;
    padding: 0;
    border: 0;
}

.octopus-container-center {
    margin: 0 auto;
}

.octopus-container iframe {
    border: 0;
}

.octopus-container-300250 {
    width: 300px;
    height: 250px;
}

.octopus-container-300600 {
    width: 300px;
    height: 600px;
}

.octopus-container-72890 {
    width: 728px;
    height: 90px;
}

.octopus-container-160600 {
    width: 160px;
    height: 600px;
}

.octopus-container-46860 {
    width: 468px;
    height: 60px;
}

.octopus-container-200200 {
    width: 200px;
    height: 200px;
}

.octopus-container-120600 {
    width: 120px;
    height: 600px;
}

.octopus-container-320100 {
    width: 320px;
    height: 100px;
}

.octopus-container-32050 {
    width: 320px;
    height: 50px;
}

.octopus-container-00 {
    width: 100%;
    height: auto;
}

.octopus-container-fullwidth {
    width: 100%;
    height: auto;
}

.octopus-container-fullwidth a {
    width: 100%;
}

.octopus-container-fullwidth img {
    max-width: 100%!important;
    height: auto!important;
}

.octopus-container-fullwidth iframe {
    width: 100%;
}

.octopus-container-fullwidth .octopus-banner {
    height: auto;
}

.octopus-banner {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

.octopus-banner img {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
}

.octopus-banner:hover {
    opacity: 0.85;
}

.octopus-view {
    width: 1px;
    height: 1px;
    border: 0;
    display: none;
    visibility: hidden;
}

.octopus-logo {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 16px;
    height: 16px;
    padding: 1px 0 0 1px;
    font-size: 10px;
    color: #333;
    text-shadow:1px 1px 1px #efefef;
    border-radius: 0 0 0 5px;
    background: #fefefe;
    cursor: pointer;
}
led!)
ulelement.parentNode.onclick=function(e){
var submenu=this.getElementsByTagName("ul")[0]
if (submenu.getAttribute("rel")=="closed"){
submenu.style.display="block"
submenu.setAttribute("rel", "open")
//ulelement.parentNode.style.backgroundImage="url("+ddtreemenu.openfolder+")"
}
else if (submenu.getAttribute("rel")=="open"){
submenu.style.display="none"
submenu.setAttribute("rel", "closed")
//ulelement.parentNode.style.backgroundImage="url("+ddtreemenu.closefolder+")"
}
ddtreemenu.preventpropagate(e)
}
ulelement.onclick=function(e){
ddtreemenu.preventpropagate(e)
}
}

ddtreemenu.expandSubTree=function(treeid, ulelement){ //expand a UL element and any of its parent ULs
var rootnode=document.getElementById(treeid)
var currentnode=ulelement
currentnode.style.display="block"
//currentnode.parentNode.style.backgroundImage="url("+ddtreemenu.openfolder+")"
while (currentnode!=rootnode){
if (currentnode.tagName=="UL"){ //if parent node is a UL, expand it too
currentnode.style.display="block"
currentnode.setAttribute("rel", "open") //indicate it's open
//currentnode.parentNode.style.backgroundImage="url("+ddtreemenu.openfolder+")"
}
currentnode=currentnode.parentNode
}
}

ddtreemenu.flatten=function(treeid, action){ //expand or contract all UL elements
var ultags=document.getElementById(treeid).getElementsByTagName("ul")
for (var i=0; i<ultags.length; i++){
ultags[i].style.display=(action=="expand")? "block" : "none"
var relvalue=(action=="expand")? "open" : "closed"
ultags[i].setAttribute("rel", relvalue)
//ultags[i].parentNode.style.backgroundImage=(action=="expand")? "url("+ddtreemenu.openfolder+")" : "url("+ddtreemenu.closefolder+")"
}
}

ddtreemenu.rememberstate=function(treeid, durationdays){ //store index of opened ULs relative to other ULs in Tree into cookie
var ultags=document.getElementById(treeid).getElementsByTagName("ul")
var openuls=new Array()
for (var i=0; i<ultags.length; i++){
if (ultags[i].getAttribute("rel")=="open")
openuls[openuls.length]=i //save the index of the opened UL (relative to the entire list of ULs) as an array element
}
if (openuls.length==0) //if there are no opened ULs to save/persist
openuls[0]="none open" //set array value to string to simply indicate all ULs should persist with state being closed
ddtreemenu.setCookie(treeid, openuls.join(","), durationdays) //populate cookie with value treeid=1,2,3 etc (where 1,2... are the indexes of the opened ULs)
}

////A few utility functions below//////////////////////

ddtreemenu.getCookie=function(Name){ //get cookie value
var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
if (document.cookie.match(re)) //if cookie found
return document.cookie.match(re)[0].split("=")[1] //return its value
return ""
}

ddtreemenu.setCookie=function(name, value, days){ //set cookei value
var expireDate = new Date()
//set "expstring" to either future or past date, to set or delete cookie, respectively
var expstring=expireDate.setDate(expireDate.getDate()+parseInt(days))
document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}

ddtreemenu.searcharray=function(thearray, value){ //searches an array for the entered value. If found, delete value from array
var isfound=false
for (var i=0; i<thearray.length; i++){
if (thearray[i]==value){
isfound=true
thearray.shift() //delete this element from array for efficiency sake
break
}
}
return isfound
}

ddtreemenu.preventpropagate=function(e){ //prevent action from bubbling upwards
if (typeof e!="undefined")
e.stopPropagation()
else
event.cancelBubble=true
}

ddtreemenu.dotask=function(target, functionref, tasktype){ //assign a function to execute to an event handler (ie: onunload)
var tasktype=(window.addEventListener)? tasktype : "on"+tasktype
if (target.addEventListener)
target.addEventListener(tasktype, functionref, false)
else if (target.attachEvent)
target.attachEvent(tasktype, functionref)
}
