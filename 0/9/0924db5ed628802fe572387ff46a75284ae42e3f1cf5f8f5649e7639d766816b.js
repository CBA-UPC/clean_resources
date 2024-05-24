!function(){var e={125:function(e,t){const r={},n=function(e){this._periodic=Boolean(e),this._stats={}};n.getInstance=function(e){return r[e]||(r[e]=new n(e)),r[e]},n.prototype.info=function(){this._logNow(arguments[0])&&console.info.apply(console,arguments)},n.prototype.log=function(){console.debug.apply(console,arguments)},n.prototype.warn=function(){this._logNow(arguments[0])&&console.warn.apply(console,arguments)},n.prototype.error=function(){this._logNow(arguments[0])&&console.error.apply(console,arguments)},n.prototype._logNow=function(e){if(!this._periodic)return!0;const t=this._stats[e];return(!t||Date.now()-t>n.LOG_TIME)&&(this._stats[e]=Date.now(),!0)},n.LOG_TIME=6e4,t.p=n},972:function(e,t,r){var n=r(764).lW;const i=r(214),o=r(269),{pack:s,unpack:a}=r(376),l={decode:function(e){const t=e.split("/");if(t.length<2)throw new Error("Incorrect url!");const r=t[2].replace("-","+").replace("_","/");return a(r)},encode:function(e,t){0===Object.keys(e[2]).length&&e.pop();const r=s(e);let a;a=n.isBuffer(r)?r.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""):void 0!==n.from?n.from(r).toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""):"undefined"!=typeof btoa?btoa(String.fromCharCode.apply(null,r)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""):r;return i(`${a}/${t}`).toString(o).slice(0,3).replace(/\+/g,"-").replace(/\//g,"_")+a},crypt:function(e,t,r){r=r||l.Transformation.ORIGINAL;const o=i(t+r+e).toString();return n.from(`${o.substr(0,2)};${r}`).toString("base64").replace(/=/g,"_")},decrypt:function(e,t,r){return n.from(r.replace(/_/g,"="),"base64").toString().substr(3)},encodeTransformations:function(e){let t;if(0===e.length)t=l.Transformation.ORIGINAL;else{t="";for(let r=0,n=e.length;r<n;r++){t+=e[r].transformation;for(let n=0,i=e[r].params.length;n<i;n++)t+=`,${e[r].params[n].toString(16)}`;t+=";"}t=t.slice(0,-1)}return t},decodeTransformations:function(e){let t=[];for(let r=0,n=(e=e.split(";")).length;r<n;r++){const n=e[r].split(",");t.push({transformation:n.shift(),params:n})}return 1===t.length&&t[0].transformation===l.Transformation.ORIGINAL&&(t=[]),t},Transformation:{}};l.Transformation.ORIGINAL="00",l.Transformation.ROTATE="01",l.Transformation.BLUR="02",l.Transformation.RESIZE="03",l.Transformation.CROP="04",l.Transformation.GRAYSCALE="05",l.Transformation.BOUNDING_BOX="06",l.Transformation.SAVEAS="07",l.Transformation.QUALITY_PRESET="08",l.Transformation.IMAGEFORMAT="09",l.Transformation.SETBACKGROUND="0a",l.Transformation.PRESERVEANIMATION="0b",l.Transformation.COMBINE="0c",l.Transformation.DISABLEANIMATION="0d",t.F=l},751:function(e,t,r){var n=r(764).lW;const{unpack:i}=r(395),o=r(470).join,{md5:s,toBase64Uri:a}=r(728),{OcdnConfiguration:l}=r(243),f=r(113),u=l.TRANSFORMS_SUFFIX,h=function(e){if(!e)throw new Error("Ocdn configuration not specified");this.ocdnConfig=e};h.prototype.decode=function(e,t){try{t||this._checkSignature(e);const r=this._toIntermediateFormat(e);return this._toInternalFormat(r)}catch(e){return{error:e}}},h.prototype.partiallyDecode=function(e,t){t||this._checkSignature(e);return this._toIntermediateFormat(e).rawData},h.prototype._checkSignature=function(e){const t=e.split("/",4);if(t.length<4)return;const r=this.ocdnConfig.buckets[t[1]],n=t[3].slice(3),i=t[3].slice(0,3);if(!r)throw new Error("Unknown bucket");if(r.type===l.BUCKET_TYPE.BASIC)return;if(!r.transformKey)throw new Error(`Missing transform key for bucket ${r.name}`);const o=`${n}/${r.transformKey}`;if(a(s(o,"base64").slice(0,3))!==i)throw new Error("Invalid signature")},h.prototype._toIntermediateFormat=function(e){const t=e.split("/");if(t.length<2)throw new Error("Invalid path");const r=t[1];if(!this.ocdnConfig.getBucket(r))throw new Error("Unknown bucket");let s=null,a=null,l=e,f=null;if(r.endsWith(u)){if(t.length<4)throw new Error("Invalid path");const e=t[3].slice(3);f=t[2],s=i(n.from(e.replace(/-/g,"+").replace(/_/g,"/"),"base64")),l=`/${o(r,e)}`,a=s[0].startsWith("http")?s[0]:o("/",r.slice(0,-u.length),s[0])}return{uri:l,parent:a,bucketName:r,rawData:s,uriVersion:f}},h.prototype._toInternalFormat=function(e){const t=h.decodeRawData(e.rawData,f);return t.uri=e.uri,t.parent=e.parent,t.bucketName=e.bucketName,t.rawData=e.rawData,e.uriVersion&&(t.uriVersion=e.uriVersion),t},h.getBucketName=function(e){return e.replace(/^\//,"").split("/",1).pop()},h.decodeRawData=function(e,t){if(!e)return{parent:null,transforms:[],params:{}};const r=e[0],n=e[1]||[],i=e[2]||{},o=[];n.forEach((e=>{const r=t.transforms[e[0]],n=e.slice(1),i={};if(!r)throw new Error("Unknown transform specified");if(n.length>r.args.length)throw new Error("Too many arguments");r.args.forEach(((e,t)=>{i[e.name]=h.decodeValue(n[t],e)})),o.push({name:r.name,args:i})}));const s={},a=Object.keys(t.params);return Object.keys(i).forEach((e=>{if(!a[e])throw new Error("Unknown param specified")})),a.forEach((e=>{const r=t.params[e];s[r.name]=h.decodeValue(i[e],r)})),{parent:r,params:s,transforms:o}},h.decodeValue=function(e,t){if(void 0===e){if(void 0===t.default)throw new Error("Required value not specified");e=t.default}if("integer"===t.type){if("number"!=typeof e)throw new Error("Invalid type of value - should be number");if(t.minValue&&e<t.minValue)throw new Error(`Value cannot be less than ${t.minValue}`);if(t.maxValue&&e>t.maxValue)throw new Error(`Value cannot be greater than ${t.maxValue}`);return e}if("boolean"===t.type){if("boolean"!=typeof e)throw new Error("Invalid type of value - should be boolean");return e}if("string"===t.type){if("string"!=typeof e)throw new Error("Invalid type of value - should be string");return e}if("enum"===t.type){if(void 0===(e=t.values[e]))throw new Error("Unknown enum value");return e}},h.TRANSFORMS_CONFIG=f,h.DONT_CHECK_SIGNATURE=!0,t.Decoder=h},646:function(e,t,r){var n=r(764).lW;const{md5:i}=r(728),{Decoder:o}=r(751),{OcdnConfiguration:s}=r(243),a=function(e){const t=parseInt(e,16);return isNaN(t)?void 0:t},l=function(e){return 1===a(e)},f=function(e){o.call(this,e)};(f.prototype=Object.create(o.prototype))._checkSignature=function(e){const t=e.split("/").slice(1);if(t.length<4)return;const r=t[0],o=t[1].split("@",1).pop(),s=this.ocdnConfig.getBucket(o),a=t[2].slice(0,4),l=t[2].slice(4),f=t.length>4?t[3]:t[3].split(".",1).pop();if("images"!==r&&"files"!==r&&("static"!==r||"MDA_"!==l))return;if(!s)throw new Error("Unknown bucket");if(!s.transformKey)throw new Error(`Missing transform key for bucket ${s.name}`);const u=f+n.from(l.replace(/_/g,""),"base64").toString()+s.transformKey;if(n.from(`${i(u).slice(0,2)};`).toString("base64")!==a)throw new Error("Invalid signature")},f.prototype._toIntermediateFormat=function(e){const t=e.split("/").slice(1);if(t.length<3)throw new Error("Invalid path");if(t[1].split("@")>2)throw new Error("Unknown bucket");const r=t[0];let n,i;if(t[1].indexOf("@")>-1&&("images"===r||"files"===r)){if(n=t[1].split("@",1).pop(),i=t[1].split("@",2).pop(),!this.ocdnConfig.getBucket(n)||!this.ocdnConfig.getBucket(i))throw new Error("Unknown bucket")}else if(n=t[1],!this.ocdnConfig.getBucket(n))throw new Error("Unknown bucket");switch(r){case"images":return this._decodeImagesPath(t);case"files":return this._decodeFilesPath(t);case"static":return this._decodeStaticPath(t);default:throw new Error("Unknown plugin")}},f.prototype._decodeImagesPath=function(e){if(4!==e.length)throw new Error("Invalid path");const t=e[1].split("@",2).pop();let r=e[1].split("@",1).pop();const i=e[2].slice(4),o=e[3],f=n.from(i.replace(/_/g,""),"base64").toString().split(";"),u=[],h={};f.forEach((e=>{const t=e.split(","),n=t.shift();if("01"===n)return u.push([0,a(t[0])]);if("02"===n)return void 0!==t[0]?u.push([1,a(t[0])]):u.push([1]);if("03"===n)return void 0!==t[2]&&void 0!==t[3]?u.push([2,a(t[0]),a(t[1]),l(t[2]),l(t[3])]):void 0!==t[2]?u.push([2,a(t[0]),a(t[1]),l(t[2])]):u.push([2,a(t[0]),a(t[1])]);if("04"===n)return u.push([3,a(t[0]),a(t[1]),a(t[2]),a(t[3])]);if("05"===n)return u.push([4]);if("06"===n)return u.push([5,a(t[0]),a(t[1])]);if("08"!==n)if("09"!==n){if("0a"===n)return u.push([6,a(t[0]),a(t[1]),a(t[2]),a(t[3])]);if("0c"===n){const e=["jpg","png","bmp","tiff"][a(t[1])],n=`/${r}/MDA_/${t[0]}.${e}`,i=l(t[2])?0:a(t[3])+1,o=a(t[4])||0,s=l(t[5]);return u.push([7,n,i,s,o])}"0d"!==n||(h[2]=!0)}else h[0]=1+a(t[0]);else h[1]=a(t[0])}));const c=`/${r}/${i}/${o}`;let p=null,d=null;return"MDA_"===i&&t===r||(p=`/${t}/MDA_/${o}`,r+=s.TRANSFORMS_SUFFIX,"MDA_"!==i&&(d=[`MDA_/${o}`,u,h])),{uri:c,bucketName:r,parent:p,rawData:d}},f.prototype._decodeFilesPath=function(e){let t=e[1].split("@",1).pop();const r=e[1].split("@",2).pop(),i=e[2].slice(4),o=e[3],a=`/${t}/${i}/${o}`;let l=null;if("MDA_"!==i){n.from(i.replace(/_/g,""),"base64").toString().split(";").forEach((e=>{if(0===e.indexOf("07,")){const t=n.from(e.slice(3).match(/../g).map((e=>parseInt(e,16)))).toString(),i=`response-content-disposition=${encodeURIComponent(`attachment; filename="${t}"`)}`;l=`http://ocdn.eu/${r}/MDA_/${o}?${i}`}})),t+=s.TRANSFORMS_SUFFIX}return{uri:a,bucketName:t,parent:l,rawData:null}},o.prototype._decodeStaticPath=function(e){const t=e[2],r=n.from(t.replace(/_/,""),"base64").toString(),i=e[1];let o;return e.length>=5&&r.match(/^[0-9a-f]{2};00$/)?(o=e.slice(3).join("/"),{uri:`/${i}/MDA_/${o}`,bucketName:i,parent:null,rawData:null}):(o=e.slice(2).join("/"),{uri:`/${i}/${o}`,bucketName:i,parent:null,rawData:null})},f.DONT_CHECK_SIGNATURE=o.DONT_CHECK_SIGNATURE,t.C=f},998:function(e,t,r){var n=r(764).lW;const{Decoder:i}=r(751),{OcdnConfiguration:o}=r(243),s=r(762),a=r(86),l=function(e){i.call(this,e)};(l.prototype=Object.create(i.prototype))._checkSignature=function(){},l.prototype._toIntermediateFormat=function(e){const t=this._parsePath(e),r=`${t.mhash}.${t.ext}`,n=t.bucket+o.TRANSFORMS_SUFFIX,i=[],s=[];return t.crop&&(i.push([3,t.crop.x,t.crop.y,t.crop.width,t.crop.height]),s.push([4,t.crop.x,t.crop.y,t.crop.width,t.crop.height])),t.bmpBox.mode?(t.bmpBox.mode.mediaFill?i.push([5,t.bmpBox.width,t.bmpBox.height]):(t.bmpBox.mode.enlarge&&(i.push([2,t.bmpBox.width,0,!0,!1]),i.push([2,0,t.bmpBox.height,!0,!1])),t.bmpBox.mode.shrink&&(i.push([2,t.bmpBox.width,0,!1,!0]),i.push([2,0,t.bmpBox.height,!1,!0]))),s.push([3,t.bmpBox.width,t.bmpBox.height,"",""])):s.push([0]),t.rotate&&(i.push([0,t.rotate]),s.push([1,t.rotate])),t.blur&&("number"==typeof t.blur?(i.push([1,t.blur]),s.push([2,t.blur])):(i.push([1]),s.push([2,""]))),t.grayscale&&(i.push([4]),s.push([5])),0===i.length?{uri:`/${t.bucket}/MDA_/${r}`,bucketName:t.bucket,parent:null,rawData:null}:{uri:this._encodeLegacyUri(t.bucket,s,r),bucketName:n,parent:`/_m/${t.mhash},0,${t.appId}.${t.ext}`,rawData:[`MDA_/${r}`,i]}},l.prototype._parsePath=function(e){const t=decodeURIComponent(e).match(l.M_URL_REGEX);if(!t)throw new Error("Invalid path");const r={};if(r.mhash=t[1],r.bmpBox=this._parseBmpBox(t[2]),r.appId=t[3],r.bucket=this._parseBucket(t[3]),r.crop=this._parseCrop(t[4],t[5],t[6],t[7]),r.rotate=this._parseRotate(t[8]),r.grayscale=this._parseGrayscale(t[8]),r.blur=this._parseBlur(t[8],t[9]),r.ext=t[10],!r.bmpBox)throw new Error("Unknown BmpBox");if(!r.bucket)throw new Error("Unknown bucket");return r},l.prototype._parseBmpBox=function(e){return s[e]||null},l.prototype._parseBucket=function(e){return a[e]||null},l.prototype._parseCrop=function(e,t,r,n){return void 0===e||void 0===t||void 0===r||void 0===n?null:{x:parseInt(e),y:parseInt(t),width:parseInt(r),height:parseInt(n)}},l.prototype._parseRotate=function(e){return e&&3&e||0},l.prototype._parseGrayscale=function(e){return Boolean(e&&4&e)},l.prototype._parseBlur=function(e,t){return!!(8&e)&&(!t||parseInt(t))},l.prototype._encodeLegacyUri=function(e,t,r){t.length>2&&4===t[0][0]&&2!==t[2][0]&&(t=[t[0]].concat(t.slice(2)).concat([t[1]]));const i=t.map((e=>e.map(((e,t)=>0===t?`0${e.toString(16)}`:""!==e?e.toString(16):"")).join(",")));return`/${e}/${n.from(i.join(";")).toString("base64").replace(/=/g,"_")}/${r}`},l.M_URL_REGEX=new RegExp("^/_m/([0-9a-f]{32}),([0-9]{1,3}),([0-9]{1,3})(?=[.,])(?=[.]|,[0-9]|(?:1[0-5])(?:-[0-9]+)?[.]|,[0-9]+-[0-9]+-[0-9]+-[0-9]+(?:-[0-9]|(?:1[0-5])(?:,[0-9]+)?)?[.])(?:,([0-9]+)-([0-9]+)-([0-9]+)-([0-9]+))?(?:[,-]([0-9]|(?:1[0-5]))(?:[,-]([0-9]+))?)?[.]([a-z0-9]+)$"),t.Y=l},243:function(e,t,r){const n=r(682),{deepCopy:i}=r(728),o=function(e){Object.defineProperty(this,"_rawConfig",{value:i(e)}),this.limits=this._rawConfig.limits||{},this.registrationKeys=this._rawConfig.registrationKeys||{},this.buckets=this._mapBuckets(this._rawConfig.buckets||{}),n(this)};o.prototype.serialize=function(){return i(this._rawConfig)},o.prototype.getBucket=function(e){return this.buckets[e]||null},o.prototype.getStorageConfig=function(e){return this.buckets[e]&&this.buckets[e].storage||null},o.prototype.getBucketsForAccessKey=function(e){return Object.keys(this.buckets).filter((t=>this.buckets[t].keys&&Object.prototype.hasOwnProperty.call(this.buckets[t].keys,e)))},o.prototype.getSecrets=function(e,t){if(t)return this.buckets[t]&&this.buckets[t].keys[e]?[this.buckets[t].keys[e]]:[];const r=[];return Object.keys(this.buckets).forEach((t=>{this.buckets[t].keys&&Object.prototype.hasOwnProperty.call(this.buckets[t].keys,e)&&r.push(this.buckets[t].keys[e])})),r},o.prototype._mapBuckets=function(e){const t=i(e),r={};return Object.keys(t).forEach((e=>{const n=t[e],i=n.basic||{},s=n.transforms||{};i.name=e,i.type=o.BUCKET_TYPE.BASIC,s.name=e+o.TRANSFORMS_SUFFIX,s.type=o.BUCKET_TYPE.TRANSFORMS,Object.keys(n).forEach((e=>{e!==o.BUCKET_TYPE.BASIC&&e!==o.BUCKET_TYPE.TRANSFORMS&&(Object.prototype.hasOwnProperty.call(i,e)||(i[e]=n[e]),Object.prototype.hasOwnProperty.call(s,e)||(s[e]=n[e]))})),r[e]=i,r[e+o.TRANSFORMS_SUFFIX]=s})),r},(o.STATUS={}).PENDING="pending",o.STATUS.UNCONFIGURED="unconfigured",o.STATUS.OK="ok",o.STATUS.REMOVED="removed",(o.ACL={}).PRIVATE="private",o.ACL.PUBLIC_READ="public-read",o.ACL.PUBLIC_READ_WRITE="public-read-write",o.ACL.AUTHENTICATED_READ="authenticated-read",(o.PATH={}).ROOT="/ocdn",o.PATH.BUCKETS=`${o.PATH.ROOT}/buckets`,o.PATH.REGISTRATION_KEYS=`${o.PATH.ROOT}/registrationkeys`,o.PATH.BUCKET_PREFIX=`${o.PATH.ROOT}/buckets/`,(o.BUCKET_TYPE={}).BASIC="basic",o.BUCKET_TYPE.TRANSFORMS="transforms",o.TRANSFORMS_SUFFIX="-transforms",t.OcdnConfiguration=o},728:function(e,t,r){var n=r(764).lW;const i=r(214),o={base64:r(269),hex:r(465)};t.md5=function(e,t){return i(e).toString(o[t||"hex"])},t.deepCopy=function(e){return JSON.parse(JSON.stringify(e))},t.toBase64Uri=function(e){return(n.isBuffer(e)?e.toString("base64"):e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}},535:function(e,t,r){var n=r(764).lW;const i=r(557).Y,o=r(470),s=r(214),a=r(751).Decoder,l=r(646).C,f=r(998).Y,u=r(243).OcdnConfiguration,h=r(972).F,c=r(125).p,p=["images","files","static"],d=/http[s]?:\/\/ocdn.eu/,g=/ocdn.eu(?::\d+)?$/,m=function(e,t){const r={buckets:{}};return r.buckets[e]={},r.buckets[e].transformKey=t,new u(r)},y=function(e,t,r){i.call(this),this._noKey=!1,this._config={sslEnabled:!0,periodicLog:!1,customDomain:null,forceParseTransform:!1},1===arguments.length&&(t=e,e=null,this._noKey=!0),this.protocol="https",this.port=443,this.domain="ocdn.eu",this.plugin=null,this._isRelative=!1,this._url=t,this._parent=t,this._parentBucket=null,this._transforms=[],this._params={},this._initialized=!1,this._query={},e&&this.setKey(e),this.path=this._parent,this._logger=c.getInstance(this._config.periodicLog),t&&!r&&this.init(t)};(y.prototype=Object.create(i.prototype)).setConfig=function(e){const t=Object.keys(e);for(let r=0;r<t.length;++r)this._config[t[r]]=e[t[r]];return this._logger=c.getInstance(this._config.periodicLog),this._applyConfig(),this},y.prototype.init=function(e){this._initialized||(this._initialized=!0,e&&"string"==typeof e?this.parse(e):this.plugin="")},y.prototype.setKey=function(e){this._key=e,this._url&&this.init(this._url),this._noKey=!1},y.prototype.getKey=function(){return this._key||"J&D87ftasd67SFD%&^asdf"},y.prototype.relative=function(){return this._isRelative=!this._isRelative,this},y.prototype.withoutProtocol=function(){return this.protocol="",this},y.prototype.forceHttpsProtocol=function(){return this.protocol="https",this},y.prototype._parseLegacy=function(e){const t=`/${e.slice(3,e.length).join("/")}`;if(this.setBucket(e[4]),7===e.length){const t=e[6].split(".");this.name=t[0],this.ext=t[1]}else if(this._parent=e.slice(5,e.length).join("/"),e.length<7)return;if("files"===e[3]){const t=h.decodeTransformations(h.decrypt(this.getKey(),this.getBucket(),e[5]));if(t.length>0&&t[0].params.length>0){this._parent=`MDA_/${e[6]}`;const r=n.from(t[0].params[0]).toString();return this.saveAs(r)}}const r=new l(m(this.getBucket(),this.getKey())).partiallyDecode(t,this._noKey);null!==r&&(this._parent=r[0]||this._parent,this._transforms=r[1]||[],this._params=r[2]||{})},y.prototype.getRawData=function(){return this._legacyTranslate(),[this._parent,this._transforms,this._params]},y.prototype._getParentUrl=function(){this._legacyTranslate();const e=this._getUrlWithoutPath();return this._parent?0===this._parent.indexOf("http")?this._parent:e+o.join("/",this._parentBucket,this._parent):this._url},y.prototype.getParent=function(){const e=this._getParentUrl(),t=new y(this.getKey(),e),r=JSON.parse(JSON.stringify(this._config));return r.sslEnabled=0===e.indexOf("https"),t.setConfig(r),t},y.prototype.getTransforms=function(){return this._transforms},y.prototype.getParams=function(){return this._params},y.prototype._setResponseHeader=function(e,t){this._query[`response-${e}`]=encodeURIComponent(t)},y.prototype._legacyTranslate=function(){this._parent||(this._parent=`MDA_/${this.name}.${this.ext}`)},y.prototype.parse=function(e){"/"===e.charAt(0)&&(e=`${this.protocol}://${this.domain}${e}`);let t=e.split("/");this._config.forceParseTransform&&this.bucket&&(t=(e=e.replace(t[2],`ocdn.eu/${this.bucket}-transforms`)).split("/")),this._url=e;const r=t.length;if(this.setUrl(e),this.setPlugin(null),r>=4){let r;if(t[2].indexOf("ocdn.eu")>-1&&(this._parent=t.slice(4,t.length).join("/")),this.protocol=t[0].replace(":",""),this.setBucket(t[3]),g.test(t[2])&&p.indexOf(t[3])>-1)this._parent=t.slice(5,t.length).join("/"),this._parent=this._parent.replace(/....MDA_/,"MDA_"),this.setPlugin(t[3]),this._parseLegacy(t);else if(t[3].indexOf(y.TRANSFORMS_SUFFIX)>-1){this.setBucket(t[3].replace(y.TRANSFORMS_SUFFIX,"")),r=new a(m(this.getBucket(),this.getKey()));const n=r.partiallyDecode(`/${t.slice(3,t.length).join("/")}`,this._noKey);this._parent=n[0]||e,this._transforms=n[1]||[],this._params=n[2]||{},7===t.length&&(this._fileName=t[6])}else if("_m"===t[3]){this.setUrl("http://ocdn.eu"),r=new f(m(this.getBucket(),this.getKey()));const e=r.decode(`/${t.slice(3,t.length).join("/")}`,this._noKey);if(!e.rawData)return this.parse(e.uri);this.setBucket(e.bucketName.replace(y.TRANSFORMS_SUFFIX,"")),this._parent=e.rawData[0],this._transforms=e.rawData[1]||[],this._params=e.rawData[2]||{}}this._parentBucket=this.getBucket()}this.path=this._parent,this._applyConfig()},y.prototype._applyConfig=function(){this._config.sslEnabled?this.protocol="https":this.protocol="http"},y.prototype.hasTransforms=function(){return this._transforms.length>0||Object.keys(this._params).length>0},y.prototype.getPath=function(){let e="/";if(this.hasTransforms()){this._legacyTranslate();const t=[];this._config.customDomain||t.push(this.getBucket()+y.TRANSFORMS_SUFFIX),e+=t.concat([y.VERSION,h.encode([this._parent,this._transforms,this._params],this.getKey())]).join("/")}else{if(!this._url)return e;let t=this._url;this._config.customDomain&&(t=t.replace(`/${this.bucket}`,"")),e+=t.split("/").slice(3).join("/")}return e},y.prototype._getUrlWithoutPath=function(){let e="";if(!this._isRelative){const t=!this.port||80!==this.port&&443!==this.port?`:${this.port}`:"";let r="";this.protocol&&""!==this.protocol&&(r=`${this.protocol}:`),this._config.customDomain?e+=`${r}//${this._config.customDomain}${t}`:e+=`${r}//${this.domain}${t}`}return e},y.prototype.setCustomDomain=function(e){this._config.customDomain=e},y.prototype.forceParseTransform=function(e){this._config.forceParseTransform=e},y.prototype.getUrl=function(){return this.toString()},y.prototype.toString=function(){this._noKey&&this._logger.error("OcdnUrl - NO TRANSFORMKEY GIVEN! You have to pass key to generate transfomations");let e=this._getUrlWithoutPath(),t="";const r=Object.keys(this._query);if(r.length>0){t+="?";for(let e=0;e<r.length;++e)t+=`${r[e]}=${this._query[r[e]]}`}return""===e?e=this._url:e+=this.getPath(),this._url&&this._url.indexOf("http")>-1&&(this._isRelative&&(e=this.getPath()),e=""===this.protocol?e.replace(/http[s]{0,1}:/,""):e.replace(/http[s]{0,1}:/,`${this.protocol}:`)),this._fileName&&(e=`${e}/${this._fileName}`),e+t},y.prototype.saveAs=function(e){return this._setResponseHeader("content-disposition",`attachment; filename*=UTF-8''${e}`),this},y.prototype.overlay=function(e,t,r,n){return e=e.replace(d,""),i.prototype.overlay.call(this,e,t,r,n)},y.prototype.setName=function(e){if(-1!==e.indexOf("/"))throw new Error("Invalid name given. Name shouldn't contain /");this._fileName=e;const t=s(e).toString().slice(0,6);return i.prototype.setName.call(this,t,6)},y.prototype.getName=function(){return this._fileName},y.prototype.setDomain=function(e){e=e.replace(/http[s]{0,1}:\/\//,""),this.domain=e},y.prototype.setPort=function(e){this.port=Number(e)},y.prototype.setPlugin=function(e){this.plugin=e},y.prototype.getPlugin=function(){return this.plugin},y.prototype.setBucket=function(e){this.bucket=e,this.owner=e,this._parentBucket&&this._parentBucket!==this.getBucket()&&-1===this._parent.indexOf("http")&&(this._parent=`${this.protocol||"http"}://${this.domain}/${this._parentBucket}/${this._parent}`)},y.prototype.getBucket=function(){return this.bucket||this.owner},y.prototype.setUrl=function(e){const t=e.split("/");if(!(t.length>=3))throw y.Error.INCORRECT_URL;{this.protocol=t[0].replace(":","");const e=t[2].split(":");this.setDomain(e[0]),e[1]&&this.setPort(e[1])}},y.prototype.setHttpHostPort=function(e){this.setUrl(e)},y.prototype.combine=function(e,t,r,n,i){this._logger.warn("OcdnUrl/combine deprecated please use overlay");const o=Object.keys(y.SUPPORTED_IMAGE_FORMATS),s=`/${this.getBucket()}/MDA_/${e}.${o[t]}`;let a=Object.keys(y.OVERLAY_POSITION).filter((e=>parseInt(y.OVERLAY_POSITION[e])===n+1))[0];void 0===a&&(a="top-left");let l=Object.keys(y.OVERLAY_MODE).filter((e=>parseInt(y.OVERLAY_MODE[e])===i))[0];return void 0===l&&(l="over"),r&&(a="stretch"),this.overlay(s,a,Boolean(i),l)},y.prototype.disableAnimation=function(){return this._logger.warn("OcdnUrl/disableAnimation is deprecated please use animation"),this.animation(!1)},y.prototype.preserveAnimation=function(){return this._logger.warn("OcdnUrl/preserveAnimation is obsolete"),this},y.prototype.clearTransformations=function(){return this._transforms=[],this},y.prototype.qualityPreset=function(e){return this._logger.warn("OcdnUrl/qualityPreset is deprecated. Please use imageQuality"),this.imageQuality(y.QUALITY_PRESET[e])},y.prototype.boundingBox=function(e,t){return this._logger.warn("OcdnUrl/boundingBox is deprecated. Please use resizeCropAuto"),this.resizeCropAuto(e,t)},y.VERSION="1";const w=Object.keys(i);for(let e=0,t=w.length;e<t;++e)y[w[e]]=i[w[e]];y.SUPPORTED_IMAGE_FORMATS={jpg:0,png:1,bmp:2,tiff:3},y.COMBINE_OPERATIONS={};const b={over:"over",in:"in",out:"out",atop:"atop",xor:"xor",plus:"plus",minus:"minus",add:"add",subtract:"subtract",difference:"difference",divide:"divide",multiply:"multiply",bumpmap:"bumpmap",copy:"copy",copyRed:"copy-red",copyGreen:"copy-green",copyBlue:"copy-blue",copyOpacity:"copy-opacity",copyCyan:"copy-cyan",copyMagenta:"copy-magenta",copyYellow:"copy-yellow",copyBlack:"copy-black"};y.COMBINE_ANCHORS={};const k={northWest:"top-left",north:"top-center",northEast:"top-right",west:"center-left",center:"center-center",east:"center-right",southWest:"bottom-left",south:"bottom-center",southEast:"bottom-right"},v=Object.keys(k);for(let e=0;e<v.length;++e)y.COMBINE_ANCHORS[v[e]]=y.OVERLAY_POSITION[k[v[e]]];const _=Object.keys(y.COMBINE_OPERATIONS);for(let e=0;e<_.length;e++)y.COMBINE_OPERATIONS[_[e]]=y.OVERLAY_MODE[b[_[e]]];y.TRANSFORMS_SUFFIX="-transforms",y.QUALITY_PRESET={0:"low",1:"medium",2:"high",3:"very-high"},(y.Error={}).INCORRECT_URL="incorrect url",t.OcdnUrl=y},557:function(e,t,r){const n=r(751).Decoder,i=function(){this._transforms=[],this._params={}};i.prototype.imageFormat=function(e){return void 0===e?e=0:(e=i.IMAGEFORMAT[e],e=parseInt(e)),n.decodeValue(e,{name:"imageFormat",type:"enum",values:{0:"original",1:"jpeg",2:"png",3:"bmp",4:"tiff",5:"webp",6:"avif"},default:0,description:"imageFormat",idx:"0"}),this._params[0]=e,this},i.prototype.getImageFormat=function(){let e=this._params[0];if(!e)return[];e=[e];if("enum"==="enum"){const t={0:"original",1:"jpeg",2:"png",3:"bmp",4:"tiff",5:"webp",6:"avif"};e[0]=t[e[0]]}return e},i.prototype.imageQuality=function(e){return void 0===e?e=1:(e=i.IMAGEQUALITY[e],e=parseInt(e)),n.decodeValue(e,{name:"imageQuality",type:"enum",values:{0:"low",1:"medium",2:"high",3:"very-high"},default:1,description:"imageQuality",idx:"1"}),this._params[1]=e,this},i.prototype.getImageQuality=function(){let e=this._params[1];if(!e)return[];e=[e];if("enum"==="enum"){const t={0:"low",1:"medium",2:"high",3:"very-high"};e[0]=t[e[0]]}return e},i.prototype.animation=function(e){return void 0===e&&(e=!0),n.decodeValue(e,{name:"animation",type:"boolean",default:!0,description:"animation",idx:"2"}),e=Boolean(e),this._params[2]=e,this},i.prototype.getAnimation=function(){let e=this._params[2];if(!e)return[];e=[e];const t={name:"animation",type:"boolean",default:!0,description:"animation",idx:"2"};if("enum"===t.type){const r=t.values;e[0]=r[e[0]]}return e},i.prototype.autoOrient=function(e){return void 0===e&&(e=!1),n.decodeValue(e,{name:"autoOrient",type:"boolean",default:!1,description:"autoOrient",idx:"3"}),e=Boolean(e),this._params[3]=e,this},i.prototype.getAutoOrient=function(){let e=this._params[3];if(!e)return[];e=[e];const t={name:"autoOrient",type:"boolean",default:!1,description:"autoOrient",idx:"3"};if("enum"===t.type){const r=t.values;e[0]=r[e[0]]}return e},i.prototype.rotate=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[{name:"angle",description:"Number of 90 degrees rotations to perform",type:"integer",minValue:0}];e=e.slice(0,1);for(let r=0;r<1;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<0)e[r]=t[r].default;else{if(void 0!==e[r]){if("enum"===t[r].type){const n="ROTATE_";e[r]=i[n+t[r].name.toUpperCase()][e[r]],e[r]=parseInt(e[r])}"integer"===t[r].type&&(e[r]=parseInt(e[r])),"boolean"===t[r].type&&(e[r]=Boolean(e[r]))}else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(0),r=r.concat(e),this._transforms.push(r),this},i.prototype.getRotate=function(){const e=[{name:"angle",description:"Number of 90 degrees rotations to perform",type:"integer",minValue:0}];let t=[];for(let e=0;e<this._transforms.length;++e){let r=this._transforms[e];0===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),t=r)}for(let r=0,n=t.length;r<n;r++)if("enum"===e[r].type){const n=e[r].values;t[r]=n[t[r]]}return t},i.prototype.blur=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[{name:"power",description:"Blur strength",type:"integer",default:10,minValue:0,maxValue:100}];e=e.slice(0,1);for(let r=0;r<1;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<0)e[r]=t[r].default;else{if(void 0!==e[r]){if("enum"===t[r].type){const n="BLUR_";e[r]=i[n+t[r].name.toUpperCase()][e[r]],e[r]=parseInt(e[r])}"integer"===t[r].type&&(e[r]=parseInt(e[r])),"boolean"===t[r].type&&(e[r]=Boolean(e[r]))}else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(1),r=r.concat(e),this._transforms.push(r),this},i.prototype.getBlur=function(){const e=[{name:"power",description:"Blur strength",type:"integer",default:10,minValue:0,maxValue:100}];let t=[];for(let e=0;e<this._transforms.length;++e){let r=this._transforms[e];1===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),t=r)}for(let r=0;r<t.length;r++)if("enum"===e[r].type){const n=e[r].values;t[r]=n[t[r]]}return t},i.prototype.resize=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[{name:"width",description:"Target width (0 for perserve aspect ratio)",type:"integer",minValue:0},{name:"height",description:"Target height (0 for perserve aspect ratio)",type:"integer",minValue:0},{name:"scaleUp",description:"Enables enlarging image when one of sizes is set to 0",type:"boolean",default:!0},{name:"scaleDown",description:"Enables shrinking image when one of sizes is set to 0",type:"boolean",default:!0}];e=e.slice(0,4);for(let r=0;r<4;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<3)e[r]=t[r].default;else{if(void 0!==e[r]){if("enum"===t[r].type){const n="RESIZE_";e[r]=i[n+t[r].name.toUpperCase()][e[r]],e[r]=parseInt(e[r])}"integer"===t[r].type&&(e[r]=parseInt(e[r])),"boolean"===t[r].type&&(e[r]=Boolean(e[r]))}else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(2),r=r.concat(e),this._transforms.push(r),this},i.prototype.getResize=function(){const e=[{name:"width",description:"Target width (0 for perserve aspect ratio)",type:"integer",minValue:0},{name:"height",description:"Target height (0 for perserve aspect ratio)",type:"integer",minValue:0},{name:"scaleUp",description:"Enables enlarging image when one of sizes is set to 0",type:"boolean",default:!0},{name:"scaleDown",description:"Enables shrinking image when one of sizes is set to 0",type:"boolean",default:!0}];let t=[];for(let e=0;e<this._transforms.length;++e){let r=this._transforms[e];2===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),t=r)}for(let r=0;r<t.length;r++)if("enum"===e[r].type){const n=e[r].values;t[r]=n[t[r]]}return t},i.prototype.crop=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[{name:"x",description:"The distance of the cropped image from the left edge of the image",type:"integer",minValue:0},{name:"y",type:"integer",description:"The distance of the cropped image from the top edge of the image",minValue:0},{name:"width",description:"Width of the cropped image",type:"integer",minValue:0},{name:"height",type:"integer",description:"Height of the cropped image",minValue:0}];e=e.slice(0,4);for(let r=0;r<4;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<3)e[r]=t[r].default;else{if(void 0!==e[r]){if("enum"===t[r].type){const n="CROP_";e[r]=i[n+t[r].name.toUpperCase()][e[r]],e[r]=parseInt(e[r])}"integer"===t[r].type&&(e[r]=parseInt(e[r])),"boolean"===t[r].type&&(e[r]=Boolean(e[r]))}else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(3),r=r.concat(e),this._transforms.push(r),this},i.prototype.getCrop=function(){const e=[{name:"x",description:"The distance of the cropped image from the left edge of the image",type:"integer",minValue:0},{name:"y",type:"integer",description:"The distance of the cropped image from the top edge of the image",minValue:0},{name:"width",description:"Width of the cropped image",type:"integer",minValue:0},{name:"height",type:"integer",description:"Height of the cropped image",minValue:0}];let t=[];for(let e=0;e<this._transforms.length;++e){let r=this._transforms[e];3===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),t=r)}for(let r=0,n=t.length;r<n;r++)if("enum"===e[r].type){const n=e[r].values;t[r]=n[t[r]]}return t},i.prototype.grayscale=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[];e=e.slice(0,0);for(let r=0;r<0;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<-1)e[r]=t[r].default;else{if(void 0!==e[r]){if("enum"===t[r].type){const n="GRAYSCALE_";e[r]=i[n+t[r].name.toUpperCase()][e[r]],e[r]=parseInt(e[r])}"integer"===t[r].type&&(e[r]=parseInt(e[r])),"boolean"===t[r].type&&(e[r]=Boolean(e[r]))}else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(4),r=r.concat(e),this._transforms.push(r),this},i.prototype.getGrayscale=function(){const e=[];let t=[];for(let e=0;e<this._transforms.length;++e){let r=this._transforms[e];4===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),t=r)}for(let r=0;r<t.length;r++)if("enum"===e[r].type){const n=e[r].values;t[r]=n[t[r]]}return t},i.prototype.resizeCropAuto=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[{name:"width",type:"integer",minValue:1},{name:"height",type:"integer",minValue:1}];e=e.slice(0,2);for(let r=0;r<2;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<1)e[r]=t[r].default;else{if(void 0!==e[r]){if("enum"===t[r].type){const n="RESIZECROPAUTO_";e[r]=i[n+t[r].name.toUpperCase()][e[r]],e[r]=parseInt(e[r])}"integer"===t[r].type&&(e[r]=parseInt(e[r])),"boolean"===t[r].type&&(e[r]=Boolean(e[r]))}else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(5),r=r.concat(e),this._transforms.push(r),this},i.prototype.getResizeCropAuto=function(){const e=[{name:"width",type:"integer",minValue:1},{name:"height",type:"integer",minValue:1}];let t=[];for(let e=0;e<this._transforms.length;++e){let r=this._transforms[e];5===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),t=r)}for(let r=0;r<t.length;r++)if("enum"===e[r].type){const n=e[r].values;t[r]=n[t[r]]}return t},i.prototype.setBackground=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[{name:"red",type:"integer",minValue:0,maxValue:255},{name:"green",type:"integer",minValue:0,maxValue:255},{name:"blue",type:"integer",minValue:0,maxValue:255},{name:"alpha",type:"integer",minValue:0,maxValue:255,default:255}];e=e.slice(0,4);for(let r=0;r<4;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<3)e[r]=t[r].default;else{if(void 0!==e[r]){if("enum"===t[r].type){const n="SETBACKGROUND_";e[r]=i[n+t[r].name.toUpperCase()][e[r]],e[r]=parseInt(e[r])}"integer"===t[r].type&&(e[r]=parseInt(e[r])),"boolean"===t[r].type&&(e[r]=Boolean(e[r]))}else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(6),r=r.concat(e),this._transforms.push(r),this},i.prototype.getSetBackground=function(){const e=[{name:"red",type:"integer",minValue:0,maxValue:255},{name:"green",type:"integer",minValue:0,maxValue:255},{name:"blue",type:"integer",minValue:0,maxValue:255},{name:"alpha",type:"integer",minValue:0,maxValue:255,default:255}];let t=[];for(let e=0;e<this._transforms.length;++e){let r=this._transforms[e];6===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),t=r)}for(let r=0,n=t.length;r<n;r++)if("enum"===e[r].type){const n=e[r].values;t[r]=n[t[r]]}return t},i.prototype.overlay=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[{name:"uri",type:"string"},{name:"position",type:"enum",values:{0:"stretch",1:"top-left",2:"top-center",3:"top-right",4:"center-left",5:"center-center",6:"center-right",7:"bottom-left",8:"bottom-center",9:"bottom-right"},default:0},{name:"reverse",type:"boolean",default:!1},{name:"mode",type:"enum",values:{0:"over",1:"in",2:"out",3:"atop",4:"xor",5:"plus",6:"minus",7:"add",8:"subtract",9:"difference",10:"divide",11:"multiply",12:"bumpmap",13:"copy",14:"copy-red",15:"copy-green",16:"copy-blue",17:"copy-opacity",18:"copy-cyan",19:"copy-magenta",20:"copy-yellow",21:"copy-black"},default:0}];e=e.slice(0,4);for(let r=0;r<4;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<3)e[r]=t[r].default;else{if(void 0!==e[r]){if("enum"===t[r].type){const n="OVERLAY_";e[r]=i[n+t[r].name.toUpperCase()][e[r]],e[r]=parseInt(e[r])}"integer"===t[r].type&&(e[r]=parseInt(e[r])),"boolean"===t[r].type&&(e[r]=Boolean(e[r]))}else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(7),r=r.concat(e),this._transforms.push(r),this},i.prototype.getOverlay=function(){const e=[{name:"uri",type:"string"},{name:"position",type:"enum",values:{0:"stretch",1:"top-left",2:"top-center",3:"top-right",4:"center-left",5:"center-center",6:"center-right",7:"bottom-left",8:"bottom-center",9:"bottom-right"},default:0},{name:"reverse",type:"boolean",default:!1},{name:"mode",type:"enum",values:{0:"over",1:"in",2:"out",3:"atop",4:"xor",5:"plus",6:"minus",7:"add",8:"subtract",9:"difference",10:"divide",11:"multiply",12:"bumpmap",13:"copy",14:"copy-red",15:"copy-green",16:"copy-blue",17:"copy-opacity",18:"copy-cyan",19:"copy-magenta",20:"copy-yellow",21:"copy-black"},default:0}];let t=[];for(let e=0,r=this._transforms.length;e<r;++e){let r=this._transforms[e];7===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),t=r)}for(let r=0;r<t.length;r++)if("enum"===e[r].type){const n=e[r].values;t[r]=n[t[r]]}return t},i.prototype.keepAspectRatio=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[{name:"width",description:"Target image width",type:"integer"},{name:"height",description:"Target image height",type:"integer"},{name:"blurPower",description:"Blur power",type:"integer",default:10,minValue:0,maxValue:100},{name:"red",description:"Overlay color red channel",type:"integer",default:0,minValue:0,maxValue:255},{name:"green",description:"Overlay color green channel",type:"integer",default:0,minValue:0,maxValue:255},{name:"blue",description:"Overlay color blue channel",type:"integer",default:0,minValue:0,maxValue:255},{name:"alpha",description:"Overlay color alpha channel",type:"integer",default:175,minValue:0,maxValue:255},{name:"toleranceX",description:"A percent of width that can be removed to fit aspect ratio",type:"integer",default:0,minValue:0,maxValue:100},{name:"toleranceY",description:"A percent of height that can be removed to fit aspect ratio",type:"integer",default:0,minValue:0,maxValue:100}];e=e.slice(0,9);for(let r=0;r<9;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<8)e[r]=t[r].default;else{if(void 0!==e[r])"integer"===t[r].type&&(e[r]=parseInt(e[r]));else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(10),r=r.concat(e),this._transforms.push(r),this},i.prototype.getKeepAspectRatio=function(){let e=[];for(let t=0;t<this._transforms.length;++t){let r=this._transforms[t];10===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),e=r)}return e},i.prototype.hash=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[{name:"type",type:"enum",values:{0:"md5",1:"sha1"},default:0}];e=e.slice(0,1);for(let r=0;r<1;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<0)e[r]=t[r].default;else{if(void 0!==e[r]){if("enum"===t[r].type){const n="HASH_";e[r]=i[n+t[r].name.toUpperCase()][e[r]],e[r]=parseInt(e[r])}"integer"===t[r].type&&(e[r]=parseInt(e[r])),"boolean"===t[r].type&&(e[r]=Boolean(e[r]))}else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(8),r=r.concat(e),this._transforms.push(r),this},i.prototype.getHash=function(){const e=[{name:"type",type:"enum",values:{0:"md5",1:"sha1"},default:0}];let t=[];for(let e=0;e<this._transforms.length;++e){let r=this._transforms[e];8===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),t=r)}for(let r=0;r<t.length;r++)if("enum"===e[r].type){const n=e[r].values;t[r]=n[t[r]]}return t},i.prototype.setName=function(){let e=[];for(let t=0;t<arguments.length;t++)e.push(arguments[t]);const t=[{name:"name",type:"string"},{name:"len",default:6,type:"integer"}];e=e.slice(0,2);for(let r=0;r<2;++r)if(void 0===e[r]&&void 0!==e[r+1]&&r<1)e[r]=t[r].default;else{if(void 0!==e[r]){if("enum"===t[r].type){const n="SETNAME_";e[r]=i[n+t[r].name.toUpperCase()][e[r]],e[r]=parseInt(e[r])}"integer"===t[r].type&&(e[r]=parseInt(e[r])),"boolean"===t[r].type&&(e[r]=Boolean(e[r]))}else if(void 0!==t[r].default)continue;n.decodeValue(e[r],t[r])}e=e.filter((e=>void 0!==e));let r=[];return r.push(9),r=r.concat(e),this._transforms.push(r),this},i.prototype.getSetName=function(){const e=[{name:"name",type:"string"},{name:"len",default:6,type:"integer"}];let t=[];for(let e=0;e<this._transforms.length;++e){let r=this._transforms[e];9===r[0]&&(r=JSON.parse(JSON.stringify(r)),r.shift(),t=r)}for(let r=0;r<t.length;r++)if("enum"===e[r].type){const n=e[r].values;t[r]=n[t[r]]}return t},i.IMAGEFORMAT={original:"0",jpeg:"1",png:"2",bmp:"3",tiff:"4",webp:"5",avif:"6"},i.IMAGEQUALITY={low:"0",medium:"1",high:"2","very-high":"3"},i.OVERLAY_POSITION={stretch:"0","top-left":"1","top-center":"2","top-right":"3","center-left":"4","center-center":"5","center-right":"6","bottom-left":"7","bottom-center":"8","bottom-right":"9"},i.OVERLAY_MODE={over:"0",in:"1",out:"2",atop:"3",xor:"4",plus:"5",minus:"6",add:"7",subtract:"8",difference:"9",divide:"10",multiply:"11",bumpmap:"12",copy:"13","copy-red":"14","copy-green":"15","copy-blue":"16","copy-opacity":"17","copy-cyan":"18","copy-magenta":"19","copy-yellow":"20","copy-black":"21"},i.HASH_TYPE={md5:"0",sha1:"1"},t.Y=i},334:function(e,t,r){var n=r(764).lW;e.exports=e=>n.from(e,"base64").toString("utf8")},20:function(e,t,r){const{OcdnUrl:n}=r(535);e.exports=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e)return null;const r=new n(e);r.setBucket("sport-images"),r.setKey("pyf3tXmWmm42B2NrXGCHRkhlE4iwu8");const i={width:960,height:0,x:0,y:0,scaleUp:0,scaleDown:1};return r.imageFormat("jpeg"),t.forEach((e=>{const{tool:t,width:n=i.width,height:o=i.height,extension:s,scaleUp:a=i.scaleUp,scaleDown:l=i.scaleDown}=e;let{x:f,y:u}=e;null==f&&(f=i.x),null==u&&(u=i.y),["hotspot","crop"].includes(t)&&n&&o?r.crop(f,u,n,o):"resizeCropAuto"===t?r.resizeCropAuto(n,o):"imageFormat"===t?r.imageFormat(s):"resize"===t?r.resize(n,o,a,l):"boundingBox"===t&&(r.resize(n,0,!1,!0),r.resize(0,o,!1,!0))})),r.imageQuality("medium"),r.toString()}},742:function(e,t){"use strict";t.byteLength=function(e){var t=a(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,o=a(e),s=o[0],l=o[1],f=new i(function(e,t,r){return 3*(t+r)/4-r}(0,s,l)),u=0,h=l>0?s-4:s;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],f[u++]=t>>16&255,f[u++]=t>>8&255,f[u++]=255&t;2===l&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,f[u++]=255&t);1===l&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,f[u++]=t>>8&255,f[u++]=255&t);return f},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],s=16383,a=0,f=n-i;a<f;a+=s)o.push(l(e,a,a+s>f?f:a+s));1===i?(t=e[n-1],o.push(r[t>>2]+r[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],o.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0;s<64;++s)r[s]=o[s],n[o.charCodeAt(s)]=s;function a(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function l(e,t,n){for(var i,o,s=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},764:function(e,t,r){"use strict";const n=r(742),i=r(645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.lW=l,t.h2=50;const s=2147483647;function a(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return h(e)}return f(e,t,r)}function f(e,t,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!l.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|g(e,t);let n=a(r);const i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(J(e,Uint8Array)){const t=new Uint8Array(e);return p(t.buffer,t.byteOffset,t.byteLength)}return c(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(J(e,ArrayBuffer)||e&&J(e.buffer,ArrayBuffer))return p(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(J(e,SharedArrayBuffer)||e&&J(e.buffer,SharedArrayBuffer)))return p(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,r);const i=function(e){if(l.isBuffer(e)){const t=0|d(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||X(e.length)?a(0):c(e);if("Buffer"===e.type&&Array.isArray(e.data))return c(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function h(e){return u(e),a(e<0?0:0|d(e))}function c(e){const t=e.length<0?0:0|d(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function p(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,l.prototype),n}function d(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|e}function g(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||J(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return G(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return H(e).length;default:if(i)return n?-1:G(e).length;t=(""+t).toLowerCase(),i=!0}}function m(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return U(this,t,r);case"utf8":case"utf-8":return B(this,t,r);case"ascii":return S(this,t,r);case"latin1":case"binary":return D(this,t,r);case"base64":return O(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return F(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function y(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function w(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),X(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:b(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(e,t,r,n,i){let o,s=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;s=2,a/=2,l/=2,r/=2}function f(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let n=-1;for(o=r;o<a;o++)if(f(e,o)===f(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===l)return n*s}else-1!==n&&(o-=o-n),n=-1}else for(r+l>a&&(r=a-l),o=r;o>=0;o--){let r=!0;for(let n=0;n<l;n++)if(f(e,o+n)!==f(t,n)){r=!1;break}if(r)return o}return-1}function k(e,t,r,n){r=Number(r)||0;const i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;const o=t.length;let s;for(n>o/2&&(n=o/2),s=0;s<n;++s){const n=parseInt(t.substr(2*s,2),16);if(X(n))return s;e[r+s]=n}return s}function v(e,t,r,n){return W(G(t,e.length-r),e,r,n)}function _(e,t,r,n){return W(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function E(e,t,r,n){return W(H(t),e,r,n)}function A(e,t,r,n){return W(function(e,t){let r,n,i;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function O(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function B(e,t,r){r=Math.min(e.length,r);const n=[];let i=t;for(;i<r;){const t=e[i];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=r){let r,n,a,l;switch(s){case 1:t<128&&(o=t);break;case 2:r=e[i+1],128==(192&r)&&(l=(31&t)<<6|63&r,l>127&&(o=l));break;case 3:r=e[i+1],n=e[i+2],128==(192&r)&&128==(192&n)&&(l=(15&t)<<12|(63&r)<<6|63&n,l>2047&&(l<55296||l>57343)&&(o=l));break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a,l>65535&&l<1114112&&(o=l))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){const t=e.length;if(t<=I)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=I));return r}(n)}l.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return f(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return function(e,t,r){return u(e),e<=0?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)}(e,t,r)},l.allocUnsafe=function(e){return h(e)},l.allocUnsafeSlow=function(e){return h(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(J(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),J(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=l.allocUnsafe(t);let i=0;for(r=0;r<e.length;++r){let t=e[r];if(J(t,Uint8Array))i+t.length>n.length?(l.isBuffer(t)||(t=l.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else{if(!l.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,i)}i+=t.length}return n},l.byteLength=g,l.prototype._isBuffer=!0,l.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)y(this,t,t+1);return this},l.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)y(this,t,t+3),y(this,t+1,t+2);return this},l.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)y(this,t,t+7),y(this,t+1,t+6),y(this,t+2,t+5),y(this,t+3,t+4);return this},l.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?B(this,0,e):m.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){let e="";const r=t.h2;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(l.prototype[o]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,i){if(J(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(this===e)return 0;let o=(i>>>=0)-(n>>>=0),s=(r>>>=0)-(t>>>=0);const a=Math.min(o,s),f=this.slice(n,i),u=e.slice(t,r);for(let e=0;e<a;++e)if(f[e]!==u[e]){o=f[e],s=u[e];break}return o<s?-1:s<o?1:0},l.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return w(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return w(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return k(this,e,t,r);case"utf8":case"utf-8":return v(this,e,t,r);case"ascii":case"latin1":case"binary":return _(this,e,t,r);case"base64":return E(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const I=4096;function S(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function D(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function U(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=Q[e[n]];return i}function F(e,t,r){const n=e.slice(t,r);let i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}function x(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function T(e,t,r,n,i,o){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function R(e,t,r,n,i){j(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function C(e,t,r,n,i){j(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function N(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function V(e,t,r,n,o){return t=+t,r>>>=0,o||N(e,0,r,4),i.write(e,t,r,n,23,4),r+4}function M(e,t,r,n,o){return t=+t,r>>>=0,o||N(e,0,r,8),i.write(e,t,r,n,52,8),r+8}l.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||x(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||x(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||x(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||x(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||x(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=q((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),l.prototype.readBigUInt64BE=q((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);let n=t,i=1,o=this[e+--n];for(;n>0&&(i*=256);)o+=this[e+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},l.prototype.readInt8=function(e,t){return e>>>=0,t||x(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||x(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||x(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||x(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||x(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=q((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),l.prototype.readBigInt64BE=q((function(e){z(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||x(e,4,this.length),i.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||x(e,4,this.length),i.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||x(e,8,this.length),i.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||x(e,8,this.length),i.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){T(this,e,t,r,Math.pow(2,8*r)-1,0)}let i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){T(this,e,t,r,Math.pow(2,8*r)-1,0)}let i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=q((function(e,t=0){return R(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeBigUInt64BE=q((function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);T(this,e,t,r,n-1,-n)}let i=0,o=1,s=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);T(this,e,t,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=q((function(e,t=0){return R(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeBigInt64BE=q((function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeFloatLE=function(e,t,r){return V(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return V(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return M(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return M(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let i;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{const o=l.isBuffer(e)?e:l.from(e,n),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%s]}return this};const P={};function L(e,t,r){P[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function $(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function j(e,t,r,n,i,o){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new P.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,r){z(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||K(t,e.length-(r+1))}(n,i,o)}function z(e,t){if("number"!=typeof e)throw new P.ERR_INVALID_ARG_TYPE(t,"number",e)}function K(e,t,r){if(Math.floor(e)!==e)throw z(e,r),new P.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new P.ERR_BUFFER_OUT_OF_BOUNDS;throw new P.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}L("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),L("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),L("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=$(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=$(i)),i+="n"),n+=` It must be ${t}. Received ${i}`,n}),RangeError);const Y=/[^+/0-9A-Za-z-_]/g;function G(e,t){let r;t=t||1/0;const n=e.length;let i=null;const o=[];for(let s=0;s<n;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function H(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(Y,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function W(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function J(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function X(e){return e!=e}const Q=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function q(e){return"undefined"==typeof BigInt?Z:e}function Z(){throw new Error("BigInt not supported")}},249:function(e,t,r){var n;e.exports=(n=n||function(e,t){var n;if("undefined"!=typeof window&&window.crypto&&(n=window.crypto),"undefined"!=typeof self&&self.crypto&&(n=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(n=globalThis.crypto),!n&&"undefined"!=typeof window&&window.msCrypto&&(n=window.msCrypto),!n&&void 0!==r.g&&r.g.crypto&&(n=r.g.crypto),!n)try{n=r(480)}catch(e){}var i=function(){if(n){if("function"==typeof n.getRandomValues)try{return n.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof n.randomBytes)try{return n.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function e(){}return function(t){var r;return e.prototype=t,r=new e,e.prototype=null,r}}(),s={},a=s.lib={},l=a.Base={extend:function(e){var t=o(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},f=a.WordArray=l.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=r!=t?r:4*e.length},toString:function(e){return(e||h).stringify(this)},concat:function(e){var t=this.words,r=e.words,n=this.sigBytes,i=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;t[n+o>>>2]|=s<<24-(n+o)%4*8}else for(var a=0;a<i;a+=4)t[n+a>>>2]=r[a>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,r=this.sigBytes;t[r>>>2]&=4294967295<<32-r%4*8,t.length=e.ceil(r/4)},clone:function(){var e=l.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],r=0;r<e;r+=4)t.push(i());return new f.init(t,e)}}),u=s.enc={},h=u.Hex={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var o=t[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n+=2)r[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new f.init(r,t/2)}},c=u.Latin1={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var o=t[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n++)r[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new f.init(r,t)}},p=u.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},d=a.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=p.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var r,n=this._data,i=n.words,o=n.sigBytes,s=this.blockSize,a=o/(4*s),l=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*s,u=e.min(4*l,o);if(l){for(var h=0;h<l;h+=s)this._doProcessBlock(i,h);r=i.splice(0,l),n.sigBytes-=u}return new f.init(r,u)},clone:function(){var e=l.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),g=(a.Hasher=d.extend({cfg:l.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,r){return new e.init(r).finalize(t)}},_createHmacHelper:function(e){return function(t,r){return new g.HMAC.init(e,r).finalize(t)}}}),s.algo={});return s}(Math),n)},269:function(e,t,r){var n;e.exports=(n=r(249),function(){var e=n,t=e.lib.WordArray;function r(e,r,n){for(var i=[],o=0,s=0;s<r;s++)if(s%4){var a=n[e.charCodeAt(s-1)]<<s%4*2|n[e.charCodeAt(s)]>>>6-s%4*2;i[o>>>2]|=a<<24-o%4*8,o++}return t.create(i,o)}e.enc.Base64={stringify:function(e){var t=e.words,r=e.sigBytes,n=this._map;e.clamp();for(var i=[],o=0;o<r;o+=3)for(var s=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;a<4&&o+.75*a<r;a++)i.push(n.charAt(s>>>6*(3-a)&63));var l=n.charAt(64);if(l)for(;i.length%4;)i.push(l);return i.join("")},parse:function(e){var t=e.length,n=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var o=0;o<n.length;o++)i[n.charCodeAt(o)]=o}var s=n.charAt(64);if(s){var a=e.indexOf(s);-1!==a&&(t=a)}return r(e,t,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),n.enc.Base64)},465:function(e,t,r){var n;e.exports=(n=r(249),n.enc.Hex)},214:function(e,t,r){var n;e.exports=(n=r(249),function(e){var t=n,r=t.lib,i=r.WordArray,o=r.Hasher,s=t.algo,a=[];!function(){for(var t=0;t<64;t++)a[t]=4294967296*e.abs(e.sin(t+1))|0}();var l=s.MD5=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var r=0;r<16;r++){var n=t+r,i=e[n];e[n]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,s=e[t+0],l=e[t+1],p=e[t+2],d=e[t+3],g=e[t+4],m=e[t+5],y=e[t+6],w=e[t+7],b=e[t+8],k=e[t+9],v=e[t+10],_=e[t+11],E=e[t+12],A=e[t+13],O=e[t+14],B=e[t+15],I=o[0],S=o[1],D=o[2],U=o[3];I=f(I,S,D,U,s,7,a[0]),U=f(U,I,S,D,l,12,a[1]),D=f(D,U,I,S,p,17,a[2]),S=f(S,D,U,I,d,22,a[3]),I=f(I,S,D,U,g,7,a[4]),U=f(U,I,S,D,m,12,a[5]),D=f(D,U,I,S,y,17,a[6]),S=f(S,D,U,I,w,22,a[7]),I=f(I,S,D,U,b,7,a[8]),U=f(U,I,S,D,k,12,a[9]),D=f(D,U,I,S,v,17,a[10]),S=f(S,D,U,I,_,22,a[11]),I=f(I,S,D,U,E,7,a[12]),U=f(U,I,S,D,A,12,a[13]),D=f(D,U,I,S,O,17,a[14]),I=u(I,S=f(S,D,U,I,B,22,a[15]),D,U,l,5,a[16]),U=u(U,I,S,D,y,9,a[17]),D=u(D,U,I,S,_,14,a[18]),S=u(S,D,U,I,s,20,a[19]),I=u(I,S,D,U,m,5,a[20]),U=u(U,I,S,D,v,9,a[21]),D=u(D,U,I,S,B,14,a[22]),S=u(S,D,U,I,g,20,a[23]),I=u(I,S,D,U,k,5,a[24]),U=u(U,I,S,D,O,9,a[25]),D=u(D,U,I,S,d,14,a[26]),S=u(S,D,U,I,b,20,a[27]),I=u(I,S,D,U,A,5,a[28]),U=u(U,I,S,D,p,9,a[29]),D=u(D,U,I,S,w,14,a[30]),I=h(I,S=u(S,D,U,I,E,20,a[31]),D,U,m,4,a[32]),U=h(U,I,S,D,b,11,a[33]),D=h(D,U,I,S,_,16,a[34]),S=h(S,D,U,I,O,23,a[35]),I=h(I,S,D,U,l,4,a[36]),U=h(U,I,S,D,g,11,a[37]),D=h(D,U,I,S,w,16,a[38]),S=h(S,D,U,I,v,23,a[39]),I=h(I,S,D,U,A,4,a[40]),U=h(U,I,S,D,s,11,a[41]),D=h(D,U,I,S,d,16,a[42]),S=h(S,D,U,I,y,23,a[43]),I=h(I,S,D,U,k,4,a[44]),U=h(U,I,S,D,E,11,a[45]),D=h(D,U,I,S,B,16,a[46]),I=c(I,S=h(S,D,U,I,p,23,a[47]),D,U,s,6,a[48]),U=c(U,I,S,D,w,10,a[49]),D=c(D,U,I,S,O,15,a[50]),S=c(S,D,U,I,m,21,a[51]),I=c(I,S,D,U,E,6,a[52]),U=c(U,I,S,D,d,10,a[53]),D=c(D,U,I,S,v,15,a[54]),S=c(S,D,U,I,l,21,a[55]),I=c(I,S,D,U,b,6,a[56]),U=c(U,I,S,D,B,10,a[57]),D=c(D,U,I,S,y,15,a[58]),S=c(S,D,U,I,A,21,a[59]),I=c(I,S,D,U,g,6,a[60]),U=c(U,I,S,D,_,10,a[61]),D=c(D,U,I,S,p,15,a[62]),S=c(S,D,U,I,k,21,a[63]),o[0]=o[0]+I|0,o[1]=o[1]+S|0,o[2]=o[2]+D|0,o[3]=o[3]+U|0},_doFinalize:function(){var t=this._data,r=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;r[i>>>5]|=128<<24-i%32;var o=e.floor(n/4294967296),s=n;r[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),t.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,l=a.words,f=0;f<4;f++){var u=l[f];l[f]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return a},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function f(e,t,r,n,i,o,s){var a=e+(t&r|~t&n)+i+s;return(a<<o|a>>>32-o)+t}function u(e,t,r,n,i,o,s){var a=e+(t&n|r&~n)+i+s;return(a<<o|a>>>32-o)+t}function h(e,t,r,n,i,o,s){var a=e+(t^r^n)+i+s;return(a<<o|a>>>32-o)+t}function c(e,t,r,n,i,o,s){var a=e+(r^(t|~n))+i+s;return(a<<o|a>>>32-o)+t}t.MD5=o._createHelper(l),t.HmacMD5=o._createHmacHelper(l)}(Math),n.MD5)},682:function(e){e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(r){!t.hasOwnProperty(r)||null===t[r]||"object"!=typeof t[r]&&"function"!=typeof t[r]||Object.isFrozen(t[r])||e(t[r])})),t}},645:function(e,t){t.read=function(e,t,r,n,i){var o,s,a=8*i-n-1,l=(1<<a)-1,f=l>>1,u=-7,h=r?i-1:0,c=r?-1:1,p=e[t+h];for(h+=c,o=p&(1<<-u)-1,p>>=-u,u+=a;u>0;o=256*o+e[t+h],h+=c,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=n;u>0;s=256*s+e[t+h],h+=c,u-=8);if(0===o)o=1-f;else{if(o===l)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=f}return(p?-1:1)*s*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var s,a,l,f=8*o-i-1,u=(1<<f)-1,h=u>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),(t+=s+h>=1?c/l:c*Math.pow(2,1-h))*l>=2&&(s++,l/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(t*l-1)*Math.pow(2,i),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[r+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,f+=i;f>0;e[r+p]=255&s,p+=d,s/=256,f-=8);e[r+p-d]|=128*g}},470:function(e){"use strict";function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",i=0,o=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(o===a-1||1===s);else if(o!==a-1&&2===s){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var l=n.lastIndexOf("/");if(l!==n.length-1){-1===l?(n="",i=0):i=(n=n.slice(0,l)).length-1-n.lastIndexOf("/"),o=a,s=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=a,s=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,a):n=e.slice(o+1,a),i=a-o-1;o=a,s=0}else 46===r&&-1!==s?++s:s=-1}return n}var n={resolve:function(){for(var e,n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s;o>=0?s=arguments[o]:(void 0===e&&(e=process.cwd()),s=e),t(s),0!==s.length&&(n=s+"/"+n,i=47===s.charCodeAt(0))}return n=r(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=n.resolve(e))===(r=n.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,s=o-i,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var l=r.length-a,f=s<l?s:l,u=-1,h=0;h<=f;++h){if(h===f){if(l>f){if(47===r.charCodeAt(a+h))return r.slice(a+h+1);if(0===h)return r.slice(a+h)}else s>f&&(47===e.charCodeAt(i+h)?u=h:0===h&&(u=0));break}var c=e.charCodeAt(i+h);if(c!==r.charCodeAt(a+h))break;47===c&&(u=h)}var p="";for(h=i+u+1;h<=o;++h)h!==o&&47!==e.charCodeAt(h)||(0===p.length?p+="..":p+="/..");return p.length>0?p+r.slice(a+u):(a+=u,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,i=-1,o=!0,s=e.length-1;s>=1;--s)if(47===(r=e.charCodeAt(s))){if(!o){i=s;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,i=0,o=-1,s=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var a=r.length-1,l=-1;for(n=e.length-1;n>=0;--n){var f=e.charCodeAt(n);if(47===f){if(!s){i=n+1;break}}else-1===l&&(s=!1,l=n+1),a>=0&&(f===r.charCodeAt(a)?-1==--a&&(o=n):(a=-1,o=l))}return i===o?o=l:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){i=n+1;break}}else-1===o&&(s=!1,o=n+1);return-1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var r=-1,n=0,i=-1,o=!0,s=0,a=e.length-1;a>=0;--a){var l=e.charCodeAt(a);if(47!==l)-1===i&&(o=!1,i=a+1),46===l?-1===r?r=a:1!==s&&(s=1):-1!==r&&(s=-1);else if(!o){n=a+1;break}}return-1===r||-1===i||0===s||1===s&&r===i-1&&r===n+1?"":e.slice(r,i)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,i=e.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var s=-1,a=0,l=-1,f=!0,u=e.length-1,h=0;u>=n;--u)if(47!==(i=e.charCodeAt(u)))-1===l&&(f=!1,l=u+1),46===i?-1===s?s=u:1!==h&&(h=1):-1!==s&&(h=-1);else if(!f){a=u+1;break}return-1===s||-1===l||0===h||1===h&&s===l-1&&s===a+1?-1!==l&&(r.base=r.name=0===a&&o?e.slice(1,l):e.slice(a,l)):(0===a&&o?(r.name=e.slice(1,s),r.base=e.slice(1,l)):(r.name=e.slice(a,s),r.base=e.slice(a,l)),r.ext=e.slice(s,l)),a>0?r.dir=e.slice(0,a-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n},480:function(){},376:function(e,t,r){"use strict";r.r(t),r.d(t,{ALWAYS:function(){return I},DECIMAL_FIT:function(){return D},DECIMAL_ROUND:function(){return S},Encoder:function(){return O},FLOAT32_OPTIONS:function(){return n.FLOAT32_OPTIONS},NEVER:function(){return B},Packr:function(){return y},REUSE_BUFFER_MODE:function(){return U},addExtension:function(){return v},encode:function(){return A},pack:function(){return E}});var n=r(395),i=r(764).lW;let o,s,a;try{o=new TextEncoder}catch(e){}const l=void 0!==i,f=l?i.allocUnsafeSlow:Uint8Array,u=l?i:Uint8Array,h=l?4294967296:2144337920;let c,p,d,g=0;const m=Symbol("record-id");class y extends n.Unpackr{constructor(e){let t,r,i,l,y;super(e),this.offset=0;let w=0,b=u.prototype.utf8Write?function(e,t,r){return c.utf8Write(e,t,r)}:!(!o||!o.encodeInto)&&function(e,t){return o.encodeInto(e,c.subarray(t)).written},v=this;e||(e={});let _=e&&e.sequential,E=e.structures||e.saveStructures,A=e.maxSharedStructures;if(null==A&&(A=E?32:0),A>8160)throw new Error("Maximum maxSharedStructure is 8160");let O=e.maxOwnStructures;null==O&&(O=E?32:64),_&&!e.saveStructures&&(this.structures=[]);let B=A>32||O+A>64,I=A+64,S=A+O+64;if(S>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let D=[],F=0,x=0;this.pack=this.encode=function(e,n){if(c||(c=new f(8192),p=new DataView(c.buffer,0,8192),g=0),d=c.length-10,d-g<2048?(c=new f(c.length),p=new DataView(c.buffer,0,c.length),d=c.length-10,g=0):g=g+7&2147483640,t=g,y=v.structuredClone?new Map:null,r=v.structures,r){r.uninitialized&&(r=v._mergeStructures(v.getStructures()));let e=r.sharedLength||0;if(e>A)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let t=0;t<e;t++){let e=r[t];if(!e)continue;let n,i=r.transitions;for(let t=0,r=e.length;t<r;t++){let r=e[t];n=i[r],n||(n=i[r]=Object.create(null)),i=n}i[m]=t+64}w=e}_||(r.nextId=e+64)}i&&(i=!1),l=r||[];try{if(T(e),v.offset=g,y&&y.idsToInsert){g+=6*y.idsToInsert.length,g>d&&C(g),v.offset=g;let e=function(e,t){let r,n=6*t.length,i=e.length-n;t.sort(((e,t)=>e.offset>t.offset?1:-1));for(;r=t.pop();){let t=r.offset,o=r.id;e.copyWithin(t+n,t,i),n-=6;let s=t+n;e[s++]=214,e[s++]=105,e[s++]=o>>24,e[s++]=o>>16&255,e[s++]=o>>8&255,e[s++]=255&o,i=t}return e}(c.subarray(t,g),y.idsToInsert);return y=null,e}return n===U?(c.start=t,c.end=g,c):c.subarray(t,g)}finally{if(r){if(x<10&&x++,F>1e4)r.transitions=null,x=0,F=0,D.length>0&&(D=[]);else if(D.length>0&&!_){for(let e=0,t=D.length;e<t;e++)D[e][m]=0;D=[]}if(i&&v.saveStructures){let n=r.sharedLength||A;r.length>n&&(r=r.slice(0,n));let i=c.subarray(t,g);return!1===v.saveStructures(r,w)?(v._mergeStructures(v.getStructures()),v.pack(e)):(w=n,i)}}}};const T=e=>{g>d&&(c=C(g));var r,i=typeof e;if("string"===i){let t,n=e.length;t=n<32?1:n<256?2:n<65536?3:5;let i=3*n;if(g+i>d&&(c=C(g+i)),n<64||!b){let i,o,s,a=g+t;for(i=0;i<n;i++)o=e.charCodeAt(i),o<128?c[a++]=o:o<2048?(c[a++]=o>>6|192,c[a++]=63&o|128):55296==(64512&o)&&56320==(64512&(s=e.charCodeAt(i+1)))?(o=65536+((1023&o)<<10)+(1023&s),i++,c[a++]=o>>18|240,c[a++]=o>>12&63|128,c[a++]=o>>6&63|128,c[a++]=63&o|128):(c[a++]=o>>12|224,c[a++]=o>>6&63|128,c[a++]=63&o|128);r=a-g-t}else r=b(e,g+t,i);r<32?c[g++]=160|r:r<256?(t<2&&c.copyWithin(g+2,g+1,g+1+r),c[g++]=217,c[g++]=r):r<65536?(t<3&&c.copyWithin(g+3,g+2,g+2+r),c[g++]=218,c[g++]=r>>8,c[g++]=255&r):(t<5&&c.copyWithin(g+5,g+3,g+3+r),c[g++]=219,p.setUint32(g,r),g+=4),g+=r}else if("number"===i)if(e>>>0===e)e<64?c[g++]=e:e<256?(c[g++]=204,c[g++]=e):e<65536?(c[g++]=205,c[g++]=e>>8,c[g++]=255&e):(c[g++]=206,p.setUint32(g,e),g+=4);else if(e>>0===e)e>=-32?c[g++]=256+e:e>=-128?(c[g++]=208,c[g++]=e+256):e>=-32768?(c[g++]=209,p.setInt16(g,e),g+=2):(c[g++]=210,p.setInt32(g,e),g+=4);else{let t;if((t=this.useFloat32)>0&&e<4294967296&&e>=-2147483648){let r;if(c[g++]=202,p.setFloat32(g,e),t<4||(r=e*n.mult10[(127&c[g])<<1|c[g+1]>>7])>>0===r)return void(g+=4);g--}c[g++]=203,p.setFloat64(g,e),g+=8}else if("object"===i)if(e){if(y){let r=y.get(e);if(r){if(!r.id){let e=y.idsToInsert||(y.idsToInsert=[]);r.id=e.push(r)}return c[g++]=214,c[g++]=112,p.setUint32(g,r.id),void(g+=4)}y.set(e,{offset:g-t})}let n=e.constructor;if(n===Object)R(e,!0);else if(n===Array){(r=e.length)<16?c[g++]=144|r:r<65536?(c[g++]=220,c[g++]=r>>8,c[g++]=255&r):(c[g++]=221,p.setUint32(g,r),g+=4);for(let t=0;t<r;t++)T(e[t])}else if(n===Map){(r=e.size)<16?c[g++]=128|r:r<65536?(c[g++]=222,c[g++]=r>>8,c[g++]=255&r):(c[g++]=223,p.setUint32(g,r),g+=4);for(let[t,r]of e)T(t),T(r)}else{for(let t=0,r=s.length;t<r;t++){if(e instanceof a[t]){let r=s[t];if(r.write)return r.type&&(c[g++]=212,c[g++]=r.type,c[g++]=0),void T(r.write.call(this,e));let n,i=c,o=p,a=g;c=null;try{n=r.pack.call(this,e,(e=>(c=i,i=null,g+=e,g>d&&C(g),{target:c,targetView:p,position:g-e})),T)}finally{i&&(c=i,p=o,g=a,d=c.length-10)}return void(n&&(n.length+g>d&&C(n.length+g),g=k(n,c,g,r.type)))}}R(e,!e.hasOwnProperty)}}else c[g++]=192;else if("boolean"===i)c[g++]=e?195:194;else if("bigint"===i){if(e<BigInt(1)<<BigInt(63)&&e>=-(BigInt(1)<<BigInt(63)))c[g++]=211,p.setBigInt64(g,e);else if(e<BigInt(1)<<BigInt(64)&&e>0)c[g++]=207,p.setBigUint64(g,e);else{if(!this.largeBigIntToFloat)throw new RangeError(e+" was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");c[g++]=203,p.setFloat64(g,Number(e))}g+=8}else if("undefined"===i)this.encodeUndefinedAsNil?c[g++]=192:(c[g++]=212,c[g++]=0,c[g++]=0);else{if("function"!==i)throw new Error("Unknown type: "+i);T(this.writeFunction&&this.writeFunction())}},R=!1===this.useRecords?this.variableMapSize?e=>{let t,r=Object.keys(e),n=r.length;n<16?c[g++]=128|n:n<65536?(c[g++]=222,c[g++]=n>>8,c[g++]=255&n):(c[g++]=223,p.setUint32(g,n),g+=4);for(let i=0;i<n;i++)T(t=r[i]),T(e[t])}:(e,r)=>{c[g++]=222;let n=g-t;g+=2;let i=0;for(let t in e)(r||e.hasOwnProperty(t))&&(T(t),T(e[t]),i++);c[n+++t]=i>>8,c[n+t]=255&i}:e=>{let t,r=Object.keys(e),n=l.transitions||(l.transitions=Object.create(null)),o=0;for(let e=0,i=r.length;e<i;e++){let i=r[e];t=n[i],t||(t=n[i]=Object.create(null),o++),n=t}let s=n[m];if(s)s>=96&&B?(c[g++]=96+(31&(s-=96)),c[g++]=s>>5):c[g++]=s;else{s=l.nextId,s||(s=64),s<I&&this.shouldShareStructure&&!this.shouldShareStructure(r)?(s=l.nextOwnId,s<S||(s=I),l.nextOwnId=s+1):(s>=S&&(s=I),l.nextId=s+1);let e=r.highByte=s>=96&&B?s-96>>5:-1;n[m]=s,l[s-64]=r,s<I?(r.isShared=!0,l.sharedLength=s-63,i=!0,e>=0?(c[g++]=96+(31&s),c[g++]=e):c[g++]=s):(e>=0?(c[g++]=213,c[g++]=114,c[g++]=96+(31&s),c[g++]=e):(c[g++]=212,c[g++]=114,c[g++]=s),o&&(F+=x*o),D.length>=O&&(D.shift()[m]=0),D.push(n),T(r))}for(let t=0,n=r.length;t<n;t++)T(e[r[t]])},C=e=>{let r;if(e>16777216){if(e-t>h)throw new Error("Packed buffer would be larger than maximum buffer size");r=Math.min(h,4096*Math.round(Math.max((e-t)*(e>67108864?1.25:2),16777216)/4096))}else r=1+(Math.max(e-t<<2,c.length-1)>>12)<<12;let n=new f(r);return p=new DataView(n.buffer,0,r),c.copy?c.copy(n,0,t,e):n.set(c.slice(t,e)),g-=t,t=0,d=n.length-10,c=n}}useBuffer(e){c=e,p=new DataView(c.buffer,c.byteOffset,c.byteLength),g=0}}function w(e,t,r,n){let i=e.byteLength;if(i+1<256){var{target:o,position:s}=r(4+i);o[s++]=199,o[s++]=i+1}else if(i+1<65536){var{target:o,position:s}=r(5+i);o[s++]=200,o[s++]=i+1>>8,o[s++]=i+1&255}else{var{target:o,position:s,targetView:a}=r(7+i);o[s++]=201,a.setUint32(s,i+1),s+=4}o[s++]=116,o[s++]=t,o.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),s)}function b(e,t){let r=e.byteLength;var n,i;if(r<256){var{target:n,position:i}=t(r+2);n[i++]=196,n[i++]=r}else if(r<65536){var{target:n,position:i}=t(r+3);n[i++]=197,n[i++]=r>>8,n[i++]=255&r}else{var{target:n,position:i,targetView:o}=t(r+5);n[i++]=198,o.setUint32(i,r),i+=4}n.set(e,i)}function k(e,t,r,n){let i=e.length;switch(i){case 1:t[r++]=212;break;case 2:t[r++]=213;break;case 4:t[r++]=214;break;case 8:t[r++]=215;break;case 16:t[r++]=216;break;default:i<256?(t[r++]=199,t[r++]=i):i<65536?(t[r++]=200,t[r++]=i>>8,t[r++]=255&i):(t[r++]=201,t[r++]=i>>24,t[r++]=i>>16&255,t[r++]=i>>8&255,t[r++]=255&i)}return t[r++]=n,t.set(e,r),r+=i}function v(e){if(e.Class){if(!e.pack&&!e.write)throw new Error("Extension has no pack or write function");if(e.pack&&!e.type)throw new Error("Extension has no type (numeric code to identify the extension)");a.unshift(e.Class),s.unshift(e)}(0,n.addExtension)(e)}a=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,n.C1Type],s=[{pack(e,t){let r=e.getTime()/1e3;if((this.useTimestamp32||0===e.getMilliseconds())&&r>=0&&r<4294967296){let{target:e,targetView:n,position:i}=t(6);e[i++]=214,e[i++]=255,n.setUint32(i,r)}else if(r>0&&r<17179869184){let{target:n,targetView:i,position:o}=t(10);n[o++]=215,n[o++]=255,i.setUint32(o,4e6*e.getMilliseconds()+(r/1e3/4294967296>>0)),i.setUint32(o+4,r)}else{let{target:n,targetView:i,position:o}=t(15);n[o++]=199,n[o++]=12,n[o++]=255,i.setUint32(o,1e6*e.getMilliseconds()),i.setBigInt64(o+4,BigInt(Math.floor(r)))}}},{pack(e,t,r){let n=Array.from(e),{target:i,position:o}=t(this.structuredClone?3:0);this.structuredClone&&(i[o++]=212,i[o++]=115,i[o++]=0),r(n)}},{pack(e,t,r){let{target:n,position:i}=t(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=101,n[i++]=0),r([e.name,e.message])}},{pack(e,t,r){let{target:n,position:i}=t(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=120,n[i++]=0),r([e.source,e.flags])}},{pack(e,t){this.structuredClone?w(e,16,t):b(l?i.from(e):new Uint8Array(e),t)}},{pack(e,t){let r=e.constructor;r!==u&&this.structuredClone?w(e,n.typedArrays.indexOf(r.name),t):b(e,t)}},{pack(e,t){let{target:r,position:n}=t(1);r[n]=193}}];let _=new y({useRecords:!1});const E=_.pack,A=_.pack,O=y,{NEVER:B,ALWAYS:I,DECIMAL_ROUND:S,DECIMAL_FIT:D}=n.FLOAT32_OPTIONS,U=1e3},395:function(e,t,r){"use strict";var n,i,o;r.r(t),r.d(t,{C1:function(){return k},C1Type:function(){return b},Decoder:function(){return te},FLOAT32_OPTIONS:function(){return se},Unpackr:function(){return _},addExtension:function(){return Q},checkedRead:function(){return A},clearSource:function(){return X},decode:function(){return oe},getPosition:function(){return E},mapsAsObjects:function(){return ee},mult10:function(){return q},read:function(){return B},roundFloat32:function(){return fe},setExtractor:function(){return C},typedArrays:function(){return W},unpack:function(){return ne},unpackMultiple:function(){return ie},useRecords:function(){return Z}});try{n=new TextDecoder}catch(e){}var s=0;const a=[];var l,f,u,h,c=a,p=0,d={},g=0,m=0,y=[],w={useRecords:!1,mapsAsObjects:!0};class b{}const k=new b;k.name="MessagePack 0xC1";var v=!1;class _{constructor(e){e&&(!1===e.useRecords&&void 0===e.mapsAsObjects&&(e.mapsAsObjects=!0),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0)),Object.assign(this,e)}unpack(e,t){if(i)return J((()=>(X(),this?this.unpack(e,t):_.prototype.unpack.call(w,e,t))));if(o=t>-1?t:e.length,s=0,p=0,m=0,f=null,c=a,i=e,h=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength)),this){if(d=this,this.structures)return l=this.structures,A();(!l||l.length>0)&&(l=[])}else d=w,(!l||l.length>0)&&(l=[]);return A()}unpackMultiple(e,t){let r,n=0;try{v=!0;let i=e.length,o=this?this.unpack(e,i):re.unpack(e,i);if(!t){for(r=[o];s<i;)n=s,r.push(A());return r}for(t(o);s<i;)if(n=s,!1===t(A()))return}catch(e){throw e.lastPosition=n,e.values=r,e}finally{v=!1,X()}}_mergeStructures(e,t){for(let t=0,r=(e=e||[]).length;t<r;t++){let r=e[t];r&&(r.isShared=!0,t>=32&&(r.highByte=t-32>>5))}e.sharedLength=e.length;for(let r in t||[])if(r>=0){let n=e[r],i=t[r];i&&(n&&((e.restoreStructures||(e.restoreStructures=[]))[r]=n),e[r]=i)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function E(){return s}function A(){try{if(!d.trusted&&!v){let e=l.sharedLength||0;e<l.length&&(l.length=e)}let e=B();if(s==o)l.restoreStructures&&O(),l=null,i=null,u&&(u=null);else{if(s>o){let e=new Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}if(!v)throw new Error("Data read, but end of buffer not reached")}return e}catch(e){throw l.restoreStructures&&O(),X(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer"))&&(e.incomplete=!0),e}}function O(){for(let e in l.restoreStructures)l[e]=l.restoreStructures[e];l.restoreStructures=null}function B(){let e=i[s++];if(e<160){if(e<128){if(e<64)return e;{let t=l[63&e]||d.getStructures&&U()[63&e];return t?(t.read||(t.read=S(t,63&e)),t.read()):e}}if(e<144){if(e-=128,d.mapsAsObjects){let t={};for(let r=0;r<e;r++)t[Y()]=B();return t}{let t=new Map;for(let r=0;r<e;r++)t.set(B(),B());return t}}{e-=144;let t=new Array(e);for(let r=0;r<e;r++)t[r]=B();return t}}if(e<192){let t=e-160;if(m>=s)return f.slice(s-g,(s+=t)-g);if(0==m&&o<140){let e=t<16?$(t):L(t);if(null!=e)return e}return F(t)}{let t;switch(e){case 192:return null;case 193:return k;case 194:return!1;case 195:return!0;case 196:return j(i[s++]);case 197:return t=h.getUint16(s),s+=2,j(t);case 198:return t=h.getUint32(s),s+=4,j(t);case 199:return z(i[s++]);case 200:return t=h.getUint16(s),s+=2,z(t);case 201:return t=h.getUint32(s),s+=4,z(t);case 202:if(t=h.getFloat32(s),d.useFloat32>2){let e=q[(127&i[s])<<1|i[s+1]>>7];return s+=4,(e*t+(t>0?.5:-.5)>>0)/e}return s+=4,t;case 203:return t=h.getFloat64(s),s+=8,t;case 204:return i[s++];case 205:return t=h.getUint16(s),s+=2,t;case 206:return t=h.getUint32(s),s+=4,t;case 207:return d.uint64AsNumber?72057594037927940*i[s++]+281474976710656*i[s++]+1099511627776*i[s++]+4294967296*i[s++]+16777216*i[s++]+(i[s++]<<16)+(i[s++]<<8)+i[s++]:(t=h.getBigUint64(s),s+=8,t);case 208:return h.getInt8(s++);case 209:return t=h.getInt16(s),s+=2,t;case 210:return t=h.getInt32(s),s+=4,t;case 211:return t=h.getBigInt64(s),s+=8,t;case 212:if(t=i[s++],114==t)return G(63&i[s++]);{let e=y[t];if(e)return e.read?(s++,e.read(B())):e.noBuffer?(s++,e()):e(i.subarray(s,++s));throw new Error("Unknown extension "+t)}case 213:return t=i[s],114==t?(s++,G(63&i[s++],i[s++])):z(2);case 214:return z(4);case 215:return z(8);case 216:return z(16);case 217:return t=i[s++],m>=s?f.slice(s-g,(s+=t)-g):x(t);case 218:return t=h.getUint16(s),m>=(s+=2)?f.slice(s-g,(s+=t)-g):T(t);case 219:return t=h.getUint32(s),m>=(s+=4)?f.slice(s-g,(s+=t)-g):R(t);case 220:return t=h.getUint16(s),s+=2,V(t);case 221:return t=h.getUint32(s),s+=4,V(t);case 222:return t=h.getUint16(s),s+=2,M(t);case 223:return t=h.getUint32(s),s+=4,M(t);default:if(e>=224)return e-256;if(void 0===e){let e=new Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}throw new Error("Unknown MessagePack token "+e)}}}const I=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function S(e,t){function r(){if(r.count++>2){let r=e.read=new Function("r","return function(){return {"+e.map((e=>I.test(e)?e+":r()":"["+JSON.stringify(e)+"]:r()")).join(",")+"}}")(B);return 0===e.highByte&&(e.read=D(t,e.read)),r()}let n={};for(let t=0,r=e.length;t<r;t++){n[e[t]]=B()}return n}return r.count=0,0===e.highByte?D(t,r):r}const D=(e,t)=>function(){let r=i[s++];if(0===r)return t();let n=e<32?-(e+(r<<5)):e+(r<<5),o=l[n]||U()[n];if(!o)throw new Error("Record id is not defined for "+n);return o.read||(o.read=S(o,e)),o.read()};function U(){let e=J((()=>(i=null,d.getStructures())));return l=d._mergeStructures(e,l)}var F=N,x=N,T=N,R=N;function C(e){function t(t){return function(r){let n=c[p++];if(null==n){let r=e(s-t,o,i);if("string"==typeof r)n=r,c=a;else if(p=1,m=1,n=(c=r)[0],void 0===n)throw new Error("Unexpected end of buffer")}let l=n.length;return l<=r?(s+=r,n):(f=n,g=s,m=s+l,s+=r,n.slice(0,r))}}F=t(1),x=t(2),T=t(3),R=t(5)}function N(e){let t;if(e<16&&(t=$(e)))return t;if(e>64&&n)return n.decode(i.subarray(s,s+=e));const r=s+e,o=[];for(t="";s<r;){const e=i[s++];if(0==(128&e))o.push(e);else if(192==(224&e)){const t=63&i[s++];o.push((31&e)<<6|t)}else if(224==(240&e)){const t=63&i[s++],r=63&i[s++];o.push((31&e)<<12|t<<6|r)}else if(240==(248&e)){let t=(7&e)<<18|(63&i[s++])<<12|(63&i[s++])<<6|63&i[s++];t>65535&&(t-=65536,o.push(t>>>10&1023|55296),t=56320|1023&t),o.push(t)}else o.push(e);o.length>=4096&&(t+=P.apply(String,o),o.length=0)}return o.length>0&&(t+=P.apply(String,o)),t}function V(e){let t=new Array(e);for(let r=0;r<e;r++)t[r]=B();return t}function M(e){if(d.mapsAsObjects){let t={};for(let r=0;r<e;r++)t[Y()]=B();return t}{let t=new Map;for(let r=0;r<e;r++)t.set(B(),B());return t}}var P=String.fromCharCode;function L(e){let t=s,r=new Array(e);for(let n=0;n<e;n++){const e=i[s++];if((128&e)>0)return void(s=t);r[n]=e}return P.apply(String,r)}function $(e){if(e<4){if(e<2){if(0===e)return"";{let e=i[s++];return(128&e)>1?void(s-=1):P(e)}}{let t=i[s++],r=i[s++];if((128&t)>0||(128&r)>0)return void(s-=2);if(e<3)return P(t,r);let n=i[s++];return(128&n)>0?void(s-=3):P(t,r,n)}}{let t=i[s++],r=i[s++],n=i[s++],o=i[s++];if((128&t)>0||(128&r)>0||(128&n)>0||(128&o)>0)return void(s-=4);if(e<6){if(4===e)return P(t,r,n,o);{let e=i[s++];return(128&e)>0?void(s-=5):P(t,r,n,o,e)}}if(e<8){let a=i[s++],l=i[s++];if((128&a)>0||(128&l)>0)return void(s-=6);if(e<7)return P(t,r,n,o,a,l);let f=i[s++];return(128&f)>0?void(s-=7):P(t,r,n,o,a,l,f)}{let a=i[s++],l=i[s++],f=i[s++],u=i[s++];if((128&a)>0||(128&l)>0||(128&f)>0||(128&u)>0)return void(s-=8);if(e<10){if(8===e)return P(t,r,n,o,a,l,f,u);{let e=i[s++];return(128&e)>0?void(s-=9):P(t,r,n,o,a,l,f,u,e)}}if(e<12){let h=i[s++],c=i[s++];if((128&h)>0||(128&c)>0)return void(s-=10);if(e<11)return P(t,r,n,o,a,l,f,u,h,c);let p=i[s++];return(128&p)>0?void(s-=11):P(t,r,n,o,a,l,f,u,h,c,p)}{let h=i[s++],c=i[s++],p=i[s++],d=i[s++];if((128&h)>0||(128&c)>0||(128&p)>0||(128&d)>0)return void(s-=12);if(e<14){if(12===e)return P(t,r,n,o,a,l,f,u,h,c,p,d);{let e=i[s++];return(128&e)>0?void(s-=13):P(t,r,n,o,a,l,f,u,h,c,p,d,e)}}{let g=i[s++],m=i[s++];if((128&g)>0||(128&m)>0)return void(s-=14);if(e<15)return P(t,r,n,o,a,l,f,u,h,c,p,d,g,m);let y=i[s++];return(128&y)>0?void(s-=15):P(t,r,n,o,a,l,f,u,h,c,p,d,g,m,y)}}}}}function j(e){return d.copyBuffers?Uint8Array.prototype.slice.call(i,s,s+=e):i.subarray(s,s+=e)}function z(e){let t=i[s++];if(y[t])return y[t](i.subarray(s,s+=e));throw new Error("Unknown extension type "+t)}var K=new Array(4096);function Y(){let e=i[s++];if(!(e>=160&&e<192))return s--,B();if(e-=160,m>=s)return f.slice(s-g,(s+=e)-g);if(!(0==m&&o<180))return F(e);let t,r=4095&(e<<5^(e>1?h.getUint16(s):e>0?i[s]:0)),n=K[r],a=s,l=s+e-3,u=0;if(n&&n.bytes==e){for(;a<l;){if(t=h.getUint32(a),t!=n[u++]){a=1879048192;break}a+=4}for(l+=3;a<l;)if(t=i[a++],t!=n[u++]){a=1879048192;break}if(a===l)return s=a,n.string;l-=3,a=s}for(n=[],K[r]=n,n.bytes=e;a<l;)t=h.getUint32(a),n.push(t),a+=4;for(l+=3;a<l;)t=i[a++],n.push(t);let c=e<16?$(e):L(e);return n.string=null!=c?c:F(e)}const G=(e,t)=>{var r=B();let n=e;void 0!==t&&(e=e<32?-((t<<5)+e):(t<<5)+e,r.highByte=t);let i=l[e];return i&&i.isShared&&((l.restoreStructures||(l.restoreStructures=[]))[e]=i),l[e]=r,r.read=S(r,n),r.read()};var H="object"==typeof self?self:global;y[0]=()=>{},y[0].noBuffer=!0,y[101]=()=>{let e=B();return(H[e[0]]||Error)(e[1])},y[105]=e=>{let t=h.getUint32(s-4);u||(u=new Map);let r,n=i[s];r=n>=144&&n<160||220==n||221==n?[]:{};let o={target:r};u.set(t,o);let a=B();return o.used?Object.assign(r,a):(o.target=a,a)},y[112]=e=>{let t=h.getUint32(s-4),r=u.get(t);return r.used=!0,r.target},y[115]=()=>new Set(B());const W=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map((e=>e+"Array"));function J(e){let t=o,r=s,n=p,a=g,y=m,w=f,b=c,k=u,_=new Uint8Array(i.slice(0,o)),E=l,A=l.slice(0,l.length),O=d,B=v,I=e();return o=t,s=r,p=n,g=a,m=y,f=w,c=b,u=k,i=_,v=B,(l=E).splice(0,l.length,...A),d=O,h=new DataView(i.buffer,i.byteOffset,i.byteLength),I}function X(){i=null,u=null,l=null}function Q(e){e.unpack?y[e.type]=e.unpack:y[e.type]=e}y[116]=e=>{let t=e[0],r=W[t];if(!r)throw new Error("Could not find typed array for code "+t);return new H[r](Uint8Array.prototype.slice.call(e,1).buffer)},y[120]=()=>{let e=B();return new RegExp(e[0],e[1])},y[255]=e=>{if(4==e.length)return new Date(1e3*(16777216*e[0]+(e[1]<<16)+(e[2]<<8)+e[3]));if(8==e.length)return new Date(((e[0]<<22)+(e[1]<<14)+(e[2]<<6)+(e[3]>>2))/1e6+1e3*(4294967296*(3&e[3])+16777216*e[4]+(e[5]<<16)+(e[6]<<8)+e[7]));if(12==e.length)return new Date(((e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3])/1e6+1e3*((128&e[4]?-281474976710656:0)+1099511627776*e[6]+4294967296*e[7]+16777216*e[8]+(e[9]<<16)+(e[10]<<8)+e[11]));throw new Error("Invalid timestamp length")};const q=new Array(147);for(let e=0;e<256;e++)q[e]=+("1e"+Math.floor(45.15-.30103*e));const Z=!1,ee=!0,te=_;var re=new _({useRecords:!1});const ne=re.unpack,ie=re.unpackMultiple,oe=re.unpack,se={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let ae=new Float32Array(1),le=new Uint8Array(ae.buffer,0,4);function fe(e){ae[0]=e;let t=q[(127&le[3])<<1|le[2]>>7];return(t*e+(e>0?.5:-.5)>>0)/t}},762:function(e){"use strict";e.exports=JSON.parse('{"0":{},"1":{"width":50,"height":50,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"2":{"width":75,"height":75,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"3":{"width":100,"height":100,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"4":{"width":150,"height":150,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"5":{"width":260,"height":300,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"6":{"width":310,"height":220,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"7":{"width":320,"height":250,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"8":{"width":480,"height":360,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"9":{"width":490,"height":500,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"10":{"width":600,"height":500,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"11":{"width":100,"height":150,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"12":{"width":490,"height":500,"mode":{"enlarge":false,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"13":{"width":600,"height":500,"mode":{"enlarge":false,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"14":{"width":450,"height":450,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"15":{"width":320,"height":240,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"16":{"width":320,"height":864,"mode":{"enlarge":false,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"17":{"width":144,"height":108,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"18":{"width":541,"height":361,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"19":{"width":140,"height":107,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"20":{"width":1024,"height":768,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"21":{"width":760,"height":570,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"22":{"width":55,"height":55,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"23":{"width":80,"height":80,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"24":{"width":225,"height":225,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"25":{"width":185,"height":185,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"26":{"width":384,"height":384,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"27":{"width":192,"height":400,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"28":{"width":300,"height":300,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"29":{"width":630,"height":630,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"30":{"width":720,"height":576,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"31":{"width":1280,"height":720,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"32":{"width":1920,"height":1080,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"33":{"width":210,"height":210,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"34":{"width":410,"height":410,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"35":{"width":640,"height":640,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"36":{"width":240,"height":160,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"37":{"width":660,"height":660,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"38":{"width":280,"height":280,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"39":{"width":90,"height":60,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"40":{"width":35,"height":35,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"41":{"width":92,"height":92,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"42":{"width":108,"height":73,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"43":{"width":168,"height":110,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"44":{"width":198,"height":98,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"45":{"width":180,"height":120,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"46":{"width":188,"height":298,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"47":{"width":90,"height":18,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"48":{"width":125,"height":170,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"49":{"width":960,"height":415,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"50":{"width":960,"height":540,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"51":{"width":640,"height":360,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"52":{"width":225,"height":126,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"53":{"width":150,"height":84,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"54":{"width":100,"height":56,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"55":{"width":50,"height":28,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"56":{"width":70,"height":48,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"57":{"width":770,"height":450,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"58":{"width":980,"height":120,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"59":{"width":430,"height":430,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"60":{"width":980,"height":980,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"61":{"width":880,"height":660,"mode":{"enlarge":false,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"62":{"width":660,"height":660,"mode":{"enlarge":false,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"63":{"width":160,"height":320,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"64":{"width":80,"height":160,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"65":{"width":90,"height":180,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"66":{"width":120,"height":120,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"67":{"width":70,"height":70,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"68":{"width":1200,"height":1200,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"69":{"width":800,"height":800,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"70":{"width":350,"height":350,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"71":{"width":480,"height":480,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"72":{"width":71,"height":100,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"73":{"width":528,"height":221,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":true,"faceDetection":false}},"74":{"width":440,"height":1470,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"75":{"width":411,"height":170,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"76":{"width":205,"height":170,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"77":{"width":205,"height":341,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"78":{"width":411,"height":341,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"79":{"width":615,"height":170,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"80":{"width":307,"height":341,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"81":{"width":90,"height":58,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"82":{"width":300,"height":250,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"83":{"width":200,"height":167,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"84":{"width":120,"height":100,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"85":{"width":60,"height":50,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"86":{"width":90,"height":58,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":0},"hotspot":false,"faceDetection":false}},"87":{"width":158,"height":210,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"88":{"width":158,"height":158,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"89":{"width":144,"height":81,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"90":{"width":100,"height":100,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"91":{"width":280,"height":210,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"92":{"width":315,"height":220,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"93":{"width":570,"height":340,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"94":{"width":120,"height":80,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"95":{"width":200,"height":140,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"96":{"width":665,"height":355,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"97":{"width":450,"height":300,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"98":{"width":180,"height":100,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"99":{"width":180,"height":180,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"100":{"width":260,"height":260,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"101":{"width":45,"height":45,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"102":{"width":208,"height":117,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"103":{"width":980,"height":345,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"104":{"width":150,"height":85,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"105":{"width":980,"height":552,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"106":{"width":220,"height":220,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"107":{"width":220,"height":800,"mode":{"enlarge":false,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"108":{"width":212,"height":310,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"109":{"width":137,"height":200,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"110":{"width":100,"height":100,"mode":{"enlarge":false,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"111":{"width":150,"height":150,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"112":{"width":630,"height":470,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"113":{"width":105,"height":70,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":0},"hotspot":false,"faceDetection":false}},"114":{"width":290,"height":218,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"115":{"width":130,"height":173,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"116":{"width":610,"height":305,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"117":{"width":406,"height":203,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"118":{"width":97,"height":73,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"119":{"width":290,"height":145,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"120":{"width":160,"height":230,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":20},"hotspot":false,"faceDetection":false}},"121":{"width":208,"height":117,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":50},"hotspot":false,"faceDetection":false}},"122":{"width":250,"height":90,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"123":{"width":250,"height":90,"mode":{"enlarge":false,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"124":{"width":1920,"height":1440,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":0},"hotspot":false,"faceDetection":false}},"125":{"width":225,"height":125,"mode":{"enlarge":false,"shrink":false,"mediaFill":{"x":50,"y":50},"hotspot":false,"faceDetection":false}},"126":{"width":25,"height":25,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"127":{"width":330,"height":800,"mode":{"enlarge":false,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"128":{"width":300,"height":190,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"129":{"width":145,"height":90,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"130":{"width":110,"height":90,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}},"131":{"width":110,"height":60,"mode":{"enlarge":true,"shrink":true,"mediaFill":false,"hotspot":false,"faceDetection":false}}}')},86:function(e){"use strict";e.exports=JSON.parse('{"0":"mka-00","1":"onetdb","2":"mka-02","3":"mka-03","4":"mka-04","5":"mka-05","6":"mka-06","7":"mka-07","8":"mka-08","9":"mka-09","10":"mka-0a","11":"mka-0b","12":"mka-0c","13":"mka-0d","14":"mka-0e","15":"mka-0f","16":"mka-10","17":"mka-11","18":"mka-12","19":"mka-13","20":"mka-14","21":"mka-15","22":"mka-16","23":"mka-17","24":"sympatia","25":"mka-19","26":"mka-1a","27":"mka-1b","28":"mka-1c","29":"mka-1d","30":"mka-1e","31":"mka-1f","32":"mka-20","33":"mka-21","34":"mka-22","35":"mka-23","36":"mka-24","37":"mka-25","38":"mka-26","39":"mka-27","40":"mka-28","41":"mka-29","42":"mka-2a","43":"mka-2b","44":"mka-2c","45":"mka-2d","46":"mka-2e","47":"mka-2f","48":"mka-30","49":"mka-31","50":"mka-32","51":"mka-33","52":"mka-34","53":"mka-35","54":"mka-36","55":"mka-37","56":"mka-38","57":"mka-39","58":"mka-3a","59":"mka-3b","60":"mka-3c","61":"mka-3d","62":"mka-3e","63":"mka-3f","64":"mka-40","65":"mka-41","254":"test","255":"mka-ff"}')},113:function(e){"use strict";e.exports=JSON.parse('{"transforms":{"0":{"name":"rotate","description":"Rotate image clockwise","args":[{"name":"angle","description":"Number of 90 degrees rotations to perform","type":"integer","minValue":0}]},"1":{"name":"blur","description":"Blur image","args":[{"name":"power","description":"Blur strength","type":"integer","default":10,"minValue":0,"maxValue":100}]},"2":{"name":"resize","description":"Resize image with preserving aspect ratio","args":[{"name":"width","description":"Target width (0 for perserve aspect ratio)","type":"integer","minValue":0},{"name":"height","description":"Target height (0 for perserve aspect ratio)","type":"integer","minValue":0},{"name":"scaleUp","description":"Enables enlarging image when one of sizes is set to 0","type":"boolean","default":true},{"name":"scaleDown","description":"Enables shrinking image when one of sizes is set to 0","type":"boolean","default":true}]},"3":{"name":"crop","description":"Crop image to given size","args":[{"name":"x","description":"The distance of the cropped image from the left edge of the image","type":"integer","minValue":0},{"name":"y","type":"integer","description":"The distance of the cropped image from the top edge of the image","minValue":0},{"name":"width","description":"Width of the cropped image","type":"integer","minValue":0},{"name":"height","type":"integer","description":"Height of the cropped image","minValue":0}]},"4":{"name":"grayscale","description":"Convert Image to grayscale","args":[]},"5":{"name":"resizeCropAuto","description":"Crop image automatically to given width and height","args":[{"name":"width","type":"integer","minValue":1},{"name":"height","type":"integer","minValue":1}]},"6":{"name":"setBackground","description":"Add background to image with alpha channel","args":[{"name":"red","type":"integer","minValue":0,"maxValue":255},{"name":"green","type":"integer","minValue":0,"maxValue":255},{"name":"blue","type":"integer","minValue":0,"maxValue":255},{"name":"alpha","type":"integer","minValue":0,"maxValue":255,"default":255}]},"7":{"name":"overlay","description":"Combine image with another one","args":[{"name":"uri","type":"string"},{"name":"position","type":"enum","values":{"0":"stretch","1":"top-left","2":"top-center","3":"top-right","4":"center-left","5":"center-center","6":"center-right","7":"bottom-left","8":"bottom-center","9":"bottom-right"},"default":0},{"name":"reverse","type":"boolean","default":false},{"name":"mode","type":"enum","values":{"0":"over","1":"in","2":"out","3":"atop","4":"xor","5":"plus","6":"minus","7":"add","8":"subtract","9":"difference","10":"divide","11":"multiply","12":"bumpmap","13":"copy","14":"copy-red","15":"copy-green","16":"copy-blue","17":"copy-opacity","18":"copy-cyan","19":"copy-magenta","20":"copy-yellow","21":"copy-black"},"default":0}]},"8":{"name":"hash","description":"Change path in url to hash","args":[{"name":"type","type":"enum","values":{"0":"md5","1":"sha1"},"default":0}]},"9":{"name":"setName","description":"Add file name to path","args":[{"name":"name","type":"string"},{"name":"len","default":6,"type":"integer"}]},"10":{"name":"keepAspectRatio","description":"It extends the picture to match given aspect ratio by adding blurred image of itself as background for empty areas","args":[{"name":"width","description":"Target image width","type":"integer"},{"name":"height","description":"Target image height","type":"integer"},{"name":"blurPower","description":"Blur strength","type":"integer","default":10,"minValue":0,"maxValue":100},{"name":"red","description":"Overlay color red channel","type":"integer","default":0,"minValue":0,"maxValue":255},{"name":"green","description":"Overlay color green channel","type":"integer","default":0,"minValue":0,"maxValue":255},{"name":"blue","description":"Overlay color blue channel","type":"integer","default":0,"minValue":0,"maxValue":255},{"name":"alpha","description":"Overlay color alpha channel","type":"integer","default":175,"minValue":0,"maxValue":255},{"name":"toleranceX","description":"A percent of width that can be removed to fit aspect ratio","type":"integer","default":0,"minValue":0,"maxValue":100},{"name":"toleranceY","description":"A percent of height that can be removed to fit aspect ratio","type":"integer","default":0,"minValue":0,"maxValue":100}]}},"params":{"0":{"name":"imageFormat","type":"enum","values":{"0":"original","1":"jpeg","2":"png","3":"bmp","4":"tiff","5":"webp","6":"avif"},"default":0},"1":{"name":"imageQuality","type":"enum","values":{"0":"low","1":"medium","2":"high","3":"very-high"},"default":1},"2":{"name":"animation","type":"boolean","default":true},"3":{"name":"autoOrient","type":"boolean","default":false}}}')}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){const e=r(334),t=r(20);self.addEventListener("fetch",(r=>{const{request:{url:n,destination:i}}=r,o=n.match(/^https:\/\/img.przegladsportowy.pl\/v\d\/(.*)/);if(o&&"image"===i){let n=null,i=null;try{const t=JSON.parse(e(o[1]));n=t.url,i=t.transformations}catch(e){console.error(e)}if(n&&i){const e=new URL(t(n,i));r.respondWith(fetch(e.toString(),{mode:"no-cors"}))}}}))}()}();
//# sourceMappingURL=image-worker.js.mapnkpUDAADNDhDNB-qTBc0EVs0CHN4AAaEwBg"
                                data-img-width="1100"
                                data-img-height="540"
                            

                            data-img-alt="Poznań - 16.01.2024. Pogoda na dziś"
                            data-gtm="driver_8"
                            >
                            

                            
                            <div class="driverItemLeadTitleWrapper">
                                <h3 class="driverItemTitle itemAnimation">Poznań - 16.01.2024. Pogoda na dziś</h3>
                                <p class="driverItemLead itemAnimation">

                                
                                </p>
                            </div>
                        </a>
                    </div>
                
                    
                        
                    
                    <div class="glide__slide driverItem">

                        <a href="https://wiadomosci.onet.pl/poznan/bandycki-napad-w-sylwestra-w-grodzisku-wielkopolskim-policja-ujela-sprawcow/nc4g644" class="driverItemContent"

                            
                                data-img-src="//ocdn.eu/pulscms-transforms/1/vrhk9kpTURBXy81M2QwMjM2ZTM0ODE1N2U0MTJjMTI4OTI2ODJkODNkZC5qcGeSlQMAFM0EsM0Co5MFzQRWzQIc3gABoTAB"
                                data-img-avif="//ocdn.eu/pulscms-transforms/1/0Muk9kpTURBXy81M2QwMjM2ZTM0ODE1N2U0MTJjMTI4OTI2ODJkODNkZC5qcGeSlQMAFM0EsM0Co5MFzQRWzQIc3gABoTAG"
                                data-img-width="1100"
                                data-img-height="540"
                            

                            data-img-alt="Bandycki napad w Sylwestra w Grodzisku Wielkopolskim. Policja ujęła sprawców"
                            data-gtm="driver_9"
                            >
                            

                            
                            <div class="driverItemLeadTitleWrapper">
                                <h3 class="driverItemTitle itemAnimation">Bandycki napad w Sylwestra w Grodzisku Wielkopolskim. Policja ujęła sprawców</h3>
                                <p class="driverItemLead itemAnimation">

                                
                                </p>
                            </div>
                        </a>
                    </div>
                
                    
                        
                    
                    <div class="glide__slide driverItem">

                        <a href="https://wiadomosci.onet.pl/poznan/sedziowie-z-poznania-zawieszeni-jest-decyzja-adama-bodnara/qb2fz5y" class="driverItemContent"

                            
                                data-img-src="//ocdn.eu/pulscms-transforms/1/Hyzk9kuTURBXy9lNTkwZWY4MC1hNWE5LTRjM2MtODcxZC1mNDJkNTYwNmEwMjguanBlZ5KVAwDMus0XcM0NMJMFzQRWzQIc3gABoTAB"
                                data-img-avif="//ocdn.eu/pulscms-transforms/1/vvVk9kuTURBXy9lNTkwZWY4MC1hNWE5LTRjM2MtODcxZC1mNDJkNTYwNmEwMjguanBlZ5KVAwDMus0XcM0NMJMFzQRWzQIc3gABoTAG"
                                data-img-width="1100"
                                data-img-height="540"
                            

                            data-img-alt="Sędziowie z Poznania zawieszeni. Jest decyzja ministra Bodnara"
                            data-gtm="driver_10"
                            >
                            

                            
                            <div class="driverItemLeadTitleWrapper">
                                <h3 class="driverItemTitle itemAnimation">Sędziowie z Poznania zawieszeni. Jest decyzja ministra Bodnara</h3>
                                <p class="driverItemLead itemAnimation">

                                
                                </p>
                            </div>
                        </a>
                    </div>
                
                </div>
            </div>
            
                <div class="glide__controls">
                    <div class="glide__bullets" data-glide-el="controls[nav]">
                        
                        <div class="glide__bullet" data-glide-dir="=0"></div>
                        
                        <div class="glide__bullet" data-glide-dir="=1"></div>
                        
                        <div class="glide__bullet" data-glide-dir="=2"></div>
                        
                        <div class="glide__bullet" data-glide-dir="=3"></div>
                        
                        <div class="glide__bullet" data-glide-dir="=4"></div>
                        
                        <div class="glide__bullet" data-glide-dir="=5"></div>
                        
                        <div class="glide__bullet" data-glide-dir="=6"></div>
                        
                        <div class="glide__bullet" data-glide-dir="=7"></div>
                        
                        <div class="glide__bullet" data-glide-dir="=8"></div>
                        
                        <div class="glide__bullet" data-glide-dir="=9"></div>
                        
                    </div>
                </div>
            
        </div>
    </div>

            
        </div>
        

        

        

        <section class="stream">

            
            
            


    <section class="wdgExtra">
        
            <div class="header">
                <h2 class="title" title="Redakcja Poleca">Redakcja Poleca</h2>
                    
            </div>
        
        
            

<div class="wdgBests boxWrapper">

    <a class="mediumNewsBox lpsItem" href="https://wiadomosci.onet.pl/poznan/pogoda-poznan-na-dzis-prognoza-pogody-15012024/fkppyxy" id="wdgBests_1"
        data-run-module="local/main.createSlot"
        data-slot-name="flat-natleft"
        data-slot-position="1"
        data-slot-img-width="390"
        data-slot-img-height="220"
        data-lps-url="href"
        data-classname-gallery="#photoIconBig"
        data-classname-video="#videoIconBig"
        >
        <div class="imageContainer">
            <div class="imageWrapper">
                
                    
                    <picture>
                        <source srcset="//ocdn.eu/pulscms-transforms/1/IWhk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBc0Bhszc3gABoTAG" type="image/avif">
                        <source srcset="//ocdn.eu/pulscms-transforms/1/uwak9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBc0Bhszc3gABoTAF" type="image/webp">
                        <img 
                            data-lps-img="src"
                            data-lps-title="alt" 
                            src="//ocdn.eu/pulscms-transforms/1/LQqk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBc0Bhszc3gABoTAB" 
                        />
                    </picture>
                    
                
            </div>
            
            <svg class="pictogram" data-lps-type style="display:none">
                <use></use>
            </svg>
            
        </div>
        <h3 class="title"><span class="" data-lps-inner-title>Poznań - 15.01.2024. Jaka będzie pogoda w mieście?</span></h3>

        <div class="other">
            <div class="native" style="display: none;" data-lps-partner></div>
            <div class="lpsLabel" style="display: none" data-lps-label></div>
        </div>
        
    </a>

    <a class="mediumNewsBox lpsItem" href="https://wiadomosci.onet.pl/poznan/pogoda-poznan-na-dzis-prognoza-pogody-14012024/l7xy32p" id="wdgBests_2"
        data-run-module="local/main.createSlot"
        data-slot-name="flat-natleft"
        data-slot-position="2"
        data-slot-img-width="390"
        data-slot-img-height="220"
        data-lps-url="href"
        data-classname-gallery="#photoIconBig"
        data-classname-video="#videoIconBig"
        >
        <div class="imageContainer">
            <div class="imageWrapper">
                
                    
                    <picture>
                        <source srcset="//ocdn.eu/pulscms-transforms/1/IWhk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBc0Bhszc3gABoTAG" type="image/avif">
                        <source srcset="//ocdn.eu/pulscms-transforms/1/uwak9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBc0Bhszc3gABoTAF" type="image/webp">
                        <img 
                            data-lps-img="src"
                            data-lps-title="alt" 
                            src="//ocdn.eu/pulscms-transforms/1/LQqk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBc0Bhszc3gABoTAB" 
                        />
                    </picture>
                    
                
            </div>
            
            <svg class="pictogram" data-lps-type style="display:none">
                <use></use>
            </svg>
            
        </div>
        <h3 class="title"><span class="" data-lps-inner-title>Poznań. Prognoza pogody w dniu 14.01.2024</span></h3>

        <div class="other">
            <div class="native" style="display: none;" data-lps-partner></div>
            <div class="lpsLabel" style="display: none" data-lps-label></div>
        </div>
        
    </a>

    <a class="mediumNewsBox lpsItem" href="https://wiadomosci.onet.pl/poznan/polityczka-od-zbigniewa-ziobry-z-lasow-panstwowych-poleciala-jako-pierwsza/7bv7r3y" id="wdgBests_3"
        data-run-module="local/main.createSlot"
        data-slot-name="flat-natleft"
        data-slot-position="3"
        data-slot-img-width="390"
        data-slot-img-height="220"
        data-lps-url="href"
        data-classname-gallery="#photoIconBig"
        data-classname-video="#videoIconBig"
        >
        <div class="imageContainer">
            <div class="imageWrapper">
                
                    
                    <picture>
                        <source srcset="//ocdn.eu/pulscms-transforms/1/LiGk9kpTURBXy9hNjM1YjNmYWRhNjg4NTU5ZjgxODQ3ZTg4NWYyMWM1OC5wbmeSlQMAAM0EsM0Co5MFzQGGzNzeAAGhMAY" type="image/avif">
                        <source srcset="//ocdn.eu/pulscms-transforms/1/oE5k9kpTURBXy9hNjM1YjNmYWRhNjg4NTU5ZjgxODQ3ZTg4NWYyMWM1OC5wbmeSlQMAAM0EsM0Co5MFzQGGzNzeAAGhMAU" type="image/webp">
                        <img 
                            data-lps-img="src"
                            data-lps-title="alt" 
                            src="//ocdn.eu/pulscms-transforms/1/fmTk9kpTURBXy9hNjM1YjNmYWRhNjg4NTU5ZjgxODQ3ZTg4NWYyMWM1OC5wbmeSlQMAAM0EsM0Co5MFzQGGzNzeAAGhMAE" 
                        />
                    </picture>
                    
                
            </div>
            
            <svg class="pictogram" data-lps-type style="display:none">
                <use></use>
            </svg>
            
        </div>
        <h3 class="title"><span class="" data-lps-inner-title>Polityczka od Zbigniewa Ziobry odwołana z Lasów Państwowych. Była odpowiedzialna za aferę z billboardami</span></h3>

        <div class="other">
            <div class="native" style="display: none;" data-lps-partner></div>
            <div class="lpsLabel" style="display: none" data-lps-label></div>
        </div>
        
    </a>

    <a class="mediumNewsBox lpsItem" href="https://wiadomosci.onet.pl/poznan/pogoda-poznan-na-dzis-prognoza-pogody-13012024/9k3v2pc" id="wdgBests_4"
        data-run-module="local/main.createSlot"
        data-slot-name="flat-natleft"
        data-slot-position="4"
        data-slot-img-width="390"
        data-slot-img-height="220"
        data-lps-url="href"
        data-classname-gallery="#photoIconBig"
        data-classname-video="#videoIconBig"
        >
        <div class="imageContainer">
            <div class="imageWrapper">
                
                    
                    <picture>
                        <source srcset="//ocdn.eu/pulscms-transforms/1/IWhk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBc0Bhszc3gABoTAG" type="image/avif">
                        <source srcset="//ocdn.eu/pulscms-transforms/1/uwak9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBc0Bhszc3gABoTAF" type="image/webp">
                        <img 
                            data-lps-img="src"
                            data-lps-title="alt" 
                            src="//ocdn.eu/pulscms-transforms/1/LQqk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBc0Bhszc3gABoTAB" 
                        />
                    </picture>
                    
                
            </div>
            
            <svg class="pictogram" data-lps-type style="display:none">
                <use></use>
            </svg>
            
        </div>
        <h3 class="title"><span class="" data-lps-inner-title>Poznań. Jaka pogoda czeka nas 13.01.2024?</span></h3>

        <div class="other">
            <div class="native" style="display: none;" data-lps-partner></div>
            <div class="lpsLabel" style="display: none" data-lps-label></div>
        </div>
        
    </a>

    <a class="mediumNewsBox lpsItem" href="https://wiadomosci.onet.pl/poznan/instytut-zachodni-w-poznaniu-nie-chcemy-byc-przystawka-pis-u/l8n74ft" id="wdgBests_5">
        <div class="imageContainer">
            <div class="imageWrapper">
                
                    
                    <picture>
                        <source srcset="//ocdn.eu/pulscms-transforms/1/AIKk9kpTURBXy8yMTQ5OWUzMjlhMmU5MGFjNTA1YzdhNGI3ZGMxZjk5My5qcGeSlQPNBF3Mic0NKc0HZ5MFzQGGzNzeAAGhMAY" type="image/avif">
                        <source srcset="//ocdn.eu/pulscms-transforms/1/xPCk9kpTURBXy8yMTQ5OWUzMjlhMmU5MGFjNTA1YzdhNGI3ZGMxZjk5My5qcGeSlQPNBF3Mic0NKc0HZ5MFzQGGzNzeAAGhMAU" type="image/webp">
                        <img 
                            data-lps-img="src"
                            data-lps-title="alt" 
                            src="//ocdn.eu/pulscms-transforms/1/qIhk9kpTURBXy8yMTQ5OWUzMjlhMmU5MGFjNTA1YzdhNGI3ZGMxZjk5My5qcGeSlQPNBF3Mic0NKc0HZ5MFzQGGzNzeAAGhMAE" 
                        />
                    </picture>
                    
                
            </div>
            
            <svg class="pictogram" data-lps-type style="display:none">
                <use></use>
            </svg>
            
        </div>
        <h3 class="title"><span class="" data-lps-inner-title>Donald Tusk sprząta w Instytucie Zachodnim. Tu nawet swoje biura mieli politycy PiS. &quot;Nie chcemy być przystawką&quot;</span></h3>

        <div class="other">
            <div class="native" style="display: none;" data-lps-partner></div>
            <div class="lpsLabel" style="display: none" data-lps-label></div>
        </div>
        
    </a>

    <a class="mediumNewsBox lpsItem" href="https://wiadomosci.onet.pl/poznan/seria-kolizji-i-wypadkow-w-poznaniu-i-okolicach-kilkadziesiat-zdarzen/zfhmv3s" id="wdgBests_6">
        <div class="imageContainer">
            <div class="imageWrapper">
                
                    
                    <picture>
                        <source srcset="//ocdn.eu/pulscms-transforms/1/BsJk9kpTURBXy9hNTU3ZmYzNTE1YzQxZjhmMjdlZmQzMjM0NmZmYzgwMy5qcGeSlQMAzKvNFWDNDAaTBc0Bhszc3gABoTAG" type="image/avif">
                        <source srcset="//ocdn.eu/pulscms-transforms/1/JlPk9kpTURBXy9hNTU3ZmYzNTE1YzQxZjhmMjdlZmQzMjM0NmZmYzgwMy5qcGeSlQMAzKvNFWDNDAaTBc0Bhszc3gABoTAF" type="image/webp">
                        <img 
                            data-lps-img="src"
                            data-lps-title="alt" 
                            src="//ocdn.eu/pulscms-transforms/1/AnJk9kpTURBXy9hNTU3ZmYzNTE1YzQxZjhmMjdlZmQzMjM0NmZmYzgwMy5qcGeSlQMAzKvNFWDNDAaTBc0Bhszc3gABoTAB" 
                        />
                    </picture>
                    
                
            </div>
            
            <svg class="pictogram" data-lps-type style="display:none">
                <use></use>
            </svg>
            
        </div>
        <h3 class="title"><span class="" data-lps-inner-title>Seria kolizji i wypadków w Poznaniu i okolicach. Policja odnotowała kilkadziesiąt zdarzeń</span></h3>

        <div class="other">
            <div class="native" style="display: none;" data-lps-partner></div>
            <div class="lpsLabel" style="display: none" data-lps-label></div>
        </div>
        
    </a>

</div>
        
    </section>

            
            <section
    class="wdgExtra"
    
        data-slotname="flat-natleft3"
        data-initpos="1"
        data-slots-positions=""
        data-nativestdpos="0"
        data-run-module="local/main.recentNews"
        
    
>
    
        <div class="header">
            <h2 class="title">Zobacz więcej</h2>
            
        </div>
    
    
        




<div class="items solrList " data-run-module="local/main.homePageList" data-total="17816">
    
        
        
            <a class="itemBox itemBoxBig  itemBoxLast" href="https://wiadomosci.onet.pl/poznan/67-latek-uciekal-przed-policja-przez-osiem-lat-teraz-wpadl/fsjsyww" data-uuid="41ee4a19-0765-4417-8ab8-6aacf27e25a1">
                
                
                <picture>
                    
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/yHBk9kpTURBXy9kNjhiZWYxNzJiZjRlZGNmNzk5ZmFlZjdjNDc3NDNjMi5qcGeSlQMAzGnNEmzNClyTBc0DIM0BlN4AAaEwBg"
                    
                        type="image/avif"
                    >
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/Eogk9kpTURBXy9kNjhiZWYxNzJiZjRlZGNmNzk5ZmFlZjdjNDc3NDNjMi5qcGeSlQMAzGnNEmzNClyTBc0DIM0BlN4AAaEwBQ"
                    
                        type="image/webp"
                    >

                    <img loading="lazy"
                        
                            src="//ocdn.eu/pulscms-transforms/1/OQck9kpTURBXy9kNjhiZWYxNzJiZjRlZGNmNzk5ZmFlZjdjNDc3NDNjMi5qcGeSlQMAzGnNEmzNClyTBc0DIM0BlN4AAaEwAQ"
                            width="800"
                            height="404"
                        
                        alt="67-latek uciekał przed policją przez osiem lat. Teraz wpadł" />
                
                </picture>

                <div class="boxTitle">
                    <h3 class="title"><span>67-latek uciekał przed policją przez osiem lat. Teraz wpadł</span></h3>
                </div>

                
            </a>
        
    
        
        
            <a class="itemBox itemBoxNormal " href="https://wiadomosci.onet.pl/poznan/nominat-zbigniewa-ziobry-zmienil-zdanie-rzeznik-bylego-ministra-odwolany/zdqezb1" data-uuid="e6836f21-b672-42c4-b8f5-3eda910bffc6">
                
                
                <picture>
                    
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/hv3k9kpTURBXy81ZjdkZTk0NDFmODQ2ZTViMjUxMWFiY2EzMjUzMzAwMy5qcGeSlQMAzQEwzRCWzQlUkwXM_Mx_3gABoTAG"
                    
                        type="image/avif"
                    >
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/B3Uk9kpTURBXy81ZjdkZTk0NDFmODQ2ZTViMjUxMWFiY2EzMjUzMzAwMy5qcGeSlQMAzQEwzRCWzQlUkwXM_Mx_3gABoTAF"
                    
                        type="image/webp"
                    >

                    <img loading="lazy"
                        
                            src="//ocdn.eu/pulscms-transforms/1/-Zik9kpTURBXy81ZjdkZTk0NDFmODQ2ZTViMjUxMWFiY2EzMjUzMzAwMy5qcGeSlQMAzQEwzRCWzQlUkwXM_Mx_3gABoTAB"
                            width="252"
                            height="127"
                        
                        alt="Nominat Zbigniewa Ziobry zmienił zdanie. &quot;Rzeźnik&quot; byłego ministra odwołany" />
                
                </picture>

                <div class="boxTitle">
                    <h3 class="title"><span>Nominat Zbigniewa Ziobry zmienił zdanie. &quot;Rzeźnik&quot; byłego ministra odwołany</span></h3>
                </div>

                
            </a>
        
    
        
        
            <a class="itemBox itemBoxNormal " href="https://wiadomosci.onet.pl/poznan/nad-malta-w-poznaniu-powstanie-hotel-urzednicy-prezydenta-przegrali-sprawe/pejwx8h" data-uuid="029975a6-a08e-4c40-80e8-4eb8e34ea217">
                
                
                <picture>
                    
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/tWuk9kpTURBXy9mM2FiYTExZmVmMGY0ODY4ODdiZDQ4NzAxMmRkYWI2NC5qcGeSlQMBAM0DEc0BupMFzPzMf94AAaEwBg"
                    
                        type="image/avif"
                    >
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/mV2k9kpTURBXy9mM2FiYTExZmVmMGY0ODY4ODdiZDQ4NzAxMmRkYWI2NC5qcGeSlQMBAM0DEc0BupMFzPzMf94AAaEwBQ"
                    
                        type="image/webp"
                    >

                    <img loading="lazy"
                        
                            src="//ocdn.eu/pulscms-transforms/1/Oelk9kpTURBXy9mM2FiYTExZmVmMGY0ODY4ODdiZDQ4NzAxMmRkYWI2NC5qcGeSlQMBAM0DEc0BupMFzPzMf94AAaEwAQ"
                            width="252"
                            height="127"
                        
                        alt="Hotel nad Maltą w Poznaniu jednak powstanie. Miasto przegrało sprawę odwoławczą" />
                
                </picture>

                <div class="boxTitle">
                    <h3 class="title"><span>Hotel nad Maltą w Poznaniu jednak powstanie. Miasto przegrało sprawę odwoławczą</span></h3>
                </div>

                
            </a>
        
    
        
        
            <a class="itemBox itemBoxNormal  itemBoxLast" href="https://wiadomosci.onet.pl/poznan/pogoda-poznan-na-dzis-prognoza-pogody-16012024/qfhk06d" data-uuid="2f855201-f9ed-47fc-8455-8e130eccdd1c">
                
                
                <picture>
                    
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/2-hk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAY"
                    
                        type="image/avif"
                    >
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/lfRk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAU"
                    
                        type="image/webp"
                    >

                    <img loading="lazy"
                        
                            src="//ocdn.eu/pulscms-transforms/1/mo0k9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAE"
                            width="252"
                            height="127"
                        
                        alt="Poznań - 16.01.2024. Pogoda na dziś" />
                
                </picture>

                <div class="boxTitle">
                    <h3 class="title"><span>Poznań - 16.01.2024. Pogoda na dziś</span></h3>
                </div>

                
            </a>
        
    
        
        
            <a class="itemBox itemBoxNormal " href="https://wiadomosci.onet.pl/poznan/bandycki-napad-w-sylwestra-w-grodzisku-wielkopolskim-policja-ujela-sprawcow/nc4g644" data-uuid="c9a0a605-8a76-41ed-973b-d68d5f15b3cf">
                
                
                <picture>
                    
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/ecLk9kpTURBXy81M2QwMjM2ZTM0ODE1N2U0MTJjMTI4OTI2ODJkODNkZC5qcGeSlQMAFM0EsM0Co5MFzPzMf94AAaEwBg"
                    
                        type="image/avif"
                    >
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/ooRk9kpTURBXy81M2QwMjM2ZTM0ODE1N2U0MTJjMTI4OTI2ODJkODNkZC5qcGeSlQMAFM0EsM0Co5MFzPzMf94AAaEwBQ"
                    
                        type="image/webp"
                    >

                    <img loading="lazy"
                        
                            src="//ocdn.eu/pulscms-transforms/1/9-Vk9kpTURBXy81M2QwMjM2ZTM0ODE1N2U0MTJjMTI4OTI2ODJkODNkZC5qcGeSlQMAFM0EsM0Co5MFzPzMf94AAaEwAQ"
                            width="252"
                            height="127"
                        
                        alt="Bandycki napad w Sylwestra w Grodzisku Wielkopolskim. Policja ujęła sprawców" />
                
                </picture>

                <div class="boxTitle">
                    <h3 class="title"><span>Bandycki napad w Sylwestra w Grodzisku Wielkopolskim. Policja ujęła sprawców</span></h3>
                </div>

                
            </a>
        
    
        
        
            <a class="itemBox itemBoxNormal " href="https://wiadomosci.onet.pl/poznan/sedziowie-z-poznania-zawieszeni-jest-decyzja-adama-bodnara/qb2fz5y" data-uuid="9dd7e76b-5d82-4e2c-b85e-2580c34a3e91">
                
                
                <picture>
                    
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/jVpk9kuTURBXy9lNTkwZWY4MC1hNWE5LTRjM2MtODcxZC1mNDJkNTYwNmEwMjguanBlZ5KVAwDMus0XcM0NMJMFzPzMf94AAaEwBg"
                    
                        type="image/avif"
                    >
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/Axyk9kuTURBXy9lNTkwZWY4MC1hNWE5LTRjM2MtODcxZC1mNDJkNTYwNmEwMjguanBlZ5KVAwDMus0XcM0NMJMFzPzMf94AAaEwBQ"
                    
                        type="image/webp"
                    >

                    <img loading="lazy"
                        
                            src="//ocdn.eu/pulscms-transforms/1/6kCk9kuTURBXy9lNTkwZWY4MC1hNWE5LTRjM2MtODcxZC1mNDJkNTYwNmEwMjguanBlZ5KVAwDMus0XcM0NMJMFzPzMf94AAaEwAQ"
                            width="252"
                            height="127"
                        
                        alt="Sędziowie z Poznania zawieszeni. Jest decyzja ministra Bodnara" />
                
                </picture>

                <div class="boxTitle">
                    <h3 class="title"><span>Sędziowie z Poznania zawieszeni. Jest decyzja ministra Bodnara</span></h3>
                </div>

                
            </a>
        
    
        
        
            <a class="itemBox itemBoxNormal  itemBoxLast" href="https://wiadomosci.onet.pl/poznan/pogoda-poznan-na-dzis-prognoza-pogody-15012024/fkppyxy" data-uuid="92e98234-7e63-44bd-800d-32417924f3d1">
                
                
                <picture>
                    
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/2-hk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAY"
                    
                        type="image/avif"
                    >
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/lfRk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAU"
                    
                        type="image/webp"
                    >

                    <img loading="lazy"
                        
                            src="//ocdn.eu/pulscms-transforms/1/mo0k9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAE"
                            width="252"
                            height="127"
                        
                        alt="Poznań - 15.01.2024. Jaka będzie pogoda w mieście?" />
                
                </picture>

                <div class="boxTitle">
                    <h3 class="title"><span>Poznań - 15.01.2024. Jaka będzie pogoda w mieście?</span></h3>
                </div>

                
            </a>
        
    
        
        
            <a class="itemBox itemBoxNormal " href="https://wiadomosci.onet.pl/poznan/pogoda-poznan-na-dzis-prognoza-pogody-14012024/l7xy32p" data-uuid="8d573218-ea52-4b2c-b7f7-b9f2c6b0739a">
                
                
                <picture>
                    
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/2-hk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAY"
                    
                        type="image/avif"
                    >
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/lfRk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAU"
                    
                        type="image/webp"
                    >

                    <img loading="lazy"
                        
                            src="//ocdn.eu/pulscms-transforms/1/mo0k9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAE"
                            width="252"
                            height="127"
                        
                        alt="Poznań. Prognoza pogody w dniu 14.01.2024" />
                
                </picture>

                <div class="boxTitle">
                    <h3 class="title"><span>Poznań. Prognoza pogody w dniu 14.01.2024</span></h3>
                </div>

                
            </a>
        
    
        
        
            <a class="itemBox itemBoxNormal " href="https://wiadomosci.onet.pl/poznan/polityczka-od-zbigniewa-ziobry-z-lasow-panstwowych-poleciala-jako-pierwsza/7bv7r3y" data-uuid="5b3992e1-dc2f-4c30-bfcb-db12a90fac48">
                
                
                <picture>
                    
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/b4mk9kpTURBXy9hNjM1YjNmYWRhNjg4NTU5ZjgxODQ3ZTg4NWYyMWM1OC5wbmeSlQMAAM0EsM0Co5MFzPzMf94AAaEwBg"
                    
                        type="image/avif"
                    >
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/cTpk9kpTURBXy9hNjM1YjNmYWRhNjg4NTU5ZjgxODQ3ZTg4NWYyMWM1OC5wbmeSlQMAAM0EsM0Co5MFzPzMf94AAaEwBQ"
                    
                        type="image/webp"
                    >

                    <img loading="lazy"
                        
                            src="//ocdn.eu/pulscms-transforms/1/5d2k9kpTURBXy9hNjM1YjNmYWRhNjg4NTU5ZjgxODQ3ZTg4NWYyMWM1OC5wbmeSlQMAAM0EsM0Co5MFzPzMf94AAaEwAQ"
                            width="252"
                            height="127"
                        
                        alt="Polityczka od Zbigniewa Ziobry odwołana z Lasów Państwowych. Była odpowiedzialna za aferę z billboardami" />
                
                </picture>

                <div class="boxTitle">
                    <h3 class="title"><span>Polityczka od Zbigniewa Ziobry odwołana z Lasów Państwowych. Była odpowiedzialna za aferę z billboardami</span></h3>
                </div>

                
            </a>
        
    
        
        
            <a class="itemBox itemBoxNormal  itemBoxLast" href="https://wiadomosci.onet.pl/poznan/pogoda-poznan-na-dzis-prognoza-pogody-13012024/9k3v2pc" data-uuid="4f47102c-fbc6-4031-b24d-19b64acf2dfd">
                
                
                <picture>
                    
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/2-hk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAY"
                    
                        type="image/avif"
                    >
                    <source 
                    
                        srcset="//ocdn.eu/pulscms-transforms/1/lfRk9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAU"
                    
                        type="image/webp"
                    >

                    <img loading="lazy"
                        
                            src="//ocdn.eu/pulscms-transforms/1/mo0k9kqTURBXy8xZDBjNjM0MGZmNmEyYTMxYTBmNzhjNDllMTA2YjVlZC5qcGVnkpUDAADNDhDNB-qTBcz8zH_eAAGhMAE"
                            width="252"
                            height="127"
                        
                        alt="Poznań. Jaka pogoda czeka nas 13.01.2024?" />
                
                </picture>

                <div class="boxTitle">
                    <h3 class="title"><span>Poznań. Jaka pogoda czeka nas 13.01.2024?</span></h3>
                </div>

                
            </a>
        
    
    <noscript>
        <style>
            .showMore, .showMore .more{
                display:none;
            }
        </style>
        

    <div class="pgMenuBlock">
        
        
            <a class="nextPage" href="?strona=2" >Następna</a>
        
    </div>

    </noscript>
</div>

    
</section>
            
            
            
            
            
            
            
            

            

        </section>
        <aside class="extraList" data-run-module="local/main.asideContainerDel" data-content-container="stream">
            
                
                    
                
                    
    
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.simpleAd"
            data-configuration="{&quot;slotName&quot;:&quot;flat-boxright1&quot;}"
        ></aside>
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.simpleAd"
            data-configuration="{&quot;slotName&quot;:&quot;flat-boxright2&quot;}"
        ></aside>
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.simpleAd"
            data-configuration="{&quot;slotName&quot;:&quot;flat-boxright3&quot;}"
        ></aside>
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.simpleAd"
            data-configuration="{&quot;slotName&quot;:&quot;flat-boxright4&quot;}"
        ></aside>
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.simpleAd"
            data-configuration="{&quot;slotName&quot;:&quot;flat-boxright5&quot;}"
        ></aside>
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.simpleAd"
            data-configuration="{&quot;slotName&quot;:&quot;flat-zumibox&quot;}"
        ></aside>
    


                
                    
    
    
        
        
        
        
        <aside
            class=""
            style="height:1500px;"
            data-run-module="local/main.floatingAd"
            data-configuration="{&quot;slotName&quot;:&quot;right&quot;,&quot;floatingHeight&quot;:1500,&quot;slotsNumber&quot;:1,&quot;containerHeight&quot;:&quot;1500&quot;}"
        ></aside>
    


                
                    
    <div 
        class="widget fbpageplugin disabled" 
        data-run-module="local/main.fbpage" 
        data-url="https://www.facebook.com/OnetPoznan/" 
        data-height="450" 
        data-bookmarks="timeline"
    >
        <header>
            <span>Facebook</span>
        </header>
    </div>

                
                    
    
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.simpleAd"
            data-configuration="{&quot;slotName&quot;:&quot;rectangle2&quot;}"
        ></aside>
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.floatingDesktopExpanding"
            data-configuration="{&quot;slotName&quot;:&quot;right2&quot;,&quot;position&quot;:&quot;AUTO&quot;,&quot;floatingHeight&quot;:1500,&quot;containerHeightToElement&quot;:&quot;.stream, #articleDetailBottom .articleDetail, .pageContent &gt; .articleDetail&quot;,&quot;lazy&quot;:true,&quot;extraData&quot;:{&quot;reservedSpace&quot;:{&quot;slot-rectangle2&quot;:600}}}"
        ></aside>
    


                
            
        </aside>
    </div>
    <footer data-scroll="stopka">
        <div class="footer pageWrapper">
            <!-- footer_navigation -->
            <div class="serviceFooterContainer">
    
        <a class="portalLogo" href="https://www.onet.pl">
            <svg>
                <use xlink:href="#portalLogo">
                    
                        Onet.pl
                    
                </use>
            </svg>
        </a>
    
    
    <ul class="footNav colLeft">
        
            
                <li>
                    <a href="http://ofirmie.onet.pl">O firmie</a>
                </li>
            
        
            
                <li>
                    <a href="http://ofirmie.onet.pl/polityka-prywatnosci">Prywatność</a>
                </li>
            
        
            
                <li>
                    <a href="https://reklama.ringieraxelspringer.pl/contact">Reklama w Onet Wiadomości</a>
                </li>
            
        
            
                <li>
                    <a href="https://www.ringieraxelspringer.pl/kariera/oferty-pracy">Praca w Onecie</a>
                </li>
            
        
            
                <li>
                    <a href="/mapa-serwisu">Mapa serwisu</a>
                </li>
            
        
    </ul>
    
    
        <ul class="footNav colRight">
            <li>
                <span class="copyrights"> 
                    &copy; 2024 Ringier Axel Springer Polska sp. z o.o. - 
                    Powered by <a href="https://ringpublishing.com/">Ring Publishing</a> | 
                    Developed by <a href="https://tech.ringieraxelspringer.com/">RAS Tech</a>
                </span>
            </li>
        </ul>
    
</div><!-- footer -->
        </div>
        <div class="footer pageWrapper">
            <div class="footerScrapping">
    Systematyczne pobieranie treści, danych lub informacji z tej strony internetowej (<i>web scraping</i>),
    jak również eksploracja tekstu i danych (TDM) (w tym pobieranie i eksploracyjna analiza danych,
    indeksowanie stron internetowych, korzystanie z treści lub przeszukiwanie z pobieraniem baz danych),
    czy to przez roboty, <i>web crawlers</i>, oprogramowanie, narzędzia lub dowolną manualną lub zautomatyzowaną metodą,
    w celu tworzenia lub rozwoju oprogramowania, w tym m.in. szkolenia systemów uczenia maszynowego lub sztucznej inteligencji (AI),
    bez uprzedniej, wyraźnej zgody Ringier Axel Springer Polska sp. z o.o. (RASP) jest zabronione.
    Wyjątek stanowią sytuacje, w których treści, dane lub informacje są wykorzystywane w celu ułatwienia ich wyszukiwania przez wyszukiwarki internetowe.
</div>
        </div>
    </footer>
</div>

    


    
    
    
    
    
    
    
    
        <div
            id="placeholder-layer"
            data-slotname="layer"
            data-position=""
            data-slotid="onet-ad-layer"
            data-run-module="localmobile/main.defineSimpleAd"
            data-noplaceholder='true'
            data-reducedads="null"
            
            data-lazy="0"
            
        >
        </div>
    



</body>
</html>