;/*FB_PKG_DELIM*/

/**
 * License: https://www.facebook.com/legal/license/V9vdYColc4k/
 */
__d("react-0.0.0",["React"],(function(a,b,c,d,e,f){"use strict";function a(a){return a&&typeof a==="object"&&"default"in a?a["default"]:a}var g=a(b("React"));d={};var h={exports:d};function i(){h.exports=g}var j=!1;function k(){j||(j=!0,i());return h.exports}function c(a){switch(a){case void 0:return k()}}e.exports=c}),null);
__d("react",["react-0.0.0"],(function(a,b,c,d,e,f){e.exports=b("react-0.0.0")()}),null);
/**
 * License: https://www.facebook.com/legal/license/t3hOLs8wlXy/
 */
__d("styleq-0.1.3",[],(function(a,b,c,d,e,f){"use strict";var g={},h={exports:g};function i(){Object.defineProperty(g,"__esModule",{value:!0});g.styleq=void 0;var a=new WeakMap(),b="$$css";function c(c){var d,e,f;c!=null&&(d=c.disableCache===!0,e=c.disableMix===!0,f=c.transform);return function(){var c=[],g="",h=null,i=d?null:a,j=new Array(arguments.length);for(var k=0;k<arguments.length;k++)j[k]=arguments[k];while(j.length>0){var l=j.pop();if(l==null||l===!1)continue;if(Array.isArray(l)){for(var m=0;m<l.length;m++)j.push(l[m]);continue}var n=f!=null?f(l):l;if(n.$$css){var o="";if(i!=null&&i.has(n)){var p=i.get(n);p!=null&&(o=p[0],c.push.apply(c,p[1]),i=p[2])}else{var q=[];for(var r in n){var s=n[r];if(r===b)continue;(typeof s==="string"||s===null)&&(c.includes(r)||(c.push(r),i!=null&&q.push(r),typeof s==="string"&&(o+=o?" "+s:s)))}if(i!=null){var t=new WeakMap();i.set(n,[o,q,t]);i=t}}o&&(g=g?o+" "+g:o)}else if(e)h==null&&(h={}),h=Object.assign({},n,h);else{var u=null;for(var v in n){var w=n[v];w!==void 0&&(c.includes(v)||(w!=null&&(h==null&&(h={}),u==null&&(u={}),u[v]=w),c.push(v),i=null))}u!=null&&(h=Object.assign(u,h))}}var x=[g,h];return x}}var d=c();g.styleq=d;d.factory=c}var j=!1;function k(){j||(j=!0,i());return h.exports}b={};var l={exports:b};function m(){l.exports=k()}var n=!1;function o(){n||(n=!0,m());return l.exports}function a(a){switch(a){case void 0:return o()}}e.exports=a}),null);
__d("styleq",["styleq-0.1.3"],(function(a,b,c,d,e,f){e.exports=b("styleq-0.1.3")()}),null); }

    .dg-col-sm-1-3 {
        width: 33.33%;
    }

    .dg-col-sm-1-4 {
        width: 25%;
    }

    .dg-col-sm-1-5 {
        width: 20%;
    }

    .dg-col-sm-1-6 {
        width: 16.66%;
    }

    .dg-col-sm-1-7 {
        width: 14.28%;
    }

    .dg-col-sm-1-8 {
        width: 12.5%;
    }

    .dg-col-sm-1-9 {
        width: 11.11%;
    }

    .dg-col-sm-1-10 {
        width: 10%;
    }

    .dg-col-sm-1-11 {
        width: 9.09%;
    }

    .dg-col-sm-1-12 {
        width: 8.33%;
    }

    .dg-col-sm-2-3 {
        width: 66.66%;
    }

    .dg-col-sm-3-4 {
        width: 75%;
    }

    .dg-clear{
        clear: none;
    }

    .dg-md-clear{
        clear: none;
    }

    .dg-sm-clear{
        clear: both;
    }
}

@media only screen and (max-width: 420px) {
    .dg-col-xx-1-1 {
        width: 100%;
    }

    .dg-col-xx-1-2 {
        width: 50%;
    }

    .dg-col-xx-1-3 {
        width: 33.33%;
    }

    .dg-col-xx-1-4 {
        width: 25%;
    }

    .dg-col-xx-1-5 {
        width: 20%;
    }

    .dg-col-xx-1-6 {
        width: 16.66%;
    }

    .dg-col-xx-1-7 {
        width: 14.28%;
    }

    .dg-col-xx-1-8 {
        width: 12.5%;
    }

    .dg-col-xx-1-9 {
        width: 11.11%;
    }

    .dg-col-xx-1-10 {
        width: 10%;
    }

    .dg-col-xx-1-11 {
        width: 9.09%;
    }

    .dg-col-xx-1-12 {
        width: 8.33%;
    }

    .dg-col-xx-2-3 {
        width: 66.66%;
    }

    .dg-col-xx-3-4 {
        width: 75%;
    }

    .dg-clear{
        clear: none;
    }

    .dg-md-clear{
        clear: none;
    }

    .dg-sm-clear{
        clear: none;
    }

    .dg-xx-clear{
        clear: both;
    }
}