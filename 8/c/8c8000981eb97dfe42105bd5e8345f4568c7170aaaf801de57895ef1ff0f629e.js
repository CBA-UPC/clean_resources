/**
* @preserve Copyright 2012 Twitter, Inc.
* @license http://www.apache.org/licenses/LICENSE-2.0.txt
*/
var Hogan={};!function(t){mplate=t.Template.prototype={r:v:r,t:i,render:ri:ep:rp:rs:s:d:function(t,e,i,r){var s,a=t.split("."),o=this.f(a[0],e,i,r),u=this.options.modelGet,c=null;if("."===t&&f(e[e.length-2]))o=e[e.length-1];else for(var l=1;l<a.length;l++)s=n(a[l],o,u),void 0!==s?(c=o,o=s):o="";return r&&!o?!1:(r||"function"!=typeof o||(e.push(c),o=this.mv(o,e,i),e.pop()),o)},f:function(t,e,i,r){for(var s=!1,a=null,o=!1,u=this.options.modelGet,c=e.length-1;c>=0;c--)if(a=e[c],s=n(t,a,u),void 0!==s){o=!0;break}return o?(r||"function"!=typeof s||(s=this.mv(s,e,i)),s):r?!1:""},ls:ct:b:fl:ms:function(t,n,e,i,r,s,a){var o,u=n[n.length-1],c=t.call(u);return"function"==typeof c?i?!0:(o=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(c,u,e,o.substring(r,s),a)):c},mv:sub:;var s=/&/g,a=/</g,o=/>/g,u=/\'/g,c=/\"/g,l=/[&<>\"\']/,f=Array.isArray||("undefined"!=typeof exports?exports:Hogan),function(t){/\"/g,b=/\n/g,d=/\r/g,m=/\\/g,x=/\u2028/,w=/\u2029/;t.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},t.scan=var k={_t:!0,"\n":!0,$:!0,"/":!0};t.stringify=var y=0;t.generate=t.wrapMain=t.template=t.Template,t.makeTemplate=t.makePartials=t.codegen={"#":"^":">":f,"<":$:"\n":_v:_t:"{":h,"&":h},t.walk=t.parse=t.cache={},t.cacheKey=t.compile=("undefined"!=typeof exports?exports:Hogan);