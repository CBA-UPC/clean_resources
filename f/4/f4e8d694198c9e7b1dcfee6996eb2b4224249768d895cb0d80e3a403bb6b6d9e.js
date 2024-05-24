if(!INDOLEADS_LIB||Array.isArray(INDOLEADS_LIB))var INDOLEADS_LIB=function(args){var _args={},obj={init:function(e){_args=e;var t=this;this.getAjax(_args.network+"/api/pixel-content/"+_args.offer_id,function(e){try{JSON.parse(e).data.forEach(function(e){t.createFromResponse(e.content)})}catch(e){}})},push:function(e){return this.init(e)},getAjax:function(e,t,n){var r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return r.open("GET",e),r.onreadystatechange=function(){3<r.readyState&&200==r.status&&t(r.responseText),3<r.readyState&&500==r.status&&n(r.responseText)},r.setRequestHeader("X-Request-With","XMLHttpRequest"),r.send(),r},createFromResponse:function(response){var doc=(new DOMParser).parseFromString(response,"text/html"),elements=[],el=doc.body.firstChild;for(null===el&&(el=doc.head.firstChild),elements.push(el);el.nextSibling;)elements.push(el.nextSibling),el=el.nextSibling,eval(el.text);for(i=0;i<elements.length;i++)if("SCRIPT"==elements[i].tagName){var newScript=document.createElement("script"),inlineScript=document.createTextNode(elements[i].innerHTML);newScript.appendChild(inlineScript),document.body.appendChild(newScript)}else document.body.appendChild(elements[i])}};return Array.isArray(args)&&0<args.length&&args.forEach(function(e){obj.init(e)}),obj}(INDOLEADS_LIB);ormat('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJabMl1RMEfq4.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJabMl2xME.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7Ml1BMEfq4.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7Ml1RMEfq4.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7Ml2xME.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJBbMl1BMEfq4.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJBbMl1RMEfq4.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJBbMl2xME.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ6bQl1BMEfq4.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ6bQl1RMEfq4.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ6bQl2xME.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ0LQl1BMEfq4.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ0LQl1RMEfq4.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ0LQl2xME.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJt7Ql1BMEfq4.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJt7Ql1RMEfq4.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/dosis/v32/HhyJU5sn9vOmLxNkIwRSjTVNWLEJt7Ql2xME.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
