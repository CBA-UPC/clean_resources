(function(){"use strict";window.addEventListener("DOMContentLoaded",function(){function populateSelectList(locations,apiPath,selectList,culture){if(selectList){const values=Array.from(locations).map(,data={Culture:culture,Locations:values};fetch(apiBasePath+apiPath,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","x-ph":"internal"},body:JSON.stringify(data)}).then(.then(options=>{const instance=selectList.tomselect;instance&&(instance.clearOptions(),options.forEach()}).catch(error=>console.error("Error updating locations: "+apiPath,error))}}const countrySelect=document.getElementById("l-country"),regionSelect=document.getElementById("l-region"),locationSelect=document.getElementById("l-location"),culture=document.querySelector("html").getAttribute("lang"),apiBasePath="/JobsApi/";countrySelect&&countrySelect.addEventListener("change",function(){const country=this.selectedOptions;populateSelectList(country,"GetLocationsForCountry/",locationSelect,culture)},!1);regionSelect&&regionSelect.addEventListener("change",function(){const region=this.selectedOptions;if(region.length>0)populateSelectList(region,"GetLocationsForRegion/",locationSelect,culture);else{var country=countrySelect.selectedOptions;populateSelectList(country,"GetLocationsForCountry/",locationSelect,culture)}},!0)})})();
//# sourceMappingURL=/phb/nmap/lookups.js.vc1fe4d0762230192a4e5a7e8788be8ebf14328cb