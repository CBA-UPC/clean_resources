let mobileCheck11 = 
let parentDiv21,truvidScript21,doc21, insertBefore21;
truvidScript21 = document.createElement('script');truvidScript21.setAttribute("data-pid","7875");truvidScript21.async = true; truvidScript21.type = 'text/javascript';truvidScript21.src = '//go.trvdp.com/init/10482.js';

if (window.frameElement){
    doc21 = window.frameElement.ownerDocument;
}
else{
    doc21 = document;
}

function f() {  
    parentDiv11 = doc21.getElementsByClassName("chapter-content")[0];
  if (parentDiv11){
    insertBefore=parentDiv11.children[0];
    if(insertBefore){
      clearInterval(interval11); 
      var div = document.createElement("div");
      div.style.margin = "10px auto";div.appendChild(truvidScript21);
      parentDiv11.insertBefore(div,insertBefore);        
      return false; 
          }
    }  
    }
let interval11 = setInterval(f,1);