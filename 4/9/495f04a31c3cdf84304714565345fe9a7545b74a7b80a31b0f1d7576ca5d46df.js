// This file has to be called early in execution in order for its functions to
// be used by other files.



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const irclickid = urlParams.get("irclickid");
if (irclickid) {
  setCookie("irclickid", irclickid);
}
