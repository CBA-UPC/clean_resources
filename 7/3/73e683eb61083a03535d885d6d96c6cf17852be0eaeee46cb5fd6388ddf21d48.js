var __INIT_ONSITE_RECS=function(){var e="Undefined",r=null,t=null,n={READ_ONLY:"readonly",READ_WRITE:"readwrite"},a={eventArray:["executeRule"],singleTableDataLimit:100,resultLimit:10},i={log:errorSend:function(){this.log(i.failure.message),_c2pResponse.error=i.failure.message},failure:{error:!1,message:""},response:function(e){try{i.log("result =>",e),this.failure.error&&this.errorSend(),e.attribution?_c2pResponse.attribution=e.result:e.error?e.error&&(_c2pResponse.data=e||{}):_c2pResponse.data=e||{}}catch(r){}}},c={executeFunctionByName:function(e,r){try{for(var t=e.split("."),n=t.pop(),a=0;a<t.length;a++)r=r[t[a]];return r[n].apply(r)}catch(i){return bluecoreSite_debug.d("executeFunctionByName "+i,bluecoreSite_logLevel.error),[]}},convertToObject:function(e){try{if("Object"===this.checkVariableType(e))return e;if("Array"!==this.checkVariableType(e))return null;var r={};for(var t in e)"Function"!==this.checkVariableType(e[t])&&void 0!==e[t]&&(r[t]=e[t]);return r}catch(n){i.log("convertToObject "+n)}},getObjectValues:function(e){try{var r=[];if("Object"!==this.checkVariableType(e))return[];for(var t in e)r.push(e[t]);return r}catch(n){i.log("convertToObject "+n)}},validateString:function(e){try{if(null===e||""===e||void 0===e)return!1;return!0}catch(r){return!1}},checkVariableType:function(e){try{return Object.prototype.toString.call(e).split(" ")[1].slice(0,-1)}catch(r){return!1}},inheritPredefinedFunction:function(e){try{c.validateKey=e.validateKey,c.trimStr=e.trimStr,c.isJsonString=e.isJsonString,c.includes=e.includes,c.isEmptyObject=e.isEmptyObject,c.mergeObject=e.mergeObject}catch(r){}},cloneObject:function(e){try{if("Object"!==this.checkVariableType(e))return e;var r=e.constructor();for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r}catch(n){return e}},getPriorityAttributes:function(e){try{return e.slice(1,e.length)}catch(r){}}},u={lastDataBycount:function(e,r){return c.validateString(e)?"Number"!==c.checkVariableType(r)?(i.log("lastDataByCount count is not Number Type"),!1):new Promise(function(a,i){try{var c=t.transaction([e],n.READ_ONLY).objectStore(e),u=[];c.openCursor(null,"prev").onsuccess=function(e){try{var t=e.target.result;t&&r>0?(u.push(t.value),r--,t.continue()):a(u)}catch(n){}}}catch(o){i(null)}}):(i.log("lastDataByCount table is not String Type"),!1)},lastDataBydays:function(e,r,a){if(!c.validateString(e))return i.log("lastDataByDays table is not String Type"),!1;if("Number"!==c.checkVariableType(r))return i.log("lastDataByDays days is not Number Type"),!1;if("Number"!==c.checkVariableType(a))return i.log("lastDataByDays maxLimit is not Number Type"),!1;var u=a||100;return new Promise(function(a,i){try{var c=t.transaction([e],n.READ_ONLY).objectStore(e),o=new Date,l=o.setDate(o.getDate()-r),y=c.index("timestamp"),s=IDBKeyRange.lowerBound(l),p=[];y.openCursor(s,"prev").onsuccess=function(e){try{var r=e.target.result;r&&u>0?(u--,p.push(r.value),r.continue()):a(p)}catch(t){}}}catch(b){i(null)}})}},o={extractByAttributeName:function(r,t){return new Promise(function(n,a){try{"Array"!==c.checkVariableType(r)&&(i.log("extractByAttributeName array is not Array Type"),n(!1)),"Array"!==c.checkVariableType(t)&&(i.log("extractByAttributeName attrArray is not Array Type"),n(!1));var u=0,o=r.map(function(n){return t.map(function(t){var a={};return c.checkVariableType(n[t])!==e?(a[t]=n[t],a):(++u===r.length&&(i.failure.error=!0,i.failure.message=t+" not found in extractByAttributeName"),!1)})});n(o)}catch(l){a(null)}})},getSortedArraySynchronous:function(e){try{if(e=c.getObjectValues(e)[0],"Object"!==c.checkVariableType(e))return i.log("getSortedArraySynchronous object is not Object Type"),!1;var r=[];for(var t in e)r.push([t,e[t]]);return r.sort(,[r.pop()[0]]}catch(n){return!1}},uniqueCountByMatchingAttributeSynchronous:function(r,t){try{if("Array"!==c.checkVariableType(r))return i.log("uniqueCountByMatchingAttributeSynchronous array is not Array Type"),!1;if(!c.validateString(t))return i.log("uniqueCountByMatchingAttributeSynchronous returnMappedKey is not String Type"),!1;var n=(r=r.filter().reduce(function(r,t){return r[t]=c.checkVariableType(r[t])===e?1:r[t]+=1,r},{}),a={};if(c.checkVariableType(t)!==e)return a[t]=n,a;return n}catch(u){return!1}},assignKeyInArray:function(r,t){var n={};return new Promise(function(a,u){try{"Array"!==c.checkVariableType(r)&&(i.log("assignKeyInArray array is not Array Type"),a(!1)),"Array"!==c.checkVariableType(t)&&(i.log("assignKeyInArray array is not Array Type"),a(!1)),r.forEach(function(r){for(var a in t){var i=r[a][t[a]];c.checkVariableType(n[t[a]])===e?c.checkVariableType(i)!==e&&(n[t[a]]=[],n[t[a]].push(i)):c.checkVariableType(i)!==e&&n[t[a]].push(i)}}),a(n)}catch(o){i.log("assignKeyInArray "+o)}})}},l={execute:function(e){i.failure={error:!1,message:""};var r=e.recipeName;switch(r){case"simpleRecipe":try{var t=e.query,n=t.table,l=t.type,y=t.value,s=e.returnAttribute,p=a.singleTableDataLimit,b=e.supportedObject;return u["lastDataBy"+l](n,y,p).then(function(e){o.extractByAttributeName(e,s).then(function(e){o.assignKeyInArray(e,s).then(function(e){e?i.response({result:e,error:!1,attribution:!1,supportedObject:b}):i.errorSend()})})}),!1}catch(f){return!1}case"mixModeRecipe":try{var t=e.query,n=t.table,l=t.type,y=t.value,s=e.returnAttribute,b=e.supportedObject,h=e.type,g=c.getPriorityAttributes(s),p=a.singleTableDataLimit,d=e.excludeKey||null,v=!0;return null!==d&&(c.includes(d,s)?v=!1:s.push(d)),u["lastDataBy"+l](n,y,p).then(function(e){e?"groupMode"===h||"mixCategories"===h?o.extractByAttributeName(e,s).then(function(e){e?o.assignKeyInArray(e,s).then(function(e){if(e){if("groupMode"===h){var r={},t={};for(var n in g){var a=e[g[n]];new Promise(function(e,t){r[g[n]]=o.getSortedArraySynchronous(o.uniqueCountByMatchingAttributeSynchronous(a,g[n])),!1===r[g[n]]&&delete r[g[n]]}),delete e[g[n]]}t.filter=r;var u=c.mergeObject(t,e),l={};-1!==bcQuery.inArray(d,Object.keys(e))&&(l[d]=e[d][0],u=c.mergeObject(u,{excludeKey:c.cloneObject(l)}),v&&delete u[d])}else if("mixCategories"===h){var t={},r={};for(var n in g.map(function(t){r[t]=e[t]}),t.filter=r,g)delete e[g[n]];var u=c.mergeObject(t,e),y={};-1!==bcQuery.inArray(d,Object.keys(e))&&(y[d]=e[d][0],u=c.mergeObject(u,{excludeKey:c.cloneObject(y)}),v&&delete u[d])}}else i.errorSend();i.response({result:u,error:c.isEmptyObject(u),attribution:!1,supportedObject:b})}):i.errorSend()}):(i.failure.error=!0,i.failure.message=h+" method not available at this time",i.errorSend()):i.errorSend()}),!1}catch(m){return!1}case"distinctRecipe":try{var A=triggermail.persist.read_prop("distinct_id"),_={},b=e.supportedObject,O=e.returnAttribute[0];A&&(_[O]=Array(A)),i.response({result:_,error:c.isEmptyObject(_),attribution:!1,supportedObject:b})}catch(T){}case"customFunctionRecipe":try{var _={},b=e.supportedObject,S=c.executeFunctionByName(e.functionName,window),s=e.returnAttribute,g=[],l=e.type,d=e.excludeKey||null,v=null,_={},j={},k={},$={},x=e.query.value;S=S.slice(-1*x),"Array"===c.checkVariableType(S)?"groupMode"===l||"mixCategories"===l||"all"===l?("all"===l&&(s=Object.keys(S[0])),g=c.getPriorityAttributes(s),o.extractByAttributeName(S,s).then(function(e){e?o.assignKeyInArray(e,s).then(function(e){if(e){if("groupMode"===l){for(var r in g){var t=e[g[r]];new Promise(function(e,n){k[g[r]]=o.getSortedArraySynchronous(o.uniqueCountByMatchingAttributeSynchronous(t,g[r])),!1===k[g[r]]&&delete k[g[r]]}),delete e[g[r]]}$.filter=k,_=c.mergeObject($,e),-1!==bcQuery.inArray(d,Object.keys(e))&&(j[d]=e[d][0],_=c.mergeObject(_,{excludeKey:c.cloneObject(j)}),v&&delete _[d])}else if("mixCategories"===l||"all"===l){for(var r in g.map(,$.filter=k,g)delete e[g[r]];_=c.mergeObject($,e),-1!==bcQuery.inArray(d,Object.keys(e))&&(j[d]=e[d][0],_=c.mergeObject(_,{excludeKey:c.cloneObject(j)}),v&&delete _[d])}}else i.errorSend();i.response({result:_,error:c.isEmptyObject(_),attribution:!1,supportedObject:b})}):i.errorSend()})):(i.failure.error=!0,i.failure.message=l+" type not available at this time",i.errorSend()):(i.failure.error=!0,i.failure.message="FDE function returned empty array or undefined at this time",i.errorSend())}catch(B){}}}},y=function(e){try{if(e&&e.length)for(var r=0;r<e.length;r++)this.push(e[r])}catch(t){i.log("worker "+t)}};y.prototype.push=function(e){try{if(e&&"Array"===c.checkVariableType(e)&&e.length){var r=String(e.splice(0,1));-1!==bcQuery.inArray(r,a.eventArray)?p[r].apply(p,e):i.log("error no event Fount _c2pServiceInternal")}}catch(t){i.log("worker prototype "+t)}};var s,p={executeRule:function(e,n,a,u,o){try{var y,s;c.inheritPredefinedFunction(o),e.supportedObject=n||{},(y=a,s=u,new Promise(function(e,n){try{r=y,t=s,e(!0)}catch(a){i.log("error in DB init "+a),n(!0)}})).then(}catch(p){i.log("executeRule "+p)}}};s=window._c2pServiceInternal,window._c2pServiceInternal=new y(s)};