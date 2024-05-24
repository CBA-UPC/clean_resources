function getfilterlistindexbyid(id,filterlist)
{
 for(var i=1;i<filterlist.length;i+=2)
 {
  if(filterlist[i] == id){return i;}
 }
 return -1;
}
function getidlist(listViewWindow, fieldName, formName)
{
 listViewWindow = typeof listViewWindow !== 'undefined' ? listViewWindow : window;
 fieldName = typeof fieldName !== 'undefined' ? fieldName : 'intID';
 formName = typeof formName !== 'undefined' ? formName : 'mm';
 ids = '';
 f = listViewWindow.document[formName];
 var kampagnenx = listViewWindow.kampagnen;
 var hiddenkampagnenx = listViewWindow.hiddenkampagnen;
 //console.log(hiddenkampagnenx);
 var j=0;
 for(var i=0;i<f.elements.length;i++)
 {
  if((f.elements[i].name == 'cb[]' || f.elements[i].name.substr(0,4) == 'cbr_' ) && f.elements[i].checked)
  {
   var i2 = j; //getfilterlistindexbyid(f.elements[i].value,kampagnenx);
   //console.log(f.elements[i].name+" "+f.elements[i].value+' = '+(i2));
   if(i2==-1){continue;}
   if(typeof(hiddenkampagnenx) != "object" || typeof(hiddenkampagnenx[i2]) != "boolean" || !hiddenkampagnenx[i2])
   {
    if(fieldName == ',' || fieldName == ';')
    {
     ids += fieldName+f.elements[i].value;
    }
    else
    {
     ids += '&' + fieldName + '[]=' + f.elements[i].value;
    }
   }
  }
  if(f.elements[i].name == 'cb[]' || f.elements[i].name.substr(0,4) == 'cbr_' || f.elements[i].name == 'tbgrp'){j+=2;}
 }
 return ids;
}


 function ajaxQuery(file,param,method,async,callback)
 {
  this.xml = null;

  this.sendAjaxQuery2 = function (file,param,method,async,callback)
  {
   if(this.xml != null){ try{this.xml.abort();}catch(e){} this.xml = null; }

   if(window.XMLHttpRequest){ this.xml = new XMLHttpRequest(); }
   else if(window.ActiveXObject)
   {
    try{ this.xml = new ActiveXObject('Msxml2.XMLHTTP'); }catch(e1){ try{ this.xml = new ActiveXObject('Microsoft.XMLHTTP'); }catch(e2){}}
   }

   if(this.xml != null)
   {
    this.xml.my = this;
    this.xml.callback = callback;
    this.xml.asmurl = file;

    this.xml.open(method,file,async);
    if(method == 'POST'){this.xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");}
    if(async){ this.xml.onreadystatechange = this.cbAjaxQuery; }
    this.xml.send(param);
    if(!async){ this.cbAjaxQuery(); }
   }
  }

  this.cbAjaxQuery = function ()
  {
   if(this.my){ var xml = this;}
   else if(this.xml){var xml = this.xml; }
   else{return;}

   if(xml.readyState == 4 && xml.status == 200)
   {
    var cb = xml.callback;
    if(cb!=''){cb(xml);}
   }
  }
  this.sendAjaxQuery2(file,param,method,async,callback);
 }

