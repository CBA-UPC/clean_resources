const s=(r,e)=>{try{if(typeof sessionStorage<"u"){const o=JSON.stringify(e);sessionStorage.setItem(r,o)}}catch(o){throw console.error(`Error saving to sessionStorage: ${o}`),o}},t=r=>{try{if(typeof sessionStorage<"u"){const e=sessionStorage.getItem(r);if(e!==null)return JSON.parse(e)}}catch(e){throw console.error(`Error getting from sessionStorage: ${e}`),e}return null},n=r=>{try{typeof sessionStorage<"u"&&sessionStorage.removeItem(r)}catch(e){throw console.error(`Error deleting from sessionStorage: ${e}`),e}};export{n as d,t as g,s};