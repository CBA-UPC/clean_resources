(function(_ds){var window=this;var exa=U7=V7=W7=fxa=gxa=function(a){var b=a.pages;const c=a.xL;var d=a.LL;const e=a.projectName,f=a.fD,g=a.query;var h=a.XL;const k=a.rD;a=a.gs;let l;l='<div class="devsite-suggest-wrapper '+(k?"":"devsite-search-disabled")+'" tabindex="0" role="listbox" aria-label="'+_ds.Vx("Search Suggestions");l+='"><div class="devsite-suggest-section">';if(0<d.length){l=l+'<div class="devsite-suggest-sub-section" role="group" aria-labelledby="devsite-suggest-header-partial-query"><div class="devsite-suggest-header" id="devsite-suggest-header-partial-query">B\u00fasquedas sugeridas'+
((f?'<span class="devsite-suggest-project">'+_ds.T(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" action="Query Suggestion Click">');var m=d.length;for(var q=0;q<m;q++){var w=d[q];l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-partial-query-'+_ds.U(q)+'" index=":'+_ds.U(q)+'">'+W7(w.getPath(),w.getTitle(),_ds.eh(w,14),"Query Suggestion Click")+"</div>"}l+="</devsite-analytics-scope></div>"}l+=0<d.length&&0<b.length?'<hr role="none">':
"";if(0<b.length){l=l+'<div class="devsite-suggest-sub-section" role="group" aria-labelledby="devsite-suggest-header-product"><div class="devsite-suggest-header" id="devsite-suggest-header-product">P\u00e1ginas'+((f?'<span class="devsite-suggest-project">'+_ds.T(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" action="Page Suggestion Click">');m=b.length;for(q=0;q<m;q++)w=b[q],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-product-'+
_ds.U(q)+'" index=":'+_ds.U(q)+'">'+W7(w.getPath(),w.getTitle(),_ds.eh(w,14),"Page Suggestion Click",void 0,_ds.x(w,4),f)+"</div>";l+="</devsite-analytics-scope></div>"}l+=0<h.length&&0<b.length+d.length?'<hr role="none">':"";if(0<h.length){l=l+'<div class="devsite-suggest-sub-section" role="group" aria-labelledby="devsite-suggest-header-reference"><div class="devsite-suggest-header" id="devsite-suggest-header-reference">Referencias'+((f?'<span class="devsite-suggest-project">'+_ds.T(e)+"</span>":
"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" action="Reference Suggestion Click">');m=h.length;for(q=0;q<m;q++)w=h[q],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-reference-'+_ds.U(q)+'" index=":'+_ds.U(q)+'">'+W7(w.getPath(),w.getTitle(),_ds.eh(w,14),"Reference Suggestion Click",_ds.x(w,3),_ds.x(w,4),f,_ds.ud(w,10,_ds.Oc,2)[0])+"</div>";l+="</devsite-analytics-scope></div>"}l+=0<c.length&&0<b.length+d.length+h.length?'<hr role="none">':
"";if(0<c.length){l+='<div class="devsite-suggest-sub-section" role="group" aria-labelledby="devsite-suggest-header-other-products"><div class="devsite-suggest-header" id="devsite-suggest-header-other-products">Productos</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" action="Product Suggestion Click">';b=c.length;for(d=0;d<b;d++)h=c[d],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-other-products-'+_ds.U(d)+'" index=":'+_ds.U(d)+'">'+W7(h.getPath(),
h.getTitle(),_ds.eh(h,14),"Product Suggestion Click")+"</div>";l+="</devsite-analytics-scope></div>"}l+="</div>"+(k?'<div class="devsite-suggest-footer" role="none">'+(f?U7(e):"")+V7(g,f,a)+"</div>":"")+"</div>";return(0,_ds.S)(l)};var hxa=/[ .()<>{}\[\]\/:,]+/,ixa=0,lxa=jxa=function(a,b){b=b.detail;var c=b.suggestions;b=b.query;if(a.h.query.toLowerCase().startsWith(b.toLowerCase()))if(c){var d=c.jg();c=d.filter(w=>
2===w.Gj());var e=d.filter(w=>3===w.Gj()),f=d.filter(w=>4===w.Gj()).slice(0,5),g=d.filter(;d=c.length+f.length+g.length;for(var h of f)h.setPath(_ds.hm(`${a.ra||"/s/results"}/?q=${h.getTitle()}`).toString());var k=b.split(hxa);e.forEach(w=>_ds.nda(w,_ds.ud(w,10,_ds.Oc,2).filter());h=a.getAttribute("project-name")||"";var l=a.hasAttribute("project-scope"),m=a.hasAttribute("enable-search"),q=a.getAttribute("tenant-name")||"";c={pages:c,projectName:h,fD:l,xL:g,
LL:f,query:b,XL:e,rD:m,gs:q};0===d?_ds.L(a.ea,fxa,c):(_ds.L(a.ea,gxa,c),mxa(a,b));a.m.setAttribute("aria-expanded","true");a.ea.removeAttribute("hidden")}else a.ea.setAttribute("hidden",""),a.m.setAttribute("aria-expanded","false")},Y7=Z7=kxa=X7=mxa=$7=$7.prototype.connectedCallback=$7.prototype.connectedCallback;$7.prototype.attributeChangedCallback=$7.prototype.attributeChangedCallback;
$7.prototype.disconnectedCallback=$7.prototype.disconnectedCallback;try{customElements.define("devsite-search",$7)}catch(a){console.warn("devsite.app.customElement.DevsiteSearch",a)};})(_ds_www);